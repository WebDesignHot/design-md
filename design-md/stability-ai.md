---
name: Stability AI
tagline: A near-black studio floor where Archivo headlines run light and a single lavender pill carries the only colour.
updated_at: 2026-05-29T21:43:44.558Z
published_at: 2026-05-29T21:43:44.558Z
author: webdesignhot
source_url: https://stability.ai
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, saas]
tags: [dark, sans, spacious, cool, generative]
preview_swatch: ['#1e1e1e', '#a381ff', '#330066']
related: [midjourney]
description: 'Stability AI''s site is a near-black studio floor at `#1e1e1e` — warmer than pure black, the grey of a darkroom. Headlines run in Archivo at 72px and a surprisingly light weight, refusing the marketing-bold of typical AI launch pages. The whole surface is monochrome white-on-charcoal until a single accent breaks through: a soft lavender `#a381ff` that fills the primary call-to-action as a fully rounded 300px pill. A deep violet `#330066` anchors the brand''s darker register. The result reads as open-source research lab rather than SaaS funnel — quiet, technical, and confident enough to spend its only saturated colour on one button.'

colors:
  bg: '#1e1e1e'
  bg-alt: '#191919'
  surface: '#252525'
  surface-raised: '#2c2c2c'
  text: '#ffffff'
  text-strong: '#ffffff'
  text-body: '#e5e7e6'
  text-muted: '#b2b2b2'
  text-faint: '#7a7a7a'
  brand: '#a381ff'
  brand-deep: '#330066'
  brand-soft: '#2a2140'
  on-brand: '#ffffff'
  on-brand-dark: '#1e1e1e'
  link: '#a381ff'
  link-hover: '#bba6ff'
  link-visited: '#8e6cff'
  selected: '#2a2140'
  disabled: '#4a4a4a'
  neutral-50: '#f5f5f5'
  neutral-100: '#e5e7e6'
  neutral-300: '#b2b2b2'
  neutral-500: '#7a7a7a'
  neutral-700: '#3a3a3a'
  neutral-900: '#191919'
  border: '#000000'
  border-strong: '#3a3a3a'
  border-subtle: '#2a2a2a'
  shadow-ambient: 'rgba(0,0,0,0.4)'
  shadow-deep: 'rgba(0,0,0,0.7)'
  shadow-violet: 'rgba(163,129,255,0.25)'
  success: '#4ade80'
  success-bg: '#16281c'
  success-text: '#86efac'
  warning: '#fbbf24'
  warning-bg: '#2a210d'
  warning-text: '#fcd34d'
  danger: '#f87171'
  danger-bg: '#2a1414'
  danger-text: '#fca5a5'
  info: '#a381ff'
  info-bg: '#211b33'
  info-text: '#bba6ff'

typography:
  display:
    family: 'Archivo, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 72, weight: 400, lineHeight: 1.0,  tracking: '-0.02em',  family: display }
    display-lg:      { size: 56, weight: 400, lineHeight: 1.05, tracking: '-0.018em', family: display }
    h1:              { size: 42, weight: 400, lineHeight: 1.1,  tracking: '-0.015em', family: display }
    h2:              { size: 32, weight: 500, lineHeight: 1.2,  tracking: '-0.01em',  family: display }
    h3:              { size: 24, weight: 500, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.3,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    lead:            { size: 20, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    overline:        { size: 12, weight: 600, lineHeight: 1.3,  tracking: '0.08em',   family: body }
    button:          { size: 15, weight: 500, lineHeight: 1.0,  tracking: '0',        family: body }
    nav-link:        { size: 15, weight: 500, lineHeight: 1.0,  tracking: '0',        family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: mono }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  card: 12
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  hero-min-height: 600

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — transforms drop to opacity-only fades'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0,0,0,0.4) 0 1px 2px'
  standard: 'rgba(0,0,0,0.5) 0 8px 24px'
  elevated: 'rgba(0,0,0,0.6) 0 24px 48px -16px'
  deep: 'rgba(0,0,0,0.7) 0 36px 72px -24px'
  ring: '0 0 0 2px #a381ff'
  glow: '0 0 32px rgba(163,129,255,0.30)'

accessibility:
  contrast-text-on-bg: 16.67         # white on #1e1e1e, AAA
  contrast-text-on-brand: 2.94       # white on #a381ff — FAILS AA; prefer dark text
  contrast-darktext-on-brand: 5.67   # #1e1e1e on #a381ff, AA
  contrast-brand-on-bg: 5.67         # #a381ff on #1e1e1e, AA
  contrast-body-on-bg: 13.42         # #e5e7e6 on #1e1e1e, AAA
  contrast-muted-on-bg: 7.86         # #b2b2b2 on #1e1e1e, AAA
  focus-ring: '2px solid #a381ff with 2px offset'
  focus-ring-offset-color: '#1e1e1e'
  reduced-motion-honored: true
  keyboard-nav: 'standard tab order; ESC closes menus and modals; skip-to-content link is the first focusable element'

components:
  button-primary:
    bg: '#a381ff'
    text: '#1e1e1e'
    border: 'none'
    radius: 9999
    padding: '12px 28px'
    font: 'body 15/1.0 weight 500'
    hover: 'bg #bba6ff, slight lift'
    active: 'bg #8e6cff'
    focus: '2px ring #a381ff + 2px offset'
  button-secondary:
    bg: 'transparent'
    text: '#ffffff'
    border: '1px solid #ffffff'
    radius: 9999
    padding: '12px 28px'
    font: 'body 15/1.0 weight 500'
    hover: 'bg #ffffff, text #1e1e1e'
    active: 'bg #e5e7e6'
  button-dark:
    bg: '#191919'
    text: '#ffffff'
    border: '1px solid #3a3a3a'
    radius: 9999
    padding: '12px 24px'
    font: 'body 15/1.0 weight 500'
    hover: 'bg #252525, border #4a4a4a'
  button-ghost:
    bg: 'transparent'
    text: '#ffffff'
    border: 'none'
    radius: 9999
    padding: '10px 20px'
    font: 'body 15/1.0 weight 500'
    hover: 'bg #ffffff14'
  card:
    bg: '#252525'
    border: '1px solid #000000'
    radius: 12
    padding: '24px'
    shadow: 'ambient'
    hover: 'shadow standard, border #3a3a3a'
  input:
    bg: '#1e1e1e'
    text: '#ffffff'
    placeholder: '#7a7a7a'
    border: '1px solid #3a3a3a'
    radius: 8
    padding: '10px 14px'
    font: 'body 16/1.5 weight 400'
    focus: 'border #a381ff, ring 2px #a381ff'
  badge:
    bg: '#2a2140'
    text: '#bba6ff'
    border: 'none'
    radius: 9999
    padding: '4px 12px'
    font: 'body 12/1.4 weight 600 tracking 0.02em'

lineage:
  summary: |
    Stability AI's site sits in the open-source-research register: a
    near-black studio floor at `#1e1e1e` — warmer than the `#000` of
    Vercel or the navy-violet of Midjourney, the neutral charcoal of a
    photographic darkroom. Headlines are typeset in **Archivo**, a
    grotesque-grade sans by Omnibus-Type, run large (72px) but at a
    light weight that deliberately refuses the marketing-bold of typical
    SaaS launch pages. The surface is rigorously monochrome — white and
    grey on charcoal — until a single accent breaks through: a soft
    **lavender `#a381ff`** that fills the primary call-to-action as a
    fully rounded 300px pill, with a deeper **violet `#330066`** holding
    the darker brand register beneath it. The colour discipline is the
    statement: where competitors flood the page with gradients and glow,
    Stability spends its only saturated hue on one button. The shape
    language reinforces it — pills everywhere, no sharp corners on
    interactive elements — giving the technical, model-card-heavy
    content a soft, approachable edge. The lineage runs through
    open-source developer brands (Hugging Face's community warmth) and
    the quiet research-lab landing pages (Anthropic, Midjourney) more
    than through the gradient-hero SaaS playbook.
  influences:
    - name: Hugging Face
      role: Open-source AI community register; approachable rather than enterprise.
      url: https://huggingface.co
    - name: Archivo (Omnibus-Type)
      role: Grotesque display sans run light-and-large as the headline voice.
      url: https://fonts.google.com/specimen/Archivo
    - name: Midjourney
      role: Dark-canvas research-lab restraint; single-accent discipline on a near-black ground.
      url: https://www.midjourney.com
    - name: Anthropic
      role: Quiet research register over SaaS marketing; restraint as authority signal.
      url: https://www.anthropic.com
    - name: Vercel
      role: Near-monochrome dark canvas and disciplined system contrast.
      url: https://vercel.com

dark-mode: native        # Stability AI is dark-by-default; the charcoal ground is the brand
---

## 1. Visual Theme & Atmosphere

Stability AI's marketing surface is a studio floor with the lights low. The canvas sits at `#1e1e1e` — not the absolute `#000` of a Vercel deck, not the navy-violet cosmos of Midjourney, but a warm neutral charcoal, the grey of a darkroom or a photographer's seamless backdrop. Onto that ground the page lays white type and almost nothing else. There is no gradient mesh, no glow halo, no animated particle field. The atmosphere is deliberately quiet: a place where models are evaluated, not a funnel where conversions are chased.

The headline voice is **Archivo**, a grotesque-grade sans by Omnibus-Type, set large — the hero h1 runs to 72px — but at a surprisingly light weight. That combination of scale and lightness is the brand's signature move: it reads as confident and editorial rather than loud. Where the standard AI launch page reaches for 80px bold display copy to shout, Stability sizes its headline just as large but lets the strokes stay thin, so the page feels like a broadsheet masthead instead of a billboard. Body copy steps down to a clean system sans, keeping the prose neutral and technical.

The colour story is the whole story. The surface is monochrome — white `#ffffff`, off-white body `#e5e7e6`, and a ladder of greys — until a single accent breaks through: a soft **lavender `#a381ff`** (rgb 163, 129, 255). That lavender appears almost exclusively as the fill of the primary call-to-action, which is shaped as a fully rounded **300px pill** — effectively a stadium capsule. Beneath it, a deep **violet `#330066`** anchors the darker brand register, used for shape-block backgrounds and accented panels. The restraint is the confidence: spending your only saturated hue on one button signals that the work, not the chrome, is the product.

The shape language reinforces the calm. Interactive elements are pills — the CTA at 300px radius, the cookie button at 70px — so corners are never sharp where a user would touch. Cards and panels carry a gentler 12px radius. The whole page reads soft-edged and approachable, a counterweight to the dense, technical, model-card-heavy content Stability actually ships.

The sensory metaphor is a darkroom at work: warm-black walls, a sheet of paper-white type developing on the surface, and one lavender safelight glowing in the corner. Nothing competes for attention; the eye goes straight to the single coloured pill and then to the words.

**Key Characteristics**

- Warm near-black canvas (`#1e1e1e`), not pure black and not navy
- Archivo headlines run large (up to 72px) but light-weight — scale without shout
- Rigorously monochrome surface: white and grey on charcoal
- A single saturated accent — lavender `#a381ff` — spent almost entirely on the primary CTA
- Deep violet `#330066` as the darker brand register and shape-block fill
- Fully rounded pill CTAs (300px radius) — no sharp corners where users touch
- No gradients, no glow halos, no animated mesh in the hero
- Open-source research-lab register over SaaS-funnel marketing
- Spacious vertical rhythm; broadsheet-quiet density
- Soft-edged chrome as a counterweight to dense technical content

## 2. Color Palette & Roles

### Primary

- **bg** (`#1e1e1e`): page ground; warm near-black charcoal, the darkroom floor
- **bg-alt** (`#191919`): slightly deeper inset bands and footer
- **text** (`#ffffff`): pure-white display and headline copy
- **text-body** (`#e5e7e6`): off-white body slate (matches the live h2 colour, rgb 229,231,230)

### Brand

- **brand** (`#a381ff` → rgb 163,129,255): signature soft lavender; primary CTA fill, links, focus rings
- **brand-deep** (`#330066`): deep violet; darker brand register, shape-block backgrounds, accent panels
- **brand-soft** (`#2a2140`): tinted-violet panel for selected/badge backgrounds on the dark ground
- **on-brand** (`#1e1e1e`): dark charcoal text on lavender fill (preferred — meets AA; white does not)
- **on-brand-dark** (`#1e1e1e`): explicit dark-on-lavender token for buttons

### Interactive

- **link** (`#a381ff`): default link colour, the lavender accent
- **link-hover** (`#bba6ff`): lighter lavender on hover
- **link-visited** (`#8e6cff`): deeper lavender visited
- **selected** (`#2a2140`): selected list-item / active-tab background
- **disabled** (`#4a4a4a`): muted grey for disabled controls

### Neutral Scale

- **neutral-50** (`#f5f5f5`): paper highlight on rare light press zones
- **neutral-100** (`#e5e7e6`): off-white body / secondary headline
- **neutral-300** (`#b2b2b2`): muted text, captions, metadata
- **neutral-500** (`#7a7a7a`): faint text, placeholders, disabled labels
- **neutral-700** (`#3a3a3a`): visible borders and dividers on dark
- **neutral-900** (`#191919`): deepest inset panel

### Surface

- **surface** (`#252525`): default card surface, one step up from the ground
- **surface-raised** (`#2c2c2c`): hover-raised card / floating menu
- **bg-alt** (`#191919`): inset zones below the ground plane

### Borders

- **border** (`#000000`): hard black hairline; cards on charcoal read as cut-outs
- **border-strong** (`#3a3a3a`): visible grey divider between sections
- **border-subtle** (`#2a2a2a`): whisper-line for inset panels

### Shadow Colors

- **shadow-ambient** (`rgba(0,0,0,0.4)`): resting-card base shadow
- **shadow-deep** (`rgba(0,0,0,0.7)`): modal / lightbox elevation
- **shadow-violet** (`rgba(163,129,255,0.25)`): rare brand-tinted glow on focus or featured CTA

### Semantic

- **success** (`#4ade80`) on **success-bg** (`#16281c`) with **success-text** (`#86efac`)
- **warning** (`#fbbf24`) on **warning-bg** (`#2a210d`) with **warning-text** (`#fcd34d`)
- **danger** (`#f87171`) on **danger-bg** (`#2a1414`) with **danger-text** (`#fca5a5`)
- **info** (`#a381ff`) on **info-bg** (`#211b33`) with **info-text** (`#bba6ff`) — info borrows the brand lavender

## 3. Typography Rules

### Font Family

- **Display & Headline**: `Archivo, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` — weights 400–700, but run light (400–500) on display copy
- **Body**: `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` — weights 400, 500, 600 (the production site falls back to the platform sans for prose)
- **Mono**: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace` — weights 400, 500, for code samples and model identifiers
- **OpenType**: tabular figures (`tnum`) for benchmark tables and parameter counts; default ligatures off in headlines

### Hierarchy

| Role          | Font    | Size | Weight | Line H | Tracking  | Notes |
|---------------|---------|------|--------|--------|-----------|-------|
| display-hero  | display | 72   | 400    | 1.00   | -0.02em   | landing hero; large but light — the signature move |
| display-lg    | display | 56   | 400    | 1.05   | -0.018em  | section openers |
| h1            | display | 42   | 400    | 1.10   | -0.015em  | page title |
| h2            | display | 32   | 500    | 1.20   | -0.01em   | feature heads (live h2 colour `#e5e7e6`) |
| h3            | display | 24   | 500    | 1.25   | -0.005em  | sub-section |
| h4            | body    | 20   | 600    | 1.30   | 0         | switches to body sans for small heads |
| lead          | body    | 20   | 400    | 1.50   | 0         | hero supporting paragraph |
| body-lg       | body    | 18   | 400    | 1.55   | 0         | feature copy |
| body          | body    | 16   | 400    | 1.55   | 0         | default prose |
| body-sm       | body    | 14   | 400    | 1.50   | 0         | secondary / fine print |
| label         | body    | 13   | 500    | 1.40   | 0.02em    | form labels, ui labels |
| caption       | body    | 12   | 500    | 1.40   | 0.02em    | image captions, metadata |
| overline      | body    | 12   | 600    | 1.30   | 0.08em    | uppercase eyebrow above heads |
| button        | body    | 15   | 500    | 1.00   | 0         | CTA pill label |
| nav-link      | body    | 15   | 500    | 1.00   | 0         | top-nav links |
| code          | mono    | 14   | 400    | 1.50   | 0         | model ids, code samples |

### Principles

- **Large-and-light display**: the defining typographic move is Archivo at 72px run at weight 400. Scale supplies presence; weight stays restrained. Never reach for 700 on the hero.
- **Negative tracking on display only**: headlines tighten from `-0.005em` to `-0.02em` as they grow; body copy never tightens.
- **Two registers, no third face**: Archivo for display, a clean system sans for body. No serif, no decorative face. Mono appears only for model identifiers and code.
- **Off-white body, white headline**: pure `#ffffff` is reserved for the largest display copy; running body lands on `#e5e7e6` to reduce glare on the dark ground.
- **Overline as eyebrow**: a 12px uppercase overline at `0.08em` tracking marks section eyebrows; it is the only place caps-and-tracking appear.
- **Tabular figures for data**: benchmark tables, parameter counts (e.g. "3.5B"), and dates use `tnum` so columns align.
- **No italics for emphasis**: emphasis is structural — weight 500/600 or the lavender accent — not slant.

## 4. Component Stylings

### Buttons

**button-primary** — the lavender pill (the page's only saturated element)
- Background: `#a381ff`
- Text: `#1e1e1e` (dark charcoal — meets AA on lavender; white text fails)
- Font: body 15/1.0, weight 500
- Padding: `12px 28px`
- Radius: `9999` (full pill — production renders at 300px)
- Border: none
- Hover: bg lifts to `#bba6ff`, subtle 1px upward translate
- Active: bg drops to `#8e6cff`
- Focus: 2px ring `#a381ff` with 2px offset on the ground
- Use: hero "Get Started", "Try the API", "Download"

**button-secondary** — the outlined pill
- Background: transparent
- Text: `#ffffff`
- Border: `1px solid #ffffff`
- Font: body 15/1.0, weight 500
- Padding: `12px 28px`
- Radius: `9999`
- Hover: fills to `#ffffff` bg with `#1e1e1e` text (inverts)
- Active: bg `#e5e7e6`
- Use: secondary CTA ("Read the paper", "View models")

**button-dark** — the recessed grey pill
- Background: `#191919`
- Text: `#ffffff`
- Border: `1px solid #3a3a3a`
- Font: body 15/1.0, weight 500
- Padding: `12px 24px`
- Radius: `9999`
- Hover: bg `#252525`, border `#4a4a4a`
- Use: tertiary actions, "Cookies Settings", utility buttons (the live cookie button uses this register at 70px radius)

**button-ghost** — the borderless pill
- Background: transparent
- Text: `#ffffff`
- Border: none
- Font: body 15/1.0, weight 500
- Padding: `10px 20px`
- Radius: `9999`
- Hover: bg `#ffffff14` (8% white)
- Use: nav buttons, inline link-buttons, menu items

### Cards

**Standard card** (model / product tile):
- Background: `#252525`
- Border: `1px solid #000000` (hard black hairline — reads as a cut-out)
- Radius: 12px
- Padding: 24px
- Shadow: ambient `rgba(0,0,0,0.4) 0 1px 2px`
- Hover: shadow steps to `standard`, border lifts to `#3a3a3a`

**Feature panel** (shape-block):
- Background: `#330066` (deep violet shape-block fill — the live `--shape-block-background-color` token)
- Radius: 12px
- Padding: 32px
- Text: `#ffffff`
- Use: accented feature callouts, the rare coloured band

### Badges / Tags / Pills

- Background: `#2a2140` (tinted violet)
- Text: `#bba6ff`, body 12/1.4 weight 600, tracking 0.02em
- Radius: `9999` (pill)
- Padding: `4px 12px`
- Use: model version tags, "Open Weights", "Research", status chips

### Inputs / Forms

**Text input**:
- Background: `#1e1e1e`
- Text: `#ffffff`, body 16/1.5 weight 400
- Placeholder: `#7a7a7a`
- Border: `1px solid #3a3a3a`
- Radius: 8px
- Padding: `10px 14px`
- Focus: border `#a381ff`, ring 2px `#a381ff`

**Newsletter / API-key field** (when present):
- Background: `#191919`
- Border: `1px solid #3a3a3a`
- Radius: `9999` (pill input paired with a pill submit)
- Submit: lavender primary pill, hard-right inside or adjacent

### Navigation

- Top bar: 64px, transparent over the charcoal ground, no border (or a faint `#2a2a2a` hairline on scroll)
- Wordmark: hard-left, white
- Link list: center or hard-right, body 15/1.0 weight 500, gap 24–32px
- CTA: lavender pill hard-right ("Get Started")
- Hover: link colour shifts white → `#a381ff` lavender, or opacity to `0.8`
- Mobile: hamburger collapses into a full-bleed sheet at `#1e1e1e`
- Skip-to-content link: first focusable element, styled as a lavender pill when focused (live audit confirms this exact pattern)

## 5. Layout Principles

### Spacing System

Base unit is 4px. Scale: `0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128`. Section padding lands at 64 or 96 (128 on the hero band); component gap lands at 24 or 32. Density is restrained — Stability trades information-per-pixel for breathing room, the broadsheet rhythm.

### Grid & Container

- Page max width: **1280px**, centered
- Prose max width: **720px**
- Header height: **64px**
- Hero: full bleed with copy floated low-left in a ~720px column
- Feature grids: 12-column, 24–32px gutters; model/product cards in 2–3 columns
- Tables (benchmarks, model specs): full content-width, tabular figures, hairline row dividers at `#2a2a2a`

### Whitespace Philosophy

Section padding is generous (`64–96px` vertical between bands; up to 128 around the hero). Card padding is comfortable (24px). The quiet density is the point — the page should feel like a research lab's site, not a conversion machine. Headlines get 32–48px of breathing room above their sub-copy.

### Section Cadence

Pages run almost entirely on the charcoal ground (`#1e1e1e`), with occasional inset bands at `#191919` and rare accent panels in deep violet `#330066`. The rhythm is dark-dark-(rare-violet)-dark. There is no alternating light/dark — the surface stays monochrome charcoal, and the lavender CTA is the only recurring spot of colour.

## 6. Shapes & Radius Scale

| Tier        | px    | Use |
|-------------|-------|-----|
| Micro       | 2     | inline code, tiny indicators |
| Standard    | 4     | small chips, fine controls |
| Comfortable | 8     | inputs, small buttons, default UI |
| Relaxed     | 12    | cards, feature panels, shape-blocks |
| Large       | 16    | hero panels, large media frames |
| Pill        | 9999  | all CTAs, badges, tags, avatars |

The defining shape decision is the **pill**: every interactive element a user touches is fully rounded. The live site renders its primary CTA at a 300px radius and its utility (cookie) button at 70px — both well past their height, so they read as stadium capsules. Cards and panels stay at a gentler 12px. No sharp corners appear on any clickable surface; the softness offsets the dense, technical content.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | Flat, no shadow | bg, full-bleed sections |
| 1 | Tonal step (`#252525` card on `#1e1e1e` ground) | resting cards, panels |
| 2 | `ambient` shadow `rgba(0,0,0,0.4) 0 1px 2px` | hover-ready cards |
| 3 | `standard` shadow `rgba(0,0,0,0.5) 0 8px 24px` | hover-raised cards, dropdowns |
| 4 | `elevated` shadow `rgba(0,0,0,0.6) 0 24px 48px -16px` | floating menus, popovers |
| 5 | `deep` `rgba(0,0,0,0.7) 0 36px 72px -24px` | modals, lightbox |

### Shadow Philosophy

On a warm-black ground, cast shadows do most of their work invisibly — what reads is the **tonal step** between the `#1e1e1e` floor and the `#252525` card, reinforced by a hard `#000000` hairline that makes each card look cut from the surface. Shadows are neutral black (no colour tint) and stay subtle; the brand is not trying to float elements off a glossy plane. The rare exception is a lavender-tinted glow (`rgba(163,129,255,0.30)`) reserved for a focused or featured CTA — the only moment depth borrows the brand colour. Elevation is restrained throughout: this is a flat, editorial surface, not a layered dashboard.

## 8. Interaction & Motion

### Easing

- `ease-standard` `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus, colour shifts
- `ease-emphasized` `cubic-bezier(0.2, 0, 0, 1)` — entrances, panel reveals
- `ease-out` `cubic-bezier(0, 0, 0.2, 1)` — exits and dismissals

### Durations

- `duration-fast` **150ms** — micro hover lifts, focus rings, link colour shifts
- `duration-standard` **240ms** — button state changes, card hovers
- `duration-slow` **320ms** — panel reveals, modal open, menu sheets

### Per-Component Micro-States

- **Primary button hover**: bg shifts `#a381ff` → `#bba6ff` over 240ms `ease-standard` with a 1px upward translate
- **Secondary button hover**: inverts to white fill / charcoal text over 240ms — the most theatrical state on the page
- **Card hover**: shadow steps from `ambient` to `standard` over 240ms; border lifts `#000000` → `#3a3a3a`
- **Link hover**: colour shifts `#ffffff` → `#a381ff` over 150ms; no underline grow
- **Nav scroll**: header gains a faint `#2a2a2a` hairline and slight `#191919` backdrop on scroll past the hero
- **Modal open**: 320ms `ease-emphasized` scale-96→100 with opacity 0→1; backdrop fades in over 240ms

### Page Transitions

Section content fades up on scroll via `IntersectionObserver` over ~320ms `ease-emphasized` with a small 8px transform-y. The hero is static — no parallax, no animated mesh, no auto-playing background loop competing with the headline.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. All transforms (translate, scale) drop; transitions degrade to opacity-only fades capped at 200ms. Focus rings continue to animate (functional, not decorative). The button-invert hover loses its translate but keeps the colour change.

## 9. Accessibility & A11y

### Contrast Pairs (computed from live tokens)

- White `#ffffff` on `#1e1e1e`: **16.67:1** — AAA
- Body `#e5e7e6` on `#1e1e1e`: **13.42:1** — AAA
- Muted `#b2b2b2` on `#1e1e1e`: **7.86:1** — AAA
- Lavender `#a381ff` on `#1e1e1e` (links, accents): **5.67:1** — AA
- Dark `#1e1e1e` text on `#a381ff` (recommended CTA pairing): **5.67:1** — AA
- White `#ffffff` on `#a381ff` (the live CTA pairing): **2.94:1** — **FAILS AA**

> **Accessibility note (real finding):** the production site fills its lavender primary pill with **white** text, which computes to only **2.94:1** — below the 4.5:1 AA threshold for normal text. This entry recommends flipping the CTA text to dark charcoal `#1e1e1e` (5.67:1, AA-pass) or darkening the lavender fill. White-on-lavender is the single contrast weakness in an otherwise AAA-grade monochrome palette.

### Focus Indicators

- 2px solid `#a381ff` ring with 2px offset
- Offset colour matches the surface (`#1e1e1e` on ground, `#252525` on cards)
- Never removed — `:focus-visible` suppresses only for mouse pointer
- The skip-to-content link is the first focusable element and renders as a visible lavender pill on focus

### ARIA Patterns

- **Disclosure**: nav dropdowns and FAQ use `aria-expanded` on the trigger and `aria-controls` to the panel
- **Dialog**: modals use `role="dialog"` `aria-modal="true"` with `aria-labelledby` pointing to the title
- **Tablist**: model/version switchers use `role="tablist"` with `role="tab"` and `aria-selected`
- **Status**: API/playground render progress uses `role="status"` `aria-live="polite"`

### Keyboard Navigation

- Skip-to-content link first in tab order
- Tab order follows visual order strictly
- ESC closes menus, modals, and dropdowns
- Enter/Space activate focused buttons and tabs
- Arrow keys traverse tablist version selectors

### Screen Reader Hints

- Icon-only buttons require `aria-label`
- Decorative shape-block panels use `aria-hidden="true"` where they carry no content
- Model spec tables use proper `<th scope>` headers for benchmark columns
- The lavender accent never conveys meaning by colour alone — labels accompany state

### Reduced Motion

All decorative motion (translate, scale, fade-up) is disabled under `prefers-reduced-motion: reduce`. Functional motion (focus, modal open) is retained but capped at 200ms opacity-only.

## 10. Responsive Behavior

| Breakpoint | px       | Behavior |
|------------|----------|----------|
| mobile     | 0–639    | single-column, stacked nav sheet, 16px gutters |
| tablet     | 640–1023 | 2-column feature/model grid, condensed top bar |
| desktop    | 1024–1279| 3-column grid, full nav |
| wide       | 1280+    | 1280 max width, generous side margins |

### Touch Targets

Minimum 44×44px for all interactive elements on mobile. Pill buttons grow vertical padding from 12px to 14px below 640px. Tag pills keep a 28px min-height with added tap padding.

### Collapsing Strategy

- **Nav**: full link list above 1024; hamburger full-bleed sheet at `#1e1e1e` below
- **Hero copy**: side-floated ~720px column → top-stacked full-width below 1024; the 72px headline scales down to ~44px on mobile
- **Card grids**: 3 → 2 → 1 columns at 1280 / 1024 / 640
- **Cards**: padding shrinks 24 → 16 below 640
- **Tables**: benchmark tables scroll horizontally below 640 rather than reflow, preserving column alignment

### Image / Media Behavior

Model previews and demo media are served at native aspect ratios; `loading="lazy"` on below-the-fold media. `srcset` provides 1x/2x for retina. Demo loops are click-to-play, never autoplaying behind the hero headline.

### Container Queries

Model cards in dense grids use `@container` queries to drop secondary metadata (parameter count, license chip) below ~260px card width, keeping the title and primary action visible.

## 11. Content & Voice

### Tone

Technical, plain, and open-source. Stability AI writes like a research lab releasing weights, not a SaaS chasing signups: "Stable Diffusion 3.5 is now available" rather than "Unleash limitless creativity." Sentences state capability and availability; they do not sell. The register favours model names, parameter counts, and licence terms over adjectives.

### Microcopy Patterns

- **Buttons**: "Get Started", "Try the API", "Download", "Read the paper" — verbs are plain infinitives or single nouns
- **Errors**: "Something went wrong. Try again." — never "Oops!"
- **Success**: "Saved." — terminal period, no exclamation
- **Loading**: "Generating…" — present participle, ellipsis

### Empty States

- Gallery empty: "No outputs yet. Run a prompt to begin." — two short sentences, no illustration
- Search empty: "No models matched." — no over-helpful recovery copy
- Error: "Disconnected. Reconnecting…" — present-tense reassurance

### CTA Verb Conventions

- "Get Started" (the primary lavender pill)
- "Try the API" (not "Start free trial")
- "Download" / "Download weights" (open-source register)
- "Read the paper" / "View on GitHub" (research-credibility CTAs, not marketing)

The voice's signature is its plainness: no exclamation marks, no second-person hype, no intensifiers ("powerful", "revolutionary"). The models, weights, and benchmarks carry the persuasion.

## 12. Dark Mode & Theming

Stability AI is **dark-by-default**. The warm charcoal ground (`#1e1e1e`) is the brand — there is no light variant offered on the production marketing site, and a light flip would betray the darkroom-studio metaphor. The theme-toggle audit returned `score=0, signals=[none]`: no system-level light mode is wired.

The surface stays monochrome charcoal across the whole site. The only colour theming is the single lavender accent (`#a381ff`) and the deep-violet shape-block (`#330066`), both invariant. No `prefers-color-scheme: light` override is applied; users on a light OS still see the charcoal canvas. The brand is the theme.

## 13. Lineage & Influences

Stability AI's surface belongs to the **open-source AI research** register rather than the gradient-hero SaaS playbook. Its closest cousins are the dark, restrained landing pages of fellow model labs — Midjourney's near-black canvas with a single brand accent, Anthropic's quiet refusal of marketing-bold — crossed with the community warmth of Hugging Face, the platform where Stability's weights actually live. The charcoal `#1e1e1e` ground is warmer and more neutral than Vercel's pure black or Midjourney's navy-violet cosmos; it reads as a darkroom or a photographer's seamless, fitting for a company whose product is image generation.

The typographic identity rests on **Archivo**, a grotesque-grade sans by Omnibus-Type, run large but light — a deliberate inversion of the loud, heavy display type most AI products use to shout. The single-accent discipline (one lavender hue, spent almost entirely on the primary CTA) and the pill-everything shape language give the dense, technical content a soft, approachable edge. What Stability rejects: the multi-stop gradient hero (Stripe), the animated particle mesh (countless AI startups), the enterprise-blue corporate register, and the conversion-funnel density of growth-optimized SaaS. The page is confident enough to stay quiet.

**Named influences:**

- Hugging Face — `https://huggingface.co` — open-source AI community register; approachable, not enterprise
- Archivo / Omnibus-Type — `https://fonts.google.com/specimen/Archivo` — grotesque display sans run light-and-large
- Midjourney — `https://www.midjourney.com` — dark-canvas single-accent restraint on a near-black ground
- Anthropic — `https://www.anthropic.com` — research register over SaaS marketing; restraint as authority
- Vercel — `https://vercel.com` — near-monochrome dark canvas, disciplined system contrast

## 14. Do's and Don'ts

### Do

- Keep the canvas at `#1e1e1e` — warm charcoal, not `#000` and not navy
- Run Archivo headlines large (up to 72px) but light (400–500); scale, not weight, supplies presence
- Spend the lavender `#a381ff` almost entirely on the primary CTA — it is the page's only saturated element
- Shape every interactive element as a pill (`radius: 9999`); no sharp corners where users touch
- Use dark charcoal `#1e1e1e` text on the lavender pill (5.67:1, AA) — not white
- Keep the surface monochrome — white and grey on charcoal — between accent moments
- Reserve deep violet `#330066` for shape-block feature panels and the darker brand register
- Step cards up tonally (`#252525` on `#1e1e1e`) with a hard `#000000` hairline so they read as cut-outs
- Write in the open-source register: model names, parameter counts, "Download weights", "Read the paper"
- Use tabular figures for benchmark tables and parameter counts
- Keep section padding generous (64–96px); the broadsheet quiet is the rhythm
- Provide a visible skip-to-content link as the first focusable element

### Don't

- Use white text on the lavender pill — it computes to 2.94:1 and fails AA (the one live contrast bug)
- Reach for heavy/bold (700) display weights on the hero — large-and-light is the brand
- Add a second saturated accent — the discipline is one lavender hue, full stop
- Apply gradient meshes or glow halos to the hero — the still charcoal ground is the visual hero
- Put sharp corners on buttons or tags — everything touchable is a pill
- Flip to a light theme — Stability is dark-by-default; the darkroom metaphor is load-bearing
- Use pure black `#000` as the canvas — the warm `#1e1e1e` undertone is what separates it from Vercel
- Crowd the page with conversion-funnel density — the research-lab register is spacious
- Use exclamation marks or marketing intensifiers in microcopy
- Autoplay demo media behind the hero headline — keep the hero static
- Tint the working shadows with colour — neutral black; reserve lavender glow for a single featured CTA
- Convey state by the lavender accent alone — always pair colour with a label

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:            #1e1e1e   (warm near-black charcoal)
bg-alt:        #191919   (deeper inset band)
surface:       #252525   (card, one step up)
text:          #ffffff   (display white)
text-body:     #e5e7e6   (off-white body)
text-muted:    #b2b2b2
brand:         #a381ff   (signature lavender — rgb 163,129,255)
brand-deep:    #330066   (deep violet shape-block)
on-brand:      #1e1e1e   (dark text on lavender — AA)
border:        #000000   (hard hairline)
border-strong: #3a3a3a
ring:          #a381ff
```

### Example Component Prompts

1. **"Create a hero on a `#1e1e1e` charcoal background with an Archivo headline at 72px weight 400 and -0.02em tracking reading 'Generative AI for everyone.', an off-white `#e5e7e6` 20px lead paragraph below, and a primary CTA shaped as a full pill (radius 9999) filled `#a381ff` lavender with dark `#1e1e1e` label text reading 'Get Started'. No gradient, no glow, hero static."**

2. **"Design a model card at `#252525` with a 12px radius and a hard 1px `#000000` hairline border, a model-name h3 in Archivo 24/500 white, a parameter-count caption in `#b2b2b2` 12px with tabular figures reading '8.1B params', a `#2a2140` pill tag in `#bba6ff` reading 'Open Weights', and a `#191919` outlined-grey pill button reading 'Download'."**

3. **"Build a secondary outlined pill button: transparent background, 1px `#ffffff` border, white body text 15/500, radius 9999, padding 12px 28px, that inverts on hover to a `#ffffff` fill with `#1e1e1e` text over 240ms."**

4. **"Compose a deep-violet feature band: full-width panel filled `#330066`, 96px vertical padding, an Archivo 42px/400 white headline, a `#e5e7e6` 18px body column at 720px max-width, and a single white outlined pill CTA. This is the one coloured band on an otherwise charcoal page."**

5. **"Make a benchmark table on `#1e1e1e`: Archivo 20px/600 column headers in white, tabular-figure body rows in `#e5e7e6`, 1px `#2a2a2a` row dividers, and the winning row's value highlighted in lavender `#a381ff`."**

6. **"Design a dark navigation bar at 64px, transparent over `#1e1e1e`, wordmark hard-left in white, four nav links in body 15/500 that shift to `#a381ff` on hover, and a lavender pill 'Get Started' CTA hard-right with dark `#1e1e1e` label."**

### Iteration Guide

1. **Warm the black first**: if the page feels too stark, confirm the canvas is `#1e1e1e` (rgb 30,30,30), not `#000`. The warm undertone is load-bearing.
2. **Lighten the headline, don't shrink it**: if the hero reads as marketing-loud, drop the weight to 400 before reducing the size. Large-and-light is the brand.
3. **Spend lavender once**: if you have lavender in more than one place per viewport, you have one too many. Pull it back to the single primary CTA.
4. **Fix the CTA contrast**: if your lavender pill has white text, switch it to dark `#1e1e1e` — white-on-lavender fails AA (2.94:1). This is the single most common live mistake.
5. **Pill everything touchable**: any button or tag with a corner radius under 9999 looks off-brand. Soft capsules everywhere.
6. **Stay monochrome between accents**: if a section has colour that isn't the lavender CTA or a deep-violet shape-block, it has drifted. White and grey on charcoal otherwise.
7. **Cut the chrome before adding it**: no gradient, no glow, no animated mesh. If the hero needs energy, it needs better words, not more effects.
8. **Use the violet, not blue**: when reaching for an accent (links, info, focus), use the lavender `#a381ff` family — never an enterprise blue, which would break the register.
