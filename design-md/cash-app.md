---
name: Cash App
tagline: Electric `#00d54b` green on near-black, Cash Sans monospace-flavoured geometry, and p2p-money youth aesthetic.
updated_at: 2026-05-04T14:57:35+12:00
published_at: 2026-05-04T14:57:35+12:00
author: webdesignhot
source_url: https://cash.app
spec: design.md/v1.5
quality: curated
featured: false
categories: [fintech]
tags: [dark, vibrant, sans, mono, neon, youth, p2p]
preview_swatch: ['#00d54b', '#0e0e0e', '#ffffff']
related: [venmo, paypal, coinbase]
description: 'Cash App''s site is a near-black canvas (`#0e0e0e`) lit by an unmistakable electric green (`#00d54b`) — the brand''s signature voltage borrowed from CRT terminals and bodega ATMs. Where every other consumer-finance brand defaults to white-on-light, Cash App inverts: dark-by-default, with neon-bright type and chunky monospace numerals stamped onto a black ground. Cash Sans, the brand''s custom sans by Mark Caneso, runs at modest weights with a slight monospace flavour — letterforms that feel half-financial-terminal, half-pop-music-poster. The visual posture is youth-financial: a peer-to-peer money brand that talks to the under-30 audience the same way music streaming does — confident, loud, and indifferent to corporate-finance precedent. Pages alternate full-bleed black sections with rare lifted-grey bands and unexpected colour-card moments (Cash for Business goes blue, Bitcoin goes orange, Investing goes purple). The dollar sign is the brand''s most-shown glyph; it appears at hero scale, in `#00d54b` neon, against black, like a sign on a vintage register.'

colors:
  bg: '#0e0e0e'                  # near-black canvas — the brand's default ground
  bg-pure: '#000000'              # pure black for full-bleed extreme contrast
  bg-elevated: '#1a1a1a'         # +1 step on the dark canvas
  bg-card: '#1f1f1f'             # card surface on dark
  bg-elevated-2: '#2a2a2a'       # +2 step / hover
  surface-light-rare: '#ffffff'   # rare white inversion (FAQ, legal sub-pages)
  surface-light-cool: '#f5f5f5'   # cool-grey on the rare light page
  text: '#ffffff'                 # primary white ink on dark
  text-body: '#e8e8e8'            # near-white running body
  text-muted: '#a0a0a0'            # captions, metadata
  text-subtle: '#6c6c6c'           # disabled, lowest hierarchy
  text-on-light: '#0e0e0e'         # ink on rare light pages
  text-body-on-light: '#1f1f1f'    # body on light
  brand: '#00d54b'                 # Cash Green — signature electric voltage
  brand-bright: '#21fb6f'           # brighter green used on hover/active glow
  brand-deep: '#00a83a'             # pressed state, deeper green
  brand-soft: 'rgba(0, 213, 75, 0.12)' # green at 12% — informational tint
  on-brand: '#0e0e0e'              # near-black text on green CTA (not white — green doesn't have enough contrast with white)
  accent-blue: '#00cfff'           # Cash for Business / accent blue
  accent-orange: '#ff7800'         # Bitcoin section accent
  accent-purple: '#9b59ff'          # Investing section accent
  accent-pink: '#ff4d8b'            # Boosts / promo moments
  link: '#00d54b'                   # default link in brand green
  link-hover: '#21fb6f'             # bright-green hover
  border: 'rgba(255, 255, 255, 0.10)' # default 1px hairline on dark
  border-strong: 'rgba(255, 255, 255, 0.20)' # input border, focused divider
  border-soft: 'rgba(255, 255, 255, 0.06)' # softest divider
  border-on-light: '#d8d8d8'       # hairline on the rare light page
  border-on-green: 'rgba(0, 0, 0, 0.20)' # hairline on green CTA-fill
  semantic-success: '#00d54b'       # success matches brand — green is success
  semantic-warning: '#ffb800'       # caution amber on dark
  semantic-danger: '#ff4d4d'        # error red on dark
  semantic-info: '#00cfff'           # accent blue
  focus-ring: 'rgba(0, 213, 75, 0.50)' # 3px brand-green focus ring
  shadow-glow: 'rgba(0, 213, 75, 0.45)' # rare green-glow on featured CTAs
  shadow-ambient: 'rgba(0, 0, 0, 0.4)' # deep ambient on dark
  shadow-soft: 'rgba(0, 0, 0, 0.5)'
  shadow-hard: 'rgba(0, 0, 0, 0.65)'

typography:
  display:
    family: '"Cash Sans", "Cash Market Sans", -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700, 900]
    opentype-features: ['ss01', 'ss02', 'kern']
  body:
    family: '"Cash Sans", -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"Cash Sans Mono", "JetBrains Mono", "IBM Plex Mono", monospace'
    weights: [400, 500, 700]
    opentype-features: ['tnum', 'zero']
  scale:
    display-mega:    { size: 144, weight: 700, lineHeight: 0.92, tracking: '-4px',   family: display, opentype: 'kern, ss01' }
    display-hero:    { size: 96,  weight: 700, lineHeight: 0.95, tracking: '-2.5px', family: display, opentype: 'kern' }
    display-xl:      { size: 72,  weight: 700, lineHeight: 1.00, tracking: '-1.8px', family: display }
    display-lg:      { size: 56,  weight: 700, lineHeight: 1.05, tracking: '-1.2px', family: display }
    display-md:      { size: 40,  weight: 700, lineHeight: 1.10, tracking: '-0.6px', family: display }
    display-sm:      { size: 28,  weight: 700, lineHeight: 1.20, tracking: '-0.3px', family: display }
    title-lg:        { size: 24,  weight: 600, lineHeight: 1.25, tracking: '0',      family: body }
    title-md:        { size: 20,  weight: 600, lineHeight: 1.30, tracking: '0',      family: body }
    title-sm:        { size: 16,  weight: 600, lineHeight: 1.35, tracking: '0',      family: body }
    body-lg:         { size: 18,  weight: 400, lineHeight: 1.55, tracking: '0',      family: body }
    body-md:         { size: 16,  weight: 400, lineHeight: 1.50, tracking: '0',      family: body }
    body-strong:     { size: 16,  weight: 700, lineHeight: 1.50, tracking: '0',      family: body }
    body-sm:         { size: 14,  weight: 400, lineHeight: 1.50, tracking: '0',      family: body }
    caption:         { size: 13,  weight: 400, lineHeight: 1.45, tracking: '0',      family: body }
    legal:           { size: 12,  weight: 400, lineHeight: 1.50, tracking: '0',      family: body }
    eyebrow:         { size: 12,  weight: 700, lineHeight: 1.20, tracking: '2px',    family: mono }
    button:          { size: 16,  weight: 700, lineHeight: 1.20, tracking: '0',      family: body }
    nav-link:        { size: 14,  weight: 500, lineHeight: 1.40, tracking: '0',      family: body }
    money-display:   { size: 96,  weight: 700, lineHeight: 1.00, tracking: '-1.6px', family: mono, opentype: 'tnum, zero' }
    money-mid:       { size: 56,  weight: 700, lineHeight: 1.05, tracking: '-1px',   family: mono, opentype: 'tnum, zero' }
    money-inline:    { size: 16,  weight: 500, lineHeight: 1.40, tracking: '0',      family: mono, opentype: 'tnum, zero' }
    code-micro:      { size: 12,  weight: 400, lineHeight: 1.40, tracking: '0',      family: mono }

radius:
  none: 0
  micro: 2
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
  xxl: 32
  pill: 9999

spacing:
  base: 4
  scale: { xxs: 4, xs: 8, sm: 12, base: 16, md: 20, lg: 24, xl: 32, xxl: 48, section: 96, hero: 128 }

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64

components:
  button-primary:         { bg: brand, text: on-brand, padding: '14px 28px', height: 48, radius: pill, font: button }
  button-primary-hero:    { bg: brand, text: on-brand, padding: '20px 40px', height: 64, radius: pill, font: button }
  button-secondary:       { bg: bg-elevated, text: text, border: '1px solid border-strong', padding: '13px 27px', height: 48, radius: pill, font: button }
  button-tertiary:        { bg: transparent, text: brand, font: button }
  button-on-green:        { bg: bg, text: brand, padding: '14px 28px', height: 48, radius: pill, font: button }
  hero-band-dark:         { bg: bg, text: text, padding: hero, font: display-hero }
  hero-band-pure:         { bg: bg-pure, text: text, padding: hero, font: display-mega }
  hero-band-green:        { bg: brand, text: on-brand, padding: hero, font: display-hero }
  hero-band-blue:         { bg: accent-blue, text: on-brand, padding: hero, font: display-hero }
  hero-band-orange:       { bg: accent-orange, text: text, padding: hero, font: display-hero }
  card-feature:           { bg: bg-card, radius: lg, padding: lg }
  card-product:           { bg: bg-card, radius: xl, padding: lg, border: '1px solid border-soft' }
  card-money:             { bg: bg-card, radius: xl, padding: '32px 24px', text: text }
  badge-pill:             { bg: brand-soft, text: brand, radius: pill, padding: '4px 10px' }
  input-text:             { bg: bg-elevated, border: '1px solid border-strong', radius: sm, padding: '12px 16px', height: 48, text: text }
  amount-input-money:     { bg: transparent, border: 'none', padding: 0, height: 144, font: 'money-display', text: brand }
  top-nav:                { bg: bg, text: text, height: 64, font: nav-link }
  footer-dark:            { bg: bg-pure, text: text-muted, padding: '64px 0', font: body-sm }

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  ease-entrance: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 320
  duration-bounce: 480
  duration-pulse: 2400
  reduced-motion: 'respects prefers-reduced-motion: reduce — green-glow pulse, dollar-sign rotate, parallax cards, and scrolling-cashtag marquee collapse to static states'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  glow-green: 'rgba(0, 213, 75, 0.45) 0 0 32px'
  ambient: 'rgba(0, 0, 0, 0.40) 0 1px 2px'
  standard: 'rgba(0, 0, 0, 0.50) 0 8px 24px'
  elevated: 'rgba(0, 0, 0, 0.65) 0 24px 48px -8px'
  deep: 'rgba(0, 0, 0, 0.80) 0 40px 80px -20px'
  ring: '0 0 0 3px rgba(0,213,75,0.50)'

accessibility:
  contrast-text-on-bg: 17.0
  contrast-text-on-brand: 5.5
  contrast-body-on-bg: 13.5
  contrast-link-on-bg: 9.7
  focus-ring: '3px solid rgba(0,213,75,0.50) with 2px offset'
  reduced-motion-honored: true
  min-target: 44

dark-mode: default
---

## 1. Visual Theme & Atmosphere

Cash App's visual surface is the only major consumer-finance brand that commits to **dark-by-default**. The canvas is **near-black** (`#0e0e0e`) — slightly softer than absolute `#000000`, calibrated to look like a vintage cathode-ray-tube terminal rather than a flat ink-jet print. Onto that ground the brand stamps a single, unmistakable voltage: **Cash Green `#00d54b`**, an electric LED-bright green that reads as the colour of bodega ATMs, vintage register displays, and 1980s arcade screens. The green is everywhere — wordmark, primary CTA, dollar-sign hero glyph, link colour — and it is the brand's loudest identity move. While PayPal whispers "trust" in two blues, Cash App **shouts** in a single neon green.

Type is **Cash Sans**, the brand's custom geometric sans designed by Mark Caneso (formerly of House Industries / Pintassilgo). Cash Sans carries a slight **monospace flavour** in its display weights — the letterforms are wider than a typical geometric sans, with rectangular terminals and uniform stroke widths that feel half-financial-terminal, half-pop-music-poster. The companion **Cash Sans Mono** is full-monospace, used for every dollar figure on the marketing site (and indeed in the product itself, where the in-app keypad renders in mono). A 144px hero number rendered in Cash Sans Mono with `tnum + zero` is the brand's most-shown typographic moment — money figures so large they become decoration.

Page rhythm is built around **black-by-default with chromatic interruptions**:
1. **Near-black hero sections** (`#0e0e0e`) — the default. Nav, hero, feature grid, footer.
2. **Pure black bands** (`#000000`) — used for extreme-contrast moments, often the footer.
3. **Lifted dark cards** (`#1a1a1a` or `#1f1f1f`) — feature cards, product mockups.
4. **Coloured product-vertical heroes** — Cash for Business goes full-bleed `#00cfff` blue; Bitcoin goes full-bleed `#ff7800` orange; Investing goes full-bleed `#9b59ff` purple; Boosts goes full-bleed `#ff4d8b` pink. Each vertical owns one colour, and the whole page transforms.

Iconography is geometric, hairline-weight, often glowing-green on dark. The signature glyph is the **dollar sign `$`** itself, rendered in `#00d54b` against black at hero scale — borrowed straight from the cash-register vocabulary. Decorative shadows are scarce on the surface itself, but **green-glow** (`rgba(0, 213, 75, 0.45) 0 0 32px`) appears as a rare emphasis treatment on featured CTAs.

The brand's posture is **youth-financial**: it talks to the under-30 audience the way music streaming and gaming brands do — confident, loud, indifferent to corporate-finance precedent. It is the rebellious sibling of Square (both owned by Block, Inc.), the Venmo-rejecter, and the only fintech that feels comfortable in a club rather than a bank.

**Key Characteristics:**
- Dark-by-default canvas: `#0e0e0e` (not pure black, not paper-white)
- Single brand voltage: Cash Green `#00d54b` — electric, LED-bright, signature
- Cash Sans for display, Cash Sans Mono for every dollar figure
- 144px money-display sizes — figures so large they become decoration
- Pill-shaped CTAs (full radius), often with a green-glow emphasis on featured CTAs
- Per-vertical colour-card pages: Bitcoin orange, Business blue, Investing purple, Boosts pink
- Dollar sign `$` as a brand glyph — hero scale, neon green on black
- Eyebrow type uses Cash Sans Mono with 2px letter-spacing — monospace authority
- Footer goes pure black (`#000000`) — closes in maximum contrast
- Hairline borders use `rgba(255, 255, 255, 0.10)` — light-on-dark divider logic

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#0e0e0e`): Near-black default — softer than pure black, calibrated for CRT-warm.
- **Pure Ground** (`#000000`): Maximum-contrast band; footer.
- **Ink** (`#ffffff`): Primary white headline + body on dark.
- **Brand** (`#00d54b`, Cash Green): Single brand voltage — wordmark, primary CTA, dollar-sign glyph.

### Brand & Dark
- **Cash Green** (`#00d54b`): The canonical brand colour. Primary CTA fill, hyperlink, signature glyph.
- **Brand Bright** (`#21fb6f`): Brighter green for hover/active glow states.
- **Brand Deep** (`#00a83a`): Pressed/active green.
- **Brand Soft** (`rgba(0, 213, 75, 0.12)`): Green at 12% — informational badge background.
- **Surface Elevated** (`#1a1a1a`): The +1 step on the canvas.
- **Surface Card** (`#1f1f1f`): The +2 step — feature cards, product mockups.
- **Surface Elevated-2** (`#2a2a2a`): The +3 step — hover, focused dropdowns.

### Accent (Per-Vertical)
Cash App uses a **vertical-colour system** unique among consumer-finance brands. Each product vertical owns one colour:

- **Cash for Business** — `#00cfff` (Cash Blue) — full-bleed hero, accent badge
- **Bitcoin** — `#ff7800` (Bitcoin Orange) — full-bleed hero, BTC ticker
- **Investing** — `#9b59ff` (Investing Purple) — full-bleed hero, stock ticker
- **Boosts / Promo** — `#ff4d8b` (Boost Pink) — full-bleed hero, promo cards

These aren't decorative accents; they are full-page colour-swap moments. Visiting the Bitcoin page transforms the brand entirely — the nav stays dark, but the hero, the cards, and the type-glyphs all become Bitcoin-orange.

### Interactive
- **Link** = Brand `#00d54b`, no underline at rest; underline on hover
- **Link Hover** — `#21fb6f` (brighter green), with underline
- **CTA Hover** — bg shifts to `#21fb6f`, optional green-glow blooms
- **CTA Active** — bg `#00a83a`
- **Disabled** — `#2a2a2a` background, `#6c6c6c` text
- **Selected** — pill chips use `brand-soft` bg with `#00d54b` text

### Neutral Scale (Dark)
The scale is inverted vs light-mode brands:

`#0e0e0e` (Canvas) → `#1a1a1a` (Surface Elev) → `#1f1f1f` (Card) → `#2a2a2a` (Hover/Elev-2) → `#6c6c6c` (Text Subtle) → `#a0a0a0` (Muted) → `#e8e8e8` (Body) → `#ffffff` (Ink).

Borders use **light-on-dark alpha**: `rgba(255, 255, 255, 0.06–0.20)`.

### Surface & Borders
- **Surface Elevated** (`#1a1a1a`): +1 step.
- **Surface Card** (`#1f1f1f`): +2 step — default card surface.
- **Surface Elevated-2** (`#2a2a2a`): +3 step — hover/focus state.
- **Border** (`rgba(255, 255, 255, 0.10)`): Default 1px hairline.
- **Border Strong** (`rgba(255, 255, 255, 0.20)`): Input border.
- **Border Soft** (`rgba(255, 255, 255, 0.06)`): Softest divider.
- **Border on Green** (`rgba(0, 0, 0, 0.20)`): Hairline on green CTA fills.

### Shadow Colors
Shadows on dark-mode brands work *deeper* than on light-mode brands (low-opacity black on a dark background needs more density to read). Cash App uses **`rgba(0, 0, 0, 0.40–0.80)`** — substantially heavier than PayPal/Venmo/Square. The signature **green-glow** (`rgba(0, 213, 75, 0.45) 0 0 32px`) is reserved for featured CTAs and rare hero moments.

### Semantic
- **Success** (`#00d54b`): Success matches brand — green is success in this system
- **Warning** (`#ffb800`): Caution amber on dark
- **Danger** (`#ff4d4d`): Error red on dark
- **Info** (`#00cfff`): Matches accent blue

## 3. Typography Rules

### Font Family

**Primary: Cash Sans** — the brand's custom geometric sans by Mark Caneso (PSY/OPS Type Foundry), designed for Cash App in 2018. The display cuts carry a slight **monospace flavour** — wider letterforms, rectangular terminals, uniform stroke widths. Weights deployed: 400, 500, 600, 700, 900.

**Body: Cash Sans (regular cut)** — same family, tuned for body sizes. Weights: 400, 500, 600, 700.

**Fallback chain**: `"Cash Sans", -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif`. The chain hands off to system-ui then Helvetica.

**Mono: Cash Sans Mono** — full-monospace companion. Used for **every dollar figure** on the marketing site, every code block, every tabular list. OpenType `tnum` and `zero` (slashed zero) explicitly enabled. Weights: 400, 500, 700.

**OpenType features**: `kern` always on; `ss01`/`ss02` for stylistic-set glyph alternates used in the wordmark and certain headlines.

### Hierarchy

| Role             | Font           | Size | Weight | Line Height | Letter Spacing | OT Features  | Notes                                          |
|------------------|----------------|------|--------|-------------|----------------|--------------|------------------------------------------------|
| display-mega     | Cash Sans      | 144  | 700    | 0.92        | -4px           | kern, ss01   | Top-of-page mega — "$" hero glyph              |
| display-hero     | Cash Sans      | 96   | 700    | 0.95        | -2.5px         | kern         | Standard hero headline                         |
| display-xl       | Cash Sans      | 72   | 700    | 1.00        | -1.8px         | kern         | Secondary hero                                 |
| display-lg       | Cash Sans      | 56   | 700    | 1.05        | -1.2px         | kern         | Section opener                                 |
| display-md       | Cash Sans      | 40   | 700    | 1.10        | -0.6px         | kern         | Feature card title                             |
| display-sm       | Cash Sans      | 28   | 700    | 1.20        | -0.3px         | —            | Subsection lead                                |
| title-lg         | Cash Sans      | 24   | 600    | 1.25        | 0              | —            | Card title                                     |
| title-md         | Cash Sans      | 20   | 600    | 1.30        | 0              | —            | Card body title                                |
| title-sm         | Cash Sans      | 16   | 600    | 1.35        | 0              | —            | List heading                                   |
| body-lg          | Cash Sans      | 18   | 400    | 1.55        | 0              | —            | Lead paragraph                                 |
| body-md          | Cash Sans      | 16   | 400    | 1.50        | 0              | —            | Default body                                   |
| body-strong      | Cash Sans      | 16   | 700    | 1.50        | 0              | —            | Inline emphasis                                |
| body-sm          | Cash Sans      | 14   | 400    | 1.50        | 0              | —            | Secondary body                                 |
| caption          | Cash Sans      | 13   | 400    | 1.45        | 0              | —            | Metadata                                       |
| legal            | Cash Sans      | 12   | 400    | 1.50        | 0              | —            | Footer disclosure                              |
| eyebrow          | Cash Sans Mono | 12   | 700    | 1.20        | 2px (uppercase) | —           | Section eyebrow — note: in MONO, not body sans |
| button           | Cash Sans      | 16   | 700    | 1.20        | 0              | —            | All CTA labels                                 |
| nav-link         | Cash Sans      | 14   | 500    | 1.40        | 0              | —            | Top navigation                                 |
| money-display    | Cash Sans Mono | 96   | 700    | 1.00        | -1.6px         | tnum, zero   | "$200" hero figure                             |
| money-mid        | Cash Sans Mono | 56   | 700    | 1.05        | -1px           | tnum, zero   | Mid-size money figure                          |
| money-inline     | Cash Sans Mono | 16   | 500    | 1.40        | 0              | tnum, zero   | Inline transaction amounts                     |
| code-micro       | Cash Sans Mono | 12   | 400    | 1.40        | 0              | tnum         | Code samples, reference IDs                    |

### Principles

- **Display weight is 700**: Cash App's headline tier is heavy — confident, loud, never quiet. This distinguishes it from Square (500) and Coinbase (400).
- **Mono for money, mono for eyebrows**: The mono cut isn't just for code — it's for *every dollar figure* and the eyebrow tier. The monospace flavour is the brand's typographic signature.
- **Tabular numerals + slashed zero on every figure**: `tnum + zero` is non-negotiable. The slashed zero is especially important on dark backgrounds where "$0" and "$O" are visually close.
- **Hard negative tracking on display**: -1.2px to -4px on display sizes; the largest mega tier uses -4px to compress 144px figures into a single glyph-block.
- **Eyebrow uppercase + 2px tracking in mono**: Monospace eyebrow at 2px letter-spacing is unusual and brand-distinctive — most brands use sans for eyebrows.
- **Pure white ink, not tinted**: Headlines on dark are absolute `#ffffff` for maximum contrast. No warm-white, no green-white tint.
- **Display reads as poster, not paragraph**: The 96–144px hero tier reads more like a Times Square billboard than a marketing headline. The brand wants attention, not subtlety.

## 4. Component Stylings

### Buttons

**Primary CTA** ("Sign Up", "Get the App")
- Background: `#00d54b` (Cash Green)
- Text: `#0e0e0e` (near-black), weight 700, 16px
- Padding: 14px / 28px
- Height: 48px
- Radius: pill (9999)
- Hover: bg `#21fb6f`, optional green-glow `rgba(0,213,75,0.45) 0 0 32px`
- Active: bg `#00a83a`, no glow
- Use case: every primary action

**Hero CTA** (large)
- Same as primary but 20px / 40px padding, 64px height
- Featured CTAs ship with the green-glow on by default

**Secondary** ("Learn More")
- Background: `#1a1a1a` (Surface Elevated)
- Text: `#ffffff`, weight 700
- Border: 1px solid `rgba(255, 255, 255, 0.20)`
- Padding: 13px / 27px
- Height: 48px
- Radius: pill
- Hover: bg `#2a2a2a`, border `rgba(255, 255, 255, 0.30)`

**Tertiary Text** ("View All")
- Background: transparent
- Text: `#00d54b`, weight 700, with underline-on-hover

**On-Green CTA**
- Background: `#0e0e0e` (near-black)
- Text: `#00d54b`, weight 700
- Same pill geometry
- Use case: when CTA sits on a green-fill hero

### Cards

**Feature Card**
- Background: `#1f1f1f` (Surface Card)
- Radius: 16px
- Padding: 24px
- No border, no shadow on default
- Hover: bg `#2a2a2a`
- Use case: 3-up feature grid

**Product Card**
- Background: `#1f1f1f`
- Border: 1px solid `rgba(255, 255, 255, 0.06)`
- Radius: 24px
- Padding: 24px
- Shadow: ambient `rgba(0, 0, 0, 0.40) 0 1px 2px`
- Use case: app-store comparison

**Money Card** (the iconic balance display)
- Background: `#1f1f1f`
- Radius: 24px
- Padding: 32px / 24px
- Hero figure in money-mid (56px Cash Sans Mono with `tnum + zero`)
- Use case: balance card, payment-confirmation card

### Badges, Tags, Pills

**Brand Badge**
- Background: `rgba(0, 213, 75, 0.12)` (brand-soft)
- Text: `#00d54b`, weight 700, 12px
- Padding: 4px / 10px
- Radius: pill
- Use case: "New", "Live", "Boosted"

**Cashtag Pill** (the $username chip)
- Background: `#1a1a1a`
- Text: `#00d54b` (the `$` is always green), `#ffffff` (the username body)
- Padding: 6px / 14px
- Radius: pill
- Use case: profile chip, social share

### Inputs / Forms

**Text Input**
- Background: `#1a1a1a`
- Border: 1px solid `rgba(255, 255, 255, 0.20)`
- Radius: 8px
- Height: 48px
- Padding: 12px / 16px
- Focus: border `#00d54b` 2px, ring `rgba(0, 213, 75, 0.50)` 3px
- Use case: email login, search

**Money Input** (the iconic `$0.00` amount entry)
- Background: transparent
- Border: none
- Padding: 0
- Height: 144px (matches money-display)
- Font: 96px Cash Sans Mono weight 700 with `tnum + zero`, colour `#00d54b`
- Centre-aligned, with `$` prefix in the same green
- This is Cash App's most-iconic input — the "Send how much?" gesture

### Navigation

**Top Nav**
- Height: 64px
- Background: `#0e0e0e`
- No bottom border (the canvas is dark enough that nav floats)
- Logo left (Cash App `$` glyph in `#00d54b`), nav links centre, "Sign In" + "Get App" right
- Nav link: 14px / 500, colour `#ffffff`; hover: colour shifts to `#00d54b`

**Footer**
- Background: `#000000` (pure black, deeper than canvas)
- Text: `#a0a0a0` for links, `#ffffff` for category headers
- Padding: 64px vertical
- Cash App `$` glyph bottom-left

### Selectors

**Cashtag Picker**
- Pill input at 48px, `#1a1a1a` bg, `rgba(255,255,255,0.20)` border, white text
- `$` prefix in `#00d54b`

### Tabs

**Pill Tabs**
- Container: `#1a1a1a` bg, pill radius
- Active: `#00d54b` bg, `#0e0e0e` text, weight 700
- Inactive: transparent bg, `#a0a0a0` text

### Tooltips

- Background: `#1f1f1f`
- Text: `#ffffff`, weight 500, 13px
- Padding: 8px / 12px
- Radius: 6px
- 1px border `rgba(255, 255, 255, 0.10)`

### Toasts

- Success: bg `#1f1f1f`, left-border 4px `#00d54b`, white ink
- Error: bg `#1f1f1f`, left-border 4px `#ff4d4d`
- Info: bg `#1f1f1f`, left-border 4px `#00cfff`

### Modals

- Overlay: `rgba(0, 0, 0, 0.85)` — heavy black overlay
- Dialog: bg `#1f1f1f`, radius 24px, max-width 480px, padding 32px
- White close glyph top-right

### Decorative

**Dollar Sign Glyph (`$`)**
- Cash App's most-shown decorative element
- Rendered in `#00d54b` (Cash Green) at 144px+ on hero pages
- Sometimes paired with a slow rotation animation (12s, ease-linear)

**Cashtag**
- The `$username` pattern is the brand's social-identity token
- Always rendered with the `$` in green and the username in white

**Green Glow**
- Reserved for featured CTAs and rare hero moments
- `box-shadow: rgba(0, 213, 75, 0.45) 0 0 32px`
- Pulse animation (2.4s ease-in-out infinite alternate) on opt-in only

## 5. Layout Principles

### Spacing System
Base 4px. Scale: 4, 8, 12, 16, 20, 24, 32, 48, 96, 128. Section spacer 96px; hero 128px. Slightly tighter than Square — Cash App's poster-density compresses sections.

### Grid & Container
- Page max-width 1280px
- Prose width 720px
- 12-col grid with 24px gutters
- Hero treatment: full-bleed dark background, content max 1280px
- Per-vertical heroes go full-bleed in vertical colour (orange/blue/purple/pink)

### Whitespace Philosophy
Cash App balances **dense type with generous chromatic breathing room**. Hero figures fill 80% of viewport width but are surrounded by 128px+ vertical space. The visual logic is "the figure is the room" — money displays so large they ARE the layout.

### Section Cadence
Dark canvas → dark canvas → coloured-vertical hero → dark canvas → pure-black footer. Coloured heroes are the page's chromatic punctuation; everywhere else is dark-by-default.

## 6. Shapes & Radius Scale

| Tier        | Value | Use                                             |
|-------------|-------|-------------------------------------------------|
| None        | 0     | Banner promo, full-bleed edges                  |
| Micro       | 2     | Status dots                                     |
| XS          | 4     | Tooltip arrows                                  |
| SM          | 8     | Inputs, dropdowns                               |
| MD          | 12    | Mid-size cards                                  |
| LG          | 16    | Feature cards                                   |
| XL          | 24    | Product cards, modals, money cards              |
| XXL         | 32    | Hero cards, large image containers              |
| Pill        | 9999  | All CTAs, badges, cashtag pills                |

Cash App's signature radius is **24px on cards + pill on CTAs**. Larger card radius than Square (12) — Cash App's youth-aesthetic tolerates softer geometry.

## 7. Depth & Elevation

| Level | Treatment                                                          | Use                                              |
|-------|--------------------------------------------------------------------|--------------------------------------------------|
| 0     | Flat (canvas `#0e0e0e`)                                            | Hero text, body                                  |
| 1     | Surface jump to `#1a1a1a` or `#1f1f1f`, no shadow                  | Default card                                     |
| 2     | Ambient shadow `rgba(0,0,0,0.40) 0 1px 2px`                        | Sticky nav post-scroll                           |
| 3     | Standard shadow `rgba(0,0,0,0.50) 0 8px 24px`                      | Card hover                                       |
| 4     | Elevated shadow `rgba(0,0,0,0.65) 0 24px 48px -8px`                | Mega-menu, dropdown                              |
| 5     | Deep shadow `rgba(0,0,0,0.80) 0 40px 80px -20px`                   | Modal dialog                                     |
| Glow  | Green-glow `rgba(0,213,75,0.45) 0 0 32px`                          | Featured CTAs, hero moments                      |

### Shadow Philosophy

Dark-mode shadows need **deeper opacity** to read on dark backgrounds — Cash App's shadows run 0.40–0.80 (vs PayPal's 0.06–0.18). The system also introduces a **green-glow** category that no other brand in this set uses: a coloured emphasis treatment that brand-tints elevation. Used sparingly — typically on the hero CTA and one or two featured product moments per page.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)`
- **Bounce**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — heart-tap, send-confirmation
- **Entrance**: `cubic-bezier(0, 0, 0.2, 1)`

### Durations
- **Fast**: 100ms — colour shift on link hover
- **Standard**: 200ms — most state changes
- **Slow**: 320ms — modal entrance
- **Bounce**: 480ms — confetti, send-success
- **Pulse**: 2400ms — green-glow loop on featured CTAs

### Per-Component Recipes
- **Button hover**: bg colour `#00d54b` → `#21fb6f` over 100ms; green-glow blooms over 320ms ease-emphasized
- **Card hover**: bg shifts `#1f1f1f` → `#2a2a2a` over 200ms
- **Money input typing**: digits scale-in from 0.9 → 1.0 over 100ms each
- **Send-success animation**: 480ms ease-bounce; checkmark + confetti burst with green-glow pulse
- **Vertical-page color swap**: 320ms ease-emphasized crossfade when navigating to Bitcoin/Investing/Boosts pages
- **Dollar-sign rotate** (decorative): 12s linear infinite (rare; opt-in)
- **Modal entrance**: 320ms ease-emphasized; overlay fades 200ms; dialog scales 0.96 → 1.0
- **Cashtag-marquee** (footer): infinite scroll of celebrity/brand cashtags at 80px/s

### Reduced Motion
Strictly honored. Green-glow pulse becomes static glow. Dollar-sign rotate stops on first frame. Cashtag marquee becomes static. Send-success confetti becomes instant checkmark. Modal scale-up becomes instant fade.

## 9. Accessibility & A11y

### Contrast Pairs
- `#ffffff` text on `#0e0e0e` bg: **17.0:1** — AAA
- `#e8e8e8` body on `#0e0e0e` bg: **13.5:1** — AAA
- `#0e0e0e` on `#00d54b` brand: **5.5:1** — AA at all sizes (note: text-on-brand is *near-black*, not white — Cash Green isn't bright enough for white text)
- `#00d54b` link on `#0e0e0e` bg: **9.7:1** — AAA
- `#a0a0a0` muted on `#0e0e0e`: **7.0:1** — AAA

### Focus Indicators
3px solid `rgba(0, 213, 75, 0.50)` ring with 2px offset on every interactive element.

### ARIA Patterns
- **Dialog**: modals use `role="dialog"`, `aria-modal="true"`, focus-trap
- **Tabs**: `role="tablist"` / `role="tab"`
- **Live region**: payment-confirmation toast uses `aria-live="assertive"`
- **Money input**: `inputmode="decimal"`, `aria-label="Amount in dollars"`

### Keyboard Nav
Tab order matches visual flow. Modal focus-trapped, Escape closes. Per-vertical hero swap announces page change to screen readers.

### Screen Reader Hints
- Cash glyph: `role="img"` with `aria-label="Cash App"`
- Cashtags: `aria-label="$username on Cash App"`
- Money figures: visible "$" + numerals; `aria-label="50 dollars"`

### Reduced Motion
All animations honoured. Green-glow pulse becomes static.

## 10. Responsive Behavior

### Breakpoints
| Name    | Width  | Use                              |
|---------|--------|----------------------------------|
| mobile  | <640   | Stacked single-column            |
| tablet  | 640–1024 | 2-col grid                      |
| desktop | 1024–1280 | 3-col grid                     |
| wide    | ≥1280  | Full layout                     |

### Touch Targets
Minimum 44×44px. CTAs at 48px / 64px (hero). Money input always 144px tall regardless of viewport — the figure dominates.

### Collapsing Strategy
- Top nav collapses to hamburger below 1024px
- display-mega scales 144 → 96 → 64 → 48px desktop → tablet → mobile
- Money-display scales 96 → 72 → 56 → 40px
- Feature grid 3-col → 2-col → 1-col

### Image Behavior
- Phone-frame mockups at iOS-bezel radius (32–40px)
- Coloured-vertical heroes use full-bleed colour with mockup centred
- `loading="lazy"` for below-fold

### Container Queries
Money cards use container queries: <320px → vertical stack (label above, figure below); ≥320px → horizontal alignment.

## 11. Content & Voice

### Tone
**Loud-casual-confident** — Cash App's voice is the most confident in fintech, bordering on cocky. Sentences are short and imperative. Headlines are blunt commands ("Send. Receive. Spend."). The voice uses sentence-case-or-lowercase casually; never aspirational marketing language. The brand sounds like a confident peer who has already moved past the question of trust.

### Microcopy Patterns
- **Button verbs**: "Get the App", "Sign Up", "Send", "Cash Out", "Deposit", "Claim Boost"
- **Error message recipe**: short, blunt, almost casual. "Card didn't work. Try another."
- **Success confirmation**: "Sent. $50 to $alex" — checkmark + amount + cashtag
- **Loading state**: "One sec…" or "…"

### Empty States
- **No transactions**: "No activity yet. Send some cash to get started."
- **No friends**: "Find friends with their $cashtag."
- Empty states are casual and short — no apologies, no marketing copy.

### CTA Verb Conventions
- **Acquisition**: "Get the App", "Sign Up Free", "Get Started"
- **Sign-in**: "Sign In"
- **Payment**: "Send", "Pay", "Cash Out", "Deposit"
- **Exploration**: "Learn More", "See How"
- **Confirmation**: "Send $50" — always include the amount
- **Promo**: "Claim Boost", "Cash Back"

The brand uses **"Cash"** as a verb wherever possible ("Cash Out", "Cash App Pay") — the wordmark IS the verb.

## 12. Dark Mode & Theming

Cash App is **dark-by-default**. The marketing site does not ship a light mode. The closest light treatment is the rare **legal/FAQ sub-page** which inverts to a white surface — but this is not a system-wide theme, just a content-tier exception.

If extending to true light theme:

```yaml
colors-light:
  bg: '#ffffff'
  bg-elevated: '#f5f5f5'
  surface: '#f5f5f5'
  surface-soft: '#ffffff'
  surface-strong: '#ebebeb'
  text: '#0e0e0e'
  text-body: '#1f1f1f'
  text-muted: '#5a5a5a'
  text-subtle: '#8a8a8a'
  brand: '#00a83a'              # deeper Cash Green — `#00d54b` is too neon for light backgrounds
  brand-hover: '#00d54b'
  on-brand: '#ffffff'
  border: '#d8d8d8'
  border-strong: '#a0a0a0'
  link: '#00a83a'
```

The light-mode brand voltage **deepens** Cash Green from `#00d54b` to `#00a83a` — the original neon doesn't have enough contrast against white to read as "active". This is the inverse of Venmo's dark-mode lift.

## 13. Lineage & Influences

Cash App's visual lineage runs through three streams:

**Bodega-ATM and CRT-terminal vernacular**. The neon green on near-black is borrowed directly from cash-register displays, ATM prompts, and CRT-era monospace terminals. Cash App is the only major fintech that takes this **physical-money-machine aesthetic** as primary brand voice — the green-on-black is "money sign on a register" rather than "Silicon Valley app".

**Hip-hop and pop-music poster design**. Cash App's celebrity collaborations (Megan Thee Stallion, Travis Scott, Cardi B), its sponsorship of music festivals, and its use of cashtag celebrity profiles tie the brand to music-industry visual culture. The chunky display type, the loud chromatic verticals (Bitcoin orange, Boost pink), and the poster-bold scale all read more like a record-label site than a bank.

**Block / Square's design DNA, but rebellious**. Cash App and Square share a parent (Block, Inc.) and share Mark Caneso as a designer, but the systems are nearly opposite: Square is monochrome restraint, Cash App is neon maximalism. The two brands divide Block's audience — Square talks to merchants, Cash App talks to consumers — and their visual systems make that divide explicit.

What it rejects: **PayPal-style corporate-finance trust** (Cash App is the anti-PayPal), **Stripe-style developer-aesthetic restraint**, and **Venmo-style social-feed playfulness** (Cash App is louder, more confrontational, less "your friend"). It's the only fintech that feels like a **club**, not a bank.

**Influences:**
- **Block / Square** ([squareup.com](https://squareup.com)) — Sibling brand, opposite aesthetic
- **Mark Caneso (PSY/OPS Type)** — Designer of Cash Sans
- **CRT terminals / Bodega ATMs** — Neon-green-on-black colour vocabulary
- **Hip-hop poster design** — Display weight 700, chunky type, loud chromatic verticals
- **Megan Thee Stallion / Travis Scott / Cardi B** — Cashtag celebrity collaborations that shape the brand's youth-music posture

## 14. Do's and Don'ts

**Do:**
- Use Cash Green `#00d54b` for everything actionable — the single brand voltage
- Default to near-black `#0e0e0e` canvas — dark-by-default is the brand's identity
- Pair Cash Sans Mono with `tnum + zero` on every dollar figure
- Render money figures at display sizes (56–144px) — money is the brand's typographic spectacle
- Pill all CTAs with optional green-glow on featured ones
- Use the per-vertical colour system: orange for Bitcoin, blue for Business, purple for Investing, pink for Boosts
- Treat the `$` glyph as a brand element — hero scale, neon green
- Use the cashtag pattern (`$username`) — it's the brand's social token
- Use mono Cash Sans for eyebrow type (12px / 700 / 2px tracking, uppercase)
- Pure-black footer (`#000000`) for maximum-contrast page closure

**Don't:**
- Don't lighten the canvas to white — Cash App is dark-by-default; light is exception, not rule
- Don't use green-on-white for the primary CTA — the green doesn't have AA contrast for white text
- Don't substitute Cash Green with a softer mint — the neon is non-negotiable
- Don't use pure black `#000000` as canvas — `#0e0e0e` is calibrated for CRT-warm
- Don't use weight 400/500 on display — 700 is the brand's poster voice
- Don't apply green-glow to every CTA — it's reserved for featured moments
- Don't square card corners below 16px — soft geometry pairs with the neon voltage
- Don't use proportional figures for money — mono `tnum + zero` always
- Don't introduce new vertical-colours — the four-colour system (orange/blue/purple/pink) is fixed
- Don't use polite corporate CTA verbs ("Get Started" alone) — pair with action-and-amount

## 15. Agent Prompt Guide

### Quick Color Reference

```
Brand:        #00d54b  (Cash Green)
Brand Bright: #21fb6f
Canvas:       #0e0e0e
Pure Ground:  #000000
Surface Card: #1f1f1f
Body:         #e8e8e8
Muted:        #a0a0a0
Border:       rgba(255,255,255,0.10)
Bitcoin:      #ff7800
Business:     #00cfff
Investing:    #9b59ff
Boosts:       #ff4d8b
```

### Example Component Prompts

1. *"Create a Cash App hero: near-black `#0e0e0e` background, 144px Cash Sans display-mega headline at weight 700 in pure white with -4px tracking — text 'Send. Spend. Save.'. Below, an 18px body in `#e8e8e8`. A pill CTA at 64px height filled with Cash Green `#00d54b`, near-black text `#0e0e0e` at weight 700, labelled 'Get the App'. Add a green-glow `rgba(0,213,75,0.45) 0 0 32px` to the CTA. Right side: a 96px Cash Sans Mono dollar amount '$200' rendered in `#00d54b` with `tnum + zero`."*

2. *"Design a Cash App money input: transparent background, no border. 96px Cash Sans Mono at weight 700 in `#00d54b` reading '$0.00' with `tnum + zero`. Centre-aligned, 144px tall. As the user types, each digit scales in from 0.9 → 1.0 over 100ms. Below the input, a hint text in `#a0a0a0` reading 'How much?'."*

3. *"Build a Cash App full-bleed Bitcoin vertical hero: `#ff7800` (Bitcoin Orange) background, 96px display-hero in pure white at weight 700, body in white at 80% opacity. White pill CTA at 56px with `#0e0e0e` text labelled 'Buy Bitcoin'. Right side: a `#1f1f1f` elevated card showing a BTC ticker line-chart with the price in 56px Cash Sans Mono."*

4. *"Compose a Cash App feature grid: 3 cards in a row, 24px gap. Each card has bg `#1f1f1f`, 16px radius, 24px padding. Title 24px Cash Sans weight 600 in `#ffffff`. Body 16px weight 400 in `#e8e8e8`. Top of each card: a 48px Cash Green icon. On hover, bg shifts to `#2a2a2a`."*

5. *"Design a Cash App cashtag pill: `#1a1a1a` bg, pill radius (9999), 6px / 14px padding. Text: `$cashtag` where the `$` is `#00d54b` (green) and the username is `#ffffff` (white), both at 14px weight 700. Hover: bg shifts to `#2a2a2a`, optional green-glow ring."*

6. *"Create a Cash App send-success modal: dark overlay `rgba(0,0,0,0.85)`. Dialog `#1f1f1f` bg, 24px radius, 32px padding. Top: a 64px Cash Green checkmark with bounce-scale animation (1.0 → 1.4 → 1.0 over 480ms ease-bounce). Below: title 'Sent.' in 40px Cash Sans weight 700. Below that: '$50.00 to $alex' with `$50.00` in 56px Cash Sans Mono `tnum + zero` and `$alex` in 24px Cash Sans weight 600 with `$` in `#00d54b`."*

### Iteration Guide

1. **Invert the canvas**: if your background is white, you're not Cash App. The brand is dark-by-default `#0e0e0e`.
2. **Commit to Cash Green**: replace every brand-blue with `#00d54b`. The neon is the voltage.
3. **Use mono for money**: every dollar figure must be Cash Sans Mono (or fallback IBM Plex Mono / JetBrains Mono) with `tnum + zero`. This is the single biggest move.
4. **Scale money to display sizes**: 56–144px figures, not 20px. Money is the typographic spectacle.
5. **Pill every CTA, optional green-glow on featured**: the glow turns a CTA into a "feature CTA" — use it for the page's most-important action only.
6. **Replace black ink with `#0e0e0e`**: not pure black — the near-black is calibrated for CRT-warm.
7. **Pick a vertical, swap the page**: if the design is for a specific Cash App product (Bitcoin, Investing, Business, Boosts), make the hero full-bleed in that vertical's colour. The brand identity is the colour-card system.
8. **Use mono for eyebrow type**: 12px Cash Sans Mono at weight 700 with 2px letter-spacing, uppercase. Most brands don't do this.
