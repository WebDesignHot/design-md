---
name: Grubhub
tagline: Friendly red-orange CTA, Sentinel display + Avenir body, dense delivery-app commerce — the long-running incumbent.
updated_at: 2026-05-05T19:20:38+12:00
published_at: 2026-05-04T19:57:58+12:00
author: webdesignhot
source_url: https://grubhub.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [marketplace]
tags: [light, marketplace, sans, serif-display, red-orange, delivery, food, dense]
preview_swatch: ['#ffffff', '#f44129', '#1a1a1a']
related: [doordash, uber-eats]
description: 'Grubhub is the long-running incumbent of US food delivery, and its storefront reads as such — a near-white canvas (`#ffffff`) anchored on warm ink (`#1a1a1a`), accented by the brand''s signature **friendlier red-orange** (`#f44129`) — slightly cooler and warmer than DoorDash''s `#ff3008`, more conversational than Uber Eats''s pure black. Where DoorDash and Uber Eats lean into their respective monochromatic disciplines, Grubhub takes a different path: a **serif display** (Sentinel by Hoefler & Co) on hero headlines paired with **Avenir** humanist sans for body, giving the brand a slightly editorial, slightly mid-century-diner feel. The chrome is denser than peers — more visible category navigation, more cuisine filters at the masthead, more inline restaurant metadata. Cards round at 8px, CTAs are pill (9999px) at 48px height, and the entire surface is engineered around restaurant discovery rather than address-first conversion. The result is the most "diner-coded" food-delivery site on the web — the closest thing to browsing a paper takeout-menu directory in 2025.'

colors:
  bg: '#ffffff'                  # default canvas
  bg-page: '#fafafa'             # off-white page floor on certain bands
  surface: '#ffffff'
  surface-soft: '#f5f5f5'        # disabled fields, alt row
  surface-strong: '#e8e8e8'      # divider band
  surface-warm: '#fff3ef'        # warm red-orange tint on promo bands
  surface-cream: '#fff7ec'       # warm cream on editorial moments (Grubhub+ landing, About)
  brand: '#f44129'               # Grubhub friendlier red-orange — the wordmark and CTA colour
  brand-hover: '#d93619'         # darker red on hover
  brand-active: '#b62c12'        # pressed state
  brand-pale: '#fcc8be'          # disabled CTA tint
  brand-deep: '#7a1c0a'          # deepest red for accent moments (rare)
  brand-light: '#ffece8'         # softest red tint for promo surfaces
  text: '#1a1a1a'                # primary ink — warm near-black
  text-strong: '#0d0d0d'         # heading ink at maximum punch
  text-muted: '#5a5a5a'          # secondary metadata
  text-soft: '#757575'           # caption text, store metadata
  text-on-brand: '#ffffff'       # white on red-orange CTA
  text-disabled: '#a8a8a8'
  link: '#1a1a1a'                # default link inherits ink (underlined)
  link-hover: '#f44129'          # link hover flips to brand red
  border: '#e5e5e5'              # default 1px hairline
  border-soft: '#f0f0f0'         # editorial dividers
  border-strong: '#cccccc'       # focus state hairline
  border-input: '#999999'        # form input outline
  border-card: '#e5e5e5'         # store card hairline (Grubhub uses subtle borders, unlike Uber Eats)
  star-fill: '#f44129'           # star rating fill matches brand
  star-empty: '#dcdcdc'          # empty star
  grubhub-plus-yellow: '#ffd700' # Grubhub+ premium gold accent (rare)
  grubhub-plus-bg: '#1a1a1a'     # Grubhub+ band on dark
  free-delivery-green: '#0d8043' # "Free delivery" green badge
  pickup-blue: '#1a73e8'         # "Pickup" tab accent (rare)
  bestseller-bg: '#ffece8'       # "Most popular" tag bg (soft red)
  bestseller-text: '#7a1c0a'     # "Most popular" tag text (deep red)
  trending-bg: '#fff7ec'         # "Trending" tag bg (soft cream)
  trending-text: '#7a5400'       # "Trending" tag text
  cuisine-tag-bg: '#f5f5f5'      # neutral cuisine-filter chip background
  scrim: 'rgba(0,0,0,0.5)'       # modal backdrop
  shadow-card: 'rgba(0,0,0,0.08)'
  shadow-elev: 'rgba(0,0,0,0.16)'
  shadow-deep: 'rgba(0,0,0,0.24)' # bottom-sheet on mobile
  success: '#0d8043'             # in-stock green
  success-soft: '#e6f4ec'
  warning: '#a35316'             # advisory amber-brown
  warning-soft: '#fff7e6'
  danger: '#c91515'              # validation error red — distinct from brand
  danger-soft: '#fdeaea'
  info: '#1a73e8'
  info-soft: '#e8efff'

typography:
  display:
    family: '"Sentinel", "Georgia", "Times New Roman", serif'
    weights: [400, 500, 700, 800]
    opentype-features: ['tnum', 'liga']
  body:
    family: '"Avenir Next", "Avenir", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: 'Menlo, Monaco, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    hero-display:    { size: 56, weight: 800, lineHeight: 1.05, tracking: '-1px',     family: display, opentype: ['liga', 'tnum'] }
    page-title:      { size: 40, weight: 700, lineHeight: 1.1,  tracking: '-0.5px',   family: display, opentype: ['liga'] }
    section-head:    { size: 28, weight: 700, lineHeight: 1.2,  tracking: '-0.25px',  family: display }
    sub-section:     { size: 22, weight: 700, lineHeight: 1.25, tracking: '0',        family: body }
    store-name:      { size: 18, weight: 700, lineHeight: 1.33, tracking: '0',        family: body }
    store-name-grid: { size: 16, weight: 700, lineHeight: 1.25, tracking: '0',        family: body }
    item-name:       { size: 16, weight: 600, lineHeight: 1.25, tracking: '0',        family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',        family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.38, tracking: '0',        family: body }
    micro:           { size: 11, weight: 500, lineHeight: 1.27, tracking: '0.04em',   family: body }
    price-display:   { size: 22, weight: 700, lineHeight: 1.0,  tracking: '-0.25px',  family: body, opentype: ['tnum'] }
    price-item:      { size: 16, weight: 600, lineHeight: 1.0,  tracking: '0',        family: body, opentype: ['tnum'] }
    button-cta:      { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0',        family: body }
    button-sm:       { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0',        family: body }
    nav-link:        { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0',        family: body }
    cuisine-chip:    { size: 13, weight: 600, lineHeight: 1.0,  tracking: '0',        family: body }
    tag-label:       { size: 12, weight: 700, lineHeight: 1.0,  tracking: '0.02em',   family: body }
    badge:           { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.06em',   family: body, transform: uppercase }

radius:
  micro: 2
  sm: 4
  md: 8        # default cards
  lg: 12
  xl: 16
  xxl: 24
  pill: 9999   # CTAs, search bar, cuisine chips — Grubhub's signature pill

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 76
  masthead-height: 64
  sub-nav-height: 56
  cuisine-nav-height: 56

components:
  button-cta:
    bg: '#f44129'
    color: '#ffffff'
    radius: 9999
    padding: '14px 24px'
    height: 48
    font: button-cta
    use: 'Order Now, Sign In, Add to bag, Continue, Place order — every primary action.'
  button-cta-hover:
    bg: '#d93619'
    color: '#ffffff'
    radius: 9999
    use: 'Hover state — deeper red.'
  button-secondary:
    bg: '#ffffff'
    color: '#1a1a1a'
    border: '1px solid #1a1a1a'
    radius: 9999
    padding: '13px 23px'
    height: 48
    use: 'Cancel, Save, inverse CTAs.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#f44129'
    use: '"Show more" links — underlined on hover.'
  button-icon-circle:
    bg: '#ffffff'
    color: '#1a1a1a'
    radius: 9999
    border: '1px solid #e5e5e5'
    height: 40
    width: 40
    use: 'Heart favorite, share button on store cards.'
  store-card:
    bg: '#ffffff'
    color: '#1a1a1a'
    radius: 8
    padding: '0 0 12px 0'
    border: '1px solid #e5e5e5'
    use: 'Restaurant tile — 16:9 hero, restaurant name + cuisine + rating + delivery time + fee stacked beneath. Subtle 1px border (Grubhub uses these where Uber Eats does not).'
  item-card:
    bg: '#ffffff'
    color: '#1a1a1a'
    radius: 8
    padding: '12px'
    border: '1px solid #e5e5e5'
    use: 'Menu item card on PDP — name + price + description + 80px square photo.'
  search-bar:
    bg: '#ffffff'
    color: '#1a1a1a'
    radius: 9999
    height: 48
    border: '1px solid #cccccc'
    focus-ring: '2px solid #f44129'
    use: 'Masthead pill search.'
  address-input:
    bg: '#ffffff'
    color: '#1a1a1a'
    radius: 9999
    height: 48
    border: '1px solid #cccccc'
    focus-ring: '2px solid #f44129'
    use: 'Masthead address pill — Grubhub keeps this in the masthead alongside the search bar (similar to Uber Eats).'
  text-input:
    bg: '#ffffff'
    color: '#1a1a1a'
    radius: 8
    height: 48
    padding: '12px 14px'
    border: '1px solid #999999'
    focus: '2px solid #f44129'
    use: 'Form input — 8px radius (utility tier).'
  star-rating:
    color-fill: '#f44129'
    color-empty: '#dcdcdc'
    use: 'Five-star rating — friendlier red fill, grey empty. Grubhub renders single-star + numeric ("4.7") on grid tiles.'
  cuisine-chip:
    bg: '#f5f5f5'
    color: '#1a1a1a'
    radius: 9999
    padding: '8px 16px'
    height: 36
    use: 'Pill cuisine filter — "Pizza", "Chinese", "Mexican", "Healthy". Selected state flips to red-orange ground with white text.'
  cuisine-chip-selected:
    bg: '#f44129'
    color: '#ffffff'
    radius: 9999
    use: 'Selected cuisine filter — red-orange ground, white text.'
  bestseller-tag:
    bg: '#ffece8'
    color: '#7a1c0a'
    radius: 4
    padding: '2px 8px'
    use: '"Most popular", "Top rated" badges on menu items.'
  free-delivery-tag:
    bg: 'transparent'
    color: '#0d8043'
    use: 'Inline green text — no surface, no border.'
  grubhub-plus-band:
    bg: '#1a1a1a'
    color: '#ffffff'
    accent: '#ffd700'
    radius: 0
    padding: '48px 0'
    use: 'Dark Grubhub+ premium subscription band — yellow accent.'
  hero-promo:
    bg: '#fff3ef'
    color: '#1a1a1a'
    radius: 16
    padding: '48px 64px'
    use: 'Soft red-tinted promo band — red-orange CTA pill anchored bottom-left.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  cta-press: 'CTA bg deepens f44129 → b62c12 over 150ms on :active'
  card-hover: 'image scales 1.0 → 1.03 inside its rounded clip + caption translateY +2 → 0 over 240ms'
  cuisine-chip-select: 'pill ground flips f5f5f5 → f44129 + text 1a1a1a → ffffff over 200ms standard'
  reduced-motion: 'respects prefers-reduced-motion: reduce — image scale and slide motion suppressed; colour transitions remain.'

breakpoints:
  mobile: 600
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  ambient: 'none — Grubhub stays mostly flat'
  hover-card: 'rgba(0,0,0,0.08) 0 4px 12px'
  modal: 'rgba(0,0,0,0.16) 0 8px 24px'
  bottom-sheet: 'rgba(0,0,0,0.24) 0 -4px 16px'
  ring: '0 0 0 2px #f44129'

accessibility:
  contrast-text-on-bg: 16.8          # #1a1a1a on #ffffff — AAA
  contrast-text-on-cta: 4.5          # #ffffff on #f44129 — AA at body sizes
  contrast-link-hover: 4.5           # #f44129 on #ffffff — AA at body sizes
  contrast-muted-on-bg: 7.2          # #5a5a5a on #ffffff — AAA
  focus-ring: '2px solid #f44129 + 2px outline offset (red-orange ring)'
  reduced-motion-honored: true
  touch-target-min: 48
  keyboard-nav: 'Tab moves masthead → address → search → cuisine chips → main grid → footer; arrow keys inside autocomplete.'

dark-mode: null   # Light-only on the public web. The Grubhub mobile app respects system dark mode.
---

## 1. Visual Theme & Atmosphere

Grubhub is the long-running incumbent of US food delivery, and its storefront reads as such — denser than DoorDash, warmer than Uber Eats, and more inflected with a slight editorial / mid-century-diner sensibility than either. The base canvas is white (`#ffffff`) with an off-white (`#fafafa`) page-floor accent, anchored on warm ink (`#1a1a1a`) and accented by the brand's signature **friendlier red-orange** (`#f44129`) — slightly cooler and warmer than DoorDash's `#ff3008`, more conversational than Uber Eats's pure black.

Where DoorDash and Uber Eats lean into their respective monochromatic disciplines, Grubhub takes a different path: a **serif display** (Sentinel by Hoefler & Co) on hero headlines paired with **Avenir** humanist sans for body, giving the brand a slightly editorial, slightly mid-century-diner feel. The Sentinel display is the most distinctive typographic signature in food delivery — no other major delivery app uses a serif at scale. The choice traces back to Grubhub's 2018 brand refresh, which positioned the brand as "the friendly neighborhood diner of the internet."

The chromatic identity is monochromatic plus one accent — **friendly red-orange on warm white**. The friendlier red (`#f44129`) reads slightly cooler than DoorDash's `#ff3008` because of its slightly higher blue channel — it's less "fast-food urgency" and more "welcome-to-the-diner warmth." Where Grubhub red appears it carries weight; where it's absent the page reads as a paper-takeout-menu directory.

Shape language is fully-pill for CTAs (9999px) and softly rounded for cards (8px). Buttons are 48px tall, the search bar is a 48px pill, the address pill mirrors. Cards round at 8px and carry **subtle 1px hairline borders** — a critical difference from Uber Eats's borderless cards. Grubhub uses the borders to give the dense layout structure; without them the page would feel like a soup of imagery.

The **sub-nav cuisine-chip rail** is Grubhub's distinctive layout chrome. Beneath the masthead sits a horizontally-scrolling row of pill chips: "Pizza", "Chinese", "Mexican", "Healthy", "Sushi", "Burgers", "Thai", "Indian", "Vietnamese", "Mediterranean". Selected chips flip from soft-grey ground to red-orange ground with white text. Where DoorDash uses category tiles and Uber Eats uses smaller square photos, Grubhub uses pill text-chips — denser, faster to scan, more diner-menu-coded.

**Key Characteristics:**
- Single brand colour: friendlier red-orange (`#f44129`) for the wordmark, every primary CTA, ratings, focus ring
- Sentinel serif display on hero headlines + Avenir humanist sans for body — the only major food-delivery brand using a serif display
- Cuisine-chip pill rail beneath the masthead — denser navigation than peers
- Subtle 1px hairline borders on store cards — gives the dense layout structure
- Pill CTAs at 9999px / 48px height, 16/700 white text on red-orange (bold, like DoorDash)
- Star ratings render in friendlier red — never yellow or gold
- Bestseller tags use deep-red (`#7a1c0a`) on soft-red (`#ffece8`) surfaces
- Dark Grubhub+ band (`#1a1a1a` ground, gold `#ffd700` accent) — the only dark moment
- Slightly denser store-grid than peers (4-up at desktop with tighter gutters)
- "Free delivery" callouts in deeper green (`#0d8043`) — slightly cooler than DoorDash's `#00854c`

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): default page floor, every store tile, every form surface
- **Page Floor Off-white** (`#fafafa`): the slightly off-white backing on category-listing bands and footer top
- **Ink** (`#1a1a1a`): primary text colour — warm near-black with slight cool undertone
- **Heading Ink** (`#0d0d0d`): used on hero display copy where Grubhub wants maximum chromatic punch

### Brand
- **Grubhub Red** (`#f44129`): the wordmark, primary CTA, rating-star fill, focus ring — the single brand voltage. The friendlier red — less fast-food urgent than DoorDash's `#ff3008`, more conversational
- **Brand Hover** (`#d93619`): deeper red on hover
- **Brand Active** (`#b62c12`): pressed state
- **Brand Pale** (`#fcc8be`): disabled CTA tint
- **Brand Deep** (`#7a1c0a`): deepest red for Bestseller / "Most popular" tag text
- **Brand Light** (`#ffece8`): softest red tint for promo surfaces and tag backgrounds
- **Surface Warm** (`#fff3ef`): faint red-tinted ground on hero promo bands

### Accent
- **Grubhub+ Yellow** (`#ffd700`): the premium subscription accent — used inside the dark Grubhub+ band as a wordmark accent
- **Free Delivery Green** (`#0d8043`): inline "Free delivery" callouts — deeper / slightly cooler than DoorDash's `#00854c`

### Interactive
- **Link** (`#1a1a1a`): default inline link in body — ink with underline (Grubhub keeps links neutral, only flipping on hover)
- **Link Hover** (`#f44129`): link hover flips from ink to brand red
- **Visited** (`#5e2a8c`): purple visited-link state
- **Disabled** (`#a8a8a8`): disabled text and outline
- **Selected** (`#f44129`): selected radio / checkbox / cuisine-chip fill

### Neutral Scale
- **Ink** (`#1a1a1a`) — primary text
- **Heading** (`#0d0d0d`) — hero display copy
- **Muted** (`#5a5a5a`) — secondary metadata
- **Soft** (`#757575`) — caption text, faint counts
- **Disabled** (`#a8a8a8`) — disabled state text
- **Border** (`#e5e5e5`) — default 1px hairline (slightly stronger than Uber Eats's `#eeeeee`)
- **Border Soft** (`#f0f0f0`) — editorial dividers
- **Border Card** (`#e5e5e5`) — store card hairline (visible at rest, distinguishing Grubhub from Uber Eats)
- **Border Strong** (`#cccccc`) — focus state hairline on inputs
- **Border Input** (`#999999`) — default form-input outline

### Surface & Borders
- **Canvas** (`#ffffff`) — default
- **Soft** (`#f5f5f5`) — disabled fields, alternate row, cuisine-chip ground
- **Strong** (`#e8e8e8`) — divider band between major sections
- **Warm** (`#fff3ef`) — faint red-tinted ground on hero promo bands
- **Brand Light** (`#ffece8`) — Bestseller / Most popular tag surfaces
- **Cream** (`#fff7ec`) — editorial moments (Grubhub+ landing, About pages, Trending tags)

### Shadow Colors
Grubhub stays mostly flat. Hover-card shadow is single-layer neutral grey at 8% — same intensity as DoorDash. The brand position: warmth comes from the cuisine-chip density and the Sentinel display, not from atmospheric shadows.

- `rgba(0,0,0,0.08) 0 4px 12px` — hover-card lift
- `rgba(0,0,0,0.16) 0 8px 24px` — modal drop
- `rgba(0,0,0,0.24) 0 -4px 16px` — bottom-sheet on mobile (cart drawer)

### Semantic
- **Success Green** (`#0d8043`): "Free delivery", "Order placed", success states — deeper / cooler green than DoorDash, reads more diner-grocer than tech-startup
- **Warning Brown** (`#a35316`): advisory banners — warm brown rather than amber to match the warm palette
- **Danger Red** (`#c91515`): validation error red — distinct from brand red (Grubhub uses a colder red for errors)
- **Info Blue** (`#1a73e8`): informational banners and pickup-tab accent — used sparingly

## 3. Typography Rules

### Font Family

**Display Primary**: `Sentinel` — Hoefler & Co's slab-serif display (released 2009), used on hero headlines and section heads. Sentinel is one of the most popular high-quality slab-serifs of the 2010s, with subtly modulated stroke weight and elegant ball terminals. Its choice for Grubhub is the brand's most distinctive typographic decision — no other major food-delivery app uses a serif display.

**Body Primary**: `Avenir Next` — Adrian Frutiger's geometric humanist sans (1988, with the Next variant by Akira Kobayashi in 2004). Avenir's slightly humanist character (open apertures, generous counters, friendly geometric shapes) gives Grubhub's body type a warmer feel than Helvetica or Inter would.

Fallback chain: `"Georgia", "Times New Roman", serif` for display; `"Helvetica Neue", Helvetica, Arial, sans-serif` for body.

**Mono**: not part of the storefront brand system.

**OpenType features**: `tnum` is enabled on prices, ratings, ETAs, fees, and distances. `liga` is enabled on display headlines (Sentinel's optional ligatures activate for `ff`, `fi`, `fl`).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | Sentinel | 56 | 800 | 1.05 | -1px | liga, tnum | Hero "Order in. Eat well." — Sentinel ExtraBold |
| page-title | Sentinel | 40 | 700 | 1.1 | -0.5px | liga | Category page H1 — Sentinel Bold |
| section-head | Sentinel | 28 | 700 | 1.2 | -0.25px | liga | "Top rated", "Featured" |
| sub-section | Avenir Next | 22 | 700 | 1.25 | 0 | — | PDP sub-section heads — flips to Avenir for utility |
| store-name | Avenir Next | 18 | 700 | 1.33 | 0 | — | Restaurant name on PDP |
| store-name-grid | Avenir Next | 16 | 700 | 1.25 | 0 | — | Restaurant name on grid tiles |
| item-name | Avenir Next | 16 | 600 | 1.25 | 0 | — | Menu item name |
| body-md | Avenir Next | 16 | 400 | 1.5 | 0 | — | Default body — descriptions, reviews |
| body-sm | Avenir Next | 14 | 400 | 1.43 | 0 | — | Secondary metadata, "20–30 min", "$2.99 delivery fee" |
| caption | Avenir Next | 13 | 400 | 1.38 | 0 | — | Footer micro-text |
| micro | Avenir Next | 11 | 500 | 1.27 | 0.04em | — | Footer legal — slight tracking for legibility |
| price-display | Avenir Next | 22 | 700 | 1.0 | -0.25px | tnum | PDP main price, cart subtotal |
| price-item | Avenir Next | 16 | 600 | 1.0 | 0 | tnum | Menu item price |
| button-cta | Avenir Next | 16 | 700 | 1.0 | 0 | — | Primary CTA labels — bold |
| button-sm | Avenir Next | 14 | 700 | 1.0 | 0 | — | Compact CTAs in cart drawer |
| nav-link | Avenir Next | 14 | 600 | 1.0 | 0 | — | Masthead utilities |
| cuisine-chip | Avenir Next | 13 | 600 | 1.0 | 0 | — | Cuisine-chip text |
| tag-label | Avenir Next | 12 | 700 | 1.0 | 0.02em | — | Most popular tag text |
| badge | Avenir Next | 11 | 700 | 1.0 | 0.06em | — | Uppercase micro-tags |

### Principles

- **Sentinel display + Avenir body — never reverse.** The serif display signals editorial warmth; the sans body signals utility. Mixing the two reverses the brand voice.
- **Sentinel ExtraBold (800) on hero only.** Section heads use Bold (700). The hero ExtraBold is the typographic signature.
- **Negative tracking on display.** Hero -1px, page-title -0.5px — Sentinel needs the tightening at large sizes.
- **Avenir Next on body for warm humanism.** Inter or Helvetica would read colder; Avenir's slight humanism is critical.
- **Button CTAs at 700 (bold).** Like DoorDash, Grubhub leans bold for max conversion legibility.
- **Tabular numerals on every price, fee, ETA, distance.** `tnum` everywhere numerical.
- **The serif/sans pairing is the diner-coded signature.** Without it, Grubhub reads as generic delivery-app — interchangeable with DoorDash or Uber Eats.

## 4. Component Stylings

### Buttons

**`button-cta`** — friendlier red-orange (`#f44129`) fill, white text in 16/700, 9999px pill, 14×24px padding, 48px height. The most common CTA: "Order Now", "Sign In", "Add to bag", "Continue", "Place order". Hover deepens to `#d93619`. Active to `#b62c12`. Note the Grubhub vocabulary: "Add to bag" instead of DoorDash's "Add to cart" — a slight diner-coded inflection.

**`button-secondary`** — white fill, 1px ink (`#1a1a1a`) outline, ink text in 16/700. Same pill, same 48px height. Used for "Cancel", "Save", inverse CTAs.

**`button-tertiary-text`** — plain red-orange (`#f44129`) text, no surface. Underlined on hover; deepens to `#b62c12`.

**`button-icon-circle`** — small (40×40) circular icon button, white fill, 1px hairline border, ink heart icon. When favorited, the heart fills with red-orange.

**`button-disabled`** — `#fcc8be` fill (brand-pale), white text. Stays brand-coded even disabled.

### Cards

**`store-card`** — restaurant tile. White surface, 8px radius, **subtle 1px `#e5e5e5` border at rest** (the distinguishing feature vs Uber Eats's borderless cards), no internal padding around the image (16:9 hero fills to the rounded edge), 12px bottom padding for metadata. Stack: 16:9 lifestyle hero with `object-fit: cover` (food photo or storefront), heart icon top-right (default outline ink, fills red-orange when favorited), Grubhub+ pill bottom-right of image (when applicable), restaurant name in 16/700 ink, **cuisine type in 13/400 muted** ("Pizza · American", "Thai · Asian"), single red star + rating + review count in 14/600 ink, delivery time in 14/400 ink ("20–30 min"), delivery fee in 14/400 muted ("$2.99 delivery fee" or green "Free delivery"). Note Grubhub's extra cuisine-type metadata line — DoorDash and Uber Eats omit this.

**`item-card`** — menu item card on store PDP. White surface, 8px radius, 1px hairline border, 12px padding. Two-column layout: text left (item name in 16/600 ink, 2-line description in 14/400 muted, price in 16/600 ink), 80×80px square photo right with 8px radius and `object-fit: cover`. On hover the whole card lifts (4px shadow) and the photo scales 1.03.

**`pdp-cart-summary`** — sticky right-rail card on store PDP. White, 8px radius, 1px hairline border, hover-card shadow, 24px padding. Stack: large `price-display` for cart subtotal, item count, free-delivery progress bar (when applicable), full-width red-orange "Checkout" pill, "Add $5 more for free delivery" hint copy, ETA estimate.

**`hero-promo`** — soft-red (`#fff3ef`) ground, ink Sentinel display headline in 56/800 with -1px tracking, body sub-copy in 18/400 Avenir, red-orange pill CTA anchored bottom-left. 16–24px radius. The page's largest typographic moment.

**`category-tile`** — square photo with a single-line ink title beneath in Avenir 14/600. No CTA — used in homepage category navigation, but Grubhub uses these less than peers because the cuisine-chip rail covers the same job.

**`grubhub-plus-band`** — full-width dark (`#1a1a1a`) band, 48–64px vertical padding. Gold (`#ffd700`) Grubhub+ wordmark in Sentinel 32/700, white body copy in Avenir 18/400, white pill CTA with red text — the colour stack inverts here.

### Badges, Tags, Pills

**`bestseller-tag`** — soft-red (`#ffece8`) surface, deep-red (`#7a1c0a`) text in 12/700, 4px radius, 2×8px padding. "Most popular", "Top rated", "Customer favorite". Sits inline with menu items.

**`trending-tag`** — soft-cream (`#fff7ec`) surface, dark-cream (`#7a5400`) text. "Trending" or "New".

**`free-delivery-tag`** — inline green (`#0d8043`) text in 14/400. No surface, no border — sits inline with the delivery-fee line.

**`grubhub-plus-tag`** — small gold-on-dark pill. Indicates a store eligible for Grubhub+ free-delivery.

**`promo-tag`** — red-orange text on soft-red surface, "Up to 50% off". Sits as a corner ribbon on store cards during active promos.

**`cuisine-chip`** — pill cuisine filter. Soft-grey (`#f5f5f5`) ground at rest, ink text in 13/600, 9999px pill, 36px height. Selected state flips to red-orange (`#f44129`) ground with white text. Hover lifts soft-grey to slightly darker. **The cuisine-chip rail is Grubhub's distinctive layout chrome.**

### Inputs / Forms

**`address-input`** — masthead-resident pill (similar to Uber Eats). White ground, 1px `#cccccc` hairline, 9999px pill, 48px height, 14×20px padding. Pin-icon prefix (red-orange map pin), placeholder "Enter delivery address" in 14/400 muted. On focus, 2px red-orange ring fades in.

**`text-input`** — white surface, 1px `#999999` hairline, 8px radius, 48px height, 12×14px padding. Stacked label above in 13/400 muted. On focus the border thickens to 2px red-orange.

**`search-bar`** — masthead pill search. White fill, 9999px radius, 48px height, 1px `#cccccc` hairline. Single text input with magnifier-glass prefix.

### Navigation

**`masthead`** — full-width white bar with a thin 1px `#e5e5e5` bottom border, 76px height. Grubhub wordmark flush left in red-orange (Sentinel 28/800 with the recognizable lowercase letterforms). Address input + search bar centred. "Sign in" / "Sign up" / cart utilities flush right with thin 14/600 ink labels.

**`cuisine-nav`** — Grubhub's distinctive layout chrome. Slim 56px band beneath the masthead, white fill, 1px hairline bottom, horizontally-scrolling row of pill cuisine chips. "Pizza · Chinese · Mexican · Healthy · Sushi · Burgers · Thai · Indian · Vietnamese · Mediterranean". Selected chip flips to red-orange ground with white text.

**`sub-nav`** — when present (PDP, account pages): slim 48px band beneath the masthead, white fill, 1px hairline bottom, horizontal scroll for sub-page tabs.

**`category-nav`** — homepage horizontal scroll of round category tiles (used less than peers; cuisine-chip rail covers the same job).

**`breadcrumb`** — `text-muted` (`#5a5a5a`) with `›` separators, 13/400.

### Star Rating

**`star-rating`** — single-icon row with numeric. Cards typically render a single red-orange star + "4.7" + "(2,847)" review count, all in 14/600 ink. PDPs sometimes render the full 5-star spread in red-orange fill, `#dcdcdc` empty.

### Modals & Toasts

**`modal`** — centred dialog over a 50%-opacity ink scrim. White surface, 12px radius, 1px hairline border, modal shadow. Close X anchored top-right.

**`bottom-sheet`** — mobile-first cart drawer. White surface, 16px top-radius (corners only), full-width, slides up from bottom with a 4px deep shadow above. Contains cart items + subtotal + red-orange "Checkout" pill.

**`toast`** — bottom-centre notifications. Dark (`#1a1a1a`) fill, 8px radius, white text, 16×24px padding.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`
- Section padding (vertical): **64–96px** between major bands; **128px** on the homepage hero band
- Card internal padding: **0** around the store-card image, **12px** below for metadata; **12px** for item-cards; **24px** for PDP cart-summary
- Gutters: **16px** between store tiles in grid view; **16px** between item-cards on PDP; **96–128px** between major page bands

### Grid & Container

- Max content width: **1280px** centred
- Homepage: address+search masthead, then cuisine-chip rail, then store grid 4-up, then editorial bands
- Search results: **4-column** store grid at desktop with 16px gutters; 3-up at tablet; 2-up at mobile
- Store PDP: 2-column with menu list left (~64%), sticky cart-summary right (~32%); menu list groups items by category section
- Footer: 5-column link list at desktop with off-white ground

### Whitespace Philosophy

Grubhub is denser than Uber Eats but airier than Amazon — store grids run 4 across with 16px gutters, the cuisine-chip rail tightens the visual cadence near the masthead, and editorial bands get 64–96px breath. The visual rhythm is **address+search masthead → cuisine-chip rail → moderately-dense store grid → editorial band → footer** — denser than Uber Eats's homepage by virtue of the cuisine-chip rail.

### Section Cadence

Grubhub alternates between **white bands** (default body, store grids, store PDPs) and a single **dark Grubhub+ band** (`#1a1a1a` ground with gold accent). The dark band is the only chromatic rupture in the otherwise white-and-red-orange palette.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Dense table corners |
| Small | 4px | Most popular / Trending tags, micro-badges |
| Card | 8px | Store tiles, item cards, dropdowns, text inputs |
| Featured | 12px | Modal containers |
| Hero | 16px | Hero promo bands, bottom-sheet (top corners only) |
| XXL | 24px | Editorial moments, larger feature cards |
| Pill | 9999px | CTAs, search bar, address input, cuisine chips, favorite icon button |

There are no compound radii in mainline UI **except** the bottom-sheet on mobile (`16px 16px 0 0`). Form text-inputs at 8px match the card radius — Grubhub doesn't differentiate input vs card radius like Uber Eats does.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer, all editorial bands (~95% of surfaces) |
| 1 — Hover Card | `rgba(0,0,0,0.08) 0 4px 12px` | Store tiles on hover, item cards on hover, dropdowns |
| 2 — Modal | `rgba(0,0,0,0.16) 0 8px 24px` | Centred dialogs |
| 3 — Bottom Sheet | `rgba(0,0,0,0.24) 0 -4px 16px` | Mobile cart drawer (shadow above) |
| 4 — Scrim | `rgba(0,0,0,0.5)` | Modal backdrop |

### Shadow Philosophy

Grubhub stays mostly flat. Depth comes from **the subtle 1px hairline borders on store cards** (the distinguishing structural choice vs Uber Eats's borderless approach) and **the photographic contrast** of seller-supplied food imagery. Hover-card shadow is single-layer neutral grey — no atmospheric multi-layer composition. The brand position: density needs structure; the borders are the structure.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, bottom-sheet slide

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Hover colour swap (CTA bg deepen, cuisine chip select), focus ring fade-in |
| Standard | 240ms | Card hover lift + image scale, modal enter, cuisine-chip ground swap |
| Slow | 320ms | Hero carousel slide, bottom-sheet slide-up |

### Per-Component Recipes

- **CTA hover**: background transitions from `#f44129` to `#d93619` over 150ms.
- **CTA press**: deepens to `#b62c12` for 150ms on `:active`.
- **Cuisine-chip select**: ground transitions from `#f5f5f5` to `#f44129` + text from `#1a1a1a` to `#ffffff` over 200ms.
- **Cuisine-chip hover (unselected)**: ground darkens to `#ebebeb` over 150ms.
- **Store card hover**: image scales 1.0 → 1.03 inside its rounded clip + caption translateY(2px → 0) over 240ms.
- **Item card hover**: card lifts with a 4px shadow + photo scales 1.03 over 240ms.
- **Address autocomplete**: dropdown fades in + 4px slide-down over 200ms. Suggestion items highlight on hover with soft-red (`#ffece8`) ground.
- **Bottom-sheet slide**: cart drawer translates from `translateY(100%)` to `0` over 320ms emphasized.
- **Modal enter**: scrim fades in over 200ms, dialog translates from `translateY(8px) opacity(0)` to `0/1` over 240ms emphasized.
- **Heart favorite**: heart fills with red-orange and pulses scale 1.0 → 1.15 → 1.0 over 300ms — Grubhub uses the celebratory pulse like DoorDash.

### Page Transitions

Page-to-page navigation uses no transition — links fire a hard navigation.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Card image scale suppresses. Heart-favorite pulse becomes an instant fill swap. Modal slide degrades to opacity-only.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #1a1a1a ink on #ffffff canvas | 16.8 | AAA |
| #ffffff on #f44129 CTA | 4.5 | AA at body sizes |
| #ffffff on #d93619 CTA hover | 5.6 | AA at body sizes |
| #f44129 link hover on #ffffff | 4.5 | AA at body sizes |
| #5a5a5a muted on #ffffff | 7.2 | AAA |
| #7a1c0a deep-red on #ffece8 Most popular surface | 9.8 | AAA |
| #0d8043 free-delivery green on #ffffff | 5.4 | AA |
| #ffd700 Grubhub+ gold on #1a1a1a | 13.0 | AAA |

The white-on-Grubhub-red CTA pair sits at **4.5 — AA at body sizes**. Grubhub uses 16/700 button text (bold), pushing legibility further. The hover state crosses deeper into AA. The Grubhub+ gold-on-dark moment is the strongest contrast pair on the page.

### Focus Indicators

Focus ring is **2px solid `#f44129`** (Grubhub red) with 2px outline-offset. Buttons, inputs, cuisine chips, and links all gain the brand-red ring on `:focus-visible`.

### ARIA Patterns

- **Address input**: `role="combobox"` with `aria-expanded`, `aria-controls` linked to autocomplete listbox.
- **Search bar**: `role="search"`. Input has `aria-label="Search restaurants and cuisines"`.
- **Cuisine chip rail**: `role="tablist"` with each chip as `role="tab"`; selected chip has `aria-selected="true"`.
- **Store card**: entire tile wrapped in `<a>` with verbose `aria-label` — "Pizza Hut, American Pizza cuisine, 4.7 stars, 2,847 reviews, 20–30 minute delivery, $2.99 delivery fee, Grubhub+ eligible".
- **Favorite heart**: `aria-pressed` to communicate save state.
- **Star rating**: text-equivalent (`aria-label="4.7 out of 5 stars based on 2,847 reviews"`).
- **Most popular tag**: `aria-label="Most popular menu item"`.
- **Bottom-sheet cart drawer**: `role="dialog"` with `aria-modal="true"` and focus-trap.

### Keyboard Navigation

- Masthead: Tab moves logo → address → search → utilities → cart
- Cuisine chips: Tab to first chip, then arrow keys navigate the rail (tab semantics)
- Store grid: Tab through tiles in document order; favorite heart is its own tab stop
- Store PDP: Tab through menu sections → items → "Add to bag" → cart drawer
- Bottom-sheet: focus traps inside the dialog; Esc closes

### Screen Reader Hints

Verbose `aria-label` on store cards (cuisine type, delivery time, fee, Grubhub+ eligibility). Cuisine-chip rail announces "tab list" so screen-reader users understand the filtering pattern. Free-delivery green announces "Free delivery included".

### Reduced Motion

All transitions degrade to opacity-only. Card image scale and heart-pulse suppress. Bottom-sheet slide flattens to instant.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Masthead collapses to logo + cart + hamburger; address input drops to a tappable address pill; cuisine-chip rail still visible (horizontal scroll); store grid 1-up or 2-up; PDP cart becomes a sticky bottom-sheet |
| Tablet | 600–1024px | Full masthead with address + search; cuisine-chip rail visible; store grid 2-up or 3-up |
| Desktop | 1024–1280px | Sub-nav with cuisine chips full-width; store grid 4-up |
| Wide | 1280–1440px | Content caps at 1280px; store grid 4-up with extra side breath |

### Touch Targets

- Primary CTAs: 48px height — meets AAA
- Address input: 48px height
- Search bar: 48×48px
- Favorite heart on cards: 40×40px
- Store tile: entire 320×320px tile is tappable
- Cuisine chips: 36px height — meets AA

### Collapsing Strategy

- Masthead: utilities hide first; only logo + address pill + cart + hamburger remain at <600px
- Address input: collapses to a tappable address pill on mobile that opens a full-screen drawer
- Cuisine-chip rail: stays visible on mobile (horizontal scroll), the brand's distinctive chrome
- Store grid: 4 → 3 → 2 → 1 (single-column at very narrow widths); 16px gutters compress to 12px → 8px
- PDP: 2-column splits to single-column stack at <1024px; cart-summary becomes a sticky bottom-sheet
- Grubhub+ band: stays full-width but reduces vertical padding 64 → 48 → 32

### Image Behavior

Store-card images use `aspect-ratio: 16/9` with `object-fit: cover`. Item-card photos use `aspect-ratio: 1/1` at 80×80px. PDP main hero supports lightbox click on mobile.

### Container Queries

Used in the PDP cart-summary: when the right rail narrows below ~340px, item-quantity controls collapse to compact `+/-` chips.

## 11. Content & Voice

### Tone

Friendly, conversational, slightly diner-coded. Grubhub's voice is "the long-time neighborhood diner that knows everyone's order by heart." Headlines lead with comfort ("Order in. Eat well.", "Comfort food, comfortably delivered") rather than urgency or system-app neutrality. The brand consistently positions Grubhub as **the warmest and most familiar** of the major delivery apps — long-running, local, neighborly.

### Microcopy Patterns

- **Button verbs**: "Order Now", "Sign In", "Sign Up", "Add to bag", "Place order", "Continue" — outcome-named with diner-coded vocabulary ("bag" instead of "cart")
- **Error message recipe**: warm + apologetic — "Sorry, we couldn't process that card. Please try a different one."
- **Success confirmations**: temporal + warm — "Your order's on the way · ETA 22 min"
- **Field labels**: short and friendly — "Email", "Phone", "Apt or floor"
- **Stock urgency**: "Only 2 left" — soft urgency, no exclamation

### Empty States

Empty cart: "Your bag is empty. Browse restaurants near you to get started." — names the next action with diner vocabulary.

Empty favorites: "You haven't favorited anything yet. Tap the heart on any restaurant to save it for later."

Empty search: "No results for [query]. Try a different cuisine or check your spelling."

No address: "Enter your delivery address to see available restaurants near you."

### CTA Verb Conventions

- Primary: **"Order Now"** (homepage hero), **"Sign In"**, **"Add to bag"** (NOT "Add to cart" — Grubhub-specific vocabulary), **"Place order"**, **"Continue"**, **"Checkout"**
- Save: **"Add to favorites"** — heart-first vocabulary
- Tertiary: **"View menu"**, **"See all"**, **"Show more"**, **"View restaurant"**
- Avoided: "Submit", "Click here", "Buy now"
- Distinctive: **"Add to bag"** as the menu-add verb — Grubhub uses bag instead of cart, slight diner-coded inflection

## 12. Dark Mode & Theming

**Light-only on the public web.** Grubhub.com is light-only. The Grubhub mobile app respects system dark mode. The brand position: warmth comes from the Sentinel display + Avenir body + warm white canvas + friendlier red — inverting to dark would lose all of that.

The lone "darker surface" inside the page is the **Grubhub+ band** (`#1a1a1a` ground with gold accent), which spotlights the premium subscription rather than serving as a theme.

## 13. Lineage & Influences

Grubhub's visual lineage runs through three traditions: **mid-century American diner signage** (the friendlier red-orange, the slab-serif Sentinel display, the warm-white canvas — Grubhub's brand evokes a 1950s-coded Americana diner aesthetic, deliberate and on-strategy); **editorial magazine design** (Sentinel display + Avenir body is a classic magazine pairing — common in food magazines like Bon Appétit and Saveur); and **on-demand-delivery-app conventions** (address input, store-card grid, food photography — the genre standard).

The 2018 brand refresh paired Grubhub's existing red with the Sentinel display typeface and tightened the chromatic palette to white-cream-red-ink. The pre-2018 wordmark used a generic sans; post-2018 it sits in Sentinel ExtraBold — Grubhub leaned into the diner-coded warmth deliberately.

What Grubhub rejects: cool greys, multi-colour brand systems, system-app neutrality (Uber Eats's territory), expressive sans-serif display, exclamation-point voice, and pure-black ink. The brand position is **warm familiarity** — Grubhub wants to feel like the diner you've been ordering from for ten years, not a tech-disruptor.

**Influences:**
- Mid-century American diner signage — friendlier red-orange palette, slab-serif display
- Hoefler & Co — Sentinel typeface, [hoefler.co](https://hoefler.co)
- Adrian Frutiger / Akira Kobayashi — Avenir / Avenir Next
- Bon Appétit, Saveur — editorial magazine pairing of slab display + humanist sans body
- Seamless — Grubhub's precursor brand (merged 2013); pre-merger Seamless was the original NYC-coded delivery aesthetic
- DoorDash — share-of-voice for "fastest delivery" framing (Grubhub competes by leaning into warmth instead)

## 14. Do's and Don'ts

**Do**
- Anchor the brand on the friendlier red-orange (`#f44129`) — slightly cooler and warmer than DoorDash's `#ff3008`
- Use Sentinel ExtraBold (800) on hero display headlines + Avenir Next on body — the editorial signature
- Render the Grubhub wordmark in Sentinel — never in a sans
- Use the cuisine-chip pill rail as the distinctive layout chrome
- Use 9999px pill CTAs at 48px height with 16/700 white text on red (bold, like DoorDash)
- Use lifestyle 16:9 food photography with `object-fit: cover` on store cards
- Use subtle 1px hairline borders (`#e5e5e5`) on store cards to give density structure
- Render star ratings in friendlier red — never yellow or gold
- Use deep-red (`#7a1c0a`) on soft-red (`#ffece8`) for Most popular / Top rated tags
- Use the diner-coded "Add to bag" vocabulary instead of "Add to cart"

**Don't**
- Don't replace Sentinel with a sans display — the serif/sans pairing is the brand
- Don't use cool greys — every neutral has a faint warmth
- Don't render store cards without borders — Uber Eats's borderless approach loses the structural rhythm Grubhub needs
- Don't use yellow or gold for star ratings — friendlier red `#f44129` always
- Don't use atmospheric multi-layer shadows — Grubhub stays single-layer flat
- Don't use exclamation marks gratuitously — the voice is warm but never giddy
- Don't put button CTAs at 500 (medium) — Grubhub uses 700 for max conversion legibility
- Don't say "Add to cart" — Grubhub uses "Add to bag"
- Don't use multiple dark bands — Grubhub+ is the only dark moment
- Don't drop the cuisine-chip rail — it's the distinctive layout chrome

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #ffffff
Page Floor:    #fafafa
Ink:           #1a1a1a
Grubhub Red:   #f44129
Brand Hover:   #d93619
Brand Active:  #b62c12
Brand Deep:    #7a1c0a
Brand Light:   #ffece8
Surface Warm:  #fff3ef
Border:        #e5e5e5
Muted:         #5a5a5a
Free Delivery: #0d8043
Grubhub+ Gold: #ffd700
```

### Example Component Prompts

- "Create a Grubhub-style Order Now button: a 48px-tall pill (9999px radius) with friendlier red-orange (`#f44129`) fill, white text in Avenir Next 16/700, 14×24px padding. Hover deepens to `#d93619`. Active to `#b62c12`."
- "Build a Grubhub homepage hero: warm-white canvas with the Sentinel ExtraBold (800) headline 'Order in. Eat well.' at 56px with -1px tracking, body sub-copy in Avenir Next 18/400 ink, then a masthead-resident address pill with a red-orange map-pin and a 'Find food' red-orange pill CTA flush right."
- "Design a Grubhub cuisine-chip rail: full-width white band beneath the masthead (1px `#e5e5e5` bottom border, 56px tall), horizontally-scrolling row of pill chips. Each chip: 36px height, 9999px radius, soft-grey (`#f5f5f5`) ground at rest, ink text in Avenir Next 13/600. Selected chip: red-orange (`#f44129`) ground with white text. Chip labels: 'Pizza · Chinese · Mexican · Healthy · Sushi · Burgers · Thai · Indian · Vietnamese · Mediterranean'."
- "Design a Grubhub store card: white surface, 8px radius, **subtle 1px `#e5e5e5` border at rest** (this is the structural distinguishing feature), 16:9 hero with `object-fit: cover`, heart icon top-right (default outline ink, fills `#f44129` when favorited), Grubhub+ pill bottom-right of image when applicable, restaurant name in Avenir Next 16/700 ink, **cuisine type in 13/400 muted** ('Pizza · American'), single red-orange star + '4.7' + '(2,847)' review count in 14/600 ink, '20–30 min' delivery time in 14/400 ink, '$2.99 delivery fee' in 14/400 muted (or green '#0d8043' 'Free delivery' when applicable)."
- "Build a Grubhub Most popular tag: soft-red (`#ffece8`) surface, deep-red (`#7a1c0a`) text in Avenir Next 12/700, 4px radius, 2×8px padding. Text reads 'Most popular' or 'Top rated'."
- "Create a Grubhub+ band: full-width dark (`#1a1a1a`) ground, 64px vertical padding. Grubhub+ wordmark in gold (`#ffd700`) Sentinel 32/700, white body copy in Avenir Next 18/400 ('Free delivery on orders over $12 from thousands of restaurants'), and a white pill CTA with red-orange text in Avenir Next 16/700 ('Try Grubhub+ free for 14 days')."

### Iteration Guide

1. **Start with warm white and the friendlier red.** If your page has cool greys or a colder red (like DoorDash's `#ff3008`), it isn't Grubhub. Use `#f44129` exactly.
2. **Sentinel display + Avenir body — never reverse.** The serif/sans pairing is the brand's typographic signature. Without it, Grubhub reads as generic delivery-app.
3. **Cuisine-chip rail beneath the masthead.** The pill text-chips are Grubhub's distinctive layout chrome. Without them, the page loses identity.
4. **Subtle 1px hairline borders on store cards.** Gives the dense layout structural rhythm — don't go borderless.
5. **Pill CTAs at 48px / 16/700 (bold).** Like DoorDash, Grubhub uses bold button text.
6. **"Add to bag", not "Add to cart".** The vocabulary is diner-coded.
7. **Star ratings in friendlier red.** No yellow, no gold, no DoorDash red.
8. **Sentinel ExtraBold (800) on hero only.** Section heads use Bold (700). The hero ExtraBold is the typographic hero moment.
