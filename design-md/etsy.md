---
name: Etsy
tagline: Burnt-orange CTA, Graphik humanist sans, handcrafted-warmth aesthetic — the marketplace for makers and small batch.
updated_at: 2026-05-04T14:57:35+12:00
published_at: 2026-05-03T21:06:23+12:00
author: webdesignhot
source_url: https://www.etsy.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [marketplace]
tags: [light, marketplace, sans, warm, photographic, handcrafted, e-commerce, friendly]
preview_swatch: ['#ffffff', '#f1641e', '#222222']
related: [airbnb, shopify, target]
description: 'Etsy''s storefront is the maker-marketplace canon — a near-white canvas (`#ffffff`) anchored on warm ink (`#222222`), accented by the unmistakable **burnt-orange** (`#f1641e`) brand colour that carries every primary CTA, the wordmark, and the heart-favorite state. Type runs **Graphik**, a humanist sans by Commercial Type, at modest 500–700 weights — display 32–48px / 700, body 16/400, with carefully calibrated negative tracking on display. Cards round at 8px, CTAs are pill (9999px) at 48px height, and the entire surface is engineered to evoke handcrafted warmth: photographic product hero shots, generous breath between sections, and a wordmark that reads as a small-batch storefront sign rather than a tech-marketplace logo. The result is the only mass-marketplace site that successfully channels the small-batch maker aesthetic.'

colors:
  bg: '#ffffff'                  # default canvas
  bg-page: '#fff8f0'             # warm cream page floor on certain bands
  surface: '#ffffff'
  surface-soft: '#f6f6f6'        # disabled fields, alt row
  surface-strong: '#eeeeee'      # divider band
  surface-warm: '#fff8f0'        # warm cream surface tint — Etsy's signature warmth
  surface-orange: '#fff1ea'      # soft orange tint for promo banners
  brand: '#f1641e'               # Etsy burnt-orange — the wordmark and CTA colour
  brand-hover: '#d9591a'         # darker orange on hover
  brand-active: '#b94816'        # pressed state
  brand-pale: '#ffd7c2'          # disabled CTA tint
  brand-deep: '#7d4521'          # deepest orange for accent moments
  text: '#222222'                # primary ink — warm near-black
  text-strong: '#111111'         # heading ink at maximum punch
  text-muted: '#595959'          # secondary metadata
  text-soft: '#757575'           # caption text, faint counts
  text-on-orange: '#ffffff'      # white on burnt-orange CTA
  link: '#222222'                # default ink link with underline
  link-hover: '#f1641e'          # link hover flips to brand orange
  border: '#e6e6e6'              # default 1px hairline
  border-soft: '#f0f0f0'         # editorial dividers
  border-strong: '#cccccc'       # focus state hairline
  border-input: '#999999'        # form input outline
  star-orange: '#f1641e'         # star rating fill matches brand
  star-empty: '#dddddd'          # empty star
  free-shipping-green: '#067f5b' # "FREE shipping" green badge
  bestseller-tag: '#fff1ea'      # "Bestseller" tag bg (soft orange)
  bestseller-text: '#7d4521'     # "Bestseller" tag text (deep orange)
  star-seller-bg: '#fff1ea'      # "Star Seller" tag bg
  star-seller-text: '#7d4521'    # "Star Seller" tag text
  scrim: 'rgba(0,0,0,0.5)'       # modal backdrop
  shadow-card: 'rgba(0,0,0,0.08)'
  shadow-elev: 'rgba(0,0,0,0.16)'
  success: '#067f5b'             # in-stock green
  warning: '#a35316'             # advisory amber-brown
  warning-soft: '#fff7e6'
  danger: '#a61b1b'              # validation error red
  info: '#1e4dc4'

typography:
  display:
    family: '"Graphik Web", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['tnum', 'ss01']
  body:
    family: '"Graphik Web", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'Menlo, Monaco, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    hero-display:    { size: 48, weight: 700, lineHeight: 1.0,  tracking: '-1px',     family: display, opentype: ['ss01'] }
    page-title:      { size: 32, weight: 700, lineHeight: 1.1,  tracking: '-0.5px',   family: display, opentype: ['ss01'] }
    section-head:    { size: 24, weight: 700, lineHeight: 1.2,  tracking: '-0.25px',  family: display, opentype: ['ss01'] }
    sub-section:     { size: 20, weight: 700, lineHeight: 1.25, tracking: '0',        family: display }
    product-title:   { size: 18, weight: 500, lineHeight: 1.33, tracking: '0',        family: body }
    product-title-md: { size: 14, weight: 500, lineHeight: 1.43, tracking: '0',        family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',        family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.38, tracking: '0',        family: body }
    micro:           { size: 11, weight: 400, lineHeight: 1.27, tracking: '0',        family: body }
    price-display:   { size: 28, weight: 700, lineHeight: 1.0,  tracking: '-0.25px',  family: body, opentype: ['tnum'] }
    price-product:   { size: 18, weight: 700, lineHeight: 1.0,  tracking: '0',        family: body, opentype: ['tnum'] }
    price-strikethru: { size: 14, weight: 400, lineHeight: 1.0,  tracking: '0',        family: body, opentype: ['tnum'] }
    button-cta:      { size: 16, weight: 600, lineHeight: 1.0,  tracking: '0',        family: body }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',        family: body }
    seller-tag:      { size: 12, weight: 600, lineHeight: 1.0,  tracking: '0',        family: body }
    badge:           { size: 11, weight: 600, lineHeight: 1.0,  tracking: '0.04em',   family: body, transform: uppercase }

radius:
  micro: 2
  sm: 4
  md: 8        # default cards
  lg: 12
  xl: 24
  pill: 9999   # CTAs, search bar — Etsy's signature pill

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1408
  prose-width: 720
  header-height: 88
  masthead-height: 64
  sub-nav-height: 40

components:
  button-cta:
    bg: '#f1641e'
    color: '#ffffff'
    radius: 9999
    padding: '14px 24px'
    height: 48
    font: button-cta
    use: 'Add to cart, Sign in, Continue — every primary action.'
  button-cta-hover:
    bg: '#d9591a'
    color: '#ffffff'
    radius: 9999
    use: 'Hover state — deeper orange.'
  button-secondary:
    bg: '#ffffff'
    color: '#222222'
    border: '1px solid #222222'
    radius: 9999
    padding: '13px 23px'
    height: 48
    use: 'Cancel, Save for later, inverse CTAs.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#222222'
    use: '"Show more" links — underlined on hover, flips to orange.'
  button-favorite:
    bg: '#ffffff'
    color: '#222222'
    radius: 9999
    border: '1px solid #e6e6e6'
    height: 36
    width: 36
    use: 'Heart icon button on product cards — fills burnt-orange when favorited.'
  product-card:
    bg: '#ffffff'
    color: '#222222'
    radius: 8
    padding: '0 0 12px 0'
    border: 'none'
    use: 'Listing tile — image-led, minimal chrome, tight metadata stack.'
  search-bar:
    bg: '#ffffff'
    color: '#222222'
    radius: 9999
    height: 48
    border: '1px solid #cccccc'
    focus-ring: '2px solid #f1641e'
    use: 'Masthead pill search — full-width on mobile, ~700px on desktop.'
  search-button:
    bg: '#222222'
    color: '#ffffff'
    radius: 9999
    width: 48
    height: 48
    use: 'Ink (#222222) circular search submit orb — magnifier icon, ink not orange.'
  text-input:
    bg: '#ffffff'
    color: '#222222'
    radius: 6
    height: 44
    padding: '12px 14px'
    border: '1px solid #999999'
    focus: '2px solid #f1641e'
    use: 'Form input — slim 6px radius (less rounded than pill CTAs to keep utility).'
  star-rating:
    color-fill: '#f1641e'
    color-empty: '#dddddd'
    use: 'Five-star rating — burnt-orange fill, grey empty.'
  star-seller-tag:
    bg: '#fff1ea'
    color: '#7d4521'
    radius: 4
    padding: '2px 6px'
    use: '"Star Seller" badge — soft orange surface, deep orange text.'
  bestseller-tag:
    bg: '#fff1ea'
    color: '#7d4521'
    radius: 4
    padding: '2px 6px'
    use: '"Bestseller" badge — same colour pair as Star Seller.'
  free-shipping-tag:
    bg: 'transparent'
    color: '#067f5b'
    use: 'Inline green text — no surface, no border.'
  hero-promo:
    bg: '#fff8f0'
    color: '#222222'
    radius: 16
    padding: '48px 64px'
    use: 'Warm-cream promo band — orange CTA pill anchored bottom-left.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  cta-press: 'CTA bg deepens f1641e → b94816 over 150ms on :active'
  card-hover: 'image scales 1.0 → 1.04 inside its rounded clip + caption translateY +2 → 0 over 240ms'
  favorite-pulse: 'heart scale 1.0 → 1.15 → 1.0 over 300ms when favorited (single celebratory motion)'
  reduced-motion: 'respects prefers-reduced-motion: reduce — image scale and heart pulse suppressed; colour transitions remain.'

breakpoints:
  mobile: 600
  tablet: 1024
  desktop: 1280
  wide: 1408

shadows:
  ambient: 'none — Etsy stays mostly flat'
  hover-card: 'rgba(0,0,0,0.08) 0 4px 12px'
  modal: 'rgba(0,0,0,0.16) 0 8px 24px'
  ring: '0 0 0 2px #f1641e'

accessibility:
  contrast-text-on-bg: 16.0          # #222222 on #ffffff — AAA
  contrast-text-on-cta: 4.4          # #ffffff on #f1641e — AA large only at body sizes
  contrast-link-hover: 4.4           # #f1641e on #ffffff — AA large only
  contrast-muted-on-bg: 7.0          # #595959 on #ffffff — AAA
  focus-ring: '2px solid #f1641e + 2px outline offset (burnt-orange ring)'
  reduced-motion-honored: true
  touch-target-min: 48
  keyboard-nav: 'Tab moves masthead → search → category nav → main grid → footer; arrow keys inside category mega-menu.'

dark-mode: null   # Light-only across storefront. The Etsy mobile app respects system dark mode.
---

## 1. Visual Theme & Atmosphere

Etsy's storefront is the canonical maker-marketplace canvas — bright, warm, photographic, and unmistakably small-batch coded. The base canvas is white (`#ffffff`) with a warm cream (`#fff8f0`) page-floor accent appearing on certain editorial bands, anchored on warm ink (`#222222`) and accented by the unmistakable **burnt-orange** (`#f1641e`) brand colour. The orange carries the wordmark, every primary CTA, the heart-favorite filled state, the rating-star fill, and the focus ring — a single voltage that does the entire chromatic work of the brand.

Type runs **Graphik**, the Christian Schwartz / Commercial Type humanist sans (released 2009 and increasingly the most-used premium sans on the modern web). On Etsy, Graphik runs at modest weights — display 32–48px / 700 with -0.25 to -1px tracking, body 16/400 with comfortable 1.5 leading. There is no display-family alternative; Graphik carries the entire scale. The OpenType `ss01` stylistic set is enabled on display sizes, modifying specific glyphs to give the Etsy headlines their slightly geometric, modern feel.

The chromatic identity is essentially monochromatic plus one accent — **burnt-orange on warm white**. Etsy resists every other "marketplace" colour temptation: no green-for-money, no blue-for-trust, no yellow-for-savings. The single burnt-orange does all the work. Where it appears it carries weight; where it's absent the page reads as small-batch and warm. The deep-orange variants (`#7d4521`) appear inside Star Seller and Bestseller tags, but these are scoped to seller-meta moments, never to brand chrome.

Shape language is fully-pill for CTAs (9999px) and softly rounded for cards (8px). Buttons are 48px tall, the search bar is a 48px pill, and the search-submit orb is a 48×48 ink circle (not orange — Etsy holds back from making the orb orange to prevent the page from feeling overwhelmingly tinted). Cards round at 8px, hero promo bands at 16–24px. There are no compound radii; every interactive element rounds uniformly.

Photography is **the design**. Every product card leans on seller-supplied lifestyle photography — handmade ceramics in bright daylight, vintage clothing on a wooden rack, plant cuttings on a kitchen table. The page is engineered to feel like browsing a craft fair: each tile is a different maker's aesthetic, but the consistent burnt-orange chrome and Graphik typography stitch them into a unified storefront.

**Key Characteristics:**
- Single brand colour: burnt-orange (`#f1641e`) for the wordmark, every primary CTA, ratings, favorites, focus ring
- Warm cream (`#fff8f0`) accent on certain bands — Etsy's signature warmth that distinguishes it from cool-white peers
- Graphik humanist sans at 500–700 weights with `ss01` enabled on display
- Pill CTAs at 9999px / 48px height, ink (`#222222`) search-orb to balance the orange
- Star Seller / Bestseller tags use deep-orange (`#7d4521`) on soft-orange (`#fff1ea`) surfaces
- Star ratings render in burnt-orange — never yellow or gold (the only mass-marketplace using orange here)
- Photographic product cards with `object-fit: cover` and 8px rounded corners
- Generous 64–128px vertical section padding — Etsy gives editorial bands more breath than peers

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): default page floor, every product tile, every form surface
- **Page Floor Warm** (`#fff8f0`): the cream-tinted backing on certain editorial bands — Etsy's signature warmth
- **Ink** (`#222222`): primary text colour — warm near-black with a slightly green undertone, never pure `#000`
- **Heading Ink** (`#111111`): used on hero display copy where Etsy wants maximum chromatic punch

### Brand
- **Burnt Orange** (`#f1641e`): the wordmark, primary CTA, rating-star fill, heart-favorite, focus ring, link hover — the single brand colour
- **Brand Hover** (`#d9591a`): deeper orange on hover
- **Brand Active** (`#b94816`): pressed state
- **Brand Pale** (`#ffd7c2`): disabled CTA tint
- **Brand Deep** (`#7d4521`): deepest orange for Star Seller / Bestseller tag text
- **Surface Orange** (`#fff1ea`): soft orange tint for promo banners and seller-tag surfaces

### Accent
- **Free Shipping Green** (`#067f5b`): inline "FREE shipping" callouts — the only green in the system
- **Star Seller / Bestseller Tag**: surface `#fff1ea` + text `#7d4521` — deep-orange-on-soft-orange duet

### Interactive
- **Link** (`#222222`): default inline link in body — distinguished by underline only, never colour
- **Link Hover** (`#f1641e`): link hover flips from ink to burnt-orange — Etsy's signature link interaction
- **Visited** (`#5e2a8c`): purple visited-link state
- **Disabled** (`#999999`): disabled text and outline
- **Selected** (`#f1641e`): selected radio / checkbox / tab fill

### Neutral Scale
- **Ink** (`#222222`) — primary text
- **Heading** (`#111111`) — hero display copy
- **Muted** (`#595959`) — secondary metadata, breadcrumbs, "From Maker Studio in Brooklyn"
- **Soft** (`#757575`) — caption text, faint counts
- **Disabled** (`#999999`) — disabled state text
- **Border** (`#e6e6e6`) — default 1px hairline
- **Border Soft** (`#f0f0f0`) — editorial dividers
- **Border Strong** (`#cccccc`) — focus state hairline on inputs
- **Border Input** (`#999999`) — default form-input outline (darker than typical to read warmer)

### Surface & Borders
- **Canvas** (`#ffffff`) — default
- **Soft** (`#f6f6f6`) — disabled fields, alternate row
- **Strong** (`#eeeeee`) — divider band between major sections
- **Warm** (`#fff8f0`) — cream-tinted band ground (homepage hero, footer top, editorial pages)
- **Orange Surface** (`#fff1ea`) — Star Seller, Bestseller tag surface; promo banner tint

### Shadow Colors
Etsy stays mostly flat. Hover-card shadow is single-layer neutral grey at 8% — same intensity as Walmart. The brand position: warmth comes from cream surfaces and burnt-orange accents, not from atmospheric shadows.

- `rgba(0,0,0,0.08) 0 4px 12px` — hover-card lift
- `rgba(0,0,0,0.16) 0 8px 24px` — modal drop

### Semantic
- **Success Green** (`#067f5b`): "FREE shipping", "In stock", "Order placed" — a deep teal-green that reads as confident not cheap
- **Warning Brown** (`#a35316`): advisory banners — warm brown rather than amber to match the warm palette
- **Danger Red** (`#a61b1b`): validation error red — distinct from brand orange
- **Info Blue** (`#1e4dc4`): informational banners — used sparingly because blue feels off-brand

## 3. Typography Rules

### Font Family

**Primary**: `Graphik Web`. Fallback chain: `"Helvetica Neue", Helvetica, Arial, sans-serif`. Graphik is Christian Schwartz / Commercial Type's 2009 humanist sans — open apertures, slightly geometric, working-text neutrality. Etsy licensed Graphik in 2017 as part of its rebrand and uses it across the entire scale.

**Mono**: not part of the storefront brand system.

**OpenType features**: `tnum` is enabled on prices, ratings, and shipping countdowns. `ss01` is enabled on display headlines, modifying specific glyphs (the alternate `a` and `g` forms) to give Etsy's headline copy its modern geometric feel. Body text uses default glyphs.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | Graphik | 48 | 700 | 1.0 | -1px | ss01 | Hero banner headlines ("Find something special") |
| page-title | Graphik | 32 | 700 | 1.1 | -0.5px | ss01 | Category page H1 |
| section-head | Graphik | 24 | 700 | 1.2 | -0.25px | ss01 | "Editor's picks", "Trending now" |
| sub-section | Graphik | 20 | 700 | 1.25 | 0 | — | Sub-section heads on PDP |
| product-title | Graphik | 18 | 500 | 1.33 | 0 | — | PDP main product title |
| product-title-md | Graphik | 14 | 500 | 1.43 | 0 | — | Grid product card titles — Etsy keeps these small to give the photo dominance |
| body-md | Graphik | 16 | 400 | 1.5 | 0 | — | Default body — descriptions, reviews |
| body-sm | Graphik | 14 | 400 | 1.43 | 0 | — | Secondary metadata, "From Maker Studio in Brooklyn" |
| caption | Graphik | 13 | 400 | 1.38 | 0 | — | Footer micro-text |
| micro | Graphik | 11 | 400 | 1.27 | 0 | — | Footer legal |
| price-display | Graphik | 28 | 700 | 1.0 | -0.25px | tnum | PDP main price ("$48.00") |
| price-product | Graphik | 18 | 700 | 1.0 | 0 | tnum | Grid tile current price |
| price-strikethru | Graphik | 14 | 400 | 1.0 | 0 | tnum | Original price strikethrough |
| button-cta | Graphik | 16 | 600 | 1.0 | 0 | — | Primary CTA labels — semibold (not bold) |
| nav-link | Graphik | 14 | 500 | 1.0 | 0 | — | Masthead category labels |
| seller-tag | Graphik | 12 | 600 | 1.0 | 0 | — | Star Seller / Bestseller tag text |
| badge | Graphik | 11 | 600 | 1.0 | 0.04em | uppercase | "ETSY EDITORS' PICKS" — rare |

### Principles

- **Graphik with `ss01` on display.** The stylistic set is the typographic signature — without it, the headlines read as generic Helvetica Neue.
- **Modest display weight (700, not 900).** Etsy's headlines run 700 with negative tracking — confident but never heavy.
- **Button CTAs at 600 (semibold).** Most retail systems put button text at 700; Etsy uses 600 because the burnt-orange already commands attention.
- **Product card titles at 14/500 (small).** Etsy intentionally keeps tile titles small (14px) because the photography is the hero — letting the title overshadow the image breaks the small-batch maker aesthetic.
- **Tabular numerals on every price.** `tnum` on prices, ratings, review counts, shipping countdowns.
- **Negative tracking on display.** Display 48px and page-title 32px run -1px and -0.5px respectively.
- **Inter is the closest open-source substitute.** Adjust by ~5% letter-spacing to compensate for Graphik's slightly tighter cap height.

## 4. Component Stylings

### Buttons

**`button-cta`** — burnt-orange (`#f1641e`) fill, white text in 16/600, 9999px pill, 14×24px padding, 48px height. The most common CTA: "Add to cart", "Continue", "Sign in", "Save". Hover deepens to `#d9591a`. Active to `#b94816`.

**`button-secondary`** — white fill, 1px ink (`#222222`) outline, ink text in 16/600. Same pill, same 48px height. Used for "Cancel", "Save for later", inverse CTAs over orange surfaces.

**`button-tertiary-text`** — plain ink text, no surface. Underlined on hover and the colour flips from ink to burnt-orange — the link-hover signature.

**`button-favorite`** — small (36×36) circular icon button, white fill, 1px hairline border, ink heart icon. When favorited, the heart fills with burnt-orange and the button does the favorite-pulse animation (scale 1.0 → 1.15 → 1.0 over 300ms).

### Cards

**`product-card`** — listing tile. White surface, 8px radius, no internal padding around the image (image fills to the rounded edge), 12px bottom padding for metadata. Stack: 1:1 thumbnail with `object-fit: cover` (lifestyle product shot), heart icon top-right (default outline, fills burnt-orange when favorited), title in 14/500 (intentionally small), star row + review count, current price in 18/700 with `tnum`, optional strikethrough price, optional Star Seller tag, "FREE shipping" inline green text, "From Maker Studio in Brooklyn" muted seller line.

**`pdp-buy-box`** — sticky right-rail card on PDP. White, 8px radius, 1px hairline border, hover-card shadow, 24px padding. Stack: large `price-display`, "Hurry — only 3 left" urgency line, variant selectors (Size, Color, Personalization), quantity stepper, full-width burnt-orange Add to cart pill, outline "Add to favorites" pill, "Ships from Brooklyn, NY" small print, estimated delivery line.

**`hero-promo`** — warm cream (`#fff8f0`) ground, ink display headline in 48/700 with `ss01`, body sub-copy in 18/400, burnt-orange pill CTA anchored bottom-left. 16–24px radius. The page's largest typographic moment.

**`category-tile`** — square thumbnail with a single-line ink title beneath. No CTA, no rating row — used in homepage category navigation.

### Badges, Tags, Pills

**`star-seller-tag`** — soft-orange (`#fff1ea`) surface, deep-orange (`#7d4521`) text in 12/600, 4px radius, 2×6px padding. "Star Seller" with a small star glyph. The most distinctive seller-meta moment on Etsy.

**`bestseller-tag`** — same colour pair as Star Seller, "Bestseller" text. Used scarcely — Etsy reserves it for high-volume listings.

**`etsys-pick-tag`** — same colour pair, "Etsy's Pick" text. The editorial-curation badge.

**`free-shipping-tag`** — inline green (`#067f5b`) text in 13/400. No surface, no border — sits inline with the price line.

### Inputs / Forms

**`text-input`** — white surface, 1px `#999999` hairline (darker than peers because Etsy wants the form-input edge to read warm), 6px radius (slimmer than the pill CTAs to keep utility), 44px height, 12×14px padding. Stacked label above in `caption` muted. On focus the border thickens to 2px burnt-orange.

**`search-bar`** — masthead pill search. White fill, 9999px radius, 48px height, 1px `#cccccc` hairline. Internally a single text input with a category dropdown on the left and a search-submit orb on the right. On focus a 2px burnt-orange ring fades in.

**`search-button`** — circular ink (`#222222`) orb, 48×48px, fully rounded. Magnifier glass in white. Etsy intentionally chose ink over orange here — making the orb burnt-orange would tip the masthead into overwhelming brand-tinted, breaking the calm-warm feel.

### Navigation

**`masthead`** — full-width white bar with a thin 1px `#e6e6e6` bottom border, 88px height. Wordmark flush left in burnt-orange — set in a custom display variant of Graphik with the dotted-i. Search bar centred (~700px wide). Account / Favorites / Cart utilities flush right with thin 14/500 ink labels.

**`sub-nav`** — slim 40px band beneath the masthead, white fill, 1px hairline bottom. Holds department links: "Home & Living", "Wedding & Party", "Jewelry", "Clothing", "Art & Collectibles". 14/500 ink labels with `:hover` flipping to burnt-orange.

**`mega-menu-flyout`** — opens from category dropdown; white surface, 8px radius, 1px hairline, hover-card shadow. Multi-column nav of category trees with 14/500 ink labels.

**`breadcrumb`** — `text-muted` (`#595959`) with `›` separators, 13/400.

### Star Rating

**`star-rating`** — 5-icon row, fill `#f1641e` (burnt-orange) for filled, `#dddddd` for empty. Half-stars rendered with clipped half-fill. Followed by an ink-link review count: "(2,847)".

### Modals & Toasts

**`modal`** — centred dialog over a 50%-opacity ink scrim. White surface, 12px radius (more relaxed than the 8px cards), 1px hairline border, modal shadow. Close X anchored top-right.

**`toast`** — bottom-centre notifications. White fill, 8px radius, 1px hairline, ink text, 16×24px padding.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`
- Section padding (vertical): **64–96px** between major bands; **128px** on the homepage hero band — Etsy gives editorial bands more breath than any peer
- Card internal padding: **0** around the image (image flush to corners), **12px** below the image for metadata; **24px** for PDP buy-box
- Gutters: **16px** between product tiles in grid view; **96–128px** between major page bands

### Grid & Container

- Max content width: **1408px** centred
- Homepage: editorial mosaic — featured cards at 2-column width, category tiles at 4-column, listing grid at 5-column
- Search results: **5 column** product grid at desktop with 16px gutters
- PDP: 2-column with image gallery left (~58%), buy box right (~36%), variant selector and reviews stack full-width below
- Footer: 5-column link list at desktop with cream-warm ground

### Whitespace Philosophy

Etsy gives editorial bands the most breath of any mass marketplace — 96–128px between hero and the first content row, 64px between subsequent bands. Inside each band, density is moderate — product grids run 5 across with 16px gutters, the same density as Target. The visual rhythm is **open editorial → moderate-density grid → open editorial** — closer to a printed magazine than a typical e-commerce template.

### Section Cadence

Etsy alternates between **white bands** (default body, product grids) and **warm-cream bands** (`#fff8f0` — hero, footer top, editorial pages, "About Etsy"). The cream is the brand's chromatic warmth — it's what distinguishes Etsy at a glance from Amazon (cool white) or Target (pure white).

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Dense table corners |
| Small | 4px | Star Seller / Bestseller tags, savings callouts |
| Form | 6px | Form inputs (slimmer than cards to read utility) |
| Card | 8px | Product tiles, modals, dropdowns, mega-menu |
| Featured | 12px | Modal containers, larger feature cards |
| Hero | 24px | Hero promo bands |
| Pill | 9999px | CTAs, search bar, search orb, favorite icon button |

There are no compound radii in mainline UI. Form inputs at 6px are the only "off-system" radius — chosen to read slightly more utilitarian than the 8px cards and pill CTAs.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer, all editorial bands (~95% of surfaces) |
| 1 — Hover Card | `rgba(0,0,0,0.08) 0 4px 12px` | Product tiles on hover, dropdowns, mega-menu |
| 2 — Modal | `rgba(0,0,0,0.16) 0 8px 24px` | Centred dialogs |
| 3 — Scrim | `rgba(0,0,0,0.5)` | Modal backdrop |

### Shadow Philosophy

Etsy stays mostly flat. Depth comes from **the cream-vs-white surface separation** (the homepage hero band's `#fff8f0` cream against the white listing grid below) and **the photographic contrast** of seller-supplied imagery. Hover-card shadow is a single-layer neutral grey — no orange tint, no atmospheric Stripe-style multi-layer composition. The brand position: small-batch warmth comes from colour and photography, not from elevation.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Hover colour swap (link ink → orange), focus ring fade-in |
| Standard | 240ms | Card hover lift + image scale, modal enter |
| Slow | 320ms | Hero carousel slide, page transitions |

### Per-Component Recipes

- **CTA hover**: background transitions from `#f1641e` to `#d9591a` over 150ms.
- **CTA press**: deepens to `#b94816` for 150ms on `:active`.
- **Product card hover**: image scales 1.0 → 1.04 inside its rounded clip + caption translateY(2px → 0) over 240ms. The 1.04 scale is more pronounced than Target's 1.02 — Etsy wants the photo to feel alive.
- **Favorite-heart pulse**: when favorited, the heart fills with burnt-orange and scales 1.0 → 1.15 → 1.0 over 300ms — Etsy's signature celebratory motion.
- **Search-bar focus**: 2px burnt-orange ring fades in over 200ms.
- **Mega-menu flyout**: 240ms ease-out fade + 4px slide-down from the masthead.
- **Modal enter**: scrim fades in over 200ms, dialog translates from `translateY(8px) opacity(0)` to `0/1` over 240ms emphasized.
- **Link hover**: text colour transitions from ink (`#222222`) to burnt-orange (`#f1641e`) over 150ms — no underline change.

### Page Transitions

Page-to-page navigation uses no transition — links fire a hard navigation. Etsy prioritises perceived speed.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Card image scale suppresses (only shadow remains). Favorite-heart pulse becomes an instant fill swap. Modal slide degrades to opacity-only.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #222222 ink on #ffffff canvas | 16.0 | AAA |
| #ffffff on #f1641e CTA | 4.4 | AA large only at body sizes — Etsy compensates by using 16/600 for button labels |
| #ffffff on #d9591a CTA hover | 5.4 | AA at body sizes |
| #f1641e link hover on #ffffff | 4.4 | AA large |
| #595959 muted on #ffffff | 7.0 | AAA |
| #7d4521 deep-orange on #fff1ea Star Seller surface | 7.0 | AAA |
| #067f5b free-shipping green on #ffffff | 5.5 | AA |

The white-on-burnt-orange CTA pair sits at **4.4 — AA large only at body sizes**. Etsy compensates by setting button text at **16/600** rather than 14/500, pushing the type into the "large text" threshold where 4.4 reaches AA. The deeper hover state (`#d9591a` → 5.4) crosses into AA at body sizes.

### Focus Indicators

Focus ring is **2px solid `#f1641e`** (burnt-orange) with 2px outline-offset. Buttons, inputs, and links all gain the brand-orange ring on `:focus-visible`. Etsy keeps focus on the brand colour because the surrounding warm-cream surfaces give the orange enough contrast to read clearly.

### ARIA Patterns

- **Search bar**: `role="search"`. Input has `aria-label="Search for items or shops"`.
- **Product card**: entire tile wrapped in `<a>` with verbose `aria-label` — "Handmade ceramic mug from Maker Studio in Brooklyn, 4.8 stars, 247 reviews, $24.99 free shipping".
- **Favorite heart**: `aria-pressed` to communicate save state. Label: "Add to favorites" (default) → "Remove from favorites" (when active).
- **Star rating**: text-equivalent (`aria-label="4.8 out of 5 stars based on 247 reviews"`).
- **Star Seller tag**: `aria-label="Star Seller — consistently earns 5-star reviews and ships on time"`.
- **Mega-menu flyout**: `role="menu"` with `role="menuitem"`; arrow keys navigate, Escape closes.

### Keyboard Navigation

- Masthead: Tab moves logo → search input → search button → account → favorites → cart
- Search results: Tab through tiles in document order; favorite heart is its own tab stop
- PDP: Tab through gallery → variant selectors → quantity → Add to cart → favorite
- Mega-menu: arrow keys navigate, Esc closes

### Screen Reader Hints

Verbose `aria-label` on icon-only buttons. The favorite heart announces "Add to favorites" or "Remove from favorites" depending on state. The Star Seller tag includes the explanation in the aria-label so screen readers communicate the meaning.

### Reduced Motion

All transitions degrade to opacity-only. Card image scale and favorite-heart pulse suppress.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Masthead collapses to logo + cart + hamburger; search bar moves to its own row beneath; product grid 2-up; PDP buy-box stacks beneath gallery |
| Tablet | 600–1024px | Full masthead with search; product grid 3-up |
| Desktop | 1024–1280px | Sub-nav with department links; product grid 4-up |
| Wide | 1280–1408px | Content caps at 1408px; product grid 5-up |

### Touch Targets

- Primary CTAs: 48px height — meets AAA
- Search bar: 48×48px
- Favorite heart on cards: 36×36px — borderline AA, compensated by 8px hit-target padding
- Product tile: entire 240×360px tile is tappable

### Collapsing Strategy

- Masthead: utilities (account, favorites) hide first; only logo + cart + hamburger remain at <600px
- Search bar: jumps from inline to its own row at <1024px
- Product grid: 5 → 4 → 3 → 2; 16px gutters compress to 12px → 8px
- PDP: 2-column splits to single-column stack at <1024px; buy-box becomes a sticky bottom bar

### Image Behavior

Product thumbnails use `aspect-ratio: 1/1` with `object-fit: cover` (Etsy prefers `cover` because seller photography is rarely white-seamless — most listings are styled lifestyle shots). PDP main gallery supports zoom-on-hover and lightbox click.

### Container Queries

Used in the PDP buy-box: when the right rail narrows below ~340px, variant selectors collapse to dropdown style instead of side-by-side options.

## 11. Content & Voice

### Tone

Warm, personal, maker-coded. Etsy's voice is "the friendly stranger at the farmers' market who knows the maker and tells you the story." Headlines lead with discovery ("Find something special", "Gifts they'll love") rather than discount language. The brand consistently positions Etsy as **the place for things you can't find anywhere else** — small batch, one of a kind, made by humans.

### Microcopy Patterns

- **Button verbs**: "Add to cart", "Continue", "Save", "Sign in", "Buy it now" — direct and outcome-named
- **Error message recipe**: warm + instructive — "We couldn't process this card. Try a different one or check your billing details."
- **Success confirmations**: personal — "You're all set — [Maker Name] will ship within 3 days"
- **Field labels**: short and friendly — "Email", "Card number", "Add a personalization"
- **Stock urgency**: "Only 3 left — and 12 people have this in their carts" — names the urgency + the social proof

### Empty States

Empty cart: "Your cart is empty. Start with a search or browse our editor's picks." — names two next destinations.

Empty favorites: "You haven't favorited anything yet. Tap the heart on any item to save it for later." — instructive.

Empty search: "We didn't find anything for [query]. Try different keywords or browse by category." — names cause + alternative.

### CTA Verb Conventions

- Primary: **"Add to cart"** (default), **"Buy it now"** (one-step checkout for select sellers), **"Continue"**, **"Sign in"**
- Save: **"Add to favorites"** (Etsy uses "favorites" — heart-first vocabulary)
- Tertiary: **"View shop"**, **"See all reviews"**, **"Show more"**
- Avoided: "Submit", "Click here", "Buy now" (Etsy prefers the gentler "Buy it now" or "Add to cart")

## 12. Dark Mode & Theming

**Light-only on the public web.** Etsy.com is light-only. The Etsy mobile app respects system dark mode (deep neutral surface, white text, burnt-orange unchanged), but the web storefront stays white-and-cream. The brand position: warmth comes from the cream surfaces and burnt-orange accents, both of which depend on a light canvas. Inverting the page to a dark canvas would lose the small-batch warmth that distinguishes Etsy from cool-tone competitors.

The lone "darker surface" inside the page is the **footer top band** (`#fff8f0` cream with ink text), which is more warm than dark.

## 13. Lineage & Influences

Etsy's visual lineage runs through three traditions: **printed craft-fair signage and zine layout** (the small-batch maker movement of the 2000s — Etsy launched in 2005 specifically to digitise this aesthetic); **editorial magazine design** (generous breath, photographic hero treatments, sans-serif typography); and **mid-century retail signage warmth** (the burnt-orange palette dates back to mid-century Americana — gas stations, diner menus, vintage advertising — and Etsy chose it specifically to evoke that craft-coded warmth).

The 2017 brand refresh, led by Athletics, paired Etsy's existing burnt-orange with the Graphik typeface and tightened the chromatic palette to white-cream-orange-ink. The pre-2017 wordmark used a quirky custom display face; post-2017 it sits in Graphik with the dotted-i intact — Etsy kept the playfulness of the dot but moved the typography to a more credible humanist sans.

What Etsy rejects: cool greys, multi-colour brand systems, dense product grids, dark mode, expressive display typefaces, and animation that distracts from photography. The brand position is **calm warmth** — Etsy wants to feel like browsing a craft fair, not scrolling through a tech marketplace.

**Influences:**
- Mid-century craft-fair signage and gas-station Americana — burnt-orange palette
- Christian Schwartz / Commercial Type — Graphik typeface lineage, [commercialtype.com](https://commercialtype.com)
- Athletics — 2017 brand refresh (NYC design studio), [athleticsnyc.com](https://athleticsnyc.com)
- Apartment Therapy / Kinfolk — editorial magazine layout for lifestyle commerce
- Airbnb — single-brand-colour discipline for marketplaces, [airbnb.com](https://airbnb.com)
- Pinterest — photo-grid hierarchy

## 14. Do's and Don'ts

**Do**
- Anchor the brand on a single burnt-orange (`#f1641e`) for the wordmark, every primary CTA, ratings, favorites, focus ring
- Use Graphik with `ss01` enabled on display headlines — the stylistic set is the typographic signature
- Render the hero band on warm cream (`#fff8f0`) — the brand's chromatic warmth
- Use 9999px pill CTAs at 48px height with 16/600 white text on burnt-orange
- Render the search-submit orb in ink (`#222222`), not orange — keeps the masthead from feeling overwhelmingly tinted
- Use deep-orange (`#7d4521`) on soft-orange (`#fff1ea`) for Star Seller / Bestseller tags
- Render star ratings in burnt-orange — never yellow or gold
- Keep product card titles small (14/500) so the photography dominates
- Use `object-fit: cover` on product thumbnails (lifestyle photography, not white seamless)
- Lean into 96–128px vertical hero padding — Etsy gives editorial bands more breath than peers

**Don't**
- Don't introduce a second brand colour — burnt-orange is the only true brand fill
- Don't make the search-submit orb burnt-orange — ink balances the page warmth
- Don't use cool greys — every neutral has a warm undertone (`#222222` over `#000000`)
- Don't use expressive display typefaces — Graphik carries the entire scale
- Don't tighten section padding below 64px — the breath is the brand
- Don't use yellow or gold for star ratings — burnt-orange `#f1641e` always
- Don't add multi-layer atmospheric shadows — Etsy stays single-layer flat
- Don't use exclamation marks gratuitously — the voice is warm but never giddy
- Don't render product card titles at 16+/700 — the photo dominates, not the type
- Don't say "Submit" or "Click here" — every CTA names the outcome (Add to cart, Buy it now)

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #ffffff
Cream Floor:   #fff8f0
Ink:           #222222
Burnt Orange:  #f1641e
Brand Hover:   #d9591a
Brand Active:  #b94816
Brand Deep:    #7d4521
Surface Orange:#fff1ea
Link Hover:    #f1641e
Border:        #e6e6e6
Muted:         #595959
Free Ship:     #067f5b
```

### Example Component Prompts

- "Create an Etsy-style Add to cart button: a 48px-tall pill (9999px radius) with burnt-orange (`#f1641e`) fill, white text in Graphik 16/600, 14×24px padding. Hover deepens to `#d9591a`."
- "Build an Etsy masthead: full-width white bar with a 1px `#e6e6e6` bottom hairline, 88px tall. Etsy wordmark flush left in burnt-orange (Graphik display variant with the dotted-i). Search bar centred (~700px wide, 48px tall, 9999px radius, white fill, 1px `#cccccc` hairline) with a category dropdown on the left and a 48×48 ink (`#222222`) circular search orb with a white magnifier on the right. Account / Favorites / Cart utilities flush right in 14/500 ink."
- "Design an Etsy product card: white surface, 8px radius, no internal padding around the image (image fills to corners), 12px bottom padding for metadata. Stack: 1:1 lifestyle thumbnail with `object-fit: cover`, heart icon top-right (default outline ink, fills `#f1641e` when favorited), title in 14/500 ink (intentionally small), 5-star row (burnt-orange filled, `#dddddd` empty) + review count in 13/400 ink, current price in 18/700 with `tnum`, 'FREE shipping' inline `#067f5b` green, 'From Maker Studio in Brooklyn' in 13/400 muted."
- "Build a Star Seller badge: soft-orange (`#fff1ea`) surface, deep-orange (`#7d4521`) text in Graphik 12/600, 4px radius, 2×6px padding, with a small star glyph beside the text 'Star Seller'."
- "Create a hero promo band: warm-cream (`#fff8f0`) ground, 16px radius, 48×64px padding. Display headline in Graphik 48/700 with `ss01` enabled and -1px tracking — 'Find something special'. Sub-copy in 18/400 ink. Burnt-orange pill CTA anchored bottom-left — 'Shop the gift guide'."
- "Design a PDP buy-box: white surface, 8px radius, 1px `#e6e6e6` border, hover-card shadow, 24px padding. Top: large price in 28/700 with `tnum` ('$48.00'). 'Hurry — only 3 left' in 14/400 muted urgency. Variant selectors (Size, Color, Personalization) as stacked dropdowns. Quantity stepper. Full-width burnt-orange Add to cart pill. Outline 'Add to favorites' pill in ink. 'Ships from Brooklyn, NY' in 13/400 muted, 'Estimated delivery May 8–12' in 13/400 muted."

### Iteration Guide

1. **Start with cream and ink.** If your page has cool greys or pure black, it isn't Etsy. Warm-white canvas + warm ink (`#222222`) is the foundation.
2. **One brand colour.** Burnt-orange (`#f1641e`) for everything brand. No secondary. The discipline is the brand.
3. **Graphik with `ss01` on display.** The stylistic set is the typographic signature — without it, the headlines read as generic.
4. **Pill CTAs at 48px / 16/600.** 9999px radius, semibold weight, 14×24px padding. No exceptions.
5. **Ink search-orb, not orange.** Etsy resists making the orb burnt-orange because it would tip the masthead overwhelming. Hold the contrast.
6. **Product card titles stay small.** 14/500. The photo dominates. Let the title support, not lead.
7. **Generous breath.** 96–128px vertical hero padding. If the page feels cramped, it is — Etsy trusts breath more than density.
8. **Star ratings in burnt-orange.** Yellow or gold reads as Amazon. Orange `#f1641e` is Etsy.
