---
name: Semafor
tagline: Paper-cream canvas (`#f8f5d7`) with FeatureFlatHeadline serif and signature flag-style topic columns — global-news editorial built for the post-Twitter era.
updated_at: 2026-05-05T10:17:17+12:00
published_at: 2026-05-05T10:17:17+12:00
author: webdesignhot
source_url: https://www.semafor.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media]
tags: [editorial, serif, light, paper-cream, news, flag-columns, global, magazine]
preview_swatch: ['#f8f5d7', '#3a6d78', '#1f1d1a']
related: [theatlantic, newyorker, ft]
description: 'Semafor was founded in 2022 by Ben Smith (former Buzzfeed News editor-in-chief, NYT media columnist) and Justin Smith (former Bloomberg Media CEO) on a thesis that global news could be reimagined for the post-Twitter, post-Trump-1 attention economy: distinct from the wire-service-neutral aesthetic of Reuters/AP/Bloomberg, distinct from the broadsheet-roman of NYT/WaPo, and oriented around fewer-but-better stories with named columnists and global beat coverage. The visual system: a paper-cream canvas (`#f8f5d7`) — observed bg color rgb(248, 245, 215) — that sets the brand apart from every white-canvas peer; **FeatureFlatHeadline** as the editorial serif (a flat-headline cut from Frere-Jones / Schwartz lineage); a signature **flag-style topic-column system** with named columns (Semafor Africa, Flagship, Principals, Net Zero, Technology, Business, Media, Gulf) each anchored by an expert columnist; teal accent (`#3a6d78`) for action; and a typographic discipline that emphasizes ample line-height, generous reading column, and magazine-flavored editorial pacing. Where Reuters runs wire-service neutral and Axios runs smart-brevity-bulleted, Semafor runs **paper-cream-magazine** — calmer, more deliberate, more author-driven.'

colors:
  bg: '#f8f5d7'                  # the paper-cream Semafor canvas (observed)
  bg-section: '#f8f5d7'
  bg-section-flagship: '#f8f5d7'
  bg-section-africa: '#f8f5d7'
  bg-dark: '#1f1d1a'              # observed h1 color rgb(31, 29, 26) — used as dark text and dark sub-band
  bg-darkest: '#0d0c0a'
  surface: '#f8f5d7'              # cards inherit the cream canvas
  surface-paper: '#ffffff'        # photos and chart panels lift onto pure white inside the cream page
  surface-soft: '#f5f1c9'         # slightly darker cream for sub-band
  surface-strong: '#e8e3b5'       # disabled fill, table-row alternate
  surface-quote: '#fefbe8'         # lighter cream pull-quote backdrop
  surface-card-elevated: '#fcfae0'
  text: '#1f1d1a'                 # observed h1 color — dark warm-charcoal calibrated for cream
  text-strong: '#000000'
  text-muted: '#5a5651'           # bylines, datelines (warm-gray on cream)
  text-soft: '#7a756f'             # captions, photo credits
  text-faint: '#a39e96'             # disabled
  text-on-teal: '#ffffff'
  text-on-dark: '#f8f5d7'           # cream text on dark — the reverse pairing
  brand: '#3a6d78'                 # the Semafor teal — observed link color rgb(58, 109, 120)
  brand-hover: '#2d5a64'
  brand-active: '#1f4750'
  brand-soft: '#cce0e4'             # tint surface
  brand-deep: '#1a3a44'             # darkest teal
  link: '#3a6d78'                  # teal as inline link
  link-hover: '#2d5a64'
  link-visited: '#7a756f'
  on-brand: '#ffffff'
  on-dark: '#f8f5d7'
  border: '#d8d0a8'                # warm-gold hairline (calibrated for cream ground)
  border-soft: '#e8e2c2'
  border-strong: '#7a756f'
  border-rule: '#1f1d1a'             # dark rule on cream
  border-teal: '#3a6d78'
  shadow-card: 'rgba(31,29,26,0.06)'  # cream-tinted shadow
  shadow-elev: 'rgba(31,29,26,0.1)'
  shadow-modal: 'rgba(31,29,26,0.3)'
  scrim: 'rgba(31,29,26,0.6)'
  success: '#2a8a4f'
  success-soft: '#dff0e7'
  warning: '#cc7a00'
  warning-soft: '#fde9cc'
  danger: '#a62d2d'
  danger-soft: '#f0d4d4'
  info: '#3a6d78'
  info-soft: '#cce0e4'
  flag-flagship: '#3a6d78'           # Flagship column flag color
  flag-africa: '#c46b3a'             # Semafor Africa column flag color
  flag-principals: '#3a6d78'         # DC politics column
  flag-net-zero: '#2a8a4f'           # climate column
  flag-tech: '#5a4a8a'                # tech column
  flag-business: '#3a6d78'
  flag-media: '#a62d2d'               # media (Ben Smith's column)
  flag-gulf: '#c46b3a'                # Gulf-region coverage

typography:
  display:
    family: '"FeatureFlatHeadline", "Feature Flat Headline", "Times New Roman", Times, serif'
    weights: [300, 370, 400, 500, 600, 700]
    opentype-features: ['liga', 'kern', 'dlig']
  body:
    family: '"FeatureFlatText", "Feature Flat Text", Georgia, "Times New Roman", serif'
    weights: [400, 500, 700]
  ui:
    family: 'sans-serif, "Helvetica Neue", Helvetica, Arial'
    weights: [400, 500, 600, 700]
  serif-italic:
    family: '"FeatureFlatHeadline", serif'
    weights: [400, 500]
  mono:
    family: 'Menlo, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    masthead-wordmark:   { size: 32, weight: 600, lineHeight: 1.0,  tracking: '-0.01em', family: display, opentype: ['liga'] }
    headline-mega:       { size: 56, weight: 400, lineHeight: 1.05, tracking: '-0.015em', family: display }
    headline-jumbo:      { size: 44, weight: 400, lineHeight: 1.08, tracking: '-0.01em', family: display }
    headline-xl:         { size: 34, weight: 370, lineHeight: 1.13, tracking: '-0.005em', family: display, notes: 'observed h1: weight 370' }
    headline-lg:         { size: 28, weight: 400, lineHeight: 1.18, tracking: '0',         family: display }
    headline-md:         { size: 22, weight: 500, lineHeight: 1.22, tracking: '0',         family: display }
    headline-sm:         { size: 18, weight: 500, lineHeight: 1.25, tracking: '0',         family: display }
    deck-italic:         { size: 19, weight: 400, lineHeight: 1.4,  tracking: '0',         family: serif-italic, style: italic }
    body-md:             { size: 18, weight: 400, lineHeight: 1.65, tracking: '0',         family: body }
    body-sm:             { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',         family: body }
    pull-quote:          { size: 30, weight: 400, lineHeight: 1.3,  tracking: '0',         family: serif-italic, style: italic }
    flag-label:          { size: 13, weight: 700, lineHeight: 1.0,  tracking: '0.08em',    family: ui, transform: uppercase }
    section-label:       { size: 11, weight: 600, lineHeight: 1.0,  tracking: '0.1em',     family: ui, transform: uppercase }
    byline:              { size: 13, weight: 600, lineHeight: 1.3,  tracking: '0',         family: ui }
    columnist-name:      { size: 17, weight: 700, lineHeight: 1.2,  tracking: '0',         family: ui }
    dateline:            { size: 12, weight: 500, lineHeight: 1.3,  tracking: '0.02em',    family: ui }
    nav-link:            { size: 12, weight: 600, lineHeight: 1.0,  tracking: '0.06em',    family: ui, transform: uppercase }
    button-label:        { size: 13, weight: 600, lineHeight: 1.0,  tracking: '0.06em',    family: ui, transform: uppercase }
    caption:             { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',         family: ui }
    photo-credit:        { size: 11, weight: 500, lineHeight: 1.3,  tracking: '0.04em',    family: ui, transform: uppercase }
    micro-meta:          { size: 11, weight: 500, lineHeight: 1.2,  tracking: '0.04em',    family: ui, transform: uppercase }
    semaform-label:      { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.1em',     family: ui, transform: uppercase }
    code-micro:          { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',         family: mono }

radius:
  micro: 0
  sm: 2
  md: 4
  lg: 6
  pill: 9999
  none: 0

spacing:
  base: 4
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120]

layout:
  page-width: 1200
  prose-width: 660
  feature-width: 980
  header-height: 64
  flag-bar-weight: 4
  section-rule-weight: 1
  hairline-weight: 1

components:
  flag-bar:
    bg: '#3a6d78'
    color: '#ffffff'
    border: '4px solid'
    padding: '8px 16px'
    use: 'The signature Semafor flag bar — a colored 4px+ horizontal stripe with the column name in white uppercase tracked 0.08em ("FLAGSHIP", "SEMAFOR AFRICA", "PRINCIPALS"). Each column has its own flag color.'
  flag-africa:
    bg: '#c46b3a'
    color: '#ffffff'
    use: 'Semafor Africa column flag — orange-rust ground with white "SEMAFOR AFRICA" label.'
  flag-net-zero:
    bg: '#2a8a4f'
    color: '#ffffff'
    use: 'Net Zero (climate) column flag — green ground.'
  flag-tech:
    bg: '#5a4a8a'
    color: '#ffffff'
    use: 'Technology column flag — purple-indigo ground.'
  flag-media:
    bg: '#a62d2d'
    color: '#ffffff'
    use: 'Media column flag (Ben Smith''s column) — red ground.'
  semaform-block:
    bg: '#f5f1c9'
    color: '#1f1d1a'
    border: 'left 4px solid #3a6d78'
    padding: '24px 32px'
    use: 'The "Semaform" — Semafor''s signature article structure with sub-sections "The News", "Reporter''s view", "Room for disagreement", "Notable". Tinted-cream backdrop with teal left bar.'
  button-primary:
    bg: '#3a6d78'
    color: '#ffffff'
    radius: 2
    padding: '14px 24px'
    height: 44
    font: button-label
    use: 'Subscribe, Sign in — primary CTA. Teal fill with white text.'
  button-primary-hover:
    bg: '#2d5a64'
    color: '#ffffff'
    use: 'Pointer-down on teal CTAs.'
  button-secondary:
    bg: 'transparent'
    color: '#1f1d1a'
    border: '1px solid #1f1d1a'
    radius: 2
    padding: '14px 24px'
    height: 44
    use: 'Already a subscriber, secondary actions over cream.'
  button-text-link:
    bg: 'transparent'
    color: '#3a6d78'
    use: 'Inline body links — teal text with subtle underline on hover.'
  card-headline:
    bg: '#f8f5d7'
    color: '#1f1d1a'
    radius: 0
    border: 'top 1px solid #d8d0a8'
    use: 'Default river card on cream. Photo above (lifted to white inserts), FeatureFlatHeadline 22/500 headline, italic FeatureFlatHeadline 18/400 deck, sans 13/600 byline.'
  card-photo:
    bg: '#ffffff'
    color: '#1f1d1a'
    radius: 0
    use: 'Photo card — pure white surface inside the cream page (the white-insert pattern, a la FT).'
  card-columnist:
    bg: '#f8f5d7'
    color: '#1f1d1a'
    radius: 0
    use: 'Columnist card — flag bar above, columnist name + portrait at top, columnist headline below.'
  pull-quote:
    bg: 'transparent'
    color: '#1f1d1a'
    border: 'top 1px solid #1f1d1a; bottom 1px solid #1f1d1a'
    padding: '24px 0'
    use: 'Italic FeatureFlatHeadline 30 between two dark rules over cream — magazine-flavored pull-out.'
  text-input:
    bg: '#ffffff'
    color: '#1f1d1a'
    radius: 2
    height: 44
    padding: '12px 14px'
    border: '1px solid #7a756f'
    focus: 'border thickens to 2px teal'
    use: 'Email entry, search input — white inside the cream page.'
  paywall-cta:
    bg: '#1f1d1a'
    color: '#f8f5d7'
    padding: '40px 32px'
    use: 'Dark ground paywall with cream text — the Semafor reverse pairing.'
  nav-section-link:
    color: '#1f1d1a'
    font: nav-link
    padding: '14px 12px'
    use: 'Section nav (Flagship, Africa, Principals, Net Zero, Tech, Business, Media, Gulf, Newsletters). Hover: teal underline grows from below.'
  newsletter-cta:
    bg: '#3a6d78'
    color: '#ffffff'
    padding: '32px'
    use: 'Newsletter signup card — teal ground with white headline ("Get our daily newsletter") and white-outline Subscribe button.'
  columnist-portrait:
    bg: '#ffffff'
    color: '#1f1d1a'
    radius: 9999
    use: 'Round columnist portrait, 64px diameter, with name in sans 17/700 alongside.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out-soft: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 320
  card-hover: 'image scales 1.0 → 1.02 inside white insert; headline color shifts to teal over 200ms; subtle 1px teal underline grows under headline'
  reduced-motion: 'respects prefers-reduced-motion: reduce — transforms suppressed, transitions become instant color sets.'

breakpoints:
  mobile: 640
  tablet: 768
  desktop: 1024
  wide: 1440

shadows:
  ambient: 'rgba(31,29,26,0.04) 0 1px 2px'
  standard: 'rgba(31,29,26,0.06) 0 2px 6px'
  elevated: 'rgba(31,29,26,0.1) 0 8px 20px'
  deep: 'rgba(31,29,26,0.3) 0 16px 40px'
  ring: '0 0 0 2px #3a6d78'

accessibility:
  contrast-text-on-bg: 13.0                # #1f1d1a on #f8f5d7 — AAA at body sizes
  contrast-text-on-teal: 5.5                # #ffffff on #3a6d78 — AA / AAA large
  contrast-link-on-bg: 4.7                  # #3a6d78 on #f8f5d7 — AA body
  contrast-text-on-dark: 12.5               # #f8f5d7 on #1f1d1a — AAA (the reverse pairing)
  contrast-muted-on-bg: 5.5                 # #5a5651 on #f8f5d7 — AA
  focus-ring: '2px solid #3a6d78 (Semafor teal) + 2px outline-offset'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab moves Semafor wordmark → primary nav → utility (Subscribe, Sign in, Search). Skip-link first.'

dark-mode: optional
colors-dark:
  bg: '#1f1d1a'
  bg-section: '#0d0c0a'
  surface: '#1f1d1a'
  surface-soft: '#0d0c0a'
  surface-quote: '#2a2722'
  text: '#f8f5d7'                 # cream stays as text color in dark mode — preserves brand reverse pairing
  text-strong: '#ffffff'
  text-muted: '#d8d0a8'
  text-soft: '#a39e96'
  brand: '#7ab2bd'                 # teal lifts for AA on dark
  link: '#7ab2bd'
  border: '#3a3530'
  border-rule: '#f8f5d7'
---

## 1. Visual Theme & Atmosphere

Semafor was founded in 2022 by Ben Smith (former Buzzfeed News editor-in-chief, NYT media columnist) and Justin Smith (former Bloomberg Media CEO) on a thesis that global news could be reimagined for the post-Twitter, post-Trump-1 attention economy: distinct from the wire-service-neutral aesthetic of Reuters/AP/Bloomberg, distinct from the broadsheet-roman of NYT/WaPo, and oriented around fewer-but-better stories with named columnists and global beat coverage. The visual system reflects the editorial thesis at every level.

The most-identifying chromatic decision is the **paper-cream canvas** (`#f8f5d7`) — observed bg color rgb(248, 245, 215). The cream sets Semafor apart from every white-canvas peer in the news ecosystem (Reuters, Bloomberg, Axios, NYT, WaPo, the Guardian all run pure-white canvases; only the FT runs a non-white ground, with its salmon-pink). The cream is calibrated for low-glare reading and gives the page a magazine-paper warmth that signals "this is meant to be read slowly" — distinct from the wire-service speed of Reuters or the bullet-brevity of Axios. Photos and chart panels lift onto pure-white inserts inside the cream page (the white-insert pattern, borrowed directly from the FT's salmon-and-white system).

Type sets in **FeatureFlatHeadline** — a flat-headline serif cut in the Frere-Jones / Schwartz / Klim editorial-serif lineage. Observed h1 weight is 370 (an unusual fractional weight, signaling FeatureFlatHeadline is a variable font with custom weight axis). The body face is FeatureFlatText, the text-grade companion. A sans companion runs all UI chrome — section labels, navigation, button labels, photo credits — in tracked uppercase. The serif/sans pairing is conventional for editorial publishing; what's distinct is the **single-serif voice for both display and body** (no Tiempos-Headline-vs-Tiempos-Text split), and the modest display weights (370–500) that give the page a calmer, more deliberate rhythm than NYT/WaPo's 700-weight headlines.

The **flag-style topic-column system** is the most-identifying editorial-as-design decision. Semafor organizes its coverage around named columns: **Flagship** (the daily catch-up), **Semafor Africa** (continental coverage), **Principals** (DC politics), **Net Zero** (climate), **Technology**, **Business**, **Media** (Ben Smith's media column), and **Gulf** (Gulf-region coverage). Each column has its own **flag color** — Flagship runs teal, Africa runs orange-rust, Net Zero runs green, Technology runs purple-indigo, Media runs red. The flags appear as colored 4px+ horizontal stripes with the column name in white uppercase tracked 0.08em — the brand's most-distinctive recurring graphic device.

The **Semaform** is the brand's signature article structure: **The News** (the bullet-summary lead), **Reporter's view** (the reporter's own analysis labeled distinctly), **Room for disagreement** (a contrasting view labeled distinctly), and **Notable** (additional context). The structure mirrors the brand's editorial thesis: news + named-author analysis + contrasting view + context — labeled and demarcated so readers know what they're reading. The Semaform renders as tinted-cream-blocked sections with the teal left bar and uppercase sans labels.

**Key Characteristics:**
- **Paper-cream canvas** (`#f8f5d7`) — the most-identifying brand asset, a magazine-paper warmth distinct from every white-canvas peer
- **FeatureFlatHeadline serif** — observed h1 weight 370 (variable-font fractional weight)
- **Teal accent** (`#3a6d78`) — primary CTA, link, focus ring
- **Flag-style topic columns** — each with distinct flag color (Flagship teal, Africa rust, Net Zero green, Tech purple, Media red)
- **The Semaform** — branded article structure ("The News", "Reporter's view", "Room for disagreement", "Notable")
- **Photos lift onto white inserts inside the cream page** — borrowed from the FT's salmon-and-white pattern
- Modest display weights (370–500) — calmer than NYT/WaPo's 700-weight headlines
- Italic FeatureFlatHeadline pull-quotes between dark rules — magazine-flavored decoration
- Generous body line-height (1.65) — calibrated for slow reading
- Square broadsheet aesthetic — 0px on cards, 2px on buttons and inputs
- Cream-on-dark reverse pairing for paywall and dark mode
- Round columnist portraits — author-driven brand voice

## 2. Color Palette & Roles

### Primary
- **Paper Cream** (`#f8f5d7`): the brand. Page canvas, card backgrounds, magazine paper warmth. Observed value rgb(248, 245, 215).
- **Dark Charcoal** (`#1f1d1a`): primary text — observed h1 color, calibrated warm-charcoal that harmonizes with cream.
- **Semafor Teal** (`#3a6d78`): the brand action color. Primary CTA, link, hover underline, focus ring, Flagship column flag.

### Brand & Sub-Brand (Flag Colors)
- **Flagship Teal** (`#3a6d78`)
- **Africa Rust** (`#c46b3a`) — Semafor Africa column
- **Principals Teal** (`#3a6d78`) — DC politics column shares brand teal
- **Net Zero Green** (`#2a8a4f`) — climate column
- **Technology Purple** (`#5a4a8a`) — tech column
- **Business Teal** (`#3a6d78`)
- **Media Red** (`#a62d2d`) — Ben Smith's media column
- **Gulf Rust** (`#c46b3a`) — Gulf-region coverage shares Africa rust

### Accent
- **Teal Hover** (`#2d5a64`)
- **Teal Active** (`#1f4750`)
- **Teal Soft** (`#cce0e4`) — selected nav background, badge tint
- **Teal Deep** (`#1a3a44`) — heaviest teal

### Interactive
- **Default Link** (`#3a6d78` text + underline-on-hover)
- **Active CTA** (teal fill on white text)
- **Disabled** (`#a39e96` text, `#e8e3b5` fill)
- **Selected** (teal-soft chip with teal text)

### Neutral Scale (Calibrated for Cream)
- **Dark Charcoal** (`#1f1d1a`) — body, headlines (cream ground requires warmer-than-black)
- **Strong Black** (`#000000`) — max-contrast headline display
- **Muted** (`#5a5651`) — bylines, datelines (warm-gray on cream)
- **Soft** (`#7a756f`) — captions, photo credits
- **Faint** (`#a39e96`) — disabled
- **Hairline** (`#d8d0a8`) — universal 1px rule (warm-gold, calibrated for cream)

### Surface & Borders
- **Cream Canvas** (`#f8f5d7`)
- **Surface Paper** (`#ffffff`) — photo and chart panel surface inside the cream page (the pure-white insert)
- **Surface Soft** (`#f5f1c9`) — slightly darker cream for sub-band, Semaform block
- **Surface Strong** (`#e8e3b5`) — disabled fill
- **Surface Quote** (`#fefbe8`) — lighter cream pull-quote backdrop
- **Surface Card Elevated** (`#fcfae0`)
- **Hairline** (`#d8d0a8`) — warm-gold rule, calibrated for cream
- **Border Strong** (`#7a756f`) — form input border
- **Border Rule** (`#1f1d1a`) — dark section rule
- **Border Teal** (`#3a6d78`) — Semaform left bar, focus

### Shadow Colors
Shadows are **cream-tinted** (not neutral-gray) — calibrated for cream harmony:
- `rgba(31,29,26,0.04) 0 1px 2px` — minimal ambient
- `rgba(31,29,26,0.06) 0 2px 6px` — dropdown
- `rgba(31,29,26,0.1) 0 8px 20px` — overlay
- `rgba(31,29,26,0.3) 0 16px 40px` — modal

### Semantic
- **Success** (`#2a8a4f` on `#dff0e7`) — also Net Zero column flag
- **Warning** (`#cc7a00` on `#fde9cc`) — amber for advisory
- **Danger** (`#a62d2d` on `#f0d4d4`) — also Media column flag
- **Info** (`#3a6d78` on `#cce0e4`) — info shares brand teal

## 3. Typography Rules

### Font Family

**Display & Body**: `FeatureFlatHeadline` — a flat-headline serif in the Frere-Jones / Schwartz / Klim editorial-serif lineage. Observed h1 weight is **370** (a fractional weight, signaling FeatureFlatHeadline is a variable font). Available in 300, 370, 400, 500, 600, 700. Fallback: `"Times New Roman", Times, serif`.

**Body Text Cut**: `FeatureFlatText` — the text-grade companion to FeatureFlatHeadline. Available in 400, 500, 700. Fallback: `Georgia, "Times New Roman", serif`.

**UI**: System sans (`sans-serif, "Helvetica Neue", Helvetica, Arial`) — Semafor uses system sans for chrome (UI labels, navigation, button labels, photo credits, flag labels). The system-sans choice is a cost-and-performance decision but reads as deliberate restraint — the editorial product carries the brand voice; the chrome is functional.

**Italic**: FeatureFlatHeadline italic — used for decks (standfirsts), pull-quotes, and emphasis. The italic is magazine-flavored.

**Mono**: System mono — `Menlo, Consolas, "Courier New", monospace`. Used rarely.

**OpenType features**: FeatureFlatHeadline uses standard ligatures, tightly-tuned kerning at display sizes, and discretionary ligatures (`dlig`) on display headlines for editorial flourish.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| masthead-wordmark | FeatureFlatHeadline | 32 | 600 | 1.0 | -0.01em | liga | "Semafor" wordmark |
| headline-mega | FeatureFlatHeadline | 56 | 400 | 1.05 | -0.015em | dlig | Cover-class headline |
| headline-jumbo | FeatureFlatHeadline | 44 | 400 | 1.08 | -0.01em | — | Top-of-fold lead |
| headline-xl | FeatureFlatHeadline | 34 | 370 | 1.13 | -0.005em | — | Above-fold secondary (observed h1) |
| headline-lg | FeatureFlatHeadline | 28 | 400 | 1.18 | 0 | — | River lead |
| headline-md | FeatureFlatHeadline | 22 | 500 | 1.22 | 0 | — | River sub |
| headline-sm | FeatureFlatHeadline | 18 | 500 | 1.25 | 0 | — | Compact module |
| deck-italic | FeatureFlatHeadline italic | 19 | 400 | 1.4 | 0 | — | Standfirst — italic, weight 400 |
| body-md | FeatureFlatText | 18 | 400 | 1.65 | 0 | — | Default running text — generous line-height |
| body-sm | FeatureFlatText | 16 | 400 | 1.6 | 0 | — | Compact card body |
| pull-quote | FeatureFlatHeadline italic | 30 | 400 | 1.3 | 0 | — | Italic between dark rules |
| flag-label | sans | 13 | 700 | 1.0 | 0.08em | uppercase | "FLAGSHIP" / "SEMAFOR AFRICA" |
| section-label | sans | 11 | 600 | 1.0 | 0.1em | uppercase | "POLITICS" / "BUSINESS" |
| byline | sans | 13 | 600 | 1.3 | 0 | — | "By Ben Smith" |
| columnist-name | sans | 17 | 700 | 1.2 | 0 | — | "Ben Smith" — alongside round portrait |
| dateline | sans | 12 | 500 | 1.3 | 0.02em | — | "Nov 5, 2024" |
| nav-link | sans | 12 | 600 | 1.0 | 0.06em | uppercase | "Flagship" / "Africa" |
| button-label | sans | 13 | 600 | 1.0 | 0.06em | uppercase | "SUBSCRIBE" / "SIGN IN" |
| caption | sans | 13 | 400 | 1.4 | 0 | — | Photo / chart caption |
| photo-credit | sans | 11 | 500 | 1.3 | 0.04em | uppercase | "PHOTO: REUTERS / DADO RUVIC" |
| micro-meta | sans | 11 | 500 | 1.2 | 0.04em | uppercase | "5 MIN READ" |
| semaform-label | sans | 11 | 700 | 1.0 | 0.1em | uppercase | "THE NEWS" / "REPORTER'S VIEW" / "ROOM FOR DISAGREEMENT" / "NOTABLE" |
| code-micro | mono | 12 | 400 | 1.4 | 0 | — | Code blocks (rare) |

### Principles

- **Modest display weights (370–500).** Semafor runs lighter display weights than NYT/WaPo (700+) — typographic restraint signals magazine-flavor over broadsheet-conservative.
- **Single-serif voice (FeatureFlatHeadline + FeatureFlatText).** Display and body share the same serif family. The discipline gives the page a calm, unified rhythm.
- **Generous body line-height (1.65).** Calibrated for slow reading and the cream-paper warmth of the canvas.
- **Italic deck (standfirst).** The 19px italic FeatureFlatHeadline 400 standfirst is magazine convention.
- **Italic pull-quote between dark rules over cream.** The brand's signature pull-out — borrowed from the FT's italic-Financier-on-salmon convention.
- **Sans system-stack for chrome.** UI is system sans — flags, navigation, button labels, photo credits. The choice keeps the cream-paper editorial product distinct from the chrome.
- **Tracked uppercase for flags and labels.** 0.06em–0.1em on flag labels (the brand's most-distinctive graphic device), section labels, and Semaform sub-section labels.
- **Variable-font fractional weights (370 observed).** FeatureFlatHeadline is a variable font with custom weight axis — 370 is a deliberate fractional choice that reads as design-system precision.

## 4. Component Stylings

### The Flag (the signature)

**`flag-bar`** — A colored 4px+ horizontal stripe with the column name in white uppercase tracked 0.08em ("FLAGSHIP", "SEMAFOR AFRICA", "PRINCIPALS", "NET ZERO", "TECHNOLOGY", "BUSINESS", "MEDIA", "GULF"). Each column has its own flag color. The flag sits at the top of column-front-pages and at the top of every article in that column. The flag-stripe + uppercase tracked label is the brand's most-distinctive recurring graphic device.

- **Flagship**: teal (`#3a6d78`)
- **Semafor Africa**: rust-orange (`#c46b3a`)
- **Net Zero**: green (`#2a8a4f`)
- **Technology**: purple-indigo (`#5a4a8a`)
- **Media**: red (`#a62d2d`) — Ben Smith's column

### The Semaform (the signature article structure)

**`semaform-block`** — Tinted-cream backdrop (`#f5f1c9`) with **4px Semafor teal left bar** (`#3a6d78`). 24×32px padding. Used for the four Semaform sub-sections: **THE NEWS** (lead bullet summary), **REPORTER'S VIEW** (reporter's own analysis), **ROOM FOR DISAGREEMENT** (contrasting view), **NOTABLE** (additional context). Each sub-section opens with a sans 11/700 uppercase tracked 0.1em label, then FeatureFlatText 18/400 body. The Semaform turns the article into a labeled-structure artifact — readers know what they're reading.

### Buttons

**`button-primary`** — Teal fill (`#3a6d78`), white text in sans 13/600 uppercase tracked 0.06em ("SUBSCRIBE"), 2px radius, 14×24px padding, 44px height. Press: darkens to `#2d5a64`.

**`button-secondary`** — Transparent fill, dark text, 1px dark border, 2px radius. "Already a subscriber? Sign in" over cream.

**`button-text-link`** — Plain teal text (`#3a6d78`), no surface, no border. Subtle underline grows on hover.

### Cards

**`card-headline`** — Cream surface (inherits canvas), 0px radius, top 1px hairline (`#d8d0a8`), no shadow. Photo above (lifted onto pure white inside the cream), FeatureFlatHeadline 22/500 headline, italic FeatureFlatHeadline 18/400 deck, sans 13/600 byline.

**`card-photo`** — Photo or chart panel on pure white inside the cream page. The white-insert pattern is borrowed from the FT's salmon-and-white system.

**`card-columnist`** — Cream surface with the column flag bar above, round columnist portrait (64×64px) at top-left, sans 17/700 columnist name alongside, then FeatureFlatHeadline 24/500 columnist headline below. Used on column-front-pages.

### Pull-Quote

**`pull-quote`** — Italic FeatureFlatHeadline 30/1.3, dark ink, between two 1px dark rules at 24px vertical padding. The cream ground gives the pull-out a magazine flavor — borrowed from the FT but with cream instead of salmon.

### Inputs / Forms

**`text-input`** — White surface (lifts off cream), 1px `#7a756f` border, 2px radius, 44px height, 12×14px padding. Focus: border thickens to 2px Semafor teal.

**`paywall-cta`** — **Dark ground** (`#1f1d1a`) — the Semafor reverse pairing — with **cream text** (`#f8f5d7`). Headline in cream FeatureFlatHeadline 26/500. White-outline Subscribe button. Behind: dark scrim. The cream-on-dark is identifying — borrowed-but-distinct from the FT's salmon-on-navy.

### Navigation

**`top-nav`** — Cream surface, 64px height, 1px bottom dark rule. "Semafor" wordmark center-aligned in FeatureFlatHeadline 32/600. Section nav (Flagship, Africa, Principals, Net Zero, Tech, Business, Media, Gulf, Newsletters), Subscribe + Sign In + Search top-right.

**`section-nav`** — Horizontal sans 12/600 uppercase tracked links separated by ample whitespace. Hover: teal underline grows from below over 200ms.

### Decorative

**`section-rule`** — 1px dark rule.

**`hairline-rule`** — 1px `#d8d0a8` warm-gold rule between river stories. Calibrated for cream ground.

**`columnist-portrait`** — Round 64×64px portrait with `#ffffff` inset background, 1px warm-gold border. Used alongside columnist names — author-driven brand voice.

**`newsletter-cta`** — **Teal ground** (`#3a6d78`) with white headline ("Get our daily newsletter") and white-outline Subscribe button. 32px padding.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 120`
- Section padding: 64px between page bands; 32px on mobile
- Semaform block: 24×32px internal padding, 32px above and below

### Grid & Container

- Max content width: **1200px** centered on 12-column grid
- Reading column: **660px** (slightly wider than peers — the cream-paper warmth calls for breathing room)
- Feature container: **980px** for hero + sidebar pairings
- Footer: 4-column link list

### Whitespace Philosophy

Semafor runs **calmer-than-news**. Where Reuters and Bloomberg fill columns with continuous prose at high density, Semafor uses Semaform sub-sections, generous body line-height (1.65), and round columnist portraits to slow the page rhythm. The cream-paper warmth signals "this is meant to be read slowly" — a magazine-flavored editorial pace distinct from wire-service speed or smart-brevity bullets.

### Section Cadence

- Flagship (daily catch-up): cream ground with teal Flagship flag bar at top
- Semafor Africa: cream ground with rust-orange Africa flag bar
- Principals (DC politics): cream ground with teal Principals flag bar
- Net Zero (climate): cream ground with green Net Zero flag bar
- Technology / Business: cream ground with column-specific flag bars
- Media (Ben Smith): cream ground with red Media flag bar
- Gulf: cream ground with rust Gulf flag bar
- Newsletters: cream ground with teal newsletter signup ground

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0px | Cards, photos, sections, alerts, paywall, flag bars — magazine-broadsheet aesthetic |
| Micro | 2px | Buttons, text inputs |
| Standard | 4px | Modal corners, dropdown corners |
| Comfortable | 6px | Newsletter card |
| Pill | 9999px | Save-article chip, columnist portrait, audio play button |

Semafor sits in the **square magazine-broadsheet** camp with mild concessions. Buttons and inputs at 2px (between Bloomberg's 0px and Axios's 4px). The columnist portrait is a deliberate exception at full pill (round) — the portrait is the brand's author-voice signal.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Article body, hero, section bands |
| 1 — Hairline | 1px `#d8d0a8` rule | River cards, table rows |
| 2 — Section Rule | 1px `#1f1d1a` rule | Section break |
| 3 — White Insert | pure white onto cream | Photo, chart, data-table panels (borrowed from FT) |
| 4 — Flag Bar | 4px+ colored stripe | Column-front-page flag, article flag |
| 5 — Semaform Block | tinted-cream + teal left bar | The Semaform sub-sections |
| 6 — Brand Card | teal ground (`#3a6d78`) | Newsletter cards, paywall CTAs |
| 7 — Dropdown | `rgba(31,29,26,0.06) 0 2px 6px` | Account menu |
| 8 — Modal | `rgba(31,29,26,0.3) 0 16px 40px` | Paywall modal |

### Shadow Philosophy

Semafor's most distinctive depth tier is the **white insert on cream** — borrowed directly from the FT's salmon-and-white system but with cream instead of salmon. Photos, charts, and data tables lift onto pure-white surfaces inside the cream page, creating visual punctuation without shadows. Shadows themselves are cream-tinted (calibrated for cream harmony) and reserved for chrome.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)`
- **Out-soft**: `cubic-bezier(0.0, 0, 0.2, 1)`

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 100ms | Color swaps, hairline thickening |
| Standard | 200ms | Card hover, link underline grow, nav transitions |
| Slow | 320ms | Modal enter, paywall reveal |

### Per-Component Recipes

- **Card hover**: image scales 1.0 → 1.02 inside white insert; headline color shifts to teal (`#3a6d78`) over 200ms; subtle 1px teal underline grows under the headline.
- **Section-nav link hover**: teal underline grows from below over 200ms standard; active section gets persistent 2px teal underline.
- **Flag-bar appearance**: when scrolled into view on column-front-pages, the flag-bar fades in with a subtle scale(0.98 → 1.0) over 200ms.
- **Paywall modal enter**: scrim fades 0 → 0.6 dark alpha over 200ms; modal translates 16px to 0 + opacity 0 → 1 over 320ms emphasized.
- **Semaform block reveal**: when expanding inline, sub-section blocks fade in sequentially over 200ms each (THE NEWS → REPORTER'S VIEW → ROOM FOR DISAGREEMENT → NOTABLE).
- **Columnist portrait hover**: subtle 1.0 → 1.05 scale over 200ms.

### Page Transitions

200ms cross-fade. The cream canvas means the transition is visible-but-subtle (any other-canvas page would feel jarring against the cream).

### Reduced Motion

Card hovers degrade to color-only; flag-bar fade → instant; columnist portrait scale suppressed; transforms suppressed.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #1f1d1a body on #f8f5d7 cream | 13.0 | AAA |
| #ffffff on #3a6d78 (CTA) | 5.5 | AA / AAA large |
| #3a6d78 link on #f8f5d7 | 4.7 | AA body |
| #f8f5d7 cream on #1f1d1a (reverse) | 12.5 | AAA |
| #5a5651 muted on #f8f5d7 | 5.5 | AA |
| #7a756f soft on #f8f5d7 | 4.0 | AA large only |
| #2a8a4f Net Zero green on #ffffff (flag-on-white) | 4.5 | AA body |
| #c46b3a Africa rust on #ffffff | 4.0 | AA large |
| #a62d2d Media red on #ffffff | 5.5 | AA body |

### Focus Indicators

Focus ring: `2px solid #3a6d78` (Semafor teal) with 2px outline-offset. Teal pairs cleanly with both cream and dark grounds.

### ARIA Patterns

- **Flag bars**: `role="region"` with `aria-label="Semafor Africa column"` so screen readers announce the column context
- **Semaform sub-sections**: each `<section>` with `<h2>` for the sub-section label so screen readers announce "The News", "Reporter's view", "Room for disagreement", "Notable" as headings
- **Newsletter signup**: `role="region"` with `aria-label="Newsletter signup"`
- **Paywall modal**: `role="dialog"`, `aria-modal="true"`, focus trapped, Esc closes
- **Columnist portrait**: `aria-label="Photo of Ben Smith, columnist"`

### Keyboard Navigation

- Top nav: Tab moves Semafor wordmark → section nav → Subscribe → Sign in → Search
- Article body: Tab traverses links in reading order; Semaform sub-sections preserve linear reading
- Flag bars are focusable and announce column name on focus
- Skip-link first

### Screen Reader Hints

- Flag bars announce as "Section: Semafor Africa" with the column color described as semantic context (not chromatic detail)
- Semaform sub-section labels announce as section headings
- Photo credits announce as "Photo by [Name] / [Outlet]"
- Columnist names announce alongside portraits as part of the byline structure

### Reduced Motion

Card hovers degrade to color-only; flag-bar fade → instant; columnist portrait scale suppressed; transforms suppressed.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Masthead becomes hamburger + wordmark + Subscribe; section nav into hamburger; river cards 1-up; flag bars compress label to 11px; Semaform sub-section labels stay readable |
| Tablet | 640–1024px | Section nav as horizontal scroller; river cards 2-up |
| Desktop | 1024–1440px | Full section nav; river cards 3-up; sidebar appears on article pages |
| Wide | >1440px | Content caps at 1200px |

### Touch Targets

- Primary CTAs: 44×44px
- Section nav: 44px tap area
- Columnist portrait: 64×64px
- Flag bar: 44px tap target

### Collapsing Strategy

- Section nav becomes scroller, then hamburger
- Subscribe stays visible at all breakpoints
- River cards drop column count: 4 → 3 → 2 → 1
- Sidebar collapses below article body on tablet
- Flag bars hold their position at all breakpoints (the flag is brand-load-bearing)
- Columnist portraits stay round at all breakpoints

### Image Behavior

- River-card images: `aspect-ratio: 16/9` desktop, `4/3` mobile
- Hero images: full-bleed up to 980px on white inserts
- Photo essays: scroll-snap on touch surfaces
- Columnist portraits: round 64×64px desktop, 48×48px mobile

### Container Queries

Right-rail "Most read" list compresses to single-line truncate when narrow; flag bars adjust label tracking when narrow.

## 11. Content & Voice

### Tone

Considered, named-author-driven, globally-reportorial, magazine-flavored. Semafor's voice is calibrated for time-thoughtful readers — stories are author-bylined (named columnists with portraits), structured around the Semaform (news + reporter's view + contrasting view + context), and paced for slow reading. Headlines lead with the news + the take ("China's rare-earth squeeze: how Beijing's export curbs are testing US defense supply chains"); Semaform sub-sections add structure.

### Microcopy Patterns

- **Semaform branded labels**: "THE NEWS", "REPORTER'S VIEW", "ROOM FOR DISAGREEMENT", "NOTABLE" — uppercase sans 11/700 tracked 0.1em
- **Flag labels**: "FLAGSHIP", "SEMAFOR AFRICA", "PRINCIPALS", "NET ZERO", "TECHNOLOGY", "BUSINESS", "MEDIA", "GULF" — uppercase sans 13/700 tracked 0.08em
- **Subscribe verbs**: "Subscribe", "Sign up", "Continue", "Sign in"
- **Newsletter messages**: "Get our daily newsletter — Flagship in your inbox by 8AM ET"
- **Date format**: "Nov 5, 2024" — short US convention
- **Section labels in sans uppercase**: "POLITICS", "BUSINESS", "MEDIA"
- **Photo credit**: "PHOTO: REUTERS / DADO RUVIC" or "PHOTO: SEMAFOR" — agency-first attribution
- **Columnist intro**: portrait + "BEN SMITH" sans 17/700 + column name beneath in sans 12/500

### CTA Verb Conventions

- Primary: **"Subscribe"**, **"Sign up"**, **"Continue"**, **"Read"**
- Secondary: **"Save"**, **"Share"**, **"Listen"**
- Tertiary: **"More on this story"**, **"View all"**, **"More from [Columnist]"**
- Avoided: "Click here", "Submit", "Buy now", "Learn more"

### Empty States

- Saved articles: "Your saved articles will appear here. Subscribe to save unlimited articles."
- Search no results: "No stories match your search. Try different keywords or explore our columns."
- Newsletter archive: "No newsletters in this archive yet — subscribe to receive them."
- Columnist page empty: "No stories from this columnist yet — check back soon."

## 12. Dark Mode & Theming

Semafor supports a **system-level dark mode**. The token swap preserves the cream-on-dark reverse pairing:

- `bg`: `#1f1d1a` — dark charcoal (the same color used as text on cream)
- `surface`: `#1f1d1a`
- `surface-soft`: `#0d0c0a`
- `surface-quote`: `#2a2722`
- `text`: `#f8f5d7` — cream stays as the text color, preserving the brand reverse-pairing
- `text-strong`: `#ffffff`
- `text-muted`: `#d8d0a8`
- `text-soft`: `#a39e96`
- `brand`: `#7ab2bd` — teal lifts for AA on dark
- `link`: `#7ab2bd`
- `border`: `#3a3530`
- `border-rule`: `#f8f5d7` — section rules invert from dark to cream

The dark mode is itself the brand's reverse pairing — cream text on dark ground. This is the same inversion strategy as the FT's salmon-on-navy. Semafor preserves the cream-and-charcoal pairing in both directions.

## 13. Lineage & Influences

Semafor's visual lineage is **magazine-flavored editorial design** in the post-Twitter era. Founded 2022 by Ben Smith and Justin Smith, the brand was designed by Vanessa Saba (creative director) with typography commissioned from the Frere-Jones / Schwartz lineage (FeatureFlatHeadline).

The **paper-cream canvas** (`#f8f5d7`) is borrowed-but-distinct from the **FT's salmon-pink** (`#fff1e5`). Both brands reject white-canvas convention; Semafor's cream is warmer and closer to a magazine paper than the FT's stand-out pink. The white-insert pattern (photos and charts on pure-white surfaces inside the colored canvas) is also borrowed directly from the FT's playbook.

The **flag-style topic-column system** is borrowed from print magazine convention — *The New Yorker*'s departments ("Talk of the Town", "Profiles", "A Reporter at Large"), *The Atlantic*'s columns ("The Idea", "Dispatch"), *Time*'s sections — but ported to digital with explicit flag-bar graphics. The colored flags signal column identity at a glance, mirroring the way magazines use department-page-color-bands.

The **Semaform** (THE NEWS / REPORTER'S VIEW / ROOM FOR DISAGREEMENT / NOTABLE) is a Smith original — a structured-article format that emerged from his thinking about how to rebuild reader trust in named-author analysis after the post-2016 collapse of trust in mainstream news. The Semaform is editorial structure made visible through typography and sub-section labels.

What Semafor rejects: white-canvas convention (cream is the brand), broadsheet-conservative roman headlines (modest 370–500 weights are deliberate), bullet-only prose (Semafor uses Semaform sub-sections instead of Axios-style bullets), and Twitter-flavored hot-take voice (named columnists with portraits and Reporter's view labels signal slow journalism).

**Influences:**
- Ben Smith (founder) — editorial thesis and Semaform structure
- Vanessa Saba (creative director) — visual system architect
- Frere-Jones / Schwartz / Klim editorial-serif lineage — FeatureFlatHeadline parent
- Financial Times — paper-cream canvas (FT salmon-pink) and white-insert pattern
- The New Yorker / The Atlantic — magazine column-flag tradition — [newyorker.com](https://www.newyorker.com)
- The Economist — anonymous-leader tradition (Semafor inverts this with named columnist portraits)
- Bloomberg Businessweek — magazine-typography in news context

## 14. Do's and Don'ts

**Do**
- Use the paper-cream canvas (`#f8f5d7`) as the page background — it's the brand
- Set headlines in FeatureFlatHeadline at modest weight 370–500 — typographic restraint is brand voice
- Run body in FeatureFlatText at 18/1.65 in a 660px column over cream — generous line-height for slow reading
- Use Semafor teal (`#3a6d78`) for primary CTA, links, hover underlines, focus ring
- Use dark charcoal (`#1f1d1a`) for body text — calibrated warm-charcoal for cream harmony
- Lift photos and chart panels onto pure white surfaces inside the cream page (the white-insert pattern)
- Use the **flag-style topic-column system** — colored 4px+ horizontal stripes with uppercase sans 13/700 tracked 0.08em column labels
- Use the **Semaform** structure — THE NEWS / REPORTER'S VIEW / ROOM FOR DISAGREEMENT / NOTABLE — with tinted-cream blocks and teal left bar
- Use round columnist portraits (64×64px) with sans 17/700 columnist names — author-driven brand voice
- Use the cream-on-dark reverse pairing for paywall and dark mode
- Use italic FeatureFlatHeadline pull-quotes between two dark rules over cream — magazine-flavored decoration

**Don't**
- Don't use white as the page background — the cream is the brand
- Don't use absolute black `#000` for body — dark charcoal `#1f1d1a` is calibrated for cream
- Don't push display weight to 700+ — restraint at 370–500 is brand voice
- Don't put photos directly on the cream — lift them onto pure white inserts (the FT-borrowed pattern)
- Don't drop the flag bars — they're the brand's most-distinctive recurring graphic device
- Don't drop the Semaform structure — the labeled sub-sections are the brand's editorial signature
- Don't apply heavy shadows to article cards — depth comes from the white-on-cream contrast, the flag bars, and the Semaform blocks
- Don't use rounded card corners — magazine-broadsheet aesthetic is square (0px on cards/photos/flags)
- Don't use generic blue links — Semafor teal (`#3a6d78`) is the link color
- Don't drop the round columnist portraits — author-voice is brand-load-bearing
- Don't use "Click here", "Submit", "Buy now" — verbs are "Subscribe", "Sign up", "Continue"

## 15. Agent Prompt Guide

### Quick Color Reference

```
Paper-Cream:       #f8f5d7  (the canvas — observed bg color)
Dark-Charcoal:     #1f1d1a  (body text, dark rules — observed h1 color)
Semafor-Teal:      #3a6d78  (link, CTA, focus ring — observed link color)
Teal-Hover:        #2d5a64
White-Insert:      #ffffff  (for photos and charts inside the cream page)
Hairline:          #d8d0a8  (warm-gold rule, calibrated for cream)
Flag-Africa-Rust:  #c46b3a
Flag-Net-Zero-Green: #2a8a4f
Flag-Tech-Purple:  #5a4a8a
Flag-Media-Red:    #a62d2d
```

### Example Component Prompts

- "Create a Semafor article header on cream (#f8f5d7): **flag bar** above (4px teal #3a6d78 stripe with 'FLAGSHIP' label in white sans 13/700 uppercase tracked 0.08em); section label below in sans 11/600 uppercase tracked 0.1em ('POLITICS'); 1px dark rule below; headline in FeatureFlatHeadline 34/370 (the variable-font fractional weight) #1f1d1a with -0.005em tracking; italic FeatureFlatHeadline 19/400 deck; round 64×64px columnist portrait + sans 17/700 columnist name + sans 12/500 'Nov 5, 2024' dateline."
- "Build a Semafor **Semaform** article structure: four sub-section blocks each with **4px Semafor teal (#3a6d78) left bar**, tinted-cream backdrop (#f5f1c9), and 24×32px padding. Each sub-section opens with uppercase sans 11/700 tracked 0.1em label ('THE NEWS', 'REPORTER\\'S VIEW', 'ROOM FOR DISAGREEMENT', 'NOTABLE'), then FeatureFlatText 18/400 body. The Semaform turns the article into a labeled-structure artifact."
- "Design a Semafor flag bar for the Africa column: rust-orange (#c46b3a) ground, 4px+ horizontal stripe full-width, 8×16px padding, with 'SEMAFOR AFRICA' label in white sans 13/700 uppercase tracked 0.08em centered or left-aligned. The flag stripe + uppercase tracked label is the brand's most-distinctive recurring graphic device."
- "Create a Semafor primary CTA: teal fill (#3a6d78) with white text in sans 13/600 uppercase tracked 0.06em ('SUBSCRIBE'), 2px radius, 14×24px padding, 44px height. Hover: darkens to #2d5a64. Place over cream canvas (#f8f5d7)."
- "Build a Semafor pull-quote: italic FeatureFlatHeadline 30/1.3, dark charcoal (#1f1d1a) text, between two 1px dark rules at 24px vertical padding, over cream canvas (#f8f5d7). The cream ground gives the pull-out a magazine flavor — borrowed from the FT's italic-on-salmon convention but with cream instead."
- "Design a Semafor paywall modal with the **reverse pairing**: dark charcoal (#1f1d1a) ground, cream (#f8f5d7) text. Headline in cream FeatureFlatHeadline 26/500. Sub-copy in cream FeatureFlatText 16/400. White-outline 'Subscribe' button. Behind: 60% dark scrim. The cream-on-dark is the Semafor signature reverse — same strategy as FT's salmon-on-navy."

### Iteration Guide

1. **Start on cream, not white.** `#f8f5d7` is the page. White is reserved for photos and chart inserts (the FT-borrowed pattern).
2. **Modest display weights (370–500).** Don't push to 700 — that's NYT/WaPo. Semafor's lighter weight is editorial restraint and magazine-flavor.
3. **Photos lift onto white inserts.** Do not put photos directly on the cream — the white-insert pattern is the layout vocabulary.
4. **Flag bars are mandatory on column-front-pages and articles.** Each column has its own flag color (Flagship teal, Africa rust, Net Zero green, Tech purple, Media red). The flag stripe + uppercase tracked label is the brand's signature graphic device.
5. **Use the Semaform** for article structure: THE NEWS / REPORTER'S VIEW / ROOM FOR DISAGREEMENT / NOTABLE — tinted-cream blocks with teal left bars and uppercase sans labels.
6. **Generous body line-height (1.65).** Calibrated for slow reading on cream paper.
7. **Round columnist portraits with sans 17/700 names.** Author-driven brand voice — every story carries the columnist's portrait alongside the byline.
8. **Reverse pairing for paywall and dark mode.** Cream-on-dark — the Semafor signature inversion borrowed strategy from the FT's salmon-on-navy.
