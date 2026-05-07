---
name: Spotify
tagline: Electric `#1ed760` green on near-black canvas with Spotify Mix sans — the canonical streaming-audio tile grid.
updated_at: 2026-05-04T14:57:35+12:00
published_at: 2026-05-04T14:57:35+12:00
author: webdesignhot
source_url: https://spotify.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media]
tags: [dark, bold, sans, dense, audio, entertainment]
preview_swatch: ['#121212', '#1ed760', '#ffffff']
related: [netflix, apple-tv, soundcloud]
description: 'Spotify ships the canonical streaming-audio UI: a near-black `#121212` canvas, the unmistakable Spotify Green `#1ed760` rationed for the Play button and brand wordmark, and Spotify Mix (a custom Circular cut by Lineto) carrying display headlines at 700 with tight `-0.04em` tracking. The page reads as a content theatre — gradient-washed playlist hero stripes that pull a colour from the cover art, square album-tile carousels with hover-elevated shadows, and a persistent now-playing bar pinned to the viewport floor. Type compresses tight, buttons are pill-shaped pure-green pucks with no shadow, and green is rationed to a single hue so every "Play" or "Save" reads as the only action that matters.'

colors:
  bg: '#121212'                    # canvas — Spotify near-black, never pure 0
  bg-deep: '#000000'                # extreme background, sidebar bottom on TV
  bg-base: '#000000'                # marketing landing dark band
  surface: '#181818'                # card default, sidebar item rest
  surface-strong: '#282828'         # card hover, sidebar selected
  surface-soft: '#1a1a1a'           # row alt band
  surface-elevated: '#2a2a2a'       # popover, modal floor
  surface-tinted: 'rgba(0,0,0,0.5)' # gradient header overlay above cover art
  surface-card: '#181818'           # playlist tile rest
  surface-now-playing: '#181818'    # bottom now-playing bar
  text: '#ffffff'                   # ink — pure white on near-black
  text-strong: '#ffffff'            # display
  text-base: '#ffffff'              # primary body
  text-subdued: '#a7a7a7'           # secondary metadata, "Song · Artist"
  text-muted: '#727272'             # tertiary, captions
  text-bright-accent: '#1ed760'     # green text on hero stat ("256 followers")
  text-disabled: '#535353'          # disabled menu item
  brand: '#1ed760'                  # Spotify Green — only green in the system
  brand-hover: '#1fdf64'            # marginally brighter on hover
  brand-active: '#169c46'           # press state, deep green
  brand-deep: '#137a3a'              # archived-promo deep variant
  brand-classic: '#1db954'          # legacy 2015–2023 brand green (still used in places)
  on-brand: '#000000'               # green CTA always pairs with BLACK text — distinctive
  accent-pink: '#ff6437'            # promotional gradient accent (Wrapped)
  accent-yellow: '#f0ff5b'          # Wrapped 2024 highlight
  accent-purple: '#b28cff'          # collab-playlist user dot
  border: '#282828'                 # default low-contrast hairline
  border-soft: '#181818'            # divider between rows
  border-strong: '#727272'          # focused input outline
  scrim-top: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, transparent 100%)'
  scrim-card: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%)'
  shadow-card: 'rgba(0,0,0,0.5)'   # tile hover lift
  shadow-modal: 'rgba(0,0,0,0.76)'
  success: '#1ed760'                # uses brand green — uncommon
  warning: '#ffa42b'                # mid-quality download warning
  danger: '#e91429'                 # explicit-content E badge, error red
  danger-text: '#f15e6c'
  info: '#509bf5'                   # link blue (rare in product)
  explicit-badge: '#727272'         # grey "E" explicit indicator default
  liked-heart: '#1ed760'            # filled heart on saved track — brand green
  premium-badge: '#1ed760'          # Premium subscriber tag
  equalizer-bar: '#1ed760'          # animated equalizer on currently-playing row

typography:
  display:
    family: '"Spotify Mix", "CircularSp", "Circular", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700, 900]
    opentype-features: ['ss01', 'tnum']
  body:
    family: '"Spotify Mix", "CircularSp", "Circular", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-hero:    { size: 96, weight: 900, lineHeight: 0.96, tracking: '-0.04em', family: display, notes: 'Wrapped-style gigantic stat text, mobile share sheets' }
    display-xl:      { size: 72, weight: 900, lineHeight: 1.0,  tracking: '-0.04em', family: display, notes: 'Playlist title on large hero header' }
    display-lg:      { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.03em', family: display, notes: 'Marketing landing hero, Album page title' }
    display-md:      { size: 32, weight: 700, lineHeight: 1.2,  tracking: '-0.02em', family: display, notes: 'Playlist title (medium), Artist name' }
    display-sm:      { size: 24, weight: 700, lineHeight: 1.25, tracking: '-0.01em', family: display, notes: 'Section header "Made For You"' }
    title-md:        { size: 18, weight: 700, lineHeight: 1.3,  tracking: '0',       family: display, notes: 'Card title in album tile' }
    title-sm:        { size: 16, weight: 700, lineHeight: 1.3,  tracking: '0',       family: display, notes: 'Sidebar nav label' }
    body-lg:         { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Primary running text' }
    body-md:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Default body, track row metadata' }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Secondary metadata, "1,234,567 monthly listeners"' }
    button-lg:       { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0.01em',  family: display, notes: '"Play" pill button label' }
    button-md:       { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Sign In, Save buttons' }
    caption:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Disclosures, time-stamps' }
    metadata:        { size: 14, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, opentype: ['tnum'], notes: 'Track-row time column + listener counts' }
    badge:           { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.06em',  family: body, transform: uppercase, notes: '"NEW", "EXPLICIT", "PREMIUM"' }
    nav-link:        { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Sidebar links — bold, not regular' }

radius:
  micro: 2          # small badge corner
  sm: 4             # input radius
  md: 6             # default card content
  lg: 8             # album tile
  xl: 12            # large card variants
  pill: 9999        # primary "Play" button — defining radius
  circle: '50%'     # circular Play FAB

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1920
  content-max: 1440
  sidebar-width: 240        # desktop left nav rail
  now-playing-height: 90    # pinned bottom player bar
  header-height: 64         # top bar within main panel
  card-square-min: 168      # min album-tile width before re-flow
  card-square-max: 220      # max before another column adds
  hero-min-height: 348      # gradient-washed playlist hero band

components:
  button-primary-play:
    bg: '#1ed760'
    color: '#000000'
    radius: 9999
    padding: '8px 32px'
    height: 48
    font: button-lg
    weight: 700
    transform-hover: 'scale(1.04)'
    use: 'The signature green Play pill. Always green-on-black, never white on green. Scales 1.04× on hover.'
  button-primary-circle:
    bg: '#1ed760'
    color: '#000000'
    radius: '50%'
    height: 56
    width: 56
    use: 'Circular green Play FAB anchored on hover-over album tile and bottom-left of playlist hero.'
  button-primary-circle-large:
    bg: '#1ed760'
    color: '#000000'
    radius: '50%'
    height: 72
    width: 72
    use: 'Hero playlist Play FAB — always green-on-black, scales 1.06× on hover.'
  button-secondary-outline:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #ffffff'
    radius: 9999
    padding: '8px 32px'
    height: 48
    font: button-md
    transform-hover: 'scale(1.04)'
    use: '"Sign Up Free" on acquisition pages, "Follow" on artist pages.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#a7a7a7'
    border: 'none'
    padding: '8px 16px'
    use: 'Sidebar utility, text-only, hover lifts to #ffffff.'
  button-icon-square:
    bg: 'transparent'
    color: '#a7a7a7'
    radius: 4
    height: 32
    use: 'Track row utilities — heart, three-dots, queue. Hover lifts to #ffffff.'
  button-icon-circle:
    bg: 'rgba(0,0,0,0.7)'
    color: '#ffffff'
    radius: '50%'
    height: 40
    width: 40
    use: 'Floating utility on cover art (download, share). Translucent over image.'
  card-album-tile:
    bg: '#181818'
    color: '#ffffff'
    radius: 8
    padding: 16
    use: 'Default 1:1 square tile on home/library — cover art on top, title + artist beneath.'
  card-album-tile-hover:
    bg: '#282828'
    color: '#ffffff'
    radius: 8
    use: 'On hover — bg lifts from #181818 to #282828 and green Play FAB fades in over cover.'
  card-feature:
    bg: 'linear-gradient(135deg, var(--cover-color), #181818)'
    color: '#ffffff'
    radius: 8
    use: 'Featured playlist hero card with cover-art-derived gradient (Wrapped, Daily Mix).'
  hero-playlist:
    bg: 'linear-gradient(180deg, var(--cover-color) 0%, transparent 232px), #121212'
    color: '#ffffff'
    use: 'Top of playlist page — pulls dominant colour from cover art, fades into canvas over 232px.'
  badge-explicit:
    bg: '#727272'
    color: '#000000'
    radius: 2
    padding: '0 4px'
    use: '"E" rounded-square badge inline with explicit track titles.'
  badge-premium:
    bg: '#1ed760'
    color: '#000000'
    radius: 2
    padding: '2px 6px'
    use: 'Subscriber-tier tag in account settings.'
  badge-new:
    bg: 'transparent'
    color: '#1ed760'
    border: '1px solid #1ed760'
    radius: 2
    padding: '2px 6px'
    use: '"NEW" outlined green tag on returning artist releases.'
  input-search:
    bg: '#ffffff'
    color: '#121212'
    radius: 9999
    height: 40
    padding: '8px 16px 8px 40px'
    use: 'Search input — uniquely WHITE in the system; has black magnifying-glass icon left.'
  input-text:
    bg: 'transparent'
    color: '#ffffff'
    border-bottom: '1px solid #727272'
    height: 50
    use: 'Sign-in fields — minimal, only bottom rule.'
  sidebar-nav-rail:
    bg: '#000000'
    color: '#ffffff'
    width: 240
    use: 'Left nav — pure black, distinct from #121212 main panel; "Home / Search / Your Library".'
  sidebar-item:
    bg: 'transparent'
    color: '#a7a7a7'
    radius: 4
    padding: '8px 16px'
    use: 'Default sidebar nav item — hover lifts color to #ffffff.'
  sidebar-item-active:
    bg: '#282828'
    color: '#ffffff'
    radius: 4
    use: 'Selected nav item — solid charcoal background.'
  now-playing-bar:
    bg: '#000000'
    color: '#ffffff'
    height: 90
    use: 'Pinned bottom-of-viewport player — cover thumb, title/artist, transport controls, scrubber, volume.'
  scrubber:
    bg: '#535353'
    fill: '#ffffff'
    fill-hover: '#1ed760'
    height: 4
    use: 'Track-progress bar in now-playing — defaults to white, switches to green on hover.'
  equalizer-icon:
    color: '#1ed760'
    use: 'Animated 3-bar equalizer indicator on currently-playing track row.'
  modal-context-menu:
    bg: '#282828'
    color: '#ffffff'
    radius: 8
    shadow: '0 16px 24px rgba(0,0,0,0.3), 0 6px 8px rgba(0,0,0,0.2)'
    use: 'Right-click context menu — "Add to playlist", "Share", "Go to artist".'
  toast-notification:
    bg: '#1ed760'
    color: '#000000'
    radius: 8
    padding: '8px 16px'
    use: 'Confirmation toast — "Added to Liked Songs" — green pill at viewport top.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-out: 'cubic-bezier(0.3, 0, 0.4, 1)'
  ease-spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 400
  duration-tile-hover: 300
  duration-fab-pop: 200
  reduced-motion: 'respects prefers-reduced-motion: tile hover collapses to opacity-only colour shift, Play FAB fades instead of pops, equalizer animation halts to static three-bar SVG.'

breakpoints:
  mobile: 568
  tablet: 768
  desktop: 1024
  wide: 1440

shadows:
  none: 'none'
  tile-rest: 'none'
  tile-hover: '0 8px 24px rgba(0,0,0,0.5)'
  fab-rest: '0 8px 8px rgba(0,0,0,0.3)'
  fab-hover: '0 12px 16px rgba(0,0,0,0.4)'
  modal: '0 16px 24px rgba(0,0,0,0.3), 0 6px 8px rgba(0,0,0,0.2)'
  popover: '0 4px 12px rgba(0,0,0,0.5)'
  ring: '0 0 0 2px #1ed760'

accessibility:
  contrast-text-on-bg: 17.4               # white on #121212 — AAA
  contrast-text-subdued-on-bg: 6.6        # #a7a7a7 on #121212 — AAA at body sizes
  contrast-text-on-brand: 13.5            # black on #1ed760 — AAA (intentional choice over white)
  focus-ring: '2px solid #ffffff with 2px offset; #1ed760 on white surfaces'
  reduced-motion-honored: true
  caption-track: 'lyrics displayed sync-line-by-line, with WCAG AA contrast'
  audio-description: 'podcast surfaces inherit player a11y; audio is the content'

dark-mode: native                  # Spotify is dark-only on consumer surface
---

## 1. Visual Theme & Atmosphere

Spotify is the audio mirror of Netflix — a dark-room interface whose only purpose is to disappear behind the cover art. The canvas is a deliberate `#121212` (slightly warmer than pure 0), because every album cover the user owns is in that colour-rich, mid-luminance band, and a true black would suck the saturation out of the artwork; the slight lift gives covers a luminous edge. Above that ground, every playlist page does a single, elegant trick: it samples the dominant colour from the cover art and gradient-washes the top 232px of the page in that hue, fading down into the `#121212` canvas. The album you opened defines the atmosphere of the room.

The signature is the Green. `#1ed760` (since 2023; `#1db954` was the older "classic" green from 2015–2023 and still appears in some surfaces) is rationed almost as severely as Netflix red — it lives on the Play button, the wordmark, the saved-heart, and the equalizer indicator on the currently-playing row. Everywhere else is monochrome — white, near-white, mid-grey subdued, dark surface. And uniquely, when the green is used as a button background, the label inside is **black**, not white. This green-on-black pairing (rather than the conventional green-on-white) is one of Spotify's strongest brand signals: AAA contrast, plus a confident, almost neon-sign feel.

Spotify Mix — the brand's custom Circular cut, drawn by Lineto in collaboration with Spotify in 2023 — is the second restraint. It runs heavy at the top (700–900 weight, 32–96px display, `-0.03em` to `-0.04em` aggressive negative tracking) and modest below (400, 13–16px body). Wrapped season every December stretches this to extreme: 96px black-weight stat numbers stacked over photographic backgrounds, with tracking dialled tight enough that "256 SONGS" reads as a single typographic event. There is no decorative italic, no condensed cut, no display-serif companion — just one family pulling double duty.

The layout is a three-pane application chrome: a 240px-wide pure-black sidebar on the left (Home / Search / Your Library / playlists), a `#121212` main panel with playlist hero + track rows + recommendation rails, and a pinned 90px-tall pure-black "Now Playing" bar across the bottom of the viewport. This three-pane structure has been Spotify's architecture since 2014 and has barely changed — only the radii, type weights, and accent green have evolved.

Density is the third axis. A library page renders 6–8 horizontal carousel rows above the fold on a 1440px display, each row a 6-tile album scroller, each tile a 1:1 square. Hover any tile and it lightens from `#181818` to `#282828`, the cover art slightly elevates with a `0 8px 24px rgba(0,0,0,0.5)` shadow, and a circular green Play FAB pops in over the cover with a spring ease. The interaction is faster than Netflix's deliberate 0.75s dwell — Spotify's tiles respond on hover-enter, not on dwell, because audio is more disposable than video and users browse faster.

**Key Characteristics:**
- Near-black `#121212` canvas (never pure black) so cover-art saturation isn't crushed.
- Single voltage of brand green `#1ed760` reserved for Play CTA + wordmark + Liked + equalizer.
- Green CTA always pairs with **black** label text — distinctive, AAA-contrast.
- Spotify Mix display sans, 700–900 weight at 32–96px, `-0.03em` to `-0.04em` aggressive tracking.
- Three-pane app chrome: black 240px sidebar / `#121212` main panel / black 90px now-playing bar.
- 1:1 square album tile is the canonical content unit; tiles scale 1.04× on hover with green Play FAB.
- Cover-art-derived gradient header (top 232px) gives every playlist a unique atmosphere.
- Pill-shaped (`9999px` radius) buttons; circular Play FABs; flat or zero-shadow tiles at rest.
- Search input is uniquely WHITE in the system — the only white surface, intentional foregrounding.
- Dark-mode-only on the consumer surface — no light theme is offered.

## 2. Color Palette & Roles

### Primary
- **Canvas Black** (`#121212`): The defining ground. Not `#000000` — the slight warmth keeps cover-art saturation honest.
- **Pure White** (`#ffffff`): Display headlines, primary text, search-input background.
- **Spotify Green** (`#1ed760`): The brand's only green. Play CTA, wordmark, Liked-Songs heart, equalizer indicator. Used exactly once or twice per viewport — never decoratively.

### Brand & Dark
- **Green Hover** (`#1fdf64`): Marginally brighter on pointer-over. The shift is subtle — under 2% lift.
- **Green Active** (`#169c46`): Pointer-down / pressed deep state.
- **Green Deep** (`#137a3a`): Archived gradient terminus, appears on legacy promo modules.
- **Classic Green** (`#1db954`): The 2015–2023 green, still embedded in some legacy iconography.
- **Pure Black** (`#000000`): Sidebar rail, now-playing bar, marketing landing dark band, label text on green CTAs.

### Accent
- **Wrapped Pink** (`#ff6437`): Annual Wrapped campaign accent gradient stop.
- **Wrapped Yellow** (`#f0ff5b`): Wrapped 2024 highlight stop.
- **Collab Purple** (`#b28cff`): Collaborator-dot indicator on shared playlists.
- **Link Blue** (`#509bf5`): Inline link colour, rare in product.

### Interactive
- **CTA Green** (`#1ed760`): Primary action.
- **Outline White** (`#ffffff` 1px on transparent): Secondary actions ("Sign Up Free", "Follow").
- **Hover Surface** (`#282828`): Tile and sidebar item hover state.
- **Disabled** (`#535353` text on `#181818` bg): Non-interactive control.

### Neutral Scale
- **Display White** (`#ffffff`): Display headlines, hero titles.
- **Subdued** (`#a7a7a7`): Secondary metadata, "Song · Artist · Album" rows. AAA on `#121212`.
- **Muted** (`#727272`): Tertiary captions, time-stamps, "•" separators.
- **Disabled** (`#535353`): Disabled menu items, scrubber rail unfilled.
- **Border Default** (`#282828`): Hairline divider between sections.

### Surface & Borders
- **Surface Strong** (`#282828`): Card hover, sidebar selected.
- **Surface Default** (`#181818`): Default tile, default sidebar item rest.
- **Surface Soft** (`#1a1a1a`): Alt row band on the home library page.
- **Surface Elevated** (`#2a2a2a`): Modal floor, popover bg.
- **Surface Tinted** (`rgba(0,0,0,0.5)`): Gradient overlay sitting above hero cover art for legibility.
- **Border Strong** (`#727272`): Focused input outline.

### Shadow Colors
- **Tile Hover Shadow** (`rgba(0,0,0,0.5)`): The signature tile-elevate shadow — softer than Netflix's `0.75` because Spotify's hover is fast and the tile background already lightens, doing some of the lift work.
- **FAB Shadow** (`rgba(0,0,0,0.3)`): Resting Play FAB shadow over cover art.
- **Modal Shadow** (`rgba(0,0,0,0.76)`): Heavier under detail dialogs.

### Semantic
- **Success** (`#1ed760`): Reuses brand green. Toast confirmations, save-success, premium-active. Uncommon for a brand to merge success and brand.
- **Warning** (`#ffa42b`): Mid-quality download warning, stream-quality alert.
- **Danger** (`#e91429`): "E" explicit-content badge, error red.
- **Info** (`#509bf5`): Informational link colour, rare in product.

## 3. Typography Rules

### Font Family
- **Primary**: `"Spotify Mix"` — custom display-and-text family, drawn by Lineto in 2023, replacing licensed Circular for marketing surfaces. Most app surfaces still load `"CircularSp"` (Spotify-licensed Circular). Fallback chain: `"CircularSp", "Circular", "Helvetica Neue", Helvetica, Arial, sans-serif`.
- **Mono**: `SFMono-Regular, Menlo, Consolas, monospace` — used only in developer-doc surfaces and metadata-export, never in player.
- **OpenType Features**: `ss01` for stylistic alternates on display sizes (subtle modernised "a", "g"); `tnum` for the time column on track rows so 4:32 / 0:54 / 12:08 align.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Hero | Spotify Mix | 96px | 900 | 0.96 | -0.04em | ss01 | Wrapped stat number, share-sheet headline |
| Display XL | Spotify Mix | 72px | 900 | 1.0 | -0.04em | ss01 | Playlist hero on large screens |
| Display LG | Spotify Mix | 48px | 700 | 1.1 | -0.03em | ss01 | Marketing landing hero, Album page title |
| Display MD | Spotify Mix | 32px | 700 | 1.2 | -0.02em | ss01 | Playlist title (medium), Artist name |
| Display SM | Spotify Mix | 24px | 700 | 1.25 | -0.01em | ss01 | "Made For You", "Recently Played" rail header |
| Title MD | Spotify Mix | 18px | 700 | 1.3 | 0 | -- | Card title in album tile |
| Title SM | Spotify Mix | 16px | 700 | 1.3 | 0 | -- | Sidebar nav label, modal title |
| Body LG | Spotify Mix | 16px | 400 | 1.5 | 0 | -- | Modal description, settings paragraph |
| Body MD | Spotify Mix | 14px | 400 | 1.5 | 0 | -- | Default body, track row title |
| Body SM | Spotify Mix | 13px | 400 | 1.4 | 0 | -- | Secondary metadata, "1,234,567 monthly listeners" |
| Button LG | Spotify Mix | 16px | 700 | 1.0 | 0.01em | -- | "Play" pill button label, modal primary |
| Button MD | Spotify Mix | 14px | 700 | 1.0 | 0 | -- | "Sign In", "Save", "Follow" |
| Caption | Spotify Mix | 12px | 400 | 1.4 | 0 | -- | Disclosures, time-stamps |
| Metadata | Spotify Mix | 14px | 400 | 1.3 | 0 | tnum | Track-row time column, listener counts |
| Badge | Spotify Mix | 11px | 700 | 1.0 | 0.06em | -- | Uppercase "NEW", "EXPLICIT", "PREMIUM" |
| Nav Link | Spotify Mix | 14px | 700 | 1.0 | 0 | -- | Sidebar links — bold, not regular |

### Principles
- **Heavy at the top, light below.** Display sizes use 700–900 weight; everything below 18px is 400. There is no 600 in routine production.
- **Tight tracking is the brand's voice.** Display tracking runs `-0.03em` to `-0.04em`. Wrapped stretches it tighter still — `-0.05em` on 96px black weights. Anything wider than `-0.02em` on display reads as off-brand.
- **One family, no italics.** Spotify Mix and CircularSp ship italic cuts but they are essentially never used in product. Single weight, no slant — calm typography behind loud cover art.
- **Tabular numerals on time and stats.** Track-row time columns and Wrapped stat counts use `tnum` so columns align to the pixel.
- **Bold sidebar.** The left-rail nav uses 700-weight at 14px (rare for nav) — it gives the chrome enough weight to compete visually with the cover-art-rich main panel.
- **Sentence case for everything except badges.** "Today's top hits", "Made for you" — capital first word only. Uppercase belongs only to small badges (NEW, EXPLICIT, PREMIUM).

## 4. Component Stylings

### Buttons

**Primary Play (Green Pill)**
- Background: `#1ed760`. Text: `#000000`. Radius: `9999px`. Padding: `8px 32px`. Height: `48px`. Font: Spotify Mix 16px / 700.
- Hover: `#1fdf64` + `transform: scale(1.04)`. The scale-up is a brand signature — every primary green button does it.
- Active: `#169c46` + `transform: scale(1.0)`.
- Use: "Play", "Save", "Subscribe to Premium". One per viewport. The label is **always black**, never white — this is the most distinctive thing about Spotify's CTA.

**Primary Play (Circular FAB)**
- Background: `#1ed760`. Color: `#000000`. Radius: `50%`. Size: `56 × 56` (default), `72 × 72` (hero), `40 × 40` (compact tile).
- Resting shadow: `0 8px 8px rgba(0,0,0,0.3)` over cover art for separation.
- Hover: scale 1.06× + brighter shadow.
- Use: Hover-on-album-tile, hero playlist Play, now-playing transport.

**Secondary Outline**
- Background: `transparent`. Text: `#ffffff`. Border: `1px solid #ffffff`. Radius: `9999px`. Padding: `8px 32px`.
- Hover: `transform: scale(1.04)` + border opacity intensifies.
- Use: "Sign Up Free", "Follow", "Cancel" on dialogs.

**Tertiary Text**
- Background: `transparent`. Color: `#a7a7a7`. No border. Padding: `8px 16px`.
- Hover: color → `#ffffff`.
- Use: Sidebar utilities, footer links, "Show more" rail expanders.

**Icon Square**
- Background: `transparent`. Color: `#a7a7a7`. Radius: `4px`. Size: `32 × 32`.
- Hover: color → `#ffffff`.
- Use: Track-row utilities — heart, three-dots, queue-add.

**Icon Circle (Translucent)**
- Background: `rgba(0,0,0,0.7)`. Color: `#ffffff`. Radius: `50%`. Size: `40 × 40`.
- Use: Floating utilities over cover art — download, share, edit.

### Cards & Tiles

**Album Tile (Default)**
- Background: `#181818`. Color: `#ffffff`. Radius: `8px`. Padding: `16px`.
- Layout: 1:1 cover art on top, 8px gap, title (18/700) on next row, artist (14/400 `#a7a7a7`) beneath.
- No shadow at rest.
- Use: Default carousel tile.

**Album Tile (Hover)**
- Background: `#282828` (lightens). Cover art gains shadow `0 8px 24px rgba(0,0,0,0.5)`. Green circular Play FAB fades in over the cover bottom-right with `300ms` spring ease.
- Use: Pointer-over interaction signature.

**Feature Card (Daily Mix, Wrapped)**
- Background: `linear-gradient(135deg, var(--cover-color), #181818)` — gradient sampled from cover art.
- Radius: `8px`. Padding: `24px`.
- Use: Personalised playlist card with cover-art-derived gradient.

**Playlist Hero**
- Background: `linear-gradient(180deg, var(--cover-color) 0%, transparent 232px), #121212`.
- Layout: 232×232 cover art left, title + creator + stats right, large green Play FAB anchored bottom of cover area.
- Use: Top of every playlist/album/artist page — the colour fade is the page's atmospheric signature.

### Badges, Tags, Indicators

**Explicit "E"**
- Background: `#727272`. Color: `#000000`. Radius: `2px`. Padding: `0 4px`. Font: 11px / 700.
- Use: Inline with explicit track titles.

**Premium**
- Background: `#1ed760`. Color: `#000000`. Radius: `2px`. Padding: `2px 6px`.
- Use: Subscriber-tier tag in account settings.

**NEW**
- Background: `transparent`. Color: `#1ed760`. Border: `1px solid #1ed760`. Radius: `2px`.
- Use: Outlined green tag on returning artist's recent release.

**Liked Heart**
- Color: `#1ed760` filled, `#ffffff` outline (unliked).
- Animation: scale 1.2× pop on click then settles to 1.0×.
- Use: Saved-track indicator in track row and now-playing bar.

**Equalizer Indicator**
- Color: `#1ed760`. SVG: 3 vertical bars animating on currently-playing row.
- Reduced motion: static three-bar SVG, no animation.

### Inputs & Forms

**Search (White)**
- Background: `#ffffff`. Color: `#121212`. Radius: `9999px`. Height: `40px`. Padding: `8px 16px 8px 40px`.
- Magnifying-glass icon left in `#121212`.
- Use: Top-of-page search — the only white surface in the chrome.

**Sign-in Text Input**
- Background: `transparent`. Color: `#ffffff`. Border-bottom: `1px solid #727272`. Height: `50px`.
- Focus: bottom rule lifts to `#1ed760`.
- Use: Sign-in email/password — minimal, only bottom rule.

**Toggle Switch**
- Off: `#535353` track. On: `#1ed760` track.
- Knob: `#ffffff` 20×20 circle.
- Use: Settings toggles — autoplay, crossfade, normalisation.

### Navigation

**Sidebar (Pure Black)**
- Background: `#000000`. Width: `240px`. Padding: `8px`.
- Always pure black to distinguish from `#121212` main panel — the contrast is the layout's spine.
- Items: 14px / 700 nav labels.

**Sidebar Item (Default)**
- Background: `transparent`. Color: `#a7a7a7`. Radius: `4px`. Padding: `8px 16px`.
- Hover: color → `#ffffff` (background stays transparent).

**Sidebar Item (Active)**
- Background: `#282828`. Color: `#ffffff`. Radius: `4px`.
- Visual cue: solid charcoal block.

**Top Bar (within main panel)**
- Background: scrolls from transparent over hero gradient to `#121212` solid.
- Height: `64px`. Contains back/forward arrows, search, profile menu.

### Now-Playing Bar
- Background: `#000000`. Height: `90px`. Pinned to viewport bottom.
- Layout: 64×64 cover thumb left + title/artist + Liked heart, transport (shuffle/back/play/forward/repeat) centred, scrubber under transport, queue/devices/volume right.
- Scrubber: `#535353` rail, `#ffffff` fill default, `#1ed760` fill on hover.
- Time labels: `tnum` 12px / 400 `#a7a7a7`.

### Modals & Toasts

**Context Menu (Right-click)**
- Background: `#282828`. Radius: `8px`. Padding: `4px 0`.
- Items: 14px / 400 `#ffffff`, hover bg `#3e3e3e`.
- Shadow: `0 16px 24px rgba(0,0,0,0.3), 0 6px 8px rgba(0,0,0,0.2)`.

**Toast**
- Background: `#1ed760`. Color: `#000000`. Radius: `8px`. Padding: `8px 16px`.
- Use: "Added to Liked Songs" — green pill at viewport top, auto-dismiss 2s.

## 5. Layout Principles

### Spacing System
- Base: 4px. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128.
- Tile gap (intra-row): 24px on desktop, 16px on tablet, 12px on mobile.
- Row gap (between carousels): 32px.
- Section gap (major modules): 48px.

### Grid & Container
- Page width: 1920px max — main panel fills viewport minus 240px sidebar.
- Content max within main panel: 1440px.
- Carousel: 6 tiles per row at 1440px desktop, 4 at tablet, 2.5 at mobile (peek).
- Sidebar width: 240px fixed. Now-playing height: 90px fixed. Top bar: 64px fixed.

### Whitespace Philosophy
Spotify is a content-density product. A library page renders 6–8 carousel rows above the fold on a 1080p display. Whitespace exists to separate rows, not to breathe — the page reads as a content wall. The exception is the playlist hero band (232px tall, with the cover-art-derived gradient) which gets generous breathing room because it's setting an atmospheric tone for the page below.

### Section Cadence
- Top bar (search + profile)
- Greeting hero ("Good evening", time-aware)
- "Made For You" rail (personalised feature cards)
- "Recently Played" rail
- 4–8 personalised "Your Top Mixes", "Daily Mix", "Discover Weekly" rails
- Genre rails (variable, profile-based)
- Footer (compact dark band) — only visible deep on settings/account pages

There is no light/dark alternation — Spotify is dark all the way down.

## 6. Shapes & Radius Scale

- **Micro** (`2px`): Explicit "E" badge, NEW outlined tag, Premium tag.
- **Standard** (`4px`): Sidebar items, icon-square buttons.
- **Comfortable** (`6px`): Modal default content area.
- **Relaxed** (`8px`): Album tile, feature card, modal corners — the workhorse radius.
- **Featured** (`12px`): Hero feature variants, large modal.
- **Pill** (`9999px`): Primary Play button — defining radius signature; secondary outline button; search input.
- **Circle** (`50%`): Play FAB, profile avatar, hover-utility circles.

The pill button + circle FAB pairing is the geometric signature. Where Netflix is square-cornered cinema, Spotify is rounded-soft audio.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (flat) | No shadow, no border | Default tile at rest, sidebar items, page background |
| 1 (hairline) | 1px `#282828` border or background lift to `#282828` | Hovered tile, focused input, active sidebar item |
| 2 (hover) | `0 8px 24px rgba(0,0,0,0.5)` on cover art + bg lift | Album tile hover — the signature elevation |
| 3 (FAB rest) | `0 8px 8px rgba(0,0,0,0.3)` | Play FAB resting over cover art |
| 4 (modal) | `0 16px 24px rgba(0,0,0,0.3), 0 6px 8px rgba(0,0,0,0.2)` | Context menu, dialog |
| 5 (toast) | `0 4px 12px rgba(0,0,0,0.5)` | Confirmation toast |

### Shadow Philosophy
Shadows are neutral-black, never tinted. On `#121212` ground, shadows have to be `0.3–0.5` opacity to read at all — softer than Netflix's `0.75` because Spotify's tile hover also lightens the background, doing half the elevation work. There is no brand-tinted shadow ever — green is reserved for the brand, not for elevation. Modal shadows use a two-layer recipe (large soft + small sharper) borrowed from material elevation, but in pure black.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — fades, opacity, simple slides.
- **Out**: `cubic-bezier(0.3, 0, 0.4, 1)` — incoming elements (modal in, FAB pop).
- **Spring**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — Play FAB pop-in over hovered tile (signature feel).

### Duration Buckets
- **Fast**: 100ms — colour shifts, hover-state colour transitions.
- **Standard**: 200ms — modal fade-in, FAB pop, button scale.
- **Slow**: 400ms — Wrapped slide transitions, page route changes.
- **Tile hover**: 300ms — bg lift + shadow intensify + FAB pop, all coordinated.

### Per-Component Recipes
- **Primary CTA hover**: Background `#1ed760 → #1fdf64`, `transform: scale(1) → scale(1.04)`, 200ms ease-standard, no shadow change.
- **Tile hover**: bg `#181818 → #282828` (200ms), cover-art shadow fade-in (300ms), Play FAB pops in `scale(0) → scale(1)` with spring ease (200ms, 100ms delay).
- **Liked heart click**: scale `1.0 → 1.2 → 1.0` over 300ms with spring ease, color outline → `#1ed760` fill at midpoint.
- **Equalizer**: 3 bars sine-wave animate continuously at 1.4s loop, paused on hover.
- **Now-playing scrubber hover**: Fill colour `#ffffff → #1ed760`, 100ms ease-standard.
- **Modal in**: 200ms ease-out, scale `0.96 → 1.0` + opacity `0 → 1`.
- **Toast**: slide down from top + opacity over 200ms; auto-dismiss after 2s with reverse motion.

### Page Transitions
Spotify's app is a single-page React surface. Page changes are content-area swaps with a 100ms opacity fade — sidebar and now-playing bar persist. The hero gradient regenerates on route change (sampled fresh from the new cover art).

### Reduced Motion
`prefers-reduced-motion: reduce` collapses:
- Tile hover → opacity-only colour shift, no shadow, no FAB scale-in (FAB fades instead).
- Liked heart pop → instant colour swap, no scale.
- Equalizer → static three-bar SVG, no animation loop.
- Toast → instant appear/disappear, no slide.
- Modal scale-in → opacity-only.

## 9. Accessibility & A11y

### Contrast Pairs
- White `#ffffff` on canvas `#121212`: **17.4:1** — AAA at all sizes.
- Subdued `#a7a7a7` on canvas `#121212`: **6.6:1** — AAA at body sizes.
- Black `#000000` on brand green `#1ed760`: **13.5:1** — AAA. (This is why Spotify uses black-on-green, not white-on-green.)
- Muted `#727272` on canvas: **3.8:1** — AA only for large text; avoid for body.
- Sidebar subdued `#a7a7a7` on black `#000000`: **8.0:1** — AAA.

### Focus Indicators
- Default focus: `2px solid #ffffff` outline with `2px` offset on dark surfaces.
- On the white search input: focus uses `2px solid #1ed760` to maintain visibility.
- Tab order: sidebar top-to-bottom → top bar → main content rails top-to-bottom → now-playing bar.

### ARIA Patterns
- Carousels: `role="region" aria-roledescription="carousel"` with `aria-label` per row title.
- Tiles: `role="link" aria-label="[Title], by [Artist]. Press Enter to play."`
- Player: `role="region" aria-label="Now playing"` with full keyboard shortcuts.
- Modal: `role="dialog" aria-modal="true"` with focus trap.
- Equalizer: `aria-hidden="true"` (decorative); the currently-playing track also has `aria-current="true"`.

### Keyboard Navigation
- Space: play/pause from any focus.
- Arrow Left/Right: seek 10s within now-playing.
- Arrow Up/Down: volume.
- Ctrl+Right / Ctrl+Left: next/previous track.
- Ctrl+L: focus search.
- Tab: move through controls; Shift+Tab reverses.
- Enter: activate focused tile/button.
- ESC: close modal/context menu.

### Screen Reader Hints
- Track row `aria-label` packs title + artist + album + duration into one string.
- Cover art `<img alt="">` is decorative when paired with adjacent visible text; meaningful when standalone.
- Now-playing bar live-region announces track changes (`aria-live="polite"`).

### Reduced Motion
Honoured. See §8.

## 10. Responsive Behavior

### Breakpoints
| Token | Min | Use |
|-------|-----|-----|
| mobile | 0px | Sidebar collapses to bottom-tab nav, 2 tiles per row |
| tablet | 768px | Sidebar visible at 192px, 4 tiles per row |
| desktop | 1024px | Full 240px sidebar, 5 tiles per row |
| wide | 1440px | 6 tiles per row, content max 1440px centred |

### Touch Targets
- 48×48 minimum on all interactive controls. Now-playing bar transport buttons are 40×40 with 48×48 hit area padding.
- On mobile, tiles fill 50% viewport width with 12px gaps.

### Collapsing Strategy
- **Sidebar**: collapses to bottom-tab nav (Home / Search / Library) on `< 768px`.
- **Now-playing bar**: condenses to 64px-tall mini-player on mobile; tap expands to full-screen player.
- **Carousel arrows**: hidden on touch; swipe replaces.
- **Hero**: cover art shrinks to 192×192 on mobile, anchored above title (column layout).

### Image Behavior
- Cover art: served at 64w/300w/640w/1280w via responsive `srcset`. Lazy-load below the fold. Always 1:1 aspect.
- Hero gradient: derived client-side via `Vibrant.js`-style colour extraction from the cover art.
- Artist photos: 16:9 hero aspect, 2:1 banner aspect on artist page.

### Container Queries
Used on the now-playing bar — the queue/device/volume cluster collapses to icon-only at narrow viewports based on the bar's own width, not the page width.

## 11. Content & Voice

### Tone
Spotify's voice is **friendly, time-aware, and personally familiar**. Where Netflix presents, Spotify greets — "Good evening, Richard" at the top of the home page, conditioned on local time. Wrapped season tilts the voice into playful spectacle ("You listened to Sabrina Carpenter more than 99% of fans"). Inside the player, the voice goes mute — type yields to cover art and content.

### Microcopy Patterns
- **Primary CTA**: "Play" (in product), "Get Spotify Free" (acquisition), "Try Premium" (upsell).
- **Secondary CTA**: "Save", "Follow", "Sign Up Free".
- **Confirmation toast**: "Added to Liked Songs", "Added to your library", "Saved to [Playlist Name]".
- **Empty playlist**: "Let's find something for your playlist" + search field.
- **Empty Liked Songs**: "Songs you like will appear here. Save songs by tapping the heart icon."
- **Premium upsell**: "Listen ad-free, offline, and on-demand."
- **Time-aware greeting**: "Good morning" / "Good afternoon" / "Good evening" — first surface a returning user sees.
- **Wrapped lead**: "Your year in review is here."

### Empty States
- Empty Liked Songs: heart-icon illustration + "Songs you like will appear here." + search-suggestions rail.
- Empty Playlist: cover-art placeholder + search field "Find something for your playlist" + recently-searched suggestions.
- Empty Search: recent searches + "Browse all" genre tile grid.
- Offline empty: "You're offline. Songs you've downloaded are still here." with downloaded list.

### CTA Verb Conventions
- "Play" — primary verb in product. Always.
- "Save" — toggle on/off, not "Bookmark", not "Add".
- "Follow" — for artists/playlists/users, not "Subscribe".
- "Add to playlist" — explicit verb-noun, not "Add to" alone.
- "Share" — never "Send".
- "Listen now" — only on Wrapped/marketing surfaces, never inside the player.

## 12. Dark Mode & Theming

Spotify is **dark-only on the consumer surface**. There is no light-mode variant in the desktop app, web player, or mobile app — and there hasn't been in the brand's history. The cover-art-rich content surface only reads with maximum saturation against a dark canvas; light mode would dilute every album cover into pastel.

The marketing site (`spotify.com/us/` for acquisition) does have lighter band sections — white surfaces with `#000000` text and brand-green accents — but these are explicitly out-of-product, used to compete in app-store-style consumer marketing. The line is clear: brand marketing can lift; product cannot.

If theming were to be added (it has not, in 18+ years), the canvas would lift to `#fafafa`, brand green would deepen marginally to `#119742` to retain AA contrast on white (`#1ed760` on white is only 1.6:1 — fails). But no public design has done this.

## 13. Lineage & Influences

Spotify's visual lineage is three-streamed.

**Cover-art-driven music apps.** The 1:1 square tile, the gradient header sampled from cover art, the cover-thumb-anchored now-playing bar — these are direct adaptations of iTunes (1.x–10.x) on Mac, Rdio (2010–2015), and Pandora's mobile app. iTunes' "Cover Flow" was the first popular interaction that treated cover art as the primary navigational metaphor; Spotify modernised it into a flatter, more spacious tile grid.

**Material Design / Inter-style sans tradition.** Spotify Mix and the older CircularSp belong to the Inter / Helvetica Now / Aktiv Grotesk geometric-humanist sans family. The negative-tracked display style is borrowed from contemporary tech-brand display (Stripe's ~`-0.02em` discipline, Vercel/Linear's tight tracking conventions).

**Wrapped as standalone visual language.** The annual Wrapped campaign (since 2016) developed its own bolder, more saturated, more typographic identity — black-weight 96px stat numerals over photographic backgrounds, gradient washes of pink/yellow/purple/green. This Wrapped language has reverse-influenced the core product, which is why playlist heroes now use cover-art-derived gradients (a Wrapped-style move imported back into the chrome).

What Spotify rejects: serif type, decorative italic, light-mode-as-default, multi-colour brand palettes, ornament. The brand's restraint is single-green-on-near-black.

**Influences:**
- **iTunes (Apple, 2001–2014)** — cover-art-as-grid pattern. https://en.wikipedia.org/wiki/ITunes
- **Rdio (2010–2015)** — discovery rail layout predecessor.
- **Pandora** — listener-personalised home page and mood-driven recommendations.
- **Lineto** — type foundry that drew Circular and worked on Spotify Mix. https://lineto.com
- **Material Design** — elevation tier system and motion language. https://m3.material.io

## 14. Do's and Don'ts

**Do:**
- Use `#121212` not `#000000` for the page canvas — pure black crushes cover-art saturation.
- Reserve green `#1ed760` for primary CTA, wordmark, Liked-Songs heart, and equalizer indicator only.
- Pair green CTA with **black** label text (`#000000`), never white. This is the most distinctive thing about the brand.
- Apply `-0.03em` to `-0.04em` tracking on all display sizes (24px+ at 700+ weight); push to `-0.05em` on 96px Wrapped stat numerals.
- Sample cover-art dominant colour for playlist hero gradient over the top 232px.
- Keep the sidebar pure black `#000000`, distinct from `#121212` main panel — the contrast is the layout's spine.
- Use `tnum` on track-row time columns and Wrapped stat numerals.
- Use 1:1 square aspect for album tiles; 16:9 for artist hero banner.
- Scale primary buttons 1.04× on hover with no shadow change; spring-ease the Play FAB into existence.
- Default to dark — Spotify has no light theme on the consumer product.

**Don't:**
- Don't use white text on green CTA — it's `#000000`, always.
- Don't use 600 weight in display type — the system is 400/500/700/900, no 600.
- Don't use italic Spotify Mix in product — the cut exists but is essentially never used.
- Don't put green anywhere except the four sanctioned places (CTA, logo, Liked, equalizer).
- Don't put shadows on resting tiles — only on the cover-art layer at hover.
- Don't use uppercase outside of badges (NEW, EXPLICIT, PREMIUM) — sentence case is the rule.
- Don't render carousel arrows on touch devices — swipe replaces them.
- Don't introduce a light-mode product theme — the brand is dark.
- Don't use the classic `#1db954` green for new surfaces — the modern green is `#1ed760`.
- Don't pad rails generously — the page is content-dense by design; over-spacing breaks the "library wall" feel.
- Don't pair Spotify Mix with a serif companion — single-family, single-voice typography.
- Don't use the search input as a generic input field — its white surface is brand-specific to search foregrounding.

## 15. Agent Prompt Guide

### Quick Color Reference
- Canvas: `#121212`
- Brand Green: `#1ed760`
- Green Hover: `#1fdf64`
- On-Brand (CTA label): `#000000`
- Pure White: `#ffffff`
- Subdued: `#a7a7a7`
- Surface Default: `#181818`
- Surface Hover: `#282828`
- Sidebar Black: `#000000`
- Border: `#282828`

### Example Component Prompts
1. "Create a Spotify-style playlist hero — top 232px gradient washed from cover-art-derived `#5a3e9f` fading into `#121212` canvas, 232×232 cover art left, 72px Spotify Mix 900-weight title with `-0.04em` tracking right, 'Playlist · Made by Spotify · 2.3M likes' metadata in 14px / 400 `#a7a7a7` beneath, 72×72 green `#1ed760` circular Play FAB anchored bottom-left of cover with `0 8px 8px rgba(0,0,0,0.3)` shadow."
2. "Design a Spotify album tile row — 6 1:1 square tiles per row at 1440px desktop, 24px gap, `#181818` background with 16px padding, cover art on top + 18px / 700 title + 14px / 400 `#a7a7a7` artist beneath; on hover lift bg to `#282828` and pop a 56px green Play FAB onto the cover with spring ease over 200ms."
3. "Build a Spotify sidebar — 240px wide, pure `#000000` background, distinct from `#121212` main panel, 14px / 700 nav links in `#a7a7a7` (hover `#ffffff`), active item gets `#282828` 4px-radius bg, 'Home / Search / Your Library' top-of-list."
4. "Render a Spotify now-playing bar — pinned 90px tall pure-black `#000000` strip across viewport bottom, 64×64 cover thumb left, title + artist + Liked-heart, transport (shuffle/back/play/forward/repeat) centered, scrubber under transport at `#535353` rail with `#ffffff` fill (turns `#1ed760` on hover) and tabular-num time labels."
5. "Create a Spotify primary Play button — pill-shaped (`9999px` radius) `#1ed760` background, **black** `#000000` 16px / 700 text label 'Play', `8px 32px` padding, 48px tall, hover lifts to `#1fdf64` + `transform: scale(1.04)` over 200ms ease-standard."
6. "Build a Spotify Wrapped-style stat slide — 96px Spotify Mix 900-weight `#ffffff` numeral with `-0.05em` tracking centred on a `linear-gradient(135deg, #ff6437, #b28cff, #1ed760)` background, supporting label in 24px / 700 uppercase below."

### Iteration Guide
1. **Tighten the tracking.** If display feels generic, push to `-0.03em` or `-0.04em` — Spotify Mix only reads "Spotify" at aggressive negative tracking.
2. **Pair green with black, not white.** If the green CTA reads weak, the label is wrong colour — switch to `#000000`.
3. **Sample the cover art.** Hero gradients should pull from the cover, not arbitrary palettes. If the hero feels disconnected from the content, the gradient source is wrong.
4. **Scale, don't shadow.** Buttons grow 1.04× on hover; tiles grow `#181818 → #282828` on hover. Adding a button shadow breaks the geometry.
5. **Keep the chrome black.** Sidebar and now-playing bar are pure `#000000`; main panel is `#121212`. The two-tone is the layout's spine.
6. **Spring the FAB.** The Play FAB pops in on tile hover with a spring ease — too linear and it loses its bounce.
7. **Ration the green.** If green is anywhere except CTA/logo/Liked/equalizer, audit and remove.
8. **Tabular-num the time column.** Track-row time columns are sacred — they must align to the pixel.
