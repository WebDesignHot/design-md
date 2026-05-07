---
name: Hulu
tagline: Near-black canvas anchored on Hulu Green `#1ce783` with Graphik sans — the bright, cable-meets-streaming UI.
updated_at: 2026-05-04T14:57:35+12:00
published_at: 2026-05-04T14:57:35+12:00
author: webdesignhot
source_url: https://www.hulu.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [media, marketplace]
tags: [dark, neon, sans, dense, cable, marketplace]
preview_swatch: ['#0b0c0f', '#1ce783', '#ffffff']
related: [disney-plus, netflix, prime-video]
description: 'Hulu pairs a near-black `#0b0c0f` canvas with one absolutely unmistakable voltage: Hulu Green `#1ce783` — the highest-saturation neon green in mainstream streaming. The wordmark is an arc of that green, and every primary CTA, focus ring, watched-progress bar, and "ON HULU" tag carries the same hue. Hulu''s positioning is cable-network-meets-streaming: it bundles live-TV, on-demand SVOD, and on-demand-with-ads in a single product, and the UI is dense enough to surface all three. Type is Graphik (Klim Type Foundry, used by Bloomberg, NYT, MIT) at 600–700 weight with modest tracking, body in Graphik at 400. Geometry is moderately rounded (8px buttons), and the brand voice is younger, brighter, more cable-channel than the prestige peers. After the 2024 Disney rebrand integration, Hulu retained its green/dark identity inside the Disney+ "with Hulu" bundle UX.'

colors:
  bg: '#0b0c0f'                    # canvas — Hulu near-black, very close to Max
  bg-deep: '#000000'                # video player surface
  surface: '#1a1d23'                # secondary panel
  surface-strong: '#262a31'         # input fill, hover
  surface-soft: '#13161b'            # alt row band
  surface-card: '#1a1d23'            # poster default
  surface-overlay: 'rgba(11,12,15,0.85)'
  text: '#ffffff'                    # ink
  text-strong: '#ffffff'
  text-body: '#e6e8ec'                # secondary text
  text-muted: '#a0a4ab'                # metadata
  text-soft: '#6a6f78'                  # disabled
  text-disabled: '#4a4f57'
  brand: '#1ce783'                    # Hulu Green — the unmistakable neon voltage
  brand-hover: '#3eee9c'              # hover lift
  brand-active: '#0fc66c'              # press deep
  brand-deep: '#089456'                # gradient terminus
  brand-arc: '#1ce783'                 # the wordmark arc colour matches brand
  on-brand: '#0b0c0f'                   # Hulu green is too bright for white text — use near-black
  accent-purple: '#9d6cff'              # secondary purple, used on live-TV-related surfaces
  accent-orange: '#ff7a00'                # bundle-promo orange
  accent-blue: '#0089ec'                  # Disney+ bundle indicator (post 2024 integration)
  border: '#2a2e36'                       # default 1px hairline
  border-soft: '#1f2229'                  # divider
  border-strong: '#1ce783'                # focused input
  shadow-card: 'rgba(0,0,0,0.7)'
  shadow-billboard: 'rgba(0,0,0,0.85)'
  shadow-glow-green: 'rgba(28,231,131,0.25)'   # signature green glow on focus
  success: '#1ce783'                       # success matches brand
  warning: '#ff9500'
  danger: '#ff3b30'
  info: '#0089ec'
  progress-watched: '#1ce783'              # green progress
  progress-rail: '#3a3f48'
  scrim-bottom: 'linear-gradient(0deg, #0b0c0f 0%, transparent 100%)'
  live-tv-red: '#ff3b30'                    # live-now indicator pulse
  ads-tier: '#a0a4ab'                       # "with ads" tier label muted

typography:
  display:
    family: '"Graphik", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700, 800]
    opentype-features: ['ss01', 'tnum']
  body:
    family: '"Graphik", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400]
  scale:
    billboard-hero:    { size: 60, weight: 800, lineHeight: 1.05, tracking: '-0.02em', family: display, notes: 'Text fallback when SVG unavailable' }
    display-xl:        { size: 44, weight: 700, lineHeight: 1.1,  tracking: '-0.015em',family: display }
    display-lg:        { size: 32, weight: 700, lineHeight: 1.15, tracking: '-0.01em', family: display }
    display-md:        { size: 24, weight: 700, lineHeight: 1.2,  tracking: '0',       family: display }
    display-sm:        { size: 20, weight: 600, lineHeight: 1.25, tracking: '0',       family: display }
    section-title:     { size: 18, weight: 700, lineHeight: 1.3,  tracking: '0',       family: display }
    row-title:         { size: 16, weight: 700, lineHeight: 1.2,  tracking: '0',       family: display }
    body-lg:           { size: 18, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    body-md:           { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    body-sm:           { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',       family: body }
    button-lg:         { size: 16, weight: 600, lineHeight: 1.0,  tracking: '0.01em',  family: display }
    button-md:         { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0.01em',  family: body }
    caption:           { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body }
    metadata:          { size: 14, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, opentype: ['tnum'] }
    badge-rating:      { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.05em',  family: body, transform: uppercase }
    nav-link:          { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0.01em',  family: body }
    legal:             { size: 12, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    micro-label:       { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.08em',  family: body, transform: uppercase, notes: '"ON HULU", "LIVE NOW"' }
    live-time:         { size: 13, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'], notes: 'Live-TV time chip' }

radius:
  micro: 0
  sm: 4
  md: 8           # primary CTA
  lg: 12          # cards
  xl: 16
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

layout:
  page-width: 1920
  content-max: 1440
  header-height: 64
  row-gap: 36
  poster-aspect: '16:9'         # Hulu defaults to landscape (cable-channel inheritance)
  poster-aspect-portrait: '2:3'
  billboard-aspect: '16:9'

components:
  button-primary:
    bg: '#1ce783'
    color: '#0b0c0f'
    radius: 8
    padding: '12px 24px'
    height: 44
    font: button-lg
    use: 'Watch Now, Sign Up, Start Your Free Trial — primary green CTA. Note: text is near-black, not white.'
  button-primary-hover:
    bg: '#3eee9c'
    color: '#0b0c0f'
    radius: 8
    use: 'Hover lift.'
  button-primary-active:
    bg: '#0fc66c'
    color: '#0b0c0f'
    radius: 8
    use: 'Press state.'
  button-large-hero:
    bg: '#1ce783'
    color: '#0b0c0f'
    radius: 8
    padding: '14px 32px'
    height: 52
    use: 'Billboard hero "Watch Now".'
  button-glass:
    bg: 'rgba(255,255,255,0.15)'
    color: '#ffffff'
    radius: 8
    border: '1px solid rgba(255,255,255,0.25)'
    use: '"More Info" / "Trailer" sibling on billboard.'
  button-white:
    bg: '#ffffff'
    color: '#0b0c0f'
    radius: 8
    use: 'Acquisition page Choose Your Plan over rich coloured hero.'
  button-ghost:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid rgba(255,255,255,0.3)'
    radius: 8
    use: 'Modal cancel, Skip Intro.'
  poster-card-landscape:
    bg: '#1a1d23'
    color: '#ffffff'
    radius: 8
    aspect: '16:9'
    use: 'Default Hulu tile — landscape thumbnail.'
  poster-card-portrait:
    bg: '#1a1d23'
    color: '#ffffff'
    radius: 8
    aspect: '2:3'
    use: 'Movie / Originals row alt tile.'
  poster-card-hover:
    bg: '#1a1d23'
    color: '#ffffff'
    radius: 8
    transform: 'scale(1.04)'
    shadow: '0 8px 24px rgba(0,0,0,0.7), 0 0 0 2px rgba(28,231,131,0.25)'
    use: 'Subtle scale + signature green glow ring.'
  preview-popup:
    bg: '#1a1d23'
    color: '#ffffff'
    radius: 12
    width: 380
    use: 'Click-to-expand preview with autoplay clip + tier badge + CTAs.'
  billboard-hero:
    bg: 'image(billboard-still) cover, #000'
    color: '#ffffff'
    use: 'Full-bleed 16:9 still + bottom canvas gradient + SVG title-card.'
  row-carousel:
    bg: '#0b0c0f'
    color: '#ffffff'
    use: 'Horizontal scroller with chevron arrows.'
  badge-on-hulu:
    bg: '#1ce783'
    color: '#0b0c0f'
    radius: 4
    padding: '3px 8px'
    transform: uppercase
    weight: 700
    use: '"ON HULU" green tag — denotes Hulu-original or exclusive.'
  badge-rating:
    bg: 'rgba(255,255,255,0.15)'
    color: '#ffffff'
    radius: 4
    padding: '2px 6px'
    use: '"TV-MA", "R" maturity chip.'
  badge-live:
    bg: '#ff3b30'
    color: '#ffffff'
    radius: 4
    padding: '2px 6px'
    transform: uppercase
    weight: 700
    use: '"LIVE NOW" red pulse-animated tag for live-TV channels.'
  badge-new:
    bg: 'transparent'
    color: '#1ce783'
    border: '1px solid #1ce783'
    radius: 4
    use: '"NEW EPISODE" outlined green tag.'
  channel-logo-tile:
    bg: '#1a1d23'
    color: '#ffffff'
    radius: 8
    aspect: 'square'
    use: 'Live-TV channel logo tile (NBC, ABC, FOX, ESPN, etc) on the live-TV grid.'
  progress-bar:
    bg: '#3a3f48'
    fill: '#1ce783'
    radius: 9999
    height: 3
    use: 'Continue-watching pill-rounded green progress.'
  input-text:
    bg: '#1a1d23'
    color: '#ffffff'
    radius: 8
    border: '1px solid #2a2e36'
    height: 44
    padding: '12px 16px'
    use: 'Sign-in field.'
  input-focused:
    bg: '#1a1d23'
    color: '#ffffff'
    border: '1px solid #1ce783'
    use: 'Brand-green focus.'
  nav-bar:
    bg: '#0b0c0f'
    color: '#ffffff'
    height: 64
    border-bottom: '1px solid #2a2e36'
    use: 'Always-solid nav (Hulu keeps chrome consistent).'
  modal-detail:
    bg: '#1a1d23'
    color: '#ffffff'
    radius: 12
    use: 'Title-detail modal with hero still + tier badge + episodes + tier comparison.'
  player-controls:
    bg: 'linear-gradient(0deg, rgba(0,0,0,0.7), transparent)'
    color: '#ffffff'
    use: 'Bottom video toolbar — green scrubber fill.'
  live-tv-grid:
    bg: '#0b0c0f'
    color: '#ffffff'
    use: 'Live-TV programming grid — channel logo + show + time chip layout.'
  bundle-banner:
    bg: 'linear-gradient(90deg, #1ce783 0%, #0089ec 100%)'
    color: '#0b0c0f'
    use: 'Disney+/Hulu/ESPN+ bundle promo banner — green-to-blue gradient.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 120
  duration-standard: 240
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: hover scale opacity-only, billboard auto-rotation halts, live-now pulse animation halts.'

breakpoints:
  mobile: 600
  tablet: 1024
  desktop: 1280
  wide: 1920

shadows:
  none: 'none'
  poster-rest: 'none'
  poster-hover: '0 8px 24px rgba(0,0,0,0.7), 0 0 0 2px rgba(28,231,131,0.25)'
  modal: '0 32px 64px rgba(0,0,0,0.85)'
  glow-green: '0 0 24px rgba(28,231,131,0.4)'
  ring: '0 0 0 2px #1ce783'

accessibility:
  contrast-text-on-bg: 19.2
  contrast-text-on-brand: 1.4               # white on green fails — Hulu uses near-black on green
  contrast-darktext-on-brand: 13.4          # #0b0c0f on #1ce783 — AAA
  contrast-muted-on-bg: 6.6
  focus-ring: '2px solid #1ce783 with 3px offset'
  reduced-motion-honored: true
  caption-track: 'always available, customisable'
  audio-description: 'AD on Hulu Originals'

dark-mode: native
---

## 1. Visual Theme & Atmosphere

Hulu sits at a unique intersection: it's a streamer (SVOD on-demand), a cable-network alternative (Hulu + Live TV), and a marketplace (with-ads, no-ads, channel add-ons). The UI has to support all three, and it does so by anchoring on a near-black canvas (`#0b0c0f`) and a single, unmistakable signature voltage: Hulu Green `#1ce783` — the highest-saturation green in mainstream streaming.

The Hulu wordmark is itself an arc of that green; every primary CTA, focus ring, watched-progress bar, "ON HULU" tag, and originals badge carries the same hue. The choice of green is critical to Hulu's identity — it inherits from late-90s cable-channel branding (think Comedy Central's neon, MTV's saturated colour) but updates it with modern streaming-UI restraint. The result: Hulu reads as cable-channel-on-the-internet, where peers (Netflix, Max, Disney+, Apple TV+) read as cinema-on-the-internet.

The canvas is `#0b0c0f` — almost identical to Max's `#0b0c0f` but warmer because of the green-arc voltage above it. The page rhythm is denser than Max's editorial spread and lighter than Netflix's content-wall — a middle density that fits the cable-channel-meets-streaming positioning. Above the fold typically renders billboard + 4 carousel rows + a Live TV strip (when subscribed).

Type is Graphik, the Klim Type Foundry sans used by Bloomberg, NYT, MIT, and many editorial publishers. Display runs 700–800 weight at 32–60px with `-0.015em` tracking; body is Graphik 400 at 14–18px. Where Sharp Grotesk (Max) feels prestige-cool and Inspire (Disney+) feels family-warm, Graphik feels editorial-modern — neutral, well-engineered, contemporary.

The interaction signature is the *green glow ring* on hover — `0 0 0 2px rgba(28,231,131,0.25)` + `0 8px 24px rgba(0,0,0,0.7)`. It's a softer Disney+ / Apple TV+ analogue, but the specific green hue is unmistakably Hulu. Hover scale is 1.04× (between Max's 1.05× and Apple TV+'s 1.03×).

The default tile is **landscape 16:9** (cable-channel inheritance, like Apple TV+ and Prime Video), not portrait 2:3 (Netflix/Max/Disney+). Portrait is reserved for movies and originals rows.

Critical to Hulu's UI is the **tier-aware** layout: every detail modal surfaces "Watch with ads", "No ads", "Channel add-on" pricing tiers; the home page interleaves SVOD content with live-TV programming-now strips when the user has Live TV; and the bundle banners promote Disney+/Hulu/ESPN+ pricing.

After the 2024 Disney integration, Hulu content also surfaces inside the Disney+ "with Hulu" bundle UX, but the standalone Hulu surface retains its green/dark identity unchanged.

**Key Characteristics:**
- Near-black `#0b0c0f` canvas + signature Hulu Green `#1ce783` neon voltage.
- Wordmark arc is brand-green — the most brand-coloured wordmark of the streaming peers.
- Brand text on green CTAs is near-black `#0b0c0f`, not white (contrast requirement).
- Graphik display sans (Klim Type Foundry) at 700–800 weight, modest tracking.
- Default tile is landscape 16:9 with title overlay (cable-channel heritage).
- Tier-aware layout: ads / no-ads / channel-add-on pricing surfaced in detail modals.
- Live-TV grid integration when subscriber has Hulu + Live TV — channel-logo + time-chip layout.
- LIVE NOW red pulse-animated tag for live-channels.
- Green-glow hover ring on poster cards (signature).
- Pill-rounded watched-progress bar in green.
- Disney+/Hulu/ESPN+ bundle gradient banner (green-to-blue).
- Dark-mode-only.

## 2. Color Palette & Roles

### Primary
- **Canvas Near-Black** (`#0b0c0f`): Defining ground, slightly warmer than pure black due to the green voltage above it.
- **Pure White** (`#ffffff`): Display, primary text.
- **Hulu Green** (`#1ce783`): The defining brand voltage. CTA, wordmark arc, focus, progress, "ON HULU" tag.

### Brand & Dark
- **Green Hover** (`#3eee9c`): Hover lift on green CTA.
- **Green Active** (`#0fc66c`): Press state.
- **Green Deep** (`#089456`): Gradient terminus.
- **Brand Arc** (`#1ce783`): The wordmark arc — same as primary green.

### Accent
- **Purple** (`#9d6cff`): Secondary purple for live-TV-related surfaces, sport sub-content.
- **Orange** (`#ff7a00`): Bundle-promo accent.
- **Blue** (`#0089ec`): Disney+ bundle indicator (post 2024 integration) — matches Disney+ brand exactly.
- **Live-TV Red** (`#ff3b30`): "LIVE NOW" pulse-animated indicator.

### Interactive
- **CTA Green** (`#1ce783`): Primary action with near-black `#0b0c0f` text — **never white**.
- **Glass White** (`rgba(255,255,255,0.15)` + `rgba(255,255,255,0.25)` 1px border): Translucent secondary on billboard.
- **Outline Grey** (`rgba(255,255,255,0.3)` border on transparent): Ghost.

### Neutral Scale
- **Display White** (`#ffffff`): Headlines.
- **Body Light** (`#e6e8ec`): Secondary text.
- **Muted** (`#a0a4ab`): Metadata, "with ads" tier label.
- **Soft** (`#6a6f78`): Disabled.
- **Disabled** (`#4a4f57`): Greyed-out menu.
- **Mid Grey** (`#3a3f48`): Progress rail.

### Surface & Borders
- **Surface Strong** (`#262a31`): Hovered control, input.
- **Surface Default** (`#1a1d23`): Card, modal ground.
- **Surface Soft** (`#13161b`): Alt-row band.
- **Border Default** (`#2a2e36`): Hairline.
- **Border Soft** (`#1f2229`): Subtler divider.
- **Border Strong** (`#1ce783`): Focused input — matches brand.

### Shadow Colors
- **Card Shadow** (`rgba(0,0,0,0.7)`): Hover lift.
- **Modal Shadow** (`rgba(0,0,0,0.85)`): Detail modal.
- **Glow Green** (`rgba(28,231,131,0.25)`): Signature green hover ring.

### Semantic
- **Success** (`#1ce783`): Matches brand — subscription confirmed.
- **Warning** (`#ff9500`): Buffering.
- **Danger** (`#ff3b30`): Form error / matches LIVE-NOW red.
- **Info** (`#0089ec`): Disney+ bundle indicator.

## 3. Typography Rules

### Font Family
- **Primary**: `"Graphik"` — Klim Type Foundry's modern grotesk sans. Editorial, contemporary, well-engineered. Weights 400, 500, 600, 700, 800.
- **Body**: Graphik (same family — no separate text variant).
- **Mono**: SF Mono / Menlo (developer surfaces).
- **Fallback**: `"Helvetica Neue", Helvetica, Arial`.
- **OpenType Features**: `ss01` for stylistic alternates; `tnum` for metadata, live-TV time chips.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Billboard Hero (text) | Graphik | 60px | 800 | 1.05 | -0.02em | ss01 | Text fallback; SVG title-card primary |
| Display XL | Graphik | 44px | 700 | 1.1 | -0.015em | ss01 | Detail modal hero |
| Display LG | Graphik | 32px | 700 | 1.15 | -0.01em | ss01 | Marketing landing |
| Display MD | Graphik | 24px | 700 | 1.2 | 0 | ss01 | Sub-header, season label |
| Display SM | Graphik | 20px | 600 | 1.25 | 0 | -- | Episode title |
| Section Title | Graphik | 18px | 700 | 1.3 | 0 | -- | "Continue Watching", "Top Picks" |
| Row Title | Graphik | 16px | 700 | 1.2 | 0 | -- | Carousel row |
| Body LG | Graphik | 18px | 400 | 1.5 | 0 | -- | Modal synopsis |
| Body MD | Graphik | 16px | 400 | 1.5 | 0 | -- | Account, settings |
| Body SM | Graphik | 14px | 400 | 1.43 | 0 | -- | Episode descriptions |
| Button LG | Graphik | 16px | 600 | 1.0 | 0.01em | -- | Primary CTA |
| Button MD | Graphik | 14px | 600 | 1.0 | 0.01em | -- | Modal action |
| Caption | Graphik | 13px | 400 | 1.4 | 0 | -- | Disclosures |
| Metadata | Graphik | 14px | 400 | 1.3 | 0 | tnum | "2024 · S2 · 8 Eps · TV-MA" |
| Badge Rating | Graphik | 11px | 700 | 1.0 | 0.05em | -- | "TV-MA", uppercase |
| Nav Link | Graphik | 14px | 500 | 1.0 | 0.01em | -- | Top nav |
| Legal | Graphik | 12px | 400 | 1.5 | 0 | -- | Footer |
| Micro Label | Graphik | 11px | 700 | 1.0 | 0.08em | -- | "ON HULU", "LIVE NOW", uppercase |
| Live Time | Graphik | 13px | 700 | 1.0 | 0 | tnum | "8:30 PM" live-TV time chip |

### Principles
- **Graphik reads modern-editorial.** Where Sharp Grotesk is prestige-cool, Inspire is family-warm, and Ember is utility-clear, Graphik is contemporary-neutral — the brand voice is "informed and modern, not magical or premium".
- **Modest tracking.** Display caps at `-0.02em`. Graphik resists Stripe-grade tightness — the brand stays approachable.
- **800 reserved for billboard text fallback.** Most display is 700; 800 only when the SVG title-card is missing.
- **Tabular numerals critical.** Live-TV time chips ("8:30 PM"), episode runtimes, ratings all use `tnum` because the cable-channel UX requires column alignment.
- **Uppercase reserved for badges and tags.** "ON HULU", "LIVE NOW", maturity ratings.

## 4. Component Stylings

### Buttons

**Primary CTA (Green)**
- Background: `#1ce783`. **Text: `#0b0c0f`** (near-black, *not white* — Hulu Green at 1.4:1 contrast with white fails AA, so text must be dark). Radius: `8px`. Padding: `12px 24px`. Height: `44px`. Font: Graphik 16 / 600.
- Hover: `#3eee9c`, 120ms.
- Active: `#0fc66c`.
- Use: "Watch Now", "Sign Up", "Start Your Free Trial".

**Hero Primary**
- Padding: `14px 32px`. Height: `52px`.
- Use: Billboard "Watch Now".

**Glass Secondary**
- Background: `rgba(255,255,255,0.15)`. Border: `1px solid rgba(255,255,255,0.25)`. Color: `#ffffff`. Radius: `8px`.
- Use: "More Info" / "Trailer" sibling on billboard.

**White CTA**
- Background: `#ffffff`. Color: `#0b0c0f`. Radius: `8px`.
- Use: Acquisition page Choose Your Plan over rich coloured hero.

**Ghost / Outline**
- Background: `transparent`. Border: `1px solid rgba(255,255,255,0.3)`. Color: `#ffffff`. Radius: `8px`.
- Use: Modal cancel, Skip Intro.

### Cards & Tiles

**Landscape Tile (Default)**
- Background: `#1a1d23`. Aspect: 16:9. Radius: `8px`.
- Title: SVG title-card overlay anchored bottom-left at 7% inset.
- Hover: 1.04× scale + `0 8px 24px rgba(0,0,0,0.7)` shadow + `0 0 0 2px rgba(28,231,131,0.25)` green glow ring (signature). 240ms ease-standard.

**Portrait Tile (Movies/Originals)**
- Background: `#1a1d23`. Aspect: 2:3. Radius: `8px`.
- Hover: same as landscape.

**Preview Popup**
- Background: `#1a1d23`. Radius: `12px`. Width: 380px.
- Trigger: click-to-expand (or hover-with-delay on browse-grid pages).
- Content: 16:9 autoplay clip + ON HULU tag if applicable + tier badge + maturity + 3-line synopsis + Watch / Watchlist / More.

**Billboard Hero**
- Aspect: 16:9 full-bleed. Bottom inset: `#0b0c0f` over 200px.
- Title: SVG title-card at 320px wide bottom-left at 5% inset.
- ON HULU tag above title when applicable.
- CTAs: Green Watch + Glass More Info.
- Auto-rotate: 14s dwell, 1s cross-dissolve.

**Detail Modal**
- Background: `#1a1d23`. Radius: `12px`. Width: clamp(900px, 80vw, 1400px).
- Header: 16:9 hero still.
- ON HULU tag + maturity + tier ("With Ads" / "No Ads" / "Channel Add-on").
- Synopsis: 18px / 400 / 1.5.
- Episode tabs (TV) / Channel comparison strip (live-TV).
- Tier comparison section: side-by-side pricing for Hulu (with-ads) / Hulu (no-ads) / Hulu + Live TV.

**Channel Logo Tile**
- Background: `#1a1d23`. Aspect: square. Radius: `8px`.
- Use: Live-TV channel grid — NBC, ABC, FOX, ESPN, MSNBC, etc.
- Hover: 1.04× scale + `0 0 0 2px rgba(28,231,131,0.25)` ring.

**Bundle Banner**
- Background: `linear-gradient(90deg, #1ce783 0%, #0089ec 100%)`. Color: `#0b0c0f`.
- Use: "Get Disney+, Hulu, and ESPN+ for $X/mo" — green-to-blue gradient promo banner.

### Badges, Tags

**ON HULU**
- Background: `#1ce783`. Color: `#0b0c0f`. Radius: `4px`. Padding: `3px 8px`. Font: 11px / 700 uppercase, 0.08em tracking.
- Use: Hulu-original or Hulu-exclusive badge.

**LIVE NOW**
- Background: `#ff3b30`. Color: `#ffffff`. Radius: `4px`. Padding: `2px 6px`. Font: 11px / 700 uppercase.
- Animation: 1.5s pulse opacity 0.7 ↔ 1.0.
- Use: Live-TV channel currently broadcasting.

**Maturity Rating**
- Background: `rgba(255,255,255,0.15)`. Color: `#ffffff`. Radius: `4px`. Padding: `2px 6px`.

**NEW EPISODE**
- Background: `transparent`. Color: `#1ce783`. Border: `1px solid #1ce783`. Radius: `4px`.

**Tier Pill**
- Background: `transparent`. Color: `#a0a4ab`. Border: `1px solid #2a2e36`. Radius: `9999px`.
- Use: "With Ads" / "No Ads" / "Channel Add-on" tier indicator.

### Inputs

**Text Input**
- Background: `#1a1d23`. Color: `#ffffff`. Border: `1px solid #2a2e36`. Radius: `8px`. Height: `44px`. Padding: `12px 16px`.
- Focus: Border `#1ce783`.
- Error: Border `#ff3b30` + 13px error text.

### Navigation

**Top Nav (Always Solid)**
- Background: `#0b0c0f`. Height: `64px`. Border-bottom: `1px solid #2a2e36`.
- Logo: green Hulu wordmark with arc.
- Links: Home, TV, Movies, Originals, Live TV, Hubs, Network.
- Note: like Prime Video, Hulu keeps nav always-solid — no transparent-on-billboard.

### Player

**Player Controls**
- Background: `linear-gradient(0deg, rgba(0,0,0,0.7), transparent)`.
- Scrubber: rail `#3a3f48`, fill `#1ce783`, height `4px`, radius `9999px` (pill).
- Playhead: `#1ce783` 14×14 circle, scales to 18×18 on hover.

### Live-TV Grid

**Live-TV Programming Grid**
- Layout: rows of channels (channel-logo column on left, time-chip programming on right).
- Time chips: `#1a1d23` bg with 13px / 700 tabular-num time, current programme highlighted with `#1ce783` fill.
- Header strip: scrollable timeline with 30-min increments.

## 5. Layout Principles

### Spacing System
- Base: 4px. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96.
- Row gap: 36px.
- Section gap: 64–96px.

### Grid & Container
- Page width: 1920px. Content max: 1440px.
- Carousel: 5 landscape tiles per row at desktop, 3 at tablet, 2 at mobile.
- Live-TV grid: 8 channels visible per page at desktop, scrollable timeline.
- Header: 64px.

### Whitespace Philosophy
Hulu balances density and air. Tier-rich UI (with-ads / no-ads / channel-add-on / live-TV) requires more text per tile, so spacing is moderate (less than Apple TV+ / Max, more than Netflix / Prime Video).

### Section Cadence
- Billboard hero
- Continue Watching
- "Top Picks for You"
- Live TV Strip (if subscribed) — horizontal channel-logo row with current programming
- Network Hubs (NBC, ABC, FX, FOX, etc — Hulu's network-portfolio model)
- 3–5 genre rows
- Bundle Banner (Disney+/Hulu/ESPN+ promo)
- Footer

## 6. Shapes & Radius Scale

- **Sharp** (`0px`): Billboard image edges only.
- **Standard** (`4px`): Badges, chips, tier indicators.
- **Comfortable** (`8px`): Buttons, tiles, channel logos, inputs.
- **Relaxed** (`12px`): Detail modal, preview popup.
- **Featured** (`16px`): Larger feature modules.
- **Pill** (`9999px`): Avatars, tier-pills, progress bars.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | Flat | Default tile, page bg, always-solid nav |
| 1 | 1px `#2a2e36` border | Section dividers, focused input |
| 2 | `0 8px 24px rgba(0,0,0,0.7) + 0 0 0 2px rgba(28,231,131,0.25)` | Tile hover (signature green ring) |
| 3 | `0 32px 64px rgba(0,0,0,0.85)` | Detail modal |
| 4 | `0 0 24px rgba(28,231,131,0.4)` | Featured CTA glow |
| 5 | `rgba(0,0,0,0.5)` scrim only | Player chrome |

### Shadow Philosophy
Hulu uses the *green ring* as elevation cue — `rgba(28,231,131,0.25)` at 2px on hover. Hard `rgba(0,0,0,0.7)` drop-shadows handle the lift; the green ring handles the brand identity. Same logic as Disney+ but in green.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Out**: `cubic-bezier(0, 0, 0.2, 1)`.

### Duration Buckets
- **Fast**: 120ms.
- **Standard**: 240ms.
- **Slow**: 400ms.
- **LIVE-NOW pulse**: 1500ms loop.

### Per-Component Recipes
- **Primary CTA hover**: bg `#1ce783 → #3eee9c`, 120ms.
- **Tile hover**: 1.0× → 1.04×, 240ms ease-standard + green glow ring fade-in.
- **LIVE NOW badge**: 1.5s opacity pulse 0.7 ↔ 1.0 ease-in-out — alarm-but-not-aggressive.
- **Billboard auto-rotate**: 14s dwell, 1s cross-dissolve.
- **Modal in**: 320ms ease-standard, scale 0.95 → 1.0 + opacity.

### Page Transitions
Network hub entry uses 240ms cross-fade.

### Reduced Motion
- Tile scale → opacity-only.
- LIVE-NOW pulse → static fully-opaque.
- Billboard rotate → halts.
- Modal in → opacity-only.

## 9. Accessibility & A11y

### Contrast Pairs
- White on `#0b0c0f`: **19.2:1** — AAA.
- Body Light `#e6e8ec` on `#0b0c0f`: **17.4:1** — AAA.
- Muted `#a0a4ab` on `#0b0c0f`: **6.6:1** — AAA at body sizes.
- **White on Hulu Green `#1ce783`: 1.4:1 — FAILS.** Therefore Hulu uses near-black `#0b0c0f` on green: **13.4:1** — AAA.
- Live-TV red `#ff3b30` on `#ffffff`: **3.7:1** — AA large only.

### Focus Indicators
- 2px solid `#1ce783` ring with 3px offset on all controls.

### ARIA Patterns
- Carousels: `role="region" aria-roledescription="carousel"`.
- LIVE NOW badges: `aria-label="Live now: [Show]"`.
- Channel tiles: `aria-label="[Network], currently airing [Show]"`.
- Modal: `role="dialog" aria-modal="true"`, focus trapped.
- Live-TV grid: `role="grid"` with row/col headers.

### Keyboard Navigation
- Tab between rows/channels; arrows within.
- Enter on tile opens modal.
- Space play/pause; F fullscreen; M mute.
- Esc progresses: modal close → player pause → fullscreen exit.

### Screen Reader
- Tile `aria-label` packs title, ON HULU/exclusive flag, year, season, maturity, runtime.
- Channel tile `aria-label` includes network + current programme.

### Caption / AD
- Captions on all titles. Customisable.
- Audio description on Hulu Originals.

### Reduced Motion
Honoured. Especially the LIVE-NOW pulse animation, which can be vestibular-triggering.

## 10. Responsive Behavior

### Breakpoints
| Token | Min | Use |
|-------|-----|-----|
| mobile | 0px | 2 landscape tiles, live-TV grid stacks |
| tablet | 1024px | 3 tiles |
| desktop | 1280px | 5 tiles, 8-channel live-grid |
| wide | 1920px | 5 tiles, content-max 1440 |

### Touch Targets
- 44×44 minimum.

### Collapsing Strategy
- Top nav → hamburger at < 1024px.
- Live-TV grid → vertical stack on mobile.
- Detail modal → full-screen sheet at < 768px.
- Tier comparison → vertical stack on mobile.
- Bundle banner → full-width stacked on mobile.

### Image Behavior
- Landscape tiles: 16:9 srcset 280/560/1120w.
- Channel logos: 1:1 srcset 80/160w.

### Container Queries
Preview popup chooses left/right anchor on row container CQ.

## 11. Content & Voice

### Tone
Hulu voice is **modern-direct-cable-channel**. Less prestige than Max, less family than Disney+, less utility than Prime Video. Acquisition copy reads cable-network-ad-style: "All in one place", "Watch live and on demand". Product copy is brisk and clear.

### Microcopy Patterns
- **Primary CTA**: "Watch Now", "Sign Up", "Start Your Free Trial", "Get the Bundle".
- **Secondary**: "More Info", "Trailer", "Watchlist".
- **Acquisition**: "Stream the best of TV. All in one place." or "TV. Movies. Live Sports."
- **Empty list**: "Add to Watchlist to save titles for later."
- **Error**: "Something went wrong. Please try again."
- **Profile prompt**: "Who's watching?"
- **Cancellation**: "Cancel anytime."
- **Tier prompts**: "With ads" / "No ads, $X/mo more" / "Add Live TV for $X/mo more".

### Empty States
Empty Watchlist: text + suggested-adds row. Empty Continue Watching: hidden.

### CTA Verb Conventions
- "Watch" (in product) > "Stream" > "Sign Up" > "Get the Bundle".
- "Watchlist" not "My List".
- "Live TV" not "Live Stream".
- "On Demand" used explicitly to distinguish from Live.

## 12. Dark Mode & Theming

**Dark-only consumer surface.**

Inside the **Disney+ "with Hulu" bundle UX** (post 2024), Hulu titles surface in the Disney+ host UI — at that point, the Disney+ navy canvas + blue brand voltage takes over, and Hulu's identity becomes a content-source label rather than a UI surface. The standalone Hulu surface retains its green/dark identity unchanged.

A hypothetical light theme would deepen the brand to `#0fc66c` (passes AA on white at 4.5:1) but no public design ships this.

## 13. Lineage & Influences

Hulu's lineage is cable-network-meets-streaming.

**Comedy Central / MTV / late-90s cable.** The neon-green voltage is direct visual lineage from saturated cable-channel branding — Comedy Central's neon, MTV's saturated colour grade, Adult Swim's logo green-blacks. Hulu translates this to streaming.

**Klim Type Foundry / editorial sans.** Graphik's editorial-modern voice is the typographic lineage — same family used by Bloomberg, NYT digital, MIT.

**NBCUniversal / network broadcasting.** Hulu was originally a JV between NBCUniversal, Disney, Fox, and Comcast, and the network-hub layout (NBC, ABC, FX, FOX hubs) inherits directly from broadcast-network programming aggregation.

What Hulu rejects: prestige-monochrome (Max), magical-rounded (Disney+), cinematic-restraint (Apple TV+). The brand is *cable-channel-energetic*.

**Influences:**
- **Comedy Central / MTV / Adult Swim** — neon-cable colour heritage.
- **Klim Type Foundry** — Graphik typeface. https://klim.co.nz/retail-fonts/graphik/
- **NBCUniversal / broadcast networks** — network-hub model.
- **Late-2000s cable-network websites** — programming-grid layout heritage.

## 14. Do's and Don'ts

**Do:**
- Use `#0b0c0f` near-black canvas with `#1ce783` Hulu Green as the only chromatic voltage.
- Use **near-black `#0b0c0f` text on green CTAs** — white on green fails AA.
- Use Graphik 700–800 weight at display, modest `-0.015em` tracking.
- Default tiles to 16:9 landscape (cable-channel inheritance).
- Surface ON HULU green tag on Hulu-original / Hulu-exclusive content.
- Show LIVE NOW red pulse-animated tag on currently-broadcasting live-TV channels.
- Render Live-TV programming grid for subscribers (channel-logo + time-chip layout).
- Use the green-glow hover ring `0 0 0 2px rgba(28,231,131,0.25)` on tile hover.
- Show tier comparison ("With Ads" / "No Ads" / "Channel Add-on") in detail modals.
- Use the green-to-blue Disney+/Hulu/ESPN+ bundle banner gradient.
- Pill-radius the watched-progress bar in green.
- Keep nav always-solid (no transparent-on-billboard state).

**Don't:**
- Don't put white text on Hulu Green CTA — contrast fails. Use near-black.
- Don't use blue as primary CTA — that's Disney+'s territory; Hulu is green.
- Don't use the cable-red `#ff3b30` for anything except LIVE NOW indicator.
- Don't omit tier-aware content — Hulu's UX requires surfacing ads/no-ads/live-TV/channel-add-on options.
- Don't use Sharp Grotesk-grade tight tracking — Graphik holds modest `-0.015em`.
- Don't use 2:3 portrait as default tile — Hulu defaults to 16:9 landscape.
- Don't make the LIVE NOW pulse aggressive — 1.5s gentle opacity loop, not blinking.
- Don't apply prestige-editorial pull-quotes — that's Max territory.
- Don't apply rounded soft geometry like Disney+ — Hulu uses 8px standard radius.
- Don't introduce a light-mode consumer surface — Hulu is dark.

## 15. Agent Prompt Guide

### Quick Color Reference
- Canvas: `#0b0c0f`
- Hulu Green: `#1ce783`
- Green Hover: `#3eee9c`
- White: `#ffffff`
- Brand text on green: `#0b0c0f` (NEVER white)
- Muted: `#a0a4ab`
- Surface: `#1a1d23`
- Border: `#2a2e36`
- Live-TV Red: `#ff3b30`
- Bundle Blue (Disney+): `#0089ec`

### Example Component Prompts
1. "Create a Hulu billboard hero — full-bleed 16:9 still on `#0b0c0f` canvas, bottom 200px gradient, title-card SVG bottom-left at 320px wide, ON HULU green `#1ce783` tag above title with near-black `#0b0c0f` text, primary green Watch Now CTA + glass `rgba(255,255,255,0.15)` More Info sibling, both 8px radius."
2. "Design a Hulu landscape tile — 16:9 `#1a1d23` placeholder, 8px radius, on hover scale to 1.04× over 240ms with `0 8px 24px rgba(0,0,0,0.7)` shadow + `0 0 0 2px rgba(28,231,131,0.25)` signature green glow ring. ON HULU tag top-left if applicable."
3. "Build a Hulu live-TV grid row — channel-logo tile on left (square `#1a1d23`, 8px radius, network logo centered), time-chip programming on right with 13px / 700 / tabular-num time, current programme highlighted in green `#1ce783` fill with near-black text, LIVE NOW red `#ff3b30` pulse-animated tag on the active programme."
4. "Render a Hulu detail modal — `#1a1d23` bg, 12px radius, 16:9 hero still header, ON HULU tag above title, tier comparison strip showing With Ads / No Ads / + Live TV pricing, 18px Graphik / 400 / 1.5 synopsis paragraph, episode list."
5. "Create a Disney+/Hulu/ESPN+ bundle banner — `linear-gradient(90deg, #1ce783 0%, #0089ec 100%)` background, near-black `#0b0c0f` heading text 'Get the bundle. Save up to 25%.', secondary 16px / 400 'Disney+, Hulu, and ESPN+', white CTA `#ffffff/#0b0c0f` 'Get Started' on the right."

### Iteration Guide
1. **Get the green right.** `#1ce783` is the brand — anything more muted reads as Spotify or generic eco-brand.
2. **Dark-text-on-green.** White on Hulu Green fails contrast. Use `#0b0c0f` near-black on green CTAs always.
3. **Add the tier UI.** Hulu without with-ads / no-ads / live-TV tier comparison feels un-Hulu — restore it.
4. **Landscape default.** If tiles are portrait by default, swap to 16:9 — cable-channel inheritance demands it.
5. **Live-TV grid.** If the page has no programming-grid surface, add a Live TV strip — it's core to Hulu's identity.
6. **Cool the red.** `#ff3b30` LIVE NOW must pulse gently (1.5s ease) — aggressive blinking breaks accessibility.
7. **Add the green ring.** Hover state without `rgba(28,231,131,0.25)` 2px ring doesn't read as Hulu.
8. **Bundle gradient.** Promo banners use the `#1ce783 → #0089ec` green-to-blue gradient — distinctive to Hulu/Disney+ bundle.
