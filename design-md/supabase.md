---
name: Supabase
tagline: Off-black canvas, signature emerald `#3ecf8e`, Circular as display, Postgres-grade type discipline.
updated_at: 2026-05-05T20:10:49+12:00
published_at: 2026-05-03T10:27:49+12:00
author: webdesignhot
source_url: https://supabase.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, mono, sans, dense, structured]
preview_swatch: ['#121212', '#3ecf8e', '#fafafa']
related: [vercel, linear, resend]
description: 'Supabase wraps a Postgres-grade product in a Postgres-grade design system — `#121212` canvas, the iconic `#3ecf8e` emerald reserved for action, Circular for display, and an HSL-token system that scales surface, foreground and brand on the same numeric ladder.'

colors:
  bg: '#121212'                     # --background-default hsl(0,0%,7.1%)
  bg-alt: '#0f0f0f'                 # --background-alternative-default hsl(0,0%,5.9%)
  bg-deep: '#0a0a0a'                # deepest tier, footer
  surface-75: '#171717'             # --background-surface-75 hsl(0,0%,9%)
  surface-100: '#1c1c1c'            # interpolated surface tier
  surface-200: '#212121'             # --background-surface-200 hsl(0,0%,12.9%)
  surface-300: '#262626'             # interpolated raised tier
  overlay: '#242424'                # --background-overlay-default hsl(0,0%,14.1%)
  overlay-hover: '#2e2e2e'          # --background-overlay-hover hsl(0,0%,18%)
  text: '#fafafa'                   # --foreground-default hsl(0,0%,98%)
  text-strong: '#ffffff'            # display peak
  text-light: '#b4b4b4'             # --foreground-light hsl(0,0%,70.6%)
  text-lighter: '#898989'           # --foreground-lighter hsl(0,0%,53.7%)
  text-muted: '#6a6a6a'             # tertiary muted
  text-faint: '#4a4a4a'             # disabled
  text-on-brand: '#161616'          # --foreground-contrast hsl(0,0%,8.6%) — on emerald
  text-on-inverted: '#0a0a0a'       # text on light surfaces (rare)
  brand: '#3ecf8e'                  # --brand-default hsl(153.1,60.2%,52.7%)
  brand-link: '#00c46a'             # --brand-link hsl(155,100%,38.6%) — saturated link
  brand-deep: '#006239'             # --brand-500 hsl(154.9,100%,19.2%) — shadow halo
  brand-soft: '#a3e9c5'             # --brand-600 hsl(154.9,59.5%,70%) — hover lift
  brand-subtle: '#1c2e23'           # 12% emerald overlay (rare)
  brand-glow: 'rgba(62,207,142,0.3)' # CTA glow ring
  link: '#3ecf8e'                   # links pick up brand
  link-hover: '#a3e9c5'             # hover lifts to soft
  border: '#2e2e2e'                 # --border-default hsl(0,0%,18%)
  border-muted: '#242424'           # --border-muted hsl(0,0%,14.1%)
  border-strong: '#363636'          # --border-strong hsl(0,0%,21.2%)
  border-overlay: '#404040'          # interpolated stronger edge
  focus-ring: '#3ecf8e'             # emerald focus
  selection-bg: '#3ecf8e'
  selection-text: '#161616'
  shadow: 'rgba(0,0,0,0.4)'
  shadow-brand: 'rgba(0,98,57,0.4)'  # deep emerald glow
  success: '#3ecf8e'                 # emerald — same as brand
  warning: '#fbb024'
  danger: '#ff5a5a'
  info: '#5ac4ee'
  on-brand: '#161616'

typography:
  display:
    family: 'Circular, custom-font, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
    opentype-features: ['kern', 'liga']
  body:
    family: 'Circular, custom-font, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500]
    opentype-features: ['kern', 'liga', 'tnum']
  mono:
    family: '"Office Code Pro", "Source Code Pro", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 96, weight: 400, lineHeight: 1.0,  tracking: '0', family: display }
    display-large:   { size: 80, weight: 400, lineHeight: 1.0,  tracking: '0', family: display }
    display-medium:  { size: 72, weight: 400, lineHeight: 1.0,  tracking: '0', family: display }
    h1:              { size: 72, weight: 400, lineHeight: 1.0,  tracking: '0', family: display }
    h2:              { size: 48, weight: 400, lineHeight: 1.05, tracking: '0', family: display }
    h3:              { size: 32, weight: 400, lineHeight: 1.20, tracking: '0', family: display }
    h4:              { size: 24, weight: 500, lineHeight: 1.30, tracking: '0', family: body }
    h5:              { size: 18, weight: 500, lineHeight: 1.40, family: body }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.50, family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.50, family: body }
    label:           { size: 11, weight: 500, family: mono, tracking: '0.05em' }
    label-tabular:   { size: 13, weight: 500, family: mono, tracking: '0.02em', opentype: 'tnum' }
    caption:         { size: 12, weight: 400, family: body, lineHeight: 1.40 }
    code-inline:     { size: 14, weight: 400, family: mono }
    code-block:      { size: 13, weight: 400, family: mono, lineHeight: 1.55 }
    code-label:      { size: 11, weight: 500, family: mono, tracking: '0.04em' }
    code-sql:        { size: 13, weight: 400, family: mono, lineHeight: 1.55 }

radius:
  micro: 2          # --borderradius-xs
  sm: 4             # --borderradius-sm / --radius-sm 0.25rem
  md: 6             # --radius-md 0.375rem — button default
  lg: 8             # --borderradius-lg / --radius-lg 0.5rem — card default
  xl: 16            # --borderradius-xl
  featured: 24      # hero shell
  pill: 9999        # status chips, badge

spacing:
  base: 4
  scale:
    xxs: 4
    xs: 8
    sm: 12
    md: 16
    lg: 24
    xl: 32
    xxl: 48
    section-sm: 64
    section: 96
    section-lg: 128

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  container: 1280
  gutter: 24
  rhythm: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.16, 1, 0.3, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 300
  reduced-motion: 'respects prefers-reduced-motion: reduce — emerald glow stays, transforms collapse to opacity'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'none'
  standard: '0 1px 2px rgba(0,0,0,0.3)'
  elevated: '0 8px 24px rgba(0,0,0,0.4)'
  deep: '0 24px 48px rgba(0,0,0,0.6)'
  ring: '0 0 0 2px #3ecf8e'
  brand-glow: '0 0 24px rgba(0,98,57,0.4)'

accessibility:
  contrast-text-on-bg: 17.4              # fafafa on 121212 — AAA
  contrast-text-on-brand: 13.2           # 161616 on 3ecf8e — AAA
  contrast-text-light-on-bg: 7.5         # b4b4b4 on 121212 — AAA body
  focus-ring: '2px solid #3ecf8e, 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'tab order DOM-based, skip-link to #main, all CTAs reachable'

components:
  button-primary:
    bg: '#3ecf8e'
    text: '#161616'
    radius: 6
    padding: '10px 18px'
    font: 'body, 14px, weight 500'
    hover: 'bg #a3e9c5, brand-glow shadow 0 0 24px rgba(0,98,57,0.4)'
    use: 'primary CTA — "Start your project"'
  button-ghost:
    bg: 'transparent'
    text: '#fafafa'
    radius: 6
    padding: '10px 18px'
    border: '1px solid #2e2e2e'
    hover: 'border #363636, bg rgba(255,255,255,0.04)'
    use: 'secondary action — "Documentation"'
  button-link:
    bg: 'transparent'
    text: '#3ecf8e'
    padding: '0'
    hover: 'text #a3e9c5, underline'
    use: 'inline action with arrow'
  button-danger:
    bg: 'transparent'
    text: '#ff5a5a'
    border: '1px solid #ff5a5a'
    radius: 6
    hover: 'bg rgba(255,90,90,0.08)'
    use: 'rare destructive action'
  card:
    bg: '#171717'
    border: '1px solid #2e2e2e'
    radius: 8
    padding: '24px'
    hover: 'border #363636, no transform'
    use: 'feature card on canvas'
  card-elevated:
    bg: '#212121'
    border: '1px solid #363636'
    radius: 8
    padding: '32px'
    use: 'highlighted card, pricing recommended'
  input:
    bg: '#171717'
    text: '#fafafa'
    placeholder: '#898989'
    border: '1px solid #2e2e2e'
    radius: 6
    padding: '10px 14px'
    focus: 'border #3ecf8e, ring 2px #3ecf8e at 30% alpha'
    use: 'email capture, search'
  badge:
    bg: '#212121'
    text: '#b4b4b4'
    radius: 9999
    padding: '4px 10px'
    font: 'mono, 11px, weight 500, tracking 0.05em'
    use: 'status, version, tag'
  badge-brand:
    bg: 'rgba(62,207,142,0.15)'
    text: '#3ecf8e'
    radius: 9999
    padding: '4px 10px'
    use: 'highlighted feature label'
  nav-link:
    text: '#b4b4b4'
    hover: 'text #fafafa, no underline'
    active: 'text #fafafa'
    spacing: '24px between items'
    use: 'top nav, footer'
  code-block:
    bg: '#212121'
    text: '#fafafa'
    border: '1px solid #2e2e2e'
    radius: 8
    padding: '20px'
    syntax: 'mimics Supabase SQL editor — emerald keywords, white identifiers, muted comments'
    use: 'code samples, primary marketing visual'

dark-mode: 'native — Supabase is dark-only for marketing. Light docs theme exists separately.'

lineage:
  summary: |
    Supabase''s marketing surface is the rare dark site that aligns
    perfectly with its developer audience — the same `#121212` canvas
    you''d see in a terminal, the same Circular sans Vercel popularised
    for dev tools, and one piercing emerald `#3ecf8e` reserved entirely
    for action. The colour system is unusually disciplined: instead of
    defining colours, Supabase defines **HSL tuples** on a numeric
    ladder (`--background-default`, `--background-surface-75`,
    `--background-surface-200`, `--background-overlay-default`) where
    each tier is the same hue/saturation but a few steps deeper in
    lightness. This is how a database product thinks about a design
    system — schemas, not swatches. The brand emerald itself is
    observed at `hsl(153.1, 60.2%, 52.7%)` (`--brand-default`),
    flanked by a slightly more saturated `--brand-link` at 100%/38.6%
    for hyperlinks. Where Vercel goes pure black/white, Supabase
    pushes the canvas just one stop softer to `#121212`, which
    photographs better against the emerald and feels closer to a
    code editor''s "Dimmed" mode than a marketing void. Circular''s
    geometric humanism gives display copy the engineered confidence
    that suits a Postgres-as-a-platform pitch — never the literary
    flourish Notion reaches for.
  influences:
    - name: 'Vercel'
      role: 'Off-black dev-tool canvas with Circular display sans and minimal chromatic noise.'
      url: https://vercel.com
    - name: 'Stripe'
      role: 'Single-accent brand discipline — one colour does all the action work.'
      url: https://stripe.com
    - name: 'Postgres / SQL editor aesthetics'
      role: 'HSL-tuple token system mirrors how DB products express schema — numeric ladder, not named swatches.'
      url: https://www.postgresql.org
    - name: 'Linear'
      role: 'Dark canvas product-as-marketing posture — the dev-tool dark wave Supabase joined.'
      url: https://linear.app
    - name: 'GitHub Dark Dimmed theme'
      role: 'The `#121212` canvas is closer to "Dimmed" mode than pure black — readability over drama.'
      url: https://github.com
---

## 1. Visual Theme & Atmosphere

Supabase''s website lives at `#121212` — one stop softer than pure black, calibrated so the signature `#3ecf8e` emerald photographs cleanly against it. The canvas is the page''s defining strategic choice: pure black would make the emerald read as radioactive; the slight warmth of `#121212` makes it read as alive. This is the difference between a marketing void (Vercel''s `#000`) and a code editor''s Dimmed mode — Supabase chose the latter.

The H1 arrives at 72px in **Circular** at weight 400, line-height 1.0, with no tracking adjustment. The geometry of the typeface is the design — Circular''s rounded humanist sans carries the line without needing tight tracking or heavier weights. This is a deliberate departure from the Inter-with-aggressive-tracking pattern used by Linear and Vercel; Supabase lets the roundness breathe.

The detail that separates Supabase from peer dark dev-tool sites is its HSL-tuple token system. Surfaces are defined as `hsl(0deg, 0%, X%)` where X marches up the ladder: 5.9 → 7.1 → 9 → 12.9 → 14.1 → 18 → 21.2. That means surfaces, borders, and overlays all sit on the same hue, just at different lightness stops. It reads as a schema, not a palette — which is fitting for a Postgres product. A database engineer looking at the design system sees the same grammar they''d see in a SQL schema.

Body type is the same Circular at 16px on a 1.5 rhythm. The mono voice — Office Code Pro / Source Code Pro — appears for code blocks, IDs, and SQL snippets. Code is the primary marketing visual on Supabase: the page consistently shows the SQL editor, the database tables, the function definitions. This isn''t decoration; it''s product proof in plain sight.

Density is dashboard-influenced. Buttons land at 6px radius, cards at 8px — small, almost surgical. The marketing surface borrows the discipline of a SQL client: tight radii, narrow tonal ladders, mono labels. The page never feels like a poster; it feels like a product surface that happens to also explain the product.

**Key Characteristics**
- `#121212` canvas — one stop softer than pure black, calibrated for the emerald
- Signature `#3ecf8e` emerald reserved for action, brand, key affordance
- Circular display sans at weight 400 — geometry as discipline
- HSL-tuple token ladder — surfaces and borders at numeric lightness stops
- 6px button radius / 8px card — dashboard-grade tightness
- Mono labels (Office Code Pro) — labels are mono, not sans
- Code blocks are the primary marketing visual
- No drop shadows on cards — depth is HSL tonal lift only
- `0 0 24px rgba(0,98,57,0.4)` brand-glow only on the primary CTA hover
- Reads as a SQL editor that happens to also be a marketing site

## 2. Color Palette & Roles

### Primary
- **bg** `#121212`: the canvas, off-black at hsl(0,0%,7.1%) — softer than pure black to flatter the emerald.
- **text** `#fafafa`: primary copy at near-pure white, `--foreground-default`.
- **brand** `#3ecf8e`: the signature emerald, `--brand-default` at hsl(153.1,60.2%,52.7%).

### Brand & Dark
- **bg-alt** `#0f0f0f`: `--background-alternative-default` hsl(0,0%,5.9%) — alternate page bg.
- **bg-deep** `#0a0a0a`: deepest tier, footer.
- **surface-75** `#171717`: `--background-surface-75` hsl(0,0%,9%) — first elevation stop.
- **surface-100** `#1c1c1c`: interpolated surface tier.
- **surface-200** `#212121`: `--background-surface-200` hsl(0,0%,12.9%) — code block, raised card.
- **surface-300** `#262626`: interpolated raised tier.
- **brand-deep** `#006239`: `--brand-500` hsl(154.9,100%,19.2%) — shadow / glow halo around emerald CTAs.
- **brand-subtle** `#1c2e23`: 12% emerald overlay — rare tinted background.

### Accent
- **brand-link** `#00c46a`: `--brand-link` hsl(155,100%,38.6%) — saturated underline / inline link variant.
- **brand-soft** `#a3e9c5`: `--brand-600` hsl(154.9,59.5%,70%) — hover/pressed lift.
- **brand-glow** `rgba(62,207,142,0.3)`: CTA glow ring.

### Interactive
- **link** `#3ecf8e`: inline links pick up brand emerald.
- **link-hover** `#a3e9c5`: hover lifts to soft brand.
- **focus-ring** `#3ecf8e`: 2px emerald outline at 2px offset.
- **selection-bg** `#3ecf8e` / **selection-text** `#161616`: text selection inverts to brand.

### Neutral Scale
- **text-strong** `#ffffff`: display peak — used sparingly.
- **text** `#fafafa`: body, primary.
- **text-light** `#b4b4b4`: `--foreground-light` hsl(0,0%,70.6%) — secondary descriptive.
- **text-lighter** `#898989`: `--foreground-lighter` hsl(0,0%,53.7%) — tertiary, placeholder.
- **text-muted** `#6a6a6a`: muted caption.
- **text-faint** `#4a4a4a`: disabled, last-tier metadata.

### Surface & Borders
- **overlay** `#242424`: `--background-overlay-default` hsl(0,0%,14.1%) — popovers, tooltips, dropdowns.
- **overlay-hover** `#2e2e2e`: `--background-overlay-hover` hsl(0,0%,18%) — overlay item hover.
- **border** `#2e2e2e`: `--border-default` hsl(0,0%,18%).
- **border-muted** `#242424`: `--border-muted` hsl(0,0%,14.1%) — softer divider.
- **border-strong** `#363636`: `--border-strong` hsl(0,0%,21.2%) — selected card edge.
- **border-overlay** `#404040`: stronger edge for popovers.

### Shadow Colors
- **shadow** `rgba(0,0,0,0.4)`: standard shadow for popovers/modals.
- **shadow-brand** `rgba(0,98,57,0.4)`: deep emerald glow on CTA hover — the only tinted shadow.
- Cards on the marketing surface have essentially no shadows — depth is pure HSL tonal grammar.

### Semantic
- **success** `#3ecf8e`: emerald, identical to brand — success and brand are the same color.
- **warning** `#fbb024`: warm amber.
- **danger** `#ff5a5a`: muted red.
- **info** `#5ac4ee`: chambray blue, low saturation.

## 3. Typography Rules

### Font Family

- **Primary display & body**: `Circular` — the geometric humanist sans (Lineto). Falls back to `custom-font` (project-internal alias), then Helvetica Neue, Helvetica, Arial.
- **Mono companion**: Office Code Pro / Source Code Pro / Menlo — used for code, IDs, SQL snippets, and labels.
- **No editorial serif**: Supabase doesn''t reach for a serif voice the way Polar or Notion do. The system is sans + mono only.
- **OpenType features**: `kern` and `liga` always on; `tnum` for tabular numbers in pricing.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | Circular | 96 | 400 | 1.0 | 0 | kern, liga | Optional larger hero |
| display-large | Circular | 80 | 400 | 1.0 | 0 | kern, liga | Major opener |
| display-medium | Circular | 72 | 400 | 1.0 | 0 | kern, liga | **H1 observed peak** |
| h1 | Circular | 72 | 400 | 1.0 | 0 | kern, liga | Article title — geometry carries the line |
| h2 | Circular | 48 | 400 | 1.05 | 0 | kern | Section head |
| h3 | Circular | 32 | 400 | 1.20 | 0 | kern | Sub-section head |
| h4 | Circular | 24 | 500 | 1.30 | 0 | kern | Card title — weight 500 for h4+ |
| h5 | Circular | 18 | 500 | 1.40 | 0 | kern | Inline head |
| body-large | Circular | 18 | 400 | 1.55 | 0 | kern, liga | Hero deck, lead paragraph |
| body | Circular | 16 | 400 | 1.50 | 0 | kern, liga | Default reading size |
| body-small | Circular | 14 | 400 | 1.50 | 0 | kern | Card description |
| label | Office Code Pro | 11 | 500 | 1.30 | 0.05em | — | All-caps eyebrow, tag — **mono, not sans** |
| label-tabular | Office Code Pro | 13 | 500 | 1.30 | 0.02em | tnum | Pricing rows |
| caption | Circular | 12 | 400 | 1.40 | 0 | kern | Image caption |
| code-inline | Office Code Pro | 14 | 400 | 1.55 | 0 | — | Inline code |
| code-block | Office Code Pro | 13 | 400 | 1.55 | 0 | — | Code blocks — mimics SQL editor |
| code-label | Office Code Pro | 11 | 500 | 1.30 | 0.04em | — | Status, version chip |
| code-sql | Office Code Pro | 13 | 400 | 1.55 | 0 | — | SQL snippets in marketing — emerald keywords |

### Principles

- **Display weight is 400, never 600+.** The geometry of Circular at 72px carries the line. Supabase deliberately rejects the heavy-display pattern.
- **Tracking is zero.** Supabase doesn''t use negative tracking on display copy — the type renders at its natural geometry. This is a discipline most peer dev-tool sites break.
- **Labels are mono.** Office Code Pro at 11px tracking 0.05em uppercase — not Circular. The mono carries developer credibility.
- **Code is the marketing visual.** Code blocks aren''t supplementary — they''re the primary content. Syntax-highlighted SQL with emerald keywords mimics the Supabase SQL editor itself.
- **Two voices: sans + mono.** No serif. No third family. The system is disciplined.
- **Tabular numerals for pricing.** `tnum` makes rows of prices align without hand-tweaking.
- **Body never goes below 14px.** Caption is 12px — that''s the floor.

## 4. Component Stylings

### Buttons

**Primary (emerald CTA)**
- Background: `#3ecf8e`
- Text: `#161616`, Circular 14px weight 500
- Padding: 10px 18px
- Radius: 6px
- Border: none
- Hover: bg `#a3e9c5`, `0 0 24px rgba(0,98,57,0.4)` brand-glow shadow
- Active: bg `#3ecf8e` (returns), no shadow
- Focus: 2px emerald ring at 2px offset
- Use: primary CTA — "Start your project," "Sign up"

**Ghost (secondary)**
- Background: transparent
- Text: `#fafafa`, Circular 14px weight 500
- Padding: 10px 18px
- Radius: 6px
- Border: 1px solid `#2e2e2e`
- Hover: border `#363636`, bg `rgba(255,255,255,0.04)`
- Use: secondary action — "Documentation," "Sign in"

**Link (text-only with arrow)**
- Background: none
- Text: `#3ecf8e`, Circular 14px weight 500
- Padding: 0
- Hover: text `#a3e9c5`, underline appears
- Use: inline action — "Read the docs →"

**Danger (rare)**
- Background: transparent
- Text: `#ff5a5a`
- Border: 1px solid `#ff5a5a`
- Radius: 6px
- Hover: bg `rgba(255,90,90,0.08)`
- Use: rare destructive action

### Cards

**Standard feature card**
- Background: `#171717` (`surface-75`)
- Border: 1px solid `#2e2e2e`
- Radius: 8px
- Padding: 24px
- Hover: border `#363636`, no transform, no shadow
- Use: feature grid

**Elevated card**
- Background: `#212121` (`surface-200`)
- Border: 1px solid `#363636`
- Radius: 8px
- Padding: 32px
- Use: highlighted card, pricing recommended tier

### Badges & Chips

**Default tag**
- Background: `#212121`
- Text: `#b4b4b4`, Office Code Pro 11px weight 500, tracking 0.05em uppercase
- Padding: 4px 10px
- Radius: 9999px (pill)
- Use: status, version, tag — mono is the chip voice

**Brand tag**
- Background: `rgba(62,207,142,0.15)`
- Text: `#3ecf8e`
- Radius: 9999px (pill)
- Use: highlighted feature label, "NEW," "BETA"

### Inputs

- Background: `#171717`
- Text: `#fafafa`
- Placeholder: `#898989`
- Border: 1px solid `#2e2e2e`
- Radius: 6px
- Padding: 10px 14px
- Focus: border `#3ecf8e`, 2px ring at 30% alpha
- Use: email capture, search

### Navigation

- Background: transparent over canvas; backdrop-blur on scroll
- Items: `#b4b4b4` default, `#fafafa` on hover/active — color shifts only, no underline
- Spacing: 24px between top-level items
- CTA: emerald pill ("Start your project") anchored right
- Mobile: hamburger reveals overlay panel with stacked items at h4 size

### Decorative

**Code block (the primary marketing visual)**
- Background: `#212121` (`surface-200`)
- Text: `#fafafa`
- Border: 1px solid `#2e2e2e`
- Radius: 8px
- Padding: 20px
- Syntax highlighting mimics the Supabase SQL editor: emerald keywords (`SELECT`, `FROM`, `WHERE`), white identifiers, muted `#898989` comments, monospace alignment
- Use: code samples, function signatures, SQL snippets — appears throughout the marketing surface

**Database table mockup** — SVG/HTML rendering of a Postgres table preview with emerald row highlights. Used in hero and feature sections to show the actual product UI.

## 5. Layout Principles

### Spacing System
Base unit = 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Density observation: cards are dense (24px padding); section padding is moderate (64–96px); the page has a dashboard rhythm rather than a marketing rhythm.

### Grid & Container
Container max-width 1280px with 24px gutters. Hero is full-width with content constrained. Feature grids are typically two- or three-up at desktop. Code-block sections often span the full container width to display long SQL/function snippets.

### Whitespace Philosophy
Tighter than Polar or Tana, looser than a true dashboard. Section padding 64–96px vertical. Cards inside sections get 16–24px gaps. The page is built to display a lot of content per viewport — Supabase has many features to communicate, and the layout supports that density.

### Section Cadence
Tonal: canvas (`#121212`) → sub-canvas (`#0f0f0f` or `#171717`) → canvas. Code-block sections often invert: `#212121` background with `#fafafa` text and emerald keywords. The brand-band pattern (full emerald section) is reserved for the very top announcement strip or a single anchor CTA.

## 6. Shapes & Radius Scale

| Tier | Px | Use |
|------|----|-----|
| Micro | 2 | `--borderradius-xs` — minor divider |
| Small | 4 | `--borderradius-sm` / `--radius-sm` 0.25rem — chip, badge |
| Medium | 6 | `--radius-md` 0.375rem — **button, input default** |
| Large | 8 | `--borderradius-lg` / `--radius-lg` 0.5rem — **card default** |
| XL | 16 | `--borderradius-xl` — large card |
| Featured | 24 | Hero shell (rare) |
| Pill | 9999 | Status chip, badge |

The radii ladder is tight — buttons at 6, cards at 8, the largest hero containers reach 16. This is dashboard-grade discipline. The smallness is what gives the marketing its product-not-poster feel; Supabase looks like the dashboard you''ll spend your work hours in, not a separate marketing surface.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | `#121212` flat | Canvas |
| 1 | `#171717` flat (surface-75) | Card, panel |
| 2 | `#1c1c1c` flat (surface-100) | Nested panel |
| 3 | `#212121` + 1px `#2e2e2e` border | Code block, raised card |
| 4 | `#242424` + `0 8px 24px rgba(0,0,0,0.4)` shadow | Popover, dropdown |
| 5 | `#2e2e2e` + `0 24px 48px rgba(0,0,0,0.6)` shadow | Modal |

**Shadow Philosophy**: Supabase''s entire elevation system runs on HSL tonal lift, not shadows. Surfaces step up the ladder: `bg-alt → bg → surface-75 → surface-200 → overlay → overlay-hover` in 1–4 percentage-point lightness increments. Borders are graded as `--border-muted → --border-default → --border-strong` (14.1% → 18% → 21.2% lightness), giving cards three stops of edge weight. The only shadow on the marketing surface is the brand-glow halo (`0 0 24px rgba(0,98,57,0.4)`) under the primary CTA on hover. Everything else is pure tonal grammar.

## 8. Interaction & Motion

### Easing Curves
- **ease-standard** `cubic-bezier(0.4, 0, 0.2, 1)` — color, opacity, default.
- **ease-emphasized** `cubic-bezier(0.16, 1, 0.3, 1)` — overlay entrances.
- **ease-out** `cubic-bezier(0, 0, 0.2, 1)` — exits.

### Duration Buckets
- **fast** 100ms — hover state shifts.
- **standard** 200ms — overlay fade, card lift.
- **slow** 300ms — modal entrance.

### Per-Component Micro-States
- **Emerald CTA hover** — bg shifts `#3ecf8e` → `#a3e9c5` over 100ms; brand-glow shadow `0 0 24px rgba(0,98,57,0.4)` over 200ms. The glow is the page''s defining motion moment.
- **Card hover** — border shifts from `#2e2e2e` to `#363636` over 100ms; no transform.
- **Link hover** — color shifts from `#3ecf8e` to `#a3e9c5` over 100ms; underline grows from 0 to 100% width over 200ms.
- **Code block hover** — no state shift; code is presentational, not interactive.
- **Popover entrance** — opacity 0 → 1 + translateY(-4px) over 200ms with ease-emphasized.

### Page Transitions
Hard cuts on navigation. Anchor scroll uses ease-standard at 600ms. Dashboard-style live data demos use staggered row reveals (40ms stagger) on intersection observer.

### Reduced Motion Strategy
With `prefers-reduced-motion: reduce`, all transforms (translate, scale) are removed. Color and shadow transitions remain (the brand-glow stays — it''s not spatially disorienting). Total motion budget under reduced-motion: 200ms max per transition.

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)
- **Text on bg**: `#fafafa` on `#121212` = **17.4:1** — AAA.
- **Text-light on bg**: `#b4b4b4` on `#121212` = **7.5:1** — AAA body.
- **Text-on-brand**: `#161616` on `#3ecf8e` = **13.2:1** — AAA at all sizes.
- **Brand on bg**: `#3ecf8e` on `#121212` = **8.4:1** — AAA at body, max for graphical UI.
- **Border on bg**: `#2e2e2e` on `#121212` = **1.5:1** — non-text decorative; meets WCAG threshold.

### Focus Indicators
2px emerald ring (`#3ecf8e`) at 2px offset on all interactive elements. The ring color is the same as the brand — Supabase uses brand emerald as a focus signal. Outline solid, not dashed. Focus visible at all times.

### ARIA Patterns
- Top nav uses `<nav aria-label="Primary">`.
- Code blocks have `role="region" aria-label="Code example"`.
- Modals use `role="dialog"` with `aria-modal="true"`.
- Form inputs have visible labels; placeholders supplemental.
- Pricing toggles use `role="tablist"`.

### Keyboard Navigation
- Tab order DOM-based.
- Skip-link to `#main` visible on focus.
- Modals trap focus, restore on close.
- Escape closes overlays.
- Code blocks have a "Copy" button reachable via Tab.

### Screen Reader Hints
- Decorative SVG (database icons) hidden with `aria-hidden`.
- Icon-only buttons (copy, expand) carry `aria-label`.
- Live regions on form validation.
- Code block syntax highlighting is wrapped with `aria-label` describing the language.

### Reduced Motion
Honored throughout — see §8.

## 10. Responsive Behavior

### Breakpoints
| Name | Min-width |
|------|-----------|
| mobile | 0–640 |
| tablet | 641–1024 |
| desktop | 1025–1280 |
| wide | 1281+ |

### Touch Targets
Minimum 44×44px on mobile. Emerald CTA grows to 44px height on touch.

### Collapsing Strategy
- **Hero**: 72px H1 drops to 48px at tablet, 36px at mobile.
- **Feature grid**: three-up → two-up → single column.
- **Code blocks**: become horizontally scrollable on mobile to preserve syntax line breaks.
- **Nav**: full bar → hamburger with overlay panel at h4 size.
- **Section padding**: 96px → 64px → 48px across breakpoints.

### Image Behavior
Database table mockups become full-width on mobile with horizontal scroll inside. Product screenshots use `object-fit: contain` inside fixed-aspect frames. SVG icons scale fluidly.

### Container Queries
Used on the feature grid and the dashboard preview where layout depends on parent width.

## 11. Content & Voice

### Tone
Technical, confident, developer-direct. Supabase writes for engineers — no marketing fluff, no benefit-driven adjectives. The voice is closer to a Postgres documentation page than a SaaS landing page. Sentences are full and declarative.

### Microcopy Patterns
- Buttons: imperative or noun-phrase — "Start your project," "Read the docs," "Sign in."
- Errors: "Could not connect to the database. Check your connection string." (technical, actionable).
- Success: "Project created." (terse).
- Empty states: "No tables yet. Create your first table to get started." (instructive).

### CTA Verb Conventions
- "Start your project" (default for hero — owned positioning)
- "Read the docs" (not "Learn more")
- "Sign in" (not "Log in")
- "View pricing" (not "See plans")

The voice trusts the reader to be a developer. No hand-holding, no condescending explanations of what a database is.

## 12. Dark Mode & Theming

Supabase is **dark-only** for the marketing surface. The product''s dashboard supports a light theme (toggleable in user settings), but marketing stays at `#121212`. The choice is positional: the dark canvas is the developer-tool register, and Supabase is committing fully.

If a light variant were ever added for marketing, the implied token swap would mirror the HSL ladder: surfaces would invert (`#121212` → `#fafafa`, `#171717` → `#f4f4f4`, `#212121` → `#ebebeb`), text would invert (`#fafafa` → `#161616`), and emerald `#3ecf8e` would stay (it works on light too, slightly more muted). But Supabase has explicitly chosen not to ship marketing light — the dark canvas + emerald is the brand.

## 13. Lineage & Influences

Supabase inherits from three traditions: the Vercel / Resend dev-tool dark school (off-black canvas, Circular display, mono labels), the Stripe brand-discipline tradition (one accent does all the work), and the Postgres / SQL-editor aesthetic (HSL token ladders, syntax highlighting as marketing visual). The synthesis is distinctively Supabase.

The HSL-tuple token system is the deepest architectural influence — most design systems define swatches by hex; Supabase defines them by lightness percentage on a fixed hue. This is how a database engineer would think about a design system: schema, not vocabulary. The fact that the marketing site exposes this discipline (in DevTools you can see the `hsl(0,0%,X%)` ladder) is a signal of confidence.

The emerald `#3ecf8e` is the page''s most copy-able decision and the hardest to copy correctly. The hue (153°), saturation (60.2%), and lightness (52.7%) form a specific photograph: too saturated and it reads radioactive; too dark and it reads dim. Supabase nails the calibration.

**Named influences**:
- Vercel (https://vercel.com) — off-black dev-tool canvas, Circular display sans, minimal chromatic noise.
- Stripe (https://stripe.com) — single-accent brand discipline.
- Postgres / SQL editor (https://www.postgresql.org) — HSL-tuple token ladder mirrors DB schema thinking.
- Linear (https://linear.app) — dark canvas product-as-marketing posture.
- GitHub Dark Dimmed (https://github.com) — `#121212` canvas closer to Dimmed than pure black.

## 14. Do''s and Don''ts

### Do
- Define surfaces as **HSL lightness stops** on the same hue (5.9 / 7.1 / 9 / 12.9 / 14.1 / 18 / 21.2) — it''s how the system stays coherent.
- Reserve `#3ecf8e` exclusively for primary action, brand wordmark, and active state — never as decorative fill.
- Use Circular at weight 400 for display — the geometry carries the line, not extra weight.
- Set tracking to zero on display — Supabase rejects negative tracking discipline.
- Use Office Code Pro for labels, status chips, and code — mono is the developer-credibility marker.
- Show actual code blocks as marketing visuals — emerald keywords on `#212121` mimic the SQL editor.
- Apply the brand-glow shadow `0 0 24px rgba(0,98,57,0.4)` only on the primary CTA on hover.
- Layer depth with HSL lift and 1px borders — never drop shadows on cards.
- Use `tnum` on pricing rows for tabular alignment.
- Honor `prefers-reduced-motion: reduce` — keep glow, drop transforms.

### Don''t
- Photograph emerald against pure `#000` — the calibrated `#121212` canvas is what makes `#3ecf8e` read as alive rather than radioactive.
- Introduce a second accent color — the brand is monochrome-plus-emerald; adding blue or purple breaks the database-grade discipline.
- Apply drop-shadows for elevation — depth is HSL tonal lift, period.
- Use Inter or Geist for display — Circular''s geometry is the brand.
- Use sans for labels — Office Code Pro is the label voice.
- Push display copy to weight 600+ — the geometry of weight 400 carries the line.
- Apply negative tracking on display — Supabase deliberately renders at natural geometry.
- Add a serif voice — the system is sans + mono only.
- Hide code blocks under "Show example" toggles — code is the marketing, surface it directly.
- Ship a marketing light mode — the dark canvas + emerald is the brand identity.

## 15. Agent Prompt Guide

### Quick Color Reference
- Bg: `#121212`
- Surface: `#171717`
- Surface raised: `#212121`
- Text: `#fafafa`
- Text light: `#b4b4b4`
- Brand (emerald): `#3ecf8e`
- Brand link: `#00c46a`
- Brand deep (glow): `#006239`
- Border: `#2e2e2e`
- Text on brand: `#161616`

### Example Component Prompts

> "Create a Supabase-style hero with a `#121212` canvas. The H1 sets at 72px in Circular weight 400 with zero tracking and 1.0 line-height in `#fafafa`. Below it, a body deck in 18px regular `#b4b4b4`. Place a single emerald CTA pill — `#3ecf8e` background with `#161616` text, 6px radius, padding 10px 18px — that lifts a `0 0 24px rgba(0,98,57,0.4)` brand-glow shadow on hover."

> "Design a Supabase code block: `#212121` background, 1px solid `#2e2e2e` border, 8px radius, 20px padding. Code text in Office Code Pro 13px on 1.55 line-height. Syntax highlighting: emerald `#3ecf8e` for SQL keywords (SELECT, FROM, WHERE), `#fafafa` for identifiers, `#898989` for comments. Include a copy button in the top-right corner."

> "Build a Supabase feature card: `#171717` background (surface-75), 1px solid `#2e2e2e` border, 8px radius, 24px padding. Title in Circular 24px weight 500, body in 16px regular `#b4b4b4`. Eyebrow label above title in Office Code Pro 11px weight 500 tracking 0.05em uppercase in `#3ecf8e`. On hover, the border brightens to `#363636` over 100ms — no shadow."

> "Create a Supabase pricing card with `#212121` background (surface-200), 1px solid `#363636` border, 8px radius, 32px padding. Price in Circular 48px weight 400 with `tnum` for tabular numerals. Below the price, a feature list with checkmarks in `#3ecf8e`. The recommended tier card has the same emerald CTA at the bottom."

> "Design a Supabase status badge: `#212121` background, Office Code Pro 11px weight 500 tracking 0.05em uppercase in `#b4b4b4`, padding 4px 10px, radius 9999 (pill). Use for ''STABLE,'' ''BETA,'' ''DEPRECATED.''"

### Iteration Guide

1. **Start at `#121212`, not `#000`** — the calibration matters. Pure black makes the emerald read radioactive; `#121212` lets it photograph.
2. **Set Circular display at weight 400, zero tracking** — this is the discipline. Going to weight 600 with tight tracking puts you in Vercel/Linear territory; Supabase refuses.
3. **Reserve `#3ecf8e` for action only** — if emerald appears on more than the CTA, brand wordmark, and active links, you''re overusing.
4. **Use Office Code Pro for labels** — Inter or Circular for labels reads as generic SaaS. The mono is the developer signal.
5. **Show real code blocks** — Supabase''s code is marketing. Surface SQL snippets, function signatures, table previews directly on the page.
6. **Layer depth with HSL** — `#121212` → `#171717` → `#212121` → `#262626`. Each step 2–4% lighter. Add 1px borders. Avoid shadows on cards.
7. **Add the brand-glow only to the primary CTA on hover** — `0 0 24px rgba(0,98,57,0.4)`. Nothing else gets this treatment.
8. **Set radii small** — 6px buttons, 8px cards, 16px max for hero shells. Tight radii = product not poster.
