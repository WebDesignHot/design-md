---
name: DeepSeek
tagline: 'Deep-blue Chinese-tech minimalism — a research lab dressed in `#4d6bfe` and stark white space.'
author: webdesignhot
source_url: https://www.deepseek.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [ai, dev-tools]
tags: [light, minimal, sans, structured, cool, bright]
preview_swatch: ['#ffffff', '#4d6bfe', '#0a0a23']
related: [mistral, openai, huggingface]
description: 'DeepSeek''s site is the Chinese-research-lab aesthetic refined into a single-product page — a stark white canvas, deep electric blue `#4d6bfe` for the brand mark and primary action, near-black display copy, and a sans-serif system that reads cleanly in both Latin and CJK. The design language is "research paper meets enterprise SaaS": confident, restrained, and almost aggressively unstyled. Hero bands sometimes flip to a deep `#0a0a23` navy with white typography, particularly for major model-release announcements. The top announcement strip — soft `#eaeefe` blue with `#2a3eb1` text — is a permanent fixture, signalling whichever model version is current. The bilingual type stack (Inter + PingFang SC + Hiragino Sans GB + Microsoft YaHei) runs on a 1.6 line-height to accommodate Chinese characters at the same body size as Latin — a deliberate accessibility decision that''s also a typographic fingerprint.'

colors:
  # Primary
  bg: '#ffffff'                          # stark white canvas — the working surface
  bg-soft: '#fafbfd'                     # subtle off-white for elevated bands
  bg-deep: '#0a0a23'                     # deep navy hero / footer band
  bg-deep-strong: '#050518'              # deepest navy variant
  surface: '#f5f7fb'                     # soft grey-blue card / panel base
  surface-hover: '#eef1f8'               # card hover
  surface-strong: '#e2e7f1'              # divider strength
  text: '#1a1a1a'                        # near-black body
  text-strong: '#0a0a0a'                 # display copy
  text-medium: '#2a2a2e'                 # secondary heading
  text-muted: '#6b7280'                  # secondary copy, the most-used muted
  text-soft: '#8b90a0'                   # supporting copy
  text-faint: '#a8acb8'                  # disabled, microcopy
  text-on-dark: '#e6e8ef'                # body text on `#0a0a23` deep-navy bands
  text-on-dark-muted: '#a8b0c4'          # muted copy on deep-navy
  on-brand: '#ffffff'                    # white label on signature blue
  on-cta: '#ffffff'                      # white label on brand CTA

  # Brand & Accent (whale blue)
  brand: '#4d6bfe'                       # signature DeepSeek blue (whale-mark blue)
  brand-hover: '#3a55e5'                 # pressed
  brand-active: '#2a44cc'                # deeply pressed
  brand-deep: '#2a3eb1'                  # accent text on light surfaces
  brand-soft: '#eaeefe'                  # tonal pill bg, announcement strip
  brand-faint: '#f3f5fe'                 # quietest blue tint
  brand-glow: 'rgba(77, 107, 254, 0.24)' # focus glow
  accent-cyan: '#5eaaff'                 # secondary highlight in illustrations only

  # Interactive
  link: '#4d6bfe'                        # whale blue — underlined on hover
  link-hover: '#3a55e5'                  # pressed link
  selected-bg: '#eaeefe'                 # selected nav item
  disabled-bg: '#f5f7fb'                 # disabled control fill
  disabled-text: '#a8acb8'               # disabled label

  # Borders
  border: '#e5e7eb'                      # default hairline
  border-strong: '#d1d5db'               # emphasized rule
  border-soft: '#eef0f4'                 # quietest division
  border-focus: '#4d6bfe'                # focus-ring
  border-on-dark: 'rgba(255, 255, 255, 0.12)' # hairline on deep-navy

  # Semantic
  success-bg: '#dcfce7'
  success-text: '#15803d'
  warning-bg: '#fef3c7'
  warning-text: '#854d0e'
  danger-bg: '#fee2e2'
  danger-text: '#b91c1c'
  info-bg: '#eaeefe'
  info-text: '#2a3eb1'

  # Shadow tints
  shadow-rgb: '10, 10, 35'               # deep-navy tinted shadow base
  shadow-blue: '77, 107, 254'            # rare blue focus glow

typography:
  display:
    family: 'Inter, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", -apple-system, "system-ui", sans-serif'
    weights: [500, 600, 700]
    opentype-features: ['ss01', 'liga', 'kern']
  body:
    family: 'Inter, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", -apple-system, "system-ui", sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['kern']
  cjk:
    family: '"PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif'
    weights: [400, 500, 600, 700]
    note: 'CJK fallback chain — chained from primary stack on every text role'
  mono:
    family: '"JetBrains Mono", "Source Code Pro", Menlo, Consolas, monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-hero:    { size: 80, weight: 700, lineHeight: 1.05, tracking: '-0.025em', family: display, opentype: 'ss01' }
    display:         { size: 72, weight: 700, lineHeight: 1.08, tracking: '-0.02em',  family: display }
    h1:              { size: 64, weight: 700, lineHeight: 1.1,  tracking: '-0.02em',  family: display }
    h2:              { size: 40, weight: 600, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.3,  tracking: '0',        family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.35, family: display }
    h5:              { size: 18, weight: 600, lineHeight: 1.4,  family: display }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.4,  tracking: '0.06em',   family: display, transform: uppercase }
    body-large:      { size: 18, weight: 400, lineHeight: 1.6,  family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.6,  family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.55, family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.5,  family: body }
    caption-tabular: { size: 13, weight: 500, lineHeight: 1.4,  family: mono, opentype: 'tnum' }
    label:           { size: 13, weight: 500, lineHeight: 1.3,  family: body }
    label-cta:       { size: 14, weight: 600, lineHeight: 1.2,  family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.55, family: mono, opentype: 'tnum zero' }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.4,  family: mono }
    cjk-display:     { size: 64, weight: 600, lineHeight: 1.3,  family: cjk, note: 'CJK headline — slightly tighter weight than Latin' }
    cjk-body:        { size: 16, weight: 400, lineHeight: 1.7,  family: cjk, note: 'CJK body — 1.7 line-height for Chinese density' }

radius:
  micro: 4
  sm: 6
  md: 8
  lg: 12
  card: 16
  xl: 20
  button: 8
  pill: 9999

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96, 128]

layout:
  page-width: 1200
  prose-width: 720
  hero-prose-width: 720
  site-gutter: 'clamp(24px, 5vw, 64px)'
  header-height: 64
  grid-columns: 12
  section-rhythm: '80-128px'

components:
  button-primary:
    background: '#4d6bfe'
    text: '#ffffff'
    padding: '12px 24px'
    radius: 8
    border: '1px solid #4d6bfe'
    font: 'Inter 600 / 14px'
    hover-bg: '#3a55e5'
    active-bg: '#2a44cc'
    use: 'Solid `#4d6bfe` whale-blue — primary CTA on hero, model launches, sign-up'
  button-secondary:
    background: '#ffffff'
    text: '#1a1a1a'
    padding: '12px 24px'
    radius: 8
    border: '1px solid #e5e7eb'
    font: 'Inter 600 / 14px'
    hover-bg: '#f5f7fb'
    use: 'Outlined twin — same 8px radius, hairline border'
  button-ghost:
    background: 'transparent'
    text: '#1a1a1a'
    padding: '8px 12px'
    radius: 6
    border: 'none'
    font: 'Inter 500 / 14px'
    hover-bg: '#f5f7fb'
    use: 'Quiet third action — nav links, inline actions'
  button-on-dark:
    background: '#ffffff'
    text: '#0a0a23'
    padding: '12px 24px'
    radius: 8
    font: 'Inter 600 / 14px'
    hover-bg: '#e6e8ef'
    use: 'CTA on `#0a0a23` deep-navy hero bands — inverted chrome'
  card:
    background: '#f5f7fb'
    border: '1px solid #e5e7eb'
    radius: 16
    padding: '24px'
    use: 'Default soft-blue card — feature tile, model card, doc link'
  card-white:
    background: '#ffffff'
    border: '1px solid #e5e7eb'
    radius: 16
    padding: '24px'
    use: 'Pure-white card — pricing tier, hero feature card'
  card-on-dark:
    background: 'rgba(255, 255, 255, 0.04)'
    border: '1px solid rgba(255, 255, 255, 0.12)'
    radius: 16
    padding: '24px'
    use: 'Card on `#0a0a23` deep-navy hero band — translucent over dark'
  hero:
    background: '#ffffff'
    padding: '96px 0'
    use: 'Two-column on desktop — bold Inter 64px headline left, abstract whale/grid illustration right'
  hero-dark:
    background: '#0a0a23'
    padding: '96px 0'
    text: '#e6e8ef'
    use: 'Deep-navy hero band — flips on major model-release announcements'
  banner:
    background: '#eaeefe'
    text: '#2a3eb1'
    padding: '12px 24px'
    font: 'Inter 500 / 14px'
    use: 'Top announcement strip — single line about the latest model release; permanent fixture'
  input:
    background: '#ffffff'
    border: '1px solid #d1d5db'
    radius: 8
    padding: '12px 16px'
    font: 'Inter 400 / 16px'
    placeholder-color: '#a8acb8'
    focus-ring: '0 0 0 2px #4d6bfe'
    use: 'Form fields, search, API key entry'
  badge-blue:
    background: '#eaeefe'
    text: '#2a3eb1'
    padding: '4px 10px'
    radius: 9999
    font: 'Inter 600 / 12px'
    use: 'Status pill — V3 / R1 / New / Beta indicator'
  badge-bilingual:
    background: '#f5f7fb'
    text: '#6b7280'
    padding: '4px 10px'
    radius: 9999
    font: 'Inter 500 / 12px'
    use: 'EN / 中文 language toggle pill in nav'
  nav-link:
    background: 'transparent'
    text: '#1a1a1a'
    padding: '8px 12px'
    font: 'Inter 500 / 14px'
    hover-text: '#4d6bfe'
    use: 'Top nav links — quiet near-black, brand-blue on hover'
  model-spec:
    background: '#f5f7fb'
    border: '1px solid #e5e7eb'
    radius: 12
    padding: '20px'
    use: 'Model parameter card — name + param count in mono + benchmark scores'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out: 'cubic-bezier(0.16, 1, 0.3, 1)'
  duration-instant: 80
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  duration-page: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — translates become opacity-only, durations halved, illustration grid animations disabled'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  none: 'none'
  ambient: 'rgba(10, 10, 35, 0.04) 0 1px 3px'
  standard: 'rgba(10, 10, 35, 0.06) 0 4px 12px'
  elevated: 'rgba(10, 10, 35, 0.08) 0 12px 28px -8px'
  blue-glow: 'rgba(77, 107, 254, 0.18) 0 16px 32px -12px'
  modal: 'rgba(10, 10, 35, 0.18) 0 24px 48px -12px'
  ring: '0 0 0 2px #4d6bfe'
  ring-offset: '0 0 0 2px #ffffff, 0 0 0 4px #4d6bfe'

accessibility:
  contrast-text-on-bg: 16.1              # #1a1a1a on #ffffff — AAA
  contrast-text-strong-on-bg: 19.5       # #0a0a0a on #ffffff — AAA
  contrast-text-on-brand: 4.6            # #ffffff on #4d6bfe — AA at body
  contrast-text-on-deep: 13.2            # #e6e8ef on #0a0a23 — AAA
  contrast-text-muted-on-bg: 4.7         # #6b7280 on #ffffff — AA at body
  contrast-link-on-bg: 4.6               # #4d6bfe on #ffffff — AA
  contrast-banner: 6.8                   # #2a3eb1 on #eaeefe — AAA
  focus-ring: '2px solid #4d6bfe with 2px white offset'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; bilingual nav supports tab navigation across language toggle; tab order matches visual'
  prose-line-length: 'capped at 720px for hero copy; 640px for marketing prose'
  cjk-line-height: '1.6 minimum on body, 1.7 on long-form CJK prose — accommodates Chinese character density'
  aria-patterns: 'language toggle uses aria-pressed; modal uses aria-modal=true + aria-labelledby; model spec cards use proper <table> for benchmarks; banner uses role=status with aria-live=polite'

dark-mode: optional                      # marketing surface mostly light; dark hero band variant for model launches; in-product chat handles its own dark theme

lineage:
  summary: 'DeepSeek''s site embodies a particular strain of Chinese-tech enterprise design: stark white canvas, a single saturated brand blue, near-black sans-serif type, and almost no decorative chrome. The brand colour `#4d6bfe` — sometimes called "whale blue" after the DeepSeek mascot — does all the action work, with `#eaeefe` as its tonal-pill cousin. The typography stack pairs Inter with PingFang SC / Hiragino Sans GB / Microsoft YaHei for CJK fallback, on a 1.6 line-height — a deliberate accommodation for Chinese characters. Aesthetic lineage runs through Anthropic''s research-lab restraint, Mistral''s monochromatic European minimalism, and Alibaba/ByteDance''s enterprise-SaaS chromatic discipline.'
  influences:
    - name: Anthropic
      role: 'Research-lab restraint; long-form essays and stark single-product marketing pages'
      url: https://www.anthropic.com
    - name: Mistral
      role: 'European-AI-lab discipline; single brand colour, near-monochrome support palette, generous whitespace'
      url: https://mistral.ai
    - name: Alibaba Cloud
      role: 'Chinese enterprise-SaaS chromatic vocabulary; saturated mid-blues on stark white with bilingual type stacks'
      url: https://www.alibabacloud.com
    - name: Hugging Face
      role: 'Open-source ML register; model cards and benchmark tables as marketing'
      url: https://huggingface.co
    - name: PingFang SC
      role: 'The Apple-designed CJK family chosen as the bilingual companion to Inter'
      url: https://en.wikipedia.org/wiki/PingFang
    - name: Inter
      role: 'The Latin half of the bilingual stack'
      url: https://rsms.me/inter/
    - name: arXiv
      role: 'Paper-cite culture; every model release links its paper'
      url: https://arxiv.org
---

## 1. Visual Theme & Atmosphere

DeepSeek's marketing surface is **the Chinese AI-lab aesthetic at full confidence**. The canvas is pure white `#ffffff`, the brand colour is a single saturated electric blue `#4d6bfe` — sometimes called "whale blue" after the DeepSeek mascot — and the type system is Inter + PingFang SC running on a 1.6 line-height to accommodate both Latin and CJK characters at the same body size. The most consequential decision in the entire system is bilingual: the type stack is designed to render Mandarin at the same readability as English, on the same page, with the same line-height, without compromising either.

Hero bands sometimes flip to a deep `#0a0a23` navy with white typography, particularly for major model-release announcements (V3, R1). The top announcement strip — soft `#eaeefe` blue with `#2a3eb1` text — is a permanent fixture, signalling whichever model version is current. The chromatic and structural language reads as **research paper meets enterprise SaaS**: confident, almost aggressively unstyled, with the implication that the technology speaks for itself.

The chromatic palette is narrow by design: white, near-black `#1a1a1a`, soft grey-blue `#f5f7fb`, and one saturated electric blue `#4d6bfe`, with the deep `#0a0a23` navy reserved for hero/footer accents. Where OpenAI uses near-monochrome black-on-white and Mistral leans into orange, **DeepSeek stakes out the saturated cool-blue end of the AI-lab spectrum**. The `#0a0a23` navy is the brand's chromatic anchor for "weight" — when DeepSeek wants a hero to feel important rather than informational, it flips to navy with white type and the brand-blue subtly glowing through illustration grids.

Atmospheric vocabulary: *whale-blue, deep-navy-band, bilingual-stack, 1.6-leading, research-paper-meets-enterprise, single-saturated-blue, soft-grey-blue-card, announcement-strip-permanent, Chinese-tech-confidence, generous-CJK-leading, no-secondary-accent.*

**Key Characteristics**
- Stark white `#ffffff` canvas — the working surface
- Saturated electric blue `#4d6bfe` (whale blue) as the only action colour
- Deep navy `#0a0a23` for hero bands and weighty announcements
- Inter + PingFang SC + Hiragino Sans GB bilingual type stack
- **1.6 body line-height** — deliberate CJK accommodation
- Top announcement strip in soft `#eaeefe` blue — permanent
- Soft grey-blue `#f5f7fb` cards — the "cool" panel surface
- 8px button radius (rectangular, confident — not pill, not super-elliptic)
- 16px card radius — standard enterprise SaaS comfort
- Hairline `#e5e7eb` borders, no shadows on marketing
- Inter at 700 weight on display — confident, not hairline like Cartesia
- Whale/grid illustration — abstract geometric, not character mascot

## 2. Color Palette & Roles

### Primary

- **bg** `#ffffff` — stark white canvas; the working surface, never substituted for off-white.
- **text** `#1a1a1a` — near-black body; warmer than pure `#000`.
- **bg-deep** `#0a0a23` — deep navy hero / footer band; the brand's "weight" register.
- **surface** `#f5f7fb` — soft grey-blue card / panel base; the cool-cousin to white.
- **bg-soft** `#fafbfd` — barely off-white for elevated bands.
- **text-strong** `#0a0a0a` — display copy, full near-black.

### Brand & Accent (whale blue)

- **brand** `#4d6bfe` — signature DeepSeek blue (whale-mark blue); the only action colour.
- **brand-hover** `#3a55e5` — pressed.
- **brand-active** `#2a44cc` — deeply pressed.
- **brand-deep** `#2a3eb1` — accent text on light surfaces (announcement strip text, badge labels).
- **brand-soft** `#eaeefe` — tonal pill bg, announcement strip background.
- **brand-faint** `#f3f5fe` — quietest blue tint, rare info-callout fill.
- **accent-cyan** `#5eaaff` — secondary highlight in illustrations only — never CTA, never link.

### Interactive

- **link** `#4d6bfe` — whale blue, underline on hover.
- **link-hover** `#3a55e5` — pressed.
- **selected-bg** `#eaeefe` — selected nav item, selected row.
- **disabled-bg** `#f5f7fb` — disabled control fill.
- **disabled-text** `#a8acb8` — disabled label.
- **focus-ring** `#4d6bfe` — 2px solid with 2px white offset.

### Neutral Scale

- **near-black** `#0a0a0a` — display copy.
- **slate-text** `#1a1a1a` — body.
- **slate-medium** `#2a2a2e` — secondary heading.
- **slate-muted** `#6b7280` — secondary copy, the most-used muted tone.
- **slate-soft** `#8b90a0` — supporting copy.
- **slate-faint** `#a8acb8` — disabled, microcopy.
- **slate-line** `#d1d5db` — strong divider.

### Surface & Borders

- **surface-0 (page)** — `#ffffff` stark white.
- **surface-1 (panel)** — `#fafbfd` barely-off-white.
- **surface-2 (card)** — `#f5f7fb` soft grey-blue.
- **surface-3 (hover)** — `#eef1f8` deeper soft grey-blue.
- **surface-4 (deep band)** — `#0a0a23` navy.
- **border** `#e5e7eb` — default hairline.
- **border-strong** `#d1d5db` — emphasized rule.
- **border-soft** `#eef0f4` — quietest division.
- **border-on-dark** `rgba(255, 255, 255, 0.12)` — hairline on deep-navy bands.

### Shadow Colors

DeepSeek is **flat-on-marketing** — almost no shadows on the white surface. When shadows appear (modals, dropdowns), they are **deep-navy tinted** (`rgba(10, 10, 35, ...)`). The rare `blue-glow` shadow uses brand RGB for hero illustration accent. The deep navy band itself provides chromatic depth rather than physical elevation.

### Semantic

- **success** — `#dcfce7` / `#15803d`. Used for "Model deployed", "API key active".
- **warning** — `#fef3c7` / `#854d0e`. Used for rate-limit warnings.
- **danger** — `#fee2e2` / `#b91c1c`. Used for failed requests.
- **info** — `#eaeefe` / `#2a3eb1`. Reuses brand-blue tonal pair — and matches the announcement strip exactly.

## 3. Typography Rules

### Font Family

- **Display & Body**: **Inter** (or a near-Inter variable cut) with **PingFang SC** for CJK fallback. Loaded with weights 400 / 500 / 600 / 700. Inter handles Latin; PingFang SC handles Simplified Chinese; the chain extends through Hiragino Sans GB (macOS / iOS) and Microsoft YaHei (Windows) for cross-platform CJK rendering. Final fallback: `-apple-system → system-ui → sans-serif`.
- **CJK-specific**: PingFang SC at weights 400 / 500 / 600 / 700. The CJK family is *chained from the primary stack on every text role* — there is no separate "Chinese-only" CSS class. Browsers select the appropriate family per character via the unicode-range fallback chain.
- **Mono**: **JetBrains Mono** or Source Code Pro for code samples. Fallback: Menlo, Consolas, monospace.
- **OpenType features**: `kern` always; `ss01` on display (cleaner alt-glyphs); `tnum + zero` mandatory on mono for legible numerics in code.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Inter+CJK | 80 | 700 | 1.05 | -0.025em | ss01 | Rare hero — major model launches |
| display | Inter+CJK | 72 | 700 | 1.08 | -0.02em | — | Section openers |
| h1 | Inter+CJK | 64 | 700 | 1.1 | -0.02em | — | Standard hero |
| h2 | Inter+CJK | 40 | 600 | 1.15 | -0.015em | — | Section heading |
| h3 | Inter+CJK | 24 | 600 | 1.3 | normal | — | Subsection |
| h4 | Inter+CJK | 20 | 600 | 1.35 | normal | — | Card heading |
| h5 | Inter+CJK | 18 | 600 | 1.4 | normal | — | Inline subheading |
| eyebrow | Inter | 12 | 600 | 1.4 | 0.06em | uppercase | Section label |
| body-large | Inter+CJK | 18 | 400 | 1.6 | normal | — | Lede — note generous CJK leading |
| body | Inter+CJK | 16 | 400 | 1.6 | normal | — | Default body |
| body-small | Inter+CJK | 14 | 400 | 1.55 | normal | — | Secondary copy |
| caption | Inter+CJK | 13 | 400 | 1.5 | normal | — | Helper |
| caption-tabular | JetBrains Mono | 13 | 500 | 1.4 | normal | tnum | Spec data |
| label | Inter+CJK | 13 | 500 | 1.3 | normal | — | Form label |
| label-cta | Inter+CJK | 14 | 600 | 1.2 | normal | — | Button text |
| code | JetBrains Mono | 14 | 400 | 1.55 | normal | tnum zero | Inline + block code |
| code-micro | JetBrains Mono | 12 | 400 | 1.4 | normal | — | Footnote |
| cjk-display | PingFang SC | 64 | 600 | 1.3 | normal | — | CJK headline override (slightly looser leading, slightly lighter weight than Latin equivalent) |
| cjk-body | PingFang SC | 16 | 400 | 1.7 | normal | — | CJK long-form prose — 1.7 leading for Chinese density |

### Principles

- **1.6 body line-height even on Latin-only pages.** The brand's typographic fingerprint and supports the bilingual mission. Never drop to 1.5.
- **Inter at 700 weight on display.** Confident, not hairline. The opposite of Cartesia's 500-weight discipline.
- **CJK leading slightly looser than Latin.** Where Latin holds at 1.6, long-form CJK prose extends to 1.7 — Chinese characters read denser per em and need extra room.
- **CJK headline weight slightly lighter than Latin equivalent.** Where Latin headlines are 700, CJK headlines hold at 600 — PingFang SC's heavier weights compress the strokes too much.
- **Negative tracking on Latin display only.** `-0.02em` to `-0.025em` on h1–display-hero. CJK never receives negative tracking (Chinese characters need their default spacing).
- **Single-family across body and display.** No serif counterpoint, no editorial italic. Inter + PingFang SC throughout.
- **Mono only for code.** No mono headlines, no mono body emphasis.
- **Numbers in mono with `tnum`.** Tabular numerals mandatory in code samples and benchmark tables.

## 4. Component Stylings

### Buttons

**Primary (whale blue)** — `#4d6bfe` bg, `#ffffff` text, **8px radius**, Inter 600 / 14px, padding `12px 24px`. Hover deepens to `#3a55e5`; active to `#2a44cc`. The signature CTA — "Get API key", "Try DeepSeek", "Sign up".

**Secondary (outlined)** — `#ffffff` bg, `#1a1a1a` text, `1px #e5e7eb` border, 8px radius identical to primary, Inter 600 / 14px. Hover wash `#f5f7fb`.

**Ghost** — transparent, `#1a1a1a` text, 6px radius, `8px 12px` padding. Hover wash `#f5f7fb`. Used for nav links.

**On-dark CTA (inverted chrome)** — `#ffffff` bg, `#0a0a23` text, 8px radius. Hover `#e6e8ef`. Used on `#0a0a23` deep-navy hero bands.

### Cards

**Default soft-blue card** — `#f5f7fb` bg, `1px #e5e7eb` border, 16px radius, `24px` padding, no shadow. The most common card on the marketing surface — used for feature tiles, model cards, doc links.

**Pure-white card** — `#ffffff` bg, `1px #e5e7eb` border, 16px radius, `24px` padding. Used for pricing tiers and hero feature cards (where the soft-blue would conflict with adjacent surfaces).

**Card on deep-navy** — `rgba(255, 255, 255, 0.04)` translucent fill, `1px rgba(255, 255, 255, 0.12)` border, 16px radius. Used on `#0a0a23` hero bands.

### Hero / Banners

**Standard hero** — `#ffffff` bg, two-column on desktop: bold Inter 64px headline left, abstract whale/grid illustration right. Sometimes 1.6 line-height bilingual subhead below the headline.

**Deep-navy hero** — `#0a0a23` bg, `#e6e8ef` text. Headline retains 64px Inter 700 / -0.02em tracking; subhead shifts to `#a8b0c4` muted-on-dark. Used for major model-release announcements.

**Top announcement strip** — `#eaeefe` bg, `#2a3eb1` text, full-width, `12px 24px` padding, Inter 500 / 14px. Single line announcing current model version. Permanent fixture above the nav.

### Badges, Tags, Pills

**Status pill (blue)** — `#eaeefe` bg, `#2a3eb1` text, Inter 600 / 12px, pill radius (9999). Used for `V3`, `R1`, `New`, `Beta`.

**Bilingual toggle pill** — `#f5f7fb` bg, `#6b7280` text, Inter 500 / 12px, pill radius. EN / 中文 toggle in the nav.

### Inputs & Forms

**Default input** — `#ffffff` bg, `1px #d1d5db` border, 8px radius, `12px 16px` padding, Inter 400 / 16px / 1.6 line-height, `#a8acb8` placeholder. Focus ring `0 0 0 2px #4d6bfe` with 2px white offset.

**Form labels** — Inter 500 / 14px, `#1a1a1a`, `4px` margin-bottom from input. Bilingual labels show both languages stacked when locale supports.

**Helper text** — Inter 400 / 13px, `#6b7280`, `4px` margin-top from input.

**Error state** — border `#fee2e2`; helper text flips to `#b91c1c`.

### Navigation

**Top nav** — 64px header height, `#ffffff` bg, `1px #e5e7eb` bottom border (only on scroll). Bilingual labels (EN / 中文) on the language toggle pill at far right. Wordmark left in Inter 700. Nav links Inter 500 / 14px / `#1a1a1a`. Hover deepens to `#4d6bfe`. Right cluster: ghost "Sign in" + primary blue "Try DeepSeek" pill.

**Footer nav** — Inter 400 / 14px / `#6b7280`, multi-column grid. Footer typically uses a `#0a0a23` deep-navy band.

### Model spec card (the signature module)

**Model spec card** — `#f5f7fb` bg, `1px #e5e7eb` border, 12px radius, `20px` padding. Layout:
- Model name in Inter 600 / 18px / `#1a1a1a`.
- Param count in JetBrains Mono 500 / 14px / `#2a3eb1` ("236B params").
- 2–3 benchmark scores in JetBrains Mono 500 / 13px with tabular numbers.
- "Try" link in Inter 500 / 14px / `#4d6bfe`.

### Tooltips

**Tooltip** — `#0a0a23` bg, `#e6e8ef` text, 6px radius, Inter 400 / 13px, `8px 12px` padding, `200ms` fade.

### Toasts

**Toast** — `#ffffff` bg, `1px #e5e7eb` border, 8px radius, ambient deep-navy shadow, `12px 16px` padding. Slide-up from bottom-right.

### Modals

**Modal** — `#ffffff` panel, 16px radius, modal shadow, `40px` padding. Backdrop `rgba(10, 10, 35, 0.5)`.

## 5. Layout Principles

### Spacing System

Base unit **4px**. Scale: `1, 2, 4, 6, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96, 128`. Section padding lives in 80–128px. Slightly tighter than Anthropic's 88–160px but looser than typical SaaS — the rhythm reads as enterprise-paper.

### Grid & Container

- **Page max-width**: 1200px, centred, `clamp(24px, 5vw, 64px)` site gutter.
- **Hero prose-width**: 720px max — broadsheet narrow.
- **Marketing prose-width**: 640px.
- **Grid columns**: 12, 24px gutter.
- **Feature grid**: 3-up cards on desktop with equal-width columns.
- **Hero**: two-column on desktop — headline left, illustration right.

### Whitespace Philosophy

Sections breathe. Vertical rhythm runs 80–120px between modules. Hero illustrations have generous surround — the whale/grid abstract motif holds at ~480×480px on desktop with 64–96px padding around it. Body text uses 1.6 line-height, which inherently builds vertical airiness.

### Section Cadence

The page alternates **`#ffffff` white**, **`#f5f7fb` soft grey-blue**, and the rare **`#0a0a23` deep-navy** band. The deep-navy band typically appears once per page — for the model-release hero or the footer. Most sections stay in the white-on-white-on-soft-blue register.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 4px | Inline tags, focus inner-stroke |
| Small | 6px | Ghost buttons, tooltips |
| Standard | 8px | Buttons (primary, secondary, on-dark), inputs |
| Comfortable | 12px | Spec cards, dropdowns |
| Card | 16px | Default feature cards, pricing cards |
| Large | 20px | Hero shells, modals (alt) |
| Pill | 9999px | Badges, status pills, language toggle |

The shape vocabulary is **rectangular and confident** — buttons sit at 8px (the standard enterprise-SaaS control radius), cards at 16px (matching Stripe and Notion). No playful super-ellipses, no fully-rounded CTAs (Kagi's pill register is rejected), no aggressive sharp 4px CTAs. The 8px button is the brand's structural fingerprint.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Page bg |
| 1 (hairline) | `1px #e5e7eb` border | Default cards |
| 2 (tonal) | `#f5f7fb` bg lift on `#ffffff`, no shadow | Default soft-blue card |
| 3 (chromatic) | `#0a0a23` deep-navy band | Hero / footer accent — not physical elevation |
| 4 (ambient) | `rgba(10, 10, 35, 0.04) 0 1px 3px` | Toast, light hover |
| 5 (modal) | `rgba(10, 10, 35, 0.18) 0 24px 48px -12px` | Modal |
| Special | `rgba(77, 107, 254, 0.18) 0 16px 32px -12px` | Rare blue-glow under hero illustration |

### Shadow Philosophy

DeepSeek's depth language is **tonal layering plus a hairline border, with chromatic depth via deep-navy bands**. Marketing surface shadows are essentially absent — the `#0a0a23` deep navy provides the "weight" register where most brands would use shadow. When real shadows do appear (modal, tooltip), they're **deep-navy tinted** (`rgba(10, 10, 35, ...)`). The rare `blue-glow` shadow uses brand-blue RGB for hero illustration accent.

## 8. Interaction & Motion

### Easing curves

- **Standard** — `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus.
- **Emphasized** — `cubic-bezier(0.2, 0, 0, 1)` — incoming elements, modals.
- **Out** — `cubic-bezier(0.16, 1, 0.3, 1)` — overshoot-free decelerate.

### Duration buckets

- **Instant** — 80ms — focus ring.
- **Fast** — 120ms — hover bg shift.
- **Standard** — 200ms — default transition.
- **Slow** — 320ms — modal opens, card hover lift (rare).
- **Page** — 400ms — between-route transition.

### Per-component micro-states

- **Primary blue button hover** — bg shifts `#4d6bfe → #3a55e5` over `120ms ease-standard`. No translate.
- **Secondary button hover** — bg wash `#ffffff → #f5f7fb` over `120ms`.
- **Card hover** — `#f5f7fb → #eef1f8` over `200ms`. No translate, no scale.
- **Link hover** — colour stays `#4d6bfe`, underline reveals.
- **Input focus** — focus-ring fades in `80ms`; border `#e5e7eb → #4d6bfe`.
- **Modal** — backdrop fades 0 → 0.5 over `200ms`; modal scales `0.96 → 1` simultaneously over `320ms ease-emphasized`.
- **Hero whale-grid illustration** — subtle scroll-tied parallax, disabled under reduced-motion.

### Page transitions

Marketing pages use SPA-style fade-through at `400ms ease-standard`. Section anchors use `scroll-behavior: smooth`.

### Reduced-motion strategy

`prefers-reduced-motion: reduce` is fully honoured. Translates become opacity fades. Hero illustration parallax disables. Smooth scroll disables.

## 9. Accessibility & A11y

### Contrast pairs (computed)

| Pair | Ratio | WCAG |
|---|---|---|
| `#1a1a1a` on `#ffffff` (body) | 16.1:1 | AAA |
| `#0a0a0a` on `#ffffff` (display) | 19.5:1 | AAA |
| `#ffffff` on `#4d6bfe` (CTA) | 4.6:1 | AA at body |
| `#e6e8ef` on `#0a0a23` (text on deep-navy) | 13.2:1 | AAA |
| `#a8b0c4` on `#0a0a23` (muted on deep-navy) | 6.4:1 | AA |
| `#6b7280` on `#ffffff` (muted) | 4.7:1 | AA at body |
| `#4d6bfe` on `#ffffff` (link) | 4.6:1 | AA at body |
| `#2a3eb1` on `#eaeefe` (announcement banner) | 6.8:1 | AAA |

### Focus indicators

**2px solid `#4d6bfe`** (whale blue) with **2px white offset** on every interactive surface. On deep-navy bands, the focus uses **2px white inner ring + 2px outer `#4d6bfe`**. Inputs additionally swap their border to `#4d6bfe` on focus.

### ARIA patterns

- **Language toggle** — `<button role="switch">` with `aria-pressed="true|false"` for EN/中文 state; visible label updates accordingly.
- **Modal** — `role="dialog"` + `aria-modal="true"` + `aria-labelledby` + `aria-describedby`. Initial focus on first input.
- **Announcement strip** — `role="status"` + `aria-live="polite"` so screen readers announce model-release news without interrupting.
- **Model spec card** — wraps benchmark data in `<table>` with proper `<th scope>` markup; the visual card layout uses Grid but the underlying semantics remain tabular.
- **Combobox** — `role="combobox"` + `aria-controls` + `aria-expanded`.
- **Tooltip** — `role="tooltip"` + `aria-describedby`.

### Keyboard navigation

- Tab order matches reading order — announcement strip, nav, hero CTA, feature cards, footer.
- ESC dismisses modals.
- Arrow keys move within tab-lists.
- Language toggle responds to Space (toggle) and Enter.
- Skip-to-content link on first Tab.

### Screen reader hints

- Whale/grid SVG illustration uses `aria-hidden="true"` for decorative elements.
- Bilingual labels: when displayed bilingually, the secondary language gets `lang="zh-CN"` or `lang="en"` attribute for proper screen-reader pronunciation.
- Model parameter announcements use `aria-label` for natural speech ("two hundred thirty-six billion parameters").
- Code samples wrap in `<pre><code>` with `aria-label` describing the language.

### CJK accessibility

- All CJK text has `lang="zh-CN"` or `lang="zh"` set explicitly so screen readers select Chinese voice.
- CJK line-height held at 1.6+ to support readers with dyslexia or visual fatigue.
- Font-feature `palt` (proportional alternate widths) is *not* applied — CJK retains full-width spacing for legibility.

### Reduced motion

Honoured globally. See §8.

## 10. Responsive Behavior

### Breakpoints

| Name | Min-width | Notes |
|---|---|---|
| mobile | 0 | Single column, 24px gutter, hero at 32px |
| tablet | 640px | 2-up feature grid, hero at 40px |
| desktop | 1024px | 3-up grid, hero at 56px |
| wide | 1280px | Full 12-column grid, hero at 64px |
| max | 1440px | Container caps at 1200px, gutter expands |

### Touch targets

All interactive elements honour **44×44px minimum**. Primary CTA at `12px 24px` padding renders ~44px tall. CJK characters require slightly larger tap surface — buttons with Chinese labels hold a minimum 48px height.

### Collapsing strategy

- **Hero** — two-column desktop (headline + illustration) collapses to single-column mobile with headline first, illustration below.
- **Feature grid** — 3-up desktop → 2-up tablet → 1-up mobile.
- **Model spec card** — desktop shows benchmark data inline; mobile stacks param count + benchmarks.
- **Top nav** — links collapse into a hamburger drawer at <1024px; primary CTA stays visible; language toggle remains in the header.
- **Announcement strip** — full-width text on desktop; truncates with "…" on mobile if too long, with full text revealed on tap.

### Image behaviour

- Whale/grid illustrations are SVG (vector — scales perfectly).
- Photographic content (rare) uses AVIF + WebP fallback.
- `loading="lazy"` below the fold.
- `aspect-ratio` to prevent CLS.

### Container queries

Used on the model spec card — at `@container (max-width: 480px)` the param count moves from inline-with-name to a separate line below.

## 11. Content & Voice

### Tone

**Confident, technical, restrained — and bilingual.** DeepSeek speaks the way a Chinese AI research lab speaks to international developers: claims are quantified ("236B params", "open-source under MIT"), the audience is assumed to be technical, and the marketing surface holds a measured tone that lets the technology speak for itself. Bilingual marketing pages alternate paragraphs between EN and 中文 (Mandarin) — the brand reads as proudly bicultural.

### Microcopy patterns

- **Button verbs (EN)** — "Try DeepSeek", "Get API key", "Read the paper", "Download model", "View on Hugging Face".
- **Button verbs (中文)** — "试用 DeepSeek", "获取 API 密钥", "阅读论文", "下载模型".
- **Error messages** — `[Field/Operation]: [problem]. [Resolution].` Bilingual on Chinese-locale pages.
- **Success confirmations** — "已保存" / "Saved" — minimal, matched across locales.
- **Empty states** — "暂无对话历史 / No conversations yet."
- **Model release strips** — "DeepSeek-V3 现已发布 / DeepSeek-V3 is now available". Direct, factual.

### CTA verb conventions

The brand uses **specific, technical** verbs:

1. **Try DeepSeek** / **试用 DeepSeek** — top hero CTA.
2. **Get API key** / **获取 API 密钥** — developer conversion.
3. **Read the paper** / **阅读论文** — for the research-credibility audience.
4. **Download model** / **下载模型** — direct from Hugging Face / GitHub.
5. **View on GitHub** — for open-source signal.

Avoided: *Sign up*, *Discover*, *Unlock*, *Get started* (too generic), *Free trial* (DeepSeek's API has free tier but that's not the lead).

### Empty states

- Empty conversation: "暂无对话 / No conversation yet. Try [example prompt]."
- Empty API request log: "暂无 API 请求 / No API requests yet. [Read the quickstart →]"
- Empty model search: "未找到模型 / No models match those filters."

### Tone anchors

- **Quantify in parameters and benchmarks.** "236B params" and "MMLU 88.5" are stronger claims than "industry-leading."
- **Open-source first.** The brand's strongest claim is that models are released under permissive licenses (MIT) — every release strip mentions the license.
- **Bilingual without code-switching mid-sentence.** Sentences hold one language; sections may alternate, paragraphs may pair, but a single sentence stays in one tongue.
- **Cite papers.** Every model has an accompanying arXiv paper linked.
- **Avoid superlatives.** The brand's strongest self-claim is "leading open-source models" — no "the best".

## 12. Dark Mode & Theming

The marketing surface mostly **holds light** but flips to a deep-navy hero band for major model-release announcements. The in-product chat (`chat.deepseek.com`) ships a full **dark theme** that flips canvas to `#0a0a23` with `#e6e8ef` text — preserving the deep-navy register that already appears in hero bands, extended across the entire chat surface.

### In-product dark theme tokens (chat UI)

```yaml
colors-dark:
  bg: '#0a0a23'                    # deep navy — same as marketing's hero band
  bg-soft: '#12122e'                # slightly lifted dark
  surface: '#1a1a3a'                # card / panel
  surface-hover: '#22224a'
  text: '#e6e8ef'                   # cream-blue label
  text-muted: '#a8b0c4'             # muted on dark
  text-soft: '#7c8298'              # supporting copy on dark
  brand: '#4d6bfe'                  # whale blue holds across themes
  brand-soft: '#1a234a'             # tonal pill bg on dark
  cta-bg: '#4d6bfe'
  cta-text: '#ffffff'
  border: 'rgba(255, 255, 255, 0.12)'
  border-strong: 'rgba(255, 255, 255, 0.20)'
  border-soft: 'rgba(255, 255, 255, 0.06)'
```

The dark theme **preserves the whale-blue brand colour** — `#4d6bfe` reads as "electric" on both white and deep-navy backgrounds. Primary CTA stays whale-blue with white text across themes.

The marketing surface primarily holds **light** because Chinese enterprise buyers default to light-mode marketing reading, but the deep-navy band variant gives DeepSeek a "weight" register for major launches.

## 13. Lineage & Influences

DeepSeek's site embodies a particular strain of **Chinese-tech enterprise design**: stark white canvas, a single saturated brand blue, near-black sans-serif type, and almost no decorative chrome. The brand colour `#4d6bfe` — sometimes called "whale blue" after the DeepSeek mascot — does all the action work, with `#eaeefe` as its tonal-pill cousin. The typography stack pairs Inter (or a near-Inter variable) with PingFang SC / Hiragino Sans GB / Microsoft YaHei for CJK fallback, on a slightly more generous **1.6 line-height** than Western stacks usually run — a deliberate accommodation for Chinese characters which read denser at the same size.

The aesthetic lineage runs through **Anthropic's** research-lab restraint, **Mistral's** monochromatic European minimalism, and **Alibaba** / **Bytedance's** enterprise-SaaS chromatic discipline. Where OpenAI uses near-monochrome black-on-white and Mistral leans into orange, DeepSeek stakes out the saturated cool-blue end of the AI-lab spectrum, with the deep `#0a0a23` navy reserved for hero bands and footer accents to add weight without warming the palette.

The bilingual stack is the brand's most distinctive structural decision. By chaining PingFang SC into the primary font-family declaration (rather than treating CJK as a separate stylesheet), DeepSeek reads natively to both Latin and CJK readers without code-switching the design system. The 1.6 line-height is the typographic adjustment that makes the bilingual reading experience feel native rather than retrofitted.

The brand also rejects two adjacent registers. DeepSeek is *not* the Western-AI-startup register (no purple gradients, no character-mascot illustration, no chatty hero copy), and it is *not* the Chinese-consumer register (no animated mascot, no kawaii illustration, no full-bleed video hero). The market position — open-source frontier models from a Chinese research lab with global ambition — demands the enterprise-paper-meets-research register.

**Named influences**:
- **Anthropic** ([https://www.anthropic.com](https://www.anthropic.com)) — Research-lab restraint; long-form essays and stark single-product marketing pages.
- **Mistral** ([https://mistral.ai](https://mistral.ai)) — European-AI-lab discipline; single brand colour, near-monochrome support palette, generous whitespace.
- **Alibaba Cloud / ByteDance** ([https://www.alibabacloud.com](https://www.alibabacloud.com)) — Chinese enterprise-SaaS chromatic vocabulary; saturated mid-blues on stark white with bilingual type stacks.
- **Hugging Face** ([https://huggingface.co](https://huggingface.co)) — Open-source ML register; model cards and benchmark tables as marketing.
- **PingFang SC** — The Apple-designed CJK family chosen as the bilingual companion to Inter.
- **Inter** ([https://rsms.me/inter/](https://rsms.me/inter/)) — The Latin half of the bilingual stack.
- **arXiv preprints** ([https://arxiv.org](https://arxiv.org)) — Paper-cite culture; every model release links its paper.

## 14. Do's and Don'ts

### Do

- **Keep the action palette to a single blue `#4d6bfe`.** Secondary actions use the outlined pattern, never a different hue.
- **Use the 1.6 body line-height even on Latin-only pages.** It's the brand's typographic fingerprint and supports the bilingual mission.
- **Lean on the deep `#0a0a23` navy for hero bands** when announcing a major model release; it adds weight without warming the palette.
- **Set CJK long-form prose at 1.7 line-height.** Chinese characters need extra leading per em.
- **Set CJK headlines at weight 600, not 700.** PingFang SC's heavier weights compress strokes too much.
- **Chain PingFang SC, Hiragino Sans GB, Microsoft YaHei in every text role.** Never separate stylesheets — the chain handles per-character fallback.
- **Keep buttons at 8px radius.** Confident rectangles; not pill, not super-elliptic.
- **Use cards at 16px radius with `1px #e5e7eb` borders.** No drop shadows on marketing.
- **Make the announcement strip a permanent fixture** — soft `#eaeefe` bg, `#2a3eb1` text, single line about current model.
- **Cite the paper.** Every model release links to arXiv.
- **Honour `prefers-reduced-motion`** — disable hero illustration parallax.
- **Use `lang="zh-CN"` and `lang="en"` attributes** on bilingual content for screen-reader pronunciation.

### Don't

- **Don't introduce a secondary accent** (purple, teal, orange). DeepSeek's strategic message is "one lab, one colour, one mission". The cyan `#5eaaff` is illustration-only.
- **Don't drop the CJK font fallback.** Even on EN-only surfaces, the stack should chain to PingFang SC for visiting Chinese readers.
- **Don't apply shadows to cards.** The depth language is flat tone-and-border, not elevation.
- **Don't pill-radius buttons.** Kagi's pill register is rejected here — DeepSeek runs 8px rectangles.
- **Don't compress CJK with negative tracking.** Latin display tracks `-0.02em`; CJK tracks `normal` always.
- **Don't auto-translate marketing copy.** Bilingual content is hand-curated paragraph-by-paragraph; machine translation reads off-tone.
- **Don't drop body line-height to 1.5.** 1.6 is the bilingual-accommodation minimum.
- **Don't use Tailwind-default neutral grays.** DeepSeek's slate ramp has a slight blue undertone (`#6b7280` is cool, not warm).
- **Don't use Inter at weight 500 on display.** That's Cartesia's discipline; DeepSeek runs 700 — confident, not hairline.
- **Don't add gradient backgrounds.** Solid white, solid soft-blue, solid deep-navy.
- **Don't show a character mascot.** The whale is abstract / typographic only; never anthropomorphised.
- **Don't write CTAs in consumer voice** ("Get started free!"). The voice is technical and bilingual.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:           #ffffff
bg-deep:      #0a0a23
surface:      #f5f7fb
text:         #1a1a1a
text-strong:  #0a0a0a
text-muted:   #6b7280
brand:        #4d6bfe   # whale blue — the only action colour
brand-soft:   #eaeefe   # announcement strip + tonal pill
brand-deep:   #2a3eb1   # accent text, badge labels
border:       #e5e7eb
focus-ring:   #4d6bfe
```

### Example Component Prompts

1. *"Create a DeepSeek-style hero: stark white `#ffffff` canvas, headline 'DeepSeek-V3 is here' in Inter 700 / 64px / -0.02em tracking / `#0a0a0a`. Bilingual subhead in Inter 400 / 18px / 1.6 line-height / `#1a1a1a` with EN paragraph followed by 中文 paragraph (use `lang` attribute). Two-column layout on desktop with abstract whale/grid SVG illustration on the right at ~480px wide. Primary CTA 'Try DeepSeek' as a `#4d6bfe` rectangle at 8px radius / 12px 24px padding / Inter 600 / 14px / `#ffffff` text. Secondary CTA 'Read the paper' as outlined `1px #e5e7eb` at the same 8px radius."*

2. *"Design a DeepSeek-style announcement strip: `#eaeefe` soft-blue bg, full-width, 12px 24px padding. Single line in Inter 500 / 14px / `#2a3eb1`: 'DeepSeek-V3 现已发布 — open-source frontier model under MIT license'. Right-side: 'Read more →' link in `#2a3eb1`. Permanent fixture above the nav."*

3. *"Build a DeepSeek-style model spec card: `#f5f7fb` soft-blue bg, `1px #e5e7eb` border, 12px radius, 20px padding, no shadow. Model name 'DeepSeek-V3' in Inter 600 / 18px / `#1a1a1a`. Param count '236B params' in JetBrains Mono 500 / 14px / `#2a3eb1` below. Benchmark row: 'MMLU 88.5 / GSM8K 95.2 / HumanEval 88.4' in JetBrains Mono 500 / 13px with `tnum`. 'Try' link at the bottom in Inter 500 / 14px / `#4d6bfe`."*

4. *"Create a DeepSeek-style deep-navy hero: `#0a0a23` bg, 96px vertical padding. Headline 'Open-source. Frontier-grade.' in Inter 700 / 72px / -0.02em / `#e6e8ef`. Subhead in Inter 400 / 18px / 1.6 line-height / `#a8b0c4` capped at 720px. CTA inverts: `#ffffff` bg with `#0a0a23` text at 8px radius."*

5. *"Build a DeepSeek-style nav bar: 64px height, white bg, `1px #e5e7eb` bottom border (only on scroll). Wordmark left in Inter 700 / 18px / `#0a0a0a`. Center nav links in Inter 500 / 14px / `#1a1a1a`, hover deepens to `#4d6bfe`. Right cluster: language toggle pill ('EN' / '中文' at 12px / `#f5f7fb` bg / `#6b7280` text), then ghost 'Sign in', then primary `#4d6bfe` rectangle 'Try DeepSeek'."*

6. *"Design a DeepSeek-style 3-up feature grid: 3-column grid on desktop (1200px container), 24px gutter. Above the grid: section eyebrow 'CAPABILITIES' in Inter 600 / 12px uppercase / 0.06em / `#6b7280`, then heading in Inter 600 / 40px / -0.015em / `#0a0a0a`. Each cell: `#f5f7fb` card / 16px radius / 24px padding / `1px #e5e7eb` border. Card heading in Inter 600 / 20px. Description in Inter 400 / 16px / 1.6 line-height / `#6b7280`."*

### Iteration Guide

1. **Verify body line-height is 1.6, not 1.5.** This is the bilingual fingerprint.
2. **Confirm CJK font stack is chained, not separately styled.** Single font-family declaration with PingFang SC after Inter.
3. **Audit for Inter at weight 500 on display.** DeepSeek runs 700 — replace with 700 + `-0.02em` tracking.
4. **Replace any pill-radius CTAs with 8px rectangles.** Confident corners.
5. **Check the announcement strip exists and uses `#eaeefe` / `#2a3eb1`.** Permanent fixture.
6. **Replace any second saturated colour with neutral or brand-blue tonal.** No teal, no orange, no purple.
7. **Verify deep-navy `#0a0a23` band appears at hero or footer when promoting a model.** Not a default background.
8. **Strip drop shadows from cards.** Replace with `1px #e5e7eb` border + `#f5f7fb` bg lift.
