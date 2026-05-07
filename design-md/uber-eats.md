---
name: Uber Eats
tagline: Pure-black ground, Uber Move custom sans, Uber-app continuity — the operating system of food delivery.
updated_at: 2026-05-05T19:20:38+12:00
published_at: 2026-05-04T19:57:58+12:00
author: webdesignhot
source_url: https://ubereats.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [marketplace]
tags: [light, marketplace, sans, monochrome, delivery, food, mobile-first, system]
preview_swatch: ['#ffffff', '#000000', '#06c167']
related: [doordash, grubhub]
description: 'Uber Eats is the most disciplined storefront in food delivery — a near-clinical white canvas (`#ffffff`) anchored on pure ink (`#000000`), with the unmistakable Uber visual signature: monochromatic chrome, **Uber Move** custom sans, and a single green accent (`#06c167`) reserved for "Uber One" / "Free delivery" moments. Where DoorDash leans on red-orange voltage and Grubhub on a friendlier red, Uber Eats inherits the parent Uber app''s pure-black + white discipline — the brand position is "operating system of mobility, extended to food." Type runs Uber Move at 500–700 weights with -0.5 to -1.5px tracking on display, body in Uber Move Text at 16/400. Cards round at 8px, CTAs are pill (9999px) at 48px height in pure black (`#000000`) with white text, and the entire surface is engineered around speed-of-conversion: address input lives at masthead, store cards lean on lifestyle food photography, and every page reads as a continuous thread with the Uber rides app you''ve had since 2015.'

colors:
  bg: '#ffffff'                  # default canvas
  bg-page: '#ffffff'             # Uber Eats stays pure white — no off-white floor
  surface: '#ffffff'
  surface-soft: '#f6f6f6'        # disabled fields, alt row
  surface-strong: '#eeeeee'      # divider band
  surface-cream: '#f7f5f2'       # warm-cream on rare editorial moments (Uber One landing)
  surface-input: '#f6f6f6'       # input ground
  brand: '#000000'               # Uber Eats brand voltage is pure black — inherited from Uber
  brand-hover: '#1f1f1f'         # very dark grey hover
  brand-active: '#3d3d3d'        # pressed state
  brand-pale: '#cccccc'          # disabled CTA tint
  brand-text-on: '#ffffff'       # white on black CTA
  text: '#000000'                # primary ink — pure black
  text-strong: '#000000'
  text-muted: '#545454'          # secondary metadata
  text-soft: '#757575'            # caption text, store metadata
  text-disabled: '#aaaaaa'
  text-inverse: '#ffffff'        # text on black
  link: '#000000'                # default link inherits ink (underlined)
  link-hover: '#000000'          # link hover stays ink — only underline thickens
  border: '#eeeeee'              # default 1px hairline
  border-soft: '#f6f6f6'         # editorial dividers
  border-strong: '#cccccc'       # focus state hairline
  border-input: '#cccccc'        # form input outline
  border-card: 'transparent'     # store cards have no visible border
  star-fill: '#000000'           # star rating fill is BLACK on Uber Eats — distinctive
  star-empty: '#cccccc'          # empty star
  uberone-green: '#06c167'       # Uber One / "Free delivery" green — the only accent
  uberone-bg: '#000000'          # Uber One band on dark
  uberone-text: '#ffffff'
  free-delivery-green: '#06c167' # "Free delivery" inline green
  promo-pink: '#cae0bc'          # rare promo tint (used in editorial)
  bestseller-bg: '#f6f6f6'       # "Most popular" tag bg (just neutral)
  bestseller-text: '#000000'     # "Most popular" tag text
  scrim: 'rgba(0,0,0,0.6)'       # modal backdrop — heavier than DoorDash
  shadow-card: 'rgba(0,0,0,0.08)'
  shadow-elev: 'rgba(0,0,0,0.18)'
  shadow-deep: 'rgba(0,0,0,0.24)' # bottom-sheet on mobile
  success: '#06c167'             # success green matches Uber One
  success-soft: '#e6f9ee'
  warning: '#ffc043'             # Uber yellow for warnings — inherited from Uber rides
  warning-soft: '#fff8e6'
  danger: '#e11900'              # Uber red — distinct from any brand colour because Uber Eats has no brand red
  danger-soft: '#fde8e6'
  info: '#276ef1'                # Uber blue — used for "your trip / your order" map ETA
  info-soft: '#e8efff'

typography:
  display:
    family: '"Uber Move", "Uber Move Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [500, 700, 800]
    opentype-features: ['tnum']
  body:
    family: '"Uber Move Text", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"Uber Move Mono", Menlo, Monaco, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    hero-display:    { size: 64, weight: 700, lineHeight: 1.0,  tracking: '-2px',    family: display, opentype: ['tnum'] }
    page-title:      { size: 40, weight: 700, lineHeight: 1.05, tracking: '-1px',    family: display, opentype: ['tnum'] }
    section-head:    { size: 28, weight: 700, lineHeight: 1.15, tracking: '-0.5px',  family: display }
    sub-section:     { size: 22, weight: 700, lineHeight: 1.25, tracking: '-0.25px', family: display }
    store-name:      { size: 18, weight: 700, lineHeight: 1.33, tracking: '0',       family: body }
    store-name-grid: { size: 16, weight: 700, lineHeight: 1.25, tracking: '0',       family: body }
    item-name:       { size: 16, weight: 600, lineHeight: 1.25, tracking: '0',       family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',       family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.38, tracking: '0',       family: body }
    micro:           { size: 11, weight: 500, lineHeight: 1.27, tracking: '0.04em',  family: body }
    price-display:   { size: 22, weight: 700, lineHeight: 1.0,  tracking: '-0.25px', family: body, opentype: ['tnum'] }
    price-item:      { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'] }
    button-cta:      { size: 16, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body }
    button-sm:       { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body }
    tag-label:       { size: 12, weight: 500, lineHeight: 1.0,  tracking: '0.02em',  family: body }
    badge:           { size: 11, weight: 500, lineHeight: 1.0,  tracking: '0.06em',  family: body, transform: uppercase }

radius:
  micro: 2
  sm: 4
  md: 8        # default cards — Uber Eats convention
  lg: 12
  xl: 16
  xxl: 24
  pill: 9999   # CTAs, search bar — Uber Eats's signature pill (inherited from Uber)

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 76
  masthead-height: 64
  sub-nav-height: 56

components:
  button-cta:
    bg: '#000000'
    color: '#ffffff'
    radius: 9999
    padding: '14px 24px'
    height: 48
    font: button-cta
    use: 'Sign In, Get the app, Add to cart, Continue, Place order — every primary action.'
  button-cta-hover:
    bg: '#1f1f1f'
    color: '#ffffff'
    radius: 9999
    use: 'Hover state — slight lift to dark grey.'
  button-secondary:
    bg: '#ffffff'
    color: '#000000'
    border: '1px solid #000000'
    radius: 9999
    padding: '13px 23px'
    height: 48
    use: 'Cancel, Save, inverse CTAs.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#000000'
    use: '"Show more" links — underlined on hover.'
  button-icon-circle:
    bg: '#ffffff'
    color: '#000000'
    radius: 9999
    border: '1px solid #eeeeee'
    height: 40
    width: 40
    use: 'Heart favorite, share button on store cards.'
  store-card:
    bg: '#ffffff'
    color: '#000000'
    radius: 8
    padding: '0 0 12px 0'
    border: 'none'
    use: 'Restaurant tile — image-led 16:9 hero, clean stack of name + delivery time + fee.'
  item-card:
    bg: '#ffffff'
    color: '#000000'
    radius: 8
    padding: '12px'
    border: '1px solid #eeeeee'
    use: 'Menu item card on PDP — name + price + description + 80px square photo.'
  search-bar:
    bg: '#f6f6f6'
    color: '#000000'
    radius: 9999
    height: 48
    border: 'none'
    focus-ring: '2px solid #000000'
    use: 'Masthead pill search — soft-grey ground, no border at rest.'
  address-input:
    bg: '#f6f6f6'
    color: '#000000'
    radius: 9999
    height: 56
    border: 'none'
    focus-ring: '2px solid #000000'
    use: 'Masthead address-capture input — Uber Eats puts this beside the search bar, not in a hero (different from DoorDash).'
  text-input:
    bg: '#f6f6f6'
    color: '#000000'
    radius: 4
    height: 48
    padding: '12px 14px'
    border: '1px solid transparent'
    focus: '2px solid #000000'
    use: 'Form input — soft-grey ground, no visible border at rest, 4px radius (utility tier).'
  star-rating:
    color-fill: '#000000'
    color-empty: '#cccccc'
    use: 'Five-star rating — pure black fill (Uber Eats''s signature) — never gold.'
  bestseller-tag:
    bg: '#f6f6f6'
    color: '#000000'
    radius: 4
    padding: '2px 8px'
    use: '"#1 Most popular", "Most ordered" badges on menu items — neutral, never coloured.'
  free-delivery-tag:
    bg: 'transparent'
    color: '#06c167'
    use: 'Inline green text — no surface, no border.'
  uberone-band:
    bg: '#000000'
    color: '#ffffff'
    accent: '#06c167'
    radius: 0
    padding: '64px 0'
    use: 'Dark Uber One subscription band — green accent on the wordmark.'
  hero-promo:
    bg: '#f6f6f6'
    color: '#000000'
    radius: 16
    padding: '48px 64px'
    use: 'Soft-grey promo band — black pill CTA anchored bottom-left.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  cta-press: 'CTA bg lifts 000000 → 1f1f1f over 150ms on :active'
  card-hover: 'image scales 1.0 → 1.03 inside its rounded clip + caption translateY +2 → 0 over 240ms'
  address-suggest: 'autocomplete dropdown fades in + 4px slide over 200ms standard'
  reduced-motion: 'respects prefers-reduced-motion: reduce — image scale and slide motion suppressed; colour transitions remain.'

breakpoints:
  mobile: 600
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  ambient: 'none — Uber Eats stays mostly flat'
  hover-card: 'rgba(0,0,0,0.08) 0 4px 12px'
  modal: 'rgba(0,0,0,0.18) 0 8px 24px'
  bottom-sheet: 'rgba(0,0,0,0.24) 0 -4px 16px'
  ring: '0 0 0 2px #000000'

accessibility:
  contrast-text-on-bg: 21.0          # #000000 on #ffffff — AAA (maximum possible)
  contrast-text-on-cta: 21.0         # #ffffff on #000000 — AAA (maximum possible)
  contrast-link-hover: 21.0          # #000000 on #ffffff — AAA
  contrast-muted-on-bg: 7.5          # #545454 on #ffffff — AAA
  contrast-uberone-on-dark: 6.6      # #06c167 on #000000 — AA
  focus-ring: '2px solid #000000 + 2px outline offset (black ring)'
  reduced-motion-honored: true
  touch-target-min: 48
  keyboard-nav: 'Tab moves masthead → address → search → main grid → footer; arrow keys inside autocomplete.'

dark-mode: null   # Public storefront stays light. The Uber Eats mobile app respects system dark mode (deep neutral surface, white text, green Uber One unchanged).
---

## 1. Visual Theme & Atmosphere

Uber Eats is the most disciplined storefront in food delivery — a near-clinical white canvas (`#ffffff`) anchored on pure ink (`#000000`), with the unmistakable Uber visual signature: monochromatic chrome, **Uber Move** custom typeface, and a single green accent (`#06c167`) reserved for Uber One subscription moments and "Free delivery" inline tags. Where DoorDash leans on red-orange voltage and Grubhub on a friendlier red, Uber Eats inherits the parent Uber app's pure-black-and-white discipline. The brand position: **the operating system of mobility, extended to food.**

Type runs **Uber Move** — a custom sans family commissioned by Uber from MCKL in 2018 and refined over multiple iterations. The family ships in three optical sizes — Uber Move (display), Uber Move Text (body), Uber Move Mono (code/numerals) — with weights 400, 500, 600, 700, 800. On the storefront, headlines run 28–64px / 700 with -0.5 to -2px tracking, body 16/400 with 1.5 leading. The display cuts have aggressive negative tracking (-2px on hero) — a signature of Uber Move that no other delivery app replicates.

The chromatic identity is **monochromatic plus one accent** — pure black on pure white, with `#06c167` Uber One green reserved for subscription chrome and free-delivery callouts. Uber Eats resists every other "delivery" colour temptation: no red-orange, no warm cream, no rainbow category coding. The black does all the work. Where green appears it carries weight; where it's absent the page reads as a clean transit-system console.

Shape language is fully-pill for CTAs (9999px) and softly rounded for cards (8px). Buttons are 48px tall, the search bar is a 48px pill on a soft-grey (`#f6f6f6`) ground (no border at rest), the address input shares the same chassis at 56px. Form inputs use 4px radius (utility tier) on the same soft-grey ground — the visual hierarchy reads "every utility chassis is grey-on-white, every CTA is black-on-white."

The **address input lives in the masthead, not the hero** — a critical difference from DoorDash. Uber Eats's homepage is store-grid-first because the brand assumes you've already entered an address (returning user, mobile-app account). The desktop masthead carries a slim `Deliver to [address] | Now ▼` pill that opens an autocomplete drawer. The hero band carries category tiles and editorial bands, not an address-capture moment. This treatment reflects Uber's confidence — the brand operates from a position of "you're already in the system."

**Key Characteristics:**
- Pure black (`#000000`) on pure white (`#ffffff`) — maximum contrast, no warm tints
- Uber Move custom typeface (commissioned 2018) with aggressive negative tracking on display
- Single green accent (`#06c167`) — reserved for Uber One subscription and Free Delivery only
- Pill CTAs at 9999px / 48px height, 16/500 white text on black (medium weight, not bold)
- Star ratings render in **pure black** — Uber Eats's signature (no other delivery app does this)
- Address input lives in the masthead, not the hero — brand confidence reads as "you're already in the system"
- Soft-grey (`#f6f6f6`) input chassis with no border at rest — utility hierarchy
- Lifestyle food photography on every store card (16:9 hero, `object-fit: cover`)
- Dark Uber One band (`#000000` ground, green wordmark) — the only "dark moment" outside the sticky cart-summary
- Continuous visual thread with the Uber rides app — same Uber Move, same black-pill CTAs, same address autocomplete chrome

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): default page floor, every store tile, every form surface — pure white, no off-white floor
- **Ink** (`#000000`): primary text colour — pure black, never warm
- **Heading Ink** (`#000000`): same — Uber Eats commits to a single ink

### Brand
- **Brand Black** (`#000000`): the wordmark, primary CTA, rating-star fill, link colour, focus ring — the single brand voltage
- **Brand Hover** (`#1f1f1f`): very dark grey on hover (lifts slightly)
- **Brand Active** (`#3d3d3d`): pressed state
- **Brand Pale** (`#cccccc`): disabled CTA tint
- **Brand Text On** (`#ffffff`): white on black CTA

### Accent
- **Uber One Green** (`#06c167`): the premium subscription accent — used for the Uber One wordmark, Uber One badges, "Free delivery" inline tags, success states
- **Uber One Bg** (`#000000`): the dark band ground for Uber One promotional moments

### Interactive
- **Link** (`#000000`): default inline link in body — black with underline (no colour signalling)
- **Link Hover** (`#000000`): link hover stays black, only underline thickens or extends
- **Visited** (`#000000`): no distinct visited state — Uber Eats uses underline-only signalling
- **Disabled** (`#aaaaaa`): disabled text and outline
- **Selected** (`#000000`): selected radio / checkbox / tab fill

### Neutral Scale
- **Ink** (`#000000`) — primary text
- **Muted** (`#545454`) — secondary metadata, store delivery time, fee
- **Soft** (`#757575`) — caption text, faint counts
- **Disabled** (`#aaaaaa`) — disabled state text
- **Border** (`#eeeeee`) — default 1px hairline
- **Border Soft** (`#f6f6f6`) — editorial dividers
- **Border Strong** (`#cccccc`) — focus state hairline on inputs
- **Border Input** (`#cccccc`) — default form-input outline (when present)

### Surface & Borders
- **Canvas** (`#ffffff`) — default
- **Soft** (`#f6f6f6`) — disabled fields, alternate row, search-bar / address-input ground, text-input ground
- **Strong** (`#eeeeee`) — divider band between major sections
- **Cream** (`#f7f5f2`) — rare warm-cream on Uber One landing pages (the only chromatic warmth on Uber Eats)

### Shadow Colors
Uber Eats stays mostly flat. Hover-card shadow is single-layer neutral grey at 8% — same as DoorDash, but with a slightly heavier modal shadow at 18%. The brand position: clarity comes from monochromatic discipline and the green accent, not from atmospheric shadows.

- `rgba(0,0,0,0.08) 0 4px 12px` — hover-card lift
- `rgba(0,0,0,0.18) 0 8px 24px` — modal drop (heavier than DoorDash's 0.16)
- `rgba(0,0,0,0.24) 0 -4px 16px` — bottom-sheet on mobile (cart drawer)

### Semantic
- **Success Green** (`#06c167`): "Free delivery", "Order placed", success states — same as Uber One green (Uber Eats unifies these)
- **Warning Yellow** (`#ffc043`): advisory banners — Uber's signature mid-amber yellow (inherited from rides)
- **Danger Red** (`#e11900`): validation error red — Uber's signature deep-red (inherited from rides; distinct from any brand colour because Uber Eats has no brand red)
- **Info Blue** (`#276ef1`): informational banners and ETA / map states — Uber blue (inherited from rides)

## 3. Typography Rules

### Font Family

**Primary**: `Uber Move` — a custom sans commissioned by Uber from MCKL (Jeremy Mickel) in 2018 as part of the global brand refresh. The family ships in three optical sizes:
- **Uber Move** (display) — tighter spacing, geometric apertures, designed for headlines
- **Uber Move Text** (body) — opened apertures, slightly wider counters, optimised for 14–18px reading
- **Uber Move Mono** (code/numerals) — used in receipts and some price tabular contexts

Fallback chain: `"Helvetica Neue", Helvetica, Arial, sans-serif`. The body workhorse on Uber Eats's storefront is Uber Move Text — Uber Move (display) appears on hero headlines and section heads.

**OpenType features**: `tnum` is enabled on prices, ETAs, fees, and distances. Uber Move's default glyph set is already geometric/clean — no `ss01` swap needed.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | Uber Move | 64 | 700 | 1.0 | -2px | tnum | Hero "Order food online" — most aggressive tracking on web |
| page-title | Uber Move | 40 | 700 | 1.05 | -1px | tnum | Category page H1 |
| section-head | Uber Move | 28 | 700 | 1.15 | -0.5px | — | "Top picks", "Featured" |
| sub-section | Uber Move | 22 | 700 | 1.25 | -0.25px | — | PDP sub-section heads |
| store-name | Uber Move Text | 18 | 700 | 1.33 | 0 | — | Restaurant name on PDP |
| store-name-grid | Uber Move Text | 16 | 700 | 1.25 | 0 | — | Restaurant name on grid tiles |
| item-name | Uber Move Text | 16 | 600 | 1.25 | 0 | — | Menu item name |
| body-md | Uber Move Text | 16 | 400 | 1.5 | 0 | — | Default body — descriptions, reviews |
| body-sm | Uber Move Text | 14 | 400 | 1.43 | 0 | — | Secondary metadata, "20–30 min", "$1.99 delivery fee" |
| caption | Uber Move Text | 13 | 400 | 1.38 | 0 | — | Footer micro-text |
| micro | Uber Move Text | 11 | 500 | 1.27 | 0.04em | — | Footer legal — slight tracking for legibility |
| price-display | Uber Move Text | 22 | 700 | 1.0 | -0.25px | tnum | PDP main price, cart subtotal |
| price-item | Uber Move Text | 14 | 500 | 1.0 | 0 | tnum | Menu item price — Uber Eats keeps these slightly smaller than DoorDash |
| button-cta | Uber Move Text | 16 | 500 | 1.0 | 0 | — | Primary CTA labels — medium weight (NOT bold) |
| button-sm | Uber Move Text | 14 | 500 | 1.0 | 0 | — | Compact CTAs in cart drawer |
| nav-link | Uber Move Text | 14 | 500 | 1.0 | 0 | — | Masthead utilities |
| tag-label | Uber Move Text | 12 | 500 | 1.0 | 0.02em | — | "Most popular", category-pill text |
| badge | Uber Move Text | 11 | 500 | 1.0 | 0.06em | — | Uppercase micro-tags |

### Principles

- **Uber Move with aggressive negative tracking on display.** The -2px tracking on the 64px hero is a signature; without it, headlines read as generic geometric sans.
- **Display always 700 (bold).** Uber Eats commits to bold display — the brand projects authority and clarity.
- **Button CTAs at 500 (medium), NOT bold.** This is one of Uber Eats's most distinctive choices — most retail systems put button text at 700; Uber Eats uses 500 because the pure black already commands attention. The medium weight reads more system-app than retail-storefront.
- **Tabular numerals on every price, fee, ETA, distance.** `tnum` everywhere numerical.
- **Two optical sizes: display + text.** Uber Move on headlines, Uber Move Text on body — never mix them. Uber Move Text reads as soft and human at body sizes; Uber Move reads as confident and architectural at display sizes.
- **No stylistic sets.** Unlike Etsy / DoorDash, Uber Eats doesn't enable `ss01` — Uber Move's default glyphs are already geometric.
- **Inter is the closest open-source substitute.** Adjust by ~5% letter-spacing tighter to compensate for Uber Move's slightly more compact cap height.

## 4. Component Stylings

### Buttons

**`button-cta`** — pure black (`#000000`) fill, white text in 16/500 (medium, not bold), 9999px pill, 14×24px padding, 48px height. The most common CTA: "Sign in", "Get the app", "Add to cart", "Place order", "Continue". Hover slightly lifts to `#1f1f1f`. Active to `#3d3d3d`. The medium-weight button-text is one of Uber Eats's most distinctive choices — it reads more system-app than retail.

**`button-secondary`** — white fill, 1px ink (`#000000`) outline, ink text in 16/500. Same pill, same 48px height. Used for "Cancel", "Save", inverse CTAs over black surfaces.

**`button-tertiary-text`** — plain ink text, no surface. Underlined on hover.

**`button-icon-circle`** — small (40×40) circular icon button, white fill, 1px hairline border, ink heart icon. When favorited, the heart fills solid black.

**`button-disabled`** — `#cccccc` fill, white text. Stays neutral — Uber Eats doesn't use a brand-tinted disabled state.

### Cards

**`store-card`** — restaurant tile. White surface, 8px radius, no border (Uber Eats uses borderless cards — depth comes from shadow on hover only), no internal padding around the image (16:9 hero fills to the rounded edge), 12px bottom padding for metadata. Stack: 16:9 lifestyle hero with `object-fit: cover` (food photo or storefront), heart icon top-right (default outline ink, fills solid black when favorited), Uber One logo bottom-right of image (when applicable, shown as small green Uber One pill), restaurant name in 16/700, single black star + rating + review count in 14/500 muted, delivery time in 14/400 ink ("20–30 min"), delivery fee in 14/400 muted ("$1.99 delivery fee" or green "Free delivery").

**`item-card`** — menu item card on store PDP. White surface, 8px radius, 1px hairline border, 12px padding. Two-column layout: text left (item name in 16/600 ink, 2-line description in 14/400 muted, price in 14/500 ink), 80×80px square photo right with 8px radius and `object-fit: cover` (Uber Eats photos are slightly larger than DoorDash's 64×64). On hover, card lifts with 4px shadow.

**`pdp-cart-summary`** — sticky right-rail card on store PDP. White, 8px radius, 1px hairline border, hover-card shadow, 24px padding. Stack: large `price-display` for cart subtotal, item count, free-delivery progress hint (when applicable), full-width black "Go to checkout" pill with 16/500 white text.

**`hero-promo`** — soft-grey (`#f6f6f6`) ground, ink display headline in 64/700 with -2px tracking, body sub-copy in 18/400, black pill CTA anchored bottom-left. 16–24px radius. The page's largest typographic moment.

**`category-tile`** — square photo with a single-line ink title beneath. No CTA — used in homepage category navigation ("Pizza", "Burgers", "Sushi", "Healthy", "Mexican", "Convenience").

**`uberone-band`** — full-width dark (`#000000`) band, 64px vertical padding. Green (`#06c167`) Uber One wordmark in 32/700, white body copy, white pill CTA with black text — the inversion of the standard pattern.

### Badges, Tags, Pills

**`bestseller-tag`** — soft-grey (`#f6f6f6`) surface, ink (`#000000`) text in 12/500, 4px radius, 2×8px padding. "#1 Most popular", "Most ordered". Sits inline with menu items. **Uber Eats uses neutral tags — no coloured surface, ever.** This is a distinctive choice: where DoorDash uses soft-red and Etsy uses soft-orange, Uber Eats stays monochromatic.

**`uberone-tag`** — green (`#06c167`) text on white, with the small Uber One pill mark. Indicates a store eligible for Uber One free delivery.

**`free-delivery-tag`** — inline green (`#06c167`) text in 14/400. No surface, no border — sits inline with the delivery-fee line.

**`promo-tag`** — neutral or branded — Uber Eats uses sparing promo tags. When present they sit as small ink-on-white pills with a thin border.

**`category-pill`** — soft-grey (`#f6f6f6`) surface, ink text in 14/500, 9999px pill, 32px height. Used in the horizontal-scroll category-chip row beneath the masthead.

### Inputs / Forms

**`address-input`** — masthead-resident pill (Uber Eats's distinctive choice — different from DoorDash's hero-resident). Soft-grey (`#f6f6f6`) ground, no border at rest, 9999px pill, 56px height in the mobile drawer / 40–48px in the desktop masthead. Pin-icon prefix (ink map pin), placeholder "Enter delivery address" in 14/500 muted. Pairs with a "Now" delivery-time selector to its right. On focus, 2px ink ring fades in.

**`text-input`** — soft-grey (`#f6f6f6`) ground, 1px transparent border, 4px radius (utility tier — slimmer than DoorDash's 8px), 48px height, 12×14px padding. Stacked label above in 13/400 muted. On focus, ground stays soft-grey but a 2px ink ring fades in.

**`search-bar`** — masthead pill search. Soft-grey (`#f6f6f6`) fill, 9999px radius, 48px height, no border at rest. Single text input with magnifier-glass prefix.

### Navigation

**`masthead`** — full-width white bar with a thin 1px `#eeeeee` bottom border, 76px height. Uber Eats wordmark flush left in pure black (Uber Move 24/700 with the green "Eats" suffix). Address input + delivery-time selector centred-left, search bar centred, account / orders / cart utilities flush right with thin 14/500 ink labels. The Uber Eats wordmark is the brand's only chromatic moment — "Uber" in black, "Eats" in green (`#06c167`).

**`sub-nav`** — slim 56px band beneath the masthead, white fill, horizontally-scrolling category chip row. Pill chips at 32px height with 14/500 ink labels on soft-grey ground. Selected chip flips to ink-on-white-with-border.

**`category-nav`** — homepage horizontal scroll of round category tiles (64×64 photo + 14/500 label beneath).

**`breadcrumb`** — `text-muted` (`#545454`) with `›` separators, 13/400.

### Star Rating

**`star-rating`** — single-icon row with numeric. Cards typically render a single **black** star + "4.7" + "(2,847)" review count in 14/500 ink. PDPs sometimes render the full 5-star spread, all in ink fill. The black-star choice is one of Uber Eats's most distinctive design tells — no other major delivery brand renders ratings in pure black.

### Modals & Toasts

**`modal`** — centred dialog over a 60%-opacity ink scrim (heavier than DoorDash's 50%). White surface, 12px radius, 1px hairline border, modal shadow. Close X anchored top-right.

**`bottom-sheet`** — mobile-first cart drawer. White surface, 16px top-radius (corners only), full-width, slides up from bottom with a 4px deep shadow above. Contains cart items + subtotal + black "Go to checkout" pill.

**`toast`** — bottom-centre notifications. Dark (`#000000`) fill, 8px radius, white text, 16×24px padding.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 56 · 64 · 80 · 96 · 128`
- Section padding (vertical): **64–96px** between major bands; **128px** on the editorial bands (Uber One landing, "Why Uber Eats")
- Card internal padding: **0** around the store-card image, **12px** below for metadata; **12px** for item-cards; **24px** for PDP cart-summary
- Gutters: **16px** between store tiles in grid view; **16px** between item-cards on PDP; **96–128px** between major page bands

### Grid & Container

- Max content width: **1280px** centred
- Homepage: address+search masthead, then category chips (horizontal scroll), then store grid 4-up, then editorial bands
- Search results: **4-column** store grid at desktop with 16px gutters; 3-up at tablet; 2-up at mobile
- Store PDP: 2-column with menu list left (~64%), sticky cart-summary right (~32%); menu list groups items by category section
- Footer: 4-column link list at desktop with white ground and 1px top border

### Whitespace Philosophy

Uber Eats gives editorial bands moderate-to-generous breath — 64–96px between sections, 128px on Uber One bands. Inside each band, density is moderate — store grids run 4 across with 16px gutters. The visual rhythm is **address+search masthead → category scroll → store grid → editorial band → footer** — a streamlined, less-funnel-shaped page than DoorDash because Uber Eats assumes you're already in the system.

### Section Cadence

Uber Eats alternates between **white bands** (default body, store grids, store PDPs) and **dark Uber One bands** (`#000000` ground with green wordmark). The dark band is the only chromatic rupture in the otherwise white-and-black palette — Uber Eats uses it to spotlight Uber One subscriptions exactly once per page, with rare exceptions for editorial moments.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Dense table corners |
| Small | 4px | Bestseller / "Most popular" tags, text-input fields, micro-badges |
| Card | 8px | Store tiles, item cards, dropdowns |
| Featured | 12px | Modal containers |
| Hero | 16px | Hero promo bands, bottom-sheet (top corners only) |
| XXL | 24px | Editorial moments, larger feature cards |
| Pill | 9999px | CTAs, search bar, address input, category chips, favorite icon button |

There are no compound radii in mainline UI **except** the bottom-sheet on mobile, which uses `16px 16px 0 0` (top corners only). Form text-inputs at 4px are slimmer than the 8px cards — chosen to read utility-coded.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer, all editorial bands (~95% of surfaces) |
| 1 — Hover Card | `rgba(0,0,0,0.08) 0 4px 12px` | Store tiles on hover, item cards on hover, dropdowns |
| 2 — Modal | `rgba(0,0,0,0.18) 0 8px 24px` | Centred dialogs |
| 3 — Bottom Sheet | `rgba(0,0,0,0.24) 0 -4px 16px` | Mobile cart drawer (shadow above) |
| 4 — Scrim | `rgba(0,0,0,0.6)` | Modal backdrop — heavier than DoorDash's 0.5 |

### Shadow Philosophy

Uber Eats stays mostly flat. Depth comes from **monochromatic discipline** (the pure black voltage that anchors every conversion moment) and **the photographic contrast** of seller-supplied food imagery. Hover-card shadow is a single-layer neutral grey — no atmospheric multi-layer composition. Modal shadow is slightly heavier (18% vs DoorDash's 16%) because the heavier scrim demands a more confident dialog presence. The brand position: clarity comes from the black voltage and monochromatic discipline, not from atmospheric warmth.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, bottom-sheet slide

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Hover colour swap (CTA bg lift), focus ring fade-in |
| Standard | 240ms | Card hover lift + image scale, modal enter |
| Slow | 320ms | Hero carousel slide, bottom-sheet slide-up |

### Per-Component Recipes

- **CTA hover**: background transitions from `#000000` to `#1f1f1f` over 150ms — a slight lift, almost imperceptible. Uber Eats's CTA hover is more subtle than DoorDash's because the pure black already commands max contrast.
- **CTA press**: deepens to `#3d3d3d` for 150ms on `:active`.
- **Store card hover**: image scales 1.0 → 1.03 inside its rounded clip + caption translateY(2px → 0) over 240ms.
- **Item card hover**: card lifts with a 4px shadow + photo scales 1.03 over 240ms.
- **Address autocomplete**: dropdown fades in + 4px slide-down over 200ms. Suggestion items highlight on hover with soft-grey (`#f6f6f6`) ground.
- **Address-input focus**: 2px ink ring fades in over 200ms; ground stays soft-grey.
- **Bottom-sheet slide**: cart drawer translates from `translateY(100%)` to `0` over 320ms emphasized.
- **Modal enter**: scrim fades in over 200ms (heavier opacity reach), dialog translates from `translateY(8px) opacity(0)` to `0/1` over 240ms emphasized.
- **Heart favorite**: heart fills solid black (no pulse — Uber Eats avoids celebratory animation) over 200ms.

### Page Transitions

Page-to-page navigation uses no transition — links fire a hard navigation. Uber Eats prioritises perceived speed.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Card image scale suppresses (only shadow remains). Modal slide degrades to opacity-only. Bottom-sheet slide flattens to instant.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #000000 ink on #ffffff canvas | 21.0 | AAA (maximum) |
| #ffffff on #000000 CTA | 21.0 | AAA (maximum) |
| #000000 link on #ffffff | 21.0 | AAA |
| #545454 muted on #ffffff | 7.5 | AAA |
| #06c167 Uber One green on #000000 | 6.6 | AA |
| #06c167 free-delivery on #ffffff | 2.9 | fails AA — Uber Eats compensates by always pairing with text bold weight 500+ at 14px+ and adjacency to the icon mark |
| #ffc043 warning yellow on #000000 | 12.0 | AAA |

The green-on-white free-delivery tag is the lowest contrast pair at **2.9** — failing AA at standard sizes. Uber Eats compensates by (a) always rendering free-delivery copy alongside the delivery-fee row where it gains adjacency, (b) pairing it with the Uber One badge mark in interface chrome, and (c) using bold weight 500+ at 14px+. Screen-readers always get the explicit "Free delivery" copy.

The black-on-white pair on body and CTA is the **maximum possible contrast (21.0)** — Uber Eats's monochromatic discipline guarantees AAA on every primary surface.

### Focus Indicators

Focus ring is **2px solid `#000000`** (pure black) with 2px outline-offset. Buttons, inputs, and links all gain the black ring on `:focus-visible`. Uber Eats keeps focus on the brand colour because pure black already commands max contrast on every surface — extending to focus reinforces the brand voltage.

### ARIA Patterns

- **Address input**: `role="combobox"` with `aria-expanded`, `aria-controls` linked to autocomplete listbox.
- **Search bar**: `role="search"`. Input has `aria-label="Search for restaurants and cuisines"`.
- **Store card**: entire tile wrapped in `<a>` with verbose `aria-label` — "Pizza Hut, 4.7 stars, 2,847 reviews, 20–30 minute delivery, $1.99 delivery fee, Uber One eligible".
- **Favorite heart**: `aria-pressed` to communicate save state. Label: "Add to favorites" → "Remove from favorites".
- **Star rating**: text-equivalent (`aria-label="4.7 out of 5 stars based on 2,847 reviews"`).
- **Bestseller tag**: `aria-label="Most popular menu item"`.
- **Bottom-sheet cart drawer**: `role="dialog"` with `aria-modal="true"` and focus-trap.
- **Uber One band**: standard region landmark.

### Keyboard Navigation

- Masthead: Tab moves logo → address input → delivery-time selector → search → utilities → cart
- Address input: arrow keys navigate the autocomplete dropdown; Enter selects; Esc dismisses
- Store grid: Tab through tiles in document order; favorite heart is its own tab stop
- Store PDP: Tab through menu sections → items → "Add to cart" → cart drawer
- Bottom-sheet: focus traps inside the dialog; Esc closes

### Screen Reader Hints

Verbose `aria-label` on store cards (delivery time, fee, Uber One eligibility). Free-delivery tag announces "Free delivery included" to compensate for the colour-only signalling. Uber Eats wordmark uses `aria-label="Uber Eats"` so screen-readers announce it as one word despite the bicolour treatment.

### Reduced Motion

All transitions degrade to opacity-only. Card image scale suppresses. Heart favorite becomes instant fill. Bottom-sheet slide flattens to instant.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Masthead collapses to logo + cart + hamburger; address input drops to a tappable address pill that opens a full-screen drawer; store grid 1-up or 2-up; PDP cart becomes a sticky bottom-sheet |
| Tablet | 600–1024px | Full masthead with address + search; store grid 2-up or 3-up |
| Desktop | 1024–1280px | Sub-nav with category chips; store grid 4-up |
| Wide | 1280–1440px | Content caps at 1280px; store grid 4-up with extra side breath |

### Touch Targets

- Primary CTAs: 48px height — meets AAA
- Address input: 56px (mobile drawer) / 40–48px (desktop masthead)
- Search bar: 48×48px
- Favorite heart on cards: 40×40px
- Store tile: entire 320×280px tile is tappable
- Category chips: 32px height — at the AA minimum

### Collapsing Strategy

- Masthead: utilities (orders, account) hide first; only logo + address pill + cart + hamburger remain at <600px
- Address input: collapses to a 32px-tall ink pill on mobile that opens a full-screen drawer when tapped
- Store grid: 4 → 3 → 2 → 1 (single-column at very narrow widths); 16px gutters compress to 12px → 8px
- PDP: 2-column splits to single-column stack at <1024px; cart-summary becomes a sticky bottom-sheet
- Uber One band: stays full-width but reduces vertical padding 64 → 48 → 32

### Image Behavior

Store-card images use `aspect-ratio: 16/9` with `object-fit: cover`. Item-card photos use `aspect-ratio: 1/1` at 80×80px (slightly larger than DoorDash's 64×64 because Uber Eats leans into food-photo emphasis). PDP main hero supports lightbox click on mobile.

### Container Queries

Used in the PDP cart-summary: when the right rail narrows below ~340px, item-quantity controls collapse to compact `+/-` chips.

## 11. Content & Voice

### Tone

Direct, system-coded, helpful. Uber Eats's voice is "the operating system that already knows where you are and what you want." Headlines lead with capability ("Order food online", "Discover new favourites") rather than urgency or discount. The brand consistently positions Uber Eats as **the on-demand layer over everything you eat** — speed is implicit, breadth is the headline.

### Microcopy Patterns

- **Button verbs**: "Sign in", "Get the app", "Add to cart", "Place order", "Continue", "Go to checkout" — outcome-named, but slightly drier than DoorDash's "Find Food"
- **Error message recipe**: brief + neutral — "We couldn't process that card. Try a different one."
- **Success confirmations**: temporal — "Your order is on the way · ETA 22 min"
- **Field labels**: short and direct — "Email", "Phone", "Apt or floor"
- **Stock urgency**: "Only 2 left" — minimal urgency framing; Uber Eats avoids hard-sell language

### Empty States

Empty cart: "Your cart is empty. Browse restaurants near you." — minimal, no exclamation.

Empty favorites: "You haven't favorited anything yet. Tap the heart on any restaurant to save it for later."

Empty search: "No results for [query]. Try a different cuisine or check your spelling."

No address: "Enter your delivery address to see what's available" — names the funnel's first step.

### CTA Verb Conventions

- Primary: **"Sign in"** (top-right), **"Get the app"** (mobile prompt), **"Add to cart"**, **"Go to checkout"**, **"Place order"**, **"Continue"**
- Save: **"Add to favorites"** — heart-first vocabulary
- Tertiary: **"View menu"**, **"See all"**, **"Show more"**, **"View store"**
- Avoided: "Submit", "Click here", "Buy now" (Uber Eats uses precise outcome verbs)
- Distinctive: **"Place order"** as the final-checkout verb — Uber Eats uses this where DoorDash uses "Checkout" or "Place your order"

## 12. Dark Mode & Theming

**Public storefront stays light.** Uber Eats's web is light-only. The mobile app respects system dark mode (deep neutral surface, white text, green Uber One unchanged). Uber's parent app has had a polished dark mode since 2018, but Uber Eats web has not adopted it.

The lone "darker surface" inside the page is the **Uber One band** (`#000000` ground with green wordmark), which spotlights the premium subscription rather than serving as a theme variant.

If the brand were to ship a web dark mode, the swap would be straightforward given the monochromatic discipline:
- `bg: '#0a0a0a'` (near-black ground, not pure)
- `surface: '#1a1a1a'` (cards lift slightly above ground)
- `text: '#ffffff'` (pure white for max AAA)
- `brand: '#ffffff'` (CTAs flip to white-on-black)
- `border: '#2a2a2a'`
- `green: '#06c167'` (unchanged — already designed for dark backgrounds)

## 13. Lineage & Influences

Uber Eats's visual lineage runs through three traditions: **system-design discipline** (Uber's parent app rebrand of 2018, led by Wolff Olins, established the pure-black-and-white discipline that Uber Eats inherits — system-app aesthetics over retail-storefront warmth); **Swiss modernist sans typography** (Uber Move's geometric humanist sans roots trace through Helvetica, Akzidenz-Grotesk, and the DIN family — clean, neutral, transit-system-coded); and **on-demand-delivery-app conventions** (address input, store-card grid, food photography — pioneered by Postmates and Seamless, refined by Uber Eats and DoorDash).

The 2018 brand refresh paired Uber's existing pure-black-and-white discipline with the custom Uber Move typeface (commissioned from MCKL). The pre-2018 Uber wordmark used a custom geometric face; post-2018 it sits in Uber Move with the green "Eats" suffix on Uber Eats specifically — Uber Eats kept the parent black-and-white palette but added `#06c167` Uber One green as the singular accent.

What Uber Eats rejects: warm neutrals, multi-colour brand systems, photo-heavy editorial layouts, expressive display typefaces, atmospheric shadows, exclamation-point voice, and any chromatic warmth that would dilute the system-app continuity with the parent rides app. The brand position is **operating-system clarity** — Uber Eats wants to feel like a transit console for food, not a retail storefront.

**Influences:**
- Uber rides app (2018 rebrand) — pure-black-and-white discipline, [uber.com](https://uber.com)
- Wolff Olins — 2018 Uber brand refresh agency
- MCKL / Jeremy Mickel — Uber Move typeface, [mckltype.com](https://mckltype.com)
- Postmates — pre-2020 delivery-marketplace template (acquired by Uber 2020)
- Helvetica / Akzidenz-Grotesk — Swiss modernist sans lineage
- Apple iOS HIG — system-app design conventions

## 14. Do's and Don'ts

**Do**
- Anchor the brand on pure black (`#000000`) for the wordmark, every primary CTA, ratings, focus ring
- Use Uber Move with aggressive negative tracking (-2px) on hero display headlines
- Render the Uber Eats wordmark as bicolour: "Uber" in black, "Eats" in green (`#06c167`)
- Use 9999px pill CTAs at 48px height with 16/500 (medium, NOT bold) white text on black
- Use lifestyle 16:9 food photography with `object-fit: cover` on store cards
- Render star ratings in **pure black** — never gold, never red-orange
- Keep tags neutral (soft-grey ground, ink text) — never coloured surfaces
- Reserve green (`#06c167`) for Uber One subscription, "Free delivery", and success states only
- Use soft-grey (`#f6f6f6`) input chassis with no border at rest — utility hierarchy
- Put address input in the masthead, not in the hero — brand confidence reads as "you're already in the system"
- Use tabular numerals on every price, fee, ETA, distance

**Don't**
- Don't introduce a second brand colour beyond black + green-accent — no red, no warm tints
- Don't use cool greys with warm undertones — Uber Eats commits to neutral pure black
- Don't put button CTAs at 700 (bold) — Uber Eats uses 500 (medium) for the system-app feel
- Don't render star ratings in yellow/gold or red — pure black is the signature
- Don't use coloured tag surfaces (red, orange, amber) — stay monochromatic
- Don't put the address input in the hero band — it lives in the masthead
- Don't enable `ss01` or stylistic sets — Uber Move's defaults are already clean
- Don't use exclamation marks gratuitously — the voice is system-app neutral
- Don't add atmospheric multi-layer shadows — Uber Eats stays single-layer flat
- Don't break visual continuity with the Uber rides app — same Uber Move, same black-pill CTAs, same soft-grey input chassis

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #ffffff
Ink:           #000000
Brand Hover:   #1f1f1f
Brand Active:  #3d3d3d
Surface Soft:  #f6f6f6
Surface Strong:#eeeeee
Border:        #eeeeee
Muted:         #545454
Soft:          #757575
Uber One Green:#06c167
Free Delivery: #06c167
Warning Yellow:#ffc043
Danger Red:    #e11900
```

### Example Component Prompts

- "Create an Uber Eats Add to cart button: a 48px-tall pill (9999px radius) with pure black (`#000000`) fill, white text in Uber Move Text 16/500 (medium, NOT bold), 14×24px padding. Hover lifts to `#1f1f1f`. Active to `#3d3d3d`."
- "Build an Uber Eats homepage masthead: full-width white bar with a 1px `#eeeeee` bottom border, 76px height. Uber Eats wordmark flush left in Uber Move 24/700 — 'Uber' in black + 'Eats' in green (`#06c167`). Address input + delivery-time selector centred-left as a soft-grey (`#f6f6f6`) pill (48px height, no border at rest), with a black map-pin prefix and placeholder 'Enter delivery address'. Search bar centred. 'Sign in' / 'Get the app' / cart utilities flush right in 14/500 ink."
- "Design an Uber Eats store card: white surface, 8px radius, no border (depth comes from hover-shadow only), 16:9 hero with `object-fit: cover` (lifestyle food photo), heart icon top-right (default outline ink, fills solid black when favorited), Uber One pill bottom-right of image when applicable, restaurant name in Uber Move Text 16/700 ink, single black star + '4.7' + '(2,847)' review count in 14/500 muted, '20–30 min' delivery time in 14/400 ink, '$1.99 delivery fee' in 14/400 muted (or green '#06c167' 'Free delivery' when applicable)."
- "Build an Uber Eats item card on a store PDP: white surface, 8px radius, 1px `#eeeeee` border, 12px padding, two-column layout. Left: item name in 16/600 ink, 2-line description in 14/400 muted, price in 14/500 ink with `tnum`. Right: 80×80 square photo with 8px radius and `object-fit: cover`. Optional 'Most popular' tag above the name on soft-grey (`#f6f6f6`) ground with ink text in 12/500. On hover, 4px shadow lift."
- "Create an Uber One band: full-width pure black (`#000000`) ground, 64px vertical padding. Uber One wordmark in green (`#06c167`) Uber Move 32/700, white body copy in 18/400 ('Free delivery on eligible orders, plus 5% off'), and a white pill CTA with black text in 16/500 ('Try Uber One free for one month')."
- "Design an Uber Eats hero band: soft-grey (`#f6f6f6`) ground, 24px radius, 64×80px padding. Display headline in Uber Move 64/700 with -2px tracking — 'Order food online'. Sub-copy in 18/400 ink. Black pill CTA anchored bottom-left in 16/500 — 'Get started'."

### Iteration Guide

1. **Start with pure black and white.** If your page has warm ink (`#191919`) or off-white floor, it isn't Uber Eats. The signature is `#ffffff` + `#000000` exactly.
2. **One brand voltage: black.** Plus a single green accent (`#06c167`) reserved for Uber One and free-delivery. No third colour.
3. **Uber Move with aggressive negative tracking on display.** -2px on hero, -1px on page-title. Without it, headlines read as generic geometric sans.
4. **Button CTAs at 16/500 (medium, NOT bold).** This is the most distinctive choice — most retail puts buttons at 700; Uber Eats uses 500 because the pure black already commands attention.
5. **Star ratings in pure black.** Yellow/gold reads Amazon. Red-orange reads DoorDash. Black is Uber Eats.
6. **Tags stay neutral.** Soft-grey ground + ink text. No coloured surfaces.
7. **Address input lives in the masthead, not hero.** Brand confidence: "you're already in the system."
8. **Use Uber One green sparingly.** Only on Uber One chrome, "Free delivery" tags, and success states. Never as a brand fill.
