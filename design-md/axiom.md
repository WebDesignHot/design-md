---
name: Axiom
tagline: 'Deep-navy observability with a cyan electric accent — Inter for body, JetBrains Mono for every event label, and a structural grid that reads as logs at planet scale.'
updated_at: 2026-05-06T08:15:13+12:00
published_at: 2026-05-03T16:49:18+12:00
author: webdesignhot
source_url: https://axiom.co
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, structured, sans, mono, cool, bright]
preview_swatch: ['#0a0e1a', '#1aaaff', '#ffffff']
related: [vercel, linear, supabase]
description: 'Axiom''s site is a deep-navy observability surface — a `#0a0e1a` near-black canvas with a slight blue tilt, a single electric `#1aaaff` cyan accent, and Inter + JetBrains Mono carrying the entire typographic load. The layout is structural and grid-disciplined, every code sample is mono, and product mocks lean into log-stream density (rows of timestamped events, JSON payloads, multi-series charts). The visual register is "infrastructure for serious teams" — closer to Linear''s structural rigour than Datadog''s enterprise density, with a colder palette than Grafana''s warm orange. The signature gesture is the log-stream mock as hero illustration: rows of timestamped events with monospace severity tags rendered at marketing scale, often as the page''s first visual.'

colors:
  bg: '#0a0e1a'                       # body canvas — deep navy with blue tilt
  bg-soft: '#06080f'                  # darker footer / nav band / code-block ground
  bg-elevated: '#111729'              # raised card surface
  bg-deep: '#03050a'                  # deepest tier — under code-block highlights
  surface: '#161d33'                  # secondary panel
  surface-hover: '#1d2540'            # hover state on cards
  surface-active: '#243057'           # pressed state
  surface-elevated: '#1a2240'         # elevated panel above surface
  text: '#ffffff'                     # primary copy
  text-strong: '#ffffff'              # headline-grade
  text-muted: '#b8c0d4'               # body paragraphs
  text-soft: '#7a86a3'                # captions, metadata, log timestamps
  text-faint: '#4a5575'               # disabled, fine-print
  text-on-brand: '#ffffff'
  text-on-light: '#0a0e1a'
  brand: '#1aaaff'                    # the electric cyan, single-hue brand axis
  brand-hover: '#0e8ed8'              # pressed state
  brand-active: '#0c7ec0'             # active/focus state
  brand-soft: '#0a3050'               # tinted brand surface for callouts
  brand-deep: '#063052'               # deepest cyan for type on brand-soft
  brand-light: '#5cc4ff'              # lighter cyan variant
  on-brand: '#ffffff'
  link: '#1aaaff'                     # links match brand
  link-hover: '#5cc4ff'
  accent-cyan: '#1aaaff'              # primary brand accent
  accent-violet: '#9c5cff'            # secondary illustration accent
  accent-green: '#22c55e'             # status / success / log-info
  accent-amber: '#f59e0b'             # warning indicator in log mocks
  accent-red: '#ef4444'               # error indicator in log mocks
  accent-pink: '#ec4899'              # rare highlight on dashboard mocks
  border: '#ffffff14'                 # ~8% white hairline
  border-strong: '#ffffff28'          # stronger divider
  border-soft: '#ffffff0a'            # softer divider for code blocks
  border-brand: '#1aaaff'             # focus border
  shadow-color: 'rgba(3, 5, 10, 0.50)'      # ambient
  shadow-color-md: 'rgba(3, 5, 10, 0.65)'   # standard
  shadow-color-lg: 'rgba(3, 5, 10, 0.80)'   # elevated
  shadow-glow-cyan: 'rgba(26, 170, 255, 0.20)' # rare brand glow
  log-info: '#1aaaff'
  log-warn: '#f59e0b'
  log-error: '#ef4444'
  log-success: '#22c55e'
  success: '#22c55e'
  warning: '#f59e0b'
  danger: '#ef4444'
  info: '#1aaaff'
  code-bg: '#06080f'
  code-keyword: '#9c5cff'
  code-string: '#22c55e'
  code-comment: '#7a86a3'
  code-number: '#f59e0b'
  code-operator: '#1aaaff'

typography:
  display:
    family: 'Inter, "Inter Variable", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [500, 600, 700]
    opentype-features: "'cv11', 'ss01'"
  body:
    family: 'Inter, "Inter Variable", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400, 500, 600]
    opentype-features: "'liga', 'calt', 'zero'"
  scale:
    display-hero:      { size: 72, weight: 600, lineHeight: 1.05, tracking: '-0.025em', family: display, opentype: "'ss01'" }
    display-xl:        { size: 60, weight: 600, lineHeight: 1.08, tracking: '-0.02em',  family: display }
    display-lg:        { size: 48, weight: 600, lineHeight: 1.10, tracking: '-0.02em',  family: display }
    display-md:        { size: 36, weight: 600, lineHeight: 1.15, tracking: '-0.015em', family: display }
    display-sm:        { size: 28, weight: 600, lineHeight: 1.25, tracking: '-0.01em',  family: display }
    title-lg:          { size: 24, weight: 600, lineHeight: 1.30, tracking: '-0.005em', family: display }
    title-md:          { size: 20, weight: 600, lineHeight: 1.35, tracking: 0,          family: body }
    title-sm:          { size: 16, weight: 600, lineHeight: 1.40, tracking: 0,          family: body }
    body-lg:           { size: 18, weight: 400, lineHeight: 1.60, tracking: 0,          family: body }
    body-md:           { size: 16, weight: 400, lineHeight: 1.60, tracking: 0,          family: body }
    body-sm:           { size: 14, weight: 400, lineHeight: 1.55, tracking: 0,          family: body }
    caption:           { size: 13, weight: 500, lineHeight: 1.40, tracking: 0,          family: body }
    label-uppercase:   { size: 12, weight: 500, lineHeight: 1.40, tracking: '0.04em',   family: mono, transform: uppercase }
    code-md:           { size: 13, weight: 400, lineHeight: 1.60, tracking: 0,          family: mono }
    code-sm:           { size: 12, weight: 400, lineHeight: 1.55, tracking: 0,          family: mono }
    code-micro:        { size: 11, weight: 500, lineHeight: 1.40, tracking: 0,          family: mono }
    log-row:           { size: 13, weight: 400, lineHeight: 1.50, tracking: 0,          family: mono, notes: 'tabular-nums via zero feature' }
    log-timestamp:     { size: 12, weight: 400, lineHeight: 1.50, tracking: 0,          family: mono }
    button:            { size: 14, weight: 500, lineHeight: 1.0,  tracking: 0,          family: body }
    nav-link:          { size: 14, weight: 500, lineHeight: 1.40, tracking: 0,          family: body }

radius:
  micro: 2
  xs: 4
  sm: 6
  md: 8
  lg: 12
  xl: 16
  pill: 9999

spacing:
  base: 4
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section: 96
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1240
  prose-width: 720
  header-height: 64

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: md
    padding: '10px 18px'
    height: 40
    use: 'every primary CTA — Start free, Talk to sales'
  button-secondary:
    backgroundColor: transparent
    textColor: text
    rounded: md
    padding: '10px 18px'
    height: 40
    border: '1px solid #ffffff33'
    use: 'paired secondary action — View docs'
  button-ghost:
    backgroundColor: transparent
    textColor: text-muted
    rounded: md
    padding: '10px 18px'
    height: 40
    use: 'tertiary text-link — Read the blog'
  button-dark:
    backgroundColor: bg-soft
    textColor: text
    rounded: md
    padding: '10px 18px'
    height: 40
    border: '1px solid #ffffff14'
    use: 'sit-on-elevated-surface secondary action'
  card-feature:
    backgroundColor: bg-elevated
    textColor: text
    rounded: lg
    padding: 32
    border: '1px solid #ffffff14'
    use: 'standard feature card'
  card-log-stream:
    backgroundColor: bg-soft
    textColor: text
    rounded: lg
    padding: 0
    border: '1px solid #ffffff14'
    use: 'monospace log-stream mock — Axiom signature visual'
  card-code-window:
    backgroundColor: bg-soft
    textColor: text
    rounded: lg
    padding: 24
    border: '1px solid #ffffff0a'
    use: 'embeds query / config snippets'
  card-chart-mock:
    backgroundColor: bg-elevated
    textColor: text
    rounded: lg
    padding: 24
    border: '1px solid #ffffff14'
    use: 'multi-series line/area chart product mock'
  badge-pill:
    backgroundColor: bg-elevated
    textColor: text-muted
    rounded: pill
    padding: '4px 10px'
  badge-severity:
    backgroundColor: surface
    textColor: text
    rounded: sm
    padding: '2px 8px'
    use: 'log severity tag — INFO/WARN/ERROR/SUCCESS — color depends on level'
  text-input:
    backgroundColor: bg-elevated
    textColor: text
    rounded: md
    padding: '10px 14px'
    height: 40
    border: '1px solid #ffffff14'
  cta-band:
    backgroundColor: bg-soft
    textColor: text
    rounded: lg
    padding: 64
    use: 'pre-footer "Start your free trial" CTA'
  top-nav:
    backgroundColor: bg
    textColor: text
    height: 64
    border-bottom: '1px solid #ffffff14'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-stream: 'linear'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — log-stream live-tail animation pauses, all transforms become opacity-only'

breakpoints:
  mobile: 640
  tablet: 768
  desktop: 1024
  wide: 1440

shadows:
  ambient: 'rgba(3, 5, 10, 0.50) 0 1px 2px'
  standard: 'rgba(3, 5, 10, 0.65) 0 4px 12px'
  elevated: 'rgba(3, 5, 10, 0.80) 0 12px 32px -8px'
  deep: 'rgba(3, 5, 10, 0.90) 0 24px 48px -12px'
  glow-cyan: 'rgba(26, 170, 255, 0.20) 0 16px 48px -8px'
  ring: '0 0 0 2px rgba(26, 170, 255, 0.50)'

accessibility:
  contrast-text-on-bg: 17.6              # AAA — #ffffff on #0a0e1a
  contrast-body-on-bg: 9.4               # AAA — #b8c0d4 on #0a0e1a
  contrast-muted-on-bg: 4.6              # AA — #7a86a3 on #0a0e1a
  contrast-text-on-brand: 4.5            # AA — #ffffff on #1aaaff
  contrast-brand-on-bg: 7.8              # AAA — #1aaaff on #0a0e1a
  focus-ring: '2px solid #1aaaff with 2px offset'
  reduced-motion-honored: true

dark-mode: 'default — Axiom is dark-first; no light variant ships in marketing. The in-product app uses the same dark canvas with the same token map.'

lineage:
  summary: |
    Axiom occupies the cold-blue end of the observability spectrum.
    Where Grafana is dark with warm orange and Datadog is bright with
    accent purple, Axiom is dark with electric cyan — the colour
    register signals "infrastructure for engineers who don''t want
    their dashboard to be friendly." The body canvas is `#0a0e1a`,
    a deep navy with a clear blue tilt that distinguishes it from
    the neutral near-blacks of Vercel and Linear. The single
    `#1aaaff` cyan accent is the brand''s wayfinding system: CTA
    fills, links, illustration highlights, and chart-series-one
    all resolve to it. Inter handles every text role, with JetBrains
    Mono carrying every log event, JSON payload, code sample, and
    metric label — the monospace presence is constant, which is the
    brand''s "log stream as marketing copy" gesture. Layout is
    structural and grid-disciplined, with 12px card radii and 8px
    buttons that sit between Linear''s tight Vercel-influenced
    geometry and Sentry''s pill-button friendliness. The lineage
    is clearly Linear-and-Vercel-adjacent, but Axiom pushes harder
    into log-stream density and operator-console aesthetics.
  influences:
    - name: Linear
      role: Structural rigour, near-black canvas, restrained accent palette.
      url: https://linear.app
    - name: Vercel
      role: Cool dark canvas with a single bright accent, monospace ubiquity for code.
      url: https://vercel.com
    - name: Grafana
      role: Operator-console aesthetic — log-stream density, monospace timestamps, multi-level severity colours.
      url: https://grafana.com
    - name: Datadog
      role: Counterpoint reference — Axiom is the deliberate cold-cyan inverse of Datadog''s purple-on-white.
      url: https://www.datadoghq.com
---

## 1. Visual Theme & Atmosphere

Axiom''s site is the cold-blue end of observability marketing. The canvas is a deep navy `#0a0e1a` with a clear blue tilt — neither the neutral near-black of Linear nor the warm aubergine of Sentry. The faint blue cast tells you immediately what kind of product you''re looking at: not a friendly SaaS dashboard, but infrastructure for teams whose dashboards run hot at 2am during incidents. Headlines hit 72px at weight 600 in **Inter** with `-0.025em` tracking, the single `#1aaaff` electric cyan does all the brand work as CTA fill / link / accent stamp, and **JetBrains Mono** carries every log event, JSON payload, and code sample shown on the page.

The signature gesture is the **log-stream mock**: rows of timestamped events with monospace severity tags (info/warn/error/success) rendered at marketing scale, often as the hero illustration itself. It says "this is what the product looks like at 2am during an incident" — and it does that without apology. The log-stream mock isn''t a stylised diagram — it''s the actual product UI lifted onto the marketing surface, with real-looking timestamps, real-looking JSON expansion, and severity tags color-coded by the `log-info`, `log-warn`, `log-error`, `log-success` palette tokens.

The second signature element is the **monospace ubiquity**. JetBrains Mono carries every code sample, every JSON payload, every metric label, every chart axis tick, every severity chip. Where Datadog hides its mono inside dashboard chrome and surfaces sans on the marketing page, Axiom puts the operator console front and center — every band on the homepage has at least one mono element. The mono presence is the brand''s typographic stamp, and it reads as "we know what camp we''re in: developers who write SQL queries against log streams."

Layout is structural and grid-disciplined. A 1240px max container, 24px gutters, 96px vertical rhythm. Cards use 12px radii (the modern dev-infra norm), buttons use 8px (between Linear''s 6px and Sentry''s full pill), and log-row mocks use no radius at all because tabular density doesn''t want corners. The 12-column grid is densely subdivided in event-volume charts and integration-logo bands — Axiom integrates with everything, and the marketing shows it.

Type voice runs Inter at weight 500–600 across display sizes (Axiom never reaches for 700–800 the way Vite or Linear sometimes do — the restraint is the brand''s "we''re serious about logs, not about ourselves" register). Body type at 16px / 1.60 line-height. Stat callouts use `display-md` sizing (36px / 600) in white or cyan.

**Key Characteristics:**
- Deep navy `#0a0e1a` canvas with clear blue tilt — colder than Linear, neither warm nor neutral.
- Single electric cyan `#1aaaff` for CTAs, links, brand mark, focus rings, chart-series-one.
- Inter at weight 500–600 across display sizes — restrained, never reaching for 700–800.
- JetBrains Mono ubiquitous — every code sample, every log event, every metric label.
- Log-stream mocks as hero illustration: rows of timestamped events with monospace severity tags.
- Multi-color severity palette (info/warn/error/success) used only inside product UI mocks.
- 1240px max content width with 96px vertical rhythm.
- 12px card radii, 8px button radii — modern dev-infra geometry.
- 8% white hairline (`#ffffff14`) for every divider — never colored borders.
- Shadow-light: depth comes from tonal layering on the four-step navy ladder.
- No light variant — Axiom is dark-first across marketing and product.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#0a0e1a`): Deep navy with clear blue tilt — runs every marketing page.
- **Text** (`#ffffff`): Pure white headlines and body — the navy is dark enough that pure white reads softly.
- **Brand / Primary CTA** (`#1aaaff`): The electric cyan — every CTA, link, brand-critical accent.

### Brand & Dark
- **Brand** (`#1aaaff`): Single-hue brand axis. Reserved for primary CTAs, links, focus rings, log-info severity, chart-series-one.
- **Brand Hover** (`#0e8ed8`): Pressed/hover state — slightly deeper cyan.
- **Brand Active** (`#0c7ec0`): Active/focus state.
- **Brand Light** (`#5cc4ff`): Lighter cyan for hover-link states and rare illustration highlights.
- **Brand Soft** (`#0a3050`): Tinted brand surface for callouts and brand-tinted chips.
- **Brand Deep** (`#063052`): Darkest cyan for type on `brand-soft`.
- **Bg Soft** (`#06080f`): Darker tier — code-block ground, footer, nav strip.
- **Bg Deep** (`#03050a`): Deepest tier — under code-block syntax highlights.

### Accent
Axiom''s accent system is constrained to log-severity colors and one rare illustration violet. The accents below appear only inside product UI mocks, never as marketing chrome.
- **Accent Violet** (`#9c5cff`): Secondary illustration accent — rare, used in chart series 2 or hero illustration.
- **Log Info / Accent Cyan** (`#1aaaff`): Severity tag for info-level events.
- **Log Warn / Accent Amber** (`#f59e0b`): Severity tag for warn-level events.
- **Log Error / Accent Red** (`#ef4444`): Severity tag for error-level events.
- **Log Success / Accent Green** (`#22c55e`): Severity tag for success-level events.
- **Accent Pink** (`#ec4899`): Rare highlight on chart-series-five.

### Interactive
- **Link** (`#1aaaff`): Inline body links match brand. No underline by default; underline on hover.
- **Link Hover** (`#5cc4ff`): Hover lightens.
- **Selected** (`rgba(26, 170, 255, 0.20)`): Selected text background — cyan tint at 20% alpha.
- **Disabled** (`#4a5575`): Disabled labels and tertiary fine-print.

### Neutral Scale
- **Text** (`#ffffff`): Pure white for headlines and primary body.
- **Text Muted** (`#b8c0d4`): Body paragraphs at ~73% white-blue.
- **Text Soft** (`#7a86a3`): Captions, metadata, log timestamps.
- **Text Faint** (`#4a5575`): Disabled, fine-print.

### Surface & Borders
- **Bg Soft** (`#06080f`): Footer, code-block ground, nav strip.
- **Bg Elevated** (`#111729`): Raised card surface.
- **Surface** (`#161d33`): Secondary panel.
- **Surface Elevated** (`#1a2240`): Panel above surface — rare third tier.
- **Surface Hover** (`#1d2540`): Hover state on cards.
- **Surface Active** (`#243057`): Pressed state.
- **Border** (`#ffffff14`): 8% white hairline — the entire divider system.
- **Border Strong** (`#ffffff28`): Stronger divider for hover states.
- **Border Soft** (`#ffffff0a`): Softer divider for code-block edges.
- **Border Brand** (`#1aaaff`): Focus border on inputs.

### Shadow Colors
Axiom is shadow-light. Most depth comes from tonal layering on the navy ladder; shadows are deep navy at high alpha rather than brand-tinted.
- **Shadow Color** (`rgba(3, 5, 10, 0.50)`): Ambient shadow on raised cards.
- **Shadow Color Md** (`rgba(3, 5, 10, 0.65)`): Standard hover shadow.
- **Shadow Color Lg** (`rgba(3, 5, 10, 0.80)`): Modal entrance.
- **Shadow Glow Cyan** (`rgba(26, 170, 255, 0.20)`): Rare ambient glow on hero CTA card.

### Semantic
The semantic palette doubles as the log-severity palette — Axiom is one of the few brands where the marketing page''s "warning" color is also the in-product warning color, and that consistency is intentional.
- **Success** (`#22c55e`): Confirmation toasts, success log-rows.
- **Warning** (`#f59e0b`): Caution states, warn log-rows.
- **Danger** (`#ef4444`): Destructive actions, error log-rows.
- **Info** (`#1aaaff`): Informational notices, info log-rows — same as the brand.

## 3. Typography Rules

### Font Family
- **Display & Body**: `Inter, "Inter Variable", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif`. Inter handles every text role at 400/500/600/700.
- **Mono**: `"JetBrains Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`. JetBrains Mono with ligatures and tabular-zero (`'liga', 'calt', 'zero'`) carries every code sample, log event, and metric label.
- **OpenType features**: Display sizes use `'cv11'` (single-storey g) and `'ss01'` (alternate '0') at 36px+. Mono uses `'zero'` (slashed zero) at every size for log-row tabular alignment.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Inter | 72 | 600 | 1.05 | -0.025em | ss01 | Homepage h1 ("Logs at any scale") |
| display-xl | Inter | 60 | 600 | 1.08 | -0.02em | — | Major section heads |
| display-lg | Inter | 48 | 600 | 1.10 | -0.02em | — | Sub-section heads |
| display-md | Inter | 36 | 600 | 1.15 | -0.015em | — | Stat callouts, feature-band heads |
| display-sm | Inter | 28 | 600 | 1.25 | -0.01em | — | Card titles |
| title-lg | Inter | 24 | 600 | 1.30 | -0.005em | — | Pricing-tier names |
| title-md | Inter | 20 | 600 | 1.35 | 0 | — | Card titles |
| title-sm | Inter | 16 | 600 | 1.40 | 0 | — | Small card titles |
| body-lg | Inter | 18 | 400 | 1.60 | 0 | — | Hero subhead |
| body-md | Inter | 16 | 400 | 1.60 | 0 | — | Default running-text |
| body-sm | Inter | 14 | 400 | 1.55 | 0 | — | Footer body, fine-print |
| caption | Inter | 13 | 500 | 1.40 | 0 | — | Captions |
| label-uppercase | JetBrains Mono | 12 | 500 | 1.40 | 0.04em | — | Section eyebrows ("INGEST", "QUERY", "SCALE") |
| code-md | JetBrains Mono | 13 | 400 | 1.60 | 0 | liga, zero | Code blocks, JSON payloads |
| code-sm | JetBrains Mono | 12 | 400 | 1.55 | 0 | liga, zero | Inline code |
| code-micro | JetBrains Mono | 11 | 500 | 1.40 | 0 | zero | Severity tag labels |
| log-row | JetBrains Mono | 13 | 400 | 1.50 | 0 | zero | Log-stream mock event row — tabular-nums via zero |
| log-timestamp | JetBrains Mono | 12 | 400 | 1.50 | 0 | zero | Log-stream mock timestamp — text-soft color |
| button | Inter | 14 | 500 | 1.0 | 0 | — | Standard button labels |
| nav-link | Inter | 14 | 500 | 1.40 | 0 | — | Top-nav menu items |

### Principles
- **Inter weight ceiling at 600.** Axiom never reaches for 700–800. The restraint is the brand''s engineering register.
- **Negative tracking is mandatory at display sizes** — `-0.025em` at 72px easing to 0 by 16px.
- **Mono everywhere code or data appears.** Axiom''s typographic signature is the JetBrains Mono ubiquity.
- **Tabular zeros (`'zero'` feature) are mandatory in log-row mono.** Without slashed zeros, log timestamps misalign visually.
- **Section labels use mono uppercase, not body uppercase.** The 12px / 0.04em uppercase eyebrow uses JetBrains Mono — distinguishes Axiom from Linear (which uses sans uppercase eyebrows).
- **Body line-height is 1.60.** Slightly tighter than docs-tall — Axiom''s marketing prefers density over openness.
- **Stat callouts at 36px / 600 in cyan or white.** Used for "10TB / day", "<100ms query latency", "99.99% uptime" — never bigger.

## 4. Component Stylings

### Buttons (4 variants)

**`button-primary`** — The signature cyan CTA. Background `#1aaaff`, text `#ffffff`, Inter 14px / 500, padding `10px 18px`, height 40px, radius 8px. Hover: `#0e8ed8` over 120ms; subtle 1px lift. Focus: 2px `rgba(26, 170, 255, 0.50)` ring with 2px offset.

**`button-secondary`** — Bordered transparent secondary. Background transparent, text `#ffffff`, 1px solid `#ffffff33` border, same shape and padding.

**`button-ghost`** — Pure text-link button, transparent background. Used for tertiary actions like "Read the blog".

**`button-dark`** — Sit-on-elevated-surface variant. Background `#06080f`, text `#ffffff`, 1px solid `#ffffff14` border. Used inside `card-feature` shells where transparent buttons would disappear.

### Cards

**`card-feature`** — Standard feature card. Background `#111729`, radius 12px, padding 32px, 1px solid `#ffffff14` border. No shadow at rest; ambient on hover.

**`card-log-stream`** — The signature log-stream mock. Background `#06080f`, radius 12px, padding 0 (rows extend to edge), 1px solid `#ffffff14` border. Inside: rows of `log-row` typography (JetBrains Mono 13px / 400, tabular-zero) with timestamp on left in `text-soft`, severity badge (color from `log-info/warn/error/success`), then event message in `text`. Optional JSON expansion on click.

**`card-code-window`** — Embeds query/config snippets. Background `#06080f` (deeper than canvas), radius 12px, padding 24px, syntax highlighting: keywords (`SELECT`, `FROM`, `WHERE`) in `#9c5cff` violet, strings in `#22c55e` green, comments in `#7a86a3` muted, numbers in `#f59e0b` amber, operators in `#1aaaff` cyan. Top-right tab indicator in `code-micro`.

**`card-chart-mock`** — Multi-series line/area chart. Background `#111729`, radius 12px, padding 24px. Chart axis labels in `code-micro` mono, legend in `caption` body, series colors from the multi-color palette (cyan/violet/amber/green/pink/red).

### Badges & Pills

**`badge-pill`** — Small pill. Background `#111729`, text `#b8c0d4`, caption typography, radius 9999. Used for "v2.0" / "Public Beta" version chips.

**`badge-severity`** — Log severity tag. Background `#161d33`, text colored by severity (`#1aaaff` for INFO, `#f59e0b` for WARN, `#ef4444` for ERROR, `#22c55e` for SUCCESS), `code-micro` typography, radius 6px, padding `2px 8px`. Used inside log-stream mocks.

### Inputs / Forms

**`text-input`** — Dark text input. Background `#111729`, text `#ffffff`, radius 8px, padding `10px 14px`, height 40px, 1px solid `#ffffff14` border.

**`text-input-focused`** — 2px `#1aaaff` core ring with 2px transparent offset.

### Navigation

**`top-nav`** — Pinned to top, 64px tall, background `#0a0e1a` (canvas), 1px `#ffffff14` bottom border. Logo + "Axiom" wordmark left, primary horizontal menu (Product, Customers, Pricing, Docs, Blog) center, right-side: "Sign in" link + cyan `button-primary` ("Start free").

### Decorative

**`stat-callout`** — Inline stat numbers ("10TB/day", "<100ms p95", "99.99% uptime"). `display-md` typography (36px / 600) in `#ffffff` or `#1aaaff`, with `label-uppercase` qualifier below in `#7a86a3`.

**`cta-band`** — Pre-footer "Start your free trial" band. Background `#06080f`, radius 12px, 64px padding. h2 in `display-md` white, body subhead in `#b8c0d4`, primary `#1aaaff` CTA + transparent `button-secondary`.

**`integration-logo-grid`** — Dense grid of integration logos (AWS, Vercel, Datadog connectors, etc.). Logos in `#7a86a3` muted at rest, lifting to `#ffffff` on hover.

**`live-tail-indicator`** — Small pulsing dot in `#22c55e` green next to "Live tail" label inside log-stream mocks. 1.5s pulse animation; respects reduced-motion (becomes static).

## 5. Layout Principles

### Spacing System
Base unit **4px**. Tokens: `xxs:4 · xs:8 · sm:12 · md:16 · lg:24 · xl:32 · xxl:48 · section:96`. The 96px section padding is wider than Vite''s 80px and matches the modern dev-infra rhythm (Vercel, Linear, Supabase). Card padding 32px, code-window padding 24px.

### Grid & Container
Max content width **1240px** centered — slightly wider than Vite''s 1152px, accommodating the dense log-stream mocks and integration-logo grids. Editorial body uses a 12-column grid; hero often runs 6/6 (h1 + subhead left, log-stream mock right). Feature card grids run 3-up at desktop, 2-up at tablet, 1-up at mobile.

### Whitespace Philosophy
Axiom uses moderate-to-dense whitespace — generous between sections (96px), tighter inside cards. The density signal is intentional: log streams are dense by definition, and the marketing reflects that. Sections of pure prose (the rare "Why Axiom" narrative) breathe more, but most of the page is information-rich.

### Section Cadence
Hero band with log-stream mock → feature triplet (3 columns) → query-language showcase (text + code-window) → architecture/scale claims (stat callouts) → integration-logo dense grid → customer quotes → pricing → pre-footer CTA band → footer. 96px vertical rhythm throughout. No light/dark alternation — the entire page is dark.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 2px | Reserved |
| XS | xs | 4px | Badge accents, syntax-highlight chips |
| Standard | sm | 6px | Severity badges, tight inputs |
| Comfortable | md | 8px | Standard CTA buttons, text inputs |
| Large | lg | 12px | Content cards, code-window cards, log-stream cards |
| Featured | xl | 16px | Hero shells (rare) |
| Pill | pill | 9999px | Badges, version chips |

Log-row mocks deliberately use **no radius** — tabular density wants sharp edges. The card containing them has 12px radii, but the rows inside flow edge-to-edge.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Body sections, top nav |
| 1 — Soft hairline | 1px `#ffffff14` border | Standard feature cards |
| 2 — Tonal lift | One step up the surface ladder | Raised card on hero band |
| 3 — Soft shadow | 1px border + ambient navy shadow | Cards on hover |
| 4 — Brand glow | 1px border + glow-cyan shadow | Hero CTA card (rare) |
| 5 — Modal | Elevated shadow + backdrop dim 70% | Dialogs, search modal |

### Shadow Philosophy
Axiom is **shadow-light**. The four-step navy ladder (`#03050a` → `#06080f` → `#0a0e1a` → `#111729`) does most of the depth work; shadows are deep navy at high alpha (50–80%) rather than brand-tinted. The single brand-glow exception is the rare ambient cyan halo on the hero CTA card — and it shows up at most once per page, never more.

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — every default transition.
- **Emphasized ease**: `cubic-bezier(0.2, 0, 0, 1)` — CTA hover, modal entrances.
- **Stream linear**: `linear` — log-stream live-tail row insertion uses linear easing for natural ticker feel.

### Duration Buckets
- **Fast (120ms)**: Color and opacity transitions, button hover.
- **Standard (200ms)**: Card hover lifts, dropdown opens.
- **Slow (320ms)**: Modal entrance, scroll reveals.

### Per-Component Micro-States
- **Button hover**: Cyan CTAs darken `#1aaaff → #0e8ed8` over 120ms; 1px translateY lift.
- **Card hover**: TranslateY(-2px) over 200ms; ambient shadow appears.
- **Log-stream live-tail**: New rows scroll in from top with 320ms linear easing; live-tail dot pulses on a 1.5s loop.
- **Code-window hover**: No state change; copy-button reveals on hover via opacity 0 → 1 over 200ms.
- **Link hover**: Color lightens `#1aaaff → #5cc4ff` over 120ms; underline appears.
- **Input focus**: 2px `#1aaaff` ring expands over 200ms.
- **Severity badge**: No hover state — badges are static labels.

### Page Transitions
Standard browser navigation. Section-on-scroll reveals are 320ms fade-in-up with 50ms stagger.

### Reduced Motion
Honored — `prefers-reduced-motion: reduce` pauses the log-stream live-tail animation (rows render statically), removes the live-tail pulse dot animation (becomes static), removes all translateY transforms, and skips section-reveal transitions.

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#ffffff` on `#0a0e1a` = **17.6** — AAA at all sizes.
- **Body on bg**: `#b8c0d4` on `#0a0e1a` = **9.4** — AAA.
- **Muted on bg**: `#7a86a3` on `#0a0e1a` = **4.6** — AA.
- **Brand on bg**: `#1aaaff` on `#0a0e1a` = **7.8** — AAA at body sizes.
- **On-brand on brand**: `#ffffff` on `#1aaaff` = **4.5** — AA at body sizes (large text AAA).

### Focus Indicators
2px solid `#1aaaff` ring with 2px transparent offset. Visible on every interactive surface.

### ARIA Patterns
- **Buttons**: Native `<button>`; icon-only carry `aria-label="Open search"`.
- **Code blocks**: `<pre><code>` with `aria-label="APL query example"` and copy-button labeled `aria-label="Copy code"`.
- **Log-stream mocks**: `role="log"` with `aria-live="polite"` for live-tail rows. Each row has `aria-label="INFO at 14:23:01 — User authenticated"` for screen-reader announcement.
- **Severity badges**: Color is decorative; the text content ("INFO", "WARN", "ERROR", "SUCCESS") is the actual a11y signal.
- **Top nav**: `<nav aria-label="Primary navigation">`.
- **Search modal**: `role="dialog"` + `aria-labelledby` + focus trap.

### Keyboard Navigation
Tab order follows visual reading order. Skip-link to `<main>` available. Search opens via `Cmd+K` / `Ctrl+K`. Modal traps focus and closes on Escape. Log-stream rows in the mock are not focusable (decorative); the actual product UI handles row navigation differently.

### Screen Reader Hints
Stat numbers carry `aria-label` for full unit readout ("10 terabytes per day" rather than "10TB/day"). Log-row mocks use `aria-label` to describe the entire row in human language. JSON payloads in log expansion use semantic markup so screen readers announce key/value pairs intelligibly.

### Reduced Motion Handling
Honored — log-stream live-tail pauses (rows render statically), pulse dot animation removed, all transforms removed from hover states, section-reveal transitions disabled.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hamburger nav; hero h1 72→36px; log-stream mock collapses to mobile-friendly tighter rows; feature grids 1-up; integration-logo grid wraps tighter |
| Tablet | 640–1024px | Top nav tightens; feature cards 2-up; hero h1 60px; log-stream mock retains horizontal scroll |
| Desktop | 1024–1440px | Full top-nav; 3-up feature cards; hero h1 72px |
| Wide | > 1440px | Same as desktop with more breathing room; max content stays at 1240px |

### Touch Targets
Primary CTA min 40 × 40px (height 40, padding `10px 18px`). Icon-only nav buttons 36 × 36 with adequate hit area. Input height 40px.

### Collapsing Strategy
Top nav collapses to hamburger at < 768px. Hero 6/6 grid collapses to single-column. Log-stream mock retains horizontal scroll on mobile rather than wrapping rows (tabular density doesn''t survive wrapping). Code-window stacks below text on mobile.

### Image Behavior
Code blocks stay at fixed `code-md` font-size; horizontal scroll on mobile. Customer/integration logos retain native widths and align to a 32px row height. Chart mocks scale proportionally and may simplify (fewer series visible) on mobile.

### Container Queries
Used inside `card-log-stream` — when the card is narrower than 480px, the timestamp column hides and only the severity badge + message remain.

## 11. Content & Voice

### Tone
**Engineering-serious, data-fluent, no-nonsense.** Axiom writes for SREs, DevOps engineers, platform teams, and observability operators. The voice is direct and technical — capability claims are backed by numbers ("Query 10TB in <100ms"), and there''s zero whimsy or marketing-speak. Closer to Linear or Vercel''s engineering-direct register than to Datadog''s enterprise-warm voice.

### Microcopy Patterns
- **CTA verbs**: "Start free", "Talk to sales", "View docs", "Read the blog". Never "Sign up" or "Try now".
- **Section labels**: Mono uppercase eyebrow at 12px / 0.04em — "INGEST", "QUERY", "SCALE", "OBSERVE", "ALERT".
- **Stat numbers**: Followed by precise qualifier — "10TB ingested daily", "<100ms p95 latency", "99.99% uptime SLA", "10× cheaper than Datadog".
- **Feature copy**: Verb-first with technical specificity ("Ingest petabytes", "Query in real-time", "Alert on any field").
- **Error messages in product**: Direct and operational — "Query timed out after 30s — try narrowing your time range or filtering on indexed fields."

### Empty States
"No events in this time range — try expanding the range, or check that ingest is healthy." Operational, instructive, includes an out.

### CTA Verb Conventions
"Start free" is the canonical primary CTA — Axiom has a real free tier and the language reflects that (not "Try free", which implies a trial). Secondary CTAs use technical verbs ("View docs", "Read API reference", "See architecture").

## 12. Dark Mode & Theming

Axiom is **dark-only** in marketing. There is no light variant. The in-product app uses the same dark canvas (`#0a0e1a`) with the same token map, which gives the brand a marketing-product continuity that''s rare in the dev-infra space.

For internal/customer-portal contexts that do require a light variant, the recommended swap is:
- `bg`: `#0a0e1a` → `#ffffff`
- `bg-elevated`: `#111729` → `#f8fafc`
- `text`: `#ffffff` → `#0a0e1a`
- `text-muted`: `#b8c0d4` → `#475569`
- `border`: `#ffffff14` → `#e2e8f0`
- `brand`: `#1aaaff` → `#0e8ed8` (slightly deeper for AA contrast on white)

But the marketing site never uses this swap. Cold cyan on deep navy is the brand''s identity, and it does not blink.

## 13. Lineage & Influences

Axiom''s aesthetic descends from the **modern dev-infra dark-canvas + bright-accent** lineage that runs through Linear, Vercel, and Supabase, with one calibrated departure: the canvas tilts blue rather than neutral. Where Linear is `#08090a` (truly neutral near-black), Vercel is `#000000` (pure black), and Supabase is `#1c1c1c` (warm-ish), Axiom is `#0a0e1a` — a deep navy with measurable blue chromaticity.

The `#1aaaff` cyan is positioned deliberately against Datadog''s purple — Datadog is the established observability incumbent, and Axiom''s entire chromatic system reads as the cold-cyan inverse. Where Datadog is bright-canvas + purple-accent, Axiom is dark-canvas + cyan-accent. The opposition is intentional and visible across every band.

The **JetBrains Mono ubiquity** is borrowed from Grafana''s operator-console aesthetic — Grafana puts the dashboard chrome on the homepage; Axiom does the same with log streams. Where Grafana''s warm orange `#f46800` reads as friendly-utility, Axiom''s cold cyan reads as serious-infrastructure. Same lineage, opposite temperatures.

The 8px button radius sits between Linear''s 6px and Sentry''s full pill — close enough to Linear that the dev-infra family-resemblance is obvious, far enough from Sentry that the cold-engineering register is unmistakable.

- **Linear** — Structural rigour, near-black canvas, restrained accent palette, Inter-everywhere typography. https://linear.app
- **Vercel** — Cool dark canvas with single bright accent; monospace ubiquity for code samples. https://vercel.com
- **Grafana** — Operator-console aesthetic; log-stream density; multi-level severity colors as marketing chrome. https://grafana.com
- **Datadog** — Counterpoint reference; Axiom is the deliberate cold-cyan inverse of Datadog''s purple-on-white. https://www.datadoghq.com
- **JetBrains Mono** — The monospace typeface that gives Axiom (and Sentry, and Linear''s code blocks) its operator credibility. https://www.jetbrains.com/lp/mono

## 14. Do''s and Don''ts

### Do
- Anchor every page on the deep-navy `#0a0e1a` canvas. Axiom is dark-only.
- Reserve cyan `#1aaaff` for primary CTAs, links, focus rings, log-info severity, chart-series-one.
- Use Inter at weight 500–600 across display sizes. Never reach for 700–800.
- Use JetBrains Mono for every code sample, log event, JSON payload, metric label, severity tag.
- Render log-stream mocks as the hero illustration whenever possible — it''s the brand''s most distinctive marketing asset.
- Use the multi-color severity palette (cyan/amber/red/green) only inside product UI mocks.
- Use 8% white hairline `#ffffff14` for every divider — never colored borders.
- Use 12px card radii and 8px button radii — modern dev-infra geometry.
- Use 96px vertical rhythm between sections.
- Enable `'zero'` OpenType feature on every mono surface for tabular-zero alignment.
- Use stat callouts at 36px / 600 in white or cyan for credibility moments.
- Honor `prefers-reduced-motion` — pause log-stream live-tail and live-tail pulse dot.

### Don''t
- Don''t warm the canvas toward aubergine or neutral near-black — the deep navy with blue tilt is the brand''s temperature.
- Don''t soften buttons to full pills — the 8px radius keeps the system in the dev-infra geometry of Vercel and Supabase.
- Don''t introduce a display sans or editorial serif — Inter + JetBrains Mono is the entire typographic system.
- Don''t use the violet `#9c5cff` solo as a brand accent — it lives only inside chart series 2 or rare illustrations.
- Don''t use the severity colors (amber/red/green) as marketing chrome — they belong inside product UI mocks.
- Don''t reach for Inter weight 700+ — the engineering register is the brand''s restraint.
- Don''t use shadows for primary depth — the four-step navy ladder is sufficient.
- Don''t round log-row mocks — tabular density wants sharp edges.
- Don''t use sans uppercase eyebrows — section labels are mono uppercase for the engineering register.
- Don''t add gradients — Axiom is solid-color discipline; the cyan does not gradient anywhere.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:     #0a0e1a (deep navy with blue tilt)
Bg Soft:         #06080f (footer / code-block ground)
Bg Elevated:     #111729 (raised card surface)
Border:          #ffffff14 (8% white hairline)
Text:            #ffffff (pure white)
Text Muted:      #b8c0d4 (body paragraphs)
Text Soft:       #7a86a3 (timestamps, captions)
Brand:           #1aaaff (electric cyan)
Brand Hover:     #0e8ed8 (pressed)
Log Warn:        #f59e0b (amber, severity-only)
Log Error:       #ef4444 (red, severity-only)
Log Success:     #22c55e (green, severity-only)
```

### Example Component Prompts

1. "Create an Axiom hero band on `#0a0e1a` canvas, with an Inter 72px / 600 / -0.025em tracking `#ffffff` headline (\"Logs at any scale\"), 18px / 400 `#b8c0d4` Inter subhead, and a primary cyan `#1aaaff` CTA (\"Start free\") paired with a transparent `button-secondary` (\"Talk to sales\"). Right side: a 12px-radius `#06080f` log-stream mock card with 8 rows of JetBrains Mono 13px / 400 events, each row with `#7a86a3` timestamp on the left, severity badge (INFO=cyan, WARN=amber, ERROR=red), then `#ffffff` event message."

2. "Design a feature triplet on `#0a0e1a` canvas. Three cards in a 3-column grid, each `#111729` background, 12px radius, 32px padding, 1px solid `#ffffff14` border. Each card opens with a 12px / 500 / 0.04em uppercase JetBrains Mono eyebrow (\"INGEST\", \"QUERY\", \"SCALE\"), then a 28px / 600 Inter title, then 16px / 400 / 1.60 line-height `#b8c0d4` body. Cards: \"Petabyte ingest\", \"Sub-100ms queries\", \"Pay only for what you query\"."

3. "Embed a query code-window. `#06080f` background, 12px radius, 24px padding. Top-right shows a small `query.apl` tab indicator in 11px JetBrains Mono uppercase. Body is JetBrains Mono 13px / 400 / 1.60 with syntax highlighting: keywords (`SELECT`, `FROM`, `WHERE`, `BY`) in `#9c5cff` violet, strings in `#22c55e` green, comments in `#7a86a3` muted, numbers in `#f59e0b` amber, operators in `#1aaaff` cyan. Tabular zero (`'zero'`) feature ON."

4. "Compose a stat-callout band with three numbers (\"10TB\", \"<100ms\", \"99.99%\") in Inter 36px / 600 / `#ffffff`, each with a `#7a86a3` 12px / 500 / 0.04em uppercase JetBrains Mono label below (\"INGESTED DAILY\", \"P95 LATENCY\", \"UPTIME SLA\"). 96px vertical padding."

5. "Build an integration-logo grid with 24+ logos arranged 6 columns × 4 rows. Each logo in `#7a86a3` muted at rest, lifting to `#ffffff` on hover. 32px logo height, 48px gap. Background `#06080f` darker tier, 96px vertical padding."

6. "Design a pre-footer CTA band on `#0a0e1a` canvas: full-bleed `#06080f` deep band, 64px padding, 12px radius. Inter 36px / 600 / -0.015em `#ffffff` headline (\"Start sending logs in minutes\"), 16px / 400 `#b8c0d4` subhead, primary `#1aaaff` CTA (\"Start free\") + transparent `button-secondary` (\"View pricing\")."

### Iteration Guide
1. Start with the `#0a0e1a` deep-navy canvas. Axiom is dark-only — there is no light variant.
2. Add exactly one cyan `#1aaaff` per band. Reserve it for action moments.
3. Replace any abstract illustration with a log-stream mock. The log stream IS the brand''s identity.
4. Buttons are 8px radius. Never pill, never sharp 4px.
5. Code/log/JSON uses JetBrains Mono with `'zero'` ON. Tabular alignment is non-negotiable.
6. Section eyebrows use mono uppercase (12px / 0.04em). Sans eyebrows belong to Linear/Vercel.
7. Body text is pure `#ffffff` — the navy is dark enough that pure white reads softly.
8. Stat callouts are 36px / 600. Never larger; the restraint is the brand''s engineering register.
