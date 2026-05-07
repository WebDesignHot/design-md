---
name: Bear
tagline: Off-white canvas, a custom bearsans display, a red bear icon, and tealish handwritten underlines — a Markdown notes app dressed as a Mac Pro magazine.
updated_at: 2026-05-05T14:31:15+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://bear.app
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [saas, media]
tags: [light, editorial, sans, soft, warm, organic, playful, apple-native]
preview_swatch: ['#ffffff', '#dd4c4f', '#456aa3']
related: [apple, notion, things-app]
description: 'Bear''s site mirrors the macOS Markdown app it sells — paper-white canvas (`#ffffff`), a custom `bearsans` display family at 51px (regular weight, never bold), a red `#dd4c4f` bear-mark accent, and a tealish-blue `#456aa3` for handwritten section dividers and underlines. Body copy in matching `bearsans` sits in a soft `#444444`, and the App Store download button is a black-pill macOS affordance. The whole page reads like an Apple-pro magazine spread — paper-white, two-accent, warm-grey body. Bear is the rare site where the brand is more pious-Apple than Apple itself.'

colors:
  bg: '#ffffff'                  # paper-white canvas — the macOS metaphor
  bg-soft: '#fafaf8'             # warm-white nested panel
  surface: '#f4f1ec'             # cream feature card
  surface-elev: '#ebe5dc'        # deeper cream for nested cards
  surface-paper: '#fdfbf5'       # softest cream for inset stationery
  text: '#444444'                # primary body copy — soft warm grey
  text-strong: '#222222'         # display copy — soft black, never pure
  text-deepest: '#111111'        # rare; only the heaviest display moment
  text-body: '#5a5a5a'           # secondary running-text in long features
  text-muted: '#7a7a7a'          # captions, metadata
  text-soft: '#999999'           # disabled link text, sparingly used
  accent-red: '#dd4c4f'          # bear mark logo + section divider red
  accent-red-hover: '#c43a3d'    # pressed state for red accents
  accent-red-soft: '#fce5e5'     # soft red badge background (rare)
  accent-teal: '#456aa3'         # handwritten underline / accent color
  accent-teal-soft: '#cbdaee'    # soft teal background for "Mac" tab pill
  accent-teal-hover: '#34588f'   # darker teal on hover
  accent-teal-deep: '#2c466f'    # text on soft-teal pill chip
  cta-bg: '#1a1a1f'              # App Store button bg — Apple's near-black
  cta-bg-hover: '#2a2a2f'        # hover state — slightly lighter
  cta-text: '#ffffff'            # white text on App Store CTA
  border: '#0000001a'            # 10% black hairline
  border-soft: '#00000010'       # 6% black for very subtle dividers
  border-strong: '#00000028'     # 16% black for focused inputs
  shadow-card: 'rgba(34,30,15,0.04)'   # warm-tinted ambient
  shadow-screenshot: 'rgba(0,0,0,0.10)' # macOS-style screenshot shadow
  shadow-elev: 'rgba(34,30,15,0.08)'   # heavier hover lift
  scrim: 'rgba(20,18,15,0.50)'   # modal backdrop
  success: '#3a7b3a'             # confirmation green
  success-soft: '#eaf3ea'
  warning: '#a35e0a'             # advisory amber
  warning-soft: '#fbf1de'
  danger: '#dd4c4f'              # form-error red — same as bear-mark accent (intentional)
  danger-soft: '#fce5e5'
  info: '#456aa3'                # informational accent — same as teal accent
  info-soft: '#cbdaee'

typography:
  display:
    family: 'bearsansheadline, "Helvetica Neue", -apple-system, "system-ui", "Segoe UI", Roboto, sans-serif'
    weights: [400, 500]
    opentype-features: ['kern', 'liga']
  body:
    family: 'bearsans, -apple-system, "system-ui", "Helvetica Neue", sans-serif'
    weights: [400, 500, 600]
  serif:
    family: '"New York", Georgia, serif'
    weights: [400]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 51, weight: 400, lineHeight: 1.20, tracking: '-0.005em', family: display, opentype: ['kern'] }
    display-xl:      { size: 42, weight: 400, lineHeight: 1.20, tracking: '-0.005em', family: display }
    display-lg:      { size: 36, weight: 400, lineHeight: 1.25, tracking: '-0.005em', family: display }
    display-md:      { size: 28, weight: 400, lineHeight: 1.30, tracking: '0',        family: display }
    display-sm:      { size: 22, weight: 500, lineHeight: 1.40, tracking: '0',        family: display }
    title-lg:        { size: 26, weight: 500, lineHeight: 1.40, tracking: '0',        family: body }
    title-md:        { size: 18, weight: 600, lineHeight: 1.40, tracking: '0',        family: body }
    title-sm:        { size: 16, weight: 600, lineHeight: 1.40, tracking: '0',        family: body }
    body-lg:         { size: 19, weight: 400, lineHeight: 1.60, tracking: '0',        family: body }
    body-md:         { size: 17, weight: 400, lineHeight: 1.60, tracking: '0',        family: body }
    body-sm:         { size: 15, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    caption:         { size: 13, weight: 500, lineHeight: 1.40, tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.30, tracking: '0.04em',   family: body, transform: uppercase }
    overline:        { size: 11, weight: 600, lineHeight: 1.30, tracking: '0.06em',   family: body, transform: uppercase }
    button-md:       { size: 15, weight: 500, lineHeight: 1.20, tracking: '0',        family: body }
    link:            { size: 17, weight: 400, lineHeight: 1.60, tracking: '0',        family: body }
    nav-link:        { size: 15, weight: 500, lineHeight: 1.40, tracking: '0',        family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',        family: mono }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.50, tracking: '0',        family: mono }

radius:
  micro: 4
  sm: 8         # cards step down to 8px
  md: 12        # App Store pill button — Apple's affordance
  lg: 16
  xl: 20        # hardware mockup screenshot rounding (approximates device corners)
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1080
  prose-width: 680
  header-height: 64
  hero-height: 720
  device-screenshot-max: 1200

components:
  app-store-cta:
    bg: '#1a1a1f'
    color: '#ffffff'
    radius: 12
    padding: '12px 22px'
    height: 44
    font: button-md
    use: 'Primary App Store download pill — Apple''s affordance, lifted unchanged.'
  app-store-cta-hover:
    bg: '#2a2a2f'
    color: '#ffffff'
    radius: 12
    use: 'Hover state — slightly lighter near-black.'
  app-store-badge:
    bg: 'transparent'
    use: 'Standard "Download on the Mac App Store" / "App Store" badges — Apple''s SVG, unmodified.'
  bear-icon-headline:
    bg: 'transparent'
    color: '#dd4c4f'
    use: 'Red polar-bear silhouette in the nav — the only saturated bear-mark on the page.'
  feature-card-cream:
    bg: '#f4f1ec'
    color: '#444444'
    radius: 8
    border: '1px solid #0000001a'
    padding: '32px'
    use: 'Cream feature panel — flat, hairline-bordered, no shadow.'
  feature-card-paper:
    bg: '#fafaf8'
    color: '#444444'
    radius: 8
    border: '1px solid #00000010'
    padding: '32px'
    use: 'Lighter cream nested panel for in-flow content.'
  handwritten-underline:
    color: '#456aa3'
    use: 'Tealish-blue brushstroke beneath emphasis words ("love", "Mac"). SVG ornament, no border or radius.'
  device-tab-pill:
    bg: '#cbdaee'
    color: '#2c466f'
    radius: 9999
    padding: '8px 18px'
    height: 36
    font: caption
    use: 'Soft-teal pill for Mac / iPhone / iPad device tab selector.'
  device-tab-pill-active:
    bg: '#456aa3'
    color: '#ffffff'
    radius: 9999
    use: 'Active device tab — saturated teal fill, white text.'
  device-screenshot:
    bg: 'transparent'
    radius: 20
    shadow: 'rgba(0,0,0,0.10) 0 16px 40px -8px'
    use: 'Mac/iPhone/iPad app screenshot with macOS-style soft drop shadow.'
  testimonial-quote:
    bg: '#ffffff'
    color: '#444444'
    radius: 8
    border: '1px solid #0000001a'
    padding: '32px 28px'
    use: 'Pull-quote card with avatar, name, role beneath.'
  text-input:
    bg: '#ffffff'
    color: '#222222'
    radius: 8
    height: 44
    padding: '12px 14px'
    border: '1px solid #0000001a'
    focus: 'border thickens to 1.5px #456aa3 + faint teal ring'
    use: 'Newsletter signup input.'
  badge-red:
    bg: '#fce5e5'
    color: '#a8362f'
    radius: 9999
    padding: '4px 10px'
    font: caption
    use: 'Inline status tag — "New", "Beta" — soft red pill, sparingly used.'
  link-inline:
    color: '#456aa3'
    underline: '1px solid currentColor'
    use: 'Inline body link — teal with hairline underline.'
  nav-link:
    color: '#444444'
    use: 'Top-nav item — soft grey with no underline; underline appears on hover.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out-soft: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 120
  duration-standard: 220
  duration-slow: 360
  button-hover: 'background 220ms standard — no transform'
  device-tab-switch: 'screenshot fades 360ms emphasized when device tab pill changes'
  underline-grow: 'tealish handwritten underline draws over 600ms ease-out-soft on first viewport entry'
  scroll-reveal: 'sections fade in over 360ms ease-out-soft when entering viewport'
  reduced-motion: 'respects prefers-reduced-motion: reduce — handwritten-underline draw becomes instant render, all transforms suppressed.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(34,30,15,0.04) 0 1px 2px 0'
  card: 'rgba(34,30,15,0.04) 0 4px 12px -2px'
  screenshot: 'rgba(0,0,0,0.10) 0 16px 40px -8px'
  elevated: 'rgba(34,30,15,0.08) 0 12px 24px -8px, rgba(34,30,15,0.04) 0 4px 8px -2px'
  ring: '0 0 0 2px #456aa3'

accessibility:
  contrast-text-on-bg: 9.7           # #444444 on #ffffff — AAA
  contrast-text-strong-on-bg: 15.9   # #222222 on #ffffff — AAA
  contrast-text-on-cta: 14.7         # #ffffff on #1a1a1f — AAA
  contrast-red-on-bg: 4.9            # #dd4c4f on #ffffff — AA body, AAA large
  contrast-teal-on-bg: 5.7           # #456aa3 on #ffffff — AA body
  contrast-text-on-soft-teal: 9.4    # #2c466f on #cbdaee — AAA
  focus-ring: '2px solid #456aa3 + 2px outline-offset (matches macOS focus convention)'
  reduced-motion-honored: true
  touch-target-min: 44

dark-mode: null   # Light-only marketing surface. The Bear app itself ships full system-controlled light/dark themes (the dark theme is iconic among Markdown writers); the public marketing site is paper-white only.
---

## 1. Visual Theme & Atmosphere

Bear's site is a Mac-pro magazine spread that ships an app. The canvas stays paper-white at `#ffffff`, the H1 "Markdown notes you'll love" sets at 51px in custom **bearsansheadline** at weight 400, and a tealish-blue handwritten underline runs beneath the word "love" — borrowed directly from Apple's "Pro Display XDR" headline ornament style. The bear-icon mark glows red (`#dd4c4f`) in the nav, the only saturated chromatic moment. Body copy in matching **bearsans** at 17px sits in a deliberately-soft `#444444` — the same warm-grey BBEdit and TextEdit have used for body copy since the early Mac days. The CTA is a black App Store pill, lifted unchanged from Apple's system-software download pages.

The atmosphere is **Apple-pro magazine spread** — closer to a *macOS Big Sur promo page* than a third-party app landing. There are no gradient washes, no animated heroes, no parallax. Just the headline (with its hand-drawn teal underline), the device tab pill ("Mac / iPhone / iPad"), the device screenshot with its macOS-soft drop shadow, and the App Store pill. The page is structured as a single magazine spread per scroll-stop — hero, then features, then testimonials, then pricing — each occupying a near-viewport-height of generous vertical breathing room.

Bear chooses **two accents** rather than one: a red `#dd4c4f` for the bear-mark logo and primary "Download" link, and a tealish `#456aa3` for the handwritten underlines that ornament the page (under emphasis words in headlines, under "Mac" in the device pill). This two-accent system is unusual — most disciplined editorial brands choose a single voltage — but on Bear the red and teal play complementary roles: red is *identity* (the bear mark itself), teal is *expression* (handwritten ornaments, links). They never compete; they never overlap.

Body copy at the deliberately-soft `#444444` rather than `#000` or `#1a1a1a` is the brand-positioning signal. This is the same warm-grey value BBEdit and TextEdit have used for body copy for decades — it telegraphs that Bear is part of the *Mac-text-editor lineage* (BBEdit, TextEdit, MacWrite, Pages) rather than the modern note-taking lineage (Notion, Roam, Obsidian). The handwritten teal underline ornament reinforces this: it's borrowed from Apple's "creative pro" marketing visual language (Pro Display XDR, Logic Pro, Final Cut), not from productivity SaaS conventions.

**Key Characteristics:**
- Paper-white canvas (`#ffffff`) — never tinted, never grey
- Two custom in-house faces: `bearsansheadline` for display, `bearsans` for body
- Display copy at weight 400 — never bold; the lighter weight at large size is the calm, editorial feel
- Two brand accents: red (`#dd4c4f`) for the bear mark, teal (`#456aa3`) for handwritten underlines
- Body copy at deliberately-soft `#444444` — the Mac-text-editor warm-grey signature
- App Store pill CTA in `#1a1a1f` — Apple's affordance, used unmodified
- Handwritten teal underlines beneath emphasis words — borrowed from Apple Pro Display XDR
- 1080px max-width container — magazine-tight, narrower than typical SaaS
- Cream feature cards (`#f4f1ec`) lift via warm tonal layering, not shadow
- Device tab pill ("Mac / iPhone / iPad") with soft-teal background and saturated-teal active state
- Device screenshots get realistic macOS-style soft drop shadows (the Apple product-photography convention)

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): paper-white floor — the macOS / Mac App Store metaphor.
- **Ink** (`#444444`): the dominant text colour — soft warm grey, the BBEdit / TextEdit signature. Body paragraphs, primary nav links.
- **Ink Strong** (`#222222`): display copy — soft black, never pure `#000`.
- **Ink Deepest** (`#111111`): rare; reserved for the single heaviest display moment per page.

### Brand & Dark
- **Accent Red** (`#dd4c4f`): the bear-mark voltage. Bear icon in the nav, primary "Download" link, occasional emphasis text.
- **Accent Red Hover** (`#c43a3d`): pressed state — slightly darker red.
- **Accent Red Soft** (`#fce5e5`): soft red badge fill (rare; only for "New" or "Beta" announcements).
- **Accent Teal** (`#456aa3`): the handwritten-ornament voltage. Tealish-blue underlines, inline body links, focus ring.
- **Accent Teal Soft** (`#cbdaee`): soft teal pill fill — used for the device tab pill's inactive state.
- **Accent Teal Hover** (`#34588f`): pressed state — darker teal.
- **Accent Teal Deep** (`#2c466f`): text colour on soft-teal pill — passes AAA against `#cbdaee`.

### Accent
There are no decorative accents beyond the two brand colours. The page is monochrome warm-grey + red identity + teal ornament.

### Interactive
- **Link** (`#456aa3`): inline body links — teal with a 1px hairline underline (always present).
- **Link Hover** (`#34588f`): hover — slightly darker teal, underline thickens 1 → 1.5px.
- **Link-Red** (`#dd4c4f`): the rare red emphasis link — used for primary "Download" text links beside the App Store badge.
- **Selected** (`#456aa3` fill, `#ffffff` text on the active device tab pill).
- **Disabled** (`#999999` text, `#f4f1ec` fill): drained warm grey on cream.

### Neutral Scale
- **Ink Deepest** (`#111111`) — peak display, single moment per page
- **Ink Strong** (`#222222`) — display copy, the typical heavy-type colour
- **Ink** (`#444444`) — body, primary nav, the dominant text colour
- **Body** (`#5a5a5a`) — secondary running-text
- **Muted** (`#7a7a7a`) — captions, byline, metadata
- **Soft** (`#999999`) — disabled link text

### Surface & Borders
- **Canvas** (`#ffffff`) — page floor
- **Surface Soft** (`#fafaf8`) — warm-white nested panel
- **Surface** (`#f4f1ec`) — cream feature card
- **Surface Elev** (`#ebe5dc`) — deeper cream for nested cards
- **Surface Paper** (`#fdfbf5`) — softest cream for inset stationery
- **Hairline** (`#0000001a`) — default 10% black border
- **Hairline Soft** (`#00000010`) — 6% black for subtle dividers
- **Hairline Strong** (`#00000028`) — 16% black for focused inputs

### Shadow Colors
Bear uses **warm-tinted** shadows on UI chrome (`rgba(34, 30, 15, …)`) and **near-black** shadows on hardware mockups (`rgba(0, 0, 0, …)` — Apple's product-photography convention). The dual-shadow system is intentional: chrome shadows are warm to match the body grey; product-photography shadows are neutral to match Apple's conventions.

- `rgba(34,30,15,0.04) 0 1px 2px 0` — chrome ambient
- `rgba(34,30,15,0.04) 0 4px 12px -2px` — chrome card hover
- `rgba(0,0,0,0.10) 0 16px 40px -8px` — device screenshot (Apple style)
- `rgba(34,30,15,0.08) 0 12px 24px -8px, rgba(34,30,15,0.04) 0 4px 8px -2px` — elevated dropdown

### Semantic
- **Success** (`#3a7b3a` on `#eaf3ea`) — confirmation green
- **Warning** (`#a35e0a` on `#fbf1de`) — advisory amber
- **Danger** (`#dd4c4f` on `#fce5e5`) — form-error red — *intentionally* the same as accent-red. Bear treats validation errors and brand identity as the same red, since both are emotionally "alert" reds in the macOS HIG.
- **Info** (`#456aa3` on `#cbdaee`) — informational accent — *intentionally* the same as accent-teal.

## 3. Typography Rules

### Font Family

**Display Primary**: `bearsansheadline` — Bear's in-house display sans, loaded directly without fallbacks visible in the brand chrome. Fallback chain: `"Helvetica Neue", -apple-system, "system-ui", "Segoe UI", Roboto, sans-serif`. Helvetica Neue is the closest non-custom approximation — same Swiss-grotesque lineage.

**Body Primary**: `bearsans` — Bear's in-house text family. Fallback chain: `-apple-system, "system-ui", "Helvetica Neue", sans-serif`. The body family is matched to the display family (same letterforms, different optical sizing) so the page reads as a single voice.

**Serif companion**: `"New York", Georgia, serif` — available in fallbacks for code samples that benefit from serif legibility, but rarely surfaces. New York is Apple's system serif.

**Mono**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` — used for code samples that demonstrate Bear's Markdown rendering.

**OpenType features**: `kern` and `liga` always on. There are no manually enabled `ss01`/`ss02` features — the in-house family is used unmodified.

The dual-family system (`bearsansheadline` + `bearsans`) is unusual. Most brands either use a single typographic family across all sizes (Things, Granola) or pair a serif display with a sans body (Notion, Granola in serif/sans split). Bear pairs *two cuts of the same family* — display and body — which gives the page an unexpected continuity: the type is *one voice* even at radically different sizes.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | bearsansheadline | 51 | 400 | 1.20 | -0.005em | kern | Hero "Markdown notes you'll love" — peak typographic moment |
| display-xl | bearsansheadline | 42 | 400 | 1.20 | -0.005em | — | Section opener |
| display-lg | bearsansheadline | 36 | 400 | 1.25 | -0.005em | — | Sub-section opener |
| display-md | bearsansheadline | 28 | 400 | 1.30 | 0 | — | Feature title |
| display-sm | bearsansheadline | 22 | 500 | 1.40 | 0 | — | Mid-page section head |
| title-lg | bearsans | 26 | 500 | 1.40 | 0 | — | Card title on cream feature card |
| title-md | bearsans | 18 | 600 | 1.40 | 0 | — | Sub-card title |
| title-sm | bearsans | 16 | 600 | 1.40 | 0 | — | Inline emphasis title |
| body-lg | bearsans | 19 | 400 | 1.60 | 0 | — | Hero deck — slightly larger body |
| body-md | bearsans | 17 | 400 | 1.60 | 0 | — | Default running-text |
| body-sm | bearsans | 15 | 400 | 1.55 | 0 | — | Card meta, captions |
| caption | bearsans | 13 | 500 | 1.40 | 0 | — | Timestamp, byline |
| label | bearsans | 13 | 500 | 1.30 | 0.04em | uppercase | Section eyebrow |
| overline | bearsans | 11 | 600 | 1.30 | 0.06em | uppercase | Top-of-section overline |
| button-md | bearsans | 15 | 500 | 1.20 | 0 | — | App Store pill / button label |
| link | bearsans | 17 | 400 | 1.60 | 0 | — | Inline body link (matches body) |
| nav-link | bearsans | 15 | 500 | 1.40 | 0 | — | Top-nav item |
| code | mono | 14 | 400 | 1.55 | 0 | — | Code sample inside Markdown demo |
| code-micro | mono | 12 | 400 | 1.50 | 0 | — | Inline ⌘K-style shortcut bubble |

### Principles

- **Display weight 400 is the brand fingerprint.** Bear refuses to bold its display copy — the lighter weight at 51px size is what gives the page its calm, editorial feel rather than marketing-bold impact. Substituting weight 600 or 700 would tip the page into generic SaaS.
- **Two cuts of the same family.** `bearsansheadline` (display) and `bearsans` (body) are matched — same letterforms, optical-sized for their respective scales. The page reads as a single typographic voice across sizes.
- **17px body, 1.60 line-height.** Bear sits at the macOS body convention rather than the web 16px / 1.5 SaaS standard. The lush leading is non-negotiable.
- **Negative tracking on display only.** The hero uses `-0.005em`; sub-displays sit at zero. Body and caption sit at zero or slightly positive (0.04em on uppercase labels).
- **Soft `#444` body, not pure black.** The warm-grey body is the Mac-text-editor signature — substituting `#000` or `#1a1a1a` collapses the BBEdit / TextEdit lineage signal.
- **Markdown-rendered moments use mono.** Inside Bear's Markdown demonstrations, code samples render in `ui-monospace` — the page makes the product's core feature (Markdown rendering) typographic.
- **Helvetica Neue is the closest open-source substitute** if `bearsansheadline` and `bearsans` are unavailable. Inter at weight 400 also approximates body cleanly. Display swaps at weight 400 read closest to bearsansheadline at 51px.

## 4. Component Stylings

### Buttons

**`app-store-cta`** — The signature primary CTA. `#1a1a1f` fill (Apple's exact black), white text at 15px / 500, **12px radius**, 12×22px padding, 44px height. The pill is Apple's affordance, lifted unchanged from Apple's system-software download pages. This is the only "marketing button" Bear ships.

**`app-store-cta-hover`** — Pointer hover. Background brightens to `#2a2a2f` over 220ms standard. **No transform, no scale, no glow.** The hover is colour-only.

**`app-store-badge`** — Standard Apple "Download on the Mac App Store" / "Download on the App Store" SVG badges, used unmodified. The page often pairs the custom black-pill CTA with the SVG badge for redundancy.

### Cards

**`feature-card-cream`** — Cream feature panel. `#f4f1ec` fill, ink (`#444444`) text, **8px radius** (note: smaller than typical for cream cards — Bear keeps cards architectural rather than soft), 1px hairline border (`#0000001a`), 32px padding. **Flat — no shadow.** The cream surface plus hairline border is the elevation language.

**`feature-card-paper`** — Lighter cream nested panel. `#fafaf8` fill, 6% black hairline. Used for in-flow content where cream-on-cream stacking would lose contrast.

**`testimonial-quote`** — Pull-quote card. White fill, 8px radius, hairline border, 32×28px padding. Quote in 26px / 500 ink-strong, byline beneath in caption muted with 40px circular avatar flush left.

**`device-screenshot`** — Mac/iPhone/iPad app screenshot. No card chrome; the screenshot itself is rendered with **20px radius** (approximating the device corner) and a macOS-soft drop shadow (`rgba(0,0,0,0.10) 0 16px 40px -8px`). The screenshot floats on the canvas without a frame.

### Badges, Tags, Pills

**`device-tab-pill`** — The signature Mac/iPhone/iPad selector. Soft-teal fill (`#cbdaee`), deep-teal text (`#2c466f`), 9999px radius, 8×18px padding, 36px height, 13px / 500 caption.

**`device-tab-pill-active`** — Active device tab. Saturated teal fill (`#456aa3`), white text. The colour shift between inactive (soft) and active (saturated) is the page's most expressive interactive moment.

**`badge-red`** — Soft red announcement chip. `#fce5e5` fill, deep-red (`#a8362f`) text, 9999px radius, 4×10px padding. Used sparingly for "New" or "Beta" inline tags.

### Inputs / Forms

**`text-input`** — White fill, 1px hairline (`#0000001a`), 8px radius, 44px height, 12×14px padding. Body placeholder in 17px / 400 muted. On focus, border thickens to 1.5px teal (`#456aa3`) and a faint teal ring appears.

### Navigation

**`top-nav`** — White surface, 64px height, 1px bottom hairline. Wordmark flush left including the **red bear-mark icon** (`#dd4c4f`) — the only saturated chromatic moment in the chrome. Three nav links centred (Features, Pricing, About) in 15px / 500 ink (`#444444`). Right side: "Sign in" text + black App Store pill flush right.

**`nav-link`** — Soft warm grey (`#444444`), no underline at rest. Hairline underline appears on hover.

### Decorative

**`handwritten-underline`** — The signature ornament. A tealish-blue (`#456aa3`) brushstroke rendered as an SVG path beneath emphasis words inside hero headlines. The path is hand-drawn, not a straight line — it has a slight wobble that signals "human mark" rather than "machine underline". On first viewport entry, the path animates a 0% → 100% draw over 600ms ease-out-soft (a "brush stroke" reveal).

**`pull-quote-flourish`** — A red bear-mark SVG sometimes appears as a pull-quote ornament — small (24px), at the start of a featured testimonial.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`
- Section padding (vertical): 96–128px for major bands — generous magazine cadence
- Card internal padding: 32px on `feature-card-cream` and `testimonial-quote`; 24px on smaller nested panels
- Inter-card gutters: 24px between feature cards in 3-up grid

### Grid & Container

- Max content width: ~1080px on the inner grid with 24px gutters — narrower than most modern marketing sites, deliberately so
- Device screenshot can extend to ~1200px (full-bleed against the page gutter) for the hero device mockup
- Hero: single-column, centred, with H1 + handwritten underline + 19px deck + device tab pill + device screenshot stacked vertically
- Feature grid: 2-up at desktop, 1-up at mobile

### Whitespace Philosophy

The page reads like a magazine spread, with single-column hero, device tab selector, and full-bleed product screenshots. White runs edge-to-edge between sections. Cards lift via warm tonal layering (`#ffffff` → `#fafaf8` → `#f4f1ec`) rather than shadow stacks. The 1080px container is intentionally narrower than typical SaaS — it forces the page to feel magazine-tight rather than generous-and-airy.

### Section Cadence

A typical Bear page runs:

1. White hero (51px display headline with handwritten teal underline beneath emphasis word, 19px deck, device tab pill, device screenshot with App Store pill)
2. Feature spread 1 (Markdown editor demo — full-width screenshot, two-up cream feature cards beneath)
3. Feature spread 2 (sync / cross-device — three-up cream cards)
4. Testimonial section (white pull-quote cards, 26px / 500 quotes)
5. Pricing band (cream feature cards, "Pro" pricing tier highlighted)
6. Closing band (smaller H2, App Store pill, "Made by the Bear team")
7. Footer (column heads in 16px / 600, links in 13px / 500 muted)

The page does not light/dark alternate — it stays white + cream throughout. The "alternation" is white-canvas / cream-card surface contrast.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 4px | Inline tags, fine-grained badges |
| Small | 8px | Cards, text inputs, feature panels — the dominant rounding |
| Standard | 12px | App Store pill — Apple's affordance |
| Comfortable | 16px | Larger feature shells |
| Featured | 20px | Device screenshots — approximating Mac / iPhone / iPad device corners |
| Pill | 9999px | Device tab pill, soft-red badge |

Bear's radius hierarchy is **architectural** — buttons round at 12px (Apple's pill convention), cards round at 8px (smaller and more architectural than Granola's 16px or Airbnb's 14px), device screenshots at 20px (matching the actual Mac / iPhone / iPad rounded device corners). The 8px card radius is a deliberate choice to keep the page feeling crisp rather than soft.

The handwritten underline ornament has no defined radius — it's a hand-drawn SVG path rather than a shape primitive.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Canvas, hero, feature cards, nav (~85% of surfaces) |
| 1 — Ambient | `rgba(34,30,15,0.04) 0 1px 2px 0` | Top-nav at scroll, very subtle inputs |
| 2 — Card hover | `rgba(34,30,15,0.04) 0 4px 12px -2px` | Optional hover on testimonial cards (most stay flat) |
| 3 — Screenshot | `rgba(0,0,0,0.10) 0 16px 40px -8px` | Mac/iPhone/iPad screenshots — Apple's product-photography style |
| 4 — Elevated | `rgba(34,30,15,0.08) 0 12px 24px -8px, rgba(34,30,15,0.04) 0 4px 8px -2px` | Dropdowns, popovers |
| 5 — Modal | scrim `rgba(20,18,15,0.50)` + dialog with elevated shadow | Sign-in modal |

### Shadow Philosophy

Bear runs a **dual-shadow system**: chrome (UI elements) gets warm-tinted shadows (`rgba(34,30,15,…)`) that match the body grey, while product photography (device screenshots) gets neutral shadows (`rgba(0,0,0,…)`) matching Apple's product-photography conventions. This is the page's most precise design detail — it signals that the marketing chrome is *Bear's voice* (warm, editorial), while the product photography is *Apple's voice* (neutral, technical).

The marketing chrome itself — buttons, cards, nav — is essentially flat. Cards lift via warm tonal layering and 10% black hairlines. Device screenshots, however, get realistic Apple-style soft drop shadows. The dual-language is intentional.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover state colour swaps, hairline transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, device tab switch
- **Out-soft**: `cubic-bezier(0.0, 0, 0.2, 1)` — section reveals, handwritten underline draw

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 120ms | Hairline tone swaps, focus-ring fades |
| Standard | 220ms | Button hover, link colour shifts |
| Slow | 360ms | Modal entry, device screenshot cross-fade |
| Special | 600ms | Handwritten underline brush-stroke draw |

### Per-Component Recipes

- **App Store CTA hover**: background `#1a1a1f` → `#2a2a2f` over 220ms standard. **No transform, no scale.**
- **Device tab pill switch**: clicking a different device tab (Mac → iPhone) cross-fades the device screenshot over 360ms emphasized. The active pill colour transitions soft → saturated teal over 220ms.
- **Handwritten underline draw**: on first viewport entry, the tealish-blue brushstroke beneath emphasis words animates a 0% → 100% SVG path draw over 600ms ease-out-soft. One-shot per page-load.
- **Link hover (teal)**: colour darkens to `#34588f` over 120ms. Underline thickens 1 → 1.5px over 220ms.
- **Card hover**: no lift; the cream surface darkens fractionally over 220ms (`#f4f1ec` → `#ebe5dc` at 50% opacity overlay). Some cards stay completely flat.
- **Scroll reveal**: sections fade in over 360ms ease-out-soft when entering viewport. One-shot per section.

### Page Transitions

Page-to-page navigation uses a 360ms cross-fade. The fixed top-nav stays static. Smooth-scroll anchored links use 600ms emphasized easing.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. The handwritten underline draw becomes an instant render (the underline is fully drawn from the moment it enters viewport). All `translate` and `scale` transforms suppress. Device screenshot cross-fade becomes an instant swap. Scroll-reveal becomes static render-on-mount.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #444444 ink on #ffffff canvas | 9.7 | AAA |
| #222222 ink-strong on #ffffff | 15.9 | AAA |
| #ffffff on #1a1a1f CTA black | 14.7 | AAA |
| #dd4c4f red on #ffffff | 4.9 | AA body / AAA large |
| #456aa3 teal on #ffffff | 5.7 | AA body |
| #2c466f deep-teal on #cbdaee soft-teal | 9.4 | AAA |
| #444444 on #f4f1ec cream surface | 9.0 | AAA |

The body colour (`#444444`) is calibrated to land at AAA (9.7 ratio) on the white canvas — Bear's "soft" body grey is *just light enough* to read warm but *just dark enough* to pass AAA. The exact value is a design decision.

### Focus Indicators

Focus ring is `2px solid #456aa3` (the teal accent) with 2px outline-offset — matching the macOS focus convention. Focus stays on the teal accent rather than the red bear-mark — the brand reserves red for *identity* (the bear) and teal for *interaction* (links, focus, ornaments).

### ARIA Patterns

- **Top nav**: `<nav>` landmark with `aria-label="Primary"`. The bear-mark logo is an `<img alt="Bear">` linking to home.
- **Device tab pill** (Mac/iPhone/iPad): `role="tablist"` with three `role="tab"` buttons. The corresponding device screenshots are `role="tabpanel"` with `aria-labelledby` pointing at the tab.
- **App Store CTAs**: `<a>` with `aria-label="Download Bear on the Mac App Store"`. The image is decorative; the link carries the verbal label.
- **Handwritten underline**: purely decorative — `aria-hidden="true"` on the SVG ornament. The emphasis word retains its semantic weight via the underlying `<em>` or styling.
- **Modal** (sign-in): focus trap, Esc closes, click outside closes, focus returns to trigger.

### Keyboard Navigation

- Top nav: Tab moves logo → Features → Pricing → About → Sign in → Download
- Device tab pill: Tab focuses the tablist; arrow keys navigate Mac → iPhone → iPad
- Feature cards: Tab moves card → card; arrow keys do not navigate
- Modal: Tab cycles through interactive elements inside dialog only

### Screen Reader Hints

The handwritten underline ornament is purely visual — `aria-hidden="true"`. The emphasis word retains its own `<em>` semantics. Device screenshots carry verbose alt text describing the visible UI ("Bear's main editor with a Markdown note titled 'Reading list' visible, sidebar showing tags and notebooks").

### Reduced Motion

All transitions degrade to opacity-only. The handwritten underline draws instantly. Device tab cross-fade becomes instant swap. Scroll-reveal becomes static. Card hover loses colour shift; only the focus ring transitions.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Top nav collapses to logo + hamburger; hero h1 drops 51 → 36px; device tab pill stays inline (Mac/iPhone/iPad fits horizontally); device screenshots scale to viewport-width; feature cards 1-up |
| Tablet | 640–1024px | Top nav keeps inline links; hero h1 settles at 42px; device screenshots at 90% viewport-width; feature cards 2-up |
| Desktop | 1024–1280px | Full top nav; hero h1 at 51px; device screenshots at 1080px; feature cards 2-up generous |
| Wide | >1280px | Content width caps at 1080px; gutters absorb the rest; device screenshots cap at 1200px |

### Touch Targets

- App Store pill: 44px height — Apple's standard tap target
- Device tab pill: 36px height — passes WCAG AA when combined with 16px+ horizontal padding (effective 44px+ tap area)
- Inline link tap-target: 44px row height even at 17px / 1.60 body type
- Top-nav links: minimum 44×44px hit area

### Collapsing Strategy

- Top nav links collapse into a hamburger sheet below 640px
- Device tab pill (Mac/iPhone/iPad) stays inline at all breakpoints — the three-tab arrangement always fits horizontally
- Device screenshots scale by viewport — never crop, never deform; the 20px radius scales proportionally
- Feature grids: 3 → 2 → 1 columns

### Image Behavior

Device screenshots are rendered as PNG at 2x resolution with a 20px CSS border-radius and the macOS-style soft drop shadow. They scale via `width: 100%; height: auto;` with `object-fit: contain` to preserve aspect ratio.

### Container Queries

Used on the device tab pill — when the tablist narrows below 320px (rare, on very small phones), the labels truncate to icons.

## 11. Content & Voice

### Tone

Calm, plainspoken, Mac-pro literate. Bear's voice avoids both Silicon Valley enthusiasm and luxury-brand evasion. Headlines are full sentences ("Markdown notes you'll love") with the emphasis word ("love") underscored by the handwritten teal ornament. The voice trusts the reader to recognize Markdown, to recognize Mac App Store conventions, to recognize the Pro Display ornament style. There is no preamble, no "Welcome to Bear", no exclamation marks.

### Microcopy Patterns

- **Button verbs**: "Download", "Try Bear free", "Sign in", "Continue" — direct, outcome-named
- **Error message recipe**: `[What went wrong] + [What to try]` — e.g., "We couldn't sync that note. Try again, or check your iCloud connection."
- **Success confirmations**: short, factual — "Synced." or "Note saved."
- **Field labels**: minimal — "Email", "Password" — no friendly framing

### Empty States

The empty notes state inside marketing screenshots: "Start writing." — single declarative statement.

The unsupported-Markdown state (rare, in pricing): "Markdown rendering requires Bear Pro. Try free for 7 days." — names the cause and offers the remedy.

### CTA Verb Conventions

- Primary action: **"Download"** (App Store badges and pill), **"Try Bear free"** (free trial), **"Continue"** (multi-step)
- Secondary action: **"Sign in"** (account access), **"Watch the demo"** (rare)
- Tertiary text: **"See pricing"**, **"Read the docs"**, **"Learn more"**
- Avoided: "Submit", "Click here", "Buy now", "Get started" — Bear uses outcome verbs only

## 12. Dark Mode & Theming

**Light-only marketing surface.** The Bear app itself ships full system-controlled light/dark themes — the dark theme is iconic among Markdown writers (a near-black surface with the same red bear-mark and teal handwritten ornaments). The public marketing site is paper-white only. The brand position: the marketing site mirrors a Mac App Store landing, which renders in light mode by Apple's editorial choice.

If a future dark variant is shipped, the token swap would be: canvas `#1a1a1f` (matching the App Store CTA black), surface `#2a2a2f`, ink `#e8e8e8`, accent-red unchanged at `#dd4c4f` (passes AA on dark), accent-teal lightened to `#7a9bd5` (the original `#456aa3` falls below AA on dark surfaces).

## 13. Lineage & Influences

Bear's design is a love letter to Apple — the page reads like a macOS Big Sur / Ventura promo spread more than a third-party app landing. The visual lineage runs through three traditions: **Apple's Mac / iPad Pro pages** (paper-white canvas, App Store pill CTA, soft-grey body copy, Pro Display photography); **BBEdit / TextEdit's Mac-text-editor body copy convention** (soft `#444` warm grey body, signalling the Mac-text-editor lineage); and **iA Writer's Markdown-as-craft positioning** (in-house typography for editorial weight, restraint as positioning).

The handwritten teal underline ornament is borrowed directly from Apple's "creative pro" marketing visual language — Pro Display XDR, Logic Pro, Final Cut Pro all use hand-drawn ornaments beneath emphasis words in their hero headlines. Bear adopted this convention, making the page feel like part of Apple's pro-app ecosystem rather than a third-party tool.

The dual-family system (`bearsansheadline` + `bearsans` — two cuts of the same in-house family) is unusual. Most brands either use a single family (Things, Granola sans-only) or pair serif + sans (Notion, Granola serif/sans split). Bear's choice — two cuts of the same family — gives the page typographic continuity at radically different sizes, which is the same design principle behind Apple's SF Pro Display / SF Pro Text dual-cut system.

What Bear rejects: gradient washes, hero illustrations beyond the bear-mark and handwritten underlines, multi-colour brand systems beyond red + teal, exclamation marks, "Click here" CTAs. The brand is *Apple-pious magazine*: the page is a spread, the type is two cuts of one family, the colour is two restrained accents.

**Influences:**
- Apple (macOS / iPad Pro pages) — source of every visual move; App Store pill CTA, soft-grey body copy, Pro Display photography, [apple.com/macos](https://www.apple.com/macos/)
- BBEdit / TextEdit — soft `#444` body copy on white is the Mac-text-editor color signature; Bare Bones Software, [barebones.com/products/bbedit](https://www.barebones.com/products/bbedit/)
- iA Writer — Markdown-as-craft positioning; in-house typography for editorial weight, [ia.net/writer](https://ia.net/writer)
- Apple Pro Display XDR / Logic Pro / Final Cut Pro — handwritten underline ornaments beneath emphasis words is Apple's pro-marketing convention
- Cultured Code / Things — adjacent indie-Mac developer aesthetic; restraint as positioning, "we are part of the OS"

## 14. Do's and Don'ts

**Do**
- Keep body copy at `#444444`, not pure black — the warm-grey is the Mac-text-editor signature
- Set display in `bearsansheadline` at weight 400 (never bold) — the lighter weight at large size is the editorial calm
- Lift the App Store CTA pattern unchanged from Apple — `#1a1a1f` black pill at 12px radius
- Use the handwritten teal underline (`#456aa3`) as ornament for emphasis words; it's the page's only "human" mark
- Reserve the red accent (`#dd4c4f`) for the bear-mark logo and primary "Download" link only
- Use 8px radius for cards — keeps the page feeling architectural rather than soft
- Use 20px radius for device screenshots — matches the actual Mac / iPhone / iPad device corners
- Apply Apple-style soft drop shadows (`rgba(0,0,0,0.10) 0 16px 40px -8px`) to device screenshots
- Set body at 17px / 1.60 line-height — the macOS body convention
- Keep the container at 1080px max — narrower than typical SaaS, magazine-tight
- Use cream feature cards (`#f4f1ec`) for warm tonal layering against white canvas

**Don't**
- Don't add saturated marketing accents — red and teal are the entire palette, both used sparingly
- Don't raise the H1 above weight 400 — the soft display weight is what differentiates Bear from generic SaaS landings
- Don't apply gradient washes — the paper-white canvas is non-negotiable, even for screenshot backdrops
- Don't use solid grey for body text — `#444444` warm-grey is the brand signature
- Don't load a custom display face other than `bearsansheadline` — Helvetica Neue is the closest fallback
- Don't apply chrome shadows to device screenshots — they need Apple's neutral product-photography shadow, not the warm-tinted UI shadow
- Don't use the red accent as a button fill — red is for the bear-mark and "Download" link only
- Don't extend the handwritten underline ornament beyond one or two emphasis words per page — it's a sparingly-used mark
- Don't widen the container beyond 1080px — the magazine-tight measure is the brand
- Don't use exclamation marks in microcopy — Bear's voice is calm, plainspoken
- Don't introduce a third brand colour — red and teal are the entire chromatic system

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #ffffff
Surface-soft:  #fafaf8
Surface-cream: #f4f1ec
Ink:           #444444  (the Mac-text-editor warm-grey)
Ink-strong:    #222222
Accent-red:    #dd4c4f  (bear-mark logo + Download link)
Accent-teal:   #456aa3  (handwritten underlines + links)
Teal-soft:     #cbdaee  (device tab pill inactive)
CTA-black:     #1a1a1f  (App Store pill — Apple's exact black)
Hairline:      rgba(0,0,0,0.10)
Muted:         #7a7a7a
```

### Example Component Prompts

- "Create a Bear-style hero: paper-white canvas (#ffffff), 51px / 400 bearsansheadline H1 'Markdown notes you'll love' in #222222 with -0.005em tracking and 1.20 line-height. Beneath the word 'love': a hand-drawn tealish-blue (#456aa3) brushstroke SVG underline that has a slight wobble (not a straight line) — animates from 0% to 100% draw over 600ms ease-out-soft on first viewport entry. Below the H1: 19px / 400 bearsans deck in #444444 at 1.60 line-height. Below: a soft-teal (#cbdaee) device tab pill with three options (Mac, iPhone, iPad) at 9999px radius, then a Mac screenshot at 20px radius with rgba(0,0,0,0.10) 0 16px 40px -8px drop shadow. Below: a #1a1a1f black App Store pill (12px radius, 'Download on the Mac App Store')."
- "Design a Bear feature card: cream fill (#f4f1ec), 8px radius (architectural, not soft), 1px hairline border at rgba(0,0,0,0.1), 32px padding, no shadow. Inside: a 26px / 500 bearsans title in #222222, then 17px / 400 bearsans body at 1.60 line-height in #444444. The card lifts via warm tonal layering against the white canvas, not via shadow."
- "Build a Bear handwritten underline ornament: tealish-blue (#456aa3) SVG brushstroke beneath an emphasis word in display copy. The path is hand-drawn (slight wobble, not straight), about 1.5x the height of the descender. Stroke width ~3px. On first viewport entry, animate the SVG path's stroke-dasharray from 0% to 100% over 600ms ease-out-soft for the brushstroke reveal effect."
- "Create the Bear nav: 64px tall white surface, 1px bottom hairline at rgba(0,0,0,0.1). Wordmark left: a red (#dd4c4f) polar-bear silhouette icon + 'Bear' wordmark in 18px / 600 bearsans ink. Three centred links (Features, Pricing, About) in 15px / 500 #444444. Right side: 'Sign in' text link in #444444, then a #1a1a1f black App Store pill (12px radius, 'Download for Mac')."
- "Design a Bear device tab pill: soft teal (#cbdaee) inactive state with deep-teal (#2c466f) text at 13px / 500, 9999px radius, 8×18px padding, 36px height. Active state: saturated teal fill (#456aa3) with white text. Three pills inline: Mac / iPhone / iPad. Clicking a pill cross-fades the device screenshot above it over 360ms emphasized."
- "Build a Bear testimonial: white card, 8px radius, 1px hairline at rgba(0,0,0,0.1), 32×28px padding, no shadow. Inside: 26px / 500 bearsans pull-quote in #222222 with 1.40 line-height. Beneath: a 40px circular avatar flush left, with name in 16px / 600 bearsans ink and role in 13px / 500 muted (#7a7a7a) stacked beside it. Optionally: a small (24px) red bear-mark SVG flush left of the quote as ornament."

### Iteration Guide

1. **Body copy at `#444`, never `#000`.** The warm-grey is the Mac-text-editor signature — pure black collapses the BBEdit / TextEdit lineage signal.
2. **Display weight 400, never bold.** The lighter weight at 51px size is the editorial calm. Substituting weight 600 or 700 tips the page into generic SaaS.
3. **Two accents, restrained roles.** Red is the bear-mark identity, teal is the interaction layer. Don't swap their roles, don't introduce a third.
4. **Handwritten underline beneath emphasis words.** The SVG ornament is the page's only "human" mark. Use sparingly — one or two emphasis words per page maximum.
5. **App Store pill at exactly Apple's black.** `#1a1a1f` is Apple's exact value — substituting `#000` or `#0a0a0a` reads as "not Apple-pious enough".
6. **8px card radius, 12px button radius.** Cards stay architectural; buttons match Apple's pill convention. Don't soften cards to 12px or 16px.
7. **17px body, 1.60 line-height.** macOS body convention, not the web 16px / 1.5 SaaS standard.
8. **Device screenshots get neutral shadow, chrome gets warm shadow.** The dual-shadow language is the page's most precise design detail.
