---
name: Magic Eden
tagline: Mint-cream canvas, magenta-mint accent duet, and a custom Foundry display — Solana-native marketplace as boutique gallery.
updated_at: 2026-05-05T10:17:17+12:00
published_at: 2026-05-05T10:17:17+12:00
author: webdesignhot
source_url: https://magiceden.io
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [marketplace, fintech]
tags: [light, boutique, marketplace, nft, web3, mint, magenta, gallery]
preview_swatch: ['#fdfaf3', '#e42575', '#0c0c0c']
related: [opensea, coinbase, stripe]
description: 'Magic Eden reads like a boutique gallery that learned to speak Solana. The default canvas is a warm mint-cream `#fdfaf3` (not pure white, not paper — a champagne-tinted off-white that signals "considered" against the trader-pro dark of OpenSea and Blur), surfaces step up through `#fff8eb` and `#f4ead4`, and the system pairs two voltages — Magic-Eden Magenta `#e42575` for primary actions and a mint-green `#3eb489` for verified/positive accents. Type runs a custom Foundry display (Editorial New-style high-contrast serif at display sizes) over Inter for body — the serif headline + sans body duet borrows directly from the editorial-magazine playbook (Wired, Notion''s Lyon Text). Layout is grid-first like OpenSea, but the gutters relax (24px not 16px), the cards round more aggressively (16px), and category spotlights take feature-band treatment with collection art bleeding behind tinted overlays. Where OpenSea commits to terminal density on dark, Magic Eden commits to boutique-curation density on warm-cream — same marketplace mechanics, opposite emotional register.'

colors:
  bg: '#fdfaf3'                # canvas — mint-cream off-white
  bg-strong: '#fff8eb'         # surface-soft — secondary band, soft elevation
  bg-deep: '#f4ead4'            # surface-deep — feature band ground
  bg-dark: '#0c0c0c'           # surface-dark — full-bleed editorial heroes
  bg-dark-elev: '#1a1a1a'      # surface-dark-elevated — cards inside dark heroes
  surface-card: '#ffffff'      # default white card on cream canvas
  surface-card-hover: '#fff8eb'  # card hover state on light surface
  text: '#0c0c0c'              # ink — primary headlines
  text-body: '#3a3a3a'         # body — running paragraph text
  text-muted: '#6b6b6b'        # captions, table headers
  text-subtle: '#9a9a9a'       # disabled, lowest hierarchy
  text-on-dark: '#fdfaf3'      # cream ink on dark heroes (not pure white)
  text-on-dark-soft: '#9a9a9a' # muted on dark
  brand: '#e42575'             # Magic Eden Magenta — primary voltage
  brand-hover: '#c01b62'       # primary-hover — pressed magenta
  brand-active: '#a01753'      # primary-active — pressed
  brand-soft: '#e425751a'      # 10% magenta tint — selected row
  brand-glow: 'rgba(228,37,117,0.35)'  # focus ring
  on-brand: '#ffffff'          # white-on-magenta CTAs
  accent-mint: '#3eb489'       # mint accent — verified, positive states
  accent-mint-soft: '#3eb4891a'
  accent-violet: '#7a5af8'     # secondary accent — magic-link, special
  accent-yellow: '#f4b942'     # rare-trait gold (warmer than OpenSea's)
  border: '#e8dfc7'            # warm hairline (cream-tinted)
  border-soft: '#f0e8d4'       # softer divider
  border-strong: '#cdbf99'     # focused input border
  semantic-up: '#3eb489'       # uses mint accent
  semantic-up-soft: '#3eb4891a'
  semantic-down: '#d63b3b'     # warm red (not crimson)
  semantic-down-soft: '#d63b3b1a'
  semantic-warning: '#f4b942'
  semantic-info: '#7a5af8'
  verified-mint: '#3eb489'     # verified-collection mint checkmark
  focus-ring: 'rgba(228,37,117,0.35)'
  scrim: 'rgba(12,12,12,0.55)'
  link: '#e42575'
  link-hover: '#c01b62'

typography:
  display:
    family: '"Foundry Display", "Editorial New", "Tiempos Headline", Georgia, serif'
    weights: [400, 500]
    opentype-features: ['ss01', 'liga']
  body:
    family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-mega:   { size: 80, weight: 400, lineHeight: 1.00, tracking: '-2px',   family: display }
    display-xl:     { size: 56, weight: 400, lineHeight: 1.05, tracking: '-1.4px', family: display }
    display-lg:     { size: 40, weight: 400, lineHeight: 1.10, tracking: '-1px',   family: display }
    display-md:     { size: 32, weight: 400, lineHeight: 1.15, tracking: '-0.6px', family: display }
    title-lg:       { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.2px', family: body }
    title-md:       { size: 20, weight: 600, lineHeight: 1.30, tracking: '0',      family: body }
    title-sm:       { size: 16, weight: 600, lineHeight: 1.30, tracking: '0',      family: body }
    asset-name:     { size: 16, weight: 600, lineHeight: 1.20, tracking: '0',      family: body }
    body-md:        { size: 15, weight: 400, lineHeight: 1.55, tracking: '0',      family: body }
    body-sm:        { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',      family: body }
    caption:        { size: 13, weight: 400, lineHeight: 1.40, tracking: '0',      family: body }
    caption-strong: { size: 12, weight: 600, lineHeight: 1.40, tracking: '0.4px',  family: body }
    label-eyebrow:  { size: 11, weight: 600, lineHeight: 1.40, tracking: '0.8px',  family: body }
    pull-quote:     { size: 28, weight: 400, lineHeight: 1.35, tracking: '-0.3px', family: display }
    price-display:  { size: 20, weight: 500, lineHeight: 1.20, tracking: '0',      family: mono, opentype: 'tnum, zero' }
    price-row:      { size: 14, weight: 500, lineHeight: 1.30, tracking: '0',      family: mono, opentype: 'tnum, zero' }
    button:         { size: 14, weight: 600, lineHeight: 1.20, tracking: '0',      family: body }
    nav-link:       { size: 14, weight: 500, lineHeight: 1.30, tracking: '0',      family: body }
    address-mono:   { size: 12, weight: 400, lineHeight: 1.30, tracking: '0',      family: mono, opentype: 'tnum, zero' }
    code-micro:     { size: 11, weight: 400, lineHeight: 1.40, tracking: '0',      family: mono }

radius:
  none: 0
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 20
  card: 16
  pill: 999
  full: 9999

spacing:
  base: 4
  scale: { xxs: 4, xs: 8, sm: 12, base: 16, md: 20, lg: 24, xl: 32, xxl: 48, section: 96 }

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72
  grid-gutter: 24

components:
  button-primary:        { bg: brand, text: on-brand, padding: '12px 24px', height: 44, radius: pill, font: button }
  button-primary-lg:     { bg: brand, text: on-brand, padding: '16px 32px', height: 52, radius: pill, font: button }
  button-secondary:      { bg: bg-strong, text: text, padding: '12px 24px', height: 44, radius: pill, border: '1px solid border' }
  button-ghost:          { bg: transparent, text: text, padding: '12px 24px', height: 44, radius: pill, border: '1px solid border-strong' }
  button-mint:           { bg: accent-mint, text: text, padding: '12px 24px', height: 44, radius: pill, font: button }
  button-buy-now:        { bg: brand, text: on-brand, padding: '14px 28px', height: 48, radius: pill, font: button }
  button-make-offer:     { bg: bg-strong, text: text, padding: '14px 28px', height: 48, radius: pill, border: '1px solid border' }
  asset-card:            { bg: surface-card, border: '1px solid border', radius: card, padding: 0 }
  asset-card-hover:      { bg: surface-card-hover, border: '1px solid border-strong', radius: card, transform: 'translateY(-3px)' }
  collection-card:       { bg: surface-card, border: '1px solid border', radius: lg, padding: lg }
  feature-band:          { bg: bg-deep, padding: 'section 0', radius: 0 }
  hero-banner:           { bg: bg-strong, height: 360, radius: lg, padding: '40px 48px' }
  badge-verified:        { bg: 'rgba(62,180,137,0.15)', text: accent-mint, radius: pill, padding: '2px 10px' }
  badge-trending:        { bg: 'rgba(62,180,137,0.15)', text: accent-mint, radius: pill, padding: '4px 12px' }
  badge-rare:            { bg: 'rgba(244,185,66,0.18)', text: accent-yellow, radius: pill, padding: '4px 12px' }
  badge-magic:           { bg: brand-soft, text: brand, radius: pill, padding: '4px 12px' }
  input-text:            { bg: surface-card, border: '1px solid border', radius: md, padding: '12px 16px', height: 44 }
  input-search:          { bg: bg-strong, border: '1px solid border', radius: pill, padding: '12px 20px', height: 44 }
  input-bid-sol:         { bg: surface-card, border: '1px solid border-strong', radius: md, padding: '16px 18px', height: 60, font: price-display }
  top-nav:               { bg: bg, border: '1px solid border-soft', height: 72, font: nav-link }
  side-filter-panel:     { bg: surface-card, border: '1px solid border', radius: lg, padding: lg, width: 280 }
  trait-pill:            { bg: bg-strong, text: text-body, radius: pill, padding: '6px 14px', font: caption }
  modal-list-nft:        { bg: surface-card, border: '1px solid border', radius: xl, padding: xl }
  toast-success:         { bg: surface-card, border: '1px solid accent-mint', radius: md, padding: 'sm base' }
  toast-error:           { bg: surface-card, border: '1px solid semantic-down', radius: md, padding: 'sm base' }
  footer-dark:           { bg: bg-dark, text: text-on-dark, padding: '64px 0' }

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 120
  duration-standard: 240
  duration-slow: 360
  reduced-motion: 'respects prefers-reduced-motion: reduce — card lifts collapse to opacity-only, magic-particle cursor effects disabled entirely'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(12,12,12,0.04) 0 1px 2px'
  standard: 'rgba(12,12,12,0.06) 0 6px 16px'
  elevated: 'rgba(12,12,12,0.10) 0 16px 32px -8px'
  card-hover: 'rgba(12,12,12,0.12) 0 20px 40px -16px, rgba(228,37,117,0.08) 0 0 0 1px'
  modal: 'rgba(12,12,12,0.20) 0 32px 64px -8px'
  ring: '0 0 0 3px rgba(228,37,117,0.35)'
  none: 'none'

accessibility:
  contrast-text-on-bg: 17.8
  contrast-text-on-brand: 4.6
  contrast-body-on-bg: 9.4
  focus-ring: '3px solid rgba(228,37,117,0.35)'
  reduced-motion-honored: true

dark-mode: dual
---

## 1. Visual Theme & Atmosphere

Magic Eden reads like a boutique gallery that learned to speak Solana. The default canvas is **mint-cream** `#fdfaf3` — not pure white (that would read OpenSea-clinical), not paper-cream (that would read Notion-editorial), but a champagne-tinted off-white with a faint mint undertone that signals "considered" and "warmer than crypto-typical." Surfaces step up through `#fff8eb` (a half-tone warmer band) and `#f4ead4` (a pale-honey deep band used for feature spotlights), creating a three-tier warmth ladder that contrasts pointedly with OpenSea's three-tier dark navy.

The brand operates as a **two-voltage duet**: Magic-Eden Magenta `#e42575` for every primary action (Buy now, List, Connect Wallet, primary CTA), and Mint `#3eb489` for verified marks and positive trend indicators. Magenta and mint sit roughly opposite on the colour wheel — a high-contrast complement that feels deliberately gallery-curated rather than crypto-loud. A tertiary `#7a5af8` violet appears rarely on "Magic Link" / special-feature surfaces.

Type carries the brand's editorial-gallery thesis. Display sizes (32px and above) run a **custom Foundry Display** — a high-contrast modern serif in the lineage of Editorial New, Tiempos Headline, and Lyon — set at weight 400 with -2px tracking on the 80px display-mega. Body switches to **Inter** at 15px (slightly larger than OpenSea's 14px to soften the trader-density). The serif-display + sans-body duet directly references magazine design — Wired, the New York Times Magazine, Notion's Lyon Text accents. Numbers swap to JetBrains Mono with `tnum` for price columns.

Layout is grid-first like OpenSea, but at relaxed density: 24px gutters between asset cards (vs OpenSea's 16px), 16px card radius (vs 10px), and the marketplace surface willingly trades two-cards-per-row of density for breathing room. Featured collections get full-band treatment with collection art bleeding behind a `#f4ead4` deep-cream overlay; here the gallery atmosphere shows up most clearly.

The brand owns one signature interaction: a faint magic-particle cursor trail (heart-shaped pixel sparkles in `#e42575` and `#3eb489`) on hover over featured collection cards, fading at 600ms. It's the only "playful" gesture in the system and is reduced-motion-honoured.

**Key Characteristics:**
- Mint-cream canvas `#fdfaf3` — warmer than white, cooler than ecru
- Two-voltage duet: Magenta `#e42575` (action) + Mint `#3eb489` (verified, positive)
- Foundry Display (custom serif) at weight 400 for display-md and above
- Inter body at 15px — slightly larger than trader-pro density
- Three-tier warmth surface ladder: cream → fff8eb → f4ead4 deep band
- Pill-shaped CTAs at 999px radius — boutique-friendly
- 16px asset card radius with 24px gutters — gallery breathing room
- Dark-footer + dark-hero punctuation: `#0c0c0c` bg with cream `#fdfaf3` text (not pure white)
- Signature magic-particle cursor trail on hover (reduced-motion honoured)

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#fdfaf3`): Mint-cream page floor, the brand's defining warmth signal.
- **Surface Soft** (`#fff8eb`): Secondary surface band, card hover bg.
- **Surface Deep** (`#f4ead4`): Feature-band ground, used to anchor curated collection spotlights.
- **Ink** (`#0c0c0c`): Primary headlines, asset names. Not pure black — a near-black with a faint warmth.
- **Brand** (`#e42575`): Magic-Eden Magenta — every primary action.

### Brand & Dark
- **Magic Eden Magenta** (`#e42575`): Primary CTA, primary link, primary brand glyph.
- **Brand Hover** (`#c01b62`): Pressed/hover state.
- **Brand Active** (`#a01753`): Pressed state on physical click.
- **Brand Soft** (`#e425751a`): 10% magenta tint — selected filter row, active tab background.
- **Surface Dark** (`#0c0c0c`): Full-bleed editorial hero ground; footer.
- **Surface Dark Elevated** (`#1a1a1a`): Cards inside dark heroes.

### Accent
- **Mint** (`#3eb489`): Verified-collection checkmark; positive trend indicator (24h up); secondary CTA.
- **Mint Soft** (`#3eb4891a`): Verified-pill background, trending-up pill bg.
- **Violet** (`#7a5af8`): Tertiary accent reserved for "Magic Link" / special features. Used very rarely.
- **Rare-Yellow** (`#f4b942`): Rare-trait highlight (warmer than OpenSea's `#fbbf24`).

### Interactive
- **Link** = Brand `#e42575`, no underline default, underline on hover
- **Hover** — primary CTA → `#c01b62`; asset cards lift 3px with brand-tinted edge ring
- **Active / Pressed** — Brand Active `#a01753`
- **Disabled** — `#9a9a9a` text, `#fff8eb` bg, `cursor: not-allowed`
- **Selected (filter row)** — `#e425751a` bg with `#e42575` text and 1px `#e42575` border-left

### Neutral Scale
`#fdfaf3` (Canvas) → `#fff8eb` (Surface Soft) → `#f4ead4` (Surface Deep) → `#e8dfc7` (Border) → `#cdbf99` (Border Strong) → `#9a9a9a` (Subtle) → `#6b6b6b` (Muted) → `#3a3a3a` (Body) → `#0c0c0c` (Ink). Note the entire light scale carries a warm-cream tint — the system rejects cool/neutral greys in favour of warm-cream warmth.

### Surface & Borders
- **Surface Card** (`#ffffff`): Default white card sits on the cream canvas — the contrast itself is depth.
- **Card Hover** (`#fff8eb`): Card hover background warms a half-step toward surface-soft.
- **Border** (`#e8dfc7`): Default 1px hairline — warm cream-tinted.
- **Border Soft** (`#f0e8d4`): Softer divider on dense lists.
- **Border Strong** (`#cdbf99`): Focused input border, hovered card border.

### Shadow Colors
Magic Eden uses **near-black shadows at low opacity** (`rgba(12,12,12,0.04–0.20)`) on light surfaces. The signature card-hover shadow combines the neutral drop with a 1px brand-tinted edge ring (`rgba(228,37,117,0.08) 0 0 0 1px`), echoing OpenSea's lit-edge approach but at a softer 8% opacity (versus OpenSea's 10%). This is the system's only brand-tinted shadow.

### Semantic
- **Up** = Mint accent `#3eb489` — price-up green; portfolio gain
- **Up Soft** `#3eb4891a` — pill background
- **Down** (`#d63b3b`): Warm red — price-down, portfolio loss. Note this is warmer than OpenSea's `#eb5757` to harmonise with the cream canvas
- **Warning** (`#f4b942`): Rare; matches the rare-trait yellow
- **Info** (`#7a5af8`): Magic-link violet
- **Verified** = Mint `#3eb489` — the verified-collection checkmark uses mint, not magenta or blue. This is Magic Eden's clearest deviation from the OpenSea/Twitter "verified-blue" convention.

## 3. Typography Rules

### Font Family
- **Display** — `Foundry Display`, fallback `"Editorial New", "Tiempos Headline", Georgia, serif`. A high-contrast modern serif with sharp ball terminals and pronounced thin/thick contrast.
- **Body** — `Inter`, fallback `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`. Default weight 400, with 500/600/700 used for titles and inline emphasis.
- **Mono** — `JetBrains Mono`, fallback `"IBM Plex Mono", ui-monospace, monospace`. With `tnum` and `zero` enabled on every numerical surface.
- **OpenType** — Foundry Display `ss01` + `liga` enabled for stylistic alternates and ligature pairs (notably the "ct" and "st" connectors). Inter uses defaults.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|-----:|-------:|------------:|---------------:|-------------|-------|
| display-mega   | Foundry Display | 80 | 400 | 1.00 | -2px   | ss01, liga | Marketing hero — gallery-headline weight |
| display-xl     | Foundry Display | 56 | 400 | 1.05 | -1.4px | ss01       | Section heros |
| display-lg     | Foundry Display | 40 | 400 | 1.10 | -1px   | ss01       | Collection page name |
| display-md     | Foundry Display | 32 | 400 | 1.15 | -0.6px | ss01       | Sub-section titles |
| title-lg       | Inter | 24 | 600 | 1.25 | -0.2px | default | Asset detail title |
| title-md       | Inter | 20 | 600 | 1.30 | 0      | default | Card titles |
| title-sm       | Inter | 16 | 600 | 1.30 | 0      | default | Inline emphasis |
| asset-name     | Inter | 16 | 600 | 1.20 | 0      | default | Asset card label |
| body-md        | Inter | 15 | 400 | 1.55 | 0      | default | Default running text — 15 not 14 |
| body-sm        | Inter | 14 | 400 | 1.50 | 0      | default | Secondary body |
| caption        | Inter | 13 | 400 | 1.40 | 0      | default | Floor/last-sale labels |
| caption-strong | Inter | 12 | 600 | 1.40 | 0.4px  | default | Eyebrow tags |
| label-eyebrow  | Inter | 11 | 600 | 1.40 | 0.8px  | default | "FLOOR PRICE" column headers (uppercase) |
| pull-quote     | Foundry Display | 28 | 400 | 1.35 | -0.3px | ss01, liga | Editorial pull-quote |
| price-display  | JetBrains Mono | 20 | 500 | 1.20 | 0 | tnum, zero | Asset card primary price |
| price-row      | JetBrains Mono | 14 | 500 | 1.30 | 0 | tnum, zero | Table-row prices |
| button         | Inter | 14 | 600 | 1.20 | 0      | default | All CTAs |
| nav-link       | Inter | 14 | 500 | 1.30 | 0      | default | Top nav, side filters |
| address-mono   | JetBrains Mono | 12 | 400 | 1.30 | 0 | tnum, zero | Wallet address truncation |
| code-micro     | JetBrains Mono | 11 | 400 | 1.40 | 0 | default | Transaction hint |

### Principles
- **Foundry Display weight 400, not 700** — high-contrast modern serifs are loud at 400; bolding them past 500 reads as headline-shouting and breaks the gallery register
- **Three families with strict roles** — Foundry for display, Inter for body+UI, JetBrains for numbers. No fourth family ever
- **Body at 15px not 14px** — half-step larger than OpenSea, signalling editorial breath rather than terminal density
- **`tnum` always on prices** — column alignment matters even when the surface is gallery-soft
- **Pull-quotes go back to the serif** — not bolded sans, but Foundry Display at 28px/400 to maintain the editorial duet
- **Negative tracking only on display sizes** — body and below sit at 0 tracking, label-eyebrow gets 0.8px positive (slightly tighter than OpenSea's 0.6 for boutique discipline)
- **Substitutes**: Foundry Display is custom; closest open licensable equivalents are Editorial New (Pangram Pangram), Tiempos Headline (Klim), or Recoleta. For body, Inter directly. JetBrains Mono direct.

## 4. Component Stylings

### Buttons

**`button-primary`** — Primary CTA. Background `#e42575`, white text, 12 × 24 padding, 44px height, 999px pill radius. Hover → `#c01b62`. Pressed → `#a01753`. The pill shape is the boutique-friendly counterpart to OpenSea's rectangular trader-tool register.

**`button-primary-lg`** — Marketing CTA. 16 × 32 padding, 52px height. Used at the top of marketing pages and for the floating "Sweep" mobile bottom-sheet CTA.

**`button-secondary`** — On light surfaces. Background `#fff8eb`, ink text, 1px `#e8dfc7` border, 999px pill, same dimensions as primary. Pairs with primary in dual-CTA stacks.

**`button-ghost`** — Tertiary. Transparent bg, ink text, 1px `#cdbf99` border. Hover → bg `#fff8eb`.

**`button-mint`** — Mint variant for "List" / creator-side actions. Background `#3eb489`, ink text (not white — mint's contrast against white fails AA), 999px pill.

**`button-buy-now`** — Asset detail primary. Magenta `#e42575`, 14 × 28 padding, 48px height. Always paired with `button-make-offer` (secondary cream). The two-button block is the marketplace's checkout signature.

### Cards

**`asset-card`** — Marketplace fundamental unit. White `#ffffff` bg on the cream canvas, 1px `#e8dfc7` border, 16px radius. NFT artwork bleeds to top edges (no padding), metadata strip below at 16px padding (more generous than OpenSea's 12px). Rows: collection name (caption), asset name (asset-name), price block (price-display + label-eyebrow). Hover lifts 3px (one more than OpenSea), border shifts to `#cdbf99`, gains brand-tinted 1px edge-ring shadow.

**`collection-card`** — Larger curated card. White bg, 1px `#e8dfc7` border, 16px radius, 24px padding. Cover art 1:1 top with 12px radius inner. Holds collection name with mint-verified checkmark, floor in JetBrains Mono, mint or warm-red trending pill.

**`feature-band`** — Curated-collection spotlight. Full-width band at `#f4ead4` deep-cream ground, 96px vertical padding. Holds a 2-up grid: left column has a Foundry Display title-lg headline with mint-verified pill, right column shows a 4-up asset-card preview.

**`hero-banner`** — Featured collection on collection page. 360px tall, 16px radius, art bleeds full-width with a `#fdfaf3` cream overlay on the bottom-left third holding collection name (display-lg Foundry).

### Badges / Tags / Pills

**`badge-verified`** — Mint circle with white checkmark, 14 × 14px inline. The mint colour is Magic Eden's pointed deviation from the marketplace-blue verified convention.

**`badge-trending`** — Mint pill. `rgba(62,180,137,0.15)` bg, `#3eb489` text, 999px radius, 4 × 12 padding, caption-strong type.

**`badge-rare`** — Warm-yellow pill. `rgba(244,185,66,0.18)` bg, `#f4b942` text, 999px radius. Used on legendary traits.

**`badge-magic`** — Magenta pill for "Magic Link" / featured drop indicator. `rgba(228,37,117,0.10)` bg, `#e42575` text, 999px radius.

**`trait-pill`** — Neutral trait pill. `#fff8eb` bg, `#3a3a3a` text, 999px radius, 6 × 14 padding. Click-to-filter affordance.

### Inputs / Forms

**`input-text`** — Standard text input. White bg, 1px `#e8dfc7` border, 12px radius, 12 × 16 padding, 44px height. Focus → 3px `rgba(228,37,117,0.35)` ring, border tightens to `#e42575`.

**`input-search`** — Top-bar search. `#fff8eb` bg, 999px pill radius, magnifying-glass prefix icon, placeholder "Search collections, items, or wallets". 44px height (perfect pill).

**`input-bid-sol`** — SOL bid amount input. 60px height, JetBrains Mono price-display, SOL icon prefix, "◎" suffix; 1px `#cdbf99` strong border.

### Navigation

**`top-nav`** — 72px tall, `#fdfaf3` background, 1px `#f0e8d4` bottom hairline. Magic Eden wordmark left (custom Foundry serif treatment), search-input centred (max 480px wide), right cluster (Stats, Drops, Create dropdown, profile avatar, cart, connect-wallet pill).

**`side-filter-panel`** — Collection-page left filter. 280px wide, white bg, 1px `#e8dfc7` border, 16px radius, 24px padding. Sections: Status, Price, Chains (Solana / Ethereum / Bitcoin Ordinals), Traits — each as a collapsible accordion.

### Modals & Overlays

**`modal-list-nft`** — List-NFT flow modal. White bg, 1px `#e8dfc7` border, 20px radius, 32px padding. Holds price + duration + royalty input + fee breakdown. Modal scrim is `rgba(12,12,12,0.55)` near-black at 55%.

**`toast-success`** — White bg, 1px `#3eb489` mint border-left, 12px radius, 12 × 16 padding. Auto-dismiss at 4s.

**`toast-error`** — White bg, 1px `#d63b3b` warm-red border-left, manual dismiss.

### Decorative

**`magic-cursor-trail`** — On hover over featured collection cards, the cursor leaves a trail of 4–6 small heart-shaped pixel sparkles alternating `#e42575` and `#3eb489`, fading over 600ms. Reduced-motion-honoured (disabled entirely).

**`footer-dark`** — Dark footer that closes every page. `#0c0c0c` bg, `#fdfaf3` cream-tinted text (not pure white), 64px vertical padding. Multi-column link list (Marketplace, Stats, Create, Resources, Company).

## 5. Layout Principles

### Spacing System
- **Base unit**: 4px.
- **Tokens**: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 96.
- **Section padding (vertical)**: 96px on marketing — gallery breathing room.
- **Card internal padding**: 16px on asset cards (4px more generous than OpenSea), 24px on collection cards.
- **Gutters**: 24px between asset cards, 32px between feature blocks.

### Grid & Container
- **Max content width**: 1280px on marketplace pages (narrower than OpenSea's 1400 — boutique register), 1200px on marketing.
- **Marketplace grid**: responsive `grid-template-columns: repeat(auto-fill, minmax(240px, 1fr))` with 24px gap — flexes from 5-up at wide to 2-up at mobile.
- **Collection page**: 280px filter rail left, asset grid right (8-column inner due to 24px gutters).
- **Asset detail**: 6 cols media left, 6 cols metadata + price right.

### Whitespace Philosophy
**Boutique density** — denser than Notion's editorial, softer than OpenSea's terminal. The marketplace surface keeps 24px gutters and 16px card padding so each asset has visual room to be considered. Marketing pages relax to 96px section padding (matching Coinbase/Stripe) for editorial breath.

### Section Cadence
Top hero (curated band on `#f4ead4` deep cream) → trending now (4-up grid on canvas) → featured drops (full-bleed feature band) → top collections table (canvas) → notable artists (cream surface-soft band) → dark footer. The cadence alternates cream surface-soft and cream-deep bands to break density, with a single dark-footer punctuation.

## 6. Shapes & Radius

- **None** 0 — full-bleed feature band edges, hero art
- **xs** 4 — micro chips (rare)
- **sm** 8 — small interior elements
- **md** 12 — inputs, dropdowns
- **card** 16 — asset cards (the signature radius — softer than OpenSea's 10, harder than Apple's 24)
- **lg** 16 — collection cards, modal-soft variants
- **xl** 20 — list-NFT modal, large overlays
- **pill** 999 — every CTA, every status badge — boutique friendliness
- **full** 9999 — circular avatars, verified checkmark

The 999px pill on CTAs is Magic Eden's signature shape — a boutique counterpart to OpenSea's 8px rectangle. The 16px card radius is the marketplace's defining curve: at this scale, cards feel like postcards rather than tiles.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 Flat | No shadow, surface contrast only | Body sections, hero bands |
| 1 Card | White on cream canvas + 1px `#e8dfc7` | Asset cards, panel surfaces |
| 2 Hover | `#fff8eb` warmer bg + `translateY(-3px)` | Card hover |
| 3 Floating | `rgba(12,12,12,0.06) 0 6px 16px` | Dropdowns, tooltips |
| 4 Card-hover lit | `rgba(12,12,12,0.12) 0 20px 40px -16px, rgba(228,37,117,0.08) 0 0 0 1px` | Asset card on hover (signature) |
| 5 Modal | `rgba(12,12,12,0.20) 0 32px 64px -8px` + `rgba(12,12,12,0.55)` scrim | Modal dialogs |
| Focus ring | `0 0 0 3px rgba(228,37,117,0.35)` | All keyboard focus |

**Shadow Philosophy**: Magic Eden uses warmer cream hairlines and a single brand-tinted card-hover ring. The 1px `rgba(228,37,117,0.08)` edge-ring on hover is the system's only brand-tinted shadow — 2 percentage points softer than OpenSea's blue-tinted equivalent, reinforcing the boutique register. All other shadows are neutral near-black at low opacity.

## 8. Interaction & Motion

- **Easing standard** — `cubic-bezier(0.4, 0, 0.2, 1)` for hover, dropdown, modal fade
- **Easing emphasized** — `cubic-bezier(0.2, 0, 0, 1)` for asset-card lifts and band reveals
- **Easing bounce** — `cubic-bezier(0.34, 1.56, 0.64, 1)` reserved for cart-add and "Sweep" affordance
- **Durations** — fast 120ms (hover), standard 240ms (card lift, modal fade), slow 360ms (page transition)
- **Hover** — primary CTA darkens to `#c01b62` over 120ms; asset cards lift 3px and gain the lit-edge shadow; trait pills shift bg toward `#f4ead4`
- **Card lift** — `translateY(-3px)` on hover (one px more than OpenSea — boutique hover lifts higher), returns on leave
- **Magic-particle cursor** — on hover over featured collection cards, 4–6 heart-shaped pixel sparkles trail the cursor over 600ms in alternating brand colours. Disabled under reduced-motion.
- **Cart add** — asset card briefly scales 1 → 1.05 → 1 with bounce ease over 320ms; cart counter increments
- **Price flash** — gain → 400ms `rgba(62,180,137,0.10)` mint bg fade; loss → `rgba(214,59,59,0.10)` warm-red
- **Page transition** — 240ms cross-fade between routes; no slide
- **Reduced motion** — `prefers-reduced-motion: reduce` collapses all transforms to opacity-only, disables the magic-particle cursor entirely; price flashes still fire without fade

## 9. Accessibility & A11y

- **Contrast**: Ink `#0c0c0c` on cream canvas = 17.8:1 (AAA). Body `#3a3a3a` on canvas = 9.4:1 (AAA). White on Magenta `#e42575` = 4.6:1 (AA at body, AA-Large at display). Mint `#3eb489` on white = 3.0 (AA-Large only — never used as small body text against white). Warm red on canvas passes AA.
- **Focus indicator**: 3px solid `rgba(228,37,117,0.35)` ring on every interactive element. Border tightens to `#e42575` on focused inputs.
- **ARIA patterns**: Asset cards use `<a>` wrap with `aria-label="{collection} #{token-id}, listed for {price} SOL"`. Mint-verified checkmark is `aria-label="Verified collection"`. Modal dialogs use `role="dialog"` with focus trap.
- **Keyboard nav**: Tab walks asset cards row-by-row; Arrow keys move within row; Enter opens detail; Escape closes modals and the magic-cursor effect.
- **Screen reader hints**: Asset preview images carry `alt="{collection} {token-id}"`. Trending pills carry `aria-label="Trending up 12.4%"` independent of colour. Magic-particle trail has `aria-hidden="true"` and is purely decorative.
- **Reduced motion**: Honoured — see §8.

## 10. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|------:|-------------|
| Mobile     | < 640  | Top nav → hamburger; hero display-mega 80 → 40px; asset grid 2-up; filter rail becomes bottom-sheet behind a "Filters" pill; cart slides from right |
| Tablet     | 640–1024 | Top nav condensed; asset grid 3-up; filter rail toggles via icon button |
| Desktop    | 1024–1280 | Filter rail persistent; asset grid 4-up; full nav |
| Wide       | > 1280 | Asset grid 5-up; container at 1280px max — never wider than 1280, even on 4K |

**Touch Targets**: Primary CTAs render at minimum 44 × 44px on mobile. Asset card tap area extends across the full card (image + metadata strip). Trait pills get 8px × 16px padding on mobile.

**Collapsing Strategy**: Top nav → hamburger; search becomes a top-anchored modal. Filter rail → bottom-sheet behind a sticky "Filters" pill button. Asset detail metadata moves below the artwork on mobile.

**Image Behavior**: Asset card artwork uses `loading="lazy"` and `aspect-ratio: 1 / 1`. Featured collection banner uses `object-fit: cover` and crops centre on mobile.

## 11. Content & Voice

- **Tone** — boutique, considered, occasionally playful. Magic Eden uses the brand voice "discovery and delight" — collections aren't "listed", they're "featured"; drops are "premiered"; rare traits are "magic". Avoids crypto-bro jargon (no rockets, no diamond-hands), avoids financial-terminal seriousness (no "execute trade" — instead "Buy now").
- **Microcopy** — verbs are warm-transactional: "Buy now", "Make offer", "List for sale", "Sweep floor", "Get featured". The "Sweep" verb is Magic Eden's marketplace signature — a one-tap-buy-multiple affordance that no other major NFT venue has named as cleanly.
- **CTA verbs** — "Connect wallet" (universal entry), "Buy now" (action), "Make offer" (counter), "List item" (creator), "Get started" (marketing), "Discover collections" (educational chapter)
- **Empty states** — short and warm. The "No items match your filters" state shows a 32px Foundry serif "Nothing here yet" with a "Clear filters" pill below — a single line, no illustration, no apology.
- **Error messages** — clear and warm-remediable. "Insufficient SOL — top up your wallet to continue" not "Transaction failed". Wallet errors quote the provider message in mono.
- **Number formatting** — always `tnum`, locale-aware separators, SOL amounts show 2–4 decimal places. USD equivalents shown in caption underneath in `text-muted`.
- **Address formatting** — `Aabb…YyZz` (4 + 4) JetBrains Mono with click-to-copy.
- **Editorial accents** — Foundry Display pull-quotes appear on the "Stories" / "Drops" educational chapters, used to break dense feature copy with a 28px serif quotation in `text-body`.

## 12. Dark Mode & Theming

Magic Eden is **dual-theme by intent**. The cream canvas is the brand default; a user-toggleable dark variant exists and uses:

- `bg-dark` `#0c0c0c` (canvas)
- `bg-dark-elev-1` `#1a1a1a` (surface-soft equivalent — card bg)
- `bg-dark-elev-2` `#2a2a2a` (hover bg)
- `text-on-dark` `#fdfaf3` (cream-tinted ink, never pure white)
- `text-on-dark-soft` `#9a9a9a` (muted)
- `border-on-dark` `rgba(253,250,243,0.10)` (cream hairline at 10%)
- Magenta and mint stay constant — the brand voltages thread through both modes
- Card-hover edge-ring becomes `rgba(228,37,117,0.15)` (slightly stronger on dark for parity)

The cream-tinted ink-on-dark (versus pure white) is Magic Eden's distinguishing dark-mode choice — pure white would read corporate-fintech; cream signals continuation of the boutique register.

The footer always renders dark `#0c0c0c` regardless of the user's theme preference — the page closes in night-mode either way.

## 13. Lineage & Influences

Magic Eden's design language inherits from **boutique gallery websites** (Avant Arte, Pace Verso, Saatchi) and **editorial magazines** (Wired, Aperture, Cabinet) more than from crypto-native peers. The cream canvas, serif-display + sans-body duet, and pill-shaped CTAs are direct gallery references. The mint-cream warmth is the boldest decision: against an industry that committed to either pure-white (OpenSea, Coinbase) or pure-black (Blur, Foundation), Magic Eden chose champagne-cream.

What it borrows: the verified-checkmark gesture (but mint, not blue, deviating pointedly from Twitter/OpenSea convention); pill CTAs and 96px section rhythm from Stripe and Notion; the warm-cream palette from Notion's `--color-gray-100`. The "Sweep floor" verb is borrowed from professional-trader DeFi tooling (1inch, Cowswap "sweep") but applied to NFTs.

What it rejects: dark-mode-default canvases, neon-cyberpunk palettes, generic Inter-only display type, gradient hero washes, glassmorphism. Magic Eden insisted on shipping a Solana-native NFT marketplace that doesn't *look* Solana-native — no neon green, no purple-pink gradients of the early Phantom Wallet aesthetic. The serif-display register is a deliberate distancing move.

Influences:
- **Avant Arte** — Boutique gallery card grid, serif-display + sans-body, warm-cream canvas. https://avantarte.com
- **Notion** — Warm-cream `--color-gray-100`, single-confident accent, Lyon-Text-style serif accents. https://www.notion.com
- **Stripe** — Pill CTAs, 96px section rhythm, dark-footer punctuation. https://stripe.com
- **Wired magazine** — Serif-display headline + sans-body editorial duet. https://www.wired.com
- **OpenSea** — Two-button "Buy now / Make offer" checkout pair, asset-card-as-tile composition (rejected the dark canvas, kept the structure). https://opensea.io
- **Foundry Display** custom typeface — built/licensed in-house to avoid the off-the-shelf serif-display options. Closest open equivalent: Editorial New (Pangram Pangram).

## 14. Do's and Don'ts

### Do
- Keep the canvas at `#fdfaf3` mint-cream — the warm tint is the brand
- Reserve `#e42575` for primary actions and `#3eb489` for verified/positive marks — the two-voltage discipline is what reads as boutique
- Use Foundry Display at weight 400 for display-md and above; never bold past 500
- Use Inter at 15px for body — half-step larger than trader-pro density
- Pill CTAs at 999px radius — boutique friendliness signal
- 16px asset card radius with 24px gutters — gallery breathing room
- Mint-verified checkmark — never default to blue
- Layer white cards on cream canvas — the contrast is depth; skip shadows on cards in their resting state
- Use the brand-tinted 1px edge-ring on card-hover only; everywhere else neutral shadows
- Cream-tinted text on dark surfaces (`#fdfaf3`), never pure white

### Don't
- Don't pure-white the canvas — that's OpenSea Coinbase clinical
- Don't pure-black surface tokens — Magic Eden's near-black is `#0c0c0c` with a faint warmth, never `#000`
- Don't bolden Foundry Display past 500 — high-contrast modern serifs read shouty at 700
- Don't use Inter as a display family — the display register belongs to Foundry
- Don't add gradient washes, glassmorphism, or neon glows — boutique register is hairline-and-surface, never atmospheric
- Don't use rocket emojis, diamond hands, or cyberpunk iconography
- Don't render the magic-particle cursor on every card — only featured collection cards
- Don't disable `tnum` on price columns — column alignment matters even on the boutique register
- Don't replace the mint-verified with blue — the deviation from convention is intentional
- Don't shoutcase headlines — Foundry Display at weight 400 is the brand voice; ALL CAPS reads as fintech-bombastic

## 15. Agent Prompt Guide

### Quick Color Reference
- Brand magenta: `#e42575`
- Brand pressed: `#c01b62`
- Mint accent: `#3eb489`
- Canvas cream: `#fdfaf3`
- Surface soft: `#fff8eb`
- Surface deep: `#f4ead4`
- Text ink: `#0c0c0c`
- Body: `#3a3a3a`
- Muted: `#6b6b6b`
- Border: `#e8dfc7`
- Warm red: `#d63b3b`
- Rare yellow: `#f4b942`

### Example Component Prompts
- "Create a Magic Eden hero band: `#fdfaf3` mint-cream background, 80px Foundry Display weight 400 headline 'Discover the magic' with -2px tracking in `#0c0c0c`, body-md sub at 15px Inter in `#3a3a3a`, primary pill CTA `#e42575` 999px radius 12 × 24 padding 'Explore drops', secondary cream pill 'Get started' with 1px `#e8dfc7` border."
- "Design an asset card: white `#ffffff` bg on cream canvas, 1px `#e8dfc7` border, 16px radius. Top: 1:1 NFT artwork bleeding to edges. Bottom: 16px padding, collection name in caption `#6b6b6b` with mint-verified checkmark, asset name 16/600 `#0c0c0c`, two-row price block: 'PRICE' label-eyebrow 11/600 0.8px tracking `#6b6b6b` over JetBrains Mono price-display '◎ 12.40' in `#0c0c0c`. Hover: translateY(-3px), border `#cdbf99`, brand-tinted edge-ring shadow."
- "Build a feature spotlight band: `#f4ead4` deep-cream background, 96px vertical padding. 2-up grid: left has Foundry Display title-lg 'Featured drops' headline `#0c0c0c` with mint-verified pill, body sub, primary magenta CTA. Right has 4-up asset card preview at smaller 200px width."
- "Render an asset detail dual-CTA: 14 × 28 padding, 48px height, 999px pill radius. Left primary `#e42575` text 'Buy now for ◎ 12.40' weight 600 white. Right secondary `#fff8eb` bg, 1px `#e8dfc7` border, ink text 'Make offer'. Stack horizontally with 12px gap."
- "Compose a trending collections grid: 4-up on desktop with 24px gutters. Each card: white bg, 1px `#e8dfc7` border, 16px radius, 24px padding. Cover art 1:1 top with 12px radius. Below: collection name in title-md with mint-verified pill, JetBrains Mono floor 'Floor ◎ 4.20', '+12.4%' mint pill `rgba(62,180,137,0.15)` bg `#3eb489` text."

### Iteration Guide
1. Start with `#fdfaf3` mint-cream — the warm canvas is non-negotiable; pure white reads OpenSea/Coinbase
2. Foundry Display at weight 400 for display-md and above; Inter at 15px body; JetBrains Mono on numbers
3. Pill CTAs at 999px radius — never rectangle, never the OpenSea trader-tool 8px square
4. The mint-verified checkmark `#3eb489` is the brand's clearest signal-deviation — keep it mint, never blue
5. Asset cards: white on cream + 1px `#e8dfc7` border + 16px radius. Hover lifts 3px with brand-tinted edge-ring shadow
6. 24px gutters, 16px card padding — boutique breathing room, never trader-pro density
7. Magic-particle cursor trail only on featured collection cards, only on hover, only when reduced-motion is off
8. Cream-tinted text `#fdfaf3` on dark surfaces, never pure white — the warm tint threads through both modes
