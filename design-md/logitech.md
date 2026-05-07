---
name: Logitech
tagline: Soft consumer-tech blue gradients with Brown sans — design for the way you work, play, and create.
updated_at: 2026-05-05T14:31:15+12:00
published_at: 2026-05-05T10:17:17+12:00
author: webdesignhot
source_url: https://www.logitech.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [marketplace, media]
tags: [light, consumer-tech, hardware, peripherals, approachable, gradient, swiss, sans]
preview_swatch: ['#ffffff', '#00b8fc', '#1d1d1d']
related: [apple, sonos, bose]
description: 'Logitech is the consumer-tech category''s gentlest face — a paper-white canvas (`#ffffff`) layered with soft sky-blue gradients that fade `#00b8fc` into `#0073e6`, anchored by **Brown** (the Lineto sans Logitech adopted in 2014 for its quiet humanist warmth). Product photography is the design: every mouse, keyboard, and webcam is shot on white seamless with subtle pastel gradient shadows pooling behind it. Headlines run Brown Bold at 56–72px — never aggressive, never tech-shouty. The brand''s posture is approachable competence: hardware that disappears into your desk, marketing that reads like a quiet promise rather than a sales pitch. Where Razer screams gamer-aggression, Logitech whispers consumer-precision.'

colors:
  bg: '#ffffff'                  # paper-white canvas
  bg-soft: '#f5f7fa'             # near-white surface tier 1
  bg-cool: '#eef3f8'             # cool grey-blue surface tier 2
  bg-deep: '#1d1d1d'             # near-black inverted band
  bg-darkest: '#000000'          # video player surface
  surface: '#ffffff'             # default card surface (matches canvas)
  surface-soft: '#f5f7fa'        # raised card / popover floor
  surface-cool: '#eef3f8'        # alternating section band
  surface-strong: '#e2e8ef'      # hovered card, selected sidebar
  surface-elevated: '#ffffff'    # elevated panel with shadow
  surface-input: '#ffffff'       # form input fill (white with border)
  surface-product-band: 'linear-gradient(180deg, #f0f8ff 0%, #ffffff 100%)' # product hero gradient
  text: '#1d1d1d'                # primary body — soft near-black
  text-strong: '#000000'         # display headlines on white
  text-soft: '#5a5a5a'           # secondary metadata
  text-faint: '#8a8a8a'          # tertiary captions
  text-disabled: '#b3b3b3'
  text-on-dark: '#ffffff'        # text on inverted bands
  text-link: '#0073e6'           # link blue
  brand: '#00b8fc'               # Logitech Sky — the lightest brand blue
  brand-mid: '#0073e6'           # Logitech Blue — the primary brand blue
  brand-deep: '#003a7a'          # Logitech Deep — darkest brand blue
  brand-hover: '#0095d3'         # hovered brand
  brand-active: '#005bb8'        # pressed brand
  brand-gradient: 'linear-gradient(135deg, #00b8fc 0%, #0073e6 50%, #003a7a 100%)' # signature brand gradient
  brand-gradient-soft: 'linear-gradient(135deg, #d4f0ff 0%, #b3deff 100%)' # soft pastel gradient for product backdrops
  brand-pastel-pink: '#ffb5c5'   # G-series creator pink accent
  brand-pastel-mint: '#a8e6d3'   # G-series creator mint accent
  brand-pastel-yellow: '#ffe082' # G-series creator yellow accent
  on-brand: '#ffffff'
  cta-primary: '#0073e6'         # Logitech blue CTA
  cta-primary-hover: '#005bb8'
  cta-buy: '#0073e6'             # "Buy Now" same as primary
  link-default: '#0073e6'
  link-visited: '#0073e6'
  link-hover: '#005bb8'
  border: '#e2e8ef'              # 1px soft cool grey hairline
  border-soft: '#f0f4f8'         # softer divider
  border-strong: '#0073e6'       # focused input border
  scrim: 'rgba(0,0,0,0.5)'       # modal backdrop
  shadow-soft: 'rgba(0,32,77,0.05)'
  shadow-card: 'rgba(0,32,77,0.08)'
  shadow-elev: 'rgba(0,32,77,0.12)'
  shadow-deep: 'rgba(0,32,77,0.2)'
  badge-new: '#0073e6'           # "NEW" blue badge
  badge-deal: '#d63838'          # red "Deal" / "Save" badge
  badge-eco: '#2d8659'           # green "Made from recycled plastic" eco badge
  price: '#1d1d1d'               # default price
  price-strikethrough: '#8a8a8a' # strikethrough original
  price-discount: '#d63838'      # red discounted price
  rating-star: '#f5a623'         # amber star ratings
  success: '#2d8659'
  warning: '#f5a623'
  danger: '#d63838'
  info: '#0073e6'

typography:
  display:
    family: '"Brown", "BrownStd", "Helvetica Neue", Arial, sans-serif'
    weights: [300, 400, 500, 700, 900]
    opentype-features: ['kern', 'liga']
  body:
    family: '"Brown", "BrownStd", "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: '"SF Mono", "Consolas", monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 72, weight: 700, lineHeight: 1.05, tracking: '-0.02em', family: display, notes: 'Homepage hero "Tools for creators"' }
    display-xl:      { size: 56, weight: 700, lineHeight: 1.1,  tracking: '-0.015em', family: display, notes: 'Product launch hero, category H1' }
    display-lg:      { size: 40, weight: 700, lineHeight: 1.15, tracking: '-0.01em',  family: display, notes: 'Section banner "Designed for everyone"' }
    display-md:      { size: 32, weight: 700, lineHeight: 1.2,  tracking: '0',       family: display, notes: 'Product detail H1' }
    display-sm:      { size: 24, weight: 500, lineHeight: 1.25, tracking: '0',       family: display, notes: 'Card title, modal heading' }
    section-head:    { size: 14, weight: 700, lineHeight: 1.2,  tracking: '0.1em',   family: display, transform: uppercase, notes: 'Section bands "MICE", "KEYBOARDS"' }
    sub-section:     { size: 18, weight: 500, lineHeight: 1.4,  tracking: '0',       family: display, notes: 'Sub-heading within product page' }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',       family: body, notes: 'Hero supporting copy' }
    body-md:         { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',       family: body, notes: 'Default body, descriptions' }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Sidebar copy, spec list' }
    body-xs:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Caption, footer, legal' }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',       family: display, notes: 'Top nav: Products · Solutions · Support' }
    sub-nav-link:    { size: 13, weight: 400, lineHeight: 1.0,  tracking: '0',       family: display, notes: 'Sub-nav category labels' }
    button-cta:      { size: 15, weight: 500, lineHeight: 1.0,  tracking: '0',       family: display, notes: 'Buy Now, Add to Cart' }
    button-md:       { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',       family: display, notes: 'Add to wishlist, secondary' }
    button-sm:       { size: 13, weight: 500, lineHeight: 1.0,  tracking: '0',       family: display, notes: 'Inline pills, filters' }
    badge:           { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.1em',   family: display, transform: uppercase, notes: '"NEW", "DEAL", "ECO"' }
    price:           { size: 18, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'], notes: 'Product price' }
    spec-label:      { size: 12, weight: 500, lineHeight: 1.3,  tracking: '0',       family: body, notes: 'Spec table label' }
    spec-value:      { size: 24, weight: 500, lineHeight: 1.2,  tracking: '0',       family: display, opentype: ['tnum'], notes: 'Spec highlight value "8K DPI"' }
    code:            { size: 13, weight: 400, lineHeight: 1.5,  tracking: '0',       family: mono, notes: 'Setup steps, dev surface' }

radius:
  none: 0
  micro: 2
  sm: 4            # tags, small buttons
  md: 8            # default cards, inputs
  lg: 12           # featured product card
  xl: 16           # hero card, modal
  xxl: 24          # rare large container, illustrative panels
  pill: 9999       # pill buttons, profile avatars

spacing:
  base: 8
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 72
  main-nav-height: 72
  sub-nav-height: 48
  product-card: '320x440'
  hero-banner: '1920x800'
  feature-strip: '1440x600'

components:
  button-primary:
    bg: '#0073e6'
    color: '#ffffff'
    radius: 9999
    padding: '14px 32px'
    font: button-cta
    border: 'none'
    hover-bg: '#005bb8'
    box-shadow: '0 1px 3px rgba(0,32,77,0.12)'
    use: '"Buy Now" / "Add to Cart" — Logitech''s primary blue pill CTA. White label on blue fill, fully rounded pill geometry.'
  button-primary-hover:
    bg: '#005bb8'
    color: '#ffffff'
    box-shadow: '0 4px 12px rgba(0,115,230,0.25)'
    use: 'Hover state — deeper blue + slightly stronger drop shadow.'
  button-secondary:
    bg: '#ffffff'
    color: '#0073e6'
    radius: 9999
    padding: '14px 32px'
    font: button-cta
    border: '1px solid #0073e6'
    hover-bg: '#eef3f8'
    use: 'Outline pill — "Learn More" / "Compare" secondary action. White fill with blue outline, fills cool-grey on hover.'
  button-tertiary:
    bg: 'transparent'
    color: '#0073e6'
    radius: 0
    padding: '8px 0'
    font: button-md
    use: 'Inline text-link with arrow — "Explore the lineup →". No underline, blue text only.'
  button-icon:
    bg: '#f5f7fa'
    color: '#1d1d1d'
    radius: 9999
    width: 44
    height: 44
    hover-bg: '#e2e8ef'
    use: 'Icon-only button — wishlist heart, share, close-modal. Round 44px target with cool-grey fill.'
  product-card:
    bg: '#ffffff'
    color: '#1d1d1d'
    radius: 12
    padding: '24px'
    border: '1px solid #e2e8ef'
    hover-shadow: '0 8px 24px rgba(0,32,77,0.08)'
    width: 320
    use: 'Standard product card — white floor with cool-grey hairline, gradient pastel-blue product backdrop, 16:9 product image, title in 18/500 dark, price row, "Buy Now" CTA. Hover lifts a soft drop shadow.'
  product-card-featured:
    bg: 'linear-gradient(135deg, #f0f8ff 0%, #ffffff 100%)'
    color: '#1d1d1d'
    radius: 16
    padding: '32px'
    border: '1px solid #e2e8ef'
    box-shadow: '0 8px 24px rgba(0,32,77,0.08)'
    use: 'Featured product card — pastel sky-blue → white gradient floor, larger 32px padding, deeper drop shadow. Used on "New" carousels.'
  hero-card:
    bg: 'linear-gradient(135deg, #00b8fc 0%, #0073e6 50%, #003a7a 100%)'
    color: '#ffffff'
    radius: 24
    padding: '64px 48px'
    use: 'Full-bleed brand-gradient hero — three-stop sky-to-deep-blue diagonal with white headline left and product photography right. Used on flagship product launches.'
  spec-card:
    bg: '#ffffff'
    color: '#1d1d1d'
    radius: 12
    padding: '32px 24px'
    border: '1px solid #e2e8ef'
    use: 'Specification highlight card — large numeric spec value 24/500, label 12/500 muted, supporting copy 14/400. Stacked in spec strips.'
  badge-new:
    bg: '#0073e6'
    color: '#ffffff'
    radius: 4
    padding: '4px 10px'
    font: badge
    use: '"NEW" blue pill badge anchored top-left of recently launched product cards.'
  badge-deal:
    bg: '#d63838'
    color: '#ffffff'
    radius: 4
    padding: '4px 10px'
    font: badge
    use: '"DEAL" / "SAVE 20%" red badge.'
  badge-eco:
    bg: 'transparent'
    color: '#2d8659'
    radius: 4
    padding: '4px 10px'
    border: '1px solid #2d8659'
    font: badge
    use: '"MADE FROM RECYCLED PLASTIC" outline-only green eco badge — Logitech''s sustainability signal.'
  text-input:
    bg: '#ffffff'
    color: '#1d1d1d'
    radius: 8
    height: 48
    padding: '12px 16px'
    border: '1px solid #e2e8ef'
    focus-border: '1px solid #0073e6'
    focus-shadow: '0 0 0 3px rgba(0,115,230,0.15)'
    font: body-md
    use: 'Form input — white floor, cool-grey hairline, focus lights blue border + soft blue glow ring.'
  search-bar:
    bg: '#f5f7fa'
    color: '#1d1d1d'
    radius: 9999
    height: 44
    padding: '12px 16px 12px 44px'
    border: '1px solid transparent'
    focus-bg: '#ffffff'
    focus-border: '1px solid #0073e6'
    use: 'Top-bar search — pill-shaped cool-grey fill with magnifier icon left. Focus inverts to white with blue border.'
  primary-nav:
    bg: '#ffffff'
    color: '#1d1d1d'
    height: 72
    border-bottom: '1px solid #e2e8ef'
    use: 'Top nav — Logitech logomark anchored left, "Products · Solutions · Support · Account" labels in 14/500 sentence-case (no uppercase tracking), cart and search utilities flush right.'
  sub-nav:
    bg: '#f5f7fa'
    color: '#5a5a5a'
    height: 48
    use: 'Category sub-nav — "Mice · Keyboards · Webcams · Headsets · Streaming · Speakers" in 13/400 sentence-case. Active gets a 2px blue underline.'
  modal-backdrop:
    bg: 'rgba(0,0,0,0.5)'
    use: 'Modal scrim — translucent black for product quick-view dialogs.'
  modal-surface:
    bg: '#ffffff'
    color: '#1d1d1d'
    radius: 16
    box-shadow: '0 24px 48px rgba(0,32,77,0.2)'
    use: 'Modal floor — white with deep cool-tinted shadow.'
  toast:
    bg: '#1d1d1d'
    color: '#ffffff'
    radius: 8
    padding: '16px 20px'
    box-shadow: '0 8px 24px rgba(0,32,77,0.2)'
    use: 'Success toast — inverted dark floor with white text, soft drop shadow.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 150
  duration-standard: 280
  duration-slow: 480
  card-hover: 'product card lifts -4px Y + drop shadow deepens from 0 1px 3px → 0 8px 24px rgba(0,32,77,0.08) over 280ms'
  cta-press: 'button scales 0.96 + shadow tightens over 150ms on :active'
  carousel-slide: 'product carousel slides 480ms ease-emphasized with subtle momentum'
  hero-parallax: 'product photography drifts 4-8px on scroll within hero band — desktop only'
  reduced-motion: 'respects prefers-reduced-motion: reduce — card lift suppressed; parallax frozen; transitions become opacity-only.'

breakpoints:
  mobile: 600
  tablet: 960
  desktop: 1280
  wide: 1440

shadows:
  ambient: 'rgba(0,32,77,0.05) 0 1px 3px'
  soft: 'rgba(0,32,77,0.08) 0 8px 24px'
  card: 'rgba(0,32,77,0.12) 0 12px 32px'
  elevated: 'rgba(0,32,77,0.15) 0 16px 40px'
  modal: 'rgba(0,32,77,0.2) 0 24px 48px'
  ring: '0 0 0 3px rgba(0,115,230,0.15)'

accessibility:
  contrast-text-on-bg: 16.1         # #1d1d1d on #ffffff — AAA
  contrast-strong-on-bg: 21.0       # #000000 on #ffffff — AAA
  contrast-soft-on-bg: 7.4          # #5a5a5a on #ffffff — AAA
  contrast-link-on-bg: 5.4          # #0073e6 on #ffffff — AA
  contrast-cta-text: 5.4            # #ffffff on #0073e6 — AA
  contrast-faint-on-bg: 3.5         # #8a8a8a on #ffffff — AA at large sizes only
  focus-ring: '3px rgba(0,115,230,0.15) outset glow + 1px solid #0073e6 border'
  reduced-motion-honored: true
  touch-target-min: 44              # all interactive hit AAA
  keyboard-nav: 'Tab traverses logo → primary nav → search → utilities → main content → footer; Esc closes modals; Enter activates; arrow keys cycle product carousels.'

dark-mode: optional   # Logitech ships a light-default site; the G Hub gaming software has dark theme but marketing pages are light-only

lineage:
  summary: |
    Logitech''s visual lineage runs through Swiss design pedagogy (founded 1981 in Lausanne; Brown sans-serif by Aurèle Sack at Lineto), Apple consumer-tech trade dress of the 2010s (white seamless product photography with soft pastel shadows), and modern SaaS shadow language (cool-tinted multi-layer drop shadows popularised by Stripe). The current site solidified around 2021 with the rollout of the three-stop blue gradient (`#00b8fc → #0073e6 → #003a7a`) and the Brown Bold hero treatment. Brand position: friendly expertise — hardware that disappears, marketing that whispers.
  influences:
    - name: Lineto Brown (Aurèle Sack)
      role: Swiss humanist sans adopted as the company-wide marketing typeface in 2014.
      url: https://lineto.com/typefaces/brown
    - name: Apple consumer hardware photography
      role: White seamless product photography with pastel gradient shadow pools beneath.
      url: https://www.apple.com
    - name: Stripe SaaS shadow language
      role: Cool-tinted multi-layer drop shadows adapted for consumer hardware.
      url: https://stripe.com
    - name: Frog Design
      role: Industrial design partner whose product photography influenced Logitech''s marketing visual language.
      url: https://www.frogdesign.com
    - name: Bose / Sonos
      role: Competing consumer-audio brands with similar approachable-tech aesthetic.
      url: https://www.bose.com
---

## 1. Visual Theme & Atmosphere

Logitech is the consumer-tech category's gentlest face. The canvas is **paper white** (`#ffffff`) — clean, photo-studio-bright, the same white seamless that Logitech's product photography is shot on so the hardware seems to float seamlessly into the page. Cool-grey hairlines (`#e2e8ef`) separate cards from canvas. The brand colour is a **three-stop sky-to-deep-blue diagonal gradient** (`#00b8fc` → `#0073e6` → `#003a7a`) that wraps full-bleed hero bands, defines the brand mark, and carries every primary CTA — but always in service of the hardware, never overwhelming it.

The voice is approachable competence. Headlines run **Brown Bold 700** at 56–72px with `-0.015em` to `-0.02em` tracking — never aggressive, never tech-shouty. "Tools for creators." "Designed for everyone." "The way you work, play, and create." Brown is the Lineto humanist sans Logitech adopted in 2014 to replace its earlier Helvetica derivatives — its slightly soft terminals and friendly aperture give the brand its quiet warmth. Body type runs Brown Regular 400 at 16/1.55 in a soft `#1d1d1d` near-black that intentionally avoids pure black.

Product photography is **the** design. Every mouse, keyboard, webcam, and headset is shot on white seamless with subtle pastel-blue gradient shadows pooling beneath — a soft watercolour effect that gives the hardware physical presence without darkening the page. The MX Master mouse hovers above its drop shadow like a sculpted object in a museum case. Logitech's product team sweats this photography; the marketing site exists to display it.

There is no gamer-aggression even on the G-series gaming sub-brand pages — the G family uses the same Brown type and white canvas, just with a deeper "gaming dark" optional band (`#1d1d1d`) for product hero shots. Pastel accents (creator pink `#ffb5c5`, mint `#a8e6d3`, yellow `#ffe082`) appear on the G FITS / G PRO X colour-variant pages, but the canonical brand surface remains white-on-blue.

The brand position is "hardware that disappears into your desk." The marketing matches: a quiet promise rather than a sales pitch. Where Razer screams "FOR GAMERS. BY GAMERS.", Logitech says "Designed for the way you work."

**Key Characteristics:**
- Paper-white `#ffffff` canvas with cool-grey `#e2e8ef` hairline borders
- Three-stop brand gradient: `#00b8fc` sky → `#0073e6` blue → `#003a7a` deep blue
- Brown sans-serif (Lineto) at 700 for hero headlines, 400 for body — quiet humanist warmth
- Product photography on white seamless with soft pastel-blue gradient shadows pooling beneath
- Pill-shaped (9999 radius) primary CTAs in `#0073e6` blue with white labels
- Sentence-case section heads — Logitech rejects uppercase tracked labels for a friendlier voice
- Cool-tinted drop shadows (`rgba(0,32,77, *)`) — every shadow has a faint blue undertone
- Optional eco-green badge `#2d8659` for "Made from recycled plastic" sustainability signals
- 12–24px-radius cards — soft rounded geometry signals consumer warmth

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): the page floor — photo-studio paper white
- **Bg Soft** (`#f5f7fa`): near-white surface tier 1, used for alternating bands
- **Bg Cool** (`#eef3f8`): cool grey-blue surface tier 2, used for sub-nav and quiet sections
- **Bg Deep** (`#1d1d1d`): near-black inverted band, used for video player and gaming sub-brand sections
- **Text Primary** (`#1d1d1d`): soft near-black body — Logitech intentionally avoids pure black
- **Text Strong** (`#000000`): display headlines on white
- **Border** (`#e2e8ef`): 1px cool-grey hairline — the universal card and divider colour

### Brand
- **Logitech Sky** (`#00b8fc`): the lightest brand blue — the gradient start, used for soft pastel backdrops
- **Logitech Blue** (`#0073e6`): the primary brand blue — every CTA, every link, every focus border
- **Logitech Deep** (`#003a7a`): the darkest brand blue — gradient end, used for deep brand bands
- **Brand Hover** (`#0095d3`): hovered brand for icon-only utilities
- **Brand Active** (`#005bb8`): pressed CTA, deeper blue
- **Brand Gradient** (`linear-gradient(135deg, #00b8fc 0%, #0073e6 50%, #003a7a 100%)`): the signature brand gradient, used on flagship hero bands and the wordmark
- **Brand Gradient Soft** (`linear-gradient(135deg, #d4f0ff 0%, #b3deff 100%)`): the soft pastel gradient pooled beneath product photography

### Accent (G-series Pastels)
- **Pastel Pink** (`#ffb5c5`): G FITS creator-edition pink colourway
- **Pastel Mint** (`#a8e6d3`): G FITS mint colourway
- **Pastel Yellow** (`#ffe082`): G FITS yellow colourway
- These pastels appear only on creator-edition product pages; canonical brand surface stays in the blue family.

### Interactive
- **Link** (`#0073e6`): same as brand-mid — Logitech doesn't differentiate
- **Link Hover** (`#005bb8`): deeper blue on hover
- **Link Visited** (`#0073e6`): unchanged
- **Disabled** (`#b3b3b3`): muted grey
- **Selected** (`#0073e6`): selected radio / checkbox / tab fill

### Neutral Scale
- **Text** (`#1d1d1d`) — primary body, soft near-black
- **Text Strong** (`#000000`) — display headlines
- **Text Soft** (`#5a5a5a`) — secondary metadata, sub-copy
- **Text Faint** (`#8a8a8a`) — tertiary captions, legal
- **Text Disabled** (`#b3b3b3`) — disabled labels
- **Text on Dark** (`#ffffff`) — text on inverted bands and gradient hero
- **Border** (`#e2e8ef`) — 1px cool-grey hairline
- **Border Soft** (`#f0f4f8`) — softer divider
- **Border Strong** (`#0073e6`) — focused input

### Surface & Borders
The depth ladder is intentionally narrow in the light theme: `#ffffff` → `#f5f7fa` → `#eef3f8` → `#e2e8ef`. Four near-whites within roughly 8% lightness. The brand position: stay paper-bright, let the product photography and the brand-blue gradient carry the visual interest.

### Shadow Colors
**Cool-tinted shadows** are Logitech's signature. Every shadow uses `rgba(0,32,77, alpha)` — a faint blue undertone that ties the elevation language to the brand gradient. Stripe popularised the cool-tinted shadow approach for SaaS; Logitech adopted it for consumer hardware. Five tiers: `0.05` ambient, `0.08` soft, `0.12` card, `0.15` elevated, `0.2` modal/deep.

### Semantic
- **Success** (`#2d8659`): also the eco-badge green
- **Warning** (`#f5a623`): amber for low stock and warnings
- **Danger** (`#d63838`): red for errors, deal badges, discounted prices
- **Info** (`#0073e6`): brand blue doubles as info

## 3. Typography Rules

### Font Family

**Primary**: `Brown` — the Lineto humanist sans designed by Aurèle Sack, released in 2007 and adopted by Logitech in 2014 as the company-wide marketing typeface. Falls back to `BrownStd, "Helvetica Neue", Arial, sans-serif`. Brown's distinctive features: slightly soft terminals, friendly aperture on the lowercase 'a' and 'g', narrower x-height than Helvetica. The result is a sans that reads as warm without becoming whimsical. Weights: 300 (light), 400 (regular), 500 (medium), 700 (bold), 900 (black, used sparingly).

**Mono**: `"SF Mono", "Consolas", monospace` — appears only in technical documentation and setup steps.

**OpenType features**: `kern` and `liga` enabled by default. `tnum` enabled on price text and spec values. No stylistic sets.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | Brown | 72 | 700 | 1.05 | -0.02em | — | Homepage hero "Tools for creators" |
| display-xl | Brown | 56 | 700 | 1.1 | -0.015em | — | Product launch hero, category H1 |
| display-lg | Brown | 40 | 700 | 1.15 | -0.01em | — | Section banner "Designed for everyone" |
| display-md | Brown | 32 | 700 | 1.2 | 0 | — | Product detail H1 |
| display-sm | Brown | 24 | 500 | 1.25 | 0 | — | Card title, modal heading |
| section-head | Brown | 14 | 700 | 1.2 | 0.1em | uppercase | "MICE", "KEYBOARDS" |
| sub-section | Brown | 18 | 500 | 1.4 | 0 | — | Sub-heading within product page |
| body-lg | Brown | 18 | 400 | 1.55 | 0 | — | Hero supporting copy |
| body-md | Brown | 16 | 400 | 1.55 | 0 | — | Default body, descriptions |
| body-sm | Brown | 14 | 400 | 1.5 | 0 | — | Sidebar copy, spec list |
| body-xs | Brown | 12 | 400 | 1.4 | 0 | — | Caption, footer, legal |
| nav-link | Brown | 14 | 500 | 1.0 | 0 | — | "Products · Solutions · Support" |
| sub-nav-link | Brown | 13 | 400 | 1.0 | 0 | — | Sub-nav category labels |
| button-cta | Brown | 15 | 500 | 1.0 | 0 | — | Buy Now, Add to Cart |
| button-md | Brown | 14 | 500 | 1.0 | 0 | — | Add to Wishlist, secondary |
| button-sm | Brown | 13 | 500 | 1.0 | 0 | — | Inline pills, filters |
| badge | Brown | 11 | 700 | 1.0 | 0.1em | uppercase | "NEW", "DEAL", "ECO" |
| price | Brown | 18 | 500 | 1.0 | 0 | tnum | Product price |
| spec-label | Brown | 12 | 500 | 1.3 | 0 | — | Spec table label |
| spec-value | Brown | 24 | 500 | 1.2 | 0 | tnum | "8K DPI" |
| code | SF Mono | 13 | 400 | 1.5 | 0 | — | Setup steps |

### Principles

- **Sentence-case dominates.** Logitech rejects the uppercase-tracked section heads that Razer and Steam embrace. Section heads at 14/700 with 0.1em tracking exist but the brand prefers sentence-case "Featured products" over uppercase "FEATURED PRODUCTS".
- **Brown Bold 700 with negative tracking is the marketing voice.** Hero headlines at 56–72px with `-0.015em` to `-0.02em` tracking. The negative tracking compresses the friendly Brown silhouette into headline-grade authority without making it shouty.
- **Body in soft `#1d1d1d`, never pure black.** The slight lift off pure black is what gives Logitech its consumer-warm reading experience.
- **Tabular numerals on every price and spec value.** `tnum` ensures alignment in spec strips.
- **Brown 500 (medium) for utility surfaces.** Buttons, nav, card titles use 500 — the slightly heavy regular sits between Brown 400 (body) and Brown 700 (display).
- **Display-hero stays at 700, rarely 900.** Logitech reaches for 900 only on aggressive G-series gaming campaigns; the canonical voice is Brown Bold.
- **Sub-pixel rendering matters.** Brown is shipped with `-webkit-font-smoothing: antialiased` and `text-rendering: optimizeLegibility` — the soft terminals require it.
- **Open Sans / Inter are the closest open-source substitutes.** Brown is proprietary to Lineto; Inter at 400/700 is the closest free analogue.

## 4. Component Stylings

### Buttons

**`button-primary`** — the Logitech Blue pill CTA. Solid `#0073e6` fill, white label in 15/500 sentence-case (no uppercase tracking), 14×32px padding, 9999 radius (pill geometry). Soft drop shadow `0 1px 3px rgba(0,32,77,0.12)`. Hover deepens to `#005bb8` and shadow grows to `0 4px 12px rgba(0,115,230,0.25)`. The pill geometry is canonical Logitech — every primary CTA is fully rounded.

**`button-secondary`** — outline pill: white fill, `#0073e6` blue label and 1px border, 14×32px padding, 9999 radius. Hover fills cool-grey `#eef3f8`.

**`button-tertiary`** — inline text-link with arrow: `#0073e6` text in 14/500 sentence-case + "→" arrow inline. No underline. Used as "Explore the lineup →" anchors.

**`button-icon`** — round 44×44 icon-only button with `#f5f7fa` cool-grey fill. Used for wishlist heart, share, modal-close. Hover deepens fill to `#e2e8ef`.

### Cards

**`product-card`** — the standard 320×440 product tile. White floor with 1px `#e2e8ef` border, 12px radius, 24px padding. Stack: pastel-blue gradient backdrop with product hero image floating, "NEW" badge anchored top-left if applicable, title in 18/500 dark sentence-case, sub-title in 14/400 muted, price row, "Buy Now" pill CTA. Hover lifts a `0 8px 24px rgba(0,32,77,0.08)` cool-tinted drop shadow.

**`product-card-featured`** — pastel sky-blue → white gradient floor, larger 32px padding, 16px radius, deeper drop shadow at rest. Used on "New" carousels.

**`hero-card`** — full-bleed brand-gradient hero with three-stop diagonal `#00b8fc → #0073e6 → #003a7a`, 24px radius (when contained), 64×48px padding. Headline left in white Brown 56–72px, product photography right.

**`spec-card`** — white floor with cool-grey hairline, 32×24px padding, 12px radius. Stack: 24/500 numerical spec value, 12/500 muted spec label, 14/400 supporting copy. Used in feature strips like "8K DPI · 90H BATTERY · 0.1 ms RESPONSE".

### Badges

**`badge-new`** — solid `#0073e6` blue pill with white "NEW" label in 11/700 uppercase 0.1em tracking, 4×10px padding, 4px radius. Anchored top-left of new product cards.

**`badge-deal`** — solid `#d63838` red pill with white "DEAL" or "SAVE 20%" label.

**`badge-eco`** — outline-only: transparent fill, 1px `#2d8659` green border, "MADE FROM RECYCLED PLASTIC" in green text. Logitech's sustainability signal.

**`badge-out-of-stock`** — `#b3b3b3` muted grey pill, "SOLD OUT" label.

### Inputs / Forms

**`text-input`** — white fill, 1px `#e2e8ef` cool-grey hairline, 8px radius, 48px height, 12×16px padding. Focus lights a 1px `#0073e6` border + 3px `rgba(0,115,230,0.15)` outset blue glow ring.

**`search-bar`** — top-bar search field: pill-shaped `#f5f7fa` cool-grey fill, magnifier icon left at 12px inset, 9999 radius, 44px height. Focus inverts to white with blue border.

### Navigation

**`primary-nav`** — top nav with white floor, 72px tall, 1px `#e2e8ef` bottom border. Logitech wordmark anchored left in `#1d1d1d`. "Products · Solutions · Support · Account" labels in 14/500 sentence-case (no uppercase). Search trigger, account icon, cart count flush right. Hover lights brand-blue underline.

**`sub-nav`** — 48px tall band: `#f5f7fa` cool-grey floor, "Mice · Keyboards · Webcams · Headsets · Streaming · Speakers" in 13/400 sentence-case. Active gets a 2px `#0073e6` bottom underline.

**`mega-menu`** — full-width drop-down on primary nav hover. White floor, multi-column layout: category column left, sub-categories centre, featured product preview card right. Closes on mouse-leave with 200ms delay.

### Modals & Overlays

**`modal-backdrop`** — `rgba(0,0,0,0.5)` translucent scrim.

**`modal-surface`** — white fill, 16px radius, `0 24px 48px rgba(0,32,77,0.2)` deep cool-tinted shadow. Centred at 600×auto on desktop.

**`toast`** — inverted `#1d1d1d` near-black floor with white text 14/400, 16×20px padding, 8px radius. Drop shadow `0 8px 24px rgba(0,32,77,0.2)`. Logitech inverts toast to dark for emphasis.

### Decorative

**`logitech-logomark`** — the brand wordmark rendered in `#1d1d1d` near-black on white surfaces or in white on brand-gradient surfaces. The "G" submark for the gaming sub-brand uses the same colour rules.

**`product-shadow`** — soft `#d4f0ff` pastel-blue gradient pool beneath product photography (a CSS radial-gradient layered behind the product image). This single design choice — pastel-tinted product shadows — is the brand's most recognisable photographic treatment.

## 5. Layout Principles

### Spacing System

- Base unit: **8px** with 4px sub-steps for tight inline gaps
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160`
- Section gap (vertical): **96–160px** between major bands on marketing pages — Logitech breathes generously
- Card internal padding: **24–32px** for product cards, **32–48px** for spec cards
- Gutters: **24–32px** between product cards in grid views — looser than Razer

### Grid & Container

- Max content width: **1440px** with 80–120px outer gutters at wide viewports
- Product grid: 4 columns at 1280–1440px, collapses to 3 at 960px, 2 at 600px, 1 at mobile
- Hero band: full-bleed background with content centred at 1280px
- Spec strip: 4-column spec card row centred at 1280px

### Whitespace Philosophy

Logitech runs **air-and-product**. Marketing hero pages breathe at 96–160px between bands; product detail pages tighten to 64–96px between bands; product grid pages run 48–80px between rows. The rhythm prioritises product photography legibility — each product needs space to read as a discrete object.

Inside cards, padding is generous (24–32px) so the product hero image dominates without crowding the metadata.

### Section Cadence

Pages alternate **white canvas bands** (`#ffffff`), **near-white soft bands** (`#f5f7fa`), and occasional **gradient brand bands** (the `#00b8fc → #003a7a` three-stop diagonal). The gradient bands are reserved for flagship product launches and the homepage hero — they appear once or twice per page max. The rhythm avoids the "every section a new colour" trap by cycling between white and near-white with the gradient as a flagship anchor.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0px | Full-bleed hero photography, decorative dividers |
| Micro | 2px | Inset surfaces — rare |
| Small | 4px | Tags, badges, small inline pills |
| Medium | 8px | Default cards, inputs, search |
| Large | 12px | Product cards, spec cards |
| XL | 16px | Featured product card, modal surface |
| XXL | 24px | Hero card, decorative panels |
| Pill | 9999px | All primary CTAs, search bar, profile avatars, icon buttons |

The radius vocabulary is **rounded everywhere**. Cards live at 12–16px, CTAs are fully pilled at 9999px, hero cards reach 24px. The brand position: Logitech's hardware has subtle organic curves (Brown sans terminals, MX Master ergonomic palm rest) — the page geometry mirrors that softness.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Default for body, hero photography on white, sub-nav |
| 1 — Ambient | `rgba(0,32,77,0.05) 0 1px 3px` | Default card at rest |
| 2 — Soft | `rgba(0,32,77,0.08) 0 8px 24px` | Card on hover |
| 3 — Card | `rgba(0,32,77,0.12) 0 12px 32px` | Featured card at rest |
| 4 — Elevated | `rgba(0,32,77,0.15) 0 16px 40px` | Hovered featured card, popover |
| 5 — Modal | `rgba(0,32,77,0.2) 0 24px 48px` | Centred dialogs, mega-menu drop-down |

### Shadow Philosophy

Every Logitech shadow is **cool-tinted blue-undertone**. The `rgba(0,32,77, *)` base gives every elevation a faint relationship to the brand gradient — depth and brand are linked materially. This is the inheritance from Stripe's SaaS shadow language, applied to consumer hardware. Shadows are also **multi-layered** on featured cards (a tight ambient + a wider soft layer) for a more sculptural feel — the product photography needs that sculptural depth to read as physical objects.

The brand position: depth comes from atmospheric light, not from card outlines or tonal layering. Logitech is the most shadow-dependent brand in the consumer-tech category.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, carousel slide
- **Spring**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — gentle overshoot for badge appearance and toast slide-in

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Button colour swap, link colour transition |
| Standard | 280ms | Card hover lift + shadow deepen |
| Slow | 480ms | Carousel slide, modal enter, hero parallax |

### Per-Component Recipes

- **Product card hover**: card translates -4px Y + drop shadow deepens from `0 1px 3px` → `0 8px 24px rgba(0,32,77,0.08)` over 280ms. The lift + shadow deepen reads as "this card has weight and rises to meet you."
- **CTA hover**: button fill deepens from `#0073e6` → `#005bb8` + drop shadow grows over 150ms.
- **CTA active**: button scales 0.96 + shadow tightens over 150ms — the gentle press response.
- **Link hover**: text colour transitions from `#0073e6` → `#005bb8` over 150ms.
- **Carousel slide**: 480ms ease-emphasized with subtle momentum on swipe.
- **Modal enter**: scrim fades 0 → 0.5 over 200ms, dialog scales 0.97 → 1.0 + opacity 0 → 1 over 280ms emphasized.
- **Toast slide-in**: bottom-right slide with spring ease, 480ms.
- **Hero parallax**: product photography drifts 4–8px on scroll within hero band — desktop only, suppressed on mobile and reduced-motion.

### Page Transitions

Hard navigation between marketing pages with prefetch on hover for fast paint. Within-page state changes carry the motion vocabulary.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Card hover lift suppresses to colour-only (shadow deepen remains, no Y translate). Hero parallax freezes. Carousel slide degrades to opacity crossfade. Toast slide-in becomes opacity-only. Spring overshoot disables.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #1d1d1d text on #ffffff canvas | 16.1 | AAA |
| #000000 strong on #ffffff | 21.0 | AAA |
| #5a5a5a soft on #ffffff | 7.4 | AAA |
| #0073e6 link on #ffffff | 5.4 | AA |
| #ffffff on #0073e6 CTA | 5.4 | AA |
| #8a8a8a faint on #ffffff | 3.5 | AA at large sizes |
| #ffffff on brand-gradient (#003a7a stop) | 11.5 | AAA |

White-on-blue CTA pair sits at AA. Logitech compensates by using 15/500 button labels (slightly heavier than the 14/400 default) for all primary CTAs and uses pill geometry that increases the white surface area.

### Focus Indicators

Focus ring is **3px `rgba(0,115,230,0.15)` outset glow + 1px solid `#0073e6` border** on inputs. Buttons get an outset 3px blue glow ring without changing the fill colour. Links underline on `:focus-visible`.

### ARIA Patterns

- **Search bar**: `role="search"`, input `aria-label="Search Logitech"`
- **Product card**: entire tile wrapped in `<a>` with verbose `aria-label` — "MX Master 3S, $99.99, 4.5 stars from 3,247 reviews"
- **Add to Wishlist heart**: `aria-pressed` + label "Add to wishlist" / "Remove from wishlist"
- **Mega-menu**: `role="navigation"` with `aria-expanded` on the trigger
- **Spec card**: pairs `<dt>` for label and `<dd>` for value
- **Eco badge**: includes "Made from recycled plastic" in the announce

### Keyboard Navigation

- Tab traverses: logo → primary nav → search → utilities → main content → footer
- Inside product grid: arrow keys cycle horizontally and vertically through cards
- Esc closes modals, mega-menu, and search overlay
- Enter activates buttons and submits forms
- Mega-menu opens on focus + Enter or hover; closes on Esc or focus-leave

### Screen Reader Hints

Verbose `aria-label` on icon-only buttons. Product cards include the price and rating in the `aria-label`. Eco badges are read aloud. Decorative pastel product shadows are CSS-only and `aria-hidden` is implicit.

### Reduced Motion

Card lift suppresses; hero parallax freezes; carousel slide degrades to opacity crossfade.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Top nav collapses to logo + hamburger; product grid stacks 1-up; hero stacks vertically |
| Tablet | 600–960px | Product grid 2-up; sub-nav becomes horizontal scroll |
| Desktop | 960–1280px | Default — 3-up product grid with mega-menu nav |
| Wide | 1280px+ | 4-up product grid, content cap at 1440 |

### Touch Targets

- CTA buttons: 48px height — exceeds WCAG AAA 44px minimum
- Icon buttons: 44px tap target
- Product card: entire 320×440 card is the tap target
- Carousel paddle: 48×48 — exceeds AAA

### Collapsing Strategy

- Top nav: utilities (account, cart, search) collapse first; primary nav becomes a hamburger drawer
- Sub-nav: horizontal scroll with edge fade
- Product grid: 4 → 3 → 2 → 1
- Spec strip: 4-column → 2-column → 1-column stack
- Hero: 2-column (text + product) → stacked
- Section padding: 160px desktop → 96px tablet → 48px mobile

### Image Behavior

Product photography delivered at multiple aspect crops. Logitech uses `<picture>` with `srcset` to serve resolution-appropriate WebP/AVIF. Pastel product shadows are CSS gradients (no image asset), so they scale infinitely. Hero photography uses art-direction `<source media>` queries to serve different crops at mobile vs desktop.

### Container Queries

Used in product card when stacked in narrow rails (under 280px) — title size collapses 18→16, sub-title hides, price row simplifies.

## 11. Content & Voice

### Tone

Approachable, competent, never aggressive. Logitech's voice is **the friendly expert** — confident in the product, conversational in delivery. Headlines lead with what the user does, not what the product is: "Tools for creators." "Designed for the way you work." "The perfect setup starts here."

The brand never shouts. Where Razer says "OUTSMART. OUTPLAY.", Logitech says "Designed for everyone." Where Apple says "Shot on iPhone," Logitech says "Built for everyday brilliance."

### Microcopy Patterns

- **Button verbs**: "Buy Now", "Add to Cart", "Learn More", "Compare", "Watch the film", "Find in store" — sentence-case, action-clear
- **Error message recipe**: helpful + apologetic — "Sorry, something went wrong. Please try again or contact support."
- **Success confirmations**: warm — "Added to cart. Continue shopping or checkout."
- **Field labels**: short sentence-case — "Email address", "Password", "Shipping address"
- **Stock urgency**: deployed sparingly — "Only 3 left in stock" in subtle red

### Empty States

Empty cart: "Your cart is empty. Start shopping to find your next favourite." — friendly invitation rather than command.

Empty wishlist: "Save items you love by tapping the heart. We'll keep them here for next time."

Empty search: "No results for [query]. Try a different keyword or browse our categories."

### CTA Verb Conventions

- Primary: **"Buy Now"**, **"Add to Cart"**, **"Pre-Order"**, **"Shop Now"**
- Save: **"Add to Wishlist"** — the universal save verb (Logitech avoids "Favorite" or "Star")
- Tertiary: **"Learn More"**, **"Compare"**, **"Watch the film"**, **"Find in store"**
- Member: **"Join our community"** — Logitech rarely uses membership CTAs
- Avoided: "Get started" (too SaaS), "Click here" (too low-effort), "Sign up free" (Logitech doesn't have free tiers)

## 12. Dark Mode & Theming

**Light-default with optional dark on G-series.** Logitech's marketing site is light-only across consumer product pages. The G-series gaming sub-brand and the Logitech G Hub desktop software ship dark themes (`#1d1d1d` near-black canvas with `#00b8fc` cyan accent), but the canonical Logitech brand surface is white-on-blue.

When dark mode appears (G PRO X pages, G Hub product pages), the swap is:
- Canvas: `#ffffff` → `#1d1d1d`
- Surface: `#f5f7fa` → `#262626`
- Border: `#e2e8ef` → `#3a3a3a`
- Text: `#1d1d1d` → `#ffffff`
- Brand stays `#0073e6` blue (slightly brightens to `#0095d3` for legibility on dark)
- Shadows weaken — dark mode relies more on border tonal layering than shadow

The brand position: light is canonical, dark is contextual to gaming.

## 13. Lineage & Influences

Logitech's visual lineage runs through three traditions: **Swiss design pedagogy** (Logitech is a Swiss company founded in Lausanne in 1981; the Brown sans-serif is by Swiss type designer Aurèle Sack at Lineto, the same lineage as Helvetica and Univers); **Apple consumer-tech trade dress of the 2010s** (white seamless product photography with soft pastel shadows; Logitech and Apple converged on this idiom around 2015); and **modern SaaS shadow language** (cool-tinted multi-layer drop shadows, popularised by Stripe and adopted by Logitech for the consumer-hardware category around 2018).

The current site solidified around 2021 with the rollout of the three-stop blue gradient and the Brown Bold hero treatment. Subsequent updates have refined the gradient positioning and the eco-badge rollout but have not changed the colour or typographic foundations.

What Logitech rejects: gamer-aggression (even on G-series), uppercase-tracked section heads (Razer's idiom), neon accents (Razer's idiom), full-bleed photography on every section (Apple's idiom), serif type, dense spec tables. The brand position: **friendly expertise — hardware that disappears, marketing that whispers**.

**Influences:**
- Lineto Brown (Aurèle Sack) — Swiss humanist sans adopted as the company-wide typeface in 2014
- Apple consumer hardware photography — white seamless with pastel shadow pools
- Stripe SaaS shadow language — cool-tinted multi-layer drop shadows
- Swiss design pedagogy — clean grid, generous whitespace, neutral typography
- Frog Design — industrial design partner whose product photography influenced Logitech's marketing visual language
- Bose / Sonos — competing consumer-audio brands with similar approachable-tech aesthetic

## 14. Do's and Don'ts

**Do**
- Anchor the page on `#ffffff` paper-white canvas with `#e2e8ef` cool-grey hairline borders
- Use the three-stop brand gradient `#00b8fc → #0073e6 → #003a7a` on flagship hero bands and the wordmark
- Render primary CTAs as `#0073e6` solid blue pills (9999 radius) with white labels in 15/500 sentence-case
- Use Brown Bold 700 with -0.015em to -0.02em tracking for hero headlines at 56–72px
- Use sentence-case section heads — Logitech rejects uppercase tracked labels for friendlier voice
- Photograph product hardware on white seamless with soft `#d4f0ff` pastel-blue gradient shadow pools beneath
- Use cool-tinted shadows `rgba(0,32,77, *)` on every elevation — the blue undertone ties depth to brand
- Render body in soft `#1d1d1d` near-black, never pure black
- Use 12–16px-radius cards for soft consumer-warm geometry
- Display the eco-green badge `#2d8659` with "Made from recycled plastic" on sustainable products
- Use Brown Medium 500 for buttons, nav, card titles — the slightly heavy regular

**Don't**
- Don't use uppercase-tracked section heads outside small label contexts (badges only)
- Don't replace the brand blue with a different accent colour — `#0073e6` is canonical
- Don't use sharp 0px-radius corners on cards or buttons — Logitech is rounded everywhere
- Don't use neutral grey shadows — every Logitech shadow is cool-tinted `rgba(0,32,77, *)`
- Don't photograph product hardware on black seamless — Logitech's ground is white
- Don't use neon accents or bright saturated colours outside the eco-green and red deal badge
- Don't write tech-aggressive copy — Logitech's voice is "Designed for the way you work", not "OUTSMART. OUTPLAY."
- Don't use serifs anywhere — Brown sans-serif is canonical
- Don't pile shadows on dark surfaces — dark mode (when it appears on G-series) relies on tonal borders
- Don't pad sections at 32px on marketing pages — Logitech breathes at 96–160px
- Don't pluralise "Wishlist" — singular noun across UI

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #ffffff
Bg Soft:          #f5f7fa
Logitech Sky:     #00b8fc
Logitech Blue:    #0073e6
Logitech Deep:    #003a7a
Brand Gradient:   linear-gradient(135deg, #00b8fc 0%, #0073e6 50%, #003a7a 100%)
Text:             #1d1d1d
Text Soft:        #5a5a5a
Border:           #e2e8ef
Eco Green:        #2d8659
Deal Red:         #d63838
Shadow Base:      rgba(0,32,77, *)
```

### Example Component Prompts

- "Create a Logitech Buy Now button: solid `#0073e6` fill, white label 'Buy Now' in Brown 15/500 sentence-case, 14×32px padding, 9999 radius (fully pilled), `0 1px 3px rgba(0,32,77,0.12)` ambient shadow. On hover, fill deepens to `#005bb8` and shadow grows to `0 4px 12px rgba(0,115,230,0.25)`. On active, button scales 0.96."
- "Build a Logitech product card: 320×440 with white floor, 1px `#e2e8ef` cool-grey border, 12px radius, 24px padding. Stack inside: pastel-blue gradient backdrop with product photography floating, soft `#d4f0ff` radial-gradient shadow pool beneath the product, 'NEW' blue badge top-left if applicable, title in Brown 18/500 `#1d1d1d` sentence-case, sub-title 14/400 `#5a5a5a`, price row with `#1d1d1d` price + optional `#d63838` red discount, 'Buy Now' blue pill CTA. On hover, lift -4px Y + drop shadow deepens to `0 8px 24px rgba(0,32,77,0.08)` over 280ms."
- "Design a Logitech hero band: full-bleed three-stop brand gradient `linear-gradient(135deg, #00b8fc 0%, #0073e6 50%, #003a7a 100%)`, 24px radius if contained, 64×48px padding. Headline in Brown 700 at 72px / 1.05 line-height / -0.02em tracking, white, sentence-case (e.g. 'Tools for creators.'). Below it body-lg 18/400 white at 60% opacity, max-width 480px. Product photography floats right with soft pastel-blue gradient shadow pool beneath."
- "Build a Logitech spec strip: 4-column grid on `#ffffff` canvas, each cell white floor with 1px `#e2e8ef` border, 12px radius, 32×24px padding. Stack: 24/500 spec value in Brown `#1d1d1d` (e.g. '8K DPI'), 12/500 muted spec label (e.g. 'Sensor'), 14/400 muted supporting copy. Examples: '8K DPI · 90H BATTERY · 0.1ms LATENCY · MULTI-DEVICE'."
- "Create a Logitech eco badge: outline-only `#2d8659` green border, transparent fill, `#2d8659` text 'MADE FROM RECYCLED PLASTIC' in Brown 11/700 uppercase 0.1em tracking, 4×10px padding, 4px radius. Anchored top-right of sustainable product cards."
- "Design a Logitech top nav: 72px-tall white floor with 1px `#e2e8ef` bottom border. Logitech wordmark anchored left in `#1d1d1d` near-black at 24px height. Nav items 'Products · Solutions · Support · Account' in Brown 14/500 sentence-case. Search icon, account icon, cart count flush right at 44px tap targets."

### Iteration Guide

1. **Start with the white.** If your canvas isn't `#ffffff` photo-studio paper white, it isn't Logitech. Cool-grey hairlines `#e2e8ef` define the cards and dividers.
2. **The three-stop blue gradient is the brand.** Sky `#00b8fc` → Blue `#0073e6` → Deep `#003a7a` at 135deg. Used on flagship hero only — don't apply gradient to every section.
3. **Brown Bold 700 with negative tracking is the manifesto voice.** Hero headlines at 56–72px sentence-case with -0.015em to -0.02em tracking.
4. **Pill primary CTAs at 9999 radius.** Solid `#0073e6` fill with white 15/500 label. Never sharp corners on buttons.
5. **Cool-tinted shadows everywhere.** `rgba(0,32,77, *)` for every elevation — no neutral grey shadows.
6. **Sentence-case section heads.** Logitech rejects uppercase tracked labels except on tiny badges. "Featured products" not "FEATURED PRODUCTS".
7. **White seamless product photography.** Hardware floats on the canvas with pastel-blue gradient shadow pools beneath — that's the canonical product treatment.
8. **Soft `#1d1d1d` body, never pure black.** The slight lift is what gives Logitech its consumer-warm voice.
