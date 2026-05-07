---
name: Dell
tagline: Pragmatic blue `#007db8` with custom Roboto-derivative — business-first PC commerce since the dorm room.
updated_at: 2026-05-05T14:31:15+12:00
published_at: 2026-05-05T10:17:17+12:00
author: webdesignhot
source_url: https://www.dell.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [marketplace, media]
tags: [light, business, hardware, b2b, enterprise, sans, pragmatic, mainstream]
preview_swatch: ['#ffffff', '#007db8', '#0a0a0a']
related: [hp, ibm, microsoft]
description: 'Dell is the business-first PC commerce brand — 40 years of selling configurable PCs direct to enterprise IT, government procurement, and small business owners. The page shows it: a paper-white canvas (`#ffffff`) anchored by **Dell Blue** (`#007db8`), a slightly desaturated industrial cyan-blue that Michael Dell''s team adopted in the 2016 brand refresh and standardised across XPS consumer, Latitude business, OptiPlex desktop, PowerEdge servers, and Alienware gaming. Type runs **Roboto** (Google''s humanist sans Dell adopted in lieu of a proprietary face) at 700 for headlines, with B2B-style information density: large 24/700 prices, 6-cell spec strips on every product card, ratings front-and-centre, and the omnipresent "Customize & Buy" configurator CTA. The voice is competent-pragmatic. Where HP whispers "Reinvent how you work," Dell says "Configure exactly what you need."'

colors:
  bg: '#ffffff'                  # paper-white canvas
  bg-soft: '#f9f9f9'             # near-white surface tier 1
  bg-cool: '#f0f3f5'             # cool-grey surface tier 2
  bg-deep: '#0a0a0a'             # near-black for footer, Alienware
  bg-alienware: '#000000'        # Alienware gaming sub-brand pure black
  surface: '#ffffff'             # default card surface
  surface-soft: '#f9f9f9'        # raised card / popover floor
  surface-cool: '#f0f3f5'        # alternating section band
  surface-strong: '#dde4eb'      # hovered card, selected sidebar
  surface-input: '#ffffff'       # form input fill
  text: '#0a0a0a'                # primary body — Dell uses near-pure-black
  text-strong: '#000000'         # display headlines
  text-soft: '#444444'            # secondary metadata (Dell runs darker than HP)
  text-faint: '#767676'           # tertiary captions
  text-disabled: '#a8b0b8'
  text-on-dark: '#ffffff'
  text-link: '#007db8'           # link blue
  brand: '#007db8'               # Dell Blue — the primary brand
  brand-light: '#1399d6'         # lighter brand
  brand-deep: '#005a8a'          # deeper brand for hero
  brand-darkest: '#003654'       # darkest brand
  brand-hover: '#005a8a'         # hovered brand
  brand-active: '#003654'        # pressed brand
  brand-gradient: 'linear-gradient(135deg, #007db8 0%, #005a8a 100%)' # Dell brand gradient
  brand-emc-purple: '#5d3fd3'    # Dell EMC enterprise sub-brand purple
  alienware-blue: '#00d6ff'      # Alienware sub-brand cyan
  alienware-glow: 'rgba(0,214,255,0.5)' # Alienware glow halo
  on-brand: '#ffffff'
  cta-primary: '#007db8'         # primary CTA blue
  cta-primary-hover: '#005a8a'
  cta-customize: '#007db8'       # "Customize & Buy" — Dell's signature configurator CTA
  link-default: '#007db8'
  link-visited: '#007db8'
  link-hover: '#005a8a'
  border: '#dde4eb'              # 1px cool-grey hairline
  border-soft: '#f0f3f5'         # softer divider
  border-strong: '#007db8'       # focused input
  scrim: 'rgba(0,0,0,0.5)'
  shadow-soft: 'rgba(0,80,120,0.06)'
  shadow-card: 'rgba(0,80,120,0.1)'
  shadow-elev: 'rgba(0,80,120,0.15)'
  shadow-modal: 'rgba(0,0,0,0.3)'
  badge-new: '#007db8'
  badge-sale: '#cc0000'          # red sale badge
  badge-deal: '#cc0000'
  badge-rebate: '#0a8849'        # green "Instant Rebate $200" badge
  badge-trade-in: '#5d3fd3'      # purple trade-in badge
  badge-energy-star: '#1d4f9e'
  price: '#0a0a0a'
  price-strikethrough: '#767676'
  price-discount: '#cc0000'
  rating-star: '#ffaa00'         # amber star (Dell uses richer amber)
  success: '#0a8849'
  warning: '#ff9900'
  danger: '#cc0000'
  info: '#007db8'

typography:
  display:
    family: '"Roboto", "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 700, 900]
    opentype-features: ['kern', 'liga']
  body:
    family: '"Roboto", "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: '"Roboto Mono", "Consolas", monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 56, weight: 700, lineHeight: 1.1,  tracking: '-0.015em', family: display, notes: 'Homepage hero "Make it real"' }
    display-xl:      { size: 44, weight: 700, lineHeight: 1.15, tracking: '-0.01em', family: display, notes: 'Product launch hero' }
    display-lg:      { size: 32, weight: 700, lineHeight: 1.2,  tracking: '-0.005em', family: display, notes: 'Section banner' }
    display-md:      { size: 24, weight: 700, lineHeight: 1.25, tracking: '0',       family: display, notes: 'Product detail H1' }
    display-sm:      { size: 20, weight: 500, lineHeight: 1.3,  tracking: '0',       family: display, notes: 'Card title' }
    section-head:    { size: 14, weight: 700, lineHeight: 1.2,  tracking: '0.05em',  family: display, transform: uppercase, notes: 'Section bands "LAPTOPS"' }
    sub-section:     { size: 18, weight: 500, lineHeight: 1.4,  tracking: '0',       family: display, notes: 'Sub-heading' }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',       family: body, notes: 'Hero supporting copy' }
    body-md:         { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',       family: body, notes: 'Default body' }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Sidebar copy, spec list' }
    body-xs:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Caption, footer, legal' }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',       family: display, notes: 'Top nav: Laptops · Desktops · Monitors' }
    sub-nav-link:    { size: 13, weight: 400, lineHeight: 1.0,  tracking: '0',       family: display, notes: 'Sub-nav category labels' }
    button-cta:      { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',       family: display, notes: 'Add to Cart, Customize & Buy' }
    button-md:       { size: 13, weight: 500, lineHeight: 1.0,  tracking: '0',       family: display, notes: 'Compare, Quick Look' }
    badge:           { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.1em',   family: display, transform: uppercase, notes: '"NEW", "SALE", "INSTANT REBATE"' }
    price:           { size: 24, weight: 700, lineHeight: 1.0,  tracking: '-0.01em', family: display, opentype: ['tnum'], notes: 'Product price (Dell renders prices LARGE)' }
    price-original:  { size: 14, weight: 400, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'], notes: 'Strikethrough original price' }
    spec-label:      { size: 11, weight: 700, lineHeight: 1.2,  tracking: '0.05em',  family: body, transform: uppercase, notes: 'Spec table label "PROCESSOR"' }
    spec-value:      { size: 14, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Spec value' }
    rating:          { size: 13, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'], notes: 'Rating "4.5 (1,247)"' }
    code:            { size: 13, weight: 400, lineHeight: 1.5,  tracking: '0',       family: mono, notes: 'Service tag, dev surface' }

radius:
  none: 0
  micro: 2
  sm: 4            # Dell cards run 4px — squarer than HP
  md: 8            # inputs, modals
  lg: 12           # featured product card
  xl: 16           # hero card
  pill: 9999       # primary CTAs

spacing:
  base: 8
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 96    # 2-tier nav
  promo-bar-height: 40
  main-nav-height: 56
  sub-nav-height: 48
  product-card: '300x500'   # taller than HP — more spec content
  hero-banner: '1920x600'

components:
  button-primary:
    bg: '#007db8'
    color: '#ffffff'
    radius: 9999
    padding: '12px 24px'
    font: button-cta
    border: 'none'
    hover-bg: '#005a8a'
    box-shadow: '0 1px 3px rgba(0,80,120,0.1)'
    use: '"Customize & Buy" / "Add to Cart" — Dell''s primary blue pill CTA. White label on blue fill. The "Customize & Buy" verb is canonical Dell — every product can be configured.'
  button-primary-hover:
    bg: '#005a8a'
    color: '#ffffff'
    box-shadow: '0 4px 12px rgba(0,125,184,0.25)'
    use: 'Hover state — deeper blue + stronger drop shadow.'
  button-secondary:
    bg: '#ffffff'
    color: '#007db8'
    radius: 9999
    padding: '12px 24px'
    font: button-cta
    border: '1px solid #007db8'
    hover-bg: '#f0f3f5'
    use: 'Outline pill — "Quick Look" / "Compare" / "Save for Later".'
  button-tertiary:
    bg: 'transparent'
    color: '#007db8'
    radius: 0
    padding: '8px 0'
    font: button-md
    border-bottom: '1px solid transparent'
    hover-border-bottom: '1px solid #007db8'
    use: 'Inline text-link with underline-on-hover — "View all configurations →".'
  product-card:
    bg: '#ffffff'
    color: '#0a0a0a'
    radius: 4
    padding: '20px'
    border: '1px solid #dde4eb'
    hover-border: '1px solid #007db8'
    hover-shadow: '0 4px 12px rgba(0,80,120,0.1)'
    width: 300
    use: 'Standard product card — white floor with cool-grey hairline that flips to blue on hover, 4:3 product hero image, "INSTANT REBATE $200" green badge, title 18/500 dark, rating row "4.5 (1,247)", **24/700 price**, **6-cell spec list** (CPU/RAM/Storage/Display/GPU/OS), "Customize & Buy" pill CTA. Dense by design.'
  product-card-featured:
    bg: '#ffffff'
    color: '#0a0a0a'
    radius: 8
    padding: '32px'
    border: '1px solid #dde4eb'
    box-shadow: '0 8px 24px rgba(0,80,120,0.1)'
    use: 'Featured product card — larger 32px padding, deeper shadow at rest.'
  hero-card:
    bg: 'linear-gradient(135deg, #007db8 0%, #005a8a 100%)'
    color: '#ffffff'
    radius: 0  # Dell heros run full-bleed without radius
    padding: '64px 48px'
    use: 'Brand-gradient hero — cyan to deep-blue diagonal, full-bleed, white headline left, product right.'
  promo-bar:
    bg: '#0a0a0a'
    color: '#ffffff'
    height: 40
    padding: '0 24px'
    font: body-sm
    use: 'Dark promo band above main nav — "Save up to 40% on Latitude · Free shipping on orders $50+ · Tax-free Texas residents" rotating in 14/400 white.'
  spec-list:
    bg: 'transparent'
    color: '#444444'
    padding: '8px 0'
    font: body-sm
    use: 'Vertical 6-cell spec list on product cards — each row "PROCESSOR · Intel Core Ultra 7" with 11/700 uppercase 0.05em tracking label and 14/400 value, separated by `#dde4eb` hairline. The 6-cell density distinguishes Dell from HP''s 4-cell strip.'
  rating-stars:
    color: '#ffaa00'
    size: 14
    use: 'Inline 5-star rating — amber filled stars for the rating value, grey outline for empty. Followed by numeric rating "4.5 (1,247)" in 13/500 black.'
  badge-rebate:
    bg: '#0a8849'
    color: '#ffffff'
    radius: 4
    padding: '4px 10px'
    font: badge
    use: '"INSTANT REBATE $200" green pill — Dell''s signature merchandising badge. Configurator pages flash several rebate badges per card.'
  badge-sale:
    bg: '#cc0000'
    color: '#ffffff'
    radius: 4
    padding: '4px 10px'
    font: badge
    use: '"SAVE $300" red pill.'
  badge-trade-in:
    bg: '#5d3fd3'
    color: '#ffffff'
    radius: 4
    padding: '4px 10px'
    font: badge
    use: '"TRADE IN & SAVE" purple pill — Dell''s trade-in programme.'
  badge-new:
    bg: '#007db8'
    color: '#ffffff'
    radius: 4
    padding: '4px 10px'
    font: badge
    use: '"NEW" blue pill.'
  text-input:
    bg: '#ffffff'
    color: '#0a0a0a'
    radius: 8
    height: 44
    padding: '12px 16px'
    border: '1px solid #dde4eb'
    focus-border: '1px solid #007db8'
    focus-shadow: '0 0 0 3px rgba(0,125,184,0.15)'
    font: body-md
    use: 'Form input — white floor, cool-grey hairline, focus lights blue border + glow.'
  search-bar:
    bg: '#f9f9f9'
    color: '#0a0a0a'
    radius: 4
    height: 44
    padding: '12px 16px 12px 44px'
    border: '1px solid #dde4eb'
    use: 'Top-bar search — soft-grey rectangle (Dell uses 4px rectangles, not pills, for search). Magnifier icon left.'
  primary-nav:
    bg: '#ffffff'
    color: '#0a0a0a'
    height: 56
    border-bottom: '1px solid #dde4eb'
    use: 'Top nav — Dell wordmark anchored left in `#0a0a0a` near-black, "Laptops · Desktops · Monitors · Servers · Storage · Networking · Solutions" labels in 14/500 sentence-case, "For Home" / "For Business" / "For Enterprise" segment toggle, search/account/cart flush right.'
  segment-toggle:
    bg: '#f0f3f5'
    color: '#444444'
    radius: 9999
    padding: '4px'
    font: button-md
    use: 'Segment toggle — "For Home · For Business · For Enterprise" three-way toggle with active pill in `#007db8` blue. Used in primary nav and product list filters.'
  modal-backdrop:
    bg: 'rgba(0,0,0,0.5)'
    use: 'Modal scrim.'
  modal-surface:
    bg: '#ffffff'
    color: '#0a0a0a'
    radius: 8
    box-shadow: '0 24px 48px rgba(0,0,0,0.3)'
    use: 'Modal floor — white with neutral deep shadow.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 350
  card-hover: 'product card border flips from #dde4eb → #007db8 + shadow appears `0 4px 12px rgba(0,80,120,0.1)` over 200ms. No Y translate — Dell stays planted.'
  cta-press: 'button scales 0.98 over 120ms on :active'
  carousel-slide: 'product carousel slides 350ms ease-emphasized'
  reduced-motion: 'respects prefers-reduced-motion: reduce — transitions become opacity-only.'

breakpoints:
  mobile: 600
  tablet: 960
  desktop: 1280
  wide: 1440

shadows:
  ambient: 'rgba(0,80,120,0.06) 0 1px 3px'
  soft: 'rgba(0,80,120,0.1) 0 4px 12px'
  card: 'rgba(0,80,120,0.15) 0 8px 24px'
  modal: 'rgba(0,0,0,0.3) 0 24px 48px'
  ring: '0 0 0 3px rgba(0,125,184,0.15)'

accessibility:
  contrast-text-on-bg: 18.5         # #0a0a0a on #ffffff — AAA
  contrast-soft-on-bg: 8.4          # #444444 on #ffffff — AAA
  contrast-link-on-bg: 5.1          # #007db8 on #ffffff — AA
  contrast-cta-text: 5.1            # #ffffff on #007db8 — AA
  contrast-faint-on-bg: 4.5         # #767676 on #ffffff — AA
  focus-ring: '3px rgba(0,125,184,0.15) outset glow + 1px solid #007db8 border'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab traverses promo-bar → logo → segment-toggle → primary nav → search → utilities → main → footer; Esc closes modals.'

dark-mode: optional   # Dell main site is light-only; Alienware gaming sub-brand uses #000000 dark with #00d6ff cyan accent

lineage:
  summary: |
    Dell''s visual lineage runs through 40 years of direct-to-customer PC commerce (Michael Dell''s 1984 dorm-room model — configure direct, ship direct, no retail middleman), B2B technology procurement design (dense spec lists, multi-stack badges, "Customize & Buy" verb), and EMC enterprise heritage (the 2016 Dell-EMC merger introduced the purple sub-brand accent). The current site solidified around 2018 with Roboto Bold display and standardised Dell Blue (`#007db8`). Brand position: business-first commerce — configure exactly, ship direct, technical detail front-and-centre.
  influences:
    - name: Michael Dell''s 1984 dorm-room PC business
      role: Configure direct, ship direct, no retail middleman — the foundational commerce model.
      url: https://www.dell.com/learn/us/en/uscorp1/our-story
    - name: IBM ThinkPad / Lenovo
      role: Competing business-first PC trade dress — pragmatic chrome, dense spec lists.
      url: https://www.lenovo.com
    - name: HP
      role: Direct competitor in commercial PC market with parallel light-canvas blue-accent system.
      url: https://www.hp.com
    - name: EMC enterprise storage (acquired 2016)
      role: Purple sub-brand accent inherited from the 2016 Dell-EMC merger.
      url: https://www.dell.com/en-us/dt/storage/index.htm
    - name: Roboto (Google)
      role: Adopted as the company-wide marketing typeface in 2016 — value-engineering choice.
      url: https://fonts.google.com/specimen/Roboto
    - name: Alienware (acquired 2006)
      role: Dark + cyan gaming sub-brand inherited from the 2006 acquisition.
      url: https://www.dell.com/en-us/gaming/alienware
---

## 1. Visual Theme & Atmosphere

Dell is the business-first PC commerce brand. 40 years of selling configurable PCs direct to enterprise IT, government procurement, and small-business owners — Michael Dell started in his University of Texas dorm room in 1984, and the brand has evolved through public-company, taken-private, EMC-acquisition, and re-IPO scale without losing the original premise: **configure exactly what you need, ship direct, no retail middleman**. The page reflects all 40 years of that.

The canvas is **paper white** (`#ffffff`). The brand colour is **Dell Blue** (`#007db8`) — a slightly desaturated industrial cyan-blue that sits between Stripe's saturated blue and IBM's deeper navy. Dell's blue is intentionally less vivid than HP's `#0096d6` cyan and less navy than IBM's `#0f62fe` — it reads as competent-pragmatic rather than premium-aspirational. The hex was standardised in the 2016 brand refresh and now runs across XPS consumer, Latitude business, OptiPlex desktop, PowerEdge servers, PowerStore storage, and the Alienware gaming sub-brand (which inverts to dark + `#00d6ff` cyan).

Type runs **Roboto** — Google's open-source humanist sans, adopted by Dell in lieu of a proprietary face. Headlines run Roboto Bold 700 at 44–56px with subtle negative tracking. Body runs Roboto 400 at 16/1.55 in `#0a0a0a` (Dell uses near-pure-black for body, darker than HP's `#1c1c1c`). The choice is pragmatic: Roboto is free, ships on every Android device, renders cleanly on Windows ClearType, and signals "we use Google's defaults rather than commission a custom face" — exactly the value-engineering ethos Dell sells.

Information density is the brand. Every product card carries:
- 4:3 product hero image
- Up to 3 stacked badges (NEW · INSTANT REBATE $200 · TRADE IN & SAVE)
- Product title in 18/500 sentence-case
- Star rating with review count "4.5 (1,247)"
- **Large 24/700 price** (Dell renders prices the largest of any major PC brand)
- Strikethrough original price + savings amount
- **6-cell spec list** stacked vertically: PROCESSOR · MEMORY · STORAGE · DISPLAY · GRAPHICS · OS
- "Customize & Buy" CTA — the canonical Dell verb that distinguishes from HP's "Add to Cart"

The spec list is uppercase-tracked Roboto 11/700 labels above 14/400 values, separated by hairline dividers — this is the page expressing Dell's configure-direct heritage. Dell customers are spec shoppers, and the marketing matches.

The interaction language is **conservative-functional**. Cards are 4px-radius rectangles (squarer than HP's 6px). Hover doesn't lift the card — the border flips from cool-grey `#dde4eb` to blue `#007db8` and a shadow appears. Dell stays planted; the page is engineered for fast scanning across hundreds of configurations rather than playful product reveals.

Sub-brands carry colour-tonal variants: **Alienware** (gaming) flips to `#000000` canvas with `#00d6ff` Alienware cyan and a glow halo. **Dell EMC** (enterprise storage / cloud) introduces a `#5d3fd3` purple accent. **Dell Pro** (business) deepens the brand blue. But the underlying typographic and chrome system stays consistent.

**Key Characteristics:**
- Paper-white `#ffffff` canvas with cool-grey `#dde4eb` hairline borders
- Dell Blue `#007db8` — slightly desaturated industrial cyan, less vivid than HP, less navy than IBM
- Roboto humanist sans (Google's free face) at 700 for headlines, 400 for body
- 6-cell vertical spec list on every product card — Dell's information-density signature
- Large 24/700 price display — Dell renders prices the LARGEST of any major PC brand
- Multi-stack badges per card: NEW · INSTANT REBATE · TRADE IN & SAVE
- "Customize & Buy" canonical verb — every Dell PC is configurable
- 4px-radius squarer cards (Dell is more rectangular than HP)
- Hover lights border + shadow without translating the card — Dell stays planted
- Three-segment toggle "For Home · For Business · For Enterprise" — the audience-segment switcher
- Sub-brand variants: Alienware dark `#000000` + cyan `#00d6ff`, Dell EMC purple `#5d3fd3`

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): the page floor
- **Bg Soft** (`#f9f9f9`): near-white surface tier 1, used for spec strips and alternating bands
- **Bg Cool** (`#f0f3f5`): cool-grey surface tier 2
- **Bg Deep** (`#0a0a0a`): near-black for promo bar, footer, Alienware
- **Bg Alienware** (`#000000`): Alienware sub-brand pure black
- **Text Primary** (`#0a0a0a`): near-pure-black body
- **Text Strong** (`#000000`): display headlines
- **Border** (`#dde4eb`): 1px cool-grey hairline

### Brand
- **Dell Blue** (`#007db8`): primary brand — used for logo, CTAs, links, focus
- **Dell Blue Light** (`#1399d6`): brighter brand for hover icons
- **Dell Blue Deep** (`#005a8a`): deeper brand for gradient stops, hover CTAs
- **Dell Blue Darkest** (`#003654`): darkest brand for high-contrast surfaces
- **Brand Gradient** (`linear-gradient(135deg, #007db8 0%, #005a8a 100%)`): full-bleed hero gradient
- **Brand Hover** (`#005a8a`): hovered brand for CTAs
- **Brand Active** (`#003654`): pressed brand

### Sub-Brand Accents
- **Alienware Blue** (`#00d6ff`): Alienware gaming sub-brand cyan — used only on Alienware product pages
- **Alienware Glow** (`rgba(0,214,255,0.5)`): glow halo on Alienware buttons and cards
- **Dell EMC Purple** (`#5d3fd3`): enterprise storage / cloud sub-brand
- **Dell Pro Deep** (`#003654`): business sub-brand deeper navy

### Interactive
- **Link** (`#007db8`): same as brand
- **Link Hover** (`#005a8a`): deeper blue
- **Link Visited** (`#007db8`): unchanged
- **Disabled** (`#a8b0b8`): muted cool-grey
- **Selected** (`#007db8`): selected radio / checkbox

### Neutral Scale
- **Text** (`#0a0a0a`) — primary body — Dell uses near-pure-black, darker than HP's `#1c1c1c`
- **Text Strong** (`#000000`) — display headlines
- **Text Soft** (`#444444`) — secondary metadata, runs darker than HP/Logitech soft
- **Text Faint** (`#767676`) — tertiary captions
- **Text Disabled** (`#a8b0b8`) — disabled labels
- **Text on Dark** (`#ffffff`) — text on inverted bands
- **Border** (`#dde4eb`) — 1px cool-grey hairline
- **Border Soft** (`#f0f3f5`) — softer divider
- **Border Strong** (`#007db8`) — focused input + hover card border

### Surface & Borders
Dell's depth ladder: `#ffffff` → `#f9f9f9` → `#f0f3f5` → `#dde4eb`. Four near-whites within 9% lightness. The brand position: stay corporate-bright with darker text contrast — Dell's body text runs `#0a0a0a` near-black, more pragmatic than Logitech's softer `#1d1d1d`.

### Shadow Colors
**Cool-tinted shadows** with `rgba(0,80,120, *)` base — slightly less saturated than HP's `rgba(0,90,150, *)`. Modals revert to neutral `rgba(0,0,0,0.3)` for stronger emphasis. Dell uses fewer multi-layer shadow stacks than Logitech — single-layer drops are the default.

### Semantic
- **Success / Rebate** (`#0a8849`): green for "INSTANT REBATE" and success messaging — Dell's deeper green than HP's `#2d8659`
- **Warning** (`#ff9900`): amber
- **Danger / Sale** (`#cc0000`): red — also "SAVE $300" and discount badge
- **Info** (`#007db8`): brand blue
- **Trade-in** (`#5d3fd3`): purple for trade-in programme — co-opts the Dell EMC enterprise purple

## 3. Typography Rules

### Font Family

**Primary**: `Roboto` — Google's humanist sans released in 2011, adopted by Dell as the company-wide marketing typeface in 2016. Falls back to `"Helvetica Neue", Arial, sans-serif`. The choice is pragmatic: Roboto is free, ships universally, renders cleanly on Windows, and signals "we use the same fonts our customers already have" — exactly the value-engineering ethos Dell sells. Weights: 400 (regular), 500 (medium), 700 (bold), 900 (black, used sparingly).

**Mono**: `Roboto Mono` for service tags, model numbers, and technical documentation.

**OpenType features**: `kern`, `liga` enabled. `tnum` enabled on price and spec values.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | Roboto | 56 | 700 | 1.1 | -0.015em | — | "Make it real" |
| display-xl | Roboto | 44 | 700 | 1.15 | -0.01em | — | Product launch hero |
| display-lg | Roboto | 32 | 700 | 1.2 | -0.005em | — | Section banner |
| display-md | Roboto | 24 | 700 | 1.25 | 0 | — | Product detail H1 |
| display-sm | Roboto | 20 | 500 | 1.3 | 0 | — | Card title |
| section-head | Roboto | 14 | 700 | 1.2 | 0.05em | uppercase | "LAPTOPS" |
| sub-section | Roboto | 18 | 500 | 1.4 | 0 | — | Sub-heading |
| body-lg | Roboto | 18 | 400 | 1.55 | 0 | — | Hero supporting copy |
| body-md | Roboto | 16 | 400 | 1.55 | 0 | — | Default body |
| body-sm | Roboto | 14 | 400 | 1.5 | 0 | — | Sidebar copy, spec list value |
| body-xs | Roboto | 12 | 400 | 1.4 | 0 | — | Caption, footer |
| nav-link | Roboto | 14 | 500 | 1.0 | 0 | — | Top nav |
| sub-nav-link | Roboto | 13 | 400 | 1.0 | 0 | — | Sub-nav |
| button-cta | Roboto | 14 | 500 | 1.0 | 0 | — | Add to Cart |
| button-md | Roboto | 13 | 500 | 1.0 | 0 | — | Compare |
| badge | Roboto | 11 | 700 | 1.0 | 0.1em | uppercase | "NEW", "INSTANT REBATE" |
| price | Roboto | 24 | 700 | 1.0 | -0.01em | tnum | Product price (LARGE) |
| price-original | Roboto | 14 | 400 | 1.0 | 0 | tnum | Strikethrough |
| spec-label | Roboto | 11 | 700 | 1.2 | 0.05em | uppercase | "PROCESSOR", "MEMORY" |
| spec-value | Roboto | 14 | 400 | 1.4 | 0 | — | "Intel Core Ultra 7" |
| rating | Roboto | 13 | 500 | 1.0 | 0 | tnum | "4.5 (1,247)" |
| code | Roboto Mono | 13 | 400 | 1.5 | 0 | — | Service tag |

### Principles

- **Roboto is the deliberate value-engineering choice.** Dell could have commissioned a proprietary face. They didn't. The point is "your customers' default font is good enough" — exactly the configure-direct value position.
- **Sentence-case headlines, uppercase tracked spec labels.** The two-tier discipline: prose reads sentence-case, technical labels read uppercase. Spec labels at 11/700 with 0.05em tracking are Dell's most distinctive type pattern.
- **Price renders large at 24/700.** The largest of any major PC brand. Dell customers shop on price, so the price scans first.
- **Body in `#0a0a0a` near-black.** Pragmatic-dark — Dell rejects the soft `#1d1d1d` Logitech adopts. The high contrast reads as "we're not hiding the technical detail."
- **Vertical spec list, not horizontal strip.** Dell's 6-cell spec list stacks vertically with hairline dividers — denser than HP's 4-cell horizontal strip. This is the configure-direct shopping pattern.
- **No tracking on display-md and below.** Negative tracking only at 32px+. Smaller display stays at 0.
- **Open-source friendly.** Roboto is free and ships on every Android — the open-source posture mirrors Dell's "value engineering" voice.

## 4. Component Stylings

### Buttons

**`button-primary`** — Dell Blue pill: `#007db8` solid fill, white label in 14/500 sentence-case ("Customize & Buy" or "Add to Cart"), 12×24px padding, 9999 radius. Hover deepens to `#005a8a`. The "Customize & Buy" verb is canonical Dell — every product configurable.

**`button-secondary`** — outline pill: white fill, blue label and 1px border. Hover fills cool-grey.

**`button-tertiary`** — inline link with underline-on-hover: `#007db8` text, 1px transparent bottom border that fills blue on hover.

### Cards

**`product-card`** — 300×500 with white floor, 1px `#dde4eb` border, 4px radius, 20px padding. Stack:
1. 4:3 product hero image (full-bleed within padding)
2. Stacked badges row (top) — NEW · INSTANT REBATE $200 · TRADE IN & SAVE
3. Product title 18/500 dark sentence-case
4. Rating row "★★★★★ 4.5 (1,247)" with amber stars
5. **24/700 price** with strikethrough original below
6. **6-cell vertical spec list** with hairline dividers — PROCESSOR · MEMORY · STORAGE · DISPLAY · GRAPHICS · OS
7. "Customize & Buy" pill CTA bottom

Hover flips border from `#dde4eb` → `#007db8` + adds `0 4px 12px rgba(0,80,120,0.1)` shadow. **No Y translate** — Dell stays planted.

**`product-card-featured`** — 32px padding, 8px radius, deeper shadow at rest.

**`hero-card`** — full-bleed `linear-gradient(135deg, #007db8 0%, #005a8a 100%)`, no radius (Dell heroes run truly full-bleed without containment), 64×48px padding.

### Spec List

**`spec-list`** — vertical 6-cell stack. Each row: 11/700 uppercase 0.05em tracking label (e.g. "PROCESSOR") above 14/400 value (e.g. "Intel Core Ultra 7"). Rows separated by 1px `#dde4eb` hairline. The 6-cell density is Dell's information-density signature — distinguishes from HP's 4-cell horizontal strip.

### Promotional Bar

**`promo-bar`** — `#0a0a0a` near-black 40px tall above main nav. White text 14/400 with rotating deal/promo copy. Dell rotates more aggressively than HP — multiple deal messages per session.

### Badges

**`badge-new`** — `#007db8` blue pill, white "NEW" label.

**`badge-rebate`** — `#0a8849` green pill, white "INSTANT REBATE $200" label. Dell's signature merchandising badge — configurator pages flash several rebate badges per card.

**`badge-sale`** — `#cc0000` red pill, "SAVE $300".

**`badge-trade-in`** — `#5d3fd3` purple pill, "TRADE IN & SAVE".

### Inputs / Forms

**`text-input`** — white floor, 1px `#dde4eb` border, 8px radius, 44px height. Focus lights blue border + glow.

**`search-bar`** — `#f9f9f9` soft-grey rectangular (4px radius — Dell uses rectangles, not pills, for search), 44px tall, magnifier icon left.

### Navigation

**`primary-nav`** — 56px tall white floor with `#dde4eb` bottom border. Dell wordmark anchored left in `#0a0a0a` near-black. "Laptops · Desktops · Monitors · Servers · Storage · Networking · Solutions" labels in 14/500 sentence-case.

**`segment-toggle`** — three-way toggle "For Home · For Business · For Enterprise" with active pill in `#007db8` blue. Used in primary nav and product list filters. Dell's audience-segment switcher.

### Modals

**`modal-backdrop`** — `rgba(0,0,0,0.5)`.

**`modal-surface`** — white fill, 8px radius, `0 24px 48px rgba(0,0,0,0.3)` neutral deep shadow.

## 5. Layout Principles

### Spacing System

- Base unit: **8px** with 4px sub-steps
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`
- Section gap: **64–128px** between major bands
- Card internal padding: **20–32px**
- Gutters: **16–24px** between product cards

### Grid & Container

- Max content width: **1440px** with 80px outer gutters
- Product grid: 4 columns at 1280–1440 → 3 → 2 → 1
- Hero band: full-bleed gradient with content centred at 1280px

### Whitespace Philosophy

Dell runs **dense-corporate**. Marketing pages breathe at 64–128px between bands; product list pages tighten to 32–48px. The rhythm prioritises information density — Dell sells configurations, and customers need to compare across cards quickly. Looser spacing would slow the configure-direct shopping pattern.

### Section Cadence

Pages alternate **white canvas** (`#ffffff`), **soft-grey bands** (`#f9f9f9`), occasional **cool-grey deep bands** (`#f0f3f5`), and one **gradient brand band** per page (the cyan-to-deep-blue diagonal on flagship hero only). Heroes run full-bleed without rounded containment — Dell prefers the gradient to bleed edge-to-edge.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0px | Promo bar, full-bleed hero, decorative bands |
| Micro | 2px | Inset surfaces — rare |
| Small | 4px | Default cards, search bar, badges — Dell is squarer than HP |
| Medium | 8px | Inputs, modals, featured cards |
| Large | 12px | Larger containers — rare |
| XL | 16px | Modal hero — rare |
| Pill | 9999px | Primary CTAs, segment toggle, profile avatars |

The radius vocabulary is **squarer than HP**. Cards live at 4px (Dell) vs 6px (HP) vs 12px (Logitech). The brand position: Dell's hardware has crisp rectangular silhouettes (Latitude wedge, OptiPlex tower, PowerEdge rack) — the page geometry mirrors that.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Default for body, hero, most cards at rest |
| 1 — Ambient | `rgba(0,80,120,0.06) 0 1px 3px` | Default card at rest (very subtle) |
| 2 — Soft | `rgba(0,80,120,0.1) 0 4px 12px` | Card on hover |
| 3 — Card | `rgba(0,80,120,0.15) 0 8px 24px` | Featured card |
| 4 — Modal | `rgba(0,0,0,0.3) 0 24px 48px` | Modal surface |

### Shadow Philosophy

Dell uses **less shadow than Logitech or HP**. Default cards rest with minimal or zero shadow; hover adds shadow but doesn't lift the card. The brand position: depth comes from border colour change (cool-grey → blue) rather than atmospheric float. The result is a more functional, less playful interaction language — appropriate for B2B procurement scanning.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)`

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 120ms | Button colour swap, link transition |
| Standard | 200ms | Card hover (border + shadow) |
| Slow | 350ms | Carousel slide, modal enter |

### Per-Component Recipes

- **Card hover**: border flips from `#dde4eb` → `#007db8` + shadow `0 4px 12px rgba(0,80,120,0.1)` appears over 200ms. **No Y translate**.
- **CTA hover**: fill deepens + shadow grows over 120ms.
- **CTA active**: scales 0.98 over 120ms.
- **Promo bar rotation**: copy fades through messages every 5s.
- **Modal enter**: scrim fades + dialog opacity 0 → 1 over 200ms.
- **Carousel slide**: 350ms emphasized.

### Reduced Motion

Card hover degrades to colour-only border change (no shadow); promo bar copy rotation freezes; modal becomes opacity-only.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #0a0a0a text on #ffffff | 18.5 | AAA |
| #444444 soft on #ffffff | 8.4 | AAA |
| #007db8 link on #ffffff | 5.1 | AA |
| #ffffff on #007db8 CTA | 5.1 | AA |
| #767676 faint on #ffffff | 4.5 | AA |
| #ffffff on #0a8849 rebate badge | 5.0 | AA |
| #ffffff on #cc0000 sale badge | 5.7 | AA |

Dell's body contrast is exceptional at 18.5 — using `#0a0a0a` near-black instead of `#1c1c1c` softer black gives Dell the highest body contrast among PC brands.

### Focus Indicators

3px `rgba(0,125,184,0.15)` outset glow + 1px solid `#007db8` border on inputs. Buttons get an outset 3px blue glow ring.

### ARIA Patterns

- Search: `role="search"`, input `aria-label="Search Dell"`
- Product card: full `<a>` with `aria-label` containing title, price, key spec
- Promo bar: `role="region"` `aria-live="polite"`
- Segment toggle: `role="tablist"` with `aria-selected` on active segment
- Spec list: `<dl>` with `<dt>` (uppercase label) and `<dd>` (value)
- Star rating: `aria-label="4.5 out of 5 stars from 1,247 reviews"`

### Keyboard Navigation

- Tab: promo-bar → logo → segment-toggle → primary nav → search → utilities → main → footer
- Esc closes modals
- Enter activates
- Arrow keys cycle product carousels and segment toggle

### Reduced Motion

Card hover degrades to colour-only; promo bar rotation freezes.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Promo bar simplifies; nav collapses; product grid 1-up; spec list stays 6-cell |
| Tablet | 600–960px | Product grid 2-up; sub-nav horizontal scroll |
| Desktop | 960–1280px | 3-up grid |
| Wide | 1280px+ | 4-up grid |

### Touch Targets

- CTA buttons: 44px height — meets AAA
- Search bar: 44px
- Product card: full tile

### Collapsing Strategy

- Promo bar: full → truncated → hidden
- Nav: utilities collapse first; primary becomes hamburger
- Spec list: stays 6-cell vertical (Dell never collapses spec list — it's core to the value prop)
- Hero: 2-column → stacked
- Section padding: 128px → 64px → 32px

### Image Behavior

`<picture>` with `srcset` for WebP/AVIF. Multiple aspect crops per product.

### Container Queries

Used in product card spec list — when the card narrows below 220px, label/value stack pairs become single-line "Label: Value" on smaller container.

## 11. Content & Voice

### Tone

Competent-pragmatic. Dell's voice is **the IT director who knows what they need** — confident, technical, no-nonsense. Headlines lead with capability statements: "Make it real." "Configure exactly what you need." "Built for what's next."

The brand never aspires beyond its competence. Where Apple says "Designed by Apple in California," Dell says "Configured to your exact specifications, built in Round Rock, Texas."

### Microcopy Patterns

- **Button verbs**: "Customize & Buy", "Add to Cart", "Compare", "Quick Look", "Configure", "Save for Later" — sentence-case, action-clear
- **Error message recipe**: technical-helpful — "This configuration is unavailable. Please choose a different processor or contact us at 1-800-WWW-DELL."
- **Success confirmations**: transactional — "Configuration saved. Add to cart or continue customizing."
- **Field labels**: short uppercase technical — "PROCESSOR", "MEMORY", "STORAGE", "DISPLAY"
- **Stock urgency**: factual + dated — "Ships by Mar 15", "Currently in stock — usually delivered within 5–7 business days"

### Empty States

Empty cart: "Your cart is empty. Configure a Latitude, XPS, or Alienware system to begin."

Empty saved configurations: "No saved configurations. Save any product to compare later."

Empty search: "No matches for [query]. Try a model number, processor type, or category."

### CTA Verb Conventions

- Primary: **"Customize & Buy"** — canonical Dell verb (every product configurable)
- Secondary: **"Add to Cart"**, **"Quick Look"**, **"Compare"**, **"Save for Later"**
- Tertiary: **"View All Configurations"**, **"See Details"**, **"Read Reviews"**
- Avoided: "Get started" (too SaaS), "Discover" (too marketing-fluff), "Click here" (too low-effort)

## 12. Dark Mode & Theming

**Light-default with Alienware dark sub-brand.** Dell main consumer site is light-only across canonical product pages. The **Alienware** gaming sub-brand pages flip to a dark theme:
- Canvas: `#ffffff` → `#000000`
- Surface: `#f9f9f9` → `#0a0a0a`
- Border: `#dde4eb` → `#262626`
- Text: `#0a0a0a` → `#ffffff`
- Brand: `#007db8` → `#00d6ff` Alienware cyan
- Glow halo `rgba(0,214,255,0.5)` on Alienware buttons

The brand position: light is canonical for Dell, dark with cyan glow is contextual to Alienware gaming.

## 13. Lineage & Influences

Dell's visual lineage runs through three traditions: **40 years of direct-to-customer PC commerce** (Michael Dell's 1984 dorm-room model — configure direct, ship direct, no retail middleman — has shaped the page since the 1996 launch of dell.com); **B2B technology procurement design** (the page is engineered for IT directors and procurement managers comparing across hundreds of configurations — dense spec lists, multi-stack badges, "Customize & Buy" verb); and **EMC enterprise heritage** (the 2016 Dell-EMC merger introduced the purple sub-brand accent and the deeper navy gradient discipline — Dell EMC was an enterprise storage brand with a more conservative trade dress that filtered into the parent brand).

The current site solidified around 2018 with the rollout of Roboto Bold display and the standardised Dell Blue `#007db8`. Subsequent updates have refined the segment toggle and the multi-badge stacking but have not changed the colour or typographic foundations.

What Dell rejects: aspirational consumer-tech voice (Apple's idiom), gamer-aggression (Alienware sub-brand carries that), uppercase-tracked everything (only labels), proprietary fonts (Roboto is canonical), playful card-lift animations (Dell stays planted), light spec stripping (Dell shows everything), and any chrome that obscures the configurator. The brand position: **business-first commerce — configure exactly, ship direct, technical detail front-and-centre**.

**Influences:**
- Michael Dell's 1984 dorm-room PC business model — configure direct, ship direct
- IBM ThinkPad and Lenovo trade dress — competing business-first PC brands
- HP — direct competitor in commercial PC market with parallel light-canvas blue-accent system
- EMC enterprise storage — purple sub-brand accent inherited from 2016 merger
- Roboto (Google) — Dell adopted as company-wide marketing typeface in 2016
- Alienware (acquired 2006) — dark + cyan gaming sub-brand inherited from acquisition

## 14. Do's and Don'ts

**Do**
- Anchor the page on `#ffffff` paper-white canvas with `#dde4eb` cool-grey hairline borders
- Use Dell Blue `#007db8` for the wordmark, primary CTAs, links, focus borders
- Render the wordmark in `#0a0a0a` near-black (never in brand blue — Dell wordmark is monochrome)
- Use Roboto Bold 700 with `-0.015em` tracking for hero headlines at 44–56px sentence-case
- Render product prices LARGE at 24/700 — Dell's prices are the largest among PC brands
- Show 6-cell vertical spec list on every product card with hairline dividers
- Use uppercase-tracked spec labels (PROCESSOR · MEMORY · STORAGE) at 11/700 with 0.05em tracking
- Use the canonical "Customize & Buy" verb for primary CTAs (every Dell product is configurable)
- Stack multiple badges per card: NEW · INSTANT REBATE $200 · TRADE IN & SAVE
- Use 4px-radius rectangular cards — Dell is squarer than HP/Logitech
- Display the segment toggle "For Home · For Business · For Enterprise" in primary nav
- Use `#0a0a0a` near-pure-black body text for high contrast
- Switch to Alienware dark `#000000` + cyan `#00d6ff` only on Alienware sub-brand pages

**Don't**
- Don't replace Dell Blue with another brand colour — `#007db8` is canonical
- Don't soften card corners past 8px on featured or 4px on default — Dell is rectangular
- Don't lift cards on hover with Y translate — Dell stays planted (border + shadow only)
- Don't use uppercase tracked headlines on marketing pages (sentence-case is canonical)
- Don't hide the price — render at 24/700 LARGE
- Don't skip the 6-cell spec list — this is Dell's information-density signature
- Don't use HP's "Add to Cart" verb on configurable products — "Customize & Buy" is canonical
- Don't introduce playful gradients on cards — Dell is solid white with hairline borders
- Don't pile shadows on rest-state cards — single subtle ambient or none
- Don't use serifs anywhere — Roboto sans is canonical
- Don't pad sections at 16px — Dell breathes at 64–128px

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #ffffff
Bg Soft:          #f9f9f9
Dell Blue:        #007db8
Dell Blue Hover:  #005a8a
Dell Blue Deep:   #005a8a
Brand Gradient:   linear-gradient(135deg, #007db8 0%, #005a8a 100%)
Text:             #0a0a0a
Text Soft:        #444444
Border:           #dde4eb
Border Hover:     #007db8
Promo Bar:        #0a0a0a
Rebate Green:     #0a8849
Sale Red:         #cc0000
Trade-in Purple:  #5d3fd3
Alienware Cyan:   #00d6ff
Shadow Base:      rgba(0,80,120, *)
```

### Example Component Prompts

- "Create a Dell Customize & Buy button: solid `#007db8` fill, white label 'Customize & Buy' in Roboto 14/500 sentence-case, 12×24px padding, 9999 radius (fully pilled), `0 1px 3px rgba(0,80,120,0.1)` ambient shadow. On hover, fill deepens to `#005a8a`. On active, button scales 0.98."
- "Build a Dell product card: 300×500 with white floor, 1px `#dde4eb` cool-grey border, 4px radius, 20px padding. Stack inside top-to-bottom: 4:3 product hero on white seamless, badge stack row (top) — `#007db8` blue 'NEW' + `#0a8849` green 'INSTANT REBATE \$200' + `#5d3fd3` purple 'TRADE IN & SAVE', title in Roboto 18/500 dark sentence-case (e.g. 'Latitude 7440'), 5-star amber rating + '4.5 (1,247)' in 13/500, **24/700 price** with 14/400 strikethrough original below, **6-cell vertical spec list** with hairline `#dde4eb` dividers showing PROCESSOR · MEMORY · STORAGE · DISPLAY · GRAPHICS · OS in 11/700 uppercase 0.05em tracking labels above 14/400 values, 'Customize & Buy' blue pill CTA bottom. On hover, border flips to `#007db8` blue + shadow `0 4px 12px rgba(0,80,120,0.1)` appears over 200ms — NO Y translate."
- "Design a Dell hero band: full-bleed gradient `linear-gradient(135deg, #007db8 0%, #005a8a 100%)`, no border-radius, 64×48px padding. Headline in Roboto 700 at 56px / 1.1 line-height / -0.015em tracking, white, sentence-case (e.g. 'Make it real.'). Below it body-lg 18/400 white. Product photography floats right with subtle drop shadow."
- "Build a Dell segment toggle: pill-shaped `#f0f3f5` cool-grey floor, 4px inner padding, 9999 radius. Three segments 'For Home · For Business · For Enterprise' in Roboto 13/500. Active segment becomes a `#007db8` blue pill with white label; inactive segments are transparent with `#444444` muted label. Used in primary nav and filter bars."
- "Create a Dell 6-cell spec list: vertical stack of 6 rows, each row pad 8px Y, 0px X, with 1px `#dde4eb` hairline divider between rows. Each row: 11/700 uppercase 0.05em tracking label in `#444444` (e.g. 'PROCESSOR') above 14/400 value in `#0a0a0a` (e.g. 'Intel Core Ultra 7 155H'). Six rows: PROCESSOR · MEMORY · STORAGE · DISPLAY · GRAPHICS · OS."
- "Design a Dell promo bar: 40px-tall full-bleed `#0a0a0a` near-black band above main nav. White text 14/400 sentence-case rotating through deals: 'Save up to 40% on Latitude · Free shipping on orders \$50+ · Tax-free for Texas residents'. Aria-live polite. Click-through anchored right in `#1399d6` lighter cyan."

### Iteration Guide

1. **Start with the white.** Paper-white `#ffffff` canvas with `#dde4eb` cool-grey hairlines. Squarer cards than HP — 4px radius.
2. **Dell Blue is the only brand colour.** `#007db8` slightly desaturated industrial cyan — less vivid than HP, less navy than IBM. Don't use vivid sapphire blue.
3. **Roboto is canonical.** Free, ships universally. Inter is the closest free alternative if Roboto is unavailable.
4. **Sentence-case headlines, uppercase tracked spec labels.** Two-tier discipline.
5. **Render prices LARGE at 24/700.** Dell renders the largest prices of any PC brand. The price is a primary scanning element.
6. **6-cell vertical spec list on every product card.** PROCESSOR · MEMORY · STORAGE · DISPLAY · GRAPHICS · OS. Don't compress or omit.
7. **"Customize & Buy" is canonical.** Every Dell product is configurable; the CTA reflects that. Don't use "Add to Cart" for configurable systems.
8. **Cards stay planted on hover.** Border flips to blue + shadow appears, no Y translate. Dell is more conservative than Logitech/HP.
