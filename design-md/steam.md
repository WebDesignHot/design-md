---
name: Steam
tagline: Deep blue-gray `#1b2838` with Motiva Sans — the utilitarian PC-gaming library that runs the world's largest digital storefront.
updated_at: 2026-05-04T19:57:58+12:00
published_at: 2026-05-04T19:57:58+12:00
author: webdesignhot
source_url: https://store.steampowered.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media, marketplace]
tags: [dark, bold, structured, gaming, library, pc, valve, dense]
preview_swatch: ['#1b2838', '#66c0f4', '#c7d5e0']
related: [twitch, discord, reddit]
description: 'Steam is the canonical PC-gaming storefront — a deep blue-gray `#1b2838` ground spilled across every page, anchored by a powder-blue `#66c0f4` brand accent that carries every link, every "Install Steam" CTA, and every wishlist arrow. The wordmark and chrome run **Motiva Sans**, a custom near-sibling to Open Sans that Valve commissioned for engineering-friendly readability at every density tier. The result is unapologetically utilitarian: a near-black gradient header (`#171a21` → `#1b2838`), capsule images stamped with bright blue "Buy" buttons, gunmetal cards (`#16202d`) holding tens of thousands of game tiles, and a green "Free To Play" pill (`#5c7e10`) that quietly signals the platform''s open-publishing economy. Steam reads as if it were engineered to ship the maximum number of games per pixel — and it is.'

colors:
  bg: '#1b2838'                  # canvas — Steam blue-gray ground
  bg-deep: '#171a21'             # header gradient floor, footer
  bg-darkest: '#0e141b'          # video player surface, modal backdrop
  surface: '#16202d'             # default card surface
  surface-soft: '#2a3f5a'        # raised card / popover floor
  surface-strong: '#3d4450'      # hovered card, selected sidebar
  surface-elevated: '#1b3346'    # elevated panel, sub-nav band
  surface-store-band: '#0f1c25'  # full-bleed store hero band, "Featured & Recommended"
  surface-community: '#101822'   # community page slightly cooler than store
  surface-input: '#316282'       # search / form input fill (Steam uses tinted blue)
  text: '#c7d5e0'                # primary body — soft slate-blue (signature, not white)
  text-strong: '#ffffff'         # display headlines, store CTA labels
  text-soft: '#8f98a0'           # secondary metadata, "8,432 reviews"
  text-faint: '#67707b'          # tertiary captions, timestamps
  text-link: '#66c0f4'           # link blue — same as brand
  text-disabled: '#56707f'
  brand: '#66c0f4'               # Steam Blue — the brand accent
  brand-hover: '#9bd2f8'         # hovered brand
  brand-active: '#1a9fff'        # pressed brand link
  brand-deep: '#417a9b'          # deeper brand for inactive tabs
  on-brand: '#ffffff'
  cta-install: '#5c7e10'         # green "Install Steam Now" button
  cta-install-hover: '#739c1a'   # hover for install
  cta-install-bright: '#a4d007'  # brightest green pill, mid-gradient
  cta-buy: '#5c7e10'             # green "Buy" button (same as install)
  cta-buy-hover: '#739c1a'
  cta-add-cart: '#588a1b'        # darker green "Add to Cart"
  link-default: '#66c0f4'
  link-visited: '#66c0f4'        # visited links unchanged
  link-hover: '#ffffff'
  border: '#000000'              # 1px crisp black hairline (Steam signature)
  border-soft: '#3d4450'         # softer divider on lighter surfaces
  border-strong: '#66c0f4'       # focused input border
  scrim: 'rgba(0,0,0,0.85)'      # modal backdrop
  shadow-card: 'rgba(0,0,0,0.5)'
  shadow-elev: 'rgba(0,0,0,0.7)'
  free-to-play: '#5c7e10'        # F2P green badge
  early-access: '#dba520'        # Early Access amber
  vr-supported: '#1a9fff'        # VR Supported blue badge
  controller: '#5491cf'          # Full Controller Support
  achievement: '#ffd900'         # achievement gold
  review-positive: '#66c0f4'     # "Mostly Positive" review pill
  review-overwhelming: '#1a9fff' # "Overwhelmingly Positive"
  review-mixed: '#a3a375'        # "Mixed" review olive
  review-negative: '#a34c25'     # "Negative" review brown
  discount-bg: '#4c6b22'         # green discount tag bg
  discount-text: '#beee11'       # bright lime price text
  price-original: '#56707f'      # strikethrough price
  price-final: '#beee11'         # discounted price (lime)
  price-default: '#acdbf5'       # normal price (light blue)
  badge-trading: '#dba520'
  workshop-orange: '#dba520'
  success: '#5c7e10'
  warning: '#dba520'
  danger: '#a34c25'
  info: '#66c0f4'

typography:
  display:
    family: '"Motiva Sans", "Arial", "Helvetica Neue", Helvetica, sans-serif'
    weights: [400, 700, 900]
    opentype-features: ['kern']
  body:
    family: '"Motiva Sans", "Arial", "Helvetica Neue", Helvetica, sans-serif'
    weights: [400, 700]
  mono:
    family: '"Lucida Console", Monaco, "Courier New", monospace'
    weights: [400]
  scale:
    display-hero:    { size: 32, weight: 700, lineHeight: 1.2,  tracking: '0',       family: display, notes: 'Store landing hero, "About Steam"' }
    display-lg:      { size: 26, weight: 700, lineHeight: 1.2,  tracking: '0',       family: display, notes: 'Featured-game banner title' }
    display-md:      { size: 22, weight: 700, lineHeight: 1.2,  tracking: '0',       family: display, notes: 'Game detail page title (apphub)' }
    section-head:    { size: 18, weight: 400, lineHeight: 1.2,  tracking: '0.5px',   family: display, transform: uppercase, notes: 'Section bands "Featured & Recommended", "Specials"' }
    sub-section:     { size: 16, weight: 700, lineHeight: 1.25, tracking: '0',       family: display, notes: 'Capsule title within carousels' }
    capsule-title:   { size: 14, weight: 700, lineHeight: 1.3,  tracking: '0',       family: display, notes: 'Small/medium capsule title' }
    body-md:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Default body, descriptions' }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Sidebar copy, review snippet' }
    body-xs:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Caption, footer, sub-metadata' }
    nav-link:        { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.5px',   family: display, transform: uppercase, notes: 'Top nav: STORE COMMUNITY ABOUT SUPPORT' }
    sub-nav-link:    { size: 12, weight: 400, lineHeight: 1.0,  tracking: '1px',     family: display, transform: uppercase, notes: 'Store sub-nav: Your Store, New & Noteworthy, Categories' }
    button-cta:      { size: 15, weight: 400, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Install Steam, Buy buttons' }
    button-md:       { size: 13, weight: 400, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Add to cart, Wishlist' }
    button-sm:       { size: 12, weight: 400, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Inline pills, filters' }
    price:           { size: 13, weight: 400, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'], notes: 'Price text and discount %' }
    discount-pct:    { size: 18, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body, notes: '"-50%" lime green discount tag' }
    review-summary:  { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: '"Very Positive · 8,432 user reviews"' }
    badge:           { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.5px',   family: body, transform: uppercase, notes: '"FREE TO PLAY", "EARLY ACCESS"' }
    code:            { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',       family: mono, notes: 'Stream-key, dev surface' }

radius:
  none: 0          # most chrome — Steam is flat-rectangular
  micro: 1
  sm: 2            # buttons, capsules
  md: 3            # subtle card softening on a few surfaces
  lg: 4            # rare large container
  pill: 9999       # only used in profile avatars

spacing:
  base: 4
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96]

layout:
  page-width: 940     # Steam's deliberately narrow content column
  prose-width: 616
  header-height: 104  # 1.04rem cap with main nav + sub nav
  main-nav-height: 64
  sub-nav-height: 40
  capsule-md: '184x69'  # standard horizontal capsule
  capsule-lg: '467x181' # large featured capsule
  hero-capsule: '616x353' # hero capsule on game detail

components:
  button-install:
    bg: 'linear-gradient(to bottom, #75b022 5%, #588a1b 95%)'
    color: '#ffffff'
    radius: 2
    padding: '10px 20px'
    font: button-cta
    border: '1px solid #4c6b22'
    use: '"Install Steam" green gradient pill on header — primary install CTA. Inverts to slightly brighter on hover.'
  button-install-hover:
    bg: 'linear-gradient(to bottom, #b6d908 5%, #80a625 95%)'
    color: '#ffffff'
    use: 'Hover state — brighter lime gradient.'
  button-buy:
    bg: 'linear-gradient(to bottom, #75b022 5%, #588a1b 95%)'
    color: '#ffffff'
    radius: 2
    padding: '8px 20px'
    font: button-md
    use: '"Buy" / "Add to Cart" green CTA on game detail pages.'
  button-add-wishlist:
    bg: 'linear-gradient(to bottom, #67c1f5 5%, #417a9b 95%)'
    color: '#ffffff'
    radius: 2
    padding: '8px 20px'
    font: button-md
    use: '"Add to Wishlist" — Steam-blue gradient, secondary CTA on game pages.'
  button-cart-secondary:
    bg: 'linear-gradient(to bottom, rgba(255,255,255,0.2) 5%, rgba(255,255,255,0.1) 95%)'
    color: '#67c1f5'
    radius: 2
    padding: '6px 16px'
    use: 'Generic secondary action — translucent over dark, blue text.'
  button-text-link:
    bg: 'transparent'
    color: '#67c1f5'
    use: 'Inline blue link — Steam''s default link style across body prose.'
  capsule-md:
    bg: '#16202d'
    color: '#c7d5e0'
    radius: 0
    padding: 0
    width: 184
    height: 69
    use: 'Standard horizontal game capsule — 184x69 cover art with title overlaid bottom or external label.'
  capsule-lg:
    bg: '#16202d'
    color: '#c7d5e0'
    radius: 0
    padding: 0
    width: 467
    height: 181
    use: 'Featured & Recommended hero capsule — 467x181 cover art with discount tag, price, platform badges overlaid.'
  capsule-vertical:
    bg: '#16202d'
    color: '#c7d5e0'
    radius: 0
    width: 215
    height: 323
    use: 'Vertical capsule used in carousel rails on store landing — 215x323 portrait box art.'
  game-card:
    bg: '#16202d'
    color: '#c7d5e0'
    radius: 0
    border: '1px solid #000000'
    padding: 0
    use: 'Search-result game card — capsule + title/price/platform tags row.'
  discount-tag:
    bg: '#4c6b22'
    color: '#beee11'
    radius: 0
    padding: '2px 4px'
    font: discount-pct
    use: 'Lime-on-olive discount tag "-50%" — Steam''s most distinctive merchandising element.'
  free-to-play-badge:
    bg: 'transparent'
    color: '#5c7e10'
    radius: 0
    border: '1px solid #5c7e10'
    padding: '2px 6px'
    font: badge
    use: '"FREE TO PLAY" outline badge on capsules.'
  early-access-badge:
    bg: 'transparent'
    color: '#dba520'
    radius: 0
    border: '1px solid #dba520'
    padding: '2px 6px'
    font: badge
    use: '"EARLY ACCESS" outline badge.'
  review-summary-pill:
    bg: 'transparent'
    color: '#66c0f4'
    radius: 0
    padding: '2px 6px'
    font: review-summary
    use: '"Very Positive" / "Overwhelmingly Positive" inline summary text — colour cycles based on tier.'
  text-input:
    bg: '#316282'
    color: '#ffffff'
    radius: 2
    height: 28
    padding: '4px 8px'
    border: '1px solid #000000'
    font: body-sm
    use: 'Search bar input — Steam''s signature tinted-blue search field.'
  search-bar:
    bg: '#316282'
    color: '#ffffff'
    radius: 2
    height: 28
    padding: '4px 32px 4px 8px'
    use: 'Top-bar search field — tinted blue rectangle with magnifier icon.'
  hero-banner:
    bg: 'linear-gradient(to right, #1b2838 0%, transparent 60%, transparent 100%)'
    color: '#c7d5e0'
    radius: 0
    use: 'Game detail hero — full-bleed cover art with title block overlaid left, gradient mask for legibility.'
  sidebar-rail:
    bg: '#16202d'
    color: '#c7d5e0'
    width: 226
    use: 'Game detail right rail — review summary, system requirements, tags. Slim 226px column.'
  primary-nav:
    bg: 'linear-gradient(to bottom, #171a21 0%, #1b2838 100%)'
    color: '#c7d5e0'
    height: 64
    use: 'Top nav: STORE · COMMUNITY · ABOUT · SUPPORT — uppercase tracked Motiva Sans labels.'
  sub-nav:
    bg: '#171a21'
    color: '#67707b'
    height: 40
    use: 'Sub-nav: "Your Store · New & Noteworthy · Categories · Points Shop · News · Labs". Smaller uppercase 1px tracking.'
  carousel-paddle:
    bg: 'rgba(0,0,0,0.5)'
    color: '#67c1f5'
    radius: 0
    width: 32
    height: 32
    use: 'Carousel arrow — slim square paddle on hover-over of capsule rail.'
  modal-backdrop:
    bg: 'rgba(0,0,0,0.85)'
    use: 'Modal/dialog scrim.'
  achievement-card:
    bg: '#16202d'
    color: '#c7d5e0'
    radius: 0
    border: '1px solid #2a3f5a'
    padding: '8px'
    use: 'Achievement tile — square 64px icon + title + description in dark card.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 300
  capsule-hover: 'capsule scales 1.0 → 1.02 + cyan glow `0 0 12px rgba(102,192,244,0.4)` over 200ms'
  carousel-slide: 'horizontal carousel slides 300ms ease-out with momentum'
  cta-press: 'button gradient deepens over 100ms on :active'
  reduced-motion: 'respects prefers-reduced-motion: reduce — capsule scale and glow suppressed; gradients remain.'

breakpoints:
  mobile: 600
  tablet: 940
  desktop: 1280
  wide: 1600

shadows:
  ambient: 'none — Steam is mostly flat'
  capsule-glow: '0 0 12px rgba(102,192,244,0.4)'
  card-soft: 'rgba(0,0,0,0.5) 0 2px 4px'
  modal: 'rgba(0,0,0,0.7) 0 8px 32px'
  ring: '0 0 0 1px #66c0f4'

accessibility:
  contrast-text-on-bg: 9.4         # #c7d5e0 on #1b2838 — AAA
  contrast-strong-on-bg: 13.4      # #ffffff on #1b2838 — AAA
  contrast-link-on-bg: 5.7         # #66c0f4 on #1b2838 — AA
  contrast-cta-text: 5.5           # #ffffff on #5c7e10 — AA
  contrast-soft-on-bg: 4.7         # #8f98a0 on #1b2838 — AA at body sizes
  focus-ring: '1px solid #66c0f4 + box-shadow inset for input fields'
  reduced-motion-honored: true
  touch-target-min: 28              # Steam runs tighter than 44; mobile app increases to 44
  keyboard-nav: 'Tab traverses top nav → search → sub-nav → main content carousels → footer; Esc closes modals.'

dark-mode: only   # Steam is dark-only across web, client, and Big Picture mode. No light variant offered.
---

## 1. Visual Theme & Atmosphere

Steam looks like a control panel for the world's PC-gaming library — and that is exactly what it is. The canvas is a deep blue-gray (`#1b2838`) that has barely changed since the 2010 redesign, anchored by a near-black header gradient (`#171a21` → `#1b2838`) and overlaid with thousands of capsule images that occupy 60–80% of every page. Cards are `#16202d` rectangles with crisp 1px black hairlines. Discount tags bleed lime-on-olive `#beee11`/`#4c6b22`. Install buttons run a green gradient that has been the same hue since Half-Life 2's storefront launched. Every chrome decision is utilitarian.

The brand accent is **Steam Blue** (`#66c0f4`) — a powder-blue that carries every link, every wishlist arrow, every review tier label, and the brand-blue gradient on the "Add to Wishlist" button. It is the only blue in the system; deeper variants (`#417a9b`, `#1a9fff`) appear in narrow contexts (inactive tabs, brightened pressed link). The page reads as if engineered first, then decorated as little as possible.

Type runs **Motiva Sans**, a custom sans-serif Valve commissioned that sits halfway between Open Sans and a slightly narrower Helvetica. Headlines tend to render at 18px / 400 with uppercase 0.5px tracking — Steam treats display copy as label rather than splash. The 32px hero size is reserved for marketing pages ("About Steam"). Body settles at 14px / 400 in `#c7d5e0` — a soft slate-blue that intentionally avoids pure white to keep long-form prose easier to scan in the engineering-room dim.

Photography is the design. Capsules — the rectangular cover-art crops at 184×69, 467×181, 215×323, 616×353 — fill every grid, every carousel, every sub-page. Behind the chrome a 1280×720 game banner often spans the full hero with the title block scrim-masked at left. Section bands stack at 24–48px rhythm with no decorative dividers; one band ends and the next begins on the same canvas blue.

Steam rejects everything fashionable. No glassmorphism. No gradient mesh. No serifs. No light mode. No sentence-case section heads. No bouncy easing. Every CTA is a 2px-radius rectangle with a top-down gradient. The brand's posture is "the platform" — and the platform doesn't need to dress up.

**Key Characteristics:**
- Single canvas: `#1b2838` deep blue-gray spilled across every page; near-black `#171a21` header gradient floor
- Steam Blue (`#66c0f4`) is the universal link/brand accent — same hex as 2010 launch
- Green gradient (`#75b022` → `#588a1b`) for Install Steam / Buy / Add to Cart — the platform's commerce voltage
- Lime-on-olive discount tag (`#beee11` / `#4c6b22`) — most distinctive merchandising element on the web
- Motiva Sans (custom Valve sans) at 400/700 with uppercase-tracked section heads
- 2px-radius rectangles for CTAs, 0px-radius capsules — Steam is flat-rectangular; pills are foreign
- 940px content width centred — narrower than modern mass-market storefronts (Amazon, Walmart) by design
- 184×69 / 467×181 / 215×323 capsule rectangles fill 60–80% of every page; no decorative chrome

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#1b2838`): the page floor on every store, community, and game-detail page — the most recognisable single hex on Steam
- **Header Gradient Floor** (`#171a21`): the near-black at the top of every page, fading down into `#1b2838` over ~80px
- **Card Surface** (`#16202d`): every game capsule background, every card, every sidebar item
- **Surface Soft** (`#2a3f5a`): raised popover, hovered card lift
- **Surface Strong** (`#3d4450`): selected sidebar, deeply pressed card
- **Surface Elevated** (`#1b3346`): elevated panels, sub-nav tier
- **Store Band** (`#0f1c25`): full-bleed darker band beneath major store sections
- **Surface Input** (`#316282`): the tinted-blue search field — Steam's signature input

### Brand
- **Steam Blue** (`#66c0f4`): the universal link, brand accent, focused border, review summary, "Add to Wishlist" gradient stop
- **Steam Blue Hover** (`#9bd2f8`): brightened on hover for links
- **Steam Blue Active** (`#1a9fff`): pressed brand link
- **Steam Blue Deep** (`#417a9b`): inactive tab, deeper gradient stop on Wishlist button
- **Brand 2024** (`#9146ff`) — not used; reserved
- **Brand Classic** (`#6441a4`) — Valve's earlier purple from 2003-era Steam, no longer present

### Accent (Commerce Greens)
- **CTA Install/Buy** (`#5c7e10`): the green base for Install Steam and Buy buttons
- **CTA Install Hover** (`#739c1a`): brighter green on hover
- **CTA Install Bright** (`#a4d007`): mid-gradient lime
- **Free-To-Play** (`#5c7e10`): outline-only F2P badge
- **Discount Background** (`#4c6b22`): the dark olive discount tag floor
- **Discount Text** (`#beee11`): the lime "-50%" / "-75%" type — Steam's most-recognised secondary accent
- **Price Final** (`#beee11`): the discounted-final-price text matches the lime
- **Price Default** (`#acdbf5`): unsale prices in light blue
- **Price Original** (`#56707f`): strikethrough original

### Interactive
- **Link** (`#66c0f4`): same hex as brand — Steam doesn't differentiate links from accent
- **Link Visited** (`#66c0f4`): unchanged — Steam never marks visited
- **Link Hover** (`#ffffff`): hover flips to white on dark surfaces
- **Disabled** (`#56707f`): muted slate
- **Selected** (`#66c0f4`): selected radio / checkbox / tab fill

### Neutral Scale
- **Text** (`#c7d5e0`) — primary body, the slate-blue ink Steam uses everywhere
- **Text Strong** (`#ffffff`) — display headlines, button labels
- **Text Soft** (`#8f98a0`) — secondary metadata, "8,432 reviews"
- **Text Faint** (`#67707b`) — tertiary captions, timestamps
- **Text Disabled** (`#56707f`) — disabled
- **Border** (`#000000`) — 1px crisp black hairline (Steam uses true black borders, not grey)
- **Border Soft** (`#3d4450`) — softer divider on lighter surfaces
- **Border Strong** (`#66c0f4`) — focused input

### Surface & Borders
- **Bg** (`#1b2838`) — canvas
- **Bg Deep** (`#171a21`) — header floor
- **Bg Darkest** (`#0e141b`) — modal scrim base
- **Surface** (`#16202d`) — cards
- **Surface Soft** (`#2a3f5a`) — popovers
- **Surface Strong** (`#3d4450`) — selected
- **Surface Elevated** (`#1b3346`)
- **Store Band** (`#0f1c25`)
- **Community Surface** (`#101822`) — community pages run slightly cooler than store

### Shadow Colors
Steam stays mostly flat. The capsule glow (`0 0 12px rgba(102,192,244,0.4)`) is the brand's only branded shadow — a soft cyan halo on hovered capsules. Modal drop shadow runs neutral `rgba(0,0,0,0.7)` 0 8px 32px.

### Semantic
- **Free-To-Play** (`#5c7e10`): F2P badge
- **Early Access** (`#dba520`): amber outline tag
- **VR Supported** (`#1a9fff`): platform tag
- **Achievement** (`#ffd900`): achievement gold
- **Review Overwhelmingly Positive** (`#1a9fff`): brightest blue
- **Review Mostly Positive** (`#66c0f4`): standard blue
- **Review Mixed** (`#a3a375`): olive
- **Review Negative** (`#a34c25`): brown
- **Trading Card** (`#dba520`): amber for Steam's trading card / market accents
- **Workshop** (`#dba520`): same amber for Workshop badges

## 3. Typography Rules

### Font Family

**Primary**: `Motiva Sans` — the custom Valve sans commissioned circa 2014 to replace Helvetica/Arial in the Steam client. Falls back to `Arial`, `"Helvetica Neue"`, `Helvetica`, `sans-serif`. Motiva Sans is a humanist sans with a slightly narrower x-height than Open Sans, optimised for engineering-style readability at 13–14px body sizes and clean rendering on Windows 7-era ClearType. Weights: 400 (regular), 700 (bold), 900 (black, used sparingly on game-detail page titles).

**Fallback for non-store surfaces**: many Steam pages still load `Arial, Helvetica, sans-serif` first because the dev surface predates the Motiva Sans rollout — the typography reads similarly across both.

**Mono**: `"Lucida Console", Monaco, "Courier New", monospace` — appears only in console/dev surfaces (Steam Console, dev wiki).

**OpenType features**: `kern` is enabled by default; `tnum` is enabled on price text. No stylistic sets.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | Motiva Sans | 32 | 700 | 1.2 | 0 | — | "About Steam", platform marketing pages |
| display-lg | Motiva Sans | 26 | 700 | 1.2 | 0 | — | Featured-game banner title |
| display-md | Motiva Sans | 22 | 700 | 1.2 | 0 | — | Game detail page H1 (apphub) |
| section-head | Motiva Sans | 18 | 400 | 1.2 | 0.5px | uppercase | "FEATURED & RECOMMENDED", "SPECIALS" |
| sub-section | Motiva Sans | 16 | 700 | 1.25 | 0 | — | Capsule title within carousel |
| capsule-title | Motiva Sans | 14 | 700 | 1.3 | 0 | — | Small/medium capsule title |
| body-md | Motiva Sans | 14 | 400 | 1.5 | 0 | — | Default body, descriptions |
| body-sm | Motiva Sans | 13 | 400 | 1.4 | 0 | — | Sidebar copy, review snippet |
| body-xs | Motiva Sans | 12 | 400 | 1.4 | 0 | — | Caption, footer, sub-metadata |
| nav-link | Motiva Sans | 14 | 700 | 1.0 | 0.5px | uppercase | "STORE COMMUNITY ABOUT SUPPORT" |
| sub-nav-link | Motiva Sans | 12 | 400 | 1.0 | 1px | uppercase | "Your Store · New & Noteworthy" |
| button-cta | Motiva Sans | 15 | 400 | 1.0 | 0 | — | Install Steam, Buy buttons |
| button-md | Motiva Sans | 13 | 400 | 1.0 | 0 | — | Add to cart, Wishlist |
| button-sm | Motiva Sans | 12 | 400 | 1.0 | 0 | — | Inline pills, filter |
| price | Motiva Sans | 13 | 400 | 1.0 | 0 | tnum | Price text and discount % |
| discount-pct | Motiva Sans | 18 | 700 | 1.0 | 0 | — | "-50%" lime green discount tag |
| review-summary | Motiva Sans | 12 | 400 | 1.4 | 0 | — | "Very Positive · 8,432 user reviews" |
| badge | Motiva Sans | 11 | 700 | 1.0 | 0.5px | uppercase | "FREE TO PLAY", "EARLY ACCESS" |
| code | Lucida Console | 12 | 400 | 1.4 | 0 | — | Stream-key, dev surface |

### Principles

- **Section heads at weight 400, not 700.** Steam's distinctive choice — section bands like "FEATURED & RECOMMENDED" run 18px / 400 / uppercase / 0.5px tracking. Many gaming-storefronts reach for 700; Steam uses 400 because the capsule rail below carries the visual weight.
- **Uppercase tracking discipline.** Top nav at 0.5px uppercase, sub-nav at 1px uppercase, badges at 0.5px uppercase. This stack of uppercase tiers is Steam's most distinctive type signature.
- **Body at 14px / 400 / `#c7d5e0`.** Soft slate-blue not white — Steam intentionally avoids pure white for long-form prose so eyes can scan tens of thousands of game descriptions without fatigue.
- **No negative tracking on display.** Steam's engineering-friendly aesthetic refuses condensed display moments — every size at 0 or positive tracking.
- **Tabular numerals on every price.** `tnum` on price text, discount %, viewer counts.
- **Open Sans / Liberation Sans are the closest open-source substitutes.** Motiva Sans is proprietary; Open Sans at 400/700 is the closest free analogue.
- **Display-lg and display-md run 700.** Game detail H1 is one of the few places Steam reaches for bold.

## 4. Component Stylings

### Buttons

**`button-install`** — the green "Install Steam Now" gradient pill on the homepage header. Top-down gradient `#75b022` → `#588a1b` (5% to 95% stops), 1px `#4c6b22` border, 2px radius, white 15/400 label, 10×20px padding. Hover brightens to `#b6d908` → `#80a625`. The single most-prominent CTA on Steam.

**`button-buy`** — the green "Buy [Game]" / "Add to Cart" CTA on game detail pages. Same gradient as install, slightly smaller padding (8×20px), 13/400 white label.

**`button-add-wishlist`** — the Steam-Blue gradient "Add to Wishlist" pill: `#67c1f5` → `#417a9b` top-down. 2px radius, 8×20px padding, white 13/400 label. Functions as the universal secondary commerce CTA.

**`button-cart-secondary`** — translucent over dark, used for inline "Continue Shopping" / "Update Cart" actions: `rgba(255,255,255,0.2)` → `rgba(255,255,255,0.1)` top-down gradient, blue text in `#67c1f5`, no border.

**`button-text-link`** — plain blue text in `#67c1f5`, no surface — the universal inline link style. Hover flips to `#ffffff`.

### Capsules (Steam's Game Tile System)

**`capsule-md`** — 184×69 horizontal cover art with title/price/platform tags overlaid externally. Used in carousels, "More Like This", search-result rails. Zero radius. The capsule image is 100% of the card; metadata stacks below.

**`capsule-lg`** — 467×181 horizontal "Featured & Recommended" hero. Rotates through trending titles. Cover art with semi-transparent gradient mask at the bottom for the discount tag, price, and platform badge cluster (Windows / Mac / Linux / SteamOS icons).

**`capsule-vertical`** — 215×323 portrait box art used in carousel rails on the store landing page. The most prominent merchandising tile.

**`hero-capsule`** — 616×353 large capsule on the game detail page, paired with a video carousel.

### Discount Tag

**`discount-tag`** — the lime-on-olive "−50%" rectangle: `#4c6b22` background, `#beee11` text in 18/700, 2×4px padding, 0px radius. Anchored bottom-left of every discounted capsule. Steam's most-distinctive merchandising element — recognisable without context as "this is a Steam discount."

### Badges

**`free-to-play-badge`** — outline-only: transparent fill, `#5c7e10` border, `#5c7e10` text in 11/700/uppercase/0.5px tracking, 2×6px padding. Anchored top-left of free-to-play capsules.

**`early-access-badge`** — same shape, amber `#dba520` outline + text, "EARLY ACCESS" label.

**`vr-supported-badge`** — blue `#1a9fff` outline + text, "VR SUPPORTED".

**`platform-badge-cluster`** — three small monochrome icons (Windows/Mac/Linux) in `#67707b` rendered inline at the bottom of each capsule.

### Cards

**`game-card`** — 184×69 capsule + metadata block: title in 14/700 white, price row, platform-badge cluster, review-summary text, discount tag (if applicable). The whole card is wrapped in a single `<a>` tag.

**`achievement-card`** — small 64px square achievement icon + title in 13/700 + description in 12/400 muted, in a `#16202d` floor with 1px `#2a3f5a` hairline.

**`sidebar-rail`** — game detail right-rail. 226px wide column holding the review summary, system requirements, tag cloud ("Action", "RPG", "Multiplayer"), franchise links. `#16202d` floor.

### Inputs / Forms

**`text-input`** — Steam's signature tinted-blue input: `#316282` background, white text, 1px black hairline, 2px radius, 28px height, 4×8px padding. Used for search bars and form fields throughout the site. The tinted-blue fill is unique to Steam — most dark-mode storefronts use a charcoal input; Steam's blue input echoes the Surface Soft (`#2a3f5a`) and reads as "this field is interactive."

**`search-bar`** — the top-bar search field: same tinted blue, 4×32×4×8 padding (extra right pad for the magnifier icon). Width ~200px on the masthead; expands on focus.

### Navigation

**`primary-nav`** — top nav with the gradient floor `#171a21` → `#1b2838`, 64px tall. STORE · COMMUNITY · ABOUT · SUPPORT in 14/700 uppercase 0.5px tracking. Steam wordmark anchored left in white, account utilities (cart, profile) flush right.

**`sub-nav`** — the slim 40px band below: `#171a21` floor, "Your Store · New & Noteworthy · Categories · Points Shop · News · Labs" in 12/400 uppercase 1px tracking with `#67707b` ink.

**`carousel-paddle`** — 32×32 square paddle that fades in on hover-over of any capsule rail. Translucent `rgba(0,0,0,0.5)` floor with `#67c1f5` arrow.

### Modals & Toasts

**`modal-backdrop`** — `rgba(0,0,0,0.85)` scrim. Modal surface is `#1b2838` (canvas inside canvas) with the same hairline-black border.

**`tooltip`** — pure black floor `#000000` with `#c7d5e0` text in 12/400, 4×8px padding, no radius. Steam tooltips are uncomfortably utilitarian on purpose.

## 5. Layout Principles

### Spacing System

- Base unit: **4px** with finer 2px steps for tight inline gaps
- Scale: `2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 96`
- Section gap (vertical): **24–48px** between major bands — Steam runs tighter than modern mass-market storefronts
- Card internal padding: **0** around capsule images (image fills to corners), **8–12px** for metadata stacks
- Gutters: **8–16px** between capsules in grid views; the dense vibe is the brand

### Grid & Container

- Max content width: **940px** centred — Steam's deliberately narrow content column dating from 2010
- Store landing: full-bleed at 940px with 4-column capsule rails (4×184px ≈ 736 + gutters)
- Game detail: 2-column with 616px main column + 226px right rail + 32px gutter
- Search results: full-width 940px with single-column capsule list (one per row, no grid)
- Footer: 940px multi-column link list

### Whitespace Philosophy

Steam runs **dense by gaming-storefront standard**. Where Walmart breathes at 64–96px between bands, Steam stacks at 24–48px. The page is engineered to ship the maximum number of games per scroll-pixel. Inside any band, capsules nestle with 8–16px gutters. The deliberate density is the brand position: "Steam carries 100,000+ games and you should be able to see all of them."

### Section Cadence

Steam alternates between **default canvas bands** (`#1b2838`) and **darker store-band sections** (`#0f1c25`). The darker band signals editorial — "Featured & Recommended", "Specials", "Browse by Tag". Beneath it, the default canvas hosts the long search-result and category-listing surfaces.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0px | Capsules, cards, hero banners, sub-nav, footer — every full-bleed structural surface |
| Micro | 1px | Achievement icon corners |
| Small | 2px | Buttons, search bar, dropdown trigger, discount tag |
| Medium | 3px | Subtle softening on a few surfaces (rare) |
| Large | 4px | Reserved for occasional larger containers |
| Pill | 9999px | Profile avatars only |

The radius vocabulary is overwhelmingly **0px or 2px**. Steam's flat-rectangular geometry is the brand — pills are foreign except for circular avatars.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Default for body, capsules, cards, hero bands, footer (~95% of surfaces) |
| 1 — Capsule glow | `0 0 12px rgba(102,192,244,0.4)` | Hovered capsule — Steam Blue cyan halo |
| 2 — Card soft | `rgba(0,0,0,0.5) 0 2px 4px` | Achievement card, popover |
| 3 — Modal | `rgba(0,0,0,0.7) 0 8px 32px` | Centred dialogs |
| 4 — Scrim | `rgba(0,0,0,0.85)` | Modal backdrop |

### Shadow Philosophy

Depth comes from **the canvas-vs-card surface separation** (`#1b2838` body vs `#16202d` cards) and **the subtle gradient on the header** (`#171a21` → `#1b2838`). The capsule-hover cyan glow is Steam's only branded shadow — a halo that reads as "this card is interactive." The brand position: depth comes from material separation, not from atmospheric Stripe-style multi-layer shadows.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, carousel slide

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 100ms | Hover colour swap (link blue → white), button gradient deepen |
| Standard | 200ms | Capsule scale + glow on hover |
| Slow | 300ms | Carousel slide, modal enter |

### Per-Component Recipes

- **Capsule hover**: capsule scales 1.0 → 1.02 + cyan glow `0 0 12px rgba(102,192,244,0.4)` over 200ms. The glow is what tells the eye "this is a clickable game."
- **Carousel slide**: horizontal carousel slides 300ms ease-out with subtle momentum.
- **Button gradient deepen**: install/buy buttons darken slightly on `:active` over 100ms.
- **Link hover**: text colour transitions from `#66c0f4` → `#ffffff` over 100ms — no underline change.
- **Modal enter**: scrim fades in over 200ms, dialog opacity 0 → 1 over 200ms emphasized.
- **Discount tag**: static — Steam never animates the discount tag; the tag's lime-on-olive contrast does the work.

### Page Transitions

Page-to-page navigation uses **no transition** — links fire hard navigation. Steam prioritises perceived speed and predictable scroll restoration.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Capsule scale + glow suppress to a colour-only hover (the title underlines instead). Carousel slide degrades to opacity crossfade.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #c7d5e0 text on #1b2838 canvas | 9.4 | AAA |
| #ffffff strong on #1b2838 | 13.4 | AAA |
| #66c0f4 link on #1b2838 | 5.7 | AA |
| #ffffff on #5c7e10 CTA | 5.5 | AA |
| #8f98a0 muted on #1b2838 | 4.7 | AA at body sizes |
| #beee11 lime on #4c6b22 discount tag | 6.5 | AA |
| #c7d5e0 on #16202d card surface | 9.5 | AAA |

The white-on-green CTA pair sits at AA. Steam compensates by using 15/400 button labels (slightly larger than typical 13/400) for primary install/buy CTAs.

### Focus Indicators

Focus ring is **1px solid `#66c0f4`** with no outset offset on inputs (relies on the border weight increase as the focus signal). Buttons get an inner box-shadow `inset 0 0 0 1px #66c0f4`. Links underline on `:focus-visible`.

### ARIA Patterns

- **Search bar**: `role="search"`, input `aria-label="Search the Steam store"`
- **Capsule**: entire tile wrapped in `<a>` with verbose `aria-label` — "Half-Life 2, $9.99, Overwhelmingly Positive, Action, Free To Play badge"
- **Add to Wishlist heart**: `aria-pressed` + label "Add to wishlist" / "Remove from wishlist"
- **Review Summary**: `aria-label="Overwhelmingly Positive based on 84,000 reviews"`
- **Carousel paddle**: `aria-label="Previous featured game"` / "Next featured game"

### Keyboard Navigation

- Tab traverses: top nav → search → sub-nav → main content carousels → footer
- Inside capsule rail: arrow keys cycle horizontally
- Esc closes modals
- Cart shortcut: `c`

### Screen Reader Hints

Verbose `aria-label` on icon-only buttons. Discount tag includes the actual delta in aria-label ("50 percent off, $9.99 down from $19.99"). Free-To-Play badge is read aloud.

### Reduced Motion

Capsule glow suppresses; carousel slides degrade to opacity crossfade.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Top nav collapses to logo + hamburger; carousel becomes touch-swipe; capsules stack 1-up |
| Tablet | 600–940px | Capsule rails 2-up; sub-nav becomes horizontal scroll |
| Desktop | 940–1280px | Default — 4-up capsule grid with 940px content cap |
| Wide | 1280px+ | Same 940px cap; outer gutters grow to ~120px |

### Touch Targets

- CTA buttons: 28–32px height (under WCAG AAA 44; Steam's mobile app increases to 44)
- Capsule: entire 184×69 card is a tap target
- Carousel paddle: 32×32 (under AAA; compensated by edge-anchored swipe gesture)

### Collapsing Strategy

- Top nav: utilities (cart, profile) collapse first; STORE/COMMUNITY/ABOUT/SUPPORT become a hamburger drawer
- Sub-nav: horizontal scroll with edge fade
- Capsule grid: 4 → 3 → 2 → 1
- Game detail: 2-column splits to single-column stack with sidebar-rail moving below the main video carousel
- Section padding: 48px desktop → 32px tablet → 24px mobile

### Image Behavior

Capsules use fixed-aspect crops (184×69, 467×181, 215×323, 616×353) — Steam never scales capsule art via CSS; the asset is delivered at exact dimensions per breakpoint. Cover-art lazy loads as the user scrolls.

### Container Queries

Used in the right rail of the game detail page: when the rail narrows below ~200px, system requirements collapse to a "Show more" disclosure.

## 11. Content & Voice

### Tone

Engineering-first, terse, fact-stating. Steam's voice is the platform talking, not a brand cheering. Headlines lead with information ("Featured & Recommended", "What's New", "Browse by Tag") rather than aspiration. Section heads run 18/400 uppercase tracked — they read as labels, not invitations.

### Microcopy Patterns

- **Button verbs**: "Install Steam Now", "Buy", "Add to Cart", "Add to Wishlist", "Continue", "Sign In" — outcome-named
- **Error message recipe**: terse + technical — "Sorry — this product was removed from sale. You may still own it."
- **Success confirmations**: factual — "Successfully added to your library"
- **Field labels**: short — "Account name", "Password", "Country/Region"
- **Stock urgency**: rare — Steam doesn't fake scarcity; pre-orders show release date instead

### Empty States

Empty cart: "There are no items in your cart." — terse, matches the engineering voice.

Empty wishlist: "Your wishlist is empty. Start adding games and we'll let you know when they go on sale."

Empty search: "No results found for [query]. Try removing some filters or searching for a different term."

### CTA Verb Conventions

- Primary: **"Install Steam Now"** (header), **"Buy [Game]"** (game detail), **"Add to Cart"**, **"Add to Wishlist"**
- Save: **"Add to Wishlist"** — the universal save verb
- Tertiary: **"Visit the Store"**, **"View Workshop"**, **"More Like This"**
- Avoided: "Get started", "Sign up free", "Click here" — Steam refuses tech-marketing voice

## 12. Dark Mode & Theming

**Dark-only.** Steam is dark-only across web, the desktop client, and Big Picture mode (the TV-friendly UI). No light variant exists. The brand position: PC-gaming sessions happen in low light, the platform should match. The deepest surface is `#0e141b` (modal backdrop); the lightest active surface is `#3d4450` (selected sidebar). The whole system lives within roughly 16% lightness range — extraordinarily narrow even by dark-mode standards.

The community section runs slightly cooler (`#101822`) than the store section (`#1b2838`) — a 5% lightness shift that distinguishes the user-generated surface (forums, profiles, screenshots) from the merchandising surface (store, search results).

## 13. Lineage & Influences

Steam's visual lineage runs through three traditions: **enthusiast PC software UIs of the late 90s** (the original 2003 Steam client borrowed visual cues from Winamp, mIRC, and PC games launchers — flat rectangles, gradient buttons, dense data); **engineering-friendly trade dress** (Visual Studio's panel-and-rail layout, the muted blue-gray surface that reads as "developer tool, not consumer brand"); and **digital-distribution catalogues from Half-Life 2's launch era** (capsule rectangles, gradient CTAs, lime-on-olive discount tags — these all date to 2004–2010 storefronts and Valve has kept them).

The current store layout solidified in 2010 with the rollout of the present `#1b2838` canvas, `#66c0f4` link blue, and Motiva Sans typography. Subsequent updates (2014 Big Picture, 2019 Steam library refresh, 2022 desktop client redesign) have refined density and spacing but not changed the colour or typographic foundations. The brand's posture is stability — Steam looks now what it looked like a decade ago, deliberately.

What Steam rejects: light mode, sentence-case section heads, expressive serifs, gradient mesh backgrounds, glassmorphism, full-width hero photography (Steam reserves photography for capsule art only), bouncy easing curves, and any chrome that would compete with the capsule grid. The brand position: **the platform doesn't dress up — the games do**.

**Influences:**
- Valve's 2003 Steam client — flat-rectangular UI, gradient CTAs, dense data
- Half-Life 2 launch storefront (2004) — capsule rectangle, lime discount tag
- Microsoft Visual Studio — blue-gray developer-tool trade dress
- Winamp / mIRC / late-90s PC enthusiast software — gradient buttons, dense surface
- Motiva Sans (Valve commission) — engineering-friendly humanist sans
- Battle.net / GOG.com — competing PC storefronts with similar capsule-rail merchandising

## 14. Do's and Don'ts

**Do**
- Anchor the page on `#1b2838` canvas with the near-black `#171a21` header gradient floor
- Use Steam Blue (`#66c0f4`) for every link, every wishlist arrow, every review summary, every focus border
- Use the green gradient (`#75b022` → `#588a1b`) for Install/Buy/Add-to-Cart CTAs — never blue
- Render discount tags in lime `#beee11` on olive `#4c6b22` floor — Steam's most distinctive merchandising element
- Use Motiva Sans with uppercase 0.5–1px tracking on section heads and nav labels
- Run section heads at 18/400 (not 700) — let the capsule rail carry visual weight
- Use 2px-radius rectangles for buttons, 0px for capsules — Steam is flat-rectangular
- Render body in `#c7d5e0` slate-blue, not pure white — engineering-room legibility
- Use the tinted-blue `#316282` input fill on search bars and form fields
- Stack capsules tight (8–16px gutters) — the density is the brand
- Keep content centred at 940px on desktop — the deliberate narrowness is canonical Steam
- Use cyan glow `0 0 12px rgba(102,192,244,0.4)` on hovered capsules — the Steam-Blue halo

**Don't**
- Don't introduce a light-mode variant — Steam is dark-only across every surface
- Don't replace the green CTA with blue — green is the commerce voltage, blue is the link voltage
- Don't widen the content column past 940px — the narrow column is canonical Steam
- Don't use sentence-case section heads — Steam's section heads are uppercase tracked labels
- Don't add bouncy easing — every transition is linear or standard cubic-bezier
- Don't add gradient backgrounds on cards — Steam cards are flat solid `#16202d`
- Don't pad sections at 96px — Steam runs 24–48px between bands
- Don't pluralise "wishlist" — Steam uses "Wishlist" as the singular noun across UI
- Don't use yellow or red on the discount tag — lime-on-olive `#beee11`/`#4c6b22` always
- Don't soften the capsule corners — capsules are 0px-radius rectangles
- Don't replace Motiva Sans with Helvetica without adjusting tracking (Helvetica reads tighter)

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #1b2838
Header Floor:     #171a21
Card:             #16202d
Steam Blue:       #66c0f4
Link Hover:       #ffffff
Install Green:    #5c7e10
Buy Green:        #5c7e10
Discount Lime:    #beee11
Discount BG:      #4c6b22
Text:             #c7d5e0
Text Soft:        #8f98a0
Border:           #000000
Wishlist Blue:    #67c1f5
```

### Example Component Prompts

- "Create a Steam Install Now button: 2px-radius pill with a top-down gradient `#75b022` → `#588a1b` (5% to 95%), 1px `#4c6b22` border, white 15/400 'INSTALL STEAM NOW' label, 10×20px padding. On hover, brightens to `#b6d908` → `#80a625`."
- "Build a Steam game capsule (medium): 184×69 cover-art rectangle with 0px radius, cyan glow `0 0 12px rgba(102,192,244,0.4)` on hover. Below the capsule, stack: title in Motiva Sans 14/700 white, platform-badge cluster (3 small grey icons), review-summary text 'Very Positive · 8,432 reviews' in 12/400 `#66c0f4`, price row with optional `#beee11` lime discounted price + `#56707f` strikethrough original on `#4c6b22` olive discount tag '-50%' anchored to the right."
- "Design a Steam top nav: gradient floor `#171a21` → `#1b2838` over 80px with 64px-tall main nav. Steam wordmark flush left in white. Nav items 'STORE · COMMUNITY · ABOUT · SUPPORT' in Motiva Sans 14/700 uppercase 0.5px tracking. Cart count and profile dropdown flush right. Below it a 40px sub-nav band with `#171a21` floor and 'Your Store · New & Noteworthy · Categories · Points Shop · News · Labs' in 12/400 uppercase 1px tracking with `#67707b` ink."
- "Build a Steam search bar: tinted-blue `#316282` fill, 2px radius, 28px height, 4×8px padding, 1px black hairline. Magnifier icon in `#c7d5e0` anchored right. White text input."
- "Create a Steam Featured & Recommended hero capsule: 467×181 cover-art rectangle full-bleed inside a `#16202d` card on the `#0f1c25` darker store-band. Bottom-left: lime `#beee11` 18/700 discount tag '-50%' on `#4c6b22` olive floor. Bottom-right: price block — `#56707f` strikethrough '$19.99' above `#beee11` lime '$9.99'. Three small platform icons (Win/Mac/Linux) in `#67707b`. Title overlaid bottom-left in white 22/700."
- "Design a Steam Add to Wishlist button: top-down Steam-Blue gradient `#67c1f5` → `#417a9b`, 2px radius, 8×20px padding, white 13/400 'Add to Wishlist' label."

### Iteration Guide

1. **Start with the canvas.** If your page isn't `#1b2838` with a `#171a21` header floor, it isn't Steam. Lock the canvas first.
2. **Steam Blue is the only blue.** `#66c0f4` for every link and accent. Don't introduce a second blue.
3. **Green is for commerce only.** `#5c7e10` and the gradient `#75b022` → `#588a1b` carry every Install/Buy/Add-to-Cart action — never use green for anything else.
4. **Capsules are 0px-radius rectangles.** Don't soften the corners. Steam is flat-rectangular.
5. **Motiva Sans with uppercase-tracked section heads.** 18/400 / 0.5px tracking / uppercase. If your section head is sentence-case bold, it isn't Steam.
6. **Body in slate-blue `#c7d5e0`, not white.** Engineering-room legibility.
7. **Lime-on-olive discount tag.** `#beee11` text on `#4c6b22` floor. Don't reach for red or yellow.
8. **Density is the brand.** 24–48px between bands, 8–16px capsule gutters. Don't breathe like a modern retail site.
