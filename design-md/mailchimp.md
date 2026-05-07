---
name: Mailchimp
tagline: Cavendish-yellow chunkiness — a custom display serif (Cooper Light), the signature `#ffe01b` block, and a brand voice that hugs you while it ships campaigns.
updated_at: 2026-05-06T01:20:47+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://mailchimp.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [saas, media]
tags: [light, warm, serif, sans, playful, bright, organic]
preview_swatch: ['#ffe01b', '#241c15', '#ffffff']
related: [substack, beehiiv, kit-com]
description: 'Mailchimp''s identity is the chunkiest in SaaS — the proprietary `#ffe01b` Cavendish yellow as a full-bleed canvas, a custom Cooper Light display serif (and Graphik for body), Freddie the chimp throwing a wink, and a brand voice that combines small-business warmth with a 25-year-design-craft heritage.'

colors:
  # Primary
  bg: '#ffffff'                    # primary white canvas
  bg-yellow: '#ffe01b'             # signature Cavendish yellow band
  bg-cream: '#fbf8f0'              # softer cream stripe
  bg-dark: '#241c15'               # peppercorn near-black
  surface: '#f6f6f4'               # warm-grey panel
  surface-2: '#eeede9'             # hover panel
  surface-3: '#e3e1db'             # pressed
  surface-soft: '#fbfbf8'          # softest neutral
  surface-yellow-soft: '#fff5b8'   # pale yellow tint for callouts
  surface-yellow-deep: '#ffd60a'   # deeper yellow for hover state on yellow

  # Text
  text: '#241c15'                  # peppercorn body — warm near-black
  text-strong: '#0d0a05'           # display deeper near-black
  text-muted: '#6e655a'            # warm grey caption
  text-soft: '#9b9388'             # tertiary
  text-faint: '#bfb8ac'            # disabled
  text-on-yellow: '#241c15'        # peppercorn always on yellow
  text-on-dark: '#fbf8f0'          # cream on peppercorn dark
  text-on-dark-muted: '#bfb8ac'    # muted on dark
  text-on-brand: '#241c15'         # peppercorn on yellow

  # Brand
  brand: '#ffe01b'                 # the yellow itself
  brand-deep: '#ffd60a'             # deeper yellow for hover on yellow surfaces
  brand-pressed: '#e6c800'         # pressed yellow
  accent: '#241c15'                # peppercorn = secondary brand
  accent-cream: '#f5f2eb'          # cream tertiary
  accent-cream-deep: '#e8e1d0'     # deeper cream

  # Borders
  border: '#241c15'                # solid peppercorn cards (2px)
  border-soft: '#e0ddd4'           # warm hairline for internal grids
  border-stronger: '#0d0a05'       # near-black emphasis
  border-yellow-on-yellow: '#241c1533'  # peppercorn at 20% on yellow

  # Semantic
  success: '#1c8c4a'
  success-bg: '#d6efe2'
  warning: '#d97706'
  warning-bg: '#fef3c7'
  danger: '#c1272d'
  danger-bg: '#fde2e2'
  info: '#2563eb'
  info-bg: '#dbeafe'
  on-brand: '#241c15'

typography:
  display:
    family: '"Cooper Light", "Cooper Lt BT", "Cooper Std", "Cooper BT", Georgia, serif'
    weights: [300, 400]
    opentype-features: 'kern, liga, dlig, onum'
  body:
    family: '"Graphik", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  serif:
    family: '"Cooper Light", "Cooper Std", Georgia, serif'
    weights: [300, 400]
    opentype-features: 'kern, liga, dlig'
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", Menlo, monospace'
    weights: [400]
  scale:
    display-hero:    { size: 120, weight: 300, lineHeight: 0.92, tracking: '-0.03em',  family: serif, opentype: 'dlig' }
    display-xl:      { size: 92,  weight: 300, lineHeight: 0.95, tracking: '-0.025em', family: serif }
    display-lg:      { size: 72,  weight: 300, lineHeight: 0.98, tracking: '-0.022em', family: serif }
    h1:              { size: 60,  weight: 300, lineHeight: 1.0,  tracking: '-0.018em', family: serif }
    h2:              { size: 44,  weight: 300, lineHeight: 1.05, tracking: '-0.015em', family: serif }
    h3:              { size: 28,  weight: 600, lineHeight: 1.2,  tracking: '-0.005em', family: body }
    h4:              { size: 22,  weight: 600, lineHeight: 1.3,  tracking: '-0.003em', family: body }
    h5:              { size: 18,  weight: 600, lineHeight: 1.4,  tracking: '0',        family: body }
    body-lg:         { size: 19,  weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 17,  weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body-sm:         { size: 15,  weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    serif-pull:      { size: 32,  weight: 400, lineHeight: 1.3,  tracking: '-0.01em',  family: serif }
    serif-quote:     { size: 24,  weight: 400, lineHeight: 1.35, tracking: '0',        family: serif }
    label:           { size: 14,  weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    caption:         { size: 13,  weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    eyebrow:         { size: 12,  weight: 600, lineHeight: 1.4,  tracking: '0.1em',    family: mono }
    code:            { size: 14,  weight: 400, lineHeight: 1.6,  tracking: '0',        family: mono }
    code-micro:      { size: 12,  weight: 400, lineHeight: 1.5,  tracking: '0',        family: mono }

radius:
  micro: 0
  sm: 0
  md: 0
  lg: 0
  xl: 0
  xxl: 0
  featured: 0
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 140, 160, 200]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 80
  hero-y: 160
  section-y: 140
  gutter: 24

components:
  button-primary:
    bg: '#241c15'
    text: '#ffffff'
    radius: 0
    paddingX: 28
    paddingY: 16
    font: 'Graphik 500 / 16px'
    hover: 'bg #0d0a05'
  button-on-yellow:
    bg: '#241c15'
    text: '#ffe01b'
    radius: 0
    paddingX: 28
    paddingY: 16
    font: 'Graphik 500 / 16px'
    hover: 'bg #0d0a05'
    use: 'CTA on yellow band'
  button-secondary:
    bg: '#ffffff'
    text: '#241c15'
    radius: 0
    border: '2px solid #241c15'
    paddingX: 28
    paddingY: 14
    hover: 'bg #241c15 + text #fff'
  button-yellow:
    bg: '#ffe01b'
    text: '#241c15'
    radius: 0
    border: '2px solid #241c15'
    paddingX: 28
    paddingY: 14
    hover: 'bg #ffd60a'
    use: 'rare — playful CTA'
  card-default:
    bg: '#ffffff'
    radius: 0
    padding: 32
    border: '2px solid #241c15'
    shadow: 'none'
  card-on-yellow:
    bg: '#ffffff'
    radius: 0
    padding: 32
    border: '2px solid #241c15'
    shadow: 'none'
    use: 'card sitting on yellow band'
  input-text:
    bg: '#ffffff'
    border: '2px solid #241c15'
    radius: 0
    paddingX: 16
    paddingY: 12
    focus: 'border #ffe01b inset 4px + ring 2px #241c15'
  badge:
    bg: '#241c15'
    text: '#ffe01b'
    radius: 0
    paddingX: 10
    paddingY: 4
    font: 'Graphik 600 / 12px'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  ease-soft: 'cubic-bezier(0.45, 0, 0.55, 1)'
  duration-fast: 150
  duration-standard: 280
  duration-slow: 420
  duration-cinematic: 640
  reduced-motion: 'respects prefers-reduced-motion: reduce — Freddie illustration tilt becomes static, scroll-triggered reveals collapse to opacity-only fade, hover state changes preserve color but drop motion'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: 'none'                        # Mailchimp generally avoids ambient shadows
  standard: 'none'                       # depth via 2px peppercorn border
  elevated: '4px 4px 0 0 #241c15'        # offset block shadow (rare, playful)
  deep: '8px 8px 0 0 #241c15'            # larger offset, used on sticker elements
  ring: '0 0 0 4px #ffe01b'              # yellow focus ring

accessibility:
  contrast-text-on-bg: 14.8           # AAA — #241c15 on white
  contrast-strong-on-bg: 18.8         # AAA — #0d0a05 on white
  contrast-muted-on-bg: 5.4           # AA body, AAA large
  contrast-text-on-yellow: 12.6       # AAA — #241c15 on #ffe01b
  contrast-text-on-dark: 13.4         # AAA — #fbf8f0 cream on #241c15
  focus-ring: '4px solid #ffe01b with 2px offset (yellow ring on dark surfaces, peppercorn ring on yellow surfaces)'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive; high-contrast 4px ring preserves brand voice'

dark-mode: optional                  # Mailchimp does not ship a global dark mode; product UI has its own theming
---

## 1. Visual Theme & Atmosphere

Mailchimp's marketing site is anchored by three things: the proprietary `#ffe01b` Cavendish yellow as a full-bleed hero canvas, a custom **Cooper Light** display serif at 92px / 300 weight, and Freddie the chimp winking from at least one band per page. Body type is **Graphik** at 17px on a 24px line-height — set in peppercorn `#241c15` rather than pure black so it reads warmer.

The signature compositional move is heroic Cooper Light displaying a one-line marketing line ("Make your brand wear well.") on the yellow band, then a peppercorn-square CTA with white Graphik label sitting below. **Square corners everywhere. Zero radius.** That square-corner discipline is what separates Mailchimp from every other SaaS — it inherits **print advertising rather than software UI**.

The atmosphere is **chunky-friendly-craft**. Where Substack uses a literary serif on white and Beehiiv runs a different yellow shade, Mailchimp's Cooper Light terminals are the most distinctive thing in modern SaaS — no other 2026 marketing site runs a Cooper-class serif at 92px+ heroic sizes. Pair that with the proprietary yellow and the 2px solid peppercorn borders, and Mailchimp lands in a category of one.

The voice posture is **small-business-warmth-with-a-25-year-design-craft-heritage**. The yellow plus the chunky serif feels approachable; the precision of the typography (custom-cut Cooper Light, exact `#ffe01b`, exact 2px borders) signals "this is a brand designed by adults". The two registers — playful and precise — coexist by design.

**Key Characteristics**
- Proprietary Cavendish yellow `#ffe01b` as full-bleed hero canvas
- Cooper Light display serif at 92–120px, 300 weight
- Graphik for body, peppercorn `#241c15` color (never pure black)
- Zero radius on every functional surface (cards, buttons, inputs, panels)
- 2px solid peppercorn borders as the elevation language
- Freddie the chimp illustrated in peppercorn ink, slight rotational tilt
- Offset block shadows (4-8px) when shadow is needed — print-poster style
- Section cadence: yellow → white → cream → peppercorn → yellow
- Mono eyebrow at 12px / 0.1em ALL CAPS
- 140–160px section vertical rhythm — generous for the chunky type

## 2. Color Palette & Roles

### Primary

- **bg** (`#ffffff`): the primary white canvas
- **bg-yellow** (`#ffe01b`): Cavendish yellow, the signature — full-bleed hero
- **bg-cream** (`#fbf8f0`): softer cream stripe for alternating bands
- **bg-dark** (`#241c15`): peppercorn near-black band, used for testimonials and footer
- **text** (`#241c15`): peppercorn body — warm near-black, never pure `#000`
- **text-on-yellow** (`#241c15`): peppercorn always on yellow (the most-tested contrast pair in the system)
- **on-brand** (`#241c15`): peppercorn on yellow CTA

### Brand

- **brand** (`#ffe01b`): the yellow itself is the brand — exact, not approximate
- **brand-deep** (`#ffd60a`): deeper yellow for hover on yellow surfaces
- **brand-pressed** (`#e6c800`): pressed yellow
- **accent** (`#241c15`): peppercorn near-black is the secondary brand color — together with yellow, the full identity palette

### Accent

- **accent-cream** (`#f5f2eb`): cream tertiary panel tint
- **accent-cream-deep** (`#e8e1d0`): deeper cream for layered panels

Mailchimp does not ship a chromatic accent beyond yellow + peppercorn. Even errors and successes lean on muted earth tones rather than vibrant chromatics — the yellow holds the entire chromatic budget.

### Interactive

- **link**: `#241c15` underlined (peppercorn + 1px underline)
- **link-hover**: `#241c15` with 2px underline + slight thickening
- **link-on-yellow**: `#241c15` with permanent 1px underline
- **selected**: `rgba(255,224,27,0.4)` — yellow highlight (like a marker)
- **disabled**: `#bfb8ac` text on `#f6f6f4` bg

### Neutral Scale

- **text** `#241c15` — peppercorn body
- **text-strong** `#0d0a05` — display deeper near-black
- **text-muted** `#6e655a` — warm grey caption
- **text-soft** `#9b9388` — tertiary
- **text-faint** `#bfb8ac` — disabled
- **border** `#241c15` — solid peppercorn (always 2px)
- **border-soft** `#e0ddd4` — warm hairline for internal grids
- **border-stronger** `#0d0a05` — emphasis

The neutrals are **warm-tilted** — every grey has a touch of brown/yellow, never cool blue. This is the discipline that ties grayscale back to the cream/yellow brand.

### Surface & Borders

- **surface** `#f6f6f4` — warm-grey panel
- **surface-2** `#eeede9` — hover
- **surface-3** `#e3e1db` — pressed
- **surface-yellow-soft** `#fff5b8` — pale yellow tint for callouts and "tip" boxes
- **surface-yellow-deep** `#ffd60a` — deeper yellow for hover on yellow surfaces

### Shadow Colors

Mailchimp generally **avoids soft shadows entirely**. The depth language is **2px solid peppercorn border** + occasional **offset block shadow** (4×4 or 8×8 hard-edge `#241c15` shadow) borrowed from print-poster traditions. Soft `rgba(...)` shadows are rare and reserved for floating Freddie illustrations.

- **shadow-none**: default
- **shadow-elevated** `4px 4px 0 0 #241c15` — playful offset block shadow on stickers
- **shadow-deep** `8px 8px 0 0 #241c15` — larger offset for cards as posters
- **focus-ring** `0 0 0 4px #ffe01b` — yellow focus halo

### Semantic

- **success** `#1c8c4a` on `#d6efe2` — muted earth-green
- **warning** `#d97706` on `#fef3c7` — amber, kin to the yellow
- **danger** `#c1272d` on `#fde2e2` — restrained red
- **info** `#2563eb` on `#dbeafe`

## 3. Typography Rules

### Font Family

- **Display & Serif**: Cooper Light — a refined cut of Cooper Old Style at 300 weight (the light cut, not Cooper Black). Soft terminals, tall x-height, just enough warmth to feel hand-drawn rather than mechanical. Custom-licensed for Mailchimp.
- **Body**: Graphik — Christian Schwartz's neo-grotesque sans, used at 400/500/600 across body, label, and inline display H3+
- **Mono**: JetBrains Mono / IBM Plex Mono — eyebrows, code blocks, version strings
- **OpenType**: `kern, liga, dlig, onum` on Cooper Light — discretionary ligatures and old-style numerals are part of the editorial voice. Standard `kern, liga, tnum` on Graphik.

### Hierarchy

| Role | Font | Size | Weight | Line H | Tracking | OT | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Cooper Light | 120 | 300 | 0.92 | -0.03em | dlig | Above-fold yellow hero |
| display-xl | Cooper Light | 92 | 300 | 0.95 | -0.025em | — | Standard H1 |
| display-lg | Cooper Light | 72 | 300 | 0.98 | -0.022em | — | Section opener |
| h1 | Cooper Light | 60 | 300 | 1.0 | -0.018em | — | Subsection |
| h2 | Cooper Light | 44 | 300 | 1.05 | -0.015em | — | Feature header |
| h3 | Graphik | 28 | 600 | 1.2 | -0.005em | — | Card title — Graphik takes over below 36px |
| h4 | Graphik | 22 | 600 | 1.3 | -0.003em | — | Inline title |
| h5 | Graphik | 18 | 600 | 1.4 | 0 | — | Component label |
| body-lg | Graphik | 19 | 400 | 1.55 | 0 | — | Hero subhead |
| body | Graphik | 17 | 400 | 1.5 | 0 | — | Default — 1pt larger than 16-norm |
| body-sm | Graphik | 15 | 400 | 1.5 | 0 | — | Captions |
| serif-pull | Cooper Light | 32 | 400 | 1.3 | -0.01em | — | Editorial pull-quote |
| serif-quote | Cooper Light | 24 | 400 | 1.35 | 0 | — | Inline quote |
| label | Graphik | 14 | 500 | 1.4 | 0 | — | Form & button |
| caption | Graphik | 13 | 500 | 1.4 | 0 | — | Meta below cards |
| eyebrow | JetBrains Mono | 12 | 600 | 1.4 | 0.1em | — | Section taglines, ALL CAPS |
| code | JetBrains Mono | 14 | 400 | 1.6 | 0 | tnum | Inline code |
| code-micro | JetBrains Mono | 12 | 400 | 1.5 | 0 | tnum | Version strings |

### Principles

- **Cooper Light at 300 weight only** — the light cut is the brand, Cooper Black would read as a different era (1960s Push Pin Studios)
- **Cooper Light only at ≥36px** — below that, the terminal contrast collapses and the serif loses its character
- **Graphik takes over below 36px** — the sans-serif handles all body, labels, and inline H3+
- **Body at 17px, not 16** — Mailchimp's slightly larger body reads more friendly-newsletter than spec-sheet
- **Discretionary ligatures (`dlig`) on Cooper Light** — `ct`, `st`, `&` are part of the editorial signal
- **Old-style numerals (`onum`) on Cooper Light** — 0–9 settle below the baseline irregularly, which is the magazine-printing signal
- **Mono eyebrow at 12px / 0.1em** — wider tracking than peers, deliberate "telegram-style" voice
- **Peppercorn body, not black** — `#241c15` on white reads warmer than pure `#000`
- **No italic Graphik** — italics are reserved for the serif moments

## 4. Component Stylings

### Buttons

**Primary CTA (peppercorn rectangle)** — the signature Mailchimp button
- bg `#241c15`, text `#ffffff`, radius `0`
- padding `16px 28px`, Graphik 500 16px
- hover: bg `#0d0a05`, 280ms ease-standard
- focus: ring `4px solid #ffe01b` with 2px offset
- use: every primary action — "Sign up free", "Get started", "Try Mailchimp"

**On-Yellow CTA**
- bg `#241c15`, text `#ffe01b`, radius `0` — peppercorn block with yellow label
- padding `16px 28px`, Graphik 500 16px
- focus: ring `4px solid #ffffff` for contrast on yellow band
- use: primary action when sitting on yellow band

**Secondary Button**
- bg `#ffffff`, text `#241c15`, border `2px solid #241c15`, radius `0`
- padding `14px 28px`, Graphik 500 16px
- hover: bg `#241c15` + text `#ffffff` (full inversion)
- use: secondary action — "Learn more", "View pricing"

**Yellow Button** (rare, playful)
- bg `#ffe01b`, text `#241c15`, border `2px solid #241c15`, radius `0`
- padding `14px 28px`, Graphik 500 16px
- hover: bg `#ffd60a`
- use: occasional playful CTA, particularly on cream backgrounds

**Sticker Button** (with offset shadow)
- variant of any button + `4px 4px 0 0 #241c15` offset shadow
- use: rare playful moments, "newsletter sign-up" callouts

### Cards

**Card Default**
- bg `#ffffff`, radius `0`, padding `32px`
- border `2px solid #241c15`, **no shadow**
- hover: bg `#fbf8f0` cream, no other change
- use: feature cards, content blocks

**Card Yellow Inversion**
- bg `#ffe01b`, radius `0`, padding `32px`
- border `2px solid #241c15`, peppercorn type
- use: highlight cards, callouts within white sections

**Card Cream**
- bg `#f5f2eb`, radius `0`, padding `32px`
- border `2px solid #241c15`
- use: tertiary card, alternative to white

**Card Sticker** (Freddie illustration)
- bg `#ffffff`, radius `0`, padding `24px`
- border `2px solid #241c15`, offset shadow `4px 4px 0 0 #241c15`
- 1–2deg rotation tilt
- use: Freddie illustration callouts, "NEW" stickers

### Badges & Tags

**Badge Peppercorn**
- bg `#241c15`, text `#ffe01b`, radius `0`
- padding `4px 10px`, Graphik 600 12px

**Badge Yellow**
- bg `#ffe01b`, text `#241c15`, radius `0`, border `2px solid #241c15`
- padding `4px 10px`, Graphik 600 12px

**Tag Eyebrow**
- bg transparent, text `#6e655a`, radius `0`
- JetBrains Mono 12px / 0.1em ALL CAPS

### Inputs & Forms

**Text Input**
- bg `#ffffff`, border `2px solid #241c15`, radius `0`
- padding `12px 16px`, Graphik 400 17px
- focus: border stays peppercorn, inner 4px solid `#ffe01b` ring inset
- placeholder: `#9b9388`

**Newsletter Input** (signature Mailchimp pattern)
- inline horizontal: white input + black submit
- both at zero radius, 2px peppercorn border
- placeholder: "your@email.com"

### Navigation

**Top Nav**
- bg `#ffffff`, height `80px`, gutters `24px`
- Mailchimp wordmark (peppercorn) left, link cluster center (Why Mailchimp/Marketing Platform/Pricing/Resources), peppercorn CTA right
- 2px peppercorn `#241c15` bottom border on scroll
- mega-dropdown reveals on hover

**Footer**
- bg `#241c15`, padding `120px 24px`
- 5-column cream `#fbf8f0` link grid in Graphik 14px
- yellow band above footer cuts the inversion (full-bleed `#ffe01b` strip with peppercorn type)
- Freddie + © at bottom

### Tabs / Tooltips / Toasts

**Tab Group**
- underline-style: 2px peppercorn on active, 1px `#e0ddd4` on rest
- text `#241c15` active, `#6e655a` rest

**Tooltip**
- bg `#241c15`, text `#fbf8f0`, radius `0`, padding `8px 12px`
- Graphik 500 12px

**Toast**
- bg `#ffffff`, border `2px solid #241c15`, radius `0`, optional offset shadow `4px 4px 0 0 #241c15`
- 16px Graphik 500 message

## 5. Layout Principles

### Spacing System

- **base** `4px`, scale `[0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 140, 160, 200]`
- Density philosophy: **chunky-spacious**. Mailchimp holds 140–160px section vertical rhythm — required to give the heroic Cooper Light air.

### Grid & Container

- **page-width** `1280px` with 24px gutters
- 12-column grid; hero often full-bleed yellow
- **prose-width** `720px` — used for blog and pricing
- Cards and bands often **bleed to edge** — yellow goes full-viewport, white resets to container

### Whitespace Philosophy

Mailchimp's whitespace is **poster-generous**. The hero gives Cooper Light at 92px+ massive vertical air (160px above and below). Section vertical rhythm runs 140px between major bands. The heavy display type requires wide breathing room — packed Cooper Light reads dated.

### Section Cadence

The page reads as alternating tonal bands:
1. Yellow `#ffe01b` hero with Cooper Light at 92px
2. White feature row with peppercorn-bordered cards
3. Cream `#fbf8f0` pricing band
4. Peppercorn `#241c15` dark testimonial
5. Yellow `#ffe01b` callout band
6. White CTA band with Freddie illustration
7. Yellow → peppercorn footer transition

The yellow → white → cream → peppercorn → yellow cycle is the rhythm. The four colors carry the entire palette weight.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| All functional | **0px** | Cards, buttons, inputs, panels — every functional surface |
| Pill | 9999px | Avatars and a handful of badges only |

Mailchimp's radius system is **the most disciplined zero-radius in modern SaaS**. Cards, buttons, inputs, panels, tooltips, toasts — all square corners. The pill (9999px) is reserved for avatars and a small set of brand badges. This square-corner discipline inherits from **print advertising and 1960s editorial** rather than software UI conventions, and is the most distinctive shape decision in the system.

The borders compensate for the lack of radius — 2px solid `#241c15` peppercorn borders make every surface read as a "block" rather than a "tile". Without the heavy border, square corners would read brutalist; with the border, they read poster-craft.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow, no border | Display copy on canvas |
| 1 | 2px solid `#241c15` border | Resting cards, default state |
| 2 | 2px border + `4px 4px 0 0 #241c15` offset shadow | Sticker callouts, playful elements |
| 3 | 2px border + `8px 8px 0 0 #241c15` offset shadow | Larger sticker compositions |
| 4 | Soft shadow `0 8px 24px rgba(36,28,21,0.12)` (rare) | Floating Freddie, modals |
| 5 | Inverted band `#241c15` | Footer, testimonial walls |

### Shadow Philosophy

Mailchimp's depth is **borders + offset block shadows**, not soft elevation. The 2px solid peppercorn border replaces the soft shadow entirely on most surfaces. When a "lifted" feel is needed (sticker callouts, playful CTAs), the language is **hard-edge offset shadow** — `4px 4px 0 0 #241c15` — borrowed from poster printing rather than UI elevation.

Soft `rgba(...)` shadows are reserved for floating Freddie illustrations, modals, and the rare "is this actually elevated?" moment. The dark `#241c15` testimonial band provides emotional contrast without requiring elevation effects — that's the rhetorical device.

## 8. Interaction & Motion

### Easing Curves

- **ease-standard** `cubic-bezier(0.4, 0, 0.2, 1)` — most state changes
- **ease-emphasized** `cubic-bezier(0.2, 0, 0, 1)` — modal entry, hero reveal
- **ease-bounce** `cubic-bezier(0.34, 1.56, 0.64, 1)` — Freddie illustrations, playful product moments
- **ease-soft** `cubic-bezier(0.45, 0, 0.55, 1)` — symmetric breathing

### Duration Buckets

- **fast** `150ms` — button hover, link state
- **standard** `280ms` — card hover, dropdown reveal
- **slow** `420ms` — modal entry, page section reveal
- **cinematic** `640ms` — Freddie wink animation cycle

### Per-Component Recipes

- **Primary CTA hover**: bg `#241c15` → `#0d0a05`, 280ms ease-standard, no lift (the chunky borders don't lift)
- **Secondary button hover**: full inversion (bg + text swap), 280ms ease-standard
- **Card hover**: bg `#fff` → `#fbf8f0` cream tint, no other change
- **Sticker tilt**: 1–2deg static rotation, no animation by default
- **Freddie wink**: 640ms cinematic eye-close cycle, plays once on scroll-into-view
- **Link hover**: underline thickness 1px → 2px, 200ms ease-standard

### Page Transitions

- Section reveals on scroll: fade-up 8px, 420ms slow ease-emphasized
- Hero on first paint: fade only, 640ms (no translate — emphasis on the heroic type)
- Sticky nav: 2px peppercorn border slides in on scroll, 280ms

### Reduced Motion Strategy

Mailchimp respects `prefers-reduced-motion: reduce`:
- Freddie wink animation: disabled (static eye-open Freddie shown)
- Sticker tilt: removed (becomes 0deg straight)
- Scroll-triggered reveals: opacity-only fade
- Hover state changes preserve color/border, drop motion
- Modal entry: opacity-only, no translate

## 9. Accessibility & A11y

### Contrast Pairs

- text `#241c15` on bg `#fff`: **14.8** — AAA all sizes
- text-strong `#0d0a05` on bg `#fff`: **18.8** — AAA
- text-muted `#6e655a` on bg `#fff`: **5.4** — AA body, AAA large
- text-on-yellow `#241c15` on bg-yellow `#ffe01b`: **12.6** — AAA — the most-tested pair in the system
- text-on-dark `#fbf8f0` on bg-dark `#241c15`: **13.4** — AAA
- on-brand `#fff` on accent `#241c15`: **17.2** — AAA
- yellow `#ffe01b` on peppercorn `#241c15`: **12.6** — AAA — used for badge text

### Focus Indicators

- 4px solid `#ffe01b` (Cavendish yellow) ring with 2px offset on light/peppercorn surfaces
- 4px solid `#241c15` peppercorn ring on yellow surfaces
- Visible on every interactive — the heavy 4px ring is part of the brand voice
- Never `outline: none` without replacement

### ARIA Patterns

- Mega-dropdown nav: `role="menu"` + `aria-haspopup="menu"` + `aria-expanded`
- Modal: `role="dialog"` + `aria-modal="true"` + focus trap
- Newsletter form: `<form>` with `aria-label="Subscribe to Mailchimp newsletter"`
- Freddie illustration: `aria-label="Freddie, the Mailchimp mascot"` if interactive; `aria-hidden="true"` if purely decorative

### Keyboard Nav

- Tab order matches DOM source
- ENTER/SPACE activate buttons
- ARROW navigates within mega-menus, listboxes
- ESC closes modals/dropdowns

### Screen Reader Hints

- Mailchimp wordmark SVG: `<title>Mailchimp</title>`
- Freddie illustrations: described via `aria-label` when meaningful, hidden when decorative
- Mono eyebrow labels are semantic spans
- Pull-quote Cooper Light: rendered as `<blockquote>` with `cite` attribute when applicable

### Reduced Motion

- Honored across the site
- Freddie animations, sticker tilts: disabled
- Scroll-triggered reveals: opacity-only
- Hover state changes preserve color, drop motion

## 10. Responsive Behavior

### Breakpoints

| Tier | Min-width | Use |
|---|---|---|
| mobile | 0–639px | Single-column, full-width yellow hero |
| tablet | 640–1023px | 2-column feature grid |
| desktop | 1024–1279px | Full 12-column |
| wide | 1280px+ | Container caps at 1280, generous gutters |

### Touch Targets

Minimum 44×44px on mobile. Primary CTA scales padding from `16px 28px` (desktop) to `18px 32px` (mobile) for 56px+ tap area — the chunky button is on-brand even at touch sizes.

### Collapsing Strategy

- **Hero display**: 120px → 80px → 56px → 40px down the cascade — Cooper Light scales aggressively
- **Feature grid**: 3-col → 2-col → 1-col
- **Top nav**: full mega-dropdown → hamburger drawer at <1024px (drawer uses 2px peppercorn dividers)
- **Section vertical rhythm**: 140px → 96px → 64px
- **Sticker tilt**: removed on mobile (becomes static 0deg)

### Image Behavior

- Freddie illustrations: SVG-based, scale infinitely
- Product mockups: aspect-ratio 16:10, `object-fit: contain`
- Avatars: 48×48px circular, peppercorn 2px ring

### Container Queries

Mailchimp uses container queries on the feature card grid — when a card narrows below 320px, the inline mono eyebrow wraps below the title rather than above.

## 11. Content & Voice

### Tone

**Hugs-while-it-ships.** Mailchimp talks to small-business owners, marketers, and creators who need to send email at scale but don't want to feel "enterprisey". The voice is warm, direct, second-person, slightly winking. "Send better email" rather than "Empower your communication strategy". Adjectives are reserved for the user's brand, not the marketing.

The voice has been refined over 25 years and is documented in Mailchimp's content style guide — the brand is famously content-craft-forward, with internal copywriters who treat microcopy as load-bearing.

### Microcopy Patterns

- **Button verbs**: "Sign up free", "Get started", "See pricing", "Try Mailchimp", "Talk to sales"
- **Empty states**: "No campaigns yet — let's send your first." (Inviting, action-oriented.)
- **Errors**: "Something didn't go through. Want to try again?" (Conversational, not technical.)
- **Success**: "Sent." (Past tense. Confidence.)
- **Loading**: "Sending your campaign…" (Verb in progress, sets expectation.)
- **Confirmations**: "Got it." / "All set." (Brief, friendly.)

### CTA Verb Conventions

Mailchimp prefers **"Sign up free"** as primary CTA across hero, pricing, and footer. The word "free" is non-negotiable — Mailchimp's brand promise is the freemium tier. Secondary is **"See pricing"** or **"Talk to sales"** for enterprise. For learning surfaces: **"Browse templates"**, **"Read our guide"**, **"Watch the demo"**.

### Empty States

Mailchimp fills empty states with friendly invitation: "No campaigns yet — let's send your first." The voice is co-conspiratorial, never apologetic. Freddie often appears in product empty states with a winking variant.

## 12. Dark Mode & Theming

Mailchimp's marketing site is **light-only** — no global dark variant offered. The product UI (Mailchimp dashboard, campaign editor) ships its own theming, but the marketing canvas commits to the white + yellow + peppercorn palette as part of the brand commitment.

Mailchimp uses the peppercorn `#241c15` band as a dark inversion device for testimonials and footer — composition rhythm, not preference. The token swap inside any peppercorn band:

```yaml
colors-inverted:
  bg: '#241c15'
  surface: '#2d2419'
  surface-2: '#3a2f22'
  text: '#fbf8f0'              # cream stays — preserves voice
  text-muted: '#bfb8ac'
  text-soft: '#9b9388'
  brand: '#ffe01b'             # yellow unchanged
  border: '#fbf8f0'            # cream border on dark
```

A full dark marketing canvas would shift Mailchimp from "small-business-warm" to "tech-tool-serious" — breaking the entire brand argument.

## 13. Lineage & Influences

Mailchimp's design system is **one of the most distinctive in SaaS**, architected over the past 15 years primarily by Aaron Walter and the in-house brand team after the 2018 redesign. The signature move is the proprietary `#ffe01b` "Cavendish" yellow used as a full-bleed band, paired with a custom **Cooper Light** display serif (a refined cut of Cooper Old Style at the 300 light weight) and **Graphik** for body.

Headlines hit 90px+ and the chunky-yet-refined Cooper terminals are unmistakable — no other 2026 SaaS runs a Cooper-class serif at heroic sizes. The radius system is aggressively zero — square corners on every card, button, and panel — which inherits from old-school print advertising rather than modern SaaS rounding. **Freddie the chimp** (illustrated in peppercorn `#241c15`) throws a wink across the marketing site.

The closest design siblings are the **2018-era Slack rebrand aesthetic** and the current **Cavendish-licensed beehiiv yellow**, but Mailchimp's Cooper serif puts it in a category of one. The 1960s **Push Pin Studios / Milton Glaser** display-typography heritage is the deeper lineage — the kind of friendly-chunky serif that defined American magazine advertising.

The 2018 rebrand decision to drop modernist sans-serif headlines and lean into Cooper Light was a deliberate counter-move against the "Inter SaaS" homogeneity that was taking over the industry. By 2026, the discipline has aged extraordinarily well — Mailchimp looks both contemporary and timeless, and other brands trying to imitate the formula (most notably beehiiv with its yellow + serif) reveal how singular Mailchimp's execution is.

**Named Influences**
- **Slack** (2018 rebrand) — Sibling chunky-friendly brand-voice + custom display serif move
- **Push Pin Studios** ([wikipedia.org/wiki/Push_Pin_Studios](https://en.wikipedia.org/wiki/Push_Pin_Studios)) — 1960s display-typography heritage that the Cooper Light hero references
- **Hoefler & Co. / Champion** ([typography.com](https://www.typography.com)) — American display-serif craft tradition the Cooper Light implements
- **Milton Glaser** — "I Heart NY" lineage of friendly-chunky display serifs
- **Schwartzco / Graphik** ([commercialtype.com](https://commercialtype.com)) — Christian Schwartz's neo-grotesque body sans

## 14. Do's and Don'ts

### Do

- Keep the Cavendish yellow at exactly `#ffe01b`; even a 5% drift toward `#ffd60a` reads as beehiiv, not Mailchimp
- Hold every functional radius at `0`; the square corner is the most distinctive shape decision in the system
- Use Cooper Light at 300 weight on display — the light cut is the brand, Cooper Black would read as a different era
- Keep peppercorn `#241c15` as the body color — never pure black
- Use 2px solid peppercorn borders on cards as the elevation language
- Reach for offset block shadows `4px 4px 0 0 #241c15` for playful sticker moments
- Hold Cooper Light only at ≥36px — below that, terminal contrast collapses
- Use Graphik for body and inline H3+ — the sans takes over below 36px
- Use mono eyebrow at 12px / 0.1em ALL CAPS — Mailchimp's signature wider tracking
- Place Freddie illustrations in peppercorn ink with 1–2deg sticker tilt

### Don't

- Substitute Inter or Graphik for Cooper Light on display headings; the serif terminals carry the entire brand voice
- Apply soft shadows to cards; the 2px solid peppercorn border is the elevation language
- Use peppercorn on yellow at small sizes; below 14px the contrast bites — keep on-yellow type to display sizes
- Round any functional surface — square corners are non-negotiable
- Use Cooper Bold or Cooper Black; the 300 weight is the brand
- Drop body type below 16px — 17 is the friendliness floor
- Use cool grey on the cream/yellow palette; warm-tilted neutrals only
- Apply the yellow to a button label or primary text; yellow is for backgrounds and badges
- Use a serif other than Cooper Light on display; even Tiempos would read as Ghost, not Mailchimp
- Pure-white CTA on yellow band — peppercorn-on-yellow is the protected pair

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:           #ffffff
bg-yellow:    #ffe01b (Cavendish yellow — the brand)
bg-cream:     #fbf8f0
bg-dark:      #241c15 (peppercorn near-black)
text:         #241c15 (peppercorn body)
text-muted:   #6e655a
brand:        #ffe01b
accent:       #241c15 (peppercorn = secondary brand)
border:       #241c15 (always 2px solid)
```

### Example Component Prompts

1. *"Create a Mailchimp-style yellow hero: full-bleed `#ffe01b` background, Cooper Light 300 at 92px peppercorn `#241c15` headline reading 'Make your brand wear well.' tracked at -0.025em with discretionary ligatures, Graphik 400 19px body in #241c15 below, peppercorn-block CTA `#241c15` bg with white Graphik 500 16 label saying 'Sign up free' at zero radius."*
2. *"Design a Mailchimp feature card: white bg, zero radius, 2px solid `#241c15` peppercorn border, no shadow, 32px padding. Graphik 600 28 title in peppercorn, body in Graphik 400 17, mono eyebrow at top reading 'AUTOMATION' in JetBrains Mono 12 / 0.1em #6e655a."*
3. *"Build a Mailchimp testimonial pull-quote: Cooper Light 32 / 1.3 quote in peppercorn `#241c15`, dropped on yellow `#ffe01b` band with 96px vertical padding, no card chrome — quote sits directly on yellow. Attribution in Graphik 500 14 below in peppercorn."*
4. *"Compose a Mailchimp peppercorn dark band: full-bleed `#241c15` bg, 96px vertical padding, cream `#fbf8f0` Cooper Light 60 headline, cream Graphik 19 body, yellow `#ffe01b` CTA block with peppercorn label saying 'Get started'."*
5. *"Create a Mailchimp Freddie sticker: small white card with 2px peppercorn border, zero radius, `4px 4px 0 0 #241c15` offset block shadow, 1deg rotation tilt, contains peppercorn-ink Freddie illustration winking, optional caption in Graphik 500 13."*
6. *"Design a Mailchimp newsletter signup: inline horizontal layout, white input on left with 2px peppercorn border zero radius, peppercorn-block submit button on right matching height, placeholder 'your@email.com' in #9b9388, 4px yellow focus ring on input."*

### Iteration Guide

1. **Start with the yellow exactness.** If `#ffe01b` is approximated as `#ffd60a` or `#ffe600`, force back to exact. The hex is non-negotiable — drift reads as beehiiv.
2. **Strip the radius.** If buttons or cards have any radius, force to 0. Square corners are the most distinctive shape decision.
3. **Add the 2px peppercorn border.** If cards lack borders, add 2px solid `#241c15`. The border replaces the shadow elevation language.
4. **Swap to Cooper Light on display.** If hero copy is rendering in Inter / Graphik / Söhne at 80px+, swap to Cooper Light 300. The serif is the entire brand voice.
5. **Hold Graphik for body.** If body is in Inter or Helvetica, swap to Graphik. The sans companion is the locked pairing.
6. **Use peppercorn, not black.** If body type is `#000`, swap to `#241c15`. The warm near-black ties to the cream/yellow palette.
7. **Add a Freddie sticker.** If the page lacks personality, drop a peppercorn-ink Freddie illustration with 1–2deg tilt and a `4px 4px 0` offset shadow. One per page minimum.
8. **Use the offset block shadow.** If a callout needs elevation, replace soft shadow with `4px 4px 0 0 #241c15` hard-edge offset. Print-poster, not UI.
