---
name: Framer
tagline: Black-on-white maximalism with electric gradient floods — Inter Display at heroic sizes, motion as a first-class material.
author: webdesignhot
source_url: https://www.framer.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [design-tools, saas]
tags: [light, dark, bright, sans, structured, multi-theme, playful]
preview_swatch: ['#ffffff', '#000000', '#0099ff']
related: [webflow, vercel, figma]
description: 'Framer''s site is a demo of itself. Black `#000` headlines hammer against pure white, then break into electric gradient floods (cyan → magenta → orange → violet) and dark-mode hero cards. Inter Display 700 at 96px+, motion baked into every scroll, and a `#0099ff` action blue that signals "click to design". It''s a no-code tool dressed as a 2026 design magazine — the marketing page renders itself as a Framer canvas.'

colors:
  # Primary
  bg: '#ffffff'                    # marketing canvas — full white, no warm tint
  bg-dark: '#000000'               # hero band, dark-mode flip — full black
  bg-elev: '#fafafa'               # near-white panel
  bg-elev-2: '#f2f2f2'             # second-level neutral
  surface: '#fafafa'               # default card on white
  surface-2: '#f2f2f2'             # hover card
  surface-3: '#ebebeb'             # active card
  surface-dark: '#0a0a0a'          # dark-mode card body
  surface-dark-2: '#141414'        # dark-mode hover
  surface-dark-3: '#1f1f1f'        # dark-mode pressed

  # Text
  text: '#000000'                  # body on white — full black, no opacity tilt
  text-strong: '#000000'           # display
  text-muted: '#666666'            # captions
  text-soft: '#999999'             # tertiary, meta
  text-faint: '#bfbfbf'            # disabled
  text-on-dark: '#ffffff'          # body on black
  text-on-dark-muted: '#a3a3a3'    # captions on black
  text-on-dark-soft: '#737373'     # tertiary on black
  text-on-brand: '#ffffff'         # white on action blue

  # Brand & gradient quartet
  brand: '#0099ff'                 # Framer action blue — pill CTA only
  brand-hover: '#0080d6'           # pressed
  brand-active: '#0066ad'          # active
  accent-cyan: '#00d2ff'           # Holo Shader stop 1
  accent-magenta: '#ff00aa'        # Holo Shader stop 2
  accent-orange: '#ff6b00'         # Holo Shader stop 3
  accent-violet: '#7c3aed'         # Holo Shader stop 4
  accent-pink: '#ff66cc'           # secondary tint
  accent-blue-deep: '#0044ff'      # gradient overlap zone

  # Borders
  border: '#e5e5e5'                # default hairline on white
  border-strong: '#cccccc'         # emphasised
  border-subtle: '#f0f0f0'         # softest
  border-dark: '#1f1f1f'           # default hairline on black
  border-dark-strong: '#333333'    # emphasised on black
  border-dark-subtle: '#141414'    # softest on black

  # Semantic
  success: '#22c55e'
  success-bg: '#dcfce7'
  warning: '#f59e0b'
  warning-bg: '#fef3c7'
  danger: '#ef4444'
  danger-bg: '#fee2e2'
  info: '#0099ff'
  info-bg: '#dbeafe'
  on-brand: '#ffffff'

typography:
  display:
    family: '"Inter Display", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [600, 700, 800]
    opentype-features: 'ss01, ss03, cv11'
  body:
    family: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "Fira Code", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 128, weight: 700, lineHeight: 0.92, tracking: '-0.05em',  family: display, opentype: 'ss01' }
    display-xl:      { size: 96,  weight: 700, lineHeight: 0.95, tracking: '-0.045em', family: display }
    display-lg:      { size: 80,  weight: 700, lineHeight: 0.98, tracking: '-0.04em',  family: display }
    h1:              { size: 64,  weight: 700, lineHeight: 1.0,  tracking: '-0.035em', family: display }
    h2:              { size: 48,  weight: 700, lineHeight: 1.05, tracking: '-0.028em', family: display }
    h3:              { size: 32,  weight: 600, lineHeight: 1.2,  tracking: '-0.018em', family: display }
    h4:              { size: 24,  weight: 600, lineHeight: 1.25, tracking: '-0.012em', family: body }
    h5:              { size: 20,  weight: 600, lineHeight: 1.3,  tracking: '-0.008em', family: body }
    body-lg:         { size: 18,  weight: 400, lineHeight: 1.55, tracking: '-0.005em', family: body }
    body:            { size: 16,  weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body-sm:         { size: 14,  weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 14,  weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    caption:         { size: 12,  weight: 500, lineHeight: 1.4,  tracking: '0.01em',   family: body }
    eyebrow:         { size: 12,  weight: 600, lineHeight: 1.4,  tracking: '0.08em',   family: body }
    code:            { size: 14,  weight: 400, lineHeight: 1.6,  tracking: '0',        family: mono }
    code-micro:      { size: 12,  weight: 500, lineHeight: 1.5,  tracking: '0',        family: mono }

radius:
  micro: 2
  sm: 4
  md: 10
  lg: 14
  xl: 20
  xxl: 28
  featured: 40
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 200]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  hero-y: 200
  section-y: 160
  gutter: 24

components:
  button-primary:
    bg: '#0099ff'
    text: '#ffffff'
    radius: 9999
    paddingX: 24
    paddingY: 14
    font: 'Inter 500 / 14px'
    hover: 'bg #0080d6 + 1px lift'
  button-ghost:
    bg: 'transparent'
    text: '#000000'
    radius: 9999
    border: '1px solid #e5e5e5'
    paddingX: 24
    paddingY: 14
    hover: 'bg #fafafa'
  button-dark:
    bg: '#ffffff'
    text: '#000000'
    radius: 9999
    paddingX: 24
    paddingY: 14
    hover: 'bg #f2f2f2'
    use: 'inverted on dark band'
  card-light:
    bg: '#fafafa'
    radius: 20
    padding: 32
    border: '1px solid #e5e5e5'
    shadow: '0 1px 2px rgba(0,0,0,0.04)'
  card-dark:
    bg: '#0a0a0a'
    text: '#ffffff'
    radius: 20
    padding: 32
    border: '1px solid #1f1f1f'
  input-text:
    bg: '#ffffff'
    border: '1px solid #e5e5e5'
    radius: 10
    paddingX: 14
    paddingY: 12
    focus: 'border #0099ff + ring 2px rgba(0,153,255,0.2)'
  badge:
    bg: '#fafafa'
    text: '#666666'
    radius: 9999
    paddingX: 10
    paddingY: 4
    font: 'Inter 500 / 12px'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  ease-spring: 'spring(1, 100, 10, 0)'
  duration-fast: 120
  duration-standard: 240
  duration-slow: 480
  duration-cinematic: 800
  reduced-motion: 'respects prefers-reduced-motion: reduce — gradient floods become static, scroll-triggered animations collapse to opacity-only fades'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: '0 1px 2px rgba(0,0,0,0.04)'
  standard: '0 4px 12px rgba(0,0,0,0.06)'
  elevated: '0 12px 32px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)'
  deep: '0 24px 64px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.06)'
  glow-blue: '0 0 40px rgba(0,153,255,0.4)'
  glow-gradient: '0 0 80px rgba(255,0,170,0.25), 0 0 60px rgba(0,210,255,0.25)'
  ring: '0 0 0 2px rgba(0,153,255,0.5)'
  ring-dark: '0 0 0 2px rgba(255,255,255,0.5)'

accessibility:
  contrast-text-on-bg: 21.0           # AAA — full black on full white
  contrast-text-on-dark: 21.0         # AAA — full white on full black
  contrast-text-on-brand: 4.6         # AA at body sizes — white on #0099ff
  contrast-muted-on-bg: 5.7           # AA — #666 on white
  focus-ring: '2px solid #0099ff with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive; tab order matches DOM source'

dark-mode: alternating              # Framer ships an inverted dark band per page section, not a global toggle
---

## 1. Visual Theme & Atmosphere

Framer's marketing site is a Framer demo. The page renders itself as the kind of canvas a Framer user would build — heroic black-on-white type at 96–128px, gradient flood bands sampling cyan, magenta, orange, and violet, and motion stitched into every scroll position. The atmosphere is **electric design magazine** rather than SaaS landing page.

The compositional rhythm alternates: a white band with full-black Inter Display headlines compressed at `-0.045em` tracking, then a dark inversion (full `#000` ground, white type, gradient glow behind product mockup), then back to a white feature row with looping autoplay videos of the Framer canvas in motion. This light/dark cycle is borrowed from Apple's keynote-as-website rhythm, but Framer turns the volume up — the gradients are louder, the type is heavier, and the motion never stops.

The action blue `#0099ff` is the singular fixed point. Every primary CTA is a full-pill (9999px radius) electric blue button with white Inter 500 label. The gradient quartet — `#00d2ff` cyan, `#ff00aa` magenta, `#ff6b00` orange, `#7c3aed` violet — lives in atmospheric bands and never touches an action surface.

Where Webflow plays restrained-with-a-signature-gradient and Vercel plays pure achromatic discipline, Framer occupies the **loud-design-tool slot**. The closest sibling is Linear's old marketing era, but Framer is more chromatically promiscuous and more willing to flex its motion engine on the homepage itself.

**Key Characteristics**
- Pure black-on-pure-white at heroic sizes (no off-white, no near-black)
- Inter Display 700 at 96–128px with `-0.045em` tracking
- Gradient flood bands (cyan → magenta → orange → violet) as atmosphere
- Dark-mode hero cards alternating with white feature rows
- Action blue `#0099ff` as singular CTA fill
- Pill-radius (9999px) on every button — signature shape
- Looping autoplay product videos demoing Framer in motion
- Asymmetric feature grids breaking the 12-column rhythm
- Cinematic 160px section vertical rhythm
- Motion as first-class material — scroll-triggered, hover-rich

## 2. Color Palette & Roles

### Primary

- **bg** (`#ffffff`): the white-band canvas — pure white, no warm tilt
- **bg-dark** (`#000000`): hero and footer band — full black, used as inversion device every 2–3 sections
- **text** (`#000000`): body on white, full black with no opacity tilt — Framer's discipline against the "dark grey body" SaaS norm
- **text-on-dark** (`#ffffff`): body on black

### Brand & Action

- **brand** (`#0099ff`): the Framer action blue — pill CTA fill only, never atmosphere
- **brand-hover** (`#0080d6`): pressed CTA state
- **brand-active** (`#0066ad`): active state — rarely visible, click-through is fast

### Accent (Gradient Quartet)

- **accent-cyan** (`#00d2ff`): Holo Shader stop 1 — left edge of flood
- **accent-magenta** (`#ff00aa`): Holo Shader stop 2 — center-left
- **accent-orange** (`#ff6b00`): Holo Shader stop 3 — center-right
- **accent-violet** (`#7c3aed`): Holo Shader stop 4 — right edge
- **accent-pink** (`#ff66cc`): secondary tint, used in illustration spots
- **accent-blue-deep** (`#0044ff`): gradient overlap zone, deeper blue inside flood

These four (plus their secondary tints) compose the entire gradient atmosphere. They never appear as solid fills outside a mesh-gradient context.

### Interactive

- **link**: `#0099ff` — same as brand
- **link-hover**: `#0080d6` with underline-grow on hover
- **link-on-dark**: `#ffffff` with 1px white underline
- **selected**: `rgba(0,153,255,0.1)` — soft blue tint
- **disabled**: `#bfbfbf` text on `#fafafa` bg

### Neutral Scale (Light)

- **text** `#000000` — heading & body
- **text-muted** `#666666` — captions, meta, byline
- **text-soft** `#999999` — tertiary, helper
- **text-faint** `#bfbfbf` — disabled
- **border** `#e5e5e5` — default hairline
- **border-strong** `#cccccc` — emphasis
- **border-subtle** `#f0f0f0` — softest divider

### Neutral Scale (Dark)

- **text-on-dark** `#ffffff`
- **text-on-dark-muted** `#a3a3a3`
- **text-on-dark-soft** `#737373`
- **border-dark** `#1f1f1f`
- **border-dark-strong** `#333333`
- **border-dark-subtle** `#141414`

### Surface & Borders

- **surface** `#fafafa` — default card on white
- **surface-2** `#f2f2f2` — hover
- **surface-3** `#ebebeb` — pressed
- **surface-dark** `#0a0a0a` — dark-mode card body
- **surface-dark-2** `#141414` — dark-mode hover

### Shadow Colors

Framer's shadows are neutral-tinted, not blue-tinted. The dramatic depth comes from gradient floods sitting behind product imagery — that's the brand's "atmosphere" rather than literal elevation.

- **shadow-ambient** `rgba(0,0,0,0.04)` — softest
- **shadow-standard** `rgba(0,0,0,0.06)` — card resting
- **shadow-elevated** `rgba(0,0,0,0.08)` — card hover
- **glow-blue** `rgba(0,153,255,0.4)` — focused CTA halo
- **glow-gradient** mixed `magenta + cyan` at 25% — atmospheric

### Semantic

- **success** `#22c55e` on `#dcfce7` bg
- **warning** `#f59e0b` on `#fef3c7` bg
- **danger** `#ef4444` on `#fee2e2` bg
- **info** `#0099ff` on `#dbeafe` bg

## 3. Typography Rules

### Font Family

- **Display & Body**: Inter Display (display, 600/700/800) and Inter (body, 400/500/600). Inter Display is the optical sibling tuned for sizes ≥28px — tighter spacing, refined display-grade letter-fitting.
- **Mono**: JetBrains Mono — code blocks, version strings, inline code in feature copy
- **OpenType features used**: `ss01` (single-storey g), `ss03` (alternate r), `cv11` (open 4) — Framer leans into Inter's stylistic sets to differentiate from generic Inter SaaS rendering

### Hierarchy

| Role | Font | Size | Weight | Line H | Tracking | OT | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Inter Display | 128 | 700 | 0.92 | -0.05em | ss01 | Reserved for above-the-fold hero |
| display-xl | Inter Display | 96 | 700 | 0.95 | -0.045em | — | Standard H1 |
| display-lg | Inter Display | 80 | 700 | 0.98 | -0.04em | — | Section opener |
| h1 | Inter Display | 64 | 700 | 1.0 | -0.035em | — | Subsection |
| h2 | Inter Display | 48 | 700 | 1.05 | -0.028em | — | Feature header |
| h3 | Inter Display | 32 | 600 | 1.2 | -0.018em | — | Card header |
| h4 | Inter | 24 | 600 | 1.25 | -0.012em | — | Component title |
| h5 | Inter | 20 | 600 | 1.3 | -0.008em | — | Inline label |
| body-lg | Inter | 18 | 400 | 1.55 | -0.005em | — | Hero subhead |
| body | Inter | 16 | 400 | 1.5 | 0 | — | Default paragraph |
| body-sm | Inter | 14 | 400 | 1.5 | 0 | — | Captions, meta |
| label | Inter | 14 | 500 | 1.4 | 0 | — | Form & button |
| caption | Inter | 12 | 500 | 1.4 | 0.01em | — | Meta below cards |
| eyebrow | Inter | 12 | 600 | 1.4 | 0.08em | tnum | Section taglines, ALL CAPS |
| code | JetBrains Mono | 14 | 400 | 1.6 | 0 | tnum | Inline code |
| code-micro | JetBrains Mono | 12 | 500 | 1.5 | 0 | tnum | Version strings |

### Principles

- **Display weight as voice** — 700 only for display sizes; 600 reads as too quiet, 800 reads as too aggressive
- **Negative tracking is non-negotiable at display** — `-0.04em` minimum at 80px+, scaling to `-0.05em` at 128px
- **Line-height drops below 1.0** at hero sizes — display-hero runs at 0.92 to feel poster-compressed
- **No serif** — Framer's editorial moments are carried by gradient and motion, not by typographic contrast
- **Body stays at neutral 16/24** — the heroic display does the brand work; body is utility
- **OpenType ss01 always on Inter Display** — the alternate single-storey `g` is part of the Framer voice
- **Mono is rare and small** — code labels, never running text — keeps the page from drifting toward dev-tool aesthetic
- **All-caps eyebrows tracked +0.08em** — the only positive-tracking move in the system

## 4. Component Stylings

### Buttons

**Primary CTA** — the electric blue pill, the most recognisable component
- bg `#0099ff`, text `#ffffff`, radius `9999px` (full pill)
- padding `14px 24px`, Inter 500 14px label
- hover: bg `#0080d6` + 1px translateY lift + 240ms ease-emphasized
- focus: 2px ring `rgba(0,153,255,0.5)` + 2px offset
- use: every primary action — "Start for free", "Get Framer", "Sign up"

**Ghost Button**
- bg transparent, text `#000000`, border `1px solid #e5e5e5`, radius `9999px`
- padding `14px 24px`, Inter 500 14px
- hover: bg `#fafafa`
- use: secondary action — "Watch the demo", "See pricing"

**Dark Button** (inverted on dark band)
- bg `#ffffff`, text `#000000`, radius `9999px`
- padding `14px 24px`
- hover: bg `#f2f2f2`
- use: primary action when sitting on a `#000` band

**Icon Button**
- bg transparent, 40×40px, radius `10px`
- icon-only, used in product UI demos and nav

### Cards

**Card Light**
- bg `#fafafa`, radius `20px`, padding `32px`
- border `1px solid #e5e5e5`, shadow ambient `0 1px 2px rgba(0,0,0,0.04)`
- hover: shadow standard + 4px translateY lift

**Card Dark**
- bg `#0a0a0a`, text `#ffffff`, radius `20px`, padding `32px`
- border `1px solid #1f1f1f`, no shadow (depth is tonal)
- hover: bg `#141414`

**Hero Card** (oversized)
- bg gradient-mesh, radius `28–40px`, padding `48–64px`
- contains looping product video, white display type floating on flood

### Badges & Tags

**Badge Default**
- bg `#fafafa`, text `#666666`, radius `9999px` (pill)
- padding `4px 10px`, Inter 500 12px

**Badge Brand**
- bg `rgba(0,153,255,0.1)`, text `#0099ff`, radius `9999px`
- padding `4px 10px`

**Tag Mono** (changelog version)
- bg `#fafafa`, text `#666666`, radius `4px`
- padding `2px 6px`, JetBrains Mono 12px

### Inputs & Forms

**Text Input**
- bg `#ffffff`, border `1px solid #e5e5e5`, radius `10px`
- padding `12px 14px`, Inter 400 16px
- focus: border `#0099ff` + ring `2px rgba(0,153,255,0.2)`
- placeholder: `#999999`

**Search Input**
- bg `#fafafa`, no border, radius `10px`
- inline magnifier icon left, padding `12px 14px 12px 40px`

### Navigation

**Top Nav**
- bg `#ffffff` (or transparent on hero), height `64px`
- 24px gutters, sticky on scroll, hairline `#e5e5e5` bottom on scroll
- logo left (Framer wordmark, black), nav center (Product/Resources/Pricing), CTA right (electric blue pill)

**Footer Nav**
- bg `#000000`, padding `96px 24px`
- gradient mesh band above footer cuts the inversion
- 4-column link grid, white type, hover underline-grow

### Tabs / Tooltips / Toasts

**Tab Group**
- underline-style on bottom: 2px `#0099ff` on active, 1px `#e5e5e5` on rest
- text `#000` active, `#666` rest

**Tooltip**
- bg `#000000`, text `#ffffff`, radius `6px`, padding `8px 12px`
- 12px Inter 500, drop shadow standard

**Toast**
- bg `#ffffff`, border `1px solid #e5e5e5`, radius `14px`, shadow elevated
- 16px Inter 500 message, 14px muted body, 16px padding

## 5. Layout Principles

### Spacing System

- **base** `4px`, scale `[0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 200]`
- Density philosophy: **generous-cinematic**. Framer's 160px section vertical rhythm is extreme by SaaS standards — that's the cinematic pacing.

### Grid & Container

- **page-width** `1280px` with 24px gutters
- Hero bands bleed full-width; content resets to 1280
- 12-column grid, but Framer regularly breaks it with **asymmetric splits** (2/3 + 1/3, then reversed, then full-bleed)
- **prose-width** `720px` — used for changelog and docs only; marketing pages don't use long prose

### Whitespace Philosophy

Framer's whitespace is theatrical. Each band is a stage with one composition. The spacing between hero text and product mockup is often 64–96px — air around the flex, not packed density. Mobile compresses to 80–120px section rhythm but never below.

### Section Cadence

The page is a film reel of alternating bands:
1. White hero with display-xl
2. Dark gradient-flood band with white type
3. White feature row with looping product video
4. Dark feature card grid
5. White testimonial wall
6. Dark gradient footer

This 6-beat cycle is what makes Framer feel cinematic rather than monolithic.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Code-tag corners |
| Standard | 4px | Inline code, mono badges |
| Medium | 10px | Inputs, small buttons (rare — pill is preferred) |
| Comfortable | 14px | Form selects, secondary cards |
| Large | 20px | Default card |
| Featured | 28px | Hero card shells |
| XXL | 40px | Largest panel, gradient hero shells |
| Pill | 9999px | **Every button**, badges, tags |

The signature shape is the **pill button** at full 9999px radius. Cards land at 20px, hero shells at 28–40px. Compound radii are not used — Framer keeps shapes pure-rounded.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow, no border | Hero text on band |
| 1 | 1px hairline `#e5e5e5` | Resting cards on white |
| 2 | shadow-ambient `0 1px 2px rgba(0,0,0,0.04)` | Lifted cards |
| 3 | shadow-standard `0 4px 12px rgba(0,0,0,0.06)` | Hovered cards |
| 4 | shadow-elevated + glow-blue | Focused interactive |
| 5 | shadow-deep + glow-gradient | Modals, hero floating element |

### Shadow Philosophy

Framer's shadows are **neutral-tinted, not blue-tinted** — the dramatic depth comes from gradient floods sitting behind product imagery rather than literal elevation. When elevation is needed, it's modest (4–12px max) so it doesn't compete with the chromatic atmosphere. The exception is the hero gradient mesh, which uses a 80px radial blur to read as "luminous atmosphere".

Dark-mode cards use `1px solid #1f1f1f` borders and rely on tonal layering (`#000` → `#0a0a0a` → `#141414`) rather than shadow for depth.

## 8. Interaction & Motion

### Easing Curves

- **ease-standard** `cubic-bezier(0.4, 0, 0.2, 1)` — most state transitions
- **ease-emphasized** `cubic-bezier(0.2, 0, 0, 1)` — page transitions, hero scroll
- **ease-bounce** `cubic-bezier(0.34, 1.56, 0.64, 1)` — playful product demos
- **ease-spring** spring physics — drag interactions in product mockups

### Duration Buckets

- **fast** `120ms` — hover state on buttons, links
- **standard** `240ms` — card hover, dropdown reveal
- **slow** `480ms` — modal entry, page section reveal
- **cinematic** `800ms` — gradient flood scroll-driven hue shift

### Per-Component Recipes

- **Button hover**: bg shift + 1px translateY lift, 240ms ease-emphasized
- **Card hover**: shadow intensify (ambient → standard) + 4px translateY, 240ms ease-standard
- **Link hover**: underline grows from 0% → 100% width, 200ms ease-standard
- **Hero scroll**: gradient flood subtly shifts hue (cyan → magenta) bound to scroll-y, 800ms cinematic
- **Looping product video**: autoplay loop, no pause UI, 5–10s segments

### Page Transitions

- Section reveals on scroll: fade-up 16px, 480ms slow ease-emphasized
- Inverted dark band: fade-in with gradient mesh blooming from center, 800ms

### Reduced Motion Strategy

Framer respects `prefers-reduced-motion: reduce`. Under reduced motion:
- Gradient floods become static gradients (no hue shift on scroll)
- Looping product videos collapse to a single still frame
- Scroll-triggered fade-ups become opacity-only (no translate)
- Hover lifts disable; only color/border changes remain

## 9. Accessibility & A11y

### Contrast Pairs

- text `#000` on bg `#fff`: **21.0** — AAA at every size
- text-on-dark `#fff` on bg-dark `#000`: **21.0** — AAA
- text-muted `#666` on bg `#fff`: **5.7** — AA body, AAA large
- on-brand `#fff` on brand `#0099ff`: **4.6** — AA body, AAA large
- text-on-dark-muted `#a3a3a3` on bg-dark `#000`: **9.3** — AAA
- border `#e5e5e5` on bg `#fff`: 1.3 — decorative-only

### Focus Indicators

- 2px solid `#0099ff` ring, 2px offset on light surfaces
- 2px solid `#ffffff` ring, 2px offset on dark surfaces
- Never `outline: none` without replacement
- Visible on every interactive: buttons, links, form fields, cards-as-links

### ARIA Patterns

- Combobox in product demo: `role="combobox"` + `aria-expanded`, `aria-controls`, `aria-activedescendant`
- Dialog/modal: `role="dialog"` + `aria-modal="true"` + `aria-labelledby` + focus trap
- Looping product video: `aria-label="Framer canvas demo, autoplaying"`
- Gradient atmosphere: decorative — `aria-hidden="true"` on gradient SVGs

### Keyboard Nav

- Tab order matches DOM source order
- All buttons reachable in tab cycle
- ESC closes any open modal/dropdown
- ARROW navigates within tab groups, listboxes
- ENTER/SPACE activate buttons; SPACE never scrolls inside a focused button

### Screen Reader Hints

- Logo SVG has `<title>Framer</title>`
- Looping product videos have `<track kind="descriptions">` or fallback caption
- Decorative gradient flood: `aria-hidden="true"`, `role="presentation"`

### Reduced Motion

- `prefers-reduced-motion: reduce` honored across the entire site
- Gradient hue-shift and parallax: disabled
- Scroll-triggered reveals: opacity-only, no translate
- Looping videos: pause + show poster frame

## 10. Responsive Behavior

### Breakpoints

| Tier | Min-width | Use |
|---|---|---|
| mobile | 0–639px | Single-column stack |
| tablet | 640–1023px | 2-column feature grids |
| desktop | 1024–1279px | Full 12-column |
| wide | 1280px+ | Container caps at 1280, generous gutters |

### Touch Targets

Minimum 44×44px on mobile. The pill CTA scales from 14px×24px padding (desktop) to 16px×24px (mobile) to ensure 48px+ tap target.

### Collapsing Strategy

- **Hero display**: 128px → 96px → 72px → 48px down the cascade
- **Asymmetric grids**: 2/3 + 1/3 → 1/1 stack
- **Top nav**: full link bar → hamburger drawer at <1024px
- **Section vertical rhythm**: 160px → 120px → 80px

### Image Behavior

- Hero product mockups: `object-fit: contain`, max-height 600px
- Looping videos: pause on mobile to save battery, poster frame shown
- Gradient floods: SVG-based, scale infinitely without rasterisation

### Container Queries

Framer uses container queries on the asymmetric feature grid — when a card's container narrows below 480px, the 2-column inline layout collapses to stacked.

## 11. Content & Voice

### Tone

**Designer-confident with motion-flex.** Framer talks to designers who think in components and frames. The voice is matter-of-fact about the product's power — "Build sites with Framer" not "Empower your design journey". No corporate hedging, no buzzwords, no "leverage". Adjectives are reserved for the product, not the marketing.

### Microcopy Patterns

- **Button verbs**: "Start for free", "Get Framer", "See pricing", "Watch the demo", "Sign in"
- **Empty states**: "Nothing here yet — drop a frame to begin." (Direct, action-oriented.)
- **Errors**: "We couldn't save that. Try again or check your connection." (Plain English, no jargon.)
- **Success**: "Saved." (One word. Confidence.)
- **Loading**: spinner, no copy

### CTA Verb Conventions

Framer prefers **"Start for free"** as the primary CTA verb across pricing, hero, and footer. Secondary is **"Watch the demo"** (never "See it in action"). For dev-leaning surfaces: **"Browse components"**, **"Read the docs"**.

### Empty States

Framer leaves space rather than fills it with skeleton ghosts. An empty canvas reads "Drop a frame to begin" in muted Inter 16px — invitation, not apology.

## 12. Dark Mode & Theming

Framer ships **alternating dark bands** rather than a global dark-mode toggle. The marketing site flips between full-white and full-black sections every 2–3 bands. The token swap below applies inside any `<section data-theme="dark">`:

```yaml
colors-dark:
  bg: '#000000'
  bg-elev: '#0a0a0a'
  bg-elev-2: '#141414'
  surface: '#0a0a0a'
  surface-2: '#141414'
  surface-3: '#1f1f1f'
  text: '#ffffff'
  text-strong: '#ffffff'
  text-muted: '#a3a3a3'
  text-soft: '#737373'
  text-faint: '#404040'
  brand: '#0099ff'              # brand stays the same blue across modes
  brand-hover: '#33aaff'
  border: '#1f1f1f'
  border-strong: '#333333'
  border-subtle: '#141414'
```

Note: in product UI (the Framer canvas itself), full dark mode is a toggle. On the marketing site, the dark theme is composition rhythm, not preference.

## 13. Lineage & Influences

Framer descends from Apple's keynote-as-website rhythm — alternating dark and light bands, oversized headlines, product mockups breathing in white space. But Framer dials the volume up: where Apple uses occasional dark sections, Framer alternates every 2–3 sections; where Apple keeps gradients restrained, Framer floods them edge-to-edge.

The closest visual sibling is **Webflow** — both flex gradient floods + heroic Inter Display + product-canvas mockups — but Webflow stays disciplined to one indigo-violet gradient while Framer runs the cyan-magenta-orange-violet quartet. **Vercel's** achromatic discipline is the rejected reference: Framer borrows Vercel's confidence in pure black/white but fills the chromatic gap Vercel leaves empty.

The motion vocabulary draws from Linear's old marketing era (2021–2023), when scroll-tied animations and gradient hue shifts were the design-tool flex. Framer is the spiritual continuation of that era at higher chromatic volume.

**Named Influences**
- **Apple** ([apple.com](https://www.apple.com)) — Keynote-as-marketing-page rhythm, dark-band hero cadence
- **Webflow** ([webflow.com](https://webflow.com)) — Sibling gradient + heroic type rivalry
- **Vercel** ([vercel.com](https://vercel.com)) — Achromatic discipline that Framer references then violates
- **Linear** (old marketing, [linear.app](https://linear.app)) — Scroll-tied motion vocabulary
- **Figma** ([figma.com](https://www.figma.com)) — Design-tool-as-canvas marketing posture

## 14. Do's and Don'ts

### Do

- Alternate light and dark bands every 2–3 sections — the rhythm makes Framer feel cinematic
- Push display type past 80px on the hero; Inter Display 700 is meant to read as poster headline
- Reach for the gradient quartet (cyan/magenta/orange/violet) for atmospheric bands
- Keep the action blue `#0099ff` on every primary CTA — full-pill, no exceptions
- Hold display tracking at `-0.04em` minimum, scaling to `-0.05em` at 128px
- Use looping product videos to demo Framer-in-Framer
- Stack sections with 160px vertical rhythm — extreme but on-brand
- Treat motion as a first-class material; no static-only sections on the marketing page
- Honor `prefers-reduced-motion` — Framer's brand should not break accessibility
- Use Inter Display ss01 for the alternate single-storey g — it's part of the voice

### Don't

- Apply gradients to action surfaces; the blue CTA stays solid `#0099ff`, gradient lives in atmosphere only
- Use a square-ish radius for buttons; the pill (9999px) is signature, any deviation reads as a different brand
- Combine more than two adjacent stops in a single mesh — Holo Shader logic is mesh, not stripe
- Drop the body font weight below 400 or above 600 — Inter mid-weights only
- Use #000 with reduced opacity for body — full-black `#000` is the discipline
- Introduce a serif anywhere on the marketing site
- Pack two CTAs of equal weight in one band — Framer always has a primary + secondary pair
- Use neutral grey text on dark; `#a3a3a3` muted is the floor, never below
- Animate gradient hue-shift without honoring reduced motion
- Ship hero copy longer than 8 words; the display does the work, body fills in below

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:           #ffffff
bg-dark:      #000000
text:         #000000
text-on-dark: #ffffff
text-muted:   #666666
brand:        #0099ff
gradient-1:   #00d2ff (cyan)
gradient-2:   #ff00aa (magenta)
gradient-3:   #ff6b00 (orange)
gradient-4:   #7c3aed (violet)
border:       #e5e5e5
```

### Example Component Prompts

1. *"Create a hero in Framer style: pure white background, Inter Display 700 at 96px headline reading 'Build sites worth visiting' tracked at -0.045em, body in Inter 18 muted grey below, primary pill CTA in #0099ff with white label saying 'Start for free', and a secondary ghost pill saying 'Watch the demo'."*
2. *"Design a dark-mode feature card in Framer style: #0a0a0a background, 1px #1f1f1f border, 20px radius, 32px padding, Inter Display 32 white title at -0.018em, body Inter 16 in #a3a3a3, with a small mono tag at top reading 'NEW' in #999."*
3. *"Build a gradient flood band: full-bleed section, mesh gradient using #00d2ff, #ff00aa, #ff6b00, #7c3aed at 4 corners, white Inter Display 80 headline floating at center, single white-on-transparent ghost pill CTA below."*
4. *"Compose a Framer-style asymmetric feature grid: 2-column on desktop where left is 2/3 width with a looping product video and right is 1/3 width with a card containing Inter Display 32 title + Inter 16 body + a #0099ff text link with arrow."*
5. *"Create a footer in Framer style: full #000 background, 96px vertical padding, gradient-mesh band cutting in from above, 4-column white link grid in Inter 14 medium, Framer wordmark left, social icons right."*
6. *"Design a product changelog entry: white card, 20px radius, 1px #e5e5e5 border, mono version tag '#v3.2.1' top-left in #666, Inter Display 24 title, Inter 16 body in #000, 32px padding."*

### Iteration Guide

1. **Start with the contrast.** If the design feels timid, the first move is more black-on-white separation. Framer never softens to grey-on-grey — always full `#000`/`#fff`.
2. **Push display larger than feels comfortable.** Hero copy at 80px reads small for Framer. Try 96, then 128.
3. **Tighten tracking.** If display is at 80px and tracked at `-0.02em`, drop to `-0.04em`. The compressed feel is signature.
4. **Hold the pill.** If a button starts drifting toward 12px or 16px radius, force it back to 9999px. The pill is the brand stamp.
5. **Add a gradient flood band.** If the page reads too monochrome, insert one full-bleed mesh gradient section between two white bands.
6. **Cap action color at one.** If the design is using both `#0099ff` and a secondary blue or cyan as CTAs, collapse to one. Cyan/magenta/orange/violet live in atmosphere only.
7. **Set the section rhythm to 160px.** If the page feels packed, the fix is vertical air, not denser type.
8. **Add motion last.** Once the static layout is right, layer scroll-tied gradient hue-shift and hover lifts. Always respect reduced motion.
