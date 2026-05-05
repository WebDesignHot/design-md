---
name: Perplexity
tagline: Cream paper canvas, custom pplxSans, and the unmistakable Tropic-cyan accent — a reference-library answer engine dressed in warm tones.
author: webdesignhot
source_url: https://www.perplexity.ai
spec: design.md/v1.5
quality: curated
featured: true
categories: [ai, saas]
tags: [light, editorial, sans, spacious, warm]
preview_swatch: ['#fbf9f5', '#20808d', '#272520']
related: [anthropic, notion, kagi]
description: 'Perplexity dresses an answer engine as a reference library. The canvas is a warm `#fbf9f5` paper-cream rather than tech white, type is set in custom **pplxSans** (a humanist sans with relaxed terminals), and the brand''s signature **Tropic-cyan** `#20808d` carries citations and links — a teal that reads as "ink on paper" rather than "tech accent." Cards round at 8–12px, primary actions on the marketing surface use a warm-charcoal `#272520` bg with `#fdfbfa` text, and the type tone leans editorial. Where ChatGPT defaults to white-and-black neutrality, Perplexity defaults to *paper*: pills at 9999px, warm-tinted hairlines, and a single saturated teal that earns its keep as both citation underline and brand mark.'

colors:
  # Primary
  bg: '#fbf9f5'                          # warm paper-cream — the defining canvas
  bg-soft: '#f5f1ea'                     # secondary surface, grouped sections
  bg-deep: '#efeae0'                     # tertiary panel for nested groups
  surface: '#ffffff'                     # answer cards lift to white on cream
  surface-warm: 'rgba(39, 26, 0, 0.07)'  # observed soft warm wash on chips/tags
  text: '#272520'                        # warm-charcoal body text (rgb 39,37,32)
  text-strong: '#1a1813'                 # rare deeper ink for hero titles
  text-medium: '#3f3a31'                 # secondary heading
  text-muted: '#5d574c'                  # warm secondary copy
  text-soft: '#7a7367'                   # captions, eyebrows
  text-faint: '#9a9388'                  # disabled, footer microcopy
  # Brand
  brand: '#20808d'                       # Tropic-cyan / Perplexity teal — citations, links, mark
  brand-strong: '#176874'                # pressed / active teal
  brand-deep: '#0f4f5a'                  # rare deepest teal for emphasis
  brand-soft: '#d6ecef'                  # info surface tint
  brand-wash: 'rgba(32, 128, 141, 0.08)' # hover-tinted background
  on-brand: '#ffffff'
  # CTA (marketing)
  cta-bg: '#272520'                      # warm near-black primary button
  cta-text: '#fdfbfa'                    # cream-tinted on-cta text
  cta-hover-bg: '#3a342b'                # softer hover
  cta-active-bg: '#1a1813'               # pressed
  # Interactive
  link: '#20808d'                        # brand teal links
  link-hover: '#176874'                  # pressed teal
  selected-bg: 'rgba(32, 128, 141, 0.10)' # nav/selected wash
  disabled: '#b8b1a4'
  # Borders
  border: 'rgba(39, 26, 0, 0.12)'        # warm-tinted hairline
  border-strong: 'rgba(39, 26, 0, 0.20)' # emphasized rule
  border-soft: 'rgba(39, 26, 0, 0.07)'   # quietest separation
  border-brand: 'rgba(32, 128, 141, 0.30)' # brand-tinted divider
  # Semantic
  success-bg: '#dceee0'
  success-text: '#2f5d3f'
  warning-bg: '#f5e8c5'
  warning-text: '#7a5e1f'
  danger-bg: '#f4dada'
  danger-text: '#8a3a3a'
  info-bg: '#d6ecef'                     # brand-soft doubles as info
  info-text: '#0f4f5a'

typography:
  display:
    family: 'pplxSans, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['ss01', 'liga', 'kern']
  body:
    family: 'pplxSans, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500]
    opentype-features: ['liga', 'kern', 'onum']
  serif:
    family: '"FK Display", "Tiempos Headline", Georgia, "Times New Roman", serif'
    weights: [400, 500]
    note: 'sparing use only — Discover editorial, marketing pull-quotes'
  mono:
    family: '"pplxMono", ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-hero:    { size: 72, weight: 500, lineHeight: 1.05, tracking: '-0.02em', family: display, opentype: 'ss01' }
    display:         { size: 56, weight: 500, lineHeight: 1.1,  tracking: '-0.02em', family: display }
    h1:              { size: 48, weight: 500, lineHeight: 1.1,  tracking: '-0.02em', family: display }
    h2:              { size: 36, weight: 500, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h3:              { size: 24, weight: 500, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 20, weight: 500, lineHeight: 1.3,  family: display }
    h5:              { size: 18, weight: 500, lineHeight: 1.4,  family: display }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.06em', family: display, transform: uppercase }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.5,  family: body, opentype: 'onum' }
    body-small:      { size: 14, weight: 400, lineHeight: 1.5,  family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,  family: body }
    caption-tabular: { size: 13, weight: 500, lineHeight: 1.4,  family: mono, opentype: 'tnum' }
    label:           { size: 12, weight: 500, lineHeight: 1.3,  family: display }
    citation:        { size: 12, weight: 500, lineHeight: 1.3,  family: display, color: brand }
    code:            { size: 14, weight: 400, lineHeight: 1.55, family: mono, opentype: 'tnum zero' }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.4,  family: mono }

radius:
  micro: 2
  sm: 6
  md: 8
  lg: 12
  xl: 16
  card: 12
  button: 9999                             # primary CTAs land as pills
  pill: 9999
  chip: 8

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 80, 96, 128]

layout:
  page-width: 1200
  prose-width: 680
  site-gutter: 'clamp(24px, 5vw, 64px)'
  header-height: 64
  grid-columns: 12
  section-rhythm: '64-128px'

components:
  button-primary:
    background: '#272520'
    text: '#fdfbfa'
    padding: '14px 24px'
    radius: 9999
    border: 'none'
    font: 'pplxSans 500 / 15px'
    hover-bg: '#3a342b'
    active-bg: '#1a1813'
    use: 'Marketing primary — Sign up / Try Pro / Start with Comet. Single warm-charcoal pill per hero.'
  button-secondary:
    background: 'rgba(39, 26, 0, 0.07)'
    text: '#272520'
    padding: '12px 18px'
    radius: 9999
    border: 'none'
    font: 'pplxSans 500 / 14px'
    hover-bg: 'rgba(39, 26, 0, 0.12)'
    use: 'Topic chips, capability tags, content-type filters in the explore rail.'
  button-ghost:
    background: 'transparent'
    text: '#272520'
    padding: '12px 16px'
    radius: 9999
    border: '1px solid rgba(39, 26, 0, 0.12)'
    font: 'pplxSans 500 / 14px'
    hover-bg: 'rgba(39, 26, 0, 0.05)'
    use: 'Quiet third action — secondary nav, footer CTAs.'
  button-brand:
    background: '#20808d'
    text: '#ffffff'
    padding: '14px 24px'
    radius: 9999
    font: 'pplxSans 500 / 15px'
    hover-bg: '#176874'
    use: 'Rare brand-coloured CTA — reserved for citation actions and Pro upsell.'
  card:
    background: '#ffffff'
    border: '1px solid rgba(39, 26, 0, 0.12)'
    radius: 12
    padding: '24px'
    use: 'Answer cards, source citations, feature tiles — white panels lifting off cream by value.'
  card-warm:
    background: 'rgba(39, 26, 0, 0.04)'
    border: 'none'
    radius: 12
    padding: '24px'
    use: 'Grouped Discover threads — warm wash signalling continuity.'
  input:
    background: '#ffffff'
    border: '1px solid rgba(39, 26, 0, 0.12)'
    radius: 9999
    padding: '14px 20px'
    font: 'pplxSans 400 / 16px'
    placeholder-color: '#7a7367'
    focus-ring: '0 0 0 2px rgba(32, 128, 141, 0.40)'
    use: 'Search composer — tall pill with the brand mark inset, signature input shape.'
  badge-citation:
    background: 'rgba(32, 128, 141, 0.10)'
    text: '#20808d'
    padding: '2px 6px'
    radius: 4
    font: 'pplxSans 500 / 12px'
    use: 'Numbered source citations inside answers — [1] [2] [3] in Tropic-cyan.'
  chip-topic:
    background: 'rgba(39, 26, 0, 0.07)'
    text: '#272520'
    padding: '8px 14px'
    radius: 9999
    font: 'pplxSans 500 / 13px'
    hover-bg: 'rgba(39, 26, 0, 0.12)'
    use: 'Discover topic chips — warm-tinted pills.'
  nav-link:
    background: 'transparent'
    text: '#272520'
    padding: '8px 12px'
    font: 'pplxSans 500 / 14px'
    hover-text: '#20808d'
    use: 'Header nav — slate-dark with Tropic-cyan hover.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-soft: 'cubic-bezier(0.32, 0.72, 0, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  duration-page: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce — translate animations disabled, opacity-only fades, durations halved'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  none: 'none'
  ambient: 'rgba(39, 26, 0, 0.04) 0 1px 3px'
  standard: 'rgba(39, 26, 0, 0.06) 0 4px 12px'
  elevated: 'rgba(39, 26, 0, 0.08) 0 12px 32px -8px, rgba(39, 26, 0, 0.04) 0 4px 8px'
  warm: 'rgba(32, 128, 141, 0.16) 0 16px 40px -16px'
  ring: '0 0 0 2px rgba(32, 128, 141, 0.40)'

accessibility:
  contrast-text-on-bg: 13.4               # #272520 on #fbf9f5 — AAA
  contrast-text-on-brand: 4.6             # #ffffff on #20808d — AA at body sizes
  contrast-text-soft-on-bg: 6.9           # #5d574c on #fbf9f5 — AAA at body
  contrast-cta-text-on-cta-bg: 12.8       # #fdfbfa on #272520 — AAA
  focus-ring: '2px solid rgba(32, 128, 141, 0.40) with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; tab order matches visual flow; search composer focus-visible always'
  prose-line-length: 'capped at 680px (~70 characters) for editorial readability'
  citation-affordance: 'numbered citation chips link to source, are keyboard-focusable, and announce source domain to screen readers'

lineage:
  summary: |
    Perplexity's design DNA is "library, not laboratory." The cream
    canvas (`#fbf9f5`) and warm-charcoal type (`#272520`) deliberately
    quote print typography rather than tech UI; the **Tropic-cyan**
    `#20808d` for citations and the brand mark is a teal closer to
    fountain-pen ink than to a standard tech accent. The custom
    **pplxSans** sits in a humanist register adjacent to GT America
    and Söhne — relaxed apertures, gentle contrast — with **pplxMono**
    handling code surfaces. The choice to set body text on cream
    instead of white is the most decisive call: it puts Perplexity
    in the editorial lineage that Notion (off-white with Lyon serif),
    Anthropic (cream with Anthropic Serif), and The Browser Company's
    Arc share, distinguishing it from the cooler whites of OpenAI
    and the chromatic boldness of Mistral. Pills at 9999px and
    warm-tinted hairlines (`rgba(39, 26, 0, 0.12)`) finish the
    reference-library posture.
  influences:
    - name: Notion
      role: Off-white-paper canvas + custom sans editorial register
      url: https://www.notion.com
    - name: Anthropic
      role: Cream backdrop and warm-charcoal type — sister of the calm-AI register
      url: https://www.anthropic.com
    - name: The Browser Company / Arc
      role: Warm-tinted neutrals as a defection from cool-grey tech UI
      url: https://arc.net
    - name: Kagi
      role: Library-curatorial search register; minimal chrome
      url: https://kagi.com
    - name: The New Yorker
      role: Editorial calm, narrow text columns, citation-as-typography
    - name: GT America / Söhne
      role: Humanist-sans DNA reference for pplxSans proportions

dark-mode: present                        # product UI ships a dark variant — see colors-dark below

colors-dark:
  bg: '#1a1816'                           # warm-deep ground
  bg-soft: '#252220'
  bg-deep: '#2f2c28'
  surface: '#252220'                      # cards lift via tone, not shadow
  text: '#f5f1ea'
  text-muted: '#b8b1a4'
  text-soft: '#7a7367'
  brand: '#3aa5b3'                        # brighter teal for dark contrast
  brand-soft: 'rgba(58, 165, 179, 0.12)'
  cta-bg: '#f5f1ea'
  cta-text: '#1a1816'
  border: 'rgba(245, 241, 234, 0.10)'
  border-strong: 'rgba(245, 241, 234, 0.20)'
---

## 1. Visual Theme & Atmosphere

Perplexity stages an answer engine as a quiet reading room. Open the homepage and you land on `#fbf9f5` — a warm paper-cream that distinguishes the brand instantly from ChatGPT's clinical white and Claude.ai's slightly cooler ivory. The first impression is *editorial* rather than *technological*: the brand mark glows in Tropic-cyan, the search composer takes the shape of a tall pill, and the type sits in a custom humanist sans whose relaxed apertures and modest x-height let the page read as set-in-print rather than rendered-in-Figma.

The defining typographic move is **pplxSans** at weight 500. There is no weight 700 anywhere on the marketing site. Headlines reach 56–72px with mild negative tracking, body copy holds at 16px on a 24px line, and weight 500 sits between authority and friendliness — closer to a literary review's running heads than to a SaaS landing page's bold-italic shouting. The font stack is internationally aware (Hiragino Sans, Yu Gothic, PingFang SC) which matters for a search product whose users span every script.

The accent — and the only saturated colour anywhere on the page — is **Tropic-cyan `#20808d`**. Perplexity wears it as the brand mark, as the citation underline beneath every numbered source, and as the link colour inside answer cards. The hue sits closer to fountain-pen ink than to a tech accent: it carries the temperature of an old library map's ocean. Where every other AI lab reaches for purple gradient, electric blue, or chrome-on-black, Perplexity reaches for one teal and trusts it to do the chromatic work.

The marketing primary CTA is a warm-charcoal pill: `#272520` background, `#fdfbfa` cream-tinted text, 9999px radius, `pplxSans 500` label. That black-on-cream pairing is closer to a museum bookstore tag than to a tech button — and it's the second decisive choice (after the cream canvas) that locks Perplexity into the reference-library register.

Atmospheric vocabulary that captures the feeling: *paper-cream, library-quiet, fountain-pen-teal, broadsheet-reading-room, museum-tag-CTA, humanist-sans, warm-charcoal-on-cream, citation-as-typography, Discover-magazine-rail, ink-not-pixel.* Every surface lands as if a librarian arranged it.

**Key Characteristics**
- Warm cream `#fbf9f5` canvas — never substituted for `#ffffff`
- Custom **pplxSans** at weight 500 across the site — no 700 anywhere
- Single saturated accent: **Tropic-cyan `#20808d`** — citations, links, mark
- Warm-charcoal CTA pill (`#272520` on cream, 9999px) — the brand's primary button
- Pills dominate: 9999px on every interactive primary
- White answer cards lift off cream by **value contrast alone** — no drop shadow
- Warm-tinted hairlines (`rgba(39, 26, 0, 0.12)`) carry the page temperature
- 12px card radius, 8px chip radius — paper-tag radii ladder
- Search composer is a tall pill — identity baked into the input
- Type tone editorial rather than tech-startup — closer to a literary review than to a SaaS landing

## 2. Color Palette & Roles

### Primary

- **bg** `#fbf9f5` — warm paper-cream; the defining canvas. Never substituted for `#ffffff` on body surfaces.
- **bg-soft** `#f5f1ea` — secondary surface for grouped sections and quiet panels.
- **surface** `#ffffff` — answer cards and content tiles lift to true white on cream.
- **text** `#272520` — warm-charcoal (rgb 39, 37, 32). The brand never uses pure `#000`; the cream canvas demands a warmer ink.
- **cta-bg** `#272520` — primary marketing button; warm-charcoal pill, the brand's button move.
- **cta-text** `#fdfbfa` — cream-tinted button label, never pure white.

### Brand & Accent

- **brand** `#20808d` — Tropic-cyan teal. The single saturated colour on the page.
- **brand-strong** `#176874` — pressed / active teal.
- **brand-deep** `#0f4f5a` — rare deep teal for hero emphasis.
- **brand-soft** `#d6ecef` — info-surface tint, soft pill backgrounds.
- **brand-wash** `rgba(32, 128, 141, 0.08)` — hover-tinted background for citation chips.

### Interactive

- **link** `#20808d` — Tropic-cyan; underlined inside answer body.
- **link-hover** `#176874` — pressed state.
- **selected-bg** `rgba(32, 128, 141, 0.10)` — nav/selected wash.
- **disabled** `#b8b1a4` — slate-tinted muted.

### Neutral Scale

- **text-strong** `#1a1813` — rare deeper ink for hero titles.
- **text** `#272520` — primary body text.
- **text-medium** `#3f3a31` — secondary heading colour.
- **text-muted** `#5d574c` — secondary copy, metadata.
- **text-soft** `#7a7367` — captions, eyebrows, helper text.
- **text-faint** `#9a9388` — disabled text, footer microcopy.

### Surface & Borders

- **surface-0 (page)** — `#fbf9f5` cream.
- **surface-1 (panel)** — `#f5f1ea` ivory secondary.
- **surface-2 (card)** — `#ffffff` white card lift.
- **border** `rgba(39, 26, 0, 0.12)` — default warm-tinted hairline.
- **border-strong** `rgba(39, 26, 0, 0.20)` — emphasized rule, hover deepening.
- **border-soft** `rgba(39, 26, 0, 0.07)` — quietest separation.
- **border-brand** `rgba(32, 128, 141, 0.30)` — brand-tinted divider on citation surfaces.

### Shadow Colors

Perplexity's shadows are **warm-tinted and minimal**. White answer cards on cream lift via value alone — no shadow needed. Where shadows do appear (modal overlays, the floating sources panel, the search composer dropdown), they use low-opacity warm slate (`rgba(39, 26, 0, 0.04)` to `0.08`), never neutral grey, never blue. The brand never lets its shadows go cool — that would crack the paper temperature.

### Semantic

- **success** — bg `#dceee0`, text `#2f5d3f`, border `rgba(74, 122, 91, 0.30)`.
- **warning** — bg `#f5e8c5`, text `#7a5e1f`, border `rgba(180, 145, 60, 0.30)`.
- **danger** — bg `#f4dada`, text `#8a3a3a`, border `rgba(180, 90, 90, 0.30)`.
- **info** — bg `#d6ecef` (brand-soft), text `#0f4f5a`, border `rgba(32, 128, 141, 0.30)`.

The unusual choice: **info** uses the Tropic-cyan brand-soft directly. Citations, info banners, and informational toasts share the same surface so the reader's eye learns one colour-to-meaning pairing.

## 3. Typography Rules

### Font Family

- **Display & UI**: `pplxSans, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` — custom humanist sans, deployed at weights 400/500. The single typeface for headings, body, nav, buttons.
- **Mono**: `pplxMono, ui-monospace, "SF Mono", Menlo, Consolas, monospace` — for code samples, API documentation, citation numbering.
- **Serif** (sparing): `"FK Display", "Tiempos Headline", Georgia, serif` — used only on Discover editorial features and rare marketing pull-quotes.
- **OpenType features**: `liga` and `kern` always on; `ss01` for stylistic alternate at display sizes; `onum` (old-style figures) in body for warm-period proportions; `tnum` and `zero` (slashed zero) in mono for tabular alignment.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | pplxSans | 72px | 500 | 1.05 | -0.02em | ss01 liga | Homepage hero ceiling |
| Display | pplxSans | 56px | 500 | 1.10 | -0.02em | ss01 | Section intro at scale |
| H1 | pplxSans | 48px | 500 | 1.10 | -0.02em | liga | Page title |
| H2 | pplxSans | 36px | 500 | 1.15 | -0.015em | liga | Major section |
| H3 | pplxSans | 24px | 500 | 1.25 | -0.005em | — | Sub-section |
| H4 | pplxSans | 20px | 500 | 1.30 | normal | — | Card heading |
| H5 | pplxSans | 18px | 500 | 1.40 | normal | — | Inline emphasis |
| Eyebrow | pplxSans | 12px | 500 | 1.40 | 0.06em | uppercase | Section pre-label |
| Body Large | pplxSans | 18px | 400 | 1.55 | normal | onum | Lede paragraph |
| Body | pplxSans | 16px | 400 | 1.50 | normal | onum | Default reading body |
| Body Small | pplxSans | 14px | 400 | 1.50 | normal | — | Compact copy |
| Caption | pplxSans | 13px | 400 | 1.40 | normal | — | Image captions |
| Caption Tabular | pplxMono | 13px | 500 | 1.40 | normal | tnum | Stats, data labels |
| Label | pplxSans | 12px | 500 | 1.30 | normal | — | UI labels |
| Citation Chip | pplxSans | 12px | 500 | 1.30 | normal | — | Numbered `[1] [2] [3]` references |
| Code | pplxMono | 14px | 400 | 1.55 | normal | tnum zero | Inline + block |
| Code Micro | pplxMono | 12px | 400 | 1.40 | normal | — | Footnote refs |

### Principles

- **One weight does the work.** pplxSans 500 is the entire headline ladder; weight 400 is the entire body. The brand never reaches for 700 — heaviness would pull it into SaaS-shouting register.
- **Custom type as identity.** pplxSans is proprietary. Falling back to system sans on slow connections still preserves the cream-and-cyan brand because *type weight, not face*, is the typographic signature.
- **Negative tracking scales with size.** -0.02em at 48–72px, -0.015em at 36px, -0.005em at 24px, normal below. The compression mirrors broadsheet masthead typography.
- **Body width capped at 680px** even on a 1200px page — broadsheet reading column for answer text.
- **Old-style figures in body.** `onum` enabled so numbers sit visually with letters in answer prose; switches to lining figures (default) only in stat-heavy callouts and tabular contexts.
- **Tabular figures in mono.** `tnum` and `zero` discipline in pplxMono so citation indices, code line numbers, and API documentation align cleanly.
- **Citations as typography, not chrome.** A citation `[1]` is *typeset* — Tropic-cyan, weight 500, optical baseline aligned with body figures — rather than rendered as a button or icon.
- **No italic in display.** Italics live only in body emphasis and quoted titles. Display type is upright; the broadsheet voice is calm, not rhythmic.

## 4. Component Stylings

### Buttons

**Primary (Warm-Charcoal Pill)**
- Background: `#272520` warm near-black.
- Text: `#fdfbfa` cream-tinted, pplxSans 500 / 15px.
- Padding: `14px 24px`. Radius: `9999px` (full pill). Border: none.
- Hover: bg → `#3a342b`; transition `200ms ease-standard`.
- Active: bg → `#1a1813`.
- Use: Marketing primary — *Sign up, Try Pro, Start with Comet.* Reserve to one per hero.

**Secondary (Warm-Tinted Pill)**
- Background: `rgba(39, 26, 0, 0.07)` warm wash.
- Text: `#272520`. Padding: `12px 18px`. Radius: `9999px`. Border: none.
- Hover: bg → `rgba(39, 26, 0, 0.12)`.
- Use: Topic chips, capability tags, content-type filters in the Discover rail.

**Ghost (Hairline Pill)**
- Background: transparent.
- Text: `#272520`. Border: `1px solid rgba(39, 26, 0, 0.12)`. Radius: `9999px`.
- Hover: bg → `rgba(39, 26, 0, 0.05)`.
- Use: Quiet third action — secondary nav, footer CTAs, card-internal "Read more".

**Brand (Tropic-cyan Pill)**
- Background: `#20808d`. Text: `#ffffff`. Radius: `9999px`. Padding: `14px 24px`.
- Hover: bg → `#176874`.
- Use: Rare brand-coloured CTA — citation actions, Pro upsell, "View sources". Never the default primary.

### Cards

**Answer Card**
- Background: `#ffffff`. Border: `1px solid rgba(39, 26, 0, 0.12)`. Radius: `12px`. Padding: `24px`.
- Shadow: none — value contrast (white on cream) provides separation.
- Hover: border → `rgba(39, 26, 0, 0.20)`; transition `200ms`.
- Use: Search-result answers, source citations, Discover thread cards.

**Warm-Wash Card**
- Background: `rgba(39, 26, 0, 0.04)` warm tint. Border: none. Radius: `12px`. Padding: `24px`.
- Use: Grouped Discover threads — warm wash signals continuity within a section.

**Source Citation Tile**
- Background: `#ffffff`. Border-left: `3px solid #20808d` (brand teal rule). Border: `1px solid rgba(39, 26, 0, 0.12)`. Radius: `8px`.
- Padding: `12px 16px`. Use: Numbered source list inside an answer.

### Badges, Tags, Pills

**Citation Badge** — bg `rgba(32, 128, 141, 0.10)`, text `#20808d`, radius `4px`, padding `2px 6px`, font `pplxSans 500 / 12px`. The numbered `[1] [2]` references next to assertions in an answer.

**Topic Chip** — bg `rgba(39, 26, 0, 0.07)`, text `#272520`, radius `9999px`, padding `8px 14px`. Discover topic filter pills, capability tags.

**Status Pill** — semantic palette (success / warning / danger / info), radius `9999px`, padding `4px 10px`. Account status, source-quality badges.

### Inputs / Forms

**Search Composer (Signature)**
- Background: `#ffffff`. Border: `1px solid rgba(39, 26, 0, 0.12)`. Radius: `9999px` (full pill). Padding: `14px 20px`.
- Font: pplxSans 400 / 16px. Placeholder: `#7a7367`.
- Brand-mark inset: Tropic-cyan glyph anchored 16px from left.
- Focus: `0 0 0 2px rgba(32, 128, 141, 0.40)` ring; border → `rgba(32, 128, 141, 0.40)`.
- Use: The search composer is the brand's identity input. The pill shape is non-negotiable.

**Form Field**
- Background: `#ffffff`. Border: `1px solid rgba(39, 26, 0, 0.12)`. Radius: `8px`. Padding: `12px 16px`.
- Font: pplxSans 400 / 16px. Placeholder: `#7a7367`.
- Focus: 2px Tropic-cyan ring with 2px offset.
- Error: border → `#8a3a3a`, ring → `rgba(180, 90, 90, 0.30)`.
- Helper: caption 13px text-soft below.

### Navigation

- Header height `64px`. Background `#fbf9f5` cream (transparent on hero scrolling).
- Logo: Perplexity wordmark in warm-charcoal `#272520`, brand-mark glyph in Tropic-cyan.
- Nav links: pplxSans 500 / 14px, colour `#272520`, padding `8px 12px`. Hover → `#20808d` Tropic-cyan; active gets `1px` underline in brand teal.
- Right-side CTA pair: ghost-pill "Log in" + warm-charcoal-pill "Sign up".
- Mobile: full-screen sheet, nav links stack at 18px / 500.

### Optional Components

**Pull Quote** — pplxSans 500 / 24px / italic, text-medium, with a 3px Tropic-cyan vertical rule. Reserved for Discover editorial features.

**Footnote** — pplxSans 12px / 400, text-soft; sits on a thin `border-soft` rule. Citation numbers in Tropic-cyan.

**Code Block** — pplxMono 14px, bg `#f5f1ea`, radius `8px`, padding `16px 20px`, border `rgba(39, 26, 0, 0.12)`. Inline code: same font, bg `rgba(39, 26, 0, 0.07)`, padding `2px 6px`, radius `4px`.

**Tooltip** — bg `#272520`, text `#fdfbfa`, radius `8px`, padding `8px 12px`, font `pplxSans 500 / 12px`. Pill-end caps with the warm-charcoal palette.

**Modal** — bg `#ffffff`, radius `16px`, shadow `rgba(39, 26, 0, 0.08) 0 12px 32px -8px`, max-width `560px`. Cream backdrop overlay at 70% opacity.

**Toast** — bg `#272520`, text `#fdfbfa`, radius `9999px`, padding `12px 20px`. Pill-shaped to match the CTA family.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96, 128 — modular, generous at the upper end.
- **Density observation**: Perplexity is *medium-density* — denser than Anthropic's magazine layout but lighter than ChatGPT's tightly-packed UI. Headlines float in 64–96px of margin; answer cards sit on 24px interior padding with 16px line gaps between paragraphs.

### Grid & Container

- **Page max width**: `1200px` — moderate, library-table proportions rather than full broadsheet.
- **Site gutter**: `clamp(24px, 5vw, 64px)` — comfortable on desktop, accommodating on mobile.
- **Grid**: 12 columns with 24px gutters. Hero blocks span full width; answer rails span 8 columns; source-list sidebars span 4.
- **Hero treatment**: full-bleed cream, 56–72px headline anchored left of centre, search composer 720px wide.
- **Discover rail**: 2-up cards on tablet, 3-up on desktop; warm-wash card every fourth tile for sectional rhythm.

### Whitespace Philosophy

The whitespace is *paper margin* — Perplexity treats empty cream as a positive design element, not an absence. Section gutters run **64–128px** between major editorial blocks; minor blocks sit on 32–48px gaps; intra-section spacing uses 16–24px. Generous but not extravagant; the cream itself does sectional work without needing dividers.

### Section Cadence

- Hero (cream) → Search composer (centred pill, 720px) → Discover rail (white-card grid on cream) → Editorial feature (cream, 680px column) → Pricing block (warm-wash card) → Footer (ivory secondary).
- Cream-on-cream transitions separated by `1px` warm-tinted hairlines or by spacing alone — Perplexity rarely uses heavy dividers.
- The Tropic-cyan brand mark appears once or twice per page as a chromatic punctuation mark, never as a fill.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Decorative dividers, slim chip corners |
| Small (sm) | 6px | Inline tags, code-inline pills |
| Comfortable (md) | 8px | Code blocks, source-citation tiles, form fields, chips |
| Relaxed (lg) | 12px | **Cards** — answer cards, Discover tiles, feature blocks |
| Featured (xl) | 16px | Modals, large editorial callouts |
| Pill | 9999px | **Buttons, search composer, topic chips** — interactive primary |

The signature radii are **9999px** on every interactive primary (buttons, composer, chips) and **12px** on every content surface (cards, tiles). The pills-vs-cards split is the brand's geometric logic: *interactive things round infinitely; reading things round at 12px*. There are no zero-radius surfaces except editorial section dividers (1px hairlines).

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, hero, body sections |
| 1 | Value-contrast (white card on cream) | Answer cards, Discover tiles, feature blocks |
| 2 | `rgba(39, 26, 0, 0.04) 0 1px 3px` | Sticky nav, dropdown menus |
| 3 | `rgba(39, 26, 0, 0.06) 0 4px 12px` | Floating source panel, hover-lifted cards |
| 4 | `rgba(39, 26, 0, 0.08) 0 12px 32px -8px` | Overlay menus, search-composer dropdown |
| 5 | `rgba(39, 26, 0, 0.08) 0 24px 64px -16px` | Modals, dialogs |

### Shadow Philosophy

Perplexity's depth is **warm-tinted, minimal, and value-led**. White answer cards on cream provide all the elevation needed via value contrast — no explicit shadow. When shadows appear (modals, the floating sources panel, dropdowns), they're tinted with low-opacity warm slate (`rgba(39, 26, 0, ...)`), never neutral grey, never blue, never with a tinted edge. The brand never lets its shadows go cool — paper doesn't drop-shadow against paper. Multi-layer shadows are reserved for level 4–5 overlays where the visual stack must be unambiguous.

## 8. Interaction & Motion

### Easing Curves

- `ease-standard`: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style; default for hover, focus, colour transitions.
- `ease-emphasized`: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; modal enter, hero reveal.
- `ease-soft`: `cubic-bezier(0.32, 0.72, 0, 1)` — slow-out, fast-settle; editorial reveals on Discover.

### Duration Buckets

- **Fast (120ms)** — colour transitions, focus rings, link hovers.
- **Standard (200ms)** — button hover, card hover, dropdown reveal.
- **Slow (320ms)** — modal enter/exit, page-section fade-in.
- **Page (480ms)** — route transitions, hero reveal sequences.

### Per-Component Micro-States

- **Button hover (warm-charcoal pill)**: bg colour shift only — `#272520` → `#3a342b`. No lift, no scale. `transition: background-color 200ms ease-standard`.
- **Button hover (Tropic-cyan brand)**: bg `#20808d` → `#176874` over 200ms.
- **Card hover**: border deepens from `rgba(39, 26, 0, 0.12)` to `rgba(39, 26, 0, 0.20)`; no shadow change.
- **Link hover**: colour `#20808d` → `#176874` over 120ms; underline thickens from 1px to 2px.
- **Citation chip hover**: bg `rgba(32, 128, 141, 0.10)` → `rgba(32, 128, 141, 0.18)` over 120ms.
- **Search composer focus**: 2px Tropic-cyan ring fades in over 120ms; brand-mark glyph subtly brightens.
- **Topic chip hover**: bg `rgba(39, 26, 0, 0.07)` → `rgba(39, 26, 0, 0.12)`.
- **Nav link hover**: colour shift to Tropic-cyan, no underline animation.

### Page Transitions

Editorial reveal pattern: hero text fades in over 480ms with a 16px translate-up; below-fold sections use `IntersectionObserver` triggered at 80% viewport, 320ms duration, opacity-only (no translate). Search-results page enters via a 280ms fade-up of the answer card stack, citation chips animate in with a 60ms stagger.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` — all transitions become opacity-only, durations halved. Translate animations disabled entirely; scroll-linked reveals snap to final state. Citation chip stagger collapses to a single fade. The brand respects motion preferences as an a11y first-class concern.

## 9. Accessibility & A11y

### Contrast Pairs

- **`#272520` text on `#fbf9f5` bg**: 13.4:1 — AAA at all sizes.
- **`#5d574c` text-muted on `#fbf9f5` bg**: 6.9:1 — AAA at body sizes.
- **`#7a7367` text-soft on `#fbf9f5` bg**: 4.4:1 — AA at large sizes only (≥18px or ≥14px bold).
- **`#fdfbfa` text on `#272520` CTA**: 12.8:1 — AAA.
- **`#ffffff` text on `#20808d` brand pill**: 4.6:1 — AA at body sizes; safe for buttons.
- **`#20808d` text on `rgba(32, 128, 141, 0.10)` citation chip**: 5.4:1 effective — AA.
- **`#20808d` link on `#fbf9f5` bg**: 4.7:1 — AA at body sizes; underline reinforces.

### Focus Indicators

- Default focus ring: `0 0 0 2px rgba(32, 128, 141, 0.40)` with 2px offset on cream pages.
- Search composer: ring fades in via 120ms ease, brand mark brightens.
- On dark surfaces (footer, modal): `0 0 0 2px #fbf9f5`.
- All interactive surfaces have visible focus states — no `outline: none` without a replacement.

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with skip-link to main content.
- **Search composer**: `role="search"` with `<input type="search" aria-label="Ask anything">`; brand mark has `aria-hidden="true"`.
- **Disclosure**: `<button aria-expanded aria-controls>` for collapsible source lists.
- **Dialog**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Citation links**: `<a href="..." aria-label="Source 1: example.com">[1]</a>` so screen readers announce the source domain alongside the index.
- **Live regions**: `aria-live="polite"` for streaming answer responses; `aria-busy="true"` while generating.

### Keyboard Navigation

- Tab order matches visual flow: skip-link → nav → search composer → main content → footer.
- All buttons, links, inputs, citation chips reachable via Tab.
- Modals trap focus inside until dismissed.
- `Esc` closes modals, dropdowns, and the source-citation panel.
- Arrow keys navigate within Discover topic chip groups.
- Enter on a citation chip opens the source in a new tab; Space toggles inline preview.

### Screen Reader Hints

- Decorative brand-mark glyphs have `aria-hidden="true"`.
- Icon-only buttons (share, copy, source-detail) have `aria-label`.
- Streaming answer regions use `aria-live="polite"` to read incrementally without interrupting.
- Citation chips announce as "Source one, link, opens example.com" — index, role, target.

### Reduced Motion

Honoured via the global media query. All translate/scale animations become opacity-only; durations halve. Citation stagger collapses. The brand never requires motion to convey information — motion is decoration, not signal.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single column, full-bleed sections, search composer 100% width |
| Tablet | 640–1024px | 2-column rails, narrower gutters |
| Desktop | 1024–1280px | Full 12-col grid, 680px prose column |
| Wide | 1280–1440px | Site max width hits at 1200px |
| Ultra | > 1440px | Page locks to 1200, gutters expand symmetrically |

### Touch Targets

- Minimum tap target: 44×44px (WCAG AAA).
- Buttons: 48px minimum height on mobile (14px vertical padding × 2 + line-height).
- Citation chips on mobile: 32×32px hit area (extended via `padding` even when visually compact).
- Search composer on mobile: 56px height for thumb-friendly typing.

### Collapsing Strategy

- **Header**: full nav at ≥1024px; hamburger sheet below.
- **Hero**: 72px headline → 56px → 40px across desktop / tablet / mobile.
- **Discover grid**: 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Body width**: 680px → fluid 92vw at mobile.
- **Section spacing**: 128px → 80px → 48px across sizes.
- **Search composer**: 720px wide on desktop, 100% width on mobile (still pill-shaped).

### Image Behavior

- Source thumbnails use `srcset` with 1x/2x/3x for crisp favicons and inline media.
- Hero imagery uses `aspect-ratio` to prevent layout shift.
- Lazy-loading on below-fold images; eager on hero.
- Citation source-thumbnails fall back to a domain initial in Tropic-cyan if no favicon.

### Container Queries

Used inside answer cards to switch layout when card width crosses 480px (source-thumbnails-row vs. source-thumbnails-stack).

## 11. Content & Voice

### Tone

**Quietly authoritative, library-curatorial, precise.** Perplexity writes like a research librarian who's already done the reading. Headlines describe rather than sell; subheads explain methodology; CTAs invite rather than urge. The brand sounds like a calm reference assistant — never excited, never apologetic, never sales-pitched.

### Microcopy Patterns

- **Button verbs**: "Search," "Try Pro," "Sign up," "Sign in," "Start with Comet," "View sources," "Read the answer," "Continue thread." Never "Get started for free!" or "Try now →".
- **Error messages**: "We couldn't reach that source. Try a different query, or [contact support]." Specific, actionable, no shame, no exclamation.
- **Success confirmations**: "Saved to library." "Pro activated." Brief, calm, present-tense.
- **Loading states**: "Searching sources…", "Reading 12 sources…", "Generating answer…" — process-aware language that matches the answer-engine register.
- **Citation tooltips**: "Source 1: example.com — published 2024-03-12" — domain, date, plain.

### Empty States

What they say: explain the empty state and offer the next step. *"No threads yet. Ask anything to start one."* *"You haven't saved any answers. Tap the bookmark to save."*
What they don't say: "Oops!", "Whoops!", any apologetic exclamation, any anthropomorphic "I'm sorry" framing. Empty states are normal, not failures.

### CTA Verb Conventions

- Primary on hero: "Try Pro," "Sign up," "Start with Comet"
- Secondary: "Learn more," "View pricing," "Read the announcement"
- Footer: "Read our research," "Browse the docs," "View Discover," "Contact sales"

The brand never uses "Sign up free!" or "Get started today!" — the tone is invitational and unhurried. Perplexity doesn't trade in scarcity. Citation language is always neutral: *"Source 1, 2, 3"* rather than *"According to…"* or *"As reported by…"*.

## 12. Dark Mode & Theming

**Dark mode shipped on the product UI, not the marketing site.** Perplexity.ai (the search product) ships a dark variant via OS preference; perplexity.ai (the marketing surface, brand pages, Pro signup) is intentionally light-only because the cream-paper canvas is the brand's defining choice.

### Dark Variant Tokens (product UI)

When dark mode is active on the product surface, the palette swaps as follows:

- **bg**: `#1a1816` — warm-deep ground (warmer than pure black, warmer than Linear's dark canvas).
- **bg-soft**: `#252220` — secondary panel.
- **surface**: `#252220` — cards lift via tone, not shadow.
- **text**: `#f5f1ea` — cream text on warm-deep ground.
- **text-muted**: `#b8b1a4`.
- **brand**: `#3aa5b3` — brighter Tropic-cyan tuned for dark contrast (4.7:1 against `#1a1816`).
- **brand-soft**: `rgba(58, 165, 179, 0.12)`.
- **cta-bg**: `#f5f1ea` — inverted: cream button on warm-deep canvas.
- **cta-text**: `#1a1816`.
- **border**: `rgba(245, 241, 234, 0.10)`.

The dark variant preserves the **warm temperature** — `#1a1816` is intentionally warmer than Anthropic's hypothetical dark `#1a1a18`, and considerably warmer than Linear's near-black. The cream-and-ink dialectic flips, but the warmth stays. Tropic-cyan brightens to `#3aa5b3` to maintain contrast on the deeper ground.

### Theming Discipline

If a downstream surface needs a custom theme, the rules: keep the **Tropic-cyan accent** at full saturation, keep the **warm temperature** of the canvas (no cool-blue or neutral-grey grounds), and keep the **pill-vs-card geometry** (interactive things round to 9999px; reading things round to 12px). These three constraints define the brand more than the exact hex values do.

## 13. Lineage & Influences

Perplexity's design DNA is **library, not laboratory**. The cream canvas (`#fbf9f5`) and warm-charcoal type (`#272520`) deliberately quote print typography rather than tech UI; the Tropic-cyan `#20808d` for citations and the brand mark is a teal closer to fountain-pen ink than to a standard tech accent. The custom pplxSans sits in a humanist register adjacent to GT America and Söhne — relaxed apertures, gentle contrast — with pplxMono handling code surfaces. The choice to set body text on cream instead of white is the most decisive call: it puts Perplexity in the editorial lineage that Notion (off-white `#ffffff` with Lyon serif), Anthropic (cream `#faf9f5` with Anthropic Serif), and The Browser Company's Arc share, distinguishing it from the cooler whites of OpenAI and the chromatic boldness of Mistral.

What it inherits: editorial typography (negative tracking on display, narrow reading column, body-on-cream), library-card geometry (numbered citations, source-tile layout), and museum-bookstore pricing chrome (warm-charcoal pill CTAs). What it borrows from contemporaries: Notion's off-white-paper register, Anthropic's earth-warm temperature, Arc's defection from cool-grey tech UI. What it rejects: gradient meshes, neon accents, hero animations, the Bay Area startup register, "AI" iconography (no hexagons, no orbiting dots, no chrome-on-black).

**Named influences:**

- **Notion** — Off-white-paper canvas + custom sans editorial register. *https://www.notion.com*
- **Anthropic** — Cream backdrop and warm-charcoal type — sister of the calm-AI register. *https://www.anthropic.com*
- **The Browser Company / Arc** — Warm-tinted neutrals as a defection from cool-grey tech UI. *https://arc.net*
- **Kagi** — Library-curatorial search register; minimal chrome. *https://kagi.com*
- **The New Yorker** — Editorial calm, narrow text columns, citation-as-typography.
- **GT America / Söhne** — Humanist-sans DNA reference for pplxSans proportions.

## 14. Do's and Don'ts

### Do

- **Do** set the canvas to warm cream (`#fbf9f5`) — pure white collapses the brand into ChatGPT's neighbourhood.
- **Do** reach for Tropic-cyan `#20808d` for any link, citation, or brand mark; it's the only saturated colour on the page and it earns its keep.
- **Do** use pplxSans at weight 500 for display copy; the relaxed humanist letterforms read as editorial rather than UI.
- **Do** ship the marketing primary CTA as a warm-charcoal pill — `#272520` bg, `#fdfbfa` cream-tinted text, 9999px radius.
- **Do** treat the search composer as identity — tall pill, brand-mark inset, 9999px corners non-negotiable.
- **Do** use warm-tinted hairlines (`rgba(39, 26, 0, 0.12)`) — every border carries the page temperature.
- **Do** lift cards via value contrast (white on cream) before reaching for shadows.
- **Do** type-set citations as `pplxSans 500 / 12px` in Tropic-cyan — typography, not chrome.
- **Do** cap reading width at ~680px even on 1200px pages — broadsheet column.
- **Do** keep all motion under 320ms and respect `prefers-reduced-motion`.

### Don't

- **Don't** use pure black `#000` for type or buttons — warm-charcoal `#272520` with cream-tinted on-cta text is what makes the cream-canvas system cohere.
- **Don't** drop shadows on cards; depth is value-contrast (white on cream), not elevation.
- **Don't** introduce neon or tech-saturated accents — the entire palette is paper, ink, and one teal.
- **Don't** swap pplxSans for Inter or Geist; weight 500 + humanist proportions is the typographic signature.
- **Don't** reach for weight 700 anywhere — Perplexity's headlines are 500. Bold breaks the editorial register.
- **Don't** apply gradients, conic backgrounds, or mesh shaders. The page is flat editorial.
- **Don't** use square buttons — every interactive primary is 9999px. Square buttons feel SaaS; pills feel paper-tag.
- **Don't** mix in cool-blue shadows or neutral-grey hairlines — the warm temperature is non-negotiable.
- **Don't** stack ChatGPT-flavoured "Send" arrow icons on the search composer — the brand-mark glyph is the input's only iconography.
- **Don't** ship marketing copy with exclamation marks, emoji, or "Get started today!" urgency. The voice is library-quiet.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #fbf9f5
bg-soft: #f5f1ea
surface: #ffffff
text: #272520
text-muted: #5d574c
brand: #20808d
brand-soft: #d6ecef
cta-bg: #272520
cta-text: #fdfbfa
border: rgba(39, 26, 0, 0.12)
border-soft: rgba(39, 26, 0, 0.07)
```

### Example Component Prompts

1. **"Create a Perplexity-style hero — warm cream `#fbf9f5` canvas, 56px pplxSans 500 headline with -0.02em tracking, 18px body in pplxSans 400, single warm-charcoal pill CTA `#272520` / `#fdfbfa` at 9999px radius. Tropic-cyan `#20808d` only on the brand mark. No gradient, no shadow."**

2. **"Design an answer card — white `#ffffff` background, 12px radius, 1px `rgba(39, 26, 0, 0.12)` border, 24px interior padding, pplxSans 500 / 20px heading, 16px pplxSans 400 body with old-style figures. Numbered citations `[1] [2]` in Tropic-cyan `#20808d` at weight 500. No drop shadow — value contrast against cream lifts the card."**

3. **"Build a search composer — full-pill input at 9999px radius, white background, 1px warm-tinted `rgba(39, 26, 0, 0.12)` border, 16px pplxSans 400 placeholder in `#7a7367`. Tropic-cyan brand-mark glyph anchored 16px from left. Focus ring: 2px `rgba(32, 128, 141, 0.40)` with 2px offset."**

4. **"Compose a Discover topic chip rail — warm-tinted pill chips at `rgba(39, 26, 0, 0.07)` background, `#272520` text, 9999px radius, 8×14px padding. Hover deepens to `rgba(39, 26, 0, 0.12)`. pplxSans 500 / 13px label. Horizontal scroll on mobile."**

5. **"Render a source citation tile — white `#ffffff` background, 8px radius, 3px Tropic-cyan `#20808d` left rule, 1px `rgba(39, 26, 0, 0.12)` border, 12×16px padding. Source domain in pplxSans 500 / 13px text-strong, citation index `[1]` in Tropic-cyan, snippet in 13px text-muted."**

6. **"Create the primary nav — 64px header height, cream `#fbf9f5` background, Perplexity wordmark left-aligned with Tropic-cyan brand-mark glyph, links 14px pplxSans 500 in `#272520` with Tropic-cyan hover. Right-aligned ghost-pill 'Log in' + warm-charcoal-pill 'Sign up'."**

### Iteration Guide

1. **Start with cream, not white.** If the bg is `#ffffff`, you've already lost the brand. Cream `#fbf9f5` is the entry ticket.
2. **Pill every interactive primary.** Buttons, search composer, topic chips → 9999px radius. Square buttons collapse the brand into SaaS.
3. **Switch CTA to warm-charcoal.** If the CTA is Tropic-cyan-filled, change it to `#272520` background with `#fdfbfa` cream-tinted text. Tropic-cyan is for citations and links, never as a primary fill.
4. **Drop the bold.** If headlines are 700, change to 500. pplxSans 500 is the entire heading ladder.
5. **Reach for one teal.** If you need decoration, use Tropic-cyan `#20808d` — never blue, never purple, never multi-accent.
6. **Cap the column.** 680px reading width even when the page is 1200px.
7. **Drop the shadows.** Replace box-shadows with value-contrast (white card on cream). Shadows only on overlay-layer surfaces.
8. **Calm the verbs.** Replace "Sign up now!" with "Sign up"; replace "Try free →" with "Try Pro". The voice is library-curatorial, never urgent.
