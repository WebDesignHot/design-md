---
name: Walmart
tagline: Spark-yellow on big-box blue, Antonio Display + Bogle sans — everyday low prices made loud.
author: webdesignhot
source_url: https://www.walmart.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [marketplace]
tags: [light, retail, marketplace, sans, dense, friendly, loud, e-commerce]
preview_swatch: ['#ffffff', '#0071ce', '#ffc220']
related: [amazon, stripe, shopify]
description: 'Walmart''s storefront is unapologetically loud — a bright canvas anchored on the signature **Bentonville blue** (`#0071ce`) chrome with the **Spark yellow** (`#ffc220`) sunburst doing the eye-catching work. Type runs the custom **Bogle** sans (an in-house Trade Gothic descendant) for body and Walmart''s house display family at chunky 700–900 weights for "Save Money. Live Better." The CTA is solid blue with white text; the rollback price tag uses `#cc0d20` red on yellow. Shape language is rounded but unfussy — pill CTAs at 100px radius, 8px cards, soft 16px featured banners. The page is engineered for value-conscious clarity: massive promo banners, big yellow price callouts, dense product grids, no minimalism, no apology.'

colors:
  bg: '#ffffff'                  # default canvas
  bg-page: '#f2f8fd'             # soft page floor between bands
  surface: '#ffffff'
  surface-soft: '#f2f2f2'        # disabled fields, alternate row
  surface-strong: '#dde2e6'      # divider band
  surface-yellow: '#fff5d6'      # rollback / savings surface tint
  surface-blue-light: '#e3f1fc'  # informational banner surface
  masthead: '#0071ce'            # Bentonville blue — the chrome anchor
  masthead-deep: '#004f9a'       # deeper blue for hover and footer
  masthead-active: '#003b76'     # pressed state
  brand: '#0071ce'               # primary brand blue
  brand-deep: '#004f9a'          # secondary darker blue
  brand-darkest: '#001e60'       # legacy "Walmart blue" deepest
  spark: '#ffc220'               # Spark yellow — the sunburst, accent
  spark-hover: '#fdbb1f'         # hover variant
  spark-deep: '#f7a304'          # deeper yellow-amber for emphasis
  text: '#2a2a2a'                # primary ink — soft black
  text-strong: '#000000'         # strongest heading ink
  text-muted: '#5e6166'          # secondary metadata
  text-soft: '#74767c'           # caption text
  text-on-dark: '#ffffff'        # masthead text
  text-on-yellow: '#2a2a2a'      # ink on Spark yellow
  text-on-blue: '#ffffff'        # white on Bentonville blue
  link: '#004f9a'                # default link colour — same as masthead-deep
  link-hover: '#0071ce'          # hover lightens to brand blue
  border: '#d6dbdf'              # default 1px hairline
  border-soft: '#e6e9ec'         # editorial divider
  border-strong: '#74767c'       # focus state hairline
  border-input: '#a6a6a6'        # form input outline
  rollback: '#cc0d20'            # Rollback red — the iconic price tag
  rollback-deep: '#a8081a'       # darker red on hover
  clearance: '#cc0d20'           # Clearance same red as Rollback
  great-value: '#0071ce'         # Great Value brand uses brand blue
  freshness-green: '#76b82a'     # "Now Fresh" / Walmart+ green tag
  walmart-plus-pink: '#ed1c79'   # Walmart+ membership accent (when featured)
  rating-yellow: '#ffc220'       # star rating fill matches Spark
  rating-empty: '#d6dbdf'        # empty star
  scrim: 'rgba(0,0,0,0.6)'       # modal backdrop
  shadow-card: 'rgba(0,0,0,0.08)'
  shadow-elev: 'rgba(0,0,0,0.16)'
  success: '#3a8b00'             # in-stock / order success green
  warning: '#cc6700'             # advisory amber
  warning-soft: '#fff7e6'
  danger: '#cc0d20'              # validation error matches Rollback red
  info: '#0071ce'

typography:
  display:
    family: '"Antonio", "Walmart Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [700, 800, 900]
    opentype-features: ['tnum']
  body:
    family: '"Bogle", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'Menlo, Monaco, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    hero-banner:     { size: 64, weight: 900, lineHeight: 1.0,  tracking: '-1px',     family: display, opentype: ['tnum'], transform: uppercase }
    page-title:      { size: 36, weight: 800, lineHeight: 1.1,  tracking: '-0.5px',   family: display }
    section-head:    { size: 24, weight: 700, lineHeight: 1.2,  tracking: '0',        family: body }
    sub-section:     { size: 20, weight: 700, lineHeight: 1.25, tracking: '0',        family: body }
    product-title:   { size: 18, weight: 500, lineHeight: 1.33, tracking: '0',        family: body }
    product-title-md: { size: 16, weight: 400, lineHeight: 1.43, tracking: '0',        family: body }
    body-md:         { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',        family: body }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.38, tracking: '0',        family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.33, tracking: '0',        family: body }
    micro:           { size: 11, weight: 400, lineHeight: 1.27, tracking: '0',        family: body }
    price-display:   { size: 32, weight: 700, lineHeight: 1.0,  tracking: '-0.5px',   family: body, opentype: ['tnum'] }
    price-product:   { size: 22, weight: 700, lineHeight: 1.0,  tracking: '0',        family: body, opentype: ['tnum'] }
    price-cents:     { size: 12, weight: 700, lineHeight: 1.0,  tracking: '0',        family: body, opentype: ['tnum'] }
    price-strikethru: { size: 13, weight: 400, lineHeight: 1.0,  tracking: '0',        family: body, opentype: ['tnum'] }
    button-cta:      { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0',        family: body }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',        family: body }
    badge:           { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.04em',   family: body, transform: uppercase }
    rollback-tag:    { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.02em',   family: body, transform: uppercase }

radius:
  micro: 2
  sm: 4
  md: 8        # default cards
  lg: 16       # featured banners
  xl: 24       # hero promo cards
  pill: 9999   # CTAs, search bar — Walmart's signature pill

spacing:
  base: 4
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

layout:
  page-width: 1408
  prose-width: 720
  header-height: 88
  masthead-height: 56
  sub-nav-height: 40

components:
  button-cta:
    bg: '#0071ce'
    color: '#ffffff'
    radius: 9999
    padding: '14px 24px'
    height: 48
    font: button-cta
    use: 'Add to cart, Sign in — every primary action.'
  button-cta-hover:
    bg: '#004f9a'
    color: '#ffffff'
    radius: 9999
    use: 'Hover state — deeper blue.'
  button-spark:
    bg: '#ffc220'
    color: '#2a2a2a'
    radius: 9999
    padding: '14px 24px'
    height: 48
    use: 'Spark yellow CTA — used on promo banners and Walmart+ trial sign-up.'
  button-secondary:
    bg: '#ffffff'
    color: '#0071ce'
    border: '2px solid #0071ce'
    radius: 9999
    padding: '12px 22px'
    height: 48
    use: 'See more, Cancel, inverse CTAs over blue surfaces.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#004f9a'
    use: '"Show more" links, modal close labels — underlined on hover.'
  product-card:
    bg: '#ffffff'
    color: '#2a2a2a'
    radius: 8
    padding: '12px'
    border: '1px solid transparent'
    use: 'Search-result and grid product tile. Image, title, rating, price, CTA.'
  rollback-card:
    bg: '#ffffff'
    color: '#2a2a2a'
    radius: 8
    padding: '12px'
    accent: 'rollback ribbon top-left'
    use: 'Rollback-eligible product card — yellow + red price tag in corner.'
  search-bar:
    bg: '#ffffff'
    color: '#2a2a2a'
    radius: 9999
    height: 48
    border: '1px solid transparent'
    focus-ring: '2px solid #0071ce'
    use: 'Masthead pill search — full-width on mobile, ~700px wide centred on desktop.'
  search-button:
    bg: '#ffc220'
    color: '#2a2a2a'
    radius: 9999
    width: 48
    height: 48
    use: 'Spark yellow search submit orb — circular, terminates the right of the search bar.'
  text-input:
    bg: '#ffffff'
    color: '#2a2a2a'
    radius: 24
    height: 48
    padding: '14px 16px'
    border: '1px solid #74767c'
    focus: '2px solid #0071ce'
    use: 'Form input — pill-edged, 24px radius (semi-pill, not full).'
  star-rating:
    color-fill: '#ffc220'
    color-empty: '#d6dbdf'
    use: 'Five-star rating — Spark yellow fill, grey empty.'
  rollback-tag:
    bg: '#ffc220'
    color: '#cc0d20'
    radius: 4
    padding: '4px 10px'
    use: 'Yellow rectangle with red text — the iconic Rollback price tag.'
  clearance-tag:
    bg: '#cc0d20'
    color: '#ffffff'
    radius: 4
    padding: '4px 10px'
    use: 'Solid red Clearance ribbon, white uppercase text.'
  walmart-plus-badge:
    bg: 'transparent'
    color: '#0071ce'
    use: 'Walmart+ checkmark + delivery line — text-only badge.'
  free-shipping-tag:
    bg: '#ffffff'
    color: '#3a8b00'
    radius: 4
    padding: '4px 8px'
    border: '1px solid #3a8b00'
    use: 'Green outline "FREE shipping" callout.'
  hero-promo:
    bg: '#0071ce'
    color: '#ffc220'
    radius: 16
    padding: '32px 40px'
    use: 'Big-box promo banner — blue ground, yellow display headline, white sub.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  cta-press: 'CTA bg deepens 0071ce → 003b76 over 150ms on :active'
  card-hover: 'shadow-elev appears + 1px transparent border becomes 1px #d6dbdf over 240ms'
  search-focus: '2px blue ring fades in over 200ms; spark search button does not change'
  reduced-motion: 'respects prefers-reduced-motion: reduce — colour transitions remain, transforms suppressed'

breakpoints:
  mobile: 600
  tablet: 1024
  desktop: 1280
  wide: 1408

shadows:
  ambient: 'none — Walmart stays mostly flat'
  hover-card: 'rgba(0,0,0,0.08) 0 4px 12px'
  modal: 'rgba(0,0,0,0.16) 0 8px 24px'
  ring: '0 0 0 2px #0071ce'

accessibility:
  contrast-text-on-bg: 14.7          # #2a2a2a on #ffffff — AAA
  contrast-text-on-cta: 5.4          # #ffffff on #0071ce — AA at body, AAA at large
  contrast-text-on-spark: 11.5       # #2a2a2a on #ffc220 — AAA
  contrast-link-on-bg: 8.5           # #004f9a on #ffffff — AAA
  contrast-rollback: 7.7             # #cc0d20 on #ffc220 — AAA — the Rollback signature
  contrast-muted-on-bg: 5.7          # #5e6166 on #ffffff — AA
  focus-ring: '2px solid #0071ce + 2px outline offset (Bentonville blue ring)'
  reduced-motion-honored: true
  touch-target-min: 48               # all CTAs hit 48×48
  keyboard-nav: 'Tab moves masthead → search → category nav → main grid → footer; arrow keys inside category mega-menu'

dark-mode: null   # No public-web dark mode. Light-only across storefront.
---

## 1. Visual Theme & Atmosphere

Walmart's storefront is unapologetically loud, value-coded, and relentlessly cheerful. The base canvas is white (`#ffffff`) with a soft `#f2f8fd` page floor between bands, anchored on the signature **Bentonville blue** (`#0071ce`) masthead and accented by the unmistakable **Spark yellow** (`#ffc220`) — the sunburst from the wordmark, used here as the eye-catching promo colour, the search-button orb, and the iconic Rollback price tag.

Type runs **Bogle**, Walmart's in-house sans (commissioned in the early 2000s as a Trade Gothic descendant) for body, paired with a chunky display family — likely **Antonio** or a custom Walmart Display variant — at heavy 700–900 weights for hero banners. "Save Money. Live Better." renders in 64px / 900 uppercase yellow on blue, with the slogan compressed to fit between the masthead and the first promo row. Body type sits at 14px / 400 — utilitarian, not literary.

The chromatic identity has three voltages: **Bentonville blue** (`#0071ce`) for the masthead, primary CTAs, and brand affordances; **Spark yellow** (`#ffc220`) for the wordmark sunburst, search-button orb, promo accents, and star ratings; and **Rollback red** (`#cc0d20`) for the iconic price-savings tag (yellow rectangle with red uppercase numerals). Together they form the most recognizable big-box retail palette in America — and Walmart leans into the colour combination with no apology.

Shape language splits between **fully-pill CTAs** (9999px radius — buttons, the search bar, the search orb) and **softly rounded cards** (8px tiles, 16px featured banners, 24px hero promos). The pill CTA at 48px height with 14×24px padding is Walmart's most recognizable interactive element after the wordmark itself. Shadows are minimal — most surfaces stay flat, with a single soft `rgba(0,0,0,0.08) 0 4px 12px` lift appearing on hovered product tiles.

The page is engineered for **value-conscious clarity over aesthetic minimalism**: massive promo banners, large yellow price callouts, dense product grids, friendly stock photography of families and produce, and zero negative-space-as-luxury moves. Walmart's design DNA is closer to a Sunday newspaper insert than a SaaS landing page — and that is the point.

**Key Characteristics:**
- Bentonville blue (`#0071ce`) masthead and primary CTAs — the chrome anchor
- Spark yellow (`#ffc220`) sunburst, search orb, promo accents, star rating fill
- Rollback red (`#cc0d20`) on yellow — the iconic price-savings tag
- Pill CTAs at 9999px radius, 48px height — Walmart's signature interactive pill
- Bogle sans for body (14/400) + chunky display at 64–80px / 900 for hero banners
- Pill search bar centred in the masthead, terminated by a Spark yellow circular orb
- Star ratings render in Spark yellow on grey — never the trade-show gold of competitors
- Zero minimalism — the page leans into density, big imagery, and loud price callouts

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): default page floor, every product tile, every form surface
- **Page Floor** (`#f2f8fd`): the soft blue-tinted backing on category pages between bands
- **Ink** (`#2a2a2a`): primary text colour — soft black with a hint of warmth
- **Heading Ink** (`#000000`): used on hero banner copy where Walmart wants maximum punch

### Brand & Dark
- **Bentonville Blue** (`#0071ce`): the masthead, primary CTA, brand wordmark blue, link hover
- **Brand Deep** (`#004f9a`): hover state on CTAs, footer ground, primary link colour
- **Brand Active** (`#003b76`): pressed state, deepest editorial accent
- **Brand Darkest** (`#001e60`): legacy Walmart blue from earlier branding — still appears on certain corporate pages

### Accent — Spark
- **Spark Yellow** (`#ffc220`): the sunburst from the wordmark — used for the search orb, promo accents, star ratings, Rollback tag base, "Save more" callouts
- **Spark Hover** (`#fdbb1f`): a slightly darker yellow on Spark CTA hover
- **Spark Deep** (`#f7a304`): an amber-yellow for emphasis on Walmart+ membership banners

### Accent — Rollback / Savings
- **Rollback Red** (`#cc0d20`): the iconic price-savings tag colour — uppercase red on Spark yellow
- **Rollback Deep** (`#a8081a`): darker variant on hover or active states
- **Walmart+ Pink** (`#ed1c79`): Walmart+ membership accent — used sparingly for membership-only promos
- **Freshness Green** (`#76b82a`): "Now Fresh", "Pickup Today" green badges in the grocery section

### Interactive
- **Link** (`#004f9a`): inline body links — deeper than the masthead so they are distinguishable from chrome
- **Link Hover** (`#0071ce`): lightens to brand blue on hover
- **Visited** (`#5e2a8c`): purple visited-link state
- **Disabled** (`#a6a6a6`): disabled CTA / input text
- **Selected** (`#0071ce`): selected radio / checkbox / tab fill

### Neutral Scale
- **Ink** (`#2a2a2a`) — primary text
- **Ink Strong** (`#000000`) — hero banner copy only
- **Muted** (`#5e6166`) — secondary metadata, breadcrumbs
- **Soft** (`#74767c`) — caption text, form helper text
- **Disabled** (`#a6a6a6`) — disabled state text
- **Border** (`#d6dbdf`) — default 1px hairline
- **Border Soft** (`#e6e9ec`) — editorial dividers between bands
- **Border Strong** (`#74767c`) — focus state hairline on inputs

### Surface & Borders
- **Canvas** (`#ffffff`) — default
- **Soft** (`#f2f2f2`) — disabled fields, alternating table rows
- **Strong** (`#dde2e6`) — divider band between major sections
- **Yellow Surface** (`#fff5d6`) — Rollback / savings tint behind certain promo modules
- **Blue Surface** (`#e3f1fc`) — informational banner surface (delivery options, membership info)

### Shadow Colors
Walmart stays mostly flat. The hover-card shadow is a single neutral grey — no blue tint, no multi-layer composition. Walmart's depth strategy is colour-driven, not shadow-driven.

- `rgba(0,0,0,0.08) 0 4px 12px` — hover-card lift
- `rgba(0,0,0,0.16) 0 8px 24px` — modal drop

### Semantic
- **Success Green** (`#3a8b00`): in-stock confirmation, "Order placed", "FREE shipping" outline
- **Warning Amber** (`#cc6700`): advisory banners (price changes, low availability)
- **Danger Red** (`#cc0d20`): inline form-error red — same hex as Rollback to keep the system tight
- **Info Blue** (`#0071ce`): informational banners — same as brand blue

## 3. Typography Rules

### Font Family

**Display**: `Antonio` (or "Walmart Display"). Fallback chain: `"Helvetica Neue", Helvetica, Arial, sans-serif`. Antonio is a condensed, geometric sans Google Fonts hosts that approximates Walmart's house display family at chunky 700–900 weights. Hero banner copy ("SAVE MONEY. LIVE BETTER.") renders in 64px / 900 uppercase.

**Body**: `Bogle`. Fallback: `"Helvetica Neue", Helvetica, Arial, sans-serif`. Bogle is Walmart's in-house sans (commissioned circa 2008 from Sasaki / Sebastian Lester) — a humanist Trade Gothic descendant with friendly terminals and a working-text neutrality. Inter and IBM Plex Sans are the closest open-source substitutes.

**Mono**: not part of the storefront brand system.

**OpenType features**: `tnum` is enabled on price displays, savings callouts, ratings, and shipping countdown timers so column alignment stays clean across grids. No `ss01` / `ss02` discipline — Walmart uses Bogle's default glyphs.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-banner | Antonio | 64 | 900 | 1.0 | -1px | uppercase | "SAVE MONEY. LIVE BETTER." promo banners |
| page-title | Antonio | 36 | 800 | 1.1 | -0.5px | — | Category page H1 ("Grocery", "Electronics") |
| section-head | Bogle | 24 | 700 | 1.2 | 0 | — | "Trending now", "Frequently bought" |
| sub-section | Bogle | 20 | 700 | 1.25 | 0 | — | Sub-section heads ("Customer reviews", "Item details") |
| product-title | Bogle | 18 | 500 | 1.33 | 0 | — | PDP main product title |
| product-title-md | Bogle | 16 | 400 | 1.43 | 0 | — | Grid product card titles |
| body-md | Bogle | 14 | 400 | 1.43 | 0 | — | Default body, descriptions, reviews |
| body-sm | Bogle | 13 | 400 | 1.38 | 0 | — | Secondary metadata, "Sold by Walmart.com" |
| caption | Bogle | 12 | 400 | 1.33 | 0 | — | Footer micro-text, sub-tier categories |
| micro | Bogle | 11 | 400 | 1.27 | 0 | — | Footer legal, smallest labels |
| price-display | Bogle | 32 | 700 | 1.0 | -0.5px | tnum | PDP main price ("$24.97") |
| price-product | Bogle | 22 | 700 | 1.0 | 0 | tnum | Grid tile current price |
| price-cents | Bogle | 12 | 700 | 1.0 | 0 | tnum | Superscript cents (".97") |
| price-strikethru | Bogle | 13 | 400 | 1.0 | 0 | tnum | Original price strikethrough |
| button-cta | Bogle | 16 | 700 | 1.0 | 0 | — | Primary CTA labels — bolder than typical |
| nav-link | Bogle | 14 | 500 | 1.0 | 0 | — | Masthead category labels |
| badge | Bogle | 11 | 700 | 1.0 | 0.04em | uppercase | Promo badges, savings tags |
| rollback-tag | Bogle | 14 | 700 | 1.0 | 0.02em | uppercase | The "ROLLBACK" wordmark on the price tag |

### Principles

- **Display is loud.** Antonio at 900 uppercase is the brand's headline mode. Walmart leans into condensed all-caps display — newspaper-circular-coded, anti-minimalism.
- **Body is plain.** Bogle at 14/400 disappears into the page. The system trusts the price callout and the imagery to do the visual work; running text gets out of the way.
- **Button CTAs are bold (700).** Most retail systems put button text at 500; Walmart pushes to 700 because "Add to cart" needs to read as confident.
- **Tabular numerals on every price.** `tnum` is enabled on price-display, price-product, price-cents, price-strikethru, ratings, and savings callouts.
- **Cents are smaller than dollars.** Price construction puts the cents in 12px superscript beside a 22–32px whole-dollar — same approach as Amazon, but with bolder weight (700 vs 500).
- **Uppercase is reserved for hero, badge, and Rollback.** Body, sub-heads, and product titles are sentence case. Uppercase is a brand signal, not a default.
- **Inter is the closest open-source substitute** for Bogle; Bebas Neue or Oswald approximate the condensed display.

## 4. Component Stylings

### Buttons

**`button-cta`** — the canonical "Add to cart" button. Bentonville blue (`#0071ce`) fill, white text in `button-cta` (16/700), 9999px pill radius, 14×24px padding, 48px height. Hover deepens to `#004f9a`. The pill shape is non-negotiable — square or rounded-rect Walmart CTAs read as a counterfeit storefront.

**`button-cta-hover`** — `#004f9a` deeper blue. Used on `:hover` and `:focus`.

**`button-spark`** — Spark yellow (`#ffc220`) fill with ink (`#2a2a2a`) text, same 9999px pill, same 48px height. Used on Walmart+ trial CTAs and yellow-promo-banner CTAs where blue would clash. Hover darkens to `#fdbb1f`.

**`button-secondary`** — white fill, 2px Bentonville blue outline, blue text. Pill radius. Used for "Cancel", "See more", inverse CTAs over blue surfaces.

**`button-tertiary-text`** — plain `#004f9a` deep-blue text, no surface. Underlined on hover. Used for "Show more", modal close labels.

### Cards

**`product-card`** — grid product tile. White surface, 8px radius, 12px padding, transparent 1px border (becomes `#d6dbdf` on hover). Stack: 1:1 thumbnail with `object-fit: contain` on white, optional Rollback tag floating top-left, product title (`product-title-md`), star row + review count, current price (`price-product` with cents superscript), "FREE shipping" or "Walmart+ delivery" line, optional Add to cart pill at the bottom.

**`rollback-card`** — same as `product-card` but with the iconic Rollback tag (yellow rectangle, red uppercase text) floating top-left of the image. Strikethrough original price renders beneath the current price in `price-strikethru`.

**`pdp-buy-box`** — sticky right-rail card on PDP. White, 8px radius, 1px hairline border, hover-card shadow, 24px padding. Stack: large `price-display` (32/700), strikethrough original price, "Save $5" red callout, "FREE shipping" green outline tag, quantity stepper, full-width Add to cart pill, "Add to list" outline pill, fulfilment options (Pickup, Delivery, Shipping) as a stacked radio group beneath.

**`hero-promo`** — featured promo banner. Bentonville blue (`#0071ce`) ground, yellow (`#ffc220`) display headline in 36–64px / 900 uppercase, white sub-copy, white pill CTA. 16px radius. The page's largest typographic moment.

### Badges, Tags, Pills

**`rollback-tag`** — the iconic Walmart price-savings ribbon. Spark yellow (`#ffc220`) base with red (`#cc0d20`) uppercase "ROLLBACK" text in `rollback-tag` (14/700, 0.02em tracking). 4px radius, 4×10px padding. Anchors top-left of qualifying product cards.

**`clearance-tag`** — solid red (`#cc0d20`) with white uppercase "CLEARANCE" text. Same shape as Rollback. Used for end-of-season liquidation.

**`walmart-plus-badge`** — text-only badge with the Walmart+ checkmark glyph in `#0071ce` followed by "FREE delivery from store" in `body-sm`. No surface — sits inline with the price line.

**`free-shipping-tag`** — white surface with a 1px green (`#3a8b00`) outline, green uppercase text "FREE SHIPPING". 4px radius.

**`walmart-plus-membership-pill`** — membership pill with the Walmart+ "+" glyph and "Try free for 30 days" — uses a pink (`#ed1c79`) accent on certain membership funnels.

### Inputs / Forms

**`text-input`** — white surface, 1px `#74767c` hairline, 24px radius (semi-pill — not fully rounded but distinctly soft), 48px height, 14×16px padding. Stacked label above in `caption` muted. On focus the border thickens to 2px Bentonville blue (`#0071ce`).

**`search-bar`** — masthead pill search. White fill, 9999px radius, 48px height, 1px transparent border (becomes 2px blue ring on focus). Internally a single text input with no segments. Right edge terminates with a Spark yellow `search-button` (48×48px circular orb, magnifier glass icon centred).

**`search-button`** — circular Spark yellow (`#ffc220`) orb, 48×48px, fully rounded. Magnifier glass in `#2a2a2a` ink. Hover deepens to `#fdbb1f`. The single brightest moment in the masthead.

**`select`** — same look as `text-input` with a chevron indicator.

### Navigation

**`masthead`** — full-width Bentonville blue (`#0071ce`) bar, 88px height (taller than typical to accommodate the wordmark + search bar + utility row). Wordmark flush left with the Spark yellow sunburst, search bar centred (~700px wide), account / list / cart utilities flush right.

**`sub-nav`** — slightly different blue (`#004f9a`) or white band beneath the masthead, holds department links: "Departments", "Services", "Grocery", "Pharmacy". 40px height, 14/500 white labels.

**`mega-menu-flyout`** — opens from "Departments" dropdown; white surface, 8px radius, hover-card shadow. Two-column nav of category trees with 14/500 ink labels.

**`breadcrumb`** — `#5e6166` muted text with `›` separators, 13/400.

### Star Rating

**`star-rating`** — 5-icon row, fill `#ffc220` (Spark yellow) for filled, `#d6dbdf` for empty. Half-stars rendered with clipped half-fill. Followed by a blue-link review count in `body-md`: "(847 reviews)".

### Modals & Toasts

**`modal`** — centred dialog over a 60%-opacity ink scrim. White surface, 16px radius (more relaxed than Amazon's 8), 1px hairline border, modal shadow. Close X anchored top-right.

**`toast`** — bottom-centre stacked notifications. White fill, 8px radius, ink text, 16×24px padding, hover-card shadow.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96`
- Section padding (vertical): **48–64px** between major bands — more generous than Amazon's 22–28px because Walmart leans into hero promo banners that need breathing room
- Card internal padding: **12px** for product tiles; **24px** for PDP buy box; **32–40px** for hero promo banners
- Gutters: **16px** between product tiles in grid view; **24px** between major page bands; **8px** between adjacent CTAs in the buy-box stack

### Grid & Container

- Max content width: **1408px** centred
- Homepage: 6-column tile grid at desktop, collapsing to 2-column at mobile
- Search results: **4–5 column** grid at desktop with 16px gutters
- PDP: 2-column with image gallery left (~50%), buy box right (~38%), specs and reviews stack full-width below
- Footer: 4-column link list at desktop with the Walmart+ membership banner spanning full-width above

### Whitespace Philosophy

Walmart leans into **bold, image-led promo bands** with generous 48–64px vertical padding. The hero band, "Trending now" carousel, "Frequently bought together", and footer all get clear breathing room. But inside each band, density is high — product grids run 4–5 across with 16px gutters, and Rollback callouts crowd the available space with bright colour. The overall rhythm is **open band → dense grid → open band**.

### Section Cadence

Walmart alternates between **white bands** (default body) and **blue or yellow promo bands** (hero, Walmart+ banner, seasonal callouts). The blue promo band uses Bentonville blue (`#0071ce`) as ground with white or yellow display copy; the yellow promo band uses Spark yellow with ink text. The visual rhythm is recognisably big-box — the Sunday newspaper insert translated to web.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Dense table corners, tight badges |
| Small | 4px | Rollback tag, savings callouts, form helper boxes |
| Card | 8px | Product tiles, modals, dropdowns, mega-menu |
| Featured | 16px | Hero promo banners, larger feature cards |
| Hero | 24px | Full-width hero promo cards, seasonal landing modules; also `text-input` semi-pill |
| Pill | 9999px | CTAs, search bar, search orb — Walmart's signature pill |

The **9999px pill CTA** at 48px height is Walmart's most recognisable shape. Square-cornered or rounded-rect CTAs read as a counterfeit storefront. Even the search bar — 700px wide centred in the masthead — terminates in a fully-rounded yellow orb that reinforces the pill discipline.

There are no compound radii in mainline UI. Every interactive surface rounds uniformly.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer, all editorial bands (~95% of surfaces) |
| 1 — Hover Card | `rgba(0,0,0,0.08) 0 4px 12px` | Product tiles on hover, mega-menu flyouts, dropdowns |
| 2 — Modal | `rgba(0,0,0,0.16) 0 8px 24px` | Centred dialogs |
| 3 — Scrim | `rgba(0,0,0,0.6)` | Modal backdrop |

### Shadow Philosophy

Walmart stays mostly flat. Depth comes from **the Bentonville blue masthead contrast** (deep blue chrome against white body) and **the Spark yellow accents** (the search orb, the Rollback tag, promo banners) rather than from layered shadows. The hover-card lift is single-layer, neutral grey — no blue tint, no atmospheric Stripe-style composition. The brand position: depth should not distract from the price callout.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu flyout
- **Out**: `cubic-bezier(0.0, 0, 0.2, 1)` — toast appearance, image carousel

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Hover colour swap, focus ring fade-in |
| Standard | 240ms | Mega-menu flyout, card hover lift, modal enter |
| Slow | 320ms | Hero carousel slide, page transitions |

### Per-Component Recipes

- **CTA hover**: background transitions from `#0071ce` to `#004f9a` over 150ms. No transform, no scale.
- **CTA press**: deepens further to `#003b76` for 150ms on `:active`.
- **Product card hover**: shadow appears (`rgba(0,0,0,0.08) 0 4px 12px`) and the 1px transparent border becomes `#d6dbdf` over 240ms. No transform — Walmart resists the lift gimmick.
- **Search-bar focus**: 2px blue ring fades in over 200ms; the Spark yellow search button stays unchanged.
- **Mega-menu flyout**: opens with a 240ms ease-out fade + 4px slide-down from the masthead.
- **Add-to-cart toast**: bottom-right slide in over 320ms emphasized.
- **Hero carousel**: auto-advance every 6s with 320ms ease-out slide; arrow controls supersede.

### Page Transitions

Page-to-page navigation uses no transition — links fire a hard navigation. Walmart prioritises perceived speed over polished transitions. Modal and toast appearances use the durations above.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Hero carousel auto-advance pauses (manual arrow controls remain). Card hover shadow fades become instant. Modal enter degrades to opacity-only.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #2a2a2a ink on #ffffff canvas | 14.7 | AAA |
| #ffffff on #0071ce CTA | 5.4 | AA body / AAA large |
| #2a2a2a on #ffc220 Spark | 11.5 | AAA |
| #cc0d20 Rollback red on #ffc220 yellow | 7.7 | AAA — the iconic pair |
| #004f9a link on #ffffff | 8.5 | AAA |
| #ffffff on #cc0d20 Clearance | 5.4 | AA |
| #5e6166 muted on #ffffff | 5.7 | AA |

The Rollback red-on-yellow pair (`#cc0d20` on `#ffc220`) hits **7.7 contrast — AAA at body sizes**. This is one of the highest-contrast accent pairs in retail, and it is the brand's most recognisable callout for that exact reason: Walmart engineered the Rollback tag to scream from across a Sunday newspaper or an end-cap, and the digital colour pair preserves that perceptual punch.

### Focus Indicators

Focus ring is **2px solid `#0071ce`** (Bentonville blue) with 2px outline-offset. Buttons, inputs, and links all gain the blue ring on `:focus-visible`. The system avoids Spark yellow on focus because yellow on white reads weakly — blue holds contrast.

### ARIA Patterns

- **Search bar**: outer container is `role="search"`. The input has `aria-label="Search Walmart.com"`. The Spark search button has `aria-label="Search"`.
- **Product card**: entire tile wrapped in `<a>` with verbose `aria-label` — "Acme Pencil 2-pack, 4.5 stars, 847 reviews, $9.97, was $14.99, FREE shipping".
- **Star rating**: rendered as text-equivalent (`aria-label="4.5 out of 5 stars, 847 reviews"`).
- **Mega-menu flyout**: `role="menu"` with `role="menuitem"` per link; arrow keys navigate, Escape closes.
- **Add-to-cart toast**: `role="status"` with `aria-live="polite"`.
- **PDP fulfilment radios**: `role="radiogroup"` with `aria-label="Fulfilment method"`.

### Keyboard Navigation

- Masthead: Tab moves logo → search input → search button → account → list → cart
- Search results: Tab through tiles in document order; arrow keys do not navigate the grid
- PDP: Tab through gallery → variant selector → quantity → fulfilment radios → Add to cart → Add to list
- Mega-menu: arrow keys navigate categories; Esc closes

### Screen Reader Hints

Walmart prefers verbose `aria-label` to icon-only buttons. The cart icon has `aria-label="Cart, 2 items, $24.97"`. The account avatar has `aria-label="Account, sign in"`. The Rollback tag includes `aria-label="Rollback price, was $14.99 now $9.97"`.

### Reduced Motion

All transitions degrade to opacity-only when `prefers-reduced-motion: reduce`. Hero carousel auto-advance pauses. Modal slide-in becomes a fade.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Masthead collapses to logo + cart + hamburger; search bar moves to its own row beneath the masthead; product grid 2-up; PDP buy-box stacks beneath gallery |
| Tablet | 600–1024px | Full masthead with search bar; product grid 3-up |
| Desktop | 1024–1280px | Sub-nav with department links; product grid 4-up |
| Wide | 1280–1408px | Content caps at 1408px; product grid 5-up; PDP gallery widens to ~640px |

### Touch Targets

- Primary CTAs: 48px height — meets AAA
- Search bar and orb: 48×48px — comfortable for AAA
- Product tile: entire 240×360px tile is tappable
- Quantity stepper: 36×36px buttons — borderline AA, compensated by 8px inner padding

### Collapsing Strategy

- Masthead: utilities (account, list) hide first; only logo + cart + hamburger remain at <600px
- Search bar: jumps from inline (centre of masthead) to its own row below at <1024px
- Product grid: column count drops cleanly; row gutters compress from 16px → 12px → 8px
- PDP: 2-column splits to single-column stack at <1024px; buy-box becomes a sticky bottom bar at mobile carrying just price + Add to cart

### Image Behavior

Product thumbnails use `aspect-ratio: 1/1` with `object-fit: contain` (Walmart prefers contain on white backgrounds). PDP main gallery supports zoom-on-hover and lightbox click. Hero banner imagery uses `object-fit: cover` for full-bleed photography.

### Container Queries

Used in the PDP buy-box: when the right rail narrows below ~340px, fulfilment options collapse to a single radio with a "Change" link, and the price strikethrough wraps beneath the current price.

## 11. Content & Voice

### Tone

Friendly, value-coded, accessible — never corporate-cold. Walmart's voice is "neighbour who works at the store, knows where everything is, doesn't waste your time." Headlines lead with savings ("Save Big on Spring Essentials") or convenience ("Pickup or delivery from your store"). The brand consistently positions Walmart as the everyday, familiar choice — not aspirational, not premium, just reliable.

### Microcopy Patterns

- **Button verbs**: "Add to cart", "Pickup or delivery", "Sign in", "Try free for 30 days", "Shop now" — direct and outcome-named
- **Error message recipe**: `[What went wrong] + [How to fix]` — e.g., "Enter a valid ZIP code so we can show items available in your area."
- **Success confirmations**: "Added to cart", "Order placed", "Subscribed" — short, outcome-named
- **Field labels**: short and friendly — "ZIP code", "Email or mobile number", "Card number"
- **Stock urgency**: "Only 3 left at your store" — names the local context, not just count

### Empty States

Empty cart: "Your cart is empty. Start shopping today's deals." — names the next destination.

Empty list: "Save items for later — start your list as you shop." — instructive.

Empty search: "We didn't find anything for [query]. Check your spelling or try different keywords." — names cause + remedy.

### CTA Verb Conventions

- Primary: **"Add to cart"** (standard), **"Buy now"** (one-click), **"Sign in"**, **"Pickup or delivery"** (fulfilment selection)
- Membership: **"Try Walmart+ free for 30 days"** — names the trial length explicitly
- Save: **"Add to list"** (never "Save" alone — Walmart uses "list" as the consumer-friendly term)
- Tertiary: **"Shop more deals"**, **"See all reviews"**, **"Show all"**
- Avoided: "Submit", "Click here", "Buy" alone, "Order now" (Walmart prefers "Add to cart" → checkout flow)

## 12. Dark Mode & Theming

**Light-only on the public web.** Walmart.com — homepage, search, category, PDP, cart, checkout — is explicitly light-only. The Walmart mobile app ships a system-controlled dark mode (deep navy surface, white text, Spark yellow unchanged), but the web storefront is white-only. The brand position: Bentonville blue chrome and Spark yellow accents work best on white, and the product photography (much of it on white seamless) would clash with a dark canvas.

The lone "dark surface" inside the page is the **footer** (`#004f9a`), which always renders deep blue regardless of system preference.

## 13. Lineage & Influences

Walmart's visual lineage runs through three traditions: **mid-century discount retail signage** (the original Sam Walton-era stores used red/blue/white in the same combination still anchoring the brand); **Sunday newspaper inserts** (dense product grids, big yellow price callouts, red savings ribbons — Walmart digital UI is the spiritual descendant of the printed circular); and **early-2000s e-commerce density** (Yahoo Shopping, eBay grids — utility over aesthetic).

The Bogle typeface, commissioned circa 2008, was Walmart's first major brand-typography update. Bogle sits in the same humanist-sans tradition as Whitney, Trade Gothic, and IBM Plex — but with friendlier terminals that read as accessible. The 2016 brand refresh added the Spark yellow sunburst as a more prominent accent and softened the masthead from its earlier hard-edge look.

What Walmart rejects: minimalism, negative-space-as-luxury, dark mode, single-typeface discipline (Walmart uses display + body as a duet, not a soliloquy), and animation that delays the click. The brand position is **anti-aspirational**: Walmart is for everyone, every day, and the design must feel friendly to the value-conscious shopper above all.

**Influences:**
- Sam Walton-era discount retail signage — red/blue/white discipline
- Sunday newspaper inserts (Sears, JCPenney) — dense grid, big yellow price callouts
- Trade Gothic / Whitney — humanist sans tradition for Bogle
- Antonio (Google Fonts) — closest open-source approximation of Walmart's display family
- Target.com (peer) — direct big-box retail competitor with similar density discipline

## 14. Do's and Don'ts

**Do**
- Anchor the masthead in Bentonville blue (`#0071ce`) with the Spark yellow (`#ffc220`) sunburst inside the wordmark
- Use Spark yellow as the search-orb fill and on promo accents — it is the eye-catching colour
- Render the Rollback tag in red (`#cc0d20`) uppercase on Spark yellow — never any other colour pair
- Use 9999px pill CTAs at 48px height — Walmart's signature interactive shape
- Use Bogle at 14/400 for body and Antonio (or Walmart Display) at 64/900 uppercase for hero banners
- Render star ratings in Spark yellow on grey — never gold
- Use Bogle at 700 for CTA labels — bolder than typical retail
- Render prices with cents in 12px superscript beside the whole-dollar
- Enable tabular numerals (`tnum`) on every price, savings callout, and rating count
- Lean into image-led promo bands with 48–64px vertical padding

**Don't**
- Don't use square-cornered or rounded-rect CTAs — Walmart pills, always
- Don't change the Rollback colour pair — red on yellow is non-negotiable
- Don't use Spark yellow on white text — yellow needs ink (`#2a2a2a`) for contrast
- Don't use exclamation marks gratuitously — the voice is friendly but not giddy
- Don't say "Submit" or "Click here" — every CTA names the outcome
- Don't add multi-layer atmospheric shadows — Walmart stays single-layer flat
- Don't use yellow or gold for star ratings — Spark yellow `#ffc220` always
- Don't use minimalist negative-space hero treatments — Walmart leans into density
- Don't render the wordmark without the Spark sunburst
- Don't use a different blue — `#0071ce` Bentonville blue is the brand

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #ffffff
Page Floor:       #f2f8fd
Ink:              #2a2a2a
Bentonville Blue: #0071ce
Brand Deep:       #004f9a
Spark Yellow:     #ffc220
Spark Hover:      #fdbb1f
Rollback Red:     #cc0d20
Link:             #004f9a
Border:           #d6dbdf
Muted:            #5e6166
Success Green:    #3a8b00
Surface Yellow:   #fff5d6
```

### Example Component Prompts

- "Create a Walmart-style Add to cart button: a 48px-tall pill (9999px radius) with Bentonville blue (`#0071ce`) fill, white text in Bogle 16/700, 14×24px padding. Hover deepens to `#004f9a`."
- "Build a masthead: full-width Bentonville blue (`#0071ce`) bar, 88px tall. Wordmark flush left with the Spark yellow sunburst. Search bar centred (~700px wide, 48px tall, 9999px radius, white fill) terminating in a 48×48px Spark yellow (`#ffc220`) circular search orb. Account / List / Cart utilities flush right in white text 14/500."
- "Design a Rollback product card: white surface, 8px radius, 12px padding, 1px transparent border. Top-left of the thumbnail: a 4×10px yellow (`#ffc220`) rectangle with red (`#cc0d20`) uppercase 'ROLLBACK' text in Bogle 14/700. Stack: 1:1 product thumbnail, product title in 16/400 ink, 5-star row (Spark yellow filled, `#d6dbdf` empty) + review count in `#004f9a` link blue, current price in 22/700 with 12/700 cents superscript, strikethrough original price in 13/400 muted, FREE shipping green outline tag, Add to cart pill at the bottom."
- "Build a hero promo banner: Bentonville blue (`#0071ce`) ground, 16px radius, 32×40px padding. Headline in Antonio 64/900 uppercase Spark yellow (`#ffc220`) — 'SAVE BIG ON SPRING'. Sub-copy in 18/400 white. Spark yellow pill CTA at the bottom — 'Shop now' in ink (`#2a2a2a`)."
- "Design a PDP buy-box: white surface, 8px radius, 1px hairline border, hover-card shadow, 24px padding. Top: large price in 32/700 with `tnum` ('$24.97'). Strikethrough '$29.99' in 13/400 muted. Red 'You save $5.00' callout. Green outline 'FREE shipping' tag. Quantity stepper. Full-width Bentonville blue Add to cart pill. Outline 'Add to list' pill. Stacked radio group for fulfilment: Pickup, Delivery, Shipping."
- "Render a Walmart+ membership banner: deep amber (`#f7a304`) gradient ground, white display copy 'Walmart+ free 30-day trial', white pill CTA with ink text 'Try free for 30 days'."

### Iteration Guide

1. **Get the masthead right first.** Bentonville blue (`#0071ce`) chrome with the Spark yellow sunburst inside the wordmark is the brand at a glance. Without it, the page reads as generic.
2. **Pill CTAs at 48px.** If your CTA has square or rounded-rect corners, it isn't Walmart. The 9999px radius is non-negotiable.
3. **Spark yellow is the eye-catching colour.** Use it on the search orb, the Rollback tag, promo accents — never on body text.
4. **Rollback is red on yellow.** `#cc0d20` red on `#ffc220` yellow. Any other pair (red on white, yellow on red) breaks the brand.
5. **Body is Bogle at 14/400.** Display is Antonio (or similar condensed sans) at 64/900 uppercase. The hierarchy lives in weight + caps, not size.
6. **Cents superscript on every price.** Whole-dollar in 22/700, cents in 12/700 superscript. Any other price construction reads generic.
7. **Stay single-layer flat.** Multi-layer shadows read as Stripe; pill CTAs + flat surfaces + bold colour reads as Walmart.
8. **Density inside bands, breath between bands.** 48–64px vertical padding between major sections; 16px gutters inside grids.
