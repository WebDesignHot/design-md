---
name: Grafana
tagline: Dark observability canvas with the iconic `#f46800` orange — Inter for body, Roboto Mono everywhere a label hides, multi-colour chart palette ripped straight from a real dashboard.
updated_at: 2026-05-06T08:44:32+12:00
published_at: 2026-05-03T16:49:18+12:00
author: webdesignhot
source_url: https://grafana.com
spec: design.md/v1.5
quality: curated
featured: true
categories: [dev-tools, saas, observability]
tags: [dark, structured, sans, mono, dense, warm, dashboard-heritage]
preview_swatch: ['#111217', '#f46800', '#ffffff']
related: [vercel, linear, posthog]
description: 'Grafana''s marketing site is a dark observability canvas with one electric `#f46800` orange that does almost all the brand work. The body bg is a near-black `#111217` with cool-grey hairlines, Inter handles body and headlines, and Roboto Mono carries every metric label, axis tick, and code sample. The signature gesture is the orange — used as the heart-icon mark, the primary CTA fill, the chart-series-one colour, and the link/hover state — paired with a saturated supporting palette of teals, magentas, and yellows that read as "real Grafana panels rendered at marketing scale." The 4-px panel radii, 8-px card radii, and tight 8-px white hairline borders are direct lifts from the in-product dashboard chrome — marketing earns trust by looking exactly like the tool you''re buying. The result is observability marketing that feels designed by people who run dashboards in production, not by people who only render them in screenshots.'

colors:
  # Primary
  bg: '#111217'                          # body canvas — near-black with slight blue tilt (Grafana panel bg-1)
  bg-elevated: '#181b1f'                 # raised card / panel surface (Grafana panel bg-2)
  bg-soft: '#0b0c0e'                     # darker footer / nav strip
  bg-deep: '#000000'                     # rare absolute-black, used only on chart axis lines
  surface: '#202226'                     # secondary panel (Grafana panel bg-3)
  surface-hover: '#2a2d33'               # hover state on cards/buttons
  surface-elevated: '#2c3137'            # popover, dropdown, tooltip
  text: '#ffffff'                        # primary copy, hero headlines
  text-muted: '#ccccdc'                  # body paragraphs (Grafana grey-1)
  text-soft: '#9090a0'                   # captions, metadata, axis labels
  text-faint: '#6c6c80'                  # disabled, decorative
  # Brand
  brand: '#f46800'                       # the iconic Grafana orange — single-hue brand axis
  brand-hover: '#dc5e00'                 # pressed state, slightly deeper
  brand-deep: '#c25400'                  # active/depressed
  brand-soft: '#3d1e07'                  # tinted brand surface for hero callouts
  brand-tint: 'rgba(244, 104, 0, 0.12)'  # background tint for orange tags
  on-brand: '#ffffff'                    # white text on orange fills
  # Multi-colour chart palette — the panel default scheme
  chart-orange: '#f46800'                # series 1 — also brand orange
  chart-teal: '#37c2ba'                  # series 2
  chart-blue: '#5794f2'                  # series 3
  chart-purple: '#9170db'                # series 4
  chart-pink: '#f2495c'                  # series 5 (also semantic danger)
  chart-yellow: '#fade2a'                # series 6 (also semantic warning)
  chart-green: '#73bf69'                 # series 7 (also semantic success)
  # Interactive
  link: '#f46800'                        # default link is brand orange
  link-hover: '#ff8629'                  # brighter orange on hover
  selected-bg: '#2a2d33'                 # selected row/card
  disabled: '#6c6c80'                    # disabled text
  # Borders
  border: '#ffffff14'                    # ~8% white hairline — cool-grey panel divider
  border-strong: '#ffffff26'             # ~15% for emphasised rules
  border-soft: '#ffffff0a'               # ~4% for quietest division
  border-brand: 'rgba(244, 104, 0, 0.40)' # orange-tinted hairline on featured cards
  # Semantic — derived from the chart palette
  success: '#73bf69'                     # chart-green doubles as semantic success
  success-bg: 'rgba(115, 191, 105, 0.12)'
  warning: '#fade2a'                     # chart-yellow doubles as semantic warning
  warning-bg: 'rgba(250, 222, 42, 0.14)'
  danger: '#f2495c'                      # chart-pink doubles as semantic danger
  danger-bg: 'rgba(242, 73, 92, 0.14)'
  info: '#5794f2'                        # chart-blue doubles as semantic info
  info-bg: 'rgba(87, 148, 242, 0.14)'

typography:
  display:
    family: 'Inter, "Inter Variable", "Helvetica Neue", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [500, 600, 700, 800]
    opentype-features: ['cv11', 'ss03', 'liga', 'kern']
  body:
    family: 'Inter, "Inter Variable", "Helvetica Neue", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['cv11', 'liga', 'kern']
  mono:
    family: '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400, 500, 600]
    opentype-features: ['liga', 'tnum', 'zero']
  scale:
    display-hero:    { size: 80, weight: 800, lineHeight: 1.02, tracking: '-0.03em', family: display }
    display:         { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.02em', family: display }
    h1:              { size: 56, weight: 700, lineHeight: 1.08, tracking: '-0.02em', family: display }
    h2:              { size: 44, weight: 700, lineHeight: 1.10, tracking: '-0.018em', family: display }
    h3:              { size: 32, weight: 600, lineHeight: 1.20, tracking: '-0.012em', family: display }
    h4:              { size: 22, weight: 600, lineHeight: 1.30, tracking: '-0.005em', family: display }
    h5:              { size: 18, weight: 600, lineHeight: 1.35, family: display }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.40, tracking: '0.10em', family: mono, transform: uppercase }
    body-large:      { size: 20, weight: 400, lineHeight: 1.55, family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.60, family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.55, family: body }
    caption:         { size: 13, weight: 500, lineHeight: 1.45, family: body }
    caption-tabular: { size: 13, weight: 500, lineHeight: 1.45, family: mono, opentype: 'tnum' }
    label:           { size: 11, weight: 500, lineHeight: 1.30, tracking: '0.05em', family: mono, transform: uppercase }
    metric-chip:     { size: 11, weight: 500, lineHeight: 1.30, tracking: '0.05em', family: mono }
    code:            { size: 14, weight: 400, lineHeight: 1.55, family: mono, opentype: 'liga' }
    code-inline:     { size: 13, weight: 500, lineHeight: 1.50, family: mono }
    code-micro:      { size: 11, weight: 400, lineHeight: 1.40, family: mono }
    button:          { size: 14, weight: 600, lineHeight: 1.20, family: display }

radius:
  micro: 2
  panel: 4                               # in-product Grafana panel radius — defining shape token
  sm: 4
  button: 6
  md: 6
  lg: 8
  card: 8
  xl: 12
  pill: 9999

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  site-gutter: 'clamp(20px, 4vw, 48px)'
  header-height: 64
  grid-columns: 12
  section-rhythm: '96px'
  density: high

components:
  button-primary:
    background: '#f46800'
    text: '#ffffff'
    padding: '12px 20px'
    radius: 6
    border: 'none'
    font: 'Inter 600 / 14px'
    hover-bg: '#dc5e00'
    active-bg: '#c25400'
    use: 'Solid orange CTA — primary actions: Get started, Try free, Talk to sales.'
  button-secondary:
    background: 'transparent'
    text: '#ffffff'
    padding: '12px 20px'
    radius: 6
    border: '1px solid #ffffff33'
    font: 'Inter 600 / 14px'
    hover-bg: '#ffffff0a'
    hover-border: '#ffffff66'
    use: 'Twin to primary — outlined on dark canvas.'
  button-ghost:
    background: 'transparent'
    text: '#ccccdc'
    padding: '8px 14px'
    radius: 6
    border: 'none'
    font: 'Inter 500 / 14px'
    hover-bg: '#ffffff0a'
    hover-text: '#ffffff'
    use: 'Tertiary — quiet nav-row action.'
  button-danger:
    background: '#f2495c'
    text: '#ffffff'
    padding: '12px 20px'
    radius: 6
    font: 'Inter 600 / 14px'
    use: 'Destructive action — uses chart-pink as the brand-coherent danger fill.'
  card:
    background: '#181b1f'
    border: '1px solid #ffffff14'
    radius: 8
    padding: '24px'
    hover-border: '#ffffff26'
    use: 'Feature card / capability tile — elevated panel with hairline border.'
  panel-mock:
    background: '#181b1f'
    border: '1px solid #ffffff14'
    radius: 4
    padding: '16px'
    label-family: mono
    palette: ['#f46800', '#37c2ba', '#5794f2', '#9170db', '#f2495c', '#fade2a', '#73bf69']
    use: 'In-product dashboard panel mock — 4px radius matches real Grafana chrome; multi-colour chart series.'
  metric-chip:
    background: 'transparent'
    text: '#9090a0'
    padding: '0 4px'
    font: 'Roboto Mono 500 / 11px / 0.05em tracking'
    use: 'Axis labels, metric names, dashboard tile titles — the monospace ubiquity signature.'
  input:
    background: '#0b0c0e'
    border: '1px solid #ffffff14'
    radius: 6
    padding: '10px 14px'
    font: 'Inter 400 / 14px'
    placeholder-color: '#9090a0'
    focus-ring: '0 0 0 2px #f46800'
    use: 'Form fields, search bar in nav.'
  badge-orange:
    background: 'rgba(244, 104, 0, 0.12)'
    text: '#f46800'
    padding: '4px 10px'
    radius: 4
    font: 'Roboto Mono 500 / 11px / uppercase / 0.05em tracking'
    use: 'Brand-tinted tag — version stamps, beta labels.'
  code-block:
    background: '#0b0c0e'
    border: '1px solid #ffffff0a'
    radius: 6
    padding: '20px 24px'
    font: 'Roboto Mono 400 / 14px / 1.55 line-height'
    use: 'PromQL / LogQL / config samples — first-class brand surface.'
  nav-link:
    background: 'transparent'
    text: '#ccccdc'
    padding: '8px 12px'
    radius: 4
    font: 'Inter 500 / 14px'
    hover-text: '#ffffff'
    use: 'Top-nav primary link — quiet hover, no underline.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-data: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  duration-instant: 80
  duration-fast: 150
  duration-standard: 200
  duration-slow: 320
  duration-chart: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce — chart animations replaced with snap-to-state, all transitions become opacity-only, durations halved.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: 'rgba(0, 0, 0, 0.40) 0 1px 3px'
  standard: 'rgba(0, 0, 0, 0.50) 0 4px 12px -2px'
  elevated: 'rgba(0, 0, 0, 0.60) 0 12px 32px -8px'
  glow-orange: '0 0 24px rgba(244, 104, 0, 0.32)'
  ring: '0 0 0 2px #f46800'

accessibility:
  contrast-text-on-bg: 17.4              # #ffffff on #111217 — AAA at all sizes
  contrast-text-muted-on-bg: 12.6        # #ccccdc on #111217 — AAA
  contrast-text-soft-on-bg: 5.7          # #9090a0 on #111217 — AA at body sizes
  contrast-text-on-brand: 4.5            # #ffffff on #f46800 — AA at body sizes
  contrast-link-on-bg: 7.2               # #f46800 link on #111217 — AAA at body sizes
  focus-ring: '2px solid #f46800 with 2px offset on dark canvas'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; chart legends keyboard-navigable; tab order matches visual flow.'
  aria-patterns: 'nav uses aria-label="Main"; chart series use aria-label with metric+value; data tables use proper <th scope> markup; live data zones use aria-live="polite"'
  data-viz: 'chart series carry both colour AND pattern (dash/dot/solid) so colour-blind users can distinguish; legend is keyboard-navigable'

dark-mode: 'native'                      # Grafana is dark-first — light theme is documented but the brand canvas is dark

lineage:
  summary: |
    Grafana is the open-source observability dashboard standard, originating
    in 2014 as a Kibana fork and growing into the de-facto chart-rendering
    layer for Prometheus, InfluxDB, Loki, Tempo, and a hundred other data
    sources. The marketing site renders the in-product UI at landing-page
    scale: dark `#111217` canvas, cool-grey hairlines, 4–8px panel radii,
    and the multi-colour chart palette (orange/teal/blue/purple/pink/
    yellow/green) appearing on every panel mock. The iconic `#f46800`
    orange — first used in the original 2014 release — has survived every
    brand refresh intact and operates as a single-hue brand axis (CTA
    fill, link colour, chart-series-one, heart-icon mark). Inter handles
    every text role on the marketing page (the in-product UI uses its own
    custom font stack), with **Roboto Mono** reserved for labels, metric
    chips, code blocks, and dashboard tickers — the monospace ubiquity is
    constant, which is what gives Grafana its "operator console" feel.
    Where Datadog uses a bright white canvas and a restrained purple,
    Grafana inverts: dark canvas, saturated orange, multi-colour chart
    palette in every panel mock. The combined effect is observability that
    looks like it was designed by people who run dashboards in production,
    not by people who only render them in screenshots.
  influences:
    - name: Prometheus
      role: Open-source observability lineage — dark dashboards, monospace tickers, multi-colour chart series.
      url: https://prometheus.io
    - name: Datadog
      role: Counterpoint reference — Grafana''s dark canvas + orange is the deliberate inverse of Datadog''s white canvas + purple.
      url: https://www.datadoghq.com
    - name: Bloomberg Terminal
      role: Deep-historical reference for monospace-everywhere data density on dark canvases.
      url: https://www.bloomberg.com/professional/products/bloomberg-terminal
    - name: Kibana
      role: Genealogical parent — Grafana forked from Kibana in 2014; the dark-canvas dashboard register inherits directly.
      url: https://www.elastic.co/kibana
    - name: Edward Tufte
      role: Data-density-first design philosophy; high-information-per-pixel charts.
---

## 1. Visual Theme & Atmosphere

Grafana''s marketing site renders the in-product UI at landing-page scale. The body canvas is a near-black `#111217` with a slight blue tilt — the same hex as the real product''s panel background — and the iconic `#f46800` orange (the same hue since the original 2014 release) does almost all the brand work as CTA fill, link colour, chart-series-one, and heart-icon mark. The page reads as if a senior SRE designed it: every component is borrowed from the dashboard, every label is monospace, every panel mock shows a real-looking chart with seven colour-coded series.

The signature gesture is **multi-colour chart density**. Every hero panel mock shows orange/teal/blue/purple/pink/yellow/green appearing together on a single tile, proving the platform is built for the case where you''re looking at fifteen series at once. This is the deliberate inverse of competitors who show stylised three-series charts: Grafana sells observability for *real* production, where dashboards have hundreds of metrics, not the marketing-friendly minimum.

Roboto Mono carries every metric label, axis tick, dashboard tile title, code sample, and small-cap label. The monospace ubiquity is what makes Grafana feel like an operator console rather than a SaaS marketing site — and what distinguishes it from Datadog (which hides its mono in dashboard chrome). Grafana puts the operator console *in front of you* on the homepage, and the type system reflects that.

Atmospheric vocabulary: *operator-console, dashboard-heritage, chart-dense, mono-ubiquitous, panel-mock-as-hero, observability-warm, Bloomberg-meets-Prometheus, dark-canvas-orange-pop, in-product-marketing, fifteen-series-fluent.* Where Linear ships engineered cool, Grafana ships engineered *warm* — the orange is what carries that warmth across an otherwise cool-toned dark surface.

**Key Characteristics**

- Near-black `#111217` canvas — slight blue tilt, never pure black
- Iconic `#f46800` orange — single-hue brand axis since 2014
- Multi-colour chart palette in every panel mock — 7 saturated series colours
- Inter for body and headlines, Roboto Mono for everything labelled
- 4-px panel radius (matches in-product Grafana chrome) — the defining shape token
- 8% white hairline borders (`#ffffff14`) — cool-grey panel dividers
- Mono ubiquity — labels, axis ticks, tile titles, code, captions
- Dense feature-table and integration-logo bands — high information density
- Real-looking chart mocks with realistic series — never stylised
- 96-px section rhythm — engineered, not editorial

## 2. Color Palette & Roles

### Primary

- **bg** `#111217` — body canvas, near-black with slight blue tilt; matches the in-product Grafana panel bg-1 hex.
- **bg-elevated** `#181b1f` — raised card / panel surface (panel bg-2).
- **bg-soft** `#0b0c0e` — darker footer / nav strip / code-block ground.
- **bg-deep** `#000000` — rare absolute-black; reserved for chart axis baselines only.
- **surface** `#202226` — secondary panel, hover ladder step (panel bg-3).
- **surface-hover** `#2a2d33` — hover state on cards.
- **surface-elevated** `#2c3137` — popover, dropdown, tooltip ground.
- **text** `#ffffff` — primary copy, hero headlines.
- **text-muted** `#ccccdc` — body paragraphs (Grafana grey-1).
- **text-soft** `#9090a0` — captions, axis labels, metadata.

### Brand

- **brand** `#f46800` — the iconic Grafana orange. Single-hue brand axis. Used for: primary CTA fill, link colour, chart-series-one, heart-icon mark, focus ring, hover accents.
- **brand-hover** `#dc5e00` — pressed state on solid orange CTAs.
- **brand-deep** `#c25400` — active/depressed.
- **brand-soft** `#3d1e07` — tinted brand surface for hero callouts and orange feature bands.
- **brand-tint** `rgba(244, 104, 0, 0.12)` — background tint for orange tags and badges.

### Multi-Colour Chart Palette

Grafana''s chart palette is the **brand''s second-most-recognisable element** after the orange itself. Every panel mock uses some subset of these seven series colours:

- **chart-orange** `#f46800` — series 1 (also the brand).
- **chart-teal** `#37c2ba` — series 2.
- **chart-blue** `#5794f2` — series 3.
- **chart-purple** `#9170db` — series 4.
- **chart-pink** `#f2495c` — series 5 (also semantic danger).
- **chart-yellow** `#fade2a` — series 6 (also semantic warning).
- **chart-green** `#73bf69` — series 7 (also semantic success).

These are reserved for **data visualisation and semantic state only**. They are not used as decorative fills, hero accents, or marketing-band backgrounds. Mixing chart palette into structural UI breaks the "real Grafana" register.

### Interactive

- **link** `#f46800` — default link is the brand orange. Underlined in body copy by default.
- **link-hover** `#ff8629` — brighter orange on hover; underline thickens.
- **selected-bg** `#2a2d33` — selected row/card.
- **disabled** `#6c6c80` — disabled text and control.
- **focus-ring** `#f46800` at 2px with 2px offset.

### Neutral Scale

- `#ffffff` text — primary
- `#ccccdc` text-muted (grey-1) — body
- `#9090a0` text-soft — captions
- `#6c6c80` text-faint — disabled
- `#2c3137` surface-elevated — popovers
- `#2a2d33` surface-hover — hover
- `#202226` surface — panels (bg-3)
- `#181b1f` bg-elevated — cards (bg-2)
- `#111217` bg — page canvas (bg-1)
- `#0b0c0e` bg-soft — footer / code

A ten-step cool-grey ramp tuned to OLED dark-mode viewing, with consistent perceptual steps for layered panel composition.

### Surface & Borders

- **border** `#ffffff14` — 8% white hairline; the default cool-grey panel divider. Used on every card, panel mock, code block, and table row.
- **border-strong** `#ffffff26` — 15% white for emphasised rules and outlined buttons.
- **border-soft** `#ffffff0a` — 4% white for the quietest division (between table rows, inside dense panel mocks).
- **border-brand** `rgba(244, 104, 0, 0.40)` — orange-tinted hairline on featured/hover cards.

### Shadow Colors

Grafana shadows are minimal and deeper-than-canvas. The brand relies on **tonal layering** for elevation: `#0b0c0e` → `#111217` → `#181b1f` → `#202226` → `#2a2d33` → `#2c3137` form a six-step ladder, separated by 8% white hairlines. Drop shadows appear only on modals (`rgba(0,0,0,0.60) 0 12px 32px -8px`) and orange-glow on focused buttons (`0 0 24px rgba(244, 104, 0, 0.32)`). Shadows are never blue-tinted or warm-tinted — pure black at varying opacity.

### Semantic

The semantic palette is **derived from the chart palette** rather than separate — a deliberate brand-coherence move:

- **success** `#73bf69` text on `rgba(115, 191, 105, 0.12)` bg — green from chart-series-7.
- **warning** `#fade2a` text on `rgba(250, 222, 42, 0.14)` bg — yellow from chart-series-6.
- **danger** `#f2495c` text on `rgba(242, 73, 92, 0.14)` bg — pink from chart-series-5.
- **info** `#5794f2` text on `rgba(87, 148, 242, 0.14)` bg — blue from chart-series-3.

Note the unusual-but-distinctive choice: warning is *yellow* (chart-yellow), not amber; danger is *pink* (chart-pink), not red. This keeps the entire visual system inside the dashboard register.

## 3. Typography Rules

### Font Family

- **Display & UI**: `Inter, "Helvetica Neue", -apple-system, system-ui, sans-serif` — the structured, calm, observability-default sans. Used at weights 500–800 for display, 500–600 for UI labels.
- **Body**: same Inter stack at weights 400–600. Body sits at 16px / 1.6 line-height.
- **Mono**: `"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace` — the brand''s ubiquitous monospace. Used for metric labels, axis ticks, dashboard tile titles, code samples, eyebrows, captions-tabular, and small-cap labels.
- **OpenType features**: `cv11 ss03` for Inter''s alternate single-storey `a` and curved `g`; `liga tnum zero` always on for Roboto Mono so columns of numbers align and slashed zero appears.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | Inter | 80px | 800 | 1.02 | -0.03em | cv11 | Homepage hero ceiling |
| Display | Inter | 64px | 700 | 1.05 | -0.02em | cv11 | Section intro at scale |
| H1 | Inter | 56px | 700 | 1.08 | -0.02em | liga | Page title |
| H2 | Inter | 44px | 700 | 1.10 | -0.018em | liga | Major section |
| H3 | Inter | 32px | 600 | 1.20 | -0.012em | — | Sub-section |
| H4 | Inter | 22px | 600 | 1.30 | -0.005em | — | Card heading |
| H5 | Inter | 18px | 600 | 1.35 | normal | — | Inline emphasis |
| Eyebrow | Roboto Mono | 12px | 600 | 1.40 | 0.10em | uppercase | Section pre-label — mono, not Inter |
| Body Large | Inter | 20px | 400 | 1.55 | normal | cv11 | Lede paragraph |
| Body | Inter | 16px | 400 | 1.60 | normal | cv11 | Default body |
| Body Small | Inter | 14px | 400 | 1.55 | normal | — | Captions, sidebars |
| Caption | Inter | 13px | 500 | 1.45 | normal | — | Image captions, helper |
| Caption Tabular | Roboto Mono | 13px | 500 | 1.45 | normal | tnum | Stats, inline metric callouts |
| Label | Roboto Mono | 11px | 500 | 1.30 | 0.05em | uppercase | Dashboard tile labels, axis ticks |
| Metric Chip | Roboto Mono | 11px | 500 | 1.30 | 0.05em | tnum | Inline metric chips, KPI numerators |
| Code | Roboto Mono | 14px | 400 | 1.55 | normal | liga | Block code samples (PromQL, LogQL) |
| Code Inline | Roboto Mono | 13px | 500 | 1.50 | normal | — | Inline `code` references |
| Code Micro | Roboto Mono | 11px | 400 | 1.40 | normal | — | Footnotes, axis-tick fallback |
| Button | Inter | 14px | 600 | 1.20 | normal | — | All button variants |

### Principles

- **Inter for prose, Roboto Mono for everything labelled.** This is the brand''s typographic discipline and the move that distinguishes Grafana from Datadog.
- **Mono ubiquity.** Eyebrows are mono. Metric chips are mono. Axis labels are mono. Code is mono. Captions-tabular are mono. The marketing site preserves the operator-console feel by never letting proportional fallback creep into label positions.
- **Display weight is heavy.** 700–800 only on hero and headlines. Lighter weights look generic — Grafana''s headlines earn impact through bulk plus negative tracking.
- **Negative tracking scales with size.** -0.03em at 80px, -0.02em at 56–64px, -0.018em at 44px, -0.012em at 32px, normal at 22px and below.
- **Body is calm and structured.** 16px / 1.6 line-height — generous enough to read prose, tight enough to maintain density.
- **Eyebrows use mono with exaggerated tracking.** 12px / 600 / uppercase / **0.10em** tracking — wider than typical because mono letterforms have inherent spacing.
- **OpenType discipline.** `tnum zero` always on for mono so panel-mock numbers align across rows.

## 4. Component Stylings

### Buttons

**Primary (Solid Orange)**
- Background: `#f46800` Grafana orange.
- Text: `#ffffff`, Inter 600 / 14px.
- Padding: `12px 20px`. Radius: `6px`. Border: none.
- Hover: bg → `#dc5e00`; transition `200ms ease-standard`.
- Active: bg → `#c25400`.
- Use: Primary CTA — *Get started, Try Grafana free, Talk to sales.*

**Secondary (Outlined)**
- Background: transparent. Text: `#ffffff`. Border: `1px solid #ffffff33`.
- Padding: `12px 20px`. Radius: `6px`. Font: Inter 600 / 14px.
- Hover: bg → `#ffffff0a`; border → `#ffffff66`.
- Use: Twin to primary — *View pricing, Read the docs.*

**Ghost (Tertiary)**
- Background: transparent. Text: `#ccccdc`. No border.
- Padding: `8px 14px`. Radius: `6px`. Font: Inter 500 / 14px.
- Hover: bg → `#ffffff0a`; text → `#ffffff`.
- Use: Quietest action — nav-row links, footer links.

**Danger (Chart-Pink)**
- Background: `#f2495c`. Text: `#ffffff`. Same shape as primary.
- Hover: bg → `#df3243`. Use: Destructive action — *Delete dashboard, Remove integration.* Uses chart-pink as the brand-coherent danger fill (not red).

### Cards

**Feature Card**
- Background: `#181b1f`. Border: `1px solid #ffffff14`. Radius: `8px`. Padding: `24px`.
- Shadow: none.
- Hover: border → `#ffffff26`; transition `200ms`.
- Use: Capability tile, feature card, integration listing.

**Panel Mock (Dashboard Hero)**
- Background: `#181b1f`. Border: `1px solid #ffffff14`. Radius: `4px`. Padding: `16px`.
- Title: 11px Roboto Mono 500 / uppercase / 0.05em tracking, colour `#9090a0`.
- Chart area: SVG line/area chart with 3–7 series from the chart palette.
- Axis labels: 10–11px Roboto Mono 400, colour `#9090a0`.
- Legend: bottom row of mono chips, colour-coded, comma-separated.
- Use: Hero illustration — the brand''s signature decorative surface. The 4-px radius matches in-product Grafana panel chrome exactly.

### Badges, Tags, Pills

**Brand Tag (Orange)** — bg `rgba(244, 104, 0, 0.12)`, text `#f46800`, radius `4px`, padding `4px 10px`, font Roboto Mono 500 / 11px / uppercase / 0.05em tracking. Used for version stamps, beta labels, "New" indicators.

**Status Pill (Semantic)** — bg from semantic palette tint, text from semantic colour, radius `4px`, padding `4px 10px`, font Roboto Mono 500 / 11px / uppercase. Used inside panel mocks for state indicators (green/healthy, yellow/warning, pink/critical).

**Metric Chip** — no background, text `#9090a0`, font Roboto Mono 500 / 11px / 0.05em tracking. Used as inline labels next to metric values: `cpu_usage  64%`.

### Inputs / Forms

- Background: `#0b0c0e`. Border: `1px solid #ffffff14`. Radius: `6px`. Padding: `10px 14px`.
- Font: Inter 400 / 14px. Placeholder: `#9090a0`.
- Focus: `0 0 0 2px #f46800` ring; border → `#ffffff26`.
- Error: border → `#f2495c`; ring → `rgba(242, 73, 92, 0.30)`.
- Helper: caption 13px text-soft below.
- Search variant: prefix magnifier icon at 16px in `#9090a0`; mono variant available for query inputs.

### Navigation

- Header height `64px`. Background `#0b0c0e` with bottom border `1px solid #ffffff14`.
- Logo: Grafana wordmark with the orange heart-icon mark.
- Nav links: Inter 500 / 14px, colour `#ccccdc`, padding `8px 12px`, radius `4px`. Hover → `#ffffff`. No underline.
- Mega-menu drops on hover for "Products," "Solutions," "Resources" — dark popover with grouped link rails.
- Right-side: search input + ghost-button "Sign in" + primary orange "Try free" CTA.
- Mobile: hamburger sheet, full-height drawer.

### Optional Components

**Code Block (PromQL/LogQL)** — Roboto Mono 14px, bg `#0b0c0e`, border `1px solid #ffffff0a`, radius `6px`, padding `20px 24px`. Language label top-right in 10px / 500 / uppercase mono. Copy-to-clipboard icon button on hover.

**Inline Code** — Roboto Mono 13px / 500, bg `#ffffff0a`, padding `2px 6px`, radius `4px`.

**Tooltip** — bg `#2c3137`, text `#ffffff`, radius `4px`, padding `6px 10px`, font Inter 12px / 500. Subtle border `1px solid #ffffff14`. Mono variant for metric tooltips.

**Modal** — bg `#181b1f`, radius `8px`, shadow `rgba(0,0,0,0.60) 0 12px 32px -8px`, max-width `560px`. Backdrop `rgba(0,0,0,0.70)`.

**Chart Legend** — horizontal row of `[colour-square] [metric-label]` pairs. Colour squares 8×8px filled with chart palette colour; labels 11px Roboto Mono 500 / 0.05em. Keyboard-navigable for a11y.

**Time-Range Selector** — pill button group with Roboto Mono 12px labels (`5m, 15m, 1h, 6h, 24h, 7d`). Active state: bg `#2a2d33`, text `#f46800`.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 96, 128 — tight increments at the bottom for dense panel composition, wider gaps at the top for section rhythm.
- **Density observation**: Grafana is **high-density** by tech-page standards. Feature tables show 5–8 columns of data; integration-logo walls show 30+ logos in a single grid; panel mocks pack 5–7 chart series per tile. Whitespace is restrained, used to delineate sections rather than to "let things breathe."

### Grid & Container

- **Page max width**: `1280px` — the dev-tool standard.
- **Site gutter**: `clamp(20px, 4vw, 48px)`.
- **Grid**: 12 columns with 24px gutters. Hero blocks span full width; capability rails span 8 columns with a 4-column panel-mock beside; feature comparison tables use full 12-column width.
- **Hero treatment**: full-bleed dark canvas; headline confined to 720–800px column anchored left; primary panel-mock illustration fills right half at 8 columns.

### Whitespace Philosophy

The whitespace establishes **information density first**. Grafana pages aren''t sparse — they''re full of data, panel mocks, integration logos, metric tables. The whitespace delineates major sections (96px gutters between hero/feature/customer/footer bands) but tightens inside dense zones (16–24px between panel mocks in a grid). The brand reads as "this is what production looks like" — a deliberate move against marketing-friendly minimalism.

### Section Cadence

- Hero (dark + panel mock right) → Feature Rail (3-up cards) → Integration Wall (30+ logos in greyscale, hover restores colour) → Solution Tabs (PromQL/LogQL/Tempo/Pyroscope tabbed code samples) → Customer Case Studies (testimonial cards with metric chips) → Footer (deeper dark `#0b0c0e`).
- The integration wall is the brand''s signature density move — proves Grafana''s reach via sheer visual count.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Decorative dividers, micro-tags |
| Panel | 4px | Dashboard panel mocks (matches in-product Grafana chrome) — defining shape token |
| Standard (sm) | 4px | Compact chips, status pills, axis tick boxes |
| Button | 6px | All button variants — slightly tighter than the 8-px tech standard |
| Comfortable (md) | 6px | Inputs, dropdowns, code blocks |
| Relaxed (lg) | 8px | Cards, modals, callouts |
| Featured (xl) | 12px | Rare — large hero banners only |
| Pill | 9999px | Tags, metric chips, status indicators inside panel mocks |

Grafana''s defining shape token is **4px panel radius** — the corner of every dashboard tile in the real product. The marketing site preserves this religiously: panel mocks always land at 4px, never 8px or 12px, because that single decision is what ties the marketing illustration to the in-product UI.

Buttons land at **6px**, slightly tighter than the dev-tool 8-px default — another in-product alignment. Cards relax to 8px to differentiate them visually from the panel mocks they often contain.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, hero, body sections |
| 1 | Tonal layering (`#181b1f` on `#111217`) | Cards, panel mocks |
| 2 | Tonal `#202226` step-up | Hover-lifted cards, surface emphasis |
| 3 | `rgba(0,0,0,0.40) 0 1px 3px` | Sticky nav, dropdown |
| 4 | `rgba(0,0,0,0.50) 0 4px 12px -2px` | Popovers, tooltips |
| 5 | `rgba(0,0,0,0.60) 0 12px 32px -8px` | Modals, dialogs |
| Glow | `0 0 24px rgba(244, 104, 0, 0.32)` | Focused button, focus-ring on key CTA |

### Shadow Philosophy

Grafana''s depth is **tonal-first, shadow-last**. The brand stacks `#0b0c0e` → `#111217` → `#181b1f` → `#202226` → `#2a2d33` → `#2c3137` as a six-step ladder, with each step separated by an 8% white hairline. Cards lift off the canvas via tonal contrast alone; hover states deepen the hairline rather than introducing a shadow. Drop shadows are reserved for modals and popovers (where they distinguish overlay from content) and for the orange glow on focused/active CTAs (where they signal interactivity). Shadows are never colour-tinted — pure black at varying opacity, the most boring possible choice, which is exactly the right choice for an observability brand: shadows shouldn''t draw attention from the data.

## 8. Interaction & Motion

### Easing Curves

- `ease-standard`: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style; default for hover, focus, colour transitions.
- `ease-emphasized`: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; modal enter, hero reveal.
- `ease-data`: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — Grafana''s signature easing for chart-series animations; smooth deceleration mimics real-time data updates.

### Duration Buckets

- **Instant (80ms)** — focus rings, tab switches.
- **Fast (150ms)** — colour transitions, link hovers, ghost-button bg fades.
- **Standard (200ms)** — button hover, card hover, dropdown reveal.
- **Slow (320ms)** — modal enter/exit, section fade-in.
- **Chart (480ms)** — chart-series entry animations (ease-data); represents "data flowing in."

### Per-Component Micro-States

- **Solid orange button hover**: bg colour shift only — no lift, no scale. `transition: background-color 200ms ease-standard`.
- **Card hover**: border deepens from `#ffffff14` to `#ffffff26`; no shadow, no translate.
- **Panel-mock chart-series hover**: legend chip highlights at 100% opacity, other series dim to 50%; series line thickens 1px → 2px.
- **Link hover**: colour `#f46800` → `#ff8629` over 150ms; underline thickens.
- **Input focus**: 2px orange ring fades in over 80ms; border darkens to `#ffffff26`.
- **Nav link active**: bg `#ffffff0a` fades in over 200ms; no translate.
- **Code block copy-button**: appears on parent hover at 150ms opacity fade; checkmark replaces icon for 1500ms after copy.
- **Time-range selector active**: text colour shifts to `#f46800` over 150ms; bg fades in.

### Page Transitions

Hero panel-mock chart-series animate in left-to-right over 480ms with `ease-data`, simulating live data flowing in. Below-fold sections use `IntersectionObserver` to fade in at 75% viewport, 320ms duration, no translate. Integration logos wall: greyscale by default, individual logo restores colour on hover over 150ms.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` — all transitions become opacity-only, durations halved. **Critical**: chart-series entry animations are replaced with snap-to-state (no horizontal drawing); time-range changes update charts instantly without animation; the integration-wall logos do not animate. Glow shadows are preserved.

## 9. Accessibility & A11y

### Contrast Pairs

- **`#ffffff` text on `#111217` bg**: 17.4:1 — AAA at all sizes.
- **`#ccccdc` text on `#111217` bg**: 12.6:1 — AAA at body sizes.
- **`#9090a0` text on `#111217` bg**: 5.7:1 — AA at body sizes.
- **`#ffffff` text on `#f46800` brand**: 4.5:1 — AA at body sizes; safe for buttons.
- **`#f46800` link on `#111217` bg**: 7.2:1 — AAA at body sizes.
- **`#73bf69` text on `#111217` bg (success)**: 9.1:1 — AAA.
- **`#f2495c` text on `#111217` bg (danger)**: 5.4:1 — AA.

### Focus Indicators

- Default focus ring: `0 0 0 2px #f46800` with 2px offset on dark canvas.
- On orange fills: `0 0 0 2px #ffffff` inverted with 2px offset.
- All interactive surfaces (buttons, links, inputs, chart legends, time-range selectors) must have visible focus state.

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with skip-link to main content.
- **Mega-menu**: `<button aria-expanded aria-haspopup="menu">` with `<ul role="menu">` children.
- **Chart series**: each series exposes `aria-label="cpu_usage: 64% at 14:32"` so screen readers announce metric+value+timestamp.
- **Data tables**: proper `<th scope="col">` and `<th scope="row">` markup; `<caption>` describing table content.
- **Live regions**: `aria-live="polite"` on dashboards that auto-refresh, so updated values announce.
- **Time-range selector**: `role="radiogroup" aria-label="Time range"` with `<button role="radio" aria-checked>` children.
- **Code blocks**: copy-to-clipboard exposes `aria-label="Copy PromQL query"`; copy success uses `aria-live`.

### Keyboard Navigation

- Tab order matches visual flow: skip-link → top-nav → mega-menu trigger → hero CTA pair → main content → footer.
- All buttons, links, inputs, code-copy controls, chart legends, time-range selectors reachable via Tab.
- `Esc` closes modals, mega-menus, dropdowns.
- Arrow keys navigate within tab groups (PromQL/LogQL/Tempo tabs), radio groups (time-range selector), and listboxes (search results).
- Chart legend supports arrow-key series navigation; Enter toggles series visibility.

### Data Visualisation Accessibility

The chart palette colour-codes seven series — for colour-blind users, **patterns must accompany colour**. Series 1–7 use distinct line styles (solid, dashed, dotted, dash-dot, long-dash, double-dash, dot-dash) so the seven series remain distinguishable in greyscale. Legend includes both colour swatch AND pattern preview. Marketing-side panel mocks should preserve this.

### Screen Reader Hints

- Decorative panel-mock chart paths have `aria-hidden="true"`; the data is exposed via the visible legend (which is keyboard-navigable).
- Icon-only buttons (search magnifier, copy clipboard) have `aria-label`.
- Integration-logo walls expose `<img alt="Prometheus logo">` for each logo; greyscale-on-hover-restore behaviour does not affect screen reader output.

### Reduced Motion

Honoured globally. All translate, scale, parallax animations become opacity-only; chart-series animations snap to final state; time-range changes update instantly.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single column, full-bleed cards, hamburger nav |
| Tablet | 640–1024px | 2-up feature grids, stacked hero |
| Desktop | 1024–1280px | Full 12-col grid, 8+4 hero composition with panel mock |
| Wide | 1280–1536px | Site max width hits at 1280; gutters expand |
| Ultra | > 1536px | Page locks to 1280, gutters absorb extra width |

### Touch Targets

- Minimum tap target: 44×44px (WCAG AAA).
- Buttons: 44px minimum height on mobile.
- Nav link tap area: 44×44px even when visual padding is smaller.
- Chart legend chips: 32×32px tap target with extra hit area.
- Time-range selector buttons: 40×32px (acceptable for grouped controls).

### Collapsing Strategy

- **Header**: full nav at ≥1024px; hamburger sheet below with full-height drawer.
- **Hero**: 80px headline → 56px → 40px across desktop/tablet/mobile.
- **Panel-mock illustration**: 600×400px on desktop → 100% width on tablet → simplified mobile variant (3 series only) on mobile.
- **Feature grid**: 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Integration wall**: 8-col grid → 4-col → 3-col across sizes.
- **Section spacing**: 96px → 64px → 48px across sizes.

### Image Behavior

- Panel-mock SVGs use `aspect-ratio` lock to prevent layout shift.
- Integration logos use `srcset` 1x/2x/3x; greyscale-on-hover via CSS filter.
- Hero panel mocks use `loading="eager"`; below-fold lazy-load.
- Customer logos lazy-load with explicit `width`/`height`.

### Container Queries

Used inside panel mocks to switch layout at 320px container width (legend below chart vs. legend right of chart); used inside feature cards to toggle icon position.

## 11. Content & Voice

### Tone

**Operator-precise, warm-direct, anti-marketing.** Grafana writes like a senior SRE wrote the copy and a marketing team approved it without softening. Headlines state mechanism plainly ("Open observability, your way"); subheads explain capability ("Visualize metrics, logs, and traces from any data source"); features list verbs ("Query, alert, and visualize"). The voice borrows Linux man-page terseness without the hostility, plus a measured warmth that distinguishes the brand from the SRE-cold register of Datadog or NewRelic.

### Microcopy Patterns

- **Button verbs**: "Try Grafana free," "Get started," "Read the docs," "Talk to sales," "Browse integrations." Never "Sign up free!", never "Get started today →".
- **Error messages**: "Query timeout: data source did not respond in 30s. Check [data source health]." Specific, actionable, includes the relevant metric and a remediation link.
- **Success confirmations**: "Dashboard saved." "Alert created." Brief, factual, no exclamation.
- **Loading states**: "Loading metrics…" "Querying data source…" — present continuous, no anthropomorphism.
- **Empty states**: "No data points in this range. Try expanding the time range or check your query." — practical guidance, never apologetic.

### Empty States

What they say: explain the absence and offer the remediation. *"No alerts have fired in this range. Configure alert rules in [Alerting]."*
What they don''t say: "Whoops!", "Oops!", "Nothing here yet — that''s OK!" Empty states in observability are *useful information* (no problems = good), not a UX failure.

### CTA Verb Conventions

- Primary on hero: "Try Grafana free," "Get started"
- Secondary: "View pricing," "Read the docs," "See a demo"
- Footer: "Browse plugins," "Read the blog," "Join Grafana Labs"
- Documentation: "Read more," "View example," "Open the playground"

The brand uses **imperative verbs** almost exclusively. It avoids urgency ("now!", "today!") and avoids feature-naming CTAs ("Try Mimir," "Try Loki" only on those product''s landing pages, not on grafana.com).

## 12. Dark Mode & Theming

**Dark-mode-native.** The near-black `#111217` canvas IS the brand. Grafana ships a documented light theme for the in-product UI (toggleable via user preference), but the marketing surface is dark by default and the brand''s identity is built around the dark canvas — switching to light collapses the operator-console metaphor entirely.

The light variant (in-product only, never marketing) keys to a `#fafafa` canvas with `#1f1f20` text, preserves the orange `#f46800` brand at full saturation, and lifts panels to `#ffffff` over the cream-grey ground. The chart palette holds at full saturation across both modes — orange/teal/blue/purple/pink/yellow/green look identical. Borders shift to `rgba(0, 0, 0, 0.12)`.

```yaml
# Light-theme key swaps (in-product UI only — marketing stays dark)
bg: '#fafafa'
bg-elevated: '#ffffff'
bg-soft: '#f4f5f5'
surface: '#f4f5f5'
surface-hover: '#e9ecef'
text: '#1f1f20'
text-muted: '#464c54'
text-soft: '#666666'
border: 'rgba(0, 0, 0, 0.12)'
border-strong: 'rgba(0, 0, 0, 0.20)'
# Brand orange and chart palette hold at full saturation across both modes
brand: '#f46800'
chart-orange: '#f46800'
chart-teal: '#37c2ba'
chart-blue: '#5794f2'
chart-purple: '#9170db'
chart-pink: '#f2495c'
chart-yellow: '#fade2a'
chart-green: '#73bf69'
```

## 13. Lineage & Influences

Grafana''s design DNA is **dashboard-heritage open-source observability**. The dark canvas + multi-colour chart palette + monospace ubiquity is a direct visual descendant of Kibana (from which Grafana forked in 2014), Prometheus (which Grafana renders charts for), and the deep-historical reference of the Bloomberg Terminal — the original "monospace data on a dark canvas" institutional register. Where Datadog reaches for a bright white canvas and a restrained corporate purple, Grafana inverts every choice: dark canvas, saturated orange, multi-colour chart palette in every panel mock, monospace labels everywhere.

What it inherits: Kibana''s dark-IDE register, Prometheus''s open-source community-led aesthetic, Bloomberg Terminal''s monospace-everywhere data density, and Edward Tufte''s data-density-first design philosophy (high information per pixel, minimal decorative chrome). What it borrows from contemporaries: Linear''s tonal-grey layering, Vercel''s dark-canvas confidence, and Inter as the "structured calm sans." What it rejects: bright-white SaaS canvases, restrained-purple corporate-marketing register, stylised three-series demo charts, illustrated cartoon characters, gradient meshes, and any "consumer SaaS" softness.

**Named influences:**

- **Prometheus** — open-source observability lineage; dark dashboards, monospace tickers, multi-colour chart series. *https://prometheus.io*
- **Datadog** — counterpoint reference; Grafana''s dark canvas + orange is the deliberate inverse of Datadog''s white canvas + purple. *https://www.datadoghq.com*
- **Bloomberg Terminal** — deep-historical reference for monospace-everywhere data density on dark canvases. *https://www.bloomberg.com/professional/products/bloomberg-terminal*
- **Kibana** — genealogical parent; Grafana forked from Kibana in 2014, the dark-canvas dashboard register inherits directly. *https://www.elastic.co/kibana*
- **Edward Tufte** — data-density-first design philosophy; high information per pixel, minimal chartjunk.
- **Linear** — tonal-grey layering for depth instead of explicit drop shadows. *https://linear.app*
- **NASA Mission Control consoles** — visual ancestor for the operator-console register; multi-screen multi-series real-time data displays.

## 14. Do's and Don'ts

### Do

- **Do** keep the orange `#f46800` as the only brand-axis colour; the chart palette (teal/blue/purple/pink/yellow/green) is for data series and semantic state, not for marketing decoration.
- **Do** use Roboto Mono for every metric label, axis tick, eyebrow, and code sample — the monospace ubiquity is the brand''s operator-console signature.
- **Do** render multi-colour chart panels in hero illustrations; the seven-series default scheme is the strongest density signal Grafana owns.
- **Do** match in-product dashboard chrome: 4-px panel radii, 8% white hairline borders, mono labels.
- **Do** show realistic chart mocks with 5–7 series — never stylised three-series marketing simplifications.
- **Do** keep the canvas at `#111217` with its slight blue tilt — pure black flattens the page; lighter grey reads like Datadog.
- **Do** use the chart palette pinks and yellows as semantic danger and warning — the brand-coherent move that ties marketing to in-product UX.
- **Do** include patterns alongside colour in chart series (dash/dot/solid) for colour-blind accessibility.
- **Do** show the integration logo wall as a density flex — 30+ logos in greyscale, restoring colour on hover.
- **Do** use 96-px section rhythm — engineered, not editorial.

### Don't

- **Don''t** lighten the canvas to grey or off-white — the near-black `#111217` is what makes Grafana read as observability instead of SaaS.
- **Don''t** round panel mocks above 4-px radii; the tight corner is what ties marketing illustrations to the real in-product dashboard.
- **Don''t** swap Inter for a more expressive display sans — Grafana''s typography earns trust through restraint, not personality.
- **Don''t** use red `#dc2626` for danger — use chart-pink `#f2495c`. The semantic palette must derive from the chart palette for brand coherence.
- **Don''t** introduce decorative gradients, mesh backgrounds, or hero animations beyond chart-series entry. The brand reads as flat-tonal.
- **Don''t** show stylised three-series charts in marketing mocks — Grafana sells production-density observability; under-densifying the panel mocks undersells the product.
- **Don''t** drop the monospace from labels — proportional labels in axis ticks or eyebrows break the operator-console register.
- **Don''t** use frosted-glass / backdrop-blur effects beyond the sticky nav.
- **Don''t** mix the chart palette colours into structural UI (button fills, hero accents) — they''re reserved for data.
- **Don''t** crowd the orange CTA on every section — the orange should appear once per major band as a single brand pop.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #111217
bg-elevated: #181b1f
bg-soft: #0b0c0e
surface: #202226
text: #ffffff
text-muted: #ccccdc
brand-orange: #f46800
chart-teal: #37c2ba
chart-blue: #5794f2
chart-purple: #9170db
chart-pink: #f2495c
chart-yellow: #fade2a
chart-green: #73bf69
border: rgba(255, 255, 255, 0.08)
```

### Example Component Prompts

1. **"Create a hero in Grafana style — near-black `#111217` canvas. Headline at 80px Inter 800 with -0.03em tracking, white text. Lede at 20px Inter 400 / 1.55 line-height in `#ccccdc`. Primary CTA: solid orange `#f46800` at 6px radius / 12px / 20px padding / Inter 600 / 14px. Right half (8 of 12 cols): a panel-mock illustration with 5 chart series (orange, teal, blue, purple, green) on a `#181b1f` panel with 4px radius and `#ffffff14` hairline border."**

2. **"Design a dashboard panel mock — `#181b1f` background, 4px radius (matches in-product Grafana), `1px solid #ffffff14` border, 16px padding. Title top-left in Roboto Mono 11px / 500 / uppercase / 0.05em tracking, colour `#9090a0`. SVG line chart with 5 series from the chart palette (`#f46800`, `#37c2ba`, `#5794f2`, `#9170db`, `#73bf69`). Legend below with `[colour-square] [metric-label]` pairs in mono 11px."**

3. **"Build a code block for a PromQL sample — `#0b0c0e` background, 6px radius, `1px solid #ffffff0a` border, 20px / 24px padding. Roboto Mono 14px / 1.55 line-height for syntax. Language label top-right in mono 10px / 500 / uppercase. Copy-to-clipboard icon button revealed on hover at 32×32px tap target."**

4. **"Render a feature card — `#181b1f` background, 8px radius, `1px solid #ffffff14` border, 24px padding. Eyebrow in Roboto Mono 12px / 600 / uppercase / 0.10em tracking, colour `#f46800`. Card heading in Inter 22px / 600. Body in Inter 16px / 400 / 1.6 line-height in `#ccccdc`. Hover: border deepens to `#ffffff26`."**

5. **"Compose an integration-logo wall — 8-column grid of 30+ logos, each 80×40px, greyscale by default via `filter: grayscale(100%) opacity(0.6)`. On hover, individual logo restores colour over 150ms. Caption above in Roboto Mono 12px / 600 / uppercase / 0.10em: ''CONNECTS WITH 100+ DATA SOURCES''."**

6. **"Create the primary nav — 64px header with `#0b0c0e` background and bottom border `1px solid #ffffff14`. Grafana wordmark + heart-icon in `#f46800` left. Inter 500 / 14px nav links in `#ccccdc` with `#ffffff` hover, padding 8px / 12px, radius 4px. Right-side: search input + ghost ''Sign in'' button + primary orange ''Try free'' CTA at 6px radius."**

### Iteration Guide

1. **Start with `#111217`, not pure black.** The slight blue tilt is what makes the canvas read as "Grafana panel" rather than generic dark mode.
2. **Add a panel mock to every hero.** If there''s no chart in the illustration, you''re missing the brand''s defining gesture. 5–7 chart series, multi-colour, on a 4-px-radius panel.
3. **Make the labels mono.** Eyebrows, axis ticks, metric chips, code samples — Roboto Mono. If a label is in Inter, it''s wrong.
4. **Use the chart palette for data only.** Buttons, hero accents, decorative fills must be the brand orange `#f46800`. Teal/blue/purple/pink/yellow/green appear *only* in chart series and semantic state.
5. **Tighten the radii.** 4-px panel mocks, 6-px buttons, 8-px cards. The tight corners are what tie marketing to in-product UI.
6. **Drop the shadow, lift the tone.** Replace box-shadows with the `#111217` → `#181b1f` → `#202226` tonal step-up.
7. **Show density, not minimalism.** Integration walls with 30+ logos, feature tables with 6 columns, panel mocks with 7 series. Density IS the marketing.
8. **Calm the verbs.** Replace "Sign up free!" with "Try Grafana free"; replace "Learn more →" with "Read the docs". The voice is operator-precise.
