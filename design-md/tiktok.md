---
name: TikTok
tagline: Electric cyan-magenta on pure black — vertical-video voltage with custom Proxima Nova display and a bold neon brand grammar.
updated_at: 2026-05-03T21:06:23+12:00
published_at: 2026-05-03T21:06:23+12:00
author: webdesignhot
source_url: https://www.tiktok.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [social, media]
tags: [dark, neon, sans, playful, bright, dense]
preview_swatch: ['#000000', '#fe2c55', '#25f4ee']
related: [discord, meta, character-ai]
description: 'TikTok''s visual identity is the most aggressive neon-on-black system in mainstream social — pure `#000000` canvas paired with two electric voltages (`#25f4ee` cyan and `#fe2c55` rose-magenta) that the wordmark layers as RGB-drift offsets. The platform uses Proxima Nova as the system display, runs vertical video as the layout primitive, and stacks UI chrome (heart, comment, share icons) on the right rail of every video so the content owns 100% of horizontal real estate. The brand grammar is borrowed from VHS chromatic aberration and 90s rave flyers — analog-glitch energy translated into the cleanest possible UI shell.'

colors:
  bg: '#000000'                  # absolute black canvas — vertical-video ground
  bg-soft: '#121212'             # secondary background (rare)
  bg-deep: '#000000'              # same as bg — TikTok stays absolute
  surface: '#161823'              # very-dark navy card surface
  surface-hover: '#1f2030'        # hover lift
  surface-elevated: '#252734'     # nested cards
  surface-light: '#ffffff'        # light-mode flip (web only)
  text: '#ffffff'                 # primary text on black
  text-strong: '#ffffff'          # headings — pure white
  text-body: '#e6e6e6'            # body running-text
  text-muted: 'rgba(255,255,255,0.75)' # metadata, captions
  text-soft: 'rgba(255,255,255,0.5)'   # secondary captions, view counts
  text-faint: 'rgba(255,255,255,0.3)'  # tertiary fine-print
  text-on-brand: '#ffffff'        # text on magenta CTA
  brand-rose: '#fe2c55'           # primary brand voltage — rose-magenta
  brand-cyan: '#25f4ee'           # secondary brand voltage — electric cyan
  brand-rose-hover: '#e8254b'     # press / hover-darker on rose
  brand-cyan-hover: '#1cd9d3'     # press / hover-darker on cyan
  brand-rose-deep: '#b71c3a'      # pressed state on rose
  brand-cyan-deep: '#0fb8b3'      # pressed state on cyan
  brand-rose-soft: 'rgba(254,44,85,0.12)' # tinted soft surface
  brand-cyan-soft: 'rgba(37,244,238,0.12)' # tinted soft surface
  link: '#25f4ee'                 # link-cyan on dark
  link-hover: '#1cd9d3'           # link hover
  border: 'rgba(255,255,255,0.12)' # 1px translucent hairline on cards
  border-strong: 'rgba(255,255,255,0.24)' # heavier divider
  border-subtle: 'rgba(255,255,255,0.06)' # near-invisible separator
  on-brand: '#ffffff'             # white text on rose CTA
  on-cyan: '#000000'              # black text on cyan CTA
  on-bg: '#ffffff'
  shadow-color: 'rgba(0,0,0,0.4)'
  shadow-glow-cyan: 'rgba(37,244,238,0.3)'  # rare cyan glow
  shadow-glow-rose: 'rgba(254,44,85,0.3)'   # rare rose glow
  heart-active: '#fe2c55'         # liked-heart fill — same as brand-rose
  comment-active: '#ffffff'       # comment icon
  share-active: '#ffffff'         # share icon
  bookmark-active: '#fac802'      # gold bookmark when saved
  duet-violet: '#7d4fff'          # duet/stitch indicator violet
  for-you-tab: '#ffffff'          # active tab indicator
  following-tab: 'rgba(255,255,255,0.5)' # inactive tab
  success: '#25f4ee'              # success — reuses cyan
  warning: '#fac802'              # caution — gold
  danger: '#fe2c55'               # error — reuses rose
  info: '#25f4ee'                 # info — reuses cyan

typography:
  display:
    family: '"Proxima Nova", "TikTok Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 600, 700, 800, 900]
    opentype-features: "'ss01', 'kern'"
  body:
    family: '"Proxima Nova", "TikTok Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: 'ui-monospace, "SF Mono", Menlo, Monaco, "Courier New", monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 800, lineHeight: 1.0,  tracking: '-2px',   family: display, notes: 'marketing landing h1, often with cyan/rose split' }
    display-lg:      { size: 56, weight: 800, lineHeight: 1.05, tracking: '-1.5px', family: display }
    display-md:      { size: 40, weight: 700, lineHeight: 1.10, tracking: '-1px',   family: display }
    display-sm:      { size: 32, weight: 700, lineHeight: 1.15, tracking: '-0.5px', family: display }
    title-lg:        { size: 24, weight: 700, lineHeight: 1.25, tracking: 0,        family: display, notes: 'video title, modal heads' }
    title-md:        { size: 20, weight: 600, lineHeight: 1.30, tracking: 0,        family: display }
    title-sm:        { size: 18, weight: 600, lineHeight: 1.35, tracking: 0,        family: body }
    username:        { size: 16, weight: 700, lineHeight: 1.30, tracking: 0,        family: body, notes: '@username on video' }
    body-md:         { size: 14, weight: 400, lineHeight: 1.45, tracking: 0,        family: body, notes: 'caption, comment body' }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.40, tracking: 0,        family: body }
    metadata:        { size: 12, weight: 500, lineHeight: 1.30, tracking: 0,        family: body, notes: 'view counts, timestamps' }
    label:           { size: 12, weight: 700, lineHeight: 1.30, tracking: '0.5px',  family: body, transform: uppercase }
    caption:         { size: 11, weight: 500, lineHeight: 1.30, tracking: 0,        family: body }
    code-md:         { size: 13, weight: 400, lineHeight: 1.55, tracking: 0,        family: mono }
    button:          { size: 16, weight: 700, lineHeight: 1.0,  tracking: 0,        family: body }
    nav-link:        { size: 14, weight: 600, lineHeight: 1.4,  tracking: 0,        family: body }
    counter:         { size: 12, weight: 700, lineHeight: 1.0,  tracking: 0,        family: body, notes: 'engagement counters under right-rail icons' }
    hashtag:         { size: 14, weight: 600, lineHeight: 1.3,  tracking: 0,        family: body, notes: '#fyp #foryou — bold' }

radius:
  micro: 2
  xs: 4
  sm: 6
  md: 8
  lg: 12
  xl: 16
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

layout:
  page-width: 1280
  video-aspect: '9:16'
  feed-width: 480
  sidebar-width: 240
  header-height: 60

components:
  button-primary:
    backgroundColor: brand-rose
    textColor: on-brand
    rounded: xs
    padding: '12px 24px'
    height: 44
    fontWeight: 700
    use: 'Sign Up, Follow, Get App — rose-magenta primary'
  button-secondary:
    backgroundColor: transparent
    textColor: text
    border: '1px solid border-strong'
    rounded: xs
    padding: '12px 24px'
    height: 44
    use: 'secondary action — outlined'
  button-cyan:
    backgroundColor: brand-cyan
    textColor: on-cyan
    rounded: xs
    padding: '12px 24px'
    height: 44
    use: 'cyan accent CTA — used sparingly for "Try it" / contrasting actions'
  button-ghost:
    backgroundColor: transparent
    textColor: text
    rounded: xs
    padding: '8px 16px'
    use: 'tertiary action, "Cancel"'
  button-icon-circular:
    backgroundColor: surface
    textColor: text
    rounded: pill
    size: 48
    use: 'right-rail engagement icon (heart, comment, share, bookmark)'
  card-video:
    backgroundColor: bg-deep
    aspectRatio: '9:16'
    rounded: lg
    use: 'vertical video container — the platform primitive'
  card-feature:
    backgroundColor: surface
    textColor: text
    rounded: lg
    padding: 24
    use: 'marketing feature card on dark canvas'
  card-comment:
    backgroundColor: transparent
    textColor: text
    use: 'comment row in side panel — no card chrome'
  card-creator:
    backgroundColor: surface
    rounded: lg
    padding: 16
    use: 'creator profile mini-card'
  badge-pill:
    backgroundColor: surface
    textColor: text
    rounded: pill
    padding: '4px 12px'
  badge-rose:
    backgroundColor: brand-rose
    textColor: on-brand
    rounded: pill
    padding: '4px 12px'
    use: 'LIVE indicator, NEW badge'
  badge-cyan:
    backgroundColor: brand-cyan
    textColor: on-cyan
    rounded: pill
    padding: '4px 12px'
    use: 'verified-creator badge'
  badge-live:
    backgroundColor: brand-rose
    textColor: on-brand
    rounded: xs
    padding: '2px 8px'
    use: 'LIVE now indicator with pulsing dot'
  text-input:
    backgroundColor: surface
    textColor: text
    border: '1px solid border'
    rounded: xs
    padding: '12px 16px'
    height: 48
  search-bar:
    backgroundColor: surface
    textColor: text
    border: 'none'
    rounded: pill
    padding: '10px 20px'
    use: 'top search bar — pill, dark surface'
  top-nav:
    backgroundColor: bg
    textColor: text
    height: 60
  right-rail:
    backgroundColor: transparent
    width: 80
    use: 'engagement icons stacked vertically (heart, comment, share, save, music disc)'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.34, 1.56, 0.64, 1)'  # spring-bounce
  duration-fast: 100
  duration-standard: 200
  duration-slow: 350
  reduced-motion: 'respects prefers-reduced-motion: reduce — heart-burst animation skipped, autoplay paused, transitions to opacity-only'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1024
  wide: 1280

shadows:
  ambient: 'rgba(0,0,0,0.2) 0 2px 8px'
  standard: 'rgba(0,0,0,0.3) 0 4px 16px'
  elevated: 'rgba(0,0,0,0.4) 0 12px 32px'
  deep: 'rgba(0,0,0,0.5) 0 24px 48px'
  ring: '0 0 0 2px #25f4ee'
  glow-rose: '0 0 24px rgba(254,44,85,0.4)'
  glow-cyan: '0 0 24px rgba(37,244,238,0.4)'

accessibility:
  contrast-text-on-bg: 21.0              # AAA — pure white on pure black
  contrast-text-on-brand: 4.7            # AA at body sizes — white on #fe2c55
  contrast-text-on-cyan: 12.6            # AAA — black on #25f4ee
  contrast-muted-on-bg: 12.6             # AAA — 75% white on black
  focus-ring: '2px solid #25f4ee with 2px offset'
  reduced-motion-honored: true

dark-mode: 'native — TikTok ships dark-first; web has optional light mode'
---

## 1. Visual Theme & Atmosphere

TikTok's visual system is the most aggressive neon-on-black brand in mainstream social. The canvas is pure `#000000` — not a softened near-black, not a warm-grey, but the absolute black of a powered-on OLED screen with the pixels off. Vertical video sits on this canvas as a 9:16 frame, content extending edge-to-edge, the chrome (heart, comment, share, bookmark icons) stacked vertically along the right margin in a column 80px wide. The arrangement is brutally efficient: video owns 100% of horizontal real estate; chrome is unobtrusive; nothing competes with the content.

The defining gesture is the chromatic-aberration wordmark — TikTok's logo renders as a stack of three musical-note glyphs offset in cyan (`#25f4ee`), white, and rose-magenta (`#fe2c55`), the same RGB-drift effect that VHS tape produced when a tracking head misaligned. Translated into UI, this becomes the brand's two voltages: rose for primary action ("Sign Up", "Follow"), cyan for accent and link, both crackling against the absolute black ground. Where Instagram pulls a soft sunset gradient, TikTok shoves you into a 1990s rave flyer.

The color story is two confident neon hues plus a full neutral scale of translucent whites — text muted at `rgba(255,255,255,0.75)`, soft at `rgba(255,255,255,0.5)`, faint at `rgba(255,255,255,0.3)`. Everything is alpha-on-black rather than pure-grey, which keeps the page feeling like a continuous video signal rather than a stack of UI panels. The right-rail engagement icons are circular `#161823` very-dark-navy buttons with white icons that fill `#fe2c55` rose-magenta when the heart is tapped — a single moment of brand voltage every time a user expresses approval.

Type voice runs Proxima Nova (and the in-house TikTok Sans on newer surfaces) at weights 700–900 for display, with `-1` to `-2px` tracking. The display sizing is aggressive: marketing hero at 80px / 800 / -2px tracking, often split across two lines with one line in white and one in rose or cyan. Body type sits at 14px / 400 / 1.45 line-height, deliberately compressed so captions and comments read fast. There's no serif anywhere — TikTok is post-print, post-editorial.

The page rhythm is the For You Page itself: one vertical video at a time, full-screen, swipe-up to advance. There is no editorial flow, no section padding, no "above the fold" — every video IS the fold. Marketing pages translate this primitive into stacked vertical-video showcases interspersed with full-bleed dark feature bands and bursts of the cyan/rose duotone treatment that has become the brand's Spotify-Wrapped-style signature.

**Key Characteristics:**
- Absolute pure black canvas (`#000000`) — never softened, never warmed.
- Two brand voltages: rose-magenta `#fe2c55` (primary) + electric cyan `#25f4ee` (accent).
- Chromatic-aberration wordmark — cyan/white/rose RGB-drift carries into the brand's split-color headlines.
- Vertical 9:16 video aspect as the layout primitive on every product surface.
- Right-rail engagement icons (heart, comment, share, bookmark, music-disc) — circular buttons stacked vertically.
- Proxima Nova at 700–900 weight with `-1` to `-2px` tracking on display sizes.
- Translucent-white text scale (`rgba(255,255,255,0.75/0.5/0.3)`) instead of pure greys — preserves the OLED-on continuity.
- Heart-burst animation: 1.0 → 1.4 → 1.0 scale with rose-magenta fill on tap.
- LIVE pill in `#fe2c55` rose with a pulsing white dot — the most chromatically-loud element on any feed.
- Dark-first with optional light-mode flip on the marketing/web surface only.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#000000`): Absolute pure black. The OLED-on canvas. Every video sits on this ground.
- **Text** (`#ffffff`): Pure white for primary text. The maximum-contrast pairing.
- **Brand Rose** (`#fe2c55`): Rose-magenta primary voltage — used on every Sign Up CTA, every Follow button, every heart-active fill.
- **Brand Cyan** (`#25f4ee`): Electric cyan secondary voltage — accent action, link color, focus ring.

### Brand & Dark
- **Brand Rose** (`#fe2c55`): The primary brand voltage. Used on the rose layer of the chromatic-aberration wordmark.
- **Brand Cyan** (`#25f4ee`): The cyan layer of the wordmark; secondary brand voltage.
- **Brand Rose Hover** (`#e8254b`): Press / hover-darker on rose.
- **Brand Cyan Hover** (`#1cd9d3`): Press / hover-darker on cyan.
- **Brand Rose Deep** (`#b71c3a`): Pressed state — rare.
- **Brand Cyan Deep** (`#0fb8b3`): Pressed state — rare.
- **Brand Rose Soft** (`rgba(254,44,85,0.12)`): Tinted soft variant — used on notification dots and mention highlights.
- **Brand Cyan Soft** (`rgba(37,244,238,0.12)`): Tinted soft variant — used on selected text background.

### Accent
- **Bookmark Active** (`#fac802`): Gold — when a user saves a video. The third color in the system, used scarcely.
- **Duet Violet** (`#7d4fff`): Duet / stitch indicator. Marks remix relationships between videos.
- **Verified Cyan** (`#25f4ee`): Verified-creator badge tint — same as brand-cyan.

### Interactive
- **Link** (`#25f4ee`): Inline body links default to electric cyan on dark.
- **Link Hover** (`#1cd9d3`): Hover-darker cyan.
- **Selected** (`rgba(37,244,238,0.2)`): Selected text background — soft cyan tint.
- **Focus Ring** (`#25f4ee`): 2px solid cyan ring on every focusable element. Cyan, not rose, because focus indicators must contrast with the most common nearby color (rose CTA buttons).

### Neutral Scale
- **Text Strong** (`#ffffff`): Headlines, primary type.
- **Text** (`#ffffff`): Default text on dark.
- **Text Body** (`#e6e6e6`): Body running-text — subtle softness from pure white.
- **Text Muted** (`rgba(255,255,255,0.75)`): Metadata, captions, view counts.
- **Text Soft** (`rgba(255,255,255,0.5)`): Secondary captions, "5 days ago" timestamps.
- **Text Faint** (`rgba(255,255,255,0.3)`): Tertiary fine-print, disabled text.

### Surface & Borders
- **Surface** (`#161823`): Very-dark navy card surface — the only "elevated" tone.
- **Surface Hover** (`#1f2030`): Hover lift on cards.
- **Surface Elevated** (`#252734`): Nested cards inside surface.
- **Border** (`rgba(255,255,255,0.12)`): 1px translucent hairline.
- **Border Strong** (`rgba(255,255,255,0.24)`): Heavier divider on focused inputs.
- **Border Subtle** (`rgba(255,255,255,0.06)`): Near-invisible separator inside dense lists.

### Shadow Colors
- **Shadow Standard** (`rgba(0,0,0,0.3)`): Default card shadow on dark — subtle but present.
- **Shadow Elevated** (`rgba(0,0,0,0.4)`): Modal and dialog shadow.
- **Shadow Glow Rose** (`rgba(254,44,85,0.3)`): Rare ambient glow on rose CTAs in hero placement.
- **Shadow Glow Cyan** (`rgba(37,244,238,0.3)`): Rare ambient glow on cyan accents.

### Semantic
- **Success** (`#25f4ee`): Same hue as brand-cyan — confirmation toasts.
- **Warning** (`#fac802`): Gold — caution states, slow connection indicators.
- **Danger** (`#fe2c55`): Same hue as brand-rose — error toasts, destructive actions.
- **Info** (`#25f4ee`): Same as brand-cyan — informational notices.

## 3. Typography Rules

### Font Family
- **Primary**: `"Proxima Nova", "TikTok Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. Proxima Nova carries the bulk of the marketing surface; TikTok Sans (proprietary) appears on newer in-product surfaces.
- **Mono**: `ui-monospace, "SF Mono", Menlo, "Courier New", monospace`. TikTok rarely surfaces code; mono is a fallback for technical references.
- **OpenType features**: `'ss01'` for the alternative single-storey 'a' on display sizes; standard `'kern'` for letterspacing precision.
- **No serif**: TikTok's voice is post-print — there is no editorial register to support a serif. Display always sans, body always sans.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Proxima Nova | 80 | 800 | 1.00 | -2px | ss01 | Marketing landing h1 — often split cyan / rose lines |
| display-lg | Proxima Nova | 56 | 800 | 1.05 | -1.5px | — | Section heads on marketing |
| display-md | Proxima Nova | 40 | 700 | 1.10 | -1px | — | Sub-section heads, modal heads |
| display-sm | Proxima Nova | 32 | 700 | 1.15 | -0.5px | — | Card titles, drawer heads |
| title-lg | Proxima Nova | 24 | 700 | 1.25 | 0 | — | Video title on focused video |
| title-md | Proxima Nova | 20 | 600 | 1.30 | 0 | — | Side-panel section heads |
| title-sm | Proxima Nova | 18 | 600 | 1.35 | 0 | — | Small section heads, list labels |
| username | Proxima Nova | 16 | 700 | 1.30 | 0 | — | @username — always bold |
| body-md | Proxima Nova | 14 | 400 | 1.45 | 0 | — | Caption body, comment body |
| body-sm | Proxima Nova | 13 | 400 | 1.40 | 0 | — | Secondary text, side-panel body |
| metadata | Proxima Nova | 12 | 500 | 1.30 | 0 | — | View counts (e.g., "1.2M views"), timestamps |
| label | Proxima Nova | 12 | 700 | 1.30 | 0.5px | — | Uppercase labels, "FOR YOU", "FOLLOWING" |
| caption | Proxima Nova | 11 | 500 | 1.30 | 0 | — | Tooltip text, ultra-fine annotations |
| code-md | ui-monospace | 13 | 400 | 1.55 | 0 | — | Inline code references |
| button | Proxima Nova | 16 | 700 | 1.0 | 0 | — | Primary CTA — bold |
| nav-link | Proxima Nova | 14 | 600 | 1.4 | 0 | — | Top-nav menu items |
| counter | Proxima Nova | 12 | 700 | 1.0 | 0 | — | Right-rail engagement counter (under heart icon) |
| hashtag | Proxima Nova | 14 | 600 | 1.3 | 0 | — | #fyp, #foryou — always bold |

### Principles
- **Display weight goes to 800–900.** Heavier than most platforms. The brand voice is loud and confident; the type weight reflects that.
- **Negative tracking is essential at display sizes.** Without `-1` to `-2px` tracking, Proxima Nova at 800 reads too wide and corporate.
- **Body sits at 14/400/1.45.** Compressed enough to read fast on a vertical-video sidebar.
- **Username always bold.** The @username on every video is 16px / 700 — bold-by-default reflects that creators are the platform's primary nouns.
- **Hashtags always 600.** Bold-but-not-bolder than usernames preserves hierarchy.
- **Uppercase labels at 0.5px tracking.** "FOR YOU" / "FOLLOWING" tabs use uppercase + tracking for the section-label register.
- **No serif, no italic-as-emphasis.** Emphasis is carried by weight (400 → 700) or color (white → cyan).

## 4. Component Stylings

### Buttons (5 variants)

**`button-primary`** — The rose-magenta CTA. Background `#fe2c55`, text `#ffffff`, Proxima Nova 16px / 700, padding 12px × 24px, height 44px, radius 4px. Used on Sign Up, Follow, Get App, every primary marketing CTA. Hover darkens to `#e8254b` over 100ms.

**`button-cyan`** — Electric cyan CTA. Background `#25f4ee`, text `#000000` (black on cyan for AAA contrast), same shape and padding. Used sparingly for "Try it now" / contrasting actions where a single rose CTA is already on the band.

**`button-secondary`** — Outlined ghost. Background transparent, text `#ffffff`, 1px `rgba(255,255,255,0.24)` border, same shape and padding. Used as the secondary action paired with a rose primary CTA.

**`button-ghost`** — Tertiary text-only. Transparent background, text `#ffffff`, no border, padding 8px × 16px. Used for "Cancel", inline link CTAs.

**`button-icon-circular`** — Right-rail engagement icon. Circular `#161823` 48 × 48px button, white icon centered. Active state fills the icon with brand color (heart turns rose, bookmark turns gold). Hover scales 1.0 → 1.05 over 100ms.

### Cards

**`card-video`** — The platform primitive. Black background, 9:16 aspect ratio container, 12px radius (lg), full-bleed video content. The right-rail icon stack overlays the card at z-index above content. Username + caption overlay the bottom-left.

**`card-feature`** — Marketing feature card. Background `#161823` surface, text `#ffffff`, 12px radius, 24px padding. Used on landing pages for product/feature descriptions.

**`card-creator`** — Creator profile mini-card. Background `#161823`, 12px radius, 16px padding. Header: 64px circular avatar + @username + Follow rose CTA. Body: bio + follower count.

**`card-comment`** — Comment row in side panel. No background, no border. Avatar + username + comment body in a horizontal row. Reply chevron at end.

**`card-music`** — Music attribution card on every video's bottom-left. Spinning vinyl disc icon (32px) + scrolling music title. Tap opens the sound page with all videos using that track.

### Badges & Pills

**`badge-rose`** — Rose pill for "NEW", LIVE, brand-emphasis labels. Background `#fe2c55`, text `#ffffff`, 12px / 700 / 0.5px tracking, pill, padding 4px × 12px.

**`badge-cyan`** — Cyan pill for verified-creator / featured. Background `#25f4ee`, text `#000000`, 12px / 700, pill, padding 4px × 12px.

**`badge-live`** — LIVE indicator with pulsing white dot. Background `#fe2c55`, text `#ffffff`, 12px / 800, radius 4px, padding 2px × 8px. The dot uses a 1.5s pulse animation (0.5 → 1.0 opacity).

**`badge-pill`** — Small dark pill. Background `#161823`, text `#ffffff`, 11px / 500, pill, padding 4px × 12px.

**`badge-verified`** — Verified-creator checkmark in cyan. Cyan-filled circle (12px) with white checkmark, inline next to @username.

### Inputs / Forms

**`text-input`** — Standard input on dark. Background `#161823`, text `#ffffff`, 1px `rgba(255,255,255,0.12)` border, 4px radius, 12px × 16px padding, height 48px. Placeholder `rgba(255,255,255,0.5)`.

**`text-input-focused`** — Border thickens to 2px solid `#25f4ee`. Focus ring `0 0 0 2px rgba(37,244,238,0.2)`.

**`search-bar`** — Top-bar search. Background `#161823`, no border, pill-shaped (radius 9999), 10px × 20px padding. Search icon left.

**`textarea-comment`** — Comment composer. Same as `text-input` but multi-line. Submit rose pill anchored bottom-right.

### Navigation

**`top-nav`** — Black header pinned to top, 60px tall, background `#000000`, no border (flush with canvas). TikTok wordmark left (with cyan/rose chromatic-aberration), search bar centered, right-cluster: Upload icon, Inbox icon, Profile avatar.

**`for-you-tabs`** — Horizontal pill tabs at top of feed: "FOR YOU" / "FOLLOWING" / "EXPLORE". Active: white text + 2px white underline. Inactive: `rgba(255,255,255,0.5)` text, no underline. 14px / 700 / 0.5px tracking, uppercase.

**`right-rail`** — Vertical engagement icon stack on right of every video. 80px wide column with icons: avatar + Follow + Heart + Comment + Share + Bookmark + Music-disc. Each icon is `card-icon-circular` with a counter below.

**`bottom-nav-mobile`** — Mobile bottom nav, 5 icons: Home / Discover / + (Upload) / Inbox / Profile. The center "+" icon is rose-magenta, scaled larger than its siblings.

### Decorative

**`heart-burst`** — Heart icon animation on tap. White heart fills `#fe2c55` rose, scales 1.0 → 1.4 → 1.0 over 240ms with spring-bounce ease, with a faint rose particle burst (5–8 particles fading out over 360ms).

**`vinyl-disc`** — Spinning music attribution icon at bottom-left of every video. 32px disc with album art, rotates 360° per 4 seconds. Pauses if user scrolls away.

**`pulsing-dot`** — White dot inside LIVE badge, pulses 0.5 → 1.0 opacity over 1.5s with standard ease. Marks active livestreams.

**`profile-ring`** — Around live-streaming creator avatars. 2px rose-magenta gradient ring with rotating animation (8s loop). Inactive creators show no ring.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96`. The system runs slightly tighter than typical web brands — TikTok's mobile-first DNA prioritizes screen efficiency. Section padding (between hero and product showcase) at 64–96px on marketing pages; card internal padding stays at 16–24px.

### Grid & Container
Max content width is 1280px on marketing pages. The product feed is fundamentally **single-column vertical video** — 480px max-width on web (taller than wide), or full-width on mobile. Marketing pages use a 12-column grid; feature card grids run 3-up at desktop, 2-up at tablet, 1-up at mobile. The right-rail engagement icon column is fixed at 80px wide regardless of viewport.

### Whitespace Philosophy
TikTok minimizes whitespace inside the video frame — the goal is content saturation. Marketing pages have more breathing room (64–96px section padding, 24px card padding) but still feel denser than typical SaaS marketing. The brand's whitespace philosophy is **content-first, chrome-second**.

### Section Cadence
Marketing pages alternate between full-bleed dark feature bands and vertical-video showcase bands. Every page closes with a rose-magenta CTA band ("Get TikTok") that mirrors the chromatic-aberration wordmark — three offset glyph layers in cyan / white / rose.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 2px | Inline tag chips, syntax-highlight backgrounds |
| XS | xs | 4px | Buttons (default), text inputs, LIVE badge — TikTok's signature small radius |
| Standard | sm | 6px | Mobile small inputs |
| Comfortable | md | 8px | Tooltip cards |
| Large | lg | 12px | Video cards, feature cards, modal cards |
| Featured | xl | 16px | Floating panels, drawer shells |
| Pill | pill | 9999px | Badges, search bar, profile avatars, engagement icons |

TikTok's signature radius is **4px on buttons** — sharper than most consumer brands (Instagram, Threads use 8–10px). The 4px radius gives buttons a slightly more "interface" feel rather than "marketing" feel, matching the platform's UI-forward identity.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Body sections, top nav, video canvas |
| 1 — Soft hairline | 1px `rgba(255,255,255,0.12)` border | Cards needing subtle definition |
| 2 — Surface | `#161823` background, no shadow | Feature cards, profile mini-cards, surface inputs |
| 3 — Elevated | `#1f2030` background or `rgba(0,0,0,0.3) 0 4px 16px` shadow | Hover states, dropdowns |
| 4 — Modal | `#252734` background + `rgba(0,0,0,0.4) 0 12px 32px` shadow + backdrop dim | Dialogs, comment drawers |
| 5 — Glow | Rare cyan or rose glow `0 0 24px rgba(brand,0.4)` | Hero CTAs, brand-emphasis moments |

### Shadow Philosophy
TikTok's depth is primarily tonal — `#000000` canvas → `#161823` surface → `#1f2030` elevated → `#252734` deep — with shadows used sparingly to lift modal layers. The optional rose/cyan **glow** treatment appears at most once per marketing page on the hero CTA, where the brand voltage radiates 24px outward at 30% alpha. The glow is the platform's most "magic" effect; using it more than once dilutes it.

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hovers, opens, layout transitions.
- **Emphasized ease (spring-bounce)**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — heart-burst, follow-button confirmation, success animations. The slight overshoot is the brand's playful signature.

### Duration Buckets
- **Fast (100ms)**: Color and opacity shifts on hover, button press feedback.
- **Standard (200ms)**: Card hover lift, dropdown open, video swipe transition.
- **Slow (350ms)**: Modal entrance, video advance animation, like-burst sequence.

### Per-Component Micro-States
- **Button hover**: Rose CTA darkens from `#fe2c55` → `#e8254b` over 100ms; no transform.
- **Button press**: Scale 1.0 → 0.96 → 1.0 over 200ms with spring-bounce.
- **Heart-burst**: White heart fills rose, scales 1.0 → 1.4 → 1.0 over 240ms with spring-bounce, plus 5–8 rose particles fading outward over 360ms. The signature animation.
- **Follow button confirmation**: Rose "Follow" pill fills checkmark and scales 1.0 → 1.05 → 1.0 over 320ms with spring-bounce.
- **Video swipe**: Vertical swipe-up advances to next video with 200ms standard-ease translate. Snap-to-frame at the end.
- **Vinyl-disc rotation**: Continuous 4s loop while video plays; pauses on scroll.
- **Live ring animation**: 8s linear rotation around active livestream avatars.
- **Input focus**: 2px solid cyan ring expands from 0 → 2px over 100ms.

### Page Transitions
TikTok uses standard browser navigation on web. The video feed advances via swipe-up with 200ms translateY animation; videos auto-play on entry, pause on exit. Section-on-scroll reveals on marketing pages are 350ms fade-in-up (16px offset) gated by `IntersectionObserver`.

### Reduced Motion
`prefers-reduced-motion: reduce` honored: heart-burst animation reduced to instant fill (no scale, no particles), vinyl-disc rotation stops, follow-button overshoot reduced to instant state change, video swipe transitions reduced to instant cut. Autoplay is paused — videos render but require explicit play tap.

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#ffffff` on `#000000` = **21.0** — AAA at every size. The maximum-contrast pair.
- **Body on bg**: `#e6e6e6` on `#000000` = **18.5** — AAA.
- **Muted on bg**: `rgba(255,255,255,0.75)` on `#000000` ≈ **15.7** — AAA.
- **On-brand on rose**: `#ffffff` on `#fe2c55` = **4.7** — AA at body sizes; bold-weight CTAs pass large-text AAA.
- **On-cyan on cyan**: `#000000` on `#25f4ee` = **12.6** — AAA. Cyan + black is the strongest contrast in the system.
- **Body on surface**: `#ffffff` on `#161823` = **17.9** — AAA.

### Focus Indicators
Every focusable element shows a 2px solid `#25f4ee` cyan ring with 2px offset from the element. Cyan is chosen over rose for focus because the rose hue conflicts with rose CTA buttons; cyan provides distinct contrast on both rose and dark surfaces.

### ARIA Patterns
- **Video card**: Wrapped in `<article aria-label="Video by @username">`; engagement actions use `<button aria-label="Like">` etc.
- **Heart button**: `aria-pressed="true|false"`, `aria-label="Like" / "Unlike"`. Counter announced via `aria-live="polite"`.
- **For You / Following tabs**: `<nav role="tablist">` with each tab `<button role="tab" aria-selected="true|false">`.
- **Comment drawer**: `role="dialog"` with `aria-labelledby` referencing the title; ESC closes; focus trapped.
- **Live badge**: `role="status"` with `aria-label="Live streaming now"`.
- **Right-rail engagement icons**: Each is a `<button>` with `aria-label` matching the action ("Like", "Comment", "Share", "Bookmark").

### Keyboard Navigation
Tab order follows visual reading order. Skip-link at top jumps to `<main>`. Arrow Up / Arrow Down advances between videos in feed. Space toggles play/pause. L / D shortcuts for like / dislike. Tab traverses right-rail icons in order. Modal traps focus; ESC closes.

### Screen Reader Hints
Engagement counters use semantic labels — `aria-label="1.2 million likes"` rather than the abbreviated "1.2M". Hashtags announce with the # prefix preserved. Music attribution announces "Music: Song Title by Artist" rather than just the spinning disc icon.

### Reduced Motion Handling
Honored via `@media (prefers-reduced-motion: reduce)` — heart-burst skipped (instant fill only), vinyl-disc stops rotating, autoplay paused, video swipe transitions reduced to instant cut. Section-reveal animations on marketing pages reduced to instant fade.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 480px | Single-column video; bottom nav appears; right-rail icons inline at video bottom; top nav reduces to logo only |
| Tablet | 480–768px | Single-column video centered; right-rail visible at side; top nav with search collapsed to icon |
| Desktop | 768–1280px | Single-column video centered with sidebars; right-rail at fixed 80px; full top nav |
| Wide | > 1280px | Same as desktop with more breathing room; max content 1280px |

### Touch Targets
- Right-rail engagement icons: 48 × 48px each — exceeds WCAG 44px minimum.
- Primary CTA: 44 × 44px minimum (12px × 24px padding).
- Bottom-nav icons (mobile): 56 × 56px each, with the center "+" upload icon larger at 64 × 56px.

### Collapsing Strategy
Top-nav search bar collapses to a search icon at < 768px (taps to open full-screen search overlay). Right-rail icon column moves below the video on mobile (horizontal layout). Bottom-nav appears only on mobile; desktop uses left sidebar.

### Image Behavior
Video content always maintains 9:16 aspect ratio; black bars fill any extra space rather than cropping. Profile avatars are circular (radius 9999) at fixed sizes (32 / 48 / 64 / 96px). Album art on music-disc icon is circular and 32px on mobile, 40px on desktop.

## 11. Content & Voice

### Tone
**Bold, direct, slightly internet-native.** TikTok writes as if it's already inside the joke. Marketing copy ("Make Your Day") is short, punchy, present-tense. Product copy uses creator-native vocabulary ("FYP", "duet", "stitch") without explanation — the audience is assumed to be fluent. There's a faint youth-culture confidence; the platform never apologizes for being loud.

### Microcopy Patterns
- **CTA verbs**: "Sign Up", "Follow", "Get TikTok", "Watch Now", "Try it free". Short, action-oriented.
- **For You tab**: Always "For You" — never "Recommended" or "Suggested." The personalization language is friendlier.
- **Empty FYP**: "Pull down to refresh" — instructional, not apologetic.
- **Comment placeholder**: "Add a comment..." — open-ended.
- **Live label**: Always "LIVE" in uppercase rose pill — never "Streaming" or "Live now."
- **Counter formatting**: "1.2M" not "1,200,000" — abbreviated for compactness.

### Empty States
- **Empty FYP**: "Refresh to see something new" with a pull-down arrow icon.
- **Empty inbox**: "No notifications yet. Start exploring to find creators you love."
- **Empty saved videos**: "Tap the bookmark icon to save videos for later."
- **Empty profile (own)**: "Share your first video! Tap the + below to start."

### Error Messages
**Pattern**: A single-line rose alert ("Something went wrong. Try again.") with retry CTA. TikTok avoids over-apologizing — no "Oops!" but also no blame. Network errors offer "Tap to retry." Upload errors preserve the draft.

### Success Confirmations
Single-line toast: "Posted to your profile" or "Video saved." Auto-dismisses after 3s. Like / follow confirmations are silent — the visual feedback (heart burst, follow button state change) is the confirmation.

### CTA Verb Conventions
"Follow" not "Subscribe" / "Like" not "React" / "Comment" not "Reply" / "Share" not "Send" / "Bookmark" not "Save." TikTok's vocabulary is youth-culture-native and consistent across surfaces.

## 12. Dark Mode & Theming

TikTok is **dark-first**. The product surface (mobile + web) ships only dark mode; light mode is offered exclusively on the marketing/web surface as a user preference toggle.

```yaml
colors-light:                     # Marketing/web only
  bg: '#ffffff'                  # white canvas
  bg-soft: '#f5f5f7'             # secondary background
  bg-deep: '#fafafa'             # rare deep light
  surface: '#ffffff'             # cards
  surface-hover: '#f5f5f7'       # hover lift
  surface-elevated: '#ffffff'    # nested
  text: '#161823'                # primary text on light
  text-strong: '#000000'         # heading-grade
  text-body: '#161823'           # body
  text-muted: 'rgba(22,24,35,0.75)' # metadata
  text-soft: 'rgba(22,24,35,0.5)'
  text-faint: 'rgba(22,24,35,0.3)'
  brand-rose: '#fe2c55'          # rose unchanged
  brand-cyan: '#25f4ee'          # cyan unchanged
  brand-rose-hover: '#e8254b'
  brand-cyan-hover: '#1cd9d3'
  link: '#fe2c55'                # link shifts to rose on light (cyan too low contrast on white)
  link-hover: '#e8254b'
  border: 'rgba(22,24,35,0.12)'
  border-strong: 'rgba(22,24,35,0.24)'
  on-brand: '#ffffff'
  on-cyan: '#000000'
```

**Defining decision**: Both rose and cyan brand voltages are unchanged across modes. The link color shifts from cyan (on dark) to rose (on light) because cyan-on-white is too low-contrast for body links. Everything else maps directly.

## 13. Lineage & Influences

TikTok's visual lineage descends from **VHS-era chromatic aberration**, **1990s rave flyers**, and **mobile-first vertical-video standards**. The chromatic-aberration wordmark is a direct quote of the analog video signal where misaligned tape heads produced cyan/red fringing on motion — the brand wears the analog mistake as a feature. The neon rose-and-cyan duotone aesthetic recalls the cyberpunk-club graphic design of the late 90s and early 2000s, before adopting clean Proxima Nova for the modern UI shell.

The vertical 9:16 video primitive is borrowed from Snapchat's pioneering vertical format and amplified — TikTok's For You Page made full-screen vertical the default rather than the exception. The right-rail engagement icon stack borrows from Vine's late-era UI but cleans the geometry. The chromatic-aberration treatment appears on countless brand surfaces (custom emoji, sticker effects, third-party tool branding) and has become so recognizable that copycat platforms (Reels, YouTube Shorts) explicitly avoid the technique.

Where Instagram leans editorial-warm and Snapchat leans youthful-bright, TikTok leans **post-internet club**: dark, neon, fast, content-saturated, mobile-native. The brand rejects the warm-soft aesthetic of legacy social media and embraces an aggressively contemporary visual register.

- **Proxima Nova (Mark Simonson)** — The display workhorse. https://www.marksimonson.com/fonts/view/proxima-nova
- **VHS chromatic aberration** — The wordmark's lineage. (no URL)
- **Snapchat (vertical video)** — The 9:16 primitive that TikTok perfected. https://snapchat.com
- **Designers Republic** — 90s rave / cyberpunk graphic design influence on the duotone aesthetic. https://www.thedesignersrepublic.com
- **Vine** — The right-rail engagement icon stack. (defunct — vine.co)
- **OLED screen aesthetic** — The pure-black canvas reference. (no URL)

## 14. Do's and Don'ts

### Do
- Anchor every page on pure `#000000` black. The OLED-on canvas is non-negotiable.
- Use rose-magenta (`#fe2c55`) for primary CTAs and the heart-active fill. It is the platform's most-tapped color.
- Use electric cyan (`#25f4ee`) for accent CTAs, links, focus rings, and verified badges. Two voltages, two roles.
- Run the chromatic-aberration treatment on the wordmark and on hero headlines (cyan and rose offset layers).
- Use Proxima Nova at 700–900 weight with `-1` to `-2px` tracking on display sizes.
- Use 4px radius on buttons. The slightly-sharper radius is part of the UI-forward feel.
- Stack engagement icons vertically on the right rail (heart, comment, share, bookmark, music-disc).
- Use translucent-white text scale (`rgba(255,255,255,0.75/0.5/0.3)`) instead of opaque greys.
- Honor the heart-burst spring-bounce animation on every like tap. It's the platform's most beloved micro-interaction.
- Show the LIVE pill in rose with a pulsing white dot — the most-loud chromatic moment is reserved for actual livestreams.

### Don't
- Don't soften the black canvas to `#0a0a0a` or `#1a1a1a`. TikTok is OLED-pure black.
- Don't desaturate the rose or cyan. They are full-strength neon by design.
- Don't introduce a third brand color. Rose + cyan + neutrals is the system.
- Don't use the chromatic-aberration treatment on body type. It's a brand-emphasis effect, not a body decoration.
- Don't replace vertical 9:16 with horizontal 16:9 on product surfaces. The aspect IS the platform.
- Don't pad the video card. Content is full-bleed; chrome floats.
- Don't add drop shadows under engagement icons. The dark surface and white icons carry contrast on their own.
- Don't soften the heart-burst to a fade. The spring-bounce is the brand's playfulness.
- Don't bold body type for emphasis. Use color (white → cyan) or weight (400 → 600) but never go heavier than 700 in body context.
- Don't use the cyan as a link on light mode. Cyan-on-white fails AAA — flip to rose.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:     #000000 (absolute black — OLED-pure)
Surface:         #161823 (very-dark navy card)
Surface Elev:    #1f2030 (hover lift)
Border:          rgba(255,255,255,0.12) (translucent hairline)
Text:            #ffffff (pure white)
Text Muted:      rgba(255,255,255,0.75) (metadata)
Text Soft:       rgba(255,255,255,0.5) (timestamps, secondary)
Brand Rose:      #fe2c55 (primary voltage — CTAs, hearts)
Brand Cyan:      #25f4ee (secondary voltage — accent, focus, links)
Brand Rose Hov:  #e8254b (press)
Brand Cyan Hov:  #1cd9d3 (press)
On-Brand:        #ffffff (white on rose)
On-Cyan:         #000000 (black on cyan)
```

### Example Component Prompts

1. "Create a TikTok-style hero with `#000000` background, an 80px / 800 / -2px tracking headline split across two lines: first line in `#25f4ee` cyan, second line in `#fe2c55` rose. Add a `#fe2c55` rose CTA pill ('Get TikTok') with white bold text + a transparent outlined secondary CTA ('Watch on web')."

2. "Design a vertical 9:16 video card with right-rail engagement icon stack: 48 × 48px circular `#161823` buttons for Heart / Comment / Share / Bookmark / Music-disc, each with a 12px / 700 white counter below. Heart fills `#fe2c55` rose when tapped with 240ms spring-bounce scale animation."

3. "Build a creator profile mini-card: `#161823` background, 12px radius, 16px padding. 64px circular avatar top, `#ffffff` username in 16px / 700 with cyan verified checkmark, follower count in `rgba(255,255,255,0.75)` muted, and a `#fe2c55` rose 'Follow' CTA pill at bottom."

4. "Compose a LIVE indicator: `#fe2c55` rose pill with white text 'LIVE' in 12px / 800 / 0.5px tracking uppercase, with a pulsing white dot (1.5s opacity loop 0.5 → 1.0). Radius 4px, padding 2px × 8px."

5. "Create a For You / Following tab bar: black `#000000` background with two pill tabs. Active 'FOR YOU' in white 14px / 700 / 0.5px tracking uppercase with 2px white underline. Inactive 'FOLLOWING' in `rgba(255,255,255,0.5)` with no underline."

6. "Design a top-nav for TikTok web: 60px tall `#000000` bar with chromatic-aberration wordmark (cyan/white/rose offset layers) on the left, pill-shaped search bar centered (`#161823` background, radius 9999), right cluster: Upload icon, Inbox icon, profile avatar."

### Iteration Guide
1. Start with absolute pure black (`#000000`) as the canvas. Anything warmer (`#0a0a0a`) drifts toward generic dark-mode SaaS.
2. Pick one primary voltage per band. If rose owns the CTA, cyan handles links and accents — don't double-up.
3. Use the chromatic-aberration treatment scarcely — once on the wordmark, optionally once on the hero headline. More dilutes it.
4. Type weight goes to 800 on display sizes with `-1.5px` to `-2px` tracking. Without the negative tracking, Proxima Nova 800 reads bloated.
5. Engagement icons live on the right rail in a vertical stack. Don't move them inline below the video unless on mobile.
6. Honor the spring-bounce animation curve on every like / follow / save. The slight overshoot is the brand's playfulness.
7. When you need a third color, reach for the brand-soft tints (`rgba(brand,0.12)`) before introducing a new hue.
8. Trust the OLED-pure black. The canvas is what makes the rose and cyan voltages crackle.
