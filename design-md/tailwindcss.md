---
name: Tailwind CSS
tagline: 'The system applied to itself — Inter Variable on white canvas, signature cyan #06b6d4, every component built from Tailwind utilities.'
author: webdesignhot
source_url: https://tailwindcss.com
spec: design.md/v1.5
quality: curated
featured: true
categories: [dev-tools, saas, oss]
tags: [light, sans, mono, structured, utility, open-source]
preview_swatch: ['#ffffff', '#06b6d4', '#0f172a']
related: [vercel, linear, refactoring-ui]
description: 'Tailwind''s marketing site is the framework demonstrating itself — Inter Variable headlines, the canonical slate-on-white palette, signature cyan ''#06b6d4'' brand, and every component composable from the utility classes the site is selling. The most self-referential design system on the web — when you ship a CSS framework, your marketing page is your demo.'

themes:
  default: light
  available: [light, dark]
  switch-via: 'data-theme attribute on <html>; persisted in localStorage; respects prefers-color-scheme on first paint'

colors:
  light:
    bg: '#ffffff'                   # pure white canvas
    bg-quiet: '#f8fafc'             # slate-50 — section breakers, subtle alternation
    bg-elev: '#f1f5f9'              # slate-100 — raised card / panel surface
    bg-elev-2: '#e2e8f0'            # slate-200 — hover surface, deeper elevation
    bg-tint: '#ecfeff'              # cyan-50 — tinted brand surface for callouts
    bg-tint-2: '#cffafe'            # cyan-100 — deeper tinted brand surface
    surface: '#ffffff'              # primary card surface
    surface-2: '#f8fafc'            # nested secondary card
    text: '#0f172a'                 # slate-900 — body, headlines
    text-soft: '#475569'            # slate-600 — supporting copy
    text-muted: '#64748b'           # slate-500 — secondary copy, labels
    text-faint: '#94a3b8'           # slate-400 — meta, captions
    text-quiet: '#cbd5e1'           # slate-300 — disabled
    brand: '#06b6d4'                # cyan-500 — the signature brand axis
    brand-hover: '#0891b2'          # cyan-600 — pressed state
    brand-active: '#0e7490'         # cyan-700 — active depressed
    brand-soft: '#cffafe'           # cyan-100 — tinted callout
    brand-soft-2: '#ecfeff'         # cyan-50 — softer tinted surface
    brand-deep: '#155e75'           # cyan-800 — deep brand for illustrative shadow
    brand-bright: '#22d3ee'         # cyan-400 — brighter brand for hover/highlight
    accent-sky: '#0ea5e9'           # sky-500 — secondary accent
    accent-sky-soft: '#e0f2fe'      # sky-100
    accent-blue: '#3b82f6'          # blue-500
    accent-violet: '#8b5cf6'        # violet-500
    accent-pink: '#ec4899'          # pink-500
    accent-emerald: '#10b981'       # emerald-500 — semantic success
    accent-amber: '#f59e0b'         # amber-500 — semantic warning
    accent-rose: '#f43f5e'          # rose-500 — semantic danger
    border: '#e2e8f0'               # slate-200 — hairline rules
    border-strong: '#cbd5e1'        # slate-300 — emphasized border
    border-soft: '#f1f5f9'          # slate-100 — softer divider
    border-brand: '#06b6d4'         # cyan-500 — brand-tinted border
    link: '#0891b2'                 # cyan-600 — link colour
    link-hover: '#0e7490'           # cyan-700 — link hover
    on-brand: '#ffffff'             # white text on cyan
    code-bg: '#0f172a'              # slate-900 — code block fill (always dark, even in light theme)
    code-bg-light: '#1e293b'        # slate-800 — alternate code-block fill
    code-text: '#e2e8f0'            # slate-200 — primary code text
    code-keyword: '#22d3ee'         # cyan-400 — syntax keyword
    code-string: '#86efac'          # green-300 — syntax string
    code-attribute: '#fbbf24'       # amber-400 — syntax attribute
    code-comment: '#64748b'         # slate-500 — syntax comment
    code-tag: '#f87171'             # red-400 — syntax tag
    shadow-soft: 'rgba(15,23,42,0.04)'
    shadow-medium: 'rgba(15,23,42,0.08)'
    shadow-strong: 'rgba(15,23,42,0.16)'
    shadow-deep: 'rgba(15,23,42,0.24)'

  dark:
    bg: '#0f172a'                   # slate-900 — dark canvas
    bg-quiet: '#1e293b'             # slate-800 — section breakers
    bg-elev: '#1e293b'              # slate-800 — raised card / panel
    bg-elev-2: '#334155'            # slate-700 — hover surface, deeper elevation
    bg-tint: 'rgba(6, 182, 212, 0.08)'  # cyan tint for callouts
    bg-tint-2: 'rgba(6, 182, 212, 0.16)'
    surface: '#1e293b'              # slate-800 — primary card surface
    surface-2: '#334155'            # slate-700 — nested
    text: '#f1f5f9'                 # slate-100 — body, headlines
    text-soft: '#cbd5e1'            # slate-300 — supporting copy
    text-muted: '#94a3b8'           # slate-400 — secondary copy
    text-faint: '#64748b'           # slate-500 — meta, captions
    text-quiet: '#475569'           # slate-600 — disabled
    brand: '#22d3ee'                # cyan-400 — brighter on dark for legibility
    brand-hover: '#06b6d4'          # cyan-500 — pressed
    brand-active: '#0891b2'         # cyan-600 — active depressed
    brand-soft: 'rgba(34, 211, 238, 0.10)'
    brand-soft-2: 'rgba(34, 211, 238, 0.18)'
    brand-deep: '#155e75'
    brand-bright: '#67e8f9'         # cyan-300 — brightest for highlights
    accent-sky: '#38bdf8'           # sky-400
    accent-sky-soft: 'rgba(56, 189, 248, 0.16)'
    accent-blue: '#60a5fa'          # blue-400
    accent-violet: '#a78bfa'        # violet-400
    accent-pink: '#f472b6'          # pink-400
    accent-emerald: '#34d399'       # emerald-400
    accent-amber: '#fbbf24'         # amber-400
    accent-rose: '#fb7185'          # rose-400
    border: '#334155'               # slate-700 — hairline rules
    border-strong: '#475569'        # slate-600 — emphasized
    border-soft: '#1e293b'          # slate-800 — softer
    border-brand: '#22d3ee'
    link: '#22d3ee'                 # cyan-400 link
    link-hover: '#67e8f9'           # cyan-300 hover
    on-brand: '#0f172a'             # slate-900 text on cyan
    code-bg: '#020617'              # slate-950 — code block deeper than canvas
    code-bg-light: '#0f172a'        # canvas tier as alternate
    code-text: '#e2e8f0'
    code-keyword: '#22d3ee'
    code-string: '#86efac'
    code-attribute: '#fbbf24'
    code-comment: '#64748b'
    code-tag: '#f87171'
    shadow-soft: 'rgba(0, 0, 0, 0.30)'
    shadow-medium: 'rgba(0, 0, 0, 0.45)'
    shadow-strong: 'rgba(0, 0, 0, 0.60)'
    shadow-deep: 'rgba(0, 0, 0, 0.75)'

typography:
  display:
    family: '"Inter Variable", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600, 700, 800]
    opentype: ['kern', 'liga', 'calt', 'ss01']
  body:
    family: '"Inter Variable", Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
    opentype: ['kern', 'liga', 'calt']
  mono:
    family: '"Fira Code Variable", "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400, 500, 600]
    opentype: ['kern', 'liga', 'calt', 'tnum', 'zero']
  scale:
    display-hero:    { size: 96, weight: 800, lineHeight: 1.0,  tracking: '-0.03em',  family: display, opentype: 'kern, liga, ss01' }
    display-large:   { size: 72, weight: 800, lineHeight: 1.0,  tracking: '-0.025em', family: display, opentype: 'kern, liga, ss01' }
    h1:              { size: 56, weight: 800, lineHeight: 1.05, tracking: '-0.022em', family: display, opentype: 'kern, liga, ss01' }
    h2:              { size: 36, weight: 700, lineHeight: 1.15, tracking: '-0.015em', family: display, opentype: 'kern, liga' }
    h3:              { size: 24, weight: 600, lineHeight: 1.3,  tracking: '-0.005em', family: display, opentype: 'kern, liga' }
    h4:              { size: 20, weight: 600, lineHeight: 1.35, tracking: '0',        family: body }
    body-large:      { size: 20, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body, opentype: 'kern, liga' }
    body:            { size: 16, weight: 400, lineHeight: 1.7,  tracking: '0',        family: body, opentype: 'kern, liga' }
    body-small:      { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body, opentype: 'kern, liga' }
    button:          { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0',        family: body }
    button-large:    { size: 16, weight: 600, lineHeight: 1.0,  tracking: '0',        family: body }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    label:           { size: 12, weight: 500, lineHeight: 1.3,  tracking: '0.04em',   family: mono, transform: 'uppercase' }
    label-sans:      { size: 12, weight: 600, lineHeight: 1.3,  tracking: '0.06em',   family: body, transform: 'uppercase' }
    caption:         { size: 13, weight: 400, lineHeight: 1.45, tracking: '0',        family: body }
    micro:           { size: 11, weight: 600, lineHeight: 1.3,  tracking: '0.05em',   family: body, transform: 'uppercase' }
    code:            { size: 14, weight: 400, lineHeight: 1.65, tracking: '0',        family: mono, opentype: 'liga, calt, tnum' }
    code-bold:       { size: 14, weight: 500, lineHeight: 1.65, tracking: '0',        family: mono }
    code-inline:     { size: 14, weight: 500, lineHeight: 1.4,  tracking: '0',        family: mono, opentype: 'liga' }
    code-small:      { size: 13, weight: 400, lineHeight: 1.55, tracking: '0',        family: mono }

radius:
  none: 0                          # rounded-none
  micro: 2                         # rounded-sm
  xs: 4                            # rounded
  sm: 6                            # rounded-md
  md: 8                            # rounded-lg — buttons
  lg: 12                           # rounded-xl — cards, code blocks
  xl: 16                           # rounded-2xl — modals
  pill: 9999                       # rounded-full — primary CTA

spacing:
  base: 4                          # the entire framework's spacing unit
  xxs: 2                           # space-0.5
  xs: 4                            # space-1
  sm: 8                            # space-2
  md: 12                           # space-3
  lg: 16                           # space-4
  xl: 24                           # space-6
  xxl: 32                          # space-8
  section-sm: 64                   # space-16
  section: 96                      # space-24 — default section rhythm
  section-lg: 128                  # space-32
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192]

layout:
  page-width: 1280
  prose-width: 768                 # the docs reading-width — same as MDN, Stripe Docs
  header-height: 64
  hero-height: 720
  grid-gap: 24
  grid-columns: 12

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'      # ease-in-out
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'      # custom (not a default Tailwind ease)
  ease-entrance: 'cubic-bezier(0, 0, 0.2, 1)'         # ease-out
  ease-exit: 'cubic-bezier(0.4, 0, 1, 1)'             # ease-in
  ease-linear: 'linear'
  duration-fast: 150
  duration-standard: 200
  duration-slow: 300
  duration-fade: 500
  reduced-motion: 'respects prefers-reduced-motion: reduce — gradient hero animation pauses, marquee logos pause, all transforms collapse to opacity-only'

breakpoints:
  mobile: 640                      # sm
  tablet: 768                      # md
  desktop: 1024                    # lg
  wide: 1280                       # xl
  ultra: 1536                      # 2xl

shadows:
  ambient: 'rgba(15,23,42,0.04) 0 1px 2px'
  standard: 'rgba(15,23,42,0.05) 0 1px 3px, rgba(15,23,42,0.06) 0 1px 2px'  # the canonical shadow-sm two-layer
  elevated: 'rgba(15,23,42,0.08) 0 10px 15px -3px, rgba(15,23,42,0.04) 0 4px 6px -4px'  # shadow-lg
  deep: 'rgba(15,23,42,0.10) 0 25px 50px -12px'  # shadow-xl / shadow-2xl
  ring: '0 0 0 3px rgba(6,182,212,0.30)'         # cyan focus ring
  ring-soft: '0 0 0 3px rgba(6,182,212,0.15)'    # softer focus ring
  brand-glow: '0 0 24px rgba(6,182,212,0.30)'    # brand glow on featured CTAs
  cyan-radial: 'radial-gradient(circle at 50% 50%, rgba(6,182,212,0.20), transparent 70%)'  # hero radial glow

accessibility:
  contrast-text-on-bg: 17.4              # #0f172a on #ffffff — AAA at all sizes
  contrast-text-on-brand: 4.8            # #ffffff on #06b6d4 — AA at body, AAA at large
  contrast-brand-on-bg: 4.4              # #06b6d4 on #ffffff — AA at large only; cyan-600 (#0891b2) used for body links to clear AA at body
  contrast-link-on-bg: 6.0               # #0891b2 on #ffffff — AAA at large, AA at body
  contrast-muted-on-bg: 7.0              # #475569 on #ffffff — AAA at body
  contrast-soft-on-bg: 4.6                # #64748b on #ffffff — AA at body
  contrast-text-on-dark: 16.6             # #f1f5f9 on #0f172a — AAA
  focus-ring: '3px solid rgba(6,182,212,0.30) — cyan-tinted ring with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'tab order follows visual; skip-link present; copy-code buttons keyboard-accessible; component preview cards have keyboard-accessible code-source toggle'

components:
  button-primary:
    background: '#0f172a'
    text: '#ffffff'
    radius: 9999
    padding: '12px 24px'
    height: 44
    font: button
    border: 'none'
    hover: 'background #1e293b; transform translateY(-1px); shadow rgba(15,23,42,0.10) 0 6px 16px -4px'
    active: 'background #334155; transform translateY(0)'
    focus: 'outline 3px solid rgba(6,182,212,0.30); outline-offset 2px'
    use: 'primary CTA — Get started, Read the docs. Slate-900 pill on white. Cyan stays for accents, not action fills.'
  button-cyan:
    background: '#06b6d4'
    text: '#ffffff'
    radius: 9999
    padding: '12px 24px'
    height: 44
    font: button
    hover: 'background #0891b2; transform translateY(-1px); shadow rgba(6,182,212,0.30) 0 8px 24px -8px'
    active: 'background #0e7490'
    use: 'feature-card CTA — used in component preview cards and pricing tier cards where the brand wants chromatic emphasis. The rare cyan-on-white CTA moment.'
  button-secondary:
    background: '#f1f5f9'
    text: '#0f172a'
    radius: 9999
    padding: '12px 24px'
    height: 44
    font: button
    border: '1px solid #e2e8f0'
    hover: 'background #e2e8f0; border #cbd5e1'
    use: 'secondary CTA — Learn more, View on GitHub. Slate-100 pill paired with primary slate-900.'
  button-ghost:
    background: 'transparent'
    text: '#0f172a'
    radius: 9999
    padding: '10px 20px'
    font: button
    hover: 'background #f1f5f9'
    use: 'tertiary text-link CTA / nav action.'
  button-icon:
    background: '#f1f5f9'
    text: '#475569'
    radius: 9999
    padding: '10px'
    height: 40
    width: 40
    hover: 'background #e2e8f0; color #0f172a'
    use: 'icon-only button — copy-code, theme-toggle, search.'
  card-feature:
    background: '#ffffff'
    text: '#0f172a'
    border: '1px solid #e2e8f0'
    radius: 12
    padding: '24px'
    shadow: 'rgba(15,23,42,0.05) 0 1px 3px, rgba(15,23,42,0.06) 0 1px 2px'
    use: 'component preview, feature tile — soft elevation with hairline border. The two-layer shadow-sm is the system.'
  card-cyan:
    background: '#ecfeff'
    text: '#0f172a'
    border: '1px solid #cffafe'
    radius: 12
    padding: '32px'
    use: 'tinted brand callout card — for "What''s new in v4" section, feature highlight bands.'
  card-component-preview:
    background: '#ffffff'
    text: '#0f172a'
    border: '1px solid #e2e8f0'
    radius: 12
    padding: '0'
    chrome: 'preview-with-source-toggle — visible UI on top, expandable HTML/CSS source below'
    use: 'the docs-and-marketing signature — visible component preview with toggleable source code below.'
  card-pricing:
    background: '#ffffff'
    text: '#0f172a'
    border: '1px solid #e2e8f0'
    radius: 12
    padding: '32px'
    use: 'pricing tier card — neutral default.'
  card-pricing-featured:
    background: 'linear-gradient(180deg, #ecfeff 0%, #ffffff 60%)'
    text: '#0f172a'
    border: '2px solid #06b6d4'
    radius: 12
    padding: '32px'
    shadow: 'rgba(6,182,212,0.20) 0 12px 32px -8px'
    use: 'featured pricing tier — cyan border + cyan-tinted gradient + cyan-tinted shadow.'
  badge-pill:
    background: '#f1f5f9'
    text: '#475569'
    radius: 9999
    padding: '4px 10px'
    font: micro
    use: 'NEW / category badge — neutral slate-on-slate.'
  badge-cyan:
    background: '#cffafe'
    text: '#155e75'
    radius: 9999
    padding: '4px 10px'
    font: micro
    use: 'feature badge — cyan-tinted, used for "New" or "v4" announcements.'
  badge-emerald:
    background: '#d1fae5'
    text: '#047857'
    radius: 9999
    padding: '4px 10px'
    font: micro
    use: 'success badge.'
  input:
    background: '#ffffff'
    text: '#0f172a'
    border: '1px solid #e2e8f0'
    radius: 8
    padding: '10px 14px'
    height: 42
    font: body
    focus: 'border #06b6d4; ring 0 0 0 3px rgba(6,182,212,0.30)'
    use: 'form input — search, signup, contact.'
  search-cmdk:
    background: '#f8fafc'
    text: '#475569'
    border: '1px solid #e2e8f0'
    radius: 8
    padding: '8px 12px'
    height: 38
    font: body-small
    suffix: '<kbd>⌘K</kbd> in slate-100 mono'
    use: 'docs search field — sticky in header, opens command palette on focus or ⌘K.'
  code-block:
    background: '#0f172a'
    text: '#e2e8f0'
    border: 'none'
    radius: 12
    padding: '20px 24px'
    font: code
    use: 'multi-line code sample — slate-900 fill, Fira Code 14, syntax highlighted in cyan-400 (keyword) / green-300 (string) / amber-400 (attribute).'
  code-inline:
    background: '#f1f5f9'
    text: '#0f172a'
    border: 'none'
    radius: 4
    padding: '2px 6px'
    font: code-inline
    use: 'inline code chip — `bg-cyan-500`, `flex items-center`, utility-class references in body copy.'
  copy-button:
    background: 'transparent'
    text: '#94a3b8'
    radius: 6
    padding: '6px'
    font: micro
    hover: 'background rgba(255,255,255,0.05); color #e2e8f0'
    position: 'absolute top-3 right-3 inside code blocks'
    use: 'copy-to-clipboard button on every code block.'
  nav-link:
    background: 'transparent'
    text: '#475569'
    font: nav-link
    padding: '8px 14px'
    hover: 'color #0f172a'
    active: 'color #0891b2'
    use: 'top nav menu — Docs / Components / Blog / Showcase / Plus / Pricing.'
  docs-sidebar-link:
    background: 'transparent'
    text: '#475569'
    font: body-small
    padding: '6px 12px'
    radius: 6
    hover: 'background #f1f5f9; color #0f172a'
    active: 'background #ecfeff; color #0891b2; border-left 2px solid #06b6d4'
    use: 'docs left-sidebar navigation — current page highlighted with cyan accent border.'

dark-mode: optional

lineage:
  summary: |
    Tailwind's marketing site is the framework demonstrating itself.
    Every color comes from the **canonical Tailwind palette** that
    ships in the framework — `slate-900` (`#0f172a`) for text, the
    signature **cyan-500** (`#06b6d4`) for brand, `slate-50` through
    `slate-900` for the neutral ramp. The typography is **Inter
    Variable** at weights 400–800, the de-facto open-source UI sans
    (the same family Linear uses at custom weights). Code blocks
    render in Fira Code on the `slate-900` fill — the framework''s
    recommended code-block recipe — with syntax-highlighting in the
    canonical Tailwind palette (cyan-400 keywords, green-300 strings,
    amber-400 attributes). The most distinctive structural move is
    that every component on the marketing page (cards, buttons,
    badges, the docs sidebar) is *literally composable from Tailwind
    utility classes*, with the source visible in the surrounding code
    blocks. Where Linear ships a custom CSS-in-JS system that''s
    invisible to visitors, and Stripe ships a custom design system
    whose primitives stay private, Tailwind ships a public-API design
    system: the marketing site is the documentation, and the
    documentation is the brand. Cyan is applied generously — focus
    rings, accent gradients, hero radial glow, syntax-highlighting
    keywords — because it''s the framework''s suggested brand-color
    recipe and the site is performing the suggestion. The slate ramp
    isn''t custom, it''s `slate-*`. The choice signals "use this and
    your site will look like this," and the site is the proof. The
    radius scale is the framework''s — 0/2/4/6/8/12/16/9999 — and
    the spacing system is the framework''s 4px base. Tailwind isn''t
    using its design system to *build* the marketing site; the
    marketing site *is* the design system rendered.
  influences:
    - name: Inter (Rasmus Andersson)
      role: 'Open-source UI sans family — variable weights 100–900. The de-facto modern UI sans; Tailwind uses it as the entire type voice across display and body.'
      url: https://rsms.me/inter/
    - name: Refactoring UI (Adam Wathan + Steve Schoger)
      role: 'Co-creators of Tailwind. Their book established the Tailwind aesthetic baseline — slate ramp, gradient hero, sky/cyan accent, soft-shadow card grammar.'
      url: https://www.refactoringui.com
    - name: Fira Code (Nikita Prokopov)
      role: 'Open-source mono with code ligatures — used in code blocks and docs.'
      url: https://github.com/tonsky/FiraCode
    - name: MDN Web Docs
      role: 'Three-column docs layout (sidebar + content + table-of-contents) inherited by Tailwind''s docs site.'
      url: https://developer.mozilla.org
    - name: Stripe Docs
      role: 'API-doc tradition where the marketing register and the documentation register collapse into one — both pages look the same because they''re from the same system.'
      url: https://stripe.com/docs
    - name: Vercel
      role: 'Cool dark/light contrast bands, single-accent dev-infra discipline, tight pill button radii on the primary CTA.'
      url: https://vercel.com
---

## 1. Visual Theme & Atmosphere

Tailwind's marketing site is the most self-referential design system on the web — the framework being sold is the framework that built the page selling it. White canvas, slate-900 (`#0f172a`) text, signature cyan-500 (`#06b6d4`) brand, Inter Variable from 400 to 800, Fira Code on slate-900 for all code blocks. Every visible component is composable from the utility classes the docs teach. When the marketing page shows a card, the source code below the card (or in the next section) shows the exact `<div class="...">` that built it. The design system is the public API, and the public API is the brand.

What makes it distinctive vs. nearby alternatives: most CSS frameworks (Bootstrap, Bulma, Chakra) built marketing sites that look generic — the framework was a tool, the brand was separate. Tailwind collapsed the two: the marketing aesthetic *is* the framework's recommended aesthetic. Cyan-500 isn't an arbitrary brand color, it's `bg-cyan-500`. The slate ramp isn't custom, it's `slate-*`. The shadow system isn't bespoke, it's `shadow-sm`/`shadow-lg`/`shadow-xl`. The radius scale is `rounded`/`rounded-md`/`rounded-lg`/`rounded-xl`/`rounded-full`. The choice signals "use this and your site will look like this," and the site is the proof.

The atmosphere is **structured, calibrated, slightly playful** — closer to the Refactoring UI register (Adam Wathan and Steve Schoger's book on practical UI design, which preceded Tailwind and established its aesthetic baseline) than to consumer-SaaS warmth or enterprise-grey severity. The hero often features a cyan-to-sky-to-blue gradient radial glow behind the headline, calibrated to look like a screenshot from the docs' own gradient utilities (`bg-gradient-to-r from-cyan-500 to-blue-500`). The hero CTA is a slate-900 pill on white — the primary CTA is intentionally not cyan, leaving cyan for accents, gradients, and focus rings. That decision is part of the brand grammar: cyan is decoration, slate-900 is action.

Below the hero, the page walks through the framework's value with **component preview cards** — each one showing a rendered UI element on top, with toggleable source code below. A card with a `bg-cyan-500` button. A pricing table with `border-cyan-500` on the featured tier. A login form with `focus:ring-cyan-500`. The pattern is the page's most distinctive move: every section both *demonstrates* and *teaches*. Customers scrolling the marketing site can copy the source code straight into their own project — the marketing is functional documentation.

Sections breathe at 96–128px vertical rhythm. The docs use a 3-column layout (sidebar + content + table-of-contents) on viewports above 1280px — the same shape as MDN, Stripe Docs, and React's docs site. The marketing pages use a 1280px max container with 768px reading column for prose. Code blocks are heavily used and heavily styled: slate-900 fill, Fira Code 14px with ligatures (`!=`, `=>`, `===`), syntax-highlighted in cyan-400 (keywords), green-300 (strings), amber-400 (attributes), slate-500 (comments).

**Key Characteristics:**
- Pure-white canvas (`#ffffff`) — the calibrated default.
- Signature cyan `#06b6d4` (cyan-500) — focus rings, accent gradients, syntax highlighting, featured-card borders.
- Slate-900 (`#0f172a`) primary CTA pill on white — cyan stays for accents, not action fills.
- Inter Variable across the entire system at 400/500/600/700/800.
- Fira Code with ligatures in every code block — the framework's recommended mono.
- Two-layer `shadow-sm` on every card — the canonical Tailwind elevation.
- Radius scale matches the framework — `rounded-md`/`-lg`/`-xl`/`-full`.
- Component-preview-with-source-toggle pattern — the marketing-as-docs grammar.
- Cyan-to-sky-to-blue gradient hero glow — `bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500`.
- 768px reading column, 1280px page max — the docs-tradition page geometry.

## 2. Color Palette & Roles

### Primary

- **Background** (`#ffffff`): pure white canvas. Calibrated default; the slate ramp does the work of differentiating surfaces.
- **Text** (`#0f172a`): slate-900. Body and headlines — full-strength near-black with a navy hint. AAA contrast (17.4:1) at all sizes.
- **Brand** (`#06b6d4`): cyan-500. The signature accent — focus rings, syntax-highlight keywords, accent gradients, featured-card borders, hero radial glow. Cyan-500 is **decoration, not action** — it doesn't fill the primary CTA.

### Brand & Dark

- **Brand Hover** (`#0891b2`): cyan-600 — pressed-state cyan, also the link colour (slightly deeper for body-text contrast).
- **Brand Active** (`#0e7490`): cyan-700.
- **Brand Soft** (`#cffafe`): cyan-100 — tinted callout surface.
- **Brand Soft 2** (`#ecfeff`): cyan-50 — softer tinted background, hero accent band.
- **Brand Deep** (`#155e75`): cyan-800 — illustrative shadow, deep-mode text-on-cyan.
- **Brand Bright** (`#22d3ee`): cyan-400 — used for syntax-highlight keywords on dark code blocks; also the brighter brand for hover states on dark surfaces.
- **Bg Dark** (`#0f172a`): slate-900 — dark section, code-block fill, footer.
- **Bg Dark 2** (`#1e293b`): slate-800 — secondary dark surface.
- **Bg Dark 3** (`#334155`): slate-700 — tertiary dark surface, dark-card chrome.

### Accent

- **Accent Sky** (`#0ea5e9`): sky-500 — the canonical secondary, paired with cyan in gradients (`from-cyan-500 to-sky-500`).
- **Accent Sky Soft** (`#e0f2fe`): sky-100.
- **Accent Blue** (`#3b82f6`): blue-500 — tertiary in gradient stops.
- **Accent Violet** (`#8b5cf6`): violet-500 — illustrative accent in marketing gradients.
- **Accent Pink** (`#ec4899`): pink-500 — illustrative accent in marketing gradients.
- **Accent Emerald** (`#10b981`): emerald-500 — semantic success.
- **Accent Amber** (`#f59e0b`): amber-500 — semantic warning, also used in syntax highlighting (attributes).
- **Accent Rose** (`#f43f5e`): rose-500 — semantic danger.

The full Tailwind palette is technically available; the marketing site uses a curated subset (slate ramp + cyan + sky + blue + emerald + amber + rose). Other framework colours (orange, yellow, lime, green, teal, indigo, purple, fuchsia) appear in the docs' palette swatch demos but not on the marketing chrome itself.

### Interactive

- **Link** (`#0891b2`): cyan-600 — slightly deeper than brand cyan-500 to clear AA at body sizes (cyan-500 is AA only at large).
- **Link Hover** (`#0e7490`): cyan-700.
- **Focus Ring** (`0 0 0 3px rgba(6,182,212,0.30)`): cyan-tinted ring with 2px offset.
- **Focus Ring Soft** (`0 0 0 3px rgba(6,182,212,0.15)`): softer focus ring for subtle states.
- **Brand Glow** (`0 0 24px rgba(6,182,212,0.30)`): rare glow on featured CTAs.

### Neutral Scale

The slate ramp (slate-50 through slate-900) — the spine of the entire system:

- **slate-50** (`#f8fafc`) — bg-quiet, section breakers.
- **slate-100** (`#f1f5f9`) — bg-elev, card hover, badge bg.
- **slate-200** (`#e2e8f0`) — borders, hairlines, code-text on dark.
- **slate-300** (`#cbd5e1`) — text-quiet, disabled, deeper borders.
- **slate-400** (`#94a3b8`) — text-faint, captions, copy-button on dark.
- **slate-500** (`#64748b`) — text-muted, labels, comments in code.
- **slate-600** (`#475569`) — text-soft, supporting copy.
- **slate-700** (`#334155`) — bg-dark-3, deep tertiary surface.
- **slate-800** (`#1e293b`) — bg-dark-2, secondary dark surface.
- **slate-900** (`#0f172a`) — text, code-bg, dark canvas.

The ramp is the canonical Tailwind slate; the navy-tinted cool grey is what gives Tailwind its slightly-cool register vs. neutral-grey peers (Linear's `zinc`, Vercel's pure black-and-white).

### Surface & Borders

- **Surface** (`#ffffff`): primary card, canvas-equal.
- **Surface 2** (`#f8fafc`): nested secondary card.
- **Bg Quiet** (`#f8fafc`): section break.
- **Bg Elev** (`#f1f5f9`): raised card / panel.
- **Bg Elev 2** (`#e2e8f0`): hover surface.
- **Bg Tint** (`#ecfeff`): tinted brand surface for callouts.
- **Bg Tint 2** (`#cffafe`): deeper tinted brand.
- **Border** (`#e2e8f0`): slate-200 hairline.
- **Border Strong** (`#cbd5e1`): slate-300 emphasized.
- **Border Soft** (`#f1f5f9`): slate-100 softer.
- **Border Dark** (`#334155`): slate-700 on dark surfaces.
- **Border Brand** (`#06b6d4`): cyan-500 brand-tinted (focus, featured cards).

### Shadow Colors

- **Ambient** (`rgba(15,23,42,0.04) 0 1px 2px`): rare faint lift.
- **Standard** (`rgba(15,23,42,0.05) 0 1px 3px, rgba(15,23,42,0.06) 0 1px 2px`): the canonical `shadow-sm` two-layer — the system's signature card chrome.
- **Elevated** (`rgba(15,23,42,0.08) 0 10px 15px -3px, rgba(15,23,42,0.04) 0 4px 6px -4px`): `shadow-lg` — modal, popover, large card hover.
- **Deep** (`rgba(15,23,42,0.10) 0 25px 50px -12px`): `shadow-xl`/`shadow-2xl` — full modal backdrop.
- **Brand Glow** (`0 0 24px rgba(6,182,212,0.30)`): cyan glow on featured CTAs.
- **Cyan Radial** (`radial-gradient(circle at 50% 50%, rgba(6,182,212,0.20), transparent 70%)`): the hero radial glow — soft cyan haze behind the headline.

The shadows are slate-tinted (`rgba(15,23,42,...)` rather than `rgba(0,0,0,...)`) to match the slate-900 text — the system is colour-cohered down to the shadow channel. This is one of the small details that makes Tailwind's chrome feel calibrated rather than default.

### Semantic

- **Success** (`#10b981`) on bg `#d1fae5`: emerald-500 success pill.
- **Warning** (`#f59e0b`) on bg `#fef3c7`: amber-500 warning pill.
- **Danger** (`#f43f5e`) on bg `#ffe4e6`: rose-500 error pill.
- **Info** (`#06b6d4`) on bg `#cffafe`: cyan-500 info pill.

## 3. Typography Rules

### Font Family

The system is two-faced — Inter Variable for everything text-related, Fira Code Variable for code:

- **Display:** `"Inter Variable", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`. Rasmus Andersson's open-source variable UI sans, used at weights 400/500/600/700/800. Hero punch comes from weight 800 with negative tracking; sub-heads drop to 700 and 600.
- **Body:** Same Inter Variable family at 400/500/600. Body sits at 16px on **1.7 line-height** — looser than Linear's 1.55 dev-tool density. The looser line-height is calibrated for marketing-page readability; the docs reading column drops slightly to 1.65 for prose.
- **Mono:** `"Fira Code Variable", "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`. Nikita Prokopov's open-source mono with code ligatures (`!=`, `=>`, `===`, `<=`, `>=`, `||`, `&&`). Used at 14px in code blocks and 14px (weight 500) in inline code chips. Tabular figures (`tnum`) and slashed zero (`zero`) for code legibility.

### OpenType Features

- **Inter Display:** `kern, liga, ss01` — kerning, standard ligatures, and stylistic set 01 (alternate single-storey `a` and rounded `g` for friendliness on hero tier).
- **Inter Body:** `kern, liga, calt` — standard contextual alternates.
- **Fira Code:** `liga, calt, tnum, zero` — code ligatures (`!=` becomes `≠`, `=>` becomes `⇒`), tabular figures, slashed zero. The ligatures are the brand — Tailwind's code blocks render `=>` and `!=` as proper glyphs, signalling craft.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Inter | 96 | 800 | 1.0 | -0.03em | kern, liga, ss01 | Largest hero — homepage tagline (rare) |
| display-large | Inter | 72 | 800 | 1.0 | -0.025em | kern, liga, ss01 | Section hero |
| h1 | Inter | 56 | 800 | 1.05 | -0.022em | kern, liga, ss01 | Page H1 |
| h2 | Inter | 36 | 700 | 1.15 | -0.015em | kern, liga | Section heads |
| h3 | Inter | 24 | 600 | 1.3 | -0.005em | kern, liga | Sub-section heads |
| h4 | Inter | 20 | 600 | 1.35 | 0 | kern, liga | Card titles, feature heads |
| body-large | Inter | 20 | 400 | 1.6 | 0 | kern, liga | Hero deck |
| body | Inter | 16 | 400 | 1.7 | 0 | kern, liga | Default body — looser than dev-tool norm |
| body-small | Inter | 14 | 400 | 1.5 | 0 | kern, liga | Captions, footer, dense regions |
| button | Inter | 14 | 600 | 1.0 | 0 | kern | CTA label |
| button-large | Inter | 16 | 600 | 1.0 | 0 | kern | Hero CTA |
| nav-link | Inter | 14 | 500 | 1.4 | 0 | kern | Top nav |
| label | Fira Code | 12 | 500 | 1.3 | 0.04em | tnum, uppercase | UPPERCASE eyebrow — mono for "v4.0", "BETA" |
| label-sans | Inter | 12 | 600 | 1.3 | 0.06em | kern, uppercase | UPPERCASE eyebrow — sans alternative |
| caption | Inter | 13 | 400 | 1.45 | 0 | kern | Caption under code blocks / cards |
| micro | Inter | 11 | 600 | 1.3 | 0.05em | kern, uppercase | Status pill text, badge labels |
| code | Fira Code | 14 | 400 | 1.65 | 0 | liga, calt, tnum | Inline code in code blocks |
| code-bold | Fira Code | 14 | 500 | 1.65 | 0 | liga, calt, tnum | Code emphasis (rare) |
| code-inline | Fira Code | 14 | 500 | 1.4 | 0 | liga | Inline code chip in body copy |
| code-small | Fira Code | 13 | 400 | 1.55 | 0 | liga | Code in dense docs regions |

### Principles

- **Inter at weight 800 for hero punch.** Tailwind reaches for the framework's heaviest Inter weight (800) for hero impact — heavier than peer dev-infra brands (Linear at 600, Retool at 600, Vercel at 700). The 800 weight + `-0.03em` tracking is the framework's confident-marketing register.
- **1.7 line-height on body.** The looser body line-height is the brand's most distinctive typographic move. Most dev-tool sites sit at 1.5–1.6; Tailwind sits at 1.7 for marketing prose and 1.65 for docs. The looseness comes from Refactoring UI's tradition: marketing copy reads better at 1.7 on white at 16px.
- **Stylistic set 01 enabled on display.** Inter's `ss01` (single-storey `a`, rounded `g`) is enabled at hero tier to add a hair of friendliness. At body sizes the standard `a` returns to keep the docs voice neutral.
- **Fira Code ligatures everywhere in code.** Tailwind never disables ligatures in code blocks. `=>` renders as `⇒`, `!=` as `≠`, `===` as proper-glyph triple-equals. The ligatures are part of the brand's craft signal — they say "we care about typography even in code".
- **Mono for category labels.** The eyebrow labels above hero sections (e.g., "v4.0", "WHAT'S NEW", "BETA") are set in Fira Code at 12/500 with 0.04em tracking and uppercase. Mono-as-eyebrow is a Tailwind grammar — it signals "this is system-tier metadata, not body copy".
- **Negative tracking on display.** -0.03em on hero, scaling down to 0 at body. Standard Inter optical-size tradition.
- **Tabular figures everywhere numbers appear.** `tnum` is on by default for both Inter (weight 500+) and Fira Code. Pricing-card numerals, code-block line numbers, performance benchmarks — all align in columns.
- **Slashed zero in code.** Fira Code's `zero` distinguishes 0 from O in API examples and IDs.
- **Body at 16px.** Standard. Tailwind doesn't deviate to 17 (Postmark) or 18 (consumer SaaS) — 16px is the docs-tradition voice.
- **No editorial italics.** Inter italics exist in the system but are rare on marketing — the voice is structural, not literary.

## 4. Component Stylings

### Buttons

**Primary (Slate-900 Pill)**
- Background: `#0f172a` (slate-900)
- Text: `#ffffff`
- Padding: `12px 24px`, height 44
- Radius: 9999 (`rounded-full`) — the signature pill
- Border: none
- Font: button (Inter 14 / 600)
- Hover: background `#1e293b` + `translateY(-1px)` + shadow `rgba(15,23,42,0.10) 0 6px 16px -4px`
- Active: background `#334155` + `translateY(0)`
- Focus: outline `3px solid rgba(6,182,212,0.30)` with 2px offset
- Use: hero CTA — Get started, Read the docs. The brand's primary action voice. **Cyan stays for accents, not fills.**

**Cyan (Feature/Pricing CTA)**
- Background: `#06b6d4`
- Text: `#ffffff`
- Padding: `12px 24px`, height 44
- Radius: 9999
- Hover: background `#0891b2` + `translateY(-1px)` + shadow `rgba(6,182,212,0.30) 0 8px 24px -8px`
- Use: feature-card CTA, featured pricing tier CTA. The rare cyan-on-white CTA moment — used 1–2 times per page.

**Secondary (Slate-100 Pill)**
- Background: `#f1f5f9`
- Text: `#0f172a`
- Padding: `12px 24px`, height 44
- Radius: 9999
- Border: `1px solid #e2e8f0`
- Hover: background `#e2e8f0` + border `#cbd5e1`
- Use: secondary CTA — Learn more, View on GitHub. Slate-100 pill paired with primary slate-900.

**Ghost (Tertiary)**
- Background: transparent
- Text: `#0f172a`
- Padding: `10px 20px`
- Radius: 9999
- Hover: background `#f1f5f9`
- Use: nav action, inline tertiary CTA.

**Icon Button**
- Background: `#f1f5f9`
- Text: `#475569`
- Padding: 10px (square), 40×40
- Radius: 9999 (full circle)
- Hover: background `#e2e8f0` + color `#0f172a`
- Use: copy-code button, theme-toggle, search-trigger.

### Cards

**Feature Card**
- Background: `#ffffff`
- Border: `1px solid #e2e8f0`
- Radius: 12 (`rounded-xl`)
- Padding: 24
- Shadow: `rgba(15,23,42,0.05) 0 1px 3px, rgba(15,23,42,0.06) 0 1px 2px` — the canonical `shadow-sm` two-layer
- Use: component preview, feature tile — the system's signature card chrome.

**Cyan Tinted Callout**
- Background: `#ecfeff` (cyan-50)
- Border: `1px solid #cffafe` (cyan-100)
- Radius: 12
- Padding: 32
- Use: tinted brand callout — "What's new in v4" section, feature highlight bands.

**Component Preview Card**
- Background: `#ffffff`
- Border: `1px solid #e2e8f0`
- Radius: 12
- Padding: 0 (chrome inside)
- Inside: top region renders the actual UI (button, card, form) on a subtle slate-50 backdrop; bottom region toggles to show the source HTML/CSS in a slate-900 code block.
- Toggle: tab control "Preview / Code" in the top-right.
- Use: the docs-and-marketing signature pattern. Every component the page sells appears here — visible UI on top, source code below.

**Pricing Card**
- Background: `#ffffff`
- Border: `1px solid #e2e8f0`
- Radius: 12
- Padding: 32
- Use: pricing tier card — neutral default.

**Pricing Card (Featured)**
- Background: `linear-gradient(180deg, #ecfeff 0%, #ffffff 60%)` — cyan-50 fading to white
- Border: `2px solid #06b6d4` (cyan-500)
- Radius: 12
- Padding: 32
- Shadow: `rgba(6,182,212,0.20) 0 12px 32px -8px` — cyan-tinted lift
- Use: featured pricing tier — cyan border + cyan-tinted gradient + cyan-tinted shadow. The page's most chromatically-emphatic card.

### Badges

**Neutral Pill** — `#f1f5f9` bg / `#475569` text / 9999 radius / Inter micro 11/600 uppercase: NEW / category badges.

**Cyan Pill** — `#cffafe` bg / `#155e75` text: feature badges ("New", "v4", "Beta").

**Emerald Pill** — `#d1fae5` bg / `#047857` text: semantic success.

**Amber Pill** — `#fef3c7` bg / `#92400e` text: warning.

**Rose Pill** — `#ffe4e6` bg / `#be123c` text: danger.

### Inputs

**Standard Input**
- Background: `#ffffff`
- Text: `#0f172a`
- Border: `1px solid #e2e8f0`
- Radius: 8 (`rounded-lg`)
- Padding: `10px 14px`, height 42
- Focus: border `#06b6d4` + ring `0 0 0 3px rgba(6,182,212,0.30)`
- Use: form input — search, signup, contact.

**Search / Cmd-K Input**
- Background: `#f8fafc`
- Text: `#475569`
- Border: `1px solid #e2e8f0`
- Radius: 8
- Padding: `8px 12px`, height 38
- Suffix: `<kbd>⌘K</kbd>` chip in slate-100 mono, positioned right-aligned
- Use: docs search field — sticky in header, opens command palette on focus or `⌘K` keystroke.

### Code

**Code Block (Multi-Line)**
- Background: `#0f172a` (slate-900)
- Text: `#e2e8f0` (slate-200)
- Border: none
- Radius: 12 (`rounded-xl`)
- Padding: `20px 24px`
- Font: code (Fira Code 14/400 with `liga, calt, tnum`)
- Syntax highlighting: cyan-400 (keywords), green-300 (strings), amber-400 (attributes), slate-500 (comments), red-400 (tags), white (default text)
- Top-right: copy button (slate-400 icon, hover slate-200)
- Use: every multi-line code sample — utility class examples, config snippets, install commands.

**Inline Code Chip**
- Background: `#f1f5f9` (slate-100)
- Text: `#0f172a`
- Border: none
- Radius: 4
- Padding: `2px 6px`
- Font: code-inline (Fira Code 14/500 with `liga`)
- Use: utility-class references inline in body copy — `bg-cyan-500`, `flex items-center`, `text-slate-900`.

**Copy Button (inside code blocks)**
- Background: transparent
- Text: `#94a3b8` (slate-400)
- Padding: 6
- Radius: 6
- Hover: background `rgba(255,255,255,0.05)` + color `#e2e8f0`
- Position: absolute top-3 right-3
- Use: copy-to-clipboard on every code block.

### Navigation

**Top Nav**
- Background: 90% white with backdrop-blur, sticky on scroll
- Padding: `0 24px`, height 64
- Links: Inter 14/500, color `#475569`, hover `#0f172a`, active `#0891b2`
- Right-side: Search (cmd-k) + Discord/GitHub icons + Theme toggle + slate-900 "Get Started" pill
- Items: Docs / Components / Templates / Blog / Showcase / Plus / Pricing

**Docs Sidebar Link**
- Background: transparent
- Text: `#475569`
- Padding: `6px 12px`
- Radius: 6
- Font: body-small (Inter 14/400)
- Hover: background `#f1f5f9` + color `#0f172a`
- Active: background `#ecfeff` + color `#0891b2` + 2px cyan-500 left border
- Use: docs left-sidebar navigation — current page highlighted with cyan accent border.

### Decorative

**Hero Cyan Radial Glow** — a soft cyan haze (`radial-gradient(circle at 50% 50%, rgba(6,182,212,0.20), transparent 70%)`) behind the hero headline. The page's signature chromatic moment.

**Cyan-to-Sky-to-Blue Gradient** — `bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500` — used in hero accent text (gradient-clipped headline words like "production"), in feature illustrations, and in featured-card backgrounds.

**Component Preview Backdrop** — a subtle slate-50 ground with hairline grid pattern (very faint) behind the rendered preview UI in component-preview cards. Echoes Figma's preview canvas.

**Tabs (Preview / Code)** — `<button role="tab">` with `aria-selected="true"` for the active tab; cyan-500 underline on active.

## 5. Layout Principles

### Spacing System

Base unit is **4px** — the framework's spacing scale. The full scale runs 4/8/12/16/20/24/32/40/48/64/80/96/128/160/192. Sections breathe at 96–128px vertical rhythm. The 4px base is non-negotiable: every padding, margin, and gap on the marketing site maps to a Tailwind spacing utility (`p-1` = 4px, `p-2` = 8px, `p-4` = 16px, `p-6` = 24px, `p-8` = 32px, `p-12` = 48px, `p-16` = 64px, `p-24` = 96px).

### Grid & Container

Page caps at **1280px** (`max-w-7xl`) with **24px gutters** (`px-6`). The docs use a **3-column layout** (sidebar + content + table-of-contents) on viewports above 1280px — the same shape as MDN, Stripe Docs, and React's docs site. The sidebar is 256px (`w-64`); the content is 768px reading column; the TOC is 224px (`w-56`).

Hero treatment: centered or left-aligned headline at 56–96px Inter 800, centered or left-aligned 20px hero deck, slate-900 primary CTA pill paired with slate-100 secondary CTA pill. Behind the hero: the cyan radial glow, optionally with a faint code-block preview floating to one side showing utility-class composition.

### Whitespace Philosophy

Tailwind's whitespace is **calibrated-generous** — 96–128px section gaps, 32px card padding, 24px feature-card padding, 20–24px code-block padding. The looseness echoes the body line-height (1.7) and the radius scale (favouring `rounded-xl` 12px over tight 6–8px). The brand's overall register is "considered, not compressed".

### Section Cadence

Sections alternate between four tonal grounds:
- **White** (`#ffffff`) — the default, dominant. Hero, feature grids, component preview cards.
- **Slate-50** (`#f8fafc`) — section break, customer-quote band, secondary feature region.
- **Cyan-50** (`#ecfeff`) — tinted brand callout, "what's new" highlight band (used 1–2 times per page).
- **Slate-900** (`#0f172a`) — footer band, occasional dark code-showcase hero, "Get started" CTA band at page bottom.

The dark band only appears at the page's bottom (footer or final CTA); the cyan-50 callout only appears 1–2 times. The chromatic discipline keeps cyan's punch.

## 6. Shapes & Radius Scale

Tailwind's radius scale matches the framework exactly — every utility class corresponds to a numeric value:

| Utility | Tier | Radius | Use |
|---|---|---|---|
| `rounded-none` | None | 0 | Hairline rules, table cells, full-bleed bands |
| `rounded-sm` | Micro | 2 | Tiny status pills (rare) |
| `rounded` | XS | 4 | **Inline code chip**, small badges |
| `rounded-md` | SM | 6 | Small inputs, search results |
| `rounded-lg` | MD | 8 | **Standard inputs**, code blocks (alternate) |
| `rounded-xl` | LG | 12 | **Cards, code blocks (canonical), modals (light)** |
| `rounded-2xl` | XL | 16 | Large modals, hero illustration containers |
| `rounded-full` | Pill | 9999 | **Primary CTA, secondary CTA, badges, status pills, avatars** |

The hero CTA uses `rounded-full` — the full pill is the brand's signature shape. Cards and code blocks settle at `rounded-xl` (12px). The geometry is gentler than YC's hard corners and sharper than Medium's editorial pill — calibrated to read as *modern web default*, because the framework has effectively defined what "modern web default" means since 2020.

## 7. Depth & Elevation

| Level | Treatment | Tailwind Class | Use |
|---|---|---|---|
| 0 | Flat — hairline border, no shadow | `border` | Default cards |
| 1 | `shadow-sm` two-layer | `shadow-sm` | **Standard card chrome — the canonical Tailwind elevation** |
| 2 | `shadow-md` | `shadow-md` | Hover state, slightly lifted |
| 3 | `shadow-lg` two-layer | `shadow-lg` | Component preview hover, popover, dropdown |
| 4 | `shadow-xl` | `shadow-xl` | Modal backdrop |
| 5 | `shadow-2xl` | `shadow-2xl` | Full-screen modal, lightbox |

### Shadow Philosophy

Tailwind depth is **multi-layer-tinted**, calibrated to the framework's recommended shadow recipes. Cards lift through the canonical `shadow-sm` two-layer (`rgba(15,23,42,0.05) 0 1px 3px` + `rgba(15,23,42,0.06) 0 1px 2px`) — gentle enough that borders coexist with shadows on the same element. Larger surfaces (modals, popovers) use `shadow-lg` and `shadow-xl` from the framework's elevation scale.

Borders **coexist** with shadows — both are present, neither carries elevation alone. This is one of Tailwind's most distinctive elevation grammars: a card has both `border` and `shadow-sm`, where peer brands choose one or the other. The combined effect reads as "soft, calibrated elevation" rather than "either floating or pinned".

Shadows are **slate-tinted** (`rgba(15,23,42,...)` rather than pure-black) to match the slate-900 text — the system is colour-cohered down to the shadow channel. Cyan-tinted shadows appear only on featured CTAs and pricing-card hover, where the chromatic emphasis is intentional.

The hero **cyan radial glow** is the rare brand-tinted depth event — a soft cyan haze behind the headline. Not a shadow per se, but functions as ambient depth.

## 8. Interaction & Motion

### Easing

The framework's standard easings, exposed as utility classes:

- **`ease-in-out`** (`cubic-bezier(0.4, 0, 0.2, 1)`) — default for hover, color, elevation.
- **`ease-out`** (`cubic-bezier(0, 0, 0.2, 1)`) — entrances, fade-ins.
- **`ease-in`** (`cubic-bezier(0.4, 0, 1, 1)`) — exits, fade-outs.
- **`ease-linear`** — gradient hero animation, marquee logos.
- **Custom emphasized** (`cubic-bezier(0.2, 0, 0, 1)`) — overshoot for hero CTA hover (rare; not a default Tailwind ease).

### Duration

- **Fast** (150ms / `duration-150`) — color hovers, link underline.
- **Standard** (200ms / `duration-200`) — button hover, card hover, focus-ring fade-in.
- **Slow** (300ms / `duration-300`) — modal open, popover reveal.
- **Fade** (500ms / `duration-500`) — page transitions, hero entrance.

### Per-Component Motion

- **Button hover** — background colour transitions over 200ms; transform `translateY(-1px)` over 200ms; box-shadow fades in over 200ms. Active state collapses to `translateY(0)` in 150ms.
- **Card hover** — shadow intensifies from `shadow-sm` to `shadow-md` over 200ms; border lifts from `slate-200` to `slate-300` over 200ms. No scale transform.
- **Component preview Preview/Code tab toggle** — content cross-fades over 200ms; cyan-500 underline slides under active tab over 200ms with `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Hero radial glow animation** — the cyan radial slowly pulses opacity 0.20 → 0.30 → 0.20 over 4000ms with `linear` easing, looping. Subtle ambient motion. Reduced-motion: pauses at 0.20.
- **Marquee customer logos** — slow horizontal scroll at 40s loop with `linear` easing. Reduced-motion: pauses.
- **Code-copy button** — icon swap (clipboard → checkmark in cyan-500) on click; 800ms pause; revert.
- **Featured pricing card hover** — shadow intensifies and lifts cyan-glow over 200ms; card translates `-2px Y`.
- **Link hover** — colour `cyan-600 → cyan-700` over 150ms; underline thickness `1px → 2px` over 150ms.

### Page Transitions

The site is mostly static. Section reveals on scroll use IntersectionObserver with a 16px Y-translate fade-in over 500ms. The hero animates in faster (200ms fade) to reach first-paint quickly. Component preview cards stagger in by 80ms when the section enters viewport.

### Reduced Motion

All transforms collapse to opacity-only when `prefers-reduced-motion: reduce`. The hero radial pulse pauses. The marquee logo scroll pauses. Code-copy icon swap remains (it's functional feedback, not decoration).

## 9. Accessibility & A11y

### Contrast Pairs

- **Body text on bg** — `#0f172a` on `#ffffff` = **17.4:1** — AAA at all sizes.
- **White on brand** — `#ffffff` on `#06b6d4` = **4.8:1** — AA at body, AAA at large (≥18px or 14px bold).
- **Brand on bg** — `#06b6d4` on `#ffffff` = **4.4:1** — AA at large only. **Body links use cyan-600 (`#0891b2`)** to clear AA at body.
- **Link on bg** — `#0891b2` on `#ffffff` = **6.0:1** — AAA at large, AA at body. Underlined for non-text-context disambiguation.
- **Muted text on bg** — `#475569` on `#ffffff` = **7.0:1** — AAA at body.
- **Soft text on bg** — `#64748b` on `#ffffff` = **4.6:1** — AA at body.
- **Faint text on bg** — `#94a3b8` on `#ffffff` = **2.9:1** — used only for placeholder, captions ≥18px, or disabled.
- **Text on dark** — `#f1f5f9` on `#0f172a` = **16.6:1** — AAA.
- **Code text on dark** — `#e2e8f0` on `#0f172a` = **15.2:1** — AAA.
- **Cyan keyword on dark** — `#22d3ee` on `#0f172a` = **8.6:1** — AAA — calibrated for syntax-highlighting legibility.
- **Green string on dark** — `#86efac` on `#0f172a` = **11.6:1** — AAA.
- **Amber attribute on dark** — `#fbbf24` on `#0f172a` = **10.4:1** — AAA.

### Focus Indicators

- **On neutral surfaces:** `0 0 0 3px rgba(6,182,212,0.30)` — cyan-tinted ring with 2px offset.
- **On slate-900 CTA:** ring switches to lighter cyan (`rgba(34,211,238,0.50)`) for legibility against dark.
- **On dark surfaces:** `0 0 0 3px rgba(34,211,238,0.50)` — brighter cyan ring.

### ARIA Patterns

- **Primary CTA** — `<button>` or `<a role="button">`; `aria-label` only for icon-only variants.
- **Component preview tabs** — `role="tablist"` on container, `role="tab"` with `aria-selected` on tabs, `role="tabpanel"` on the preview/code regions. Arrow keys navigate between tabs.
- **Code block copy button** — `aria-label="Copy code to clipboard"`; on copy success, announces via `aria-live="polite"` (e.g., "Copied" feedback).
- **Search / Cmd-K** — `<dialog role="dialog" aria-modal="true">` with `aria-label="Search documentation"` and focus trap. ESC dismisses.
- **Docs sidebar** — `<nav aria-label="Documentation"`; current page has `aria-current="page"`.
- **Theme toggle** — `<button aria-label="Toggle theme" aria-pressed="false">` (or true for dark).
- **Pricing tier card** — wrap in `<article aria-labelledby="..."`; featured tier adds `aria-current="true"` and visible "Most popular" badge.

### Keyboard Navigation

- Tab order follows visual flow: top-nav → search → hero CTA pair → in-page anchors → footer.
- Skip-link present in header (`Skip to main content` — visually hidden, visible on focus).
- All interactive surfaces (CTA, nav-link, sidebar-link, tab, code-copy, theme-toggle, search) are keyboard-reachable.
- `⌘K` (or `Ctrl+K`) opens the docs search globally.
- Arrow keys navigate within tab groups and the docs sidebar.
- ESC dismisses modals and the search palette.

### Screen Reader Hints

- Logo has `aria-label="Tailwind CSS"` (decorative SVG inside).
- Hero gradient-clipped headline words use `<span>` wrappers — screen readers see the full sentence without gradient-related noise.
- Code blocks use `<pre><code>` with `role="code"` (implicit) and `aria-label` describing the language (e.g., `aria-label="HTML code example"`).
- Component preview cards announce the toggle state ("Showing preview" / "Showing code").
- The cyan radial glow has `aria-hidden="true"` — purely decorative.

### Reduced Motion

- All transform-based transitions collapse to opacity-only.
- Hero radial pulse pauses.
- Marquee logo scroll pauses.
- Code-copy icon swap remains (functional feedback).

## 10. Responsive Behavior

### Breakpoints

The framework's standard breakpoints, exposed as `sm:`/`md:`/`lg:`/`xl:`/`2xl:` utility prefixes:

| Token | Width | Tailwind | Layout |
|---|---|---|---|
| Mobile | 0–639 | (default) | Single column, stacked hero, full-width CTAs |
| sm | 640+ | `sm:` | Two-column feature grid |
| md | 768+ | `md:` | Hero deck wraps wider; docs reveal sidebar |
| Desktop / lg | 1024+ | `lg:` | Full layout, 12-column grid, side-by-side hero+preview |
| Wide / xl | 1280+ | `xl:` | Max 1280px container; docs reveal table-of-contents column |
| Ultra / 2xl | 1536+ | `2xl:` | Centered with auto margins |

### Touch Targets

All interactive elements are minimum **44×44px** (button height is 44, icon button is 40 minimum, nav-link tap area is 44 via padding). Status pills are decoration only. The `⌘K` keyboard shortcut hint is `aria-hidden` on touch devices and replaced with a visible "Search" tap target.

### Collapsing Strategy

- **Top nav** — collapses to hamburger at <1024px; full-width drawer slides in from right with stacked nav links + theme toggle + Get Started CTA.
- **Hero** — headline shrinks from 96→72→56→40px on smaller breakpoints; deck from 20→16px; CTA pair stacks vertically.
- **Component preview card** — Preview/Code tabs remain horizontal on tablet+; on mobile, the card shows Preview only with a "View source" link below.
- **Feature grid** — 4→3→2→1 columns at lg/md/sm/mobile.
- **Pricing tiers** — 4→2→1 columns at lg/md/mobile; featured tier remains visually distinct.
- **Customer logo band** — 8→6→4→2 columns; on mobile becomes a marquee scroll.
- **Docs 3-column layout** — at <1280px, TOC column hides; at <1024px, sidebar collapses to a hamburger drawer.
- **Footer** — 5→2→1 columns.

### Image Behavior

Component-preview UI is rendered live (HTML/CSS, not images), so it scales naturally. Hero illustrations use SVG where possible. Customer logos and screenshot graphics use PNG/WebP with `loading="lazy"` and explicit dimensions. The hero radial glow is CSS — no image asset.

### Container Queries

Used in component preview cards: when card width drops below 480px, the Preview/Code tab labels collapse to icons; below 360px, the source-code panel hides and only the Preview shows.

## 11. Content & Voice

### Tone

Structured, slightly playful, technically precise. The brand voice is "we built a CSS framework that engineers actually want to use, and we know how to talk about it." It's **technical without being dry**, **confident without being smug**, and **friendly without being saccharine**.

The Refactoring UI / Adam Wathan register: direct sentences, useful examples, occasional dry humor. The brand assumes its audience reads documentation and copies code samples.

Sample register:
- "Rapidly build modern websites without ever leaving your HTML."
- "A utility-first CSS framework packed with classes like `flex`, `pt-4`, `text-center`, and `rotate-90` that can be composed to build any design, directly in your markup."
- "Tailwind CSS is the only framework that I've seen scale on large teams. It's easy to customize, adapts to any design, and the build size is tiny."

### Microcopy Patterns

**Button verbs (action-direct):**
- Get started
- Read the docs
- View on GitHub (secondary)
- Browse components (secondary)
- Try Tailwind Plus
- Subscribe to the newsletter

**Error messages (clear, code-aware):**
- "We couldn't find that page. Try searching the docs?"
- "That utility class doesn't exist in your config. Add it to `tailwind.config.js` or check the spelling."
- "The build failed because of a syntax error in your CSS. Check line 42 of your input file."

**Success confirmations:**
- "Copied to clipboard" (code-copy success)
- "Subscribed. Check your inbox for a confirmation email."
- "Welcome to Tailwind Plus. Here's how to get started."

### Empty States

- **Empty search results** — "No results found. Try a different search term, or browse the docs by category."
- **Empty saved snippets** — "No saved snippets yet. Bookmark a component example to save it here."
- **Empty changelog** — "No new updates yet. Subscribe to the newsletter to be notified when v4.x releases."

### CTA Verb Conventions

- **Primary action** — "Get started" (most common). Sometimes "Read the docs" when the CTA leads to the docs site rather than signup.
- **Secondary action** — "View on GitHub" (open-source signal), "Browse components" (Tailwind Plus showcase), "Watch the launch video".
- **Tertiary action** — "Learn more", "See examples", "Read the changelog" — less common; the brand prefers direct verbs.

The slate-900 CTA always carries a verb-first label. "Get started" beats "Try Tailwind". "Read the docs" beats "Documentation".

## 12. Dark Mode & Theming

Tailwind's marketing site **ships a full dark-mode variant**, toggleable via the theme button in the top-right of the header. The dark variant inverts the palette while keeping cyan-500 as the brand axis (cyan reads beautifully on slate-900 — it was always calibrated to do so).

```yaml
colors-dark:
  bg: '#0a0e1a'                # darker than slate-900 — slightly cooler canvas
  bg-quiet: '#0f172a'          # slate-900 — section break
  bg-elev: '#1e293b'           # slate-800 — raised card
  bg-elev-2: '#334155'         # slate-700 — hover surface
  bg-tint: '#082f49'           # cyan-950 — tinted brand surface for callouts
  bg-tint-2: '#155e75'         # cyan-800 — deeper tinted brand
  surface: '#1e293b'           # slate-800 — primary card surface
  surface-2: '#0f172a'         # slate-900 — nested
  text: '#f1f5f9'              # slate-100 — primary copy
  text-soft: '#cbd5e1'         # slate-300 — supporting copy
  text-muted: '#94a3b8'        # slate-400 — captions
  text-faint: '#64748b'        # slate-500 — disabled
  brand: '#22d3ee'             # cyan-400 — slightly brighter for dark-mode legibility
  brand-hover: '#67e8f9'       # cyan-300
  brand-soft: '#155e75'        # cyan-800 — tinted callout
  brand-soft-2: '#082f49'      # cyan-950
  link: '#22d3ee'              # cyan-400
  link-hover: '#67e8f9'        # cyan-300
  border: '#334155'            # slate-700
  border-strong: '#475569'     # slate-600
  border-soft: '#1e293b'       # slate-800
  border-brand: '#22d3ee'      # cyan-400
  on-brand: '#0a0e1a'          # near-black on bright cyan
  code-bg: '#0a0e1a'           # darker code-block fill
  code-text: '#e2e8f0'         # slate-200
  code-keyword: '#22d3ee'      # cyan-400 — same as light mode
  code-string: '#86efac'       # green-300
  code-attribute: '#fbbf24'    # amber-400
  code-comment: '#64748b'      # slate-500
  shadow-soft: 'rgba(0,0,0,0.20)'
  shadow-medium: 'rgba(0,0,0,0.30)'
  shadow-strong: 'rgba(0,0,0,0.50)'
```

The dark variant lifts cyan from `#06b6d4` to `#22d3ee` (cyan-400) for legibility against dark surfaces. The slate ramp inverts: slate-900 becomes near-canvas, slate-100 becomes text. The two-layer card shadow recipe persists but with darker tints. Code blocks already use slate-900 in light mode, so they barely change in dark mode (just slightly darker fill at `#0a0e1a`).

Theme toggle is sticky across page navigations via `localStorage`. The toggle respects `prefers-color-scheme` on first visit.

## 13. Lineage & Influences

Tailwind's design lineage runs through **Refactoring UI** — Adam Wathan and Steve Schoger's 2018 self-published book on practical UI design, which preceded the Tailwind framework and established its aesthetic baseline. The slate-on-white palette, the cyan/sky accent tradition, the soft two-layer shadow grammar, the `rounded-xl` card radius, the gentle use of gradients in hero illustrations — all of these come from Refactoring UI, which itself drew on the broader **modern web-app default** that crystallised around 2017–2018 (post-flat, post-skeuomorphism, pre-glassmorphism). When the Tailwind framework shipped in 2017 and the Tailwind v1.0 marketing site landed in 2019, the framework's job was to encode the aesthetic the book had already taught.

The typography choice — **Inter Variable** at variable weights 100–900 — comes from Rasmus Andersson's open-source UI sans family, which by 2019–2020 had become the de-facto modern UI typography for dev-infra. Linear, Vercel, Stripe-Connect, and a thousand other dev tools all run Inter; Tailwind's adoption simply ratifies the consensus and ships a CDN font configuration that any user can copy. The `Inter Variable` flavour is what the marketing page uses — single variable file, weights selected via `font-variation-settings`.

The **mono choice** — Fira Code with ligatures — comes from the dev-tool tradition of preferring code ligatures (`!=` rendered as `≠`, `=>` as `⇒`). Tailwind's code blocks render Fira Code at 14px with `liga, calt` enabled by default. The ligatures are a craft signal: "we cared enough about code-typography to ship the right glyphs."

The **3-column docs layout** — sidebar + content + table-of-contents — is inherited from MDN, Stripe Docs, and React's docs site. Tailwind's docs are technically built with Next.js + MDX (and were rebuilt for v4 with a custom static-site generation pipeline), but the layout grammar is the standard modern-docs shape.

The most distinctive lineage move is **encoding the framework's own utilities into the marketing surface**. Where most CSS frameworks built marketing sites in a separate visual register from the framework itself (Bootstrap's docs looked nothing like a Bootstrap site), Tailwind collapsed the registers: the marketing site is the framework's living showcase. Every component is buildable from utility classes, and the source code is often visible directly below the rendered preview.

The **competitive counterstance** is broader CSS frameworks (Bootstrap, Bulma, Foundation) that required component libraries: Tailwind says "we don't ship components, we ship a vocabulary, and here's how to compose anything from it." The marketing aesthetic encodes that pitch — every example is utilities-only, every preview is auditable.

**Named influences:**
- **Inter** (Rasmus Andersson) — open-source UI sans family with variable weights 100–900. The de-facto modern UI sans; Tailwind uses it across the entire system. https://rsms.me/inter/
- **Refactoring UI** (Adam Wathan + Steve Schoger) — co-creators of Tailwind. Their book established the Tailwind aesthetic baseline before the framework shipped. https://www.refactoringui.com
- **Fira Code** (Nikita Prokopov) — open-source mono with code ligatures. Used in code blocks and docs. https://github.com/tonsky/FiraCode
- **MDN Web Docs** — three-column docs layout (sidebar + content + table-of-contents). https://developer.mozilla.org
- **Stripe Docs** — API-doc tradition where the marketing register and the documentation register collapse. https://stripe.com/docs
- **Vercel** — cool dark/light contrast bands, single-accent dev-infra discipline, tight pill button radii. https://vercel.com
- **Linear** — Inter-everywhere typography, slate-tinted shadows, calibrated section-rhythm — all of which Tailwind adjacent-uses. https://linear.app

## 14. Do's and Don'ts

### Do

- **Do** use the Tailwind palette by canonical name. `slate-900` for text, `cyan-500` for brand, `slate-200` for borders, `cyan-50` for tinted surfaces.
- **Do** invert primary CTAs to slate-900 on white. Cyan stays for accents, links, focus rings, gradients — not action fills.
- **Do** apply `shadow-sm` plus `border` together for card chrome. The two-layer pattern is the system; using one without the other breaks the recipe.
- **Do** use Inter Variable at weights 400/500/600/700/800. The 800 weight is the framework's hero punch register.
- **Do** carry Fira Code with ligatures in every code block. The ligatures (`=>`, `!=`, `===`) are the brand's craft signal.
- **Do** use cyan-600 (`#0891b2`) for body links, not cyan-500. Cyan-500 doesn't quite clear AA at body sizes; cyan-600 does.
- **Do** show source code below every component preview where space allows. The marketing-as-docs grammar is the brand's strongest signal.
- **Do** use the canonical breakpoints (`sm:` 640 / `md:` 768 / `lg:` 1024 / `xl:` 1280 / `2xl:` 1536) and the canonical spacing scale (4px base).
- **Do** use the cyan radial glow behind hero headlines. The signature ambient depth event.
- **Do** apply gradients sparingly — `from-cyan-500 via-sky-500 to-blue-500` is the canonical gradient axis. Other gradient stops (violet, pink) appear in marketing illustration but never in core chrome.
- **Do** ship a dark-mode variant. The brand assumes its audience expects theme support.
- **Do** style code-block syntax-highlighting in the canonical Tailwind palette: cyan-400 for keywords, green-300 for strings, amber-400 for attributes, slate-500 for comments.

### Don't

- **Don't** introduce custom hex codes that don't map to a Tailwind scale. The framework is the system.
- **Don't** drop Inter for a custom typeface. Inter Variable at weights 400–800 is the entire type voice.
- **Don't** widen line-height below 1.5 for body marketing prose. The 1.7 default is calibrated for readability at 16px on white.
- **Don't** fill the primary CTA with cyan. Cyan stays for accents; slate-900 carries action.
- **Don't** disable Fira Code ligatures in code blocks. They're the brand's craft signal.
- **Don't** soften the slate ramp into warm-grey. The slate ramp's navy hint is what gives Tailwind its slightly-cool register.
- **Don't** introduce a display serif. Inter handles every type job from caption to 96px hero.
- **Don't** stylise the component preview cards into abstract demos. The literal HTML/CSS source is the brand's honesty asset.
- **Don't** use `rounded-md` or `rounded-lg` on the hero CTA. The full pill (`rounded-full`) is the signature shape.
- **Don't** over-saturate the cyan radial glow. 20-30% opacity is the calibrated range; brighter tips toward neon.
- **Don't** drop the `shadow-sm + border` combination on cards. The two-layer chrome is the system.
- **Don't** use `aria-hidden` on copy-code buttons — they're functional, not decoration.
- **Don't** introduce non-canonical breakpoints. The `sm/md/lg/xl/2xl` scale is non-negotiable.
- **Don't** use mascots, hand-drawn illustration, or playful warmth. Tailwind's brand is structured-and-calibrated, not friendly-and-warm.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:           #ffffff
bg-quiet:     #f8fafc      (slate-50)
bg-elev:      #f1f5f9      (slate-100)
bg-tint:      #ecfeff      (cyan-50)
text:         #0f172a      (slate-900)
text-soft:    #475569      (slate-600)
text-muted:   #64748b      (slate-500)
brand:        #06b6d4      (cyan-500)
brand-hover:  #0891b2      (cyan-600)
brand-soft:   #cffafe      (cyan-100)
link:         #0891b2      (cyan-600)
border:       #e2e8f0      (slate-200)
bg-dark:      #0f172a      (slate-900)
code-bg:      #0f172a      (slate-900)
code-text:    #e2e8f0      (slate-200)
on-brand:     #ffffff
```

### Example Component Prompts

- **Hero with Cyan Radial Glow:** "Create a Tailwind-style hero — pure-white `#ffffff` canvas, centered Inter 96/800 headline 'Rapidly build modern websites without ever leaving your HTML.' with `-0.03em` tracking, 20px Inter 400 deck below in `#475569` line-height 1.6. Behind the headline: a soft cyan radial glow (`radial-gradient(circle at 50% 50%, rgba(6,182,212,0.20), transparent 70%)`). Primary CTA 'Get started' (`#0f172a` slate-900 fill, white text, full pill `rounded-full`, 12/24 padding, Inter 14/600) paired with secondary 'Read the docs' (`#f1f5f9` slate-100 fill, `#0f172a` text, full pill, `1px solid #e2e8f0` border)."

- **Component Preview Card with Source Toggle:** "Build a Tailwind component preview card — white card with `1px solid #e2e8f0` hairline, `rounded-xl` (12px radius), `shadow-sm` two-layer (`rgba(15,23,42,0.05) 0 1px 3px, rgba(15,23,42,0.06) 0 1px 2px`). Top region: rendered button on `#f8fafc` slate-50 backdrop (the actual button: `<button class='bg-cyan-500 hover:bg-cyan-600 text-white rounded-full px-6 py-3 font-semibold'>Get started</button>`). Below the preview region: tab control 'Preview / Code' with cyan-500 underline on active tab. Code panel reveals `<button class=\"...\">Get started</button>` HTML in slate-900 code block with Fira Code 14px and syntax highlighting (cyan-400 keywords, green-300 strings)."

- **Code Block with Syntax Highlighting:** "Render a Tailwind code block — `#0f172a` slate-900 fill, `rounded-xl` (12px radius), 20/24 padding, Fira Code 14/400 with ligatures enabled. Show a sample utility class chain like `<div class=\"flex items-center gap-4 rounded-lg bg-slate-100 p-6\">`. Syntax highlighting: tag in red-400 (`#f87171`), attribute in amber-400 (`#fbbf24`), string in green-300 (`#86efac`), keyword in cyan-400 (`#22d3ee`), comment in slate-500. Add a copy button in top-right (slate-400 icon, hover slate-200) with `aria-label='Copy code to clipboard'`."

- **Featured Pricing Card:** "Create a Tailwind featured pricing tier — white card with linear-gradient overlay (`linear-gradient(180deg, #ecfeff 0%, #ffffff 60%)`), `2px solid #06b6d4` cyan brand border, `rounded-xl` (12px), 32px padding, cyan-tinted shadow (`rgba(6,182,212,0.20) 0 12px 32px -8px`). Inside: a 'Most popular' cyan pill (`#cffafe` bg, `#155e75` text, `rounded-full`) at top, Inter 24/600 plan name in `#0f172a`, Inter 56/800 price ('$15') with `$` superscript, Inter 16/400 feature list with cyan-500 check glyphs. Primary CTA 'Get started' uses cyan-500 fill (the rare cyan-action moment) with full pill radius."

- **Docs Sidebar:** "Compose a Tailwind docs sidebar — 256px width, `#ffffff` background, sticky with vertical scroll. Sections: 'Getting started' / 'Core concepts' / 'Customization' / 'Base styles' / 'Layout' / 'Flexbox & Grid' / etc. Each link: Inter 14/400, `#475569` slate-600 color, `6px 12px` padding, `rounded-md` (6px). Hover: background `#f1f5f9` + color `#0f172a`. Active page: background `#ecfeff` cyan-50 + color `#0891b2` cyan-600 + 2px cyan-500 left border."

- **Cyan Tinted Callout Band:** "Compose a Tailwind tinted callout — full-bleed `#ecfeff` cyan-50 background, 96px vertical padding. Centered content: cyan-100 'WHAT'S NEW IN V4' eyebrow pill in Fira Code 12/500 uppercase, Inter 56/800 'Tailwind CSS v4.0' headline in `#0f172a`, Inter 20/400 deck below, primary CTA pair (slate-900 'Read the announcement' + slate-100 'View changelog')."

- **Footer Band:** "Compose a Tailwind footer — `#0f172a` slate-900 band, full-bleed, 96px vertical padding. Five columns of nav links in Inter 14/500 `#94a3b8` slate-400, hovering to `#f1f5f9`. Logo + copyright in left column. Right side: theme toggle, GitHub icon, Discord icon. Subtle cyan radial glow at very low opacity (5%) in the background-center."

### Iteration Guide

1. **Start with the canvas, then add the cyan radial glow.** The brand begins with pure white `#ffffff`. The first chromatic event should be the soft cyan radial behind the hero headline — once the page has that ambient depth, the rest of the system follows.

2. **Use cyan as decoration, not action.** The primary CTA is slate-900 on white pill. Cyan only appears on focus rings, accent gradients, syntax highlighting, featured-card borders, and rare emphasis CTAs. If you find yourself filling buttons with cyan, switch to slate-900.

3. **Apply `shadow-sm + border` together.** The two-layer card chrome is the system's signature. One without the other breaks the recipe — both are required.

4. **Show the source code.** The marketing-as-docs grammar means every component preview should have visible (or toggleable) source. If the design hides the implementation, it's not Tailwind.

5. **Inter Variable at weight 800 for hero.** The framework's hero punch is heavy and confident. Weight 700 reads underweight; weight 800 is the calibrated default.

6. **Body line-height at 1.7.** The looser line-height is the brand's most distinctive type move. Don't compress to 1.5–1.6 — that tips toward dev-tool density.

7. **Use canonical Tailwind values.** Spacing in 4px base, radii from the framework scale, breakpoints from `sm:`/`md:`/`lg:`/`xl:`/`2xl:`. The system is the proof.

8. **Fira Code ligatures on.** Code blocks should render `=>` as `⇒` and `!=` as `≠`. The ligatures are the brand's craft signal — disabling them breaks the typographic register.
