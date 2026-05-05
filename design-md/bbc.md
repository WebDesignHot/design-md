---
name: BBC News
tagline: Signature BBC red (`#bb1919`), Reith Sans + Reith Serif, the global broadcaster authority typography of the world''s public-service news.
author: webdesignhot
source_url: https://www.bbc.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media]
tags: [editorial, sans, serif, news, broadcaster, red, light, public-service]
preview_swatch: ['#ffffff', '#bb1919', '#202224']
related: [theguardian, ft, nytimes]
description: 'BBC News is the digital arm of the British Broadcasting Corporation — the world''s oldest national broadcaster (founded 1922) and the most-trusted news source in dozens of countries (BBC global audience: 489 million weekly, per the BBC''s 2024 annual report). The web product carries 100+ years of public-service-broadcaster authority: pure-white canvas, the signature **BBC red** (`#bb1919`) reserved for the masthead block-mark and primary CTAs, and the custom **Reith** typeface family (Reith Sans + Reith Serif, designed in 2017 by Dalton Maag for the BBC''s rebrand) doing all editorial and chrome work. The BBC red block — a square `#bb1919` patch with "BBC" in white Reith Sans 700 — is one of the world''s most-recognized brand marks, displayed identically on broadcast graphics, web masthead, app icons, and merchandising. Where Reuters runs wire-service neutral and Bloomberg runs terminal-orange, BBC News runs **public-service-broadcaster** — calmly authoritative, globally accessible, designed for billions of readers across 40+ languages and 200+ countries. The site emphasizes legibility at any device size, accessibility for screen readers, and chromatic restraint that lets the news take center stage.'

colors:
  bg: '#ffffff'                  # editorial reading canvas
  bg-section: '#ffffff'
  bg-dark: '#202224'              # observed dark text rgb(32, 34, 36) — used as dark sub-band
  bg-darkest: '#0d0d0d'
  surface: '#ffffff'
  surface-soft: '#f6f6f6'
  surface-strong: '#e8e8e8'
  surface-quote: '#fbe6e6'         # red-tinted pull-quote backdrop
  surface-red-tint: '#fce8e8'      # selected nav, brand-tinted backgrounds
  text: '#202224'                 # observed h1 color rgb(32, 34, 36) — primary text, calibrated dark-charcoal
  text-strong: '#000000'
  text-muted: '#5a5d61'
  text-soft: '#7a7d81'
  text-faint: '#a3a6aa'
  text-on-red: '#ffffff'
  text-on-dark: '#ffffff'
  brand: '#bb1919'                 # the iconic BBC red — the masthead block, primary CTA, brand signature
  brand-hover: '#a31515'
  brand-active: '#8b1212'
  brand-soft: '#fadcdc'             # tint surface
  brand-deep: '#5a0d0d'             # darkest red
  brand-block: '#bb1919'            # the BBC red block-mark
  link: '#bb1919'                  # red as inline link color (BBC signature)
  link-hover: '#a31515'
  link-visited: '#5a5d61'
  on-brand: '#ffffff'
  on-dark: '#ffffff'
  border: '#dcdcdc'                # default hairline
  border-soft: '#f0f0f0'
  border-strong: '#999999'
  border-rule: '#202224'             # dark section rule
  border-red: '#bb1919'
  shadow-card: 'rgba(0,0,0,0.06)'
  shadow-elev: 'rgba(0,0,0,0.1)'
  shadow-modal: 'rgba(0,0,0,0.3)'
  scrim: 'rgba(0,0,0,0.6)'
  success: '#2ea44f'
  success-soft: '#dff0e7'
  warning: '#cc7a00'
  warning-soft: '#fde9cc'
  danger: '#bb1919'                # danger shares brand red — BBC convention
  danger-soft: '#fadcdc'
  info: '#0066b8'
  info-soft: '#cfe7f5'
  breaking-red: '#bb1919'             # BBC red carries breaking news (no separate red)
  live-red: '#bb1919'                  # live indicator dot
  bbc-iplayer: '#ffd000'                # iPlayer yellow (sub-brand)
  bbc-sounds: '#ff4f00'                 # Sounds orange (sub-brand)
  bbc-sport: '#ffd000'                  # Sport yellow (sub-brand)

typography:
  display:
    family: '"BBC Reith Sans", "BBCReithSans-fallback", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700, 800]
    opentype-features: ['liga', 'kern']
  serif:
    family: '"BBC Reith Serif", "BBCReithSerif-fallback", Georgia, "Times New Roman", serif'
    weights: [400, 500, 700]
  body:
    family: '"BBC Reith Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: '"BBC Reith Mono", Menlo, Consolas, "Courier New", monospace'
    weights: [400, 500]
  scale:
    masthead-block:      { size: 28, weight: 700, lineHeight: 1.0,  tracking: '-0.01em', family: display, opentype: ['liga'] }
    headline-mega:       { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.02em', family: serif }
    headline-jumbo:      { size: 42, weight: 700, lineHeight: 1.08, tracking: '-0.015em', family: serif }
    headline-xl:         { size: 32, weight: 700, lineHeight: 1.13, tracking: '-0.005em', family: serif }
    headline-lg:         { size: 28, weight: 500, lineHeight: 1.18, tracking: '0',         family: serif, notes: 'observed h2: weight 500, BBC Reith Serif' }
    headline-md:         { size: 22, weight: 600, lineHeight: 1.22, tracking: '0',         family: serif }
    headline-sm:         { size: 18, weight: 600, lineHeight: 1.25, tracking: '0',         family: serif }
    deck:                { size: 18, weight: 400, lineHeight: 1.4,  tracking: '0',         family: display }
    body-md:             { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',         family: display }
    body-sm:             { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',         family: display }
    pull-quote:          { size: 28, weight: 500, lineHeight: 1.3,  tracking: '0',         family: serif }
    section-label:       { size: 12, weight: 700, lineHeight: 1.0,  tracking: '0.05em',    family: display, transform: uppercase }
    byline:              { size: 14, weight: 600, lineHeight: 1.3,  tracking: '0',         family: display }
    dateline:            { size: 13, weight: 400, lineHeight: 1.3,  tracking: '0',         family: display }
    nav-link:            { size: 16, weight: 500, lineHeight: 1.0,  tracking: '0',         family: display, notes: 'observed nav-link: BBC Reith Sans 500' }
    button-label:        { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0.04em',    family: display }
    caption:             { size: 14, weight: 400, lineHeight: 1.4,  tracking: '0',         family: display }
    photo-credit:        { size: 12, weight: 400, lineHeight: 1.3,  tracking: '0',         family: display }
    micro-meta:          { size: 12, weight: 500, lineHeight: 1.2,  tracking: '0.04em',    family: display, transform: uppercase }
    breaking-banner:     { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.04em',    family: display, transform: uppercase }
    code-micro:          { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',         family: mono }

radius:
  micro: 0
  sm: 2
  md: 4
  lg: 8
  pill: 9999
  none: 0

spacing:
  base: 4
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120]

layout:
  page-width: 1280
  prose-width: 660
  feature-width: 1024
  header-height: 60
  bbc-block-size: 80
  section-rule-weight: 1
  hairline-weight: 1

components:
  bbc-block:
    bg: '#bb1919'
    color: '#ffffff'
    radius: 0
    width: 80
    height: 24
    use: 'The iconic BBC red block-mark — a `#bb1919` rectangle with "BBC" in white Reith Sans 700 letter-spaced. Sits in the top-left of every BBC web page; identical to the broadcast graphics version since the 1997 rebrand.'
  bbc-block-news:
    bg: '#bb1919'
    color: '#ffffff'
    radius: 0
    use: 'The "BBC News" composite mark — BBC red block + "NEWS" in dark Reith Sans 700 to the right.'
  button-primary:
    bg: '#bb1919'
    color: '#ffffff'
    radius: 4
    padding: '14px 24px'
    height: 44
    font: button-label
    use: 'Subscribe, Sign in — primary CTA. BBC red fill with white text.'
  button-primary-hover:
    bg: '#a31515'
    color: '#ffffff'
    use: 'Pointer-down on red CTAs.'
  button-secondary:
    bg: 'transparent'
    color: '#202224'
    border: '1px solid #202224'
    radius: 4
    padding: '14px 24px'
    height: 44
    use: 'Already a subscriber, secondary actions.'
  button-text-link:
    bg: 'transparent'
    color: '#bb1919'
    use: 'Inline body links — red text with subtle underline on hover.'
  card-headline:
    bg: '#ffffff'
    color: '#202224'
    radius: 0
    border: 'top 1px solid #dcdcdc'
    use: 'Default river card. BBC Reith Serif 22/600 headline, BBC Reith Sans 16/400 deck, BBC Reith Sans 14/600 byline.'
  card-photo:
    bg: '#ffffff'
    color: '#202224'
    radius: 0
    use: 'Photo card with image-above + headline below; 16:9 aspect ratio.'
  card-live:
    bg: '#ffffff'
    color: '#bb1919'
    radius: 0
    border: 'left 4px solid #bb1919'
    use: 'Live news card with red left bar and red "LIVE" indicator.'
  pull-quote:
    bg: 'transparent'
    color: '#202224'
    border: 'left 4px solid #bb1919'
    padding: '24px 32px'
    use: 'Pull-quote with 4px BBC red left bar. BBC Reith Serif 28/500.'
  text-input:
    bg: '#ffffff'
    color: '#202224'
    radius: 4
    height: 44
    padding: '12px 14px'
    border: '1px solid #999999'
    focus: 'border thickens to 2px BBC red'
    use: 'Email entry, search input.'
  paywall-cta:
    bg: '#202224'
    color: '#ffffff'
    padding: '40px 32px'
    use: 'Dark ground sign-in/account-create CTA — BBC News doesn''t paywall reading; this is for personalisation.'
  nav-section-link:
    color: '#202224'
    font: nav-link
    padding: '14px 12px'
    use: 'Section nav (Home, News, Sport, Business, Innovation, Climate, Culture, Travel, Earth). Hover: red underline grows from below.'
  edition-selector:
    bg: 'transparent'
    color: '#202224'
    use: 'Top edition picker (UK, US, International, English) — global-broadcaster signal.'
  breaking-banner:
    bg: '#bb1919'
    color: '#ffffff'
    radius: 0
    padding: '12px 24px'
    font: breaking-banner
    use: 'Breaking news banner — BBC red ground with white "BREAKING" label and headline.'
  live-indicator:
    bg: 'transparent'
    color: '#bb1919'
    use: 'Red dot + "LIVE" label — used on live blogs, BBC News live page, breaking news.'
  iplayer-card:
    bg: '#ffd000'
    color: '#000000'
    radius: 4
    use: 'BBC iPlayer (TV catch-up) cross-promo card — yellow ground.'
  sounds-card:
    bg: '#ff4f00'
    color: '#ffffff'
    radius: 4
    use: 'BBC Sounds (radio + podcasts) cross-promo card — orange ground.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out-soft: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 320
  card-hover: 'image scales 1.0 → 1.02; headline color shifts to red over 200ms; subtle 1px red underline grows under headline'
  reduced-motion: 'respects prefers-reduced-motion: reduce — transforms suppressed, transitions become instant color sets, live-indicator pulse suppressed.'

breakpoints:
  mobile: 600
  tablet: 768
  desktop: 1008
  wide: 1280

shadows:
  ambient: 'rgba(0,0,0,0.04) 0 1px 2px'
  standard: 'rgba(0,0,0,0.06) 0 2px 6px'
  elevated: 'rgba(0,0,0,0.1) 0 8px 20px'
  deep: 'rgba(0,0,0,0.3) 0 16px 40px'
  ring: '0 0 0 2px #bb1919'

accessibility:
  contrast-text-on-bg: 13.0                # #202224 on #ffffff — AAA at body sizes
  contrast-text-on-red: 6.5                 # #ffffff on #bb1919 — AAA
  contrast-link-on-bg: 6.5                  # #bb1919 on #ffffff — AAA
  contrast-text-on-dark: 14.0               # #ffffff on #202224 — AAA
  contrast-muted-on-bg: 6.5                 # #5a5d61 on #ffffff — AAA body
  focus-ring: '2px solid #bb1919 (BBC red) + 2px outline-offset'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab moves BBC block-mark → primary nav → utility (Sign in, Search). Skip-link first. Edition selector accessible.'
  screen-reader-language-tags: '40+ language editions tagged with proper lang attributes for screen-reader pronunciation'

dark-mode: optional
colors-dark:
  bg: '#202224'
  surface: '#2a2c2e'
  surface-soft: '#1a1c1e'
  surface-strong: '#3a3c3e'
  text: '#ffffff'
  text-strong: '#ffffff'
  text-muted: '#b3b6ba'
  text-soft: '#8a8d91'
  brand: '#ff5555'                 # red lifts for AA on dark
  link: '#ff5555'
  border: '#3a3c3e'
  border-rule: '#ff5555'
---

## 1. Visual Theme & Atmosphere

BBC News is the digital arm of the British Broadcasting Corporation — the world's oldest national broadcaster (founded 1922 by John Reith and others) and the most-trusted news source in dozens of countries. The 2024 BBC annual report cites a global audience of 489 million weekly. The web product carries 100+ years of public-service-broadcaster authority: pure-white canvas, the signature **BBC red** (`#bb1919`) reserved for the masthead block-mark and primary CTAs, and the custom **Reith** typeface family (Reith Sans + Reith Serif, designed in 2017 by Dalton Maag for the BBC's rebrand) doing all editorial and chrome work.

The **BBC red block** — a square `#bb1919` patch (80×24px) with "BBC" in white Reith Sans 700 letter-spaced — is one of the world's most-recognized brand marks, displayed identically on broadcast graphics, web masthead, app icons, and merchandising. The block-mark was introduced in the 1997 rebrand by Lambie-Nairn (which simplified the previous slanted blue-and-yellow logos to flat red rectangles) and has remained essentially unchanged for 28 years. The mark is rectilinear, exactly proportional, with no rounding, no gradient, and no decoration. It functions as the BBC's primary brand identifier across every medium.

Type sets in **BBC Reith** — a custom commission designed by Dalton Maag (London) for the BBC's 2017 rebrand. The Reith family is named after John Reith, the BBC's first Director-General (1922–1938) whose name became a byword for public-service-broadcasting principles ("Reithian values"). Reith Sans handles UI chrome, navigation, button labels, and on-screen broadcast graphics; Reith Serif handles editorial headlines on the web (observed h1 weight 500 in BBC Reith Serif). The serif/sans pairing is unusual for a broadcaster — most broadcasters use sans-only — but the Reith Serif on web headlines signals editorial weight while keeping broadcast graphics in the Reith Sans family.

The chromatic system is **white + red + dark-charcoal**, with the BBC sub-brands (iPlayer yellow, Sounds orange, Sport yellow) appearing only on cross-promo cards. The BBC red carries primary CTAs, inline links, the live indicator, and the breaking-news banner. The dark-charcoal `#202224` (observed h1 color, slightly warmed from pure black) carries body text. The discipline is global-broadcaster restraint — the news takes center stage, not the chrome.

Where Reuters runs wire-service neutral and Bloomberg runs terminal-orange, BBC News runs **public-service-broadcaster** — calmly authoritative, globally accessible, designed for billions of readers across 40+ languages and 200+ countries. The site emphasizes legibility at any device size, accessibility for screen readers (every story tagged with proper lang attributes), and chromatic restraint that lets the news take center stage. The BBC's commitment to its audiences — including BBC Persian, BBC Arabic, BBC Mundo, BBC Hindi, and dozens more — informs every decision: text scales gracefully, RTL languages render properly, and the chromatic system avoids any culturally-loaded color choices.

**Key Characteristics:**
- **The BBC red block** (`#bb1919`) — the iconic 80×24px masthead mark, identical to broadcast graphics since 1997
- **BBC Reith Sans + BBC Reith Serif** — custom Dalton Maag commission for the 2017 rebrand
- BBC red as primary CTA, inline link, focus ring, and breaking-news banner
- Dark-charcoal body text (`#202224`) — observed h1 color, slightly warmed
- Pure-white canvas for global accessibility
- Square broadsheet aesthetic — 0px on cards, 4px on buttons
- 40+ language editions with proper lang attributes for screen-reader pronunciation
- Reith Serif for editorial headlines (observed h2 weight 500) — distinguishes web from broadcast Reith Sans
- Reith Sans for body text, navigation, and UI chrome
- Live indicator (red dot + "LIVE") on every live blog and breaking news stream
- Cross-promo cards for BBC iPlayer (yellow), Sounds (orange), Sport (yellow)
- Edition selector (UK, US, International) — global-broadcaster signal

## 2. Color Palette & Roles

### Primary
- **White Canvas** (`#ffffff`): editorial reading ground for global accessibility
- **BBC Red** (`#bb1919`): the brand color since 1997. Block-mark, primary CTA, inline link, breaking-news banner, live indicator, hover underline, focus ring.
- **Dark Charcoal** (`#202224`): primary text — observed h1 color, slightly warmed from pure black

### Brand & Sub-Brand
- **Brand Red** (`#bb1919`)
- **Red Hover** (`#a31515`)
- **Red Active** (`#8b1212`)
- **Red Soft** (`#fadcdc`) — selected nav background, badge tint
- **Red Deep** (`#5a0d0d`) — heaviest red
- **BBC Block Mark** (`#bb1919`) — the iconic 80×24px rectangle
- **BBC iPlayer Yellow** (`#ffd000`) — cross-promo cards (TV catch-up sub-brand)
- **BBC Sounds Orange** (`#ff4f00`) — cross-promo cards (radio + podcasts sub-brand)
- **BBC Sport Yellow** (`#ffd000`) — Sport sub-brand shares iPlayer yellow

### Accent
- **Editorial Link Red** (`#bb1919`) — inline body links use brand red
- **Link Hover** (`#a31515`)
- **Link Visited** (`#5a5d61`) — visited dims to muted gray

### Interactive
- **Default Link** (`#bb1919` text + underline-on-hover)
- **Active CTA** (red fill on white text)
- **Disabled** (`#a3a6aa` text, `#e8e8e8` fill)
- **Selected** (red-soft chip with red text)

### Neutral Scale
- **Body** (`#202224`) — observed h1 color (rgb 32, 34, 36) — calibrated dark-charcoal
- **Strong Black** (`#000000`) — max-contrast headline display
- **Muted** (`#5a5d61`) — bylines, datelines
- **Soft** (`#7a7d81`) — captions, photo credits
- **Faint** (`#a3a6aa`) — disabled
- **Hairline** (`#dcdcdc`) — universal 1px rule

### Surface & Borders
- **White Canvas** (`#ffffff`)
- **Surface Soft** (`#f6f6f6`)
- **Surface Strong** (`#e8e8e8`) — disabled fill
- **Surface Quote** (`#fbe6e6`) — red-tinted pull-quote backdrop
- **Surface Red Tint** (`#fce8e8`) — selected nav, brand-tinted backgrounds
- **Hairline** (`#dcdcdc`)
- **Border Strong** (`#999999`) — form input border
- **Border Rule** (`#202224`) — dark section rule
- **Border Red** (`#bb1919`)

### Shadow Colors
Shadows are **neutral black-tinted**, kept light:
- `rgba(0,0,0,0.04) 0 1px 2px` — minimal ambient
- `rgba(0,0,0,0.06) 0 2px 6px` — dropdown
- `rgba(0,0,0,0.1) 0 8px 20px` — overlay
- `rgba(0,0,0,0.3) 0 16px 40px` — modal

### Semantic
- **Success** (`#2ea44f` on `#dff0e7`) — confirmation messages
- **Warning** (`#cc7a00` on `#fde9cc`) — amber for advisory
- **Danger / Breaking** (`#bb1919` on `#fadcdc`) — danger shares brand red (BBC convention; no separate red)
- **Info** (`#0066b8` on `#cfe7f5`) — rare blue accent for informational badges

## 3. Typography Rules

### Font Family

**Sans (Display, Body, UI)**: `BBC Reith Sans` — a custom typeface designed in 2017 by Dalton Maag (London) for the BBC's rebrand. Reith Sans is named after John Reith, the BBC's first Director-General. The face is humanist sans optimized for legibility on both web and broadcast graphics, with character forms calibrated for low-resolution rendering (mobile, broadcast TV). Available in 400, 500, 600, 700, 800. Fallback: `"BBCReithSans-fallback", "Helvetica Neue", Helvetica, Arial, sans-serif`.

**Serif (Editorial Headlines)**: `BBC Reith Serif` — the serif companion to Reith Sans, also designed by Dalton Maag in 2017. Used for editorial headlines on the web (observed h2 weight 500 — BBC Reith Serif). The serif treatment distinguishes web editorial from broadcast graphics, which use Reith Sans for everything. Available in 400, 500, 700. Fallback: `"BBCReithSerif-fallback", Georgia, "Times New Roman", serif`.

**Mono**: `BBC Reith Mono` — used rarely on code blocks. Fallback: `Menlo, Consolas, "Courier New", monospace`.

**OpenType features**: Reith Sans uses standard ligatures and tightly-tuned kerning at display sizes. The face was designed with multilingual support — proper Cyrillic, Greek, Arabic, Hebrew, Devanagari, and Han Chinese cuts ship with the family for the BBC's 40+ language editions.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| masthead-block | Reith Sans | 28 | 700 | 1.0 | -0.01em | liga | "BBC" in white on red block |
| headline-mega | Reith Serif | 56 | 700 | 1.05 | -0.02em | — | Cover-class headline |
| headline-jumbo | Reith Serif | 42 | 700 | 1.08 | -0.015em | — | Top-of-fold lead |
| headline-xl | Reith Serif | 32 | 700 | 1.13 | -0.005em | — | Above-fold secondary |
| headline-lg | Reith Serif | 28 | 500 | 1.18 | 0 | — | River lead (observed h2 weight 500) |
| headline-md | Reith Serif | 22 | 600 | 1.22 | 0 | — | River sub |
| headline-sm | Reith Serif | 18 | 600 | 1.25 | 0 | — | Compact module |
| deck | Reith Sans | 18 | 400 | 1.4 | 0 | — | Standfirst |
| body-md | Reith Sans | 18 | 400 | 1.55 | 0 | — | Default running text |
| body-sm | Reith Sans | 16 | 400 | 1.5 | 0 | — | Compact card body |
| pull-quote | Reith Serif | 28 | 500 | 1.3 | 0 | — | Pull-quote with red left bar |
| section-label | Reith Sans | 12 | 700 | 1.0 | 0.05em | uppercase | "WORLD" / "BUSINESS" / "TECH" |
| byline | Reith Sans | 14 | 600 | 1.3 | 0 | — | "By Laura Kuenssberg, BBC News" |
| dateline | Reith Sans | 13 | 400 | 1.3 | 0 | — | "5 November 2024" — UK day-first |
| nav-link | Reith Sans | 16 | 500 | 1.0 | 0 | — | "Home" / "News" / "Sport" |
| button-label | Reith Sans | 14 | 600 | 1.0 | 0.04em | — | "Sign in" / "Subscribe" |
| caption | Reith Sans | 14 | 400 | 1.4 | 0 | — | Photo / chart caption |
| photo-credit | Reith Sans | 12 | 400 | 1.3 | 0 | — | "Photo: Reuters" |
| micro-meta | Reith Sans | 12 | 500 | 1.2 | 0.04em | uppercase | "5 MIN READ" |
| breaking-banner | Reith Sans | 14 | 700 | 1.0 | 0.04em | uppercase | "BREAKING" |
| code-micro | Reith Mono | 12 | 400 | 1.4 | 0 | — | Code blocks (rare) |

### Principles

- **Sans body, serif headlines.** The BBC's pairing of Reith Sans body with Reith Serif headlines is unusual for a broadcaster — broadcast graphics use Reith Sans for everything. The web's serif-headline treatment signals editorial weight and distinguishes web from broadcast.
- **Reith family supports 40+ languages.** Proper Cyrillic, Greek, Arabic, Hebrew, Devanagari, and Han Chinese cuts ship with the family — accessibility for global audiences is brand-load-bearing.
- **Headlines lean weight 500–700.** Observed h2 weight is 500 (lighter than NYT/WaPo's 700+) — the BBC's typographic restraint signals public-service authority over populist boldness.
- **Negative tracking on display sizes.** -0.005em → -0.02em on headlines.
- **Tracked uppercase for section labels and breaking banner.** 0.04em–0.05em.
- **UK date format.** "5 November 2024" — day-first convention.
- **Body line-height 1.55.** Calibrated for legibility at any device size.
- **Reith named for John Reith.** The BBC's first Director-General; "Reithian values" (inform, educate, entertain) are the BBC's editorial mission.

## 4. Component Stylings

### The BBC Block (the signature)

**`bbc-block`** — A `#bb1919` red rectangle (80×24px in the masthead), 0px radius, with "BBC" in white Reith Sans 700 letter-spaced. The block-mark sits in the top-left of every BBC web page. Designed by Lambie-Nairn for the 1997 rebrand and unchanged for 28 years. The mark also appears as favicon (32×32 with "BBC" letters), app icon, and is reproduced identically on broadcast graphics.

**`bbc-block-news`** — The composite "BBC News" mark — BBC red block + "NEWS" in dark Reith Sans 700 to the right. Used in the BBC News section masthead.

### Buttons

**`button-primary`** — BBC red fill (`#bb1919`), white text in Reith Sans 14/600 sentence case (BBC uses sentence case, not uppercase, on CTAs), 4px radius, 14×24px padding, 44px height. Press: darkens to `#a31515`.

**`button-secondary`** — Transparent fill, dark text, 1px dark border, 4px radius. "Already a subscriber?" / "Cancel" buttons.

**`button-text-link`** — Plain red text (`#bb1919`), no surface, no border. Subtle underline grows on hover.

### Cards

**`card-headline`** — White surface, 0px radius, top 1px hairline (`#dcdcdc`), no shadow. BBC Reith Serif 22/600 headline, BBC Reith Sans 16/400 deck, BBC Reith Sans 14/600 byline.

**`card-photo`** — Image-above + headline below, 16:9 aspect ratio.

**`card-live`** — White surface with **4px BBC red left bar** (`#bb1919`). Live indicator (red dot + "LIVE" label) at top, headline in BBC Reith Serif 22/600 red. Used on live news cards in the river.

### Pull-Quote

**`pull-quote`** — White ground with **4px BBC red left bar**. BBC Reith Serif 28/500. The red bar marks the pull-out — BBC editorial vocabulary.

### Inputs / Forms

**`text-input`** — White surface, 1px `#999999` border, 4px radius, 44px height, 12×14px padding. Focus: border thickens to 2px BBC red.

**`paywall-cta`** — **Dark ground** (`#202224`) — BBC News doesn't paywall reading (public-service mission); this dark CTA is for personalisation account-creation. White headline, white-outline Sign in button.

### Navigation

**`top-nav`** — White surface, 60px height, with the **BBC red block** in the top-left and the section nav (Home, News, Sport, Business, Innovation, Climate, Culture, Travel, Earth) horizontally arranged. Edition selector top-right (UK / US / International / English).

**`section-nav`** — Horizontal Reith Sans 16/500 sentence-case links separated by ample whitespace. Hover: red underline grows from below over 200ms.

### Decorative

**`section-rule`** — 1px dark rule.

**`hairline-rule`** — 1px `#dcdcdc` gray rule between river stories.

**`breaking-banner`** — BBC red ground (`#bb1919`) with white "BREAKING" label in Reith Sans 14/700 uppercase tracked 0.04em, then headline in white Reith Sans 16/700.

**`live-indicator`** — Red dot (`#bb1919`) + "LIVE" label in red Reith Sans 12/700 uppercase. Used on live blogs, BBC News live page, breaking news streams.

**`iplayer-card`** — BBC iPlayer cross-promo: **yellow ground** (`#ffd000`) with black Reith Sans text. Used on Culture / Travel / Earth cross-promo zones.

**`sounds-card`** — BBC Sounds cross-promo: **orange ground** (`#ff4f00`) with white Reith Sans text. Used on podcast and radio cross-promo zones.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 120`
- Section padding: 64px between page bands; 32px on mobile
- Card internal: 16px between image and headline; 8px between headline and deck

### Grid & Container

- Max content width: **1280px** centered on 12-column grid
- Reading column: **660px** for article body
- Feature container: **1024px** for hero + sidebar pairings
- Footer: 5-column link list

### Whitespace Philosophy

BBC News runs **functional restraint** — global accessibility means the page works at every device size, every connection speed, every language. The chromatic system is restrained (white + red + dark) so the news takes center stage. The typography is calibrated for legibility at any size. Whitespace is moderate — denser than NYT/WaPo, lighter than Reuters/Bloomberg.

### Section Cadence

- News (Home, World, UK, Business, Innovation, Climate, Culture, Travel, Earth): white canvas with hairline-separated cards
- Sport: white canvas with yellow Sport sub-brand accents
- Live blogs: white canvas with red live indicator
- Breaking news: BBC red banner across the top
- BBC iPlayer cross-promo: yellow card insertions
- BBC Sounds cross-promo: orange card insertions
- Account / personalisation: dark ground sub-bands

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0px | The BBC block, cards, photos, sections, breaking banners — broadcaster-broadsheet aesthetic |
| Small | 2px | Tight chrome (rare) |
| Standard | 4px | Buttons, text inputs |
| Comfortable | 8px | Sub-brand cards (iPlayer, Sounds) |
| Pill | 9999px | Save-article chip, audio play button |

BBC News sits in the **square broadcaster** camp. The BBC block-mark is mandatory 0px radius — the iconic rectangle has no rounding ever. Cards and photos stay 0px. Buttons and inputs at 4px. Sub-brand cards (iPlayer, Sounds) get 8px because they're marketing primitives, not editorial surfaces.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Article body, hero, section bands |
| 1 — Hairline | 1px `#dcdcdc` rule | River cards, table rows |
| 2 — Section Rule | 1px `#202224` rule | Section break |
| 3 — Brand Mark | BBC red block (`#bb1919`) | Masthead, sub-brand promos |
| 4 — Live / Breaking | red left bar or red top banner | Live cards, breaking news |
| 5 — Dropdown | `rgba(0,0,0,0.06) 0 2px 6px` | Account menu |
| 6 — Modal | `rgba(0,0,0,0.3) 0 16px 40px` | Sign-in modal |

### Shadow Philosophy

BBC News's depth is **flat-broadcaster by default**. Depth signals come from the BBC red block-mark, red bars on live cards, and red banners for breaking news — chromatic, not elevational. Shadows are neutral black-tinted at low alpha and reserved for chrome (dropdowns, modals).

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
| Slow | 320ms | Modal enter, breaking-banner reveal |

### Per-Component Recipes

- **Card hover**: image scales 1.0 → 1.02; headline color shifts to BBC red (`#bb1919`) over 200ms; subtle 1px red underline grows under the headline.
- **Section-nav link hover**: red underline grows from below over 200ms standard; active section gets persistent 2px red underline.
- **Breaking-banner appearance**: slides down from top over 320ms emphasized on first display; persists with red ground and white "BREAKING" label.
- **Live indicator**: red dot pulses 1.0 → 1.4 → 1.0 over 1000ms; suppressed when reduced motion is honored.
- **Sign-in modal enter**: scrim fades 0 → 0.6 black alpha over 200ms; modal translates 16px to 0 + opacity 0 → 1 over 320ms emphasized.
- **iPlayer / Sounds cards**: hover lifts cards subtly (translateY -2px, shadow intensifies) over 200ms.

### Page Transitions

200ms cross-fade. The BBC block-mark persists across page transitions for brand continuity.

### Reduced Motion

Live-indicator pulse suppressed; breaking-banner appears without slide-down (just fade); card hovers degrade to color-only; transforms suppressed.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #202224 body on #ffffff | 13.0 | AAA |
| #ffffff on #bb1919 (CTA) | 6.5 | AAA |
| #bb1919 link on #ffffff | 6.5 | AAA |
| #ffffff on #202224 (dark) | 14.0 | AAA |
| #5a5d61 muted on #ffffff | 6.5 | AAA |
| #000000 on #ffd000 iPlayer yellow | 16.0 | AAA |
| #ffffff on #ff4f00 Sounds orange | 4.6 | AA body |

### Focus Indicators

Focus ring: `2px solid #bb1919` (BBC red) with 2px outline-offset. Red pairs cleanly with white ground.

### ARIA Patterns

- **Live blog**: `role="feed"`, new entries `aria-live="polite"`, with timestamp and author for each entry
- **Breaking banner**: `role="alert"`, `aria-live="assertive"`
- **Edition selector**: `role="combobox"`, `aria-haspopup="listbox"`
- **BBC block-mark**: `role="banner"` with `aria-label="BBC homepage"`
- **40+ language editions**: every page properly tagged with `lang` attribute (e.g., `lang="ar"` for BBC Arabic, `lang="zh-Hans"` for BBC Chinese Simplified) so screen readers pronounce content correctly
- **Sign-in modal**: `role="dialog"`, `aria-modal="true"`, focus trapped, Esc closes
- **Sub-brand cards**: `role="region"` with `aria-label="BBC iPlayer cross-promotion"`

### Keyboard Navigation

- Top nav: Tab moves BBC block-mark → primary nav → utility (Sign in, Search) → Edition selector
- Live blog: Tab traverses entries top-to-bottom; new entries don't steal focus
- Skip-link first

### Screen Reader Hints

- BBC block-mark announces as "BBC, link to BBC homepage"
- Photo credits announce as "Photo by [Source]" in the appropriate language
- Live blog entries announce with timestamp and author
- Breaking news banner announces as "Alert: Breaking news — [headline]"
- Edition selector announces as "United Kingdom edition selected"
- Foreign-language content announces in the correct language pronunciation

### Reduced Motion

Live-indicator pulse suppressed; breaking-banner appears without slide-down; card hovers → color-only; transforms suppressed.

### Multilingual Accessibility

The BBC's commitment to global audiences (40+ language editions including BBC Persian, BBC Arabic, BBC Mundo, BBC Hindi, BBC Burmese, BBC Tamil, BBC Hausa, BBC Pidgin, BBC Russian, BBC Ukrainian, BBC Chinese, BBC Korean, BBC Japanese, BBC Thai, BBC Indonesian) means every page is properly tagged with `lang` attributes, supports RTL languages (Arabic, Hebrew, Persian, Urdu) with mirrored layouts, and the Reith family ships with proper Cyrillic, Greek, Arabic, Hebrew, Devanagari, and Han Chinese cuts.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600px | BBC block-mark stays in top-left at 60×18px; section nav into hamburger; river cards 1-up |
| Tablet | 600–1008px | Section nav as horizontal scroller; river cards 2-up |
| Desktop | 1008–1280px | Full section nav; river cards 3-up; sidebar appears on article pages |
| Wide | >1280px | Content caps at 1280px |

### Touch Targets

- Primary CTAs: 44×44px
- Section nav: 44px tap area
- BBC block-mark: 44px tap target at all breakpoints
- Edition selector: 44px on mobile

### Collapsing Strategy

- BBC block-mark always visible at all breakpoints
- Section nav becomes scroller, then hamburger
- Sign in stays visible at all breakpoints
- River cards drop column count: 4 → 3 → 2 → 1
- Sidebar collapses below article body on tablet
- Live indicator stays at all breakpoints

### Image Behavior

- River-card images: `aspect-ratio: 16/9` desktop, `4/3` mobile
- Hero images: full-bleed up to 1024px
- Photo credits in Reith Sans 12/400 always present beneath images

### Container Queries

iPlayer / Sounds cross-promo cards use container queries to switch between full-width banner and right-rail card layouts.

## 11. Content & Voice

### Tone

Authoritative, balanced, public-service-broadcaster, globally-accessible. The BBC's voice is calibrated for the broadest possible audience — sentences are clear, claims are sourced, and the publication assumes no political affiliation. The "Reithian values" (inform, educate, entertain) inform every decision. Headlines lead with the news + the consequence ("Israel and Hezbollah agree to 60-day ceasefire as fighting continues"); decks add specifics with named institutions and bureau locations.

### Microcopy Patterns

- **Sign in verbs**: "Sign in", "Sign up", "Continue", "Cancel" — minimal CTA verbs (no "Subscribe" because BBC News doesn't paywall reading)
- **Date format**: "5 November 2024" — UK convention, day first
- **Section labels in Reith Sans uppercase**: "WORLD", "UK", "BUSINESS", "INNOVATION", "CLIMATE", "CULTURE", "TRAVEL", "EARTH", "SPORT"
- **Live indicators**: "LIVE — [time-ago]" with red dot and pulse animation
- **Breaking banner**: "BREAKING — [headline]"
- **Photo credit**: "Photo: Reuters" or "Photo: Getty Images"
- **Byline**: "By [Reporter Name], BBC News" — agency attribution second

### CTA Verb Conventions

- Primary: **"Sign in"**, **"Sign up"**, **"Continue"**, **"Watch"**, **"Listen"**, **"Read"**
- Secondary: **"Save"**, **"Share"**, **"Follow"**
- Tertiary: **"More on this story"**, **"Watch live"**, **"Listen live"**
- Avoided: "Subscribe" (BBC News is free at point of access — public-service principle), "Click here", "Submit", "Buy now"

### Empty States

- Saved articles: "Your saved articles will appear here. Sign in to save articles across devices."
- Search no results: "We couldn't find anything matching your search. Try different keywords or check our sections."
- Live blog ended: "This live coverage has ended. Read our latest reporting on this story."
- Personalisation: "Sign in to personalise your BBC experience."

## 12. Dark Mode & Theming

BBC News supports a **system-level dark mode**. The token swap lifts the red for AA on dark:

- `bg`: `#202224` — observed dark text color used as canvas
- `surface`: `#2a2c2e`
- `surface-soft`: `#1a1c1e`
- `text`: `#ffffff` — body inverts to pure white
- `text-strong`: `#ffffff`
- `text-muted`: `#b3b6ba`
- `text-soft`: `#8a8d91`
- `brand`: `#ff5555` — red lifts for AA on dark
- `link`: `#ff5555`
- `border`: `#3a3c3e`
- `border-rule`: `#ff5555`

The BBC block-mark stays at `#bb1919` red in dark mode — the brand block is mode-independent, mirroring its 28-year continuity since 1997.

## 13. Lineage & Influences

BBC News's visual lineage is **public-service broadcasting** — a tradition that begins with John Reith's 1922 founding of the BBC. The Reith Sans and Reith Serif typefaces, named for him, were commissioned in 2017 from Dalton Maag (London) — a foundry founded by Bruno Maag in 1991 that has designed identity typefaces for BMW, Tesco, Sky, Samsung, AT&T, and the BBC itself.

The **BBC red block** was introduced in the 1997 rebrand by Lambie-Nairn, the London identity firm that simplified the previous slanted blue-and-yellow logos to flat red rectangles. Lambie-Nairn (founded by Martin Lambie-Nairn) also designed the original Channel 4 logo (1982) and the "Two" identity for BBC Two. The red block represents the BBC's mission of clarity and accessibility — a single, immediately-recognizable mark that works on every device, in every language, at every size.

The BBC's editorial voice — calm, balanced, public-service — informs the typographic restraint. Headlines lean weight 500–700 (lighter than NYT/WaPo's 700+), the chromatic palette is restrained, and the page emphasizes legibility over visual flourish. The serif/sans pairing on web (Reith Serif headlines + Reith Sans body) distinguishes editorial from broadcast graphics, which use Reith Sans for everything.

What BBC News rejects: paywall (public-service principle — free at point of access), populist-bold headlines, decorative gradients, brand color used decoratively, and any culturally-loaded color choices that wouldn't translate to global audiences.

**Influences:**
- John Reith (1922) — BBC founding, "Reithian values" (inform, educate, entertain)
- Lambie-Nairn (1997 rebrand) — the BBC red block-mark — [martinlambienairn.com](https://www.lambie-nairn.com)
- Dalton Maag (2017 rebrand) — Reith Sans + Reith Serif commission — [daltonmaag.com](https://www.daltonmaag.com)
- BBC's 40+ language editions — multilingual typography requirements that shaped Reith family
- BBC iPlayer / Sounds / Sport — sub-brand colors (yellow, orange) that contrast with the red core
- Reuters / NYT — broadsheet news convention that BBC adapts for broadcaster context

## 14. Do's and Don'ts

**Do**
- Use the BBC red block (`#bb1919`) as the primary brand identifier — always 0px radius, always pure red, with "BBC" in white Reith Sans 700
- Use BBC red for primary CTAs, inline links, focus rings, hover underlines, breaking-news banners, live indicators
- Use BBC Reith Serif for editorial headlines on the web — distinguishes web from broadcast Reith Sans graphics
- Use BBC Reith Sans for body, navigation, UI chrome, and all text on broadcast graphics
- Use UK day-first date format ("5 November 2024")
- Tag every page with proper `lang` attributes for global audiences and screen-reader pronunciation
- Use sentence-case button labels ("Sign in", "Sign up") — BBC convention
- Mark live news with a red dot + "LIVE" label and pulse animation
- Use breaking-news banners with red ground (`#bb1919`) and white "BREAKING" label
- Use the dark-charcoal `#202224` for body text — observed h1 color, slightly warmed
- Cross-promote BBC iPlayer (yellow `#ffd000`) and BBC Sounds (orange `#ff4f00`) with sub-brand cards

**Don't**
- Don't paywall reading — BBC News is free at point of access (public-service mission)
- Don't round the BBC block — it's a flat rectangle, no exceptions, since 1997
- Don't use "Subscribe" as a CTA verb — BBC uses "Sign in" / "Sign up" because reading is free
- Don't use absolute black `#000` for body — BBC uses `#202224`, slightly warmed
- Don't use blue as a link color — BBC red (`#bb1919`) is the link signature
- Don't push display weight to 800+ — restraint at 500–700 is brand voice
- Don't drop the BBC red block from the masthead — it's load-bearing brand identity
- Don't apply heavy shadows to article cards — depth comes from the BBC block and red bars, not elevation
- Don't use rounded card corners on editorial — broadcaster-broadsheet aesthetic is square (sub-brand cards excepted at 8px)
- Don't use culturally-loaded color choices — global audiences require chromatic neutrality

## 15. Agent Prompt Guide

### Quick Color Reference

```
BBC-Red:           #bb1919  (the iconic block, link, CTA, focus, breaking, live)
Red-Hover:         #a31515
White-Canvas:      #ffffff
Body-Charcoal:     #202224  (observed h1 color)
Hairline:          #dcdcdc
iPlayer-Yellow:    #ffd000
Sounds-Orange:     #ff4f00
Sport-Yellow:      #ffd000
```

### Example Component Prompts

- "Create the BBC block-mark: a `#bb1919` red rectangle, 80×24px, 0px radius, with 'BBC' in white BBC Reith Sans 700 letter-spaced 0.04em centered. Designed by Lambie-Nairn for the 1997 rebrand and unchanged for 28 years. The mark sits in the top-left of every BBC web page."
- "Create a BBC News article header on white (#ffffff): the **BBC red block-mark** (80×24px) followed by 'NEWS' in dark BBC Reith Sans 700; section label in BBC Reith Sans 12/700 uppercase tracked 0.05em ('WORLD'); 1px dark rule below; headline in BBC Reith Serif 32/700 #202224 with -0.005em tracking; BBC Reith Sans 18/400 deck; BBC Reith Sans 14/600 byline ('By Laura Kuenssberg, BBC News') with '5 November 2024' UK day-first dateline."
- "Build a BBC primary CTA: BBC red fill (#bb1919) with white text in BBC Reith Sans 14/600 sentence case ('Sign in' — NOT uppercase, BBC convention), 4px radius, 14×24px padding, 44px height. Hover: darkens to #a31515."
- "Design a BBC breaking-news banner: BBC red ground (#bb1919) full-width, white 'BREAKING' label in BBC Reith Sans 14/700 uppercase tracked 0.04em, then headline in white BBC Reith Sans 16/700. Slides down from top over 320ms emphasized."
- "Create a BBC live indicator: red dot (#bb1919) + 'LIVE' label in red BBC Reith Sans 12/700 uppercase. Red dot pulses 1.0 → 1.4 → 1.0 over 1000ms (suppressed when prefers-reduced-motion is set). Used on live blogs and breaking news streams."
- "Build a BBC iPlayer cross-promo card: yellow ground (#ffd000) with black BBC Reith Sans 18/600 headline ('Watch on iPlayer'), 8px radius, 24px padding. Used on Culture / Travel / Earth cross-promo zones."

### Iteration Guide

1. **The BBC red block is the brand.** A `#bb1919` rectangle, 80×24px in masthead, 0px radius, with 'BBC' in white Reith Sans 700. Don't round it. Don't tint it. Don't decorate it. Unchanged since 1997.
2. **Reith Serif for editorial headlines, Reith Sans for everything else.** The web's serif headlines distinguish editorial from broadcast graphics (which use Reith Sans for everything).
3. **Public-service principle: no paywall.** BBC News is free at point of access. CTA verbs are "Sign in" / "Sign up", never "Subscribe".
4. **Sentence-case CTAs.** "Sign in" / "Sign up" — BBC diverges from broadsheet uppercase convention.
5. **UK day-first date format.** "5 November 2024" — never "November 5, 2024".
6. **Tag every page with proper `lang` attributes.** BBC's 40+ language editions require accessibility compliance for global screen-reader pronunciation.
7. **Body color #202224 (observed h1).** Slightly warmed dark-charcoal, not pure black.
8. **Live indicator pulses red.** Red dot with 1.0 → 1.4 → 1.0 pulse over 1000ms; suppress when reduced motion is honored.
