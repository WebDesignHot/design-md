---
name: Disney+
tagline: Deep navy gradient streaming hall with custom Inspire display sans and the unmistakable Disney+ wordmark arc.
updated_at: 2026-05-03T21:06:23+12:00
published_at: 2026-05-03T21:06:23+12:00
author: webdesignhot
source_url: https://www.disneyplus.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media, marketplace]
tags: [dark, navy, gradient, sans, family, theatrical, magical]
preview_swatch: ['#0e1735', '#0089ec', '#ffffff']
related: [netflix, hbo-max, apple]
description: 'Disney+ trades on a deep midnight-navy ground (`#0e1735` to `#040714` gradient) that reads like a planetarium ceiling — magical, theatrical, family-safe. The brand blue `#0089ec` arc-curves under the wordmark and anchors the primary CTA. Where Netflix is a darkroom and Max is a prestige editorial spread, Disney+ is a hall of franchise galleries — the unmistakable five-tile "Disney, Pixar, Marvel, Star Wars, National Geographic" hub band sits below the billboard, each tile a video-loop preview of the franchise. The custom Inspire display sans (Disney''s in-house cut, drawn for Disney+ launch) carries display at 700–800 weight with modest tracking. Every interaction is rounded — 8px buttons, 8px cards, soft purple-blue gradient washes — softer than Netflix''s rectilinear grid. Type is moderately tight, body Inspire Light/Regular at 1.5 line-height, and franchise hubs use their own internal palettes when entered.'

colors:
  bg: '#0e1735'                    # canvas — navy gradient origin
  bg-deep: '#040714'                # gradient terminus, video player
  bg-gradient: 'linear-gradient(180deg, #0e1735 0%, #1a2151 50%, #040714 100%)'  # subtle sky-fade
  surface: '#1a2151'                # secondary panel
  surface-strong: '#2a3170'         # input fill, hover surface
  surface-soft: '#0a132a'           # alt row band
  surface-card: 'transparent'       # card defaults transparent on rich gradient
  surface-overlay: 'rgba(14,23,53,0.85)'
  text: '#f9f9f9'                   # ink — slightly off-white display
  text-strong: '#ffffff'
  text-body: '#dcddde'               # secondary text
  text-muted: '#a0a3a8'              # metadata
  text-soft: '#737582'               # disabled, footer
  text-disabled: '#5c5e6b'
  brand: '#0089ec'                   # Disney+ primary blue — wordmark + CTA
  brand-hover: '#19a0ff'              # hover lift
  brand-active: '#006bbd'             # press deep
  brand-deep: '#001f55'               # gradient terminus
  brand-arc: '#0089ec'                # the famous wordmark arc colour
  brand-purple: '#5750b0'              # secondary purple-violet found on franchise hubs
  on-brand: '#ffffff'
  star-yellow: '#f3c032'              # legacy Star+ / accent
  marvel-red: '#ed1d24'                # franchise hub Marvel red
  star-wars-yellow: '#ffe81f'           # Star Wars yellow when in SW hub
  pixar-blue: '#0080ff'                # Pixar branded blue
  natgeo-yellow: '#ffcc00'              # NatGeo yellow
  border: '#2a3170'                    # default 1px hairline
  border-soft: '#1f254a'               # divider
  border-strong: '#0089ec'              # focused input matches brand
  shadow-card: 'rgba(0,0,0,0.6)'
  shadow-billboard: 'rgba(0,0,0,0.85)'
  shadow-glow-blue: 'rgba(0,137,236,0.4)'   # signature blue glow on hover/focus
  success: '#00b89c'
  warning: '#ffa500'
  danger: '#ff3b30'
  info: '#0089ec'
  progress-watched: '#0089ec'
  progress-rail: '#3a3f5e'
  scrim-bottom: 'linear-gradient(0deg, #0e1735 0%, transparent 100%)'

typography:
  display:
    family: '"Inspire", "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [300, 400, 500, 700, 800]
    opentype-features: ['ss01', 'tnum']
  body:
    family: '"Inspire", "Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [300, 400, 500, 700]
  mono:
    family: 'SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400]
  scale:
    billboard-hero:    { size: 64, weight: 800, lineHeight: 1.05, tracking: '-0.02em', family: display, notes: 'Used as text fallback; usually SVG title-card' }
    display-xl:        { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.015em',family: display }
    display-lg:        { size: 36, weight: 700, lineHeight: 1.15, tracking: '-0.01em', family: display }
    display-md:        { size: 28, weight: 700, lineHeight: 1.2,  tracking: '0',       family: display }
    display-sm:        { size: 22, weight: 500, lineHeight: 1.25, tracking: '0',       family: display }
    section-title:     { size: 20, weight: 500, lineHeight: 1.3,  tracking: '0',       family: display }
    row-title:         { size: 18, weight: 500, lineHeight: 1.2,  tracking: '0',       family: display }
    body-lg:           { size: 18, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    body-md:           { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    body-sm:           { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',       family: body }
    button-lg:         { size: 16, weight: 500, lineHeight: 1.0,  tracking: '0.01em',  family: display }
    button-md:         { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0.01em',  family: body }
    caption:           { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body }
    metadata:          { size: 14, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, opentype: ['tnum'] }
    badge-rating:      { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.05em',  family: body, transform: uppercase }
    nav-link:          { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0.01em',  family: body }
    legal:             { size: 12, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    micro-label:       { size: 10, weight: 700, lineHeight: 1.0,  tracking: '0.1em',   family: body, transform: uppercase }
    franchise-tile:    { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.05em',  family: display, transform: uppercase, notes: 'When tile uses text label fallback' }

radius:
  micro: 0
  sm: 4
  md: 8           # primary CTA
  lg: 12          # franchise hub tile
  xl: 16          # detail modal
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120]

layout:
  page-width: 1920
  content-max: 1440
  header-height: 64
  row-gap: 36
  poster-aspect: '2:3'
  billboard-aspect: '16:9'
  franchise-tile-aspect: '16:9'

components:
  button-primary:
    bg: '#0089ec'
    color: '#ffffff'
    radius: 8
    padding: '14px 28px'
    height: 48
    font: button-lg
    use: 'Sign Up Now, Watch, Play — primary blue CTA.'
  button-primary-hover:
    bg: '#19a0ff'
    color: '#ffffff'
    radius: 8
    shadow: '0 0 0 4px rgba(0,137,236,0.3)'
    use: 'Hover lift with subtle blue glow ring.'
  button-primary-active:
    bg: '#006bbd'
    color: '#ffffff'
    radius: 8
    use: 'Press state.'
  button-large-hero:
    bg: '#0089ec'
    color: '#ffffff'
    radius: 8
    padding: '18px 36px'
    height: 56
    use: 'Billboard hero "Play" — paired with secondary More Info.'
  button-glass:
    bg: 'rgba(255,255,255,0.15)'
    color: '#ffffff'
    radius: 8
    border: '1px solid rgba(255,255,255,0.25)'
    backdrop-filter: 'blur(8px)'
    use: '"More Info" sibling on billboard.'
  button-white:
    bg: '#ffffff'
    color: '#0e1735'
    radius: 8
    use: 'Acquisition page "Get Started" on legal sub-brand pages.'
  button-ghost:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #ffffff'
    radius: 8
    use: 'Modal cancel, "Skip Intro".'
  poster-card:
    bg: 'transparent'
    color: '#ffffff'
    radius: 8
    aspect: '2:3'
    use: 'Carousel tile — title-card SVG centered or anchored bottom.'
  poster-card-hover:
    bg: 'transparent'
    color: '#ffffff'
    radius: 8
    transform: 'scale(1.08)'
    shadow: '0 8px 24px rgba(0,0,0,0.6), 0 0 0 2px rgba(0,137,236,0.4)'
    use: 'Subtle scale + blue glow ring — Disney+ signature lift.'
  preview-popup:
    bg: '#1a2151'
    color: '#ffffff'
    radius: 12
    width: 380
    use: 'Click-to-expand preview with autoplay clip + title-card + rating + CTAs.'
  billboard-hero:
    bg: 'image(billboard-still) cover, #040714'
    color: '#ffffff'
    use: 'Full-bleed 16:9 still with bottom navy gradient + SVG title-card overlay.'
  franchise-hub-tile:
    bg: 'transparent (uses video-loop background)'
    color: '#ffffff'
    radius: 12
    aspect: '16:9'
    border: '2px solid transparent'
    use: 'The five iconic franchise tiles — Disney, Pixar, Marvel, Star Wars, National Geographic.'
  franchise-hub-tile-hover:
    transform: 'scale(1.05)'
    border: '2px solid #ffffff'
    shadow: '0 12px 32px rgba(0,0,0,0.6)'
    use: 'Hover state — white border ring + lift.'
  row-carousel:
    bg: 'transparent'
    color: '#ffffff'
    use: 'Horizontal scroller with chevron arrows on hover.'
  badge-disney-original:
    bg: '#0089ec'
    color: '#ffffff'
    radius: 4
    padding: '3px 8px'
    transform: uppercase
    weight: 700
    use: '"DISNEY+ ORIGINAL" blue tag.'
  badge-rating:
    bg: '#3a3f5e'
    color: '#ffffff'
    radius: 4
    padding: '2px 6px'
    use: '"TV-PG", "PG-13" maturity chip.'
  badge-new:
    bg: 'transparent'
    color: '#0089ec'
    border: '1px solid #0089ec'
    radius: 4
    use: '"NEW EPISODE" outlined.'
  progress-bar:
    bg: '#3a3f5e'
    fill: '#0089ec'
    radius: 9999
    height: 4
    use: 'Continue-watching rounded blue progress.'
  input-text:
    bg: '#1a2151'
    color: '#ffffff'
    radius: 8
    border: '2px solid transparent'
    height: 56
    padding: '16px 20px'
    use: 'Sign-in field with floating label.'
  input-focused:
    bg: '#1a2151'
    color: '#ffffff'
    border: '2px solid #0089ec'
    radius: 8
    use: 'Brand-blue ring on focus.'
  nav-bar-transparent:
    bg: 'transparent'
    color: '#ffffff'
    height: 64
    use: 'Top of page.'
  nav-bar-solid:
    bg: '#040714'
    color: '#ffffff'
    height: 64
    use: 'Post-scroll solidified nav.'
  modal-detail:
    bg: '#0e1735'
    color: '#ffffff'
    radius: 16
    use: 'Title-detail modal — 16:9 hero still + franchise badge + season list.'
  player-controls:
    bg: 'linear-gradient(0deg, rgba(4,7,20,0.85), transparent)'
    color: '#ffffff'
    use: 'Bottom video toolbar — blue scrubber.'
  groot-loader:
    bg: 'transparent'
    color: '#0089ec'
    use: 'Loading-spinner — circular spinning Disney+ wordmark animation.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-magical: 'cubic-bezier(0.32, 0.72, 0, 1)'    # signature smooth-springy ease
  duration-fast: 150
  duration-standard: 280
  duration-slow: 500
  duration-poster-expand: 400
  reduced-motion: 'respects prefers-reduced-motion: scale-up reduces to opacity, billboard rotation halts, franchise-tile loops pause.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1920

shadows:
  none: 'none'
  poster-rest: 'none'
  poster-hover: '0 8px 24px rgba(0,0,0,0.6), 0 0 0 2px rgba(0,137,236,0.4)'
  modal: '0 32px 64px rgba(0,0,0,0.85)'
  hub-tile: '0 12px 32px rgba(0,0,0,0.6)'
  glow-blue: '0 0 24px rgba(0,137,236,0.5)'
  ring: '0 0 0 2px #0089ec'

accessibility:
  contrast-text-on-bg: 17.4
  contrast-text-on-brand: 4.5
  contrast-muted-on-bg: 6.2
  focus-ring: '2px solid #0089ec with 4px offset'
  reduced-motion-honored: true
  caption-track: 'always available, customisable'
  audio-description: 'AD on most originals'
  groot-mode: 'kids-mode profile with simplified UI, larger taps, fewer interactions'

dark-mode: native
---

## 1. Visual Theme & Atmosphere

Disney+ is the streaming-hall-of-franchises. The canvas is a deep midnight navy `#0e1735` that gradients to near-black `#040714` at the bottom — a planetarium ceiling rather than a darkroom. Cool, theatrical, magical. The brand blue `#0089ec` is the same hue that arcs under the Disney+ wordmark, and it carries every primary CTA, every focus ring, every progress fill. The combination — navy ground + arc-blue voltage — reads as bedtime-story magical, family-safe, and decidedly *not* prestige-edgy (Max) or content-utility (Netflix).

The defining UI moment is the franchise hub band. Below the billboard hero, five video-loop tiles span the page edge-to-edge: the iconic Disney castle, the Pixar lamp, the Marvel comic-flip, the Star Wars Death Star, the National Geographic globe. Each tile is a 16:9 motion loop in transparent layout — clicking enters that franchise's own internal hub, where the page palette shifts to franchise colours (Marvel red, Star Wars yellow, NatGeo yellow). This branded-hub recursion is unique to Disney+.

Type is the custom Inspire family — Disney's in-house display sans drawn for the 2019 launch, with humanist proportions and slightly rounded terminals that read warmer than geometric grotesks. Display runs 700–800 weight at 36–48px with `-0.015em` tracking; body is 16–18px / 400 / 1.5 — generous, readable, family-friendly.

Where Netflix's geometry is rectilinear (4px buttons, sharp posters) and Max's is moderately rounded (4px CTAs), Disney+ is consistently rounded — 8px buttons, 8px posters, 12px franchise tiles, 16px modals. The added curvature softens the page, makes it feel approachable for kids and parents simultaneously.

The interaction signature is the *blue-glow hover ring*. Every poster, every tile, every focused input gains a `0 0 0 2px rgba(0,137,236,0.4)` blue ring + lift on hover. It's a small touch but unmistakably Disney+ — a subtle "magic" without being kitsch.

**Key Characteristics:**
- Midnight navy gradient `#0e1735 → #040714` — planetarium ceiling, not pure black.
- Brand blue `#0089ec` arc-curve voltage — primary CTA, focus rings, progress, wordmark arc.
- Custom Inspire display sans (Disney in-house, 2019).
- Five franchise hub tiles — Disney, Pixar, Marvel, Star Wars, National Geographic — video-loop animated.
- Franchise-branded sub-pages with palette shifts (Marvel red, SW yellow, NatGeo yellow).
- Consistently rounded geometry — 8px buttons, 8px posters, 12px tiles, 16px modals.
- Signature blue-glow hover ring — `0 0 0 2px rgba(0,137,236,0.4)` + `0 8px 24px rgba(0,0,0,0.6)`.
- 1.08× hover scale (between Netflix's 1.4× and Max's 1.05×) with magical-ease curve.
- "Skip Intro" + GroupWatch + Kids profile — family-first product features.
- Dark-mode-only — Disney+ has no light theme.

## 2. Color Palette & Roles

### Primary
- **Canvas Navy** (`#0e1735`): Defining ground, gradient origin.
- **Canvas Deep** (`#040714`): Gradient terminus, video player surface.
- **Pure White** (`#ffffff`): Display, primary text.
- **Off-white Ink** (`#f9f9f9`): Slightly softened white for body — easier on eyes during long sessions.
- **Disney+ Blue** (`#0089ec`): The defining brand voltage. CTA, wordmark arc, focus, progress.

### Brand & Dark
- **Blue Hover** (`#19a0ff`): Lift on hover.
- **Blue Active** (`#006bbd`): Press state.
- **Blue Deep** (`#001f55`): Gradient terminus on subscribe page.
- **Brand Arc** (`#0089ec`): The wordmark's signature arc — same as primary blue.
- **Brand Purple** (`#5750b0`): Secondary purple-violet on franchise hubs (Disney+ Hotstar legacy).

### Accent
- **Marvel Red** (`#ed1d24`): When user enters Marvel hub, accent shifts to Marvel red.
- **Star Wars Yellow** (`#ffe81f`): When in Star Wars hub.
- **Pixar Blue** (`#0080ff`): When in Pixar hub.
- **NatGeo Yellow** (`#ffcc00`): When in NatGeo hub.
- **Star Yellow** (`#f3c032`): Legacy Star+ accent (international).

### Interactive
- **CTA Blue** (`#0089ec`): Primary action.
- **Glass White** (`rgba(255,255,255,0.15)` + 1px `rgba(255,255,255,0.25)` border + `blur(8px)`): Frost-glass secondary on billboard.
- **Outline White** (`#ffffff` 1px on transparent): Ghost CTA.

### Neutral Scale
- **Display White** (`#ffffff`): Headlines.
- **Off-white** (`#f9f9f9`): Body ink.
- **Body Light** (`#dcddde`): Secondary running text.
- **Muted** (`#a0a3a8`): Metadata.
- **Soft** (`#737582`): Disabled, footer.
- **Disabled** (`#5c5e6b`): Greyed menu.
- **Mid Grey** (`#3a3f5e`): Progress rail, rating chip bg.

### Surface & Borders
- **Surface Strong** (`#2a3170`): Hovered control, input bg lift.
- **Surface Default** (`#1a2151`): Secondary panel, modal ground for inner cards.
- **Surface Soft** (`#0a132a`): Alt-row band.
- **Border Default** (`#2a3170`): Hairline.
- **Border Soft** (`#1f254a`): Subtler divider.
- **Border Strong** (`#0089ec`): Focused input — matches brand.

### Shadow Colors
- **Card Shadow** (`rgba(0,0,0,0.6)`): Hover lift.
- **Modal Shadow** (`rgba(0,0,0,0.85)`): Detail modal.
- **Glow Blue** (`rgba(0,137,236,0.5)`): Signature blue glow on focus / poster hover.

### Semantic
- **Success** (`#00b89c`): Subscription confirmed.
- **Warning** (`#ffa500`): Buffering.
- **Danger** (`#ff3b30`): Form error.
- **Info** (`#0089ec`): Matches brand.

## 3. Typography Rules

### Font Family
- **Primary**: `"Inspire"` — Disney's custom in-house cut drawn for the 2019 Disney+ launch. Humanist sans with rounded terminals. Weights 300, 400, 500, 700, 800.
- **Fallback**: `"Avenir Next", "Helvetica Neue", Helvetica, Arial, sans-serif`.
- **Mono**: SF Mono / Menlo (developer-only).
- **OpenType Features**: `ss01` for stylistic alternates; `tnum` for episode metadata.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Billboard Hero (text) | Inspire | 64px | 800 | 1.05 | -0.02em | ss01 | Text fallback when title-card SVG unavailable |
| Display XL | Inspire | 48px | 700 | 1.1 | -0.015em | ss01 | Detail modal hero |
| Display LG | Inspire | 36px | 700 | 1.15 | -0.01em | ss01 | Marketing landing |
| Display MD | Inspire | 28px | 700 | 1.2 | 0 | ss01 | Sub-header |
| Display SM | Inspire | 22px | 500 | 1.25 | 0 | -- | Episode title |
| Section Title | Inspire | 20px | 500 | 1.3 | 0 | -- | Carousel section |
| Row Title | Inspire | 18px | 500 | 1.2 | 0 | -- | Carousel row |
| Body LG | Inspire | 18px | 400 | 1.5 | 0 | -- | Modal synopsis |
| Body MD | Inspire | 16px | 400 | 1.5 | 0 | -- | Account, settings |
| Body SM | Inspire | 14px | 400 | 1.43 | 0 | -- | Episode descriptions |
| Button LG | Inspire | 16px | 500 | 1.0 | 0.01em | -- | Primary CTA |
| Button MD | Inspire | 14px | 500 | 1.0 | 0.01em | -- | Modal action |
| Caption | Inspire | 13px | 400 | 1.4 | 0 | -- | Disclosures |
| Metadata | Inspire | 14px | 400 | 1.3 | 0 | tnum | "2024 · S2 · 8 Eps · TV-PG" |
| Badge Rating | Inspire | 11px | 700 | 1.0 | 0.05em | -- | "TV-PG", uppercase |
| Nav Link | Inspire | 14px | 500 | 1.0 | 0.01em | -- | Top nav |
| Legal | Inspire | 12px | 400 | 1.5 | 0 | -- | Footer |
| Micro Label | Inspire | 10px | 700 | 1.0 | 0.1em | -- | "DISNEY+ ORIGINAL", uppercase |
| Franchise Tile | Inspire | 14px | 700 | 1.0 | 0.05em | -- | Tile text-fallback label |

### Principles
- **Inspire's humanist proportions soften the brand.** Where Sharp Grotesk feels editorially cool, Inspire feels family-warm — the rounded terminals ARE the difference.
- **Modest tracking — never extreme.** Display caps at `-0.02em`. Disney+ resists Stripe-grade negative tracking; type stays approachable, not precision-engineered.
- **800 reserved for billboard text fallback.** When the SVG title-card is missing, 800 carries the cinematic weight; otherwise 700 is the heaviest.
- **Tabular numerals on metadata.** Episode runtimes align via `tnum`.
- **Uppercase only for badges + tags.** "DISNEY+ ORIGINAL", maturity chips, micro-labels.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#0089ec`. Text: `#ffffff`. Radius: `8px`. Padding: `14px 28px`. Height: `48px`. Font: Inspire 16 / 500.
- Hover: `#19a0ff` + `0 0 0 4px rgba(0,137,236,0.3)` glow ring (signature).
- Active: `#006bbd`.
- Use: "Sign Up", "Watch", "Play", "Continue".

**Hero Primary**
- Background: `#0089ec`. Padding: `18px 36px`. Height: `56px`.
- Use: Billboard "Play".

**Glass Secondary**
- Background: `rgba(255,255,255,0.15)`. Border: `1px solid rgba(255,255,255,0.25)`. Backdrop-filter: `blur(8px)`. Radius: `8px`.
- Use: Billboard "More Info".

**White CTA**
- Background: `#ffffff`. Color: `#0e1735`. Radius: `8px`.
- Use: Acquisition page on legal.

**Ghost / Outline**
- Background: `transparent`. Border: `1px solid #ffffff`. Radius: `8px`.
- Use: Modal cancel, "Skip Intro".

### Cards & Tiles

**Poster Card**
- Background: `transparent` (the title-card SVG fills the card). Aspect: 2:3. Radius: `8px`.
- Hover: 1.08× scale + `0 8px 24px rgba(0,0,0,0.6)` shadow + `0 0 0 2px rgba(0,137,236,0.4)` blue glow ring. Signature.

**Franchise Hub Tile**
- Background: video-loop motion artwork (Disney castle, Pixar lamp, Marvel pages, Death Star, NatGeo globe).
- Aspect: 16:9. Radius: `12px`. Border: `2px solid transparent` at rest, `2px solid #ffffff` on hover.
- Hover: 1.05× scale + white ring + `0 12px 32px rgba(0,0,0,0.6)` shadow.
- Layout: 5 tiles edge-to-edge below billboard, 12px gutter.

**Preview Popup**
- Background: `#1a2151`. Radius: `12px`. Width: 380px. Click-to-expand (not hover).
- Content: 16:9 autoplay clip + title-card SVG + maturity rating + 3-line synopsis + Play / Add-to-Watchlist / More.

**Billboard Hero**
- Aspect: 16:9 full-bleed. Bottom inset gradient: `#040714` over 240px.
- Title-card SVG: 320–400px wide bottom-left.
- CTAs: Blue Play + Glass More Info.
- Auto-rotate: 12s dwell, 1s cross-dissolve.

**Detail Modal**
- Background: `#0e1735`. Radius: `16px`. Width: clamp(900px, 80vw, 1400px).
- Header: 16:9 hero still + franchise badge in top-left + DISNEY+ ORIGINAL badge.
- Synopsis: 18px / 400 / 1.5.
- Episode tabs: per-season list with 16:9 episode-still + title + tabular runtime.

### Badges, Tags

**DISNEY+ ORIGINAL**
- Background: `#0089ec`. Color: `#ffffff`. Radius: `4px`. Padding: `3px 8px`. Font: 10px / 700 uppercase, 0.1em tracking.

**Maturity Rating**
- Background: `#3a3f5e`. Color: `#ffffff`. Radius: `4px`. Padding: `2px 6px`.

**NEW**
- Background: `transparent`. Color: `#0089ec`. Border: `1px solid #0089ec`. Radius: `4px`.

**Franchise Badge**
- Background: franchise primary colour (Marvel red, Star Wars yellow, etc). Color: contrast text. Radius: `4px`. Used in detail modal to denote franchise context.

### Inputs

**Text Input**
- Background: `#1a2151`. Color: `#ffffff`. Border: `2px solid transparent`. Radius: `8px`. Height: `56px`. Padding: `16px 20px`.
- Floating label: 13px `#a0a3a8` → animates to 11px on focus.
- Focus: Border `#0089ec`.
- Error: Border `#ff3b30` + 13px error text below.

### Navigation

**Top Nav (Transparent)**
- Background: `transparent`. Color: `#ffffff`. Height: `64px`.
- Logo: white Disney+ wordmark with arc, 32px height.
- Links: Home, Search, Originals, Movies, Series, Watchlist.

**Top Nav (Solid)**
- Background: `#040714` after scrollY > 60px.

**Profile Selector**
- Avatar: 200×200 character portrait (Mickey, Iron Man, Yoda, etc) on coloured square.
- Hover: 1.05× scale + 4px white ring.

### Player

**Player Controls**
- Background: `linear-gradient(0deg, rgba(4,7,20,0.85), transparent)`.
- Scrubber: rail `#3a3f5e`, fill `#0089ec`, height `4px`, radius `9999px` (fully rounded).
- Playhead: `#0089ec` 16×16 circle, scales to 20×20 on hover.

### Loaders

**Groot Loader**
- Spinning Disney+ wordmark animation, 48×48 SVG with the arc rotating around the text.

## 5. Layout Principles

### Spacing System
- Base: 4px. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120.
- Row gap: 36px.
- Section gap: 80px.
- Franchise band gap: 12px between tiles.

### Grid & Container
- Page width: 1920px. Content max: 1440px.
- Carousel: 6 posters at desktop, 4 at tablet, 2.5 at mobile.
- Franchise band: 5 tiles edge-to-edge, scales proportionally.
- Header: 64px (slightly shorter than Netflix/Max).

### Whitespace Philosophy
Disney+ balances density with theatrical reveal. The franchise band — those five iconic tiles — gets generous gutter (12px) and full-bleed width. Carousel rows below are denser. Whitespace between sections is editorial-generous (80px) but within sections (rows) is tight (36px).

### Section Cadence
- Billboard hero
- Franchise hub band (5 video-loop tiles)
- Continue Watching (if applicable)
- "Recommended for You"
- Genre/franchise rows (4–6 of them)
- Footer

## 6. Shapes & Radius Scale

- **Sharp** (`0px`): Billboard image edges only.
- **Micro** (`4px`): Badges, rating chips, NEW outline.
- **Standard** (`8px`): Buttons, poster cards, inputs.
- **Comfortable** (`12px`): Franchise hub tiles, preview popup.
- **Featured** (`16px`): Detail modal corners.
- **Pill** (`9999px`): Avatars, progress bars (yes — Disney+ rounds the progress bar, unlike Netflix/Max).

Disney+ is the most consistently-rounded streaming UI. Even progress bars are pill-radius — a small touch that signals soft/family.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | Flat | Default poster, transparent nav |
| 1 | 2px transparent border | Resting franchise tile, focused-but-unhovered |
| 2 | `0 8px 24px rgba(0,0,0,0.6) + 0 0 0 2px rgba(0,137,236,0.4)` | Poster hover (signature blue glow) |
| 3 | `0 12px 32px rgba(0,0,0,0.6) + 2px white border` | Franchise tile hover |
| 4 | `0 32px 64px rgba(0,0,0,0.85)` | Detail modal |
| 5 | `0 0 24px rgba(0,137,236,0.5)` | Featured CTA glow |

### Shadow Philosophy
Disney+ uses the *blue glow* as a secondary elevation cue — `rgba(0,137,236,0.4)` at 2px ring. This is not shadow but a brand-tinted rim-light — signature magical without being kitsch. Hard drop-shadows handle the lift; the blue ring handles the brand identity.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Out**: `cubic-bezier(0, 0, 0.2, 1)`.
- **Magical**: `cubic-bezier(0.32, 0.72, 0, 1)` — signature smooth-springy ease for franchise tiles, modal entry, hero rotation.

### Duration Buckets
- **Fast**: 150ms — colour shift.
- **Standard**: 280ms — modal in, billboard CTA hover.
- **Slow**: 500ms — billboard cross-dissolve, franchise tile hover.

### Per-Component Recipes
- **Primary CTA hover**: `#0089ec → #19a0ff` + glow ring `rgba(0,137,236,0.3)` 4px expand. 150ms.
- **Poster hover**: 1.0× → 1.08×, 280ms ease-magical, plus blue glow ring fade-in.
- **Franchise tile hover**: 1.0× → 1.05×, 500ms ease-magical, white border fade-in, video-loop continues.
- **Billboard rotate**: 12s dwell, 1s cross-dissolve.
- **Modal in**: 380ms ease-magical, scale 0.95 → 1.0 + opacity 0 → 1.

### Page Transitions
Franchise hub entry uses a full-screen wipe — the user clicks Marvel, the screen washes Marvel red, and the Marvel hub renders. ~600ms.

### Reduced Motion
- Poster scale → opacity-only.
- Franchise video-loops → static still.
- Billboard rotation → halts.
- Modal in → opacity-only.
- Franchise wipe → instant cut.

## 9. Accessibility & A11y

### Contrast Pairs
- White on `#0e1735`: **17.4:1** — AAA.
- Off-white `#f9f9f9` on `#0e1735`: **16.5:1** — AAA.
- Muted `#a0a3a8` on `#0e1735`: **6.2:1** — AAA at body sizes.
- White on brand `#0089ec`: **4.5:1** — AA.
- Soft `#737582` on canvas: **3.6:1** — AA large only.

### Focus Indicators
- 2px solid `#0089ec` outline with 4px offset on all controls. Brand-blue ring matches the hover-glow signature.

### ARIA Patterns
- Carousels: `role="region" aria-roledescription="carousel"`.
- Franchise tiles: `role="link" aria-label="Browse [Franchise]"`.
- Modal: `role="dialog" aria-modal="true"`.
- Player: full keyboard support; family-mode "Stop Asking" reduces interaction prompts.

### Keyboard Navigation
- Tab between rows; arrows within rows.
- Enter on poster opens detail modal.
- Space play/pause in player; F fullscreen; M mute.
- Esc progresses: modal close → player pause → fullscreen exit.

### Screen Reader
- Poster `aria-label` packs title, year, season, maturity, runtime.
- Franchise tile `aria-label` names franchise.
- Kids profile reduces aria complexity ("Watch Frozen" not "Frozen 2013 G 102 minutes").

### Caption / AD
- Captions on all titles; full customisation including high-contrast yellow-on-black presets for visually-impaired viewers.
- Audio description on Disney+ originals.

### Reduced Motion
Honoured per §8. The franchise video-loops are the most prominent animation, so the reduced-motion fallback (static still) is critical for vestibular-sensitive users.

## 10. Responsive Behavior

### Breakpoints
| Token | Min | Use |
|-------|-----|-----|
| mobile | 0px | 2.5 posters peek, 1 franchise tile per row |
| tablet | 1024px | 4 posters, 3 franchise tiles |
| desktop | 1280px | 6 posters, 5 franchise tiles |
| wide | 1920px | 6 posters, 5 franchise tiles |

### Touch Targets
- 48×48 minimum on all controls.

### Collapsing Strategy
- Top nav → hamburger at < 1024px.
- Franchise band → vertical stack on mobile (1-up scrollable column).
- Detail modal → full-screen sheet at < 768px.
- Billboard CTAs → stacked at < 640px.

### Image Behavior
- Posters: 2:3 with title-card SVG overlay.
- Billboard: 16:9 with motion-loop variant on franchise hubs.
- Franchise tile: 16:9 motion video, falls back to static still at low bandwidth.

### Container Queries
Preview popup chooses left/right anchor on row-container CQ.

## 11. Content & Voice

### Tone
Disney+ voice is **warm-magical-family**. Every microcopy is friendly, not clinical. "What would you like to watch?" not "Browse content." Acquisition copy invokes wonder ("Discover the worlds of Disney, Pixar, Marvel, Star Wars, and National Geographic"). Never edgy, never ironic.

### Microcopy Patterns
- **Primary CTA**: "Sign Up Now", "Get Disney+", "Watch", "Play", "Continue".
- **Secondary**: "More Info", "Add to Watchlist".
- **Acquisition headline**: "All your favourite stories. All in one place." or "Where stories live forever."
- **Empty Watchlist**: "Add titles to your watchlist to see them here." + suggested-adds row.
- **Error**: "Looks like something went wrong. Try again or contact support." (gentle, never blame user).
- **Profile prompt**: "Who's watching?" with character-avatar grid.
- **Cancellation**: "Cancel any time. No commitment." (never "downgrade" or "lose access").
- **Kids profile**: "Choose this profile?" with simplified character-portrait selector.

### Empty States
Empty Watchlist: friendly text + 6-poster suggested-adds row featuring family-favourites. Empty Continue Watching: hidden if profile has no in-progress titles.

### CTA Verb Conventions
- "Watch" (primary in product) > "Play" > "Sign Up" > "Get Disney+".
- "Add to Watchlist" not "Save".
- "More Info" not "Details".
- "Resume" not "Continue".

## 12. Dark Mode & Theming

**Dark-only canvas, but franchise-themed sub-pages.** When user enters a franchise hub (Marvel, Star Wars, Pixar, NatGeo), the page palette shifts:
- **Marvel hub**: accent shifts to Marvel red `#ed1d24`; CTA gains red ring; background tint slightly warms.
- **Star Wars hub**: accent shifts to SW yellow `#ffe81f`; titles render in yellow on near-black.
- **Pixar hub**: accent shifts to Pixar blue `#0080ff`; lighter, playful tone.
- **NatGeo hub**: accent shifts to NatGeo yellow `#ffcc00`; documentary-photographic feel.

These are not full dark/light theme swaps but franchise-accent overlays. Core navy canvas remains.

No public light-mode for the consumer product.

## 13. Lineage & Influences

Disney+ inherits from a dual lineage: theatrical Disney + modern streaming UI.

**Theatrical Disney.** The wordmark arc, the planetarium-navy ground, the magical-ease curves — these descend from Walt Disney Pictures opening sequences (the castle-arc-plus-sparkles). The franchise hub band is a UI translation of Disney's franchise-portfolio business model.

**Apple TV / Hulu (pre-Disney acquisition).** The carousel-row + tile-grid pattern is industry-standard streaming UI; Disney+ adapts it without reinventing.

**Pixar / Disney character branding.** Profile avatars use character portraits (Mickey, Buzz, Iron Man, Yoda, Olaf), creating an identity-as-IP layer that's unique to Disney+.

What Disney+ rejects: edgy/prestige typography (Max), content-density walls (Netflix), tech-utility minimalism (Apple TV+). The brand is *maximally warm and family-magical*.

**Influences:**
- **Walt Disney Pictures (1928–present)** — the wordmark arc, theatrical magical tone. https://www.disney.com
- **Pixar / Marvel / Lucasfilm / National Geographic** — franchise hub model.
- **Apple TV+ / Hulu** — carousel + tile-grid streaming UI vocabulary.
- **Disney's in-house brand team** — drew Inspire typeface for 2019 launch.

## 14. Do's and Don'ts

**Do:**
- Use the `#0e1735 → #040714` navy gradient — pure flat black breaks the planetarium feel.
- Reserve `#0089ec` for primary CTA, focus rings, progress, wordmark arc.
- Use the signature blue-glow hover ring `0 0 0 2px rgba(0,137,236,0.4)` on poster + tile hover.
- Render the five franchise hub tiles below the billboard — Disney, Pixar, Marvel, Star Wars, NatGeo.
- Use video-loop backgrounds on franchise tiles (motion).
- Use Inspire 700–800 weight at display sizes with `-0.015em` to `-0.02em` tracking.
- Use 8px button radius, 12px tile radius, 16px modal radius — consistent rounding.
- Pill-radius the watched-progress bar (rounded ends) — Disney+ alone does this.
- Shift accent palette when entering franchise hubs (Marvel red, SW yellow, NatGeo yellow).
- Default to dark — Disney+ has no light theme.

**Don't:**
- Don't use pure `#000000` for canvas — the navy gradient is essential.
- Don't use rectilinear / sharp corners — Disney+ is consistently rounded.
- Don't use Sharp Grotesk-grade tight tracking — Inspire holds modest `-0.015em` to `-0.02em`.
- Don't apply red as primary CTA — that signals Netflix; Disney+ is blue-only.
- Don't use the franchise palettes outside their hubs — Marvel red on a Disney hub breaks branding.
- Don't omit the blue-glow hover ring — it is Disney+'s most-recognisable micro-detail.
- Don't auto-play preview clips on hover — Disney+ uses click-to-expand like Max, not hover-expand like Netflix.
- Don't use uppercase outside of badges — Disney+ writes in friendly sentence case.
- Don't use edgy / prestige microcopy — voice is warm-magical-family.
- Don't introduce a light theme — Disney+ is dark.

## 15. Agent Prompt Guide

### Quick Color Reference
- Canvas Navy: `#0e1735`
- Canvas Deep: `#040714`
- Brand Blue: `#0089ec`
- Blue Hover: `#19a0ff`
- White: `#ffffff`
- Off-white: `#f9f9f9`
- Muted: `#a0a3a8`
- Surface: `#1a2151`
- Border: `#2a3170`
- Glow Blue: `rgba(0,137,236,0.4)`

### Example Component Prompts
1. "Create a Disney+ billboard hero — full-bleed 16:9 still on `#0e1735` canvas with bottom 240px gradient to `#040714`, title-card SVG anchored bottom-left at 320px wide, blue `#0089ec` Play button + frosted glass `rgba(255,255,255,0.15)` with `blur(8px)` More Info sibling, both 8px radius."
2. "Design the Disney+ franchise hub band — 5 horizontal video-loop tiles edge-to-edge (Disney castle, Pixar lamp, Marvel pages, Death Star, NatGeo globe), 16:9 aspect, 12px radius, 12px gutter, on hover scale to 1.05× with `cubic-bezier(0.32,0.72,0,1)` ease-magical curve over 500ms and gain 2px white border + `0 12px 32px rgba(0,0,0,0.6)`."
3. "Build a Disney+ poster card — transparent bg with title-card SVG fill, 2:3 portrait, 8px radius, on hover scale 1.08× over 280ms ease-magical and gain `0 8px 24px rgba(0,0,0,0.6) + 0 0 0 2px rgba(0,137,236,0.4)` blue glow ring (signature)."
4. "Render a Disney+ detail modal — `#0e1735` bg, 16px radius, 16:9 hero still header, DISNEY+ ORIGINAL blue tag + franchise badge in corner, 18px Inspire synopsis paragraph, season tabs with tabular-num runtime column."
5. "Create a Disney+ profile selector — 4 character-portrait avatars (Mickey, Iron Man, Yoda, Olaf), 200×200 each, hover lifts to 1.05× scale with 4px white ring, `Inspire 16/500` profile name beneath, Add Profile pill below grid."

### Iteration Guide
1. **Add the gradient.** If canvas reads as flat-black, push to `#0e1735 → #040714` linear gradient — the navy lift is essential.
2. **Round the corners.** Disney+ is consistently rounded; if anything looks rectilinear, increase radius (8 / 12 / 16).
3. **Add the blue glow.** Hover state without `0 0 0 2px rgba(0,137,236,0.4)` doesn't read as Disney+.
4. **Slow the magical curve.** `cubic-bezier(0.32,0.72,0,1)` is the brand's signature — generic eases feel un-Disney.
5. **Render the franchise band.** No Disney+ landing should ship without the five franchise tiles below the billboard.
6. **Soften the type.** Inspire holds modest tracking; pulling tighter than `-0.02em` reads as Stripe-like, not Disney.
7. **Watch the voice.** Microcopy must be warm-friendly — "Looks like something went wrong" not "Error 4XX".
8. **Pill the progress bar.** Round both ends — only Disney+ does this in the streaming category.
