---
name: Salesforce
tagline: Cloud-trust dashboards — Salesforce Sans on a sky-blue ground, with Astro the bear standing guard over a dense CRM portal.
author: webdesignhot
source_url: https://www.salesforce.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [saas]
tags: [light, structured, sans, dense, cool]
preview_swatch: ['#ffffff', '#0176d3', '#032d60']
related: [microsoft, slack, mailchimp]
description: 'Salesforce''s marketing surface is the cloud-trust aesthetic taken to its logical extreme — white ground, **Salesforce Sans** carrying the corporate voice, **ITC Avant Garde** flaring on hero numbers, and a layered cyan palette where `#0176d3` is the action blue, `#0d9dda` is the brand cyan, and `#032d60` is the navy that anchors enterprise gravity. Cloud-shaped panels (`#ebf6fe` tinted with cumulus illustrations), Astro-the-bear and Codey-the-otter mascots, and dense Lightning-style dashboards full of pipeline KPIs and Trailhead-orange (`#ff9a3c`) achievement badges all coexist on a stage built to convince a CFO that customer-relationship-management is software you can trust with your enterprise.'

colors:
  bg: '#ffffff'                # page canvas
  bg-cloud: '#ebf6fe'           # Salesforce light-blue Mica-tint
  bg-soft: '#f3f3f3'            # alternating section ground
  bg-deep: '#032d60'            # observed navy hero ground (deep enterprise blue)
  bg-deeper: '#001639'          # deepest navy band
  bg-creative: '#021f4b'        # Dreamforce campaign deep-navy
  surface: '#ffffff'            # card panel
  surface-tinted: '#f3fbff'     # cloud-tinted card variant
  surface-hover: '#f3f3f3'      # observed hover ground
  text: '#080707'               # observed body color (near-black)
  text-strong: '#080707'        # display
  text-body: '#181818'           # paragraph
  text-muted: '#3e3e3c'          # secondary copy
  text-faint: '#555555'          # caption (observed sample)
  text-on-deep: '#ffffff'       # white on navy hero
  text-on-deep-muted: 'rgba(255,255,255,0.85)' # subdued white on deep
  brand: '#0176d3'              # observed primary action blue (button)
  brand-hover: '#005ca6'        # pressed
  brand-active: '#0b5cab'       # observed darker blue
  brand-cyan: '#0d9dda'         # observed Salesforce sky-cyan (brand-mark hue)
  brand-deep-blue: '#0b5cab'    # secondary CTA navy
  brand-navy: '#032d60'         # enterprise gravity ground (Lightning navy)
  accent: '#0d9dda'             # brand-cyan as decorative
  accent-soft: '#ebf6fe'        # info / cloud-tint surface
  accent-strong: '#3860be'      # observed gradient stop (deep-cyan-blue)
  trailhead-orange: '#ff9a3c'   # achievement / Trailhead badge
  astro-yellow: '#fec934'       # mascot accent (Astro hat)
  ohana-green: '#04844b'        # Salesforce green (Ohana)
  semantic-success: '#04844b'
  link: '#0176d3'               # default anchor
  link-hover: '#005ca6'         # underline grows
  selected: 'rgba(1,118,211,0.10)' # row-selected
  border: '#dddbda'             # observed Lightning border default
  border-strong: '#c9c7c5'      # table separator
  border-subtle: '#ecebea'      # faint divider
  ring-focus: '#1589ee'         # Lightning focus ring
  shadow-card: 'rgba(0,0,0,0.10) 0 2px 4px'
  shadow-elevated: 'rgba(0,0,0,0.16) 0 4px 12px'
  on-brand: '#ffffff'
  on-cyan: '#ffffff'
  success: '#04844b'
  success-bg: '#cdefc4'
  warning: '#fe9339'
  warning-bg: '#feedca'
  danger: '#ba0517'
  danger-bg: '#feded8'
  info: '#0176d3'
  info-bg: '#aacbff'
  gradient-hero: 'linear-gradient(135deg, #032d60 0%, #0b5cab 50%, #0d9dda 100%)'

typography:
  display:
    family: '"ITC Avant Garde", "Salesforce Sans", Arial, sans-serif'
    weights: [400, 500, 700]
    note: 'Avant Garde reserved for hero numbers and Dreamforce campaign type'
  body:
    family: '"Salesforce Sans", Arial, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: '"Salesforce Mono", "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 400, lineHeight: 1.05, tracking: '-0.02em', family: display, opentype: 'kern' }
    display-xl:      { size: 64, weight: 400, lineHeight: 1.10, tracking: '-0.018em', family: display }
    display-lg:      { size: 48, weight: 700, lineHeight: 1.16, tracking: '-0.012em', family: body }
    h1:              { size: 40, weight: 700, lineHeight: 1.20, tracking: '-0.01em',  family: body }
    h2:              { size: 32, weight: 700, lineHeight: 1.22, tracking: '-0.005em', family: body }
    h3:              { size: 24, weight: 700, lineHeight: 1.30, tracking: '0',         family: body }
    h4:              { size: 20, weight: 700, lineHeight: 1.35, tracking: '0',         family: body }
    eyebrow:         { size: 13, weight: 700, lineHeight: 1.30, tracking: '0.06em',   family: body, transform: uppercase }
    lead:            { size: 20, weight: 400, lineHeight: 1.50, tracking: '0',         family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',         family: body }
    label:           { size: 13, weight: 700, lineHeight: 1.4,  tracking: '0.025em',  family: body, transform: uppercase }
    caption:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',         family: body }
    cta:             { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.005em',  family: body }
    nav-link:        { size: 14, weight: 700, lineHeight: 1.3,  tracking: '0',         family: body }
    kpi-number:      { size: 48, weight: 700, lineHeight: 1.0,  tracking: '-0.01em',  family: body, opentype: 'tnum' }
    code:            { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',         family: mono }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',         family: mono }

radius:
  micro: 2
  sm: 4         # Lightning Design System default
  md: 6
  lg: 8
  xl: 12
  xxl: 16
  pill: 9999    # observed CTA pill (9999px on hero buttons)
  button: 9999  # Salesforce hero buttons are pills
  card: 12      # Lightning card radius

spacing:
  base: 4
  scale: [1, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  product-grid-cols: 4
  feature-grid-cols: 3

components:
  button-primary: { bg: '#0176d3', text: '#ffffff', padding: '14px 32px', radius: 9999, font: cta, weight: 700, hover-bg: '#005ca6', use: 'Hero CTA, Start free trial' }
  button-on-deep: { bg: '#ffffff', text: '#0176d3', padding: '14px 32px', radius: 9999, font: cta, weight: 700, hover-bg: '#ebf6fe', use: 'CTA over navy hero band' }
  button-secondary: { bg: 'transparent', text: '#0176d3', padding: '13px 31px', radius: 9999, border: '1px solid #0176d3', hover-bg: '#ebf6fe', use: 'Watch demo' }
  button-outline-light: { bg: 'transparent', text: '#ffffff', padding: '13px 31px', radius: 9999, border: '1px solid #ffffff', hover-bg: 'rgba(255,255,255,0.10)', use: 'Secondary on navy' }
  button-ghost:  { bg: 'transparent', text: '#0176d3', padding: '8px 0', font: cta, weight: 700, hover-text: '#005ca6', icon-suffix: '›', use: 'Inline link CTA' }
  card:          { bg: '#ffffff', border: '1px solid #dddbda', radius: 12, padding: '24px 28px', shadow: 'rgba(0,0,0,0.10) 0 2px 4px', use: 'Lightning feature card' }
  card-cloud:    { bg: '#ebf6fe', border: 'none', radius: 12, padding: '32px', use: 'Cloud-tinted feature card' }
  product-tile:  { bg: '#ffffff', border: '1px solid #dddbda', radius: 12, padding: 24, hover-shadow: 'rgba(0,0,0,0.16) 0 4px 12px', hover-lift: '-2px', use: 'Customer 360 tile' }
  pricing-card:  { bg: '#ffffff', border: '1px solid #dddbda', radius: 12, padding: '32px 28px', highlight-border: '2px solid #0176d3', use: 'Plans tier card' }
  badge:         { bg: '#aacbff', text: '#032d60', padding: '4px 10px', radius: 4, font: label, weight: 700, use: 'New, Beta' }
  badge-trailhead: { bg: '#ff9a3c', text: '#ffffff', padding: '4px 10px', radius: 9999, font: label, weight: 700, use: 'Trailhead achievement' }
  input:         { bg: '#ffffff', border: '1px solid #c9c7c5', radius: 4, padding: '10px 12px', focus-ring: '2px solid #1589ee', use: 'Form field, search' }
  nav-link:      { padding: '0 16px', height: 64, font: nav-link, color-rest: '#080707', color-hover: '#0176d3', use: 'Top-nav primary' }
  kpi-card:      { bg: '#ffffff', border: '1px solid #dddbda', radius: 8, padding: '20px 24px', kpi-color: '#032d60', label-color: '#3e3e3c', use: 'Pipeline metric, Trailhead points' }

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.18, 0.89, 0.32, 1.28)'  # slight overshoot — Lightning bounce
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 250
  duration-slow: 400
  duration-page: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — Lightning bounce removed, opacity transitions retained'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1024
  wide: 1280

shadows:
  ambient: 'rgba(0,0,0,0.06) 0 1px 2px'
  card: 'rgba(0,0,0,0.10) 0 2px 4px'
  elevated: 'rgba(0,0,0,0.16) 0 4px 12px'
  drawer: 'rgba(0,0,0,0.20) 0 8px 24px'
  modal: 'rgba(0,0,0,0.32) 0 16px 48px'
  ring: '0 0 0 2px #1589ee'

accessibility:
  contrast-text-on-bg: 19.5            # #080707 on #fff — AAA
  contrast-text-on-brand: 4.6          # #fff on #0176d3 — AA
  contrast-text-on-deep: 13.9          # #fff on #032d60 — AAA
  contrast-link-on-bg: 4.7             # #0176d3 on #fff — AA
  contrast-cyan-on-deep: 5.4           # #0d9dda on #032d60 — AA
  focus-ring: '2px solid #1589ee, 1px offset (Lightning focus)'
  reduced-motion-honored: true

dark-mode: optional
---

## 1. Visual Theme & Atmosphere

Salesforce's marketing surface is the **cloud-trust aesthetic** taken to its logical conclusion — white ground, navy gravity zones, and a sky-cyan brand wordmark wrapped in cumulus illustrations. The base canvas is `#ffffff` with light-blue tinted bands at `#ebf6fe` (the "cloud" color, named after Salesforce's product taxonomy: Sales Cloud, Service Cloud, Marketing Cloud), and the deepest grounds are the enterprise navy `#032d60` and `#021f4b` — the "Lightning" deep-blue that wraps the SaaS dashboards.

The type system is a duet. **Salesforce Sans** is the workhorse — a neutral grotesque designed in 2015 by Dalton Maag for Salesforce's Lightning Design System, descended from Helvetica/Arial but redrawn for screen rendering at small sizes. **ITC Avant Garde** appears for hero numbers and Dreamforce campaign typography, providing the geometric flourish that Salesforce Sans is too neutral to offer alone — "Customer 360" in 80px ITC Avant Garde with a hairline-thin weight is the brand's most photographed layout.

The action color is `#0176d3` — a saturated mid-blue that hits 4.6:1 on white at body sizes. The brand-cyan `#0d9dda` is what shows up *as the wordmark itself* — the "salesforce" logo is rendered in that hue, often inside a cloud icon. Mixing the two cyans is a Salesforce tell; one is action, one is identity. Underneath these two blues, the **navy** `#032d60` provides enterprise weight — every hero band, every CFO-facing case-study, every Trailblazer keynote uses this navy as its ground.

Salesforce ships **mascots** — Astro the bear (with yellow hat), Codey the otter, and a constellation of Trailblazer characters — that appear as illustrated guides throughout the marketing site. They never appear inside the product (Lightning UI is sober) but anchor the marketing pages with what Salesforce internally calls "Ohana" warmth (Hawaiian for "family", a Marc Benioff signature). Combined with dense KPI dashboards (pipeline-charts, opportunity-funnels, Einstein-AI predictions), the marketing reads as part trade-show booth, part Trailhead learning portal, part CRM dashboard preview.

The **Lightning radius** is 4–12px depending on element — buttons go fully pill (9999px) on hero CTAs, while cards land at 12px and inputs at 4px. This split signals "Lightning"-fast action (rounded buttons) wrapped in measured-content (squarer cards).

**Key Characteristics**
- White `#ffffff` canvas with `#ebf6fe` cloud-tint bands
- Navy `#032d60` for enterprise hero gravity
- Salesforce Sans + ITC Avant Garde duet (sans for body, geo display for heroes)
- Action blue `#0176d3` and brand cyan `#0d9dda` — never confuse them
- Pill-radius (9999px) hero CTAs, 12px Lightning card radius
- Astro / Codey mascot illustrations on key marketing pages
- Cumulus-cloud illustrations as decorative elements
- Trailhead orange `#ff9a3c` for achievement chips
- Dense KPI dashboards as social-proof imagery
- Uppercase eyebrows at 13/700, +0.025em tracking — Lightning Design System default

## 2. Color Palette & Roles

### Primary

- **bg** (`#ffffff`): page canvas
- **text** (`#080707`) [observed body]: near-black ink
- **text-body** (`#181818`): paragraph
- **brand** (`#0176d3`) [observed CTA]: action blue — primary CTA, link
- **on-brand** (`#ffffff`): white on action blue

### Brand & Identity

- **brand-cyan** (`#0d9dda`) [observed]: Salesforce wordmark hue — decoration, never CTA
- **brand-deep-blue** (`#0b5cab`) [observed gradient]: secondary navy-blue
- **brand-navy** (`#032d60`) [observed deep ground]: enterprise gravity, hero band
- **brand-hover** (`#005ca6`): pressed action

### Cloud / Tint

- **bg-cloud** (`#ebf6fe`): light Salesforce blue — section bands, info surfaces
- **surface-tinted** (`#f3fbff`): faintest cloud tint for variant cards
- **gradient-hero** (`linear-gradient(135deg, #032d60, #0b5cab, #0d9dda)`): hero band gradient

### Mascot & Trailhead

- **trailhead-orange** (`#ff9a3c`): Trailhead badge, achievement pill
- **astro-yellow** (`#fec934`): Astro mascot accent
- **ohana-green** (`#04844b`): Salesforce green, Ohana / community

### Interactive

- **link** (`#0176d3`): default anchor
- **link-hover** (`#005ca6`): underline thickens
- **selected** (`rgba(1,118,211,0.10)`): row-selected
- **disabled-text** (`#a8a8a8`): disabled control text
- **disabled-bg** (`#ecebea`): disabled control surface

### Neutral Scale (Lightning)

- `#080707` heading
- `#181818` body strong
- `#3e3e3c` body muted
- `#555555` caption
- `#706e6b` faint
- `#c9c7c5` border-strong
- `#dddbda` border-default
- `#ecebea` border-subtle
- `#f3f3f3` surface-soft
- `#ffffff` page-bg

### Surface & Borders

- **surface** (`#ffffff`): card ground
- **surface-tinted** (`#f3fbff`): variant card on cloud-tinted band
- **surface-hover** (`#f3f3f3`) [observed]: hover ground
- **bg-deep** (`#032d60`): enterprise navy hero
- **bg-deeper** (`#001639`): deepest navy band
- **bg-creative** (`#021f4b`): Dreamforce campaign deep
- **border** (`#dddbda`): hairline default — Lightning standard
- **border-strong** (`#c9c7c5`): table separator
- **border-subtle** (`#ecebea`): faintest divider

### Shadow Colors

Salesforce shadows are neutral-black, single-layer for Lightning UI consistency, but slightly heavier than Microsoft's Fluent (10% opacity vs Fluent's 6%):

- **shadow-card** — `rgba(0,0,0,0.10) 0 2px 4px`
- **shadow-elevated** — `rgba(0,0,0,0.16) 0 4px 12px`
- **shadow-drawer** — `rgba(0,0,0,0.20) 0 8px 24px`
- **shadow-modal** — `rgba(0,0,0,0.32) 0 16px 48px`

### Semantic (Lightning)

- **success** (`#04844b`) on **success-bg** (`#cdefc4`): record-saved, Trailblazer-ranked
- **warning** (`#fe9339`) on **warning-bg** (`#feedca`): trial-expiring (Trailhead-orange-adjacent)
- **danger** (`#ba0517`) on **danger-bg** (`#feded8`): record-error
- **info** (`#0176d3`) on **info-bg** (`#aacbff`): default notice — same as action

## 3. Typography Rules

### Font Family

**Salesforce Sans** is the body and most-display workhorse — Dalton Maag's neutral grotesque commissioned in 2015 for Lightning Design System. It's optically tuned for screens at 12–16px and reads close to Helvetica with slightly tighter apertures. Stack:

```
"Salesforce Sans", Arial, sans-serif
```

**ITC Avant Garde** is the display companion — geometric, hairline-thin at 400 weight, used exclusively for hero numbers ("Customer 360", "30 years", Dreamforce slot numbers) and major campaign typography. It descends from the 1970 Avant Garde Gothic by Herb Lubalin and Tom Carnase, and Salesforce uses the original ITC commercial cut (not a system-substitute).

The mono companion is **Salesforce Mono** for code in developer documentation. It's a thinner take on Source Code Pro tuned to match Salesforce Sans cap-heights.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | OT Features | Notes |
|------|------|-----:|-------:|-------:|---------:|-------------|-------|
| display-hero | ITC Avant Garde | 80 | 400 | 1.05 | -0.02em | kern | observed hero size, hairline weight |
| display-xl | ITC Avant Garde | 64 | 400 | 1.10 | -0.018em | kern | Dreamforce slot |
| display-lg | Salesforce Sans | 48 | 700 | 1.16 | -0.012em | kern | section title (Sans, not Avant Garde) |
| h1 | Salesforce Sans | 40 | 700 | 1.20 | -0.01em | kern | page heading |
| h2 | Salesforce Sans | 32 | 700 | 1.22 | -0.005em | kern | feature heading |
| h3 | Salesforce Sans | 24 | 700 | 1.30 | 0 | kern | card title |
| h4 | Salesforce Sans | 20 | 700 | 1.35 | 0 | kern | tile title |
| eyebrow | Salesforce Sans | 13 | 700 | 1.30 | 0.025em | uppercase | Lightning eyebrow |
| lead | Salesforce Sans | 20 | 400 | 1.50 | 0 | — | hero subhead |
| body-lg | Salesforce Sans | 18 | 400 | 1.55 | 0 | — | marketing prose |
| body | Salesforce Sans | 16 | 400 | 1.5 | 0 | — | default paragraph |
| body-sm | Salesforce Sans | 14 | 400 | 1.43 | 0 | — | secondary copy |
| label | Salesforce Sans | 13 | 700 | 1.4 | 0.025em | uppercase | form label, table head |
| caption | Salesforce Sans | 12 | 400 | 1.4 | 0 | — | fine print |
| cta | Salesforce Sans | 14 | 700 | 1.0 | 0.005em | — | button label |
| nav-link | Salesforce Sans | 14 | 700 | 1.3 | 0 | — | top-nav |
| kpi-number | Salesforce Sans | 48 | 700 | 1.0 | -0.01em | tnum | dashboard KPI |
| code | Salesforce Mono | 14 | 400 | 1.5 | 0 | — | API snippets |
| code-micro | Salesforce Mono | 12 | 400 | 1.4 | 0 | — | inline code |

### Principles

- **Two families, two roles** — Salesforce Sans for everything; ITC Avant Garde *only* for hero numbers and campaign type
- **Avant Garde at 400, never bold** — the hairline weight is the brand signature; bolding it would erase the geometric flourish
- **Eyebrows wear uppercase + tracking** — `13px 700`, +0.025em, uppercase — Lightning's signature label rhythm
- **Tabular numerals on KPIs and prices** — `tnum` activates for dashboard widgets, plan-card pricing, Trailhead points
- **Tracking only on display ≥32px** — below that, tracking returns to 0
- **Salesforce Mono for code only** — never display effect, even on developer pages

## 4. Component Stylings

### Button — Primary (Action Blue Pill)

- Background `#0176d3`; text `#ffffff` weight 700
- Padding 14×32, radius `9999px` (pill)
- Font `cta` (Salesforce Sans 14/1.0, +0.005em)
- Hover: bg → `#005ca6`
- Active: bg → `#0b5cab`, scale(0.98)
- Focus: ring `0 0 0 2px #1589ee`, 1px offset (Lightning focus)
- Use: hero CTA "Start free trial", "Get started"

### Button — On Deep (Inverted for Navy hero)

- Background `#ffffff`; text `#0176d3` weight 700
- Same dimensions as primary
- Hover: bg → `#ebf6fe`
- Use: CTA placed over `#032d60` navy hero band

### Button — Secondary (Outlined Blue)

- Background transparent; text `#0176d3` weight 700
- Border `1px solid #0176d3`, padding 13×31
- Hover: bg → `#ebf6fe`
- Use: "Watch demo", "Compare editions"

### Button — Outline Light (on navy)

- Background transparent; text `#ffffff` weight 700
- Border `1px solid #ffffff`, padding 13×31
- Hover: bg → `rgba(255,255,255,0.10)`
- Use: secondary action over navy band

### Button — Ghost (Inline)

- Background transparent; text `#0176d3` weight 700
- Padding 8×0; icon suffix `›` 1ch right
- Hover: text → `#005ca6`, icon `+2px` right
- Use: "Learn more about Service Cloud ›"

### Card (Lightning Feature)

- Background `#ffffff`; border `1px solid #dddbda`; radius 12
- Padding 24×28
- Shadow `rgba(0,0,0,0.10) 0 2px 4px`
- Hover: shadow → `rgba(0,0,0,0.16) 0 4px 12px`
- Use: feature card, customer-story card

### Card — Cloud (Tinted, no border)

- Background `#ebf6fe`; border none; radius 12; padding 32
- Use: feature group card, "Built on Customer 360" panel

### Product Tile (Customer 360)

- Background `#ffffff`; border `1px solid #dddbda`; radius 12; padding 24
- Icon 40×40 top-left in product cloud color (Sales-blue, Service-orange, Marketing-pink)
- Title `h4` (20/1.35 700)
- Hover: shadow → elevated, transform `translateY(-2px)`
- Use: Sales Cloud, Service Cloud, Marketing Cloud product tiles

### Pricing Card (Editions)

- Background `#ffffff`; border `1px solid #dddbda`; radius 12; padding 32×28
- Highlighted variant: `2px solid #0176d3` border + "Most Popular" ribbon in action blue
- Edition title `h3` (24/1.30 700); price `kpi-number` (48/700 tnum)
- Use: Salesforce edition tiers (Essentials, Professional, Enterprise, Unlimited)

### Badge (Lightning)

- Background `#aacbff`; text `#032d60`; padding 4×10; radius 4
- Font `label` (13/1.4 700, uppercase, +0.025em)
- Use: "NEW", "BETA", "PILOT"

### Badge — Trailhead

- Background `#ff9a3c`; text `#ffffff`; padding 4×10; radius `9999px` (pill)
- Use: Trailhead achievement, Trailblazer rank

### Input (Lightning)

- Background `#ffffff`; border `1px solid #c9c7c5`; radius 4
- Padding 10×12; font `body` (16/1.5 400)
- Focus: border `#1589ee`, ring `0 0 0 2px rgba(21,137,238,0.20)`
- Error: border `#ba0517`, helper-text below in `caption` red
- Use: form field, search, edit-record

### Navigation

- Top bar 64px; bg `#ffffff`; bottom border `1px solid #dddbda`
- Salesforce wordmark + cloud icon at left (cyan `#0d9dda` cloud + dark wordmark)
- Nav links: padding 0×16, font `nav-link` (14/1.3 700), color `#080707`
- Hover: color → `#0176d3`, no underline
- Mega-menu drops with multi-cloud product grid + featured Trailhead promo

### KPI Card (Dashboard preview)

- Background `#ffffff`; border `1px solid #dddbda`; radius 8; padding 20×24
- KPI label uppercase 13/700 in `#3e3e3c`
- KPI number `kpi-number` (48/700 tnum) in `#032d60`
- Trend indicator: green `↑` or red `↓` + percentage
- Use: pipeline-value, conversion-rate, Einstein-AI score widgets in marketing dashboard previews

## 5. Layout Principles

### Spacing System

Base unit `4px`. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96. Section spacing 64–96; card padding 24–32; tile gap 24; KPI grid gap 16. Salesforce keeps gaps tighter than Microsoft for dashboard density.

### Grid & Container

- Page max-width `1280px` with 32–48px side padding
- Prose containers cap at 720px
- Product grid: 4-up at desktop ≥1024, 2-up at 768–1023, 1-up below
- KPI grid: 4-up at desktop, 2-up at tablet, 1-up at mobile
- Hero: full-bleed navy with text-left + cloud-illustration-right OR centered hero with cumulus backdrop

### Whitespace Philosophy

Salesforce sits between Adobe (dense) and Apple (breathing) — KPI dashboards demand density inside cards (16px gaps), but section-level cadence stays generous (64–96px). The cloud-illustration backdrop fills negative space without crowding text.

### Section Cadence

- Navy hero band (`#032d60` or gradient) with white wordmark + cumulus illustrations
- Cloud-tinted feature trio (`#ebf6fe`, 3-up cards)
- White section: KPI dashboard preview with mascot illustration
- Customer logo strip (`#f3f3f3`)
- Trailblazer story (white, photo + testimonial)
- Editions / pricing grid (white, 4-up tiers)
- "Trailblazer community" CTA band (`#032d60` navy, white text + Astro mascot)
- Footer (`#001639` deepest navy, white text, dense link mesh)

## 6. Shapes & Radius Scale

| Tier | Radius | Use |
|------|------:|-----|
| Micro | 2 | Pill counts |
| Small | 4 | Inputs, badges, chips, table corners |
| Medium | 6 | rare |
| Large | 8 | KPI cards, smaller feature cards |
| XL | 12 | Lightning cards, product tiles, pricing cards |
| XXL | 16 | Premium feature panels |
| Pill | 9999 | All hero CTA buttons, Trailhead badges, avatars |

The signature Salesforce shape combination: **pill-radius CTAs + 12px-radius cards + 4px-radius inputs**. Three different radii per page is intentional Lightning DSL.

## 7. Depth & Elevation

| Level | Treatment | Use |
|------:|-----------|-----|
| 0 | Flat | Page bg, hero text |
| 1 | shadow-card | Default Lightning card |
| 2 | shadow-elevated | Hover-lifted tile, dropdown |
| 3 | shadow-drawer | Side-panel, drawer |
| 4 | shadow-modal | Modal, mega-menu |

**Shadow Philosophy** — Salesforce shadows are slightly heavier than Apple/Microsoft (`rgba(0,0,0,0.10)` vs Apple's 0.04 and Microsoft's 0.06) because Lightning Design System originated as enterprise productivity software where shadow-as-affordance had to be unmistakable for click-targets. The shadows stay neutral-black; chromatic shadow tinting is reserved for product UI screenshots, not the corporate site.

## 8. Interaction & Motion

### Easing Curves

- **standard** `cubic-bezier(0.4, 0, 0.2, 1)`: default
- **emphasized** `cubic-bezier(0.18, 0.89, 0.32, 1.28)` — slight overshoot ("Lightning bounce") for hero CTAs and toast-notifications
- **out** `cubic-bezier(0, 0, 0.2, 1)`: drawer slide, modal entry

### Duration Buckets

- **fast** 150ms — hover color, link underline
- **standard** 250ms — card lift, dropdown
- **slow** 400ms — drawer slide, modal entry
- **page** 400ms — route transition (cross-fade)

### Per-Component Recipes

- **Button hover**: bg-color 150ms standard, no transform
- **Button press**: scale(0.98) 100ms standard
- **Card hover**: shadow `card → elevated` 250ms standard
- **Tile hover**: `translateY(-2px)` + shadow elevate, 250ms emphasized (Lightning bounce)
- **Toast notification**: slide-in from right `translateX(100%) → 0`, 400ms emphasized
- **Mega-menu drop**: opacity 0→1 + `translateY(-8px) → 0`, 250ms out

### Page Transitions

Cross-fade only. Salesforce avoids slide transitions because the marketing pages need to feel like persistent dashboards, not slideshow chapters.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)`: Lightning bounce removed (emphasized → standard), tile lifts disabled, toast slides become instant fade-in. Color transitions retained.

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)

- Text `#080707` on bg `#ffffff` — **19.5:1, AAA**
- Body `#181818` on bg — **15.9:1, AAA**
- Muted `#3e3e3c` on bg — **9.5:1, AAA**
- White on action `#0176d3` — **4.6:1, AA**
- White on navy `#032d60` — **13.9:1, AAA**
- Link `#0176d3` on bg — **4.7:1, AA**
- Brand-cyan `#0d9dda` on white — **2.7:1, FAIL** — never use as text color at body sizes
- Brand-cyan on navy `#032d60` — **5.4:1, AA** — usable on dark grounds only

### Focus Indicators

Lightning focus is `2px solid #1589ee` (slightly brighter than action blue) with 1px offset. The brighter ring color ensures visibility against both `#0176d3` button fills and `#032d60` navy grounds.

### ARIA Patterns

- **Mega-menu** — `role="menu"` + `aria-haspopup="menu"` on trigger
- **Pricing edition cards** — `role="region"` with aria-labelledby pointing at edition title
- **KPI dashboard preview** — `role="img"` with `aria-label` describing the metric ("Pipeline value $2.4M, up 12% over previous quarter")
- **Mascot illustrations** — decorative, `aria-hidden="true"`
- **Modal** — `role="dialog"` + `aria-modal="true"`, focus trapped, Escape closes

### Keyboard Navigation

Tab order follows DOM. Skip-link at top to `#main`. Mega-menu: Tab to trigger → Enter → Arrow keys within → Escape returns. Edition pricing: Tab through tiers, Enter activates "Try free".

### Screen Reader Hints

- Salesforce wordmark + cloud icon: `aria-label="Salesforce"`, decorative cloud `aria-hidden="true"`
- Astro / Codey mascots: `aria-hidden="true"` (decorative)
- Trailhead orange badges: include visually-hidden text "Trailhead achievement"
- KPI numbers: aria-label combines the number, unit, and trend ("$2.4 million pipeline, up 12 percent")

### Reduced Motion

Honored — see §8.

## 10. Responsive Behavior

| Breakpoint | Width | Behavior |
|-----------|------:|----------|
| mobile | 0–479 | 1-up tiles, stacked nav, hamburger menu |
| tablet | 480–767 | 2-up tiles, condensed nav, hamburger remains |
| desktop-sm | 768–1023 | 2-up tiles, full nav, mega-menu |
| desktop | 1024–1279 | 4-up tiles, mega-menu, max-width 1280 |
| wide | 1280+ | 4-up tiles, container caps at 1280 |

### Touch Targets

Minimum 44×44 (Lightning matches WCAG). Pill CTAs measure 48×~140 in practice.

### Collapsing Strategy

- **Nav** — desktop mega-menu spanning full width with multi-cloud taxonomy; mobile hamburger drawer with cloud-grouped accordion
- **Edition pricing** — desktop 4-up; tablet 2-up (Essentials+Professional / Enterprise+Unlimited); mobile stacked with "Most Popular" first
- **KPI grid** — desktop 4-up (Pipeline / Conversion / Forecast / Einstein-Score); tablet 2-up; mobile 1-up
- **Hero** — desktop text-left + illustration-right; mobile text-top + illustration-bottom

### Image Behavior

`<picture>` with art-direction. Cumulus illustrations are SVG to scale crisply. Mascot illustrations are PNG at 1x/2x/3x or WebP. Lazy-load below-fold.

### Container Queries

Used for the **product tile** and **KPI card** — at <320px container width, the icon shrinks 40→32, body-sm description hides, KPI number drops 48→32.

## 11. Content & Voice

### Tone

Confident, enterprise-aspirational, mildly-warm. Salesforce voice is the trade-show booth circa 2008 polished for 2024 — the friendly handshake of "Ohana" warmth ("we're family at Salesforce") wrapped in CRM-vendor seriousness. The voice is more outwardly enthusiastic than Microsoft's measured tone but stops short of Apple's poetic flourish.

### Microcopy Patterns

- **Buttons**: "Start free trial", "Get started", "Watch demo", "Talk to sales", "See plans", "Compare editions"
- **Errors**: "We hit a snag. Try again or contact support." — slightly warmer than Microsoft
- **Success**: "You're all set. Welcome to Trailblazer." — community-framing
- **Empty states**: "No leads yet. Add your first lead to get started." — direct + primary action

### CTA Verb Conventions

- "Start free trial" — primary acquisition CTA, more common than "Sign up"
- "Get started" — Trailhead entry, free Developer Edition
- "Watch demo" — secondary, leads to recorded video or live demo signup
- "Talk to sales" — Enterprise / Unlimited tiers
- "Compare editions" — pricing-page entry
- "Become a Trailblazer" — community / training CTA, Trailhead-specific

### Empty States

Salesforce empty states often include an Astro-or-Codey illustration plus a single primary action. The tone is encouraging — "You haven't created any opportunities yet. Add your first opportunity to start tracking your pipeline." — less terse than Adobe, less playful than Notion.

### Tone Guardrails

- Use "Trailblazer" frequently — it's the in-house customer noun
- Reference "Customer 360" as a product, not a concept
- Avoid "user" — say "Trailblazer" or product-name-specific term
- "Ohana" appears in community/values copy but never product copy
- Never use "delight" — Salesforce voice is enthusiastic but not whimsical

## 12. Dark Mode & Theming

The marketing site is light-only. Salesforce's Lightning UI itself ships a dark mode (added 2022) but `salesforce.com` does not honor `prefers-color-scheme: dark`. The closest treatment is the **navy hero band** (`#032d60`) and **navy footer** (`#001639`) — both are local zone treatments.

If implementing a derivative dark theme matching Lightning's dark mode:

```yaml
colors-dark:
  bg: '#001639'
  bg-soft: '#032d60'
  surface: '#0a3471'
  surface-tinted: '#0e3d8a'
  text: '#ffffff'
  text-body: '#dceefa'
  text-muted: 'rgba(255,255,255,0.78)'
  brand: '#1589ee'        # brighter for AA on dark
  brand-cyan: '#7ed4ff'   # lighter cyan for AA
  border: 'rgba(255,255,255,0.15)'
  border-strong: 'rgba(255,255,255,0.30)'
```

Cloud-tinted bands invert: `#ebf6fe` light becomes `rgba(13,157,218,0.10)` translucent on navy. Mascot illustrations get a "night" variant with a subtle cyan glow.

## 13. Lineage & Influences

Salesforce's marketing identity descends from three lineages. **Trade-show booth aesthetics** of 2000s enterprise software (think Oracle OpenWorld, IBM Lotusphere) — the bright lights, the mascot, the giant wordmark on a navy stage — provide the core warmth. The **Lightning Design System** (introduced 2014) brought the modern Apple-iOS-flat language to enterprise CRM, replacing the Aloha skin's heavily-skeuomorphic 2008 era. And the **Trailhead learning platform** (2014) brought the gamified-badge, mascot-led, community-warm visual language that now permeates the marketing site.

ITC Avant Garde for hero numbers is a deliberate echo of 1970s editorial design — Lubalin's New York magazine work, the era of geometric optimism. It signals "design history" inside an otherwise-utilitarian SaaS surface. Salesforce Sans, by contrast, is a contemporary humanist grotesque — the workhorse that handles the dashboards.

What Salesforce rejects: Apple-style minimalism (Salesforce embraces dense KPIs, Trailhead chrome); IBM's grayscale severity (Salesforce permits — even celebrates — chroma); HubSpot's playful-orange dominance (Salesforce's orange is reserved for Trailhead specifically). What Salesforce borrows: Microsoft Fluent's Mica-style cloud-tinted surfaces (`#ebf6fe`), Stripe's discipline of one-blue-for-action, Slack's mascot-in-marketing precedent (Slack's birthday cake illustrations preceded Salesforce's Astro era).

**Influences**

- ITC Avant Garde Gothic (Lubalin/Carnase, 1970) — geometric display flourish (https://www.itcfonts.com)
- Lightning Design System (Salesforce, 2014) — surface radius and shadow ladder
- Trailhead (Salesforce, 2014) — mascot-led illustrative system
- Slack pre-IPO branding — playful illustration in enterprise SaaS marketing precedent
- IBM Carbon — corporate-blue gravitas (https://carbondesignsystem.com)

## 14. Do's and Don'ts

**Do**

- **Do** keep canvas white `#ffffff` with cloud-tinted `#ebf6fe` bands for section rhythm
- **Do** use navy `#032d60` for hero gravity zones — the enterprise-trust color
- **Do** ship Salesforce Sans for body and ITC Avant Garde for hero numbers (only)
- **Do** distinguish action blue `#0176d3` from brand cyan `#0d9dda` — they have different jobs
- **Do** use 9999px pill radius for hero CTAs and 12px Lightning radius for cards
- **Do** include cumulus-cloud illustrations as backdrop decoration for navy heroes
- **Do** ship Astro / Codey mascots on Trailblazer / community pages
- **Do** use uppercase eyebrows at 13/700 +0.025em — Lightning's signature label rhythm
- **Do** include KPI dashboard previews with tabular numerals for pipeline-value, conversion-rate
- **Do** use Trailhead orange `#ff9a3c` exclusively for achievement badges, never general CTA

**Don't**

- **Don't** use brand cyan `#0d9dda` as text color at body sizes — it fails AA contrast
- **Don't** mix action blue and brand cyan on the same CTA group
- **Don't** bold ITC Avant Garde — its hairline weight is the brand signature
- **Don't** use ITC Avant Garde for body or paragraphs — it's display-only
- **Don't** drop Astro mascots inside the actual product UI screenshots — mascots are marketing-only
- **Don't** apply pill radius to inputs or cards — pill is reserved for CTAs and Trailhead badges
- **Don't** use exclamation marks except in promo banners or Trailblazer celebrations
- **Don't** use Trailhead orange as a CTA fill — it's reserved for achievement chips
- **Don't** over-saturate the cloud illustrations — they should sit at 60–80% opacity to feel airy
- **Don't** ship multiple "Lightning bounce" animations on the same page — overshoot is a signature accent, not the default

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #ffffff
bg-cloud: #ebf6fe
bg-deep: #032d60
text: #080707
brand (action): #0176d3
brand-cyan: #0d9dda
brand-navy: #032d60
trailhead-orange: #ff9a3c
border: #dddbda
on-brand: #ffffff
on-deep: #ffffff
```

### Example Component Prompts

1. *"Create a Salesforce hero: navy `#032d60` ground with cumulus-cloud illustration backdrop, 80px ITC Avant Garde 400 'Customer 360', 20/400 white lead paragraph, white pill CTA `Start free trial` with `#0176d3` text, secondary outline-white `Watch demo`."*
2. *"Build a Customer 360 product tile grid: 4-up Lightning cards on `#ffffff` ground, each card 12px radius with `#dddbda` border, 40×40 cloud icon top-left in product-cloud color, 24/700 Salesforce Sans title 'Sales Cloud', body-sm description, hover lifts -2px to `rgba(0,0,0,0.16) 0 4px 12px` shadow."*
3. *"Design Salesforce edition pricing: 4-up cards (Essentials/Professional/Enterprise/Unlimited), white bg with `#dddbda` border, 12px radius, 32×28 padding, middle 'Professional' card highlighted with 2px `#0176d3` border + ribbon, 48/700 tnum price, pill `Start free trial` CTA."*
4. *"Create a KPI dashboard preview: 4-up cards on `#ffffff`, each card 8px radius with `#dddbda` border, uppercase 13/700 label in `#3e3e3c`, 48/700 tnum number in navy `#032d60`, green ↑ trend indicator with percentage."*
5. *"Build a Trailblazer community CTA band: navy `#032d60` ground, Astro mascot illustration at left, 40/700 Salesforce Sans 'Become a Trailblazer' headline, white pill CTA `Get started for free`."*
6. *"Design a cloud-tinted feature trio: `#ebf6fe` ground, 3-up cards with no border (cloud bg shows through), 12px radius, 32px padding, 24/700 h3 title, 16/400 body, ghost CTA `Learn more about Service Cloud ›` in `#0176d3`."*

### Iteration Guide

1. **Set ground first**. White `#ffffff` for content sections, navy `#032d60` for hero gravity, cloud `#ebf6fe` for bands. If you start in pure black, you've drifted to Linear, not Salesforce.
2. **One Avant Garde per page**. Hero number gets ITC Avant Garde; everything else is Salesforce Sans. More than one Avant Garde block dilutes the geometric flourish.
3. **Distinguish the cyans**. Action `#0176d3` for buttons; brand `#0d9dda` for wordmarks and decoration. If both appear on CTAs, the layout reads as confused-Salesforce.
4. **Pill radius for CTAs only**. Cards stay 12px, inputs 4px. Three radii per page is intentional Lightning.
5. **Cumulus is Salesforce's wallpaper**. Cloud illustrations behind hero text signal "Salesforce" faster than wordmark placement.
6. **Mascots earn their pages**. Astro on Trailblazer/community pages, Codey on developer pages, neither in product UI screenshots. Random mascot placement looks corporate-cosplay.
7. **Lightning bounce is an accent**. Reserve the slight-overshoot easing for hero CTAs and toast notifications; everything else uses standard cubic-bezier.
8. **KPI cards earn the page**. Salesforce marketing leans on dashboard previews — if the page has no KPI widget visible, it doesn't read as Salesforce.
