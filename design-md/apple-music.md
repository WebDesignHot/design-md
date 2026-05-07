---
name: Apple Music
tagline: Pink-red gradient hero with album-grid kinesthetics — SF Pro precision, signature `#fa233b` brand pink, glassy dark canvas.
updated_at: 2026-05-04T19:57:58+12:00
published_at: 2026-05-04T19:57:58+12:00
author: webdesignhot
source_url: https://music.apple.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [media]
tags: [dark, music, streaming, sans, pink, vibrant, gradient, album-art, glassy]
preview_swatch: ['#000000', '#fa233b', '#ffffff']
related: [apple, apple-tv, spotify]
description: 'Apple Music''s web is **album-art-forward streaming** dressed in Apple''s signature pink-red `#fa233b` brand color and rendered on a soft-near-black canvas (`#000000` deep, `#1d1d1f` panel). The hero is a dynamic album-art mosaic — six to twelve covers tiled into a kinesthetic grid that auto-scrolls; the gradient `linear-gradient(135deg, #fa233b 0%, #ff7b00 100%)` washes wordmarks and CTAs. SF Pro Display carries every headline at the brand''s standard tight optical tracking, SF Pro Text handles body, and the system reaches for **glassy material depth** — every card is a `12px` radius surface with backdrop-blur `40px`, every chip a full-pill, every elevation a layered translucent overlay. Where Spotify commits to brand-green-on-near-black, Apple Music commits to pink-red gradient + monochrome album-grid kinesthetics: the album cover is the brand.'

colors:
  bg: '#000000'                     # pure black canvas — Apple's standard for media properties
  bg-panel: '#1d1d1f'               # raised panel surface (matches Apple TV+ standard)
  bg-elev: '#2a2a2c'                # elevated card on panel
  bg-soft: '#1a1a1c'                # subtle alt-section
  bg-page: '#000000'                # default body
  surface: '#1d1d1f'                # default card surface
  surface-glass: 'rgba(29,29,31,0.72)' # glassy panel with backdrop-blur(40px)
  surface-glass-light: 'rgba(255,255,255,0.08)' # light glass over album art
  surface-elev: '#2a2a2c'           # elevated card
  brand: '#fa233b'                  # Apple Music signature pink-red
  brand-hover: '#e51e34'            # darker hover
  brand-active: '#c8172c'           # pressed
  brand-soft: 'rgba(250,35,59,0.16)' # soft pink-red wash
  brand-glow: 'rgba(250,35,59,0.40)' # focus glow
  brand-deep: '#cc1729'             # deep emphasis
  brand-gradient-start: '#fa233b'   # gradient stop 1
  brand-gradient-end: '#ff7b00'     # gradient stop 2 — warm orange
  brand-gradient-radial-end: '#ff007a' # radial gradient pink stop
  text: '#ffffff'                   # primary text on black
  text-strong: '#ffffff'            # headings
  text-soft: 'rgba(255,255,255,0.78)' # secondary metadata
  text-faint: 'rgba(255,255,255,0.56)' # captions, hint
  text-disabled: 'rgba(255,255,255,0.32)'
  text-on-brand: '#ffffff'
  on-brand: '#ffffff'
  border: 'rgba(255,255,255,0.10)'  # default hairline on dark
  border-soft: 'rgba(255,255,255,0.06)'
  border-strong: 'rgba(255,255,255,0.18)'
  link: '#fa233b'                   # link == brand
  link-hover: '#ff4d63'             # lighter hover for visibility on dark
  selected: 'rgba(250,35,59,0.16)'
  scrim: 'rgba(0,0,0,0.72)'         # modal backdrop
  scrim-light: 'rgba(0,0,0,0.40)'   # over-album-art scrim for legibility
  shadow-card: 'rgba(0,0,0,0.40)'
  shadow-elev: 'rgba(0,0,0,0.60)'
  shadow-modal: 'rgba(0,0,0,0.80)'
  shadow-album: 'rgba(0,0,0,0.50)'  # album-art tile shadow for depth
  success: '#3aaa50'
  warning: '#ff9f0a'
  danger: '#ff453a'                 # SF system red on dark
  info: '#0a84ff'                   # SF system blue
  vibrancy-overlay: 'rgba(255,255,255,0.04)' # subtle vibrancy on glass

typography:
  display:
    family: '"SF Pro Display", "SF Pro", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif'
    weights: [300, 400, 500, 600, 700, 800, 900]
    opentype-features: ['ss01: alt 6/9', 'ss02: alt 4', 'tnum on numeric', 'cv11: alt zero']
  body:
    family: '"SF Pro Text", "SF Pro", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500, 600]
  scale:
    display-hero:    { size: 80, weight: 700, lineHeight: 1.05, tracking: '-0.025em', family: display, notes: 'flagship marketing hero — "Listen now"' }
    display-large:   { size: 56, weight: 700, lineHeight: 1.07, tracking: '-0.022em', family: display, notes: 'genre / playlist hero' }
    h1:              { size: 40, weight: 700, lineHeight: 1.1, tracking: '-0.02em', family: display }
    h2:              { size: 32, weight: 700, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.2, tracking: '-0.01em', family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h5:              { size: 17, weight: 600, lineHeight: 1.3, tracking: '0', family: display }
    body-large:      { size: 19, weight: 400, lineHeight: 1.5, tracking: '0', family: body, notes: 'hero intro paragraph' }
    body-md:         { size: 17, weight: 400, lineHeight: 1.5, tracking: '0', family: body, notes: 'default body — Apple convention' }
    body-strong:     { size: 17, weight: 600, lineHeight: 1.5, tracking: '0', family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body, notes: 'metadata, secondary' }
    label:           { size: 13, weight: 600, lineHeight: 1.3, tracking: '0', family: body }
    eyebrow:         { size: 12, weight: 700, lineHeight: 1.3, tracking: '0.06em', family: body, transform: uppercase, notes: 'category eyebrow with brand-gradient text' }
    button:          { size: 17, weight: 600, lineHeight: 1.2, tracking: '-0.005em', family: body }
    button-sm:       { size: 14, weight: 600, lineHeight: 1.2, tracking: '0', family: body }
    track-title:     { size: 16, weight: 500, lineHeight: 1.3, tracking: '0', family: body, notes: 'track row in playlist' }
    track-artist:    { size: 14, weight: 400, lineHeight: 1.3, tracking: '0', family: body }
    duration:        { size: 14, weight: 500, lineHeight: 1.3, tracking: '0', family: body, opentype: 'tnum', notes: 'track duration — tabular numerals' }
    caption:         { size: 12, weight: 400, lineHeight: 1.4, tracking: '0', family: body }
    legal:           { size: 11, weight: 400, lineHeight: 1.4, tracking: '0', family: body }

radius:
  micro: 2
  sm: 6                              # buttons (pill-shape preferred but rectangle exists)
  md: 8                              # inputs
  lg: 12                             # default card / panel
  xl: 16                             # featured card
  hero: 24                           # hero card with album mosaic
  album-art: 8                       # album cover thumbnail
  album-art-large: 12                # large album cover (Now Playing)
  pill: 9999                         # CTAs, chips, control buttons

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  outer-gutter-mobile: 16
  outer-gutter-tablet: 24
  outer-gutter-desktop: 40
  hero-aspect: '21/9'
  album-grid-mobile: 2
  album-grid-tablet: 4
  album-grid-desktop: 6

components:
  button-primary:
    bg: '#fa233b'
    color: '#ffffff'
    border: 'none'
    radius: 9999
    padding: '14px 28px'
    font: button
    use: 'Primary CTA — "Try it free", "Listen now", "Subscribe".'
  button-primary-gradient:
    bg: 'linear-gradient(135deg, #fa233b 0%, #ff7b00 100%)'
    color: '#ffffff'
    border: 'none'
    radius: 9999
    padding: '14px 28px'
    use: 'Hero primary CTA with brand gradient — "Start your free trial".'
  button-secondary:
    bg: 'rgba(255,255,255,0.12)'
    color: '#ffffff'
    border: 'none'
    radius: 9999
    padding: '14px 28px'
    use: 'Secondary glass-button on dark — "Learn more", "Open in Music app".'
  button-tertiary:
    bg: 'transparent'
    color: '#fa233b'
    border: 'none'
    padding: '14px 12px'
    icon: 'arrow-right after label'
    use: 'Inline link CTA — "View all artists ›".'
  button-play:
    bg: '#fa233b'
    color: '#ffffff'
    border: 'none'
    radius: 9999
    size: 56
    icon: 'play-fill 24px white'
    use: 'Circular play button — appears on album-card hover, hero, Now Playing bar.'
  button-play-on-art:
    bg: 'rgba(0,0,0,0.6)'
    color: '#ffffff'
    border: 'none'
    radius: 9999
    size: 48
    backdrop-filter: 'blur(20px)'
    use: 'Glass play button overlay on hover — appears centered over album art.'
  card-album:
    bg: 'transparent'
    radius: 12
    padding: 0
    art-radius: 8
    art-shadow: '0 8px 24px rgba(0,0,0,0.50)'
    title-mt: 12
    title-style: '16/500 white'
    artist-style: '14/400 text-soft'
    hover: 'play button overlay fades in over 200ms + slight scale(1.02)'
    use: 'Album/playlist tile in editorial grids — art on top, title below, artist below.'
  card-feature:
    bg: '#1d1d1f'
    radius: 16
    padding: '32px'
    border: '1px solid rgba(255,255,255,0.06)'
    use: 'Feature card on marketing surfaces — Spatial Audio explainer, exclusive content callout.'
  card-glass:
    bg: 'rgba(29,29,31,0.72)'
    radius: 16
    padding: '32px'
    backdrop-filter: 'blur(40px) saturate(180%)'
    border: '1px solid rgba(255,255,255,0.08)'
    use: 'Glassy panel over album-art mosaic — material vibrancy effect.'
  card-now-playing:
    bg: '#1d1d1f'
    radius: 12
    padding: '20px'
    art-size: 88
    art-radius: 8
    art-shadow: '0 12px 32px rgba(0,0,0,0.60)'
    use: 'Now Playing card with album art + track info + scrubber + controls.'
  card-track-row:
    bg: 'transparent'
    hover-bg: 'rgba(255,255,255,0.06)'
    radius: 8
    padding: '8px 12px'
    art-size: 40
    art-radius: 4
    use: 'Track row in playlist view — index, art, title/artist, album, duration.'
  badge-pill:
    bg: 'rgba(250,35,59,0.16)'
    color: '#fa233b'
    radius: 9999
    padding: '4px 12px'
    font: { size: 12, weight: 600 }
    use: '"Apple Music Exclusive", "Spatial Audio", "Lossless" — categorical pill.'
  badge-spatial:
    bg: 'transparent'
    color: '#fa233b'
    border: '1px solid #fa233b'
    radius: 4
    padding: '2px 6px'
    font: { size: 10, weight: 700 }
    transform: uppercase
    use: '"DOLBY ATMOS", "LOSSLESS" — quality badge on track rows.'
  input-search:
    bg: 'rgba(255,255,255,0.08)'
    border: 'none'
    radius: 9999
    padding: '10px 16px 10px 40px'
    icon: 'magnifying-glass 16px white-soft'
    placeholder: 'rgba(255,255,255,0.56)'
    use: 'Top-bar search — full-pill, glass-translucent.'
  global-nav:
    bg: 'rgba(0,0,0,0.72)'
    backdrop-filter: 'blur(40px) saturate(180%)'
    height: 64
    border-bottom: '1px solid rgba(255,255,255,0.06)'
    sticky: true
    use: 'Fixed top bar with translucent black blur — Apple"s standard.'
  album-grid:
    grid: 'repeat(auto-fill, minmax(200px, 1fr))'
    gap: '24px'
    use: 'Editorial album grid — 6-up desktop, 4 tablet, 2 mobile.'
  hero-mosaic:
    layout: 'CSS grid 4-col x 3-row mosaic of album-art tiles'
    animation: 'auto-scroll vertical at 0.4px/frame, paused on hover'
    overlay: 'linear-gradient(180deg, transparent 0%, #000 80%)'
    use: 'Hero background — 12 album-art covers tiled with motion.'
  now-playing-bar:
    bg: 'rgba(29,29,31,0.92)'
    backdrop-filter: 'blur(40px)'
    position: 'fixed bottom 0 left 0 right 0'
    height: 80
    border-top: '1px solid rgba(255,255,255,0.06)'
    use: 'Persistent player bar — art + track info + transport + scrubber + volume.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.32, 0.72, 0, 1)'    # Apple's signature smooth-out curve
  ease-spring: 'cubic-bezier(0.5, 1.35, 0.6, 1)'        # springy overshoot for play button
  duration-fast: 100
  duration-standard: 200
  duration-slow: 300
  duration-page: 500
  duration-album-scroll: 60000                          # 60s mosaic scroll cycle
  card-hover: 'album card: scale(1) → scale(1.02) over 200ms ease-emphasized + play-button-overlay fades in'
  play-button-press: 'scale(1) → scale(0.92) over 100ms then back to 1.05 over 200ms (springy)'
  scrubber-drag: 'thumb scale(1) → scale(1.5) on grab, follows pointer'
  reduced-motion: 'respects prefers-reduced-motion: reduce — mosaic auto-scroll halts; card hover scales degrade to opacity dim; springy play-button compresses to 100ms linear ease.'

breakpoints:
  mobile: 600
  tablet: 900
  desktop: 1280
  wide: 1440

shadows:
  none: 'none'
  album: '0 8px 24px rgba(0,0,0,0.50)'
  album-hover: '0 16px 40px rgba(0,0,0,0.60)'
  card: '0 4px 16px rgba(0,0,0,0.40)'
  elevated: '0 12px 32px rgba(0,0,0,0.60)'
  modal: '0 24px 56px rgba(0,0,0,0.80)'
  ring: '0 0 0 3px rgba(250,35,59,0.40)'
  glow-pink: '0 0 32px rgba(250,35,59,0.40)'

accessibility:
  contrast-text-on-bg: 21.0                  # white on black — AAA
  contrast-soft-on-bg: 13.6                  # white-78% on black — AAA
  contrast-faint-on-bg: 8.6                  # white-56% on black — AAA at body
  contrast-text-on-brand: 4.8                # white on brand pink-red — AA at body
  contrast-on-glass: 12.0                    # white on glass surface — AAA (glass 72% over black)
  focus-ring: '3px solid rgba(250,35,59,0.40) — pink-red glow ring'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab order — skip-link → wordmark → nav (Listen Now/Browse/Radio/Library/Search) → utility (sign in / try free) → main → now-playing-bar → footer.'
  aria-patterns: 'Track rows use role="row" + aria-rowindex; play buttons use aria-label="Play [Track] by [Artist]"; scrubber uses role="slider" + aria-valuemin/max/now/text; carousel uses aria-roledescription="carousel".'

dark-mode: forced   # Apple Music marketing is dark-only by brand design. No light variant offered. The Music app supports light/dark via system theme, but the marketing site (music.apple.com) renders dark across both system modes.
---

## 1. Visual Theme & Atmosphere

Apple Music's web is **album-art-forward streaming** dressed in pink-red brand gradient and rendered on a soft-near-black canvas. This is not a generic "music streaming dark mode" — it's a deliberate Apple media-property aesthetic: pure black `#000000` canvas, raised panels at `#1d1d1f` (the same soft-charcoal used across Apple TV+ and the Apple TV app), and `#fa233b` brand pink-red carrying every CTA, eyebrow, and link moment. The hero on apple.com/apple-music is a dynamic **album-art mosaic** — six to twelve album covers tiled into a kinesthetic 4×3 grid that auto-scrolls vertically at half-speed, with a `linear-gradient(180deg, transparent 0%, #000 80%)` overlay fading the bottom into pure black so headline copy sits crisp against neutral ground. The album cover is the brand. Every album cover is a brand surface.

Color carries the moment. The signature `#fa233b` reads as **pink-red** (not pure red, not coral) — the same Apple has used for Apple Music since the 2015 launch, calibrated to feel emotionally distinct from the system red `#ff453a` used for destructive actions. A radial-gradient hero variant uses `radial-gradient(circle at top, #ff007a 0%, #fa233b 50%, transparent 100%)` for genre-specific landing pages (e.g., Hip-Hop, Electronic), and the linear `135deg, #fa233b 0%, #ff7b00 100%` gradient washes wordmarks ("Listen now") and primary CTAs on the marketing surface. The gradient is the brand's emotional voice; the solid pink-red is its everyday voice.

Typography is **SF Pro Display** for headlines and **SF Pro Text** for body — Apple's standard duo, with display sizes opting into tighter optical metrics. Headlines run at the brand's signature tight tracking (`-0.025em` at 80px), body sits at 17px (Apple's standard, never 16px) with a 1.5 line-height. Track titles in playlist rows use SF Pro Text 16/500; track durations are SF Pro Text 14/500 with `tabular-nums` (`tnum`) opted in so the duration column aligns vertically. Code (the rare API-doc moment) uses SF Mono.

Surfaces breathe through **glassy material depth**. The signature elevation move is the **vibrancy panel** — a `rgba(29,29,31,0.72)` surface with `backdrop-filter: blur(40px) saturate(180%)`, which on browsers that support it produces the iOS/macOS frosted-glass effect of background colors bleeding subtly through. The global nav uses this same effect at `rgba(0,0,0,0.72) + blur(40px)` — albums and gradients above can be dimly seen through it as they scroll. Cards use `12px` radius standard, `16px` for featured, `8px` for album-art thumbnails, `24px` for hero cards — radii scale up with surface importance. Buttons are **full-pill** (`9999px`), reflecting Apple's broader system convention.

Page rhythm runs **album-mosaic hero → editorial album-grid section → glassy feature card section → editorial album-grid section → CTA hero with gradient → footer**. The editorial album-grid is the system's beating heart: 6-up on desktop, 4-up on tablet, 2-up on mobile, with each tile a play-on-hover album cover. The Now Playing bar is the persistent companion — fixed at bottom-0, glass-translucent, `80px` tall, present on every page once playback starts. The whole system feels like a streaming app that knows it's also a marketing site.

**Key Characteristics:**
- Signature pink-red brand `#fa233b` calibrated as Apple Music's emotional voice — distinct from system red
- Two-stop brand gradient `linear-gradient(135deg, #fa233b → #ff7b00)` for hero wordmarks and primary CTAs
- Pure-black `#000000` canvas with raised `#1d1d1f` panels — Apple media-property convention
- Hero **album-art mosaic** — 4×3 grid of covers auto-scrolling at half-speed, black-faded overlay at bottom
- SF Pro Display + SF Pro Text monolithic — body always at 17px, never 16
- Glassy material depth: `backdrop-filter: blur(40px) saturate(180%)` on nav, panels, modals
- Full-pill CTAs (9999px radius) reflect Apple system convention
- Album-art thumbnails at `8px` radius, scale `1.02` on hover with play-button overlay
- Track rows with tabular-num durations for column-aligned time
- Persistent Now Playing bar at bottom of viewport — `80px` glass surface
- "DOLBY ATMOS" / "LOSSLESS" / "SPATIAL AUDIO" badge typography in pink-red micro-uppercase
- Apple's signature `cubic-bezier(0.32, 0.72, 0, 1)` smooth-out easing for hover transitions

## 2. Color Palette & Roles

### Primary
- **Black** (`#000000`): The default page canvas. Pure black, never tinted. Apple media-property convention.
- **Charcoal Panel** (`#1d1d1f`): Raised card surface — the same soft-charcoal used across Apple TV+ and macOS dark mode. Reads as black on first glance but provides visible card-from-canvas separation.
- **White** (`#ffffff`): Primary text on black, also the on-brand text color over pink-red.
- **Brand Pink-Red** (`#fa233b`): The signature Apple Music color. Used on filled CTAs, eyebrows, links, "Apple Music Exclusive" badges, and the play-button fill. Never paired with a competing accent hue.

### Brand & Dark
- **Brand Pink-Red** (`#fa233b`): Primary brand action color.
- **Brand Hover** (`#e51e34`): Pink-red darkened ~10% for hover/active states on filled CTAs.
- **Brand Active** (`#c8172c`): Pressed state — darker still.
- **Brand Deep** (`#cc1729`): Used for emphasis text where AAA contrast is needed on light surfaces (rare on Apple Music — most surfaces are dark).
- **Brand Glow** (`rgba(250,35,59,0.40)`): Focus ring + selected state glow.
- **Brand Soft** (`rgba(250,35,59,0.16)`): Selected state background, badge-pill background.

### Accent — The Brand Gradient
- **Brand Gradient (linear)** `linear-gradient(135deg, #fa233b 0%, #ff7b00 100%)` — pink-red to warm-orange. Used on hero wordmarks, primary CTAs, and the Apple Music wordmark on marketing pages.
- **Brand Gradient (radial)** `radial-gradient(circle at top, #ff007a 0%, #fa233b 50%, transparent 100%)` — used as a hero background for genre-specific landing pages (Hip-Hop, Electronic).
- The gradient stops are not interchangeable. `#ff7b00` (warm orange) appears only as the second gradient stop — never as a standalone accent.

### Interactive
- **Link** (`#fa233b`): Inline link == brand pink-red.
- **Link Hover** (`#ff4d63`): Lighter pink for visibility on dark canvas.
- **Selected** (`rgba(250,35,59,0.16)` background + `#fa233b` text): Selected playlist row, selected nav item.
- **Play Button**: pink-red `#fa233b` filled circle with white play-fill icon, springy press animation.
- **Disabled**: text `rgba(255,255,255,0.32)` + bg `rgba(255,255,255,0.04)`.

### Neutral Scale
- **Text** (`#ffffff`): Primary body and headings on dark.
- **Text Soft** (`rgba(255,255,255,0.78)`): Secondary metadata, artist names below album titles.
- **Text Faint** (`rgba(255,255,255,0.56)`): Captions, hint text, placeholder.
- **Text Disabled** (`rgba(255,255,255,0.32)`): Disabled state.
- **Border** (`rgba(255,255,255,0.10)`): Default hairline on cards, panels, nav.
- **Border Soft** (`rgba(255,255,255,0.06)`): Track-row separator, lightest divider.
- **Border Strong** (`rgba(255,255,255,0.18)`): Form-input emphasized border.

### Surface & Borders
- **Surface** (`#1d1d1f`): Default card surface. Matches Apple TV+ panel.
- **Surface Glass** (`rgba(29,29,31,0.72)` + `backdrop-filter: blur(40px) saturate(180%)`): The signature material — a translucent panel that lets album-art and gradients above show through subtly. Used on global nav, modal backgrounds, glassy feature cards.
- **Surface Glass Light** (`rgba(255,255,255,0.08)` + `backdrop-filter: blur(20px)`): A lighter glass for play-button overlays on album art.
- **Surface Elevated** (`#2a2a2c`): Elevated card on a panel — popovers, tooltips, dropdowns.

### Shadow Colors
Apple Music shadows are **pure-black** (no tint), reflecting the pure-black canvas. The system reaches for **deep, atmospheric shadows** rather than crisp drop shadows — albums float on `0 8px 24px rgba(0,0,0,0.50)`, modals descend from `0 24px 56px rgba(0,0,0,0.80)`. Shadows are darker and more emphatic than light-mode design systems require — necessary for visible elevation against an already-black canvas.
- **Album** `rgba(0,0,0,0.50)` — 24px Y8 spread for album-art tiles
- **Album Hover** `rgba(0,0,0,0.60)` — 40px Y16 spread on hover
- **Card** `rgba(0,0,0,0.40)` — 16px Y4 spread for content cards
- **Elevated** `rgba(0,0,0,0.60)` — 32px Y12 for popovers, dropdowns
- **Modal** `rgba(0,0,0,0.80)` — 56px Y24 for full dialogs
- **Glow Pink** `rgba(250,35,59,0.40)` — 32px halo on selected/focused brand surfaces

### Semantic
Apple Music inherits SF system semantic colors with dark-mode adjusted values:
- **Success Green** (`#3aaa50`) — confirmation, "Added to library"
- **Warning Amber** (`#ff9f0a`) — caution
- **Danger Red** (`#ff453a`) — error, "Remove" destructive (deliberately distinct from brand pink-red)
- **Info Blue** (`#0a84ff`) — informational, system-blue convention

## 3. Typography Rules

### Font Family

- **Primary (Display)**: `"SF Pro Display", "SF Pro", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif` — Apple's flagship display family, used for headlines 20px+.
- **Primary (Text)**: `"SF Pro Text", "SF Pro", -apple-system, ...` — Apple's body family, used below 20px. The optical metrics differ from SF Pro Display: tighter spacing on display, more open spacing on text.
- **Mono**: `"SF Mono", Menlo, Consolas, monospace` — for inline code in support docs (rare on the marketing surface).
- **Open-source substitute**: SF Pro is Apple-licensed. Reasonable substitutes: **Inter Display + Inter** (closest free analog with optical sizes), **Geist + Geist Sans**, **Söhne**. If substituting, verify tabular-num support (`font-variant-numeric: tabular-nums`) for track durations.
- **OpenType features**: `kern` always on; `liga` on for body, off for tabular contexts; `tnum` on for track durations and pricing; `ss01` (alt 6/9) and `cv11` (alt zero with slash) optional, used in editorial moments where typographic discipline reads.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | SF Pro Display | 80 | 700 | 1.05 | -0.025em | kern | Flagship marketing hero — "Listen now" |
| display-large | SF Pro Display | 56 | 700 | 1.07 | -0.022em | kern | Genre / playlist hero |
| h1 | SF Pro Display | 40 | 700 | 1.1 | -0.02em | kern | Article-level |
| h2 | SF Pro Display | 32 | 700 | 1.15 | -0.015em | kern | Major section |
| h3 | SF Pro Display | 24 | 600 | 1.2 | -0.01em | kern | Subsection |
| h4 | SF Pro Display | 20 | 600 | 1.25 | -0.005em | kern | Card title |
| h5 | SF Pro Text | 17 | 600 | 1.3 | 0 | kern | Minor heading — uses Text not Display |
| body-large | SF Pro Text | 19 | 400 | 1.5 | 0 | kern, liga | Hero intro paragraph |
| body-md | SF Pro Text | 17 | 400 | 1.5 | 0 | kern, liga | Default body — Apple convention (never 16) |
| body-strong | SF Pro Text | 17 | 600 | 1.5 | 0 | kern, liga | Emphasized body |
| body-sm | SF Pro Text | 14 | 400 | 1.45 | 0 | kern, liga | Metadata, secondary |
| label | SF Pro Text | 13 | 600 | 1.3 | 0 | kern | Form labels |
| eyebrow | SF Pro Text | 12 | 700 | 1.3 | 0.06em | kern, uppercase | Category eyebrow — often gradient-text |
| button | SF Pro Text | 17 | 600 | 1.2 | -0.005em | kern | All CTA labels — 17px Apple convention |
| button-sm | SF Pro Text | 14 | 600 | 1.2 | 0 | kern | Compact buttons |
| track-title | SF Pro Text | 16 | 500 | 1.3 | 0 | kern | Track row in playlist |
| track-artist | SF Pro Text | 14 | 400 | 1.3 | 0 | kern | Track artist below title |
| duration | SF Pro Text | 14 | 500 | 1.3 | 0 | tnum | Tabular numerals for track durations |
| caption | SF Pro Text | 12 | 400 | 1.4 | 0 | kern, liga | Captions, footnotes |
| legal | SF Pro Text | 11 | 400 | 1.4 | 0 | kern | Legal fine print |

### Principles

- **17px is body. Never 16.** Apple's convention since 2015 — body text on Apple media properties always renders at 17/1.5. This is the strongest typographic signal of "an Apple product".
- **SF Pro Display vs SF Pro Text is size-driven.** Above 20px, display. Below 20px, text. The optical metrics differ — display has tighter spacing, text has more open spacing. Never use Display at 14px or below; never use Text at 32px or above.
- **Negative tracking on display sizes** — hero runs `-0.025em`, dropping toward `0em` at body. Buttons get a slight `-0.005em` for compactness.
- **Eyebrows use brand-gradient text.** The 12px uppercase eyebrow over hero headlines uses `background: linear-gradient(135deg, #fa233b, #ff7b00); -webkit-background-clip: text; color: transparent;` — the gradient is the eyebrow's signature.
- **Tabular numerals for durations.** Track durations and any time-based numerical column must opt into `font-variant-numeric: tabular-nums` so the column aligns vertically.
- **Body white at full opacity.** `#ffffff` for primary text. `rgba(255,255,255,0.78)` for secondary metadata (artist names below track titles). Don't dim primary text — Apple's dark-mode discipline relies on full-white for headers/body.
- **Track-title at 16/500.** Slightly smaller than body (17) and slightly heavier (500 vs 400) — the typographic signature of an Apple Music playlist row.

## 4. Component Stylings

### Buttons

**`button-primary` — "Try it free"**
- Background `#fa233b`, text `#ffffff`, border none, radius `9999` (full-pill), padding `14px 28px`, font 17/600. Hover: `bg #e51e34`. Active: `transform: scale(0.96)`. Transition: `all 200ms cubic-bezier(0.32, 0.72, 0, 1)` (Apple's signature smooth-out).

**`button-primary-gradient` — "Start your free trial"**
- Background `linear-gradient(135deg, #fa233b 0%, #ff7b00 100%)`, text `#ffffff`. Hover: shadow `0 0 32px rgba(250,35,59,0.40)` glow. Same radius, padding, press animation.

**`button-secondary` — "Learn more"**
- Background `rgba(255,255,255,0.12)`, text `#ffffff`. Hover: `bg rgba(255,255,255,0.20)`. Glass-translucent button — works over both solid panels and album-art backgrounds.

**`button-tertiary` — Inline CTA**
- Background transparent, text `#fa233b`, no border, padding `14px 12px`. Trailing chevron `›` translates `4px` right on hover.

**`button-play` — Circular Play Button**
- Background `#fa233b`, icon white play-fill 24px, border none, radius `9999`, size `56`. Springy press animation: `scale(1) → scale(0.92) over 100ms → scale(1.05) over 200ms → scale(1)` over 100ms. Used in hero, Now Playing bar, and on album-card hover overlays.

**`button-play-on-art` — Glass Play Overlay**
- Background `rgba(0,0,0,0.6)`, icon white play-fill 20px, radius `9999`, size `48`, `backdrop-filter: blur(20px)`. Appears centered over album art on hover-state, fades in from opacity 0 over 200ms.

### Cards

**`card-album` — Album/Playlist Tile**
- Background transparent (pure album art), radius `12` (outer), art-radius `8`, art-shadow `0 8px 24px rgba(0,0,0,0.50)`. Title below art at 16/500 white, artist at 14/400 text-soft. Hover: `scale(1.02)` + play-button-overlay fades in over 200ms. The system's most-used component.

**`card-feature` — Marketing Feature Card**
- Background `#1d1d1f`, radius `16`, padding `32px`, border `1px solid rgba(255,255,255,0.06)`. Used on the Apple Music marketing surface for "Spatial Audio" / "Lossless" / "Apple Music Live" explainer cards.

**`card-glass` — Glassy Vibrancy Panel**
- Background `rgba(29,29,31,0.72)`, radius `16`, padding `32px`, `backdrop-filter: blur(40px) saturate(180%)`, border `1px solid rgba(255,255,255,0.08)`. Used over album-art mosaic backgrounds — material vibrancy effect, the signature Apple iOS depth move.

**`card-now-playing` — Now Playing Card**
- Background `#1d1d1f`, radius `12`, padding `20px`. Album art at `88px` size, `8px` radius, shadow `0 12px 32px rgba(0,0,0,0.60)`. Track title above artist; scrubber + play/pause/skip controls below.

**`card-track-row` — Playlist Track Row**
- Background transparent (default), `rgba(255,255,255,0.06)` on hover, radius `8`, padding `8px 12px`. Layout: `[index 24px] [art 40px] [title/artist column flex] [album column 200px] [duration column 60px tabular] [more-menu 24px]`. The system's densest information surface.

### Badges & Pills

**`badge-pill` — "Apple Music Exclusive"**
- Background `rgba(250,35,59,0.16)`, color `#fa233b`, radius `9999`, padding `4px 12px`, font 12/600. Pink-on-soft-pink chip.

**`badge-spatial` — "DOLBY ATMOS"**
- Background transparent, color `#fa233b`, border `1px solid #fa233b`, radius `4`, padding `2px 6px`, font 10/700 uppercase. The Apple Music quality-badge signature — uppercase 10px bordered pink-red micro-pill on track rows.

**`badge-lossless` — "LOSSLESS"**
- Same shell as spatial-badge but in white border + white text on dark surfaces. Quality-tier signaling.

### Inputs

**`input-search` — Top-bar Global Search**
- Background `rgba(255,255,255,0.08)`, border none, radius `9999` (full-pill), padding `10px 16px 10px 40px`. Magnifying-glass icon 16px, white-soft. Placeholder `rgba(255,255,255,0.56)`. Focus: `bg rgba(255,255,255,0.12)` + 3px pink-red glow ring.

**`input-text` — Form Input**
- Background `rgba(255,255,255,0.08)`, border `1px solid rgba(255,255,255,0.10)`, radius `8`, padding `12px 16px`. Focus: border `1px solid #fa233b` + 3px pink-red glow ring.

### Navigation

**`global-nav` — Glass Top Bar**
- Background `rgba(0,0,0,0.72)`, `backdrop-filter: blur(40px) saturate(180%)`, height `64`, border-bottom `1px solid rgba(255,255,255,0.06)`, sticky on scroll. Items: Apple Music wordmark left (with brand-gradient), nav (Listen Now / Browse / Radio / Library / Search) center, utility (Try Free pill CTA / Sign in) right.

**`hero-mosaic` — Album-Art Hero Background**
- CSS grid `4-col x 3-row` mosaic of album-art tiles, each tile `aspect-ratio: 1`. Auto-scrolls vertically at `0.4px/frame` (60s full cycle), paused on hover. Overlay gradient `linear-gradient(180deg, transparent 0%, #000 80%)` fades the bottom into pure black for headline legibility.

**`now-playing-bar` — Persistent Player**
- Background `rgba(29,29,31,0.92)`, `backdrop-filter: blur(40px)`, fixed `bottom 0 left 0 right 0`, height `80`, border-top `1px solid rgba(255,255,255,0.06)`. Layout: `[art 56px + title/artist] left | [skip-back / play / skip-forward / scrubber-track] center | [volume / queue / device] right`. Visible only when playback active.

**`footer` — Charcoal Footer**
- Background `#000000`, color `#ffffff`, padding `64px 0 32px`. Multi-column site index + Apple corporate footer. Tiny — Apple footers are deliberately quiet.

## 5. Layout Principles

### Spacing System
Base unit: 4px. Scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160`. Components use 16/24/32; sections use 80/120/160. Album grids use a `24px` gap between tiles.

### Grid & Container
Max page width: `1280px` with `40px` outer gutters on desktop, `24px` tablet, `16px` mobile. Hero sections break the container with `100vw` album-mosaic backgrounds. Editorial album grids run 6-up on desktop (`minmax(200px, 1fr)`), 4-up tablet, 2-up mobile.

### Whitespace Philosophy
Apple Music is **album-art-density-tolerant** — the album-grid sections pack 6×3 = 18 covers per visible viewport, but each cover is a brand surface in itself. The whitespace philosophy is "let the art carry the visual weight; let the chrome be quiet". Section spacing is 80–120px between editorial bands.

### Section Cadence
Page rhythm runs **album-mosaic hero → editorial album-grid (Top Hits) → glassy feature card section (Spatial Audio / Lossless explainer) → editorial album-grid (Genre — Hip-Hop / Pop / etc) → CTA gradient hero ("Start your free trial") → footer**. The two-album-grid sandwich around a feature-card explainer is the signature marketing flow.

## 6. Shapes & Radius Scale

- **Micro 2px** — internal divider chips (rare)
- **Sm 6px** — secondary buttons (when not full-pill)
- **Standard 8px** — inputs, album-art thumbnails, track rows
- **Card 12px** — default cards, Now Playing card, panels
- **Featured 16px** — feature cards, glass panels, modals
- **Hero 24px** — hero cards with album mosaic
- **Pill 9999px** — primary CTAs, secondary CTAs, search input, chips, play buttons

Apple Music heavily favors **full-pill (9999px)** for actions and **moderate radii (8–16px)** for surfaces. The system rarely uses sharp corners — even the smallest UI elements (`badge-spatial` at 4px) have soft corners.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | `box-shadow: none`, hairline `1px solid rgba(255,255,255,0.10)` | Default panels, track rows |
| 1 | `0 4px 16px rgba(0,0,0,0.40)` | Content card, dropdown |
| 2 | `0 8px 24px rgba(0,0,0,0.50)` | Album-art tile (default state) |
| 3 | `0 12px 32px rgba(0,0,0,0.60)` | Now Playing card, elevated card |
| 4 | `0 16px 40px rgba(0,0,0,0.60)` | Album-art tile hover |
| 5 | `0 24px 56px rgba(0,0,0,0.80)` | Modal, full dialog |
| Glass | `backdrop-filter: blur(40px) saturate(180%)` + `1px solid rgba(255,255,255,0.08)` border | Vibrancy panels — not a shadow but a material depth substitute |

### Shadow Philosophy

Apple Music shadows are **deep-and-pure-black**, reflecting the pure-black canvas. Against a black background, traditional drop shadows are invisible — so the system reaches for *deeper alphas* (0.40 → 0.80) and *wider spreads* (16–56px Y) to produce visible elevation. Album-art tiles in particular cast emphatic shadows because the album cover is the primary visual content and the shadow signals "this is a real, physical-feeling object".

The signature elevation move is **vibrancy via backdrop-filter** — translucent panels that let album-art and gradients above show through with a subtle blur and saturation boost. This is Apple's iOS/macOS material design language, and Apple Music's web faithfully reproduces it where browsers support `backdrop-filter`. On unsupported browsers, the fallback is solid `#1d1d1f` with no transparency.

## 8. Interaction & Motion

### Easing Curves
- `ease-standard: cubic-bezier(0.4, 0, 0.2, 1)` — universal default
- `ease-emphasized: cubic-bezier(0.32, 0.72, 0, 1)` — **Apple's signature smooth-out curve**, used on hover transitions, modal opens, and most interactive feedback
- `ease-spring: cubic-bezier(0.5, 1.35, 0.6, 1)` — springy overshoot for play-button press

### Duration Buckets
- `duration-fast: 100ms` — focus rings, micro-state shifts, play-button press first phase
- `duration-standard: 200ms` — button hovers, card hover scales, play-button second phase
- `duration-slow: 300ms` — modal opens, panel expansions
- `duration-page: 500ms` — page fade-ins
- `duration-album-scroll: 60s` — full mosaic auto-scroll cycle

### Per-Component Micro-States
- **Album card hover**: `scale(1) → scale(1.02)` over 200ms ease-emphasized + play-button-overlay fades in (`opacity 0 → 1` + `scale(0.8 → 1)`) over 200ms.
- **Play button press**: springy three-phase animation — `scale(1) → scale(0.92)` over 100ms → `scale(1.05)` over 200ms → `scale(1)` over 100ms. The signature "tap responds" feedback.
- **Button hover**: bg shifts to brand-hover (`#e51e34`) over 200ms ease-emphasized. Active: `scale(0.96)` press.
- **Track row hover**: bg shifts from transparent to `rgba(255,255,255,0.06)` over 200ms. Hover also fades-in a play-icon overlay over the track index number.
- **Scrubber drag**: thumb `scale(1) → scale(1.5)` on grab, follows pointer.
- **Hero mosaic auto-scroll**: tile grid translates Y at `0.4px/frame` (~24px/sec at 60fps), 60s cycle, paused on hover. CSS keyframes loop indefinitely.
- **Modal open**: scrim fades `0 → 0.72` over 300ms; modal scales `0.94 → 1` + opacity `0 → 1` over 300ms ease-emphasized.
- **Glass-panel reveal**: `backdrop-filter: blur(0px) → blur(40px)` over 200ms when panel mounts.

### Reduced Motion Strategy
Respects `prefers-reduced-motion: reduce`:
- Hero mosaic auto-scroll halted — tiles stay static
- Album-card scale-on-hover degrades to opacity dim (`0.95 → 1`)
- Play-button springy press compresses to 100ms linear ease
- Modal scale-in disabled — modal appears at scale-1 with opacity fade only
- Page fades preserved (essential for FOUT masking)

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)
- Text white `#ffffff` on bg `#000000` — **21.0:1 (AAA)**
- Text white on panel `#1d1d1f` — **17.5:1 (AAA)**
- Text-soft `rgba(255,255,255,0.78)` on bg `#000000` — **13.6:1 (AAA)**
- Text-faint `rgba(255,255,255,0.56)` on bg `#000000` — **8.6:1 (AAA at body)**
- White `#ffffff` on brand pink-red `#fa233b` — **4.8:1 (AA at body)**
- Brand `#fa233b` on bg `#000000` — **5.8:1 (AA at body, AAA at large)**
- Text on glass surface (white on `rgba(29,29,31,0.72)` over black) — **~12.0:1 (AAA)**

### Focus Indicators
Universal: `3px solid rgba(250,35,59,0.40)` ring with `2px` offset — pink-red glow ring. On glass surfaces, the ring reads through the blur. Buttons add the glow ring; inputs use a solid 1px border replacement + 3px outer glow.

### ARIA Patterns
- Track rows: `role="row"` + `aria-rowindex`; the play-button column uses `aria-label="Play [Track Title] by [Artist]"`
- Scrubber: `role="slider"` + `aria-valuemin="0"` + `aria-valuemax="[duration in seconds]"` + `aria-valuenow="[current]"` + `aria-valuetext="2 minutes 13 seconds"`
- Now Playing bar: `role="region"` + `aria-label="Now Playing"`
- Album carousel: `role="region"` + `aria-roledescription="carousel"`
- Hero mosaic: `aria-hidden="true"` (decorative — content is the headline above it)

### Keyboard Navigation
Tab order: skip-link → wordmark → primary nav (Listen Now / Browse / Radio / Library / Search) → utility (Try Free CTA / Sign in) → main content → Now Playing bar (when active) → footer. Spacebar plays/pauses (universal media key); arrow keys scrub; J/K/L for skip-back/play-pause/skip-forward (keyboard shortcuts). Esc closes modals and dismisses search overlay.

### Screen Reader Hints
- Album-art images use `alt="[Album Title] by [Artist]"` — never empty alt
- Decorative gradients and the hero mosaic use `role="presentation"` + `aria-hidden="true"`
- Track durations include `aria-label="2 minutes 13 seconds"` alongside the visual `2:13`
- Brand-gradient eyebrow text uses standard text + the gradient via CSS `background-clip: text` — text is selectable and readable by SR

### Reduced Motion
Honored — see §8 for full degradation matrix. Critical: the hero mosaic auto-scroll *must* halt for vestibular-affected users.

## 10. Responsive Behavior

### Breakpoints
| Name | Min Width | Notes |
|------|-----------|-------|
| mobile | 0 | 2-up album grid, hamburger menu |
| tablet | 600 | 4-up album grid |
| desktop | 900 | 6-up album grid, full nav visible |
| wide | 1280 | Max content width |
| ultra | 1440 | Larger gutter, hero `100vw` |

### Touch Targets
Minimum 44×44px. Play buttons in track rows are 44×44 hit-area even when icon is 24×24 visual. Album-art tiles minimum 160×160 on mobile to support tap.

### Collapsing Strategy
- **Global nav**: collapses to hamburger menu below 900px. Search becomes a magnifying-glass icon that expands inline.
- **Album grid**: 6-up → 4-up → 2-up (never 1-up — Apple Music maintains 2-column even on smallest mobile).
- **Hero mosaic**: 4×3 grid → 3×3 → 2×3 grid, scroll speed reduces proportionally.
- **Now Playing bar**: collapses to 56px height on mobile, controls compress to play-pause + skip-forward only.
- **Track row**: album column hidden below 900px; only title/artist + duration visible.
- **Feature card**: 50/50 art-and-copy split → stacked on mobile.
- **Footer**: multi-column → accordion below 600px.

### Image Behavior
- Album art: `aspect-ratio: 1` (always square), `object-fit: cover`, native `loading="lazy"` except hero
- High-DPI: `srcset` with `1x / 2x / 3x` (Apple Music API serves up to 3000×3000 art)
- Mosaic tiles: same square aspect, lower resolution variants (300×300 sufficient for 200px display)
- All decorative gradients via CSS, never images

### Container Queries
Used on **album-card** to switch title size from 16/500 → 14/500 when card is narrower than 180px (e.g., when nested inside a 8-up grid on a wide carousel).

## 11. Content & Voice

### Tone
Apple Music's voice is **confident-cool-curated** — knowledgeable about music without being snobby, intimate without being chummy. The brand explicitly avoids "marketing speak" and gravitates toward editorial precision: every featured playlist has a hand-written editorial blurb; genre pages read like Pitchfork reviews, not like e-commerce category pages.

### Microcopy Patterns

**Button verbs:**
- Primary: "Try it free", "Listen now", "Start free trial", "Subscribe", "Open in Music"
- Secondary: "Learn more", "Open in Music app", "View all songs"
- Tertiary: "View all artists ›", "See all genres ›", "More from this artist ›"
- Play actions: "Play", "Pause", "Skip", "Add to Library", "Add to Playlist"

**Error message recipe:** Quiet and helpful. "Couldn't load this playlist. Check your connection and try again." Never alarmist.

**Success confirmation:** Brief and definitive. "Added to your Library." No exclamation points; the action speaks for itself.

### Empty States
Apple Music empty states are **editorial-helpful**. An empty Library says "Your Library is empty. Add a song or album from anywhere in Music." with a CTA "Browse" — informational, never illustrated mascot.

### CTA Verb Conventions
- "Try it free" — for non-subscribers
- "Open in Music" — for the deep-link to the macOS/iOS app from the web
- "Listen now" — the master CTA on the marketing hero
- "Start your free trial" — for subscription conversion moments
- "Get the app" — for download flows
- "View all" — for editorial expansion ("View all songs", "View all artists")

### Voice Anchors
- Use second person ("you'll discover").
- Lead with the **listening experience**, not the product feature. "Hear it the way the artist intended" not "Spatial Audio with Dolby Atmos".
- Reference real artists, songs, and albums. Apple Music's editorial voice is calibrated by featuring specific artists by name in marketing copy.
- Sentence-case for headlines (Apple convention) — "Listen now", not "Listen Now" or "LISTEN NOW".
- Short headlines, longer body. Hero displays land at 2–4 words ("Listen now", "Hear the difference", "100 million songs"); body intro is 1–2 sentences expanding the headline.

## 12. Dark Mode & Theming

**Forced dark — no light variant offered on the marketing site.**

Apple Music's marketing surface (music.apple.com/us/browse, apple.com/apple-music) renders dark across both system light and dark modes. This is intentional: the brand's emotional register is built around **album art on a black canvas** — light mode would force the album-art tiles onto a white ground, which dramatically reduces the perceived saturation and depth of the artwork.

The Apple Music *application* (iOS, macOS, web app at music.apple.com once signed in) does respect `prefers-color-scheme` and offers a light-theme variant for users who prefer it. The marketing pages, however, are dark-locked.

**Light-mode token map (for the in-app surface, not used on marketing)**: bg `#ffffff`, panel `#f5f5f7`, text `#000000`, brand `#fa233b` (unchanged), border `rgba(0,0,0,0.10)`. Use only inside the application surface.

## 13. Lineage & Influences

Apple Music's design language inherits from the **Apple media-property aesthetic** established by Apple TV+ and the iTunes Store — pure-black canvas, soft-charcoal raised panels, glass vibrancy, SF Pro everywhere. The pink-red `#fa233b` is the brand's distinguishing chromatic mark; everything else (typography, surfaces, motion) is shared Apple system DNA.

The album-art mosaic hero is borrowed conceptually from **iTunes' early visualizer aesthetics** and the **MTV-era "videos cube"** — kinesthetic backgrounds where the content (the album cover) carries the visual weight. The 4×3 auto-scrolling grid is Apple Music's signature take, and competitors have adopted it (Tidal, Spotify) but rarely as cleanly.

The **glass vibrancy** material (backdrop-filter: blur(40px) saturate(180%)) traces directly to iOS 7's design language (2013) and macOS Big Sur (2020) — Apple's commitment to translucent depth as a substitute for skeuomorphic shadows. The Apple Music web faithfully reproduces this in the browsers that support it.

What Apple Music rejects: gradient-as-surface (the brand uses gradients only for hero wordmarks and CTA fills, never as a section background — that's Spotify territory), illustrated heroes (Apple's media properties are art-led: album covers, movie posters, never illustrated mascots), and pastel decorative palettes (the system is monolithically pink-red on black).

**Named influences:**
- **Apple TV+** — soft-charcoal panel `#1d1d1f`, glass-translucent global nav, dark-only marketing
- **iOS 7 (Jony Ive era)** — vibrancy material, full-pill button radii, soft-springy press feedback
- **iTunes Store (mid-2010s)** — album-art-led editorial layouts, track-row density
- **Apple SF Pro family** — typographic system across all properties
- **Pitchfork** — editorial voice (intimate, knowledgeable, artist-first)

## 14. Do's and Don'ts

**Do**
- Use the signature pink-red `#fa233b` for primary CTAs, eyebrows, links, and Apple Music Exclusive markers — never substitute red.
- Apply the brand gradient `linear-gradient(135deg, #fa233b → #ff7b00)` to hero wordmarks and primary CTAs only.
- Render on pure-black `#000000` canvas with `#1d1d1f` raised panels — match Apple TV+ surface convention.
- Lead heroes with album-art mosaics (4×3 grid auto-scrolling) — the album cover is the brand.
- Use SF Pro Display above 20px and SF Pro Text below; body text is always 17px.
- Apply `backdrop-filter: blur(40px) saturate(180%)` to global nav, modal backgrounds, and glassy feature cards.
- Lock primary CTAs and play buttons to full-pill (9999px) radius.
- Use SF Pro Text 16/500 for track titles and 14/500 with `tnum` for durations — the Apple Music playlist signature.
- Apply springy 3-phase press animation to play buttons (`scale(1) → 0.92 → 1.05 → 1`).
- Honor `prefers-reduced-motion` — halt the hero mosaic auto-scroll for vestibular-affected users.
- Use sentence-case for headlines ("Listen now", not "Listen Now").
- Reference specific artists, songs, and albums in marketing copy — editorial voice is brand voice.

**Don't**
- Don't introduce a second saturated accent color (orange beyond gradient stop, blue, green) — the system is monolithically pink-red.
- Don't substitute Inter, Geist, or any other sans-serif unless absolutely necessary; SF Pro is the brand's typographic signature.
- Don't render on any canvas other than black — Apple Music marketing is dark-only.
- Don't use illustrated mascots or stock-photo heroes — album art is the brand's photography.
- Don't body-text below 17px (Apple's convention) — even captions don't drop below 12px.
- Don't pure-red the brand color — `#ff453a` is the system destructive-action red, distinct from brand `#fa233b`.
- Don't drop body text opacity below `rgba(255,255,255,0.78)` — that's reserved for soft metadata only.
- Don't square-corner buttons or chips — the system is pill-or-rounded everywhere.
- Don't use the brand gradient as a section background — only for wordmarks and CTAs.
- Don't apply `backdrop-filter` without a fallback solid color — older browsers need `#1d1d1f` solid.
- Don't tab-order around the Now Playing bar — it must be focusable and keyboard-controllable.
- Don't auto-scroll the hero mosaic without honoring `prefers-reduced-motion: reduce`.

## 15. Agent Prompt Guide

### Quick Color Reference
```
bg: #000000
panel: #1d1d1f
text: #ffffff
text-soft: rgba(255,255,255,0.78)
brand: #fa233b
brand-hover: #e51e34
brand-gradient: linear-gradient(135deg, #fa233b 0%, #ff7b00 100%)
border: rgba(255,255,255,0.10)
glass: rgba(29,29,31,0.72) + backdrop-filter blur(40px)
```

### Example Component Prompts

1. *"Create a hero section in Apple Music style: pure-black `#000000` canvas, 4×3 grid of album-art tiles auto-scrolling vertically at 0.4px/frame as background, `linear-gradient(180deg, transparent 0%, #000 80%)` overlay fading the bottom, headline "Listen now" at 80px in SF Pro Display 700 with `-0.025em` tracking, brand-gradient eyebrow "100 MILLION SONGS" at 12/700 uppercase with 0.06em tracking using `linear-gradient(135deg, #fa233b → #ff7b00)` text, and a primary CTA "Try it free" filled in `#fa233b` full-pill (9999px radius)."*

2. *"Design an album-card grid in Apple Music style: 6-up grid on desktop (`minmax(200px, 1fr)`), 24px gap. Each tile: square album-art at 8px radius with shadow `0 8px 24px rgba(0,0,0,0.50)`, title below at SF Pro Text 16/500 white, artist below at 14/400 `rgba(255,255,255,0.78)`. Hover: `scale(1.02)` over 200ms ease-emphasized + glass play-button overlay (rgba(0,0,0,0.6) + blur(20px), 48px circle, white play-fill icon) fades in centered over the art."*

3. *"Build a glassy feature card in Apple Music style: `rgba(29,29,31,0.72)` background with `backdrop-filter: blur(40px) saturate(180%)`, 16px radius, 32px padding, 1px border `rgba(255,255,255,0.08)`. Title in SF Pro Display 32/700 white with `-0.015em` tracking, "DOLBY ATMOS" badge at 10/700 uppercase pink-red bordered, body in SF Pro Text 17/400 `rgba(255,255,255,0.78)`."*

4. *"Render a track row in Apple Music style: transparent background hovering to `rgba(255,255,255,0.06)`, 8px radius, 8px 12px padding, layout `[index 24px][art 40px square 4px radius][title-artist column flex][album column 200px][duration 60px tabular]`. Track title SF Pro Text 16/500 white, artist 14/400 text-soft, duration 14/500 with `font-variant-numeric: tabular-nums`. Add a "DOLBY ATMOS" badge inline before the duration when applicable."*

5. *"Create a Now Playing bar in Apple Music style: fixed bottom 0, full width, height 80px, `rgba(29,29,31,0.92)` background with `backdrop-filter: blur(40px)`, border-top `1px solid rgba(255,255,255,0.06)`. Layout: left = album art 56px + track title/artist; center = skip-back / play-button (pink `#fa233b` filled circle, 56px) / skip-forward + scrubber-track with `tabular-nums` time labels; right = volume + queue + device-cast icons."*

6. *"Design a primary CTA with brand gradient in Apple Music style: `linear-gradient(135deg, #fa233b 0%, #ff7b00 100%)` background, white text in SF Pro Text 17/600 with `-0.005em` tracking, full-pill (9999px) radius, padding 14px 28px. Hover: `box-shadow: 0 0 32px rgba(250,35,59,0.40)` glow. Active: `transform: scale(0.96)` press."*

### Iteration Guide

1. **Start with the canvas.** Pure-black `#000000`, never tinted off-black. The single most-recognizable Apple media-property cue.

2. **Switch to SF Pro family.** Display above 20px, Text below. Set body to 17/1.5 — the Apple body convention. Substitutes: Inter Display + Inter, Geist + Geist Sans.

3. **Move from solid red to brand pink-red `#fa233b`.** Slightly pink-shifted from system red — calibrated as Apple Music's emotional voice.

4. **Pill-shape your CTAs.** Apple Music buttons are full-pill (9999px). If your design has 8px-radius rectangle buttons, you're echoing SAP — not Apple Music.

5. **Add glass vibrancy.** Apply `backdrop-filter: blur(40px) saturate(180%)` to global nav and feature panels over album-art mosaics. Provide a solid fallback (`#1d1d1f`) for unsupported browsers.

6. **Replace illustrated heroes with album-art mosaics.** A 4×3 grid of real album covers, auto-scrolling vertically at `0.4px/frame`, with a black-fade overlay at the bottom. The album cover is the brand.

7. **Add the springy play-button press.** Three-phase scale animation `1 → 0.92 → 1.05 → 1` over 400ms total — the signature Apple Music interaction feedback.

8. **Use brand-gradient eyebrows.** A 12/700 uppercase eyebrow over the hero headline with `linear-gradient(135deg, #fa233b → #ff7b00)` text via `background-clip: text` — the brand's most distinctive typographic signature.
