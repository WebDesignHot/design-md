---
name: Coinbase
tagline: Institutional-grade calm — pure white canvas, a single Coinbase Blue, and Coinbase Display set at weight 400 instead of 700.
author: webdesignhot
source_url: https://www.coinbase.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [fintech]
tags: [light, minimal, dense, clean, editorial, fintech]
preview_swatch: ['#ffffff', '#0052ff', '#0a0b0d']
related: [stripe, binance, kraken]
description: 'Coinbase''s marketing surfaces read like a quietly-confident financial-services brand that happens to trade crypto. The base canvas is pure white; Coinbase Blue (`#0052ff`) is the single brand voltage, used scarcely on primary CTAs, signature glyphs, and inline accent moments. Type runs Coinbase''s licensed Coinbase Display (display) and Coinbase Sans (body) at modest weights — display sits at weight 400 not 700, signalling editorial calm rather than fintech-bombastic. Page rhythm rotates between bright white sections, soft gray elevation bands, and full-bleed dark editorial heroes (`#0a0b0d`) carrying product-UI mockup cards. Iconography is geometric and minimal; depth comes from card-on-card layering, never decorative shadows.'

colors:
  bg: '#ffffff'                # canvas — pure white default page
  bg-dark: '#0a0b0d'           # surface-dark — full-bleed editorial heroes, footer
  surface-soft: '#f7f7f7'      # bright neutral elevation band
  surface-strong: '#eef0f3'    # secondary button bg, soft card surface
  surface-card: '#ffffff'      # default card surface (white-on-white via border)
  surface-dark-elevated: '#16181c'  # elevated cards inside dark heroes
  text: '#0a0b0d'              # ink — primary headlines, strong body
  text-body: '#5b616e'         # body — running paragraph text
  text-muted: '#7c828a'        # captions, table headers
  text-subtle: '#a8acb3'       # disabled, on-dark-soft, lowest hierarchy
  brand: '#0052ff'             # Coinbase Blue — single brand voltage
  brand-active: '#003ecc'      # primary-active — pressed/hover-darker
  brand-disabled: '#a8b8cc'    # primary-disabled — desaturated blue
  on-brand: '#ffffff'          # white-on-blue CTAs
  on-dark: '#ffffff'           # white text on dark surfaces
  on-dark-soft: '#a8acb3'      # muted text on dark surfaces
  border: '#dee1e6'            # hairline — default 1px border
  border-soft: '#eef0f3'       # hairline-soft — softer divider
  semantic-up: '#05b169'       # price-up green
  semantic-down: '#cf202f'     # price-down red
  accent-yellow: '#f4b000'     # rare accent — used on educational badges
  focus-ring: 'rgba(0,82,255,0.30)'

typography:
  display:
    family: '"Coinbase Display", -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400]
    opentype-features: ['ss01']
  body:
    family: '"Coinbase Sans", -apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"Coinbase Mono", "JetBrains Mono", "IBM Plex Mono", monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-mega:  { size: 80, weight: 400, lineHeight: 1.00, tracking: '-2px',     family: display }
    display-xl:    { size: 64, weight: 400, lineHeight: 1.00, tracking: '-1.6px',   family: display }
    display-lg:    { size: 52, weight: 400, lineHeight: 1.00, tracking: '-1.3px',   family: display }
    display-md:    { size: 44, weight: 400, lineHeight: 1.09, tracking: '-1px',     family: display }
    display-sm:    { size: 36, weight: 400, lineHeight: 1.11, tracking: '-0.5px',   family: body }
    title-lg:      { size: 32, weight: 400, lineHeight: 1.13, tracking: '-0.4px',   family: body }
    title-md:      { size: 18, weight: 600, lineHeight: 1.33, tracking: '0',        family: body }
    title-sm:      { size: 16, weight: 600, lineHeight: 1.25, tracking: '0',        family: body }
    body-md:       { size: 16, weight: 400, lineHeight: 1.50, tracking: '0',        family: body }
    body-strong:   { size: 16, weight: 700, lineHeight: 1.50, tracking: '0',        family: body }
    body-sm:       { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',        family: body }
    caption:       { size: 13, weight: 400, lineHeight: 1.50, tracking: '0',        family: body }
    caption-strong: { size: 12, weight: 600, lineHeight: 1.50, tracking: '0',        family: body }
    number-display: { size: 18, weight: 500, lineHeight: 1.40, tracking: '0',        family: mono, opentype: 'tnum, zero' }
    button:        { size: 16, weight: 600, lineHeight: 1.15, tracking: '0',        family: body }
    nav-link:      { size: 14, weight: 500, lineHeight: 1.40, tracking: '0',        family: body }
    code-micro:    { size: 12, weight: 400, lineHeight: 1.40, tracking: '0',        family: mono }

radius:
  none: 0
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
  pill: 100
  full: 9999

spacing:
  base: 4
  scale: { xxs: 4, xs: 8, sm: 12, base: 16, md: 20, lg: 24, xl: 32, xxl: 48, section: 96 }

layout:
  page-width: 1200
  prose-width: 720
  header-height: 64

components:
  button-primary:        { bg: brand, text: on-brand, padding: '12px 20px', height: 44, radius: pill, font: button }
  button-pill-cta:       { bg: brand, text: on-brand, padding: '16px 32px', height: 56, radius: pill, font: button }
  button-secondary-light: { bg: surface-strong, text: text, padding: '12px 20px', height: 44, radius: pill }
  button-secondary-dark: { bg: surface-dark-elevated, text: on-dark, padding: '12px 20px', height: 44, radius: pill }
  button-outline-on-dark: { bg: transparent, text: on-dark, border: '1px solid on-dark', padding: '11px 19px', height: 44, radius: pill }
  button-tertiary-text:  { bg: transparent, text: brand, font: button }
  hero-band-light:       { bg: bg, text: text, padding: section, font: display-mega }
  hero-band-dark:        { bg: bg-dark, text: on-dark, padding: section, font: display-mega }
  product-ui-card-dark:  { bg: surface-dark-elevated, text: on-dark, radius: xl, padding: lg }
  product-ui-card-light: { bg: bg, border: '1px solid border', radius: xl, padding: lg }
  card-feature:          { bg: surface-soft, radius: lg, padding: lg }
  card-asset-row:        { bg: bg, border: '1px solid border-soft', radius: sm, padding: '16px 24px' }
  badge-pill:            { bg: surface-strong, text: text, radius: pill, padding: '6px 12px' }
  input-text:            { bg: bg, border: '1px solid border', radius: sm, padding: '12px 16px', height: 44 }
  top-nav-light:         { bg: bg, text: text, height: 64, font: nav-link }
  top-nav-dark:          { bg: bg-dark, text: on-dark, height: 64, font: nav-link }
  footer-dark:           { bg: bg-dark, text: on-dark-soft, padding: '64px 0', font: body-sm }

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — hover lifts and asset-row fades collapse to opacity-only'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0,0,0,0.04) 0 1px 2px'
  standard: 'rgba(0,0,0,0.06) 0 4px 12px'
  elevated: 'rgba(0,0,0,0.08) 0 16px 32px -8px'
  ring: '0 0 0 3px rgba(0,82,255,0.30)'

accessibility:
  contrast-text-on-bg: 17.9
  contrast-text-on-brand: 5.6
  contrast-body-on-bg: 7.4
  focus-ring: '3px solid rgba(0,82,255,0.30)'
  reduced-motion-honored: true

dark-mode: dual
---

## 1. Visual Theme & Atmosphere

Coinbase reads like an institutional bank that quietly happens to trade crypto. The base canvas is **pure white** (`#ffffff`) — not paper-cream, not off-white — and that pure white commits to financial-services calm rather than crypto-native exuberance. Onto that floor the system places a single brand voltage: **Coinbase Blue** (`#0052ff`), used scarcely on primary CTAs, signature glyphs, and inline accent moments. The blue is saturated but never neon; sits adjacent to navy without becoming corporate.

Type is the system's clearest editorial signal. Coinbase Display sits at **weight 400 not 700** — the headlines feel light, calm, almost magazine-like. An 80px `display-mega` at weight 400 with -2px tracking reads as confident editorial, not fintech-bombastic. Coinbase Sans handles body and tighter title roles at 400–700; Coinbase Mono shows up only on tabular numerical data (price tickers, ledger rows).

Page rhythm rotates three surface modes:
1. **White editorial sections** — the default. Hero, feature grids, product breakdowns.
2. **Soft gray elevation bands** (`#f7f7f7`) — used to separate dense feature blocks from running editorial.
3. **Full-bleed dark heroes** (`#0a0b0d`) — used at the top of product narratives, carrying product-UI mockup cards rendered in `#16181c`. The footer also uses this dark mode.

Decorative shadows are absent. Cards stack with a single 1px hairline (`#dee1e6`) or a one-step surface jump from `#ffffff` to `#f7f7f7`. The system trusts contrast and white space rather than depth tricks. Iconography is geometric and minimal — hairline weight, 24×24 grid.

**Key Characteristics:**
- Pure white canvas (`#ffffff`) — institutional calm, never paper-cream
- Single brand voltage: Coinbase Blue `#0052ff` for primary CTAs and signature glyphs
- Coinbase Display set at weight 400 (not 700) — editorial confidence, not fintech-bombastic
- Three surface modes: white default, soft-gray elevation band, full-bleed dark editorial hero
- Pill-shaped primary CTAs (100px radius) — friendly without becoming playful
- Product-UI mockup cards rendered inside dark heroes (`#16181c` on `#0a0b0d`)
- Geometric, hairline-weight iconography on a 24×24 grid
- Footer goes dark on every page — closes the surface in `#0a0b0d`

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): Pure white default page floor.
- **Surface Dark** (`#0a0b0d`): Full-bleed editorial hero ground; footer surface.
- **Ink** (`#0a0b0d`): Primary headline and strong body text.
- **Brand** (`#0052ff`): The single Coinbase Blue. Primary CTAs, inline accent links, signature brand glyphs.

### Brand & Dark
- **Coinbase Blue** (`#0052ff`): Used scarcely on dark surfaces (white text on a blue pill is the "Get started" gesture). Used densely on light surfaces only on the primary CTA itself.
- **Brand Active** (`#003ecc`): Pressed/hover-darker variant.
- **Brand Disabled** (`#a8b8cc`): Desaturated blue used on disabled CTAs.
- **Surface Dark Elevated** (`#16181c`): The +1 step on dark — product-UI mockup cards inside dark heroes, secondary buttons on dark.

### Accent
- **Accent Yellow** (`#f4b000`): Rare accent used on educational/learn badges and a single "earn rewards" indicator. Treat as a single-vertical accent, not a system token.

### Interactive
- **Link** = Brand `#0052ff`, no underline by default
- **Hover** — primary CTA → `#003ecc`; text links gain underline
- **Active / Pressed** — Brand Active `#003ecc` on CTAs
- **Disabled** — `#a8b8cc` background or `#a8acb3` text
- **Selected** — light `#0052ff` 8% tint background with `#0052ff` text

### Neutral Scale
`#ffffff` (Canvas) → `#f7f7f7` (Surface Soft) → `#eef0f3` (Surface Strong / Hairline Soft) → `#dee1e6` (Border) → `#a8acb3` (Text Subtle / On-Dark Soft) → `#7c828a` (Text Muted) → `#5b616e` (Body) → `#16181c` (Surface Dark Elevated) → `#0a0b0d` (Ink / Surface Dark).

### Surface & Borders
- **Surface Soft** (`#f7f7f7`): Bright neutral elevation band — sits between white sections to break dense feature blocks.
- **Surface Strong** (`#eef0f3`): Secondary button bg; soft card surface; hairline-soft tone.
- **Surface Card** (`#ffffff`): Default card surface — white-on-white separated by 1px border.
- **Border** (`#dee1e6`): Default 1px hairline.
- **Border Soft** (`#eef0f3`): Softer divider on dense lists.

### Shadow Colors
Coinbase uses neutral-tinted shadows at very low opacity (`rgba(0,0,0,0.04–0.08)`). No brand-tinted shadows. Most cards use no shadow — they rely on hairlines and surface contrast.

### Semantic
- **Up** (`#05b169`): Price-up green; portfolio gain text
- **Down** (`#cf202f`): Price-down red; portfolio loss text
- **Info** = Brand `#0052ff` (no separate info token)
- **Warning / Error** — `#cf202f` reused for danger states; warning typically uses an icon + text colour pair rather than a dedicated bg

## 3. Typography Rules

### Font Family
- **Display** — `Coinbase Display`, fallback `-apple-system, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Body** — `Coinbase Sans`, same fallback chain
- **Mono** — `Coinbase Mono`, fallback `"JetBrains Mono", "IBM Plex Mono", monospace`
- **OpenType** — `tnum` and `zero` enabled on every numerical surface (price tickers, asset rows, ledger amounts). `ss01` may be enabled on Coinbase Display for the alternate "C" used in the wordmark hero.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|-----:|-------:|------------:|---------------:|-------------|-------|
| display-mega   | Coinbase Display | 80 | 400 | 1.00 | -2px    | default        | Wordmark heroes, brand-anchor pages |
| display-xl     | Coinbase Display | 64 | 400 | 1.00 | -1.6px  | default        | Main marketing h1 |
| display-lg     | Coinbase Display | 52 | 400 | 1.00 | -1.3px  | default        | Long-scroll section heads |
| display-md     | Coinbase Display | 44 | 400 | 1.09 | -1px    | default        | Card heroes, feature-block titles |
| display-sm     | Coinbase Sans    | 36 | 400 | 1.11 | -0.5px  | default        | Sub-section titles (drops to Sans here) |
| title-lg       | Coinbase Sans    | 32 | 400 | 1.13 | -0.4px  | default        | Editorial sub-titles |
| title-md       | Coinbase Sans    | 18 | 600 | 1.33 | 0       | default        | Card titles, modal headers |
| title-sm       | Coinbase Sans    | 16 | 600 | 1.25 | 0       | default        | Inline emphasis, list headers |
| body-md        | Coinbase Sans    | 16 | 400 | 1.50 | 0       | default        | Default running text |
| body-strong    | Coinbase Sans    | 16 | 700 | 1.50 | 0       | default        | Inline emphasis in body |
| body-sm        | Coinbase Sans    | 14 | 400 | 1.50 | 0       | default        | Secondary body, footer copy |
| caption        | Coinbase Sans    | 13 | 400 | 1.50 | 0       | default        | Meta labels, table headers |
| caption-strong | Coinbase Sans    | 12 | 600 | 1.50 | 0       | default        | Eyebrow tags, status pills |
| number-display | Coinbase Mono    | 18 | 500 | 1.40 | 0       | tnum, zero     | Price tickers, asset amounts |
| button         | Coinbase Sans    | 16 | 600 | 1.15 | 0       | default        | All CTAs |
| nav-link       | Coinbase Sans    | 14 | 500 | 1.40 | 0       | default        | Top nav |
| code-micro     | Coinbase Mono    | 12 | 400 | 1.40 | 0       | tnum, zero     | API key hints, transaction-ID truncation |

### Principles
- **Display weight 400, not 700** — the most distinctive Coinbase typographic choice. Headlines feel calm, magazine-like, institutional. Going to 700 reads as fintech-bombastic and breaks the brand
- **Tight negative tracking on display** (-1 to -2px) — words lock together at large sizes
- **Two families, no third** — Coinbase Display for display-md and above, Coinbase Sans for everything else. Coinbase Mono only on numbers
- **`tnum` enabled** on every number so portfolio columns align cleanly
- **No shouty section titles** — uppercase appears only on caption-strong eyebrow tags, and even there sparingly
- **Substitutes**: Inter at weight 400 with -2% letter-spacing approximates Coinbase Display. JetBrains Mono with `tnum` for Coinbase Mono.

## 4. Component Stylings

### Buttons

**`button-primary`** — Primary CTA. Background `#0052ff`, white text, 12px × 20px padding, 44px height, 100px pill radius. Hover → `#003ecc`. Disabled `#a8b8cc`. The signature pill shape signals "friendly but institutional" — softer than a 6px corner, less playful than a 24px chip.

**`button-pill-cta`** — Oversized version for hero "Get started" moments. 16px × 32px padding, 56px height, same blue. Used at the top of marketing pages and at the bottom of product narratives.

**`button-secondary-light`** — On light surfaces. Background `#eef0f3`, ink text, 100px pill, same dimensions as primary. Pairs with primary in dual-CTA stacks.

**`button-secondary-dark`** — On dark heroes. Background `#16181c`, white text, 100px pill.

**`button-outline-on-dark`** — Ghost variant for dark heroes. Transparent background, 1px white border, white text, 100px pill, 11px × 19px padding.

**`button-tertiary-text`** — Inline text link button. Background transparent, blue text, no underline by default.

### Cards

**`product-ui-card-dark`** — Product UI mockup card sitting inside a dark hero. Background `#16181c`, 24px radius, 24px padding. Often holds a faux app screenshot — portfolio chart, send-receive flow, asset detail.

**`product-ui-card-light`** — White card for light sections. Background `#ffffff`, 1px `#dee1e6` border, 24px radius, 24px padding.

**`card-feature`** — Soft-elevation card for feature explainers. Background `#f7f7f7`, 16px radius, 24px padding. Often holds an icon + title + 1–2 line body.

**`card-asset-row`** — Dense asset list row (BTC / ETH / SOL prices). Background white, 1px `#eef0f3` border, 8px radius, 16px × 24px padding. Asset icon + symbol + name on left; price + 24h change on right.

### Badges / Tags / Pills

**`badge-pill`** — Status pill (e.g., "New", "Featured", "+12.4%"). Background `#eef0f3`, ink text, 100px radius, 6px × 12px padding. Caption-strong type.

**`badge-trending-up`** — Asset gain pill. Background `rgba(5,177,105,0.10)`, `#05b169` text, 100px radius.

**`badge-trending-down`** — Asset loss pill. Background `rgba(207,32,47,0.10)`, `#cf202f` text, 100px radius.

### Inputs / Forms

**`input-text`** — Standard text input. Background white, 1px `#dee1e6` border, 8px radius, 12px × 16px padding, 44px height. Focus → 3px blue ring (`rgba(0,82,255,0.30)`) + border tightens to `#0052ff`.

**`input-amount`** — Crypto-amount input on send / buy flows. Larger 56px height, mono number-display type, currency selector inline on right.

### Navigation

**`top-nav-light`** — 64px tall, `#ffffff` background, 1px bottom hairline `#dee1e6`. Coinbase wordmark left, primary nav (Personal, Business, Developers, Company), right cluster (Sign in, Get started CTA).

**`top-nav-dark`** — `#0a0b0d` background, white menu items. Used on the small subset of dark-mode marketing chapters.

### Decorative

**`hero-band-light`** — Default white hero. Padding 96px vertical. Display-xl headline, body-md sub, dual CTA pair (primary + tertiary text).

**`hero-band-dark`** — Full-bleed dark hero. Background `#0a0b0d`, white display-mega headline, white sub-text. Used to anchor product narratives.

**`footer-dark`** — Dark footer that closes every page. Background `#0a0b0d`, `#a8acb3` link colour, 64px vertical padding. Multi-column link list (Personal, Business, Developers, Resources, Legal, Company).

## 5. Layout Principles

### Spacing System
- **Base unit**: 4px.
- **Tokens**: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 96.
- **Section padding (vertical)**: 96px on marketing — generous airy rhythm.
- **Card internal padding**: 24px.
- **Gutters**: 24px between cards in 3-up grids.

### Grid & Container
- **Max content width**: ~1200px centred on marketing pages.
- **Editorial body**: 12-column grid with 24px gutters.
- **Asset list**: stacked rows, 100% width, ~720px max in narrative chapters.
- **Dual hero**: text on left 6 cols, product-UI mockup card on right 6 cols.

### Whitespace Philosophy
Coinbase is **airier than Binance**. Long-scroll marketing pages breathe — 96px section padding, 24px card gutters, 1.5 body line-height. The system trusts white space rather than dense color contrast.

### Section Cadence
White → dark hero → white → soft-gray elevation band → white → soft-gray → dark footer. The dark heroes punctuate the page with editorial gravity; the soft-gray bands break dense feature blocks without pulling attention.

## 6. Shapes & Radius

- **None** 0 — full-bleed band edges
- **xs** 4 — micro chips (rare)
- **sm** 8 — input fields, asset row cards
- **md** 12 — feature cards
- **lg** 16 — feature cards (alt)
- **xl** 24 — product-UI mockup cards (the signature radius for the most-photographed surface)
- **pill** 100 — every CTA, every status badge — Coinbase's friendliness signal
- **full** 9999 — circular avatars and asset icons

The pill at 100px (not 9999) is Coinbase's signature — a rectangle with very rounded ends rather than a perfect stadium. At small button sizes the 100px and 9999 are visually identical, but at large CTAs the 100px keeps a hint of straight horizontal edge that reads as "considered" rather than "blob."

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 Flat | No shadow, no border | Body sections, hero bands, footer |
| 1 Hairline | 1px `#dee1e6` | Inputs, asset rows, white-on-white cards |
| 2 Surface step | `#ffffff` → `#f7f7f7` ground | Soft-gray elevation bands separating dense features |
| 3 Card surface | `#16181c` on dark heroes (product-UI cards) | Product-UI mockup cards |
| 4 Subtle drop | `rgba(0,0,0,0.06) 0 4px 12px` | Floating UI affordances (modal triggers, tooltip anchors) |
| 5 Modal | `rgba(0,0,0,0.08) 0 16px 32px -8px` + scrim | Modal dialogs |
| Focus ring | `0 0 0 3px rgba(0,82,255,0.30)` | All keyboard focus |

**Shadow Philosophy**: Neutral-tinted, very low opacity. Coinbase rejects brand-tinted shadows — they would feel decorative on an institutional brand. Most cards use no shadow at all; depth comes from hairlines and surface steps. The sole brand-tinted shadow is the focus ring.

## 8. Interaction & Motion

- **Easing standard** — `cubic-bezier(0.4, 0, 0.2, 1)` for hover transitions and modal fades
- **Easing emphasized** — `cubic-bezier(0.2, 0, 0, 1)` for portfolio chart redraws and price-update flashes
- **Durations** — fast 120ms (hover), standard 200ms (modal), slow 320ms (page transition)
- **Hover** — primary CTA darkens to `#003ecc`. Asset rows gain a `#f7f7f7` background tint. Text links gain underline
- **Price flash** — gain → 400ms `rgba(5,177,105,0.10)` background fade; loss → `rgba(207,32,47,0.10)`
- **Card hover** — product-UI cards on light surfaces gain a subtle `rgba(0,0,0,0.06) 0 4px 12px` shadow on hover; on dark surfaces gain a +1 step background to `#1a1d22`
- **Page transition** — none on marketing; product surfaces use a fade-in at 200ms with no slide
- **Reduced motion** — `prefers-reduced-motion: reduce` collapses transitions to opacity-only; price flashes still fire but with no fade

## 9. Accessibility & A11y

- **Contrast**: Ink `#0a0b0d` on white = 17.9:1 (AAA). Body `#5b616e` on white = 7.4:1 (AAA). White on Coinbase Blue = 5.6:1 (AA at body, AA-Large at display). Up green / down red on white pass AA.
- **Focus indicator**: 3px solid `rgba(0,82,255,0.30)` ring on every interactive element. Border tightens to `#0052ff` on inputs.
- **ARIA patterns**: Asset list uses `role="list"` with `role="listitem"` rows. Send/buy flow modals use `role="dialog"` with focus trap. Currency selector uses combobox pattern.
- **Keyboard nav**: Top nav supports left/right arrow between menu items. Asset list rows are focusable; Enter activates the asset detail link. Skip-to-content link in the document head.
- **Screen reader hints**: Asset icons are `aria-hidden`; symbol + name carry the semantic label. Price-direction colour is supplemented with "+" / "-" prefix and screen-reader text "{N}% increase" / "decrease".
- **Reduced motion**: Honoured — see §8.

## 10. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|------:|-------------|
| Mobile     | < 640  | Top nav → hamburger; hero display-mega 80 → 44px; product-UI mockup cards stack below text; asset rows full-width; CTAs full-width |
| Tablet     | 640–1024 | Top nav stays horizontal but condensed; mockup cards 50% width; feature grids 2-up |
| Desktop    | 1024–1280 | Full nav + secondary menu; mockup cards 6/12 cols beside text; feature grids 3-up |
| Wide       | > 1280 | More breathing room around the 1200px container; mockup card aspect ratios stretch wider |

**Touch Targets**: Primary CTAs render at minimum 44 × 44px. Asset row tap area extends across full row width. Tap-to-open modals avoid hover-only interactions.

**Collapsing Strategy**: Top nav → hamburger at mobile; menu opens as a full-screen sheet. Product-UI mockup cards stack below the text block on mobile (text first, then mockup). Asset list collapses to a single column with the right-side price inset below the asset symbol. Footer columns stack to single column with collapsible sub-sections.

**Image Behavior**: Product-UI mockup cards are responsive PNG/SVG — they shrink proportionally without art direction. Hero illustrations crop to centre on mobile.

## 11. Content & Voice

- **Tone** — calm, declarative, institutional. Avoids hyperbole and crypto-native jargon. "Earn rewards on your crypto" not "Stack sats fam"
- **Microcopy** — verbs are simple and action-anchored: "Get started", "Sign in", "Send", "Receive", "Buy", "Sell". The "Get started" CTA appears on virtually every marketing chapter
- **CTA verbs** — "Get started" (top of page, post-feature), "Sign in" (auth), "Buy crypto" (vertical-specific), "Learn more" (educational chapters)
- **Empty states** — short and supportive. The "no portfolio activity" state shows a single line "Your transactions will appear here" with no illustration
- **Error messages** — clear and remediable. "Insufficient balance — add funds to continue" not "Transaction failed"
- **Number formatting** — always `tnum`, locale-aware separators, currency symbol prefixed. Crypto amounts show 4–8 decimal places truncated by significant figures
- **Educational chapters** — the "Learn" surfaces use slightly warmer tone with the rare `#f4b000` accent yellow on "earn rewards" badges

## 12. Dark Mode & Theming

Coinbase is **dual-theme by intent** — like Binance, the choice is functional rather than user preference. White marketing surfaces with full-bleed dark heroes punctuating product narratives. The footer is always dark. The shared tokens (Coinbase Blue, semantic up/down, focus ring) thread through both modes unchanged.

A user-facing dark mode for the **product app** exists but is out of scope for this marketing-surface document. The marketing-mode dark surfaces use:
- `bg-dark` `#0a0b0d` (canvas)
- `surface-dark-elevated` `#16181c` (product-UI mockup cards)
- `on-dark` `#ffffff` (text)
- `on-dark-soft` `#a8acb3` (muted text)
- Border on dark = `rgba(255,255,255,0.08)`

## 13. Lineage & Influences

Coinbase's design language inherits from **institutional finance** (Schwab, Fidelity, BlackRock) more than from crypto-native peers. The pure white canvas, single-blue accent, and weight-400 display headlines are direct references to financial-services calm — the kind of brand a regulator or pension fund manager wouldn't second-guess. The choice to set Coinbase Display at weight 400 (against the fintech industry's love affair with 700-weight bombastic display) is the boldest decision in the system: it intentionally rejects the trading-floor aesthetic that Binance and FTX (RIP) committed to.

What it borrows: pill-shaped CTAs with the 100px radius signal "consumer-friendly but institutional" — a register Stripe and Wise also occupy. The dark-hero punctuation pattern is shared with Stripe and Linear marketing surfaces. What it rejects: gradients, glassmorphism, atmospheric depth, illustration-heavy heroes, and crypto-native iconography (rocket emojis, neon palettes, cyberpunk grids).

Influences:
- **Stripe** — Pill CTAs, dark-hero punctuation, single-brand-blue discipline. https://stripe.com
- **Schwab / Fidelity** — Institutional-finance calm, white canvas restraint. https://www.schwab.com
- **Linear** — Editorial dark heroes carrying product UI mockups. https://linear.app
- **Coinbase Display** custom typeface — built in-house to replace the previous Inter/Roboto-style stack with a calmer, magazine-influenced display.

## 14. Do's and Don'ts

### Do
- Keep Coinbase Display at weight 400 — the calm display weight is the brand
- Reserve `#0052ff` for primary CTAs and signature glyphs only — its scarcity is what makes it carry brand
- Use the 100px pill radius on every CTA — this is the friendliness signal
- Layer product-UI mockup cards on dark heroes (`#16181c` on `#0a0b0d`) — the signature presentation
- Use `tnum` on every number for column-aligned ledgers and price tickers
- Anchor sections at 96px vertical padding — the airy rhythm is institutional
- Close every page with a dark footer (`#0a0b0d`)
- Use semantic up/down only as text or pill colour, never as button background

### Don't
- Don't bolden display headlines to 700 — that breaks the brand into fintech-bombastic
- Don't introduce a second brand colour or use `#0052ff` decoratively
- Don't use rectangle CTAs (6–8px radius) — pills are mandatory
- Don't use brand-tinted shadows — depth comes from hairlines and surface steps
- Don't use crypto-native iconography (rocket emojis, neon glyphs)
- Don't use Coinbase Mono for prose — only for tabular numbers
- Don't soften the white canvas to cream — Coinbase commits to pure white
- Don't replace pill CTAs with chips on dense product surfaces — keep one CTA shape system-wide

## 15. Agent Prompt Guide

### Quick Color Reference
- Brand: Coinbase Blue `#0052ff`
- Brand pressed: `#003ecc`
- Canvas: `#ffffff`
- Surface dark: `#0a0b0d`
- Surface dark elevated: `#16181c`
- Text ink: `#0a0b0d`
- Body: `#5b616e`
- Border: `#dee1e6`
- Up: `#05b169`
- Down: `#cf202f`

### Example Component Prompts
- "Create a Coinbase hero band: pure white `#ffffff` background, 80px Coinbase Display weight 400 headline with -2px tracking in `#0a0b0d`, body-md sub in `#5b616e`, primary pill CTA `#0052ff` 100px radius 12×20 padding, tertiary text-link CTA in `#0052ff` to the right."
- "Design a dark editorial hero with product-UI mockup card: `#0a0b0d` bg, 96px section padding. Left column: 64px Coinbase Display weight 400 white headline with -1.6px tracking, body-md sub in `#a8acb3`, dual CTA (primary `#0052ff` pill + outline-on-dark white-bordered pill). Right column: product-UI mockup card on `#16181c` background, 24px radius, 24px padding, holding a faux portfolio chart."
- "Build an asset list row: white bg, 1px `#eef0f3` border, 8px radius, 16×24 padding. 32×32 asset icon + symbol + name on left; right side: number-display 18/500 Coinbase Mono price + trending pill (`rgba(5,177,105,0.10)` bg, `#05b169` text, 100px radius)."
- "Compose a feature card grid: 3-up on desktop with 24px gutters. Each card: `#f7f7f7` bg, 16px radius, 24px padding. 32px icon top, title-md `#0a0b0d`, body-md `#5b616e`."

### Iteration Guide
1. Start with white. Coinbase rejects paper-cream — pure `#ffffff` is the canvas
2. Use Coinbase Display at weight 400 for display-md and above; Coinbase Sans for everything else
3. Pill CTAs at 100px radius — never rectangle, never 9999 stadium
4. The dark hero (`#0a0b0d` carrying `#16181c` cards) is the dramatic punctuation — use it 1–2 times per page max
5. Numbers always `tnum` Coinbase Mono with locale separators
6. Hairlines (`#dee1e6`) and surface steps (`#ffffff` → `#f7f7f7`) provide depth — skip shadows
7. Brand blue `#0052ff` only on primary CTAs and signature glyphs — never decorative
