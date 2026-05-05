---
name: Ferrari
tagline: Cinematic editorial in near-black — Rosso Corsa restraint, FerrariSans 500, and full-bleed cavallino photography.
author: webdesignhot
source_url: https://www.ferrari.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [automotive, saas]
tags: [luxury, dark, sans, photography, cinematic, editorial]
preview_swatch: ['#181818', '#da291c', '#ffffff']
related: [tesla, bmw, apple]
description: 'Ferrari''s site reads as cinematic editorial — closer to a luxury-magazine spread than a typical OEM. The base canvas is near-black `#181818` (never pure black; it carries the slight warmth of a darkened studio backdrop) holding pure white display type; white-canvas bands appear only inside specific editorial contexts (preowned listings, pricing tables, dealer surfaces). The single brand voltage is Rosso Corsa `#da291c` — the iconic Italian racing red — used scarcely on primary CTAs, the Cavallino Rampante mark, and Formula 1 race-position highlights. FerrariSans runs as the single sans family at modest weights — display 500, body 400 — and CTA labels render uppercase with 1.4px tracking. Sharp 0px corners on every CTA, card and band reinforce luxury-automotive precision. The strongest signature is the full-bleed cinematic hero photograph that occupies the viewport top with car photography, model details, or trackside livery — followed by a tighter editorial body layout below.'

colors:
  bg: '#181818'                  # canvas — near-black, slight warmth, never #000
  bg-campaign: '#000000'         # rare deep-black used inside hero photo bleed-zones
  surface: '#303030'             # canvas-elevated — driver cards, livery plates
  surface-card: '#303030'        # primary card surface on dark
  surface-soft-light: '#f7f7f7'  # alternating editorial light band
  surface-strong-light: '#ebebeb'# light-canvas dividers, badges
  surface-light: '#ffffff'       # canvas-light — preowned, pricing
  text: '#ffffff'                # ink — display + emphasis on dark
  text-body: '#969696'           # default running text on dark
  text-strong: '#ffffff'         # body-strong — same as ink
  text-on-light: '#181818'       # default text on light bands
  text-muted: '#666666'          # sub-titles, captions on dark
  text-muted-soft: '#8f8f8f'     # disabled link text
  brand: '#da291c'               # Rosso Corsa — primary CTA, Cavallino, F1 highlights
  brand-active: '#b01e0a'        # press state
  brand-hover: '#9d2211'         # documented; rarely used (no-hover policy)
  brand-gradient-top: '#a00c01'  # linear-gradient(180deg, #a00c01, #da291c 64%) — accent bands
  accent-yellow-hypersail: '#fff200' # Hypersail sailing program — scoped accent
  accent-yellow: '#f6e500'       # focus-ring color, scoped
  on-brand: '#ffffff'            # white text on Rosso Corsa
  on-light: '#181818'            # text on light editorial bands
  on-photo: '#ffffff'            # text overlaid on cinema photography
  border: '#303030'              # hairline on dark — same hex as canvas-elevated
  border-on-light: '#d2d2d2'     # 1px divider on light bands
  border-soft: '#ebebeb'         # lighter divider, light-canvas
  ring: '#f6e500'                # global focus-ring — yellow against dark
  link: '#ffffff'                # inline links inherit ink + underline
  link-hover: '#da291c'          # rare red-shift on hover for inline links
  promo-red: '#da291c'           # promotional callouts ("Configure", "Race Position")
  gradient-dark-top: '#3c3c3c'   # linear-gradient(180deg, #3c3c3c, #030303 64%)
  gradient-dark-bottom: '#030303'# atmospheric darken at section transitions
  success: '#03904a'             # confirmation
  warning: '#f13a2c'             # validation warning (orange-red, distinct from brand)
  info: '#4c98b9'                # info badges, callouts
  danger: '#f13a2c'              # form errors

typography:
  display:
    family: '"FerrariSans", "FerrariSans Display", -apple-system, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 700]
    opentype-features: ['ss01']
  body:
    family: '"FerrariSans", -apple-system, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: []
  mono:
    family: 'SF Mono, Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-mega:    { size: 80, weight: 500, lineHeight: 1.05, tracking: '-1.6px',   family: display, notes: 'Homepage hero h1 — model name over cinema photograph' }
    display-xl:      { size: 56, weight: 500, lineHeight: 1.10, tracking: '-1.12px',  family: display, notes: 'Subsidiary heroes, F1 driver intros' }
    display-lg:      { size: 36, weight: 500, lineHeight: 1.20, tracking: '-0.36px',  family: display, notes: 'Section heads, livery band headline' }
    display-md:      { size: 26, weight: 500, lineHeight: 1.50, tracking: '0.195px',  family: display, notes: 'Sub-section heads' }
    title-md:        { size: 18, weight: 700, lineHeight: 1.20, tracking: 'normal',   family: body,    notes: 'Component titles, card heads' }
    title-sm:        { size: 16, weight: 500, lineHeight: 1.40, tracking: '0.08px',   family: body,    notes: 'List labels' }
    body:            { size: 14, weight: 400, lineHeight: 1.50, tracking: 'normal',   family: body,    notes: 'Default body — paragraph + descriptive copy' }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.50, tracking: 'normal',   family: body,    notes: 'Footer body, fine print' }
    caption:         { size: 12, weight: 400, lineHeight: 1.40, tracking: 'normal',   family: body,    notes: 'Photo captions' }
    caption-uppercase: { size: 11, weight: 600, lineHeight: 1.40, tracking: '1.1px',  family: body,    notes: 'Section labels, badges — uppercase' }
    button:          { size: 14, weight: 700, lineHeight: 1.00, tracking: '1.4px',    family: body,    notes: 'CTA labels — uppercase, generous tracking' }
    nav-link:        { size: 13, weight: 600, lineHeight: 1.40, tracking: '0.65px',   family: body,    notes: 'Top-nav menu items — uppercase' }
    number-display:  { size: 80, weight: 700, lineHeight: 1.00, tracking: '-1.6px',   family: display, notes: 'Race position highlights, spec values' }
    spec-value:      { size: 48, weight: 500, lineHeight: 1.05, tracking: '-0.5px',   family: display, notes: 'Engine spec values' }
    cavallino-mark:  { size: 14, weight: 700, lineHeight: 1.00, tracking: '2px',      family: display, notes: 'Wordmark beneath the rampant horse — uppercase' }
    code:            { size: 13, weight: 400, lineHeight: 1.50, tracking: 'normal',   family: mono }
    code-micro:      { size: 11, weight: 400, lineHeight: 1.40, tracking: 'normal',   family: mono }

radius:
  none: 0          # dominant — every CTA, card, band, hero
  xs: 2            # tight badges (rare)
  sm: 4            # form inputs only
  md: 6            # compact cards (rare)
  lg: 8            # mobile-only collapse cards
  xl: 12           # modal/dialog corners (rare)
  pill: 9999       # avatar plates, badge pills only

spacing:
  base: 4
  scale: [4, 8, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  hero-height: 100vh
  section-padding: 96

components:
  top-nav-on-dark:
    bg: '#181818'
    text: '#ffffff'
    typography: 'FerrariSans 13/600 0.65px uppercase'
    height: 64
    layout: 'Cavallino mark left, primary horizontal menu (Models / F1 / Lifestyle / Owners / Preowned), language picker + utilities right'
    border: 'none'
    shadow: 'none'
  top-nav-on-light:
    bg: '#ffffff'
    text: '#181818'
    typography: 'identical to dark variant'
    height: 64
    notes: 'White-canvas variant for editorial light bands'
  button-primary:
    bg: '#da291c'
    text: '#ffffff'
    padding: '14px 32px'
    height: 48
    radius: 0
    border: 'none'
    font: 'FerrariSans 14/700 1.4px uppercase'
    transition: 'background-color 200ms ease'
    use: 'Configure / Discover / Schedule a Drive'
  button-primary-active:
    bg: '#b01e0a'
    text: '#ffffff'
    notes: 'Press state — slight darken, no scale'
  button-outline-on-dark:
    bg: 'transparent'
    text: '#ffffff'
    border: '1px solid #ffffff'
    padding: '13px 31px'
    height: 48
    radius: 0
    font: 'FerrariSans 14/700 1.4px uppercase'
    use: 'Secondary CTA on dark hero band'
  button-outline-on-light:
    bg: 'transparent'
    text: '#181818'
    border: '1px solid #181818'
    padding: '13px 31px'
    height: 48
    radius: 0
    font: 'FerrariSans 14/700 1.4px uppercase'
    use: 'Secondary CTA on light editorial band'
  button-tertiary-text:
    bg: 'transparent'
    text: '#ffffff'
    font: 'FerrariSans 14/700 1.4px uppercase'
    decoration: 'underline on hover'
    use: 'Inline text actions'
  hero-band-cinema:
    bg: '#181818'
    text: '#ffffff'
    photo: 'full-bleed cinematic, 100vh on desktop'
    headline: 'FerrariSans 80/500 -1.6px'
    cta-arrangement: 'one Rosso Corsa primary + one outline secondary'
    padding: 0
  hero-band-light:
    bg: '#ffffff'
    text: '#181818'
    headline: 'FerrariSans 56/500 -1.12px'
    padding: 96
  livery-band:
    bg: '#da291c'
    text: '#ffffff'
    typography: 'FerrariSans 36/500 -0.36px'
    padding: 96
    notes: 'Full-width Rosso Corsa accent band between dark editorial bands'
  feature-card-photo:
    bg: '#181818'
    text: '#ffffff'
    radius: 0
    notes: 'Image-first card; image fills top edge-to-edge; title + body below'
  feature-card-light:
    bg: '#ffffff'
    text: '#181818'
    radius: 0
    padding: 32
  driver-card:
    bg: '#303030'
    text: '#ffffff'
    radius: 0
    padding: 24
    notes: 'F1 driver portrait + name + race number + team badge'
  preowned-listing-card:
    bg: '#ffffff'
    text: '#181818'
    radius: 0
    padding: 24
    notes: 'Photo top + model + year/mileage + price'
  spec-cell:
    bg: 'transparent'
    text: '#ffffff'
    typography: 'FerrariSans 80/700 -1.6px'
    label: 'caption-uppercase 11/600 1.1px'
    padding: '24px 0'
  race-position-cell:
    bg: 'transparent'
    text: '#da291c'
    typography: '80/700 -1.6px Rosso Corsa'
    notes: 'F1 driver finishing position'
  race-calendar-row:
    bg: 'transparent'
    text: '#ffffff'
    border-bottom: '1px solid #303030'
    padding: '16px 0'
    layout: 'date column left, race name + circuit middle, results right'
  text-input-on-dark:
    bg: '#181818'
    text: '#ffffff'
    border: '1px solid #303030'
    radius: 4
    padding: '14px 16px'
    height: 48
    font: 'FerrariSans 14/400'
  text-input-on-light:
    bg: '#ffffff'
    text: '#181818'
    border: '1px solid #d2d2d2'
    radius: 4
    padding: '14px 16px'
    height: 48
  badge-pill:
    bg: '#303030'
    text: '#ffffff'
    radius: 9999
    padding: '4px 12px'
    font: '11/600 1.1px uppercase'
    notes: 'Only place pill geometry is used'
  newsletter-input-band:
    bg: '#303030'
    text: '#ffffff'
    radius: 4
    padding: 32
    layout: 'inline email input + Rosso Corsa primary CTA'
  cta-band-dark:
    bg: '#181818'
    text: '#ffffff'
    typography: '36/500 -0.36px'
    padding: 96
    cta: 'single Rosso Corsa primary, centered'
  footer-dark:
    bg: '#181818'
    text: '#969696'
    columns: 5
    padding: '64px 48px'
  footer-link:
    bg: 'transparent'
    text: '#969696'
    font: '13/400'
    decoration: 'underline on hover only'

lineage:
  summary: 'Ferrari''s digital surface inherits the editorial restraint of luxury fashion print (Vogue Italia, Wallpaper*) more than the spec-sheet density of typical automotive sites. The cinematic photographic-hero pattern is borrowed from Apple-era product launches; the Rosso Corsa restraint mirrors the way a single accent works on financial-broadsheet covers. The 0px corner radius is shared with Lamborghini and Bugatti — a luxury-automotive precision signal that contradicts the soft consumer-tech vocabulary.'
  influences:
    - name: 'Wallpaper* magazine'
      role: 'editorial pacing, photo-first hero, generous white-on-dark margins'
    - name: 'Vogue Italia'
      role: 'luxury fashion editorial discipline, single-accent restraint'
    - name: 'Apple product pages'
      role: 'full-viewport cinematic hero photography'
    - name: 'Italian Modernist graphic design (Massimo Vignelli)'
      role: 'sharp corners, restrained chromatic vocabulary'
    - name: 'Formula 1 broadcast graphics'
      role: 'race-position number cells, livery callouts'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-cinema: 'cubic-bezier(0.65, 0, 0.35, 1)'
  duration-fast: 150
  duration-standard: 220
  duration-slow: 360
  duration-cinema: 800
  hero-parallax: 'subtle 0.4 scroll-coefficient on hero photograph'
  livery-band-entrance: 'fade-in 360ms ease-emphasized on scroll into view'
  race-position-counter: 'count-up 800ms ease-cinema on first-paint'
  reduced-motion: 'respects prefers-reduced-motion: reduce — parallax disabled, count-ups become static, livery-band entrance becomes opacity-only fade 200ms'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  flat: 'none'
  hover-card: 'rgba(0,0,0,0.10) 0 4px 8px'
  ring: '0 0 0 2px #f6e500'
  notes: 'Ferrari refuses drop-shadow tiers — depth is photographic + brightness-step (canvas → canvas-elevated → canvas-light)'

accessibility:
  contrast-text-on-bg: 14.5             # #ffffff on #181818 — AAA at body sizes
  contrast-body-on-bg: 6.1              # #969696 on #181818 — AA at body sizes
  contrast-text-on-brand: 5.4           # #ffffff on #da291c — AA Normal / AAA Large
  contrast-text-on-light: 14.5          # #181818 on #ffffff — AAA
  focus-ring: '2px solid #f6e500 (Hypersail yellow) at 2px offset'
  reduced-motion-honored: true
  touch-target-min: 48                  # CTA height — exceeds WCAG 44

dark-mode: 'native — Ferrari is dark-by-default. Editorial light bands (preowned listings, pricing tables) are scoped exceptions; there is no separate light-mode swap. The site never inverts.'
---

## 1. Visual Theme & Atmosphere

Ferrari's website is the closest a car manufacturer comes to a luxury-fashion magazine spread. The page opens onto a near-black canvas (`#181818` — slightly warm, never the cold pure-black of consumer electronics) that holds the entire site like a darkened gallery wall. Onto it, a single full-bleed cinematic photograph fills the viewport top — a 296 GTB drifting through Tuscan switchbacks, a Roma Spider on Riviera asphalt, an SF-25 carving through Monza's Curva Grande — and the headline floats over the image's lower third in pure-white FerrariSans at 80px. There are no decorative borders, no gradient overlays competing with the photograph, no chrome announcing itself. The photograph IS the atmosphere.

The colour philosophy is monk-like. White display type, grey body copy (`#969696`), and exactly one chromatic voltage: **Rosso Corsa** `#da291c` — the iconic Italian racing red that has identified Ferrari since 1923. It appears scarcely. Primary CTA fills, the rampant horse, F1 driver-position highlights — never on body text, never on backgrounds, never on decorative elements. When it does appear, it carries the weight of a starting flag dropping — three letters of "299" rendered in number-display 80px Rosso Corsa carry more emotional voltage than entire pages of competitors.

Typography runs **FerrariSans** as a single sans family across every text role. Display sizes hold weight 500 — never bold. Editorial confidence, not bombastic shouting. The cinematic photography is doing the visual heavy-lifting; type doesn't need to compete. Negative letter-spacing on display sizes (`-1.6px` at 80px, `-0.36px` at 36px) creates compressed, magazine-cover headline geometry. CTA labels render in uppercase with `1.4px` tracking and weight 700 — luxury-precision feel, more like an engraved nameplate than a software button. Sharp 0px corners on every CTA, card, and content band reinforce the engineering-precision identity that Italian luxury automotive shares with Swiss watchmaking.

Section rhythm is generous. Cinematic hero photography occupies viewport-height canvases. Below them, body content falls into tighter editorial layouts on `#181818` with tighter density — the alternation between cinema-bands and editorial-bands creates the magazine pacing that carries readers through long pages without fatigue. White-canvas editorial bands appear only inside specific contexts — preowned listings, pricing tables, dealer surfaces — and they are always sandwiched between dark cinema bands so the white never becomes the dominant ground.

**Key Characteristics:**
- Single chromatic voltage: Rosso Corsa `#da291c` for primary CTAs, the Cavallino Rampante, F1 race-position highlights — used scarcely
- Near-black canvas `#181818` — slight warmth, never pure `#000000`
- White-canvas bands only inside editorial contexts (preowned, pricing) — sandwiched between dark cinema bands
- Single sans family: FerrariSans across every text role (display 500, body 400, CTA 700)
- Display weight stays at 500 — never bold display copy
- Sharp 0px corners on every CTA, card, livery band — luxury-automotive precision
- Full-bleed cinematic hero photograph as the page chrome
- CTA labels uppercase with 1.4px tracking — engraved-nameplate geometry
- Hairlines + photographic depth — no drop shadow tiers
- 8px spacing token ladder with named scale (xxxs through super)

## 2. Color Palette & Roles

### Primary
- **Rosso Corsa** (`#da291c`): The iconic Ferrari racing red. Primary CTA fill, Cavallino Rampante mark, F1 driver-position highlights. Used scarcely — its rarity is its voltage.
- **Pure White** (`#ffffff`): Display text, ink, on-brand label, primary text on dark canvas — the voice rising through the cinema.
- **Canvas Near-Black** (`#181818`): Page floor, hero band background, footer, CTA-band-dark surface.

### Brand & Dark
- **Rosso Corsa Active** (`#b01e0a`): Press state — slight saturation drop on click.
- **Rosso Corsa Hover** (`#9d2211`): Documented for completeness; the no-hover policy means this color rarely renders in production.
- **Rosso Corsa Gradient Top** (`#a00c01`): The starting stop in `linear-gradient(180deg, #a00c01, #da291c 64%)` used inside accent bands and hover states.
- **Cavallino Black** (`#000000`): Reserved for the rampant-horse mark when rendered against light backgrounds — pure black ensures the silhouette holds.

### Accent
- **Hypersail Yellow** (`#fff200`): Sub-brand accent reserved for the Bugatti–Ferrari Hypersail sailing program. Never used outside that context.
- **Yellow Focus** (`#f6e500`): Slightly cooler yellow used as the global focus-ring color. Provides high contrast against dark canvas.
- No additional saturated brand colors. Ferrari deliberately refuses chromatic variety.

### Interactive
- **Link** (`#ffffff`): Inline body links inherit ink + are underlined by default.
- **Link Hover** (`#da291c`): Rare red-shift on hover for inline links inside editorial copy.
- **CTA Active** (`#b01e0a`): Pressed state on Rosso Corsa CTAs.
- **Disabled** (`#8f8f8f`): Muted-soft — also the disabled link text.
- **Focus**: 2px solid `#f6e500` ring at 2px offset — yellow against dark canvas creates highest possible contrast.

### Neutral Scale
- **Ink White** `#ffffff` — display, headings, primary text on dark canvas
- **Body Strong** `#ffffff` — same as ink (Ferrari uses the same hex for both roles)
- **Body Default** `#969696` — running text on dark canvas (rgb 150, 150, 150)
- **Muted** `#666666` — sub-titles, captions on dark
- **Muted Soft** `#8f8f8f` — disabled link text
- **Hairline** `#303030` — 1px divider on dark, identical hex to canvas-elevated
- **Canvas Elevated** `#303030` — driver cards, livery photo plates on dark
- **Canvas** `#181818` — page floor (warm near-black)

### Surface & Borders
- **bg** is `#181818` near-black — never pure `#000000`.
- **surface-card** elevation steps to `#303030` — a single tier above canvas, no visible shadow.
- **surface-light** white `#ffffff` — for editorial bands only (preowned, pricing).
- **border** on dark is `#303030` (same as canvas-elevated). The hairline is the elevation.
- **border-on-light** is `#d2d2d2` on white editorial bands.
- **border-soft** `#ebebeb` is a lighter divider on light canvas.

### Shadow Colors
- Ferrari uses **no drop-shadow tiers** in chrome. Depth is achieved through:
  - Photographic depth (lens, lighting, subject framing)
  - Brightness-step (canvas → canvas-elevated → canvas-light)
  - Hairlines (1px `#303030` on dark; 1px `#d2d2d2` on light)
- A single soft hover shadow (`rgba(0,0,0,0.10) 0 4px 8px`) is documented for hovered cards on editorial pages, but it is rarely visible — most cards remain flat.

### Semantic
- **Success** (`#03904a`): Confirmation states — order placed, dealer contact submitted.
- **Warning** (`#f13a2c`): Validation warnings — orange-red, distinct from Rosso Corsa.
- **Info** (`#4c98b9`): Info badges, callout backgrounds — desaturated teal.
- **Danger** (`#f13a2c`): Form errors — same hex as warning. Ferrari does not visually distinguish between warning and danger.

## 3. Typography Rules

### Font Family
- **Primary**: `FerrariSans` — the licensed brand sans, originally cut by the in-house brand team and refined for digital. Geometric construction with humanist terminals; subtle but distinctive. Weight 500 carries display, weight 400 runs body, weight 700 powers CTAs and the Cavallino wordmark.
- **Fallback chain**: `-apple-system, "Helvetica Neue", Arial, sans-serif` — silent if FerrariSans is loaded; appears only when web-font fails.
- **Mono companion**: `SF Mono / Menlo / Consolas` — appears only on developer or technical-spec pages.
- **OpenType features**: Default ligatures only on display sizes; `ss01` (stylistic alternate) reserved for Cavallino wordmark contexts. No tabular figures, no fractions, no alternate sets in body.
- **No italics** — Ferrari's brand voice is always upright.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Mega | FerrariSans | 80 | 500 | 1.05 | -1.6px | — | Homepage hero h1 over cinema photograph |
| Display XL | FerrariSans | 56 | 500 | 1.10 | -1.12px | — | Subsidiary heroes, F1 driver intro |
| Display Lg | FerrariSans | 36 | 500 | 1.20 | -0.36px | — | Section heads, livery band headline |
| Display Md | FerrariSans | 26 | 500 | 1.50 | 0.195px | — | Sub-section heads |
| Title Md | FerrariSans | 18 | 700 | 1.20 | 0 | — | Component titles, card heads |
| Title Sm | FerrariSans | 16 | 500 | 1.40 | 0.08px | — | List labels |
| Body | FerrariSans | 14 | 400 | 1.50 | 0 | — | Default running text |
| Body Sm | FerrariSans | 13 | 400 | 1.50 | 0 | — | Footer body, fine print |
| Caption | FerrariSans | 12 | 400 | 1.40 | 0 | — | Photo captions |
| Caption Uppercase | FerrariSans | 11 | 600 | 1.40 | 1.1px | — | Section labels, badges |
| Button | FerrariSans | 14 | 700 | 1.00 | 1.4px | — | CTA labels — uppercase |
| Nav Link | FerrariSans | 13 | 600 | 1.40 | 0.65px | — | Top-nav menu items — uppercase |
| Number Display | FerrariSans | 80 | 700 | 1.00 | -1.6px | — | Race-position highlights, spec values |
| Spec Value | FerrariSans | 48 | 500 | 1.05 | -0.5px | — | Engine spec values |
| Cavallino Mark | FerrariSans | 14 | 700 | 1.00 | 2px | — | Wordmark beneath the rampant horse — uppercase |
| Code | SF Mono | 13 | 400 | 1.50 | 0 | — | Developer surfaces |
| Code Micro | SF Mono | 11 | 400 | 1.40 | 0 | — | Inline tokens |

### Principles
- **Display weight stays at 500.** Editorial confidence, not bombastic shouting. The cinematic photography is doing the visual heavy-lifting — type doesn't need to compete.
- **CTA labels are uppercase with 1.4px tracking.** Luxury-precision feel; reads more like an engraved nameplate than a software button.
- **Nav labels are uppercase with 0.65px tracking.** Consistent with the CTA voice but quieter.
- **Negative letter-spacing on display only.** -0.36px to -1.6px on display sizes; body stays at 0. The compression is a magazine-cover convention.
- **Single typeface discipline.** FerrariSans handles every text role — display, body, CTA, nav, captions. No serif accent companion, no monospace except in developer contexts.
- **No italics, no decorative weights.** The voice is always upright and direct.
- **OpenType features stay minimal.** Default ligatures only in body; `ss01` reserved for the Cavallino wordmark context.
- **FerrariSans is licensed.** Open-source substitute: **Inter** at weight 500 with -1% letter-spacing, or **Söhne** for closer humanist proportions.

## 4. Component Stylings

### Buttons
All buttons use **0px border-radius** — sharp rectangles that echo the engineering-precision lines of Ferrari's coachwork.

**Primary (Rosso Corsa)** — the singular high-voltage action:
- Background `#da291c`, text `#ffffff`, font `FerrariSans 14/700 1.4px uppercase`
- Padding `14px 32px`, height `48px`, border-radius `0`, no border
- Transition `background-color 200ms ease`
- Active: background `#b01e0a` (slight saturation drop, no scale, no lift)
- Use case: Configure, Discover, Schedule a Drive

**Outline on Dark** — the alternative action on dark canvas:
- Background transparent, text `#ffffff`, border `1px solid #ffffff`
- Padding `13px 31px` (1px less to compensate for border), height `48px`
- Same FerrariSans 14/700 1.4px uppercase typography
- Active: subtle background `rgba(255,255,255,0.06)` fill
- Use case: secondary CTA on hero band paired with Rosso Corsa primary

**Outline on Light** — secondary action on white editorial bands:
- Background transparent, text `#181818`, border `1px solid #181818`
- Same dimensions and typography as outline-on-dark variant
- Use case: secondary CTA on preowned listing pages

**Tertiary Text** — inline text actions:
- Background transparent, text `#ffffff`, no border
- Same FerrariSans 14/700 1.4px uppercase
- Decoration: underline appears on hover only
- Use case: "Read More", "Discover" links inside editorial body copy

### Hero Bands

**Cinema (default hero)** — full-bleed cinematic photograph:
- Background `#181818` underneath, but the photo fills the viewport edge-to-edge at 100vh
- Display headline floats over the bottom of the photo or in a tight band beneath, in `FerrariSans 80/500 -1.6px`
- One Rosso Corsa primary CTA + one outline secondary, side-by-side on desktop
- Zero padding — the photo fills edge-to-edge

**Light Editorial** — white-canvas hero variant:
- Background `#ffffff`, text `#181818`
- Headline in `FerrariSans 56/500 -1.12px`
- Padding `96px` all sides
- Used for preowned-Ferrari listings, pricing pages, dealer locator

### Cards

**Feature Card (Photo)** — image-first dark card:
- Background `#181818`, text `#ffffff`, radius `0`
- Image fills the top edge-to-edge
- Title (`FerrariSans 18/700`) + body (`14/400 #969696`) sit beneath in tight typography
- No padding around the image; `24px` padding around the text block
- Use case: Models grid, Lifestyle articles

**Feature Card (Light)** — white-canvas variant:
- Background `#ffffff`, text `#181818`, radius `0`, padding `32px`
- Use case: editorial highlights inside light bands

**Driver Card** — F1 driver portrait card:
- Background `#303030` (canvas-elevated), text `#ffffff`, radius `0`, padding `24px`
- Layout: driver portrait image + name (`FerrariSans 18/700`) + race number (number-display 80) + team badge
- Use case: F1 team page, race weekend coverage

**Preowned Listing Card** — used in the preowned Ferrari listing grid:
- Background `#ffffff`, text `#181818`, radius `0`, padding `24px`
- Layout: car photo top + model name + year/mileage + price (large number)
- 1px hairline-on-light divider between metadata rows

### Editorial Surfaces

**Livery Band** — full-width Rosso Corsa accent band:
- Background `#da291c`, text `#ffffff`
- Typography `FerrariSans 36/500 -0.36px`
- Padding `96px`
- Use: standout livery callout between dark editorial bands; F1 race-week banner

**CTA Band Dark** — pre-footer band:
- Background `#181818`, centered display headline `FerrariSans 36/500 -0.36px`
- Single Rosso Corsa CTA centered below
- Padding `96px` vertical

**Newsletter Input Band** — newsletter signup band:
- Background `#303030`, padding `32px`, radius `4`
- Holds an inline email input + Rosso Corsa primary CTA

### Spec & Race Surfaces

**Spec Cell** — technical-spec callout:
- Transparent background
- Value in `FerrariSans 80/700 -1.6px` (white)
- Label below in `FerrariSans 11/600 1.1px uppercase`
- Padding `24px 0`
- Use: engine specs (cc, hp, top speed, 0-100km/h)

**Race Position Cell** — F1 driver finishing position:
- Same number-display geometry as spec cell, but text in `#da291c` Rosso Corsa
- Used for Grand Prix podium positions and championship standings

**Race Calendar Row** — hairline-divided row in F1 race calendar:
- Transparent background, `1px solid #303030` divider beneath each row
- Layout: date column left (Display Md), race name + circuit middle (Title Md), results column right
- Padding `16px 0`

### Forms & Inputs

**Text Input on Dark**:
- Background `#181818`, text `#ffffff`, border `1px solid #303030`, radius `4`
- Padding `14px 16px`, height `48px`
- Font `FerrariSans 14/400`
- Focus: border-color shifts to `#ffffff` and a `2px solid #f6e500` outline appears at 2px offset

**Text Input on Light**:
- Background `#ffffff`, text `#181818`, border `1px solid #d2d2d2`, radius `4`
- Same dimensions and focus treatment as dark variant

### Tags & Badges

**Badge Pill** — small uppercase pill:
- Background `#303030`, text `#ffffff`, radius `9999`
- Padding `4px 12px`, font `FerrariSans 11/600 1.1px uppercase`
- The only place pill geometry is used

### Navigation

**Top Nav (Dark)** — default nav on dark hero pages:
- Background `#181818`, text `#ffffff`, height `64px`, no border, no shadow
- Layout: Cavallino mark left (rampant horse + "FERRARI" wordmark in 14/700 2px tracking), primary horizontal menu (Models / F1 / Lifestyle / Owners / Preowned), language picker + utilities right
- Menu items render in `FerrariSans 13/600 0.65px uppercase`
- Hover: subtle underline grow beneath the active item

**Top Nav (Light)** — white-canvas variant for editorial light bands:
- Background `#ffffff`, text `#181818`, otherwise identical to dark variant

### Footer

**Footer Dark** — closing dark footer on every page:
- Background `#181818`, text `#969696`
- 5-column link list at desktop covering Models / F1 / Lifestyle / Owners / Brand / Connect
- Padding `64px 48px`
- Cavallino mark center-aligned at the very top above link columns

## 5. Layout Principles

### Spacing System
- **Base unit:** 4px.
- **Scale:** `4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128`.
- **Section padding:** 96px for major bands; 128px reserved for the homepage hero photo band.
- **Card internal padding:** 24px for image-first cards; 32px for light-canvas cards.
- **Gutters:** 24px between cards in 3-up grids; 32px in 2-up hero splits.

### Grid & Container
- Max content width: 1280px on editorial bands. Hero photography goes full-bleed.
- Editorial body: 12-column grid.
- Feature card grids: 2-up at desktop for hero splits, 3-up for benefit grids, 4-up for preowned listing tiles.
- Footer: 5-column at desktop.

### Whitespace Philosophy
Generous editorial pacing. Cinematic hero photography occupies viewport-height canvases. Below them, body sections sit in tighter editorial layouts on `#181818` with tighter density — the alternation creates magazine-spread pacing. The canvas-light editorial bands (preowned, pricing) carry tighter density than the dark cinema bands; the contrast in density itself signals context shift.

### Section Cadence
The homepage rhythm is a deliberate alternation: cinema-band → editorial-band → cinema-band → livery-band (Rosso Corsa) → editorial-band → CTA-band-dark → footer. Each section's role is signalled by its background color before the content even renders. Light editorial bands appear only in scoped contexts (preowned listings, pricing) and are always sandwiched between dark cinema bands so white never becomes the dominant ground.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|------|-------|-------|-----|
| None | `none` | 0 | Every CTA, card, photo container, livery band — dominant radius |
| Tight | `xs` | 2 | Tight badges (rare) |
| Standard | `sm` | 4 | Form inputs only |
| Comfortable | `md` | 6 | Compact cards (rare) |
| Relaxed | `lg` | 8 | Mobile-only collapse cards |
| Modal | `xl` | 12 | Modal/dialog corners (rare) |
| Pill | `pill` | 9999 | Avatar plates, badge pills only |

The radius vocabulary is **sharp by default**. 0px corners are the brand button shape. Pill geometry is reserved exclusively for badge labels and avatar plates. There is no compound-radius geometry (no `0 0 6px 6px` mixed corners) anywhere on the site.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (Flat) | `#181818` canvas, no shadow | Body bands, footer, most content surfaces |
| 1 (Card) | `#303030` background, no shadow | Driver cards, livery photo plates, surface cards |
| 2 (Light Band) | `#ffffff` background | Preowned listings, pricing tables — scoped editorial bands |
| 3 (Hairline) | 1px `#303030` on dark / `#d2d2d2` on light | Card outlines, dividers, race-calendar rows |
| 4 (Hover Card) | `rgba(0,0,0,0.10) 0 4px 8px` (rare) | Single soft drop-shadow on hovered preowned cards |
| 5 (Photographic) | Full-bleed cinema imagery | Hero band, livery photographs — depth via lens, not chrome |

### Shadow Philosophy
Ferrari refuses drop-shadow tiers. The system uses **photographic depth + brightness-step elevation**: photography (lighting, lens, subject) carries the emotional depth, and surface color steps (canvas → canvas-elevated → canvas-light) carry the structural depth. The single soft hover shadow on preowned cards is the only chrome drop-shadow in the system. Shadows would compete with the photograph; the brand chooses the photograph.

### Decorative Depth
- **Full-bleed cinema photography** is the brand's primary depth treatment.
- **Brand red gradient** `linear-gradient(180deg, #a00c01, #da291c 64%)`: Rosso Corsa gradient used inside accent bands and CTA hover states.
- **Dark grey gradient** `linear-gradient(180deg, #3c3c3c, #030303 64%)`: atmospheric darken used at section transitions.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — material-style ease for most micro-interactions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — stronger entrance for livery bands, race-position counters
- **Cinema**: `cubic-bezier(0.65, 0, 0.35, 1)` — the slow swing used on hero parallax and 800ms count-ups

### Duration Buckets
- **Fast** (150ms): button background-color transitions, link underline-grow, hover shifts
- **Standard** (220ms): card opacity transitions, nav menu reveals, modal fade
- **Slow** (360ms): section entrance fades, livery-band reveals
- **Cinema** (800ms): race-position counter count-up, hero parallax

### Per-Component Micro-States
- **Button Primary (Rosso Corsa)** — hover: no scale, no lift, no shadow change. Background-color transitions to `#9d2211` over 150ms. Active: background drops to `#b01e0a`.
- **Button Outline** — hover: background fills to `rgba(255,255,255,0.06)` over 150ms. No border change.
- **Card** — hover: no transform; on preowned cards only, a single 4px-offset shadow (`rgba(0,0,0,0.10)`) fades in over 220ms.
- **Link** — hover: underline transitions from invisible to 1px solid over 150ms.
- **Nav Item** — hover: 1px underline grows from left edge to full width over 150ms.
- **Race Position Counter** — first-paint: count-up animation from 00 to final value over 800ms cinema-eased.

### Page Transitions
Page-to-page transitions are minimal: a 200ms cross-fade between the previous page's hero and the new page's hero. Internal scroll-into-view triggers fade-up entrances on cinema bands (360ms emphasized) and livery bands (360ms emphasized). The hero photograph on the homepage holds a subtle `0.4` parallax coefficient on scroll — moving slower than the foreground content to create depth.

### Reduced Motion Strategy
Respects `prefers-reduced-motion: reduce`. Under reduced motion:
- Hero parallax is disabled (photograph stays fixed at scroll-position-0)
- Race-position count-ups become static (final value renders immediately)
- Livery-band entrance fades become opacity-only over 200ms (no translate)
- All scroll-triggered animations collapse to opacity transitions only
- Hover micro-states remain (color transitions are not motion-coded)

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)
- **Text on Canvas**: `#ffffff` on `#181818` = 14.5:1 — AAA at all sizes
- **Body on Canvas**: `#969696` on `#181818` = 6.1:1 — AA at body sizes
- **Text on Brand**: `#ffffff` on `#da291c` = 5.4:1 — AA Normal, AAA Large
- **Text on Light**: `#181818` on `#ffffff` = 14.5:1 — AAA
- **Text on Surface Card**: `#ffffff` on `#303030` = 12.6:1 — AAA
- **Muted on Canvas**: `#666666` on `#181818` = 3.2:1 — fails AA at body sizes; reserved for caption-uppercase 11px+ where AA Large applies

### Focus Indicators
- **Ring color**: `#f6e500` (Hypersail/focus-yellow)
- **Ring style**: `2px solid` at `2px` offset from the element's outer edge
- **Inset variants**: on Rosso Corsa CTAs, the ring renders outside the button to preserve the sharp 0px corner geometry
- **Focus-visible only**: ring appears only on keyboard focus, not mouse-click focus

### ARIA Patterns
- **Combobox** (model search): `role="combobox"` with `aria-expanded`, `aria-controls`, `aria-activedescendant` patterns. Listbox panel uses `role="listbox"` with `aria-selected` on options.
- **Dialog** (configurator save, dealer contact): `role="dialog"` with `aria-modal="true"`, `aria-labelledby` pointing to the dialog title, focus trap on open, focus restore on close.
- **Tabs** (model trim selector): `role="tablist"` with `aria-selected` on the active tab. Arrow-key navigation between tabs.
- **Carousel** (homepage hero): exposed as `role="region"` with `aria-roledescription="carousel"`. Each slide is `role="group"` with `aria-roledescription="slide"`.

### Keyboard Nav Order
Tab order follows visual reading order: skip-to-content link → wordmark → primary nav (Models, F1, Lifestyle, Owners, Preowned) → utilities (language, search, account) → hero CTAs (primary first, then outline) → editorial body content top-to-bottom → footer columns left-to-right → cookie banner if present.

### Screen Reader Hints
- The Cavallino Rampante mark carries `aria-label="Ferrari home"` rather than alt-text, since it serves as the home link, not as content.
- F1 race-position cells (`#da291c` 80px numbers) carry `aria-label="P1 — Charles Leclerc"` even though only the number renders visually.
- Photo captions are wrapped in `<figcaption>` inside `<figure>` for semantic correctness.
- Decorative photography uses `aria-hidden="true"` so SR users don't hear "Image: hero photograph" before every section.

### Reduced Motion Handling
`@media (prefers-reduced-motion: reduce)` overrides scroll-triggered transforms and parallax. Documented in §8 above.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 640px | Hero photograph crops vertically; hero h1 80→32px; feature card grid 1-up; nav hamburger; preowned listing 1-up |
| Tablet | 640–1024px | Hero h1 56px; feature card grid 2-up; preowned listing 2-up; nav still hamburger |
| Desktop | 1024–1280px | Full hero h1 80px; feature card grid 3-up; preowned listing 4-up; horizontal nav appears |
| Wide | > 1280px | Editorial body content caps at 1280px; hero photography continues full-bleed; section padding increases |

### Touch Targets
- Primary CTA at 48px height — exceeds WCAG AAA (44 × 44).
- Nav items render uppercase with 0.65px tracking, padded for an effective 48px tap area.
- Card tap zones: full card surface; no nested clickable elements that fight for the tap.

### Collapsing Strategy
- **Top nav** switches to hamburger below 1024px.
- **Hero photograph** reframes per breakpoint via art direction — desktop carries wide cinematic; mobile crops tighter or shifts to vertical.
- **Feature card grid**: 4-up → 3-up → 2-up → 1-up.
- **F1 driver cards**: 2-up at desktop, 1-up at mobile.
- **Spec cells**: 4-up at desktop, 2-up at tablet, 1-up at mobile.
- **Footer**: 5-column at desktop, accordion-collapsed at mobile.

### Image Behavior
- Hero photography uses `<picture>` with mobile-cropped + desktop-wide art direction.
- Photographs are served as AVIF with WebP fallback and JPEG floor.
- All photography uses `loading="lazy"` except the homepage hero (eager).

### Container Queries
Used selectively on the configurator pages where the spec panel needs to reflow based on its container width rather than the viewport.

## 11. Content & Voice

### Tone
**Editorial, Italian, restrained.** The brand voice reads like a luxury-magazine columnist — measured, confident, never bombastic. Sentences are short on the homepage and longer on heritage pages. Italian flourishes appear in proper nouns (Cavallino Rampante, Maranello, Scuderia) but the body language is English-international. There is no marketing-jargon, no "innovative" or "revolutionary" — those words are beneath the brand.

### Microcopy Patterns
- **Buttons**: action-verb + noun. "Configure", "Discover", "Schedule a Drive", "Find a Dealer", "Read More". Never "Click here", never "Learn more about our..."
- **Error message recipe**: `[What went wrong]. [What to do.]` — e.g. "We couldn't reach our servers. Please try again in a moment." Never blames the user.
- **Success confirmations**: terse and proud. "Your appointment is confirmed." "Your configuration has been saved." No exclamation marks.
- **Form labels**: capitalized noun phrases. "Email Address", "Phone Number", "Preferred Dealer". Never lowercase, never "Enter your...".

### Empty States
- **No results**: "No models match your filters. Try widening your search or browse the full lineup." Always offers a path forward; never a dead end.
- **Saved configuration empty**: "Your saved configurations will appear here. Start configuring a model to begin." Explanatory + actionable.
- **Cart empty (preowned)**: "Your shortlist is empty. Discover our preowned Ferrari range." Brand-voice consistent.

### CTA Verb Conventions
- **Configure** — the primary verb on every model page (not "Build" or "Customize")
- **Discover** — the secondary verb for editorial content (not "Explore" or "Learn More")
- **Find a Dealer** — for dealer locator (not "Locate" or "Get in touch")
- **Schedule a Drive** — for test-drive (not "Book a test drive" — too transactional)
- **Read More** — for editorial articles (not "Continue" or "View")
- **Sign In** — for owner/account pages (never "Login" — Ferrari uses two words)

## 12. Dark Mode & Theming

Ferrari is **dark-by-default**. The site never offers a user-facing light/dark toggle. The editorial light bands (preowned listings, pricing tables, dealer locator) are scoped contextual surfaces — they are not a "light mode." The site never inverts. The Cavallino Rampante mark, the Rosso Corsa CTA, and the canvas all stay constant.

When light editorial bands appear inside dark pages, the token swap is local and predictable:
- `bg`: `#181818` → `#ffffff`
- `text`: `#ffffff` → `#181818`
- `text-body`: `#969696` → `#666666`
- `border`: `#303030` → `#d2d2d2`
- `surface-card`: `#303030` → `#f7f7f7`
- `brand` and `on-brand` stay unchanged: Rosso Corsa CTAs render identically on both grounds

## 13. Lineage & Influences

Ferrari's digital surface inherits from Italian luxury-magazine print and the cinematic hero pattern of Apple-era product launches more than from typical OEM automotive sites. The editorial restraint, the single-accent chromatic discipline, the negative letter-spacing on display sizes, the sandwiching of light bands inside dark pages — all of these are publishing conventions adapted to a vehicle-marketing context.

The 0px corner radius is shared with Lamborghini and Bugatti — a luxury-automotive precision signal that contradicts the soft consumer-tech vocabulary. The Rosso Corsa restraint mirrors the way a single accent works on financial-broadsheet covers (Financial Times pink, The Economist red). The cinema-band → editorial-band → livery-band rhythm is the closest a website comes to a fashion-magazine spread.

What it rejects: spec-sheet density, generic OEM stock photography, glossy gradient backgrounds, color-coded section themes, decorative ornament. The brand chooses photograph + type + sharp corners over every alternative.

**Named influences:**
- Wallpaper* magazine (https://www.wallpaper.com) — editorial pacing, photo-first hero, generous white-on-dark margins
- Vogue Italia (https://www.vogue.it) — luxury fashion editorial discipline, single-accent restraint
- Apple product pages (https://www.apple.com) — full-viewport cinematic hero photography
- Massimo Vignelli's Italian Modernist work — sharp corners, restrained chromatic vocabulary
- Formula 1 broadcast graphics (https://www.formula1.com) — race-position number cells, livery callouts

## 14. Do's and Don'ts

### Do
- Reserve Rosso Corsa `#da291c` for primary CTAs, the Cavallino Rampante mark, and F1 race-position highlights — used scarcely.
- Set every CTA at 0px sharp corners — the brand's signature precision.
- Render CTA labels in uppercase FerrariSans 14/700 with 1.4px tracking.
- Pair every hero with a full-bleed cinematic photograph — the photograph IS the depth.
- Use the explicit 8px spacing ladder rather than ad-hoc px values.
- Keep display weight at 500 — never bold.
- Sandwich light editorial bands between dark cinema bands.
- Use FerrariSans for every text role — no serif companion, no third-party sans.
- Hover states change color only — no scale, no lift, no shadow flicker.

### Don't
- Don't introduce a saturated brand color other than Rosso Corsa.
- Don't use rounded or pill CTAs — sharp 0px corners are the brand button.
- Don't bold display copy. The cinematic photography does the visual heavy-lifting.
- Don't use Hypersail yellow outside the Hypersail sailing program context.
- Don't use pure black canvas. The brand canvas is `#181818` — slightly warm.
- Don't add drop shadow tiers. Photography + brightness-step elevation carry the depth.
- Don't extract a CTA color from a third-party widget (cookie consent, OneTrust). The brand's CTA color is what appears on actual product CTAs, not on injected modals.
- Don't translate "Configure" to "Build" or "Customize" — the brand verb is "Configure".
- Don't compress the 96px section rhythm. The whitespace is part of the editorial pacing.
- Don't add italic or decorative type — FerrariSans is always upright.

## 15. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: `#da291c` (Rosso Corsa)
- Background: `#181818` (Canvas Near-Black)
- Surface: `#303030` (Canvas Elevated)
- Heading text: `#ffffff` (Ink White)
- Body text: `#969696` (Body Default)
- Muted: `#666666` (Muted)
- Hairline: `#303030` (same as surface)
- Light band bg: `#ffffff`
- Focus ring: `#f6e500` (Yellow Focus)
- Active CTA: `#b01e0a` (Rosso Corsa Active)

### Example Component Prompts
- "Create a hero band with a full-viewport `#181818` near-black background, a cinematic Ferrari 296 GTB photograph filling the viewport at 100vh, model name 'PUROSANGUE' floating over the bottom of the photo in FerrariSans 80px weight 500 with -1.6px letter-spacing in pure white, and two side-by-side CTAs below: a Rosso Corsa `#da291c` 'Configure' button (14/700 1.4px uppercase, 0px corners, 14×32 padding, 48px tall) and a transparent outline 'Discover' button (1px white border, same dimensions)."
- "Design an F1 driver card on `#303030` background with a 4:5 portrait of the driver, name 'CHARLES LECLERC' in FerrariSans 18/700 white at the bottom-left, race number '16' in number-display 80px Rosso Corsa at the bottom-right, sharp 0px corners, 24px padding."
- "Build a livery accent band: full-width `#da291c` Rosso Corsa background, headline 'IL CAVALLINO RAMPANTE' centered in FerrariSans 36/500 -0.36px white, 96px vertical padding, sandwiched between two dark editorial bands."
- "Create a preowned Ferrari listing grid on a white `#ffffff` editorial band: 4-up at desktop, each card has a 16:9 photo at top, model name in FerrariSans 18/700 black, year and mileage in 13/400 #666666, price as a large display number in FerrariSans 26/500 -0.36px black, hairline `1px solid #d2d2d2` divider above the price, sharp 0px corners, 24px padding."
- "Build a top nav: 64px tall on `#181818`, Cavallino Rampante mark left (rampant horse + 'FERRARI' wordmark in 14/700 2px tracking), horizontal menu (Models, F1, Lifestyle, Owners, Preowned) center in 13/600 0.65px uppercase, language picker + search + account icons right, no border, no shadow."
- "Design a race position cell: 80px '01' number in FerrariSans 700 -1.6px Rosso Corsa, label 'CHARLES LECLERC' below in 11/600 1.1px uppercase white, transparent background, 24px vertical padding."

### Iteration Guide
1. Focus on ONE component at a time. Reference its YAML key (`button-primary`, `hero-band-cinema`).
2. Variants live as separate entries inside `components:` rather than as nested modifiers.
3. CTAs default to 0px sharp corners. Cards default to 0px too. Pill geometry is reserved for badge labels only.
4. Use color tokens (`brand`, `text`, `surface`) — never inline hex on multiple components.
5. Hover states change color only — never document hover-scale, hover-lift, hover-shadow.
6. FerrariSans 500 for display, 400 for body, 700 for CTA + Cavallino wordmark. Uppercase + tracking on CTAs and nav.
7. Rosso Corsa stays scarce — primary CTAs, Cavallino, race-position highlights only.
8. Use the explicit 8px named spacing ladder (4 / 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128).
