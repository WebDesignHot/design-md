---
name: Square
tagline: Pure black on pure white, Square Sans grids, and retail-POS minimalism — commerce as black-and-white geometry.
updated_at: 2026-05-04T14:57:35+12:00
published_at: 2026-05-04T14:57:35+12:00
author: webdesignhot
source_url: https://squareup.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [fintech]
tags: [light, minimal, sans, monochrome, geometric, retail]
preview_swatch: ['#ffffff', '#000000', '#006aff']
related: [stripe, coinbase, ramp]
description: 'Square''s site is a study in pure-black-on-pure-white restraint. The brand commits to a black-first chromatic system — the wordmark is black, the primary CTA is black, the hero ink is black — with a single sky-blue (`#006aff`) reserved for accent links and product moments. Square Sans, the brand''s custom geometric sans by Colophon Foundry, runs at modest weights from 60px display down to 12px caption — confident geometry without ornament. Pages alternate pure-white sections with soft grey elevation bands and full-bleed black heroes; depth comes from hairlines and surface tone, not from decorative shadow. Where PayPal carries dual-blue corporate trust and Venmo carries social-blue informality, Square carries retail-POS minimalism — the visual posture of a brand whose product is the cash-register-shaped tablet that sits on every coffee-shop counter in America.'

colors:
  bg: '#ffffff'                  # pure white canvas
  bg-dark: '#000000'             # full-bleed black hero
  bg-cool: '#f7f7f7'             # cool-grey elevation band
  bg-cream: '#f1eee9'            # warm-cream feature surface (occasional)
  surface: '#ffffff'              # default card
  surface-soft: '#f7f7f7'         # soft elevation band
  surface-strong: '#ebebeb'        # tertiary panel / disabled bg
  surface-dark-elevated: '#1c1c1c' # +1 step on black hero
  surface-cream: '#f1eee9'        # warm-cream sub-surface (sellers vertical)
  text: '#000000'                 # pure-black ink — primary headline + body
  text-body: '#1c1c1c'             # near-black running body (slightly softer)
  text-muted: '#5a5a5a'            # captions, metadata
  text-subtle: '#8a8a8a'           # disabled, lowest hierarchy
  text-on-dark: '#ffffff'          # white on black
  text-on-dark-soft: '#a0a0a0'     # muted text on black
  brand: '#000000'                 # black is the brand colour — wordmark, primary CTA
  brand-hover: '#1c1c1c'           # hover-darken (very subtle)
  accent: '#006aff'                # Square sky blue — accent links, product hero highlight
  accent-hover: '#0050c8'           # accent pressed
  accent-soft: '#e6efff'           # accent at 12% — informational tint
  on-brand: '#ffffff'               # white on black
  on-accent: '#ffffff'              # white on blue
  link: '#006aff'                   # default link colour
  link-hover: '#0050c8'             # underlined-darken
  border: '#d8d8d8'                 # default 1px hairline
  border-strong: '#a0a0a0'          # input border
  border-soft: '#ebebeb'            # softest divider
  border-on-dark: 'rgba(255,255,255,0.16)' # hairline on black hero
  semantic-success: '#1f8b4c'      # confirmation green
  semantic-warning: '#cc7700'      # caution amber
  semantic-danger: '#cf202f'       # error red
  semantic-info: '#006aff'          # informational tint matches accent
  focus-ring: 'rgba(0,106,255,0.45)' # 3px sky-blue focus ring
  shadow-ambient: 'rgba(0, 0, 0, 0.04)'
  shadow-soft: 'rgba(0, 0, 0, 0.08)'
  shadow-hard: 'rgba(0, 0, 0, 0.16)'

typography:
  display:
    family: '"Square Sans Display", "Square Sans", -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['ss01', 'kern']
  body:
    family: '"Square Sans Text", "Square Sans", -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"Square Sans Mono", "JetBrains Mono", "IBM Plex Mono", monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-mega:    { size: 120, weight: 500, lineHeight: 0.95, tracking: '-3px',  family: display, opentype: 'kern' }
    display-hero:    { size: 80,  weight: 500, lineHeight: 1.00, tracking: '-2px',  family: display, opentype: 'kern' }
    display-xl:      { size: 60,  weight: 500, lineHeight: 1.05, tracking: '-1.4px', family: display }
    display-lg:      { size: 48,  weight: 500, lineHeight: 1.10, tracking: '-1px',   family: display }
    display-md:      { size: 36,  weight: 500, lineHeight: 1.15, tracking: '-0.6px', family: display }
    display-sm:      { size: 28,  weight: 600, lineHeight: 1.25, tracking: '-0.3px', family: display }
    title-lg:        { size: 24,  weight: 600, lineHeight: 1.30, tracking: '0',      family: body }
    title-md:        { size: 20,  weight: 600, lineHeight: 1.35, tracking: '0',      family: body }
    title-sm:        { size: 16,  weight: 600, lineHeight: 1.40, tracking: '0',      family: body }
    body-lg:         { size: 18,  weight: 400, lineHeight: 1.55, tracking: '0',      family: body }
    body-md:         { size: 16,  weight: 400, lineHeight: 1.50, tracking: '0',      family: body }
    body-strong:     { size: 16,  weight: 600, lineHeight: 1.50, tracking: '0',      family: body }
    body-sm:         { size: 14,  weight: 400, lineHeight: 1.50, tracking: '0',      family: body }
    caption:         { size: 13,  weight: 400, lineHeight: 1.45, tracking: '0',      family: body }
    legal:           { size: 12,  weight: 400, lineHeight: 1.50, tracking: '0',      family: body }
    eyebrow:         { size: 12,  weight: 600, lineHeight: 1.20, tracking: '1.5px',  family: body }
    button:          { size: 16,  weight: 600, lineHeight: 1.20, tracking: '0',      family: body }
    nav-link:        { size: 14,  weight: 500, lineHeight: 1.40, tracking: '0',      family: body }
    number-tabular:  { size: 16,  weight: 500, lineHeight: 1.40, tracking: '0',      family: mono, opentype: 'tnum, zero' }
    code-micro:      { size: 12,  weight: 400, lineHeight: 1.40, tracking: '0',      family: mono }
    pricing-figure:  { size: 56,  weight: 500, lineHeight: 1.00, tracking: '-1.4px', family: display, opentype: 'tnum, zero' }

radius:
  none: 0
  micro: 2
  xs: 4
  sm: 6
  md: 8
  lg: 12
  xl: 16
  xxl: 24
  pill: 9999

spacing:
  base: 4
  scale: { xxs: 4, xs: 8, sm: 12, base: 16, md: 20, lg: 24, xl: 32, xxl: 48, section: 96, hero: 144 }

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72

components:
  button-primary:         { bg: brand, text: on-brand, padding: '14px 28px', height: 48, radius: pill, font: button }
  button-primary-hero:    { bg: brand, text: on-brand, padding: '18px 36px', height: 56, radius: pill, font: button }
  button-secondary:       { bg: bg, text: brand, border: '1px solid border-strong', padding: '13px 27px', height: 48, radius: pill, font: button }
  button-tertiary-text:   { bg: transparent, text: link, font: button }
  button-on-dark:         { bg: bg, text: brand, padding: '14px 28px', height: 48, radius: pill, font: button }
  hero-band-light:        { bg: bg, text: text, padding: hero, font: display-mega }
  hero-band-cream:        { bg: bg-cream, text: text, padding: section, font: display-hero }
  hero-band-dark:         { bg: bg-dark, text: on-dark, padding: hero, font: display-mega }
  card-feature:           { bg: surface-soft, radius: lg, padding: lg }
  card-product:           { bg: bg, radius: lg, padding: lg, border: '1px solid border-soft' }
  card-on-dark:           { bg: surface-dark-elevated, radius: lg, padding: lg, text: on-dark }
  badge-pill:             { bg: surface-strong, text: text, radius: pill, padding: '4px 10px' }
  input-text:             { bg: bg, border: '1px solid border-strong', radius: sm, padding: '12px 16px', height: 48 }
  top-nav-light:          { bg: bg, text: text, height: 72, font: nav-link }
  top-nav-dark:           { bg: bg-dark, text: on-dark, height: 72, font: nav-link }
  footer-dark:            { bg: bg-dark, text: on-dark-soft, padding: '64px 0', font: body-sm }
  pricing-card:           { bg: bg, border: '1px solid border', radius: lg, padding: '32px 24px' }

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-entrance: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — hover lifts, parallax product mockups, and cycling hero illustrations collapse to opacity-only'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0, 0, 0, 0.04) 0 1px 2px'
  standard: 'rgba(0, 0, 0, 0.06) 0 4px 12px'
  elevated: 'rgba(0, 0, 0, 0.08) 0 16px 32px -8px'
  deep: 'rgba(0, 0, 0, 0.16) 0 30px 60px -20px'
  ring: '0 0 0 3px rgba(0,106,255,0.45)'

accessibility:
  contrast-text-on-bg: 21.0
  contrast-text-on-brand: 21.0
  contrast-body-on-bg: 16.5
  contrast-link-on-bg: 4.6
  focus-ring: '3px solid rgba(0,106,255,0.45) with 2px offset'
  reduced-motion-honored: true
  min-target: 44

dark-mode: dual
---

## 1. Visual Theme & Atmosphere

Square's marketing surface is the most committed black-and-white system in fintech. The canvas is **pure white** (`#ffffff`); the ink is **pure black** (`#000000`); and the brand colour is — astonishingly — also **black**. Where every other fintech reaches for a brand voltage (PayPal blue, Venmo blue, Cash App green, Stripe purple), Square doubles down on the absence of colour. Black is the wordmark, black is the primary CTA, black is the hero headline. A single sky-blue (`#006aff`) appears only as accent — links, occasional product moments, the hero illustration's signature stroke — and it functions as a visual breath, the only chromatic event on an otherwise monochrome page.

The visual posture is **retail-POS minimalism**. Square's product is the cash-register-shaped tablet sitting on every coffee-shop counter in America, and the brand carries that hardware-honesty into its marketing: clean rectangles, hairline grids, geometric sans-serif type, no ornament. Type is **Square Sans**, the brand's custom geometric sans designed by Colophon Foundry, deployed in three optical sizes — Display, Text, Mono — across a 12-row scale from 120px hero down to 12px legal. Display sits at **weight 500 not 700** — the headlines feel quietly confident, almost editorial, never bombastic.

Page rhythm rotates four surface modes:
1. **White editorial sections** — the default. Hero, feature grids, product breakdowns sit on pure `#ffffff`.
2. **Cool-grey elevation bands** (`#f7f7f7`) — quiet pause between feature blocks.
3. **Warm-cream surfaces** (`#f1eee9`) — used on the seller-vertical pages (restaurants, retail) to introduce slightly warmer colour without breaking the monochrome system.
4. **Full-bleed black heroes** (`#000000`) — campaign tops, footer, and product narratives, carrying white headlines and `#1c1c1c` elevated cards.

Decorative shadows are absent. Cards stack with a 1px hairline (`#d8d8d8`) or a single surface-jump from white to `#f7f7f7`. Iconography is geometric, hairline-weight, on a 24×24 grid — frequently reduced to single-line forms. The brand's signature glyph is the **square logomark** itself: a black square, alone on a white page, sized as a brand-presence element.

The end result reads like Helvetica's grandchildren designed a fintech — confident, restrained, every visual move earning its place. It is the antithesis of crypto-native maximalism. It is **commerce as black-and-white geometry**.

**Key Characteristics:**
- Pure white `#ffffff` canvas with pure black `#000000` ink — maximum chromatic restraint
- Black is the brand colour — wordmark, primary CTA, hero glyph all in black
- Single accent: sky blue `#006aff` for links and rare product moments
- Square Sans Display at weight 500 (not 700) — quiet editorial confidence
- Three Square Sans cuts: Display (≥18px), Text (<18px), Mono (tabular)
- Pill-shaped CTAs (full radius) — the only soft geometry in the system
- Four surface modes: white, cool-grey, warm-cream (seller vertical), full-bleed black
- Hairline 1px borders (`#d8d8d8`); decorative shadows scarce
- Geometric, hairline-weight iconography on a 24×24 grid
- Footer goes black on every page — closes in `#000000`

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): Pure white default page floor.
- **Ink** (`#000000`): Pure-black headline + body. Square is one of the rare brands that uses absolute black, not a tinted near-black.
- **Brand** (`#000000`): The brand colour is black. The wordmark, the primary CTA, the brand glyph — all pure black.
- **Accent** (`#006aff`): The single chromatic event. Links and rare product hero moments.

### Brand & Dark
- **Black** (`#000000`): Wordmark, primary CTA, hero ink. The entirety of the brand voltage.
- **Surface Dark Elevated** (`#1c1c1c`): The +1 step on a black hero — product-mockup cards inside dark sections.
- **Brand Hover** (`#1c1c1c`): Hover-darken on the black CTA (very subtle — pure black has nowhere darker to go, so the system shifts to `#1c1c1c` and adds a translateY lift).

### Accent
- **Sky Blue** (`#006aff`): Accent links, rare product highlights, the hero illustration's signature stroke.
- **Accent Hover** (`#0050c8`): Pressed link state.
- **Accent Soft** (`#e6efff`): Sky blue at 12% — used on informational badges and info-tint backgrounds.

Square deliberately *does not* introduce a third brand colour. Yellow, green, red appear only as semantic states. The system commits to black + white + one blue, and every visual decision flows from that constraint.

### Interactive
- **Link** = Accent `#006aff`, no underline at rest; underline on hover
- **Link Hover** — `#0050c8`, with underline
- **CTA Hover** — bg `#1c1c1c`, translateY(-1px), shadow `rgba(0,0,0,0.08) 0 4px 12px`
- **CTA Active** — bg `#000000` (back to pure), no lift
- **Disabled** — `#ebebeb` background or `#8a8a8a` text
- **Selected** — pill chips use `#000000` 8% tint with `#000000` text

### Neutral Scale
The most uniform neutral ladder in fintech — perfectly even greyscale steps:

`#ffffff` (Canvas) → `#f7f7f7` (Surface Soft) → `#ebebeb` (Surface Strong) → `#d8d8d8` (Border) → `#a0a0a0` (Border Strong) → `#8a8a8a` (Subtle) → `#5a5a5a` (Muted) → `#1c1c1c` (Body / Surface Dark Elev) → `#000000` (Ink/Brand).

No tint. The scale is pure greyscale — distinguishing Square from PayPal (cool-tinted), Wise (warm-tinted), and Venmo (slight cool-tint).

### Surface & Borders
- **Surface Soft** (`#f7f7f7`): Cool-grey elevation band.
- **Surface Strong** (`#ebebeb`): Disabled CTA background, tertiary panel.
- **Surface Cream** (`#f1eee9`): Warm-cream surface on seller-vertical pages — Square's only departure from monochrome.
- **Surface Dark Elevated** (`#1c1c1c`): +1 step on black hero.
- **Border** (`#d8d8d8`): Default 1px hairline.
- **Border Strong** (`#a0a0a0`): Input border.
- **Border Soft** (`#ebebeb`): Softest divider.
- **Border on Dark** (`rgba(255,255,255,0.16)`): Hairline on black sections.

### Shadow Colors
Shadows are **neutral black at very low opacity** (`rgba(0, 0, 0, 0.04–0.16)`). No brand tint — Square's neutral system extends to its shadows. Most cards use no shadow at all.

### Semantic
- **Success** (`#1f8b4c`): Confirmation green
- **Warning** (`#cc7700`): Caution amber
- **Danger** (`#cf202f`): Error red
- **Info** (`#006aff`): Informational tint — matches accent

## 3. Typography Rules

### Font Family

**Primary display: Square Sans Display** — the brand's custom geometric sans, designed for Square by Colophon Foundry around 2017–2018. The Display cut is optimised for 18px+ headline use: wider apertures, looser sidebearings, sharper terminals. Weights deployed: 400, 500, 600, 700.

**Body: Square Sans Text** — the small-optical-size companion. Same skeleton, tuned for 12–17px legibility. Weights: 400, 500, 600, 700.

**Fallback chain**: `"Square Sans Text", "Square Sans", -apple-system, "Helvetica Neue", Helvetica, Arial, sans-serif`. The chain hands off to system-ui, then Helvetica.

**Mono: Square Sans Mono** — the tabular companion for transaction numbers, pricing figures, code samples. Weights: 400, 500. OpenType `tnum` and `zero` (slashed zero) explicitly enabled.

**OpenType features**: `kern` always on; `ss01` for the alternate stylistic-set used in the wordmark and signature glyphs.

### Hierarchy

| Role             | Font              | Size | Weight | Line Height | Letter Spacing | OT Features  | Notes                                          |
|------------------|--------------------|------|--------|-------------|----------------|--------------|------------------------------------------------|
| display-mega     | Square Sans Disp  | 120  | 500    | 0.95        | -3px           | kern         | Top-of-page mega hero; rarely used             |
| display-hero     | Square Sans Disp  | 80   | 500    | 1.00        | -2px           | kern         | Standard hero headline                         |
| display-xl       | Square Sans Disp  | 60   | 500    | 1.05        | -1.4px         | kern         | Secondary hero / section opener                |
| display-lg       | Square Sans Disp  | 48   | 500    | 1.10        | -1px           | kern         | Section opener                                 |
| display-md       | Square Sans Disp  | 36   | 500    | 1.15        | -0.6px         | kern         | Feature card title                             |
| display-sm       | Square Sans Disp  | 28   | 600    | 1.25        | -0.3px         | —            | Subsection lead                                |
| title-lg         | Square Sans Text  | 24   | 600    | 1.30        | 0              | —            | Card title                                     |
| title-md         | Square Sans Text  | 20   | 600    | 1.35        | 0              | —            | Card body title                                |
| title-sm         | Square Sans Text  | 16   | 600    | 1.40        | 0              | —            | List heading                                   |
| body-lg          | Square Sans Text  | 18   | 400    | 1.55        | 0              | —            | Lead paragraph                                 |
| body-md          | Square Sans Text  | 16   | 400    | 1.50        | 0              | —            | Default body                                   |
| body-strong      | Square Sans Text  | 16   | 600    | 1.50        | 0              | —            | Inline emphasis                                |
| body-sm          | Square Sans Text  | 14   | 400    | 1.50        | 0              | —            | Secondary body                                 |
| caption          | Square Sans Text  | 13   | 400    | 1.45        | 0              | —            | Metadata                                       |
| legal            | Square Sans Text  | 12   | 400    | 1.50        | 0              | —            | Footer disclosure                              |
| eyebrow          | Square Sans Text  | 12   | 600    | 1.20        | 1.5px (uppercase) | —         | Section eyebrow                                |
| button           | Square Sans Text  | 16   | 600    | 1.20        | 0              | —            | All CTA labels                                 |
| nav-link         | Square Sans Text  | 14   | 500    | 1.40        | 0              | —            | Top navigation                                 |
| number-tabular   | Square Sans Mono  | 16   | 500    | 1.40        | 0              | tnum, zero   | Transaction amounts, balances                  |
| pricing-figure   | Square Sans Disp  | 56   | 500    | 1.00        | -1.4px         | tnum, zero   | Pricing-card hero figure ("$0", "2.6%")        |
| code-micro       | Square Sans Mono  | 12   | 400    | 1.40        | 0              | tnum         | Code samples, reference IDs                    |

### Principles

- **Weight 500 carries display, weight 400 carries body**: The headline tier is *not* 700 (PayPal) or 900 (Venmo). 500 is Square's editorial-confidence weight — quiet but present.
- **Three optical sizes, one voice**: Display (≥18px), Text (<18px), Mono — a disciplined three-cut system tuned for screen-grade legibility.
- **Hard negative tracking on display, zero on body**: -0.3px to -3px on display sizes; 0 on body. Display reads as a single block of dense type.
- **Tabular numerals + slashed zero on every figure**: Pricing cards, transaction lists, amount inputs all use `tnum + zero`. The slashed zero is fintech non-negotiable.
- **Pure-black ink, not tinted**: Square is one of the rare brands that uses absolute `#000000` — no faint blue or warm tint. The chromatic discipline extends to ink.
- **Pricing figures get display treatment**: When a "$0" or "2.6%" appears on a pricing card, it uses display-tier sizing (56px) with mono numerals — pricing is the brand's loudest typographic moment.
- **Eyebrow uppercase + 1.5px tracking**: Single uppercase context — used to label sections ("FOR RESTAURANTS", "FOR RETAIL").

## 4. Component Stylings

### Buttons

**Primary CTA** ("Get started", "Sign up free")
- Background: `#000000`
- Text: `#ffffff`, weight 600, 16px
- Padding: 14px / 28px
- Height: 48px
- Radius: pill (9999)
- Hover: bg `#1c1c1c`, translateY(-1px), shadow `rgba(0,0,0,0.08) 0 4px 12px`
- Active: bg `#000000`, no lift
- Use case: every primary action — distinguishes Square from competitors with brand-colour CTAs

**Hero CTA** (large)
- Same as primary but 18px / 36px padding, 56px height
- Use case: top-of-page CTA on campaign hero

**Secondary Outline** ("Learn more", "Talk to sales")
- Background: `#ffffff`
- Text: `#000000`, weight 600
- Border: 1px solid `#a0a0a0`
- Padding: 13px / 27px
- Height: 48px
- Radius: pill
- Hover: bg `#f7f7f7`, border `#000000`
- Use case: secondary action

**Tertiary Text Link** ("View pricing")
- Background: transparent
- Text: `#006aff`, weight 600, with underline-on-hover

**On-Dark CTA** (when CTA sits on a black hero)
- Background: `#ffffff`
- Text: `#000000`, weight 600
- Same pill geometry
- Hover: bg dims to `rgba(255,255,255,0.92)`

### Cards

**Feature Card**
- Background: `#f7f7f7`
- Radius: 12px
- Padding: 24px
- No border, no shadow
- Use case: 3-up feature grid

**Product Card**
- Background: `#ffffff`
- Border: 1px solid `#ebebeb`
- Radius: 12px
- Padding: 24px
- Shadow: ambient
- Hover: shadow blooms to `rgba(0,0,0,0.08) 0 16px 32px -8px`, translateY(-2px)

**Pricing Card**
- Background: `#ffffff`
- Border: 1px solid `#d8d8d8`
- Radius: 12px
- Padding: 32px / 24px
- Pricing figure at 56px display weight 500 with mono `tnum`
- Use case: pricing pages

**Card on Dark**
- Background: `#1c1c1c` (surface-dark-elevated)
- Radius: 12px
- Padding: 24px
- Text: white headline, `#a0a0a0` body
- No border

### Badges, Tags, Pills

**Status Pill**
- Background: `#ebebeb`
- Text: `#000000`, weight 600, 12px
- Padding: 4px / 10px
- Radius: pill

**Accent Badge**
- Background: `#e6efff` (accent-soft)
- Text: `#006aff`, weight 600, 12px
- Use case: "New", "Beta"

### Inputs / Forms

**Text Input**
- Background: `#ffffff`
- Border: 1px solid `#a0a0a0`
- Radius: 6px (Square uses tighter input radius than card radius)
- Height: 48px
- Padding: 12px / 16px
- Focus: border `#006aff` 2px, ring `0 0 0 3px rgba(0,106,255,0.45)`
- Error: border `#cf202f`

### Navigation

**Top Nav**
- Height: 72px
- Background: `#ffffff`
- Border-bottom: 1px solid `#ebebeb`
- Logo left (Square wordmark in black), nav links centre, "Sign In" + "Get Started" right
- Nav link: 14px / 500, colour `#000000`; hover gains underline
- Sticky on scroll with subtle shadow once content scrolls past

**Mega-Menu Panel**
- Background: `#ffffff`
- Border-top: 1px solid `#ebebeb`
- Padding: 32px / 80px
- Three-column grid: "For business types", "Hardware", "Software"
- Each column header: eyebrow (12px / 600 uppercase, 1.5px tracking, `#5a5a5a`)

**Footer**
- Background: `#000000`
- Text: `#a0a0a0` for links, `#ffffff` for category headers
- Padding: 64px vertical
- Square wordmark bottom-left

### Selectors

**Country / Plan Picker**
- Pill button at 48px, white bg, `#a0a0a0` border
- Opens dropdown with shadow-elevated, 320px wide

### Tabs

**Underline Tabs**
- Container: bottom-border 1px `#ebebeb`
- Active: 2px black underline, `#000000` weight 600 text
- Inactive: no underline, `#5a5a5a` text
- Hover: text darkens to `#000000`

### Tooltips

- Background: `#000000`
- Text: `#ffffff`, weight 500, 13px
- Padding: 8px / 12px
- Radius: 4px

### Toasts

- Success: bg `#ffffff`, left-border 4px `#1f8b4c`
- Error: bg `#ffffff`, left-border 4px `#cf202f`
- Info: bg `#ffffff`, left-border 4px `#006aff`
- 4-second auto-dismiss

### Modals

- Overlay: `rgba(0, 0, 0, 0.55)` — pure black overlay
- Dialog: bg `#ffffff`, radius 12px, max-width 480px, padding 32px

### Decorative

**Square Logomark**
- Solid black square at hero scale (240×240 or larger)
- The brand's most-shown decorative element
- Sometimes paired with a single sky-blue pixel-detail in product hero illustrations

## 5. Layout Principles

### Spacing System
Base 4px. Scale: 4, 8, 12, 16, 20, 24, 32, 48, 96, 144. Section spacer 96px (denser than PayPal's 80); hero spacer 144px (looser — emphasizes top-of-page presence). The system is **generous between sections**, **disciplined within them**.

### Grid & Container
- Page max-width 1280px
- Prose width 720px
- 12-col grid with 24px gutters
- Hero treatment: full-bleed background, content max 1280px
- Feature grid: 3×4 standard

### Whitespace Philosophy
Square commits to **wide vertical rhythm** (96–144px between sections) — more breathing room than PayPal. The chromatic restraint frees the layout to use space generously. Within feature blocks the system stays disciplined (24px padding, 24px gap).

### Section Cadence
White → cool-grey → white → black → white → footer-black. The seller-vertical pages introduce the warm-cream `#f1eee9` band as a fourth surface mode.

## 6. Shapes & Radius Scale

| Tier        | Value | Use                                             |
|-------------|-------|-------------------------------------------------|
| None        | 0     | Banner promo, full-bleed edges                  |
| Micro       | 2     | Status dots                                     |
| XS          | 4     | Tooltip arrows, micro-badges                    |
| SM          | 6     | Inputs, dropdowns                               |
| MD          | 8     | Mid-size cards, modals (compact)                |
| LG          | 12    | Feature cards, pricing cards, product tiles     |
| XL          | 16    | Hero cards                                      |
| XXL         | 24    | Image containers, large product mockups         |
| Pill        | 9999  | All CTAs, status badges                         |

Square's signature radius is **pill on every CTA + 12px on every card**. The combination of soft pills against tight 12px cards creates the brand's geometric rhythm.

## 7. Depth & Elevation

| Level | Treatment                                                    | Use                                              |
|-------|--------------------------------------------------------------|--------------------------------------------------|
| 0     | Flat                                                         | Hero text, body                                  |
| 1     | 1px hairline `#d8d8d8` or `#ebebeb`                          | Default white-on-white card                      |
| 2     | Ambient shadow `rgba(0,0,0,0.04) 0 1px 2px`                  | Sticky nav post-scroll                           |
| 3     | Standard shadow `rgba(0,0,0,0.06) 0 4px 12px`                | CTA hover, card hover                            |
| 4     | Elevated shadow `rgba(0,0,0,0.08) 0 16px 32px -8px`          | Mega-menu, dropdown                              |
| 5     | Deep shadow `rgba(0,0,0,0.16) 0 30px 60px -20px`             | Modal dialog                                     |

### Shadow Philosophy

Shadows are **neutral black at very low opacity** — no brand tint, no warm cast. Multi-layer shadows are reserved for modals; everywhere else uses a single layer or no shadow at all. Square's chromatic restraint extends to depth: the system trusts contrast and surface tone, not decorative depth.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)`
- **Entrance**: `cubic-bezier(0, 0, 0.2, 1)`

### Durations
- **Fast**: 100ms — colour shift on link hover
- **Standard**: 200ms — card hover, tab switch
- **Slow**: 320ms — modal entrance, mega-menu reveal

### Per-Component Recipes
- **Button hover**: translateY(-1px) over 200ms ease-standard; bg colour `#000000` → `#1c1c1c` over 100ms
- **Card hover**: translateY(-2px) + shadow ambient → standard over 200ms
- **Link hover**: 2px underline rises from baseline over 100ms; text colour stays `#006aff`
- **Mega-menu**: 320ms ease-emphasized opacity + 8px translateY drop-down
- **Modal entrance**: 320ms ease-emphasized; overlay fades in 200ms; dialog scales 0.96 → 1.0
- **Hero illustration cycling** (when product art rotates): 480ms crossfade, 4s dwell

### Reduced Motion
Strictly honored. translateY collapses to opacity-only. Hero-illustration cycling pauses on the first frame. Modal scale-up becomes instant fade.

## 9. Accessibility & A11y

### Contrast Pairs
- `#000000` text on `#ffffff` bg: **21.0:1** — AAA, maximum possible
- `#1c1c1c` body on `#ffffff` bg: **16.5:1** — AAA
- `#ffffff` on `#000000` brand: **21.0:1** — AAA, maximum possible
- `#006aff` link on `#ffffff` bg: **4.6:1** — AA at body sizes
- `#5a5a5a` muted on `#ffffff`: **7.8:1** — AAA at body sizes

Square's contrast posture is the strongest in fintech — pure black on pure white maxes out the WCAG scale.

### Focus Indicators
3px solid `rgba(0,106,255,0.45)` ring with 2px offset on every interactive element. Pill buttons get a fully pill-shaped ring.

### ARIA Patterns
- **Combobox**: country/plan picker uses `role="combobox"` with `aria-expanded`
- **Listbox**: dropdowns use `role="listbox"`
- **Dialog**: modals use `role="dialog"`, `aria-modal="true"`, focus-trap
- **Tabs**: `role="tablist"` / `role="tab"` / `role="tabpanel"`
- **Live region**: payment status uses `aria-live="assertive"`

### Keyboard Nav
Tab order matches visual flow. Mega-menu navigable with arrow keys. Modal focus-trapped with Escape close.

### Screen Reader Hints
- Square logomark: `role="img"` with `aria-label="Square"`
- Decorative illustrations: `aria-hidden="true"`
- Pricing figures: visible "$" or "%" + numerals

### Reduced Motion
Honored — all transforms collapse to opacity-only.

## 10. Responsive Behavior

### Breakpoints
| Name    | Width  | Use                              |
|---------|--------|----------------------------------|
| mobile  | <640   | Stacked single-column            |
| tablet  | 640–1024 | 2-col grid                      |
| desktop | 1024–1280 | 3-col grid                     |
| wide    | ≥1280  | Full layout                     |

### Touch Targets
Minimum 44×44px. Standard CTAs at 48px height; hero CTAs at 56px.

### Collapsing Strategy
- Top nav collapses to hamburger below 1024px
- display-mega scales 120 → 80 → 56 → 44px desktop → tablet → mobile
- Feature grid 3-col → 2-col → 1-col
- Pricing card grid 3-col → 1-col on mobile (no 2-col intermediate)

### Image Behavior
- Hardware mockups (Square Reader, Stand, Register) use `object-fit: contain` with explicit aspect ratios
- Hero illustrations: `aspect-ratio: 16/9`, `object-fit: cover`
- `srcset` 1x/2x/3x; `loading="lazy"` for below-fold

### Container Queries
Pricing cards use container queries: <320px → vertical stack; ≥320px → horizontal alignment of price + CTA.

## 11. Content & Voice

### Tone
**Plain-spoken-pragmatic** — Square's voice is the most utilitarian in fintech. Sentences are short, factual, never aspirational. Headlines describe the product in plain terms ("Run your whole business", "Sell anywhere"). The voice avoids jargon ("commerce platform", "payments orchestration") and stays close to the seller's vocabulary ("sell", "run", "grow").

### Microcopy Patterns
- **Button verbs**: "Get started", "Sign up free", "Talk to sales", "Learn more", "Get a free reader"
- **Error message recipe**: short, factual. "Card declined. Try a different card."
- **Success confirmation**: "Payment complete. $50.00 to Square Cash."
- **Loading state**: "One moment…"

### Empty States
- **No transactions**: "Your sales will appear here once you start taking payments."
- **No customers**: "Add your first customer to start a directory."
- Empty states *describe the state, then offer a next action* — never apologetic.

### CTA Verb Conventions
- **Acquisition**: "Get started", "Sign up free", "Get a free reader"
- **Sign-in**: "Sign in" (not "Log in")
- **Sales**: "Talk to sales", "Get a quote"
- **Exploration**: "Learn more", "See pricing"
- **Confirmation**: "Confirm payment", "Submit order"

Square's CTA verbs are **direct seller-language**, not consumer marketing. The brand wants to talk to small-business owners as peers, not as targets.

## 12. Dark Mode & Theming

Square ships partial dark mode on the **Seller Dashboard product** (the actual Square POS web app), but the marketing site remains light-only. The closest brand pattern on marketing is the **full-bleed black hero band**, which functions as a "campaign dark mode".

If extending to true dark theme on the marketing site:

```yaml
colors-dark:
  bg: '#000000'
  bg-elevated: '#1c1c1c'
  bg-cool: '#1c1c1c'
  surface: '#1c1c1c'
  surface-soft: '#2a2a2a'
  surface-strong: '#3a3a3a'
  text: '#ffffff'
  text-body: '#ebebeb'
  text-muted: '#a0a0a0'
  text-subtle: '#5a5a5a'
  brand: '#ffffff'              # in dark mode, white becomes the brand colour
  on-brand: '#000000'
  accent: '#3d8eff'             # lifted Square blue
  accent-hover: '#5ba0ff'
  border: 'rgba(255,255,255,0.10)'
  border-strong: 'rgba(255,255,255,0.20)'
  link: '#3d8eff'
```

The dark-mode brand voltage is **white** (the inverse of light-mode's black) — preserving the brand's monochrome discipline.

## 13. Lineage & Influences

Square's visual lineage runs through three streams:

**Swiss-grid minimalism**. Square's hairline grids, geometric sans, generous whitespace, and refusal to ornament are descended from Müller-Brockmann and Ruder — the Swiss-grid tradition that taught designers to trust the typography and leave the page alone.

**Apple's product-marketing hardware-honesty**. Square sells hardware (Reader, Stand, Register) and follows the Apple convention of letting the product speak for itself: clean photography on white, sparse copy, geometric sans. The Square Sans typeface itself shares conceptual DNA with San Francisco — wider apertures, optical-size cuts, designed for screens.

**Massimo Vignelli's monochrome discipline**. Vignelli's work at Knoll, the New York Subway, and Bloomberg established that a single typeface family + black + white + one accent could carry an entire identity. Square is a digital-era extension of that thesis.

What it rejects: **PayPal-style dual-blue corporate trust** (Square doesn't trade on financial-services memory — it trades on hardware credibility), **Stripe-style developer-aesthetic gradient hero** (Square's market is small-business owners, not developers), and **Cash App's youth-aesthetic neon green** (Cash App is Square's playful sibling — Block lets one go neon, the other goes monochrome).

**Influences:**
- **Massimo Vignelli / Knoll** — Monochrome + single accent + one typeface family
- **Müller-Brockmann / Swiss grid** — Hairline grids, geometric sans, whitespace discipline
- **Apple** ([apple.com](https://www.apple.com)) — Hardware-honesty product photography, optical-size type, San Francisco-adjacent geometric sans
- **Helvetica Now / Monotype** — The optical-size three-cut model (Display / Text / Mono) that Square Sans extends
- **Colophon Foundry** — Designer of Square Sans

## 14. Do's and Don'ts

**Do:**
- Use pure `#000000` for ink and brand — Square is one of the rare brands committed to absolute black
- Use Square Sans Display at weight 500 for headlines — *not* 700
- Pill all CTAs (radius 9999) — soft buttons against tight cards is the brand's geometric rhythm
- Keep cards at 12px radius — disciplined, not loose
- Use `#006aff` only as accent — links, occasional highlights, never as primary CTA fill
- Apply tabular numerals + slashed zero on every figure (pricing especially)
- Render pricing figures at display sizes (56px) with mono `tnum`
- Use the warm-cream `#f1eee9` only on seller-vertical pages — keeps the surface palette disciplined
- Footer goes black — closes the page in pure `#000000`
- Use plain-spoken seller-language CTAs — "Get started", "Talk to sales", "Get a free reader"

**Don't:**
- Don't fill the primary CTA with `#006aff` — black is the brand colour, blue is accent only
- Don't use weight 700 on Square Sans Display — 500 is the brand's editorial-confidence weight
- Don't use a tinted black ink (e.g. `#1c1c1c` for headlines) — Square commits to pure `#000000`
- Don't square CTA corners — pills are non-negotiable
- Don't introduce a third brand colour — black + white + one blue is the entire palette
- Don't use proportional figures for pricing — display + tnum + slashed zero
- Don't apply heavy decorative shadows — depth is hairlines and surface contrast
- Don't use system-ui as primary fallback above Helvetica Neue — Square prefers Helvetica precedent
- Don't use marketing-speak ("synergy", "elevate", "transform") — Square's voice is plain seller-language
- Don't use pure black on the cream `#f1eee9` band as a background-and-foreground inversion; the cream is for sub-surfaces only

## 15. Agent Prompt Guide

### Quick Color Reference

```
Brand:        #000000  (Black is the brand)
Accent:       #006aff  (Square Sky Blue)
Canvas:       #ffffff
Cool Band:    #f7f7f7
Cream Band:   #f1eee9  (seller verticals)
Body:         #1c1c1c
Muted:        #5a5a5a
Border:       #d8d8d8
Surface Dark: #1c1c1c
Success:      #1f8b4c
```

### Example Component Prompts

1. *"Create a Square-style hero: pure white background, 80px Square Sans Display headline at weight 500 in `#000000` with -2px tracking — text 'Run your whole business.'. Below, an 18px body in `#1c1c1c`. Two pill CTAs: primary in pure black with white text labelled 'Get started', secondary outline at `#a0a0a0` border with black text labelled 'Talk to sales'."*

2. *"Design a Square pricing card: white background, 12px radius, 1px border `#d8d8d8`, 32px / 24px padding. Top: eyebrow '2.6% + 10¢' in 12px uppercase 1.5px tracking. Hero figure '$0/mo' at 56px Square Sans Display weight 500 with tnum + zero. Below, three checkmark feature lines at 16px / 400. Bottom: black pill CTA labelled 'Sign up free'."*

3. *"Build a Square full-bleed black hero band: `#000000` background, white 120px display-mega headline ('Sell anywhere.'), white 18px subheadline at 80% opacity. White pill CTA at 56px height with `#000000` text labelled 'Get a free reader'. Hairline divider at `rgba(255,255,255,0.16)`. Right side: a `#1c1c1c` elevated card showing a Square Reader product mockup."*

4. *"Compose a Square feature grid: 3 cards in a row, 24px gap. Each card has bg `#f7f7f7`, 12px radius, 24px padding, no border. Title 24px Square Sans Display weight 500 in `#000000`. Body 16px weight 400 in `#1c1c1c`. Bottom: a `#006aff` arrow glyph indicating 'Learn more'. On hover, lift translateY(-2px) and bloom shadow."*

5. *"Design a Square seller-vertical hero (restaurants/retail): warm-cream `#f1eee9` background, 80px display-hero in pure `#000000` with -2px tracking. Body in `#1c1c1c`. Black pill CTA. The cream surface is the only chromatic departure from monochrome — keep it subtle."*

6. *"Create a Square transaction list: white card, 12px radius, 1px border `#ebebeb`. Each row: customer name in `#000000` weight 600, amount in Square Sans Mono with tnum + zero in `#000000` weight 500, date in `#5a5a5a` weight 400 caption. Hover: bg shifts to `#f7f7f7`."*

### Iteration Guide

1. **Commit to pure black**: if your ink is `#1c1c1c` or `#0a0b0d`, you're closer to Coinbase. Square uses `#000000` — absolute black.
2. **Black is the brand**: replace any branded-blue CTA with pure black. Reserve `#006aff` for accent only.
3. **Display weight 500, not 700**: this is the single biggest typographic move — quiet editorial confidence over fintech-bombastic.
4. **Pill every CTA, 12px every card**: the geometric rhythm is soft-buttons-on-tight-cards.
5. **Drop colour ornament**: if your page has more than `black + white + one blue + warm-cream`, you're off-brand.
6. **Pricing figures get display size + mono tnum**: pricing is Square's loudest typographic moment — give it 56px display weight 500 with tabular numerals.
7. **Switch CTA verbs to seller-language**: "Get started", "Talk to sales", "Get a free reader". Avoid abstract marketing verbs.
8. **Keep neutral shadows**: no brand tint, no warm cast. `rgba(0, 0, 0, 0.04–0.16)` for everything.
