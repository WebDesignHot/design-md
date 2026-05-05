---
name: Reuters
tagline: Global newswire restraint — signature orange (`#ff8000`), Knowledge Medium custom sans, broadsheet rigor for the world''s oldest news agency.
author: webdesignhot
source_url: https://www.reuters.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media]
tags: [editorial, sans, dense, news, wire-service, orange, light, structured]
preview_swatch: ['#ffffff', '#ff8000', '#404040']
related: [ft, nytimes, bloomberg]
description: 'Reuters is the world''s oldest news agency (founded 1851 by Paul Reuter in London). The web product carries 175 years of wire-service restraint: pure-white canvas, the signature Reuters orange (`#ff8000`) reserved for primary action and the brand square logo, and a custom sans typeface family — Knowledge — that does all editorial and chrome work in a single voice. Where Bloomberg runs terminal-orange and the FT runs salmon-pink-broadsheet, Reuters runs **wire-service neutral** — minimal chromatic decoration, tight broadsheet column rhythm, and a typographic system that emphasizes legibility over personality. The signature 1×1 orange square (the Reuters Mark) sits next to the wordmark on every page; the square is the brand''s most-identifying decision and has been in use since 1968 (designed by FHK Henrion). Dense river-of-news layout, dateline-first byline convention ("BANGKOK, Nov 5 — "), and the agency''s commitment to neutral language port to the visual system as a chromatic and typographic neutrality.'

colors:
  bg: '#ffffff'                  # editorial reading canvas
  bg-section: '#ffffff'           # all sections share white
  bg-section-business: '#ffffff'
  bg-section-markets: '#ffffff'
  bg-section-tech: '#ffffff'
  bg-dark: '#1a1a1a'              # dark sub-band, paywall, footer
  bg-darkest: '#0d0d0d'
  surface: '#ffffff'
  surface-soft: '#f5f5f5'         # Reuters gray panel
  surface-strong: '#e8e8e8'       # disabled fill, table-row alternate
  surface-quote: '#fff5e6'        # warm pull-quote backdrop
  surface-orange-tint: '#fff2e0'   # selected nav, active state tint
  text: '#1a1a1a'                 # primary text
  text-strong: '#000000'
  text-muted: '#404040'             # observed h1 color rgb(64,64,64) — bylines, datelines
  text-soft: '#666666'              # captions
  text-faint: '#999999'             # disabled
  text-on-orange: '#000000'         # black text on orange — high contrast
  text-on-dark: '#ffffff'
  brand: '#ff8000'                 # the iconic Reuters orange — used in the brand square logo and primary CTAs
  brand-hover: '#e67000'
  brand-active: '#cc6300'
  brand-soft: '#ffe5cc'             # tint surface
  brand-deep: '#a35200'             # darkest orange
  brand-square: '#ff8000'           # the Reuters Mark — 1×1 orange square next to the wordmark
  link: '#ff8000'                  # Reuters orange as inline link color
  link-hover: '#e67000'
  link-visited: '#666666'
  link-on-dark: '#ff8000'
  on-brand: '#000000'               # black on orange — high-contrast pairing
  on-dark: '#ffffff'
  border: '#e0e0e0'                # default hairline
  border-soft: '#f0f0f0'
  border-strong: '#999999'
  border-rule: '#1a1a1a'             # dark section rule
  border-orange: '#ff8000'           # active state border
  shadow-card: 'rgba(0,0,0,0.06)'
  shadow-elev: 'rgba(0,0,0,0.1)'
  shadow-modal: 'rgba(0,0,0,0.3)'
  scrim: 'rgba(0,0,0,0.6)'
  success: '#2ea44f'                  # green for "up" market data
  success-soft: '#e1f1e7'
  warning: '#cc7a00'                  # amber for advisory
  warning-soft: '#fde9cc'
  danger: '#cc1a1a'                   # red for "down" market data, breaking news, form errors
  danger-soft: '#fbe1e2'
  info: '#0066b8'                     # rare blue accent
  info-soft: '#cfe7f5'
  market-up: '#2ea44f'                # green for positive movements
  market-down: '#cc1a1a'              # red for negative movements
  market-neutral: '#666666'           # gray for unchanged
  breaking-red: '#cc1a1a'              # breaking news indicator
  live-red: '#cc1a1a'                  # live blog dot

typography:
  display:
    family: '"knowledge-medium", "Knowledge Medium", Arial, "Helvetica Neue", Helvetica, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['liga', 'kern']
  headline:
    family: '"knowledge-medium", "Knowledge Medium", Arial, sans-serif'
    weights: [500, 600, 700]
  body:
    family: '"knowledge-regular", "Knowledge Regular", Arial, "Helvetica Neue", Helvetica, sans-serif'
    weights: [400, 500, 700]
  ui:
    family: '"knowledge-medium", Arial, "Helvetica Neue", Helvetica, sans-serif'
    weights: [500, 600, 700]
  serif:
    family: 'Georgia, "Times New Roman", Times, serif'
    weights: [400, 700]
  mono:
    family: '"knowledge-mono", Menlo, Consolas, "Courier New", monospace'
    weights: [400, 500]
  scale:
    masthead-wordmark:   { size: 28, weight: 700, lineHeight: 1.0,  tracking: '-0.01em', family: display, opentype: ['liga'] }
    headline-mega:       { size: 52, weight: 700, lineHeight: 1.07, tracking: '-0.02em', family: headline }
    headline-jumbo:      { size: 40, weight: 700, lineHeight: 1.1,  tracking: '-0.015em', family: headline }
    headline-xl:         { size: 30, weight: 700, lineHeight: 1.13, tracking: '-0.005em', family: headline }
    headline-lg:         { size: 24, weight: 700, lineHeight: 1.18, tracking: '0',         family: headline }
    headline-md:         { size: 20, weight: 600, lineHeight: 1.22, tracking: '0',         family: headline }
    headline-sm:         { size: 17, weight: 600, lineHeight: 1.25, tracking: '0',         family: headline }
    deck:                { size: 18, weight: 400, lineHeight: 1.4,  tracking: '0',         family: body }
    body-md:             { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    body-sm:             { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    pull-quote:          { size: 28, weight: 500, lineHeight: 1.3,  tracking: '0',         family: headline }
    byline:              { size: 13, weight: 600, lineHeight: 1.3,  tracking: '0',         family: ui }
    dateline:            { size: 12, weight: 700, lineHeight: 1.3,  tracking: '0.04em',    family: ui, transform: uppercase }
    section-label:       { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.1em',     family: ui, transform: uppercase }
    nav-link:            { size: 13, weight: 600, lineHeight: 1.0,  tracking: '0.04em',    family: ui, transform: uppercase }
    button-label:        { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.06em',    family: ui, transform: uppercase }
    caption:             { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',         family: ui }
    photo-credit:        { size: 11, weight: 500, lineHeight: 1.3,  tracking: '0.04em',    family: ui, transform: uppercase }
    micro-meta:          { size: 11, weight: 500, lineHeight: 1.2,  tracking: '0.04em',    family: ui, transform: uppercase }
    market-ticker:       { size: 13, weight: 600, lineHeight: 1.0,  tracking: '0',         family: mono, opentype: ['tnum'] }
    data-tabular:        { size: 14, weight: 500, lineHeight: 1.3,  tracking: '0',         family: mono, opentype: ['tnum'] }

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
  page-width: 1280
  prose-width: 640
  feature-width: 1024
  header-height: 64
  masthead-rule-weight: 1
  section-rule-weight: 1
  hairline-weight: 1
  reuters-square-size: 32

components:
  reuters-mark:
    bg: '#ff8000'
    color: 'transparent'
    radius: 0
    width: 32
    height: 32
    use: 'The Reuters Mark — 1×1 orange square placed next to the "Reuters" wordmark. Designed by FHK Henrion 1968, the most-identifying brand asset.'
  button-primary:
    bg: '#ff8000'
    color: '#000000'
    radius: 2
    padding: '14px 24px'
    height: 44
    font: button-label
    use: 'Subscribe, Sign in — primary CTA. Reuters orange fill with black text — the brand signature pairing.'
  button-primary-hover:
    bg: '#e67000'
    color: '#000000'
    use: 'Pointer-down on orange CTAs.'
  button-secondary:
    bg: 'transparent'
    color: '#1a1a1a'
    border: '1px solid #1a1a1a'
    radius: 2
    padding: '14px 24px'
    height: 44
    use: 'Already a subscriber, secondary actions.'
  button-text-link:
    bg: 'transparent'
    color: '#ff8000'
    use: 'Inline body links — orange text with subtle underline on hover.'
  card-headline:
    bg: '#ffffff'
    color: '#1a1a1a'
    radius: 0
    border: 'top 1px solid #e0e0e0'
    use: 'Default river card. Knowledge Medium 20/600 headline, Knowledge Regular 16/400 deck, uppercase Knowledge Medium 12/700 dateline ("BANGKOK, Nov 5") then byline.'
  card-photo:
    bg: '#ffffff'
    color: '#1a1a1a'
    radius: 0
    use: 'Photo card with image-above + headline below; 16:9 aspect ratio.'
  card-markets-data:
    bg: '#ffffff'
    color: '#1a1a1a'
    radius: 0
    border: '1px solid #e0e0e0'
    use: 'Markets data table — tabular knowledge-mono numerics with green/red up/down columns.'
  card-breaking:
    bg: '#ffffff'
    color: '#cc1a1a'
    radius: 0
    border: 'left 4px solid #cc1a1a'
    use: 'Breaking news card with red left bar — Knowledge Medium 22/700 red headline.'
  pull-quote:
    bg: 'transparent'
    color: '#1a1a1a'
    border: 'left 4px solid #ff8000'
    padding: '24px 32px'
    use: 'Pull-quote with 4px Reuters orange left bar. Knowledge Medium 28/500.'
  text-input:
    bg: '#ffffff'
    color: '#1a1a1a'
    radius: 2
    height: 44
    padding: '12px 14px'
    border: '1px solid #999999'
    focus: 'border thickens to 2px Reuters orange'
    use: 'Email entry, search input.'
  paywall-cta:
    bg: '#1a1a1a'
    color: '#ffffff'
    padding: '40px 32px'
    use: 'Dark ground paywall with orange Subscribe button. Reverse pairing for emphasis.'
  nav-section-link:
    color: '#1a1a1a'
    font: nav-link
    padding: '14px 12px'
    use: 'Section nav (World, Business, Markets, Sustainability, Legal, Tech). Hover: orange underline grows from below.'
  market-ticker:
    bg: '#1a1a1a'
    color: '#ffffff'
    padding: '8px 12px'
    use: 'Live ticker bar — dark ground with white labels and tabular knowledge-mono numerals; up cells flash green, down flash red.'
  edition-selector:
    bg: 'transparent'
    color: '#1a1a1a'
    font: nav-link
    use: 'Top-right edition picker (US, UK, Asia, EMEA) — minimal text dropdown.'
  breaking-banner:
    bg: '#cc1a1a'
    color: '#ffffff'
    radius: 0
    padding: '8px 16px'
    font: section-label
    use: 'Breaking news banner — red ground with white "BREAKING NEWS" label and headline.'
  live-indicator:
    bg: 'transparent'
    color: '#cc1a1a'
    use: 'Red dot + "LIVE" label — used on live blogs and breaking news streams.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out-soft: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 320
  market-tick-flash: 'green/red ticker cell flashes 240ms on price update — flash bg is green/red at 0.35 alpha, fades to neutral over 240ms'
  card-hover: 'image scales 1.0 → 1.02; headline color shifts to orange over 200ms; subtle 1px orange underline grows under headline'
  reduced-motion: 'respects prefers-reduced-motion: reduce — market-tick flash becomes instant color set, transforms suppressed; ticker scrollers pause; live-indicator pulse suppressed.'

breakpoints:
  mobile: 640
  tablet: 768
  desktop: 1024
  wide: 1440

shadows:
  ambient: 'rgba(0,0,0,0.04) 0 1px 2px'
  standard: 'rgba(0,0,0,0.06) 0 2px 6px'
  elevated: 'rgba(0,0,0,0.1) 0 8px 20px'
  deep: 'rgba(0,0,0,0.3) 0 16px 40px'
  ring: '0 0 0 2px #ff8000'

accessibility:
  contrast-text-on-bg: 16.0                # #1a1a1a on #ffffff — AAA at body sizes
  contrast-text-on-orange: 9.5              # #000000 on #ff8000 — AAA — black-on-orange is the brand pairing
  contrast-link-on-bg: 3.4                  # #ff8000 on #ffffff — AA large only; pairs underline + bold weight at body
  contrast-text-on-dark: 13.5               # #ffffff on #1a1a1a — AAA
  contrast-muted-on-bg: 9.7                 # #404040 on #ffffff — AAA
  focus-ring: '2px solid #ff8000 (Reuters orange) + 2px outline-offset'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab moves edition selector → masthead → primary nav → utility (Subscribe, Sign in, Search). Skip-link first.'

dark-mode: optional
colors-dark:
  bg: '#0d0d0d'
  surface: '#1a1a1a'
  surface-soft: '#262626'
  surface-strong: '#333333'
  text: '#ffffff'
  text-strong: '#ffffff'
  text-muted: '#b3b3b3'
  text-soft: '#8a8a8a'
  brand: '#ff8000'                 # orange holds — signature color is mode-independent
  link: '#ff8000'
  border: '#333333'
  border-rule: '#ff8000'
---

## 1. Visual Theme & Atmosphere

Reuters is the **oldest news agency in continuous operation** (founded 1851 in London by Paul Reuter, who used carrier pigeons to bridge the telegraph gap between Aachen and Brussels). 175 years of wire-service restraint inform every visual decision: pure-white canvas, signature Reuters orange (`#ff8000`) reserved for primary action and the brand square, and a single typographic voice — the custom **Knowledge** sans family — that handles all editorial and chrome work without face-mixing. Where Bloomberg runs terminal-orange and the FT runs salmon-pink-broadsheet, Reuters runs **wire-service neutral**: minimal chromatic decoration, tight broadsheet column rhythm, and a typographic system that emphasizes legibility over personality.

The **Reuters Mark** — a 1×1 orange square (`#ff8000`) sitting next to the "Reuters" wordmark — is the brand's most-identifying decision and has been in use since 1968 (designed by FHK Henrion). The mark is rectilinear, exactly 1:1 aspect, with no rounding, no gradient, no decoration. It functions as a logo, a content marker, and a directional arrow toward the news. On the web product, the mark sits in the masthead at 32×32px and reappears at smaller sizes throughout chrome (favicon, share targets, app icons). The square is the brand.

Type sets in **Knowledge** — a custom commission designed for Reuters by Klim Type Foundry's Kris Sowersby (the same type designer who drew the FT's Financier and Metric, plus countless other major-publication faces). Knowledge has three cuts the website uses: knowledge-medium for headlines, knowledge-regular for body, and knowledge-mono for tabular data. The single-family discipline is unusual in news design — most peers use a serif/sans pairing — but Reuters's wire-service neutrality calls for a single-voice system.

The chromatic system is **white + black + orange**, with red reserved for breaking news and "down" market data, green for "up" market data. The orange is used sparingly: primary CTAs, inline links, hover underlines, focus rings, and the brand square. Pure black-on-white body sets the broadsheet aesthetic. Section navigation, byline meta, and photo credits all run in uppercase Knowledge Medium with tracked letter-spacing — the agency's wire-service typographic vocabulary.

Density is wire-service rhythm. Reuters's homepage runs a tight river-of-news pattern with dateline-first bylines ("BANGKOK, Nov 5 — ") that announce the bureau location before the story — a 175-year-old wire-service convention. Live tickers, breaking-news banners, and tabular data tables port from the trading-floor agency product (Reuters/Refinitiv) to the consumer reading product. The page is functional, not decorative.

**Key Characteristics:**
- **Reuters orange (`#ff8000`)** — signature CTA color, brand square mark, link color, focus ring
- **The Reuters Mark** — 1×1 orange square (FHK Henrion, 1968) — the brand's most-identifying asset
- **Single-family Knowledge sans** (Klim/Sowersby) — medium for headlines, regular for body, mono for data
- Pure-white canvas (`#ffffff`) — broadsheet weight, no warming
- Black text (`#1a1a1a`) — slight warm-black calibration
- Dateline-first byline convention ("BANGKOK, Nov 5 — ") — 175-year wire-service inheritance
- Square broadsheet aesthetic — 0px radius on cards, 2px on inputs only
- Tabular knowledge-mono numerals (`tnum`) on every market context
- Green-up / red-down market-data convention with ticker-cell flash
- Breaking news banner — red ground with white uppercase Knowledge Medium label
- Edition selector (US / UK / Asia / EMEA) — global newswire signal
- Black-on-orange CTA pairing — high-contrast brand reverse

## 2. Color Palette & Roles

### Primary
- **White Canvas** (`#ffffff`): editorial reading ground — pure broadsheet white
- **Reuters Orange** (`#ff8000`): the signature brand color since 1968. Brand square mark, primary CTA, inline link, hover underline, focus ring.
- **Black Body** (`#1a1a1a`): primary text — slightly warm-black

### Brand & Sub-Brand
- **Brand Orange** (`#ff8000`)
- **Orange Hover** (`#e67000`)
- **Orange Active** (`#cc6300`)
- **Orange Soft** (`#ffe5cc`) — selected nav background, badge tint
- **Orange Deep** (`#a35200`) — heaviest orange for icons
- **Brand Square** (`#ff8000`) — the FHK Henrion 1968 mark
- **Dark Sub-Band** (`#1a1a1a`) — paywall, footer, market ticker
- **Dark Sub-Band Heaviest** (`#0d0d0d`)
- **Breaking Red** (`#cc1a1a`) — breaking news banner

### Accent
- **Editorial Link Orange** (`#ff8000`) — inline body links use brand orange
- **Link Hover** (`#e67000`)
- **Link Visited** (`#666666`) — visited dims to muted gray

### Interactive
- **Default Link** (`#ff8000` text + underline-on-hover)
- **Active CTA** (orange fill on black text — the reverse pairing)
- **Disabled** (`#999999` text, `#e8e8e8` fill)
- **Selected** (orange-soft chip with orange text)

### Neutral Scale
- **Warm Black** (`#1a1a1a`) — body, headlines (slight warming for harmony with orange)
- **Strong Black** (`#000000`) — pure black for max-contrast headline display
- **Muted** (`#404040`) — bylines, datelines (matches observed h1 color rgb(64,64,64))
- **Soft** (`#666666`) — captions, photo credits
- **Faint** (`#999999`) — disabled
- **Hairline** (`#e0e0e0`) — universal 1px rule

### Surface & Borders
- **White Canvas** (`#ffffff`)
- **Surface Soft** (`#f5f5f5`) — Reuters gray panel, table-row alternate
- **Surface Strong** (`#e8e8e8`) — disabled fill
- **Surface Quote** (`#fff5e6`) — warm pull-quote backdrop
- **Surface Orange Tint** (`#fff2e0`) — selected nav, active state tint
- **Hairline** (`#e0e0e0`)
- **Border Strong** (`#999999`) — form input border
- **Border Rule** (`#1a1a1a`) — dark section rule
- **Border Orange** (`#ff8000`) — active state border, focus ring

### Shadow Colors
Shadows are **neutral black-tinted**, kept light. Reuters favors flat broadsheet over elevated UI:
- `rgba(0,0,0,0.04) 0 1px 2px` — minimal ambient
- `rgba(0,0,0,0.06) 0 2px 6px` — dropdown
- `rgba(0,0,0,0.1) 0 8px 20px` — overlay
- `rgba(0,0,0,0.3) 0 16px 40px` — modal

### Semantic
- **Success / Market Up** (`#2ea44f` on `#e1f1e7`) — green for "up" market data
- **Warning** (`#cc7a00` on `#fde9cc`) — amber for advisory
- **Danger / Market Down / Breaking** (`#cc1a1a` on `#fbe1e2`) — red for breaking news, "down" market data, form errors
- **Info** (`#0066b8` on `#cfe7f5`) — rare blue accent (only used on legal-section advisories)
- **Market Neutral** (`#666666`) — gray for unchanged market data

## 3. Typography Rules

### Font Family

**Display & Headline**: `knowledge-medium` — a custom commission for Reuters by Klim Type Foundry's Kris Sowersby. Knowledge is a humanist sans optimized for narrow column widths and small reading sizes (the legacy of wire-service typography). Available in 400, 500, 600, 700. Fallback: `Arial, "Helvetica Neue", Helvetica, sans-serif`.

**Body**: `knowledge-regular` — the body-text companion to knowledge-medium. Available in 400, 500, 700. Fallback: `Arial, "Helvetica Neue", Helvetica, sans-serif`.

**UI**: `knowledge-medium` — same face used for navigation, button labels, bylines, and section labels. Single-face system means UI shares the editorial voice.

**Mono**: `knowledge-mono` — used on market data, tickers, and code. Tabular figures (`tnum`) are mandatory for column-aligned numerics. Fallback: `Menlo, Consolas, "Courier New", monospace`.

**Serif**: System serif fallback only (`Georgia, "Times New Roman", Times, serif`) — used rarely on legacy long-form features.

**OpenType features**: knowledge-medium uses standard ligatures and tightly-tuned kerning at display sizes. knowledge-mono uses **tabular figures (`tnum`)** universally on market tickers, data tables, and price displays — wire-service convention demands column alignment for financial data.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| masthead-wordmark | knowledge-medium | 28 | 700 | 1.0 | -0.01em | liga, kern | "Reuters" wordmark |
| headline-mega | knowledge-medium | 52 | 700 | 1.07 | -0.02em | — | Cover-class headline |
| headline-jumbo | knowledge-medium | 40 | 700 | 1.1 | -0.015em | — | Top-of-fold lead |
| headline-xl | knowledge-medium | 30 | 700 | 1.13 | -0.005em | — | Above-fold secondary |
| headline-lg | knowledge-medium | 24 | 700 | 1.18 | 0 | — | River lead |
| headline-md | knowledge-medium | 20 | 600 | 1.22 | 0 | — | River sub |
| headline-sm | knowledge-medium | 17 | 600 | 1.25 | 0 | — | Compact module |
| deck | knowledge-regular | 18 | 400 | 1.4 | 0 | — | Standfirst |
| body-md | knowledge-regular | 18 | 400 | 1.55 | 0 | — | Default running text |
| body-sm | knowledge-regular | 16 | 400 | 1.5 | 0 | — | Compact card body |
| pull-quote | knowledge-medium | 28 | 500 | 1.3 | 0 | — | Pull-quote with orange left bar |
| byline | knowledge-medium | 13 | 600 | 1.3 | 0 | — | "By Andrew MacAskill" |
| dateline | knowledge-medium | 12 | 700 | 1.3 | 0.04em | uppercase | "BANGKOK, NOV 5 —" |
| section-label | knowledge-medium | 11 | 700 | 1.0 | 0.1em | uppercase | "WORLD" / "BUSINESS" / "MARKETS" |
| nav-link | knowledge-medium | 13 | 600 | 1.0 | 0.04em | uppercase | "World" / "Markets" |
| button-label | knowledge-medium | 14 | 700 | 1.0 | 0.06em | uppercase | "SUBSCRIBE" / "SIGN IN" |
| caption | knowledge-medium | 13 | 400 | 1.4 | 0 | — | Photo / chart caption |
| photo-credit | knowledge-medium | 11 | 500 | 1.3 | 0.04em | uppercase | "REUTERS / DADO RUVIC" |
| micro-meta | knowledge-medium | 11 | 500 | 1.2 | 0.04em | uppercase | "5 MIN READ" |
| market-ticker | knowledge-mono | 13 | 600 | 1.0 | 0 | tnum | "S&P 500 5,847.87 +0.42%" |
| data-tabular | knowledge-mono | 14 | 500 | 1.3 | 0 | tnum | Markets table cell |

### Principles

- **Single-family discipline.** Knowledge handles every typographic role — headlines, body, UI, data. The wire-service neutrality calls for one voice; Klim's Knowledge family is built for that role.
- **Dateline-first byline convention.** "BANGKOK, Nov 5 — " sits at the start of the byline in uppercase Knowledge Medium tracked 0.04em — a 175-year-old wire-service inheritance signaling bureau location.
- **Tabular numerals on every market context.** knowledge-mono with `tnum` enabled — column alignment is load-bearing for financial data.
- **Headlines lean weight 700.** Reuters runs heavier display weights than Bloomberg or FT — the agency's authority is signaled through bold sans, not restrained-medium.
- **Negative tracking on display sizes.** -0.005em → -0.02em on headlines; tracking grows toward 0 as size shrinks. Tracked uppercase (0.04em–0.1em) reserved for section labels and button labels.
- **Warm black, not absolute.** Body text is `#1a1a1a` — slightly warmed from pure black for harmony with the Reuters orange.
- **Orange-as-link.** Inline editorial links are orange, not blue. The orange-as-link is the brand signature.
- **Sans for everything.** No serif except as legacy fallback. The wire-service product is sans-only.

## 4. Component Stylings

### The Reuters Mark

**`reuters-mark`** — A 1×1 orange square (`#ff8000`), 32×32px in masthead, with no decoration. The mark sits to the left of the "Reuters" wordmark. Designed by FHK Henrion in 1968, it has been the brand's most-identifying asset for 57 years. The mark also appears as favicon (32×32), app icon, and share-target icon — always 1:1 aspect, always pure orange, always 0px radius.

### Buttons

**`button-primary`** — Reuters orange fill (`#ff8000`), black text in knowledge-medium 14/700 uppercase tracked 0.06em, 2px radius, 14×24px padding, 44px height. The orange fill with black text is the brand reverse pairing — high-contrast and identifying. Press: darkens to `#e67000`.

**`button-secondary`** — Transparent fill, dark text, 1px black border, 2px radius. "Already a subscriber? Sign in" over white.

**`button-text-link`** — Plain orange text (`#ff8000`), no surface, no border. Subtle underline grows on hover.

### Cards

**`card-headline`** — White surface, 0px radius, top 1px hairline (`#e0e0e0`), no shadow. Knowledge Medium 20/600 headline, Knowledge Regular 16/400 deck, uppercase Knowledge Medium 12/700 dateline ("BANGKOK, NOV 5 —"), then Knowledge Medium 13/600 byline.

**`card-photo`** — Image-above + headline below, 16:9 aspect ratio. The image fills full card width.

**`card-markets-data`** — Pure white surface, 1px hairline border, alternating-row tint for legibility. Tabular knowledge-mono numerics with green-up / red-down columns.

**`card-breaking`** — White surface with **4px red left bar** (`#cc1a1a`). Knowledge Medium 22/700 red headline. Used on breaking news cards in the river.

### Pull-Quote

**`pull-quote`** — White ground with **4px Reuters orange left bar** (`#ff8000`). Knowledge Medium 28/500, no italic. The orange bar marks the pull-out — wire-service typographic vocabulary extends to pull-quotes (no serif, no italic, single sans voice).

### Inputs / Forms

**`text-input`** — White surface, 1px `#999999` border, 2px radius (the only place radius creeps above 0), 44px height, 12×14px padding. Focus: border thickens to 2px Reuters orange (`#ff8000`).

**`paywall-cta`** — **Dark ground** (`#1a1a1a`) with white headline, orange Subscribe button, Knowledge Medium 28/700 headline. The dark-ground reverse pairing is reserved for paywall and footer.

### Navigation

**`top-nav`** — White surface, 64px height, with the **Reuters Mark + wordmark** centered or left-aligned. Edition selector top-right (US / UK / Asia / EMEA), Subscribe + Sign In + Search.

**`section-nav`** — Horizontal Knowledge Medium 13/600 uppercase tracked links (`World`, `Business`, `Markets`, `Sustainability`, `Legal`, `Tech`, `Sports`). Hover: orange underline grows from below over 200ms standard.

**`market-ticker-bar`** — **Dark ground** (`#1a1a1a`) with white labels and tabular knowledge-mono numerals scrolling green-up / red-down market data. Cell flashes on price update over 240ms.

### Decorative

**`section-rule`** — 1px dark rule.

**`hairline-rule`** — 1px `#e0e0e0` gray rule between river stories.

**`breaking-banner`** — Red ground (`#cc1a1a`) with white "BREAKING NEWS" label in knowledge-medium 11/700 uppercase tracked 0.1em, then headline in white knowledge-medium 16/700.

**`live-indicator`** — Red dot (`#cc1a1a`) + "LIVE" label in red knowledge-medium 11/700 uppercase. Used on live-blogs and breaking news streams.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 120`
- Section padding: 64px between page bands; 32px on mobile
- Card internal: 16px between image and headline; 8px between headline and deck

### Grid & Container

- Max content width: **1280px** centered on 12-column grid
- Reading column: **640px** for article body
- Feature container: **1024px** for hero + sidebar pairings
- Markets data: 1280px full-width tabular grid
- Footer: 5-column link list

### Whitespace Philosophy

Reuters runs **functional density** — wire-service rhythm calls for many headlines visible per screen, with tight column rhythm and minimal decoration. The page exists to deliver news, not to perform restraint or generosity. The single chromatic accent (orange) and the single typographic voice (Knowledge) keep visual noise low while density stays high.

### Section Cadence

- World / Business / Markets / Sustainability / Legal / Tech / Sports: white canvas with hairline-separated cards
- Breaking news: red-bar cards in the river
- Live blogs: white canvas with red live indicator
- Markets: white canvas with dark-ground ticker and tabular data tables
- Investigations / Special reports: white canvas with feature-format hero

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0px | Cards, photos, sections, alerts, paywall, the Reuters Mark — broadsheet aesthetic |
| Micro | 2px | Buttons, text inputs |
| Standard | 4px | Modal corners, dropdown corners |
| Pill | 9999px | Save-article chip, audio play button — only when icon is round |

Reuters sits in the **square broadsheet** camp, with the smallest concession to ergonomics: 2px on buttons and inputs (between Bloomberg's 0px and the FT's 4px). The Reuters Mark itself is mandatory 0px — the orange square has no rounding ever.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Article body, hero, section bands, masthead, ticker |
| 1 — Hairline | 1px `#e0e0e0` rule | River cards, table rows |
| 2 — Section Rule | 1px `#1a1a1a` rule | Section break |
| 3 — Brand Bar | 4px orange or red left bar | Pull-quotes, breaking-news cards |
| 4 — Dropdown | `rgba(0,0,0,0.06) 0 2px 6px` | Account menu, edition selector |
| 5 — Overlay | `rgba(0,0,0,0.1) 0 8px 20px` | Search overlay |
| 6 — Modal | `rgba(0,0,0,0.3) 0 16px 40px` | Paywall modal |

### Shadow Philosophy

Reuters's depth is **flat-broadsheet by default**. Depth signals come from chromatic accents (orange or red left bars on cards) and from chromatic bands (dark masthead, dark ticker, dark paywall), not from shadow elevation. Shadows are neutral black-tinted at low alpha and reserved for chrome (dropdowns, modals).

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
| Tick Flash | 240ms | Market ticker price-update flash |

### Per-Component Recipes

- **Card hover**: image scales 1.0 → 1.02; headline color shifts to orange (`#ff8000`) over 200ms; subtle 1px orange underline grows under the headline.
- **Market ticker tick flash**: when a price updates, the cell flashes background green (`#2ea44f`) or red (`#cc1a1a`) at 0.35 alpha for 240ms, then fades to neutral.
- **Section-nav link hover**: orange underline grows from below over 200ms standard; active section gets persistent 2px orange underline.
- **Edition-selector dropdown**: scale(0.96 → 1.0) + opacity(0 → 1) over 200ms standard.
- **Paywall modal enter**: scrim fades 0 → 0.6 black alpha over 200ms; modal translates 16px to 0 + opacity 0 → 1 over 320ms emphasized.
- **Breaking-news banner appearance**: slides down from top over 320ms emphasized; pulses subtly (1.0 → 1.02 scale) once on first display.
- **Live indicator**: red dot pulses 1.0 → 1.4 → 1.0 over 1000ms; suppressed when reduced motion is honored.

### Page Transitions

200ms cross-fade. Masthead and Reuters Mark persist across page transitions for brand continuity.

### Reduced Motion

Market ticker flash → instant color set; ticker scrollers pause; live-indicator pulse suppressed; breaking-news banner appears without slide-down (just fade); card hovers degrade to underline-only; transforms suppressed.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #1a1a1a body on #ffffff | 16.0 | AAA |
| #000000 on #ff8000 (CTA) | 9.5 | AAA |
| #ffffff on #1a1a1a (dark) | 13.5 | AAA |
| #ff8000 on #ffffff (link) | 3.4 | AA large only — pairs with bold weight + underline at body |
| #ff8000 on #1a1a1a | 4.0 | AA |
| #404040 muted on #ffffff | 9.7 | AAA |
| #2ea44f success on #ffffff | 3.5 | AA large |
| #cc1a1a danger on #ffffff | 6.4 | AAA body |
| #ffffff on #cc1a1a (banner) | 6.4 | AAA body |

### Focus Indicators

Focus ring: `2px solid #ff8000` (Reuters orange) with 2px outline-offset. Orange pairs cleanly with both white and dark grounds.

### ARIA Patterns

- **Market ticker**: `role="region"` with `aria-label="Live market data"` and `aria-live="polite"` so significant price changes announce
- **Edition selector**: `role="combobox"`, `aria-haspopup="listbox"`, edition options as `role="option"`
- **Paywall modal**: `role="dialog"`, `aria-modal="true"`, focus trapped, Esc closes
- **Breaking news banner**: `role="alert"`, `aria-live="assertive"`
- **Live blog**: `role="feed"`, new entries `aria-live="polite"`
- **Up/Down market data**: cells use `aria-label="Up 0.42 percent"` rather than relying on the green color alone

### Keyboard Navigation

- Top nav: Tab moves Reuters Mark + wordmark → section nav → Subscribe → Sign in → Search → Edition selector
- Section nav: Tab traverses sections left-to-right
- Market data table: Tab moves cell-to-cell; arrow keys also navigate
- Skip-link first

### Screen Reader Hints

- Reuters Mark announces as "Reuters" (the orange square is named, not described as "orange square")
- Market ticker cells announce direction explicitly ("Up 0.42 percent")
- Photo credits announce as "Photo by [Photographer] / Reuters"
- Edition selector announces "United States edition selected"
- Breaking news banner announces as "Breaking news: [headline]"
- Datelines announce as "Bangkok, November 5" (uppercase formatting is visual only)

### Reduced Motion

Market ticker flash → instant color set; ticker scrollers pause; live-indicator pulse suppressed; breaking-banner slide → fade; card hovers → color-only.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Edition bar collapses; masthead becomes Reuters Mark + hamburger + Subscribe; section nav into hamburger; river cards 1-up; market ticker compresses to a horizontal scroller |
| Tablet | 640–1024px | Section nav as horizontal scroller; river cards 2-up; market ticker shows 6 indices visible |
| Desktop | 1024–1440px | Full section nav; river cards 3-up; sidebar appears on article pages; market ticker shows 10+ indices |
| Wide | >1440px | Content caps at 1280px |

### Touch Targets

- Primary CTAs: 44×44px
- Section nav: 44px tap area
- Edition selector: 44px on mobile
- Reuters Mark: minimum 32×32px tap target

### Collapsing Strategy

- Edition selector + utility nav collapse first
- Section nav becomes scroller, then hamburger
- Subscribe stays visible at all breakpoints
- River cards drop column count: 4 → 3 → 2 → 1
- Reuters Mark always visible at all breakpoints
- Sidebar collapses below article body on tablet
- Market ticker compresses indices count by viewport

### Image Behavior

- River-card images: `aspect-ratio: 16/9` desktop, `4/3` mobile
- Hero images: full-bleed up to 1024px
- Photo essays: scroll-snap on touch surfaces
- Photo credits in uppercase Knowledge Medium 11/500 always present beneath images

### Container Queries

Right-rail "Most read" list compresses to single-line truncate when narrow; market data tables collapse from 8-column to 4-column to mobile-stack.

## 11. Content & Voice

### Tone

Neutral, factual, globally-reportorial, wire-service-precise. Reuters's voice is calibrated for global news distribution — sentences are precise, claims are sourced with attribution ("a senior administration official said"), and the publication assumes nothing about the reader's perspective. The agency's commitment to neutral language ports to the visual system as chromatic and typographic neutrality. Headlines lead with the news + the source ("China Imposes Rare-Earth Export Curbs on US Defense Suppliers"); decks add specifics with named institutions and the bureau location.

### Microcopy Patterns

- **Subscribe verbs**: "Subscribe", "Sign in", "Continue", "Start free trial" — minimal CTA verbs
- **Paywall messages**: "You've reached your monthly article limit. Subscribe to Reuters.com for unlimited access."
- **Date format**: "November 5, 2024 9:30 PM GMT+8" — international standard with timezone
- **Dateline format (signature)**: "BANGKOK, Nov 5 (Reuters) — " — uppercase city + date + agency attribution, the wire-service convention since 1851
- **Section labels in Knowledge Medium uppercase**: "WORLD", "BUSINESS", "MARKETS", "SUSTAINABILITY", "LEGAL"
- **Market data**: "S&P 500 ▲ 5,847.87 +0.42%" — direction triangle + tabular numerals + percent
- **Photo credit**: "REUTERS / DADO RUVIC" — agency attribution first, photographer second
- **Breaking news**: "BREAKING NEWS — [headline]" — uppercase red banner

### CTA Verb Conventions

- Primary: **"Subscribe"**, **"Sign in"**, **"Continue"**, **"Read"**
- Secondary: **"Save"**, **"Share"**, **"Follow"**, **"Listen"**
- Tertiary: **"More on this story"**, **"View all"**, **"See coverage"**
- Avoided: "Click here", "Submit", "Buy now", "Learn more"

### Empty States

- Saved articles: "Your saved articles will appear here."
- Search no results: "No stories match your search. Try different keywords or check our sections."
- Market data unavailable: "Market data is currently unavailable. Try again in a few moments."
- Watchlist empty: "Add tickers to your watchlist to track them across Reuters."
- Live blog ended: "This live blog has ended. Read the full coverage."

## 12. Dark Mode & Theming

Reuters supports a **system-level dark mode**. The token swap preserves the brand orange:

- `bg`: `#0d0d0d` — near-black canvas
- `surface`: `#1a1a1a`
- `surface-soft`: `#262626`
- `text`: `#ffffff` — body inverts to pure white
- `text-strong`: `#ffffff`
- `text-muted`: `#b3b3b3`
- `text-soft`: `#8a8a8a`
- `brand`: `#ff8000` — orange holds, mode-independent
- `link`: `#ff8000`
- `border`: `#333333`
- `border-rule`: `#ff8000` — section rules invert from dark to orange

The Reuters Mark stays orange in both modes — the brand square is mode-independent, mirroring its 57-year continuity in print and broadcast.

## 13. Lineage & Influences

Reuters's visual lineage is **wire-service typography** — a tradition that goes back to Paul Reuter's 1851 founding (carrier pigeons bridging the telegraph gap between Aachen and Brussels). Wire-service design has always favored functional density, neutral language, and chromatic restraint; Reuters's web product carries those conventions forward.

The **Reuters Mark** — the orange square — was designed by FHK Henrion in 1968 and has remained essentially unchanged for 57 years. Henrion was a German-born British designer who pioneered corporate identity in postwar Britain (KLM, BEA, BP, LEB). The mark's geometric simplicity (1×1 ratio, no rounding, no decoration) is the brand's most-identifying decision.

The **Knowledge** typeface family was commissioned from Klim Type Foundry's Kris Sowersby — the same designer who drew the FT's Financier and Metric. Sowersby's wire-service work emphasizes legibility at narrow column widths and small reading sizes — the Knowledge family's humanist sans is calibrated for those constraints.

The Reuters/Refinitiv professional product (the agency-facing trading-floor terminal acquired by Thomson in 2008, divested to LSEG in 2021) influences the consumer-news product's data-table conventions: tabular monospace numerics, green-up / red-down market signaling, dense scrollable rivers. The web product ports those professional-data conventions to consumer reading.

What Reuters rejects: blue-as-link (orange is the link), italic decks (Reuters uses sans 400 standfirsts), rounded corners on editorial surfaces, decorative gradients, the salmon-pink-broadsheet of the FT, and the magazine-cream of Bloomberg Businessweek. Reuters is wire-service-pure; everything else follows.

**Influences:**
- Paul Reuter (1851) — wire-service founding, carrier-pigeon era
- FHK Henrion (1968) — the Reuters Mark, 57-year continuity — [henrion.de](https://www.henriondesign.com/)
- Klim Type Foundry / Kris Sowersby — Knowledge typeface commission — [klim.co.nz](https://klim.co.nz)
- Reuters/Refinitiv — agency-facing trading-floor terminal, source of data-table conventions
- Wire-service typographic tradition — AP, AFP, Reuters share design lineage
- The Times (London) — broadsheet rigor that wire services inherit

## 14. Do's and Don'ts

**Do**
- Use the Reuters Mark (1×1 orange square) as the primary brand identifier — always 0px radius, always pure `#ff8000`, always 1:1 aspect
- Use Reuters orange (`#ff8000`) for primary CTAs, inline links, focus rings, hover underlines
- Run all editorial type in the Knowledge family — single-voice discipline is brand
- Use uppercase Knowledge Medium 12/700 tracked 0.04em for the dateline-first byline ("BANGKOK, NOV 5 —")
- Set headlines in Knowledge Medium at weight 700 — wire-service authority
- Run body in Knowledge Regular at 18/1.55 — pure black `#1a1a1a` on pure white `#ffffff`
- Use tabular knowledge-mono numerals (`tnum`) on every market context — tickers, tables, prices
- Apply green-up / red-down convention on market data with cell-flash animation
- Use the breaking-news red banner (`#cc1a1a`) for breaking news — uppercase Knowledge Medium 11/700
- Use the orange-on-black CTA reverse pairing for emphasis
- Use international date format with timezone ("November 5, 2024 9:30 PM GMT+8")
- Cite photo credits "REUTERS / DADO RUVIC" — agency-first, photographer-second

**Don't**
- Don't use blue as a link color — orange (`#ff8000`) is the Reuters link signature
- Don't round the Reuters Mark — it's a 1×1 square, no exceptions
- Don't use rounded card corners — broadsheet aesthetic is square (0px on cards/photos, 2px max on buttons/inputs)
- Don't mix in a serif typeface — single-family Knowledge discipline is the brand
- Don't put italic on decks or pull-quotes — wire-service typography is sans-only
- Don't apply heavy shadows to article cards — depth comes from chromatic bars, not elevation
- Don't drop the dateline-first byline convention — "BANGKOK, NOV 5 — " is a 175-year wire-service inheritance
- Don't use absolute black `#000` for body — Reuters uses `#1a1a1a`, slightly warmed for harmony with orange
- Don't use "Click here", "Submit", "Buy now" — verbs are "Subscribe", "Sign in", "Continue"
- Don't use a salmon ground (FT) or terminal black (Bloomberg) — Reuters is white-canvas wire-service-pure

## 15. Agent Prompt Guide

### Quick Color Reference

```
Reuters-Orange:    #ff8000  (the brand square + signature CTA + link)
Orange-Hover:      #e67000
White-Canvas:      #ffffff
Warm-Black-Body:   #1a1a1a
Muted:             #404040
Hairline:          #e0e0e0
Breaking-Red:      #cc1a1a
Market-Up:         #2ea44f
Market-Down:       #cc1a1a
Dark-Sub-Band:     #1a1a1a
```

### Example Component Prompts

- "Create a Reuters article header on white (#ffffff): the **Reuters Mark** (1×1 orange #ff8000 square, 32×32px, 0px radius) followed by 'Reuters' wordmark in knowledge-medium 28/700; section label in knowledge-medium 11/700 uppercase tracked 0.1em ('WORLD'); 1px dark rule below; headline in knowledge-medium 40/700 #1a1a1a with -0.015em tracking; knowledge-regular 18/400 deck; **dateline-first byline** in uppercase knowledge-medium 12/700 tracked 0.04em ('BANGKOK, NOV 5 (REUTERS) —') followed by 'By Andrew MacAskill' in knowledge-medium 13/600."
- "Design the Reuters Mark: a 1×1 orange (#ff8000) square, 32×32px in the masthead, 0px radius, no decoration, no gradient. Designed by FHK Henrion in 1968 — the brand's most-identifying asset for 57 years."
- "Build a Reuters primary CTA: orange fill (#ff8000) with **black text** in knowledge-medium 14/700 uppercase tracked 0.06em ('SUBSCRIBE'), 2px radius (the only place radius creeps above 0), 14×24px padding, 44px height. The orange-fill-with-black-text is the brand reverse pairing — high-contrast and identifying."
- "Create a Reuters market ticker bar: dark ground (#1a1a1a) with white labels in knowledge-medium 11/600 uppercase, tabular knowledge-mono 13/600 numerals with `tnum` enabled ('S&P 500 ▲ 5,847.87 +0.42%'). On price update, the cell flashes background green (#2ea44f) or red (#cc1a1a) at 0.35 alpha for 240ms then fades."
- "Build a Reuters breaking-news banner: red ground (#cc1a1a), white 'BREAKING NEWS' label in knowledge-medium 11/700 uppercase tracked 0.1em, then headline in white knowledge-medium 16/700. Slides down from top over 320ms emphasized; pulses subtly (1.0 → 1.02 scale) once on first display."
- "Design a Reuters pull-quote: white ground with **4px Reuters orange (#ff8000) left bar**. Knowledge Medium 28/500, no italic — wire-service typographic vocabulary. The orange bar marks the pull-out without serif, without italic, sans-only single-voice discipline."

### Iteration Guide

1. **The Reuters Mark is the brand.** A 1×1 orange (#ff8000) square, 32×32px in the masthead, designed by FHK Henrion in 1968. It must be 0px radius, pure orange, 1:1 aspect, no decoration. Don't round it. Don't tint it. Don't decorate it.
2. **Single-family Knowledge sans discipline.** All editorial and chrome runs in the Knowledge family — knowledge-medium for headlines and UI, knowledge-regular for body, knowledge-mono for data. No serif, no font-mixing.
3. **Dateline-first byline convention.** Every byline starts with uppercase city + date + agency attribution: "BANGKOK, NOV 5 (REUTERS) — " in knowledge-medium 12/700 tracked 0.04em. This is a 175-year wire-service inheritance.
4. **Orange-on-black CTA.** Buttons fill with `#ff8000` and use **black text**, not white. The reverse pairing is the brand signature.
5. **Square radius (0px) on cards, photos, the Reuters Mark.** Buttons and inputs get 2px max. Wire-service broadsheet.
6. **Tabular numerals on every market context.** Enable `font-variant-numeric: tabular-nums` on tickers, prices, data tables.
7. **Green-up / red-down with ticker-cell flash.** Markets data uses success green (`#2ea44f`) and danger red (`#cc1a1a`); cell flashes at 0.35 alpha for 240ms.
8. **Wire-service neutrality.** Avoid editorial decoration — no italic decks, no decorative gradients, no rounded corners on editorial. The visual system mirrors the agency's commitment to neutral language.
