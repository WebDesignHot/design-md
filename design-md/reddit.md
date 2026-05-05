---
name: Reddit
tagline: Front-page-of-the-internet orange — community-card density, IBM Plex Sans display, and a confident #ff4500 voltage on warm grey.
author: webdesignhot
source_url: https://www.reddit.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [social, media]
tags: [bright, orange, sans, dense, playful, warm]
preview_swatch: ['#dae0e6', '#ff4500', '#1a1a1b']
related: [discord, slack, ycombinator]
description: 'Reddit''s marketing surface and product chrome share a single, decisive signal — the orange-red `#ff4500` (officially called "OrangeRed") that has carried the brand from the upvote arrow to the wordmark since 2005. The canvas is warm-grey `#dae0e6`, not white, giving every community card a slightly worn, reading-room paper feel. IBM Plex Sans handles display copy with a friendly monoline geometry, and the system''s defining rhythm is community-card density — small avatars, thin dividers, packed metadata — that makes a single subreddit feel like a folder of bulletin posts rather than a magazine spread.'

colors:
  bg: '#dae0e6'                  # warm-grey canvas — the reading-room ground
  bg-soft: '#f6f7f8'             # secondary background for cards
  bg-deep: '#030303'             # near-black for inverted bands
  surface: '#ffffff'             # post / comment card fill
  surface-hover: '#f6f7f8'       # hover state on cards and rows
  surface-elevated: '#ffffff'    # modal / dialog fill on canvas
  surface-deep: '#1a1a1b'        # dark-mode card surface (cross-mode reference)
  text: '#1a1a1b'                # primary post and comment text
  text-strong: '#030303'         # heading-grade type
  text-body: '#1c1c1c'           # body running-text
  text-muted: '#7c7c7c'          # metadata, timestamps, vote counts
  text-soft: '#878a8c'           # secondary captions, "by u/..."
  text-faint: '#9b9b9b'          # tertiary meta inside compact rows
  text-on-brand: '#ffffff'       # white type on OrangeRed surfaces
  brand: '#ff4500'               # OrangeRed — the single brand voltage
  brand-hover: '#e63e00'         # press / hover-darker
  brand-active: '#cc3700'        # pressed state
  brand-soft: '#ffe4d6'          # tinted brand-soft surface (notification badges)
  brand-deep: '#a83100'          # dark-mode brand variant
  upvote: '#ff4500'              # upvote arrow active
  downvote: '#7193ff'            # downvote arrow active — periwinkle-blue
  link: '#0079d3'                # link blue — the secondary signal hue
  link-hover: '#0061a8'          # link hover
  link-visited: '#7c4dff'        # purple visited
  border: '#edeff1'              # 1px hairline on cards
  border-strong: '#ccc'          # heavier divider on focus rows
  border-subtle: '#f6f7f8'       # near-invisible card divider
  border-card: '#ccc'            # community card border
  on-brand: '#ffffff'            # white text on brand
  on-bg: '#1a1a1b'
  shadow-color: 'rgba(28,28,28,0.08)'
  shadow-elevated: 'rgba(28,28,28,0.16)'
  award-gold: '#ffb000'          # reddit gold
  award-silver: '#c8c9d0'        # reddit silver
  award-platinum: '#39d8ff'      # reddit platinum
  flair-blue: '#46d160'          # community flair tint (varies)
  flair-pink: '#ff66ac'          # community flair tint
  flair-green: '#46d160'         # community flair tint
  community-blue: '#0079d3'      # default avatar background
  success: '#46d160'             # success toasts, "Posted" confirmation
  warning: '#ffb000'             # caution states
  danger: '#ea0027'              # remove / delete actions
  info: '#0079d3'                # informational notices

typography:
  display:
    family: '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: "'ss01', 'cv11'"
  body:
    family: '"IBM Plex Sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"IBM Plex Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 56, weight: 700, lineHeight: 1.05, tracking: '-1.5px', family: display, notes: 'marketing landing h1' }
    display-lg:      { size: 40, weight: 700, lineHeight: 1.10, tracking: '-1px',   family: display }
    display-md:      { size: 32, weight: 600, lineHeight: 1.15, tracking: '-0.5px', family: display }
    display-sm:      { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.3px', family: display }
    title-lg:        { size: 20, weight: 600, lineHeight: 1.30, tracking: 0,        family: display, notes: 'post title in feed' }
    title-md:        { size: 18, weight: 500, lineHeight: 1.35, tracking: 0,        family: display }
    title-sm:        { size: 16, weight: 500, lineHeight: 1.40, tracking: 0,        family: body,    notes: 'card section heads' }
    community-name:  { size: 14, weight: 600, lineHeight: 1.30, tracking: 0,        family: body,    notes: 'r/programming style' }
    body-md:         { size: 14, weight: 400, lineHeight: 1.50, tracking: 0,        family: body,    notes: 'comment body' }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.45, tracking: 0,        family: body,    notes: 'secondary text' }
    metadata:        { size: 12, weight: 400, lineHeight: 1.30, tracking: 0,        family: body,    notes: '"posted by u/x · 4h"' }
    label:           { size: 12, weight: 600, lineHeight: 1.30, tracking: '0.3px',  family: body }
    caption:         { size: 11, weight: 500, lineHeight: 1.30, tracking: 0,        family: body }
    code-md:         { size: 13, weight: 400, lineHeight: 1.55, tracking: 0,        family: mono }
    code-sm:         { size: 12, weight: 400, lineHeight: 1.50, tracking: 0,        family: mono }
    button:          { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.3px',  family: body }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.4,  tracking: 0,        family: body }
    vote-count:      { size: 12, weight: 700, lineHeight: 1.0,  tracking: 0,        family: body, notes: 'always bold, often colored' }

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
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96]

layout:
  page-width: 1280
  feed-width: 640
  sidebar-width: 312
  header-height: 56

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: pill
    padding: '4px 16px'
    height: 32
    fontWeight: 700
    use: 'Join, Subscribe, Create Post — the OrangeRed pill'
  button-secondary:
    backgroundColor: surface
    textColor: text
    border: '1px solid border-strong'
    rounded: pill
    padding: '4px 16px'
    height: 32
    use: 'Joined / Following — paired pill state'
  button-ghost:
    backgroundColor: transparent
    textColor: text-muted
    rounded: pill
    padding: '4px 12px'
    use: 'Share, Save, Comment count icon-buttons in post footer'
  button-upvote:
    backgroundColor: transparent
    textColor: text-muted
    activeColor: upvote
    use: 'arrow-up icon — fills #ff4500 when active'
  card-post:
    backgroundColor: surface
    border: '1px solid border-card'
    rounded: xs
    padding: '8px 16px'
    use: 'standard subreddit feed post card'
  card-community:
    backgroundColor: surface
    border: '1px solid border-card'
    rounded: xs
    padding: 16
    use: 'right-sidebar community summary card'
  card-comment:
    backgroundColor: surface
    border: 'none'
    leftBorder: '2px solid border-strong'
    paddingLeft: 16
    use: 'nested comment thread — vertical line indents replies'
  badge-flair:
    backgroundColor: flair-blue
    textColor: on-brand
    rounded: pill
    padding: '2px 8px'
    use: 'community flair tag — color varies per subreddit'
  badge-award:
    backgroundColor: surface
    textColor: award-gold
    use: 'gold/silver/platinum award icon clusters'
  badge-mod:
    backgroundColor: success
    textColor: on-brand
    rounded: pill
    padding: '0 6px'
    use: 'MOD tag next to mod usernames'
  text-input:
    backgroundColor: surface
    textColor: text
    border: '1px solid border-strong'
    rounded: xs
    padding: '8px 12px'
    height: 36
  search-bar:
    backgroundColor: bg-soft
    textColor: text
    border: '1px solid border'
    rounded: pill
    padding: '8px 16px'
    use: 'top-bar search input — pill, not rectangle'
  top-nav:
    backgroundColor: surface
    textColor: text
    border: '1px solid border'
    height: 56
  sidebar:
    backgroundColor: bg-soft
    textColor: text
    width: 270
    use: 'left navigation rail with subreddit list'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 300
  reduced-motion: 'respects prefers-reduced-motion: reduce — vote-arrow burst animation skipped, transitions to opacity-only'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(28,28,28,0.04) 0 1px 2px'
  standard: 'rgba(28,28,28,0.08) 0 2px 4px'
  elevated: 'rgba(28,28,28,0.16) 0 8px 16px'
  deep: 'rgba(28,28,28,0.20) 0 16px 32px'
  ring: '0 0 0 2px #0079d3'

accessibility:
  contrast-text-on-bg: 14.6              # AAA — #1a1a1b on #dae0e6
  contrast-text-on-brand: 4.6            # AA at body sizes — white on #ff4500
  contrast-link-on-bg: 5.8               # AA at body sizes — #0079d3 on #dae0e6
  contrast-muted-on-bg: 4.6              # AA at body sizes — #7c7c7c on #dae0e6
  focus-ring: '2px solid #0079d3 with 2px offset'
  reduced-motion-honored: true

dark-mode: full                          # Reddit ships native dark mode toggle
---

## 1. Visual Theme & Atmosphere

Reddit's marketing pages and product chrome share the same atmosphere — a slightly worn, paper-grey reading room where the OrangeRed `#ff4500` is the only sound. The canvas is `#dae0e6`, an unmistakably warm-grey with a faint cream undertone that sets the platform apart from every competitor's pure-white page; opening Reddit feels closer to opening a manila folder than a glossy magazine. Every post card sits as a white rectangle on this warm grey, gently outlined with a 1px `#ccc` hairline, the way a printed bulletin pinned to corkboard might pop against the cork.

The defining gesture is community-card density. A subreddit feed renders as a stack of horizontally-laid post rows: vote arrows on the far left, a tiny 32px subreddit avatar, a single-line title in IBM Plex Sans 600, and a thin metadata row below — "posted by u/username 4 hours ago to r/programming." The metadata is in `#7c7c7c`, the title in `#1a1a1b`, the upvote arrow in OrangeRed when active. Three layers of type, three weights, three greys — that's the brand rhythm. Reddit looks dense compared to Twitter/X (which centers a single tweet at a time) and crowded compared to Threads (which floats posts on white air). Density is the feature.

The color story is built around a single brand voltage: `#ff4500` OrangeRed, used scarcely on individual elements (one upvote arrow, one Subscribe pill) but unmistakably on every page — never replaced, never gradient-blurred, never tinted. Hover and active states darken the OrangeRed by 10–15% (`#e63e00` / `#cc3700`). The secondary signal hue is `#0079d3`, a confident link-blue that handles every hyperlink, every reply CTA, every focus ring. The two together — orange and blue, on warm grey — read as community-newsroom: democratic, not corporate.

Type voice runs IBM Plex Sans, the open-source companion to IBM's hardware brand, chosen for its slightly humanist geometry — not so neutral as Inter, not so editorial as Söhne. Display headlines hit 56px at weight 700 with `-1.5px` tracking; community names appear at 14px / 600 alongside their `r/` prefix; comment body sits at 14px / 400 / 1.5 line-height for a read-everything pace. IBM Plex Mono carries inline code blocks inside posts, particularly in dev subreddits where snippets do the talking.

The page rhythm is feed-density rather than landing-page-flow: stacked post rows with no decorative breaks, sidebar communities and trending widgets pinned to the right, header search bar pinned to the top. There are no glass-morphism cards, no animated gradient halos, no decorative illustrations — Reddit is a text-and-vote interface dressed in a single confident orange.

**Key Characteristics:**
- Warm-grey canvas (`#dae0e6`) — not white, never. The ground signals "reading room."
- One brand voltage: `#ff4500` OrangeRed, scarcely on elements, decisively per page.
- IBM Plex Sans for everything text-bearing; IBM Plex Mono for code spans.
- Community-card density — three weights, three greys, packed metadata.
- 32px small avatars, 4px micro radius on cards, pill-shaped CTAs and search bar.
- Periwinkle-blue downvote (`#7193ff`) — the deliberate complement to OrangeRed upvote.
- `#0079d3` link-blue as the only secondary action color — appears as link, focus ring, reply CTA.
- Vertical line-indented comment threads — depth via 2px left border, not background tint.
- Visited-link purple (`#7c4dff`) preserved — Reddit honors the browser default convention.
- Native dark mode that flips canvas to `#1a1a1b` and surface to `#272729` while keeping OrangeRed unchanged.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#dae0e6`): Warm-grey page floor. The single most distinctive choice in Reddit's visual system — every other major social platform picks pure white or pure black; Reddit picks reading-room grey.
- **Surface** (`#ffffff`): Post and comment card fill. White rectangles on warm grey.
- **Text** (`#1a1a1b`): Primary post body and comment text. Slightly off-pure-black for warmth.
- **Brand** (`#ff4500`): OrangeRed — the single brand voltage. Wordmark, upvote, primary CTA.

### Brand & Dark
- **Brand** (`#ff4500`): The official OrangeRed used on the snoo logo, wordmark, upvote arrow active state, primary CTA pill.
- **Brand Hover** (`#e63e00`): Hover-darker variant on primary buttons and the upvote arrow on hover.
- **Brand Active** (`#cc3700`): Pressed state — only ever applied as press-down feedback.
- **Brand Soft** (`#ffe4d6`): Tinted soft variant on notification badges, "new posts" pills.
- **Brand Deep** (`#a83100`): Dark-mode brand variant — slightly desaturated for AAA on `#1a1a1b`.

### Accent
- **Downvote** (`#7193ff`): Periwinkle-blue. The deliberate complement to OrangeRed — equal in saturation, opposite in temperature. Active downvote arrow only; no other use.
- **Award Gold** (`#ffb000`): Reddit Gold premium tier badge.
- **Award Silver** (`#c8c9d0`): Reddit Silver award icon.
- **Award Platinum** (`#39d8ff`): Reddit Platinum — premium-tier ice-blue.

### Interactive
- **Link** (`#0079d3`): Inline body links default to confident blue. Underlined on hover.
- **Link Hover** (`#0061a8`): Hover-darker blue.
- **Link Visited** (`#7c4dff`): Visited-link purple. Reddit preserves this browser default — community memory matters.
- **Selected** (`#cee3f8`): Selected text background — soft link-blue tint.
- **Focus Ring** (`#0079d3`): 2px solid ring on every focusable element.

### Neutral Scale
- **Text Strong** (`#030303`): Headings, post titles in elevated context.
- **Text** (`#1a1a1b`): Default post and comment body.
- **Text Body** (`#1c1c1c`): Running paragraph text inside threads.
- **Text Muted** (`#7c7c7c`): Metadata, timestamps, vote counts when inactive.
- **Text Soft** (`#878a8c`): Secondary captions ("by u/...").
- **Text Faint** (`#9b9b9b`): Tertiary meta inside compact rows.

### Surface & Borders
- **Surface** (`#ffffff`): Post / comment card fill.
- **Surface Hover** (`#f6f7f8`): Hover state on cards and rows.
- **Surface Elevated** (`#ffffff`): Modal / dialog fill on canvas.
- **Border** (`#edeff1`): Near-invisible card divider — felt more than seen.
- **Border Strong** (`#ccc`): Heavier divider on focus rows, button outlines.
- **Border Subtle** (`#f6f7f8`): Section separator inside compact lists.

### Shadow Colors
- **Shadow Ambient** (`rgba(28,28,28,0.04)`): Faintest 1px lift on hover cards.
- **Shadow Standard** (`rgba(28,28,28,0.08)`): Default card hover shadow.
- **Shadow Elevated** (`rgba(28,28,28,0.16)`): Modal and dialog elevation.

### Semantic
- **Success** (`#46d160`): "Posted" confirmation toast, online indicators.
- **Warning** (`#ffb000`): Same hue as award-gold — caution states reuse the gold.
- **Danger** (`#ea0027`): Delete, remove, ban — destructive button fill.
- **Info** (`#0079d3`): Same as link blue — informational notices.

## 3. Typography Rules

### Font Family
- **Primary**: `"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`. IBM Plex carries display, body, navigation, comments, captions.
- **Mono**: `"IBM Plex Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace`. Code blocks inside posts, inline code spans, terminal output references.
- **OpenType features**: `'ss01'` for the alternate single-storey 'a' (used in display sizes for friendliness), `'cv11'` for the disambiguated I/l/1 in metadata.
- **No serif**: Reddit's voice is conversational and developer-adjacent; serif would feel editorial, off-brand.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | IBM Plex Sans | 56 | 700 | 1.05 | -1.5px | ss01 | Marketing landing h1 |
| display-lg | IBM Plex Sans | 40 | 700 | 1.10 | -1px | — | Section heads on marketing |
| display-md | IBM Plex Sans | 32 | 600 | 1.15 | -0.5px | — | Sub-section heads |
| display-sm | IBM Plex Sans | 24 | 600 | 1.25 | -0.3px | — | Card titles, modal heads |
| title-lg | IBM Plex Sans | 20 | 600 | 1.30 | 0 | — | Post title in feed (default size) |
| title-md | IBM Plex Sans | 18 | 500 | 1.35 | 0 | — | Comment OP heading, profile name |
| title-sm | IBM Plex Sans | 16 | 500 | 1.40 | 0 | — | Sidebar widget heads |
| community-name | IBM Plex Sans | 14 | 600 | 1.30 | 0 | — | "r/programming" community name format |
| body-md | IBM Plex Sans | 14 | 400 | 1.50 | 0 | — | Comment body, post body — the default reading size |
| body-sm | IBM Plex Sans | 13 | 400 | 1.45 | 0 | — | Sidebar widget body, secondary text |
| metadata | IBM Plex Sans | 12 | 400 | 1.30 | 0 | — | "posted by u/x · 4h" — the metadata row |
| label | IBM Plex Sans | 12 | 600 | 1.30 | 0.3px | — | Pill labels, badge text |
| caption | IBM Plex Sans | 11 | 500 | 1.30 | 0 | — | Tooltip text, ultra-fine annotations |
| code-md | IBM Plex Mono | 13 | 400 | 1.55 | 0 | — | Code blocks inside posts |
| code-sm | IBM Plex Mono | 12 | 400 | 1.50 | 0 | — | Inline code spans |
| button | IBM Plex Sans | 14 | 700 | 1.0 | 0.3px | — | Primary CTA pill text — slight uppercase tracking |
| nav-link | IBM Plex Sans | 14 | 500 | 1.4 | 0 | — | Top-nav menu items |
| vote-count | IBM Plex Sans | 12 | 700 | 1.0 | 0 | — | Always bold, takes upvote color when active |

### Principles
- **Display weight tops at 700.** Hierarchy is built on size and tracking, not on extra-bold weights.
- **Body sits at 14/400/1.5.** This is the read-everything pace; never compress comment body to 13 to fit more.
- **Metadata is always 12px and `#7c7c7c`.** The metadata row is part of the brand grammar — don't change its color or size to "match the title."
- **IBM Plex Mono is the only mono.** Fallback chains exist for technical reasons but the credibility comes from Plex Mono shipping.
- **OpenType `ss01` enables friendlier display sizes.** The alternate single-storey 'a' is what gives Reddit's hero copy its conversational warmth.
- **Community names always carry the `r/` prefix in body weight.** Never bold the prefix; the prefix is a route signal, not emphasis.
- **Vote counts are bold by default, and color-shift with vote direction.** When you've upvoted, the count goes OrangeRed; when you've downvoted, it goes periwinkle.

## 4. Component Stylings

### Buttons (4 variants)

**`button-primary`** — The OrangeRed pill. Background `#ff4500`, text `#ffffff`, IBM Plex Sans 14px / 700 / 0.3px tracking, padding 4px × 16px, height 32px, radius 9999 (pill). Used on every Subscribe, Join, Create Post, Get the App primary CTA. Hover darkens to `#e63e00` over 100ms.

**`button-secondary`** — Outlined pill (Joined / Following state). Background `#ffffff`, text `#1a1a1b`, 1px `#ccc` border, same shape and padding as primary. Hover background shifts to `#f6f7f8`. The "after-you've-joined" state is the outlined twin of the OrangeRed pill.

**`button-ghost`** — Icon-only or text-only ghost button. Transparent background, text `#7c7c7c`, no border, padding 4px × 12px, radius 9999. Used in post footers for Share, Save, Comments count.

**`button-upvote` / `button-downvote`** — Vote arrow icon buttons. Transparent background, icon `#7c7c7c` muted by default, fills `#ff4500` (upvote) or `#7193ff` (downvote) when active. No background fill on hover — only icon color shifts. Active state persists until vote is reversed.

### Cards

**`card-post`** — Standard subreddit feed post. Background `#ffffff`, 1px `#ccc` border, 4px radius (xs), 8px × 16px padding. Hover: border shifts to `#898989`. The default container for every text/link/image post in a feed.

**`card-community`** — Right-sidebar community summary card. Background `#ffffff`, 1px `#ccc` border, 4px radius, 16px padding. Header section uses the community's banner color or `#0079d3` default. Always shows "About Community" / member count / "Join" button.

**`card-comment`** — Nested comment thread row. No background, no border. Left edge: 2px solid `#ccc` border for indent depth. Each nested reply shifts left by 16px. The vertical line is the depth signal.

**`card-trending`** — Trending post mini-card. Compressed version of `card-post` for the right-sidebar trending widget. Background `#ffffff`, 4px radius, 8px padding, no border.

### Badges & Pills

**`badge-flair`** — Community flair tag (e.g., "Discussion", "Help"). Background varies per subreddit (default `#46d160` green, `#0079d3` blue, `#ff66ac` pink). Text `#ffffff` or `#1a1a1b` per contrast. 11px / 500 / pill. Padding 2px × 8px.

**`badge-mod`** — Moderator tag next to mod usernames. Background `#46d160`, text `#ffffff`, 11px / 700, pill, padding 0 × 6px. Text reads "MOD".

**`badge-award`** — Gold/Silver/Platinum award icon clusters. Icon-only, 16px gold/silver/platinum hex glyphs inline in post header. Counter pill follows (`x12 GOLD`).

**`badge-new`** — "NEW" pill on fresh posts. Background `#ffe4d6`, text `#ff4500`, 10px / 700, pill, padding 2px × 6px.

**`pill-tag`** — Tag pill for community categorization. Background `#f6f7f8`, text `#1c1c1c`, 11px / 500, pill, padding 2px × 8px, 1px `#edeff1` border.

### Inputs / Forms

**`text-input`** — Standard input. Background `#ffffff`, text `#1a1a1b`, 1px `#ccc` border, 4px radius, 8px × 12px padding, height 36px. Placeholder `#7c7c7c`.

**`text-input-focused`** — Border thickens to 2px solid `#0079d3` (link-blue). Box-shadow ring `0 0 0 2px rgba(0,121,211,0.2)`.

**`search-bar`** — Top-bar search input. Background `#f6f7f8` (soft grey), 1px `#edeff1` border, pill-shaped (radius 9999), 8px × 16px padding. Hover background flashes to `#ffffff`, border darkens to `#ccc`.

**`textarea-comment`** — Comment composer. Same as `text-input` but height auto-grows; no max height; submit pill anchored bottom-right.

### Navigation

**`top-nav`** — White header pinned to top, 56px tall, background `#ffffff`, 1px `#edeff1` bottom border. Logo + wordmark left, search bar centered (max width 720px), right-cluster: Get the App link, Notifications, Avatar dropdown.

**`sidebar`** — Left navigation rail. Background `#f6f7f8` soft grey, 270px wide, scrolls independently. Hierarchical: "Home / Popular / All" up top, then communities the user has joined, alphabetized.

**`tab-bar`** — Horizontal tabs on profile / subreddit pages (Posts / Comments / About). Active tab: 2px solid `#1a1a1b` bottom border, weight 600. Inactive: text `#7c7c7c`, weight 400, no underline.

### Decorative

**`vote-arrow-cluster`** — Vertical 3-stack on left edge of every post: ▲ vote-count ▼. Width 40px, 8px padding. Active arrows fill OrangeRed (up) or periwinkle (down). Vote count weight 700, color follows active vote.

**`comment-thread-indent`** — 2px solid `#ccc` left border on nested replies. Each level indents 16px. Color shifts to `#7193ff` on the active reply path (rare).

**`reddit-snoo`** — The mascot. Used in 404 pages, empty states, premium upsells. Always orange-on-white or white-on-orange.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 96`. Card internal padding stays at 8–16px; section padding (between hero and feed) at 24–48px. Reddit is **density-first** — intra-card spacing is tighter than any direct competitor's. The feed is meant to feel like a folder of bulletins, not a magazine layout.

### Grid & Container
Max content width is 1280px. The classic Reddit feed layout is a 3-column composition: 270px left sidebar (community list), 640px center feed (the focal column), 312px right sidebar (community card / trending widget). Marketing landing pages use a 12-column grid with 1280px max width.

### Whitespace Philosophy
Reddit prizes information density over whitespace. Every additional pixel of card padding pushes one fewer post visible per scroll. The system aggressively compresses metadata rows (12px text with 1.3 line-height), keeps card padding to 8px vertical, and uses 4px radii so cards don't waste visual real estate at the corners.

### Section Cadence
Marketing pages alternate light/dark bands with the brand-orange band as the conversion endpoint. Product pages (feeds) run uninterrupted: post card → divider → post card → divider, broken only by a `New Posts` notification pill or a sticky community announcement. There is no decorative section break.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 2px | Inline code chips, syntax-highlight backgrounds |
| XS | xs | 4px | Post cards, comment inputs — the default card radius |
| Standard | sm | 6px | Modal cards, tooltips |
| Comfortable | md | 8px | Larger feature cards on marketing pages |
| Large | lg | 12px | Hero CTA cards, image overlays |
| Featured | xl | 16px | Modal shells, full-bleed cards |
| Pill | pill | 9999px | Buttons, search bar, badges, awards |

Reddit reaches for `xs:4` more than any other token. The 4px radius is what gives the platform its bulletin-board character — softer than the perfectly-square posts of legacy forum systems, harder than the friendly 12px of consumer-marketing brands.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Body sections, feed canvas |
| 1 — Soft hairline | 1px `#ccc` border | Post cards, community cards (default) |
| 2 — Surface lift | `rgba(28,28,28,0.08) 0 2px 4px` | Hover state on post cards |
| 3 — Elevated | `rgba(28,28,28,0.16) 0 8px 16px` | Dropdown menus, popovers |
| 4 — Modal | `rgba(28,28,28,0.20) 0 16px 32px` + backdrop dim | Full-screen modals, image lightbox |
| 5 — System overlay | Same as modal + ESC focus trap | Keyboard shortcut menu, login modal |

### Shadow Philosophy
Reddit's depth comes primarily from the 1px `#ccc` border that frames every post and community card — a hairline elevation that says "this is a discrete bulletin." Drop shadows are reserved for hover and modal states; the default feed is flat, with depth created by the contrast between the warm-grey canvas and the white card surface. The system avoids stacked-layer parallax — scrolling reveals more cards, not more layers.

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hovers, opens, transitions.
- **Emphasized ease**: `cubic-bezier(0.2, 0, 0, 1)` — vote-arrow burst, success-toast entrance.

### Duration Buckets
- **Fast (100ms)**: Color and opacity shifts on hover (button hover, link hover).
- **Standard (200ms)**: Card hover lift, dropdown opens, modal entrance.
- **Slow (300ms)**: Page section reveals on scroll, feed item slide-in.

### Per-Component Micro-States
- **Button hover**: OrangeRed CTA darkens from `#ff4500` → `#e63e00` over 100ms; no transform.
- **Button press**: 1px translate-down via `transform: translateY(1px)` over 80ms.
- **Vote arrow click**: Arrow scales 1.0 → 1.2 → 1.0 over 240ms with emphasized ease, fills OrangeRed (or periwinkle for down). Counter increments with a single-frame tick.
- **Card hover**: Post card border shifts from `#ccc` → `#898989` over 100ms; ambient shadow fades in over 200ms.
- **Comment expand/collapse**: Vertical accordion with 200ms standard ease; chevron rotates 0 → 90deg.
- **Notification badge**: New notification pill bounces in with 320ms emphasized ease — the only "playful" animation.
- **Input focus**: 2px solid `#0079d3` ring expands from 0 → 2px over 100ms.

### Page Transitions
Reddit uses standard browser navigation. Section-on-scroll reveals are a 300ms fade-in (no upward translate) gated by `IntersectionObserver`. The "Load more posts" pill animation is a 200ms scale-up from 0.8 to 1.0 with emphasized ease.

### Reduced Motion
`prefers-reduced-motion: reduce` honored: vote-arrow burst animation skipped (arrow simply changes color), card hover shadows omitted, all transitions reduced to opacity-only at 100ms. The notification badge bounces are replaced with an instant fade.

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#1a1a1b` on `#dae0e6` = **14.6** — AAA at every size.
- **Body on surface**: `#1c1c1c` on `#ffffff` = **15.9** — AAA.
- **Muted on bg**: `#7c7c7c` on `#dae0e6` = **4.6** — AA at body sizes; not used below 13px.
- **On-brand on brand**: `#ffffff` on `#ff4500` = **4.6** — AA at body sizes; bold-weight CTA text passes large-text AAA.
- **Link on bg**: `#0079d3` on `#dae0e6` = **5.8** — AA at body sizes.

### Focus Indicators
Every focusable element shows a 2px solid `#0079d3` ring with 2px offset from the element. The link-blue ring is the platform's universal focus signal — distinct from the OrangeRed brand to ensure focus is unmistakable on cards that themselves contain orange icons.

### ARIA Patterns
- **Vote arrows**: Native `<button>` with `aria-pressed="true|false"` and `aria-label="Upvote"` / `aria-label="Downvote"`. Vote counts announced via `aria-live="polite"`.
- **Comment thread**: Comments use `<article>` elements; nesting level signaled via `aria-level` attribute (1, 2, 3...).
- **Notifications**: `role="status"` on the unread pill; `aria-label="3 unread notifications"`.
- **Top-nav**: `<nav aria-label="Primary">`; mobile drawer uses `aria-expanded` on hamburger.
- **Modal**: `role="dialog"` with `aria-labelledby` referencing the title; ESC closes; focus trapped.
- **Search**: `role="searchbox"` with `aria-autocomplete="list"` for suggestions.

### Keyboard Navigation
Tab order follows visual reading order (top-nav → main feed → sidebars). Skip-link at top of every page jumps to `<main>`. Vote arrows accept Enter / Space for activation. `j` / `k` keyboard shortcuts navigate between feed items (Reddit's classic vim-style binding); `?` opens the keyboard shortcut help modal.

### Screen Reader Hints
Vote counts use `aria-label="48 upvotes"` rather than the bare number. Community names announce as "subreddit programming" rather than "r slash programming." Award icons use `aria-label="2 gold awards"` to avoid reading the SVG meaningfully.

### Reduced Motion Handling
Honored via `@media (prefers-reduced-motion: reduce)` — vote-arrow burst skipped, card hover shadows omitted, page-section reveals reduced to instant fade. Notification badge bounce replaced with single fade-in.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hamburger nav; sidebars hidden; feed full-width; vote arrows shrink to 32px width; metadata wraps to two lines |
| Tablet | 640–1024px | Top nav tightens; right sidebar hidden; left sidebar collapses to icon-only; feed centered |
| Desktop | 1024–1280px | Full 3-column layout; both sidebars visible; feed at 640px center column |
| Wide | > 1280px | Same as desktop with more breathing room; max content 1280px |

### Touch Targets
- Vote arrows minimum 32 × 32px on mobile (visually centered with adequate hit area via padding).
- Primary CTA pill at minimum 32px tall, 16px horizontal padding — meets WCAG 44px tap target via expanded hit area.
- Comment expand/collapse chevron minimum 32 × 32px on mobile.

### Collapsing Strategy
Top-nav search bar collapses to a search icon at < 768px (taps to open a full-screen search overlay). Right sidebar (trending widget, community card) hides at < 1024px and reappears as inline cards above the feed on mobile. Comment threads on mobile reduce indent to 8px per level (vs 16px desktop) to preserve horizontal real estate.

### Image Behavior
Post images render at native aspect ratio with a max-height of 512px in feed; click expands to fullscreen lightbox. Galleries paginate with arrow controls. Subreddit banners crop responsively — desktop shows full banner, mobile shows centered crop.

## 11. Content & Voice

### Tone
**Conversational, community-first, lightly self-aware.** Reddit writes for users who already know what an upvote is. Marketing copy ("The heart of the internet") leans into community pride; product copy ("Be the first to comment") nudges participation without pressure. There's a faint dry humor (404 pages featuring Snoo lost in space) but the platform avoids overt cleverness.

### Microcopy Patterns
- **CTA verbs**: "Join", "Subscribe", "Create Post", "Continue with Google", "Sign Up". Action words are short and direct.
- **Empty community**: "Be the first to post in r/example" with a compose pencil icon.
- **Upvote affordance**: No text label on the arrow itself — the ▲ is universally understood. Tooltip on hover: "Upvote".
- **Sort labels**: "Hot", "New", "Top", "Rising" — single words, sentence case.
- **Comment compose placeholder**: "What are your thoughts?" — open-ended, never prescriptive.

### Empty States
- **Empty feed**: "Looks quiet here. Join some communities to see posts." with a "Browse Communities" link.
- **Empty inbox**: "No new messages. We'll let you know when something changes." with the Snoo mascot illustration.
- **Empty saved posts**: "Save posts and comments to find them later." with a bookmark icon.

### Error Messages
**Pattern**: A single-line red alert ("Something went wrong. Try again.") with retry button. Reddit avoids over-apologizing — no "Oops!" or sad emoji. Errors during post submission preserve the draft.

### Success Confirmations
Single-line toast: "Post submitted to r/programming" or "Comment added." Auto-dismisses after 4s. Vote success is silent — the visual feedback (arrow color shift) is the confirmation.

### CTA Verb Conventions
"Join" not "Sign up for" / "Subscribe" not "Follow" / "Create Post" not "Post" / "Be the first to comment" not "Add comment first." The verbs preserve a faint forum-era directness.

## 12. Dark Mode & Theming

Reddit ships native dark mode with a true token swap. Toggle lives in user settings; respects `prefers-color-scheme: dark` by default for new visitors.

```yaml
colors-dark:
  bg: '#1a1a1b'                 # near-black with slight warmth — not pure black
  bg-soft: '#272729'             # secondary background
  bg-deep: '#030303'             # absolute black (rare)
  surface: '#272729'             # post card fill — slightly lifted from bg
  surface-hover: '#343536'       # hover state
  surface-elevated: '#1a1a1b'    # modal / dialog
  text: '#d7dadc'                # primary post and comment text
  text-strong: '#ffffff'         # heading-grade type
  text-body: '#d7dadc'           # body running-text
  text-muted: '#818384'          # metadata
  text-soft: '#818384'           # secondary captions
  text-faint: '#666768'          # tertiary
  brand: '#ff4500'               # OrangeRed unchanged — the brand voltage holds
  brand-hover: '#e63e00'
  brand-deep: '#cc3700'
  link: '#4fbcff'                # link-blue lifts to #4fbcff on dark for contrast
  link-hover: '#79c8ff'
  link-visited: '#a785ff'        # visited shifts to lighter purple
  border: '#343536'
  border-strong: '#474748'
  border-subtle: '#272729'
  upvote: '#ff4500'              # OrangeRed unchanged
  downvote: '#7193ff'            # periwinkle unchanged
  on-brand: '#ffffff'
```

The defining decision: **OrangeRed `#ff4500` is identical in both modes.** Reddit doesn't soften the brand for dark mode the way Slack and Discord do — the contrast is strong enough at full saturation, and softening would dilute the wordmark recognition.

## 13. Lineage & Influences

Reddit's visual lineage descends from **early-web bulletin boards** — Slashdot, Digg, vBulletin — but cleaned up with modern type discipline. The warm-grey canvas is a direct quote of newspaper newsprint paper; the OrangeRed comes from the 2005 design choice to mark the upvote arrow with a single confident hue. The vote-arrow cluster on the left of every post is unchanged in 19 years; only the surrounding chrome has modernized.

The IBM Plex Sans adoption (around 2018, when Reddit redesigned) tied the brand to IBM's open-source typography ecosystem rather than commissioning a custom face — a deliberately humble choice for a platform that prizes user-generated content over corporate identity. The community-card density is borrowed from Hacker News (which Reddit deliberately echoes for the dev-community subreddits) and the visited-link purple convention is preserved from the early web because community memory matters.

Where Twitter/X reaches for chrome and singular voice, Reddit reaches for plurality — every post belongs to a community, every community can pick its flair colors, every user has a username and a subscribe pill. The system is designed for many voices to coexist.

- **Hacker News** — The community-card density and link-blue convention. https://news.ycombinator.com
- **Slashdot** — The vote-arrow + threaded-comment lineage. https://slashdot.org
- **IBM Plex Sans (Mike Abbink)** — Open-source workhorse type. https://www.ibm.com/plex/
- **Snoo (Reddit Snoo)** — Mascot lineage that humanizes a text-heavy platform. https://www.reddit.com/r/snoo/
- **Newspaper newsprint paper** — The warm-grey canvas reference. (no URL)

## 14. Do's and Don'ts

### Do
- Anchor every page on the warm-grey canvas (`#dae0e6` light, `#1a1a1b` dark). The grey is what differentiates Reddit from every white-canvas competitor.
- Reserve OrangeRed (`#ff4500`) for primary CTAs, upvote arrows, and the wordmark. Use it scarcely — one or two times per band.
- Use IBM Plex Sans for everything; IBM Plex Mono for code spans.
- Honor the metadata row format: "posted by u/x · 4h to r/community" in 12px / 400 / `#7c7c7c`.
- Keep card radius at 4px (xs). Larger radii read as "consumer marketing" and break the bulletin-board character.
- Pair OrangeRed upvote with periwinkle (`#7193ff`) downvote. The two-color vote system is foundational.
- Preserve the visited-link purple. Community memory is part of the brand grammar.
- Use vertical line indents (2px `#ccc` left border) for nested comment threads — never colored backgrounds.

### Don't
- Don't use pure white as the canvas. The warm grey is the brand.
- Don't gradient-fade or tint the OrangeRed. It's flat, saturated, full strength.
- Don't introduce a third brand color. Reddit is OrangeRed + link-blue + the neutral scale.
- Don't pad post cards beyond 8px vertical / 16px horizontal. Density is the feature.
- Don't replace the vote-arrow cluster with a single "like" heart. The dual-direction vote is core.
- Don't bold metadata rows. The hierarchy is title-bold / metadata-regular.
- Don't soften the OrangeRed in dark mode. The brand voltage holds across both modes.
- Don't add drop shadows to default cards. Hairline borders carry the elevation.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:     #dae0e6 (warm grey — reading-room ground)
Surface:         #ffffff (white post card)
Surface Hover:   #f6f7f8 (soft hover)
Border:          #ccc (1px hairline on cards)
Text:            #1a1a1b (post body)
Text Muted:      #7c7c7c (metadata, "by u/...")
Brand:           #ff4500 (OrangeRed — CTAs, upvote, wordmark)
Brand Hover:     #e63e00 (press / hover-darker)
Downvote:        #7193ff (periwinkle — downvote arrow)
Link:            #0079d3 (link-blue — focus ring, replies)
Link Visited:    #7c4dff (purple — community memory)
On-Brand:        #ffffff (white text on OrangeRed)
```

### Example Component Prompts

1. "Create a Reddit-style post card: `#ffffff` background on `#dae0e6` canvas, 1px `#ccc` border, 4px radius, 8px × 16px padding. Left edge: vertical vote-arrow cluster (▲ vote-count ▼) with arrows in `#7c7c7c` muted. Title in IBM Plex Sans 20px / 600 / `#1a1a1b`. Metadata row below in 12px / 400 / `#7c7c7c`: 'posted by u/example · 4h ago to r/programming'."

2. "Design a Subscribe button: pill-shaped (radius 9999), `#ff4500` OrangeRed background, white text 'Join' in IBM Plex Sans 14px / 700 / 0.3px tracking, padding 4px × 16px, height 32px. Hover darkens to `#e63e00` over 100ms."

3. "Build a comment thread with 3 nested levels. Each level indents 16px and shows a 2px solid `#ccc` left border. Comment body in IBM Plex Sans 14px / 400 / 1.5 line-height. Username in 14px / 600 / `#1a1a1b` followed by '· 4h' metadata in 12px / 400 / `#7c7c7c`."

4. "Compose a community card for the right sidebar: `#ffffff` background, 1px `#ccc` border, 4px radius, 16px padding. Header band in `#0079d3` link-blue with 'About Community' label in white. Body shows member count in 16px / 600 and 'Created Jan 2009' in 12px / 400 / `#7c7c7c`. Bottom: 'Join' OrangeRed pill button."

5. "Create a top-nav: 56px tall white bar with 1px `#edeff1` bottom border. Reddit wordmark (with Snoo) left in OrangeRed. Centered pill-shaped search bar (background `#f6f7f8`, radius 9999, max width 720px). Right cluster: 'Get App' link in 14px / 500, notification bell icon, avatar dropdown."

6. "Design an upvote/downvote arrow cluster: vertical 3-stack (▲ count ▼) at 40px wide. Default state: arrows in `#7c7c7c` muted, count in `#1a1a1b`. Active upvote: arrow fills `#ff4500`, count shifts to `#ff4500` and bold. Active downvote: arrow fills `#7193ff` periwinkle, count shifts to `#7193ff`."

### Iteration Guide
1. Start with the warm-grey canvas — `#dae0e6` is what makes Reddit feel different from every white-canvas competitor. Don't lighten it.
2. Anchor each page on a single OrangeRed CTA. If you have two OrangeRed elements competing in one band, demote the weaker one to a `button-secondary` outlined pill.
3. Keep card padding tight (8px vertical / 16px horizontal). Density is a feature; loosening padding drifts the look toward generic SaaS marketing.
4. Use IBM Plex Sans at the right weight for the right job: 600+ for titles, 400 for body, 700 for CTAs and vote counts.
5. Preserve the metadata row pattern in 12px / 400 / `#7c7c7c`. It's part of the brand grammar.
6. When designing dark mode, keep OrangeRed unchanged. Lift the link-blue to `#4fbcff` and the visited-purple to `#a785ff` for AAA contrast on `#1a1a1b`.
7. Use the periwinkle (`#7193ff`) only for the downvote arrow. Don't introduce it as a secondary accent — its role is purely opposite-of-upvote.
8. Trust the bulletin-board character. Reddit is meant to look like a folder of pinned posts, not a glossy magazine.
