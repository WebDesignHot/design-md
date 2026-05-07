---
name: YouTube
tagline: 'YouTube Sans + Roboto + signature `#ff0000` red — content-density at planetary scale.'
updated_at: 2026-05-04T14:57:35+12:00
published_at: 2026-05-04T14:57:35+12:00
author: webdesignhot
source_url: https://www.youtube.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [media]
tags: [video, dense, dark-default, sans, mass-market, red, material]
preview_swatch: ['#0f0f0f', '#ffffff', '#ff0000']
related: [netflix, tiktok, twitch]
description: 'YouTube is content-density at planetary scale. The default canvas is `#0f0f0f` near-black on the desktop dark theme (the user-default since 2023) with `#ffffff` ink, paired with the signature **YouTube Red** `#ff0000` reserved exclusively for the play-button glyph, the subscribe button, and the recording dot — three semantic uses, almost nothing else. Display runs in **YouTube Sans** (the brand-bespoke geometric sans designed by Saffron Brand Consultants in 2017) at 700 weight for the wordmark and large product surfaces, while body and 99% of UI live in **Roboto** at 14–16px — Google''s system sans, weights 400/500/700. The grid is famously dense: 4 thumbnail columns at 1280px desktop, 5 at 1600px wide, with 16:9 thumbnails plus 14px / 500 Roboto title and 12px / 400 muted metadata. Cards have **12px radius** (Material 3 default) and zero border at rest; the only chrome is the watch-progress red bar that fills along the thumbnail bottom edge as you finish videos. Subscribe is the brand''s anchor CTA — a `#ff0000` filled button with `9999px` pill radius that becomes `#272727` filled "Subscribed" after click. The system runs Material 3 motion (`cubic-bezier(0.4, 0, 0.2, 1)` with 200ms standard duration), supports both `#ffffff` light and `#0f0f0f` dark themes (with full token swap), and at scale serves over a billion users a day on a UI optimised for thumbnail recognition and click-density above all else.'

colors:
  bg: '#0f0f0f'                            # canvas — dark theme default
  bg-deep: '#000000'                       # video player bg, full-screen
  bg-light: '#ffffff'                      # light theme canvas
  surface: '#272727'                       # secondary panel, hover background
  surface-strong: '#3f3f3f'                # press, focused input
  surface-soft: '#1f1f1f'                  # alt-row tint
  surface-card: 'transparent'              # cards do not have surface — they sit flat on bg
  surface-overlay: 'rgba(0,0,0,0.85)'      # menu, modal scrim
  surface-light: '#f9f9f9'                 # light theme secondary panel
  text: '#ffffff'                          # ink dark theme
  text-strong: '#ffffff'
  text-body: '#ffffff'
  text-muted: '#aaaaaa'                    # secondary metadata dark theme
  text-soft: '#717171'                     # tertiary
  text-inverse: '#0f0f0f'                  # on light surfaces
  text-disabled: '#717171'
  text-light: '#0f0f0f'                    # light theme ink
  text-light-muted: '#606060'              # light theme secondary
  brand: '#ff0000'                         # YouTube Red — signature
  brand-hover: '#cc0000'                   # darken on hover
  brand-active: '#aa0000'                   # press
  brand-deep: '#990000'
  brand-shorts: '#ff0033'                   # Shorts brand red — slightly more pink
  on-brand: '#ffffff'
  accent-link: '#3ea6ff'                    # link blue (dark theme)
  accent-link-light: '#065fd4'              # link blue (light theme)
  accent-premium: '#f1c21b'                 # YouTube Premium amber
  accent-music: '#ff0033'                   # YouTube Music red-pink
  accent-tv: '#ff0000'                      # YouTube TV red
  accent-kids: '#ff0000'                    # YouTube Kids red
  border: '#3f3f3f'                          # default 1px on dark
  border-soft: '#272727'                    # subtle alt-band
  border-strong: '#5e5e5e'                   # focused input
  border-light: '#e5e5e5'                    # light theme hairline
  shadow-card: 'rgba(0,0,0,0.4)'             # rare — most cards are flat
  shadow-modal: 'rgba(0,0,0,0.5) 0 8px 24px'
  scrim-thumb: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 60%)'
  progress-watched: '#ff0000'                 # the iconic red watch-progress bar
  progress-rail: 'rgba(255,255,255,0.2)'
  progress-buffer: 'rgba(255,255,255,0.4)'
  recording-dot: '#ff0000'                    # live-stream red dot
  live-badge-bg: '#ff0000'
  duration-badge-bg: 'rgba(0,0,0,0.6)'         # bottom-right runtime chip
  success: '#0db750'
  warning: '#f1c21b'
  danger: '#cc0000'
  info: '#3ea6ff'
  shorts-tab: '#ff0033'                       # Shorts vertical-feed accent
  community-tab: '#3ea6ff'

typography:
  display:
    family: '"YouTube Sans", Roboto, Arial, sans-serif'
    weights: [400, 500, 700, 900]
    opentype-features: ['kern']
    notes: 'YouTube Sans by Saffron Brand Consultants (2017) — geometric sans with rounded "g" and asymmetric "Y". Used on the wordmark, hero acquisition surfaces, and product brand pages. Not used in the watch UI.'
  body:
    family: 'Roboto, Arial, sans-serif'
    weights: [400, 500, 700]
    opentype-features: ['kern']
    notes: 'Google Roboto — the workhorse for 99% of the UI. 14–16px body.'
  mono:
    family: '"Roboto Mono", "Courier New", Consolas, monospace'
    weights: [400]
  scale:
    brand-display:     { size: 120, weight: 700, lineHeight: 1.0,  tracking: '-0.02em', family: display, notes: 'About-page hero — YouTube Sans' }
    display-xl:        { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.015em',family: display }
    display-lg:        { size: 40, weight: 700, lineHeight: 1.1,  tracking: '-0.01em', family: display }
    display-md:        { size: 32, weight: 700, lineHeight: 1.15, tracking: '0',       family: display }
    display-sm:        { size: 24, weight: 500, lineHeight: 1.2,  tracking: '0',       family: body, notes: 'Watch-page video title — Roboto Medium' }
    section-title:     { size: 20, weight: 700, lineHeight: 1.3,  tracking: '0',       family: body, notes: '"Subscriptions", "Music", section row labels' }
    video-title:       { size: 14, weight: 500, lineHeight: 1.3,  tracking: '0',       family: body, notes: 'Thumbnail title — 14 / 500, max 2 lines' }
    video-title-large: { size: 16, weight: 500, lineHeight: 1.3,  tracking: '0',       family: body, notes: 'Watch-page recommended sidebar' }
    body-lg:           { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    body-md:           { size: 14, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'YT default body — 14px' }
    body-sm:           { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body }
    metadata:          { size: 12, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, notes: 'Channel name, view count, timestamp' }
    button-md:         { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Sentence case — "Subscribe", "Join"' }
    button-sm:         { size: 13, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body }
    chip-label:        { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Topic chips above feed — "All", "Music", "Gaming"' }
    duration-badge:    { size: 12, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Bottom-right runtime chip on thumbnail' }
    nav-link:          { size: 14, weight: 400, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Side-nav links' }
    badge-live:        { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.04em',  family: body, transform: uppercase, notes: '"LIVE"' }
    caption:           { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body }
    legal:             { size: 11, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body }
    code:              { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: mono, notes: 'Description code blocks' }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12          # Material 3 default — thumbnail, card
  xl: 16          # mini player, modal
  pill: 9999     # subscribe button, chips, avatars

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 'unbounded'           # YT scales to viewport
  side-nav-collapsed: 72            # icon-only
  side-nav-expanded: 240            # full labels
  header-height: 56
  thumbnail-aspect: '16:9'
  shorts-aspect: '9:16'
  feed-cols-mobile: 1
  feed-cols-tablet: 2
  feed-cols-desktop: 4              # at 1280px
  feed-cols-wide: 5                 # at 1600px+
  card-gap: 16
  prose-width: 720                  # description, comment thread max measure

components:
  button-subscribe:
    bg: '#ff0000'
    color: '#ffffff'
    radius: 9999
    padding: '0 16px'
    height: 36
    font: button-md
    use: 'The signature red filled pill — "Subscribe". Anchored next to creator avatar.'
  button-subscribed:
    bg: '#272727'
    color: '#ffffff'
    radius: 9999
    padding: '0 16px'
    height: 36
    use: 'After-click "Subscribed" pill — neutral surface fill replaces red.'
  button-join:
    bg: 'transparent'
    color: '#3ea6ff'
    border: '1px solid #3ea6ff'
    radius: 9999
    padding: '0 16px'
    height: 36
    use: '"Join" channel-membership pill — outlined link-blue.'
  button-primary:
    bg: '#3ea6ff'
    color: '#0f0f0f'
    radius: 9999
    padding: '0 16px'
    height: 36
    use: 'Sign-in CTA, "Sign in" pill — link-blue (dark theme).'
  button-text:
    bg: 'transparent'
    color: '#3ea6ff'
    radius: 9999
    padding: '0 12px'
    height: 36
    use: '"Sort by", "Show transcript" — text-only blue button.'
  button-icon:
    bg: 'transparent'
    color: '#ffffff'
    radius: 9999
    padding: 8
    width: 40
    height: 40
    use: 'Like, Dislike, Share, Save, ⋮ — circular icon button with 8px padding.'
  button-icon-active:
    bg: 'rgba(255,255,255,0.1)'
    color: '#ffffff'
    radius: 9999
    use: 'Active state for icon buttons (Liked).'
  thumbnail-card:
    bg: 'transparent'
    radius: 12
    aspect: '16:9'
    use: 'Default video thumbnail — 16:9 aspect, 12px radius, no border, no shadow at rest.'
  thumbnail-shorts:
    bg: 'transparent'
    radius: 12
    aspect: '9:16'
    use: 'Vertical Shorts thumbnail — same chrome but 9:16.'
  thumbnail-progress-overlay:
    bg: 'rgba(255,255,255,0.2)'
    fill: '#ff0000'
    height: 4
    use: 'Watch-progress bar along thumbnail bottom edge — the iconic YT red fill.'
  thumbnail-duration-chip:
    bg: 'rgba(0,0,0,0.6)'
    color: '#ffffff'
    radius: 4
    padding: '2px 4px'
    font: duration-badge
    use: 'Bottom-right runtime — "10:24", "1:23:45".'
  thumbnail-live-badge:
    bg: '#ff0000'
    color: '#ffffff'
    radius: 4
    padding: '2px 6px'
    font: badge-live
    use: '"LIVE" red filled tag bottom-left on live-streams.'
  thumbnail-shorts-badge:
    bg: 'transparent'
    color: '#ffffff'
    use: 'Vertical-stacked "SHORTS" lockup with red play-arrow glyph.'
  card-video-feed:
    bg: 'transparent'
    color: '#ffffff'
    radius: 0
    use: 'Feed card — thumbnail + 14 / 500 title + 12 / 400 metadata. No card chrome.'
  card-video-watch-sidebar:
    bg: 'transparent'
    color: '#ffffff'
    radius: 0
    use: 'Watch-page recommended sidebar — horizontal layout: 168px thumb + 16/500 title.'
  chip-topic:
    bg: 'rgba(255,255,255,0.1)'
    color: '#ffffff'
    radius: 8
    padding: '6px 12px'
    font: chip-label
    use: '"All", "Music", "Gaming", "Live" — topic filter chips above feed.'
  chip-topic-active:
    bg: '#f1f1f1'
    color: '#0f0f0f'
    radius: 8
    use: 'Active chip — light fill on dark, inverts colour.'
  avatar-channel:
    bg: 'transparent'
    radius: 9999
    width: 24
    height: 24
    use: 'Channel avatar in feed metadata — 24x24 circle. Watch-page goes 40x40.'
  search-bar:
    bg: '#121212'
    color: '#ffffff'
    border: '1px solid #303030'
    radius: 9999
    height: 40
    padding: '0 16px'
    use: 'Top header search field — pill-radius, dark fill, light border.'
  search-bar-focus:
    bg: '#0f0f0f'
    border: '1px solid #1c62b9'
    use: 'Focused — link-blue border (no glow ring).'
  search-button:
    bg: '#272727'
    color: '#ffffff'
    radius: 9999
    width: 64
    height: 40
    use: 'Magnifying glass search-submit — pill-edge appended to search bar.'
  side-nav-item:
    bg: 'transparent'
    color: '#ffffff'
    radius: 8
    padding: '8px 12px'
    use: 'Side-nav row — icon + label. Hover bg `rgba(255,255,255,0.1)`.'
  side-nav-item-active:
    bg: '#272727'
    color: '#ffffff'
    use: 'Selected route — surface fill.'
  player-progress-bar:
    bg: 'rgba(255,255,255,0.2)'
    fill: '#ff0000'
    buffer: 'rgba(255,255,255,0.4)'
    height: 3
    radius: 0
    use: 'Video player scrubber — 3px tall, red fill, white-alpha buffer, no radius.'
  player-progress-handle:
    bg: '#ff0000'
    radius: 9999
    width: 12
    height: 12
    use: 'Playhead — 12x12 red dot. Scales to 14x14 on hover.'
  player-controls:
    bg: 'linear-gradient(0deg, rgba(0,0,0,0.7), transparent)'
    color: '#ffffff'
    use: 'Bottom-bar player controls — gradient scrim, white icons.'
  modal-dialog:
    bg: '#212121'
    color: '#ffffff'
    radius: 12
    border: '1px solid #303030'
    use: 'Generic modal — share, save-to-playlist, report.'
  toast:
    bg: '#3f3f3f'
    color: '#ffffff'
    radius: 4
    padding: '12px 16px'
    use: '"Saved to Watch later" — bottom-anchored 4px-radius toast.'
  comment:
    bg: 'transparent'
    color: '#ffffff'
    radius: 0
    use: 'Comment thread — flat, no card. Avatar + 13/500 author + 13/400 body.'
  description-box:
    bg: '#272727'
    color: '#ffffff'
    radius: 12
    padding: 16
    use: 'Watch-page description panel — surface fill, 12px radius.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'        # Material 3 standard
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'         # Material 3 emphasized
  ease-decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-accelerate: 'cubic-bezier(0.4, 0, 1, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 300
  reduced-motion: 'respects prefers-reduced-motion: reduce — thumbnail-hover preview pause, side-nav slide becomes instant, ripple becomes opacity-only.'

breakpoints:
  mobile: 600
  tablet: 1024
  desktop: 1280
  wide: 1600
  ultrawide: 2200

shadows:
  none: 'none'
  card-hover: '0 1px 2px rgba(0,0,0,0.3), 0 2px 6px rgba(0,0,0,0.15)'
  modal: '0 8px 24px rgba(0,0,0,0.5)'
  player-control: '0 1px 3px rgba(0,0,0,0.4)'
  thumbnail-hover: 'none'                                # YT thumbnails do not shadow on hover — they preview-play instead
  ring: '0 0 0 2px #1c62b9'

accessibility:
  contrast-text-on-bg: 19.5                           # white on #0f0f0f — AAA
  contrast-text-on-bg-light: 19.5                      # #0f0f0f on white — AAA
  contrast-muted-on-bg: 7.5                            # #aaa on #0f0f0f — AAA at body
  contrast-text-on-brand: 4.5                          # white on #ff0000 — AA at body
  focus-ring: '2px solid #1c62b9 with 2px offset'
  reduced-motion-honored: true
  caption-track: 'CC available on most videos with full customisation (font, edge, colour, opacity, bg, position)'
  audio-description: 'AD tracks supported via creator upload'
  keyboard-shortcuts: 'Space, K play/pause; J/L 10s seek; M mute; F fullscreen; T theatre; I miniplayer; C captions; arrows/scrub'

dark-mode: 'native — defaults to dark for new users since 2023; full token swap to light theme via system preference or settings.'
---

## 1. Visual Theme & Atmosphere

YouTube is content-density at planetary scale. The default canvas since 2023 has been **dark theme** — a near-black `#0f0f0f` (warmer than pure black, deliberately so for OLED kindness on long sessions) with `#ffffff` ink. The light theme remains shipped (`#ffffff` canvas, `#0f0f0f` ink) and follows system preference, but the dark surface is the brand's modern default and the canvas where every UI decision lives.

The signature **YouTube Red** `#ff0000` (sometimes documented as `#FF0033` for Shorts and Music) is reserved for three semantic uses, almost nothing else: the play-button glyph in the wordmark, the Subscribe button, and the watch-progress bar that fills along thumbnail bottoms. This restraint is deliberate — when the brand colour is everywhere it's nowhere; when it's only on the action that matters (subscribe, watch, live), it commands attention. The Shorts feed nudges to a slightly more pink `#ff0033` but the difference is barely perceptible at glance.

Display runs in **YouTube Sans** — the brand-bespoke geometric sans designed by Saffron Brand Consultants in 2017, with the rounded `g`, the asymmetric `Y`, and the slight tilt to the `r` that immediately signals YouTube without the wordmark needing to be present. It appears on the wordmark, the about-page hero, the product-marketing surfaces (YouTube Premium, YouTube Music, YouTube TV), and almost nowhere in the watch UI itself.

Body and 99% of UI run **Roboto** at 14–16px. Roboto is Google's system sans (Material 3's default), and it carries thumbnail titles, metadata, comments, descriptions, side-nav, search. The default body size is 14px — smaller than the editorial web's 16–18px norm — because YouTube optimises for *thumbnail-density*, not reading-comfort, and 14px lets four 16:9 thumbnails fit at 1280px desktop while leaving room for two-line title plus metadata.

The grid is famously dense. **4 columns at 1280px desktop, 5 at 1600px wide**, with 16:9 thumbnails plus 14/500 Roboto title (`max 2 lines, ellipsize`) and 12/400 muted metadata (`channel · views · timestamp`). Cards have **12px radius** (Material 3 default) and zero border at rest — the only chrome is the optional watch-progress red bar that fills along the thumbnail bottom edge on partially-watched videos, the bottom-right black-translucent duration chip, and the optional bottom-left red LIVE badge.

Subscribe is the brand's anchor CTA. A `#ff0000` filled pill (9999px radius, 36px height, 14/500 Roboto, "Subscribe" sentence-case) anchored next to the creator avatar. After click, the pill becomes `#272727` filled with "Subscribed" — the colour transitions out, signalling that the action is consumed. This pattern is the most-rendered conversion CTA on the open web (1.8 billion monthly visitors × multiple subscribe surfaces × 20 years).

Motion is **Material 3 standard**: `cubic-bezier(0.4, 0, 0.2, 1)` standard ease at 200ms standard duration. Ripple-on-click on icon buttons (a faded white-alpha circular wave). Side-nav slide at 200ms decelerate. Modal scale at 250ms emphasized. The system is unflashy — motion is functional, not performative.

The chrome layout is hierarchical: 56px-tall masthead with hamburger + wordmark + search bar + sign-in/avatar; 240px-wide left side-nav (collapses to 72px icon-only) with primary routes (Home, Shorts, Subscriptions) and Library/History; main feed in the right pane with 16px gutters; footer-less.

**Key Characteristics:**
- Dark-default `#0f0f0f` canvas (since 2023).
- YouTube Red `#ff0000` reserved for play glyph + Subscribe + watch-progress bar.
- YouTube Sans for wordmark + brand surfaces; Roboto everywhere else.
- 14px body default — denser than editorial.
- 4 thumbnails per row at 1280px (5 at 1600px).
- 16:9 thumbnail aspect, 12px radius, no border at rest.
- Watch-progress red bar `4px` filling along thumbnail bottom.
- Subscribe `#ff0000` 9999px-pill → `#272727` "Subscribed" after click.
- Topic chips (All / Music / Gaming) above feed at 8px radius.
- Material 3 motion (`cubic-bezier(0.4, 0, 0.2, 1)`, 200ms).
- Side-nav 240px expanded / 72px collapsed.
- Live `#ff0000` filled badge bottom-left of thumbnail.
- Light theme available — full token swap, not gimmicked.

## 2. Color Palette & Roles

### Primary
- **Dark Canvas** (`#0f0f0f`): Default desktop dark theme — warmer than pure black, OLED-kind.
- **White** (`#ffffff`): Ink in dark theme, canvas in light theme.
- **YouTube Red** (`#ff0000`): The signature — Subscribe button, play-button glyph, watch-progress fill, LIVE badge.

### Brand & Dark
- **Brand Hover** (`#cc0000`): Subscribe pill hover.
- **Brand Active** (`#aa0000`): Press state.
- **Shorts Red** (`#ff0033`): Slightly pink-shifted variant on Shorts feed and Music brand.
- **Premium Amber** (`#f1c21b`): YouTube Premium accent on the Premium product page.

### Accent
- **Link Blue Dark** (`#3ea6ff`): Hyperlink, "Join" outline button on dark theme.
- **Link Blue Light** (`#065fd4`): Hyperlink on light theme.
- **Sign-In Blue** (`#3ea6ff`): Sign-in CTA in upper-right.

### Interactive
- **Subscribe Red** (`#ff0000` bg + `#ffffff` text): Default subscribe pill.
- **Subscribed Neutral** (`#272727` bg + `#ffffff` text): Post-click subscribed pill.
- **Icon Button Active** (`rgba(255,255,255,0.1)`): Like, Dislike, Share, Save active states.
- **Topic Chip Active** (`#f1f1f1` bg + `#0f0f0f` text): Selected chip — inverts colour.
- **Topic Chip Rest** (`rgba(255,255,255,0.1)`): Unselected.

### Neutral Scale (Dark Theme)
- **Ink** (`#ffffff`): Title, primary text.
- **Muted** (`#aaaaaa`): Metadata, secondary.
- **Soft** (`#717171`): Tertiary, disabled.
- **Border** (`#3f3f3f`): Default 1px hairline.

### Neutral Scale (Light Theme)
- **Ink** (`#0f0f0f`): Title, primary text.
- **Muted** (`#606060`): Metadata, secondary.
- **Border** (`#e5e5e5`): Default 1px hairline.
- **Surface** (`#f9f9f9`): Side-nav active bg.

### Surface & Borders
- **Surface** (`#272727`): Secondary panel, hover bg.
- **Surface Strong** (`#3f3f3f`): Press, focused input.
- **Surface Soft** (`#1f1f1f`): Alt-row tint.
- **Search Field BG** (`#121212`): Top-bar search field.
- **Border Default** (`#3f3f3f`): 1px on dark.
- **Border Strong** (`#5e5e5e`): Focused input.

### Shadow Colors
- **Card Hover** (`0 1px 2px rgba(0,0,0,0.3), 0 2px 6px rgba(0,0,0,0.15)`): Rare — most cards stay flat.
- **Modal** (`0 8px 24px rgba(0,0,0,0.5)`): Modals only.
- **Thumbnail Hover** (none): YT thumbnails don't shadow on hover — they auto-play a 5-second preview clip instead.

### Semantic
- **Success** (`#0db750`): "Subscribed", "Saved to Watch later".
- **Warning** (`#f1c21b`): Premium amber, age-gate.
- **Danger** (`#cc0000`): Error, removed-content notice.
- **Info** (`#3ea6ff`): Link blue.

## 3. Typography Rules

### Font Family
- **Display**: `"YouTube Sans"` — bespoke geometric sans by Saffron Brand Consultants (2017). Weights 400 / 500 / 700 / 900. Used on wordmark, about-page hero, brand-product pages (YouTube Premium, Music, TV, Kids, Shorts). Not used in the watch UI.
- **Body / UI**: `Roboto` — Google system sans, Material 3 default. Weights 400 / 500 / 700. Used for 99% of in-product text.
- **Mono**: `"Roboto Mono"` — used in description code blocks, developer-channel embed snippets.
- **Fallback chain**: `Arial, sans-serif`. YouTube degrades to Arial gracefully on systems without Roboto.
- **OpenType Features**: `kern` always on; no stylistic alternates exposed in product UI.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Brand Display | YouTube Sans | 120px | 700 | 1.0 | -0.02em | kern | About-page hero |
| Display XL | YouTube Sans | 56px | 700 | 1.05 | -0.015em | kern | Premium / TV product pages |
| Display LG | YouTube Sans | 40px | 700 | 1.1 | -0.01em | kern | Section feature heads |
| Display MD | YouTube Sans | 32px | 700 | 1.15 | 0 | kern | Sub-feature |
| Display SM (Watch) | Roboto | 24px | 500 | 1.2 | 0 | kern | Watch-page video title — Roboto Medium |
| Section Title | Roboto | 20px | 700 | 1.3 | 0 | -- | "Subscriptions", "Music" feed sections |
| Video Title | Roboto | 14px | 500 | 1.3 | 0 | -- | Thumbnail title — max 2 lines |
| Video Title Large | Roboto | 16px | 500 | 1.3 | 0 | -- | Watch-page recommended sidebar |
| Body LG | Roboto | 16px | 400 | 1.5 | 0 | -- | Description prose |
| Body MD | Roboto | 14px | 400 | 1.4 | 0 | -- | YT default body — 14 |
| Body SM | Roboto | 13px | 400 | 1.4 | 0 | -- | Comment body |
| Metadata | Roboto | 12px | 400 | 1.3 | 0 | -- | Channel · views · timestamp |
| Button MD | Roboto | 14px | 500 | 1.0 | 0 | -- | Subscribe sentence-case |
| Button SM | Roboto | 13px | 500 | 1.0 | 0 | -- | Save, Share, Sort by |
| Chip Label | Roboto | 14px | 500 | 1.0 | 0 | -- | All, Music, Gaming chips |
| Duration Badge | Roboto | 12px | 500 | 1.0 | 0 | -- | "10:24" runtime chip |
| Nav Link | Roboto | 14px | 400 | 1.0 | 0 | -- | Side-nav |
| Badge LIVE | Roboto | 11px | 700 | 1.0 | 0.04em | -- | "LIVE" uppercase |
| Caption | Roboto | 12px | 400 | 1.4 | 0 | -- | Inline note |
| Legal | Roboto | 11px | 400 | 1.4 | 0 | -- | Footer copyright |

### Principles
- **Body is 14px, not 16.** YouTube optimises for thumbnail-density, not editorial reading. 14/500 title + 12/400 metadata fits four columns at 1280px.
- **YouTube Sans is brand surface only.** The watch UI is Roboto end-to-end. Reserve YouTube Sans for the wordmark and product-marketing pages — overusing it reads as branding, not product.
- **Roboto Medium (500) is the action weight.** Titles, buttons, chips run 500. Body runs 400. Numerals run regular except in 11/700 uppercase LIVE badge.
- **Sentence case for CTAs.** "Subscribe" (not "SUBSCRIBE"), "Sign in" (not "SIGN IN"), "Save" (not "SAVE"). Material 3 default casing.
- **Uppercase only for LIVE.** The single uppercase usage in the watch UI is the LIVE badge with `0.04em` letter-spacing.
- **No italic.** YT does not use italic in product UI. Italic appears only in user-supplied description text where the user has formatted it.
- **Numerals keep proportional spacing.** YT does not use `tnum` — view counts ("1.2M views") read naturally, not as a tabular grid.

## 4. Component Stylings

### Buttons

**Subscribe (Primary)**
- Background: `#ff0000`. Color: `#ffffff`. Radius: `9999px`. Padding: `0 16px`. Height: `36px`. Font: Roboto 14 / 500.
- Hover: `#cc0000`, 100ms ease-standard. No transform, no shadow.
- Active: `#aa0000`.
- Use: The signature CTA. Anchored next to creator avatar on watch page and channel header.

**Subscribed (Post-Click)**
- Background: `#272727`. Color: `#ffffff`. Radius: `9999px`. Padding: `0 16px`. Height: `36px`.
- Hover: `#3f3f3f`.
- Use: After Subscribe click, the pill swaps to neutral surface fill — the colour leaves the action that has been consumed.

**Join (Channel Membership)**
- Background: `transparent`. Color: `#3ea6ff`. Border: `1px solid #3ea6ff`. Radius: `9999px`. Padding: `0 16px`. Height: `36px`.
- Use: Outlined link-blue pill — channel paid-membership entry.

**Sign In (Top Right)**
- Background: `transparent`. Color: `#3ea6ff`. Border: `1px solid #3ea6ff`. Radius: `9999px`. Padding: `0 16px`. Height: `36px`.
- Use: Sign-in pill on logged-out state.

**Icon Button (Like / Dislike / Share / Save)**
- Background: `transparent` rest, `rgba(255,255,255,0.1)` hover, `rgba(255,255,255,0.2)` active.
- Color: `#ffffff`. Radius: `9999px`. Width: 40px. Height: 40px. Padding: 8px.
- Use: Action row below video. Material ripple on click.

**Text Button**
- Background: `transparent`. Color: `#3ea6ff`. Radius: `9999px`. Padding: `0 12px`. Height: `36px`.
- Use: "Sort by", "Show transcript", "Show more" — text-only blue.

### Thumbnails (The Brand's Core Surface)

**Default Thumbnail**
- Aspect: 16:9. Radius: `12px`. Border: none. Background: black image-placeholder.
- Hover: 5-second auto-preview clip plays muted (replaces still). On mobile, no auto-preview — long-press triggers the same.
- Bottom-right runtime chip: `rgba(0,0,0,0.6)` bg + `#ffffff` 12/500 + `4px` radius.
- Bottom-left LIVE badge (live streams only): `#ff0000` bg + `#ffffff` 11/700 uppercase + `4px` radius.
- Watch-progress overlay (partially-watched only): 4px tall, `rgba(255,255,255,0.2)` rail, `#ff0000` fill from left.
- Below thumbnail: 14/500 title (max 2 lines, ellipsize) + 24x24 channel avatar + 12/400 muted metadata.

**Shorts Thumbnail**
- Aspect: 9:16. Radius: `12px`. Vertical-stacked grid.
- "SHORTS" lockup with red play-arrow glyph instead of duration chip.

### Topic Chips (Above Feed)

- Background: `rgba(255,255,255,0.1)` rest, `#f1f1f1` active.
- Color: `#ffffff` rest, `#0f0f0f` active.
- Radius: `8px`. Padding: `6px 12px`. Height: 32px. Font: Roboto 14 / 500.
- Use: "All", "Music", "Gaming", "Live", "Mixes", "Recently uploaded" — topic filters.

### Search Bar

- Background: `#121212`. Color: `#ffffff`. Border: `1px solid #303030`. Radius: `9999px`. Height: `40px`.
- Focus: Border `#1c62b9` link-blue, no glow ring.
- Suffix: `#272727` magnifying-glass submit pill at right.
- Voice-search mic icon: 40x40 circular icon button, gray-50.

### Side Navigation

**Side Nav Expanded (240px)**
- Background: `#0f0f0f`. Sticky left.
- Items: 8px radius row, 8px 12px padding, icon (24x24) + 14/400 label.
- Hover: `rgba(255,255,255,0.1)` bg.
- Active route: `#272727` bg + 14/500 label weight.

**Side Nav Collapsed (72px)**
- Icon-only, label tooltip on hover.
- Toggles via header hamburger.

**Mini Side Nav (Watch page)**
- 72px icon-only on watch page only — gives the player full breathing room.

### Player Controls

**Progress Bar**
- Rail: `rgba(255,255,255,0.2)`. Buffer: `rgba(255,255,255,0.4)`. Fill: `#ff0000`. Height: `3px`. Radius: 0.
- Hover: rail thickens to 5px and reveals chapter ticks.

**Playhead**
- 12x12 `#ff0000` circle. Scales to 14x14 on hover. Material 3 ripple on grab.

**Bottom Bar**
- Background: `linear-gradient(0deg, rgba(0,0,0,0.7), transparent)` 100px tall. Color: `#ffffff`.
- Controls: Play/Pause / Next / Volume / Time / Captions / Settings / Theatre / Mini / Fullscreen.

### Cards

**Feed Card**
- Background: `transparent` (no card chrome). Padding: 0. Gap: 16px between cards.
- Thumbnail (12px radius) + title 14/500 + metadata block.
- Hover: title weight stays, metadata stays — only the thumbnail auto-plays.

**Watch Recommended Sidebar Card**
- Horizontal: 168px-wide thumbnail + flex-1 column with 16/500 title + metadata.
- Background: transparent. Hover bg: `rgba(255,255,255,0.05)`.

**Description Box (Watch Page)**
- Background: `#272727`. Color: `#ffffff`. Radius: `12px`. Padding: 16px.
- Collapsed: 3 lines + "Show more". Expanded: full description + chapter list + tags.

### Comment

- Background: `transparent`. Radius: 0. Padding: `12px 0`. No card.
- Avatar 40x40 circle + author 13/500 + timestamp 12/400 muted + body 13/400.
- Action row: Like (`#3ea6ff` if liked) / Dislike / Reply.

### Modal

- Background: `#212121`. Color: `#ffffff`. Radius: `12px`. Border: `1px solid #303030`.
- Shadow: `0 8px 24px rgba(0,0,0,0.5)`. Width: clamp(400px, 50vw, 600px).
- Use: Share, Save to playlist, Report, Send feedback.

### Toast

- Background: `#3f3f3f`. Color: `#ffffff`. Radius: `4px`. Padding: `12px 16px`.
- Anchored bottom-left, 5-second auto-dismiss.
- Use: "Saved to Watch later", "Added to playlist", "Sharing link copied".

## 5. Layout Principles

### Spacing System
- Base: 4px. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128 / 160.
- Card gap: 16px in feed grid. Section gap: 32–48px between feed sections.

### Grid & Container
- **Unbounded** page width — feed scales infinitely; YT does not enforce a `max-width` on the main feed pane.
- Side nav: 240 expanded / 72 collapsed.
- Header: 56px tall.
- Feed grid: 4 cols at 1280px desktop, 5 at 1600px wide, 6 at 2200px ultrawide.
- Watch page: video player flex-grow, 426px-wide right column for recommended sidebar at desktop; stacks below at <1024px.

### Whitespace Philosophy
YouTube optimises for *thumbnail-density*. The feed grid uses 16px card gaps — the smallest in the streaming category — so the eye scans rows of thumbnails like a contact-sheet rather than dwelling on individual cards. This is the deliberate opposite of Apple TV+ or Netflix (both more spacious). The brand's whitespace is "give every thumbnail equal weight, fit as many as the viewport allows".

### Section Cadence
- Topic chips bar (`All`, `Music`, `Gaming`, etc.) — sticky below header
- "Continue watching" feed row
- Subscriptions feed
- Recommended for you (the main infinite feed)
- "Shorts" horizontal carousel (mid-feed)
- Trending / Music / Live (genre rows)
- Footer-less — feed loads infinitely

## 6. Shapes & Radius Scale

- **Sharp** (`0px`): Player progress bar, side-nav active highlight stripe.
- **Micro** (`2px`): Internal tooltip arrow.
- **Standard** (`4px`): Duration chip, LIVE badge, toast.
- **Material Default** (`8px`): Topic chip, side-nav row, generic small surface.
- **Card** (`12px`): Thumbnail, modal, description box — the most-used radius.
- **Modal Large** (`16px`): Settings dialog (rare).
- **Pill** (`9999px`): Subscribe button, Join, Sign in, search bar, icon buttons, avatars, chips.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | Flat | Default — feed cards, thumbnails, comments |
| 1 | Surface fill `#272727` | Hover row, side-nav active |
| 2 | `0 1px 2px rgba(0,0,0,0.3) + 0 2px 6px rgba(0,0,0,0.15)` | Card hover (rare — most stay flat) |
| 3 | Player gradient scrim `linear-gradient(0deg, rgba(0,0,0,0.7), transparent)` | Player controls bottom bar |
| 4 | `0 8px 24px rgba(0,0,0,0.5)` | Modal dialog |
| 5 | -- | YT does not stack higher |

### Shadow Philosophy
Most YouTube surfaces are flat. The brand uses *surface-fill colour* (`#272727`, `#3f3f3f`) as its primary elevation cue, not shadows. Cards, comments, side-nav rows, even modals favour a colour-shift over a drop-shadow. The single exception is the modal dialog, which uses Material 3's elevation-3 shadow stack. Player controls use a gradient-scrim instead of a drop-shadow because they overlay video where shadows compete with motion content.

## 8. Interaction & Motion

### Easing Curves
- **Material 3 Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for everything.
- **Material 3 Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal, side-nav slide.
- **Decelerate**: `cubic-bezier(0, 0, 0.2, 1)` — entry, fade-in.
- **Accelerate**: `cubic-bezier(0.4, 0, 1, 1)` — exit.

### Duration Buckets
- **Fast**: 100ms — colour shift, hover, ripple.
- **Standard**: 200ms — modal in, side-nav slide, chip select.
- **Slow**: 300ms — full-page transitions, miniplayer expand.

### Per-Component Recipes
- **Subscribe pill hover**: bg `#ff0000 → #cc0000`, 100ms.
- **Icon button click**: Material ripple — `rgba(255,255,255,0.2)` circle expanding from click point over 250ms ease-decelerate.
- **Thumbnail hover preview**: 800ms delay before 5-second muted clip plays. Cancels on mouse-leave.
- **Side-nav slide**: 240ms ease-emphasized.
- **Modal in**: 250ms ease-emphasized — opacity 0→1 + scale 0.96→1.0.
- **Toast in**: 200ms slide-up + opacity. Auto-dismiss after 5s.
- **Topic chip select**: 100ms colour swap.
- **Watch-progress fill**: native HTML5 `<progress>` element animation; no custom motion.

### Page Transitions
YouTube uses native page navigation with persisted player state — clicking a thumbnail loads the watch page while keeping any miniplayer alive in the bottom-right. There is no SPA cross-fade; transitions are instant content-replace with skeleton placeholders during fetch.

### Reduced Motion
- Thumbnail preview → still only, no autoplay.
- Side-nav slide → instant.
- Modal scale → opacity-only.
- Ripple → opacity-only fade, no scale.
- Topic chip select → instant.

## 9. Accessibility & A11y

### Contrast Pairs
- White on `#0f0f0f`: **19.5:1** — AAA.
- `#0f0f0f` on white: **19.5:1** — AAA.
- Muted `#aaa` on `#0f0f0f`: **7.5:1** — AAA at body, AA at small.
- White on `#ff0000`: **4.5:1** — AA at body.
- Link blue `#3ea6ff` on `#0f0f0f`: **8.0:1** — AAA.
- Link blue `#065fd4` on white: **6.5:1** — AAA.

### Focus Indicators
- 2px solid `#1c62b9` (Material focus blue) ring with 2px offset on all interactive controls.
- Player controls: dotted-white outline (legacy YT, deliberately preserved for Tab visibility over video).

### ARIA Patterns
- Feed grid: `role="feed"` with `aria-busy` during pagination.
- Thumbnail card: `role="link"` with full `aria-label="Title — Channel — duration — uploaded date"`.
- Subscribe button: `role="button" aria-pressed="true|false"` reflecting subscription state.
- Player: native `<video>` with custom controls; `aria-label` on each control button.
- Modal: `role="dialog" aria-modal="true"`, focus trap, ESC closes.
- Side nav: `<nav aria-label="Primary">`, current route `aria-current="page"`.

### Keyboard Navigation
- Tab follows logical order: side-nav → topic chips → feed → footer.
- Arrow keys do not bind in feed (preserves browser behaviour).
- Space / K play-pause; J / L 10s rewind / fwd; arrows seek 5s; M mute; F fullscreen; T theatre mode; I miniplayer; C captions; > / < playback rate.
- Esc exits fullscreen → exits miniplayer → closes modal.

### Screen Reader Hints
- Thumbnail card aria-label includes channel, duration, view count, age — full metadata read.
- Watch progress: `aria-valuenow` updates as playback progresses (audio cue every 25%).
- Captions: `<track kind="captions">` exposed to AT.
- Live indicator: `aria-live="polite"` on chat thread.

### Caption / AD
- CC available on most videos with full customisation: font (proportional / mono / casual), edge (none / drop-shadow / outline), colour, opacity, bg, position.
- Audio description uploadable as separate track per video; creator-supplied.

### Reduced Motion
Honoured per §8. Especially impactful on Shorts feed, where reduced-motion disables the auto-advance scroll behaviour.

## 10. Responsive Behavior

### Breakpoints
| Token | Min | Use |
|-------|-----|-----|
| mobile | 0px | 1 column feed, 56px header, hamburger nav, no side-nav |
| tablet | 600px | 2 column feed, side-nav collapses to icon-only |
| desktop | 1024px | 3-4 column feed, side-nav 240px expanded |
| 1280px | 1280px | 4 column feed (canonical desktop) |
| wide | 1600px | 5 column feed |
| ultrawide | 2200px | 6 column feed |

### Touch Targets
- 48×48 minimum (Material 3 standard) on all controls.
- Icon buttons 40x40 visual but 48x48 hit-target via padding.

### Collapsing Strategy
- Header search → search-icon-only at <600px (tap opens fullscreen search overlay).
- Side nav → bottom-tab nav at <600px (Home / Shorts / Subscriptions / Library / You).
- Watch recommended sidebar → stacks below player at <1024px.
- Player → fullscreen-default on mobile portrait, theatre on landscape.

### Image Behavior
- Thumbnails: srcset 120/320/480/1280w with `loading="lazy"` for non-fold cards.
- Channel avatars: srcset 48/88/176px square.
- Cover banners: srcset for channel-page banners 1920/2560w.

### Container Queries
- Feed card uses CQ to switch between vertical (mobile, 1-col) and horizontal (sidebar) layouts.

## 11. Content & Voice

### Tone
YouTube voice is **direct-friendly-mass-market**. Where Vimeo is artisanal-cinephile and Netflix is editorial-prestige, YouTube is *direct-utility-conversational*. Acquisition copy reads like product instructions: "Watch, subscribe, share." Product copy is sentence-case throughout — no advertising-tone, no aspirational marketing voice. The brand assumes the user is here for a specific video and only briefly negotiates.

### Microcopy Patterns
- **Primary CTA**: "Subscribe", "Sign in", "Try YouTube Premium".
- **Secondary**: "Save", "Share", "Sort by", "Show more", "Show transcript".
- **Acquisition headline**: "Welcome to YouTube. Sign in to like videos, comment, and subscribe."
- **Empty Watch later**: "Save videos to watch later. They'll appear here."
- **Empty Subscriptions**: "Subscribe to channels to see their latest videos here."
- **Empty Search**: "No results found. Try different keywords."
- **Error**: "Something went wrong. Please try again." (Material 3 standard error string.)
- **Network**: "You're offline. Reconnect to continue watching."
- **Comment empty**: "Be the first to comment."
- **Live**: "Live now" or "Started 3 minutes ago".

### Empty States
- Watch later: text + small "Browse" link.
- Subscriptions: "Recommended channels for you" — system suggests channels.
- Search no-results: text + "Trending now" 4-up grid.

### CTA Verb Conventions
- "Subscribe" (not "Follow", not "Sign up"). YouTube has owned "subscribe" since 2005 — the verb is the brand.
- "Save" (not "Bookmark", not "Add"). "Save to Watch later" is the canonical phrase.
- "Share" (not "Send", not "Forward"). The Share modal is universal.
- "Sign in" (not "Log in"). Material casing, sentence case.
- "Watch" (not "Play"). YouTube watches; Netflix plays.

## 12. Dark Mode & Theming

**Native dark mode — defaults to dark for new users since 2023.**

The light theme remains shipped (`#ffffff` canvas, `#0f0f0f` ink) and follows system preference for users who haven't explicitly toggled. The full light-theme token swap:

```yaml
colors-light:
  bg: '#ffffff'
  surface: '#f9f9f9'
  surface-strong: '#e5e5e5'
  text: '#0f0f0f'
  text-muted: '#606060'
  border: '#e5e5e5'
  search-field-bg: '#ffffff'
  search-field-border: '#cccccc'
  brand: '#ff0000'                  # red unchanged — passes AA on white
  link: '#065fd4'                    # link blue darkens for AA on white
  card-hover: 'rgba(0,0,0,0.05)'
  player-controls: 'unchanged — always dark scrim over video'
```

The brand red `#ff0000` is unchanged across themes — it's the conversion CTA on both. Player UI stays dark on both themes since the player overlays video content.

The theme toggle is `Appearance` setting: Use device theme / Dark theme / Light theme. There is no auto-time-of-day switch.

## 13. Lineage & Influences

YouTube inherits from three streams.

**Material Design and Material 3.** The radius scale (12px card, 9999px pill, 4px chip), the easing curves (`cubic-bezier(0.4, 0, 0.2, 1)`), the surface-fill elevation system (`#272727`/`#3f3f3f` instead of shadows), the topic-chip pattern, the icon-button-with-ripple — all of these are direct Material 3 implementations. YouTube is Google's flagship Material 3 product on the web.

**TV broadcast and cable-channel UI.** The dense thumbnail grid, the LIVE red badge, the bottom-right runtime chip, the "Subscribe" verb (cable-TV "channels"), the watch-progress bar — these inherit from broadcast television's channel-guide and now-playing chrome. YouTube treats videos as channels in the cable-TV sense.

**Roboto and the Google design system.** Roboto (Christian Robertson, 2011) is the system sans across all Google products; YouTube is the largest-scale deployment of Roboto in any product. The 14px body default, the 500-weight title pattern, the kern-on default — all Google design system inheritance.

What YouTube rejects: editorial whitespace (Apple TV+), prestige hover-scale (Netflix), franchise-tile branding (Disney+), the rounded-everything web aesthetic (the brand keeps 0-radius on player progress, 4-radius on chips, 12-radius on cards — it doesn't homogenize). The brand is *dense-utility-conversational*.

**Influences:**
- **Material Design 3** — radius, elevation-via-fill, motion curves, ripple. https://m3.material.io/
- **Saffron Brand Consultants — YouTube Sans (2017)** — bespoke geometric sans. https://www.saffron-consultants.com/work/youtube
- **Christian Robertson — Roboto (2011)** — body face. https://fonts.google.com/specimen/Roboto
- **Cable / broadcast TV UI conventions** — channel guide, LIVE indicator, runtime chip.
- **Polymer / lit-element web components** — YouTube's frontend stack defines the Material 3 web reference.

## 14. Do's and Don'ts

**Do:**
- Use `#0f0f0f` dark canvas with `#ffffff` ink as the default theme — this is the modern YT default since 2023.
- Reserve `#ff0000` brand red for Subscribe button, play-button glyph, watch-progress bar, LIVE badge — three semantic uses, almost nothing else.
- Use Roboto for 99% of UI; reserve YouTube Sans for the wordmark and brand-marketing pages.
- Default body to 14px / 500 (title) and 12px / 400 (metadata) — YT's thumbnail-density type scale.
- Use 12px radius on thumbnails and cards (Material 3 default).
- Use 9999px pill radius on Subscribe, Join, Sign in, chips, search bar, icon buttons.
- Use sentence case for CTAs ("Subscribe", "Save", "Sign in") — never uppercase except LIVE badge.
- Layout the feed as 4 columns at 1280px, 5 at 1600px wide, 6 at 2200px ultrawide.
- Render bottom-right runtime chip with `rgba(0,0,0,0.6)` bg + 12/500 white.
- Render watch-progress as 4px tall red `#ff0000` fill on `rgba(255,255,255,0.2)` rail along thumbnail bottom.
- Auto-preview thumbnails on hover after 800ms delay (5-second muted clip).
- Use Material 3 motion: `cubic-bezier(0.4, 0, 0.2, 1)` standard at 200ms.

**Don't:**
- Don't add red to ornament — it's a semantic colour for action only.
- Don't use uppercase on CTAs except LIVE badge.
- Don't render thumbnails with shadows on hover — auto-preview replaces hover-shadow.
- Don't use italic in product UI.
- Don't use display weight (700) on body or metadata — body is 400, title is 500.
- Don't use editorial whitespace (48px+ row gap) — feed gap is 16px.
- Don't bound the feed to a fixed max-width — it scales.
- Don't use multi-step gradients — flat fills + Material elevation only.
- Don't substitute Roboto with another sans — the kerning and Material harmony break.
- Don't ship the player progress bar with rounded ends — it's 0-radius.
- Don't use card-shadows on feed thumbnails — they stay flat.
- Don't use parallax or scroll-trigger animation — Material 3 does not.

## 15. Agent Prompt Guide

### Quick Color Reference
- Canvas (Dark): `#0f0f0f`
- Canvas (Light): `#ffffff`
- Ink (Dark): `#ffffff`
- Ink (Light): `#0f0f0f`
- YouTube Red: `#ff0000`
- Subscribed Neutral: `#272727`
- Surface Strong: `#3f3f3f`
- Muted: `#aaaaaa`
- Border: `#3f3f3f`
- Link Blue (Dark): `#3ea6ff`
- Link Blue (Light): `#065fd4`

### Example Component Prompts
1. "Create a YouTube feed thumbnail card — `#0f0f0f` dark canvas, transparent card background, 16:9 aspect 12px-radius thumbnail with bottom-right `rgba(0,0,0,0.6)` 4px-radius runtime chip ('10:24') and 4px tall `#ff0000` watch-progress fill on `rgba(255,255,255,0.2)` rail along bottom edge. Below: 14/500 Roboto title (max 2 lines, ellipsize) in white, 24x24 channel avatar, 12/400 muted `#aaa` metadata 'Channel · 1.2M views · 3 days ago'."
2. "Design a YouTube Subscribe button — `#ff0000` background, `#ffffff` text, 9999px pill radius, 36px height, 0/16px padding, Roboto 14/500 sentence-case 'Subscribe'. Hover darkens to `#cc0000` over 100ms `cubic-bezier(0.4, 0, 0.2, 1)` no transform. After click, swap to `#272727` background with text 'Subscribed'."
3. "Build a YouTube topic chip bar — horizontal scroll row of pills above the feed. Each chip: `rgba(255,255,255,0.1)` bg + `#ffffff` text Roboto 14/500, 8px radius, 6/12 padding. Active chip inverts to `#f1f1f1` bg + `#0f0f0f` text. Labels: 'All', 'Music', 'Gaming', 'Live', 'Mixes'."
4. "Render a YouTube watch-page header — left: 24/500 Roboto video title in white. Below: 40x40 circle channel avatar + channel name 16/500 + subscriber count 12/400 muted. Right: `#ff0000` 9999px Subscribe pill. Below all: row of 40x40 circular icon buttons (Like / Dislike / Share / Save) — `transparent` bg, `rgba(255,255,255,0.1)` hover."
5. "Create a YouTube side nav at desktop — 240px wide, `#0f0f0f` bg, sticky left. Each row: 8px radius, 8/12 padding, 24px icon + 14/400 white label. Hover `rgba(255,255,255,0.1)` bg. Active route `#272727` bg + 14/500 weight. Items: Home, Shorts (red play glyph), Subscriptions, Library, History, Watch later."
6. "Render a YouTube player progress bar — 3px tall, 0 radius, full width. Rail `rgba(255,255,255,0.2)`, buffer `rgba(255,255,255,0.4)`, fill `#ff0000`. Playhead is a 12x12 `#ff0000` circle scaling to 14x14 on hover."

### Iteration Guide
1. **Dark, not light.** The default since 2023 is `#0f0f0f` dark theme. If the design defaults to white, swap.
2. **Three reds.** Subscribe + play glyph + watch-progress. If red appears anywhere else (text colour, icon fill, divider), remove it.
3. **14, not 16.** Body title is 14/500; metadata is 12/400. The brand optimises for thumbnail-density.
4. **Pill the actions.** Subscribe, Join, Sign in, search, chips, avatars — all 9999px pill. Cards remain 12px.
5. **Roboto, not YouTube Sans.** YouTube Sans is brand-surface only; UI is Roboto.
6. **Flat cards.** Feed thumbnails do not shadow — they auto-preview on hover instead.
7. **Sentence case.** Material 3 CTA casing — "Subscribe", not "SUBSCRIBE".
8. **4 cols at 1280, 5 at 1600.** The canonical feed grid. If your design renders 3 fat columns, tighten.
