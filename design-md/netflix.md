---
name: Netflix
tagline: Pure-black streaming theatre with signature `#e50914` red and Netflix Sans — the canonical media-tile grid.
updated_at: 2026-05-03T21:06:23+12:00
published_at: 2026-05-03T21:06:23+12:00
author: webdesignhot
source_url: https://www.netflix.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [media, marketplace]
tags: [dark, bold, sans, dense, cinematic, entertainment]
preview_swatch: ['#141414', '#e50914', '#ffffff']
related: [youtube, apple, stripe]
description: 'Netflix runs the canonical streaming-UI: a near-black `#141414` cinema canvas, the unmistakable Netflix Red `#e50914` reserved exclusively for primary action and the wordmark, and a custom Netflix Sans display cut weighted at 700 for hero billboard headlines. The page is a content theatre — auto-rotating billboard hero, edge-to-edge poster carousels with on-hover scale-up previews, and a near-zero chrome that vanishes the second the user scrolls. Type compresses tight (`-0.02em` tracking on display), buttons are flat 4px-radius rectangles with no shadow, and red is rationed to a single hue so every "Sign In" or "Watch Now" reads as the only action that matters.'

colors:
  bg: '#141414'                    # canvas — Netflix near-black, never pure 0
  bg-deep: '#000000'               # billboard gradient terminus, video player
  surface: '#1f1f1f'               # row hover, secondary panel
  surface-strong: '#2f2f2f'        # input fill, hovered control
  surface-soft: '#181818'          # alt row band on category pages
  surface-card: '#181818'          # poster default surface
  surface-overlay: 'rgba(0,0,0,0.75)' # billboard scrim overlaying still
  text: '#ffffff'                  # ink — pure white on black
  text-strong: '#ffffff'           # display
  text-body: '#e5e5e5'             # secondary running text
  text-muted: '#b3b3b3'            # captions, metadata, year/rating row
  text-soft: '#808080'             # disabled label, footer link inactive
  text-disabled: '#737373'
  brand: '#e50914'                 # Netflix Red — the only red in the system
  brand-hover: '#f40612'           # marginally brighter on hover (CTA)
  brand-active: '#b81d24'          # press / pointer-down deep red
  brand-deep: '#831010'            # archived deep variant, used in gradients
  on-brand: '#ffffff'
  accent-gold: '#e5b34a'           # IMDb-style rating accent (sparingly)
  accent-green: '#46d369'           # "% Match" indicator
  border: '#404040'                # default 1px hairline at low contrast
  border-soft: '#2a2a2a'           # divider between rows
  border-strong: '#737373'         # focused input outline
  scrim-top: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)'
  scrim-bottom: 'linear-gradient(0deg, #141414 0%, transparent 100%)'
  shadow-card: 'rgba(0,0,0,0.75)'  # poster hover lift shadow
  shadow-billboard: 'rgba(0,0,0,0.85)' # heavy under-billboard tint
  success: '#46d369'               # download-complete, mature OK
  warning: '#ffa00a'               # mid-quality download warning
  danger: '#e87c03'                # form-validation error orange
  danger-text: '#b9090b'           # legal disclaimer red text
  info: '#0080ff'                  # informational link sub-band
  rating-mature: '#cc0000'         # TV-MA badge ground
  progress-watched: '#e50914'      # red progress indicator on continue-watching
  progress-rail: '#5a5a5a'         # unfilled progress rail
  player-control: 'rgba(255,255,255,0.9)' # play/pause icon fill
  player-rail: 'rgba(255,255,255,0.3)'    # video scrubber rail
  download-fill: '#0071eb'         # blue legacy download accent

typography:
  display:
    family: '"Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [300, 400, 500, 700, 900]
    opentype-features: ['ss01', 'tnum']
  body:
    family: '"Netflix Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400]
  scale:
    billboard-hero:    { size: 64, weight: 900, lineHeight: 1.05, tracking: '-0.03em', family: display }
    billboard-logo-img: { size: 0,  weight: 0,   lineHeight: 1.0,  tracking: '0',       family: display, notes: 'Title-card SVG, not type — but rendered at ~280–360px wide' }
    display-xl:        { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.02em', family: display }
    display-lg:        { size: 32, weight: 700, lineHeight: 1.15, tracking: '-0.01em', family: display }
    display-md:        { size: 24, weight: 700, lineHeight: 1.2,  tracking: '0',       family: display }
    section-title:     { size: 20, weight: 500, lineHeight: 1.3,  tracking: '0',       family: display }
    row-title:         { size: 18, weight: 500, lineHeight: 1.2,  tracking: '0',       family: display, notes: 'Carousel row label' }
    body-lg:           { size: 18, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    body-md:           { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    body-sm:           { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',       family: body }
    button-lg:         { size: 18, weight: 500, lineHeight: 1.0,  tracking: '0',       family: display, notes: '"Watch Now" — large red CTA' }
    button-md:         { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body }
    caption:           { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body }
    metadata:          { size: 14, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, opentype: ['tnum'], notes: '"2024 · 1h 52m · TV-MA" row' }
    badge-rating:      { size: 12, weight: 700, lineHeight: 1.0,  tracking: '0.04em',  family: body, transform: uppercase }
    nav-link:          { size: 14, weight: 400, lineHeight: 1.0,  tracking: '0',       family: body }
    legal:             { size: 12, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    micro-label:       { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.06em',  family: body, transform: uppercase, notes: '"NEW EPISODE", "TOP 10"' }

radius:
  micro: 0
  sm: 2          # poster hover edge
  md: 4          # primary button radius
  lg: 6
  xl: 8
  pill: 9999     # avatar, profile selector, kids-tag pill

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120]

layout:
  page-width: 1920          # billboard fills viewport
  content-max: 1440
  header-height: 68         # transparent at top, solid #141414 after 50px scroll
  row-gap: 36               # between carousel rows
  poster-aspect: '2:3'      # portrait poster card
  billboard-aspect: '16:9'  # hero still

components:
  button-primary:
    bg: '#e50914'
    color: '#ffffff'
    radius: 4
    padding: '12px 24px'
    height: 48
    font: button-lg
    weight: 500
    use: 'Watch Now, Sign In, Get Started — only red CTA on the page.'
  button-primary-hover:
    bg: '#f40612'
    color: '#ffffff'
    radius: 4
    use: 'Pointer-over state, marginal brighten.'
  button-primary-large:
    bg: '#e50914'
    color: '#ffffff'
    radius: 4
    padding: '16px 32px'
    height: 56
    font: button-lg
    weight: 700
    use: 'Hero billboard "Play" CTA — pairs with white "More Info" sibling.'
  button-secondary-glass:
    bg: 'rgba(109,109,110,0.7)'
    color: '#ffffff'
    radius: 4
    padding: '12px 24px'
    use: 'Translucent grey "More Info" sibling on billboard.'
  button-white:
    bg: '#ffffff'
    color: '#000000'
    radius: 4
    padding: '12px 24px'
    use: 'Marketing landing "Get Started" on legal sub-pages.'
  button-ghost:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #ffffff'
    radius: 4
    use: 'Sign-in modal cancel, profile-edit secondary.'
  button-icon-circle:
    bg: 'rgba(42,42,42,0.6)'
    color: '#ffffff'
    radius: 9999
    height: 40
    width: 40
    border: '2px solid rgba(255,255,255,0.5)'
    use: 'Hover-on-poster My-List, Like, More — circular over poster.'
  poster-card:
    bg: '#181818'
    color: '#ffffff'
    radius: 4
    aspect: '2:3'
    use: 'Default content tile in carousel row, no shadow at rest.'
  poster-card-hover:
    bg: '#181818'
    color: '#ffffff'
    radius: 4
    transform: 'scale(1.4)'
    shadow: '0 16px 32px rgba(0,0,0,0.75)'
    use: 'On 0.75s hover delay — expands into preview card with autoplay video.'
  preview-popup:
    bg: '#181818'
    color: '#ffffff'
    radius: 6
    width: 360
    use: 'Expanded poster — autoplay clip + title + metadata + actions.'
  billboard-hero:
    bg: 'image(billboard-still) cover, #000'
    color: '#ffffff'
    use: 'Full-bleed 16:9 still with bottom scrim, title SVG, synopsis, CTAs.'
  row-carousel:
    bg: '#141414'
    color: '#ffffff'
    use: 'Horizontally-scrolling poster row with chevron arrows on hover.'
  badge-top10:
    bg: '#e50914'
    color: '#ffffff'
    radius: 0
    padding: '2px 6px'
    use: 'Red rectangular "TOP 10" tag with rank number — appears on first 10 posters.'
  badge-new:
    bg: 'transparent'
    color: '#46d369'
    border: '1px solid #46d369'
    radius: 2
    padding: '2px 6px'
    use: 'Green outlined "NEW EPISODES" / "RECENTLY ADDED" tag.'
  match-pct:
    bg: 'transparent'
    color: '#46d369'
    weight: 700
    use: '"96% Match" green text in preview metadata row.'
  progress-bar:
    bg: '#5a5a5a'
    fill: '#e50914'
    radius: 0
    height: 3
    use: 'Continue-watching red progress at bottom of poster.'
  input-text:
    bg: '#333333'
    color: '#ffffff'
    radius: 4
    border: '1px solid transparent'
    height: 50
    padding: '16px 20px 0'
    use: 'Sign-in email — floating-label inside grey field.'
  input-error:
    bg: '#333333'
    color: '#ffffff'
    border-bottom: '2px solid #e87c03'
    use: '"Please enter a valid email" — orange bottom rule.'
  nav-bar-transparent:
    bg: 'transparent'
    color: '#ffffff'
    height: 68
    use: 'Top of page state — invisible chrome over billboard.'
  nav-bar-solid:
    bg: '#141414'
    color: '#ffffff'
    height: 68
    use: 'After 50px scroll — solid black bar with logo + nav.'
  profile-tile:
    bg: 'transparent'
    color: '#ffffff'
    radius: 4
    border: 'transparent (4px on hover, white)'
    use: 'Who-is-watching profile selector — coloured avatar + name beneath.'
  modal-info:
    bg: '#181818'
    color: '#ffffff'
    radius: 6
    use: 'Title-detail modal — hero still + synopsis + episodes list + cast.'
  player-controls:
    bg: 'rgba(0,0,0,0.5)'
    color: '#ffffff'
    use: 'Bottom video-player toolbar — rail, play, volume, fullscreen.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-in-out-strong: 'cubic-bezier(0.5, 0, 0.5, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 400
  duration-poster-expand: 750     # signature delayed-hover preview
  reduced-motion: 'respects prefers-reduced-motion: poster expansion shrinks to 200ms opacity-only, no scale; billboard auto-rotation halts.'

breakpoints:
  mobile: 500
  tablet: 950
  desktop: 1280
  wide: 1920

shadows:
  none: 'none'
  poster-rest: 'none'
  poster-hover: '0 16px 32px rgba(0,0,0,0.75)'
  modal: '0 32px 64px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06)'
  billboard-scrim-bottom: 'inset 0 -200px 200px -100px #141414'
  ring: '0 0 0 2px #ffffff'

accessibility:
  contrast-text-on-bg: 19.7        # white on #141414 — AAA
  contrast-text-on-brand: 5.05     # white on #e50914 — AA at body sizes
  contrast-muted-on-bg: 8.9        # #b3b3b3 muted on #141414 — AAA
  focus-ring: '2px solid #ffffff with 4px offset'
  reduced-motion-honored: true
  caption-track: 'always available, customisable colour/size/edge'
  audio-description: 'AD track on most originals'

dark-mode: native                  # Netflix is dark-only, no light variant
---

## 1. Visual Theme & Atmosphere

Netflix is the canonical streaming-UI — a darkroom whose only purpose is to disappear behind the content. The canvas is a deliberate `#141414` (close to but never pure black), because pure-black would clip OLED into harshness against the luminous still imagery; this slight lift reads as cinematic projection-screen rather than void. Over that ground, edge-to-edge billboard stills auto-rotate at the top of the page, gradient-scrimmed at the bottom so the title artwork (an SVG, never type) and three-line synopsis legibly float on top.

The signature is restraint. Netflix's brand red `#e50914` appears exactly once per screen — on the primary CTA — and never bleeds into navigation, badges, or decoration except for two specific exceptions: the "TOP 10" rank tag and the watched-progress bar at the bottom of "Continue Watching" posters. Everything else is monochrome — white, near-white, mid-grey muted, dark surface. This rationing turns red into a wayfinding signal: wherever red is, that is what to click.

Netflix Sans, the brand's custom display sans (drawn by Dalton Maag in 2018, replacing licensed Gotham), is the second restraint. It runs heavy at the top of the page (700–900 weight, 48–64px display, `-0.02em` to `-0.03em` tight tracking) and modest below (400, 14–16px body), with no italics and no decorative weights ever in production. The result is a typography that matches the photography mood — bold cinematic billboard at scale, then quiet metadata beneath.

Density is the third axis. A category page renders 6–7 carousel rows above the fold on a 1080p display, each row a 6-poster horizontal scroller, each poster a 2:3 portrait — the "tile grid" pattern that every streaming competitor has copied. Hover any tile for 0.75s and it expands 1.4×, spawning a preview card with autoplay clip; this delayed-hover-preview is Netflix's most-imitated micro-interaction. Whitespace is minimal between rows (~36px) — the page wants to read as a content spread, not a magazine.

The chrome is whisper-thin. The top nav is transparent over the billboard and solidifies to `#141414` only after 50px of scroll. There are no shadows on resting cards, no borders around posters, no ornamental flourishes. The brand is the silence that lets the content speak.

**Key Characteristics:**
- Near-black `#141414` canvas (never pure black) for OLED-friendly cinematic ground.
- Single voltage of brand red `#e50914` reserved for primary CTA + wordmark — rationed.
- Netflix Sans custom display, 700–900 weight at 48–64px, `-0.02em` tight tracking.
- Title cards are SVG artwork, never type — type sits beneath as supporting metadata.
- 2:3 portrait poster as the canonical content unit; carousel rows with 0.75s hover-preview.
- Transparent-to-solid nav transition on scroll — chrome hides until needed.
- Flat 4px-radius rectangles for buttons; no shadows on cards at rest; circular icon-only utilities.
- Edge-to-edge billboard hero with bottom-fade scrim and SVG title-card overlay.
- Three-row metadata recipe: green % match, year, runtime, maturity rating, HD/UHD badge.
- Dark-mode-only — there is no Netflix light theme; black is the brand.

## 2. Color Palette & Roles

### Primary
- **Canvas Black** (`#141414`): The defining ground. Not `#000000` — the slight lift prevents OLED clipping and reads as projection-screen, not void.
- **Pure White** (`#ffffff`): Display headlines, primary text, white CTA on legal pages.
- **Netflix Red** (`#e50914`): The brand's only red. Primary CTA, wordmark, "TOP 10" badge, watched-progress fill. Used exactly once or twice per viewport — never decoratively.

### Brand & Dark
- **Red Hover** (`#f40612`): Marginally brighter red on pointer-over of primary CTA. The shift is subtle — 2% lift in luminance.
- **Red Active** (`#b81d24`): Pointer-down / pressed state — a deep blood-red.
- **Red Deep** (`#831010`): Archived gradient terminus, occasional dark-red wash on legacy promo modules.
- **Pure Black** (`#000000`): Reserved for billboard gradient terminus and the video player surface. Never used as page bg.

### Accent
- **Match Green** (`#46d369`): "% Match" green text in preview-card metadata row. Borrowed from Rotten-Tomatoes-fresh association.
- **Rating Gold** (`#e5b34a`): Sparingly used IMDb-style star rating on partner integrations (rare).
- **Download Blue** (`#0071eb`): Legacy mobile-download progress indicator on the apps page.

### Interactive
- **CTA Red** (`#e50914`): Primary action.
- **Glass Grey** (`rgba(109,109,110,0.7)`): The translucent "More Info" button sibling on billboard CTAs — sits over the still.
- **Outline White** (`#ffffff` 1px border on transparent): Ghost CTA on dark surface, e.g. "Cancel", "Skip Intro".
- **Disabled** (`#737373` text on `#2f2f2f` bg): Non-interactive control state.

### Neutral Scale
- **Display White** (`#ffffff`): Headlines, billboard titles.
- **Body Light** (`#e5e5e5`): Secondary running text inside synopsis, episode descriptions.
- **Muted** (`#b3b3b3`): Metadata row, "2024 · 1h 52m · TV-MA", caption text. AAA contrast on `#141414`.
- **Soft** (`#808080`): Disabled label text, footer-link inactive.
- **Disabled** (`#737373`): Greyed-out menu items.
- **Mid Grey** (`#5a5a5a`): Unfilled progress-bar rail.
- **Border Default** (`#404040`): 1px hairline at low contrast on dividers.
- **Border Soft** (`#2a2a2a`): Row-band separator.

### Surface & Borders
- **Surface Strong** (`#2f2f2f`): Sign-in input fill, hovered control surface.
- **Surface Default** (`#1f1f1f`): Hovered carousel row, secondary panel.
- **Surface Soft** (`#181818`): Default poster bg, alt row band.
- **Surface Overlay** (`rgba(0,0,0,0.75)`): Billboard-scrim ground that sits over the still.
- **Border Strong** (`#737373`): Focused input outline.

### Shadow Colors
- **Poster Hover Shadow** (`rgba(0,0,0,0.75)`): The signature lift-on-hover shadow — a hard, almost-opaque drop, because the canvas is already so dark that softer shadows would vanish.
- **Modal Shadow** (`rgba(0,0,0,0.85)`): Heavier still — used under detail modals.
- **Inset Scrim** (gradient): Bottom of billboard hero — `#141414` fades up into transparent over 200px so the title row reads against any still.

### Semantic
- **Success** (`#46d369`): Download complete, mature-content acknowledged.
- **Warning** (`#ffa00a`): Mid-quality download warning on mobile.
- **Danger** (`#e87c03`): Form-validation orange. Distinct from brand red so an error never looks like a CTA.
- **Danger Text** (`#b9090b`): Legal-disclaimer red text body.
- **Info** (`#0080ff`): Informational link sub-band.

## 3. Typography Rules

### Font Family
- **Primary**: `"Netflix Sans"` — custom Dalton Maag–drawn display sans, replacing licensed Gotham in 2018. Fallback chain: `"Helvetica Neue", Helvetica, Arial, sans-serif`.
- **Mono**: `SFMono-Regular, Menlo, Consolas, monospace` — used only in developer/help-doc surfaces and metadata-export tools, never in the consumer player.
- **OpenType Features**: `ss01` for stylistic alternates on display sizes (subtle modernised "a", "g" forms); `tnum` for the metadata row ("2024 · 1h 52m") so episode runtimes align across rows in the episode list.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Billboard Hero | Netflix Sans | 64px | 900 | 1.05 | -0.03em | ss01 | Only on legacy text-billboard fallbacks; modern uses SVG title artwork |
| Display XL | Netflix Sans | 48px | 700 | 1.1 | -0.02em | ss01 | "Stranger Things" detail-modal title |
| Display LG | Netflix Sans | 32px | 700 | 1.15 | -0.01em | ss01 | Marketing landing hero |
| Display MD | Netflix Sans | 24px | 700 | 1.2 | 0 | ss01 | Modal sub-title, episode header |
| Section Title | Netflix Sans | 20px | 500 | 1.3 | 0 | -- | "More Like This", "Trailers & More" |
| Row Title | Netflix Sans | 18px | 500 | 1.2 | 0 | -- | "Trending Now", "Because You Watched..." |
| Body LG | Netflix Sans | 18px | 400 | 1.5 | 0 | -- | Modal synopsis paragraph |
| Body MD | Netflix Sans | 16px | 400 | 1.5 | 0 | -- | Account, help, settings text |
| Body SM | Netflix Sans | 14px | 400 | 1.43 | 0 | -- | Episode descriptions, cast lists |
| Button LG | Netflix Sans | 18px | 500 | 1.0 | 0 | -- | "Play", "Watch Now" — large CTA |
| Button MD | Netflix Sans | 14px | 500 | 1.0 | 0 | -- | Modal action buttons |
| Caption | Netflix Sans | 13px | 400 | 1.4 | 0 | -- | Disclosures, fine print under cards |
| Metadata | Netflix Sans | 14px | 400 | 1.3 | 0 | tnum | "2024 · 1h 52m · TV-MA" stat row |
| Badge Rating | Netflix Sans | 12px | 700 | 1.0 | 0.04em | -- | Uppercase "TV-MA", "PG-13" badge |
| Nav Link | Netflix Sans | 14px | 400 | 1.0 | 0 | -- | "TV Shows", "Movies", "My List" |
| Legal | Netflix Sans | 12px | 400 | 1.5 | 0 | -- | Footer legal, recurring billing notice |
| Micro Label | Netflix Sans | 11px | 700 | 1.0 | 0.06em | -- | "NEW EPISODE", "TOP 10", uppercase |

### Principles
- **Title artwork over type.** When a show has a logo, Netflix renders the SVG title-card at 280–360px wide rather than typing the title in Netflix Sans — the typography is supporting cast, not the lead.
- **Heavy at the top, light below.** Display sizes use 700–900 weight; everything below 24px is 400–500. There is no 600 in production — the system is deliberately bipolar.
- **Tight tracking is a brand signal.** Display tracking runs `-0.02em` to `-0.03em`. Any time the type stretches positive, it stops feeling like Netflix.
- **No italics, no decorative weights.** Netflix Sans ships an italic cut, but it is essentially never used in product. This visual discipline keeps the surface calm.
- **Tabular numerals on metadata.** "2024 · 1h 52m · TV-MA" rows use `tnum` so episode-runtime columns align in the per-season list — typography in service of scannability.
- **Uppercase for badges only.** The only place uppercase is allowed is small badges (`TOP 10`, `NEW EPISODE`, rating tags). Everything else is sentence case.

## 4. Component Stylings

### Buttons

**Primary CTA (Red)**
- Background: `#e50914`. Text: `#ffffff`. Radius: `4px`. Padding: `12px 24px`. Height: `48px`. Font: Netflix Sans 18px / 500.
- Hover: `#f40612` (subtle brightening).
- Active: `#b81d24` (deep press).
- Use: "Sign In", "Watch Now", "Get Started". One per viewport. Never used for nav, never used decoratively.

**Primary CTA Large (Hero Play)**
- Background: `#e50914`. Text: `#ffffff`. Radius: `4px`. Padding: `16px 32px`. Height: `56px`. Font: 18px / 700.
- Use: Billboard hero "Play" — pairs with secondary "More Info" sibling.

**Secondary Glass Button**
- Background: `rgba(109,109,110,0.7)`. Text: `#ffffff`. Radius: `4px`. Padding: `12px 24px`. Height: `56px`.
- Hover: `rgba(109,109,110,0.4)` (more transparent on hover — counter-intuitively).
- Use: "More Info" sibling to billboard CTA. Translucent so the still still reads through.

**White CTA**
- Background: `#ffffff`. Text: `#000000`. Radius: `4px`. Padding: `12px 24px`.
- Use: Marketing landing "Get Started" on out-of-product legal pages, where black canvas would dominate.

**Ghost / Outline**
- Background: `transparent`. Text: `#ffffff`. Border: `1px solid #ffffff`. Radius: `4px`.
- Use: Modal "Cancel", "Skip Intro" overlay during episode opening credits.

**Icon Circle (Hover-on-Poster)**
- Background: `rgba(42,42,42,0.6)`. Color: `#ffffff`. Radius: `9999px`. Border: `2px solid rgba(255,255,255,0.5)`. Size: `40 × 40`.
- Hover: White border becomes opaque, background darkens.
- Use: My-List, Like, Down-Arrow / More — circular row of utilities on the expanded preview card.

### Cards & Tiles

**Poster Card (Default)**
- Background: `#181818` (placeholder before image loads). Color: `#ffffff`. Radius: `4px`. Aspect: 2:3 portrait.
- No shadow at rest. No border. The poster artwork itself fills the entire card.
- Use: Carousel row tile.

**Poster Card (Hover Preview)**
- Trigger: 0.75s pointer dwell.
- Transform: `scale(1.4)` from card centre. Z-index lifts above neighbours.
- Shadow: `0 16px 32px rgba(0,0,0,0.75)`.
- Content: autoplay 30s muted clip + title artwork + match-pct + maturity + runtime + 3-utility row (Play, My-List, More-Info).
- Use: Signature Netflix interaction. Width expands to ~360px so neighbouring tiles slide.

**Billboard Hero**
- Aspect: 16:9 full-bleed, fills viewport on landing pages.
- Bottom inset gradient: `#141414` over 200px so title row floats.
- Title: SVG artwork (not type), 280–360px wide, anchored bottom-left at 1/3 page width.
- Synopsis: 3-line max, `text-body` color, 18px / 400.
- CTAs: Red Play + Glass More-Info side-by-side.
- Auto-rotates every 12s with a 1s dissolve transition; user interaction (hover) pauses rotation.

**Detail Modal**
- Background: `#181818`. Radius: `6px` (top corners; bottom flush). Width: clamp(800px, 80vw, 1280px).
- Shadow: `0 32px 64px rgba(0,0,0,0.85)`.
- Header: hero still 16:9. Body: synopsis + cast + match% + episode list.
- Use: Click-from-poster opens detail modal — the canonical "show page".

### Badges, Tags, Indicators

**TOP 10 Badge**
- Background: `#e50914`. Color: `#ffffff`. Radius: `0px` (sharp corner). Padding: `2px 6px`.
- Visual: red rectangular flag anchored to top-left of poster with rank number 1–10 in white sans 24px / 700.
- Use: only on first 10 carousel posters in "Top 10 in [Country] Today" row.

**NEW EPISODE / RECENTLY ADDED**
- Background: `transparent`. Color: `#46d369`. Border: `1px solid #46d369`. Radius: `2px`.
- Use: Outlined green pill bottom-left of poster on returning-series tiles.

**Match %**
- Background: `transparent`. Color: `#46d369`. Weight: 700.
- Use: "96% Match" green text, leading the metadata row in preview cards.

**Maturity Rating**
- Background: `#404040`. Color: `#ffffff`. Padding: `2px 6px`. Font: 12px / 700 uppercase.
- Use: "TV-MA", "PG-13" — rating chip in metadata row.

**Watched Progress Bar**
- Background: `#5a5a5a` (rail). Fill: `#e50914`. Height: `3px`. Radius: `0`.
- Use: Bottom edge of "Continue Watching" poster — single horizontal line.

### Inputs & Forms

**Text Input (Sign-in)**
- Background: `#333333`. Color: `#ffffff`. Border: `1px solid transparent`. Radius: `4px`. Height: `50px`. Padding: `16px 20px 0`.
- Floating label: `#8c8c8c` 12px / 400 inside the field, animates to top-left on focus.
- Focus: Border `#737373`.

**Input (Error)**
- Same as text input + `border-bottom: 2px solid #e87c03`.
- Error text below: 13px / 400 `#e87c03`, e.g. "Please enter a valid email or phone number."

**Checkbox**
- Background: `#737373`. Color: `#ffffff` (check mark). Radius: `2px`. Size: `20 × 20`.
- Use: "Remember me" on sign-in.

### Navigation

**Top Nav (Transparent State)**
- Background: `transparent` over billboard. Color: `#ffffff`. Height: `68px`.
- Logo: red Netflix wordmark anchored left.
- Links: "Home", "TV Shows", "Movies", "New & Popular", "My List", "Browse by Languages".

**Top Nav (Solid State)**
- Background: `#141414`. Triggered after `scrollY > 50px`.
- Same structure; gains a subtle 1px bottom hairline `#2a2a2a`.

**Profile Selector (Who is Watching)**
- Background: `transparent`. Avatar tile: 200×200 coloured square with character portrait or icon.
- Hover: 4px white border, transform `scale(1.05)`, label brightens to `#ffffff`.
- Layout: 4–5 profiles centered, "Manage Profiles" pill below.

### Player

**Player Controls Bar**
- Background: `linear-gradient(0deg, rgba(0,0,0,0.7), transparent)`. Height: `100px` from bottom edge.
- Scrubber rail: `rgba(255,255,255,0.3)`, fill `#e50914`, height 4px.
- Playhead: `#e50914` 16×16 circle, scales to 20×20 on hover.
- Buttons: 24×24 SVG icons in `rgba(255,255,255,0.9)`.

## 5. Layout Principles

### Spacing System
- Base: 4px. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120.
- Row gap (between carousel rows): 36px — tight enough to read as a content spread, loose enough to separate rows.
- Poster gap (intra-row): 8px on desktop, 4px on mobile.
- Section gap (between major page modules): 64px.

### Grid & Container
- Page width: 1920px max — billboard fills viewport edge-to-edge on widescreens.
- Content max: 1440px on the modal/detail pages.
- Carousel: 6 posters visible per row at 1440px desktop, 4 at tablet, 2.5 at mobile (peek).
- Header: 68px fixed with transparent-to-solid transition.
- Detail modal: clamp(800, 80vw, 1280) — overlays with `rgba(0,0,0,0.7)` scrim behind.

### Whitespace Philosophy
Netflix is a content-density product, not a whitespace product. Above-the-fold renders 6–7 carousel rows on a 1080p display. Whitespace exists only to separate rows and to scrim around the billboard hero — there is no editorial breathing room between modules. This is deliberate: the page wants to read as a video-store wall of options, not a magazine spread.

### Section Cadence
- Billboard hero (16:9 full-bleed)
- Continue Watching row (auto-shown if user has profile activity)
- Trending Now (top 10)
- New Releases
- 3–6 personalised "Because you watched X" rows
- Genre rows (variable, based on profile)
- Footer (compact dark `#000` band)

There is no light/dark alternation — Netflix is dark all the way down.

## 6. Shapes & Radius Scale

- **Sharp** (`0px`): TOP 10 badges, watched-progress bar, billboard image edges. Sharp corners belong to mass-content elements where the artwork itself dominates.
- **Micro** (`2px`): NEW EPISODE outlined tag.
- **Standard** (`4px`): Primary CTA, secondary buttons, poster cards, input fields. The default radius across the system.
- **Comfortable** (`6px`): Detail modal corners (top only — bottom flushes to viewport edge).
- **Relaxed** (`8px`): Rare; some marketing-page card variants.
- **Pill** (`9999px`): Profile avatar, hover-on-poster icon-circle utilities, kids-tag pill, search icon.

There is no large-rounded card variant. Netflix's geometry is intentionally rectilinear — cinematic frames are rectangular, and the UI mirrors that.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (flat) | No shadow, no border | Default poster at rest, page background, nav-bar transparent state |
| 1 (hairline) | 1px `#2a2a2a` border or `#404040` divider | Section dividers, footer top edge, focused input |
| 2 (hover) | `0 16px 32px rgba(0,0,0,0.75)` + scale(1.4) | Poster hover preview — the signature elevation |
| 3 (modal) | `0 32px 64px rgba(0,0,0,0.85)` + `rgba(0,0,0,0.7)` scrim behind | Detail modal, account dialogs |
| 4 (overlay) | `rgba(0,0,0,0.5)` scrim + nothing | Player chrome over video |
| 5 (toast) | `0 4px 12px rgba(0,0,0,0.6)` | Mobile download toast |

### Shadow Philosophy
On a `#141414` ground, soft shadows vanish — so Netflix uses *hard, near-opaque drops* instead. The poster-hover shadow is `rgba(0,0,0,0.75)` (75% opacity), which on most other UIs would feel oppressive but on Netflix's ink-dark ground reads as a clear lift. There is no brand-tinted shadow ever — colour is reserved for the brand red, not for elevation.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for fades, opacity, simple slides.
- **Out**: `cubic-bezier(0, 0, 0.2, 1)` — used for incoming elements (modal in, preview-card expand).
- **In-Out Strong**: `cubic-bezier(0.5, 0, 0.5, 1)` — used for the poster scale-up (signature feel).

### Duration Buckets
- **Fast**: 100ms — button hover colour shift.
- **Standard**: 200ms — modal fade-in, billboard CTA hover.
- **Slow**: 400ms — billboard auto-rotation dissolve.
- **Poster expand**: 750ms — the deliberate, almost slow expand-on-hover that makes the preview feel like the user is "leaning in" to inspect a tile.

### Per-Component Recipes
- **Primary CTA hover**: Background `#e50914 → #f40612`, 100ms ease-standard. No transform, no shadow change.
- **Secondary glass hover**: `bg rgba(109,109,110,0.7) → rgba(109,109,110,0.4)`, 100ms — reads as becoming more transparent (counter-intuitive but distinctive).
- **Poster hover**: 0.75s dwell delay, then `scale(1) → scale(1.4)` over 750ms with `cubic-bezier(0.5, 0, 0.5, 1)` plus shadow fade-in. Neighbouring posters slide horizontally to make room.
- **Billboard auto-rotate**: 12s dwell, 1s cross-dissolve between stills.
- **Modal in**: 300ms ease-out, scale `0.95 → 1.0` + opacity `0 → 1`.
- **Top-nav solidify**: 200ms ease-standard, transparent → `#141414` at scrollY > 50px.

### Page Transitions
Netflix is largely a single-page experience — most navigation is intra-page (modals, tabs). The browse-page-to-detail transition uses route-driven modal mount, not full page navigation, so the underlying browse retains scroll position when the modal closes.

### Reduced Motion
`prefers-reduced-motion: reduce` collapses:
- Poster scale-up → 200ms opacity-only, no scale, no neighbour shift.
- Billboard auto-rotate → halts; user must use chevron arrows.
- Billboard preview-clip autoplay → static still, no clip motion.
- Modal scale-in → opacity-only fade.

## 9. Accessibility & A11y

### Contrast Pairs
- White `#ffffff` on canvas `#141414`: **19.7:1** — AAA at all sizes.
- Muted `#b3b3b3` on canvas `#141414`: **8.9:1** — AAA at body sizes.
- White on brand red `#e50914`: **5.05:1** — AA at body sizes (passes WCAG AA for both 14px+ regular and 18px+ large).
- Soft `#808080` on canvas: **4.6:1** — AA only for large text; avoid for body.
- Match-green `#46d369` on canvas: **8.7:1** — AAA.

### Focus Indicators
- Default focus: `2px solid #ffffff` outline with `4px` offset on all interactive controls. White against the dark canvas reads with maximum salience.
- Tab order: top nav left-to-right → main carousel rows top-to-bottom, posters within row left-to-right.

### ARIA Patterns
- Carousels: `role="region" aria-roledescription="carousel"` with `aria-label` per row title; chevron buttons get `aria-label="Next slide"` etc.
- Posters: `role="link" aria-label="[Title], [Year], [Maturity]. Click to view details."`
- Modal: `role="dialog" aria-modal="true" aria-labelledby="modal-title"`; focus is trapped, ESC closes.
- Player: `role="application"` with full keyboard shortcuts (Space play/pause, F fullscreen, M mute, Arrow seeks).

### Keyboard Navigation
- Tab moves between rows; Shift+Tab reverses.
- Arrow keys move within a row; Home/End jump to row start/end.
- Enter activates a poster (opens modal).
- ESC closes modal; ESC again pauses player; ESC again exits fullscreen.

### Screen Reader Hints
- Poster `aria-label` includes title, year, maturity rating, match %, and runtime — packed into one string so SR users get the same metadata sighted users see.
- Billboard SVG title-card has `aria-label="[Show name] — featured"` because the SVG has no readable text.

### Caption / Audio Description
- Caption tracks always available, with user-customisable colour, size, font, edge style, and background opacity.
- Audio description tracks on most originals; toggle accessible from player gear menu.

### Reduced Motion
Honoured. See §8.

## 10. Responsive Behavior

### Breakpoints
| Token | Min | Use |
|-------|-----|-----|
| mobile | 0px | 2.5 posters peek per row, single-column metadata |
| tablet | 950px | 4 posters per row |
| desktop | 1280px | 6 posters per row |
| wide | 1920px | 6 posters with wider gutter, billboard fills full bleed |

### Touch Targets
- 48×48 minimum hit area on icon-circle utilities. Buttons stack to full-width on mobile.

### Collapsing Strategy
- **Top nav**: 6 links collapse into a single hamburger at `< 950px`.
- **Billboard CTAs**: stack vertically with full width below the synopsis on `< 600px`.
- **Detail modal**: full-screen sheet on `< 768px`, dismissable by swipe-down.
- **Carousel arrows**: hidden on touch devices — swipe gesture replaces them.

### Image Behavior
- Posters: 2:3 portrait, served at 250w/500w/1000w via responsive `srcset`. Lazy-load below the fold.
- Billboard: 16:9, served at 720p/1080p/1440p/2160p. Hero still preloaded; clip lazy-loaded after 0.75s hover.

### Container Queries
Used sparingly — preview-popup expands to either left or right of the source poster depending on viewport edge proximity (CQ on the row container).

## 11. Content & Voice

### Tone
Netflix's voice is **direct, confident, and content-led**. It doesn't sell — it presents. The marketing copy is short, declarative, and anchored on title/synopsis pairings. There is no "we believe", no "the future of"; there is only the show, the still, and the play button.

### Microcopy Patterns
- **Primary CTA**: "Watch Now" (in product), "Get Started" (acquisition), "Sign In" (return).
- **Secondary CTA**: "More Info" (always paired with Play on billboard).
- **Empty list**: "Movies and shows you've watched will appear here. Browse to add some."
- **Error**: "Please enter a valid email or phone number." (orange bottom rule + 13px text below).
- **Profile prompt**: "Who's watching?" — capital W, capital W, no period.
- **Mature gate**: "Are you sure? This title may not be suitable for all viewers."
- **Cancellation**: "Cancel anytime." — three words, set in Netflix Sans 14px, anchored under primary CTA on acquisition pages.

### Empty States
Empty My-List: "Movies and shows you've added to your list will appear here. Browse to add some." + horizontal scroller of suggested adds.

Empty Continue Watching: hidden entirely — the row simply doesn't render if the profile has no in-progress titles.

### CTA Verb Conventions
- "Watch" (primary verb in product) > "Play" > "Get Started" > "Sign In".
- "Add to My List" not "Save", not "Bookmark".
- "More Info" not "Details", not "Learn More".
- "Skip Intro" — Netflix's most-imitated microcopy, white pill bottom-right of player during opening credits.

## 12. Dark Mode & Theming

Netflix is **dark-only**. There is no light-mode variant offered, ever, on the consumer surface. The video-streaming context (often watched in low-light, often on TV/large displays) means dark theme is functional, not stylistic — light-on-dark prevents viewer-eye fatigue during long sessions and keeps the video-content luminance dominant.

The only "light" surface is the legal/help-doc fallback at `help.netflix.com` and the Apple/Google App Store landing pages, which use white CTAs on neutral grey for ad-network compatibility. These are not part of the core product theme.

If theming were to be added (it has not, after 25+ years), the canvas would lift to `#fafafa` and brand red would deepen marginally to `#c8000e` to retain AA contrast on white — but no public design has done this.

## 13. Lineage & Influences

Netflix's visual lineage is two-streamed.

**Cinema and broadcast posters.** The 2:3 portrait poster, the billboard hero, the title-card-as-artwork rendering — these are direct adaptations of theatrical movie-poster design (Saul Bass, Drew Struzan) and TV-network billboard rotators. The dark canvas mimics a darkened cinema lobby; the rationed red is the cinema-marquee neon.

**Apple and pre-2018 Hulu/HBO.** The carousel-row layout, hover-preview interaction, and detail-modal pattern were arguably first popularised by Hulu (~2010) and Apple iTunes Store, with HBO GO contributing the dark-canvas-with-bright-still aesthetic. Netflix amplified all three to industry-standard.

What Netflix rejects: heavy decorative type, brand-tinted shadows (Stripe-style), light canvases, multi-colour palettes, ornamental flourishes. The brand's confidence is in restraint — content is the visual; chrome must vanish.

**Influences:**
- **Saul Bass** — title-as-graphic principle. Netflix's title artwork is its modern descendant. https://en.wikipedia.org/wiki/Saul_Bass
- **HBO GO (2010 era)** — dark-canvas-streaming-UI ancestor.
- **Apple iTunes Store / Apple TV** — carousel-row + tile-grid pattern. https://tv.apple.com
- **Hulu (pre-2017)** — hover-preview interaction predecessor.
- **Dalton Maag** — type foundry that drew Netflix Sans, replacing Gotham. https://www.daltonmaag.com

## 14. Do's and Don'ts

**Do:**
- Use `#141414` not `#000000` for the page canvas — pure black clips OLED and reads harsher.
- Reserve red `#e50914` for primary CTA, wordmark, TOP 10 badge, and watched progress only.
- Render show titles as SVG artwork at 280–360px wide, not as type.
- Apply `-0.02em` to `-0.03em` tracking on all display sizes (16px+ at 700+ weight).
- Use 0.75s hover dwell before the poster preview expands — this delay is the brand's interaction signature.
- Keep the top nav transparent over the billboard; solidify only after 50px scroll.
- Use `tnum` on metadata rows so episode runtimes align in the season list.
- Use a 2:3 portrait aspect for poster cards, 16:9 for billboard hero.
- Ration the green `#46d369` "% Match" indicator — never use green decoratively.
- Default to dark — Netflix has no light theme and never should.

**Don't:**
- Don't add brand-tinted shadows — colour is for the brand red, not for elevation.
- Don't use 600 weight in production type — the system is bipolar 400/500 vs 700/900, no in-between.
- Don't use italic Netflix Sans — the cut exists but is essentially never used.
- Don't put red anywhere except the four sanctioned places (CTA, logo, TOP 10, progress).
- Don't use shadows on resting posters — the canvas is too dark for soft shadows to read; only `rgba(0,0,0,0.75)` on hover.
- Don't add ornament to the billboard hero — title artwork + 3-line synopsis + 2 CTAs is the entire vocabulary.
- Don't use uppercase outside of badges — sentence case is the rule.
- Don't render carousel arrows on touch devices — swipe replaces them.
- Don't introduce light-mode — the brand is dark. Don't.
- Don't pad rows generously — the page is content-dense by design; over-spacing breaks the "video-store wall" feel.
- Don't use Netflix Sans for pure text on third-party surfaces — the font is licensed for Netflix-owned product only.

## 15. Agent Prompt Guide

### Quick Color Reference
- Canvas: `#141414`
- Brand Red: `#e50914`
- Red Hover: `#f40612`
- Pure White: `#ffffff`
- Muted: `#b3b3b3`
- Surface Soft: `#181818`
- Match Green: `#46d369`
- Border Default: `#404040`
- Glass Grey: `rgba(109,109,110,0.7)`
- Modal Surface: `#181818`

### Example Component Prompts
1. "Create a Netflix-style billboard hero — full-bleed 16:9 still with bottom `#141414` gradient scrim over 200px, SVG title-card artwork at 320px wide anchored bottom-left at 1/3 page width, three-line synopsis in `#e5e5e5` 18px Netflix Sans, paired red `#e50914` Play CTA + glass `rgba(109,109,110,0.7)` More Info button beneath."
2. "Design a Netflix poster row — 6 portrait 2:3 tiles per row at 1440px desktop, 8px gap, no shadow at rest, on 0.75s hover the focused tile scales 1.4× with `cubic-bezier(0.5,0,0.5,1)` over 750ms and gains `0 16px 32px rgba(0,0,0,0.75)` shadow."
3. "Build a Netflix-style top nav — height 68px, transparent at top, solidifies to `#141414` after scrollY > 50px (200ms transition), red wordmark logo left, six white nav links right, 14px Netflix Sans 400."
4. "Render a Netflix detail modal — `#181818` background, 6px top radius, 800px–1280px width, 16:9 hero still header, synopsis paragraph, episode list with tabular-num runtime column, scrim `rgba(0,0,0,0.7)` behind."
5. "Create a Netflix Top 10 badge — sharp-corner red `#e50914` rectangle anchored top-left of poster, 24px white sans 700 rank number inside, 'TOP 10' label uppercase 11px / 700 letter-spacing 0.06em underneath."

### Iteration Guide
1. **Tighten the tracking.** If display type feels generic, push tracking to `-0.02em` to `-0.03em` — Netflix Sans only reads "Netflix" at negative tracking.
2. **Remove a colour.** If the page feels noisy, audit for non-brand-red red, non-match green, non-muted grey — Netflix's palette is a small list.
3. **Lift the canvas.** If pure black `#000` feels harsh, swap to `#141414` — the slight warmth is what makes it cinematic.
4. **Delay the hover.** If poster previews feel jumpy, the dwell is too short — tune to 750ms before expand.
5. **SVG-the-title.** If a show name reads as "wallpaper text", swap it to title-card SVG artwork — Netflix never types titles in the player chrome.
6. **Ration the shadow.** Cards at rest should have *zero* shadow. Shadow appears only on hover or in modals — anywhere else, it reads non-Netflix.
7. **Reduce the chrome.** If the page has a visible nav bar, persistent buttons, or sticky filters — strip them. Netflix's UI vanishes.
8. **Auto-rotate, don't auto-play.** Billboard rotates every 12s; clip auto-plays only on dwell. Confusing the two breaks the brand.
