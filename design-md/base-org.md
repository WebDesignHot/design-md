---
name: Base
tagline: Coinbase-adjacent L2 minimalism — coinbaseSans on white, signature electric blue #0000ff, aggressive -4px display tracking.
updated_at: 2026-05-05T20:30:27+12:00
published_at: 2026-05-05T20:30:27+12:00
author: webdesignhot
source_url: https://www.base.org
spec: design.md/v1.5
quality: curated
featured: false
categories: [fintech, marketplace]
tags: [light, sans, crypto, web3, minimalist, l2]
preview_swatch: ['#ffffff', '#0000ff', '#000000']
related: [coinbase, ethereum-org, stripe]
description: 'Base''s site reads as Coinbase-extracted minimalism — borrowing the parent company''s typography, neutral discipline, and confident chromatic restraint, then sharpening it for L2 crypto-infrastructure messaging. The base canvas is paper-white `#ffffff` carrying display headlines in pure black `#000000` **coinbaseSans** at weight 400 with **-4px aggressive negative tracking** (a signature compression that signals magazine-cover confidence). The single chromatic voltage is **Base electric blue `#0000ff`** — pure RGB blue, the iconic crypto-signal color used scarcely on primary CTAs, the Base wordmark/cube logo, and the chain-product highlight. Body copy in coinbaseDisplay (Coinbase''s body sans companion) at modest sizes. Section rhythm is clean editorial — paper-white canvas with rare blue-tinted promotional bands and the occasional Base-blue CTA band. The brand voice is ecosystem-confident, focused on building "a global economy" — measured, infrastructural, less hype-driven than typical L2 marketing.'

colors:
  bg: '#ffffff'                  # paper-white canvas
  bg-elevated: '#fafafa'         # near-white surface variant
  bg-blue: '#0000ff'             # Base electric-blue band
  bg-cream: '#f5f5f0'            # warm cream tone for editorial bands
  bg-dark: '#000000'             # rare; closing footer or scoped product surfaces
  surface: '#f5f5f5'             # neutral grey panel
  surface-soft: '#fafafa'        # softer panel
  surface-strong: '#e8e8e8'      # heavier panel
  surface-on-blue: '#0000cc'     # darker blue surface variant
  text: '#000000'                # ink — pure black on white
  text-strong: '#000000'         # body-strong (same)
  text-body: '#1a1a1a'           # default running body copy
  text-muted: '#666666'          # captions, metadata
  text-faint: '#999999'          # disabled, footer secondary
  text-on-blue: '#ffffff'        # white text on blue surface
  text-on-dark: '#ffffff'        # white text on dark
  brand: '#0000ff'               # Base electric blue — primary CTA, cube logo, chain product
  brand-hover: '#0000cc'         # press state — slightly darker blue
  brand-active: '#000099'        # deeper press
  brand-soft: '#e6e6ff'          # softest tint — selected nav, badge bg
  brand-deep: '#000033'          # deep navy for gradient accents
  on-brand: '#ffffff'            # white on Base blue
  accent-cream: '#f5f5f0'        # warm cream — used in editorial highlight bands
  accent-yellow: '#ffd000'       # rare yellow — Wallet/Onchain highlights
  accent-pink: '#ff5599'         # rare pink — community/social callouts
  border: '#e0e0e0'              # standard 1px hairline on light
  border-soft: '#ededed'         # soft divider
  border-strong: '#999999'       # input border
  border-on-blue: '#3333ff'      # 1px hairline on blue surface
  link: '#0000ff'                # links default to Base blue
  link-hover: '#0000cc'          # darker blue on hover
  ring: '#0000ff'                # focus ring
  success: '#10b981'             # confirmation
  warning: '#f59e0b'             # validation warnings
  danger: '#ef4444'              # form errors
  info: '#0000ff'                # info badges (shares brand)

typography:
  display:
    family: 'coinbaseSans, "coinbaseSans Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 700]
    opentype-features: []
  body:
    family: 'coinbaseDisplay, "coinbaseDisplay Fallback", ui-sans-serif, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 700]
    opentype-features: []
  mono:
    family: 'coinbaseMono, "SF Mono", Menlo, monospace'
    weights: [400, 500]
    opentype-features: []
  scale:
    display-mega:    { size: 80, weight: 400, lineHeight: 0.95, tracking: '-4px',    family: display, notes: 'Homepage hero h1 — "A global economy, built by all of us"' }
    display-xl:      { size: 64, weight: 400, lineHeight: 0.98, tracking: '-3.2px',  family: display, notes: 'Subsidiary heroes' }
    display-lg:      { size: 48, weight: 400, lineHeight: 1.05, tracking: '-2.4px',  family: display, notes: 'Section heads' }
    display-md:      { size: 36, weight: 400, lineHeight: 1.10, tracking: '-1.8px',  family: display, notes: 'Sub-section heads, card titles' }
    display-sm:      { size: 24, weight: 500, lineHeight: 1.20, tracking: '-0.6px',  family: display, notes: 'Component titles' }
    title-md:        { size: 18, weight: 500, lineHeight: 1.40, tracking: 'normal',  family: body,    notes: 'Card titles, list section labels' }
    title-sm:        { size: 16, weight: 500, lineHeight: 1.45, tracking: 'normal',  family: body,    notes: 'Small section titles' }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: 'normal',  family: body,    notes: 'Editorial body, intro paragraphs' }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: 'normal',  family: body,    notes: 'Default running text' }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.50, tracking: 'normal',  family: body,    notes: 'Footer body, fine print' }
    caption:         { size: 12, weight: 400, lineHeight: 1.45, tracking: 'normal',  family: body,    notes: 'Photo captions, metadata' }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.40, tracking: '0.6px',   family: body,    notes: 'Section eyebrows — uppercase' }
    button:          { size: 14, weight: 500, lineHeight: 1.00, tracking: 'normal',  family: body,    notes: 'CTA labels — sentence-case' }
    nav-link:        { size: 14, weight: 400, lineHeight: 1.40, tracking: 'normal',  family: display, notes: 'Top-nav menu items in coinbaseDisplay' }
    metric-value:    { size: 64, weight: 400, lineHeight: 0.98, tracking: '-3.2px',  family: display, notes: 'Onchain metric values — TVL, daily transactions' }
    metric-label:    { size: 12, weight: 500, lineHeight: 1.40, tracking: '0.6px',   family: body,    notes: 'Onchain metric labels — uppercase' }
    code:            { size: 14, weight: 400, lineHeight: 1.55, tracking: 'normal',  family: mono,    notes: 'Smart contract code, hashes' }

radius:
  none: 0           # spec/data containers
  xs: 4             # tight chips
  sm: 6             # small badges
  md: 8             # default — text inputs, secondary cards, nav items
  lg: 12            # primary feature cards
  xl: 16            # photo cards
  xxl: 24           # hero photo cards
  pill: 9999        # avatar plates only (rare)

spacing:
  base: 4
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  hero-height: '720px on desktop'
  section-padding: 96
  card-grid-gutter: 24

components:
  top-nav:
    bg: 'rgba(255, 255, 255, 0.85)'
    backdrop-filter: 'blur(16px)'
    text: '#000000'
    typography: 'coinbaseDisplay 14/400'
    height: 64
    layout: 'Base cube logo left + horizontal menu (Chain / Products / Developers / Solutions / Community) center + utilities (Build, Wallet) right'
    border-bottom: '1px solid #e0e0e0'
    sticky: true
  base-cube-logo:
    height: 32
    placement: 'top-left of nav, in #0000ff Base electric-blue'
    notes: 'The minimalist square/cube mark + "base" wordmark — non-negotiable nav element'
  button-primary:
    bg: '#0000ff'
    text: '#ffffff'
    padding: '10px 20px'
    height: 40
    radius: 8
    border: 'none'
    font: 'coinbaseDisplay 14/500 sentence-case'
    transition: 'background-color 200ms ease'
    use: 'Build on Base, Get started, Connect Wallet'
  button-primary-hover:
    bg: '#0000cc'
    notes: 'Color-only hover'
  button-secondary:
    bg: '#000000'
    text: '#ffffff'
    padding: '10px 20px'
    height: 40
    radius: 8
    font: 'coinbaseDisplay 14/500'
    use: 'Secondary primary action when blue is reserved'
  button-outline:
    bg: 'transparent'
    text: '#000000'
    border: '1px solid #000000'
    padding: '9px 19px'
    height: 40
    radius: 8
    font: 'coinbaseDisplay 14/500'
    use: 'Tertiary action paired with primary'
  button-text:
    bg: 'transparent'
    text: '#0000ff'
    font: 'coinbaseDisplay 14/500'
    decoration: 'arrow → indicator slides in on hover'
    use: 'Inline editorial actions (Read more, View documentation)'
  hero-band-light:
    bg: '#ffffff'
    text: '#000000'
    headline: 'coinbaseSans 80/400 -4px'
    cta-arrangement: 'one Base blue primary + one outline secondary'
    padding: '128px 48px'
  hero-band-blue:
    bg: '#0000ff'
    text: '#ffffff'
    headline: 'coinbaseSans 64/400 -3.2px white'
    notes: 'Used for chain-product launches, special promotional moments'
    padding: 96
  hero-band-cream:
    bg: '#f5f5f0'
    text: '#000000'
    notes: 'Warm cream variant for editorial sections'
  feature-card:
    bg: '#ffffff'
    text: '#000000'
    radius: 12
    border: '1px solid #e0e0e0'
    padding: 32
    notes: 'Title display-md + body + button-text'
  feature-card-blue:
    bg: '#0000ff'
    text: '#ffffff'
    radius: 12
    padding: 32
    notes: 'Brand-blue feature card for emphasis moments'
  metric-cell:
    bg: 'transparent'
    text: '#000000'
    typography: 'coinbaseSans 64/400 -3.2px'
    label: 'metric-label 12/500 0.6px uppercase muted'
    padding: '24px 0'
  text-input:
    bg: '#ffffff'
    text: '#000000'
    border: '1px solid #999999'
    radius: 8
    padding: '10px 14px'
    height: 40
    font: 'coinbaseDisplay 14/400'
    focus: 'border-color shifts to #0000ff; ring 2px solid #0000ff at 2px offset'
  badge-pill:
    bg: '#e6e6ff'
    text: '#0000ff'
    radius: 9999
    padding: '4px 10px'
    font: 'eyebrow 12/500 0.6px uppercase'
  cta-band-blue:
    bg: '#0000ff'
    text: '#ffffff'
    typography: 'coinbaseSans 48/400 -2.4px'
    padding: 96
    cta: 'one white-on-blue primary, centered'
  cta-band-light:
    bg: '#ffffff'
    text: '#000000'
    typography: 'coinbaseSans 48/400 -2.4px'
    padding: 96
    cta: 'one Base blue primary, centered'
  footer-light:
    bg: '#ffffff'
    text: '#666666'
    columns: 4
    padding: '64px 48px'
    border-top: '1px solid #e0e0e0'
  footer-link:
    text: '#000000'
    font: 'coinbaseDisplay 14/400'
    hover: 'text shifts to #0000ff'

lineage:
  summary: 'Base''s digital surface inherits directly from Coinbase: shared typography (coinbaseSans + coinbaseDisplay + coinbaseMono), shared neutral discipline (paper-white canvas, pure-black ink), shared confident chromatic restraint. Where Coinbase uses brand-blue scarcely, Base sharpens that blue to pure RGB `#0000ff` — the iconic crypto-signal color, the most committed brand voltage in L2 ecosystems. The aggressive -4px negative tracking on display sizes is the brand''s most distinctive typographic choice — magazine-cover compression that signals confidence-without-volume. The brand voice is ecosystem-confident, building "a global economy" — measured, infrastructural, less hype-driven than typical L2 marketing. What it rejects: crypto-meme aesthetic, neon gradients, "moon" language, decorative imagery competing with the typographic restraint, anything that feels like Web3 hype rather than infrastructure.'
  influences:
    - name: 'Coinbase'
      role: 'Direct typographic inheritance — coinbaseSans/Display/Mono, neutral discipline, confident chromatic restraint'
      url: 'https://www.coinbase.com'
    - name: 'Stripe'
      role: 'Single-color brand voltage discipline applied to fintech-infrastructure marketing'
      url: 'https://stripe.com'
    - name: 'Ethereum.org'
      role: 'L1/L2 ecosystem messaging vocabulary, builder-focused brand voice'
      url: 'https://ethereum.org'
    - name: 'Linear / Vercel'
      role: 'Dev-tools editorial confidence applied to crypto infrastructure'
      url: 'https://linear.app'
    - name: 'Optimism'
      role: 'L2 brand vocabulary — single-saturated-color voltage, ecosystem-builder voice'
      url: 'https://www.optimism.io'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 200
  duration-slow: 300
  duration-cinema: 600
  hero-text-reveal: 'word-stagger fade-in over 600ms on hero headline first paint'
  card-hover-shift: 'border-color shift to #0000ff over 200ms on hover'
  reduced-motion: 'respects prefers-reduced-motion: reduce — text-reveal collapses to single fade, all transitions to opacity-only'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  flat: 'none'
  card: 'rgba(0, 0, 0, 0.04) 0 2px 8px'
  hover-card: 'rgba(0, 0, 0, 0.08) 0 4px 12px'
  modal: 'rgba(0, 0, 0, 0.18) 0 24px 48px -12px'
  ring: '0 0 0 2px #0000ff'
  notes: 'Restrained shadow tiers — borders carry primary elevation, soft shadows reinforce hover states'

accessibility:
  contrast-text-on-bg: 21.0              # #000000 on #ffffff — AAA
  contrast-body-on-bg: 19.7              # #1a1a1a on #ffffff — AAA
  contrast-text-on-brand: 8.6            # #ffffff on #0000ff — AAA
  contrast-link-on-bg: 8.6               # #0000ff on #ffffff — AAA
  focus-ring: '2px solid #0000ff at 2px offset'
  reduced-motion-honored: true
  touch-target-min: 40                  # CTA height — meets WCAG 44 with 4px tap-area extension

dark-mode: 'no global dark toggle — Base is light-by-default. Dark sections appear as scoped contextual surfaces (rare; certain product launches). Token swap is local: bg #ffffff → #000000, text #000000 → #ffffff, border #e0e0e0 → #333333. brand and on-brand stay unchanged.'
---

## 1. Visual Theme & Atmosphere

Base's website is what happens when an L2 crypto-infrastructure project inherits its brand DNA from a publicly-traded fintech: **Coinbase typography, Coinbase neutral discipline, Coinbase confident chromatic restraint**. The page opens onto a paper-white canvas (`#ffffff`) carrying the headline "A global economy, built by all of us" at 80px in **coinbaseSans** at weight 400 with **-4px aggressive negative tracking**. That -4px tracking is the brand's most distinctive choice: it compresses display copy into magazine-cover geometry, signalling confidence without bolding. The display weight stays at 400 — never 500, never 700. The light weight is the voice.

The chromatic discipline is Coinbase-extracted. Pure black `#000000` for ink, paper-white canvas, soft-charcoal body, and exactly one chromatic voltage: **Base electric blue `#0000ff`** — pure RGB blue, the iconic crypto-signal color, sharpened from Coinbase's softer brand blue to a more committed ultramarine. Blue appears scarcely. Primary CTA fills, the Base cube logo, the chain-product highlight, syntax-highlight keywords inside smart-contract code samples, link colors, focus rings. Body text is never blue; backgrounds are never blue except in scoped promotional moments.

Section rhythm is clean editorial — paper-white canvas with rare blue-tinted promotional bands (Base-blue `#0000ff` background sections used for chain-product launches and special promotional moments) and the occasional warm-cream `#f5f5f0` editorial band for ecosystem callouts. The visual atmosphere is quieter than typical L2 marketing — Optimism uses a saturated red, Polygon uses purple gradients, Arbitrum uses navy stripes. Base uses negative space, paper-white, and one electric-blue voltage. The discipline IS the brand.

Typography stacks three families. **coinbaseSans** carries display sizes — sharper, more geometric than Coinbase's body face. **coinbaseDisplay** carries body, navigation, and CTA labels — slightly more humanist, optimized for paragraph reading. **coinbaseMono** carries smart-contract code, transaction hashes, and technical stamps. The three-family system is identical to Coinbase's parent brand — Base inherits without modification.

Sharp small-radius corners on every CTA, card, and band — radius `8px` on primary CTAs, `12px` on feature cards, `16px` on photo cards. The radius vocabulary is engineered-friendly, not luxury-sharp, not consumer-pill. Slot-based and approachable, but not cute.

Brand voice is ecosystem-confident, focused on building infrastructure rather than chasing meme cycles. Microcopy reads "Build on Base", "Onchain economy", "Coinbase-incubated L2" — measured, infrastructural, less hype-driven than typical Web3 marketing. The site never says "moon", never says "to the moon", never uses crypto-meme aesthetic.

**Key Characteristics:**
- Paper-white `#ffffff` canvas — Coinbase-inherited neutral discipline
- Single chromatic voltage: Base electric blue `#0000ff` — pure RGB ultramarine, used scarcely
- Aggressive -4px display negative tracking — magazine-cover compression
- Display weight 400 — never bold display headlines
- Three-family typography: coinbaseSans + coinbaseDisplay + coinbaseMono (Coinbase-licensed)
- Sentence-case CTAs in coinbaseDisplay 14/500 — friendly-developer voice
- 8px CTA radius — engineered-friendly
- Rare blue-tinted promotional bands for chain-product launches
- Ecosystem-confident voice — measured infrastructure, not Web3 hype
- Sticky translucent nav with backdrop-blur
- The Base cube logo dominates the chrome left of every nav

## 2. Color Palette & Roles

### Primary
- **Paper White** (`#ffffff`): The canvas. Coinbase-inherited neutral ground.
- **Pure Black** (`#000000`): Primary ink. Display headlines, body strong, button-secondary fill. Base uses pure black where competitors use charcoal.
- **Base Electric Blue** (`#0000ff`): The single high-voltage chromatic moment. Primary CTA fill, the Base cube logo, the chain-product highlight, link colors, focus rings, syntax-highlight keywords.

### Brand & Dark
- **Brand Hover** (`#0000cc`): Press state — slight saturation drop.
- **Brand Active** (`#000099`): Deep press feedback.
- **Brand Soft** (`#e6e6ff`): Selected-tab background, badge tint.
- **Brand Deep** (`#000033`): Deep navy used in gradient accents (rare).
- **Cinema Black** (`#000000`): Same hex as ink — used for dark-section variants and rare scoped surfaces.

### Accent
- **Cream** (`#f5f5f0`): Warm cream tone for editorial highlight bands.
- **Yellow** (`#ffd000`): Reserved for Wallet/Onchain callouts (rare).
- **Pink** (`#ff5599`): Reserved for community/social callouts (rare).
- No additional saturated brand colors. Base deliberately refuses chromatic variety.

### Interactive
- **Link** (`#0000ff`): Inline body links inherit Base blue.
- **Link Hover** (`#0000cc`): Darker blue on hover.
- **Button Primary** (`#0000ff`): Primary CTA fill.
- **Button Hover** (`#0000cc`): Press state.
- **Disabled** (`#999999`): Faint — disabled CTAs and form fields.

### Neutral Scale
- **Ink** `#000000` — display, headlines, button-secondary fill
- **Body** `#1a1a1a` — running paragraph text on light canvas
- **Muted** `#666666` — captions, photo metadata, secondary list copy
- **Faint** `#999999` — disabled, footer secondary, form placeholder
- **Border Strong** `#999999` — input border
- **Border Default** `#e0e0e0` — standard 1px hairline
- **Border Soft** `#ededed` — soft divider
- **Surface** `#f5f5f5` — neutral grey panel
- **Surface Soft** `#fafafa` — softer panel
- **Surface Strong** `#e8e8e8` — heavier panel
- **Bg Cream** `#f5f5f0` — warm cream tone for editorial bands

### Surface & Borders
- **bg** is `#ffffff` paper-white — the canvas.
- **bg-elevated** `#fafafa` is a subtle tier above bg.
- **bg-blue** `#0000ff` for scoped Base-blue promotional bands.
- **bg-cream** `#f5f5f0` for warm editorial bands.
- **border** is `#e0e0e0` 1px hairline default; `#ededed` for soft dividers.
- **border-on-blue** `#3333ff` 1px on Base-blue surfaces.

### Shadow Colors
Restrained shadow tiers. Borders carry primary elevation:
- **Card default**: `rgba(0, 0, 0, 0.04) 0 2px 8px` — soft default tier on cards.
- **Hover card**: `rgba(0, 0, 0, 0.08) 0 4px 12px` — stronger on hover.
- **Modal**: `rgba(0, 0, 0, 0.18) 0 24px 48px -12px` — deep tier for dialogs.
- **Focus Ring**: `0 0 0 2px #0000ff`.

### Semantic
- **Success** (`#10b981`): Confirmation states.
- **Warning** (`#f59e0b`): Validation warnings.
- **Danger** (`#ef4444`): Form errors.
- **Info** (`#0000ff`): Info badges — shares brand blue.

## 3. Typography Rules

### Font Family
- **Display**: `coinbaseSans` — Coinbase's display cut. Geometric construction with subtle humanist terminals; engineered for high-impact display moments. Weight 400 dominates display, weight 500/700 for emphasis.
- **Body / Nav / CTA**: `coinbaseDisplay` — Coinbase's body companion. Slightly more humanist; optimized for paragraph reading at body sizes. Weight 400 default, 500 for CTAs and titles.
- **Mono**: `coinbaseMono` — Coinbase-licensed mono. For smart-contract code, transaction hashes, technical stamps. Falls back to `SF Mono`, `Menlo`.
- **Fallback chains**: `ui-sans-serif, system-ui, -apple-system, sans-serif` — graceful fallback across platforms.
- **OpenType features**: Default ligatures only. No tabular figures called out — coinbaseSans's figures align well in metric tables.
- **No italics** — voice is always upright.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Mega | coinbaseSans | 80 | 400 | 0.95 | -4px | — | Homepage hero h1 — aggressive compression |
| Display XL | coinbaseSans | 64 | 400 | 0.98 | -3.2px | — | Subsidiary heroes |
| Display Lg | coinbaseSans | 48 | 400 | 1.05 | -2.4px | — | Section heads |
| Display Md | coinbaseSans | 36 | 400 | 1.10 | -1.8px | — | Sub-section heads, card titles |
| Display Sm | coinbaseSans | 24 | 500 | 1.20 | -0.6px | — | Component titles |
| Title Md | coinbaseDisplay | 18 | 500 | 1.40 | normal | — | Card titles, list section labels |
| Title Sm | coinbaseDisplay | 16 | 500 | 1.45 | normal | — | Small section titles |
| Body Lg | coinbaseDisplay | 18 | 400 | 1.55 | normal | — | Editorial body, intro paragraphs |
| Body | coinbaseDisplay | 16 | 400 | 1.55 | normal | — | Default running text |
| Body Sm | coinbaseDisplay | 14 | 400 | 1.50 | normal | — | Footer body, fine print |
| Caption | coinbaseDisplay | 12 | 400 | 1.45 | normal | — | Photo captions, metadata |
| Eyebrow | coinbaseDisplay | 12 | 500 | 1.40 | 0.6px | — | Section eyebrows — uppercase |
| Button | coinbaseDisplay | 14 | 500 | 1.00 | normal | — | CTA labels — sentence-case |
| Nav Link | coinbaseDisplay | 14 | 400 | 1.40 | normal | — | Top-nav menu items |
| Metric Value | coinbaseSans | 64 | 400 | 0.98 | -3.2px | — | Onchain metric values — TVL, daily transactions |
| Metric Label | coinbaseDisplay | 12 | 500 | 1.40 | 0.6px | — | Onchain metric labels — uppercase |
| Code | coinbaseMono | 14 | 400 | 1.55 | normal | — | Smart contract code, hashes |

### Principles
- **Display weight stays at 400.** coinbaseSans at regular weight has enough geometric presence at 80px; bolding it would lose the editorial-confidence voice.
- **Aggressive negative letter-spacing on display.** -4px at 80px is the brand's most distinctive typographic choice. The compression signals magazine-cover confidence; the headline reads as "designed" rather than "shouted."
- **Three-family discipline.** coinbaseSans + coinbaseDisplay + coinbaseMono — display + body + mono. No serif accent, no fourth sans, no decorative type.
- **Sentence-case CTAs.** "Build on Base", "Get started", "Connect Wallet". Never uppercase. Friendly-developer voice.
- **Body and Nav both in coinbaseDisplay.** The body face carries everything except display-headline moments. Nav uses weight 400 (lighter than body emphasis).
- **No italics.** Voice is always upright.
- **coinbaseSans/Display/Mono are licensed (Coinbase-internal).** Open-source substitute: **Inter** at weight 400 with `-5%` letter-spacing for display, **Inter** 400 for body, **JetBrains Mono** for code.

## 4. Component Stylings

### Buttons

All buttons use **8px border-radius** — engineered-friendly.

**Primary (Base Blue)** — the singular high-voltage action:
- Background `#0000ff`, text `#ffffff`, font `coinbaseDisplay 14/500 sentence-case`
- Padding `10px 20px`, height `40px`, border-radius `8px`, no border
- Transition `background-color 200ms ease`
- Hover: background `#0000cc` (color-only)
- Active: background `#000099`
- Use case: Build on Base, Get started, Connect Wallet

**Secondary (Black)** — primary action when blue is reserved:
- Background `#000000`, text `#ffffff`, same dimensions and typography
- Use case: secondary primary action in dual-CTA hero blocks

**Outline** — alternative action paired with primary:
- Background transparent, text `#000000`, border `1px solid #000000`
- Padding `9px 19px` (1px less for border), height `40px`, radius `8px`
- Same `coinbaseDisplay 14/500 sentence-case` typography
- Hover: background fills to `rgba(0,0,0,0.04)` over 150ms
- Use case: tertiary CTA paired with primary

**Text** — inline editorial actions:
- Background transparent, text `#0000ff`, no border
- Same `coinbaseDisplay 14/500`
- Decoration: arrow → indicator slides in on hover
- Use case: "Read more", "View documentation", "See ecosystem"

### Hero Bands

**Light Hero (default)** — primary hero on every page:
- Background `#ffffff`, text `#000000`
- Display headline in `coinbaseSans 80/400 -4px` pure black
- One Base blue primary + one outline secondary, side-by-side
- Padding `128px 48px`

**Blue Hero** — promotional/launch variant:
- Background `#0000ff` Base electric blue, text `#ffffff`
- Headline in `coinbaseSans 64/400 -3.2px` white
- Used for chain-product launches, special promotional moments
- Padding `96px`

**Cream Hero** — warm-tone editorial variant:
- Background `#f5f5f0` warm cream, text `#000000`
- Used for ecosystem-callout sections

### Cards

**Feature Card** — primary card on light canvas:
- Background `#ffffff`, text `#000000`, radius `12px`, border `1px solid #e0e0e0`, padding `32px`
- Default soft shadow `rgba(0, 0, 0, 0.04) 0 2px 8px`
- Title in `display-md 36/400 -1.8px`, body in `body 16/400 #1a1a1a`, button-text below
- Hover: border-color shifts from `#e0e0e0` to `#0000ff` over 200ms, shadow intensifies to `rgba(0, 0, 0, 0.08) 0 4px 12px`
- Use case: feature grid on homepage, product cards

**Feature Card (Blue)** — brand-blue emphasis variant:
- Background `#0000ff`, text `#ffffff`, radius `12px`, padding `32px`
- Used for emphasis moments (Build with Base, Bridge to Base callouts)

### Metric Surfaces

**Metric Cell** — onchain metric callout:
- Transparent background
- Value in `coinbaseSans 64/400 -3.2px` pure black
- Label below in `metric-label 12/500 0.6px uppercase` muted
- Padding `24px 0`
- Use: TVL, daily transactions, onchain assets, ecosystem stats

### Forms & Inputs

**Text Input**:
- Background `#ffffff`, text `#000000`, border `1px solid #999999`, radius `8px`
- Padding `10px 14px`, height `40px`
- Font `coinbaseDisplay 14/400`
- Focus: border-color shifts to `#0000ff`; ring `2px solid #0000ff` at 2px offset

### Tags & Badges

**Badge Pill** — small uppercase pill:
- Background `#e6e6ff` (brand-soft), text `#0000ff`, radius `9999px`
- Padding `4px 10px`, font `eyebrow 12/500 0.6px uppercase`
- Use: "L2", "TESTNET", "MAINNET", "BUILDER" callouts

### CTA Bands

**CTA Band Blue** — pre-footer Base-blue band:
- Background `#0000ff`, text `#ffffff`
- Centered display headline `coinbaseSans 48/400 -2.4px`
- Single white-on-blue primary CTA centered below
- Padding `96px` vertical

**CTA Band Light** — alternative pre-footer light band:
- Background `#ffffff`, text `#000000`
- Same headline geometry
- Single Base blue primary CTA centered below

### Navigation

**Top Nav** — default nav on every page:
- Background `rgba(255, 255, 255, 0.85)` translucent white with backdrop-filter blur 16px, text `#000000`, height `64px`, border-bottom `1px solid #e0e0e0`, sticky
- Layout: Base cube logo top-left (32px tall, in `#0000ff` Base blue) + horizontal menu (Chain / Products / Developers / Solutions / Community) center + utilities (Build, Wallet) right
- Menu items in `coinbaseDisplay 14/400`
- Hover: subtle Base-blue 1px underline grows beneath active item over 150ms

### Footer

**Footer Light** — closing footer on every page:
- Background `#ffffff`, text `#666666`, border-top `1px solid #e0e0e0`
- 4-column link list at desktop covering Chain / Build / Ecosystem / Connect
- Padding `64px 48px`
- Footer links hover to `#0000ff`

## 5. Layout Principles

### Spacing System
- **Base unit:** 4px.
- **Scale:** `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128`.
- **Section padding:** 96px for major bands; 128px reserved for the homepage hero.
- **Card internal padding:** 32px for feature cards.
- **Gutters:** 24px between cards in 3-up grids.

### Grid & Container
- Max content width: **1280px** on editorial bands.
- Editorial body: 12-column grid.
- Feature card grids: 3-up at desktop, 2-up at tablet, 1-up at mobile.
- Footer: 4-column at desktop.

### Whitespace Philosophy
Generous Coinbase-inherited editorial pacing. The hero band runs at 720px on desktop. Body sections sit in 96px-padded layouts on white with disciplined density. The aggressive -4px display tracking compresses headlines into tight blocks, freeing whitespace below for measured body copy.

### Section Cadence
The homepage rhythm: light hero (full-bleed white, 80px display) → onchain metric strip (4-up TVL/transactions/assets/users) → 3-up feature card grid → blue-tinted promotional band (chain-product launch) → ecosystem-callout (warm cream) → CTA-band-blue → footer-light. Blue bands appear as scoped emphasis moments, not as the canvas.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|------|-------|-------|-----|
| None | `none` | 0 | Spec/data containers |
| Tight | `xs` | 4 | Tight chips |
| Standard | `sm` | 6 | Small badges |
| Default | `md` | 8 | Text inputs, secondary cards, nav items, CTAs |
| Card | `lg` | 12 | Primary feature cards |
| Photo | `xl` | 16 | Photo cards |
| Hero | `xxl` | 24 | Hero photo cards |
| Pill | `pill` | 9999 | Avatar plates only (rare) |

The **8px CTA radius** sits engineered-friendly. There is no compound-radius geometry on the site.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (Flat) | `#ffffff` canvas, no shadow | Body bands, footer, content surfaces |
| 1 (Card Default) | `#ffffff` background, `1px solid #e0e0e0` border, `rgba(0, 0, 0, 0.04) 0 2px 8px` shadow | Feature cards |
| 2 (Hover Card) | Border `#0000ff`, shadow intensifies to `rgba(0, 0, 0, 0.08) 0 4px 12px` | Hovered feature cards |
| 3 (Modal) | `rgba(0, 0, 0, 0.18) 0 24px 48px -12px` | Dialogs |
| 4 (Blue Surface) | `#0000ff` background — chromatic depth, not shadow | Brand-blue feature cards, blue hero band |

### Shadow Philosophy
Restrained shadow tiers. Borders carry primary elevation; soft shadows reinforce hover states. The default card shadow at `0.04` alpha is so soft it reads as ambient atmosphere rather than as drop-shadow chrome. Hover intensifies to `0.08` alpha + cyan border-color shift. Surface brightness steps (`#ffffff` → `#fafafa` → `#f5f5f5`) carry structural elevation.

### Decorative Depth
- **Border-color hover** shifts from grey hairline to Base-blue.
- **Brand-blue surfaces** carry chromatic depth (no shadow needed).
- **Surface brightness steps** carry structural elevation.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — material-style ease for most micro-interactions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — stronger entrance for hero band reveals

### Duration Buckets
- **Fast** (150ms): button background-color transitions, link hover shifts
- **Standard** (200ms): card border-color and shadow transitions
- **Slow** (300ms): section entrance fades, modal entrance
- **Cinema** (600ms): hero text-reveal stagger

### Per-Component Micro-States
- **Button Primary** — hover: background-color transitions to `#0000cc` over 150ms. No transform. Active: background drops to `#000099`.
- **Button Outline** — hover: background fills to `rgba(0,0,0,0.04)` over 150ms.
- **Feature Card** — hover: border-color shifts from `#e0e0e0` to `#0000ff` over 200ms; shadow intensifies from `0.04` to `0.08` alpha.
- **Link** — hover: color shifts from `#0000ff` to `#0000cc` over 150ms.
- **Hero Headline** — first paint: words stagger-fade-in over 600ms emphasized ease, 80ms delay between words.
- **Top Nav** — scroll: backdrop-filter blur intensifies; border-bottom appears.

### Page Transitions
Page-to-page: 200ms cross-fade. Hero text reveals with word-stagger fade on first paint.

### Reduced Motion Strategy
Respects `prefers-reduced-motion: reduce`. Under reduced motion:
- Hero stagger-fade collapses to single fade-in over 200ms
- All scroll-triggered animations collapse to opacity transitions
- Hover states remain (color and shadow shifts are not motion-coded)

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)
- **Text on Canvas**: `#000000` on `#ffffff` = 21.0:1 — AAA at all sizes
- **Body on Canvas**: `#1a1a1a` on `#ffffff` = 19.7:1 — AAA at body sizes
- **Text on Brand**: `#ffffff` on `#0000ff` = 8.6:1 — AAA
- **Link on Canvas**: `#0000ff` on `#ffffff` = 8.6:1 — AAA
- **Muted on Canvas**: `#666666` on `#ffffff` = 5.7:1 — AA Normal

### Focus Indicators
- **Ring color**: `#0000ff` (Base electric blue)
- **Ring style**: `2px solid` at `2px` offset from element's outer edge
- **Focus-visible only**: ring appears only on keyboard focus, not mouse-click focus

### ARIA Patterns
- **Combobox** (search, select dropdowns): `role="combobox"` with `aria-expanded`, `aria-controls`, `aria-activedescendant`.
- **Listbox** (dropdown options): `role="listbox"` with `aria-selected`.
- **Dialog** (Connect Wallet, modals): `role="dialog"` with `aria-modal="true"`, `aria-labelledby`, focus trap.
- **Tabs** (docs navigation, ecosystem-category toggle): `role="tablist"` with `aria-selected`. Arrow-key navigation.
- **Code block**: `<pre><code>` with `aria-label="Smart contract code"` and language attribute.
- **Live region** (onchain metrics): `role="status"` with `aria-live="polite"` for live metric updates.

### Keyboard Nav Order
Tab order: skip-to-content → Base cube logo (home) → primary nav (Chain, Products, Developers, Solutions, Community) → utilities (Build, Wallet) → hero CTAs → editorial body content → footer columns.

### Screen Reader Hints
- Base cube logo: `aria-label="Base home"`.
- Onchain metric values: `aria-label="$3.4 billion total value locked"` for full unit context.
- Decorative cube/chain visualizations: `aria-hidden="true"`.
- Wallet connect button: clear `aria-label="Connect crypto wallet"`.

### Reduced Motion Handling
`@media (prefers-reduced-motion: reduce)` overrides hero text-reveal and scroll-triggered transitions. Documented in §8.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 640px | Hero h1 80→40px (-2px tracking); feature card grid 1-up; nav collapses to hamburger |
| Tablet | 640–1024px | Hero h1 64px (-3.2px tracking); feature card grid 2-up; nav still hamburger |
| Desktop | 1024–1280px | Hero h1 80px (-4px tracking); feature card grid 3-up; horizontal nav appears |
| Wide | > 1280px | Editorial body content caps at 1280px |

### Touch Targets
- Primary CTA at 40px height — meets WCAG 44 with 4px tap-area extension.
- Nav items render with 20px vertical padding for an effective 48px tap area on mobile hamburger.

### Collapsing Strategy
- **Top nav** switches to hamburger below 1024px.
- **Hero text**: maintains aspect ratio; the -4px tracking proportionally reduces with font size.
- **Feature card grid**: 3-up → 2-up → 1-up.
- **Onchain metric strip**: 4-up at desktop, 2-up at tablet, 1-up at mobile.
- **Footer**: 4-column at desktop, accordion-collapsed at mobile.

### Image Behavior
- Base uses minimal photography — most depth is typographic. Where imagery appears (ecosystem logos, partner brands, case-study screenshots), it's served as AVIF + WebP fallback + JPEG floor.

### Container Queries
Used selectively on docs-sidebar layouts.

## 11. Content & Voice

### Tone
**Ecosystem-confident, infrastructural, measured.** The voice reads like a fintech-trained engineer who joined a crypto project — direct, technical, occasionally aspirational without being hype-driven. There is no marketing-jargon, no "moon" language, no "to the moon", no crypto-meme aesthetic. Base talks about specific concerns: L2 scaling, Coinbase-incubated security, builder ecosystems, onchain economic activity. The tone respects readers who actually know what L2 is.

### Microcopy Patterns
- **Buttons**: action-verb + noun, sentence-case. "Build on Base", "Get started", "Connect Wallet", "Bridge assets". Never uppercase. Never "Click here."
- **Eyebrows**: uppercase context cue. "MAINNET", "ECOSYSTEM", "ONCHAIN", "BUILDERS".
- **Error message recipe**: `[What went wrong]. [What to do.]` — direct and technical. "Couldn't connect to wallet. Make sure your wallet is unlocked and try again."
- **Success confirmations**: terse and infrastructural. "Transaction submitted." "Wallet connected." "Bridge in progress." No exclamation marks.
- **Form labels**: capitalized noun phrases. "Email", "Wallet address", "Project name".

### Empty States
- **No transactions**: "No onchain activity yet. Start by connecting your wallet."
- **No projects**: "No projects yet. Build your first one to get started."
- **Wallet not connected**: "Connect your wallet to continue."

### CTA Verb Conventions
- **Build on Base** — primary verb on builder/developer CTAs (the brand's signature action-verb)
- **Get started** — alternative primary on landing pages
- **Connect Wallet** — for wallet-connect actions (always capitalized as proper noun)
- **Bridge assets** — for cross-chain bridge CTAs
- **Read the docs** — for documentation
- **Sign in** — for returning users (never "Login")

## 12. Dark Mode & Theming

Base has **no global user-facing dark/light toggle**. The site is light-by-default. Dark sections appear as scoped contextual surfaces — rare; certain product launches or specific ecosystem callouts. The token swap is local:

- `bg`: `#ffffff` → `#000000`
- `text`: `#000000` → `#ffffff`
- `text-body`: `#1a1a1a` → `#a8a8a8`
- `border`: `#e0e0e0` → `#333333`
- `surface`: `#f5f5f5` → `#1a1a1a`
- `brand` and `on-brand` stay unchanged: Base electric-blue CTAs render identically on both grounds.

When dark sections appear, they're sandwiched between light editorial bands or used for specific scoped contexts. The site never inverts globally.

## 13. Lineage & Influences

Base's digital surface inherits directly from Coinbase: shared typography (coinbaseSans + coinbaseDisplay + coinbaseMono), shared neutral discipline (paper-white canvas, pure-black ink), shared confident chromatic restraint. Where Coinbase uses brand-blue scarcely, Base sharpens that blue to pure RGB `#0000ff` — the most committed brand voltage in L2 ecosystems.

The aggressive -4px negative tracking on display sizes is the brand's most distinctive typographic choice — magazine-cover compression that signals confidence-without-volume. The brand voice is ecosystem-confident, building "a global economy" — measured, infrastructural, less hype-driven than typical L2 marketing.

What it rejects: crypto-meme aesthetic, neon gradients, "moon" language, decorative imagery competing with the typographic restraint, anything that feels like Web3 hype rather than infrastructure.

**Named influences:**
- Coinbase — direct typographic inheritance, neutral discipline, chromatic restraint (https://www.coinbase.com)
- Stripe — single-color brand voltage discipline (https://stripe.com)
- Ethereum.org — L1/L2 ecosystem messaging vocabulary (https://ethereum.org)
- Linear / Vercel — dev-tools editorial confidence applied to crypto (https://linear.app)
- Optimism — L2 brand vocabulary, single-saturated-color voltage (https://www.optimism.io)

## 14. Do's and Don'ts

### Do
- Use paper-white `#ffffff` as canvas — Coinbase-inherited neutral discipline.
- Reserve Base electric blue `#0000ff` for primary CTAs, the cube logo, the chain-product highlight, link colors, focus rings — used scarcely.
- Apply aggressive -4px negative tracking on the homepage hero display headline — the brand's most distinctive typographic choice.
- Use coinbaseSans at weight 400 for display sizes — never bold.
- Use coinbaseDisplay for body, nav, CTA labels — Coinbase-inherited body face.
- Use sentence-case CTAs ("Build on Base", "Connect Wallet", "Get started").
- Set primary CTAs at 8px corners; feature cards at 12px.
- Use border-color elevation on cards (default `#e0e0e0` → hover `#0000ff`).
- Use rare blue-tinted promotional bands for chain-product launches and special moments.
- Place the Base cube logo top-left of every nav in Base electric-blue — non-negotiable.

### Don't
- Don't use crypto-meme aesthetics, neon gradients, or "moon" language.
- Don't introduce a saturated brand color other than Base electric blue and scoped accents (cream, yellow, pink — all rare).
- Don't bold display copy. coinbaseSans at 400 with -4px tracking is the editorial-confidence voice.
- Don't use uppercase CTA labels. Sentence-case is the friendly-developer voice.
- Don't use a softer blue. Base uses pure RGB `#0000ff` ultramarine — sharper than Coinbase's softer brand blue.
- Don't add ornamental gradients. The site is paper-white + pure-black + Base-blue.
- Don't translate "Build on Base" to "Develop on Base" — the brand verb is "Build".
- Don't use "Login" — Base says "Sign in" or "Connect Wallet".
- Don't compress the 96px section rhythm.
- Don't add italic or decorative type. coinbaseSans and coinbaseDisplay are always upright.
- Don't use Inter as body. coinbaseDisplay is the brand body face.

## 15. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / Brand / Links: `#0000ff` (Base Electric Blue)
- Background: `#ffffff` (Paper White)
- Headings: `#000000` (Pure Black)
- Body text: `#1a1a1a`
- Surface: `#f5f5f5`
- Cream surface: `#f5f5f0`
- Border: `#e0e0e0` (Hairline)
- CTA hover: `#0000cc`
- Brand soft (badges): `#e6e6ff`
- Focus ring: `#0000ff` 2px

### Example Component Prompts
- "Create a Base hero band on paper-white `#ffffff` canvas, 720px tall on desktop. The headline 'A global economy, built by all of us' renders in coinbaseSans 80px weight 400 with **-4px aggressive negative tracking** in pure black `#000000`, line-height 0.95 (very tight). Words stagger-fade-in over 600ms on first paint. Below the headline, two side-by-side CTAs: a Base electric-blue `#0000ff` 'Build on Base' button (coinbaseDisplay 14/500 sentence-case, 10×20 padding, 40px tall, 8px corners, white text) and a transparent outline 'Connect Wallet' button (1px solid black border, black text, same dimensions)."
- "Design a Base feature card on paper-white `#ffffff` canvas: 12px radius, 1px solid `#e0e0e0` border, 32px padding, default `rgba(0,0,0,0.04) 0 2px 8px` shadow. Title in coinbaseSans 36/400 with -1.8px tracking pure black, 16px gap, body copy in coinbaseDisplay 16/400 `#1a1a1a`, 24px gap, and a 'Read more →' text button in coinbaseDisplay 14/500 Base blue with arrow indicator sliding in on hover. On card hover: border-color shifts from `#e0e0e0` to `#0000ff` over 200ms; shadow intensifies to `rgba(0,0,0,0.08) 0 4px 12px`."
- "Build a Base onchain metric cell: transparent background, 24px vertical padding, value in coinbaseSans 64px weight 400 with -3.2px tracking pure black ('$3.4B'), label below in coinbaseDisplay 12/500 with 0.6px uppercase tracking muted ('TVL'). Group four metric cells in a 4-up row at desktop on a `#fafafa` near-white panel."
- "Create a Base outline button: transparent background, 1px solid `#000000` black border, black text in coinbaseDisplay 14/500 sentence-case ('Connect Wallet'), 9×19 padding (compensating for the 1px border), 40px tall, 8px corners. Hover: background fills to `rgba(0,0,0,0.04)` over 150ms; no transform."
- "Build a Base top nav: 64px tall on `rgba(255, 255, 255, 0.85)` translucent white with backdrop-filter blur 16px, sticky. Base cube logo top-left in `#0000ff` Base electric-blue at 32px height (minimalist square/cube mark + 'base' wordmark). Horizontal menu (Chain / Products / Developers / Solutions / Community) center in coinbaseDisplay 14/400 black. Right side: 'Build' (text/ghost button) and 'Wallet' (Base blue primary CTA, 8px corners, 40px tall). On scroll, backdrop blur intensifies and 1px solid `#e0e0e0` border-bottom appears."
- "Design a Base pre-footer CTA band: Base electric-blue `#0000ff` background, centered display headline 'Build on Base.' in coinbaseSans 48/400 with -2.4px tracking white, 96px vertical padding. Single white-on-blue primary 'Get started' CTA centered below: white background, blue text in coinbaseDisplay 14/500, 10×20 padding, 40px tall, 8px corners. On hover, the white CTA's background tints slightly grey."

### Iteration Guide
1. Focus on ONE component at a time. Reference its YAML key (`button-primary`, `feature-card`).
2. Variants live as separate entries inside `components:`.
3. CTAs default to 8px corners. Cards 12px. Photo cards 16px. Use the explicit ladder.
4. Use color tokens (`brand`, `text`, `surface`) — never inline hex on multiple components.
5. Hover states on cards shift border-color from grey to Base blue + shadow intensification.
6. coinbaseSans at weight 400 for display (with aggressive negative tracking), coinbaseDisplay 400 for body, 500 for CTAs/titles.
7. Base electric-blue stays scarce — primary CTAs, cube logo, chain-product, links, focus rings only.
8. Use the explicit spacing ladder (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128). Section padding 96px; hero 128px.
9. Aggressive -4px display tracking is the brand's most distinctive choice — apply to every display-mega headline.
10. Brand voice: infrastructural, ecosystem-confident, measured. Reject crypto-meme aesthetics.
