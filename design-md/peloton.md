---
name: Peloton
tagline: Signature `#cb1e4e` red on midnight ink, Inter display, instructor-led premium-fitness storefront.
updated_at: 2026-05-05T09:41:09+12:00
published_at: 2026-05-05T09:41:09+12:00
author: webdesignhot
source_url: https://www.onepeloton.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [media, marketplace]
tags: [dark, fitness, sans, instructor-led, premium, photographic, energetic]
preview_swatch: ['#0d0d0d', '#cb1e4e', '#ffffff']
related: [nike, spotify, soundcloud]
description: 'Peloton''s storefront is the canonical instructor-led premium-fitness canvas — a near-black ground (`#0d0d0d`) with hard-set white type and a single confident **#cb1e4e** red that carries the wordmark, every primary CTA, the live-class indicator, and the heart-favorite state. Type runs **Inter** at heavy 700–900 weights for hero display (48–72px) with tight negative tracking and **Inter** medium for body — instructor-photo-first composition with editorial breath beneath. Cards round at 12px, CTAs are 8px small-radius rectangles (not pill — Peloton signals utility-grade hardware, not soft consumer), and the entire surface is engineered to evoke the energy of a live group ride: oversized instructor headshots, real-time class times, leaderboard typography, and a single voltage of red firing through the dark canvas.'

colors:
  bg: '#0d0d0d'                  # near-black canvas — Peloton's signature dark ground
  bg-strong: '#000000'           # pure-black for hero video overlay
  bg-elev: '#1a1a1a'             # card surface, modal background
  bg-elev-strong: '#262626'      # elevated card, dropdown
  surface: '#1a1a1a'
  surface-soft: '#262626'        # disabled fields
  surface-strong: '#333333'      # divider band
  surface-light: '#f5f5f5'       # rare light-mode storefront band
  brand: '#cb1e4e'               # Peloton red — wordmark, primary CTA, live indicator
  brand-hover: '#a51840'         # deeper red on hover
  brand-active: '#841234'        # pressed state
  brand-pale: '#f8d9e2'          # disabled CTA tint
  brand-deep: '#5e0a23'          # darkest red for accent moments
  brand-soft: '#1f0a10'          # red-tinted dark surface
  text: '#ffffff'                # primary white text on dark canvas
  text-strong: '#ffffff'         # heading punch
  text-muted: '#b3b3b3'          # secondary metadata, instructor bio
  text-soft: '#8a8a8a'            # caption, faint counts
  text-faint: '#666666'           # disabled, microcopy
  text-on-brand: '#ffffff'       # white on red CTA
  link: '#ffffff'                # default white link with underline
  link-hover: '#cb1e4e'          # link hover flips to brand red
  border: '#333333'              # default 1px hairline on dark
  border-soft: '#262626'         # subtle dividers
  border-strong: '#4d4d4d'       # focus state hairline
  border-input: '#666666'        # form input outline
  live-red: '#cb1e4e'            # live-class indicator
  leaderboard-gold: '#ffc300'    # top-1 leaderboard ranking
  leaderboard-silver: '#c0c0c0'  # top-2
  leaderboard-bronze: '#cd7f32'  # top-3
  pr-record: '#ffc300'           # personal-record star
  scrim: 'rgba(0,0,0,0.7)'       # modal backdrop on dark
  shadow-card: 'rgba(0,0,0,0.4)'
  shadow-elev: 'rgba(0,0,0,0.6)'
  success: '#1cb350'             # workout-complete green
  warning: '#ffa726'             # advisory amber
  danger: '#ff4d4f'              # error red — distinct from brand red
  info: '#3b82f6'

typography:
  display:
    family: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700, 800, 900]
    opentype-features: ['ss01', 'tnum', 'cv11']
  body:
    family: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"Inter", "SF Mono", Menlo, Monaco, Consolas, monospace'
    weights: [400, 500, 700]
  scale:
    hero-display:    { size: 72, weight: 800, lineHeight: 1.0,  tracking: '-2px',     family: display, opentype: ['ss01'] }
    hero-display-md: { size: 56, weight: 800, lineHeight: 1.04, tracking: '-1.5px',   family: display, opentype: ['ss01'] }
    page-title:      { size: 40, weight: 800, lineHeight: 1.1,  tracking: '-1px',     family: display, opentype: ['ss01'] }
    section-head:    { size: 32, weight: 700, lineHeight: 1.15, tracking: '-0.75px',  family: display, opentype: ['ss01'] }
    sub-section:     { size: 24, weight: 700, lineHeight: 1.2,  tracking: '-0.5px',   family: display }
    instructor-name: { size: 28, weight: 800, lineHeight: 1.1,  tracking: '-0.4px',   family: display, transform: 'uppercase' }
    class-title:     { size: 20, weight: 700, lineHeight: 1.25, tracking: '-0.25px',  family: display }
    body-md:         { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',        family: body }
    caption:         { size: 13, weight: 500, lineHeight: 1.38, tracking: '0',        family: body }
    micro:           { size: 11, weight: 600, lineHeight: 1.27, tracking: '0.06em',   family: body, transform: 'uppercase' }
    metric-display:  { size: 56, weight: 900, lineHeight: 1.0,  tracking: '-1.5px',   family: body, opentype: ['tnum'] }
    metric-label:    { size: 12, weight: 700, lineHeight: 1.0,  tracking: '0.08em',   family: body, transform: 'uppercase' }
    button-cta:      { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0.02em',   family: body, transform: 'uppercase' }
    nav-link:        { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0.04em',   family: body, transform: 'uppercase' }
    leaderboard-rank: { size: 18, weight: 800, lineHeight: 1.0,  tracking: '0',        family: body, opentype: ['tnum'] }
    timer-display:   { size: 64, weight: 900, lineHeight: 1.0,  tracking: '-2px',     family: body, opentype: ['tnum'] }
    schedule-time:   { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0',        family: body, opentype: ['tnum'] }

radius:
  micro: 2
  sm: 4
  md: 8        # CTA, buttons — small to read utility-grade
  lg: 12       # cards
  xl: 16
  xxl: 24
  pill: 9999   # avatars, instructor headshots

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 80
  masthead-height: 64
  sub-nav-height: 48

components:
  button-cta:
    bg: '#cb1e4e'
    color: '#ffffff'
    radius: 8
    padding: '16px 32px'
    height: 56
    font: button-cta
    use: 'Buy Now, Sign Up, Take a Class — every primary action.'
  button-cta-hover:
    bg: '#a51840'
    color: '#ffffff'
    use: 'Hover state — deeper red with subtle scale 1.0 → 1.02.'
  button-secondary:
    bg: 'transparent'
    color: '#ffffff'
    border: '2px solid #ffffff'
    radius: 8
    padding: '14px 30px'
    height: 56
    use: 'Learn More, Watch Trailer — outline white-on-dark variant.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#ffffff'
    use: 'Inline links — underlined, hover flips to brand red.'
  button-favorite:
    bg: 'transparent'
    color: '#ffffff'
    radius: 9999
    border: '1px solid #4d4d4d'
    height: 40
    width: 40
    use: 'Heart icon button — fills brand red when bookmarked to "Stack".'
  instructor-card:
    bg: '#1a1a1a'
    color: '#ffffff'
    radius: 12
    padding: '0'
    use: 'Instructor portrait card — full-bleed photo with name overlay (uppercase 28/800), discipline tag, total class count.'
  class-card:
    bg: '#1a1a1a'
    color: '#ffffff'
    radius: 12
    padding: '0'
    use: 'Class tile — 16:9 thumbnail with red live-indicator overlay, instructor name, duration, difficulty tag.'
  hero-video:
    bg: '#000000'
    color: '#ffffff'
    radius: 0
    use: 'Full-bleed autoplay class video with overlay headline 56–72/800 in white, primary red CTA, secondary white outline CTA.'
  schedule-row:
    bg: '#1a1a1a'
    color: '#ffffff'
    radius: 8
    padding: '16px 20px'
    use: 'Class schedule list row — instructor avatar (40px pill), class title, schedule-time tabular, duration, "Reserve" red CTA.'
  leaderboard-row:
    bg: 'transparent'
    color: '#ffffff'
    radius: 0
    padding: '12px 16px'
    use: 'Live leaderboard row — rank in tabular 18/800, avatar, username, output watts, you-row tinted brand-soft.'
  metric-tile:
    bg: '#1a1a1a'
    color: '#ffffff'
    radius: 12
    padding: '24px'
    use: 'Workout metric — large 56/900 tnum value, 12/700 uppercase label, optional sparkline.'
  search-bar:
    bg: '#1a1a1a'
    color: '#ffffff'
    radius: 8
    height: 48
    border: '1px solid #4d4d4d'
    focus-ring: '2px solid #cb1e4e'
    use: 'Class catalogue search — width-flexible, dark surface, brand-red focus.'
  modal:
    bg: '#1a1a1a'
    color: '#ffffff'
    radius: 16
    padding: '32px'
    use: 'Centered dialog — 70% black scrim backdrop, brand-red close icon hover.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-energetic: 'cubic-bezier(0.34, 1.56, 0.64, 1)'   # springy class-start animation
  duration-fast: 150
  duration-standard: 240
  duration-slow: 400
  duration-class-celebration: 600
  cta-press: 'CTA scale 1.0 → 0.97 + bg deepens cb1e4e → 841234 over 150ms on :active'
  card-hover: 'instructor-photo scale 1.0 → 1.04 inside rounded clip + overlay opacity 0.4 → 0.6 over 240ms'
  live-pulse: 'red live-indicator dot pulses opacity 1.0 → 0.5 → 1.0 over 1200ms infinite'
  leaderboard-rank-change: 'rank cell translateY +8 → 0 + opacity 0 → 1 over 240ms emphasized when rank improves'
  pr-celebration: 'gold star scales 0 → 1.2 → 1.0 + confetti burst over 600ms when personal record set'
  reduced-motion: 'respects prefers-reduced-motion: reduce — image scale, live-pulse, and PR-celebration suppressed; colour transitions remain.'

breakpoints:
  mobile: 600
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  ambient: 'rgba(0,0,0,0.4) 0 4px 12px'
  hover-card: 'rgba(0,0,0,0.6) 0 8px 24px'
  modal: 'rgba(0,0,0,0.8) 0 16px 48px'
  brand-glow: '0 0 24px rgba(203,30,78,0.3)'  # red glow on hover for live elements
  ring: '0 0 0 2px #cb1e4e'

accessibility:
  contrast-text-on-bg: 18.5          # #ffffff on #0d0d0d — AAA
  contrast-text-on-brand: 4.7        # #ffffff on #cb1e4e — AA at body sizes
  contrast-muted-on-bg: 8.4          # #b3b3b3 on #0d0d0d — AAA
  contrast-link-hover: 4.7           # #cb1e4e on #0d0d0d — AA at body sizes
  focus-ring: '2px solid #cb1e4e + 2px outline offset (brand-red ring)'
  reduced-motion-honored: true
  touch-target-min: 48
  keyboard-nav: 'Tab moves masthead → search → category nav → main grid → footer; arrow keys inside class catalogue grid and leaderboard.'

dark-mode: 'native'   # Peloton storefront is dark-first. Light-mode appears in select shop bands; spec preserves both.
---

## 1. Visual Theme & Atmosphere

Peloton's storefront is the canonical instructor-led premium-fitness canvas — a near-black ground (`#0d0d0d`) with hard-set white type and a single confident **#cb1e4e** red that does the entire chromatic work of the brand. The base canvas sits a touch above pure black: `#0d0d0d` rather than `#000000`, the same near-black-with-warmth that distinguishes a velvet curtain from a void. The dark ground evokes the dimmed studio of a live class, the spotlit instructor, the moment before "Three, two, one — let's ride."

Type runs **Inter** at heavy 700–900 weights for hero display (48–72px) with tight negative tracking (`-2px` at 72px, scaling proportionally). Where most premium brands flirt with light-weight luxury, Peloton commits to weight as conviction — the headlines hit hard, the metric displays are 900 with tabular numerals (`tnum`), and the instructor name overlay runs uppercase 28/800. The font choice is utilitarian (Inter, the open-source workhorse of the modern web) but the weight discipline pushes it into broadcast-graphic territory.

The chromatic identity is essentially bichromatic — **white on black with a single voltage of red**. The red (`#cb1e4e`) is more saturated than rose, slightly cooler than crimson — a confident commercial red that reads as "live class about to start" and "press the buy button now". It carries the wordmark, every primary CTA, the live-class pulsing indicator, the heart-favorite "Stack" state, the focus ring, and the brand-glow shadow on featured cards. There is no secondary brand colour.

Shape language is deliberately rectangular — CTAs round at **8px**, not pill. This is critical: Peloton sells $2,500 stationary bikes and $3,000 treadmills, and the brand consciously rejects the rounded-pill consumer-app aesthetic in favor of utility-grade hardware geometry. Cards round at 12px (slightly more relaxed for content surfaces), modals at 16px, instructor headshots at 9999px (the only true pill on the page). The buttons feel like equipment-grade controls.

Photography is **the design**. Every page leans on full-bleed instructor portraits — Robin Arzon, Cody Rigsby, Tunde Oyeneyin, Alex Toussaint — shot in saturated studio light with hard rim-lighting that matches the red brand voltage. Class thumbnails use 16:9 video stills with a red live-indicator dot pulsing on currently-airing classes. The leaderboard typography uses tabular numerals so rank-change animations feel mechanically precise.

**Key Characteristics:**
- Near-black canvas (`#0d0d0d`) with hard-set white type — Peloton signals "studio dim" not "pitch dark"
- Single brand colour: `#cb1e4e` red for wordmark, every primary CTA, live indicator, focus ring, brand-glow
- Inter at heavy 700–900 weights with tight negative tracking — hero 72/800/-2px, metric 56/900/tnum
- 8px rectangular CTAs at 56px height — Peloton rejects pill geometry to signal utility-grade hardware
- Live-class red pulsing indicator (1.2s opacity loop) with optional brand-glow shadow `0 0 24px rgba(203,30,78,0.3)`
- Tabular numerals (`tnum`) on every metric, leaderboard rank, schedule time, timer
- Uppercase 12/700 metric labels and 14/600 nav links — broadcast-graphic typography discipline
- Full-bleed instructor portraits with red rim-light — the hero is always a person, never product chrome

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#0d0d0d`): default near-black page floor, every dark band
- **Pure Black** (`#000000`): hero video underlay, modal scrim base
- **White** (`#ffffff`): primary text, headlines, CTA labels on red
- **Card Surface** (`#1a1a1a`): elevated cards, modal background, schedule rows

### Brand
- **Peloton Red** (`#cb1e4e`): the wordmark, every primary CTA, live indicator, heart-favorite filled, focus ring, brand-glow — the single brand colour
- **Brand Hover** (`#a51840`): deeper red on hover
- **Brand Active** (`#841234`): pressed state
- **Brand Pale** (`#f8d9e2`): disabled CTA tint (rare — only used in light-mode shop bands)
- **Brand Deep** (`#5e0a23`): darkest red for editorial accent
- **Brand Soft** (`#1f0a10`): red-tinted dark surface for "you" row in leaderboard, error states

### Accent
- **Leaderboard Gold** (`#ffc300`): top-1 ranking, personal-record star
- **Leaderboard Silver** (`#c0c0c0`): top-2 ranking
- **Leaderboard Bronze** (`#cd7f32`): top-3 ranking
- **Brand Glow** (`rgba(203,30,78,0.3)`): red shadow halo on featured cards and live tiles

### Interactive
- **Link** (`#ffffff`): default inline link in body — distinguished by underline
- **Link Hover** (`#cb1e4e`): hover flips to brand red — Peloton's signature link interaction
- **Visited** (`#b3b3b3`): muted visited state
- **Disabled** (`#666666`): disabled text and outline
- **Selected** (`#cb1e4e`): selected radio / checkbox / tab fill
- **Focus** (`#cb1e4e`): 2px brand-red ring with 2px offset

### Neutral Scale
- **White** (`#ffffff`) — primary text
- **Muted** (`#b3b3b3`) — secondary metadata, instructor bio body
- **Soft** (`#8a8a8a`) — caption, faint counts, "Last taken 3 days ago"
- **Faint** (`#666666`) — disabled, microcopy, footer legal
- **Border** (`#333333`) — default 1px hairline on dark
- **Border Soft** (`#262626`) — subtle dividers
- **Border Strong** (`#4d4d4d`) — focus state hairline on inputs
- **Border Input** (`#666666`) — default form-input outline

### Surface & Borders
- **Canvas** (`#0d0d0d`) — default
- **Card** (`#1a1a1a`) — elevated cards, modal
- **Card Strong** (`#262626`) — disabled fields, alternate row
- **Divider** (`#333333`) — divider band between major sections
- **Light Surface** (`#f5f5f5`) — rare light-mode storefront band (apparel shop)

### Shadow Colors
Peloton uses dark-on-dark shadows with optional **red brand-glow** halos on featured live elements.

- `rgba(0,0,0,0.4) 0 4px 12px` — ambient card lift
- `rgba(0,0,0,0.6) 0 8px 24px` — hover card
- `rgba(0,0,0,0.8) 0 16px 48px` — modal drop
- `0 0 24px rgba(203,30,78,0.3)` — brand glow on live elements

### Semantic
- **Success Green** (`#1cb350`): "Workout Complete", "Streak +1"
- **Warning Amber** (`#ffa726`): advisory banners, "Class fills fast"
- **Danger Red** (`#ff4d4f`): validation errors — distinct from brand red so error never reads as CTA
- **Info Blue** (`#3b82f6`): informational banners — used sparingly

## 3. Typography Rules

### Font Family

**Primary**: `Inter`. Fallback chain: `"Helvetica Neue", Helvetica, Arial, sans-serif`. Inter is Rasmus Andersson's open-source variable sans, the most widely-deployed premium typeface on the modern web. Peloton uses Inter across the entire scale — no display-family alternative.

**Mono**: not used as a distinct family; tabular numerals (`tnum`) are achieved via Inter's OpenType feature.

**OpenType features**: `tnum` is enabled on every numeric display — metrics, leaderboard ranks, schedule times, timer, prices. `ss01` (the alternate-glyph stylistic set) is enabled on display headlines. `cv11` provides the alternate single-storey `a` used in metric labels.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | Inter | 72 | 800 | 1.0 | -2px | ss01 | Hero "Bring the studio home" |
| hero-display-md | Inter | 56 | 800 | 1.04 | -1.5px | ss01 | Sub-hero on category pages |
| page-title | Inter | 40 | 800 | 1.1 | -1px | ss01 | "Classes", "Bike+", "Tread" page H1 |
| section-head | Inter | 32 | 700 | 1.15 | -0.75px | ss01 | "Featured instructors", "Ride with friends" |
| sub-section | Inter | 24 | 700 | 1.2 | -0.5px | — | Sub-section heads |
| instructor-name | Inter | 28 | 800 | 1.1 | -0.4px | uppercase | Instructor portrait overlay — "ROBIN ARZON" |
| class-title | Inter | 20 | 700 | 1.25 | -0.25px | — | Class tile title — "30 min HIIT Ride" |
| body-md | Inter | 16 | 400 | 1.5 | 0 | — | Default body |
| body-sm | Inter | 14 | 400 | 1.43 | 0 | — | Secondary metadata |
| caption | Inter | 13 | 500 | 1.38 | 0 | — | Difficulty tags, durations |
| micro | Inter | 11 | 600 | 1.27 | 0.06em | uppercase | "BEGINNER", "ADVANCED" |
| metric-display | Inter | 56 | 900 | 1.0 | -1.5px | tnum | Output watts, total minutes — broadcast-grade |
| metric-label | Inter | 12 | 700 | 1.0 | 0.08em | uppercase | "OUTPUT", "CADENCE", "RESISTANCE" |
| button-cta | Inter | 16 | 700 | 1.0 | 0.02em | uppercase | "BUY NOW", "SIGN UP", "TAKE A CLASS" |
| nav-link | Inter | 14 | 600 | 1.0 | 0.04em | uppercase | "BIKES", "TREAD", "APP", "CLASSES" |
| leaderboard-rank | Inter | 18 | 800 | 1.0 | 0 | tnum | Rank cell in live leaderboard |
| timer-display | Inter | 64 | 900 | 1.0 | -2px | tnum | Class countdown, workout timer |
| schedule-time | Inter | 14 | 700 | 1.0 | 0 | tnum | "9:00 AM", "5:30 PM" schedule rows |

### Principles

- **Weight as conviction.** Where Stripe whispers at 300, Peloton commits at 800–900. The hero `bring the studio home` runs Inter 72/800 with `-2px` tracking — broadcast-grade weight that mirrors the energy of a live instructor cue.
- **Uppercase for chrome.** Nav links, button labels, metric labels, and instructor names render uppercase with positive tracking (`+0.02–0.08em`). The discipline ties the page to broadcast-television sport graphics — ESPN, NFL primetime — rather than consumer-app casual.
- **Tabular numerals on every metric.** `tnum` on output watts, cadence, resistance, leaderboard rank, schedule time, timer — every digit aligns vertically, which makes rank-change animations and live metric updates feel mechanically precise.
- **`ss01` on display.** Inter's stylistic-set 01 is enabled on hero, page-title, and section heads — the alternate `a` and `g` forms tighten the headline silhouette.
- **Negative tracking scales.** `-2px` at 72px → `-1.5px` at 56px → `-1px` at 40px → `-0.75px` at 32px → `0` at 16px. The discipline mirrors NYT Magazine display — weight grows, tracking compresses.
- **Two-weight body simplicity.** Body is 400 (regular) and 500 (caption emphasis). All weight above 600 is reserved for chrome (CTAs, labels) or display.

## 4. Component Stylings

### Buttons

**`button-cta`** — brand-red (`#cb1e4e`) fill, white text in 16/700 uppercase, **8px** radius (rectangular — not pill), 16×32px padding, 56px height. The most common CTA: "BUY NOW", "SIGN UP", "TAKE A CLASS", "RESERVE". Hover deepens to `#a51840` and the button scales 1.0 → 1.02. Active to `#841234` with press scale 1.0 → 0.97.

**`button-secondary`** — transparent fill, 2px white outline, white text in 16/700 uppercase. Same 8px radius, same 56px height. Used for "LEARN MORE", "WATCH TRAILER", "VIEW SCHEDULE" — outline white-on-dark variant.

**`button-tertiary-text`** — plain white text, no surface. Underlined; hover flips text colour to brand red.

**`button-favorite`** — small (40×40) circular icon button, transparent fill, 1px `#4d4d4d` border, white heart icon. When favorited (added to "Stack"), the heart fills with brand red.

### Cards

**`class-card`** — class tile. Dark surface (`#1a1a1a`), 12px radius, 16:9 thumbnail flush to top corners, internal 16px padding for metadata. Stack: 16:9 video still with optional red live-indicator dot top-right (pulses), instructor avatar (32px pill) bottom-left of thumbnail, class title in 20/700, instructor name + duration + difficulty tag in 14/400 muted, optional "Take a class" CTA on hover.

**`instructor-card`** — full-bleed instructor portrait, 12px radius, name overlay in `instructor-name` (28/800 uppercase) bottom-left over a black gradient mask, discipline tags ("Cycling • Strength") in 13/500 muted beneath. Hover scales the photo 1.0 → 1.04 inside the rounded clip.

**`hero-video`** — full-bleed autoplay class video with dim black overlay, hero headline 56–72/800 in white, body copy 18/400 muted, primary brand-red CTA + secondary white outline CTA. The video typically loops a 15-second instructor energy clip.

**`schedule-row`** — class schedule list row in a stacked layout. Dark surface (`#1a1a1a`), 8px radius, 16×20px padding. Stack: instructor avatar (40px pill) flush left, class title in 16/700 + instructor name in 13/500 muted in the centre, schedule time in 14/700 tabular flush right, "RESERVE" red CTA flush right of time.

**`metric-tile`** — workout metric panel. Dark surface (`#1a1a1a`), 12px radius, 24px padding. Large value in 56/900 tabular ("248"), label beneath in 12/700 uppercase ("OUTPUT"), optional 24px sparkline showing trend.

### Badges, Tags, Pills

**`live-indicator`** — 8×8 brand-red circle with infinite pulse animation (opacity 1.0 → 0.5 → 1.0 over 1200ms). Beside it: "LIVE" text in 11/700 uppercase white.

**`difficulty-tag`** — transparent fill, 1px `#4d4d4d` border, white text in 11/600 uppercase, 4px radius, 4×8px padding. "BEGINNER" / "INTERMEDIATE" / "ADVANCED".

**`pr-badge`** — gold (`#ffc300`) star icon + "PR" text in 11/700 uppercase. Appears on the metric tile when a personal record is set.

**`leaderboard-rank-medal`** — gold/silver/bronze ring around the avatar of the top-3 leaderboard ranks.

### Inputs / Forms

**`text-input`** — dark surface (`#1a1a1a`), 1px `#666666` hairline, 8px radius, 48px height, 12×16px padding, white text in 16/400. Stacked label above in 12/700 uppercase. On focus the border thickens to 2px brand-red.

**`search-bar`** — class catalogue search. Dark surface, 8px radius, 48px height, 1px `#4d4d4d` hairline, white magnifier icon flush left, 2px brand-red focus ring on `:focus-visible`.

### Navigation

**`masthead`** — full-width dark bar (`#0d0d0d`) with a thin 1px `#262626` bottom border, 80px height. Wordmark flush left in white (Peloton's circle-P logomark + wordmark). Nav links centred in 14/600 uppercase. Account / Stack / Cart utilities flush right.

**`sub-nav`** — slim 48px band beneath the masthead for class category filters: "ALL CLASSES", "CYCLING", "STRENGTH", "YOGA", "RUNNING", "MEDITATION". 14/600 uppercase white labels with `:hover` flipping to brand red.

**`mega-menu-flyout`** — opens from category dropdown; dark surface (`#1a1a1a`), 12px radius, 1px hairline, hover-card shadow.

### Leaderboard

**`leaderboard-row`** — live leaderboard row. Transparent surface, 12×16px padding, optional brand-soft (`#1f0a10`) background tint on the user's own row. Rank cell in 18/800 tabular flush left, avatar (32px pill), username in 14/600, output watts in 14/700 tabular flush right.

### Modals & Toasts

**`modal`** — centred dialog over a 70%-opacity black scrim. Dark surface (`#1a1a1a`), 16px radius, modal shadow. Close X anchored top-right with brand-red hover.

**`toast`** — bottom-centre notifications. Dark surface, 8px radius, 1px hairline, white text, 16×24px padding. PR celebration toast adds a brand-glow halo.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160`
- Section padding (vertical): **96–160px** between major bands; **160px** on the hero band — Peloton trusts breath above the fold to let the instructor video breathe
- Card internal padding: **16–24px** for content cards; **0** for full-bleed instructor portraits
- Gutters: **16–24px** between class tiles in grid view; **96px+** between major page bands

### Grid & Container

- Max content width: **1440px** centred
- Homepage: full-bleed hero video → 4-column instructor portrait grid → 3-column class category cards → schedule strip
- Class catalogue: **3-up** grid at desktop with 24px gutters
- Live-class page: 2-column with class video left (~70%), live leaderboard right (~30%)

### Whitespace Philosophy

Peloton trusts breath at the page edges and density inside the leaderboard. Hero sections run 96–160px vertical padding. Class grids run 24px gutters. Inside the leaderboard, density compresses to 12px row padding because the broadcast-graphic typography needs tight rows to read like ESPN telemetry.

### Section Cadence

Peloton's storefront stays on the dark canvas almost everywhere — the rhythm comes from **photo-density alternation**, not light/dark band switching. Full-bleed instructor video → tight instructor portrait grid → class category cards (each with a hero photo) → testimonial band with single quote on dark.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Dense table corners |
| Small | 4px | Difficulty tags, tiny badges |
| Default | 8px | CTAs, buttons, inputs, schedule rows — Peloton's signature rectangular geometry |
| Card | 12px | Class tiles, instructor cards, metric tiles |
| Featured | 16px | Modals, hero banners |
| Hero | 24px | Hero promo bands |
| Pill | 9999px | Avatars, instructor headshots, live-indicator dot |

Peloton consciously rejects pill CTAs. The 8px CTA radius is the brand's most signature shape decision — utility-grade hardware geometry, not soft consumer-app pill.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer |
| 1 — Ambient | `rgba(0,0,0,0.4) 0 4px 12px` | Default cards |
| 2 — Hover | `rgba(0,0,0,0.6) 0 8px 24px` | Cards on hover, dropdowns |
| 3 — Modal | `rgba(0,0,0,0.8) 0 16px 48px` | Centred dialogs |
| 4 — Brand Glow | `0 0 24px rgba(203,30,78,0.3)` | Live tiles, featured class cards on hover |
| 5 — Scrim | `rgba(0,0,0,0.7)` | Modal backdrop |

### Shadow Philosophy

Peloton's shadows are **deeper-black on near-black** — a subtle elevation that reads as "darker shadow, not darker tint". The signature **brand-glow halo** appears only on live elements and featured-class hover states: a 24px-radius red halo at 30% opacity that mimics the rim-lighting of a live studio. The brand position: depth comes from photo contrast and selective brand-glow, not multi-layer atmospheric stacking.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu
- **Energetic**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — springy class-start, PR celebration

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Hover colour swap, focus ring fade-in, CTA press |
| Standard | 240ms | Card hover lift + image scale, modal enter |
| Slow | 400ms | Hero carousel slide |
| Class Celebration | 600ms | PR star burst, workout-complete confetti |

### Per-Component Recipes

- **CTA hover**: background `#cb1e4e` → `#a51840` over 150ms + scale 1.0 → 1.02.
- **CTA press**: deepens to `#841234` for 150ms on `:active` + scale 1.0 → 0.97.
- **Class-card hover**: instructor photo scales 1.0 → 1.04 inside its rounded clip + overlay opacity intensifies + brand-glow halo appears for live tiles.
- **Live-pulse**: red 8×8 indicator dot pulses opacity 1.0 → 0.5 → 1.0 over 1200ms infinite.
- **Leaderboard rank-change**: rank cell translateY +8 → 0 + opacity 0 → 1 over 240ms emphasized.
- **PR celebration**: gold star scales 0 → 1.2 → 1.0 + confetti burst over 600ms.
- **Modal enter**: scrim fades in over 200ms, dialog translates from `translateY(8px) opacity(0)` to `0/1` over 240ms emphasized.

### Page Transitions

Page-to-page navigation uses no transition — links fire a hard navigation. The class catalogue lazy-loads tile thumbnails as you scroll.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Card image scale, live-pulse, and PR-celebration suppress to opacity-only or instant.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #ffffff white on #0d0d0d canvas | 18.5 | AAA |
| #ffffff on #cb1e4e CTA | 4.7 | AA at body sizes |
| #b3b3b3 muted on #0d0d0d | 8.4 | AAA |
| #cb1e4e link hover on #0d0d0d | 4.7 | AA at body sizes |
| #ffffff on #1a1a1a card | 16.5 | AAA |
| #ffc300 leaderboard-gold on #0d0d0d | 13.2 | AAA |

The white-on-brand-red CTA pair sits at 4.7 — clears AA at body sizes. Peloton uses 16/700 uppercase button text, which sits comfortably above the AA threshold.

### Focus Indicators

Focus ring is **2px solid `#cb1e4e`** (brand red) with 2px outline-offset. Buttons, inputs, and links all gain the brand-red ring on `:focus-visible`. The dark canvas gives the red ring high luminance contrast (~9.2 against `#0d0d0d`).

### ARIA Patterns

- **Live-class indicator**: `aria-label="Live class — currently airing"` on the pulsing red dot.
- **Class card**: entire tile wrapped in `<a>` with verbose `aria-label` — "30 minute HIIT Ride with Robin Arzon, Intermediate, taken 2,347 times."
- **Leaderboard**: `role="table"` with `role="row"` per athlete; user's own row has `aria-current="true"`.
- **Schedule reserve button**: `aria-label="Reserve 9 AM HIIT Ride with Robin Arzon"`.
- **Favorite/Stack heart**: `aria-pressed` to communicate save state.

### Keyboard Navigation

- Masthead: Tab moves logo → nav links → search → account → stack → cart
- Class catalogue: Tab moves through tiles in document order; favorite heart is its own tab stop
- Live-class page: Tab moves video → leaderboard rows → reserve buttons
- Mega-menu: arrow keys navigate, Esc closes

### Screen Reader Hints

Verbose `aria-label` on icon-only buttons. Live indicator announces "Live class — currently airing". PR celebration triggers a polite `aria-live` region with "Personal record! 248 watts."

### Reduced Motion

All transitions degrade to opacity-only. Image scale, live-pulse, and PR celebration suppress.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Masthead collapses to logo + cart + hamburger; class grid 1-up; instructor cards horizontal scroll |
| Tablet | 600–1024px | Masthead with collapsed nav; class grid 2-up |
| Desktop | 1024–1280px | Sub-nav with category filters; class grid 3-up; leaderboard right-rail visible |
| Wide | 1280–1440px | Content caps at 1440px; class grid 3-up with larger gutters |

### Touch Targets

- Primary CTAs: 56px height — AAA
- Search bar: 48px
- Favorite heart on cards: 40×40px — meets AA
- Class tile: entire tile is tappable

### Collapsing Strategy

- Masthead: utilities (account, stack) hide first; only logo + cart + hamburger remain at <600px
- Class grid: 3 → 2 → 1; gutters compress from 24px to 16px to 8px
- Leaderboard: right-rail collapses to a sticky bottom-sheet at <1024px
- Hero video: aspect-ratio collapses from 16:9 to 4:5 portrait at <600px

### Image Behavior

Class thumbnails use `aspect-ratio: 16/9` with `object-fit: cover`. Instructor portraits use `aspect-ratio: 4/5` with `object-fit: cover` — the taller portrait crop matches the instructor-led aesthetic.

### Container Queries

Used in the metric tile: when the tile narrows below ~280px, the metric value compresses from 56px to 40px and the sparkline hides.

## 11. Content & Voice

### Tone

Direct, motivational, instructor-coded. Peloton's voice is "the instructor at the front of the class" — second-person commands ("Push it", "You got this", "Three, two, one — let's ride"), plus broadcast-grade urgency around live moments. The brand consistently names the outcome rather than the feature: "Bring the studio home" rather than "Buy a stationary bike".

### Microcopy Patterns

- **Button verbs**: "BUY NOW", "TAKE A CLASS", "RESERVE", "SIGN UP", "JOIN LIVE" — uppercase, outcome-named
- **Error message recipe**: instructor-tone — "Looks like that didn't work. Let's try again."
- **Success confirmations**: celebratory — "You crushed it. Personal record set."
- **Live urgency**: "5 spots left for 9 AM Cycling with Robin"
- **Stock urgency**: "Only 12 bikes left at this price"

### Empty States

Empty Stack: "Your Stack is empty. Heart any class to add it here for later."

Empty leaderboard: "Be the first to ride this class."

Empty schedule: "No live classes in your timezone right now. Browse on-demand →"

### CTA Verb Conventions

- Primary: **BUY NOW**, **SIGN UP**, **TAKE A CLASS**, **JOIN LIVE**, **RESERVE**
- Secondary: **LEARN MORE**, **WATCH TRAILER**, **VIEW SCHEDULE**
- Tertiary: "View all classes →", "See instructor bio →"
- Avoided: "Submit", "Click here", "Buy Bike" (Peloton prefers the outcome-named "Bring the studio home")

## 12. Dark Mode & Theming

**Dark-native.** Peloton's storefront is dark-first across the entire experience. The base canvas is `#0d0d0d` near-black, every text element is white, every CTA is brand red. There is no "light mode toggle" on the marketing site — the dark ground is the brand.

**Light-mode bands appear only in the apparel shop** — the Peloton Apparel storefront shifts to a pure-white (`#ffffff`) canvas with ink (`#0d0d0d`) text and the same brand-red CTA. This single-band light-mode is reserved for product photography that needs neutral backgrounds (white-seamless apparel shots).

The Peloton iOS / Android app has full light-mode support that mirrors the storefront — the inversion swaps `#0d0d0d` → `#ffffff` and `#ffffff` → `#0d0d0d` while the brand red stays unchanged.

## 13. Lineage & Influences

Peloton's visual lineage runs through three traditions: **broadcast-television sport graphics** (ESPN, NFL primetime — uppercase typography, tabular numerals, live-indicator pulses, ranked leaderboards), **studio-cycling and SoulCycle aesthetic** (the dimmed-studio energy, the spotlit instructor as central character, the call-and-response choreography between instructor and class), and **luxury fitness equipment industrial design** (Technogym, Pelotonia hardware — black anodized aluminium, machined geometry, no rounded-pill consumer-app aesthetic).

The 2014 founding aesthetic borrowed from Apple — minimalist hardware shots, generous breath, premium product photography. The 2018 onwards live-class platform borrowed from broadcast TV — leaderboard typography, live-class indicators, real-time output watts. The 2020 home-fitness boom solidified the dark-canvas-with-red-voltage as Peloton's signature, distinguishable at any thumbnail size.

What Peloton rejects: pill CTAs (utility-grade rectangles only), light-mode marketing (the dark canvas is the brand), rounded-pill consumer-app aesthetic, multi-colour brand systems, expressive display typefaces, soft-focus lifestyle photography (every instructor shot is hard-rim-lit studio).

**Influences:**
- ESPN / NFL primetime broadcast graphics — uppercase typography, tabular numerals, leaderboard layout, [espn.com](https://www.espn.com)
- SoulCycle / studio-cycling — spotlit instructor aesthetic, [soul-cycle.com](https://www.soul-cycle.com)
- Apple — premium hardware photography lineage, [apple.com](https://www.apple.com)
- Technogym — luxury fitness equipment industrial design, [technogym.com](https://www.technogym.com)
- Nike — single-brand-voltage discipline, instructor-as-hero, [nike.com](https://www.nike.com)
- Inter typeface (Rasmus Andersson) — open-source workhorse, [rsms.me/inter](https://rsms.me/inter)

## 14. Do's and Don'ts

**Do**
- Anchor on the near-black canvas (`#0d0d0d`) — Peloton's dark ground is the brand
- Use the single brand red (`#cb1e4e`) for the wordmark, every primary CTA, the live indicator, the focus ring, brand-glow
- Run Inter at 700–900 weights with negative tracking on display — hero 72/800/-2px, metric 56/900/tnum
- Keep CTAs at 8px radius (rectangular) — utility-grade hardware geometry, not pill
- Render every metric, leaderboard rank, and schedule time with `tnum` tabular numerals
- Use uppercase 14/600 for nav links, 16/700 for CTAs, 12/700 for metric labels — broadcast-graphic discipline
- Add the brand-glow halo (`0 0 24px rgba(203,30,78,0.3)`) on live-class tiles and featured-class hover
- Pulse the live-indicator dot at 1200ms infinite opacity loop
- Lean into 96–160px vertical hero padding — the breath sets up the instructor video
- Use full-bleed instructor portraits with hard rim-light — the hero is always a person

**Don't**
- Don't use pill CTAs — Peloton consciously rejects pill geometry to signal utility-grade hardware
- Don't introduce a second brand colour — burnt-red is the only true brand fill
- Don't use pure black (`#000000`) for canvas — `#0d0d0d` is the studio-dim warmth
- Don't run Inter below 600 weight for headlines — weight is conviction
- Don't skip uppercase on nav, CTAs, or metric labels — the broadcast-graphic discipline ties Peloton to ESPN-grade chrome
- Don't use yellow or gold for live-indicator — brand red `#cb1e4e` always
- Don't soften the CTA radius beyond 8px — even 12px reads too consumer
- Don't add atmospheric multi-layer shadows — Peloton stays single-layer with selective brand-glow
- Don't use lifestyle soft-focus photography — every instructor shot is hard-rim-lit studio
- Don't say "Submit" or "Click here" — every CTA names the outcome ("BUY NOW", "JOIN LIVE")

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #0d0d0d
Card Surface:  #1a1a1a
White:         #ffffff
Peloton Red:   #cb1e4e
Brand Hover:   #a51840
Brand Active:  #841234
Muted:         #b3b3b3
Soft:          #8a8a8a
Border:        #333333
Border Strong: #4d4d4d
Live Red:      #cb1e4e
Gold Top-1:    #ffc300
Brand Glow:    rgba(203,30,78,0.3)
```

### Example Component Prompts

- "Create a Peloton-style hero CTA: 56px-tall rectangular button (8px radius — NOT pill) with brand-red `#cb1e4e` fill, white text in Inter 16/700 uppercase with `+0.02em` tracking, 16×32px padding. Hover deepens to `#a51840` and scales 1.0 → 1.02. Active to `#841234` with press scale 1.0 → 0.97."
- "Build a Peloton class card on dark canvas: dark-card surface (`#1a1a1a`), 12px radius, 16:9 thumbnail flush to top corners, internal 16px metadata padding. Stack: 16:9 video still with optional pulsing red live-indicator dot top-right (`#cb1e4e`, pulses opacity 1.0 → 0.5 → 1.0 over 1200ms infinite), instructor avatar (32px pill) bottom-left of thumbnail, class title in Inter 20/700 white, instructor name + duration + difficulty in 14/400 muted (`#b3b3b3`), brand-glow halo `0 0 24px rgba(203,30,78,0.3)` on hover for live tiles."
- "Design a Peloton instructor portrait card: full-bleed photo with hard rim-light, 12px radius, 4:5 portrait crop with `object-fit: cover`, instructor name in Inter 28/800 uppercase white overlay bottom-left over a black gradient mask, discipline tags ('Cycling • Strength') in 13/500 muted (`#b3b3b3`) beneath. Hover scales the photo 1.0 → 1.04 inside the rounded clip over 240ms."
- "Build a Peloton live leaderboard row: transparent surface, 12×16px padding, brand-soft (`#1f0a10`) red-tinted background ONLY on the user's own row. Rank cell in Inter 18/800 tabular flush left, avatar (32px pill), username in 14/600 white, output watts in 14/700 tabular flush right. On rank-improve, the row's rank cell translateY(+8 → 0) + opacity (0 → 1) over 240ms emphasized."
- "Create a Peloton metric tile: dark surface (`#1a1a1a`), 12px radius, 24px padding. Large value in Inter 56/900 tabular ('248'), label beneath in Inter 12/700 uppercase white with `+0.08em` tracking ('OUTPUT'), optional 24px sparkline showing trend. PR badge top-right: gold (`#ffc300`) star + 'PR' in 11/700 uppercase."
- "Design a Peloton hero video band: full-bleed 16:9 autoplay class video (instructor cycling in studio with red rim-light), 60% black gradient overlay bottom-up. Headline in Inter 72/800 white with `-2px` tracking — 'Bring the studio home'. Body copy 18/400 muted (`#b3b3b3`). Primary brand-red rectangular CTA 'TAKE A CLASS' (8px radius, Inter 16/700 uppercase) + secondary 2px white outline rectangular CTA 'WATCH TRAILER'."

### Iteration Guide

1. **Start with the dark canvas.** If your page background is white or pure black, it isn't Peloton. `#0d0d0d` near-black is the studio-dim ground.
2. **One brand colour: red.** `#cb1e4e` for everything brand. No secondary. The discipline is the brand.
3. **Inter at 700–900 with tight negative tracking.** Hero 72/800/-2px. Metric 56/900/tnum/-1.5px. Weight is conviction.
4. **CTAs are 8px rectangles, not pills.** This is the most signature Peloton shape decision — utility-grade hardware geometry.
5. **`tnum` on every metric.** Output watts, leaderboard rank, schedule time, timer. Tabular numerals make broadcast-graphic data feel mechanically precise.
6. **Uppercase chrome.** Nav links, CTAs, metric labels — all uppercase with positive tracking. ESPN-grade discipline.
7. **Brand-glow only on live and featured.** The red halo (`0 0 24px rgba(203,30,78,0.3)`) appears scarcely — never on every card.
8. **Instructor portraits with hard rim-light.** Soft-focus lifestyle photography breaks the studio aesthetic. Hard rim-light only.
