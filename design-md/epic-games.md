---
name: Epic Games
tagline: Pure-black canvas with custom Brutal Type / Heading Now display — Fortnite-saturated marketing meets PC-storefront merchandising.
updated_at: 2026-05-04T19:57:58+12:00
published_at: 2026-05-04T19:57:58+12:00
author: webdesignhot
source_url: https://www.epicgames.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media, marketplace]
tags: [dark, bold, structured, gaming, fortnite, storefront, cinematic]
preview_swatch: ['#000000', '#0078f2', '#ffffff']
related: [steam, twitch, netflix]
description: 'Epic Games is the cinematic alternative to Steam''s engineering-room storefront — a pure-black `#000000` canvas spilled across every page, anchored by a confident **Epic Blue** (`#0078f2`) that carries every "Get" button, every "Wishlist" pill, and every primary CTA. Display copy runs **Brutal Type**, Epic''s custom display sans, at large 56–80px sizes with negative tracking — game cover art occupies 60–80% of every band, and the resulting page reads less like a software storefront and more like a Fortnite trailer poster scrolling past the viewer. Cards are ink-black `#202024` rectangles with 4px radius, and the merchandising voice is bold, cinematic, and saturated — the opposite of Steam''s muted utilitarian voice. Free Game Friday, Mega Sale percent-off banners, and Fortnite battle-pass takeovers turn the storefront into a marketing surface every week.'

colors:
  bg: '#000000'                    # canvas — pure black, the brand's signature
  bg-alt: '#0a0a0a'                # alt section band, slightly cooler
  bg-deep: '#000000'                # deepest, same as canvas
  surface: '#202024'                # default card surface (warm ink)
  surface-soft: '#2a2a2e'           # raised popover, hovered card
  surface-strong: '#3a3a3e'         # selected sidebar, hovered tile lift
  surface-elevated: '#1a1a1e'       # elevated panel, sub-nav band
  surface-charcoal: '#171717'       # game tile alt, dropdown floor
  surface-bright: '#f5f5f5'         # rare light surface for dev marketing pages
  text: '#ffffff'                   # primary ink — pure white on pure black
  text-soft: '#dadada'              # secondary copy
  text-muted: '#9ca0a4'             # tertiary metadata, "Released 2024"
  text-faint: '#6e7177'             # captions, timestamps
  text-disabled: '#4a4d51'
  text-link: '#0078f2'              # link blue
  brand: '#0078f2'                  # Epic Blue — primary CTA, brand accent
  brand-hover: '#1a8cf7'            # marginally brighter on hover
  brand-active: '#0061c4'           # press / pointer-down
  brand-deep: '#005ab8'             # deeper brand for inactive tabs
  brand-pale: '#9bcaff'             # disabled CTA tint
  on-brand: '#ffffff'
  cta-bg: '#0078f2'
  cta-text: '#ffffff'
  free-game-yellow: '#ffce00'       # "Free Now" yellow flag on capsules
  free-game-bg: '#382e00'           # dark amber surface behind free-game tag
  fortnite-yellow: '#ffce00'        # Fortnite battle-pass takeover yellow
  fortnite-blue: '#0078f2'          # Fortnite primary blue
  unreal-engine: '#00b2ff'          # Unreal Engine documentation accent
  rocket-league: '#0066ff'          # Rocket League brand
  fall-guys: '#ff5cff'              # Fall Guys magenta
  link-default: '#0078f2'
  link-hover: '#1a8cf7'
  link-visited: '#0078f2'
  border: '#3a3a3e'                 # default low-contrast hairline
  border-soft: '#202024'            # divider between rows
  border-strong: '#0078f2'          # focused input border
  scrim: 'rgba(0,0,0,0.85)'         # modal backdrop
  shadow-card: 'rgba(0,0,0,0.6)'
  shadow-elev: 'rgba(0,0,0,0.8)'
  shadow-blue-glow: 'rgba(0,120,242,0.4)'
  discount-bg: '#26bbff'            # Mega Sale teal-blue discount tag
  discount-text: '#000000'
  achievement: '#ffce00'
  success: '#3ad481'                # in-stock green
  warning: '#ff9c2a'                # advisory orange
  danger: '#ff4248'                 # validation red
  info: '#0078f2'

typography:
  display:
    family: '"Brutal Type", "Heading Now", "Inter", "Helvetica Neue", Helvetica, sans-serif'
    weights: [400, 600, 800]
    opentype-features: ['kern', 'ss01']
  body:
    family: '"Inter", "Brutal Type", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"Roboto Mono", Menlo, Consolas, "Courier New", monospace'
    weights: [400, 600]
  scale:
    display-hero:    { size: 80, weight: 800, lineHeight: 0.95, tracking: '-0.04em', family: display, opentype: ['ss01'], notes: 'Marketing landing hero ("Free Now")' }
    display-xl:      { size: 64, weight: 800, lineHeight: 1.0,  tracking: '-0.03em', family: display, notes: 'Mega Sale headline' }
    display-lg:      { size: 48, weight: 800, lineHeight: 1.05, tracking: '-0.02em', family: display, notes: 'Featured game banner title' }
    display-md:      { size: 36, weight: 800, lineHeight: 1.1,  tracking: '-0.01em', family: display, notes: 'Section headline' }
    display-sm:      { size: 28, weight: 700, lineHeight: 1.15, tracking: '-0.01em', family: display, notes: 'Game detail page title' }
    section-head:    { size: 22, weight: 700, lineHeight: 1.2,  tracking: '0',       family: display, notes: '"Discover", "Browse", "Free Games"' }
    sub-section:     { size: 18, weight: 600, lineHeight: 1.25, tracking: '0',       family: display, notes: 'Carousel rail title' }
    capsule-title:   { size: 16, weight: 600, lineHeight: 1.3,  tracking: '0',       family: display, notes: 'Game card title' }
    body-md:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Default body, descriptions' }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Sidebar copy, metadata' }
    body-xs:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Caption, footer micro' }
    nav-link:        { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.04em',  family: display, transform: uppercase, notes: 'Top nav: STORE · NEWS · DISTRIBUTE · SUPPORT' }
    sub-nav-link:    { size: 13, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Sub-nav anchors' }
    button-cta:      { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.04em',  family: display, transform: uppercase, notes: 'GET, WISHLIST, BUY NOW — uppercase Brutal Type' }
    button-md:       { size: 13, weight: 600, lineHeight: 1.0,  tracking: '0.02em',  family: body, notes: 'Secondary CTAs' }
    button-sm:       { size: 12, weight: 600, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Inline pills, filters' }
    price:           { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'], notes: 'Price text' }
    discount-pct:    { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body, notes: '"-50%" teal-blue discount' }
    badge:           { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.05em',  family: body, transform: uppercase, notes: 'FREE NOW, COMING SOON, NEW' }
    metadata:        { size: 12, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, opentype: ['tnum'], notes: 'Player counts, release year' }
    code:            { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: mono, notes: 'Unreal Engine doc inline code' }

radius:
  none: 0
  micro: 2
  sm: 4         # default cards, capsules
  md: 6         # form inputs
  lg: 8         # rare large container
  xl: 12        # marketing hero panels
  pill: 9999    # rarely — only for Fortnite battle-pass takeover pills

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1408
  prose-width: 720
  header-height: 80
  main-nav-height: 80
  sub-nav-height: 56
  capsule-md: '256x144'    # 16:9 standard tile
  capsule-lg: '512x288'    # large featured tile
  hero-banner: '1920x1080' # full-bleed hero

components:
  button-cta:
    bg: '#0078f2'
    color: '#ffffff'
    radius: 4
    padding: '14px 28px'
    height: 48
    font: button-cta
    use: 'GET / BUY NOW / ADD TO CART — Epic Blue uppercase pill, the universal primary CTA.'
  button-cta-hover:
    bg: '#1a8cf7'
    color: '#ffffff'
    radius: 4
    use: 'Hover — brightens.'
  button-secondary:
    bg: 'transparent'
    color: '#ffffff'
    radius: 4
    border: '1px solid #ffffff'
    padding: '13px 27px'
    height: 48
    font: button-cta
    use: 'WISHLIST / SAVE FOR LATER — outline white CTA on dark.'
  button-text-link:
    bg: 'transparent'
    color: '#0078f2'
    use: 'Inline blue link — body prose, footer.'
  button-fortnite:
    bg: '#ffce00'
    color: '#000000'
    radius: 4
    padding: '14px 28px'
    height: 48
    use: 'Fortnite battle-pass yellow takeover button — used only on Fortnite-themed marketing.'
  game-tile:
    bg: '#202024'
    color: '#ffffff'
    radius: 4
    padding: 0
    use: 'Game card — 16:9 cover art with title/price stacked beneath in 4px-radius card.'
  game-tile-hover:
    bg: '#2a2a2e'
    color: '#ffffff'
    radius: 4
    use: 'Hover — surface lifts to #2a2a2e and applies blue glow.'
  capsule-md:
    bg: '#202024'
    color: '#ffffff'
    radius: 4
    width: 256
    height: 144
    use: 'Standard 16:9 tile in carousel rails.'
  capsule-lg:
    bg: '#202024'
    color: '#ffffff'
    radius: 4
    width: 512
    height: 288
    use: 'Large 16:9 featured tile in "Discover" rail.'
  hero-banner:
    bg: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)'
    color: '#ffffff'
    radius: 0
    use: 'Full-bleed 1920x1080 game hero with gradient mask at the bottom for the title and Get button.'
  free-game-banner:
    bg: '#000000'
    color: '#ffce00'
    radius: 4
    border: '2px solid #ffce00'
    padding: '8px 16px'
    font: badge
    use: '"FREE NOW" yellow-on-black banner anchored to a free game capsule.'
  discount-tag:
    bg: '#26bbff'
    color: '#000000'
    radius: 2
    padding: '4px 8px'
    font: discount-pct
    use: 'Mega Sale teal-blue "-50%" tag — anchored bottom-left of discounted capsules.'
  text-input:
    bg: '#202024'
    color: '#ffffff'
    radius: 6
    height: 48
    padding: '12px 16px'
    border: '1px solid #3a3a3e'
    font: body-md
    use: 'Form input — dark fill, hairline border, focuses to 2px Epic Blue.'
  search-bar:
    bg: '#202024'
    color: '#ffffff'
    radius: 4
    height: 40
    padding: '8px 16px'
    use: 'Top-bar search field — dark rectangle with magnifier icon at left.'
  primary-nav:
    bg: 'rgba(0,0,0,0.95)'
    color: '#ffffff'
    height: 80
    use: 'Top nav: Epic logo + STORE · NEWS · DISTRIBUTE · SUPPORT in uppercase Brutal Type. Sticky on scroll with 95% black blur.'
  sub-nav:
    bg: '#0a0a0a'
    color: '#dadada'
    height: 56
    use: 'Store sub-nav: Discover · Browse · News · Sales — uppercase tracked.'
  pill-filter:
    bg: '#202024'
    color: '#ffffff'
    radius: 9999
    padding: '8px 16px'
    use: 'Filter pill on browse pages — rounded toggles for "Free", "On Sale", "Coming Soon".'
  pill-filter-active:
    bg: '#0078f2'
    color: '#ffffff'
    radius: 9999
    use: 'Active filter pill — Epic Blue fill.'
  carousel-paddle:
    bg: 'rgba(0,0,0,0.7)'
    color: '#ffffff'
    radius: 9999
    width: 48
    height: 48
    use: 'Round carousel arrow — fades in on hover-over rail.'
  modal:
    bg: '#202024'
    color: '#ffffff'
    radius: 8
    use: 'Centred dialog, 8px radius, 1px hairline border.'
  fortnite-takeover-band:
    bg: '#ffce00'
    color: '#000000'
    radius: 0
    use: 'Full-bleed Fortnite-yellow band for battle-pass season takeover.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 360
  capsule-hover: 'tile lifts surface #202024 → #2a2a2e + blue glow `0 0 16px rgba(0,120,242,0.4)` over 240ms'
  carousel-slide: 'horizontal carousel slides 360ms emphasized'
  cta-press: 'button bg deepens #0078f2 → #0061c4 over 150ms on :active'
  hero-parallax: 'hero banner parallax-scrolls at 0.5x scroll velocity for cinematic depth'
  reduced-motion: 'respects prefers-reduced-motion: reduce — capsule lift and parallax suppressed.'

breakpoints:
  mobile: 600
  tablet: 1024
  desktop: 1280
  wide: 1408

shadows:
  ambient: 'none — Epic stays mostly flat'
  capsule-glow: '0 0 16px rgba(0,120,242,0.4)'
  card-soft: 'rgba(0,0,0,0.6) 0 4px 12px'
  modal: 'rgba(0,0,0,0.8) 0 8px 32px'
  ring: '0 0 0 2px #0078f2'

accessibility:
  contrast-text-on-bg: 21.0          # #ffffff on #000000 — AAA maximum
  contrast-link-on-bg: 4.5           # #0078f2 on #000000 — AA
  contrast-cta-text: 4.5             # #ffffff on #0078f2 — AA at body sizes
  contrast-soft-on-bg: 13.5          # #dadada on #000000 — AAA
  contrast-muted-on-bg: 6.5          # #9ca0a4 on #000000 — AA
  focus-ring: '2px solid #0078f2 + 2px outline offset (Epic Blue ring)'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab traverses top nav → search → main carousels → footer; arrow keys inside carousel; Esc closes modals.'

dark-mode: only   # Epic Games Store is dark-only. The Unreal Engine marketing site has a light-mode counterpart.
---

## 1. Visual Theme & Atmosphere

Epic Games is the cinematic alternative to Steam's engineering-room storefront. Where Steam reads as a control panel, Epic reads as a movie poster — a **pure-black** `#000000` canvas spilled across every page with no surface variation, anchored by a confident **Epic Blue** (`#0078f2`) that carries every "Get" button, every "Wishlist" pill, and every primary CTA. Game cover art occupies 60–80% of every band — full-bleed 1920×1080 hero banners with cinematic gradient masks at the bottom, 16:9 capsule tiles in 4-up carousel rails, and Fortnite battle-pass takeovers that paint the entire homepage yellow for a season.

Display copy runs **Brutal Type** (Epic's custom display sans, occasionally paired with "Heading Now" depending on context) at large 56–80px sizes with negative tracking. The wordmark, hero headlines, and CTA labels all run uppercase with 0.04em tracking — Epic's signature trade dress. Body type drops to Inter / Brutal Type at 14/400 with comfortable 1.5 leading. The result reads less like a software storefront and more like a Fortnite trailer poster scrolling past the viewer.

Cards are warm-ink `#202024` rectangles with **4px radius** — subtly rounded but unmistakably rectangular. Buttons round at the same 4px and pad generously: 14×28px, 48px height, white-on-Epic-Blue fill. Inputs at 6px radius. The Mega Sale teal-blue (`#26bbff`) discount tag punches against any cover art with `#000000` text — Epic's most distinctive merchandising element.

Photography is the design. Every featured game gets a cinematic horizontal hero (Fortnite Chapter X, Alan Wake II, Cyberpunk 2077) with a gradient mask burning into the bottom 30% so the title and Get button can sit legibly. Free Game Friday — the platform's marquee retention mechanic — gets a yellow-bordered banner that reads "FREE NOW" anchored top-left of the giveaway capsule.

The brand position is **bold cinematic merchandising**. Epic rejects Steam's muted utilitarian voice — every hero is loud, every CTA is uppercase, every section is presented like a magazine cover. Where Steam optimises for tens of thousands of games per pixel, Epic optimises for one game per fold.

**Key Characteristics:**
- Pure-black `#000000` canvas spilled across every page — Epic's signature, no surface variation
- Epic Blue (`#0078f2`) is the universal primary CTA and brand accent — bright, confident, single voltage
- Brutal Type custom display sans at 56–80px / 800 with -0.02 to -0.04em negative tracking on hero copy
- Uppercase 0.04em-tracked CTAs ("GET", "WISHLIST", "BUY NOW") — the brand's loud-poster voice
- 4px-radius rectangular cards (`#202024`) with subtle blue glow on hover
- Mega Sale teal-blue (`#26bbff`) discount tag with black text — Epic's distinct sale voltage
- Free Game Friday yellow-on-black "FREE NOW" banner — the platform's retention hook
- Fortnite battle-pass yellow `#ffce00` season takeover paints the homepage every 12 weeks
- 1920×1080 full-bleed hero banners with gradient mask at bottom for the title + Get button

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#000000`): pure black — every page, every section, every band. The platform's signature
- **Bg Alt** (`#0a0a0a`): slightly cooler alt section band
- **Card** (`#202024`): warm-ink card surface for game tiles
- **Surface Soft** (`#2a2a2e`): hovered card lift
- **Surface Strong** (`#3a3a3e`): selected sidebar, deeply pressed card
- **Surface Elevated** (`#1a1a1e`): elevated panels
- **Surface Charcoal** (`#171717`): dropdown floor, alt tile

### Brand
- **Epic Blue** (`#0078f2`): primary CTA, brand accent, link, focused border
- **Epic Blue Hover** (`#1a8cf7`): brightened hover
- **Epic Blue Active** (`#0061c4`): pressed
- **Epic Blue Deep** (`#005ab8`): deeper variant for inactive tabs
- **Epic Blue Pale** (`#9bcaff`): disabled tint

### Accent
- **Free Game Yellow** (`#ffce00`): "Free Now" yellow flag — Free Game Friday signal
- **Free Game Bg** (`#382e00`): dark amber surface behind the free-game indicator
- **Fortnite Yellow** (`#ffce00`): same hex as free-game — Fortnite's brand yellow
- **Mega Sale Teal-Blue** (`#26bbff`): the sale discount tag colour
- **Unreal Engine** (`#00b2ff`): brighter cyan accent on Unreal docs/marketing
- **Rocket League Blue** (`#0066ff`): franchise-specific
- **Fall Guys Magenta** (`#ff5cff`): franchise-specific

### Interactive
- **Link** (`#0078f2`): same hex as brand — Epic doesn't differentiate
- **Link Hover** (`#1a8cf7`): brightens
- **Link Visited** (`#0078f2`): unchanged
- **Disabled** (`#4a4d51`): muted ink
- **Selected** (`#0078f2`): selected radio / checkbox

### Neutral Scale
- **Text** (`#ffffff`) — primary white on black
- **Text Soft** (`#dadada`) — secondary copy
- **Text Muted** (`#9ca0a4`) — tertiary metadata, "Released 2024"
- **Text Faint** (`#6e7177`) — captions, timestamps
- **Text Disabled** (`#4a4d51`) — disabled
- **Border** (`#3a3a3e`) — default low-contrast hairline
- **Border Soft** (`#202024`) — divider between rows
- **Border Strong** (`#0078f2`) — focused input

### Surface & Borders
- **Bg** (`#000000`)
- **Bg Alt** (`#0a0a0a`)
- **Surface** (`#202024`)
- **Surface Soft** (`#2a2a2e`)
- **Surface Strong** (`#3a3a3e`)
- **Surface Elevated** (`#1a1a1e`)
- **Surface Charcoal** (`#171717`)

### Shadow Colors
Epic stays mostly flat. The capsule blue glow (`0 0 16px rgba(0,120,242,0.4)`) is the brand's signature interactive shadow — a soft Epic-Blue halo on hovered tiles. Modal drop shadow runs neutral `rgba(0,0,0,0.8)` 0 8px 32px.

### Semantic
- **Success** (`#3ad481`): success green for "Successfully purchased"
- **Warning** (`#ff9c2a`): advisory orange
- **Danger** (`#ff4248`): validation red
- **Info** (`#0078f2`): info — same hex as brand

## 3. Typography Rules

### Font Family

**Primary**: `Brutal Type` — Epic's custom display sans, occasionally paired with `Heading Now` depending on context (Heading Now is used on Unreal Engine marketing). Falls back to `Inter`, `"Helvetica Neue"`, `Helvetica`, `sans-serif`. Brutal Type is a geometric sans with sharp terminals, designed for cinematic display use at 48px+. Weights: 400, 600, 800.

**Body**: `Inter` is the body workhorse on the Epic Games Store; Brutal Type appears on display only. On Unreal Engine marketing pages the body switches to Inter or system sans.

**Mono**: `"Roboto Mono", Menlo, Consolas, "Courier New", monospace` — appears in Unreal Engine documentation inline code.

**OpenType features**: `kern` enabled by default; `tnum` on prices; `ss01` enabled on Brutal Type display sizes for an alternate `g` form that gives Epic's headlines their slightly geometric character.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | Brutal Type | 80 | 800 | 0.95 | -0.04em | ss01 | Marketing landing hero ("Free Now") |
| display-xl | Brutal Type | 64 | 800 | 1.0 | -0.03em | — | Mega Sale headline |
| display-lg | Brutal Type | 48 | 800 | 1.05 | -0.02em | — | Featured game banner |
| display-md | Brutal Type | 36 | 800 | 1.1 | -0.01em | — | Section headline |
| display-sm | Brutal Type | 28 | 700 | 1.15 | -0.01em | — | Game detail H1 |
| section-head | Brutal Type | 22 | 700 | 1.2 | 0 | — | "Discover", "Browse", "Free Games" |
| sub-section | Brutal Type | 18 | 600 | 1.25 | 0 | — | Carousel rail title |
| capsule-title | Brutal Type | 16 | 600 | 1.3 | 0 | — | Game card title |
| body-md | Inter | 14 | 400 | 1.5 | 0 | — | Default body |
| body-sm | Inter | 13 | 400 | 1.4 | 0 | — | Sidebar metadata |
| body-xs | Inter | 12 | 400 | 1.4 | 0 | — | Caption, footer micro |
| nav-link | Brutal Type | 14 | 700 | 1.0 | 0.04em | uppercase | "STORE · NEWS · DISTRIBUTE · SUPPORT" |
| sub-nav-link | Inter | 13 | 500 | 1.0 | 0 | — | Sub-nav anchors |
| button-cta | Brutal Type | 14 | 700 | 1.0 | 0.04em | uppercase | "GET", "WISHLIST", "BUY NOW" |
| button-md | Inter | 13 | 600 | 1.0 | 0.02em | — | Secondary CTAs |
| button-sm | Inter | 12 | 600 | 1.0 | 0 | — | Inline pills |
| price | Inter | 14 | 700 | 1.0 | 0 | tnum | Price text |
| discount-pct | Inter | 14 | 700 | 1.0 | 0 | — | "-50%" teal-blue |
| badge | Inter | 11 | 700 | 1.0 | 0.05em | uppercase | "FREE NOW", "COMING SOON", "NEW" |
| metadata | Inter | 12 | 400 | 1.3 | 0 | tnum | Player counts, release year |
| code | Roboto Mono | 13 | 400 | 1.4 | 0 | — | Unreal Engine doc inline code |

### Principles

- **Display goes huge with negative tracking.** Hero copy at 64–80px / 800 with -0.02 to -0.04em — Epic's headlines are unmistakably loud and cinematic.
- **Uppercase 0.04em tracking on CTAs and nav.** Brutal Type uppercase is the brand voice — Steam uses 0.5px (uppercase) on smaller labels; Epic uses uppercase on every primary CTA at button-CTA size.
- **Body is Inter, display is Brutal Type.** The two-family separation keeps long-form descriptions legible while preserving display drama.
- **Tabular numerals on every price.** `tnum` on prices and player counts.
- **Brutal Type substitutes**: when Brutal isn't available, fall back to a heavy geometric sans like Inter at weight 800 with -0.02em tracking; close enough to preserve the trade dress.
- **No serifs anywhere.** Epic refuses serif typography — the brand is geometric-sans throughout.
- **Hero parallax is type-aware.** Display copy stays anchored as the hero image parallax-scrolls behind it.

## 4. Component Stylings

### Buttons

**`button-cta`** — the universal Epic Blue (`#0078f2`) primary CTA. White uppercase Brutal Type 14/700/0.04em label, 4px radius, 14×28px padding, 48px height. Used for "GET", "BUY NOW", "ADD TO CART", "INSTALL". Hover brightens to `#1a8cf7`. Active deepens to `#0061c4`. The single most prominent CTA on Epic.

**`button-secondary`** — outline white CTA over dark: transparent fill, 1px white border, white text. Same shape as primary. Used for "WISHLIST", "SAVE FOR LATER", "ADD TO LIBRARY".

**`button-text-link`** — plain Epic-Blue text in `#0078f2`, no surface — the universal inline link style. Hover brightens to `#1a8cf7`.

**`button-fortnite`** — Fortnite battle-pass yellow `#ffce00` fill, black text. Used only on Fortnite-themed marketing pages and battle-pass takeovers.

### Cards

**`game-tile`** — 16:9 cover-art card with title/price/badge stacked beneath. `#202024` floor, 4px radius, no internal padding around the image (image fills to corners), 12px below for metadata. Hover: surface lifts to `#2a2a2e` and the blue glow `0 0 16px rgba(0,120,242,0.4)` fades in.

**`capsule-md`** — 256×144 standard tile in carousel rails.

**`capsule-lg`** — 512×288 large featured tile in "Discover" rail.

**`hero-banner`** — full-bleed 1920×1080 cover art with a `transparent → rgba(0,0,0,0.7)` vertical gradient at the bottom 30% for legibility of the overlaid title and Get button. The page's largest visual moment.

### Badges, Tags, Pills

**`free-game-banner`** — yellow-on-black "FREE NOW" banner with 2px `#ffce00` border, anchored top-left of a free-game capsule. The platform's most distinctive merchandising element after the discount tag.

**`discount-tag`** — Mega Sale teal-blue (`#26bbff`) rectangle with black text in 14/700, 2px radius, 4×8px padding. Anchored bottom-left of every discounted capsule. The contrast against pure-black canvas makes it pop without competing with the brand blue.

**`pill-filter`** + **`pill-filter-active`** — pill toggles for "Free", "On Sale", "Coming Soon" filters. Default `#202024` floor with white text; active flips to `#0078f2` Epic Blue.

**`badge-coming-soon`** — small "COMING SOON" tag in 11/700 uppercase 0.05em with white text on transparent — applied to capsule corner.

### Inputs / Forms

**`text-input`** — `#202024` fill, white text, 1px `#3a3a3e` hairline, 6px radius, 48px height, 12×16px padding. On focus, border thickens to 2px `#0078f2` and a 2px Epic-Blue ring fades in.

**`search-bar`** — top-bar search field. `#202024` fill, 4px radius, 40px height, magnifier icon at left in `#9ca0a4`. Expands width on focus.

### Navigation

**`primary-nav`** — top nav with semi-translucent `rgba(0,0,0,0.95)` floor and backdrop blur, 80px tall, sticky on scroll. Epic Games wordmark anchored left in white, "STORE · NEWS · DISTRIBUTE · SUPPORT" in Brutal Type 14/700 uppercase 0.04em. Account utilities + cart anchored right.

**`sub-nav`** — 56px tall sub-band on store pages: `#0a0a0a` floor, "Discover · Browse · News · Sales · Free Games" in Inter 13/500 with `#dadada` ink.

**`carousel-paddle`** — 48×48 round paddle with `rgba(0,0,0,0.7)` floor, fades in on hover-over rail.

### Modals & Toasts

**`modal`** — `#202024` floor, 8px radius, 1px `#3a3a3e` border, white ink. Centred over `rgba(0,0,0,0.85)` scrim. Close X anchored top-right.

**`toast`** — bottom-centre `#202024` floor with white text, 8px radius, 1px hairline, 16×24px padding.

### Decorative

**`fortnite-takeover-band`** — full-bleed `#ffce00` Fortnite-yellow band painted across the homepage during a battle-pass season. Black ink display, black-on-yellow CTAs. Reverts to default canvas after 12 weeks.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 48 · 64 · 80 · 96 · 128 · 160`
- Section gap (vertical): **96–160px** between hero and first carousel; **64–80px** between subsequent rails. Epic gives editorial sections cinematic breath
- Card internal padding: **0** around the cover image (image fills to corners), **12px** below for metadata stack
- Gutters: **16–24px** between game tiles in carousels; **96–128px** between major page bands

### Grid & Container

- Max content width: **1408px** centred
- Homepage: full-bleed hero (1920×1080 maximum, scales down) → 4-up `capsule-lg` discover rail → 6-up `capsule-md` browse rail → news carousel → footer
- Game detail: 2-column with image gallery left (~58%), buy box right (~36%); below the fold, full-width description, screenshots, reviews
- Footer: 4-column link list at desktop on `#000000`

### Whitespace Philosophy

Epic gives **cinematic breath**. 96–160px between hero and the first rail, 64–80px between subsequent rails. Inside any rail, capsules nestle with 16–24px gutters. The brand position: "this is one game per fold; we don't shout density."

### Section Cadence

Epic's section cadence runs **hero → rail → rail → editorial → rail**. The page rhythm imitates a Fortnite season trailer: a single dominant hero opens, then a sequence of curated rails follows. There is no decorative chrome between sections; the canvas-black background is uninterrupted.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0px | Hero banners, full-bleed bands, sub-nav, footer |
| Micro | 2px | Discount tag, dropdown trigger |
| Small | 4px | Game tiles, capsules, buttons, modal triggers — the dominant radius |
| Medium | 6px | Form inputs |
| Large | 8px | Modal containers, larger feature cards |
| XL | 12px | Marketing hero panels |
| Pill | 9999px | Filter pills, Fortnite battle-pass takeover pills |

The radius vocabulary is **4px-dominant**. Epic's geometry sits between Steam's 2px-rectangular and modern soft 8px-cards — confidently rounded but unmistakably structured.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, hero bands, footer (~85% of surfaces) |
| 1 — Capsule glow | `0 0 16px rgba(0,120,242,0.4)` | Hovered tile — Epic Blue halo |
| 2 — Card soft | `rgba(0,0,0,0.6) 0 4px 12px` | Achievement card, popover |
| 3 — Modal | `rgba(0,0,0,0.8) 0 8px 32px` | Centred dialogs |
| 4 — Scrim | `rgba(0,0,0,0.85)` | Modal backdrop |

### Shadow Philosophy

Depth comes from **the canvas-vs-card surface separation** (`#000000` body vs `#202024` cards) and **the hero gradient mask** (transparent → 0.7-black bottom band on hero banners). The capsule blue glow is Epic's branded interactive shadow — a halo that signals "this is a clickable game." No multi-layer atmospheric Stripe-style shadows; Epic stays cinematic-flat.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, carousel slide

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Hover colour swap, button press deepen |
| Standard | 240ms | Tile lift + blue glow on hover |
| Slow | 360ms | Carousel slide, modal enter, hero parallax |

### Per-Component Recipes

- **Tile hover**: surface lifts `#202024` → `#2a2a2e` + blue glow `0 0 16px rgba(0,120,242,0.4)` over 240ms.
- **Carousel slide**: horizontal carousel slides 360ms emphasized; momentum on touch.
- **Button press**: bg deepens `#0078f2` → `#0061c4` over 150ms on `:active`.
- **Hero parallax**: hero banner parallax-scrolls at 0.5x scroll velocity — the title block stays anchored as the cover art slides slowly. Reduced-motion suppresses.
- **Free Game Friday banner**: yellow border subtle pulse (`#ffce00` outline expands 1.0 → 1.02 → 1.0 over 2s loop) — drives attention to the giveaway.
- **Modal enter**: scrim fades in 200ms, dialog translates `translateY(16px) → 0` + opacity 0 → 1 over 240ms emphasized.
- **Link hover**: text colour transitions `#0078f2` → `#1a8cf7` over 150ms.

### Page Transitions

Page-to-page navigation uses short `200ms` opacity crossfade — Epic adds slightly more theatricality than Steam's hard-cut.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Tile lift + glow degrade to a colour-only hover. Hero parallax disables. Free-game banner pulse stops. Carousel slide degrades to opacity crossfade.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #ffffff text on #000000 canvas | 21.0 | AAA maximum |
| #ffffff on #0078f2 CTA | 4.5 | AA at body sizes |
| #0078f2 link on #000000 | 4.5 | AA |
| #dadada soft on #000000 | 13.5 | AAA |
| #9ca0a4 muted on #000000 | 6.5 | AA |
| #ffce00 free-game on #000000 | 16.0 | AAA |
| #000000 on #26bbff Mega Sale tag | 11.0 | AAA |

The white-on-Epic-Blue CTA pair sits at exactly 4.5 — AA at body sizes. Epic compensates by using uppercase 14/700 button labels (above the AA threshold for "large text"). The `#ffce00` free-game banner against pure-black is an exceptional 16.0 contrast — designed for unmissable visibility.

### Focus Indicators

Focus ring is **2px solid `#0078f2`** with 2px outline-offset — Epic Blue ring around buttons, inputs, links. Inputs gain a thicker border on `:focus-visible`.

### ARIA Patterns

- **Search bar**: `role="search"`, input `aria-label="Search Epic Games Store"`
- **Game tile**: entire tile wrapped in `<a>` with verbose `aria-label` — "Cyberpunk 2077, $39.99, 50 percent off, RPG, free until Thursday"
- **Wishlist button**: `aria-pressed` + label "Add to wishlist" / "Remove from wishlist"
- **Free-game banner**: `aria-label="Free now until Thursday — claim before October 12"`
- **Carousel paddle**: `aria-label="Previous featured game"` / "Next featured game"
- **Hero banner**: `role="region"` `aria-label="Featured: [Game name]"`

### Keyboard Navigation

- Tab traverses: top nav → search → main hero CTA → carousels → footer
- Inside carousel rail: arrow keys cycle horizontally
- Esc closes modals
- Wishlist shortcut: `w` (when game-detail page is focused)

### Screen Reader Hints

Verbose `aria-label` on icon-only buttons. Discount tag includes the actual delta ("50 percent off, $39.99 down from $79.99"). Free-game banner clearly states the deadline.

### Reduced Motion

Tile lift + glow degrade to colour-only. Hero parallax disabled. Free-game banner pulse stops. Carousel slide → opacity crossfade.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Top nav collapses to logo + hamburger; hero scales 80px → 36px; capsules stack 1-up |
| Tablet | 600–1024px | Capsule rails 2–3-up; hero scales to 48px; sub-nav becomes horizontal scroll |
| Desktop | 1024–1280px | 4-up capsule rails; full primary nav |
| Wide | 1280–1408px | Content caps at 1408px; outer gutters grow to ~80px |

### Touch Targets

- Primary CTAs: 48px height — meets AAA
- Wishlist heart: 48×48
- Tile entire 256×144 tap target
- Carousel paddle: 48×48 — meets AAA

### Collapsing Strategy

- Top nav: utilities collapse first; hamburger drawer at 1024px
- Sub-nav: horizontal scroll with edge fade
- Hero: full-bleed at every breakpoint; only the title block reflows
- Game detail: 2-column splits to single-column stack; buy-box becomes sticky bottom bar
- Section padding: 160px desktop → 96px tablet → 64px mobile

### Image Behavior

Hero banners use art-directed crops (1920×1080 desktop, 768×1024 mobile portrait) so the central subject stays centred when the band collapses. Capsule cover art preserves 16:9 ratio at every breakpoint. All non-critical imagery lazy-loads.

### Container Queries

Used in the right-rail buy box: when the rail narrows below ~340px, edition selectors collapse to dropdown.

## 11. Content & Voice

### Tone

Bold, cinematic, gaming-magazine. Epic's voice is "the platform that gives you free games every Thursday and the season everyone is talking about." Headlines lead with confidence ("Free Now", "Mega Sale", "Coming Soon") rather than discovery. Section heads run uppercase Brutal Type — they read as posters, not anchors.

### Microcopy Patterns

- **Button verbs**: "GET", "BUY NOW", "WISHLIST", "PLAY", "INSTALL", "ADD TO LIBRARY" — outcome-named, uppercase
- **Error message recipe**: confident + actionable — "We couldn't process this purchase. Try a different payment method or contact support."
- **Success confirmations**: celebratory — "It's yours! [Game name] is now in your library."
- **Field labels**: short — "Email", "Password", "Display name"
- **Stock urgency**: "Free until Thursday at 11:00 AM ET" — names the deadline

### Empty States

Empty wishlist: "Your wishlist is empty. Browse the store and tap the heart on any game to save it for later."

Empty library: "Your library is empty. Get started with a free game or browse the store."

Empty search: "No results for [query]. Try a different keyword or browse by genre."

### CTA Verb Conventions

- Primary: **"GET"** (the brand's signature for free / claim), **"BUY NOW"**, **"ADD TO CART"**, **"INSTALL"**, **"PLAY"**
- Save: **"WISHLIST"** — the universal save verb
- Tertiary: **"SEE MORE"**, **"VIEW DETAILS"**, **"WATCH TRAILER"**
- Avoided: "Submit", "Click here", "Sign up free" (Epic prefers outcome verbs)

## 12. Dark Mode & Theming

**Dark-only on the storefront.** Epic Games Store is dark-only — no light variant. The pure-black canvas is the brand position; inverting to white would destroy the cinematic poster aesthetic. The Unreal Engine marketing site (unrealengine.com) does have a light-mode counterpart for documentation surfaces, but the games storefront remains dark.

The deepest surface is `#000000` (canvas itself); the lightest active surface is `#3a3a3e` (selected sidebar). The whole storefront lives within ~25% lightness range.

## 13. Lineage & Influences

Epic's visual lineage runs through three traditions: **PC-game-magazine cover design** (PC Gamer covers from the 90s and 2000s — bold display type, full-bleed cinematic photography, single dominant CTA); **Fortnite's saturated youth-gaming aesthetic** (the 2017 Fortnite Battle Royale launch established Epic's loud-yellow/blue chromatic voice that spilled into the storefront); and **streaming-platform editorial layout** (Netflix-style row-of-tiles + hero combo translated into game merchandising).

The current Epic Games Store launched in 2018, deliberately positioned against Steam's engineering-room aesthetic. Where Steam optimised for catalogue density (940px column, 184×69 capsules, lime discount tags), Epic optimised for poster-style merchandising (1408px column, 256×144 tiles, full-bleed 1920×1080 heroes, Mega Sale teal-blue tags). The Free Game Friday programme — anchored by the yellow "FREE NOW" banner — is the platform's user-acquisition signature.

What Epic rejects: muted typography, narrow content columns, dense capsule grids, multi-tier review summaries (Epic shows star ratings only, no "Overwhelmingly Positive" tier), serif typography, and any chrome that competes with the cinematic hero. The brand position: **gaming as Hollywood, not gaming as engineering**.

**Influences:**
- PC Gamer / GameInformer / Edge magazine covers — bold display, cinematic photography
- Fortnite (Epic's own franchise) — saturated yellow/blue chromatic palette
- Netflix homepage — hero + row-of-tiles editorial pattern
- Brutal Type / Heading Now — Epic's commissioned display sans
- Apple TV+ / Disney+ — cinematic hero treatment, full-bleed photography
- Battle.net — competing PC storefront with similar bold-display merchandising

## 14. Do's and Don'ts

**Do**
- Anchor the page on pure-black `#000000` — Epic's signature single canvas
- Use Epic Blue (`#0078f2`) for every primary CTA, every link, every focused border
- Render display headlines in Brutal Type at 64–80px / 800 with -0.02 to -0.04em negative tracking
- Run CTAs in uppercase Brutal Type 14/700 with 0.04em tracking — "GET", "WISHLIST", "BUY NOW"
- Use 4px-radius rectangles for tiles, capsules, buttons — the dominant geometry
- Render game tiles with 16:9 cover art filling to corners, metadata stacked beneath
- Use Mega Sale teal-blue (`#26bbff`) discount tag with black text — Epic's distinct sale voltage
- Anchor a yellow-on-black "FREE NOW" banner on free-game capsules — the platform's retention signature
- Use full-bleed 1920×1080 hero banners with gradient mask `transparent → rgba(0,0,0,0.7)` at the bottom
- Leave 96–160px between hero and first rail — Epic gives cinematic breath
- Apply blue glow `0 0 16px rgba(0,120,242,0.4)` on hovered tiles

**Don't**
- Don't introduce a light-mode storefront variant — the pure-black canvas is the brand
- Don't use sentence-case CTAs — Epic CTAs are always uppercase
- Don't soften hero negative tracking — display copy needs -0.02em or more to read as Epic
- Don't pair Brutal Type with serifs — the brand is geometric-sans throughout
- Don't compete the discount tag colour with Epic Blue — teal-blue `#26bbff` keeps merchandising distinct
- Don't run tile gutters tighter than 16px — Epic isn't a density storefront
- Don't introduce dense data-table layouts — Epic doesn't merchandise like Steam
- Don't make Free Game Friday subtle — the yellow border is meant to be unmissable
- Don't replace Brutal Type with a humanist sans — geometric is the brand
- Don't pluralise "wishlist" — "Wishlist" is the singular noun
- Don't use red/orange/green for primary CTAs — Epic Blue is the only commerce voltage

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #000000
Card:             #202024
Card Hover:       #2a2a2e
Epic Blue:        #0078f2
Brand Hover:      #1a8cf7
Brand Active:     #0061c4
Free Game Yellow: #ffce00
Mega Sale Tag:    #26bbff
Text:             #ffffff
Text Soft:        #dadada
Text Muted:       #9ca0a4
Border:           #3a3a3e
Blue Glow:        rgba(0,120,242,0.4)
```

### Example Component Prompts

- "Create an Epic Games primary CTA: 4px-radius button with Epic Blue `#0078f2` fill, white uppercase Brutal Type 14/700/0.04em label 'GET', 14×28px padding, 48px height. Hover brightens to `#1a8cf7`. Active deepens to `#0061c4`."
- "Build an Epic game tile: 256×144 cover-art card with `#202024` floor, 4px radius, no internal padding around image. Below the image: title in Brutal Type 16/600 white, price row with discount tag `#26bbff` 'Mega Sale -50%' if applicable, and a small badge 'COMING SOON' or 'NEW' in 11/700 uppercase. On hover: surface lifts to `#2a2a2e` and blue glow `0 0 16px rgba(0,120,242,0.4)` fades in."
- "Design an Epic top nav: sticky 80px tall with semi-translucent `rgba(0,0,0,0.95)` floor + backdrop blur. Epic Games wordmark anchored left in white. Nav items 'STORE · NEWS · DISTRIBUTE · SUPPORT' in Brutal Type 14/700 uppercase 0.04em. Account avatar + cart icon flush right. Below: 56px sub-nav with `#0a0a0a` floor and 'Discover · Browse · News · Sales · Free Games' in Inter 13/500."
- "Build an Epic Free Game Friday banner: 2px `#ffce00` border on `#000000` floor, 4px radius, 8×16px padding. Text 'FREE NOW' in Inter 11/700 uppercase 0.05em yellow `#ffce00`. Optional countdown text 'Until Thursday 11AM ET' in white. Banner pulses subtle scale 1.0 → 1.02 every 2s loop."
- "Create an Epic hero banner: full-bleed 1920×1080 game cover art with gradient mask `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)` at the bottom 30% for legibility. Title block overlaid bottom-left in Brutal Type 80/800/-0.04em white. Below the title: Epic Blue 'GET' CTA pill + outline white 'WISHLIST' pill. The hero parallax-scrolls at 0.5x scroll velocity behind the title block."
- "Design an Epic Mega Sale discount tag: `#26bbff` teal-blue rectangle with black text in Inter 14/700 '-50%', 2px radius, 4×8px padding. Anchored bottom-left of any discounted capsule."

### Iteration Guide

1. **Start with pure black.** If your canvas isn't `#000000`, it isn't Epic. Lock the canvas first.
2. **Epic Blue is the only blue.** `#0078f2` for every link, every CTA, every focused border.
3. **CTAs are uppercase Brutal Type.** "GET", "WISHLIST", "BUY NOW" — sentence-case is wrong.
4. **Display goes huge with negative tracking.** Hero copy at 64–80px / 800 / -0.02 to -0.04em.
5. **Free Game Friday is unmissable.** Yellow `#ffce00` border on black with 11/700 uppercase 'FREE NOW' label.
6. **Mega Sale tag is teal-blue.** `#26bbff` with black text — don't compete with Epic Blue.
7. **Tiles are 16:9 with 4px radius.** No 3:4 portrait, no 1:1 square — 16:9 is canonical.
8. **Cinematic breath.** 96–160px between hero and the first rail. If your page feels dense, you're doing Steam.
