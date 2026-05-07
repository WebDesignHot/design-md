---
name: Ford
tagline: American-truck heritage in corporate blue — Antenna sans, oval-script wordmark, and a deep `#003478` voltage that has carried the brand since 1927.
updated_at: 2026-05-05T19:20:38+12:00
published_at: 2026-05-05T10:17:17+12:00
author: webdesignhot
source_url: https://www.ford.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [automotive, saas]
tags: [light, corporate, sans, blue, american, truck, heritage, configurator]
preview_swatch: ['#ffffff', '#003478', '#102b4e']
related: [bmw, tesla, ferrari]
description: 'Ford.com is the American-mainstream automotive face — workmanlike, photographic, blue-honest. The canvas is white, the brand voltage is the cobalt-deep **Ford Blue** (`#003478`), and the wordmark is the 1927 oval-script that every American driver recognizes. Type runs **Antenna Cond / Antenna** — a Cyrus Highsmith condensed sans for display headlines and a regular cut for body — letting trucks, SUVs, and electric models breathe through full-bleed photography. Hero bands often go dark navy (`#102b4e`) for F-150 Lightning launches or Mustang reveals, then return to white for showroom grids. The signature visual move: the **oval logo + cobalt-blue CTA + truck photography** triplet that has anchored every Ford campaign for a century.'

colors:
  bg: '#ffffff'
  bg-soft: '#f5f7fa'              # surface alternation
  bg-card: '#ffffff'
  bg-strong: '#e6ebf2'             # divider band
  bg-dark: '#102b4e'               # navy hero band — F-150 Lightning launches
  bg-dark-elev: '#1a3a64'          # navy elevated panel
  bg-deep: '#00142e'               # deep navy footer
  surface: '#ffffff'
  surface-soft: '#f5f7fa'
  surface-card: '#ffffff'
  surface-table: '#fafbfc'         # spec table band
  text: '#333333'                  # body
  text-strong: '#1a1a1a'           # body-strong
  text-ink: '#102b4e'              # ink — primary headings (signature navy)
  text-muted: '#666666'             # muted — captions, metadata
  text-faint: '#9aa3ad'             # disabled labels
  brand: '#003478'                 # Ford Blue — primary CTA, oval logo
  brand-hover: '#002757'            # primary-active — pressed
  brand-deep: '#00142e'             # deep navy — footer
  brand-light: '#0860a8'            # bright accent blue — links
  brand-disabled: '#cdd5df'        # disabled
  on-brand: '#ffffff'
  on-dark: '#ffffff'
  on-dark-soft: '#bcc6d2'
  accent-red: '#bf152c'            # Mustang / Performance accent
  accent-orange: '#f26822'         # warning / build-and-price highlight
  border: '#dde2e8'                # hairline
  border-strong: '#b6bdc7'         # input border
  border-soft: '#eceff3'           # subtle dividers
  border-on-dark: 'rgba(255,255,255,0.18)'
  link: '#0860a8'
  link-hover: '#003478'
  ring: '#003478'
  shadow-soft: 'rgba(16,43,78,0.06)'
  shadow-elev: 'rgba(16,43,78,0.12)'
  shadow-deep: 'rgba(0,20,46,0.28)'
  success: '#258636'
  warning: '#f26822'
  danger: '#bf152c'
  info: '#0860a8'

typography:
  display:
    family: '"FordF1", "Antenna Cond", "Antenna", "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 700, 900]
    opentype-features: ['kern', 'liga']
  body:
    family: '"FordF1", "Antenna", "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 700]
    opentype-features: ['kern', 'liga']
  mono:
    family: 'SF Mono, Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-hero:      { size: 72, weight: 700, lineHeight: 1.04, tracking: '-0.01em', family: display, notes: 'Homepage hero — Mustang / F-150 Lightning name' }
    display-xl:        { size: 56, weight: 700, lineHeight: 1.08, tracking: '-0.005em', family: display, notes: 'Subsidiary hero' }
    display-lg:        { size: 40, weight: 700, lineHeight: 1.12, tracking: '0', family: display, notes: 'Section opener' }
    display-md:        { size: 32, weight: 700, lineHeight: 1.16, tracking: '0', family: display }
    display-sm:        { size: 24, weight: 700, lineHeight: 1.25, tracking: '0', family: display }
    title-lg:          { size: 20, weight: 700, lineHeight: 1.30, tracking: '0', family: display }
    title-md:          { size: 18, weight: 700, lineHeight: 1.40, tracking: '0', family: display }
    title-sm:          { size: 16, weight: 700, lineHeight: 1.40, tracking: '0', family: display }
    body-lg:           { size: 18, weight: 400, lineHeight: 1.55, tracking: '0', family: body, notes: 'Lead paragraph' }
    body-md:           { size: 16, weight: 400, lineHeight: 1.55, tracking: '0', family: body, notes: 'Default paragraph' }
    body-sm:           { size: 14, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
    caption:           { size: 12, weight: 400, lineHeight: 1.40, tracking: '0.04em', family: body }
    label-uppercase:   { size: 13, weight: 700, lineHeight: 1.30, tracking: '0.10em', family: display, notes: 'Section eyebrow — uppercase' }
    button:            { size: 14, weight: 700, lineHeight: 1.00, tracking: '0.06em', family: display }
    nav-link:          { size: 14, weight: 500, lineHeight: 1.40, tracking: '0.02em', family: body }
    micro:             { size: 11, weight: 400, lineHeight: 1.40, tracking: '0.05em', family: body }
    code:              { size: 13, weight: 400, lineHeight: 1.50, tracking: '0', family: mono }

radius:
  none: 0
  xs: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  pill: 9999

spacing:
  base: 8
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160]

layout:
  page-width: 1440
  prose-width: 760
  header-height: 72
  hero-height: 88vh

components:
  button-primary:
    bg: '#003478'
    text: '#ffffff'
    padding: '14px 32px'
    radius: 9999
    font: 'FordF1 14/700 uppercase 0.06em tracking'
    transition: 'background 0.2s ease'
    hover: '#002757'
  button-ghost:
    bg: 'transparent'
    text: '#102b4e'
    padding: '14px 32px'
    radius: 9999
    border: '1px solid #102b4e'
    font: 'FordF1 14/700 uppercase'
  button-on-dark:
    bg: 'transparent'
    text: '#ffffff'
    border: '1px solid #ffffff'
    padding: '14px 32px'
    radius: 9999
  button-text-link:
    bg: 'transparent'
    text: '#0860a8'
    font: 'FordF1 14/700 uppercase with arrow ›'
  card-vehicle:
    bg: '#ffffff'
    radius: 8
    padding: '24px'
    border: '1px solid #dde2e8'
    image-position: 'top, full-width 16:9 PNG render'
    title: '24/700 FordF1'
    cta: '"Build & Price" → 14/700 uppercase #003478'
  card-feature:
    bg: '#f5f7fa'
    border: 'none'
    padding: '32px'
    radius: 12
  hero-band-dark:
    bg: '#102b4e'
    text: '#ffffff'
    notes: 'Used for F-150 Lightning launches, Mustang reveals, performance stories'
  config-tile:
    bg: '#ffffff'
    border: '1px solid #dde2e8'
    radius: 8
    padding: '16px 20px'
    selected-border: '2px solid #003478'
  badge:
    bg: '#e6ebf2'
    text: '#102b4e'
    padding: '4px 12px'
    font: '11/700 uppercase 0.1em'
    radius: 9999
  badge-electric:
    bg: '#003478'
    text: '#ffffff'
    padding: '4px 12px'
    font: '11/700 uppercase 0.1em'
    radius: 9999
  navigation:
    bg: '#ffffff'
    height: 72
    border-bottom: '1px solid #dde2e8'
    nav-link: '14/500 #102b4e'
    logo: 'Ford oval — 96×40, vertically centred, blue on white or white on blue'
  input:
    bg: '#ffffff'
    border: '1px solid #b6bdc7'
    radius: 4
    padding: '12px 16px'
    font: 'FordF1 16/400'
    focus-border: '#003478'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 250
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — hero parallax disables, video autoplay pauses, only opacity transitions remain.'

breakpoints:
  mobile: 600
  tablet: 768
  desktop: 1024
  wide: 1440
  ultra: 1920

shadows:
  flat: 'none'
  card: 'rgba(16,43,78,0.06) 0 2px 6px'
  elevated: 'rgba(16,43,78,0.12) 0 8px 24px'
  modal: 'rgba(0,20,46,0.28) 0 24px 64px'
  ring: '0 0 0 2px #003478'

accessibility:
  contrast-text-on-bg: 13.4          # #102b4e on #ffffff — AAA
  contrast-body-on-bg: 11.0          # #333333 on #ffffff — AAA
  contrast-text-on-brand: 11.0       # #ffffff on #003478 — AAA
  contrast-on-dark-bg: 14.5          # #ffffff on #102b4e — AAA
  focus-ring: '2px solid #003478 with 2px offset'
  reduced-motion-honored: true
  touch-target-min: 44

dark-mode: 'partial — navy hero bands (#102b4e) appear as accents within otherwise light pages; full dark variant not shipped on Ford.com. SYNC and FordPass run dark by default.'
---

## 1. Visual Theme & Atmosphere

Ford.com is the American-mainstream automotive face — workmanlike, photographic, blue-honest. The page opens onto a white canvas with the **Ford oval** anchored top-left in its 1927 cobalt-blue script form, and an immediate full-bleed photograph of an F-150, Mustang, or Bronco in environmental light: dawn fog over a pickup bed, daylight on the Mustang's haunches, a Bronco silhouetted on red rock. There is no editorial pretense here — Ford does not pretend to be a luxury brand. It is the brand that built the American highway, and the marketing surface owns that lineage with comfortable, unironic authority.

The colour mood is **cobalt-blue and chrome**. Ford's signature voltage — the deep `#003478` that has appeared on the oval since 1927 — carries every primary CTA, every selected state, every link. Surrounding it, a near-monochrome neutral system in slightly cool whites (`#ffffff` / `#f5f7fa` / `#e6ebf2`) provides the ground. Where European luxury brands like BMW commit to dawn-grey environmental light, Ford commits to **noon clarity**: photography is bright, contrasty, and honest about the product. The dark band (`#102b4e`) appears for F-150 Lightning launches, Mustang Mach-E reveals, and performance stories — moments where the brand wants to dramatize a launch.

Typography is **Antenna** — Cyrus Highsmith's Font Bureau family designed in 2007 specifically for Ford, now superseded internally by **FordF1** (a 2021 evolution). Display sets at weight 700 with negative tracking on hero sizes; body sits at 400, no airy 300, no monumental 900. The result is **plainspoken** — Ford does not whisper, it speaks plainly. Headlines like "Built Ford Tough", "F-150 Lightning", or "Mustang Mach-E" land at 56–72px with `-0.005em` to `-0.01em` tracking — confident, but never delicate. The brand uses uppercase for section eyebrows and CTA labels, with 0.06–0.10em tracking lending the labels a rugged, almost industrial signage feel.

The signature visual move is the **oval + cobalt CTA + truck photography** triplet. Every campaign — F-150, Mustang, Bronco, E-Transit — anchors itself with the oval logo top-left, a `#003478` Build & Price CTA top-right or hero-bottom-right, and a full-bleed photograph of the vehicle in its element. The CTA is **rounded-pill**, not sharp — a notable difference from German automotive brands. Ford reads as American-friendly, not Bavarian-precise.

Motion is restrained but visible: a gentle parallax on hero photography, fade-in-on-scroll for content blocks, video autoplay with audio-off on Bronco/Mustang launch pages. The brand uses motion to communicate **truck-tough capability**, not tech-industry futurism.

**Key Characteristics:**
- White canvas (`#ffffff`) with cool-grey neutrals and navy (`#102b4e`) hero bands for launches
- Ford Blue (`#003478`) — the 1927 cobalt — as the singular primary voltage
- Antenna / FordF1 sans family, two-weight discipline (400 body, 700 display)
- **Pill-radius CTAs** (9999px) — distinctly American, distinctly Ford, distinguishing from German rectangular CTAs
- Full-bleed truck/SUV/Mustang photography in noon-clarity environmental light
- Uppercase section eyebrows at 13/700/0.10em — consistent with American truck-brochure heritage
- The Ford oval is the only logomark — never substituted with a wordmark
- Generous 96–128px section padding, 12-column grid, 1440 max-width
- Mustang red `#bf152c` reserved for performance/Mustang content — never decorative
- Build & Price flow as the primary conversion verb (never "Configure", which is Bavarian)

## 2. Color Palette & Roles

### Primary
- **Ford Blue** (`#003478`): The cobalt-deep brand blue, present on the oval since 1927 (rgb 0, 52, 120). Mid-low saturation, very deep. Appears on every primary CTA, every selected state, every link, and the oval itself.
- **Pure White** (`#ffffff`): Page canvas, card surface, default ground.

### Brand & Dark
- **Surface Dark** (`#102b4e`): Navy hero band for F-150 Lightning, Mustang reveals, performance stories.
- **Surface Dark Elevated** (`#1a3a64`): Cards, panels on the navy band.
- **Deep Navy** (`#00142e`): Footer ground — the deepest the page gets.
- **Ford Oval**: Always rendered in `#003478` blue with white-script "Ford" lettering, or inverted (white oval with blue script) on dark surfaces.

### Accent
- **Mustang Red** (`#bf152c`): Reserved for Mustang content, Performance trim badges, and the Mustang Mach-E "Performance" variant. Never decorative.
- **Orange** (`#f26822`): Build-and-price highlight, expiring offer, warning indicator. Sub-brand only.
- **Bright Blue** (`#0860a8`): Inline link colour — slightly lighter than Ford Blue for legibility on white at body sizes.

### Interactive
- **Link** `#0860a8` — body-text inline links
- **Link Hover** `#003478` — deepens to brand on hover
- **Disabled** `#cdd5df` — desaturated grey-blue
- **Focus** — 2px `#003478` outline with 2px offset

### Neutral Scale
- **Ink** `#102b4e` — primary headings (signature navy, not pure black)
- **Body Strong** `#1a1a1a` — emphatic body
- **Body** `#333333` — paragraph default
- **Muted** `#666666` — captions, metadata
- **Faint** `#9aa3ad` — disabled labels
- **Hairline Strong** `#b6bdc7` — input borders
- **Hairline** `#dde2e8` — divider
- **Surface Strong** `#e6ebf2` — divider band
- **Surface Soft** `#f5f7fa` — section alternation
- **Canvas** `#ffffff`

### Surface & Borders
- Light surface tiers cascade `#ffffff` → `#fafbfc` → `#f5f7fa` → `#e6ebf2`
- Dark tiers cascade `#102b4e` → `#1a3a64` → `#00142e` (deepest)
- Borders are always 1px solid; never dashed.
- Cards lean on background tonal contrast and 1px hairlines, with optional soft shadows on lifted cards.

### Shadow Colors
Ford uses **navy-tinted black** at low opacity:
- **Card** `rgba(16,43,78,0.06) 0 2px 6px`
- **Elevated** `rgba(16,43,78,0.12) 0 8px 24px`
- **Modal** `rgba(0,20,46,0.28) 0 24px 64px`

The blue-tinted shadow signature is subtle but distinct — black-on-black would feel too European-luxury; warm-brown would feel rustic.

### Semantic
- **Success** `#258636` — confirmation, "in stock"
- **Warning** `#f26822` — orange — limited offer, near-cutoff alert
- **Danger** `#bf152c` — error, recall notice (also Mustang red)
- **Info** `#0860a8` — informational badges

## 3. Typography Rules

### Font Family
- **Display & Body**: `"FordF1"` — Ford's 2021 corporate evolution of Antenna. Falls back to **Antenna** (Cyrus Highsmith / Font Bureau, 2007), then `Helvetica Neue, Arial, sans-serif`. Weights 300, 400, 500, 700, 900.
- **Antenna heritage**: Cyrus Highsmith designed Antenna for Ford in 2007 — a slightly condensed humanist sans with strong hooks on `a`, `g`, `e`. FordF1 inherits the proportions but tightens the kerning and adjusts for digital rendering.
- **Fallback chain**: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`
- **Mono**: SF Mono / Menlo — used only on FordPass developer documentation
- **OpenType features**: kern, liga (default ligatures only). No `ss01`/`ss02` exposed in marketing.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT | Notes |
|------|------|------|--------|-------------|----------------|----|-------|
| Display Hero | Display | 72 | 700 | 1.04 | -0.01em | kern, liga | Homepage hero — model name |
| Display XL | Display | 56 | 700 | 1.08 | -0.005em | kern, liga | Subsidiary hero |
| Display LG | Display | 40 | 700 | 1.12 | 0 | kern, liga | Section opener |
| Display MD | Display | 32 | 700 | 1.16 | 0 | kern, liga | Sub-section |
| Display SM | Display | 24 | 700 | 1.25 | 0 | kern, liga | Card header |
| Title LG | Display | 20 | 700 | 1.30 | 0 | kern, liga | Module title |
| Title MD | Display | 18 | 700 | 1.40 | 0 | kern, liga | List item title |
| Title SM | Display | 16 | 700 | 1.40 | 0 | kern, liga | Compact label |
| Body LG | Body | 18 | 400 | 1.55 | 0 | kern, liga | Lead paragraph |
| Body MD | Body | 16 | 400 | 1.55 | 0 | kern, liga | Default paragraph |
| Body SM | Body | 14 | 400 | 1.55 | 0 | kern, liga | Secondary copy |
| Caption | Body | 12 | 400 | 1.40 | 0.04em | kern, liga | Image captions |
| Label Uppercase | Display | 13 | 700 | 1.30 | 0.10em | kern, liga | Section eyebrow — UPPERCASE |
| Button | Display | 14 | 700 | 1.00 | 0.06em | kern, liga | CTA label — UPPERCASE |
| Nav Link | Body | 14 | 500 | 1.40 | 0.02em | kern, liga | Top-level nav |
| Micro | Body | 11 | 400 | 1.40 | 0.05em | kern, liga | Footer fine print |
| Code | Mono | 13 | 400 | 1.50 | 0 | — | Developer docs only |

### Principles
- **Antenna's humanist hooks are the brand's typographic DNA.** The slight condensation gives Ford a more upright, less generic look than pure-Helvetica brands.
- **Two-weight workhorse: 400 body, 700 display.** Weights 300 and 900 exist in the family but are reserved for press releases and centennial campaigns — not the marketing default.
- **Negative tracking on display sizes.** -0.005em to -0.01em on hero copy gives the headline a confident American-bulletin feel without the tightness of Tesla's Gotham-tracked extremes.
- **Uppercase section eyebrows** with 0.10em tracking — descended from American truck-brochure print tradition.
- **CTA labels in uppercase**, 0.06em tracking — the rugged signage feel.
- **Body never tracks.** Paragraph copy sits at 0 tracking for legibility.
- **No italic in display.** Italic appears only inside press-release datelines.

## 4. Component Stylings

### Buttons
Ford CTAs are **pill-radius** (9999px) — a deliberate American-friendly geometry distinct from BMW/Audi rectangles. The pill geometry traces back to print-era catalogue badges and feels native to the truck-brand voice.

**Primary CTA** — the cobalt-blue pill:
- Background `#003478`, text `#ffffff`, font 14/700 uppercase, `0.06em` tracking
- Padding `14px 32px`, radius `9999`, no border
- Transition `background 0.2s ease`
- Hover background `#002757`
- Disabled background `#cdd5df`, text `#9aa3ad`
- Use case: Build & Price, Find a Dealer, Schedule Test Drive, View Inventory

**Ghost (Light)** — secondary on light surfaces:
- Background transparent, text `#102b4e`, border `1px solid #102b4e`
- Same padding/typography as primary, pill radius
- Hover: text `#003478`, border `#003478`, slight bg tint `#f5f7fa`
- Use case: Compare Models, View Specs (secondary alongside primary)

**On-Dark Ghost** — secondary on navy hero band:
- Background transparent, text `#ffffff`, border `1px solid #ffffff`
- Hover: background `rgba(255,255,255,0.1)`

**Text Link with Chevron** — inline action:
- Text `#0860a8`, font 14/700 uppercase with arrow glyph `›`
- No underline at rest; hover adds underline + colour deepens to `#003478`
- Use case: "Learn More", "View Inventory", "See All Models"

### Cards

**Vehicle Card** — the showroom workhorse:
- Background `#ffffff`, border `1px solid #dde2e8`, radius 8
- Padding `24px`
- Top: 16:9 transparent-PNG model render
- Below image: trim badge (Lightning / ST / Tremor), model name in 24/700, starting MSRP, Build & Price CTA
- Hover: card lifts 2px with `rgba(16,43,78,0.06) 0 8px 24px` shadow

**Feature Card** — for technology callouts (BlueCruise, SYNC, Pro Power Onboard):
- Background `#f5f7fa`, no border, radius 12
- Padding `32px`
- Used in 3-up grids on technology pages

**Hero Band Card** (dark):
- Sits inside a `#102b4e` band
- Background `#1a3a64`, text white, border `1px solid rgba(255,255,255,0.18)`
- Padding `48px`, radius 12

### Configurator Tile
- Background `#ffffff`, border `1px solid #dde2e8`, radius 8, padding `16px 20px`
- Selected: border `2px solid #003478` with subtle inner glow
- Used for trim/colour/wheel/package selection
- Mobile-first: tiles stack into a vertical accordion below 768px

### Badges

**Standard Badge**:
- Background `#e6ebf2`, text `#102b4e`
- Font 11/700 uppercase `0.1em`
- Padding `4px 12px`, radius 9999 (pill)

**Electric Badge** — for EV models:
- Background `#003478`, text `#ffffff`
- Same typography & geometry

**Performance Badge** — for ST / Raptor / Mustang:
- Background `#bf152c`, text `#ffffff`

### Inputs
- Background `#ffffff`, border `1px solid #b6bdc7`, radius 4
- Padding `12px 16px`, font 16/400
- Focus border `#003478`, no shadow, 2px ring offset
- Floating label pattern: label inside on rest, animates to top on focus/value
- Error: border `#bf152c`, helper text `#bf152c` 13/400 below

### Navigation
- White background, 72px height, 1px bottom border `#dde2e8`
- Ford oval 96×40 at far left
- Primary nav links (Vehicles / Hybrid & EV / Shop / Owners / Finance) 14/500 with `0.02em` tracking, `#102b4e`
- Hover: text `#003478`, no background change
- Mega-menu opens on hover: full-width white panel, 5-column model grid (Cars / SUVs / Trucks / Vans / Commercial)
- Sticky on scroll with subtle shadow `rgba(16,43,78,0.06) 0 2px 6px`

### Tooltips & Toasts
- Tooltip: `#102b4e` background, white text 12/400, padding `8px 12px`, radius 4, no arrow
- Toast: `#102b4e` background, white text, fixed bottom-right, slide-in 300ms

### Modal
- Overlay `rgba(0,20,46,0.6)`
- Dialog `#ffffff`, radius 12, padding `48px`, max-width 720
- Close icon top-right, no border on dialog itself

### Tabs (Specs Pages)
- Underline tabs, 14/500, `#666666` inactive, `#003478` active with 2px bottom border
- Used on F-150 specs page (Engine / Towing / Payload / Cabin)

## 5. Layout Principles

### Spacing System
- Base **8px**. Scale 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.
- Section padding 96–128px on desktop, 64–96px on tablet, 48–64px on mobile.
- Card gap 24–32px in grids.
- Button padding `14px 32px` — wide horizontal padding gives the pill its truck-brochure weight.

### Grid & Container
- 12-column grid, 1440px max content width, 24px gutters
- Hero is full-bleed (100vw, 88vh)
- Vehicle card grid is 4-up at desktop, 2-up tablet, 1-up mobile
- Press-release prose width 760px

### Whitespace Philosophy
Ford uses whitespace as **product-display whitespace** — the spacing serves the truck/SUV photograph at the centre of every section. Sections breathe at 96–128px so the hero photograph dominates, and surrounding copy reads as supporting caption rather than competing voice. The brand does not chase European editorial pacing; instead it commits to **catalogue density** — confidently showing you the product.

### Section Cadence
- The brand rhythm is **white → grey-soft → white → navy → white → deep-navy footer**
- Hero (white or navy) → vehicle grid (white) → feature row (grey-soft) → spec table (white) → CTA band (navy) → footer (deep navy)
- Every navy band carries a single hero photograph and a CTA pair (primary + ghost-on-dark)

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0 | Tables, dividers, image edges |
| Micro | 2 | Form-error indicator |
| Standard | 4 | Inputs, small tiles |
| Comfortable | 8 | Vehicle cards, configurator tiles |
| Relaxed | 12 | Feature cards, modals, hero panels |
| Featured | 16 | Showcase image vignettes (rare) |
| Pill | 9999 | **All buttons + badges — Ford's signature** |

The **pill button** is doctrinal. It distinguishes Ford from German rectangular brands and signals American-friendly approachability. Cards use 8–12px — comfortable but not soft.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | Flat | Default state for cards, inputs, buttons |
| 1 | `rgba(16,43,78,0.06) 0 2px 6px` | Sticky nav on scroll, light card hover |
| 2 | `rgba(16,43,78,0.12) 0 8px 24px` | Vehicle card hover, mega-menu overlay |
| 3 | `rgba(0,20,46,0.28) 0 24px 64px` | Modal dialogs, dealer-locator popovers |
| 4 | Frost — `rgba(255,255,255,0.92)` + blur 12px | Image-overlay info panel on hero photography |
| 5 | Inner glow — `inset 0 0 0 2px #003478` | Selected configurator tile |

### Shadow Philosophy
Ford uses **navy-tinted black** shadows — a subtle blue undertone (`rgba(16,43,78,...)`) rather than pure black. The tint communicates the brand's chromatic loyalty without overwhelming the photograph. Cards lift on hover; flat-default-with-hover-lift is the brand's depth grammar.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style for most transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — slightly slower entry, used on hero parallax and Bronco/Mustang launch sections
- **Spring/bounce**: never. Ford refuses overshoot — the brand voice is plainspoken, not playful.

### Duration
- **Fast** 150ms — colour transitions on hover
- **Standard** 250ms — opacity fades, mega-menu reveal
- **Slow** 400ms — hero parallax, video poster fades

### Per-Component Recipes
- **Primary button hover**: `background 0.2s ease`. No lift, no scale.
- **Vehicle card hover**: card lifts 2px translateY + shadow intensify 250ms
- **Mega-menu reveal**: opacity + 8px translateY 250ms emphasized ease
- **Hero parallax**: image scrolls at 0.7× speed of viewport; disabled on prefers-reduced-motion
- **Configurator tile select**: border weight + colour transition 200ms standard ease
- **Text link underline grow**: `transform: scaleX` on a 2px pseudo-element, origin left, 200ms

### Page Transitions
Hard cuts on route change. Configurator step transitions use opacity 250ms. Build-and-price flow uses a slide-left transition between steps (mobile only).

### Reduced Motion
Honoured at the CSS level: parallax disables; video autoplay pauses; carousel auto-advance pauses; opacity-only transitions remain. Configurator step animations collapse to 0ms.

## 9. Accessibility & A11y

### Contrast Pairs
- **Ink on White** — `#102b4e` / `#ffffff` = **13.4:1** — AAA all sizes
- **Body on White** — `#333333` / `#ffffff` = **11.0:1** — AAA
- **Muted on White** — `#666666` / `#ffffff` = **5.6:1** — AA Normal
- **White on Ford Blue** — `#ffffff` / `#003478` = **11.0:1** — AAA
- **White on Dark Surface** — `#ffffff` / `#102b4e` = **14.5:1** — AAA
- **Link on White** — `#0860a8` / `#ffffff` = **6.7:1** — AAA Large, AA Normal
- **Disabled** — `#9aa3ad` / `#ffffff` = **2.8:1** — fails AA Normal, used only for disabled states

### Focus Indicators
- 2px solid `#003478` outline with 2px offset on every interactive element
- On dark bands, focus uses 2px solid white with 2px offset
- `:focus-visible` only — not on mouse click

### ARIA & Patterns
- Mega-menu uses `aria-haspopup="menu"` and `aria-expanded`
- Configurator step uses `role="tablist"` with `aria-selected` on the active step
- Modal dialogs trap focus, label via `aria-labelledby`, dismiss on Esc
- Vehicle filter uses `role="region"` with `aria-label="Filter inventory"`

### Keyboard Nav
- Tab order: Ford oval → primary nav → utility (account, cart, locator) → main content → CTA
- Configurator: arrow keys move between trim tiles; Space selects
- Carousel: arrow keys move slides; Home/End jump to first/last

### Screen Reader Hints
- Ford oval uses `aria-label="Ford homepage"`
- Model names announced as full ("Ford F-150 Lightning Lariat") not abbreviated
- MSRP includes currency: "Starting at thirty-nine thousand nine hundred seventy-four dollars"
- Spec tables use proper `<th scope="col">` and `<th scope="row">` semantics

### Reduced Motion
Honoured (see §8).

## 10. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600 | Single column; hamburger nav; hero text 32px; CTA stacks; vehicle cards 1-up |
| Tablet | 600–1024 | 2-column vehicle grid; hero 48px; nav stays horizontal but condensed |
| Desktop | 1024–1440 | 4-column vehicle grid; full mega-menu; hero 56–72px |
| Wide | 1440–1920 | Content centred at 1440 max-width |
| Ultra | >1920 | Hero photography scales to fill; max-width preserved |

### Touch Targets
- Buttons 48×48 minimum (14×32 padding around 14px text yields ~48px height — pass)
- Nav links 44px tap area
- Configurator tiles 64×64 minimum, expanded to 96×96 on selected

### Collapsing Strategy
- Nav: horizontal → hamburger drawer at <1024
- Vehicle grid: 4 → 2 → 1
- Spec tables: horizontal scroll on mobile rather than stacking
- Hero CTA pair: side-by-side → stacked at <600

### Image Behavior
- Hero images responsive across breakpoints, fill viewport
- `object-fit: cover` on hero, `object-fit: contain` on transparent-PNG model renders
- Lazy-load below the fold
- WebP preferred with JPEG fallback

### Container Queries
Used selectively on the configurator panel (which can render at multiple widths within a sticky right-rail).

## 11. Content & Voice

### Tone
**Plainspoken, confident, American-truck-brochure direct.** Ford writes like a salesperson who built the product themselves. Sentences are declarative: "Built Ford Tough." "Power your tools and your home." "F-150 Lightning. Charge ahead." The voice is neither poetic nor playful — it is plainly capable.

### Microcopy Patterns
- **Primary CTA**: "Build & Price", "Find a Dealer", "Schedule Test Drive", "View Inventory"
- **Secondary**: "Compare Models", "View Specs", "Learn More"
- **Form error**: "Please enter a valid ZIP code."
- **Empty state**: "No vehicles match your filters. Try expanding your search radius."
- **Confirmation**: "Your build has been saved. We'll email you the summary."

### CTA Verb Conventions
- **Build & Price** — the configurator entry verb (never "Configure", which is German-luxury)
- **Find a Dealer** — locator verb, never "Retailer Locator"
- **Schedule** — for test drive, service appointment
- **Shop** — for inventory browsing
- **View** — for inventory results, specs, details

### Empty States
On the configurator, an unselected option shows the base trim with a quiet "Customize" prompt. Inventory filter empty states suggest expanding ZIP radius rather than showing illustrations.

### Headline Voice
Headlines lean on **adjective-noun pairs**: "Built Ford Tough", "Pro Power Onboard", "Mustang Mach-E". Sub-heads use **plainspoken capability claims**: "Tow up to 14,000 lbs.", "Up to 320 miles of EPA-est. range".

## 12. Dark Mode & Theming

Ford.com is **partial-dark**: navy hero bands (`#102b4e`) appear within otherwise light pages, and the deep-navy footer (`#00142e`) anchors every page. The site does not ship a full page-level dark variant. **SYNC** (the in-vehicle infotainment) and **FordPass** (the mobile app) run dark by default with the same token bundle inverted.

If implementing a dark variant:
- Swap `bg #ffffff → #102b4e`
- Swap `bg-soft #f5f7fa → #1a3a64`
- Swap `text-ink #102b4e → #ffffff`
- Swap `text #333333 → #d6dce4`
- Brand stays `#003478` but with a slightly brightened `#0a4a96` for contrast
- Borders shift to `rgba(255,255,255,0.18)`
- Card surface becomes `#1a3a64`

## 13. Lineage & Influences

Ford.com inherits from three traditions: **American truck-catalogue print design** of the 1950s–80s (model name + capability claim + product photo), **Chrysler/GM mainstream automotive web** of the early 2000s (build-and-price flows, MSRP transparency), and **Apple's product-page idiom** (full-bleed photography + minimal chrome) — adapted for mainstream rather than luxury. Antenna by Cyrus Highsmith was bespoke commissioned in 2007 to give the brand a typographic identity that wasn't Helvetica or Univers — a slightly condensed humanist sans that reads as American without the cliché of cowboy slab-serifs.

What Ford rejects: it rejects the soft-modernist roundedness of Mercedes (12px+ radii, gradients, gold accents), the dramatic minimalism of Tesla (no logos, monochrome, refusal of CTAs), the Bavarian sharp-rectangle of BMW (0-radius CTAs), and the editorial-luxury pretense of Ferrari (cinematic dark canvas, scarce CTAs). Ford commits to **mainstream-American legibility**: every CTA is a pill, every hero is a truck, every section has an eyebrow, every page ends with a navy CTA band.

- **Cyrus Highsmith / Font Bureau** — Antenna, 2007, bespoke for Ford — https://fontbureau.com/
- **American truck-catalogue print tradition** — 1950s–80s — model + capability + photo
- **Otl Aicher / Munich '72 system** — uppercase eyebrows, grid discipline (broadly influential)
- **Apple product pages** — full-bleed photography idiom — https://apple.com
- **Ford 1927 oval-script wordmark** — the centennial logomark — https://www.ford.com/

## 14. Do's and Don'ts

### Do
- Use Ford Blue `#003478` for every primary CTA — never substitute
- Set body type at weight 400 — the Antenna/FordF1 default
- Set display type at weight 700 — the brand's monumental weight
- Open every section with a 13/700 uppercase eyebrow at 0.10em tracking
- Use **pill-radius (9999) buttons** — the Ford signature, distinguishing from German rectangles
- Reserve the navy band (`#102b4e`) for F-150 Lightning, Mustang, performance launches
- Trust Mustang red `#bf152c` only inside Mustang/Performance content
- Use full-bleed truck/SUV photography in noon-clarity environmental light
- Pair every primary CTA with a ghost secondary at most — never three CTAs
- Render the Ford oval in cobalt-on-white or white-on-cobalt — never monochrome black
- Use "Build & Price" as the configurator entry verb — never "Configure"

### Don't
- Use rectangular CTAs — the pill is non-negotiable for Ford
- Use weight 300 for body — Antenna at 300 reads as European-luxury, not Ford
- Use sans-serif other than FordF1/Antenna in marketing — system Helvetica is acceptable fallback only
- Apply Mustang red `#bf152c` outside Mustang/Performance content — the red is sacred to that sub-brand
- Substitute the Ford oval with a wordmark — the oval is the only logomark
- Use uppercase headlines — uppercase is reserved for 13px eyebrows and 14px CTAs only
- Apply heavy drop-shadow with pure black — Ford's shadows are navy-tinted
- Use italic in body or display — italic is press-release dateline only
- Mix orange `#f26822` with red `#bf152c` in the same module — they belong to different layers
- Use "Customize" — the configurator entry verb is "Build & Price"
- Show vehicles in studio-white photography only — Ford photography is environmental (terrain, weather, light)

## 15. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Ford Blue `#003478`
- Background: White `#ffffff`
- Heading text: Ink Navy `#102b4e`
- Body text: `#333333`
- Muted text: `#666666`
- Dark surface: `#102b4e`
- Deep navy footer: `#00142e`
- Hairline border: `#dde2e8`
- Mustang red (Performance only): `#bf152c`
- Bright link blue: `#0860a8`

### Example Component Prompts
- "Create a Ford hero section with full-bleed F-150 Lightning photography (16:9), a 72px FordF1 700 model name on the bottom-left, a 13px uppercase eyebrow ('ALL-ELECTRIC F-150') above it tracked at 0.10em in `#003478`, and a primary `#003478` pill 'Build & Price' button + ghost 'Find a Dealer' button — both 14/700 uppercase, pill-radius 9999."
- "Design a 4-up vehicle card grid where each card sits on `#ffffff` with a 1px `#dde2e8` border at 8px radius, holds a 16:9 transparent-PNG vehicle render at top, then an Electric/Performance pill badge, a 24/700 model name, a starting MSRP, and a 14/700 uppercase blue 'Build & Price ›' link. Hover lifts card 2px with navy-tinted shadow."
- "Build a navy launch band: background `#102b4e`, white 56/700 headline ('Built to Lead the Charge'), 18/400 body lead in `#bcc6d2`, white-pill ghost CTA. 96px vertical padding."
- "Create a configurator step with a 4-up tile grid; each tile is white with a 1px `#dde2e8` border at 8px radius, 16×20 padding. Selected state: border 2px `#003478` with subtle inner glow."
- "Design a Ford uppercase eyebrow component: 13px FordF1 700, letter-spacing 0.10em, color `#003478`, sits above every section headline with 16px bottom margin."
- "Make a sticky white nav with the Ford oval (96×40 cobalt-on-white) at far left, five 14/500 nav links centre (Vehicles / Hybrid & EV / Shop / Owners / Finance), three utility icons right, 72px height, 1px bottom border `#dde2e8`, opens a full-width 5-column mega-menu on hover."

### Iteration Guide
1. Verify the pill-radius CTA — if a button is rectangular, the brand reads as German, not American.
2. Check the cobalt-blue `#003478` is on every primary CTA, link, and the oval — never substitute.
3. Confirm body type is at weight 400 — weight 300 drifts into European luxury territory.
4. Ensure section eyebrows are uppercase 13/700 at 0.10em — descended from American truck-brochure tradition.
5. Hold Mustang red `#bf152c` for Mustang/Performance content only — using it on an F-150 page misreads the brand.
6. Photography should be **environmental** — terrain, weather, daylight — not studio-isolated. Studio shots read as Tesla-minimal, not Ford.
7. Use "Build & Price" as the configurator verb — "Configure" is German, "Customize" is consumer-electronics, "Build & Price" is Ford.
8. The deep-navy footer (`#00142e`) anchors every page — this is the brand's typographic ground.
