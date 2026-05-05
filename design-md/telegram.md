---
name: Telegram
tagline: Cloud-blue messaging — #2aabee voltage on white, custom paper-plane wordmark, and a friendly geometric sans across every chat surface.
author: webdesignhot
source_url: https://telegram.org
spec: design.md/v1.5
quality: curated
featured: false
categories: [social, saas]
tags: [light, blue, sans, clean, friendly, technical]
preview_swatch: ['#ffffff', '#2aabee', '#0088cc']
related: [discord, slack]
description: 'Telegram''s visual identity is built on a single confident sky-cloud blue (`#2aabee`) and a paper-plane wordmark that signals the brand''s "messages take flight" promise. The marketing surface runs on a `#ffffff` clean canvas with `#2aabee` accent CTAs, while the in-product chat surface uses a slightly cooler `#1c2733` dark navy as default and offers user-customizable chat backgrounds. Roboto on Android, SF Pro on iOS, and a custom Telegram Sans on web — the system embraces native typography while preserving consistent color voltage. The brand''s defining visual is the chat-bubble pair: outgoing in `#effdde` mint-soft on light or `#766ac8` violet on dark, incoming in `#ffffff` white or `#182533` deep-navy. The platform reads as cloud-sync minimalism — secure, fast, infrastructure-feeling.'

colors:
  bg: '#ffffff'                  # marketing canvas — clean white
  bg-soft: '#f4f4f5'             # secondary background
  bg-deep: '#1c2733'              # in-product dark canvas
  bg-chat-light: '#e4ebf2'        # default chat background (light)
  bg-chat-dark: '#0e1621'         # default chat background (dark)
  surface: '#ffffff'              # card surface (light)
  surface-hover: '#f4f4f5'        # hover lift
  surface-elevated: '#ffffff'     # nested cards
  surface-dark: '#1c2733'         # surface dark mode
  surface-soft: '#fafafa'          # near-white band tint
  text: '#000000'                 # primary text on light
  text-strong: '#000000'          # heading-grade
  text-body: '#222222'            # body running-text
  text-muted: '#707579'           # metadata, "online", "·now"
  text-soft: '#a8b3bd'            # secondary captions
  text-faint: '#cccccc'           # tertiary
  text-on-brand: '#ffffff'        # white text on cloud-blue
  text-on-light: '#000000'
  text-on-dark: '#ffffff'         # text on dark mode
  brand: '#2aabee'               # Telegram cloud-blue — the brand voltage
  brand-hover: '#1c8db8'         # press / hover-darker
  brand-active: '#0088cc'        # legacy darker blue, pressed state
  brand-deep: '#0088cc'          # deep blue for dark surface accents
  brand-soft: 'rgba(42,171,238,0.08)' # tinted soft surface
  brand-light: '#daf0fa'         # very-light blue tint for selected chat
  outgoing-bubble-light: '#effdde'  # soft mint for outgoing chat (light)
  outgoing-bubble-dark: '#766ac8'   # soft violet for outgoing chat (dark)
  incoming-bubble-light: '#ffffff'  # white for incoming (light)
  incoming-bubble-dark: '#182533'   # deep navy for incoming (dark)
  link: '#2aabee'                # link blue — same as brand
  link-hover: '#1c8db8'
  border: '#dadce0'              # 1px hairline
  border-strong: '#a8b3bd'       # heavier divider
  border-subtle: '#f4f4f5'       # near-invisible
  on-brand: '#ffffff'
  on-bg: '#000000'
  shadow-color: 'rgba(0,0,0,0.08)'
  shadow-elevated: 'rgba(0,0,0,0.16)'
  unread-badge: '#4fae4e'        # green unread count badge — the second brand voltage
  status-online: '#4fae4e'       # online green
  status-away: '#f59e0b'         # away gold
  reaction-bg: '#daf0fa'         # reaction emoji background tint
  message-time: '#707579'        # message timestamp
  reply-quote: '#2aabee'         # reply quote left-border (matches brand)
  call-active: '#4fae4e'         # active call green
  message-read: '#2aabee'        # double-check read indicator
  success: '#4fae4e'             # success green — matches unread/online
  warning: '#f59e0b'             # caution gold
  danger: '#e53935'              # error red
  info: '#2aabee'                # informational — matches brand

typography:
  display:
    family: '"Telegram Sans", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: "'cv11'"
  body:
    family: '"Telegram Sans", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"SF Mono", "Roboto Mono", ui-monospace, Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 56, weight: 700, lineHeight: 1.10, tracking: '-0.5px', family: display, notes: 'marketing landing h1' }
    display-lg:      { size: 40, weight: 700, lineHeight: 1.15, tracking: '-0.3px', family: display }
    display-md:      { size: 32, weight: 600, lineHeight: 1.20, tracking: '-0.2px', family: display }
    display-sm:      { size: 24, weight: 600, lineHeight: 1.25, tracking: 0,        family: display }
    title-lg:        { size: 20, weight: 600, lineHeight: 1.30, tracking: 0,        family: display, notes: 'chat name in header' }
    title-md:        { size: 18, weight: 600, lineHeight: 1.30, tracking: 0,        family: display }
    title-sm:        { size: 16, weight: 500, lineHeight: 1.40, tracking: 0,        family: body, notes: 'chat list contact name' }
    chat-name:       { size: 16, weight: 600, lineHeight: 1.30, tracking: 0,        family: body, notes: 'sender name in chat' }
    body-md:         { size: 15, weight: 400, lineHeight: 1.35, tracking: 0,        family: body, notes: 'chat message body' }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.40, tracking: 0,        family: body }
    metadata:        { size: 12, weight: 400, lineHeight: 1.30, tracking: 0,        family: body, notes: 'message timestamp, "last seen 4h ago"' }
    label:           { size: 12, weight: 600, lineHeight: 1.30, tracking: '0.3px',  family: body }
    caption:         { size: 11, weight: 500, lineHeight: 1.30, tracking: 0,        family: body }
    code-md:         { size: 14, weight: 400, lineHeight: 1.50, tracking: 0,        family: mono }
    code-sm:         { size: 13, weight: 400, lineHeight: 1.50, tracking: 0,        family: mono }
    button:          { size: 15, weight: 500, lineHeight: 1.0,  tracking: 0,        family: body }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.4,  tracking: 0,        family: body }
    counter:         { size: 12, weight: 700, lineHeight: 1.0,  tracking: 0,        family: body, notes: 'unread count badge — always bold' }

radius:
  micro: 2
  xs: 6
  sm: 8
  md: 12
  lg: 16
  bubble-message: 18                  # chat-bubble radius — friendly, generous
  bubble-tail: '0 18 18 18'           # asymmetric corner: top-left at 0 for bubble tail
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

layout:
  page-width: 1200
  chat-list-width: 360
  chat-feed-width: 720
  header-height: 56

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: pill
    padding: '12px 32px'
    height: 44
    fontWeight: 500
    use: 'Try Telegram, Sign Up — cloud-blue pill'
  button-secondary:
    backgroundColor: transparent
    textColor: brand
    border: '1.5px solid brand'
    rounded: pill
    padding: '12px 32px'
    height: 44
    use: 'secondary action — outlined cloud-blue'
  button-ghost:
    backgroundColor: transparent
    textColor: text-muted
    rounded: pill
    padding: '8px 16px'
    use: 'tertiary action'
  button-icon:
    backgroundColor: transparent
    textColor: text-muted
    rounded: pill
    size: 40
    use: 'attachment, emoji, voice icons in composer'
  card-feature:
    backgroundColor: bg
    border: 'none'
    rounded: lg
    padding: 32
    use: 'marketing feature card with illustrated icon'
  card-chat-list-row:
    backgroundColor: surface
    paddingY: 12
    paddingX: 16
    use: 'chat list row — avatar + name + preview + time + unread'
  card-message-bubble-incoming:
    backgroundColor: incoming-bubble-light
    textColor: text
    rounded: bubble-message
    padding: '8px 14px'
    border: '1px solid border-subtle'
    use: 'incoming message bubble (light mode)'
  card-message-bubble-outgoing:
    backgroundColor: outgoing-bubble-light
    textColor: text
    rounded: bubble-message
    padding: '8px 14px'
    use: 'outgoing message bubble (light mode) — soft mint'
  card-pinned-message:
    backgroundColor: brand-soft
    leftBorder: '3px solid brand'
    padding: '8px 12px'
    use: 'pinned message at top of chat'
  badge-unread:
    backgroundColor: unread-badge
    textColor: on-brand
    rounded: pill
    padding: '2px 8px'
    minWidth: 20
    use: 'unread count badge — always green'
  badge-mention:
    backgroundColor: brand
    textColor: on-brand
    rounded: pill
    padding: '2px 8px'
    use: '@mention indicator — cloud-blue pill'
  badge-verified:
    backgroundColor: brand
    iconColor: on-brand
    rounded: pill
    size: 16
    use: 'verified channel checkmark'
  badge-online:
    backgroundColor: status-online
    rounded: pill
    size: 12
    use: 'green online indicator on avatar'
  text-input:
    backgroundColor: bg
    textColor: text
    border: '1px solid border'
    rounded: lg
    padding: '12px 16px'
    height: 48
  search-bar:
    backgroundColor: surface-soft
    textColor: text
    border: 'none'
    rounded: pill
    padding: '8px 16px'
    use: 'chat list search input'
  textarea-message-composer:
    backgroundColor: bg
    textColor: text
    border: '1px solid border'
    rounded: pill
    padding: '12px 16px'
    use: 'message composer — pill-shaped input'
  top-nav:
    backgroundColor: bg
    textColor: text
    height: 56
    border: '1px solid border-subtle'
  chat-list-rail:
    backgroundColor: bg
    width: 360
    use: 'left chat list with all conversations'
  chat-header:
    backgroundColor: bg
    height: 56
    border: '1px solid border-subtle'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 150
  duration-standard: 250
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — message-bubble entrance animation skipped, transitions to opacity-only'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1024
  wide: 1200

shadows:
  ambient: 'rgba(0,0,0,0.04) 0 1px 2px'
  standard: 'rgba(0,0,0,0.08) 0 4px 12px'
  elevated: 'rgba(0,0,0,0.16) 0 12px 24px'
  deep: 'rgba(0,0,0,0.24) 0 24px 48px'
  ring: '0 0 0 2px #2aabee'

accessibility:
  contrast-text-on-bg: 21.0              # AAA — black on white
  contrast-text-on-brand: 4.5            # AA at body sizes — white on #2aabee
  contrast-muted-on-bg: 4.7              # AA — #707579 on white
  contrast-link-on-bg: 3.9               # passes large-text AA — link-blue on white
  focus-ring: '2px solid #2aabee with 2px offset'
  reduced-motion-honored: true

dark-mode: 'native — Telegram offers Day, Night, and customizable chat backgrounds'
---

## 1. Visual Theme & Atmosphere

Telegram's visual surface reads like cloud infrastructure dressed in a friendly conversational shell — a clean white marketing canvas (`#ffffff`) accented by a confident sky-cloud blue (`#2aabee`) that crackles through every CTA, every link, every selected chat row. The hue itself is meaningful: not the saturated saturated Twitter-blue or Slack-purple, not the corporate IBM-blue, but a slightly desaturated cyan-blue that evokes "messages flying through clouds" — which is precisely the brand's narrative ("messages take flight"). The marketing wordmark is a custom geometric sans paired with the paper-plane glyph; the favicon and app icon strip everything down to that single white plane on a `#2aabee` circle.

The defining gesture is the **chat bubble pair**. Incoming messages render in white (`#ffffff`) on light mode or deep navy (`#182533`) on dark, with a 1px subtle border and 18px generous radius. Outgoing messages render in soft mint (`#effdde`) on light mode or soft violet (`#766ac8`) on dark — the asymmetry signals direction without arrows. The bubble corners use an 18px radius on three corners and a 0px corner where the bubble "tails" toward the avatar, producing the friendly chat-app silhouette that's now industry-standard but originated in Telegram's 2013 launch design. Combined with the `#2aabee` cloud-blue voltage on send buttons, attachment icons, and pinned messages, the chat surface feels both warm and engineered.

The page rhythm differs significantly between marketing and product. The marketing site (telegram.org) is a clean white-canvas, magazine-grade landing flow with generous illustrations of the paper-plane mascot in various scenarios (delivering messages, carrying stickers, soaring through clouds). The product surface (web.telegram.org and the apps) is a tri-column layout: 360px left chat list, 720px center chat feed, 360px right details panel. The chat feed renders messages bottom-up with auto-scroll, message bubbles aligned left (incoming) or right (outgoing), and a pill-shaped composer pinned to the bottom edge.

Type voice runs platform-native fonts: SF Pro on iOS / macOS, Roboto on Android / web Linux, and a custom **Telegram Sans** on web (a slight modification of Inter optimized for Russian and CJK glyphs). Display sizes hit 56px / 700 / -0.5px tracking on marketing pages; chat message body sits at 15px / 400 / 1.35 line-height. The system aggressively respects platform conventions — buttons are pill-shaped on iOS but slightly squarer on Android, status text uses platform-native sizes — which gives Telegram its native feel across surfaces.

The cloud-blue voltage is used scarcely on individual elements (one CTA per band, one selected-row indicator) but generously on full-bleed brand bands at conversion points. Beyond `#2aabee`, the only persistent saturated color is the **green unread-count badge** (`#4fae4e`), borrowed from iOS message-app conventions but tuned slightly cooler. The combination — cloud-blue + grass-green on white — gives Telegram its instantly-recognizable infrastructure-friendly chromatic register.

**Key Characteristics:**
- Single brand voltage: `#2aabee` cloud-blue (Telegram blue) — used scarcely on elements, generously on bands.
- Chat-bubble grammar: incoming (white / dark navy) + outgoing (soft mint / soft violet), both with 18px radius and asymmetric tail corner.
- Paper-plane wordmark — the @telegram brand mark since 2013.
- Platform-native typography (SF Pro / Roboto / Telegram Sans) — the system embraces native rendering.
- Green unread-count badge (`#4fae4e`) — the second persistent saturated color.
- Pill-shaped CTAs and message composer — the friendly geometry signal.
- Customizable chat backgrounds — the platform's signature personalization feature.
- Tri-column layout: chat list / feed / details panel.
- Linked-message left-border quote (3px `#2aabee` cloud-blue) — the reply convention.
- Cross-platform: iOS / Android / Web / Mac / Linux / Windows — the brand survives across all.

## 2. Color Palette & Roles

### Primary
- **Bg / Marketing** (`#ffffff`): Clean white canvas on telegram.org and marketing surfaces.
- **Bg / Chat (light)** (`#e4ebf2`): Default light-mode chat background — soft sky-grey-blue.
- **Bg / Chat (dark)** (`#0e1621`): Default dark-mode chat background — deep navy.
- **Bg / Product (dark)** (`#1c2733`): Default dark-mode product surface (chat list, settings).
- **Text** (`#000000`): Primary text on light marketing surfaces.
- **Brand** (`#2aabee`): Telegram cloud-blue — the brand voltage.

### Brand & Dark
- **Brand** (`#2aabee`): Cloud-blue used on every primary CTA, every link, every reply-quote left-border, every send button.
- **Brand Hover** (`#1c8db8`): Press / hover-darker.
- **Brand Active** (`#0088cc`): Pressed state — also the legacy "Telegram blue" from earlier brand iterations.
- **Brand Deep** (`#0088cc`): Same hex as active — used on dark surface accents where the brighter `#2aabee` would feel too saturated.
- **Brand Soft** (`rgba(42,171,238,0.08)`): Tinted soft surface — used on selected chat row in chat list, mention-message highlight.
- **Brand Light** (`#daf0fa`): Very-light blue tint — used on reaction-emoji backgrounds, calendar today highlight.

### Accent (Chat Bubbles)
- **Outgoing Bubble Light** (`#effdde`): Soft mint — outgoing message bubble on light mode. Almost-pastel, cool register.
- **Outgoing Bubble Dark** (`#766ac8`): Soft violet — outgoing on dark mode. The two outgoing colors are equally iconic.
- **Incoming Bubble Light** (`#ffffff`): White — incoming message on light.
- **Incoming Bubble Dark** (`#182533`): Deep navy — incoming on dark.

### Status & Unread
- **Unread Badge** (`#4fae4e`): Grass-green pill — the unread message count. The second persistent saturated color on the platform.
- **Status Online** (`#4fae4e`): Same hue as unread — green online indicator dot on avatars.
- **Status Away** (`#f59e0b`): Gold — "last seen 5 minutes ago" register.
- **Message Read** (`#2aabee`): Cloud-blue double-checkmark on sent and read messages.
- **Call Active** (`#4fae4e`): Same green for active call indicators.

### Interactive
- **Link** (`#2aabee`): Inline body links default to cloud-blue.
- **Link Hover** (`#1c8db8`): Hover-darker.
- **Selected** (`rgba(42,171,238,0.12)`): Selected chat row background — soft brand tint.
- **Focus Ring** (`#2aabee`): 2px solid cloud-blue ring.

### Neutral Scale
- **Text** (`#000000`): Primary text on light.
- **Text Strong** (`#000000`): Heading-grade.
- **Text Body** (`#222222`): Body running-text — slight softness from black.
- **Text Muted** (`#707579`): Metadata, timestamps, "last seen", "typing...".
- **Text Soft** (`#a8b3bd`): Secondary captions, fine-print.
- **Text Faint** (`#cccccc`): Tertiary fine-print, disabled.

### Surface & Borders
- **Surface** (`#ffffff`): Card and message bubble surface (light).
- **Surface Hover** (`#f4f4f5`): Hover lift on cards.
- **Surface Soft** (`#fafafa`): Near-white band tint.
- **Border** (`#dadce0`): 1px hairline on inputs, dividers.
- **Border Strong** (`#a8b3bd`): Heavier divider on focused inputs.
- **Border Subtle** (`#f4f4f5`): Near-invisible separator inside chat list.

### Shadow Colors
- **Shadow Standard** (`rgba(0,0,0,0.08)`): Default card hover shadow.
- **Shadow Elevated** (`rgba(0,0,0,0.16)`): Modal and dialog shadow.
- **Shadow Deep** (`rgba(0,0,0,0.24)`): Lightbox / overlay shadow.

### Semantic
- **Success** (`#4fae4e`): Same hue as unread badge.
- **Warning** (`#f59e0b`): Gold — caution states.
- **Danger** (`#e53935`): Saturated red — destructive actions.
- **Info** (`#2aabee`): Same as brand — informational.

## 3. Typography Rules

### Font Family
- **Primary (Telegram Sans)**: `"Telegram Sans", "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif`. Telegram Sans is a custom Inter-derivative optimized for Cyrillic and CJK glyphs; SF Pro and Roboto fallbacks ensure native rendering on Apple and Android.
- **Mono**: `"SF Mono", "Roboto Mono", ui-monospace, Menlo, Consolas, monospace`. Code blocks inside messages, technical references.
- **OpenType features**: `'cv11'` for the disambiguated I/l/1 in metadata.
- **No serif**: Telegram is a messaging platform — no editorial register requires serif.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Telegram Sans | 56 | 700 | 1.10 | -0.5px | — | Marketing landing h1 |
| display-lg | Telegram Sans | 40 | 700 | 1.15 | -0.3px | — | Section heads on marketing |
| display-md | Telegram Sans | 32 | 600 | 1.20 | -0.2px | — | Sub-section heads |
| display-sm | Telegram Sans | 24 | 600 | 1.25 | 0 | — | Card titles, modal heads |
| title-lg | Telegram Sans | 20 | 600 | 1.30 | 0 | — | Chat name in chat header |
| title-md | Telegram Sans | 18 | 600 | 1.30 | 0 | — | Section heads, settings titles |
| title-sm | Telegram Sans | 16 | 500 | 1.40 | 0 | — | Chat list contact name |
| chat-name | Telegram Sans | 16 | 600 | 1.30 | 0 | — | Sender name in group chat above message |
| body-md | Telegram Sans | 15 | 400 | 1.35 | 0 | — | Chat message body — the default reading register |
| body-sm | Telegram Sans | 13 | 400 | 1.40 | 0 | — | Secondary body, settings descriptions |
| metadata | Telegram Sans | 12 | 400 | 1.30 | 0 | — | Message timestamp, "last seen 4h ago" |
| label | Telegram Sans | 12 | 600 | 1.30 | 0.3px | — | Pill labels |
| caption | Telegram Sans | 11 | 500 | 1.30 | 0 | — | Tooltip text, ultra-fine annotations |
| code-md | SF Mono | 14 | 400 | 1.50 | 0 | — | Code blocks inside messages |
| code-sm | SF Mono | 13 | 400 | 1.50 | 0 | — | Inline code spans |
| button | Telegram Sans | 15 | 500 | 1.0 | 0 | — | Primary CTA pill text |
| nav-link | Telegram Sans | 14 | 500 | 1.4 | 0 | — | Side nav menu items |
| counter | Telegram Sans | 12 | 700 | 1.0 | 0 | — | Unread count badge — always bold |

### Principles
- **Display weights stay at 600–700.** No 800 or 900 — the brand voice is friendly-confident, not assertive.
- **Body sits at 15px / 400 / 1.35.** Slightly tighter than typical messaging (Discord, Slack at 15/1.4).
- **Platform-native fallbacks are critical.** Telegram aggressively defers to system fonts to feel native — SF Pro on Apple, Roboto on Android, Inter / Telegram Sans on web Linux.
- **No italic for emphasis.** Italic is reserved for code highlighting and forward labels.
- **Slight negative tracking only at largest sizes.** Telegram doesn't push as far as X or ClickHouse — display tracking maxes at -0.5px.
- **Mono only for code.** Don't use mono as decoration.

## 4. Component Stylings

### Buttons (4 variants)

**`button-primary`** — The cloud-blue pill. Background `#2aabee`, text `#ffffff`, Telegram Sans 15px / 500, padding 12px × 32px, height 44px, radius 9999 (pill). Used on Try Telegram, Sign Up, primary CTAs across marketing. Hover background darkens to `#1c8db8` over 150ms.

**`button-secondary`** — Outlined pill. Background transparent, text `#2aabee`, 1.5px solid `#2aabee` border, same shape and padding. Used as secondary action paired with primary CTA.

**`button-ghost`** — Tertiary text-only. Transparent background, text `#707579`, no border, padding 8px × 16px. Used for "Cancel" and inline link CTAs.

**`button-icon`** — Composer / chat icon. Transparent background, icon `#707579` muted, 40 × 40px, radius 9999. Used for attachment, emoji, voice-message, send buttons in composer. Send button fills `#2aabee` when message has content.

### Cards

**`card-feature`** — Marketing feature card. White background, no border, 16px radius, 32px padding. Used for product feature descriptions on marketing pages with illustrated icons.

**`card-chat-list-row`** — Chat list row in left rail. White background, 12px × 16px padding, no border, separated by 1px `#f4f4f5` divider below. 48px circular avatar + chat name + last message preview + timestamp + unread badge.

**`card-message-bubble-incoming`** — Incoming message bubble. Background `#ffffff`, text `#000000`, 18px radius (with 0px tail corner toward avatar), 8px × 14px padding, 1px `#f4f4f5` border for definition.

**`card-message-bubble-outgoing`** — Outgoing message bubble. Background `#effdde` (soft mint), text `#000000`, 18px radius (with 0px tail corner toward send-direction edge), 8px × 14px padding. Read indicator (cloud-blue double-check) appears bottom-right.

**`card-pinned-message`** — Pinned message card at top of chat. Background `rgba(42,171,238,0.08)` brand-soft, 3px solid `#2aabee` left border, 8px × 12px padding. The cloud-blue left-edge is the pinned indicator.

**`card-reply-quote`** — Quoted reply inside outgoing message. 3px solid `#2aabee` left-border, 4px × 8px padding inside the parent message bubble. Quoted sender name in 13/600 cloud-blue, quoted text in 13/400 muted.

### Badges & Pills

**`badge-unread`** — Green unread count pill. Background `#4fae4e`, text `#ffffff`, 12/700, pill, padding 2px × 8px, min-width 20px. Replaces with circular dot when count is unmuted (just an indicator).

**`badge-mention`** — Cloud-blue @mention badge. Background `#2aabee`, text `#ffffff`, 12/700, pill, padding 2px × 8px. Marks chats with active @mentions.

**`badge-verified`** — Verified channel checkmark. 16px circular `#2aabee` cloud-blue with white checkmark, inline next to channel name.

**`badge-online`** — Green online dot on avatar. 12 × 12px green circle (`#4fae4e`) with 2px white border, positioned bottom-right of avatar.

**`badge-pinned`** — Pin icon next to chat in list. 12px pin glyph in `#707579` muted.

### Inputs / Forms

**`text-input`** — Standard input. Background `#ffffff`, text `#000000`, 1px `#dadce0` border, 16px radius (lg), 12px × 16px padding, height 48px. Placeholder `#707579`.

**`text-input-focused`** — Border thickens to 2px solid `#2aabee` cloud-blue.

**`textarea-message-composer`** — The signature message composer. Pill-shaped (radius 9999), 1px `#dadce0` border, 12px × 16px padding. Multi-line textarea with auto-grow. Bottom row: emoji icon left, attachment icon, voice-message icon, and send button (cloud-blue when content exists, mic icon when empty).

**`search-bar`** — Chat list search. Background `#fafafa`, no border, pill shape (radius 9999), 8px × 16px padding. Magnifying glass icon left.

### Navigation

**`top-nav`** — White header with 1px `#f4f4f5` bottom border, 56px tall, background `#ffffff`. Telegram wordmark left (paper-plane glyph + "Telegram"), nav items center (Apps / FAQ / Press), right cluster: Login button.

**`chat-list-rail`** — Left chat list, 360px wide, background `#ffffff`. Top: search bar + folder tabs (All / Unread / Personal / Groups). Below: scrolling chat list with unread badges.

**`chat-header`** — Top of chat feed, 56px tall, background `#ffffff`, 1px `#f4f4f5` bottom border. Back arrow (mobile) + 40px circular avatar + chat name + "last seen" status + right cluster: search, call, more icons.

**`bottom-nav-mobile`** — Mobile bottom nav: Chats / Calls / People / Settings. The Chats tab shows the unread count badge.

### Decorative

**`message-tail`** — Asymmetric corner on chat bubbles. 18px radius on three corners; 0px on the corner pointing toward the avatar (incoming) or send-direction (outgoing). The tail is what makes Telegram bubbles feel like dialog vs. like cards.

**`paper-plane-mascot`** — Telegram's paper-plane glyph used as wordmark, favicon, app icon, and decorative illustration. Always white-on-blue or blue-on-white.

**`reaction-emoji`** — Inline emoji reactions below messages. Background `#daf0fa` brand-light, 14px radius, padding 2px × 6px, with emoji + count. Multiple reactions stack horizontally.

**`typing-indicator`** — Three animated dots (`#707579` muted) at bottom of chat header when other party is typing. 1.4s loop with 200ms stagger.

**`call-button-floating`** — Circular green call button (`#4fae4e`, 64 × 64px, radius 9999) that floats bottom-right when in active call.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96`. Telegram uses moderately spacious whitespace — looser than Twitter/X but tighter than Bluesky. Marketing pages have 64–96px section padding; chat list rows have 12px vertical padding; message bubbles have 8px vertical padding.

### Grid & Container
Marketing surface: 1200px max width with 12-column grid. Product surface: tri-column layout (360 chat list + 720 chat feed + optional 360 details panel = 1440px wide on desktop). The chat feed center column is the focal area; left rail is persistent navigation; right rail expands on demand for chat info, shared media, etc.

### Whitespace Philosophy
Telegram's whitespace is **conversational-friendly**. Chat bubbles have 8px vertical padding inside (compact for many messages per scroll), but bubble margins (8px between bubbles, 16px between conversation segments) provide reading rhythm. Marketing pages use generous 64–96px section padding to feel premium; product surface uses 12–16px row padding for density.

### Section Cadence
Marketing pages alternate white feature bands and accent product showcases, with the cloud-blue brand band as the conversion endpoint. Product pages run uninterrupted: chat list rows separated by 1px hairlines; chat feed with bubbles separated by 8px gaps and 16px conversation-segment breaks. Date dividers appear as centered pill labels ("Today", "Yesterday") with `#2aabee` brand color.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 2px | Inline tag chips, syntax-highlight backgrounds |
| XS | xs | 6px | Small badge accents |
| Standard | sm | 8px | Tooltip cards |
| Comfortable | md | 12px | Settings rows, modal sub-elements |
| Large | lg | 16px | Cards (feature, modal, settings) — the default content card radius |
| Bubble Message | bubble | 18px | Chat-bubble radius (with asymmetric tail corner) |
| Pill | pill | 9999px | Buttons, search bar, message composer, badges, avatars |

Telegram's signature radii are **18px on chat bubbles** (with 0px on the tail corner) and **9999px on every button and the message composer**. The pill-shaped composer is one of the platform's most distinctive geometric choices — every other major messaging platform (Slack, Discord, WhatsApp) uses a more rectangular composer.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Body sections, top nav, chat feed canvas |
| 1 — Hairline | 1px `#dadce0` border or `#f4f4f5` divider | Input fields, chat list dividers |
| 2 — Subtle | `rgba(0,0,0,0.04) 0 1px 2px` | Hover state on chat list rows, card hover |
| 3 — Standard | `rgba(0,0,0,0.08) 0 4px 12px` | Card hover lift, dropdown menus |
| 4 — Modal | `rgba(0,0,0,0.16) 0 12px 24px` + backdrop dim | Compose modal, settings dialog, attachment panel |
| 5 — Lightbox | `rgba(0,0,0,0.24) 0 24px 48px` | Image lightbox, video fullscreen |

### Shadow Philosophy
Telegram's depth comes from a combination of subtle hairline borders and gentle drop shadows. Chat bubbles use a 1px `#f4f4f5` border for definition (very subtle); modals use traditional drop shadows. The system avoids dramatic elevation — the brand voice is "secure and reliable" rather than "magical and floating," so depth stays conservative.

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hovers, opens, transitions.
- **Emphasized ease (spring-bounce)**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — message-bubble entrance, send button confirmation, success animations.

### Duration Buckets
- **Fast (150ms)**: Color and opacity shifts on hover, button press feedback.
- **Standard (250ms)**: Card hover lift, dropdown open, modal entrance, bubble entrance.
- **Slow (400ms)**: Page transitions, chat-feed scroll-to-bottom on new message, attachment drawer open.

### Per-Component Micro-States
- **Button hover**: Cloud-blue CTA darkens from `#2aabee` → `#1c8db8` over 150ms; no transform.
- **Button press**: Scale 1.0 → 0.97 → 1.0 over 200ms with spring-bounce.
- **Message bubble entrance**: New incoming message fades in + scales 0.95 → 1.0 over 250ms with spring-bounce. Outgoing message slides from right + fades over 250ms.
- **Send button pulse**: When clicked, send button briefly scales 1.0 → 1.1 → 1.0 over 200ms; then mutates to mic icon if textarea is empty.
- **Typing indicator**: Three dots fade in/out in 1.4s loop with 200ms stagger between dots.
- **Reaction emoji**: When tapped, emoji briefly scales 1.0 → 1.3 → 1.0 over 240ms with spring-bounce.
- **Chat list row hover**: Background shifts from `#ffffff` → `#f4f4f5` over 150ms.
- **Selected chat row**: Background shifts to `rgba(42,171,238,0.08)` brand-soft over 150ms.
- **Input focus**: 2px solid cloud-blue ring expands from 0 → 2px over 150ms.

### Page Transitions
Telegram uses platform-native page transitions. On mobile, chat detail slides in from right with 250ms standard ease. On desktop, chat selection from list is instant (no transition); right details panel expands with 300ms slide. Section reveals on marketing pages are 400ms fade-in (no translate).

### Reduced Motion
`prefers-reduced-motion: reduce` honored: message-bubble entrance reduced to instant fade (no scale or slide), reaction emoji scale-up replaced with instant color change, typing-indicator dots animate with reduced amplitude (0.7 → 1.0 instead of 0.5 → 1.0), page transitions become instant cuts.

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#000000` on `#ffffff` = **21.0** — AAA at every size.
- **Body on bg**: `#222222` on `#ffffff` = **15.9** — AAA.
- **Muted on bg**: `#707579` on `#ffffff` = **4.7** — AA at body sizes.
- **On-brand on brand**: `#ffffff` on `#2aabee` = **4.5** — AA at body sizes; bold-weight CTA text passes large-text AAA.
- **Link on bg**: `#2aabee` on `#ffffff` = **3.9** — passes large-text AA only; for small text use `#0088cc` (5.5 — AA).

### Focus Indicators
Every focusable element shows a 2px solid `#2aabee` cloud-blue ring with 2px offset. The brand-blue ring is unmistakable on both light and dark canvases.

### ARIA Patterns
- **Chat list row**: Native `<button aria-label="Chat with [name], 3 unread">` with `aria-current="true"` on selected.
- **Message bubble**: Wrapped in `<article aria-label="Message from [sender]">` with timestamp announced.
- **Send button**: `<button aria-label="Send message">`; transforms to "Record voice message" when textarea empty.
- **Reaction emoji**: `<button aria-pressed="true|false" aria-label="React with thumbs up">`.
- **Modal dialogs**: `role="dialog"` with `aria-labelledby`; ESC closes; focus trapped.
- **Verified badge**: `aria-label="Verified channel"`.

### Keyboard Navigation
Tab order: skip-link → chat list → chat feed → composer → details panel. Skip-link at top jumps to `<main>`. Arrow Up / Arrow Down navigates between chat list rows. Enter opens selected chat. Escape clears chat selection or closes modal. `/` focuses search bar.

### Screen Reader Hints
Unread counts use long-form labels ("3 unread messages"). Reactions announce as "5 reactions: 3 thumbs up, 2 hearts." Message read status announced as "delivered" or "read." Voice messages announce duration ("Voice message, 12 seconds").

### Reduced Motion Handling
Honored via `@media (prefers-reduced-motion: reduce)` — message bubble entrance reduced to instant fade, reaction scale skipped, typing indicator amplitude reduced, all hover scale animations removed.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 480px | Single-column view (chat list OR chat feed); bottom nav appears; back arrow returns to list |
| Tablet | 480–768px | Two-column (chat list + feed); details panel hidden |
| Desktop | 768–1200px | Tri-column (list + feed + details panel) |
| Wide | > 1200px | Same as desktop with more breathing room; max content 1440px |

### Touch Targets
- Chat list row: 64 × 360px minimum (12px vertical padding + 40px avatar + content).
- Composer icons: 40 × 40px each.
- Send button: 40 × 40px circular.
- Primary CTA pill: 44 × 44px minimum.

### Collapsing Strategy
At < 768px right details panel hides. At < 480px chat list and chat feed become exclusive views (selecting a chat replaces the list view). Composer remains pill-shaped at all sizes; emoji and attachment buttons may collapse into a "+" menu on smallest mobile.

### Image Behavior
Image attachments inside messages use 12px radius and full-bleed within the bubble. Multi-image attachments use a 2x2 or grid layout. Profile avatars are circular (radius 9999) at 32 / 40 / 48 / 96px standard sizes.

## 11. Content & Voice

### Tone
**Friendly, technical-confident, internationalist.** Telegram writes for users who value privacy and speed. Marketing copy ("Telegram is fast, reliable, and free.") leads with infrastructure benefits; product copy ("New message from [name]") is direct and functional. The voice rejects American-startup warmth ("Hey there!") and embraces a neutral, slightly-formal register that translates well across 100+ languages.

### Microcopy Patterns
- **CTA verbs**: "Try Telegram", "Sign Up", "Send Message", "Add Member". Short, action-oriented, faintly-formal.
- **Compose placeholder**: "Message" (single word, ultra-minimal).
- **Empty chat**: "Start a conversation. Type a message below." Or for groups: "No messages yet. Be the first to say hello."
- **Last seen**: "last seen 4 hours ago", "last seen recently", "last seen within a week" — privacy-graded labels.
- **Read indicators**: Single check (sent) → Double check (delivered) → Double check in cloud-blue (read). Universally-understood across messaging platforms but Telegram pioneered the cloud-blue read indicator.

### Empty States
- **Empty chat list**: "No chats here yet. Tap + to start a new conversation."
- **Empty media tab**: "Photos and videos shared in this chat will appear here."
- **Empty contacts**: "Find friends already on Telegram."
- **Empty notifications**: "You have no unread notifications."

### Error Messages
**Pattern**: Inline red text below input field for validation; toast for system errors. Never apologetic. Network failures preserve the draft. Failed messages show a red "!" icon with retry tap.

### Success Confirmations
Single-line toast: "Message sent" / "Contact added" / "Channel created." Auto-dismisses after 3s. Send confirmation is silent — visual feedback (single-check appearing) is the confirmation.

### CTA Verb Conventions
"Send" (not "Submit") / "Reply" (not "Comment") / "Forward" (not "Share") / "Add to Channel" (not "Subscribe") / "Save" (not "Bookmark"). Telegram's vocabulary is messaging-app-native and consistent across surfaces.

## 12. Dark Mode & Theming

Telegram ships **two default themes** — Day (light, white canvas) and Night (dark, navy canvas) — plus user-customizable chat backgrounds. Approximately 50% of users use Night mode. Beyond binary mode, users can pick custom chat backgrounds (gradients, patterns, photos), making Telegram the most personalization-friendly messaging platform.

```yaml
colors-dark:
  bg: '#1c2733'                  # default product surface
  bg-soft: '#212d3b'             # secondary background
  bg-deep: '#0e1621'              # near-black
  bg-chat-dark: '#0e1621'        # chat background
  surface: '#212d3b'              # card surface (dark)
  surface-hover: '#2a3a4d'        # hover lift
  surface-elevated: '#27384e'     # nested cards
  text: '#ffffff'                # primary text
  text-strong: '#ffffff'
  text-body: '#e6e6e6'           # body running-text
  text-muted: '#7d8790'          # metadata
  text-soft: '#5a6671'           # secondary captions
  text-faint: '#3e4a55'          # tertiary
  brand: '#2aabee'               # cloud-blue unchanged
  brand-hover: '#1c8db8'
  brand-active: '#0088cc'
  brand-deep: '#0088cc'
  brand-soft: 'rgba(42,171,238,0.16)'
  outgoing-bubble: '#766ac8'      # soft violet on dark — equally iconic
  incoming-bubble: '#182533'      # deep navy
  link: '#5cb6ec'                # link slightly brighter on dark for contrast
  link-hover: '#7fc4f0'
  border: '#2a3a4d'
  border-strong: '#3e4f63'
  unread-badge: '#4fae4e'         # green unchanged
  on-brand: '#ffffff'
```

**Defining decisions**:
- The cloud-blue `#2aabee` is unchanged across modes. Brand voltage holds.
- Outgoing bubble flips from soft mint (`#effdde`) to soft violet (`#766ac8`) — equally iconic, equally branded.
- Incoming bubble flips from white to deep navy — preserves the bubble-pair grammar.
- Green unread badge (`#4fae4e`) stays constant.
- Link color lifts slightly on dark for AAA contrast.

## 13. Lineage & Influences

Telegram's visual lineage descends from **Soviet-era cosmonaut signage**, **Russian constructivist graphic design**, and **early-2010s flat-UI Material Design**. The cloud-blue voltage echoes the official VKontakte (Russian Facebook) blue from Pavel Durov's earlier company; the paper-plane wordmark borrows from postal-service iconography (Russian Post's mail-plane logo); the chat-bubble pair with asymmetric tail corner originated in Telegram's 2013 launch and has since been copied by virtually every messaging platform (WhatsApp, Signal, iMessage, Discord).

The platform-native typography philosophy (SF Pro / Roboto / Telegram Sans) is borrowed from Apple's iOS design language — Telegram aggressively defers to platform conventions to feel "at home" on every OS. The chromatic restraint (one brand voltage + green unread + neutrals) is borrowed from infrastructure-friendly enterprise design (Slack's purple, Notion's blue) but tuned warmer.

Where Slack reaches for aubergine introversion and WhatsApp reaches for grass-green, Telegram reaches for **cloud-blue infrastructure** — secure, fast, internationalist. The brand visual identity has remained essentially unchanged since 2013, with only minor color tuning and platform-native font refinements.

- **VKontakte (legacy Pavel Durov platform)** — Cloud-blue lineage. https://vk.com
- **Russian Post** — Paper-plane mail iconography. (no URL)
- **Apple iOS / SF Pro** — Platform-native typography philosophy. https://developer.apple.com/design
- **Material Design (Google)** — Flat UI + Roboto fallback. https://material.io
- **Inter / Telegram Sans (proprietary)** — Cyrillic-optimized geometric sans. https://rsms.me/inter/
- **Slack / Notion** — Single-voltage chromatic discipline. https://slack.com / https://notion.so

## 14. Do's and Don'ts

### Do
- Anchor every CTA on cloud-blue `#2aabee`. The single brand voltage is the platform's signature.
- Use the chat-bubble pair grammar: incoming (white / dark navy) + outgoing (soft mint / soft violet) with 18px asymmetric-tail radius.
- Use the green unread-count badge (`#4fae4e`) on chat list rows. Don't substitute brand-blue.
- Use platform-native fonts: SF Pro on Apple, Roboto on Android, Telegram Sans / Inter on web.
- Use pill-shaped CTAs and message composer (radius 9999). The friendly geometry is the brand.
- Use 18px radius on chat bubbles with the 0px tail corner. The asymmetric corner is non-negotiable.
- Use cloud-blue double-checkmark for read receipts. The blue is the unique platform signal.
- Use the paper-plane glyph as wordmark, favicon, and app icon. Always white-on-blue or blue-on-white.
- Use the cloud-blue 3px left-border on pinned messages and reply-quotes. The left-edge accent is the platform's annotation grammar.
- Honor user-customizable chat backgrounds. The personalization is the platform's signature feature.

### Don't
- Don't introduce a third brand color. Telegram is cloud-blue + green-unread + neutrals.
- Don't use saturated red, orange, or purple as decorative accents. The chromatic discipline is part of the trust signal.
- Don't replace the paper-plane glyph with a generic chat-bubble icon. The plane IS the brand.
- Don't soften the asymmetric tail corner on chat bubbles. The 0px tail is what makes them feel like dialog.
- Don't use system-default font stacks without Telegram Sans / SF Pro / Roboto preferences. The platform-native rendering is the brand's "home" feel.
- Don't bold the message body for emphasis. Use italics or code formatting instead.
- Don't add drop shadows to chat bubbles. The 1px subtle border is the elevation.
- Don't use the cloud-blue at less than 100% saturation in primary CTAs. The brand voltage is full strength.
- Don't replace the green unread badge with a numeric-only label. The green pill IS the brand grammar.
- Don't break the pill-shaped composer. Rectangular composers feel like Slack, not Telegram.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Light:      #ffffff (white marketing canvas)
Bg / Chat Light: #e4ebf2 (default chat background)
Bg / Dark:       #1c2733 (product surface dark)
Bg / Chat Dark:  #0e1621 (chat background dark)
Surface:         #ffffff (light) / #212d3b (dark)
Border:          #dadce0 (1px hairline light)
Text:            #000000 (light) / #ffffff (dark)
Text Muted:      #707579 (metadata, "·now")
Brand:           #2aabee (Telegram cloud-blue — primary voltage)
Brand Hover:     #1c8db8 (press / hover-darker)
Outgoing Bubble: #effdde (soft mint light) / #766ac8 (soft violet dark)
Incoming Bubble: #ffffff (light) / #182533 (deep navy dark)
Unread Badge:    #4fae4e (green pill — second voltage)
On-Brand:        #ffffff (white text on cloud-blue)
```

### Example Component Prompts

1. "Create a Telegram-style chat with two messages: incoming (white bubble, 18px radius with 0px on bottom-left tail corner, 1px `#f4f4f5` subtle border, 8px × 14px padding) and outgoing (soft mint `#effdde` bubble, 18px radius with 0px on bottom-right tail corner, 8px × 14px padding) with cloud-blue double-check read indicator bottom-right."

2. "Design a primary Try Telegram CTA: pill-shaped (radius 9999), `#2aabee` cloud-blue background, white text in Telegram Sans 15/500, padding 12px × 32px, height 44px. Hover background to `#1c8db8` over 150ms."

3. "Build a chat list row: white background, 12px × 16px padding, 1px `#f4f4f5` divider below. 48px circular avatar + chat name in 16/500 + last message preview in 13/400 muted + timestamp in 12/400 muted right + green unread badge `#4fae4e` (pill, 20×16, 12/700 white count)."

4. "Compose a message composer: pill-shaped (radius 9999) with 1px `#dadce0` border, 12px × 16px padding. Multi-line auto-grow textarea. Bottom row: emoji icon left, attachment icon, voice-message icon (mic glyph), and send button. Send button transforms from mic to paper-plane in cloud-blue when textarea has content."

5. "Create a top nav for Telegram marketing: white background, 1px `#f4f4f5` bottom border, 56px tall. Telegram wordmark left (paper-plane glyph in cloud-blue + 'Telegram' in 18/600 black). Center nav: Apps / FAQ / Press / Blog. Right cluster: 'Login' link + 'Try Telegram' cloud-blue pill CTA."

6. "Design a pinned message card at top of chat: `rgba(42,171,238,0.08)` brand-soft background, 3px solid `#2aabee` cloud-blue left border, 8px × 12px padding. 'Pinned message' label in 12/500 cloud-blue + message text in 13/400 black. Chevron icon right to expand all pinned messages."

### Iteration Guide
1. Start with the cloud-blue voltage. Every Telegram-flavored design needs `#2aabee` somewhere — primary CTA, link, or accent.
2. Use the chat-bubble pair grammar wherever conversation appears. Incoming + outgoing with asymmetric tail corner is the platform's most-distinctive feature.
3. Reach for green-unread (`#4fae4e`) for any "count" or "online" indicator. Don't use brand-blue for status.
4. Type voice runs platform-native. On web, Telegram Sans (Inter); on Apple, SF Pro; on Android, Roboto. The native rendering is the brand's "home" feel.
5. Use pill-shaped CTAs (radius 9999) and pill-shaped composer. Rectangular elements drift toward Slack/Discord.
6. Body sits at 15/400/1.35. Slightly tighter than Discord (15/1.4); much tighter than Bluesky (15/1.5).
7. Use the 3px left-border `#2aabee` on pinned messages, reply quotes, and forward labels. The left-edge accent is the platform's annotation grammar.
8. Trust the chromatic restraint. Telegram is meant to feel like infrastructure — adding decoration weakens the trust signal.
