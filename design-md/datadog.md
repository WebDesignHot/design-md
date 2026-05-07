---
name: Datadog
tagline: NationalWeb on white with the iconic `#632ca6` purple — observability dressed as an enterprise dashboard, structurally dense, chromatically restrained, multicolour where the data demands it.
updated_at: 2026-05-06T08:15:13+12:00
published_at: 2026-05-03T16:49:18+12:00
author: webdesignhot
source_url: https://www.datadoghq.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, structured, sans, dense, cool, enterprise]
preview_swatch: ['#ffffff', '#632ca6', '#1a1a1a']
related: [stripe, vercel, linear]
description: 'Datadog''s marketing surface is a white-canvas enterprise dashboard with one job: convey density without panic. The body uses the proprietary **NationalWeb** sans, headlines hit 68px at weight 600 with `-1.2px` tracking, and the signature `#632ca6` purple-violet — the same hue as the dog mascot — appears as link colour, accent stamp, and chart-series-one. Buttons are tight (4–6px radii), surfaces stack in cool-grey tiers, and every product mock leans into multi-colour observability charts that prove the platform can render real metrics in real time.'

colors:
  bg: '#ffffff'                   # body canvas, paper white
  bg-soft: '#f7f7f7'              # secondary section bg
  bg-cool: '#f4f5f7'              # cool-tilted alternation band
  surface: '#eef1f5'              # raised card panel, cool-grey
  surface-hover: '#e2e6eb'        # subtle hover state
  surface-strong: '#dde1e7'       # pressed / active surface
  bg-dark: '#262626'              # dark CTA / dark footer band
  bg-deep: '#1a1a1a'              # deeper dark band, footer floor
  bg-darker: '#0c0c0c'            # darkest accent backdrop
  text: '#212529'                 # primary body text
  text-strong: '#0c0c0c'          # headline-grade text
  text-muted: '#555555'           # secondary copy
  text-soft: '#6b7280'            # captions, metadata
  text-faint: '#9ca3af'           # disabled, very low priority
  text-on-dark: '#f3f4f6'         # text on bg-dark
  text-on-dark-muted: '#a1a1aa'   # secondary text on bg-dark
  brand: '#632ca6'                # the iconic Datadog purple-violet
  brand-hover: '#52248a'          # pressed state
  brand-deep: '#411a6e'           # deepest variant, dark-section accent
  brand-soft: '#f0e8fa'           # tinted brand surface for callouts
  brand-tint: 'rgba(99, 44, 166, 0.10)'  # ambient tint for brand bands
  link: '#632ca6'                 # links inherit brand
  link-hover: '#52248a'
  on-brand: '#ffffff'
  # Multi-colour observability palette — the seven-series rainbow
  chart-purple: '#632ca6'         # series 1 — Bagel hue
  chart-blue: '#3b6ec7'           # series 2
  chart-teal: '#1aa1b6'           # series 3
  chart-green: '#3eb049'          # series 4
  chart-yellow: '#f1c40f'         # series 5
  chart-orange: '#f59f3a'         # series 6
  chart-red: '#e74c3c'            # series 7
  chart-pink: '#d65297'           # 8th series, rare
  border: '#e5e7eb'               # cool-grey hairline
  border-soft: '#f0f0f0'          # softer divider
  border-strong: '#cbd5e0'        # emphasised divider, table rules
  border-dark: 'rgba(255,255,255,0.10)'  # divider on dark surfaces
  success: '#16a34a'              # green for "healthy" metrics
  warning: '#f59f3a'              # amber for warning thresholds
  danger: '#dc2626'               # red for incident / critical
  info: '#3b6ec7'                 # blue for informational

typography:
  display:
    family: 'NationalWeb, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['kern', 'liga']
  body:
    family: 'NationalWeb, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['kern']
  mono:
    family: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-hero:    { size: 68, weight: 600, lineHeight: 1.0,  tracking: '-1.2px',  family: display, opentype: 'default' }
    display-large:   { size: 56, weight: 600, lineHeight: 1.05, tracking: '-1px',    family: display, opentype: 'default' }
    h1:              { size: 48, weight: 600, lineHeight: 1.05, tracking: '-0.6px',  family: display, opentype: 'default' }
    h2:              { size: 36, weight: 600, lineHeight: 1.1,  tracking: '-0.4px',  family: display, opentype: 'default' }
    h3:              { size: 28, weight: 600, lineHeight: 1.2,  tracking: '-0.2px',  family: display, opentype: 'default' }
    h4:              { size: 22, weight: 600, lineHeight: 1.25, tracking: '0',       family: display, opentype: 'default' }
    h5:              { size: 18, weight: 600, lineHeight: 1.3,  tracking: '0',       family: body,    opentype: 'default' }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',       family: body,    opentype: 'default' }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',       family: body,    opentype: 'default' }
    body-medium:     { size: 16, weight: 500, lineHeight: 1.55, tracking: '0',       family: body,    opentype: 'default' }
    body-small:      { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body,    opentype: 'default' }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.02em',  family: body,    opentype: 'default' }
    caption:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body,    opentype: 'default' }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.3,  tracking: '0.08em',  family: body,    opentype: 'default', transform: uppercase }
    code-inline:     { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: mono,    opentype: 'tnum' }
    code-block:      { size: 13, weight: 400, lineHeight: 1.6,  tracking: '0',       family: mono,    opentype: 'tnum' }
    chart-tick:      { size: 11, weight: 500, lineHeight: 1.2,  tracking: '0',       family: mono,    opentype: 'tnum' }
    chart-value:     { size: 13, weight: 500, lineHeight: 1.3,  tracking: '0',       family: mono,    opentype: 'tnum, zero' }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  xl: 12
  card: 8
  button: 4
  pill: 9999

spacing:
  base: 4
  scale: [2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120]

layout:
  page-width: 1320
  prose-width: 720
  feature-width: 1080
  header-height: 64
  gutter: 24
  section: 80

components:
  button-primary:
    bg: '#262626'
    text: '#ffffff'
    padding: '12px 20px'
    radius: 6
    font: 'NationalWeb 14/500'
    hover: 'bg #0c0c0c'
    use: 'Try it Free, Get a Demo — dark fill primary'
  button-brand:
    bg: '#632ca6'
    text: '#ffffff'
    padding: '12px 20px'
    radius: 4
    font: 'NationalWeb 14/500'
    hover: 'bg #52248a'
    use: 'rare brand-fill primary on dark sections'
  button-secondary:
    bg: '#eef1f5'
    text: '#1a1a1a'
    padding: '12px 20px'
    radius: 6
    font: 'NationalWeb 14/500'
    hover: 'bg #e2e6eb'
    use: 'paired secondary action'
  button-ghost:
    bg: 'transparent'
    text: '#212529'
    border: '1px solid #cbd5e0'
    padding: '12px 20px'
    radius: 6
    hover: 'bg rgba(0,0,0,0.04)'
  button-link:
    bg: 'transparent'
    text: '#632ca6'
    underline: 'on-hover'
    use: 'inline link CTA, "Learn more →"'
  card-feature:
    bg: '#ffffff'
    border: '1px solid #e5e7eb'
    radius: 8
    padding: '24px'
    shadow: 'none'
    use: 'feature grid card, no shadow — hairline only'
  card-elevated:
    bg: '#ffffff'
    border: '1px solid #e5e7eb'
    radius: 8
    padding: '24px'
    shadow: 'rgba(0,0,0,0.04) 0 6px 24px'
    use: 'pricing card, integration card with subtle lift'
  chart-mock:
    bg: '#ffffff'
    border: '1px solid #e5e7eb'
    radius: 8
    palette: [chart-purple, chart-blue, chart-teal, chart-green, chart-yellow, chart-orange, chart-red]
    use: 'multi-series observability chart in hero / feature mocks'
  badge-tag:
    bg: '#f0e8fa'
    text: '#632ca6'
    radius: 9999
    padding: '2px 10px'
    font: 'NationalWeb 12/600'
  input-text:
    bg: '#ffffff'
    border: '1px solid #cbd5e0'
    radius: 6
    padding: '10px 14px'
    height: 40
    focus: '2px solid #632ca6 + ring rgba(99,44,166,0.20)'
  nav-top:
    bg: 'rgba(255,255,255,0.92)'
    text: '#212529'
    height: 64
    border-bottom: '1px solid #e5e7eb'
    backdrop: 'blur(12px)'
  integration-tile:
    bg: '#f7f7f7'
    border: 'none'
    radius: 8
    padding: '16px'
    use: 'small SaaS logo tile in 6–8 column grid'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-decel: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 300
  duration-chart: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — chart redraws snap to final state, hover lifts collapse to opacity-only'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  whisper: 'rgba(16,24,40,0.04) 0 1px 2px'
  ambient: 'rgba(0,0,0,0.04) 0 6px 24px'
  standard: 'rgba(0,0,0,0.06) 0 12px 32px -8px'
  elevated: 'rgba(0,0,0,0.08) 0 24px 48px -16px'
  ring: '0 0 0 2px rgba(99,44,166,0.40)'

accessibility:
  contrast-text-on-bg: 16.1
  contrast-text-on-brand: 7.1
  contrast-body-on-bg: 11.8
  contrast-text-on-dark: 14.6
  focus-ring: '2px solid #632ca6 + 2px outer rgba(99,44,166,0.20)'
  reduced-motion-honored: true

dark-mode: optional

lineage:
  summary: |
    Datadog''s marketing site reads like a screenshot of the product itself.
    The white canvas, cool-grey surface tiers, tight 4–6px button radii,
    and multi-colour chart palette in every product mock are all chosen to
    communicate one idea: "this is what density looks like when it''s
    designed properly." The proprietary **NationalWeb** sans handles every
    text role — body, UI, headlines, labels — at weights 400/500/600/700,
    which is the enterprise-dashboard playbook (cf. Splunk, New Relic,
    Sumo Logic). The signature `#632ca6` purple-violet is the same hue as
    the Bagel mascot and operates as both link colour and accent stamp,
    a single-hue brand discipline borrowed from Stripe but pitched at a
    less consumer-friendly violet. Where Sentry uses violet on a deep
    aubergine canvas to feel handmade, Datadog uses the same hue on stark
    white to feel enterprise-ready. The chart palette (purple → blue →
    teal → green → yellow → orange → red) is the most distinctive
    component of the system: it''s the rainbow of a metrics dashboard,
    and it appears in every hero illustration to prove the platform can
    render hundreds of series simultaneously without losing legibility.
  influences:
    - name: Stripe
      role: 'Single-hue brand discipline (one confident colour, applied with restraint)'
      url: https://stripe.com
    - name: Splunk
      role: 'Enterprise-dashboard density, multi-colour metric palette, tight button radii'
      url: https://www.splunk.com
    - name: New Relic
      role: 'Adjacent observability marketing — chart-as-hero pattern, dense feature grids'
      url: https://newrelic.com
    - name: Bloomberg Terminal
      role: 'The deep-historical reference for "data-density as a design value" in monitoring UIs'
      url: https://www.bloomberg.com/professional/products/bloomberg-terminal
    - name: Klim Type Foundry — National 2
      role: 'Foundation typeface for NationalWeb — humanist sans designed for dense data tables'
      url: https://klim.co.nz/retail-fonts/national-2/
---

## 1. Visual Theme & Atmosphere

Datadog's marketing site is a tour of the product, presented at marketing scale. The body canvas is paper-white `#ffffff` — no warm tilt, no off-white compromise. Headlines hit 68px at weight 600 with `-1.2px` tracking; the proprietary **NationalWeb** sans is the only typeface in play, used at weights 400 through 700 for every role from caption to hero. The `#632ca6` purple-violet — the Bagel-mascot hue — operates as link colour and accent stamp, never as the dominant surface. Buttons are tight 4–6px radii; surfaces stack in cool-grey tiers (`#f7f7f7` → `#eef1f5` → `#e2e6eb`); and every hero illustration is a multi-colour observability chart proving the platform handles hundreds of series.

The visual signature isn't a single bold gesture — it's the *density* of the chart mocks. Where Linear shows a single neat list and Vercel shows a single deploy graph, Datadog shows seven colour-coded series overlaid on a single panel. That density is the brand. Where competing marketing sites choose between "calm" and "powerful," Datadog refuses the compromise: the page is calm (white canvas, restrained type) *because* the product can render the seven-series rainbow without losing legibility.

The atmosphere reads as a Bloomberg terminal that hired an editorial designer. The cool-grey surface tiers — never warm, never paper — are the palette of a financial broadsheet rendered in CSS. The chart cards are mission-control screens compressed for the marketing rhythm. Buttons stay tight at 4–6px radii: an engineering-tight corner that signals "this is a tool, not a toy." Every typographic decision is in service of the data: NationalWeb's tabular figures in the chart axes, restrained tracking on body copy that has to compete with seven-series chart legends, and a single-typeface discipline that prevents any visual noise from competing with the dashboard mocks.

**Key Characteristics:**
- White canvas with cool-grey tonal surface tiers — no warmth tilt, no paper-cream
- `#632ca6` Bagel purple-violet as the only brand colour — link, accent, chart-series-one
- NationalWeb sans (humanist, dense, custom) handles every type role 400–700
- 68px hero headlines at weight 600 with `-1.2px` tracking — bulletin-bold without aggression
- Tight 4–6px button radii — engineering-tight corners signal enterprise tool
- Seven-series rainbow chart palette: purple → blue → teal → green → yellow → orange → red
- Density-as-design — feature grids run 6–8 columns of integration logos
- Single-typeface discipline — no editorial serif, no display mono

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): Paper-white page floor — no warm or cool tilt, intentionally neutral.
- **Text** (`#212529`): Primary body text — near-black with a hint of cool-grey.
- **Brand** (`#632ca6`): The iconic Datadog purple-violet — the Bagel hue, used on links, chart-series-one, and accent stamps.

### Brand & Dark
- **Bagel Purple** (`#632ca6`): The wordmark hue. Restraint-applied — it lives in links, illustration accents, and chart-series-one slot, never as a dominant surface.
- **Brand Hover** (`#52248a`): Pressed and hover state for any purple surface.
- **Brand Deep** (`#411a6e`): Deepest variant — used on dark-section purple bands, illustration shadows.
- **Bg Dark** (`#262626`): The primary dark CTA fill colour and dark footer band — note this is *not* the brand purple.
- **Bg Deep** (`#1a1a1a`): Footer floor, deeper dark surface.
- **Bg Darker** (`#0c0c0c`): Darkest backdrop — used on rare full-bleed dark hero sections.

### Accent
- Datadog avoids a secondary brand accent. The seven-series chart palette (purple/blue/teal/green/yellow/orange/red) does all decorative work — it's the brand's most distinctive chromatic system. Outside chart contexts, only the Bagel purple appears as accent.

### Interactive
- **Link** = `#632ca6` Brand purple, no underline by default; underline appears on hover only.
- **Link Hover** = `#52248a` darker purple.
- **Hover (button-primary)** = `bg-dark` darkens from `#262626` to `#0c0c0c`.
- **Active / Pressed** = brand `#411a6e` deep on purple surfaces; `#0c0c0c` on dark surfaces.
- **Disabled** = opacity 50% on filled buttons; `#9ca3af` text-faint on `#f7f7f7` for disabled labels.
- **Selected** = `#f0e8fa` (brand-soft) background with `#632ca6` text.

### Neutral Scale
`#ffffff` (Canvas) → `#f7f7f7` (Bg Soft) → `#f4f5f7` (Bg Cool) → `#eef1f5` (Surface) → `#e2e6eb` (Surface Hover) → `#dde1e7` (Surface Strong) → `#e5e7eb` (Border) → `#cbd5e0` (Border Strong) → `#9ca3af` (Text Faint) → `#6b7280` (Text Soft) → `#555555` (Text Muted) → `#212529` (Text) → `#0c0c0c` (Text Strong / Bg Darker) → `#1a1a1a` (Bg Deep) → `#262626` (Bg Dark).

The neutral scale is intentionally **cool** — every grey carries a hint of blue, never warmth. This is the cool half of the spectrum, which distinguishes Datadog from warmer enterprise SaaS marketing surfaces (Notion's slight cream, Stripe's slight blue-warm).

### Surface & Borders
- **Bg Soft** (`#f7f7f7`): Secondary section background — light section-alternation band.
- **Bg Cool** (`#f4f5f7`): Cool-tilted alternation band — slightly more blue than Bg Soft.
- **Surface** (`#eef1f5`): Raised card panel surface — cool-grey, holds the integration-tile band.
- **Surface Hover** (`#e2e6eb`): Subtle hover state for raised panels.
- **Surface Strong** (`#dde1e7`): Pressed / active surface state.
- **Border** (`#e5e7eb`): Default cool-grey hairline. Used on every card edge.
- **Border Soft** (`#f0f0f0`): Softer divider — lighter than default border.
- **Border Strong** (`#cbd5e0`): Emphasised divider, table rules, input borders.
- **Border Dark** (`rgba(255,255,255,0.10)`): Divider on dark surfaces (footer, dark CTA bands).

### Shadow Colors
Datadog shadows are intentionally minimal. The brand prefers tonal layering and hairline borders to drop shadows. When shadows do appear:
- **Whisper** (`rgba(16,24,40,0.04) 0 1px 2px`): Faintest elevation — single-pixel hint, used on stat cards.
- **Ambient** (`rgba(0,0,0,0.04) 0 6px 24px`): Soft drop on integration cards and chart mocks.
- **Standard** (`rgba(0,0,0,0.06) 0 12px 32px -8px`): Slightly heavier — modal dialogs, dropdown menus.
- **Elevated** (`rgba(0,0,0,0.08) 0 24px 48px -16px`): Modal-grade lift.

Shadow tones are **neutral** (cool-grey base), never brand-tinted. The brand purple is reserved for action and identity, not for atmospheric tinting.

### Semantic
- **Success** (`#16a34a`): Green for "healthy" metrics in product mocks. Maps to chart-green slot.
- **Warning** (`#f59f3a`): Amber for warning thresholds, paired with chart-orange.
- **Danger** (`#dc2626`): Red for incident / critical state. Paired with chart-red.
- **Info** (`#3b6ec7`): Blue for informational state. Maps to chart-blue.

## 3. Typography Rules

### Font Family
- **Display & Body** — `NationalWeb`, fallback `Helvetica, Arial, sans-serif`. The proprietary humanist sans handles every text role on the marketing surface — display, body, UI, label, caption.
- **Mono** — `Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`. Intentionally generic system mono for code samples and chart-axis values.
- **OpenType** — `tnum` (tabular numerals) and `zero` (slashed zero) enabled on every numerical surface — chart axes, percentage values, currency. `kern` and `liga` default-on for text roles.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|-----:|-------:|------------:|---------------:|-------------|-------|
| display-hero    | NationalWeb | 68 | 600 | 1.0  | -1.2px  | default     | Homepage h1 — bulletin-bold register |
| display-large   | NationalWeb | 56 | 600 | 1.05 | -1px    | default     | Secondary hero |
| h1              | NationalWeb | 48 | 600 | 1.05 | -0.6px  | default     | Section h1 |
| h2              | NationalWeb | 36 | 600 | 1.1  | -0.4px  | default     | Sub-section heads |
| h3              | NationalWeb | 28 | 600 | 1.2  | -0.2px  | default     | Feature title |
| h4              | NationalWeb | 22 | 600 | 1.25 | 0       | default     | Card title |
| h5              | NationalWeb | 18 | 600 | 1.3  | 0       | default     | Inline emphasis |
| body-large      | NationalWeb | 18 | 400 | 1.55 | 0       | default     | Hero subhead, large prose |
| body            | NationalWeb | 16 | 400 | 1.55 | 0       | default     | Default running text |
| body-medium     | NationalWeb | 16 | 500 | 1.55 | 0       | default     | Inline emphasis |
| body-small      | NationalWeb | 14 | 400 | 1.5  | 0       | default     | Captions, table cells |
| label           | NationalWeb | 13 | 500 | 1.4  | +0.02em | default     | Form labels, table headers |
| caption         | NationalWeb | 12 | 400 | 1.4  | 0       | default     | Metadata, footnote |
| eyebrow         | NationalWeb | 12 | 600 | 1.3  | +0.08em | uppercase   | Section eyebrow above headline |
| code-inline     | Menlo       | 14 | 400 | 1.5  | 0       | tnum        | Inline code in prose |
| code-block      | Menlo       | 13 | 400 | 1.6  | 0       | tnum        | Code samples |
| chart-tick      | Menlo       | 11 | 500 | 1.2  | 0       | tnum        | Chart axis values |
| chart-value     | Menlo       | 13 | 500 | 1.3  | 0       | tnum, zero  | Inline chart numerical readouts |

### Principles

- **Single-typeface discipline** — NationalWeb does every text role. No editorial serif. No display mono. The unified type voice reinforces "everything-in-one-place" platform positioning.
- **Display weight 600 — never 700/800** — Bulletin-bold register without negative-tracking aggression. The 68px hero stays confident without falling into Linear-style display-bold theatrics.
- **Negative tracking scales with size** — `-1.2px` at 68px down to `0` at 16px. The display-tightening produces the engineered feel without crushing body legibility.
- **Body line-height 1.55** — Marketing-prose-friendly, slightly looser than Linear's dev-tool 1.5. Calibrated for sustained reading on the homepage's long feature scrolls.
- **Tabular numerals everywhere numerical** — `tnum` is on for every chart, every percentage, every currency value. The slashed `zero` distinguishes from `O` in tickers.
- **Mono is system, not custom** — Datadog refuses to compete with its own product UI on monospaced code. The Menlo/Monaco system stack stays intentionally generic.
- **Klim's National 2 lineage** — NationalWeb is built on the bones of Klim's National 2, a humanist sans engineered for dense data tables. The choice predates the marketing site; the in-product UI shipped first.

## 4. Component Stylings

### Buttons

**`button-primary`** — The default marketing CTA. Background `#262626`, white text, 12×20 padding, 6px radius, NationalWeb 14/500. Hover darkens to `#0c0c0c`. Active to `#000000`. Used on "Try it Free", "Get a Demo".

**`button-brand`** — Purple-fill primary. Background `#632ca6`, white text, 12×20 padding, **4px radius** (tighter than secondary), NationalWeb 14/500. Hover to `#52248a`. Used rarely — typically on dark-section CTAs where dark-on-dark is impossible.

**`button-secondary`** — Cool-grey paired action. Background `#eef1f5`, `#1a1a1a` text, 12×20 padding, 6px radius. Hover to `#e2e6eb`. Used adjacent to primary as the "Learn more" companion.

**`button-ghost`** — Outlined variant. Transparent background, 1px `#cbd5e0` border, `#212529` text, 6px radius. Hover background `rgba(0,0,0,0.04)`. Used on dense feature lists where filled buttons would create visual noise.

**`button-link`** — Inline link CTA. Text-only, `#632ca6` brand purple, underline on hover. Used as "Learn more →" pattern at end of feature paragraphs.

### Cards

**`card-feature`** — White background, 1px `#e5e7eb` hairline, 8px radius, 24px padding, **no shadow**. Holds icon + title + body. The default card chrome.

**`card-elevated`** — White background, 1px `#e5e7eb` hairline, 8px radius, 24px padding, soft `rgba(0,0,0,0.04) 0 6px 24px` ambient shadow. Used on pricing tiers and integration cards that benefit from subtle lift.

**`chart-mock`** — White background, 1px `#e5e7eb` hairline, 8px radius. Holds a multi-series chart using the seven-color rainbow palette. The most distinctive card in the system — every product feature is illustrated through one of these.

**`integration-tile`** — `#f7f7f7` background, no border, 8px radius, 16px padding. Holds a SaaS partner logo. Arranged in 6–8 column grids on the integrations section.

### Badges & Tags

**`badge-tag`** — Background `#f0e8fa` (brand-soft), `#632ca6` text, pill (9999px), 2×10 padding, NationalWeb 12/600. Used for "New" / "Beta" / category tags.

**`badge-status-success`** — `rgba(22,163,74,0.10)` background, `#16a34a` text, 4px radius. "Healthy" / "online" indicator.

**`badge-status-warning`** — `rgba(245,159,58,0.10)` background, `#f59f3a` text. Threshold warning.

**`badge-status-danger`** — `rgba(220,38,38,0.10)` background, `#dc2626` text. Critical state.

### Inputs / Forms

**`input-text`** — White background, 1px `#cbd5e0` border, 6px radius, 10×14 padding, 40px height. Focus → 2px `#632ca6` border + 2px `rgba(99,44,166,0.20)` outer ring.

**`input-search`** — Same as input-text with leading magnifying-glass icon, used on the docs and integrations search.

**`select`** — White background, 1px `#cbd5e0` border, 6px radius, downward chevron right. Opens to a list with row-hover `#f7f7f7`.

### Navigation

**`nav-top`** — 64px tall, `rgba(255,255,255,0.92)` with `backdrop-filter: blur(12px)`, 1px `#e5e7eb` bottom border. Datadog wordmark left (in `#212529`, not purple — purple appears only as the Bagel mark glyph), primary nav (Why Datadog, Product, Solutions, Pricing, Resources), right cluster (Sign in, "Get Started Free" primary CTA).

**`nav-mega`** — Multi-column dropdown opens on hover for "Product" and "Solutions" categories. White surface, 8px radius, ambient shadow, 4-column grid of feature links with category eyebrow.

**`nav-side-docs`** — Left sidebar on docs pages. 240px wide, `#fafafa` background, NationalWeb 14/500 link list with 4px indent for nested items.

### Decorative

**`band-stat-callout`** — Numerical proof band ("1,000+ integrations"). Background `#f7f7f7`, 80px vertical padding, 3-up grid of display-large numbers in `#632ca6` brand purple, label captions in `#555555` below.

**`hero-band-dark`** — Rare full-bleed dark hero (`#1a1a1a`) used on event landing pages or campaign features. White text, dark-fill primary button, brand purple accent on illustration.

**`integration-grid-band`** — `#f7f7f7` bg, 6–8 column grid of integration tiles. The most distinctive density signal — proves the platform talks to everything.

## 5. Layout Principles

### Spacing System
- **Base unit**: 4px, with 2px micro-adjustments allowed for dense controls.
- **Tokens**: 2 / 4 / 6 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120.
- **Section padding (vertical)**: 80px on marketing — slightly tighter than Vercel's 96, tighter still than Stripe's 120. The density signal: more product, more proof, more series.
- **Card internal padding**: 24px default; 32px on stat / pricing cards; 16px on dense list rows.

### Grid & Container
- **Max content width**: 1320px centred — wider than Vercel's 1280, narrower than Linear's 1440. Tuned for the integration-tile band's 6–8 column grid.
- **Editorial body**: 12-column grid with 24px gutters. Subdivides densely on integration grids.
- **Hero**: 7/5 split (text left, chart mock right) on desktop. On marketing pages with single-feature focus, the chart spans full width below the headline.

### Whitespace Philosophy
Density-as-design. The 80px section padding is deliberate restraint against the dense feature grids — Datadog refuses both Stripe-style atmospheric breathing room and Bloomberg-terminal density-without-air. The result is a marketing surface that feels "designed" but never "decorative."

### Section Cadence
White → cool-soft band (`#f7f7f7`) → white → integration-tile band → white → dark CTA hero → light footer. The cadence creates implicit elevation through tonal alternation rather than borders or shadows. Dark hero sections appear sparingly — typically once per page, anchoring the final conversion gesture.

## 6. Shapes & Radius Scale

- **Micro** (2px) — pre-pill chips, inline tag highlights
- **Sm** (4px) — brand-fill buttons, dense control radii
- **Md** (6px) — default button radius, input fields
- **Lg** (8px) — cards, chart mocks, integration tiles
- **Xl** (12px) — hero cards, large callouts
- **Pill** (9999px) — tag chips, "New" badges, avatar placeholders

The 4px brand-button radius is the system's distinctive choice — it's markedly tighter than the 8–12px modern SaaS norm and signals enterprise restraint. Where Linear ships a full pill on its primary CTA and Vercel ships an 8px hero button, Datadog's 4px stays engineering-tight. Cards land at 8px — softer than the brand button by one tier, which creates a small but legible hierarchy: buttons feel sharper, cards feel more comfortable.

Compound radii appear on chart mocks where the top edge meets a header band — `8px 8px 0 0` on the header strip, square-bottomed where it meets the chart canvas.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 Flat | No shadow | Body text, hero copy, integration tiles, nav |
| 1 Hairline | 1px `#e5e7eb` | Default card chrome — every feature card, every pricing tier |
| 2 Whisper | `rgba(16,24,40,0.04) 0 1px 2px` | Stat cards, micro-elevation hints |
| 3 Ambient | `rgba(0,0,0,0.04) 0 6px 24px` | Pricing card lift, integration card on hover |
| 4 Standard | `rgba(0,0,0,0.06) 0 12px 32px -8px` | Modal dialogs, dropdown menus |
| 5 Elevated | `rgba(0,0,0,0.08) 0 24px 48px -16px` | Modal-grade lift, command palette |

**Shadow Philosophy**: Hairlines first, shadows second. The default card uses a 1px `#e5e7eb` border with no shadow — depth comes from the white card's contrast against the cool-grey `#f7f7f7` band. Shadows appear only when the surface needs to lift off a same-coloured surface (white card on white, or modal on white). All shadows are neutral cool-grey — never brand-tinted purple. Brand purple is action and identity; never atmosphere.

## 8. Interaction & Motion ✨

### Easing Curves
- **Standard** — `cubic-bezier(0.4, 0, 0.2, 1)` for hover transitions, button state changes, card hover lifts
- **Emphasized** — `cubic-bezier(0.2, 0, 0, 1)` for chart redraws, modal entries, page transitions
- **Decel** — `cubic-bezier(0.0, 0, 0.2, 1)` for elements entering view (scroll-triggered fades)

### Duration Buckets
- **Fast** (120ms) — colour shifts, hover state changes
- **Standard** (200ms) — card hover lift, button press, dropdown open
- **Slow** (300ms) — modal entry, mega-nav reveal
- **Chart** (400ms) — chart series redraw, axis-tick updates

### Per-Component Micro-States
- **Button-primary hover** — `bg #262626` → `#0c0c0c` over 120ms standard ease. No translate, no shadow change.
- **Button-brand hover** — `bg #632ca6` → `#52248a` over 120ms standard.
- **Card-elevated hover** — shadow intensifies from ambient to standard over 200ms; no translate.
- **Chart-mock hover** — series legend chips highlight; non-hovered series fade to 40% opacity over 200ms.
- **Link hover** — colour `#632ca6` → `#52248a` over 120ms; underline appears (text-decoration grows from 0 to 1px).
- **Mega-nav** — hover-open after 100ms delay; fade + 8px upward slide at 200ms emphasized ease.

### Page Transitions
Datadog uses no page-transition animation — page navigations are immediate. Within-page anchor jumps use smooth scroll at 600ms standard ease. Feature-section reveals on scroll use a fade + 16px upward slide at 400ms decel ease, triggered when 20% of the section enters the viewport.

### Reduced Motion
Honours `prefers-reduced-motion: reduce`. All transitions collapse to opacity-only. Chart redraws snap to final state instead of animating series. Scroll-triggered reveals become immediate (no fade, no slide). Hover lifts collapse to colour-only changes.

## 9. Accessibility & A11y ✨

### Contrast Pairs
- **Text on bg** (`#212529` on `#ffffff`) = **16.1:1** (AAA at all sizes)
- **Text on brand** (`#ffffff` on `#632ca6`) = **7.1:1** (AAA at body sizes, AA at large)
- **Body on bg** (`#212529` on `#ffffff`) = **16.1:1** (AAA)
- **Text on dark** (`#f3f4f6` on `#262626`) = **14.6:1** (AAA)
- **Text-muted on bg** (`#555555` on `#ffffff`) = **7.4:1** (AAA at body sizes)
- **Text-soft on bg** (`#6b7280` on `#ffffff`) = **5.0:1** (AA at body sizes; never used below 14px)
- **Link on bg** (`#632ca6` on `#ffffff`) = **7.1:1** (AAA)

### Focus Indicators
2px solid `#632ca6` brand purple ring + 2px outer `rgba(99,44,166,0.20)` halo on every interactive element. Inputs swap their border colour to `#632ca6` on focus instead of using a separate ring. Skip-to-content link visible on first Tab, anchored top-left of viewport.

### ARIA Patterns
- **Mega-nav** — `role="menu"` with `aria-haspopup` on top-level triggers, arrow-key nav within submenus
- **Search combobox** — `role="combobox"` with `aria-expanded`, `aria-controls`, `aria-activedescendant` on listbox items
- **Modal dialog** — `role="dialog"` + `aria-modal="true"` + focus trap + `Escape` to close
- **Chart cards** — `role="img"` with descriptive `aria-label` summarising the series; data table fallback in `<details>`
- **Tab patterns** — `role="tablist"` with arrow-key navigation, `aria-selected` on active tab

### Keyboard Navigation
Standard tab order top-down, left-to-right. Arrow keys navigate within tab groups, mega-nav columns, and combobox options. `Escape` closes any open overlay (modal, mega-nav, dropdown). `Enter` and `Space` activate buttons. Skip-to-content jumps past nav.

### Screen Reader Hints
- Chart mocks include hidden `<table>` with the same data — readers get the underlying numbers, not just the visual.
- Brand-mark glyphs use `aria-hidden="true"`; the wordmark text carries the label.
- Status badges include `aria-label` describing the state ("Healthy", "Warning", "Critical") even when colour-coded.

### Reduced Motion
Honoured globally — see §8 for behaviour.

## 10. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|------:|-------------|
| Mobile     | < 640  | Top nav → hamburger; display-hero 68 → 36px; chart mocks stack vertically below text; integration grid → 2-col; CTA pairs stack vertically |
| Tablet     | 640–1024 | Top nav condenses, secondary nav behind "More"; chart mocks 50% width; integration grid → 4-col |
| Desktop    | 1024–1280 | Hero 7/5 split; feature grids 3-up; integration grid → 6-col |
| Wide       | 1280–1536 | Full layout; feature grids 4-up; integration grid → 8-col; mockups full-fidelity |

### Touch Targets
Primary CTAs 44 × 44px minimum. Chart-mock series legend chips tap-target 36 × 36px. Compliance footnote text (12px) is non-interactive; never used as a tap target.

### Collapsing Strategy
- **Top nav** → hamburger sheet at mobile; mega-nav columns flatten to accordion
- **Hero** → text + chart stack vertically; chart mock crops to first 4 series for legibility
- **Feature grid** → 4-up → 3-up → 2-up → 1-up
- **Integration grid** → 8-col → 6-col → 4-col → 2-col
- **Pricing tiers** → 4-up → 2-up → 1-col (most-recommended tier first)
- **Footer** → 6-col link grid → 2-col → accordion sections

### Image Behavior
Chart mocks are responsive PNG with WebP fallback at 1x and 2x. Integration logos are SVG with explicit `aria-label` carrying the partner name. Hero illustrations are SVG with size constraints — no `width: 100%` without `max-width` to prevent over-scaling on ultra-wide.

### Container Queries
Used on chart-mock cards — series legend chips wrap at container width < 320px, switching from inline-flex to vertical stack. Integration tiles use container queries to adjust logo padding from 16px (wide) to 12px (narrow).

## 11. Content & Voice ✨

### Tone
Datadog's voice is **technically credible but never showboating** — engineering-precise without falling into the bombast of crypto-finance ("Trade with confidence!") or the jargon-heavy register of legacy enterprise IT ("Holistic observability synergies"). Sentences are direct, value claims are quantified. The first-person "we" rarely appears; the brand speaks as a tool, not a personality.

### Microcopy Patterns
- **Button verbs** — "Try it Free", "Get a Demo", "See pricing", "View docs". Action-oriented imperatives.
- **Section eyebrows** — uppercase 12/600 +0.08em tracking — "OBSERVABILITY", "SECURITY", "DEVELOPER EXPERIENCE". The eyebrow names the category before the headline names the value.
- **Error messages** — direct, no apology theatrics. "We couldn't reach the metrics endpoint. Try again or [contact support]." with retry CTA.
- **Empty states** — instructional without infantilizing. "No alerts triggered in the last 24 hours. [Configure alert rules]" with the action linked inline.
- **Success confirmations** — minimal. "Saved." with a checkmark icon — no toast, no celebration.

### CTA Verb Conventions
- **Primary action** — "Try it Free" (top of page), "Get a Demo" (post-feature), "Start Your Free Trial" (bottom of page)
- **Secondary** — "Learn more →", "See how it works", "View pricing"
- **Tertiary** — "Read the docs", "View on GitHub", "Browse integrations"
- The Datadog brand prefers "Try it Free" over "Sign up" — friction reduction by signaling self-service before the form appears.

### Empty States
"No data yet" patterns explain why and what to do next: "No metrics have streamed from this host. Install the Datadog agent — [installation guide]." Empty states never apologise; they instruct.

## 12. Dark Mode & Theming ✨

Datadog's marketing surfaces are **light-default** with rare full-bleed dark hero punctuation (`#1a1a1a`). The product trading app supports a full dark mode (out of scope for this marketing-surface document; see in-product theming docs).

For dark hero punctuation, the token swap is minimal:
- `bg` → `#1a1a1a`
- `text` → `#f3f4f6`
- `text-muted` → `#a1a1aa`
- `border` → `rgba(255,255,255,0.10)`
- Brand purple `#632ca6` stays unchanged — the hue reads cleanly on both white and dark backgrounds
- Cards on dark heroes use `#262626` background with `rgba(255,255,255,0.10)` border

Datadog's marketing site does not implement a user-toggleable dark theme — the dark sections are content-driven, not preference-driven.

## 13. Lineage & Influences

Datadog's marketing site reads like a screenshot of the product itself. The white canvas, cool-grey surface tiers, tight 4–6px button radii, and multi-colour chart palette in every product mock are all chosen to communicate one idea: "this is what density looks like when it's designed properly." The proprietary **NationalWeb** sans handles every text role at weights 400/500/600/700 — the enterprise-dashboard playbook (cf. Splunk, New Relic, Sumo Logic).

The signature `#632ca6` purple-violet is the same hue as the Bagel mascot and operates as both link colour and accent stamp — a single-hue brand discipline borrowed from Stripe but pitched at a less consumer-friendly violet. Where Sentry uses violet on a deep aubergine canvas to feel handmade, Datadog uses the same hue on stark white to feel enterprise-ready. The chart palette (purple → blue → teal → green → yellow → orange → red) is the most distinctive component of the system — the rainbow of a metrics dashboard, appearing in every hero illustration to prove the platform can render hundreds of series simultaneously without losing legibility.

What it borrows: single-hue brand discipline from Stripe; multi-colour chart palette and dashboard density from Splunk and New Relic; humanist data-table sans from Klim's National 2 family; restrained 80px section rhythm from Vercel's marketing. What it rejects: purple-as-surface (purple is action, not atmosphere), gradient hero treatments, glass-morphism and neumorphism, pill-shaped CTAs, and warm-grey neutrals.

**Influences:**
- **Stripe** — Single-hue brand discipline (one confident colour, applied with restraint). https://stripe.com
- **Splunk / New Relic** — Enterprise-dashboard density, multi-colour metric palette, tight button radii.
- **Bloomberg Terminal** — The deep-historical reference for "data-density as a design value" in monitoring UIs.
- **Klim Type Foundry — National 2** — Foundation typeface for NationalWeb; humanist sans engineered for dense data tables. https://klim.co.nz
- **Sentry** — Adjacent dev-tool with violet brand; useful contrast (Sentry chooses aubergine canvas, Datadog chooses white).

## 14. Do's and Don'ts

### Do
- Keep `#632ca6` Bagel purple as link / accent / chart-series colour — never as a dominant surface fill
- Lean into multi-colour observability charts in product mocks — the seven-series rainbow is the brand's strongest density signal
- Hold buttons at 4–6px radii — engineering-tight corners are the enterprise differentiator
- Use NationalWeb at weight 600 for headlines (never below) and 400/500 for body
- Anchor sections at 80px vertical padding — denser than Stripe, looser than Bloomberg
- Use `tnum` and `zero` OpenType features on every numerical surface
- Layer cool-grey tonal surfaces (`#ffffff` → `#f7f7f7` → `#eef1f5`) for implicit elevation
- Keep shadows neutral cool-grey — never brand-tinted purple
- Show seven-series chart mocks even when fewer series would fit — the density is the proof

### Don't
- Don't use NationalWeb below 500 weight for headlines — the bulletin-bold register depends on weight 600 at 68px
- Don't introduce a second display typeface or an editorial serif — single-typeface discipline is the brand's typographic signature
- Don't soften the white canvas with a warm tilt — Datadog's neutrals are intentionally cool
- Don't fill primary CTAs with brand purple by default — the dark `#262626` is the standard primary
- Don't add brand-tinted shadows — purple is for action, not atmosphere
- Don't use pill (9999px) buttons — 4–6px is the radius family
- Don't add gradient hero treatments — Datadog stays flat
- Don't bury the chart palette — every product mock should show 4+ series
- Don't widen line-height below 1.5 for body — 1.55 is calibrated for marketing prose

## 15. Agent Prompt Guide

### Quick Color Reference
- Brand: `#632ca6` (Bagel Purple)
- Brand hover: `#52248a`
- Text: `#212529`
- Body bg: `#ffffff`
- Surface: `#eef1f5`
- Bg dark: `#262626`
- Border: `#e5e7eb`
- Chart palette: `#632ca6`, `#3b6ec7`, `#1aa1b6`, `#3eb049`, `#f1c40f`, `#f59f3a`, `#e74c3c`

### Example Component Prompts

- "Create a Datadog hero band: white background, 68px NationalWeb weight 600 headline with `-1.2px` tracking in `#212529`, body-large 18/400 sub in `#555555`, primary CTA `#262626` 6px radius 12×20 padding `Try it Free`, secondary ghost `1px #cbd5e0` border `Learn more`."
- "Design a multi-series chart mock: white card, 1px `#e5e7eb` border, 8px radius. Render seven line series in the canonical rainbow (`#632ca6`, `#3b6ec7`, `#1aa1b6`, `#3eb049`, `#f1c40f`, `#f59f3a`, `#e74c3c`) over a 24-hour x-axis. Y-axis ticks in Menlo 11/500 with tnum."
- "Build an integration band: `#f7f7f7` bg, 80px vertical padding, 8-column grid of integration tiles (`#f7f7f7` bg, 8px radius, 16px padding). Each tile holds a SaaS partner SVG logo at 32px height, centered."
- "Compose a pricing tier card: white bg, 1px `#e5e7eb` border, 8px radius, 32px padding, `rgba(0,0,0,0.04) 0 6px 24px` ambient shadow. Tier name in eyebrow `+0.08em` uppercase, price in 48px NationalWeb weight 600, feature checklist in 16/400 with `#16a34a` checkmarks."
- "Render a dark CTA hero: full-bleed `#1a1a1a` bg, 80px section padding, 56px display-large white headline, body-large `#a1a1aa` sub, `#632ca6` brand-fill button 4px radius `Get a Demo`."
- "Draw a feature-comparison table: 4-column grid, header row with `#f7f7f7` bg + 13/500 +0.02em labels, body rows alternating `#ffffff` and `#f7f7f7`, NationalWeb 14/400 with `#16a34a` checkmarks and `#9ca3af` dashes."

### Iteration Guide

1. Start with the white canvas and NationalWeb at 68/600/-1.2px — that's the brand register.
2. Apply `#632ca6` Bagel purple as accent only — links, chart-series-one, the Bagel mark glyph. Never as primary CTA fill.
3. Primary CTA fill is `#262626` dark, not brand purple. If your design has purple buttons, demote to ghost or link variants.
4. Cards default to 8px radius with hairline border, no shadow. Reach for shadow only on lifted surfaces (pricing, modal).
5. Multi-series charts need ≥ 4 series visible to feel "Datadog." Single-series charts read as Vercel or Linear.
6. Section padding 80px vertical — denser than Stripe (120), looser than Bloomberg (40).
7. Cool-grey neutrals only — if your greys feel warm, you're drifting toward Notion territory.
8. `tnum` and `zero` OpenType features on every chart axis, every percentage, every currency value.
