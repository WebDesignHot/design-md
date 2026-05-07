---
name: Blur
tagline: Pure-black canvas, neon `#ff8700` orange voltage, and JetBrains-Mono-default everywhere — brutalist NFT trader terminal as competitive instrument.
updated_at: 2026-05-05T10:17:17+12:00
published_at: 2026-05-05T10:17:17+12:00
author: webdesignhot
source_url: https://blur.io
spec: design.md/v1.5
quality: curated
featured: false
categories: [marketplace, fintech]
tags: [dark, brutalist, dense, trader, nft, web3, neon, terminal]
preview_swatch: ['#000000', '#ff8700', '#ffffff']
related: [opensea, coinbase, kraken]
description: 'Blur reads like a Bloomberg terminal that decided ornaments were enemies. The canvas is **pure black** `#000000` (not navy-tinted, not warmed — just black), surfaces step up through `#0d0d0d` and `#1a1a1a`, and a single neon-orange `#ff8700` carries every primary action. Where OpenSea uses electric-blue calm and Magic Eden uses magenta-mint warmth, Blur commits to brutalist pro-trader minimalism — high-contrast white text on pure black, JetBrains-Mono-default everywhere (not just numbers), 0px corner radius on every CTA, and zero decorative motion outside what trade-execution requires. Layout is a portfolio dashboard first and marketing second: every page is a dense table of bids/asks/floors with sortable columns, sticky filter rails, and a fixed bottom-bar showing the user''s active bid pool. Type runs the wordmark in stretched custom-letterspaced display, but every product surface — every NFT name, every column header, every price — is JetBrains Mono uppercase at 11–13px. The brand''s clearest editorial choice: no rounded corners, no shadows, no gradients, no illustrations, no animation beyond colour-state transitions. Everything else is noise.'

colors:
  bg: '#000000'                # canvas — pure black, never navy
  bg-elev-1: '#0d0d0d'         # surface-soft — secondary surface
  bg-elev-2: '#1a1a1a'         # surface-strong — card bg, hover
  bg-elev-3: '#252525'         # surface-elevated — popovers
  surface-card: '#0d0d0d'
  surface-row-hover: '#1a1a1a'
  text: '#ffffff'              # ink — primary
  text-body: '#cccccc'         # body
  text-muted: '#878787'        # captions, table column headers
  text-subtle: '#5a5a5a'       # disabled
  brand: '#ff8700'             # Blur Orange — neon voltage
  brand-hover: '#cc6c00'       # primary-hover
  brand-active: '#a35700'      # pressed
  brand-soft: '#ff87001a'      # 10% orange tint
  brand-glow: 'rgba(255,135,0,0.40)'
  on-brand: '#000000'          # black-on-orange CTAs (high contrast)
  border: '#262626'            # default 1px hairline
  border-soft: '#1a1a1a'       # softer divider on dense lists
  border-strong: '#3d3d3d'     # focused / hover row border
  border-brand: '#ff8700'      # orange border on active state
  semantic-up: '#22c55e'       # price-up green (saturated)
  semantic-up-soft: '#22c55e1a'
  semantic-down: '#ef4444'     # price-down red
  semantic-down-soft: '#ef44441a'
  semantic-warning: '#fbbf24'
  semantic-info: '#3b82f6'
  bid-pool-orange: '#ff8700'   # active-bid-pool highlight
  rare-trait: '#ff8700'        # rare uses orange (no separate gold)
  focus-ring: 'rgba(255,135,0,0.50)'
  scrim: 'rgba(0,0,0,0.80)'
  link: '#ff8700'
  link-hover: '#ffa84d'

typography:
  display:
    family: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace'
    weights: [400, 500, 700]
    opentype-features: ['tnum', 'zero', 'ss01']
  body:
    family: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace'
    weights: [400, 500, 700]
    opentype-features: ['tnum', 'zero', 'ss01']
  sans:
    family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace'
    weights: [400, 500, 700]
    opentype-features: ['tnum', 'zero', 'ss01']
  scale:
    display-mega:   { size: 56, weight: 700, lineHeight: 1.00, tracking: '-1px',  family: display, transform: uppercase }
    display-xl:     { size: 40, weight: 700, lineHeight: 1.05, tracking: '-0.4px', family: display, transform: uppercase }
    display-lg:     { size: 28, weight: 700, lineHeight: 1.10, tracking: '0',     family: display, transform: uppercase }
    display-md:     { size: 20, weight: 700, lineHeight: 1.15, tracking: '0',     family: display, transform: uppercase }
    title-lg:       { size: 16, weight: 700, lineHeight: 1.20, tracking: '0',     family: body, transform: uppercase }
    title-md:       { size: 14, weight: 700, lineHeight: 1.20, tracking: '0.4px', family: body, transform: uppercase }
    title-sm:       { size: 12, weight: 700, lineHeight: 1.20, tracking: '0.6px', family: body, transform: uppercase }
    body-md:        { size: 13, weight: 400, lineHeight: 1.40, tracking: '0',     family: body }
    body-sm:        { size: 12, weight: 400, lineHeight: 1.40, tracking: '0',     family: body }
    table-row:      { size: 13, weight: 500, lineHeight: 1.30, tracking: '0',     family: mono, opentype: 'tnum, zero' }
    table-header:   { size: 11, weight: 700, lineHeight: 1.20, tracking: '0.8px', family: mono, transform: uppercase }
    asset-name:     { size: 13, weight: 500, lineHeight: 1.20, tracking: '0',     family: mono }
    price-display:  { size: 16, weight: 700, lineHeight: 1.20, tracking: '0',     family: mono, opentype: 'tnum, zero' }
    price-row:      { size: 13, weight: 500, lineHeight: 1.30, tracking: '0',     family: mono, opentype: 'tnum, zero' }
    button:         { size: 13, weight: 700, lineHeight: 1.20, tracking: '0.4px', family: body, transform: uppercase }
    nav-link:       { size: 13, weight: 700, lineHeight: 1.20, tracking: '0.4px', family: body, transform: uppercase }
    address-mono:   { size: 12, weight: 400, lineHeight: 1.20, tracking: '0',     family: mono, opentype: 'ss01' }
    code-micro:     { size: 11, weight: 400, lineHeight: 1.40, tracking: '0',     family: mono }
    label-eyebrow:  { size: 10, weight: 700, lineHeight: 1.20, tracking: '1px',   family: mono, transform: uppercase }

radius:
  none: 0
  xs: 0
  sm: 0
  md: 0
  lg: 0
  card: 0
  pill: 0
  full: 9999

spacing:
  base: 4
  scale: { xxs: 4, xs: 8, sm: 12, base: 16, md: 20, lg: 24, xl: 32, xxl: 48, section: 64 }

layout:
  page-width: 1600
  prose-width: 720
  header-height: 56
  bottom-bar-height: 48
  grid-gutter: 12

components:
  button-primary:        { bg: brand, text: on-brand, padding: '8px 16px', height: 36, radius: none, font: button }
  button-primary-lg:     { bg: brand, text: on-brand, padding: '12px 24px', height: 44, radius: none, font: button }
  button-secondary:      { bg: bg-elev-2, text: text, padding: '8px 16px', height: 36, radius: none, border: '1px solid border' }
  button-ghost:          { bg: transparent, text: text, padding: '8px 16px', height: 36, radius: none, border: '1px solid border' }
  button-bid:            { bg: brand, text: on-brand, padding: '12px 24px', height: 40, radius: none, font: button }
  button-list:           { bg: text, text: bg, padding: '12px 24px', height: 40, radius: none, font: button }
  button-cancel:         { bg: 'transparent', text: text-body, padding: '8px 16px', height: 36, radius: none, border: '1px solid border' }
  asset-card:            { bg: bg-elev-1, border: '1px solid border', radius: none, padding: 0 }
  asset-card-hover:      { bg: bg-elev-2, border: '1px solid border-strong', radius: none }
  collection-row:        { bg: bg, border-bottom: '1px solid border-soft', height: 56, padding: '0 16px' }
  collection-row-hover:  { bg: bg-elev-1, border-bottom: '1px solid border' }
  bid-pool-bar:          { bg: bg-elev-2, border-top: '1px solid border', height: 48, position: fixed, bottom: 0 }
  bid-pool-active:       { bg: brand-soft, border-top: '1px solid border-brand', height: 48 }
  badge-trait:           { bg: bg-elev-2, text: text, radius: none, padding: '2px 6px', font: label-eyebrow }
  badge-rare:            { bg: brand-soft, text: brand, radius: none, padding: '2px 6px', font: label-eyebrow }
  badge-trending:        { bg: 'rgba(34,197,94,0.15)', text: semantic-up, radius: none, padding: '2px 6px', font: label-eyebrow }
  input-text:            { bg: bg-elev-1, border: '1px solid border', radius: none, padding: '8px 12px', height: 36 }
  input-search:          { bg: bg-elev-1, border: '1px solid border', radius: none, padding: '8px 12px', height: 36 }
  input-bid-eth:         { bg: bg, border: '1px solid border-strong', radius: none, padding: '12px 16px', height: 48, font: price-display }
  top-nav:               { bg: bg, border-bottom: '1px solid border', height: 56, font: nav-link }
  side-filter-panel:     { bg: bg, border-right: '1px solid border', padding: 'lg sm', width: 240 }
  filter-pill:           { bg: bg, text: text-muted, radius: none, padding: '6px 10px', border: '1px solid border', font: label-eyebrow }
  filter-pill-active:    { bg: brand-soft, text: brand, radius: none, padding: '6px 10px', border: '1px solid border-brand', font: label-eyebrow }
  modal-bid:             { bg: bg, border: '1px solid border', radius: none, padding: lg }
  table-collection:      { bg: bg, border-collapse: collapse }
  toast:                 { bg: bg-elev-2, border: '1px solid border', radius: none, padding: 'sm base' }
  footer:                { bg: bg, border-top: '1px solid border', padding: '32px 0' }

motion:
  ease-standard: 'linear'
  ease-emphasized: 'cubic-bezier(0.4, 0, 0.6, 1)'
  duration-fast: 80
  duration-standard: 120
  duration-slow: 200
  reduced-motion: 'honoured — already minimal; only colour-state transitions remain. No animation expressed beyond colour-state changes anywhere on the surface'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'none'
  standard: 'none'
  elevated: 'none'
  modal: 'rgba(0,0,0,0.80) 0 0 0 9999px'
  ring: '0 0 0 2px rgba(255,135,0,0.50)'
  none: 'none'

accessibility:
  contrast-text-on-bg: 21.0
  contrast-text-on-brand: 5.4
  contrast-body-on-bg: 15.6
  focus-ring: '2px solid rgba(255,135,0,0.50)'
  reduced-motion-honored: true

dark-mode: dark-only
---

## 1. Visual Theme & Atmosphere

Blur reads like a trader's screen at 4 a.m. Tokyo time. The canvas is **pure black** `#000000` — not navy-tinted (that would be OpenSea), not warmed (that would be Magic Eden's `#0c0c0c`), just black. White text sits at full `#ffffff` opacity, JetBrains Mono carries virtually every glyph on screen (yes, even body), and a single neon-orange voltage `#ff8700` flags every primary action — bid, list, accept, cancel. The brand's clearest editorial decision: **0px corner radius on everything**. No pill CTAs. No 8px softening. Buttons are rectangles. Cards are rectangles. Modal dialogs are rectangles. The 0px commitment reads as brutalist-trader-pro, the same register as TradingView Pro and the original Bloomberg Terminal — utility before aesthetic.

The system has no shadows. None. Cards stack via the three-tier surface ladder (`#000` → `#0d0d0d` → `#1a1a1a`) and 1px `#262626` hairlines. Hover on a row swaps the bg to `#1a1a1a` and the border to `#3d3d3d` — that's the entire elevation system. There is no card lift, no translateY transform, no shadow-on-hover, no glassmorphism, no backdrop-blur, no gradient, no glow effect outside the focus ring. Every visual gesture that doesn't carry information has been removed.

Typography commits even harder. The wordmark uses a stretched display custom letterforming, but **every product surface uses JetBrains Mono** — not just price columns (OpenSea convention) but everything. Asset names, table rows, button labels, navigation, body copy. Sans-serif Inter exists in the font stack as a fallback, but the production surfaces stay mono. Most text renders **uppercase** with positive tracking (`+0.4px` to `+1px` depending on size), reinforcing the trader-terminal voice. The 11px `table-header` at 0.8px tracking, 700 weight, all-caps is the system's signature label.

Layout is portfolio-first. Every page is a dense table or grid of bids/asks/floors with sortable columns, sticky filter rails, and a **fixed bottom-bar** showing the user's active bid pool — a 48px persistent strip across the bottom of every authenticated screen carrying the count of active bids and the total ETH at stake. The bid-pool bar is Blur's signature affordance and the system's only orange-tinted persistent surface (`rgba(255,135,0,0.10)` background when active).

Density is the brand. Asset cards run 12px gutters (vs OpenSea's 16, Magic Eden's 24). Table rows are 56px tall (terminal-comfortable, not desktop-app-airy). Top nav is 56px tall (vs Coinbase 64, OpenSea 72). The result feels uncompromising — every page assumes the user is a professional trader who values information density over comfort.

**Key Characteristics:**
- Pure black canvas `#000000` — no navy tint, no warming
- Single neon voltage: Blur Orange `#ff8700` on every primary action
- JetBrains Mono **everywhere** — not just numbers
- 0px corner radius on every CTA, card, modal — brutalist commitment
- No shadows anywhere — depth is surface-tier and 1px hairline only
- All-caps body labels with positive tracking (0.4–1px)
- Fixed 48px bid-pool bar across bottom of every authenticated page
- Asset card grid at 12px gutters — denser than OpenSea
- 56px top nav, 56px table rows — terminal density throughout
- Black-on-orange CTAs (high contrast 5.4:1) — never white-on-orange

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#000000`): Pure black — the brand's defining commitment.
- **Ink** (`#ffffff`): Primary text at full opacity.
- **Brand** (`#ff8700`): Blur Orange — every primary action, every active state.

### Brand & Dark
- **Blur Orange** (`#ff8700`): The singular voltage. Used on Bid CTAs, active filter pills, bid-pool bar tint, focus rings, link colour.
- **Brand Hover** (`#cc6c00`): Pressed/hover — darker orange.
- **Brand Active** (`#a35700`): Pressed state on click.
- **Brand Soft** (`#ff87001a`): 10% orange tint — active filter row, bid-pool-active bar bg.
- **On-Brand** (`#000000`): Black text on orange CTAs. The 5.4:1 contrast ratio is the highest legible reading; white-on-orange would fall to 2.6 and fail AA.

### Accent
None. Blur deliberately rejects accent colours. Category tags, decorative highlights, and tertiary brand surfaces all use the same single orange — its scarcity is meaningless because it is the only chromatic system token. Rare-trait highlights use orange. Active filter pills use orange. The bid-pool bar uses orange. The system commits to **monochromatic + one voltage**.

### Interactive
- **Link** = Brand `#ff8700`, no underline default, underline on hover
- **Hover** — primary CTA → `#cc6c00`; rows shift bg to `#1a1a1a` and border to `#3d3d3d`
- **Active / Pressed** — Brand Active `#a35700`
- **Disabled** — `#5a5a5a` text, `#0d0d0d` bg, `cursor: not-allowed`
- **Selected (filter pill)** — orange border `#ff8700`, orange text `#ff8700`, brand-soft bg

### Neutral Scale
`#000000` (Canvas) → `#0d0d0d` (Surface Soft) → `#1a1a1a` (Surface Strong / Hover) → `#252525` (Surface Elevated) → `#262626` (Border) → `#3d3d3d` (Border Strong) → `#5a5a5a` (Subtle / Disabled) → `#878787` (Muted) → `#cccccc` (Body) → `#ffffff` (Ink). The scale is a true neutral grey ramp — no warmth, no coolness. Just black-to-white.

### Surface & Borders
- **Surface Soft** (`#0d0d0d`): Asset card bg, secondary panel, modal bg.
- **Surface Strong** (`#1a1a1a`): Hover bg for rows and cards, dropdown bg.
- **Surface Elevated** (`#252525`): Popover bg.
- **Border** (`#262626`): Default 1px hairline.
- **Border Soft** (`#1a1a1a`): Inner-row dividers (only 1 step lighter than canvas).
- **Border Strong** (`#3d3d3d`): Focused/hovered border.
- **Border Brand** (`#ff8700`): Active state border.

### Shadow Colors
**Blur uses no shadows.** Modal dialogs use a full-screen scrim (`rgba(0,0,0,0.80)`) but no card-shadow. Hover and elevation are expressed exclusively through surface-tier swaps and 1px border colour shifts. The focus ring (`0 0 0 2px rgba(255,135,0,0.50)`) is the system's only quasi-shadow effect.

### Semantic
- **Up** (`#22c55e`): Saturated price-up green. Used on portfolio gains, 24h floor up.
- **Up Soft** `#22c55e1a` — pill bg.
- **Down** (`#ef4444`): Saturated price-down red.
- **Down Soft** `#ef44441a` — pill bg.
- **Warning** (`#fbbf24`): Yellow — rare; used only on transaction-stuck warnings.
- **Info** (`#3b82f6`): Blue — extremely rare; used on educational tooltips.

The semantic up/down green/red are the **only chromatic colours besides orange** that appear on Blur surfaces. The discipline is total.

## 3. Typography Rules

### Font Family
- **Display & Body** — `JetBrains Mono`, fallback `"IBM Plex Mono", ui-monospace, monospace`. Default is mono; sans is fallback only.
- **Mono** — same family. (The "mono" role is identical to body; no distinction.)
- **Sans** — `Inter`, available for marketing landing copy if needed but **not used on product surfaces**.
- **OpenType** — `tnum` and `zero` enabled across all sizes (since everything is mono); `ss01` for dotted-zero on wallet addresses.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|-----:|-------:|------------:|---------------:|-------------|-------|
| display-mega   | JetBrains Mono | 56 | 700 | 1.00 | -1px   | default | Marketing hero — UPPERCASE |
| display-xl     | JetBrains Mono | 40 | 700 | 1.05 | -0.4px | default | Section heros — UPPERCASE |
| display-lg     | JetBrains Mono | 28 | 700 | 1.10 | 0      | default | Page titles — UPPERCASE |
| display-md     | JetBrains Mono | 20 | 700 | 1.15 | 0      | default | Sub-section titles — UPPERCASE |
| title-lg       | JetBrains Mono | 16 | 700 | 1.20 | 0      | default | Card titles — UPPERCASE |
| title-md       | JetBrains Mono | 14 | 700 | 1.20 | 0.4px  | default | Modal headers — UPPERCASE |
| title-sm       | JetBrains Mono | 12 | 700 | 1.20 | 0.6px  | default | Inline emphasis — UPPERCASE |
| body-md        | JetBrains Mono | 13 | 400 | 1.40 | 0      | default | Default running text |
| body-sm        | JetBrains Mono | 12 | 400 | 1.40 | 0      | default | Secondary body |
| table-row      | JetBrains Mono | 13 | 500 | 1.30 | 0      | tnum, zero | Collection table rows |
| table-header   | JetBrains Mono | 11 | 700 | 1.20 | 0.8px  | default | Table column headers — UPPERCASE |
| asset-name     | JetBrains Mono | 13 | 500 | 1.20 | 0      | default | Asset card primary label |
| price-display  | JetBrains Mono | 16 | 700 | 1.20 | 0      | tnum, zero | Asset card primary price |
| price-row      | JetBrains Mono | 13 | 500 | 1.30 | 0      | tnum, zero | Table-row prices |
| button         | JetBrains Mono | 13 | 700 | 1.20 | 0.4px  | default | All CTAs — UPPERCASE |
| nav-link       | JetBrains Mono | 13 | 700 | 1.20 | 0.4px  | default | Top nav — UPPERCASE |
| address-mono   | JetBrains Mono | 12 | 400 | 1.20 | 0      | tnum, zero, ss01 | Wallet truncation |
| code-micro     | JetBrains Mono | 11 | 400 | 1.40 | 0      | default | Tx-hash hints |
| label-eyebrow  | JetBrains Mono | 10 | 700 | 1.20 | 1px    | default | Smallest label — UPPERCASE |

### Principles
- **Mono is the brand voice** — every product surface, including body text, uses JetBrains Mono. Sans appears only on marketing landing pages
- **Uppercase + positive tracking on labels** — display, title, button, nav, eyebrow all uppercase with 0.4–1px positive tracking. Body and body-sm stay lowercase mixed-case
- **Weight 400 / 500 / 700 only** — three weights, no half-stops. 500 for emphasis, 700 for headlines and labels, 400 for running body
- **`tnum` always-on** — since everything is mono, this is technically redundant on most glyphs but explicit on numeric ranges anyway for portability
- **`ss01` on wallet addresses** — dotted zero distinguishes 0/O immediately; matters most when displaying truncated 0x… addresses
- **Negative tracking only on display-mega and display-xl** — at 56 and 40 the letterforms benefit from -1px and -0.4px respectively; everything below sits at 0 or positive
- **Substitutes**: JetBrains Mono is open-source — use directly. IBM Plex Mono is the closest alternative. Roboto Mono and Source Code Pro read too humanist; SF Mono is system-locked. Avoid Courier — too typewriter-aesthetic for the trader register.

## 4. Component Stylings

### Buttons

**`button-primary`** — Primary CTA. Background `#ff8700`, **black** text, 8 × 16 padding, 36px height, 0px radius. Hover → `#cc6c00`. Pressed → `#a35700`. The black-on-orange contrast is non-negotiable — white-on-orange fails AA.

**`button-primary-lg`** — Marketing CTA. 12 × 24 padding, 44px height. Used at the top of marketing pages.

**`button-secondary`** — Background `#1a1a1a`, white text, 1px `#262626` border, 0px radius, 36px height. Used for "CANCEL", "BACK", non-destructive secondary actions.

**`button-ghost`** — Transparent bg, white text, 1px `#262626` border. Hover → bg `#0d0d0d`, border `#3d3d3d`.

**`button-bid`** — Asset detail primary. Orange bg, black text, 12 × 24 padding, 40px height. Always paired with `button-cancel` (ghost) on left.

**`button-list`** — Creator-side action. **White** bg, black text — colour-inverted variant signalling "creator action" vs orange's "buyer action". 12 × 24 padding, 40px height.

### Cards

**`asset-card`** — `#0d0d0d` bg, 1px `#262626` border, 0px radius. NFT artwork bleeds full-width to top edge (no padding). Metadata strip below at 8px padding (denser than OpenSea/Magic Eden). Two-row metadata: (1) asset name in JetBrains Mono 13/500, (2) price-display JetBrains Mono 16/700 with "Ξ" prefix. Hover swaps bg to `#1a1a1a`, border to `#3d3d3d`. **No translateY, no shadow** — purely colour-state transition.

**`collection-row`** — Table row in collection list. 56px tall, `#000` bg, 1px `#1a1a1a` bottom border, 16px horizontal padding. Columns: rank, collection name + verified, floor (mono), 24h volume (mono), 24h change (green/red mono), owners. Hover swaps bg to `#0d0d0d`. No row radius.

**`bid-pool-bar`** — Fixed bottom-bar, 48px tall, `#1a1a1a` bg, 1px `#262626` top border. Shows "BIDS: 12 / 4.20 ETH" in mono uppercase. When active (any bid open), the bg shifts to `rgba(255,135,0,0.10)` and the top border shifts to `#ff8700`. **The system's signature surface** — present on every authenticated page, never hidden.

### Badges / Tags / Pills

**`badge-trait`** — Trait label. `#1a1a1a` bg, white text, 0px radius, 2 × 6 padding, label-eyebrow 10/700 1px tracking uppercase.

**`badge-rare`** — Rare-trait label. `rgba(255,135,0,0.10)` bg, `#ff8700` text, 0px radius, 2 × 6 padding. Same dimensions as trait — the colour swap is the only difference.

**`badge-trending`** — Trending-up label. `rgba(34,197,94,0.15)` bg, `#22c55e` text. Same 0px / 2 × 6 / label-eyebrow.

**`filter-pill`** — Filter chip. `#000` bg, muted text, 1px `#262626` border, 0px radius, 6 × 10 padding. label-eyebrow 10/700 1px uppercase. Active → orange text, orange border, brand-soft bg. **Note: filter pills are 0px rectangles, not pills** — the term "pill" here is naming-convention only.

### Inputs / Forms

**`input-text`** — `#0d0d0d` bg, 1px `#262626` border, 0px radius, 8 × 12 padding, 36px height. Focus → 2px `rgba(255,135,0,0.50)` ring, border tightens to `#ff8700`. Cursor caret is `#ff8700`.

**`input-search`** — Identical to input-text. Magnifying-glass icon prefix.

**`input-bid-eth`** — Bid amount input. 48px height, JetBrains Mono price-display, "Ξ" prefix, 1px `#3d3d3d` strong border. Brand-soft bg `rgba(255,135,0,0.05)` when focused.

### Navigation

**`top-nav`** — 56px tall, `#000` bg, 1px `#262626` bottom border. Wordmark left ("BLUR" in stretched display), primary tabs (Collections, Portfolio, Activity, Airdrop), right cluster (Connect Wallet button — orange on black). Tab active state: `#ff8700` text, 1px `#ff8700` bottom border.

**`side-filter-panel`** — Collection-page left filter rail. 240px wide (narrower than OpenSea's 280), `#000` bg, 1px `#262626` right border, 16px × 12px padding. Sections: STATUS, PRICE RANGE, MARKETPLACES, TRAITS — all label-eyebrow uppercase headers with filter-pill children.

### Modals & Overlays

**`modal-bid`** — Bid-placement modal. `#000` bg, 1px `#262626` border, 0px radius, 24px padding. Holds price input + duration dropdown + fee breakdown. Modal scrim is `rgba(0,0,0,0.80)`.

**`toast`** — `#1a1a1a` bg, 1px `#262626` border (or 1px brand `#ff8700` for primary toast), 0px radius, 12 × 16 padding. Auto-dismiss at 3s.

### Decorative

**`footer`** — `#000` bg, 1px `#262626` top border, 32px vertical padding (compact). Multi-column link list (Markets, Resources, Company), wordmark in stretched display, social icons in muted grey. **No newsletter input** — the brand's commitment to no decoration extends to footer affordances.

## 5. Layout Principles

### Spacing System
- **Base unit**: 4px.
- **Tokens**: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64.
- **Section padding (vertical)**: 64px on marketing — tighter than OpenSea's 80, much tighter than Coinbase's 96. Trader register.
- **Card internal padding**: 8px on asset cards (densest in this set), 16px on modals.
- **Gutters**: 12px between asset cards, 16px between table cells.

### Grid & Container
- **Max content width**: 1600px on marketplace pages — widest in the set, accommodating dense terminal-style layouts on 4K monitors.
- **Marketplace grid**: responsive `grid-template-columns: repeat(auto-fill, minmax(180px, 1fr))` with 12px gap — flexes from 8-up at wide to 2-up at mobile.
- **Collection page**: 240px filter rail left, asset grid right.
- **Portfolio page**: full-width table, no rail. Sticky table header on scroll.

### Whitespace Philosophy
**Brutalist trader-pro density.** Blur willingly trades comfort for information per pixel. Marketing pages get 64px section padding; product pages get 32–48px. The system rejects breathing room as decoration when not functional.

### Section Cadence
There is no light/dark alternation — the page stays pure black `#000` throughout. Surface variation is expressed through the three-tier elevation ladder. The fixed bid-pool bar at the bottom is the only persistent chromatic punctuation.

## 6. Shapes & Radius

- **None** 0 — every CTA, every card, every modal, every input, every badge — Blur's brutalist commitment
- **Full** 9999 — circular avatars only (the only place curves exist on the surface)

This is not a radius scale; it is a binary. Either the element is rectangular (0px) or circular (9999px). No middle ground. No 8px softening, no pill rounding, no 12px feature card. The 0-or-9999 commitment is the system's clearest single design decision.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 Flat | No shadow, no border | Body sections |
| 1 Hairline | 1px `#262626` | Default cards, inputs, table rows |
| 2 Surface step | `#000` → `#0d0d0d` | Asset cards, panel surfaces |
| 3 Hover | `#0d0d0d` → `#1a1a1a` | Card and row hover |
| 4 Modal scrim | `rgba(0,0,0,0.80)` covering viewport | Modal dialogs (modal itself uses surface-soft bg + border, no shadow) |
| Focus ring | `0 0 0 2px rgba(255,135,0,0.50)` | All keyboard focus |

**Shadow Philosophy**: **None.** Blur is the only system in this set that uses zero drop-shadows. Depth is expressed exclusively through surface-tier swaps and border colour shifts. The focus ring is technically a `box-shadow` but functions as outline rather than depth. This is the most uncompromising single-system design decision in the set.

## 8. Interaction & Motion

- **Easing standard** — `linear` for colour-state transitions. Linear because: the brand rejects anticipated/eased animation as decorative. State swaps are immediate.
- **Easing emphasized** — `cubic-bezier(0.4, 0, 0.6, 1)` reserved for the rare modal-fade-in
- **Durations** — fast 80ms (hover colour), standard 120ms (focus ring), slow 200ms (modal fade)
- **Hover** — primary CTA darkens to `#cc6c00` over 80ms (linear). Rows swap bg `#000 → #1a1a1a` and border `#262626 → #3d3d3d` over 80ms. Filter pills swap to brand-soft instantly (0ms — no transition).
- **No card lift, no shadow intensify, no scale, no translate** — anywhere. Hover is a colour swap, full stop.
- **Price flash** — when an active bid updates, the price field flashes `rgba(34,197,94,0.20)` (up) or `rgba(239,68,68,0.20)` (down) bg for 600ms then snaps back. **No fade** — the snap is intentional.
- **Modal fade-in** — 200ms cross-fade with the scrim; the modal itself fades in at the same time, no slide.
- **Bid-pool bar pulse** — when a new bid lands, the bar's orange top border pulses brightness 100% → 130% → 100% over 240ms once, then settles. Reduced-motion disables this.
- **Page transition** — none. Routes change without animation; the system commits to no decorative transitions.
- **Reduced motion** — minimal already. Pulse animations and modal fades collapse to opacity-only or are disabled. Colour-state transitions remain.

## 9. Accessibility & A11y

- **Contrast**: White on `#000` = 21:1 (AAA at every size — perfect contrast). Body `#cccccc` on canvas = 15.6:1 (AAA). Black on Orange `#ff8700` = 5.4:1 (AA at body). Up green `#22c55e` on canvas = 8.6:1 (AAA). Down red `#ef4444` on canvas = 5.4:1 (AA).
- **Focus indicator**: 2px solid `rgba(255,135,0,0.50)` ring — slightly thinner than other systems (3px elsewhere) because Blur's pure-black canvas makes 2px highly visible already.
- **ARIA patterns**: Collection table uses `role="table"` with `aria-sort` on column headers. Filter pills are `role="checkbox"` with `aria-checked`. Bid-pool bar uses `role="status"` with `aria-live="polite"` so screen readers announce bid updates.
- **Keyboard nav**: Table rows are focusable; Up/Down arrow moves between rows; Enter opens collection. Filter pills support keyboard tab + Space toggle.
- **Screen reader hints**: Colour-coded prices carry "+N% gain" / "-N% loss" prefix text in a visually-hidden span. Bid-pool count is announced as "12 active bids, 4.2 ETH at stake" on update.
- **Reduced motion**: Honoured — see §8.

## 10. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|------:|-------------|
| Mobile     | < 640  | Top nav → tabs collapse to a hamburger; filter rail → bottom-sheet; asset grid 2-up; bid-pool bar stays at 48px (sticky bottom); table collapses to card stack |
| Tablet     | 640–1024 | Asset grid 4-up; filter rail toggles via icon button; tables compress columns |
| Desktop    | 1024–1280 | Filter rail persistent; asset grid 5-up; full table columns |
| Wide       | > 1280 | Asset grid 6-up to 8-up; container at 1600px max — utilises 4K screen estate |

**Touch Targets**: Primary CTAs render at minimum 44 × 44px on mobile. Table rows expand to 64px on touch. Bid-pool bar tap area is full-width.

**Collapsing Strategy**: Top nav → hamburger sheet. Filter rail → bottom-sheet behind a sticky "FILTERS" pill. Tables collapse to card-stack with key columns surfaced. Bid-pool bar remains at full-width sticky bottom on every breakpoint.

**Image Behavior**: Asset card artwork uses `loading="lazy"` and `aspect-ratio: 1 / 1`. Avoids any decorative image; only NFT preview thumbnails appear.

## 11. Content & Voice

- **Tone** — terse, technical, trader-direct. "BIDS: 12" not "You have 12 active bids". "FLOOR: 4.20 ETH" not "Floor price is 4.20 ETH". The system uses the same compression in microcopy that it uses in layout — every word that doesn't carry information is removed.
- **Microcopy** — verbs are imperative + uppercase: "BID", "LIST", "CANCEL", "ACCEPT", "SWEEP". The all-caps verbs reinforce the trader register. Compound verbs are hyphenated mono-compounds: "MAKE-COLLECTION-BID", "CANCEL-ALL-BIDS".
- **CTA verbs** — "CONNECT WALLET" (entry), "BID" (primary), "LIST" (creator), "SWEEP" (one-tap multi-buy), "ACCEPT" (counter-offer), "CANCEL" (destructive).
- **Empty states** — minimal and curt. "NO BIDS" / "NO LISTINGS" / "NO ACTIVITY" — three words, all caps, no illustration, no apology, no suggestion.
- **Error messages** — direct and remediable. "INSUFFICIENT FUNDS — ADD ETH" not "Sorry, your balance is too low". Wallet errors quote the provider message verbatim.
- **Number formatting** — always `tnum`, locale-aware separators, 4 decimal places on ETH, no USD secondary line by default (Blur assumes the user thinks in ETH). USD shows on hover-tooltip only.
- **Address formatting** — `0x1234…abcd` (4 + 4) JetBrains Mono with `ss01` dotted zero. Click to copy; copy confirms with a 1.5s "COPIED" tooltip.
- **Brand voice prohibition** — no greetings, no apologies, no celebrations. The system never says "Welcome", never says "Sorry", never says "Congrats". "BID PLACED" is the entire success message.

## 12. Dark Mode & Theming

Blur is **dark-only**, full stop. There is no light mode and there will not be one. The pure-black canvas is the brand. A user-toggleable light variant has been considered and explicitly rejected by the team — light mode breaks the trader-terminal register that the entire visual system commits to.

If a hypothetical light variant ever shipped, the predicted token swap would be: `bg #ffffff`, `surface-soft #fafafa`, `surface-strong #f4f4f4`, `border #e5e5e5`, `text #000000`, `text-body #404040`, with `#ff8700` carrying through unchanged. But the brand's editorial position is that this surface should never exist — Blur is explicitly a "trade in the dark" instrument, both literally (pro-traders working through the night) and metaphorically (alpha-discovery in obscure corners of the market).

## 13. Lineage & Influences

Blur's design language inherits from **professional trading terminals** more than from any other category. The pure-black canvas, mono-default typography, all-caps labels, 0px corner radius, and zero-shadow elevation are direct references to TradingView Pro, Bloomberg Terminal classic mode, and the Interactive Brokers desktop client. The bid-pool bar borrows its persistent-bottom-strip pattern from Bloomberg's command line.

Visually it rejects everything OpenSea and Magic Eden built. Where OpenSea uses navy-tinted near-black, Blur uses pure black. Where OpenSea has 10px card radius, Blur has 0. Where OpenSea uses single brand-blue and Inter, Blur uses single brand-orange and JetBrains Mono. Where OpenSea allows hover-lifts and brand-tinted edge rings, Blur has zero shadows and only colour-state transitions. The brand was built explicitly as an anti-OpenSea — for traders who found the OpenSea consumer-facing surface too soft.

What it borrows from contemporaries: the "Sweep" verb (shared with Magic Eden, original to 1inch / Cowswap DeFi tooling); the Connect Wallet entry pattern (universal to web3); semantic up-green / down-red. Beyond those primitives, Blur's surface is intentionally illegible to anyone who hasn't used a financial trading terminal before.

What it explicitly rejects: rounded corners, shadows, gradients, glassmorphism, illustrations, decorative animations, sans-serif body type, lowercase headlines, soft warm canvas tones, dark-navy-instead-of-pure-black, blue-instead-of-orange, white-on-orange (fails AA), pill CTAs.

Influences:
- **TradingView Pro / Bloomberg Terminal** — Pure-black canvas, mono-default, dense table layouts, persistent command/info strip. https://www.tradingview.com / https://www.bloomberg.com/professional
- **Interactive Brokers TWS** — Trader-aesthetic dark UI, zero ornament. https://www.interactivebrokers.com
- **Linear (rejected influence)** — Blur shares Linear's commitment to a single near-black surface but rejects Linear's gradient atmospheric effects entirely.
- **OpenSea (anti-influence)** — Blur was designed explicitly as the trader-pro counterpart to OpenSea's consumer-friendly surface. Every shape decision (0px vs 10px radius, mono vs Inter, no-shadow vs lit-edge) is opposite-of-OpenSea by construction.
- **JetBrains Mono** by JetBrains design team — The body and display typeface; selected for its open-source license, broad weight set, and dotted-zero variant. https://www.jetbrains.com/lp/mono

## 14. Do's and Don'ts

### Do
- Keep the canvas at pure `#000000` — navy-tint reads OpenSea, warm-tint reads Magic Eden
- Reserve `#ff8700` for primary actions and active states only — and use **black** text on it (white-on-orange fails AA)
- Use JetBrains Mono everywhere — body, headlines, buttons, navigation, labels. Not just numbers
- Uppercase every label, button, and headline above body-md size; positive tracking 0.4–1px
- 0px radius on every CTA, card, modal, input, badge — the brutalist commitment is the brand
- Use surface-tier colour swaps for hover and elevation; never shadows, never transforms
- The fixed bid-pool bar is mandatory on authenticated pages — never hide it
- Black-on-orange CTAs (5.4:1 AA) — never white-on-orange (2.6:1 fails AA)
- 12px asset card gutters — densest in the marketplace category
- All animation linear, all transitions ≤120ms — eased animation reads as decorative

### Don't
- Don't use navy-tinted black `#04111d` (that's OpenSea) — pure `#000` is mandatory
- Don't add shadows, glows, gradients, or backdrop-blur — anywhere
- Don't soften corners — even on modals, even on rare-trait badges. 0px or circular avatar only
- Don't use sans-serif Inter on product surfaces — sans is fallback only, mono is brand
- Don't use lowercase headlines — display-mega through title-sm all UPPERCASE
- Don't use white-on-orange CTA text — fails AA. Black on orange is the only sanctioned combination
- Don't translate or lift cards on hover — colour-state swap is the only sanctioned hover gesture
- Don't add accent colours beyond green/red semantic tokens — orange is the only chromatic system
- Don't use "Welcome", "Sorry", "Congrats" copy — Blur's voice is terse-imperative, never conversational
- Don't add a newsletter input or social-share affordance to the footer — keep footer minimal

## 15. Agent Prompt Guide

### Quick Color Reference
- Brand: Blur Orange `#ff8700`
- Brand pressed: `#cc6c00`
- Canvas: `#000000`
- Surface soft: `#0d0d0d`
- Surface strong: `#1a1a1a`
- Text ink: `#ffffff`
- Body: `#cccccc`
- Muted: `#878787`
- Border: `#262626`
- Border strong: `#3d3d3d`
- Up green: `#22c55e`
- Down red: `#ef4444`

### Example Component Prompts
- "Create a Blur hero band: pure `#000000` background, 56px JetBrains Mono weight 700 UPPERCASE headline 'THE FASTEST NFT MARKETPLACE' with -1px tracking in `#ffffff`, body-md sub at 13px JetBrains Mono in `#cccccc`, primary CTA `#ff8700` 0px radius 8 × 16 padding 'CONNECT WALLET' with **black** text weight 700 0.4px tracking uppercase. Below: ghost button 'LEARN MORE' transparent bg with 1px `#262626` border."
- "Design an asset card: `#0d0d0d` bg, 1px `#262626` border, 0px radius. Top: 1:1 NFT artwork bleeding to edges. Bottom: 8px padding, asset name JetBrains Mono 13/500 in `#ffffff` (e.g. 'BAYC #1234'), price below in price-display JetBrains Mono 16/700 'Ξ 4.20'. Hover: bg → `#1a1a1a`, border → `#3d3d3d`. NO transform, NO shadow."
- "Build a collection table row: 56px tall, `#000` bg, 1px `#1a1a1a` bottom border, 16px horizontal padding. Columns: rank '#1' in mono, collection name + verified-blue checkmark, floor mono 'Ξ 4.20', 24h volume mono '320 Ξ', 24h change green '+12.4%' (or red '-3.2%'). Hover: bg → `#0d0d0d`."
- "Render the bid-pool bottom-bar: fixed bottom, 48px tall, full-width, `#1a1a1a` bg, 1px `#262626` top border. Inside: label-eyebrow 10/700 1px tracking uppercase 'ACTIVE BIDS' in `#878787`, then JetBrains Mono 13/500 '12 / 4.20 Ξ' in `#ffffff`. Right side: button-primary `#ff8700` text 'MANAGE BIDS' weight 700 black."
- "Compose a filter pill rail: vertical stack, each pill `#000` bg, 1px `#262626` border, 0px radius (rectangle), 6 × 10 padding, label-eyebrow 10/700 1px tracking uppercase. Active pill: `rgba(255,135,0,0.10)` bg, `#ff8700` border, `#ff8700` text. Headers above each section: label-eyebrow 10/700 1px tracking uppercase in `#878787` ('STATUS', 'PRICE', 'TRAITS')."

### Iteration Guide
1. Pure black canvas `#000000` only — never navy tint, never warming. The commitment is total
2. JetBrains Mono everywhere — including body. Inter is fallback only and never appears on production surfaces
3. 0px corner radius on every CTA, card, modal, badge — the brutalist commitment is the brand
4. UPPERCASE every label, button, headline above body-md — positive tracking 0.4–1px
5. Hover is a colour swap, never a transform. No translateY, no shadow, no scale
6. Black-on-orange CTAs at 5.4:1 contrast — never white-on-orange (2.6:1 fails AA)
7. The 48px fixed bid-pool bar is mandatory on every authenticated page — present even when no bids active
8. All animation linear, all durations ≤120ms — eased animation reads as decoration on this surface
9. No accent colours beyond semantic up-green / down-red. Orange is the only chromatic system token
10. Voice is terse-imperative — "BID", "LIST", "CANCEL", "NO BIDS", "INSUFFICIENT FUNDS". Never conversational
