---
name: Twitch
tagline: Purple `#9146ff` on `#0e0e10` canvas with Inter — the live-streaming UI built around chat, raids, and gaming density.
author: webdesignhot
source_url: https://twitch.tv
spec: design.md/v1.5
quality: curated
featured: false
categories: [media, social]
tags: [dark, bold, sans, dense, gaming, live, chat]
preview_swatch: ['#0e0e10', '#9146ff', '#efeff1']
related: [discord, reddit, youtube]
description: 'Twitch is the canonical live-streaming UI: a near-black `#0e0e10` charcoal canvas, the unmistakable Twitch Purple `#9146ff` rationed for the Follow button, the LIVE badge, and brand wordmark, and Inter at 600 weight carrying display headlines with neutral 0em tracking. The page reads as a control room — a 16:9 video player flanked by a real-time chat column, channel-card carousel rails for "Live channels we think you''ll like", a 240px left-rail of followed channels, and a persistent top bar with the magenta Get Bits CTA. Type stays utilitarian (no negative tracking), buttons are 4px-radius rectangles, and purple is rationed so every "Follow" or "Subscribe" reads as the only action that matters in the moment.'

colors:
  bg: '#0e0e10'                    # canvas — Twitch deepest charcoal
  bg-alt: '#18181b'                # secondary panel surface, content area
  bg-deep: '#000000'                # video player surface
  surface: '#1f1f23'                # card default, sidebar item rest
  surface-strong: '#26262c'         # card hover, sidebar selected
  surface-soft: '#18181b'           # alt row band, content panel
  surface-elevated: '#26262c'       # popover, modal floor
  surface-card: '#1f1f23'           # channel/category tile rest
  surface-chat: '#1f1f23'           # chat panel background
  surface-chat-hover: '#26262c'     # chat message hover
  text: '#efeff1'                   # ink — off-white on charcoal (signature, not pure white)
  text-strong: '#ffffff'            # display only
  text-base: '#efeff1'              # primary body (warm off-white)
  text-alt: '#adadb8'               # secondary metadata, viewer count
  text-muted: '#898997'             # tertiary captions, timestamps
  text-link: '#bf94ff'              # link purple (lighter than brand for legibility)
  text-disabled: '#53535f'
  brand: '#9146ff'                  # Twitch Purple — only purple in the system
  brand-hover: '#a970ff'            # marginally brighter on hover
  brand-active: '#772ce8'           # press / pointer-down
  brand-deep: '#5c16c5'             # archived deep variant, gradients
  brand-2024: '#9146ff'             # post-2019 Twitch purple
  brand-classic: '#6441a4'          # legacy 2011–2019 Twitch purple
  on-brand: '#ffffff'
  accent-magenta: '#fab4ff'         # Bits/Cheers accent, lighter purple
  accent-cheer-red: '#ff4248'       # 1000-bit cheer, gemstone red
  accent-cheer-orange: '#f5b53a'    # 100-bit cheer
  accent-cheer-blue: '#4d8eff'      # 1-bit cheer
  accent-cheer-green: '#00d6cc'     # 10-bit cheer
  accent-cheer-purple: '#9c3eff'    # 5000-bit cheer
  border: '#3a3a3d'                 # default low-contrast hairline
  border-soft: '#26262c'            # divider between rows
  border-strong: '#53535f'          # focused input outline
  scrim-card: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)'
  shadow-card: 'rgba(0,0,0,0.5)'
  shadow-modal: 'rgba(0,0,0,0.76)'
  success: '#00f593'                # online/live indicator green
  warning: '#ffd84a'                # mod-tools warning
  danger: '#eb0400'                 # ban/timeout red, error
  danger-text: '#ff4d4d'            # error text body
  info: '#4d8eff'                   # informational blue
  live-indicator: '#eb0400'         # red LIVE pulsing dot
  live-pill-bg: '#eb0400'           # red LIVE rectangular tag
  follow-purple: '#9146ff'          # primary Follow button
  subscribe-tier-1: '#9146ff'       # tier 1 sub
  subscribe-tier-2: '#3ea6f5'       # tier 2 sub
  subscribe-tier-3: '#f5b53a'       # tier 3 sub gold
  highlight-mod: '#00ad03'          # mod chat name colour
  highlight-vip: '#e005b9'          # VIP chat name colour
  highlight-broadcaster: '#eb0400'  # broadcaster chat name colour
  highlight-prime: '#3ea6f5'        # Prime sub chat indicator

typography:
  display:
    family: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['cv01', 'cv11', 'tnum']
  body:
    family: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: 'Menlo, Consolas, "Roboto Mono", SFMono-Regular, monospace'
    weights: [400, 600]
  scale:
    display-xl:        { size: 36, weight: 700, lineHeight: 1.2,  tracking: '-0.01em', family: display, notes: 'Marketing landing hero' }
    display-lg:        { size: 28, weight: 700, lineHeight: 1.2,  tracking: '0',       family: display, notes: 'Channel/category page header' }
    display-md:        { size: 20, weight: 600, lineHeight: 1.3,  tracking: '0',       family: display, notes: 'Section header "Live channels"' }
    display-sm:        { size: 18, weight: 600, lineHeight: 1.3,  tracking: '0',       family: display, notes: 'Stream title above player' }
    title-md:          { size: 16, weight: 600, lineHeight: 1.3,  tracking: '0',       family: display, notes: 'Card title, panel title' }
    title-sm:          { size: 14, weight: 600, lineHeight: 1.3,  tracking: '0',       family: display, notes: 'Sidebar nav label, channel name' }
    body-md:           { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',       family: body, notes: 'Default body, chat message' }
    body-sm:           { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Secondary metadata, "12.3K viewers"' }
    chat-message:      { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Chat body — must be tight to fit messages per inch' }
    chat-username:     { size: 13, weight: 700, lineHeight: 1.4,  tracking: '0',       family: body, notes: 'Bold chat username, coloured via user-set hue' }
    button-md:         { size: 13, weight: 600, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Follow / Subscribe / Send' }
    button-lg:         { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Marketing CTA' }
    caption:           { size: 12, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, notes: 'Disclosures, timestamps' }
    metadata:          { size: 13, weight: 400, lineHeight: 1.3,  tracking: '0',       family: body, opentype: ['tnum'], notes: 'Viewer count, stream duration, follower count' }
    badge:             { size: 11, weight: 600, lineHeight: 1.0,  tracking: '0.04em',  family: body, transform: uppercase, notes: '"LIVE", "PARTNER", "AFFILIATE"' }
    nav-link:          { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0',       family: body, notes: 'Top nav, sidebar links' }
    code:              { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',       family: mono, notes: 'Stream-key surface, dev-doc inline code' }
    emote-label:       { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.02em',  family: body, notes: 'Emote-picker category label' }

radius:
  none: 0           # video player corners — flush
  micro: 2          # LIVE badge, viewer-count chip
  sm: 4             # default button, input, card — workhorse radius
  md: 6             # modal corners
  lg: 8             # rare; some marketing cards
  pill: 9999        # tag pills, follow indicator

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

layout:
  page-width: 1920
  content-max: 1440
  sidebar-width: 240         # left-rail followed channels
  sidebar-collapsed: 50      # collapsed icon-only state
  chat-width: 340            # right chat column on channel page
  top-nav-height: 50         # persistent top bar
  player-aspect: '16:9'
  thumbnail-aspect: '16:9'   # channel-tile preview thumbnail

components:
  button-primary-follow:
    bg: '#9146ff'
    color: '#ffffff'
    radius: 4
    padding: '0 10px'
    height: 30
    font: button-md
    weight: 600
    use: 'The signature purple Follow button — small, dense, sits next to channel name above player.'
  button-primary-subscribe:
    bg: '#9146ff'
    color: '#ffffff'
    radius: 4
    padding: '0 10px'
    height: 30
    font: button-md
    weight: 600
    use: 'Subscribe button — same chrome as Follow but with crown icon and dropdown for tier.'
  button-secondary-grey:
    bg: '#3a3a3d'
    color: '#efeff1'
    radius: 4
    padding: '0 10px'
    height: 30
    font: button-md
    use: 'Secondary action — Share, Report, Mute. Neutral charcoal.'
  button-secondary-hollow:
    bg: 'transparent'
    color: '#efeff1'
    border: '1px solid #3a3a3d'
    radius: 4
    padding: '0 10px'
    height: 30
    use: 'Tertiary action with outline.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#bf94ff'
    border: 'none'
    padding: '0 10px'
    height: 30
    use: 'Text-only utility — Cancel, Skip, See More.'
  button-icon:
    bg: 'transparent'
    color: '#efeff1'
    radius: 4
    height: 30
    width: 30
    use: 'Icon-only utility — settings gear, fullscreen, expand. Hover bg #26262c.'
  button-cheer:
    bg: '#9146ff'
    color: '#ffffff'
    radius: 4
    padding: '0 10px'
    height: 30
    use: 'Bits/Cheer button next to chat input — gemstone icon left.'
  card-channel-tile:
    bg: 'transparent'
    color: '#efeff1'
    use: 'Default 16:9 thumbnail tile in carousel — preview image with red LIVE badge top-left and viewer-count chip bottom-left.'
  card-channel-tile-hover:
    transform: 'translateY(-2px)'
    use: 'On hover the tile lifts 2px and the thumbnail starts auto-playing a low-bitrate clip after 0.5s dwell.'
  card-category-tile:
    bg: 'transparent'
    color: '#efeff1'
    aspect: '3:4'
    use: 'Game/category portrait tile — box-art image with channel-count + viewer-count beneath.'
  badge-live:
    bg: '#eb0400'
    color: '#ffffff'
    radius: 2
    padding: '2px 4px'
    use: 'Red rectangular "LIVE" tag with optional pulsing dot, anchored top-left of thumbnail.'
  badge-viewer-count:
    bg: 'rgba(0,0,0,0.6)'
    color: '#ffffff'
    radius: 2
    padding: '2px 6px'
    use: 'Translucent black chip with red dot + viewer count, bottom-left of thumbnail.'
  badge-partner:
    color: '#9146ff'
    use: 'Purple verified-checkmark glyph next to partner channel names.'
  badge-affiliate:
    color: '#bf94ff'
    use: 'Lighter-purple gem next to affiliate channel names.'
  badge-prime:
    color: '#3ea6f5'
    use: 'Blue crown next to Prime-sub usernames in chat.'
  chat-message-row:
    bg: 'transparent'
    color: '#efeff1'
    padding: '4px 16px'
    use: 'Default chat message — username (bold, user-coloured) + ":" + message body.'
  chat-message-row-hover:
    bg: '#26262c'
    use: 'On hover the row lifts to charcoal — moderation tools (timeout, ban, delete) fade in on the right edge.'
  chat-message-mention:
    bg: 'rgba(145,70,255,0.15)'
    border-left: '4px solid #9146ff'
    use: 'When @-mentioned, message gets purple-tinted bg + 4px left rule.'
  chat-input:
    bg: '#3a3a3d'
    color: '#efeff1'
    radius: 4
    height: 40
    padding: '8px 12px'
    use: 'Chat input field at bottom of chat column — emote picker right, send button right of that.'
  emote-picker:
    bg: '#26262c'
    color: '#efeff1'
    radius: 6
    use: 'Tabbed popover — Channel / Subscribers / Bits / Global / Twitch tabs.'
  player-video:
    bg: '#000000'
    radius: 0
    aspect: '16:9'
    use: 'Video player — flush corners, full-bleed within content area.'
  player-controls:
    bg: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%)'
    color: '#ffffff'
    use: 'Bottom controls bar — play/pause, volume, settings, theatre/fullscreen.'
  sidebar-rail:
    bg: '#1f1f23'
    color: '#efeff1'
    width: 240
    use: 'Left-rail Followed Channels — avatar + name + LIVE indicator + viewer count.'
  sidebar-item:
    bg: 'transparent'
    color: '#efeff1'
    radius: 4
    padding: '8px 16px'
    use: 'Default sidebar item — hover bg #26262c.'
  top-nav-bar:
    bg: '#0e0e10'
    color: '#efeff1'
    height: 50
    border-bottom: '1px solid #3a3a3d'
    use: 'Persistent top bar — Twitch logo, Browse / Following / Esports nav, search, Get Bits magenta CTA, profile menu.'
  search-input:
    bg: '#3a3a3d'
    color: '#efeff1'
    radius: 4
    height: 30
    padding: '0 12px'
    use: 'Top-bar search — pill-grey field, magnifier left.'
  modal-dialog:
    bg: '#1f1f23'
    color: '#efeff1'
    radius: 6
    shadow: '0 4px 8px rgba(0,0,0,0.5), 0 0 0 1px #3a3a3d'
    use: 'Settings/account dialogs.'
  toast:
    bg: '#1f1f23'
    color: '#efeff1'
    radius: 4
    border-left: '4px solid #9146ff'
    use: 'In-page notifications — channel just went live, raid incoming.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 300
  duration-tile-preview: 500     # auto-preview clip on tile dwell
  duration-live-pulse: 1500      # LIVE dot pulse cycle
  reduced-motion: 'respects prefers-reduced-motion: tile preview disabled (static thumbnail), LIVE pulse halts to static red dot, raid celebration confetti suppressed, chat-message slide-in becomes opacity-only.'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1200
  wide: 1600

shadows:
  none: 'none'
  card-rest: 'none'
  card-hover: '0 4px 8px rgba(0,0,0,0.5)'
  modal: '0 4px 8px rgba(0,0,0,0.5), 0 0 0 1px #3a3a3d'
  popover: '0 8px 16px rgba(0,0,0,0.6)'
  ring: '0 0 0 2px #9146ff'

accessibility:
  contrast-text-on-bg: 13.4               # #efeff1 on #0e0e10 — AAA
  contrast-text-alt-on-bg: 7.4            # #adadb8 on #0e0e10 — AAA at body
  contrast-text-on-brand: 4.5             # white on #9146ff — AA at body sizes
  contrast-link-on-bg: 8.0                # #bf94ff on #0e0e10 — AAA
  focus-ring: '2px solid #9146ff with 2px offset; #ffffff on brand-coloured surfaces'
  reduced-motion-honored: true
  caption-track: 'always available, customisable on most VODs'
  audio-description: 'optional on archived broadcasts (creator-supplied)'
  chat-aria: 'role="log" aria-live="polite" so screen readers announce new messages'

dark-mode: native                  # Twitch is dark-default; light theme exists but is rarely used
---

## 1. Visual Theme & Atmosphere

Twitch is a control room, not a cinema. The canvas is a near-black `#0e0e10` (deeper than Spotify's `#121212`, lighter than pure black) — a charcoal grade chosen specifically because creators stream from rooms with mixed lighting and the page must remain neutral against any backdrop colour. Above that ground, the page is a dense application: a persistent 50px top bar with the magenta wordmark; a 240px left-rail listing every channel the user follows with red LIVE pulsing indicators next to currently-streaming names; a centre column dominated by a 16:9 video player flush against the page edges; and a 340px right-rail chat column scrolling at 5–50 messages per second during a popular stream. Everything is utilitarian. There is no breathing room; chat does not wait.

The signature is the Purple. `#9146ff` (the post-2019 brand purple, lighter and more electric than the legacy `#6441a4` from 2011) is rationed to the Follow button, the Subscribe button, the brand wordmark, the logo glyph, the cheer-bits accent, the emote-picker tab indicator, and the @-mention left-rule on chat messages. Everywhere else is monochrome — off-white, mid-grey, charcoal, deeper charcoal. Purple is the wayfinding signal: wherever purple sits, that is the action a creator wants you to take.

A second set of saturated accents lives in chat — the user-coloured username system. Each chatter picks a hue from a small palette (default red, blue, green, orange, purple, pink), and that colour persists on every message they send across every channel. This means a Twitch chat at-a-glance is a stripe of fifty saturated names — `#00ad03` mod green, `#e005b9` VIP magenta, `#eb0400` broadcaster red, `#3ea6f5` Prime blue — running down the right column. The chrome is dark; chat is loud.

Inter is the workhorse — Twitch ran Roobert briefly (2019–2022) but reverted to Inter for its multilingual reach and emoji compatibility. There is no negative tracking. Display sizes use 600–700 weight at 16–36px; body text runs 400 at 13–14px. The typography is deliberately neutral so creator overlays, emotes, and chat colour can be the visual events.

Density is the third axis. A category browse page renders 6–8 channel-tile rows above the fold on a 1440px display, each row a 6-tile carousel of 16:9 thumbnails. Every tile bears a red LIVE badge top-left and a viewer-count chip bottom-left ("12.3K"). On 0.5s hover dwell, the thumbnail begins auto-playing a low-bitrate preview clip — the Netflix interaction adapted for live content. The pace is faster than Netflix's 0.75s because live streams are time-sensitive; you preview, decide in three seconds, click in.

**Key Characteristics:**
- Near-black `#0e0e10` charcoal canvas (deeper than Spotify), neutral to creator overlays.
- Single voltage of brand purple `#9146ff` reserved for Follow/Subscribe/wordmark/cheer/mention.
- Off-white text `#efeff1` (warm grey, not pure white) — gentler on long-session viewers.
- Inter at 600 weight, **neutral 0em tracking** — utilitarian, not negative-tight.
- Three-pane app chrome: 240px left-rail / centre player + content / 340px right-rail chat.
- 16:9 thumbnail tile is canonical; tiles auto-preview clips on 0.5s dwell.
- Red `#eb0400` LIVE badge with pulsing dot — the most-imitated streaming UI element.
- Chat colour palette: user-coloured usernames over a quiet chrome — chat is the visual event.
- Persistent 50px top bar with magenta Get Bits CTA always reachable.
- Dark default; light theme exists but is the minority experience.

## 2. Color Palette & Roles

### Primary
- **Canvas Charcoal** (`#0e0e10`): The defining ground. Deeper than Spotify, lighter than pure black — chosen to read neutral against any creator-camera backdrop.
- **Off-White** (`#efeff1`): Primary text and ink. Warm, not cool — pure white would feel clinical on long viewing sessions.
- **Twitch Purple** (`#9146ff`): The brand's signature. Follow, Subscribe, Bits, brand glyph, @-mention rules. Used wherever a primary action lives.

### Brand & Dark
- **Purple Hover** (`#a970ff`): Marginally brighter on pointer-over.
- **Purple Active** (`#772ce8`): Pressed state.
- **Purple Deep** (`#5c16c5`): Archived gradient terminus, legacy promo modules.
- **Classic Purple** (`#6441a4`): The 2011–2019 legacy purple. Still appears in some old assets and the original wordmark archive.
- **Magenta Accent** (`#fab4ff`): Bits/Cheer accent, lighter purple.
- **Pure Black** (`#000000`): Reserved for the video player surface — flush corners on the player frame.

### Accent & Cheer
Cheer-bit colours map to gemstone tiers — these are saturated accents users can purchase:
- **Cheer Blue** (`#4d8eff`): 1-bit baseline.
- **Cheer Green** (`#00d6cc`): 10-bit teal.
- **Cheer Orange** (`#f5b53a`): 100-bit amber.
- **Cheer Red** (`#ff4248`): 1000-bit ruby.
- **Cheer Purple** (`#9c3eff`): 5000-bit royal.

### Interactive
- **CTA Purple** (`#9146ff`): Primary action — Follow / Subscribe / Cheer.
- **Charcoal Secondary** (`#3a3a3d`): Secondary action button bg, neutral chip.
- **Outline Border** (`1px solid #3a3a3d` on transparent): Tertiary outlined buttons.
- **Disabled** (`#53535f` text on `#1f1f23` bg): Non-interactive control.

### Neutral Scale
- **Display White** (`#ffffff`): Display headlines only.
- **Body Off-White** (`#efeff1`): Primary body, chat messages, channel names.
- **Alt** (`#adadb8`): Secondary metadata, viewer counts, stream durations. AAA on `#0e0e10`.
- **Muted** (`#898997`): Tertiary captions, timestamps, "•" separators.
- **Disabled** (`#53535f`): Disabled menu items, scrubber rail.
- **Border Default** (`#3a3a3d`): Hairline divider, button-secondary bg, search bg.
- **Border Soft** (`#26262c`): Internal panel divider.

### Surface & Borders
- **Surface Strong** (`#26262c`): Card hover, sidebar selected, chat-message hover.
- **Surface Default** (`#1f1f23`): Default card, default sidebar item, modal floor.
- **Surface Soft** (`#18181b`): Alt content panel, secondary band.
- **Surface Elevated** (`#26262c`): Popover, menu, emote picker.
- **Border Strong** (`#53535f`): Focused input outline.

### Shadow Colors
- **Card Hover** (`rgba(0,0,0,0.5)`): Tile hover lift.
- **Modal** (`rgba(0,0,0,0.5)` + `0 0 0 1px #3a3a3d`): Two-layer recipe — drop + ring border.
- **Popover** (`rgba(0,0,0,0.6)`): Heavier under emote picker, context menu.

### Semantic
- **Live Red** (`#eb0400`): The LIVE indicator badge + pulsing dot. Used nowhere else — never error, never decoration.
- **Online Green** (`#00f593`): Status indicator on profile presence.
- **Mod Green** (`#00ad03`): Moderator chat-name colour.
- **VIP Magenta** (`#e005b9`): VIP chat-name colour.
- **Broadcaster Red** (`#eb0400`): Broadcaster chat-name colour.
- **Prime Blue** (`#3ea6f5`): Prime-subscriber chat indicator.
- **Warning Yellow** (`#ffd84a`): Mod-tools warning, slow-mode indicator.
- **Danger Red** (`#eb0400`): Ban, timeout, error. Same hue as live-indicator — context disambiguates.
- **Info Blue** (`#4d8eff`): Informational, link colour on light surfaces.

## 3. Typography Rules

### Font Family
- **Primary**: `"Inter"` — sans-serif workhorse since 2022 (replacing brief Roobert experiment 2019–2022). Fallback chain: `"Helvetica Neue", Helvetica, Arial, sans-serif`.
- **Mono**: `Menlo, Consolas, "Roboto Mono", SFMono-Regular, monospace` — used in stream-key surfaces, dev-doc inline code, and OBS-config docs.
- **OpenType Features**: `cv01`, `cv11` for stylistic alternates on display sizes; `tnum` on the metadata row so viewer counts ("12.3K"), stream durations ("4:23:18"), and follower counts align across rows.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display XL | Inter | 36px | 700 | 1.2 | -0.01em | cv01 | Marketing landing hero |
| Display LG | Inter | 28px | 700 | 1.2 | 0 | cv01 | Channel/category page header |
| Display MD | Inter | 20px | 600 | 1.3 | 0 | -- | Section header "Live channels", "Categories you follow" |
| Display SM | Inter | 18px | 600 | 1.3 | 0 | -- | Stream title above player |
| Title MD | Inter | 16px | 600 | 1.3 | 0 | -- | Card title, panel header |
| Title SM | Inter | 14px | 600 | 1.3 | 0 | -- | Sidebar nav label, channel name in tile |
| Body MD | Inter | 14px | 400 | 1.5 | 0 | -- | Default body, modal description |
| Body SM | Inter | 13px | 400 | 1.4 | 0 | -- | Secondary metadata |
| Chat Message | Inter | 13px | 400 | 1.4 | 0 | -- | Chat body — tight to fit msgs/inch |
| Chat Username | Inter | 13px | 700 | 1.4 | 0 | -- | Bold username, user-coloured |
| Button MD | Inter | 13px | 600 | 1.0 | 0 | -- | Follow/Subscribe/Send |
| Button LG | Inter | 14px | 600 | 1.0 | 0 | -- | Marketing CTA |
| Caption | Inter | 12px | 400 | 1.3 | 0 | -- | Timestamps, fine print |
| Metadata | Inter | 13px | 400 | 1.3 | 0 | tnum | Viewer count, duration, follower count |
| Badge | Inter | 11px | 600 | 1.0 | 0.04em | -- | Uppercase "LIVE", "PARTNER", "AFFILIATE" |
| Nav Link | Inter | 14px | 600 | 1.0 | 0 | -- | Top nav, sidebar links |
| Code | Mono | 13px | 400 | 1.4 | 0 | -- | Stream-key, dev-doc inline code |
| Emote Label | Inter | 11px | 700 | 1.0 | 0.02em | -- | Emote-picker category label |

### Principles
- **Neutral tracking, no negative.** Twitch is the rare modern brand that uses 0em tracking on display sizes. The surface is already noisy with creator overlays, emotes, and chat colour — type stays calm to balance.
- **Workhorse weights.** Display sizes use 600–700; body is 400. There is no 500 in routine use, no italic, no decorative cuts. The discipline is utilitarian.
- **Tabular numerals on metadata.** Viewer counts, stream durations, and follower counts use `tnum` so the numbers align in scrollable lists.
- **Bold chat usernames.** 13px / 700 username + 13px / 400 message body. The bold-vs-regular contrast is what makes a chat with 50 names per minute scannable.
- **Sentence case, never uppercase outside badges.** "Live channels", "Categories you follow", "Featured streams" — capital first word only. Uppercase is for LIVE, NEW, PARTNER, AFFILIATE.
- **Tight chat line-height.** Chat at 1.4 line-height on 13px = ~18px row height. Tighter would clip tall emotes; looser would reduce scannability.

## 4. Component Stylings

### Buttons

**Primary Follow (Purple)**
- Background: `#9146ff`. Text: `#ffffff`. Radius: `4px`. Padding: `0 10px`. Height: `30px`. Font: Inter 13px / 600.
- Hover: `#a970ff`.
- Active: `#772ce8`.
- Use: Follow channel — sits next to channel name above the player.

**Primary Subscribe (Purple + Crown)**
- Background: `#9146ff`. Text: `#ffffff`. Radius: `4px`. Padding: `0 10px 0 4px`. Height: `30px`. Font: 13px / 600.
- Crown icon left at 16×16. Has split-button dropdown for tier selection.
- Use: Subscribe to channel — paid commitment.

**Secondary Grey**
- Background: `#3a3a3d`. Text: `#efeff1`. Radius: `4px`. Padding: `0 10px`. Height: `30px`.
- Hover: `#53535f`.
- Use: Share, Report, Mute, Block — neutral utilities.

**Secondary Hollow (Outline)**
- Background: `transparent`. Text: `#efeff1`. Border: `1px solid #3a3a3d`. Radius: `4px`. Height: `30px`.
- Hover: bg `rgba(255,255,255,0.05)`.
- Use: Tertiary action with explicit boundary.

**Tertiary Text**
- Background: `transparent`. Color: `#bf94ff`. No border. Padding: `0 10px`. Height: `30px`.
- Hover: text `#ffffff`.
- Use: Cancel, Skip, See More.

**Icon Button**
- Background: `transparent`. Color: `#efeff1`. Radius: `4px`. Size: `30 × 30`.
- Hover: bg `#26262c`.
- Use: Settings gear, fullscreen, expand-chat, theatre-mode.

**Cheer Button**
- Background: `#9146ff`. Text: `#ffffff`. Radius: `4px`. Padding: `0 10px`. Height: `30px`.
- Gemstone icon left.
- Use: Bits/Cheer button next to chat input.

**Magenta Top-Bar CTA ("Get Bits")**
- Background: `transparent` with `#9146ff` text. Hover: bg `rgba(145,70,255,0.15)`.
- Use: Get Bits / Sub balance pill in top nav.

### Cards & Tiles

**Channel Tile (Default)**
- Background: `transparent`. Color: `#efeff1`.
- Layout: 16:9 thumbnail on top + 8px gap + avatar + channel name (14/600) + stream title (13/400) + game/category (13/400 `#adadb8`) + tag pills.
- Thumbnail overlays: red LIVE badge top-left, viewer-count chip bottom-left.
- No shadow at rest.

**Channel Tile (Hover)**
- Transform: `translateY(-2px)`.
- After 0.5s dwell: thumbnail begins auto-playing a low-bitrate clip with audio muted.
- Use: Carousel browse interaction signature.

**Category Tile**
- Aspect: 3:4 portrait box-art image.
- Below image: category name (14/600) + viewer count + tag pills.
- Used on Browse / Categories pages.

### Badges, Tags, Indicators

**LIVE Badge**
- Background: `#eb0400`. Color: `#ffffff`. Radius: `2px`. Padding: `2px 4px`. Font: 11px / 600 uppercase.
- Optional pulsing red dot (1.5s opacity-cycle loop).
- Use: Top-left of every live thumbnail.

**Viewer Count Chip**
- Background: `rgba(0,0,0,0.6)`. Color: `#ffffff`. Radius: `2px`. Padding: `2px 6px`.
- Red dot left + count text (`tnum`).
- Use: Bottom-left of live thumbnail.

**Partner Verification**
- Color: `#9146ff`. Glyph: purple checkmark.
- Use: Inline next to partner-channel names.

**Affiliate**
- Color: `#bf94ff`. Glyph: lighter-purple gem.
- Use: Inline next to affiliate-channel names.

**Prime Crown**
- Color: `#3ea6f5`. Glyph: blue crown.
- Use: Next to Prime-sub usernames in chat.

**Tag Pill (Category, Language)**
- Background: `#3a3a3d`. Color: `#efeff1`. Radius: `9999px`. Padding: `2px 10px`. Font: 11px / 600.
- Hover: bg `#53535f`.
- Use: Stream tags ("English", "FPS", "Just Chatting") below channel tile or above player.

### Inputs & Forms

**Chat Input**
- Background: `#3a3a3d`. Color: `#efeff1`. Radius: `4px`. Height: `40px`. Padding: `8px 12px`.
- Focus: border `#9146ff` 1px outline.
- Right-side: emote-picker icon, cheer button, send button.

**Search Input (Top Bar)**
- Background: `#3a3a3d`. Color: `#efeff1`. Radius: `4px`. Height: `30px`. Padding: `0 12px 0 32px`.
- Magnifier icon `#adadb8` anchored left.

**Text Input (General)**
- Background: `#1f1f23`. Color: `#efeff1`. Radius: `4px`. Height: `40px`. Padding: `8px 12px`. Border: `1px solid #3a3a3d`.
- Focus: border `#9146ff`.

**Toggle Switch**
- Off: `#53535f` track. On: `#9146ff` track.
- Knob: `#ffffff` 16×16 circle.
- Use: Settings toggles.

### Navigation

**Top Nav Bar**
- Background: `#0e0e10`. Color: `#efeff1`. Height: `50px`. Border-bottom: `1px solid #3a3a3d`.
- Layout: purple Twitch glyph left, "Browse / Following / Esports" links, central search field, right cluster: Get Bits pill / notification bell / profile avatar.

**Left Rail (Followed Channels)**
- Background: `#1f1f23`. Width: `240px` expanded, `50px` collapsed.
- Items: 32×32 avatar + channel name (14/600) + viewer count (13/400 `#adadb8`) + LIVE indicator (red dot).
- Section: "FOLLOWED CHANNELS" uppercase 11/600 header + scrollable list + "RECOMMENDED CHANNELS" header + secondary list.

**Sidebar Item**
- Background: `transparent`. Color: `#efeff1`. Radius: `4px`. Padding: `8px 16px`.
- Hover: bg `#26262c`.
- Active (currently watching): bg `#26262c` + 4px purple left rule.

### Chat Components

**Chat Message Row**
- Background: `transparent` (default), `#26262c` (hover), `rgba(145,70,255,0.15)` + 4px `#9146ff` left rule (when @-mentioned), `rgba(255,0,0,0.1)` (highlighted by mod), `rgba(0,255,0,0.1)` (raid message).
- Padding: `4px 16px`.
- Layout: badges (mod/VIP/sub-tier crown/prime/cheer), username (13/700 user-colour), `:`, message (13/400 `#efeff1`), inline emotes 28×28.

**Chat Username Color**
- User-picked from palette; defaults distribute evenly. Mods override to `#00ad03`; VIPs to `#e005b9`; broadcaster to `#eb0400`; staff to `#9146ff`.

**Emote Picker**
- Background: `#26262c`. Color: `#efeff1`. Radius: `6px`. Padding: `8px`.
- Tabs: Channel / Subscribers / Bits / Global / Twitch.
- Grid: 7-column 28×28 emote tiles, hover bg `#3a3a3d`.

**Cheer Animation**
- Bit-amount text + animated gemstone (1, 100, 1000, 5000 = increasing animation complexity).
- Cheer ranks: blue (1) → green (100) → orange (1000) → red (10000) → purple-rainbow (100000+).

### Player

**Video Frame**
- Background: `#000000`. Radius: `0px` (flush corners). Aspect: 16:9.
- Full-bleed within the content column.

**Player Controls Bar**
- Background: `linear-gradient(0deg, rgba(0,0,0,0.7), transparent)`. Height: `60px` from bottom.
- Buttons: 24×24 SVG icons in `#ffffff`.
- Volume slider, settings gear, theatre toggle, fullscreen — right-aligned.

**LIVE Indicator (in Player)**
- Pulsing red dot + "LIVE" pill bottom-left of player.
- Stream duration `tnum` time elapsed below.

**Theatre Mode**
- Toggles content column to fill viewport with chat collapsing to right-rail of full-height column.

### Modals & Toasts

**Modal Dialog**
- Background: `#1f1f23`. Color: `#efeff1`. Radius: `6px`.
- Shadow: `0 4px 8px rgba(0,0,0,0.5), 0 0 0 1px #3a3a3d`.
- Width: clamp(400px, 90vw, 720px).

**Toast (In-Page)**
- Background: `#1f1f23`. Color: `#efeff1`. Radius: `4px`. Border-left: `4px solid #9146ff`.
- Padding: `12px 16px`.
- Use: "PokimaneIt is live", "Incoming raid from xQc", "@-mention from janeDoe".

## 5. Layout Principles

### Spacing System
- Base: 4px. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96.
- Tile gap (intra-row): 16px on desktop, 12px on tablet.
- Row gap: 24px between carousels.
- Section gap: 32px between major modules.
- Chat-message vertical gap: 0 (row padding handles it).

### Grid & Container
- Page width: 1920px max.
- Content width: 1920 minus left-rail (240px) minus chat (340px) = ~1340px centre column on stream pages.
- Browse pages: full content width, no chat column.
- Top nav: 50px fixed.
- Carousel: 6 tiles per row at 1440px desktop, 4 at tablet, 2.5 at mobile (peek).

### Whitespace Philosophy
Twitch is a maximally-dense product. Browse pages render 6–8 channel-tile rows above the fold. Channel pages put player + chat side-by-side with zero ornamental margin. Chat itself is 0-gap (row padding only). Whitespace exists only between sections, never within them. The page is closer to a stock-trading terminal than a magazine.

### Section Cadence
Browse:
- Top nav (50px, persistent)
- "Live channels we think you'll like" (carousel)
- "Live channels you follow" (carousel)
- 4–6 category-themed carousels
- "Top categories" (3:4 portrait tiles)
- Footer

Channel page:
- Top nav (50px)
- Player (16:9, flush)
- Stream title + channel info + Follow + Subscribe + Bits
- Tabs: About / Schedule / Videos / Clips
- Right-rail chat (340px, full-height)

There is no light/dark alternation — Twitch is dark all the way down (light theme exists but is a minority experience).

## 6. Shapes & Radius Scale

- **None** (`0px`): Video player corners — flush, full-bleed.
- **Micro** (`2px`): LIVE badge, viewer-count chip — sharp, technical.
- **Standard** (`4px`): Buttons, inputs, cards, sidebar items, modals — the workhorse radius across the entire system.
- **Comfortable** (`6px`): Modal corners, popover.
- **Relaxed** (`8px`): Rare; some marketing-page card variants.
- **Pill** (`9999px`): Tag pills (category, language), some badges.

The dominant 4px radius is functional rather than expressive — Twitch's geometry says "control panel", not "magazine". The flat-corner video player is intentional: corners would cut into the live content frame.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (flat) | No shadow, no border | Video player, default tile, page bg |
| 1 (hairline) | 1px `#3a3a3d` border or `#26262c` divider | Top-bar bottom border, panel divider, card border |
| 2 (hover) | `0 4px 8px rgba(0,0,0,0.5)` + `translateY(-2px)` | Tile hover lift |
| 3 (modal) | `0 4px 8px rgba(0,0,0,0.5), 0 0 0 1px #3a3a3d` | Settings dialog, account dialog |
| 4 (popover) | `0 8px 16px rgba(0,0,0,0.6)` | Emote picker, context menu |
| 5 (toast) | `0 8px 16px rgba(0,0,0,0.6)` + 4px purple left rule | Notification toast |

### Shadow Philosophy
On `#0e0e10` charcoal, shadows must be moderate-to-heavy opacity (`0.5–0.6`) to read. Twitch uses a two-layer recipe for modals (drop + ring border) so the modal floor reads as a clearly-bounded card on a dark page. There is no brand-tinted shadow ever — purple is reserved for the brand. The 4px-purple-left-rule on toasts is a flat-design alternative to a tinted shadow — it serves the same wayfinding role without breaking the no-tint rule.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — fades, opacity, simple slides.
- **Out**: `cubic-bezier(0, 0, 0.2, 1)` — incoming elements (modal in, chat-message slide-in).
- **Spring**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — bit-cheer celebration animation.

### Duration Buckets
- **Fast**: 100ms — colour shifts, hover-state colour transitions.
- **Standard**: 200ms — modal fade-in, chat-message slide-in.
- **Slow**: 300ms — tile auto-preview transition, page-route swap.
- **Tile preview**: 500ms — dwell delay before clip auto-plays on channel tile.
- **LIVE pulse**: 1500ms — opacity-cycle loop on LIVE indicator dot.

### Per-Component Recipes
- **Follow/Subscribe hover**: Background `#9146ff → #a970ff`, 100ms ease-standard. No transform.
- **Tile hover**: `transform: translateY(-2px)` + thumbnail ring + auto-preview clip mount after 500ms dwell.
- **Chat message arrival**: slides up from below with 4px translate-y + opacity 0→1 over 150ms ease-out. (Reduced motion: opacity-only.)
- **LIVE pulse**: Red dot opacity 1.0 → 0.4 → 1.0 on 1.5s loop.
- **Cheer animation**: Gemstone icon scales `1 → 1.4 → 1.0` over 600ms with spring ease + sparkle particles (1, 100, 1000, 5000 = increasing complexity).
- **Raid celebration**: full-page confetti animation 4s on incoming raid (suppressed in reduced-motion).
- **Modal in**: 200ms ease-out, scale `0.96 → 1.0` + opacity `0 → 1`.
- **Theatre toggle**: 300ms ease-standard, content column expands and chat shrinks.

### Page Transitions
Twitch is largely a single-page React app. Channel-page navigation does NOT close chat — chat persists across navigation and the player swaps. This is intentional: viewers are following a creator across multiple streams, and chat continuity matters.

### Reduced Motion
`prefers-reduced-motion: reduce` collapses:
- Channel-tile auto-preview → disabled, static thumbnail only.
- LIVE pulse → static red dot, no opacity loop.
- Chat message arrival → opacity-only fade.
- Cheer celebration → static gemstone display, no scale or particles.
- Raid confetti → suppressed entirely (banner notification only).
- Modal scale-in → opacity-only.

## 9. Accessibility & A11y

### Contrast Pairs
- Off-white `#efeff1` on canvas `#0e0e10`: **13.4:1** — AAA at all sizes.
- Alt `#adadb8` on canvas: **7.4:1** — AAA at body sizes.
- White `#ffffff` on brand purple `#9146ff`: **4.5:1** — AA at body sizes (passes for 14px+).
- Link purple `#bf94ff` on canvas: **8.0:1** — AAA.
- Mod green `#00ad03` on canvas: **4.6:1** — AA at body.

### Focus Indicators
- Default focus: `2px solid #9146ff` outline with `2px` offset on most controls.
- On purple-coloured surfaces (e.g. inside the cheer popover): focus uses `2px solid #ffffff`.
- Tab order: top nav → left rail → main content → chat input.

### ARIA Patterns
- Carousels: `role="region" aria-roledescription="carousel"` per row.
- Tiles: `role="link" aria-label="[Channel], streaming [Game] to [Viewer count] viewers."`
- Player: `role="region" aria-label="Live video player"` with full keyboard shortcuts.
- Chat: `role="log" aria-live="polite"` so screen readers announce new messages.
- Modal: `role="dialog" aria-modal="true"` with focus trap.
- LIVE pulse: `aria-hidden="true"` decoratively; the LIVE text is screen-reader-readable.

### Keyboard Navigation
- Space: play/pause.
- Arrow Left/Right: seek (VOD only — not live).
- Arrow Up/Down: volume.
- F: fullscreen.
- T: theatre mode.
- M: mute.
- C: chat focus (creator-set shortcut).
- Tab: move through controls; Shift+Tab reverses.
- Enter: activate focused control.
- ESC: close modal / exit fullscreen.

### Screen Reader Hints
- Channel tiles include game, viewer count, and stream duration in `aria-label`.
- LIVE indicator includes both pulsing dot (decorative) and "LIVE" word (read).
- Chat messages: `aria-label="[Username] said: [message text]"`.
- Emote `<img alt="">` includes the emote name (e.g. "Kappa").

### Reduced Motion
Honoured. See §8.

### Caption / Audio Description
- Closed captions on most live streams (creator-toggleable, customisable colour/size/edge).
- Audio description tracks supported on archived broadcasts when supplied by the creator.

## 10. Responsive Behavior

### Breakpoints
| Token | Min | Use |
|-------|-----|-----|
| mobile | 0px | Bottom-tab nav, single column, chat collapses to popover |
| tablet | 768px | Left rail collapses to 50px icon-only, 4 tiles per row |
| desktop | 1200px | Full 240px left rail + 340px chat, 6 tiles per row |
| wide | 1600px | Same as desktop with wider gutter; theatre mode still applies |

### Touch Targets
- 44×44 minimum on touch devices. Buttons retain 30px desktop height but gain 8px hit-area padding.

### Collapsing Strategy
- **Left rail**: Auto-collapses to 50px icon-only at `< 1200px`; user can manually expand.
- **Chat**: Collapses to a popover toggle on `< 1024px`; full overlay sheet on mobile.
- **Top nav**: Hamburger menu at `< 768px`; logo + Get Bits + profile remain visible.
- **Carousel arrows**: Hidden on touch devices — swipe replaces them.

### Image Behavior
- Channel thumbnails: 320w/640w/1280w via `srcset`. Lazy-load below the fold. Always 16:9.
- Box art: 285w/570w via `srcset`. Always 3:4.
- Emotes: 28w/56w/112w (1x/2x/4x) for chat usage; emote-picker uses 28w.

### Container Queries
Used on player overlay — controls condense to icon-only at narrow theatre widths based on player container, not viewport.

## 11. Content & Voice

### Tone
Twitch's voice is **community-native, casual, and creator-deferent**. The marketing copy speaks to creators ("Go live in minutes", "Build your community") and to viewers ("Find your next favourite stream") with equal directness. Chat itself has no voice — Twitch deliberately under-designs the chat chrome so creator personality and community jokes (Kappa, KEKW, Pog) become the voice.

### Microcopy Patterns
- **Primary CTA**: "Follow" (free), "Subscribe" (paid), "Cheer" (Bits), "Sign Up" (acquisition).
- **Secondary CTA**: "Share", "Report", "Block", "Mute".
- **Live arrival toast**: "@[Channel] just went live!"
- **Raid incoming**: "Incoming raid from @[Channel]! [N] raiders joining."
- **Empty Following**: "Follow channels and they'll show up here."
- **Empty chat**: "No one's chatting yet. Be the first to say hi!"
- **Slow mode**: "Slow mode is on. You can send a message every [N] seconds."
- **Sub-only mode**: "Subscribers only. Subscribe to chat in this channel."
- **Hosted by message**: "[Channel] is hosting [Other Channel]."
- **Sub anniversary**: "[Username] subscribed for [N] months in a row! 🥳"

### Empty States
- Empty Following list: directs to Browse with "Find streamers to follow".
- Empty chat: encourages first message; includes the "Send a message" placeholder.
- Empty VOD list: "[Channel] hasn't uploaded any videos yet."
- Offline channel: shows last-stream banner + schedule + Follow CTA.

### CTA Verb Conventions
- "Follow" — free, primary engagement verb.
- "Subscribe" — paid, monthly recurring.
- "Cheer" — Bits-based one-time tip, with gemstone tier.
- "Raid" — broadcaster-only, sends viewers to another channel at end-of-stream.
- "Host" (deprecated 2022) — viewer-share lite, replaced by Raid.
- "Whisper" — DM another user.
- "Clip it" — capture a 30s highlight from the stream.

## 12. Dark Mode & Theming

Twitch ships **both** dark and light themes — but dark is the default and dark is what 90%+ of users experience. The light theme exists primarily for users on bright daylight environments and accessibility preferences.

**Light Theme Token Swap:**
- `bg`: `#0e0e10` → `#ffffff`
- `bg-alt`: `#18181b` → `#f7f7f8`
- `surface`: `#1f1f23` → `#efeff1`
- `surface-strong`: `#26262c` → `#dedee3`
- `text`: `#efeff1` → `#0e0e10`
- `text-alt`: `#adadb8` → `#53535f`
- `text-muted`: `#898997` → `#53535f`
- `border`: `#3a3a3d` → `#dedee3`
- `brand`: `#9146ff` (unchanged — works on both)
- `link`: `#bf94ff` → `#9146ff` (deepens for legibility on white)

The brand purple is unchanged across themes — it's chosen specifically to clear AA contrast on both white and `#0e0e10`. The chat colours mostly remain unchanged; broadcaster-red and mod-green are tweaked slightly to maintain AA on white.

## 13. Lineage & Influences

Twitch's visual lineage is three-streamed.

**Justin.tv (parent, 2007).** Twitch was carved out of Justin.tv in 2011. The chat-on-the-right + player-on-the-left layout was inherited verbatim — Justin.tv pioneered the side-by-side stream-and-chat pattern, and Twitch refined it. The original 2011–2019 Twitch Purple `#6441a4` was a darker, more royal hue picked to differentiate from Justin.tv's red.

**Gaming-forum aesthetics.** Dark backgrounds, dense rows, user-coloured names — these all come from gaming forums and IRC clients of the late-2000s (vBulletin skins, mIRC themes). Twitch is essentially "what if IRC had a video player attached" — the visual language is a direct descendant.

**Live-broadcasting professionalism.** The 2019 redesign (which introduced the new purple `#9146ff`, lighter weights, more whitespace) borrowed from streaming-platform conventions — Netflix's tile grid, YouTube's metadata layout, Discord's chat. Twitch professionalised without losing the gaming-forum density.

What Twitch rejects: heavy ornament, magazine-style typography (no display serifs, no negative tracking), light-default mode, decorative animations. The brand is pragmatic — the page is a control panel for live entertainment.

**Influences:**
- **Justin.tv** — direct ancestor; chat-on-right + player-on-left layout. https://en.wikipedia.org/wiki/Justin.tv
- **IRC clients (mIRC, HexChat)** — user-coloured usernames and dense scrolling chat.
- **Gaming forums (vBulletin skins)** — dark theme, dense rows, badge-icon culture.
- **Discord** — modern chat conventions and emote handling. https://discord.com
- **YouTube** — channel-page metadata patterns and recommendation rails. https://youtube.com

## 14. Do's and Don'ts

**Do:**
- Use `#0e0e10` not `#000000` for the page canvas — Twitch's charcoal is deliberately deeper than Spotify's.
- Use `#efeff1` (warm off-white), not pure `#ffffff`, for primary text — gentler on long viewing sessions.
- Reserve purple `#9146ff` for Follow / Subscribe / Cheer / brand glyph / @-mention rule.
- Use red `#eb0400` only for LIVE indicators and danger; never decoratively.
- Apply 0em (neutral) tracking on display sizes — Twitch is the rare brand that doesn't tighten.
- Use `tnum` on viewer counts, stream durations, and follower counts.
- Keep buttons at 30px height with 4px radius — utilitarian, dense.
- Render the LIVE badge with optional 1.5s pulsing dot loop.
- Suspend chat-message slide-in and pulse animation under reduced-motion.
- Default to dark — light theme exists, but dark is canonical.
- Layer modals with two shadows: drop `0 4px 8px rgba(0,0,0,0.5)` + ring `0 0 0 1px #3a3a3d`.
- Honour user-picked username colours in chat — they persist across channels.

**Don't:**
- Don't apply negative tracking to display sizes — Twitch is calm-typography on a noisy surface.
- Don't use shadows on resting tiles — only on hover with `translateY(-2px)`.
- Don't use the legacy `#6441a4` purple for new surfaces — modern brand is `#9146ff`.
- Don't put red anywhere except LIVE indicators, broadcaster username, danger.
- Don't put rounded corners on the video player — flush 0px is intentional.
- Don't use uppercase outside of badges and section headers (LIVE, NEW, FOLLOWED CHANNELS).
- Don't pad chat rows generously — chat density is the point.
- Don't render confetti or raid celebrations under `prefers-reduced-motion`.
- Don't introduce a brand-tinted shadow — purple is for the brand, not for elevation.
- Don't use Inter italic — it exists but is essentially never used in product.
- Don't run autoplay on tiles without the 0.5s dwell delay — instant autoplay would crater bandwidth and feel jumpy.
- Don't centre-align chat — chat is left-aligned, always; right-align is the moderator-tools edge.

## 15. Agent Prompt Guide

### Quick Color Reference
- Canvas: `#0e0e10`
- Brand Purple: `#9146ff`
- Purple Hover: `#a970ff`
- Off-White Text: `#efeff1`
- Alt Text: `#adadb8`
- Surface Default: `#1f1f23`
- Surface Hover: `#26262c`
- Border: `#3a3a3d`
- LIVE Red: `#eb0400`
- Mod Green: `#00ad03`

### Example Component Prompts
1. "Create a Twitch-style channel tile — 16:9 thumbnail with red `#eb0400` LIVE badge top-left (uppercase 11px / 600), translucent `rgba(0,0,0,0.6)` viewer-count chip bottom-left with red dot + tabular-num count, beneath the thumbnail a 32×32 avatar + channel name (14/600 `#efeff1`) + stream title (13/400) + game (13/400 `#adadb8`) + 2–3 tag pills."
2. "Design a Twitch chat row — 4px 16px padding, badges (mod/VIP/sub-tier crown/prime) inline left, username 13/700 in user-picked colour (default red `#eb0400` for broadcaster, green `#00ad03` for mods, magenta `#e005b9` for VIP), `:`, message body 13/400 `#efeff1`, inline emotes 28×28; on hover bg lifts to `#26262c` and timeout/ban/delete tools fade in right."
3. "Build a Twitch top nav — 50px tall pure `#0e0e10` bar with 1px `#3a3a3d` bottom border, purple Twitch glyph left, Browse/Following/Esports nav links 14/600 `#efeff1`, central search input `#3a3a3d` 30px tall 4px radius with magnifier icon left, right cluster Get Bits text-pill `#9146ff` on hover-tint + bell + 32×32 profile avatar."
4. "Render a Twitch Follow button — 30px tall, 4px radius, `#9146ff` background with `#ffffff` 13/600 'Follow' label, padding 0 10px, hover lifts to `#a970ff`, active deepens to `#772ce8`. Sits right-aligned next to the channel name above the player."
5. "Create a Twitch player layout — 16:9 black `#000000` flush-cornered video frame in centre, 240px left rail with followed-channels list (avatar + name + LIVE red dot + viewer count tabular-num), 340px right chat column with `role='log' aria-live='polite'`, top 50px persistent nav."
6. "Design a Twitch cheer animation — gemstone icon (blue 1-bit, green 10-bit, orange 100-bit, red 1000-bit, purple 5000-bit) scales `1 → 1.4 → 1.0` over 600ms with cubic-bezier(0.34, 1.56, 0.64, 1) spring ease, plus sparkle particles whose count scales with bit tier; suppressed entirely under prefers-reduced-motion."

### Iteration Guide
1. **Don't tighten the tracking.** If display type feels off-brand-tight, remove negative tracking — Twitch reads at neutral 0em.
2. **Calm the type.** If chrome feels noisy, switch display weights from 700 to 600 — Twitch's display is workhorse-quiet.
3. **Off-white, not white.** If text feels harsh, swap pure `#ffffff` to `#efeff1` — the warmth is brand-signature.
4. **Pulse the LIVE.** If LIVE indicators feel static, add the 1.5s opacity pulse — but suspend under reduced-motion.
5. **Density matters.** If a list feels too padded, reduce row gaps — Twitch is a control panel, not a magazine.
6. **Two-shadow modals.** If a modal floor feels flat against the dark canvas, add the `0 0 0 1px #3a3a3d` ring layer beneath the drop shadow.
7. **Ration the purple.** If purple is anywhere except CTA/wordmark/Cheer/mention, audit and remove.
8. **Honour user colours.** Chat username colours are user-set, mod-overridable. Never override them at the design layer.
