---
name: Monday.com
tagline: Project management in confident red-pink — Poppins display at bold weights with a colorful saturated palette and a playfully energetic visual rhythm.
author: webdesignhot
source_url: https://monday.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [saas, productivity]
tags: [light, colorful, poppins, bold, energetic, project-management]
preview_swatch: ['#ffffff', '#ff3d57', '#323338']
related: [asana, airtable, notion]
description: 'Monday.com''s marketing surface is unapologetically colorful project management dressed in confident red-pink. The canvas is pure white `#ffffff`, the type is Poppins at decisively bold weights (600–800 for display) sitting in dense, energetic layouts, and the brand voltage is a saturated `#ff3d57` red-pink that anchors every primary CTA, brand wordmark, and feature accent. Where Linear is monochrome and Notion is editorial-warm, Monday.com is **chromatic-saturated** — its color system spans red-pink, sky-blue, lemon-yellow, leaf-green, royal-purple, and orange, with each color carrying semantic weight inside the actual product (column types, status pills, priority tags). Demo cards carry product UI fragments showing real boards with real colored status chips. Section rhythm is energetic — short bands, dense feature grids, multiple CTAs per viewport. Headlines are bold (700–800), tracking is mostly neutral, and the system favors emphasis through scale and color over restraint. The result is "happy work software" — playful, optimistic, and explicitly not minimalist.'

colors:
  bg: '#ffffff'                  # pure white canvas
  bg-soft: '#f6f7fb'             # cool soft surface for cards
  bg-elev: '#ffffff'             # elevated surface stays white
  bg-strong: '#eceef5'           # cool pre-footer band
  bg-dark: '#292f4c'             # navy mid-page band — never pure black
  bg-dark-elev: '#363b5e'
  surface: '#f6f7fb'
  text: '#323338'                # ink — Monday's signature near-black
  text-body: '#525363'           # default running-text
  text-muted: '#676879'          # captions, footer links
  text-faint: '#9698a6'          # placeholder, disabled
  brand: '#ff3d57'               # signature red-pink — primary brand voltage
  brand-hover: '#e8324a'         # press / hover
  brand-active: '#cc2a3f'        # active / focused
  brand-soft: '#ffe4e8'          # rose pastel surface
  brand-deep: '#a31a30'          # deep brand for accents-on-brand
  on-brand: '#ffffff'
  on-dark: '#ffffff'
  link: '#0073ea'                # link blue — distinct from brand
  link-hover: '#0060c2'
  # Color system — semantic colors that double as product UI status colors
  color-blue: '#0086c0'          # info / blueberry status
  color-blue-soft: '#cce5f5'
  color-green: '#00ca72'         # done / mint status
  color-green-soft: '#cdf4e3'
  color-yellow: '#fdab3d'         # in-progress / lemon status
  color-yellow-soft: '#feeac4'
  color-orange: '#ff7a3a'         # working-on-it / orange status
  color-orange-soft: '#ffe1d0'
  color-purple: '#9d50dd'         # priority / grape status
  color-purple-soft: '#ebd9f8'
  color-pink: '#ff158a'          # done-different / cherry status
  color-pink-soft: '#ffd1e6'
  color-teal: '#22dabe'          # alt-success / mint variant
  color-teal-soft: '#cdf4eb'
  color-red: '#e2445c'            # stuck / strawberry status
  color-red-soft: '#fbd3d8'
  border: '#d0d4e4'              # cool hairline
  border-strong: '#a8acc4'       # stronger card border
  border-soft: '#eceef5'         # softer divider
  shadow-tint: 'rgba(41, 47, 76, 0.06)'
  shadow-deep: 'rgba(41, 47, 76, 0.18)'
  info: '#0086c0'
  success: '#00ca72'
  warning: '#fdab3d'
  danger: '#e2445c'
  selection: 'rgba(255, 61, 87, 0.18)'
  ring: 'rgba(255, 61, 87, 0.45)'

typography:
  display:
    family: '"Poppins", "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 600, 700, 800]
    opentype-features: 'Poppins defaults — geometric sans without aggressive feature toggling'
  body:
    family: '"Figtree", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 600]
    opentype-features: 'tnum inside data tables and metric chips'
  mono:
    family: '"SF Mono", "JetBrains Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-hero:    { size: 80, weight: 800, lineHeight: 1.05, tracking: '-0.02em',  family: display, notes: 'mega hero — single anchor' }
    display-xl:      { size: 64, weight: 700, lineHeight: 1.08, tracking: '-0.018em', family: display, notes: 'homepage hero h1' }
    display-lg:      { size: 48, weight: 700, lineHeight: 1.10, tracking: '-0.014em', family: display, notes: 'feature section h2' }
    display-md:      { size: 36, weight: 700, lineHeight: 1.18, tracking: '-0.01em',  family: display, notes: 'pricing section heads' }
    title-lg:        { size: 28, weight: 700, lineHeight: 1.25, tracking: '-0.005em', family: display }
    title-md:        { size: 22, weight: 600, lineHeight: 1.30, tracking: 0,           family: display }
    title-sm:        { size: 18, weight: 600, lineHeight: 1.35, tracking: 0,           family: body }
    label-md:        { size: 16, weight: 600, lineHeight: 1.40, tracking: 0,           family: body }
    button:          { size: 16, weight: 600, lineHeight: 1.20, tracking: 0,           family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: 0,           family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.55, tracking: 0,           family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.50, tracking: 0,           family: body }
    caption:         { size: 13, weight: 600, lineHeight: 1.40, tracking: '0.04em',    family: body, notes: 'uppercase eyebrow with brand-pink accent' }
    caption-tabular: { size: 13, weight: 500, lineHeight: 1.30, tracking: 0,           family: body, opentype: 'tnum' }
    legal:           { size: 12, weight: 400, lineHeight: 1.40, tracking: '0.01em',    family: body }
    code-md:         { size: 14, weight: 400, lineHeight: 1.50, tracking: 0,           family: mono }

radius:
  micro: 4
  sm: 6
  md: 8
  lg: 12
  xl: 20
  pill: 9999
  full: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  card-padding-default: 32
  card-padding-large: 48
  section-padding: 96

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: md
    padding: '14px 24px'
    use: 'primary CTA — Get started / Try it free — red-pink anchor'
  button-primary-hover:
    backgroundColor: brand-hover
    textColor: on-brand
    use: 'pointer hover'
  button-secondary:
    backgroundColor: bg
    textColor: text
    rounded: md
    padding: '14px 24px'
    border: '2px solid border-strong'
    use: 'Watch demo / Sign in pair next to primary — note 2px border, not 1px'
  button-tertiary:
    backgroundColor: transparent
    textColor: link
    rounded: md
    padding: '12px 16px'
    use: 'inline link-style'
  button-on-dark:
    backgroundColor: bg
    textColor: text
    rounded: md
    padding: '14px 24px'
    use: 'white CTA over navy mid-page band'
  button-icon:
    backgroundColor: bg
    textColor: text
    rounded: full
    size: 40
    border: '1px solid border'
    use: 'carousel arrows, share'
  card-default:
    backgroundColor: bg-soft
    textColor: text
    rounded: lg
    padding: 32
    use: 'default content card on white canvas — subtle cool tone'
  card-elevated:
    backgroundColor: bg
    textColor: text
    rounded: lg
    padding: 32
    border: '1px solid border-soft'
    shadow: standard
    use: 'pricing tier, integration, feature card'
  card-feature-blue:
    backgroundColor: color-blue-soft
    textColor: text
    rounded: xl
    padding: 48
    use: 'feature demo card — blue accent (info / overview)'
  card-feature-green:
    backgroundColor: color-green-soft
    textColor: text
    rounded: xl
    padding: 48
    use: 'feature demo card — green accent (status / progress)'
  card-feature-purple:
    backgroundColor: color-purple-soft
    textColor: text
    rounded: xl
    padding: 48
    use: 'feature demo card — purple accent (priority / advanced)'
  card-feature-yellow:
    backgroundColor: color-yellow-soft
    textColor: text
    rounded: xl
    padding: 48
    use: 'feature demo card — yellow accent (in-progress / activity)'
  card-feature-pink:
    backgroundColor: brand-soft
    textColor: text
    rounded: xl
    padding: 48
    use: 'feature demo card — brand-pink accent (CTA-anchored)'
  hero-card-dark:
    backgroundColor: bg-dark
    textColor: on-dark
    rounded: xl
    padding: 64
    use: 'mid-page navy CTA — section reset'
  status-chip-blue:
    backgroundColor: color-blue
    textColor: on-brand
    rounded: pill
    padding: '4px 12px'
    fontSize: 12
    use: 'product UI status pill — blueberry'
  status-chip-green:
    backgroundColor: color-green
    textColor: on-brand
    rounded: pill
    padding: '4px 12px'
    fontSize: 12
    use: 'product UI status pill — done / mint'
  status-chip-yellow:
    backgroundColor: color-yellow
    textColor: text
    rounded: pill
    padding: '4px 12px'
    fontSize: 12
    use: 'product UI status pill — in-progress / lemon (yellow uses dark text)'
  status-chip-orange:
    backgroundColor: color-orange
    textColor: on-brand
    rounded: pill
    padding: '4px 12px'
    fontSize: 12
    use: 'product UI status pill — working-on-it / orange'
  status-chip-purple:
    backgroundColor: color-purple
    textColor: on-brand
    rounded: pill
    padding: '4px 12px'
    fontSize: 12
    use: 'product UI status pill — priority / grape'
  status-chip-red:
    backgroundColor: color-red
    textColor: on-brand
    rounded: pill
    padding: '4px 12px'
    fontSize: 12
    use: 'product UI status pill — stuck / strawberry'
  badge-tag:
    backgroundColor: bg-soft
    textColor: text-muted
    rounded: pill
    padding: '4px 10px'
    fontSize: 12
    use: 'category / generic pill outside the colored-status system'
  text-input:
    backgroundColor: bg
    textColor: text
    rounded: md
    padding: '12px 14px'
    height: 44
    border: '1px solid border-strong'
    use: 'email signup, in-page demo input'
  text-input-focus:
    border: '1px solid brand'
    shadow: '0 0 0 3px rgba(255,61,87,0.2)'
  top-nav:
    backgroundColor: bg
    textColor: text
    height: 64
    use: 'opaque white bar, no backdrop-blur — Monday wordmark left, mega-menu center, primary CTA right'
  footer:
    backgroundColor: bg-dark
    textColor: on-dark
    padding: 96
    use: 'navy footer carrying multi-column link list — distinctive dark footer over white body'
  toast:
    backgroundColor: bg-dark
    textColor: on-dark
    rounded: md
    padding: '12px 16px'
    shadow: deep

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.16, 1, 0.3, 1)'
  ease-spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-instant: 80
  duration-fast: 160
  duration-standard: 240
  duration-slow: 380
  duration-page: 500
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transforms removed, transitions reduced to 100ms opacity-only; status-chip color-rotation animation skips to first state'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  ambient: '0 1px 2px rgba(41,47,76,0.06)'
  standard: '0 6px 16px rgba(41,47,76,0.08)'
  elevated: '0 14px 32px rgba(41,47,76,0.12), 0 2px 6px rgba(41,47,76,0.06)'
  deep: '0 24px 48px rgba(41,47,76,0.18), 0 6px 12px rgba(41,47,76,0.08)'
  ring: '0 0 0 3px rgba(255,61,87,0.45)'

accessibility:
  contrast-text-on-bg: 12.6                # AAA — #323338 on #ffffff
  contrast-body-on-bg: 7.7                 # AAA — #525363 on #ffffff
  contrast-muted-on-bg: 5.4                # AA — #676879 on #ffffff
  contrast-on-brand: 4.5                   # AA — white on #ff3d57 at body sizes; AAA at display
  contrast-on-dark: 12.4                   # AAA — white on #292f4c
  contrast-link-on-bg: 5.7                 # AA — #0073ea on #ffffff
  focus-ring: '3px solid rgba(255,61,87,0.45) with 2px offset'
  reduced-motion-honored: true
  keyboard-nav-honored: true

dark-mode: 'optional — Monday.com''s in-product UI ships a dark variant where canvas inverts to navy `#1c1f3a`, status chips brighten slightly, and brand red-pink is preserved. Marketing surface is light-only with the navy footer providing intra-page contrast.'
---

## 1. Visual Theme & Atmosphere

Monday.com's marketing surface is unapologetically colorful project management dressed in confident red-pink. The canvas is pure white `#ffffff`, the type is Poppins at decisively bold weights (700–800 for display) sitting in dense, energetic layouts, and the brand voltage is a saturated `#ff3d57` red-pink that anchors every primary CTA, brand wordmark, and feature accent.

Where Linear is monochrome and Notion is editorial-warm, Monday.com is **chromatic-saturated** — its color system spans red-pink, sky-blue, lemon-yellow, leaf-green, royal-purple, and orange, with each color carrying semantic weight inside the actual product (column types, status pills, priority tags). The marketing surface dramatizes this product reality: feature cards rotate through pastel-tinted versions of the status colors (blueberry, mint, lemon, grape, cherry, strawberry), and demo cards always carry real product UI fragments with real colored status chips.

Section rhythm is energetic — short bands, dense feature grids, multiple CTAs per viewport. Headlines are bold (700–800), tracking is mostly neutral with light negative compression at large sizes, and the system favors emphasis through scale and color over restraint. The footer is **navy** — distinctive in a sea of cream and white footers — which provides intra-page contrast without inverting the body canvas.

The result is "happy work software" — playful, optimistic, and explicitly not minimalist. Monday.com rejects the editorial-restraint tradition that Linear and Notion popularized; instead it commits to saturated color, decisive bold weights, and an energetic, almost effervescent voice.

**Key Characteristics:**
- Canvas is **pure white** `#ffffff`. Off-white reads wrong — Monday's colors need a clean canvas to pop.
- Brand voltage is `#ff3d57` red-pink — confident, saturated, never desaturated.
- Display weight is **700–800** — decisively bold, the opposite of Linear's 500 discipline.
- Type family is **Poppins** for display + Figtree for body — geometric, friendly, geometric-modern.
- The eight-color status system (blue, green, yellow, orange, purple, pink, teal, red) doubles as product UI status colors and marketing pastel surfaces.
- Footer is **navy** `#292f4c` — distinctive against the white body.
- Section padding is **96px** between bands.
- Card radius scale: 20px (xl) for feature cards, 12px for primary CTAs, 8px for default cards.
- Secondary buttons use **2px border** — not 1px — for visual weight to match the bold display.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#ffffff`): Pure white — Monday's color-confident commitment.
- **Text / Ink** (`#323338`): Display, body emphasis, primary button text on light surfaces.
- **Brand / Red-Pink** (`#ff3d57`): Primary CTA, brand wordmark, primary feature accent.

### Brand & Dark
- **Brand Hover** (`#e8324a`): Press state.
- **Brand Active** (`#cc2a3f`): Focused.
- **Brand Soft** (`#ffe4e8`): Rose pastel surface for brand-anchored feature cards.
- **Brand Deep** (`#a31a30`): Deep brand for accents-on-brand compositions.
- **Bg Dark** (`#292f4c`): Navy mid-page band and footer — never pure black.
- **Bg Dark Elev** (`#363b5e`): Slightly lifted dark surface for elevated dark cards.
- **On-Dark** (`#ffffff`): Pure white over navy — high contrast for readability.

### Color System (semantic + product UI)
The eight colors below double as product UI status colors and marketing surface pastels. Each has a saturated chip color and a soft pastel surface variant.

- **Blue / Blueberry** (`#0086c0` saturated, `#cce5f5` soft): Info status, overview feature card.
- **Green / Mint** (`#00ca72` saturated, `#cdf4e3` soft): Done status, progress feature card.
- **Yellow / Lemon** (`#fdab3d` saturated, `#feeac4` soft): In-progress status, activity feature card. **Yellow chip uses dark text** for contrast.
- **Orange** (`#ff7a3a` saturated, `#ffe1d0` soft): Working-on-it status.
- **Purple / Grape** (`#9d50dd` saturated, `#ebd9f8` soft): Priority status, advanced feature card.
- **Pink / Cherry** (`#ff158a` saturated, `#ffd1e6` soft): Done-alt status, alt feature accent.
- **Teal** (`#22dabe` saturated, `#cdf4eb` soft): Alt-success, decorative.
- **Red / Strawberry** (`#e2445c` saturated, `#fbd3d8` soft): Stuck status, error states.

### Interactive
- **Link** (`#0073ea`): Inline body links — distinct from brand. No underline by default.
- **Link Hover** (`#0060c2`): Pressed state.
- **Selection** (`rgba(255, 61, 87, 0.18)`): Brand selection.

### Neutral Scale
- **Ink** (`#323338`): Monday's signature near-black — slightly bluer than #000.
- **Text Body** (`#525363`): Default running-text.
- **Text Muted** (`#676879`): Captions, footer links (lift to white inside navy footer).
- **Text Faint** (`#9698a6`): Placeholder, disabled.

### Surface & Borders
- **Bg** (`#ffffff`): Canvas.
- **Bg Soft** (`#f6f7fb`): Default card surface — cool soft tone.
- **Bg Strong** (`#eceef5`): Pre-footer cool band.
- **Border** (`#d0d4e4`): Default 1px hairline — cool-tinted.
- **Border Strong** (`#a8acc4`): 2px secondary button border.
- **Border Soft** (`#eceef5`): Softest divider.

### Shadow Colors
All shadows use navy-tinted ink `rgba(41, 47, 76, …)` — slightly cool, matching the brand's geometric rationalism. Focus ring is brand red-pink at 45% — the brand voltage scaled to ring intensity.

### Semantic
- **Info** (`#0086c0`): Same as the blue status chip.
- **Success** (`#00ca72`): Same as the green status chip.
- **Warning** (`#fdab3d`): Same as the yellow status chip.
- **Danger** (`#e2445c`): Same as the red status chip.

The unusual move: Monday.com's semantic-color system **is** its product UI status-color system — there is no separate semantic palette. This is the brand's single largest design decision, and it shapes every status chip, demo card, and validation toast on the marketing surface.

## 3. Typography Rules

### Font Family
- **Display**: `"Poppins"` — geometric sans, friendly-modern. Weights 600 / 700 / 800 carry display sizes.
- **Body**: `"Figtree"` (with `"Poppins"` fallback) for body text. Slightly taller x-height than Poppins, more readable at 14–18px.
- **Mono**: `"SF Mono"` (with `"JetBrains Mono"` fallback) for code snippets — rare on the marketing surface.
- **Fallback chain**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
- **OpenType features**: Poppins defaults — geometric sans without aggressive feature toggling. `tnum` inside data tables and metric chips.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Poppins | 80 | 800 | 1.05 | -0.02em | — | Mega hero — single anchor |
| display-xl | Poppins | 64 | 700 | 1.08 | -0.018em | — | Homepage hero h1 |
| display-lg | Poppins | 48 | 700 | 1.10 | -0.014em | — | Feature section h2 |
| display-md | Poppins | 36 | 700 | 1.18 | -0.01em | — | Pricing section heads |
| title-lg | Poppins | 28 | 700 | 1.25 | -0.005em | — | Section titles |
| title-md | Poppins | 22 | 600 | 1.30 | 0 | — | Card titles |
| title-sm | Figtree | 18 | 600 | 1.35 | 0 | — | Small card titles |
| label-md | Figtree | 16 | 600 | 1.40 | 0 | — | List labels |
| button | Figtree | 16 | 600 | 1.20 | 0 | — | CTA labels |
| body-lg | Figtree | 18 | 400 | 1.55 | 0 | — | Hero subhead |
| body-md | Figtree | 16 | 400 | 1.55 | 0 | — | Default running-text |
| body-sm | Figtree | 14 | 400 | 1.50 | 0 | — | Caption support |
| caption | Figtree | 13 | 600 | 1.40 | 0.04em | — | Uppercase eyebrow with brand-pink accent |
| caption-tabular | Figtree | 13 | 500 | 1.30 | 0 | tnum | Metric chips |
| legal | Figtree | 12 | 400 | 1.40 | 0.01em | — | Footer legal |
| code-md | SF Mono | 14 | 400 | 1.50 | 0 | — | Code snippets |

### Principles
- **Display weight is 700 / 800.** Bold is the brand's voice. Going to 500 reads as wrong-brand.
- **Geometric sans, not humanist.** Poppins's circular o, flat-top tails, and rounded counters carry the brand's friendly-modern character.
- **Body is Figtree, not Poppins.** Figtree's slightly taller x-height reads better at 14–18px than Poppins; the swap is the brand's typographic discipline.
- **Negative tracking only at large sizes.** -0.02em at 80px tightens to 0 at 16px.
- **Eyebrow accent in brand pink.** Caption-eyebrows often use brand `#ff3d57` for color, not just ink — the brand's chromatic permission extends to type.
- **Tabular figures inside data tables.** All metric and time displays use `tnum`.
- **No serif companion.** Monday.com's voice is pure geometric-sans confidence — no editorial serif accent.

## 4. Component Stylings

### Buttons (5 variants)

**`button-primary`** — Background `#ff3d57` red-pink, text white, type 16px / 600 Figtree, padding 14 × 24px, radius 8px. "Get started" / "Try it free" — often appears two-up at the same viewport (hero + secondary CTA strip). Hover lightens via 4% white overlay; active darkens to `#e8324a`. Focus shows a 3px brand ring at 45% alpha.

**`button-secondary`** — Background white, text ink, **2px border** `#a8acc4` (note: 2px, not 1px — matches the bold display weight). Same shape and padding as primary. The "Watch demo" / "Sign in" pair.

**`button-tertiary`** — Inline link-style. Transparent background, link-blue text, padding 12 × 16px, 8px radius.

**`button-on-dark`** — White over navy band. Background white, text ink, no border.

**`button-icon`** — 40 × 40px circular. White, 1px hairline, ink icon. Carousel arrows, share.

### Cards

**`card-default`** — Bg-soft `#f6f7fb` cool surface, 12px radius, 32px padding. Default content card on white canvas — subtle cool tone differentiates from canvas.

**`card-elevated`** — White, 12px radius, 32px padding, 1px border, standard shadow. Pricing tier, integration, feature card.

**`card-feature-blue` / `green` / `purple` / `yellow` / `pink`** — Pastel feature demo cards. Each uses the corresponding `color-{name}-soft` pastel as background, 20px radius, 48px padding. The pastel surface signals the feature's product-UI semantic (blue=overview, green=progress, purple=priority, yellow=activity, pink=brand-anchored).

**`hero-card-dark`** — Navy mid-page CTA. Background `#292f4c`, white text, 20px radius, 64px padding. Section reset.

### Status Chips (the signature brand component)

The status chip system is Monday.com's most recognizable marketing element — the same chips appear inside the actual product UI. Each chip is a rounded pill (9999px), 4 × 12px padding, 12px font, 600 weight.

- **`status-chip-blue`** — `#0086c0` background, white text. "In review" / "Overview".
- **`status-chip-green`** — `#00ca72`, white text. "Done" / "Approved".
- **`status-chip-yellow`** — `#fdab3d`, **ink text** (`#323338`) — yellow needs dark text for AA contrast.
- **`status-chip-orange`** — `#ff7a3a`, white text. "Working on it".
- **`status-chip-purple`** — `#9d50dd`, white text. "Priority".
- **`status-chip-pink`** — `#ff158a`, white text. "Live".
- **`status-chip-red`** — `#e2445c`, white text. "Stuck" / "Blocked".
- **`status-chip-teal`** — `#22dabe`, ink text. "Reviewing".

Marketing demo cards always frame at least 2–3 status chips inside a fake board UI — this is the brand's most consistent visual signature.

### Badges & Pills

- **`badge-tag`** — Default category pill. Bg-soft surface, muted text, rounded pill, 4 × 10px, 12px font.
- The status chips above also serve as badge/pill components when used outside product-UI demos.

### Inputs / Forms

**`text-input`** — White, 8px radius, 12 × 14px padding, 44px height, 1px `#a8acc4` border. Figtree 16px / 400.

**`text-input-focus`** — Border recolors to brand pink; 3px brand ring at 20% alpha.

**`text-input-error`** — Border red-strawberry, helper text in red.

### Navigation

**`top-nav`** — 64px-tall opaque white bar (no backdrop-blur — Monday opts for solid for visual weight). Wordmark left in pink ink. Mega-menu center (Product, Solutions, Templates, Resources, Pricing) — opens a full-width panel with feature thumbnails on hover. Right cluster carries "Contact sales" text link, "Sign in" text link, "Get started" `button-primary`.

**`footer`** — **Navy `#292f4c` background** (distinctive — most peers use white or cream). White text, 96px padding, multi-column link list, brand wordmark in white.

### Toasts & Modals

**`toast`** — Navy background, white text, 8px radius, deep shadow. "Saved" / "Update applied" / "Workspace created". Auto-dismiss 3s.

**Modal** — White, 20px radius, 48px padding, deep shadow, navy-tinted backdrop overlay at 70% alpha.

### Decorative

**Animated status-chip rotation** — A signature hero animation: a row of status chips animates through color states in sequence (blue → green → yellow → purple) at 2-second intervals, signaling project state-flow. Non-decorative — it's a literal demo of Monday's status workflow.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`. Section padding **96px** between bands. Card padding 32px (default), 48px (feature pastels), 64px (dark hero).

### Grid & Container
- **Max content width**: 1280px centered.
- **Feature pastel grid**: 2-up at desktop with color contrast (blue+green, purple+yellow, pink+brand-pink). 1-up at mobile.
- **Pricing tier grid**: 4-up at desktop (Free, Basic, Standard, Pro, Enterprise — 4 visible), scrollable at tablet, 1-up at mobile.
- **Logo strip**: monochrome partner logos, 6-up at desktop, wraps to 3 at mobile.

### Whitespace Philosophy
Whitespace is **not** the dominant atmosphere — Monday prefers density. Cards sit close together inside grids. Hero sections still have 96px breathing room, but feature bands often pack 3–4 cards per viewport. The brand trades minimalism for density-as-evidence.

### Section Cadence
White hero → 2-up pastel feature pair → white feature grid → mid-page navy CTA band → white pricing → cool pre-footer → **navy footer**. The navy footer is unique to Monday in this peer set.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 4px | Cookie / legal CTAs, hairline accents |
| Standard | sm | 6px | Inputs, small chips |
| Comfortable | md | 8px | Default content cards, primary CTAs, secondary CTAs |
| Relaxed | lg | 12px | Default cards, elevated cards |
| Featured | xl | 20px | Pastel feature cards, dark hero, modals |
| Pill | pill | 9999px | Status chips, badges |
| Full | full | 9999px / 50% | Avatars, icon buttons |

Note: Monday's primary CTA uses 8px radius — slightly tighter than peers (12–14px) — which combined with the 2px secondary border gives the button row a distinctly chunky, decisive feel.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow | Canvas, top nav background, navy footer, pastel feature cards |
| 1 — Hairline | 1px `#d0d4e4` border or 2px `#a8acc4` | Inputs, default cards, secondary buttons |
| 2 — Ambient | `0 1px 2px rgba(41,47,76,0.06)` | Resting cards |
| 3 — Standard | `0 6px 16px rgba(41,47,76,0.08)` | Card hover, sticky nav at scroll, pricing tiers |
| 4 — Elevated | `0 14px 32px rgba(41,47,76,0.12), 0 2px 6px rgba(41,47,76,0.06)` | Mega-menu dropdowns, integration cards |
| 5 — Deep | `0 24px 48px rgba(41,47,76,0.18), 0 6px 12px rgba(41,47,76,0.08)` | Modals, command palette |

### Shadow Philosophy
Navy-tinted ink shadows match the brand's geometric rationalism. Pastel feature cards stay flat — they carry depth through saturated color and 48px padding. Modals stack two shadows for compound depth.

## 8. Interaction & Motion

### Easing Curves
- **Standard** `cubic-bezier(0.4, 0, 0.2, 1)` — color, opacity.
- **Emphasized** `cubic-bezier(0.16, 1, 0.3, 1)` — pastel reveals, modal entrance.
- **Spring** `cubic-bezier(0.34, 1.56, 0.64, 1)` — status-chip color-rotation animation.

### Duration Buckets
- **Instant (80ms)**: Color hover, cursor changes.
- **Fast (160ms)**: Button hover, focus ring, input border recolor.
- **Standard (240ms)**: Card hover, dropdown, tab switch, mega-menu open.
- **Slow (380ms)**: Pastel reveal on scroll, modal entrance, status-chip color rotation.
- **Page (500ms)**: Inter-page transition.

### Per-Component Micro-States
- **Button hover (primary)**: 4% white overlay; no transform; 160ms.
- **Button hover (secondary)**: Border color shifts `#a8acc4` → `#ff3d57` brand pink; 160ms — a subtle pink-glow.
- **Card hover (pastel)**: 4px translate-y lift + standard shadow; 240ms emphasized.
- **Status-chip color rotation**: Hero animation cycles a chip through blue → green → yellow → purple at 2-second intervals; 380ms spring transition between states.
- **Mega-menu open**: Dropdown panel fades + 8px translate-y; 240ms emphasized.
- **Link hover**: Underline grows 0 → 2px under text (Monday uses 2px underline, matching the chunky button border); 160ms.
- **Input focus**: Border recolors → brand pink; 3px ring expands at 20% alpha; 160ms.

### Page Transitions
Default fade. Inter-page route is 500ms emphasized fade-in with 12px translate-y. Section-on-scroll reveals are 380ms fade + 16px offset. Pastel feature cards stagger left-to-right at 80ms increments inside a row.

### Reduced Motion
`prefers-reduced-motion: reduce` honored: all transforms removed, transitions reduced to 100ms opacity-only, status-chip color rotation skips to first state and stays static, pastel reveals fade in without offset.

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#323338` on `#ffffff` = **12.6** — AAA.
- **Body on bg**: `#525363` on `#ffffff` = **7.7** — AAA.
- **Muted on bg**: `#676879` on `#ffffff` = **5.4** — AA.
- **On-brand**: white on `#ff3d57` = **4.5** — AA at body sizes; AAA at display.
- **On-dark**: white on `#292f4c` = **12.4** — AAA (navy footer).
- **Link on bg**: `#0073ea` on `#ffffff` = **5.7** — AA.
- **Yellow chip**: ink `#323338` on `#fdab3d` = **6.4** — AA — the yellow-with-ink rule is enforced.
- **Green chip**: white on `#00ca72` = **2.6** — fails AA at body sizes. Use display sizes only or shift to `color-green-deep` for body text.

### Focus Indicators
Every focusable element shows a 3px solid brand-pink ring at 45% alpha with 2px offset. The pink-tinted ring reads as clearly branded.

### ARIA Patterns
- **Buttons**: Native `<button>` elements; `aria-label` only when icon-only.
- **Status chips (interactive)**: `role="button"` with `aria-pressed` if toggle-able; `aria-label` carries the status name.
- **Mega-menu**: `role="menu"` with `role="menuitem"` for each item; `aria-expanded` on the trigger button.
- **Tabs (feature cards)**: `role="tablist"` + `role="tab"` with `aria-selected`.
- **Dialog (modals)**: `role="dialog"` with `aria-modal="true"`, focus trap.
- **Live region (status updates)**: `aria-live="polite"` announces "Status updated to Done".
- **Navigation**: `<nav aria-label="Primary">` for top nav; mobile drawer uses `aria-expanded`.

### Keyboard Navigation
Tab order follows visual reading order. Mega-menu opens on Enter/Space, navigates with arrow keys, closes with Escape. Status chip rotation hero animation pauses when keyboard focus enters the hero region (respects user attention). Modal focus traps with Escape close.

### Screen Reader Hints
Pastel-card screenshots use descriptive `alt` text ("Monday board with three tasks: Sprint plan in progress, Design review done, Launch blocked"). Status chips announce their status name, not the color ("Status: Done" not "Status: Green"). Decorative status-chip rotation animation uses `aria-hidden="true"`.

### Reduced Motion Handling
All transforms removed. Status-chip rotation skips to first state. Pastel reveals fade without offset.

## 10. Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Single-column body; nav collapses to hamburger; pastel feature grid 1-up; hero h1 scales to 40px / 700; section padding reduces to 64px |
| Tablet | 640–1024px | 2-up pastel grid; nav stays horizontal but tightens; mega-menu collapses to single column on hover; hero at 56px |
| Desktop | 1024–1280px | 2-up or 3-up pastel grid; full mega-menu; hero at 64–80px |
| Wide | > 1280px | Same as desktop with more outer breathing room; max content width caps at 1280px |

### Touch Targets
- `button-primary` renders at 48 × 48px minimum.
- `button-icon` is 40 × 40px (under WCAG 44 — used inside dense desktop UI clusters).
- `text-input` height is 44px throughout.
- Status chips are 24px tall — used display-only on marketing surface (not interactive).

### Collapsing Strategy
- Nav collapses to hamburger at < 640px; full-screen sheet menu.
- Mega-menu becomes a stacked accordion on tablet.
- Pastel grids reduce columns rather than scaling cards.
- Pricing comparison table converts to horizontally-scrollable swipe at < 1024px; the four plan headers stay visible while body rows scroll.

### Image Behavior
- Feature card UI screenshots crop to fit container.
- Hero illustrations bleed full-width on mobile.
- Customer logo strip wraps to 3 rows at mobile.

### Container Queries
Pricing tier cards use `@container (min-width: 360px)` to switch from stacked-vertical to inline-row pricing layout.

## 11. Content & Voice

### Tone
**Energetic, optimistic, decisively non-minimalist.** Monday writes about teamwork as collaboration-as-celebration. Headlines say "Run all your work in one place" and "A new way of working" — claims that lean into ambition without falling into AI-magic territory. Body copy uses concrete team examples (marketing team, dev team, ops team) with specific workflow names.

### Microcopy Patterns
- **CTA verbs**: "Get started", "Try it free", "Watch demo", "Contact sales", "Start working". Optimistic and direct.
- **Section eyebrows**: 13px / 600 / 0.04em uppercase, often in **brand pink** color — "WORK MANAGEMENT", "CRM", "DEV".
- **Feature titles**: One-line capability — "Track every project in one view" not "Unleash team velocity".
- **Status names**: Direct and specific — "Done" not "Complete", "Stuck" not "Blocked", "Working on it" not "In progress".

### Empty States
"No items yet — add your first one to get started." Single line muted text plus a brand-pink CTA link.

### Error Messages
Short, friendly, action-oriented. "Couldn't connect — let's try again" not "Oops!". Errors carry a status-red icon-x and inline guidance.

### Success Confirmations
Toast: "Status updated to Done", "Item moved", "Board shared". Navy background, white text, deep shadow, auto-dismiss 3s. Uses concrete action-language matching the product UI vocabulary.

### CTA verb conventions
The brand prefers optimistic present-imperative: "Get started", "Try it free", "Start working". Free-trial nudges are explicit ("14-day free trial", "No credit card required") and appear under the CTA in legal type.

## 12. Dark Mode & Theming

Monday.com's in-product UI ships a dark variant where canvas inverts to navy `#1c1f3a`, status chips brighten slightly (saturation +5%), and brand red-pink is preserved unchanged. The marketing surface is **light-only** with the navy footer (`#292f4c`) providing intra-page contrast — Monday is one of the few peers that uses a dark footer over a white body.

In-product dark mode is reachable via a toggle in the user settings; the marketing site does not expose a toggle. Marketing dark contrast is achieved through `hero-card-dark` (`#292f4c`) bands and the navy footer.

## 13. Lineage & Influences

Monday.com descends from the **colorful project-management tradition** — Trello, Asana, Wrike — and the **geometric-sans confidence tradition** — Slack, Mailchimp, HubSpot. The eight-color status system is borrowed from spreadsheet conventions (Excel conditional-formatting colors), Trello's labels, and Asana's project status — but Monday systematizes it more rigorously than peers, treating each color as a brand-equity component.

The Poppins/Figtree typography pairing references the geometric-sans tradition popularized by Spotify, Pinterest, and Mailchimp post-2018. The 2px secondary button border is unusual — it traces back to mid-2010s Material Design and chunky web-app aesthetics, but Monday holds onto it deliberately as a confidence signal.

- **Trello** — Colorful card-based project management; label color system. https://trello.com
- **Asana** — Cross-tool project organization; pastel feature surfaces.
- **Slack** — Geometric-sans confidence; saturated brand-color discipline.
- **Mailchimp** — Friendly-modern typographic voice (pre-2023).
- **Poppins** (Indian Type Foundry) — The geometric sans powering display.

## 14. Do's and Don'ts

### Do
- Keep canvas pure white `#ffffff` — Monday's colors need a clean canvas to pop.
- Use `button-primary` red-pink `#ff3d57` for the single brand-voltage CTA per viewport.
- Match feature card pastel to product semantic: blue=overview, green=progress, yellow=activity, purple=priority, pink=brand-anchored.
- Use status chips with their canonical color/text pairs — yellow chip uses ink, all others use white.
- Anchor every band at 96px vertical padding.
- Use 2px borders on secondary buttons — matches the bold display weight.
- Use the navy footer `#292f4c` — it is Monday's intra-page contrast move.
- Lift caption-eyebrows to brand pink color when the eyebrow accents a CTA region.
- Display weight at 700–800 — bold is the brand.
- Use Figtree for body, Poppins for display — the swap is the typographic discipline.

### Don't
- Don't use cream or off-white for the canvas. The chromatic palette demands pure white.
- Don't desaturate the brand red-pink. `#ff3d57` is the voltage — softening it kills the energy.
- Don't put white text on the yellow chip. Use ink text for yellow only.
- Don't use display weight below 600. Monday's confidence is bold.
- Don't substitute a serif companion. Poppins/Figtree is the duet.
- Don't repeat the same pastel surface in two consecutive cards.
- Don't use 1px secondary button borders. 2px is the brand discipline.
- Don't replace the navy footer with a cream/white one. The dark footer is signature.
- Don't add atmospheric gradients to the hero. White canvas, bold display, status chips — full stop.
- Don't use status chips outside their semantic meaning. Don't tag a "design feature" with a "Stuck" red chip.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:           #ffffff (pure white)
Text / Ink:            #323338
Body:                  #525363
Muted:                 #676879
Brand / Red-Pink:      #ff3d57 (primary CTA + voltage)
Brand Soft:            #ffe4e8
Status Blue:           #0086c0  (soft #cce5f5)
Status Green:          #00ca72  (soft #cdf4e3)
Status Yellow:         #fdab3d  (soft #feeac4) — ink text on chip
Status Orange:         #ff7a3a  (soft #ffe1d0)
Status Purple:         #9d50dd  (soft #ebd9f8)
Status Pink:           #ff158a  (soft #ffd1e6)
Status Red:            #e2445c  (soft #fbd3d8)
Status Teal:           #22dabe  (soft #cdf4eb)
Bg Dark / Navy:        #292f4c  (mid-page band + footer)
Hairline:              #d0d4e4  (cool tinted)
Link:                  #0073ea  (inline link)
```

### Example Component Prompts

1. "Create a hero band on `#ffffff` canvas with Poppins 64px / 700 / line-height 1.08 / -0.018em tracking headline ('A new way of working'), 18px / 400 Figtree `#525363` subhead at 1.55. Primary CTA in `#ff3d57` red-pink (white text, 16px / 600 Figtree, 8px radius, 14 × 24px padding). Secondary CTA white with **2px** `#a8acc4` border. 96px vertical padding."

2. "Build a 2-up pastel feature pair: blue card `#cce5f5` left framing an Overview demo with 3 status chips (blue, green, yellow); purple card `#ebd9f8` right framing a Priority demo with grape and red chips. Each card 20px radius, 48px padding. Title in Poppins 28px / 700."

3. "Compose a status-chip row: 5 horizontal pills, each rounded 9999px, 4 × 12px padding, 12px / 600 Figtree. Sequence: Blue 'In review' (white text), Yellow 'In progress' (ink text), Green 'Done' (white text), Purple 'Priority' (white text), Red 'Stuck' (white text). Animate the first chip cycling through colors at 2s intervals — blue → green → yellow → purple."

4. "Design a navy mid-page CTA band: full-bleed `#292f4c` background, 64px padding, 20px outer radius. White Poppins 48px / 700 headline. Single white-on-navy `button-on-dark` CTA (white background, ink text, 8px radius, 14 × 24px padding)."

5. "Build a pricing tier card: white surface, 12px radius, 32px padding, 1px border `#d0d4e4`, ambient shadow. Plan name in Poppins 22px / 600, price in Poppins 36px / 700 / -0.01em, feature checklist in Figtree 16px / 400 with brand-pink check icons. Primary CTA at bottom — red-pink, 8px radius, 14 × 24px padding."

6. "Design the navy footer: `#292f4c` background, 96px padding. White Monday wordmark left. 5-column link grid (Product / Solutions / Templates / Resources / Company) in Figtree 14px / 400 white at 70% alpha. Lower legal row in Figtree 12px / 400 white at 50% alpha."

### Iteration Guide
1. Start with pure white `#ffffff`. Cream is wrong — Monday's chromatic palette needs a clean canvas.
2. Place one `button-primary` per viewport in red-pink. Diluting brand voltage breaks the system.
3. Use status chips with semantic meaning — don't tag a feature with a "Stuck" red chip just for color variety.
4. The yellow chip uses ink text; all other saturated chips use white. Honor the contrast rule.
5. Display weight is 700–800. Going to 500 reads as wrong-brand.
6. Secondary button borders are 2px. 1px is too thin for the bold typographic context.
7. The navy footer is signature. Don't replace with cream/white.
8. Use Poppins for display, Figtree for body — the swap is the typographic discipline.
