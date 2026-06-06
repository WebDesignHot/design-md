---
name: Convex
tagline: Warm cream canvas, near-black ink, GT America — a reactive backend that dresses like a broadsheet.
updated_at: 2026-05-29T21:44:09.974Z
published_at: 2026-05-29T21:44:09.974Z
author: webdesignhot
source_url: https://www.convex.dev
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, sans, developer, warm, editorial]
preview_swatch: ['#f6eedb', '#1a1a1a', '#fdf4cc']
related: [supabase, vercel, linear]
description: 'Convex dresses a reactive backend in a warm cream broadsheet — a `#f6eedb` canvas instead of the obligatory dev-tool off-black, near-black `#141414` ink set in GT America, and `#1a1a1a` solid-pill CTAs that carry pale-yellow `#fdf4cc` text. Where every other backend-as-a-service reaches for a dark terminal, Convex reaches for newsprint warmth, then enforces it with one tight near-monochrome ladder.'

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-muted
  border: border
  ring: focus-ring
colors:
  bg: '#f6eedb'                      # body bg rgb(246,238,219) — warm cream canvas (LIVE)
  bg-alt: '#fbf7ec'                  # lifted cream panel, one stop brighter than canvas
  bg-warm: '#efe5cd'                 # recessed cream, alternating section band
  surface: '#1a1a1a'                # dark inverted section / CTA fill — near-black
  surface-deep: '#141414'           # deepest inverted band, footer
  text: '#141414'                   # body color rgb(20,20,20) — near-black ink (LIVE)
  text-strong: '#000000'            # display peak, rare
  text-muted: '#555555'             # secondary descriptive on cream — 6.45:1
  text-faint: '#6b6b6b'             # tertiary / metadata on cream — 4.61:1
  text-on-dark: '#ffffff'           # copy on inverted dark bands — h2 observed white
  text-on-brand: '#fdf4cc'          # pale-yellow CTA label on near-black pill (LIVE accent)
  brand: '#1a1a1a'                  # primary CTA fill rgb(26,26,26) — near-black (LIVE)
  brand-hover: '#292929'            # CTA hover lift / white-pill ink rgb(41,41,41)
  accent: '#fdf4cc'                 # pale yellow rgb(253,244,204) — CTA text, highlight (LIVE)
  accent-soft: '#faecae'            # deeper pale-yellow tint, hover wash
  on-white: '#292929'              # ink on white secondary pill rgb(41,41,41)
  pill-white: '#ffffff'             # secondary CTA fill — white pill
  fill-subtle: 'rgba(0,0,0,0.05)'   # 5% black overlay — ghost pill on cream (LIVE oklab)
  fill-subtle-inv: 'rgba(255,255,255,0.05)' # 5% white overlay — ghost pill on dark (LIVE oklab)
  border: 'rgba(20,20,20,0.12)'     # hairline on cream — near-black at 12%
  border-strong: 'rgba(20,20,20,0.22)' # selected / focused edge
  border-on-dark: 'rgba(255,255,255,0.12)' # hairline on inverted bands
  focus-ring: '#1a1a1a'             # near-black focus outline on cream
  focus-ring-dark: '#fdf4cc'        # pale-yellow focus on inverted bands
  selection-bg: '#1a1a1a'
  selection-text: '#fdf4cc'
  shadow: 'rgba(20,20,20,0.08)'     # soft warm shadow, used sparingly
  link: '#141414'                   # links are ink with underline, not a colour
  link-hover: '#1a1a1a'
  success: '#3f7d4e'                # muted forest green — semantic only
  warning: '#b8860b'               # dark goldenrod — semantic only
  danger: '#9b3232'                # muted brick red — semantic only
  info: '#3a5a8c'                  # muted slate blue — semantic only
  on-brand: '#fdf4cc'              # canonical: label colour on brand fill

typography:
  display:
    family: 'gtAmerica, "GT America", system-ui, -apple-system, sans-serif'
    weights: [500, 600, 700]
    opentype-features: ['kern', 'liga']
  body:
    family: 'gtAmerica, "GT America", system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['kern', 'liga']
  mono:
    family: '"GT America Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 72, weight: 700, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    display-lg:      { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.025em', family: display }
    h1:              { size: 42, weight: 700, lineHeight: 1.1,  tracking: '-0.02em',  family: display }
    h2:              { size: 32, weight: 700, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.01em',  family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.3,  tracking: '-0.005em', family: display }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.01em',   family: body }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.3,  tracking: '0.12em',   family: mono }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    code-inline:     { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: mono }
    code-block:      { size: 13, weight: 400, lineHeight: 1.6,  tracking: '0',        family: mono }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  featured: 24
  pill: 9999

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
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — colour fades stay, transforms collapse'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'none'
  standard: '0 1px 2px rgba(20,20,20,0.06)'
  soft: '0 4px 16px rgba(20,20,20,0.08)'
  elevated: '0 12px 32px rgba(20,20,20,0.12)'
  ring: '0 0 0 2px #1a1a1a'
  ring-dark: '0 0 0 2px #fdf4cc'

accessibility:
  contrast-text-on-bg: 15.94            # 141414 on f6eedb — AAA
  contrast-brand-on-bg: 15.06           # 1a1a1a on f6eedb — AAA
  contrast-on-brand: 15.74              # fdf4cc on 1a1a1a — AAA
  contrast-white-on-brand: 17.4         # ffffff on 1a1a1a — AAA
  contrast-text-muted-on-bg: 6.45       # 555555 on f6eedb — AAA body
  focus-ring: '2px solid #1a1a1a on cream, #fdf4cc on dark, 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'tab order DOM-based, skip-link to #main, all CTAs reachable'

components:
  button-primary:
    bg: '#1a1a1a'
    text: '#fdf4cc'
    radius: 9999
    padding: '12px 20px'
    font: 'body, 15px, weight 600'
    hover: 'bg #292929, no transform'
    use: 'primary CTA — "Start building"'
  button-white:
    bg: '#ffffff'
    text: '#292929'
    radius: 9999
    padding: '12px 20px'
    font: 'body, 15px, weight 600'
    hover: 'bg #f6eedb tint, subtle shadow'
    use: 'secondary CTA on dark bands — white pill'
  button-ghost:
    bg: 'rgba(20,20,20,0.05)'
    text: '#141414'
    radius: 12
    padding: '10px 16px'
    border: '1px solid rgba(20,20,20,0.12)'
    hover: 'bg rgba(20,20,20,0.08)'
    use: 'tertiary chip on cream — "Convex vs. Firebase"'
  button-ghost-dark:
    bg: 'rgba(255,255,255,0.05)'
    text: '#ffffff'
    radius: 9999
    padding: '10px 16px'
    border: '1px solid rgba(255,255,255,0.12)'
    hover: 'bg rgba(255,255,255,0.08)'
    use: 'ghost chip on dark bands — "GitHub · 20,531 stars"'
  card:
    bg: '#fbf7ec'
    border: '1px solid rgba(20,20,20,0.12)'
    radius: 16
    padding: '24px'
    hover: 'border rgba(20,20,20,0.22), 0 4px 16px rgba(20,20,20,0.08)'
    use: 'feature card on cream canvas'
  card-dark:
    bg: '#1a1a1a'
    text: '#ffffff'
    border: '1px solid rgba(255,255,255,0.12)'
    radius: 16
    padding: '24px'
    use: 'inverted feature card / product proof tile'
  input:
    bg: '#fbf7ec'
    text: '#141414'
    placeholder: '#6b6b6b'
    border: '1px solid rgba(20,20,20,0.12)'
    radius: 12
    padding: '10px 14px'
    focus: 'border #1a1a1a, ring 2px #1a1a1a'
    use: 'email capture, search'
  badge:
    bg: 'rgba(20,20,20,0.05)'
    text: '#141414'
    radius: 9999
    padding: '4px 10px'
    font: 'mono eyebrow, 12px, weight 600, tracking 0.12em uppercase'
    use: 'status, version, section eyebrow'
  badge-accent:
    bg: '#fdf4cc'
    text: '#1a1a1a'
    radius: 9999
    padding: '4px 10px'
    use: 'highlighted label — "NEW", "BETA"'
  nav-link:
    text: '#141414'
    hover: 'underline, no colour shift'
    active: 'weight 600'
    spacing: '24px between items'
    use: 'top nav, footer'

dark-mode: 'inverted-band, not theme-toggle — Convex is light-first cream, with near-black `#1a1a1a` sections punched in for contrast and product proof. No user-facing dark toggle on marketing.'

lineage:
  summary: |
    Convex makes one defiant choice up front: it refuses the dev-tool
    dark canvas. Where Supabase, Vercel, Linear and nearly every other
    backend-as-a-service opens on off-black, Convex opens on a warm
    cream `#f6eedb` — the colour of newsprint, of a broadsheet, of a
    paper notebook. The ink is a near-black `#141414` set in GT America,
    Grilli Type''s American-grotesque workhorse, at a confident 42px/700
    for the H1. The result reads less like a terminal and more like a
    well-set technical journal. The brand colour is not a colour at all
    in the chromatic sense — it''s the near-black `#1a1a1a` of the solid
    pill CTA, which carries a single warm accent: pale-yellow `#fdf4cc`
    text. That cream-on-paper / near-black-on-pill pairing is the entire
    identity. The palette is almost monochrome: cream canvas, near-black
    ink, one pale-yellow accent, plus inverted dark bands that flip the
    whole system to `#1a1a1a` with white copy for product-proof tiles.
    Convex enforces this with broadsheet discipline — generous editorial
    type, hairline borders at 12% ink, pill and 12–16px radii, and almost
    no shadow. It is the dev-tool site that dresses like print, and the
    warmth is the point: a reactive backend that feels human, not
    machine-room. The contemporaries it watches are the editorial-warm
    school (Anthropic''s clay-and-cream, Vercel''s typographic restraint)
    rather than the terminal-dark school it shares a market with.
  influences:
    - name: 'Grilli Type (GT America)'
      role: 'The typeface itself — American gothic meets European grotesque; carries Convex display at 700 with broadsheet authority.'
      url: https://www.grillitype.com/typeface/gt-america
    - name: 'Anthropic'
      role: 'The warm, paper-toned, near-monochrome editorial register for a technical product — clay and cream over terminal black.'
      url: https://www.anthropic.com
    - name: 'Stripe'
      role: 'Single-accent restraint and typographic confidence — let the type and one warm note do the work, no chromatic noise.'
      url: https://stripe.com
    - name: 'Vercel'
      role: 'Near-monochrome dev-tool palette and pill CTA discipline — Convex keeps the geometry, swaps the canvas to cream.'
      url: https://vercel.com
    - name: 'Supabase'
      role: 'The backend-as-a-service marketing posture Convex deliberately inverts — same audience, opposite canvas.'
      url: https://supabase.com
    - name: 'Swiss / broadsheet editorial tradition'
      role: 'Paper-warm ground, ink-black type, hairline rules, generous measure — newsprint discipline applied to a SaaS site.'
      url: https://en.wikipedia.org/wiki/International_Typographic_Style
---

## 1. Visual Theme & Atmosphere

Convex opens on a warm cream canvas — `#f6eedb`, the colour of newsprint and paper notebooks — and that single decision separates it from almost every product in its category. Backend-as-a-service is a dark-canvas genre: Supabase at `#121212`, Vercel at pure black, Linear, PlanetScale, Neon all reaching for the off-black terminal register. Convex reaches for the opposite. The cream is not beige-by-accident; it is a calibrated, slightly yellow-warm ground that makes near-black ink read as printed rather than projected, and that frames the near-black CTA pills like type on a page.

The ink is `#141414` — near-black, not pure black — set in **GT America**, Grilli Type's American-grotesque that splits the difference between US gothic and European grotesque. The H1 lands at 42px/700 with tight negative tracking, the kind of confident editorial display you'd find at the top of a broadsheet feature, not the geometric-humanist roundness Supabase gets from Circular. GT America gives Convex an engineered seriousness with a hint of warmth — appropriate for a reactive backend that wants to feel approachable rather than machine-room.

The brand colour, in the strict sense, is the near-black `#1a1a1a` of the primary CTA fill — and it carries the page's only true accent: pale-yellow `#fdf4cc` text inside that pill. This is the signature pairing. Cream paper ground, near-black ink, near-black pill, pale-yellow label. The whole identity fits in those four values. There is no blue, no purple, no emerald doing the action work — Convex is essentially a near-monochrome system with one warm note, the way a great broadsheet is black ink on cream with a single spot colour for the masthead.

The page alternates the cream canvas with inverted dark bands. Where Convex needs to show product proof — code, a database preview, a feature tile — it punches a `#1a1a1a` section into the cream, flips text to white, and lets the contrast do the framing. The h2 in those dark bands is observed as pure white at 32px/700. This inversion is Convex's only "dark mode": not a toggle, but a compositional rhythm of paper and ink, light section and dark section, marching down the page.

Geometry is soft-modern. Radii run 12–16px on cards and chips, and the CTA pills are fully rounded (the probe reports a 33,554,432px radius — the canonical "infinite pill" value). Borders are hairlines at roughly 12% ink. Shadows are nearly absent — depth comes from the cream/ink tonal flip and the occasional very soft warm shadow, never a hard drop. The atmosphere is warm, literate, and unhurried: a developer tool that decided to look like a thoughtfully typeset journal.

**Key Characteristics**
- Warm cream canvas `#f6eedb` — newsprint, not off-black; the defining contrarian choice
- Near-black ink `#141414` in GT America — broadsheet display authority at 42px/700
- Near-black `#1a1a1a` solid pill CTAs carrying pale-yellow `#fdf4cc` labels — the signature pairing
- Almost monochrome: cream + near-black + one pale-yellow accent
- Inverted dark `#1a1a1a` bands for product proof — paper/ink rhythm as "dark mode"
- White secondary pills (`#292929` ink) on dark bands; 5% overlay ghost chips on both grounds
- Fully-rounded pill CTAs, 12–16px radius on cards and chips
- Hairline borders at ~12% ink — almost no shadow, depth from tonal flip
- GT America Mono for eyebrows, code, and version tags
- Reads like a typeset technical journal, not a terminal

## 2. Color Palette & Roles

### Canvas
- **bg** `#f6eedb`: the signature warm cream canvas (LIVE: `rgb(246,238,219)`) — the page ground, newsprint-toned.
- **bg-alt** `#fbf7ec`: lifted cream, one stop brighter — card fills, input backgrounds.
- **bg-warm** `#efe5cd`: recessed cream, one stop deeper — alternating section band on the light side.

### Text / Ink
- **text** `#141414`: primary ink (LIVE: `rgb(20,20,20)`) — body and most display copy on cream.
- **text-strong** `#000000`: pure-black display peak — used rarely for maximum weight.
- **text-muted** `#555555`: secondary descriptive copy on cream — 6.45:1, AAA body.
- **text-faint** `#6b6b6b`: tertiary / metadata / placeholder on cream — 4.61:1, AA.
- **text-on-dark** `#ffffff`: copy on inverted dark bands (LIVE: h2 observed white).
- **text-on-brand** `#fdf4cc`: pale-yellow label inside near-black CTA pills (LIVE accent).

### Brand
- **brand** `#1a1a1a`: the near-black CTA fill and brand value (LIVE: `rgb(26,26,26)`) — the action colour.
- **brand-hover** `#292929`: CTA hover lift; also the ink colour of white secondary pills (LIVE: `rgb(41,41,41)`).
- **surface** `#1a1a1a`: same near-black used as inverted-band / dark-card background.
- **surface-deep** `#141414`: deepest inverted band, footer.

### Accent
- **accent** `#fdf4cc`: pale yellow (LIVE: `rgb(253,244,204)`) — CTA label colour, highlight wash, the page's single warm note.
- **accent-soft** `#faecae`: a deeper pale-yellow tint for hover washes and emphasis underlays.

### Interactive / Overlay
- **fill-subtle** `rgba(20,20,20,0.05)`: 5% black overlay — ghost-chip fill on cream (LIVE: derived from `oklab(0.28… / 0.05)`).
- **fill-subtle-inv** `rgba(255,255,255,0.05)`: 5% white overlay — ghost-chip fill on dark bands (LIVE: `oklab(0.99… / 0.05)`).
- **pill-white** `#ffffff`: white secondary-CTA fill on dark bands (LIVE: `rgb(255,255,255)`).
- **on-white** `#292929`: ink on the white secondary pill (LIVE: `rgb(41,41,41)`).
- **link** `#141414` / **link-hover** `#1a1a1a`: links are ink with an underline, not a coloured value.

### Borders
- **border** `rgba(20,20,20,0.12)`: hairline rule on cream — near-black at 12% alpha.
- **border-strong** `rgba(20,20,20,0.22)`: selected / focused / hovered edge on cream.
- **border-on-dark** `rgba(255,255,255,0.12)`: hairline on inverted dark bands.

### Focus / Selection
- **focus-ring** `#1a1a1a`: near-black focus outline on cream, 2px at 2px offset.
- **focus-ring-dark** `#fdf4cc`: pale-yellow focus outline on inverted dark bands.
- **selection-bg** `#1a1a1a` / **selection-text** `#fdf4cc`: text selection inverts to near-black with pale-yellow text.

### Shadow
- **shadow** `rgba(20,20,20,0.08)`: a soft warm shadow — used sparingly; cards mostly rely on the cream/ink tonal flip for depth.

### Semantic (reserved — rarely surfaced on marketing)
- **success** `#3f7d4e`: muted forest green.
- **warning** `#b8860b`: dark goldenrod (kin to the accent, but functional).
- **danger** `#9b3232`: muted brick red.
- **info** `#3a5a8c`: muted slate blue.

## 3. Typography Rules

### Font Family

- **Primary display & body**: `GT America` (alias `gtAmerica`) — Grilli Type's American-grotesque. Falls back to `system-ui`, `-apple-system`, then a generic sans. Used for everything from the 42px hero to 14px captions.
- **Mono companion**: `GT America Mono` (with `ui-monospace` / SF Mono / Menlo fallbacks) — used for eyebrows, code blocks, version tags, and developer microcopy.
- **No serif voice**: Convex's editorial warmth comes from the cream ground and GT America's grotesque, not from a serif. The system is sans + mono only.
- **OpenType features**: `kern` and `liga` on throughout.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Notes |
|------|------|------|--------|-------------|----------|-------|
| display-hero | GT America | 72 | 700 | 1.0 | -0.03em | Oversized opener (rare) |
| display-lg | GT America | 56 | 700 | 1.05 | -0.025em | Major section opener |
| h1 | GT America | 42 | 700 | 1.1 | -0.02em | **Observed hero peak** |
| h2 | GT America | 32 | 700 | 1.15 | -0.015em | Section head — **white on dark bands (observed)** |
| h3 | GT America | 24 | 600 | 1.25 | -0.01em | Sub-section head |
| h4 | GT America | 20 | 600 | 1.3 | -0.005em | Card title |
| body-lg | GT America | 18 | 400 | 1.55 | 0 | Hero deck, lead paragraph |
| body | GT America | 16 | 400 | 1.55 | 0 | **Default reading size (observed)** |
| body-sm | GT America | 14 | 400 | 1.5 | 0 | Card description, fine print |
| label | GT America | 13 | 500 | 1.4 | 0.01em | Form labels, nav |
| eyebrow | GT America Mono | 12 | 600 | 1.3 | 0.12em | All-caps section kicker — **mono** |
| caption | GT America | 12 | 500 | 1.4 | 0.02em | Image caption, metadata |
| code-inline | GT America Mono | 14 | 400 | 1.5 | 0 | Inline code, API names |
| code-block | GT America Mono | 13 | 400 | 1.6 | 0 | Code samples |

### Principles

- **Display is bold and tracked tight.** Unlike Supabase's weight-400 geometry-carries-it discipline, Convex pushes display to **700** and pulls tracking negative (-0.02em at H1). This is broadsheet headline energy — confident, set tight, ink-heavy.
- **Ink, not colour, is the type voice.** Display and body are `#141414` on cream; on dark bands they flip to white. Colour never enters the type itself — the only chroma is the pale-yellow accent inside CTA pills.
- **Eyebrows are mono, uppercase, widely tracked.** GT America Mono at 12px, weight 600, 0.12em — the developer-credibility marker, the way Supabase uses Office Code Pro for labels.
- **One family does almost everything.** GT America carries hero to caption; GT America Mono handles eyebrows and code. No third family, no serif.
- **Generous line-height on body.** 1.55 reading rhythm — the editorial, unhurried measure that matches the paper-warm ground.
- **Negative tracking scales with size.** Tightest at the hero (-0.03em), relaxing to zero by body — large type is set like a headline, reading type at its natural width.
- **Body floor is 12px.** Caption and eyebrow sit at 12px; nothing on the marketing surface goes smaller.

## 4. Component Stylings

### Buttons

**Primary (near-black pill — the signature)**
- Background: `#1a1a1a`
- Text: `#fdf4cc` (pale yellow), GT America 15px weight 600
- Padding: 12px 20px
- Radius: 9999px (full pill — LIVE radius reported as ~3.3e7px = infinite pill)
- Border: none
- Hover: bg lifts to `#292929`, no transform
- Focus: 2px `#1a1a1a` ring at 2px offset (on dark bands: `#fdf4cc` ring)
- Use: primary CTA — "Start building"

**White (secondary on dark bands)**
- Background: `#ffffff`
- Text: `#292929`, GT America 15px weight 600
- Padding: 12px 20px
- Radius: 9999px (full pill)
- Hover: subtle cream tint + soft shadow
- Use: secondary action sitting on a `#1a1a1a` inverted section

**Ghost chip on cream (tertiary)**
- Background: `rgba(20,20,20,0.05)` (5% ink overlay)
- Text: `#141414`, GT America 14px weight 500
- Padding: 10px 16px
- Radius: 12px
- Border: 1px solid `rgba(20,20,20,0.12)`
- Hover: bg deepens to `rgba(20,20,20,0.08)`
- Use: comparison / nav chips — "Convex vs. Firebase"

**Ghost chip on dark (tertiary inverted)**
- Background: `rgba(255,255,255,0.05)` (5% white overlay)
- Text: `#ffffff`, GT America 14px weight 500
- Padding: 10px 16px
- Radius: 9999px (pill)
- Border: 1px solid `rgba(255,255,255,0.12)`
- Hover: bg deepens to `rgba(255,255,255,0.08)`
- Use: social-proof chips on dark bands — "GitHub · 20,531 stars"

### Cards

**Standard feature card (on cream)**
- Background: `#fbf7ec` (lifted cream)
- Border: 1px solid `rgba(20,20,20,0.12)`
- Radius: 16px
- Padding: 24px
- Hover: border to `rgba(20,20,20,0.22)`, soft `0 4px 16px rgba(20,20,20,0.08)` shadow
- Use: feature grid on the light canvas

**Inverted dark card (product proof)**
- Background: `#1a1a1a`
- Text: `#ffffff`
- Border: 1px solid `rgba(255,255,255,0.12)`
- Radius: 16px
- Padding: 24px
- Use: code preview, database mockup, contrast tile inside a light section

### Badges & Chips

**Default tag / eyebrow**
- Background: `rgba(20,20,20,0.05)`
- Text: `#141414`, GT America Mono 12px weight 600, tracking 0.12em uppercase
- Padding: 4px 10px
- Radius: 9999px (pill)
- Use: status, version, section kicker — mono is the chip voice

**Accent tag**
- Background: `#fdf4cc` (pale yellow)
- Text: `#1a1a1a`
- Radius: 9999px (pill)
- Padding: 4px 10px
- Use: highlighted label — "NEW," "BETA," "LIVE"

### Inputs

- Background: `#fbf7ec` (lifted cream)
- Text: `#141414`
- Placeholder: `#6b6b6b`
- Border: 1px solid `rgba(20,20,20,0.12)`
- Radius: 12px
- Padding: 10px 14px
- Focus: border `#1a1a1a`, 2px `#1a1a1a` ring
- Use: email capture, search, docs sign-up

### Navigation

- Background: cream `#f6eedb`, transparent over canvas; subtle bottom hairline on scroll
- Items: `#141414` ink; hover reveals an underline (no colour shift); active state goes weight 600
- Spacing: 24px between top-level items
- CTA: near-black pill ("Start building") anchored right, with pale-yellow text
- Mobile: hamburger reveals a stacked overlay panel at h4 size on cream

## 5. Layout Principles

### Spacing System
Base unit = 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Cards take 24px padding; sections breathe at 64–96px vertical. The rhythm is editorial — more generous than a dashboard, calmer than a poster.

### Grid & Container
Container max-width 1280px with 24px gutters. Prose constrains to ~720px for readability — a broadsheet measure. Hero is full-width with content centred or left-aligned within the container. Feature grids run two- or three-up at desktop, collapsing gracefully.

### Whitespace Philosophy
Whitespace is warm and intentional. The cream ground means negative space is never empty — it's *paper*, and it carries the design. Sections alternate cream and inverted-dark, so whitespace also serves as the tonal beat between bands. Convex resists clutter: each section makes one point with room to breathe.

### Section Cadence
Tonal alternation is the structural device: cream canvas (`#f6eedb`) → inverted dark band (`#1a1a1a`, white copy) → cream (`#efe5cd` recessed variant) → dark → cream. Product proof (code, DB previews) lives in the dark bands; explanation and benefits live on cream. The pale-yellow accent appears only as CTA-pill text and the rare highlight, never as a section fill.

## 6. Shapes & Radius Scale

| Tier | Px | Use |
|------|----|-----|
| Micro | 2 | Minor inset, divider cap |
| Small | 4 | Tight chip, inline tag |
| Medium | 8 | Compact control, small input |
| Comfortable | 12 | Ghost chip, input, small card (LIVE: comparison chip = 12px) |
| Large | 16 | **Card default, large chip (LIVE: dark CTA = 16px)** |
| Featured | 24 | Hero shell, large feature tile (rare) |
| Pill | 9999 | **Primary & white CTA, status badges (LIVE: ~3.3e7px = full pill)** |

The radius story is a deliberate split: containers and chips sit at the soft-modern 12–16px tier, while the action elements — the CTAs and badges — go fully round to pills. That pill-vs-rounded-rect contrast is part of the signature: the near-black pill reads as a discrete, tappable object floating on the cream page, while cards stay calm rounded rectangles. Nothing is sharp-cornered; the warmth of the palette is echoed in the geometry.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | `#f6eedb` flat cream | Canvas |
| 1 | `#fbf7ec` lifted cream + 1px `rgba(20,20,20,0.12)` border | Card, input, panel |
| 2 | `#fbf7ec` + `0 4px 16px rgba(20,20,20,0.08)` soft shadow | Hovered card, raised tile |
| 3 | `#1a1a1a` inverted band (tonal flip, no shadow) | Product-proof section, dark card |
| 4 | `#fbf7ec` + `0 12px 32px rgba(20,20,20,0.12)` | Popover, dropdown, modal |

**Shadow Philosophy**: Convex is a low-shadow system. Most "elevation" is communicated by the tonal flip between cream and near-black bands, and by hairline borders at 12% ink — not by stacked shadows. When a shadow does appear, it's soft, warm-tinted (`rgba(20,20,20,0.08)`), and diffuse, like an object resting on paper under soft light. There is no glow, no coloured halo, no hard drop. The result feels physical and printed rather than glassy or layered. Borders carry most of the edge definition; cards lift on hover with a barely-there shadow plus a border darkening from 12% to 22% ink.

## 8. Interaction & Motion

### Easing Curves
- **ease-standard** `cubic-bezier(0.4, 0, 0.2, 1)` — colour, opacity, default transitions.
- **ease-emphasized** `cubic-bezier(0.16, 1, 0.3, 1)` — overlay and panel entrances.
- **ease-out** `cubic-bezier(0, 0, 0.2, 1)` — exits and dismissals.

### Duration Buckets
- **fast** 150ms — hover colour/border shifts.
- **standard** 240ms — card lift, panel fade, accordion.
- **slow** 320ms — modal entrance, section reveal.

### Per-Component Micro-States
- **Primary CTA hover** — near-black `#1a1a1a` → `#292929` over 150ms; pale-yellow text holds. No transform; the colour shift is the whole interaction.
- **White pill hover** — picks up a faint cream tint and a soft shadow over 150ms.
- **Card hover** — border darkens `rgba(20,20,20,0.12)` → `rgba(20,20,20,0.22)` over 150ms; soft shadow fades in over 240ms; no lift transform.
- **Nav link hover** — underline grows from 0 to full width over 200ms; ink colour unchanged.
- **Ghost chip hover** — overlay deepens from 5% to 8% over 150ms.
- **Section reveal** — content fades up (translateY 8px → 0, opacity 0 → 1) on intersection at 320ms with ease-emphasized.

### Page Transitions
Hard cuts on navigation. Anchor scroll uses ease-standard at ~500ms. The cream/dark band alternation makes scrolling itself feel like turning broadsheet pages — the tonal beat is the page's primary motion rhythm.

### Reduced Motion Strategy
With `prefers-reduced-motion: reduce`, all translate/scale transforms are removed; colour and opacity fades remain (they aren't spatially disorienting). Section reveals collapse to a simple opacity fade. Motion budget under reduced-motion stays under 240ms per transition.

## 9. Accessibility & A11y

### Contrast Pairs (WCAG, computed from live tokens)
- **Text on canvas**: `#141414` on `#f6eedb` = **15.94:1** — AAA.
- **Brand on canvas**: `#1a1a1a` on `#f6eedb` = **15.06:1** — AAA (the CTA pill reads strongly against cream).
- **Accent label on brand**: `#fdf4cc` on `#1a1a1a` = **15.74:1** — AAA (pale-yellow CTA text is highly legible).
- **White on brand**: `#ffffff` on `#1a1a1a` = **17.4:1** — AAA (dark-band copy / white pill ink).
- **Muted text on canvas**: `#555555` on `#f6eedb` = **6.45:1** — AAA for body.
- **Faint text on canvas**: `#6b6b6b` on `#f6eedb` = **4.61:1** — AA (reserve for metadata/placeholder, not body).
- **White-pill ink on white**: `#292929` on `#ffffff` = **14.55:1** — AAA.
- **Border on canvas**: `rgba(20,20,20,0.12)` over cream — non-text decorative; meets the 3:1 graphical threshold for component edges.

### Focus Indicators
2px solid `#1a1a1a` outline at 2px offset on cream; on inverted dark bands the ring flips to pale-yellow `#fdf4cc` for the same 2px solid treatment. Outline is solid, never dashed, and visible at all times on keyboard focus.

### ARIA Patterns
- Top nav uses `<nav aria-label="Primary">`.
- Inverted product-proof code regions use `role="region" aria-label="Code example"`.
- Modals use `role="dialog"` with `aria-modal="true"`.
- Form inputs carry visible labels; placeholders are supplemental, never the only label.
- Comparison toggles ("Convex vs. Firebase") use `role="tablist"` where applicable.

### Keyboard Navigation
- Tab order follows DOM order.
- Skip-link to `#main` becomes visible on focus.
- Modals trap focus and restore on close; Escape dismisses overlays.
- Code blocks expose a "Copy" button reachable via Tab.

### Screen Reader Hints
- Decorative SVG (logos, ornament) hidden with `aria-hidden`.
- Icon-only controls (copy, expand) carry `aria-label`.
- Live regions announce form validation.
- The cream/dark band inversion is purely visual — content order and semantics are unaffected.

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
Minimum 44×44px on mobile. The near-black pill CTA grows to a 44px tap height on touch; ghost chips gain vertical padding to clear the same target.

### Collapsing Strategy
- **Hero**: 42px H1 holds on tablet, drops toward 32–34px on mobile to keep the headline on two or three lines.
- **Feature grid**: three-up → two-up → single column.
- **Inverted bands**: full-bleed dark sections stay full-bleed on mobile; their inner code/preview content becomes horizontally scrollable.
- **Nav**: full bar → hamburger overlay panel at h4 size on cream.
- **Section padding**: 96px → 64px → 48px across breakpoints.

### Image Behavior
Product screenshots and database mockups use `object-fit: contain` inside fixed-aspect frames; on mobile, dark code previews scroll horizontally to preserve line breaks. SVG logos and ornament scale fluidly.

### Container Queries
Used on feature grids and the dashboard/code preview tiles, where layout depends on the parent band width rather than the viewport.

## 11. Content & Voice

### Tone
Builder-direct and a little warm. Convex writes for developers building apps and agents — "the backend building blocks for your agents" — so the copy is concrete and capability-led, but the cream-and-ink dressing keeps it from feeling cold. It's confident without being terse; informative without marketing fluff. The register sits between Stripe's polish and a good engineering blog.

### Microcopy Patterns
- Buttons: imperative — "Start building," verb-first and ownable.
- Comparison: framed as direct head-to-heads — "Convex vs. Firebase."
- Social proof: factual and quantified — "GitHub · 20,531 stars."
- Errors: technical and actionable — "Couldn't sync. Check your deployment URL."
- Empty states: instructive — "No functions yet. Deploy your first function to get started."

### CTA Verb Conventions
- "Start building" (default hero — the owned positioning)
- "Read the docs" (not "Learn more")
- "Talk to us" / "Book a demo" (not "Contact sales")
- "View on GitHub" (open-source proof, surfaced not hidden)

The voice trusts the reader to be a builder and leads with what they can do, not with what the product is.

## 12. Dark Mode & Theming

Convex is **light-first**, not dark-toggle. The marketing surface lives on the warm cream `#f6eedb` canvas, and its "dark mode" is compositional rather than a user setting: near-black `#1a1a1a` bands are punched into the cream to host product proof — code, database previews, contrast tiles — flipping copy to white and CTAs to white pills. There is no user-facing theme switch on marketing; the cream-and-ink rhythm *is* the design.

If a true toggled dark theme were ever shipped, the implied swap would invert the whole system rather than recolour it: canvas `#f6eedb` → `#141414`, ink `#141414` → `#f6eedb` (or white), cards `#fbf7ec` → `#1a1a1a`, and the CTA pill would flip to a cream/white fill with near-black text — keeping the pale-yellow `#fdf4cc` accent as the one warm constant. But Convex's identity is the *warm light* canvas; the dark bands exist precisely to make that warmth read, and a full dark mode would dissolve the contrast that defines the brand.

## 13. Lineage & Influences

Convex inherits from two opposed traditions and resolves them. From the dev-tool school (Vercel, Supabase, Linear) it takes the near-monochrome palette, the pill CTA, the mono eyebrow, and the product-as-marketing posture — but it pointedly rejects that school's defining move, the off-black canvas. From the editorial-warm school (Anthropic's clay-and-cream, the broadsheet / Swiss typographic tradition) it takes the paper-toned ground, the ink-black GT America display, the hairline rules, and the generous measure. The synthesis — a reactive backend dressed like a typeset journal — is distinctively Convex.

The single most copy-able and most copy-resistant decision is the cream canvas paired with the near-black pill. `#f6eedb` is warm enough to read as paper but not so warm it reads as a vintage gimmick; the near-black `#1a1a1a` pill with pale-yellow `#fdf4cc` text is the masthead-spot-colour move applied to a CTA. Get the cream too yellow and it looks aged; too grey and the warmth (and the whole point) evaporates. The near-monochrome restraint — no second accent — is what holds it together, the same single-accent discipline Stripe and Supabase enforce, just executed in ink-on-paper rather than emerald-on-black.

**Named influences**:
- Grilli Type / GT America (https://www.grillitype.com/typeface/gt-america) — the grotesque that gives display its broadsheet authority.
- Anthropic (https://www.anthropic.com) — the warm, paper-toned, near-monochrome editorial register for a technical product.
- Stripe (https://stripe.com) — single-accent restraint and typographic confidence.
- Vercel (https://vercel.com) — near-monochrome dev-tool palette and pill-CTA geometry.
- Supabase (https://supabase.com) — the backend-as-a-service posture Convex deliberately inverts (same audience, opposite canvas).
- Swiss / broadsheet editorial tradition (https://en.wikipedia.org/wiki/International_Typographic_Style) — paper ground, ink type, hairline rules, generous measure.

## 14. Do's and Don'ts

### Do
- Build on the warm cream `#f6eedb` canvas — it's the identity; resist the reflex to make a dev tool dark.
- Set ink at `#141414`, never pure black, on cream — it reads as printed, warmer than `#000`.
- Use GT America at weight **700** with negative tracking for display — broadsheet headline energy.
- Make the primary CTA a near-black `#1a1a1a` pill with pale-yellow `#fdf4cc` text — the signature pairing.
- Punch inverted `#1a1a1a` bands into the cream for product proof, flipping copy to white.
- Keep the system near-monochrome — cream, near-black, one pale-yellow accent. No second colour.
- Use GT America Mono for eyebrows, version tags, and code — uppercase, 0.12em tracking.
- Give containers 12–16px radii and CTAs/badges full pills — the soft-rect vs pill contrast is intentional.
- Define edges with hairline borders at ~12% ink; lean on the cream/dark tonal flip for depth.
- Honor `prefers-reduced-motion` — keep colour fades, drop transforms.

### Don't
- Default to an off-black canvas — that's the genre Convex exists to contradict.
- Use pure black `#000` for ink or fills — the near-blacks (`#141414`, `#1a1a1a`) carry the warmth.
- Introduce a second accent (blue, emerald, purple) — pale-yellow `#fdf4cc` is the only chroma, and only on CTAs/highlights.
- Set display at weight 400 expecting it to carry — Convex's display is bold and tracked tight, the opposite of Supabase.
- Put coloured text in body copy — type is ink (or white on dark), never tinted.
- Apply hard drop shadows or glows — depth is tonal and soft, like an object on paper.
- Make the cream too yellow or too grey — it must read as warm paper, not aged or washed-out.
- Use sharp 0px corners — everything is at least softly rounded; CTAs are full pills.
- Hide the open-source / GitHub proof behind a toggle — surface "View on GitHub · stars" directly.
- Recolour the CTA pill to a bright brand hue — the brand *is* near-black; the warmth lives in the pale-yellow label.

## 15. Agent Prompt Guide

### Quick Color Reference
- Bg (cream canvas): `#f6eedb`
- Bg lifted (card/input): `#fbf7ec`
- Surface / dark band / CTA fill: `#1a1a1a`
- Ink (text): `#141414`
- Text muted: `#555555`
- Text on dark band: `#ffffff`
- Accent (pale yellow / CTA label): `#fdf4cc`
- Brand (= CTA near-black): `#1a1a1a`
- CTA hover / white-pill ink: `#292929`
- Border (hairline): `rgba(20,20,20,0.12)`

### Example Component Prompts

> "Create a Convex-style hero on a warm cream `#f6eedb` canvas. The H1 sets at 42px in GT America weight 700 with -0.02em tracking and 1.1 line-height in near-black `#141414`. Below it, an 18px regular deck in `#555555`. Place a primary CTA as a fully-rounded near-black pill — `#1a1a1a` background with pale-yellow `#fdf4cc` text, weight 600, padding 12px 20px — that lifts to `#292929` on hover. Add a ghost chip beside it: `rgba(20,20,20,0.05)` fill, 1px `rgba(20,20,20,0.12)` border, 12px radius."

> "Design a Convex inverted product-proof band: a full-bleed `#1a1a1a` section punched into the cream page, with an h2 at 32px GT America weight 700 in white `#ffffff`. Inside, a dark card (`#1a1a1a`, 1px `rgba(255,255,255,0.12)` border, 16px radius, 24px padding) showing code in GT America Mono 13px. Anchor a white secondary pill CTA — `#ffffff` fill, `#292929` text, full pill — at the bottom."

> "Build a Convex feature card on cream: `#fbf7ec` background, 1px solid `rgba(20,20,20,0.12)` border, 16px radius, 24px padding. Title in GT America 20px weight 600 `#141414`, body in 16px regular `#555555`. Eyebrow above the title in GT America Mono 12px weight 600 tracking 0.12em uppercase. On hover, the border darkens to `rgba(20,20,20,0.22)` with a soft `0 4px 16px rgba(20,20,20,0.08)` shadow — no transform."

> "Create a Convex status badge: pale-yellow `#fdf4cc` background, near-black `#1a1a1a` text, GT America Mono 12px weight 600 tracking 0.12em uppercase, padding 4px 10px, full pill radius. Use for 'NEW,' 'BETA,' 'LIVE.' For a neutral variant, swap the fill to `rgba(20,20,20,0.05)` with `#141414` text."

> "Design a Convex social-proof chip for a dark band: `rgba(255,255,255,0.05)` fill, 1px `rgba(255,255,255,0.12)` border, full pill, white `#ffffff` text in GT America 14px weight 500, padding 10px 16px. Content like 'GitHub · 20,531 stars' with a small mark on the left."

### Iteration Guide

1. **Start on cream `#f6eedb`, not off-black** — this is the whole identity. If your draft is dark-canvas, you've built a generic dev tool, not Convex.
2. **Use near-blacks, never `#000`** — `#141414` for ink, `#1a1a1a` for pills and bands. The slight warmth is what makes the system feel printed.
3. **Make the CTA a near-black pill with pale-yellow text** — `#1a1a1a` fill, `#fdf4cc` label, full pill. If your CTA is any other colour, you've broken the signature.
4. **Push display to weight 700 with tight tracking** — Convex's headlines are bold broadsheet type, the opposite of Supabase's weight-400 restraint.
5. **Stay near-monochrome** — cream, near-black, one pale-yellow accent. If a second colour appears outside the semantic set, remove it.
6. **Alternate cream and dark bands** — explanation on cream, product proof in `#1a1a1a` sections with white copy. The tonal beat is the page's structure.
7. **Use GT America Mono for eyebrows and code** — uppercase, 0.12em tracking. Sans eyebrows read as generic SaaS.
8. **Keep shadows soft and rare** — depth comes from the cream/ink flip and 12%-ink hairlines, not from glows or hard drops.

---

*Theme-toggle audit: score=0, signals=[light-first cream canvas; inverted dark bands are compositional, not a user toggle]*
