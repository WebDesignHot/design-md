---
name: BMW M
tagline: Performance black on M-blue/M-violet/M-red — the motorsport variant that turns BMW corporate into track-day theatre.
author: webdesignhot
source_url: https://www.bmw-m.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [automotive, saas]
tags: [dark, motorsport, sans, bold, photography, racing]
preview_swatch: ['#0a0a0a', '#1c69d4', '#e22718']
related: [bmw, ferrari, lamborghini]
description: 'BMW M is the motorsport-bombastic counterpart to BMW corporate — a near-black canvas where the M-stripe triplet (M-blue `#0066b1`, M-violet `#5b1f7a`, M-red `#e22718`) appears in full force as section accents, gradient bands and text-fill highlights. The site replaces BMW.com''s cream calm with a track-aggressive **carbon-black ground** (`#0a0a0a`) holding white BMW Type Next at heavier weights (700–900), tighter line-heights, and uppercase ////M lockup glyphs deployed as decorative chrome. Hero photography is high-contrast, motion-blurred, taken at speed — and CTAs are still 0-radius rectangles, but they sit on dark with white outline ghost variants and a saturated M-red filled primary. Every section feels like a podium step.'

colors:
  bg: '#0a0a0a'                  # carbon-black ground
  bg-elev: '#161616'              # surface-elevated card
  bg-strong: '#1f1f1f'            # divider band
  bg-light: '#ffffff'             # rare light section (spec tables)
  bg-light-soft: '#f5f5f5'
  surface: '#0a0a0a'
  surface-card: '#161616'
  surface-card-hover: '#1f1f1f'
  text: '#e6e6e6'                 # default body on dark
  text-strong: '#ffffff'           # display copy
  text-muted: '#a3a3a3'           # captions
  text-faint: '#6b6b6b'            # disabled
  text-on-light: '#0a0a0a'
  brand: '#e22718'                 # M-red — primary CTA
  brand-hover: '#b81f12'
  brand-active: '#9d1a0e'
  on-brand: '#ffffff'
  m-blue: '#0066b1'                # M-stripe light blue
  m-violet: '#5b1f7a'              # M-stripe violet (the iconic middle stripe)
  m-red: '#e22718'                 # M-stripe red
  m-blue-electric: '#1c69d4'       # corporate-blue echo
  m-gradient-start: '#0066b1'
  m-gradient-mid: '#5b1f7a'
  m-gradient-end: '#e22718'
  border: 'rgba(255,255,255,0.12)' # hairline on dark
  border-strong: 'rgba(255,255,255,0.24)'
  border-light: '#e6e6e6'
  link: '#0066b1'
  link-hover: '#1c69d4'
  ring: '#e22718'
  shadow-soft: 'rgba(0,0,0,0.6)'
  shadow-elev: 'rgba(0,0,0,0.8)'
  shadow-deep: 'rgba(0,0,0,0.95)'
  glow-red: 'rgba(226,39,24,0.4)'
  success: '#22c55e'
  warning: '#f59e0b'
  danger: '#e22718'
  info: '#0066b1'

typography:
  display:
    family: '"BMW Type Next Latin", "BMWTypeNext", system-ui, sans-serif'
    weights: [400, 700, 900]
    opentype-features: ['kern']
  body:
    family: '"BMW Type Next Latin", system-ui, sans-serif'
    weights: [300, 400, 700]
    opentype-features: ['kern']
  mono:
    family: 'SF Mono, Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-mega:    { size: 96, weight: 900, lineHeight: 0.95, tracking: '-0.02em', family: display, transform: 'uppercase', notes: 'Hero M model name (M3, M5, M8, XM)' }
    display-xl:      { size: 72, weight: 900, lineHeight: 1.00, tracking: '-0.015em', family: display, transform: 'uppercase' }
    display-lg:      { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.01em', family: display, transform: 'uppercase' }
    display-md:      { size: 40, weight: 700, lineHeight: 1.10, tracking: '0', family: display, transform: 'uppercase' }
    display-sm:      { size: 28, weight: 700, lineHeight: 1.15, tracking: '0', family: display }
    title-lg:        { size: 22, weight: 700, lineHeight: 1.30, tracking: '0', family: display }
    title-md:        { size: 18, weight: 700, lineHeight: 1.40, tracking: '0', family: display }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.40, tracking: '0.04em', family: body }
    label-uppercase: { size: 12, weight: 700, lineHeight: 1.30, tracking: '0.16em', family: display, transform: 'uppercase' }
    button:          { size: 14, weight: 700, lineHeight: 1.00, tracking: '0.08em', family: display, transform: 'uppercase' }
    nav-link:        { size: 13, weight: 700, lineHeight: 1.40, tracking: '0.08em', family: display, transform: 'uppercase' }
    spec-number:     { size: 64, weight: 900, lineHeight: 1.0, tracking: '-0.02em', family: display, notes: '0–60, top speed, hp digits' }
    spec-unit:       { size: 14, weight: 400, lineHeight: 1.0, tracking: '0.08em', family: body, transform: 'uppercase' }
    micro:           { size: 11, weight: 400, lineHeight: 1.40, tracking: '0.06em', family: body }
    code:            { size: 13, weight: 400, lineHeight: 1.5, tracking: '0', family: mono }

radius:
  none: 0
  xs: 2
  sm: 4
  md: 8
  pill: 9999

spacing:
  base: 8
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160]

layout:
  page-width: 1440
  prose-width: 760
  header-height: 64
  hero-height: 100vh

components:
  button-primary:
    bg: '#e22718'
    text: '#ffffff'
    padding: '16px 40px'
    radius: 0
    font: 'BMW Type Next 14/700 uppercase 0.08em tracking'
    transition: 'background 0.2s ease, transform 0.2s ease'
    hover: 'background #b81f12; subtle glow rgba(226,39,24,0.4) 0 0 24px'
  button-ghost-dark:
    bg: 'transparent'
    text: '#ffffff'
    border: '2px solid #ffffff'
    padding: '16px 40px'
    radius: 0
    hover: 'background #ffffff; text #0a0a0a'
  button-ghost-m:
    bg: 'transparent'
    text: '#ffffff'
    border-image: 'linear-gradient(90deg, #0066b1 0% 33%, #5b1f7a 33% 66%, #e22718 66% 100%) 2'
    padding: '16px 40px'
    radius: 0
    notes: 'Tri-stripe border ghost — used on motorsport-only sections'
  card-model:
    bg: '#161616'
    border: '1px solid rgba(255,255,255,0.08)'
    radius: 0
    padding: '32px'
    hover-bg: '#1f1f1f'
    hover-border: '1px solid #e22718'
  card-spec:
    bg: '#161616'
    radius: 0
    padding: '40px'
    layout: 'spec-number 64/900 + spec-unit 14/400 uppercase'
  hero:
    bg: '#0a0a0a + full-bleed motion-blur photo'
    text: '#ffffff'
    overlay: 'linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%)'
  m-stripe-band:
    height: 6
    bg: 'linear-gradient(90deg, #0066b1 0% 33%, #5b1f7a 33% 66%, #e22718 66% 100%)'
    notes: 'Decorative tri-stripe — used as section divider, hero underline, footer accent'
  badge-m:
    bg: '#e22718'
    text: '#ffffff'
    padding: '4px 10px'
    radius: 0
    font: '11/700 uppercase 0.1em'
  navigation:
    bg: 'rgba(10,10,10,0.85) + backdrop-filter blur(20px)'
    height: 64
    border-bottom: '1px solid rgba(255,255,255,0.08)'
    nav-link: '13/700 uppercase 0.08em #ffffff'
  input:
    bg: '#161616'
    text: '#ffffff'
    border: '1px solid rgba(255,255,255,0.24)'
    radius: 0
    padding: '12px 16px'
    focus-border: '#e22718'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-m: 'cubic-bezier(0.7, 0, 0.3, 1)'
  duration-fast: 150
  duration-standard: 300
  duration-slow: 600
  reduced-motion: 'respects prefers-reduced-motion: reduce — motion-blur stills swap to sharp images; tri-stripe sweep disables; spec counters jump to final value.'

breakpoints:
  mobile: 568
  tablet: 768
  desktop: 1024
  wide: 1440
  ultra: 1920

shadows:
  flat: 'none'
  card: 'rgba(0,0,0,0.6) 0 4px 16px'
  elevated: 'rgba(0,0,0,0.8) 0 16px 40px'
  modal: 'rgba(0,0,0,0.95) 0 32px 80px'
  glow-red: 'rgba(226,39,24,0.4) 0 0 24px'
  glow-blue: 'rgba(0,102,177,0.4) 0 0 24px'
  ring: '0 0 0 2px #e22718'

accessibility:
  contrast-text-on-bg: 18.5            # #ffffff on #0a0a0a — AAA
  contrast-body-on-bg: 13.2            # #e6e6e6 on #0a0a0a — AAA
  contrast-text-on-brand: 5.0          # #ffffff on #e22718 — AA Normal
  contrast-mblue-on-bg: 4.1            # #0066b1 on #0a0a0a — AA Large only — used decoratively
  focus-ring: '2px solid #e22718 with 2px offset'
  reduced-motion-honored: true
  touch-target-min: 48

dark-mode: 'dark-only — BMW M is the dark counterpart to BMW.com''s light corporate site. No light variant offered for the marketing surface.'
---

## 1. Visual Theme & Atmosphere

BMW M is the brand turned up — the motorsport sub-brand that lives where corporate BMW.com refuses to go: in the dark, at speed, with the M-stripe triplet deployed as full chrome. The page opens onto a **carbon-black canvas** (`#0a0a0a` — softer than pure black, with a faint warm cast) holding a 100vh full-bleed hero of an M-model captured mid-corner, brake discs glowing, motion-blur smearing the background. Above the photograph, the M model name reads in BMW Type Next at weight 900, 96px, uppercase, with negative tracking — letters compressed almost to ligature, the way a stamped metal plate reads.

The colour mood is **track-day theatre**. The corporate blue (`#1c69d4`) recedes; in its place, the **M-stripe triplet** — M-blue `#0066b1`, M-violet `#5b1f7a`, M-red `#e22718` — appears as 6px gradient bands beneath every hero, as text-fill on numerical specs, as border-image on ghost CTAs. The M-red carries every primary action: order, configure, locate. Hover states glow faint red beneath the button rather than darkening the fill. Section transitions reveal a 6px tri-stripe band that sweeps across the viewport from left to right at 600ms — the brand's signature animation.

Typography stays **BMW Type Next** but pushes harder than the corporate site dares: weight 900 for hero display (corporate sits at 700), tighter -0.02em tracking on heroes (corporate sits at 0), and a militant uppercase discipline for everything from nav links (13/700/0.08em) to button labels (14/700/0.08em) to spec units (14/400/0.08em). The body weight stays at 400 — heavier than corporate's 300, because on a dark canvas the airier 300 reads as ghostly. The result is a typographic temperament that feels stamped, military, decisive — exactly the tonal swap from corporate calm to motorsport confidence.

Photography is **always at speed**. Static studio shots disappear; in their place are panning shots with motion-blur backgrounds, low-angle corner-entry frames, brake-pad close-ups with heat shimmer, helmet-cam point-of-view stills. The site's depth comes from this kinetic photography, not from CSS shadow stacks.

**Key Characteristics:**
- Carbon-black ground (`#0a0a0a`) — softer than pure black, with a faint warm cast
- M-stripe triplet (M-blue / M-violet / M-red) deployed as gradient bands, text-fills, border-images
- M-red `#e22718` as primary CTA colour
- BMW Type Next at weights 700–900 (corporate sits at 300/700)
- Militant uppercase discipline for nav, buttons, eyebrows, spec units
- Negative tracking (-0.02em) on hero display sizes — stamped-metal compression
- Motion-blur photography at 100vh hero scale
- 6px tri-stripe section dividers that sweep left-to-right at 600ms
- 0-radius rectangles inherited from BMW corporate — no soft modernism
- Spec counters that animate from 0 → final value (0–60 mph, top speed, hp)

## 2. Color Palette & Roles

### Primary
- **M Red** (`#e22718`): Primary CTA colour — the iconic stripe red (rgb 226, 39, 24). Used for "Configure", "Order Now", "Find a Retailer". The brand's loudest voice.
- **Carbon Black** (`#0a0a0a`): Page ground (rgb 10, 10, 10) — softer than pure black, with a faint warm cast. Pure white reserved for text on this surface.

### Brand & M-Stripe
- **M Blue Light** (`#0066b1`): The first stripe — light blue, rgb 0, 102, 177. Used as text-fill on motorsport headings, gradient start, link colour.
- **M Violet** (`#5b1f7a`): The middle stripe — purple, rgb 91, 31, 122. The hardest of the three to deploy; appears in tri-stripe gradient and as accent on M Performance branding.
- **M Red** (`#e22718`): The third stripe — racing red. Coincides with primary CTA.
- **M Gradient**: `linear-gradient(90deg, #0066b1 0% 33%, #5b1f7a 33% 66%, #e22718 66% 100%)` — the canonical tri-stripe, used as section divider band, hero underline, button border-image.
- **M Blue Electric** (`#1c69d4`): The corporate blue — appears rarely on M, mostly as link hover.

### Surface
- **Carbon Black** `#0a0a0a` — page ground
- **Surface Elevated** `#161616` — card surface, raised one tonal step
- **Surface Strong** `#1f1f1f` — divider band, second tonal step
- **Surface Light** `#ffffff` — rare light sections (spec tables, fine print)
- **Surface Light Soft** `#f5f5f5` — alt light surface

### Neutrals & Text
- **Text Strong** `#ffffff` — display, headlines on dark
- **Text** `#e6e6e6` — body / paragraph on dark
- **Text Muted** `#a3a3a3` — captions, secondary
- **Text Faint** `#6b6b6b` — disabled
- **Text on Light** `#0a0a0a` — display on the rare light surface

### Borders
- **Border** `rgba(255,255,255,0.12)` — hairline on dark
- **Border Strong** `rgba(255,255,255,0.24)` — input border, emphatic divider
- **Border Light** `#e6e6e6` — for rare light surfaces
- **Border Image (M)** — the tri-stripe gradient applied as `border-image` on ghost CTAs

### Shadow & Glow
- **Shadow Soft** `rgba(0,0,0,0.6) 0 4px 16px` — card hover lift
- **Shadow Elev** `rgba(0,0,0,0.8) 0 16px 40px` — modal, mega-menu
- **Shadow Deep** `rgba(0,0,0,0.95) 0 32px 80px` — full-screen overlay
- **Glow Red** `rgba(226,39,24,0.4) 0 0 24px` — primary button hover
- **Glow Blue** `rgba(0,102,177,0.4) 0 0 24px` — selected configurator tile

### Semantic
- **Success** `#22c55e`, **Warning** `#f59e0b`, **Danger** `#e22718` (= M-red), **Info** `#0066b1` (= M-blue)

## 3. Typography Rules

### Font Family
- **Display & Body**: `"BMW Type Next Latin"` — the same family as BMW corporate, but worked harder. Weights 300, 400, 700, 900.
- **Mono**: SF Mono / Menlo — developer pages
- **OpenType features**: kern only.
- **No italics** in the marketing system.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Transform | Notes |
|------|------|------|--------|-------------|----------------|-----------|-------|
| Display Mega | Display | 96 | 900 | 0.95 | -0.02em | UPPERCASE | Hero model name (M3, M5, M8, XM) |
| Display XL | Display | 72 | 900 | 1.00 | -0.015em | UPPERCASE | Section opener |
| Display LG | Display | 56 | 700 | 1.05 | -0.01em | UPPERCASE | Module headline |
| Display MD | Display | 40 | 700 | 1.10 | 0 | UPPERCASE | Sub-section |
| Display SM | Display | 28 | 700 | 1.15 | 0 | mixed | Card header |
| Title LG | Display | 22 | 700 | 1.30 | 0 | mixed | Module title |
| Title MD | Display | 18 | 700 | 1.40 | 0 | mixed | List item title |
| Body LG | Body | 18 | 400 | 1.55 | 0 | mixed | Lead paragraph |
| Body MD | Body | 16 | 400 | 1.55 | 0 | mixed | Default paragraph |
| Body SM | Body | 14 | 400 | 1.55 | 0 | mixed | Secondary copy |
| Caption | Body | 12 | 400 | 1.40 | 0.04em | mixed | Image caption |
| Label Uppercase | Display | 12 | 700 | 1.30 | 0.16em | UPPERCASE | Section eyebrow |
| Button | Display | 14 | 700 | 1.00 | 0.08em | UPPERCASE | Primary/secondary CTA |
| Nav Link | Display | 13 | 700 | 1.40 | 0.08em | UPPERCASE | Top nav |
| Spec Number | Display | 64 | 900 | 1.00 | -0.02em | mixed | 0–60, top speed, hp digits |
| Spec Unit | Body | 14 | 400 | 1.00 | 0.08em | UPPERCASE | mph, sec, hp |
| Micro | Body | 11 | 400 | 1.40 | 0.06em | mixed | Footer fine print |
| Code | Mono | 13 | 400 | 1.50 | 0 | mixed | Dev pages |

### Principles
- **Weight 900 for hero display** — corporate sits at 700; M pushes harder.
- **Negative tracking on heroes** (-0.02em) — stamped-metal compression.
- **Militant uppercase**: nav, buttons, eyebrows, spec units, and most display copy. Lowercase appears only in body and captions.
- **Body weight 400** — heavier than corporate's 300 because dark canvas needs more presence.
- **Tracking ladder** — 0.08em on uppercase nav/buttons, 0.16em on small uppercase labels, -0.02em on heroes. Large = tight, small = loose.
- **One family discipline**: BMW Type Next handles every register, including spec counters and fine print.

## 4. Component Stylings

### Buttons
All buttons remain **0-radius rectangles** — inherited from corporate BMW.

**Primary (M Red)** — order/configure entry:
- Background `#e22718`, text `#ffffff`, font 14/700 uppercase 0.08em tracking
- Padding `16px 40px`, radius 0
- Transition `background 0.2s ease, box-shadow 0.3s ease`
- Hover background `#b81f12` plus glow `rgba(226,39,24,0.4) 0 0 24px`
- Active background `#9d1a0e`
- Use case: "Order Now", "Configure Your M", "Find a Retailer"

**Ghost Dark** — secondary on dark:
- Background transparent, text `#ffffff`, border `2px solid #ffffff`
- Padding `16px 40px`, radius 0
- Hover: background `#ffffff`, text `#0a0a0a`
- Use case: secondary action alongside primary M-red

**Ghost M-Stripe** — motorsport-only:
- Background transparent, text `#ffffff`, padding `16px 40px`, radius 0
- `border: 2px solid transparent; border-image: linear-gradient(90deg, #0066b1 0% 33%, #5b1f7a 33% 66%, #e22718 66% 100%) 2;`
- Hover: subtle inner glow blending the stripe
- Use case: motorsport stories, M-Performance landing pages

### Cards

**Model Card**:
- Background `#161616`, border `1px solid rgba(255,255,255,0.08)`, radius 0, padding `32px`
- Top: 16:9 model render with motion-blur background
- Below: model name in 28/700 uppercase, drivetrain badge, price-from line, M-red "Configure →" link
- Hover: background `#1f1f1f`, border `1px solid #e22718`, no scale, no translate

**Spec Card**:
- Background `#161616`, radius 0, padding `40px`
- Layout: spec-number `64/900` (animates 0 → final), spec-unit `14/400 uppercase` beneath
- Use case: "0–60 mph: 3.0 SEC", "TOP SPEED: 190 MPH", "POWER: 617 HP"

### Hero
- Background `#0a0a0a` + full-bleed motion-blur photograph
- Overlay `linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%)` for text legibility
- Hero text bottom-aligned, 96/900 uppercase model name + 18/400 strapline + CTA pair

### M-Stripe Band
- Height 6px, full-width
- `background: linear-gradient(90deg, #0066b1 0% 33%, #5b1f7a 33% 66%, #e22718 66% 100%)`
- Used as: section divider, hero underline (sits beneath model name), footer accent
- Animation: on viewport entry, sweep `transform: scaleX(0) → scaleX(1)` from `transform-origin: left`, 600ms

### Badges
- **M Badge**: `#e22718` background, white 11/700 uppercase 0.1em, padding `4px 10px`, radius 0
- **M Performance**: tri-stripe border-image variant
- **xDrive Badge**: white outline, transparent fill, white text

### Inputs
- Background `#161616`, text `#ffffff`, border `1px solid rgba(255,255,255,0.24)`, radius 0
- Padding `12px 16px`, font 16/400
- Focus: border `#e22718`, no glow
- Disabled: text `#6b6b6b`, border `rgba(255,255,255,0.08)`

### Navigation
- Background `rgba(10,10,10,0.85)` + `backdrop-filter: blur(20px)`
- Height 64px, border-bottom `1px solid rgba(255,255,255,0.08)`
- Logo: BMW M lockup (the BMW roundel + ////M tri-stripe glyph) in white
- Nav links 13/700 uppercase 0.08em `#ffffff`, hover colour `#e22718`
- Mega-menu opens on hover with full-width dark panel, model grid + sidebar links

### Spec Counter
- 64/900 number that animates from 0 to target on viewport entry
- Tabular numerals (`font-feature-settings: 'tnum'`) so digits don't shift width
- Spec unit beneath in 14/400 uppercase, M-blue colour for emphasis

## 5. Layout Principles

### Spacing System
- Base **8px**. Scale 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.
- Section padding 96–160px on desktop — taller than corporate.
- Card gap 24–32px.
- Button padding `16px 40px` — wider/taller than corporate, more presence.

### Grid & Container
- 12-column grid, 1440px max content width
- Hero is full-bleed (100vw, 100vh)
- Model card grid 3-up at desktop, 2-up tablet, 1-up mobile

### Whitespace Philosophy
M uses whitespace as **runway**. Sections breathe at 96–160px so each module feels like accelerating into the next. The dark canvas absorbs the void; the eye focuses entirely on the headline + photograph + CTA cluster.

### Section Cadence
- The rhythm is **dark → dark → tri-stripe band → dark → dark**
- Tri-stripe bands punctuate every two or three sections — the brand's pulse signal
- Photography → spec counters → hero quote → another model → footer
- Light bands appear only on spec tables and legal pages

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0 | Buttons, cards, inputs, modals — the M default |
| Micro | 2 | Form-error indicator |
| Standard | 4 | Tooltip — rare |
| Comfortable | 8 | Image-overlay info panel — limited |
| Pill | 9999 | Configurator dot indicator, dot pagination |

The 0-radius rectangle is inherited from corporate BMW. M holds the discipline.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | Flat | Default for cards, inputs, buttons at rest |
| 1 | `rgba(0,0,0,0.6) 0 4px 16px` | Card hover, sticky nav |
| 2 | `rgba(0,0,0,0.8) 0 16px 40px` | Mega-menu, modal |
| 3 | `rgba(0,0,0,0.95) 0 32px 80px` | Full-screen takeover overlay |
| Glow Red | `rgba(226,39,24,0.4) 0 0 24px` | Primary M button hover |
| Glow Blue | `rgba(0,102,177,0.4) 0 0 24px` | Selected configurator tile |
| Frost | `rgba(10,10,10,0.85)` + blur 20px | Sticky nav backdrop |

### Shadow Philosophy
M uses **deep neutral black shadows** (rather than coloured) for elevation, then layers **coloured glows** for state. The combination — deep black drop shadow + saturated red glow — reads as "machined steel + brake-disc heat-shimmer." Glow is reserved for interactive feedback; never decorative.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **M Smooth**: `cubic-bezier(0.7, 0, 0.3, 1)` — slightly more aggressive entry/exit, used on hero parallax and tri-stripe sweep

### Duration
- **Fast** 150ms — colour transitions
- **Standard** 300ms — card hover, opacity fades
- **Slow** 600ms — tri-stripe band sweep, hero reveals

### Per-Component Recipes
- **Primary M button**: background 0.2s + box-shadow 0.3s glow on hover
- **M-Stripe band sweep**: `transform: scaleX(0) → scaleX(1)`, origin left, 600ms M-Smooth, fires on viewport entry
- **Spec counter**: number ticks from 0 → final value over 1.5s, easing M-Smooth, on viewport entry
- **Card hover**: background `#161616 → #1f1f1f`, border `rgba(255,255,255,0.08) → #e22718`, 300ms
- **Hero parallax**: 0.7× scroll speed on photograph; disabled on prefers-reduced-motion
- **Model name reveal**: letter-by-letter opacity stagger, 30ms per letter, max 800ms total

### Page Transitions
Hard cuts on route. Configurator step transitions use opacity 200ms.

### Reduced Motion
Honoured at the CSS level: motion-blur stills swap to sharp images; tri-stripe sweep disables (renders fully on viewport entry); spec counters jump to final value; parallax disables.

## 9. Accessibility & A11y

### Contrast Pairs
- **White on Carbon Black** — `#ffffff` / `#0a0a0a` = **18.5:1** — AAA all sizes
- **Body on Carbon Black** — `#e6e6e6` / `#0a0a0a` = **13.2:1** — AAA
- **Muted on Carbon Black** — `#a3a3a3` / `#0a0a0a` = **6.8:1** — AAA body, AA Large
- **White on M-Red** — `#ffffff` / `#e22718` = **5.0:1** — AA Normal
- **M-Blue on Carbon Black** — `#0066b1` / `#0a0a0a` = **4.1:1** — AA Large only — used decoratively
- **M-Violet on Carbon Black** — `#5b1f7a` / `#0a0a0a` = **2.5:1** — fails AA — used only in gradient bands and decorative elements, never for legible text

### Focus Indicators
- Default focus is a **2px solid `#e22718` outline** with 2px offset on every interactive element
- On rare light sections, focus uses 2px solid `#0a0a0a`
- `:focus-visible` only

### ARIA & Patterns
- Mega-menu uses `aria-haspopup="menu"` and `aria-expanded`
- Spec counters expose `aria-label` with the final value (so screen readers don't read the animation)
- Configurator step uses `role="tablist"` with `aria-selected`
- Modals trap focus, label via `aria-labelledby`, dismiss on Esc

### Keyboard Nav
- Tab order: BMW M lockup → nav → utility icons → main → CTA
- Configurator: arrow keys move between trim tiles; Space selects
- Carousel: arrow keys move slides; Home/End jump to first/last

### Screen Reader Hints
- BMW M lockup uses `aria-label="BMW M motorsport homepage"`
- Model names announced as full ("BMW M3 Competition xDrive")
- Spec counters announce final value, not animation steps
- Tri-stripe band has `aria-hidden="true"` (decorative)

### Reduced Motion
Honoured (see §8).

## 10. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <568 | Single column; hamburger nav; hero text 48px; CTA stacks; model cards 1-up |
| Tablet | 568–1024 | 2-column model grid; hero 64px; nav condensed |
| Desktop | 1024–1440 | 3-column model grid; full mega-menu; hero 96px |
| Wide | 1440–1920 | Content centred at 1440 |
| Ultra | >1920 | Hero photography scales to fill; max-width preserved |

### Touch Targets
- Buttons 48×48 minimum (16×40 padding around 14px text yields ~50px height — pass)
- Nav links 44px tap area
- Configurator tiles 96×96 minimum
- Spec counters non-interactive

### Collapsing Strategy
- Nav: horizontal → hamburger drawer at <1024
- Model grid: 3 → 2 → 1
- Spec card grids: 3-up → 1-up (full-width stack)
- Hero CTA pair: side-by-side → stacked at <568
- Tri-stripe bands stay 6px high at all breakpoints

### Image Behavior
- Hero motion-blur images responsive across breakpoints, fill viewport
- `object-fit: cover` on hero
- Model PNG renders use `object-fit: contain`
- Lazy-load below the fold

### Container Queries
Not used.

## 11. Content & Voice

### Tone
**Track-day confidence, militant precision.** M writes like a race engineer briefing a driver. Sentences are short, declarative, often single-clause: "More power. More precision. More M." Vocabulary skews toward engineering: "torque vectoring," "active differential," "carbon ceramic," "sport plus mode."

### Microcopy Patterns
- **Primary CTA**: "Order Now", "Configure Your M", "Find a Retailer"
- **Secondary**: "Discover Performance", "Learn About M xDrive", "Compare M Models"
- **Spec headers**: "0–60 MPH", "TOP SPEED", "POWER", "TORQUE"
- **Form error**: "Please enter a valid email."
- **Empty state**: rare — M pages are static showcases

### CTA Verb Conventions
- **Configure** — order-flow entry
- **Discover** — exploration on technology pages
- **Experience** — for software/feature deep-dives
- **Find** — for retailer/dealer locator
- **Order** — direct-purchase variant

### Empty States
On configurator, the unselected option shows the base trim with a quiet "Select" prompt. Dark surfaces refuse empty illustrations.

## 12. Dark Mode & Theming

BMW M is **dark-only**. No light variant of the marketing surface is offered. The brand's identity is its darkness; inverting the palette would dissolve the M voice.

The only light contexts are spec tables (white surface for data legibility) and legal/compliance pages — both treated as appendices to the main dark experience.

If forced to ship a light variant of this token bundle (not recommended):
- Swap `bg #0a0a0a → #ffffff`
- Swap `text #e6e6e6 → #3c3c3c`
- Brand stays `#e22718`
- Borders shift to `#e6e6e6`
- Glow effects must darken by 50% to remain visible

## 13. Lineage & Influences

BMW M inherits from three traditions: **DTM and Le Mans race-livery design** (the M-stripe triplet originated as 1970s motorsport livery for the BMW 3.0 CSL), **military stencil typography** (uppercase, tracked, declarative — the kind of type stamped on jet fuselages), and **the BMW corporate system** (BMW Type Next, 0-radius rectangles, the same press-release rhythm). M is corporate BMW with the volume turned up — same chassis, more horsepower.

What M rejects: it rejects the cream-tinted neutrals of corporate BMW, the airy 300-weight body, the calm light photography. It rejects soft modernism (no rounded corners), automotive luxury (no chrome trim, no gold), and the tech-industry love of pastel gradients (the only gradient is the tri-stripe).

- **BMW 3.0 CSL livery (1973)** — origin of the M-stripe — https://en.wikipedia.org/wiki/BMW_3.0_CSL
- **Otl Aicher / Munich '72** — the German uppercase grid lineage — https://en.wikipedia.org/wiki/Otl_Aicher
- **DTM / Touring Car livery design** — race-paint typography
- **BMW Type Next (BMW Group / Interbrand)** — bespoke 2020 family — https://www.bmwgroup.com/

## 14. Do's and Don'ts

### Do
- Use M-red `#e22718` for every primary CTA — never substitute with corporate blue
- Set hero display at weight 900 with -0.02em tracking — the stamped-metal voice
- Hold the body weight at 400 — 300 reads ghostly on dark
- Deploy the tri-stripe band as the brand's pulse signal — every 2–3 sections
- Use motion-blur photography at 100vh — static studio shots break the kinetic mood
- Reserve the M-violet `#5b1f7a` for the tri-stripe gradient only — never stand-alone text
- Animate spec counters from 0 → final value with tabular numerals — no width jitter
- Pair primary M-red with white-outline ghost — two CTAs maximum per section
- Use uppercase for nav, buttons, eyebrows, spec units, and most display copy
- Render the BMW M lockup (roundel + ////M glyph) in white — never colour-quartered

### Don't
- Use the corporate blue `#1c69d4` as a primary CTA — that's BMW.com territory
- Add border-radius to cards or buttons — M is a sharp-rectangle brand
- Use the M-violet for stand-alone text — its contrast is too low (2.5:1 on carbon-black)
- Use static studio photography — kinetic motion-blur is the M visual signature
- Substitute decorative gradients for the tri-stripe — the tri-stripe is the only gradient
- Use lowercase nav links or buttons — uppercase discipline is non-negotiable
- Apply soft drop-shadows in light blue or pastel — shadows are deep black or red glow
- Use weight 300 for body copy on dark — it disappears
- Stack three CTAs in a section — primary + ghost is the maximum
- Render decorative chrome trim or gold — those belong to other luxury automotive brands

## 15. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: M Red `#e22718`
- Background: Carbon Black `#0a0a0a`
- Surface elevated: `#161616`
- Heading text: White `#ffffff`
- Body text: `#e6e6e6`
- Muted text: `#a3a3a3`
- M Blue (links): `#0066b1`
- M Violet (gradient only): `#5b1f7a`
- Border on dark: `rgba(255,255,255,0.12)`

### Example Component Prompts
- "Create a 100vh hero section: full-bleed motion-blur photo of an M3 mid-corner, dark gradient overlay bottom, 96/900 uppercase 'M3 COMPETITION' headline tracked at -0.02em, 18/400 strapline beneath, then a 6px tri-stripe band underline `linear-gradient(90deg, #0066b1 0% 33%, #5b1f7a 33% 66%, #e22718 66% 100%)`, then a primary M-red `#e22718` 'Configure' button + white-outline ghost 'Discover' button."
- "Design a spec card grid (3-up): each card on `#161616`, padding 40px, 0 radius. Top: 64/900 number that animates from 0 to final on viewport entry (e.g. '3.0'). Beneath: 14/400 uppercase unit ('SEC' or 'MPH' or 'HP') in M-blue."
- "Build a section divider: 6px tall, full-width, gradient `linear-gradient(90deg, #0066b1 0% 33%, #5b1f7a 33% 66%, #e22718 66% 100%)`. Animate `transform: scaleX(0) → scaleX(1)` from origin left at 600ms cubic-bezier(0.7, 0, 0.3, 1) on viewport entry."
- "Create a model card: `#161616` background, 1px `rgba(255,255,255,0.08)` border, 0 radius, 32px padding. Top: 16:9 model render. Below: 28/700 uppercase model name, 14/400 drivetrain badge, 22/700 price-from line, 14/700 uppercase M-red 'Configure →' link. Hover: background `#1f1f1f`, border M-red."
- "Make a sticky M nav: `rgba(10,10,10,0.85)` + 20px backdrop blur, BMW M lockup left (white roundel + ////M glyph), six 13/700 uppercase 0.08em nav links, hover colour M-red."
- "Design a primary M button: `#e22718` background, white 14/700 uppercase 0.08em label, padding 16×40, 0 radius. Hover: background `#b81f12` plus glow `rgba(226,39,24,0.4) 0 0 24px`."

### Iteration Guide
1. Verify the canvas is `#0a0a0a` not pure `#000000` — pure black reads brutalist; M wants warmth.
2. Confirm the hero display is weight 900 with -0.02em tracking — anything lighter loses the stamped-metal voice.
3. Check the tri-stripe gradient ratios — 33%/66%/100% with hard stops; soft transitions read as decorative rather than as livery.
4. Hold M-violet to gradient bands and decorative contexts — its contrast (2.5:1) fails legibility for text.
5. Body text must be at weight 400 minimum — 300 disappears on the dark canvas.
6. Spec counters need tabular numerals (`font-feature-settings: 'tnum'`) so digits don't shift width during animation.
7. Photography must be motion-blurred or low-angle corner-entry — static studio shots break the mood.
8. The M lockup (roundel + ////M glyph) is sacred — never recolour the M-stripe quartering.
