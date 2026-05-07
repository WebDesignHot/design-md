---
name: Twilio
tagline: Signal-red `#f22f46` against clean white — communications APIs given the visual weight of a broadcast colour.
updated_at: 2026-05-06T01:20:47+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://twilio.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, sans, structured, bright, cool]
preview_swatch: ['#ffffff', '#f22f46', '#0d122b']
related: [stripe, sendgrid, vercel]
description: 'Twilio''s site is anchored by one of the most recognisable single-colour brand decisions in dev tools — the signal red `#f22f46`. The canvas stays mostly white with cool navy text and pale-blue panels; red is reserved for the wordmark, the primary CTA, and selective accent highlights. Twilio Sans handles every weight, and the layout pacing is broadcast-grade: confident headlines, generous whitespace, and product cards arranged like a network diagram.'

colors:
  # Primary
  bg: '#ffffff'                    # white canvas
  bg-soft: '#f4f4f6'               # cool grey-blue panel
  bg-blue: '#e1eeff'               # pale-blue accent band
  bg-blue-deep: '#cee0fa'          # deeper blue panel
  bg-navy: '#0d122b'               # deep navy hero band
  surface: '#fafafc'               # softer white panel
  surface-2: '#f7f7f9'             # hover panel
  surface-3: '#eeeef2'             # pressed panel
  surface-navy: '#1a1f3a'          # dark-mode card

  # Text
  text: '#0d122b'                  # deep navy body
  text-strong: '#000000'           # display, full black
  text-muted: '#5b6079'             # captions
  text-soft: '#8b8e9e'              # tertiary
  text-faint: '#b5b8c4'             # disabled
  text-on-brand: '#ffffff'          # white on red
  text-on-navy: '#ffffff'           # white on navy band
  text-on-navy-muted: '#a8acc1'     # muted on navy

  # Brand
  brand: '#f22f46'                  # signature signal red
  brand-strong: '#d6203a'           # pressed
  brand-active: '#b8182f'           # active state
  brand-soft: '#fde7eb'             # palest red wash
  brand-soft-2: '#fbd5dc'           # red badge tint

  # Accent
  accent: '#0d122b'                 # navy as supporting accent
  accent-blue: '#3da9fc'            # secondary "API" blue (SendGrid lineage)
  accent-blue-deep: '#1e7fd9'       # deeper API blue
  accent-blue-soft: '#dcefff'       # blue tint

  # Borders
  border: '#0d122b1f'               # 12% navy rule
  border-strong: '#0d122b33'        # 20% navy emphasis
  border-soft: '#0d122b10'          # 6% navy soft
  border-navy-on-dark: '#22253a'    # on dark band
  border-focus: '#f22f46'           # red focus ring

  # Semantic
  success: '#1bb564'
  success-bg: '#dcf6e7'
  warning: '#f59e0b'
  warning-bg: '#fef3c7'
  danger: '#f22f46'                 # reuses brand
  danger-bg: '#fde7eb'
  info: '#3da9fc'
  info-bg: '#dcefff'
  on-brand: '#ffffff'

typography:
  display:
    family: '"Twilio Sans Display", "Twilio Sans", "Söhne", Inter, "Helvetica Neue", Arial, sans-serif'
    weights: [500, 600, 700]
    opentype-features: 'kern, liga'
  body:
    family: '"Twilio Sans Text", "Twilio Sans", Inter, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"Twilio Sans Mono", "JetBrains Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.025em', family: display }
    display-xl:      { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    display-lg:      { size: 52, weight: 700, lineHeight: 1.08, tracking: '-0.018em', family: display }
    h1:              { size: 44, weight: 700, lineHeight: 1.1,  tracking: '-0.015em', family: display }
    h2:              { size: 36, weight: 700, lineHeight: 1.15, tracking: '-0.012em', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.3,  tracking: '0',        family: body }
    h5:              { size: 18, weight: 600, lineHeight: 1.4,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 14, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    caption:         { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.4,  tracking: '0.06em',   family: mono }
    code:            { size: 14, weight: 400, lineHeight: 1.6,  tracking: '0',        family: mono }
    code-micro:      { size: 12, weight: 500, lineHeight: 1.5,  tracking: '0',        family: mono }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  xl: 12
  xxl: 16
  featured: 24
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72
  hero-y: 96
  section-y: 96
  gutter: 24

components:
  button-primary:
    bg: '#f22f46'
    text: '#ffffff'
    radius: 4
    paddingX: 20
    paddingY: 12
    font: 'Twilio Sans 600 / 14px'
    hover: 'bg #d6203a'
  button-secondary:
    bg: '#ffffff'
    text: '#0d122b'
    radius: 4
    border: '1px solid #0d122b'
    paddingX: 20
    paddingY: 12
    hover: 'bg #f4f4f6'
  button-ghost:
    bg: 'transparent'
    text: '#0d122b'
    radius: 4
    paddingX: 20
    paddingY: 12
    hover: 'bg #f4f4f6'
  card-default:
    bg: '#ffffff'
    radius: 8
    padding: 32
    border: '1px solid #0d122b1f'
    shadow: 'none'
  card-blue:
    bg: '#e1eeff'
    radius: 8
    padding: 32
    border: 'none'
    use: 'API code samples'
  input-text:
    bg: '#ffffff'
    border: '1px solid #0d122b33'
    radius: 4
    paddingX: 14
    paddingY: 11
    focus: 'border #f22f46 + ring 2px rgba(242,47,70,0.2)'
  badge:
    bg: '#f4f4f6'
    text: '#0d122b'
    radius: 4
    paddingX: 8
    paddingY: 3
    font: 'Twilio Sans 600 / 12px'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-soft: 'cubic-bezier(0.45, 0, 0.55, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 320
  duration-cinematic: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce — scroll-triggered reveals collapse to opacity-only fade, hover state changes preserve color but drop motion'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: '0 1px 2px rgba(13,18,43,0.04)'
  standard: '0 4px 12px rgba(13,18,43,0.06)'
  elevated: '0 8px 24px rgba(13,18,43,0.08)'
  deep: '0 16px 48px rgba(13,18,43,0.12)'
  ring: '0 0 0 2px rgba(242,47,70,0.5)'
  ring-blue: '0 0 0 2px rgba(61,169,252,0.5)'

accessibility:
  contrast-text-on-bg: 16.4           # AAA — #0d122b on white
  contrast-strong-on-bg: 21.0         # AAA — black on white
  contrast-muted-on-bg: 6.2           # AA body, AAA large
  contrast-text-on-brand: 4.5         # AA at body — white on #f22f46
  contrast-text-on-navy: 16.4         # AAA — white on #0d122b
  contrast-blue-on-bg: 4.7            # AA — #3da9fc on white (use ≥18px)
  focus-ring: '2px solid #f22f46 with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive; tab order matches DOM source'

dark-mode: optional                  # Twilio docs offer dark mode; marketing site is light-only with navy inversion bands
---

## 1. Visual Theme & Atmosphere

Twilio's site is the canonical "developer fintech adjacent" trust palette — white canvas, deep-navy type, and the signature signal red `#f22f46` reserved for wordmark, CTAs, and selective accents. The H1 sets at 64px in Twilio Sans Display 700 with `-0.02em` tracking. Pages alternate between white, pale-blue panels, and the occasional deep-navy band; the red itself is kept extremely sparingly — it's a brand stamp, not a chromatic system.

The discipline distinguishes Twilio from louder dev-tool sites (Brex, Linear's gradient era) and from looser communications brands. The aesthetic feels **broadcast-grade**: confident, repeatable, slightly old-school in its tight 4-8px radii. The custom Twilio Sans family (display, text, mono) makes the type system fully proprietary and the tracking subtly wider than Inter, giving Twilio's pages a more institutional, less compressed rhythm.

The atmosphere is **communications-platform-as-network-diagram**. Product cards arrange in grids that read as service nodes — SMS, Voice, Email, Verify, Studio — each labelled in mono eyebrow. The pale-blue accent panel `#e1eeff` is reserved for code samples and endpoint diagrams; the deep navy `#0d122b` band shows up sparingly for hero feature reveals.

The closest sibling is Stripe — both lean on the white-canvas + single-saturated-CTA + classical-sans formula — but Twilio replaces Stripe's blue with red, and the radii are tighter. Where Stripe rounds buttons to 6–8px, Twilio holds at 4. That tightness is part of the broadcast voice.

**Key Characteristics**
- Signal red `#f22f46` reserved for wordmark + primary CTA only
- Deep navy `#0d122b` body text — never pure black
- White canvas with pale-blue API panel accents
- Twilio Sans across display, body, and mono (proprietary)
- Tight 4px button radius — institutional, broadcast-grade
- 8px card radius — tight by 2026 SaaS standards
- Mono eyebrow at 12px / 0.06em tracking
- Hairline-only depth — no soft shadows on most surfaces
- Navy `#0d122b` inversion band as rhetorical device
- 96px section vertical rhythm — disciplined, not cinematic

## 2. Color Palette & Roles

### Primary

- **bg** (`#ffffff`): primary white canvas
- **bg-soft** (`#f4f4f6`): cool grey-blue panel for alternating bands
- **bg-blue** (`#e1eeff`): pale-blue API accent panel — reserved for code and endpoint surfaces
- **bg-navy** (`#0d122b`): deep navy hero/feature band, used sparingly as inversion device
- **text** (`#0d122b`): deep navy body — Twilio's signature "not black, not blue, just navy" body color
- **text-strong** (`#000000`): full black for display only
- **on-brand** (`#ffffff`): white on red CTA

### Brand

- **brand** (`#f22f46`): signature signal red — the most recognisable single-colour brand decision in dev tools
- **brand-strong** (`#d6203a`): pressed CTA state
- **brand-active** (`#b8182f`): active state
- **brand-soft** (`#fde7eb`): palest red wash for chips and notification badges
- **brand-soft-2** (`#fbd5dc`): slightly deeper red badge tint

The red is held extremely tight — it appears on the wordmark, primary CTAs, and a small set of accent highlights (the underline on hovered nav items, the focus ring, error states). Beyond those, never.

### Accent

- **accent** (`#0d122b`): navy as the supporting accent — secondary buttons, dividers
- **accent-blue** (`#3da9fc`): secondary "API" blue inherited from SendGrid lineage — used for code-sample variable highlighting and "developer-y" UI moments
- **accent-blue-deep** (`#1e7fd9`): deeper API blue for emphasis
- **accent-blue-soft** (`#dcefff`): blue tint for badges

### Interactive

- **link**: `#0d122b` underlined (navy + 1px underline)
- **link-hover**: `#f22f46` (color shift to red on hover) + underline-grow
- **link-on-navy**: `#ffffff` underlined
- **selected**: `rgba(242,47,70,0.1)` — soft red tint
- **disabled**: `#b5b8c4` text on `#f4f4f6` bg

### Neutral Scale

- **text** `#0d122b` — body
- **text-muted** `#5b6079` — captions
- **text-soft** `#8b8e9e` — tertiary
- **text-faint** `#b5b8c4` — disabled
- **border** `#0d122b1f` (12% navy) — default rule
- **border-strong** `#0d122b33` (20% navy) — emphasis
- **border-soft** `#0d122b10` (6% navy) — softest

The borders are **navy-tinted, never grey** — that's the discipline that distinguishes Twilio from generic SaaS.

### Surface & Borders

- **surface** `#fafafc` — softer white card
- **surface-2** `#f7f7f9` — hover
- **surface-3** `#eeeef2` — pressed
- **surface-navy** `#1a1f3a` — dark-mode card on navy band

### Shadow Colors

Twilio's shadows are **navy-tinted** — `rgba(13,18,43,...)` — but used sparingly. Most surfaces are flat with hairlines. Shadows appear only on toasts, modals, and elevated product cards in feature sections.

- **shadow-ambient** `rgba(13,18,43,0.04)` — softest
- **shadow-standard** `rgba(13,18,43,0.06)` — light cards
- **shadow-elevated** `rgba(13,18,43,0.08)` — modals
- **shadow-deep** `rgba(13,18,43,0.12)` — overlays only

### Semantic

- **success** `#1bb564` on `#dcf6e7`
- **warning** `#f59e0b` on `#fef3c7`
- **danger** `#f22f46` on `#fde7eb` — reuses brand red
- **info** `#3da9fc` on `#dcefff` — reuses API blue

## 3. Typography Rules

### Font Family

- **Display**: Twilio Sans Display — proprietary face, sized for headings ≥24px
- **Body**: Twilio Sans Text — proprietary body face, optimised for paragraph rendering
- **Mono**: Twilio Sans Mono — proprietary monospace, used for eyebrows, code, version strings, label tags
- **OpenType**: standard `kern, liga` on display; `tnum` on mono for tabular numerals in pricing/code

The custom family runs slightly wider than Inter — character widths are 2–4% more generous, giving Twilio's pages a poised, less-compressed rhythm. This is the broadcast-grade signal.

### Hierarchy

| Role | Font | Size | Weight | Line H | Tracking | OT | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Twilio Sans Display | 80 | 700 | 1.0 | -0.025em | — | Above-fold hero |
| display-xl | Twilio Sans Display | 64 | 700 | 1.05 | -0.02em | — | Standard H1 |
| display-lg | Twilio Sans Display | 52 | 700 | 1.08 | -0.018em | — | Section opener |
| h1 | Twilio Sans Display | 44 | 700 | 1.1 | -0.015em | — | Subsection |
| h2 | Twilio Sans Display | 36 | 700 | 1.15 | -0.012em | — | Feature header |
| h3 | Twilio Sans Display | 24 | 600 | 1.25 | -0.005em | — | Card title |
| h4 | Twilio Sans Text | 20 | 600 | 1.3 | 0 | — | Component title |
| h5 | Twilio Sans Text | 18 | 600 | 1.4 | 0 | — | Inline label |
| body-lg | Twilio Sans Text | 18 | 400 | 1.55 | 0 | — | Hero subhead |
| body | Twilio Sans Text | 16 | 400 | 1.5 | 0 | — | Default paragraph |
| body-sm | Twilio Sans Text | 14 | 400 | 1.5 | 0 | — | Captions |
| label | Twilio Sans Text | 14 | 500 | 1.4 | 0 | — | Form & button |
| caption | Twilio Sans Text | 13 | 500 | 1.4 | 0 | — | Meta below cards |
| eyebrow | Twilio Sans Mono | 12 | 600 | 1.4 | 0.06em | — | Section taglines, ALL CAPS |
| code | Twilio Sans Mono | 14 | 400 | 1.6 | 0 | tnum | Inline code |
| code-micro | Twilio Sans Mono | 12 | 500 | 1.5 | 0 | tnum | Version tags |

### Principles

- **Twilio Sans across the entire system** — substituting Inter or Helvetica breaks the institutional voice
- **Display weight stays at 700** — 600 reads quiet at 64px, 800 reads aggressive
- **Tracking is moderate-negative** — `-0.02em` at 64px, never tighter than `-0.025em`
- **Mono eyebrow with `0.06em` tracking** — the 12px ALL CAPS mono signals "API documentation grade"
- **Body at 16px, not 17** — Twilio holds the SaaS norm; the cinematic spacing comes from layout, not larger type
- **Tabular numerals on mono** — code samples, pricing, and metric counters use `tnum`
- **No serif anywhere** — Twilio's editorial work is carried by structural rhythm
- **Width vs Inter** — Twilio Sans is 2–4% wider; this is the typographic broadcast signal

## 4. Component Stylings

### Buttons

**Primary CTA** — the red rectangle
- bg `#f22f46`, text `#ffffff`, radius `4px`
- padding `12px 20px`, Twilio Sans 600 14px
- hover: bg `#d6203a`, 200ms ease-standard
- focus: ring `2px solid #f22f46` + 2px offset
- use: every primary action — "Sign up", "Talk to sales", "Start building"

**Secondary Button**
- bg `#ffffff`, text `#0d122b`, border `1px solid #0d122b`, radius `4px`
- padding `12px 20px`, Twilio Sans 600 14px
- hover: bg `#f4f4f6`
- use: secondary action — "Read docs", "View pricing"

**Ghost Button**
- bg transparent, text `#0d122b`, radius `4px`
- padding `12px 20px`, Twilio Sans 500 14px
- hover: bg `#f4f4f6`
- use: tertiary nav, "Cancel", "Back"

**Inverted Button** (on navy band)
- bg `#ffffff`, text `#0d122b`, radius `4px`
- use: primary action sitting on `#0d122b` band

### Cards

**Card Default**
- bg `#ffffff`, radius `8px`, padding `32px`
- border `1px solid #0d122b1f` (12% navy hairline)
- **no shadow** — flat by default
- hover: border `#0d122b33` (20% navy), no other change

**Card Blue** (API code sample)
- bg `#e1eeff`, radius `8px`, padding `32px`
- no border
- use: code samples, endpoint diagrams, API explanation cards

**Card Navy** (on dark band)
- bg `#1a1f3a`, text `#ffffff`, radius `8px`, padding `32px`
- border `1px solid #22253a`
- use: feature cards inside `#0d122b` inversion band

### Badges & Tags

**Badge Default**
- bg `#f4f4f6`, text `#0d122b`, radius `4px`
- padding `3px 8px`, Twilio Sans 600 12px

**Badge Brand**
- bg `#fde7eb`, text `#d6203a`, radius `4px`

**Badge Mono** (changelog)
- bg `#f4f4f6`, text `#5b6079`, radius `2px`
- Twilio Sans Mono 12px

**Tag Eyebrow**
- bg transparent, text `#5b6079`, radius `0`
- Twilio Sans Mono 12px / 0.06em ALL CAPS

### Inputs & Forms

**Text Input**
- bg `#ffffff`, border `1px solid #0d122b33`, radius `4px`
- padding `11px 14px`, Twilio Sans 400 16px
- focus: border `#f22f46` + ring `2px rgba(242,47,70,0.2)`
- placeholder: `#8b8e9e`

**Phone Input** (Twilio's signature input)
- inline country selector left + number input right
- 4px radius, hairline border, mono digit rendering

### Navigation

**Top Nav**
- bg `#ffffff`, height `72px`, gutters `24px`
- Twilio wordmark (red) left, link cluster center (Products/Solutions/Developers/Pricing), red CTA right
- hairline `#0d122b1f` bottom on scroll
- mega-dropdown reveals on hover for Products column

**Footer**
- bg `#0d122b`, padding `96px 24px`
- 6-column white link grid, Twilio Sans 14px
- Twilio wordmark (white) bottom-left, social icons bottom-right

### Tabs / Tooltips / Toasts

**Tab Group** (in product feature reveals)
- underline-style: 2px `#f22f46` on active, 1px `#0d122b1f` on rest
- text `#0d122b` active, `#5b6079` rest

**Tooltip**
- bg `#0d122b`, text `#ffffff`, radius `4px`, padding `8px 12px`
- Twilio Sans 500 12px

**Toast**
- bg `#ffffff`, border `1px solid #0d122b1f`, radius `8px`, shadow elevated
- 16px Twilio Sans 500 message

## 5. Layout Principles

### Spacing System

- **base** `4px`, scale `[0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]`
- Density philosophy: **disciplined-spacious**. Not as cinematic as Framer (160px); not as packed as Linear (64). Twilio holds 96px section rhythm — broadcast pacing.

### Grid & Container

- **page-width** `1280px` with 24px gutters
- 12-column grid, sections rarely full-bleed
- Hero stays inside the container; navy band can full-bleed for emphasis
- **prose-width** `720px` — used for docs and long-form content

### Whitespace Philosophy

Twilio's whitespace is **institutional breathing**. Section vertical rhythm runs 96px between major bands — generous but not theatrical. Cards have 32px internal padding. The page mostly stays inside the 1280 container with hairline rules separating bands rather than full-bleed inversions.

### Section Cadence

The page reads as a measured sequence:
1. White hero with Twilio Sans Display 64
2. White feature row with bordered cards
3. Pale-blue band `#e1eeff` with code samples
4. White testimonial wall
5. Navy `#0d122b` inversion band (rare — reserved for major reveals)
6. White pricing
7. Navy footer

The navy band is the rhetorical climax — it shows up once or twice per page, never as ambient rhythm.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Mono badges, tags |
| Small | 4px | **Buttons, inputs** — Twilio's signature broadcast tightness |
| Medium | 6px | Tooltips, secondary panels |
| Large | 8px | **Default card** |
| XL | 12px | Featured cards |
| XXL | 16px | Modals |
| Featured | 24px | Hero shells (rare) |
| Pill | 9999px | Avatars, status badges only |

The signature radius decisions are the **4px button** (tightest in modern SaaS) and the **8px card**. Both are deliberately archaic by 2026 standards — most peers have softened to 8/12 buttons and 12/16 cards. Twilio's tighter corners are part of the institutional, broadcast-grade pose.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow, no border | Display copy on white |
| 1 | 1px hairline `#0d122b1f` | Resting cards |
| 2 | 1px hairline `#0d122b33` | Hovered cards |
| 3 | shadow-standard `0 4px 12px rgba(13,18,43,0.06)` | Toasts |
| 4 | shadow-elevated `0 8px 24px rgba(13,18,43,0.08)` | Modals |
| 5 | shadow-deep `0 16px 48px rgba(13,18,43,0.12)` | Overlays |

### Shadow Philosophy

Twilio's depth is **hairline-only** (1px / 12% navy). There are no soft shadows on most surfaces, no glassmorphism, no elevation choreography. Product stills sit inside flat 8px-radius cards with hairline borders. The deep-navy `#0d122b` band provides emotional contrast without requiring elevation effects — that's the rhetorical device replacing shadow drama.

When shadows do appear (toasts, modals), they're **navy-tinted** rather than neutral grey — `rgba(13,18,43,...)` — keeping depth visually continuous with the brand body color.

## 8. Interaction & Motion

### Easing Curves

- **ease-standard** `cubic-bezier(0.4, 0, 0.2, 1)` — most state changes
- **ease-emphasized** `cubic-bezier(0.2, 0, 0, 1)` — modal entry, hero reveal
- **ease-soft** `cubic-bezier(0.45, 0, 0.55, 1)` — symmetric breathing animations

### Duration Buckets

- **fast** `100ms` — button hover, link state changes
- **standard** `200ms` — card hover, dropdown reveal
- **slow** `320ms` — modal entry, page section reveal
- **cinematic** `480ms` — hero parallax (rare)

### Per-Component Recipes

- **Primary CTA hover**: bg `#f22f46` → `#d6203a`, 100ms ease-standard, no lift
- **Card hover**: border `#0d122b1f` → `#0d122b33`, no shadow, no lift — pure state change
- **Link hover**: text color `#0d122b` → `#f22f46`, underline-grow, 100ms ease-standard
- **Mega-dropdown reveal**: fade + 4px down, 200ms ease-emphasized
- **Tab switch**: underline slides, 200ms ease-standard

### Page Transitions

- Section reveals on scroll: fade-up 8px, 320ms slow ease-emphasized
- Hero on first paint: fade only, 480ms (no translate — emphasis on content)
- Sticky nav: solid white background fade-in on scroll past hero, 200ms

### Reduced Motion Strategy

Twilio respects `prefers-reduced-motion: reduce`:
- Scroll-triggered fade-ups become static
- Underline-grow becomes static underline
- Hover state changes preserve color but drop motion
- Modal entry: opacity-only, no translate
- Sticky nav: instant background appearance

## 9. Accessibility & A11y

### Contrast Pairs

- text `#0d122b` on bg `#fff`: **16.4** — AAA all sizes
- text-strong `#000` on bg `#fff`: **21.0** — AAA
- text-muted `#5b6079` on bg `#fff`: **6.2** — AA body, AAA large
- on-brand `#fff` on brand `#f22f46`: **4.5** — AA body
- text-on-navy `#fff` on bg-navy `#0d122b`: **16.4** — AAA
- accent-blue `#3da9fc` on bg `#fff`: **2.6** — Use ≥18px or as decorative-only
- text on bg-blue `#0d122b` on `#e1eeff`: **14.1** — AAA

### Focus Indicators

- 2px solid `#f22f46` (brand red) with 2px offset
- On navy surfaces: 2px solid `#ffffff` ring
- Visible on every interactive
- Never `outline: none` without replacement

### ARIA Patterns

- Phone input combobox: `role="combobox"` + `aria-expanded`, `aria-controls` for country list
- Mega-dropdown nav: `role="menu"` + `aria-haspopup="menu"` + `aria-expanded`
- Modal: `role="dialog"` + `aria-modal="true"` + `aria-labelledby` + focus trap
- Tab group: `role="tablist"` + `aria-orientation` + `aria-controls`
- Code samples: `<pre><code>` with `aria-label` describing the API endpoint shown

### Keyboard Nav

- Tab order matches DOM source
- ENTER/SPACE activate buttons
- ARROW navigates within tab groups, listboxes
- ESC closes modals/dropdowns
- All interactives reachable in tab cycle

### Screen Reader Hints

- Twilio wordmark SVG: `<title>Twilio</title>`
- Mono eyebrow labels are semantic — wrapped in `<span>` not headings
- Decorative API endpoint diagrams: `aria-hidden="true"` if pure illustration; `aria-label` if conveying meaning
- Status badges have visible text + appropriate `role="status"` for live updates

### Reduced Motion

- Honored across the site
- Parallax, scroll-triggered translates: disabled
- Hover state changes preserve color, drop motion
- Modal entry: opacity-only

## 10. Responsive Behavior

### Breakpoints

| Tier | Min-width | Use |
|---|---|---|
| mobile | 0–639px | Single-column stack |
| tablet | 640–1023px | 2-column feature grid |
| desktop | 1024–1279px | Full 12-column |
| wide | 1280px+ | Container caps at 1280, generous gutters |

### Touch Targets

Minimum 44×44px on mobile. Primary CTA scales padding from `12px 20px` (desktop) to `14px 24px` (mobile) to ensure 48px tap target.

### Collapsing Strategy

- **Hero display**: 80px → 56px → 40px → 32px down the cascade
- **Feature grid**: 3-col → 2-col → 1-col
- **Top nav**: full link bar + mega-dropdown → hamburger drawer at <1024px
- **Section vertical rhythm**: 96px → 80px → 64px

### Image Behavior

- Product mockups: aspect-ratio 16:10, `object-fit: contain`, max-height 480px
- Network diagrams: SVG-based for infinite scaling
- Avatar images in testimonials: 40×40 circular

### Container Queries

Twilio uses container queries on the API code-sample card — when narrower than 480px, the inline language tabs collapse to a select dropdown.

## 11. Content & Voice

### Tone

**Engineer-trustworthy.** Twilio talks to developers and platform architects who need to integrate communications APIs at scale. The voice is matter-of-fact, technically precise, slightly older-school in its formality. "Build the future of customer engagement" rather than "let's vibe with comms". Adjectives are reserved for product capabilities, not marketing flex. The tone is more **broadcast-grade** than founder-blog.

### Microcopy Patterns

- **Button verbs**: "Sign up", "Talk to sales", "Start building", "Read docs", "Try it free"
- **Empty states**: "No active conversations yet. Start one." (Direct, technical-friendly.)
- **Errors**: "We couldn't process that request. Please verify your credentials and try again." (Specific, actionable, no jargon-inflation.)
- **Success**: "Message sent." / "Webhook received." (Past tense. Confirmation.)
- **Loading**: "Authenticating…" / "Connecting to API…" (Verb in progress, technical precision.)

### CTA Verb Conventions

Twilio prefers **"Sign up"** as primary CTA on hero (not "Start free"), **"Talk to sales"** for enterprise tier, and **"Read docs"** as the universal secondary. The phrasing is enterprise-respectful without losing developer accessibility. For technical surfaces: **"Try the API"**, **"View reference"**, **"Browse SDKs"**.

### Empty States

Twilio fills empty states with technical context: "No SMS sent yet. Send your first message via the API or use Studio to build a flow." The empty state doubles as a quickstart pointer.

## 12. Dark Mode & Theming

Twilio's marketing site is **light-only** with navy `#0d122b` inversion bands. The product (Console, Studio, docs) ships dark mode toggles, but the marketing canvas commits to white as the institutional default.

The navy band inside the marketing site is composition rhythm, not preference. The token swap inside any `#0d122b` band:

```yaml
colors-inverted:
  bg: '#0d122b'
  surface: '#1a1f3a'
  surface-2: '#22253a'
  text: '#ffffff'
  text-muted: '#a8acc1'
  text-soft: '#7a7f95'
  brand: '#f22f46'             # red unchanged
  accent-blue: '#3da9fc'       # blue unchanged
  border: '#22253a'
  border-strong: '#34384f'
```

Twilio docs (devs prefer dark) ship a separate dark mode that swaps the entire token bundle — but that's a docs-system theme, not the marketing brand.

## 13. Lineage & Influences

Twilio's brand is the single-most-recognisable red `#f22f46` in developer tools — paired with deep navy `#0d122b` for type and a clean white canvas. The system descends from the **early-2010s Stripe-school** of fintech-developer trust palettes (white + saturated single accent + classical sans), but Twilio replaces Stripe's blue with the signal red that has anchored the brand since launch.

The current expression is the **2018+ Pentagram rebrand** — when the wordmark and Twilio Sans system were introduced. The tracking subtly wider than Inter, the tighter 4–8px radii, the navy-on-white discipline are all from that lineage. The 2018 rebrand pulled Twilio away from the early "round badge logo" era into a more institutional, serif-adjacent communications-platform pose.

The closest contemporary sibling is **Stripe** — both flex white-canvas + single-CTA-color + classical-sans — but Stripe's blue is gradient-friendly while Twilio's red is solid-only. **SendGrid's** API blue (`#3da9fc`) survives as Twilio's accent-blue after acquisition, the visible artefact of the 2019 acquisition era.

The radius philosophy breaks with 2026 SaaS softness — Linear, Webflow, and Framer have all softened to 8–14px buttons; Twilio holds at 4. That tightness is a deliberate continuity-fintech-meets-developer-platform pose, signalling "this is infrastructure, not a vibe-tool".

**Named Influences**
- **Stripe** ([stripe.com](https://stripe.com)) — Sibling fintech-developer school: white canvas + single-color CTA + classical sans
- **Pentagram** ([pentagram.com](https://www.pentagram.com)) — 2018 Twilio rebrand source: signal-red wordmark and Twilio Sans system
- **SendGrid** ([twilio.com/en-us/sendgrid](https://www.twilio.com/en-us/sendgrid)) — Subsumed sibling brand whose blue informs Twilio's secondary `#3da9fc`
- **Söhne** ([klim.co.nz/retail-fonts/sohne](https://klim.co.nz/retail-fonts/sohne)) — Klim Type Foundry sans that Twilio Sans references in proportion
- **Helvetica** — Institutional broadcast-grade sans heritage Twilio inherits

## 14. Do's and Don'ts

### Do

- Keep the red `#f22f46` rare — it should feel like a brand stamp, not a chromatic system
- Use Twilio Sans across display, body, and mono; mixing in Inter or Helvetica breaks the institutional voice
- Hold the H1 at 64px / 700 with `-0.02em` tracking; pushing larger or lighter shifts the brand pose
- Use mono eyebrow at 12px / 0.06em ALL CAPS — broadcast signal
- Hold button radius at 4px — anything softer loses the institutional tone
- Use the pale-blue `#e1eeff` panel for code samples and API endpoint diagrams only
- Reserve the navy `#0d122b` band for major feature reveals, not ambient rhythm
- Tint shadows navy `rgba(13,18,43,...)` rather than neutral grey
- Use deep navy `#0d122b` for body text — never pure black
- Honor reduced motion — Twilio's brand is institutional, not theatrical

### Don't

- Swap the button radius above 8px — the tight 4px corner is a deliberate broadcast-grade signal
- Introduce a saturated secondary colour beyond the `#3da9fc` API blue; the red plus navy is the full identity palette
- Layer shadows under cards; flat hairlines keep the pages feeling like a printed reference manual
- Apply red to a card background or wrap large surfaces in red; it's a stamp, not a fill
- Use Inter or Helvetica as fallback in the marketing site — Twilio Sans is required
- Pure-black body type — `#0d122b` deep navy is the discipline
- Use the gradient on any surface; Twilio is solid-only, no gradients
- Pack section vertical rhythm tighter than 80px — institutional pacing requires air
- Round cards above 12px — the 8px discipline is signature
- Use mono in body text — it's reserved for eyebrows, code, version tags

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:           #ffffff
bg-blue:      #e1eeff (API panel)
bg-navy:      #0d122b (inversion band)
text:         #0d122b (deep navy)
text-muted:   #5b6079
brand:        #f22f46 (signal red)
accent-blue:  #3da9fc (API blue)
border:       #0d122b1f (12% navy)
```

### Example Component Prompts

1. *"Create a Twilio-style hero: white background, Twilio Sans Display 700 at 64px headline reading 'Build customer engagement, end to end' tracked at -0.02em, deep navy `#0d122b` body type, primary red CTA `#f22f46` at 4px radius with white label saying 'Sign up', and a navy-bordered secondary saying 'Talk to sales'."*
2. *"Design a Twilio API panel: pale-blue `#e1eeff` background full-width band, Twilio Sans Mono 14px code sample inside an 8px-radius white card, mono eyebrow at top reading 'POST /messages' in #5b6079 / 0.06em, language tab strip below."*
3. *"Build a Twilio feature card: white bg, 8px radius, 32px padding, 1px `#0d122b1f` hairline, no shadow. Twilio Sans Display 24 navy title, body in #5b6079, mono eyebrow at top reading 'PROGRAMMABLE SMS' in red `#f22f46`."*
4. *"Compose a Twilio navy inversion band: full-bleed `#0d122b` background, white Twilio Sans Display 52 headline, white body type at 18px, single inverted white CTA `#fff` bg with navy text saying 'Read docs', 96px vertical padding."*
5. *"Create a Twilio nav: 72px height, white bg with hairline bottom on scroll, red Twilio wordmark left (`#f22f46`), link cluster center (Products/Solutions/Developers/Pricing in Twilio Sans 500 14px navy), red CTA pill right reading 'Sign up' at 4px radius."*
6. *"Design a Twilio phone input: inline country selector left + number input right, both at 4px radius, hairline border `#0d122b33`, mono digit rendering inside the number field, focus state with red `#f22f46` border + 2px ring."*

### Iteration Guide

1. **Start with the red discipline.** If red appears on more than the wordmark + 1–2 CTAs per section, pull back. Twilio's red is a stamp, not a system.
2. **Tighten the button radius.** If buttons land at 6–8px, drop to 4. The institutional tightness is signature.
3. **Use deep navy, not black.** If body type is `#000`, swap to `#0d122b`. The navy cast is part of the broadcast-grade voice.
4. **Add a mono eyebrow.** If sections lack section taglines, add Twilio Sans Mono 12px / 0.06em ALL CAPS in muted navy. Broadcast-API signal.
5. **Strip the shadows.** If cards have soft shadows, replace with a 1px `#0d122b1f` hairline. Twilio's depth is hairline-only.
6. **Use the pale-blue for code.** If a code sample sits on white, swap the panel to `#e1eeff` pale blue. That's the API panel signal.
7. **Insert one navy inversion.** If the page is monotonously white, drop one full-bleed `#0d122b` band per page max — used for the rhetorical climax (key feature, flagship customer).
8. **Hold the type proprietary.** If Inter or Helvetica is leaking in, force back to Twilio Sans. The custom family is non-negotiable for brand recognition.
