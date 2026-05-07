---
name: KAYAK
tagline: Burnt-orange flight-search density — Open Sans on white, comparison-engine maximalism, price-graph data viz.
updated_at: 2026-05-04T19:57:58+12:00
published_at: 2026-05-04T19:57:58+12:00
author: webdesignhot
source_url: https://www.kayak.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [marketplace]
tags: [light, marketplace, travel, sans, dense, data-viz, comparison-engine, flight-search]
preview_swatch: ['#ffffff', '#ff690f', '#1e2026']
related: [booking, expedia, airbnb]
description: 'KAYAK runs the canonical comparison-engine surface — a near-white canvas (`#ffffff`) anchored on near-black ink (`#1e2026`), accented by the unmistakable **KAYAK orange** (`#ff690f`) that paints the wordmark, primary CTAs, the price-trend graph fill, and the deal flag. Type runs **Open Sans**, the open-source workhorse humanist sans, at 600–700 weights — display 28–36px / 700, body 14/400 — because the page is engineered for data density. A typical flight search results page packs a 56px masthead, a 240px sticky filter sidebar, a horizontal price-trend graph, a sort-tab bar, and 30+ flight cards each carrying airline logo, depart/arrive times, duration/stops, fees, environmental data, and Select CTA. Where Booking is dense for booking-funnel conversion and Expedia is dense for multi-product breadth, KAYAK is dense because it is **a meta-search engine** — comparing fares across hundreds of providers means the surface must surface every datapoint. The result is the canonical price-comparison flight-search aesthetic: orange-on-white, data-dense, graph-anchored, and unapologetically utilitarian.'

colors:
  bg: '#ffffff'                  # canvas — KAYAK has app-only dark mode
  bg-alt: '#f8f8f8'              # alt-band footer, secondary surfaces
  bg-data: '#f0f3f5'             # price-trend graph background
  surface: '#ffffff'             # cards inherit canvas
  surface-soft: '#f4f4f4'        # disabled inputs, alt rows
  surface-strong: '#e8e8e8'      # divider band
  surface-orange-soft: '#fff2e8' # promo banner soft orange
  surface-graph: '#fdf3eb'       # price-trend graph fill area
  surface-deal: '#fff2e8'        # deal cell tint
  text: '#1e2026'                # primary ink — near-black with a slight cool bias
  text-strong: '#0a0c10'         # heading ink at maximum punch
  text-body: '#2c2f36'           # body copy
  text-muted: '#5e6470'          # secondary metadata
  text-soft: '#8a909d'           # caption, faint counts
  text-on-brand: '#ffffff'       # white on orange
  text-on-orange: '#ffffff'      # ditto
  brand: '#ff690f'               # KAYAK orange — wordmark, primary CTA
  brand-hover: '#e85a07'         # hover deepens
  brand-active: '#c54a00'        # pressed
  brand-light: '#fff2e8'         # informational banner tint
  brand-deep: '#7a3300'          # deep orange text on light orange surface
  brand-graph: '#ff690f'         # price-trend graph stroke colour (= brand)
  brand-graph-fill: '#fdf3eb'    # price-trend graph fill area below stroke
  link: '#0066cc'                # default link blue (sober, utilitarian)
  link-hover: '#004a99'
  link-visited: '#5a4392'        # visited purple
  border: '#dadde0'              # default 1px hairline
  border-soft: '#eaecef'         # editorial divider
  border-strong: '#a4a9b4'       # input outline
  border-input-focus: '#ff690f'  # focused input thickens to brand orange
  divider: '#dadde0'
  scrim: 'rgba(0,0,0,0.5)'       # modal backdrop
  shadow-card: 'rgba(0,0,0,0.06)'
  shadow-elev: 'rgba(0,0,0,0.14)'
  shadow-deep: 'rgba(255,105,15,0.18)'
  success: '#0a8c3e'              # "Cheapest" / "Best" badge green
  success-soft: '#e8f6ee'
  success-deep: '#0a6b32'
  warning: '#d97706'              # advisory amber
  warning-soft: '#fff7e6'
  danger: '#cc2935'               # validation error red, also "Highest CO2" environmental flag
  danger-soft: '#fdeaec'
  info: '#0066cc'                 # informational
  info-soft: '#e8f0f8'
  best-flag: '#0a8c3e'             # "Best" green flag
  cheapest-flag: '#0a8c3e'         # "Cheapest" green flag
  fastest-flag: '#9333ea'          # "Fastest" purple flag
  short-stop-flag: '#0066cc'       # "Short stop" blue flag
  hacker-fare: '#ff690f'           # "Hacker Fare" KAYAK signature orange
  pricegraph-stroke: '#ff690f'
  pricegraph-fill: '#fdf3eb'
  pricegraph-low: '#0a8c3e'        # green for low-price days
  pricegraph-high: '#cc2935'       # red for high-price days

typography:
  display:
    family: '"Open Sans", "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 600, 700, 800]
    opentype-features: ['tnum']
  body:
    family: '"Open Sans", "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 600, 700]
  mono:
    family: 'SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    hero-display:    { size: 36, weight: 700, lineHeight: 1.11, tracking: '-0.5px',  family: display }
    page-title:      { size: 28, weight: 700, lineHeight: 1.14, tracking: '-0.25px', family: display }
    section-head:    { size: 22, weight: 700, lineHeight: 1.18, tracking: '0',       family: display }
    sub-section:     { size: 18, weight: 700, lineHeight: 1.22, tracking: '0',       family: display }
    flight-title:    { size: 18, weight: 700, lineHeight: 1.22, tracking: '0',       family: display }
    title-md:        { size: 16, weight: 700, lineHeight: 1.25, tracking: '0',       family: body }
    title-sm:        { size: 14, weight: 700, lineHeight: 1.29, tracking: '0',       family: body }
    body-md:         { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',       family: body }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.38, tracking: '0',       family: body }
    body-xs:         { size: 12, weight: 400, lineHeight: 1.33, tracking: '0',       family: body }
    caption:         { size: 12, weight: 600, lineHeight: 1.33, tracking: '0',       family: body }
    micro:           { size: 11, weight: 400, lineHeight: 1.27, tracking: '0',       family: body }
    price-display:   { size: 28, weight: 700, lineHeight: 1.0,  tracking: '-0.25px', family: body, opentype: ['tnum'] }
    price-card:      { size: 22, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'] }
    flight-time:     { size: 20, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'] }
    duration-text:   { size: 13, weight: 400, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'] }
    button-md:       { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body }
    button-sm:       { size: 13, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body }
    nav-link:        { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0',       family: body }
    badge:           { size: 11, weight: 700, lineHeight: 1.18, tracking: '0.4px',   family: body, transform: uppercase }

radius:
  micro: 2
  sm: 4         # default — buttons, cards, most chrome — KAYAK's signature near-square utility
  md: 6
  lg: 8         # property cards, larger feature cells
  xl: 12
  pill: 9999    # filter chips, score chips, small toggles

spacing:
  base: 4
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 56
  masthead-height: 56
  search-bar-height: 56
  filter-rail-width: 240

components:
  button-primary:
    bg: '#ff690f'
    color: '#ffffff'
    radius: 4
    padding: '12px 24px'
    height: 44
    font: button-md
    use: 'Search, Select, Continue — every primary action.'
  button-primary-hover:
    bg: '#e85a07'
    color: '#ffffff'
    radius: 4
    use: 'Hover state — deeper orange.'
  button-primary-active:
    bg: '#c54a00'
    color: '#ffffff'
    radius: 4
    use: 'Pressed state.'
  button-secondary:
    bg: '#ffffff'
    color: '#1e2026'
    border: '1px solid #1e2026'
    radius: 4
    padding: '11px 23px'
    height: 44
    use: 'Save, Compare, Cancel — secondary action.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#0066cc'
    use: 'Inline links, "Show more" — underlined on hover.'
  button-select-flight:
    bg: '#ff690f'
    color: '#ffffff'
    radius: 4
    padding: '8px 16px'
    height: 36
    font: button-sm
    use: 'Compact "Select" CTA on flight cards — smaller than primary.'
  search-bar:
    bg: '#ffffff'
    color: '#1e2026'
    radius: 4
    height: 56
    border: '1px solid #dadde0'
    use: 'Home page search bar — From / To / Depart / Return / Travelers / Search button. Square geometry, 4px radius.'
  search-bar-segment:
    bg: '#ffffff'
    color: '#1e2026'
    radius: 0
    height: 56
    border-right: '1px solid #dadde0'
    use: 'Inner segment of the search bar.'
  search-button:
    bg: '#ff690f'
    color: '#ffffff'
    radius: 4
    height: 56
    padding: '0 24px'
    font: button-md
    use: 'The orange Search button anchors the right edge of the search bar.'
  flight-card:
    bg: '#ffffff'
    color: '#1e2026'
    radius: 8
    border: '1px solid #dadde0'
    use: 'Flight result card — left airline+price column, middle 5-segment flight detail row (depart / duration / arrive), right Select CTA.'
  flight-card-hover:
    bg: '#ffffff'
    radius: 8
    shadow: 'rgba(0,0,0,0.14) 0 4px 16px'
    use: 'Hover state — shadow intensifies + 1px lift.'
  hotel-card:
    bg: '#ffffff'
    color: '#1e2026'
    radius: 8
    border: '1px solid #dadde0'
    use: 'Hotel result card — left photo, middle meta, right rate stack with multiple provider rows.'
  filter-chip:
    bg: '#ffffff'
    color: '#1e2026'
    radius: 9999
    padding: '6px 12px'
    border: '1px solid #a4a9b4'
    use: 'Filter pills inside search results — pill outline, ink text.'
  filter-chip-active:
    bg: '#fff2e8'
    color: '#ff690f'
    radius: 9999
    border: '1px solid #ff690f'
    use: 'Active filter — light orange tint with brand outline.'
  text-input:
    bg: '#ffffff'
    color: '#1e2026'
    radius: 4
    height: 48
    padding: '12px 12px'
    border: '1px solid #a4a9b4'
    focus: 'border thickens to 2px orange (#ff690f)'
    use: 'Form fields — name, email, payment.'
  date-picker-day:
    bg: 'transparent'
    color: '#1e2026'
    radius: 4
    size: 36
    use: '36×36px square day cell with day number — square radius matches system.'
  date-picker-day-selected:
    bg: '#ff690f'
    color: '#ffffff'
    radius: 4
    use: 'Selected day — orange fill, white text.'
  best-flag:
    bg: '#0a8c3e'
    color: '#ffffff'
    radius: 4
    padding: '2px 6px'
    font: badge
    use: '"BEST" / "CHEAPEST" green tag on flight cards.'
  fastest-flag:
    bg: '#9333ea'
    color: '#ffffff'
    radius: 4
    padding: '2px 6px'
    font: badge
    use: '"FASTEST" purple tag.'
  hacker-fare-flag:
    bg: '#ff690f'
    color: '#ffffff'
    radius: 4
    padding: '2px 6px'
    font: badge
    use: '"HACKER FARE" — KAYAK''s signature multi-airline routing label.'
  price-trend-graph:
    bg: '#fdf3eb'
    stroke: '#ff690f'
    radius: 4
    use: 'Horizontal price-by-day graph above flight results — orange stroke on light orange fill area, with green/red day markers.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out-soft: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 180
  duration-slow: 280
  card-hover-lift: '0 → -1px translate, shadow tier intensifies'
  filter-pill-active: 'background 100ms standard, border colour shifts orange'
  modal-enter: 'scrim 180ms ease-out + dialog 220ms emphasized translate-y +8 → 0'
  reduced-motion: 'respects prefers-reduced-motion: reduce — transforms suppressed, opacity-only.'

breakpoints:
  mobile: 600
  tablet: 900
  desktop: 1200
  wide: 1440

shadows:
  ambient: 'rgba(0,0,0,0.04) 0 1px 2px'
  card: 'rgba(0,0,0,0.06) 0 2px 6px'
  hover: 'rgba(0,0,0,0.14) 0 4px 16px'
  dropdown: 'rgba(0,0,0,0.14) 0 6px 16px, rgba(0,0,0,0.04) 0 0 0 1px'
  modal: 'rgba(0,0,0,0.18) 0 12px 32px'
  ring: '0 0 0 2px #ff690f'

accessibility:
  contrast-text-on-bg: 14.6              # #1e2026 on #ffffff — AAA
  contrast-text-on-brand: 4.6            # #ffffff on #ff690f — AA at body, AAA at large
  contrast-link-on-bg: 7.2                # #0066cc on #ffffff — AAA
  contrast-muted-on-bg: 5.8               # #5e6470 on #ffffff — AA
  focus-ring: '2px solid #ff690f + 2px outline offset — brand orange ring matches the utility funnel'
  reduced-motion-honored: true
  touch-target-min: 44                    # KAYAK runs slightly tighter than 48 — utility density
  keyboard-nav: 'Search bar: Tab From → To → Depart → Return → Travelers → Search. Filter sidebar: Tab top → bottom; Space toggles checkboxes.'

dark-mode: null   # Light-only on web. KAYAK mobile app ships dark mode, but the web property is engineered around white-canvas data density.
---

## 1. Visual Theme & Atmosphere

KAYAK is the meta-search engine that the entire travel marketplace category is benchmarked against — Booking is a hotel marketplace, Expedia is a multi-product travel mall, KAYAK is the **price-comparison engine that ranges across hundreds of providers**. The base canvas is **pure white** (`#ffffff`), the dominant ink is a near-black `#1e2026` with a slight cool bias, and a single voltage of **KAYAK orange** (`#ff690f`) carries the wordmark, every primary CTA, the price-trend graph stroke, the date-picker selected day, and the "Hacker Fare" tag — KAYAK's signature multi-airline routing flag.

Type runs **Open Sans** — the most utilitarian choice in the travel-marketplace category. Where Booking has Bookin Sans (custom), Expedia has Expedia Sans (custom), Airbnb has Cereal (custom), KAYAK runs the open-source workhorse. The choice is deliberate: KAYAK's product is **data**, not brand voice; the typeface should be invisible, legible, and render fast on every device. Open Sans sits at 600–700 weights for display, 400 for body, with `tnum` enabled aggressively across prices, durations, and times. The hero h1 ("Search hundreds of travel sites at once") renders at 36px / 700 — confident utility, not aspirational.

The shape language is **near-square**. Buttons round at 4px, flight cards at 8px, search-bar segments at 0 (sharp dividers), filter chips at 9999px. The system trusts square corners to read as "data, transactional, fast" — pill geometry would soften the comparison-engine utility into a consumer brand experience that KAYAK explicitly avoids.

The atmosphere is **data-density done well**. A typical flight search results page packs:
- 56px masthead with KAYAK wordmark + product tabs (Flights, Hotels, Cars, Packages, Stays)
- Search bar persistent below the masthead
- Horizontal price-trend graph (60px tall) showing "$ by day" across the next 30 days, with the user's selected dates highlighted in orange
- Sort tab bar (Best, Cheapest, Quickest, Other) with green/purple/blue flag system
- 240px sticky filter sidebar (Stops, Airlines, Times, Duration, Cabin, Bags, Price)
- 30+ flight cards each carrying airline logo+name, depart time + airport code, duration + stops, arrive time + airport code, environmental impact (CO2), price, and a Select CTA

Every dense element is purposeful. The page reads as legible because the colour-coding is rigid: orange for brand and CTA, green for "Best/Cheapest", purple for "Fastest", blue for "Short stop", red for "High CO2/error". The data-viz layer (price-trend graph) is a brand surface in itself — KAYAK is the only marketplace that puts a dynamic price chart above the results.

**Key Characteristics:**
- Single voltage: KAYAK orange `#ff690f` carries the wordmark, every primary CTA, and the data-viz stroke
- Open Sans at 400/600/700 — utilitarian, legible, fast-rendering — the brand's anti-vanity choice
- Near-square shape language: 4px buttons, 8px flight cards, 0px search segments, 9999px filter chips only
- Horizontal price-trend graph above flight results — orange stroke, light orange fill, green/red day markers
- Strict colour-coded flag system: green = best/cheapest, purple = fastest, blue = short-stop, orange = hacker-fare, red = high-CO2
- 5-segment flight card layout — left price, middle 3-segment flight detail (depart / arc / arrive), right Select CTA
- Dense filter sidebar with 8+ collapsible sections and live result count
- Tabular numerals everywhere money or time appears — flight times, durations, prices, fees all align

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): the default page floor for every public page. Light-only on web.
- **Ink** (`#1e2026`): the dominant text colour. Near-black with a slight cool bias.
- **KAYAK Orange** (`#ff690f`): the brand colour. Wordmark, primary CTA, price-trend graph stroke, date-picker selected, focus ring, "Hacker Fare" flag.

### Brand & Sub-Brand
- **Orange Hover** (`#e85a07`): hover deepens.
- **Orange Active** (`#c54a00`): pressed state.
- **Orange Light** (`#fff2e8`): informational tint, deal cell background, active filter chip surface.
- **Orange Deep** (`#7a3300`): deep orange text colour used on light orange surface tints.

### Accent (Flag System)
- **Best/Cheapest** (`#0a8c3e`): green flag — "BEST", "CHEAPEST" markers on sort tabs and flight cards.
- **Fastest** (`#9333ea`): purple flag — "FASTEST" sort tab and badge.
- **Short Stop** (`#0066cc`): blue flag — "SHORT LAYOVER" badge.
- **High CO2** (`#cc2935`): red flag — environmental impact warning on high-emission flights.
- **Hacker Fare** (`#ff690f`): brand orange flag — KAYAK's proprietary multi-airline routing label.

### Interactive
- **Link** (`#0066cc`): default inline link colour — sober, utilitarian blue, distinct from brand orange.
- **Link Hover** (`#004a99`): hover deepens.
- **Link Visited** (`#5a4392`): browser-like visited purple.
- **Selected** (`#ff690f` fill, `#ffffff` text — date-picker days, active filter chips).
- **Disabled** (`#a4a9b4` text on `#f4f4f4` surface).

### Neutral Scale
- **Ink** (`#1e2026`) — display, body, primary labels
- **Body** (`#2c2f36`) — secondary running text
- **Muted** (`#5e6470`) — sub-titles, metadata, footer secondary labels
- **Soft** (`#8a909d`) — captions, faint counts
- **Border Strong** (`#a4a9b4`) — input outlines, disabled controls
- **Border** (`#dadde0`) — default 1px hairline (card outlines, dividers)
- **Border Soft** (`#eaecef`) — alt-row separators

### Surface & Borders
- **Canvas** (`#ffffff`) — page floor
- **Surface Soft** (`#f4f4f4`) — disabled fields, alt rows
- **Surface Strong** (`#e8e8e8`) — divider band
- **Surface Orange Soft** (`#fff2e8`) — promo banner soft orange, deal cells
- **Surface Graph** (`#fdf3eb`) — price-trend graph fill area
- **Bg Data** (`#f0f3f5`) — data-viz background (cleaner than surface-soft for chart contexts)

### Shadow Colors
KAYAK uses neutral-grey-tinted shadows — utility surfaces, no brand subliminal at depth layer. The shadow philosophy is "shadow exists only where elevation is functional" — flight cards at rest are flat (border only), shadow appears on hover and on dropdown overlays.

- `rgba(0,0,0,0.04) 0 1px 2px` — flat ambient
- `rgba(0,0,0,0.06) 0 2px 6px` — card resting (rare — most cards at rest are flat with border only)
- `rgba(0,0,0,0.14) 0 4px 16px` — card hover, dropdowns
- `rgba(0,0,0,0.18) 0 12px 32px` — modal

### Semantic
- **Success** (`#0a8c3e` on `#e8f6ee`) — Best/Cheapest flag, "Free cancellation" green text
- **Warning** (`#d97706` on `#fff7e6`) — advisory amber for low availability, fee changes
- **Danger** (`#cc2935` on `#fdeaec`) — validation error red, also "High CO2" environmental flag
- **Info** (`#0066cc` on `#e8f0f8`) — informational banners, "Short layover" flag

## 3. Typography Rules

### Font Family

**Primary**: `Open Sans` — the open-source humanist sans by Steve Matteson (Google Fonts canon). Fallback chain: `Segoe UI, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif`. The choice is deliberate: KAYAK's product is data, not brand voice; the typeface should render fast on every device, including budget phones and slow connections that travel users routinely encounter.

**Mono companion**: not used in the public marketing surface. Monospace appears only inside booking-confirmation reference numbers — `tnum` provides equivalent column alignment in the body type.

**OpenType features**: `tnum` is enabled aggressively across prices, durations, flight times, fees, layover times, distances. KAYAK uses `tnum` on everything numeric — this is the system's most disciplined typographic commitment.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | Open Sans | 36 | 700 | 1.11 | -0.5px | — | Homepage h1 ("Search hundreds of travel sites at once") |
| page-title | Open Sans | 28 | 700 | 1.14 | -0.25px | — | Search results h1 ("Flights to NYC: 247 results") |
| section-head | Open Sans | 22 | 700 | 1.18 | 0 | — | Editorial bands |
| sub-section | Open Sans | 18 | 700 | 1.22 | 0 | — | Sub-section titles |
| flight-title | Open Sans | 18 | 700 | 1.22 | 0 | — | Flight card primary identifier (airline + flight number) |
| title-md | Open Sans | 16 | 700 | 1.25 | 0 | — | Filter sidebar section heads |
| title-sm | Open Sans | 14 | 700 | 1.29 | 0 | — | Card meta labels |
| body-md | Open Sans | 14 | 400 | 1.43 | 0 | — | Default running-text — note: 14, not 16, for density |
| body-sm | Open Sans | 13 | 400 | 1.38 | 0 | — | Card meta lines |
| body-xs | Open Sans | 12 | 400 | 1.33 | 0 | — | Dense card secondary lines |
| caption | Open Sans | 12 | 600 | 1.33 | 0 | — | Section labels ("DEPART", "ARRIVE") |
| micro | Open Sans | 11 | 400 | 1.27 | 0 | — | Footer legal, fine-print disclosures |
| price-display | Open Sans | 28 | 700 | 1.0 | -0.25px | tnum | Detail page price |
| price-card | Open Sans | 22 | 700 | 1.0 | 0 | tnum | Flight card price |
| flight-time | Open Sans | 20 | 700 | 1.0 | 0 | tnum | Depart/arrive time on flight card ("8:25 AM") |
| duration-text | Open Sans | 13 | 400 | 1.0 | 0 | tnum | "5h 45m" duration label |
| button-md | Open Sans | 14 | 700 | 1.0 | 0 | — | Primary CTA labels — note: weight 700 (heavier than other brands) |
| button-sm | Open Sans | 13 | 700 | 1.0 | 0 | — | Filter chip labels, Select buttons on flight cards |
| nav-link | Open Sans | 14 | 600 | 1.0 | 0 | — | Top product-nav labels |
| badge | Open Sans | 11 | 700 | 1.18 | 0.4px | uppercase | "BEST", "CHEAPEST", "FASTEST", "HACKER FARE" |

### Principles

- **Utility over voice.** Open Sans is the typographic equivalent of "the page should be invisible — let the data speak". KAYAK explicitly avoids custom typography because the brand is the comparison engine, not the typography.
- **Body at 14, not 16.** KAYAK runs body at 14/400 because density is the operating mode — a flight card needs to fit airline / route / duration / price / Select within ~120px of vertical space, and 16/400 would push that to 140px.
- **Display weight is 700.** Hierarchy from size — 18/22/28/36/700 ladder — never weight ladder. The system commits to bold display headlines because the page already runs dense; lighter display would get lost in the data-viz.
- **Tabular numerals on every numeric.** This is non-negotiable. Flight times must align (8:25 AM next to 11:45 AM next to 2:15 PM); durations must align (5h 45m next to 7h 10m); prices must align ($247 next to $1,289). The data-viz utility depends on column alignment.
- **Caption weight is 600.** Section labels ("DEPART", "ARRIVE", "DURATION") render at 12/600 uppercase — not the typical caption weight of 500. The 600 weight gives utilitarian labels the punch they need to anchor data columns.
- **No display custom OT features.** No `ss01`, no `ss02`, no stylistic alternates — Open Sans renders at its default. The brand explicitly avoids vanity typography.
- **Inter is a 1:1 substitute** if Open Sans is unavailable. Both are humanist sans with similar metrics. KAYAK's typography degrades gracefully to either.

## 4. Component Stylings

### Buttons

**`button-primary`** — Orange (`#ff690f`) fill, white text, 4px radius, 12×24px padding, 44px height (note: 44, not 48 — KAYAK runs slightly tighter than the consumer-warm 48px standard), weight 700. The most common CTA: "Search", "Select", "Continue". Hover deepens to `#e85a07`; active flips to `#c54a00`.

**`button-secondary`** — White fill with ink text and a 1px ink outline. 4px radius, 44px height. Used for "Save", "Compare", "Cancel".

**`button-tertiary-text`** — Plain blue (`#0066cc`) text, no surface, no border. Underlined on hover.

**`button-select-flight`** — Compact orange CTA on flight cards. 4px radius, 8×16px padding, 36px height, weight 700, font `button-sm`. Smaller than primary CTAs because the flight card is dense and the Select button must fit in ~80px right column.

### Cards

**`flight-card`** — The system's signature component. Three-row layout when stacked but visually a single horizontal card:
- **Left column** (~25% width): airline logo (28×28px circular), airline name (`body-sm` muted), flight number (`body-xs` soft).
- **Middle 5-segment row** (~55% width): `flight-time` depart (`8:25 AM`) + airport code (`body-sm` muted), then a horizontal duration arc with `duration-text` ("5h 45m") and stop count below ("1 stop, JFK"), then `flight-time` arrive + airport code. The arc is a 1px hairline with a small circle at each end.
- **Right column** (~20% width): price stack — `price-card` ("$247"), then a `body-xs` muted "round-trip" qualifier, then a `button-select-flight` CTA.

8px outer radius, 1px hairline border, hover intensifies shadow + 1px lift.

**`hotel-card`** — Three-column layout: photo column (~30% width), middle meta column (property title, location, review chip), right rate stack column (multiple provider rows — KAYAK / Booking / Expedia rates, each with their own price + Select). 8px radius, hairline border.

**`package-card`** — Vertical card combining flight + hotel into a single package: flight summary at top, hotel summary in middle, total price + Select CTA at bottom.

**`detail-rail-card`** — Right rail card on flight detail. White surface, 8px radius, 1px hairline, 16px padding. Contains fee breakdown, environmental impact, baggage rules, terms link.

### Badges, Tags, Pills

**`best-flag`** — Green (`#0a8c3e`) fill, white text, 4px radius, 2×6px padding. "BEST" / "CHEAPEST" markers on sort tabs and flight cards. The system's most positive flag.

**`fastest-flag`** — Purple (`#9333ea`) fill, white text, 4px radius. "FASTEST" — distinguished from "BEST" so sort by speed reads visually different from sort by price.

**`hacker-fare-flag`** — Brand orange (`#ff690f`) fill, white text, 4px radius. "HACKER FARE" — KAYAK's proprietary signature. This is the only flag that uses brand colour — it signals "this routing is unique to KAYAK".

**`short-stop-flag`** — Blue (`#0066cc`) fill, white text, 4px radius. "SHORT LAYOVER" — informational badge.

**`high-co2-flag`** — Red (`#cc2935`) fill, white text, 4px radius. Environmental impact warning on high-emission flights.

**`filter-chip`** — Pill-shaped (9999px), 1px hairline border, ink text. Active chip flips to light-orange tint with brand orange outline.

### Inputs / Forms

**`text-input`** — White surface, 1px hairline (`#a4a9b4`) border, 4px radius, 48px height, 12×12px padding. Stacked label above (in `caption` muted). On focus the border thickens to 2px brand orange (`#ff690f`).

**`search-bar`** — Square-cornered (4px radius) global search bar. White surface, 56px height, 1px hairline border. Internally divided by vertical hairlines into From / To / Depart / Return / Travelers segments. Each segment is sharp-cornered (0 radius) inside the bar — the only place 0 radius appears in the system. Right edge terminates in an orange `search-button` matching the bar height.

**`search-button`** — Orange fill, white text, 4px radius (matching the search bar), 56px height, 24px horizontal padding. Always anchored to the right edge of the search bar.

### Navigation

**`top-nav`** — White surface, 56px height, 1px bottom hairline. Wordmark flush left (orange + ink — "kayak" in lowercase orange), product tabs centred (Flights, Hotels, Cars, Packages, Stays, Things to Do), account utilities flush right.

**`product-tab-active`** — Ink label in `nav-link`, 24px hand-illustrated icon (single colour), 2px orange underline beneath the label.

**`product-tab-inactive`** — Muted label, illustrated icon, no underline.

### Data Viz

**`price-trend-graph`** — Horizontal price-by-day chart that anchors the top of every flight results page. 60px tall, full width minus filter sidebar. Background fills with `#fdf3eb` (light orange surface). Stroke runs in brand orange (`#ff690f`) at 2px. Points along the stroke render as small circles (4×4px) coloured green for low-price days (`#0a8c3e`), red for high-price days (`#cc2935`), and orange for the user's selected day (currently filtered). X-axis labels render in `body-xs` muted (date abbreviations); Y-axis is unlabeled (KAYAK trusts the visual — relative price beats exact value).

**`environmental-impact-bar`** — Horizontal bar inside flight cards showing CO2 emissions relative to other flights — green for "Lower than typical", grey for "Typical", red for "Higher than typical".

### Date Picker

**`date-picker-day`** — 36×36px square cell (4px radius matches system) carrying the day number in `body-sm`. Default state transparent fill, ink text. Hover state fills `#fff2e8` light orange.

**`date-picker-day-selected`** — Brand orange fill, white text, 4px radius. Range cells between two selected days carry a `#fff2e8` light-orange background.

### Modals & Overlays

**`modal`** — Centred dialog over a 50%-opacity black scrim. White surface, 8px radius, no border, modal shadow tier. Close button is a 32px square icon-button anchored top-right.

**`tooltip`** — Ink fill, white text in `body-sm`, 4px radius, 8×12px padding.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96`
- Section padding (vertical): 32–48px for editorial bands, 24px for search-results bands — tighter than Booking's 48px, much tighter than Expedia's 64–80px (KAYAK is utility-first, density-first)
- Card internal padding: 16px for flight-card meta, 12px for tooltip, 8px for filter-chip
- Gutters: 8px between flight cards (very tight — utility density), 16px between filter sections, 8px on filter-chip rows

### Grid & Container

- Max content width: ~1280px centred
- Search results: ~1200px centred — 240px left filter sidebar + ~960px right results column
- Footer: 4-column link grid at desktop with destinations, product types, "About", "Help"
- Flight detail: 2-column with full flight breakdown on the left (~70% width) and a sticky fees rail on the right (~28%)
- Hero search: full-width white band with the square search bar centred at ~1024px

### Whitespace Philosophy

KAYAK is the densest of the travel-marketplace systems. The page packs more functional surfaces per scroll than Booking or Expedia: the price-trend graph alone occupies the visual real estate that other brands use for editorial bands. The contrast is intentional — KAYAK wants the user to feel the comparison engine working, every signal contributing to the decision.

### Section Cadence

Light/dark alternation is rare — KAYAK stays on white through 95% of the surface. The only dark surface is the tooltip; the only orange surface is the price-trend graph fill, deal banners, and the active filter chip background. The page reads as "white canvas with utility data layers" — no editorial bands, no marketing imagery, no breath.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Sharp | 0px | Search-bar inner segments, divider rules |
| Micro | 2px | Sub-tabs, dense controls |
| Standard | 4px | Buttons, text inputs, smaller cards, deal flags, date-picker days |
| Comfortable | 6px | Tooltips, inline call-outs |
| Large | 8px | Flight cards, hotel cards, modals |
| Featured | 12px | Hero callout cards |
| Pill | 9999px | Filter chips, score chips, small toggles |

The single design rule: **square geometry by default; pill only on filter chips and toggles**. Buttons round at 4px (utility-square), cards at 8px (slightly softened), search-bar segments at 0 (sharp dividers — the only place 0 radius appears). KAYAK explicitly rejects pill geometry on buttons because pill reads as consumer-warm; KAYAK is data-utility.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow, 1px border only | Body, hero, footer, masthead, filter sidebar, flight cards at rest (~90% of surfaces) |
| 1 — Hover | `rgba(0,0,0,0.14) 0 4px 16px` | Flight cards on pointer hover, dropdowns |
| 2 — Modal | `rgba(0,0,0,0.18) 0 12px 32px` | Centred dialogs |
| 3 — Scrim | `rgba(0,0,0,0.5)` ground | Global modal backdrop |

### Shadow Philosophy

KAYAK is the **flattest** of the travel-marketplace systems. Cards at rest have no shadow at all — they rely on a 1px hairline border to define their boundary. Shadow appears only on hover (a clear elevation event signalling interactivity) and on overlays (modals, dropdowns). This is the utility surface stance: depth is a functional signal, not an aesthetic flourish.

There is no resting card shadow tier (where Booking has a soft 2-layer resting shadow and Expedia has a soft 2-layer resting shadow, KAYAK has nothing — just the border). The hover shadow is the system's only depth event on the flat surface, and it is significant: 14% black opacity at 16px blur, paired with a 1px lift.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — the default for hover lifts, hairline transitions, scrim fades
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry
- **Out-soft**: `cubic-bezier(0.0, 0, 0.2, 1)` — date-picker month flip, price-trend graph animation

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 100ms | Hover state colour swaps, filter-chip toggle |
| Standard | 180ms | Card hover lift, modal scrim fade |
| Slow | 280ms | Page transitions, price-trend graph initial draw |

### Per-Component Recipes

- **Flight card hover**: `transform: translateY(-1px); shadow: hover tier; transition: 180ms standard.` Subtle 1px lift signals interactivity.
- **Filter chip toggle**: background fades from `#ffffff` → `#fff2e8` over 100ms, border colour shifts to brand orange.
- **Search button hover**: background `#ff690f` → `#e85a07` over 100ms.
- **Sort tab toggle**: tab underline animates left/right under tab label over 180ms standard.
- **Price-trend graph initial draw**: stroke draws left-to-right over 280ms ease-out, then point markers fade in over 180ms standard.
- **Modal enter**: scrim fades in over 180ms ease-out, then dialog translates from `translateY(8px) opacity(0)` to `translateY(0) opacity(1)` over 220ms emphasized.

### Page Transitions

Page-to-page navigation uses an instant content swap with a 100ms scrim fade — KAYAK is a utility, and motion adds nothing to a comparison decision. Travel agents and frequent travellers, the brand's core users, want speed over polish.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. All transforms suppress; only opacity transitions remain. Card hover lift becomes shadow-only; modal enter becomes 100ms opacity-only fade; price-trend graph renders instantly without the draw animation.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #1e2026 ink on #ffffff canvas | 14.6 | AAA |
| #ffffff on #ff690f orange | 4.6 | AA body / AAA large |
| #0066cc link on #ffffff | 7.2 | AAA |
| #5e6470 muted on #ffffff | 5.8 | AA |
| #ffffff on #0a8c3e green | 4.6 | AA body |
| #ffffff on #cc2935 red | 5.0 | AA body |
| #ffffff on #9333ea purple | 5.4 | AA body |

### Focus Indicators

Focus ring is `2px solid #ff690f` with 2px outline-offset — KAYAK uses brand orange on focus because the funnel is keyboard-heavy (search bar, filter sidebar, date picker, payment fields), and brand-coloured focus reinforces the utility surface.

### ARIA Patterns

- **Search bar**: `role="search"` on the outer container; each segment is a `<button>` that opens a `role="dialog"` overlay
- **Flight card**: select button uses standard `<button>`; the entire card is wrapped in a `<a>` with verbose `aria-label` ("Delta flight 247, depart 8:25 AM JFK, 1 stop, 5 hours 45 minutes, arrive 11:10 AM LAX, $247")
- **Filter sidebar**: each filter section is a `<fieldset>` with a `<legend>`; checkboxes are native with `aria-describedby` for result count
- **Price-trend graph**: has `role="img"` with `aria-label` describing the trend ("30-day price trend: lowest $187 on May 12, highest $389 on May 25")
- **Sort tabs**: `role="tablist"` with `role="tab"` for each option; active tab has `aria-selected="true"`
- **Modal**: focus trap, Esc closes, click outside closes

### Keyboard Navigation

- Top nav: Tab moves left → right (logo → product tabs → account)
- Search bar: Tab through From → To → Depart → Return → Travelers → Search button
- Filter sidebar: Tab top → bottom; Space toggles checkboxes
- Sort tabs: arrow keys navigate left/right between tabs
- Date picker: arrow keys navigate days

### Screen Reader Hints

KAYAK leans into verbose aria-labels because the visual data density is screen-reader-hostile by default. Every flight card aria-label expands the visual data into prose; every flag has an aria-label that explains the badge ("Best price match"); every price-trend graph point has an aria-label with the date and price.

### Reduced Motion

All transitions degrade to opacity-only when `prefers-reduced-motion: reduce` is set.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Top nav collapses to logo + hamburger; search bar becomes a single tappable card opening a full-screen overlay; flight cards 1-up vertically stacked; price-trend graph collapses to a 40px sparkline; filter sidebar moves to a bottom-sheet drawer |
| Tablet | 600–900px | Top nav keeps product tabs; search bar narrows to 2-row layout; flight cards 1-up with image left meta right; filter sidebar slides in from left |
| Desktop | 900–1200px | Full top nav with 6 product tabs; square search bar at full width with all 5 segments; flight cards 1-up with full 5-segment layout; filter sidebar 240px wide |
| Wide | >1200px | Content width caps at 1280px; gutters absorb the rest |

### Touch Targets

- Primary CTAs: minimum 44×44px (KAYAK runs slightly tighter than consumer-warm 48px — utility density)
- Search-bar segments: 56×56px tap zones
- Filter-chip: 32×32px minimum
- Date-picker day cells: 36×36px square
- Select-flight CTA: 36×36px (compact — fits in flight card right column)

### Collapsing Strategy

- Top product tabs collapse into a hamburger sheet below 600px
- Search bar's 5 segments collapse into a single-tap entry that opens a full-screen search overlay on mobile
- Filter sidebar transforms into a bottom-sheet drawer on mobile (Apply/Clear buttons sticky at the bottom)
- Flight cards reflow from horizontal 5-segment layout to vertical stack at <600px (depart on top, duration arc in middle, arrive on bottom)
- Price-trend graph collapses to a 40px sparkline on mobile — same data, less detail

### Image Behavior

KAYAK uses minimal imagery — flight cards show airline logos (28px circular), hotel cards show property photos at 1:1 aspect ratio. No editorial photography on results pages.

### Container Queries

The detail-rail-card uses container queries to compress its fee breakdown when the right rail narrows below ~280px.

## 11. Content & Voice

### Tone

Direct, transactional, slightly nerdy. KAYAK's voice trusts the user is data-literate — a frequent traveller, a price-comparer, a deal-hunter. The brand uses words like "Hacker Fare", "trip board", "price alert", "Explore" — slightly insider, slightly clever, never aspirational. Headlines lead with the comparison utility ("Search hundreds of travel sites at once"), not the destination.

### Microcopy Patterns

- **Button verbs**: "Search", "Select", "View deal", "Continue", "Book on KAYAK" — direct and outcome-named
- **Comparison recipe**: `[Provider rate] + [Difference from cheapest] + [Trust signal]` — e.g., "$247 on Delta — $12 less than United, 4.5/5 KAYAK rating"
- **Error message recipe**: `[What went wrong] + [How to fix]` — e.g., "Add a return date — round-trip search needs both legs"
- **Deal microcopy**: short and punchy — "Cheapest", "Fastest", "Hacker Fare" — never long marketing copy
- **Field labels**: short and instructive — "From", "To", "Depart", "Return", "Travelers"

### Empty States

Empty trip board: "Save trips you love. Click the heart on any flight or hotel to save it."
Empty search: "No flights match your filters. Try removing 'Direct only' or expanding your dates."

### CTA Verb Conventions

- Primary action: **"Search"** (entry funnel), **"Select"** (results), **"View deal"** (detail), **"Book on KAYAK"** (final step)
- Secondary action: **"Save"**, **"Compare"**, **"Set price alert"**
- Tertiary text: **"Show all options"**, **"View on map"**
- Avoided: "Submit", "Click here", "Buy now"

## 12. Dark Mode & Theming

**Light-only on the public web.** The KAYAK mobile app ships a system-controlled dark mode (near-black surface, white text, orange unchanged on CTAs and chips), but the web property is light-only.

The brand position: data-density surfaces are easier to scan on white, the price-trend graph (orange stroke on light orange fill) is engineered for white canvas, and the colour-coded flag system (green/purple/blue/red/orange) reads more cleanly on white. KAYAK has tested dark mode on web internally — the orange voltage loses its energy on a dark canvas, and the flag colour-coding becomes muddy.

The single nod to dark surfaces in marketing: the tooltip (ink fill, white text) and the optional "Explore Mode" map view, which renders Mapbox tiles with a dark theme but keeps the chrome on white.

## 13. Lineage & Influences

KAYAK's visual lineage runs through three traditions: **price-comparison meta-search engines** (Skyscanner, Hipmunk, Travelocity — the dense card layout, the multi-provider rate stack, the price-trend graph); **utility-first SaaS** (Google search results, Yelp business listings, Trello cards — flat surfaces, hairline borders, no decorative chrome); and **financial-data terminals** (Bloomberg, Yahoo Finance — the price-trend graph, the colour-coded data flags, the dense numeric tables). The Open Sans typeface choice is the most distinctive: KAYAK explicitly avoids custom typography, signalling that the product is data, not brand.

The colour discipline — KAYAK orange + neutral greys + colour-coded data flags — is borrowed from REI's outdoor-utility brand (orange + white + functional colour-coding for trail-difficulty signs). The square geometry is borrowed from financial UIs (Bloomberg's grids round at 0–4px, never pill). The data-viz layer (price-trend graph) is borrowed directly from Google Flights' fare history graph, which KAYAK and Google both shipped around the same era and refined in parallel.

What KAYAK rejects: pill geometry on buttons (consumer-warm, not utility), heavy shadows (data must scan), illustrative chrome (every pixel must serve comparison), single-accent restraint (the data-flag system needs five distinct colours), and dark mode on web (orange voltage loses on dark canvas).

**Influences:**
- Google Flights — fare history price-trend graph, [google.com/flights](https://www.google.com/flights)
- Skyscanner — multi-provider rate comparison pattern, [skyscanner.com](https://www.skyscanner.com)
- Bloomberg — financial data-viz colour-coding, [bloomberg.com](https://www.bloomberg.com)
- Yahoo Finance — dense numeric tables with colour-coded flags, [finance.yahoo.com](https://finance.yahoo.com)
- Open Sans — Google Fonts canon, anti-vanity typographic choice, [fonts.google.com/specimen/Open+Sans](https://fonts.google.com/specimen/Open+Sans)

## 14. Do's and Don'ts

**Do**
- Commit to KAYAK orange as the single brand voltage — wordmark, primary CTA, price-trend stroke, Hacker Fare flag
- Run body at 14/400 — density is the operating mode
- Use square geometry on buttons (4px) and cards (8px) — KAYAK is utility, not consumer-warm
- Render every numeric with `tnum` — flight times, durations, prices, fees all align
- Use the colour-coded flag system: green (best/cheapest), purple (fastest), blue (short-stop), red (high-CO2), orange (Hacker Fare)
- Anchor flight results with the price-trend graph — orange stroke on light orange fill — it's KAYAK's signature data-viz
- Keep cards flat at rest (border only), shadow appears on hover only
- Keep CTA height at 44px (slightly tighter than consumer-warm 48) — utility density
- Use Open Sans — the typeface should be invisible
- Lead with utility verbs ("Search", "Select", "View deal", "Set price alert")

**Don't**
- Don't use pill geometry on buttons — KAYAK rejects consumer-warm pill
- Don't introduce custom typography — Open Sans is the brand decision
- Don't use 16/400 body — that's editorial; KAYAK is utility density
- Don't add shadow to flat cards — shadow is a hover-only event
- Don't dilute the colour-coded flag system — five distinct colours, each with one meaning
- Don't break the price-trend graph aesthetic — orange stroke, light orange fill, green/red day markers
- Don't soften the search bar to pill — square (4px) is the system
- Don't hide the price-trend graph — even on mobile, it collapses to a 40px sparkline rather than disappearing
- Don't introduce dark mode on web — orange voltage loses on dark canvas
- Don't decouple the search button from the search bar — they share the 56px height and adjoin
- Don't use exclamation marks except in deal microcopy
- Don't make the flight card's middle 5-segment row visually shorter than the airline column or price column — the data is the focus

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #ffffff
Ink:              #1e2026
KAYAK-orange:     #ff690f
Orange-hover:     #e85a07
Link-blue:        #0066cc
Surface-soft:     #f4f4f4
Surface-orange:   #fff2e8
Hairline:         #dadde0
Muted:            #5e6470
Best-green:       #0a8c3e
Fastest-purple:   #9333ea
Short-stop-blue:  #0066cc
High-CO2-red:     #cc2935
```

### Example Component Prompts

- "Create a KAYAK-style hero: white canvas, 36px / 700 ink headline ('Search hundreds of travel sites at once'), and beneath it a square (4px radius) search bar at 56px height divided by vertical hairlines into From / To / Depart / Return / Travelers segments. The right edge terminates in an orange (#ff690f) Search button at 56px height with 24px padding."
- "Design a flight card: 8px outer radius, 1px hairline border (#dadde0), 5-segment horizontal layout: left column (~25%) with airline logo (28×28px circular), airline name in 13px / 400 muted, flight number in 12px / 400 soft. Middle (~55%) with depart time '8:25 AM' in 20px / 700 tnum, JFK airport code beneath in 13px / 400 muted, then a duration arc (1px hairline with 4px circle endpoints) labeled '5h 45m, 1 stop' in 13px / 400 tnum, then arrive time and airport code. Right column (~20%) with price '$247' in 22px / 700 tnum, 'round-trip' qualifier beneath in 12px / 400, and an orange (#ff690f) 'Select' CTA at 36px height with 8×16px padding."
- "Build a price-trend graph: 60px tall horizontal area chart, full-width minus filter sidebar. Background fill #fdf3eb (light orange surface), stroke 2px #ff690f (brand orange), data points as 4px circles colored green (#0a8c3e) for low-price days, red (#cc2935) for high-price days, orange (#ff690f) for the user's selected day. X-axis date labels in 12px / 400 muted (#5e6470)."
- "Create a primary CTA: orange (#ff690f) fill, white text at 14px / 700, 4px radius, 12×24px padding, 44px height. Hover deepens to #e85a07. Active flips to #c54a00."
- "Design a Hacker Fare flag: brand orange (#ff690f) fill, white text 'HACKER FARE' at 11px / 700 uppercase with 0.4px tracking, 4px radius, 2×6px padding. Fires on flight cards that use KAYAK's signature multi-airline routing."
- "Build a filter chip: white surface, 1px hairline (#a4a9b4) border, 9999px pill radius, 6×12px padding, 13px / 700 ink text. Active state: light orange (#fff2e8) surface, 1px brand orange (#ff690f) outline, brand orange text."

### Iteration Guide

1. **Start on white.** The white canvas is the system; orange is the brand voltage; the data layer (price-trend graph, flag system) is the brand's distinctive surface. If the canvas isn't white, you've broken the brand.
2. **Square geometry on buttons and cards.** Buttons round at 4px, cards at 8px. Pill (9999px) appears only on filter chips and small toggles. KAYAK is utility, not consumer-warm.
3. **Open Sans, no exceptions.** The brand explicitly rejects custom typography. Use Open Sans (or Inter as a 1:1 substitute). Don't reach for Cereal, Bookin Sans, or any branded variant.
4. **Body at 14/400.** Density is the operating mode. If your composition feels airy, you've broken the utility.
5. **Tabular numerals on every numeric.** Flight times, durations, prices, fees — all need `font-variant-numeric: tabular-nums` to align. This is non-negotiable.
6. **Five-flag colour-coded data system.** Green, purple, blue, red, orange — each has one meaning. Don't mix.
7. **The price-trend graph is the signature.** No other travel marketplace puts a dynamic price chart above flight results — replicate it faithfully (orange stroke, light orange fill, green/red day markers) or you've not built a KAYAK page.
8. **Shadow is hover-only.** Cards at rest are flat with a 1px border. Shadow appears only on hover and on overlays. The flat-by-default surface is the utility stance.
