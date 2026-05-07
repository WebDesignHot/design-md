---
name: Polar
tagline: Dev-tool obsidian — 8rem editorial display headlines, indigo accents, Louize serif moments.
updated_at: 2026-05-05T20:10:49+12:00
published_at: 2026-05-03T10:27:49+12:00
author: webdesignhot
source_url: https://polar.sh
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, editorial, serif, sans, mono, dense]
preview_swatch: ['#171719', '#5b3eea', '#d7d8da']
related: [vercel, linear, stripe]
description: 'Polar fuses two type voices in a single dark canvas — InterDisplay sans for the product surface and a discreet Louize serif for editorial moments — over a near-black `#171719` ground with a saturated indigo accent. The result is a developer-monetization site that reads more like a tech publication than a SaaS landing.'

colors:
  bg: '#171719'                     # near-black canvas, slightly warm
  bg-deep: '#0a0a0a'                # deepest sidebar
  surface: '#101011'                # secondary tier, cards, popovers
  surface-alt: '#090909'            # sidebar / deepest tier
  surface-raised: '#1d1d20'         # hovered card
  surface-overlay: '#202024'        # popover
  text: '#d7d8da'                   # primary copy
  text-strong: '#ffffff'            # display peak
  text-soft: '#71727a'              # secondary muted foreground
  text-muted: '#828387'             # tertiary
  text-faint: '#4a4b50'             # disabled, footnote
  text-on-brand: '#ffffff'          # text on indigo
  brand: '#5b3eea'                  # Polar indigo, lab(44% 29 -86)
  brand-hover: '#6e54f0'            # +12% lighter
  brand-active: '#4a30c8'           # pressed deep
  brand-soft: '#1a1432'             # 12% indigo overlay
  brand-deep: '#3a268f'             # darker indigo for depth
  accent-stroke: '#ffffff'          # --graphic-stroke for diagrams
  accent-dim: '#282828'             # --graphic-dim for diagram fills
  accent-serif: '#d7d8da'           # Louize body color (same as text, voice differentiates)
  link: '#9c87f5'                   # link tint of brand
  link-hover: '#ffffff'             # hover collapses to white
  border: '#1d1e20'                 # default tonal hairline
  border-soft: '#171719'            # invisible on canvas
  border-strong: '#2a2c30'          # selected card edge
  focus-ring: '#5b3eea'             # indigo focus
  selection-bg: '#5b3eea'
  selection-text: '#ffffff'
  shadow: '#00000080'               # 50% black for popovers
  card: '#171719'
  popover: '#101011'
  success: '#3ddc97'
  warning: '#e8b94f'
  danger: '#ee5a5a'
  info: '#5ec4ee'
  on-brand: '#ffffff'

typography:
  display:
    family: '"InterDisplay", "Inter", sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['cv01', 'cv11', 'ss01', 'kern', 'liga']
  body:
    family: '"Inter", sans-serif'
    weights: [400, 500]
    opentype-features: ['kern', 'liga', 'tnum']
  mono:
    family: '"GeistMono", ui-monospace, monospace'
    weights: [400, 500]
  serif:
    family: '"Louize", Georgia, serif'
    weights: [400, 500]
    opentype-features: ['liga', 'kern', 'dlig']
  scale:
    display-hero:    { size: 128, weight: 400, lineHeight: 1.0,  tracking: '-0.025em', family: display, opentype: 'cv11, ss01' }
    display-large:   { size: 96,  weight: 400, lineHeight: 1.0,  tracking: '-0.022em', family: display }
    display-medium:  { size: 72,  weight: 500, lineHeight: 1.05, tracking: '-0.02em', family: display }
    h1:              { size: 60,  weight: 500, lineHeight: 1.05, tracking: '-0.02em', family: display }
    h2:              { size: 48,  weight: 500, lineHeight: 1.10, tracking: '-0.018em', family: display }
    h3:              { size: 32,  weight: 500, lineHeight: 1.20, tracking: '-0.012em', family: display }
    h4:              { size: 24,  weight: 500, lineHeight: 1.30, tracking: '-0.005em', family: body }
    h5:              { size: 18,  weight: 500, lineHeight: 1.40, family: body }
    serif-emphasis:  { size: 32,  weight: 400, italic: true, family: serif, lineHeight: 1.30 }
    body-large:      { size: 18,  weight: 400, lineHeight: 1.55, family: body }
    body:            { size: 16,  weight: 400, lineHeight: 1.50, family: body }
    body-small:      { size: 14,  weight: 400, lineHeight: 1.50, family: body }
    label:           { size: 11,  weight: 500, family: mono, tracking: '0.06em' }
    label-tabular:   { size: 13,  weight: 500, family: mono, tracking: '0.04em', opentype: 'tnum' }
    caption:         { size: 12,  weight: 400, family: body, lineHeight: 1.40 }
    code-inline:     { size: 14,  weight: 400, family: mono }
    code-block:      { size: 13,  weight: 400, family: mono, lineHeight: 1.55 }
    code-label:      { size: 11,  weight: 500, family: mono, tracking: '0.04em' }

radius:
  micro: 2          # --radius-xs (0.125rem)
  sm: 4             # --radius-sm
  md: 6             # button (--radius default 0.6rem ≈ 10px on some, button locked at 6)
  lg: 10            # card
  xl: 16            # large card
  featured: 24      # hero shell
  pill: 9999        # status chips, pricing toggles

spacing:
  base: 4
  scale:
    xxs: 4
    xs: 8
    sm: 12
    md: 16
    lg: 24
    xl: 32
    xxl: 48
    section-sm: 64
    section: 96
    section-lg: 128

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  container-xs: 320
  container-7xl: 1280
  marketing-max: 1152

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.16, 1, 0.3, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — translate and scale removed; only opacity and color transition'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'none'
  standard: '0 0 20px rgba(0,0,0,0.04)'                                  # popover token --xq9itwp-style
  elevated: '0 8px 32px rgba(0,0,0,0.4)'                                 # tooltip, dropdown
  deep: '0 24px 48px rgba(0,0,0,0.6)'                                    # modal
  ring: '0 0 0 2px #5b3eea'                                              # focus ring

accessibility:
  contrast-text-on-bg: 13.4               # d7d8da on 171719 — AAA
  contrast-text-on-brand: 6.8             # ffffff on 5b3eea — AAA at large, AA at small
  contrast-text-soft-on-bg: 4.6           # 71727a on 171719 — AA body
  focus-ring: '2px solid #5b3eea, 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'tab order DOM-based, skip-link to #main, all CTAs reachable'

components:
  button-primary:
    bg: '#5b3eea'
    text: '#ffffff'
    radius: 6
    padding: '10px 20px'
    font: 'body, 14px, weight 500'
    hover: 'bg #6e54f0, slight ring'
    use: 'rare — Polar prefers ghost / link CTAs in hero'
  button-ghost:
    bg: 'transparent'
    text: '#d7d8da'
    radius: 6
    padding: '10px 20px'
    border: '1px solid #1d1e20'
    hover: 'border #5b3eea, text #ffffff'
    use: 'most CTAs are ghost — text + arrow, no fill'
  button-link:
    bg: 'transparent'
    text: '#d7d8da'
    padding: '0'
    hover: 'text #5b3eea, arrow translates 4px right'
    use: 'inline action with trailing arrow — the page''s primary CTA pattern'
  button-danger:
    bg: 'transparent'
    text: '#ee5a5a'
    border: '1px solid #ee5a5a'
    radius: 6
    hover: 'bg rgba(238,90,90,0.08)'
    use: 'rare destructive action'
  card:
    bg: '#171719'
    border: '1px solid #1d1e20'
    radius: 10
    padding: '32px'
    hover: 'border #2a2c30, no transform'
    use: 'feature card, content card on canvas'
  card-elevated:
    bg: '#101011'
    border: '1px solid #1d1e20'
    radius: 10
    padding: '32px'
    use: 'cards on lighter sub-canvas — invert tier order'
  input:
    bg: '#101011'
    text: '#d7d8da'
    placeholder: '#71727a'
    border: '1px solid #1d1e20'
    radius: 6
    padding: '10px 14px'
    focus: 'border #5b3eea, ring 2px #5b3eea at 30% alpha'
    use: 'email capture, search'
  badge:
    bg: '#1d1e20'
    text: '#71727a'
    radius: 9999
    padding: '4px 10px'
    font: 'mono, 11px, weight 500, tracking 0.06em'
    use: 'status chip, pricing toggle pill'
  badge-brand:
    bg: 'rgba(91,62,234,0.15)'
    text: '#9c87f5'
    radius: 9999
    padding: '4px 10px'
    use: 'highlighted feature label'
  nav-link:
    text: '#71727a'
    hover: 'text #d7d8da, no underline'
    active: 'text #ffffff'
    spacing: '32px between items'
    use: 'top nav, footer'
  diagram-stroke:
    stroke: '#ffffff'
    fill: '#282828'
    use: 'custom diagram language under section illustrations'

dark-mode: 'native — Polar is dark-only. No light variant for marketing.'

lineage:
  summary: |
    Polar is what happens when a Vercel-trained sensibility meets the
    aesthetic of a print magazine. The canvas is a near-black `#171719`
    rather than pure `#000` — warmer, less crunchy under heavy text — and
    the typographic system carries two voices in dialogue: `InterDisplay`
    for the product UI and headlines that scale up to 128px (`text-9xl`),
    and a licensed Louize serif reserved for narrative pull-quotes and
    occasional headlines that need a different register. The indigo
    `#5b3eea` accent (encoded throughout the system as the `lab(44% 29 -86)`
    primary) is treated like Linear treats its indigo — punctuation, not
    fill — while CTAs keep a tight `0.6rem` radius rather than a pill. Mono
    is GeistMono, a deliberate handoff to the Vercel Geist family that
    signals lineage to the modern dev-tool design tradition. The eight-step
    radius scale and the explicit `--orbit-*` token namespace betray a
    custom design-system foundation underneath the Tailwind v4 surface.
  influences:
    - name: 'Vercel Geist'
      role: 'Type-system lineage — GeistMono on Polar, InterDisplay/Inter parallel.'
      url: https://vercel.com/font
    - name: 'Linear'
      role: 'Dark-canvas product-as-marketing posture; indigo-as-accent restraint.'
      url: https://linear.app
    - name: 'Louize (Matthieu Cortat)'
      role: 'Editorial serif used for narrative moments — magazine-grade typography.'
      url: https://www.205.tf/font/louize
    - name: 'Stripe'
      role: 'Adjacent payment-infra lineage — Polar is a payment company aiming for the same trust posture.'
      url: https://stripe.com
    - name: 'The Verge / Wired editorial'
      role: 'Magazine-register typography on dark canvas — display serif moments inside a sans system.'
      url: https://www.theverge.com
---

## 1. Visual Theme & Atmosphere

Polar''s site is a developer-monetization product dressed as a tech publication. The dark canvas is `#171719` — a hair warmer than pure black — which keeps the type readable when the headline scales up to a full `text-9xl` (128px) display size. The canvas warmth is load-bearing: at 128px in white, pure black would crunch the eyes; `#171719` softens the edge enough to let headlines breathe.

Headlines are set in **InterDisplay** at weight 400 with `-0.025em` tracking, which is unusually loose for a sans at that size — most dev-tool sites would push to 600 with tighter tracking. The choice is deliberate: light weight + loose tracking reads as editorial display, not as headline-billboard. Body and UI hold to standard **Inter** at 16/24, weight 400. Letter-spacing is left neutral; hierarchy comes from size and weight, never tracking tricks.

A licensed **Louize** serif is loaded as a deliberate counter-voice for moments that want the gravitas of a magazine. It''s not a primary type voice — Louize appears in roughly 1 in 8 headings, on pull-quotes, and on the occasional editorial section. The fact that it''s a *real licensed serif* rather than Georgia is the brand''s tell: Polar is willing to pay for typographic distinction.

The indigo `#5b3eea` accent (encoded internally as `lab(44% 29 -86)`) is treated like Linear treats its indigo — punctuation, not fill. CTAs in the hero are ghost-style links with text-underline and a tracking arrow; the brand indigo only appears on hover or focus. This means the page''s defining accent is conspicuously *absent* on first view, which is itself a brand signal — confidence enough to show the indigo only as a flicker.

Mono is **GeistMono**, a deliberate handoff to the Vercel Geist family. The choice signals lineage to the modern dev-tool design tradition (Vercel, Resend, Linear) and quietly tells the developer audience: we know what you read. The `--orbit-*` token namespace under the Tailwind v4 surface betrays a deeper internal design-system foundation than the landing page exposes.

**Key Characteristics**
- `#171719` near-black canvas — warmer than `#000` for type comfort
- 128px display headlines in InterDisplay weight 400 with `-0.025em` tracking
- Three type voices in dialogue: InterDisplay / Inter / GeistMono / Louize-as-accent
- Indigo `#5b3eea` reserved for accent and hover — never as default fill
- Ghost-style hero CTAs (text + arrow), filled CTAs are rare
- Tonal layering only: `bg` → `surface` → `surface-alt` in 6–8% steps
- 1px borders + tonal stacking = entire depth language; no shadows on canvas
- 6px button radius, 10px card radius, pill `9999` for status chips only
- Custom diagram language with white stroke / `#282828` fill
- `--orbit-*` token namespace betrays a robust design-system foundation

## 2. Color Palette & Roles

### Primary
- **bg** `#171719`: near-black canvas, slightly warm to keep heavy type comfortable.
- **text** `#d7d8da`: primary body and UI copy — soft white, never pure.
- **brand** `#5b3eea`: Polar indigo, encoded `lab(44% 29 -86)`; punctuation, not fill.

### Brand & Dark
- **surface** `#101011`: secondary tier — cards, popovers, sidebar over canvas.
- **surface-alt** `#090909`: sidebar background, deepest tier.
- **bg-deep** `#0a0a0a`: alternative sidebar deep.
- **brand-deep** `#3a268f`: darker indigo for depth on indigo-on-indigo treatments.
- **brand-soft** `#1a1432`: 12% indigo overlay used as tinted background — rare.

### Accent
- **brand-hover** `#6e54f0`: hovered indigo, +12% lighter.
- **brand-active** `#4a30c8`: pressed indigo, deeper.
- **accent-stroke** `#ffffff`: `--graphic-stroke` for the custom diagram language.
- **accent-dim** `#282828`: `--graphic-dim` for diagram fills.

### Interactive
- **link** `#9c87f5`: link tint of brand — lighter than the brand fill itself.
- **link-hover** `#ffffff`: hovered link collapses to pure white.
- **focus-ring** `#5b3eea`: 2px indigo outline at 2px offset.
- **selection-bg** `#5b3eea` / **selection-text** `#ffffff`: text selection inverts to brand.

### Neutral Scale
- **text-strong** `#ffffff`: display peak, used sparingly.
- **text** `#d7d8da`: body, UI primary.
- **text-soft** `#71727a`: secondary copy, muted foreground.
- **text-muted** `#828387`: tertiary deck, label.
- **text-faint** `#4a4b50`: disabled, low-tier metadata.

### Surface & Borders
- **surface-raised** `#1d1d20`: hovered card surface.
- **surface-overlay** `#202024`: popover, dropdown panel.
- **border** `#1d1e20`: default hairline — tonal not chromatic.
- **border-soft** `#171719`: invisible against canvas; structural-only.
- **border-strong** `#2a2c30`: selected card edge, focused panel.

### Shadow Colors
- **shadow** `rgba(0,0,0,0.5)`: floating overlays only.
- **standard** `0 0 20px rgba(0,0,0,0.04)` — token-derived popover shadow (`--xq9itwp` style).
- Polar avoids drop shadows on cards entirely; depth is tonal.

### Semantic
- **success** `#3ddc97`: emerald, distinct from brand indigo.
- **warning** `#e8b94f`: warm amber.
- **danger** `#ee5a5a`: muted red — never used on marketing CTAs.
- **info** `#5ec4ee`: chambray blue, low saturation.

## 3. Typography Rules

### Font Family

- **Primary display**: `InterDisplay` — the display-optimized Inter sibling, with stylistic alternates and contextual variants tuned for large sizes. Falls back to standard Inter, then sans-serif.
- **Body**: standard `Inter` for UI copy and body. Same family, different cut.
- **Mono companion**: `GeistMono` — the Vercel Geist family''s monospace; visual lineage signal.
- **Editorial accent**: `Louize` (Matthieu Cortat) — a real licensed serif, not Georgia. Used for pull-quotes and occasional headlines.
- **OpenType features**: `cv11` (alternative single-storey `a`) and `ss01` (stylistic set 1) enabled on display; `tnum` for tabular numbers in pricing; `liga` and `kern` always on.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | InterDisplay | 128 | 400 | 1.0 | -0.025em | cv11, ss01 | Hero peak — `text-9xl` in Tailwind |
| display-large | InterDisplay | 96 | 400 | 1.0 | -0.022em | cv11 | Sub-hero |
| display-medium | InterDisplay | 72 | 500 | 1.05 | -0.02em | cv11 | Section opener |
| h1 | InterDisplay | 60 | 500 | 1.05 | -0.02em | cv11 | Article title |
| h2 | InterDisplay | 48 | 500 | 1.10 | -0.018em | cv11 | Major section head |
| h3 | InterDisplay | 32 | 500 | 1.20 | -0.012em | cv11 | Sub-section head |
| h4 | Inter | 24 | 500 | 1.30 | -0.005em | kern | Card title |
| h5 | Inter | 18 | 500 | 1.40 | 0 | kern | Inline head |
| serif-emphasis | Louize italic | 32 | 400 | 1.30 | 0 | dlig | Pull-quote, editorial moment |
| body-large | Inter | 18 | 400 | 1.55 | 0 | kern, liga | Hero deck, lead paragraph |
| body | Inter | 16 | 400 | 1.50 | 0 | kern, liga | Default reading size |
| body-small | Inter | 14 | 400 | 1.50 | 0 | kern | Secondary description |
| label | GeistMono | 11 | 500 | 1.30 | 0.06em | — | All-caps eyebrow, tag — mono is the label voice |
| label-tabular | GeistMono | 13 | 500 | 1.30 | 0.04em | tnum | Pricing rows, schedule |
| caption | Inter | 12 | 400 | 1.40 | 0 | kern | Image caption, meta |
| code-inline | GeistMono | 14 | 400 | 1.55 | 0 | — | Inline code spans |
| code-block | GeistMono | 13 | 400 | 1.55 | 0 | — | Code blocks |
| code-label | GeistMono | 11 | 500 | 1.30 | 0.04em | — | Status chip, version |

### Principles

- **Mono is the label voice.** Polar uses GeistMono — not Inter — for labels, status chips, and metadata. The mono carries developer credibility.
- **Display weight is light, tracking is loose.** 128px at weight 400 with `-0.025em` is editorial, not billboard. Most dev tools default to 600+ at this size; Polar refuses.
- **Three voices, not four.** InterDisplay / Inter / GeistMono is the spine; Louize is the rare flourish. A fifth family would break the system.
- **Louize is for register, not size.** Louize appears at body or h3 sizes, never at display. Its job is voice differentiation, not size hierarchy.
- **Tracking is brand discipline.** Display gets aggressive negative tracking (-0.018 to -0.025em); body gets neutral. Hierarchy is size + weight + tracking, never one alone.
- **No condensed weights.** InterDisplay Compressed and Inter Tight don''t appear — the system breathes wide.
- **Tabular numerals for pricing.** `tnum` makes columns of prices align without hand-tweaking — same discipline as Stripe.

## 4. Component Stylings

### Buttons

**Primary (filled indigo — rare)**
- Background: `#5b3eea`
- Text: `#ffffff`, Inter 14px weight 500
- Padding: 10px 20px
- Radius: 6px
- Hover: bg `#6e54f0`, slight glow ring
- Active: bg `#4a30c8`
- Focus: 2px indigo ring at 2px offset
- Use: rare — Polar prefers ghost / link CTAs in hero. Filled appears in dashboard / pricing.

**Ghost (most CTAs)**
- Background: transparent
- Text: `#d7d8da`, Inter 14px weight 500
- Padding: 10px 20px
- Radius: 6px
- Border: 1px solid `#1d1e20`
- Hover: border `#5b3eea`, text `#ffffff`
- Use: most CTAs are ghost — restraint over saturation.

**Link (text + arrow — the page''s primary CTA pattern)**
- Background: none
- Text: `#d7d8da`, Inter 14px weight 500, with trailing `→` arrow
- Padding: 0
- Hover: text shifts to `#5b3eea`, arrow translates 4px right over 200ms
- Use: hero CTA, inline calls-to-action throughout.

**Danger (rare)**
- Background: transparent
- Text: `#ee5a5a`
- Border: 1px solid `#ee5a5a`
- Radius: 6px
- Hover: bg `rgba(238,90,90,0.08)`
- Use: rare destructive action.

### Cards

**Standard feature card on canvas**
- Background: `#171719` (same as canvas — distinguished by border)
- Border: 1px solid `#1d1e20`
- Radius: 10px
- Padding: 32px
- Hover: border `#2a2c30`, no transform
- Use: feature grid on canvas.

**Elevated card on sub-canvas**
- Background: `#101011`
- Border: 1px solid `#1d1e20`
- Radius: 10px
- Padding: 32px
- Use: cards on lighter sub-canvas — invert tier order.

### Badges & Chips

**Status chip (pill)**
- Background: `#1d1e20`
- Text: `#71727a`, GeistMono 11px weight 500, tracking 0.06em
- Padding: 4px 10px
- Radius: 9999px (pill)
- Use: status chip, pricing toggle pill, "BETA," version mark.

**Brand chip**
- Background: `rgba(91,62,234,0.15)`
- Text: `#9c87f5`
- Radius: 9999px (pill)
- Use: highlighted feature label.

### Inputs

- Background: `#101011`
- Text: `#d7d8da`
- Placeholder: `#71727a`
- Border: 1px solid `#1d1e20`
- Radius: 6px
- Padding: 10px 14px
- Focus: border `#5b3eea`, ring 2px `#5b3eea` at 30% alpha
- Use: email capture, search.

### Navigation

- Background: transparent over canvas; subtle backdrop-blur on scroll
- Items: `#71727a` default, `#d7d8da` on hover, `#ffffff` on active — color shifts only, no underline
- Spacing: 32px between items
- CTA: ghost button anchored right, optional indigo on focus
- Mobile: hamburger reveals slide-down panel with stacked items at h4 size

### Decorative

**Custom diagram language** — Polar uses white-stroke (`--graphic-stroke: #ffffff`) over `#282828` (`--graphic-dim`) fills for the section illustrations. This is not Lucide or Heroicons; it''s a custom drawing language built into the design system.

**Pull-quote (Louize moment)** — Louize italic at 32px in `#d7d8da`, indented inside a left-rule of `1px solid #5b3eea`. The serif voice + indigo punctuation is the editorial signature.

## 5. Layout Principles

### Spacing System
Base unit = 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Density observation: marketing prose holds to 32–96px section padding; UI components inside cards are denser (8–24px). The hero overrides everything with section padding up to 128px.

### Grid & Container
Container scale runs `--container-xs` (20rem) through `--container-7xl` (80rem); marketing surface holds to `5xl`/`6xl` (64–72rem) for prose. Hero is full-width with text constrained to ~960px max. Feature grids are typically two- or three-up at desktop.

### Whitespace Philosophy
Generous between sections, dense within them. Vertical gutters around 64–96px between regions; cards inside a section get 24–32px gaps. The editorial pacing comes from breathing room between blocks, not from inflated padding inside blocks.

### Section Cadence
Tonal alternation: canvas (`#171719`) → sub-canvas (`#101011`) → canvas. Sometimes a deeper section (`#090909`) anchors a key moment. The brand-band pattern (a section in indigo) is reserved for the absolute top of the page or a single anchor mid-page.

## 6. Shapes & Radius Scale

| Tier | Px | Use |
|------|----|-----|
| Micro | 2 | `--radius-xs` — divider rounding |
| Small | 4 | Chip background, inline tag |
| Medium | 6 | **Button — the page default** |
| Large | 10 | Card |
| XL | 16 | Large card, modal |
| Featured | 24 | Hero shell, marquee block |
| Pill | 9999 | Status chip, pricing toggle pill |

The base `--radius` lands at `0.6rem` (~10px) — the sweet spot between Linear''s pill and Stripe''s hard 4px. Buttons use 6px; cards use 10px. The pill is reserved for status chips and pricing toggles. Compound radii are not used — every corner uniform.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | `#171719` flat | Canvas |
| 1 | `#101011` flat | Sub-canvas, deeper section band |
| 2 | `#171719` + `1px #1d1e20` border | Card on canvas |
| 3 | `#101011` + `1px #1d1e20` border | Card on sub-canvas |
| 4 | `#1d1d20` + `0 0 20px rgba(0,0,0,0.04)` shadow | Popover, tooltip |
| 5 | `#202024` + `0 24px 48px rgba(0,0,0,0.6)` shadow | Modal, dialog |

**Shadow Philosophy**: Polar avoids shadows on cards. Depth comes from tonal layering — `bg` → `surface` → `surface-alt`, each step roughly 6–8% darker (or, when inverting, lighter). Cards on the canvas use `surface` with a 1px border in `#1d1e20`, never a drop shadow. Shadows reappear only on detached overlays (popover, modal). The `--xq9itwp`-style token (`0 0 20px #0000000a`) is for popovers — almost imperceptible, mostly for edge definition rather than elevation.

## 8. Interaction & Motion

### Easing Curves
- **ease-standard** `cubic-bezier(0.4, 0, 0.2, 1)` — color, opacity, default transitions.
- **ease-emphasized** `cubic-bezier(0.16, 1, 0.3, 1)` — overlay entrances, hero entrance animations.
- **ease-out** `cubic-bezier(0, 0, 0.2, 1)` — exits.

### Duration Buckets
- **fast** 100ms — hover state shifts.
- **standard** 200ms — overlay fade-in, link underline grow.
- **slow** 320ms — modal entrance, scroll-driven hero animation.

### Per-Component Micro-States
- **Link CTA hover** — text color shifts from `#d7d8da` to `#5b3eea`; trailing arrow translates 4px right; both transitions over 200ms.
- **Card hover** — border shifts from `#1d1e20` to `#2a2c30` over 100ms.
- **Button (filled) hover** — bg shifts `#5b3eea` → `#6e54f0` over 100ms; subtle 0 0 0 4px glow at 8% alpha.
- **Popover entrance** — opacity 0 → 1 + translateY(-4px) over 200ms with ease-emphasized.
- **Hero text entrance** — staggered letter / word fade-in with 40ms stagger, total duration 800ms (page-load only).

### Page Transitions
Polar uses subtle scroll-driven animations on hero (parallax background grids) but avoids full-page transitions on navigation — hard cuts. Anchor scroll uses ease-standard at 600ms.

### Reduced Motion Strategy
With `prefers-reduced-motion: reduce`, all transforms (translate, scale, rotate) are removed. Only opacity and color transitions remain. Hero entrance becomes a single 200ms fade. Total motion budget: 200ms max per transition.

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)
- **Text on bg**: `#d7d8da` on `#171719` = **13.4:1** — AAA.
- **Text-soft on bg**: `#71727a` on `#171719` = **4.6:1** — AA body.
- **Text-on-brand**: `#ffffff` on `#5b3eea` = **6.8:1** — AAA at large, AA at small.
- **Border on bg**: `#1d1e20` on `#171719` = **1.2:1** — non-text decorative; meets WCAG threshold.

### Focus Indicators
2px indigo ring (`#5b3eea`) at 2px offset on all interactive elements. Outline solid, not dashed. Focus visible at all times — `outline: none` is never used without replacement.

### ARIA Patterns
- Top nav uses `<nav aria-label="Primary">`.
- Pricing toggles use `role="tablist"` with `aria-selected` on the active tab.
- Modals use `role="dialog"` with `aria-modal="true"` and labelled headings.
- Form inputs have visible labels; placeholders are supplemental.

### Keyboard Navigation
- Tab order follows DOM.
- Skip-link to `#main` visible on focus.
- Modals trap focus, restore on close.
- Escape closes overlays.
- Pricing toggle responds to arrow keys.

### Screen Reader Hints
- Decorative diagrams have `aria-hidden="true"`; semantic data is exposed via adjacent text.
- Icon-only buttons carry `aria-label`.
- Live regions on form validation (`aria-live="polite"`).

### Reduced Motion
Honored throughout — see §8.

## 10. Responsive Behavior

### Breakpoints
| Name | Min-width |
|------|-----------|
| mobile | 0–640 |
| tablet | 641–1024 |
| desktop | 1025–1280 |
| wide | 1281+ |

### Touch Targets
Minimum 44×44px on mobile. Filled buttons grow to 44px height on touch.

### Collapsing Strategy
- **Hero**: 128px display drops to 80px at tablet, 56px at mobile.
- **Feature grid**: three-up → two-up → single column.
- **Nav**: full bar → hamburger with slide-down panel at h4 size.
- **Section padding**: 128px → 96px → 64px across breakpoints.
- **Container**: `7xl` (1280px) → fluid edge-padding 24px on mobile.

### Image Behavior
Diagram SVGs scale fluidly with `viewBox`. Product mockups use `object-fit: contain` inside fixed-aspect frames. Code blocks become horizontally scrollable on mobile.

### Container Queries
Used on the pricing card grid where layout depends on parent width rather than viewport.

## 11. Content & Voice

### Tone
Confident, technical, magazine-register. Polar writes like a tech publication describing payment infrastructure — declarative, never breathless. Avoids exclamation marks. Sentences are full and complete.

### Microcopy Patterns
- Buttons: imperative or noun-phrase — "Get started," "Sign in," "View pricing."
- Errors: "Something went wrong on our side. Try again." (full sentence, owns the failure).
- Success: "Saved." (terse, confident, single word).
- Empty states: "No products yet. Create your first to start selling." (instructive).

### CTA Verb Conventions
- "Get started" (default for hero)
- "View pricing" (not "See plans")
- "Read docs" (not "Learn more")
- "Sign in" (not "Log in")

The voice trusts the reader to know what they''re doing. No hand-holding, no marketing jargon.

## 12. Dark Mode & Theming

Polar is **dark-only** for marketing. The product itself supports a light theme inside the dashboard, but the marketing surface stays anchored to `#171719`. There is no toggle on the marketing site. The design choice is positional: Polar wants to be read as a developer-first product, and the dark canvas is the typographic ground that supports the editorial display.

If a light variant were ever introduced, the implied token swap: `#171719` → `#fafafa` for canvas, `#101011` → `#f4f4f5` for surface, `#d7d8da` → `#1a1a1a` for text, indigo `#5b3eea` stays unchanged (it works on both). InterDisplay and Louize unchanged. But Polar has explicitly chosen not to ship this — the dark-on-dark editorial register is the brand.

## 13. Lineage & Influences

Polar inherits from three traditions: the Vercel / Resend dev-tool dark-canvas school (Inter / Geist / off-black), the Linear approach to indigo-as-punctuation, and the magazine editorial tradition (Louize serif, large display headlines with loose tracking, pull-quotes). What''s distinctive is the willingness to commit to all three at once.

The InterDisplay + Louize pairing is the clearest signal of editorial ambition — most dev-tool sites would not license a real serif, and most magazine-style sites would not pair a serif with a developer-credible mono. Polar does both, which positions it as something between Stripe (payment infrastructure with print-grade typography) and a tech publication describing itself.

The `--orbit-*` token namespace and the eight-step radius scale (`xs` through `4xl`) reveal a custom design-system foundation deeper than the visible Tailwind v4 surface. The system is built to scale beyond the marketing site.

**Named influences**:
- Vercel / Geist (https://vercel.com/font) — type-system lineage; GeistMono is the explicit handoff.
- Linear (https://linear.app) — dark-canvas marketing, indigo-as-accent restraint.
- Louize (Matthieu Cortat) (https://www.205.tf/font/louize) — editorial serif licensing for narrative moments.
- Stripe (https://stripe.com) — adjacent payment-infra trust posture.
- The Verge / Wired (https://www.theverge.com) — magazine display register on dark canvas.

## 14. Do''s and Don''ts

### Do
- Anchor the canvas at `#171719` — pure `#000` would crunch heavy display type; the warmth is load-bearing.
- Scale display headlines aggressively (up to 128px) — Polar earns it with editorial pacing and tight tracking.
- Keep display weight at 400, not 600+ — editorial register, not billboard.
- Apply `-0.025em` tracking on display copy — the negative tracking is the discipline.
- Treat the indigo `#5b3eea` as punctuation — most CTAs are text-link or low-key ghost.
- Pair InterDisplay with a real serif (Louize-class, not Georgia) — magazine register without losing tech credibility.
- Use GeistMono for labels, status chips, and code — the mono is the developer signal.
- Layer depth tonally (`bg` → `surface` → `surface-alt`) with 1px borders — not shadows.
- Reserve filled indigo CTAs for the rare anchor moment — text-link is the page default.
- Honor `prefers-reduced-motion: reduce` — strip translate and scale, keep opacity-only.

### Don''t
- Push the canvas to pure `#000` — the warmer `#171719` keeps the heavy type comfortable.
- Set display copy at weight 600+ — Polar''s register depends on weight 400 + tight tracking.
- Introduce a fourth type voice — three (InterDisplay / Inter / GeistMono / Louize as accent) is the ceiling.
- Drop shadows under cards — tonal stacking + 1px borders is the whole depth language.
- Use Inter (sans) for labels — GeistMono is the label voice.
- Pill (`9999`) buttons — pill is for status chips only; buttons stay at 6px.
- Apply Louize at display sizes — the serif is voice differentiation, not headline drama.
- Use exclamation marks in microcopy — the voice is editorial.
- Ship a marketing light mode — the dark canvas is the brand.
- Replace GeistMono with a different mono — the Vercel handoff is intentional.

## 15. Agent Prompt Guide

### Quick Color Reference
- Bg: `#171719`
- Surface: `#101011`
- Text: `#d7d8da`
- Text soft: `#71727a`
- Brand (indigo): `#5b3eea`
- Brand hover: `#6e54f0`
- Link: `#9c87f5`
- Border: `#1d1e20`
- Text on brand: `#ffffff`
- Focus ring: `#5b3eea`

### Example Component Prompts

> "Create a Polar-style hero with a `#171719` canvas and a 128px InterDisplay headline at weight 400 with `-0.025em` tracking in `#d7d8da`. Place a single ghost CTA below — text reading ''Get started →'' in `#d7d8da`, with the arrow translating 4px right on hover and the text shifting to `#5b3eea`."

> "Design a Polar feature card: `#171719` background (matches canvas), 1px solid `#1d1e20` border, 10px radius, 32px padding. Title in InterDisplay 32px weight 500, body in Inter 16px on 1.50 line-height in `#d7d8da`. Label above title in GeistMono 11px tracking 0.06em uppercase in `#71727a`. On hover, the border brightens to `#2a2c30` over 100ms — no shadow."

> "Build a Polar pricing card with a tonal sub-canvas (`#101011`) background, 10px radius, 1px border `#1d1e20`. Pricing in InterDisplay 48px weight 500 with `tnum` for tabular alignment. A pill toggle ''Monthly / Annually'' uses `#1d1e20` bg with the active state shifting to indigo `#5b3eea` background and white text."

> "Create a Polar pull-quote moment: Louize italic at 32px in `#d7d8da`, left-padded 24px, with a 1px left-rule in `#5b3eea`. Use this for the editorial section between feature blocks."

> "Design a Polar status chip: `#1d1e20` background, GeistMono 11px weight 500 tracking 0.06em uppercase in `#71727a`, padding 4px 10px, radius 9999 (pill). Use for ''BETA,'' ''NEW,'' or version marks."

### Iteration Guide

1. **Start at `#171719`, not `#000`** — the warmth is what makes 128px display copy comfortable. If you''re at pure black, soften.
2. **Set hero display at weight 400 with `-0.025em` tracking** — this is the editorial register. Going to 600+ tips into billboard.
3. **Make CTAs text-links with arrows** — fill is the rare exception, not the rule. Most actions are ghost or link.
4. **Use GeistMono for labels** — Inter for labels reads as generic SaaS. The mono is the developer credibility marker.
5. **Add Louize sparingly** — one pull-quote per page is usually enough. The serif is a flourish, not a system.
6. **Layer tonally, not with shadows** — `bg` → `surface` → `surface-alt`, each step 6–8% lighter or darker. 1px borders mark the edge.
7. **Keep button radius at 6px** — pill is for status chips. The 6px button is the dev-tool sweet spot.
8. **Restrain the indigo** — if `#5b3eea` is filling more than 5% of the screen, you''re overusing it. It''s punctuation.
