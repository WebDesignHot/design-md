---
name: Target
tagline: Bullseye red CTA, Helvetica Neue, photographic hero — friendly mass-market design with confident chromatic restraint.
updated_at: 2026-05-03T21:06:23+12:00
published_at: 2026-05-03T21:06:23+12:00
author: webdesignhot
source_url: https://www.target.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [marketplace]
tags: [light, retail, marketplace, sans, photographic, friendly, confident, e-commerce]
preview_swatch: ['#ffffff', '#cc0000', '#333333']
related: [walmart, amazon, airbnb]
description: 'Target''s storefront earns its mass-market edge through chromatic restraint: a bright white canvas (`#ffffff`), a single confident **Bullseye red** (`#cc0000`) for every primary CTA and the wordmark, deep ink (`#333333`) running text, and the rest of the page handed to **photographic hero imagery** that does the visual lifting. Type runs Helvetica Neue at modest weights — display 32–48px / 700, body 16/400, no custom font, no flourish. Buttons are 9999px pills, cards round at 8px, and the iconic bullseye logo stays the only true splash of brand colour. Where Walmart screams and Amazon clutters, Target whispers — and the result is the most aesthetically credible big-box site in the category.'

colors:
  bg: '#ffffff'                  # default canvas
  bg-page: '#f7f7f7'             # alternate page floor
  surface: '#ffffff'
  surface-soft: '#f7f7f7'        # disabled fields, alt row
  surface-strong: '#e8e8e8'      # divider band
  surface-red-soft: '#ffeeee'    # Target Circle / promo tint
  brand: '#cc0000'               # Bullseye red — the wordmark and CTA colour
  brand-hover: '#aa0000'         # darker red on hover
  brand-active: '#880000'        # pressed state
  brand-pale: '#ffd6d6'          # disabled CTA tint
  text: '#333333'                # primary ink
  text-strong: '#000000'         # heading ink at maximum punch
  text-muted: '#666666'          # secondary metadata
  text-soft: '#888888'           # caption text
  text-on-red: '#ffffff'         # white on Bullseye red
  text-on-dark: '#ffffff'        # masthead text (when used)
  link: '#366cd9'                # subdued blue for inline links
  link-hover: '#244a96'          # deeper hover blue
  border: '#dddddd'              # default 1px hairline
  border-soft: '#eeeeee'         # editorial dividers
  border-strong: '#cccccc'       # focus state hairline
  border-input: '#bbbbbb'        # form input outline
  circle-gold: '#fcc111'         # Target Circle gold accent — used sparingly
  shipt-green: '#5d3eb8'         # Shipt sub-brand purple (acquired)
  rating-red: '#cc0000'          # star rating fill — matches Bullseye
  rating-empty: '#dddddd'        # empty star
  freshness-green: '#377e36'     # Fresh / grocery delivery green
  scrim: 'rgba(0,0,0,0.5)'       # modal backdrop
  shadow-card: 'rgba(0,0,0,0.06)'
  shadow-elev: 'rgba(0,0,0,0.12)'
  success: '#377e36'             # in-stock confirmation green
  warning: '#cc6600'             # advisory amber
  warning-soft: '#fff7e6'
  danger: '#cc0000'              # validation error matches brand
  info: '#366cd9'

typography:
  display:
    family: '"Helvetica Neue", "Helvetica", Arial, "Liberation Sans", sans-serif'
    weights: [400, 500, 700]
    opentype-features: ['tnum']
  body:
    family: '"Helvetica Neue", "Helvetica", Arial, "Liberation Sans", sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'Menlo, Monaco, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    hero-display:    { size: 56, weight: 700, lineHeight: 1.0,  tracking: '-1.5px',   family: display, opentype: ['tnum'] }
    page-title:      { size: 36, weight: 700, lineHeight: 1.1,  tracking: '-0.75px',  family: display }
    section-head:    { size: 28, weight: 700, lineHeight: 1.2,  tracking: '-0.5px',   family: display }
    sub-section:     { size: 22, weight: 700, lineHeight: 1.25, tracking: '-0.25px',  family: display }
    product-title:   { size: 18, weight: 400, lineHeight: 1.33, tracking: '0',        family: body }
    product-title-md: { size: 16, weight: 400, lineHeight: 1.43, tracking: '0',        family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',        family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.38, tracking: '0',        family: body }
    micro:           { size: 11, weight: 400, lineHeight: 1.27, tracking: '0',        family: body }
    price-display:   { size: 28, weight: 700, lineHeight: 1.0,  tracking: '-0.25px',  family: body, opentype: ['tnum'] }
    price-product:   { size: 18, weight: 700, lineHeight: 1.0,  tracking: '0',        family: body, opentype: ['tnum'] }
    price-strikethru: { size: 14, weight: 400, lineHeight: 1.0,  tracking: '0',        family: body, opentype: ['tnum'] }
    button-cta:      { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0',        family: body }
    nav-link:        { size: 14, weight: 400, lineHeight: 1.0,  tracking: '0',        family: body }
    badge:           { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.04em',   family: body, transform: uppercase }
    deal-tag:        { size: 13, weight: 700, lineHeight: 1.0,  tracking: '0',        family: body }

radius:
  micro: 2
  sm: 4
  md: 8        # default cards
  lg: 16
  xl: 24
  pill: 9999   # CTAs and search bar — Target's signature pill

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

layout:
  page-width: 1408
  prose-width: 720
  header-height: 88
  masthead-height: 56
  sub-nav-height: 40

components:
  button-cta:
    bg: '#cc0000'
    color: '#ffffff'
    radius: 9999
    padding: '14px 24px'
    height: 48
    font: button-cta
    use: 'Add to cart, Sign in, Pickup — every primary action.'
  button-cta-hover:
    bg: '#aa0000'
    color: '#ffffff'
    radius: 9999
    use: 'Hover state — deeper red.'
  button-secondary:
    bg: '#ffffff'
    color: '#cc0000'
    border: '1px solid #cc0000'
    radius: 9999
    padding: '13px 23px'
    height: 48
    use: 'Cancel, See more, inverse CTAs.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#cc0000'
    use: '"Show more", text-only links — underlined on hover.'
  button-ghost:
    bg: '#ffffff'
    color: '#333333'
    border: '1px solid #dddddd'
    radius: 9999
    padding: '13px 23px'
    height: 48
    use: 'Neutral secondary actions on white surface.'
  product-card:
    bg: '#ffffff'
    color: '#333333'
    radius: 8
    padding: '12px'
    border: 'none'
    use: 'Search-result and grid product tile. Image-led, minimal chrome.'
  promo-card:
    bg: '#ffffff'
    color: '#333333'
    radius: 8
    use: 'Photographic promo card — full-bleed image with overlaid red CTA pill.'
  search-bar:
    bg: '#ffffff'
    color: '#333333'
    radius: 9999
    height: 48
    border: '1px solid #dddddd'
    focus-ring: '2px solid #cc0000'
    use: 'Masthead pill search — full-width on mobile, ~700px wide on desktop.'
  text-input:
    bg: '#ffffff'
    color: '#333333'
    radius: 24
    height: 48
    padding: '14px 16px'
    border: '1px solid #bbbbbb'
    focus: '2px solid #cc0000'
    use: 'Form input — semi-pill 24px, focus shows brand red ring.'
  star-rating:
    color-fill: '#cc0000'
    color-empty: '#dddddd'
    use: 'Five-star rating — Bullseye red fill, grey empty.'
  deal-tag:
    bg: '#cc0000'
    color: '#ffffff'
    radius: 4
    padding: '4px 8px'
    use: 'Solid red savings tag — "Save 20%" / "Sale".'
  circle-tag:
    bg: '#fcc111'
    color: '#333333'
    radius: 4
    padding: '4px 8px'
    use: 'Target Circle gold tag — used for member-exclusive savings.'
  free-shipping-tag:
    bg: 'transparent'
    color: '#377e36'
    use: 'Inline green text — no surface, no border.'
  hero-photographic:
    bg: 'photographic image'
    color: '#ffffff'
    overlay: 'transparent — copy and CTA sit directly over the photo'
    use: 'Full-bleed hero with no scrim — Target trusts its photography.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  cta-press: 'CTA bg deepens cc0000 → 880000 over 150ms on :active'
  card-hover: 'shadow-card appears + image scales 1.0 → 1.02 inside the card frame over 240ms'
  search-focus: '2px red ring fades in over 200ms'
  reduced-motion: 'respects prefers-reduced-motion: reduce — image scale and transforms suppressed; colour transitions remain.'

breakpoints:
  mobile: 600
  tablet: 1024
  desktop: 1280
  wide: 1408

shadows:
  ambient: 'none — Target stays mostly flat'
  hover-card: 'rgba(0,0,0,0.06) 0 4px 12px'
  modal: 'rgba(0,0,0,0.12) 0 8px 24px'
  ring: '0 0 0 2px #cc0000'

accessibility:
  contrast-text-on-bg: 12.6          # #333333 on #ffffff — AAA
  contrast-text-on-cta: 5.9          # #ffffff on #cc0000 — AA body / AAA large
  contrast-link-on-bg: 4.9           # #366cd9 on #ffffff — AA
  contrast-muted-on-bg: 5.7          # #666666 on #ffffff — AA
  focus-ring: '2px solid #cc0000 + 2px outline offset (Bullseye red)'
  reduced-motion-honored: true
  touch-target-min: 48
  keyboard-nav: 'Tab moves masthead → search → category nav → main grid → footer; arrow keys inside category mega-menu and image carousel.'

dark-mode: null   # Light-only across storefront. The Target mobile app respects system dark mode.
---

## 1. Visual Theme & Atmosphere

Target's storefront earns its mass-market design credibility through chromatic restraint. Where Walmart screams everyday-low-prices and Amazon clutters with ten competing CTAs, Target leans on a calm white canvas (`#ffffff`), a single confident **Bullseye red** (`#cc0000`) for every primary CTA and the wordmark, deep ink (`#333333`) for running text, and hands the rest of the page to **photographic hero imagery** that does the visual lifting. The result is the most aesthetically credible site in the big-box retail category — and the only one that has consistently won design awards for digital UI.

Type runs **Helvetica Neue** at modest weights — display lines render at 32–56px / 700 with subtle negative tracking, body text at 16px / 400 with comfortable 1.5 leading, and there is no custom typeface and no expressive display family. The brand position: the photography is the design statement, the type stays out of its way. This is the same rationale Apple applied to its product pages for two decades — the typography is so neutral it disappears, leaving the imagery to carry the page.

The chromatic identity is essentially monochromatic plus one accent. **Bullseye red** (`#cc0000`) is the only true brand colour — it appears in the wordmark, every primary CTA, the rating-star fill, the percentage-off tag, and the focus ring. There is no secondary brand colour. The Target Circle gold (`#fcc111`) appears only on member-savings tags, and the Shipt purple (`#5d3eb8`) appears only when the Shipt acquired-brand surfaces.

Shape language is fully-pill for CTAs (9999px) and softly rounded for cards (8px). The pill CTA at 48px height is recognizably Target — at first glance it might be confused with Walmart's pill, but Target's red against a much calmer page gives it a distinctly different perceptual weight. Cards round consistently at 8px; there are no compound radii, no asymmetric rounding.

Photography is **the brand**. Every promo card, hero band, and category landing page leans on lifestyle imagery — families, dogs, plants, soft natural light, and a deliberate avoidance of stock-photo cliché. Target spends more on photography than typography or chrome combined, and the result is a visual identity that reads warm without being precious.

**Key Characteristics:**
- Single brand colour: Bullseye red (`#cc0000`) for the wordmark, every primary CTA, ratings, and savings tags
- Photographic hero: full-bleed lifestyle imagery with no scrim — copy sits directly over the photo
- Helvetica Neue at modest weights — no custom typeface, no display family
- Pill CTAs at 9999px / 48px height, cards at 8px — consistent rounded discipline
- Chromatic restraint: white + red + ink, with the photography handling colour
- Star ratings render in Bullseye red on grey — never gold
- Generous 64–96px vertical section padding — Target leans into breath, not density
- Iconic bullseye logo as the only true brand stamp — no other graphic flourishes

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): default page floor, every product tile, every form surface
- **Page Floor** (`#f7f7f7`): alternate band ground when a section needs subtle separation from the body
- **Ink** (`#333333`): primary text colour — soft black with a calm, readable weight
- **Heading Ink** (`#000000`): used on hero display copy where Target wants maximum chromatic punch

### Brand
- **Bullseye Red** (`#cc0000`): the wordmark, primary CTA, rating-star fill, percentage-off tag, focus ring — the single brand colour
- **Brand Hover** (`#aa0000`): deeper red on hover
- **Brand Active** (`#880000`): pressed state
- **Brand Pale** (`#ffd6d6`): disabled CTA tint (used sparingly)

### Accent
- **Target Circle Gold** (`#fcc111`): member-exclusive savings tag — used only on Target Circle promotions
- **Shipt Purple** (`#5d3eb8`): the acquired Shipt sub-brand — appears only inside Shipt-membership surfaces
- **Freshness Green** (`#377e36`): Grocery / Drive Up "Fresh" tag, "FREE shipping" green text

### Interactive
- **Link** (`#366cd9`): subdued blue for inline body links — distinct from the brand red so links don't compete with CTAs
- **Link Hover** (`#244a96`): deeper hover blue
- **Visited** (`#5e2a8c`): purple visited state on category pages
- **Disabled** (`#bbbbbb`): disabled text and outline
- **Selected** (`#cc0000`): selected radio / checkbox / tab indicator

### Neutral Scale
- **Ink** (`#333333`) — primary text
- **Heading** (`#000000`) — hero display copy
- **Muted** (`#666666`) — secondary metadata, breadcrumbs, caption text on cards
- **Soft** (`#888888`) — caption text, disabled labels
- **Border** (`#dddddd`) — default 1px hairline
- **Border Soft** (`#eeeeee`) — editorial dividers between bands
- **Border Strong** (`#cccccc`) — focus state hairline on inputs
- **Border Input** (`#bbbbbb`) — default form-input outline

### Surface & Borders
- **Canvas** (`#ffffff`) — default
- **Soft** (`#f7f7f7`) — disabled fields, alternate row, subtle band separation
- **Strong** (`#e8e8e8`) — divider band between major sections
- **Red-Soft** (`#ffeeee`) — Target Circle / promo banner tint (used sparingly)

### Shadow Colors
Target stays mostly flat. Hover-card shadow is a single neutral grey at 6% — gentler than Walmart's 8% — reinforcing Target's calmer aesthetic.

- `rgba(0,0,0,0.06) 0 4px 12px` — hover-card lift
- `rgba(0,0,0,0.12) 0 8px 24px` — modal drop

### Semantic
- **Success Green** (`#377e36`): in-stock confirmation, "Order placed", "FREE shipping" inline text
- **Warning Amber** (`#cc6600`): advisory banners
- **Danger Red** (`#cc0000`): validation errors — same hex as the brand to keep the system tight (Target accepts the small risk of confusing error with brand because errors are rare and accompanied by error copy)
- **Info Blue** (`#366cd9`): informational banners

## 3. Typography Rules

### Font Family

**Primary**: `Helvetica Neue`. Fallback chain: `Helvetica, Arial, "Liberation Sans", sans-serif`. Target uses no custom typeface — Helvetica Neue is the entire system. The fallback chain works on every consumer device since 2010, and the brand never invested in custom type because Helvetica's neutrality is the design intent.

**Mono**: not part of the storefront brand system.

**OpenType features**: `tnum` is enabled on price displays, savings tags, ratings, and shipping countdown timers so column alignment stays clean across grids. No `ss01` / `ss02` discipline.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | Helvetica Neue | 56 | 700 | 1.0 | -1.5px | — | Hero banner headlines ("More smiles per dollar") |
| page-title | Helvetica Neue | 36 | 700 | 1.1 | -0.75px | — | Category page H1 ("Grocery", "Home", "Toys") |
| section-head | Helvetica Neue | 28 | 700 | 1.2 | -0.5px | — | "Top Deals", "New arrivals", "Trending" |
| sub-section | Helvetica Neue | 22 | 700 | 1.25 | -0.25px | — | Sub-section heads on PDP |
| product-title | Helvetica Neue | 18 | 400 | 1.33 | 0 | — | PDP main product title — large but regular weight |
| product-title-md | Helvetica Neue | 16 | 400 | 1.43 | 0 | — | Grid product card titles |
| body-md | Helvetica Neue | 16 | 400 | 1.5 | 0 | — | Default body — descriptions, reviews |
| body-sm | Helvetica Neue | 14 | 400 | 1.43 | 0 | — | Secondary metadata, "Sold by Target" |
| caption | Helvetica Neue | 13 | 400 | 1.38 | 0 | — | Footer micro-text |
| micro | Helvetica Neue | 11 | 400 | 1.27 | 0 | — | Footer legal, smallest labels |
| price-display | Helvetica Neue | 28 | 700 | 1.0 | -0.25px | tnum | PDP main price ("$24.99") |
| price-product | Helvetica Neue | 18 | 700 | 1.0 | 0 | tnum | Grid tile current price |
| price-strikethru | Helvetica Neue | 14 | 400 | 1.0 | 0 | tnum | Original price strikethrough |
| button-cta | Helvetica Neue | 16 | 700 | 1.0 | 0 | — | Primary CTA labels — bold weight for confidence |
| nav-link | Helvetica Neue | 14 | 400 | 1.0 | 0 | — | Masthead category labels |
| badge | Helvetica Neue | 11 | 700 | 1.0 | 0.04em | uppercase | "TARGET CIRCLE", "DEAL", member-exclusive callouts |
| deal-tag | Helvetica Neue | 13 | 700 | 1.0 | 0 | — | "Save 20%" / "Sale" red tag |

### Principles

- **Helvetica Neue, full stop.** No custom font. No display family. The fallback chain is engineered to render the same on every consumer device. The brand position: typographic invisibility lets photography lead.
- **Negative tracking on display.** Display 56px and page-title 36px run with -1.5px and -0.75px tracking respectively — Target leans into tight tracking for confident headline display.
- **Body at 16/400 with 1.5 leading.** The most readable typographic preset in retail — Target prioritises readability over density.
- **Button CTAs at 700.** Bold weight on the red pill — the CTA reads as decisive, never timid.
- **Tabular numerals on every price.** `tnum` is enabled on price-display, price-product, price-strikethru, ratings, and savings callouts.
- **No italic, no oblique.** Helvetica Neue oblique exists but never appears on the storefront — italics read as editorial, and Target wants commercial neutrality.
- **Inter is the closest open-source substitute** for Helvetica Neue.

## 4. Component Stylings

### Buttons

**`button-cta`** — the canonical Target pill. Bullseye red (`#cc0000`) fill, white text in 16/700, 9999px radius, 14×24px padding, 48px height. Hover deepens to `#aa0000`. Active deepens further to `#880000`.

**`button-secondary`** — white fill, 1px Bullseye red outline, red text in 16/700. Same 9999px pill, 48px height. Used for "Cancel", "See more", inverse CTAs.

**`button-tertiary-text`** — plain Bullseye red text, no surface. Underlined on hover.

**`button-ghost`** — white fill, 1px `#dddddd` hairline, ink text. Used for neutral secondary actions where red would be too brand-loud.

### Cards

**`product-card`** — grid product tile. White surface, 8px radius, 12px padding, no border. Stack: 1:1 thumbnail with `object-fit: cover` (Target prefers `cover` for lifestyle product photography), product title in 16/400 ink, star row + review count, current price in 18/700 with `tnum`, optional strikethrough original price, optional Target Circle gold tag, "FREE shipping" green inline text, optional Add to cart pill or "Choose options" tertiary link.

**`promo-card`** — full-bleed photographic card. The image **is** the card — 1:1 or 4:3 aspect ratio with `object-fit: cover`, copy and a red CTA pill overlaid in the lower-left or lower-right corner. No scrim, no overlay tint — Target trusts the photographer to compose the shot so the copy is legible.

**`pdp-buy-box`** — sticky right-rail card on PDP. White, 8px radius, 1px `#dddddd` border, hover-card shadow, 24px padding. Stack: large `price-display` (28/700) with optional strikethrough, "Save $5.00" red callout, fulfilment radio group (Pickup, Drive Up, Delivery, Shipping), quantity stepper, full-width red Add to cart pill, outline "Add to list" pill, "Sign in to save 5%" Target Circle banner.

**`hero-photographic`** — full-bleed hero band with photographic background. Copy and CTA pill sit directly over the photo with no scrim — Target's photographers compose specifically for this overlay treatment.

### Badges, Tags, Pills

**`deal-tag`** — solid Bullseye red (`#cc0000`) fill, white text in 13/700, 4px radius, 4×8px padding. "Save 20%", "Sale", "Clearance".

**`circle-tag`** — Target Circle gold (`#fcc111`) fill, ink text in 11/700 uppercase, 4px radius. "TARGET CIRCLE OFFER" or "MEMBER PRICE" — only appears on member-exclusive savings.

**`free-shipping-tag`** — inline green (`#377e36`) text in 13/400. No surface, no border — sits beneath the price line.

**`drive-up-badge`** — outline pill with the Target Drive Up icon (a circular bullseye in a car silhouette) and "Drive Up ready in 2 hours" — used on grocery and home-essentials tiles.

### Inputs / Forms

**`text-input`** — white surface, 1px `#bbbbbb` hairline, 24px radius (semi-pill — softer than the masthead's full pill), 48px height, 14×16px padding. Stacked label above in `caption` muted. On focus the border thickens to 2px Bullseye red.

**`search-bar`** — masthead pill search. White fill, 9999px radius, 48px height, 1px `#dddddd` hairline. Magnifier icon on the right edge in `text-muted` ink. On focus a 2px Bullseye red ring fades in.

**`select`** — same look as `text-input` with a chevron indicator.

### Navigation

**`masthead`** — full-width white bar with a thin 1px hairline bottom border, 88px height. Wordmark (the bullseye logo) flush left in Bullseye red. Search bar centred (~700px wide). Account / list / cart utilities flush right with thin Helvetica Neue 14/400 labels.

**`sub-nav`** — slim 40px band beneath the masthead, white fill, 1px hairline bottom. Holds department links: "Grocery", "Home", "Beauty", "Toys", "Clothing". 14/400 ink labels with `:hover` flipping to Bullseye red.

**`mega-menu-flyout`** — opens from category dropdown; white surface, 8px radius, 1px hairline, hover-card shadow. Two-column nav of category trees with 14/400 ink labels.

**`breadcrumb`** — `text-muted` (`#666666`) with `>` separators, 13/400.

### Star Rating

**`star-rating`** — 5-icon row, fill `#cc0000` (Bullseye red) for filled, `#dddddd` for empty. Half-stars rendered with clipped half-fill. Followed by a blue-link review count: "(1,247)".

### Modals & Toasts

**`modal`** — centred dialog over a 50%-opacity ink scrim. White surface, 16px radius (more relaxed than the 8px cards), 1px hairline border, modal shadow. Close X anchored top-right.

**`toast`** — bottom-centre notifications. White fill, 8px radius, 1px hairline, ink text, 16×24px padding.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96`
- Section padding (vertical): **64–96px** between major bands — Target leans into breath more than Walmart (48–64px) or Amazon (22–28px)
- Card internal padding: **12px** for product tiles; **24px** for PDP buy box; **40–64px** for promo card overlay copy
- Gutters: **16–24px** between product tiles in grid view; **80px** between major page bands; **8px** between adjacent CTAs in the buy-box stack

### Grid & Container

- Max content width: **1408px** centred
- Homepage: 4-column promo card grid at desktop, with featured cards spanning 2 columns
- Search results: **4–5 column** product grid at desktop with 24px gutters
- PDP: 2-column with image gallery left (~55%), buy box right (~38%), specs and reviews stack full-width below
- Footer: 4-column link list at desktop with the Target Circle membership banner above

### Whitespace Philosophy

Target gives every section significant breathing room — 80–96px between major bands at desktop. The page reads as **photographic editorial**, closer to a department-store catalogue than a discount-retail circular. Inside each band, density is moderate — product grids run 4–5 across with 24px gutters (more generous than Walmart's 16px or Amazon's 14px).

### Section Cadence

Target alternates between **white bands** (default body, product grids, footer) and **photographic hero bands** (full-bleed lifestyle imagery). The brand never uses a coloured ground for a section — the imagery itself is the colour. The visual rhythm is: photo → product grid → photo → product grid, with the white grids letting the hero imagery breathe.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Dense table corners, tight badges |
| Small | 4px | Deal tag, savings callouts, form helper boxes |
| Card | 8px | Product tiles, modals, dropdowns, mega-menu |
| Featured | 16px | Hero promo cards, larger feature cards |
| Hero | 24px | Form input semi-pill |
| Pill | 9999px | CTAs, search bar — Target's signature pill |

The **9999px pill CTA** at 48px height is shared with Walmart, but Target's version against a white-and-photo canvas reads distinctly different — calmer, less promotional. There are no compound radii in mainline UI.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer, all editorial bands (~95% of surfaces) |
| 1 — Hover Card | `rgba(0,0,0,0.06) 0 4px 12px` | Product tiles on hover, mega-menu, dropdowns |
| 2 — Modal | `rgba(0,0,0,0.12) 0 8px 24px` | Centred dialogs |
| 3 — Scrim | `rgba(0,0,0,0.5)` | Modal backdrop |

### Shadow Philosophy

Target stays mostly flat. The hover-card lift is a single-layer drop at 6% black — even gentler than Walmart's 8%. Depth comes from **the white-on-white surface separation** and **the photographic contrast of the hero imagery** rather than from layered shadows. The brand position: shadows distract from photography.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu flyout

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Hover colour swap, focus ring fade-in |
| Standard | 240ms | Card hover lift + image scale, modal enter |
| Slow | 320ms | Hero carousel slide, page transitions |

### Per-Component Recipes

- **CTA hover**: background transitions from `#cc0000` to `#aa0000` over 150ms. No transform.
- **CTA press**: deepens further to `#880000` for 150ms on `:active`.
- **Product card hover**: shadow appears (`rgba(0,0,0,0.06) 0 4px 12px`) and the inner image scales 1.0 → 1.02 inside its rounded clip over 240ms — the only "celebratory" motion in the system.
- **Search-bar focus**: 2px red ring fades in over 200ms.
- **Mega-menu flyout**: 240ms ease-out fade + 4px slide-down from the masthead.
- **Hero carousel**: auto-advance every 7s with 320ms ease-out slide.
- **Modal enter**: scrim fades in over 200ms, then dialog translates from `translateY(8px) opacity(0)` to `0/1` over 240ms emphasized.

### Page Transitions

Page-to-page navigation uses no transition. Target prioritises perceived speed.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Image scale on card hover suppresses (only shadow remains). Hero carousel auto-advance pauses. Modal slide degrades to opacity-only.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #333333 ink on #ffffff canvas | 12.6 | AAA |
| #ffffff on #cc0000 CTA | 5.9 | AA body / AAA large |
| #366cd9 link on #ffffff | 4.9 | AA |
| #666666 muted on #ffffff | 5.7 | AA |
| #cc0000 ratings on #ffffff | 5.9 | AA |
| #333333 on #fcc111 Circle gold | 9.5 | AAA |
| #ffffff on #aa0000 CTA hover | 7.4 | AAA |

### Focus Indicators

Focus ring is **2px solid `#cc0000`** (Bullseye red) with 2px outline-offset. Every focusable element gains the brand-red ring on `:focus-visible`. Target accepts the slight visual cost of using brand red on focus because the brand colour is loud enough to read clearly without requiring a separate accent.

### ARIA Patterns

- **Search bar**: `role="search"`. Input has `aria-label="Search Target.com"`.
- **Product card**: entire tile wrapped in `<a>` with verbose `aria-label` — "Threshold throw pillow, 4.5 stars, 247 reviews, $24.99, FREE shipping with $35 orders".
- **Star rating**: text-equivalent (`aria-label="4.5 out of 5 stars, 247 reviews"`).
- **Mega-menu flyout**: `role="menu"` with `role="menuitem"`; arrow keys navigate, Escape closes.
- **Add-to-cart toast**: `role="status"` with `aria-live="polite"`.
- **PDP fulfilment radios**: `role="radiogroup"` with `aria-label="How to get this item"`.

### Keyboard Navigation

- Masthead: Tab moves logo → search input → account → list → cart
- Search results: Tab through tiles in document order
- PDP: Tab through gallery → variant selector → fulfilment radios → quantity → Add to cart
- Mega-menu: arrow keys navigate, Esc closes

### Screen Reader Hints

Verbose `aria-label` on all icon-only buttons. The cart icon has `aria-label="Cart, 2 items"`. The Drive Up badge includes `aria-label="Drive Up ready in 2 hours at Target Minneapolis"`.

### Reduced Motion

All transitions degrade to opacity-only. Card image scale suppresses. Hero carousel auto-advance pauses.

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
- Search bar and orb: 48×48px
- Product tile: entire 240×360px tile is tappable
- Quantity stepper: 36×36px buttons — borderline AA, compensated by 8px inner padding

### Collapsing Strategy

- Masthead: utilities (account, list) hide first; only logo + cart + hamburger remain at <600px
- Search bar: jumps from inline to its own row at <1024px
- Product grid: column count drops cleanly; 24px gutters compress to 16px → 12px
- PDP: 2-column splits to single-column stack at <1024px; buy-box becomes a sticky bottom bar

### Image Behavior

Product thumbnails use `aspect-ratio: 1/1` with `object-fit: cover` (Target prefers `cover` for lifestyle photography — products are often shown in styled-room contexts, not on white seamless). Hero promo cards use `object-fit: cover` with the photographic composition designed for the overlay treatment.

### Container Queries

Used in the PDP buy-box: when the right rail narrows below ~340px, fulfilment options collapse to a single radio with a "Change" link.

## 11. Content & Voice

### Tone

Warm, optimistic, accessible — the brand voice is "the cheerful neighbour who knows where to find everything in the store." Target's tagline "Expect more. Pay less." anchors the brand position: aspirational without being expensive. Headlines lead with delight ("More smiles per dollar", "Hello, holidays") rather than discount language.

### Microcopy Patterns

- **Button verbs**: "Add to cart", "Pick it up", "Drive Up", "Get it shipped", "Sign in" — direct and outcome-named
- **Error message recipe**: `[What went wrong] + [How to fix]` — e.g., "Add a ZIP code to see fulfilment options at your store."
- **Success confirmations**: "Added to cart", "Order placed", "Saved for later" — short, outcome-named
- **Field labels**: short and friendly — "ZIP code", "Email", "Card number"
- **Stock urgency**: "Only 2 left at your store" — names the local context

### Empty States

Empty cart: "Your cart is empty — let's fix that. Browse today's deals." — friendly + action-oriented.

Empty list: "Build your list as you shop. Tap the heart on any item to save it." — instructive.

Empty search: "No results for [query]. Check your spelling or browse by category." — names cause + alternative.

### CTA Verb Conventions

- Primary: **"Add to cart"** (default), **"Pick it up"** (in-store pickup), **"Drive Up"** (curbside), **"Get it shipped"**, **"Sign in"**
- Membership: **"Try Target Circle 360 free"** — names the membership and the trial explicitly
- Save: **"Add to list"** (Target uses "list" rather than "wishlist")
- Tertiary: **"Choose options"** (variant selection), **"See all reviews"**, **"Show more"**
- Avoided: "Submit", "Click here", "Buy now" alone (Target prefers "Add to cart" → checkout)

## 12. Dark Mode & Theming

**Light-only on the public web.** Target.com is light-only. The Target mobile app respects system dark mode (deep neutral surface, white text, Bullseye red unchanged), but the web storefront stays white. The brand position: photographic hero imagery is colour-graded for warm white, and the chromatic restraint depends on the white canvas.

The lone "dark surface" inside the page is the **footer** (a slightly darker `#f7f7f7` page floor with ink text), which is more grey than dark.

## 13. Lineage & Influences

Target's visual lineage runs through three traditions: **Marshall Field's department-store catalogue design** (Target acquired Marshall Field's in 1990 and absorbed the design DNA — generous spacing, photographic editorial, refined typography); **Apple's product-photography discipline** (white seamless or styled-room product shots, single brand colour, Helvetica neutrality); and **mid-century retail signage** (the bullseye logo dates to 1962 and has barely changed since).

The 1999 partnership with Michael Graves marked Target's strategic shift toward "design-forward mass retail" — and the digital UI inherited that ambition. Where Walmart and Amazon optimise for conversion density, Target optimises for **brand affinity** — the page design is part of the product, not a vehicle for the product.

What Target rejects: clutter, dense product grids without breath, expressive typography, multi-colour brand systems, dark mode, and animation that distracts from photography. The brand position is **calm confidence** — Target doesn't need to shout because the bullseye is already legible from across a parking lot.

**Influences:**
- Marshall Field's department-store catalogue tradition
- Apple — product-photography discipline and chromatic restraint, [apple.com](https://apple.com)
- Helvetica Neue — typographic neutrality lineage
- Michael Graves design partnership — design-forward mass retail (1999)
- IKEA — photographic editorial layout for retail
- Walmart.com (peer) — direct big-box competitor with opposite design philosophy

## 14. Do's and Don'ts

**Do**
- Anchor the brand on a single Bullseye red (`#cc0000`) for the wordmark, every primary CTA, ratings, and savings tags
- Use Helvetica Neue at modest weights — no custom font, no display family
- Render display copy at 32–56px / 700 with negative tracking (-0.5px to -1.5px)
- Lean on full-bleed photographic hero imagery — no scrim, no overlay tint
- Use 9999px pill CTAs at 48px height
- Round cards consistently at 8px — no compound or asymmetric radii
- Render star ratings in Bullseye red on grey — never gold
- Use Target Circle gold (`#fcc111`) only for member-exclusive savings — never as a brand fill
- Lean into 64–96px vertical section padding — Target trusts breath
- Use `object-fit: cover` on product thumbnails (lifestyle photography, not white seamless)

**Don't**
- Don't use a secondary brand colour — Bullseye red is the only true brand fill
- Don't use a custom typeface — Helvetica Neue is the system; substituting Inter is acceptable but no flourish
- Don't add scrims or overlays on hero imagery — Target trusts its photographers
- Don't use square-cornered or rounded-rect CTAs — pills, always
- Don't use exclamation marks gratuitously — the voice is warm but never giddy
- Don't render the bullseye logo without the canonical Bullseye red
- Don't use yellow or gold for star ratings — Bullseye red `#cc0000` always
- Don't add multi-layer atmospheric shadows — Target stays single-layer flat
- Don't overload Target Circle gold onto non-membership surfaces
- Don't tighten section padding below 64px — the breath is part of the brand

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #ffffff
Page Floor:    #f7f7f7
Ink:           #333333
Bullseye Red:  #cc0000
Brand Hover:   #aa0000
Brand Active:  #880000
Link:          #366cd9
Border:        #dddddd
Muted:         #666666
Circle Gold:   #fcc111
Success:       #377e36
```

### Example Component Prompts

- "Create a Target-style Add to cart button: a 48px-tall pill (9999px radius) with Bullseye red (`#cc0000`) fill, white text in Helvetica Neue 16/700, 14×24px padding. Hover deepens to `#aa0000`."
- "Build a Target masthead: full-width white bar with a 1px `#dddddd` bottom hairline, 88px tall. Bullseye logo flush left in `#cc0000`. Search bar centred (~700px wide, 48px tall, 9999px radius, white fill, 1px hairline border) with a magnifier icon on the right. Account / Lists / Cart utilities flush right in Helvetica Neue 14/400 ink."
- "Design a Target product card: white surface, 8px radius, 12px padding, no border. Stack: 1:1 thumbnail with `object-fit: cover` (lifestyle product shot), product title in 16/400 ink, 5-star row (Bullseye red filled, `#dddddd` empty) + review count in 14/400 link blue, current price in 18/700 with `tnum`, optional strikethrough original price in 14/400 muted, optional Target Circle gold tag, 'FREE shipping with $35 orders' inline green text."
- "Build a photographic hero band: full-bleed 1408px-wide lifestyle image (e.g., a family with shopping bags walking through autumn leaves). Copy in white Helvetica Neue 56/700 with -1.5px tracking sits in the lower-left corner — 'More smiles per dollar' — followed by a 9999px Bullseye red pill CTA: 'Shop the season'. No scrim, no overlay tint."
- "Design a PDP buy-box: white surface, 8px radius, 1px `#dddddd` border, hover-card shadow, 24px padding. Top: large price in 28/700 with `tnum` ('$24.99'). Strikethrough '$29.99' in 14/400 muted. Red 'Save $5.00' deal-tag callout. Fulfilment radio group: Pickup, Drive Up, Delivery, Shipping. Quantity stepper. Full-width Bullseye red Add to cart pill. Outline 'Add to list' pill in red. Target Circle 360 banner at the bottom."
- "Create a Target Circle member-exclusive tag: gold (`#fcc111`) fill, ink text in 11/700 uppercase 'TARGET CIRCLE OFFER', 4px radius, 4×8px padding. Anchored top-left of qualifying product cards."

### Iteration Guide

1. **Less is more.** If your composition feels busy, remove an element. Target's edge is restraint — clutter reads as Walmart, not Target.
2. **One brand colour.** Bullseye red (`#cc0000`) for everything brand. No secondary. The discipline is the brand.
3. **Helvetica Neue, no flourish.** No custom font. No display family. The fallback chain is the system. If the type starts to express, you've broken the brand.
4. **Photography is the colour.** If your hero feels weak, the answer is a better photo, not a louder layout.
5. **Pill CTAs at 48px.** 9999px radius, 14×24px padding, 16/700 white text on red. No exceptions.
6. **64–96px vertical padding.** If your section feels cramped, it is. Target trusts breath more than any peer.
7. **Tabular numerals on prices.** $24.99 and $19.99 align right-edge in the grid view.
8. **Star ratings in Bullseye red.** Yellow or gold reads as Amazon. Red on grey is Target.
