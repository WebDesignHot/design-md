---
name: Mercedes-Benz
tagline: Three-pointed-star authority — MBCorpo on near-black canvas, silver-blue #00adef accent, tracked uppercase nav.
author: webdesignhot
source_url: https://www.mercedes-benz.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [automotive]
tags: [luxury, dark, sans, photography, cinematic, premium]
preview_swatch: ['#000000', '#00adef', '#ffffff']
related: [bmw, ferrari, tesla]
description: 'Mercedes-Benz''s site reads as luxury-flagship cinema — black-canvas-by-default, holding white display headlines in MBCorpo Text and a single chromatic voltage in the brand''s signature **silver-blue** `#00adef` (the EQ electric-program hue, but functioning as the brand interactive accent across the marketing surface). The black canvas `#000000` is pure black — Mercedes deliberately refuses near-blacks; the absolute black ground is part of the luxury-flagship voice. Section rhythm alternates full-bleed cinematic hero photography (S-Class portraits, AMG track sequences, EQS interior detail) with tighter editorial bands holding spec callouts and feature comparisons. The three-pointed star dominates the chrome — center-top in nav, watermarked over hero photography, embossed in the closing footer. Custom typeface MBCorpo carries every text role; CTA labels render uppercase with generous tracking. The discipline is German engineering elevated to flagship-luxury voice.'

colors:
  bg: '#000000'                  # pure black canvas — luxury flagship voice
  bg-elevated: '#0a0a0a'         # near-black tier — cards, surface variant on dark
  bg-light: '#ffffff'            # paper-white editorial bands (configurator, dealer locator)
  surface: '#1a1a1a'             # canvas-elevated — feature cards, spec panels on dark
  surface-strong: '#2a2a2a'      # heavier panel on dark
  surface-light: '#f5f5f5'       # neutral grey panel on light editorial bands
  surface-on-light: '#ffffff'    # card surface on white editorial bands
  text: '#ffffff'                # ink — display + body on dark canvas
  text-strong: '#ffffff'         # body-strong — same hex as ink
  text-body: '#a8a8a8'           # default running body copy on dark
  text-muted: '#7a7a7a'          # captions, metadata on dark
  text-faint: '#5a5a5a'          # disabled, footer secondary on dark
  text-on-light: '#000000'       # pure black on light editorial bands
  text-body-on-light: '#3a3a3a'  # running body on white
  brand: '#00adef'               # Mercedes silver-blue (EQ electric-program hue)
  brand-hover: '#0095d0'         # press state
  brand-active: '#007fb3'        # deeper press
  brand-soft: '#d4f1fc'          # softest tint — selected nav, badge bg on light
  brand-deep: '#003d5b'          # deep navy used in EQ-content gradients
  on-brand: '#ffffff'            # white on silver-blue
  accent-amg-red: '#cc0000'      # AMG sub-brand accent — track content, performance callouts
  accent-amg-yellow: '#fdca00'   # AMG performance accent (Lewis Hamilton, F1 program)
  accent-maybach-rose: '#ddc090' # Maybach sub-brand champagne tone
  border: '#2a2a2a'              # 1px hairline on dark
  border-soft: '#1a1a1a'         # softer divider on dark
  border-on-light: '#d8d8d8'     # 1px hairline on light editorial band
  link: '#ffffff'                # inline links inherit ink + underline
  link-hover: '#00adef'          # silver-blue shift on hover
  ring: '#00adef'                # focus ring on dark
  ring-on-light: '#000000'       # focus ring on light
  success: '#00a651'             # confirmation
  warning: '#ffa500'             # validation warnings
  danger: '#cc0000'              # form errors (shares AMG red)
  info: '#00adef'                # info badges (shares brand silver-blue)

typography:
  display:
    family: '"MBCorpo Title", "MBCorpo Text", "Daimler CS", "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 700]
    opentype-features: []
  body:
    family: '"MBCorpo Text", "Daimler CS", "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 700]
    opentype-features: []
  mono:
    family: '"SF Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-mega:    { size: 88, weight: 400, lineHeight: 1.05, tracking: '-0.88px',  family: display, notes: 'Homepage hero h1 — model name over cinema photograph' }
    display-xl:      { size: 64, weight: 400, lineHeight: 1.10, tracking: '-0.64px',  family: display, notes: 'Subsidiary heroes, model-line headlines' }
    display-lg:      { size: 48, weight: 400, lineHeight: 1.15, tracking: '-0.48px',  family: display, notes: 'Section heads, feature band headlines' }
    display-md:      { size: 32, weight: 400, lineHeight: 1.25, tracking: '-0.16px',  family: display, notes: 'Sub-section heads, card titles in feature grid' }
    display-sm:      { size: 24, weight: 500, lineHeight: 1.30, tracking: 'normal',   family: display, notes: 'Component titles, navigation flyout heads' }
    title-md:        { size: 18, weight: 700, lineHeight: 1.35, tracking: 'normal',   family: body,    notes: 'Card titles, list section labels' }
    title-sm:        { size: 16, weight: 700, lineHeight: 1.40, tracking: 'normal',   family: body,    notes: 'Small section titles' }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: 'normal',   family: body,    notes: 'Editorial body, intro paragraphs' }
    body:            { size: 14, weight: 400, lineHeight: 1.55, tracking: 'normal',   family: body,    notes: 'Default running text — Mercedes uses 14 as default body' }
    body-sm:         { size: 12, weight: 400, lineHeight: 1.50, tracking: 'normal',   family: body,    notes: 'Footer body, fine print' }
    caption:         { size: 11, weight: 400, lineHeight: 1.45, tracking: 'normal',   family: body,    notes: 'Photo captions' }
    eyebrow:         { size: 11, weight: 500, lineHeight: 1.40, tracking: '1.6px',    family: body,    notes: 'Section eyebrows above display heads — uppercase, generous tracking' }
    button:          { size: 14, weight: 500, lineHeight: 1.00, tracking: '1.4px',    family: body,    notes: 'CTA labels — uppercase, generous tracking' }
    nav-link:        { size: 13, weight: 500, lineHeight: 1.40, tracking: '0.8px',    family: body,    notes: 'Top-nav menu items — uppercase' }
    spec-value:      { size: 64, weight: 400, lineHeight: 1.05, tracking: '-0.64px',  family: display, notes: 'Engine spec values' }
    spec-label:      { size: 11, weight: 500, lineHeight: 1.40, tracking: '1.6px',    family: body,    notes: 'Spec metric labels — uppercase' }
    code:            { size: 12, weight: 400, lineHeight: 1.50, tracking: 'normal',   family: mono,    notes: 'Rare — developer-only surfaces' }

radius:
  none: 0           # spec tables, hero photo containers
  xs: 2             # decorative chips
  sm: 4             # text inputs, small badges
  md: 6             # secondary cards, compact UI
  lg: 8             # default CTA radius — disciplined, not pill
  xl: 12            # primary feature cards
  xxl: 16           # photo cards
  pill: 9999        # avatar plates only (rare)

spacing:
  base: 4
  scale: [4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 72
  hero-height: '100vh on homepage; 800px on model pages'
  section-padding: 96
  card-grid-gutter: 24

components:
  top-nav:
    bg: '#000000'
    text: '#ffffff'
    typography: 'MBCorpo Text 13/500 0.8px uppercase'
    height: 72
    layout: 'three-pointed-star left, horizontal menu (Models / Owners / Shopping / Brand / Innovation) center, utilities right'
    border-bottom: '1px solid #2a2a2a'
    sticky: true
  three-pointed-star:
    height: 40
    placement: 'top-left of nav, watermarked over hero photography'
    notes: 'The iconic star with surrounding ring — non-negotiable nav element'
  button-primary:
    bg: '#00adef'
    text: '#ffffff'
    padding: '14px 32px'
    height: 48
    radius: 8
    border: 'none'
    font: 'MBCorpo Text 14/500 1.4px uppercase'
    transition: 'background-color 200ms ease'
    use: 'Configure, Schedule a Test Drive, Find a Dealer'
  button-primary-hover:
    bg: '#0095d0'
    notes: 'Color-only hover'
  button-secondary-on-dark:
    bg: '#ffffff'
    text: '#000000'
    padding: '14px 32px'
    height: 48
    radius: 8
    font: 'MBCorpo Text 14/500 1.4px uppercase'
    use: 'Secondary primary action on dark cinema band'
  button-outline-on-dark:
    bg: 'transparent'
    text: '#ffffff'
    border: '1px solid #ffffff'
    padding: '13px 31px'
    height: 48
    radius: 8
    font: 'MBCorpo Text 14/500 1.4px uppercase'
    use: 'Tertiary action on dark hero band'
  button-outline-on-light:
    bg: 'transparent'
    text: '#000000'
    border: '1px solid #000000'
    padding: '13px 31px'
    height: 48
    radius: 8
    use: 'Outline button on light editorial band'
  button-text:
    bg: 'transparent'
    text: '#ffffff'
    font: 'MBCorpo Text 14/500 1.4px uppercase'
    decoration: 'animated arrow indicator (→) appears on hover'
    use: 'Inline editorial actions (Discover, Read More)'
  hero-band-cinema:
    bg: '#000000'
    text: '#ffffff'
    photo: 'full-bleed cinematic, 100vh on desktop'
    headline: 'MBCorpo Title 88/400 -0.88px'
    cta-arrangement: 'one silver-blue primary + one outline-on-dark secondary'
    padding: 0
    eyebrow: 'eyebrow 11/500 1.6px uppercase, silver-blue, above headline'
  hero-band-light:
    bg: '#ffffff'
    text: '#000000'
    headline: 'MBCorpo Title 64/400 -0.64px'
    padding: '96px 48px'
  feature-card:
    bg: '#1a1a1a'
    text: '#ffffff'
    radius: 12
    border: 'none'
    padding: 32
    notes: 'Title display-md + body + button-text; image fills top edge-to-edge'
  feature-card-light:
    bg: '#ffffff'
    text: '#000000'
    radius: 12
    border: '1px solid #d8d8d8'
    padding: 32
  spec-cell:
    bg: 'transparent'
    text: '#ffffff'
    typography: 'MBCorpo Title 64/400 -0.64px'
    label: 'spec-label 11/500 1.6px uppercase'
    padding: '32px 0'
  text-input-on-dark:
    bg: 'transparent'
    text: '#ffffff'
    border-bottom: '1px solid #5a5a5a'
    border-x: 'none'
    border-top: 'none'
    radius: 0
    padding: '12px 0'
    height: 48
    font: 'MBCorpo Text 14/400'
    notes: 'Underline-only input — luxury form convention'
    focus: 'border-bottom shifts to #00adef'
  text-input-on-light:
    bg: 'transparent'
    text: '#000000'
    border-bottom: '1px solid #5a5a5a'
    notes: 'Same underline-only convention on light'
  badge-pill:
    bg: 'rgba(0, 173, 239, 0.15)'
    text: '#00adef'
    radius: 9999
    padding: '4px 12px'
    font: 'eyebrow 11/500 1.6px uppercase'
  cta-band-dark:
    bg: '#000000'
    text: '#ffffff'
    typography: 'MBCorpo Title 48/400 -0.48px'
    padding: 96
    cta: 'single silver-blue primary, centered'
  footer-dark:
    bg: '#000000'
    text: '#7a7a7a'
    columns: 4
    padding: '64px 48px'
    border-top: '1px solid #2a2a2a'
  footer-link:
    text: '#a8a8a8'
    font: '12/400'
    hover: 'text shifts to #ffffff'

lineage:
  summary: 'Mercedes-Benz''s digital surface inherits the flagship-luxury cinema of S-Class print campaigns more than the spec-sheet density of typical OEM sites. The black canvas is borrowed from luxury fashion (Bottega Veneta, Chanel) where pure black signals flagship rather than mass-market. The silver-blue `#00adef` is a strategic re-deployment of the EQ electric-program hue across the entire brand surface — it functions as the interactive voltage where competitors use red or yellow. Tracked uppercase navigation and CTA labels borrow from German design heritage (Bauhaus, Ulm School) — disciplined, engineered, intentional. What it rejects: ornamental gradients (except in EQ-content), warm color temperatures, casual sentence-case CTAs, anything that competes with the three-pointed-star authority.'
  influences:
    - name: 'Bauhaus / Ulm School of Design'
      role: 'Disciplined uppercase tracking, geometric typography, function-over-decoration'
      url: 'https://en.wikipedia.org/wiki/Ulm_School_of_Design'
    - name: 'Bottega Veneta / Chanel'
      role: 'Luxury-fashion black canvas as flagship signal, single-accent restraint'
      url: 'https://www.bottegaveneta.com'
    - name: 'Apple product pages'
      role: 'Full-viewport cinematic hero photography, photographic depth as primary chrome'
      url: 'https://www.apple.com'
    - name: 'Vogue / Wallpaper* magazine'
      role: 'Editorial pacing on flagship products, generous whitespace rhythm'
      url: 'https://www.vogue.com'
    - name: 'BMW iX brand voice'
      role: 'EV-program color discipline borrowed back to the parent brand'
      url: 'https://www.bmw.com/en/all-models/bmw-i/iX.html'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-flagship: 'cubic-bezier(0.65, 0, 0.35, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 400
  duration-cinema: 800
  hero-parallax: 'subtle 0.4 scroll-coefficient on cinema hero photograph'
  star-hover-rotate: 'three-pointed star rotates 22.5° on hover over 360ms'
  spec-counter: 'count-up 800ms ease-flagship on spec values when scrolled into view'
  reduced-motion: 'respects prefers-reduced-motion: reduce — parallax disabled, count-ups become static, star-rotate disabled'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  flat: 'none'
  hover-card: 'rgba(0,0,0,0.3) 0 8px 24px'
  modal: 'rgba(0,0,0,0.4) 0 32px 64px -16px'
  ring: '0 0 0 2px #00adef'
  ring-on-light: '0 0 0 2px #000000'
  notes: 'Shadows minimal on dark canvas — depth comes from photographic lighting and surface brightness steps'

accessibility:
  contrast-text-on-bg: 21.0              # #ffffff on #000000 — AAA
  contrast-body-on-bg: 7.6               # #a8a8a8 on #000000 — AAA at body sizes
  contrast-text-on-brand: 3.0            # #ffffff on #00adef — fails AA Normal at body; reserved for AA Large (18px+) or buttons (interactive context)
  contrast-text-on-light: 21.0           # #000000 on #ffffff — AAA
  focus-ring: '2px solid #00adef on dark; 2px solid #000000 on light, at 2px offset'
  reduced-motion-honored: true
  touch-target-min: 48                  # CTA height — exceeds WCAG 44

dark-mode: 'native — Mercedes-Benz is dark-by-default. Light editorial bands (configurator, dealer locator, owners portal) are scoped exceptions. The site never inverts globally; dark is the canonical canvas.'
---

## 1. Visual Theme & Atmosphere

Mercedes-Benz's website is what happens when an S-Class print campaign learns it can move. The page opens onto a pure-black canvas (`#000000` — Mercedes refuses near-blacks; the absolute black is part of the luxury-flagship voice) and a single full-bleed cinematic photograph fills the viewport top — an S-Class portrait at twilight, an AMG GT carving through Hockenheim, an EQS interior detail of brushed aluminum and Nappa leather. The headline floats over the photograph in pure white **MBCorpo Title** at 88px, weight 400 — never bold. The voice is declarative-flagship, not announce-y.

The chromatic discipline is monk-like. White display type, grey body copy, pure black canvas, and exactly one chromatic voltage: **silver-blue** `#00adef` — strategically re-deployed from the EQ electric program across the entire brand surface so it functions as the interactive accent where other automotives use red or yellow. The silver-blue appears on primary CTA fills, hover-state link colors, EQ-content highlights, and selected-state indicators. Body text is never silver-blue. Backgrounds are never silver-blue. When it does appear, it carries the cool authority of brushed German metal under showroom lighting.

Section rhythm alternates between full-bleed cinematic dark hero bands and tighter editorial dark bands holding spec callouts and feature comparisons. White editorial bands appear inside scoped contexts only — the configurator, dealer locator, owners portal — where data density and clarity outweigh atmosphere. The white never dominates; it's a contextual surface, not a theme.

Typography runs **MBCorpo Title** for display sizes and **MBCorpo Text** for body — a custom Daimler-commissioned cut by Konst & Teknik (Stockholm) released around 2020 to replace the older "Daimler CS" typeface. MBCorpo carries subtle humanist proportions with geometric construction; weight 400 dominates display (never bold), weight 500 powers CTAs and uppercase labels. Tracked uppercase navigation (`0.8px`) and CTA labels (`1.4px`) are the German-design-heritage tell — Bauhaus/Ulm School discipline elevated to flagship-luxury voice. Body copy runs at 14px (smaller than competitor defaults at 16) — German-engineering density inside a luxury context.

The three-pointed star is non-negotiable chrome. Top-left of every nav, watermarked over hero photography, embossed in the closing footer. The star is the brand. Everything else — typography, color, photograph — is in service of the star.

**Key Characteristics:**
- Pure-black `#000000` canvas — refuses near-blacks; the absolute black is the luxury-flagship signal
- Single chromatic voltage: silver-blue `#00adef` — the EQ hue strategically deployed brand-wide
- Three-pointed star center-top in nav, watermarked over photography — non-negotiable chrome
- Custom MBCorpo Title (display) + MBCorpo Text (body) typeface family — Daimler-commissioned 2020
- Display copy at weight 400 — never bold display headlines
- Tracked uppercase nav (`0.8px`) and CTA labels (`1.4px`) — Bauhaus discipline, flagship voice
- Full-bleed cinematic photography in dark hero bands as primary visual depth
- Body copy at 14px default — engineering density inside luxury context
- Underline-only text inputs (no box) — luxury-form convention
- 8px CTA radius — disciplined, not pill, not fully sharp

## 2. Color Palette & Roles

### Primary
- **Pure Black** (`#000000`): The canvas. Mercedes refuses near-blacks. Absolute black is the luxury-flagship voice signal.
- **Pure White** (`#ffffff`): Display text, CTA secondary fill, button-secondary background — the voice rising through the cinema.
- **Silver-Blue** (`#00adef`): The single high-voltage chromatic moment. Primary CTA fill, hover-state links, EQ-content highlights, selected indicators.

### Brand & Dark
- **Silver-Blue Hover** (`#0095d0`): Press state — slight saturation drop on click.
- **Silver-Blue Active** (`#007fb3`): Deep press feedback.
- **Silver-Blue Soft** (`#d4f1fc`): Selected-tab background, badge tint on light, very-soft brand surface.
- **Silver-Blue Deep** (`#003d5b`): Used in EQ-program gradient bands (`linear-gradient(180deg, #003d5b, #00adef 64%)`).

### Accent
- **AMG Red** (`#cc0000`): Reserved for AMG sub-brand contexts — track content, performance callouts, GT-class highlights. Never appears outside AMG context.
- **AMG Yellow** (`#fdca00`): Reserved for AMG F1 program (Lewis Hamilton, Petronas livery callouts). Race-specific.
- **Maybach Rose** (`#ddc090`): Reserved for Maybach sub-brand champagne contexts.
- No additional saturated brand colors. Mercedes deliberately refuses chromatic variety; the sub-brands carry their own scoped accents.

### Interactive
- **Link** (`#ffffff`): Inline body links inherit ink + underline.
- **Link Hover** (`#00adef`): Silver-blue shift on hover for inline links inside body copy.
- **Button Primary** (`#00adef`): Primary CTA fill.
- **Button Hover** (`#0095d0`): Press state.
- **Disabled** (`#5a5a5a`): Faint — disabled CTAs and form fields.

### Neutral Scale
- **Ink White** `#ffffff` — display, headings, primary text on dark canvas
- **Body Strong** `#ffffff` — same as ink (Mercedes uses identical hex for both roles)
- **Body Default** `#a8a8a8` — running paragraph text on dark canvas
- **Muted** `#7a7a7a` — captions, photo metadata on dark
- **Faint** `#5a5a5a` — disabled, footer secondary on dark
- **Hairline** `#2a2a2a` — 1px divider on dark
- **Surface Strong** `#2a2a2a` — heavier panel on dark (rare)
- **Surface** `#1a1a1a` — feature cards, spec panels on dark — one tier above canvas
- **Bg Elevated** `#0a0a0a` — subtle near-black above canvas

### Surface & Borders
- **bg** is `#000000` pure black — the canonical canvas.
- **bg-elevated** `#0a0a0a` is a barely-perceptible tier above bg, used for nested surfaces.
- **surface** `#1a1a1a` is the feature-card background — clearly elevated from canvas without competing.
- **bg-light** `#ffffff` for scoped editorial bands only (configurator, dealer, owners).
- **border** is `#2a2a2a` 1px on dark; `#d8d8d8` 1px on light.
- **border-soft** `#1a1a1a` (same hex as surface) for the softest dividers — visible only as a single-pixel tonal step.

### Shadow Colors
- Mercedes uses **minimal shadow tiers** on the dark canvas:
  - **Hover Card**: `rgba(0,0,0,0.3) 0 8px 24px` — visible on hovered feature cards (the dark canvas allows higher shadow alpha).
  - **Modal**: `rgba(0,0,0,0.4) 0 32px 64px -16px` — single deep tier for dialogs.
  - **Focus Ring**: `0 0 0 2px #00adef` (dark) / `0 0 0 2px #000000` (light).
- Most depth comes from photographic lighting and surface brightness steps (`#000000` → `#1a1a1a` → `#2a2a2a`), not from drop-shadow tiers.

### Semantic
- **Success** (`#00a651`): Confirmation states — order placed, build saved, dealer-contact submitted.
- **Warning** (`#ffa500`): Validation warnings on configurator.
- **Danger** (`#cc0000`): Form errors — shares AMG red hex deliberately. Sub-brand red and danger are visually identical.
- **Info** (`#00adef`): Info badges, callout backgrounds — shares the brand silver-blue.

## 3. Typography Rules

### Font Family
- **Display**: `MBCorpo Title` — the Daimler-commissioned display cut, originally released 2020 by Konst & Teknik (Stockholm). Geometric construction with subtle humanist terminals; engineered for high-impact display.
- **Body**: `MBCorpo Text` — the body companion to MBCorpo Title, with adjusted x-height and stroke contrast for paragraph reading at 14px default.
- **Fallback chain**: `"Daimler CS", "Helvetica Neue", Arial, sans-serif` — Daimler CS is the legacy Mercedes typeface (replaced 2020 but still licensed for fallback).
- **Mono companion**: `SF Mono / Menlo / Consolas` — appears only on developer or technical-spec pages (rare).
- **OpenType features**: Default ligatures only. No tabular figures called out — MBCorpo's natural figures align well enough in spec tables. No `ss01` or alternate sets.
- **No italics** — Mercedes brand voice is always upright.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Mega | MBCorpo Title | 88 | 400 | 1.05 | -0.88px | — | Homepage hero h1 — model name over cinema photograph |
| Display XL | MBCorpo Title | 64 | 400 | 1.10 | -0.64px | — | Subsidiary heroes, model-line headlines |
| Display Lg | MBCorpo Title | 48 | 400 | 1.15 | -0.48px | — | Section heads, feature band headlines |
| Display Md | MBCorpo Title | 32 | 400 | 1.25 | -0.16px | — | Sub-section heads, card titles |
| Display Sm | MBCorpo Title | 24 | 500 | 1.30 | normal | — | Component titles, navigation flyout heads |
| Title Md | MBCorpo Text | 18 | 700 | 1.35 | normal | — | Card titles, list section labels |
| Title Sm | MBCorpo Text | 16 | 700 | 1.40 | normal | — | Small section titles |
| Body Lg | MBCorpo Text | 18 | 400 | 1.55 | normal | — | Editorial body, intro paragraphs |
| Body | MBCorpo Text | 14 | 400 | 1.55 | normal | — | Default running text — Mercedes uses 14 as default body |
| Body Sm | MBCorpo Text | 12 | 400 | 1.50 | normal | — | Footer body, fine print |
| Caption | MBCorpo Text | 11 | 400 | 1.45 | normal | — | Photo captions |
| Eyebrow | MBCorpo Text | 11 | 500 | 1.40 | 1.6px | — | Section eyebrows above display heads — uppercase |
| Button | MBCorpo Text | 14 | 500 | 1.00 | 1.4px | — | CTA labels — uppercase, generous tracking |
| Nav Link | MBCorpo Text | 13 | 500 | 1.40 | 0.8px | — | Top-nav menu items — uppercase |
| Spec Value | MBCorpo Title | 64 | 400 | 1.05 | -0.64px | — | Engine spec values |
| Spec Label | MBCorpo Text | 11 | 500 | 1.40 | 1.6px | — | Spec metric labels — uppercase |
| Code | SF Mono | 12 | 400 | 1.50 | normal | — | Rare — developer surfaces |

### Principles
- **Display weight stays at 400.** MBCorpo Title carries enough geometric presence at regular weight; bolding it would feel shouted. Mercedes is flagship-confident, not announce-y.
- **Negative letter-spacing on display only.** -0.16px to -0.88px on display sizes; body stays at normal. The compression is a magazine-cover convention.
- **Tracked uppercase on CTAs (`1.4px`) and nav (`0.8px`).** German design heritage — Bauhaus/Ulm School discipline. CTA labels render uppercase; sentence-case is reserved for body links.
- **Eyebrow labels above display heads are uppercase + tracked + silver-blue.** Section context cue — `eyebrow 11/500 1.6px uppercase silver-blue`.
- **Body default is 14px.** Smaller than competitor defaults (Apple 17, Porsche 16) — German engineering density inside a luxury context.
- **No italics, no decorative weights.** Voice is always upright.
- **MBCorpo licensed.** Open-source substitute: **Inter** at 400 with `-1%` letter-spacing for display, **Inter** at 500 uppercase with `1.4px` tracking for CTAs.

## 4. Component Stylings

### Buttons

All primary surface buttons use **8px border-radius** — the disciplined corner that sits between Ferrari's 0px sharp and Porsche's 12px softened.

**Primary (Silver-Blue)** — the singular high-voltage action:
- Background `#00adef`, text `#ffffff`, font `MBCorpo Text 14/500 1.4px uppercase`
- Padding `14px 32px`, height `48px`, border-radius `8px`, no border
- Transition `background-color 200ms ease`
- Hover: background `#0095d0` (color-only, no transform)
- Active: background `#007fb3`
- Use case: Configure, Schedule a Test Drive, Find a Dealer

**Secondary on Dark (White)** — primary action when silver-blue is reserved:
- Background `#ffffff`, text `#000000`, same dimensions and typography
- Use case: secondary primary action on dark cinema bands

**Outline on Dark** — alternative action on dark hero band:
- Background transparent, text `#ffffff`, border `1px solid #ffffff`
- Padding `13px 31px` (1px less to compensate for border), height `48px`
- Same `MBCorpo Text 14/500 1.4px uppercase` typography
- Hover: background `rgba(255,255,255,0.06)` fill
- Use case: tertiary CTA paired with primary on hero band

**Outline on Light** — alternative on white editorial band:
- Background transparent, text `#000000`, border `1px solid #000000`
- Same dimensions and typography
- Use case: alternative CTA on configurator and dealer surfaces

**Text** — inline editorial actions:
- Background transparent, text `#ffffff`, no border
- Same `MBCorpo Text 14/500 1.4px uppercase`
- Decoration: animated arrow indicator (→) appears on hover, sliding in from the right
- Use case: "Discover", "Read More" inside body copy

### Hero Bands

**Cinema (default hero)** — full-bleed cinematic photograph:
- Background `#000000` underneath, but the photograph fills the viewport edge-to-edge at 100vh
- Eyebrow above headline: `MBCorpo Text 11/500 1.6px uppercase silver-blue` ("THE NEW S-CLASS")
- Display headline floats over the photograph in `MBCorpo Title 88/400 -0.88px` pure white
- One silver-blue primary + one outline-on-dark secondary, side-by-side on desktop
- Zero padding — the photo fills edge-to-edge

**Light Editorial** — white-canvas hero variant:
- Background `#ffffff`, text `#000000`
- Headline in `MBCorpo Title 64/400 -0.64px`
- Padding `96px 48px`
- Used for owners portal, configurator entry, dealer locator

### Cards

**Feature Card (Dark)** — image-first dark surface card:
- Background `#1a1a1a`, text `#ffffff`, radius `12px`, padding `32px`
- Image fills top edge-to-edge; title `display-md 32/400 -0.16px` and body sit beneath
- Hover: `rgba(0,0,0,0.3) 0 8px 24px` shadow fades in over 240ms; card lifts 4px
- Use case: Models grid, AMG performance grid, EQ-content cards

**Feature Card (Light)** — white-canvas variant:
- Background `#ffffff`, text `#000000`, border `1px solid #d8d8d8`, radius `12px`, padding `32px`
- Use case: configurator option cards, dealer cards

### Spec Surfaces

**Spec Cell** — engineering-spec callout:
- Transparent background
- Value in `MBCorpo Title 64/400 -0.64px` (white on dark, black on light)
- Label below in `spec-label 11/500 1.6px uppercase`
- Padding `32px 0`
- Use: hp, top speed, 0-100 km/h, range, charging time

**CTA Band Dark** — pre-footer band:
- Background `#000000`, centered display headline `MBCorpo Title 48/400 -0.48px`
- Single silver-blue primary CTA centered below
- Padding `96px` vertical

### Forms & Inputs

**Text Input on Dark** — luxury underline-only input:
- Background transparent, text `#ffffff`
- No border-x, no border-top — only `border-bottom: 1px solid #5a5a5a`
- Radius `0` (the underline IS the input frame)
- Padding `12px 0`, height `48px`
- Font `MBCorpo Text 14/400`
- Focus: border-bottom shifts to `#00adef`; floating label rises and shrinks to `eyebrow 11/500`
- This underline-only convention is a luxury form signature — the input doesn't feel like a software box

**Text Input on Light** — same underline-only convention on white editorial bands

### Tags & Badges

**Badge Pill** — small uppercase pill:
- Background `rgba(0, 173, 239, 0.15)` (silver-blue 15% alpha), text `#00adef`, radius `9999px`
- Padding `4px 12px`, font `eyebrow 11/500 1.6px uppercase`
- Use: "EQ", "AMG", "Maybach" sub-brand callouts; "New", "Concept" status

### Navigation

**Top Nav (Dark)** — default nav on every page:
- Background `#000000`, text `#ffffff`, height `72px`, border-bottom `1px solid #2a2a2a`
- Layout: three-pointed star top-left (40px tall), horizontal menu (Models / Owners / Shopping / Brand / Innovation) center, utility icons (search, language, account) right
- Menu items render in `MBCorpo Text 13/500 0.8px uppercase`
- Hover: silver-blue 1px underline grows beneath active item; star rotates 22.5° on hover

### Footer

**Footer Dark** — closing dark footer on every page:
- Background `#000000`, text `#7a7a7a`, border-top `1px solid #2a2a2a`
- 4-column link list at desktop covering Models / Owners / Brand / Connect
- Padding `64px 48px`
- Three-pointed star embossed centered at the very top above link columns

## 5. Layout Principles

### Spacing System
- **Base unit:** 4px.
- **Scale:** `4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128`.
- **Section padding:** 96px for major bands; 128px reserved for the homepage hero photo band.
- **Card internal padding:** 32px for feature cards.
- **Gutters:** 24px between cards in 3-up grids; 32px in 2-up hero splits.

### Grid & Container
- Max content width: **1440px** on editorial bands. Hero photography goes full-bleed.
- Editorial body: 12-column grid.
- Feature card grids: 2-up at desktop for hero splits, 3-up for benefit grids, 4-up for model line tiles.
- Footer: 4-column at desktop.

### Whitespace Philosophy
Generous flagship-luxury pacing. Cinematic hero photography occupies viewport-height canvases. Below them, body sections sit in tighter editorial layouts on dark canvas with disciplined density. The alternation between cinema-bands (atmosphere) and editorial-bands (data) creates magazine-spread pacing. White editorial bands (configurator, dealer locator) carry tighter density than the dark cinema bands; the contrast in density itself signals context shift.

### Section Cadence
The homepage rhythm: cinema-band → editorial-band → cinema-band → spec/feature-band → AMG-or-EQ-spotlight → CTA-band-dark → footer-dark. Each section's role is signalled by its background color + photography choice before the content even renders. Light editorial bands appear only inside scoped contexts (configurator, dealer, owners portal).

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|------|-------|-------|-----|
| None | `none` | 0 | Spec table cells, hero photo containers, underline-only inputs |
| Tight | `xs` | 2 | Decorative chip elements |
| Standard | `sm` | 4 | Text-box inputs (rare; underline-only is preferred) |
| Comfortable | `md` | 6 | Secondary cards, compact UI |
| Default CTA | `lg` | 8 | All primary/secondary/outline buttons — the brand corner |
| Card | `xl` | 12 | Primary feature cards |
| Photo Card | `xxl` | 16 | Photo-led model cards |
| Pill | `pill` | 9999 | Avatar plates, badge pills only |

The **8px CTA radius** sits between Ferrari's 0px (luxury-precision sharp) and Porsche's 12px (consumer-friendly relaxed). Mercedes's 8px is **disciplined-flagship** — corner enough to read as engineered, not so much that it reads as soft consumer-tech. There is no compound-radius geometry on the site.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (Flat) | `#000000` canvas, no shadow | Body bands, footer, content surfaces |
| 1 (Card) | `#1a1a1a` background, no border, no shadow | Feature cards, default cards |
| 2 (Hover Card) | `rgba(0,0,0,0.3) 0 8px 24px` shadow + 4px translateY | Hovered feature card |
| 3 (Light Band) | `#ffffff` background | Configurator, dealer locator, owners portal |
| 4 (Modal) | `rgba(0,0,0,0.4) 0 32px 64px -16px` | Dialogs, configurator save |
| 5 (Photographic) | Full-bleed cinema imagery | Hero band, AMG track sequences — depth via lens, not chrome |

### Shadow Philosophy
Mercedes uses minimal shadow tiers — depth comes primarily from photographic lighting (the hero photo carries its own depth from cinematography) and surface brightness steps (`#000000` → `#0a0a0a` → `#1a1a1a` → `#2a2a2a`). The dark canvas allows higher shadow alpha (`0.3` rather than the `0.08` typical on light canvases) — when shadows do appear, they read clearly without dominating.

### Decorative Depth
- **Full-bleed cinematic photography** is the brand's primary depth treatment.
- **EQ gradient bands** `linear-gradient(180deg, #003d5b, #00adef 64%)`: silver-blue gradient used inside electric-program bands.
- **Surface brightness steps** carry the structural elevation.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — material-style ease for most micro-interactions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — stronger entrance for cinema bands and section reveals
- **Flagship**: `cubic-bezier(0.65, 0, 0.35, 1)` — slow swing used on hero parallax and 800ms count-ups

### Duration Buckets
- **Fast** (150ms): button background-color transitions, link underline-grow
- **Standard** (240ms): card hover-lift, shadow fade-in, modal entrance
- **Slow** (400ms): section entrance fades, hero band reveals
- **Cinema** (800ms): spec value count-ups, hero parallax scroll-coefficient

### Per-Component Micro-States
- **Button Primary (Silver-Blue)** — hover: background-color transitions to `#0095d0` over 150ms. No transform. Active: background drops to `#007fb3`.
- **Button Outline** — hover: background fills to `rgba(255,255,255,0.06)` (dark) or `rgba(0,0,0,0.04)` (light) over 150ms.
- **Feature Card** — hover: 4px translateY lift + `rgba(0,0,0,0.3) 0 8px 24px` shadow fades in over 240ms.
- **Three-Pointed Star** — hover: rotates 22.5° over 360ms ease-emphasized.
- **Link** — hover: underline transitions from invisible to 1px solid + color shifts to silver-blue over 150ms.
- **Nav Item** — hover: 1px silver-blue underline grows beneath the active item over 150ms.
- **Spec Counter** — first-paint into-view: count-up animation from 0 to final value over 800ms ease-flagship.
- **Text Input (underline-only)** — focus: border-bottom shifts from `#5a5a5a` to `#00adef` over 240ms; floating label rises from inside the input to above-the-line over 240ms.

### Page Transitions
Page-to-page transitions: 240ms cross-fade between hero photographs. Internal scroll-into-view triggers fade-up entrances on cinema bands (400ms emphasized). The hero photograph holds a `0.4` parallax coefficient on scroll — moving slower than the foreground content.

### Reduced Motion Strategy
Respects `prefers-reduced-motion: reduce`. Under reduced motion:
- Hero parallax disabled
- Three-pointed-star hover rotation disabled
- Spec count-ups become static (final value renders immediately)
- Card hover-lift becomes shadow-only fade (no translateY)
- All scroll-triggered animations collapse to opacity transitions over 200ms

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)
- **Text on Canvas**: `#ffffff` on `#000000` = 21.0:1 — AAA at all sizes
- **Body on Canvas**: `#a8a8a8` on `#000000` = 7.6:1 — AAA at body sizes
- **Muted on Canvas**: `#7a7a7a` on `#000000` = 4.6:1 — AA at body sizes
- **Text on Brand**: `#ffffff` on `#00adef` = 3.0:1 — fails AA Normal at body sizes; reserved for AA Large (18px+) buttons (interactive context where 3:1 is acceptable)
- **Black on Brand**: `#000000` on `#00adef` = 7.0:1 — AAA — used as fallback button text when contrast is critical
- **Text on Light**: `#000000` on `#ffffff` = 21.0:1 — AAA

### Focus Indicators
- **Ring color**: `#00adef` (silver-blue) on dark; `#000000` on light
- **Ring style**: `2px solid` at `2px` offset from element's outer edge
- **Focus-visible only**: ring appears only on keyboard focus, not mouse-click focus
- **Underline-only inputs** receive ring as a thicker `2px solid #00adef` border-bottom on focus, replacing the `1px #5a5a5a` default

### ARIA Patterns
- **Combobox** (model search, dealer locator): `role="combobox"` with `aria-expanded`, `aria-controls`, `aria-activedescendant`. Listbox panel uses `role="listbox"` with `aria-selected` on options.
- **Dialog** (configurator save, dealer contact, sign-in): `role="dialog"` with `aria-modal="true"`, `aria-labelledby` pointing to the dialog title, focus trap on open.
- **Tabs** (model trim selector, configurator step navigation): `role="tablist"` with `aria-selected` on the active tab. Arrow-key navigation.
- **Carousel** (homepage hero, AMG gallery): exposed as `role="region"` with `aria-roledescription="carousel"`. Each slide is `role="group"`.

### Keyboard Nav Order
Tab order: skip-to-content link → three-pointed-star (home link) → primary nav (Models, Owners, Shopping, Brand, Innovation) → utilities (search, language, account) → hero CTAs (primary first, then outline) → editorial body content top-to-bottom → footer columns → cookie banner if present.

### Screen Reader Hints
- The three-pointed star carries `aria-label="Mercedes-Benz home"` rather than alt-text, since it serves as the home link.
- Spec values carry `aria-label="3.4 seconds, 0 to 100 kilometers per hour"` for full unit context.
- Photo captions are wrapped in `<figcaption>` inside `<figure>`.
- Decorative cinema photography uses `aria-hidden="true"`.
- AMG and EQ sub-brand badges expose their full intent: `aria-label="AMG performance variant"`.

### Reduced Motion Handling
`@media (prefers-reduced-motion: reduce)` overrides scroll-triggered transforms, parallax, count-ups, and the three-pointed-star rotation. Documented in §8.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 640px | Hero h1 88→32px; cinema photograph crops vertically; feature card grid 1-up; nav collapses to hamburger; spec cells 1-up |
| Tablet | 640–1024px | Hero h1 64px; feature card grid 2-up; nav still hamburger; spec cells 2-up |
| Desktop | 1024–1280px | Hero h1 88px; feature card grid 3-up; horizontal nav appears; spec cells 4-up |
| Wide | > 1280px | Editorial body content caps at 1440px; hero photography continues full-bleed; section padding increases to 128px |

### Touch Targets
- Primary CTA at 48px height — exceeds WCAG AAA (44 × 44).
- Nav items render with 24px vertical padding for an effective 56px tap area on mobile hamburger menu.
- Star at 40px in the desktop nav, scales to 32px on mobile while preserving 48px tap area.

### Collapsing Strategy
- **Top nav** switches to hamburger below 1024px; the three-pointed star remains top-left at 32px.
- **Hero photograph** reframes per breakpoint via art direction.
- **Feature card grid**: 4-up → 3-up → 2-up → 1-up.
- **Spec cells**: 4-up at desktop, 2-up at tablet, 1-up at mobile.
- **Footer**: 4-column at desktop, accordion-collapsed at mobile.

### Image Behavior
- Hero photography uses `<picture>` with mobile-cropped + desktop-wide art direction.
- AVIF with WebP fallback and JPEG floor.
- All photography uses `loading="lazy"` except the homepage hero (eager).

### Container Queries
Used selectively on configurator pages where the spec panel reflows based on container width.

## 11. Content & Voice

### Tone
**Flagship-luxury, declarative, German-precise.** The voice reads like the chief designer narrating a model launch — measured, confident, intentional. Sentences are short on the homepage and longer on heritage pages. Italian (Ferrari) and English-romantic (Aston Martin) flourishes are absent. The brand voice is engineered. There is no "innovative", no "revolutionary" — those words are beneath the brand.

### Microcopy Patterns
- **Buttons**: action-verb + noun, uppercase. "CONFIGURE", "SCHEDULE A TEST DRIVE", "FIND A DEALER", "DISCOVER THE RANGE". Never "Click here", never "Learn more about our..."
- **Eyebrows**: uppercase context cue above display heads. "THE NEW S-CLASS", "MERCEDES-AMG GT", "THE EQ FAMILY".
- **Error message recipe**: `[What went wrong]. [What to do.]` — e.g. "We couldn't reach our servers. Please try again in a moment."
- **Success confirmations**: terse. "Your build is saved." "Your appointment is confirmed." No exclamation marks.
- **Form labels**: capitalized noun phrases that float above the underline-only input. "Email Address", "Phone Number", "Preferred Dealer".

### Empty States
- **No results**: "No models match your filters. Try widening your search or browse the full lineup."
- **Saved build empty**: "Your saved configurations will appear here. Begin a new configuration to save it."
- **Dealer locator no results**: "No dealers within 100 miles. Try a wider radius or browse our authorized service network."

### CTA Verb Conventions
- **CONFIGURE** — the primary verb on every model page (not "Build" or "Customize")
- **DISCOVER** — secondary verb for editorial content (not "Explore" or "Learn More")
- **SCHEDULE A TEST DRIVE** — for test-drive (not "Book a test drive")
- **FIND A DEALER** — for dealer locator
- **READ MORE** — for editorial articles
- **SIGN IN** — for owner/account pages (never "Login" — Mercedes uses two words)

## 12. Dark Mode & Theming

Mercedes-Benz is **dark-by-default**. The site never offers a user-facing light/dark toggle. The light editorial bands (configurator, dealer locator, owners portal) are scoped contextual surfaces — not a "light mode." The site never inverts globally. The three-pointed star, the silver-blue CTA, and the canvas all stay constant.

When light editorial bands appear inside dark pages, the token swap is local and predictable:
- `bg`: `#000000` → `#ffffff`
- `text`: `#ffffff` → `#000000`
- `text-body`: `#a8a8a8` → `#3a3a3a`
- `border`: `#2a2a2a` → `#d8d8d8`
- `surface`: `#1a1a1a` → `#f5f5f5`
- `brand` and `on-brand` stay unchanged: silver-blue CTAs render identically on both grounds

## 13. Lineage & Influences

Mercedes-Benz's digital surface inherits the flagship-luxury cinema of S-Class print campaigns more than the spec-sheet density of typical OEM sites. The pure-black canvas borrows from luxury fashion (Bottega Veneta, Chanel) where black signals flagship rather than mass-market. The silver-blue `#00adef` is a strategic re-deployment of the EQ electric-program hue across the entire brand surface — it functions as the interactive voltage where competitors use red (Ferrari, Honda) or yellow (Renault).

Tracked uppercase navigation (`0.8px`) and CTA labels (`1.4px`) borrow from German design heritage — Bauhaus, Ulm School of Design, the same lineage that gave us Braun and Vitsoe. Disciplined, engineered, intentional. The full-bleed cinematic photographic-hero pattern is borrowed from Apple-era product launches; the magazine-pacing rhythm from Vogue and Wallpaper*.

What it rejects: ornamental gradients (except in scoped EQ-content), warm color temperatures, casual sentence-case CTAs, anything that competes with the three-pointed-star authority.

**Named influences:**
- Bauhaus / Ulm School of Design — disciplined uppercase tracking, geometric typography (https://en.wikipedia.org/wiki/Ulm_School_of_Design)
- Bottega Veneta / Chanel — luxury-fashion black canvas as flagship signal (https://www.bottegaveneta.com)
- Apple product pages — full-viewport cinematic hero photography (https://www.apple.com)
- Vogue / Wallpaper* magazine — editorial pacing on flagship products (https://www.vogue.com)
- BMW iX brand voice — EV-program color discipline borrowed back to the parent brand

## 14. Do's and Don'ts

### Do
- Reserve silver-blue `#00adef` for primary CTAs, hover-state links, EQ-content highlights, and selected indicators — used scarcely.
- Use pure black `#000000` as canvas — not near-black, not warm-black. The absolute black is the luxury-flagship signal.
- Render CTA labels uppercase in MBCorpo Text 14/500 with `1.4px` tracking.
- Render nav items uppercase in `13/500 0.8px tracking`.
- Place an uppercase silver-blue eyebrow above every display headline ("THE NEW S-CLASS").
- Use MBCorpo Title at weight 400 for display sizes — never bold display headlines.
- Pair every cinema hero with a full-bleed photograph — the photograph IS the depth.
- Use 8px CTA corners — the brand's disciplined-flagship signature.
- Use underline-only inputs (no box) — luxury-form convention.
- The three-pointed star center-top in nav, watermarked over photography — non-negotiable.

### Don't
- Don't introduce a saturated brand color other than silver-blue, AMG red (scoped), and Maybach champagne (scoped).
- Don't use near-black or warm-black canvas — Mercedes uses `#000000` absolute black.
- Don't bold display copy. MBCorpo Title at 400 carries flagship presence.
- Don't use sentence-case CTA labels. Uppercase + `1.4px` tracking is the brand voice.
- Don't use box-style text inputs on luxury surfaces. Underline-only is the convention.
- Don't add ornamental gradients outside scoped EQ-content bands.
- Don't compress the 96px section rhythm. The whitespace is part of flagship pacing.
- Don't use AMG red or AMG yellow outside AMG sub-brand contexts.
- Don't translate "CONFIGURE" to "BUILD" or "CUSTOMIZE" — the brand verb is "CONFIGURE".
- Don't use 0px sharp corners. Mercedes is 8px disciplined, not Italian-Modernist sharp.
- Don't add italic or decorative type. MBCorpo is always upright.

## 15. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: `#00adef` (Silver-Blue)
- Background: `#000000` (Pure Black Canvas)
- Surface: `#1a1a1a` (Canvas-Elevated)
- Headings: `#ffffff` (Ink White)
- Body text: `#a8a8a8` (Body Default)
- Muted: `#7a7a7a`
- Border: `#2a2a2a` (Hairline on dark)
- CTA hover: `#0095d0` (Silver-Blue Hover)
- Light band bg: `#ffffff`
- Focus ring: `#00adef` 2px on dark / `#000000` 2px on light

### Example Component Prompts
- "Create a Mercedes-Benz hero band with full-bleed cinematic photography of an S-Class at twilight, 100vh tall on pure-black `#000000` canvas. Above the headline, an uppercase silver-blue eyebrow 'THE NEW S-CLASS' in MBCorpo Text 11/500 with 1.6px tracking. The headline 'A Class of Its Own.' floats over the photograph in MBCorpo Title 88px weight 400 with -0.88px letter-spacing in pure white. Below it, two side-by-side CTAs: a silver-blue `#00adef` 'CONFIGURE' button (MBCorpo Text 14/500 1.4px uppercase, 14×32 padding, 48px tall, 8px corners) and a transparent outline-on-dark 'DISCOVER' button (1px white border, same dimensions)."
- "Design a Mercedes feature card on `#1a1a1a` surface inside a dark band: 12px radius, no border, 32px padding. 16:9 photograph at top edge-to-edge, then a title in MBCorpo Title 32/400 -0.16px white, 16px gap, body copy in MBCorpo Text 14/400 `#a8a8a8`, 24px gap, and a 'DISCOVER →' text button in 14/500 1.4px uppercase with the arrow indicator sliding in on hover. On card hover: 4px translateY lift with `rgba(0,0,0,0.3) 0 8px 24px` shadow over 240ms."
- "Build a Mercedes underline-only text input: transparent background, no border-x or border-top, only `border-bottom: 1px solid #5a5a5a`. Floating label 'Email Address' begins inside the input in MBCorpo Text 14/400 `#7a7a7a`; on focus, the label rises and shrinks to eyebrow 11/500 1.6px uppercase silver-blue, and the border-bottom shifts from `#5a5a5a` to `#00adef`. 12×0 padding, 48px tall, no radius."
- "Build a Mercedes spec cell: transparent background, 32px vertical padding, value in MBCorpo Title 64px weight 400 with -0.64px tracking pure white ('523'), label below in MBCorpo Text 11/500 with 1.6px uppercase tracking ('HORSEPOWER'). Group four spec cells in a 4-up row at desktop."
- "Build a Mercedes top nav: 72px tall on `#000000`, three-pointed star top-left at 40px (rotates 22.5° on hover over 360ms). Horizontal menu (MODELS / OWNERS / SHOPPING / BRAND / INNOVATION) center in MBCorpo Text 13/500 with 0.8px uppercase tracking. Utility icons (search, language, account) far right. 1px solid `#2a2a2a` border-bottom. On hover over a nav item, a silver-blue 1px underline grows from invisible to full width over 150ms."
- "Design a Mercedes pre-footer CTA band: pure-black `#000000` background, centered display headline 'Begin Your Journey.' in MBCorpo Title 48/400 -0.48px white, 96px vertical padding. Single silver-blue 'CONFIGURE YOUR MERCEDES' CTA centered below in 14/500 1.4px uppercase, 8px corners, 48px tall."

### Iteration Guide
1. Focus on ONE component at a time. Reference its YAML key (`button-primary`, `hero-band-cinema`).
2. Variants live as separate entries inside `components:` rather than as nested modifiers.
3. CTAs default to 8px corners — disciplined-flagship. Never 0px (Ferrari), never 12px (Porsche).
4. Use color tokens (`brand`, `text`, `surface`) — never inline hex on multiple components.
5. Hover states on CTAs change color only — feature cards may lift 4px with shadow.
6. MBCorpo Title 400 for display, MBCorpo Text 400 for body, 500 for CTAs/eyebrows. Uppercase + tracking on CTAs and nav.
7. Silver-blue stays scarce — primary CTAs, hover-state links, EQ-content highlights only.
8. Use the explicit spacing ladder (4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128).
9. Three-pointed star is the chrome — center-top in nav, watermarked over hero photo, embossed in footer.
