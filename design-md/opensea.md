---
name: OpenSea
tagline: Pure-black canvas, electric `#2081e2` blue, and Inter at trader-pro density — the original NFT marketplace as financial terminal.
updated_at: 2026-05-05T10:17:17+12:00
published_at: 2026-05-05T10:17:17+12:00
author: webdesignhot
source_url: https://opensea.io
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [marketplace, fintech]
tags: [dark, dense, marketplace, nft, web3, electric, terminal]
preview_swatch: ['#04111d', '#2081e2', '#ffffff']
related: [coinbase, binance, kraken]
description: 'OpenSea reads like a Bloomberg terminal that learned how to render JPEGs. The canvas is near-black `#04111d` (a navy-ink, not pure-black), surfaces step up through `#0d1721` and `#1b2730`, and a single electric blue `#2081e2` carries every primary action — connect wallet, list NFT, place bid. Inter handles the entire type system at densities that prioritise grid scan over editorial breath: 12px caption, 14px body, 24px for the headline asset name. Where Coinbase commits to white-canvas institutional calm, OpenSea commits to dark-canvas trader-pro density — every screen is a grid of asset cards, every row carries a price, last sale, owner, and 24h volume tucked into mono-tabular columns. Three years of redesigns have stripped the early skeumorphic flourishes; what remains is pure information hierarchy with electric-blue voltage points and the occasional gradient tile in featured slots.'

colors:
  bg: '#04111d'                # canvas — near-black navy-ink page floor
  bg-elev-1: '#0d1721'         # surface-soft — secondary surface, modal bg
  bg-elev-2: '#1b2730'         # surface-strong — card bg, dropdown bg
  bg-elev-3: '#252f3e'         # surface-elevated — hover card bg
  surface-card: '#0d1721'      # default card surface
  surface-card-hover: '#1b2730'  # card hover state
  text: '#ffffff'              # ink — primary headlines, asset names
  text-body: '#c5cdd6'         # body — running paragraph text
  text-muted: '#8a939b'        # captions, table headers, last-sale labels
  text-subtle: '#707a83'       # disabled, lowest hierarchy
  text-on-light: '#04111d'     # ink for the rare light surfaces (modal-light)
  brand: '#2081e2'             # OpenSea Electric Blue — the singular voltage
  brand-hover: '#1868b7'       # primary-hover — darker blue
  brand-active: '#1259a0'      # primary-active — pressed
  brand-soft: '#2081e21a'      # 10% blue tint — selected row, focus haze
  brand-glow: 'rgba(32,129,226,0.40)'  # focus ring blur
  on-brand: '#ffffff'          # white-on-blue CTAs
  border: '#1f2937'            # default 1px hairline (cool dark-grey)
  border-soft: '#151b25'       # softer divider on dense lists
  border-strong: '#2c3a4d'     # stronger border on focused inputs
  semantic-up: '#34c77b'       # price-up green (24h floor up)
  semantic-up-soft: '#34c77b1a'
  semantic-down: '#eb5757'     # price-down red
  semantic-down-soft: '#eb57571a'
  semantic-warning: '#f5a623'  # warning yellow (rare)
  semantic-info: '#2081e2'     # info reuses brand blue
  verified-blue: '#2081e2'     # verified-collection checkmark
  category-art: '#bf60d5'      # category accent — Art
  category-gaming: '#34c77b'   # category accent — Gaming
  category-music: '#f5a623'    # category accent — Music
  rare-gold: '#fbbf24'         # rare/legendary trait highlight
  focus-ring: 'rgba(32,129,226,0.40)'
  scrim: 'rgba(4,17,29,0.70)'  # modal scrim
  link: '#2081e2'
  link-hover: '#5fa3eb'

typography:
  display:
    family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700, 800]
    opentype-features: ['cv11', 'ss03']
  body:
    family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", "Roboto Mono", ui-monospace, monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero', 'ss01']
  scale:
    display-mega:   { size: 64, weight: 700, lineHeight: 1.05, tracking: '-1.5px', family: display }
    display-xl:     { size: 48, weight: 700, lineHeight: 1.10, tracking: '-1px',   family: display }
    display-lg:     { size: 36, weight: 700, lineHeight: 1.15, tracking: '-0.6px', family: display }
    display-md:     { size: 28, weight: 700, lineHeight: 1.20, tracking: '-0.4px', family: display }
    title-lg:       { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.2px', family: display }
    title-md:       { size: 20, weight: 600, lineHeight: 1.30, tracking: '0',      family: display }
    title-sm:       { size: 16, weight: 600, lineHeight: 1.30, tracking: '0',      family: body }
    asset-name:     { size: 16, weight: 600, lineHeight: 1.20, tracking: '0',      family: body }
    body-md:        { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',      family: body }
    body-sm:        { size: 13, weight: 400, lineHeight: 1.45, tracking: '0',      family: body }
    caption:        { size: 12, weight: 400, lineHeight: 1.40, tracking: '0',      family: body }
    caption-strong: { size: 12, weight: 600, lineHeight: 1.40, tracking: '0.2px',  family: body }
    label-eyebrow:  { size: 11, weight: 600, lineHeight: 1.40, tracking: '0.6px',  family: body }
    price-display:  { size: 18, weight: 600, lineHeight: 1.20, tracking: '0',      family: mono, opentype: 'tnum, zero' }
    price-row:      { size: 14, weight: 500, lineHeight: 1.30, tracking: '0',      family: mono, opentype: 'tnum, zero' }
    button:         { size: 14, weight: 600, lineHeight: 1.20, tracking: '0',      family: body }
    nav-link:       { size: 14, weight: 500, lineHeight: 1.30, tracking: '0',      family: body }
    address-mono:   { size: 12, weight: 400, lineHeight: 1.30, tracking: '0',      family: mono, opentype: 'tnum, zero' }
    code-micro:     { size: 11, weight: 400, lineHeight: 1.40, tracking: '0',      family: mono }

radius:
  none: 0
  xs: 4
  sm: 6
  md: 8
  lg: 12
  xl: 16
  card: 10
  pill: 999
  full: 9999

spacing:
  base: 4
  scale: { xxs: 4, xs: 8, sm: 12, base: 16, md: 20, lg: 24, xl: 32, xxl: 48, section: 80 }

layout:
  page-width: 1400
  prose-width: 720
  header-height: 72
  grid-gutter: 16

components:
  button-primary:        { bg: brand, text: on-brand, padding: '10px 20px', height: 40, radius: md, font: button }
  button-primary-lg:     { bg: brand, text: on-brand, padding: '14px 28px', height: 48, radius: md, font: button }
  button-secondary:      { bg: bg-elev-2, text: text, padding: '10px 20px', height: 40, radius: md, border: '1px solid border' }
  button-ghost:          { bg: transparent, text: text, padding: '10px 16px', height: 40, radius: md, border: '1px solid border' }
  button-buy-now:        { bg: brand, text: on-brand, padding: '12px 24px', height: 44, radius: md, font: button }
  button-make-offer:     { bg: bg-elev-2, text: text, padding: '12px 24px', height: 44, radius: md, border: '1px solid border-strong' }
  asset-card:            { bg: bg-elev-1, border: '1px solid border', radius: card, padding: 0 }
  asset-card-hover:      { bg: bg-elev-2, border: '1px solid border-strong', radius: card, transform: 'translateY(-2px)' }
  collection-card:       { bg: bg-elev-1, border: '1px solid border', radius: lg, padding: lg }
  hero-banner:           { bg: bg-elev-1, height: 320, radius: lg, padding: '32px 40px' }
  badge-verified:        { bg: 'rgba(32,129,226,0.15)', text: brand, radius: pill, padding: '2px 8px' }
  badge-trending:        { bg: 'rgba(52,199,123,0.15)', text: semantic-up, radius: pill, padding: '4px 10px' }
  badge-rare:            { bg: 'rgba(251,191,36,0.15)', text: rare-gold, radius: pill, padding: '4px 10px' }
  input-text:            { bg: bg-elev-1, border: '1px solid border', radius: md, padding: '10px 14px', height: 40 }
  input-search:          { bg: bg-elev-2, border: '1px solid border', radius: pill, padding: '10px 16px', height: 40 }
  input-bid-eth:         { bg: bg-elev-1, border: '1px solid border-strong', radius: md, padding: '14px 16px', height: 56, font: price-display }
  top-nav:               { bg: bg, border: '1px solid border-soft', height: 72, font: nav-link }
  side-filter-panel:     { bg: bg-elev-1, border: '1px solid border', radius: lg, padding: lg, width: 280 }
  trait-pill:            { bg: bg-elev-2, text: text-body, radius: pill, padding: '4px 12px', font: caption }
  modal-list-nft:        { bg: bg-elev-1, border: '1px solid border', radius: xl, padding: xl }
  toast-success:         { bg: bg-elev-2, border: '1px solid semantic-up', radius: md, padding: 'sm base' }
  toast-error:           { bg: bg-elev-2, border: '1px solid semantic-down', radius: md, padding: 'sm base' }
  footer:                { bg: bg, border: '1px solid border-soft', padding: '64px 0' }

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — card hover lifts collapse to opacity-only; price flashes still fire but without slide'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0,0,0,0.20) 0 1px 2px'
  standard: 'rgba(0,0,0,0.30) 0 4px 12px'
  elevated: 'rgba(0,0,0,0.40) 0 12px 28px -8px'
  card-hover: 'rgba(0,0,0,0.50) 0 16px 32px -12px, rgba(32,129,226,0.10) 0 0 0 1px'
  modal: 'rgba(0,0,0,0.60) 0 24px 48px -8px'
  ring: '0 0 0 3px rgba(32,129,226,0.40)'
  none: 'none'

accessibility:
  contrast-text-on-bg: 17.4
  contrast-text-on-brand: 5.1
  contrast-body-on-bg: 11.2
  focus-ring: '3px solid rgba(32,129,226,0.40)'
  reduced-motion-honored: true

dark-mode: dark-only
---

## 1. Visual Theme & Atmosphere

OpenSea reads like a Bloomberg terminal that learned how to render JPEGs. The canvas isn't pure black — it's `#04111d`, a navy-ink that sits adjacent to `#000` but warms imperceptibly toward blue, signalling "financial product" rather than "trader-aesthetic dark mode." Surfaces step up through `#0d1721` (card base) and `#1b2730` (hover), creating a three-tier depth system that lets dense asset grids breathe without ever leaving the dark mode. The sole brand voltage is **OpenSea Electric Blue** `#2081e2` — used on connect-wallet, place-bid, list-NFT, the verified checkmark, every link, every active filter chip. It's not navy, not royal — it's the high-saturation web-blue that signals "click here."

Type is **Inter exclusively**, ladder running from a 64px display-mega for marketing heroes down to a 11px label-eyebrow for "FLOOR PRICE" column headers. The product surfaces — collection pages, asset detail, profile — operate at much smaller sizes than marketing: 14px body is default, 12px caption carries metadata, 16px asset names. Trader-pro density. Numbers swap to JetBrains Mono with `tnum` and `zero` enabled so price columns align cleanly across the asset grid — a feature row showing "Floor 0.42 ETH / Last 0.45 ETH / Volume 12,840 ETH" reads as a single coherent strip.

Layout is a marketplace grid first and editorial composition second. Asset cards (160–240px wide, 1:1 aspect) tile in 4-up to 8-up grids with 16px gutters; the cards themselves are a thin-bordered tile (`#1f2937` 1px) on `#0d1721`, holding the artwork at flush-edge with 12px-padded metadata strip below. Hover lifts the card 2px and intensifies the border toward brand-blue tint — the only motion expressed on the asset surface. Featured collections use larger 320px hero banners with collection art bleeding behind a darkened overlay; this is where OpenSea's gradient palette emerges (collection-specific, not system-token).

Trust signals are blue checkmarks (`#2081e2` filled circle), trending pills (semantic-up green tint), and rare-trait gold (`#fbbf24` reserved for "Top 1%" rarity). The system avoids decorative neon, glassmorphism, and crypto-cyberpunk altogether — depth comes from the three surface tiers and a single thin hairline, never from glow or backdrop-blur.

**Key Characteristics:**
- Near-black navy canvas `#04111d` — not pure-black, not paper-cream
- Single electric voltage: OpenSea Blue `#2081e2` for every action and link
- Inter system-wide; JetBrains Mono with `tnum` for every price column
- Trader-pro density: 14px default body, 12px metadata captions, 16px asset names
- Three-tier surface depth: `#04111d` → `#0d1721` → `#1b2730`
- Asset card grid (4–8 up) with 16px gutters and 10px corner radius
- Verified-blue checkmark, trending-green pill, rare-gold for legendary traits
- Pure dark-only system — no light variant offered on the marketplace surface

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#04111d`): Page floor — a navy-ink near-black, never pure `#000`.
- **Ink** (`#ffffff`): Primary headlines, asset names, active filter labels.
- **Brand** (`#2081e2`): OpenSea Electric Blue — every primary action, link, verified mark.

### Brand & Dark
- **Electric Blue** (`#2081e2`): The singular brand voltage. Used densely on CTAs, sparsely on text-links.
- **Brand Hover** (`#1868b7`): Pressed/hover state — darker blue, never desaturated.
- **Brand Active** (`#1259a0`): Pressed state on physical click.
- **Brand Soft** (`#2081e21a`): 10% blue tint — selected filter row background, focus haze.
- **Brand Glow** (`rgba(32,129,226,0.40)`): Focus ring blur and card-hover edge tint.

### Accent
OpenSea avoids brand-system accents entirely — the marketplace itself surfaces "accents" through the artwork displayed inside asset cards. The only sanctioned accents are **category tags**: `#bf60d5` (Art), `#34c77b` (Gaming), `#f5a623` (Music), `#fbbf24` (Rare-gold for legendary traits). These appear only on small badges, never on hero gradients or large surfaces.

### Interactive
- **Link** = Brand `#2081e2`, no underline default, underline on hover
- **Hover** — primary CTA → `#1868b7`; asset cards lift 2px and shift border toward `#2c3a4d`
- **Active / Pressed** — Brand Active `#1259a0`
- **Disabled** — `#707a83` text, `#1b2730` bg, `cursor: not-allowed`
- **Selected (filter row, trait pill)** — `#2081e21a` bg with `#2081e2` text

### Neutral Scale
`#04111d` (Canvas) → `#0d1721` (Surface Soft) → `#1b2730` (Surface Strong) → `#252f3e` (Surface Elevated) → `#1f2937` (Border) → `#707a83` (Text Subtle) → `#8a939b` (Text Muted) → `#c5cdd6` (Text Body) → `#ffffff` (Ink). Note the navy tint runs through the entire scale — this is not a neutral grey ramp; it is a navy ramp that happens to be near-monochromatic at the dark end.

### Surface & Borders
- **Surface Soft** (`#0d1721`): Asset card base, modal background, secondary surface.
- **Surface Strong** (`#1b2730`): Hover card bg, dropdown bg, secondary button bg.
- **Surface Elevated** (`#252f3e`): Hover-card-on-surface-strong, popover bg.
- **Border** (`#1f2937`): Default 1px hairline — cool dark-grey, not pure black.
- **Border Soft** (`#151b25`): Softer divider for dense list rows.
- **Border Strong** (`#2c3a4d`): Focused input border, hovered card border.

### Shadow Colors
Shadows on dark surfaces are the same `rgba(0,0,0,0.20–0.50)` tier as light-mode shadows — black-shadow-on-dark looks like **deepening of the surface** rather than overlay. The signature card-hover shadow combines a black-drop with a 1px brand-tinted edge ring (`rgba(32,129,226,0.10) 0 0 0 1px`), which reads as "lit from the inside" rather than "floating."

### Semantic
- **Up** (`#34c77b`): Price-up green; floor-up indicators; volume-up trend chips
- **Down** (`#eb5757`): Price-down red; floor-down indicators
- **Warning** (`#f5a623`): Rare — only the "verified collection withdrawn" or "transaction stuck" warnings
- **Info** = Brand `#2081e2` (no separate info token)
- **Rare-gold** (`#fbbf24`): Reserved for legendary-trait highlights and Top 1% rarity badges

## 3. Typography Rules

### Font Family
- **Display & Body** — `Inter`, fallback `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`
- **Mono** — `JetBrains Mono`, fallback `"IBM Plex Mono", "Roboto Mono", ui-monospace, monospace`
- **OpenType** — `tnum` and `zero` enabled on every numeric surface (price tickers, floor rows, volume columns). Inter `cv11` (alternate single-storey "a") may be enabled in marketing display sizes for a slightly geometric feel; production UI uses Inter default. `ss01` on JetBrains Mono enables the dotted zero variant favoured for crypto addresses.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|-----:|-------:|------------:|---------------:|-------------|-------|
| display-mega   | Inter | 64 | 700 | 1.05 | -1.5px | default | Marketing hero — "Discover, collect, and sell" |
| display-xl     | Inter | 48 | 700 | 1.10 | -1px   | default | Section heros, learn-page chapter heads |
| display-lg     | Inter | 36 | 700 | 1.15 | -0.6px | default | Collection page name |
| display-md     | Inter | 28 | 700 | 1.20 | -0.4px | default | Sub-section titles |
| title-lg       | Inter | 24 | 600 | 1.25 | -0.2px | default | Asset detail title — NFT name |
| title-md       | Inter | 20 | 600 | 1.30 | 0      | default | Card titles, modal headers |
| title-sm       | Inter | 16 | 600 | 1.30 | 0      | default | Inline emphasis, list headers |
| asset-name     | Inter | 16 | 600 | 1.20 | 0      | default | Asset card primary label |
| body-md        | Inter | 14 | 400 | 1.50 | 0      | default | Default running text |
| body-sm        | Inter | 13 | 400 | 1.45 | 0      | default | Secondary body |
| caption        | Inter | 12 | 400 | 1.40 | 0      | default | Floor/last-sale labels, table headers |
| caption-strong | Inter | 12 | 600 | 1.40 | 0.2px  | default | Eyebrow tags, status pills |
| label-eyebrow  | Inter | 11 | 600 | 1.40 | 0.6px  | default | "FLOOR PRICE" column headers |
| price-display  | JetBrains Mono | 18 | 600 | 1.20 | 0 | tnum, zero | Asset card primary price |
| price-row      | JetBrains Mono | 14 | 500 | 1.30 | 0 | tnum, zero | Table-row prices |
| button         | Inter | 14 | 600 | 1.20 | 0      | default | All CTAs |
| nav-link       | Inter | 14 | 500 | 1.30 | 0      | default | Top nav, side filters |
| address-mono   | JetBrains Mono | 12 | 400 | 1.30 | 0 | tnum, zero, ss01 | 0x… address truncation |
| code-micro     | JetBrains Mono | 11 | 400 | 1.40 | 0 | default | Transaction-hash hints |

### Principles
- **Inter for everything verbal, JetBrains Mono for everything numerical** — this two-family discipline is non-negotiable on product surfaces
- **Density is the brand** — 14px is body, 12px is metadata, 11px is allowed for column headers (uppercased with 0.6px tracking)
- **`tnum` always on prices** — column alignment matters more than aesthetic on a marketplace
- **`ss01` (dotted zero) on addresses** — wallet-address mono should distinguish 0/O immediately
- **Negative tracking only on display sizes** — body and below sit at 0 tracking
- **Uppercase only on label-eyebrow** — never headlines, never body, never buttons
- **Substitutes**: Inter is open-source — use directly. For mono, JetBrains Mono is open-source; IBM Plex Mono is a close cousin. Avoid Roboto Mono — the proportions read too humanist for this density.

## 4. Component Stylings

### Buttons

**`button-primary`** — Primary CTA. Background `#2081e2`, white text, 10px × 20px padding, 40px height, 8px radius. Hover → `#1868b7`. Pressed → `#1259a0`. The signature blue rectangle CTA — never a pill on OpenSea. Used for "Connect Wallet", "List item", "Place bid".

**`button-primary-lg`** — Marketing CTA. Same blue, 14px × 28px padding, 48px height. Used at the top of the home and learn pages.

**`button-secondary`** — Secondary action. Background `#1b2730`, white text, 1px `#1f2937` border, 8px radius, same dimensions as primary. Used for "Cancel", "Back", "Make offer" alongside the primary "Buy now".

**`button-ghost`** — Tertiary. Transparent bg, white text, 1px `#1f2937` border. Hover → border `#2c3a4d`, bg `#0d1721`.

**`button-buy-now`** — On asset detail. The primary `#2081e2` button at 12 × 24 / 44px. Always paired with `button-make-offer` (secondary) to its right; this two-button block is OpenSea's signature checkout affordance.

### Cards

**`asset-card`** — The marketplace's fundamental unit. Background `#0d1721`, 1px `#1f2937` border, 10px radius. NFT artwork bleeds to top edges (no padding), metadata strip below at 12px padding. Rows: collection name (caption), asset name (asset-name), price block (price-display + label-eyebrow "PRICE"). Hover lifts 2px (`translateY(-2px)`), border shifts to `#2c3a4d`, shadow gains the brand-tinted edge ring.

**`collection-card`** — Larger card showing a collection. Same `#0d1721` bg, `#1f2937` border, 12px radius, 24px padding. Shows a collection cover art, verified-blue checkmark, floor/volume metadata.

**`hero-banner`** — Featured collection banner. 320px tall, 12px radius, art bleeds full-width with a darkened overlay on the bottom-left third holding the collection name (display-lg) and floor pill.

### Badges / Tags / Pills

**`badge-verified`** — Verified collection. Blue circle with white checkmark, 12 × 12px inline badge.

**`badge-trending`** — Trending pill. `rgba(52,199,123,0.15)` bg, `#34c77b` text, full-pill radius, 4px × 10px padding, caption-strong type.

**`badge-rare`** — Rare-trait pill. `rgba(251,191,36,0.15)` bg, `#fbbf24` text, full-pill radius. Used on asset detail trait blocks.

**`trait-pill`** — Neutral trait pill. `#1b2730` bg, `#c5cdd6` text, full-pill radius, 4px × 12px padding. Click-to-filter affordance.

### Inputs / Forms

**`input-text`** — Standard text input. `#0d1721` bg, 1px `#1f2937` border, 8px radius, 10px × 14px padding, 40px height. Focus → 3px `rgba(32,129,226,0.40)` ring, border tightens to `#2081e2`.

**`input-search`** — Top-bar search. `#1b2730` bg, full-pill radius (40px height = perfect pill), search-icon prefix, placeholder "Search collections, items, or accounts". Focus → ring identical to input-text.

**`input-bid-eth`** — ETH bid amount input. Larger 56px height, JetBrains Mono price-display type, ETH icon prefix and "Ξ" suffix, 1px `#2c3a4d` strong border.

### Navigation

**`top-nav`** — 72px tall, `#04111d` background, 1px `#151b25` bottom hairline. OpenSea logo left, search-input centred (max 480px wide), right cluster (Drops, Stats, Create dropdown, profile avatar, cart, connect-wallet button).

**`side-filter-panel`** — Collection-page left filter. 280px wide, `#0d1721` bg, 1px `#1f2937` border, 12px radius, 24px padding. Sections: Status (Buy now / On auction), Price range, Chains, Traits — each as a collapsible accordion with trait-pill children.

### Modals & Overlays

**`modal-list-nft`** — List-an-NFT flow modal. `#0d1721` bg, 1px `#1f2937` border, 16px radius, 32px padding. Holds price input + duration dropdown + fee breakdown. Modal scrim is `rgba(4,17,29,0.70)` (canvas at 70%, not pure black).

**`toast-success`** — `#1b2730` bg, 1px `#34c77b` border-left, 8px radius, 12px × 16px padding. Auto-dismisses at 4s.

**`toast-error`** — `#1b2730` bg, 1px `#eb5757` border-left, manual dismiss.

### Decorative

**`footer`** — Dark footer matching canvas. `#04111d` bg, 1px `#151b25` top hairline, 64px vertical padding. Multi-column link list (Marketplace, Stats, Resources, Company) plus newsletter signup (email input + primary blue button).

## 5. Layout Principles

### Spacing System
- **Base unit**: 4px.
- **Tokens**: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 80.
- **Section padding (vertical)**: 80px on marketing, 48px on product. Tighter than Coinbase's 96px because the marketplace surface prioritises grid density.
- **Card internal padding**: 12px on asset cards (the artwork dominates), 24px on collection cards.
- **Gutters**: 16px between asset cards in marketplace grids, 24px between feature blocks in marketing.

### Grid & Container
- **Max content width**: 1400px on marketplace pages (wider than typical to fit 6+ asset cards per row), 1200px on marketing.
- **Marketplace grid**: responsive `grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))` — flexes from 8-up at wide to 2-up at mobile.
- **Collection page**: 280px filter rail left, asset grid right (12-column inner).
- **Asset detail**: 6 cols media left, 6 cols metadata + price right.

### Whitespace Philosophy
OpenSea is **denser than Coinbase, lighter than Bloomberg**. The marketplace surface is grid-first — the goal is to display as many asset cards above the fold as the viewport allows without crowding. Marketing pages relax to 80px section padding, but never to Coinbase's 96px.

### Section Cadence
Top hero (gradient or featured-collection banner) → category nav strip → trending collections (4-up) → notable drops grid → top-traders ranking table → footer. The page never alternates light-dark — it stays dark `#04111d` throughout, with surface variation expressed through card elevation (`#0d1721` on `#04111d`).

## 6. Shapes & Radius

- **None** 0 — full-bleed image edges, banner art
- **xs** 4 — micro chips (rare)
- **sm** 6 — small interior elements (trait swatch corners)
- **md** 8 — buttons, inputs, dropdowns — the default UI radius
- **card** 10 — asset cards (the most-photographed surface; 10 hits the "rounded but not soft" register)
- **lg** 12 — collection cards, modal-soft variants
- **xl** 16 — list-NFT modal, large overlays
- **pill** 999 — search input, status badges, trait pills
- **full** 9999 — circular avatars, verified checkmark

The 8px button radius (versus Coinbase's 100px pill) is the boldest shape decision in the system: rectangular CTAs read as **trader-tool** rather than consumer-friendly. The 10px card radius is OpenSea's signature — softer than Bloomberg-style 0px, harder than Coinbase-style 16/24px.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 Flat | No shadow, surface contrast only | Canvas, body sections |
| 1 Card | `#0d1721` on `#04111d` (one tier up) | Asset cards, panel surfaces |
| 2 Hover | `#1b2730` on `#04111d` + `translateY(-2px)` | Card hover, dropdown trigger |
| 3 Floating | `rgba(0,0,0,0.30) 0 4px 12px` | Dropdowns, tooltips |
| 4 Card-hover lit | `rgba(0,0,0,0.50) 0 16px 32px -12px, rgba(32,129,226,0.10) 0 0 0 1px` | Asset card on hover (signature) |
| 5 Modal | `rgba(0,0,0,0.60) 0 24px 48px -8px` + `rgba(4,17,29,0.70)` scrim | Modal dialogs |
| Focus ring | `0 0 0 3px rgba(32,129,226,0.40)` | All keyboard focus |

**Shadow Philosophy**: On a dark canvas, shadow-as-deepening only goes so far — OpenSea's signature card-hover effect combines a black drop-shadow with a 1px brand-blue edge ring (`rgba(32,129,226,0.10) 0 0 0 1px`), which reads as "lit from inside" and is the system's single brand-tinted depth gesture. All other shadows are neutral.

## 8. Interaction & Motion

- **Easing standard** — `cubic-bezier(0.4, 0, 0.2, 1)` for hover, dropdown open, modal fade
- **Easing emphasized** — `cubic-bezier(0.2, 0, 0, 1)` for asset-card hover lifts, page-transition fades
- **Easing bounce** — `cubic-bezier(0.34, 1.56, 0.64, 1)` reserved for the cart-add micro-bounce
- **Durations** — fast 100ms (hover colour shift), standard 200ms (card lift, modal fade), slow 320ms (page transition)
- **Hover** — primary CTA darkens to `#1868b7` over 100ms. Asset cards lift 2px and gain the lit-edge shadow over 200ms. Trait pills shift bg from `#1b2730` to `#252f3e` and text to white.
- **Card lift** — `translateY(-2px)` on hover, returns on leave. The 2px is intentional and small — too much lift reads as gallery, not marketplace.
- **Cart add** — when "Add to cart" fires, the asset card briefly scales 1 → 1.04 → 1 with the bounce ease over 300ms; cart counter increments with a number flip
- **Price flash** — when an active listing updates, the price field flashes `#34c77b` (up) or `#eb5757` (down) bg at 10% opacity over 600ms then fades back
- **Page transition** — 200ms fade between routes; no slide
- **Reduced motion** — `prefers-reduced-motion: reduce` collapses lift/scale transforms to opacity-only; price flashes still fire but with no fade

## 9. Accessibility & A11y

- **Contrast**: White on `#04111d` = 17.4:1 (AAA). Body `#c5cdd6` on canvas = 11.2:1 (AAA). White on Brand Blue `#2081e2` = 5.1:1 (AA at body, AA-Large at display). Up green/down red on canvas pass AA.
- **Focus indicator**: 3px solid `rgba(32,129,226,0.40)` ring on every interactive element. Border tightens to `#2081e2` on focused inputs.
- **ARIA patterns**: Asset cards use `<a>` wrap with `aria-label="{collection} #{token-id}, listed for {price} ETH"`. Filter accordions use `aria-expanded`. Modal dialogs use `role="dialog"` with focus trap and Escape close.
- **Keyboard nav**: Tab moves through asset cards row-by-row; Enter on card opens detail; Arrow keys move between sibling cards in the same row when focus is on an asset link.
- **Screen reader hints**: Asset preview images carry `alt="{collection} {token-id}"`. Verified checkmark is `aria-label="Verified collection"`. Price columns are wrapped in `<dl>` semantic structure (label = dt, value = dd).
- **Reduced motion**: Honoured — see §8.

## 10. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|------:|-------------|
| Mobile     | < 640  | Top nav → hamburger; hero display-mega 64 → 36px; asset grid 2-up; filter rail becomes full-screen sheet behind a "Filters" button; cart slides from right at full-screen height |
| Tablet     | 640–1024 | Top nav condensed (search-bar collapses to icon); asset grid 3-up; filter rail toggles via a button |
| Desktop    | 1024–1280 | Filter rail persistent; asset grid 4-up to 5-up; full nav restored |
| Wide       | > 1280 | Asset grid 6-up to 8-up; container at 1400px max |

**Touch Targets**: Primary CTAs render at minimum 44 × 44px on mobile (button-primary-lg sizing). Asset card tap area extends across the full card. Trait pills get 8px × 16px padding on mobile (vs 4 × 12 on desktop) for thumb-friendly tap targets.

**Collapsing Strategy**: Top nav → hamburger; search becomes a top-anchored modal. Filter rail → bottom-sheet modal. Asset detail metadata moves below the artwork on mobile (artwork first, metadata second). Footer columns stack to single column with collapsible sub-sections.

**Image Behavior**: Asset card artwork uses `loading="lazy"` and `aspect-ratio: 1 / 1` to prevent layout shift. Hero banner art uses `object-fit: cover` and crops centre on mobile.

## 11. Content & Voice

- **Tone** — direct, marketplace-functional, occasionally crypto-native but never bro-y. "Discover, collect, and sell extraordinary NFTs" not "Stack NFTs anon." Avoids hype emojis (no rockets, no fire), stays neutral.
- **Microcopy** — verbs are transactional: "Buy now", "Make offer", "List for sale", "Place bid", "Sweep floor". The "Buy now / Make offer" duo is the system's signature CTA pair on every asset detail.
- **CTA verbs** — "Connect wallet" (universal entry), "Buy now" (action), "Make offer" (counter-action), "List item" (creator surface), "Get started" (marketing), "Learn more" (educational).
- **Empty states** — short and functional. The "No items match your filters" state shows "Try adjusting your filters or browse all items" with a "Clear filters" pill. No illustration, no anthropomorphic tone.
- **Error messages** — clear and remediable. "Insufficient balance for this purchase — add ETH to continue" not "Transaction failed". Wallet errors quote the exact provider message in mono.
- **Number formatting** — always `tnum`, locale-aware separators (commas), ETH amounts show 4–6 decimal places. USD equivalents shown in caption underneath in `text-muted`.
- **Address formatting** — wallets shown as `0x1234…abcd` (4 + 4 truncation) in JetBrains Mono with `ss01` for dotted zero; click-to-copy is universal.

## 12. Dark Mode & Theming

OpenSea is **dark-only** on the marketplace surface. Despite an early-2022 attempt at a light-mode toggle, the production system has consolidated on `#04111d` canvas exclusively — every page, every state, every component. The reason is functional: artwork (the page's primary content) renders better against dark backgrounds. White-canvas marketplaces have to add chrome around each asset card to give it edge; dark canvas lets the artwork carry its own contrast.

The marketing/learn surfaces inherit the same dark canvas — there is no chapter that flips to white. This is unlike Coinbase (white default + dark heroes) or Notion (white default + dark campaign bands).

If a light variant ever ships, the predicted token swap would be: `bg #ffffff`, `surface-soft #f7f7f7`, `surface-strong #eef0f3`, `text #04111d`, `text-body #5b616e`, `border #dee1e6`, with the same `#2081e2` brand voltage carrying through unchanged.

## 13. Lineage & Influences

OpenSea's design language inherits from **trading terminals** (Bloomberg, Interactive Brokers) and **art-world databases** (Artsy, Artnet) more than from crypto-native peers. The dark canvas, dense grid, and column-aligned price metadata are direct references to the financial-terminal aesthetic; the asset-card-as-tile composition is borrowed from gallery-database surfaces. The choice of Inter (versus a custom display) signals "marketplace infrastructure" rather than "gallery curation" — OpenSea is positioning itself as the venue, not the curator.

What it borrows: the verified-blue checkmark from Twitter's pre-Musk era; the "Buy now / Make offer" dual-CTA from eBay; the 2px hover-lift from early Etsy product cards. What it rejects: glassmorphism, neon-cyberpunk palettes, gradient-heavy hero sections (used only on featured-collection banners, never on system-wide chrome), and crypto-native iconography (no rocket emojis, no diamond-hands fistbumps).

The shift from the early skeumorphic OpenSea (2018–2020 sea-port nautical illustrations) to the current trader-pro density (2021–present) was deliberate — co-founder Devin Finzer publicly framed the redesign as "from collectibles website to financial marketplace."

Influences:
- **Bloomberg Terminal** — Dense grid, mono-tabular price columns, dark canvas. https://www.bloomberg.com/professional
- **Artsy** — Asset-card-as-tile composition, gallery-database structure. https://www.artsy.net
- **eBay** — Buy-now / Make-offer dual-CTA, marketplace-as-venue framing. https://www.ebay.com
- **Twitter (pre-2022)** — Verified-blue checkmark visual treatment (filled circle, white tick).
- **Coinbase** — Single-blue brand discipline, semantic-up/down green/red. https://www.coinbase.com
- **Inter typeface** by Rasmus Andersson — Default UI sans for nearly every modern web3 product. https://rsms.me/inter

## 14. Do's and Don'ts

### Do
- Keep the canvas at `#04111d` (not pure black, not navy) — the slight blue tint is the system's brand-quiet move
- Reserve `#2081e2` for actions, links, and verified marks only — its scarcity drives the marketplace's clarity
- Use 8px radius on buttons, 10px on asset cards — never pill, never 0
- Layer asset cards at `#0d1721` on `#04111d` with 1px `#1f2937` border — this three-tier separation is the marketplace surface
- Use JetBrains Mono with `tnum` on every price; `ss01` (dotted zero) on every wallet address
- Anchor the asset grid at 16px gutters with 220px minimum card width — anything wider reads as gallery, anything denser reads as terminal
- The brand-tinted 1px edge ring on card-hover is the only sanctioned brand-tinted shadow — use it
- Verified-blue checkmark is binary: present on verified collections, absent everywhere else. No "pending verification" intermediate state on the visual surface

### Don't
- Don't pure-black the canvas (`#000000`) — the navy tint is what distinguishes OpenSea from Blur and Foundation
- Don't pill the primary CTA — rectangular 8px radius is the trader-tool register
- Don't introduce a second brand colour — the marketplace lives or dies on the single-blue clarity
- Don't add neon glow, glassmorphism, or backdrop-blur — depth is surface-tier, never atmospheric
- Don't show prices in proportional fonts — `tnum` + JetBrains Mono is mandatory on every numeric column
- Don't use rocket emojis, diamond hands, or any crypto-bro iconography — OpenSea positions as infrastructure, not culture
- Don't lift cards more than 2px on hover — gallery-aesthetic feels wrong for a marketplace
- Don't replace the asset card border with a shadow-only edge — the 1px hairline is what gives the dense grid its readability

## 15. Agent Prompt Guide

### Quick Color Reference
- Brand: OpenSea Blue `#2081e2`
- Brand pressed: `#1868b7`
- Canvas: `#04111d`
- Surface soft: `#0d1721`
- Surface strong: `#1b2730`
- Text ink: `#ffffff`
- Body: `#c5cdd6`
- Muted: `#8a939b`
- Border: `#1f2937`
- Up green: `#34c77b`
- Down red: `#eb5757`
- Rare gold: `#fbbf24`

### Example Component Prompts
- "Create an OpenSea hero band: `#04111d` background, 64px Inter weight 700 headline 'Discover extraordinary NFTs' with -1.5px tracking in `#ffffff`, body-md sub in `#c5cdd6`, primary CTA `#2081e2` 8px radius 10×20 padding 'Explore', secondary ghost button 'Create' with 1px `#1f2937` border."
- "Design an asset card: `#0d1721` bg, 1px `#1f2937` border, 10px radius. Top half: 1:1 NFT artwork bleeding to edges. Bottom half: 12px padding, collection name in caption `#8a939b`, asset name 'Bored Ape #1234' in asset-name 16/600 white, two-row price block: 'PRICE' label-eyebrow 11/600 0.6px tracking `#8a939b` over JetBrains Mono price-display '0.42 Ξ' in `#ffffff`. Hover: translateY(-2px), border `#2c3a4d`, shadow with brand-tinted edge ring."
- "Build an asset detail dual-CTA: 12 × 24 padding, 44px height, 8px radius. Left button primary `#2081e2` text 'Buy now for 0.42 Ξ' weight 600. Right button secondary `#1b2730` bg, 1px `#1f2937` border, white text 'Make offer'. Stack horizontally with 12px gap."
- "Compose a trending collections grid: 4-up on desktop with 16px gutters. Each card: `#0d1721` bg, 12px radius, 24px padding. Cover art 1:1 top with 8px radius. Below: collection name with `#2081e2` verified checkmark, floor price in JetBrains Mono, '+12.4%' trending pill `rgba(52,199,123,0.15)` bg, `#34c77b` text."
- "Render a wallet-address chip: `#1b2730` bg, full-pill radius, 4 × 12 padding. Inside: 16 × 16 generative-blockie avatar, then JetBrains Mono `0x1234…abcd` (12px size, ss01 dotted-zero). Click-to-copy on entire chip; copy-confirm flashes border to `#34c77b` for 800ms."

### Iteration Guide
1. Start with `#04111d` — the navy-ink near-black is the brand canvas. Pure `#000` reads as Blur, not OpenSea.
2. Inter for type, JetBrains Mono for numbers — no third family. `tnum` on every price column is non-negotiable.
3. 8px radius on buttons, 10px on asset cards — pill CTAs break the trader-tool register.
4. The `#2081e2` blue is precious — use it only on actions, links, and verified marks. Never decoratively.
5. Asset cards live at `#0d1721` on `#04111d` with 1px `#1f2937` borders. Hover lifts 2px and gains the brand-tinted 1px edge ring shadow.
6. Marketplace grid: `repeat(auto-fill, minmax(220px, 1fr))` with 16px gutters. Density is the brand.
7. Price flashes are green for up, red for down — semantic-up `#34c77b`, semantic-down `#eb5757`. Never reverse the direction-color convention.
8. Wallet addresses always render as `0x1234…abcd` 4+4 truncation in JetBrains Mono with dotted-zero `ss01`. Click-to-copy is universal.
