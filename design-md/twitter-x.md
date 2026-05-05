---
name: X
tagline: Pure-black canvas with Chirp display — algorithmic minimalism, single-letter wordmark, ruthless type discipline.
author: webdesignhot
source_url: https://x.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [social, media]
tags: [dark, mono-accent, sans, dense, technical, cool]
preview_swatch: ['#000000', '#ffffff', '#1d9bf0']
related: [discord, claude-ai, anthropic]
description: 'X (formerly Twitter) renders the most chromatically-disciplined surface in mainstream social — pure `#000000` canvas with white-on-black type and a single legacy `#1d9bf0` blue that survives only as the link / verified-badge accent. The wordmark is a single italicized "X" (Chirp Black at 60° rotation), the type system is the proprietary Chirp family across every UI surface, and the timeline runs as a single 600px column of dense post cards separated by 1px hairlines. The brand identity since the 2023 rebrand is algorithmic-minimalist — strip every decorative element, every gradient, every brand voltage, and let the content (and the algorithm) carry the page.'

colors:
  bg: '#000000'                  # absolute black — default dim mode
  bg-light: '#ffffff'            # light-mode flip
  bg-dim: '#15202b'              # "dim" mode — mid-dark blue-grey
  surface: '#16181c'             # post card surface (subtle lift)
  surface-hover: '#1c1f23'       # hover lift
  surface-elevated: '#202327'    # nested cards, modals
  surface-soft: '#0d0d0e'        # near-black dividers
  text: '#e7e9ea'                # primary text on dark — slightly off-white
  text-strong: '#ffffff'         # display headings
  text-body: '#e7e9ea'           # body running-text
  text-muted: '#71767b'          # metadata, timestamps, "@username · 4h"
  text-soft: '#536471'           # tertiary captions
  text-faint: '#3e4a55'          # ultra-fine
  text-on-brand: '#ffffff'       # white text on legacy blue
  text-on-white: '#0f1419'       # near-black text on light mode
  brand-blue: '#1d9bf0'          # legacy "Twitter blue" — survives as link/verified accent
  brand-blue-hover: '#1a8cd8'    # press / hover-darker
  brand-blue-deep: '#1573b8'     # pressed
  brand-blue-soft: 'rgba(29,155,240,0.1)' # tinted soft surface (mention highlights)
  primary-action: '#ffffff'      # primary CTA fill (Sign Up / Post button) — white-on-black
  primary-action-hover: '#d7dbdc' # hover state
  secondary-action: '#000000'    # text on white CTA
  link: '#1d9bf0'                # link blue — same as brand
  link-hover: '#1a8cd8'
  border: '#2f3336'              # 1px hairline on cards and dividers
  border-strong: '#536471'       # heavier divider
  border-subtle: '#16181c'       # near-invisible
  on-brand: '#ffffff'            # white text on legacy blue
  on-bg: '#e7e9ea'
  shadow-color: 'rgba(255,255,255,0.04)'
  reply-icon: '#71767b'          # default reply icon
  reply-active: '#1d9bf0'        # reply hover blue
  retweet-icon: '#71767b'        # default retweet
  retweet-active: '#00ba7c'      # retweet active green
  like-icon: '#71767b'           # default like
  like-active: '#f91880'         # like active rose-magenta
  share-icon: '#71767b'          # default share
  bookmark-icon: '#71767b'
  bookmark-active: '#1d9bf0'     # bookmark uses brand-blue
  verified-blue: '#1d9bf0'       # legacy verified
  verified-gold: '#fab421'       # gold verified — businesses
  verified-grey: '#829aab'       # government / org verified
  premium-gold: '#fab421'        # X Premium tier
  views-meta: '#71767b'          # impression count meta
  success: '#00ba7c'             # success — green retweet hue
  warning: '#fab421'             # caution — gold
  danger: '#f4212e'              # error — red
  info: '#1d9bf0'                # informational

typography:
  display:
    family: '"TwitterChirp", "Chirp", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 600, 700, 800]
    opentype-features: "'cv02', 'cv03', 'cv11'"
  body:
    family: '"TwitterChirp", "Chirp", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"TwitterChirpMono", ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 60, weight: 800, lineHeight: 1.05, tracking: '-1.5px', family: display, notes: 'marketing landing h1' }
    display-lg:      { size: 48, weight: 800, lineHeight: 1.10, tracking: '-1px',   family: display }
    display-md:      { size: 36, weight: 700, lineHeight: 1.15, tracking: '-0.8px', family: display }
    display-sm:      { size: 28, weight: 700, lineHeight: 1.20, tracking: '-0.5px', family: display }
    title-lg:        { size: 23, weight: 700, lineHeight: 1.30, tracking: 0,        family: display, notes: 'profile name on tweet, modal heads' }
    title-md:        { size: 20, weight: 700, lineHeight: 1.30, tracking: 0,        family: display }
    title-sm:        { size: 17, weight: 700, lineHeight: 1.35, tracking: 0,        family: body, notes: 'card section heads' }
    tweet-display:   { size: 23, weight: 400, lineHeight: 1.30, tracking: 0,        family: display, notes: 'standalone tweet — large size' }
    body-md:         { size: 15, weight: 400, lineHeight: 1.30, tracking: 0,        family: body, notes: 'tweet body in feed — the default' }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.30, tracking: 0,        family: body }
    metadata:        { size: 13, weight: 400, lineHeight: 1.25, tracking: 0,        family: body, notes: '"@username · 4h" — secondary meta' }
    label:           { size: 12, weight: 700, lineHeight: 1.30, tracking: '0.3px',  family: body }
    caption:         { size: 13, weight: 500, lineHeight: 1.30, tracking: 0,        family: body }
    code-md:         { size: 13, weight: 400, lineHeight: 1.55, tracking: 0,        family: mono }
    button:          { size: 15, weight: 700, lineHeight: 1.0,  tracking: 0,        family: body }
    nav-link:        { size: 20, weight: 400, lineHeight: 1.4,  tracking: 0,        family: display, notes: 'left-rail nav — large + light' }
    nav-link-active: { size: 20, weight: 700, lineHeight: 1.4,  tracking: 0,        family: display, notes: 'active nav item — bold' }
    counter:         { size: 13, weight: 400, lineHeight: 1.0,  tracking: 0,        family: body, notes: 'engagement counters under tweet' }

radius:
  micro: 2
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 20
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96]

layout:
  page-width: 1265
  feed-width: 600
  left-rail-width: 275
  right-rail-width: 350
  header-height: 53

components:
  button-primary:
    backgroundColor: primary-action
    textColor: secondary-action
    rounded: pill
    padding: '12px 24px'
    height: 44
    fontWeight: 700
    use: 'Post / Sign up — white pill on black, the inversion is the signature'
  button-primary-blue:
    backgroundColor: brand-blue
    textColor: on-brand
    rounded: pill
    padding: '12px 24px'
    height: 44
    fontWeight: 700
    use: 'legacy primary CTA — survives on certain marketing pages'
  button-secondary:
    backgroundColor: transparent
    textColor: text
    border: '1px solid border-strong'
    rounded: pill
    padding: '12px 24px'
    height: 44
    use: 'secondary action — outlined pill'
  button-ghost:
    backgroundColor: transparent
    textColor: text-muted
    rounded: pill
    padding: '8px 16px'
    use: 'tertiary, "Cancel"'
  button-icon:
    backgroundColor: transparent
    textColor: text-muted
    rounded: pill
    size: 36
    use: 'tweet engagement icons (reply, retweet, like, share, bookmark)'
  card-tweet:
    backgroundColor: bg
    borderBottom: '1px solid border'
    padding: '12px 16px'
    use: 'standard timeline tweet card'
  card-tweet-detailed:
    backgroundColor: bg
    border: '1px solid border'
    rounded: lg
    padding: 16
    use: 'standalone tweet on detail page'
  card-trending:
    backgroundColor: surface
    rounded: lg
    padding: 12
    use: 'right-rail trending card'
  card-suggested:
    backgroundColor: surface
    rounded: lg
    padding: 16
    use: 'who-to-follow card'
  badge-pill:
    backgroundColor: surface
    textColor: text
    rounded: pill
    padding: '4px 10px'
  badge-blue:
    backgroundColor: brand-blue
    textColor: on-brand
    rounded: pill
    padding: '2px 8px'
    use: 'verified accent, NEW marker'
  badge-verified-checkmark:
    backgroundColor: brand-blue
    iconColor: on-brand
    rounded: pill
    size: 18
    use: 'verified checkmark inline next to display name'
  text-input:
    backgroundColor: bg
    textColor: text
    border: '1px solid border'
    rounded: xs
    padding: '14px 16px'
    height: 56
  search-bar:
    backgroundColor: surface
    textColor: text
    border: 'none'
    rounded: pill
    padding: '12px 20px'
    use: 'right-rail search input'
  textarea-compose:
    backgroundColor: bg
    textColor: text
    fontSize: 20
    use: 'tweet composer — no border, large type'
  top-nav:
    backgroundColor: bg
    textColor: text
    height: 53
    backdrop: 'rgba(0,0,0,0.65) backdrop-blur'
    use: 'sticky header on timeline'
  left-rail:
    backgroundColor: bg
    width: 275
    use: 'persistent left navigation with X logo, Home, Explore, Notifications, Messages'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 300
  reduced-motion: 'respects prefers-reduced-motion: reduce — like-burst skipped, transitions to opacity-only'

breakpoints:
  mobile: 500
  tablet: 768
  desktop: 1024
  wide: 1265

shadows:
  ambient: 'rgba(255,255,255,0.04) 0 0 0 1px'
  standard: 'rgba(0,0,0,0.4) 0 4px 16px'
  elevated: 'rgba(0,0,0,0.6) 0 12px 32px'
  deep: 'rgba(0,0,0,0.7) 0 24px 48px'
  ring: '0 0 0 2px #1d9bf0'

accessibility:
  contrast-text-on-bg: 18.7              # AAA — #e7e9ea on #000000
  contrast-strong-on-bg: 21.0            # AAA — #ffffff on #000000
  contrast-muted-on-bg: 5.5              # AA at body sizes — #71767b on #000000
  contrast-blue-on-bg: 6.7               # AA — #1d9bf0 on #000000
  focus-ring: '2px solid #1d9bf0 with 2px offset'
  reduced-motion-honored: true

dark-mode: 'three modes — Default (white), Dim (#15202b), Lights Out (#000000); Lights Out is the most-used'
---

## 1. Visual Theme & Atmosphere

X's visual surface is the most chromatically-disciplined in mainstream social. The 2023 rebrand stripped Twitter's friendly bird-blue identity down to a single italicized letter glyph and a default canvas of pure `#000000` — a near-total chromatic vacuum that makes every other social platform look gaudy by comparison. The timeline runs as a single 600px-wide column of post cards separated only by 1px `#2f3336` hairlines, with white text on black, a faintly-grey `#71767b` for metadata, and the legacy `#1d9bf0` blue surviving exclusively as the link color and verified-badge fill. There is no second brand voltage. There is no gradient. There is no decorative element.

The wordmark itself — a single italicized "X" rendered in Chirp Black, rotated 60° (or rendered with the diagonal stroke heavier than horizontal) — is the most stripped-down brand mark in the FAANG-tier social category. There is no logotype. There is no tagline. There is no color. The X stands alone in pure white on the black canvas, signaling algorithmic confidence: the platform doesn't need to introduce itself. The product (and the algorithm) introduces itself.

The defining gesture is **information density at perfect type size**. Every tweet renders at 15px / 400 / 1.3 line-height — a pure-content register that's neither editorial-warm nor UI-utilitarian. The 23px size is reserved for "tweet display" mode (when a tweet is the primary content of a detail page), and the 20px nav-link sizing on the left rail is unusually large for app chrome — bigger than most platforms' body text. That sizing decision is deliberate: navigation is a reading register, not a chrome register.

Type voice runs the proprietary **Chirp** family — an in-house adaptation of Grilli Type's GT America commissioned in 2021 — in weights 400 (body) and 700 (display, profile names, button labels). There is no italic for emphasis (italic is reserved for the X wordmark itself); emphasis is carried by weight 700 or by color (text → text-strong). Display sizes hit 60px / 800 / -1.5px tracking on marketing pages, with the negative tracking essential to keep Chirp 800 from reading too wide.

The page rhythm is tri-column on desktop: 275px left rail (persistent navigation), 600px center feed (the focal column), 350px right rail (search + trending + suggested follows). The center column is sticky, the rails are static. There is no horizontal scroll, no sidebar drawer pattern, no responsive accordion — the structure is rigid because the platform's whole UX premise is that the user reads a single column.

**Key Characteristics:**
- Pure `#000000` canvas (Lights Out mode) — the most-used theme on the platform.
- Single-letter italicized wordmark — the most stripped-down social brand.
- One legacy accent color: `#1d9bf0` blue, surviving as link / verified / focus only.
- Chirp display + body, with 20px left-rail nav links (unusually large).
- 15px / 400 / 1.3 line-height for every tweet body — the platform's default reading register.
- White-on-black primary CTA pill — the inversion of every other dev-tools convention.
- Engagement icon row (reply / retweet / like / share / bookmark / views) under every tweet — 5 icons + counter, all `#71767b` muted by default.
- Each engagement icon has its own active color: blue reply, green retweet, magenta like, blue bookmark.
- Three-mode theming (Default / Dim / Lights Out) but Lights Out is the visual identity.
- 1px `#2f3336` hairline divides every tweet — no card chrome, no padding shells.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#000000`): Lights Out mode — the default and most-used canvas on X. Pure black, no warmth.
- **Bg Dim** (`#15202b`): Mid-dark blue-grey alternate canvas. The original Twitter "dim" mode survives as a user preference.
- **Bg Light** (`#ffffff`): Light mode — used by approximately 30% of users.
- **Text** (`#e7e9ea`): Primary text on dark — slightly off-white for readability ease.
- **Text Strong** (`#ffffff`): Display heading text — pure white.

### Brand & Dark
- **Brand Blue** (`#1d9bf0`): Legacy Twitter blue. The single accent that survives the rebrand. Appears on links, verified badges, focus rings, and the bookmark-active icon. Note: NOT used on primary CTA buttons in the post-rebrand surface.
- **Brand Blue Hover** (`#1a8cd8`): Hover-darker variant.
- **Brand Blue Deep** (`#1573b8`): Pressed state.
- **Brand Blue Soft** (`rgba(29,155,240,0.1)`): Tinted soft variant — used on mention highlights and selected text background.

### Accent (Engagement icons)
Each engagement action has its own dedicated active color — chromatically distinct from the brand blue:
- **Reply Active** (`#1d9bf0`): Reply icon turns blue on hover and counter.
- **Retweet Active** (`#00ba7c`): Retweet icon turns green when retweet is active.
- **Like Active** (`#f91880`): Heart fills magenta-rose when liked.
- **Bookmark Active** (`#1d9bf0`): Bookmark fills brand-blue when saved.
- **Share Icon** (`#71767b`): Share has no active color — it's transient.

### Verified Tiers
- **Verified Blue** (`#1d9bf0`): Premium individual subscribers — the legacy verified blue.
- **Verified Gold** (`#fab421`): Verified business / X Premium+ accounts.
- **Verified Grey** (`#829aab`): Government / organizational verified accounts.

### Interactive
- **Link** (`#1d9bf0`): Inline body links default to legacy blue. Same on dark and light modes.
- **Link Hover** (`#1a8cd8`): Hover-darker.
- **Selected** (`rgba(29,155,240,0.2)`): Selected text background — soft blue tint.
- **Focus Ring** (`#1d9bf0`): 2px solid blue ring on every focusable element.

### Neutral Scale
- **Text Strong** (`#ffffff`): Display headings, primary CTAs.
- **Text** (`#e7e9ea`): Default text — slightly off-white.
- **Text Body** (`#e7e9ea`): Body running-text.
- **Text Muted** (`#71767b`): Metadata, "@username · 4h", view counts.
- **Text Soft** (`#536471`): Tertiary captions.
- **Text Faint** (`#3e4a55`): Ultra-fine annotations.

### Surface & Borders
- **Surface** (`#16181c`): Right-rail card surface (trending, who-to-follow). Tweet cards in feed do NOT use a surface — they sit directly on bg.
- **Surface Hover** (`#1c1f23`): Hover state on cards.
- **Surface Elevated** (`#202327`): Modal and dialog surface.
- **Surface Soft** (`#0d0d0e`): Near-black dividers.
- **Border** (`#2f3336`): 1px hairline on tweet dividers and card outlines — the most-used border color on the platform.
- **Border Strong** (`#536471`): Heavier divider on focused inputs.
- **Border Subtle** (`#16181c`): Near-invisible separator.

### Shadow Colors
- **Shadow Standard** (`rgba(0,0,0,0.4)`): Modal and elevated card shadow.
- **Shadow Elevated** (`rgba(0,0,0,0.6)`): Deep modal shadow.
- **Shadow Hairline** (`rgba(255,255,255,0.04)`): Faint outline-shadow used as 0 0 0 1px on cards in dim mode for definition.

### Semantic
- **Success** (`#00ba7c`): Green — same hue as retweet-active.
- **Warning** (`#fab421`): Gold — same as verified-gold.
- **Danger** (`#f4212e`): Saturated red — destructive actions, error toasts.
- **Info** (`#1d9bf0`): Same as brand-blue.

## 3. Typography Rules

### Font Family
- **Primary (Chirp)**: `"TwitterChirp", "Chirp", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`. Chirp is the proprietary X type family, an in-house adaptation of Grilli Type's GT America commissioned in 2021. It carries every UI surface — display, body, navigation, captions.
- **Mono (ChirpMono)**: `"TwitterChirpMono", ui-monospace, "SF Mono", Menlo, Consolas, monospace`. Chirp's mono companion. Code blocks, technical references.
- **OpenType features**: `'cv02'` for the alternative single-storey 'a', `'cv03'` for the disambiguated 'g', `'cv11'` for I/l/1 — toggled on display sizes for the engineered display feel.
- **No serif**: X has zero serif type anywhere on the platform. The single-family discipline is the brand's typographic philosophy.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Chirp | 60 | 800 | 1.05 | -1.5px | cv02, cv03 | Marketing landing h1 |
| display-lg | Chirp | 48 | 800 | 1.10 | -1px | — | Section heads on marketing |
| display-md | Chirp | 36 | 700 | 1.15 | -0.8px | — | Sub-section heads |
| display-sm | Chirp | 28 | 700 | 1.20 | -0.5px | — | Card titles |
| title-lg | Chirp | 23 | 700 | 1.30 | 0 | — | Profile display name on tweet |
| title-md | Chirp | 20 | 700 | 1.30 | 0 | — | Modal heads |
| title-sm | Chirp | 17 | 700 | 1.35 | 0 | — | Right-rail card heads (Trending, Who to follow) |
| tweet-display | Chirp | 23 | 400 | 1.30 | 0 | — | Standalone tweet on detail page — the "showcase" register |
| body-md | Chirp | 15 | 400 | 1.30 | 0 | — | Tweet body in feed — the platform's default reading register |
| body-sm | Chirp | 13 | 400 | 1.30 | 0 | — | Right-rail body |
| metadata | Chirp | 13 | 400 | 1.25 | 0 | — | "@username · 4h" — handle and timestamp |
| label | Chirp | 12 | 700 | 1.30 | 0.3px | — | Pill labels, badge text |
| caption | Chirp | 13 | 500 | 1.30 | 0 | — | Tooltip text, fine annotations |
| code-md | Chirp Mono | 13 | 400 | 1.55 | 0 | — | Code spans, technical references |
| button | Chirp | 15 | 700 | 1.0 | 0 | — | Primary CTA pill text |
| nav-link | Chirp | 20 | 400 | 1.4 | 0 | — | Left-rail nav (default) — unusually large |
| nav-link-active | Chirp | 20 | 700 | 1.4 | 0 | — | Active nav item — same size, weight 700 |
| counter | Chirp | 13 | 400 | 1.0 | 0 | — | Engagement counter under tweets |

### Principles
- **Single family across every register.** Chirp handles display, body, navigation, captions, and code. The discipline IS the brand voice.
- **Display weights stay at 700–800.** No 900 weight, no extreme stretching.
- **Body sits at 15px / 400 / 1.3.** This is the platform's signature reading register — denser than 16/1.5 SaaS marketing, looser than Reddit's 14/1.5 forum body.
- **Left-rail navigation at 20px.** Unusually large for chrome — but appropriate because navigation IS reading on this platform.
- **No italic for emphasis.** Italic is reserved exclusively for the X wordmark.
- **Negative tracking essential at display.** Without `-0.5` to `-1.5px` tracking, Chirp at 700+ reads too wide.
- **Mono only for technical content.** Don't use ChirpMono for design accent — it's a credibility signal, not decoration.
- **Tweet body never bolds for emphasis.** Bold is reserved for profile names. Inline emphasis comes from quote tweets or italics within copied text.

## 4. Component Stylings

### Buttons (5 variants)

**`button-primary`** — White-on-black pill — the post-rebrand signature. Background `#ffffff`, text `#000000`, Chirp 15px / 700, padding 12px × 24px, height 44px, radius 9999 (pill). Used on every Post button, every Sign Up CTA. Hover darkens background to `#d7dbdc` over 100ms.

**`button-primary-blue`** — Legacy Twitter-blue pill, surviving on certain marketing pages. Background `#1d9bf0`, text `#ffffff`, same shape. Used scarcely; the white-on-black is the new default.

**`button-secondary`** — Outlined ghost pill. Transparent background, text `#e7e9ea`, 1px `#536471` border, same shape and padding. Used as the secondary action paired with a primary CTA.

**`button-ghost`** — Tertiary text-only. Transparent background, text `#71767b`, no border, padding 8px × 16px, pill. Used for "Cancel" and inline link CTAs.

**`button-icon`** — Engagement icon button (reply, retweet, like, share, bookmark). Transparent background, icon `#71767b` muted, 36×36 hit area, pill hover background. On hover, icon color shifts to its specific active hue (blue / green / magenta / blue) and a faint colored circle fades in behind it.

### Cards

**`card-tweet`** — Standard timeline tweet. Background `#000000` (sits directly on canvas), 1px `#2f3336` bottom-border (the divider between tweets), 12px × 16px padding, no radius. Avatar 40px circular left, content right. The lack of card chrome is the platform's signature.

**`card-tweet-detailed`** — Standalone tweet on detail page. Background `#000000`, 1px `#2f3336` border around the entire card, 16px radius (lg), 16px padding. Tweet body in `tweet-display` register (23px / 400). The "showcase" register.

**`card-trending`** — Right-rail trending card. Background `#16181c`, 16px radius, 12px padding. Title in 17/700, count in 13/400 muted.

**`card-suggested`** — Who-to-follow card. Background `#16181c`, 16px radius, 16px padding. Profile rows with Follow CTA on right.

**`card-quote-tweet`** — Embedded quote tweet inside another tweet. 1px `#2f3336` border, 16px radius, 12px padding. Sits within the parent tweet's content region.

### Badges & Pills

**`badge-verified`** — Verified checkmark. Inline blue (`#1d9bf0`), gold (`#fab421`), or grey (`#829aab`) circle (18px) with white checkmark, positioned right of the display name. Tier indicates the user type.

**`badge-pill`** — Small pill label. Background `#16181c`, text `#e7e9ea`, 12px / 700, pill, padding 4px × 10px.

**`badge-blue`** — Brand-blue accent pill ("NEW", "Subscribed"). Background `#1d9bf0`, text `#ffffff`, 12px / 700, pill, padding 2px × 8px.

**`badge-trending`** — Inline trending indicator. No background, text `#71767b`, 13px / 500. "Trending in [country]" lead-in to a topic.

### Inputs / Forms

**`text-input`** — Standard input. Background `#000000`, text `#e7e9ea`, 1px `#2f3336` border, 4px radius, 14px × 16px padding, height 56px. Placeholder `#71767b`.

**`text-input-focused`** — Border thickens to 2px solid `#1d9bf0`. No background change.

**`textarea-compose`** — Tweet composer. No border, no background, no radius. Just a multi-line text area with placeholder "What's happening?!" in 20px / 400 / `#71767b`. The chromeless design is intentional — composing a tweet should feel like writing on the canvas itself.

**`search-bar`** — Right-rail search. Background `#16181c`, no border, pill (radius 9999), 12px × 20px padding. Search icon left.

### Navigation

**`top-nav`** — Sticky header on timeline, 53px tall, background `rgba(0,0,0,0.65)` with `backdrop-filter: blur(12px)`, no border. Section title left ("Home"), filter icon right.

**`left-rail`** — Persistent left navigation, 275px wide, background `#000000`. Top: X wordmark in 28px white italic. Below: vertical nav items (Home / Explore / Notifications / Messages / Bookmarks / Communities / Premium / Profile / More) in 20px Chirp 400 with 700-weight active state. Bottom: large white "Post" CTA pill (full-width).

**`right-rail`** — Right sidebar, 350px wide, background `#000000`. Top: search bar. Below: stacked cards (Subscribe to Premium, What's happening, Who to follow, Trends).

**`bottom-nav-mobile`** — Mobile bottom nav, 5 icons: Home / Search / Communities / Notifications / Messages. The center action button (compose tweet) floats above the nav as a circular blue or white pill.

### Decorative

**`engagement-row`** — Horizontal 5-icon row under every tweet: Reply / Retweet / Like / Bookmark / Share + view-count. Each icon is `button-icon` style with its specific active color. Counter is 13/400/`#71767b`.

**`like-burst`** — Heart icon animation on tap. Outline heart fills `#f91880` rose-magenta, scales 1.0 → 1.4 → 1.0 over 240ms with spring-bounce, with a faint magenta particle burst. The retweet animation is similar but in green.

**`verified-checkmark`** — 18px circular badge inline next to display name. Color indicates tier (blue / gold / grey).

## 5. Layout Principles

### Spacing System
Base unit **4px**. Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96`. The system uses tighter intra-card spacing than typical web brands — tweet cards have 12–16px padding only, with the 1px divider doing the heavy lifting between cards. Section padding (between major bands on marketing pages) at 64–96px.

### Grid & Container
The product surface is a fixed tri-column layout: 275 + 600 + 350 = 1225px nominal, 1265px max with gutters. The center 600px column is the focal feed; left rail is 275px persistent nav; right rail is 350px ancillary content. Marketing pages use a 12-column grid with 1280px max width. The center column never expands beyond 600px even at 4K viewports — type optimal-line-length is the constraint.

### Whitespace Philosophy
X compresses whitespace inside the feed (12px tweet padding, 1px divider) but allows generous space in marketing pages (64–96px section padding). The dual register reflects the platform's identity: information-dense in product, marketing-comfortable in landing pages.

### Section Cadence
Marketing pages alternate dark feature bands and white feature bands, with the X wordmark appearing in white (on dark) or black (on white) per band context. Product pages run uninterrupted: tweet → divider → tweet → divider, with promoted tweets and ads marked only by a 12px / 500 / `#71767b` "Promoted" label above.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 2px | Reserved — barely used |
| XS | xs | 4px | Text inputs, small inline buttons |
| Standard | sm | 8px | Modal sub-elements, tooltip cards |
| Comfortable | md | 12px | Image attachments inside tweets |
| Large | lg | 16px | Cards (right-rail, modal, detailed tweet) — the default content card radius |
| Featured | xl | 20px | Floating panels, drawer shells |
| Pill | pill | 9999px | Buttons, search bar, verified badges, profile avatars |

X's signature radii are **9999px on every button and badge** (full pill) and **16px on every card**. The pill-shaped CTAs are part of the post-rebrand identity — Twitter's old design used 6px radius rounded rectangles. The shift to full pills made the brand more decisively contemporary.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow, no border | Body sections, top nav, tweet feed (the canvas IS flat) |
| 1 — Hairline | 1px `#2f3336` border or bottom-border | Tweet dividers, card outlines |
| 2 — Surface | `#16181c` background, no shadow | Right-rail cards, search bar, suggested follows |
| 3 — Elevated | `#202327` background or `rgba(0,0,0,0.4) 0 4px 16px` shadow | Hover states, dropdowns |
| 4 — Modal | `#202327` + `rgba(0,0,0,0.6) 0 12px 32px` + backdrop dim | Compose modal, settings dialog |
| 5 — Overlay | Same as modal + ESC focus trap | Image lightbox, video fullscreen |

### Shadow Philosophy
X uses **hairline borders for elevation, not drop shadows**. The 1px `#2f3336` divider between tweets is the platform's most-used elevation tool — a single horizontal line that says "this content ends, this content begins." Drop shadows are reserved for modal and dialog layers, never for inline cards. The flat-canvas philosophy is what gives X its aggressively-contemporary feel; legacy social platforms used drop shadows on every card for "depth," X strips them.

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hovers, opens, transitions.
- **Emphasized ease (spring-bounce)**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — like-burst, retweet animation, follow confirmations.

### Duration Buckets
- **Fast (100ms)**: Color shifts on hover, button press feedback, link underline.
- **Standard (200ms)**: Card hover background, dropdown open, modal entrance.
- **Slow (300ms)**: Tweet expand on quote, image lightbox open, page-section reveals.

### Per-Component Micro-States
- **Button hover**: Primary white pill darkens to `#d7dbdc` over 100ms; engagement icons shift to active color over 100ms.
- **Button press**: Scale 1.0 → 0.96 → 1.0 over 200ms with spring-bounce.
- **Like-burst**: Outline heart fills magenta, scales 1.0 → 1.4 → 1.0 over 240ms with spring-bounce, plus 5–8 magenta particles fading outward over 360ms.
- **Retweet animation**: Outline retweet icon fills green, rotates 360° over 280ms with emphasized ease.
- **Reply hover**: Reply icon shifts `#71767b` → `#1d9bf0` over 100ms; faint blue circle fades in behind it.
- **Bookmark active**: Outline bookmark fills brand-blue, no scale animation (subtle confirmation).
- **Tweet hover**: Tweet card background shifts from `#000000` → `#080808` (very faint) over 100ms.
- **Input focus**: 2px solid blue ring expands from 0 → 2px over 100ms.
- **Avatar hover**: Avatar overlays a 60% black tint with white profile preview popover after 600ms hover.

### Page Transitions
X uses standard browser navigation. Tweet detail page opens with a 200ms slide-in-from-right on mobile, instant on desktop. Section-on-scroll reveals on marketing pages are 300ms fade-in (no translate) gated by `IntersectionObserver`.

### Reduced Motion
`prefers-reduced-motion: reduce` honored: like-burst skipped (instant fill, no scale), retweet rotation skipped, hover scale animations replaced with color-only transitions, tweet detail slide-in becomes instant. Tweet auto-refresh notifications fade in instead of sliding.

## 9. Accessibility & A11y

### Contrast Pairs
- **Strong on bg**: `#ffffff` on `#000000` = **21.0** — AAA at every size.
- **Text on bg**: `#e7e9ea` on `#000000` = **18.7** — AAA.
- **Body on bg**: `#e7e9ea` on `#000000` = **18.7** — AAA.
- **Muted on bg**: `#71767b` on `#000000` = **5.5** — AA at body sizes; meets WCAG for 13px text.
- **Blue on bg**: `#1d9bf0` on `#000000` = **6.7** — AA.
- **On-brand on blue**: `#ffffff` on `#1d9bf0` = **3.6** — passes large-text AA only; bold-weight CTA text passes.

### Focus Indicators
Every focusable element shows a 2px solid `#1d9bf0` ring with 2px offset. The legacy blue is retained as the focus signal because it provides distinct contrast on both dark (Lights Out) and light (Default) modes.

### ARIA Patterns
- **Tweet card**: Wrapped in `<article aria-labelledby="tweet-author tweet-content">`; engagement actions use `<button aria-label="Like">` etc.
- **Engagement icons**: Each is `<button aria-pressed="true|false" aria-label="Like" / "Unlike">`. Counter announced via `aria-live="polite"`.
- **Compose modal**: `role="dialog"` with `aria-labelledby` referencing the title; ESC closes; focus trapped.
- **Verified badge**: `aria-label="Verified account"` on the SVG.
- **Trending**: Right-rail trending list uses `<section aria-labelledby="trending-heading">`.
- **Left-rail navigation**: `<nav aria-label="Primary">` with current page marked `aria-current="page"`.

### Keyboard Navigation
Tab order: skip-link → left rail → main feed → right rail. Skip-link at top jumps to `<main>`. `j` / `k` shortcuts navigate between tweets in feed; `n` opens compose modal; `?` opens keyboard shortcut help. Tab traverses engagement icons in order. Modal traps focus; ESC closes.

### Screen Reader Hints
Verified badge announces tier ("Verified account, premium" / "Verified business" / "Verified government account"). Engagement counters use long-form ("1.2 million likes") rather than abbreviated ("1.2M"). Quoted tweets announce "Quoting [author]: [content]" before the parent tweet body.

### Reduced Motion Handling
Honored via `@media (prefers-reduced-motion: reduce)` — like-burst and retweet animations reduced to instant fill, hover scales removed, tweet auto-refresh appears via fade only. Section-reveal animations on marketing pages reduced to instant fade.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 500px | Bottom nav appears; left rail hidden; right rail hidden; full-width feed |
| Tablet | 500–768px | Single-column feed; left rail collapses to icon-only column (68px) |
| Desktop | 768–1265px | Full tri-column layout; left rail at 275px, feed at 600px, right rail at 350px |
| Wide | > 1265px | Same as desktop with more breathing room; max content 1265px |

### Touch Targets
- Engagement icons: 36 × 36px hit area (visually 24px icon centered in 36px button).
- Primary CTA pill: 44 × 44px minimum (12px × 24px padding).
- Profile avatars: 40 × 40px in feed, 32px in compact lists, 80px on profile pages.
- Bottom-nav icons (mobile): 56 × 56px each.

### Collapsing Strategy
At < 1024px right rail collapses (search moves into top-nav). At < 768px left rail collapses to icon-only column. At < 500px both rails hide and bottom-nav appears. Compose moves from inline button to FAB.

### Image Behavior
Image attachments inside tweets use 12px radius and full-bleed within the tweet content region. Multi-image tweets use a 2x2 or 1x2 grid layout. Profile banners crop responsively (1500x500 ideal, mobile shows centered crop). Profile avatars are circular (radius 9999) at all sizes.

## 11. Content & Voice

### Tone
**Direct, present-tense, occasionally provocative.** X (post-rebrand) leans into algorithmic-confidence — "What's happening?!" replaces Twitter's old "What's happening?" with a mild urgency. Marketing copy is short and assertive ("Join the conversation"); product copy is functional ("Tap to retweet"). The voice rejects the sentimental-warmth of legacy social and embraces a faintly-detached information-platform register.

### Microcopy Patterns
- **CTA verbs**: "Post", "Sign up", "Sign in", "Follow", "Subscribe to Premium". Action-oriented and short.
- **Compose placeholder**: "What's happening?!" — the exclamation point is post-rebrand.
- **Reply placeholder**: "Post your reply" — never "Type your response."
- **Empty timeline**: "Welcome to your timeline! Follow some accounts to see posts here."
- **Engagement counters**: Always abbreviated ("1.2K", "247", "1.5M") — full numbers are reserved for screen-reader-only labels.
- **Promoted indicator**: "Promoted" in 12/500 muted text — never "Sponsored" or "Ad."

### Empty States
- **Empty timeline**: "Welcome to X! Follow some accounts to see posts in your timeline."
- **Empty notifications**: "Nothing to see here — yet. When someone interacts with your posts, you'll see it here."
- **Empty bookmarks**: "Save Posts for later. Bookmark your favorites here."
- **Empty messages**: "Start a conversation. Send a Direct Message to anyone."

### Error Messages
**Pattern**: Single-line red toast ("Something went wrong. Try again.") with retry CTA. Network failures preserve the draft. Tweet character limit enforces silently with a counter ring (gold at 20 left, red at 0).

### Success Confirmations
Single-line toast: "Your post was sent" / "Followed @username" / "Reply posted." Auto-dismisses after 4s. Like / retweet confirmations are silent — visual feedback (color shift, animation) is the confirmation.

### CTA Verb Conventions
"Post" not "Tweet" (post-rebrand) / "Reply" not "Comment" / "Repost" not "Retweet" (officially, though "Retweet" persists in user vocabulary) / "Follow" not "Subscribe to" (except Premium) / "Like" not "Heart" or "Favorite."

## 12. Dark Mode & Theming

X ships **three themes** — Default (white), Dim (`#15202b` blue-grey), and Lights Out (`#000000` pure black). Lights Out is the most-used and the platform's visual identity; Default is the legacy white mode preserved for users who prefer it; Dim is the mid-darkness option (the original "dark mode" before Lights Out was added).

```yaml
colors-light:                     # Default mode
  bg: '#ffffff'                  # white canvas
  bg-dim: '#15202b'              # not used in light mode
  surface: '#f7f9f9'             # right-rail card surface
  surface-hover: '#eff3f4'
  surface-elevated: '#ffffff'
  text: '#0f1419'                # near-black text
  text-strong: '#000000'
  text-body: '#0f1419'
  text-muted: '#536471'
  text-soft: '#71767b'
  brand-blue: '#1d9bf0'          # unchanged
  brand-blue-hover: '#1a8cd8'
  primary-action: '#0f1419'      # black-on-white CTA — inverse of dark mode
  primary-action-hover: '#272c30'
  secondary-action: '#ffffff'
  border: '#eff3f4'
  border-strong: '#cfd9de'
  on-brand: '#ffffff'

colors-dim:                       # Dim mode (mid-dark blue-grey)
  bg: '#15202b'
  surface: '#1e2732'
  surface-hover: '#283340'
  surface-elevated: '#27333f'
  text: '#f7f9f9'
  text-strong: '#ffffff'
  text-body: '#f7f9f9'
  text-muted: '#8b98a5'
  text-soft: '#5b7083'
  brand-blue: '#1d9bf0'
  primary-action: '#ffffff'
  secondary-action: '#15202b'
  border: '#38444d'
```

**Defining decisions**:
- The legacy `#1d9bf0` brand-blue is unchanged across all three modes. It's the single color that anchors X's identity through theme.
- Primary CTA inverts: black-on-white in light mode, white-on-black in dim/lights-out. The inversion preserves the CTA's "stand out from canvas" property regardless of mode.
- Engagement icon active colors (blue / green / magenta) are unchanged — they're saturated enough to work on every canvas.

## 13. Lineage & Influences

X's visual lineage post-rebrand descends from **Helvetica Nera, Bauhaus monochromatic discipline, and Brutalist web design**. The single-letter wordmark, the elimination of all decorative color, and the embrace of pure black canvas all reject the warm-friendly aesthetic of legacy social platforms (Twitter blue bird, Facebook blue, Instagram gradient). The italicized X glyph itself echoes Helvetica Italic at extreme weight — a typographic gesture rather than a logotype.

The Chirp typeface (commissioned 2021) is built on Grilli Type's GT America bones — a contemporary American gothic that echoes the European modernist tradition (Akzidenz Grotesk, Helvetica) without being either. The 15px / 1.3 body size for tweets is borrowed from print newspaper body copy — denser than web standard, looser than mass-market book.

The post-rebrand visual language explicitly references **Apple's industrial-design discipline** (single material, minimal chrome) and **the grayscale UIs of early-internet tools** (LiveJournal, IRC clients, Usenet readers). Where contemporary social platforms reach for neon and gradient (TikTok, Instagram), X reaches for absence and information density — a deliberate counter-position.

- **Chirp typeface (Grilli Type adaptation)** — The proprietary system font. https://www.grillitype.com
- **Helvetica / Akzidenz Grotesk** — The European modernist sans lineage. (no URL)
- **Apple industrial design** — Material discipline, minimal chrome. https://apple.com
- **Bauhaus / Swiss Style** — Grayscale + single-accent discipline. (no URL)
- **Twitter (legacy)** — The platform's visual ancestor; the rebrand inherits its 600px feed column and 1px divider. https://twitter.com (now redirects to x.com)

## 14. Do's and Don'ts

### Do
- Anchor the page on Lights Out (`#000000`) — it's the platform's visual identity.
- Use Chirp for every text register. The single-family discipline is the brand voice.
- Run body type at 15px / 400 / 1.3 line-height. Don't loosen to 1.5 (drifts to SaaS-marketing).
- Use white-on-black primary CTA pills. The inversion is the post-rebrand signature.
- Reserve `#1d9bf0` blue for links, verified badges, focus rings, and the bookmark-active state. Nowhere else.
- Use 1px `#2f3336` hairlines as dividers between tweets. No card chrome, no padding shells.
- Use the engagement-row 5-icon pattern (reply / retweet / like / share / bookmark) on every tweet, with each icon's specific active color.
- Run nav links at 20px / 400 (active 700) on the left rail. Larger than typical chrome — but appropriate.
- Use full-pill (9999px) radius on every button and badge.
- Use 16px radius on every card.

### Don't
- Don't use the legacy Twitter blue as a primary CTA fill. The post-rebrand CTA is white-on-black.
- Don't introduce a third brand color. X is monochromatic + legacy blue + the engagement palette.
- Don't bold tweet body for emphasis. Body stays at 400.
- Don't add drop shadows to tweet cards. The 1px hairline is the elevation.
- Don't show a card border on tweets in the timeline. Only standalone tweet detail cards get the full 1px border.
- Don't replace italic X wordmark with a roman version. The italic IS the brand mark.
- Don't soften the engagement-icon active colors. Magenta `#f91880` and green `#00ba7c` are full strength.
- Don't use serif type anywhere.
- Don't pad tweet cards beyond 16px horizontal / 12px vertical. Density is the platform's premise.
- Don't replace the 600px center column with a wider feed. Optimal line length is the constraint.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Lights Out: #000000 (pure black — default)
Bg / Dim:        #15202b (mid-dark blue-grey)
Bg / Default:    #ffffff (light mode)
Surface:         #16181c (right-rail card on dark)
Border:          #2f3336 (1px hairline — divides every tweet)
Text:            #e7e9ea (off-white — primary)
Text Strong:     #ffffff (display headings)
Text Muted:      #71767b (metadata, "@username · 4h")
Brand Blue:      #1d9bf0 (legacy — links, verified, focus, bookmark)
Like Active:     #f91880 (magenta-rose)
Retweet Active:  #00ba7c (green)
Reply Hover:     #1d9bf0 (legacy blue)
Primary CTA:     #ffffff (white pill on black canvas)
On-CTA:          #000000 (black text on white pill)
```

### Example Component Prompts

1. "Create an X-style tweet card: `#000000` background, no card border, 1px `#2f3336` bottom-divider only, 12px × 16px padding. 40px circular avatar left. Display name in Chirp 15/700 white + gold verified checkmark. Handle in Chirp 13/400 `#71767b`. Tweet body in Chirp 15/400/1.3 `#e7e9ea`. Engagement row at bottom: reply / retweet / like / bookmark / share icons with 13/400/`#71767b` counters."

2. "Design a primary Post button: white-on-black pill, background `#ffffff`, text `#000000` in Chirp 15/700, padding 12px × 24px, height 44px, radius 9999. Hover background to `#d7dbdc` over 100ms."

3. "Build a left-rail navigation: 275px wide, `#000000` background. Top: italicized X wordmark in 28/Chirp Black white. Below: vertical nav items (Home, Explore, Notifications, Messages, Bookmarks, Communities, Premium, Profile, More) in Chirp 20/400 `#e7e9ea`. Active item in 20/700 with same hover treatment. Bottom: full-width white Post pill."

4. "Compose a like-burst animation: outline heart icon (`#71767b` default) fills `#f91880` magenta-rose, scales 1.0 → 1.4 → 1.0 over 240ms with spring-bounce ease (`cubic-bezier(0.34, 1.56, 0.64, 1)`), with 5–8 small magenta particles fading outward over 360ms."

5. "Create a verified-badge inline: 18px circular `#1d9bf0` blue badge (or `#fab421` gold for businesses) with white checkmark, positioned right of the display name in tweet header."

6. "Design a tweet compose modal: dark `#202327` surface, 16px radius, 16px padding, `rgba(0,0,0,0.6)` shadow. Multi-line textarea with no border, no background, placeholder 'What's happening?!' in Chirp 20/400 `#71767b`. Bottom row: media-attach icons left, character counter ring + Post pill right."

### Iteration Guide
1. Start with Lights Out (`#000000`) as the canvas. Switching to Default (white) is a user preference; the brand identity lives on black.
2. Use Chirp for everything. If you fall back to Inter or Helvetica, the brand voice is lost.
3. Body sits at 15px / 400 / 1.3 line-height. Loosening it to 16/1.5 drifts toward generic SaaS marketing.
4. Reserve the legacy `#1d9bf0` blue for: links, verified badges, focus rings, bookmark-active. Nowhere else.
5. White pill is the primary CTA. If you find yourself wanting to use brand-blue for a primary CTA, you're in legacy-Twitter mode — switch to white.
6. The 1px `#2f3336` hairline is the single most-used elevation tool. Don't replace it with cards.
7. Engagement icons each have their specific active hue (blue reply / green retweet / magenta like / blue bookmark) — preserve that grammar.
8. Trust the absence. X's identity is what it removes (color, decoration, ornament) more than what it adds.
