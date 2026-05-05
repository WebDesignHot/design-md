---
name: Tesla
tagline: Cinematic showroom on white — one Electric Blue CTA, Universal Sans, and viewport-height car photography.
author: webdesignhot
source_url: https://www.tesla.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [automotive, saas]
tags: [light, minimal, sans, photography, cinematic, monochrome]
preview_swatch: ['#ffffff', '#3e6ae1', '#171a20']
related: [apple, framer, vercel]
description: 'Tesla''s site is a digital showroom built on radical subtraction. The page is white, the photography is full-viewport, and a single Electric Blue (#3e6ae1) carries every primary call-to-action — there are no shadows, no gradients, no decorative borders anywhere. Universal Sans Display + Universal Sans Text unifies the website, mobile app and in-car software into one typographic voice; weight 500 for headings and UI, weight 400 for body, and ''normal'' tracking everywhere because the typeface is supposed to speak for itself. Every interactive transition is 0.33s, every button is 4px-rounded, and every section is one viewport tall — so each scroll feels like turning the page of a gallery catalogue rather than browsing a website.'

colors:
  bg: '#ffffff'                 # Pure White — page canvas, nav panel, dropdowns
  bg-alt: '#f4f4f4'             # Light Ash — barely-perceptible alternate surface
  bg-dark: '#171a20'            # Carbon Dark — hero overlays, dark mode contexts
  surface: '#ffffff'            # All container surfaces
  surface-frost: 'rgba(255,255,255,0.75)'  # Nav backdrop-filter on scroll
  surface-overlay: 'rgba(128,128,128,0.65)' # Region/cookie modal overlays
  text: '#393c41'               # Graphite — body / paragraph default
  text-strong: '#171a20'        # Carbon Dark — headings, nav labels, hero titles
  text-muted: '#5c5e62'         # Pewter — sub-links (Learn / Order / Experience)
  text-placeholder: '#8e8e8e'   # Silver Fog — input placeholders, disabled
  brand: '#3e6ae1'              # Electric Blue — the only chromatic colour, primary CTA
  brand-hover: '#345dc4'        # Slight darken on hover
  brand-active: '#2b50ad'       # Pressed state
  on-brand: '#ffffff'           # White text on Electric Blue button
  border: '#eeeeee'             # Cloud Gray — divider lines
  border-strong: '#d0d1d2'      # Pale Silver — UI delineation
  border-soft: '#f4f4f4'        # Subtle separators
  ring: '#3e6ae1'               # Focus indicator (animates inset)
  link: '#3e6ae1'               # Same as brand — links inherit CTA hue
  link-hover: '#2b50ad'
  promo-blue: '#3e6ae1'         # "0% APR Available" promo text
  carbon-deep: '#000000'        # Reserved for true-black contexts
  category-card-overlay: 'rgba(0,0,0,0)'  # Tesla refuses overlay gradients
  success: '#3e6ae1'            # No semantic palette — defaults to brand
  warning: '#cc8800'            # Inferred — rarely used
  danger: '#cc0033'             # Inferred — form-error fallback
  info: '#3e6ae1'

typography:
  display:
    family: '"Universal Sans Display", -apple-system, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500]
    opentype-features: []
  body:
    family: '"Universal Sans Text", -apple-system, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500]
    opentype-features: []
  mono:
    family: 'SF Mono, Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-hero:    { size: 40, weight: 500, lineHeight: 1.20, tracking: 'normal', family: display, notes: 'Hero model name on viewport-height car photo' }
    display-large:   { size: 32, weight: 500, lineHeight: 1.25, tracking: 'normal', family: display, notes: 'Section opener fallback' }
    display-medium:  { size: 24, weight: 500, lineHeight: 1.30, tracking: 'normal', family: display }
    promo-text:      { size: 22, weight: 400, lineHeight: 0.91, tracking: 'normal', family: body, notes: '"0% APR Available" promo over hero' }
    title-large:     { size: 17, weight: 500, lineHeight: 1.18, tracking: 'normal', family: body, notes: 'Model names in dropdown panel + cards' }
    title-medium:    { size: 16, weight: 500, lineHeight: 1.20, tracking: 'normal', family: body, notes: 'Card / category labels' }
    nav-item:        { size: 14, weight: 500, lineHeight: 1.20, tracking: 'normal', family: body, notes: 'Vehicles / Energy / Charging / Discover / Shop' }
    button-primary:  { size: 14, weight: 500, lineHeight: 1.20, tracking: 'normal', family: body, notes: 'Order Now / View Inventory' }
    body:            { size: 14, weight: 400, lineHeight: 1.43, tracking: 'normal', family: body, notes: 'Paragraph and descriptive copy' }
    sub-link:        { size: 14, weight: 400, lineHeight: 1.43, tracking: 'normal', family: body, notes: 'Learn / Order / Experience tertiary' }
    caption:         { size: 12, weight: 400, lineHeight: 1.50, tracking: 'normal', family: body }
    micro:           { size: 11, weight: 400, lineHeight: 1.40, tracking: '0.05em', family: body, notes: 'Footer fine print' }
    wordmark:        { size: 14, weight: 500, lineHeight: 1.0, tracking: '0.4em', family: display, notes: 'TESLA wordmark — wide-spaced uppercase' }
    code:            { size: 13, weight: 400, lineHeight: 1.5, tracking: 'normal', family: mono }
    code-micro:      { size: 11, weight: 400, lineHeight: 1.4, tracking: 'normal', family: mono }

radius:
  flat: 0
  micro: 4              # Buttons (primary/secondary/nav) — barely perceptible
  sm: 4
  md: 8
  card: 12              # Category cards — the largest radius in the system
  lg: 12
  xl: 16
  pill: 9999            # Carousel dot indicators (50% on square)

spacing:
  base: 8
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1383
  prose-width: 720
  header-height: 64
  hero-height: 100vh

components:
  button-primary:
    bg: '#3e6ae1'
    text: '#ffffff'
    padding: '4px (with flex centering)'
    radius: 4
    border: '3px solid transparent'
    box-shadow-inset: 'rgba(0,0,0,0) 0 0 0 2px inset (animates on focus)'
    width: 200
    min-height: 40
    font: 'Universal Sans Text 14/500'
    transition: 'border-color 0.33s, background-color 0.33s, color 0.33s, box-shadow 0.25s'
  button-secondary:
    bg: '#ffffff'
    text: '#393c41'
    padding: '4px (centered)'
    radius: 4
    border: '3px solid transparent'
    width: 200
    min-height: 40
    font: 'Universal Sans Text 14/500'
    transition: 'identical 0.33s timings'
  nav-button:
    bg: 'transparent'
    text: '#171a20'
    padding: '4px 16px'
    min-height: 32
    font: '14/500'
    transition: 'color 0.33s, background-color 0.33s'
  text-link:
    text: '#5c5e62'
    font: '14/400'
    decoration: 'none → underline on hover'
    transition: 'box-shadow 0.33s cubic-bezier(0.5,0,0,0.75), color 0.33s'
  card-vehicle:
    bg: 'transparent'
    border: 'none'
    shadow: 'none'
    notes: 'Inherits white panel; no hover on card itself — interaction sits with text links beneath'
  card-category:
    bg: 'full-bleed landscape photograph'
    radius: 12
    overflow: 'hidden'
    aspect: '~2:1'
    text-position: 'top-left, white label'
    overlay: 'none — relies on image darkness'
  input:
    bg: 'transparent'
    text: '#171a20'
    placeholder: '#8e8e8e'
    border: 'minimal browser default'
    font: 'Universal Sans Text 14'
  chat-bar:
    position: 'fixed bottom — viewport anchored'
    bg: '#ffffff'
    border: '1px solid #eeeeee'
    icon-accent: 'teal/blue on Schedule a Drive CTA'
  navigation:
    align: 'TESLA wordmark left, 5 buttons centred, 3 icons right'
    bg-default: 'transparent over hero'
    bg-scrolled: '#ffffff (toggled via tds-site-header--white-background)'
    border: 'none'
    shadow: 'none'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-tesla: 'cubic-bezier(0.5, 0, 0, 0.75)'      # Underline-grow on text links
  duration-fast: 250                                # Box-shadow inset animation
  duration-standard: 330                            # The famous Tesla 0.33s
  duration-slow: 600
  reduced-motion: 'respects prefers-reduced-motion: reduce — all 0.33s transitions collapse to 0; carousel auto-advance pauses; only opacity changes remain.'

breakpoints:
  mobile: 768
  tablet: 1024
  desktop: 1440
  wide: 1920

shadows:
  flat: 'none'
  frost: 'backdrop-filter: blur(20px) saturate(180%)'
  overlay: 'rgba(128,128,128,0.65) 0 0 0 9999px'
  subtle-hover: 'rgba(0,0,0,0.05) 0 1px 2px'
  ring: '0 0 0 2px #3e6ae1 inset'

accessibility:
  contrast-text-on-bg: 12.6              # #171a20 on #ffffff — AAA
  contrast-body-on-bg: 9.4               # #393c41 on #ffffff — AAA
  contrast-text-on-brand: 5.1            # #ffffff on #3e6ae1 — AA Large/AA Normal
  focus-ring: '3px solid transparent (resting) → 2px box-shadow inset on :focus-visible'
  reduced-motion-honored: true
  touch-target-min: 44

dark-mode: 'partial — Carbon Dark surfaces appear in select editorial pages and the in-car software, but tesla.com is light-only by default. Hero overlay text uses white on photography; no dark page swap.'
---

## 1. Visual Theme & Atmosphere

Tesla's website is a master class in radical subtraction. The page opens with a full-viewport hero that fills the entire screen with cinematic vehicle photography — three vehicles arranged on polished concrete against a hazy cityscape sky, with a single model name floating above in translucent white type. There are no decorative borders, no gradients, no patterns, no shadows, no rounded ornament. The interface exists only to provide just enough navigational structure to get out of the way. Every pixel that isn't product imagery is whitespace, and that restraint is the loudest design statement on the page.

The colour philosophy is almost ascetic. A single blue (`#3e6ae1`) for primary calls-to-action, three shades of dark grey for text hierarchy, and white for everything else. The entire emotional register is carried by photography — sprawling landscape shots, studio-lit vehicle profiles, atmospheric environmental compositions that stretch edge-to-edge across each viewport-height section. The UI chrome dissolves into the imagery. The navigation bar floats above the hero with no visible background, no border, no shadow — the TESLA wordmark and five navigation labels simply exist in the space, trusting the content beneath them to provide enough contrast.

Typography recently transitioned from Gotham to **Universal Sans** — a custom family split into "Display" for headlines and "Text" for body and UI — unifying the website, mobile app and in-car software into a single typographic voice. The Display variant renders hero titles at 40px weight 500; the Text variant handles everything from navigation (14/500) to body copy (14/400). The font carries geometric precision with slightly humanist terminals — engineered rather than designed, exactly matching Tesla's brand identity of technology that doesn't need to announce itself. There are no text shadows, no gradients on type, no decorative treatments. Every letterform earns its place through clarity alone.

Motion is uniform: every state change runs at **0.33 seconds** with a soft cubic-bezier. Buttons don't lift, cards don't scale, links don't shift — only colours and inset shadows transition. The result is an interface that feels like the cars themselves: silent, smooth, electric.

**Key Characteristics:**
- Full-viewport hero sections (100vh) dominated by cinematic vehicle photography
- Near-zero UI decoration: no shadows, no gradients, no borders, no patterns
- Single accent — Electric Blue `#3e6ae1` — used exclusively for primary CTA
- Universal Sans (Display + Text) unifying web, app and in-car interfaces
- Photography-first presentation; product imagery carries all emotional weight
- Frosted-glass navigation that floats over hero content
- 0.33s cubic-bezier transitions as the universal timing for every interactive change
- Carousel-driven hero with dot indicators and edge-arrow navigation
- "Ask a Question" persistent chat bar anchored to the viewport bottom
- 4px border-radius everywhere on interactive elements — precision over playfulness

## 2. Color Palette & Roles

### Primary
- **Electric Blue** (`#3e6ae1`): Primary CTA background — a confident mid-saturation blue (rgb 62, 106, 225). The only chromatic colour in the entire interface. Used for "Order Now" and other primary actions.
- **Pure White** (`#ffffff`): Dominant background for all surfaces, panels, navigation and secondary buttons — the canvas that lets photography breathe.

### Brand & Dark
- **Carbon Dark** (`#171a20`): Display-strength text colour and the dark surface used in a few editorial bands. A warm near-black with a faint blue undertone (rgb 23, 26, 32).
- **TESLA Wordmark**: rendered in Carbon Dark at 14px / 500 with `0.4em` letter-spacing — wide-spaced uppercase is the brand's typographic crest.

### Accent
- **Promo Blue** (`#3e6ae1`): Same Electric Blue serves promotional text ("0% APR Available") over hero imagery — creating a visual link between incentive copy and action.
- No secondary accents exist. Tesla deliberately refuses colour variety to preserve discipline.

### Interactive
- **Link** (`#3e6ae1`): Inherits brand. The link colour and the CTA colour are intentionally identical.
- **Hover** (`#345dc4`): Slight darkening of brand on hover.
- **Active** (`#2b50ad`): Pressed state.
- **Disabled** (`#8e8e8e`): Silver Fog — also the placeholder colour.
- **Focus**: 2px inset box-shadow that animates from invisible to visible — never an outline ring.

### Neutral Scale
- **Carbon Dark** `#171a20` — primary heading and nav text (rgb 23, 26, 32)
- **Graphite** `#393c41` — body / paragraph default (rgb 57, 60, 65), slightly warmer than pure grey
- **Pewter** `#5c5e62` — tertiary text (Learn / Order / Experience sub-links)
- **Silver Fog** `#8e8e8e` — placeholder + disabled (rgb 142, 142, 142)
- **Pale Silver** `#d0d1d2` — UI delineation
- **Cloud Gray** `#eeeeee` — dividers, hairlines
- **Light Ash** `#f4f4f4` — alternate surface, barely perceptible
- **Pure White** `#ffffff` — canvas

### Surface & Borders
- **bg** white-on-white is the default. Section change is signalled by a one-step nudge to `#f4f4f4`, never by a border.
- **border-soft** `#f4f4f4` — only used inside form contexts.
- **border** `#eeeeee` — divider rules in dropdown panels.
- **border-strong** `#d0d1d2` — rare, used on inputs and dropdown selects.

### Shadow Colors
- **Tesla refuses shadows**. The only "elevation" colour in the system is the frosted-glass nav (`rgba(255,255,255,0.75)` + `backdrop-filter: blur(20px) saturate(180%)`) and the modal overlay grey (`rgba(128,128,128,0.65)`).

### Semantic
- Tesla's marketing site avoids semantic colour coding. No green/red/yellow status indicators appear in product surfaces. Form errors fall back to browser defaults inside the order flow. The blue CTA is the sole interactive colour signal.

## 3. Typography Rules

### Font Family
- **Display**: `Universal Sans Display`, -apple-system, "Helvetica Neue", Arial, sans-serif — geometric sans with engineered proportions, used for hero titles and large model names. Replaced Gotham to unify Tesla's digital ecosystem.
- **Text/UI**: `Universal Sans Text`, -apple-system, "Helvetica Neue", Arial, sans-serif — optimised for legibility at smaller sizes with slightly wider proportions than Display.
- **Mono companion**: SF Mono / Menlo — appears only in developer-facing pages.
- **OpenType features**: none invoked. The site uses default ligatures only.
- **No italics**: zero italic variants observed on the marketing site.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Hero Title | Display | 40 | 500 | 48 (1.20) | normal | — | Hero model name on viewport-height photo |
| Display Large | Display | 32 | 500 | 40 (1.25) | normal | — | Section opener |
| Display Medium | Display | 24 | 500 | 32 (1.30) | normal | — | Sub-section |
| Promo Text | Text | 22 | 400 | 20 (0.91) | normal | — | White over hero ("0% APR Available") |
| Product Name | Text | 17 | 500 | 20 (1.18) | normal | — | Model names in dropdown + cards |
| Category Label | Text | 16 | 500 | — | normal | — | "Sport Sedan" labels on category cards |
| Nav Item | Text | 14 | 500 | 16.8 (1.20) | normal | — | Vehicles, Energy, Charging, Discover, Shop |
| Button Label | Text | 14 | 500 | 16.8 (1.20) | normal | — | Order Now / View Inventory |
| Body | Text | 14 | 400 | 20 (1.43) | normal | — | Paragraph and descriptive content |
| Sub-link | Text | 14 | 400 | 20 (1.43) | normal | — | Learn / Order / Experience |
| Caption | Text | 12 | 400 | 18 (1.50) | normal | — | Footer captions |
| Micro | Text | 11 | 400 | 15 (1.40) | 0.05em | — | Legal / footer fine print |
| Wordmark | Display | 14 | 500 | 1.0 | 0.4em | — | TESLA — wide-spaced uppercase |
| Code | Mono | 13 | 400 | 1.5 | normal | — | Developer pages |
| Code Micro | Mono | 11 | 400 | 1.4 | normal | — | Inline tokens |

### Principles
- **"Normal" letter-spacing everywhere.** Most modern tech brands use negative tracking on display sizes. Tesla refuses — the typeface is supposed to speak for itself.
- **Two weights only**: 500 for headings/UI, 400 for body. No bold (700), no light (300). No drama.
- **Unified sizing**: most UI text clusters at 14px. Only hero titles (40) and promo text (22) escape — extreme uniformity creates an engineered consistency.
- **Display vs Text split**: a two-variant family that creates subtle optical correction without visible style difference — they read as the same typeface at different sizes.
- **No transforms**: no uppercase in primary navigation or CTA. Lowercase calm reinforces understated confidence. The TESLA wordmark is the only uppercase exception.
- **No italics**, no underlines except on hover, no decorative type.

## 4. Component Stylings

### Buttons
All buttons use **4px border-radius** — barely-rounded rectangles that read as precision rather than playfulness.

**Primary CTA** — the singular action button:
- Background `#3e6ae1` (Electric Blue), text `#ffffff`, font 14/500
- Padding 4px (with flex centering), border-radius 4px, min-height 40px, width 200px
- Border `3px solid transparent` (reserves space for focus animation)
- Box shadow `rgba(0,0,0,0) 0 0 0 2px inset` (animates to visible on focus)
- Transition `border-color 0.33s, background-color 0.33s, color 0.33s, box-shadow 0.25s`
- Hover: subtle darkening of the blue background
- Use case: Order Now, Configure, Schedule a Drive

**Secondary CTA** — the alternative action:
- Background `#ffffff`, text `#393c41` (Graphite), same dimensions and border pattern
- Transition: identical 0.33s timings
- Use case: View Inventory alongside primary CTA

**Nav Button** — top-bar items:
- Background transparent, text `#171a20` (Carbon Dark)
- Font 14/500, border-radius 4px, padding 4px 16px, min-height 32px
- Transition `color 0.33s, background-color 0.33s`
- Active/expanded: subtle background highlight
- Use case: Vehicles / Energy / Charging / Discover / Shop

**Text Link** — in-content actions:
- Text `#5c5e62` (Pewter), font 14/400, no background, no border
- Hover: underline decoration with box-shadow transition
- Transition `box-shadow 0.33s cubic-bezier(0.5, 0, 0, 0.75), color 0.33s`
- Use case: Learn / Order / Experience inside dropdown panel

### Cards
**Vehicle Card** (in nav dropdown):
- Background transparent (inherits panel white), no border, no shadow
- Content: transparent-PNG car image + model name centred + two text links beneath
- Layout: 3-column grid inside the dropdown panel
- No card-level hover — interaction lives on the text links

**Category Card** (homepage):
- Background: full-bleed landscape photograph
- Border-radius ~12px, `overflow: hidden` clips image to corners
- Text: white label in top-left ("Sport Sedan", "Midsize SUV")
- Aspect ~2:1, large format
- No shadow, no border, no overlay gradient — relies on image darkness for contrast

### Inputs & Forms
- Background transparent, text `#171a20`, placeholder `#8e8e8e`
- Minimal border inheriting browser defaults
- Universal Sans Text at 14px

### Persistent Chat Bar
- Anchored to viewport bottom, visible across all sections
- White background, subtle 1px `#eeeeee` border
- Contains chat icon + "Ask a Question" placeholder + send icon + "Schedule a Drive Today" secondary CTA with teal accent

### Navigation
- Centred horizontal nav: TESLA wordmark left, five category buttons centre, three icon buttons (help, language, account) right
- Background transparent over dark hero, opaque white on scroll via `.tds-site-header--white-background`
- Dropdown panel: full-width white panel with 3-column vehicle grid + right-aligned text sidebar, no shadow, no border
- Sticky behaviour: `sticky-without-slide` — stays at top without slide-in animation
- Mobile: hamburger collapse pattern

### Carousel
- Auto-advancing hero with three dots and edge-arrow navigation
- Arrows are ~44px square white semi-transparent buttons sitting at viewport edges
- Lazy loading on below-fold sections — blank white until scrolled into view

## 5. Layout Principles

### Spacing System
- Base unit **8px**. Common values 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- Button padding 4px outer with content centring; nav buttons 4px 16px.
- Section padding: full-viewport (100vh) sections with content vertically centred.
- Card gap: ~16px between category cards.

### Grid & Container
- Max width ~1383px; full viewport used for most content.
- Hero is full-bleed (edge-to-edge, 100vh).
- Nav dropdown: 3-column vehicle grid + right text sidebar (~70/30).
- Category cards: 2-up horizontal layout (large left + smaller right).

### Whitespace Philosophy
Whitespace is the luxury signal. Generous vertical spacing means you only see one message at a time — one car, one model name, one CTA pair. Browsing becomes gallery-like; each scroll is a deliberate transition rather than a continuous feed. Whitespace is not empty — it's the frame that elevates each vehicle to art-piece status.

### Section Cadence
- Light → light → light is the default rhythm.
- Hero overlay text uses Carbon Dark on white sections, Pure White on dark photography.
- The viewport-tall section is the unit of composition. Tesla rejects "fold" thinking entirely.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Flat | 0 | Most decorative elements default to sharp edges |
| Micro | 4px | Buttons (primary, secondary, nav) — barely perceptible |
| Standard | 8px | Form fields, dropdowns |
| Card | 12px | Category cards — the largest radius in the system |
| Large | 16px | Modal corners on rare occasions |
| Pill | 9999px / 50% | Carousel dot indicators |

The 4px radius is doctrinal. Going larger feels like a different brand; going smaller feels like brutalism.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (Flat) | No shadow, no border | Default for all elements at rest |
| 1 (Frost) | `rgba(255,255,255,0.75)` + `backdrop-filter: blur(20px)` | Nav bar on scroll over photography |
| 2 (Overlay) | `rgba(128,128,128,0.65)` | Region selector / cookie modal backdrop |
| 3 (Subtle) | `rgba(0,0,0,0.05)` 0 1px 2px | Rare hover hint, almost never used |
| 4 (Modal) | Plain white on overlay | Modals — depth comes from overlay, not shadow |

### Shadow Philosophy
Tesla's approach to elevation is "none." Box-shadows are absent from the primary interface. Depth is communicated through three alternative strategies:
1. **Z-index layering** — sticky nav sits above hero through positioning, not shadow.
2. **Opacity transparency** — frosted glass and modal backdrops use background opacity rather than drop shadow.
3. **Photography-as-depth** — full-bleed images create their own visual depth through perspective, lighting, and reflective car surfaces, making UI shadows redundant.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — used implicitly for colour transitions
- **Tesla underline-grow**: `cubic-bezier(0.5, 0, 0, 0.75)` — text-link box-shadow expansion
- No "spring" easings, no overshoot, no bounce.

### Duration
- **Fast** 250ms — box-shadow inset
- **Standard** 330ms — the universal Tesla 0.33s, used on every interactive state change
- **Slow** 600ms — page-level fades (rare)

### Per-Component Recipes
- **Button hover**: background-color and border-color transition 0.33s; no scale, no translate, no shadow change.
- **Nav item hover**: colour shifts 0.33s; an active panel slides down at 0.33s.
- **Text link hover**: box-shadow grows the underline at `cubic-bezier(0.5, 0, 0, 0.75)` over 0.33s.
- **Card category hover**: zero. The image is the message; no zoom, no overlay change.
- **Carousel auto-advance**: dot transitions at 0.33s; image cross-fades.

### Page Transitions
Hard cuts. Tesla refuses route-level transitions — clicking a nav item re-renders without an overlay or fade.

### Reduced Motion
`prefers-reduced-motion: reduce` collapses all 0.33s transitions to 0ms; carousel auto-advance pauses; only opacity changes remain. Underline-grow on links is replaced with a static underline.

## 9. Accessibility & A11y

### Contrast Pairs
- **Carbon Dark on White** — `#171a20` / `#ffffff` = **12.6:1** — AAA all sizes
- **Graphite on White** — `#393c41` / `#ffffff` = **9.4:1** — AAA all sizes
- **Pewter on White** — `#5c5e62` / `#ffffff` = **6.8:1** — AAA body
- **White on Electric Blue** — `#ffffff` / `#3e6ae1` = **5.1:1** — AA Normal, AAA Large
- **Silver Fog placeholder on White** — `#8e8e8e` / `#ffffff` = **3.5:1** — fails AA Normal, used only for placeholder text where WCAG permits

### Focus Indicators
- Default focus is a **2px inset box-shadow** in Electric Blue — animates from invisible to visible
- The 3px transparent border on buttons reserves space so the focus ring doesn't shift layout
- All interactive elements honour `:focus-visible` to avoid showing rings on mouse clicks

### ARIA & Patterns
- Dropdown panels expose `aria-expanded` and `aria-controls` on nav items
- Carousel uses `role="region" aria-roledescription="carousel"` with `aria-live="polite"` on the active slide
- The "Ask a Question" chat bar uses `role="search"` semantics for the input
- Modals trap focus and label themselves with `aria-labelledby`

### Keyboard Nav
- Tab order follows visual top-to-bottom: wordmark → nav → icons → CTA pair → carousel controls
- Esc closes dropdowns and modals
- Arrow keys move between carousel slides

### Screen Reader Hints
- Wordmark uses `aria-label="Tesla"` so screen readers don't read T-E-S-L-A letter-by-letter
- Vehicle cards expose model name as accessible name; text links inside (Learn / Order) get full sentences via `aria-label="Learn about Model Y"`
- Hero image carries `alt` describing the vehicle and environment, never decorative

### Reduced Motion
Honoured at the CSS level — see §8.

## 10. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <768px | Single column; hamburger replaces horizontal nav; hero text scales to ~28px; CTA pair stacks; category cards become full-width |
| Tablet | 768–1024px | 2-column nav panel; hero stays 100vh; CTAs side-by-side; reduced horizontal padding |
| Desktop | 1024–1440px | Full horizontal nav; 3-column vehicle grid in dropdown; hero at 40px; CTAs at 200/160 width |
| Large | >1440px | Content centred; hero photography scales to fill wider viewports; max-width on dropdown content |

### Touch Targets
- Primary CTA 200×40 (above 44×44 WCAG)
- Nav buttons 32px height + 4 × 16 padding
- Carousel arrows ~44px square
- Sub-links sit on 14px / 20px line-height — adequate gap for touch

### Collapsing Strategy
- **Nav** horizontal → hamburger drawer
- **Hero CTA pair** side-by-side → stacked
- **Category cards** 2-up → single column
- **Vehicle grid** 3-col → 2-col → 1-col
- **Spacing** keeps viewport-tall sections; horizontal padding shrinks

### Image Behavior
- Hero images responsive across all breakpoints, fill viewport entirely
- `object-fit: cover` maintains cinematic composition
- Transparent PNG vehicle images scale proportionally inside grid cells
- Category card images keep landscape ratio, clip via `overflow: hidden` + radius

### Container Queries
Not used. Breakpoint-driven layout only.

## 11. Content & Voice

### Tone
**Engineered confidence, lowercase calm.** Tesla writes like a manufacturer that doesn't feel the need to convince you — the product does the convincing. Sentences are short, declarative, often missing articles ("Order Now," not "Order Yours Now").

### Microcopy Patterns
- **Primary CTA**: "Order Now", "Schedule a Drive Today"
- **Secondary CTA**: "View Inventory", "Learn", "Order", "Experience"
- **Promo overlay**: "0% APR Available", "Federal Tax Credit Available"
- **Form error**: minimal — relies on browser-native validation messages
- **Empty states**: Tesla rarely shows empty UI; most pages are static product showcases

### CTA Verb Conventions
- **Order** (not "Buy", not "Purchase") — reinforces direct-to-consumer model
- **Schedule a Drive** (not "Book a Test Drive")
- **Learn** — the universal exploration verb
- **Experience** — used for software/feature deep-dives
- **Configure** — inside the order flow only

### Empty States
On configurator pages, an unconfigured vehicle simply shows the base trim. No "Start your build" overlay, no empty illustration. The interface assumes you'll act.

## 12. Dark Mode & Theming

Tesla.com is **light-only by default**. Carbon Dark surfaces appear in select editorial contexts (some In Focus pages, the Energy product pages) but the site does not ship a full dark variant.

**The in-car software and mobile app are dark-first** — Carbon Dark `#171a20` ground, white type, Electric Blue accents — the same token bundle inverted. The Universal Sans family was specifically commissioned to serve both contexts.

If implementing a dark variant of this token bundle:
- Swap `bg #ffffff → #171a20`
- Swap `text-strong #171a20 → #ffffff`
- Swap `text #393c41 → #d0d1d2`
- Swap `text-muted #5c5e62 → #8e8e8e`
- Brand stays `#3e6ae1` (passes contrast on dark too)
- Borders shift to `rgba(255,255,255,0.08)`
- Frosted glass becomes `rgba(23,26,32,0.75)` with the same blur filter

## 13. Lineage & Influences

Tesla's web design lineage runs through three sources: **Apple's late-2000s product pages** (full-bleed photography, viewport-tall sections, single-CTA discipline), **Bauhaus / Swiss minimalism** (radical reduction, the typeface speaks for itself, no decoration), and **automotive print catalogues** of the 1960s–80s — the kind where a single car sat on a glossy page with two paragraphs of copy and nothing else.

What Tesla rejects is just as defining: it rejects the entire German-luxury-car website tradition (BMW's blue chrome, Mercedes' dramatic gradients) in favour of a Silicon Valley product-page idiom. It rejects skeuomorphism, motion-as-decoration, hover spectacle. The site reads less like a car company and more like a hardware manufacturer that happens to ship vehicles.

- **Apple** — viewport-tall product pages, single-CTA hero, photography-first — https://apple.com
- **Universal Sans (Family Type Foundry)** — the custom commissioned typeface — https://www.universalsans.com
- **Bauhaus / Swiss design** — the radical-subtraction lineage — https://en.wikipedia.org/wiki/Swiss_Style_(design)
- **Vintage car catalogues** — gallery presentation of single objects on plain ground

## 14. Do's and Don'ts

### Do
- Let photography dominate every screen — the product IS the design
- Use Electric Blue (`#3e6ae1`) exclusively for primary CTA — never decorative
- Maintain viewport-height sections for major content blocks — one message per screen
- Keep typography at weights 400–500 only — no bold, no light
- Use 4px border-radius for all interactive elements — precision over playfulness
- Trust whitespace as a luxury signal — never fill space because it's empty
- Keep all transitions at 0.33s — consistency in motion equals consistency in colour
- Use transparent-PNG vehicle imagery on white for product showcases
- Centre CTA pairs horizontally below model names — vertical rhythm is model → subtitle → buttons
- Maintain the Display/Text font split — Display for hero only, Text for everything else

### Don't
- Add shadows to any element — elevation through shadow contradicts the gallery aesthetic
- Use more than one chromatic colour besides the blue CTA — palette is monochrome-plus-one
- Apply gradients, patterns, or decorative backgrounds — white and photography are the only backgrounds
- Use type larger than 40px — the typography is restrained even at hero scale
- Add borders to cards or containers — separation is achieved through spacing, not lines
- Use uppercase except in the TESLA wordmark — confidence is expressed through lowercase calm
- Introduce rounded-pill buttons or large radii — the 4px radius is deliberate
- Override Universal Sans with other typefaces — cross-platform consistency is a brand value
- Add scale/translate transforms on hover — Tesla's interactions are colour-only
- Stack more than two CTAs in a viewport — every screen has at most two action buttons

## 15. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Electric Blue `#3e6ae1`
- Background: Pure White `#ffffff`
- Heading text: Carbon Dark `#171a20`
- Body text: Graphite `#393c41`
- Tertiary text: Pewter `#5c5e62`
- Placeholder: Silver Fog `#8e8e8e`
- Alternate surface: Light Ash `#f4f4f4`
- Dark surface: Carbon Dark `#171a20`
- Border / divider: Cloud Gray `#eeeeee`

### Example Component Prompts
- "Create a hero section with a full-viewport background image, centred 'Model Y' title in Universal Sans Display 40/500 in white, a subtitle line below, and two side-by-side buttons: a primary Electric Blue (#3e6ae1) 'Order Now' button and a secondary white 'View Inventory' button, both 4px radius, 40px height, 200px width."
- "Design a navigation bar with a wide-spaced TESLA wordmark on the left, five Universal Sans Text 14/500 buttons (Vehicles, Energy, Charging, Discover, Shop) centred, and three icon buttons on the right — all on transparent over hero, transitioning to opaque white on scroll, no shadow, no border."
- "Build a vehicle card grid with three columns; each card holds a transparent-PNG car image above a model name (17/500 Carbon Dark) and two Pewter text links labelled 'Learn' and 'Order' — pure white surface, no border, no shadow."
- "Create a category card with full-bleed landscape photography, ~12px border-radius, overflow hidden, white text label 'Sport Sedan' in the top-left — no overlay gradient, contrast comes from image darkness alone."
- "Design a persistent bottom chat bar with a chat icon + 'Ask a Question' placeholder + send icon + a secondary 'Schedule a Drive Today' CTA — anchored to viewport bottom, white background, single thin border."
- "Add an inset box-shadow focus state on a primary CTA — invisible at rest, animating to a 2px Electric Blue ring inside the button on `:focus-visible`, transition 0.25s."

### Iteration Guide
1. Focus on ONE component at a time — the system is so minimal that each element must be pixel-perfect.
2. Reference specific colour names and hex codes — there are only seven colours in the entire system.
3. Use natural-language descriptions ("barely-rounded corners") not raw CSS values.
4. Describe the desired feel alongside measurements — "gallery-like silence between sections" communicates whitespace philosophy better than `margin-bottom: 100vh`.
5. Verify photography is doing the emotional heavy-lifting — if the UI itself feels designed, it's too much.
6. Test transitions at 0.33s; if anything feels rushed or sluggish you've broken the rhythm.
7. Refuse decorative shadow even when designers ask for it — Tesla's depth is photographic.
