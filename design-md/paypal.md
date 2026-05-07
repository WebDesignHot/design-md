---
name: PayPal
tagline: Dual-blue corporate trust — PayPal Sans Big over white, with a deep-navy ink and a sky-blue counterpoint.
updated_at: 2026-05-04T14:57:35+12:00
published_at: 2026-05-04T14:57:35+12:00
author: webdesignhot
source_url: https://www.paypal.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [fintech]
tags: [light, corporate, sans, trustworthy, blue, financial]
preview_swatch: ['#ffffff', '#003087', '#009cde']
related: [stripe, plaid, wise]
description: 'PayPal''s marketing surface is a dual-blue corporate-finance system: a deep midnight `#003087` that anchors the wordmark and primary type, paired with a sky-bright `#009cde` that lifts CTAs and accent strokes. The canvas stays pure white; PayPal Sans Big does the display work at modest weights — institutional trust written in Frutiger-derived geometry. Where most fintechs reach for one brand colour, PayPal commits to two — the navy carrying twenty-five years of financial-services memory, the sky blue carrying the action. Pages alternate white default sections with `#f5f7fa` cool-grey elevation bands and occasional full-bleed navy heroes; depth comes from hairlines and surface tone, not from decorative shadow. The result reads like a bank prospectus that learned UX — restrained, confident, and built to be trusted with money.'

colors:
  bg: '#ffffff'                  # page canvas — pure white
  bg-cool: '#f5f7fa'             # cool-grey elevation band between white sections
  bg-navy: '#003087'              # full-bleed navy hero ground (PayPal Deep Blue)
  bg-midnight: '#001c64'         # darker navy used at footer-edge and signature glyphs
  surface: '#ffffff'              # default card surface — white-on-white via border
  surface-soft: '#f5f7fa'         # secondary card / soft band
  surface-strong: '#eaeced'       # tertiary panel / disabled background
  surface-cool: '#dee3ea'         # cool-grey divider band
  surface-navy-elevated: '#0a3d97' # +1 step on navy — cards on dark heroes
  text: '#001c64'                 # primary ink — PayPal Midnight Blue
  text-body: '#2c2e2f'            # near-black running body
  text-muted: '#545d68'           # captions, metadata
  text-subtle: '#6c7378'          # disabled, lowest hierarchy
  text-on-cool: '#2c2e2f'         # body atop cool-grey band
  brand: '#003087'                # PayPal Deep Blue — wordmark, primary CTA
  brand-bright: '#009cde'         # PayPal Sky Blue — CTA bright, accent stroke
  brand-bright-hover: '#0070ba'   # mid-blue pressed/hover for sky CTA
  brand-deep-hover: '#001c64'     # pressed state for the navy CTA
  brand-disabled: '#aab7c4'       # desaturated blue for disabled CTAs
  on-brand: '#ffffff'             # white on navy or sky CTA
  on-navy: '#ffffff'              # white text on navy hero
  on-navy-soft: '#aab7c4'         # muted text on navy
  link: '#0070ba'                 # default text-link blue
  link-hover: '#003087'            # underlined-darken on hover
  border: '#cbd2d6'                # default 1px hairline
  border-strong: '#9da3a6'         # input border, focused divider
  border-soft: '#eaeced'           # softest divider
  border-on-navy: 'rgba(255,255,255,0.20)' # hairline on navy heroes
  semantic-success: '#108043'      # confirmation, payment-sent green
  semantic-warning: '#f5a623'      # caution / pending tone
  semantic-danger: '#d20000'       # error, declined-payment red
  semantic-info: '#009cde'         # informational tint matches sky blue
  focus-ring: 'rgba(0,156,222,0.45)' # 3px sky-blue focus ring
  shadow-ambient: 'rgba(0, 28, 100, 0.06)' # navy-tinted ambient shadow
  shadow-soft: 'rgba(0, 28, 100, 0.10)'
  shadow-hard: 'rgba(0, 28, 100, 0.18)'

typography:
  display:
    family: '"PayPal Sans Big", "PayPal Sans Big Web", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
    opentype-features: ['ss01', 'kern']
  body:
    family: '"PayPal Sans Small", "PayPal Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"PayPal Mono", "SF Mono", "JetBrains Mono", "IBM Plex Mono", monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-hero:    { size: 72, weight: 700, lineHeight: 1.05, tracking: '-1.5px',  family: display, opentype: 'kern' }
    display-xl:      { size: 60, weight: 700, lineHeight: 1.05, tracking: '-1.2px',  family: display }
    display-lg:      { size: 48, weight: 700, lineHeight: 1.10, tracking: '-1px',    family: display }
    display-md:      { size: 40, weight: 700, lineHeight: 1.15, tracking: '-0.6px',  family: display }
    display-sm:      { size: 32, weight: 700, lineHeight: 1.20, tracking: '-0.4px',  family: display }
    title-lg:        { size: 28, weight: 700, lineHeight: 1.25, tracking: '-0.2px',  family: display }
    title-md:        { size: 22, weight: 700, lineHeight: 1.30, tracking: '0',       family: body }
    title-sm:        { size: 18, weight: 700, lineHeight: 1.35, tracking: '0',       family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',       family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    body-strong:     { size: 16, weight: 700, lineHeight: 1.50, tracking: '0',       family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.45, tracking: '0',       family: body }
    legal:           { size: 12, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    eyebrow:         { size: 13, weight: 700, lineHeight: 1.20, tracking: '1.5px',   family: body }
    button:          { size: 16, weight: 700, lineHeight: 1.20, tracking: '0',       family: body }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.40, tracking: '0',       family: body }
    number-tabular:  { size: 16, weight: 500, lineHeight: 1.40, tracking: '0',       family: mono, opentype: 'tnum, zero' }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.40, tracking: '0',       family: mono }

radius:
  none: 0
  micro: 2
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
  pill: 9999

spacing:
  base: 4
  scale: { xxs: 4, xs: 8, sm: 12, base: 16, md: 20, lg: 24, xl: 32, xxl: 48, section: 80, hero: 120 }

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72

components:
  button-primary-navy:    { bg: brand, text: on-brand, padding: '14px 28px', height: 48, radius: pill, font: button }
  button-primary-sky:     { bg: brand-bright, text: on-brand, padding: '14px 28px', height: 48, radius: pill, font: button }
  button-secondary:       { bg: bg, text: brand, border: '2px solid brand', padding: '12px 26px', height: 48, radius: pill, font: button }
  button-tertiary-text:   { bg: transparent, text: link, font: button }
  button-on-navy:         { bg: bg, text: brand, padding: '14px 28px', height: 48, radius: pill, font: button }
  hero-band-light:        { bg: bg, text: text, padding: hero, font: display-hero }
  hero-band-cool:         { bg: bg-cool, text: text, padding: section, font: display-xl }
  hero-band-navy:         { bg: bg-navy, text: on-navy, padding: hero, font: display-hero }
  card-feature:           { bg: surface-soft, radius: lg, padding: lg, border: '1px solid border-soft' }
  card-product:           { bg: bg, radius: lg, padding: lg, border: '1px solid border', shadow: shadow-ambient }
  card-on-navy:           { bg: surface-navy-elevated, radius: lg, padding: lg, text: on-navy }
  badge-pill:             { bg: surface-strong, text: text, radius: pill, padding: '4px 10px' }
  input-text:             { bg: bg, border: '1px solid border-strong', radius: sm, padding: '12px 16px', height: 48 }
  top-nav:                { bg: bg, text: text, height: 72, font: nav-link, border-bottom: '1px solid border-soft' }
  footer-cool:            { bg: bg-cool, text: text-muted, padding: '64px 0', font: body-sm }
  footer-navy:            { bg: bg-midnight, text: on-navy-soft, padding: '64px 0', font: body-sm }
  banner-promo:           { bg: bg-midnight, text: on-navy, radius: 0, padding: '12px 24px', font: body-sm }

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-entrance: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-exit: 'cubic-bezier(0.4, 0, 1, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  duration-page: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce — CTA hover lifts, card translateY, and decorative parallax collapse to opacity-only transitions'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0, 28, 100, 0.06) 0 1px 2px'
  standard: 'rgba(0, 28, 100, 0.08) 0 4px 12px'
  elevated: 'rgba(0, 28, 100, 0.12) 0 16px 32px -8px'
  deep: 'rgba(0, 28, 100, 0.18) 0 30px 60px -20px'
  ring: '0 0 0 3px rgba(0,156,222,0.45)'

accessibility:
  contrast-text-on-bg: 18.4
  contrast-text-on-brand: 11.7
  contrast-body-on-bg: 11.2
  contrast-link-on-bg: 5.8
  focus-ring: '3px solid rgba(0,156,222,0.45) with 2px offset'
  reduced-motion-honored: true
  min-target: 44

dark-mode: null
---

## 1. Visual Theme & Atmosphere

PayPal's marketing surface is the visual equivalent of a bank lobby: high-ceilinged, quiet, paneled in two shades of blue that have been part of the brand since 1999. The canvas is **pure white** — not paper-cream, not warm-grey — and that whiteness is editorial rather than minimal. It exists to throw the two PayPal blues into relief: **Deep Blue `#003087`**, the institutional navy that owns the wordmark and primary type, and **Sky Blue `#009cde`**, the lifted counterpoint that carries action and accent strokes. Together they form the most recognizable colour pair in fintech, immediately legible to a billion users across two-and-a-half decades of muscle memory.

Type is **PayPal Sans Big** — a Frutiger-descendant geometric sans, designed for the brand by Dalton Maag, that reads as warm-corporate rather than tech-startup. Display sits at weight 700 with mild negative tracking; the headline voice is confident but never bombastic, "merchant-class type" rather than landing-page shout. Body type is the smaller-optical-size **PayPal Sans Small**, tuned for legibility at 14–18px, and a tabular **PayPal Mono** appears for transaction numbers and balance ledgers.

Page rhythm rotates three surface modes:
1. **White editorial sections** — the default. Hero, feature grids, product breakdowns sit on pure `#ffffff`.
2. **Cool-grey elevation bands** (`#f5f7fa`) — used to separate dense feature blocks and to host secondary product cards.
3. **Full-bleed navy heroes** (`#003087` or deeper `#001c64`) — used at campaign tops and at the footer, carrying white headlines and sky-blue accent rules.

Decorative shadows are scarce; depth comes from a 1px cool-grey hairline (`#cbd2d6`) and a single surface-jump from white to `#f5f7fa`. Iconography is rounded geometric, often rendered in two-tone navy + sky to echo the wordmark. The signature **PayPal "PP" monogram** appears as a brand glyph at hero scale, frequently rendered in navy-on-white or sky-on-navy.

The end-result reads like a financial-services prospectus that learned UX. It is not playful, not crypto-native, not Silicon-Valley-flat. It is **trust as visual posture** — restrained, confident, and built to host the most boring repeated promise in commerce: *your money will arrive*.

**Key Characteristics:**
- Pure white canvas (`#ffffff`) — institutional clarity, never paper-cream
- Dual-blue voltage: Deep Blue `#003087` (wordmark, primary CTA) + Sky Blue `#009cde` (action, accent)
- PayPal Sans Big at 700 with mild negative tracking — corporate-warm, never tech-startup
- Three surface modes: white default, cool-grey elevation band, full-bleed navy hero
- Pill-shaped CTAs (full radius) — friendly without becoming playful
- Tabular mono for balance/transaction figures — ledger discipline
- Hairline 1px borders (`#cbd2d6`); decorative shadows scarce
- Two-tone icon system mirroring the navy + sky wordmark
- "PP" monogram appears at hero scale as a signature brand glyph
- Footer goes navy on every page — closes the surface in `#001c64`

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): Pure white default page floor — institutional, not warm.
- **Ink** (`#001c64`, PayPal Midnight Blue): Primary headline and strong body text. Note: this is *not black* — the brand uses a deep navy as its "ink" colour, which subtly tints all primary type with a brand voice.
- **Brand Deep** (`#003087`, PayPal Deep Blue): Wordmark, primary CTA, signature glyphs.
- **Brand Bright** (`#009cde`, PayPal Sky Blue): Secondary brand voltage — hero accent rules, "Sign Up" CTA fill, link colour at hover.

### Brand & Dark
- **PayPal Deep Blue** (`#003087`): The canonical brand colour. Used on the primary CTA, the wordmark, and the brand glyph. Never used for body text (too saturated at small sizes).
- **PayPal Midnight** (`#001c64`): Darker navy variant — used at the footer-edge, on hover-darken states, and as the primary text colour.
- **PayPal Sky Blue** (`#009cde`): The lifted brand voltage. Used for the second-CTA fill ("Sign Up Free"), accent strokes on illustrations, and informational badges.
- **Mid Blue** (`#0070ba`): The transitional blue between Deep and Sky — used as the link hover colour and as the pressed state of the Sky CTA.

### Accent
- **Mid Blue** (`#0070ba`): Pressed/hover for sky CTA, default link colour.
- **Pale Blue Wash** (`#eaf4fb`): Faint informational tint — never used directly; appears under illustration washes and rare info-badge backgrounds.

PayPal deliberately *does not* introduce non-blue brand accents on marketing surfaces. Yellow, green, red appear only as semantic states (success, warning, danger) and never as brand voltage.

### Interactive
- **Link** (`#0070ba`): No underline at rest; underline appears on hover.
- **Link Hover** (`#003087`): Darker navy on hover, with underline.
- **CTA Hover** — Deep CTA → `#001c64`; Sky CTA → `#0070ba`. Both gain a 1px translateY lift and a navy-tinted shadow (`rgba(0,28,100,0.18) 0 4px 12px`).
- **CTA Active / Pressed** — both CTAs darken one step further and lose the lift.
- **Disabled** — `#aab7c4` background or `#6c7378` text.
- **Selected** — pill-style chips use a `#003087` 8% tint background with `#003087` text.

### Neutral Scale
PayPal uses a cool-grey neutral ladder (not warm — that distinguishes it from Wise/Mercury):

`#ffffff` (Canvas) → `#f5f7fa` (Cool-Grey Band) → `#eaeced` (Surface Strong) → `#dee3ea` (Cool Divider) → `#cbd2d6` (Border) → `#9da3a6` (Border Strong) → `#6c7378` (Text Subtle) → `#545d68` (Text Muted) → `#2c2e2f` (Body) → `#001c64` (Ink/Midnight).

The bottom of the scale lands on **midnight blue, not pure black** — every text moment carries a faint brand tint.

### Surface & Borders
- **Surface Soft** (`#f5f7fa`): Cool-grey elevation band between white sections.
- **Surface Strong** (`#eaeced`): Disabled CTA background, tertiary panel.
- **Surface Cool** (`#dee3ea`): Cool-grey divider band; rare.
- **Surface Navy Elevated** (`#0a3d97`): The +1 step on a navy hero — product-mockup cards inside dark sections.
- **Border** (`#cbd2d6`): Default 1px hairline.
- **Border Strong** (`#9da3a6`): Input border, focused divider.
- **Border Soft** (`#eaeced`): Softest divider — used inside cards.
- **Border on Navy** (`rgba(255,255,255,0.20)`): Hairline divider on navy hero sections.

### Shadow Colors
PayPal uses **navy-tinted shadows** at low opacity (`rgba(0, 28, 100, 0.06–0.18)`). The navy tint is subtle but intentional — it brand-colours the depth of the surface. White-on-white card stacks frequently use *no shadow at all*, relying on the 1px hairline.

### Semantic
- **Success** (`#108043`): Payment-sent green; confirmation banners; "Verified" badge ink.
- **Warning** (`#f5a623`): Pending-payment amber; caution banners.
- **Danger** (`#d20000`): Declined-payment red; error message ink.
- **Info** (`#009cde`): Informational tint — matches PayPal Sky, so it *is* a brand colour at the semantic role.

## 3. Typography Rules

### Font Family

**Primary display: PayPal Sans Big** — a custom Frutiger-derived geometric sans designed by Dalton Maag for PayPal in 2014. Weights deployed on marketing: 400 (Regular), 500 (Medium), 700 (Bold). The "Big" cut is optimised for headline sizes (≥18px) — wider apertures, slightly looser sidebearings.

**Body: PayPal Sans Small** — the small-optical-size companion. Same skeleton as PayPal Sans Big, tuned for 12–17px legibility (tighter sidebearings, larger x-height, more open counters at small sizes). Weights: 400, 500, 600, 700.

**Fallback chain**: `"PayPal Sans Small", "PayPal Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`. The chain commits to Helvetica Neue rather than system-ui — corporate-finance precedent over OS-native rendering.

**Mono: PayPal Mono** — the tabular companion for transaction numbers, balance figures, and ledger rows. OpenType `tnum` (tabular numerals) and `zero` (slashed zero) are explicitly enabled — the slashed zero is non-negotiable in financial type.

**OpenType features used on display:** `ss01` (stylistic-set 01, used for the alternate single-storey 'a' in PayPal headlines on certain campaigns), `kern` (always enabled).

### Hierarchy

| Role             | Font            | Size | Weight | Line Height | Letter Spacing | OT Features  | Notes                                          |
|------------------|-----------------|------|--------|-------------|----------------|--------------|------------------------------------------------|
| display-hero     | PayPal Sans Big | 72   | 700    | 1.05        | -1.5px         | kern         | Top-of-page hero headline, navy ink            |
| display-xl       | PayPal Sans Big | 60   | 700    | 1.05        | -1.2px         | kern         | Secondary hero, campaign band                  |
| display-lg       | PayPal Sans Big | 48   | 700    | 1.10        | -1px           | kern         | Section opener                                 |
| display-md       | PayPal Sans Big | 40   | 700    | 1.15        | -0.6px         | kern         | Feature card title (large)                     |
| display-sm       | PayPal Sans Big | 32   | 700    | 1.20        | -0.4px         | —            | Subsection lead                                |
| title-lg         | PayPal Sans Big | 28   | 700    | 1.25        | -0.2px         | —            | Card hero title                                |
| title-md         | PayPal Sans Sm  | 22   | 700    | 1.30        | 0              | —            | Card body title                                |
| title-sm         | PayPal Sans Sm  | 18   | 700    | 1.35        | 0              | —            | List heading                                   |
| body-lg          | PayPal Sans Sm  | 18   | 400    | 1.55        | 0              | —            | Lead paragraph                                 |
| body-md          | PayPal Sans Sm  | 16   | 400    | 1.50        | 0              | —            | Default body                                   |
| body-strong      | PayPal Sans Sm  | 16   | 700    | 1.50        | 0              | —            | Inline emphasis, "Get paid in seconds"         |
| body-sm          | PayPal Sans Sm  | 14   | 400    | 1.50        | 0              | —            | Secondary body, footer lists                   |
| caption          | PayPal Sans Sm  | 13   | 400    | 1.45        | 0              | —            | Metadata, "Last updated…"                      |
| legal            | PayPal Sans Sm  | 12   | 400    | 1.50        | 0              | —            | Footer disclosure, "Terms apply"               |
| eyebrow          | PayPal Sans Sm  | 13   | 700    | 1.20        | 1.5px (uppercase) | —         | Section eyebrow above display-lg               |
| button           | PayPal Sans Sm  | 16   | 700    | 1.20        | 0              | —            | All CTA labels                                 |
| nav-link         | PayPal Sans Sm  | 14   | 500    | 1.40        | 0              | —            | Top navigation                                 |
| number-tabular   | PayPal Mono     | 16   | 500    | 1.40        | 0              | tnum, zero   | Balance figures, transaction amounts           |
| code-micro       | PayPal Mono     | 12   | 400    | 1.40        | 0              | tnum         | API code samples, reference IDs                |

### Principles

- **Two optical sizes, one voice**: PayPal Sans Big (≥18px) and PayPal Sans Small (<18px) are the same skeleton tuned for two distinct optical worlds. Headlines breathe; body text holds.
- **Weight 700 carries display, weight 400 carries body**: There is no 600-weight headline. The contrast between 700 display and 400 body is the brand's typographic rhythm.
- **Mild negative tracking on display, zero on body**: -0.4px to -1.5px on display sizes; 0 on body. The brand is confident enough not to over-tighten.
- **Tabular numerals are non-negotiable for money**: Every dollar figure uses `tnum + zero`. The slashed zero distinguishes "0" from "O" — a financial-services discipline.
- **Eyebrow uppercase + 1.5px tracking**: The only place uppercase + tracked spacing appears. Used to label sections ("FOR BUSINESSES", "PERSONAL TOOLS").
- **Body line-height 1.50**: Generous but not literary. The brand is selling clarity, not editorial mood.
- **Navy as ink**: All primary text uses `#001c64` (Midnight Blue), not pure black. Subtle but it brand-tints every paragraph.
- **System fallback is Helvetica Neue, not system-ui**: A corporate-finance precedent — the brand prefers Helvetica's geometric authority over OS-native warmth.

## 4. Component Stylings

### Buttons

**Primary Navy CTA** ("Log In", "Send Money")
- Background: `#003087` (Brand Deep)
- Text: `#ffffff`, weight 700, 16px
- Padding: 14px vertical / 28px horizontal
- Height: 48px
- Radius: pill (9999)
- Hover: bg `#001c64`, translateY(-1px), shadow `rgba(0,28,100,0.18) 0 4px 12px`
- Active: bg `#001c64`, no lift, shadow collapses
- Use case: primary action on light surface — "Log In", "Continue", "Send"

**Primary Sky CTA** ("Sign Up Free", "Get the App")
- Background: `#009cde` (Brand Bright)
- Text: `#ffffff`, weight 700, 16px
- Padding: 14px / 28px
- Height: 48px
- Radius: pill
- Hover: bg `#0070ba`, translateY(-1px), sky-tinted shadow
- Use case: acquisition / sign-up CTA — distinguishes "I'm new" from "I have an account"

**Secondary Outline** ("Learn More", "How It Works")
- Background: `#ffffff`
- Text: `#003087`, weight 700
- Border: 2px solid `#003087`
- Padding: 12px / 26px
- Height: 48px
- Radius: pill
- Hover: bg `#f5f7fa` (cool-grey wash); border darkens to `#001c64`
- Use case: secondary action paired with a primary

**Tertiary Text Link** ("View All", "See Details")
- Background: transparent
- Text: `#0070ba`, weight 700, with underline-on-hover
- Padding: 0 (inline)
- Use case: in-text actions, see-more links inside body copy

**On-Navy CTA** ("Get Started")
- Background: `#ffffff`
- Text: `#003087`, weight 700
- Same pill geometry as primary
- Hover: bg dims to `rgba(255,255,255,0.92)`
- Use case: primary CTA when sitting on a navy hero band

### Cards

**Feature Card (Light)**
- Background: `#f5f7fa` (cool-grey)
- Border: 1px solid `#eaeced` (border-soft)
- Radius: 16px
- Padding: 24px
- No default shadow; hover gains `rgba(0,28,100,0.10) 0 4px 12px`
- Title: title-lg (28px / 700)
- Body: body-md (16px / 400)
- Use case: 3-up feature grid below hero

**Product Card (White)**
- Background: `#ffffff`
- Border: 1px solid `#cbd2d6` (border)
- Radius: 16px
- Padding: 24px
- Shadow: `rgba(0,28,100,0.06) 0 1px 2px` (ambient)
- Hover: shadow → `rgba(0,28,100,0.12) 0 16px 32px -8px`, translateY(-2px)
- Use case: pricing card, account-type comparison

**Card on Navy**
- Background: `#0a3d97` (surface-navy-elevated)
- Radius: 16px
- Padding: 24px
- Text: `#ffffff` headline, `#aab7c4` body
- No border; depth via surface contrast against `#003087` parent
- Use case: product-mockup card inside navy hero

### Badges, Tags, Pills

**Status Pill**
- Background: `#eaeced` (surface-strong)
- Text: `#001c64`, weight 700, 12px
- Padding: 4px / 10px
- Radius: pill
- Use case: "New", "Beta", "Verified"

**Semantic Badge**
- Success: bg `rgba(16,128,67,0.12)`, text `#108043`, weight 700, 12px
- Warning: bg `rgba(245,166,35,0.14)`, text `#a96b00`
- Danger: bg `rgba(210,0,0,0.10)`, text `#d20000`
- Use case: transaction status, account verification state

### Inputs / Forms

**Text Input**
- Background: `#ffffff`
- Border: 1px solid `#9da3a6` (border-strong)
- Radius: 8px
- Height: 48px
- Padding: 12px / 16px
- Font: body-md (16px / 400)
- Focus: border `#0070ba` 2px, ring `0 0 0 3px rgba(0,156,222,0.45)`
- Error: border `#d20000` 2px; helper text `#d20000`
- Use case: login email, amount input, address fields

**Amount Input** (special case)
- Same as text input; the value uses `number-tabular` (PayPal Mono, tnum, zero, 16px / 500)
- Currency symbol prefix in `text-muted`
- Right-aligned numerals — "$1,234.56" reads ledger-style

### Navigation

**Top Nav (Light)**
- Height: 72px
- Background: `#ffffff`
- Border-bottom: 1px solid `#eaeced`
- Logo left (PayPal wordmark, navy `#003087`), nav links centre, "Log In" + "Sign Up" CTAs right
- Nav link: 14px / 500, colour `#001c64`; hover gains a 2px Sky Blue underline rising from the baseline
- Sticky on scroll with a subtle shadow `rgba(0,28,100,0.06) 0 1px 2px` once content scrolls past

**Mega-Menu Panel**
- Background: `#ffffff`
- Border-top: 1px solid `#eaeced`
- Padding: 32px / 80px
- Three-column grid: "Personal", "Business", "Developer"
- Each column header: eyebrow (13px / 700, uppercase, 1.5px tracking, colour `#0070ba`)
- Links below: title-sm (18px / 700) + body-sm description (14px / 400, `#545d68`)

**Footer (Navy)**
- Background: `#001c64`
- Text: `#aab7c4` (on-navy-soft) for links, `#ffffff` for category headers
- Padding: 64px vertical
- Five-column link grid above; legal copy + locale switcher below the rule
- Bottom rule: `rgba(255,255,255,0.20)` 1px

### Selectors

**Country/Currency Picker**
- Pill button at 48px, `#ffffff` bg, `#cbd2d6` border, navy text
- Flag glyph + ISO code + chevron-down
- Opens a `#ffffff` dropdown panel with shadow-elevated, 320px wide, max-height 360px scrollable

### Tabs

**Pill Tabs** (used on pricing comparators)
- Container: `#eaeced` bg, pill radius, 4px inner padding
- Active tab: `#ffffff` bg, `#001c64` text, weight 700, soft shadow `rgba(0,28,100,0.06) 0 1px 2px`
- Inactive tab: transparent bg, `#545d68` text
- Transition: tab background fades over 200ms ease-standard

### Tooltips

- Background: `#001c64` (midnight)
- Text: `#ffffff`, weight 500, 13px
- Padding: 8px / 12px
- Radius: 6px
- Arrow: 6px triangle in same midnight
- Max-width: 240px

### Toasts

- Success: bg `#ffffff`, left-border 4px `#108043`, ink `#001c64`, 24px padding, shadow standard
- Error: bg `#ffffff`, left-border 4px `#d20000`
- Info: bg `#ffffff`, left-border 4px `#009cde`
- 4-second auto-dismiss; reduced-motion users get fade-only

### Modals

- Overlay: `rgba(0, 28, 100, 0.55)` (navy-tinted, not pure black)
- Dialog: bg `#ffffff`, radius 16px, max-width 480px, padding 32px
- Header: title-md (22px / 700), navy ink
- Close glyph top-right, 24px, `#545d68`
- Primary action right-aligned in dialog footer

### Decorative

**Brand Glyph (PP Monogram)**
- Two interlocking "P" forms, the back P in `#003087`, the front P in `#009cde`
- Used at hero scale (240×240) as a brand-presence element
- Also appears at 32×32 favicon scale

## 5. Layout Principles

### Spacing System

Base unit: **4px**. Scale: 4, 8, 12, 16, 20, 24, 32, 48, 80, 120. The "section" spacer (80px vertical) marks the rhythm between marketing sections; "hero" (120px) is reserved for the top-of-page hero band. PayPal's spacing reads denser than Stripe and looser than Wise — banking-class but not editorial.

### Grid & Container

- **Page max-width**: 1280px, centred, 24px gutters mobile / 32px desktop
- **Prose width**: 720px for editorial copy
- **Hero treatment**: full-bleed background colour, content constrained to 1280px
- **Feature grid**: 12-col base; common patterns are 3×4 (three feature cards) and 2×6 (two-up product comparison)
- **Card grid gap**: 24px

### Whitespace Philosophy

PayPal favours **generous vertical rhythm** between sections (80–120px) but **tight horizontal density** within feature cards (24–32px padding). The result reads as "a bank with a clean lobby" — open between rooms, focused inside them.

### Section Cadence

Pages alternate three modes: **white default → cool-grey band (`#f5f7fa`) → white**. A full-bleed **navy hero** appears at the top of campaign pages and at the footer. Two consecutive navy bands are avoided — the eye needs a white moment between them.

## 6. Shapes & Radius Scale

| Tier        | Value | Use                                             |
|-------------|-------|-------------------------------------------------|
| None        | 0     | Banner promo bars, full-bleed hero edges        |
| Micro       | 2     | Small status dots, inline check glyphs          |
| XS          | 4     | Tooltip arrows, micro-badges                    |
| SM          | 8     | Inputs, dropdowns, secondary cards              |
| MD          | 12    | Mid-size cards, modals (smaller)                |
| LG          | 16    | Feature cards, modals (default), product tiles  |
| XL          | 24    | Hero cards, large image containers              |
| Pill        | 9999  | All CTAs, status badges, country pickers       |

PayPal's signature radius is **pill on every CTA** — the brand standardised on pill-shaped buttons across web and app in the 2020 refresh, and it's now the most recognisable component shape after the wordmark itself. Cards land at 16px (default) or 24px (hero).

## 7. Depth & Elevation

| Level | Treatment                                                                 | Use                                              |
|-------|---------------------------------------------------------------------------|--------------------------------------------------|
| 0     | Flat — no shadow, no border                                               | Hero text, body paragraphs                      |
| 1     | 1px hairline `#cbd2d6`, no shadow                                         | Default white-on-white card                     |
| 2     | Ambient shadow `rgba(0,28,100,0.06) 0 1px 2px`                            | Sticky nav post-scroll, low-eminence cards     |
| 3     | Standard shadow `rgba(0,28,100,0.08) 0 4px 12px`                          | CTA hover, hover-lifted card                    |
| 4     | Elevated shadow `rgba(0,28,100,0.12) 0 16px 32px -8px`                    | Mega-menu panel, dropdown picker                |
| 5     | Deep shadow `rgba(0,28,100,0.18) 0 30px 60px -20px`                       | Modal dialog                                    |

### Shadow Philosophy

Shadows are **navy-tinted at low opacity** — `rgba(0, 28, 100, ...)` rather than `rgba(0, 0, 0, ...)`. The tint is faint but intentional: every depth-step carries a faint brand voice. Multi-layer shadows (ambient + standard + elevated) are used sparingly; most cards rely on a single 1px hairline or a single standard shadow. PayPal does not stack three-layer shadows the way Stripe does — its corporate-finance posture wants restraint, not luxury.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — most state changes
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modals entering, hero animations
- **Entrance**: `cubic-bezier(0, 0, 0.2, 1)` — fade-ins from transparent
- **Exit**: `cubic-bezier(0.4, 0, 1, 1)` — fade-outs to transparent

### Durations

- **Fast**: 120ms — micro hover (button colour shift)
- **Standard**: 200ms — most state changes (card hover, tab switch)
- **Slow**: 320ms — modal entrance, mega-menu reveal
- **Page transition**: 480ms — route-level fades

### Per-Component Recipes

- **Button hover**: `transform: translateY(-1px); transition: transform 200ms ease-standard, box-shadow 200ms ease-standard, background-color 120ms ease-standard`. Shadow blooms from ambient → standard.
- **Card hover**: `transform: translateY(-2px); transition: transform 200ms ease-standard, box-shadow 200ms ease-standard`. Shadow blooms from ambient → elevated.
- **Link hover**: 2px Sky Blue underline rises from baseline over 120ms ease-emphasized. The underline grows from 0 to full width left-to-right.
- **Mega-menu**: 320ms ease-emphasized opacity + 8px translateY drop-down.
- **Modal entrance**: 320ms ease-emphasized; overlay fades in over 200ms; dialog scales from 0.96 → 1.0 simultaneously.
- **Toast**: enter from translateY(16px) + fade over 200ms; auto-exit at 4s with 200ms fade.

### Reduced Motion

Strictly respected via `@media (prefers-reduced-motion: reduce)`. All translateY animations collapse to opacity-only fades. Hover lifts and parallax effects are disabled. Modal scale-up is replaced with instant opacity fade. Underline-grow becomes instant.

## 9. Accessibility & A11y

### Contrast Pairs

- `#001c64` text on `#ffffff` bg: **18.4:1** — AAA at all sizes
- `#2c2e2f` body on `#ffffff` bg: **11.2:1** — AAA
- `#ffffff` on `#003087` brand: **11.7:1** — AAA
- `#ffffff` on `#009cde` brand-bright: **3.4:1** — AA Large only; PayPal compensates with weight 700 button labels and 48px button height
- `#0070ba` link on `#ffffff` bg: **5.8:1** — AA at body sizes
- `#545d68` muted on `#ffffff`: **6.7:1** — AA at body sizes

### Focus Indicators

- 3px solid `rgba(0,156,222,0.45)` (sky-blue ring) with 2px offset on every interactive element
- Focus ring uses Sky Blue, not Deep Blue — better visibility on white
- Pill buttons get a fully pill-shaped ring (matches the radius)
- Focus is *always visible* — no `outline: none` without a replacement

### ARIA Patterns

- **Combobox**: country/currency picker uses `role="combobox"` with `aria-expanded`, `aria-controls` pointing to listbox
- **Listbox**: dropdowns use `role="listbox"`, options `role="option"` with `aria-selected`
- **Dialog**: modals use `role="dialog"`, `aria-modal="true"`, focus-trap inside dialog, return focus to trigger on close
- **Tabs**: `role="tablist"` / `role="tab"` / `role="tabpanel"` with `aria-controls` linking
- **Live regions**: toast container is `aria-live="polite"`; payment status uses `aria-live="assertive"`

### Keyboard Nav

- Tab order matches visual flow: header → hero → feature grid → footer
- Mega-menu opens on Enter/Space, closes on Escape, items navigable with arrow keys
- Modal traps focus; Escape closes; Tab cycles within
- Form fields: Enter submits when in last field; Tab advances; Shift+Tab retreats
- Buttons: Space and Enter both activate (HTML `<button>` default)

### Screen Reader Hints

- All interactive icons carry `aria-label` ("Open menu", "Close dialog")
- The PP monogram has `role="img"` with `aria-label="PayPal"`
- Decorative illustrations use `aria-hidden="true"`
- Currency amounts use visible "$" + numerals (no symbolic-only currency)
- Visually hidden helper text via `.sr-only` class for compound interactions

### Reduced Motion

Honored via `prefers-reduced-motion: reduce` — all transform animations collapse to opacity-only. Tested across hover, modal, mega-menu, toast.

## 10. Responsive Behavior

### Breakpoints

| Name    | Width  | Use                                   |
|---------|--------|---------------------------------------|
| mobile  | <640   | Stacked single-column                 |
| tablet  | 640–1024 | 2-col grid, condensed nav            |
| desktop | 1024–1280 | 3-col grid, full nav                |
| wide    | ≥1280  | Full layout, max-width container     |

### Touch Targets

Minimum 44×44px touch target. CTAs ship at 48px height by default; small icon buttons (close, menu) ship at 44×44px.

### Collapsing Strategy

- **Top nav**: collapses into hamburger below 1024px; hamburger expands to full-screen overlay menu
- **Hero**: display-hero scales 72px → 48px → 40px across desktop → tablet → mobile
- **Feature grid**: 3-col → 2-col (tablet) → 1-col (mobile)
- **Footer**: 5-col link grid → 2-col → accordion (mobile)
- **Mega-menu**: replaced with mobile drawer pattern below 1024px

### Image Behavior

- Hero illustrations: `object-fit: cover` with `aspect-ratio: 16/9` desktop, `1/1` mobile
- Product mockups: `aspect-ratio: 4/3`, `object-fit: contain`
- Use `srcset` with 1x, 2x, 3x renditions; `loading="lazy"` for below-fold

### Container Queries

Used on feature cards: when card width <320px, the icon + title + body stack vertically; when ≥320px, icon left + title-and-body right.

## 11. Content & Voice

### Tone

PayPal's tone is **warm-corporate** — formal enough to be trusted with money, casual enough to feel like the brand has met a human. Sentences are short and active. The voice favours "we" over "PayPal" in body copy ("We help you send money in seconds"). Display headlines lean declarative, not promotional ("Send money. It's that simple.").

### Microcopy Patterns

- **Button verbs**: "Send", "Receive", "Pay", "Get Started", "Sign Up Free", "Log In", "Continue"
- **Error message recipe**: `[What went wrong]. [What to do next].` Example: "We couldn't process this payment. Try a different card or contact your bank."
- **Success confirmations**: "Payment sent" + amount + recipient name + transaction ID. Always show the money figure.
- **Loading states**: "Hang on…" rather than "Loading…" — softer, more human.

### Empty States

- **No transactions**: "No activity yet. Once you send or receive money, you'll see it here."
- **No notifications**: "All caught up." (single-line, friendly)
- Empty states **never blame the user** — they describe the state and offer a next action.

### CTA Verb Conventions

- **Acquisition**: "Sign Up Free" (Sky CTA)
- **Sign-in**: "Log In" (Navy CTA)
- **Payment**: "Send", "Pay Now", "Continue to Pay"
- **Exploration**: "Learn More", "How It Works", "See How"
- **Confirmation**: "Confirm and Send" (never just "Submit")

PayPal almost never uses "Get Started" alone — it pairs the verb with the value ("Get Started — It's Free", "Get Started in 2 Minutes").

## 12. Dark Mode & Theming

**Light-only — no dedicated dark mode on the marketing site.** PayPal's app product surfaces (the consumer wallet on iOS/Android) ship a dark mode, but the marketing pages and the web wallet remain light-only. The closest brand pattern is the **navy hero band** (`#003087` / `#001c64`) which functions as a "campaign dark mode" — full-bleed navy with white type — but it is editorial framing, not a token swap.

If you must extend to a true dark theme:
- `bg`: `#0a1530` (one step deeper than midnight — true dark surface)
- `bg-elevated`: `#001c64`
- `text`: `#ffffff`
- `text-muted`: `#aab7c4`
- `brand`: `#3eb6f5` (lifted Sky Blue — the deep navy doesn't read as "active" on dark)
- `border`: `rgba(255,255,255,0.12)`

## 13. Lineage & Influences

PayPal's visual system carries the DNA of **early-2000s Frutiger humanism** (the original wordmark used Verdana, then ITC Officina, before settling on the custom PayPal Sans Big in 2014). The dual-blue voltage — Deep `#003087` over Sky `#009cde` — was first introduced in the 1999 Confinity logo and has survived every redesign since, making it one of the longest-running brand colour pairings in tech. The 2020 refresh replaced soft-radius rounded buttons with **full pills**, aligning the visual system with consumer-payment apps like Cash App, Venmo (which PayPal owns), and Square.

The corporate-trust posture borrows from **classical financial-services design**: think Visa's blue, American Express's blue, Citibank's blue. PayPal sits squarely inside that lineage, but its sky-blue counterpoint distinguishes it — the second voltage softens the navy without breaking it.

What it rejects: **crypto-native maximalism** (no gradients, no neon), **Silicon-Valley flat-illustration cliché** (PayPal uses photography and isometric product mockups, not abstract blob illustrations), and **single-blue minimalism** (Coinbase, Stripe). The dual-blue commitment is non-negotiable.

**Influences:**
- **Visa / American Express** ([visa.com](https://www.visa.com)) — Corporate-trust blue lineage; financial-services typographic restraint
- **Frutiger / ITC Officina** — Pre-PayPal Sans Big, the wordmark drew from Frutiger's geometric humanism
- **Stripe** ([stripe.com](https://stripe.com)) — Single-blue brand discipline; PayPal pushed back by keeping two
- **Venmo** ([venmo.com](https://venmo.com)) — PayPal-owned, the playful counterpoint that lets PayPal stay corporate

## 14. Do's and Don'ts

**Do:**
- Use Deep Blue `#003087` for the wordmark and primary "Log In" CTA — never substitute mid-blue here
- Use Sky Blue `#009cde` for "Sign Up Free" and acquisition-flavoured CTAs
- Use PayPal Sans Big at weight 700 for display, weight 400 of PayPal Sans Small for body
- Apply tabular numerals + slashed zero on every dollar figure
- Keep CTAs pill-shaped (full radius) — it's the brand's signature shape
- Treat the "PP" monogram as a brand-presence element at hero scale
- Use cool-grey neutrals (`#f5f7fa`, `#cbd2d6`); the system is cool-toned, not warm
- Tint shadows navy `rgba(0, 28, 100, ...)`, not pure black
- Footer should always be navy `#001c64` — closes the page in brand voltage
- Use "Send", "Pay", "Continue" as primary CTA verbs — payment-specific, not generic

**Don't:**
- Don't use a single blue — the dual-voltage navy + sky is the brand's defining trait
- Don't add a third brand colour; yellow/green/red appear *only* as semantic states
- Don't square the corners on CTAs — pills are non-negotiable
- Don't use system-ui as a fallback — Helvetica Neue is the brand precedent
- Don't render large dollar figures in a proportional font; use PayPal Mono with `tnum + zero`
- Don't use warm-grey neutrals (`#f5f5f0`); cool-grey distinguishes PayPal from Wise
- Don't apply heavy decorative shadows — depth is hairlines and surface contrast
- Don't use abstract blob illustrations — PayPal uses photography and isometric mockups
- Don't introduce gradient brand fills; the two blues stay flat
- Don't use "Submit" — always pair the verb with the action ("Confirm and Send")

## 15. Agent Prompt Guide

### Quick Color Reference

```
Brand Deep:   #003087
Brand Bright: #009cde
Ink/Midnight: #001c64
Canvas:       #ffffff
Cool Band:    #f5f7fa
Body:         #2c2e2f
Muted:        #545d68
Border:       #cbd2d6
Link:         #0070ba
Success:      #108043
Danger:       #d20000
```

### Example Component Prompts

1. *"Create a PayPal-style hero: pure white background, 72px PayPal Sans Big headline at weight 700 in midnight blue (`#001c64`) with -1.5px tracking, 18px body in `#2c2e2f`, and two pill-shaped CTAs side-by-side — primary in Deep Blue (`#003087`) labelled 'Log In', secondary in Sky Blue (`#009cde`) labelled 'Sign Up Free'."*

2. *"Design a feature card for a PayPal marketing page: background `#f5f7fa`, 16px radius, 24px padding, 1px border `#eaeced`. Title 28px PayPal Sans Big weight 700 in `#001c64`, body 16px weight 400 in `#2c2e2f`. On hover, lift the card 2px and bloom shadow to `rgba(0,28,100,0.12) 0 16px 32px -8px`."*

3. *"Build a PayPal balance display: white card, 16px radius, 1px border `#cbd2d6`. Top label 'Available balance' in 13px eyebrow caps with 1.5px tracking, sky-blue (`#0070ba`). Below, a 40px tabular figure ($1,234.56) in PayPal Mono with `tnum + zero`, weight 500, midnight ink. Right-aligned 'Transfer' pill button in Deep Blue."*

4. *"Compose a PayPal navy hero band: full-bleed `#003087` background, `#ffffff` 60px display-xl headline, `#aab7c4` 18px subheadline, white pill CTA at 48px with `#003087` text labelled 'Get Started'. Add a hairline `rgba(255,255,255,0.20)` 1px divider above the CTA row."*

5. *"Design a PayPal transaction toast: white card, 24px padding, 12px radius, 4px left border in `#108043` (success). Title 'Payment sent' 16px / 700 in `#001c64`. Below, '$50.00 to Alex Chen' using PayPal Mono tnum for the figure, body sans for the name. Auto-dismiss after 4 seconds with 200ms fade."*

6. *"Create a PayPal pricing comparison: three white cards in a 3-col grid, 24px gap, each with 1px border `#cbd2d6` and 16px radius. Centre card is the 'recommended' tier — it gets a 2px Sky Blue (`#009cde`) border, a 'Most Popular' pill badge in Sky Blue at top, and a Deep Blue pill CTA. Outer cards stay quiet with neutral borders."*

### Iteration Guide

1. **Audit your blues**: if you only have one blue, you don't have PayPal. Add the second voltage immediately.
2. **Pill everything actionable**: square CTAs read as "not PayPal". Set `border-radius: 9999px` on every button.
3. **Replace black ink with `#001c64`**: this single substitution makes any UI feel half-PayPal. The faint navy tint is the brand's quietest signature.
4. **Switch to cool-grey neutrals**: if the page feels warm, you're closer to Wise. Move toward `#f5f7fa` and `#cbd2d6` for surfaces and borders.
5. **Use tabular monospace on every dollar figure**: this is the single biggest lift for fintech credibility. Add `font-feature-settings: "tnum", "zero"` to numeric cells.
6. **Tint the shadows navy**: replace `rgba(0,0,0,...)` with `rgba(0, 28, 100, ...)` at the same opacity. Subtle but it brand-tints depth.
7. **Add a navy footer**: closing the page in `#001c64` with white type is the brand's most consistent layout decision.
8. **Pair Deep + Sky CTAs together**: the canonical hero pattern is Login (Deep) + Sign Up (Sky), side-by-side, pill-shaped, weight-700 labels.
