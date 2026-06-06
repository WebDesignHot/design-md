---
name: Trigger.dev
tagline: 'Background jobs in the dark — Satoshi on near-black, one electric lime for action.'
updated_at: 2026-05-29T21:44:19.911Z
published_at: 2026-05-29T21:44:19.911Z
author: webdesignhot
source_url: https://trigger.dev
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools]
tags: [dark, sans, developer, workflow, neon]
preview_swatch: ['#121317', '#a8ff53', '#7655fd']
related: [railway, vercel, supabase]
description: 'Trigger.dev''s marketing site is a near-black canvas (`#121317`) running Satoshi at 60px/600 for display and Geist for body, with a single high-voltage lime brand (`#a8ff53`) for action and an electric-purple secondary (`#7655fd`) for documents and gradients. It is the open-source background-jobs / AI-workflow register taken to its terminal conclusion: dark substrate, neon accent, pill CTAs at 9999px alongside square 4px control chips — a developer brand that looks like a running log file rather than a launch poster.'

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent
  muted: text-muted
  border: border
  ring: border-brand

colors:
  # Primary
  bg: '#121317'                  # near-black canvas — the entire page substrate
  bg-deep: '#0c0e0f'             # footer / deepest section drop (observed --cc-footer-bg)
  bg-elev-1: '#191b1f'           # subtle lift above canvas
  bg-elev-2: '#212327'           # control chip / secondary panel (observed CTA bg)
  bg-elev-3: '#2a2d33'           # popover / hover surface
  surface: '#212327'             # secondary panel base
  surface-alt: '#191b1f'         # card panel
  surface-deep: '#0c0e0f'        # nested deep panel

  # Brand & Lime
  brand: '#a8ff53'              # electric lime — primary action, rgb(168,255,83)
  brand-hover: '#b8ff73'        # brightened lime on hover
  brand-pressed: '#93e63f'      # pressed lime
  brand-deep: '#7ec92f'         # deep lime for emphasized strokes
  brand-glow: '#a8ff5333'       # 20% lime wash for glow
  on-brand: '#121317'           # near-black text on lime (lime is too bright for white)

  # Accent (electric purple — documents, gradients, secondary)
  accent: '#7655fd'             # electric purple secondary
  accent-hover: '#8a6dff'       # purple hover
  accent-soft: '#7655fd26'      # 15% purple wash
  accent-deep: '#5e40d8'        # deeper purple

  # Interactive
  link: '#a8ff53'               # links default to lime
  link-hover: '#b8ff73'         # brightened
  selected: '#a8ff5326'         # 15% lime selection wash
  disabled: '#2a2d33'           # disabled bg
  disabled-text: '#5e6470'      # disabled text

  # Neutral Scale
  text: '#d7d9dd'               # primary copy — rgb(215,217,221)
  text-heading: '#e8e9ec'       # headlines — rgb(232,233,236)
  text-muted: '#878c99'         # secondary copy / H2 sub — rgb(135,140,153)
  text-soft: '#b5b8c0'          # tertiary / inactive tab — rgb(181,184,192)
  text-faint: '#5e6470'         # quaternary annotations

  # Surface & Borders
  border: '#2a2d33'             # solid hairline on near-black
  border-soft: '#ffffff14'      # 8% white translucent
  border-strong: '#ffffff26'    # 15% white translucent
  border-brand: '#a8ff5366'     # 40% lime on focus

  # Shadow
  shadow-ambient: 'rgba(0,0,0,0.4)'      # low resting
  shadow-standard: 'rgba(0,0,0,0.6)'     # card hover
  shadow-elevated: 'rgba(0,0,0,0.75)'    # popover
  shadow-glow: 'rgba(168,255,83,0.30)'   # lime focus glow only

  # Semantic
  success: '#a8ff53'            # success reuses brand lime (run succeeded)
  success-bg: '#1a2410'         # success surface
  warning: '#fbbf24'            # amber
  warning-bg: '#2a2110'         # warning surface
  danger: '#fb5151'             # red — failed run
  danger-bg: '#2a1414'          # danger surface
  info: '#7655fd'               # info uses electric purple
  info-bg: '#1a1530'            # info surface

typography:
  display:
    family: 'Satoshi-Variable, "Satoshi", system-ui, -apple-system, sans-serif'
    weights: [500, 600, 700]
    opentype-features: ['kern']
  body:
    family: 'Geist, "Geist-Regular", system-ui, -apple-system, "Segoe UI", sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['kern']
  mono:
    family: '"Geist Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500, 600]
    opentype-features: ['zero', 'tnum']
  scale:
    display-hero:    { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    display-lg:      { size: 60, weight: 600, lineHeight: 1.05, tracking: '-0.025em', family: display }
    h1:              { size: 60, weight: 600, lineHeight: 1.05, tracking: '-0.025em', family: display }
    h2:              { size: 40, weight: 600, lineHeight: 1.1,  tracking: '-0.018em', family: display }
    h3:              { size: 28, weight: 600, lineHeight: 1.2,  tracking: '-0.01em',  family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    eyebrow:         { size: 20, weight: 600, lineHeight: 1.3,  tracking: '0',        family: display }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    button:          { size: 15, weight: 600, lineHeight: 1.0,  tracking: '0',        family: body }
    button-sm:       { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    badge:           { size: 12, weight: 600, lineHeight: 1.3,  tracking: '0.02em',   family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    code-body:       { size: 14, weight: 400, lineHeight: 1.6,  tracking: '0',        family: mono, opentype: 'zero' }
    code-label:      { size: 12, weight: 500, lineHeight: 1.3,  tracking: '0.04em',   family: mono, opentype: 'zero, tnum' }

radius:
  micro: 2
  sm: 4           # control chips, buttons (observed CTA radius)
  md: 8           # cards, inputs
  lg: 12          # feature panels
  xl: 16          # hero shell
  featured: 20    # signature illustrative panels
  pill: 9999      # announcement pills, tab toggles (observed CTA radius)

spacing:
  base: 4
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]
  xxs: 2
  xs: 4
  sm: 8
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section-sm: 80
  section: 120
  section-lg: 160

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — gradient drift and lime glow pulses freeze, run-log auto-scroll stops, button scale removed.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0,0,0,0.4) 0 1px 2px'
  standard: 'rgba(0,0,0,0.6) 0 8px 24px -4px'
  elevated: 'rgba(0,0,0,0.75) 0 18px 36px -12px, rgba(0,0,0,0.5) 0 4px 8px'
  deep: 'rgba(0,0,0,0.85) 0 30px 60px -16px'
  ring: '0 0 0 3px rgba(168,255,83,0.4)'
  glow: '0 0 24px rgba(168,255,83,0.30)'

accessibility:
  contrast-text-on-bg: 13.2         # AAA — #d7d9dd on #121317
  contrast-heading-on-bg: 15.4      # AAA — #e8e9ec on #121317
  contrast-on-brand: 16.3           # AAA — #121317 on #a8ff53
  contrast-muted-on-bg: 5.1         # AA — #878c99 on #121317
  focus-ring: '3px solid rgba(168,255,83,0.4), 0 offset'
  reduced-motion-honored: true
  keyboard-nav: 'standard tab order; lime focus ring on all interactive controls'

components:
  button-primary:
    bg: '#a8ff53'
    text: '#121317'
    padding: '10px 16px'
    radius: 4
    font: 'button (15/600)'
    border: 'none'
    hover: 'bg → #b8ff73; subtle lime glow'
    active: 'bg → #93e63f'
    use: 'primary CTA — Start building, Get started'
  button-secondary:
    bg: '#212327'
    text: '#d7d9dd'
    padding: '10px 16px'
    radius: 4
    font: 'button (15/600)'
    border: '1px solid #2a2d33'
    hover: 'bg → #2a2d33; border → #3a3d44'
    use: 'secondary action — Read the docs, View on GitHub'
  button-ghost:
    bg: 'transparent'
    text: '#d7d9dd'
    padding: '10px 16px'
    radius: 4
    font: 'button (15/600)'
    border: 'none'
    hover: 'bg → rgba(255,255,255,0.04)'
    use: 'tertiary action, in-card link button'
  button-danger:
    bg: 'transparent'
    text: '#fb5151'
    padding: '10px 16px'
    radius: 4
    border: '1px solid rgba(251,81,81,0.4)'
    hover: 'bg → rgba(251,81,81,0.08)'
    use: 'destructive — Cancel run, Delete project'
  card:
    bg: '#191b1f'
    text: '#d7d9dd'
    padding: '24px'
    radius: 12
    border: '1px solid #2a2d33'
    shadow: 'rgba(0,0,0,0.4) 0 1px 2px'
    hover: 'border → #3a3d44; shadow → standard'
    use: 'feature card, integration card'
  card-tinted:
    bg: '#212327'
    text: '#d7d9dd'
    padding: '24px'
    radius: 12
    border: 'none'
    use: 'highlighted panel, recommended tier'
  input:
    bg: '#0c0e0f'
    text: '#d7d9dd'
    placeholder: '#5e6470'
    padding: '10px 12px'
    radius: 8
    border: '1px solid #2a2d33'
    focus: 'border → #a8ff53; ring 3px solid rgba(168,255,83,0.4)'
    use: 'text input, search'
  badge:
    bg: 'rgba(0,0,0,0.2)'
    text: '#d7d9dd'
    padding: '4px 12px'
    radius: 9999
    font: 'badge (12/600)'
    border: '1px solid #2a2d33'
    use: 'announcement pill — observed NEW pill at 9999px'
  badge-brand:
    bg: '#a8ff5326'
    text: '#a8ff53'
    padding: '4px 10px'
    radius: 9999
    font: 'badge (12/600)'
    use: 'status pill — run succeeded'
  nav-link:
    bg: 'transparent'
    text: '#878c99'
    padding: '8px 12px'
    font: 'body-small (14/500)'
    hover: 'text → #d7d9dd'
    active: 'text → #e8e9ec'
    use: 'top nav, sidebar'
  tab-toggle:
    bg: '#212327'
    text: '#d7d9dd'
    text-inactive: '#b5b8c0'
    padding: '8px 16px'
    radius: 4
    font: 'button-sm (14/600)'
    use: 'segmented filter — AI agents / Media processing (observed 4px chips)'

lineage:
  summary: |
    Trigger.dev is the open-source background-jobs and AI-workflow brand taken
    to its terminal dark conclusion. The canvas is `#121317` — a near-black
    that reads colder and more clinical than Railway's eggplant or GitHub's
    charcoal, the colour of a terminal at rest. Display type is Satoshi at
    60px / 600 weight with tight `-0.025em` tracking — a geometric grotesque
    that feels engineered rather than literary, the opposite pole from
    Railway's serif. Body is Geist (Vercel's open-source workhorse), placing
    Trigger.dev squarely in the modern Vercel-adjacent developer-tool
    lineage. What sets it apart is the accent set: a single high-voltage lime
    `#a8ff53` for every action — the colour of a `200 OK`, a passing test, a
    successful run — paired with an electric purple `#7655fd` reserved for
    documents, gradients, and secondary emphasis. The lime-on-black contrast
    is deliberately loud; it is the brand shouting "it worked" in the only
    palette a developer trusts. CTAs split their geometry: announcement and
    filter pills run full `9999px`, while action buttons and control chips
    hold a sharp `4px` — terminal-square rather than friendly-rounded.
  influences:
    - name: 'Vercel'
      role: 'Geist body font, near-black substrate, single confident accent against dark, generous vertical rhythm.'
      url: https://vercel.com
    - name: 'Geist (font + design system)'
      role: 'Geist Sans for body and Geist Mono for code anchor Trigger.dev in the modern Vercel-class developer aesthetic.'
      url: https://vercel.com/font
    - name: 'Satoshi (Indian Type Foundry)'
      role: 'Geometric grotesque display face at 600 weight — engineered, neutral, the structural opposite of a serif headline.'
      url: https://www.fontshare.com/fonts/satoshi
    - name: 'Linear'
      role: 'Dark developer canvas, restrained palette, square-cornered control chips and segmented toggles.'
      url: https://linear.app
    - name: 'Supabase'
      role: 'Open-source dev-tool register: a single neon-green brand colour signalling "it works" against a dark substrate.'
      url: https://supabase.com
    - name: 'Terminal / log-file aesthetics'
      role: 'Lime-on-black as the visual language of a passing run; the page reads like a streaming log rather than a marketing poster.'
      url: https://en.wikipedia.org/wiki/Computer_terminal

dark-mode: native    # Trigger.dev is committedly dark; the near-black canvas is the brand
---

## 1. Visual Theme & Atmosphere

Trigger.dev opens on a near-black canvas (`#121317`) carrying a single 60px Satoshi headline and one electric-lime button. The first impression is **terminal-at-rest**: a developer tool that looks like the dark editor and running log file its users live in all day, not a launch poster built to convert marketers. Where most SaaS marketing reaches for gradient meshes and pastel illustrations, Trigger.dev holds the entire page on one cold, clinical substrate and lets a single high-voltage accent do all the talking.

The atmosphere is **engineered, not editorial**. Satoshi is a geometric grotesque — even strokes, neutral terminals, no humanist warmth — and at 600 weight with `-0.025em` tracking it reads as something compiled rather than written. This is the structural opposite of Railway's IBM Plex Serif: both are dark dev-tool brands, but Railway tilts toward the literary and Trigger.dev toward the systemic. Body type is Geist, Vercel's open-source sans, which places Trigger.dev firmly in the modern Vercel-adjacent developer lineage and signals "we are of the platform era" without a word of copy.

The brand colour is the whole story. Lime `#a8ff53` (rgb 168, 255, 83) is the colour of a `200 OK`, a green checkmark, a passing CI run, a successful background job. Against the near-black canvas it is deliberately loud — a 16:1 contrast spike that makes every primary action feel like a confirmation. The secondary accent, electric purple `#7655fd`, is held back for documents, gradient washes, and emphasis flourishes, giving the palette a two-pole tension: the cold lime of success and the warm violet of motion. Nothing else competes; there is no third brand hue.

The geometry tells the same story twice. CTAs split into two camps: announcement banners and segmented filter toggles run a full `9999px` pill (observed on the "NEW" announcement chip), while action buttons and control chips hold a sharp `4px` — terminal-square, not friendly-rounded. The result is a page that feels precise and operational: pills for ambient status, squares for things you click to make something run.

The overall mood is **operational confidence**. Sections stack on the single `#121317` canvas with generous 96–160px gaps; cards lift tonally to `#191b1f` and `#212327` rather than through heavy shadow; the lime glows just enough on hover to feel alive. The page reads like a streaming run-log: dark, dense with signal, punctuated by green when something works.

**Key Characteristics**

- Near-black canvas (`#121317`, rgb 18/19/23) — colder and more clinical than Railway's eggplant
- Satoshi display at 600 weight, 60px, `-0.025em` tracking — engineered geometric grotesque, not editorial
- Geist body (Vercel's open-source sans) — anchors the modern dev-tool lineage
- Single high-voltage lime brand `#a8ff53` — the colour of a passing run / `200 OK`
- Electric purple secondary `#7655fd` — documents, gradients, emphasis only
- Split CTA geometry: `9999px` pills for status/filters, sharp `4px` for action buttons
- Near-black text on lime (`#121317` on `#a8ff53`) — lime is too bright to carry white
- Tonal elevation ladder: `#121317` → `#191b1f` → `#212327` → `#2a2d33`
- Terminal / log-file register — page reads like a streaming run rather than a poster
- Restrained two-pole palette: cold lime success + warm purple motion, no third hue

## 2. Color Palette & Roles

### Primary

- **Background** (`#121317`) [→ body `bg`, observed rgb(18,19,23)]: near-black canvas, the entire page sits on this single substrate
- **Background Deep** (`#0c0e0f`) [→ observed `--cc-footer-bg`]: footer and deepest section drop
- **Primary Text** (`#d7d9dd`) [→ body `color`, observed rgb(215,217,221)]: primary copy, slightly warm off-grey
- **Primary CTA Fill** (`#a8ff53`) [→ `--primary`]: electric lime brand

### Brand & Lime

- **Brand Lime** (`#a8ff53`) [→ `--primary`, rgb(168,255,83)]: primary CTA, the single signature colour
- **Brand Hover** (`#b8ff73`): brightened lime on hover
- **Brand Pressed** (`#93e63f`): pressed / active
- **Brand Deep** (`#7ec92f`): deeper lime for emphasized strokes and underlines
- **Brand Glow** (`#a8ff5333`): 20% lime wash for ambient glow
- **On-Brand Text** (`#121317`): near-black on lime — 16.3:1 AAA (lime is too bright for white)

### Accent (Electric Purple)

- **Accent Purple** (`#7655fd`) [→ NOTES, re-probed from SVG system]: electric-purple secondary — documents, gradients
- **Accent Hover** (`#8a6dff`): brightened purple
- **Accent Deep** (`#5e40d8`): deeper purple for emphasized strokes
- **Accent Soft** (`#7655fd26`): 15% purple wash for tinted surfaces

### Interactive

- **Link** (`#a8ff53`): inline links default to lime
- **Link Hover** (`#b8ff73`): brightened
- **Selected** (`#a8ff5326`): 15% lime selection wash
- **Disabled** (`#2a2d33`): disabled control bg
- **Disabled Text** (`#5e6470`): disabled label

### Neutral Scale

- **Text Heading** (`#e8e9ec`) [→ h1 `color`, observed rgb(232,233,236)]: near-white for headlines
- **Text Body** (`#d7d9dd`): primary copy
- **Text Soft** (`#b5b8c0`) [→ observed inactive tab rgb(181,184,192)]: tertiary / inactive tab labels
- **Text Muted** (`#878c99`) [→ h2 `color`, observed rgb(135,140,153)]: secondary copy, sub-headings, nav inactive
- **Text Faint** (`#5e6470`): quaternary annotations, placeholders

### Surface & Borders

- **Surface** (`#212327`) [→ observed CTA bg rgb(33,35,39)]: secondary panel / control chip base
- **Surface Alt** (`#191b1f`): card panel
- **Surface Deep** (`#0c0e0f`): nested deep panel, code-block / input bg
- **Border** (`#2a2d33`): solid hairline on near-black
- **Border Soft** (`#ffffff14`): 8% white translucent
- **Border Strong** (`#ffffff26`): 15% white translucent
- **Border Brand** (`#a8ff5366`): 40% lime on focus

### Shadow Colors

Shadows are pure-black at varying alpha — the lime brand never tints standard depth, so it can foreground without competing:

- **Ambient** (`rgba(0,0,0,0.4)`): low resting
- **Standard** (`rgba(0,0,0,0.6)`): card hover
- **Elevated** (`rgba(0,0,0,0.75)`): popover, dropdown
- **Deep** (`rgba(0,0,0,0.85)`): modal
- **Glow** (`rgba(168,255,83,0.30)`): lime focus glow only

### Semantic

- **Success** (`#a8ff53`): success reuses brand lime — a run that worked
- **Success Bg** (`#1a2410`): success surface
- **Warning** (`#fbbf24`): amber
- **Warning Bg** (`#2a2110`)
- **Danger** (`#fb5151`): red — a failed run
- **Danger Bg** (`#2a1414`)
- **Info** (`#7655fd`): info uses electric purple
- **Info Bg** (`#1a1530`)

## 3. Typography Rules

### Font Family

- **Display**: Satoshi (Satoshi-Variable) — geometric grotesque carrying every headline; engineered and neutral, the structural opposite of a serif display
- **Body**: Geist (Geist-Regular) — Vercel's open-source sans, the modern dev-tool body default
- **Mono**: Geist Mono — completes the Geist family for code blocks, run IDs, and technical labels
- **OpenType**: `kern` enabled on Satoshi and Geist; `zero` (slashed zero) and `tnum` (tabular numerals) on Geist Mono for log-aligned identifiers and timestamps

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | display | 80 | 700 | 1.0 | -0.03em | kern | oversized hero only |
| display-lg | display | 60 | 600 | 1.05 | -0.025em | kern | observed hero @ 60/600 |
| h1 | display | 60 | 600 | 1.05 | -0.025em | kern | page title — observed rgb(232,233,236) |
| h2 | display | 40 | 600 | 1.1 | -0.018em | kern | section heading |
| h2-sub | display | 20 | 600 | 1.3 | 0 | kern | muted sub-head — observed rgb(135,140,153) |
| h3 | display | 28 | 600 | 1.2 | -0.01em | kern | sub-feature |
| h4 | display | 20 | 600 | 1.25 | -0.005em | kern | card title |
| eyebrow | display | 20 | 600 | 1.3 | 0 | kern | section eyebrow in muted grey |
| body-lg | body | 18 | 400 | 1.55 | 0 | kern | hero supporting copy |
| body | body | 16 | 400 | 1.55 | 0 | kern | default — observed rgb(215,217,221) |
| body-sm | body | 14 | 400 | 1.5 | 0 | kern | dense feature blocks |
| button | body | 15 | 600 | 1.0 | 0 | kern | primary CTA copy |
| button-sm | body | 14 | 600 | 1.0 | 0 | kern | dense controls, tab toggles |
| label | body | 13 | 500 | 1.4 | 0 | kern | form labels |
| badge | body | 12 | 600 | 1.3 | 0.02em | kern | announcement / status pill |
| caption | body | 12 | 500 | 1.4 | 0.02em | kern | image caption, metadata |
| code-body | mono | 14 | 400 | 1.6 | 0 | zero | code blocks, run logs |
| code-label | mono | 12 | 500 | 1.3 | 0.04em | zero, tnum | run ID, timestamp, slug |

### Principles

- **Satoshi at 600, not 700**: the hero weight is 600 — substantial but not heavy; 700 is reserved for the oversized display-hero only
- **Tight display tracking**: `-0.025em` at 60px is Trigger.dev's signature compression — the headline reads as typeset/engineered, not loosely set
- **Two-family discipline + mono**: Satoshi (display) + Geist (body) + Geist Mono (code) — each family has exactly one job
- **Headings near-white, body warm-grey**: `#e8e9ec` headings sit above `#d7d9dd` body; never set body at full white, the warm-grey is part of the calm-dark mood
- **Muted sub-heads in `#878c99`**: secondary headings (the observed H2 grey) deliberately recede below the near-white H1
- **Mono with `zero` + `tnum`**: slashed zero and tabular numerals on run IDs, timestamps, and identifiers so log columns align
- **Lime for emphasis, never for body**: inline emphasis can take the lime link colour; body copy stays grey
- **No italic on Satoshi**: the geometric grotesque has no true italic register; emphasize with weight or colour instead

## 4. Component Stylings

### Buttons

**button-primary** — Lime
- Background: `#a8ff53`
- Text: `#121317` near-black at 15/600 Geist
- Padding: 10px 16px
- Radius: 4 (terminal-square, observed control radius)
- Border: none
- Hover: bg → `#b8ff73`, subtle lime glow `0 0 24px rgba(168,255,83,0.30)`
- Active: bg → `#93e63f`
- Focus: 3px solid rgba(168,255,83,0.4) ring
- Use: primary CTA — "Start building", "Get started for free"

**button-secondary** — Filled chip
- Background: `#212327` (observed CTA bg rgb(33,35,39))
- Text: `#d7d9dd` at 15/600
- Padding: 10px 16px
- Radius: 4
- Border: 1px solid `#2a2d33`
- Hover: bg → `#2a2d33`, border → `#3a3d44`
- Use: secondary action — "Read the docs", "View on GitHub"

**button-ghost** — Bare
- Background: transparent
- Text: `#d7d9dd` at 15/600
- Padding: 10px 16px
- Radius: 4
- Hover: bg → rgba(255,255,255,0.04)
- Use: tertiary action, in-card link button

**button-danger** — Destructive
- Background: transparent
- Text: `#fb5151` at 15/600
- Padding: 10px 16px
- Radius: 4
- Border: 1px solid rgba(251,81,81,0.4)
- Hover: bg → rgba(251,81,81,0.08)
- Use: "Cancel run", "Delete project"

### Cards

**card-default** — Feature, integration
- Background: `#191b1f`
- Text: `#d7d9dd`
- Padding: 24px
- Radius: 12
- Border: 1px solid `#2a2d33`
- Shadow: ambient `rgba(0,0,0,0.4) 0 1px 2px`
- Hover: border → `#3a3d44`, shadow → standard
- Use: feature card, integration card

**card-tinted** — Highlighted panel
- Background: `#212327`
- Padding: 24px
- Radius: 12
- Border: none
- Use: highlighted panel, recommended pricing tier

### Badges / Tags / Pills

**badge-announcement** — observed "NEW" pill
- Background: rgba(0,0,0,0.2)
- Text: `#d7d9dd` at 12/600
- Padding: 4px 12px
- Radius: 9999 (full pill — observed)
- Border: 1px solid `#2a2d33`
- Use: announcement banner, "NEW: Errors — find and fix"

**badge-brand** — Status pill
- Background: `#a8ff5326` (15% lime wash)
- Text: `#a8ff53` at 12/600
- Padding: 4px 10px
- Radius: 9999
- Use: status — "Run succeeded", live indicator

**badge-mono** — Run ID
- Background: transparent
- Text: `#878c99` at 12/500 Geist Mono with `zero`, `tnum`
- Border: 1px solid `#2a2d33`
- Padding: 2px 8px
- Radius: 4
- Use: run ID, task slug, timestamp

### Inputs / Forms

**input-text**
- Background: `#0c0e0f`
- Text: `#d7d9dd` at 16/400
- Placeholder: `#5e6470`
- Padding: 10px 12px
- Radius: 8
- Border: 1px solid `#2a2d33`
- Focus: border → `#a8ff53`, ring 3px solid rgba(168,255,83,0.4)
- Use: text input, search

### Navigation

**nav-link**
- Background: transparent
- Text: `#878c99` at 14/500
- Padding: 8px 12px
- Hover: text → `#d7d9dd`
- Active: text → `#e8e9ec`
- Use: top nav, sidebar

**tab-toggle** — observed segmented filter
- Background (active): `#212327`
- Text (active): `#d7d9dd` at 14/600
- Text (inactive): `#b5b8c0` (observed rgb(181,184,192))
- Padding: 8px 16px
- Radius: 4
- Use: segmented filter — "AI agents" / "Media processing"

### Decorative

**code-block** — Run log
- Background: `#0c0e0f`
- Text: `#d7d9dd` at code-body (14/400 Geist Mono) with `zero`
- Padding: 16px 20px
- Radius: 8
- Border: 1px solid `#2a2d33`
- Inline backticks render in `#a8ff53` lime on rgba(168,255,83,0.12) wash
- Success lines tinted lime `#a8ff53`, failure lines red `#fb5151`

**gradient-wash** — Hero / section accent
- Linear or radial gradient from `#7655fd` (electric purple) into transparent over the near-black canvas
- Used sparingly behind hero copy and section dividers
- Lime is never used as a gradient — it stays a flat, high-voltage point accent

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px
- **Scale**: 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160
- **Density observation**: Trigger.dev runs **spacious-but-operational** — sections separated by 96–160px, but feature grids and run-log panels pack densely, mirroring the signal-rich feel of a real dashboard

### Grid & Container

- **Page width**: 1280px max
- **Prose width**: 720px (documentation, marketing body)
- **Hero treatment**: full-bleed near-black canvas, content constrained to ~1024px, single lime CTA
- **Feature grid**: 3-col at desktop, 2-col at tablet, 1-col at mobile
- **Integration grid**: dense logo/card grid, 4-col at desktop

### Whitespace Philosophy

- Whitespace is structural breathing room between sections; within panels, density rises to mirror a real run log
- Section gaps at 96–160px keep the operational pacing calm
- Cards lift tonally (`#191b1f`, `#212327`) on the near-black canvas with 1px hairline border, ambient shadow

### Section Cadence

- Hero (near-black + lime CTA) → use-case toggle (AI agents / Media processing) → feature grid → integration grid → run-log demo → pricing → footer (`#0c0e0f`)
- The page rarely shifts canvas colour — the entire experience runs on `#121317`, dropping to `#0c0e0f` only at the footer
- Tonal layering (`#121317` → `#191b1f` → `#212327`) provides separation without changing the base

## 6. Shapes & Radius Scale

| Tier | Px | Use |
|------|----|----|
| Micro | 2 | inline tight chips |
| Standard | 4 | buttons, control chips, tab toggles, mono badges |
| Comfortable | 8 | inputs, code blocks |
| Relaxed | 12 | cards, feature panels |
| Featured | 16 | hero shell |
| Large | 20 | signature illustrative panels |
| Pill | 9999 | announcement banners, status pills |

Trigger.dev's geometry is deliberately **split**: action controls hold a sharp `4px` (terminal-square), while ambient status and filter elements run full `9999px` pills. The contrast is intentional — squares are for clicking to make something run, pills are for status and navigation. Inputs and code blocks sit between at `8px`; cards at `12px`.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|----|
| 0 | flat | hero copy on canvas |
| 1 | 1px solid `#2a2d33` border | inline chips, code blocks |
| 2 | 1px hairline + ambient shadow | feature cards |
| 3 | standard shadow + border lift | hover state |
| 4 | elevated shadow + 1px translucent white edge | popover, dropdown |
| 5 | deep shadow | modal |

**Shadow Philosophy**: Trigger.dev's depth is **tonal-first, shadowed-second**. On the near-black canvas, a panel lifting from `#121317` to `#191b1f` to `#212327` already reads as elevated with no blur — pure tonal lift, the cheapest and cleanest depth on dark. Where real elevation is needed (hovers, popovers, modals), shadows are pure-black at high alpha (0.4–0.85) so the lime brand never competes with depth. The lime glow (`rgba(168,255,83,0.30)`) is reserved exclusively for focus and primary-button hover — depth stays neutral, attention stays lime.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal enter, page transitions
- **Decelerate**: `cubic-bezier(0, 0, 0.2, 1)` — tooltips, dropdowns

### Durations

- **Fast** (150ms): hover, focus, button press
- **Standard** (240ms): card lift, tab switch
- **Slow** (320ms): modal enter, gradient drift

### Per-Component Recipes

- **Button hover**: lime brightens `#a8ff53` → `#b8ff73` with a soft glow appearing over 150ms standard ease
- **Card hover**: border lifts `#2a2d33` → `#3a3d44`, shadow ambient → standard, over 240ms
- **Tab toggle**: active chip background slides/fades to `#212327` over 240ms; inactive label `#b5b8c0` → `#d7d9dd`
- **Link hover**: lime underline grows 0 → 1px over 150ms
- **Run-log demo**: lines auto-scroll/stream in as a looping demo; success lines flash lime briefly
- **Gradient wash**: slow purple gradient drift over 320ms+ behind hero copy

### Page Transitions

- Default: opacity 0 → 1 + translateY 12px → 0 over 320ms emphasized
- Section reveals use staggered fade-in on scroll

### Reduced Motion

When `prefers-reduced-motion: reduce` is set:

- Gradient drift and lime glow pulses freeze
- Run-log auto-scroll/stream stops; log renders statically
- TranslateY page enters become opacity-only fades
- Button scale and card hover lift removed

## 9. Accessibility & A11y

### Contrast Pairs

- **`#d7d9dd` body on `#121317`**: 13.2:1 (AAA, all sizes)
- **`#e8e9ec` heading on `#121317`**: 15.4:1 (AAA, all sizes)
- **`#121317` near-black on `#a8ff53` lime**: 16.3:1 (AAA — this is why lime carries dark text, not white)
- **`#878c99` muted on `#121317`**: 5.1:1 (AA at body sizes)
- **`#b5b8c0` soft on `#121317`**: 9.2:1 (AAA)
- **`#a8ff53` lime link on `#121317`**: 14.9:1 (AAA)
- **`#7655fd` purple on `#121317`**: 3.6:1 (AA Large only — use for ≥18px / decorative; never small purple body text)

### Focus Indicators

- Default: 3px solid rgba(168,255,83,0.4) lime ring, no offset
- Inputs: focus border → `#a8ff53` + 3px ring
- Always visible — never `outline: none` without a replacement ring

### ARIA Patterns

- **Segmented toggle**: `role="tablist"` with `aria-selected` on the active filter chip
- **Dialog**: aria-labelledby + aria-describedby; trap focus; ESC to close
- **Run status**: status colour (lime/red) always paired with a text label and an icon, never colour alone
- **Code blocks**: `<pre><code>` semantic; run IDs in `<code>`

### Keyboard Navigation

- Tab order follows visual order; skip-link at page top
- Enter/Space activate buttons; Enter activates links
- Cmd/Ctrl+K opens command palette / docs search (when present)
- Escape closes modals, dropdowns, command palette
- Arrow keys move between segmented-toggle tabs

### Screen Reader Hints

- Run status (succeeded/failed) announced via text label, not lime/red colour alone
- Decorative purple gradient washes are `aria-hidden`
- Auto-streaming run-log demo carries `aria-live="off"` to avoid announcement spam; a static summary is exposed instead

### Reduced Motion

`prefers-reduced-motion: reduce` honored throughout — see §8.

## 10. Responsive Behavior

### Breakpoints

| Name | Min Width | Use |
|------|-----------|----|
| Mobile | — | default |
| Tablet | 640 | enlarged grids |
| Desktop | 1024 | full feature grid |
| Wide | 1280 | max page width |
| Ultra | 1536 | hero only |

### Touch Targets

- Minimum 44×44px for primary controls
- Pill badges expand hit-area to at least 32×24px
- Segmented toggle chips grow to full-width stacked on mobile

### Collapsing Strategy

- **Nav**: collapses to hamburger ≤ 768px; mobile menu on near-black sheet
- **Feature grid**: 3-col → 2-col @ 1024 → 1-col @ 640
- **Integration grid**: 4-col → 2-col @ 1024 → 2-col @ 640
- **Hero**: display-lg (60px) reduces to ~40px @ 640, tracking eases to `-0.02em`
- **Segmented toggle**: horizontal chips → stacked full-width buttons @ 640
- **Code/run-log blocks**: scroll horizontally on overflow; never reflow log lines

### Image Behavior

- Product screenshots and run-log demos are SVG/PNG; dark-on-dark, no light frames
- Integration logos lock at intrinsic size, monochrome on the near-black grid
- Lime accent stays flat at all sizes — never scaled into a gradient

## 11. Content & Voice

### Tone

Direct, technical, confident. Trigger.dev writes like an engineer explaining a system to another engineer — present tense, concrete nouns ("tasks", "runs", "deploys"), no marketing inflation. The headline register is operational: it describes what the product does, not how it will change your life. The lime brand is the visual equivalent of that voice — "it worked", said plainly.

### Microcopy Patterns

- **Button verbs**: "Start building", "Get started for free", "Read the docs", "View on GitHub", "Deploy" — short, imperative, developer-facing
- **Error message recipe**: concrete cause — "Run failed: the task threw `TimeoutError` after 60s." Surface the real error, not a euphemism
- **Success confirmations**: "[noun] [verb-past]" — "Task deployed", "Run succeeded", in lime
- **Empty states**: "No runs yet. Trigger your first task to see it stream here."
- **Status language**: "succeeded" / "failed" / "queued" / "in progress" — borrowed directly from the run lifecycle

### CTA Verb Conventions

- Top-level: "Start building", "Get started for free"
- Product: "Deploy", "Trigger a run", "Try it free"
- Documentation: "Read the docs", "View the quickstart"
- Open-source: "View on GitHub", "Star us"
- Sales: "Talk to us"

## 12. Dark Mode & Theming

Trigger.dev is **dark-only**. The near-black canvas (`#121317`) is the brand — it is the colour of the terminal, the editor, and the running log its users live in. Flipping to light would collapse the entire register: the lime brand reads as a high-voltage success signal *because* it sits on near-black, and on a light canvas it would lose all its voltage. There is no light-mode marketing variant.

The dashboard product runs the same dark palette, with the run-log views leaning even harder into the terminal aesthetic (Geist Mono throughout, lime/red status lines). Documentation maintains the dark canvas.

If a light variant were ever forced (e.g. an embedded docs widget on a light host), the mapping would be:
- `bg`: `#121317` → `#ffffff`
- `text`: `#d7d9dd` → `#1a1c20`
- `surface`: `#212327` → `#f4f5f6`
- `brand`: `#a8ff53` → darken to `#5fa312` so lime text/borders stay legible on white (the bright lime fails contrast on light)
- `accent`: `#7655fd` → stays (works on both substrates)

The recommendation is don't. The near-black canvas and high-voltage lime are a matched pair; separating them breaks the brand.

## 13. Lineage & Influences

Trigger.dev is the open-source background-jobs and AI-workflow brand taken to its terminal dark conclusion. The canvas is `#121317` — a near-black that reads colder and more clinical than Railway's eggplant or GitHub's charcoal, the colour of a terminal at rest. Display type is Satoshi at 60px / 600 weight with tight `-0.025em` tracking — a geometric grotesque that feels engineered rather than literary, the structural opposite of Railway's serif. Body is Geist (Vercel's open-source workhorse), placing Trigger.dev squarely in the modern Vercel-adjacent developer-tool lineage.

What sets it apart is the accent set. A single high-voltage lime `#a8ff53` carries every action — the colour of a `200 OK`, a passing test, a successful run — paired with an electric purple `#7655fd` reserved for documents, gradients, and secondary emphasis. The lime-on-black contrast is deliberately loud; it is the brand shouting "it worked" in the only palette a developer trusts. CTAs split their geometry: announcement and filter pills run full `9999px`, while action buttons and control chips hold a sharp `4px` — terminal-square rather than friendly-rounded. The result is a page that reads like a streaming run-log: dark, dense with signal, punctuated by green when something works.

- **Vercel** — https://vercel.com — Geist body font, near-black substrate, single confident accent against dark, generous vertical rhythm
- **Geist (font + design system)** — https://vercel.com/font — Geist Sans for body and Geist Mono for code anchor the modern Vercel-class dev aesthetic
- **Satoshi (Indian Type Foundry)** — https://www.fontshare.com/fonts/satoshi — geometric grotesque display at 600 weight, engineered and neutral
- **Linear** — https://linear.app — dark developer canvas, square-cornered control chips and segmented toggles
- **Supabase** — https://supabase.com — open-source dev-tool register: a single neon-green "it works" brand on a dark substrate
- **Terminal / log-file aesthetics** — https://en.wikipedia.org/wiki/Computer_terminal — lime-on-black as the visual language of a passing run

## 14. Do's and Don'ts

### Do

- **Do** keep the action palette to a single high-voltage lime (`#a8ff53`); secondary actions use the `#212327` surface chip, never a different hue
- **Do** put near-black text (`#121317`) on lime buttons — lime is too bright to carry white, and dark-on-lime hits 16:1
- **Do** hold the canvas at `#121317`; warming it toward eggplant reads as Railway, cooling it to pure `#000` reads as Vercel
- **Do** use Satoshi at 600 for display with `-0.025em` tracking — the engineered, compressed grotesque is the brand's voice
- **Do** set body in Geist at `#d7d9dd` (warm off-grey), with headings lifting to `#e8e9ec` — never full white
- **Do** split CTA geometry: `4px` square for action buttons/chips, `9999px` pill for announcements and status
- **Do** reserve electric purple `#7655fd` for documents, gradient washes, and emphasis — never as a second action colour
- **Do** use Geist Mono with `zero` + `tnum` for run IDs, timestamps, and identifiers so log columns align
- **Do** lift cards tonally (`#191b1f` / `#212327`) rather than with heavy drop shadows
- **Do** let the lime glow appear only on focus and primary-button hover — depth stays neutral
- **Do** keep semantic status as lime (succeeded) / red (failed), always paired with a text label

### Don't

- **Don't** put white text on the lime button — it fails contrast and breaks the "dark-on-lime" rule; use `#121317`
- **Don't** introduce a third brand hue; the palette is lime + purple + neutrals, full stop
- **Don't** use the lime as a gradient or large fill — it is a flat, high-voltage point accent, not a wash
- **Don't** flip to a light canvas; the lime loses all its voltage off near-black
- **Don't** swap Satoshi for a serif or a humanist sans — the engineered geometric grotesque is the structural identity
- **Don't** set Satoshi headlines loose — `-0.025em` compression is part of the typeset feel
- **Don't** make every control a pill; action buttons hold a sharp `4px`, pills are for status/filters only
- **Don't** set body copy in full white (`#ffffff`); the warm `#d7d9dd` grey is the calm-dark mood
- **Don't** use small purple body text — `#7655fd` on near-black is AA-Large only; keep purple ≥18px or decorative
- **Don't** layer heavy shadows on cards; depth on near-black is tonal-first
- **Don't** tint shadows lime; the glow is reserved for focus/hover, standard depth stays pure-black

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #121317
bg-deep: #0c0e0f
surface: #212327
surface-alt: #191b1f
text: #d7d9dd
text-heading: #e8e9ec
text-muted: #878c99
brand: #a8ff53
brand-hover: #b8ff73
on-brand: #121317
accent: #7655fd
border: #2a2d33
border-brand: rgba(168,255,83,0.4)
```

### Example Component Prompts

1. "Create a hero section: near-black `#121317` background, a 60px Satoshi headline at 600 weight in `#e8e9ec` with `-0.025em` tracking, body-large 18px Geist subhead in `#878c99`. Add a primary lime button (`#a8ff53` fill, near-black `#121317` text, 4px radius, 10px 16px padding, 15/600 button text) saying 'Start building', plus a secondary filled chip 'View on GitHub' (`#212327` bg, `#d7d9dd` text, 1px `#2a2d33` border, 4px radius). Optional electric-purple `#7655fd` gradient wash behind the copy."

2. "Build an announcement pill above the hero: full `9999px` radius, rgba(0,0,0,0.2) background, 1px `#2a2d33` border, 12px Geist at 600. Show a small lime `#a8ff53` 'NEW' tag then 'Errors — find and fix' in `#d7d9dd'. Hover: border brightens to `#3a3d44`."

3. "Design a 3-card feature grid: each card `#191b1f` bg, 24px padding, 12px radius, 1px `#2a2d33` border. Card title 20px Satoshi at 600 in `#e8e9ec`, body 14px Geist in `#878c99`, optional lime `#a8ff53` icon. Hover: border lifts to `#3a3d44`, ambient → standard shadow."

4. "Create a run-log code block: `#0c0e0f` background, 14px Geist Mono `#d7d9dd` with slashed-zero (`zero`) and tabular numerals (`tnum`), 16px 20px padding, 8px radius, 1px `#2a2d33` border. Success lines in lime `#a8ff53`, failed lines in red `#fb5151`, run IDs in mono. Inline backticks render lime on rgba(168,255,83,0.12) wash."

5. "Build a segmented toggle filter: two chips 'AI agents' and 'Media processing' at 4px radius. Active chip `#212327` bg with `#d7d9dd` 14/600 text; inactive label `#b5b8c0`. Use `role=tablist` with `aria-selected`. Transition active state over 240ms."

6. "Design a top navigation: near-black `#121317` background, 'Trigger.dev' wordmark in `#e8e9ec` Satoshi 600, nav links in 14px Geist 500 at `#878c99` (hover `#d7d9dd`), right-side secondary chip 'Read the docs' and a primary lime 'Get started for free' button at 4px radius with near-black text."

### Iteration Guide

1. **Start with the canvas** — `#121317` near-black; not eggplant (Railway), not pure `#000` (Vercel). The cold, clinical hex is the brand
2. **Lime carries dark text** — `#121317` on `#a8ff53`, never white; this single rule keeps the brand legible and on-voltage
3. **Satoshi at 600 for display** — engineered geometric grotesque with `-0.025em` tracking; a serif or humanist sans collapses the voice
4. **Geist for body** — the Vercel-class open-source sans places it in the modern dev-tool lineage; keep body at `#d7d9dd`, headings at `#e8e9ec`
5. **Split the geometry** — sharp `4px` for action buttons and chips, full `9999px` pills for announcements and status; mixing them up muddies the system
6. **Hold purple in reserve** — `#7655fd` is for documents, gradients, and emphasis only; never let it become a second action colour
7. **Depth is tonal-first** — lift panels through `#191b1f` / `#212327`, not heavy shadows; reserve the lime glow for focus and primary hover
8. **Think log file, not poster** — Geist Mono with aligned numerals, lime/red status lines, dense signal-rich panels; the page should feel operational

---

*Theme-toggle audit: score=0, signals=[none] — Trigger.dev is committedly dark; no light variant offered.*
