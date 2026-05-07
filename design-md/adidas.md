---
name: Adidas
tagline: Pure-black sport-utility, AdihausDIN/adidasFG uppercase, three-stripe geometry — the engineering canon for global sportswear.
updated_at: 2026-05-04T19:57:58+12:00
published_at: 2026-05-04T19:57:58+12:00
author: webdesignhot
source_url: https://www.adidas.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [fashion, marketplace]
tags: [dark, fashion, sportswear, sans, uppercase, athletic, e-commerce, brutalist, monochrome]
preview_swatch: ['#ffffff', '#000000', '#e32b2b']
related: [nike, apple, shopify]
description: 'Adidas''s storefront is the engineering canon for global sportswear — a binary monochrome stack of pure white (`#ffffff`) and pure black (`#000000`) carrying every chrome surface, every CTA, every wordmark, with the legacy red (`#e32b2b`) reserved for the trefoil and clearance flags only. Type runs **AdihausDIN** for body and **adidasFG** (the in-house display variant of FF DIN) for headlines — uppercase 700 weight with aggressive `2.5–3px` positive tracking that turns every section header into a stencilled product spec. CTAs are sharp-cornered (`0px` radius), 56px tall, with full-uppercase 14/700 labels — no pill rounding, no soft edges, no gradient. The three-stripe geometry runs through the entire visual system: hairline dividers, masthead grids, badge construction, even the shoe-tile composition. Whitespace is engineered, not decorative — section breath compresses to a 12-column engineering grid where every measurement traces back to the shoe-box ratio. The result is the only mass-sportswear site that looks like a German automotive technical manual stitched into an e-commerce engine.'

colors:
  bg: '#ffffff'                     # primary white canvas
  bg-page: '#ffffff'
  bg-inverse: '#000000'             # full-page black takeover bands (Originals, Y-3, premium drops)
  surface: '#ffffff'
  surface-soft: '#f5f5f5'           # alt row, disabled fields, sub-nav band
  surface-strong: '#ececec'          # divider band
  surface-grey: '#767677'            # mid-grey utility band — used on certain meta footers
  surface-dark: '#1d1d1d'            # near-black surfaces in dark sections (lighter than pure black)
  brand: '#000000'                  # pure black — every primary CTA, masthead, wordmark
  brand-on-dark: '#ffffff'          # white when the brand inverts on black bands
  brand-hover: '#1d1d1d'             # hover deepens to near-black (already pure black, micro-shift)
  brand-active: '#3c3c3c'            # pressed mid-grey
  trefoil-red: '#e32b2b'            # legacy Adidas red — reserved for trefoil + clearance flag
  sale-red: '#e32b2b'               # markdown price red
  text: '#000000'                   # primary ink — pure black
  text-strong: '#000000'            # heading ink at maximum punch
  text-muted: '#767677'             # secondary metadata
  text-soft: '#a8a8a8'               # caption text, faint counts
  text-on-black: '#ffffff'          # white on inverted bands
  text-on-cta: '#ffffff'            # white on primary CTA
  link: '#000000'                   # default ink link
  link-hover: '#000000'              # link colour stays — only the underline animates
  link-underline: 'currentColor'    # link underline matches text colour
  border: '#cccccc'                 # default 1px hairline (lighter than text)
  border-soft: '#ececec'             # editorial dividers
  border-strong: '#000000'           # focus state hairline + selected outline
  border-input: '#000000'            # form input default outline (always black)
  border-divider: '#000000'          # the famous adidas hairline rules — pure black 1px
  outline-focus: '#000000'           # focus outline pure black
  scrim: 'rgba(0,0,0,0.7)'           # modal backdrop heavier than peers
  shadow-card: 'rgba(0,0,0,0.06)'   # rare hover shadow
  shadow-modal: 'rgba(0,0,0,0.20)'   # modal drop
  success: '#1a8917'                 # in-stock + size-available green
  warning: '#bd5c00'                 # low-stock urgency amber-orange
  warning-soft: '#fff4e5'
  danger: '#c12121'                  # validation error — distinct from trefoil red
  info: '#0064d2'                    # info banner blue
  rating-fill: '#000000'             # ratings stay black, never gold
  rating-empty: '#cccccc'

typography:
  display:
    family: 'adidasFG, AdihausDIN, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [700, 800]
    opentype-features: ['tnum', 'ss01']
  body:
    family: 'AdihausDIN, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'Menlo, Monaco, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    hero-display:    { size: 96, weight: 700, lineHeight: 0.92, tracking: '4px',     family: display, opentype: ['ss01'], transform: uppercase }
    page-title:      { size: 64, weight: 700, lineHeight: 0.95, tracking: '3px',     family: display, opentype: ['ss01'], transform: uppercase }
    section-head:    { size: 38, weight: 700, lineHeight: 1.05, tracking: '3px',     family: display, opentype: ['ss01'], transform: uppercase }
    sub-section:     { size: 24, weight: 700, lineHeight: 1.10, tracking: '2.5px',   family: display, transform: uppercase }
    sub-section-md:  { size: 20, weight: 700, lineHeight: 1.15, tracking: '2px',     family: display, transform: uppercase }
    product-title:   { size: 18, weight: 400, lineHeight: 1.25, tracking: '0',       family: body }
    product-title-md: { size: 16, weight: 400, lineHeight: 1.30, tracking: '0',       family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',       family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.38, tracking: '0',       family: body }
    micro:           { size: 11, weight: 700, lineHeight: 1.27, tracking: '1.5px',   family: body, transform: uppercase }
    price-display:   { size: 28, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'] }
    price-product:   { size: 16, weight: 400, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'] }
    price-strikethru: { size: 14, weight: 400, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'] }
    price-sale:      { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'] }
    button-cta:      { size: 14, weight: 700, lineHeight: 1.0,  tracking: '2px',     family: body, transform: uppercase }
    nav-link:        { size: 12, weight: 700, lineHeight: 1.0,  tracking: '1.5px',   family: body, transform: uppercase }
    badge:           { size: 11, weight: 700, lineHeight: 1.0,  tracking: '1.5px',   family: body, transform: uppercase }
    chip:            { size: 13, weight: 400, lineHeight: 1.0,  tracking: '0.5px',   family: body, transform: uppercase }

radius:
  micro: 0
  sm: 0
  md: 0          # sharp-cornered cards by default
  lg: 0
  xl: 0
  pill: 9999     # very rare — only chip filters use pill

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128, 160]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 56
  masthead-height: 56
  sub-nav-height: 48
  grid-columns: 12
  grid-gutter: 16

components:
  button-cta:
    bg: '#000000'
    color: '#ffffff'
    radius: 0
    padding: '18px 24px'
    height: 56
    font: button-cta
    use: 'Add to bag, Sign up, Buy now — every primary action. Pure black, 0 radius, uppercase 14/700 with 2px tracking.'
  button-cta-hover:
    bg: '#1d1d1d'
    color: '#ffffff'
    use: 'Hover state — micro-shift to near-black plus a 1px white inset outline that fades in.'
  button-cta-inverse:
    bg: '#ffffff'
    color: '#000000'
    border: '1px solid #ffffff'
    use: 'Inverse on black bands — flips fully white with black text.'
  button-secondary:
    bg: 'transparent'
    color: '#000000'
    border: '1px solid #000000'
    radius: 0
    padding: '17px 23px'
    height: 56
    use: 'Wishlist, Save for later, secondary actions. 1px pure-black hairline.'
  button-secondary-on-black:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #ffffff'
    use: 'Secondary on black bands — flips white outline.'
  button-text:
    bg: 'transparent'
    color: '#000000'
    use: '"SHOP NOW →" with arrow + animated underline. Underline grows on hover.'
  button-icon-square:
    bg: '#000000'
    color: '#ffffff'
    radius: 0
    width: 56
    height: 56
    use: 'Search submit, mobile menu — sharp-cornered black square.'
  product-card:
    bg: '#ffffff'
    color: '#000000'
    radius: 0
    padding: '0 0 16px 0'
    border: 'none'
    use: 'Listing tile — sharp corners, image flush to edges, minimal chrome metadata stack below.'
  product-card-hover:
    treatment: 'image swaps to second photo + size-strip slides up from the bottom of the image area'
    use: 'Discloses available sizes inline without leaving the grid — Adidas signature interaction.'
  text-input:
    bg: '#ffffff'
    color: '#000000'
    radius: 0
    height: 48
    padding: '14px 16px'
    border: '1px solid #000000'
    focus: '2px solid #000000 + outline-offset 2px'
    use: 'Form input — sharp-cornered, pure black 1px hairline, label sits above in caption uppercase.'
  search-bar:
    bg: '#ffffff'
    color: '#000000'
    radius: 0
    height: 56
    border: 'none'
    use: 'Masthead inline search — borderless, with a sharp-cornered black submit square anchored right.'
  chip-filter:
    bg: '#ffffff'
    color: '#000000'
    radius: 9999
    border: '1px solid #000000'
    padding: '8px 14px'
    height: 32
    use: 'PLP filter chip — the rare pill in the system. Selected state inverts to black bg / white text.'
  badge-new:
    bg: 'transparent'
    color: '#000000'
    border: 'none'
    font: badge
    use: 'Inline uppercase "NEW" or "BESTSELLER" tag — type only, no surface, sits above product title.'
  badge-sale:
    bg: 'transparent'
    color: '#e32b2b'
    font: badge
    use: 'Sale flag — the only place trefoil-red appears outside the trefoil itself.'
  hero-band:
    bg: '#000000'
    color: '#ffffff'
    radius: 0
    use: 'Full-bleed black takeover with white display headline + white outline CTA. Used for Originals drops.'
  size-tile:
    bg: '#ffffff'
    color: '#000000'
    radius: 0
    border: '1px solid #cccccc'
    width: 56
    height: 56
    use: 'Sharp square size selector. Selected state: 2px black border. Out-of-stock: diagonal strikethrough.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-engineered: 'cubic-bezier(0.65, 0, 0.35, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 400
  cta-press: 'CTA bg micro-shifts 000000 → 1d1d1d over 100ms; 1px white inset outline fades in over 200ms on :hover'
  card-hover: 'image swap fades the second photo over the first across 200ms + size-strip translates Y(100% → 0) over 240ms emphasized'
  underline-grow: 'text-link underline scales from 0 → 100% width over 200ms ease-engineered, transform-origin: left'
  hero-takeover: 'page-load fade-in for hero black band over 400ms; display headline counts up via intersection observer'
  reduced-motion: 'respects prefers-reduced-motion: reduce — image swap becomes instant, size-strip becomes static, underline becomes static.'

breakpoints:
  mobile: 600
  tablet: 960
  desktop: 1280
  wide: 1440

shadows:
  ambient: 'none — Adidas stays fully flat'
  hover-card: 'rgba(0,0,0,0.06) 0 4px 12px'
  modal: 'rgba(0,0,0,0.20) 0 16px 48px'
  ring: '0 0 0 2px #000000'

accessibility:
  contrast-text-on-bg: 21.0           # #000000 on #ffffff — AAA
  contrast-text-on-cta: 21.0          # #ffffff on #000000 CTA — AAA
  contrast-link-hover: 21.0           # link stays black
  contrast-muted-on-bg: 4.7           # #767677 on #ffffff — AA
  contrast-trefoil-red-on-bg: 4.5     # #e32b2b on #ffffff — AA large
  focus-ring: '2px solid #000000 + 2px outline-offset (pure black ring)'
  reduced-motion-honored: true
  touch-target-min: 48
  keyboard-nav: 'Tab moves logo → search → main nav → utility → main grid → footer; arrow keys inside size selector and image gallery.'

dark-mode: null   # The default storefront is light; black-takeover bands appear inline within the light page rather than as a separate dark mode.
---

## 1. Visual Theme & Atmosphere

Adidas's storefront is the canonical sportswear engineering canvas — a binary monochrome stack of pure white (`#ffffff`) and pure black (`#000000`) carrying every chrome surface, every CTA, every wordmark, with the legacy red (`#e32b2b`) reserved exclusively for the trefoil mark and clearance flags. There is no warm-grey, no off-white, no soft black — every neutral runs at maximum contrast, and the page reads like a German automotive technical manual fed through a fashion engine.

Type runs **AdihausDIN** for body copy and **adidasFG** for display — both descended from FF DIN 1451 (the German road-signage standard codified in 1936). On Adidas, headlines run uppercase at 700 weight with aggressive **`2.5–3px` positive tracking**, turning every section header into a stencilled product spec. The OpenType `ss01` stylistic set is enabled on display sizes, modifying specific glyphs to give Adidas's headlines their distinctly engineered geometry. Body text drops to mixed case at 400 weight, but the hierarchy ratio between display (96px / uppercase / tracked) and body (16/400/regular) is the most aggressive in mass sportswear — Nike's display reads as conversational by comparison.

The chromatic identity is monochrome with one accent — **trefoil-red on black-and-white**. Adidas is disciplined about red: the trefoil mark is red, clearance flags are red, validation errors are a distinct deeper red (`#c12121`), and that is the entire chromatic budget for the colour. Every other surface, divider, CTA, and badge runs in the binary white-black stack. The discipline is what makes the trefoil moments feel high-voltage — when red appears, it carries weight.

Shape language is fully sharp-cornered. CTAs render at `0px` radius, 56px tall, with full-uppercase 14/700 labels and 2px positive letter-spacing. Cards round at `0px`. Form inputs round at `0px`. The only place pill geometry appears is inside PLP filter chips (32px pills with 1px black hairline borders) — and even those flip to inverted black-fill / white-text rectangles when selected. The brand position: rounded corners read as soft, and Adidas is engineered, not soft.

The grid runs hard 12-column at 1440px max width, with 16px gutters. Every section header, hairline divider, and product-tile composition traces back to a measurement that locks to the shoe-box ratio. Whitespace is engineered, not decorative — the masthead is exactly 56px tall, sub-nav exactly 48px, hero bands exactly 80vh on desktop. Photography is **the design**: full-bleed campaign imagery on hero bands (often black-and-white or single-colourway product shots on flat-lay surfaces), product tiles using `aspect-ratio: 1/1` with `object-fit: cover` against a flat shadow-free studio ground. The result is the only mass-sportswear site that successfully channels the German-engineering aesthetic.

**Key Characteristics:**
- Binary monochrome palette: pure white (`#ffffff`) + pure black (`#000000`) — no warm-grey, no off-white
- Trefoil-red (`#e32b2b`) reserved exclusively for the trefoil mark + clearance flags + sale prices
- AdihausDIN body + adidasFG display — uppercase 700 weight with 2.5–3px positive tracking on display
- Sharp-cornered everything — CTAs, cards, inputs, modals all at `0px` radius
- 56px black-fill CTAs with white 14/700 uppercase labels — the canonical Adidas button
- Three-stripe geometry threading through dividers, masthead grids, badge construction
- 12-column 1440px engineering grid with 16px gutters
- Black-takeover hero bands for Originals, Y-3, premium drops — full-bleed inversion
- No atmospheric shadows — Adidas stays single-layer flat across 99% of surfaces
- Hard hairlines: 1px pure-black dividers separate sections, never grey

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): default page floor, every product tile, every form surface — pure white, no warmth
- **Ink** (`#000000`): primary text colour — pure black, never warm — every body word, every metadata line
- **Inverse Canvas** (`#000000`): full-bleed black band ground for Originals, Y-3, premium drops
- **Inverse Ink** (`#ffffff`): white text on black bands — same purity, inverted

### Brand
- **Brand** (`#000000`): the wordmark, every primary CTA, every divider — Adidas's brand colour is black
- **Brand Hover** (`#1d1d1d`): hover micro-shift to near-black (the page is already pure black, so the shift is visible only via the simultaneous 1px white inset outline)
- **Brand Active** (`#3c3c3c`): pressed mid-grey state
- **Brand on Dark** (`#ffffff`): when the brand inverts on black bands, white carries the wordmark

### Accent
- **Trefoil Red** (`#e32b2b`): legacy Adidas red — reserved exclusively for the trefoil mark, clearance flags, sale prices, and `<sup>SALE</sup>` badges
- **Sale Red** (`#e32b2b`): markdown price colour — same hex as trefoil
- **Surface Grey Utility** (`#767677`): mid-grey utility band on certain meta footers and country selectors

### Interactive
- **Link** (`#000000`): default inline link — distinguished by underline only, never colour
- **Link Hover** (`#000000`): link colour does NOT change on hover — only the underline animates from 0 to 100% width over 200ms
- **Selected** (`#000000`): selected radio / checkbox / size-tile fill — the selected state is always a 2px black outline or a black fill
- **Disabled** (`#cccccc`): disabled text and outline grey

### Neutral Scale
- **Ink** (`#000000`) — primary text
- **Heading Ink** (`#000000`) — same as primary; Adidas does not differentiate
- **Muted** (`#767677`) — secondary metadata, breadcrumbs, "From the Performance archive"
- **Soft** (`#a8a8a8`) — caption text, faint counts
- **Disabled** (`#cccccc`) — disabled state text and borders
- **Border** (`#cccccc`) — default 1px hairline (lighter than text — used on default form-input outlines and product card dividers)
- **Border Soft** (`#ececec`) — editorial dividers within sub-sections
- **Border Strong** (`#000000`) — focus state, selected size tile, primary divider rules — pure black hairline
- **Surface Soft** (`#f5f5f5`) — alt row, disabled fields, sub-nav band

### Surface & Borders
- **Canvas** (`#ffffff`) — default
- **Soft Surface** (`#f5f5f5`) — alt rows, disabled fields, sub-nav band ground
- **Strong Surface** (`#ececec`) — divider band between major sections
- **Inverse Surface** (`#000000`) — Originals / Y-3 / premium-drop bands
- **Surface Dark** (`#1d1d1d`) — slightly lighter than pure black, used for elevated surfaces inside a black band (e.g. mega-menu flyouts on a black takeover)

### Shadow Colors
Adidas stays mostly flat. Hover-card shadow appears rarely (mostly on PDP modal flyouts) at single-layer 6% — the lightest shadow in mass sportswear. The brand position: depth comes from contrast (pure-white vs pure-black surface separation), not from atmospheric shadows. There are no brand-tinted shadows, no multi-layer Stripe-style compositions.

- `rgba(0,0,0,0.06) 0 4px 12px` — hover-card lift (rare)
- `rgba(0,0,0,0.20) 0 16px 48px` — modal drop

### Semantic
- **Success Green** (`#1a8917`): "In stock", "Free shipping", size-available indicator — confident green, never bright
- **Warning Amber** (`#bd5c00`): "Only 2 left" low-stock urgency — warm amber-orange, distinct from trefoil red
- **Danger Red** (`#c12121`): validation error red — deeper than trefoil red so the two are never confused
- **Info Blue** (`#0064d2`): informational banners — used sparingly because blue feels off-brand against the binary monochrome

## 3. Typography Rules

### Font Family

**Primary**: `AdihausDIN` for body, `adidasFG` for display. Fallback chain: `"Helvetica Neue", Helvetica, Arial, sans-serif`. Both faces are descended from FF DIN 1451 (the German road-signage standard codified in 1936) — Adidas commissioned the in-house variants for engineering precision and brand exclusivity. AdihausDIN runs the working text; adidasFG carries the display moments.

**Mono**: not part of the storefront brand system.

**OpenType features**: `tnum` is enabled on prices, sizes, and product codes. `ss01` is enabled on display headlines, modifying specific glyphs (the alternate `R` and `G` forms) to give Adidas's headline copy its distinctly engineered geometry.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | adidasFG | 96 | 700 | 0.92 | 4px | ss01 / uppercase | Full-bleed campaign headline ("HYPERBOOST EDGE") |
| page-title | adidasFG | 64 | 700 | 0.95 | 3px | ss01 / uppercase | Category page H1 |
| section-head | adidasFG | 38 | 700 | 1.05 | 3px | ss01 / uppercase | "WHAT'S TRENDING", "DOWNLOAD OUR APPS" |
| sub-section | adidasFG | 24 | 700 | 1.10 | 2.5px | uppercase | "25% OFF MOTHER'S DAY FAVOURITES" |
| sub-section-md | adidasFG | 20 | 700 | 1.15 | 2px | uppercase | Sub-section heads on PDP |
| product-title | AdihausDIN | 18 | 400 | 1.25 | 0 | — | PDP main product title — mixed case, regular weight |
| product-title-md | AdihausDIN | 16 | 400 | 1.30 | 0 | — | Grid product card title |
| body-md | AdihausDIN | 16 | 400 | 1.50 | 0 | — | Default body — descriptions, reviews |
| body-sm | AdihausDIN | 14 | 400 | 1.43 | 0 | — | Secondary metadata, "Performance · Running" |
| caption | AdihausDIN | 13 | 400 | 1.38 | 0 | — | Footer micro-text |
| micro | AdihausDIN | 11 | 700 | 1.27 | 1.5px | uppercase | Form labels, footer column heads |
| price-display | AdihausDIN | 28 | 700 | 1.0 | 0 | tnum | PDP main price ("$160.00") |
| price-product | AdihausDIN | 16 | 400 | 1.0 | 0 | tnum | Grid tile current price |
| price-strikethru | AdihausDIN | 14 | 400 | 1.0 | 0 | tnum | Original price strikethrough |
| price-sale | AdihausDIN | 16 | 700 | 1.0 | 0 | tnum | Sale price in trefoil-red bold |
| button-cta | AdihausDIN | 14 | 700 | 1.0 | 2px | uppercase | Primary CTA labels — uppercase 700 |
| nav-link | AdihausDIN | 12 | 700 | 1.0 | 1.5px | uppercase | Masthead category labels |
| badge | AdihausDIN | 11 | 700 | 1.0 | 1.5px | uppercase | "NEW", "BESTSELLER" tags |
| chip | AdihausDIN | 13 | 400 | 1.0 | 0.5px | uppercase | PLP filter chip labels |

### Principles

- **adidasFG with `ss01` on display.** The stylistic set is the typographic signature — without it, the headlines read as generic FF DIN.
- **Aggressive uppercase tracking.** Display 96px runs at 4px tracking; sub-sections at 2.5–3px. The tracking is the engineering — Nike runs negative tracking for warmth, Adidas runs positive for precision.
- **Two voices: shouted display + quiet body.** Headlines uppercase 700; body mixed case 400. The hierarchy ratio is the most aggressive in mass sportswear.
- **Tabular numerals on every price.** `tnum` on prices, sizes, product codes, shipping countdowns.
- **Button CTAs at 14/700 uppercase.** No exceptions. Sentence case on a CTA reads off-brand.
- **No expressive display alternative.** adidasFG carries every display moment — there is no script face, no variable display, no rotation across families.
- **Mono is absent.** The brand system has no mono companion — code blocks on dev/legal pages use system mono only.
- **Inter / IBM Plex Sans Condensed are the closest open-source substitutes.** Adjust by ~10% positive letter-spacing to compensate for AdihausDIN's slightly tighter cap height.

## 4. Component Stylings

### Buttons

**`button-cta`** — pure-black (`#000000`) fill, white text in 14/700 uppercase with 2px tracking, `0px` radius, 18×24px padding, 56px height. The most common CTA: "ADD TO BAG", "BUY NOW", "JOIN ADICLUB", "SIGN UP". Hover micro-shifts background to `#1d1d1d` plus a 1px white inset outline fades in. Active deepens to `#3c3c3c`.

**`button-cta-inverse`** — when the page is on a black band, the CTA flips to white fill (`#ffffff`) with black text, same uppercase 14/700, same `0px` radius, same 56px height. The relationship inverts but the geometry holds.

**`button-secondary`** — transparent fill, 1px pure-black (`#000000`) outline, ink text in 14/700 uppercase with 2px tracking. Same `0px` radius, same 56px height. Used for "WISHLIST", "SAVE FOR LATER", inverse CTAs over white surfaces.

**`button-secondary-on-black`** — transparent fill, 1px pure-white outline, white text. The inverse twin for black bands.

**`button-text`** — plain ink text with an arrow ("SHOP NOW →"). Uppercase 14/700. Hover grows an underline from 0 to 100% width over 200ms — the only animated underline in the system.

**`button-icon-square`** — 56×56 black fill with white icon, `0px` radius. Used for search submit, mobile menu toggle, cart icon.

### Cards

**`product-card`** — listing tile. White surface, `0px` radius (sharp corners — definitive Adidas signature), no internal padding around the image (image fills to corners), 16px bottom padding for metadata. Stack: 1:1 product thumbnail with `object-fit: cover` against a flat shadow-free studio ground, "NEW" / "BESTSELLER" inline uppercase badge above title (no surface, just type), product title in 16/400 mixed case, "Men's Performance" line in 13/400 muted, current price in 16/400 with `tnum`, optional strikethrough + sale price in 16/700 trefoil-red. On hover: image swaps to second photo + size-strip slides up from the bottom of the image area showing available sizes inline.

**`pdp-buy-box`** — sticky right-rail card on PDP. White surface, `0px` radius, no border (relies on the gallery's left edge to terminate), 32px padding. Stack: large `price-display`, "MEMBERS GET 25% OFF" red banner if eligible, size-tile grid (56×56 sharp squares), full-width black ADD TO BAG CTA, outline WISHLIST CTA, "Free shipping over $50" small print, "Available at: NYC SoHo store" pickup line.

**`hero-band`** — full-bleed black takeover (`#000000`) ground, white display headline in 96/700 uppercase with 4px tracking and `ss01`, body sub-copy in 18/400 white, white outline CTA anchored bottom-left. `0px` radius. The brand's signature dramatic moment — used for Originals drops and premium collaborations.

**`category-tile`** — square thumbnail with a single-line uppercase label beneath in 14/700 with 2px tracking. No CTA, no rating — used in homepage category navigation.

### Badges, Tags, Pills

**`badge-new`** — inline uppercase "NEW" or "BESTSELLER" tag in 11/700 with 1.5px tracking. No surface, no border — just type. Sits above the product title in the card stack. Adidas resists badge surfaces because they break the shadow-free studio aesthetic.

**`badge-sale`** — inline uppercase "SALE" or "-25%" in trefoil-red (`#e32b2b`) 11/700 with 1.5px tracking. The only place trefoil red appears outside the trefoil itself.

**`chip-filter`** — PLP filter chip — the rare pill in the system. White fill, 1px pure-black outline, 9999px radius, 8×14px padding, 32px height. Selected state inverts to black bg / white text with the same outline. The pill geometry is intentionally chosen to differentiate filters from the sharp-cornered product chrome.

### Inputs / Forms

**`text-input`** — white surface, 1px pure-black (`#000000`) hairline (no soft greys — Adidas commits to pure black on inputs because the form is engineering, not invitation), `0px` radius, 48px height, 14×16px padding. Stacked label above in `micro` uppercase 11/700 with 1.5px tracking. On focus the border thickens to 2px black with a 2px outline-offset — the focus is a hard engineered ring.

**`search-bar`** — masthead inline search. White fill, `0px` radius, 56px height, no border — terminates against the masthead's bottom hairline. With a sharp-cornered black submit square (56×56) anchored right.

**`size-tile`** — sharp 56×56 squares for size selection. White fill, 1px `#cccccc` hairline default. Selected state: 2px black border. Out-of-stock: diagonal strikethrough (1px black line corner-to-corner). Hover: thickens to 2px black. The grid runs 4–6 tiles per row depending on container width.

### Navigation

**`masthead`** — full-width white bar with a thin 1px `#000000` bottom hairline, 56px height. Wordmark flush left in pure black (the three-stripe trefoil monolith). Sub-nav category labels centred in 12/700 uppercase with 1.5px tracking. Account / Wishlist / Cart utilities flush right with the same 12/700 tracked treatment plus icon-only utilities at 16×16.

**`sub-nav`** — slim 48px band beneath the masthead, white fill, 1px `#000000` bottom hairline. Holds department links: "MEN", "WOMEN", "KIDS", "ORIGINALS", "PERFORMANCE", "SALE". 12/700 uppercase with 1.5px tracking. The sale link goes red on hover only.

**`mega-menu-flyout`** — opens from category dropdown; full-width white surface, `0px` radius, no border (terminates against masthead hairline), no shadow. Multi-column nav of category trees with 14/700 uppercase column heads and 14/400 mixed-case secondary links.

**`breadcrumb`** — `text-muted` (`#767677`) with `>` separators (not `›` — Adidas uses the simpler ASCII greater-than), 13/400 mixed case.

### Modals & Toasts

**`modal`** — centred dialog over a 70%-opacity ink scrim (heavier than peer scrims because Adidas wants the modal to fully command the page). White surface, `0px` radius, no border, modal shadow (`rgba(0,0,0,0.20) 0 16px 48px`). Close X anchored top-right at 24×24, 1px black hairline.

**`toast`** — bottom-centre notifications. Black fill, white text, `0px` radius, 16×24px padding. Inverts the chromatic relationship from the modal to differentiate the two patterns.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 56 · 64 · 80 · 96 · 128 · 160`
- Section padding (vertical): **80–128px** between major bands; **160px** on the homepage hero band — Adidas gives editorial breath to its hero moments
- Card internal padding: **0** around the image (image flush to corners), **16px** below the image for metadata; **32px** for PDP buy-box
- Gutters: **16px** between product tiles in grid view (engineering grid's hard 16px); **80–128px** between major page bands

### Grid & Container

- Max content width: **1440px** centred
- 12-column grid with **16px gutters** — every major section locks to this grid
- Homepage: full-bleed hero band → 4-up grid promo tiles → 4-up product carousel → 5-up category grid → editorial mosaic
- Search results: **5 column** product grid at desktop with 16px gutters; 4 → 3 → 2 at narrower widths
- PDP: 2-column with image gallery left (~58%), buy box right (~42%), variant selector and reviews stack full-width below
- Footer: 5-column link list at desktop with white ground (Adidas footer is white, not dark — keeps the brand binary)

### Whitespace Philosophy

Adidas gives hero bands the most breath of any mass sportswear — 128–160px between hero and the first content row, 80px between subsequent bands. Inside each band, density is moderate-to-high — product grids run 5 across with 16px gutters, denser than Nike. The visual rhythm is **breath at hero → engineered density at grid → breath at section break** — closer to a German technical catalogue than a typical e-commerce template.

### Section Cadence

Adidas alternates between **white bands** (default body, product grids, PDP) and **black-takeover bands** (`#000000` — Originals, Y-3, premium drops, campaign hero). The black is the brand's signature dramatic moment — it's what distinguishes Adidas from Nike (which stays mostly white) and Puma (which mixes warm-grey). The cadence is roughly 4-to-1 white-to-black across a typical homepage.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Sharp | 0px | Cards, buttons, inputs, modals — 99% of surfaces |
| Pill | 9999px | PLP filter chips only — the lone exception |

There are no compound radii. There are no soft corners. The pill chip is the lone exception, intentionally chosen to differentiate filter chrome from product chrome. Every other surface — even the cart drawer, even the mega-menu flyout, even the modal dialog — runs at `0px`. The discipline is the brand.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer, all editorial bands, product cards (~99% of surfaces) |
| 1 — Hover Card | `rgba(0,0,0,0.06) 0 4px 12px` | PDP image-gallery hover lightbox (rare) |
| 2 — Modal | `rgba(0,0,0,0.20) 0 16px 48px` | Centred dialogs |
| 3 — Scrim | `rgba(0,0,0,0.7)` | Modal backdrop — heavier than peers |

### Shadow Philosophy

Adidas stays mostly flat. Depth comes from **the binary surface separation** (a pure-black band against a pure-white band reads as massive elevation without any shadow at all) and **the photographic contrast** of campaign imagery. There are no brand-tinted shadows, no atmospheric multi-layer compositions, no Stripe-style elevated cards. The modal scrim runs heavy (`0.7` vs typical `0.5`) because Adidas wants the modal to fully command the page when it opens — half-measures read as soft, and Adidas is engineered.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu, size-strip slide-up
- **Engineered**: `cubic-bezier(0.65, 0, 0.35, 1)` — used for the underline-grow effect on text links and the hero counter-up animation

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 100ms | CTA hover micro-shift, focus ring fade-in |
| Standard | 200ms | Card image-swap fade, underline grow, modal enter |
| Slow | 400ms | Hero takeover fade-in on page load, hero counter-up |

### Per-Component Recipes

- **CTA hover**: background micro-shifts from `#000000` to `#1d1d1d` over 100ms; simultaneously a 1px white inset outline fades in over 200ms. The inset is what makes the hover legible since the colour shift is subtle.
- **CTA press**: deepens to `#3c3c3c` for 100ms on `:active`.
- **Product card hover**: image swaps to second photo via crossfade over 200ms; size-strip translates Y(100% → 0) over 240ms emphasized, revealing available sizes inline. The size strip lets users add to bag without leaving the grid.
- **Text-link hover**: underline scales from 0 → 100% width over 200ms ease-engineered with `transform-origin: left`. Colour stays — only the underline animates.
- **Hero takeover fade-in**: full-bleed black band fades from opacity 0 → 1 over 400ms on initial page load; display headline counts up via intersection observer.
- **Mega-menu flyout**: 200ms ease-out fade; no slide.
- **Modal enter**: scrim fades in over 200ms, dialog translates from `translateY(8px) opacity(0)` to `0/1` over 240ms emphasized.

### Page Transitions

Page-to-page navigation uses no transition — links fire a hard navigation. The Adidas position is engineered speed; transitions read as soft.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Card image-swap becomes instant (no crossfade). Size-strip becomes statically-visible on hover. Underline-grow becomes statically-rendered (always visible). Hero counter-up becomes static. The page remains fully functional with motion off.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| `#000000` ink on `#ffffff` canvas | 21.0 | AAA |
| `#ffffff` on `#000000` CTA | 21.0 | AAA |
| `#ffffff` on `#1d1d1d` CTA hover | 16.6 | AAA |
| `#000000` link on `#ffffff` (link colour stays black) | 21.0 | AAA |
| `#767677` muted on `#ffffff` | 4.7 | AA |
| `#e32b2b` trefoil-red on `#ffffff` | 4.5 | AA large |
| `#ffffff` on `#e32b2b` sale flag | 4.5 | AA large only — Adidas compensates by using 11/700 uppercase |

The pure-black-on-pure-white pairing gives Adidas the highest contrast ratio in mass sportswear (21.0). The trefoil-red against white sits at AA-large only — Adidas compensates by using 11/700 uppercase for sale-flag text, pushing the type into the "large text" threshold where 4.5 reaches AA.

### Focus Indicators

Focus ring is **2px solid `#000000`** with 2px outline-offset. Buttons, inputs, links, and size tiles all gain a hard pure-black ring on `:focus-visible`. There is no soft focus glow, no brand-coloured ring — Adidas commits to engineered black on every focus state. The 2px outline-offset means the ring sits 2px outside the element's perimeter, giving it room to read against the edge.

### ARIA Patterns

- **Search bar**: `role="search"`. Input has `aria-label="Search adidas products"`.
- **Product card**: entire tile wrapped in `<a>` with verbose `aria-label` — "Hyperboost Edge running shoe, men's, 4 colours available, $160".
- **Size selector**: `role="radiogroup"` with `aria-labelledby` pointing to the "Size" label. Each size tile is `role="radio"` with `aria-checked` reflecting selection. Out-of-stock tiles have `aria-disabled="true"` and `aria-label="Size 10, out of stock"`.
- **Wishlist heart**: `aria-pressed` to communicate save state. Label: "Add to wishlist" (default) → "Remove from wishlist" (when active).
- **Mega-menu flyout**: `role="menu"` with `role="menuitem"`; arrow keys navigate, Escape closes.

### Keyboard Navigation

- Masthead: Tab moves logo → search input → search button → main nav → account → wishlist → cart
- Search results: Tab through tiles in document order; wishlist heart is its own tab stop
- PDP: Tab through gallery → variant selectors (colourway → size) → quantity → ADD TO BAG → wishlist
- Mega-menu: arrow keys navigate, Esc closes
- Size grid: arrow keys move between tiles; Enter selects

### Screen Reader Hints

Verbose `aria-label` on icon-only buttons. The wishlist heart announces "Add to wishlist" or "Remove from wishlist" depending on state. Out-of-stock size tiles announce as disabled with the size noted in the label.

### Reduced Motion

All transitions degrade to opacity-only. Card image-swap becomes instant. Size-strip becomes statically visible on hover. Underline-grow becomes statically rendered.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Masthead collapses to logo + cart + hamburger; search becomes a separate tap-to-open drawer; product grid 2-up; PDP buy-box stacks beneath gallery; CTA becomes sticky-bottom |
| Tablet | 600–960px | Full masthead with inline search; product grid 3-up |
| Desktop | 960–1280px | Sub-nav with full department links; product grid 4-up |
| Wide | 1280–1440px | Content caps at 1440px; product grid 5-up |

### Touch Targets

- Primary CTAs: 56px height — exceeds AAA
- Search bar: 56×56px
- Wishlist heart on cards: 44×44px — meets AA
- Size tiles: 56×56px — exceeds AAA
- Product tile: entire 280×420px tile is tappable

### Collapsing Strategy

- Masthead: utilities (account, wishlist) hide first; only logo + cart + hamburger remain at <600px
- Search bar: drops out of inline masthead and becomes a separate tap-to-open drawer at <960px
- Product grid: 5 → 4 → 3 → 2; 16px gutters compress to 12px → 8px
- PDP: 2-column splits to single-column stack at <960px; ADD TO BAG becomes a sticky bottom bar
- Hero takeover: black band height shrinks from 80vh → 60vh on mobile
- Size grid: 6-up → 4-up at narrower widths

### Image Behavior

Product thumbnails use `aspect-ratio: 1/1` with `object-fit: cover` against a flat shadow-free studio ground (Adidas commits to flat-lay product photography across the storefront — no lifestyle shots in the grid). PDP main gallery supports zoom-on-hover and lightbox click. Hero campaign imagery uses full-bleed `aspect-ratio: 16/9` on desktop and `4/5` on mobile.

### Container Queries

Used in the PDP buy-box: when the right rail narrows below ~360px, size grid collapses from 6-up to 4-up and the colourway selector switches from inline thumbnails to a horizontal scrolling rail.

## 11. Content & Voice

### Tone

Engineered, athletic, declarative. Adidas's voice is "the technical brief from the German engineering team about the next generation of footwear" — every line names a function, names a benefit, names a runner. Headlines lead with performance ("HYPERBOOST EDGE", "ULTRABOOST 24") rather than emotion. The brand consistently positions Adidas as **the engineered choice** — sport built right.

### Microcopy Patterns

- **Button verbs**: "ADD TO BAG", "JOIN ADICLUB", "BUY NOW", "SHOP NOW →" — uppercase, direct, outcome-named, often with a trailing arrow on text-CTAs
- **Error message recipe**: brief + corrective — "We couldn't process this. Please try a different card." No apology, no warmth.
- **Success confirmations**: factual — "ADDED TO BAG · ULTRABOOST 24 · MEN'S US 10"
- **Field labels**: short and uppercase — "EMAIL", "CARD NUMBER", "ZIP / POSTAL CODE"
- **Stock urgency**: "ONLY 2 LEFT" or "BACK IN STOCK SOON" — uppercase, no exclamation, factual

### Empty States

Empty cart: "YOUR BAG IS EMPTY. SHOP NEW ARRIVALS." — uppercase, two-clause, single CTA.

Empty wishlist: "NO ITEMS IN YOUR WISHLIST. TAP THE HEART ON ANY PRODUCT TO SAVE IT." — instructive, uppercase.

Empty search: "NO RESULTS FOR [QUERY]. TRY A DIFFERENT KEYWORD OR BROWSE THE LATEST DROPS." — names cause + alternative.

### CTA Verb Conventions

- Primary: **"ADD TO BAG"** (default), **"BUY NOW"** (one-step checkout), **"JOIN ADICLUB"**, **"SIGN UP"**
- Save: **"WISHLIST"** (Adidas uses "wishlist", not "favorites" — heart-icon vocabulary)
- Tertiary: **"SHOP NOW →"**, **"LEARN MORE →"**, **"SEE ALL"**
- Avoided: "Submit", "Click here", "Get it now" (Adidas prefers the cleaner "Buy now" or "Add to bag")
- Always uppercase. Always 700 weight on display CTAs. Sentence case on a CTA reads off-brand.

## 12. Dark Mode & Theming

**No separate dark mode.** The default storefront is light, and Adidas instead inlines black-takeover bands within the light page. There is no toggle, no system-preference inversion, no `colors-dark:` map. The brand position: black appears as a chromatic moment within an otherwise light page (Originals takeover, Y-3 drops, premium campaign hero) — making the black inversion event-driven and editorial rather than user-toggled.

The lone "darker mode" is the inline black band, which uses:
- `bg: #000000`
- `text: #ffffff`
- `surface-dark: #1d1d1d` (for elevated surfaces inside the band — mega-menu flyouts on a black takeover)
- `border: #ffffff` for hairlines on inverse outline buttons
- Trefoil-red and sale-red unchanged

## 13. Lineage & Influences

Adidas's visual lineage runs through three traditions: **German Bauhaus and Functionalist design** (the founding father Adi Dassler grew up in 1920s Bavaria during the height of Bauhaus' codification of geometric utility — the trefoil mark and three-stripe motif both descend from this period); **FF DIN 1451 and German road signage** (the AdihausDIN typeface family is a direct descendent of the 1936 DIN signage standard, giving Adidas its engineered uppercase voice); and **modern Swiss grid typography** (the 12-column 1440px engineering grid traces back to Müller-Brockmann's 1961 *Grid Systems* applied to e-commerce).

The 2018 brand refresh, codified by the in-house Adidas Brand Design team, paired the existing trefoil + AdihausDIN with a binary monochrome palette, sharp-cornered geometry, and aggressive uppercase tracking. The pre-2018 storefront mixed greys and rounded buttons; post-2018 it commits fully to the binary white-black engineering canvas. The trefoil-red appears now exclusively on the trefoil itself and on clearance flags — never on chrome.

What Adidas rejects: warm greys, soft corners, multi-colour brand systems, expressive display typefaces, atmospheric shadows, sentence-case CTAs, and dark mode toggles. The brand position is **engineered precision** — Adidas wants to feel like a German technical manual, not a soft consumer marketplace.

**Influences:**
- Bauhaus / Dessau — geometric utility, three-stripe monolith
- FF DIN 1451 (1936 German road signage) — typographic ancestor of AdihausDIN, [fontfont.com](https://www.fontfont.com)
- Müller-Brockmann *Grid Systems* (1961) — the 12-column engineering grid
- Adi Dassler / Herzogenaurach — founding industrial-utility aesthetic
- Y-3 (Yohji Yamamoto x Adidas) — black-takeover hero band convention
- Stussy / Supreme — uppercase tracked typographic discipline
- BMW M / Mercedes-AMG — German automotive technical-manual layout

## 14. Do's and Don'ts

**Do**
- Anchor the brand on pure black (`#000000`) on pure white (`#ffffff`) — no warm-greys, no off-white
- Run AdihausDIN body + adidasFG display with `ss01` enabled on display headlines
- Render headlines uppercase 700 with 2.5–3px positive tracking — the tracking is the engineering
- Use sharp-cornered (`0px` radius) CTAs at 56px height with white 14/700 uppercase labels and 2px tracking
- Reserve trefoil-red (`#e32b2b`) for the trefoil mark and clearance flags only — never for chrome
- Use black-takeover hero bands for Originals, Y-3, premium drops — full-bleed inversion
- Lock every section to the 12-column 1440px engineering grid with 16px gutters
- Render product cards with `0px` radius, image flush to corners, minimal type chrome below
- Use 1px pure-black hairlines for dividers — not soft greys
- Animate text-link underlines from 0 to 100% width on hover — the only animated underline in the system

**Don't**
- Don't introduce warm greys or off-whites — every neutral is pure black or pure white
- Don't soften corners — `0px` radius across cards, buttons, inputs, modals
- Don't use sentence-case on CTAs — uppercase 700 with 2px tracking always
- Don't use trefoil-red on chrome — keep it on the trefoil + sale flags only
- Don't add multi-layer atmospheric shadows — Adidas stays single-layer flat across 99% of surfaces
- Don't introduce a script or expressive display face — adidasFG carries every display moment
- Don't use exclamation marks — the voice is engineered, not giddy
- Don't run negative tracking on display — Adidas uses positive tracking; Nike uses negative
- Don't add a dark mode toggle — black appears inline as event-driven editorial bands instead
- Don't say "Submit" or "Click here" — every CTA names the outcome (ADD TO BAG, BUY NOW, JOIN ADICLUB)
- Don't drop section padding below 80px — Adidas gives editorial breath to its hero moments
- Don't mix the chip-pill geometry (9999px) onto product chrome — pills are for filters only

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #ffffff
Inverse:       #000000
Ink:           #000000
Brand:         #000000
Brand Hover:   #1d1d1d
Trefoil Red:   #e32b2b
Surface Soft:  #f5f5f5
Border:        #cccccc
Border Strong: #000000
Muted:         #767677
Success:       #1a8917
```

### Example Component Prompts

- "Create an Adidas-style ADD TO BAG button: a 56px-tall sharp-cornered (`0px` radius) rectangle with pure-black (`#000000`) fill, white text in AdihausDIN 14/700 uppercase with 2px letter-spacing, 18×24px padding. Hover micro-shifts background to `#1d1d1d` and a 1px white inset outline fades in over 200ms."
- "Build an Adidas masthead: full-width white bar with a 1px pure-black bottom hairline, 56px tall. Adidas trefoil wordmark flush left in pure black. Sub-nav category labels centred ('MEN', 'WOMEN', 'KIDS', 'ORIGINALS', 'PERFORMANCE', 'SALE') in AdihausDIN 12/700 uppercase with 1.5px tracking. Account / Wishlist / Cart utilities flush right with the same uppercase tracked treatment plus 16×16 icon-only utilities."
- "Design an Adidas product card: white surface, `0px` radius (sharp corners), no internal padding around the image (image fills to corners), 16px bottom padding for metadata. Stack: 1:1 product thumbnail with `object-fit: cover` against a flat shadow-free studio ground, optional 'NEW' inline uppercase 11/700 badge above title (no surface, just type), product title in AdihausDIN 16/400 mixed case, 'Men's Performance' line in 13/400 muted, current price in 16/400 with `tnum`, optional strikethrough + sale price in 16/700 trefoil-red `#e32b2b`. On hover: image swaps to second photo via crossfade and a size-strip slides up from the bottom of the image area showing available sizes inline."
- "Create an Adidas hero takeover: full-bleed black (`#000000`) band, 80vh tall. White display headline in adidasFG 96/700 uppercase with 4px letter-spacing and `ss01` enabled — 'HYPERBOOST EDGE'. Sub-copy in 18/400 white. White 1px outline CTA anchored bottom-left ('SHOP NOW →') in AdihausDIN 14/700 uppercase with 2px tracking. Page-load fade-in over 400ms."
- "Build an Adidas size selector: grid of 56×56 sharp `0px` radius squares, 6 across at desktop, 4 across at narrower widths. Default state: white fill, 1px `#cccccc` hairline, AdihausDIN 14/400 size label. Selected state: 2px black border. Out-of-stock: 1px diagonal black strikethrough corner-to-corner. Hover: thickens border to 2px black."
- "Design an Adidas PDP buy-box: white surface, `0px` radius, 32px padding, no border. Stack: large price in AdihausDIN 28/700 with `tnum` ('$160.00'), 'MEMBERS GET 25% OFF' inline trefoil-red 14/700 uppercase, colourway thumbnail rail (4 across, 56×56 squares), size-tile grid (6 across, 56×56 squares with selected/disabled states), full-width black ADD TO BAG CTA, 1px outline WISHLIST CTA, 'FREE SHIPPING OVER $50' in 13/400 muted, 'AVAILABLE AT: NYC SOHO STORE' pickup line in 13/400 muted."

### Iteration Guide

1. **Start with binary monochrome.** If your page has warm greys, off-whites, or soft blacks, it isn't Adidas. Pure white (`#ffffff`) + pure black (`#000000`) is the foundation.
2. **Sharp corners everywhere.** `0px` radius on cards, buttons, inputs, modals. The pill chip is the only exception (filters only).
3. **Uppercase 700 with positive tracking on display.** AdihausDIN/adidasFG at 700 weight, headlines uppercase with 2.5–3px letter-spacing. Negative tracking is Nike's territory.
4. **CTAs at 56px / 14/700 uppercase / 2px tracking / `0px` radius.** No exceptions.
5. **Reserve red for the trefoil and clearance flags.** If red appears on chrome (CTA, masthead, link), it isn't Adidas. The discipline is the brand.
6. **Black takeover for premium moments.** Originals drops, Y-3 collaborations, hero campaign bands — full-bleed `#000000` background with white inverse type.
7. **12-column 1440px grid with 16px gutters.** Lock every section to it. The grid is the engineering.
8. **Animate underlines, never colours.** Text-link underlines grow from 0 to 100% on hover with `transform-origin: left`. Link colour stays black.
