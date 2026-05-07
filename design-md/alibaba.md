---
name: Alibaba
tagline: 'Electric orange `#ff6a00` + dense merchant grids — the global B2B wholesale floor as a website.'
updated_at: 2026-05-04T14:57:35+12:00
published_at: 2026-05-04T14:57:35+12:00
author: webdesignhot
source_url: https://www.alibaba.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [marketplace]
tags: [marketplace, b2b, dense, orange, utilitarian, global, wholesale, multilingual]
preview_swatch: ['#ffffff', '#ff6a00', '#222222']
related: [amazon, etsy, walmart]
description: 'Alibaba.com is the global B2B wholesale floor as a website — a maximally dense merchant marketplace where every screen is a wall of product tiles, supplier badges, RFQ ribbons, and "Verified Manufacturer" trust chrome, all anchored by the brand''s electric orange `#ff6a00` ("Alibaba Orange", a colour the company has owned since the 1999 Hangzhou launch). The canvas is white `#ffffff` with `#222222` near-black ink in a ruthlessly utilitarian sans (Helvetica Neue / Arial fallback chain — Alibaba does not ship a custom face on the global property; the chunky display weight reads via 700/900 Helvetica). Body runs at a tight 13–14px because every pixel is product-density real estate; the homepage carries 60+ product tiles above the fold at 1280px desktop, more than any major e-commerce property in the world. Buttons are filled-orange `#ff6a00` rectangles with **2–4px radius** (the brand resists pill-rounding because softness reads as consumer-retail, and Alibaba is wholesale-industrial). The signature CTA — `Send Inquiry`, `Request for Quotation`, `Contact Supplier` — is the brand''s anchor verb, distinct from Amazon''s `Buy Now` or Etsy''s `Add to Cart`. Trust chrome is omnipresent: gold `#f7ba2a` "Gold Supplier" tiers, blue verified checkmarks, "Trade Assurance" shield, "Years on Alibaba" ribbons. The colour stack is mature Chinese e-commerce — orange brand voltage, gold for trust, blue for action, red `#d62828` for sale-tags. Type sizes run small (12–14px metadata default), grids run dense (4–6 columns of supplier cards), badges run loud, and the entire visual logic is "show the buyer 100 sourcing options at once and let the merchant earn the click via badge hierarchy". This is the antithesis of curated minimal — it''s the trade-show floor, digitised.'

colors:
  bg: '#ffffff'                                # canvas — white merchant floor
  bg-soft: '#f5f5f5'                            # alt tint, supplier-row band
  bg-warm: '#fff8f0'                             # warm orange-tint promotional band
  surface: '#ffffff'
  surface-strong: '#e8e8e8'                      # input rest fill
  surface-soft: '#fafafa'
  surface-card: '#ffffff'
  surface-overlay: 'rgba(0,0,0,0.6)'             # modal scrim
  bg-dark: '#1d1d1d'                              # footer, mobile-app-promo band
  text: '#222222'                                 # near-black ink — slightly warmer than #000
  text-strong: '#000000'
  text-body: '#222222'
  text-muted: '#666666'                           # metadata, supplier years, MOQ
  text-soft: '#999999'
  text-faint: '#cccccc'
  text-inverse: '#ffffff'
  text-link: '#1976d2'                            # action-blue link
  text-link-hover: '#1565c0'
  brand: '#ff6a00'                                # ALIBABA ORANGE — the canonical hue
  brand-hover: '#e85f00'                           # darken on hover
  brand-active: '#cc5400'                          # press
  brand-deep: '#a64200'                            # rare gradient terminus
  brand-light: '#ff8533'                            # tint for icon, ribbon
  brand-pale: '#ffe5cc'                             # pale orange supplier-tag fill
  brand-glow: 'rgba(255,106,0,0.15)'                # focus ring soft glow
  on-brand: '#ffffff'
  accent-gold: '#f7ba2a'                              # Gold Supplier badge
  accent-gold-dark: '#c8860a'
  accent-blue: '#1976d2'                              # Trade Assurance, link, verify
  accent-blue-deep: '#0d47a1'
  accent-red: '#d62828'                                # SALE / -50% sale chip, error
  accent-red-deep: '#a91b1b'
  accent-green: '#1ca44e'                              # in-stock, ready-to-ship
  accent-purple: '#6a3093'                              # Premium-supplier rare ribbon
  border: '#e5e5e5'                                    # default 1px
  border-soft: '#f0f0f0'
  border-strong: '#cccccc'                              # focused input
  border-orange: '#ff6a00'                              # selected-tab, active-filter underline
  border-card: '#dddddd'                                # supplier-card outline
  shadow-card: 'rgba(0,0,0,0.08)'
  shadow-card-hover: 'rgba(0,0,0,0.16)'
  shadow-modal: 'rgba(0,0,0,0.25) 0 8px 24px'
  shadow-orange: 'rgba(255,106,0,0.3)'
  flash-deal-bg: 'linear-gradient(90deg, #ff6a00, #ff8533)'    # promotional banner gradient
  flash-deal-pulse: 'rgba(255,106,0,0.6)'
  rfq-ribbon: '#ff6a00'                                  # RFQ banner ribbon
  trade-assurance: '#1976d2'                              # blue trust shield
  verified-mark: '#1976d2'                                 # blue check-circle
  ready-to-ship: '#1ca44e'                                  # green truck icon
  factory-tag: '#6a3093'                                   # purple "Factory" rare tag
  success: '#1ca44e'
  warning: '#f7ba2a'
  danger: '#d62828'
  info: '#1976d2'

typography:
  display:
    family: '"Helvetica Neue", Helvetica, Arial, "PingFang SC", "Microsoft YaHei", sans-serif'
    weights: [400, 500, 700, 900]
    opentype-features: ['kern']
    notes: 'No bespoke face — Alibaba uses Helvetica Neue with PingFang SC fallback for Chinese script. Weight 700–900 carries display load.'
  body:
    family: 'Roboto, "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Microsoft YaHei", sans-serif'
    weights: [400, 500, 700]
  mono:
    family: '"SF Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    hero-display:      { size: 56, weight: 900, lineHeight: 1.1,  tracking: '-0.01em', family: display, notes: 'Acquisition hero — "Find the right supplier"' }
    display-lg:        { size: 40, weight: 700, lineHeight: 1.15, tracking: '0',       family: display }
    display-md:        { size: 32, weight: 700, lineHeight: 1.2,  tracking: '0',       family: display }
    display-sm:        { size: 24, weight: 700, lineHeight: 1.25, tracking: '0',       family: display, notes: 'Section heading' }
    section-title:     { size: 20, weight: 700, lineHeight: 1.3,  tracking: '0',       family: display, notes: '"Featured selections", "Top deals", "Recently viewed"' }
    product-title:     { size: 14, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Product tile title — max 2 lines, ellipsize' }
    supplier-name:     { size: 13, weight: 500, lineHeight: 1.3,  tracking: '0',       family: body }
    price-display:     { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0',       family: display, notes: '"$1.50–$3.20" — orange or near-black depending on context' }
    price-large:       { size: 24, weight: 900, lineHeight: 1.0,  tracking: '0',       family: display, notes: 'PDP price block' }
    moq-meta:          { size: 12, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, notes: '"Min. order: 100 pieces"' }
    body-md:           { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Default body — slightly under web norm' }
    body-sm:           { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body }
    button-lg:         { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Send Inquiry, Contact Supplier' }
    button-md:         { size: 13, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body }
    chip-label:        { size: 12, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Filter chip, category chip' }
    badge-gold:        { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.02em',  family: body, notes: '"GOLD SUPPLIER" gold-bg badge' }
    badge-verified:    { size: 11, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body }
    nav-link:          { size: 14, weight: 400, lineHeight: 1.0,  tracking: '0',       family: body }
    breadcrumb:        { size: 12, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body }
    metadata:          { size: 12, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, notes: '"5 yrs · CN · Verified"' }
    promo-flash:       { size: 14, weight: 900, lineHeight: 1.0,  tracking: '0.02em',  family: display, transform: uppercase, notes: '"FLASH DEAL", "BEST DEAL"' }
    legal:             { size: 11, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body }
    code:              { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',       family: mono }

radius:
  micro: 0
  sm: 2          # default chip / supplier-card
  md: 4          # default button — wholesale-industrial restraint
  lg: 6          # rare; image card
  xl: 8          # modal
  pill: 9999    # category pills, RFQ ribbon end
  notes: 'Alibaba resists pill-rounding because softness reads as consumer-retail; the brand is wholesale-industrial.'

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120]

layout:
  page-width: 1440
  content-max: 1200
  header-height: 110            # double-deck header — top utility bar + main nav + search
  utility-bar-height: 32
  main-nav-height: 56
  search-bar-height: 48
  side-nav-width: 240           # category mega-menu drawer
  product-tile-min-width: 200
  product-tile-aspect: '1:1'
  feed-cols-mobile: 2
  feed-cols-tablet: 4
  feed-cols-desktop: 5          # 5-up product grid at 1280px
  feed-cols-wide: 6
  prose-width: 800
  card-gap: 12

components:
  button-primary:
    bg: '#ff6a00'
    color: '#ffffff'
    radius: 4
    padding: '10px 24px'
    height: 40
    font: button-lg
    use: 'Anchor CTA — "Send Inquiry", "Contact Supplier", "Buy Now". Filled orange, hard-rect.'
  button-primary-hover:
    bg: '#e85f00'
    color: '#ffffff'
    use: 'Darken on hover, no transform.'
  button-primary-large:
    bg: '#ff6a00'
    color: '#ffffff'
    radius: 4
    padding: '14px 32px'
    height: 48
    font: button-lg
    use: 'Hero CTA — "Start sourcing now".'
  button-rfq:
    bg: '#ff6a00'
    color: '#ffffff'
    radius: 9999
    padding: '12px 24px'
    height: 44
    use: '"Request for Quotation" — the only pill the brand allows, on the floating RFQ ribbon.'
  button-secondary:
    bg: '#ffffff'
    color: '#ff6a00'
    border: '1px solid #ff6a00'
    radius: 4
    padding: '9px 23px'
    height: 40
    use: '"Add to compare", "Save". Outlined orange, hard-rect.'
  button-ghost:
    bg: 'transparent'
    color: '#1976d2'
    radius: 0
    use: '"View details", text-only blue link with hover-underline.'
  button-trade-assurance:
    bg: '#1976d2'
    color: '#ffffff'
    radius: 4
    padding: '10px 24px'
    use: '"Pay with Trade Assurance" — blue filled CTA when buyer enters checkout.'
  card-product-tile:
    bg: '#ffffff'
    color: '#222222'
    radius: 2
    border: '1px solid #e5e5e5'
    padding: 0
    use: 'Product card — 1:1 image + 14/400 title (2 lines) + 16/700 orange price + supplier name + RFQ button on hover.'
  card-product-hover:
    bg: '#ffffff'
    border: '1px solid #ff6a00'
    shadow: '0 2px 12px rgba(0,0,0,0.16)'
    use: 'Card hover — orange border highlight, subtle shadow lift.'
  card-supplier-row:
    bg: '#ffffff'
    color: '#222222'
    radius: 2
    border: '1px solid #e5e5e5'
    padding: 16
    use: 'Supplier-list row — logo + name + Gold Supplier badge + years-active ribbon + 4-up product preview + Contact button.'
  card-flash-deal:
    bg: 'linear-gradient(90deg, #ff6a00 0%, #ff8533 100%)'
    color: '#ffffff'
    radius: 4
    use: 'Flash-deal hero band — orange gradient with pulsing yellow accent and countdown timer.'
  badge-gold-supplier:
    bg: 'linear-gradient(180deg, #f7ba2a 0%, #c8860a 100%)'
    color: '#222222'
    radius: 2
    padding: '2px 6px'
    font: badge-gold
    use: '"Gold Supplier" gold-gradient badge — most-recognized merchant trust mark.'
  badge-years:
    bg: '#fff8f0'
    color: '#ff6a00'
    border: '1px solid #ff6a00'
    radius: 2
    padding: '2px 6px'
    font: badge-verified
    use: '"5 YRS" or "12 YRS" years-on-alibaba ribbon, orange-on-pale-orange.'
  badge-verified:
    bg: '#1976d2'
    color: '#ffffff'
    radius: 9999
    padding: '2px 6px'
    use: 'Blue check-circle "Verified Supplier" inline tag.'
  badge-trade-assurance:
    bg: 'transparent'
    color: '#1976d2'
    border: '1px solid #1976d2'
    radius: 2
    padding: '2px 6px'
    use: 'Blue "Trade Assurance" shield icon + label.'
  badge-ready-to-ship:
    bg: '#e6f7ec'
    color: '#1ca44e'
    border: '1px solid #1ca44e'
    radius: 2
    padding: '2px 6px'
    use: 'Green truck icon + "Ready to ship".'
  badge-sale:
    bg: '#d62828'
    color: '#ffffff'
    radius: 2
    padding: '2px 6px'
    use: 'Red "−50%" sale chip on top-left of product image.'
  badge-factory:
    bg: '#6a3093'
    color: '#ffffff'
    radius: 2
    padding: '2px 6px'
    use: 'Purple "Factory" tag — manufacturer-direct.'
  rfq-floating-banner:
    bg: 'linear-gradient(90deg, #ff6a00 0%, #ff8533 100%)'
    color: '#ffffff'
    radius: 9999
    padding: '12px 24px'
    use: 'Floating bottom-right RFQ ribbon — "Need 100+ items? Get free quotes." 9999px pill, the brand''s only fully-rounded element.'
  search-bar:
    bg: '#ffffff'
    color: '#222222'
    border: '2px solid #ff6a00'
    radius: 4
    height: 48
    padding: '0 16px'
    use: 'Top-bar search — orange-bordered (the brand''s most prominent orange). Suffix: orange filled "Search" button.'
  search-button:
    bg: '#ff6a00'
    color: '#ffffff'
    radius: '0 4px 4px 0'
    width: 96
    height: 48
    use: 'Filled orange "Search" suffix appended to search bar (radius right-only).'
  search-camera:
    bg: 'transparent'
    color: '#666666'
    use: 'Image-search camera icon — visual product search.'
  filter-chip:
    bg: '#ffffff'
    color: '#222222'
    border: '1px solid #cccccc'
    radius: 2
    padding: '6px 12px'
    font: chip-label
    use: 'Sidebar filter chip — "Free Sample", "Verified", "ISO Certified".'
  filter-chip-active:
    bg: '#fff8f0'
    color: '#ff6a00'
    border: '1px solid #ff6a00'
    use: 'Selected — pale-orange fill with orange border.'
  category-pill:
    bg: '#f5f5f5'
    color: '#222222'
    radius: 9999
    padding: '6px 16px'
    use: 'Category pill on category-explore landing — neutral grey rounded.'
  table-row:
    bg: '#ffffff'
    color: '#222222'
    border-bottom: '1px solid #e5e5e5'
    use: 'Specifications table row — alternating with `#fafafa` zebra.'
  input-text:
    bg: '#ffffff'
    color: '#222222'
    border: '1px solid #cccccc'
    radius: 4
    height: 40
    padding: '0 12px'
    use: 'Form input — sign-in, address, RFQ form.'
  input-focus:
    bg: '#ffffff'
    border: '2px solid #ff6a00'
    use: 'Focused — orange thick border.'
  modal:
    bg: '#ffffff'
    color: '#222222'
    radius: 8
    border: 'none'
    shadow: '0 8px 24px rgba(0,0,0,0.25)'
    use: 'Modal dialog — sign-in, RFQ submit, address.'
  toast:
    bg: '#222222'
    color: '#ffffff'
    radius: 4
    padding: '12px 16px'
    use: 'Bottom-anchored toast — "Added to favourites", "Inquiry sent".'
  nav-mega-menu:
    bg: '#ffffff'
    color: '#222222'
    border: '1px solid #e5e5e5'
    shadow: '0 8px 24px rgba(0,0,0,0.16)'
    use: 'Category mega-menu drawer on nav-hover — multi-column dense category tree.'
  countdown-timer:
    bg: '#222222'
    color: '#ffffff'
    radius: 2
    padding: '4px 8px'
    use: 'Flash-deal countdown — black tile with white digits, "00:14:23".'
  ribbon-corner:
    bg: '#ff6a00'
    color: '#ffffff'
    transform: 'rotate(-45deg)'
    use: 'Corner ribbon — "NEW" or "TRENDING" anchored top-left of product image.'
  footer-band:
    bg: '#1d1d1d'
    color: '#ffffff'
    use: 'Dark footer — global category links, language/currency selector, payment-methods row.'
  language-selector:
    bg: '#ffffff'
    color: '#222222'
    border: '1px solid #e5e5e5'
    radius: 2
    use: '14-language switcher in top utility bar — flag + locale name.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-in-out: 'cubic-bezier(0.45, 0, 0.55, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 300
  duration-flash: 800            # flash-deal pulse animation
  reduced-motion: 'respects prefers-reduced-motion: reduce — flash-deal pulse becomes static, mega-menu drawer becomes instant, RFQ ribbon stops bobbing.'

breakpoints:
  mobile: 600
  tablet: 1024
  desktop: 1280
  wide: 1600

shadows:
  none: 'none'
  card: '0 1px 3px rgba(0,0,0,0.08)'
  card-hover: '0 2px 12px rgba(0,0,0,0.16)'
  card-orange: '0 2px 12px rgba(255,106,0,0.3)'
  modal: '0 8px 24px rgba(0,0,0,0.25)'
  mega-menu: '0 8px 24px rgba(0,0,0,0.16)'
  ring: '0 0 0 2px rgba(255,106,0,0.4)'

accessibility:
  contrast-text-on-bg: 16.0                  # #222 on white — AAA at all sizes
  contrast-text-on-brand: 4.6                # white on #ff6a00 — AA at body
  contrast-muted-on-bg: 5.7                   # #666 on white — AA at body, AAA at large
  contrast-link-on-bg: 5.4                    # #1976d2 on white — AA
  focus-ring: '2px solid #ff6a00 with 2px offset'
  reduced-motion-honored: true
  multilingual: '14 languages on global property — EN, CN, RU, ES, PT, FR, DE, IT, KR, JP, AR (RTL), TR, NL, TH'
  rtl-support: 'Arabic locale flips layout — search-bar suffix mirrors, filter sidebar moves right'
  text-resize: 'body 14px scales to 18px at user-pref large'

dark-mode: null      # Light-only — Alibaba does not ship a dark variant; the merchant floor is white.
---

## 1. Visual Theme & Atmosphere

Alibaba.com is the global B2B wholesale floor as a website — a maximally dense merchant marketplace where every screen is a wall of product tiles, supplier badges, RFQ ribbons, and trust chrome. The canvas is white `#ffffff` with `#222222` near-black ink (a deliberately warmer-than-black to avoid the editorial-magazine austerity of pure black). Body runs at a tight 13–14px because every pixel is product-density real estate.

The brand's anchor is **Alibaba Orange** `#ff6a00` — a colour the company has owned since the 1999 Hangzhou launch. It appears in every layer of the visual hierarchy: the wordmark gradient, the search-bar border (the most-prominent surfacing of orange in the entire UI), every primary CTA, supplier-card hover borders, the RFQ floating ribbon, focus rings, "Years on Alibaba" badges, flash-deal banners. Where Apple TV+ reserves brand-blue for one rare CTA, Alibaba surfaces orange aggressively because the wholesale-marketplace category demands voltage — buyers scan dozens of suppliers and the orange is the action-locator.

The homepage carries 60+ product tiles above the fold at 1280px desktop — more than any major e-commerce property in the world. The grid runs 5-up at 1280px, 6-up at 1600px wide, with 12px card gaps (much tighter than consumer-retail's 24–32px). Product tiles are 1:1 image + 14/400 title + 16/700 orange price + supplier name + hover-revealed RFQ button. Cards have **2px radius** (the brand resists pill-rounding because softness reads as consumer-retail, and Alibaba is wholesale-industrial). Buttons are 4px-radius hard rectangles.

The signature CTA verb is **"Send Inquiry"** — distinct from Amazon's "Buy Now" or Etsy's "Add to Cart". B2B sourcing is conversation, not impulse-purchase, and the brand's verb stack reflects this: "Send Inquiry", "Contact Supplier", "Request for Quotation (RFQ)", "Get Free Samples", "Trade Assurance Pay". The buyer is here to build supplier relationships, not click-buy.

Trust chrome is omnipresent and earned through a tiered badge hierarchy:
- **Gold Supplier** — gold-gradient `#f7ba2a → #c8860a` badge for paying premium suppliers.
- **Verified Supplier** — blue `#1976d2` check-circle for verified-business-credentials.
- **Trade Assurance** — blue shield icon for protected-payment program.
- **Years on Alibaba** — orange-on-pale-orange "5 YRS" or "12 YRS" tenure ribbon.
- **Ready to Ship** — green `#1ca44e` truck icon for in-stock fast shipping.
- **Factory** — purple `#6a3093` rare tag for manufacturer-direct.
- **ISO Certified** — outlined-blue compliance tag.

Type runs Helvetica Neue / Arial fallback chain (Alibaba does not ship a custom face on the global property — the brand is utilitarian, not editorial). Display weight 700–900 carries headline load. Body runs Roboto fallback at 14px / 1.5. Chinese-language locales fall back to PingFang SC / Microsoft YaHei. There is no italic anywhere in product UI; the brand's voice is direct-imperative.

Promotional surfaces (flash deals, time-limited offers) lift to gradient orange `linear-gradient(90deg, #ff6a00, #ff8533)` bands with black `#222222` countdown tiles ("00:14:23") and pulsing yellow accents. The flash-deal motion is an 800ms pulse loop — the only persistent animation on the otherwise restrained UI. Mega-menus open on hover from the top nav as multi-column category drawers (200ms slide).

The footer band switches to dark `#1d1d1d` with `#ffffff` ink — the brand's only consistent dark surface — carrying global category links, 14-language locale switcher (EN / CN / RU / ES / PT / FR / DE / IT / KR / JP / AR / TR / NL / TH), and a payment-methods row (Visa / Mastercard / PayPal / Alipay / Wire / TT / etc.).

**Key Characteristics:**
- White `#ffffff` canvas with `#222222` warm-black ink.
- Alibaba Orange `#ff6a00` as the brand voltage — surfaced in CTAs, search border, RFQ ribbon, focus rings.
- 60+ product tiles above the fold (max-density e-commerce).
- 5-up grid at 1280px desktop, 6-up at 1600px.
- 14px body default (denser than consumer-retail's 16).
- 4px button radius — hard-rect wholesale industrial.
- 2px card radius — sharper than consumer-retail's 8–12px.
- "Send Inquiry" / "Contact Supplier" / "RFQ" — B2B conversational CTAs.
- Gold `#f7ba2a` Gold Supplier badge as the canonical trust mark.
- Blue `#1976d2` Verified + Trade Assurance + link.
- Red `#d62828` SALE chips, green `#1ca44e` Ready-to-Ship.
- 14-language global property with Arabic RTL support.
- Helvetica Neue stack with PingFang SC / Microsoft YaHei fallbacks.
- Dark `#1d1d1d` footer band (the only persistent dark surface).
- Light-only — no dark mode.

## 2. Color Palette & Roles

### Primary
- **Page White** (`#ffffff`): Canvas — the merchant floor.
- **Warm Black Ink** (`#222222`): Body, headline (deliberately warmer than `#000` to avoid editorial austerity).
- **Alibaba Orange** (`#ff6a00`): The signature voltage — wordmark, primary CTA, search border, RFQ ribbon, focus ring.

### Brand & Dark
- **Brand Hover** (`#e85f00`): Darken on CTA hover.
- **Brand Active** (`#cc5400`): Press state.
- **Brand Deep** (`#a64200`): Rare gradient terminus.
- **Brand Light** (`#ff8533`): Tint for icon, gradient stop.
- **Brand Pale** (`#ffe5cc`): Pale-orange supplier-tag fill.

### Accent
- **Gold** (`#f7ba2a`): Gold Supplier badge upper stop.
- **Gold Dark** (`#c8860a`): Gold Supplier badge lower stop (gradient).
- **Action Blue** (`#1976d2`): Trade Assurance, Verified Supplier, link, secondary CTA.
- **Action Blue Deep** (`#0d47a1`): Link hover.
- **Sale Red** (`#d62828`): "−50%" sale chip, error state.
- **Stock Green** (`#1ca44e`): "Ready to Ship", in-stock, success.
- **Factory Purple** (`#6a3093`): Manufacturer-direct rare tag.

### Interactive
- **Primary CTA** (`#ff6a00` bg + `#ffffff` text): Send Inquiry, Contact Supplier, Buy Now.
- **Secondary CTA** (`#ffffff` bg + `#ff6a00` border + `#ff6a00` text): Add to compare, Save.
- **Trade Assurance CTA** (`#1976d2` bg + `#ffffff` text): Checkout-stage protected-payment CTA.
- **Filter Chip Active** (`#fff8f0` bg + `#ff6a00` border + `#ff6a00` text).
- **Filter Chip Rest** (`#ffffff` bg + `#cccccc` border + `#222222` text).

### Neutral Scale
- **Ink** (`#222222`): Title, body — warm-black.
- **Strong** (`#000000`): Rare emphasis.
- **Muted** (`#666666`): Metadata, MOQ, supplier-years.
- **Soft** (`#999999`): Tertiary metadata.
- **Faint** (`#cccccc`): Border-strong, disabled state.

### Surface & Borders
- **Surface Soft** (`#fafafa`): Alt zebra-row.
- **BG Soft** (`#f5f5f5`): Supplier-row band, alt-band.
- **BG Warm** (`#fff8f0`): Promotional warm-tint band.
- **Surface Strong** (`#e8e8e8`): Input rest fill.
- **BG Dark** (`#1d1d1d`): Footer band.
- **Border Default** (`#e5e5e5`): Card 1px border.
- **Border Strong** (`#cccccc`): Focused input.
- **Border Orange** (`#ff6a00`): Active filter underline.
- **Border Card** (`#dddddd`): Supplier-card outline.

### Shadow Colors
- **Card Rest** (`rgba(0,0,0,0.08)`): Subtle 1px lift.
- **Card Hover** (`rgba(0,0,0,0.16)`): 2px shift on hover.
- **Modal** (`rgba(0,0,0,0.25)` 8px 24px): Dialog elevation.
- **Orange Glow** (`rgba(255,106,0,0.3)`): Focus ring + active-card glow.

### Trust & Status
- **Gold Supplier**: `linear-gradient(180deg, #f7ba2a, #c8860a)`.
- **Verified Blue**: `#1976d2` solid circle with white check.
- **Trade Assurance Blue**: `#1976d2` outlined shield.
- **Ready-to-Ship Green**: `#1ca44e` truck icon.
- **Sale Red**: `#d62828` filled chip.
- **Factory Purple**: `#6a3093` filled tag.

### Semantic
- **Success** (`#1ca44e`): Inquiry sent, payment cleared.
- **Warning** (`#f7ba2a`): Stock-low, near-MOQ.
- **Danger** (`#d62828`): Error, sale-tag, lockout.
- **Info** (`#1976d2`): Notice, link.

## 3. Typography Rules

### Font Family
- **Display / Body**: `"Helvetica Neue"` → `Helvetica` → `Arial`. Weights 400 / 500 / 700 / 900.
- **CN locale fallback**: `"PingFang SC"` → `"Microsoft YaHei"` for Chinese script.
- **Body alt**: `Roboto` (used inside React-rendered surfaces — newer parts of the site).
- **Mono**: `"SF Mono"`, `Menlo`, `Consolas`.
- **OpenType Features**: `kern` always on; no stylistic alternates.
- **Weight philosophy**: 700–900 carries display load; 400 carries body; 500 is button/medium emphasis. The brand uses heavy weights aggressively because Helvetica at 900 reads as "wholesale-industrial chunky" — the visual analogue of a warehouse-signage font.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Hero Display | Helvetica Neue | 56px | 900 | 1.1 | -0.01em | kern | Acquisition hero |
| Display LG | Helvetica Neue | 40px | 700 | 1.15 | 0 | kern | Section feature |
| Display MD | Helvetica Neue | 32px | 700 | 1.2 | 0 | kern | Sub-feature |
| Display SM | Helvetica Neue | 24px | 700 | 1.25 | 0 | kern | Section heading |
| Section Title | Helvetica Neue | 20px | 700 | 1.3 | 0 | kern | "Featured selections" |
| Product Title | Helvetica Neue | 14px | 400 | 1.4 | 0 | -- | Tile title, max 2 lines |
| Supplier Name | Helvetica Neue | 13px | 500 | 1.3 | 0 | -- | Card supplier line |
| Price Display | Helvetica Neue | 16px | 700 | 1.0 | 0 | kern | "$1.50–$3.20" range |
| Price Large (PDP) | Helvetica Neue | 24px | 900 | 1.0 | 0 | kern | Detail-page price block |
| MOQ Meta | Helvetica Neue | 12px | 400 | 1.3 | 0 | -- | "Min. order: 100 pieces" |
| Body MD | Helvetica Neue | 14px | 400 | 1.5 | 0 | -- | Body default |
| Body SM | Helvetica Neue | 13px | 400 | 1.4 | 0 | -- | Footer body |
| Button LG | Helvetica Neue | 14px | 500 | 1.0 | 0 | -- | "Send Inquiry", "Contact Supplier" |
| Button MD | Helvetica Neue | 13px | 500 | 1.0 | 0 | -- | "Save", "Compare" |
| Chip Label | Helvetica Neue | 12px | 500 | 1.0 | 0 | -- | Filter chip |
| Badge Gold | Helvetica Neue | 11px | 700 | 1.0 | 0.02em | -- | "GOLD SUPPLIER" |
| Badge Verified | Helvetica Neue | 11px | 500 | 1.0 | 0 | -- | Inline verified label |
| Nav Link | Helvetica Neue | 14px | 400 | 1.0 | 0 | -- | Top nav |
| Breadcrumb | Helvetica Neue | 12px | 400 | 1.3 | 0 | -- | Category trail |
| Metadata | Helvetica Neue | 12px | 400 | 1.3 | 0 | -- | "5 yrs · CN · Verified" |
| Promo Flash | Helvetica Neue | 14px | 900 | 1.0 | 0.02em | -- | "FLASH DEAL", uppercase |
| Legal | Helvetica Neue | 11px | 400 | 1.4 | 0 | -- | Footer copyright |

### Principles
- **Body 14px, not 16.** Alibaba optimises for product-density. The 14px body lets a 5-up grid carry full title + price + supplier + 2-line metadata per tile.
- **Helvetica 900 for display.** Wholesale-industrial chunkiness is the brand's display voice. 900 weight at 56px is the acquisition-hero default.
- **No italic.** B2B sourcing is direct-imperative — italic implies editorial voice the brand does not use.
- **CJK fallback PingFang SC / YaHei.** Chinese script renders cleanly via PingFang SC fallback; Korean / Japanese fall to system Noto.
- **Uppercase only for promotional badges.** "FLASH DEAL", "BEST DEAL", "GOLD SUPPLIER", "5 YRS" — the badge layer uses uppercase + 0.02em tracking; everything else is sentence case.
- **500 weight for buttons.** Button labels are 14/500 sentence case — heavier than 400 body, lighter than 700 display.
- **No tnum on prices.** Prices read as "$1.50–$3.20 / piece" with proportional figures — the brand does not use tabular numerals because price-ranges are conversational, not table-aligned.

## 4. Component Stylings

### Buttons

**Primary Orange (Anchor CTA)**
- Background: `#ff6a00`. Color: `#ffffff`. Radius: `4px`. Padding: `10px 24px`. Height: `40px`. Font: Helvetica Neue 14 / 500.
- Hover: `#e85f00`, 200ms ease-standard. No transform.
- Active: `#cc5400`.
- Use: "Send Inquiry", "Contact Supplier", "Buy Now", "Continue to Checkout" — the most-rendered CTA.

**Primary Large**
- Background: `#ff6a00`. Color: `#ffffff`. Radius: `4px`. Padding: `14px 32px`. Height: `48px`.
- Use: Hero acquisition CTA "Start sourcing now".

**Outlined Secondary**
- Background: `#ffffff`. Color: `#ff6a00`. Border: `1px solid #ff6a00`. Radius: `4px`. Padding: `9px 23px`.
- Hover: `bg: #fff8f0`.
- Use: "Add to compare", "Save".

**Trade Assurance Blue**
- Background: `#1976d2`. Color: `#ffffff`. Radius: `4px`. Padding: `10px 24px`.
- Use: "Pay with Trade Assurance" — checkout-stage protected-payment CTA.

**Ghost Link**
- Background: `transparent`. Color: `#1976d2`. Hover: underline.
- Use: "View details", "More info".

**RFQ Pill (Floating)**
- Background: `linear-gradient(90deg, #ff6a00, #ff8533)`. Color: `#ffffff`. Radius: `9999px`. Padding: `12px 24px`.
- Use: Floating bottom-right "Request for Quotation" ribbon — the brand's only fully-rounded element. Bobs gently in idle, pauses on hover.

### Cards

**Product Tile (Default)**
- Background: `#ffffff`. Color: `#222222`. Radius: `2px`. Border: `1px solid #e5e5e5`.
- Layout: 1:1 image (top), 14/400 title (max 2 lines), 16/700 orange price `$1.50–$3.20`, 12/400 muted supplier name + "5 YRS" + flag emoji, MOQ "Min. order: 100 pieces".
- Hover: Border to `#ff6a00`, shadow to `0 2px 12px rgba(0,0,0,0.16)`. RFQ button reveals beneath title.

**Product Tile (Promotional)**
- Adds top-left red `#d62828` "−50%" sale chip and top-right corner ribbon "BEST DEAL".

**Supplier Row Card**
- Background: `#ffffff`. Radius: `2px`. Border: `1px solid #e5e5e5`. Padding: `16px`.
- Layout: 88x88 logo, supplier name, Gold Supplier gold-gradient badge, "5 YRS" pale-orange ribbon, "Verified" blue check-circle, country flag, 4-up product preview thumbnails right, "Contact Supplier" outlined-orange button bottom-right.
- Hover: subtle shadow lift.

**Flash Deal Hero Band**
- Background: `linear-gradient(90deg, #ff6a00 0%, #ff8533 100%)`. Color: `#ffffff`. Radius: `4px`.
- Black `#222` countdown tile ("00:14:23") + 14/900 uppercase "FLASH DEAL" + 4-up product grid + "Shop now →" CTA.
- Pulsing 0.6 → 1.0 opacity yellow accent on the countdown over 800ms loop.

### Badges & Trust Marks

**Gold Supplier**
- Background: `linear-gradient(180deg, #f7ba2a, #c8860a)`. Color: `#222222`. Radius: `2px`. Padding: `2px 6px`. Font: 11px / 700 / uppercase / 0.02em.
- Use: The canonical merchant trust mark — most-recognized badge in the system.

**Years on Alibaba**
- Background: `#fff8f0`. Color: `#ff6a00`. Border: `1px solid #ff6a00`. Radius: `2px`. Padding: `2px 6px`. Font: 11/500.
- Use: "5 YRS", "12 YRS" — supplier-tenure ribbon.

**Verified Supplier**
- Background: `#1976d2`. Color: `#ffffff`. Radius: `9999px`. Padding: `2px 6px`.
- Use: Blue check-circle inline badge.

**Trade Assurance Shield**
- Background: `transparent`. Color: `#1976d2`. Border: `1px solid #1976d2`. Radius: `2px`. Padding: `2px 6px`.
- Shield SVG glyph + "Trade Assurance".

**Ready to Ship**
- Background: `#e6f7ec`. Color: `#1ca44e`. Border: `1px solid #1ca44e`. Radius: `2px`. Padding: `2px 6px`.
- Truck SVG + "Ready to ship".

**Sale Red**
- Background: `#d62828`. Color: `#ffffff`. Radius: `2px`. Padding: `2px 6px`.
- Use: "−50%" sale chip top-left of product image.

**Factory Purple**
- Background: `#6a3093`. Color: `#ffffff`. Radius: `2px`. Padding: `2px 6px`.

**Corner Ribbon**
- Background: `#ff6a00`. Color: `#ffffff`. Transform: `rotate(-45deg)`. Anchored top-left of product image.
- Use: "NEW", "TRENDING" rare promotional ribbon.

### Search Bar (The Most Prominent Orange)

- Background: `#ffffff`. Color: `#222222`. Border: `2px solid #ff6a00` (the brand's most prominent orange surfacing). Radius: `4px`. Height: `48px`. Padding: `0 16px`.
- Suffix: Filled orange `#ff6a00` "Search" button with white text, 96px wide × 48px height, radius `0 4px 4px 0`.
- Camera icon left for visual product search.
- Hot-search chips below: "Iphone case", "Hair extensions", "LED lights" — `#666` 12/400 muted with hover-orange.

### Filters

**Filter Chip (Sidebar)**
- Background: `#ffffff` rest, `#fff8f0` active.
- Color: `#222222` rest, `#ff6a00` active.
- Border: `1px solid #cccccc` rest, `1px solid #ff6a00` active.
- Radius: `2px`. Padding: `6px 12px`. Font: 12/500.

**Category Pill (Explore Page)**
- Background: `#f5f5f5`. Color: `#222222`. Radius: `9999px`. Padding: `6px 16px`.
- Use: Soft-grey rounded pill for category exploration — exception to the brand's hard-rect rule.

### Inputs

**Text Input**
- Background: `#ffffff`. Color: `#222222`. Border: `1px solid #cccccc`. Radius: `4px`. Height: `40px`. Padding: `0 12px`.
- Focus: Border `2px solid #ff6a00`.
- Error: Border `2px solid #d62828` + red error text below.

### Navigation

**Top Utility Bar**
- Background: `#f5f5f5`. Height: `32px`. 14-language selector, currency selector, Help, Sign In, Join Free.

**Main Nav**
- Background: `#ffffff`. Height: `56px`. Logo left (orange Alibaba.com gradient wordmark), category mega-menu trigger, search bar centred, Sign In / My Alibaba right.

**Mega Menu Drawer**
- Background: `#ffffff`. Border: `1px solid #e5e5e5`. Shadow: `0 8px 24px rgba(0,0,0,0.16)`.
- Multi-column dense category tree — 4–6 columns of 14/400 nav links + recent-categories.
- Opens on hover, 200ms slide-in.

### Modal

- Background: `#ffffff`. Color: `#222222`. Radius: `8px`. Shadow: `0 8px 24px rgba(0,0,0,0.25)`.
- Use: Sign-in, RFQ submit, address form.
- Close icon top-right `#666`.

### Toast

- Background: `#222222`. Color: `#ffffff`. Radius: `4px`. Padding: `12px 16px`.
- Anchored bottom-centre, 4-second auto-dismiss.

### Footer (Dark Band)

- Background: `#1d1d1d`. Color: `#ffffff`. Padding: `48px 0`.
- 4-column category links + Trade Assurance / Membership / Help / About sections.
- Bottom: 14-language selector, currency selector, Visa/Mastercard/PayPal/Alipay payment icons.

## 5. Layout Principles

### Spacing System
- Base: 4px. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120.
- Card gap: 12px (tight). Section gap: 32–48px between feed sections.

### Grid & Container
- Page width: 1440px max. Content max: 1200px.
- Header total height: ~110px (utility 32 + main 56 + sticky search bar).
- Side nav: 240px category mega-menu drawer (on hover).
- Product grid: 5-up at 1280px desktop, 6-up at 1600px wide, 4-up at tablet, 2-up at mobile.

### Whitespace Philosophy
Alibaba optimises for *maximum product density*. The feed gap is 12px (Apple TV+ uses 48, Etsy 24, Amazon 16) — the tightest in major e-commerce. The brand's whitespace philosophy is "show 60+ products above the fold; let badge hierarchy filter the buyer's eye". Whitespace is reserved for between-section gaps (32–48px) and the dark footer band — within the feed, every pixel earns its keep.

### Section Cadence
- Top utility bar (locale switcher)
- Main nav (logo + search + sign-in)
- Sticky search bar (orange-bordered, 48px tall)
- Hero promotional band (`#fff8f0` warm tint or flash-deal gradient)
- Featured selections row (5–6 categories of 5–6 products each)
- Recommended for you (5-up grid, infinite scroll)
- Trending searches → Recently viewed → New arrivals → Top deals
- Trade Shows / Industry Hub band
- Footer (dark `#1d1d1d` band)

## 6. Shapes & Radius Scale

- **Hard Rectangle** (`0px`): Cart layout, table cells.
- **Sharp** (`2px`): Card border, badge, filter chip — the brand's default for surface decoration.
- **Standard** (`4px`): Buttons, inputs, modal close-button — wholesale-industrial restraint.
- **Comfortable** (`6px`): Image card alt, rare.
- **Featured** (`8px`): Modal dialog only.
- **Pill** (`9999px`): Category-explore pill, RFQ floating ribbon, verified-badge circle — used selectively for emphasis.

The brand resists pill-rounding because softness reads as consumer-retail, and Alibaba is wholesale-industrial. The radius scale is deliberately conservative compared to consumer-retail's 8–16px norm.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | Flat | Default — body, table row, footer |
| 1 | 1px `#e5e5e5` border | Card rest, input, filter chip |
| 2 | `0 1px 3px rgba(0,0,0,0.08)` | Card subtle lift |
| 3 | `0 2px 12px rgba(0,0,0,0.16)` + orange border | Card hover, supplier-row hover |
| 4 | `0 8px 24px rgba(0,0,0,0.16)` | Mega-menu drawer |
| 5 | `0 8px 24px rgba(0,0,0,0.25)` | Modal dialog |

### Shadow Philosophy
Alibaba uses *border colour shift* as its primary elevation cue, supplemented by light shadows. Card hover swaps the `#e5e5e5` rest border to `#ff6a00` orange border + adds a subtle 12px shadow — the orange border is the dominant signal, the shadow is reinforcement. This is wholesale-industrial chunky elevation rather than the soft layered-shadow systems of modern consumer brands. The mega-menu drawer and modal dialog use canonical layered shadows; everything else uses border-shift.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for buttons, hovers, transitions.
- **Out**: `cubic-bezier(0, 0, 0.2, 1)` — modal entry, drawer in.
- **In-Out**: `cubic-bezier(0.45, 0, 0.55, 1)` — pulse, breathing animations.

### Duration Buckets
- **Fast**: 100ms — colour shift, button hover.
- **Standard**: 200ms — card hover, mega-menu slide, modal in.
- **Slow**: 300ms — accordion expand.
- **Flash**: 800ms — flash-deal pulse loop.

### Per-Component Recipes
- **Primary CTA hover**: bg `#ff6a00 → #e85f00`, 100ms.
- **Card hover**: border `#e5e5e5 → #ff6a00` + shadow 0 → `0 2px 12px rgba(0,0,0,0.16)`, 200ms ease-standard. RFQ button slides up from bottom of tile.
- **Search bar focus**: border thickness stays 2px but orange shifts subtly toward `#e85f00`.
- **Filter chip select**: bg `#fff → #fff8f0` + border colour swap, 100ms.
- **Mega-menu open**: 200ms ease-out slide-down + opacity 0→1.
- **Flash-deal pulse**: yellow accent opacity 0.6 → 1.0 → 0.6 over 800ms infinite loop.
- **RFQ ribbon idle**: 4px vertical bob over 2.4s ease-in-out infinite.
- **Toast in**: 200ms slide-up + opacity. Dismiss after 4s.

### Page Transitions
Alibaba uses native page navigation — no SPA, no route transitions. Pages reload fully. The only "transition" experience is the persistent floating RFQ ribbon and the sticky orange search bar that follow the user across pages.

### Reduced Motion
- Flash-deal pulse → static (no opacity loop).
- RFQ ribbon bob → static.
- Mega-menu slide → instant.
- Card hover shadow → instant (border colour shift preserved).
- Toast slide → instant fade.

## 9. Accessibility & A11y

### Contrast Pairs
- `#222` on white: **16.0:1** — AAA.
- `#666` muted on white: **5.7:1** — AA at body, AAA at large.
- White on `#ff6a00`: **4.6:1** — AA at body.
- `#1976d2` link on white: **5.4:1** — AA.
- `#ffffff` on `#1d1d1d` footer: **17.5:1** — AAA.
- `#ff6a00` on `#fff8f0`: **4.7:1** — AA.

### Focus Indicators
- 2px solid `#ff6a00` ring with 2px offset on all controls + soft `rgba(255,106,0,0.4)` glow halo for high-visibility on white.

### ARIA Patterns
- Product grid: `role="list"` with each tile `role="listitem"`.
- Tile: `role="link"` with `aria-label="Product title — supplier — price"`.
- Mega-menu: `role="navigation" aria-label="Categories"` with `aria-expanded` on hover-trigger.
- Modal: `role="dialog" aria-modal="true"`, focus trap, ESC closes.
- RFQ floating ribbon: `role="button" aria-label="Request for Quotation"`.
- Verified / Gold Supplier badges: `aria-label="Gold Supplier — premium verified merchant"` so screen-readers don't read them as decorative chrome.
- Trade Assurance: `aria-describedby` link to Help article.

### Keyboard Navigation
- Tab follows main flow: utility bar → search bar → main nav → mega-menu → product grid → footer.
- Arrow keys do not bind in product grid (preserves browser arrow-scroll).
- Esc closes mega-menu drawer, modal, floating panels.
- Enter on product tile opens PDP.

### Screen Reader Hints
- Country flags rendered as `<img alt="China">` not as Unicode glyphs (which scream-read in some SR engines).
- Years badges: `aria-label="5 years on Alibaba"` so "5 YRS" doesn't get read as "5 yrs".
- Sale chip: `aria-label="50 percent off"` not `-50%` literal read.
- RFQ ribbon: visually-hidden help text "Get free quotes from multiple suppliers".

### Multilingual & RTL
- 14 languages on the global property: EN / CN / RU / ES / PT / FR / DE / IT / KR / JP / AR (RTL) / TR / NL / TH.
- Arabic locale flips entire layout: search-bar suffix mirrors, filter sidebar moves right, breadcrumb chevrons flip.
- CJK locales fall back to PingFang SC / Microsoft YaHei / Noto CJK.
- Language switcher in top utility bar — flag icon + locale name + native script ("中文 简体", "العربية").

### Reduced Motion
Honoured per §8. Especially impactful on flash-deal pulse and RFQ ribbon bob.

## 10. Responsive Behavior

### Breakpoints
| Token | Min | Use |
|-------|-----|-----|
| mobile | 0px | 2-column feed, hamburger nav, search-bar-only header |
| tablet | 600px | 4-column feed, side-nav drawer |
| desktop | 1024px | 4-column feed, full mega-menu |
| 1280px | 1280px | 5-column feed (canonical desktop) |
| wide | 1600px | 6-column feed |

### Touch Targets
- 44×44 minimum on all controls.
- Product tile is 200×280px minimum hit-target.

### Collapsing Strategy
- Mega-menu → bottom-sheet category list at <1024px.
- Top utility bar collapses to icon-only at <600px.
- Search bar grows to full-width sticky at top on mobile.
- Filter sidebar → bottom-sheet drawer on mobile.
- Footer 4-column → 2-column at tablet, accordion at mobile.

### Image Behavior
- Product images: srcset 200/400/800w with `loading="lazy"` for non-fold tiles.
- Logos: 88x88 px @ 2x retina.
- Country flags: SVG inline (24x16).
- Hero banners: srcset 1280/1920/2560w.

### Container Queries
- Supplier-row card uses CQ to switch between horizontal (>800) and stacked (<800) layout.
- Flash-deal band uses CQ to drop from 4-up to 2-up product preview.

## 11. Content & Voice

### Tone
Alibaba voice is **direct-imperative-utility**. Where Etsy is artisanal-friendly and Amazon is pragmatic-recommendational, Alibaba is *transactional-imperative* — short verbs, no salesy flourish, no playful microcopy. Acquisition copy reads like trade-show signage: "Find the right supplier. Source globally. Trade with confidence." Product copy is sparse and direct.

### Microcopy Patterns
- **Primary CTA**: "Send Inquiry", "Contact Supplier", "Buy Now", "Request for Quotation", "Get Free Samples".
- **Secondary**: "Save", "Add to Compare", "Chat Now".
- **Acquisition headline**: "The world's largest B2B marketplace. Source from 200,000+ suppliers."
- **Empty cart**: "Your cart is empty. Browse popular products."
- **Empty inquiries**: "You haven't sent any inquiries yet. Start exploring suppliers."
- **Error**: "Sorry, please try again." (Brief, no apology-ladder.)
- **Inquiry sent**: "Inquiry sent. The supplier will reply within 24 hours."
- **Trade Assurance**: "Buy with confidence. Trade Assurance protects your order from payment to delivery."
- **MOQ warning**: "Min. order quantity: 100 pieces. Adjust quantity to continue."

### Empty States
- Cart: text + 4-up "Recently viewed" recovery row.
- Inquiries: text + "Browse suppliers" primary CTA.
- Search no-results: text + spelling-suggestion + 4-up trending products.
- Saved: text + "Browse popular products" link.

### CTA Verb Conventions
- **"Send Inquiry"** is the brand's anchor verb. Distinct from Amazon's "Buy Now" or Etsy's "Add to Cart" — Alibaba's transactional model is conversation-first, not impulse-purchase.
- "Contact Supplier" (not "Message"). Wholesale terminology.
- "Request for Quotation" (RFQ) — industry-standard B2B verb.
- "Get Free Samples" — pre-purchase verification verb unique to wholesale.
- "Trade Assurance Pay" — branded checkout verb.
- "Source" (verb, not "shop"). "Source globally", "Source from suppliers".

## 12. Dark Mode & Theming

**Light-only — no dark variant offered.**

The Alibaba.com global property does not ship a dark mode. The brand identity is the *merchant floor* — bright white canvas with merchandise-photographic-density — and the wholesale category overwhelmingly favours light surfaces because product photography reads better on white. Dark mode would compromise the trust-chrome legibility (gold-gradient Gold Supplier badge on dark bg loses its richness; orange-on-pale-orange "5 YRS" loses its warmth).

The dark `#1d1d1d` footer band is a localized exception — it provides visual rhythm at the page-end and houses payment-method icons that read better against dark.

Native Alibaba mobile apps (iOS / Android) follow system theme on shell chrome but the merchandise grid stays light because of the same product-photo argument. The brand has explicitly chosen not to expand dark mode into the global property, and this is unlikely to change while photography-density is the merchandising premise.

## 13. Lineage & Influences

Alibaba inherits from three streams.

**Chinese e-commerce density tradition.** Taobao, Tmall, JD.com, 1688.com — the mature Chinese e-commerce visual idiom is dense product grid + chunky display weight + multi-tier badge hierarchy + orange/red brand voltage. Alibaba.com is the global-language extension of this idiom; the homepage carries 60+ tiles above the fold because Chinese e-commerce buyers expect that density and the brand has translated the convention to global.

**Trade-show floor visual language.** The Gold Supplier gold-gradient badge, the country-flag origin chips, the Trade Assurance shield, the "Years on Alibaba" tenure ribbon — these inherit from Hong Kong / Canton / Shenzhen trade-show floor signage where merchants compete for buyer attention via badge density and tiered membership tiers. The B2B sourcing model originated in physical trade-fair halls, and Alibaba is the digital extension.

**Helvetica-and-Arial utilitarian web tradition.** No bespoke face, fallback to system Helvetica/Arial, Roboto on newer React surfaces — Alibaba is utilitarian-functional, not editorial-prestige. The brand prioritises load-speed across emerging-market connectivity over font-rendering fidelity, which is also why the dark footer band loads inline with the page bg rather than as a separate component.

What Alibaba rejects: editorial whitespace (Apple TV+, NYer), curated minimal-tile (Etsy), pill-everything radius (consumer-retail apps), thin-weight display (prestige media), dark-default theming (modern apps). The brand is *wholesale-industrial-dense*.

**Influences:**
- **Taobao / Tmall / JD.com** — Chinese e-commerce density and badge hierarchy. https://www.taobao.com
- **Hong Kong / Canton / Shenzhen trade-show floor signage** — Gold Supplier, Verified Supplier, Years badges.
- **Helvetica Neue + Arial fallback** — utilitarian web type.
- **Material 3 (newer surfaces)** — radius scale on React-rendered features.
- **PingFang SC / Microsoft YaHei** — CJK fallback typography.
- **1688.com (Alibaba''s domestic Chinese property)** — visual sister, denser still.

## 14. Do's and Don'ts

**Do:**
- Use white `#ffffff` canvas with `#222222` warm-black ink — not pure black.
- Use Alibaba Orange `#ff6a00` aggressively — primary CTA, search border, RFQ ribbon, focus, badges.
- Default body to 14px — wholesale density.
- Use 4px button radius and 2px card radius — hard-rect industrial.
- Use Gold Supplier gold-gradient `linear-gradient(180deg, #f7ba2a, #c8860a)` badge for premium tier.
- Use Verified `#1976d2` blue check-circle for verified merchants.
- Use Trade Assurance `#1976d2` blue shield for protected-payment program.
- Use "Send Inquiry" / "Contact Supplier" / "RFQ" verbs — B2B conversational CTAs.
- Render 5 product columns at 1280px desktop (6 at 1600px wide).
- Use 12px card gaps in feed grid — tightest in e-commerce.
- Use Helvetica Neue 700–900 for display, 400 for body.
- Render dark `#1d1d1d` footer band — the brand's only persistent dark surface.
- Show 60+ product tiles above the fold — wholesale density is the brand.
- Render multilingual with PingFang SC / Microsoft YaHei CJK fallback.

**Don't:**
- Don't use pill radius (9999px) on standard buttons — wholesale-industrial demands hard-rect. Pills only for category-explore and the floating RFQ ribbon.
- Don't use editorial whitespace (48px+ feed gaps) — feed gap is 12px.
- Don't use italic in product UI.
- Don't ship a dark mode — product photography demands white.
- Don't substitute Helvetica with a soft humanist sans (Inter, Manrope) — the Helvetica chunkiness is the brand voice.
- Don't reduce trust-chrome badges (Gold Supplier, Verified, Trade Assurance) — they earn the click.
- Don't use "Buy Now" as the primary B2B CTA — use "Send Inquiry" or "Contact Supplier".
- Don't use parallax, scroll-trigger animation, or hero video — Alibaba is functional, not editorial.
- Don't put the search bar in a 9999px pill — the orange-bordered 4px-radius search bar is the brand's most-prominent orange surfacing.
- Don't render fewer than 4 columns at desktop — wholesale density requires the grid.
- Don't use light-grey body text (`#999`) for primary content — only metadata.
- Don't drop badge hierarchy at smaller sizes — supplier trust marks are the conversion driver.

## 15. Agent Prompt Guide

### Quick Color Reference
- Canvas: `#ffffff`
- Body Ink: `#222222`
- Alibaba Orange: `#ff6a00`
- Brand Pale: `#ffe5cc`
- Gold (Gold Supplier): `#f7ba2a`
- Action Blue (Trade Assurance / Link): `#1976d2`
- Sale Red: `#d62828`
- Stock Green: `#1ca44e`
- Footer Dark: `#1d1d1d`
- Border Default: `#e5e5e5`

### Example Component Prompts
1. "Create an Alibaba product tile — `#ffffff` background, 1px `#e5e5e5` border, 2px radius. 1:1 product image (top), 14/400 Helvetica Neue title in `#222` (max 2 lines, ellipsize), 16/700 orange `#ff6a00` price '$1.50–$3.20', 13/500 supplier name + 11/500 pale-orange `#ff6a00` on `#ffe5cc` '5 YRS' ribbon + 🇨🇳 flag, 12/400 muted `#666` 'Min. order: 100 pieces'. On hover, border swaps to `#ff6a00` orange + shadow 0 → `0 2px 12px rgba(0,0,0,0.16)` + 'Send Inquiry' orange CTA reveals from bottom."
2. "Design an Alibaba search bar — `#ffffff` background, **2px solid `#ff6a00`** border (the brand's most-prominent orange surfacing), 4px radius, 48px height, 16/0 padding. Camera icon left for visual search. Suffix: 96px wide × 48px height filled `#ff6a00` 'Search' button with white 14/500 text, radius `0 4px 4px 0` (right-only). Below: hot-search chips '🔥 LED lights · Iphone case · Hair extensions' in 12/400 muted `#666`."
3. "Build an Alibaba supplier-row card — `#ffffff` bg, `#e5e5e5` 1px border, 2px radius, 16px padding. 88×88 logo left, supplier name 16/700, Gold Supplier gold-gradient `linear-gradient(180deg, #f7ba2a, #c8860a)` badge, '5 YRS' pale-orange `#fff8f0` / `#ff6a00` border ribbon, blue `#1976d2` Verified check-circle, 🇨🇳 country flag, 4-up product preview thumbnails right (each 64×64), 'Contact Supplier' outlined-orange button bottom-right."
4. "Render an Alibaba flash-deal band — `linear-gradient(90deg, #ff6a00 0%, #ff8533 100%)` background, white text. Black `#222222` 4px-radius countdown tile '00:14:23' on left with white tabular digits, 14/900 uppercase 'FLASH DEAL' label with 0.02em tracking, 4-up product preview (1:1 thumbnails with red `#d62828` '−50%' chip top-left of each image), 'Shop now →' filled-white CTA right. Pulsing 0.6 → 1.0 opacity yellow accent on countdown over 800ms infinite loop (disabled at prefers-reduced-motion)."
5. "Create an Alibaba primary CTA — `#ff6a00` background, `#ffffff` text Helvetica Neue 14/500 sentence-case 'Send Inquiry'. Hard 4px radius, 10px 24px padding, 40px height. Hover darkens to `#e85f00` over 100ms `cubic-bezier(0.4, 0, 0.2, 1)` ease-standard. Active `#cc5400`. Focus 2px `#ff6a00` ring with 2px offset and soft `rgba(255,106,0,0.4)` glow."
6. "Render an Alibaba floating RFQ ribbon — bottom-right anchored 9999px pill (the brand's only fully-rounded element), `linear-gradient(90deg, #ff6a00, #ff8533)` background, white text. 12/24 padding. Bobs gently 4px vertical over 2.4s ease-in-out infinite (disabled at reduced-motion). On hover, bob pauses + soft orange shadow `0 4px 16px rgba(255,106,0,0.4)` lifts. Click opens RFQ submit modal."

### Iteration Guide
1. **Orange aggressively, not sparingly.** Surface `#ff6a00` on CTA + search border + RFQ ribbon + focus ring + Years badge. The brand demands voltage.
2. **Sharpen radius.** If buttons are 9999px-pill or cards are 12px, drop to 4 (button) and 2 (card). Wholesale-industrial restraint.
3. **Densify the grid.** 5 cols at 1280, 6 at 1600. If your design renders 3 fat columns, tighten — the brand's whitespace is between sections, not within.
4. **Show trust badges.** Gold Supplier + Verified + Trade Assurance + Years — render the full hierarchy on every supplier row. They earn the click.
5. **B2B verbs.** "Send Inquiry" / "Contact Supplier" / "RFQ" — not "Buy Now".
6. **Helvetica chunky.** Display weight 700–900 — wholesale-industrial. Avoid soft humanist sans (Inter, Manrope, Geist).
7. **Body 14, not 16.** Density requires the smaller body size.
8. **Dark footer.** `#1d1d1d` band at page-end is the brand signature; light-only elsewhere.
