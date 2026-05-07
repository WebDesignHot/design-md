---
name: Riot Games
tagline: Crimson `#d13639` red on near-black with custom Riot Beam display — esports-tournament drama and competitive-MOBA editorial.
updated_at: 2026-05-04T19:57:58+12:00
published_at: 2026-05-04T19:57:58+12:00
author: webdesignhot
source_url: https://www.riotgames.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [media]
tags: [dark, bold, structured, gaming, esports, moba, lol, valorant, cinematic]
preview_swatch: ['#0a141c', '#d13639', '#f0e6d2']
related: [twitch, epic-games, netflix]
description: 'Riot Games is the canonical esports-publisher trade dress — a near-black `#0a141c` ink-deep canvas with subtle hexagonal mesh texture, anchored by the unmistakable **Riot Crimson** (`#d13639`) that carries every primary CTA, the wordmark, and the focus ring. Display copy runs **Riot Beam** (the company''s commissioned angular display sans), set in confident uppercase 0.05em-tracked headlines at 56–96px sizes — the typographic voice of every League of Legends champion reveal trailer translated to the corporate site. Cards are deeper-ink (`#0f1923`) rectangles with 2px hairline borders in Hextech-gold `#c89b3c` accenting feature panels. The brand position: **competitive-gaming editorial** — the visual voice of a tournament broadcast frozen as a marketing site, with cinematic key-art photography of champions and agents occupying 60–80% of every band.'

colors:
  bg: '#0a141c'                   # canvas — deep ink-blue near-black
  bg-alt: '#091118'               # alternate band, slightly cooler
  bg-deep: '#010a13'              # deepest, hero base
  surface: '#0f1923'              # default card surface
  surface-soft: '#1e2328'         # raised popover, hovered card
  surface-strong: '#2a3037'       # selected sidebar, hovered tile lift
  surface-elevated: '#172029'     # elevated panel
  surface-hexmesh: 'rgba(200,155,60,0.04)'  # subtle Hextech mesh overlay on hero bands
  text: '#f0e6d2'                 # primary ink — warm cream-gold (signature, not pure white)
  text-strong: '#ffffff'          # display only, max punch
  text-soft: '#cdbe91'            # secondary copy, gold-tinted
  text-muted: '#a09b8c'           # tertiary metadata
  text-faint: '#5b5a56'           # captions, timestamps
  text-disabled: '#3c3c41'
  text-link: '#c89b3c'            # link gold
  brand: '#d13639'                # Riot Crimson — primary CTA, wordmark
  brand-hover: '#e74049'          # brightened on hover
  brand-active: '#a02125'         # pressed
  brand-deep: '#7a0a0d'           # archived deep red
  on-brand: '#ffffff'
  hextech-gold: '#c89b3c'         # League of Legends Hextech accent — feature card borders
  hextech-gold-soft: '#a08838'    # softer Hextech for muted accents
  hextech-gold-bright: '#f0e6d2'  # brightest gold for highlights — same hex as text
  valorant-red: '#fa4454'         # Valorant brand-specific red (different from Riot crimson)
  valorant-blue: '#0f1923'        # Valorant near-black (essentially canvas)
  lol-blue: '#0596aa'             # League of Legends teal/cyan accent
  lol-gold: '#c89b3c'             # League of Legends gold (same as Hextech)
  tft-purple: '#5b1a86'           # Teamfight Tactics purple
  wildrift-orange: '#ff9b00'      # Wild Rift orange
  legends-runeterra: '#9a48ff'    # Legends of Runeterra purple
  link-default: '#c89b3c'         # gold link, not red
  link-hover: '#f0e6d2'           # cream gold on hover
  link-visited: '#c89b3c'
  border: '#1e2328'               # default low-contrast hairline
  border-soft: '#2a3037'          # divider
  border-gold: '#c89b3c'          # Hextech-gold feature panel border (1px)
  border-strong: '#d13639'        # focused input
  scrim: 'rgba(0,0,0,0.85)'
  shadow-card: 'rgba(0,0,0,0.6)'
  shadow-elev: 'rgba(0,0,0,0.8)'
  shadow-gold-glow: 'rgba(200,155,60,0.4)'
  rank-iron: '#5d5a55'
  rank-bronze: '#8d603a'
  rank-silver: '#a4abb6'
  rank-gold: '#c89b3c'
  rank-platinum: '#3aaba0'
  rank-diamond: '#5d68d6'
  rank-master: '#9a48ff'
  rank-challenger: '#f0e6d2'
  success: '#0596aa'
  warning: '#c89b3c'
  danger: '#d13639'
  info: '#0596aa'

typography:
  display:
    family: '"Riot Beam", "Beaufort for LOL", "Spiegel", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 700, 900]
    opentype-features: ['kern', 'ss01']
  body:
    family: '"Spiegel", "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"Roboto Mono", Menlo, Consolas, "Courier New", monospace'
    weights: [400, 600]
  scale:
    display-hero:    { size: 96, weight: 900, lineHeight: 0.95, tracking: '0.02em',  family: display, transform: uppercase, opentype: ['ss01'], notes: 'Marketing landing hero, agent reveal' }
    display-xl:      { size: 72, weight: 900, lineHeight: 1.0,  tracking: '0.04em',  family: display, transform: uppercase, notes: 'Champion / agent name in trailer card' }
    display-lg:      { size: 56, weight: 800, lineHeight: 1.05, tracking: '0.05em',  family: display, transform: uppercase, notes: 'Section headline, esports band' }
    display-md:      { size: 36, weight: 700, lineHeight: 1.1,  tracking: '0.05em',  family: display, transform: uppercase, notes: 'Card title, news headline' }
    display-sm:      { size: 24, weight: 700, lineHeight: 1.15, tracking: '0.04em',  family: display, transform: uppercase, notes: 'Sub-section header' }
    section-head:    { size: 18, weight: 700, lineHeight: 1.2,  tracking: '0.1em',   family: display, transform: uppercase, notes: 'Eyebrow label "PATCH NOTES", "ESPORTS"' }
    sub-section:     { size: 14, weight: 700, lineHeight: 1.25, tracking: '0.1em',   family: display, transform: uppercase, notes: 'Smaller eyebrow' }
    body-md:         { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',       family: body, notes: 'Default body — comfortable reading' }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Sidebar copy, metadata' }
    body-xs:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Caption, footer micro' }
    body-strong:     { size: 16, weight: 700, lineHeight: 1.6,  tracking: '0',       family: body, notes: 'Inline emphasis' }
    nav-link:        { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.1em',   family: display, transform: uppercase, notes: 'Top nav: GAMES · NEWS · ESPORTS · CAREERS' }
    sub-nav-link:    { size: 12, weight: 600, lineHeight: 1.0,  tracking: '0.08em',  family: display, transform: uppercase, notes: 'Sub-nav anchors' }
    button-cta:      { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.1em',   family: display, transform: uppercase, notes: 'PLAY FREE, WATCH NOW, LEARN MORE' }
    button-md:       { size: 13, weight: 600, lineHeight: 1.0,  tracking: '0.08em',  family: display, transform: uppercase, notes: 'Secondary uppercase CTAs' }
    button-sm:       { size: 12, weight: 600, lineHeight: 1.0,  tracking: '0.08em',  family: display, transform: uppercase, notes: 'Inline pills, filter chips' }
    eyebrow:         { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.15em',  family: display, transform: uppercase, notes: 'Tiny brand eyebrow above hero' }
    metadata:        { size: 13, weight: 500, lineHeight: 1.3,  tracking: '0',       family: body, opentype: ['tnum'], notes: 'Player counts, KDA, match scores' }
    badge:           { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.1em',   family: display, transform: uppercase, notes: 'NEW, PATCH, EVENT' }
    code:            { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: mono, notes: 'Patch notes inline code' }

radius:
  none: 0           # most chrome — Riot is angular
  micro: 1
  sm: 2             # buttons, badges
  md: 4             # rare
  pill: 9999        # only for player-avatar circles

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1408
  prose-width: 720
  header-height: 80
  main-nav-height: 80
  sub-nav-height: 56
  hero-banner: '1920x1080'
  champion-tile: '308x560'   # tall portrait champion key-art

components:
  button-cta:
    bg: '#d13639'
    color: '#ffffff'
    radius: 2
    padding: '14px 32px'
    height: 48
    font: button-cta
    border: '1px solid transparent'
    use: 'PLAY FREE / WATCH NOW / LEARN MORE — universal Riot Crimson uppercase rectangle CTA.'
  button-cta-hover:
    bg: '#e74049'
    color: '#ffffff'
    radius: 2
    use: 'Hover — brightened red.'
  button-secondary-outline:
    bg: 'transparent'
    color: '#f0e6d2'
    radius: 2
    border: '1px solid #c89b3c'
    padding: '13px 31px'
    height: 48
    font: button-cta
    use: 'Hextech-gold outline CTA over dark — secondary action, "VIEW DETAILS".'
  button-secondary-light:
    bg: 'transparent'
    color: '#f0e6d2'
    radius: 2
    border: '1px solid #f0e6d2'
    padding: '13px 31px'
    height: 48
    use: 'Cream outline CTA — alternative secondary on darker bands.'
  button-text-link:
    bg: 'transparent'
    color: '#c89b3c'
    use: 'Inline gold link — body prose, footer.'
  champion-tile:
    bg: '#0f1923'
    color: '#f0e6d2'
    radius: 2
    width: 308
    height: 560
    use: 'Tall portrait champion / agent key-art tile — name overlaid bottom in uppercase Riot Beam.'
  champion-tile-hover:
    bg: '#0f1923'
    color: '#f0e6d2'
    use: 'Hover — gold border `1px solid #c89b3c` + soft gold glow `0 0 24px rgba(200,155,60,0.4)`.'
  feature-card:
    bg: '#0f1923'
    color: '#f0e6d2'
    radius: 2
    border: '1px solid #c89b3c'
    padding: '32px'
    use: 'Hextech-gold framed feature panel — used for "patch notes preview" and "esports match card".'
  feature-card-double-border:
    bg: '#0f1923'
    color: '#f0e6d2'
    radius: 2
    border: '1px solid #c89b3c'
    padding: '32px'
    use: 'Double-border signature variant — outer 1px gold + inner 1px gold with 4px gap (Hextech UI signature).'
  hero-banner:
    bg: 'linear-gradient(180deg, transparent 0%, rgba(10,20,28,0.9) 100%)'
    color: '#ffffff'
    radius: 0
    use: 'Full-bleed 1920×1080 champion / agent / esports key art with gradient mask at bottom for title block.'
  news-card:
    bg: '#0f1923'
    color: '#f0e6d2'
    radius: 2
    padding: 0
    use: 'News tile — 16:9 image + uppercase eyebrow + headline + body snippet stacked.'
  match-card:
    bg: '#0f1923'
    color: '#f0e6d2'
    radius: 2
    border: '1px solid #c89b3c'
    padding: '24px'
    use: 'Esports match card — team logos + score + game time, gold border denotes featured match.'
  text-input:
    bg: '#0f1923'
    color: '#f0e6d2'
    radius: 2
    height: 48
    padding: '12px 16px'
    border: '1px solid #2a3037'
    font: body-md
    use: 'Form input — dark fill, hairline border, focuses to 2px Riot Crimson.'
  search-bar:
    bg: '#0f1923'
    color: '#f0e6d2'
    radius: 2
    height: 40
    padding: '8px 16px'
    use: 'Top-bar search field — angular dark rectangle.'
  primary-nav:
    bg: 'rgba(10,20,28,0.95)'
    color: '#f0e6d2'
    height: 80
    use: 'Top nav: Riot wordmark + GAMES · NEWS · ESPORTS · CAREERS · MERCH in uppercase Riot Beam 14/700/0.1em. Sticky on scroll with 95% canvas-blue blur.'
  sub-nav:
    bg: '#0a141c'
    color: '#cdbe91'
    height: 56
    use: 'Sub-nav: game-specific anchors — uppercase Riot Beam 12/600/0.08em.'
  filter-chip:
    bg: 'transparent'
    color: '#cdbe91'
    radius: 2
    border: '1px solid #2a3037'
    padding: '8px 16px'
    use: 'Filter chip — outline only, hover gains gold border.'
  filter-chip-active:
    bg: '#c89b3c'
    color: '#0a141c'
    radius: 2
    border: '1px solid #c89b3c'
    use: 'Active filter — gold fill with dark text.'
  carousel-paddle:
    bg: 'rgba(15,25,35,0.7)'
    color: '#c89b3c'
    radius: 2
    width: 48
    height: 48
    border: '1px solid #c89b3c'
    use: 'Square carousel paddle with gold hairline border.'
  modal:
    bg: '#0f1923'
    color: '#f0e6d2'
    radius: 2
    border: '1px solid #c89b3c'
    use: 'Centred dialog — Hextech-gold framed.'
  hexmesh-overlay:
    bg: 'transparent'
    use: 'Subtle hexagonal pattern overlay on hero bands — mostly invisible at 4% opacity, gives texture without competing with key art.'
  rank-tile:
    bg: '#0f1923'
    color: '#f0e6d2'
    radius: 2
    padding: '16px'
    use: 'Player rank display — tier emblem + LP + MMR.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)'
  duration-fast: 150
  duration-standard: 300
  duration-slow: 500
  champion-hover: 'tile gains `1px solid #c89b3c` border + gold glow `0 0 24px rgba(200,155,60,0.4)` + key art scales 1.0 → 1.04 over 300ms cinematic'
  hero-parallax: 'hero key art parallax-scrolls at 0.4x scroll velocity for cinematic depth'
  cta-press: 'CTA bg deepens #d13639 → #a02125 over 150ms on :active'
  carousel-slide: 'horizontal carousel slides 500ms cinematic with motion blur'
  reduced-motion: 'respects prefers-reduced-motion: reduce — parallax and key-art scale suppressed.'

breakpoints:
  mobile: 600
  tablet: 1024
  desktop: 1280
  wide: 1408

shadows:
  ambient: 'none — Riot stays mostly flat'
  champion-glow: '0 0 24px rgba(200,155,60,0.4)'
  card-soft: 'rgba(0,0,0,0.6) 0 4px 12px'
  modal: 'rgba(0,0,0,0.8) 0 8px 32px'
  ring: '0 0 0 2px #d13639'

accessibility:
  contrast-text-on-bg: 14.2          # #f0e6d2 on #0a141c — AAA
  contrast-strong-on-bg: 18.5        # #ffffff on #0a141c — AAA
  contrast-link-on-bg: 5.8           # #c89b3c on #0a141c — AA
  contrast-cta-text: 5.5             # #ffffff on #d13639 — AA
  contrast-soft-on-bg: 9.2           # #cdbe91 on #0a141c — AAA
  contrast-muted-on-bg: 6.0          # #a09b8c on #0a141c — AA
  focus-ring: '2px solid #d13639 + 2px outline offset'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab traverses top nav → search → game-grid → main carousels → footer; Esc closes modals.'

dark-mode: only   # Riot is dark-only across its corporate site, game pages, and esports portal. The League / Valorant / TFT client UIs are also dark-only.
---

## 1. Visual Theme & Atmosphere

Riot Games is the canonical esports-publisher trade dress — a near-black `#0a141c` ink-deep canvas with subtle hexagonal mesh texture, anchored by the unmistakable **Riot Crimson** (`#d13639`) that carries every primary CTA, the wordmark, and the focus ring. The page reads as a tournament broadcast frozen as a corporate site: cinematic key art of champions and agents occupies 60–80% of every band, Hextech-gold (`#c89b3c`) hairline borders frame featured panels, and uppercase-tracked display copy in **Riot Beam** at 56–96px sits over the imagery like a champion-reveal trailer card.

The chromatic identity is **crimson + Hextech-gold + cream-gold ink** on near-black. Riot Crimson is the brand voltage — every PLAY FREE button, every link's eventual hover state. Hextech-gold (`#c89b3c`) is the editorial accent — featured-card borders, link colour, secondary CTA outlines. Cream-gold (`#f0e6d2`) is the primary text colour, intentionally warm against the cool blue-black canvas to read more like illuminated parchment than UI. Each of Riot's franchise sub-brands picks its own accent: League's teal `#0596aa`, Valorant's red `#fa4454`, TFT's purple `#5b1a86`, Wild Rift's orange `#ff9b00` — but the corporate site stays in the canonical crimson-and-gold palette.

Display copy runs **Riot Beam** — the company's commissioned angular display sans, set in confident uppercase 0.05–0.1em tracking at sizes ranging from 18px section labels to 96px hero headlines. The "uppercase Riot Beam" voice is the typographic signature of every League of Legends champion reveal, every Valorant agent trailer, every Worlds promo. Body type drops to **Spiegel** (Riot's body workhorse) at 16/400 with comfortable 1.6 leading — generous for editorial reading on long-form patch notes and esports recaps.

Cards round at **2px** — Riot is angular, not soft. The brand's geometric language echoes the angular shapes of the Hextech UI seen in the League client and the chunky stencil-cut graphics of Valorant. There are no pill CTAs (except player-avatar circles); every button is a 2px-radius rectangle, every card is a 2px-radius panel. The subtle hexagonal mesh overlay on hero bands is barely visible (4% opacity Hextech-gold) but gives the surface texture that distinguishes Riot from Epic's flatter cinematic black.

Photography is the design. Champion / agent key art at full-bleed 1920×1080 anchors every game page; news tiles use 16:9 in-game screenshots; esports cards use team-logo lockups + match score graphics. The brand position is **competitive-gaming editorial** — the visual voice of a tournament broadcast that's also a marketing site that's also a gateway into multi-billion-dollar competitive esports leagues.

**Key Characteristics:**
- Near-black `#0a141c` ink-deep canvas with subtle Hextech-gold hexagonal mesh overlay (4% opacity)
- Riot Crimson (`#d13639`) is the universal primary CTA and brand accent — single voltage
- Hextech-gold (`#c89b3c`) carries link colour, feature-card borders, and editorial accent
- Cream-gold (`#f0e6d2`) primary text — warm against cool canvas, reads as illuminated parchment
- Riot Beam custom display sans at 56–96px / 800–900 with uppercase 0.05–0.1em tracking
- 2px-radius angular rectangles — no pill CTAs (except avatars), no soft 8px cards
- Hextech-gold hairline (`1px solid #c89b3c`) frames featured panels — the brand's signature card decoration
- Full-bleed 1920×1080 champion / agent / esports key art on hero bands
- Per-franchise accent palette (League teal, Valorant red, TFT purple) layered over canonical crimson-gold base

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#0a141c`): the ink-deep blue-black ground across every page
- **Bg Alt** (`#091118`): slightly cooler alt section band
- **Bg Deep** (`#010a13`): hero base, deepest surface
- **Surface** (`#0f1923`): default card surface
- **Surface Soft** (`#1e2328`): hovered card lift, raised popover
- **Surface Strong** (`#2a3037`): selected sidebar, deeply pressed card
- **Surface Elevated** (`#172029`): elevated panels
- **Surface Hexmesh** (`rgba(200,155,60,0.04)`): subtle Hextech mesh overlay on hero bands

### Brand
- **Riot Crimson** (`#d13639`): primary CTA, wordmark, focus ring, danger semantic
- **Brand Hover** (`#e74049`): brightened
- **Brand Active** (`#a02125`): pressed
- **Brand Deep** (`#7a0a0d`): archived deep red

### Accent (Hextech & Franchise)
- **Hextech-Gold** (`#c89b3c`): League of Legends gold, link colour, feature-card borders, secondary CTA outline — the corporate site's editorial accent
- **Hextech-Gold Soft** (`#a08838`): muted Hextech for subdued accents
- **Hextech-Gold Bright** (`#f0e6d2`): brightest gold (same hex as text) for highlights
- **Valorant Red** (`#fa4454`): Valorant brand accent — slightly different from Riot crimson, brighter and pinker
- **League Teal** (`#0596aa`): League of Legends teal/cyan accent on game-specific pages
- **TFT Purple** (`#5b1a86`): Teamfight Tactics purple
- **Wild Rift Orange** (`#ff9b00`): Wild Rift mobile MOBA orange
- **Legends of Runeterra** (`#9a48ff`): LoR purple

### Interactive
- **Link** (`#c89b3c`): gold, not red — Riot's distinctive link colour choice
- **Link Hover** (`#f0e6d2`): brightens to cream gold on hover
- **Link Visited** (`#c89b3c`): unchanged
- **Disabled** (`#3c3c41`): muted ink
- **Selected** (`#d13639`): selected radio / checkbox / tab fill

### Neutral Scale (Cream-Gold Tinted)
- **Text** (`#f0e6d2`) — primary cream-gold ink, the brand's signature
- **Text Strong** (`#ffffff`) — display only, max punch
- **Text Soft** (`#cdbe91`) — secondary copy, gold-tinted
- **Text Muted** (`#a09b8c`) — tertiary metadata
- **Text Faint** (`#5b5a56`) — captions, timestamps
- **Text Disabled** (`#3c3c41`) — disabled
- **Border** (`#1e2328`) — default low-contrast hairline
- **Border Soft** (`#2a3037`) — divider
- **Border Gold** (`#c89b3c`) — Hextech-gold feature panel border (1px)
- **Border Strong** (`#d13639`) — focused input

### Surface & Borders
- **Bg** (`#0a141c`)
- **Bg Alt** (`#091118`)
- **Bg Deep** (`#010a13`)
- **Surface** (`#0f1923`)
- **Surface Soft** (`#1e2328`)
- **Surface Strong** (`#2a3037`)
- **Surface Elevated** (`#172029`)

### Shadow Colors
Riot stays mostly flat. The champion-tile gold glow (`0 0 24px rgba(200,155,60,0.4)`) is the brand's signature interactive shadow — a Hextech-gold halo on hovered champion key-art tiles. Modal drop shadow runs neutral `rgba(0,0,0,0.8)` 0 8px 32px.

### Semantic
- **Success** (`#0596aa`): League teal repurposed for success
- **Warning** (`#c89b3c`): Hextech-gold doubles as warning
- **Danger** (`#d13639`): same hex as brand
- **Info** (`#0596aa`): info — same as success

### Rank Tier Palette (League / Valorant Competitive)
- **Iron** (`#5d5a55`)
- **Bronze** (`#8d603a`)
- **Silver** (`#a4abb6`)
- **Gold** (`#c89b3c`) — same as Hextech
- **Platinum** (`#3aaba0`)
- **Diamond** (`#5d68d6`)
- **Master** (`#9a48ff`)
- **Challenger** (`#f0e6d2`) — same hex as text

## 3. Typography Rules

### Font Family

**Primary**: `Riot Beam` — the company's commissioned angular display sans, used across champion reveals, esports broadcasts, and the corporate website. Falls back to `Beaufort for LOL` (the League client font), then `Spiegel`, `"Helvetica Neue"`, `Helvetica`, `Arial`, `sans-serif`. Riot Beam is geometric with sharp angular terminals — the typographic equivalent of Hextech UI's faceted shapes. Weights: 400 (regular), 700 (bold), 900 (black, used for hero display).

**Body**: `Spiegel` — Riot's body workhorse, a humanist sans optimised for editorial reading at 14–18px sizes. Falls back to `Inter`. Spiegel is what the patch notes and esports recaps render in.

**Mono**: `"Roboto Mono"` for inline code in patch notes.

**OpenType features**: `kern` enabled by default; `tnum` on player counts and match scores; `ss01` on Riot Beam display sizes for an alternate `g` form.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | Riot Beam | 96 | 900 | 0.95 | 0.02em | uppercase, ss01 | Marketing landing hero, agent reveal |
| display-xl | Riot Beam | 72 | 900 | 1.0 | 0.04em | uppercase | Champion / agent name in trailer card |
| display-lg | Riot Beam | 56 | 800 | 1.05 | 0.05em | uppercase | Section headline, esports band |
| display-md | Riot Beam | 36 | 700 | 1.1 | 0.05em | uppercase | Card title, news headline |
| display-sm | Riot Beam | 24 | 700 | 1.15 | 0.04em | uppercase | Sub-section header |
| section-head | Riot Beam | 18 | 700 | 1.2 | 0.1em | uppercase | Eyebrow label "PATCH NOTES", "ESPORTS" |
| sub-section | Riot Beam | 14 | 700 | 1.25 | 0.1em | uppercase | Smaller eyebrow |
| body-md | Spiegel | 16 | 400 | 1.6 | 0 | — | Default body — comfortable reading |
| body-sm | Spiegel | 14 | 400 | 1.5 | 0 | — | Sidebar copy, metadata |
| body-xs | Spiegel | 12 | 400 | 1.4 | 0 | — | Caption, footer micro |
| body-strong | Spiegel | 16 | 700 | 1.6 | 0 | — | Inline emphasis |
| nav-link | Riot Beam | 14 | 700 | 1.0 | 0.1em | uppercase | "GAMES · NEWS · ESPORTS · CAREERS" |
| sub-nav-link | Riot Beam | 12 | 600 | 1.0 | 0.08em | uppercase | Sub-nav anchors |
| button-cta | Riot Beam | 14 | 700 | 1.0 | 0.1em | uppercase | "PLAY FREE", "WATCH NOW", "LEARN MORE" |
| button-md | Riot Beam | 13 | 600 | 1.0 | 0.08em | uppercase | Secondary uppercase CTAs |
| button-sm | Riot Beam | 12 | 600 | 1.0 | 0.08em | uppercase | Inline pills, filter chips |
| eyebrow | Riot Beam | 11 | 700 | 1.0 | 0.15em | uppercase | Tiny brand eyebrow above hero |
| metadata | Spiegel | 13 | 500 | 1.3 | 0 | tnum | Player counts, KDA, match scores |
| badge | Riot Beam | 11 | 700 | 1.0 | 0.1em | uppercase | "NEW", "PATCH", "EVENT" |
| code | Roboto Mono | 13 | 400 | 1.4 | 0 | — | Patch notes inline code |

### Principles

- **Uppercase Riot Beam everywhere chrome.** Top nav, CTAs, eyebrows, section heads, badges — all uppercase tracked Riot Beam. The display family carries the entire chrome voice.
- **Spiegel for body, Riot Beam for chrome.** Two-family separation — Spiegel reads humanist-editorial, Riot Beam reads angular-cinematic. The contrast is the brand voice.
- **0.05–0.1em tracking on uppercase.** The wide tracking is what gives Riot's chrome its tournament-broadcast feel. Tighter than 0.05em reads casual; wider than 0.1em reads brutalist.
- **Display goes huge with positive tracking.** Hero copy at 72–96px / 900 with 0.02–0.04em — Riot is unmistakably loud and ceremonial.
- **Body at 16/1.6 — generous for editorial.** Patch notes and esports recaps run long; the comfortable leading is intentional.
- **Tabular numerals on every game-stat figure.** `tnum` on KDA, match scores, player counts.
- **Beaufort for LOL is the closest fallback when Riot Beam isn't available.** It carries similar angular character; Spiegel falls back to Inter for body.

## 4. Component Stylings

### Buttons

**`button-cta`** — the universal Riot Crimson (`#d13639`) primary CTA. White uppercase Riot Beam 14/700/0.1em label, 2px radius (angular, not pill), 14×32px padding, 48px height. Used for "PLAY FREE", "WATCH NOW", "LEARN MORE", "DOWNLOAD". Hover brightens to `#e74049`. Active deepens to `#a02125`.

**`button-secondary-outline`** — Hextech-gold outline CTA: transparent fill, 1px `#c89b3c` border, cream-gold text. Same shape as primary. Used for "VIEW DETAILS", "READ MORE".

**`button-secondary-light`** — cream outline CTA: transparent fill, 1px `#f0e6d2` border, cream text. Used on darker bands where gold loses contrast.

**`button-text-link`** — plain Hextech-gold text in `#c89b3c`, no surface. Hover brightens to `#f0e6d2`.

### Cards

**`champion-tile`** — 308×560 tall portrait champion / agent key-art tile. `#0f1923` floor, 2px radius. Champion name overlaid bottom in uppercase Riot Beam 24/700. Hover: gold border `1px solid #c89b3c` + gold glow `0 0 24px rgba(200,155,60,0.4)` + key art scales 1.0 → 1.04.

**`feature-card`** — Hextech-gold framed feature panel: `#0f1923` floor, 1px `#c89b3c` border, 32px padding, 2px radius. Used for "patch notes preview", "esports match card", "newsletter signup".

**`feature-card-double-border`** — Hextech-UI signature: outer 1px gold border + inner 1px gold border with 4px gap. Echoes the double-frame border that decorates the League client.

**`hero-banner`** — full-bleed 1920×1080 champion / agent / esports key art with `transparent → rgba(10,20,28,0.9)` vertical gradient at the bottom 30% for legibility. Title block + uppercase eyebrow + CTA cluster sit lower-left.

**`news-card`** — news tile with 16:9 image, eyebrow ("ESPORTS", "PATCH NOTES", "GAME UPDATE") in 11/700 uppercase 0.15em, headline in 24/700 uppercase 0.04em, body snippet in 14/400 Spiegel.

**`match-card`** — esports match card: team logos + score + game time in `#0f1923` floor with 1px gold hairline. Used in esports portal.

### Badges, Tags, Pills

**`badge`** — uppercase 11/700/0.1em — "NEW", "PATCH", "EVENT" — coloured per context (red for new, gold for patch, teal for event).

**`filter-chip`** + **`filter-chip-active`** — outline filter chips. Default transparent fill with 1px `#2a3037` border and `#cdbe91` text; active flips to `#c89b3c` gold fill with `#0a141c` dark text — gold-on-dark is the active signal.

### Inputs / Forms

**`text-input`** — `#0f1923` fill, cream-gold text, 1px `#2a3037` hairline, 2px radius (angular), 48px height, 12×16px padding. On focus, border thickens to 2px `#d13639` Riot Crimson.

**`search-bar`** — top-bar angular search field. `#0f1923` fill, 2px radius, 40px height, magnifier icon at left. Expands width on focus.

### Navigation

**`primary-nav`** — top nav with semi-translucent `rgba(10,20,28,0.95)` floor + backdrop blur, 80px tall, sticky on scroll. Riot wordmark anchored left in white. Nav items "GAMES · NEWS · ESPORTS · CAREERS · MERCH" in Riot Beam 14/700 uppercase 0.1em. Account / region anchored right.

**`sub-nav`** — 56px tall sub-band on game-specific pages: `#0a141c` floor, game-specific anchors in Riot Beam 12/600 uppercase 0.08em with `#cdbe91` ink.

**`carousel-paddle`** — 48×48 square paddle with `rgba(15,25,35,0.7)` floor and 1px `#c89b3c` gold border, fades in on hover-over rail.

### Modals & Toasts

**`modal`** — `#0f1923` floor with 1px `#c89b3c` Hextech-gold border, 2px radius, white ink. Centred over `rgba(0,0,0,0.85)` scrim. Hextech-gold border is the signature element.

**`toast`** — bottom-centre `#0f1923` floor with cream-gold text, 2px radius, 1px gold hairline.

### Decorative

**`hexmesh-overlay`** — subtle hexagonal pattern overlay on hero bands at 4% opacity Hextech-gold. Mostly invisible — gives texture without competing with key art.

**`rank-tile`** — player rank display: tier emblem (Iron through Challenger) + LP + MMR text. Used in esports profile chrome.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 48 · 64 · 80 · 96 · 128 · 160`
- Section padding (vertical): **96–160px** between hero and first content band — Riot gives editorial sections cinematic breath like Epic
- Card internal padding: **32px** for feature cards (generous for the editorial voice), **24px** for match cards
- Gutters: **16–24px** between champion tiles; **96–128px** between major page bands

### Grid & Container

- Max content width: **1408px** centred
- Homepage: full-bleed hero (1920×1080) → 4-up champion tile rail → 3-up news card grid → esports match grid → footer
- Game detail (e.g., League home): full-bleed hero → "MEET THE CHAMPIONS" rail → "WATCH ESPORTS" feature card → "HOW TO PLAY" video carousel
- Esports portal: 2-column with main bracket left, news rail right
- Footer: 4-column link list on `#010a13` deep-ink

### Whitespace Philosophy

Riot gives **cinematic-broadcast breath**. 96–160px between hero and the first rail, mimicking the pacing of a tournament intro. Inside any rail, champion tiles nestle with 16–24px gutters, but feature cards stand alone with 64–96px breath around them. The brand position: "this is a tournament-broadcast, not a content-firehose."

### Section Cadence

Riot's sections cadence runs **hero → tile rail → feature card → news grid → esports band → footer**. The page rhythm imitates a broadcast intro: a single dominant hero opens, then a sequence of curated editorial moments follows. Section transitions sometimes use a Hextech-gold horizontal hairline as visual punctuation.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0px | Hero banners, full-bleed bands, sub-nav, footer |
| Micro | 1px | Hextech-gold hairline borders |
| Small | 2px | Buttons, cards, modals, inputs — the dominant radius |
| Medium | 4px | Rare softening (avoided) |
| Pill | 9999px | Player avatar circles only |

The radius vocabulary is **2px-dominant**. Riot is angular — soft pill CTAs and 8px cards are foreign. The angular language echoes the chunky stencil-cut graphics of Valorant and the faceted Hextech UI of League's client.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, hero bands, footer (~80% of surfaces) |
| 1 — Champion glow | `0 0 24px rgba(200,155,60,0.4)` | Hovered champion tile — Hextech-gold halo |
| 2 — Card soft | `rgba(0,0,0,0.6) 0 4px 12px` | Feature card resting elevated |
| 3 — Modal | `rgba(0,0,0,0.8) 0 8px 32px` | Centred dialogs |
| 4 — Scrim | `rgba(0,0,0,0.85)` | Modal backdrop |

### Shadow Philosophy

Depth comes from **the canvas-vs-card surface separation** (`#0a141c` body vs `#0f1923` cards) and **the Hextech-gold border decoration** that frames featured panels. The champion-tile gold glow is Riot's signature interactive shadow — a halo that signals "this is a clickable champion / agent." The brand position: depth comes from material separation and gold-border decoration, not from atmospheric shadows.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry
- **Cinematic**: `cubic-bezier(0.16, 1, 0.3, 1)` — champion-tile reveal, hero parallax — long ease-out for trailer-feel

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Hover colour swap, button press deepen |
| Standard | 300ms | Champion tile gold-border reveal + key-art scale |
| Slow | 500ms | Carousel slide, hero parallax, modal cinematic enter |

### Per-Component Recipes

- **Champion tile hover**: tile gains `1px solid #c89b3c` border + gold glow `0 0 24px rgba(200,155,60,0.4)` + key art scales 1.0 → 1.04 over 300ms cinematic.
- **Hero parallax**: hero key art parallax-scrolls at 0.4x scroll velocity — title block stays anchored.
- **CTA press**: red bg deepens `#d13639` → `#a02125` over 150ms on `:active`.
- **Carousel slide**: horizontal carousel slides 500ms cinematic with subtle motion blur (in browsers that support it).
- **Filter chip toggle**: bg transitions `transparent` → `#c89b3c` over 200ms; text colour flips ink → cream.
- **Modal enter**: scrim fades in 300ms, dialog opacity 0 → 1 + scale 0.96 → 1.0 over 500ms cinematic.
- **Link hover**: text colour transitions `#c89b3c` → `#f0e6d2` over 150ms.

### Page Transitions

Page-to-page navigation uses a `300ms` cinematic crossfade — Riot leans into broadcast-style theatricality.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Champion tile gold-border + key-art scale degrade to a colour-only hover. Hero parallax disables. Carousel slide and modal scale degrade to opacity-only.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #f0e6d2 cream-gold on #0a141c canvas | 14.2 | AAA |
| #ffffff strong on #0a141c | 18.5 | AAA |
| #c89b3c link on #0a141c | 5.8 | AA |
| #ffffff on #d13639 CTA | 5.5 | AA |
| #cdbe91 soft on #0a141c | 9.2 | AAA |
| #a09b8c muted on #0a141c | 6.0 | AA |
| #0a141c on #c89b3c gold filter-active | 7.5 | AAA |

The white-on-Riot-Crimson CTA pair sits at AA. Riot compensates by using uppercase 14/700/0.1em button labels (above the AA "large text" threshold). The gold filter-active state at 7.5 is AAA — Riot designs the active state to be unmistakable.

### Focus Indicators

Focus ring is **2px solid `#d13639`** with 2px outline-offset — Riot Crimson ring around buttons, inputs, links. Inputs gain a thicker border on `:focus-visible`.

### ARIA Patterns

- **Search bar**: `role="search"`, input `aria-label="Search Riot Games"`
- **Champion tile**: entire tile wrapped in `<a>` with verbose `aria-label` — "Jinx, the Loose Cannon — Marksman champion in League of Legends"
- **Hero banner**: `role="region"` `aria-label="Featured: [Champion / Agent / Event name]"`
- **Match card**: `aria-label="LCS Spring Finals — Cloud9 versus Team Liquid, March 15"`
- **Carousel paddle**: `aria-label="Previous champion"` / "Next champion"
- **Filter chip**: `aria-pressed` to communicate active state

### Keyboard Navigation

- Tab traverses: top nav → search → main hero → champion grid → news → footer
- Inside carousel rail: arrow keys cycle horizontally
- Esc closes modals
- Search shortcut: `/`

### Screen Reader Hints

Verbose `aria-label` on champion tiles (champion name + role + game). Filter chip includes the actual filter (e.g., "Filter by role: Marksman — currently selected"). Match-card schedule includes timezone in the aria-label.

### Reduced Motion

Champion-tile gold border + scale degrade to colour-only. Hero parallax disabled. Cinematic crossfade page transition → instant. Carousel slide → opacity crossfade.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Top nav collapses to logo + hamburger; hero scales 96px → 40px; champion tiles stack 1-up |
| Tablet | 600–1024px | Champion tile rail 2–3-up; hero scales to 56px |
| Desktop | 1024–1280px | 4-up champion tile rail; full primary nav |
| Wide | 1280–1408px | Content caps at 1408px |

### Touch Targets

- Primary CTAs: 48px height — meets AAA
- Champion tile entire 308×560 tap target
- Carousel paddle: 48×48 — meets AAA

### Collapsing Strategy

- Top nav: utilities collapse first; full uppercase nav becomes a vertical hamburger drawer
- Sub-nav: horizontal scroll
- Hero: full-bleed at every breakpoint; title block reflows
- Game-detail: 2-column splits to single-column stack with esports rail moving below
- Section padding: 160px desktop → 96px tablet → 64px mobile

### Image Behavior

Hero banners use art-directed crops (1920×1080 desktop, 768×1024 mobile portrait). Champion tiles preserve 308×560 aspect. All non-critical imagery lazy-loads.

### Container Queries

Used in the right-rail esports schedule: when the rail narrows below ~340px, match cards collapse to compact format (logos + score only, no game time).

## 11. Content & Voice

### Tone

Cinematic, ceremonial, competitive. Riot's voice is "the broadcast voice of the Worlds Final at the Staples Center." Headlines lead with declaration ("MEET JINX", "WATCH WORLDS", "SEASON 14 BEGINS") rather than question. The uppercase Riot Beam treatment makes every line read as ceremonial.

### Microcopy Patterns

- **Button verbs**: "PLAY FREE", "WATCH NOW", "LEARN MORE", "DOWNLOAD", "READ MORE" — uppercase, outcome-named
- **Error message recipe**: cinematic + clear — "Your connection to the Rift was lost. Reconnect and we'll save your progress."
- **Success confirmations**: ceremonial — "Welcome to the Rift, Summoner."
- **Field labels**: short — "Email", "Summoner Name", "Region"
- **Stock urgency**: rare; esports event countdowns ("LIVE IN 2:14:32") use the chrome only on broadcast pages

### Empty States

Empty match history: "No matches yet. Queue up to write your story."

Empty inventory: "No champions owned. Visit the store to expand your roster."

Empty search: "No results for [query]. Try a champion name or item."

### CTA Verb Conventions

- Primary: **"PLAY FREE"** (universal League/Valorant/TFT CTA), **"WATCH NOW"**, **"LEARN MORE"**, **"DOWNLOAD"**
- Save: **"FAVOURITE"** — uppercase
- Tertiary: **"VIEW DETAILS"**, **"READ MORE"**, **"WATCH TRAILER"**
- Avoided: "Submit", "Click here", "Sign up free" — Riot's voice is ceremonial, not transactional

## 12. Dark Mode & Theming

**Dark-only.** Riot is dark-only across the corporate site, all game-specific marketing pages (League, Valorant, TFT, Wild Rift, Legends of Runeterra), and the esports portal. The League / Valorant / TFT client UIs are also dark-only. No light variant exists. The brand position: competitive gaming sessions happen in dim rooms, the platform should match.

The deepest surface is `#010a13` (hero base, footer); the lightest active surface is `#2a3037` (selected sidebar). The whole system lives within ~12% lightness range — extraordinarily narrow even by dark-mode standards.

Each franchise sub-brand (League, Valorant, TFT, Wild Rift) adapts the canonical crimson-and-gold to its own accent palette while keeping the canvas, ink, and chrome geometry identical.

## 13. Lineage & Influences

Riot's visual lineage runs through three traditions: **fantasy MMO trade dress** (the early 2000s WoW / Lord of the Rings Online — illuminated parchment ink-on-dark, gold-bordered UI panels, ceremonial uppercase display); **esports broadcast graphics** (StarCraft II tournament intros, the 2010s rise of the LCS/LCK/LPL — the tracked-uppercase display voice translated to web); and **Hextech UI design language** (the magical-mechanical aesthetic introduced in the League client around 2017 that became the brand's editorial signature).

The current Riot.com visual system rolled out in waves. The 2017 League client redesign locked in Hextech-gold (`#c89b3c`) as the editorial accent and the Riot Beam display family became the chrome workhorse around the same time. Valorant launched in 2020 with its own slightly differentiated accent palette (brighter red `#fa4454`, near-black canvas) that integrated cleanly into the corporate site's broader palette. The 2024 Riot.com redesign tightened the typographic hierarchy and reduced decorative chrome, letting champion / agent key art carry more visual weight.

What Riot rejects: light mode, soft pill CTAs, sentence-case nav labels, expressive serifs, gradient mesh backgrounds, single-column narrow editorial layouts (Riot's editorial moments use 1408px full-bleed bands), and any chrome that competes with champion / agent key art. The brand position: **the broadcast doesn't dress up — the tournament does**.

**Influences:**
- WoW / Lord of the Rings Online — fantasy MMO trade dress with parchment-on-dark and gold-bordered UI
- StarCraft II / esports broadcast graphics — tracked-uppercase display
- Hextech UI (Riot internal design language) — angular geometry, gold hairline borders
- Riot Beam (Riot commission) — angular display sans
- Spiegel (Riot commission) — humanist body sans
- Valorant brand system (Riot internal) — agent reveal layout
- Mid-2010s tournament-card sport graphics (NBA, NFL broadcast lower-thirds)

## 14. Do's and Don'ts

**Do**
- Anchor the page on near-black `#0a141c` ink-deep canvas with subtle Hextech-gold mesh overlay at 4% opacity
- Use Riot Crimson (`#d13639`) for every primary CTA, focus ring, danger semantic
- Use Hextech-gold (`#c89b3c`) for link colour, feature-card 1px borders, secondary CTA outlines
- Render primary text in cream-gold (`#f0e6d2`) — warm against the cool canvas
- Use Riot Beam at 56–96px / 800–900 with uppercase 0.05–0.1em tracking on display
- Run all CTAs and nav links in uppercase Riot Beam with 0.1em tracking
- Use Spiegel for body at 16/1.6 — generous editorial reading
- Use 2px-radius angular rectangles — no pill CTAs except player avatars
- Frame featured panels with 1px `#c89b3c` Hextech-gold border
- Use full-bleed 1920×1080 champion / agent key art on hero bands with bottom gradient mask
- Apply gold glow `0 0 24px rgba(200,155,60,0.4)` on hovered champion tiles
- Leave 96–160px between hero and the first content band — cinematic breath

**Don't**
- Don't introduce a light-mode variant — Riot is dark-only across every surface
- Don't use sentence-case CTAs — uppercase is the brand voice
- Don't soften CTAs to pill rectangles — 2px angular is canonical
- Don't replace cream-gold ink with pure white — the warm parchment colour is the brand
- Don't use sans-serif body without serif fallback — Spiegel is the body workhorse
- Don't let Valorant red (`#fa4454`) replace Riot Crimson (`#d13639`) in corporate chrome — they're different reds
- Don't add rounded-soft 8px cards — angular 2px is the brand geometry
- Don't make Hextech-gold overwhelm — gold is editorial accent, not surface fill
- Don't compress display tracking below 0.02em — Riot's display copy needs space to breathe
- Don't skip the bottom gradient mask on hero banners — title legibility requires it
- Don't use hover transitions tighter than 200ms — Riot's motion is cinematic-paced

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #0a141c
Card:             #0f1923
Riot Crimson:     #d13639
Brand Hover:      #e74049
Hextech Gold:     #c89b3c
Gold Soft:        #a08838
Cream Gold Text:  #f0e6d2
Text Soft:        #cdbe91
Text Muted:       #a09b8c
Border:           #1e2328
Gold Border:      #c89b3c
Valorant Red:     #fa4454
League Teal:      #0596aa
```

### Example Component Prompts

- "Create a Riot Games primary CTA: 2px-radius angular rectangle with Riot Crimson `#d13639` fill, white uppercase Riot Beam 14/700/0.1em label 'PLAY FREE', 14×32px padding, 48px height. Hover brightens to `#e74049`. Active deepens to `#a02125`."
- "Build a Riot champion tile: 308×560 tall portrait with cover-art key art, 2px radius, `#0f1923` floor. Champion name overlaid bottom in uppercase Riot Beam 24/700/0.04em cream-gold. On hover: `1px solid #c89b3c` Hextech-gold border + gold glow `0 0 24px rgba(200,155,60,0.4)` + key art scales 1.0 → 1.04 over 300ms cinematic ease."
- "Design a Riot top nav: sticky 80px tall with semi-translucent `rgba(10,20,28,0.95)` floor + backdrop blur. Riot wordmark anchored left in white. Nav items 'GAMES · NEWS · ESPORTS · CAREERS · MERCH' in Riot Beam 14/700 uppercase 0.1em cream-gold. Region selector + account anchored right. Below: 56px sub-nav with `#0a141c` floor and game-specific anchors."
- "Build a Riot Hextech feature card: `#0f1923` floor with 1px `#c89b3c` Hextech-gold border, 32px padding, 2px radius. Inside: uppercase Riot Beam eyebrow 11/700/0.15em 'PATCH NOTES' in gold, headline 36/700/0.05em uppercase cream-gold, body 16/1.6 Spiegel cream-gold soft, gold-outline 'READ MORE' button at bottom."
- "Create a Riot hero banner: full-bleed 1920×1080 champion key art with gradient mask `linear-gradient(180deg, transparent 0%, rgba(10,20,28,0.9) 100%)` at the bottom 30%. Title block lower-left: uppercase eyebrow 'MEET' in 11/700/0.15em gold, then champion name 'JINX' in Riot Beam 96/900/0.02em uppercase white. Below: Riot Crimson 'PLAY FREE' CTA + Hextech-gold-outline 'WATCH TRAILER' CTA."
- "Design a Riot match card: `#0f1923` floor with 1px `#c89b3c` border, 2px radius, 24px padding. Two team logos at the top (left vs right) with score in Riot Beam 36/700 cream-gold between them. Game time + tournament name in Spiegel 13/500 muted below. Optional 'LIVE' red badge top-right."

### Iteration Guide

1. **Start with the canvas.** If your page isn't `#0a141c` ink-deep blue-black with subtle Hextech mesh, it isn't Riot. Lock the canvas first.
2. **Cream-gold ink, not white.** `#f0e6d2` for body — the parchment-warm voice.
3. **Hextech-gold is the editorial accent.** `#c89b3c` for links, feature borders, secondary CTAs. Riot Crimson is for primary CTAs only.
4. **Uppercase Riot Beam everywhere chrome.** Top nav, CTAs, eyebrows, badges — all uppercase 0.05–0.1em tracking.
5. **Display goes huge.** Hero copy at 72–96px / 900 with positive 0.02–0.04em tracking. If your headline is small, it isn't Riot.
6. **2px angular geometry.** No pills, no soft 8px cards. Every rectangle is 2px-radius.
7. **Cinematic breath.** 96–160px between hero and the first rail. Riot is broadcast pacing, not data-density.
8. **Hextech-gold border is the signature.** 1px gold hairline frames every featured panel. The double-border variant is the deep brand cut.
