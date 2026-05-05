---
name: Lamborghini
tagline: Cathedral of darkness — true black canvas, Lamborghini Gold accents, and LamboType angled-terminal display.
author: webdesignhot
source_url: https://www.lamborghini.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [automotive, saas]
tags: [luxury, dark, sans, photography, cinematic, geometric]
preview_swatch: ['#000000', '#ffc000', '#ffffff']
related: [ferrari, tesla, bmw]
description: 'Lamborghini''s website is a cathedral of darkness — a digital stage where jet-black surfaces stretch infinitely and every element emerges from the void like a machine under a spotlight. The page is almost entirely black; not dark gray, not near-black, but true uncompromising `#000000` that saturates the viewport and refuses to yield. Into this abyss, white type and Lamborghini Gold `#ffc000` are deployed with surgical precision, creating a visual language that feels like walking through a nighttime motorsport event where every surface absorbs light except the things that matter. Typography runs LamboType — the custom Neo-Grotesk by Character Type whose 12-degree angled terminals echo the aerodynamic lines of the cars — at extreme uppercase scales (120px, 80px, 54px) with tight 0.92 line-heights that feel stamped from steel. Hexagonal motifs in UI icons echo the typeface''s hexagonal construction logic, and zero border-radius on every button reinforces the angular, uncompromising rectangle as the brand''s geometric signature.'

colors:
  bg: '#000000'                  # Absolute Black — true #000, never near-black
  bg-deep: '#181818'             # Dark Iron — footer, deep sections, subtle elevation
  surface: '#202020'             # Charcoal — primary card surface above black canvas
  surface-elevated: '#202020'    # Elevated dark surface for cards and panels
  surface-overlay: 'rgba(0,0,0,0.7)' # Modal backdrop, video dimming
  surface-fog: 'rgba(0,0,0,0.5)' # Lighter overlay, hover states
  surface-mist: 'rgba(0,0,0,0.25)' # Subtle depth hints
  surface-light: '#f8f8f8'       # Near White — rare light-mode surface
  surface-light-mist: '#e6e6e6'  # Light gray surface for secondary light containers
  text: '#ffffff'                # Pure White — primary text on dark
  text-strong: '#ffffff'         # Same as text — no separate strong
  text-soft: '#f5f5f5'           # Smoke — secondary text on dark, slightly softer
  text-on-light: '#202020'       # Charcoal text on light surfaces
  text-on-light-strong: '#000000'# Pure black for highest emphasis on light
  text-graphite: '#494949'       # Graphite — dark gray text on light
  text-ash: '#7d7d7d'            # Ash — mid-range gray for muted, timestamps, metadata
  text-steel: '#969696'          # Steel — disabled text, subtle labels
  text-slate: '#666666'          # Slate — alternative mid-gray for secondary content
  text-iron: '#555555'           # Iron — dark mid-gray for body text variants
  text-shadow: '#313131'         # Shadow — very dark gray for text on dark where white is too strong
  brand: '#ffc000'               # Lamborghini Gold — primary CTA, the only chromatic relief
  brand-active: '#917300'        # Dark Gold — pressed state, hover darken
  brand-light: '#ffce3e'         # Gold Text — slightly lighter gold for inline accents
  on-brand: '#000000'            # Black text on Lamborghini Gold
  accent-cyan: '#29abe2'         # Cyan Pulse — informational accent, interactive highlight
  accent-link-blue: '#3860be'    # Link Blue — universal link hover state
  accent-teal-action: '#1eaedb'  # Teal Action — ghost button hover background
  border: 'rgba(255,255,255,0.5)'# White at 50% — ghost button border
  border-divider: '#202020'      # Section divider hairline (same hex as Charcoal)
  border-light-input: '#dddddd'  # Switch element borders, light mode inputs
  ring: '#ffc000'                # Focus ring — Lamborghini Gold
  link: '#ffffff'                # Inherit text white — links underlined on hover
  link-hover: '#3860be'          # Link Blue universal hover state
  hex-stroke: '#ffffff'          # Hexagonal pause-button outline
  progress-bar: '#ffffff'        # Hero progress bar (1px white)
  success: '#5fa657'             # Confirmation states (rare on marketing)
  warning: '#d4a017'             # Technical-warning callouts (rare)
  danger: '#cc0033'              # Form errors (inferred — fallback)
  info: '#29abe2'                # Cyan Pulse for info contexts

typography:
  display:
    family: '"LamboType", "LamboType Display", Roboto, "Helvetica Neue", Arial, sans-serif'
    weights: [300, 400, 500, 600, 700]
    opentype-features: ['ss01', 'ss02']
  body:
    family: '"LamboType", "Open Sans", -apple-system, "Helvetica Neue", Arial, sans-serif'
    weights: [300, 400, 500, 600, 700]
    opentype-features: []
  mono:
    family: 'SF Mono, Menlo, Consolas, monospace'
    weights: [400]
  scale:
    hero-display:    { size: 120, weight: 400, lineHeight: 0.92, tracking: 'normal',  family: display, notes: 'Hero — uppercase, max impact, model name on cinema video' }
    display-2:       { size: 80,  weight: 400, lineHeight: 1.13, tracking: 'normal',  family: display, notes: 'Major section titles — uppercase' }
    section-title:   { size: 54,  weight: 400, lineHeight: 1.19, tracking: 'normal',  family: display, notes: 'Section heads — uppercase' }
    sub-section:     { size: 40,  weight: 400, lineHeight: 1.15, tracking: 'normal',  family: display, notes: 'Sub-section heads — uppercase' }
    feature-heading: { size: 27,  weight: 400, lineHeight: 1.37, tracking: 'normal',  family: display, notes: 'News card / feature heads — uppercase' }
    card-title:      { size: 24,  weight: 400, lineHeight: 1.30, tracking: 'normal',  family: display, notes: 'Card titles — uppercase' }
    body-large:      { size: 18,  weight: 400, lineHeight: 1.56, tracking: 'normal',  family: body,    notes: 'Lead body — mixed case + uppercase variants' }
    body:            { size: 16,  weight: 400, lineHeight: 1.50, tracking: 'normal',  family: body,    notes: 'Default body / UI' }
    body-emphasized: { size: 16,  weight: 700, lineHeight: 1.50, tracking: '0.16px',  family: body,    notes: 'Inline emphasis' }
    button-large:    { size: 16,  weight: 400, lineHeight: 1.50, tracking: 'normal',  family: body,    notes: 'Lamborghini Gold CTA' }
    button-standard: { size: 14.4, weight: 700, lineHeight: 1.00, tracking: '0.2px',  family: body,    notes: 'Ghost button — uppercase' }
    button-small:    { size: 13,  weight: 500, lineHeight: 1.20, tracking: '0.2px',   family: body,    notes: 'Compact button — uppercase' }
    caption:         { size: 14,  weight: 600, lineHeight: 1.14, tracking: '-0.42px', family: body,    notes: 'Captions — uppercase, negative tracking' }
    label:           { size: 12,  weight: 500, lineHeight: 1.83, tracking: '0.96px',  family: body,    notes: 'Badges, micro labels — uppercase, wide tracking' }
    micro:           { size: 10,  weight: 400, lineHeight: 1.00, tracking: '0.225px', family: body,    notes: 'Smallest text — uppercase, positive tracking for legibility' }
    nav-link:        { size: 14,  weight: 400, lineHeight: 1.20, tracking: 'normal',  family: body,    notes: 'MENU label — uppercase' }
    code:            { size: 13,  weight: 400, lineHeight: 1.50, tracking: 'normal',  family: mono }
    code-micro:      { size: 11,  weight: 400, lineHeight: 1.40, tracking: 'normal',  family: mono }

radius:
  none: 0          # Default — buttons, cards, containers, images
  micro: 1         # Subtle span elements
  xs: 2            # Badges, close buttons, cookie elements — barely perceptible
  sm: 0            # Maps to none — buttons stay sharp
  md: 0            # Maps to none — cards stay sharp
  lg: 8            # Reserved for mobile-only collapse states (rare)
  switch: 20       # Toggle switches — the sole rounded element
  pill: 9999       # Tiny metallic pill badges — rare

spacing:
  base: 8
  scale: [2, 4, 5, 8, 10, 12, 15, 16, 20, 24, 32, 40, 48, 56]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 80
  hero-height: 100vh
  section-padding-vertical: 56
  section-padding-horizontal: 40

components:
  top-nav:
    bg: 'transparent'
    text: '#ffffff'
    height: 80
    layout: 'MENU hamburger + label left, centered bull logo, search + bookmarks icons right'
    border: 'none'
    shadow: 'none'
    sticky: true
    notes: 'Floats above content; inherits black canvas background'
  hamburger-button:
    bg: 'transparent'
    text: '#ffffff'
    label: 'MENU'
    font: 'LamboType 14/400 normal uppercase'
    icon-size: 24
    tap-area: 48
  bull-logo:
    bg: 'transparent'
    text: '#ffffff'
    width: 120
    notes: 'Centered Raging Bull mark — vector, white on black'
  button-gold-cta:
    bg: '#ffc000'
    text: '#000000'
    padding: 24
    height: 56
    radius: 0
    border: 'none'
    font: 'LamboType 16/400'
    transition: 'background-color 250ms ease'
    use: 'Discover More / Tickets / Start Configuration — singular high-voltage action'
  button-gold-cta-hover:
    bg: '#917300'
    text: '#000000'
    notes: 'Hover state — significant darken to Dark Gold'
  button-ghost-transparent:
    bg: 'transparent'
    text: '#ffffff'
    border: '1px solid rgba(255,255,255,0.5)'
    padding: 16
    height: 48
    radius: 0
    opacity: 0.5
    font: 'LamboType 14.4/700 0.2px uppercase'
    transition: 'background-color 250ms, opacity 250ms'
    use: 'Secondary CTA on dark hero sections'
  button-ghost-hover:
    bg: '#1eaedb'
    text: '#ffffff'
    border: '1px solid rgba(255,255,255,0.5)'
    opacity: 0.7
    notes: 'Hover state — Teal Action background'
  button-ghost-focus:
    bg: '#1eaedb'
    text: '#ffffff'
    border: '1px solid #000000'
    outline: '2px solid #000000'
    notes: 'Focus state — black border + black outline'
  button-white-filled:
    bg: '#ffffff'
    text: '#202020'
    padding: 16
    height: 48
    radius: 0
    use: 'Light-mode primary on dark sections where gold is wrong'
  button-black-filled:
    bg: '#000000'
    text: '#202020'
    padding: 16
    height: 48
    radius: 0
    use: 'Inverted CTA on light sections'
  button-gray-neutral:
    bg: '#969696'
    text: '#202020'
    padding: 12
    height: 40
    radius: 0
    use: 'Subtle action, badge-like'
  hero-video-band:
    bg: '#000000'
    video: 'full-viewport 100vh, cinematic event/vehicle footage'
    overlay: 'subtle dark gradient at top + bottom edges'
    headline-position: 'centered, hero-display 120/400 0.92'
    cta-arrangement: 'one Gold CTA + one ghost transparent, side-by-side'
  card-news:
    bg: '#202020'
    text: '#ffffff'
    radius: 0
    padding: 24
    border-bottom: '1px solid #202020'
    notes: 'Charcoal card on black canvas; full-bleed photo + uppercase headline'
  card-vehicle:
    bg: '#000000'
    text: '#ffffff'
    radius: 0
    notes: 'Full-bleed model card; image dominant, type below'
  card-event:
    bg: '#202020'
    text: '#ffffff'
    radius: 0
    padding: 32
    layout: 'image top + uppercase headline + body + Gold CTA'
  hexagonal-pause-button:
    bg: 'transparent'
    border: '1px solid #ffffff'
    shape: 'hexagon (clip-path or SVG)'
    size: 48
    position: 'bottom-right of hero video'
    notes: 'Echoes LamboType hexagonal construction'
  progress-bar:
    bg: 'transparent'
    fill: '#ffffff'
    height: 1
    position: 'bottom of hero section'
    width: '100%'
    notes: 'Indicates video/slide progress — single horizon line'
  badge-tag:
    bg: '#969696'
    text: '#ffffff'
    padding: 8
    radius: 2
    font: 'LamboType 10/400 0.225px uppercase'
    notes: 'Tiny metallic pill'
  toggle-switch:
    bg: 'transparent'
    border: '1px solid #dddddd'
    radius: 20
    notes: 'The only rounded element in the system'
  text-input:
    bg: 'transparent'
    text: '#ffffff'
    border: '1px solid #7d7d7d'
    radius: 0
    padding: '12px 16px'
    height: 48
    font: 'LamboType 14/400'
    placeholder-color: '#7d7d7d'
  cta-band-pre-footer:
    bg: '#000000'
    text: '#ffffff'
    typography: '54/400 normal uppercase'
    padding: 96
    cta: 'single Lamborghini Gold CTA centered'
  footer:
    bg: '#181818'
    text: '#7d7d7d'
    columns: 5
    padding: '64px 40px'
  footer-link:
    bg: 'transparent'
    text: '#7d7d7d'
    font: 'LamboType 14/400'
    decoration: 'underline on hover'
  footer-link-hover:
    text: '#3860be'
    notes: 'Universal link hover state across the entire footer'

lineage:
  summary: 'Lamborghini''s digital surface inherits from motorsport-event broadcast graphics, late-night automotive cinema, and German industrial design. The 2024 brand refresh by Strichpunkt + Character Type introduced LamboType — a custom Neo-Grotesk built on hexagonal geometry whose 12-degree angled terminals echo the aerodynamic lines of the cars themselves. The all-uppercase shouting hierarchy is closer to motorsport telemetry overlays than to typical luxury automotive sites. Bootstrap grid + Element Plus/UI 68 components form the technical infrastructure beneath the theatrical surface.'
  influences:
    - name: 'Motorsport broadcast graphics (F1, Formula E)'
      role: 'uppercase telemetry, full-bleed video, hexagonal control overlays'
    - name: 'Strichpunkt brand-design (Stuttgart)'
      role: 'German industrial typography discipline, geometric construction'
    - name: 'Character Type (LamboType cutter)'
      role: 'custom Neo-Grotesk with hexagonal/triangular construction logic'
    - name: 'Apple product launches'
      role: 'full-viewport cinematic video heroes'
    - name: 'Helmut Schmid Swiss-typographic poster work'
      role: 'extreme scale, dense uppercase blocks'
    - name: 'Bootstrap + Element Plus/UI'
      role: 'the technical chassis under the theatrical surface'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-cinema: 'cubic-bezier(0.65, 0, 0.35, 1)'
  duration-fast: 200
  duration-standard: 250
  duration-slow: 400
  duration-cinema: 1000
  hero-video-loop: 'continuous, no fade — video plays edge-to-edge'
  carousel-advance: '8000ms hold + 600ms cinema-eased crossfade'
  hexagonal-button-hover: 'opacity 0.6 → 1.0 over 200ms'
  reduced-motion: 'respects prefers-reduced-motion: reduce — hero video pauses on first frame; carousel auto-advance disabled (manual nav only); hexagonal-button hover becomes opacity-only'

breakpoints:
  mobile-small: 425
  mobile: 576
  tablet-small: 768
  tablet: 1024
  desktop: 1280
  desktop-large: 1440
  wide: 1920

shadows:
  flat: 'none'
  surface-step: 'achieved through bg-color shift (#000000 → #181818 → #202020 → #494949)'
  overlay: 'rgba(0,0,0,0.7) full-bleed for modal backdrops'
  ring: '0 0 0 2px #ffc000'
  notes: 'Lamborghini refuses drop-shadow tiers — on a black canvas, shadows are invisible. Depth comes through brightness-step elevation instead.'

accessibility:
  contrast-text-on-bg: 21.0              # #ffffff on #000000 — AAA at all sizes
  contrast-text-on-brand: 12.6           # #000000 on #ffc000 — AAA at all sizes
  contrast-body-on-bg: 13.6              # #f5f5f5 on #000000 — AAA
  contrast-muted-on-bg: 5.7              # #7d7d7d on #000000 — AA at body sizes
  focus-ring: '2px solid #ffc000 at 2px offset'
  reduced-motion-honored: true
  touch-target-min: 48                   # CTAs at 48px+ minimum, exceeds WCAG 44

dark-mode: 'native — Lamborghini is dark-by-default with no light-mode toggle. The system uses absolute black `#000000` (not near-black) as the dominant canvas. Rare light surfaces (`#f8f8f8`, `#e6e6e6`) appear only inside scoped editorial contexts; the site never inverts.'
---

## 1. Visual Theme & Atmosphere

Lamborghini's website is a cathedral of darkness — a digital stage where jet-black surfaces stretch infinitely and every element emerges from the void like a machine under a spotlight. The page is almost entirely black. Not dark gray, not near-black — true, uncompromising black (`#000000`) that saturates the viewport and refuses to yield. Into this abyss, white type and Lamborghini Gold (`#ffc000`) are deployed with surgical precision, creating a visual language that feels like walking through a nighttime motorsport event where every surface absorbs light except the things that matter.

The hero is a full-viewport video — dark, cinematic, immersive — showing event footage or vehicle reveals with the Lamborghini bull logo floating ethereally above. The navigation is minimal: a centered bull logo, a "MENU" hamburger on the left, and search/bookmark icons on the right, all rendered in white against the black canvas. There are no borders, no visible nav containers, no background color on the header — just white marks floating in darkness. The overall mood is nocturnal luxury: exclusive, theatrical, and deliberately intimidating. Each section transition is a scroll through darkness into the next revelation.

Typography is the voice of this darkness. **LamboType** — the custom Neo-Grotesk typeface designed by Character Type and brand agency Strichpunkt for Lamborghini's 2024 refresh — is used for everything from 120px uppercase display headlines to 10px micro labels. Its distinctive **12-degree angled terminals** are inspired by the aerodynamic lines of Lamborghini's super sports cars, and its proportions range from Normal to Ultracompressed width. Headlines SHOUT in uppercase at enormous scales with tight line-heights (`0.92` at 120px), creating dense blocks of text that feel stamped from steel. The typeface carries hexagonal geometric DNA — constructed from hexagons, three-armed stars, and circles — that echoes throughout the interface in the hexagonal pause button and UI icons.

Beneath the theatrical surface sits substantial technical infrastructure: Bootstrap grid system + Element Plus/UI with 68 documented components. The discipline of an industrial component library is invisible behind the theatrical front-end, but it carries the brand's voice consistently across configurator, news, motorsport, and Squadra Corse experiences.

**Key Characteristics:**
- True black `#000000` dominant surfaces — never near-black, never `#181818`
- White and Lamborghini Gold `#ffc000` as the only relief colors
- LamboType custom Neo-Grotesk with 12-degree angled terminals echoing aerodynamic car lines
- All-uppercase display typography at extreme scales (120px, 80px, 54px, 40px)
- Tight line-heights on display sizes (`0.92` at 120px) creating dense, architectural type blocks
- Full-viewport video heroes with cinematic event/vehicle content
- Zero border-radius on every button — sharp angular rectangles, never pills
- Hexagonal motifs in UI elements (pause button, icon system) echoing brand geometry
- Transparent ghost buttons with white borders at 50% opacity as the secondary CTA pattern
- Bootstrap + Element Plus/UI 68 components beneath the theatrical surface

## 2. Color Palette & Roles

### Primary
- **Lamborghini Gold** (`#ffc000`): The signature accent color — a warm, saturated amber-gold (rgb 255, 192, 0) used exclusively for primary action buttons ("Discover More", "Tickets", "Start Configuration"). The only chromatic color in the entire interface; it ignites against the black canvas like a headlight cutting through night.
- **Pure White** (`#ffffff`): Primary text color on dark surfaces, logo rendering, nav elements, and light-mode button fills — the voice that speaks from the darkness.
- **Absolute Black** (`#000000`): The dominant surface color — used for page background, hero sections, header, footer, and most containers.

### Brand & Dark
- **Dark Gold** (`#917300`): Hover/pressed state for gold buttons — a deep amber (rgb 145, 115, 0) that darkens the gold to signal interaction.
- **Gold Text** (`#ffce3e`): Slightly lighter gold variant (rgb 255, 206, 62) used for inline text accents and highlighted labels.
- **Dark Iron** (`#181818`): Footer surface — barely distinguishable from black, used for the deepest sections.

### Accent
- **Cyan Pulse** (`#29abe2`): Electric blue-cyan (rgb 41, 171, 226) appearing as an informational accent and interactive element highlight.
- **Link Blue** (`#3860be`): Medium blue (rgb 56, 96, 190) used universally for link hover states across all text colors.
- **Teal Action** (`#1eaedb`): Button hover background for transparent/ghost variants (rgb 30, 174, 219).

### Interactive
- **Link** (`#ffffff`): Inline links inherit white text + appear underlined on hover.
- **Link Hover** (`#3860be`): Universal hover state for all hyperlinks across the site.
- **Active CTA** (`#917300`): Pressed state on Lamborghini Gold CTAs.
- **Disabled** (`#969696`): Steel — also the gray neutral button background.
- **Focus**: 2px solid `#ffc000` ring at 2px offset from the element.

### Neutral Scale
- **Pure White** `#ffffff` — primary text on dark backgrounds (rgb 255, 255, 255)
- **Smoke** `#f5f5f5` — secondary text on dark, slightly softer than pure white
- **Steel** `#969696` — disabled text, subtle labels (rgb 150, 150, 150)
- **Ash** `#7d7d7d` — mid-range gray for muted, timestamps, metadata (rgb 125, 125, 125)
- **Slate** `#666666` — alternative mid-gray for secondary content
- **Iron** `#555555` — dark mid-gray for body text variants
- **Graphite** `#494949` — dark gray text on light surfaces (rgb 73, 73, 73)
- **Shadow** `#313131` — very dark gray for text on dark where white is too strong
- **Charcoal** `#202020` — primary card surface (rgb 32, 32, 32)
- **Dark Iron** `#181818` — footer, deep sections

### Surface & Borders
- **bg** is `#000000` absolute black — true black, never near-black.
- **surface** is `#202020` (Charcoal) — primary card surface, panels, content containers.
- **surface-elevated** is also `#202020` — Lamborghini does not have a multi-tier elevated surface system.
- **bg-deep** `#181818` — only used for the footer.
- **border** for ghost buttons is `rgba(255,255,255,0.5)` — white at 50% opacity.
- **border-divider** `#202020` — section dividers (same hex as Charcoal, creating an invisible-yet-present hairline).
- **surface-light** `#f8f8f8` and `#e6e6e6` — rare light surfaces used only inside scoped editorial contexts (Squadra Corse special pages, certain heritage features).

### Shadow Colors
- Lamborghini refuses drop-shadow tiers. **On a black canvas, traditional drop shadows are invisible.** Instead, the system creates elevation by shifting from absolute black to progressively lighter dark grays: `#000000` → `#181818` → `#202020` → `#494949`. This "darkness gradient" approach means elevated elements are literally lighter than their surroundings, inverting the traditional shadow model.
- Modal backdrops: `rgba(0,0,0,0.7)` full-bleed overlay
- Lighter overlays: `rgba(0,0,0,0.5)` (Fog), `rgba(0,0,0,0.25)` (Mist)

### Semantic
- **Success** (`#5fa657`): Confirmation states — rare on marketing surfaces.
- **Warning** (`#d4a017`): Technical-warning callouts.
- **Danger** (`#cc0033`): Form errors (inferred fallback).
- **Info** (`#29abe2`): Cyan Pulse for informational contexts.

### Gradient System
- No explicit gradients in the brand palette. The dark-to-light progression is achieved purely through surface layering: `#000000` → `#181818` → `#202020` → `#494949` → `#7d7d7d`.
- Video heroes use natural atmospheric gradients from the content itself.
- Subtle dark-to-darker fades at the top/bottom edges of full-bleed imagery ensure text contrast.

## 3. Typography Rules

### Font Family
- **Display & UI**: `LamboType` (custom Neo-Grotesk by Character Type for Lamborghini's 2024 refresh), fallback `Roboto, Helvetica Neue, Arial, sans-serif`. Available in widths from Normal to Ultracompressed and weights from Light (300) to Black. Features 12-degree angled terminals inspired by aerodynamic car geometry, hexagonal construction logic, and support for 200+ languages including Latin, Cyrillic, and Greek.
- **Fallback/UI**: `Open Sans` — used for some button/form contexts as system fallback when LamboType is unavailable.
- **Mono companion**: SF Mono / Menlo — appears only on developer or technical-spec pages.
- **OpenType features**: `ss01`, `ss02` stylistic alternates available for the angled-terminal variants on display sizes; default ligatures only in body.
- **No italic variants** — the brand voice is always upright.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Hero Display | LamboType | 120 | 400 | 0.92 | normal | ss01 | Hero — uppercase, max impact |
| Display 2 | LamboType | 80 | 400 | 1.13 | normal | — | Major section titles — uppercase |
| Section Title | LamboType | 54 | 400 | 1.19 | normal | — | Section heads — uppercase |
| Sub-Section | LamboType | 40 | 400 | 1.15 | normal | — | Sub-section heads — uppercase |
| Feature Heading | LamboType | 27 | 400 | 1.37 | normal | — | News card / feature heads — uppercase |
| Card Title | LamboType | 24 | 400 | 1.30 | normal | — | Card titles — uppercase |
| Body Large | LamboType | 18 | 400 | 1.56 | normal | — | Lead body — mixed case + uppercase variants |
| Body / UI | LamboType | 16 | 400 | 1.50 | normal | — | Default body text |
| Body Emphasized | LamboType | 16 | 700 | 1.50 | 0.16px | — | Inline emphasis |
| Button Large | LamboType | 16 | 400 | 1.50 | normal | — | Lamborghini Gold CTA |
| Button Standard | LamboType | 14.4 | 700 | 1.00 | 0.2px | — | Ghost button — uppercase |
| Button Small | LamboType | 13 | 500 | 1.20 | 0.2px | — | Compact button — uppercase |
| Caption | LamboType | 14 | 600 | 1.14 | -0.42px | — | Captions — uppercase, negative tracking |
| Label | LamboType | 12 | 500 | 1.83 | 0.96px | — | Badges — uppercase, wide tracking |
| Micro | LamboType | 10 | 400 | 1.00 | 0.225px | — | Smallest text — uppercase, positive tracking |
| Nav Link | LamboType | 14 | 400 | 1.20 | normal | — | MENU label — uppercase |
| Code | SF Mono | 13 | 400 | 1.50 | normal | — | Developer surfaces |
| Code Micro | SF Mono | 11 | 400 | 1.40 | normal | — | Inline tokens |

### Principles
- **ALL-CAPS is the default voice.** Display and feature headings are universally uppercase. This creates a shouting, commanding tone that matches the brand's aggression.
- **Extreme scale range** — 120px heroes to 10px micro labels: a 12:1 ratio that creates dramatic visual hierarchy.
- **Tight line-heights at scale.** Display sizes use 0.92–1.19 line-height, creating dense, compressed blocks that feel stamped rather than typeset.
- **Weight 400 dominates.** Unlike many design systems that use bold for emphasis, Lamborghini's regular weight carries the headlines — the typeface itself is so distinctive it doesn't need weight variation.
- **Negative tracking on captions.** -0.42px letter-spacing on 14px captions creates a compressed, technical aesthetic.
- **Positive tracking on micro text.** +0.225px at 10px ensures legibility at the smallest sizes.
- **Single typeface discipline.** LamboType handles everything — the 12-degree angled terminals and hexagonal geometry provide visual coherence across all sizes.
- **No italics, no decorative weights.** The brand voice is always upright and direct.

## 4. Component Stylings

### Buttons
All buttons use **zero border-radius** — sharp, angular rectangles that echo the aggressive lines of Lamborghini vehicles.

**Gold Accent CTA** — the singular high-voltage primary action:
- Background `#ffc000` (Lamborghini Gold), text `#000000`
- Padding `24px`, height `56px`, border-radius `0`, no border
- Font `LamboType 16/400`
- Transition `background-color 250ms ease`
- Hover: background `#917300` (Dark Gold) — significant darken
- Class: `btn-accent btn-large`
- Use case: Discover More / Tickets / Start Configuration

**Transparent Ghost** — the secondary action on dark backgrounds:
- Background transparent, text `#ffffff`, border `1px solid rgba(255,255,255,0.5)` (white at 50% opacity)
- Padding `16px`, opacity `0.5`
- Font `LamboType 14.4/700 0.2px uppercase`
- Hover: background `#1eaedb` (Teal Action), text white, opacity `0.7`
- Focus: background `#1eaedb`, border `1px solid #000000`, outline `2px solid #000000`
- Use case: secondary CTAs on hero sections and dark panels

**White Filled** — light-mode primary:
- Background `#ffffff`, text `#202020`, no border
- Padding `16px`, height `48px`, radius `0`
- Use case: CTAs on dark sections where gold isn't appropriate, or on rare light surfaces

**Black Filled** — dark filled variant:
- Background `#000000`, text `#202020`, padding `16px`, height `48px`, radius `0`
- Use case: inverted CTA on light sections

**Gray Neutral** — subtle action:
- Background `#969696`, text `#202020`, padding `12px`, height `40px`, radius `0`
- Use case: secondary/tertiary actions, badge-like buttons

### Cards & Containers
- Background: `#202020` (Charcoal) on black canvas, or `#000000` on lighter sections
- Border: `0px 1px solid #202020` bottom borders for section dividers
- Border-radius: `0` (completely sharp corners)
- Shadow: minimal, uses overlay opacity for depth
- Content: full-bleed photography + overlaid text in white

### Inputs & Forms
- Minimal form presence on the marketing site
- Switch elements: border-radius `20px` (the only rounded element), border `1px solid #dddddd`
- Cookie banner input: white text on black with `#7d7d7d` borders
- Text input: transparent bg, white text, 1px `#7d7d7d` border, 0px radius, 48px tall

### Navigation
- **Desktop**: Centered bull logo, "MENU" hamburger with icon on left, search icon + bookmarks icon on right
- **Background**: Transparent (inherits black page background)
- **Sticky**: Fixed to top, floats above content
- **No visible borders or shadows** — elements float in the darkness
- **"MENU" label**: White text at `14px` weight `400`, uppercase
- **Hexagonal motifs**: Pause button on hero sections uses hexagonal outline shape

### Image Treatment
- **Hero**: Full-viewport video sections (100vh) with cinematic event/vehicle footage
- **Event photography**: Full-bleed aerial shots of Lamborghini Arena events
- **Vehicle imagery**: High-contrast studio shots on dark backgrounds, full-width
- **Aspect ratios**: Predominantly 16:9 and wider for cinematic feel
- **Dark gradient overlays**: Subtle darkening at top/bottom edges of video to ensure text legibility

### Distinctive Components
- **Hexagonal Pause Button**: Video control uses a hexagonal outline (matching the brand's geometric DNA from the typeface), positioned bottom-right of hero sections
- **Progress Bar**: Thin white line at bottom of hero sections indicating video/slide progress
- **Badge/Tag**: bg `#969696`, text white, padding `8px`, fontSize `10px`, borderRadius `2px` — tiny metallic pills

## 5. Layout Principles

### Spacing System
- **Base unit**: 8px
- **Full scale**: 2px, 4px, 5px, 8px, 10px, 12px, 15px, 16px, 20px, 24px, 32px, 40px, 48px, 56px
- **Button padding**: 16px (ghost), 24px (gold accent)
- **Section padding**: 48–56px vertical, 40px horizontal
- **Small spacing**: 2–5px for fine adjustments (badge padding, border spacing)

### Grid & Container
- **Framework**: Bootstrap grid system (container + row + col)
- **Max width**: 1440px (largest breakpoint)
- **Columns**: Standard 12-column Bootstrap grid
- **Full-bleed**: Hero sections break out of grid to fill viewport edge-to-edge
- **Content areas**: Centered within 1200px max-width containers

### Whitespace Philosophy
Lamborghini uses darkness as whitespace. The generous black expanses between content blocks serve the same function as white space in a light design — creating breathing room that elevates each element to the status of exhibit. A model name floating in the middle of a black viewport has the same visual weight as a gallery piece on a white wall. The absence of color IS the design.

### Section Cadence
The homepage rhythm is: hero-video-band → news-card-grid (3-up at desktop) → event-card → vehicle-showcase (full-bleed) → CTA-band → footer. Each section is dark-on-dark with the differentiation provided by surface-color shifts (`#000000` ↔ `#202020`) rather than light-vs-dark alternation.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|------|-------|-------|-----|
| None | `none` | 0 | Default for everything — buttons, cards, containers, images, inputs |
| Micro | `micro` | 1 | Subtle span elements, hairline rounding |
| Tight | `xs` | 2 | Badges, close buttons, cookie elements — barely perceptible |
| Switch | `switch` | 20 | Toggle switches only — the sole rounded element |
| Pill | `pill` | 9999 | Tiny metallic pill badges (rare) |

The radius vocabulary is **sharp by default**. Zero-radius rectangles are the brand's geometric signature; they echo the aggressive angular lines of Lamborghini vehicles. The only round element on the entire site is the toggle switch (`20px`) — which exists because no design system has yet figured out a way to render an iOS-style toggle as a rectangle.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (Abyss) | `#000000` flat | Page background, deepest layer |
| 1 (Surface) | `#181818` or `#202020` | Cards, content panels, elevated sections |
| 2 (Overlay) | `rgba(0,0,0,0.7)` | Modal backdrops, video dimming |
| 3 (Fog) | `rgba(0,0,0,0.5)` | Lighter overlays, hover states |
| 4 (Mist) | `rgba(0,0,0,0.25)` | Subtle depth hints |
| 5 (Photographic) | Full-bleed video/photo | Hero, vehicle showcases — depth via cinema, not chrome |

### Shadow Philosophy
Lamborghini achieves depth through surface color layering rather than shadows. On a black canvas, traditional drop shadows are invisible — instead, the system creates elevation by shifting from absolute black to progressively lighter dark grays: `#000000` → `#181818` → `#202020` → `#494949`. This "darkness gradient" approach means that elevated elements are literally lighter than their surroundings, **inverting the traditional shadow model**.

### Decorative Depth
- Full-bleed video provides atmospheric depth through cinematic lighting
- The hexagonal pause button floats with a thin white outline stroke
- Progress bars at hero section bottoms create a subtle horizon line
- No gradients, glows, or blur effects on UI elements — the photography provides all visual richness

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — material-style ease for most micro-interactions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — strong entrance for video reveals
- **Cinema**: `cubic-bezier(0.65, 0, 0.35, 1)` — slow swing for carousel crossfades

### Duration Buckets
- **Fast** (200ms): button background-color transitions, hexagonal pause-button opacity
- **Standard** (250ms): ghost-button hover states, link underline transitions, modal fade
- **Slow** (400ms): card opacity transitions, news grid reveals
- **Cinema** (1000ms): hero video carousel crossfades

### Per-Component Micro-States
- **Gold CTA** — hover: background-color transitions to `#917300` over 250ms. No scale, no lift, no shadow. Active: same as hover.
- **Ghost Button** — hover: background fills to `#1eaedb` (Teal Action), opacity `0.5 → 0.7`, border unchanged. 250ms.
- **Hexagonal Pause Button** — hover: opacity `0.6 → 1.0` over 200ms.
- **Card** — hover: no transform; on news cards a subtle bottom-border color shift may occur.
- **Link** — hover: color transitions to `#3860be` (Link Blue) over 200ms; underline appears via box-shadow `inset 0 -1px 0 currentColor`.
- **Hero Carousel** — auto-advances every 8 seconds with a 600ms cinema-eased crossfade between slides.

### Page Transitions
Page-to-page transitions are minimal: a 250ms cross-fade between previous and next routes. The hero video continues looping seamlessly. Internal scroll-into-view triggers fade-up entrances on news cards and event tiles (400ms emphasized).

### Reduced Motion Strategy
Respects `prefers-reduced-motion: reduce`. Under reduced motion:
- Hero video pauses on first frame (poster image holds)
- Carousel auto-advance is disabled — manual nav only
- Hexagonal pause-button hover becomes opacity-only (no transform if any was present)
- All scroll-triggered animations collapse to opacity transitions only
- Hover micro-states remain (color transitions are not motion-coded)

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)
- **Text on Canvas**: `#ffffff` on `#000000` = 21.0:1 — AAA at all sizes (perfect contrast)
- **Body on Canvas**: `#f5f5f5` on `#000000` = 19.8:1 — AAA
- **Text on Brand**: `#000000` on `#ffc000` = 12.6:1 — AAA at all sizes
- **Muted on Canvas**: `#7d7d7d` on `#000000` = 5.7:1 — AA at body sizes
- **Steel on Canvas**: `#969696` on `#000000` = 7.4:1 — AAA at body sizes
- **Text on Surface**: `#ffffff` on `#202020` = 16.0:1 — AAA

### Focus Indicators
- **Ring color**: `#ffc000` (Lamborghini Gold)
- **Ring style**: `2px solid` at `2px` offset from the element's outer edge
- **Focus-visible only**: ring appears only on keyboard focus, not mouse-click focus
- On ghost buttons, the focus state ALSO swaps in a `1px solid #000000` border + `2px solid #000000` outline — the only place black+gold focus chrome appears

### ARIA Patterns
- **Combobox** (vehicle search): `role="combobox"` with `aria-expanded`, `aria-controls`. Listbox uses `role="listbox"` with `aria-selected` on options.
- **Dialog** (configurator save, dealer contact): `role="dialog"` with `aria-modal="true"`, focus trap, focus restore.
- **Carousel** (homepage hero): `role="region"` with `aria-roledescription="carousel"`. Each slide is `role="group"` with `aria-roledescription="slide"`. Pause button has `aria-label="Pause hero video"`.
- **Tabs** (model trim selector): `role="tablist"` with `aria-selected` on active. Arrow-key nav.
- **Hexagonal pause button**: `aria-label="Pause hero video"` / `aria-label="Play hero video"` toggle.

### Keyboard Nav Order
Tab order: skip-to-content → hamburger (MENU) → centered bull logo (home link) → search → bookmarks → hero CTAs (Gold first, then ghost) → editorial body content top-to-bottom → footer columns left-to-right → cookie banner if present.

### Screen Reader Hints
- The Raging Bull mark carries `aria-label="Lamborghini home"`.
- Hero video has `aria-label="Background video — [event/model name]"` and is decorative (`aria-hidden="true"` on the video element when reduced-motion or autoplay-failed).
- Headings remain in proper `h1..h4` hierarchy regardless of visual size.
- Decorative photography uses `aria-hidden="true"`.

### Reduced Motion Handling
`@media (prefers-reduced-motion: reduce)` overrides hero video autoplay and carousel auto-advance. Documented in §8 above.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile Small | <425px | Single column, reduced type scale, stacked buttons |
| Mobile | 425–576px | Single column, hamburger nav, hero text ~40px |
| Tablet Small | 576–768px | 2-column grid begins, padding adjusts |
| Tablet | 768–1024px | 2-column layout, expanded hero, vehicle cards side-by-side |
| Desktop | 1024–1280px | Full navigation, 3+ column grids, display text at 80px |
| Desktop Large | 1280–1440px | Full layout, hero at 120px display, max-width containers |
| Wide | >1440px | Content centered, margins expand, hero fills viewport |

### Touch Targets
- Gold CTA buttons: 56px height with 24px padding (exceeds WCAG 44×44px)
- Ghost buttons: 48px height with 16px padding
- Hamburger menu: large touch target (~48px square)
- Hexagonal pause button: approximately 48px diameter

### Collapsing Strategy
- **Navigation**: Always hamburger-based ("MENU" + icon) — no horizontal nav expansion at any breakpoint
- **Hero video**: Maintains full-viewport height across all breakpoints, adjusting `object-fit`
- **Display type**: Scales from 120px (desktop) → 80px (tablet) → 54px/40px (mobile)
- **Button layout**: Side-by-side on desktop, stacks vertically on mobile
- **Grid columns**: 3-column → 2-column → 1-column progression
- **Section spacing**: Reduces from 56px → 40px → 24px vertical padding

### Image Behavior
- Hero videos use `object-fit: cover` to maintain cinematic framing at all sizes
- Vehicle images scale within their containers with maintained aspect ratios
- Event photography crops to viewport width on narrow screens
- Background images darken at edges to maintain text contrast on all viewports

### Container Queries
Used selectively on the Squadra Corse motorsport pages where telemetry-style data tables need to reflow based on container width.

## 11. Content & Voice

### Tone
**Theatrical, commanding, nocturnal-luxury.** The brand voice reads like a motorsport commentator at midnight — short sentences, declarative, never apologetic. Italian flourishes appear sparingly (Squadra Corse, Sant'Agata, Aventador's lineage). The voice never pleads, never hedges, never explains. Headlines SHOUT in uppercase; body copy is sentence case but still confident.

### Microcopy Patterns
- **Buttons**: action-verb only, often a single word. "DISCOVER", "EXPLORE", "CONFIGURE", "TICKETS". Always uppercase via CSS `text-transform`.
- **Error message recipe**: `[Brief acknowledgement]. [Path forward.]` — e.g. "Unable to complete your request. Please try again." Terse.
- **Success confirmations**: declarative. "Your configuration is saved." "Your appointment is confirmed."
- **Form labels**: capitalized noun phrases, occasionally uppercase. "Email", "Phone", "Preferred Dealer".

### Empty States
- **No results**: "No models match your criteria." Followed by a path forward (link to full lineup) — but the empty-state never apologizes.
- **Saved empty**: "Your saved configurations will appear here."
- **Cart/shortlist empty**: rarely surfaced; Lamborghini's e-commerce is sparse.

### CTA Verb Conventions
- **DISCOVER MORE** — the dominant primary verb (not "Learn More", not "View Details")
- **CONFIGURE** — for model build pages (not "Customize", not "Build")
- **TICKETS** — for events (Squadra Corse races, Lamborghini Arena experiences)
- **START CONFIGURATION** — for the configurator entry point (uppercase, declarative)
- **EXPLORE** — for editorial content
- **CONTACT** — for dealer contact (not "Get in touch", not "Reach out")
- **SIGN IN** — for owner accounts (two words, like Ferrari)

## 12. Dark Mode & Theming

Lamborghini is **dark-by-default and dark-forever**. The site never offers a user-facing light/dark toggle. The absolute black `#000000` canvas is the brand's primary identity. Rare light surfaces (`#f8f8f8`, `#e6e6e6`) appear only inside scoped editorial contexts (certain Squadra Corse heritage features, archival pages); the site never inverts.

When light surfaces do appear, the local token swap is:
- `bg`: `#000000` → `#f8f8f8`
- `text`: `#ffffff` → `#202020`
- `text-soft`: `#f5f5f5` → `#494949`
- `surface`: `#202020` → `#e6e6e6`
- `border`: `rgba(255,255,255,0.5)` → `rgba(0,0,0,0.5)`
- `brand` and `on-brand` stay constant: Lamborghini Gold CTAs render identically on both grounds (`#000000` text on `#ffc000`)

The configurator surface respects the dark canvas regardless of the model being configured. Even the lightest paint colors render against the absolute black ground.

## 13. Lineage & Influences

Lamborghini's digital surface inherits from motorsport-event broadcast graphics, late-night automotive cinema, and German industrial design discipline. The 2024 brand refresh by Strichpunkt + Character Type introduced LamboType as the typographic system, replacing the previous reliance on Helvetica Neue + Open Sans with a custom Neo-Grotesk built on hexagonal geometry. The 12-degree angled terminals echo the aerodynamic lines of the cars themselves, and the hexagonal construction logic carries through to the UI in the pause button and icon system.

The all-uppercase shouting hierarchy is closer to motorsport telemetry overlays than to typical luxury automotive sites — it reads as if the page itself is broadcasting from a starting grid. The dark-canvas-as-whitespace philosophy borrows from late-night TV automotive cinematography (Top Gear, Drive to Survive). The Bootstrap grid + Element Plus/UI 68 components form the technical chassis under the theatrical surface — discipline of an industrial component library, invisible behind the cinematic front-end.

What it rejects: light-canvas marketing pages, soft consumer-tech rounded corners, decorative gradients, multi-accent palettes, hover-scale-and-lift animations, mixed-case display headings.

**Named influences:**
- Motorsport broadcast graphics — F1 (https://www.formula1.com), Formula E
- Strichpunkt brand-design (Stuttgart) — German industrial typography discipline
- Character Type — LamboType cutter, custom Neo-Grotesk specialists
- Apple product launches (https://www.apple.com) — full-viewport cinematic video heroes
- Helmut Schmid Swiss-typographic poster work — extreme scale, dense uppercase
- Bootstrap (https://getbootstrap.com) + Element Plus/UI — technical chassis

## 14. Do's and Don'ts

### Do
- Use absolute black `#000000` as the primary background — never dark gray as a substitute
- Apply Lamborghini Gold `#ffc000` exclusively for primary CTA buttons — never for decorative purposes
- Set all display headings in uppercase with LamboType — the brand voice is always SHOUTING
- Use zero border-radius on buttons and cards — sharp angles are non-negotiable
- Maintain tight line-heights (0.92–1.19) on display type to create dense, architectural text blocks
- Use the transparent ghost button (white border, 50% opacity) as the secondary CTA on dark backgrounds
- Let full-viewport video/photography carry emotional weight — UI is infrastructure, not decoration
- Reserve hexagonal geometry for UI icons and the video control button
- Use weight 400 (regular) for headlines — the typeface is distinctive enough without bold emphasis
- Keep the gray palette achromatic — all neutrals are pure gray without color tinting

### Don't
- Don't introduce additional accent colors beyond gold — the monochrome-plus-gold system is sacred
- Don't apply border-radius to buttons or cards — curved edges contradict the angular vehicle aesthetic
- Don't use LamboType in italic or decorative styles — the brand is always upright and direct
- Don't add gradients to buttons or surfaces — depth comes from surface layering, not blending
- Don't use light backgrounds as the primary canvas — darkness is the default state, light is the exception
- Don't mix lowercase into display headings — the uppercase convention communicates authority and power
- Don't add hover animations with scale or translate — interactions should be color-only (background/opacity shifts)
- Don't use Open Sans for display text — LamboType must handle all visible typography
- Don't create busy layouts with many small elements — Lamborghini's design is about singular, bold statements
- Don't apply shadows to elements — on a black canvas, shadows are meaningless; use surface color shifts instead

## 15. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: `#ffc000` (Lamborghini Gold)
- Background: `#000000` (Absolute Black)
- Surface: `#202020` (Charcoal)
- Heading text: `#ffffff` (Pure White)
- Body text: `#7d7d7d` (Ash)
- Link hover: `#3860be` (Link Blue)
- Accent: `#29abe2` (Cyan Pulse)
- Border: `rgba(255,255,255,0.5)` (white at 50% opacity)
- Active CTA: `#917300` (Dark Gold)
- Focus ring: `#ffc000` (Gold, 2px offset)

### Example Component Prompts
- "Create a hero section with a full-viewport `#000000` absolute black background, a looping cinematic event video filling the viewport at 100vh, the model name 'TEMERARIO' in LamboType at 120px uppercase weight 400 with 0.92 line-height in pure white centered vertically, a Lamborghini Gold `#ffc000` 'DISCOVER MORE' button below (sharp corners, 0px radius, 24px padding, 56px height, black text, 16/400) and a transparent ghost 'TICKETS' button to its right (1px white border at 50% opacity, opacity 0.5, 14.4/700 0.2px uppercase white text)."
- "Design a transparent ghost button: 1px solid white border at 50% opacity, white text at 14.4px uppercase weight 700 with 0.2px letter-spacing, 16px padding, opacity 0.5 by default — hover state changes to `#1eaedb` Teal Action background with 70% opacity."
- "Build a navigation bar with zero visible background on absolute black, 'MENU' label + hamburger icon on the left (LamboType 14/400 white uppercase), a centered Raging Bull logo (120px wide, white SVG), and search + bookmarks icons on the right — all in white, sticky position, no border, no shadow, 80px tall."
- "Create a news card grid on `#202020` Charcoal background with white headlines at 27px uppercase weight 400, body text in `#7d7d7d` Ash at 16/400, a single bottom-border `1px solid #202020` (creating an invisible-yet-present hairline), 24px padding, 0px sharp corners, and a Lamborghini Gold 'EXPLORE' link beneath that turns Link Blue on hover."
- "Design a hexagonal video pause-button with a 1px white outline shape (clip-path or SVG hexagon), 48px diameter, transparent background, positioned bottom-right of the hero section, opacity 0.6 → 1.0 on hover."
- "Build a section divider using a 1px solid `#202020` bottom border on a `#000000` canvas — the elevation difference is purely through surface color shift, not shadow. The hairline is intentionally near-invisible."

### Iteration Guide
1. Focus on ONE component at a time — Lamborghini's system is extreme and every element must feel aggressive
2. Reference specific color names and hex codes from this document — the palette has only about 5 active colors
3. Use natural language descriptions, not CSS values — "sharp-cut golden rectangle" not "border-radius: 0px; background: #FFC000"
4. Describe the desired "feel" alongside specific measurements — "floating in total darkness" communicates the black canvas better than "background: #000000"
5. Remember that UPPERCASE IS THE DEFAULT — if text isn't uppercase at display sizes, it probably should be
6. Hexagonal geometry is reserved for the pause button and icons — don't sprinkle hexagons elsewhere
7. Hover states are color-only — never document hover-scale, hover-lift, hover-shadow
8. The toggle switch is the ONLY rounded element — everything else is sharp 0px corners
