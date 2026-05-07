---
name: Adobe
tagline: Creative-suite chrome — paper-white canvas, magenta-to-orange wordmark gradient, and Adobe Clean carrying every product grid.
updated_at: 2026-05-04T14:57:35+12:00
published_at: 2026-05-04T14:57:35+12:00
author: webdesignhot
source_url: https://www.adobe.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [saas]
tags: [light, structured, sans, dense, cool]
preview_swatch: ['#ffffff', '#fa0f00', '#1473e6']
related: [figma, framer, microsoft]
description: 'Adobe''s marketing surface is the canvas its products paint on — paper-white pages (`#ffffff`), Adobe Clean as the workhorse sans, and a magenta-to-orange gradient (`#ff0f5b → #fa0f00 → #ff7a00`) that flares whenever the wordmark or a hero CTA needs heat. The supporting blue (`#1473e6`) carries Acrobat, Document Cloud, and any link that isn''t a creative-suite chip. Product grids are dense, tile-based, and chromatically flexible — Photoshop blue, Illustrator orange, Premiere violet — but the chrome around them stays neutral so 30+ products can co-exist without fighting.'

colors:
  bg: '#ffffff'                # page canvas
  bg-soft: '#f5f5f5'           # alternating section
  bg-deep: '#1d1d1d'           # near-black hero band
  bg-creative: '#000000'       # creative-suite product portal ground
  surface: '#fafafa'           # card panel
  surface-raised: '#ffffff'    # tile lifted on shadow
  surface-hover: '#f0f1f2'     # observed hover ground
  text: '#000000'              # display copy at full ink
  text-strong: '#000000'       # observed h1 black
  text-body: '#2c2c2c'         # body paragraph
  text-muted: '#53575b'        # observed secondary copy (Avenir Next 700)
  text-faint: '#6e6e6e'        # caption / metadata
  text-on-deep: '#ffffff'      # white on near-black band
  brand: '#fa0f00'             # Adobe red — wordmark, primary CTA
  brand-hover: '#d40b00'       # observed pressed state
  brand-magenta: '#ff0f5b'     # gradient stop one — wordmark flare
  brand-orange: '#ff7a00'      # gradient stop three — Illustrator/Premiere warmth
  brand-deep: '#b30b00'        # deep red for outline emphasis
  accent: '#1473e6'            # Document Cloud / Acrobat blue (link hue)
  accent-strong: '#0265dc'     # link pressed
  accent-soft: '#e1f0ff'       # info background
  product-photoshop: '#31a8ff' # Ps tile chrome
  product-illustrator: '#ff9a00' # Ai tile chrome
  product-premiere: '#9999ff'  # Pr tile chrome
  product-acrobat: '#b30b00'   # Acrobat deep red
  link: '#1473e6'              # default anchor
  link-hover: '#0265dc'        # link pressed
  border: '#eaeaea'            # hairline default
  border-strong: '#cacaca'     # tile separator
  border-subtle: '#f0f0f0'     # faint divider
  ring-focus: '#1473e6'        # 2px focus ring on light ground
  shadow-tile: 'rgba(0,0,0,0.08)' # standard tile drop
  shadow-elevated: 'rgba(0,0,0,0.16)' # hover-lifted tile
  on-brand: '#ffffff'          # white on red CTA
  on-accent: '#ffffff'         # white on blue
  success: '#268e6c'
  success-bg: '#e8f5ee'
  warning: '#e68619'
  warning-bg: '#fff3e0'
  danger: '#d7373f'
  danger-bg: '#fce9ea'
  info: '#1473e6'
  info-bg: '#e1f0ff'
  gradient-wordmark: 'linear-gradient(135deg, #ff0f5b 0%, #fa0f00 50%, #ff7a00 100%)'

typography:
  display:
    family: '"Adobe Clean", "Source Sans 3", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700, 900]
    opentype-features: 'kern, liga, ss01'
  body:
    family: '"Adobe Clean", "Source Sans 3", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: '"Source Code Pro", "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 84, weight: 700, lineHeight: 1.05, tracking: '-0.02em', family: display, opentype: 'kern, liga' }
    display-xl:      { size: 64, weight: 700, lineHeight: 1.08, tracking: '-0.018em', family: display }
    display-lg:      { size: 48, weight: 600, lineHeight: 1.18, tracking: '-0.012em', family: display }
    h1:              { size: 42, weight: 700, lineHeight: 1.14, tracking: '-0.01em',  family: display }
    h2:              { size: 32, weight: 700, lineHeight: 1.20, tracking: '-0.005em', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.30, tracking: '0',         family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.35, tracking: '0',         family: display }
    eyebrow:         { size: 13, weight: 700, lineHeight: 1.30, tracking: '0.08em',   family: display, transform: uppercase }
    lead:            { size: 21, weight: 400, lineHeight: 1.45, tracking: '0',         family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    label:           { size: 13, weight: 600, lineHeight: 1.4,  tracking: '0.01em',   family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',         family: body }
    cta:             { size: 15, weight: 700, lineHeight: 1.0,  tracking: '0.005em',  family: display }
    nav-link:        { size: 14, weight: 600, lineHeight: 1.3,  tracking: '0',         family: display }
    code:            { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',         family: mono }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',         family: mono }
    price:           { size: 36, weight: 700, lineHeight: 1.05, tracking: '-0.01em',  family: display, opentype: 'tnum' }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  xl: 12
  xxl: 16
  pill: 9999
  button: 22       # observed Adobe spectrum-Button pill
  card: 8

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 64
  product-grid-cols: 4
  feature-grid-cols: 3

components:
  button-primary: { bg: '#fa0f00', text: '#ffffff', padding: '12px 24px', radius: pill, font: cta, weight: 700, hover-bg: '#d40b00', use: 'Hero CTA, Buy now' }
  button-accent:  { bg: '#1473e6', text: '#ffffff', padding: '12px 24px', radius: pill, font: cta, weight: 700, hover-bg: '#0265dc', use: 'Acrobat / Document Cloud CTA' }
  button-secondary: { bg: 'transparent', text: '#000000', padding: '11px 23px', radius: pill, border: '1px solid #000000', hover-bg: '#000000', hover-text: '#ffffff', use: 'Learn more, See plans' }
  button-ghost:   { bg: 'transparent', text: '#1473e6', padding: '8px 0', font: cta, weight: 700, hover-text: '#0265dc', icon-suffix: '›', use: 'Inline link-CTA' }
  product-tile:   { bg: '#fafafa', border: '1px solid #eaeaea', radius: 8, padding: 24, hover-shadow: 'rgba(0,0,0,0.16) 0 8px 24px', hover-lift: '-2px', use: 'Creative Cloud product portal' }
  card:           { bg: '#ffffff', border: '1px solid #eaeaea', radius: 8, padding: '24px 28px', shadow: 'rgba(0,0,0,0.06) 0 2px 8px', use: 'Plan card, feature card' }
  pricing-card:   { bg: '#ffffff', border: '2px solid #eaeaea', radius: 8, padding: '32px 28px', highlight-border: '#fa0f00', use: 'Plans grid (1 highlighted)' }
  badge:          { bg: '#fce9ea', text: '#b30b00', padding: '4px 10px', radius: 4, font: label, weight: 700, use: 'New, Popular pill' }
  input:          { bg: '#ffffff', border: '1px solid #cacaca', radius: 4, padding: '10px 12px', focus-ring: '2px solid #1473e6', use: 'Email, search' }
  nav-link:       { padding: '0 12px', height: 48, font: nav-link, color-rest: '#000000', color-hover: '#fa0f00', use: 'Top-nav primary' }

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 130
  duration-standard: 200
  duration-slow: 320
  duration-page: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — gradients become solid, tile lifts disappear, only opacity transitions retained'

breakpoints:
  mobile: 600
  tablet: 900
  desktop: 1200
  wide: 1440

shadows:
  ambient: 'rgba(0,0,0,0.06) 0 2px 8px'
  standard: 'rgba(0,0,0,0.08) 0 4px 12px'
  elevated: 'rgba(0,0,0,0.16) 0 8px 24px'
  deep: 'rgba(0,0,0,0.24) 0 16px 40px -8px'
  ring: '0 0 0 2px #1473e6'

accessibility:
  contrast-text-on-bg: 21.0           # #000 on #fff — AAA
  contrast-text-on-brand: 5.1         # #fff on #fa0f00 — AA
  contrast-text-on-accent: 4.9        # #fff on #1473e6 — AA
  contrast-link-on-bg: 4.6            # #1473e6 on #fff — AA
  focus-ring: '2px solid #1473e6, 2px offset'
  reduced-motion-honored: true
  keyboard-trap-free: true

dark-mode: optional
---

## 1. Visual Theme & Atmosphere

Adobe's marketing surface is the canvas its products paint on. The page itself is paper-white at `#ffffff`, the workhorse type is **Adobe Clean** (the corporate cut Adobe quietly switched to in 2014, replacing Myriad), and the only place chromatic temperature spikes is wherever a wordmark, a CTA, or a product chip needs heat. The result is a stage that disappears: 30+ creative apps with violently different brand colors — Photoshop's `#31a8ff` blue, Illustrator's `#ff9a00` orange, Premiere's `#9999ff` violet, Acrobat's `#b30b00` red — coexist on the same shelf because the shelf itself is neutral.

The signature flare is the **wordmark gradient** — magenta `#ff0f5b` to red `#fa0f00` to orange `#ff7a00`, swept at roughly 135°. It appears in the wordmark itself, in hero numbers (the giant "20" on Photoshop campaigns), and as a flame around premium tile borders. Outside those moments, the palette is monastic: black ink, off-white panels, hairline `#eaeaea` borders, and a single Document Cloud blue (`#1473e6`) for links and Acrobat tiles. Adobe Clean carries everything from the 84px hero down to the 12px caption, with weight 700 for headlines and weight 400 for body text. The cap-heights are slightly tighter than Helvetica, the apertures more open than Inter — Adobe Clean reads as *editorial-grade tool chrome*, exactly the tone a creative-suite vendor wants.

Layout-wise the site lives or dies by the **product grid**. Tiles are 8px-radius rectangles, hairline-bordered, sized in 4-up rows on desktop and 2-up on tablet. Hover lifts the tile 2px and intensifies the shadow from `rgba(0,0,0,0.06) 0 2px 8px` to `rgba(0,0,0,0.16) 0 8px 24px`. The icon — a 32px SDK glyph in the product's brand hue — sits top-left; the title is Adobe Clean 700 at 18–20px. Each tile is a chromatic island; the chrome around them keeps the chromatic chaos legible.

Where Apple uses ultra-precise photographic hero stills, Adobe uses **dense product portals** — Creative Cloud's "All apps" page reads almost like a hardware-store inventory: hundreds of tiles, six product taxonomies, three pricing tiers, all sortable, all visible simultaneously. The dense-but-orderly aesthetic is deliberate: Adobe's customer is the professional who knows exactly which tool they need and wants to find it in two clicks, not the discovery-mode shopper Apple optimizes for.

**Key Characteristics**
- Paper-white `#ffffff` canvas with `#f5f5f5` alternation for section rhythm
- Adobe Clean sans across all hierarchy — no serif, no mono outside code
- Wordmark gradient (magenta → red → orange) used sparingly for flare
- Adobe red `#fa0f00` for primary CTA; Document Cloud blue `#1473e6` for links and Acrobat
- Pill-radius (22px) buttons — distinct from the 8px tile radius
- 4-up product tile grids with hover-lift micro-elevation
- Per-product chromatic chips (Ps blue, Ai orange, Pr violet) inside neutral chrome
- Hairline `#eaeaea` borders, never heavy strokes
- Dense, sortable, search-first information architecture
- Display weights weight-700; body text weight-400 with tight `-0.01em` tracking only on display

## 2. Color Palette & Roles

### Primary

- **bg** (`#ffffff`): page canvas — the literal blank artboard metaphor
- **text** (`#000000`): display copy — full-ink, never softened to 87% black
- **text-body** (`#2c2c2c`): body paragraphs at 16/24
- **brand** (`#fa0f00`) [observed Adobe red]: primary CTA fill, wordmark middle stop, Acrobat product tint
- **on-brand** (`#ffffff`): always white-on-red

### Brand Gradient & Wordmark

- **brand-magenta** (`#ff0f5b`): gradient start — Photoshop campaign warmth
- **brand-orange** (`#ff7a00`): gradient end — Illustrator-adjacent heat
- **brand-deep** (`#b30b00`): Acrobat tile chrome, deep emphasis on red surfaces
- **gradient-wordmark** (`linear-gradient(135deg, #ff0f5b, #fa0f00, #ff7a00)`): the wordmark itself, hero-number flare, premium-tile border accent

### Accent (Document Cloud / Acrobat / Link)

- **accent** (`#1473e6`): Acrobat tile chrome, default link color, secondary CTA fill
- **accent-strong** (`#0265dc`): pressed link / hover
- **accent-soft** (`#e1f0ff`): info-band background, link-on-tinted-surface ground

### Product Chromatic Chips (used sparingly)

- **product-photoshop** (`#31a8ff`): Ps blue
- **product-illustrator** (`#ff9a00`): Ai orange
- **product-premiere** (`#9999ff`): Pr violet
- **product-acrobat** (`#b30b00`): Acrobat brick

### Interactive

- **link** (`#1473e6`): same as accent — text links inherit Document Cloud blue
- **link-hover** (`#0265dc`): underline grows from 1px to 2px on hover
- **selected** (rgba(20,115,230,0.10)): row-selected ground in tables
- **disabled-text** (`#9e9e9e`): muted control text
- **disabled-bg** (`#f0f0f0`): disabled control surface

### Neutral Scale (warm-but-cool — closer to Helvetica than Inter neutral)

- `#000000` heading
- `#2c2c2c` body strong
- `#53575b` body muted (observed h2 secondary)
- `#6e6e6e` caption
- `#9e9e9e` faint
- `#cacaca` border-strong
- `#eaeaea` border-default
- `#f0f0f0` surface-hover
- `#f5f5f5` surface-soft
- `#fafafa` card-bg
- `#ffffff` page-bg

### Surface & Borders

- **surface** (`#fafafa`): tile and card ground
- **surface-raised** (`#ffffff`): tile lifted on hover (matches page bg, contrast comes from shadow)
- **surface-hover** (`#f0f1f2`): observed nav-item hover
- **bg-deep** (`#1d1d1d`): near-black hero band — used when a campaign needs gravity
- **bg-creative** (`#000000`): pitch-black ground for "Creative Cloud all apps" portal
- **border** (`#eaeaea`): hairline default
- **border-strong** (`#cacaca`): table-row separator
- **border-subtle** (`#f0f0f0`): faintest divider, often inside a tile

### Shadow Colors

Adobe shadows are neutral-black (no blue tint). They sit lightly:

- **shadow-tile** (`rgba(0,0,0,0.08) 0 4px 12px`): default product tile
- **shadow-elevated** (`rgba(0,0,0,0.16) 0 8px 24px`): hover lift
- **shadow-deep** (`rgba(0,0,0,0.24) 0 16px 40px -8px`): modal / overlay

### Semantic

- **success** (`#268e6c`) on **success-bg** (`#e8f5ee`): plan-confirmed
- **warning** (`#e68619`) on **warning-bg** (`#fff3e0`): trial-expiring
- **danger** (`#d7373f`) on **danger-bg** (`#fce9ea`): payment-failed (note: distinct from brand red — slightly pinker)
- **info** (`#1473e6`) on **info-bg** (`#e1f0ff`): default notice tone

## 3. Typography Rules

### Font Family

**Adobe Clean** is the workhorse — a humanist sans designed for Adobe by Robert Slimbach (the same designer who shipped Adobe Garamond and Minion). Stack:

```
"Adobe Clean", "Source Sans 3", "Helvetica Neue", Helvetica, Arial, sans-serif
```

The `Source Sans 3` fallback is deliberate — it's Adobe's open-source cousin to Adobe Clean and renders close enough that the cascade is invisible. Body and display share the same family; weight does the heavy lifting. The mono companion is **Source Code Pro** for snippets in developer docs.

OpenType features used: `kern` (enabled by default), `liga` (standard ligatures), and `ss01` for the alternate single-storey `a` in display sizes. `tnum` activates only on price displays and tabular data.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | OT Features | Notes |
|------|------|-----:|-------:|-------:|---------:|-------------|-------|
| display-hero | Adobe Clean | 84 | 700 | 1.05 | -0.02em | kern, liga | Photoshop "20" announcements |
| display-xl | Adobe Clean | 64 | 700 | 1.08 | -0.018em | kern, liga | Sub-hero |
| display-lg | Adobe Clean | 48 | 600 | 1.18 | -0.012em | kern | Section title |
| h1 | Adobe Clean | 42 | 700 | 1.14 | -0.01em | kern | Observed h1 |
| h2 | Adobe Clean | 32 | 700 | 1.20 | -0.005em | kern | Tile-section title |
| h3 | Adobe Clean | 24 | 600 | 1.30 | 0 | kern | Card title |
| h4 | Adobe Clean | 20 | 600 | 1.35 | 0 | kern | Tile title |
| eyebrow | Adobe Clean | 13 | 700 | 1.30 | 0.08em | uppercase | Eyebrow above hero |
| lead | Adobe Clean | 21 | 400 | 1.45 | 0 | — | Hero subhead |
| body-lg | Adobe Clean | 18 | 400 | 1.55 | 0 | — | Marketing prose |
| body | Adobe Clean | 16 | 400 | 1.5 | 0 | — | Default paragraph |
| body-sm | Adobe Clean | 14 | 400 | 1.5 | 0 | — | Secondary copy |
| label | Adobe Clean | 13 | 600 | 1.4 | 0.01em | — | Form label, table head |
| caption | Adobe Clean | 12 | 400 | 1.4 | 0 | — | Asterisk, fine print |
| cta | Adobe Clean | 15 | 700 | 1.0 | 0.005em | — | Button label |
| nav-link | Adobe Clean | 14 | 600 | 1.3 | 0 | — | Top-nav |
| price | Adobe Clean | 36 | 700 | 1.05 | -0.01em | tnum | Plan card price |
| code | Source Code Pro | 14 | 400 | 1.5 | 0 | — | API snippets |
| code-micro | Source Code Pro | 12 | 400 | 1.4 | 0 | — | Inline code |

### Principles

- **Weight is voice**. 700 = headline gravitas, 600 = section title with restraint, 500 = nav and label, 400 = prose. There is no italic in display sizes.
- **Negative tracking is reserved for display ≥32px**. Below that, tracking returns to 0; below 14px, no negative tracking ever (legibility floor).
- **One family, many weights**. Adobe Clean owns 100% of marketing type. Source Code Pro is the only escape — strictly for code blocks.
- **Eyebrows wear uppercase + tracking**. 13px, 700, +0.08em, uppercase — the only place the site shouts.
- **Tabular numerals only on prices and metrics**. Plan cards, KPI displays, comparison tables get `tnum`; flowing prose stays proportional.
- **Cap-height matters for product chips**. Product titles ("Photoshop", "Illustrator") are weight 600 to sit a hair lighter than display 700, which lets the colored icon pull the visual weight.
- **No serif accent**. Adobe owns Garamond and Minion but never uses them in product marketing — the site is sans-only by discipline.

## 4. Component Stylings

### Button — Primary (Adobe Red, Pill)

- Background `#fa0f00` (Adobe red); text `#ffffff` weight 700
- Padding 12×24, radius `9999px` (pill — observed 22px = capsule on 44px height)
- Font `cta` (Adobe Clean 15/1.0, +0.005em)
- Hover: bg → `#d40b00`, no transform
- Active: bg → `#a50800`, scale(0.98)
- Focus: ring `0 0 0 2px #1473e6`, 2px offset
- Use: hero CTA "Buy now", "Get Photoshop", "Start free trial"

### Button — Accent (Document Cloud Blue)

- Background `#1473e6`; text `#ffffff` weight 700
- Same dimensions as primary
- Hover: bg → `#0265dc`
- Use: Acrobat / Document Cloud CTA, secondary trust action

### Button — Secondary (Outlined Black)

- Background transparent; text `#000000` weight 700
- Border `1px solid #000000`, padding 11×23 (1px reduced for border)
- Hover: bg → `#000000`, text → `#ffffff` (full inversion)
- Use: "Learn more", "See plans"

### Button — Ghost (Inline Link CTA)

- Background transparent; text `#1473e6` weight 700
- Padding 8×0 (vertical only); icon suffix `›` 1ch right
- Hover: text → `#0265dc`, icon translates `+2px` right
- Use: inside cards, "See features ›"

### Product Tile

- Background `#fafafa`; border `1px solid #eaeaea`; radius 8
- Padding 24; height auto, min 168px
- Icon 32×32 top-left in product brand hue
- Title `h4` (20/1.35 600) below icon, gap 16
- Description `body-sm` (14/1.5 400) below title
- Hover: shadow `rgba(0,0,0,0.16) 0 8px 24px`, transform `translateY(-2px)`, transition 200ms `cubic-bezier(0.4,0,0.2,1)`
- Use: Creative Cloud "All apps" portal, plan-tier comparison

### Card

- Background `#ffffff`; border `1px solid #eaeaea`; radius 8
- Padding 24×28
- Shadow `rgba(0,0,0,0.06) 0 2px 8px`
- Hover: shadow `rgba(0,0,0,0.10) 0 4px 16px` (subtle, no lift)
- Use: feature card, testimonial card

### Pricing Card

- Background `#ffffff`; border `2px solid #eaeaea`; radius 8
- Padding 32×28
- Highlighted variant: border `2px solid #fa0f00` + ribbon "Most popular" in Adobe red
- Plan title `h3` (24/1.30 600); price `price` (36/1.05 700, tnum)
- Use: Plans grid (3 tiers, middle highlighted)

### Badge

- Background `#fce9ea` (faint red tint); text `#b30b00`; padding 4×10; radius 4
- Font `label` (13/1.4 600, +0.01em)
- Variants: success, warning, danger, info — same shape, palette swap
- Use: "New", "Popular", "Limited time"

### Input

- Background `#ffffff`; border `1px solid #cacaca`; radius 4
- Padding 10×12; font `body` (16/1.5 400)
- Focus: border → `#1473e6`, ring `0 0 0 2px rgba(20,115,230,0.20)`
- Error: border → `#d7373f`, helper-text below in `caption` red
- Use: email signup, sign-in, search

### Navigation

- Top bar height 64px; bg `#ffffff`; bottom border `1px solid #eaeaea`
- Wordmark gradient at left (24×24 mark + "Adobe" sometimes shown)
- Nav links: padding 0×12, font `nav-link` (14/1.3 600), color `#000000`
- Hover: color → `#fa0f00` (Adobe red, the only place red is used outside CTAs)
- Mega-menu drops on hover with 4-column product grid

### Tabs

- Tab list: row of buttons, 12px gap, no fill
- Active tab: text `#000000` 600 with 2px underline `#fa0f00` extending the full label width
- Inactive: text `#53575b` 400
- Use: product feature comparison ("Plans", "Features", "FAQs")

## 5. Layout Principles

### Spacing System

Base unit `4px`. Scale: 4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 128. Display heroes use 96px top-margin; sections use 64–96px between blocks; card padding lands at 24–28; tile gaps default to 16. Density is deliberate: Adobe wants to show many products at once, so gutters stay tight.

### Grid & Container

- Page max-width `1440px` with 32–64px side padding
- Prose containers cap at 720px (lead + body) for readability
- Product grid: 4-up at desktop ≥1200, 3-up at tablet 900–1199, 2-up at 600–899, 1-up below 600
- Feature grid: 3-up default, collapses to 2-up then 1-up
- Hero often runs full-bleed (no max-width) with text container constrained inside

### Whitespace Philosophy

Adobe's whitespace is **inverted from Apple**. Where Apple breathes (huge negative space around hero objects), Adobe packs density: a Creative Cloud apps page may show 30+ tiles in a single viewport. The discipline that makes it readable is the *uniformity* of the chrome — every tile is the same shape, the same border, the same radius. Whitespace appears between sections (96px) but disappears within them (16px gaps).

### Section Cadence

- Hero (full-bleed white or `#1d1d1d`)
- Product grid section (white, dense)
- Feature trio (white or `#f5f5f5`, 3-up)
- Testimonial / customer logo band (`#f5f5f5`)
- Plans grid (white, 3-up, middle highlighted)
- FAQ accordion (white, single-column, max-720)
- Footer (`#000000` near-black, white text, dense link mesh)

The black footer is a deliberate brand cue — it's where the sober side of Adobe's identity lives.

## 6. Shapes & Radius Scale

| Tier | Radius | Use |
|------|------:|-----|
| Micro | 2 | Pill counts, tag corners |
| Small | 4 | Inputs, badges, table corners |
| Medium | 6 | Tertiary buttons (rare) |
| Large | 8 | Cards, product tiles, pricing cards |
| XL | 12 | Hero cards, modal corners |
| XXL | 16 | Premium feature tiles |
| Pill | 9999 | All buttons (capsule-shaped on 44px height = ~22px effective) |

Compound radii are rare; tiles are uniform 8px on all four corners. The pill button is Adobe's signature shape — it differentiates from Apple's 12px-rounded-rect and from Stripe's 6px buttons.

## 7. Depth & Elevation

| Level | Treatment | Use |
|------:|-----------|-----|
| 0 | Flat — page background | Body text, hero copy |
| 1 | `rgba(0,0,0,0.06) 0 2px 8px` | Default card, plan card resting |
| 2 | `rgba(0,0,0,0.08) 0 4px 12px` | Product tile resting |
| 3 | `rgba(0,0,0,0.16) 0 8px 24px` | Hover-lifted tile, dropdown menu |
| 4 | `rgba(0,0,0,0.24) 0 16px 40px -8px` | Modal, mega-menu |
| 5 | `rgba(0,0,0,0.32) 0 24px 64px -12px` | Top-most overlay (purchase flow) |

**Shadow Philosophy** — Adobe shadows are neutral-black, single-layer, and deliberately soft. The brand owns Photoshop, where realistic drop shadows are a daily output, so the marketing site avoids virtuoso shadow-craft and stays restrained: a single y-offset, low blur, low opacity. Color tinting in shadows is reserved for *product* canvases (Photoshop UI, Lightroom UI), never the corporate site.

## 8. Interaction & Motion

### Easing Curves

- **standard** `cubic-bezier(0.4, 0, 0.2, 1)`: default for color, opacity, transform
- **emphasized** `cubic-bezier(0.2, 0, 0, 1)`: hero CTA hover, premium-tile lift
- **out** `cubic-bezier(0, 0, 0.2, 1)`: modal entry, drawer slide-in

### Duration Buckets

- **fast** 130ms — hover color change, link underline grow
- **standard** 200ms — tile lift, card shadow intensify, button press
- **slow** 320ms — modal fade-in, mega-menu drop
- **page** 400ms — route transition (cross-fade only, no slide)

### Per-Component Recipes

- **Button hover**: `bg-color 130ms standard`, no transform
- **Button press**: `transform: scale(0.98) 100ms standard`
- **Tile hover**: `translateY(-2px) + shadow intensify, 200ms standard`, both properties on the same transition
- **Link hover**: underline grows from `text-decoration-thickness: 1px` → `2px` over 130ms
- **Tab switch**: underline slides on x-axis 200ms `emphasized`, color crossfades 200ms `standard`
- **Mega-menu drop**: opacity 0→1 + translateY -8px → 0, 320ms `out`
- **Wordmark gradient**: static — never animated (the gradient is identity, not effect)

### Page Transitions

Cross-fade only. Adobe avoids slide/wipe transitions on the marketing site to preserve the artboard metaphor — pages "load" rather than "navigate."

### Reduced Motion

`@media (prefers-reduced-motion: reduce)`: tile lifts disappear (translateY → 0), shadow intensification removed, modal fade duration capped at 100ms, mega-menu drops in instantly. Color and opacity transitions retained for state legibility.

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)

- Black `#000000` on white `#ffffff` — **21.0:1, AAA** (display, body)
- Body `#2c2c2c` on white — **15.3:1, AAA**
- Muted `#53575b` on white — **7.8:1, AAA**
- White on Adobe red `#fa0f00` — **5.1:1, AA** (button)
- White on Document Cloud `#1473e6` — **4.9:1, AA**
- Link `#1473e6` on white — **4.6:1, AA**
- Border `#eaeaea` on white — decorative only (not WCAG-relevant)

### Focus Indicators

All interactive elements receive a `2px solid #1473e6` ring with 2px offset. The ring uses the Document Cloud blue specifically because it remains visible against both white surfaces and the Adobe-red CTA fill.

### ARIA Patterns

- **Mega-menu** uses `role="menu"` + `aria-haspopup="menu"` on the trigger; arrow keys navigate, Escape closes
- **Pricing card grid** uses `role="region"` with an aria-labelledby pointing at the section heading
- **Plan toggle** (monthly/annual) is `role="radiogroup"` with `aria-checked` on the active option
- **Product tile** is a single anchor (`<a>`) with `aria-label` combining product name + tagline for screen readers
- **Modal** uses `role="dialog"` + `aria-modal="true"`; focus trapped inside, Escape closes

### Keyboard Navigation

- Tab order follows DOM (no `tabindex` overrides)
- Skip-link at the top jumps to `#main`
- Mega-menu: Tab into trigger → Enter to open → Arrow keys within → Escape returns to trigger
- Pricing cards: Tab through plans, Enter activates
- Carousel (if present): Arrow keys navigate slides, Tab exits the carousel

### Screen Reader Hints

- Wordmark gradient image has `alt="Adobe"` (the brand name, no decorative description)
- Product icons inside tiles are `aria-hidden="true"`; the title text carries the accessible name
- "New" badges include visually-hidden text "New feature" for clarity

### Reduced Motion

Honored via `@media (prefers-reduced-motion: reduce)` — see §8.

## 10. Responsive Behavior

| Breakpoint | Width | Behavior |
|-----------|------:|----------|
| mobile | 0–599 | 1-up tiles, stacked nav, hamburger menu |
| tablet | 600–899 | 2-up tiles, condensed nav, hamburger remains |
| desktop-sm | 900–1199 | 3-up tiles, full nav, mega-menu enabled |
| desktop | 1200–1439 | 4-up tiles, full nav, mega-menu, max-width 1440 |
| wide | 1440+ | 4-up tiles, container caps at 1440 with side gutters |

### Touch Targets

Minimum 44×44px for all interactive elements (buttons, nav links, tile-anchors). Pill-shaped buttons hit 48×~140 in practice.

### Collapsing Strategy

- **Nav** — desktop: horizontal mega-menu; mobile: vertical hamburger drawer with accordion sections
- **Product grid** — 4-up → 3-up → 2-up → 1-up, gutter shrinks 24 → 20 → 16 → 12
- **Pricing cards** — desktop: 3-up side-by-side; mobile: stacked, "most popular" remains first
- **Hero** — desktop: text-left + image-right; mobile: text-top + image-below, image cap-height 60vw

### Image Behavior

`srcset` with 1x, 2x, 3x for product imagery. Hero stills are JPEG with art-direction (`<picture>` source media queries). Lazy-loading default for below-fold.

### Container Queries

Used for the **product tile** itself — when the tile container falls below 280px wide, the icon shrinks 32→24 and the description hides. Containerized so the same component works in 4-up portals and 2-up sidebar embeds.

## 11. Content & Voice

### Tone

Confident, professional, builder-facing. Adobe's marketing voice is the senior creative who's seen every brief and isn't going to oversell. Sentences are declarative; verbs are active. Adjectives are technical ("award-winning", "industry-leading") rather than emotional ("magical", "delightful").

### Microcopy Patterns

- **Buttons**: "Buy now", "Get Photoshop", "Start free trial", "Sign in", "Learn more", "See plans" — verb + noun, never just verb
- **Errors**: "Hmm, something went wrong. Try again or [contact support]." — friendly preamble, action option
- **Success**: "Your free trial has started. Go to your apps." — confirmation + next step
- **Empty states**: "You haven't added any apps yet." + primary CTA "Browse all apps"

### CTA Verb Conventions

- "Buy now" — direct purchase (preferred over "Subscribe" because Adobe sells perpetual licenses still)
- "Get [Product]" — install/start a product
- "Start free trial" — 7-day trial CTA
- "Learn more" — secondary, leads to feature deep-dive
- "Compare plans" — pricing-page entry
- "Talk to sales" — enterprise-only, never appears on consumer pages

### Empty States

Adobe's empty states are functional — they say what's missing and offer one action. They don't try to be witty (a deliberate contrast with Linear / Notion). "No apps installed. Install your first app." is more typical than "Looks like you haven't started creating yet!"

### Tone Guardrails

- Never use "delight", "magical", "beautiful" in product copy
- Never use exclamation marks except in promo banners ("Save 65% on the All Apps plan!")
- Never use "we" in product copy — say "Adobe Express" or "Photoshop"; the personal pronoun is reserved for blog posts and CEO communications

## 12. Dark Mode & Theming

Light-only on the marketing site. Adobe ships dark mode inside its products (Photoshop, Illustrator default to a `#323232` workspace), but `adobe.com` itself does not honor `prefers-color-scheme: dark`. The closest the site gets to dark is the **black footer** (`#000000` ground, white text) and **campaign hero bands** (`#1d1d1d`) — both are local zone-treatments, not whole-page themes.

Rationale: the marketing site is a portal to multi-product showcases where each product has its own UI theme. A site-wide dark mode would conflict with the product-tile chromatic chips and the wordmark gradient, which are calibrated against white.

If implementing a derivative dark theme: invert bg ↔ text-strong, swap surface to `#1a1a1a`, lift border to `rgba(255,255,255,0.10)`, keep brand `#fa0f00` and accent `#1473e6` unchanged (they pass on `#1a1a1a` at AA), and replace shadows with hairline highlights `rgba(255,255,255,0.04) 0 1px 0 inset`.

## 13. Lineage & Influences

Adobe's marketing identity descends from two distinct ancestors. Visually, it owes the dense-grid-of-tiles pattern to **software portals of the 90s** (System 7, BeOS, early Windows control-panels) — the four-up grid of distinct app icons against neutral chrome predates the web. Typographically, the move from Myriad to Adobe Clean in 2014 was Adobe's quiet acknowledgement that **Helvetica's neutrality** had won as the corporate-tool default; Adobe Clean is humanist enough to feel warm without becoming editorial.

The wordmark gradient is unique to Adobe — it was introduced in 2020 as part of the rebrand and replaced the flat red mark used since 1982. It's deliberately *not* a tech-industry gradient (Stripe's purple-pink, Linear's grayscale, Notion's monochrome); the magenta-orange spectrum is closer to film-emulsion warmth — a nod to the Photoshop / Lightroom / Premiere photographic-imaging heritage.

Where Adobe rejects: maximalist editorial typography (no serif, no display oddities); Apple-style negative-space drama (Adobe's product range demands density); Linear-style monochrome restraint (Adobe's products are colorful by definition, so the chrome must accommodate chroma).

**Influences**

- Microsoft Office Online — dense product portals with unified chrome (https://www.office.com)
- Helvetica / Akzidenz-Grotesk lineage — Adobe Clean's humanist sans heritage
- 1990s software control panels — the 4-up tile grid of branded apps against neutral chrome
- IBM Plex / Carbon — the discipline of one-typeface-many-weights for enterprise breadth (https://www.ibm.com/design/language)
- Pantone print swatches — the per-product chromatic chip system (Ps blue, Ai orange) reads like a swatch book

## 14. Do's and Don'ts

**Do**

- **Do** keep the canvas paper-white `#ffffff`; alternate sections with `#f5f5f5`, never gray
- **Do** use Adobe Clean (or Source Sans 3 fallback) across all hierarchy — single-family discipline
- **Do** reserve the wordmark gradient for the wordmark itself, hero numbers, and premium tile borders
- **Do** use `#fa0f00` for primary CTA and `#1473e6` for Acrobat / Document Cloud actions
- **Do** ship the per-product chromatic chip (Ps `#31a8ff`, Ai `#ff9a00`, Pr `#9999ff`) inside neutral tile chrome
- **Do** lift product tiles 2px on hover with `rgba(0,0,0,0.16) 0 8px 24px` shadow
- **Do** use pill-radius (9999px) for buttons; 8px radius for tiles and cards
- **Do** stack 4-up product grids on desktop, 2-up on tablet, 1-up on mobile
- **Do** use uppercase eyebrows at 13/700 with +0.08em tracking
- **Do** ship a black `#000000` footer with dense link-mesh navigation

**Don't**

- **Don't** introduce a serif accent — Adobe owns Garamond and Minion, but the marketing site is sans-only by discipline
- **Don't** apply the wordmark gradient to body text or button fills — gradient text is reserved for hero numbers and the wordmark
- **Don't** mix Adobe-red `#fa0f00` with Document-Cloud-blue `#1473e6` in the same CTA group — they belong to different layers (creative vs document)
- **Don't** use heavy shadows; max y-offset is 16px and max opacity is 0.24
- **Don't** use cool greys (`#71717a`, `#52525b`); Adobe greys are warm-neutral (`#53575b`, `#6e6e6e`)
- **Don't** drop product chromatic chips on `#f5f5f5` surface-soft — only on white tiles
- **Don't** use exclamation marks outside promo banners — voice is sober, professional
- **Don't** ship a site-wide dark mode; the black footer and dark hero bands are local treatments
- **Don't** use "delight" or "magical" in product copy — Adobe voice is technical, not playful
- **Don't** animate the wordmark gradient — it is identity, not effect
- **Don't** tighten tracking below 14px — display tracking is reserved for ≥32px

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #ffffff
text: #000000
text-muted: #53575b
brand (red): #fa0f00
brand-deep: #b30b00
accent (blue): #1473e6
gradient-wordmark: linear-gradient(135deg, #ff0f5b, #fa0f00, #ff7a00)
border: #eaeaea
surface-soft: #f5f5f5
bg-deep: #1d1d1d
on-brand: #ffffff
```

### Example Component Prompts

1. *"Create a hero section in Adobe's style: paper-white `#ffffff` ground, 84px Adobe Clean weight 700 headline 'Creativity for all', 21px lead paragraph in `#2c2c2c`, primary CTA pill button `#fa0f00` 'Buy now' and outlined-black secondary 'Learn more', side-by-side."*
2. *"Design a Creative Cloud product portal: 4-up tile grid, each tile `#fafafa` bg with 1px `#eaeaea` border, 8px radius, 32px product icon top-left in product brand hue (Ps blue, Ai orange, Pr violet), Adobe Clean 600 product title at 20px, hover lifts tile -2px with `rgba(0,0,0,0.16) 0 8px 24px` shadow."*
3. *"Build a pricing card grid in Adobe's style: 3-up white cards with 2px `#eaeaea` borders, middle card highlighted with 2px `#fa0f00` border + 'Most popular' ribbon, 36px Adobe Clean 700 tnum price, pill `#fa0f00` 'Buy now' CTA."*
4. *"Create an Adobe-style top navigation: 64px white bar with `#eaeaea` bottom border, wordmark-gradient logo at left, nav links in Adobe Clean 600/14 with `#000000` rest and `#fa0f00` hover, mega-menu drops on hover with 4-column product grid."*
5. *"Design a dark hero band like Adobe's launch campaigns: `#1d1d1d` ground, white Adobe Clean 700 84px headline, wordmark gradient applied to a single hero number, primary CTA stays `#fa0f00` red."*
6. *"Build a dense feature trio: 3-up cards on white ground, 24×28 padding, 8px radius, 1px `#eaeaea` border, 24/600 Adobe Clean h3, 16/400 body, 'Learn more ›' ghost link with `#1473e6` text."*

### Iteration Guide

1. **Strip color first**. Start with black on white in Adobe Clean. Only add red `#fa0f00` after the type hierarchy reads.
2. **One CTA per viewport**. Adobe lands one primary `#fa0f00` button per visible region; secondary actions go outlined-black or ghost-blue.
3. **Tile uniformity is non-negotiable**. Every tile in a grid must share the same border, radius, padding, and icon size. Variation comes from color chips, not chrome.
4. **Use `#1473e6` for Acrobat or links — never both at once on the same CTA**. Mixing red and blue CTAs in the same module signals two different products competing.
5. **The wordmark gradient is a flare, not a paint**. Apply it once per page maximum; multiple applications dilute it.
6. **Density is a feature**. Don't try to "breathe" Adobe layouts — Adobe's customer wants to see 30 products at once. Tighten gutters before widening them.
7. **Verify pill radius**. Buttons at 44px tall need radius `≥22px` to read as capsules. Anything less reads as Stripe.
8. **Check the black footer**. If the page lacks a `#000000` footer with white-text dense links, it doesn't read as Adobe — the dark footer is the brand's grounding rod.
