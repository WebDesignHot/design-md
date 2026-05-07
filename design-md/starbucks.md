---
name: Starbucks
tagline: Forest-green storefront — SoDoSans, full-pill buttons, warm-cream canvas, and a floating Frap CTA the brand calls home.
updated_at: 2026-05-04T14:57:35+12:00
published_at: 2026-05-04T14:57:35+12:00
author: webdesignhot
source_url: https://www.starbucks.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [media, marketplace]
tags: [light, retail, coffee, sans, warm, photographic, friendly, full-pill, e-commerce]
preview_swatch: ['#f2f0eb', '#006241', '#1e3932']
related: [target, costco, etsy]
description: 'Starbucks'' web is a warm-confident retail flagship dressed in the green of their storefront apron. The canvas alternates between a neutral-warm cream (`#f2f0eb`) and ceramic off-white (`#edebe9`) — references to actual store materials: paper napkins, café walls, wood finishes — while four calibrated greens (Starbucks `#006241`, Accent `#00754A`, House `#1E3932`, Uplift `#2b5148`) each map to a specific surface role. Gold (`#cba258`) appears only around Rewards-status ceremony, never as a general accent. Type runs **SoDoSans** (proprietary, House Industries) at a tight `-0.16px` letter-spacing — confident and friendly without being fashion-magazine severe. Every button is a 50px full-pill. The signature elevation move is the **Frap** — a 56px circular Green-Accent CTA floating bottom-right with a layered shadow stack — and the universal active-press is `scale(0.95)`. The whole system feels like clean café signage: legible, warm, and never shouting.'

colors:
  bg: '#f2f0eb'                     # neutral warm — the primary cream page canvas
  bg-white: '#ffffff'               # white card / modal surface
  bg-ceramic: '#edebe9'             # slightly warmer cream — zone separator, partnership band
  bg-gold-lightest: '#faf6ee'       # cream-gold wash under partnership sections
  bg-feature: '#1e3932'             # House Green dark feature band
  bg-footer: '#1e3932'              # House Green footer
  bg-cool: '#f9f9f9'                # neutral cool — dropdown bg, form-card wrap
  surface: '#ffffff'                # default card surface
  surface-soft: '#f9f9f9'           # quiet utility container
  brand: '#006241'                  # Starbucks Green — H1, brand signal
  brand-accent: '#00754A'           # Green Accent — primary filled CTA, Frap fill
  brand-house: '#1e3932'            # House Green — feature band, footer, dark surface
  brand-uplift: '#2b5148'           # Green Uplift — decorative, dark gradient
  brand-light: '#d4e9e2'            # pale mint wash — form valid tint
  brand-consent: '#008248'          # specific cookie-consent variant
  gold: '#cba258'                   # Rewards-status ceremony only
  gold-light: '#dfc49d'             # softer gold bg wash on gold-tier sections
  gold-lightest: '#faf6ee'          # cream-gold partnership surface
  text: 'rgba(0,0,0,0.87)'          # primary heading and body — 87% black, warm
  text-soft: 'rgba(0,0,0,0.58)'     # secondary metadata
  text-faint: 'rgba(0,0,0,0.38)'    # placeholder
  text-rewards: '#33433d'           # dedicated muted slate-green for Rewards-page reading text
  text-on-dark: '#ffffff'           # primary on dark green
  text-on-dark-soft: 'rgba(255,255,255,0.70)'  # secondary on dark green
  on-brand: '#ffffff'
  on-gold: '#1e3932'                # gold-tier inverse text
  border: '#d6dbde'                 # input border
  border-soft: '#e7e7e7'            # nutrition table hairline
  link: '#00754A'                   # green-accent for inline links
  link-hover: '#006241'             # darker on hover
  black: '#000000'                  # top-of-page Join CTA strip, sign-in button
  red: '#c82014'                    # error / destructive
  yellow: '#fbbc05'                 # warning / legacy
  red-tint: 'hsl(4 82% 43% / 5%)'   # invalid field tint
  green-light-tint: 'hsl(160 32% 87% / 33%)' # valid field tint
  scrim: 'rgba(0,0,0,0.5)'
  shadow-card-1: 'rgba(0,0,0,0.14)' # 0.5px ring layer
  shadow-card-2: 'rgba(0,0,0,0.24)' # 1px direct layer
  shadow-frap-1: 'rgba(0,0,0,0.24)' # base 6px halo
  shadow-frap-2: 'rgba(0,0,0,0.14)' # ambient 8/12 directional
  shadow-nav-1: 'rgba(0,0,0,0.10)'
  shadow-nav-2: 'rgba(0,0,0,0.06)'
  shadow-nav-3: 'rgba(0,0,0,0.07)'

typography:
  display:
    family: 'SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: 'SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  serif:
    family: '"Lander Tall", "Iowan Old Style", Georgia, serif'
    weights: [400, 700]
  script:
    family: '"Kalam", "Comic Sans MS", cursive'
    weights: [400, 700]
  mono:
    family: 'Menlo, Monaco, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    display-10:      { size: 80, weight: 600, lineHeight: 1.2,  tracking: '-0.16px', family: display, notes: 'largest Rewards/hero display' }
    jumbo-9:         { size: 58, weight: 600, lineHeight: 1.2,  tracking: '-0.16px', family: display, notes: 'secondary hero headings' }
    hero-large-8:    { size: 45, weight: 600, lineHeight: 1.2,  tracking: '-0.16px', family: display, notes: 'landing section headlines' }
    h1:              { size: 24, weight: 600, lineHeight: 1.5,  tracking: '-0.16px', family: display, notes: 'Starbucks-Green primary heading' }
    h2:              { size: 24, weight: 400, lineHeight: 1.5,  tracking: '-0.16px', family: display, notes: 'Regular-weight section title in Text Black' }
    h3:              { size: 22, weight: 600, lineHeight: 1.27, tracking: '-0.16px', family: display }
    h4:              { size: 18, weight: 600, lineHeight: 1.33, tracking: '-0.16px', family: display }
    body-large:      { size: 19, weight: 400, lineHeight: 1.75, tracking: '-0.16px', family: body, notes: 'hero intro copy' }
    body-md:         { size: 16, weight: 400, lineHeight: 1.5,  tracking: '-0.01em', family: body, notes: 'default body — text-3' }
    body-strong:     { size: 16, weight: 600, lineHeight: 1.5,  tracking: '-0.01em', family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '-0.01em', family: body, notes: 'metadata, form labels' }
    body-sm-strong:  { size: 14, weight: 600, lineHeight: 1.2,  tracking: '-0.01em', family: body, notes: 'button label, table value' }
    micro:           { size: 13, weight: 400, lineHeight: 1.5,  tracking: '-0.01em', family: body, notes: 'active float-label, caption' }
    button-md:       { size: 16, weight: 600, lineHeight: 1.2,  tracking: '-0.01em', family: body }
    button-sm:       { size: 14, weight: 600, lineHeight: 1.2,  tracking: '-0.01em', family: body }
    rewards-display: { size: 45, weight: 700, lineHeight: 1.1,  tracking: '-0.16px', family: serif, notes: 'Lander Tall on Rewards editorial' }
    cup-name:        { size: 24, weight: 400, lineHeight: 1.2,  tracking: '0',       family: script, notes: 'Kalam on Careers cup-names' }
    overline:        { size: 12, weight: 700, lineHeight: 1.2,  tracking: '0.325px', family: body, transform: uppercase }

radius:
  micro: 2
  sm: 4                              # add-in / milk select rectangle, tags
  md: 8
  card: 12                           # cards, modals, menu-item tiles
  card-top: '12px 12px 0 0'          # full-width feedback tab
  pill: 50                           # all buttons
  full: 9999                         # circular icons, Frap floating button

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 128]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 99                  # progressive: 64 xs / 72 mobile / 83 tablet / 99 desktop
  sub-nav-height: 53
  outer-gutter-mobile: 16
  outer-gutter-tablet: 24
  outer-gutter-desktop: 40
  hero-image-proportion: 0.4
  hero-content-proportion: 0.6

components:
  button-primary-filled:
    bg: '#00754A'
    color: '#ffffff'
    border: '1px solid #00754A'
    radius: 50
    padding: '7px 16px'
    font: button-md
    use: '"Explore our afternoon menu", "Sign up for free" — primary CTA across the storefront.'
  button-primary-outlined:
    bg: 'transparent'
    color: '#00754A'
    border: '1px solid #00754A'
    radius: 50
    padding: '7px 16px'
    use: '"Give them a try", "Start an order" — outlined alternative on light surfaces.'
  button-black-filled:
    bg: '#000000'
    color: '#ffffff'
    border: '1px solid #000000'
    radius: 50
    padding: '7px 16px'
    font: button-sm
    use: '"Join now" top-of-page strip and high-conversion moments.'
  button-dark-outlined:
    bg: 'transparent'
    color: 'rgba(0,0,0,0.87)'
    border: '1px solid rgba(0,0,0,0.87)'
    radius: 50
    padding: '7px 16px'
    use: '"Sign in" — dark outlined on light.'
  button-inverted-on-green:
    bg: '#ffffff'
    color: '#00754A'
    border: '1px solid #ffffff'
    radius: 50
    padding: '7px 16px'
    use: 'White button with green text, used over House-Green dark bands.'
  button-outlined-on-dark:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #ffffff'
    radius: 50
    padding: '7px 16px'
    use: 'Secondary outlined-white CTA on dark green band, paired with white-filled primary.'
  button-active:
    transform: 'scale(0.95)'
    use: 'Universal :active state on every pill button — Starbucks signature press feedback.'
  frap:
    bg: '#00754A'
    icon: '#ffffff'
    radius: 9999
    size: 56
    position: 'fixed bottom-right'
    touch-offset: '-0.8rem'
    shadow: '0 0 6px rgba(0,0,0,0.24), 0 8px 12px rgba(0,0,0,0.14)'
    active-shadow: '0 0 6px rgba(0,0,0,0.24), 0 8px 12px rgba(0,0,0,0)'
    use: 'Floating circular order CTA — the product''s signature elevation element.'
  frap-mini:
    bg: '#00754A'
    icon: '#ffffff'
    radius: 9999
    size: 40
    use: 'Small variant of the Frap on space-constrained surfaces.'
  feedback-tab:
    bg: '#00754A'
    color: '#ffffff'
    radius: '12px 12px 0 0'
    padding: '8px 16px'
    font: button-sm
    use: '"Provide feedback" tab fixed bottom-right inside, attached to viewport edge.'
  card-content:
    bg: '#ffffff'
    radius: 12
    shadow: '0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)'
    use: 'Default content card — feature card, menu-item tile, reward-status panel.'
  card-rewards-status:
    bg: '#1e3932'
    color: '#ffffff'
    radius: 12
    use: 'Bronze / Silver / Gold tier panel — colored gradient header + level badge + benefits list.'
  card-partnership:
    bg: '#faf6ee'
    color: 'rgba(0,0,0,0.87)'
    radius: 12
    shadow: '0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)'
    use: 'Rewards partnership card — SkyMiles, Bonvoy on cream-gold surface.'
  card-gift:
    bg: 'illustrated photograph'
    radius: 12
    shadow: 'light drop shadow — physical-card feel'
    use: 'Each gift card is a distinct illustrated photograph filling the card.'
  modal:
    bg: '#ffffff'
    radius: 12
    padding: '88px 24px 24px 24px'
    use: 'Centered dialog — top padding leaves room for close button.'
  input-floating-label:
    bg: '#ffffff'
    border: '1px solid #d6dbde'
    radius: 4
    padding: '12px'
    focus-border: '#00754A'
    label-active-translate: '-12px'
    label-active-size: '1.4rem'
    use: 'Floating label input — animates label up on focus/fill.'
  size-option:
    bg: 'transparent'
    icon-color: '#00754A'
    radius: 9999
    use: 'PDP cup-icon button — 4-up Tall/Grande/Venti/Trenta row, ring outline on selected.'
  size-option-selected:
    ring: '2px solid #00754A'
    use: 'Selected cup wraps icon with green circular ring outline.'
  customize-button:
    bg: '#ffffff'
    color: '#00754A'
    border: '1.5px solid #00754A'
    radius: 50
    padding: '14px 40px'
    use: '"Customize" pill with gold sparkle icon — secondary primary action on PDP.'
  add-to-order-button:
    bg: '#00754A'
    color: '#ffffff'
    radius: 50
    padding: '14px 32px'
    use: 'PDP "Add to Order" pill — pinned top-right of product card.'
  rewards-cost-pill:
    bg: 'transparent'
    border: '1px solid #cba258'
    color: '#cba258'
    radius: 50
    padding: '4px 12px'
    use: '"200★ item" — Rewards Stars required to redeem this item, gold pill.'
  numeric-stepper:
    button-bg: '#ffffff'
    button-border: '1px solid #d6dbde'
    button-size: 32
    button-radius: 9999
    use: 'Embedded "− count +" within Add-in row when quantity required.'
  global-nav:
    bg: '#ffffff'
    height-progressive: '64 / 72 / 83 / 99'
    shadow: '0 1px 3px rgba(0,0,0,0.10), 0 2px 2px rgba(0,0,0,0.06), 0 0 2px rgba(0,0,0,0.07)'
    use: 'Fixed top bar with three-layer soft lift — wordmark + Menu/Rewards/Gift Cards + utilities.'
  feature-band:
    bg: '#1e3932'
    color: '#ffffff'
    use: 'Full-width dark-green strip — split 40/60 with photography right, copy + CTA pair left.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-checked: 'cubic-bezier(0.32, 2.32, 0.61, 0.27)'   # springy 2.32 overshoot on checked input
  ease-expander: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  duration-fast: 150
  duration-standard: 200
  duration-slow: 300
  duration-expander: 300
  duration-image-fade: 300
  cta-press: 'transform: scale(0.95) over 200ms — universal active state on every pill'
  frap-active: 'ambient shadow fades to 0 + scale(0.95)'
  reduced-motion: 'respects prefers-reduced-motion: reduce — scale-presses degrade to opacity-dim, image fade-in disabled, expander animation disabled.'

breakpoints:
  xs: 480
  mobile: 768
  tablet: 1024
  desktop: 1440
  wide: 1920

shadows:
  ambient: '0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)'
  global-nav: '0 1px 3px rgba(0,0,0,0.10), 0 2px 2px rgba(0,0,0,0.06), 0 0 2px rgba(0,0,0,0.07)'
  frap-base: '0 0 6px rgba(0,0,0,0.24)'
  frap-ambient: '0 8px 12px rgba(0,0,0,0.14)'
  gift-card: '0 2px 8px rgba(0,0,0,0.10)'
  svc-card: 'drop-shadow(0 4px 1px rgba(0,0,0,0.11)) drop-shadow(0 0 2px rgba(0,0,0,0.24))'
  ring: '0 0 0 2px #00754A'

accessibility:
  contrast-text-on-bg: 11.5                   # text 0.87 on cream — AAA
  contrast-text-on-brand: 5.5                 # white on Green Accent — AA at body
  contrast-h1-on-cream: 6.0                   # Starbucks Green on cream — AA
  contrast-text-on-house: 13.0                # white on House Green — AAA
  contrast-soft-on-cream: 6.5                 # text-soft on cream — AA
  contrast-rewards-text: 8.5                  # rewards green on cream — AAA
  focus-ring: '2px solid #00754A — Green Accent on light, white ring on House Green dark surfaces'
  reduced-motion-honored: true
  touch-target-min: 44                        # pills ~32px tall need expanded padding on mobile
  keyboard-nav: 'Tab moves utility → wordmark → primary nav (Menu/Rewards/Gift Cards) → utility (Find a store/Sign in/Join now) → main content → Frap → footer.'

dark-mode: null   # Light-only across the marketing storefront. The Starbucks app respects system dark mode; the website does not. Feature bands are dark-green by content, not theme.
---

## 1. Visual Theme & Atmosphere

Starbucks' design system is a **warm, confident retail flagship** wearing the green of their storefront apron across every surface. The canvas alternates between a neutral-warm cream (`#f2f0eb`) and a ceramic off-white (`#edebe9`) — colors that reference actual store materials: the paper napkins, the café walls, the wood finishes — while the signature **Starbucks Green** (`#006241`) anchors the brand moment on hero bands, CTAs, and the Rewards experience. The greens come in four calibrated shades (Starbucks, Accent, House, Uplift), each mapped to a specific surface role, and gold (`#cba258`) appears only around Rewards-status ceremony — never as a general accent.

Typography carries most of the brand voice. The proprietary **SoDoSans** typeface (custom to Starbucks, licensed from House Industries) sits across nearly every surface with a tight `-0.16px` letter-spacing — it reads confident and friendly rather than fashion-magazine severe. What's unusual: the Rewards page switches to a warm serif (`"Lander Tall", "Iowan Old Style", Georgia`) for specific headline moments, subtly echoing the nostalgic feel of a coffeehouse chalkboard. And the Careers pages use a handwritten script (`"Kalam"`) for personal cup-name touches. Three typefaces, three contexts — the system is disciplined about when each appears.

The surfaces breathe through rounded geometry. Every button is a 50px full-pill. Cards take a 12px rounded-rectangle. The "Frap" floating CTA — a 56px circular order button in Green Accent (`#00754A`) — is the product's signature depth move: it floats bottom-right with a layered shadow stack (`0 0 6px rgba(0,0,0,0.24)` base + `0 8px 12px rgba(0,0,0,0.14)` ambient) and compresses via `scale(0.95)` on press. Elevations are otherwise restrained — card shadows stay at a whispered `0.14/0.24` alpha, global nav gets a quiet three-layer shadow stack. The whole system feels like clean café signage: legible, warm, and never shouting.

The color-block page rhythm is unmistakable: Cream hero → White content sections → Dark-green (`#1E3932`) feature band with white text → Cream utility zone → Dark-green footer with gold / white text — an espresso-dark bookend around the bright body. The visual cadence references the Starbucks store experience itself: warm wood, dark roast espresso, pale cream foam.

**Key Characteristics:**
- Four-tier green brand system (Starbucks / Accent / House / Uplift) each mapped to a distinct surface role — not a single "brand green"
- Gold reserved for Rewards-status moments only; never a general-purpose accent
- Warm-neutral canvas (`#f2f0eb` / `#edebe9`) instead of cold white — references café materials
- Custom proprietary typeface (SoDoSans) with tight `-0.16px` letter-spacing as the universal voice
- Context-specific type switches: serif (Lander Tall) for Rewards, script (Kalam) for Careers cup-names
- Full-pill buttons (`50px` radius) universal, `scale(0.95)` active press the signature micro-interaction
- Floating "Frap" circular CTA (`56px`, Green Accent fill, layered shadow stack) — the product's signature elevation element
- Gift-card surfaces designed as **photographed physical product** — every card is a distinct illustrated photograph rather than a generated graphic
- 12px card radius + whisper-soft shadows keep content cards flat-plus-hint-of-lift
- Rem-based spacing scale anchored at 1.6rem (~16px) = `--space-3`, stepping to 6.4rem (~64px)

## 2. Color Palette & Roles

### Primary
- **Starbucks Green** (`#006241`): The historic brand green. Used on h1 headings, primary section headers on the Rewards page, and as the main brand signal wherever a single dominant color is needed.
- **Green Accent** (`#00754A`): A slightly brighter, more luminous green. The primary filled-CTA color ("Explore our afternoon menu", "See the spring menu") and the fill of the floating Frap circular button.
- **House Green** (`#1E3932`): The deep near-black brand green. Footer surface, feature-band backgrounds, reward-status dark surfaces, and the headline "Free coffee is just the beginning" hero band on Rewards.
- **Green Uplift** (`#2b5148`): A secondary mid-dark green used sparingly on decorative accents and dark-gradient moments.
- **Green Light** (`#d4e9e2`): A pale mint wash used for form-valid-state tints and light green utility surfaces.

### Brand & Dark
- **House Green** (`#1E3932`): The dark feature-band ground and footer surface.
- **Black** (`#000000`): Reserved for the dark top-of-page CTA strip ("Join now") and high-contrast sign-in buttons. Never a body color.

### Accent
- **Gold** (`#cba258`): Reserved almost exclusively for Rewards-status ceremony — Gold-tier callouts, partnership badges (SkyMiles, Bonvoy), and premium-feeling accents. Never a general-purpose brand color.
- **Gold Light** (`#dfc49d`): Softer gold for background washes on gold-tier sections.
- **Gold Lightest** (`#faf6ee`): Cream-gold page-surface wash used under partnership sections on the Rewards page.

### Surface & Background
- **White** (`#ffffff`): Primary card and modal surface. Also card fill on gift-card tiles.
- **Neutral Cool** (`#f9f9f9`): Subtle cool-gray surface used on dropdown menus, form-card wraps, and quiet utility containers.
- **Neutral Warm** (`#f2f0eb`): The warm cream **primary page canvas** for Rewards utility zones and hero bands.
- **Ceramic** (`#edebe9`): A slightly warmer/darker cream for zone separators, soft page-section washes, and Rewards partnership band.

### Interactive
- **Link** (`#00754A`): Green-Accent inline link in body.
- **Link Hover** (`#006241`): darker Starbucks-Green on hover.
- **Selected** (`#00754A`): selected radio / checkbox / size-option ring.

### Neutral Scale
- **Text Black** (`rgba(0, 0, 0, 0.87)`): Primary heading and body text on light surfaces. Not pure black — an 87%-opacity black that reads warmer.
- **Text Black Soft** (`rgba(0, 0, 0, 0.58)`): Secondary/metadata text on light surfaces.
- **Text White** (`rgba(255, 255, 255, 1)`): Primary heading/body text on dark green surfaces.
- **Text White Soft** (`rgba(255, 255, 255, 0.70)`): Secondary text on dark-green surfaces — footer link descriptions, caption text.
- **Rewards Green** (`#33433d`): A dedicated muted slate-green used only on Rewards-page text blocks — a slightly "dustier" reading color that signals "reward surface" without using full Starbucks Green.

### Surface & Borders
- **Input Border** (`#d6dbde`): Default form input outline — slightly cool to balance the warm canvas.
- **Hairline** (`#e7e7e7`): Nutrition-table row separator.

### Shadow Colors
Whisper-soft, layered. The system never reaches for a single heavy drop shadow.
- **Card Layer 1** `rgba(0,0,0,0.14)` — 0.5px ring
- **Card Layer 2** `rgba(0,0,0,0.24)` — 1px direct
- **Frap Halo** `rgba(0,0,0,0.24)` — 6px base
- **Frap Ambient** `rgba(0,0,0,0.14)` — 8/12 directional
- **Nav 3-layer** `rgba(0,0,0,0.10)`, `0.06`, `0.07`

### Semantic
- **Red** (`#c82014`): Error and destructive state (form invalid, destructive actions).
- **Yellow** (`#fbbc05`): Warning state, legacy brand touch.
- **Green Light tint** at 33% opacity: form valid-field tint.
- **Red Tint** at 5% opacity: invalid-field tint.

## 3. Typography Rules

### Font Family

- **Primary**: `SoDoSans, "Helvetica Neue", Helvetica, Arial, sans-serif` — Starbucks' proprietary corporate typeface, used across nearly every surface
- **Loading Fallback**: `"Helvetica Neue", Helvetica, Arial, sans-serif` — what users see before SoDoSans loads
- **Rewards Serif**: `"Lander Tall", "Iowan Old Style", Georgia, serif` — used on specific Rewards-page headline moments for a warm editorial feel
- **Careers Script**: `"Kalam", "Comic Sans MS", cursive` — used exclusively for Careers-page "cup name" decorative touches, referencing the hand-written names on Starbucks cups
- **Open-source substitutes**: SoDoSans is proprietary (House Industries license). Reasonable replacements: **Inter** (similar humanist geometric proportions, wide weight range), **Manrope** (slightly rounder, similar confident feel), **Nunito Sans** (warmer, good for a "café" brand substitute). If substituting, verify the tight `-0.01em` / `-0.16px` tracking still reads well; some open-source fonts need `-0.005em` instead.

No OpenType stylistic sets explicitly activated at `:root`. The system relies on weight + tracking for character.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| display-10 | SoDoSans | 80 | 600 | 1.2 | -0.16px | Largest Rewards/hero display |
| jumbo-9 | SoDoSans | 58 | 600 | 1.2 | -0.16px | Secondary hero headings |
| hero-large-8 | SoDoSans | 45 | 600 | 1.2 | -0.16px | Landing section headlines |
| h1 | SoDoSans | 24 | 600 | 1.5 | -0.16px | Starbucks-Green primary heading |
| h2 | SoDoSans | 24 | 400 | 1.5 | -0.16px | Regular-weight section title in Text Black |
| h3 | SoDoSans | 22 | 600 | 1.27 | -0.16px | Minor heading |
| h4 | SoDoSans | 18 | 600 | 1.33 | -0.16px | Small heading |
| body-large | SoDoSans | 19 | 400 | 1.75 | -0.16px | Hero intro copy, feature-band body |
| body-md | SoDoSans | 16 | 400 | 1.5 | -0.01em | Default body — text-3 |
| body-strong | SoDoSans | 16 | 600 | 1.5 | -0.01em | Emphasized body, button label |
| body-sm | SoDoSans | 14 | 400 | 1.5 | -0.01em | Metadata, form labels |
| body-sm-strong | SoDoSans | 14 | 600 | 1.2 | -0.01em | Button label, table value |
| micro | SoDoSans | 13 | 400 | 1.5 | -0.01em | Active float-label, caption |
| button-md | SoDoSans | 16 | 600 | 1.2 | -0.01em | All pill-button labels |
| button-sm | SoDoSans | 14 | 600 | 1.2 | -0.01em | Compact pill labels |
| rewards-display | Lander Tall | 45 | 700 | 1.1 | -0.16px | Rewards editorial headline (serif switch) |
| cup-name | Kalam | 24 | 400 | 1.2 | 0 | Careers cup-name script |
| overline | SoDoSans | 12 | 700 | 1.2 | 0.325px | Uppercase form labels |

**Letter-spacing tokens:**
- `letterSpacingNormal`: `-0.01em` (default — tight, characteristic)
- `letterSpacingLoose`: `0.1em` (emphasized caps)
- `letterSpacingLooser`: `0.15em` (uppercase-style labels, extreme emphasis)

**Line-height tokens:**
- `lineHeightNormal`: `1.5` (body)
- `lineHeightCompact`: `1.2` (display/buttons)

### Principles

- **Tight negative tracking (`-0.01em`)** is applied almost universally — the entire product reads slightly compressed, which gives SoDoSans its confident presence without feeling squeezed.
- **Weight shifts carry hierarchy, not size shifts.** H1 and H2 share the same 24px/36px size; only weight (600 vs 400) and color (Starbucks-Green vs Text Black) separate them.
- **Size tokens use rem, anchored to `1rem = 10px`** on this site (via a `font-size: 62.5%` root trick). So `1.6rem` = 16px, `2.4rem` = 24px, etc. The scale is semantic (textSize-1 through textSize-10), not arbitrary pixel values.
- **Context-specific typeface swaps** — serif on Rewards, script on Careers — are deliberate and localized. Never mix them with the primary sans within the same surface.
- **Body text never goes pure black** — it sits at `rgba(0,0,0,0.87)` to match the warm-neutral canvas temperature.
- **Lander Tall reserved for Rewards editorial only.** Don't reach for serif elsewhere.
- **Kalam reserved for Careers cup-names only.** The script is an extreme typographic move; misuse breaks the entire system.

## 4. Component Stylings

### Buttons

**`button-primary-filled` — "Explore our afternoon menu"**
- Background `#00754A` (Green Accent), text `#ffffff`, border `1px solid #00754A`, radius 50, padding `7px 16px`, font 16/600 with `-0.01em` tracking. Active: `transform: scale(0.95)`. Transition: `all 0.2s ease`.

**`button-primary-outlined` — "Give them a try"**
- Background transparent, text `#00754A`, border `1px solid #00754A`. Same radius/padding/active/transition as filled.

**`button-black-filled` — "Join now"**
- Background `#000000`, text `#ffffff`, border `1px solid #000000`, radius 50, padding `7px 16px`, font 14/600. Used on top-of-page join strip and similar conversion moments.

**`button-dark-outlined` — "Sign in"**
- Background transparent, text `rgba(0,0,0,0.87)`, border `1px solid rgba(0,0,0,0.87)`, radius 50, padding `7px 16px`, font 14/600.

**`button-inverted-on-green` — "See the spring menu"**
- Background `#ffffff`, text `#00754A`, border `1px solid #ffffff`. White button with green text, used over House-Green dark bands.

**`button-outlined-on-dark` — "Learn more"**
- Background transparent, text `#ffffff`, border `1px solid #ffffff`. Used on dark-green feature bands for secondary action paired with a white-filled CTA.

**`frap` — Floating Circular Order Button**
- Background `#00754A`, icon `#ffffff`, size `5.6rem / 56px` (standard) or `4rem / 40px` (mini), radius 50%, fixed bottom-right with `-0.8rem` touch offset.
- Shadow stack: base `0 0 6px rgba(0,0,0,0.24)` + ambient `0 8px 12px rgba(0,0,0,0.14)`
- Active: ambient shadow fades to `0 8px 12px rgba(0,0,0,0)`
- This is the product's signature elevation element — it floats over every scrolled surface.

**`feedback-tab` — "Provide feedback"**
- Background `#00754A`, text `#ffffff`, radius `12px 12px 0 0` (top-rounded only), padding `8px 16px`, font 14/400. Positioned fixed bottom-right inside, attached to viewport edge.

### Cards & Containers

**`card-content` — Default Content Card**
- Background `#ffffff`, radius 12, shadow `0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)`. Used for feature cards, menu-item tiles, reward-status panels.

**`card-gift` — Gift Card Tile**
- Background: illustrated photography fills the card (no solid bg)
- Radius: ~12px, slightly tighter on corners
- Shadow: lighter than default card — these are treated like physical cards laid on the canvas
- Labeled by category above the card grid (Spring, Thank You, Birthday, Celebration, Mother's Day, Appreciation, Encouragement, Milestones, Anytime)

**`card-rewards-status` — Rewards Status Panel**
- Three-column grid: Bronze / Gold / Silver-ish — each a House Green panel with:
  - Colored gradient/color header ring
  - Numbered "Level" badge
  - Status title in SoDoSans 24/600
  - Stars / benefits list in white/translucent-white text
  - Bottom "As you earn more stars…" progression caption

**`card-partnership` — Rewards partnership card**
- Background `#faf6ee` (Gold Lightest) warm-cream surface
- Content: partner logos centered with descriptive text below
- Radius and shadow follow default card spec

**`modal`** — padding `24px`, top padding `88px` (leaves room for close button), radius 12 (inherits from card spec).

### Inputs & Forms

**`input-floating-label`**
- Label floats above the input border when focused/filled
- Desktop label: `1.9rem` default, animates to `1.4rem` when active
- Mobile label: `1.6rem` default, animates to `1.3rem` active
- Active label translate: `-12px` with `-50%` Y translation
- Field padding: `12px`. Form horizontal padding: `1.6rem`
- Validation: valid → `rgba(green-light, 0.33)` tint; invalid → `rgba(red, 0.05)` tint
- Transition: `0.3s cubic-bezier(0.32, 2.32, 0.61, 0.27)` on checked input — a slightly "springy" 2.32 overshoot curve

**`option-icon`** — checkbox/radio with `3px` inner padding using the springy bezier above.

### Navigation

**`global-nav`** — fixed top bar with progressive heights: `64px` xs → `72px` mobile → `83px` tablet → `99px` desktop. Triple-layer shadow `0 1px 3px rgba(0,0,0,0.10), 0 2px 2px rgba(0,0,0,0.06), 0 0 2px rgba(0,0,0,0.07)`. Left: Starbucks wordmark (offset by `99px` md / `131px` lg). Primary links: Menu · Rewards · Gift Cards. Right: Find a store + Sign in (outlined) + Join now (black filled).

**`sub-nav`** — second bar (e.g., Rewards internal) at `53px` global / `48px` internal. Horizontal tab group beneath the global nav.

**Mobile Nav** — collapses to a hamburger drawer below tablet. Frap floating button persists at bottom-right regardless of nav state.

### PDP Components

**`size-option-selector`** — horizontal row of 4 cup-icon buttons (Tall / Grande / Venti / Trenta). Each: cup silhouette icon top, size name 16/700 in Starbucks-Green, fluid-ounce caption 13/400 in Text Black Soft. Active: green circular ring `2px solid #00754A` around selected cup. Inactive: no ring, same typography. Full-width row, equal spacing. Container radius 12 or flat; individual icons 50% circular.

**`add-in-select`** — outlined rectangle for milk/add-in selection. Background `#ffffff`, border `1px solid #d6dbde`, radius 4. Floating label above top border ("Add-ins" / "Milk") in 13/700 Text Black uppercase, `0.325px` letter-spacing. Value centered in 16/400 Text Black. Chevron-down right side. Focus border shifts to `#00754A`.

**`numeric-stepper`** — embedded `−` count `+` inline right of the label. Buttons circular `32×32` with `1px solid #d6dbde` border, neutral gray icon. Count number 16/700 Text Black centered.

**`customize-button`** — bg `#ffffff`, text `#00754A`, border `1.5px solid #00754A`, radius 50, padding `14px 40px`. Label: "Customize" with a gold sparkle ✨ icon inset left. Used to enter drink-customization flow after size/milk selection.

**`add-to-order-button`** — bg `#00754A`, text `#ffffff`, radius 50, padding `14px 32px`. Pinned top-right of product card. Same `scale(0.95)` active behavior.

**`rewards-cost-pill`** — "200★ item". Transparent bg, gold border + gold text, radius 50, padding `4px 12px`. Font 13/700 with `0.5px` letter-spacing. Used only on Rewards-redeemable items.

**`product-description-band`** — full-width House Green band. Stack: Rewards Cost Pill (gold) if applicable → product description body 16/400/1.5 white → nutritional summary 14/700 ("140 calories, 25g sugar, 2.5g fat") → outlined-white-on-green pill "Full nutrition & ingredients list". 32px vertical padding.

**`nutrition-table`** — two-column on Nutrition page. Left: "Ingredients" 24/400 + list or placeholder. Right: "Nutrition" + label/value rows separated by `1px solid #e7e7e7` hairline. Footnote 13/400 Text Black Soft at bottom.

### Image Treatment

- **Hero photography**: Product photos (beverages in clear glass with colored backgrounds — coral, sage, warm amber) occupy ~40vw of a split-hero; text occupies the other 60vw.
- **Gift card illustrations**: Each card is a distinct illustrated photograph (painted-feel, hand-drawn-looking, warm color palette). Never generic generated graphics.
- **Rewards ceremony imagery**: Photographs of Starbucks Rewards App screens held in-hand, angled compositions.
- **Menu thumbnails**: Square or 4:3 product photography with clean white/cream backdrops, slight soft drop-shadow.
- **Image fade-in**: `opacity 0.3s ease-in` on image load.

### Cookie Consent Module

Dark-green modal card at top of page with "Agree" (green-filled, `rgb(0,130,72)` variant) and "Manage preferences" (outlined). Appears on first visit; dismissible.

## 5. Layout Principles

### Spacing System

Rem-based semantic scale (anchored `1rem = 10px`):

| Token | Rem | Pixels | Typical Use |
|-------|-----|--------|-------------|
| --space-1 | 0.4rem | 4px | Tightest inline padding |
| --space-2 | 0.8rem | 8px | Small gap, button vertical padding |
| --space-3 | 1.6rem | 16px | Default — card padding, outer gutter xs |
| --space-4 | 2.4rem | 24px | Section inner spacing, outer gutter md |
| --space-5 | 3.2rem | 32px | Major between-section spacing |
| --space-6 | 4.0rem | 40px | Large gaps, outer gutter lg, header crate |
| --space-7 | 4.8rem | 48px | Section-to-section spacing |
| --space-8 | 5.6rem | 56px | Very large breathing — Frap height |
| --space-9 | 6.4rem | 64px | Widest section padding |

**Gutter tokens:**
- `--outerGutter: 1.6rem` (16px, default / mobile)
- `--outerGutterMedium: 2.4rem` (24px, tablet)
- `--outerGutterLarge: 4.0rem` (40px, desktop)

**Universal rhythm constant**: `1.6rem` (16px) appears across every page as the default outer gutter, card padding baseline, and text-size-3 body — the system's most frequent spacing unit.

### Grid & Container

- Column width scale: `--columnWidthSmall: 343px` / `Medium: 500px` / `Large: 720px` / `XLarge: 1440px`
- Gift-card grid: 3-5-up responsive grid of `~343px` tiles
- Rewards status section: 3-up dark-green panels at `lg+` breakpoints
- Hero: asymmetric split 40% (image) / 60% (content)

### Whitespace Philosophy

Whitespace carries the feeling of "plenty of space in the café." Section padding leans generous (40–64px). Content blocks are separated by whitespace rather than dividers. The cream canvas (`#f2f0eb`) is itself a visual breath between white cards and green feature bands.

### Section Cadence

The page rhythm: Cream hero → White content sections → House-Green feature band with white text → Cream utility zone → House-Green footer with gold/white text. An espresso-dark bookend around the bright body.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Inset table corners |
| SM | 4px | Add-in rectangle, tags |
| MD | 8px | Compact secondary surface |
| Card | 12px | Cards, modals, menu-item tiles |
| Card-top | 12px 12px 0 0 | Full-width feedback tab (compound) |
| Pill | 50px | All buttons — universal full-pill |
| Full | 9999 (50%) | Circular icons, Frap floating button, avatar thumbnails |
| SVC | 3.3333%/5.298% | Specialty elliptical for Starbucks-Visa-Card mockups |

The 50px pill is non-negotiable for buttons — square corners would break the system. The 12px card radius gives content cards a soft-but-not-bubbly feel. The Frap is the only true 50% circle in the system.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body bands, footer, all editorial bands |
| 1 — Card | `0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)` | Default content cards — whisper-soft dual-shadow |
| 2 — Global Nav | `0 1px 3px rgba(0,0,0,0.10), 0 2px 2px rgba(0,0,0,0.06), 0 0 2px rgba(0,0,0,0.07)` | Triple-layer soft lift on the fixed top bar |
| 3 — Frap Base | `0 0 6px rgba(0,0,0,0.24)` | Base halo around the floating circular CTA |
| 4 — Frap Ambient | `0 8px 12px rgba(0,0,0,0.14)` | Stacked directional ambient — floats the Frap forward |
| 5 — Gift Card | Light drop shadow around illustrated photograph | Physical-card feel for gift tiles |
| 6 — SVC | `drop-shadow(0 4px 1px rgba(0,0,0,0.11)) drop-shadow(0 0 2px rgba(0,0,0,0.24))` | Stacked SVG drop shadows for Starbucks-Card visuals |
| 7 — Modal scrim | `rgba(0,0,0,0.5)` | Modal backdrop |

### Shadow Philosophy

Whisper-soft, layered over solid — the system never reaches for a single heavy drop shadow. Instead, it stacks 2–3 low-alpha shadows with different offsets to simulate real-world ambient + direct lighting. The Frap button is the most elevated element on any page. Decorative depth: no gradient system; surfaces are solid color-block. Color-block banding carries perceived depth (dark-green bands read as "recessed feature zones" between cream/white body sections). SVG filter shadows on Starbucks-Card visuals add a slight 3D physicality without a box-shadow.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus, transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu reveal
- **Checked / springy**: `cubic-bezier(0.32, 2.32, 0.61, 0.27)` — checkbox/radio overshoot
- **Expander**: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — measured ease-out for FAQ accordions

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Color transitions, focus ring fade-in |
| Standard | 200ms | Pill press scale, all hover states |
| Slow | 300ms | Image fade-in, expander, drawer slide |

### Per-Component Recipes

- **Pill press**: `transform: scale(0.95)` over 200ms `cubic-bezier(0.4, 0, 0.2, 1)` — universal across every button.
- **Frap press**: ambient shadow fades to `0 8px 12px rgba(0,0,0,0)` while base halo holds + scale(0.95). The ambient-shadow collapse simulates the button settling onto the surface.
- **Card hover**: shadow may slightly intensify; Starbucks does not lift cards.
- **Image fade-in**: `opacity 0.3s ease-in` on lazy-loaded images.
- **Expander / Accordion**: 300ms `cubic-bezier(0.25, 0.46, 0.45, 0.94)` on FAQ rows.
- **Float-label input**: label translates `-12px` and shrinks from 1.9rem to 1.4rem on focus, 200ms.
- **Checkbox check**: springy 2.32 overshoot bezier — the only "playful" motion in the system.
- **Modal enter**: scrim fades over 200ms; dialog translates from `translateY(8px)` opacity 0 to 0/1 over 240ms emphasized.
- **Frap mount**: appears with a 200ms fade-in + 4px translate-up on first scroll past the fold.

### Page Transitions

Page-to-page navigation uses no transition — links fire a hard navigation. Starbucks prioritises perceived speed.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. The signature `scale(0.95)` press collapses to an instant opacity dim. Image fade-in disables (images appear immediately). Float-label translate becomes instant. Expander animation suppresses. Checkbox spring becomes a snap. The Frap's shadow-fade press still fires (it's a state, not a motion).

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| `rgba(0,0,0,0.87)` text on `#f2f0eb` cream | 11.5 | AAA |
| `#ffffff` on `#00754A` Green Accent CTA | 5.5 | AA at body |
| `#006241` Starbucks Green H1 on cream | 6.0 | AA |
| `#ffffff` on `#1E3932` House Green | 13.0 | AAA |
| `rgba(0,0,0,0.58)` Text Soft on cream | 6.5 | AA |
| `#33433d` Rewards Green on cream | 8.5 | AAA |
| `rgba(255,255,255,0.70)` Text White Soft on House Green | 9.5 | AAA |
| `#cba258` Gold on `#ffffff` | 2.4 | AA large only — used at ≥18px |

The gold/white pair sits below AA at body sizes. Starbucks compensates by using gold only on Rewards Cost Pills (4px 12px padding, 13/700 weight) where the text is brief and visually contrasted against the dark-green band.

### Focus Indicators

Focus ring is **2px solid `#00754A`** (Green Accent) on light surfaces. On House-Green dark bands, focus flips to **2px solid `#ffffff`**. Buttons, inputs, links, size-options, and chips all gain the ring on `:focus-visible`.

### ARIA Patterns

- **Frap**: `role="button"` with `aria-label="Open mobile order"`. The floating-button position means it must be tab-reachable and keyboard-activatable.
- **Size selector**: `role="radiogroup"` with each cup-icon a `radio`; arrow keys cycle, Space selects.
- **Add-in select**: native `<select>` or ARIA combobox with `aria-expanded` + `aria-controls`.
- **Numeric stepper**: `role="spinbutton"` with `aria-valuenow` / `aria-valuemin` / `aria-valuemax`.
- **Modal**: `role="dialog"` `aria-modal="true"` with focus trap; Esc closes.
- **Cookie consent**: `role="dialog"` with focus trap on first visit.
- **Rewards Cost Pill**: `aria-label="Costs 200 stars to redeem"`.
- **Float-label input**: label is the actual `<label>` element; floating animation is purely visual.

### Keyboard Navigation

Tab order: Skip-to-main → utility row → wordmark → primary nav (Menu/Rewards/Gift Cards) → utility cluster (Find a store/Sign in/Join now) → main content (top to bottom) → Frap → footer. The Frap is its own tab stop and remains reachable on every scroll position.

- **Inside size selector**: arrow keys cycle, Space selects, Enter confirms.
- **Inside accordion**: Tab moves between rows, Space/Enter expands.

### Screen Reader Hints

Verbose `aria-label` on icon-only buttons (Frap, close X, paddle). The Frap announces "Open mobile order, 1 item in bag" when items are present. The Rewards Cost Pill includes star count in the aria-label so screen readers communicate the redemption cost.

### Reduced Motion

All transitions degrade gracefully. The signature `scale(0.95)` press becomes instant opacity dim. Image fade-in disables. Float-label translate becomes instant. Expander animation suppresses.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| xs | <480px | Global nav 64px; hamburger menu; single-column layouts; pill buttons may go full-width |
| Mobile | 480–767px | Global nav 72px; gift-card grid 2-up; card padding tightens; hero stacks |
| Tablet | 768–1023px | Global nav 83px; gift-card grid 3-up; hero split appears |
| Desktop | 1024–1439px | Global nav 99px; gift-card grid 4-up; full asymmetric hero 40/60 |
| XLarge | 1440px+ | Content caps at `--columnWidthXLarge`; gift-card grid 5-up; extra cream margin |

### Touch Targets

- Pill buttons at `7px 16px` padding measure ~32px tall — below 44px WCAG AAA minimum for touch-only surfaces. On mobile, button padding may be visually expanded to meet the minimum.
- Frap floating circular button at `56px` is well above minimum.
- Frap uses `--frapTouchOffset: calc(-1 * .8rem)` to extend tap area 8px beyond visual edge.
- Form float-label inputs grow their label font size on mobile (1.6rem base vs 1.9rem desktop) — easier to tap and read at arm's-length.

### Collapsing Strategy

- **Global nav height scales progressively**: 64 → 72 → 83 → 99px across breakpoints, not a single value.
- **Hero split collapses**: 40/60 asymmetric split → stacked (image top, content below) at mobile.
- **Gift-card grid**: 5-up → 4-up → 3-up → 2-up → 1-up across breakpoints with adjusted card widths.
- **Feature bands**: stay full-width but text + imagery stack vertically on mobile.
- **Outer gutter scales**: 16px → 24px → 40px as viewport grows.
- **Rewards 3-column status panels**: stack to single column on mobile.
- **Frap remains anchored bottom-right** at every breakpoint.

### Image Behavior

- Hero product photography crops tighter vertically on mobile; content becomes the visual anchor
- Gift-card illustrations preserve aspect ratio; card grid reflows
- `opacity 0.3s ease-in` fade-in transition on image load (prevents jarring pop-in)
- Rewards app-in-hand photography scales proportionally; never stretches

### Container Queries

The PDP add-in selector uses container queries: when its column narrows below ~280px, multi-column add-in groups collapse to single column.

## 11. Content & Voice

### Tone

Warm, friendly, retail-forward. Starbucks' voice is the friendly barista who knows your order — confident enough to recommend a new drink, never pushy, always personable. Headlines lead with invitation ("Free coffee is just the beginning", "Find your perfect drink") rather than discount language. The brand consistently positions Starbucks as **the third place** — between home and work — and the copy reflects that warmth.

### Microcopy Patterns

- **Button verbs**: "Order", "Sign up", "Join now", "Continue", "Add to order", "Customize" — direct retail verbs.
- **Error message recipe**: warm + remedial — "We couldn't process this card. Try a different one or sign in to use a saved card."
- **Success confirmations**: personal — "Your order's ready" / "Star redeemed — enjoy!"
- **Field labels**: short and friendly — "Email", "Card number", "Add a note for the barista".
- **Rewards copy**: ceremonial — "You've earned it", "Free coffee is just the beginning", "Stars never expire".

### Empty States

- **Empty cart**: "Your bag is empty. Browse the menu or pick up where you left off."
- **No favorites**: "Tap the heart on any drink to save your go-tos."
- **No rewards available**: "Earn stars on every purchase to unlock rewards."

### CTA Verb Conventions

- **Primary**: "Order now", "Sign up for free", "Join now", "Continue", "Add to order"
- **Secondary**: "Cancel", "Save for later", "Learn more", "See the menu"
- **Tertiary text**: "Find a store", "Read FAQ", "View nutrition"

The verb library is small and retail-direct. Starbucks does not use "Get started" SaaS verbs — the brand is a place, not a product.

## 12. Dark Mode & Theming

**Light-only across the marketing storefront.** Starbucks' web ships only in the warm cream/white theme. Feature bands and the footer are dark House Green by content (the espresso-dark bookend in the page rhythm), not by theme — they stay dark-green regardless of system preference.

The Starbucks mobile app respects system dark mode independently with its own token swap (deep-house-green canvas, gold accents, white text), but the web does not offer a dark variant. There is no `prefers-color-scheme: dark` query and no `data-theme="dark"` token swap.

If implementing a Starbucks-flavored dark variant for a derived system, swap canvas to `#1E3932` (House Green), card surface to `#2b5148` (Uplift), text to `#ffffff` and `rgba(255,255,255,0.70)`, brand-accent CTA stays at `#00754A` (Green Accent stays vivid on dark), and gold (`#cba258`) becomes the dominant accent.

## 13. Lineage & Influences

Starbucks' web visual lineage is a fusion of three traditions:

- **Café signage and packaging** — the warm cream paper, the dark roast, the gold ceremony around premium products. The web translates the in-store palette directly.
- **Friendly retail commerce** — the full-pill button, the photographic card, the floating order CTA. References Apple Store's product photography and Airbnb's friendly retail tone.
- **Print menu and chalkboard hand-lettering** — the Lander Tall serif on Rewards and the Kalam script on Careers cup-names both reference the hand-written feel of an actual coffeehouse.

What it inherits:
- Apple Store's photographic product cards and 12px radius card discipline
- Airbnb's full-pill button and friendly-retail tone
- The Wall Street Journal's serif-on-cream editorial tradition (Lander Tall on Rewards)

What it borrows from contemporaries:
- Notion's warm-cream canvas instinct (cream-not-cold-white)
- Stripe's whisper-soft layered shadow discipline
- Material Design's floating action button (the Frap)

What it rejects:
- Cool-white SaaS canvas (Starbucks goes warm-cream)
- Gradient washes and atmospheric color (the system is solid color-block)
- Heavy single-shadow cards (Starbucks layers 2–3 low-alpha shadows)
- "Get started" SaaS verbs (the brand is a place, not a product)

**Influences:**
- House Industries — https://houseind.com — Licensed SoDoSans, the proprietary corporate typeface
- Apple Store — https://apple.com — Photographic product cards and 12px radius discipline
- Material Design — https://m3.material.io — Floating Action Button (the Frap)
- Real-world Starbucks store interiors — the wood, the cream paper, the dark roast — the entire palette is a direct translation

## 14. Do's and Don'ts

### Do
- Use Neutral Warm (`#f2f0eb`) or Ceramic (`#edebe9`) as page canvas instead of pure white — the warm cream is the signature
- Map the green tiers to their intended surface role — Starbucks Green for headings, Green Accent for CTAs, House Green for deep bands, Uplift for decorative
- Keep tracking tight at `-0.01em` / `-0.16px` on SoDoSans across the whole system
- Use 50px full-pill radius on every button without exception
- Apply `transform: scale(0.95)` as the universal button active state
- Reserve Gold for Rewards-status ceremony moments only
- Use SoDoSans for nearly everything; switch to Lander Tall serif only for Rewards editorial headlines; reserve Kalam script for Careers "cup name" moments
- Layer 2–3 low-alpha shadows instead of one heavier drop shadow for elevation
- Use the Frap circular CTA as the persistent floating order entry on every shopping surface
- Let the cream canvas breathe between content cards — use whitespace, not dividers

### Don't
- Don't use pure white as the page canvas — the warm cream temperature is load-bearing
- Don't pick "one brand green" — the four-green system is intentional; using only `#006241` everywhere flattens the brand
- Don't use Gold as a general-purpose accent — it's a Rewards signal only
- Don't square the corners on buttons — the 50px pill is universal
- Don't introduce gradient fills — the system is color-block throughout
- Don't weight-contrast h1 and h2 by size — the hierarchy comes from weight + color (600 Starbucks-Green vs 400 Text Black)
- Don't use pure black for body text — `rgba(0,0,0,0.87)` matches the warm canvas
- Don't skip the `scale(0.95)` active feedback on buttons — it's a signature micro-interaction
- Don't stack single heavy shadows; always layer 2–3 low-alpha ones
- Don't introduce serifs or scripts into the main shopping flow — they belong to Rewards and Careers contexts respectively

## 15. Agent Prompt Guide

### Quick Color Reference

- Primary CTA: Green Accent `#00754A`
- Primary CTA text: White `#ffffff`
- Brand heading: Starbucks Green `#006241`
- Feature band / footer: House Green `#1E3932`
- Page canvas: Neutral Warm `#f2f0eb`
- Card canvas: White `#ffffff`
- Heading text on light: Text Black `rgba(0,0,0,0.87)`
- Body text on light: Text Black Soft `rgba(0,0,0,0.58)`
- Body text on dark-green: Text White Soft `rgba(255,255,255,0.70)`
- Rewards accent: Gold `#cba258`
- Rewards reading text: Rewards Green `#33433d`
- Destructive: Red `#c82014`

### Example Component Prompts

1. "Create a primary Starbucks CTA pill — Green Accent (`#00754A`) bg, white text 'Explore our afternoon menu', SoDoSans 16/600 with `-0.01em` tracking, 50px radius, `7px 16px` padding. Apply `transform: scale(0.95)` as the active state with `0.2s ease` transition."

2. "Design a content card — White (`#ffffff`) bg, 12px radius, layered shadow `0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)`. Pad contents 16–24px. Place on Neutral Warm (`#f2f0eb`) canvas with 16px gap to siblings."

3. "Build the Frap floating circular order button — 56px diameter, Green Accent (`#00754A`) fill, white shopping-bag icon centered. Layered shadow `0 0 6px rgba(0,0,0,0.24)` + `0 8px 12px rgba(0,0,0,0.14)`. Fixed bottom-right with `-0.8rem` touch offset. Active: ambient shadow collapses to `0 8px 12px rgba(0,0,0,0)` with `scale(0.95)`."

4. "Create a dark-green feature band — full-width section with House Green (`#1E3932`) bg. Left column: white SoDoSans h2 24/600, body in Text White Soft (`rgba(255,255,255,0.70)`), CTA row with two pills (white-filled with green text + outlined-on-dark white border). Right column: product photography. Split 40/60 desktop, stacked under 768px."

5. "Design a Rewards status card — House Green (`#1E3932`) panel with 12px radius, colored gradient top stripe (Bronze/Silver/Gold). Title in SoDoSans 24/600 white. Benefits as white bullets with `rgba(255,255,255,0.70)` captions. Bottom progression text in Text White Soft. Stack 3 panels at lg+, single column on mobile."

6. "Build a Starbucks PDP header — House Green band with breadcrumb 'Menu / Refreshers / Pink Energy Drink' in 14/400 white above the product title in SoDoSans 32/700 white. Product photograph centered. Below: 4-up size selector — each cup-icon button has cup silhouette top, size name 16/700 white, fluid-ounce 13/400 Text White Soft. Selected wraps icon in `2px solid #00754A` ring."

7. "Create a Starbucks customize flow — under size selector, 3 outlined-rectangle add-in rows (white bg, `1px solid #d6dbde`, 4px radius). Floating label above top border ('Add-ins', 'Milk') in 13/700 Text Black uppercase. Value centered. Chevron-down right. For scoop row, embed numeric stepper (`−` `1` `+` with circular `32px` outlined buttons). Below: outlined-green 'Customize' pill with gold sparkle icon (50px radius, 14×40px padding) paired with Green Accent 'Add to Order' pill."

### Iteration Guide

1. Focus on ONE component at a time. Pull its tokens from the frontmatter and verify every property resolves.
2. Reference specific color names and hex codes ("Green Accent `#00754A`", "House Green `#1E3932`") — do not paraphrase.
3. Use natural language descriptions ("warm cream canvas", "four-tier green system") alongside exact values.
4. Preserve the 50px pill + `scale(0.95)` active state universally.
5. Check that greens are mapped to their correct role (Green Accent for CTA, Starbucks Green for heading, House Green for band).
6. Don't introduce gradients — the system is color-block.
7. Keep SoDoSans tracking at `-0.01em` / `-0.16px` across the board.
8. Reserve Gold for Rewards moments; reserve Lander Tall for Rewards editorial; reserve Kalam for Careers cup-names — all three are scoped contexts, not universal options.
