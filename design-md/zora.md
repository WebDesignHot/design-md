---
name: Zora
tagline: Cream-white canvas, electric purple-orange duet, and a custom display — onchain creator network as zine cover.
author: webdesignhot
source_url: https://zora.co
spec: design.md/v1.5
quality: curated
featured: false
categories: [marketplace, fintech]
tags: [light, creator, vibrant, web3, mint, indie, zine, editorial]
preview_swatch: ['#fffaee', '#5a3eff', '#000000']
related: [opensea, magiceden, base-org]
description: 'Zora reads like a riso-printed zine that learned to mint onchain. The default canvas is a warm cream-white `#fffaee` (more saturated than Magic Eden''s mint-cream — closer to a fresh-paper ivory), and the system pairs two voltages — electric purple `#5a3eff` for primary actions and signal-orange `#ff5b00` for highlight/featured states. Type runs a custom Zora display (a geometric-soft sans-display in the lineage of GT Zirkon and Söhne Breit) at large sizes, with Inter Tight for body and JetBrains Mono for tabular data. Where OpenSea is trader-pro density and Magic Eden is boutique gallery, Zora is **indie creator zine** — bold sans display headlines stretched at -3px tracking, oversized hero sections with cropped illustrations, vibrant mint-button CTAs in saturated purple, and editorial pull-quotes set in the same display family. Layout willingly gives 50% of the viewport to a single hero illustration on creator-spotlight pages — Zora isn''t a marketplace, it''s a creator network, and the visual language commits to that distinction. The brand''s clearest editorial choice: the secondary "minted-by" pill always shows the creator''s avatar + handle as a horizontal compound, never a generic "by @user" string. Creator identity is first-class on every surface.'

colors:
  bg: '#fffaee'                # canvas — cream-ivory zine paper
  bg-strong: '#fff3d6'         # surface-soft — warmer band
  bg-vivid: '#fff0c2'          # surface-vivid — featured-zone yellow-cream
  bg-dark: '#000000'           # surface-dark — full-bleed creator hero
  bg-dark-elev: '#1a1a1a'      # surface-dark-elevated
  surface-card: '#ffffff'      # white card on cream
  surface-card-hover: '#fff3d6'
  text: '#000000'              # ink — primary
  text-body: '#1a1a1a'         # body
  text-muted: '#5a5a5a'        # captions
  text-subtle: '#8a8a8a'       # disabled
  text-on-dark: '#fffaee'      # cream ink on dark heroes
  text-on-dark-soft: '#a8a8a8'
  brand: '#5a3eff'             # Zora Electric Purple — primary
  brand-hover: '#3f29c2'       # primary-hover
  brand-active: '#2e1f99'      # pressed
  brand-soft: '#5a3eff1a'      # 10% purple tint
  brand-glow: 'rgba(90,62,255,0.40)'
  on-brand: '#ffffff'          # white-on-purple CTAs
  accent-orange: '#ff5b00'     # signal orange — featured, hot, new
  accent-orange-soft: '#ff5b001a'
  accent-yellow: '#ffd400'     # bright yellow — rare-trait, "earn"
  accent-mint: '#00d8a8'       # mint accent — mint-button confirmation, success
  border: '#e8dcb8'            # warm hairline (cream-tinted)
  border-soft: '#f0e6c4'       # softer divider
  border-strong: '#c9b97e'     # focused/hover border
  semantic-up: '#00b87a'       # price-up
  semantic-up-soft: '#00b87a1a'
  semantic-down: '#e64545'     # price-down
  semantic-down-soft: '#e645451a'
  semantic-warning: '#ff5b00'  # warning reuses signal orange
  semantic-info: '#5a3eff'
  focus-ring: 'rgba(90,62,255,0.40)'
  scrim: 'rgba(0,0,0,0.55)'
  link: '#5a3eff'
  link-hover: '#3f29c2'

typography:
  display:
    family: '"Zora Display", "GT Zirkon", "Söhne Breit", "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 700, 900]
    opentype-features: ['ss01', 'ss02']
  body:
    family: '"Inter Tight", Inter, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-mega:   { size: 96, weight: 700, lineHeight: 0.92, tracking: '-3px',   family: display }
    display-xl:     { size: 72, weight: 700, lineHeight: 0.96, tracking: '-2.5px', family: display }
    display-lg:     { size: 56, weight: 700, lineHeight: 1.00, tracking: '-1.8px', family: display }
    display-md:     { size: 40, weight: 700, lineHeight: 1.05, tracking: '-1.2px', family: display }
    display-sm:     { size: 32, weight: 700, lineHeight: 1.10, tracking: '-0.8px', family: display }
    title-lg:       { size: 24, weight: 600, lineHeight: 1.20, tracking: '-0.4px', family: body }
    title-md:       { size: 20, weight: 600, lineHeight: 1.25, tracking: '-0.2px', family: body }
    title-sm:       { size: 16, weight: 600, lineHeight: 1.30, tracking: '0',      family: body }
    asset-name:     { size: 16, weight: 600, lineHeight: 1.20, tracking: '-0.1px', family: body }
    body-md:        { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',      family: body }
    body-sm:        { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',      family: body }
    caption:        { size: 13, weight: 400, lineHeight: 1.40, tracking: '0',      family: body }
    caption-strong: { size: 12, weight: 600, lineHeight: 1.40, tracking: '0.4px',  family: body }
    label-eyebrow:  { size: 11, weight: 700, lineHeight: 1.30, tracking: '1px',    family: body, transform: uppercase }
    pull-quote:     { size: 32, weight: 500, lineHeight: 1.30, tracking: '-0.6px', family: display }
    price-display:  { size: 18, weight: 600, lineHeight: 1.20, tracking: '0',      family: mono, opentype: 'tnum, zero' }
    price-row:      { size: 14, weight: 500, lineHeight: 1.30, tracking: '0',      family: mono, opentype: 'tnum, zero' }
    button:         { size: 15, weight: 600, lineHeight: 1.20, tracking: '-0.1px', family: body }
    nav-link:       { size: 15, weight: 600, lineHeight: 1.20, tracking: '-0.1px', family: body }
    creator-handle: { size: 14, weight: 600, lineHeight: 1.20, tracking: '-0.1px', family: body }
    address-mono:   { size: 12, weight: 400, lineHeight: 1.30, tracking: '0',      family: mono, opentype: 'tnum, zero' }
    code-micro:     { size: 11, weight: 400, lineHeight: 1.40, tracking: '0',      family: mono }

radius:
  none: 0
  xs: 6
  sm: 10
  md: 14
  lg: 18
  card: 14
  xl: 24
  pill: 999
  full: 9999

spacing:
  base: 4
  scale: { xxs: 4, xs: 8, sm: 12, base: 16, md: 20, lg: 24, xl: 32, xxl: 48, section: 120 }

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  grid-gutter: 24

components:
  button-primary:        { bg: brand, text: on-brand, padding: '14px 28px', height: 48, radius: pill, font: button }
  button-primary-lg:     { bg: brand, text: on-brand, padding: '18px 36px', height: 56, radius: pill, font: button }
  button-secondary:      { bg: text, text: bg, padding: '14px 28px', height: 48, radius: pill, font: button }
  button-ghost:          { bg: transparent, text: text, padding: '14px 28px', height: 48, radius: pill, border: '1.5px solid text' }
  button-mint:           { bg: accent-mint, text: text, padding: '14px 28px', height: 48, radius: pill, font: button }
  button-collect:        { bg: brand, text: on-brand, padding: '16px 32px', height: 52, radius: pill, font: button }
  button-creator-follow: { bg: text, text: bg, padding: '10px 20px', height: 40, radius: pill, font: button }
  asset-card:            { bg: surface-card, border: '1.5px solid border', radius: card, padding: 0 }
  asset-card-hover:      { bg: surface-card-hover, border: '1.5px solid border-strong', radius: card, transform: 'translateY(-3px)' }
  creator-card:          { bg: surface-card, border: '1.5px solid border', radius: lg, padding: lg }
  feature-band:          { bg: bg-vivid, padding: 'section 0' }
  hero-band-light:       { bg: bg, padding: 'section 0', font: display-mega }
  hero-band-vivid:       { bg: bg-vivid, padding: 'section 0' }
  hero-band-dark:        { bg: bg-dark, text: text-on-dark, padding: 'section 0' }
  badge-creator:         { bg: text, text: bg, radius: pill, padding: '4px 12px' }
  badge-trending:        { bg: accent-orange-soft, text: accent-orange, radius: pill, padding: '4px 12px' }
  badge-new:             { bg: accent-yellow, text: text, radius: pill, padding: '4px 12px' }
  badge-minted:          { bg: brand-soft, text: brand, radius: pill, padding: '4px 12px' }
  input-text:            { bg: surface-card, border: '1.5px solid border', radius: md, padding: '14px 18px', height: 48 }
  input-search:          { bg: surface-card, border: '1.5px solid border', radius: pill, padding: '14px 20px', height: 48 }
  top-nav:               { bg: bg, border: '1px solid border-soft', height: 64, font: nav-link }
  side-rail:             { bg: surface-card, border: '1.5px solid border', radius: lg, padding: lg, width: 280 }
  modal-collect:         { bg: surface-card, border: '1.5px solid border', radius: xl, padding: xl }
  toast-success:         { bg: accent-mint, text: text, radius: md, padding: 'sm base' }
  toast-error:           { bg: surface-card, border: '1.5px solid semantic-down', radius: md, padding: 'sm base' }
  footer:                { bg: bg-dark, text: text-on-dark, padding: '80px 0' }

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 140
  duration-standard: 280
  duration-slow: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce — card lifts collapse to opacity-only; mint-button confetti effect disabled entirely'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0,0,0,0.04) 0 1px 2px'
  standard: 'rgba(0,0,0,0.06) 0 8px 20px'
  elevated: 'rgba(0,0,0,0.10) 0 20px 40px -8px'
  card-hover: 'rgba(0,0,0,0.12) 0 24px 48px -16px, rgba(90,62,255,0.10) 0 0 0 1.5px'
  modal: 'rgba(0,0,0,0.20) 0 40px 80px -8px'
  ring: '0 0 0 4px rgba(90,62,255,0.40)'
  none: 'none'

accessibility:
  contrast-text-on-bg: 19.6
  contrast-text-on-brand: 6.2
  contrast-body-on-bg: 17.0
  focus-ring: '4px solid rgba(90,62,255,0.40)'
  reduced-motion-honored: true

dark-mode: dual
---

## 1. Visual Theme & Atmosphere

Zora reads like a riso-printed zine that learned to mint onchain. The default canvas is **cream-ivory** `#fffaee` — warmer than Magic Eden's mint-cream, more saturated than Notion's paper-white, closer to fresh art-paper. Onto that floor the system places a high-energy two-voltage duet: **electric purple** `#5a3eff` for primary actions and **signal orange** `#ff5b00` for featured/highlight states. Add the bright yellow `#ffd400` for "new" / "earn" badges and a mint `#00d8a8` for mint-button confirmations, and the system reads as a four-colour zine palette deliberately tuned for indie-creator energy rather than fintech-institutional calm.

Type carries the brand's editorial-zine thesis hardest. Display sizes (32px and above) run a **custom Zora Display** — a geometric-soft sans-display in the GT Zirkon / Söhne Breit lineage, set at weight 700 with **-3px tracking** on the 96px display-mega. The headlines feel hand-set, almost letterpress — locked-up tight, slightly compressed in line-height (0.92 on mega), giving the brand voice "loud but considered." Body switches to **Inter Tight** at 16px — Inter Tight is Inter's narrower variant (smaller side bearings), which lets the body type sit closer to the high-energy display without breaking the editorial rhythm.

Layout willingly gives 50%+ of the viewport to a single hero illustration on creator-spotlight pages — Zora isn't a marketplace, it's a creator network, and the visual language commits to that distinction. The hero treatment alternates between three modes: cream `#fffaee`, vivid `#fff0c2` (yellow-cream feature band), and full-bleed dark `#000` (rare, used for creator-portrait moments). Asset cards are larger than typical (often 280–320px wide), with the artwork at flush-edge top and a generous metadata strip below carrying creator-handle compound badges.

The brand's clearest editorial choice: **creator identity is first-class**. Every asset card, every collection, every detail page leads with the creator's avatar + handle as a horizontal compound badge, not as a "by @user" caption. The "minted-by" pill is a 32px circular avatar + 14px handle with -0.1px tracking, set on the surface-card bg with no border — it's the most photographed compound on the site. Platform-collected mints are credited; reposts and remixes are linked back to the original creator first.

Motion is more expressive here than on OpenSea/Blur but never decorative. The signature gesture is the "mint" interaction: tapping a "Collect" CTA triggers a 480ms confetti burst from the button origin (small purple/orange/yellow/mint pixel-shapes), then the button morphs to "Collected ✓" with the mint-green bg. Hover lifts on cards are 3px with the brand-tinted edge ring (1.5px not 1px — Zora goes thicker on the brand presence).

**Key Characteristics:**
- Cream-ivory canvas `#fffaee` — saturated zine-paper, warmer than Magic Eden's mint-cream
- Two primary voltages: electric purple `#5a3eff` (action) + signal orange `#ff5b00` (featured)
- Plus four-colour zine secondary palette: yellow `#ffd400`, mint `#00d8a8`
- Custom Zora Display at weight 700 with -3px tracking on display-mega
- Inter Tight (narrow Inter) at 16px body — half-step tighter than default Inter
- Pill-shaped CTAs at 999px radius — creator-network warmth
- 14px asset card radius with 24px gutters — gallery breathing room
- 1.5px borders on cards (thicker than typical) — zine letterpress-edge feel
- Section padding at 120px — generous editorial rhythm
- Creator-handle compound badges first-class on every asset surface
- Mint-button confetti burst on Collect — the system's signature gesture

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#fffaee`): Cream-ivory page floor — saturated zine paper.
- **Surface Soft** (`#fff3d6`): Secondary surface, card hover bg.
- **Surface Vivid** (`#fff0c2`): Featured-zone yellow-cream band.
- **Ink** (`#000000`): Primary headlines. Pure black on cream — not a near-black.
- **Brand** (`#5a3eff`): Zora Electric Purple — primary actions, links.

### Brand & Dark
- **Zora Electric Purple** (`#5a3eff`): Primary CTA, primary link, primary brand glyph. The voltage is high-saturation, sits between blue and pure violet.
- **Brand Hover** (`#3f29c2`): Pressed/hover.
- **Brand Active** (`#2e1f99`): Pressed on click.
- **Brand Soft** (`#5a3eff1a`): 10% purple tint — selected filter, active tab.
- **Surface Dark** (`#000000`): Full-bleed creator-portrait hero ground; footer.
- **Surface Dark Elevated** (`#1a1a1a`): Cards inside dark heroes.

### Accent
- **Signal Orange** (`#ff5b00`): Featured / hot / trending pills. Used on the "Featured this week" badge and on the trending-up indicator.
- **Orange Soft** (`#ff5b001a`): Pill background.
- **Bright Yellow** (`#ffd400`): "New" / "Earn" / "Drop" badges. Used flat as a pill background with black text.
- **Mint** (`#00d8a8`): Mint-button confirmation state, success toast bg. The "Collected ✓" state uses mint.

### Interactive
- **Link** = Brand `#5a3eff`, no underline default, underline on hover
- **Hover** — primary CTA → `#3f29c2`; cards lift 3px + gain brand-tinted 1.5px edge ring
- **Active / Pressed** — Brand Active `#2e1f99`
- **Disabled** — `#8a8a8a` text, `#fff3d6` bg, `cursor: not-allowed`
- **Selected (filter)** — `#5a3eff1a` bg with `#5a3eff` text and 1.5px `#5a3eff` border-left

### Neutral Scale
`#fffaee` (Canvas) → `#fff3d6` (Soft) → `#fff0c2` (Vivid) → `#e8dcb8` (Border) → `#c9b97e` (Border Strong) → `#8a8a8a` (Subtle) → `#5a5a5a` (Muted) → `#1a1a1a` (Body) → `#000000` (Ink). Note the scale carries warm-cream tint at the light end and pure black at the dark end — there's no warm-grey middle, the system jumps straight from cream to charcoal.

### Surface & Borders
- **Surface Card** (`#ffffff`): Default white cards on the cream canvas.
- **Card Hover** (`#fff3d6`): Card hover bg shifts to surface-soft.
- **Border** (`#e8dcb8`): Default 1.5px hairline — thicker than typical (most systems use 1px) for zine letterpress feel.
- **Border Soft** (`#f0e6c4`): Softer divider on dense lists.
- **Border Strong** (`#c9b97e`): Focused/hovered border.

### Shadow Colors
Zora uses **near-black neutral shadows at low opacity** with a generous spread. The signature card-hover shadow combines a black drop with a 1.5px brand-tinted edge ring (`rgba(90,62,255,0.10) 0 0 0 1.5px`) — the 1.5px matches the resting border thickness, so the hover effect reads as "the card's border switched to brand colour" rather than "a shadow appeared."

### Semantic
- **Up** (`#00b87a`): Price-up green.
- **Up Soft** `#00b87a1a` — pill bg.
- **Down** (`#e64545`): Price-down red.
- **Warning** (`#ff5b00`): Reuses signal orange.
- **Info** = Brand `#5a3eff`.
- **Mint-Confirmed** = Mint accent `#00d8a8` — distinct from semantic-up to maintain the editorial register.

## 3. Typography Rules

### Font Family
- **Display** — `Zora Display`, fallback `"GT Zirkon", "Söhne Breit", "Helvetica Neue", Arial, sans-serif`. A geometric-soft sans-display with rounded terminals and slight letterform compression.
- **Body** — `Inter Tight`, fallback `Inter, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`. Inter Tight is Inter's narrower variant (5–8% smaller side bearings), which keeps body type from feeling out of register with the tight display.
- **Mono** — `JetBrains Mono`, fallback `"IBM Plex Mono", ui-monospace, monospace`. With `tnum` and `zero` enabled.
- **OpenType** — Zora Display `ss01` enables alternate "a" (single-storey) and `ss02` enables alternate "g" (double-storey) for editorial accent moments.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|-----:|-------:|------------:|---------------:|-------------|-------|
| display-mega   | Zora Display | 96 | 700 | 0.92 | -3px   | default | Marketing hero — locked-up letterpress feel |
| display-xl     | Zora Display | 72 | 700 | 0.96 | -2.5px | default | Section heros |
| display-lg     | Zora Display | 56 | 700 | 1.00 | -1.8px | default | Page titles |
| display-md     | Zora Display | 40 | 700 | 1.05 | -1.2px | default | Sub-section titles |
| display-sm     | Zora Display | 32 | 700 | 1.10 | -0.8px | default | Small section heads |
| title-lg       | Inter Tight | 24 | 600 | 1.20 | -0.4px | default | Asset detail title |
| title-md       | Inter Tight | 20 | 600 | 1.25 | -0.2px | default | Card titles |
| title-sm       | Inter Tight | 16 | 600 | 1.30 | 0 | default | Inline emphasis |
| asset-name     | Inter Tight | 16 | 600 | 1.20 | -0.1px | default | Asset card label |
| body-md        | Inter Tight | 16 | 400 | 1.55 | 0 | default | Default running text |
| body-sm        | Inter Tight | 14 | 400 | 1.50 | 0 | default | Secondary body |
| caption        | Inter Tight | 13 | 400 | 1.40 | 0 | default | Floor labels |
| caption-strong | Inter Tight | 12 | 600 | 1.40 | 0.4px | default | Eyebrow tags |
| label-eyebrow  | Inter Tight | 11 | 700 | 1.30 | 1px | default | UPPERCASE column headers |
| pull-quote     | Zora Display | 32 | 500 | 1.30 | -0.6px | ss01 | Editorial pull-quote — Zora Display weight 500 |
| price-display  | JetBrains Mono | 18 | 600 | 1.20 | 0 | tnum, zero | Asset card price |
| price-row      | JetBrains Mono | 14 | 500 | 1.30 | 0 | tnum, zero | Table-row prices |
| button         | Inter Tight | 15 | 600 | 1.20 | -0.1px | default | All CTAs |
| nav-link       | Inter Tight | 15 | 600 | 1.20 | -0.1px | default | Top nav |
| creator-handle | Inter Tight | 14 | 600 | 1.20 | -0.1px | default | Creator compound badge |
| address-mono   | JetBrains Mono | 12 | 400 | 1.30 | 0 | tnum, zero | Wallet truncation |
| code-micro     | JetBrains Mono | 11 | 400 | 1.40 | 0 | default | Tx-hash hints |

### Principles
- **Display weight 700 with hard negative tracking** — at -3px on display-mega, headlines lock together for letterpress-zine feel
- **Line-height under 1.0 on display-mega (0.92)** — display headlines bleed into adjacent lines, reinforcing the locked-up feel
- **Inter Tight, not Inter** — the narrower variant lets body type sit register-tight with the compressed display
- **Pull-quote returns to Zora Display at weight 500** — not a serif (that's Magic Eden) and not bolded sans (that's most systems); the medium weight at 32px is the editorial accent
- **Negative tracking on every display + asset name** — creator-network density is character-tight, not body-loose
- **`tnum` always on prices** — column alignment matters even on the editorial register
- **Substitutes**: Zora Display closest open licensable equivalents: GT Zirkon (Grilli), Söhne Breit (Klim), Pangram Sans Bold. For body, Inter Tight directly. JetBrains Mono direct.

## 4. Component Stylings

### Buttons

**`button-primary`** — Primary CTA. `#5a3eff` purple bg, white text, 14 × 28 padding, 48px height, 999px pill radius. Hover → `#3f29c2`. Pressed → `#2e1f99`. The signature purple pill — used on "Collect", "Mint", "Connect Wallet", "Get started".

**`button-primary-lg`** — Marketing CTA. 18 × 36 padding, 56px height. Used on hero band moments.

**`button-secondary`** — High-contrast inverse. **Black** bg, cream `#fffaee` text, 999px pill, 48px height. Used as the second action in dual-CTA stacks beside primary purple. The black-on-cream / cream-on-black inversion is a defining Zora gesture.

**`button-ghost`** — Outline variant. Transparent bg, black text, **1.5px** black border, 999px pill, 48px height. The 1.5px border is the system's thicker-edge gesture.

**`button-mint`** — Mint-confirmation variant. `#00d8a8` mint bg, black text, 999px pill, 48px height. Used post-mint as the success state — the button morphs from purple primary to mint after a successful collect.

**`button-collect`** — Asset detail primary. Larger purple pill, 16 × 32 padding, 52px height. Triggers the confetti-burst gesture on click.

**`button-creator-follow`** — Creator-page action. Black bg, cream text, 10 × 20 padding, 40px height, 999px pill — smaller than primary, used on creator card headers for "Follow".

### Cards

**`asset-card`** — Marketplace fundamental. White bg, **1.5px** `#e8dcb8` border, 14px radius. Top: NFT artwork bleeds full-width to top edges. Bottom: 16px padding metadata strip. Top row: creator compound badge (32px avatar + handle in creator-handle 14/600 -0.1px tracking). Middle row: asset name in asset-name 16/600 -0.1px. Bottom row: price block (label-eyebrow "PRICE" + JetBrains Mono price-display). Hover lifts 3px with brand-tinted 1.5px edge-ring shadow.

**`creator-card`** — Creator profile card. White bg, 1.5px border, 18px radius, 24px padding. 80px circular avatar top-centred, creator handle in title-md, bio in body-sm, "Follow" button right-aligned.

**`feature-band`** — Featured-creator spotlight. Full-width band on `#fff0c2` vivid-cream ground, 120px vertical padding. Two-column layout: left column has creator portrait illustration (cropped, often bleeding off the band edge), right column has display-lg headline + body + dual CTA.

**`hero-band-light`** — Default hero on cream. Padding 120px vertical, display-mega headline, body-md sub, dual CTA stack.

**`hero-band-vivid`** — Hero on vivid yellow-cream. Same structure, `#fff0c2` bg.

**`hero-band-dark`** — Rare full-bleed dark hero. `#000` bg, cream `#fffaee` text, used for creator-portrait moments only.

### Badges / Tags / Pills

**`badge-creator`** — Creator compound. **Black** bg, **cream** text (the inverted register), 32px circular avatar prefix, handle in creator-handle 14/600. Always at 999px pill, 4 × 12 padding around the handle (avatar bleeds into pill).

**`badge-trending`** — `rgba(255,91,0,0.10)` orange-soft bg, `#ff5b00` text, 999px pill, 4 × 12 padding, caption-strong type. Used on "Trending" / "Featured this week" indicators.

**`badge-new`** — Bright `#ffd400` yellow flat bg, **black** text, 999px pill. Used on "New drop" indicators on creator cards.

**`badge-minted`** — Brand-soft purple bg, purple text, 999px pill. Used on "Just minted" indicators in feeds.

### Inputs / Forms

**`input-text`** — White bg, **1.5px** `#e8dcb8` border, 14px radius, 14 × 18 padding, 48px height. Focus → 4px `rgba(90,62,255,0.40)` ring (slightly larger than typical 3px), border tightens to `#5a3eff`. The 4px focus ring is a deliberate brand choice — Zora goes louder on focus visibility.

**`input-search`** — White bg, 1.5px border, 999px pill radius, 14 × 20 padding, 48px height (perfect pill).

### Navigation

**`top-nav`** — 64px tall, `#fffaee` bg, 1px `#f0e6c4` bottom hairline. Zora wordmark left (custom Zora Display "ZORA" treatment), tabs centred (Explore, Drops, Creators, Mint), right cluster (search-icon, profile avatar, primary purple "Connect" CTA).

**`side-rail`** — Used on collection/creator pages. 280px wide, white bg, 1.5px `#e8dcb8` border, 18px radius, 24px padding.

### Modals & Overlays

**`modal-collect`** — Mint flow modal. White bg, 1.5px border, 24px radius, 32px padding. Holds quantity stepper + total in JetBrains Mono + gas-fee breakdown. Modal scrim is `rgba(0,0,0,0.55)`.

**`toast-success`** — Mint `#00d8a8` flat bg, black text, 14px radius, 12 × 16 padding. The mint bg signals "successful collect".

**`toast-error`** — White bg, 1.5px `#e64545` red border-left, manual dismiss.

### Decorative

**`mint-confetti`** — On primary "Collect" CTA tap, a 480ms burst of 12–16 small (4 × 4px) pixel-shapes in alternating purple/orange/yellow/mint emerges from the button origin and falls outward with gentle gravity. Reduced-motion-honoured (disabled entirely).

**`footer`** — Dark footer that closes every page. `#000` bg, cream `#fffaee` text, 80px vertical padding (not 64 — Zora's footer is more generous). Multi-column link list (Explore, Create, Develop, Resources, Company), wordmark in Zora Display lockup.

## 5. Layout Principles

### Spacing System
- **Base unit**: 4px.
- **Tokens**: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 120.
- **Section padding (vertical)**: **120px** on marketing — generous editorial rhythm, the most generous in this set.
- **Card internal padding**: 16px on asset cards, 24px on creator cards.
- **Gutters**: 24px between asset cards, 32px between feature blocks.

### Grid & Container
- **Max content width**: 1280px on every page.
- **Marketplace grid**: responsive `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))` with 24px gap — flexes from 4-up at wide to 1-up at mobile (single-column emphasis on mobile is intentional — creator-network isn't a marketplace; cards stay readable).
- **Creator profile**: 280px rail left (sticky), feed right.
- **Hero band**: 12-column grid, headline 6–8 cols left, illustration 4–6 cols right.

### Whitespace Philosophy
**Indie-zine generosity.** Zora willingly trades cards-per-viewport for editorial breath. The 120px section padding (vs Coinbase 96, Magic Eden 96, OpenSea 80, Blur 64) is the most generous in this set. Asset cards wider (280px+ vs 220px elsewhere). The single-column mobile layout deliberately rejects the "fit more cards" optimisation.

### Section Cadence
Cream → vivid yellow-cream feature band → cream → dark creator-portrait hero (rare) → cream → dark footer. The cadence alternates the cream and vivid-cream surfaces with one or two dark punctuations per page.

## 6. Shapes & Radius

- **None** 0 — full-bleed band edges, hero illustration crops
- **xs** 6 — micro chips, code-micro inline
- **sm** 10 — small interior elements
- **card** 14 — asset cards (the signature radius — softer than Magic Eden's 16, harder than Apple's 24)
- **md** 14 — inputs, dropdowns
- **lg** 18 — creator cards
- **xl** 24 — modals
- **pill** 999 — every CTA, every badge — creator-network friendliness
- **full** 9999 — circular avatars, mint-confetti pixel-shapes

The 14px card radius is Zora's signature — softer than OpenSea's 10 (trader register), softer than Blur's 0 (brutalist), harder than Magic Eden's 16 (boutique). At this scale, asset cards feel zine-poster-like rather than tile-like.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 Flat | No shadow, surface contrast only | Body sections, hero bands |
| 1 Card | White on cream + 1.5px `#e8dcb8` | Asset cards, panel surfaces |
| 2 Hover | `#fff3d6` warmer bg + `translateY(-3px)` | Card hover |
| 3 Floating | `rgba(0,0,0,0.06) 0 8px 20px` | Dropdowns, tooltips |
| 4 Card-hover lit | `rgba(0,0,0,0.12) 0 24px 48px -16px, rgba(90,62,255,0.10) 0 0 0 1.5px` | Asset card hover (signature) |
| 5 Modal | `rgba(0,0,0,0.20) 0 40px 80px -8px` + scrim `rgba(0,0,0,0.55)` | Modal dialogs |
| Focus ring | `0 0 0 4px rgba(90,62,255,0.40)` | All keyboard focus (4px not 3px) |

**Shadow Philosophy**: Zora uses warmer cream hairlines and a thicker 1.5px brand-tinted edge ring on card-hover. The 1.5px matches the resting border thickness exactly — the hover effect reads as "the border swapped to brand purple" rather than "a new shadow appeared," which keeps the zine letterpress register clean.

## 8. Interaction & Motion

- **Easing standard** — `cubic-bezier(0.4, 0, 0.2, 1)` for hover, dropdown, modal fade
- **Easing emphasized** — `cubic-bezier(0.2, 0, 0, 1)` for asset-card lifts and band reveals
- **Easing bounce** — `cubic-bezier(0.34, 1.56, 0.64, 1)` reserved for the mint-confetti burst
- **Durations** — fast 140ms (hover), standard 280ms (card lift), slow 480ms (mint confetti)
- **Hover** — primary CTA darkens to `#3f29c2` over 140ms; asset cards lift 3px and gain the brand-tinted 1.5px edge-ring shadow; creator badges shift bg from black to `#1a1a1a`
- **Card lift** — `translateY(-3px)` on hover, returns on leave. The 3px matches Magic Eden but with the thicker 1.5px ring
- **Mint confetti** — on "Collect" tap, 12–16 small pixel-shapes (alternating purple/orange/yellow/mint) burst outward from the button origin with bounce ease, fall with gravity, fade at 400ms. Total duration 480ms. Then the button morphs to mint-bg "Collected ✓" state. Disabled under reduced-motion.
- **Page transition** — 280ms cross-fade between routes
- **Reduced motion** — `prefers-reduced-motion: reduce` collapses lifts to opacity-only, disables the confetti burst entirely; mint-button still morphs to "Collected ✓" but instantly

## 9. Accessibility & A11y

- **Contrast**: Black on `#fffaee` = 19.6:1 (AAA). Body `#1a1a1a` on canvas = 17.0:1 (AAA). White on Purple `#5a3eff` = 6.2:1 (AA at body). Black on yellow `#ffd400` = 13.7:1 (AAA). Black on mint `#00d8a8` = 4.9:1 (AA at body).
- **Focus indicator**: **4px solid** `rgba(90,62,255,0.40)` ring (one px more than typical) on every interactive element. Border tightens to `#5a3eff` on focused inputs.
- **ARIA patterns**: Asset cards use `<a>` wrap with `aria-label="{asset-name} by {creator}, mint price {price} ETH"`. Creator compound badges are `aria-label="Created by {handle}"`. Modal dialogs use `role="dialog"` with focus trap.
- **Keyboard nav**: Tab walks asset cards row-by-row; Enter opens detail. Mint flow uses Enter to confirm, Escape to cancel. Confetti animation has `aria-hidden="true"`.
- **Screen reader hints**: Asset preview images carry `alt="{asset-name} by {creator}"`. Mint-success toast announces "Collected {asset-name}" via `aria-live="polite"`. Creator handles include the @ prefix in screen-reader text but display without it.
- **Reduced motion**: Honoured — see §8.

## 10. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|------:|-------------|
| Mobile     | < 640  | Top nav → hamburger; hero display-mega 96 → 56px; asset grid **1-up** (single column emphasises card readability); side-rail collapses to top sheet |
| Tablet     | 640–1024 | Asset grid 2-up; rail toggles via icon button |
| Desktop    | 1024–1280 | Side-rail persistent; asset grid 3-up; full nav |
| Wide       | > 1280 | Asset grid 4-up; container at 1280px max — Zora caps wider than its 1280 max |

**Touch Targets**: Primary CTAs render at minimum 48 × 48px on mobile (button-primary-lg sizing). Asset card tap area extends across the full card. Creator compound badges are 44 × 44px tap targets with the avatar + handle tappable.

**Collapsing Strategy**: Top nav → hamburger; tabs become a stacked menu sheet. Side-rail → top-sheet behind a "Filters" pill. Asset detail metadata moves below artwork on mobile. Mint modal scales to full-screen on mobile.

**Image Behavior**: Asset card artwork uses `loading="lazy"` and preserves aspect ratio (some 1:1, some 4:5 portrait, some 16:9 — Zora artwork ratios vary and the system honours that). Creator portraits crop to centre on mobile.

## 11. Content & Voice

- **Tone** — playful-direct, creator-celebratory, zine-warm. "Collect this drop" not "Buy this NFT". "Mint by {handle}" not "Listed by {address}". The system avoids both crypto-bro hype and corporate-fintech distance — voice sits in the "indie record label" register.
- **Microcopy** — verbs are creator-warm: "Collect", "Mint", "Drop", "Create", "Follow", "Repost". The "Collect" verb is preferred over "Buy" — Zora frames acquisition as patronage rather than transaction.
- **CTA verbs** — "Collect" (primary acquisition), "Mint" (creator-side), "Drop" (release), "Create" (creator entry), "Follow" (social), "Get started" (marketing).
- **Empty states** — warm and supportive. "No drops yet — be the first to mint" with a "Create" pill below. Always offers an action; never just confirms emptiness.
- **Error messages** — clear and warm-remediable. "Insufficient ETH — top up your wallet to collect" not "Transaction failed". Wallet errors quote the provider message in mono with a "Retry" pill.
- **Number formatting** — always `tnum`, locale-aware, ETH amounts show 4 decimal places. USD equivalents in caption underneath in `text-muted`.
- **Address formatting** — handles preferred over addresses everywhere on Zora — `@yokokoji.eth` over `0x1234…abcd`. When a wallet has no handle, the system renders `0x1234…abcd` with a "Set a handle" prompt.
- **Creator-first compound** — every asset surface leads with the creator compound badge. The asset-by-creator structure is the brand's clearest editorial commitment.

## 12. Dark Mode & Theming

Zora is **dual-theme**. Cream canvas is the brand default; a user-toggleable dark variant exists and uses:

- `bg-dark` `#000000` (canvas — pure black, no warming)
- `bg-dark-elev-1` `#1a1a1a` (surface-soft equivalent — card bg)
- `bg-dark-elev-2` `#252525` (hover bg)
- `text-on-dark` `#fffaee` (cream-tinted ink, never pure white — the cream tint signals continuity with the day-mode register)
- `text-on-dark-soft` `#a8a8a8` (muted)
- `border-on-dark` `rgba(255,250,238,0.10)` (cream hairline at 10%)
- Purple, orange, yellow, mint stay constant — the brand voltages thread through both modes
- Card-hover edge-ring becomes `rgba(90,62,255,0.20)` (slightly stronger on dark for parity)

The cream-tinted ink-on-dark (`#fffaee` not `#ffffff`) is Zora's distinguishing dark-mode choice — pure white would read corporate-fintech; cream signals continuation of the indie-zine register.

The footer always renders dark `#000` regardless of the user's theme preference.

## 13. Lineage & Influences

Zora's design language inherits from **indie zine printing** (riso prints, art-school zines, Yale Graphic Design alumni publications) and **independent record labels** (Stones Throw, Domino, Sub Pop) more than from crypto-native peers. The cream canvas, vibrant 4-colour palette, hand-set-feeling display tracking, and creator-first compound badges are direct references to the indie-publication aesthetic. The choice to name the primary acquisition verb "Collect" (versus OpenSea's "Buy" or Magic Eden's "Sweep") signals "patronage of art" rather than "transaction".

What it borrows: pill CTAs from Stripe/Notion; Inter Tight body type from many recent design-system rebuilds; the 1.5px thicker border from Pangram Pangram's recent typeface marketing sites. The mint-confetti gesture is Zora's most-imitated interaction — many Web3 creator tools have shipped variants since.

What it explicitly rejects: dark canvas defaults (rejected as too clinical for creator-network warmth); mono-default body type (rejected as too trader-pro); 0px corner radius (rejected as too brutalist); single-brand-colour discipline (rejected as too corporate — the four-colour zine palette is the brand's clearest deviation from the OpenSea/Coinbase single-blue convention).

The shift from Zora V1 (2020 — minimalist black + neon green) to the current cream + purple + orange + yellow palette (2022–present) was a deliberate softening to lean into the "creator network for everyone" framing rather than the early "DAO-native auction protocol" register. The team publicly framed the rebrand as "zine, not Bloomberg."

Influences:
- **Stones Throw / Domino / Sub Pop** — Indie record label aesthetic — vibrant covers, considered cream/manila stock, hand-set headline type. https://stonesthrow.com
- **Riso-print zines** — Cream-paper canvas, four-colour vivid palette, letterpress headline density. (Search "risograph zine" for the visual lineage.)
- **GT Zirkon (Grilli Type)** — Geometric-soft sans-display with rounded terminals, the closest open licensable equivalent to Zora Display. https://www.grillitype.com
- **Notion** — Cream-tinted neutrals, single-confident accent (rejected the single-confident in favour of four-colour). https://www.notion.com
- **Pangram Pangram type marketing sites** — 1.5px thicker borders, generous section padding, mid-weight serif/sans pull-quotes. https://pangrampangram.com

## 14. Do's and Don'ts

### Do
- Keep the canvas at `#fffaee` cream-ivory — saturated zine paper, not Notion-ecru, not Magic Eden mint-cream
- Use the four-colour palette: purple `#5a3eff` (primary), orange `#ff5b00` (featured), yellow `#ffd400` (new/earn), mint `#00d8a8` (success)
- Lead every asset surface with the creator compound badge — black bg, cream text, avatar + handle. Creator identity is first-class
- Use Zora Display weight 700 with -3px tracking on display-mega — the locked-up letterpress feel is the brand
- Pill CTAs at 999px radius — creator-network warmth
- 1.5px borders on cards — thicker than typical, zine-letterpress edge feel
- Section padding at 120px — generous editorial rhythm, even on dense pages
- The mint-confetti gesture on Collect is the system's signature — preserve it (and disable under reduced-motion)
- Use the "Collect" verb as primary acquisition CTA — never "Buy"
- Cream-tinted text on dark surfaces (`#fffaee`), never pure white

### Don't
- Don't pure-white the canvas — Zora's saturated cream is non-negotiable; clinical white reads OpenSea/Coinbase
- Don't single-brand-colour the system — the four-colour palette is intentional; reducing to one voltage breaks the zine register
- Don't lead with the asset name — every asset surface leads with creator. The asset-by-creator structure is editorial, not optional
- Don't bolden Zora Display past 700 — there's no 800/900 in the production stack
- Don't use Inter (regular) instead of Inter Tight — the narrow variant is what holds register with the compressed display
- Don't 0px corner radius anything — Zora's 14px card radius is the warmth signal
- Don't use mono on body text — JetBrains Mono is for prices and addresses only
- Don't use the "Buy" verb — "Collect" is the brand commitment
- Don't disable the mint-confetti for performance — it's the system's signature gesture (only disable under reduced-motion)
- Don't add additional brand colours — yellow/orange/purple/mint is the entire palette; introducing teal or pink breaks the editorial register

## 15. Agent Prompt Guide

### Quick Color Reference
- Brand purple: `#5a3eff`
- Brand pressed: `#3f29c2`
- Signal orange: `#ff5b00`
- Bright yellow: `#ffd400`
- Mint accent: `#00d8a8`
- Canvas cream: `#fffaee`
- Surface soft: `#fff3d6`
- Surface vivid: `#fff0c2`
- Text ink: `#000000`
- Body: `#1a1a1a`
- Muted: `#5a5a5a`
- Border: `#e8dcb8`

### Example Component Prompts
- "Create a Zora hero band: `#fffaee` cream-ivory background, 96px Zora Display weight 700 headline 'Mint, collect, create.' with -3px tracking and 0.92 line-height in `#000000`, body-md sub at 16px Inter Tight in `#1a1a1a`, primary purple CTA `#5a3eff` 999px radius 14 × 28 padding 'Get started' with white text weight 600 -0.1px tracking, secondary black-cream-inverse pill 'Explore' with cream `#fffaee` text on black bg."
- "Design an asset card: white bg on cream canvas, 1.5px `#e8dcb8` border, 14px radius. Top: NFT artwork bleeds full-width to top edges (4:5 aspect or whatever artwork ratio). Bottom: 16px padding. Top row: creator compound — 32px circular avatar + handle '@yokokoji.eth' in creator-handle 14/600 -0.1px tracking, set on a black `#000` pill bg with cream `#fffaee` text. Middle row: asset name in asset-name 16/600 -0.1px in `#000`. Bottom row: 'PRICE' label-eyebrow 11/700 1px tracking uppercase `#5a5a5a` over JetBrains Mono price-display '0.05 Ξ' in `#000`. Hover: translateY(-3px) with brand-tinted 1.5px edge-ring shadow."
- "Build a featured-creator spotlight band: `#fff0c2` vivid-cream background, 120px vertical padding. Two-column: left has a creator portrait illustration (cropped, bleeds off the right edge), right has Zora Display title 'Featured this week' display-md 40/700 -1.2px in `#000`, body sub, dual CTA: primary purple 'Collect now' + ghost outline 'View profile' with 1.5px black border."
- "Render an asset detail collect-CTA: 16 × 32 padding, 52px height, 999px pill radius. Background `#5a3eff` purple, white text 'Collect for 0.05 Ξ' weight 600. On tap: confetti burst (12–16 small 4 × 4px pixel-shapes alternating purple/orange/yellow/mint, bounce ease, fall with gravity, fade at 400ms). Then morph to mint `#00d8a8` bg with black text 'Collected ✓'."
- "Compose a creator-card grid: 3-up on desktop with 24px gutters. Each card: white bg, 1.5px `#e8dcb8` border, 18px radius, 24px padding. 80px circular avatar top-centred, creator handle in title-md 20/600 -0.2px '@yokokoji', bio in body-sm `#5a5a5a`, 'Follow' button right-aligned (black bg, cream text, 999px pill, 10 × 20 padding)."

### Iteration Guide
1. Cream-ivory canvas `#fffaee` — saturated zine paper, never pure white
2. Zora Display at weight 700 with -3px tracking on display-mega; Inter Tight at 16px body; JetBrains Mono on numbers
3. Pill CTAs at 999px radius — creator-network warmth, never the trader-tool 8px square
4. Lead every asset surface with the creator compound badge — black bg, cream text, avatar + handle horizontally compounded
5. Asset cards: white bg + 1.5px `#e8dcb8` border + 14px radius. Hover lifts 3px with brand-tinted 1.5px edge-ring shadow
6. The mint-confetti gesture on Collect is signature — preserve it. Disable under reduced-motion only
7. Use the "Collect" verb as primary acquisition — never "Buy". The patronage framing is intentional
8. Section padding at 120px on marketing — most generous in this category set
9. Four-colour zine palette (purple/orange/yellow/mint) — adding teal or pink breaks the editorial register
10. Cream-tinted text `#fffaee` on dark surfaces, never pure white — the warm tint threads through both modes
