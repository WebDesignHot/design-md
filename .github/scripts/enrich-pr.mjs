#!/usr/bin/env node
/**
 * PR enrichment for design-md catalog. Reads each changed .md file's
 * frontmatter, then:
 *
 *   1. Collects categories (e.g. ["gaming", "saas"]) → emits as labels.
 *   2. Fetches each entry's source_url, runs the same theme-toggle
 *      regex set the local audit-themes.mjs script uses, and writes a
 *      sticky-comment markdown report covering each PR file.
 *
 * Inputs (env):
 *   CHANGED_FILES — space-separated relative paths
 *   GITHUB_OUTPUT — appended with `labels=<json-array>` for the workflow
 *
 * Outputs:
 *   /tmp/enrich-report.md  — the comment body
 *   GITHUB_OUTPUT.labels   — JSON array of category labels to apply
 *
 * Why a Node script and not bash + yq:
 *   We need fetch() for the source_url audit; bash can do that with
 *   curl but at this point Node is simpler and the script tests run
 *   locally with `node .github/scripts/enrich-pr.mjs` for debugging.
 */
import { readFile, appendFile } from 'node:fs/promises'
import { writeFileSync } from 'node:fs'

const SIGNALS = [
  { name: 'meta-color-scheme-both', re: /<meta[^>]+name=["']color-scheme["'][^>]+content=["'][^"']*(?:light\s+dark|dark\s+light)[^"']*["']/i, w: 4 },
  { name: 'theme-toggle-aria', re: /aria-label=["'][^"']*(?:toggle theme|theme toggle|switch theme|dark mode|light mode|color theme|color scheme)[^"']*["']/i, w: 4 },
  { name: 'theme-toggle-button-text', re: />\s*(?:Dark mode|Light mode|Toggle theme|Switch theme|Theme:)\s*</i, w: 3 },
  { name: 'data-theme-attr', re: /\bdata-theme=["'](?:dark|light|system)["']/i, w: 3 },
  { name: 'prefers-color-scheme-css', re: /@media[^{]*prefers-color-scheme/i, w: 2 },
  { name: 'tailwind-dark-class', re: /\bdark:(bg|text|border|ring|fill|stroke|from|to|via|hover:|focus:)/, w: 2 },
  { name: 'theme-context-selector', re: /(?:^|[^a-z])(?:html|body)\.dark\b|\[data-theme=/, w: 2 },
  { name: 'colorScheme-js', re: /colorScheme\s*[:=]\s*["'](?:light|dark|system)/i, w: 2 },
  { name: 'next-themes', re: /next-themes|useTheme\s*\(/, w: 3 },
  { name: 'localStorage-theme', re: /localStorage[^;]+["'](?:theme|colorScheme|color-scheme|color-mode)["']/i, w: 2 },
]

function parseFrontmatter(source) {
  const m = source.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return null
  const fm = m[1]

  // Targeted regex parsing — categories (inline array), source_url, name, slug, spec.
  const out = {}
  const nameM = fm.match(/^name:\s*(.+?)\s*$/m)
  if (nameM) out.name = nameM[1].trim().replace(/^["']|["']$/g, '')
  const slugM = fm.match(/^slug:\s*(.+?)\s*$/m)
  if (slugM) out.slug = slugM[1].trim().replace(/^["']|["']$/g, '')
  const urlM = fm.match(/^source_url:\s*(\S+)\s*$/m)
  if (urlM) out.source_url = urlM[1].trim().replace(/^["']|["']$/g, '')
  const specM = fm.match(/^spec:\s*(\S+)\s*$/m)
  if (specM) out.spec = specM[1].trim().replace(/^["']|["']$/g, '')
  const catsM = fm.match(/^categories:\s*\[([^\]]*)\]\s*$/m)
  if (catsM) {
    out.categories = catsM[1]
      .split(',')
      .map((s) => s.trim().replace(/^["']|["']$/g, ''))
      .filter(Boolean)
  }
  return out
}

async function fetchHtml(url) {
  const ctrl = new AbortController()
  const t = setTimeout(() => ctrl.abort(), 15000)
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
        accept: 'text/html,application/xhtml+xml',
      },
      redirect: 'follow',
      signal: ctrl.signal,
    })
    if (!res.ok) return { ok: false, status: `http-${res.status}`, html: '' }
    const html = (await res.text()).slice(0, 500_000)
    return { ok: true, html }
  } catch (err) {
    return { ok: false, status: err.name === 'AbortError' ? 'timeout' : `err-${err.message?.slice(0, 40)}`, html: '' }
  } finally {
    clearTimeout(t)
  }
}

function auditHtml(html) {
  const matched = []
  let score = 0
  for (const s of SIGNALS) {
    if (s.re.test(html)) {
      matched.push(s.name)
      score += s.w
    }
  }
  let conf = 'low'
  if (score >= 6) conf = 'high'
  else if (score >= 3) conf = 'mid'
  return { score, conf, matched }
}

function classifyConf(conf) {
  if (conf === 'high') return '🟢 **high** — likely ships a real toggleable light + dark mode'
  if (conf === 'mid') return '🟡 **mid** — partial signals; verify the entry encodes both modes'
  return '🟢 **low** — single-theme is fine; no toggle detected on the source site'
}

async function main() {
  const changed = (process.env.CHANGED_FILES || '').trim().split(/\s+/).filter(Boolean)
  if (!changed.length) {
    console.log('No design-md/*.md files changed; nothing to enrich.')
    writeFileSync('/tmp/enrich-report.md', '_(no design-md/*.md files changed)_')
    if (process.env.GITHUB_OUTPUT) await appendFile(process.env.GITHUB_OUTPUT, 'labels=[]\n')
    return
  }

  const reports = []
  const labels = new Set()

  for (const file of changed) {
    let fm
    try {
      const text = await readFile(file, 'utf8')
      fm = parseFrontmatter(text)
    } catch (err) {
      reports.push(`### \`${file}\`\n\n❌ Could not read file: ${err.message}\n`)
      continue
    }
    if (!fm) {
      reports.push(`### \`${file}\`\n\n❌ Could not parse frontmatter.\n`)
      continue
    }

    // Collect labels
    for (const c of fm.categories ?? []) labels.add(`category:${c}`)

    // Theme-toggle audit
    let auditLine = '_(no source_url to audit)_'
    if (fm.source_url) {
      console.log(`Auditing ${file} → ${fm.source_url}`)
      const r = await fetchHtml(fm.source_url)
      if (!r.ok) {
        auditLine = `⚠ Could not fetch source_url (\`${r.status}\`)`
      } else {
        const a = auditHtml(r.html)
        auditLine = `${classifyConf(a.conf)}\n\n  Score: **${a.score}**\n  Signals: ${a.matched.length ? a.matched.map((s) => `\`${s}\``).join(', ') : '_(none)_'}`
      }
    }

    const cats = (fm.categories ?? []).map((c) => `\`${c}\``).join(', ') || '_(none)_'
    reports.push(
      `### \`${file}\`\n\n` +
        `**Name**: ${fm.name ?? '_(missing)_'}  \n` +
        `**Spec**: ${fm.spec ?? '_(missing)_'}  \n` +
        `**Source URL**: ${fm.source_url ? `<${fm.source_url}>` : '_(missing)_'}  \n` +
        `**Categories**: ${cats}\n\n` +
        `**Theme-toggle audit**: ${auditLine}\n`,
    )
  }

  const body = `## Entry enrichment\n\n${reports.join('\n---\n\n')}\n\n` +
    `_Auto-generated by \`.github/workflows/enrich-pr.yml\`._`

  writeFileSync('/tmp/enrich-report.md', body)

  // Emit labels for the workflow to apply
  const labelArray = [...labels].sort()
  if (process.env.GITHUB_OUTPUT) {
    await appendFile(process.env.GITHUB_OUTPUT, `labels=${JSON.stringify(labelArray)}\n`)
  }
  console.log('Labels to apply:', labelArray)
  console.log('Report written to /tmp/enrich-report.md')
}

main().catch((err) => {
  console.error('Enrich script failed:', err)
  process.exit(1)
})
