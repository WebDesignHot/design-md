---
name: DoorDash
tagline: Signature red-orange CTA, custom DoorDash Sans, delivery-funnel commerce — the dominant on-demand local marketplace.
author: webdesignhot
source_url: https://doordash.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [marketplace]
tags: [light, marketplace, sans, red-orange, delivery, food, commerce, mobile-first]
preview_swatch: ['#ffffff', '#ff3008', '#191919']
related: [uber-eats, grubhub]
description: 'DoorDash''s storefront is the canonical delivery-funnel canvas — a near-white surface (`#ffffff`) anchored on warm ink (`#191919`), accented by the unmistakable **red-orange** brand voltage (`#ff3008`) that carries the wordmark, every primary CTA, the address-pin marker, and the funnel''s every conversion button. Type runs **DoorDash Sans**, a custom geometric sans family commissioned in 2020 (the rebrand year) at modest 500–700 weights — display 32–56px / 700, body 16/400, with carefully calibrated negative tracking on display. Cards round at 8px, CTAs are pill (9999px) at 48px height, and the entire surface is engineered around address-first conversion: a giant address input dominates the hero, store cards lean on lifestyle food photography, and every page cadences toward the same red-orange ''Get DoorDash'' or ''Sign In'' moment. The result is the most efficient delivery-funnel storefront on the web — a single chromatic voltage, ruthless typographic discipline, and address capture as the relentless north star.'

colors:
  bg: '#ffffff'                  # default canvas
  bg-page: '#fafafa'             # off-white page floor on certain bands
  surface: '#ffffff'
  surface-soft: '#f5f5f5'        # disabled fields, alt row
  surface-strong: '#e8e8e8'      # divider band
  surface-warm: '#fff7f5'        # very faint red-orange tint on promo bands
  surface-cream: '#faf5e8'       # cream on editorial moments (DashPass band)
  brand: '#ff3008'               # DoorDash red-orange — the wordmark and CTA colour
  brand-hover: '#e02c08'         # darker red on hover
  brand-active: '#bf2306'        # pressed state
  brand-pale: '#ffd2c8'          # disabled CTA tint
  brand-deep: '#8a1d05'          # deepest red for accent moments
  brand-light: '#fff0ec'         # softest red tint for promo surfaces
  text: '#191919'                # primary ink — warm near-black
  text-strong: '#0d0d0d'         # heading ink at maximum punch
  text-muted: '#5d5d5d'          # secondary metadata
  text-soft: '#767676'           # caption text, store metadata
  text-on-brand: '#ffffff'       # white on red-orange CTA
  text-disabled: '#a8a8a8'
  link: '#ff3008'                # default link inherits brand
  link-hover: '#bf2306'          # link hover deepens
  border: '#e8e8e8'              # default 1px hairline
  border-soft: '#f0f0f0'         # editorial dividers
  border-strong: '#cdcdcd'       # focus state hairline
  border-input: '#919191'        # form input outline
  border-card: '#ebebeb'         # store card hairline
  star-fill: '#ff3008'           # star rating fill matches brand
  star-empty: '#dcdcdc'          # empty star
  dashpass-yellow: '#ffd400'     # DashPass premium gold accent
  dashpass-bg: '#191919'         # DashPass band on dark
  dashpass-text: '#ffffff'
  free-delivery-green: '#00854c' # "Free delivery" green badge
  pickup-blue: '#0a47bf'         # "Pickup" tab accent (rare)
  bestseller-bg: '#fff0ec'       # "Bestseller" tag bg (soft red)
  bestseller-text: '#8a1d05'     # "Bestseller" tag text (deep red)
  trending-bg: '#fff8e6'         # "Trending" tag bg (soft amber)
  trending-text: '#7a5400'       # "Trending" tag text
  scrim: 'rgba(0,0,0,0.5)'       # modal backdrop
  shadow-card: 'rgba(0,0,0,0.08)'
  shadow-elev: 'rgba(0,0,0,0.16)'
  shadow-deep: 'rgba(0,0,0,0.24)' # bottom-sheet on mobile
  success: '#00854c'             # in-stock green
  success-soft: '#e6f3ec'
  warning: '#a35316'             # advisory amber-brown
  warning-soft: '#fff7e6'
  danger: '#cc1212'              # validation error red — distinct from brand
  danger-soft: '#fdeaea'
  info: '#0a47bf'
  info-soft: '#e8efff'

typography:
  display:
    family: '"DoorDash Sans Display", "DoorDash Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700, 800]
    opentype-features: ['tnum', 'ss01']
  body:
    family: '"DoorDash Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: 'Menlo, Monaco, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    hero-display:    { size: 56, weight: 700, lineHeight: 1.05, tracking: '-1.5px',  family: display, opentype: ['ss01'] }
    page-title:      { size: 40, weight: 700, lineHeight: 1.1,  tracking: '-1px',    family: display, opentype: ['ss01'] }
    section-head:    { size: 28, weight: 700, lineHeight: 1.2,  tracking: '-0.5px',  family: display, opentype: ['ss01'] }
    sub-section:     { size: 22, weight: 700, lineHeight: 1.25, tracking: '-0.25px', family: display }
    store-name:      { size: 18, weight: 700, lineHeight: 1.33, tracking: '0',       family: body }
    store-name-grid: { size: 16, weight: 700, lineHeight: 1.25, tracking: '0',       family: body }
    item-name:       { size: 16, weight: 600, lineHeight: 1.25, tracking: '0',       family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',       family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.38, tracking: '0',       family: body }
    micro:           { size: 11, weight: 500, lineHeight: 1.27, tracking: '0.04em',  family: body }
    price-display:   { size: 22, weight: 700, lineHeight: 1.0,  tracking: '-0.25px', family: body, opentype: ['tnum'] }
    price-item:      { size: 16, weight: 600, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'] }
    button-cta:      { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body }
    button-sm:       { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body }
    nav-link:        { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0',       family: body }
    tag-label:       { size: 12, weight: 700, lineHeight: 1.0,  tracking: '0.02em',  family: body }
    badge:           { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.06em',  family: body, transform: uppercase }

radius:
  micro: 2
  sm: 4
  md: 8        # default cards
  lg: 12
  xl: 16
  xxl: 24
  pill: 9999   # CTAs, search bar — DoorDash's signature pill

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 76
  masthead-height: 64
  sub-nav-height: 48

components:
  button-cta:
    bg: '#ff3008'
    color: '#ffffff'
    radius: 9999
    padding: '14px 24px'
    height: 48
    font: button-cta
    use: 'Get DoorDash, Sign In, Add to cart, Continue — every primary action.'
  button-cta-hover:
    bg: '#e02c08'
    color: '#ffffff'
    radius: 9999
    use: 'Hover state — deeper red.'
  button-secondary:
    bg: '#ffffff'
    color: '#191919'
    border: '1px solid #191919'
    radius: 9999
    padding: '13px 23px'
    height: 48
    use: 'Cancel, Save, inverse CTAs.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#ff3008'
    use: '"Show more" links — underlined on hover.'
  button-icon-circle:
    bg: '#ffffff'
    color: '#191919'
    radius: 9999
    border: '1px solid #e8e8e8'
    height: 40
    width: 40
    use: 'Heart favorite, share button on store cards.'
  store-card:
    bg: '#ffffff'
    color: '#191919'
    radius: 8
    padding: '0 0 12px 0'
    border: 'none'
    use: 'Restaurant tile — image-led 16:9 hero, ratings + delivery time + fee stacked beneath.'
  item-card:
    bg: '#ffffff'
    color: '#191919'
    radius: 8
    padding: '12px'
    border: '1px solid #ebebeb'
    use: 'Menu item card on PDP — name + price + description + 64px square photo.'
  search-bar:
    bg: '#ffffff'
    color: '#191919'
    radius: 9999
    height: 48
    border: '1px solid #cdcdcd'
    focus-ring: '2px solid #ff3008'
    use: 'Masthead pill search — full-width on mobile, ~480px on desktop.'
  address-input:
    bg: '#f5f5f5'
    color: '#191919'
    radius: 9999
    height: 56
    border: '1px solid transparent'
    focus-ring: '2px solid #ff3008'
    use: 'Hero address-capture input — the funnel''s north star, the largest single component on the homepage.'
  text-input:
    bg: '#ffffff'
    color: '#191919'
    radius: 8
    height: 48
    padding: '12px 14px'
    border: '1px solid #919191'
    focus: '2px solid #ff3008'
    use: 'Form input — 8px radius (less rounded than pill CTAs to keep utility).'
  star-rating:
    color-fill: '#ff3008'
    color-empty: '#dcdcdc'
    use: 'Five-star rating — red-orange fill, grey empty. DoorDash sometimes uses single-star + numeric (4.7).'
  bestseller-tag:
    bg: '#fff0ec'
    color: '#8a1d05'
    radius: 4
    padding: '2px 8px'
    use: '"#1 Most Liked", "Bestseller" badges on menu items.'
  free-delivery-tag:
    bg: 'transparent'
    color: '#00854c'
    use: 'Inline green text — no surface, no border.'
  dashpass-band:
    bg: '#191919'
    color: '#ffffff'
    accent: '#ffd400'
    radius: 0
    padding: '48px 0'
    use: 'Dark DashPass premium subscription band — yellow accent.'
  hero-promo:
    bg: '#fff7f5'
    color: '#191919'
    radius: 16
    padding: '48px 64px'
    use: 'Soft red-tinted promo band — red-orange CTA pill anchored bottom-left.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  cta-press: 'CTA bg deepens ff3008 → bf2306 over 150ms on :active'
  card-hover: 'image scales 1.0 → 1.03 inside its rounded clip + caption translateY +2 → 0 over 240ms'
  address-suggest: 'autocomplete dropdown fades in + 4px slide over 200ms standard'
  reduced-motion: 'respects prefers-reduced-motion: reduce — image scale and slide motion suppressed; colour transitions remain.'

breakpoints:
  mobile: 600
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  ambient: 'none — DoorDash stays mostly flat'
  hover-card: 'rgba(0,0,0,0.08) 0 4px 12px'
  modal: 'rgba(0,0,0,0.16) 0 8px 24px'
  bottom-sheet: 'rgba(0,0,0,0.24) 0 -4px 16px'
  ring: '0 0 0 2px #ff3008'

accessibility:
  contrast-text-on-bg: 17.0          # #191919 on #ffffff — AAA
  contrast-text-on-cta: 4.7          # #ffffff on #ff3008 — AA at body sizes
  contrast-link-hover: 4.7           # #ff3008 on #ffffff — AA at body sizes
  contrast-muted-on-bg: 7.4          # #5d5d5d on #ffffff — AAA
  focus-ring: '2px solid #ff3008 + 2px outline offset (red-orange ring)'
  reduced-motion-honored: true
  touch-target-min: 48
  keyboard-nav: 'Tab moves masthead → address → search → main grid → footer; arrow keys inside autocomplete.'

dark-mode: null   # Light-only across the public storefront. The DoorDash mobile app respects system dark mode.
---

## 1. Visual Theme & Atmosphere

DoorDash's storefront is the canonical delivery-funnel canvas — bright, urgent, photographic, and ruthlessly conversion-coded. The base canvas is white (`#ffffff`) with a faint off-white (`#fafafa`) page-floor accent appearing on certain editorial bands, anchored on warm ink (`#191919`) and accented by the unmistakable **red-orange** voltage (`#ff3008`) that carries the wordmark, every primary CTA, the address-pin marker, the favorite heart, the rating-star fill, and the focus ring. Like Etsy's burnt-orange or Stripe's blurple, this single voltage does the entire chromatic work of the brand.

Type runs **DoorDash Sans**, a custom geometric sans commissioned in 2020 as part of the company's rebrand. The family ships in two optical sizes — DoorDash Sans Display for headlines, DoorDash Sans for body — with weights 400, 500, 600, 700, 800. On the storefront, headlines run 28–56px / 700 with -0.5 to -1.5px tracking, body 16/400 with comfortable 1.5 leading. There is no display-family alternative; DoorDash Sans carries the entire scale. The OpenType `ss01` stylistic set is enabled on display sizes, modifying specific glyphs (the alternate `a` and `g`) to give DoorDash's headlines their slightly geometric warmth.

The chromatic identity is essentially monochromatic plus one accent — **red-orange on warm white**. DoorDash resists every other "delivery" colour temptation: no blue-for-trust, no green-for-money outside the narrow scope of "Free delivery" inline tags, no rainbow category coding. The single red-orange does all the work. Where it appears it carries weight; where it's absent the page reads as calm-utility. Deep-red variants (`#8a1d05`) appear inside Bestseller / "#1 Most Liked" tags; these are scoped to menu-meta moments, never to brand chrome.

Shape language is **fully-pill** for CTAs (9999px) and softly rounded for cards (8px). Buttons are 48px tall, the search bar is a 48px pill, the hero address input is a 56px pill (the largest pill on the page — DoorDash's funnel signature). Cards round at 8px, hero promo bands at 16–24px. There are no compound radii; every interactive element rounds uniformly.

The **address input is the design's gravitational centre**. Where Etsy puts a search bar at the masthead and Amazon puts product tiles, DoorDash puts a giant address-capture field directly in the hero — flush left, with a "Find Food" red-orange pill flush right, with placeholder copy that reads "Enter delivery address". This single input, more than any other element, defines the DoorDash homepage. Every visit funnels to this moment.

**Key Characteristics:**
- Single brand colour: red-orange (`#ff3008`) for the wordmark, every primary CTA, ratings, favorites, focus ring
- DoorDash Sans custom typeface (commissioned 2020) with `ss01` enabled on display sizes
- Address input as hero — 56px pill, the largest interactive element on the homepage
- Pill CTAs at 9999px / 48px height, 16/700 white text on red-orange
- Lifestyle food photography on every store card (16:9 hero, `object-fit: cover`)
- Star ratings render in red-orange — never yellow or gold
- Bestseller tags use deep-red (`#8a1d05`) on soft-red (`#fff0ec`) surfaces
- Dark DashPass band (`#191919` ground, yellow `#ffd400` accent) — the only dark moment in mainline UI
- Generous 64–96px vertical hero padding — DoorDash gives editorial bands more breath than mass marketplaces
- "Free delivery" callouts in green (`#00854c`) — the only non-red colour with conversion weight

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): default page floor, every store tile, every form surface
- **Page Floor Off-white** (`#fafafa`): the slightly off-white backing on category-listing bands and footer top
- **Ink** (`#191919`): primary text colour — warm near-black with a faint warmth, never pure `#000`
- **Heading Ink** (`#0d0d0d`): used on hero display copy where DoorDash wants maximum chromatic punch

### Brand
- **Red-Orange** (`#ff3008`): the wordmark, primary CTA, rating-star fill, heart-favorite, focus ring, link colour — the single brand voltage
- **Brand Hover** (`#e02c08`): deeper red on hover
- **Brand Active** (`#bf2306`): pressed state
- **Brand Pale** (`#ffd2c8`): disabled CTA tint
- **Brand Deep** (`#8a1d05`): deepest red for Bestseller / "#1 Most Liked" tag text
- **Brand Light** (`#fff0ec`): softest red tint for promo surfaces and tag backgrounds
- **Surface Warm** (`#fff7f5`): very faint red-tinted ground on hero promo bands

### Accent
- **DashPass Yellow** (`#ffd400`): the premium subscription accent — used exclusively inside the dark DashPass band as a wordmark and CTA fill
- **Free Delivery Green** (`#00854c`): inline "Free delivery" callouts — the only green in the system

### Interactive
- **Link** (`#ff3008`): default inline link in body — red-orange (DoorDash uses brand colour for links, distinguishing it from Etsy which keeps links ink)
- **Link Hover** (`#bf2306`): link hover deepens to active
- **Visited** (`#5e2a8c`): purple visited-link state (rarely seen)
- **Disabled** (`#a8a8a8`): disabled text and outline
- **Selected** (`#ff3008`): selected radio / checkbox / tab fill

### Neutral Scale
- **Ink** (`#191919`) — primary text
- **Heading** (`#0d0d0d`) — hero display copy
- **Muted** (`#5d5d5d`) — secondary metadata, store delivery time, fee
- **Soft** (`#767676`) — caption text, faint counts
- **Disabled** (`#a8a8a8`) — disabled state text
- **Border** (`#e8e8e8`) — default 1px hairline
- **Border Soft** (`#f0f0f0`) — editorial dividers
- **Border Card** (`#ebebeb`) — store card hairline
- **Border Strong** (`#cdcdcd`) — focus state hairline on inputs
- **Border Input** (`#919191`) — default form-input outline (darker than peers because DoorDash wants form edges to read with conviction)

### Surface & Borders
- **Canvas** (`#ffffff`) — default
- **Soft** (`#f5f5f5`) — disabled fields, alternate row, address-input ground
- **Strong** (`#e8e8e8`) — divider band between major sections
- **Warm** (`#fff7f5`) — faint red-tinted ground on hero promo bands
- **Brand Light** (`#fff0ec`) — Bestseller / Trending tag surfaces; promo banner tint
- **Cream** (`#faf5e8`) — editorial moments (DashPass landing pages occasionally)

### Shadow Colors
DoorDash stays mostly flat. Hover-card shadow is single-layer neutral grey at 8% — same intensity as Etsy or Walmart. The brand position: urgency comes from the red-orange voltage and conversion-funnel layout, not from atmospheric shadows.

- `rgba(0,0,0,0.08) 0 4px 12px` — hover-card lift
- `rgba(0,0,0,0.16) 0 8px 24px` — modal drop
- `rgba(0,0,0,0.24) 0 -4px 16px` — bottom-sheet on mobile (the cart drawer)

### Semantic
- **Success Green** (`#00854c`): "Free delivery", "Order placed", "Driver on the way" — a deep green that reads confident not cheap
- **Warning Brown** (`#a35316`): advisory banners — warm brown rather than amber
- **Danger Red** (`#cc1212`): validation error red — distinct from brand red-orange (DoorDash uses a colder red for errors so users don't confuse "you have an error" with "click this CTA")
- **Info Blue** (`#0a47bf`): informational banners and pickup-tab accent — used sparingly because blue feels off-brand

## 3. Typography Rules

### Font Family

**Primary**: `DoorDash Sans` — a custom geometric humanist sans commissioned in 2020 from typeface foundry as part of DoorDash's brand refresh. Two optical sizes ship: DoorDash Sans Display (designed for headlines, tighter spacing, slightly more compact apertures) and DoorDash Sans (the body workhorse). Fallback chain: `"Helvetica Neue", Helvetica, Arial, sans-serif`.

**Mono**: not part of the storefront brand system.

**OpenType features**: `tnum` is enabled on prices, ratings, delivery times, and ETAs. `ss01` is enabled on display headlines, modifying specific glyphs to give DoorDash's headline copy its modern geometric feel. Body text uses default glyphs.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | DoorDash Sans Display | 56 | 700 | 1.05 | -1.5px | ss01 | Hero "Get the food you want delivered" |
| page-title | DoorDash Sans Display | 40 | 700 | 1.1 | -1px | ss01 | Category page H1 — "Pizza near me" |
| section-head | DoorDash Sans Display | 28 | 700 | 1.2 | -0.5px | ss01 | "Top rated", "Featured", "Most popular" |
| sub-section | DoorDash Sans | 22 | 700 | 1.25 | -0.25px | — | PDP sub-section heads |
| store-name | DoorDash Sans | 18 | 700 | 1.33 | 0 | — | Restaurant name on PDP |
| store-name-grid | DoorDash Sans | 16 | 700 | 1.25 | 0 | — | Restaurant name on grid tiles |
| item-name | DoorDash Sans | 16 | 600 | 1.25 | 0 | — | Menu item name |
| body-md | DoorDash Sans | 16 | 400 | 1.5 | 0 | — | Default body — descriptions, reviews |
| body-sm | DoorDash Sans | 14 | 400 | 1.43 | 0 | — | Secondary metadata, "20–30 min", "$2.99 delivery fee" |
| caption | DoorDash Sans | 13 | 400 | 1.38 | 0 | — | Footer micro-text, fine-print disclosures |
| micro | DoorDash Sans | 11 | 500 | 1.27 | 0.04em | — | Footer legal — slight tracking for legibility |
| price-display | DoorDash Sans | 22 | 700 | 1.0 | -0.25px | tnum | PDP main price, cart subtotal |
| price-item | DoorDash Sans | 16 | 600 | 1.0 | 0 | tnum | Menu item price |
| button-cta | DoorDash Sans | 16 | 700 | 1.0 | 0 | — | Primary CTA labels — bold |
| button-sm | DoorDash Sans | 14 | 700 | 1.0 | 0 | — | Compact CTAs in cart drawer |
| nav-link | DoorDash Sans | 14 | 600 | 1.0 | 0 | — | Masthead utilities |
| tag-label | DoorDash Sans | 12 | 700 | 1.0 | 0.02em | — | Bestseller / Most Liked tag text |
| badge | DoorDash Sans | 11 | 700 | 1.0 | 0.06em | — | Uppercase micro-tags |

### Principles

- **DoorDash Sans with `ss01` on display.** The stylistic set is the typographic signature — without it, the headlines read as generic geometric sans.
- **Display weight always 700 (bold).** Unlike Etsy's modest-700 + Graphik, DoorDash leans into bold display because the brand wants to project urgency and reliability simultaneously.
- **Button CTAs at 700 (bold).** Where Etsy uses 600, DoorDash pushes to 700 because the funnel is tuned for conversion — bolder text = higher click-through.
- **Tabular numerals on every price, fee, and delivery-time.** `tnum` on prices, ratings, ETAs, fees, distances. Critical for table-aligned reading of cart totals.
- **Negative tracking on display.** Display 56px and page-title 40px run -1.5px and -1px respectively — DoorDash leans more aggressive on negative tracking than mass marketplaces.
- **Item names at 16/600 (semibold).** On menu PDPs, item names are 16/600 — clearly visible but never overshadowing the food photography.
- **Inter is the closest open-source substitute.** Adjust by ~3% letter-spacing to compensate for DoorDash Sans's slightly tighter cap height on display.

## 4. Component Stylings

### Buttons

**`button-cta`** — red-orange (`#ff3008`) fill, white text in 16/700, 9999px pill, 14×24px padding, 48px height. The most common CTA: "Get DoorDash", "Sign In", "Add to cart", "Continue", "Find Food". Hover deepens to `#e02c08`. Active to `#bf2306`.

**`button-secondary`** — white fill, 1px ink (`#191919`) outline, ink text in 16/700. Same pill, same 48px height. Used for "Cancel", "Save", inverse CTAs over red-orange surfaces.

**`button-tertiary-text`** — plain red-orange (`#ff3008`) text, no surface. Underlined on hover; deepens to `#bf2306`. Used for "See all", "Show more", "View menu".

**`button-icon-circle`** — small (40×40) circular icon button, white fill, 1px hairline border, ink heart icon. When favorited, the heart fills with red-orange. Also used for share, info popovers.

**`button-disabled`** — `#ffd2c8` fill (brand-pale), `#ffffff` text. The CTA stays brand-coded even disabled, so users still associate the affordance with the brand.

### Cards

**`store-card`** — restaurant tile. White surface, 8px radius, no internal padding around the image (16:9 hero fills to the rounded edge), 12px bottom padding for metadata. Stack: 16:9 lifestyle hero with `object-fit: cover` (food photo or storefront), heart icon top-right (default outline ink, fills red-orange when favorited), DashPass logo bottom-right of image (when applicable), restaurant name in 16/700, star row + rating + review count in 14/400 muted, delivery time in 14/400 ink ("20–30 min"), delivery fee in 14/400 muted ("$2.99 delivery fee" or green "Free delivery").

**`item-card`** — menu item card on store PDP. White surface, 8px radius, 1px hairline border, 12px padding. Two-column layout: text left (item name in 16/600 ink, 2-line description in 14/400 muted, price in 16/600 ink), 64×64px square photo right with 8px radius and `object-fit: cover`. On hover the whole card lifts (4px shadow) and the photo scales 1.03.

**`pdp-buy-box`** — sticky right-rail card on store PDP. White, 8px radius, 1px hairline border, hover-card shadow, 24px padding. Stack: large `price-display` for cart subtotal, item count, free-delivery progress bar (when applicable), full-width red-orange "Checkout" pill, "Add more items to qualify for free delivery" hint copy, ETA estimate.

**`hero-promo`** — soft-red (`#fff7f5`) ground, ink display headline in 56/700 with `ss01` and -1.5px tracking, body sub-copy in 18/400, red-orange pill CTA anchored bottom-left. 16–24px radius. The page's largest typographic moment outside the address-input hero.

**`category-tile`** — square photo with a single-line ink title beneath. No CTA, no rating row — used in homepage category navigation ("Pizza", "Burgers", "Sushi", "Healthy", "Mexican").

**`dashpass-band`** — full-width dark (`#191919`) band, 48–64px vertical padding. Yellow (`#ffd400`) DashPass wordmark in 32/800. White body copy, white pill CTA with red-orange text — the only place in mainline UI where the colour stack inverts.

### Badges, Tags, Pills

**`bestseller-tag`** — soft-red (`#fff0ec`) surface, deep-red (`#8a1d05`) text in 12/700, 4px radius, 2×8px padding. "#1 Most Liked", "Bestseller", "Customer Favorite". Sits inline with menu items.

**`trending-tag`** — soft-amber (`#fff8e6`) surface, dark-amber (`#7a5400`) text. "Trending" or "New". Used scarcely.

**`free-delivery-tag`** — inline green (`#00854c`) text in 14/400. No surface, no border — sits inline with the delivery-fee line.

**`dashpass-tag`** — small DashPass logo pill (yellow text on dark ground). Indicates a store eligible for DashPass free-delivery.

**`promo-tag`** — red-orange text on soft-red surface, "Up to 50% off". Sits as a corner ribbon on store cards during active promos.

### Inputs / Forms

**`address-input`** — the funnel's north star. Soft-grey (`#f5f5f5`) ground, 1px transparent border (no visible hairline at rest), 9999px pill, 56px height, 14×20px padding. Pin-icon prefix (red-orange map pin), placeholder "Enter delivery address" in 16/400 muted. On focus, ground stays soft-grey but a 2px red-orange ring fades in. Pairs with a flush-right "Find Food" red-orange pill CTA.

**`text-input`** — white surface, 1px `#919191` hairline (darker than peers), 8px radius (slimmer than the pill CTAs), 48px height, 12×14px padding. Stacked label above in 13/400 muted. On focus the border thickens to 2px red-orange.

**`search-bar`** — masthead pill search. White fill, 9999px radius, 48px height, 1px `#cdcdcd` hairline. Single text input with magnifier-glass prefix and an optional address-pin tag suffix showing the user's current saved address.

### Navigation

**`masthead`** — full-width white bar with a thin 1px `#e8e8e8` bottom border, 76px height. Wordmark flush left in red-orange (DoorDash Sans Display 24/800 with the dotted-D bowl), search bar centred, account / orders / cart utilities flush right with thin 14/600 ink labels.

**`sub-nav`** — slim 48px band beneath the masthead, white fill, 1px hairline bottom, horizontally-scrolling category chip row on mobile. Holds quick filters: "Pickup", "DashPass", "Under $10", "Fastest" — pill chips at 32px height with 14/600 ink labels.

**`category-nav`** — homepage horizontal scroll of round category tiles (64×64 photo + label beneath).

**`breadcrumb`** — `text-muted` (`#5d5d5d`) with `›` separators, 13/400.

### Star Rating

**`star-rating`** — single-icon row with numeric. Most cards use a single red-orange star + "4.7" + "(2,847)" review count, all in 14/600 ink. PDPs sometimes render the full 5-star spread in red-orange fill, `#dcdcdc` empty.

### Modals & Toasts

**`modal`** — centred dialog over a 50%-opacity ink scrim. White surface, 12px radius (more relaxed than the 8px cards), 1px hairline border, modal shadow. Close X anchored top-right.

**`bottom-sheet`** — mobile-first cart drawer. White surface, 16px top-radius (corners only), full-width, slides up from bottom with a 4px deep shadow above. Contains cart items + subtotal + red-orange "Checkout" pill.

**`toast`** — bottom-centre notifications. Dark (`#191919`) fill, 8px radius, white text, 16×24px padding. DoorDash uses dark toasts for confirmation messaging because the contrast against the white canvas is highest.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`
- Section padding (vertical): **64–96px** between major bands; **128px** on the homepage hero band (address-input hero gets the largest breath)
- Card internal padding: **0** around the store-card image, **12px** below for metadata; **12px** for item-cards; **24px** for PDP buy-box
- Gutters: **16px** between store tiles in grid view; **24px** between item-cards on PDP; **96–128px** between major page bands

### Grid & Container

- Max content width: **1280px** centred (smaller than Etsy's 1408px because DoorDash leans denser)
- Homepage: hero address band (full-width), then category tiles (8-up horizontal scroll), then store grid 4-up, then editorial bands
- Search results: **4-column** store grid at desktop with 16px gutters; 3-up at tablet; 2-up at mobile
- Store PDP: 2-column with menu list left (~64%), sticky cart-summary right (~32%); menu list groups items by category section
- Footer: 5-column link list at desktop with off-white ground

### Whitespace Philosophy

DoorDash gives editorial bands moderate breath — 64–96px between sections, 128px on the hero. Inside each band, density is moderate-to-high — store grids run 4 across with 16px gutters, denser than Etsy (5-up at 1408px) but airier than Amazon (6-up). The visual rhythm is **address hero → category scroll → moderate-density store grid → editorial band → footer** — a funnel-shaped page that draws the eye toward conversion at every step.

### Section Cadence

DoorDash alternates between **white bands** (default body, store grids, store PDPs) and a single **dark DashPass band** (`#191919` ground with yellow accent). The dark band is the only chromatic rupture in the otherwise white-and-red-orange palette — DoorDash uses it to spotlight DashPass premium subscriptions exactly once per page.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Dense table corners |
| Small | 4px | Bestseller / Trending tags, micro-badges |
| Card | 8px | Store tiles, item cards, dropdowns, text inputs |
| Featured | 12px | Modal containers |
| Hero | 16px | Hero promo bands, bottom-sheet (top corners only) |
| XXL | 24px | Editorial moments, larger feature cards |
| Pill | 9999px | CTAs, search bar, address input, favorite icon button |

There are no compound radii in mainline UI **except** the bottom-sheet on mobile, which uses `16px 16px 0 0` (top corners only, flush bottom). Form text-inputs at 8px are slimmer than the pill CTAs — chosen to read slightly more utilitarian without breaking the corner family.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer, all editorial bands (~95% of surfaces) |
| 1 — Hover Card | `rgba(0,0,0,0.08) 0 4px 12px` | Store tiles on hover, item cards on hover, dropdowns |
| 2 — Modal | `rgba(0,0,0,0.16) 0 8px 24px` | Centred dialogs |
| 3 — Bottom Sheet | `rgba(0,0,0,0.24) 0 -4px 16px` | Mobile cart drawer (shadow above) |
| 4 — Scrim | `rgba(0,0,0,0.5)` | Modal backdrop |

### Shadow Philosophy

DoorDash stays mostly flat. Depth comes from **the red-orange voltage** (the one chromatic anchor that pulls every page) and **the photographic contrast** of seller-supplied food imagery. Hover-card shadow is a single-layer neutral grey — no red tint, no atmospheric multi-layer composition. The brand position: urgency comes from the brand voltage and conversion-funnel layout, not from elevation. The bottom-sheet's upward shadow on mobile is the only "atmospheric" moment — it gives the cart drawer a gravitational presence.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, bottom-sheet slide

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Hover colour swap (CTA bg deepen), focus ring fade-in |
| Standard | 240ms | Card hover lift + image scale, modal enter |
| Slow | 320ms | Hero carousel slide, bottom-sheet slide-up |

### Per-Component Recipes

- **CTA hover**: background transitions from `#ff3008` to `#e02c08` over 150ms.
- **CTA press**: deepens to `#bf2306` for 150ms on `:active`.
- **Store card hover**: image scales 1.0 → 1.03 inside its rounded clip + caption translateY(2px → 0) over 240ms. The 1.03 scale is more conservative than Etsy's 1.04 — DoorDash wants the food photo to feel anchored.
- **Item card hover**: card lifts with a 4px shadow + photo scales 1.03 over 240ms.
- **Address autocomplete**: dropdown fades in + 4px slide-down over 200ms. Suggestion items highlight on hover with a soft-red (`#fff0ec`) ground.
- **Address-input focus**: 2px red-orange ring fades in over 200ms; ground stays soft-grey.
- **Bottom-sheet slide**: cart drawer translates from `translateY(100%)` to `0` over 320ms emphasized.
- **Modal enter**: scrim fades in over 200ms, dialog translates from `translateY(8px) opacity(0)` to `0/1` over 240ms emphasized.
- **Heart favorite**: heart fills with red-orange and scales 1.0 → 1.15 → 1.0 over 300ms — DoorDash's lone celebratory motion.

### Page Transitions

Page-to-page navigation uses no transition — links fire a hard navigation. DoorDash prioritises perceived speed; the funnel rewards every fewer millisecond between intent and conversion.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Card image scale suppresses (only shadow remains). Heart-favorite pulse becomes an instant fill swap. Modal slide degrades to opacity-only. Bottom-sheet still slides (gesture-bound), but the easing flattens to `linear`.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #191919 ink on #ffffff canvas | 17.0 | AAA |
| #ffffff on #ff3008 CTA | 4.7 | AA at body sizes |
| #ffffff on #e02c08 CTA hover | 5.4 | AA at body sizes |
| #ff3008 link on #ffffff | 4.7 | AA at body sizes |
| #5d5d5d muted on #ffffff | 7.4 | AAA |
| #8a1d05 deep-red on #fff0ec Bestseller surface | 9.6 | AAA |
| #00854c free-delivery green on #ffffff | 5.5 | AA |
| #ffd400 DashPass yellow on #191919 | 12.5 | AAA |

The white-on-red-orange CTA pair sits at **4.7 — AA at body sizes**. DoorDash uses 16/700 button text (bold), pushing legibility further. The hover state (`#e02c08` → 5.4) crosses deeper into AA. The DashPass yellow-on-dark moment is the strongest contrast pair on the page — engineered to make DashPass branding unmistakable.

### Focus Indicators

Focus ring is **2px solid `#ff3008`** (red-orange) with 2px outline-offset. Buttons, inputs, and links all gain the brand-red ring on `:focus-visible`. DoorDash keeps focus on the brand colour because it's already the page's loudest voltage — extending it to focus rings reinforces the chromatic identity.

### ARIA Patterns

- **Address input**: `role="combobox"` with `aria-expanded`, `aria-controls` linked to the autocomplete listbox, `aria-activedescendant` for highlighted suggestion.
- **Search bar**: `role="search"`. Input has `aria-label="Search restaurants and cuisines"`.
- **Store card**: entire tile wrapped in `<a>` with verbose `aria-label` — "Pizza Hut, 4.7 stars, 2,847 reviews, 20–30 minute delivery, $2.99 delivery fee, DashPass eligible".
- **Favorite heart**: `aria-pressed` to communicate save state. Label: "Add to favorites" → "Remove from favorites".
- **Star rating**: text-equivalent (`aria-label="4.7 out of 5 stars based on 2,847 reviews"`).
- **Bestseller tag**: `aria-label="Most popular menu item"`.
- **Bottom-sheet cart drawer**: `role="dialog"` with `aria-modal="true"` and focus-trap.
- **DashPass band**: standard region landmark — DoorDash doesn't pretend it's a separate page.

### Keyboard Navigation

- Masthead: Tab moves logo → search → address (when present) → utilities → cart
- Hero address-input: arrow keys navigate the autocomplete dropdown; Enter selects; Esc dismisses
- Store grid: Tab through tiles in document order; favorite heart is its own tab stop
- Store PDP: Tab through menu sections → items → "Add to cart" → cart drawer
- Bottom-sheet: focus traps inside the dialog; Esc closes

### Screen Reader Hints

Verbose `aria-label` on store cards (delivery time, fee, DashPass eligibility) so screen-reader users get the same scanning experience as sighted users. The favorite heart announces state. The free-delivery green tag announces "Free delivery included" so screen-reader users perceive the savings affordance even though the colour cue is invisible to them.

### Reduced Motion

All transitions degrade to opacity-only. Card image scale and heart-pulse suppress. Bottom-sheet slide flattens to instant.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Masthead collapses to logo + cart + hamburger; address input dominates the hero (full-width); store grid 1-up or 2-up; PDP cart becomes a sticky bottom-sheet |
| Tablet | 600–1024px | Full masthead with search; store grid 2-up or 3-up |
| Desktop | 1024–1280px | Sub-nav with category chips; store grid 4-up |
| Wide | 1280–1440px | Content caps at 1280px; store grid 4-up with extra side breath |

### Touch Targets

- Primary CTAs: 48px height — meets AAA
- Address input: 56px height — exceeds AAA (the funnel's most important target)
- Search bar: 48×48px
- Favorite heart on cards: 40×40px — meets AA, with 8px hit-target padding
- Store tile: entire 320×280px tile is tappable
- Category chips: 32px height — at the AA minimum for non-primary controls

### Collapsing Strategy

- Masthead: utilities (account, orders) hide first; only logo + cart + hamburger remain at <600px
- Address input: stays full-width even on mobile — DoorDash never demotes it
- Store grid: 4 → 3 → 2 → 1 (single-column at very narrow widths); 16px gutters compress to 12px → 8px
- PDP: 2-column splits to single-column stack at <1024px; cart-summary becomes a sticky bottom-sheet
- DashPass band: stays full-width but reduces vertical padding 64 → 48 → 32

### Image Behavior

Store-card images use `aspect-ratio: 16/9` with `object-fit: cover` (DoorDash prefers `cover` because seller-supplied food photography is rarely studio-clean — most listings are working-restaurant shots). Item-card photos use `aspect-ratio: 1/1` with `cover`. PDP main hero supports lightbox click on mobile.

### Container Queries

Used in the PDP cart-summary: when the right rail narrows below ~340px, item-quantity controls collapse to compact `+/-` chips instead of full counters.

## 11. Content & Voice

### Tone

Direct, urgent, helpful. DoorDash's voice is "the friend who knows every restaurant in town and just texted you the right one." Headlines lead with outcome ("Get the food you want delivered", "Pizza in 30 minutes") rather than feature language. The brand consistently positions DoorDash as **the fastest path between hungry and fed** — speed, convenience, breadth.

### Microcopy Patterns

- **Button verbs**: "Get DoorDash", "Find Food", "Add to cart", "Checkout", "Sign In", "Continue" — outcome-named
- **Error message recipe**: brief + actionable — "We couldn't process that card. Try a different one or check your billing details."
- **Success confirmations**: temporal — "Your order is on the way — 22 min ETA"
- **Field labels**: short and direct — "Email", "Phone", "Apt/Suite" (DoorDash often uses field-as-label inside the input itself for forms)
- **Stock urgency**: "Only 2 left at this price" — names the urgency without exclamation

### Empty States

Empty cart: "Your cart is empty. Browse restaurants near you to get started." — names the next action.

Empty favorites: "You haven't favorited anything yet. Tap the heart on any restaurant to save it." — instructive.

Empty search: "No results for [query]. Try a different cuisine or check your spelling." — names cause + alternative.

No address: "Enter your delivery address to see available restaurants" — names the funnel's first step explicitly.

### CTA Verb Conventions

- Primary: **"Find Food"** (homepage hero, after address), **"Get DoorDash"** (signup), **"Sign In"**, **"Add to cart"**, **"Checkout"**, **"Continue"**
- Save: **"Add to favorites"** — heart-first vocabulary
- Tertiary: **"View menu"**, **"See all"**, **"Show more"**
- Avoided: "Submit", "Click here", "Buy now" (DoorDash avoids commerce-coded "Buy" because it markets a service, not a product)

## 12. Dark Mode & Theming

**Light-only on the public web.** DoorDash.com is light-only. The DoorDash mobile app respects system dark mode (deep neutral surface, white text, red-orange unchanged), but the web storefront stays white. The brand position: speed comes from clarity, and the white-canvas + red-orange-CTA pair gives the highest single-glance affordance. Inverting to dark would lose the urgency.

The lone "darker surface" inside the page is the **DashPass band** (`#191919` ground with yellow accent), which spotlights the premium subscription rather than serving as a theme.

## 13. Lineage & Influences

DoorDash's visual lineage runs through three traditions: **Silicon Valley product-marketing minimalism** (white canvas, sans-serif, single brand colour — the post-Stripe playbook); **on-demand-delivery-app conventions** (address-input hero, store-card grid, food photography — pioneered by Postmates and Seamless, refined by Uber Eats and DoorDash); and **fast-food retail signage** (the red-orange palette dates back to mid-century American fast-food chains — McDonald's, Burger King, Pizza Hut — and DoorDash chose it specifically to evoke that hunger-coded urgency).

The 2020 brand refresh paired DoorDash's existing red-orange with the custom DoorDash Sans typeface and tightened the chromatic palette to white-ink-red-orange. The pre-2020 wordmark used a generic sans; post-2020 it sits in DoorDash Sans Display with the dotted-D bowl — DoorDash kept the playfulness of the dot but moved the typography to a custom-credible sans.

What DoorDash rejects: cool greys, multi-colour brand systems, dark-mode web, photo-heavy editorial layouts, expressive display typefaces, and atmospheric shadows. The brand position is **calm urgency** — DoorDash wants to feel like a fast-but-trusted delivery service, not a tech-disruptor unicorn.

**Influences:**
- Mid-century American fast-food signage — red-orange palette
- DoorDash Sans (custom commission, 2020) — geometric humanist sans
- Stripe — single-brand-colour discipline for SaaS, [stripe.com](https://stripe.com)
- Uber Eats — address-input-as-hero pattern, [ubereats.com](https://ubereats.com)
- Airbnb — store-card photography conventions, [airbnb.com](https://airbnb.com)
- Postmates — pre-2020 delivery-marketplace template (DoorDash acquired Postmates in 2020)

## 14. Do's and Don'ts

**Do**
- Anchor the brand on a single red-orange (`#ff3008`) for the wordmark, every primary CTA, ratings, favorites, focus ring
- Use DoorDash Sans with `ss01` enabled on display headlines — the stylistic set is the typographic signature
- Put the address input as the hero — 56px pill, the largest interactive element on the homepage
- Use 9999px pill CTAs at 48px height with 16/700 white text on red-orange (bold, not semibold)
- Use lifestyle 16:9 food photography with `object-fit: cover` on store cards
- Render star ratings in red-orange — never yellow or gold
- Use deep-red (`#8a1d05`) on soft-red (`#fff0ec`) for Bestseller / "#1 Most Liked" tags
- Use the dark DashPass band exactly once per page — don't dilute the chromatic rupture
- Use "Free delivery" inline green (`#00854c`) — it's the only non-red colour with conversion weight
- Use tabular numerals on every price, fee, ETA, distance

**Don't**
- Don't introduce a second brand colour — red-orange is the only true brand fill
- Don't demote the address input below the masthead — it's the funnel's north star
- Don't use cool greys — every neutral has a faint warmth (`#191919` over `#000000`)
- Don't use yellow or gold for star ratings — red-orange `#ff3008` always
- Don't use atmospheric multi-layer shadows — DoorDash stays single-layer flat
- Don't use exclamation marks gratuitously — the voice is urgent but never giddy
- Don't put button CTAs at 600 (semibold) — DoorDash uses 700 (bold) for max conversion legibility
- Don't say "Submit" or "Click here" — every CTA names the outcome (Find Food, Add to cart)
- Don't use multiple dark bands — DashPass is the only dark moment
- Don't replace `tnum` on prices — alignment matters for cart-total scanning

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #ffffff
Page Floor:    #fafafa
Ink:           #191919
Red-Orange:    #ff3008
Brand Hover:   #e02c08
Brand Active:  #bf2306
Brand Deep:    #8a1d05
Brand Light:   #fff0ec
Surface Warm:  #fff7f5
Border:        #e8e8e8
Muted:         #5d5d5d
Free Delivery: #00854c
DashPass Bg:   #191919
DashPass Yellow: #ffd400
```

### Example Component Prompts

- "Create a DoorDash-style Find Food button: a 48px-tall pill (9999px radius) with red-orange (`#ff3008`) fill, white text in DoorDash Sans 16/700, 14×24px padding. Hover deepens to `#e02c08`. Active to `#bf2306`."
- "Build a DoorDash homepage hero: full-width white canvas with the DoorDash Sans Display 56/700 headline 'Get the food you want delivered' with -1.5px tracking and `ss01` enabled, body sub-copy in 18/400 ink, then a 56px-tall pill address input on soft-grey (`#f5f5f5`) ground with a red-orange map-pin prefix and placeholder 'Enter delivery address', flanked by a flush-right red-orange 'Find Food' pill CTA."
- "Design a DoorDash store card: white surface, 8px radius, 16:9 hero with `object-fit: cover` (lifestyle food photo), heart icon top-right (default outline ink, fills `#ff3008` when favorited), DashPass logo bottom-right of image when applicable, restaurant name in 16/700 ink, single red-orange star + '4.7' + '(2,847)' review count in 14/600 ink, '20–30 min' delivery time in 14/400 ink, '$2.99 delivery fee' in 14/400 muted (or green '#00854c' 'Free delivery' when applicable)."
- "Build a Bestseller badge: soft-red (`#fff0ec`) surface, deep-red (`#8a1d05`) text in DoorDash Sans 12/700, 4px radius, 2×8px padding. Text reads '#1 Most Liked' or 'Bestseller'."
- "Create a DashPass band: full-width dark (`#191919`) ground, 64px vertical padding. DashPass wordmark in yellow (`#ffd400`) DoorDash Sans Display 32/800 with the dotted-D, white body copy in 18/400 ('Free delivery on orders over $12 from thousands of restaurants'), and a white pill CTA with red-orange text in 16/700 ('Try DashPass free for 30 days')."
- "Design a DoorDash item card on a store PDP: white surface, 8px radius, 1px `#ebebeb` border, 12px padding, two-column layout. Left: item name in 16/600 ink, 2-line description in 14/400 muted, price in 16/600 ink with `tnum`. Right: 64×64 square photo with 8px radius and `object-fit: cover`. Optional Bestseller tag above the name. On hover, 4px shadow lift + photo scales 1.03."

### Iteration Guide

1. **Start with white and ink.** If your page has cool greys or pure black, it isn't DoorDash. Warm-white canvas + warm ink (`#191919`) is the foundation.
2. **One brand colour.** Red-orange (`#ff3008`) for everything brand. No secondary. The discipline is the brand.
3. **DoorDash Sans with `ss01` on display.** The stylistic set is the typographic signature — without it, headlines read as generic geometric sans.
4. **Address input as hero.** If your page leads with a search bar instead of an address input, it isn't DoorDash. The 56px pill address-capture is the funnel's gravitational centre.
5. **Pill CTAs at 48px / 16/700 (bold).** 9999px radius, bold weight, 14×24px padding. No exceptions.
6. **Star ratings in red-orange.** Yellow or gold reads as Amazon. Red-orange `#ff3008` is DoorDash.
7. **Use DashPass dark band exactly once.** It's the only chromatic rupture — diluting it weakens the spotlight.
8. **`object-fit: cover` on every food photo.** DoorDash leans into lifestyle imagery, not white-seamless catalog shots.
