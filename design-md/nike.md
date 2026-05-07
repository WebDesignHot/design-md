---
name: Nike
tagline: Pure black, pure white, Helvetica Now — pill CTAs and full-bleed athletic photography on a single soft cloud gray.
updated_at: 2026-05-04T14:57:35+12:00
published_at: 2026-05-04T14:57:35+12:00
author: webdesignhot
source_url: https://www.nike.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [fashion, marketplace]
tags: [light, fashion, sans, photographic, athletic, monochrome, pill, editorial, e-commerce]
preview_swatch: ['#ffffff', '#111111', '#f5f5f5']
related: [adidas, supreme, etsy]
description: 'Nike''s commerce system is photography-first and chrome-quiet — pure black ink (`#111111`), pure white canvas (`#ffffff`), and a single soft cloud gray (`#f5f5f5`) that stages every product image like a studio backdrop. Helvetica Now Display carries section heads and CTAs while Nike Futura ND towers at 96px / line-height 0.9 — burned uppercase into full-bleed campaign photography for the brand''s signature editorial moment. Every CTA is a 30px-radius pill, every product card is sharp-cornered and shadowless, and the system reserves all chromatic energy for the photograph itself: red appears only on a sale price, swatch dots carry the only hue, and a single inset hairline (`#e5e5e5`) is the entire elevation language. The result reads like an athletic magazine that learned how to sell — billboard above, catalog below, mathematically aligned to an 8px grid across men''s, women''s, Jordan, ACG, and Membership.'

colors:
  bg: '#ffffff'                    # canvas — primary page floor
  bg-dark: '#111111'               # ink-grounded campaign / membership / footer band
  surface: '#ffffff'               # default card / sheet surface
  surface-soft: '#f5f5f5'          # soft cloud — product image stage, search pill, secondary CTA, utility bar
  surface-warm: '#fafafa'          # subtle alt-row tint
  ink: '#111111'                   # primary text + brand black on every CTA
  ink-true: '#000000'              # rare — campaign overlay where slight contrast nudge is needed
  charcoal: '#39393b'              # softer body where ink is too heavy
  ash: '#4b4b4d'                   # disabled secondary border on dark surfaces
  mute: '#707072'                  # product subtitle ("Men's Trail Running Shoes"), footer link
  stone: '#9e9ea0'                 # inverse secondary on dark surfaces
  hairline: '#cacacb'              # 1px divider — filter rows, footer columns, PDP disclosure
  hairline-soft: '#e5e5e5'         # inset 1px under sticky bars — the only "shadow" the system uses
  text: '#111111'                  # body
  text-strong: '#111111'           # display — same as body; weight carries hierarchy
  text-muted: '#707072'
  text-soft: '#9e9ea0'
  text-on-ink: '#ffffff'           # inverse text on black CTAs and dark sections
  brand: '#111111'                 # Nike's brand "color" — the Swoosh black on every pill CTA
  brand-hover: '#000000'           # CTAs deepen to true black on hover
  brand-active: '#111111'          # press = scale(0.5) opacity 0.5, bg unchanged
  on-brand: '#ffffff'
  link: '#111111'                  # default link is ink + underline only
  link-hover: '#707072'            # link hover softens to mute
  visited: '#111111'               # no visited distinction — Nike treats links uniformly
  selected: '#111111'              # selected filter = inverted ink chip
  disabled-bg: '#cacacb'
  disabled-text: '#707072'
  sale: '#d30005'                  # the only red — discounted price + "% off" copy
  sale-deep: '#780700'             # sale price hover / dark-surface anchor
  success: '#007d48'               # in-stock, eligibility tick
  success-bright: '#1eaa52'        # inverse success on dark surfaces
  warning: '#a35316'
  danger: '#d30005'
  info: '#1151ff'                  # informational link/badge accent in member-experience
  info-deep: '#0034e3'             # pressed info accent
  accent-pink: '#ed1aa0'           # SKIMS / women's collection editorial
  accent-pink-soft: '#ffb0dd'      # member-experience tile soft tint
  accent-purple-soft: '#beaffd'    # editorial swatch dot, soft category chip
  accent-purple-pale: '#d6d1ff'    # lightest soft-tile fill
  accent-teal: '#0a7281'           # trail / outdoor / ACG editorial accent
  accent-pink-deep: '#4c012d'      # heritage / Jordan editorial overlay
  scrim: 'rgba(0,0,0,0.5)'         # modal backdrop
  ring: '#111111'                  # focus ring on light surfaces
  ring-on-dark: '#ffffff'          # focus ring on ink/photographic surfaces

typography:
  display:
    family: '"Nike Futura ND", "Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [500, 700]
    opentype-features: ['ss01']
  body:
    family: '"Helvetica Now Text", "Helvetica Now", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500]
  display-ui:
    family: '"Helvetica Now Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [500, 700]
  mono:
    family: 'Menlo, Monaco, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    display-campaign:  { size: 96, weight: 500, lineHeight: 0.9,  tracking: '0',      family: display,    transform: uppercase }
    display-mobile:    { size: 64, weight: 500, lineHeight: 0.9,  tracking: '0',      family: display,    transform: uppercase }
    heading-xl:        { size: 32, weight: 500, lineHeight: 1.2,  tracking: '0',      family: display-ui }
    heading-lg:        { size: 24, weight: 500, lineHeight: 1.2,  tracking: '0',      family: display-ui }
    heading-md:        { size: 16, weight: 500, lineHeight: 1.75, tracking: '0',      family: display-ui }
    body-md:           { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',      family: body }
    body-strong:       { size: 16, weight: 500, lineHeight: 1.5,  tracking: '0',      family: body }
    body-sm:           { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',      family: body }
    button-lg:         { size: 24, weight: 500, lineHeight: 1.2,  tracking: '0',      family: display-ui }
    button-md:         { size: 16, weight: 500, lineHeight: 1.5,  tracking: '0',      family: body }
    button-sm:         { size: 14, weight: 500, lineHeight: 1.5,  tracking: '0',      family: body }
    link-md:           { size: 16, weight: 500, lineHeight: 1.75, tracking: '0',      family: body, decoration: underline }
    caption-md:        { size: 14, weight: 500, lineHeight: 1.5,  tracking: '0',      family: body }
    caption-sm:        { size: 12, weight: 500, lineHeight: 1.5,  tracking: '0',      family: body }
    price:             { size: 16, weight: 500, lineHeight: 1.5,  tracking: '0',      family: body, opentype: ['tnum'] }
    utility-xs:        { size: 9,  weight: 500, lineHeight: 1.75, tracking: '0',      family: body }

radius:
  none: 0
  micro: 2
  sm: 18                           # avatar / icon container in member-benefit lockups
  md: 24                           # search pill, search submit, filter input
  lg: 30                           # every CTA pill — the universal Nike shape
  xl: 30
  pill: 9999                       # color swatch dots, circular icon buttons

spacing:
  base: 8
  scale: [2, 4, 8, 12, 16, 18, 24, 30, 32, 48, 64, 80, 96, 128]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 60                # primary nav 56–64px
  utility-bar-height: 36
  filter-rail-width: 220
  section-gap: 48

components:
  button-primary:
    bg: '#111111'
    color: '#ffffff'
    radius: 30
    padding: '16px 32px'
    height: 48
    font: button-md
    use: 'The universal Nike CTA — Sign Up, Notify Me, Buy, Continue. One per viewport.'
  button-primary-active:
    bg: '#111111'
    color: '#ffffff'
    transform: 'scale(0.5)'
    opacity: 0.5
    use: 'Signature "tap collapse" press feedback — bg unchanged, surface shrinks.'
  button-secondary:
    bg: '#f5f5f5'
    color: '#111111'
    radius: 30
    padding: '16px 32px'
    height: 48
    use: 'Soft alternative on light surfaces — paired with primary as the lower-emphasis option.'
  button-outline-on-image:
    bg: '#ffffff'
    color: '#111111'
    radius: 30
    padding: '12px 24px'
    use: 'Crisp white pill anchored bottom-left of every full-bleed sport / editorial tile.'
  button-icon-circular:
    bg: '#f5f5f5'
    color: '#111111'
    radius: 9999
    width: 40
    height: 40
    use: 'Back arrow, carousel paddle, wishlist heart, share, hide-filters toggle.'
  filter-chip:
    bg: '#ffffff'
    color: '#111111'
    border: '1px solid #cacacb'
    radius: 30
    padding: '8px 16px'
    height: 40
    use: 'PLP filter pill — default outlined, flips to inverted ink when active.'
  filter-chip-active:
    bg: '#111111'
    color: '#ffffff'
    radius: 30
    use: 'Selected filter — fully inverted, no middle state.'
  search-pill:
    bg: '#f5f5f5'
    color: '#111111'
    radius: 24
    height: 40
    padding: '8px 16px'
    use: 'Masthead search anchored to the right of primary nav with a small magnifier.'
  search-pill-focused:
    bg: '#ffffff'
    border: '2px solid #111111'
    halo: '12px outer #f5f5f5'
    radius: 24
    use: 'Focus = soft glove halo, never a hard outline.'
  product-card:
    bg: '#ffffff'
    color: '#111111'
    radius: 0
    padding: '0 0 12px 0'
    use: 'Listing tile — image is the card, zero padding, swatch dots + name + price stack below.'
  product-card-image:
    bg: '#f5f5f5'                  # the studio gray — every product photo's stage
    radius: 0
    aspect: '1:1'
    use: '1:1 product photograph backdrop — soft cloud gray.'
  campaign-tile:
    bg: '#111111'
    color: '#ffffff'
    radius: 0
    use: 'Full-bleed editorial — Futura ND 96px / 0.9 line-height burned in, white pill anchored bottom-left.'
  badge-promo:
    bg: '#ffffff'
    color: '#111111'
    border: '1px solid #cacacb'
    radius: 30
    padding: '4px 12px'
    font: caption-sm
    use: '"Just In", "Coming Soon", "Recycled Materials" — sits on top of product imagery top-left.'
  badge-sale-text:
    color: '#d30005'
    font: caption-md
    use: 'Inline price-row text — no surface, no border. The only badge without a container.'
  swatch-dot:
    radius: 9999
    size: 12
    use: 'Colorway dot — 1px subtle ring on light colorways, no border on dark.'
  swatch-dot-active:
    radius: 9999
    ring: '2px outer #111111 + 2px white interior gap'
    use: 'Concentric-ring "selected" state — no size change.'
  member-benefit-card:
    bg: '#111111'
    color: '#ffffff'
    radius: 0
    use: 'Full-bleed photographic dark card with copy bottom-left + outline-on-image pill.'
  faq-row:
    bg: '#ffffff'
    color: '#111111'
    border: 'bottom 1px solid #cacacb'
    radius: 0
    padding: '24px 0'
    font: heading-md
    use: 'Membership FAQ accordion row — chevron right, label left.'
  pdp-disclosure-row:
    bg: '#ffffff'
    color: '#111111'
    border: 'bottom 1px solid #cacacb'
    radius: 0
    padding: '24px 0'
    use: '"View Product Details", "Shipping & Returns", "Reviews (n)" — same row pattern.'
  utility-bar:
    bg: '#f5f5f5'
    color: '#111111'
    height: 36
    radius: 0
    font: caption-sm
    use: 'Top utility strip — Find a Store · Help · Join Us · Sign In, right-aligned.'
  primary-nav:
    bg: '#ffffff'
    color: '#111111'
    height: 56
    radius: 0
    font: body-strong
    use: 'Swoosh left, centered nav row, search + wishlist + bag right. Active section gets 2px ink underline.'
  filter-sidebar:
    bg: '#ffffff'
    color: '#111111'
    width: 220
    radius: 0
    font: body-strong
    use: 'PLP left rail — section headers + count rows + collapsible groups.'
  footer:
    bg: '#ffffff'
    color: '#707072'
    border: 'top 1px solid #cacacb'
    radius: 0
    use: 'Four-column link list + copyright row in 9px utility-xs.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 300
  cta-press: 'transform: scale(0.5) + opacity 0.5 — Nike''s signature "tap collapse" feedback'
  card-hover: 'image opacity 1 → 0.9 over 200ms; no lift, no scale'
  reduced-motion: 'respects prefers-reduced-motion: reduce — scale-collapse and opacity transitions degrade to no-op; hover state becomes instant.'

breakpoints:
  mobile: 600
  tablet: 1024
  desktop: 1280
  wide: 1440
  ultrawide: 1920

shadows:
  ambient: 'none — Nike retail chrome is fully flat'
  hairline-inset: 'inset 0 -1px 0 #e5e5e5'        # only depth cue — sticky bars and tab strips
  modal: 'rgba(0,0,0,0.16) 0 8px 24px'
  scrim: 'rgba(0,0,0,0.5)'
  ring: '0 0 0 2px #111111'

accessibility:
  contrast-text-on-bg: 18.5                        # #111111 on #ffffff — AAA
  contrast-text-on-brand: 18.5                     # #ffffff on #111111 — AAA
  contrast-mute-on-bg: 4.6                         # #707072 on #ffffff — AA
  contrast-sale-on-bg: 5.1                         # #d30005 on #ffffff — AA
  focus-ring: '2px solid #111111 with 2px outline-offset on light surfaces; 2px solid #ffffff on dark / photographic surfaces'
  reduced-motion-honored: true
  touch-target-min: 44                             # AAA on pills (48px height); icon-circular at 40px with 8px hit-target padding
  keyboard-nav: 'Tab: utility bar → swoosh logo → primary nav → search → wishlist → bag → main grid → footer. Filter chips arrow-key navigable inside chip group.'

dark-mode: null   # Light-only across the storefront. Campaign hero bands flip to ink (#111111) momentarily but the page proper resumes white. No system-driven dark variant.
---

## 1. Visual Theme & Atmosphere

Nike's commerce system is built on a single, almost violently simple idea: **photography speaks, the chrome doesn't.** Every page reads as an athletic editorial — towering uppercase Futura ND lockups burned into full-bleed campaign imagery, with everything else (nav, filters, buttons, cards, footer) reduced to neutral typography and pill geometry on `#ffffff` and `#f5f5f5`. There is no decorative gradient, no soft shadow nostalgia, no accent color used for "tone" — the system saves all chromatic energy for product photography and the small handful of moments that actually need to signal (sale price, success tick, swatch dots).

The result is a layout that feels physical — campaign hero, product grid, sport tile, footer — stacked like a printed catalog rather than animated like a typical SaaS landing page. Density is high but never crowded, because the system relies on three relentless devices: square or near-square 1:1 product imagery on `#f5f5f5`, pill-shaped black CTAs anchoring every actionable surface, and a tight 8px-base spacing scale that keeps cards and filters mathematically aligned across PLP, PDP, and editorial pages. Across `/men`, `/w/mens-acg-trail-running-shoes`, the Zegama PDP, `/membership`, and Jordan Golf, the same chrome appears in identical proportions — only the photography and copy change. That is the system's signature: **maximum editorial expression in the imagery, maximum mechanical restraint everywhere else.**

The atmosphere is athletic-editorial-deadpan: a runner mid-stride on a fog-covered ridge, "MOVE TO ZERO" set 96px in Futura ND across the lower-third in white. The page proper resumes white. A row of 1:1 product tiles. A single black pill that says "Shop". No drop shadow, no scrolljack, no gradient backdrop. The kinetic energy lives entirely in the photograph; the chrome stays mathematical.

Where Stripe builds confidence through chromatic restraint and Linear builds gravity through near-black surfaces, Nike does the opposite — the brand gets out of the way of the photograph. This is the same instinct that drives a Vogue layout: dense type, edge-to-edge image, no decorative furniture between them.

**Key Characteristics:**
- Editorial campaign hero with Futura ND 96px / line-height 0.9 / uppercase burned directly into full-bleed photography
- Pure black/white/single-gray UI palette: `#111111`, `#ffffff`, `#f5f5f5` carry ~95% of the chrome surface area
- Pill geometry universal: every CTA, search field, filter chip uses 30px or 24px radius — there are no sharp-cornered buttons in the system
- Product cards have zero radius, zero shadow, sit directly on soft cloud — the photograph is the card
- Two-tone CTA hierarchy: primary (black on light) versus secondary (soft cloud on bright) — never both at once on the same surface
- 8px spacing system with section rhythm at 48px creating consistent vertical breathing across PLP, PDP, and editorial pages
- Sale signaling is the only place a non-neutral color appears in retail chrome: red price + strike-through original, no badge background
- The signature press state — `scale(0.5) opacity 0.5` "tap collapse" — extracted across all CTAs

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`) — paper-white default page floor; the studio backdrop behind every product grid and editorial spread.
- **Ink** (`#111111`) — Nike's brand "color" and the only color the system commits to. CTA fill, headline ink, body text, swatch dot, active filter chip, campaign overlay, primary-nav underline.
- **Soft Cloud** (`#f5f5f5`) — the most-used non-white surface in the entire system. Product card image backgrounds, search pill, secondary CTA, utility bar, sport-category swatch tiles. The "color" of every product photograph's stage.

### Brand & Dark
- **Brand Black** (`#111111`) — Nike's primary CTA color, identical to the body ink. There is no separate "brand" hue.
- **Ink True** (`#000000`) — used rarely for campaign overlays where slight contrast nudge is needed against atmospheric photography.
- **Hairline** (`#cacacb`) — 1px dividers between filter rows, footer columns, PDP disclosure rows.
- **Hairline Soft** (`#e5e5e5`) — inset 1px shadow under sticky bars and tab strips. The only "shadow" the system uses.

### Accent
- **Sale Red** (`#d30005`) — the only red in the system. Discounted price color and "% off" copy.
- **Sale Deep** (`#780700`) — sale price hover/pressed and dark-mode sale anchor.
- **Info Blue** (`#1151ff`) — informational badge in member-experience callouts. Rare.
- **Accent Pink** (`#ed1aa0`) — SKIMS / women's collection moments only.
- **Accent Pink Soft** (`#ffb0dd`) — soft tinting on member-experience tiles.
- **Accent Purple Soft** (`#beaffd`) — editorial swatch dot, soft category chip.
- **Accent Purple Pale** (`#d6d1ff`) — lightest soft-tile fill.
- **Accent Teal** (`#0a7281`) — trail / outdoor / ACG editorial accent in lockups.
- **Accent Pink Deep** (`#4c012d`) — heritage / Jordan editorial overlay.

### Interactive
- **Link** (`#111111`) — default link color = ink + underline only.
- **Link Hover** (`#707072`) — softens to mute, never to brand orange or blue (Nike has no link hue).
- **Selected** (`#111111`) — selected filter chip = inverted ink fill, white text.
- **Disabled BG** (`#cacacb`)
- **Disabled Text** (`#707072`)

### Neutral Scale (warm-cool neutrals)
- **Ink** (`#111111`) — primary text on light surfaces, headlines, product names, prices, nav.
- **Charcoal** (`#39393b`) — slightly softer body where ink is too heavy.
- **Ash** (`#4b4b4d`) — disabled secondary border on dark surfaces and very low-emphasis utility.
- **Mute** (`#707072`) — product category subtitles, footer link text, secondary metadata.
- **Stone** (`#9e9ea0`) — inverse secondary on dark surfaces, lowest-emphasis utility.

### Surface & Borders
- **Canvas** (`#ffffff`) — default page floor and card surface
- **Soft Cloud** (`#f5f5f5`) — product image stage, secondary CTA, search pill, utility bar
- **Surface Warm** (`#fafafa`) — alt-row tint, very subtle
- **Hairline** (`#cacacb`) — 1px solid divider
- **Hairline Soft** (`#e5e5e5`) — inset bottom-line under sticky bars

### Shadow Colors
- **None observed** for retail chrome — Nike does not use drop shadows on cards, buttons, or sections.
- **Hairline Inset** `inset 0 -1px 0 #e5e5e5` — the only shadow language: a 1px inset under sticky bars and tab strips.

### Semantic
- **Success** (`#007d48`) — confirmation messages, in-stock indicators, eligibility ticks.
- **Success Bright** (`#1eaa52`) — inverse success on dark surfaces.
- **Sale / Danger** (`#d30005`) — discounted price color and validation error.
- **Sale Deep** (`#780700`) — pressed sale state.
- **Info** (`#1151ff`) — informational link/badge accent.
- **Info Deep** (`#0034e3`) — pressed info accent.

## 3. Typography Rules

### Font Family

- **Display campaign**: `Nike Futura ND` — proprietary geometric sans for the towering uppercase headlines burned into campaign hero photography. Falls back to Helvetica Now Display Medium → Helvetica → Arial.
- **Display UI**: `Helvetica Now Display` (16–32px) — modern Helvetica cut tuned for display sizes; carries every section title, PDP product name, and dialog headline.
- **Body / UI**: `Helvetica Now Text` and `Helvetica Now Text Medium` (12–16px) — buttons, captions, swatch labels, badge text. The system's UI workhorse.
- **RTL pairing**: `Neue Frutiger Arabic` — Arabic locales at heading-lg and caption sizes.
- **Utility legal**: `Helvetica Neue` 9px — legal-fine-print footer row only.
- **Open-source substitutes**: For the display tier, **Bebas Neue** or **Anton** at 96px / 0.9 line-height / uppercase / 500. For UI, **Inter** weights 400/500 reads almost identically at button and caption sizes — tighten letter-spacing slightly (-0.5%) on substitutes to approximate Futura ND's optical weight.

OpenType features: `tnum` enabled on prices and rating numerals so columns align in product cards and PDP price stacks. `ss01` activates Futura ND's distinctive geometric alternate forms on the campaign tier.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-campaign | Futura ND | 96 | 500 | 0.9 | 0 | ss01 | Editorial campaign headline burned into hero photography (uppercase) |
| display-mobile | Futura ND | 64 | 500 | 0.9 | 0 | ss01 | Same lockup at <600px viewport |
| heading-xl | Helvetica Now Display | 32 | 500 | 1.2 | 0 | — | Section headers ("FEATURED FOOTWEAR", "LATEST IN CLOTHING"), PDP product title block |
| heading-lg | Helvetica Now Display | 24 | 500 | 1.2 | 0 | — | Subsection / member-benefit card title, large CTA label, PDP price |
| heading-md | Helvetica Now Display | 16 | 500 | 1.75 | 0 | — | Card title, FAQ row label, filter group header |
| body-md | Helvetica Now Text | 16 | 400 | 1.5 | 0 | — | Body copy, search-pill placeholder, product description |
| body-strong | Helvetica Now Text Medium | 16 | 500 | 1.5 | 0 | — | Product card name, filter row label, primary nav link |
| body-sm | Helvetica Now Text | 14 | 400 | 1.5 | 0 | — | Secondary descriptions, member-experience body |
| button-lg | Helvetica Now Display | 24 | 500 | 1.2 | 0 | — | Pressed-letter campaign CTA inside hero blocks |
| button-md | Helvetica Now Text Medium | 16 | 500 | 1.5 | 0 | — | Standard pill CTAs across the system |
| button-sm | Helvetica Now Text Medium | 14 | 500 | 1.5 | 0 | — | Compact pill CTA, badge label, geo-selector |
| link-md | Helvetica Now Text | 16 | 500 | 1.75 | 0 | underline | Underlined inline link, "View Product Details" |
| caption-md | Helvetica Now Text Medium | 14 | 500 | 1.5 | 0 | — | Product subtitle, filter count, footer link |
| caption-sm | Helvetica Now Text Medium | 12 | 500 | 1.5 | 0 | — | Filter chip label, badge text, color count |
| price | Helvetica Now Text Medium | 16 | 500 | 1.5 | 0 | tnum | Product price — tabular numerals so columns align |
| utility-xs | Helvetica Neue | 9 | 500 | 1.75 | 0 | — | Legal copyright / fine-print row at the very bottom |

### Principles

The system runs on **extreme typographic contrast**: a single 96px uppercase display tier reserved for editorial campaign moments, and a quiet 12–16px Helvetica Now Text/Medium tier carrying everything else. There is almost no middle ground — the jump from heading-xl (32px) directly to body-strong (16px) is intentional and creates the "billboard above, catalog below" effect across every page.

- **Letter-spacing left at 0.** Both Futura ND and Helvetica Now are cut for tight optical fit at scale; manual tracking would break the integrity.
- **Weight does the work.** 500 (Medium) carries headlines, button labels, and product names. 400 (Regular) handles body copy. 700 is reserved for the rare display-bold campaign moment. There are no 600s, no 800s.
- **Uppercase only on Futura.** Helvetica Now never goes uppercase; Futura ND never goes lowercase.
- **No serif, no script, no decorative.** The system is purely geometric/grotesque sans throughout — the brand's discipline made typographic.
- **Tabular numerals on prices.** `tnum` keeps the price column mathematically aligned across product cards.

## 4. Component Stylings

### Buttons

**`button-primary`** — the universal Nike CTA
- Background `#111111`, text `#ffffff`, type button-md, padding `16px 32px`, height 48px, radius 30px (pill). Used on every primary action: "Sign Up", "Notify Me", "Buy", geo-confirm, "Continue", "Shop" overlays.
- **Pressed state** lives in `button-primary-active` — bg stays `#111111` while the surface shrinks to `scale(0.5)` with `opacity: 0.5`. Nike's signature "tap collapse" feedback that's extracted across the entire site.

**`button-secondary`** — soft alternative on light surfaces
- Background `#f5f5f5`, text `#111111`, type button-md, padding `16px 32px`, radius 30px. Used as the lower-emphasis alternate when a primary CTA already exists ("United States" geo-decline next to the black "Türkiye" confirm; "Cancel" or "Discover More" on light cards).

**`button-outline-on-image`** — overlay CTA on photography
- Background `#ffffff`, text `#111111`, type button-md, padding `12px 24px`, radius 30px. The crisp white pill that anchors the bottom-left of every full-bleed sport-category and editorial campaign tile.

**`button-icon-circular`** — chrome icon controls
- Background `#f5f5f5` or transparent, icon `#111111`, radius 9999, size 40px. Used for back arrow, carousel paddle, wishlist heart, share, "Hide Filters" toggle.

### Cards & Containers

**`product-card`** — the brand's signature catalog unit
- Container: bg `#ffffff`, radius 0, padding 0, no shadow.
- Image area: full-bleed product photo on `#f5f5f5` square (1:1 or 4:5 portrait).
- Below image (in this order with 8px between): swatch dot row (3–6 dots at 12px circular), promo badge if applicable, product name body-strong ink, category subtitle caption-md mute, price row.
- Price row: regular price body-strong ink. If on sale: discounted price `#d30005` followed by strike-through original `#707072` followed by "% off" in `#d30005`.

**`campaign-tile`** — the brand's signature editorial unit
- Full-bleed photography with display-campaign headline burned in (uppercase, 96px, line-height 0.9).
- Headline color is whichever of `#ffffff` or `#111111` reads against the underlying image — chosen per asset, not parameterized.
- A single `button-outline-on-image` pill anchored bottom-left of the tile carries the call-to-action.

**`category-icon-card`** — bg `#ffffff`, radius 0, centered category illustration (~80px) + label caption-md ink directly below. Used in the "Latest in Clothing" 4–8-up icon strip.

**`member-benefit-card`** — full-bleed photographic dark card on an ink image background; copy slot at bottom-left with heading-lg headline white and a `button-outline-on-image` "Explore" pill below. Used in `/membership` 3-up grid.

### Badges, Tags, Pills

**`badge-promo`** — bg `#ffffff` with 1px hairline, text `#111111`, type caption-sm, radius 30px, padding `4px 12px`. Sits on top of product imagery (top-left of card) with copy like "Just In", "Coming Soon", "Recycled Materials", "Member Exclusive".

**`badge-sale-text`** — inline price-row text in `#d30005` with no background — the only "badge" in the system that has no container.

**`filter-chip` + `filter-chip-active`**
- Default: bg `#ffffff`, text `#111111`, 1px hairline `#cacacb`, type button-md, radius 30px, padding `8px 16px`. Active: bg `#111111`, text `#ffffff` — fully inverted. No middle state.

**`swatch-dot` + `swatch-dot-active`**
- 12px circle, radius 9999, no border in default state. Renders the colorway options on every product card and PDP color picker.
- Default: filled with the colorway's actual product color (extracted at runtime), 1px subtle outer ring `#cacacb` for white/light colorways so they remain visible.
- Active: identical fill with a 2px `#111111` outer ring and 2px white interior gap, creating Nike's signature concentric-ring "selected" state. No size change.

### Inputs & Forms

**`search-pill` + `search-pill-focused`**
- Default: bg `#f5f5f5`, text `#111111`, type body-md, radius 24, padding `8px 16px`, height 40. Anchored to the right of the primary nav with a small magnifier icon.
- Focused: bg `#ffffff`, 2px solid border `#111111`, with a 12px outer halo of `#f5f5f5` (the system's only "focus ring" effect). Pill stays at radius 24 so the halo reads as a soft glove, not a hard outline.

### Navigation

**`utility-bar`** — top utility strip, bg `#f5f5f5`, text `#111111`, type caption-sm, height 36px. Right-aligned cluster: "Find a Store · Help · Join Us · Sign In". Always present; never collapses.

**`primary-nav`** — main nav, bg `#ffffff`, text `#111111`, type body-strong, height 56–64px. Layout: Nike swoosh logo at left (32×32), centered nav row ("New & Featured · Men · Women · Kids · Jordan · Nike SKIMS · Sport"), right cluster (search pill, wishlist heart icon, bag icon). Active section gets a 2px-bottom underline in `#111111` — no background fill.

**Sub-nav strip** (PLP) — appears under primary nav with breadcrumb + sort + hide-filters controls. Same canvas bg with a 1px inset hairline-soft bottom edge.

**Top Nav Mobile** — hamburger menu icon left, swoosh center, search + bag icons right. Search pill collapses into icon-only at narrow widths; tapping expands a full-width overlay search pill. Primary nav collapses into a full-height drawer that slides in from the left.

### Signature Components

**`pdp-disclosure-row`** — PDP info accordion. Stacked rows for "View Product Details", "Shipping & Returns", "Reviews (n)" with 24px vertical padding and a 1px hairline divider below each.

**`faq-row`** — `/membership` FAQ accordion. Identical pattern to pdp-disclosure-row but with heading-md label weight; 1px hairline divider below each.

**`filter-sidebar`** — PLP left rail, ~220px fixed. Section headers body-strong ink with 18px vertical gap between groups. Active filters get a 1px ink underline; counts in parentheses use mute.

**`footer`** — bg `#ffffff` with a single 1px hairline top divider. Four columns: Resources / Help / Company / Promotions, each with column header body-strong ink and link list caption-md mute. Below the columns: a horizontal rule, then a fine-print row with utility-xs mute (copyright, locale switcher, terms, privacy, supply-chain act).

## 5. Layout Principles

### Spacing System

- **Base unit**: 8px
- **Tokens**: 2 / 4 / 8 / 12 / 16 / 18 / 24 / 30 / 32 / 48 / 64 / 80 / 96 / 128
- **Universal rhythm**: every page in the set uses `48px` as the vertical gap between major content blocks (campaign hero → trending row → featured row → shop-by-sport → latest-in-clothing → footer). PLP card grids use 8px gutters. PDP disclosure rows are stacked at 24px vertical padding.
- **Card internal padding**: product cards use 0px internal padding — image is full-bleed; metadata rows sit directly below with 8px gap between name, subtitle, and price.

### Grid & Container

- **Max width**: ~1440px content area with edge gutters that grow to ~80px at 1920px (the system lets very wide viewports breathe rather than stretch).
- **Column patterns**: PLP listing uses 3-up at desktop, collapsing to 2-up at 1023px and 1-up at 599px. The men's home `/men` mixes a 2-up campaign hero row, a 3- or 4-up "Trending Now" row, a horizontal-scroll "Shop by Sport" rail, and a 4-up "Latest in Clothing" thumbnail grid.
- **Filter sidebar**: ~220px fixed-width left rail on PLP at desktop, collapsing into a "Hide Filters" toggle at narrow widths.

### Whitespace Philosophy

Whitespace is a tool for separation, not for breath. Sections butt directly against each other vertically with 48px rhythm, and product photos tile edge-to-edge inside their grid — there is no padding wrapped around the product image itself. The "air" comes from the soft cloud background of the photograph, not from layout margin. Headlines do not have decorative whitespace above them; they sit immediately under the section divider line.

### Section Cadence

Editorial-campaign-band → product-grid-band → editorial-campaign-band → product-grid-band. Light dominates; the brief inversion to ink (`#111111`) on a member band or a footer is the only break from white. The cream/dark band rhythm Stripe uses — Nike doesn't have it. Density and photography do the same job color does for other brands.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0px | Cards, campaign tiles, product imagery, navigation, footer — every container in the system |
| Micro | 2px | Inset hairline corners, dense table corners |
| SM | 18px | Avatar / icon container in member-benefit lockups |
| MD | 24px | Search pill, search submit, filter input |
| LG | 30px | Every CTA pill — primary, secondary, on-image, filter chip, geo-selector, "Notify Me" |
| Pill | 9999px | Color swatch dots and circular icon buttons (back, share, favorite, carousel paddle) |

There are no compound radii. Every container is one of: zero, 24px (input), 30px (CTA), or 9999 (circle). The discipline is total.

### Photography Geometry

- **Product cards**: consistent 1:1 square or near-square (~4:5 portrait on tall product crops), full-bleed within the card with no padding, sitting on `#f5f5f5` backdrop.
- **Editorial campaign hero**: ~16:9 or wider cinematic crop, full-bleed across the content max-width, with the Futura display headline burned into the lower-left or upper-left third.
- **Sport-category rail**: 4:5 portrait full-bleed thumbnails with a small CTA pill anchored bottom-left.
- **PDP main image**: square primary image with vertical thumbnail rail to its left (~5–7 thumbnails stacked at small size), enabling rapid color/angle browsing without leaving the page.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | No shadow, no border | Default for cards, buttons, sections — the dominant treatment |
| 1 — Hairline divider | 1px solid `#cacacb` | Filter row separators, footer column borders, PDP disclosure-row separators |
| 2 — Inset bottom-line | `box-shadow: inset 0 -1px 0 #e5e5e5` | Sticky utility/sub-nav bar bottom edge, tab strip underline |
| 3 — Modal | `rgba(0,0,0,0.16) 0 8px 24px` | Bag, wishlist, dialog overlays |
| 4 — Scrim | `rgba(0,0,0,0.5)` | Modal backdrop |

### Shadow Philosophy

The system has **no drop-shadow elevation in its retail chrome at all**. Cards do not lift on the page. The only depth cue is the 1px inset hairline on sticky strips and the contrast between full-bleed photography and `#f5f5f5` product backdrops. Depth comes entirely from photography, not from CSS effects:

- **Editorial campaign tiles** create depth via cinematic perspective — a runner on a trail, a model in a courtyard — with the Futura display headline overlaid in white or ink directly on the image.
- **Product card photography** is shot on flat `#f5f5f5` to remove any background depth, so the product itself is the only thing with form on the page.
- **Sport-category tiles** on the home page are full-bleed cinematic photography with a small white outline-on-image pill anchored at the bottom-left, giving a moment of crisp white pill against atmospheric image.

The deliberate absence of shadow is what makes the system feel athletic rather than skeuomorphic.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu reveal

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 100ms | Color transitions, focus ring fade-in, link hover |
| Standard | 200ms | Image opacity hover, card state changes, modal enter |
| Slow | 300ms | Hero carousel slide, page transitions |

### Per-Component Recipes

- **Primary CTA press**: `transform: scale(0.5)` + `opacity: 0.5` — Nike's signature "tap collapse" feedback. The bg stays unchanged; the surface shrinks to half-size for ~100ms then snaps back. This is the brand's most distinctive micro-interaction.
- **Product card hover**: image opacity 1 → 0.9 over 200ms; no lift, no scale, no shadow. Hover invites attention without theatrical motion.
- **Filter chip toggle**: bg flip from `#ffffff` to `#111111` with `color: white` over 100ms — instant feel.
- **Search-pill focus**: 2px ink border + 12px soft cloud halo fades in over 200ms.
- **Carousel paddle hover**: icon-circular bg lightens from `#f5f5f5` to `#ffffff` over 100ms.
- **Modal enter**: scrim fades in over 200ms, dialog translates from `translateY(8px) opacity(0)` to `0/1` over 240ms emphasized.

### Page Transitions

Page-to-page navigation uses no transition — links fire a hard navigation. Nike prioritises perceived speed and the "next-page-feels-like-next-spread" magazine cadence.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. The signature `scale(0.5)` press collapses to an instant opacity dim. Image opacity hover suppresses (only color change remains). Modal slide degrades to opacity-only. Carousel autoplay halts.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #111111 ink on #ffffff canvas | 18.5 | AAA |
| #ffffff on #111111 CTA | 18.5 | AAA |
| #707072 mute on #ffffff | 4.6 | AA |
| #d30005 sale on #ffffff | 5.1 | AA |
| #007d48 success on #ffffff | 4.7 | AA |
| #ffffff on #f5f5f5 secondary CTA bg | 1.05 | requires text in #111111 (AAA) |
| #111111 on #f5f5f5 secondary CTA | 17.5 | AAA |

The black/white brand pair sits at AAA across the entire chrome. The few off-system colors (sale red, success green, info blue) all hold AA at body sizes.

### Focus Indicators

Focus ring is **2px solid `#111111`** with 2px outline-offset on light surfaces. On ink/photographic surfaces (campaign tiles, member-benefit cards), focus flips to **2px solid `#ffffff`**. Buttons, inputs, links, and filter chips all gain the ring on `:focus-visible`.

### ARIA Patterns

- **Search pill**: `role="search"`. Input has `aria-label="Search products"`.
- **Filter chip**: `aria-pressed` to communicate selection state.
- **Product card**: entire tile wrapped in `<a>` with verbose `aria-label` — "Nike Air Pegasus 41, Men's Road Running Shoes, $140".
- **Swatch dot**: `aria-label="Black/White colorway, 1 of 6"` — names the color and position.
- **Wishlist heart**: `aria-pressed` with label "Add to favorites" / "Remove from favorites".
- **Disclosure row**: `aria-expanded` + `aria-controls` for PDP accordions.

### Keyboard Navigation

Tab order: utility bar links → swoosh logo → primary nav (left to right) → search pill → wishlist heart → bag → main grid (top to bottom, left to right) → filter sidebar (when expanded) → footer.

- **Inside filter chip group**: arrow keys navigate, Space toggles, Enter applies.
- **Inside PDP gallery**: arrow keys advance thumbnails.
- **Inside PDP carousel**: Esc closes lightbox.

### Screen Reader Hints

Verbose `aria-label` on icon-only buttons (heart, share, paddle). Sale prices include `aria-label="Sale price $84, was $140, save 40%"` so screen readers communicate the discount narrative. The signature `scale(0.5)` press feedback is purely visual — no `aria-live` announcement is required.

### Reduced Motion

All transitions degrade gracefully. The signature press collapses to instant opacity dim. Image hover suppresses. Carousel autoplay halts. Modal slide → opacity-only.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| ultrawide | 1920px+ | Content max-width holds at ~1440px; outer gutters grow to ~80px on each side |
| desktop-large | 1440px | Default desktop layout — 3-up product grid, 4-up clothing strip, full primary nav |
| desktop | 1280px | Same as large with slightly narrower outer gutters |
| desktop-small | 1024px | Filter sidebar starts compressing; sport rail shows ~3 visible tiles |
| tablet | 768–1023px | 3-up PLP collapses to 2-up; "Hide Filters" becomes a default toggle |
| tablet-narrow | 600–767px | Primary nav center cluster collapses to a hamburger drawer; search pill becomes icon-only |
| mobile-landscape | 480–599px | 2-up PLP collapses to 1-up; product cards become full-width with image and metadata stacking |
| mobile | <480px | Single-column everything; campaign tiles render at full screen width with shorter Futura sizes (~64px) |

### Touch Targets

All interactive elements meet WCAG AAA (44×44px minimum). Pills sit at 48px height with 32px horizontal padding. Icon-circular buttons sit at 40px — Nike's PDP carousel paddle and wishlist heart sit just under AAA but above AA at 40×40, with hit-target padding extending the tappable area to 48px+. Filter-chip pills are 40px height with 16px padding.

### Collapsing Strategy

- **Primary nav**: desktop center cluster → mobile drawer triggered by hamburger at left of the swoosh.
- **PLP grid**: 3-up → 2-up → 1-up at 1023, 599, and below; gutters drop from 8px to 4px on mobile.
- **Filter sidebar**: 220px fixed → "Hide Filters" toggle → off-canvas full-screen filter drawer at mobile.
- **Sport rail**: desktop horizontal scroll with ~5 visible → mobile horizontal scroll with ~1.5 visible (peek-next-card pattern).
- **Section spacing**: 48px desktop → 32px tablet → 24px mobile to keep editorial rhythm tight on small screens.
- **Editorial campaign headline**: desktop 96px → tablet 64px → mobile 48px, line-height stays at 0.9 across all sizes.

### Image Behavior

- Product imagery is responsive at the same 1:1 ratio across all breakpoints — the image scales, the ratio doesn't.
- Editorial campaign tiles use art-direction crops: a 16:9 wide hero on desktop swaps to a 4:5 portrait on mobile so the figure stays centered and the headline still has burn-in space.
- All non-critical product imagery is lazy-loaded as the user scrolls into the next grid row.

### Container Queries

Used in the PLP filter sidebar — when the rail narrows below ~180px, multi-column filter groups collapse to single column with chevron disclosure.

## 11. Content & Voice

### Tone

Direct, athletic, deadpan-inspirational. Nike's voice is the assistant coach who tells you exactly what to do without theatre. Headlines lead with action ("Just Do It", "Move to Zero", "Run with Pegasus") and the body copy carries the technical narrative ("React-X foam, 4mm drop, woven mesh upper").

The brand consistently positions Nike as **the equipment manufacturer that knows the sport** — every microcopy moment is slightly more competent than warm. There are no winks, no exclamation points, and no marketing-speak euphemisms for "buy."

### Microcopy Patterns

- **Button verbs**: "Buy", "Notify Me", "Sign Up", "Continue", "Add to Bag", "Shop the Drop". Short, outcome-named, no honorifics.
- **Error message recipe**: factual + remedial — "Your size is sold out. Try another size or join the waitlist."
- **Success confirmations**: "Added to bag" — instant, no ceremony.
- **Field labels**: short and direct — "Email", "Postal code", "Card number", "Shoe size".
- **Stock urgency**: "Almost gone" — three words, no pricing pressure language.
- **Restock**: "Sold out — Notify me" — names the state and the action in the same line.

### Empty States

- **Empty bag**: "Your bag is empty. Find your next pair." — names two next destinations (search + featured).
- **Empty wishlist**: "Save your favorites here. Tap the heart on any item to start." — instructive.
- **Empty search results**: "We didn't find anything for [query]. Try different keywords or browse Men's, Women's, Kids." — names cause + alternatives.

### CTA Verb Conventions

- **Primary**: "Buy", "Notify Me", "Sign Up", "Continue", "Add to Bag", "Become a Member"
- **Secondary**: "Cancel", "Save for Later", "Discover More"
- **Outline-on-image**: "Shop", "Explore", "Read Story"
- **Tertiary text**: "View Product Details", "See All", "Learn More"

The verb library is deliberately small. Nike does not use "Get started", "Sign up free", "Try it now" — too SaaS, too qualifier-heavy. The verbs are athletic-imperative.

## 12. Dark Mode & Theming

**Light-only across the storefront.** Nike's commerce surface ships only in the light theme. Campaign hero bands and member-benefit cards flip momentarily to ink (`#111111`) for editorial contrast, but these are content moments, not a theme — the page proper resumes white below them.

The Nike Run Club and Training Club apps respect system dark mode independently, but the e-commerce site does not offer a dark variant. There is no `prefers-color-scheme: dark` query and no `data-theme="dark"` token swap.

If implementing a Nike-flavored dark variant for a derived system, swap canvas to `#111111`, soft cloud to `#1a1a1a`, ink/text to `#ffffff`, mute to `#9e9ea0`, hairline to `#39393b` — keep the pill geometry and Futura headline unchanged.

## 13. Lineage & Influences

Nike's e-commerce visual lineage is a fusion of three traditions:

- **Swiss / International Typographic Style** — the discipline of Helvetica, the grid, the absence of ornament. Helvetica Now is Monotype's modernization of the original 1957 typeface; its presence on every Nike surface is a direct line back to Müller-Brockmann and Hofmann.
- **Sports magazine editorial** — the burn-in headline, the full-bleed action shot, the photographic narrative. Sports Illustrated, Wieden+Kennedy's "Just Do It" print campaigns of the 1990s, and Nike's own SNKRS app all share this vocabulary.
- **Catalog-as-website** — the dense, photo-led product grid with mathematical 8px alignment. Inspired by classic Sears and J.Crew catalogs but stripped of all chrome.

What it inherits:
- Wieden+Kennedy's print discipline (uppercase Futura, full-bleed, no decorative furniture)
- Apple's product photography on neutral gray (the `#f5f5f5` studio gray)
- Swiss grotesque typography (Helvetica Now as the UI workhorse)

What it borrows from contemporaries:
- Stripe's restraint with brand color (Nike's ink is to brand black what Stripe's blue is to the brand-as-singular)
- Notion's light-warm canvas instinct (though Nike stays cooler with #f5f5f5 vs Notion's #f6f5f4)

What it rejects:
- Drop shadows and skeuomorphic elevation (Material Design)
- Gradient washes and atmospheric color (Stripe's brand-shadow)
- Soft-rounded card corners (rounded-xl SaaS)
- "Get started" SaaS verbs (no qualifier language)

**Influences:**
- Wieden+Kennedy — https://wk.com — Print-campaign typography that defined the Nike voice for 30 years
- Helvetica / Monotype — https://www.monotype.com — Helvetica Now Display + Text as the system's UI workhorse
- Apple Store — https://apple.com — Product photography on neutral gray as the "studio" metaphor
- Sports Illustrated — https://si.com — Editorial-burn-in headline lockups on athletic photography

## 14. Do's and Don'ts

### Do
- Reserve display-campaign (96px Futura) exclusively for editorial campaign hero lockups — never use it for section headers or product titles.
- Use button-primary (`#111111` pill) as the single primary action per viewport. Pair it at most with button-secondary (`#f5f5f5` pill) for a soft alternative.
- Stage every product photograph on `#f5f5f5` — the gray is the system's "studio."
- Keep all CTAs pill-shaped at 30px radius. Never introduce a square or 8px button.
- Use sale red (`#d30005`) only on price rows — never on backgrounds, badges, or chrome.
- Stack content sections at 48px rhythm with no decorative dividers between them; the photography's bleed-edge is the divider.
- Anchor on-image CTAs with white outline pills at bottom-left — the system's universal "shop this image" position.
- Ship the signature press collapse — `transform: scale(0.5) opacity 0.5` — across all primary CTAs. It's the brand's micro-interaction signature.
- Use `tnum` on every price so columns align mathematically across product cards.
- Set focus rings to 2px ink on light, 2px white on dark; never to a brand hue (Nike has none).

### Don't
- Don't introduce drop shadows or card elevation. Cards sit flat on the page; the only depth cue is the 1px inset hairline on sticky bars.
- Don't use any of the category accent colors (pink, purple, teal) for primary chrome — they belong to swatch dots, soft tile fills, and editorial moments only.
- Don't replace ink (`#111111`) with a near-black gray like charcoal (`#39393b`) for a CTA — Nike's primary pill is true `#111111`.
- Don't pad inside product cards. The image is full-bleed; metadata sits directly below with 8px between rows.
- Don't put two campaign-tile lockups in the same row at the same scale — Nike alternates a single full-bleed editorial tile with a 2-up or 4-up product/category grid.
- Don't underline anything other than link-md inline links and the active primary-nav indicator. Buttons, headings, and prices stay un-underlined.
- Don't introduce a third button shape. Pill or icon-circular — that's the entire button shape vocabulary.
- Don't use serif, script, or display-rounded fonts. The system is Futura ND + Helvetica Now; no exceptions.
- Don't add accent gradients or atmospheric blur. The chrome is solid color-block throughout.
- Don't let body copy go below 14px (caption-md). The system's smallest UI text is 12px (caption-sm), reserved for filter chip labels and badge text.

## 15. Agent Prompt Guide

### Quick Color Reference

- Canvas: `#ffffff`
- Ink (text + brand black): `#111111`
- Soft Cloud (product image stage): `#f5f5f5`
- Hairline (1px divider): `#cacacb`
- Hairline Soft (inset): `#e5e5e5`
- Mute (secondary text): `#707072`
- Sale Red: `#d30005`
- Success: `#007d48`
- Focus ring (light): `#111111`
- Focus ring (dark/photo): `#ffffff`

### Example Component Prompts

1. "Create a Nike campaign hero — full-bleed photograph (16:9, athletic action shot) with a 96px / 0.9-line-height / 500-weight Futura ND uppercase headline burned into the lower-left third in white. Anchor a single white pill (radius 30, padding 12×24, text 16/500 ink, label 'Shop') at the bottom-left of the tile. No shadow, no border, no gradient overlay."

2. "Design a Nike product card — 1:1 product photograph on a `#f5f5f5` square backdrop, zero radius, zero padding around the image. Below the image, an 8px stack of: 4 swatch dots (12px circles), badge-promo if applicable ('Just In' in 1px hairline outline pill), product name in body-strong ink (16/500), category subtitle in caption-md mute (14/500), price in price (16/500 tnum) ink. If on sale, render discounted price in `#d30005`, then strike-through original in mute, then '% off' in `#d30005'."

3. "Build a Nike primary CTA — radius 30 pill, bg `#111111`, text `#ffffff` 16/500, padding 16×32, height 48. Press state: `transform: scale(0.5) opacity: 0.5` over 100ms (Nike's signature tap-collapse feedback). Hover: bg deepens to `#000000` over 100ms."

4. "Create a Nike PLP filter row — 1px hairline `#cacacb` between rows, 18px vertical gap. Each row: section header in body-strong ink (16/500), filter chip group below. Filter chips at radius 30, default bg `#ffffff` 1px hairline outline, active bg `#111111` text white. Counts in parentheses use mute."

5. "Design the Nike masthead — utility bar (36px, bg `#f5f5f5`, right-aligned 'Find a Store · Help · Join Us · Sign In' in caption-sm ink) above the primary nav (56px, bg `#ffffff`, swoosh logo left, 7-link centered nav 'New & Featured · Men · Women · Kids · Jordan · Nike SKIMS · Sport' in body-strong ink, search-pill + heart + bag right). Active nav section gets a 2px ink underline."

6. "Build a Nike PDP image gallery — square primary image at 1:1 with vertical thumbnail rail to the left (5–7 thumbnails stacked at 80px). Anchor a wishlist heart icon-circular (40px, bg `#f5f5f5`, ink heart) at the top-right of the primary image. Below the image, the PDP product title in heading-xl ink (32/500), price in heading-lg, then the disclosure rows ('View Product Details', 'Shipping & Returns', 'Reviews') with 24px vertical padding and 1px hairline dividers."

### Iteration Guide

1. Focus on ONE component at a time. Pull its tokens from the frontmatter and verify every property resolves to a concrete value.
2. Reference component names and tokens directly (`button-primary`, soft cloud `#f5f5f5`, radius 30) — do not paraphrase color names or radii in prose.
3. Default body to body-md (16/400); reach for body-strong (16/500) for product names and primary nav links; reserve display-campaign (96px Futura) strictly for hero campaign lockups.
4. Keep ink (`#111111`) scarce per viewport — if more than one solid-black pill or block appears in the same fold, neutralize one to button-secondary or button-outline-on-image.
5. When introducing a new component, ask whether it can be expressed with the existing pill + flat-card + photography-on-`#f5f5f5` vocabulary before adding new tokens. The system's strength is that it almost never needs new ones.
6. Add new variants as separate component entries (`-active`, `-disabled`, `-focused`) — do not bury them inside prose. Nike's pressed state (`scale(0.5) opacity 0.5`) is intentional and must be its own entry.
7. Run a contrast check on every text/bg pair — the system's colors are designed for AAA on the brand pair and AA elsewhere.
8. Test every interactive surface at 480px / 768px / 1024px / 1440px. Nike's responsive cadence (3-up → 2-up → 1-up; 96px → 64px → 48px headline) is part of the system's identity.
