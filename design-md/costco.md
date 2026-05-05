---
name: Costco
tagline: Warehouse blue + signature red, Helvetica utilitarian — bulk-buying signage translated to web.
author: webdesignhot
source_url: https://www.costco.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [marketplace]
tags: [light, retail, marketplace, sans, dense, utilitarian, warehouse, e-commerce]
preview_swatch: ['#ffffff', '#005dab', '#e31837']
related: [walmart, amazon, target]
description: 'Costco''s storefront is the unapologetic web translation of its warehouse signage — a white canvas (`#ffffff`) anchored on **deep warehouse blue** (`#005dab`) chrome with the iconic **Costco red** (`#e31837`) carrying every primary CTA, the wordmark, and the membership-savings callouts. Type runs Helvetica at modest weights with no flourish — utility over aesthetic. The page is engineered for the value-conscious member shopping from a desktop browser, not for design awards: dense product grids, big rectangular product tiles, slim 4–6px corner radii (no pill CTAs — Costco resists fashionable rounding), and price callouts that mirror the in-store yellow-and-black warehouse signs. The result is the most utilitarian big-box site in the category — and the only one whose web design is a faithful translation of the physical store.'

colors:
  bg: '#ffffff'                  # default canvas
  bg-page: '#f4f4f4'             # alternate page floor
  surface: '#ffffff'
  surface-soft: '#f4f4f4'        # disabled fields, alt row
  surface-strong: '#e8e8e8'      # divider band
  surface-yellow: '#fff8d6'      # warehouse-sign yellow surface — savings bands
  surface-blue-soft: '#e3f0fa'   # informational banner surface
  masthead: '#005dab'            # Costco warehouse blue — the chrome
  masthead-deep: '#003e74'       # deeper blue for hover and footer
  masthead-active: '#002c52'     # pressed state
  brand: '#005dab'               # primary brand blue
  brand-deep: '#003e74'
  brand-darkest: '#002c52'
  costco-red: '#e31837'          # the wordmark red and CTA red
  costco-red-deep: '#b41027'     # deep red for hover
  costco-red-active: '#8c0c1f'   # pressed state
  warehouse-yellow: '#ffeb00'    # warehouse-sign yellow — used on price callouts
  warehouse-yellow-deep: '#fdd000'
  text: '#333333'                # primary ink
  text-strong: '#000000'         # heading ink at maximum punch
  text-muted: '#5e5e5e'          # secondary metadata
  text-soft: '#7d7d7d'           # caption text
  text-on-blue: '#ffffff'        # white on warehouse blue
  text-on-red: '#ffffff'         # white on Costco red
  text-on-yellow: '#000000'      # ink on warehouse yellow
  link: '#005dab'                # link colour matches masthead blue
  link-hover: '#003e74'          # darker hover blue
  link-visited: '#5e2a8c'        # purple visited
  border: '#cccccc'              # default 1px hairline
  border-soft: '#e0e0e0'         # editorial divider
  border-strong: '#999999'       # focus state hairline
  border-input: '#999999'        # form input outline
  rating-yellow: '#fdd000'       # star rating fill — warehouse yellow, not orange
  rating-empty: '#cccccc'        # empty star
  member-savings: '#e31837'      # "Member Only Item" / member-savings tag red
  online-only: '#005dab'         # "Online-Only" / "Limited Time" blue tag
  out-of-stock: '#7d7d7d'        # grey "Out of stock" tag
  scrim: 'rgba(0,0,0,0.5)'       # modal backdrop
  shadow-card: 'rgba(0,0,0,0.08)'
  shadow-elev: 'rgba(0,0,0,0.16)'
  success: '#3a8b00'             # in-stock confirmation green
  warning: '#cc6600'             # advisory amber
  warning-soft: '#fff7e6'
  danger: '#e31837'              # validation error matches Costco red
  info: '#005dab'

typography:
  display:
    family: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [700, 900]
    opentype-features: ['tnum']
  body:
    family: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'Menlo, Monaco, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    hero-banner:     { size: 48, weight: 900, lineHeight: 1.0,  tracking: '-1px',     family: display, opentype: ['tnum'], transform: uppercase }
    page-title:      { size: 32, weight: 700, lineHeight: 1.1,  tracking: '-0.5px',   family: display }
    section-head:    { size: 24, weight: 700, lineHeight: 1.2,  tracking: '0',        family: display }
    sub-section:     { size: 18, weight: 700, lineHeight: 1.25, tracking: '0',        family: body }
    product-title:   { size: 16, weight: 700, lineHeight: 1.33, tracking: '0',        family: body }
    product-title-md: { size: 14, weight: 700, lineHeight: 1.43, tracking: '0',        family: body }
    body-md:         { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',        family: body }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.38, tracking: '0',        family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.33, tracking: '0',        family: body }
    micro:           { size: 11, weight: 400, lineHeight: 1.27, tracking: '0',        family: body }
    price-display:   { size: 32, weight: 700, lineHeight: 1.0,  tracking: '-0.25px',  family: body, opentype: ['tnum'] }
    price-product:   { size: 22, weight: 700, lineHeight: 1.0,  tracking: '0',        family: body, opentype: ['tnum'] }
    price-strikethru: { size: 14, weight: 400, lineHeight: 1.0,  tracking: '0',        family: body, opentype: ['tnum'] }
    price-savings:   { size: 24, weight: 900, lineHeight: 1.0,  tracking: '-0.5px',   family: body, opentype: ['tnum'] }
    button-cta:      { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.02em',   family: body, transform: uppercase }
    nav-link:        { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0',        family: body }
    badge:           { size: 12, weight: 700, lineHeight: 1.0,  tracking: '0.04em',   family: body, transform: uppercase }
    member-tag:      { size: 13, weight: 700, lineHeight: 1.0,  tracking: '0.02em',   family: body, transform: uppercase }

radius:
  micro: 2
  sm: 4        # most surfaces — Costco resists rounding
  md: 6        # cards, panels
  lg: 8
  pill: 9999   # used very sparingly — only on pagination orbs

spacing:
  base: 4
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80]

layout:
  page-width: 1296
  prose-width: 720
  header-height: 88
  masthead-height: 60
  sub-nav-height: 40

components:
  button-cta:
    bg: '#e31837'
    color: '#ffffff'
    radius: 4
    padding: '12px 20px'
    height: 44
    font: button-cta
    use: 'Add to Cart, Sign In — every primary action. Solid red, square-ish corners (4px), uppercase label.'
  button-cta-hover:
    bg: '#b41027'
    color: '#ffffff'
    radius: 4
    use: 'Hover state — deeper red.'
  button-secondary:
    bg: '#ffffff'
    color: '#005dab'
    border: '2px solid #005dab'
    radius: 4
    padding: '10px 18px'
    height: 44
    use: 'Cancel, See more — blue outline secondary.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#005dab'
    use: '"Show more", text-only links — underlined on hover.'
  product-card:
    bg: '#ffffff'
    color: '#333333'
    radius: 6
    padding: '12px'
    border: '1px solid #cccccc'
    use: 'Listing tile — image-led, hairline-bordered, dense metadata stack.'
  search-bar:
    bg: '#ffffff'
    color: '#333333'
    radius: 4
    height: 40
    border: '1px solid #cccccc'
    focus-ring: '2px solid #005dab'
    use: 'Masthead search — square-ish 4px radius, full-width centred in masthead.'
  search-button:
    bg: '#005dab'
    color: '#ffffff'
    radius: '0 4px 4px 0'
    width: 60
    height: 40
    use: 'Right-edge blue tab inside the search bar — magnifier icon.'
  text-input:
    bg: '#ffffff'
    color: '#333333'
    radius: 4
    height: 40
    padding: '10px 14px'
    border: '1px solid #999999'
    focus: '2px solid #005dab'
    use: 'Form input — slim 4px radius, ink text.'
  star-rating:
    color-fill: '#fdd000'
    color-empty: '#cccccc'
    use: 'Five-star rating — warehouse yellow fill, grey empty.'
  member-only-tag:
    bg: '#e31837'
    color: '#ffffff'
    radius: 2
    padding: '4px 8px'
    use: 'Solid red "MEMBER ONLY ITEM" callout — uppercase white text.'
  online-only-tag:
    bg: '#005dab'
    color: '#ffffff'
    radius: 2
    padding: '4px 8px'
    use: 'Blue "ONLINE-ONLY" tag — same shape as member-only.'
  warehouse-savings-callout:
    bg: '#ffeb00'
    color: '#000000'
    radius: 4
    padding: '8px 12px'
    use: 'Warehouse-sign yellow savings band — "$200 OFF" big black text.'
  hero-banner:
    bg: '#005dab'
    color: '#ffffff'
    radius: 0
    padding: '32px 40px'
    use: 'Full-width blue promo band — white display headline, white CTA pill.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  cta-press: 'CTA bg deepens e31837 → 8c0c1f over 150ms on :active'
  card-hover: 'shadow-card appears + border thickens 1px → 1px #999999 over 240ms — no transform'
  search-focus: '2px blue ring fades in over 200ms'
  reduced-motion: 'respects prefers-reduced-motion: reduce — colour transitions remain, transforms suppressed.'

breakpoints:
  mobile: 600
  tablet: 1024
  desktop: 1280
  wide: 1296

shadows:
  ambient: 'none — Costco stays mostly flat'
  hover-card: 'rgba(0,0,0,0.08) 0 2px 8px'
  modal: 'rgba(0,0,0,0.16) 0 8px 24px'
  ring: '0 0 0 2px #005dab'

accessibility:
  contrast-text-on-bg: 12.6          # #333333 on #ffffff — AAA
  contrast-text-on-cta: 5.6          # #ffffff on #e31837 — AA body / AAA large
  contrast-text-on-blue: 7.5         # #ffffff on #005dab — AAA
  contrast-link-on-bg: 7.5           # #005dab on #ffffff — AAA
  contrast-muted-on-bg: 7.0          # #5e5e5e on #ffffff — AAA
  contrast-yellow-savings: 18.0      # #000000 on #ffeb00 — AAA — the warehouse-sign signature
  focus-ring: '2px solid #005dab + 2px outline offset'
  reduced-motion-honored: true
  touch-target-min: 44               # most CTAs hit 44×44 (slightly below typical 48)
  keyboard-nav: 'Tab moves masthead → search → category nav → main grid → footer; arrow keys inside category mega-menu.'

dark-mode: null   # No public-web dark mode. Costco.com is light-only.
---

## 1. Visual Theme & Atmosphere

Costco's storefront is the unapologetic web translation of its warehouse signage — utilitarian, dense, member-coded, and engineered for the value-conscious shopper rather than for design awards. The base canvas is white (`#ffffff`) with a soft grey (`#f4f4f4`) page floor, anchored on the deep **warehouse blue** (`#005dab`) masthead and accented by the iconic **Costco red** (`#e31837`) — the wordmark colour and the colour every primary CTA wears. A third loud voltage appears on savings callouts: **warehouse yellow** (`#ffeb00`) with black text, a direct visual rhyme of the laminated yellow-and-black price tags hung above warehouse aisles.

Type runs **Helvetica Neue** at no-flourish modest weights — page titles 32px / 700, body 14px / 400, button labels 14px / 700 uppercase with 0.02em tracking. There is no custom typeface, no display family, no expressive flourishes. Helvetica's neutrality is the design intent: Costco does not want the type to draw attention to itself; the prices do that. Body type sits at 14px (smaller than Target's 16px), reinforcing the information-density philosophy.

The chromatic identity is a three-voltage trio: **warehouse blue** for chrome and brand, **Costco red** for primary CTA and member-savings, and **warehouse yellow** for big-savings callouts. There is no fourth colour — the rest of the page is white, ink, and grey. The colour pairings are consciously perceived as un-fashionable by design-trade audiences: Costco optimises for the recognisable warehouse aesthetic, not for matching contemporary peer sites.

Shape language is intentionally **square-ish**. CTAs sit at 4px radius (not pill); cards round at 6px; the search bar is a 4px-radius rectangle with a blue search button on the right edge. There are no pill CTAs anywhere in the storefront — Costco resists the fashionable rounding that Walmart, Target, and Etsy lean into. The square-corner discipline reads as utilitarian, retail-warehouse-coded, and slightly dated by 2025 standards — and Costco does not care. Shadows are minimal; most surfaces are flat with a single hover-card lift on tiles.

The page reads as **the warehouse store, online**. Massive savings banners, big yellow price callouts, dense product grids, and a footer crowded with member-service links — every element echoes a physical Costco's signage and end-cap merchandising logic. The result is the most utilitarian big-box site in the category, and the only one whose web design is a faithful translation of the physical store.

**Key Characteristics:**
- Three-voltage palette: warehouse blue (`#005dab`) chrome + Costco red (`#e31837`) CTA + warehouse yellow (`#ffeb00`) savings
- Helvetica Neue at modest weights — no custom typeface, body 14/400, buttons 14/700 uppercase
- Square-ish 4–6px corners — no pill CTAs anywhere in the storefront
- Costco red CTA at 4px radius, 14×20px padding, 44px height, uppercase white label
- Warehouse-yellow savings bands with black text — the laminated price tag rendered as web component
- Star ratings render in warehouse yellow on grey — never orange (the only mass-marketplace using yellow here)
- Member-only and Online-only tags use saturated red and blue boxes, never pills
- Generous footer with five-column member-services link grid — the most utilitarian footer in the category

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): default page floor, every product tile, every form surface
- **Page Floor** (`#f4f4f4`): alternate band ground
- **Ink** (`#333333`): primary text colour
- **Heading Ink** (`#000000`): used on hero display copy and warehouse-yellow savings callouts where Costco wants maximum punch

### Brand & Dark
- **Warehouse Blue** (`#005dab`): the masthead, primary brand chrome, secondary CTA outline, link colour
- **Brand Deep** (`#003e74`): hover state on chrome and footer ground
- **Brand Active** (`#002c52`): pressed state, deepest editorial accent

### Costco Red
- **Costco Red** (`#e31837`): the wordmark red and primary CTA fill — the brand's loudest moment
- **Costco Red Deep** (`#b41027`): hover state on red CTAs
- **Costco Red Active** (`#8c0c1f`): pressed state

### Warehouse Yellow
- **Warehouse Yellow** (`#ffeb00`): the laminated price-tag yellow used on big savings callouts ("$200 OFF") with black text
- **Warehouse Yellow Deep** (`#fdd000`): the slightly darker yellow used for star-rating fills

### Accent — Member System
- **Member Savings** (`#e31837`): "Member Only Item", "Member Savings", "Executive Member Reward" — same red as the brand
- **Online Only** (`#005dab`): "Online-Only", "Limited Time" — same blue as the brand
- **Out of Stock** (`#7d7d7d`): "Out of stock" tag

### Interactive
- **Link** (`#005dab`): default inline link — same as brand blue
- **Link Hover** (`#003e74`): darker hover blue
- **Visited** (`#5e2a8c`): purple visited state
- **Disabled** (`#999999`): disabled text and outline
- **Selected** (`#005dab`): selected radio / checkbox / tab fill

### Neutral Scale
- **Ink** (`#333333`) — primary text
- **Heading** (`#000000`) — hero display, warehouse-yellow savings text
- **Muted** (`#5e5e5e`) — secondary metadata
- **Soft** (`#7d7d7d`) — caption text
- **Disabled** (`#999999`) — disabled state text
- **Border** (`#cccccc`) — default 1px hairline
- **Border Soft** (`#e0e0e0`) — editorial dividers
- **Border Strong** (`#999999`) — focus state hairline on inputs

### Surface & Borders
- **Canvas** (`#ffffff`) — default
- **Soft** (`#f4f4f4`) — disabled fields, alternate row, page floor
- **Strong** (`#e8e8e8`) — divider band between major sections
- **Yellow Surface** (`#fff8d6`) — softened warehouse-yellow band ground
- **Blue Soft Surface** (`#e3f0fa`) — informational banner surface

### Shadow Colors
Costco stays mostly flat. Hover-card shadow is single-layer neutral grey at 8% — same intensity as Walmart and Etsy.

- `rgba(0,0,0,0.08) 0 2px 8px` — hover-card lift
- `rgba(0,0,0,0.16) 0 8px 24px` — modal drop

### Semantic
- **Success Green** (`#3a8b00`): "In Stock", "Order Placed"
- **Warning Amber** (`#cc6600`): advisory banners
- **Danger Red** (`#e31837`): validation errors — same hex as Costco red (Costco accepts the small risk because errors are rare and accompanied by error copy)
- **Info Blue** (`#005dab`): informational banners — same as brand blue

## 3. Typography Rules

### Font Family

**Primary**: `Helvetica Neue`. Fallback chain: `Helvetica, Arial, sans-serif`. Costco uses no custom typeface — Helvetica Neue is the entire system. Inter is the closest open-source substitute.

**Mono**: not part of the storefront brand system.

**OpenType features**: `tnum` is enabled on prices, savings callouts, ratings, and shipping countdowns. No `ss01` discipline.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-banner | Helvetica Neue | 48 | 900 | 1.0 | -1px | uppercase | "MEMBER ONLY SAVINGS" promo banner |
| page-title | Helvetica Neue | 32 | 700 | 1.1 | -0.5px | — | Category page H1 |
| section-head | Helvetica Neue | 24 | 700 | 1.2 | 0 | — | "What's New", "Member Favorites" |
| sub-section | Helvetica Neue | 18 | 700 | 1.25 | 0 | — | Sub-section heads on PDP |
| product-title | Helvetica Neue | 16 | 700 | 1.33 | 0 | — | PDP main product title — bold weight (Costco bolds product titles to read as confident merchandise) |
| product-title-md | Helvetica Neue | 14 | 700 | 1.43 | 0 | — | Grid product card titles — also bold, distinguishing from peer marketplaces |
| body-md | Helvetica Neue | 14 | 400 | 1.43 | 0 | — | Default body |
| body-sm | Helvetica Neue | 13 | 400 | 1.38 | 0 | — | Secondary metadata |
| caption | Helvetica Neue | 12 | 400 | 1.33 | 0 | — | Footer micro-text |
| micro | Helvetica Neue | 11 | 400 | 1.27 | 0 | — | Footer legal |
| price-display | Helvetica Neue | 32 | 700 | 1.0 | -0.25px | tnum | PDP main price ("$1,299.99") |
| price-product | Helvetica Neue | 22 | 700 | 1.0 | 0 | tnum | Grid tile current price |
| price-strikethru | Helvetica Neue | 14 | 400 | 1.0 | 0 | tnum | Original price strikethrough |
| price-savings | Helvetica Neue | 24 | 900 | 1.0 | -0.5px | tnum | "$200 OFF" big bold savings — the warehouse-sign moment |
| button-cta | Helvetica Neue | 14 | 700 | 1.0 | 0.02em | uppercase | Primary CTA label — uppercase tracking |
| nav-link | Helvetica Neue | 14 | 700 | 1.0 | 0 | — | Masthead category labels — bold weight |
| badge | Helvetica Neue | 12 | 700 | 1.0 | 0.04em | uppercase | "MEMBER ONLY", "ONLINE-ONLY" |
| member-tag | Helvetica Neue | 13 | 700 | 1.0 | 0.02em | uppercase | "MEMBER ONLY ITEM" wordmark |

### Principles

- **Helvetica Neue, full stop.** No custom typeface, no display family. The fallback chain is the system.
- **Product titles bold (700).** Where Amazon and Etsy keep product titles at 400/500, Costco bolds them — the merchandise needs to read as confident.
- **Button CTAs uppercase with 0.02em tracking.** Costco uses uppercase labels on red CTAs to mirror warehouse-signage typography.
- **Big savings callouts at 900 weight.** "$200 OFF" renders at 24/900 with -0.5px tracking — the warehouse price-tag aesthetic.
- **Tabular numerals on every price.** `tnum` everywhere money lives.
- **Body at 14/400.** Smaller than typical SaaS (16/400) — Costco prioritises information density.
- **No italic, no oblique.** Helvetica Neue oblique exists but never appears on the storefront.

## 4. Component Stylings

### Buttons

**`button-cta`** — the canonical Add to Cart. Solid Costco red (`#e31837`) fill, white text in 14/700 uppercase with 0.02em tracking, **4px radius** (not pill), 12×20px padding, 44px height. Hover deepens to `#b41027`. Active to `#8c0c1f`. The square-ish corners are the brand's deliberate utilitarian signal.

**`button-secondary`** — white fill, 2px warehouse blue (`#005dab`) outline, blue text in 14/700 uppercase. Same 4px radius and 44px height.

**`button-tertiary-text`** — plain blue text, no surface. Underlined on hover.

### Cards

**`product-card`** — listing tile. White surface, 6px radius, 12px padding, 1px `#cccccc` hairline border (Costco uses borders where peers omit them — the warehouse-grid feel). Stack: 1:1 thumbnail with `object-fit: contain` on white, optional Member-Only or Online-Only tag floating top-left, product title in 14/700 ink (bold weight), star row + review count, current price in 22/700 with `tnum`, optional strikethrough original price, optional warehouse-yellow savings callout ("$200 OFF" in 24/900), Add to Cart red square button at the bottom.

**`pdp-buy-box`** — sticky right-rail card on PDP. White, 6px radius, 1px `#cccccc` border, hover-card shadow, 24px padding. Stack: large `price-display` (32/700) with optional strikethrough, "$200 OFF" warehouse-yellow savings band, "Member Savings: $150" red callout, "Online-Only" blue tag, quantity stepper, full-width red Add to Cart, "Add to List" outline secondary, "Ships in 5–7 business days" small print.

**`hero-banner`** — full-width warehouse blue (`#005dab`) ground, no rounded corners, 32×40px padding. Display headline in 48/900 uppercase white. Sub-copy in 18/400 white. White-with-blue-text CTA at the bottom.

**`featured-warehouse-deal`** — special promo card with warehouse-yellow band stretching across the top of the tile. Black "$X OFF" big bold text in the yellow band, then the standard product card stack beneath.

### Badges, Tags, Pills

**`member-only-tag`** — solid Costco red (`#e31837`) box, white uppercase "MEMBER ONLY ITEM" text in 13/700 with 0.02em tracking, 2px radius, 4×8px padding. The most distinctive seller-meta moment on Costco — anchors top-left of qualifying tiles.

**`online-only-tag`** — solid warehouse blue (`#005dab`) box, white uppercase "ONLINE-ONLY" text. Same shape as member-only.

**`limited-time-tag`** — same blue box, "LIMITED TIME" white text.

**`warehouse-savings-callout`** — warehouse yellow (`#ffeb00`) fill, black text in 24/900 ("$200 OFF"), 4px radius, 8×12px padding. The most distinctive price-tag moment — the laminated warehouse signage rendered as web component.

**`out-of-stock-tag`** — grey (`#7d7d7d`) fill, white "OUT OF STOCK" text, 2px radius.

### Inputs / Forms

**`text-input`** — white surface, 1px `#999999` hairline (darker than typical for the warehouse-utility feel), 4px radius, 40px height, 10×14px padding. Stacked label above in `caption` muted. On focus the border thickens to 2px warehouse blue.

**`search-bar`** — masthead search. White fill, 4px radius, 40px height, 1px `#cccccc` hairline. Right edge terminates with a 60×40 warehouse blue (`#005dab`) `search-button` carrying a white magnifier icon. Square-ish corners — Costco resists the pill discipline that peers adopt.

**`select`** — same look as `text-input` with a chevron indicator.

### Navigation

**`masthead`** — full-width white bar with a 1px hairline bottom and a thin warehouse-blue (`#005dab`) top accent strip, 88px height. Wordmark flush left in red and blue ("Costco" with the red C and blue OSTCO). Search bar centred. Account / Lists / Cart utilities flush right in `nav-link` (14/700) blue.

**`sub-nav`** — slim 40px band beneath the masthead, white fill, 1px hairline bottom. Holds department links: "Grocery", "Electronics", "Office", "Outdoor Living", "Pharmacy". 14/700 ink labels with `:hover` flipping to warehouse blue.

**`mega-menu-flyout`** — opens from category dropdown; white surface, 6px radius, 1px hairline, hover-card shadow. Multi-column nav of category trees with 14/400 ink labels.

**`breadcrumb`** — `text-muted` (`#5e5e5e`) with `>` separators, 13/400.

### Star Rating

**`star-rating`** — 5-icon row, fill `#fdd000` (warehouse yellow) for filled, `#cccccc` for empty. Half-stars rendered with clipped half-fill. Followed by a blue-link review count: "(2,847)".

### Modals & Toasts

**`modal`** — centred dialog over a 50%-opacity ink scrim. White surface, 6px radius (matching cards), 1px hairline border, modal shadow. Close X anchored top-right.

**`toast`** — bottom-centre notifications. White fill, 4px radius, 1px hairline, ink text, 16×24px padding.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80`
- Section padding (vertical): **40–64px** between major bands — denser than Target (64–96px) but more breath than Amazon (22–28px)
- Card internal padding: **12px** for product tiles; **24px** for PDP buy box; **32–40px** for hero banner
- Gutters: **16px** between product tiles in grid view; **40–64px** between major page bands; **8px** between adjacent CTAs

### Grid & Container

- Max content width: **1296px** centred
- Homepage: 4-column tile grid at desktop with category navigation rail on the left
- Search results: **4–5 column** product grid at desktop with 16px gutters
- PDP: 2-column with image gallery left (~50%), buy box right (~38%)
- Footer: **5-column** member-services link grid — the most utilitarian footer in the category

### Whitespace Philosophy

Costco gives major sections moderate breath (40–64px vertical) but compresses the product grids — tiles run 4–5 across with 16px gutters and 1px borders that visually pack the page. The footer is intentionally dense, with five columns of member-service links because Costco assumes its members are looking for specific information (membership renewal, return policy, warehouse hours) rather than browsing.

### Section Cadence

Costco alternates between **white bands** (default body) and **warehouse-blue or warehouse-yellow promo bands** (full-width hero promos, member-savings banners). The blue band uses warehouse blue ground with white display copy; the yellow band uses warehouse yellow with black display copy.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Member-Only and Online-Only tags |
| Small | 4px | CTAs, search bar, form inputs, savings callouts |
| Card | 6px | Product tiles, modals |
| Soft | 8px | Larger feature cards (rare) |
| Pill | 9999px | Used very sparingly — only on pagination orbs and certain filter chips |

Costco's defining shape choice is **the absence of pill CTAs**. Where Walmart, Target, and Etsy use 9999px pills, Costco stays at 4px square-ish corners. This is deliberate — pill CTAs read as fashionable consumer brand; square CTAs read as utilitarian warehouse retail. The brand position: rounded fashion does not match the warehouse-store aesthetic.

There are no compound radii in mainline UI.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer, all editorial bands (~95% of surfaces) |
| 1 — Hover Card | `rgba(0,0,0,0.08) 0 2px 8px` | Product tiles on hover, dropdowns, mega-menu |
| 2 — Modal | `rgba(0,0,0,0.16) 0 8px 24px` | Centred dialogs |
| 3 — Scrim | `rgba(0,0,0,0.5)` | Modal backdrop |

### Shadow Philosophy

Costco stays mostly flat. Depth comes from **the warehouse blue chrome** and **the 1px hairline borders on product tiles** — the borders are unusual among peers (Amazon, Target, Etsy use no card borders) but reinforce the warehouse-grid utility aesthetic. Hover-card shadow is single-layer neutral grey.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Hover colour swap, focus ring fade-in |
| Standard | 240ms | Card hover lift + border thicken, modal enter |
| Slow | 320ms | Hero carousel slide, page transitions |

### Per-Component Recipes

- **CTA hover**: background transitions from `#e31837` to `#b41027` over 150ms.
- **CTA press**: deepens to `#8c0c1f` for 150ms on `:active`.
- **Product card hover**: shadow appears (`rgba(0,0,0,0.08) 0 2px 8px`) and the 1px `#cccccc` border thickens to `#999999` over 240ms. No transform — Costco resists the lift gimmick.
- **Search-bar focus**: 2px blue ring fades in over 200ms.
- **Mega-menu flyout**: 240ms ease-out fade + 4px slide-down.
- **Modal enter**: scrim fades in over 200ms, dialog opacity 0 → 1 over 240ms emphasized.

### Page Transitions

Page-to-page navigation uses no transition.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Hover transitions degrade to opacity-only.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #333333 ink on #ffffff canvas | 12.6 | AAA |
| #ffffff on #e31837 CTA | 5.6 | AA body / AAA large |
| #ffffff on #005dab masthead | 7.5 | AAA |
| #005dab link on #ffffff | 7.5 | AAA |
| #5e5e5e muted on #ffffff | 7.0 | AAA |
| #000000 on #ffeb00 warehouse yellow | 18.0 | AAA — the warehouse-sign signature |
| #ffffff on #b41027 CTA hover | 7.4 | AAA |

The black-on-warehouse-yellow pair (`#000000` on `#ffeb00`) hits **18.0 contrast — the highest contrast pair in the system**. This is the price-tag aesthetic: warehouse-aisle signage is engineered to read at distance under fluorescent light, and the digital pair preserves that perceptual punch.

### Focus Indicators

Focus ring is **2px solid `#005dab`** (warehouse blue) with 2px outline-offset.

### ARIA Patterns

- **Search bar**: `role="search"`. Input has `aria-label="Search Costco.com"`.
- **Product card**: entire tile wrapped in `<a>` with verbose `aria-label`.
- **Star rating**: text-equivalent (`aria-label="4.7 out of 5 stars based on 2,847 reviews"`).
- **Member-only tag**: `aria-label="Member-only item — Costco membership required to purchase"`.
- **Mega-menu flyout**: `role="menu"` with `role="menuitem"`; arrow keys navigate, Escape closes.

### Keyboard Navigation

- Masthead: Tab moves logo → search → account → lists → cart
- Search results: Tab through tiles in document order
- PDP: Tab through gallery → variant selector → quantity → Add to Cart

### Screen Reader Hints

Verbose `aria-label` on icon-only buttons. The cart icon has `aria-label="Cart, 2 items"`. Member-Only tags include the membership-requirement explanation.

### Reduced Motion

All transitions degrade to opacity-only.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Masthead collapses to logo + cart + hamburger; search bar moves to its own row; product grid 2-up |
| Tablet | 600–1024px | Full masthead; product grid 3-up; sub-nav hides |
| Desktop | 1024–1280px | Sub-nav with department links; product grid 4-up |
| Wide | 1280–1296px | Content caps at 1296px; product grid 5-up |

### Touch Targets

- Primary CTAs: 44px height — meets AA (slightly below the 48px AAA threshold)
- Search bar: 40×40px — borderline AA, compensated by 8px padding around the magnifier
- Product tile: entire 240×360px tile is tappable

### Collapsing Strategy

- Masthead: utilities (account, lists) hide first
- Search bar: jumps from inline to its own row at <1024px
- Product grid: 5 → 4 → 3 → 2; 16px gutters compress to 12px → 8px
- PDP: 2-column splits to single-column stack at <1024px

### Image Behavior

Product thumbnails use `aspect-ratio: 1/1` with `object-fit: contain` (Costco prefers `contain` for product photography on white seamless — much of the catalogue is product-on-white).

### Container Queries

Not formally used.

## 11. Content & Voice

### Tone

Direct, member-focused, value-coded. Costco's voice is "the warehouse manager who knows the product and respects your time." Headlines lead with savings ("Member-Only Savings", "$200 Off This Week") and bulk-buying advantages ("Buy in Bulk and Save"). The brand consistently positions itself as the **member's value advocate** — there is no aspirational copy, no lifestyle framing, just the price and the deal.

### Microcopy Patterns

- **Button verbs**: "Add to Cart", "Sign In", "Renew Membership", "View Details" — direct and outcome-named
- **Error message recipe**: `[What went wrong] + [How to fix]` — direct
- **Success confirmations**: "Added to Cart", "Order Placed"
- **Field labels**: short and direct — "Membership Number", "ZIP Code"
- **Stock urgency**: "While supplies last" — the warehouse-merchandising standard

### Empty States

Empty cart: "Your Cart is empty. Browse Today's Featured Items." — direct.

Empty list: "Your List is empty. Add items as you shop."

Empty search: "No results for [query]. Check spelling or browse by category."

### CTA Verb Conventions

- Primary: **"Add to Cart"** (default), **"Sign In"**, **"Renew Membership"**
- Membership: **"Become a Member"** (signup), **"Renew Now"** (renewal)
- Save: **"Add to List"** (Costco uses "List" rather than wishlist)
- Avoided: "Buy Now", "Submit", "Click here"

## 12. Dark Mode & Theming

**Light-only on the public web.** Costco.com is light-only. The Costco mobile app is also predominantly light-themed (no system-controlled dark mode at the time of writing). The brand position: warehouse blue chrome and red CTA work best on white, and the warehouse-yellow savings callouts depend on the bright white surface for chromatic punch.

## 13. Lineage & Influences

Costco's visual lineage runs through one dominant tradition: **physical-warehouse retail signage**. The wordmark dates to the 1983 founding (and the 1993 merger with Price Club) and has remained essentially unchanged for 30+ years. The web design is a faithful translation of the in-warehouse signage system — laminated yellow-and-black price tags, blue-and-red department signs, dense hand-tagged price stickers — engineered for member loyalty rather than consumer aspirational marketing.

Where Walmart and Target invested in custom typefaces (Bogle, none — they use Helvetica Neue too), Costco has never commissioned a custom typeface. Helvetica Neue carries everything. The square-ish corner discipline reflects a deliberate refusal of consumer-tech aesthetic conventions: rounded pills read as Apple, Walmart, or Target — and Costco is none of those.

What Costco rejects: pill CTAs, custom typefaces, dark mode, decorative gradients, lifestyle photography (Costco uses product-on-white seamless throughout), and any animation that delays the click. The brand position is **anti-fashion utility**: Costco UI looks dated to designers because Costco optimises for member retention and conversion, not for design awards.

**Influences:**
- Mid-century discount retail signage (the Price Club / Costco signage tradition since 1983)
- Helvetica Neue — typographic neutrality lineage
- IKEA — bulk-merchandise web translation, [ikea.com](https://ikea.com)
- Sam's Club (peer) — direct warehouse-retail competitor
- BJ's Wholesale Club (peer) — same warehouse aesthetic
- Walmart.com (peer) — same big-box density discipline

## 14. Do's and Don'ts

**Do**
- Anchor the masthead in warehouse blue (`#005dab`) with the iconic Costco wordmark (red C, blue OSTCO)
- Use Costco red (`#e31837`) for primary CTA fills with white uppercase 14/700 labels
- Use 4–6px square-ish corners on every interactive surface — no pills
- Render savings callouts in warehouse yellow (`#ffeb00`) with black 24/900 text — the laminated price-tag aesthetic
- Use Helvetica Neue at modest weights — no custom typeface
- Bold (700) product card titles — Costco's distinguishing typographic move
- Render star ratings in warehouse yellow on grey — never orange
- Use Member-Only red and Online-Only blue tags — saturated boxes, never pills
- Lean on `object-fit: contain` for product thumbnails (white seamless)
- Use bordered product cards (`1px #cccccc`) — the warehouse-grid feel

**Don't**
- Don't use pill CTAs — Costco resists the consumer-tech rounding discipline
- Don't introduce a custom typeface — Helvetica Neue is the system
- Don't use lifestyle photography on product tiles — white-seamless product shots only
- Don't use orange or gold for star ratings — warehouse yellow `#fdd000` always
- Don't add multi-layer atmospheric shadows — Costco stays single-layer flat
- Don't use exclamation marks — the voice is direct and value-coded, not playful
- Don't use Member-Only or Online-Only as page-wide bands — they are tag-scale only
- Don't tighten product card titles below 14/700 — bold weight is the brand
- Don't replace the warehouse-yellow savings callout with a different colour — yellow is the price-tag heritage
- Don't say "Buy Now" — Costco prefers "Add to Cart" → checkout

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #ffffff
Page Floor:       #f4f4f4
Ink:              #333333
Warehouse Blue:   #005dab
Brand Deep:       #003e74
Costco Red:       #e31837
Red Deep:         #b41027
Warehouse Yellow: #ffeb00
Yellow Star:      #fdd000
Border:           #cccccc
Muted:            #5e5e5e
```

### Example Component Prompts

- "Create a Costco-style Add to Cart button: 44px-tall rectangle (4px radius) with Costco red (`#e31837`) fill, white text in Helvetica Neue 14/700 uppercase with 0.02em tracking, 12×20px padding. Hover deepens to `#b41027`. No pill — square-ish corners are the brand."
- "Build a Costco masthead: full-width white bar with a thin warehouse-blue (`#005dab`) top accent strip and a 1px `#cccccc` bottom hairline, 88px tall. Costco wordmark flush left (red C + blue OSTCO). Search bar centred (~600px wide, 40px tall, 4px radius, white fill, 1px `#cccccc` hairline) terminating in a 60×40 warehouse-blue search button with a white magnifier icon. Account / Lists / Cart utilities flush right in 14/700 ink-blue."
- "Design a Costco product card: white surface, 6px radius, 12px padding, 1px `#cccccc` hairline border (the warehouse-grid feel). Stack: 1:1 thumbnail with `object-fit: contain`, optional Member-Only red box top-left, product title in 14/700 ink (bold weight), 5-star row (warehouse yellow `#fdd000` filled, `#cccccc` empty) + review count in 13/400 ink-blue, current price in 22/700 with `tnum`, optional strikethrough original price, optional warehouse-yellow savings callout '$200 OFF' in 24/900 black, red Add to Cart at the bottom."
- "Build a member-only tag: solid Costco red (`#e31837`) box, white uppercase 'MEMBER ONLY ITEM' text in Helvetica Neue 13/700 with 0.02em tracking, 2px radius, 4×8px padding. Anchored top-left of qualifying product cards."
- "Create a warehouse savings callout: warehouse yellow (`#ffeb00`) fill, black text in Helvetica Neue 24/900 ('$200 OFF'), 4px radius, 8×12px padding. Anchor it to the product image bottom-right or as a band stretching across the top of a featured warehouse-deal card."
- "Design a hero banner: full-width warehouse blue (`#005dab`) ground, no rounded corners, 32×40px padding. Display headline in Helvetica Neue 48/900 uppercase white. Sub-copy in 18/400 white. White-with-blue-text CTA at the bottom — square 4px corners, 14/700 uppercase 'SHOP MEMBER SAVINGS'."

### Iteration Guide

1. **Square corners, not pills.** If your CTA has 9999px radius, you've drifted into Walmart or Target territory. Costco is 4px square-ish.
2. **Three-voltage palette.** Warehouse blue chrome + Costco red CTA + warehouse yellow savings. No fourth colour.
3. **Bold product titles.** 14/700, not the 14/400 of Amazon or Etsy. The merchandise reads as confident.
4. **Helvetica Neue, no flourish.** No custom font. No display family.
5. **Bordered cards.** 1px `#cccccc` on every product tile — the warehouse-grid feel. Borderless tiles read as Etsy.
6. **Warehouse yellow on big savings.** `$200 OFF` in 24/900 black on `#ffeb00`. Any other colour breaks the price-tag heritage.
7. **Star ratings in warehouse yellow.** Orange reads as Amazon; gold reads as cheap. Yellow `#fdd000` is Costco.
8. **Uppercase tracking on CTA labels.** 14/700 uppercase with 0.02em tracking — the warehouse-signage typographic signature.
