---
name: Binance
tagline: Trading-floor near-black with a single high-voltage Binance Yellow doing all the brand work — BinanceNova for type, BinancePlex for numbers.
author: webdesignhot
source_url: https://www.binance.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [fintech]
tags: [cool, structured, dense, dark, mono, high-voltage]
preview_swatch: ['#0b0e11', '#fcd535', '#eaecef']
related: [coinbase, kraken, stripe]
description: 'Binance''s marketing canvas reads like a trading desk that learned how to advertise itself: a deep near-black floor (`#0b0e11`) carrying white running text and a single high-voltage Binance Yellow (`#fcd535`) that does all the brand work — every primary CTA, every wordmark, every value-claim headline ("FUNDS ARE SAFU"). There is no secondary brand colour. Type runs Binance''s custom BinanceNova for editorial copy and BinancePlex for numbers — prices, volumes, prize pools — preserving tabular trustworthiness even when the surrounding paragraph runs in BinanceNova. Marketing surfaces stay dark; transactional dialogs (buy crypto, deposit, withdraw) flip light, but the same yellow CTAs and trading-green/red price cells thread through both. Dense, industrial, deliberately under-decorated.'

colors:
  bg: '#0b0e11'                    # canvas-dark — near-black trading floor
  bg-light: '#ffffff'              # canvas-light — transactional dialogs
  surface: '#1e2329'               # surface-card-dark — cards, dropdowns, secondary buttons on dark
  surface-elevated: '#2b3139'      # surface-elevated-dark — nested cards, hovered nav, chart panel
  surface-soft-light: '#fafafa'    # footer surface, disabled light states
  surface-strong-light: '#f5f5f5'  # form input bg in muted light contexts
  text: '#eaecef'                  # body-on-dark — running text on dark canvas (cooler than pure white)
  text-strong: '#ffffff'           # on-dark — high-contrast headlines
  text-on-light: '#181a20'         # ink — display + body on light surfaces
  text-muted: '#707a8a'            # muted — footer, breadcrumbs, captions, table headers
  text-muted-strong: '#929aa5'     # muted-strong — emphasised labels
  brand: '#fcd535'                 # Binance Yellow — sole brand voltage
  brand-active: '#f0b90b'          # primary-active — pressed/hover-darker yellow
  brand-disabled: '#3a3a1f'        # primary-disabled — desaturated dark-yellow on disabled CTAs
  on-brand: '#181a20'              # black-on-yellow — Binance's iconic CTA combination
  border: '#2b3139'                # hairline-on-dark — same hex as surface-elevated, borders feel like surface steps
  border-light: '#eaecef'          # hairline-on-light — Dembrandt confirmed as the highest-count token
  border-strong: '#cdd1d6'         # heavier border on disabled secondary buttons
  trading-up: '#0ecb81'            # price-up green — text colour only, never background
  trading-down: '#f6465d'          # price-down red — symmetric to trading-up
  accent-turquoise: '#2dbdb6'      # single-product accent on Smart Money — not a system token
  info: '#3b82f6'                  # focus ring + inline info badges
  shadow-soft: 'rgba(0,0,0,0.20)'  # rare card shadow on transactional surfaces
  focus-ring: 'rgba(59,130,246,0.50)'

typography:
  display:
    family: 'BinanceNova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['ss01']
  body:
    family: 'BinanceNova, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'BinancePlex, "JetBrains Mono", "IBM Plex Mono", monospace'
    weights: [500, 700]
    opentype-features: ['tnum', 'zero']
  scale:
    hero-display:    { size: 64, weight: 700, lineHeight: 1.10, tracking: '-1px',    family: display, opentype: 'default' }
    display-lg:      { size: 48, weight: 700, lineHeight: 1.10, tracking: '-0.5px',  family: display }
    display-md:      { size: 40, weight: 600, lineHeight: 1.15, tracking: '-0.3px',  family: display }
    display-sm:      { size: 32, weight: 600, lineHeight: 1.20, tracking: '0',       family: display }
    title-lg:        { size: 24, weight: 600, lineHeight: 1.30, tracking: '0',       family: display }
    title-md:        { size: 20, weight: 600, lineHeight: 1.35, tracking: '0',       family: display }
    title-sm:        { size: 16, weight: 600, lineHeight: 1.40, tracking: '0',       family: display }
    number-display:  { size: 40, weight: 700, lineHeight: 1.10, tracking: '-0.3px',  family: mono, opentype: 'tnum, zero' }
    number-md:       { size: 16, weight: 500, lineHeight: 1.40, tracking: '0',       family: mono, opentype: 'tnum' }
    number-sm:       { size: 14, weight: 500, lineHeight: 1.40, tracking: '0',       family: mono, opentype: 'tnum' }
    body-md:         { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.40, tracking: '0',       family: body }
    button:          { size: 14, weight: 600, lineHeight: 1.00, tracking: '0',       family: body }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.40, tracking: '0',       family: body }

radius:
  micro: 2          # very small badges
  sm: 4             # inline trading-up/down buttons, subscribe pill
  md: 6             # primary CTAs, primary inputs
  lg: 8             # search input, content cards, trust badges
  xl: 12            # markets-table-card, QR-promo-card, CTA bands
  pill: 9999        # prominent feature CTAs ("Sign Up" pill, "Join Now" arena)

spacing:
  base: 4
  scale: { xxs: 4, xs: 8, sm: 12, md: 16, lg: 24, xl: 32, xxl: 48, section: 80 }

layout:
  page-width: 1280
  product-width: 1440
  prose-width: 720
  header-height: 64

components:
  button-primary:        { bg: brand, text: on-brand, padding: '12px 24px', height: 40, radius: md, font: button }
  button-primary-pill:   { bg: brand, text: on-brand, padding: '14px 32px', radius: pill, font: button }
  button-secondary-dark: { bg: surface, text: text-strong, padding: '12px 24px', radius: md, font: button }
  button-secondary-light: { bg: bg-light, text: text-on-light, border: '1px solid border-light', padding: '12px 24px', radius: md }
  button-trading-up:     { bg: trading-up, text: text-strong, padding: '8px 20px', radius: sm, font: button }
  button-trading-down:   { bg: trading-down, text: text-strong, padding: '8px 20px', radius: sm }
  button-subscribe:      { bg: brand, text: on-brand, padding: '6px 16px', height: 28, radius: sm }
  button-tertiary-text:  { bg: transparent, text: brand, font: button }
  card-markets-table:    { bg: surface, radius: xl, padding: lg, divider: 'hairline-on-dark between rows' }
  card-trust-badge:      { bg: surface, text: text-strong, radius: lg, padding: '16px 20px', font: title-sm }
  card-qr-promo:         { bg: surface, radius: xl, padding: xl, font: title-md }
  card-feature-photo:    { bg: surface, radius: xl, padding: 0 }
  card-buy-crypto:       { bg: bg-light, radius: lg, padding: lg, font: number-display }
  band-funds-safu:       { bg: bg, headline-color: brand, font: display-lg, padding: section }
  band-arena-hero:       { bg: 'linear-gradient(brand → bg)', font: display-lg, padding: section }
  cta-band-dark:         { bg: surface, radius: xl, padding: xxl, font: display-sm }
  input-search-dark:     { bg: surface, text: text-strong, radius: lg, padding: '10px 16px', height: 40 }
  input-text-light:      { bg: bg-light, border: '1px solid border-light', radius: md, padding: '10px 16px', height: 40 }
  top-nav-dark:          { bg: bg, text: text-strong, height: 64, font: nav-link, wordmark-color: brand }
  top-nav-light:         { bg: bg-light, text: text-on-light, height: 64, font: nav-link }
  footer-light:          { bg: surface-soft-light, text: text-on-light, padding: '64px 0', font: body-md }
  price-up-cell:         { bg: transparent, text: trading-up, font: number-md }
  price-down-cell:       { bg: transparent, text: trading-down, font: number-md }

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 100
  duration-standard: 180
  duration-slow: 280
  reduced-motion: 'respects prefers-reduced-motion: reduce — price-flash, chart redraws, and CTA hovers degrade to instant colour swap'

breakpoints:
  mobile: 768
  tablet: 1024
  desktop: 1440
  wide: 1680

shadows:
  ambient: 'none'
  standard: 'rgba(0,0,0,0.20) 0 8px 24px -8px'
  elevated: 'rgba(0,0,0,0.30) 0 16px 32px -16px'
  ring: '0 0 0 2px rgba(59,130,246,0.50)'

accessibility:
  contrast-text-on-bg: 13.4
  contrast-text-on-brand: 12.8
  contrast-trading-up-on-bg: 5.1
  contrast-trading-down-on-bg: 4.9
  focus-ring: '2px solid rgba(59,130,246,0.50) with 2px offset'
  reduced-motion-honored: true

dark-mode: dual
---

## 1. Visual Theme & Atmosphere

Binance reads like a trading desk that learned to advertise itself. The base atmosphere is a **deep near-black canvas** (`#0b0e11`) — not pure black, slightly warm, the colour of an unlit terminal. Onto that floor the system stamps a single high-voltage accent: **Binance Yellow** (`#fcd535`). That yellow does almost all of the brand's heavy lifting — every primary CTA, every value-claim headline ("FUNDS ARE SAFU"), every "Sign Up" pill, every featured tier indicator, the wordmark itself. There is no secondary brand colour. The system trusts the yellow's voltage to do the brand work, and it carries it.

Type runs Binance's proprietary **BinanceNova** for editorial copy and **BinancePlex** for numerical / financial display. BinanceNova carries display headlines, section titles, and body. BinancePlex appears on every price ticker, every stat counter (transaction volumes, user counts, prize pools), every place a number wants to feel "tabular and reliable." Both run at modest weights — display sizes sit at 600–700 (heavier than typical marketing because trading platforms need numbers to read at a glance), body stays at 400.

The product is **multi-theme by intent**: marketing surfaces (homepage, smart-money, futures arena) default to dark, while transactional surfaces (buy crypto, deposit, withdraw, account dialogs) flip to a light theme. The same yellow CTAs and gray-blue hairlines (`#eaecef`) thread through both — only canvas, surface, and text tones flip. Trading **green** (`#0ecb81`) and **red** (`#f6465d`) signal price direction in tables, charts, and tickers across both modes.

Atmospheric effects are absent. No gradients on the canvas, no glassmorphism, no aurora behind hero copy. The signature decorative gesture is the **yellow → near-black vertical gradient backdrop** on the Futures Arena product-launch hero — a single-page treatment, not a system signature.

**Key Characteristics:**
- Single accent colour: `#fcd535` does all brand voltage — primary CTAs, hero headlines, brand mark, badges
- Custom type stack: `BinanceNova` (editorial) and `BinancePlex` (numbers, prices, financial data)
- Multi-theme: marketing pages default dark; transactional pages flip light. Yellow CTAs and trading green/red are shared across both
- Light footer on dark body: homepage uses `#fafafa` for the footer even when the body above is dark — a deliberate inversion that visually closes the page
- Trading semantics: green up / red down applied as text colour rather than badge background
- Card surfaces: `#1e2329` for elevated cards on dark; `#ffffff` for cards on light. No gradient surfaces
- Border radius is small to medium: 6–12px dominates; the 9999 pill is reserved for top-of-page actions
- Spacing follows a 4-multiple scale; major editorial bands sit at 80px — slightly tighter than typical marketing-only sites because product pages need denser layouts

## 2. Color Palette & Roles

### Primary
- **Canvas Dark** (`#0b0e11`): The default page floor on marketing surfaces. Near-black with a faint warm tint — never pure black.
- **Canvas Light** (`#ffffff`): The page floor on transactional pages (buy crypto, deposit forms).
- **Body on Dark** (`#eaecef`): Default running text on dark canvas — deliberately not pure white, slightly cooler.
- **On Dark** (`#ffffff`): Pure white reserved for high-contrast headlines.
- **Ink** (`#181a20`): Strongest text on light surfaces; also the text colour used on yellow CTAs.

### Brand & Dark
- **Binance Yellow** (`#fcd535`): The single brand colour. Used scarcely on dark for emphasis, ubiquitously on transactional dialogs. Carries the wordmark, every primary CTA, value-claim headlines, trust badges, large stat numbers.
- **Yellow Active** (`#f0b90b`): The press / hover-darker variant. Slightly more saturated.
- **Yellow Disabled** (`#3a3a1f`): A desaturated dark-yellow used on disabled CTAs over dark canvas — the only place yellow appears desaturated.

### Accent
- **Accent Turquoise** (`#2dbdb6`): A small secondary accent used very sparingly on Smart Money's "Check Now" CTA over dark surfaces. Treat as a single-product accent, not a system colour.

### Interactive
- **Link** = Brand yellow on both dark and light (`#fcd535`). No underline by default.
- **Hover**: For text links, slight opacity drop to ~80%. For yellow CTAs, swap to `#f0b90b` (Yellow Active).
- **Active / Pressed**: Yellow Active (`#f0b90b`) on CTAs. Trading buttons darken ~10%.
- **Disabled**: `#3a3a1f` (yellow disabled) for primary CTAs; `#929aa5` text on a `#cdd1d6` border for secondary disabled.

### Neutral Scale
- **Canvas Light** `#ffffff` → **Surface Soft Light** `#fafafa` → **Surface Strong Light** `#f5f5f5` → **Hairline Light** `#eaecef` → **Border Strong** `#cdd1d6` → **Muted Strong** `#929aa5` → **Muted** `#707a8a` → **Surface Elevated Dark** `#2b3139` → **Hairline Dark** `#2b3139` → **Surface Card Dark** `#1e2329` → **Canvas Dark** `#0b0e11` → **Ink** `#181a20`.

### Surface & Borders
- **Surface Card Dark** (`#1e2329`): Cards, navigation dropdowns, secondary buttons over dark canvas, markets table.
- **Surface Elevated Dark** (`#2b3139`): One step lighter; nested cards, hovered nav items, chart background panels.
- **Hairline Dark** (`#2b3139`): The 1px border tone on dark surfaces. Same hex as surface-elevated — borders feel like surface steps, not ink lines.
- **Hairline Light** (`#eaecef`): The 1px border tone on light surfaces. Used liberally — Binance's most frequent token by far.
- **Border Strong** (`#cdd1d6`): Heavier border tone on disabled secondary buttons.

### Shadow Colors
Binance's shadow philosophy is **flat surfaces with color-block separation**. Heavy drop shadows are absent — depth comes from the contrast between `#0b0e11` and `#1e2329` (a 12-step lightness jump that reads as a clear elevation boundary). Subtle drop shadows appear only on cards floating over imagery (the buy-crypto-amount-card on transactional pages).

### Semantic
- **Trading Up** (`#0ecb81`): Price-up green. Text colour in tables, charts, inline ticker arrows. Never a button background.
- **Trading Down** (`#f6465d`): Price-down red. Same rules.
- **Info** (`#3b82f6`): Inline info badges and the focus-ring base.
- **No dedicated success / warning / danger tokens** — semantic states reuse trading colours (where price-direction meaning applies) or fall back to text colour + iconography.

## 3. Typography Rules

### Font Family
- **Primary** — `BinanceNova`, fallback `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. Editorial type — headlines, paragraphs, button labels, nav.
- **Numerical** — `BinancePlex`, fallback `"JetBrains Mono", "IBM Plex Mono", monospace`. Tabular numerical type — prices, volumes, percentages, stat counters, prize pools.
- **OpenType features** — BinancePlex enables `tnum` (tabular numbers) and `zero` (slashed zero) by default. BinanceNova may opt into `ss01` for the alternate "g" used in display headlines.

The split is functional, not decorative: BinanceNova on a price ticker would lose the trading-platform character; BinancePlex on a paragraph would feel monospace-cold.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|-----:|-------:|------------:|---------------:|-------------|-------|
| hero-display     | BinanceNova | 64 | 700 | 1.10 | -1px    | default    | Homepage h1 ("316,258,026 USERS TRUST US") |
| display-lg       | BinanceNova | 48 | 700 | 1.10 | -0.5px  | default    | Brand-claim headlines ("FUNDS ARE SAFU"), Arena prize-pool |
| display-md       | BinanceNova | 40 | 600 | 1.15 | -0.3px  | default    | Long-scroll section heads |
| display-sm       | BinanceNova | 32 | 600 | 1.20 | 0       | default    | CTA-band headlines |
| title-lg         | BinanceNova | 24 | 600 | 1.30 | 0       | default    | Sub-section titles |
| title-md         | BinanceNova | 20 | 600 | 1.35 | 0       | default    | QR-promo cards, feature-card titles |
| title-sm         | BinanceNova | 16 | 600 | 1.40 | 0       | default    | Trust badges, FAQ rows, step labels |
| number-display   | BinancePlex | 40 | 700 | 1.10 | -0.3px  | tnum, zero | Big stat numbers (15,000 BTC, $429,423,449) |
| number-md        | BinancePlex | 16 | 500 | 1.40 | 0       | tnum       | Markets table prices, table cells |
| number-sm        | BinancePlex | 14 | 500 | 1.40 | 0       | tnum       | Inline prices, % changes |
| body-md          | BinanceNova | 14 | 400 | 1.50 | 0       | default    | Default running text |
| body-sm          | BinanceNova | 13 | 400 | 1.50 | 0       | default    | Cookie consent text, footer body |
| caption          | BinanceNova | 12 | 500 | 1.40 | 0       | default    | Small meta labels |
| button           | BinanceNova | 14 | 600 | 1.00 | 0       | default    | Standard CTA labels |
| nav-link         | BinanceNova | 14 | 500 | 1.40 | 0       | default    | Top nav menu items |
| code-micro       | BinancePlex | 11 | 500 | 1.20 | 0       | tnum, zero | API-key hints, transaction-ID truncation |

### Principles
- **Display weight is 700** — heavier than most marketing systems. Trading platforms need numbers to read at a glance and headlines to compete with chart visualisations and dense data tables. Soften display weight to 400 and the page reads as design-portfolio, not exchange.
- **BinancePlex always for numbers**. Prices, volumes, stat counters render in BinancePlex regardless of context — it is the system's "trustworthy number" voice. Mixing BinanceNova into a price ticker breaks the trading-platform character.
- **Tracking is negative on display** (-0.3 to -1px) — words lock together rather than breathe.
- **Open-type features are functional**, not decorative — `tnum` keeps prices column-aligned, `zero` distinguishes "0" from "O" in trading-pair tickers like "0x...".
- **Two voices, no third**. Resist the urge to add a serif accent or a third sans for "warmth." Binance's voice is engineered, not editorial.
- **Substitutes**: If BinanceNova is unavailable, **Inter** is the closest open-source match (tighten line-height ~3% to match Nova's cap height). For BinancePlex, **JetBrains Mono** or **IBM Plex Sans** at weight 500 with `tnum` enabled.

## 4. Component Stylings

### Buttons

**`button-primary`** — The signature primary CTA. Background `#fcd535`, text `#181a20` (black on yellow — the system's iconic combination), 14px / 600 BinanceNova label, 12px × 24px padding, 40px height, 6px radius. Press state `#f0b90b` (Yellow Active). Disabled `#3a3a1f` (Yellow Disabled).

**`button-primary-pill`** — Larger pill variant of the primary CTA used for top-of-page sign-up moments and product-launch heroes (Futures Arena "Join Now"). Same yellow + black combination, 14px × 32px padding, 9999 radius. Use sparingly — the pill signals "this is THE action."

**`button-secondary-on-dark`** — Background `#1e2329`, text `#ffffff`, 6px radius. Used over `#0b0e11` for less-emphasised actions paired with a primary.

**`button-secondary-on-light`** — Background `#ffffff`, text `#181a20`, 1px `#eaecef` border, 6px radius. Light-canvas equivalent.

**`button-tertiary-text`** — Inline text button with no background. Yellow `#fcd535` label, no underline. Used for "Log In" in the top nav and inline "Read More" links.

**`button-trading-up`** — Solid green for Buy / Long actions. Background `#0ecb81`, text `#ffffff`, 4px radius, 8px × 20px padding. Smaller and tighter than the primary CTA because it appears in dense trading interfaces.

**`button-trading-down`** — Symmetric red variant for Sell / Short actions. Background `#f6465d`.

**`button-subscribe`** — Compact yellow CTA used in the Smart Money traders table to subscribe to a top trader. 28px height, 6px × 16px padding. Same yellow + black combination — fits inside dense table rows.

### Cards

**`card-markets-table`** — Right-side homepage markets table. Background `#1e2329`, 12px radius, 24px padding. Tab row (Popular / New listing / Top gainers) at top, then 5-column rows of coin pairs (icon + symbol, last price, 24h change %, action button). Each row uses `card-markets-row`.

**`card-trust-badge`** — Small dark cards holding "No.1 Customer Service" / "No.1 Trading Volume" claims. Background `#1e2329`, 8px radius, 16px × 20px padding. Yellow numeric badge ("No.1") sits next to a short label.

**`card-qr-promo`** — "Trade on the go" card with QR code. Background `#1e2329`, 12px radius, 32px padding. h2 in title-md, body paragraph, app store badges, centred QR.

**`card-feature-photo`** — "Trade on the go" lifestyle photo strip. Background `#1e2329`, 12px radius, 0 internal padding (photos crop edge-to-edge).

**`card-buy-crypto-amount`** — Right-rail card on the Buy BTC page. Background `#ffffff`, 8px radius, 24px padding. Editable amount input in number-display (BinancePlex), currency selector, yellow primary CTA for "Continue" / "Confirm Order."

### Badges / Tags / Pills

**`badge-trust`** — Small pill or rectangle, `#1e2329` bg, white text, 8px radius, 16px × 20px padding. Often paired with a yellow numeric overlay ("No.1").

**`pill-tab`** — Markets-table tab pill. Transparent until active, then `#1e2329` filled with white text, 6px radius.

**`badge-coin-symbol`** — 32×32 coin icon + ticker pair. Coin icon at 50% radius, ticker text in `title-sm`.

### Inputs / Forms

**`input-search-on-dark`** — "Search currencies" input on hero. Background `#1e2329`, white text, 8px radius, 10px × 16px padding, 40px height. Carries a yellow `button-primary-pill` on the right ("Sign Up").

**`input-text-on-light`** — Standard input on transactional pages. Background `#ffffff`, 1px `#eaecef` border, 6px radius, 10px × 16px padding, 40px height. Focus inherits the focus-ring shadow.

### Navigation

**`top-nav-dark`** — 64px tall, `#0b0e11` background, yellow Binance wordmark left, primary horizontal menu (Buy Crypto, Markets, Trade, Futures, Earn, Square, Smart Money, Campaigns), right-side cluster (language selector, light/dark toggle, "Log In" text link, "Sign Up" `button-primary`).

**`top-nav-light`** — `#ffffff` background, `#181a20` menu items. Same layout.

### Decorative

**`band-funds-safu`** — Yellow-headlined "FUNDS ARE SAFU" band. Background stays `#0b0e11`, headline in `display-lg` at `#fcd535`. Below: three large `card-stat-callout` numbers (BTC reserves, users helped, funds recovered).

**`band-arena-hero`** — Vertical gradient from `#fcd535` top to `#0b0e11` bottom, with the prize-pool headline (4,000,000 USDT) in `display-lg` centred. A `button-primary-pill` ("Join Now") sits below. Used only for product-launch event surfaces.

**`footer-light`** — Light-gray footer (`#fafafa`) that closes every page including dark-canvas pages. 6-column link list at desktop, 64px vertical padding. The deliberate light footer on a dark page is one of Binance's most distinctive layout choices.

## 5. Layout Principles

### Spacing System
- **Base unit**: 4px.
- **Tokens**: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 80.
- **Section padding (vertical)**: 80px — slightly tighter than airy marketing sites (96–120px) because Binance pages mix marketing bands with dense product surfaces.
- **Card internal padding**: 24px for content cards; 32px for QR-promo and CTA bands; 16px for trust badges and table rows.
- **Gutters**: 24px between cards in 3-up grids; 16px inside footer column gutters.

### Grid & Container
- **Marketing max width**: 1280px centred.
- **Product max width**: 1440px on markets, smart-money tables where horizontal density matters.
- **Editorial body**: 12-column grid; product pages often 8/4 split (main panel + side rail).
- **Markets table**: 5-column header (Pair / Last Price / 24h Change / 24h Volume / Action).
- **Footer**: 6-column link list desktop → 2-up tablet → 1-up mobile.

### Whitespace Philosophy
Binance is denser than typical marketing sites — long-scroll pages mix hero bands with markets tables, FAQ accordions, and feature grids without much breathing room. The system trusts contrast (yellow vs dark canvas, green vs red price cells) to do the visual separation work, not whitespace.

### Section Cadence
Marketing pages alternate dark hero → dark feature band → dark markets table → dark CTA band → light footer. The light footer on a dark body is the only chromatic flip in the cadence.

## 6. Shapes & Radius

- **Micro** 2px — almost no use; reserved for very small badges
- **Small** 4px — inline trading-up/down buttons, subscribe pill
- **Standard** 6px — primary CTAs, primary inputs
- **Comfortable** 8px — search input, content cards, trust badges
- **Featured** 12px — markets-table-card, QR-promo-card, CTA bands
- **Pill** 9999px — prominent feature CTAs only ("Sign Up" pill, Arena "Join Now")

Coin icons render as 24×24 or 32×32 with 50% radius. Photographic content crops to 12px corners on desktop, full-bleed on mobile.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 Flat | No shadow, no border | Body sections, top nav, hero bands, footer |
| 1 Hairline | 1px `#2b3139` (dark) or `#eaecef` (light) | Inputs, table dividers, FAQ row separators |
| 2 Card surface | `#1e2329` bg on dark, `#ffffff` on light, no shadow | Markets tables, QR-promo, feature-photo, trust-badges |
| 3 Subtle drop | `rgba(0,0,0,0.20) 0 8px 24px -8px` | Buy-crypto-amount-card on transactional pages |
| 4 Focus ring | `0 0 0 2px rgba(59,130,246,0.50)` | Input + button keyboard focus |

**Shadow Philosophy**: Flat surfaces with color-block separation. Binance does not use heavy drop shadows, glassmorphism, or atmospheric mesh. Depth comes from the 12-step lightness jump between `#0b0e11` and `#1e2329` — that contrast reads as a clear elevation boundary without any shadow at all. Multi-layer brand-tinted shadows (Stripe, Linear) would feel decorative here; the system is engineered to feel functional.

## 8. Interaction & Motion

- **Easing standard** — `cubic-bezier(0.4, 0, 0.2, 1)` — used on hover transitions, dropdown reveals, modal fades.
- **Easing emphasized** — `cubic-bezier(0.2, 0, 0, 1)` — used on price-flash colour swap and chart redraws.
- **Durations** — fast 100ms (hover state), standard 180ms (modal fade), slow 280ms (page transition).
- **Hover** — primary CTA darkens yellow → `#f0b90b`. Secondary buttons gain a +1 step surface (`#1e2329` → `#2b3139`). Trading-up/down buttons darken ~10%.
- **Price flash** — when a price ticks up, the cell briefly flashes `rgba(14,203,129,0.20)` background for 400ms before fading. Down-tick flashes `rgba(246,70,93,0.20)`.
- **Chart redraw** — candlestick / line redraws use the emphasized easing at 280ms with no overshoot.
- **Page transition** — none on marketing; product surfaces (Spot / Futures) load route-replaced without animated transitions.
- **Reduced motion** — `prefers-reduced-motion: reduce` collapses all transitions to instant colour swap. Price flashes still fire but with no fade, only a single 100ms colour pulse.

## 9. Accessibility & A11y

- **Contrast**: Body text `#eaecef` on `#0b0e11` = 13.4:1 (AAA). Black text on yellow CTAs = 12.8:1 (AAA). Trading-up green on dark = 5.1:1 (AA). Trading-down red on dark = 4.9:1 (AA).
- **Focus indicator**: 2px solid `rgba(59,130,246,0.50)` ring with 2px offset. Visible on every interactive element including coin-icon links.
- **ARIA patterns**: Markets table uses `role="table"` with column headers and per-row `aria-rowindex`. The light/dark theme toggle is a `role="switch"` with `aria-checked`. Modal dialogs (deposit / withdraw) use `role="dialog"` with focus trap and `aria-labelledby`.
- **Keyboard nav**: Top nav supports left/right arrow navigation between menu items. Markets-table rows are focusable; Enter activates the trading-pair link. Currency selector in inputs uses combobox pattern (`role="combobox"` + `aria-expanded`).
- **Screen reader hints**: Coin-icon-only "view detail" chevrons carry `aria-label="View {symbol} details"`. Price-up/down arrows are `aria-hidden` with the % change carrying the semantic colour (text alone communicates direction).
- **Reduced motion**: Honoured fully — see §8.

## 10. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|------:|-------------|
| Mobile     | < 768  | Top nav collapses to hamburger; hero h1 64 → 36px; markets table converts to horizontally-scrollable card list; demo grids drop to 1-up; footer 6 columns wrap to 2 |
| Tablet     | 768–1024 | Top nav stays horizontal but tightens, secondary menu items hide behind a "More" dropdown; markets table 2-up; pricing/feature grids 2-up |
| Desktop    | 1024–1440 | Full top-nav with all primary menu items; 5-column markets table; trading dashboards in 8/4 split |
| Wide       | > 1440 | Same as desktop with more outer breathing room; max content width caps at 1280–1440px |

**Touch Targets**: Primary CTAs render at minimum 40 × 40px. Subscribe / inline action buttons are 28 × 28 — denser than ideal but matches industry trading-platform norms. Coin icons are 32 × 32 with the entire row tappable for 44px+ effective target.

**Collapsing Strategy**: Top nav → hamburger at < 768; menu opens as full-screen sheet with yellow CTAs anchored to the bottom. Markets table → horizontally-scrollable single card per pair on mobile. Hero stat numbers shrink proportionally rather than wrapping (the biggest claim must read as a single block). The light footer stays full-bleed at every breakpoint.

**Image Behavior**: Coin icons fixed 24/32px regardless of breakpoint. Lifestyle photos crop responsively (wider at desktop, taller at mobile). 3D coin-stack illustrations are fixed-aspect-ratio assets that scale uniformly.

## 11. Content & Voice

- **Tone** — institutional and direct, with occasional bursts of bombast on value-claim headlines ("FUNDS ARE SAFU", "316,258,026 USERS TRUST US"). Numbers carry the persuasion; copy is short.
- **Microcopy** — verbs are imperative and one-word where possible: "Sign Up", "Buy", "Sell", "Trade", "Deposit", "Withdraw". No "Get started" filler.
- **CTA verbs** — "Sign Up" (top-of-page), "Buy Crypto" (homepage), "Trade Now" (markets), "Join Now" (Arena). Each CTA verb is anchored to a product action, never generic.
- **Empty states** — terse, sometimes silent. The wallet "no holdings" state is a single line "No assets" with a CTA "Buy Crypto" — no illustration, no hand-holding.
- **Error messages** — short, factual, never apologetic. "Insufficient balance." not "Sorry, you don't have enough funds for this transaction." The financial domain is direct; users want fact, not feeling.
- **Number formatting** — always `tnum` BinancePlex with locale-aware separators. Currency symbols precede; percentages follow the number with no space ("+2.45%").

## 12. Dark Mode & Theming

Binance is **dual-theme by intent** — not a single dark-mode flip. Marketing surfaces default to dark (`#0b0e11`); transactional surfaces default to light (`#ffffff`). The choice is functional, not user preference: marketing wants dramatic contrast for value-claims; transactional wants paper-white legibility for amount inputs and confirmations.

A `colors-dark` map is unnecessary because the canvas above already documents both modes. The shared tokens (yellow, trading-up, trading-down, focus-ring) thread through both modes unchanged. Only canvas, surface, text, and border tones flip.

A user-facing **light/dark toggle** appears in the top nav, but it controls only marketing surfaces — transactional pages are always light regardless of toggle state.

## 13. Lineage & Influences

Binance's design language inherits from **trading-terminal interfaces** (Bloomberg Terminal's dense data, Reuters' colour-coded tickers) more than from consumer fintech. The deep canvas + single-yellow-accent recipe is a direct callback to terminal monochrome with one alarm colour. Where Stripe and Coinbase soften crypto / payments with paper-white restraint, Binance commits to the trading-floor aesthetic: dense, dark, numerical.

What it borrows from contemporaries: the multi-theme intent (dark marketing + light transactional) is a pattern shared with Coinbase Pro and FTX (RIP). The yellow + black CTA combination is unique to Binance — no major exchange uses an unmuted high-voltage yellow. What it rejects: gradients, glassmorphism, illustration-heavy heroes, and the "consumer-friendly" softening that Coinbase and Robinhood lean into.

Influences:
- **Bloomberg Terminal** — Dense data, colour-coded direction signals, monochrome canvas with single accent. https://www.bloomberg.com/professional/products/bloomberg-terminal
- **Coinbase Pro** — Multi-theme intent (marketing dark / trade dark / transactional light). https://pro.coinbase.com
- **TradingView** — Candlestick chart conventions (green up / red down) and tabular price tickers. https://www.tradingview.com
- **IBM Plex Mono** — Spiritual ancestor of BinancePlex's tabular discipline. https://www.ibm.com/plex

## 14. Do's and Don'ts

### Do
- Reserve `#fcd535` for primary actions, brand-claim headlines, and the wordmark. Never for secondary or decorative purposes — yellow's scarcity is what makes it powerful
- Keep `button-primary` (yellow with black text) as the universal primary CTA across both dark and light modes
- Use `button-trading-up` (green) and `button-trading-down` (red) only for explicit Buy/Sell or Long/Short actions — they carry semantic price-direction meaning
- Use BinancePlex for every number — prices, volumes, percentages, stat counters
- Choose canvas mode by surface intent: dark for marketing / product / dashboards; light for transactional dialogs
- Anchor every editorial band with 80px section padding
- Keep border radius small to medium (6–12px); reserve pill (9999) for top-of-page actions only
- Use the light footer on dark pages — it's a deliberate brand signature

### Don't
- Don't introduce a second brand colour. Any expansion dilutes the brand identity
- Don't use yellow for body text or large surface fills — it's for focal-point CTAs and headlines only
- Don't use trading-up / trading-down as background fills on cards — they are price-direction signals, expressed as text colour or small badge fill
- Don't soften display weight from 700 to 400 — the heavier weight is the trading-platform signal
- Don't add atmospheric gradients to the canvas (mesh, aurora, glow)
- Don't invert the yellow-CTA text colour to white — black on yellow is the system's signature
- Don't mix BinanceNova into a price ticker or BinancePlex into a paragraph
- Don't reach for shadows on cards in dark mode — surface-step contrast already provides depth

## 15. Agent Prompt Guide

### Quick Color Reference
- Brand: Binance Yellow `#fcd535`
- On-brand text: Ink `#181a20`
- Canvas dark: `#0b0e11`
- Canvas light: `#ffffff`
- Body text on dark: `#eaecef`
- Surface card dark: `#1e2329`
- Hairline light: `#eaecef`
- Trading up: `#0ecb81`
- Trading down: `#f6465d`

### Example Component Prompts
- "Create a Binance hero band: `#0b0e11` background, 64px BinanceNova weight 700 white headline with -1px tracking, 14/400 BinanceNova subhead in `#eaecef`, primary CTA pill (`#fcd535` bg, `#181a20` text, 9999 radius, 14×32 padding) and a ghost secondary CTA (`#1e2329` bg, white text, 6px radius)."
- "Design a markets table card: `#1e2329` bg, 12px radius, 24px padding. Tab row at top (Popular / New listing / Top gainers, active = `#1e2329` filled with white text 6px radius). 5-column rows: 32×32 coin icon + ticker, last price in BinancePlex 16/500, 24h change cell coloured `#0ecb81` or `#f6465d` text, action chevron right."
- "Build a stat callout: transparent bg, 40px BinancePlex weight 700 with -0.3px tracking in `#fcd535`, label below in 14/400 BinanceNova `#eaecef`."
- "Compose a transactional Buy Crypto card: `#ffffff` bg, 8px radius, 24px padding. Editable amount input in 40px BinancePlex weight 700, currency selector below, primary CTA `#fcd535` 6px radius full-width."

### Iteration Guide
1. Pick one component at a time. Anchor prompts to a single token role (e.g., "primary CTA" or "markets row")
2. Decide the surface mode first — marketing → dark, transactional → light. The same component appears in both with surface tone flipped
3. Variants of an existing component (`-active`, `-disabled`) live as separate roles, never nested state objects
4. Numbers always use BinancePlex with `tnum`; copy always uses BinanceNova. Mixing them is a system violation
5. Trading green / red are semantic price tokens — never repurpose them for "success" or "error" generic states
6. Document Default and Active/Pressed states only — Binance does not document hover separately
7. When in doubt, remove decoration. Contrast (yellow vs near-black, green vs red) does the work, not gradients or shadows
