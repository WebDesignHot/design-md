---
name: Uniqlo
tagline: Signature red `#ff0000`, Helvetica Neue system stack, japanese-utility-functional grid — the LifeWear engine.
updated_at: 2026-05-04T19:57:58+12:00
published_at: 2026-05-04T19:57:58+12:00
author: webdesignhot
source_url: https://www.uniqlo.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [fashion, marketplace]
tags: [light, fashion, basics, sans, japanese, functional, e-commerce, retail, helvetica]
preview_swatch: ['#ffffff', '#ff0000', '#000000']
related: [airbnb, shopify, target]
description: 'Uniqlo''s storefront is the canonical Japanese-utility-functional retail engine on the web — a binary monochrome stack of pure white (`#ffffff`) and pure black (`#000000`) carrying every chrome surface and every body word, with the unmistakable signature red (`#ff0000`) reserved for the wordmark, every primary CTA, every sale flag, and every pricing emphasis. Type runs the **Helvetica Neue / Arial / system-stack** at modest weights — display 32–48px / 700, body 14/400, with comfortable 1.5 leading and zero letter-spacing. Uniqlo refuses webfonts on principle; the entire site renders with system Helvetica on macOS and Arial on Windows, achieving instant first-paint and a Bauhaus-via-Tokyo cleanliness. CTAs are pill-shaped (`9999px` radius) at 48px height — a quiet inheritance from KDDI / Japanese mobile UX where the pill button is the canonical action. The grid runs hard 12-column at 1280px max width, with 16px gutters and 4–5 product columns. The chromatic identity is ruthlessly disciplined: red carries every brand moment, black carries every utility moment, white carries everything else. There is no warm-grey, no off-white, no gradient. Photography is full-body lifestyle on white seamless or studio-bright environments — the LifeWear philosophy made visual: clothes for everyone, photographed plainly. The result is the most Bauhaus-disciplined mass retailer on the web — Tadao Ando architecture rendered as e-commerce.'

colors:
  bg: '#ffffff'                    # primary white canvas
  bg-page: '#ffffff'
  surface: '#ffffff'
  surface-soft: '#f7f7f7'           # alt row, disabled fields
  surface-strong: '#eeeeee'          # divider band
  surface-grey: '#f4f4f4'           # filter sidebar background
  bg-inverse: '#000000'              # rare full-width black band — used on premium collaboration drops
  brand: '#ff0000'                   # signature Uniqlo red — the wordmark, every primary CTA, sale flag
  brand-hover: '#cc0000'             # darker red on hover
  brand-active: '#990000'            # pressed deepest red
  brand-pale: '#ffe0e0'              # disabled CTA tint
  brand-deep: '#990000'              # deepest red for accent moments
  text: '#000000'                    # primary ink — pure black
  text-strong: '#000000'             # heading ink at maximum punch (same)
  text-muted: '#767676'              # secondary metadata
  text-soft: '#999999'               # caption text, faint counts
  text-on-red: '#ffffff'             # white on Uniqlo-red CTA
  text-on-black: '#ffffff'           # white on black bands
  link: '#000000'                    # default ink link with underline on hover
  link-hover: '#000000'              # link colour stays black; underline is the affordance
  border: '#dddddd'                  # default 1px hairline
  border-soft: '#eeeeee'              # editorial dividers
  border-strong: '#000000'           # focus state hairline + selected outline
  border-input: '#999999'            # form input default outline
  outline-focus: '#000000'           # focus outline pure black
  scrim: 'rgba(0,0,0,0.5)'           # modal backdrop
  shadow-card: 'rgba(0,0,0,0.08)'    # rare hover shadow
  shadow-modal: 'rgba(0,0,0,0.16)'   # modal drop
  success: '#0a8a3f'                  # in-stock + size-available green
  warning: '#cc6600'                  # low-stock urgency amber-orange
  warning-soft: '#fff4e5'
  danger: '#cc0000'                   # validation error — slightly deeper than brand red
  info: '#0064d2'                     # info banner blue
  rating-fill: '#ff0000'              # ratings render in Uniqlo red
  rating-empty: '#dddddd'
  sale-red: '#ff0000'                 # markdown price red
  member-red: '#ff0000'               # IQ Members exclusive flag

typography:
  display:
    family: '"Helvetica Neue", Helvetica, Arial, "Segoe UI", -apple-system, system-ui, sans-serif'
    weights: [400, 500, 700]
    opentype-features: ['tnum']
  body:
    family: '"Helvetica Neue", Helvetica, Arial, "Segoe UI", -apple-system, system-ui, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'Menlo, Monaco, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    hero-display:    { size: 48, weight: 700, lineHeight: 1.1,  tracking: '0',     family: display }
    page-title:      { size: 32, weight: 700, lineHeight: 1.15, tracking: '0',     family: display }
    section-head:    { size: 26, weight: 400, lineHeight: 1.2,  tracking: '0',     family: display, note: 'Uniqlo runs section heads at 400 not 700 — quieter than peers' }
    section-head-strong: { size: 26, weight: 700, lineHeight: 1.2, tracking: '0',  family: display }
    sub-section:     { size: 22, weight: 400, lineHeight: 1.25, tracking: '0',     family: display }
    sub-section-md:  { size: 18, weight: 700, lineHeight: 1.3,  tracking: '0',     family: display }
    product-title:   { size: 16, weight: 400, lineHeight: 1.4,  tracking: '0',     family: body }
    product-title-md: { size: 14, weight: 400, lineHeight: 1.4,  tracking: '0',     family: body }
    body-md:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',     family: body }
    body-sm:         { size: 12, weight: 400, lineHeight: 1.5,  tracking: '0',     family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',     family: body }
    micro:           { size: 11, weight: 400, lineHeight: 1.3,  tracking: '0',     family: body }
    price-display:   { size: 28, weight: 700, lineHeight: 1.0,  tracking: '0',     family: body, opentype: ['tnum'] }
    price-product:   { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0',     family: body, opentype: ['tnum'] }
    price-strikethru: { size: 14, weight: 400, lineHeight: 1.0,  tracking: '0',     family: body, opentype: ['tnum'] }
    price-sale:      { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0',     family: body, opentype: ['tnum'], color: '#ff0000' }
    button-cta:      { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.5px', family: body, transform: uppercase }
    nav-link:        { size: 14, weight: 400, lineHeight: 1.0,  tracking: '0',     family: body }
    badge:           { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.5px', family: body, transform: uppercase }
    chip:            { size: 13, weight: 400, lineHeight: 1.0,  tracking: '0',     family: body }

radius:
  micro: 0
  sm: 2
  md: 4         # input fields and cards round at this slim 4px
  lg: 8
  xl: 16
  pill: 9999    # CTAs, search bar, filter chips — Uniqlo's signature pill

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  masthead-height: 64
  sub-nav-height: 48
  grid-columns: 12
  grid-gutter: 16

components:
  button-cta:
    bg: '#ff0000'
    color: '#ffffff'
    radius: 9999
    padding: '14px 24px'
    height: 48
    font: button-cta
    use: 'Add to cart, Sign in, Continue, Buy now — every primary action. Pill-shaped Uniqlo red with white uppercase 14/700 label.'
  button-cta-hover:
    bg: '#cc0000'
    color: '#ffffff'
    use: 'Hover state — deepens to brand-hover red.'
  button-cta-secondary:
    bg: '#ffffff'
    color: '#000000'
    border: '1px solid #000000'
    radius: 9999
    padding: '13px 23px'
    height: 48
    use: 'See all, Save for later, secondary actions. White fill with 1px black hairline.'
  button-cta-large:
    bg: '#ffffff'
    color: '#000000'
    border: '1px solid #000000'
    radius: 9999
    padding: '16px 32px'
    height: 56
    use: '"SEE ALL CATEGORIES" homepage CTA — slightly taller, white outline pill.'
  button-text:
    bg: 'transparent'
    color: '#000000'
    text-decoration: 'underline'
    use: 'Tertiary text-only links — always underlined.'
  button-icon-square:
    bg: '#000000'
    color: '#ffffff'
    radius: 9999
    width: 48
    height: 48
    use: 'Search submit — pure-black circle (Uniqlo holds back from making this red).'
  product-card:
    bg: '#ffffff'
    color: '#000000'
    radius: 4
    padding: '0 0 12px 0'
    border: 'none'
    use: 'Listing tile — image flush to top corners, slim 4px radius, minimal type chrome below.'
  product-card-image:
    aspect: '3/4'
    bg: '#f7f7f7'
    fit: 'cover'
    use: 'Product photography — full-body lifestyle on neutral studio ground at 3:4 portrait aspect.'
  text-input:
    bg: '#ffffff'
    color: '#000000'
    radius: 4
    height: 48
    padding: '14px 16px'
    border: '1px solid #999999'
    focus: '2px solid #000000'
    use: 'Form input — slim 4px radius, 1px mid-grey hairline default, 2px black on focus.'
  search-bar:
    bg: 'rgba(255,255,255,0.95)'
    color: '#767676'
    radius: 9999
    height: 40
    padding: '0 16px'
    border: '1px solid #dddddd'
    use: 'Masthead pill search — translucent-white fill, ~480px wide on desktop.'
  chip-filter:
    bg: '#ffffff'
    color: '#000000'
    radius: 9999
    border: '1px solid #dddddd'
    padding: '8px 16px'
    height: 36
    use: 'PLP filter chip — pill 36px tall. Selected state inverts to pure-black bg / white text.'
  badge-new:
    bg: 'transparent'
    color: '#ff0000'
    border: 'none'
    font: badge
    use: 'Inline uppercase "NEW" or "LIMITED" tag in red — type only, sits above product title.'
  badge-iq-member:
    bg: '#ff0000'
    color: '#ffffff'
    radius: 2
    padding: '2px 6px'
    font: badge
    use: '"IQ MEMBERS PRICE" tag — red fill, white uppercase 11/700 with 0.5px tracking.'
  badge-sale:
    bg: 'transparent'
    color: '#ff0000'
    font: badge
    use: 'Sale flag — inline red "-25%" or "SALE" text. No surface.'
  hero-band:
    bg: '#ffffff'
    color: '#000000'
    radius: 0
    use: 'Full-bleed homepage hero — white ground with full-body lifestyle imagery + display headline + outline CTA. The chromatic restraint is the signature.'
  size-tile:
    bg: '#ffffff'
    color: '#000000'
    radius: 4
    border: '1px solid #dddddd'
    width: 56
    height: 48
    use: 'Slim 4px radius rectangle for size selection. Selected state: 2px black border with `#000000` text.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-japanese: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  duration-fast: 150
  duration-standard: 250
  duration-slow: 400
  cta-press: 'CTA bg deepens ff0000 → cc0000 over 150ms on :hover'
  card-hover: 'image translateY(0 → -4px) over 250ms ease-japanese — micro-lift without scale'
  hero-fade: 'hero image fades opacity 0 → 1 over 400ms on first paint'
  page-transition: 'hard navigation, no transition'
  reduced-motion: 'respects prefers-reduced-motion: reduce — image translate suppresses, only colour transitions remain.'

breakpoints:
  mobile: 600
  tablet: 960
  desktop: 1280
  wide: 1440

shadows:
  ambient: 'none — Uniqlo stays mostly flat'
  hover-card: 'rgba(0,0,0,0.08) 0 4px 12px'
  modal: 'rgba(0,0,0,0.16) 0 8px 24px'
  ring: '0 0 0 2px #000000'

accessibility:
  contrast-text-on-bg: 21.0          # #000000 on #ffffff — AAA
  contrast-text-on-cta: 5.3          # #ffffff on #ff0000 — AA
  contrast-link-on-bg: 21.0           # link colour stays black
  contrast-muted-on-bg: 4.5          # #767676 on #ffffff — AA
  contrast-iq-on-red: 5.3            # #ffffff on #ff0000 IQ Members tag — AA
  focus-ring: '2px solid #000000 + 2px outline-offset (pure black ring)'
  reduced-motion-honored: true
  touch-target-min: 48
  keyboard-nav: 'Tab moves logo → search → main nav → utility → main grid → footer; arrow keys inside size selector and image gallery.'

dark-mode: null   # The default storefront is light-only. The Uniqlo iOS app respects system dark mode, but the web storefront does not.
---

## 1. Visual Theme & Atmosphere

Uniqlo's storefront is the canonical Japanese-utility-functional retail engine on the web — a binary monochrome stack of pure white (`#ffffff`) and pure black (`#000000`) carrying every chrome surface and every body word, with the unmistakable signature red (`#ff0000`) reserved for the wordmark, every primary CTA, every sale flag, and every pricing emphasis. The page reads like a Tadao Ando concrete pavilion rendered as e-commerce — every surface flat, every divider a hairline, every chromatic moment earned by structural meaning rather than decoration.

Type runs the **Helvetica Neue / Arial / system-stack** at modest weights — display 32–48px / 700, body 14/400, with comfortable 1.5 leading and zero letter-spacing. Uniqlo refuses webfonts on principle: the entire site renders with system Helvetica Neue on macOS, Arial on Windows, Roboto on Android. There is no Adobe Typekit subscription, no Monotype licence, no foundry fee. The brand position: clothes are utility, type is utility — and the most-utility typography is the one that already lives on the device. The result is instant first-paint and a Bauhaus-via-Tokyo cleanliness that no licensed-webfont peer can match.

The chromatic identity is monochrome with one accent — **Uniqlo red on white-and-black**. Uniqlo is ruthlessly disciplined about red: the wordmark is red, every primary CTA is red, every sale flag is red, the IQ Members exclusive tag is red, the rating-star fill is red. Every other surface, divider, link, and chrome runs in the binary white-black stack. The discipline is what makes the red moments feel high-voltage — when red appears, it carries every brand association.

Shape language is hybrid: pill (`9999px`) for CTAs, slim (`4px`) for inputs and cards. CTAs render at 48px tall with white uppercase 14/700 labels and 0.5px positive letter-spacing. Cards round at a slim `4px` — slim enough to read flat, but not the sharp-cornered brutalism of Adidas or Balenciaga. Form inputs round at `4px`. Filter chips are pill at 36px. The shape vocabulary is intentionally calibrated: pills are inviting (CTAs, filters), slim radii are utility (inputs, cards). The hybrid reads as Japanese functional restraint applied to Western e-commerce conventions.

Photography is full-body lifestyle on white seamless or studio-bright environments — the LifeWear philosophy made visual. Every product card uses a 3:4 portrait aspect ratio with `object-fit: cover`, showing the full garment on a model in a neutral studio. There are no flat-lay product shots, no environmental contexts, no styled lifestyle moments. The model stands plainly against a soft `#f7f7f7` ground, and the garment is the focus. The composition is the same across every category: tops, pants, outerwear, kids, all photographed in the same studio with the same plain ground. The consistency is the design.

The grid runs hard 12-column at 1280px max width, with 16px gutters and 4–5 product columns. The masthead is 64px tall, sub-nav 48px, hero bands 60vh on desktop. Whitespace is moderate — Uniqlo gives editorial bands less breath than Apple but more than Walmart, calibrated to the density of a Tokyo flagship store layout.

**Key Characteristics:**
- Three-colour palette: paper white (`#ffffff`) + pure black (`#000000`) + Uniqlo red (`#ff0000`)
- System-font stack (Helvetica Neue → Arial → system-ui) — no webfonts, instant first-paint
- Pill CTAs at `9999px` / 48px height, white uppercase 14/700 with 0.5px tracking
- Slim `4px` radius on inputs and cards — Japanese functional middle ground
- Wordmark in Uniqlo red — Helvetica-style "UNIQLO" sign-system mark from the 2006 Kashiwa Sato refresh
- Black search-submit circle (not red) to balance the masthead's chromatic temperature
- Full-body lifestyle photography on white seamless at 3:4 portrait aspect — LifeWear philosophy made visual
- Section heads at 26/400 (not 700) — Uniqlo runs section heads quieter than peers
- 12-column 1280px grid with 16px gutters and 4–5 product columns
- IQ Members tag in pure-red fill is the lone "branded surface" outside CTAs

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): default page floor, every product tile, every form surface — pure white, no warmth
- **Ink** (`#000000`): primary text colour — pure black, never warm — every body word, every metadata line
- **Brand Red** (`#ff0000`): the wordmark, every primary CTA, every sale flag, IQ Members tag — the single brand colour

### Brand
- **Uniqlo Red** (`#ff0000`): the wordmark, primary CTA, sale flag, rating-star fill, IQ Members tag, validation error — the single brand colour
- **Brand Hover** (`#cc0000`): deeper red on hover
- **Brand Active** (`#990000`): pressed deepest red
- **Brand Pale** (`#ffe0e0`): disabled CTA tint
- **Brand Deep** (`#990000`): deepest red for accent moments

### Accent
- **Sale Red** (`#ff0000`): markdown price colour — same hex as brand
- **IQ Members Red** (`#ff0000`): IQ Members exclusive pricing tag — pure-red fill with white text
- **Surface Inverse** (`#000000`): rare full-width black band — used on premium collaboration drops (e.g. Uniqlo U, +J Jil Sander)

### Interactive
- **Link** (`#000000`): default inline link — distinguished by underline only, never colour
- **Link Hover** (`#000000`): link colour stays black on hover; underline is the affordance
- **Visited** (`#5e2a8c`): purple visited-link state on policy pages
- **Selected** (`#000000`): selected radio / checkbox / size-tile fill
- **Disabled** (`#cccccc`): disabled text and outline grey

### Neutral Scale
- **Ink** (`#000000`) — primary text
- **Heading Ink** (`#000000`) — same as primary; Uniqlo does not differentiate
- **Muted** (`#767676`) — secondary metadata, breadcrumbs, "Item · Care · Reviews" sub-tabs
- **Soft** (`#999999`) — caption text, faint counts, placeholder text
- **Disabled** (`#cccccc`) — disabled state text
- **Border** (`#dddddd`) — default 1px hairline
- **Border Soft** (`#eeeeee`) — editorial dividers within sub-sections
- **Border Strong** (`#000000`) — focus state, selected size tile, primary divider rules
- **Border Input** (`#999999`) — default form-input outline (mid-grey)
- **Surface Soft** (`#f7f7f7`) — alt rows, product image background, disabled fields
- **Surface Strong** (`#eeeeee`) — divider band between major sections
- **Surface Grey** (`#f4f4f4`) — filter sidebar background

### Surface & Borders
- **Canvas** (`#ffffff`) — default
- **Soft Surface** (`#f7f7f7`) — alt rows, disabled fields, product image floor
- **Strong Surface** (`#eeeeee`) — divider band
- **Filter Surface** (`#f4f4f4`) — filter sidebar
- **Inverse Surface** (`#000000`) — premium collaboration takeover bands

### Shadow Colors
Uniqlo stays mostly flat. Hover-card shadow appears on dropdowns and search-suggestion flyouts at single-layer 8% — same intensity as Etsy. The brand position: depth comes from binary surface separation (white card on white page reads via the slim `4px` radius corner, not via shadow), not from atmospheric layers. There are no brand-tinted shadows, no multi-layer compositions.

- `rgba(0,0,0,0.08) 0 4px 12px` — hover-card lift (rare)
- `rgba(0,0,0,0.16) 0 8px 24px` — modal drop

### Semantic
- **Success Green** (`#0a8a3f`): "In stock", "Free shipping" — confident green, never bright
- **Warning Amber** (`#cc6600`): "Only 2 left" low-stock urgency — warm amber
- **Danger Red** (`#cc0000`): validation error red — slightly deeper than brand red so the two are distinguishable
- **Info Blue** (`#0064d2`): informational banners — used sparingly because blue feels off-brand against the binary monochrome

## 3. Typography Rules

### Font Family

**Primary**: system-font stack — `"Helvetica Neue", Helvetica, Arial, "Segoe UI", -apple-system, system-ui, sans-serif`. Uniqlo uses no webfonts. The site renders with system Helvetica Neue on macOS, Arial on Windows, Roboto on Android. The brand position: webfonts are a licensing complication and a performance penalty, and the Bauhaus discipline of Helvetica/Arial already serves the brand identity. Instant first-paint is the result.

**Mono**: not part of the storefront brand system.

**OpenType features**: `tnum` is enabled on prices, sizes, and shipping countdowns. No stylistic sets are configured — the brand commits to default Helvetica/Arial glyphs.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | Helvetica Neue | 48 | 700 | 1.1 | 0 | — | Homepage hero campaign headline |
| page-title | Helvetica Neue | 32 | 700 | 1.15 | 0 | — | Category page H1 |
| section-head | Helvetica Neue | 26 | 400 | 1.2 | 0 | — | "LifeWear", "Sustainability" — Uniqlo runs these at 400 not 700, quieter than peers |
| section-head-strong | Helvetica Neue | 26 | 700 | 1.2 | 0 | — | Sale-emphasized section heads |
| sub-section | Helvetica Neue | 22 | 400 | 1.25 | 0 | — | "Search by category" |
| sub-section-md | Helvetica Neue | 18 | 700 | 1.3 | 0 | — | Sub-section heads on PDP |
| product-title | Helvetica Neue | 16 | 400 | 1.4 | 0 | — | PDP main product title |
| product-title-md | Helvetica Neue | 14 | 400 | 1.4 | 0 | — | Grid product card title |
| body-md | Helvetica Neue | 14 | 400 | 1.5 | 0 | — | Default body — descriptions, reviews |
| body-sm | Helvetica Neue | 12 | 400 | 1.5 | 0 | — | Secondary metadata |
| caption | Helvetica Neue | 12 | 400 | 1.4 | 0 | — | Footer micro-text |
| micro | Helvetica Neue | 11 | 400 | 1.3 | 0 | — | Footer legal |
| price-display | Helvetica Neue | 28 | 700 | 1.0 | 0 | tnum | PDP main price ("$19.90") |
| price-product | Helvetica Neue | 16 | 700 | 1.0 | 0 | tnum | Grid tile current price |
| price-strikethru | Helvetica Neue | 14 | 400 | 1.0 | 0 | tnum | Original price strikethrough |
| price-sale | Helvetica Neue | 16 | 700 | 1.0 | 0 | tnum | Sale price in Uniqlo red |
| button-cta | Helvetica Neue | 14 | 700 | 1.0 | 0.5px | uppercase | Primary CTA labels — uppercase 700 |
| nav-link | Helvetica Neue | 14 | 400 | 1.0 | 0 | — | Masthead category labels |
| badge | Helvetica Neue | 11 | 700 | 1.0 | 0.5px | uppercase | "NEW", "LIMITED", "IQ MEMBERS" tags |
| chip | Helvetica Neue | 13 | 400 | 1.0 | 0 | — | PLP filter chip labels |

### Principles

- **No webfonts.** Helvetica Neue → Arial → system-ui. The system stack is the brand position — performance and licensing simplicity over a custom face.
- **Section heads at 400, not 700.** Most retail systems shout section heads at 700; Uniqlo runs them at 400 weight to read quieter and more editorial.
- **Modest display weight (700).** Hero display runs 700 with zero letter-spacing — confident but never aggressive.
- **Tabular numerals on every price.** `tnum` on prices, sizes, shipping countdowns, member counts.
- **Button CTAs at 14/700 uppercase with 0.5px tracking.** Light positive tracking — softer than Adidas's 2px, but more engineered than Etsy's zero-tracking.
- **Zero letter-spacing on body and section heads.** Uniqlo trusts Helvetica's natural rhythm and refuses to retrack body type.
- **No expressive display alternative.** Helvetica/Arial carries every display moment — there is no script face, no variable display.
- **Mono is absent.** The brand system has no mono companion.
- **The closest open-source substitute is Inter or Söhne.** Both Schwartz/Pelli faces sit close to Helvetica's metrics. Adjust by ~0% letter-spacing.

## 4. Component Stylings

### Buttons

**`button-cta`** — Uniqlo red (`#ff0000`) fill, white text in 14/700 uppercase with 0.5px tracking, `9999px` pill, 14×24px padding, 48px height. The most common CTA: "ADD TO CART", "BUY NOW", "SIGN IN", "JOIN IQ MEMBERS". Hover deepens to `#cc0000`. Active to `#990000`.

**`button-cta-secondary`** — white fill, 1px pure-black (`#000000`) outline, ink text in 14/700 uppercase with 0.5px tracking. Same `9999px` pill, same 48px height. Used for "SEE ALL", "SAVE FOR LATER", inverse CTAs over red surfaces.

**`button-cta-large`** — slightly taller variant at 56px height with white fill and 1px black outline. Used for the homepage "SEE ALL CATEGORIES" CTA — the only "hero" CTA in the system.

**`button-text`** — plain ink text with persistent underline. Used for tertiary "View detail", "Read more" links.

**`button-icon-square`** — 48×48 black-fill pill (yes, pill — `9999px` radius makes it a circle at this aspect) with white icon. Used for search submit. Uniqlo intentionally chose pure-black over red here — making the search circle red would tip the masthead's chromatic temperature too far.

### Cards

**`product-card`** — listing tile. White surface, slim `4px` radius, no internal padding around the image (image fills to top corners), 12px bottom padding for metadata. Stack: 3:4 portrait product thumbnail with `object-fit: cover` against a soft `#f7f7f7` studio ground (full-body lifestyle photography), optional "NEW" or "LIMITED" inline red 11/700 uppercase badge above title, product title in 14/400 mixed case ink, "Men's · Tops" line in 12/400 muted, current price in 16/700 with `tnum`, optional strikethrough + sale price in 16/700 Uniqlo red, optional "IQ MEMBERS" red-fill tag below price. On hover: image translateY(0 → -4px) over 250ms — micro-lift without scale.

**`pdp-buy-box`** — sticky right-rail card on PDP. White surface, slim `4px` radius, 1px hairline border, hover-card shadow, 24px padding. Stack: large `price-display` (28/700 with `tnum`), optional IQ Members price in red 24/700 below, "Item · Care · Reviews" tab strip, colourway thumbnail rail, size grid (4–5 across, 56×48 slim-radius rectangles), full-width Uniqlo red ADD TO CART pill, outline "ADD TO WISHLIST" pill, "FREE SHIPPING OVER $99" inline 12/400 success green, "AVAILABLE AT: SOHO STORE" pickup line in 12/400 muted.

**`hero-band`** — full-bleed homepage hero. White ground (Uniqlo refuses dark hero takeovers on its mainline storefront — the chromatic restraint is the signature), full-body lifestyle imagery anchored left or right, display headline in 48/700 black, sub-copy in 18/400 black, white outline pill CTA. The hero is photographic, not chromatic.

**`category-tile`** — 3:4 portrait thumbnail with a single-line uppercase label beneath in 14/700 with 0.5px tracking. No CTA — used in homepage category navigation.

### Badges, Tags, Pills

**`badge-new`** — inline uppercase "NEW" or "LIMITED" tag in red (`#ff0000`) 11/700 with 0.5px tracking. No surface, no border — just type. Sits above the product title in the card stack.

**`badge-iq-member`** — Uniqlo red (`#ff0000`) fill, white text in 11/700 uppercase with 0.5px tracking, `2px` slim radius, 2×6px padding. "IQ MEMBERS" or "IQ MEMBERS PRICE". The lone "branded surface" outside CTAs — used to flag member-exclusive pricing.

**`badge-sale`** — inline "SALE" or "-25%" in Uniqlo red 11/700 with 0.5px tracking. No surface — same treatment as `badge-new`.

**`chip-filter`** — PLP filter chip — pill at 36px tall. White fill, 1px `#dddddd` hairline default, 8×16px padding, `9999px` radius. Selected state inverts to pure-black bg / white text with the same hairline. The pill geometry differentiates filter chrome from product chrome.

### Inputs / Forms

**`text-input`** — white surface, 1px `#999999` mid-grey hairline default, slim `4px` radius (slimmer than the pill CTAs to keep utility), 48px height, 14×16px padding. Stacked label above in `caption` 12/400 ink. On focus the border thickens to 2px pure black with a 2px outline-offset.

**`search-bar`** — masthead pill search. Translucent-white fill (`rgba(255,255,255,0.95)`), `9999px` radius, 40px height, 1px `#dddddd` hairline, ~480px wide on desktop. Placeholder in muted grey "Search". On focus a 2px black ring fades in.

**`size-tile`** — slim 4px radius rectangles (56×48) for size selection. White fill, 1px `#dddddd` hairline default. Selected state: 2px pure-black border. Out-of-stock: diagonal strikethrough (1px black line corner-to-corner). Hover: thickens to 2px black. The grid runs 4–5 tiles per row.

### Navigation

**`masthead`** — full-width white bar with a thin 1px `#dddddd` bottom hairline, 64px height. UNIQLO wordmark flush left in red (the iconic 2006 Kashiwa Sato Helvetica-style sign-system mark). Search bar centred (~480px wide, 40px tall pill). Account / Wishlist / Cart utilities flush right with 14/400 ink labels and icon-only utilities.

**`sub-nav`** — slim 48px band beneath the masthead, white fill, 1px hairline bottom. Holds department links: "WOMEN", "MEN", "KIDS", "BABY", "UNIQLO U", "+J", "UT (Graphic Tees)", "SALE". 14/400 ink with `:hover` flipping to underline (colour stays black). The SALE link goes red on hover.

**`mega-menu-flyout`** — opens from category dropdown; full-width white surface, slim `4px` radius, 1px hairline, hover-card shadow. Multi-column nav of category trees with 14/700 uppercase column heads and 14/400 mixed-case secondary links.

**`breadcrumb`** — `text-muted` (`#767676`) with `>` separators, 12/400.

### Star Rating

**`star-rating`** — 5-icon row, fill `#ff0000` (Uniqlo red) for filled, `#dddddd` for empty. Half-stars rendered with clipped half-fill. Followed by an ink-link review count: "(2,847)".

### Modals & Toasts

**`modal`** — centred dialog over a 50%-opacity ink scrim. White surface, slim `4px` radius, 1px hairline border, modal shadow. Close X anchored top-right.

**`toast`** — bottom-centre notifications. White fill, `4px` radius, 1px hairline, ink text, 16×24px padding.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`
- Section padding (vertical): **64–96px** between major bands; **96–128px** on the homepage hero band
- Card internal padding: **0** around the image (image flush to top corners), **12px** below the image for metadata; **24px** for PDP buy-box
- Gutters: **16px** between product tiles in grid view; **64–96px** between major page bands

### Grid & Container

- Max content width: **1280px** centred (narrower than Adidas's 1440px — Uniqlo runs tighter)
- 12-column grid with **16px gutters**
- Homepage: full-bleed hero band → 4-up category tiles → 4-up product carousel → 5-up product grid → editorial mosaic
- Search results: **5 column** product grid at desktop with 16px gutters; 4 → 3 → 2 at narrower widths
- PDP: 2-column with image gallery left (~58%), buy box right (~42%), variant selector and reviews stack full-width below
- Footer: 5-column link list at desktop with white ground

### Whitespace Philosophy

Uniqlo gives editorial bands moderate breath — 64–96px between major bands, 16px between product tiles. Inside each band, density is moderate — product grids run 5 across with 16px gutters. The visual rhythm is **moderate breath at hero → moderate density at grid** — calibrated to the density of a Tokyo flagship store layout where every garment is visible at a glance and the customer can scan the entire range from the entrance.

### Section Cadence

Uniqlo runs primarily on white. The default cadence is **white → white → white → photographic** with editorial breaks driven by hero campaign imagery rather than colour-band alternation. The lone exception is premium collaboration drops (Uniqlo U, +J Jil Sander, UT graphic tees) which occasionally use a black takeover band.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Sharp | 0px | Flush-to-edge components only (rare) |
| Slim | 2px | IQ Members tag |
| Form | 4px | Form inputs, product cards, modals, size tiles — Uniqlo's signature slim radius |
| Comfortable | 8px | Larger feature cards |
| Featured | 16px | Hero promo bands (rare) |
| Pill | 9999px | CTAs, search bar, filter chips, search submit circle |

The slim `4px` radius is Uniqlo's signature middle ground — flat enough to read functional, soft enough to read inviting. The discipline lives in the contrast: pills for actions (CTAs, filters), slim radii for utility (inputs, cards, size tiles), zero radius almost never.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer, all editorial bands, product cards (~95% of surfaces) |
| 1 — Hover Card | `rgba(0,0,0,0.08) 0 4px 12px` | Dropdowns, mega-menu, search-suggestion flyouts |
| 2 — Modal | `rgba(0,0,0,0.16) 0 8px 24px` | Centred dialogs |
| 3 — Scrim | `rgba(0,0,0,0.5)` | Modal backdrop |

### Shadow Philosophy

Uniqlo stays mostly flat. Depth comes from **the slim `4px` radius corner separation** (a card's slim radius reads as elevation against the page even without a shadow) and **the photographic hierarchy** of full-body lifestyle imagery. Hover-card shadow is single-layer neutral grey at 8% — no brand-tinted glow, no atmospheric multi-layer composition. The brand position: Japanese functional restraint — depth is structural, not decorative.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu
- **Japanese**: `cubic-bezier(0.25, 0.1, 0.25, 1)` — card hover translate, image fade-in (a softer, more restrained curve)

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | CTA hover colour swap, focus ring fade-in |
| Standard | 250ms | Card hover translate, modal enter, mega-menu open |
| Slow | 400ms | Hero image fade-in on first paint |

### Per-Component Recipes

- **CTA hover**: background transitions from `#ff0000` to `#cc0000` over 150ms.
- **CTA press**: deepens to `#990000` for 150ms on `:active`.
- **Product card hover**: image translateY(0 → -4px) over 250ms ease-japanese — micro-lift without scale. The translate is more restrained than Etsy's 1.04 image scale — Uniqlo wants the photo to feel composed, not alive.
- **Search-bar focus**: 2px pure-black ring fades in over 200ms.
- **Mega-menu flyout**: 250ms ease-out fade + 4px slide-down from the masthead.
- **Modal enter**: scrim fades in over 200ms, dialog translates from `translateY(8px) opacity(0)` to `0/1` over 250ms emphasized.
- **Hero image fade-in**: hero campaign imagery fades opacity 0 → 1 over 400ms on first paint.
- **Link hover**: text colour stays black; the underline appears (was hidden) — Uniqlo uses the underline as the affordance, not the colour.

### Page Transitions

Page-to-page navigation uses no transition — links fire a hard navigation. Uniqlo prioritises perceived speed and the discipline of refusing client-side routing animations.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Card translate suppresses (image stays static). Hero image fade-in becomes instant. Modal slide degrades to opacity-only.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| `#000000` ink on `#ffffff` canvas | 21.0 | AAA |
| `#ffffff` on `#ff0000` CTA | 5.3 | AA |
| `#ffffff` on `#cc0000` CTA hover | 6.5 | AA |
| `#000000` link on `#ffffff` (link colour stays black) | 21.0 | AAA |
| `#767676` muted on `#ffffff` | 4.5 | AA |
| `#ff0000` brand on `#ffffff` (sale flag) | 4.0 | AA large only — Uniqlo compensates with 11/700 uppercase |
| `#ffffff` on `#ff0000` IQ Members tag | 5.3 | AA |

The white-on-Uniqlo-red CTA pair sits at 5.3 — clean AA. The brand-red on white sale flag sits at AA-large only — Uniqlo compensates by setting badge text at 11/700 uppercase, pushing the type into the "large text" threshold where 4.0 reaches AA.

### Focus Indicators

Focus ring is **2px solid `#000000`** with 2px outline-offset. Buttons, inputs, links, and size tiles all gain a hard pure-black ring on `:focus-visible`. Uniqlo uses black (not red) for focus because the surrounding white surfaces give black the maximum contrast and the pure-black ring reads as engineering rather than decoration.

### ARIA Patterns

- **Search bar**: `role="search"`. Input has `aria-label="Search Uniqlo products"`.
- **Product card**: entire tile wrapped in `<a>` with verbose `aria-label` — "Ultra Light Down Vest, women's, 6 colours available, $59.90".
- **Size selector**: `role="radiogroup"` with `aria-labelledby` pointing to the "Size" label. Each size tile is `role="radio"` with `aria-checked` reflecting selection.
- **Wishlist heart**: `aria-pressed` to communicate save state. Label: "Add to wishlist" (default) → "Remove from wishlist" (when active).
- **Mega-menu flyout**: `role="menu"` with `role="menuitem"`; arrow keys navigate, Escape closes.
- **IQ Members tag**: `aria-label="IQ Members exclusive price — sign up to access"`.

### Keyboard Navigation

- Masthead: Tab moves logo → search input → search button → main nav → account → wishlist → cart
- Search results: Tab through tiles in document order; wishlist heart is its own tab stop
- PDP: Tab through gallery → variant selectors (colourway → size) → quantity → ADD TO CART → wishlist
- Mega-menu: arrow keys navigate, Esc closes
- Size grid: arrow keys move between tiles; Enter selects

### Screen Reader Hints

Verbose `aria-label` on icon-only buttons. The wishlist heart announces "Add to wishlist" or "Remove from wishlist" depending on state. Out-of-stock size tiles announce as disabled with the size noted in the label.

### Reduced Motion

All transitions degrade to opacity-only. Card image translate becomes instant. Hero image fade-in becomes instant.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Masthead collapses to logo + cart + hamburger; search becomes a separate tap-to-open drawer; product grid 2-up; PDP buy-box stacks beneath gallery; CTA becomes sticky-bottom |
| Tablet | 600–960px | Full masthead with inline search; product grid 3-up |
| Desktop | 960–1280px | Sub-nav with full department links; product grid 4-up |
| Wide | 1280–1440px | Content caps at 1280px; product grid 5-up |

### Touch Targets

- Primary CTAs: 48px height — meets AAA
- Search bar: 40px height — borderline AA (compensated by full-width on mobile)
- Wishlist heart on cards: 36×36px — borderline AA, compensated by 8px hit-target padding
- Size tiles: 56×48px — meets AAA
- Product tile: entire 240×360px tile is tappable

### Collapsing Strategy

- Masthead: utilities (account, wishlist) hide first; only logo + cart + hamburger remain at <600px
- Search bar: drops out of inline masthead and becomes a separate tap-to-open drawer at <960px
- Product grid: 5 → 4 → 3 → 2; 16px gutters compress to 12px → 8px
- PDP: 2-column splits to single-column stack at <960px; ADD TO CART becomes a sticky bottom bar
- Hero band: shrinks from 60vh → 50vh on mobile

### Image Behavior

Product thumbnails use `aspect-ratio: 3/4` with `object-fit: cover` against a soft `#f7f7f7` studio ground. Uniqlo commits to full-body lifestyle photography across the storefront — no flat-lay shots, no environmental contexts, no styled lifestyle moments. The model stands plainly against a soft neutral ground.

### Container Queries

Used in the PDP buy-box: when the right rail narrows below ~360px, size grid collapses from 5-up to 4-up and colourway selector switches from inline thumbnails to a horizontal scrolling rail.

## 11. Content & Voice

### Tone

Functional, plain, declarative. Uniqlo's voice is "the Tadao Ando concrete pavilion that quietly tells you what's inside" — every line names a product, names a fabric, names a price. Headlines lead with utility ("Ultra Light Down", "Heattech", "AIRism") rather than emotion. The brand consistently positions Uniqlo as **LifeWear: clothes for everyone, made plainly** — the "everyday utility" position that distinguishes Uniqlo from fashion-forward peers.

### Microcopy Patterns

- **Button verbs**: "ADD TO CART", "BUY NOW", "JOIN IQ MEMBERS", "SEE ALL CATEGORIES" — uppercase, direct, outcome-named
- **Error message recipe**: brief + corrective — "Please enter a valid email address."
- **Success confirmations**: factual — "Added to cart · Ultra Light Down Vest · Women's · M"
- **Field labels**: short and sentence-case — "Email", "Card number", "ZIP / Postal code"
- **Stock urgency**: "Only 2 left in size M" — names the size + the urgency, no exclamation

### Empty States

Empty cart: "Your cart is empty. Continue shopping for women, men, kids, and baby." — sentence case, two-clause, four destinations named.

Empty wishlist: "You haven't added anything to your wishlist yet. Tap the heart on any product to save it." — instructive.

Empty search: "No results for [query]. Try a different keyword or browse by category." — names cause + alternative.

### CTA Verb Conventions

- Primary: **"ADD TO CART"** (default), **"BUY NOW"** (one-step checkout), **"JOIN IQ MEMBERS"**, **"SIGN IN"**
- Save: **"ADD TO WISHLIST"** (Uniqlo uses "wishlist", not "favorites")
- Tertiary: **"SEE ALL"**, **"VIEW DETAIL"**, **"READ MORE"**
- Avoided: "Submit", "Click here", "Get it now" (Uniqlo prefers the cleaner "Buy now" or "Add to cart")
- Always uppercase. Always 700 weight on display CTAs.

## 12. Dark Mode & Theming

**Light-only on the public web.** The Uniqlo iOS app respects system dark mode (deep neutral surface, white text, Uniqlo red unchanged), but the web storefront stays white-and-black. The brand position: the LifeWear philosophy depends on the photographic clarity of full-body imagery against a neutral ground, and inverting the page would lose the "Tokyo flagship store" architectural cleanliness that distinguishes Uniqlo. The chromatic restraint is the signature.

The lone "darker surface" inside the page is the **occasional premium collaboration takeover band** (Uniqlo U, +J Jil Sander, UT graphic tees) which uses `#000000` ground with white type — but these appear inline within the light page rather than as a separate dark mode.

## 13. Lineage & Influences

Uniqlo's visual lineage runs through three traditions: **Japanese functional minimalism** (Tadao Ando concrete architecture, Muji's "no-brand quality goods" retail philosophy, the Bauhaus-informed Japanese postwar industrial design lineage); **Bauhaus typography** (Helvetica, the universal Swiss-Bauhaus sans-serif, applied without ornament or display alternative); and **Tokyo flagship retail** (the dense-but-orderly merchandising of the Uniqlo Ginza or 5th Avenue flagship stores, where every garment is visible at a glance and the customer can scan the entire range from the entrance).

The 2006 brand refresh, codified by Kashiwa Sato (the legendary Japanese graphic designer behind Issey Miyake, Sebu Department Store, and the National Art Center Tokyo), paired Uniqlo's existing red wordmark with a Helvetica-inspired sign-system mark, and committed the brand to system-font typography across all digital touchpoints. The pre-2006 storefront used a quirky custom mark; post-2006 it commits to Helvetica/Arial Bauhaus discipline.

What Uniqlo rejects: webfonts, gradient surfaces, multi-colour brand systems, expressive display typefaces, atmospheric shadows, sentence-case CTAs, lifestyle environmental photography (the kind that shows clothes worn at a beach or in a kitchen), and dark mode toggles. The brand position is **Japanese functional restraint** — Uniqlo wants to feel like a Tadao Ando pavilion, not a fashion-forward flagship.

**Influences:**
- Tadao Ando — Japanese minimalist architecture (concrete, light, restraint)
- Muji — no-brand quality-goods retail philosophy, [muji.com](https://muji.com)
- Kashiwa Sato (2006 brand refresh) — Helvetica-style sign-system mark
- Helmut Schmid / Helvetica (Max Miedinger, 1957) — typographic foundation
- Bauhaus / Dessau — geometric utility, sans-serif discipline
- Tokyo Ginza flagship retail — dense-but-orderly merchandising
- Issey Miyake — Japanese fashion lineage and Kashiwa Sato connection
- Apple — system-font discipline, photographic restraint, [apple.com](https://apple.com)

## 14. Do's and Don'ts

**Do**
- Anchor the brand on three colours: paper white (`#ffffff`) + pure black (`#000000`) + Uniqlo red (`#ff0000`)
- Use the system-font stack — Helvetica Neue → Arial → system-ui — with no webfonts
- Render headlines at 700 weight with zero letter-spacing
- Use `9999px` pill CTAs at 48px height with white uppercase 14/700 labels and 0.5px tracking
- Use `4px` slim radius on inputs, cards, modals, size tiles — Uniqlo's signature middle ground
- Reserve Uniqlo red for the wordmark, every primary CTA, sale flags, and the IQ Members tag
- Render the search-submit circle in pure black, not red — keeps the masthead's chromatic temperature balanced
- Use full-body lifestyle photography on a soft `#f7f7f7` studio ground at 3:4 portrait aspect
- Render section heads at 26/400 (not 700) — quieter than peers
- Animate card hover with translateY(-4px) — restraint over scale

**Don't**
- Don't add webfonts — the system stack is the brand position
- Don't introduce gradients or warm-grey neutrals
- Don't use sentence-case on CTAs — uppercase 700 with 0.5px tracking always
- Don't mix radii randomly — pills for actions, slim 4px for utility, sharp 0px almost never
- Don't use environmental lifestyle photography — Uniqlo commits to studio-bright neutral ground
- Don't add multi-layer atmospheric shadows — Uniqlo stays single-layer flat
- Don't introduce a script or expressive display face — Helvetica/Arial carries every display moment
- Don't use exclamation marks gratuitously — the voice is plain, not giddy
- Don't run negative letter-spacing on display — Uniqlo uses zero tracking
- Don't add a dark mode toggle — the LifeWear philosophy depends on the white ground
- Don't render section heads at 700 — Uniqlo runs them at 400 to read editorial
- Don't say "Submit" or "Click here" — every CTA names the outcome (ADD TO CART, BUY NOW, JOIN IQ MEMBERS)

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #ffffff
Ink:           #000000
Brand Red:     #ff0000
Brand Hover:   #cc0000
Brand Active:  #990000
Brand Pale:    #ffe0e0
Surface Soft:  #f7f7f7
Border:        #dddddd
Border Strong: #000000
Muted:         #767676
Success:       #0a8a3f
```

### Example Component Prompts

- "Create a Uniqlo-style ADD TO CART button: a 48px-tall pill (`9999px` radius) with Uniqlo red (`#ff0000`) fill, white text in Helvetica Neue 14/700 uppercase with 0.5px letter-spacing, 14×24px padding. Hover deepens to `#cc0000` over 150ms."
- "Build a Uniqlo masthead: full-width white bar with a 1px `#dddddd` bottom hairline, 64px tall. UNIQLO wordmark flush left in red `#ff0000` (the iconic Helvetica-style sign-system mark from the 2006 Kashiwa Sato refresh). Search bar centred (~480px wide, 40px tall pill, translucent-white fill). Account / Wishlist / Cart utilities flush right with 14/400 ink labels and icon-only utilities."
- "Design a Uniqlo product card: white surface, slim `4px` radius, no internal padding around the image (image fills to top corners), 12px bottom padding for metadata. Stack: 3:4 portrait product thumbnail with `object-fit: cover` against a soft `#f7f7f7` studio ground (full-body lifestyle photography), optional inline 'NEW' or 'LIMITED' badge in red 11/700 uppercase, product title in Helvetica Neue 14/400 mixed case ink, 'Men's · Tops' line in 12/400 muted, current price in 16/700 with `tnum`, optional 'IQ MEMBERS PRICE' red-fill tag below price (red bg, white text 11/700)."
- "Build a Uniqlo IQ Members tag: Uniqlo red (`#ff0000`) fill, white text in Helvetica Neue 11/700 uppercase with 0.5px tracking, slim `2px` radius, 2×6px padding. Text 'IQ MEMBERS' or 'IQ MEMBERS PRICE'."
- "Create a Uniqlo PDP buy-box: white surface, slim `4px` radius, 1px `#dddddd` border, hover-card shadow, 24px padding. Stack: large price in Helvetica Neue 28/700 with `tnum` ('$59.90'), optional IQ Members price in red 24/700 below, 'Item · Care · Reviews' tab strip in 14/400, colourway thumbnail rail (4 across), size grid (4–5 across, 56×48 slim-radius rectangles with selected/disabled states), full-width Uniqlo red ADD TO CART pill, 1px outline ADD TO WISHLIST pill, 'FREE SHIPPING OVER $99' inline 12/400 success green `#0a8a3f`."
- "Design a Uniqlo size selector: grid of 56×48 slim `4px` radius rectangles, 5 across at desktop, 4 across at narrower widths. Default state: white fill, 1px `#dddddd` hairline, Helvetica Neue 14/400 size label. Selected state: 2px pure-black border. Out-of-stock: 1px diagonal black strikethrough. Hover: thickens border to 2px black."

### Iteration Guide

1. **Start with white + black + red.** If your page has gradients, warm greys, or off-white, it isn't Uniqlo. Three colours, no exceptions.
2. **System fonts only.** Helvetica Neue → Arial → system-ui. No Adobe Typekit, no Monotype licence. The system stack is the brand.
3. **Pill CTAs at 48px / 14/700 uppercase / 0.5px tracking.** `9999px` radius, semibold weight, 14×24px padding. The pill is the action.
4. **Slim `4px` radius on cards and inputs.** Not sharp, not soft — the slim middle ground is the Japanese functional signature.
5. **Black search-submit circle, not red.** Uniqlo holds back from making the search circle red because it would tip the masthead's chromatic temperature too far.
6. **Section heads at 400, not 700.** Most retail systems shout section heads. Uniqlo runs them at 400 for editorial restraint.
7. **3:4 portrait product photography on `#f7f7f7` ground.** Full-body lifestyle on a neutral studio ground. Never environmental, never flat-lay.
8. **System-stack discipline.** No webfont request. Instant first-paint. The Bauhaus discipline of Helvetica/Arial is the brand identity.
