---
name: BMW
tagline: Corporate-blue calm — BMW Type Next on a cream-tinted white, dark navy hero bands, and the M-stripe triplet in reserve.
updated_at: 2026-05-05T19:20:38+12:00
published_at: 2026-05-03T20:43:35+12:00
author: webdesignhot
source_url: https://www.bmw.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [automotive, saas]
tags: [light, corporate, sans, blue, configurator, photography]
preview_swatch: ['#ffffff', '#1c69d4', '#262626']
related: [bmw-m, tesla, apple]
description: 'BMW.com is the measured, corporate-automotive face of the brand — distinct from BMW M''s motorsport-bombastic variant. The canvas is a near-white (`#ffffff` over a faintly cream-tinted neutral), BMW corporate blue (`#1c69d4`) carries every primary CTA, and dark navy hero bands (`#1a2129` → `#262e38`) frame model photography. **BMW Type Next Latin** sets the entire hierarchy on two weights — heavy 700 for display and light 300 for body — a classical-modernist split that rejects the tech-industry love of a single optical-sized geometric. Configuration and reservation flows ride a card-based 4-up grid; each card holds a model render, a name, and a quiet "Learn More" link. The M-stripe triplet — light blue, dark navy, red — appears only in motorsport contexts, where it''s deployed with reverent restraint.'

colors:
  bg: '#ffffff'
  bg-soft: '#f7f7f7'             # surface-soft — section alternation
  bg-card: '#fafafa'             # surface-card — config tiles
  bg-strong: '#ebebeb'           # divider band
  bg-dark: '#1a2129'             # surface-dark — navy hero band
  bg-dark-elev: '#262e38'        # surface-dark-elevated — overlay panels
  surface: '#ffffff'
  surface-soft: '#f7f7f7'
  surface-card: '#fafafa'
  text: '#3c3c3c'                # body
  text-strong: '#1a1a1a'         # body-strong
  text-ink: '#262626'             # ink — primary headings
  text-muted: '#6b6b6b'           # muted — captions, metadata
  text-faint: '#9a9a9a'           # muted-soft — disabled labels
  brand: '#1c69d4'                # BMW corporate blue — primary CTA
  brand-hover: '#0653b6'          # primary-active — pressed
  brand-disabled: '#d6d6d6'       # primary-disabled
  on-brand: '#ffffff'
  on-dark: '#ffffff'
  on-dark-soft: '#bbbbbb'
  m-blue-light: '#0066b1'         # M-stripe light blue — motorsport only
  m-blue-dark: '#1c69d4'          # M-stripe dark blue (= brand)
  m-red: '#e22718'                # M-stripe red — motorsport only
  border: '#e6e6e6'               # hairline
  border-strong: '#cccccc'        # hairline-strong
  border-soft: '#f0f0f0'          # subtle dividers
  link: '#1c69d4'
  link-hover: '#0653b6'
  ring: '#1c69d4'
  shadow-soft: 'rgba(0,0,0,0.04)'
  shadow-elev: 'rgba(0,0,0,0.08)'
  shadow-deep: 'rgba(0,0,0,0.16)'
  success: '#22c55e'
  warning: '#f59e0b'
  danger: '#dc2626'
  info: '#1c69d4'

typography:
  display:
    family: '"BMW Type Next Latin", "BMWTypeNext", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    weights: [300, 400, 700]
    opentype-features: ['kern']
  body:
    family: '"BMW Type Next Latin", "BMWTypeNext", system-ui, sans-serif'
    weights: [300, 400]
    opentype-features: ['kern']
  mono:
    family: 'SF Mono, Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-xl:        { size: 64, weight: 700, lineHeight: 1.05, tracking: '0',     family: display, notes: 'Hero model name on photography' }
    display-lg:        { size: 48, weight: 700, lineHeight: 1.10, tracking: '0',     family: display, notes: 'Section opener' }
    display-md:        { size: 32, weight: 700, lineHeight: 1.15, tracking: '0',     family: display }
    display-sm:        { size: 24, weight: 700, lineHeight: 1.25, tracking: '0',     family: display }
    title-lg:          { size: 20, weight: 700, lineHeight: 1.30, tracking: '0',     family: display }
    title-md:          { size: 18, weight: 700, lineHeight: 1.40, tracking: '0',     family: display }
    title-sm:          { size: 16, weight: 700, lineHeight: 1.40, tracking: '0',     family: display }
    body-lg:           { size: 18, weight: 300, lineHeight: 1.55, tracking: '0',     family: body, notes: 'Lead paragraph' }
    body-md:           { size: 16, weight: 300, lineHeight: 1.55, tracking: '0',     family: body, notes: 'Default paragraph — BMW''s signature 300-weight body' }
    body-sm:           { size: 14, weight: 300, lineHeight: 1.55, tracking: '0',     family: body }
    caption:           { size: 12, weight: 400, lineHeight: 1.40, tracking: '0.04em', family: body }
    label-uppercase:   { size: 13, weight: 700, lineHeight: 1.30, tracking: '0.12em', family: display, notes: 'Section eyebrow — uppercase' }
    button:            { size: 14, weight: 700, lineHeight: 1.00, tracking: '0.04em', family: display }
    nav-link:          { size: 14, weight: 400, lineHeight: 1.40, tracking: '0.02em', family: body }
    micro:             { size: 11, weight: 400, lineHeight: 1.40, tracking: '0.05em', family: body }
    code:              { size: 13, weight: 400, lineHeight: 1.50, tracking: '0',     family: mono }

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
  header-height: 64
  hero-height: 96vh

components:
  button-primary:
    bg: '#1c69d4'
    text: '#ffffff'
    padding: '14px 32px'
    radius: 0
    font: 'BMW Type Next 14/700, 0.04em tracking, uppercase'
    transition: 'background 0.2s ease'
    hover: '#0653b6'
  button-ghost:
    bg: 'transparent'
    text: '#262626'
    padding: '14px 32px'
    radius: 0
    border: '1px solid #262626'
    font: 'BMW Type Next 14/700 uppercase'
  button-on-dark:
    bg: 'transparent'
    text: '#ffffff'
    border: '1px solid #ffffff'
    padding: '14px 32px'
    radius: 0
  card-model:
    bg: '#fafafa'
    radius: 0
    padding: '32px 24px'
    border: 'none'
    image-position: 'top, full-width 16:9'
    title: '20/700 BMW Type Next'
    cta: '"Learn More" → 14/700 uppercase #1c69d4'
  card-feature:
    bg: '#ffffff'
    border: '1px solid #e6e6e6'
    padding: '32px'
    radius: 0
  hero-band-dark:
    bg: '#1a2129'
    text: '#ffffff'
    notes: 'Used for press releases, model unveils, motorsport stories'
  config-tile:
    bg: '#ffffff'
    border: '1px solid #e6e6e6'
    radius: 0
    padding: '24px'
    selected-border: '2px solid #1c69d4'
  badge:
    bg: 'transparent'
    border: '1px solid #cccccc'
    text: '#262626'
    padding: '4px 12px'
    font: '11/700 uppercase 0.1em'
    radius: 0
  navigation:
    bg: '#ffffff'
    height: 64
    border-bottom: '1px solid #e6e6e6'
    nav-link: '14/400 #262626'
    logo: 'BMW roundel — 32×32, vertically centred'
  input:
    bg: '#ffffff'
    border: '1px solid #cccccc'
    radius: 0
    padding: '12px 16px'
    font: 'BMW Type Next 16/300'
    focus-border: '#1c69d4'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-bmw: 'cubic-bezier(0.6, 0, 0.4, 1)'
  duration-fast: 150
  duration-standard: 300
  duration-slow: 500
  reduced-motion: 'respects prefers-reduced-motion: reduce — parallax in hero stories disables; carousels pause; only opacity transitions remain.'

breakpoints:
  mobile: 568
  tablet: 768
  desktop: 1024
  wide: 1440
  ultra: 1920

shadows:
  flat: 'none'
  card: 'rgba(0,0,0,0.04) 0 2px 8px'
  elevated: 'rgba(0,0,0,0.08) 0 8px 24px'
  modal: 'rgba(0,0,0,0.16) 0 24px 64px'
  ring: '0 0 0 2px #1c69d4'

accessibility:
  contrast-text-on-bg: 14.0          # #262626 on #ffffff
  contrast-body-on-bg: 9.7           # #3c3c3c on #ffffff — AAA
  contrast-text-on-brand: 5.4        # #ffffff on #1c69d4 — AA Normal, AAA Large
  contrast-on-dark-bg: 14.7          # #ffffff on #1a2129 — AAA
  focus-ring: '2px solid #1c69d4 with 2px offset'
  reduced-motion-honored: true
  touch-target-min: 44

dark-mode: 'partial — dark-band sections (#1a2129) appear within otherwise light pages but BMW.com does not ship a full dark variant. ConnectedDrive in-vehicle UI runs dark by default.'
---

## 1. Visual Theme & Atmosphere

BMW.com is the measured, corporate face of the brand — composed, photographic, deliberately Bavarian. The page opens onto a near-white canvas with the BMW roundel pinned at the top-left of a thin white nav, and a full-bleed hero photograph of a current model — typically a profile shot with shallow depth-of-field, captured in the brand's signature dawn-grey environmental light. Beneath the hero, content unfolds in calm 12-column strides: a section eyebrow in 13px uppercase, a 48–64px headline in **BMW Type Next** at weight 700, and one or two paragraphs of 16/300 body copy that read with the cadence of a press release.

The colour mood is **corporate-blue calm**. BMW's signature mid-saturation blue (`#1c69d4`) carries primary action — every "Configure", "Learn More", and "Build & Price" CTA. Surrounding it, a near-monochrome neutral system in barely-tinted greys creates a generous, paper-like ground. Where Tesla refuses dark surfaces entirely, BMW commits to the dark band — `#1a2129` (a navy-leaning near-black) is reserved for press-release banners, motorsport stories, model-launch teasers and footer. The light/dark alternation is the brand's editorial rhythm: most of the page sits on white, but every two or three sections a navy band appears to anchor a hero, and the contrast feels like turning a glossy magazine spread.

Typography is **classical-modernist** — a hard split between weight 700 for display and weight 300 for body, with no 400 in between for paragraphs. BMW Type Next Latin (the marque's bespoke 2020 family) handles every register; the heavy/light contrast is the brand's typographic signature. Headlines feel weighted, decisive, almost monumental; body copy reads as airy, premium, restrained. There are no decorative weights, no italics, no ornament — but there's an explicit **uppercase eyebrow tradition** at 13px / 700 / `0.12em` tracking that introduces every section.

Motion is restrained but present: a subtle parallax in hero photography, fade-in-on-scroll for content blocks, a slow 300ms colour transition on the blue CTA. The brand uses motion to suggest German-engineering precision rather than tech-industry playfulness.

**Key Characteristics:**
- Cream-tinted white canvas (`#ffffff` over neutral) with navy (`#1a2129`) hero bands
- BMW corporate blue (`#1c69d4`) as the singular primary action colour
- BMW Type Next Latin two-weight system: 700 display, 300 body, no middle weights for paragraphs
- Uppercase 13/700 section eyebrows with 0.12em tracking — a brand typographic crest
- Full-bleed model photography with shallow depth-of-field, dawn-grey environmental light
- Zero border-radius on buttons and cards — sharp Bavarian rectangles
- M-stripe triplet (light-blue / dark-blue / red) reserved for motorsport contexts only
- 12-column grid, 64px header, generous 96–128px section padding
- Configurator card-grid pattern (4-up) for model selection
- BMW roundel as the only logomark — never substituted with wordmark

## 2. Color Palette & Roles

### Primary
- **BMW Blue** (`#1c69d4`): The corporate blue (rgb 28, 105, 212). Mid-saturation, slightly cool. Appears on every primary CTA, every selected state, every link.
- **Pure White** (`#ffffff`): Page canvas, card surface, default ground.

### Brand & Dark
- **Surface Dark** (`#1a2129`): Navy-leaning near-black for hero bands. A warm-cool neutral with a faint blue undertone — never `#000000`.
- **Surface Dark Elevated** (`#262e38`): One step lighter, used for cards on dark surfaces.
- **BMW Roundel**: rendered in either monochrome black-on-white or full-colour blue-and-white quartered roundel, depending on context.

### Accent (Motorsport / M)
- **M Light Blue** (`#0066b1`): The light stripe in the M-stripe triplet. Reserved for M Performance content.
- **M Dark Blue** (`#1c69d4`): The dark stripe — coincides with the corporate brand colour.
- **M Red** (`#e22718`): The signature red stripe. Used only in motorsport storytelling, never decoratively.

### Interactive
- **Link** `#1c69d4` — same as brand
- **Hover** `#0653b6` — pressed/active blue
- **Disabled** `#d6d6d6` — desaturated grey
- **Focus** — 2px `#1c69d4` outline with 2px offset

### Neutral Scale
- **Ink** `#262626` — primary headings (rgb 38, 38, 38)
- **Body Strong** `#1a1a1a` — emphatic body
- **Body** `#3c3c3c` — paragraph default
- **Muted** `#6b6b6b` — captions, metadata
- **Muted Soft** `#9a9a9a` — disabled labels
- **Hairline Strong** `#cccccc` — input borders
- **Hairline** `#e6e6e6` — divider
- **Surface Strong** `#ebebeb` — divider band
- **Surface Card** `#fafafa` — alt panel
- **Surface Soft** `#f7f7f7` — section alternation
- **Canvas** `#ffffff`

### Surface & Borders
- Light surface tiers cascade `#ffffff` → `#fafafa` → `#f7f7f7` → `#ebebeb`
- Dark tiers cascade `#1a2129` → `#262e38`
- Borders are always 1px solid; never dashed, never styled
- Cards rarely use shadows — separation is from background contrast and borders

### Shadow Colors
BMW prefers minimal shadows. When used, they're soft black at low opacity:
- **Card** `rgba(0,0,0,0.04) 0 2px 8px`
- **Elevated** `rgba(0,0,0,0.08) 0 8px 24px`
- **Modal** `rgba(0,0,0,0.16) 0 24px 64px`

### Semantic
- **Success** `#22c55e`
- **Warning** `#f59e0b`
- **Danger** `#dc2626`
- **Info** `#1c69d4` — same as brand

These appear inside the configurator and dealer-locator flows, never in marketing pages.

## 3. Typography Rules

### Font Family
- **Display & Body**: `"BMW Type Next Latin"` — bespoke 2020 family by BMW Group, replacing BMW Helvetica. Weights 300, 400, 500, 700. Latin, Cyrillic, Greek, Arabic and CJK siblings exist.
- **Fallback chain**: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Mono**: SF Mono / Menlo — used only on developer-facing pages
- **OpenType features**: kern only. No `ss01`/`ss02` exposed.
- **No italics** in the marketing system. The press-release subsystem uses italic for dateline only.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT | Notes |
|------|------|------|--------|-------------|----------------|----|-------|
| Display XL | Display | 64 | 700 | 1.05 | 0 | kern | Hero model name |
| Display LG | Display | 48 | 700 | 1.10 | 0 | kern | Section opener |
| Display MD | Display | 32 | 700 | 1.15 | 0 | kern | Sub-section |
| Display SM | Display | 24 | 700 | 1.25 | 0 | kern | Card header |
| Title LG | Display | 20 | 700 | 1.30 | 0 | kern | Module title |
| Title MD | Display | 18 | 700 | 1.40 | 0 | kern | List item title |
| Title SM | Display | 16 | 700 | 1.40 | 0 | kern | Compact label |
| Body LG | Body | 18 | 300 | 1.55 | 0 | kern | Lead paragraph |
| Body MD | Body | 16 | 300 | 1.55 | 0 | kern | Default paragraph |
| Body SM | Body | 14 | 300 | 1.55 | 0 | kern | Secondary copy |
| Caption | Body | 12 | 400 | 1.40 | 0.04em | kern | Image captions, metadata |
| Label Uppercase | Display | 13 | 700 | 1.30 | 0.12em | kern | Section eyebrow — UPPERCASE |
| Button | Display | 14 | 700 | 1.00 | 0.04em | kern | Primary/secondary CTA |
| Nav Link | Body | 14 | 400 | 1.40 | 0.02em | kern | Top-level navigation |
| Micro | Body | 11 | 400 | 1.40 | 0.05em | kern | Footer fine print |
| Code | Mono | 13 | 400 | 1.50 | 0 | — | Dev pages only |

### Principles
- **Two-weight discipline**: 700 for display, 300 for body. The contrast is the brand's voice — no 400 or 500 paragraphs.
- **Uppercase eyebrow tradition**: every section opens with a 13px / 700 / `0.12em` tracked uppercase label. It's the brand's typographic sigil.
- **Tracking discipline**: display sizes are tracked at zero (BMW Type Next is drawn for default tracking); only uppercase labels and body micros take positive tracking.
- **No italic, no ornament**: BMW refuses italic in display and body. Editorial press-release pages allow italic for dateline only.
- **Body weight 300 is the brand**: a confident move — most automotive brands sit body at 400. BMW's 300 reads as airy, premium, German-precision.
- **Display weight 700 is monumental**: paired with the 300 body, it creates a typographic rhythm of weight-then-air, weight-then-air.
- **One family discipline**: BMW Type Next handles everything. Even labels and captions resist falling back to system sans.

## 4. Component Stylings

### Buttons
All buttons are **zero-radius rectangles** — sharp Bavarian edges that echo the brand's product-design language.

**Primary CTA** — the corporate blue button:
- Background `#1c69d4`, text `#ffffff`, font 14/700 uppercase, `0.04em` tracking
- Padding `14px 32px`, radius `0`, no border
- Transition `background 0.2s ease`
- Hover background `#0653b6`
- Disabled background `#d6d6d6`, text `#9a9a9a`
- Use case: Configure, Build & Price, Learn More (when CTA), Find a Retailer

**Ghost (Light)** — secondary on light surfaces:
- Background transparent, text `#262626`, border `1px solid #262626`
- Same padding/typography as primary
- Hover: text `#1c69d4`, border `#1c69d4`
- Use case: secondary action alongside primary

**On-Dark Ghost** — secondary on navy hero band:
- Background transparent, text `#ffffff`, border `1px solid #ffffff`
- Hover: background `rgba(255,255,255,0.1)`
- Use case: hero-band secondary action

**Text Link** — inline action:
- Text `#1c69d4`, font 14/700 uppercase with arrow glyph `→`
- No underline at rest; hover triggers a 2px underline that grows from left
- Use case: "Learn More" on cards, "View All Models", "Read More"

### Cards

**Model Card** — the configurator workhorse:
- Background `#fafafa`, no border, no shadow, radius 0
- Padding `32px 24px`
- Top: 16:9 model render (transparent PNG over `#fafafa`)
- Below image: model name in 20/700, drivetrain badge, "Learn More" text link
- Hover: background lifts to `#ffffff`, no scale, no shadow

**Feature Card** — for spec or technology callouts:
- Background `#ffffff`, border `1px solid #e6e6e6`, radius 0
- Padding `32px`
- Used in 3-up grids on technology pages

**Hero Band Card** (dark):
- Sits inside a `#1a2129` band
- Background `#262e38`, text white, border `1px solid rgba(255,255,255,0.08)`
- Padding `48px`, radius 0

### Configurator Tile
- Background `#ffffff`, border `1px solid #e6e6e6`, radius 0, padding `24px`
- Selected: border `2px solid #1c69d4`, slight inner glow via inset shadow
- Used for trim/colour/wheel selection

### Badges
- Background transparent, border `1px solid #cccccc`, text `#262626`
- Font 11/700 uppercase `0.1em`
- Padding `4px 12px`, radius 0
- M-Performance variant: border `#e22718`, text `#e22718`

### Inputs
- Background `#ffffff`, border `1px solid #cccccc`, radius 0
- Padding `12px 16px`, font 16/300
- Focus border `#1c69d4`, no shadow
- Floating label pattern: label sits inside on rest, animates to top on focus/value

### Navigation
- White background, 64px height, 1px bottom border `#e6e6e6`
- BMW roundel 32×32 at far left
- Primary nav links 14/400 with `0.02em` tracking, `#262626`
- Hover: text `#1c69d4`, no background change
- Mega-menu opens on hover with full-width white panel, 4-column model grid + sidebar links
- Sticky on scroll with subtle shadow `rgba(0,0,0,0.04) 0 2px 8px`

### Tooltips & Toasts
- Tooltip: `#1a2129` background, white text 12/400, padding `8px 12px`, radius 0, no arrow
- Toast: `#262626` background, white text, fixed bottom-right, slide-in 300ms

### Modal
- Overlay `rgba(0,0,0,0.6)`
- Dialog `#ffffff`, radius 0, padding `48px`, max-width 720
- Close icon top-right, no border on dialog itself

## 5. Layout Principles

### Spacing System
- Base **8px**. Scale 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.
- Section padding 96–128px on desktop, 64–96px on tablet, 48–64px on mobile.
- Card gap 24–32px in grids.
- Button padding `14px 32px` — wide horizontal padding signals weight.

### Grid & Container
- 12-column grid, 1440px max content width
- Hero is full-bleed (100vw, 96vh)
- Model card grid is 4-up at desktop, 2-up tablet, 1-up mobile
- Press-release prose width 760px

### Whitespace Philosophy
BMW uses whitespace as **engineering whitespace** — not a luxury signal (Tesla) but a sign of considered restraint. Sections breathe at 96–128px vertical padding so each module reads as a distinct chapter. Inside each section, the 12-column grid permits dense data tables (specs, comparison) but refuses to fill horizontal space arbitrarily.

### Section Cadence
- The brand rhythm is **light → light → dark → light → dark**. White sections dominate, navy bands punctuate.
- Hero → feature → spec table → press band (navy) → configurator → footer (navy)
- Each navy band introduces a hero photograph and a single white-on-dark CTA pair

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0 | Buttons, cards, inputs, modals — the BMW default |
| Micro | 2 | Form-error indicator |
| Standard | 4 | Tooltip — rare |
| Comfortable | 8 | Image-card overlay — limited use |
| Large | 12 | Photo-card variant on lifestyle pages |
| Featured | 16 | Hero-curve image vignette — rare |
| Pill | 9999 | Avatar, dot indicator |

The **0-radius default** is doctrine. Going larger feels like a different brand (Mercedes' soft modernism, Audi's pill hover).

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | Flat | Default state for cards, inputs, buttons |
| 1 | `rgba(0,0,0,0.04) 0 2px 8px` | Sticky nav on scroll, light card hover |
| 2 | `rgba(0,0,0,0.08) 0 8px 24px` | Mega-menu overlay |
| 3 | `rgba(0,0,0,0.16) 0 24px 64px` | Modal dialogs |
| 4 | Frost — `rgba(255,255,255,0.85)` + blur 12px | Image-overlay info panel on hero photography |
| 5 | Inner glow — `inset 0 0 0 2px #1c69d4` | Selected configurator tile |

### Shadow Philosophy
BMW prefers **flat tonal layering** (cream → grey → navy → near-black) over drop-shadow. When shadow appears, it's neutral black at low opacity — never blue-tinted. The brand's depth comes from photography (depth-of-field on hero shots), not from CSS shadow stacks.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style for most transitions
- **BMW Smooth**: `cubic-bezier(0.6, 0, 0.4, 1)` — slightly slower entry, used on hero parallax and section reveals
- **Spring/bounce**: never. BMW refuses overshoot.

### Duration
- **Fast** 150ms — colour transitions on hover
- **Standard** 300ms — opacity fades, mega-menu reveal
- **Slow** 500ms — hero parallax, section reveal, background-image cross-fade

### Per-Component Recipes
- **Primary button hover**: `background 0.2s ease`. No lift, no scale.
- **Card hover**: `background 0.3s` from `#fafafa` → `#ffffff`. No translate.
- **Mega-menu reveal**: opacity + 8px translateY 300ms BMW Smooth
- **Hero parallax**: image scrolls at 0.7× speed of viewport; disabled on prefers-reduced-motion
- **Text link underline grow**: `transform: scaleX` on a 2px pseudo-element, origin left, 200ms

### Page Transitions
Hard cuts on route change. Configurator step transitions use opacity 200ms.

### Reduced Motion
Honoured at the CSS level: parallax disables; carousels pause; opacity-only transitions remain. Configurator step animations collapse to 0ms.

## 9. Accessibility & A11y

### Contrast Pairs
- **Ink on White** — `#262626` / `#ffffff` = **14.0:1** — AAA all sizes
- **Body on White** — `#3c3c3c` / `#ffffff` = **9.7:1** — AAA
- **Muted on White** — `#6b6b6b` / `#ffffff` = **5.6:1** — AA Normal
- **White on BMW Blue** — `#ffffff` / `#1c69d4` = **5.4:1** — AA Normal, AAA Large
- **White on Dark Surface** — `#ffffff` / `#1a2129` = **14.7:1** — AAA
- **Disabled** — `#9a9a9a` / `#ffffff` = **2.9:1** — fails AA Normal, used only for disabled states

### Focus Indicators
- 2px solid `#1c69d4` outline with 2px offset on every interactive element
- On dark bands, focus uses 2px solid white with 2px offset
- `:focus-visible` only — not on mouse click

### ARIA & Patterns
- Mega-menu uses `aria-haspopup="menu"` and `aria-expanded`
- Configurator step uses `role="tablist"` with `aria-selected` on the active step
- Modal dialogs trap focus, label via `aria-labelledby`, dismiss on Esc

### Keyboard Nav
- Tab order: roundel → nav → utility icons → main content → CTA
- Configurator: arrow keys move between trim tiles; Space selects
- Carousel: arrow keys move slides

### Screen Reader Hints
- BMW roundel uses `aria-label="BMW homepage"`
- Model names announced as full ("BMW iX xDrive50") not abbreviated
- Spec tables use proper `<th scope="col">` and `<th scope="row">` semantics

### Reduced Motion
Honoured (see §8).

## 10. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <568 | Single column; hamburger nav; hero text 32px; CTA stacks; model cards 1-up |
| Tablet | 568–1024 | 2-column model grid; hero 48px; nav stays horizontal but condensed |
| Desktop | 1024–1440 | 4-column model grid; full mega-menu; hero 64px |
| Wide | 1440–1920 | Content centred at 1440 max-width |
| Ultra | >1920 | Hero photography scales to fill; max-width preserved |

### Touch Targets
- Buttons 48×48 minimum (14×32 padding around 14px text yields ~46px height — pass)
- Nav links 44px tap area
- Configurator tiles 96×96 minimum

### Collapsing Strategy
- Nav: horizontal → hamburger drawer at <1024
- Model grid: 4 → 2 → 1
- Spec tables: horizontal scroll on mobile rather than stacking
- Hero CTA pair: side-by-side → stacked at <568

### Image Behavior
- Hero images responsive across breakpoints, fill viewport
- `object-fit: cover` on hero, `object-fit: contain` on model PNG renders
- Lazy-load below the fold

### Container Queries
Not used. Breakpoint-driven.

## 11. Content & Voice

### Tone
**Composed, technically precise, German-formal.** BMW writes like an engineer who happens to be a copywriter. Sentences are declarative, often parallel-structured: "More range. More performance. More dynamic." The voice is neither playful nor poetic — it's measured.

### Microcopy Patterns
- **Primary CTA**: "Configure", "Build & Price", "Learn More", "Find a Retailer"
- **Secondary**: "Contact a Specialist", "Request a Quote", "Compare Models"
- **Form error**: "Please enter a valid postcode."
- **Empty state**: "No retailers found within 50 km. Try expanding your search."
- **Confirmation**: "Your configuration has been saved."

### CTA Verb Conventions
- **Configure** — the order-flow entry verb (never "Customize")
- **Build & Price** — US market preference
- **Discover** — exploration verb on technology pages
- **Find** — for retailer/charging-station locator
- **Request** — for quote, brochure, test-drive

### Empty States
On the configurator, an unselected option shows the base value with a quiet "Select" prompt. No illustrations.

## 12. Dark Mode & Theming

BMW.com is **partial-dark**: navy hero bands appear within otherwise light pages but the site does not ship a full page-level dark variant. ConnectedDrive (the in-vehicle UI) runs dark by default with the same token bundle inverted.

If implementing a dark variant of this token bundle:
- Swap `bg #ffffff → #1a2129`
- Swap `bg-soft #f7f7f7 → #262e38`
- Swap `text-ink #262626 → #ffffff`
- Swap `text #3c3c3c → #d6d6d6`
- Brand stays `#1c69d4`
- Borders shift to `rgba(255,255,255,0.12)`
- Card surface becomes `#262e38`

## 13. Lineage & Influences

BMW.com inherits from three traditions: **Bavarian engineering print catalogues** of the 1970s–90s (calm, dense, photo-led); **Otl Aicher's Munich '72 system design** (uppercase eyebrows, grid discipline, restrained colour); and **Apple's product-page idiom** (full-bleed photography, minimal chrome, single primary CTA). The two-weight Type Next (700/300) is BMW's bespoke answer to Apple's San Francisco — same restraint, different temperament.

What BMW rejects: it rejects the soft-modernist roundedness of Mercedes-Benz's web (12px+ radii, gradients), the dramatic-gradient thunder of Porsche, and Tesla's monochrome-plus-one minimalism. BMW commits to colour (the corporate blue), commits to dark bands, commits to the M-stripe triplet — but holds each register in its proper context.

- **Otl Aicher / Munich 1972** — uppercase eyebrows, grid discipline — https://en.wikipedia.org/wiki/Otl_Aicher
- **BMW Type Next (BMW Group / Interbrand)** — bespoke 2020 family — https://www.bmwgroup.com/
- **Apple product pages** — full-bleed photography idiom — https://apple.com
- **Bauhaus / Ulm school** — the German modernist lineage — https://en.wikipedia.org/wiki/Hochschule_für_Gestaltung_Ulm

## 14. Do's and Don'ts

### Do
- Use BMW corporate blue `#1c69d4` for every primary CTA — never substitute
- Set body type at weight 300 — the airy weight is the brand's voice
- Set display type at weight 700 — the heavy weight is the brand's monument
- Open every section with a 13/700 uppercase eyebrow at 0.12em tracking
- Keep all radii at 0 — the sharp rectangle is non-negotiable
- Reserve the navy band (`#1a2129`) for press-release, motorsport, hero punctuation
- Trust the M-stripe triplet (light-blue / dark-blue / red) only inside motorsport contexts
- Use full-bleed model photography with shallow depth-of-field
- Pair every primary CTA with a ghost secondary at most — never three CTAs
- Render the BMW roundel in monochrome on light surfaces, full quartered colour on dark

### Don't
- Use weight 400 or 500 for body paragraphs — breaks the two-weight discipline
- Add border-radius to buttons or cards — BMW's rectangle is doctrinal
- Use the M-red `#e22718` outside motorsport contexts — the red is sacred
- Substitute the BMW roundel with a wordmark — the roundel is the only logomark
- Use uppercase headlines — uppercase is reserved for 13px eyebrows only
- Apply heavy drop-shadow — depth comes from photography and tonal layering
- Use italic in body or display — italic is press-release dateline only
- Stack three CTAs in a section — pair primary blue + ghost is the maximum
- Mix M-blue light (`#0066b1`) with corporate-blue (`#1c69d4`) outside the M-stripe — they belong to different layers
- Use cool-grey neutrals — BMW's neutrals are warm-grey, slightly cream-tinted

## 15. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: BMW Blue `#1c69d4`
- Background: White `#ffffff`
- Heading text: Ink `#262626`
- Body text: `#3c3c3c`
- Muted text: `#6b6b6b`
- Dark surface: `#1a2129`
- Hairline border: `#e6e6e6`
- M Red (motorsport only): `#e22718`
- M Light Blue (motorsport only): `#0066b1`

### Example Component Prompts
- "Create a hero section with full-bleed model photography (16:9), a 64px BMW Type Next 700 model name on the bottom-left, a 13px uppercase eyebrow ('THE NEW BMW iX') above it tracked at 0.12em, and a primary `#1c69d4` 'Configure' button + ghost 'Learn More' button — both 14/700 uppercase, 0-radius."
- "Design a 4-up model card grid where each card sits on `#fafafa`, holds a 16:9 transparent-PNG render at top, then a 20/700 model name, a 13/400 drivetrain badge, and a 14/700 uppercase blue 'Learn More →' link. No border, no shadow, hover lifts background to `#ffffff`."
- "Build a navy press-band section: background `#1a2129`, white 48/700 headline, 18/300 body lead in `#bbbbbb`, white-bordered ghost CTA. 96px vertical padding."
- "Create a configurator step with a 4-up tile grid; each tile is white with a 1px `#e6e6e6` border, 0 radius, 24px padding. Selected state shifts border to 2px `#1c69d4` with a faint inset glow."
- "Design a uppercase eyebrow component: 13px BMW Type Next 700, letter-spacing 0.12em, color `#1c69d4`, sits above every section headline with 16px bottom margin."
- "Make a sticky white nav with the BMW roundel left, six 14/400 nav links centre, three utility icons right, 64px height, 1px bottom border `#e6e6e6`, opens a full-width mega-menu on hover with 4-column model grid."

### Iteration Guide
1. Verify the two-weight discipline first — if any body paragraph is at 400 or 500, the BMW voice breaks.
2. Check radii — if anything is rounded above 0, it's drifted into Mercedes territory.
3. Confirm the corporate blue `#1c69d4` is used only on primary CTAs, links and selected states — never decoratively.
4. Ensure section eyebrows are uppercase 13/700 at 0.12em — this is the brand's typographic signature.
5. Hold the M-stripe triplet for motorsport content only — using M-red on a corporate page is the loudest possible mistake.
6. Pair the 96–128px section padding with sharp 0-radius cards — the contrast between airy spacing and crisp edges is the BMW rhythm.
7. Photography should always have shallow depth-of-field — flat-focus stock imagery doesn't read as BMW.
