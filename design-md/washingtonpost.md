---
name: The Washington Post
tagline: Postoni serif blackletter masthead, "Democracy Dies in Darkness" tagline, sober ink-on-paper political broadsheet.
updated_at: 2026-05-03T21:06:23+12:00
published_at: 2026-05-03T21:06:23+12:00
author: webdesignhot
source_url: https://www.washingtonpost.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media]
tags: [editorial, serif, dense, political, structured, news, light]
preview_swatch: ['#ffffff', '#000000', '#cf202f']
related: [substack, ghost, medium]
description: 'The Washington Post runs a Federalist-broadsheet system: paper-white canvas (`#ffffff`) with absolute black ink (`#000000`), the Postoni serif (a custom Bodoni cut) for the masthead and headlines, Franklin ITC for body, and a singular accented red (`#cf202f`) for breaking alerts and democracy-dies-in-darkness urgency moments. The blackletter "The Washington Post" wordmark sits over a tiny "Democracy Dies in Darkness" tagline — the most-recognizable accountability statement in American media. Surfaces are heavily ruled (1px and 2px black hairlines), corners stay square (0–4px), and color is reserved for signal. The result is the Capitol-broadsheet vibe — sober, ruled, ink-heavy, politically anchored.'

colors:
  bg: '#ffffff'                  # paper-white canvas
  bg-section: '#f5f5f5'           # warm-gray editorial sub-band (Style, Sunday)
  bg-dark: '#000000'              # dark-mode body — pure black, true to broadsheet ink
  surface: '#ffffff'             # cards inherit canvas
  surface-soft: '#f8f8f8'         # quote pull-out, inline meta tile
  surface-strong: '#eeeeee'        # disabled fields, breadcrumb back tile
  surface-quote: '#f5f0e6'         # paper-cream pull-quote backdrop on Style features
  text: '#000000'                # absolute black ink — WaPo holds darker than NYT (#121212) by intent
  text-strong: '#000000'
  text-muted: '#444444'           # bylines, dateline, photo captions
  text-soft: '#666666'           # section meta, "Continue reading"
  text-faint: '#999999'           # disabled link
  brand: '#000000'               # WaPo wordmark and brand color is ink black
  brand-tagline: '#000000'        # "Democracy Dies in Darkness" runs in ink
  brand-red: '#cf202f'            # WaPo signature red — alerts, live, election
  brand-red-hover: '#a8001a'      # pressed/hovered red
  brand-red-soft: '#ffe5e7'       # alert-bar tint surface
  link: '#2a64a6'                 # WaPo editorial link blue (slightly more saturated than NYT's)
  link-hover: '#173e6e'           # darker on hover
  link-visited: '#5a5a5a'         # visited dims to muted ink
  on-brand-red: '#ffffff'
  on-ink: '#ffffff'
  border: '#cccccc'              # default 1px hairline (slightly stronger than NYT's #dfdfdf — gives that broadsheet weight)
  border-soft: '#e0e0e0'          # editorial body separator
  border-strong: '#888888'        # form input border
  border-rule: '#000000'          # section rule (1.5px black, masthead-style)
  border-rule-heavy: '#000000'    # 2px masthead rule under "The Washington Post"
  shadow-card: 'rgba(0,0,0,0.04)'
  shadow-elev: 'rgba(0,0,0,0.08)'
  shadow-modal: 'rgba(0,0,0,0.18)'
  scrim: 'rgba(0,0,0,0.55)'
  success: '#177a3a'
  success-soft: '#e3f2e7'
  warning: '#a06200'
  warning-soft: '#faf0db'
  danger: '#cf202f'
  danger-soft: '#ffe5e7'
  info: '#2a64a6'
  info-soft: '#e3edf7'
  live-red: '#cf202f'
  live-pulse: '#ff3344'
  democracy-tagline-bg: '#000000'  # the iconic black band sometimes hosts the tagline reversed-out

typography:
  display:
    family: '"Postoni", "PostoniWide", "Bodoni", "Didot", Georgia, "Times New Roman", serif'
    weights: [200, 300, 400, 700, 900]
    opentype-features: ['liga', 'kern']
  body:
    family: '"Franklin ITC", "Franklin Gothic", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [300, 400, 500, 700, 900]
  body-serif:
    family: '"Postoni", Georgia, "Times New Roman", serif'
    weights: [400, 700]
  mono:
    family: 'Menlo, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    masthead-wordmark:   { size: 72, weight: 900, lineHeight: 1.0,  tracking: '0.01em',  family: display, opentype: ['liga'] }
    democracy-tagline:   { size: 11, weight: 400, lineHeight: 1.0,  tracking: '0.18em',  family: body, transform: uppercase, style: italic }
    headline-mega:       { size: 60, weight: 900, lineHeight: 1.05, tracking: '-0.02em', family: display }
    headline-jumbo:      { size: 48, weight: 700, lineHeight: 1.07, tracking: '-0.015em', family: display }
    headline-xl:         { size: 36, weight: 700, lineHeight: 1.1,  tracking: '-0.01em',  family: display }
    headline-lg:         { size: 28, weight: 700, lineHeight: 1.13, tracking: '-0.005em', family: display }
    headline-md:         { size: 22, weight: 700, lineHeight: 1.18, tracking: '0',         family: display }
    headline-sm:         { size: 18, weight: 700, lineHeight: 1.22, tracking: '0',         family: display }
    deck-italic:         { size: 18, weight: 300, lineHeight: 1.4,  tracking: '0',         family: display, style: italic }
    body-md:             { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    body-sm:             { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    pull-quote:          { size: 28, weight: 400, lineHeight: 1.3,  tracking: '0',         family: display, style: italic }
    byline:              { size: 12, weight: 700, lineHeight: 1.3,  tracking: '0.06em',    family: body, transform: uppercase }
    dateline:            { size: 12, weight: 400, lineHeight: 1.3,  tracking: '0',         family: body }
    section-label:       { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.12em',    family: body, transform: uppercase }
    caption:             { size: 14, weight: 400, lineHeight: 1.4,  tracking: '0',         family: body }
    photo-credit:        { size: 10, weight: 400, lineHeight: 1.3,  tracking: '0.06em',    family: body, transform: uppercase }
    micro-meta:          { size: 11, weight: 500, lineHeight: 1.2,  tracking: '0.06em',    family: body, transform: uppercase }
    button-label:        { size: 13, weight: 700, lineHeight: 1.0,  tracking: '0.08em',    family: body, transform: uppercase }
    nav-link:            { size: 12, weight: 700, lineHeight: 1.0,  tracking: '0.08em',    family: body, transform: uppercase }
    live-badge:          { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.1em',     family: body, transform: uppercase }

radius:
  micro: 0
  sm: 2
  md: 4
  pill: 9999
  none: 0

spacing:
  base: 4
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120]

layout:
  page-width: 1200
  prose-width: 620
  feature-width: 1024
  header-height: 60
  masthead-rule-weight: 2
  section-rule-weight: 1.5
  hairline-weight: 1

components:
  button-primary:
    bg: '#000000'
    color: '#ffffff'
    radius: 0
    padding: '12px 22px'
    height: 44
    font: button-label
    use: 'Subscribe, Sign In, Continue — primary CTA. Black ink, square corners.'
  button-primary-hover:
    bg: '#333333'
    color: '#ffffff'
    use: 'Pointer-down state on Subscribe / primary CTAs.'
  button-secondary:
    bg: '#ffffff'
    color: '#000000'
    border: '1px solid #000000'
    radius: 0
    padding: '12px 22px'
    height: 44
    use: 'Already a subscriber, Cancel, ghost CTAs over white.'
  button-text-link:
    bg: 'transparent'
    color: '#2a64a6'
    use: 'Inline editorial links — underlined on hover.'
  live-badge:
    bg: '#cf202f'
    color: '#ffffff'
    radius: 0
    padding: '3px 7px'
    font: live-badge
    use: 'Red LIVE chip. Square corners — broadsheet rejects pills.'
  alert-banner:
    bg: '#cf202f'
    color: '#ffffff'
    padding: '12px 16px'
    use: 'Top-of-page breaking-news alert.'
  card-headline:
    bg: '#ffffff'
    color: '#000000'
    radius: 0
    border: 'top 1px solid #cccccc'
    use: 'Default river card — image above, headline, deck, byline. Hairline-separated.'
  card-promo-style:
    bg: '#f5f0e6'
    color: '#000000'
    radius: 0
    use: 'Style/Sunday paper-cream promo card.'
  card-opinion:
    bg: '#f5f5f5'
    color: '#000000'
    radius: 0
    border: 'top 2px solid #000000'
    use: 'Opinion section — gray ground, heavy ink top rule (2px).'
  pull-quote:
    bg: 'transparent'
    color: '#000000'
    border: 'top 1px solid #000000; bottom 1px solid #000000'
    padding: '24px 0'
    use: 'Postoni italic 28px between two ink rules.'
  text-input:
    bg: '#ffffff'
    color: '#000000'
    radius: 4
    height: 44
    padding: '12px 14px'
    border: '1px solid #888888'
    focus: 'border thickens to 2px ink, no glow ring'
    use: 'Email entry on subscribe wall, search input.'
  paywall-cta:
    bg: '#ffffff'
    color: '#000000'
    border: '2px solid #000000'
    padding: '32px 24px'
    use: 'Sub-fold paywall with primary Subscribe (ink) + secondary Sign In (outline).'
  nav-section-link:
    color: '#000000'
    font: nav-link
    padding: '14px 12px'
    use: 'Section nav (Politics, Opinions, World, Business, Style). Hover underlines.'
  search-icon:
    bg: 'transparent'
    color: '#000000'
    use: '32×32 ink magnifying-glass.'
  democracy-tagline-strip:
    bg: '#000000'
    color: '#ffffff'
    padding: '6px 16px'
    use: 'Optional black band beneath masthead carrying "Democracy Dies in Darkness" reversed-out.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out-soft: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 320
  live-dot-pulse: '1.6s ease-in-out infinite — opacity 1 → 0.4 → 1, scale 1 → 1.15 → 1'
  card-hover: 'image scales 1.0 → 1.02 inside square clip; headline gains 1px ink underline; 200ms standard'
  alert-banner-enter: 'translateY(-8px → 0) + opacity(0 → 1) over 240ms emphasized'
  reduced-motion: 'respects prefers-reduced-motion: reduce — pulsing live dot becomes static, all transforms disabled, fade-only.'

breakpoints:
  mobile: 600
  tablet: 768
  desktop: 1024
  wide: 1440

shadows:
  ambient: '0 1px 0 0 #cccccc'
  standard: 'rgba(0,0,0,0.04) 0 2px 4px'
  elevated: 'rgba(0,0,0,0.08) 0 6px 16px'
  deep: 'rgba(0,0,0,0.18) 0 12px 32px'
  ring: '0 0 0 2px #2a64a6'

accessibility:
  contrast-text-on-bg: 21.0              # #000000 on #ffffff — perfect AAA
  contrast-text-on-brand-red: 5.0         # #ffffff on #cf202f — AA at body, AAA at large
  contrast-muted-on-bg: 9.7              # #444444 on #ffffff — AAA
  contrast-link-on-bg: 7.4                # #2a64a6 on #ffffff — AAA
  focus-ring: '2px solid #2a64a6 + 2px outline-offset (link blue, never red)'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab moves logo → section nav → utility (Subscribe, Sign In, Search). Skip-link first.'

dark-mode: optional
colors-dark:
  bg: '#000000'
  bg-section: '#0d0d0d'
  surface: '#0d0d0d'
  surface-soft: '#1a1a1a'
  surface-quote: '#14110a'
  text: '#ffffff'
  text-strong: '#ffffff'
  text-muted: '#bdbdbd'
  text-soft: '#9a9a9a'
  brand: '#ffffff'
  brand-red: '#ff3344'
  link: '#9bbedf'
  link-hover: '#cce0f0'
  border: '#262626'
  border-soft: '#1f1f1f'
  border-rule: '#ffffff'
---

## 1. Visual Theme & Atmosphere

The Washington Post's visual system is the **Federalist broadsheet of American journalism rendered for the screen**. The masthead — "The Washington Post" set in the heavy 900-weight Postoni (a custom Bodoni-derived display face) — sits over a tiny italic "Democracy Dies in Darkness" tagline rendered in tracked uppercase Franklin ITC. That two-line composition is the most recognized accountability statement in American media, and the digital site preserves its print proportions almost exactly.

The canvas is paper-white (`#ffffff`) with **absolute black ink** (`#000000`) — the Post commits darker than the New York Times' softened `#121212`, which gives the page a more aggressive, more print-broadsheet weight. The body face is **Franklin ITC** — a Franklin Gothic descendant, sans-serif unlike most of the Post's broadsheet peers — and its choice gives the site a slightly more modern, slightly more "DC bureau wire-copy" feel than the all-serif New York Times. Headlines stay in Postoni; body runs Franklin sans; the Style and Sunday Magazine sections break this rule and run Postoni body for editorial features.

The signal color is the Washington Post red, `#cf202f` — slightly cooler and slightly more saturated than the NYT's `#d0021b` — used for the LIVE chip, election alerts, the breaking-news ribbon, and the Op-Doc band on Opinion. Like the Times, the Post uses the red sparingly enough that it functions as alarm, not decoration.

Hairlines are heavier on the Post than on the Times: the default rule weight is 1px on `#cccccc` (vs NYT's `#dfdfdf`), and section breaks step up to 1.5px or 2px black ink rules — the masthead rule under "The Washington Post" is a full 2px black, the printed paper's column-rule weight. Cards stay square (0px radius), shadows are absent on editorial surfaces, and the typographic hierarchy descends from Postoni 900 (masthead) through Postoni 700 (headlines) to Franklin 400 (body) to Franklin 700 uppercase (meta) — a strict three-tone discipline.

**Key Characteristics:**
- Paper-white canvas (`#ffffff`) with **absolute black** ink (`#000000`) — heavier than NYT's softened ink
- Custom Postoni Bodoni for headlines + Franklin ITC sans for body — broadsheet display, modern body
- "Democracy Dies in Darkness" tagline in italic tracked uppercase Franklin under the masthead
- Single signal color: WaPo red (`#cf202f`) for LIVE, alerts, election coverage
- Heavy 2px ink masthead rule beneath the wordmark — print column-rule weight ported to screen
- 1.5px ink section rules separating major page bands
- 1px `#cccccc` hairlines between river stories — heavier than NYT's hairlines
- 0px radius on cards, photos, alert bars — broadsheet rejects rounding
- Italic Postoni 28px pull-quote between two ink rules (a Bodoni-italic flavor distinct from NYT's Cheltenham)
- 620px reading column for body running-text
- Editorial link blue (`#2a64a6`) — slightly more saturated than NYT's `#326891`

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): paper field across every page, every section.
- **Ink** (`#000000`): the absolute-black dominant text and rule color. Distinct from the New York Times' softened `#121212` — the Post commits to true black. Headlines, body, masthead, rules — all #000.
- **WaPo Red** (`#cf202f`): the signal color. LIVE chip, alert bars, election overlay, Op-Doc.

### Brand & Sub-Brand
- **Wordmark Ink** (`#000000`): "The Washington Post" is rendered in absolute black, never red.
- **Tagline Ink** (`#000000` italic): "Democracy Dies in Darkness" runs in italic Franklin tracked at 0.18em — sometimes reversed-out white over a black band.
- **Red Hover** (`#a8001a`): pressed/hovered state on red CTAs.
- **Red Soft** (`#ffe5e7`): tint surface on alert backgrounds.

### Accent
- **Editorial Link Blue** (`#2a64a6`): inline editorial body link. AAA on white. Slightly more saturated than the NYT blue.
- **Link Hover** (`#173e6e`): darker, on hover.
- **Link Visited** (`#5a5a5a`): visited dims to muted ink.

### Interactive
- **Default Link** (`#2a64a6` text + underline-on-hover)
- **Active CTA** (`#000000` ink fill on Subscribe / Sign In)
- **Disabled** (`#999999` text on `#eeeeee` surface)
- **Selected** (chip with ink fill, white text on saved-article)

### Neutral Scale
- **Ink** (`#000000`) — headlines, body, primary text
- **Muted** (`#444444`) — bylines, datelines, captions
- **Soft** (`#666666`) — section meta, "Continue reading", footer secondary
- **Faint** (`#999999`) — disabled link
- **Hairline** (`#cccccc`) — universal rule color

### Surface & Borders
- **Canvas** (`#ffffff`)
- **Surface Soft** (`#f8f8f8`) — quote pull-out, sidebar block
- **Surface Strong** (`#eeeeee`) — disabled fill, breadcrumb back tile
- **Surface Quote** (`#f5f0e6`) — paper-cream Style pull-quote backdrop
- **Section Sub-Band** (`#f5f5f5`) — Opinion / Sunday cool-gray ground
- **Hairline** (`#cccccc`) — default 1px rule
- **Hairline Soft** (`#e0e0e0`) — lighter rule
- **Border Strong** (`#888888`) — form input border
- **Border Rule** (`#000000`) — section rules at 1.5px and masthead at 2px

### Shadow Colors
The Post barely uses shadows on editorial. Chrome (dropdowns, modals) uses neutral-gray:
- `rgba(0,0,0,0.04) 0 2px 4px` — dropdown ambient
- `rgba(0,0,0,0.08) 0 6px 16px` — overlay
- `rgba(0,0,0,0.18) 0 12px 32px` — modal lift

### Semantic
- **Success** (`#177a3a` on `#e3f2e7`)
- **Warning** (`#a06200` on `#faf0db`) — paywall meter warning
- **Danger** (`#cf202f` on `#ffe5e7`) — form errors echo brand red
- **Info** (`#2a64a6` on `#e3edf7`)

## 3. Typography Rules

### Font Family

**Display**: `Postoni` — the Washington Post's custom Bodoni-derived display face. Originally commissioned in 2000 from Berlow / The Font Bureau as "Postoni" (a portmanteau of Post + Bodoni), available in extra-light through black weights (200, 300, 400, 700, 900). Postoni Wide is the variant used on the masthead. Fallback: `Bodoni, Didot, Georgia, "Times New Roman", serif`.

**Body**: `Franklin ITC` — a Franklin Gothic descendant licensed from ITC. The Post uses Franklin sans for body running-text (a deliberate departure from the all-serif NYT model). Available in 300, 400, 500, 700, 900. Fallback: `"Franklin Gothic", "Helvetica Neue", Helvetica, Arial, sans-serif`.

**Body Serif (Style / Magazine)**: Postoni at 400/700 also serves as body for the Style section's long-form features.

**Mono**: System mono — `Menlo, Consolas, "Courier New", monospace`. Used only on data tables and code-adjacent moments.

**OpenType features**: Postoni uses standard ligatures and tightly tuned kerning at display sizes. Franklin uses no special features in body but enables `tnum` on data tables and price displays.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| masthead-wordmark | Postoni Wide | 72 | 900 | 1.0 | 0.01em | liga, kern | "The Washington Post" — heavy display |
| democracy-tagline | Franklin (italic) | 11 | 400 | 1.0 | 0.18em | uppercase | "Democracy Dies in Darkness" sublabel |
| headline-mega | Postoni | 60 | 900 | 1.05 | -0.02em | — | Election night, war declaration |
| headline-jumbo | Postoni | 48 | 700 | 1.07 | -0.015em | — | Top-of-fold lead |
| headline-xl | Postoni | 36 | 700 | 1.1 | -0.01em | — | Above-fold secondary |
| headline-lg | Postoni | 28 | 700 | 1.13 | -0.005em | — | River lead |
| headline-md | Postoni | 22 | 700 | 1.18 | 0 | — | River sub |
| headline-sm | Postoni | 18 | 700 | 1.22 | 0 | — | Compact module |
| deck-italic | Postoni (italic) | 18 | 300 | 1.4 | 0 | — | Sub-headline / standfirst |
| body-md | Franklin | 18 | 400 | 1.55 | 0 | — | Default running text — sans, not serif (key WaPo distinction) |
| body-sm | Franklin | 16 | 400 | 1.5 | 0 | — | Compact card body |
| pull-quote | Postoni (italic) | 28 | 400 | 1.3 | 0 | — | Italic Bodoni between rules |
| byline | Franklin | 12 | 700 | 1.3 | 0.06em | uppercase | "By Maggie Haberman" |
| dateline | Franklin | 12 | 400 | 1.3 | 0 | — | "Nov. 5, 2024 at 11:42 a.m. EST" |
| section-label | Franklin | 11 | 700 | 1.0 | 0.12em | uppercase | "POLITICS" / "WORLD" |
| caption | Franklin | 14 | 400 | 1.4 | 0 | — | Photo / video caption |
| photo-credit | Franklin | 10 | 400 | 1.3 | 0.06em | uppercase | "Toni L. Sandys/The Washington Post" |
| micro-meta | Franklin | 11 | 500 | 1.2 | 0.06em | uppercase | "5 min" / "Read aloud" |
| button-label | Franklin | 13 | 700 | 1.0 | 0.08em | uppercase | "SUBSCRIBE" / "SIGN IN" |
| nav-link | Franklin | 12 | 700 | 1.0 | 0.08em | uppercase | "Politics" / "Opinions" / "World" |
| live-badge | Franklin | 11 | 700 | 1.0 | 0.1em | uppercase | "LIVE" |

### Principles

- **Postoni 700/900 for headlines, Franklin sans for body** — the deliberate WaPo split. This is the single biggest typographic distinction between the Post and the New York Times: Times runs serif body, Post runs sans body. The Post's choice telegraphs *modern news bureau* over *literary newspaper*.
- **Postoni Wide is the masthead-only cut.** All other headlines use the standard Postoni proportions; the wide cut sits exclusively on "The Washington Post".
- **Franklin tracked uppercase is the meta voice.** Bylines, section labels, photo credits, button labels — all Franklin uppercase tracked at 0.06em → 0.18em (the tagline is the most-tracked instance at 0.18em).
- **Tracking on Franklin meta runs higher than NYT's.** The Post's section labels track at 0.12em (NYT runs 0.08em); the Democracy tagline at 0.18em. This wider tracking on the meta is part of the print-broadsheet column-label tradition.
- **Negative tracking on display Postoni; zero on body Franklin.** Display Postoni at 36px+ uses -0.01em → -0.02em; body Franklin sits at 0.
- **Italic Postoni pull-quote.** The 28px italic Postoni between two heavy ink rules is the Post's pull-out — distinct in flavor from the NYT's Cheltenham italic because Postoni's italic is more contrasted and Bodoni-elegant.
- **620px reading column.** Slightly wider than NYT's 600px because Franklin sans needs marginally more line-length than Imperial serif to read well.
- **Inter / Crimson Pro are the closest open-source fallbacks.** Postoni → Crimson Pro at 700 (Bodoni-flavored serif); Franklin → Inter at 400 (geometric sans approximation).

## 4. Component Stylings

### Buttons

**`button-primary`** — Absolute black fill (`#000000`), white text, 0px radius, 12×22px padding, 44px height, 13px / 700 Franklin uppercase tracked at 0.08em. The Subscribe CTA is the canonical instance. Press state lightens to `#333333`.

**`button-secondary`** — White fill, ink text, 1px ink border, 0px radius. "Already a subscriber? Sign in".

**`button-text-link`** — Plain blue text (`#2a64a6`), no surface, no border. Underlined on hover.

### Live & Alert

**`live-badge`** — Red fill (`#cf202f`), white text, 0px radius (square — the broadsheet rejection of pills), 3×7px padding, 11px / 700 Franklin uppercase tracked 0.1em. White pulsing dot to its left.

**`alert-banner`** — Full-bleed red bar (`#cf202f`) at top of page, 12px vertical padding, white Franklin 14/700 text + a "Live updates →" link.

### Cards

**`card-headline`** — White surface, 0px radius, top 1px hairline (`#cccccc`), no shadow. Image above (16:9), Postoni 22/700 headline, Postoni 18/300 italic deck, Franklin 12/700 uppercase byline.

**`card-promo-style`** — Paper-cream (`#f5f0e6`) ground for Style and Sunday Magazine promos, italic Postoni body for editorial features.

**`card-opinion`** — Cool-gray (`#f5f5f5`) ground with a heavy 2px ink top rule. Italic Postoni deck under columnist name.

**`card-newsletter-promo`** — White surface, 1px ink border, 0px radius, inline subscribe-form box with email input + ink Subscribe button.

### Pull-Quote

**`pull-quote`** — Italic Postoni 28px / 1.3 line-height, no background, between two 1px ink rules at 24px vertical padding. The Bodoni italic gives the quote a more contrasted, more chiseled feel than NYT's Cheltenham italic.

### Inputs / Forms

**`text-input`** — White fill, 1px `#888888` border, 4px radius (one of the few non-zero radii on the system, granted to forms only for ergonomics), 44px height, 12×14px padding. On focus, border thickens to 2px ink.

**`paywall-cta`** — White surface, **2px ink border** (heavier than the NYT's 1px), 0px radius, 32×24px padding. Top: Postoni 22/700 headline. Middle: Franklin 13/400 micro-meta. Bottom: ink Subscribe button + outline Sign In button.

### Navigation

**`top-nav`** — White surface, 60px height, 1px bottom hairline + 2px ink masthead rule beneath. Layout: hamburger left, "The Washington Post" wordmark center (Postoni Wide 900), Subscribe + Sign In + Search right.

**`section-nav`** — Horizontal Franklin 12/700 uppercase links separated by ample whitespace. Hover: 2px ink underline grows from below.

**`subnav-rule`** — A heavy 1.5px ink rule under the section nav.

### Decorative

**`section-rule`** — 1.5px ink rule, full-width.

**`masthead-rule`** — 2px ink rule directly beneath the wordmark — the heaviest rule in the system. Print-paper masthead-rule weight.

**`hairline-rule`** — 1px `#cccccc` between river stories.

**`drop-cap`** — On long-form: first letter of lead paragraph in Postoni 56/700 with a 3-line drop.

**`democracy-tagline-strip`** — Optional black band beneath the masthead carrying "Democracy Dies in Darkness" reversed-out white in italic Franklin tracked 0.18em.

## 5. Layout Principles

### Spacing System

- Base unit: **4px** with a 2px micro-step
- Scale: `2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 120`
- Section padding: 64px between page bands; 120px on hero/cover-class breaks
- Card internal: 16px between image and headline; 8px between headline and deck

### Grid & Container

- Max content width: **1200px** centered on 12-column grid
- Reading column: **620px** — slightly wider than NYT's 600px because Franklin sans wants more line-length
- Feature container: **1024px** for above-fold image+headline pairs
- Footer: 4-column link list at desktop

### Whitespace Philosophy

The Post runs **dense at the river, generous at the article** — the same broadsheet pattern as the NYT, but with marginally tighter river density (cards stack 1px hairline-separated with 16px gutters at desktop vs the NYT's 24px). Inside an article, the 620px reading column with 16px line-height gives the most relaxed reading experience on a major political news site.

### Section Cadence

- News (Politics, World, Business, Tech): pure white, hairline-separated
- Opinions: cool-gray (`#f5f5f5`) with 2px ink top rules
- Style / Sunday Magazine: paper-cream (`#f5f0e6`) backdrop with italic Postoni body and drop-caps
- Sports / Climate: standard news treatment with section-color accent on hover (rare)
- Election night / breaking: full-bleed red alert banner above the masthead

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0px | Cards, photos, alerts, sections, the entire editorial surface |
| Micro | 2px | Form-error meta tags |
| Standard | 4px | Text inputs (only — buttons stay square) |
| Pill | 9999px | Save-article chip, audio play button — only when the icon is round |

The Post is even more aggressive than the NYT in rejecting rounded corners: **buttons are square** (0px radius). The only rounded surface on the editorial body is the text input — granted 4px for ergonomics — and the audio play button, which is round only because the icon is round. This square-corner discipline is one of the Post's strongest brand signals.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow, no rule | Article body, hero, section bands |
| 1 — Hairline | 1px `#cccccc` rule | River cards, table rows, sidebar items |
| 2 — Section Rule | 1.5px `#000000` rule | Section break, opinion-card top rule |
| 3 — Masthead Rule | 2px `#000000` rule | Beneath "The Washington Post" wordmark |
| 4 — Dropdown | `rgba(0,0,0,0.04) 0 2px 4px` | Account menu, search results |
| 5 — Overlay | `rgba(0,0,0,0.08) 0 6px 16px` | Search overlay, share modal |
| 6 — Modal | `rgba(0,0,0,0.18) 0 12px 32px` | Paywall modal |

### Shadow Philosophy

The Post takes ruled-not-cast even further than the NYT: there's an explicit 2px masthead-rule tier above and beyond the 1.5px section rule. Editorial cards never carry shadows — the 1px hairline does the work. The single shadow tier in chrome is borderline (modals carry the heaviest). The system trusts ruled hierarchy and ink density to produce depth. **Square corners + heavy rules + zero card shadows = print-broadsheet** is the design equation.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, alert-banner enter
- **Out-soft**: `cubic-bezier(0.0, 0, 0.2, 1)` — image carousel slide

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 100ms | Color swaps, hairline thickening |
| Standard | 200ms | Card hover, link underline grow |
| Slow | 320ms | Modal enter, alert-banner slide |
| Pulse | 1.6s | Live-dot continuous pulse |

### Per-Component Recipes

- **Card hover**: image scales 1.0 → 1.02 inside square clip; headline gains 1px ink underline (grows from 0 to full width over 200ms).
- **Live-dot pulse**: opacity 1 → 0.4 → 1 with scale 1 → 1.15 → 1, 1.6s ease-in-out infinite.
- **Alert-banner enter**: translateY(-8px → 0) + opacity(0 → 1) over 240ms emphasized.
- **Section-nav link hover**: 2px ink underline grows from below over 200ms.
- **Paywall modal enter**: scrim fades 0 → 0.55 alpha over 200ms; modal translates 16px to 0 + opacity 0 → 1 over 320ms emphasized.
- **Search overlay**: full-page white sheet slides from top, 320ms emphasized.

### Page Transitions

Page-to-page (river → article) uses a 200ms cross-fade. Light/dark switches are instant per WCAG (no transition on color-scheme change).

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Live-dot becomes a static red square. Card hovers degrade to underline-only. Alert-banner enters become instant.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #000000 ink on #ffffff canvas | 21.0 | AAA |
| #ffffff on #cf202f WaPo red | 5.0 | AA body / AAA large |
| #444444 muted on #ffffff | 9.7 | AAA |
| #2a64a6 link on #ffffff | 7.4 | AAA |
| #666666 soft on #ffffff | 5.7 | AA |
| #999999 faint on #ffffff | 2.9 | AA large only — disabled use only |
| #000000 on #f5f0e6 magazine-cream | 19.6 | AAA |
| #000000 on #f5f5f5 opinion-band | 20.4 | AAA |

### Focus Indicators

Focus ring is `2px solid #2a64a6` (link blue) with 2px outline-offset. Red is reserved for live content and alert chrome.

### ARIA Patterns

- **Live-coverage articles**: `role="region"` with `aria-live="polite"` on the live-update body. The LIVE chip carries `aria-label="Live coverage in progress"`.
- **Audio narration**: every premium feature has play with `aria-label="Listen to this article, X minutes Y seconds"`.
- **Paywall modal**: `role="dialog"`, `aria-modal="true"`, focus trapped, Esc closes.
- **Section nav**: `<nav aria-label="Sections">` with active page marked `aria-current="page"`.
- **Save-article chip**: uses `aria-pressed` to communicate save state.

### Keyboard Navigation

- Top nav: Tab moves Hamburger → Wordmark → Subscribe → Sign In → Search
- Section nav: Tab traverses sections left-to-right
- Article body: Tab skips photos; lands on inline links and the Listen / Save chips
- Skip-link first: "Skip to main content"
- Search: Cmd/Ctrl+K opens overlay, focus auto-traps, Esc closes

### Screen Reader Hints

- Photo credits announce as "Photograph by [Name] / The Washington Post"
- Live-dot is `aria-hidden="true"`; the LIVE label carries the announcement
- "Subscribe" CTA carries `aria-label="Subscribe to The Washington Post"`
- "Democracy Dies in Darkness" tagline is announced as the masthead tagline (not skipped)

### Reduced Motion

Live-dot pulse → static; card hovers → underline-only; alert-banner enter → instant.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | Top nav collapses to hamburger + wordmark + Subscribe; section nav into hamburger; river cards 1-up; reading column 16px gutters; pull-quote at 22px Postoni italic |
| Tablet | 600–1024px | Section nav as horizontal scroller; river cards 2-up at 768+ |
| Desktop | 1024–1440px | Full section nav; river cards 3-up; sidebar appears on article pages |
| Wide | >1440px | Content caps at 1200px; gutters absorb the rest |

### Touch Targets

- Primary CTAs: 44×44px
- Section nav: 44px tap area
- Save-article chip: 36×36px
- Live-update entries: 48px tap area

### Collapsing Strategy

- Section nav collapses to scroller, then hamburger
- Subscribe stays visible at all breakpoints
- River cards drop column count cleanly: 4 → 3 → 2 → 1
- Sidebar collapses below article body on tablet

### Image Behavior

- River-card images: `aspect-ratio: 16/9` desktop, `4/3` mobile
- Article hero: full-bleed up to 1024px
- Photo essays: scroll-snap on touch, arrow buttons on mouse

### Container Queries

Right-rail compresses Most Read author headshots from 48px to 32px when narrow.

## 11. Content & Voice

### Tone

Authoritative, sober, accountability-focused. The Post's voice carries a slightly more urgent tone than the NYT — the "Democracy Dies in Darkness" tagline conditions the brand toward watchdog-coded language. Headlines lead with the political consequence ("Senate fails to override Trump veto"); decks add the procedural detail ("Lawmakers fall short of two-thirds majority needed to override").

### Microcopy Patterns

- **Subscribe verbs**: "Subscribe", "Subscribe Now", "Continue", "Sign In"
- **Paywall messages**: "You've used your free articles for this month. Subscribe for $4 every 4 weeks to continue reading."
- **Comments**: "Comments closed" appears 14 days after publication
- **Error messages**: full-sentence with explicit remedy
- **Empty state — saved articles**: "Articles you save will appear here."

### CTA Verb Conventions

- Primary: **"Subscribe"**, **"Continue"**, **"Sign In"**, **"Read"**
- Secondary: **"Save"**, **"Share"**, **"Listen"**
- Tertiary: **"More on this story"**, **"View all updates"**
- Avoided: "Click here", "Submit", "Buy now", "Try free"

### Empty States

- Saved Reading List: "Articles you save will appear here. Tap the bookmark icon on any article to save it for later."
- Search no results: "No articles match your search. Try different keywords or browse our sections."
- Comments closed: "The comment period has ended for this article. Comments typically remain open for 14 days after publication."

## 12. Dark Mode & Theming

The Washington Post supports **system-level dark mode** with full token swap:

- `bg`: `#000000` — true black, broadsheet ink ground
- `surface`: `#0d0d0d`
- `text`: `#ffffff`
- `text-muted`: `#bdbdbd`
- `brand-red`: `#ff3344` — brightened for AA on dark
- `link`: `#9bbedf`
- `border`: `#262626`
- `border-rule`: `#ffffff` — section rules invert ink → paper

Dark mode keeps Postoni headlines and Franklin body unchanged; only color tokens swap. The signature WaPo red brightens to `#ff3344` to maintain AA on the black ground without losing alarm character.

## 13. Lineage & Influences

The Washington Post's visual lineage is **the American Federalist broadsheet** — Bodoni-derived display, sans-serif body (a signature WaPo break from the all-serif Times tradition), heavy ruled hierarchy, square corners. Postoni was commissioned in 2000 from The Font Bureau (Roger Black / David Berlow) as a custom Bodoni cut for the Post's print masthead and has since been ported to digital with web-tuned hinting.

The "Democracy Dies in Darkness" tagline — added in 2017 — sits beneath the masthead in italic tracked uppercase Franklin, and has become the most-recognized accountability statement in American media. It is rendered as type, not as decoration: same Franklin font as the bylines, same uppercase tracking discipline.

The Post's three notable web redesigns (2010, 2017, 2022) have each *removed* color and chrome. The 2017 redesign added the tagline, modernized the LIVE chip, introduced the audio narration affordance, and shipped a true dark mode. The 2022 redesign tightened the ruled hierarchy and increased the masthead-rule weight from 1.5px to 2px — a subtle but deliberate move toward heavier print-broadsheet weight.

What the Post rejects: rounded card corners, decorative gradients, illustrative chrome, sans-serif headlines (display stays Postoni), serif body (body stays Franklin sans), brand color used decoratively. What it borrows from: **The Times of London's** masthead discipline, **The Guardian's** ruled grid (with even heavier rule weight), and **Bloomberg Businessweek's** custom-display + sans-body system.

**Influences:**
- Postoni (2000) — Berlow / The Font Bureau, custom Bodoni cut commissioned for the Post
- Franklin Gothic (1902) — Morris Fuller Benton, the Post's body face since 1990s
- The Times of London — masthead discipline, [thetimes.co.uk](https://www.thetimes.co.uk)
- The Guardian — ruled grid, [theguardian.com](https://www.theguardian.com)
- Bloomberg Businessweek — custom-display + sans-body model
- "Democracy Dies in Darkness" (2017) — the editorial tagline that anchors the brand voice

## 14. Do's and Don'ts

**Do**
- Set the masthead in Postoni Wide 900 with the "Democracy Dies in Darkness" tagline in italic Franklin tracked 0.18em beneath
- Run headlines in Postoni 700/900 with negative tracking (-0.01em → -0.02em)
- Run body in **Franklin sans 400** (the deliberate WaPo split from NYT's serif body)
- Use absolute black ink (`#000000`) for text — distinct from NYT's softened `#121212`
- Reserve WaPo red (`#cf202f`) for LIVE, alerts, election overlays
- Use 2px ink masthead rules and 1.5px ink section rules — the broadsheet column-rule weight
- Separate stories with 1px `#cccccc` hairlines (heavier than NYT's `#dfdfdf`)
- Keep cards, photos, alerts at 0px radius — square corners are load-bearing for the brand
- Set the reading column at 620px — Franklin sans wants slightly more line-length than serif body
- Use the link blue (`#2a64a6`) for inline editorial links

**Don't**
- Don't round buttons — buttons are 0px radius (the only rounded element is the form input at 4px)
- Don't use the WaPo red for body links, decorative accents, or hover states — red is signal
- Don't use serif body — body is Franklin sans (the NYT does serif body; the Post does not)
- Don't use softened black (#121212 or warmer); body and headline ink is `#000000` absolute
- Don't apply shadows to article cards — depth is ruled (1px → 1.5px → 2px), never cast
- Don't drop the "Democracy Dies in Darkness" tagline — it's the brand anchor, not optional
- Don't use exclamation marks or "Let's" verbs in microcopy — voice is sober/watchdog
- Don't let the focus ring be red — link blue keeps red sacred for live content
- Don't use "Click here", "Submit", "Buy now" — verbs are "Subscribe", "Continue", "Sign In", "Read"
- Don't break the 620px reading column on article bodies

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #ffffff
Ink:              #000000 (absolute black)
WaPo-Red:         #cf202f
Link-Blue:        #2a64a6
Muted:            #444444
Hairline:         #cccccc
Section-Rule:     #000000 at 1.5px
Masthead-Rule:    #000000 at 2px
Magazine-Cream:   #f5f0e6
Opinion-Band:     #f5f5f5
Tagline-Tracking: 0.18em uppercase italic
```

### Example Component Prompts

- "Create a Washington Post masthead: white canvas (#ffffff), 'The Washington Post' in Postoni Wide 72/900 absolute black centered, beneath it 'Democracy Dies in Darkness' in italic Franklin Gothic 11/400 uppercase tracked 0.18em ink, 2px ink rule beneath the wordmark spanning full width."
- "Design a WaPo article header: section label in Franklin 11/700 uppercase tracked 0.12em ('POLITICS'), 1.5px ink rule below, headline in Postoni 48/700 with -0.015em tracking, then italic Postoni 18/300 deck, then byline in Franklin 12/700 uppercase tracked 0.06em ('BY MAGGIE HABERMAN'), then dateline in Franklin 12/400 ('Nov. 5, 2024 at 11:42 a.m. EST'). Body in Franklin 18/400 sans (not serif)."
- "Build a WaPo Subscribe button: absolute black (#000000) fill, white text in Franklin 13/700 uppercase tracked 0.08em ('SUBSCRIBE'), **0px radius (square corners)**, 12×22px padding, 44px height. Pointer-down lightens to #333333."
- "Create a WaPo live-coverage badge: red (#cf202f) fill, white text 'LIVE' in Franklin 11/700 uppercase tracked 0.1em, 0px radius (square — no pills here), 3×7px padding. White pulsing dot to the left, 1.6s opacity 1→0.4→1 + scale 1→1.15→1."
- "Design a WaPo pull-quote: italic Postoni at 28px / 1.3 line-height, absolute black, centered, between two 1px ink rules at 24px vertical padding. The Bodoni italic gives more contrast than Cheltenham."
- "Build a WaPo paywall modal: white surface, **2px ink border** (heavier than NYT), 0px radius, 32×24px padding. Headline 'Subscribe to The Post' in Postoni 22/700, subhead in Franklin 13/400 ('$4 every 4 weeks'), full-width black Subscribe button below, outline 'Already a subscriber? Sign in' beneath."

### Iteration Guide

1. **Start on paper-white with absolute black ink.** Not `#121212` (that's NYT). Not warm-cream. Pure `#ffffff` and `#000000`.
2. **Postoni headlines + Franklin sans body.** This split is the brand. If body is serif, you've slipped into NYT territory.
3. **Square corners on buttons and cards.** 0px radius is load-bearing. The only exception: form inputs at 4px.
4. **Heavy ruled hierarchy.** 1px hairlines between river stories, 1.5px section rules, 2px masthead rule. The rule weight tells you what tier you're in.
5. **Tagline is mandatory.** "Democracy Dies in Darkness" in italic Franklin tracked 0.18em is part of the masthead, not optional decoration.
6. **Red is a signal, not a brand color.** If two red elements are visible at once outside a breaking-news context, demote one.
7. **Section labels track at 0.12em.** Higher than NYT's 0.08em — that wider tracking is the broadsheet column-label tradition.
8. **Hairlines, not shadows.** Editorial surfaces never carry shadows. Chrome (modals, dropdowns) gets soft neutral-gray.
