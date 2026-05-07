---
name: SoundCloud
tagline: Signature `#ff5500` orange on `#f2f2f2` paper with Interstate sans — waveform-first audio social UI.
updated_at: 2026-05-04T14:57:35+12:00
published_at: 2026-05-04T14:57:35+12:00
author: webdesignhot
source_url: https://soundcloud.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [media, social]
tags: [light, bold, sans, dense, audio, waveform, social]
preview_swatch: ['#f2f2f2', '#ff5500', '#333333']
related: [spotify, suno, threads-app]
description: 'SoundCloud is the original audio-social UI: a paper-grey `#f2f2f2` canvas (one of the few light-default streaming brands), the unmistakable SoundCloud Orange `#ff5500` rationed for the Play button, the active waveform-played region, the wordmark, and Like-heart accents, and Interstate sans (since 2013) carrying display headlines at 700 weight with neutral tracking. The defining UI element is the horizontal waveform — the page renders every track as a 70px-tall stereo amplitude waveform with the played portion in solid orange, the unplayed portion in mid-grey, and the playhead a thin vertical line. Comments anchor as avatars stuck to the timestamp on the waveform itself. Type is workhorse, density is feed-like, and orange is the wayfinding signal so every "Play" reads as the only action.'

colors:
  bg: '#f2f2f2'                    # canvas — SoundCloud signature paper-grey
  bg-deep: '#ffffff'                # card surface (white above the grey ground)
  bg-dark: '#333333'                # rare dark-mode surface (pro/premium pages)
  bg-band: '#fafafa'                # alt band on long-scroll feeds
  surface: '#ffffff'                # default card, feed item
  surface-strong: '#f7f7f7'         # hovered surface, comments well
  surface-soft: '#f8f8f8'           # alt band, table-row stripe
  surface-pro: '#333333'            # SoundCloud Pro feature band (dark)
  text: '#333333'                   # primary text — soft black, not pure
  text-strong: '#1f1f1f'            # display
  text-subdued: '#666666'           # secondary metadata, "by Artist"
  text-muted: '#999999'             # tertiary, timestamps
  text-link: '#ff5500'              # link orange — same as brand
  text-disabled: '#cccccc'
  text-on-dark: '#ffffff'           # white text on dark-mode pro band
  brand: '#ff5500'                  # SoundCloud Orange — defining brand colour
  brand-hover: '#ff6e1f'            # marginally brighter on hover
  brand-active: '#cc4400'           # press / pointer-down
  brand-deep: '#a83600'             # archived deep variant
  on-brand: '#ffffff'
  accent-brand-2: '#f50'             # 3-char alias of brand orange used in legacy CSS
  border: '#e5e5e5'                 # default light hairline
  border-soft: '#eeeeee'            # softer divider
  border-strong: '#cccccc'          # focused input outline
  border-on-dark: '#444444'         # divider on dark surface
  waveform-played: '#ff5500'        # played region of waveform — orange
  waveform-unplayed: '#999999'      # unplayed region — mid-grey
  waveform-buffered: '#cccccc'      # downloaded but unplayed (rare display)
  waveform-hover: '#ff8e62'         # waveform peak hover state
  playhead: '#ff5500'               # vertical playhead line on waveform
  comment-marker: '#ff5500'         # comment-anchor dot on waveform
  shadow-card: 'rgba(0,0,0,0.08)'
  shadow-modal: 'rgba(0,0,0,0.2)'
  success: '#5cd363'                # verified, upload-success
  warning: '#ffba00'                # processing, encoding
  danger: '#cc0000'                 # error, copyright takedown
  danger-text: '#cc0000'
  info: '#3399ff'                   # informational link blue (rare)
  badge-pro: '#ff5500'              # Pro/Pro Unlimited tier badge
  badge-go-plus: '#7711d4'          # Go+ subscriber tag (purple)
  verified-blue: '#0099ff'           # verified-creator checkmark
  repost-green: '#5cd363'            # repost-arrow accent
  like-orange: '#ff5500'            # filled-heart liked state

typography:
  display:
    family: '"Interstate", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700, 900]
    opentype-features: ['tnum']
  body:
    family: '"Interstate", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'Menlo, Consolas, "Roboto Mono", SFMono-Regular, monospace'
    weights: [400]
  scale:
    display-xl:        { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.01em', family: display, notes: 'Marketing landing hero' }
    display-lg:        { size: 32, weight: 700, lineHeight: 1.15, tracking: '0',       family: display, notes: 'Profile page name' }
    display-md:        { size: 24, weight: 700, lineHeight: 1.2,  tracking: '0',       family: display, notes: 'Track title in player' }
    display-sm:        { size: 20, weight: 700, lineHeight: 1.3,  tracking: '0',       family: display, notes: 'Section header "Tracks I''m following"' }
    title-md:          { size: 16, weight: 700, lineHeight: 1.3,  tracking: '0',       family: display, notes: 'Track title in feed item' }
    title-sm:          { size: 14, weight: 700, lineHeight: 1.3,  tracking: '0',       family: display, notes: 'Sidebar nav label' }
    subtitle:          { size: 14, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, notes: '"by Artist" subtitle below track title' }
    body-md:           { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Default body, comment text' }
    body-sm:           { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Secondary metadata' }
    button-md:         { size: 12, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Like / Repost / Share / Follow' }
    button-lg:         { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Primary CTA' }
    caption:           { size: 11, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, notes: 'Timestamps, fine print' }
    metadata:          { size: 12, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, opentype: ['tnum'], notes: 'Play count, listen count, duration' }
    waveform-time:     { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0',       family: body, opentype: ['tnum'], notes: 'Time labels at start/end of waveform' }
    badge:             { size: 10, weight: 700, lineHeight: 1.0,  tracking: '0.04em',  family: body, transform: uppercase, notes: '"PRO", "GO+", "VERIFIED"' }
    nav-link:          { size: 14, weight: 400, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Top nav, sidebar links' }
    comment-text:      { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Comment body anchored to waveform timestamp' }

radius:
  none: 0           # waveform — flush
  micro: 2          # play-count badge
  sm: 3             # default button radius (small, distinctive)
  md: 4             # input, card content
  lg: 6             # modal corners
  xl: 8             # rare; some featured cards
  pill: 9999        # filter pills, tags

spacing:
  base: 4
  scale: [4, 8, 10, 12, 16, 20, 24, 30, 36, 48, 60, 80, 120]

layout:
  page-width: 1240          # historic SoundCloud constraint
  content-max: 1100
  sidebar-width: 230        # right-rail "You / Following / Charts"
  feed-width: 760           # main feed column
  player-bar-height: 50     # pinned bottom-of-viewport player
  waveform-height: 70       # canonical full-track waveform tall
  waveform-mini-height: 30  # mini-waveform in feed items

components:
  button-primary-solid:
    bg: '#ff5500'
    color: '#ffffff'
    radius: 3
    padding: '0 12px'
    height: 28
    font: button-md
    weight: 700
    use: 'Primary action — Sign up, Try Pro, Upload. Small, dense, characteristic 3px radius.'
  button-primary-large:
    bg: '#ff5500'
    color: '#ffffff'
    radius: 3
    padding: '0 24px'
    height: 38
    font: button-lg
    weight: 700
    use: 'Marketing landing CTA — slightly taller variant.'
  button-outline:
    bg: 'transparent'
    color: '#333333'
    border: '1px solid #cccccc'
    radius: 3
    padding: '0 12px'
    height: 28
    font: button-md
    weight: 700
    use: 'Secondary action — Follow, Share, Repost. Outlined neutral.'
  button-outline-active:
    bg: '#ff5500'
    color: '#ffffff'
    border: '1px solid #ff5500'
    radius: 3
    use: 'Pressed/active outline button — Following (after follow).'
  button-text:
    bg: 'transparent'
    color: '#333333'
    border: 'none'
    padding: '0 8px'
    height: 28
    use: 'Tertiary text-only — Cancel, More, See All.'
  button-icon:
    bg: 'transparent'
    color: '#666666'
    border: 'none'
    height: 28
    width: 28
    use: 'Icon-only utility — Like, Repost, Share, More. Hover lifts to #333333.'
  button-icon-active:
    bg: 'transparent'
    color: '#ff5500'
    use: 'Liked / Reposted — icon flips to brand orange.'
  button-play-circle:
    bg: 'rgba(0,0,0,0.5)'
    color: '#ffffff'
    radius: '50%'
    height: 50
    width: 50
    use: 'Translucent circular Play button overlaid on track artwork (feed item).'
  button-play-circle-large:
    bg: '#ff5500'
    color: '#ffffff'
    radius: '50%'
    height: 70
    width: 70
    use: 'Solid orange circular Play on track page hero.'
  waveform-track:
    bg: 'transparent'
    color: '#333333'
    height: 70
    use: 'Canonical full-track waveform — orange played region, grey unplayed, vertical playhead line.'
  waveform-mini:
    bg: 'transparent'
    color: '#333333'
    height: 30
    use: 'Compressed waveform inside feed-item rows.'
  waveform-comment-marker:
    bg: '#ff5500'
    color: '#ffffff'
    radius: '50%'
    height: 16
    width: 16
    use: 'Avatar-anchored comment dot on waveform timeline; click reveals comment.'
  card-feed-item:
    bg: '#ffffff'
    color: '#333333'
    radius: 4
    border: '1px solid #e5e5e5'
    padding: 16
    use: 'Default feed item — track artwork left, title + artist + waveform + actions right.'
  card-track-page:
    bg: '#ffffff'
    color: '#333333'
    radius: 4
    border: '1px solid #e5e5e5'
    use: 'Full track page — large artwork + title + 70px waveform + comments well below.'
  card-profile:
    bg: 'linear-gradient(180deg, var(--user-banner) 0%, #ffffff 280px)'
    color: '#333333'
    use: 'Profile hero — user-uploaded banner image fades into white card.'
  badge-pro:
    bg: '#ff5500'
    color: '#ffffff'
    radius: 2
    padding: '1px 4px'
    font: badge
    use: '"PRO" tag next to Pro creator names.'
  badge-go-plus:
    bg: '#7711d4'
    color: '#ffffff'
    radius: 2
    padding: '1px 4px'
    use: '"GO+" tag for Go+ subscribers.'
  badge-verified:
    color: '#0099ff'
    use: 'Blue checkmark glyph next to verified creator names.'
  badge-play-count:
    bg: 'rgba(0,0,0,0.6)'
    color: '#ffffff'
    radius: 2
    padding: '1px 4px'
    use: 'Translucent black play-count chip on track artwork.'
  comment-row:
    bg: '#f7f7f7'
    color: '#333333'
    radius: 4
    padding: '8px 12px'
    use: 'Comment in the comments well — avatar + username + comment-text + timestamp.'
  comment-anchored:
    bg: 'transparent'
    color: '#333333'
    use: 'Avatar bubble pinned to a waveform timestamp — visible on track-page waveform.'
  input-text:
    bg: '#ffffff'
    color: '#333333'
    radius: 3
    border: '1px solid #cccccc'
    height: 28
    padding: '0 12px'
    use: 'Default text input.'
  input-search:
    bg: '#ffffff'
    color: '#333333'
    radius: 3
    border: '1px solid #cccccc'
    height: 28
    padding: '0 12px 0 32px'
    use: 'Top-bar search with magnifier icon left.'
  input-comment:
    bg: '#ffffff'
    color: '#333333'
    radius: 3
    border: '1px solid #cccccc'
    height: 36
    padding: '8px 12px'
    placeholder-color: '#999999'
    use: '"Write a comment" input above comments well — focuses on click into waveform.'
  player-bar:
    bg: '#ffffff'
    color: '#333333'
    height: 50
    border-top: '1px solid #e5e5e5'
    use: 'Pinned bottom-of-viewport mini player — Play/Pause + transport + mini waveform + title + Like + volume + queue.'
  scrubber-mini:
    bg: '#cccccc'
    fill: '#ff5500'
    height: 3
    use: 'Mini scrubber inside player bar; full waveform replaces it on track page.'
  top-nav-bar:
    bg: '#ffffff'
    color: '#333333'
    height: 50
    border-bottom: '1px solid #e5e5e5'
    use: 'Persistent top nav — orange wordmark, Home / Stream / Library, search field, Upload, profile.'
  modal-dialog:
    bg: '#ffffff'
    color: '#333333'
    radius: 6
    shadow: '0 10px 30px rgba(0,0,0,0.2)'
    use: 'Settings, share dialogs.'
  toast:
    bg: '#333333'
    color: '#ffffff'
    radius: 3
    padding: '12px 16px'
    use: 'Confirmation — "Liked", "Reposted", "Added to Likes". Dark inverted, contrasts against page.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 300
  duration-waveform-fill: 60       # incremental waveform-fill update tied to playhead
  reduced-motion: 'respects prefers-reduced-motion: waveform-fill becomes step-update on second boundaries instead of frame-by-frame; comment-marker bounce is suppressed; like-heart pop becomes instant; toast fades instead of slides.'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1024
  wide: 1240

shadows:
  none: 'none'
  card-rest: 'none'
  card-hover: '0 2px 8px rgba(0,0,0,0.08)'
  modal: '0 10px 30px rgba(0,0,0,0.2)'
  popover: '0 4px 12px rgba(0,0,0,0.15)'
  ring: '0 0 0 2px #ff5500'

accessibility:
  contrast-text-on-bg: 12.6               # #333333 on #f2f2f2 — AAA
  contrast-text-strong-on-bg: 16.7        # #1f1f1f on #f2f2f2 — AAA
  contrast-text-subdued-on-bg: 5.4        # #666666 on #f2f2f2 — AA at body
  contrast-text-on-brand: 3.5             # white on #ff5500 — AA only for large text (18px+/bold) or 14px+/700
  focus-ring: '2px solid #ff5500 with 2px offset'
  reduced-motion-honored: true
  caption-track: 'no captions on most music; podcast tracks support transcripts'
  audio-description: 'audio is the content; player a11y emphasises keyboard control'

dark-mode: optional        # SoundCloud is light-default; some pro/premium pages use dark surfaces
---

## 1. Visual Theme & Atmosphere

SoundCloud is the audio-social outlier — the only major streaming-music brand that has stayed light-default for nearly 20 years. The canvas is a paper-grey `#f2f2f2` (a classic "off-white" warmer than `#fff` and more daylit than typical app greys), with cards floating above as `#ffffff` panels. This light-on-light layered architecture is rare in 2026 streaming and intentional: SoundCloud was born in 2007 as a creator's-audio-portfolio tool, and the paper-canvas metaphor — "this is your demo upload, presented like a manuscript" — has been preserved through every redesign.

The signature is the Orange. `#ff5500` is one of the most chromatically distinctive brand colours in tech — saturated, almost sunset, more red-orange than amber. It is rationed to: the wordmark, the played portion of every waveform, the playhead vertical line, the Play button, the Like-heart filled state, and the comment-anchor dots on the waveform timeline. Everywhere else is monochrome — soft black `#333333`, mid-grey `#666666`, light hairline `#e5e5e5`. The orange is wayfinding: wherever orange is, that is what you can play, like, or interact with.

The defining UI element is the **horizontal waveform**. Every track on SoundCloud renders as a 70px-tall stereo amplitude waveform — top half mirrored to the bottom half, pixels coloured according to playback state: orange `#ff5500` for played, grey `#999999` for unplayed, with a thin vertical orange line marking the current playhead position. Comments (which on SoundCloud are time-anchored to specific seconds in the track) appear as tiny avatar dots stuck to specific x-positions on the waveform. Hover any moment of a song and a tooltip shows the comment + commenter at that timestamp. This waveform-as-timeline-as-comment-thread is SoundCloud's most-imitated and most-distinctive single contribution to UI design.

Interstate, the brand's display sans (in use since 2013, replacing the older Trade Gothic), is a workhorse American-signage geometric. It runs heavy at the top (700 weight at 16–48px) and modest below (400, 12–14px). Tracking is neutral 0em — SoundCloud refuses the negative-tracked discipline of Spotify and Stripe, partly because Interstate's letterforms are wider than Inter or Circular and partly because the brand's lineage is signage, not editorial. Type is functional, not expressive.

Density is the third axis. The Stream feed (the "home" experience) renders 5–7 feed items above the fold on a 1024px display, each item a 760px-wide card with track artwork left + waveform + actions right. Each feed item carries the full waveform with comment markers, the Play/Like/Repost/Share/More action row, and a 2-line description. Below every card is the comments well — a vertically scrolling list of time-anchored comments. The page is information-dense but airy — cards are bordered (`1px #e5e5e5`) with no shadows at rest, separated by 16–24px gaps.

**Key Characteristics:**
- Light paper canvas `#f2f2f2` with white `#ffffff` floating cards — light-default, rare in modern streaming.
- Single voltage of brand orange `#ff5500` reserved for waveform-played, Play, Like, wordmark, and comment markers.
- The 70px-tall horizontal waveform is the defining UI element — orange/grey amplitude bars with vertical playhead line.
- Comments are time-anchored to waveform timestamps — avatar dots stick to seconds in the song.
- Interstate sans at 700 weight with **neutral 0em tracking** — workhorse American-signage geometric.
- Small 3px button radius — distinctive against modern 4–8px norms; signals legacy 2010s-era origin retained.
- Pinned 50px-tall bottom mini-player with mini-waveform scrubber persistent across navigation.
- Right-rail 230px sidebar with "Following / Charts / Stations / Trending Now".
- Toast confirmations are dark `#333333` against the light canvas — inverted contrast.
- Light-default; some Pro/Premium pages use dark `#333333` surfaces but they are out-of-product marketing.

## 2. Color Palette & Roles

### Primary
- **Paper Grey** (`#f2f2f2`): The defining canvas. Warmer than `#fff`, lighter than typical app greys — paper-portfolio metaphor from 2007 brand origin.
- **Card White** (`#ffffff`): Floating card surface above the paper canvas.
- **Soft Black** (`#333333`): Primary text. Not pure black — softer for long reading sessions.
- **SoundCloud Orange** (`#ff5500`): The brand's defining hue. Wordmark, Play, Like, waveform-played, playhead, comment markers.

### Brand & Light
- **Orange Hover** (`#ff6e1f`): Marginally brighter on pointer-over.
- **Orange Active** (`#cc4400`): Pressed state.
- **Orange Deep** (`#a83600`): Archived gradient terminus, legacy promo.
- **Display Strong** (`#1f1f1f`): Display headlines that demand maximum contrast.

### Accent
- **Repost Green** (`#5cd363`): Repost-arrow accent + verified-success.
- **Verified Blue** (`#0099ff`): Verified creator checkmark.
- **Go+ Purple** (`#7711d4`): Go+ subscriber-tier badge.
- **Info Blue** (`#3399ff`): Informational link blue (rare in product).

### Interactive
- **CTA Orange** (`#ff5500`): Primary action.
- **Outline Neutral** (`1px solid #cccccc` on transparent): Secondary action.
- **Active Outline** (`1px solid #ff5500` + `#ff5500` bg): Pressed Following / Liked state.
- **Disabled** (`#cccccc` text on `#f2f2f2` bg): Non-interactive control.

### Neutral Scale
- **Display Strong** (`#1f1f1f`): Display headlines, profile names.
- **Primary Text** (`#333333`): Body, track titles, comment text. Soft black.
- **Subdued** (`#666666`): "by Artist" subtitle, secondary metadata. AA at body.
- **Muted** (`#999999`): Tertiary captions, timestamps, unplayed waveform.
- **Disabled** (`#cccccc`): Disabled menu items, focused-input border, scrubber rail.
- **Border Default** (`#e5e5e5`): Card border, top-nav bottom border, divider.
- **Border Soft** (`#eeeeee`): Lighter divider, table-row separator.

### Surface & Borders
- **Surface Card** (`#ffffff`): Default card.
- **Surface Strong** (`#f7f7f7`): Hovered surface, comments well.
- **Surface Soft** (`#f8f8f8`): Alt band on long-scroll feeds.
- **Surface Pro** (`#333333`): Dark Pro/Premium feature band — out-of-product marketing.
- **Border Strong** (`#cccccc`): Focused input outline.

### Waveform Colors
- **Played** (`#ff5500`): Orange amplitude bars left of playhead.
- **Unplayed** (`#999999`): Grey amplitude bars right of playhead.
- **Buffered** (`#cccccc`): Optional indicator for downloaded-but-unplayed (rare display).
- **Hover** (`#ff8e62`): Lighter orange on hover-over a waveform peak.
- **Playhead** (`#ff5500`): Vertical 1px orange line marking current playback position.

### Shadow Colors
- **Card Hover** (`rgba(0,0,0,0.08)`): Soft drop on card hover — light shadows on light canvas need low opacity.
- **Modal** (`rgba(0,0,0,0.2)`): Heavier under dialogs.
- **Popover** (`rgba(0,0,0,0.15)`): Mid-weight under context menus.

### Semantic
- **Success** (`#5cd363`): Verified, upload-success.
- **Warning** (`#ffba00`): Processing, encoding-in-progress.
- **Danger** (`#cc0000`): Error, copyright-takedown red.
- **Info** (`#3399ff`): Informational link.

## 3. Typography Rules

### Font Family
- **Primary**: `"Interstate"` — display-and-text family by Tobias Frere-Jones (1993). Adopted by SoundCloud in 2013, replacing Trade Gothic. Fallback chain: `"Helvetica Neue", Helvetica, Arial, sans-serif`.
- **Mono**: `Menlo, Consolas, "Roboto Mono", SFMono-Regular, monospace` — used in dev-doc surfaces, embed-code copy boxes, never in player.
- **OpenType Features**: `tnum` on the metadata row so play counts, durations, and timestamps align — particularly important on the waveform's start/end time labels.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display XL | Interstate | 48px | 700 | 1.1 | -0.01em | -- | Marketing landing hero |
| Display LG | Interstate | 32px | 700 | 1.15 | 0 | -- | Profile page name |
| Display MD | Interstate | 24px | 700 | 1.2 | 0 | -- | Track title in player |
| Display SM | Interstate | 20px | 700 | 1.3 | 0 | -- | Section header "Tracks I'm following" |
| Title MD | Interstate | 16px | 700 | 1.3 | 0 | -- | Track title in feed item |
| Title SM | Interstate | 14px | 700 | 1.3 | 0 | -- | Sidebar nav label, button label |
| Subtitle | Interstate | 14px | 400 | 1.3 | 0 | -- | "by Artist" beneath track title |
| Body MD | Interstate | 14px | 400 | 1.5 | 0 | -- | Default body, modal text |
| Body SM | Interstate | 12px | 400 | 1.4 | 0 | -- | Secondary metadata |
| Button MD | Interstate | 12px | 700 | 1.0 | 0 | -- | Like / Repost / Share / Follow |
| Button LG | Interstate | 14px | 700 | 1.0 | 0 | -- | Primary CTA |
| Caption | Interstate | 11px | 400 | 1.3 | 0 | -- | Timestamps, fine print |
| Metadata | Interstate | 12px | 400 | 1.3 | 0 | tnum | Play count, duration |
| Waveform Time | Interstate | 11px | 700 | 1.0 | 0 | tnum | Time labels at start/end of waveform |
| Badge | Interstate | 10px | 700 | 1.0 | 0.04em | -- | Uppercase "PRO", "GO+", "VERIFIED" |
| Nav Link | Interstate | 14px | 400 | 1.0 | 0 | -- | Top nav, sidebar links |
| Comment Text | Interstate | 12px | 400 | 1.4 | 0 | -- | Comment body anchored to waveform |

### Principles
- **Workhorse signage type, not editorial.** Interstate is Tobias Frere-Jones's American highway-signage geometric (1993) — wider letterforms than Helvetica or Inter. SoundCloud uses it because it scans at small sizes, not because it's expressive.
- **Neutral tracking, no negative.** SoundCloud refuses tight-tracked display. 0em across all sizes. The wider Interstate letterforms already feel snug; tightening would cramp them.
- **Tabular numerals on time and counts.** Waveform time labels (0:00 / 4:32), play counts (1.2K listens), and durations all use `tnum` so columns align in feed scrolling.
- **One family, no italics.** Interstate ships italic and condensed cuts but they are essentially never used in product. Single roman, single voice.
- **Display sizes stop at 700.** No 900-weight black even at 48px display — SoundCloud's loudest weight is 700, which keeps the typography quieter than Spotify or Wrapped-style streaming.
- **Sentence case for everything.** Section headers, modal titles, button labels — all "Tracks I'm following", not "TRACKS I'M FOLLOWING". Uppercase belongs only to small badges.

## 4. Component Stylings

### Buttons

**Primary (Orange Solid)**
- Background: `#ff5500`. Text: `#ffffff`. Radius: `3px`. Padding: `0 12px`. Height: `28px`. Font: Interstate 12px / 700.
- Hover: `#ff6e1f`.
- Active: `#cc4400`.
- Use: "Sign up", "Try Pro", "Upload", "Send" (in comment input).

**Primary Large**
- Background: `#ff5500`. Text: `#ffffff`. Radius: `3px`. Padding: `0 24px`. Height: `38px`. Font: 14px / 700.
- Use: Marketing landing CTA — slightly taller variant.

**Outline (Neutral)**
- Background: `transparent`. Text: `#333333`. Border: `1px solid #cccccc`. Radius: `3px`. Padding: `0 12px`. Height: `28px`. Font: 12px / 700.
- Hover: bg `#f7f7f7`.
- Use: Follow, Share, Repost, Edit. Outlined neutral, not orange.

**Outline Active**
- Background: `#ff5500`. Color: `#ffffff`. Border: `1px solid #ff5500`.
- Use: "Following" state (after pressing Follow), "Liked" state (after pressing Like).

**Text**
- Background: `transparent`. Color: `#333333`. No border. Padding: `0 8px`. Height: `28px`.
- Hover: text `#1f1f1f`.
- Use: Cancel, See All, Show More.

**Icon (Default)**
- Background: `transparent`. Color: `#666666`. No border. Size: `28 × 28`.
- Hover: color `#333333`.
- Use: Like, Repost, Share, More — feed-item action row.

**Icon (Active)**
- Color: `#ff5500`. Glyph filled state.
- Use: Liked / Reposted (post-press state).

**Play Circle (Translucent Overlay)**
- Background: `rgba(0,0,0,0.5)`. Color: `#ffffff`. Radius: `50%`. Size: `50 × 50`.
- Use: Floating Play button overlaid on track artwork in feed item.

**Play Circle (Solid Orange)**
- Background: `#ff5500`. Color: `#ffffff`. Radius: `50%`. Size: `70 × 70`.
- Use: Big Play on track-page hero — paired with the artwork-flush waveform.

### Waveform

**Full Track Waveform**
- Height: `70px`. Background: `transparent`.
- Top half: amplitude peaks pointing up. Bottom half: mirrored. Both halves coloured per playback state.
- Played region (left of playhead): `#ff5500` orange.
- Unplayed region (right): `#999999` grey.
- Playhead: `1px solid #ff5500` vertical line.
- Hover: 1px-wide vertical light-orange `#ff8e62` highlight tracks the cursor with tooltip showing timestamp + comment if any.

**Mini Waveform (Feed-Item)**
- Height: `30px`. Same colour conventions, smaller amplitude resolution.
- Use: Inline waveform inside each feed-item card.

**Comment Marker**
- A 16×16 circular avatar of the commenter, anchored at the timestamp x-position on the waveform. On hover, expands and shows the comment text in a tooltip above.
- Use: Time-anchored comments — SoundCloud's defining social mechanic.

**Time Labels**
- 11px / 700 `#333333` `tnum` digits at the start (0:00) and end (4:32) of the waveform, anchored just below the bottom-half mirror.

### Cards & Tiles

**Feed Item**
- Background: `#ffffff`. Color: `#333333`. Radius: `4px`. Border: `1px solid #e5e5e5`. Padding: `16px`.
- Layout: 100×100 track artwork left, content right (title 16/700, "by Artist" 14/400, mini-waveform, action row Like/Repost/Share/More).
- Hover: shadow `0 2px 8px rgba(0,0,0,0.08)` fades in over 200ms.

**Track Page Card**
- Background: `#ffffff`. Color: `#333333`. Radius: `4px`. Border: `1px solid #e5e5e5`.
- Layout: large 240×240 artwork left, hero content right (title 24/700, artist 14/400, full 70px waveform, transport row, social-action row, description text).
- Comments well sits beneath, 760px wide.

**Profile Card**
- Background: `linear-gradient(180deg, var(--user-banner) 0%, #ffffff 280px)`.
- User-uploaded banner image (1240×260 typical) fades into white card content — bio, follower count, top tracks.

### Badges, Tags, Indicators

**PRO Tag**
- Background: `#ff5500`. Color: `#ffffff`. Radius: `2px`. Padding: `1px 4px`. Font: 10/700 uppercase.
- Use: Inline next to Pro creator names.

**GO+ Tag**
- Background: `#7711d4`. Color: `#ffffff`. Radius: `2px`. Padding: `1px 4px`.
- Use: Go+ subscriber-tier indicator.

**Verified**
- Color: `#0099ff`. Glyph: blue checkmark.
- Use: Inline next to verified-creator names.

**Play Count Chip**
- Background: `rgba(0,0,0,0.6)`. Color: `#ffffff`. Radius: `2px`. Padding: `1px 4px`. Font: 11/400 `tnum`.
- Use: Translucent black chip on track artwork showing "1.2K plays" or "245K listens".

**Like / Repost Counter**
- Inline 12/400 `#666666` count next to icon button. Uses shorthand (1.2K, 14M).

### Comments

**Comment Row (Comments Well)**
- Background: `#f7f7f7`. Color: `#333333`. Radius: `4px`. Padding: `8px 12px`.
- Layout: 32×32 avatar + username (12/700) + timestamp link (12/400 `#999999` "@2:14") + comment text (12/400) + Reply / Like.

**Comment (Anchored)**
- Avatar bubble (16×16) pinned to a waveform x-position at the timestamp. Hovering reveals the comment in a 240px-wide tooltip with the avatar + username + comment text.

**Comment Input**
- Background: `#ffffff`. Color: `#333333`. Radius: `3px`. Border: `1px solid #cccccc`. Height: `36px`. Padding: `8px 12px`.
- Placeholder: `#999999` "Write a comment".
- On focus from a waveform timestamp click, the placeholder updates to "Write a comment at 2:14".

### Inputs & Forms

**Text Input**
- Background: `#ffffff`. Color: `#333333`. Radius: `3px`. Border: `1px solid #cccccc`. Height: `28px`. Padding: `0 12px`.
- Focus: border `#ff5500`.

**Search Input (Top Bar)**
- Background: `#ffffff`. Color: `#333333`. Radius: `3px`. Border: `1px solid #cccccc`. Height: `28px`. Padding: `0 12px 0 32px`.
- Magnifier icon `#999999` left.

**Toggle Switch**
- Off: `#cccccc` track. On: `#ff5500` track.
- Knob: `#ffffff` 14×14 circle.

### Navigation

**Top Nav Bar**
- Background: `#ffffff`. Color: `#333333`. Height: `50px`. Border-bottom: `1px solid #e5e5e5`.
- Layout: orange wordmark left, Home / Stream / Library nav links, central search, right cluster: Upload / Try Pro / profile menu.

**Sidebar (Right Rail)**
- Background: transparent on `#f2f2f2`. Width: `230px`.
- Sections: "Following" (avatars + names), "Charts" (Top 50 / New & Hot), "Stations", "Trending Now".

### Player

**Mini Player Bar (Persistent Bottom)**
- Background: `#ffffff`. Color: `#333333`. Height: `50px`. Border-top: `1px solid #e5e5e5`.
- Layout: 32×32 thumb left, transport (back/play/forward) + scrubber + time labels centre, title + artist text, like / queue / volume / device right.
- Mini scrubber: `#cccccc` rail with `#ff5500` fill.
- Persists across all navigation; collapsing the player to background mute is a context-menu option.

### Modals & Toasts

**Modal Dialog**
- Background: `#ffffff`. Color: `#333333`. Radius: `6px`. Padding: `24px`.
- Shadow: `0 10px 30px rgba(0,0,0,0.2)`.

**Toast (Dark, Inverted)**
- Background: `#333333`. Color: `#ffffff`. Radius: `3px`. Padding: `12px 16px`.
- Use: "Liked", "Reposted", "Added to Likes", "Track URL copied". Dark inverted because the page is light — high-contrast confirmation.

## 5. Layout Principles

### Spacing System
- Base: 4px. Scale: 4 / 8 / 10 / 12 / 16 / 20 / 24 / 30 / 36 / 48 / 60 / 80 / 120.
- Note the 10/30/60 outliers — historic SoundCloud CSS uses `0.625rem` (10px) and `1.875rem` (30px) tokens not present in modern design systems.
- Card gap (between feed items): 16px.
- Section gap: 30px between major modules.

### Grid & Container
- Page width: 1240px max.
- Content centre column (Stream): 760px.
- Right rail: 230px sticky.
- Left margin: 250px reserved for top-nav alignment.
- Track page: 1100px max with 240px artwork + 760px content.

### Whitespace Philosophy
SoundCloud's whitespace is generous around cards but tight within them. Cards have 16px internal padding and 16–24px inter-card gaps; content within cards uses 8px gaps between metadata rows. The page reads as a publication — well-spaced, light, but information-dense.

### Section Cadence
Stream feed:
- Top nav (50px, persistent)
- "Stream" heading 24/700
- Filter pills (All / Reposts / Tracks / Albums)
- Feed items (5–7 above fold)
- Right-rail (Charts, Following, Stations, Trending Now) sticky alongside

Track page:
- Top nav (50px)
- Track artwork hero card (240×240 art + waveform + actions)
- Description text
- Comments well (vertical list of all comments, time-anchored sub-list)
- "Related tracks" rail
- Footer

There is light/dark alternation only on Pro/Premium feature bands — most of the product is light.

## 6. Shapes & Radius Scale

- **None** (`0px`): Waveform — flush peaks, no rounding.
- **Micro** (`2px`): Play-count badge, PRO/GO+ tags.
- **Standard** (`3px`): Buttons, inputs, feed cards — the workhorse radius. **3px not 4px** is distinctive — a small 1-pixel difference from the modern norm that signals SoundCloud's 2010s-era CSS lineage retained.
- **Comfortable** (`4px`): Card content area, input borders.
- **Relaxed** (`6px`): Modal corners.
- **Featured** (`8px`): Rare; some marketing-landing card variants.
- **Pill** (`9999px`): Filter pills, tag chips.

The 3px button radius is a quiet brand signal — most modern brands moved to 4px or 8px after 2018; SoundCloud retained 3px from the 2013 redesign and hasn't broken the convention. Designers who replicate the brand often default to 4px out of muscle memory; the brand-correct value is 3px.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (flat) | No shadow, no border | Page background, default sidebar |
| 1 (hairline) | 1px `#e5e5e5` border | Card border, top-nav bottom border, divider |
| 2 (hover) | `0 2px 8px rgba(0,0,0,0.08)` | Card hover lift |
| 3 (modal) | `0 10px 30px rgba(0,0,0,0.2)` | Settings dialog, share dialog |
| 4 (popover) | `0 4px 12px rgba(0,0,0,0.15)` | Context menu, queue popover |
| 5 (toast) | dark `#333333` bg with no shadow | Confirmation toast |

### Shadow Philosophy
On a light `#f2f2f2` canvas, shadows must be low-opacity (`0.08–0.2`) and tightly contained — heavy shadows on a light canvas feel oppressive. SoundCloud uses borders rather than shadows as the primary depth signal: the 1px `#e5e5e5` card border is what separates content from canvas at rest, and the `0 2px 8px rgba(0,0,0,0.08)` hover-shadow is a soft addition, not a replacement. There is no brand-tinted shadow ever — orange is reserved for the brand. The dark inverted toast is SoundCloud's depth-via-contrast move: against a light page, a dark `#333333` toast reads with maximum salience.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — fades, opacity, simple slides.
- **Out**: `cubic-bezier(0, 0, 0.2, 1)` — incoming elements (toast slide-in, modal in).
- **Spring**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — like-heart pop, comment-marker bounce.

### Duration Buckets
- **Fast**: 100ms — colour shifts, hover-state colour transitions.
- **Standard**: 200ms — modal fade-in, toast slide-in.
- **Slow**: 300ms — page-route swap.
- **Waveform fill**: 60ms — incremental waveform-fill update tied to playhead position.

### Per-Component Recipes
- **Primary CTA hover**: Background `#ff5500 → #ff6e1f`, 100ms ease-standard.
- **Card hover**: shadow fade-in `0 → 0 2px 8px rgba(0,0,0,0.08)` over 200ms.
- **Like-heart pop**: Icon scales `1.0 → 1.3 → 1.0` with spring ease over 300ms; color flips outline → `#ff5500` filled at midpoint.
- **Repost-arrow rotation**: Rotates 180° on press over 300ms with spring ease.
- **Waveform progress fill**: Played-region orange edge advances frame-by-frame at 60fps tied to playhead. Time-label digits update on second boundaries.
- **Comment-marker bounce**: On hover-over a marker, avatar scales `1.0 → 1.2 → 1.0` over 200ms with spring ease + tooltip fade-in.
- **Modal in**: 200ms ease-out, scale `0.96 → 1.0` + opacity `0 → 1`.
- **Toast slide-in**: From below the player bar, slides up + opacity over 200ms; auto-dismiss after 2s.

### Page Transitions
SoundCloud's app is a single-page React surface. Page changes do NOT close the player — the mini player bar persists across all navigation and the currently-playing track keeps streaming. This is intentional: SoundCloud is a "background-listening" service first; visual navigation should never interrupt audio.

### Reduced Motion
`prefers-reduced-motion: reduce` collapses:
- Waveform progress fill → step-update on second boundaries instead of frame-by-frame.
- Like-heart pop → instant color swap.
- Comment-marker bounce → no scale on hover, tooltip still appears.
- Repost rotation → instant icon swap.
- Toast slide-in → opacity-only fade.
- Modal scale-in → opacity-only.

## 9. Accessibility & A11y

### Contrast Pairs
- Soft black `#333333` on canvas `#f2f2f2`: **12.6:1** — AAA at all sizes.
- Display strong `#1f1f1f` on canvas: **16.7:1** — AAA.
- Subdued `#666666` on canvas: **5.4:1** — AA at body sizes.
- Muted `#999999` on canvas: **2.85:1** — Fails. Used only for unplayed waveform decoration and timestamps where text is supplementary.
- White `#ffffff` on brand orange `#ff5500`: **3.5:1** — Fails AA at body sizes; passes AA only for ≥18px regular or ≥14px / 700 bold. SoundCloud uses 12px / 700 button labels, which scrapes through.

### Focus Indicators
- Default focus: `2px solid #ff5500` outline with `2px` offset on all interactive controls.
- On orange surfaces: focus uses `2px solid #ffffff`.
- Tab order: top nav left-to-right → main feed top-to-bottom → right-rail top-to-bottom → player bar.

### ARIA Patterns
- Waveform: `role="slider" aria-label="Track playback" aria-valuemin="0" aria-valuemax="[duration in seconds]" aria-valuenow="[current time]" aria-valuetext="2 minutes 14 seconds"`.
- Comment markers: `role="button" aria-label="Comment by [user] at 2:14"`.
- Player: `role="region" aria-label="Player"` with full keyboard shortcuts.
- Feed: `role="feed"` with `aria-busy` toggling during pagination.
- Modal: `role="dialog" aria-modal="true"` with focus trap.

### Keyboard Navigation
- Space: play/pause from any focus.
- L: like current track.
- R: repost current track.
- Arrow Left/Right: seek 5s.
- Arrow Up/Down: volume.
- M: mute.
- Tab: move through feed; Shift+Tab reverses.
- Enter: open focused track.
- ESC: close modal.

### Screen Reader Hints
- Feed items: `aria-label="[Track title] by [Artist]. [Play count] plays. Posted [time ago]."`
- Waveform `aria-valuetext` updates every second as playback advances.
- Comments well: `role="region" aria-label="Comments on [track]"`.

### Reduced Motion
Honoured. See §8.

## 10. Responsive Behavior

### Breakpoints
| Token | Min | Use |
|-------|-----|-----|
| mobile | 0px | Single column, right rail collapses below feed |
| tablet | 768px | Single column with right rail collapsed to drawer |
| desktop | 1024px | Two-column with sticky right rail |
| wide | 1240px | Max page width, full layout |

### Touch Targets
- 44×44 minimum on touch devices. Action-row icon buttons gain 16px hit-area padding on mobile.
- Waveform comment markers grow to 24×24 on touch devices for tap accuracy.

### Collapsing Strategy
- **Right rail**: Slides into a drawer at `< 1024px`.
- **Top nav**: Search collapses to icon-only at `< 768px`; nav links go into hamburger menu.
- **Player bar**: Condenses to track-thumb + play/pause + scrubber at narrow viewports.
- **Feed item**: Track artwork moves above title on mobile (column layout), waveform spans full width.

### Image Behavior
- Track artwork: 100w/240w/500w via `srcset`. Always 1:1 aspect.
- Profile banner: 1240×260 source, served as 480w/960w/1240w; 240px tall on mobile, 260px on desktop.
- Comment-marker avatars: 16w/32w (1x/2x).

### Container Queries
Used on the right-rail Charts widget — track-list rows condense to artist-name-only on narrow rail widths.

## 11. Content & Voice

### Tone
SoundCloud's voice is **creator-first, casual, and underground**. The brand grew from underground music communities — bedroom producers, mixtape rappers, podcasters — and the copy retains that DIY casualness. No "We believe...", no enterprise-pitch language. Pages address creators directly ("Upload your track", "Reach more listeners", "Connect with your fans").

### Microcopy Patterns
- **Primary CTA**: "Sign up", "Try Pro", "Upload", "Send" (in comment).
- **Social actions**: "Like", "Repost", "Share", "Add to Playlist", "Follow".
- **Confirmation toast**: "Liked", "Reposted", "Added to your Likes", "Track URL copied".
- **Empty Stream**: "Follow some people to get started" + suggested-creator carousel.
- **Empty Comments**: "Be the first to write a comment."
- **Upload progress**: "Encoding..." → "Processing..." → "Track is now ready to share."
- **Pro upsell**: "Reach more listeners with SoundCloud Pro."
- **Copyright takedown**: "This track has been removed due to a copyright claim. Learn more."
- **Geo-block**: "Sorry, this track is unavailable in your country."

### Empty States
- Empty Stream: redirects to "Discover" with suggested-creator carousel and "Follow some people to get started".
- Empty Likes: "Like some tracks to see them here."
- Empty Profile (no uploads): "Upload your first track" CTA prominent.
- Empty Search: recent searches + "Browse genres" tile grid.

### CTA Verb Conventions
- "Like" — toggle on/off, never "Save".
- "Repost" — re-share to your own followers, with optional caption.
- "Share" — outbound URL share.
- "Follow" — for users.
- "Add to Playlist" — explicit.
- "Buy" / "Download" — when creator allows; never "Purchase".
- "Pro" / "Try Pro" / "Upgrade to Pro" — paid tier upsell verbs.

## 12. Dark Mode & Theming

SoundCloud is **light-default**. The light paper-canvas metaphor has been preserved through every redesign since 2007. There is no dark-mode toggle in the consumer product.

A handful of marketing surfaces (the Pro / Pro Unlimited / SoundCloud for Artists landing pages) use dark `#333333` bands as feature wells — but these are out-of-product, intended to differentiate the paid-tier story from the free-tier consumer surface.

If theming were to be added (it has not, in 18+ years), the canvas would lift to `#1a1a1a`, brand orange would shift to `#ff7a3d` (lighter orange) to retain AA contrast on dark, and the waveform unplayed colour would lift to `#666666` for legibility on dark surfaces. But no public design has done this.

**Dark Pro Band Token Swap (out-of-product marketing only):**
- `bg`: `#f2f2f2` → `#333333`
- `surface`: `#ffffff` → `#444444`
- `text`: `#333333` → `#ffffff`
- `border`: `#e5e5e5` → `#444444`
- `brand`: `#ff5500` (unchanged — works on both)

## 13. Lineage & Influences

SoundCloud's visual lineage is two-streamed.

**Audio editing software (Audacity, Pro Tools, Logic).** The horizontal stereo waveform display was lifted directly from desktop audio editors — these tools rendered amplitude waveforms as the canonical visualisation of an audio file from the late 1990s onward. SoundCloud was the first consumer-web product to make the waveform interactive, scrubbable, and comment-able. The orange/grey played/unplayed convention is a direct adaptation of Pro Tools' selection-highlight metaphor.

**Web-2.0 social blogs (Tumblr, early Twitter).** The feed-item card with avatar + content + action row (Like/Repost/Share/Comment), and the time-anchored comment thread, are direct descendants of 2007–2010 social-blogging UIs. SoundCloud's "Repost" verb is a deliberate riff on Tumblr's "Reblog".

**Signage typography.** Interstate is a highway-signage typeface, and SoundCloud's choice in 2013 was deliberately anti-editorial — a workhorse type that wouldn't compete with creator track titles for attention. This contrasts sharply with Spotify (Circular, geometric-humanist) and Apple Music (SF Pro, optical-Apple-system). SoundCloud chose readability over expression.

What SoundCloud rejects: dark default, negative-tracked display, magazine-style typographic hierarchy, ornament. The brand is unfussy.

**Influences:**
- **Pro Tools / Audacity** — horizontal stereo waveform metaphor. https://www.avid.com/pro-tools
- **Tumblr** — feed card + reblog/repost mechanic ancestor. https://www.tumblr.com
- **Tobias Frere-Jones / Interstate (1993)** — display typography lineage. https://frerejones.com
- **Twitter (early)** — chronological feed and quote-share patterns.
- **Last.fm** — music-social precursor with track-comment culture.

## 14. Do's and Don'ts

**Do:**
- Use `#f2f2f2` paper canvas, not pure white — the warmth is brand signature.
- Reserve orange `#ff5500` for waveform-played, Play, Like (filled), wordmark, and comment markers.
- Render every track as a 70px-tall horizontal stereo waveform with orange-played + grey-unplayed + vertical playhead.
- Anchor comments to waveform timestamps as 16×16 avatar dots.
- Use Interstate at 700 weight with neutral 0em tracking — workhorse signage type, not editorial.
- Keep button radius at 3px — the legacy 2013 convention; designers default to 4px out of habit.
- Use `tnum` on waveform time labels, play counts, and durations.
- Persist the 50px mini player bar across all navigation — never tear down audio.
- Render confirmation toasts as dark `#333333` against the light page — inverted contrast for salience.
- Use `1px #e5e5e5` borders as the primary depth signal — shadows are secondary on light canvases.
- Honour `prefers-reduced-motion`: waveform fill becomes step-update, no like-heart pop, no comment bounce.

**Don't:**
- Don't apply negative tracking to display sizes — Interstate is wide and tightening cramps it.
- Don't use dark canvas as the default — SoundCloud is light-default in product.
- Don't put orange anywhere except sanctioned places (waveform, Play, Like, wordmark, comment markers).
- Don't use 4px button radius — the brand value is 3px. The 1-pixel difference is a brand signal.
- Don't replace the waveform with a generic linear scrubber — the waveform IS the brand.
- Don't render comments as a flat list — they must remain time-anchored to waveform timestamps.
- Don't use Interstate Italic — the cut exists but is essentially never used.
- Don't pad cards generously — feed-density is intentional.
- Don't tear down the player on navigation — audio continuity is sacred.
- Don't use heavy shadows on cards — light-canvas + light-shadow is the brand's depth philosophy.
- Don't pair Interstate with a serif display companion — single-family voice.
- Don't centre-align feed cards — left-aligned, always; right-rail is secondary metadata.

## 15. Agent Prompt Guide

### Quick Color Reference
- Canvas: `#f2f2f2`
- Card White: `#ffffff`
- Brand Orange: `#ff5500`
- Orange Hover: `#ff6e1f`
- Soft Black Text: `#333333`
- Subdued: `#666666`
- Muted: `#999999`
- Border: `#e5e5e5`
- Waveform Played: `#ff5500`
- Waveform Unplayed: `#999999`

### Example Component Prompts
1. "Create a SoundCloud-style waveform — 70px tall, horizontal stereo amplitude bars (top half + mirrored bottom half), played region left of playhead in orange `#ff5500`, unplayed region right in grey `#999999`, 1px-wide `#ff5500` vertical playhead line at current position, 11px / 700 `tnum` time labels '0:00' and '4:32' anchored at start and end."
2. "Design a SoundCloud feed item — `#ffffff` card with `1px solid #e5e5e5` border, 4px radius, 16px padding; 100×100 track artwork left, content right with title (16/700 `#333333`), 'by [Artist]' (14/400), 30px mini-waveform with comment markers, action row Like/Repost/Share/More with 12/700 counter labels in `#666666`."
3. "Build a SoundCloud comment marker — 16×16 circular avatar of the commenter pinned to a specific x-position on the waveform corresponding to the timestamp; on hover scales to 24×24 with spring ease over 200ms and reveals a tooltip above showing avatar + username + comment text (240px wide, dark `#333333` bg, white text, 12/400 body)."
4. "Render a SoundCloud Like button — 28×28 transparent icon button, default heart-outline in `#666666`, hover state `#333333`; on press flips to filled heart in brand orange `#ff5500` with a scale `1.0 → 1.3 → 1.0` spring-ease pop over 300ms; the count next to it updates in 12/400 `#666666` with 1.2K shorthand."
5. "Create a SoundCloud track-page hero — 240×240 artwork left, 76px-tall card right with title (24/700 `#333333`), 'by [Artist]' (14/400), full 70px waveform with comment markers, transport row, Like/Repost/Share/Add to Playlist/More action row, all on `#ffffff` card with `1px solid #e5e5e5` border and 4px radius."
6. "Build a SoundCloud bottom mini player — pinned 50px tall `#ffffff` strip across viewport bottom with `1px solid #e5e5e5` top border; 32×32 thumb left, transport (back/play/forward), mini scrubber (`#cccccc` rail with `#ff5500` fill) with `tnum` time labels, title + artist 14/400 `#333333`, like / queue / volume / device cluster right; persists across all navigation."

### Iteration Guide
1. **Don't tighten the tracking.** SoundCloud's display is 0em neutral — tightening it makes Interstate feel cramped.
2. **3px not 4px.** If buttons feel slightly off-brand, the radius is wrong — it's 3px, the legacy 2013 value.
3. **Waveform is the page.** If the track page feels generic, the waveform isn't dominant enough — make it 70px tall and full-width within the content column.
4. **Anchor the comments.** Comments aren't a flat list — they're time-stamped to the waveform. If they're shown as a list, the marker dots are missing.
5. **Light, not dark.** If the canvas feels off, swap to `#f2f2f2` paper grey — never pure white, never dark.
6. **Border, not shadow.** Cards separate from canvas via `1px #e5e5e5` border at rest. Shadows fade in only on hover.
7. **Ration the orange.** If orange is anywhere except waveform-played, Play, Like, wordmark, audit and remove.
8. **Toast goes dark.** If a confirmation toast looks invisible, it's the wrong contrast — the toast is `#333333` against the light page, not white-on-orange.
