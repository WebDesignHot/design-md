---
name: Prime Video
tagline: Amazon-blue streaming canvas with Ember sans and the dense, utility-first marketplace UI vocabulary.
updated_at: 2026-05-03T21:06:23+12:00
published_at: 2026-05-03T21:06:23+12:00
author: webdesignhot
source_url: https://www.primevideo.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media, marketplace]
tags: [dark, blue, sans, dense, utility, marketplace]
preview_swatch: ['#0f171e', '#1399ff', '#ffffff']
related: [netflix, hbo-max, youtube]
description: 'Prime Video is the Amazon-blue streaming canvas — a deep blue-grey `#0f171e` ground with a vivid signature blue `#1399ff` (the same Amazon-Blue voltage from the parent retail brand) on every primary CTA, navigation chevron, and progress bar. Ember (Amazon''s in-house humanist sans) carries display at 700 weight modestly tracked. Where Netflix is content-theatre and Disney+ is hall-of-franchises, Prime Video is content-marketplace — the page interleaves "Included with Prime", "Rent or Buy", and "Free with ads" tiers, surfaces price-tags on tiles, and mixes a marketplace-utility vocabulary with streaming-UI conventions. Type density is high, surfaces are denser than Max, buttons are flat 4px-radius rectangles, and a yellow `#ffba33` star rating evokes the Amazon-marketplace heritage. The brand reads as a *streaming layer of an e-commerce platform* — functional, dense, transactional.'

colors:
  bg: '#0f171e'                    # canvas — Amazon Prime deep blue-grey
  bg-deep: '#000000'                 # video player surface
  surface: '#1a242f'                  # secondary panel
  surface-strong: '#232f3e'           # hover surface, input fill (Amazon's classic dark slate)
  surface-soft: '#0a1117'             # alt row band
  surface-card: '#1a242f'             # poster default surface
  surface-overlay: 'rgba(15,23,30,0.85)'
  text: '#ffffff'                     # ink
  text-strong: '#ffffff'
  text-body: '#dbdbdb'                # secondary running text
  text-muted: '#9ca8b4'               # metadata
  text-soft: '#6f7c89'                # disabled, footer
  text-disabled: '#4f5a64'
  brand: '#1399ff'                    # Amazon Blue / Prime Video signature
  brand-hover: '#3aabff'              # hover lift
  brand-active: '#0072c8'             # press deep
  brand-deep: '#005391'               # gradient terminus
  brand-amazon-orange: '#ff9900'      # legacy Amazon-marketplace orange (rare in product)
  on-brand: '#ffffff'
  star-rating: '#ffba33'              # IMDb-inherited yellow rating (Prime Video shows IMDb scores)
  imdb-yellow: '#f5c518'              # IMDb wordmark yellow on title metadata
  prime-tier: '#1399ff'               # "Included with Prime" badge bg matches brand
  rent-tier: '#ffffff'                # "Rent" tier neutral
  buy-tier: '#ff9900'                 # "Buy" tier orange (legacy Amazon)
  free-tier: '#00c08a'                # "Free with ads" tier green
  border: '#2a3a48'                   # default 1px hairline
  border-soft: '#1f2a36'              # divider
  border-strong: '#1399ff'            # focused input
  shadow-card: 'rgba(0,0,0,0.6)'
  shadow-billboard: 'rgba(0,0,0,0.85)'
  success: '#00c08a'
  warning: '#ffba33'
  danger: '#ff4757'
  info: '#1399ff'
  progress-watched: '#1399ff'
  progress-rail: '#3a4856'
  scrim-bottom: 'linear-gradient(0deg, #0f171e 0%, transparent 100%)'

typography:
  display:
    family: '"Amazon Ember Display", "Amazon Ember", Arial, "Helvetica Neue", Helvetica, sans-serif'
    weights: [400, 500, 700, 800]
    opentype-features: ['ss01', 'tnum']
  body:
    family: '"Amazon Ember", Arial, "Helvetica Neue", Helvetica, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400]
  scale:
    billboard-hero:    { size: 56, weight: 800, lineHeight: 1.05, tracking: '-0.02em', family: display, notes: 'Text fallback; SVG title-card primary' }
    display-xl:        { size: 44, weight: 700, lineHeight: 1.1,  tracking: '-0.015em',family: display }
    display-lg:        { size: 32, weight: 700, lineHeight: 1.15, tracking: '-0.01em', family: display }
    display-md:        { size: 24, weight: 700, lineHeight: 1.2,  tracking: '0',       family: display }
    display-sm:        { size: 20, weight: 500, lineHeight: 1.25, tracking: '0',       family: display }
    section-title:     { size: 18, weight: 700, lineHeight: 1.3,  tracking: '0',       family: display }
    row-title:         { size: 16, weight: 700, lineHeight: 1.2,  tracking: '0',       family: display }
    body-lg:           { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    body-md:           { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',       family: body }
    body-sm:           { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body }
    button-lg:         { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body }
    button-md:         { size: 13, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body }
    caption:           { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body }
    metadata:          { size: 13, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, opentype: ['tnum'] }
    badge-rating:      { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.04em',  family: body, transform: uppercase }
    nav-link:          { size: 14, weight: 400, lineHeight: 1.0,  tracking: '0',       family: body }
    legal:             { size: 11, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    micro-label:       { size: 10, weight: 700, lineHeight: 1.0,  tracking: '0.06em',  family: body, transform: uppercase }
    price-tag:         { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'], notes: '"$3.99 to rent" pricing on tiles' }
    star-rating-num:   { size: 13, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'] }

radius:
  micro: 0
  sm: 2
  md: 4           # primary CTA — Amazon's classic flat radius
  lg: 6
  xl: 8
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96]

layout:
  page-width: 1920
  content-max: 1500
  header-height: 60
  row-gap: 32
  poster-aspect: '16:9'           # Prime Video uses 16:9 LANDSCAPE thumbnails by default, not 2:3 portrait
  poster-aspect-alt: '2:3'         # 2:3 portrait used on movie-detail and Originals
  billboard-aspect: '16:9'

components:
  button-primary:
    bg: '#1399ff'
    color: '#ffffff'
    radius: 4
    padding: '12px 24px'
    height: 44
    font: button-lg
    use: 'Watch Now, Sign In, Rent for $X — primary blue CTA.'
  button-primary-hover:
    bg: '#3aabff'
    color: '#ffffff'
    radius: 4
    use: 'Hover lift.'
  button-primary-active:
    bg: '#0072c8'
    color: '#ffffff'
    radius: 4
    use: 'Press state.'
  button-large-hero:
    bg: '#1399ff'
    color: '#ffffff'
    radius: 4
    padding: '14px 32px'
    height: 52
    use: 'Billboard hero "Watch Now".'
  button-glass:
    bg: 'rgba(255,255,255,0.15)'
    color: '#ffffff'
    radius: 4
    border: '1px solid rgba(255,255,255,0.25)'
    use: '"Trailer" / "Details" sibling on billboard.'
  button-rent:
    bg: '#1a242f'
    color: '#ffffff'
    border: '1px solid #1399ff'
    radius: 4
    padding: '10px 20px'
    use: '"Rent for $3.99" outlined CTA on movie-detail page.'
  button-buy:
    bg: '#ff9900'
    color: '#0f171e'
    radius: 4
    padding: '10px 20px'
    use: '"Buy for $14.99" — Amazon-orange purchase CTA.'
  button-ghost:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #6f7c89'
    radius: 4
    use: 'Modal cancel, Skip Intro.'
  poster-card-landscape:
    bg: '#1a242f'
    color: '#ffffff'
    radius: 4
    aspect: '16:9'
    use: 'Default Prime Video tile — landscape thumbnail with title overlay.'
  poster-card-portrait:
    bg: '#1a242f'
    color: '#ffffff'
    radius: 4
    aspect: '2:3'
    use: 'Movie-detail and Originals row alt tile.'
  poster-card-hover:
    bg: '#1a242f'
    color: '#ffffff'
    radius: 4
    transform: 'scale(1.04)'
    shadow: '0 8px 24px rgba(0,0,0,0.6)'
    border: '2px solid #1399ff'
    use: 'Subtle scale + brand-blue border ring on hover.'
  preview-popup:
    bg: '#1a242f'
    color: '#ffffff'
    radius: 6
    width: 360
    use: 'Click-to-expand preview with X-Ray cast, IMDb score, prime/rent/buy actions.'
  billboard-hero:
    bg: 'image(billboard-still) cover, #000'
    color: '#ffffff'
    use: 'Full-bleed 16:9 still with bottom canvas gradient + SVG title-card.'
  row-carousel:
    bg: '#0f171e'
    color: '#ffffff'
    use: 'Horizontal scroller with arrow chevrons.'
  badge-prime:
    bg: '#1399ff'
    color: '#ffffff'
    radius: 2
    padding: '2px 6px'
    transform: uppercase
    weight: 700
    use: '"prime" blue tag on Included-with-Prime tiles.'
  badge-imdb:
    bg: '#f5c518'
    color: '#0f171e'
    radius: 2
    padding: '2px 6px'
    weight: 700
    use: '"IMDb 8.5" rating badge in metadata row.'
  badge-rating:
    bg: 'rgba(255,255,255,0.15)'
    color: '#ffffff'
    radius: 2
    padding: '2px 6px'
    use: 'Maturity chip "TV-MA", "R".'
  badge-x-ray:
    bg: 'transparent'
    color: '#1399ff'
    border: '1px solid #1399ff'
    radius: 2
    use: '"X-Ray" indicator denoting X-Ray cast/scene metadata available.'
  badge-uhd:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #6f7c89'
    radius: 2
    use: '"UHD", "HDR", "Dolby Vision" tech-spec chip.'
  star-rating-row:
    bg: 'transparent'
    color: '#ffba33'
    use: '★★★★☆ five-star yellow row + numeric "4.5/5" beside it.'
  progress-bar:
    bg: '#3a4856'
    fill: '#1399ff'
    radius: 0
    height: 3
    use: 'Continue-watching blue progress.'
  input-text:
    bg: '#1a242f'
    color: '#ffffff'
    radius: 4
    border: '1px solid #2a3a48'
    height: 44
    padding: '10px 16px'
    use: 'Sign-in field.'
  nav-bar:
    bg: '#0f171e'
    color: '#ffffff'
    height: 60
    border-bottom: '1px solid #2a3a48'
    use: 'Always-solid nav (no transparent state — Prime Video keeps chrome consistent).'
  modal-detail:
    bg: '#1a242f'
    color: '#ffffff'
    radius: 8
    use: 'Title-detail modal with X-Ray cast strip + episodes list + price-tier section.'
  player-controls:
    bg: 'linear-gradient(0deg, rgba(0,0,0,0.7), transparent)'
    color: '#ffffff'
    use: 'Bottom video toolbar with X-Ray button surfacing cast/music when active.'
  x-ray-panel:
    bg: 'rgba(0,0,0,0.85)'
    color: '#ffffff'
    radius: 8
    use: 'Slide-up cast/music/trivia panel — Prime Video signature feature.'
  storefront-tile:
    bg: '#1a242f'
    color: '#ffffff'
    radius: 4
    use: 'Channel-storefront entry tile (Paramount+, MGM+, Max etc add-on subscriptions).'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 360
  reduced-motion: 'respects prefers-reduced-motion: scale-up reduces to opacity, billboard rotation halts, X-Ray panel slide-up becomes opacity-only fade.'

breakpoints:
  mobile: 600
  tablet: 1024
  desktop: 1280
  wide: 1920

shadows:
  none: 'none'
  poster-rest: 'none'
  poster-hover: '0 8px 24px rgba(0,0,0,0.6)'
  modal: '0 24px 48px rgba(0,0,0,0.85)'
  ring: '0 0 0 2px #1399ff'

accessibility:
  contrast-text-on-bg: 16.4
  contrast-text-on-brand: 4.6
  contrast-muted-on-bg: 5.5
  focus-ring: '2px solid #1399ff with 2px offset'
  reduced-motion-honored: true
  caption-track: 'always available, customisable'
  audio-description: 'AD on most originals'
  x-ray-accessible: 'X-Ray cast metadata exposed to screen readers as `aria-describedby` strings'

dark-mode: native
---

## 1. Visual Theme & Atmosphere

Prime Video is the streaming-layer of Amazon's marketplace platform. The canvas is a deep blue-grey `#0f171e` (Amazon's "deep slate" used across Kindle, Alexa, and Amazon Music), with `#232f3e` as the secondary surface — the same near-black slate that dresses the Amazon retail header. Over that, `#1399ff` Amazon Blue carries every primary CTA and brand accent. This is the same blue from the Amazon retail wordmark and Prime badge — a deliberate cross-property colour reuse that signals "this is part of Amazon Prime" without saying it.

Two things distinguish Prime Video from its prestige peers (Netflix, Max, Disney+):

**Marketplace utility.** Prime Video is the only major streamer that mixes free-with-Prime, rent, buy, free-with-ads, and channel-add-on tiers in a single UI. The page renders price tags on tiles ("$3.99 to rent"), surfaces tier badges ("prime", "Free with ads", "MGM+ Channel"), and exposes the orange Amazon-shopping CTA `#ff9900` for digital purchases. Where Netflix's UI is "all-you-can-watch", Prime Video's is "shop the catalogue".

**X-Ray.** Prime Video's signature interaction is X-Ray — a slide-up panel during playback that surfaces cast (with photos), the song currently playing, trivia, and bonus footage. This data-density-as-feature is a UI characteristic borrowed from IMDb (which Amazon owns) and grafted onto the streaming player. X-Ray colour-codes its interactive elements in brand blue.

Layout-wise, Prime Video uses **landscape 16:9 tiles** as default (not 2:3 portrait like Netflix/Max/Disney+), because still imagery tends to be cleaner than poster art for the marketplace mix of TV/movies/free-with-ads/rentals. Portrait posters appear on movie-detail pages and Originals rows, but the row-rail is landscape-first.

Typography is Ember, Amazon's in-house humanist sans drawn for Kindle reading and now generalised across the Amazon ecosystem. Display runs 700–800 weight at 32–56px with `-0.01em` to `-0.02em` modest tracking. Body is 14–16px / 400 / 1.43–1.5 — slightly tighter than streaming peers because Prime Video's UI carries more text per screen (price-tags, tier-badges, IMDb scores, X-Ray cast).

Geometry is consistently flat — 4px button radius, 4px tile radius, no gradients, no glow rings. The brand is utility-streaming, not magic-streaming.

**Key Characteristics:**
- Deep blue-grey `#0f171e` canvas (Amazon's "deep slate") + `#232f3e` secondary surface.
- Amazon Blue `#1399ff` for primary CTA, brand accent, focus ring — same hue as Amazon retail.
- Marketplace-tier UI: prime / rent / buy / free-with-ads / channel-add-on badges and price-tags.
- Amazon-orange `#ff9900` for "Buy" tier purchase CTA — legacy retail crossover.
- X-Ray slide-up panel during playback — cast, song, trivia (IMDb-data-driven).
- Default tile is **16:9 landscape** (not 2:3 portrait) — marketplace-imagery preference.
- IMDb yellow `#f5c518` rating badges in metadata rows — Amazon owns IMDb.
- Star ratings in `#ffba33` yellow with numeric "4.5/5" suffix.
- Always-solid nav (no transparent-on-billboard state like Netflix/Max).
- Ember in-house sans at 700–800 weight, modest tracking, dense text.
- Dark-mode-only consumer surface; light surfaces only on Amazon retail integrations.

## 2. Color Palette & Roles

### Primary
- **Canvas Slate** (`#0f171e`): Defining ground. Amazon's "deep slate" used across Kindle/Alexa/Music.
- **Amazon Slate** (`#232f3e`): Secondary surface — same near-black-blue from Amazon retail header.
- **Pure White** (`#ffffff`): Display, primary text.
- **Amazon Blue** (`#1399ff`): Primary CTA, prime-tier badge, focus ring, watched-progress fill.

### Brand & Dark
- **Blue Hover** (`#3aabff`): Hover lift.
- **Blue Active** (`#0072c8`): Press.
- **Blue Deep** (`#005391`): Gradient terminus.
- **Amazon Orange** (`#ff9900`): Legacy retail orange — now used only for "Buy" tier CTA on digital purchases. Direct lineage to the Amazon-Smile arrow.

### Accent
- **Star Rating Yellow** (`#ffba33`): Five-star rating row.
- **IMDb Yellow** (`#f5c518`): IMDb wordmark yellow on rating badge.
- **Free Tier Green** (`#00c08a`): "Free with ads" tier badge.

### Tier Colors (Marketplace)
- **Prime Tier** (`#1399ff`): "prime" lowercase blue badge — included with Prime membership.
- **Rent Tier** (`#ffffff`): Neutral white outlined CTA "Rent for $X".
- **Buy Tier** (`#ff9900`): Amazon orange CTA "Buy for $X".
- **Free Tier** (`#00c08a`): Green badge for AVOD/free-with-ads.
- **Channel Add-on**: per-channel branded colour (e.g. MGM+ red, Paramount+ blue).

### Interactive
- **CTA Blue** (`#1399ff`): Primary action.
- **Glass White** (`rgba(255,255,255,0.15)` + 1px `rgba(255,255,255,0.25)`): Translucent secondary on billboard.
- **Outline Grey** (`#6f7c89` border on transparent): Ghost CTA.

### Neutral Scale
- **Display White** (`#ffffff`): Headlines.
- **Body Light** (`#dbdbdb`): Secondary running text.
- **Muted** (`#9ca8b4`): Metadata.
- **Soft** (`#6f7c89`): Disabled, footer.
- **Disabled** (`#4f5a64`): Greyed menu.
- **Mid Grey** (`#3a4856`): Progress rail.

### Surface & Borders
- **Surface Strong** (`#232f3e`): Hovered control, input fill.
- **Surface Default** (`#1a242f`): Modal ground, inner cards.
- **Surface Soft** (`#0a1117`): Alt-row band.
- **Border Default** (`#2a3a48`): Hairline.
- **Border Soft** (`#1f2a36`): Subtler divider.
- **Border Strong** (`#1399ff`): Focused input — matches brand.

### Shadow Colors
- **Card Shadow** (`rgba(0,0,0,0.6)`): Hover lift.
- **Modal Shadow** (`rgba(0,0,0,0.85)`): Detail modal.

### Semantic
- **Success** (`#00c08a`): Subscription confirmed; matches free-tier green.
- **Warning** (`#ffba33`): Buffering; matches star rating.
- **Danger** (`#ff4757`): Form error.
- **Info** (`#1399ff`): Matches brand.

## 3. Typography Rules

### Font Family
- **Primary Display**: `"Amazon Ember Display"` — Amazon's in-house humanist sans, display variant. Drawn for Kindle reading, generalised across Amazon ecosystem.
- **Body**: `"Amazon Ember"` — text companion.
- **Fallback**: `Arial, "Helvetica Neue", Helvetica, sans-serif`.
- **Mono**: SFMono / Menlo (developer-only).
- **OpenType Features**: `ss01` for stylistic alternates; `tnum` for prices, ratings, episode metadata.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Billboard Hero (text) | Ember Display | 56px | 800 | 1.05 | -0.02em | ss01 | Text fallback when SVG unavailable |
| Display XL | Ember Display | 44px | 700 | 1.1 | -0.015em | ss01 | Detail modal hero |
| Display LG | Ember Display | 32px | 700 | 1.15 | -0.01em | ss01 | Marketing landing |
| Display MD | Ember Display | 24px | 700 | 1.2 | 0 | ss01 | Sub-header |
| Display SM | Ember Display | 20px | 500 | 1.25 | 0 | -- | Episode title |
| Section Title | Ember Display | 18px | 700 | 1.3 | 0 | -- | "Top movies", "Continue Watching" |
| Row Title | Ember Display | 16px | 700 | 1.2 | 0 | -- | Carousel row label |
| Body LG | Ember | 16px | 400 | 1.5 | 0 | -- | Modal synopsis |
| Body MD | Ember | 14px | 400 | 1.43 | 0 | -- | Description, X-Ray cast bio |
| Body SM | Ember | 13px | 400 | 1.4 | 0 | -- | Episode descriptions, fine print |
| Button LG | Ember | 14px | 500 | 1.0 | 0 | -- | Primary CTA |
| Button MD | Ember | 13px | 500 | 1.0 | 0 | -- | Modal action |
| Caption | Ember | 12px | 400 | 1.4 | 0 | -- | Disclosures |
| Metadata | Ember | 13px | 400 | 1.3 | 0 | tnum | "2024 · S2 · 8 Eps · TV-MA · IMDb 8.5" |
| Badge Rating | Ember | 11px | 700 | 1.0 | 0.04em | -- | "TV-MA", uppercase |
| Nav Link | Ember | 14px | 400 | 1.0 | 0 | -- | Top nav |
| Legal | Ember | 11px | 400 | 1.5 | 0 | -- | Footer |
| Micro Label | Ember | 10px | 700 | 1.0 | 0.06em | -- | "PRIME ORIGINAL", uppercase |
| Price Tag | Ember | 14px | 700 | 1.0 | 0 | tnum | "$3.99 to rent" pricing on tiles |
| Star Rating Num | Ember | 13px | 700 | 1.0 | 0 | tnum | "4.5/5" beside star row |

### Principles
- **Ember reads humanist-functional, not luxury.** Where Sharp Grotesk is editorial-cool and Inspire is family-warm, Ember is utility-clear — drawn for paragraph reading on Kindle, not for headlines.
- **Tabular numerals everywhere data-driven.** Prices, IMDb ratings, episode runtimes, X-Ray timestamps all use `tnum` because Prime Video is data-dense.
- **Modest tracking.** Display caps at `-0.02em`. Ember resists Stripe-grade tightness — utility over elegance.
- **High text density.** Body sizes run 13–16px (vs Netflix's 14–18px) because Prime Video crams more metadata per tile.
- **700 weight on row titles.** Section/row titles are bolder than peers because the visual hierarchy needs to compete with price-tags and tier-badges.
- **Uppercase only for tier badges + maturity rating.** Sentence case rules elsewhere.

## 4. Component Stylings

### Buttons

**Primary CTA**
- Background: `#1399ff`. Text: `#ffffff`. Radius: `4px`. Padding: `12px 24px`. Height: `44px`. Font: Ember 14 / 500.
- Hover: `#3aabff`, 100ms.
- Active: `#0072c8`.
- Use: "Watch Now", "Sign In", "Rent for $X".

**Hero Primary**
- Padding: `14px 32px`. Height: `52px`.
- Use: Billboard "Watch Now".

**Glass Secondary**
- Background: `rgba(255,255,255,0.15)`. Border: `1px solid rgba(255,255,255,0.25)`. Radius: `4px`.
- Use: Billboard "Trailer", "Details".

**Rent CTA (Outlined)**
- Background: `#1a242f`. Text: `#ffffff`. Border: `1px solid #1399ff`. Radius: `4px`. Padding: `10px 20px`.
- Use: "Rent for $3.99" — secondary purchase CTA on movie-detail.

**Buy CTA (Orange)**
- Background: `#ff9900`. Text: `#0f171e`. Radius: `4px`. Padding: `10px 20px`.
- Use: "Buy for $14.99" — Amazon-orange purchase CTA, the only orange in the system.

**Ghost / Outline**
- Background: `transparent`. Color: `#ffffff`. Border: `1px solid #6f7c89`. Radius: `4px`.
- Use: Modal cancel, "Skip Intro", "Watch Trailer".

### Cards & Tiles

**Landscape Tile (Default)**
- Background: `#1a242f`. Aspect: 16:9. Radius: `4px`.
- Title overlay: text bottom-left of tile, gradient scrim from black-to-transparent.
- Hover: 1.04× scale + `0 8px 24px rgba(0,0,0,0.6)` shadow + `2px solid #1399ff` brand-blue ring.

**Portrait Tile (Movie / Originals)**
- Background: `#1a242f`. Aspect: 2:3. Radius: `4px`.
- Title-card SVG bottom anchor when available.

**Preview Popup**
- Background: `#1a242f`. Radius: `6px`. Width: 360px.
- Trigger: click-to-expand.
- Content: 16:9 still + IMDb score badge + maturity + tier badge + price tag (if rent/buy) + 2-line synopsis + Watch Now / Watchlist / More.

**Billboard Hero**
- Aspect: 16:9 full-bleed. Bottom inset: canvas gradient over 200px.
- Title-card SVG: 320px wide, anchored bottom-left at 5% inset.
- Tier badge (prime / rent / buy) anchored above title.
- CTAs: Blue Watch + Glass Trailer.
- Auto-rotate: 14s dwell, 1s cross-dissolve.

**Detail Modal**
- Background: `#1a242f`. Radius: `8px`. Width: clamp(900px, 80vw, 1500px).
- Header: 16:9 hero still + tier badge above title + IMDb badge + maturity chip.
- Action row: Watch Now (blue) + Trailer (glass) + Watchlist (icon-circle).
- Price-tier section: "Watch with Prime" + "Rent from $3.99" + "Buy from $14.99" + "Or get with MGM+ Channel".
- X-Ray cast strip: horizontal row of 8–10 cast portraits with names + character names.
- Synopsis: 16px / 400 / 1.5.
- Episode tabs (TV).

**Storefront Tile (Channel)**
- Background: `#1a242f`. Radius: `4px`. Aspect: 16:9.
- Use: Add-on channels (MGM+, Paramount+, Starz, Max via Channels, etc).

### Badges, Tags

**prime Badge**
- Background: `#1399ff`. Color: `#ffffff`. Radius: `2px`. Padding: `2px 6px`. Font: 11px / 700 lowercase italic.
- Use: "Included with Prime" — the brand's most-rendered tag.

**IMDb Badge**
- Background: `#f5c518`. Color: `#0f171e`. Radius: `2px`. Padding: `2px 6px`. Font: 11px / 700.
- Use: "IMDb 8.5" rating in metadata.

**Maturity Rating**
- Background: `rgba(255,255,255,0.15)`. Color: `#ffffff`. Radius: `2px`. Padding: `2px 6px`.
- Use: "TV-MA", "R", "PG-13".

**X-Ray Indicator**
- Background: `transparent`. Color: `#1399ff`. Border: `1px solid #1399ff`. Radius: `2px`.
- Use: "X-Ray" denotes X-Ray data is available for the title.

**UHD / HDR / Dolby Vision Chip**
- Background: `transparent`. Color: `#ffffff`. Border: `1px solid #6f7c89`. Radius: `2px`.
- Use: Tech-spec chip in metadata row.

**Free Tier Badge**
- Background: `#00c08a`. Color: `#0f171e`. Radius: `2px`. Padding: `2px 6px`.
- Use: "Free with ads" badge on AVOD titles.

**Star Rating Row**
- Five `#ffba33` star icons + numeric "4.5/5" in `tnum` weight 700.
- Use: User rating display on detail modal.

### Inputs

**Text Input**
- Background: `#1a242f`. Color: `#ffffff`. Border: `1px solid #2a3a48`. Radius: `4px`. Height: `44px`. Padding: `10px 16px`.
- Focus: Border `#1399ff`.
- Error: Border `#ff4757` + 12px error text.

### Navigation

**Top Nav (Always Solid)**
- Background: `#0f171e`. Color: `#ffffff`. Height: `60px`. Border-bottom: `1px solid #2a3a48`.
- Logo: white "prime video" wordmark with arc.
- Links: Home, Store, Live TV, Categories, My Stuff.

**Note**: Unlike Netflix/Max/Disney+, Prime Video keeps the nav always-solid — no transparent state over billboard. This signals utility/marketplace over cinematic-immersion.

### Player

**Player Controls**
- Background: `linear-gradient(0deg, rgba(0,0,0,0.7), transparent)`.
- Scrubber: rail `#3a4856`, fill `#1399ff`, height `3px`.
- Playhead: `#1399ff` 12×12 circle.
- X-Ray Toggle: top-right of player chrome, opens X-Ray panel slide-up.

**X-Ray Panel**
- Background: `rgba(0,0,0,0.85)`. Radius: `8px` (top corners; bottom flush to player).
- Slides up from bottom-third of player, takes ~33% screen height.
- Content: tab row (Cast / Music / Trivia), then card grid of cast with photo + name + character.
- Signature feature — no peer offers comparable scene-aware metadata.

## 5. Layout Principles

### Spacing System
- Base: 4px. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 28 / 32 / 40 / 48 / 64 / 80 / 96.
- Row gap: 32px (denser than Netflix's 36, Max's 40).
- Section gap: 64px.
- Tile gutter: 8px desktop, 4px mobile.

### Grid & Container
- Page width: 1920px. Content max: 1500px (wider than peers — accommodates landscape 16:9 tiles).
- Carousel: 5 landscape tiles per row at desktop (vs 6 portraits at peers), 3 at tablet, 2 at mobile.
- Header: 60px (shorter than peers, denser).

### Whitespace Philosophy
Prime Video is the *most-content-dense* streaming UI. The marketplace mix means every tile carries more text — title, tier badge, IMDb score, price (if rent/buy), maturity rating. The page minimises whitespace so all that data fits without scroll.

### Section Cadence
- Billboard hero
- Continue Watching
- "Recommended" (algorithmic)
- "New Releases"
- "Top free movies for you" (tier-mixed)
- "Channels" (add-on subscriptions)
- "Live TV" entry tile
- 4–6 genre rows
- Footer

## 6. Shapes & Radius Scale

- **Sharp** (`0px`): Watched-progress bar, billboard image edges.
- **Micro** (`2px`): Tier badges, IMDb badges, maturity chips.
- **Standard** (`4px`): Buttons, tiles, inputs — Amazon's classic flat radius.
- **Comfortable** (`6px`): Preview popup.
- **Relaxed** (`8px`): Detail modal, X-Ray panel.
- **Pill** (`9999px`): Avatars only.

Prime Video has the *flattest* geometry of the streaming peers — closer to Amazon retail than to Disney+'s rounded UI.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | Flat | Default tile, page bg, always-solid nav |
| 1 | 1px `#2a3a48` border | Section dividers, focused input |
| 2 | `0 8px 24px rgba(0,0,0,0.6)` + 2px `#1399ff` ring | Tile hover (signature blue ring) |
| 3 | `0 24px 48px rgba(0,0,0,0.85)` | Detail modal |
| 4 | `rgba(0,0,0,0.5)` scrim + nothing | Player chrome |
| 5 | X-Ray panel slide-up over player | X-Ray feature panel |

### Shadow Philosophy
Prime Video is shadow-conservative. Hard `rgba(0,0,0,0.6)` drops on hover, modal shadows for detail, otherwise flat. The blue ring on hover does the brand-identity work — shadow is purely functional.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Out**: `cubic-bezier(0, 0, 0.2, 1)` — used for X-Ray panel slide-up.

### Duration Buckets
- **Fast**: 100ms — colour shift, hover lift.
- **Standard**: 200ms — modal in, billboard CTA.
- **Slow**: 360ms — X-Ray panel slide-up.

### Per-Component Recipes
- **Primary CTA hover**: `#1399ff → #3aabff`, 100ms.
- **Tile hover**: 1.04× scale + blue ring fade-in + shadow, 200ms ease-standard. Less dramatic than Netflix.
- **Billboard auto-rotate**: 14s dwell, 1s cross-dissolve.
- **X-Ray panel**: Slide-up from off-screen-bottom over 360ms ease-out; tap-outside or Esc dismisses.
- **Modal in**: 300ms ease-standard, opacity + scale 0.97 → 1.0.

### Page Transitions
Largely intra-page; storefront entry (Channels add-on) uses route transition with simple fade.

### Reduced Motion
- Tile scale → opacity-only.
- Billboard rotate → halts.
- X-Ray slide-up → opacity-only fade.
- Modal in → opacity-only.

## 9. Accessibility & A11y

### Contrast Pairs
- White on `#0f171e`: **16.4:1** — AAA.
- Body light `#dbdbdb` on `#0f171e`: **13.7:1** — AAA.
- Muted `#9ca8b4` on `#0f171e`: **5.5:1** — AA at body sizes.
- White on brand `#1399ff`: **4.6:1** — AA.
- IMDb yellow `#f5c518` on `#0f171e`: **12.4:1** — AAA.
- Amazon orange `#ff9900` on `#0f171e`: **8.7:1** — AAA.

### Focus Indicators
- 2px solid `#1399ff` ring with 2px offset on all controls.

### ARIA Patterns
- Carousels: `role="region" aria-roledescription="carousel"`.
- Tier badges: `aria-label="Included with Prime"` / `aria-label="Rent for $3.99"`.
- IMDb badge: `aria-label="IMDb rating: 8.5"`.
- X-Ray panel: `role="dialog" aria-label="X-Ray scene info"`.
- Modal: `role="dialog" aria-modal="true"`, focus trapped.
- Player: full keyboard support; X-Ray toggle has dedicated keyboard shortcut (X).

### Keyboard Navigation
- Tab between rows; arrows within rows.
- Enter on tile opens detail modal.
- Space play/pause; X open X-Ray; F fullscreen.
- Esc progresses: X-Ray close → modal close → player pause.

### Screen Reader
- Tile `aria-label` packs title, tier (prime/rent-$X/buy-$X), IMDb rating, year, maturity, runtime.
- Price tags announced with currency.
- X-Ray cast row announced as list with cast/character pairs.

### Caption / AD
- Captions on all titles. Custom colour, size, edge, opacity.
- Audio description on Prime originals.

### Reduced Motion
Honoured per §8.

## 10. Responsive Behavior

### Breakpoints
| Token | Min | Use |
|-------|-----|-----|
| mobile | 0px | 2 landscape tiles per row, X-Ray fullscreen sheet |
| tablet | 1024px | 3 tiles, X-Ray panel takes 40% screen |
| desktop | 1280px | 5 tiles, X-Ray 33% panel |
| wide | 1920px | 5 tiles, full content max 1500px |

### Touch Targets
- 44×44 minimum (slightly under industry 48 — Amazon's accepted standard).

### Collapsing Strategy
- Top nav links → hamburger at < 1024px.
- Detail modal → full-screen sheet at < 768px.
- X-Ray panel → full-screen sheet at < 768px.
- Price-tier section in modal → vertical stack on mobile.
- Billboard CTAs → stacked at < 600px.

### Image Behavior
- Landscape tiles: 16:9 srcset 280/560/1120w.
- Portrait tiles: 2:3 srcset 200/400/800w.
- Billboard: 16:9 srcset 720/1080/1440/2160p.
- Cast portraits in X-Ray: 80×80 srcset.

### Container Queries
Preview popup chooses left/right based on row container CQ.

## 11. Content & Voice

### Tone
Prime Video voice is **utility-functional**. Short, factual, transactional. "Watch with Prime", "Rent for $3.99", "Free with ads" — declarative tier statements without marketing puffery. The brand doesn't sell wonder; it lists options.

### Microcopy Patterns
- **Primary CTA**: "Watch Now", "Sign In", "Rent for $X", "Buy for $X".
- **Secondary**: "Trailer", "Details", "Watchlist".
- **Tier statements**: "Included with Prime", "Free with ads", "Rent or Buy", "MGM+ Channel".
- **Empty Watchlist**: "Add to Watchlist to save titles for later." + suggested-adds row.
- **Error**: "We couldn't process your request. Please try again."
- **Profile prompt**: "Who's watching?"
- **Cancellation**: "Cancel anytime in Account Settings."

### Empty States
Empty Watchlist: text + 5-tile suggested-adds row. Empty Continue Watching: hidden.

### CTA Verb Conventions
- "Watch" (in product) > "Watch Now" > "Rent" > "Buy" > "Sign In".
- "Watchlist" not "My List" — distinguishes from Amazon-retail "Wishlist".
- "Trailer" not "Preview".
- "Details" not "More Info".
- Marketplace verbs: "Rent", "Buy", "Subscribe to [Channel]" — explicit transactional language.

## 12. Dark Mode & Theming

**Dark-only consumer surface.** Prime Video has no public light theme. The streaming context plus the Amazon ecosystem dark-skin alignment (Kindle, Alexa, Music) keeps it dark.

The only light-mode surface is the Amazon retail integration — when Prime Video tiles appear inside the Amazon retail dashboard (e.g. on Amazon.com), they re-skin with white background `#ffffff` and `#1399ff` brand on white (4.6:1, AA). This is a cross-property fallback, not part of the consumer Prime Video product.

Hypothetical full light theme would use:
- Canvas: `#ffffff`.
- Brand: deepen to `#0066cc` for AA contrast on white (current `#1399ff` fails on white at 3.8:1).
- Surface: `#f7f8f8` — Amazon retail's standard "smoke" surface.

But this does not exist in product.

## 13. Lineage & Influences

Prime Video's lineage is two-streamed: Amazon-marketplace and IMDb-data.

**Amazon retail.** The deep-slate canvas (`#0f171e`/`#232f3e`), the Amazon Blue brand voltage, the Amazon Orange purchase CTA, the flat 4px radius — these all descend directly from Amazon.com retail UI, the modular card grid, and the Buy-Now button orange. Prime Video reads as Amazon retail's video tab.

**IMDb.** The X-Ray feature, the IMDb yellow rating badge, the cast-portrait emphasis — these come from IMDb (which Amazon acquired in 1998). Prime Video is the only major streamer with rich scene-aware metadata, because it has IMDb's database under the hood.

**Hulu (pre-Disney era).** The marketplace-tier UI (rent/buy/subscribe-channel) was pioneered by Hulu's "Watch / Rent / Buy" interleaving in the 2010s. Prime Video adopted and amplified this pattern.

What Prime Video rejects: cinematic minimalism (Apple TV+), prestige editorial (Max), magical animation (Disney+), content-density-only (Netflix). Prime Video is utility-marketplace-streaming.

**Influences:**
- **Amazon retail (1995–present)** — visual language, Buy-Now orange, Amazon Blue. https://www.amazon.com
- **IMDb (1990–present)** — X-Ray data, yellow rating badge. https://www.imdb.com
- **Hulu (pre-Disney)** — marketplace-tier UI pattern.
- **Amazon Ember type family** — drawn for Kindle, generalised by Amazon design team.

## 14. Do's and Don'ts

**Do:**
- Use `#0f171e` canvas + `#232f3e` secondary surface — same Amazon deep-slate as Kindle/Alexa.
- Use `#1399ff` Amazon Blue for primary CTA, brand accent, focus.
- Use `#ff9900` Amazon Orange for "Buy" tier CTA only — never primary CTA.
- Render the prime / rent / buy / free-with-ads tier badges on tiles where applicable.
- Show IMDb rating badge `#f5c518` in metadata rows — Amazon owns IMDb, leverage it.
- Default to landscape 16:9 tiles for browse rows; use 2:3 portrait only on movie-detail and Originals.
- Surface X-Ray cast strip in detail modal — Prime Video's signature feature.
- Use Ember 700 weight at display, modest tracking `-0.01em` to `-0.02em`.
- Keep nav always-solid `#0f171e` — no transparent-on-billboard state.
- Use `tnum` on prices, ratings, runtimes — the data-density requires alignment.
- Pack metadata densely: title + tier + rating + year + maturity + runtime in a single row.

**Don't:**
- Don't use Netflix-grade hover scale (1.4×) — Prime Video is 1.04×, utility-restrained.
- Don't use red — that signals Netflix; Prime Video's brand colour is Amazon Blue.
- Don't make nav transparent over billboard — chrome stays visible (utility, not theatre).
- Don't omit the prime / rent / buy badges — the marketplace tier is core to brand.
- Don't use Amazon Orange anywhere except the "Buy" CTA — over-use breaks the tier signal.
- Don't apply blue glow rings (Disney+) or editorial pull-quotes (Max) — Prime Video stays functional.
- Don't use rounded geometry (>4px radius) — Prime Video is consistently flat.
- Don't auto-play preview clips on hover — Prime Video uses click-to-expand for previews.
- Don't pad rows generously — Prime Video is content-dense; over-spacing breaks the marketplace feel.
- Don't introduce a light-mode consumer surface — only the Amazon retail integration light-skins.

## 15. Agent Prompt Guide

### Quick Color Reference
- Canvas Slate: `#0f171e`
- Secondary Slate: `#232f3e`
- Amazon Blue: `#1399ff`
- Amazon Orange (Buy only): `#ff9900`
- IMDb Yellow: `#f5c518`
- Star Yellow: `#ffba33`
- White: `#ffffff`
- Muted: `#9ca8b4`
- Free Tier Green: `#00c08a`
- Border: `#2a3a48`

### Example Component Prompts
1. "Create a Prime Video billboard hero — full-bleed 16:9 still on `#0f171e` canvas, title-card SVG bottom-left at 320px wide, prime tier badge `#1399ff` above title, blue `#1399ff` Watch Now button + glass `rgba(255,255,255,0.15)` Trailer sibling, both 4px radius."
2. "Design a Prime Video landscape tile — 16:9 `#1a242f` bg, 4px radius, title overlay bottom-left with gradient scrim, prime tier badge top-left, IMDb `#f5c518` rating badge top-right, on hover scale to 1.04× over 200ms with 2px `#1399ff` ring + `0 8px 24px rgba(0,0,0,0.6)` shadow."
3. "Build a Prime Video movie-detail price tier section — three buttons in a row: blue `#1399ff` Watch with Prime + outlined `#1399ff` border Rent for $3.99 + Amazon-orange `#ff9900` Buy for $14.99, Ember 14 / 500 button text, 4px radius, 44px height."
4. "Render a Prime Video X-Ray panel — `rgba(0,0,0,0.85)` bg, 8px top radius, slides up from player bottom over 360ms ease-out, 33% screen height, tab row (Cast / Music / Trivia), horizontal cast strip with 80×80 portraits and Ember 14/500 cast/character names beneath."
5. "Create a Prime Video prime tier badge — `#1399ff` bg, white text 'prime' lowercase italic, 11px / 700, 2px radius, 2px 6px padding — the brand's most-rendered tag."

### Iteration Guide
1. **Surface the tier.** If a tile reads as "just streaming", add the prime / rent / buy badge — Prime Video's marketplace UI requires it.
2. **Slate-not-black.** Canvas should read `#0f171e` not `#000` — Amazon's deep-slate is intentional.
3. **Add IMDb.** Detail modals without `#f5c518` IMDb rating feel un-Prime-Video.
4. **X-Ray it.** Detail-modal cast strip is the signature feature — surface 8–10 portraits with character names.
5. **Land-scape, not portrait.** Default browse rows are 16:9 landscape; portrait is only for movie-detail and Originals.
6. **Densify the metadata.** Title + tier + rating + year + maturity + runtime in one tabular row — Prime Video packs more data than peers.
7. **Flat, not round.** Push button radius to 4px; remove blue glow rings (Disney+) or shadow halos (Apple TV+).
8. **Solid nav always.** No transparent-on-billboard nav transitions; Prime Video keeps chrome visible.
