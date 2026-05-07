---
name: The Guardian
tagline: Guardian Egyptian slab serif, signature navy `#052962`, structured ruled hierarchy with bold section accents.
updated_at: 2026-05-03T21:06:23+12:00
published_at: 2026-05-03T21:06:23+12:00
author: webdesignhot
source_url: https://www.theguardian.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [media]
tags: [editorial, serif, slab, dense, structured, news, navy, light]
preview_swatch: ['#ffffff', '#052962', '#c70000']
related: [substack, ghost, medium]
description: 'The Guardian runs the most distinctive editorial system in British news: a paper canvas anchored on Guardian navy `#052962` for the masthead, brand bands, and section identity, paired with Guardian Egyptian — the in-house slab serif designed by Commercial Type — for headlines and body. The signature breaking-news red `#c70000` and a sun-yellow `#ffe500` carry section identity (Opinion uses a buff cream `#f6f6f6`, the Long Read carries cream `#fff4e2`, Sport runs blue, Culture runs pink). Section colors are a load-bearing brand signal — every article carries its section''s color band as the kicker rule. Headlines run in tracked Guardian Egyptian Headline at modest weights; body in Guardian Text Egyptian. The result is the canonical British broadsheet rendered for the screen — sober, ruled, color-coded by section, navy-and-red.'

colors:
  bg: '#ffffff'                  # paper-white canvas
  bg-section-news: '#ffffff'      # news section default
  bg-section-opinion: '#f6f6f6'   # Opinion buff
  bg-section-longread: '#fff4e2'  # Long Read warm cream
  bg-section-sport: '#fff4f2'     # Sport tint
  bg-section-culture: '#fdf0e9'   # Culture tint
  bg-section-lifestyle: '#fbeee7' # Lifestyle tint
  bg-dark: '#1a1a1a'              # dark mode body
  surface: '#ffffff'
  surface-soft: '#f6f6f6'
  surface-strong: '#dcdcdc'
  surface-quote: '#fff4e2'        # paper-cream pull-quote backdrop
  text: '#121212'                # near-black ink
  text-strong: '#000000'
  text-muted: '#707070'           # bylines, dateline
  text-soft: '#999999'           # captions, secondary meta
  text-faint: '#bbbbbb'           # disabled
  brand: '#052962'               # Guardian navy — the masthead, brand bands, section nav background
  brand-light: '#0c4ea0'          # interactive hover navy
  brand-dark: '#041c46'           # pressed navy
  brand-red: '#c70000'            # Guardian breaking-news red — kicker, alerts, live
  brand-red-hover: '#a30000'
  brand-yellow: '#ffe500'         # Guardian sun-yellow — Opinion section accent, support-us banner
  brand-orange: '#ff7f0f'         # Long Read accent
  brand-pink: '#ed145b'           # Culture section accent
  brand-blue-sport: '#0084c6'     # Sport section accent
  brand-green-environment: '#509e2f'  # Environment section accent
  brand-purple-lifestyle: '#7d0068' # Lifestyle section accent
  link: '#052962'                 # Guardian uses the navy itself as the link color in editorial
  link-hover: '#0c4ea0'
  link-visited: '#5a5a5a'
  on-brand: '#ffffff'
  on-brand-yellow: '#121212'      # ink on yellow — yellow is high-luminance
  on-brand-red: '#ffffff'
  border: '#dcdcdc'              # default 1px hairline
  border-soft: '#ebebeb'
  border-strong: '#999999'
  border-rule: '#052962'          # navy section rule
  shadow-card: 'rgba(0,0,0,0.04)'
  shadow-elev: 'rgba(0,0,0,0.08)'
  shadow-modal: 'rgba(0,0,0,0.18)'
  scrim: 'rgba(0,0,0,0.5)'
  success: '#1a7f37'
  success-soft: '#e3f2e7'
  warning: '#ff7f0f'
  warning-soft: '#fff0db'
  danger: '#c70000'
  danger-soft: '#fde2e2'
  info: '#052962'
  info-soft: '#e3eaf2'
  live-red: '#c70000'
  live-pulse: '#ff3333'
  pillar-news: '#bb3a3c'           # news pillar accent (used on section nav underline)
  pillar-opinion: '#e05e00'        # opinion pillar accent
  pillar-sport: '#0084c6'           # sport pillar accent
  pillar-culture: '#ab0613'         # culture pillar accent (deeper red)
  pillar-lifestyle: '#bb3b80'       # lifestyle pillar accent

typography:
  display:
    family: '"GuardianEgyp", "Guardian Egyptian Headline", "Guardian Egyptian", "EgyptianHeadline", Georgia, "Times New Roman", serif'
    weights: [400, 500, 600, 700, 800, 900]
    opentype-features: ['liga', 'kern']
  body:
    family: '"GuardianTextEgyptian", "Guardian Text Egyptian", "Egyptian Text", Georgia, "Times New Roman", serif'
    weights: [400, 500, 700]
  sans:
    family: '"GuardianTextSans", "Guardian Text Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'Menlo, Consolas, "Courier New", monospace'
    weights: [400]
  scale:
    masthead-wordmark:   { size: 60, weight: 900, lineHeight: 1.0,  tracking: '-0.01em', family: display, opentype: ['liga'] }
    headline-mega:       { size: 50, weight: 700, lineHeight: 1.05, tracking: '-0.01em', family: display }
    headline-jumbo:      { size: 40, weight: 700, lineHeight: 1.07, tracking: '-0.005em', family: display }
    headline-xl:         { size: 32, weight: 700, lineHeight: 1.1,  tracking: '0',         family: display }
    headline-lg:         { size: 26, weight: 700, lineHeight: 1.13, tracking: '0',         family: display }
    headline-md:         { size: 22, weight: 700, lineHeight: 1.18, tracking: '0',         family: display }
    headline-sm:         { size: 18, weight: 700, lineHeight: 1.22, tracking: '0',         family: display }
    deck:                { size: 17, weight: 400, lineHeight: 1.4,  tracking: '0',         family: display }
    body-md:             { size: 17, weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    body-sm:             { size: 15, weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    pull-quote:          { size: 28, weight: 400, lineHeight: 1.3,  tracking: '0',         family: display, style: italic }
    byline:              { size: 14, weight: 700, lineHeight: 1.3,  tracking: '0',         family: sans }
    dateline:            { size: 13, weight: 400, lineHeight: 1.3,  tracking: '0',         family: sans }
    section-label:       { size: 13, weight: 700, lineHeight: 1.0,  tracking: '0',         family: sans }
    caption:             { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',         family: sans }
    photo-credit:        { size: 11, weight: 400, lineHeight: 1.3,  tracking: '0',         family: sans }
    micro-meta:          { size: 12, weight: 500, lineHeight: 1.2,  tracking: '0',         family: sans }
    button-label:        { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0',         family: sans }
    nav-link:            { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0',         family: sans }
    live-badge:          { size: 11, weight: 700, lineHeight: 1.0,  tracking: '0.06em',    family: sans, transform: uppercase }
    pillar-tab:          { size: 17, weight: 700, lineHeight: 1.0,  tracking: '0',         family: sans }

radius:
  micro: 0
  sm: 4
  md: 9999          # Guardian uses the pill heavily — Support button, primary CTAs all pill-shaped
  pill: 9999
  none: 0

spacing:
  base: 4
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120]

layout:
  page-width: 1300
  prose-width: 620
  feature-width: 1024
  header-height: 56
  masthead-rule-weight: 4         # Guardian carries a heavy 4px navy rule beneath sections
  section-rule-weight: 1.5
  hairline-weight: 1

components:
  button-primary:
    bg: '#052962'
    color: '#ffffff'
    radius: 9999
    padding: '12px 22px'
    height: 44
    font: button-label
    use: 'Sign in, Continue, Save — primary CTA in navy pill.'
  button-support:
    bg: '#ffe500'
    color: '#121212'
    radius: 9999
    padding: '12px 24px'
    height: 44
    use: 'The signature "Support the Guardian" yellow pill — the brand''s most visible monetization CTA.'
  button-secondary:
    bg: '#ffffff'
    color: '#052962'
    border: '1px solid #052962'
    radius: 9999
    padding: '12px 22px'
    height: 44
    use: 'Already a subscriber, secondary actions.'
  button-text-link:
    bg: 'transparent'
    color: '#052962'
    use: 'Inline body links — underlined.'
  live-badge:
    bg: '#c70000'
    color: '#ffffff'
    radius: 4
    padding: '2px 6px'
    font: live-badge
    use: 'Red LIVE chip on breaking-news / live blogs.'
  alert-banner:
    bg: '#c70000'
    color: '#ffffff'
    padding: '10px 16px'
    use: 'Top-of-page breaking news alert.'
  card-headline:
    bg: '#ffffff'
    color: '#121212'
    radius: 0
    border: 'top 1px solid #dcdcdc'
    use: 'Default river card — image above, headline, deck, byline. Hairline-separated.'
  card-section-kicker:
    bg: '#ffffff'
    color: '#121212'
    border-top: '4px solid var(--pillar-color)'  # the section pillar accent — load-bearing
    use: 'Section-coded card with a 4px top rule in the section''s pillar color.'
  card-opinion:
    bg: '#ffe500'
    color: '#121212'
    radius: 0
    use: 'Opinion column — yellow ground (Guardian sun-yellow), italic display deck under columnist photo.'
  card-longread:
    bg: '#fff4e2'
    color: '#121212'
    radius: 0
    use: 'Long Read editorial — paper-cream ground.'
  pull-quote:
    bg: 'transparent'
    color: '#121212'
    border: 'top 1px solid #052962; bottom 1px solid #052962'
    padding: '24px 0'
    use: 'Italic Guardian Egyptian 28px between two navy rules — the Guardian pull-quote signature.'
  text-input:
    bg: '#ffffff'
    color: '#121212'
    radius: 4
    height: 44
    padding: '12px 14px'
    border: '1px solid #999999'
    focus: 'border thickens to 2px navy, no glow ring'
    use: 'Email entry, search input.'
  paywall-cta:
    bg: '#052962'
    color: '#ffffff'
    padding: '32px 24px'
    use: 'Sub-fold support-us card — navy ground, white headline, yellow pill CTA.'
  nav-pillar-tab:
    bg: '#052962'
    color: '#ffffff'
    border-bottom: '4px solid var(--pillar-color)'
    padding: '14px 12px'
    use: 'Top-level pillar tabs (News, Opinion, Sport, Culture, Lifestyle) sit on navy with their pillar color underline.'
  search-icon:
    bg: 'transparent'
    color: '#ffffff'
    use: 'Magnifying glass on the navy nav — white, never colored.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out-soft: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 320
  live-dot-pulse: '1.6s ease-in-out infinite — opacity 1 → 0.4 → 1, scale 1 → 1.15 → 1'
  card-hover: 'image scales 1.0 → 1.02; headline gains underline; 200ms standard'
  pillar-tab-hover: 'underline thickens 4px → 6px over 200ms standard'
  reduced-motion: 'respects prefers-reduced-motion: reduce — pulsing live dot becomes static, transforms suppressed.'

breakpoints:
  mobile: 660
  tablet: 980
  desktop: 1140
  wide: 1300

shadows:
  ambient: '0 1px 0 0 #dcdcdc'
  standard: 'rgba(0,0,0,0.04) 0 2px 4px'
  elevated: 'rgba(0,0,0,0.08) 0 6px 16px'
  deep: 'rgba(0,0,0,0.18) 0 12px 32px'
  ring: '0 0 0 2px #052962'

accessibility:
  contrast-text-on-bg: 17.4              # #121212 on #ffffff — AAA
  contrast-text-on-brand-navy: 14.0       # #ffffff on #052962 — AAA
  contrast-text-on-brand-red: 5.9         # #ffffff on #c70000 — AA body, AAA large
  contrast-text-on-brand-yellow: 17.0     # #121212 on #ffe500 — AAA
  contrast-muted-on-bg: 4.9               # #707070 on #ffffff — AA
  focus-ring: '2px solid #052962 (navy) + 2px outline-offset'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab moves logo → pillar nav → utility (Sign in, Search, Support). Skip-link first.'

dark-mode: optional
colors-dark:
  bg: '#1a1a1a'
  bg-section-news: '#1a1a1a'
  surface: '#1a1a1a'
  surface-soft: '#262626'
  surface-quote: '#2a2418'
  text: '#f5f5f5'
  text-strong: '#ffffff'
  text-muted: '#bdbdbd'
  text-soft: '#a3a3a3'
  brand: '#7ba9d8'
  brand-red: '#ff3333'
  brand-yellow: '#ffe500'
  link: '#7ba9d8'
  border: '#333333'
  border-rule: '#7ba9d8'
---

## 1. Visual Theme & Atmosphere

The Guardian's web canvas is the most **structurally explicit** editorial system in major news design. Where the New York Times and Washington Post hide their grid behind ink and hairlines, the Guardian *shows* its grid: the navy `#052962` masthead band sits over a `#ffffff` body, pillar tabs (News / Opinion / Sport / Culture / Lifestyle) carry color-coded underlines (each pillar has its own 4px accent stripe), and section cards are bound by section-pillar-colored top rules that telegraph "you are reading Sport" or "you are reading Opinion" at first glance.

The signature display face is **Guardian Egyptian Headline** — a slab serif designed by Christian Schwartz and Paul Barnes at Commercial Type for the Guardian's 2005 redesign. The slab serif is the brand's most distinctive typographic signal — it gives headlines a printed-broadsheet weight while reading distinctly different from Bodoni, Cheltenham, or Imperial. Body uses **Guardian Text Egyptian** (a slightly-warmer body cut), and meta uses **Guardian Text Sans** for bylines, captions, and section labels.

The color logic is a **pillar system**: News carries red `#bb3a3c`, Opinion carries orange `#e05e00`, Sport runs blue `#0084c6`, Culture goes pink `#ed145b`, Lifestyle hits magenta `#bb3b80`. Each pillar is a load-bearing brand signal — the section nav underline switches color, the section card top rule switches color, the kicker label color-codes the section. The Guardian is the only major news brand that lets section identity drive multiple chromatic accents.

Two voltage moments anchor the brand: the **navy** (`#052962`) carries the masthead, the support-us band, the navy CTA pills; the **breaking-news red** (`#c70000`) carries LIVE chips, alert banners, and election-night urgency. The **sun-yellow** `#ffe500` is the most distinctive of all — it carries the "Support the Guardian" CTA pill, the most successful donation-driven CTA in news media, and pairs ink-on-yellow at near-AAA contrast.

**Key Characteristics:**
- Paper-white canvas (`#ffffff`) with Guardian navy (`#052962`) masthead band and section nav
- Custom Guardian Egyptian slab serif for headlines + Guardian Text Sans for meta — slab is the brand
- Pillar color-coding system: News red / Opinion orange / Sport blue / Culture pink / Lifestyle magenta
- 4px section-pillar top rule on cards — load-bearing color signal
- Signature sun-yellow (`#ffe500`) "Support the Guardian" pill — the canonical donation CTA
- Pill-shaped primary CTAs (9999px radius) — distinct from NYT/WaPo's square corners
- Single signal red (`#c70000`) for LIVE chips and alerts
- 1px `#dcdcdc` hairlines between river stories
- Italic Guardian Egyptian 28px pull-quote between two navy rules
- 1300px maximum content width — wider than NYT/WaPo's 1200px (Guardian runs more horizontal)
- Open-source body fallback: Source Serif Pro at 400 + Inter at 700 for sans

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): paper field across most pages. Section sub-bands (Opinion buff, Long Read cream, Culture tint) introduce warmth.
- **Ink** (`#121212`): dominant text. Slightly softened from absolute black — matches NYT discipline.
- **Guardian Navy** (`#052962`): brand color #1. The masthead band, the support-us band, the navy CTA pills, inline links. Not a generic navy — it's the Guardian's specific deep blue, calibrated since 2005.

### Brand & Pillar Colors
- **Brand Navy** (`#052962`) — masthead, primary CTA pills, link color
- **Brand Light** (`#0c4ea0`) — interactive hover state
- **Brand Dark** (`#041c46`) — pressed state
- **News Pillar** (`#bb3a3c`) — News section accent (top rule, kicker)
- **Opinion Pillar** (`#e05e00`) — Opinion section accent
- **Sport Pillar** (`#0084c6`) — Sport section accent
- **Culture Pillar** (`#ab0613`) — Culture section accent (deeper red than the news red)
- **Lifestyle Pillar** (`#bb3b80`) — Lifestyle section accent
- **Environment Pillar** (`#509e2f`) — Environment section accent (sometimes used)

### Accent
- **Breaking-News Red** (`#c70000`) — LIVE chips, alert bars, election overlay. Distinct from News-pillar red (`#bb3a3c`); breaking red is brighter, more arterial.
- **Sun Yellow** (`#ffe500`) — the "Support the Guardian" pill, the donation banner, Opinion section ground. The most chromatically loud element on the brand.
- **Long Read Orange** (`#ff7f0f`) — Long Read section badge.
- **Long Read Cream** (`#fff4e2`) — Long Read body ground.

### Interactive
- **Default Link** (`#052962` text + underline-on-hover) — the navy itself is the link color
- **Active CTA** (`#052962` pill / `#ffe500` support-us pill)
- **Disabled** (`#bbbbbb` text on `#dcdcdc` surface)
- **Selected** (saved-article chip with navy fill + white text)

### Neutral Scale
- **Ink** (`#121212`) — headlines, body
- **Muted** (`#707070`) — bylines, datelines
- **Soft** (`#999999`) — captions, secondary meta
- **Faint** (`#bbbbbb`) — disabled
- **Hairline** (`#dcdcdc`) — universal rule color

### Surface & Borders
- **Canvas** (`#ffffff`)
- **Surface Soft** (`#f6f6f6`) — Opinion buff ground, sidebar, disabled fill
- **Surface Strong** (`#dcdcdc`) — heavy disabled fill
- **Surface Quote** (`#fff4e2`) — Long Read ground, paper-cream pull-quote backdrop
- **Section Tints** — Opinion `#f6f6f6`, Long Read `#fff4e2`, Sport `#fff4f2`, Culture `#fdf0e9`, Lifestyle `#fbeee7`
- **Hairline** (`#dcdcdc`) — default 1px rule
- **Border Strong** (`#999999`) — form input border
- **Border Rule** (`#052962`) — navy section rule (1.5px)

### Shadow Colors
The Guardian uses neutral-gray shadows on chrome, never on editorial cards.
- `rgba(0,0,0,0.04) 0 2px 4px` — dropdown
- `rgba(0,0,0,0.08) 0 6px 16px` — overlay
- `rgba(0,0,0,0.18) 0 12px 32px` — modal lift

### Semantic
- **Success** (`#1a7f37` on `#e3f2e7`) — subscription confirmed
- **Warning** (`#ff7f0f` on `#fff0db`) — paywall warning, advisory banner (Long Read orange does double duty)
- **Danger** (`#c70000` on `#fde2e2`) — form errors share breaking-news red
- **Info** (`#052962` on `#e3eaf2`) — informational shares the navy

## 3. Typography Rules

### Font Family

**Display**: `Guardian Egyptian Headline` — Christian Schwartz & Paul Barnes, Commercial Type, commissioned for the Guardian's 2005 redesign. A slab serif with stronger contrast than Cheltenham or Imperial; available in 400, 500, 600, 700, 800, 900. Fallback: `Georgia, "Times New Roman", serif`.

**Body Serif**: `Guardian Text Egyptian` — the body cut of the same family, slightly-warmer x-height, available in 400, 500, 700.

**Sans / Meta**: `Guardian Text Sans` — paired sans for bylines, captions, section labels, button labels, navigation. Available in 400, 500, 700. Fallback: `"Helvetica Neue", Helvetica, Arial, sans-serif`.

**Mono**: System mono for code-adjacent moments (rare). Fallback: `Menlo, Consolas, "Courier New", monospace`.

**OpenType features**: Guardian Egyptian uses standard ligatures and tightly-tuned kerning at display sizes. Body uses default lining figures (the Guardian breaks NYT discipline here — body uses lining, not old-style).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| masthead-wordmark | Guardian Egyp | 60 | 900 | 1.0 | -0.01em | liga, kern | "The Guardian" wordmark |
| headline-mega | Guardian Egyp | 50 | 700 | 1.05 | -0.01em | — | Election night, breaking-mega |
| headline-jumbo | Guardian Egyp | 40 | 700 | 1.07 | -0.005em | — | Top-of-fold lead |
| headline-xl | Guardian Egyp | 32 | 700 | 1.1 | 0 | — | Above-fold secondary |
| headline-lg | Guardian Egyp | 26 | 700 | 1.13 | 0 | — | River lead |
| headline-md | Guardian Egyp | 22 | 700 | 1.18 | 0 | — | River sub |
| headline-sm | Guardian Egyp | 18 | 700 | 1.22 | 0 | — | Compact module |
| deck | Guardian Egyp | 17 | 400 | 1.4 | 0 | — | Sub-headline / standfirst (not italicized — distinct from NYT/WaPo) |
| body-md | Guardian Text Egyp | 17 | 400 | 1.5 | 0 | — | Default running text — slab serif |
| body-sm | Guardian Text Egyp | 15 | 400 | 1.5 | 0 | — | Compact card body |
| pull-quote | Guardian Egyp (italic) | 28 | 400 | 1.3 | 0 | — | Italic slab between two navy rules |
| byline | Guardian Sans | 14 | 700 | 1.3 | 0 | — | "Maggie Haberman in Washington" — sans, weight 700 |
| dateline | Guardian Sans | 13 | 400 | 1.3 | 0 | — | "Tue 5 Nov 2024 11.42 GMT" |
| section-label | Guardian Sans | 13 | 700 | 1.0 | 0 | — | "Politics" / "World" / "Opinion" — title case (lowercase tradition) |
| caption | Guardian Sans | 13 | 400 | 1.4 | 0 | — | Photo / video caption |
| photo-credit | Guardian Sans | 11 | 400 | 1.3 | 0 | — | "Photograph: Carl Court/Getty Images" |
| micro-meta | Guardian Sans | 12 | 500 | 1.2 | 0 | — | "5 min read" / "Live" |
| button-label | Guardian Sans | 16 | 700 | 1.0 | 0 | — | "Sign in" / "Support us" |
| nav-link | Guardian Sans | 16 | 700 | 1.0 | 0 | — | Top utility nav |
| pillar-tab | Guardian Sans | 17 | 700 | 1.0 | 0 | — | Pillar tabs (News, Opinion, Sport, Culture, Lifestyle) |
| live-badge | Guardian Sans | 11 | 700 | 1.0 | 0.06em | uppercase | "LIVE" red chip |

### Principles

- **Slab serif is the headline voice.** Guardian Egyptian's slab terminals give headlines more visual weight than Cheltenham or Bodoni — the brand's signature typographic move.
- **Sentence case (not uppercase) on pillar tabs.** "Opinion" / "Sport" / "Culture" — title case, never uppercase. The Guardian rejects all-caps section labels (NYT and WaPo use uppercase tracked); the Guardian uses sentence case at sans-serif weight 700 for visual quietness.
- **Sans for meta, slab for body.** The pairing of slab body with sans meta is the Guardian's distinctive duet — neither all-serif (NYT) nor sans-body (WaPo).
- **Lining figures in body** — the Guardian breaks the NYT old-style figures convention. Numbers ($1,247) sit on the baseline at consistent height. This matches Sport's data tables (match scores, lap times) without OpenType-feature switching.
- **Negative tracking only on display 32px+** — body sits at 0; meta sits at 0.
- **Italic slab pull-quote** — the 28px italic Guardian Egyptian between two navy rules has a slabbed flavor distinct from NYT's Cheltenham (more humanist) and WaPo's Postoni (more contrasted Bodoni).
- **620px reading column** — same as the Washington Post; slightly wider than the NYT.
- **Source Serif Pro is the closest open-source slab fallback** — adjusted for slightly less slab than Guardian Egyptian. Inter / Helvetica for sans.

## 4. Component Stylings

### Buttons

**`button-primary`** — Guardian navy fill (`#052962`), white text, **9999px radius (pill)**, 12×22px padding, 44px height, 16px / 700 sans label. The pill is the Guardian's canonical CTA shape. "Sign in", "Continue", "Save".

**`button-support`** — Sun-yellow fill (`#ffe500`), ink text (`#121212`), 9999px pill. The "Support the Guardian" donation CTA — the brand's most-clicked monetization element.

**`button-secondary`** — White fill, navy text, 1px navy border, 9999px pill. "Already a subscriber".

**`button-text-link`** — Plain navy text (`#052962`), no surface, no border. Underlined.

### Live & Alert

**`live-badge`** — Breaking-news red fill (`#c70000`), white text, 4px radius (small but not pill), 2×6px padding, 11px / 700 sans uppercase tracked 0.06em. White pulsing dot to its left.

**`alert-banner`** — Full-bleed red bar (`#c70000`) at top of page, 10px vertical padding, white sans 14/700 text + a "Live updates →" link.

### Cards

**`card-headline`** — White surface, 0px radius, top 1px hairline (`#dcdcdc`), no shadow. Image above (16:9), Guardian Egyptian 22/700 headline, 17/400 deck (not italic — Guardian breaks this convention), Guardian Sans 14/700 byline.

**`card-section-kicker`** — Same structure but with a **4px top rule in the section's pillar color**. The pillar color carries the section identity — a Sport card has a 4px `#0084c6` blue top rule, an Opinion card has a 4px `#e05e00` orange rule. This is the most identifying card pattern on the Guardian.

**`card-opinion`** — Sun-yellow ground (`#ffe500`) with ink text. Italic deck under the columnist photo. The yellow Opinion card is the brand's most chromatically loud editorial card — used to telegraph "this is opinion, not reporting".

**`card-longread`** — Paper-cream ground (`#fff4e2`) with serif body. Long Read identifier in 11/400 orange.

**`card-newsletter-promo`** — Navy ground (`#052962`), white headline, sun-yellow Subscribe pill.

### Pull-Quote

**`pull-quote`** — Italic Guardian Egyptian 28px / 1.3, between two 1px navy (`#052962`) rules at 24px vertical padding. The slab italic gives the pull-quote a different visual flavor than NYT's Cheltenham or WaPo's Postoni.

### Inputs / Forms

**`text-input`** — White fill, 1px `#999999` border, 4px radius, 44px height, 12×14px padding. On focus, border thickens to 2px navy.

**`paywall-cta`** / **support-us-card** — Navy ground (`#052962`), white headline, white sub-copy, sun-yellow pill CTA. The Guardian's paywall is unusual: it's not a hard paywall but a "support us" pitch that asks rather than blocks.

### Navigation

**`top-masthead`** — Navy band (`#052962`) full-width, ~56px height. White Guardian wordmark left, navy support-us yellow pill right. Below: a row of pillar tabs.

**`nav-pillar-tab`** — Sits on the navy band. White text, sentence case ("Opinion" / "Sport"). Each tab carries a 4px bottom border in the pillar's color. Active tab: bottom border thickens to 6px.

**`section-subnav`** — White surface, 1px bottom hairline. Section-specific sub-links (e.g., under News: UK / World / Climate / Politics / Business) in navy text.

### Decorative

**`section-rule`** — 1.5px navy rule.

**`pillar-stripe`** — 4px pillar-color stripe — appears at the top of every section card and beneath the active pillar tab.

**`hairline-rule`** — 1px `#dcdcdc` between river stories.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 120`
- Section padding: 64px between major bands
- Card internal: 16px between image and headline; 8px between headline and deck

### Grid & Container

- Max content width: **1300px** centered (wider than NYT/WaPo's 1200) on a 12-column grid
- Reading column: **620px**
- Feature container: **1024px** for above-fold image+headline
- Footer: 5-column link list at desktop

### Whitespace Philosophy

The Guardian runs **structurally explicit** rather than dense — the pillar bands and 4px section rules visually segment the page into chapters. River cards stack with 16px gutters and 1px hairlines, but the eye is drawn first to the pillar color stripes that group cards by section. The reading column at 620px gives generous body whitespace.

### Section Cadence

- News pillar: white ground, news-red kicker rules
- Opinion: yellow ground (`#ffe500`) on featured columns; otherwise white with orange kicker
- Sport: white ground, sport-blue kicker rule
- Culture: cream tint (`#fdf0e9`) sub-band
- Lifestyle: cream tint (`#fbeee7`) sub-band
- Long Read: paper-cream ground (`#fff4e2`)
- Election / breaking: full-bleed red alert above the masthead

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0px | Cards, photos, alerts, sections — the editorial body |
| Small | 4px | Live badge, micro-tags, text input |
| Pill | 9999px | All primary CTAs (navy pill, yellow Support pill, secondary outline) — the Guardian's signature |

**The Guardian's distinctive shape choice**: primary CTAs are *pills*, not squares like NYT/WaPo. The 9999px-radius button is part of the brand. This is one of the strongest divergences between the Guardian and its American broadsheet peers — the Guardian shipped pill-shaped CTAs in its 2018 redesign and they have only intensified since.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Article body, hero, section bands |
| 1 — Hairline | 1px `#dcdcdc` rule | River cards, table rows |
| 2 — Pillar Stripe | 4px pillar-color rule | Section card top, active pillar tab underline |
| 3 — Section Rule | 1.5px navy rule | Section break |
| 4 — Dropdown | `rgba(0,0,0,0.04) 0 2px 4px` | Account menu |
| 5 — Overlay | `rgba(0,0,0,0.08) 0 6px 16px` | Search overlay |
| 6 — Modal | `rgba(0,0,0,0.18) 0 12px 32px` | Support-us modal |

### Shadow Philosophy

The Guardian carries the most diverse rule-tier system of the major news brands: 1px hairline + 1.5px navy section rule + **4px pillar stripe**. The pillar stripe is unique — it's color-coded depth, telegraphing section identity through hue rather than weight. Shadows are reserved for chrome (dropdowns, modals); editorial surfaces stay flat-with-rules.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry
- **Out-soft**: `cubic-bezier(0.0, 0, 0.2, 1)` — image carousel

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 100ms | Color swaps, hairline thickening |
| Standard | 200ms | Card hover, pillar-tab underline thickening |
| Slow | 320ms | Modal enter, alert-banner slide |
| Pulse | 1.6s | Live-dot continuous pulse |

### Per-Component Recipes

- **Card hover**: image scales 1.0 → 1.02; headline gains underline; 200ms standard.
- **Pillar-tab hover**: bottom-border thickens 4px → 6px over 200ms standard.
- **Live-dot pulse**: opacity 1 → 0.4 → 1, scale 1 → 1.15 → 1, 1.6s ease-in-out infinite.
- **Support-us pill hover**: yellow brightens slightly, scale 1.0 → 1.02 over 200ms (the only CTA with a scale hover — the support pill is the brand's most-tested CTA).
- **Alert-banner enter**: translateY(-8px → 0) + opacity(0 → 1) over 240ms emphasized.

### Page Transitions

200ms cross-fade between pages.

### Reduced Motion

Live-dot becomes static; pillar-tab underline-thickening becomes instant; support-pill hover scale suppressed.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #121212 ink on #ffffff canvas | 17.4 | AAA |
| #ffffff on #052962 navy | 14.0 | AAA |
| #ffffff on #c70000 breaking-red | 5.9 | AA / AAA large |
| #121212 on #ffe500 sun-yellow | 17.0 | AAA |
| #707070 muted on #ffffff | 4.9 | AA |
| #052962 link on #ffffff | 14.0 | AAA |
| #121212 on #fff4e2 long-read-cream | 16.5 | AAA |
| #121212 on #f6f6f6 opinion-buff | 16.6 | AAA |

### Focus Indicators

Focus ring: `2px solid #052962` (navy) with 2px outline-offset. Brand navy doubles as link color, so focus ring matches the editorial link discipline. Red is reserved for live content.

### ARIA Patterns

- **Live blogs**: `role="region"` with `aria-live="polite"` on the live-update body. LIVE chip carries `aria-label="Live coverage in progress"`.
- **Pillar nav**: `<nav aria-label="Sections">` with each pillar a link, active marked `aria-current="page"`.
- **Support modal**: `role="dialog"`, `aria-modal="true"`, focus trapped, Esc closes.
- **Audio**: every premium feature has `aria-label="Listen to this article, X minutes Y seconds"`.
- **Save-article chip**: `aria-pressed`.

### Keyboard Navigation

- Top nav: Tab moves Logo → Pillar tabs → Support button → Sign in → Search
- Pillar tabs: arrow keys traverse left-right (a tab-list pattern)
- Article body: Tab skips photos, lands on inline links
- Skip-link first

### Screen Reader Hints

- Photo credits: "Photograph: [Name] / [Outlet]"
- Live-dot is `aria-hidden="true"`
- Pillar color is decorative — `aria-hidden` on the stripe; section name carries the announcement
- "Support the Guardian" CTA carries `aria-label="Support the Guardian — make a contribution"`

### Reduced Motion

Live-dot becomes static; pillar-tab transitions instant; support-pill scale suppressed.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <660px | Top masthead collapses to logo + hamburger + Support; pillar tabs hide behind hamburger; river cards 1-up |
| Tablet | 660–980px | Pillar tabs as horizontal scroller; river cards 2-up |
| Desktop | 980–1300px | Full pillar nav; river cards 3-up; sidebar appears on article pages |
| Wide | >1300px | Content caps at 1300px; gutters absorb the rest |

### Touch Targets

- Primary CTAs (pill): 44×44px
- Pillar tabs: 56px tall touch area (taller than NYT/WaPo nav targets)
- Save-article chip: 36×36px
- Live-update entries: 48px tap area

### Collapsing Strategy

- Pillar tabs collapse to scroller, then hamburger
- Support-us pill stays visible at all breakpoints — the brand's monetization CTA
- River cards drop column count: 4 → 3 → 2 → 1
- Sidebar collapses below article body on tablet

### Image Behavior

- River images: `aspect-ratio: 5/3` desktop, `4/3` mobile (the Guardian's slightly more landscape ratio)
- Hero images: full-bleed up to 1024px
- Photo essays: scroll-snap on touch

### Container Queries

The right-rail "Most viewed" list compresses headlines to single-line truncate when narrow.

## 11. Content & Voice

### Tone

Plainspoken, progressive, accountability-focused, slightly more conversational than NYT/WaPo. The Guardian's voice carries an explicit editorial perspective — the brand is reader-funded and openly progressive on climate, inequality, and rights coverage. Headlines lead with the consequence and the affected ("How the climate crisis is reshaping the world's oceans"); decks add specifics.

### Microcopy Patterns

- **Subscribe verbs**: "Support us", "Make a contribution", "Continue", "Sign in" — the support-us framing is distinctive (rather than NYT's "Subscribe")
- **Paywall messages**: "We've never put up a paywall. We rely on millions of readers like you to support our journalism. Will you make a contribution today?"
- **Comments**: "Comments closed" appears 72 hours after publication
- **Error messages**: full-sentence with explicit remedy
- **Empty state — saved articles**: "You haven't saved any articles yet. Tap the bookmark icon on any article to save it."

### CTA Verb Conventions

- Primary action: **"Support us"**, **"Continue"**, **"Sign in"**, **"Read more"**, **"Make a contribution"**
- Secondary action: **"Save"**, **"Share"**, **"Listen"**
- Tertiary: **"More on this story"**, **"View all updates"**
- Avoided: "Click here", "Submit", "Subscribe" (Guardian uses "Support" — explicitly reader-funded framing)

### Empty States

- Saved articles: "You haven't saved any articles yet. Tap the bookmark icon on any article."
- Search: "We couldn't find any articles matching your search. Try different keywords or browse our sections."
- Comments closed: "Comments are closed on this article. Comments are typically open for the first 72 hours after publication."

## 12. Dark Mode & Theming

The Guardian ships **a system-level dark mode** via account preferences:

- `bg`: `#1a1a1a` — softened black (warmer than WaPo's pure black)
- `surface`: `#1a1a1a`
- `surface-soft`: `#262626`
- `text`: `#f5f5f5`
- `text-muted`: `#bdbdbd`
- `brand`: `#7ba9d8` — navy lifts to a softer blue for dark-mode legibility
- `brand-red`: `#ff3333` — brightened for AA on dark
- `brand-yellow`: `#ffe500` — kept the same; sun-yellow reads on dark
- `link`: `#7ba9d8`
- `border`: `#333333`
- `border-rule`: `#7ba9d8` (navy → soft-blue inversion)

Dark mode preserves all section pillar colors with luminance adjustments — Sport blue lifts to `#7ba9d8`, Opinion orange brightens, Culture pink stays close to AAA against dark ground. The slab-serif Guardian Egyptian and sans Guardian Text Sans typefaces are unchanged.

## 13. Lineage & Influences

The Guardian's visual lineage is the **British broadsheet redesigned as the world's first digital-native newspaper**. The 2005 print redesign, led by Mark Porter (creative director) and Christian Schwartz / Paul Barnes (typeface designers), introduced Guardian Egyptian as the headline face — the first major newspaper since the 1960s to commission a full custom slab-serif family. The 2018 web redesign, led by Anna Tew, modernized the digital surface with pillar tabs, the pill-shaped CTA, and the explicit pillar color system.

The Guardian's most significant editorial-design innovation is the **support-us model** — a "no paywall, ask for contributions" approach that pairs the sun-yellow pill CTA with the explicit messaging "We've never put up a paywall." This positioning has been imitated by the Guardian's own affiliates and competitors (the BBC, Reuters), but the visual language (yellow pill, navy ground, explicit appeal) remains the Guardian's signature.

What the Guardian rejects: paywall-driven interruption, all-uppercase section labels (sentence case is the rule), serif body in modernist news section (slab serif body is preserved), tracked uppercase nav (sentence-case nav). What it borrows from: **The Times of London's** masthead authority (with explicit pillar coding added), **Financial Times'** color-coded section identity (the Guardian extends the FT's salmon-and-pink to a five-pillar system), and **The Independent's** pre-2014 slab-serif headline tradition.

**Influences:**
- Guardian Egyptian (2005) — Christian Schwartz & Paul Barnes / Commercial Type — [commercialtype.com](https://commercialtype.com)
- Mark Porter — creative director of the 2005 redesign — [markporter.com](https://markporter.com)
- Anna Tew — head of design 2014–2022 — modernized the digital surface
- "Support the Guardian" model — explicit reader-funded framing
- The Times of London — broadsheet masthead lineage
- Financial Times — color-coded section identity precedent

## 14. Do's and Don'ts

**Do**
- Set headlines in Guardian Egyptian (slab serif) at 700 with negative tracking (-0.005em → -0.01em at display sizes)
- Run body in Guardian Text Egyptian — slab serif, not sans, not non-slab serif
- Use Guardian navy (`#052962`) for the masthead, primary CTAs, and inline links
- Use the sun-yellow (`#ffe500`) pill for the "Support the Guardian" CTA — the brand's monetization signature
- Use **pill-shaped (9999px radius) primary CTAs** — distinct from NYT/WaPo's square corners
- Apply pillar color stripes (4px top rule on cards) to telegraph section identity — News red, Opinion orange, Sport blue, Culture pink, Lifestyle magenta
- Use sentence case (not uppercase) on pillar tabs — "Opinion" not "OPINION"
- Set section labels in Guardian Sans 13/700 sentence case
- Use lining figures in body (the Guardian breaks the NYT old-style figure convention)
- Apply the italic Guardian Egyptian 28px pull-quote between two navy rules

**Don't**
- Don't use uppercase tracked Franklin Gothic for nav labels — that's NYT/WaPo language
- Don't use square-cornered CTAs — the Guardian commits to pill CTAs
- Don't use the breaking-news red (`#c70000`) for body links or decoration — it's a signal
- Don't drop the pillar color system — the section-identity stripe is brand-load-bearing
- Don't use a generic blue for links — the editorial link is the navy itself (`#052962`)
- Don't use "Subscribe" — the brand verb is "Support us" or "Make a contribution"
- Don't use a hard paywall — the Guardian asks rather than blocks
- Don't apply shadows to article cards — the pillar stripe is the depth signal
- Don't drop sentence case on section labels — uppercase is NYT/WaPo, not Guardian
- Don't break the 620px reading column

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #ffffff
Ink:              #121212
Guardian-Navy:    #052962
Breaking-Red:     #c70000
Sun-Yellow:       #ffe500
News-Pillar:      #bb3a3c
Opinion-Pillar:   #e05e00
Sport-Pillar:     #0084c6
Culture-Pillar:   #ab0613
Lifestyle-Pillar: #bb3b80
Long-Read-Cream:  #fff4e2
```

### Example Component Prompts

- "Create a Guardian masthead: navy band (#052962) full-width 56px tall. White 'The Guardian' wordmark in Guardian Egyptian 60/900 with -0.01em tracking, flush left. Right side: yellow (#ffe500) 'Support us' pill button with ink text. Below the band: a row of pillar tabs ('News', 'Opinion', 'Sport', 'Culture', 'Lifestyle') in white 17/700 sentence-case sans on navy, each carrying a 4px bottom stripe in its pillar color."
- "Design a Guardian section card: white surface, 0px radius, **4px top rule in the section's pillar color** (e.g., 4px #0084c6 blue for Sport, 4px #e05e00 orange for Opinion). Image above 16:9, then Guardian Egyptian 22/700 headline, 17/400 deck (not italic), Guardian Sans 14/700 byline, 12/500 micro-meta."
- "Build a Guardian Support button: sun-yellow (#ffe500) fill, ink (#121212) text in Guardian Sans 16/700 ('Support us'), **9999px pill radius**, 12×24px padding, 44px height. Hover: brightens slightly + scale 1.0 → 1.02 over 200ms."
- "Create a Guardian live-coverage badge: red (#c70000) fill, white 'LIVE' in Guardian Sans 11/700 uppercase tracked 0.06em, 4px radius, 2×6px padding. White pulsing dot to the left, 1.6s opacity 1→0.4→1 + scale 1→1.15→1."
- "Design a Guardian pull-quote: italic Guardian Egyptian 28/1.3, ink, between two 1px navy (#052962) rules at 24px vertical padding. The slab-italic gives it a different flavor than Cheltenham or Bodoni."
- "Build a Guardian support-us card: navy ground (#052962), white headline in Guardian Egyptian 24/700 ('We've never put up a paywall'), white sub-copy in Guardian Text Egyptian 17/400, sun-yellow pill 'Support us' CTA below. 32×24px padding, 0px radius."

### Iteration Guide

1. **Start on white with navy chrome.** The masthead is the navy band; everything else lives on white. The contrast between navy chrome and white body is the brand.
2. **Slab serif headlines, slab serif body, sans meta.** Guardian Egyptian for both display and body, Guardian Sans for bylines and labels.
3. **Pillar stripes telegraph section.** Every section card should carry its 4px top stripe in the section pillar color — News red, Opinion orange, Sport blue, Culture pink, Lifestyle magenta.
4. **Pill-shaped CTAs, never squares.** The 9999px radius is the Guardian's CTA shape. Square corners read as NYT/WaPo, not Guardian.
5. **Sentence case on labels.** "Opinion" not "OPINION". "Sport" not "SPORT". Guardian rejects all-caps section labels.
6. **Sun-yellow is for support, not decoration.** The yellow pill is the donation CTA — using it for anything else dilutes the signal.
7. **620px reading column.** Same as WaPo, slightly wider than NYT.
8. **Lining figures in body** — `font-variant-numeric: lining-nums`. Not old-style.
