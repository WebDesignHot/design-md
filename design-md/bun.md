---
name: Bun
tagline: 'Cream canvas with chunky pink accents and the wide-eyed mascot — a JS runtime dressed as a 1970s bakery sign.'
updated_at: 2026-05-05T20:10:49+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://bun.sh
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools]
tags: [light, playful, retro, sans, warm, soft, bright]
preview_swatch: ['#fbf0df', '#f472b6', '#15151b']
related: [vite, vercel, tailwindcss]
description: 'Bun''s site is the warmest dev-tool page in the JavaScript world — a cream `#fbf0df` canvas, chunky near-black `#15151b` type, hot pink `#f472b6` accents, and the wide-eyed bun mascot doing all the emotional work. Where every other runtime leans dark-mode and gradient, Bun leans bakery-sign warmth and 1970s confectionery palette. CoFo Sans display at 700/800 weights, Berkeley Mono in code blocks, paper-print depth (no shadows), and the pink-cream-near-black triad scaled across every surface. The brand commits where every other JS-runtime page hedges; warmth is the differentiator.'

colors:
  # — Primary —
  bg: '#fbf0df'                  # cream canvas, the bakery counter
  bg-soft: '#fff7e8'             # alternate warm-white section
  bg-strong: '#f5e8d0'           # darker cream for active or pressed states
  surface: '#ffffff'             # pure-white card lift, contrast against cream
  surface-strong: '#fdfaf2'      # subtle off-white for nested cards
  text: '#15151b'                # near-black with cool tilt against warm canvas
  text-strong: '#000000'         # absolute black, used sparingly for emphasis
  text-muted: '#6b6b6b'          # captions, metadata, deprecated copy
  text-faint: '#9a9a9a'          # tertiary, helper labels
  # — Brand & Accents —
  brand: '#f472b6'               # signature Bun pink, mascot blush-derived
  brand-strong: '#db2777'        # pressed pink, hover-down
  brand-soft: '#fce7f3'          # pink wash for callouts and highlights
  brand-faint: '#fdf2f8'         # palest pink, rarely-used decorative tint
  accent: '#fbbf24'              # warm gold, secondary mascot accent
  accent-strong: '#f59e0b'       # darker gold for emphasis
  accent-soft: '#fef3c7'         # gold wash for badges
  # — Interactive —
  link: '#db2777'                # link color picks up brand-strong for warm consistency
  link-hover: '#9d174d'          # darker plum on hover
  selected: '#fce7f3'            # selected-row tint
  disabled-bg: '#f5e8d0'         # disabled control surface
  disabled-text: '#9a9a9a'       # disabled label
  # — Neutrals & Borders —
  border: '#15151b1a'            # 10% near-black hairline
  border-strong: '#15151b33'     # 20% near-black for emphasized dividers
  border-subtle: '#15151b0d'     # 5% near-black, near-invisible
  divider: '#15151b14'           # 8% near-black for table rules
  # — Inverse / Dark Surfaces —
  inverse-bg: '#15151b'          # dark code-block background
  inverse-text: '#fbf0df'        # cream text on dark code
  inverse-text-muted: '#a1a1aa'  # muted code comment
  # — Shadow tints (paper-print: tonal, not shadowed) —
  shadow-warm: 'rgba(21, 21, 27, 0.08)' # warm-tinted ambient shadow
  shadow-pink: 'rgba(244, 114, 182, 0.18)' # pink-tinted halo for brand surfaces
  # — Semantic —
  success-bg: '#dcfce7'
  success-text: '#166534'
  success-border: '#86efac'
  warning-bg: '#fef3c7'
  warning-text: '#854d0e'
  warning-border: '#fbbf24'
  danger-bg: '#fee2e2'
  danger-text: '#991b1b'
  danger-border: '#fca5a5'
  info-bg: '#fce7f3'
  info-text: '#9d174d'
  info-border: '#f9a8d4'
  on-brand: '#15151b'            # near-black ON the pink — Bun's signature inversion
  on-accent: '#15151b'           # near-black ON the gold

typography:
  display:
    family: '"CoFo Sans", "Inter Display", Inter, -apple-system, "system-ui", sans-serif'
    weights: [600, 700, 800]
    opentype-features: ['ss01', 'cv01']
  body:
    family: 'Inter, -apple-system, "system-ui", "Segoe UI", sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['cv01', 'cv11']
  mono:
    family: '"Berkeley Mono", "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace'
    weights: [400, 500, 700]
    opentype-features: ['zero', 'ss01']
  scale:
    display-hero:    { size: 96, weight: 800, lineHeight: 0.95, tracking: '-0.04em', family: display, opentype: 'ss01' }
    display-large:   { size: 80, weight: 800, lineHeight: 1.0,  tracking: '-0.03em', family: display }
    display:         { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.025em', family: display }
    h1:              { size: 52, weight: 700, lineHeight: 1.1,  tracking: '-0.02em',  family: display }
    h2:              { size: 40, weight: 700, lineHeight: 1.15, tracking: '-0.018em', family: display }
    h3:              { size: 30, weight: 700, lineHeight: 1.2,  tracking: '-0.012em', family: display }
    h4:              { size: 24, weight: 600, lineHeight: 1.3,  tracking: '-0.008em', family: display }
    h5:              { size: 20, weight: 600, lineHeight: 1.35, tracking: '-0.005em', family: display }
    eyebrow:         { size: 13, weight: 600, lineHeight: 1.4,  tracking: '0.08em',   family: body, transform: 'uppercase' }
    body-lg:         { size: 19, weight: 400, lineHeight: 1.6,  tracking: '-0.005em', family: body }
    body:            { size: 17, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 15, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    caption:         { size: 13, weight: 500, lineHeight: 1.5,  tracking: '0.01em',   family: body }
    micro:           { size: 11, weight: 600, lineHeight: 1.4,  tracking: '0.04em',   family: body, transform: 'uppercase' }
    code:            { size: 14, weight: 400, lineHeight: 1.6,  tracking: '0',        family: mono, opentype: 'zero' }
    code-sm:         { size: 12, weight: 400, lineHeight: 1.55, tracking: '0',        family: mono, opentype: 'zero' }
    code-tabular:    { size: 14, weight: 500, lineHeight: 1.5,  tracking: '0',        family: mono, opentype: 'zero, tnum' }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  xl: 12
  xxl: 16
  card: 12
  pill: 9999

spacing:
  base: 4
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1200
  prose-width: 680
  header-height: 64
  gutter: 24
  section-padding: 96
  grid: 12

components:
  button-primary:
    bg: '#15151b'
    color: '#fbf0df'
    radius: 8
    weight: 700
    padding: '12px 24px'
    font: display
    hover: 'translateY(-1px); bg #000000'
  button-pink:
    bg: '#f472b6'
    color: '#15151b'
    radius: 8
    weight: 700
    padding: '12px 24px'
    font: display
    hover: 'bg #db2777; color #fbf0df'
  button-ghost:
    bg: 'transparent'
    color: '#15151b'
    border: '1px solid #15151b33'
    radius: 8
    weight: 600
    hover: 'bg #15151b0d'
  button-link:
    bg: 'transparent'
    color: '#db2777'
    underline: 'on hover'
    weight: 600
  card:
    bg: '#ffffff'
    border: '1px solid #15151b1a'
    radius: 12
    padding: '24px'
    shadow: 'none'
  card-callout:
    bg: '#fce7f3'
    border: '1px solid #f9a8d4'
    radius: 12
    padding: '20px'
  badge:
    bg: '#fce7f3'
    color: '#9d174d'
    radius: 9999
    padding: '4px 10px'
    weight: 600
    font: 'mono'
  input:
    bg: '#ffffff'
    color: '#15151b'
    border: '1px solid #15151b33'
    radius: 8
    padding: '10px 14px'
    focus-ring: '0 0 0 3px #f472b633'
  nav:
    bg: '#fbf0dfcc'
    backdrop-blur: 8
    border-bottom: '1px solid #15151b14'
    height: 64
  code-block:
    bg: '#15151b'
    color: '#fbf0df'
    radius: 12
    padding: '20px 24px'
    font: mono

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  duration-page: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transforms collapse to opacity-only fades; mascot bounces disabled.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: 'rgba(21, 21, 27, 0.04) 0 1px 2px'
  standard: 'rgba(21, 21, 27, 0.08) 0 4px 12px'
  elevated: 'rgba(21, 21, 27, 0.10) 0 12px 24px -8px'
  brand-halo: 'rgba(244, 114, 182, 0.25) 0 0 24px'
  ring: '0 0 0 3px rgba(244, 114, 182, 0.4)'

accessibility:
  contrast-text-on-bg: 12.6                # AAA at body sizes (#15151b on #fbf0df)
  contrast-text-on-brand: 4.8              # AA at body sizes (#15151b on #f472b6)
  contrast-muted-on-bg: 4.7                # AA (#6b6b6b on #fbf0df)
  contrast-link-on-bg: 5.4                 # AA (#db2777 on #fbf0df)
  focus-ring: '3px solid rgba(244, 114, 182, 0.4)'
  focus-offset: '2px'
  reduced-motion-honored: true
  min-touch-target: 44

dark-mode: null   # Light-only — no dark variant offered

lineage:
  summary: |
    Bun's homepage is the most chromatically warm dev-tool site in the
    JavaScript ecosystem. The canvas is `#fbf0df` — a soft cream that
    reads as freshly-baked-bun, deliberately referencing the mascot —
    and the type is a chunky near-black `#15151b` rather than pure
    black, with a slight cool tilt to register against the warm canvas.
    Pink (`#f472b6`) and gold (`#fbbf24`) provide secondary accents,
    both pulled from the bun mascot's blush and crust. Display type is
    CoFo Sans (or comparable chunky grotesk) at 700/800 — heavy, broad-
    cut, almost woodtype-poster in feel. Code blocks invert to pure
    dark `#15151b` on cream — the only place dark appears, treated as
    a contrasting artifact, like an oven window cut into the bakery
    counter. Where Vite and Vercel lean cool-modern, Bun leans warm-
    retro, and that warmth is its single biggest differentiator in a
    sea of dark-canvas runtime sites.
  influences:
    - name: Stripe Press
      role: Warm-paper cream canvas, chunky display, editorial-book register.
      url: https://press.stripe.com
    - name: 1970s confectionery branding
      role: Cream + pink + brown palette signaling warmth and craft.
    - name: Berkeley Graphics (Berkeley Mono)
      role: Warm, slightly-rounded mono typeface with retro character used in code surfaces.
      url: https://berkeleygraphics.com
    - name: Penguin paperback covers
      role: Single-saturated-accent-on-warm-paper print discipline.
      url: https://www.penguin.co.uk
    - name: CoFo Foundry
      role: Chunky grotesk display family with woodtype warmth.
      url: https://contrastfoundry.com
---

## 1. Visual Theme & Atmosphere

Bun's homepage is the warmest dev-tool surface in the JavaScript
ecosystem. Open the site and you do not see a runtime; you see a
bakery counter. The canvas is `#fbf0df` — a cream that reads as
freshly-baked, almost edible — and the type is a chunky `#15151b`
near-black that sits on it like cocoa powder on parchment. There is
no gradient hero. There is no animated terminal. There is a wide-eyed
mascot, a saturated hot pink, and a confidence about being warm in a
category that has decided coolness is the default.

The atmosphere is **bakery-sign retro** with engineering precision.
Where Vite leans cool-modern and Node leans gray-utility, Bun leans
1970s confectionery: the pink (`#f472b6`) is mascot-blush, the gold
(`#fbbf24`) is crust, the cream is dough proofing on the counter.
Display type is woodtype-poster heavy — CoFo Sans at 800 weight,
broad-cut, with extended counters and the kind of stroke contrast
that only a chunky grotesk delivers. The result reads as
**confectionery printshop**: a kitchen that also ships a JavaScript
runtime faster than Node.

Depth comes from paper-stacking, not shadows. The cream canvas, the
pure-white card lift, the 10% black hairline border, the occasional
darker-cream press state — every surface is a tonal-warm step in the
same warm family. The single dramatic depth move is the inverse-dark
code block: a `#15151b` rectangle with cream text and Berkeley Mono,
treated like an oven window cut into the bakery counter. Code is
artifact, not chrome.

The mascot does the emotional work. On any other framework page, that
work is done by a gradient hero or a particle-field hero or a synth-
glow product shot. On Bun, it is done by a small pink-cheeked bun
character with a wide-eyed expression that splits the difference
between Sanrio and a 1980s cereal box. The mascot is primary brand
surface — not Easter egg, not flourish — and removing it would
dismantle 40% of Bun's identity in a single deletion.

**Key Characteristics**

- Cream canvas (`#fbf0df`) — no other dev-tool page commits this hard to warm
- Chunky display type (CoFo Sans 700/800) — woodtype-poster register
- Mascot as primary brand surface — not decoration, not Easter egg
- Hot pink + warm gold accent pair — confectionery, not Silicon Valley
- Inverse dark code block — the only dark surface, treated as artifact
- No drop shadows — depth is tonal-warm and bordered, never shadowed
- Berkeley Mono in code — slightly-rounded, deliberately not JetBrains
- Near-black type with cool undertone — registers against warm canvas
- One-color confidence — pink is sacred, never paired with cool hues
- Print/poster discipline — the page reads as bakery sign, not runtime

## 2. Color Palette & Roles

### Primary

- **bg** (`#fbf0df`): cream canvas, the bakery counter, every page-level background
- **text** (`#15151b`): near-black body and display, slight cool undertone for contrast against warm canvas
- **brand** (`#f472b6`): hot pink, mascot blush-derived, used on secondary CTAs and accent surfaces
- **on-brand** (`#15151b`): near-black ON the pink — Bun's signature inversion (most peers go white-on-brand)

### Brand & Dark

- **inverse-bg** (`#15151b`): dark code-block ground, the oven-window
- **inverse-text** (`#fbf0df`): cream text on dark code, closes the warm loop
- **brand-strong** (`#db2777`): pressed pink, hover-down state
- **brand-soft** (`#fce7f3`): pale pink wash for callouts, highlight surfaces

### Accent

- **accent** (`#fbbf24`): warm gold, secondary mascot crust accent
- **accent-strong** (`#f59e0b`): darker gold for emphasis or pressed states
- **accent-soft** (`#fef3c7`): gold wash for badges, status indicators
- **shadow-pink** (`rgba(244, 114, 182, 0.18)`): pink-tinted halo, used sparingly behind the mascot

### Interactive

- **link** (`#db2777`): link color picks up brand-strong for warm-family consistency — not blue
- **link-hover** (`#9d174d`): darker plum on hover, deep raisin
- **selected** (`#fce7f3`): selected-row tint in lists or tables
- **disabled-bg** (`#f5e8d0`): disabled control surface
- **disabled-text** (`#9a9a9a`): disabled label, neutral gray

### Neutral Scale

- **text-strong** (`#000000`): absolute black, used sparingly for emphasis
- **text** (`#15151b`): near-black, body and display default
- **text-muted** (`#6b6b6b`): captions, metadata, secondary copy
- **text-faint** (`#9a9a9a`): tertiary helper labels, deemphasized
- **bg-strong** (`#f5e8d0`): darker cream for active or pressed states

### Surface & Borders

- **bg-soft** (`#fff7e8`): alternate warm-white section background
- **surface** (`#ffffff`): pure-white card lift, contrast against cream
- **surface-strong** (`#fdfaf2`): subtle off-white for nested cards
- **border** (`#15151b1a`): 10% near-black hairline, default divider
- **border-strong** (`#15151b33`): 20% near-black for emphasized borders
- **border-subtle** (`#15151b0d`): 5% near-black, near-invisible
- **divider** (`#15151b14`): 8% near-black for table rules

### Shadow Colors

Shadows are warm-tinted, not neutral, and used sparingly. Bun is a
**paper-print depth** brand: depth comes from tonal-warm stacking and
hairline borders, not drop shadows. When a shadow does appear (the
mascot floating, a hovered card), it is `rgba(21, 21, 27, 0.08)` at
4–12px blur — soft, warm-tinted, never crisp.

### Semantic

- **success-bg** (`#dcfce7`) / **success-text** (`#166534`) / **success-border** (`#86efac`)
- **warning-bg** (`#fef3c7`) / **warning-text** (`#854d0e`) / **warning-border** (`#fbbf24`)
- **danger-bg** (`#fee2e2`) / **danger-text** (`#991b1b`) / **danger-border** (`#fca5a5`)
- **info-bg** (`#fce7f3`) / **info-text** (`#9d174d`) / **info-border** (`#f9a8d4`) — info uses the brand pink, not the typical cool blue, to keep the warm-only chromatic discipline

## 3. Typography Rules

### Font Family

- **Primary display**: `"CoFo Sans"`, fallback to `"Inter Display"`, then `Inter`, then system stack
- **Body**: `Inter`, fallback to `-apple-system`, `"system-ui"`, `"Segoe UI"`, `sans-serif`
- **Mono**: `"Berkeley Mono"`, fallback to `"JetBrains Mono"`, then `ui-monospace`, `Menlo`, `Consolas`
- **OpenType features used**: `ss01` (CoFo alternates for chunkier `a` and `g`), `cv01` (Inter character variants for the rounded `1`), `zero` (slashed zero in Berkeley Mono), `tnum` (tabular figures in code-tabular role only)

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| display-hero | CoFo Sans | 96 | 800 | 0.95 | -0.04em | ss01 | Hero only; one per page |
| display-large | CoFo Sans | 80 | 800 | 1.0 | -0.03em | — | Marketing H1 |
| display | CoFo Sans | 64 | 700 | 1.05 | -0.025em | — | Section openers |
| h1 | CoFo Sans | 52 | 700 | 1.1 | -0.02em | — | Page titles |
| h2 | CoFo Sans | 40 | 700 | 1.15 | -0.018em | — | Sub-section headers |
| h3 | CoFo Sans | 30 | 700 | 1.2 | -0.012em | — | Feature titles |
| h4 | CoFo Sans | 24 | 600 | 1.3 | -0.008em | — | Card titles |
| h5 | CoFo Sans | 20 | 600 | 1.35 | -0.005em | — | Sidebar headers |
| eyebrow | Inter | 13 | 600 | 1.4 | 0.08em | uppercase | Section labels above H2 |
| body-lg | Inter | 19 | 400 | 1.6 | -0.005em | — | Hero subhead, lead paragraphs |
| body | Inter | 17 | 400 | 1.6 | 0 | — | Default body |
| body-sm | Inter | 15 | 400 | 1.55 | 0 | — | Secondary body, sidebars |
| caption | Inter | 13 | 500 | 1.5 | 0.01em | — | Metadata, image captions |
| micro | Inter | 11 | 600 | 1.4 | 0.04em | uppercase | Tags, labels, smallest UI |
| code | Berkeley Mono | 14 | 400 | 1.6 | 0 | zero | Code blocks default |
| code-sm | Berkeley Mono | 12 | 400 | 1.55 | 0 | zero | Inline code, footnotes |
| code-tabular | Berkeley Mono | 14 | 500 | 1.5 | 0 | zero, tnum | Benchmark tables, numeric columns |

### Principles

1. **Display weight is voice.** CoFo Sans at 800 is woodtype-poster heavy; this is the single most important type decision Bun makes. Anything lighter than 700 in display reads as generic Inter and erases the bakery-sign warmth.
2. **Negative tracking on display, neutral on body.** Display rolls in tight (`-0.025em` to `-0.04em`); body sits at `0` for readability. Never positive-track display copy.
3. **Berkeley Mono over JetBrains.** The slightly-rounded character and warmer proportions of Berkeley Mono are deliberately chosen to keep the warm-retro register consistent into code blocks. JetBrains Mono reads as cool-modern, which would break the brand.
4. **Slashed zero everywhere in mono.** OpenType `zero` is enabled on all mono surfaces; in benchmarks especially, the slashed zero is a brand cue.
5. **Tabular figures only in benchmark tables.** `tnum` is opt-in for the `code-tabular` role; default `code` keeps proportional figures so prose-style code reads naturally.
6. **One display family, one body family, one mono.** No secondary display face, no italic display, no decorative cuts. The discipline mirrors the single-color brand confidence.
7. **Eyebrow + display + body cadence.** Sections open with an eyebrow (uppercase, 13px, 600 weight, +0.08em tracking), then a display heading, then body. This three-step rhythm carries the entire long-form layout.

## 4. Component Stylings

### Buttons

**Primary (dark solid)**: `#15151b` background, `#fbf0df` cream text, 8px radius, weight 700 in CoFo Sans, padding `12px 24px`. Hover lifts 1px and brightens to `#000000`. This is the dominant CTA — used for "Install Bun", "Get started", "Read the docs."

**Pink (signature)**: `#f472b6` background, `#15151b` near-black text (the inverse — never white-on-pink), 8px radius, weight 700. Hover deepens to `#db2777` with cream text. Used for secondary moments, mostly in marketing where the brand wants to lean warm.

**Ghost**: transparent background, `#15151b` text, 1px solid `#15151b33` border, 8px radius, weight 600. Hover fills to `#15151b0d` (5% black wash). Used for tertiary actions in dense UI.

**Link button**: transparent background, `#db2777` text, weight 600, underline on hover. Used inline in copy or as nav links.

### Cards

**Default**: `#ffffff` pure-white background on the cream canvas, 1px solid `#15151b1a` (10% black) hairline border, 12px radius, no shadow. Padding `24px`. The cream-to-white tonal shift does the depth work.

**Callout**: `#fce7f3` pink-soft background, 1px solid `#f9a8d4` border, 12px radius, padding `20px`. Used for tips, callouts, "did you know" blocks.

### Badges & Tags

`#fce7f3` pink-soft background, `#9d174d` text, 9999 (pill) radius, padding `4px 10px`, weight 600, mono font. Used for version numbers, status indicators, technology tags.

### Inputs

`#ffffff` background, `#15151b` text, 1px solid `#15151b33` border, 8px radius, padding `10px 14px`. Focus ring: `0 0 0 3px rgba(244, 114, 182, 0.25)` — the pink wash glow. Placeholder: `#9a9a9a`.

### Navigation

`#fbf0dfcc` (80% cream) background with `8px` backdrop-blur, 1px solid `#15151b14` bottom border, 64px height. Logo + mascot on the left, primary nav center, install CTA right. Sticks to top with the cream wash maintaining warmth.

### Code blocks

`#15151b` near-black background, `#fbf0df` cream text, 12px radius, padding `20px 24px`, Berkeley Mono at 14px. The cream-on-near-black inversion is the visual signature; syntax highlighting is restrained — pink for keywords, gold for strings, cream for identifiers.

### Mascot illustration

Treated as primary brand surface, not decoration. Mascot appears at multiple scales — as page hero, as section divider character, as feature-block companion. The mascot has a slight `motion-bounce` on hover (subtle, ~8px translateY with `cubic-bezier(0.68, -0.55, 0.265, 1.55)`).

## 5. Layout Principles

### Spacing System

Base unit is **4px**. Scale: `2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160`. Density observation: Bun is a **mid-density** brand — not as airy as Stripe (which uses 128px section padding) and not as compact as Linear (48px). 96px section padding keeps the marketing breathing without becoming a billboard.

### Grid & Container

Container caps at **1200px** with **24px gutters**. Prose width: 680px. The grid is 12-column but frequently broken by mascot illustrations that bleed across columns — a loose, almost-poster layout discipline rather than a strict grid. Hero blocks regularly run full-bleed on the cream canvas with the mascot anchoring left or center.

### Whitespace Philosophy

Generous vertical breathing (96px section padding) paired with comfortable horizontal density inside cards (24px padding). The cream canvas absorbs whitespace better than pure white — it reads as fresh paper rather than emptiness, so Bun can use a lot of negative space without the page feeling thin.

### Section Cadence

The cream canvas runs continuously; alternation happens via card surfaces (`#ffffff`) and bg-soft (`#fff7e8`) bands. Brand-band moments (full pink or full near-black sections) are rare — used once or twice per page maximum to avoid breaking the warm-paper continuity.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | --- | --- |
| Micro | 2px | Border accent on dividers |
| Standard | 4px | Inline tags, micro-pills |
| Comfortable | 6px | Inputs, secondary buttons |
| Relaxed | 8px | Primary buttons, default UI |
| Large | 12px | Cards, code blocks, hero containers |
| Featured | 16px | Hero illustration frames, oversized callouts |
| Pill | 9999px | Badges, status pills, navigation chips |

The mascot's roundness — circular face, soft edges — echoes through generous corner radii on illustration frames and the way navigation chips sit at full 9999 rounding. Compound radii are rare; when used, they appear on bottom-attached card footers (`0 0 12px 12px`).

## 7. Depth & Elevation

| Level | Treatment | Use |
| --- | --- | --- |
| 0 — Flat | No shadow, no border | Page canvas, full-bleed sections |
| 1 — Hairline | 1px solid `#15151b1a`, no shadow | Default cards on cream |
| 2 — Lifted | 1px border + `rgba(21, 21, 27, 0.04) 0 1px 2px` | Subtle paper-lift on cards |
| 3 — Hovered | 1px border + `rgba(21, 21, 27, 0.08) 0 4px 12px` | Card hover, mascot float |
| 4 — Elevated | `rgba(21, 21, 27, 0.10) 0 12px 24px -8px` | Modals, tooltip popovers |
| 5 — Brand-haloed | `rgba(244, 114, 182, 0.25) 0 0 24px` | Pink halo behind featured CTA, used once |

**Shadow Philosophy** — Bun is a **paper-print depth** brand. Depth comes from tonal-warm stacking (cream → off-white → pure-white) and hairline borders, not drop shadows. When a shadow does appear, it is warm-tinted (the shadow color is a near-black with very low alpha, never neutral gray) and soft (4–12px blur, never crisp). The page philosophy is closer to a Stripe Press book interior than a Material Design surface — depth is felt through tonal warmth, not light direction.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for opacity/color transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — used on entrance animations, feature reveals
- **Bounce**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` — mascot-only, never on UI

### Durations

- **Fast (120ms)**: hover color shifts, link underline grow, badge state changes
- **Standard (200ms)**: button hover lift, card border emphasis, focus ring fade-in
- **Slow (320ms)**: section reveals, modal entrance, mascot bounces
- **Page (400ms)**: route transitions, hero loads

### Per-component Micro-states

- **Button hover**: 1px translateY lift + 200ms ease-standard color shift; no shadow grow because Bun does not stack shadows
- **Card hover**: border opacity bumps from `1a` to `33` over 200ms; if the card has a CTA inside, the CTA's underline grows in from left
- **Link hover**: underline grows from 0 to 100% width in 120ms ease-standard, color deepens to `#9d174d`
- **Mascot hover**: -8px translateY bounce with `ease-bounce`, 320ms — the page's only flourish animation
- **Code-block copy**: copy-button fades from 0 to 1 opacity on block hover, 120ms

### Page Transitions

Page navigation uses a 400ms cross-fade with a 16px translateY enter. The cream canvas remains constant; only inline content shifts. Mascot persists across page loads — it does not refresh.

### Reduced Motion

`prefers-reduced-motion: reduce` is honored. All translateY transforms collapse to opacity-only fades. Mascot bounces are disabled entirely. Page transitions become instantaneous (no 400ms ease). Focus rings remain visible — accessibility is never reduced as part of motion reduction.

## 9. Accessibility & A11y

### Contrast Pairs

- **Body text on canvas** (`#15151b` on `#fbf0df`): **12.6:1** — AAA at all sizes
- **Body text on white card** (`#15151b` on `#ffffff`): **17.8:1** — AAA
- **Muted text on canvas** (`#6b6b6b` on `#fbf0df`): **4.7:1** — AA at body sizes
- **Brand text on brand-soft** (`#9d174d` on `#fce7f3`): **6.2:1** — AA
- **Cream text on near-black** (`#fbf0df` on `#15151b`): **12.4:1** — AAA (code blocks)
- **Near-black on pink** (`#15151b` on `#f472b6`): **4.8:1** — AA at body sizes (the on-brand pairing)
- **Link on canvas** (`#db2777` on `#fbf0df`): **5.4:1** — AA

### Focus Indicators

3px solid `rgba(244, 114, 182, 0.4)` ring with 2px offset. The pink halo is consistent across buttons, links, inputs, and interactive cards. Never use the default browser outline; always replace with the brand pink ring.

### ARIA Patterns

- **Combobox**: `role="combobox"` with `aria-expanded`, `aria-controls`, `aria-activedescendant` on the input
- **Dialog**: `role="dialog"` with `aria-modal="true"`, focus trap on open, restore focus on close
- **Tooltip**: `role="tooltip"` with `aria-describedby` on the trigger; show on hover/focus, hide on blur/escape
- **Tabs**: `role="tablist"` / `role="tab"` / `role="tabpanel"` with full arrow-key navigation
- **Code-copy button**: `aria-label="Copy code to clipboard"` with `aria-live="polite"` for confirmation toast

### Keyboard Navigation

- Tab order follows visual order — never skip the mascot if it has interactive elements
- Skip-to-content link present at top of every page (visually hidden until focused)
- Code blocks: Tab into the copy button, Enter to copy, focus returns to the block
- Modals: Tab cycles within, Escape closes, focus restores to invoking element

### Screen Reader Hints

- Mascot has `alt="Bun mascot"` — descriptive but not over-described
- Decorative SVGs have `aria-hidden="true"`
- Visible button labels are never duplicated by `aria-label` (avoid double-announcement)
- Code blocks expose language via `aria-label` (e.g., "TypeScript code")

### Reduced Motion

See §8. All non-essential animations collapse to opacity fades or are disabled.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Notes |
| --- | --- | --- |
| Mobile | < 640px | Single column, mascot scales to 60% |
| Tablet | 640–1024px | 8-column grid, hero stacks |
| Desktop | 1024–1280px | Full 12-column grid |
| Wide | 1280–1536px | Container caps at 1200px, side gutters expand |
| Ultra-wide | > 1536px | Container holds at 1200px, additional negative space |

### Touch Targets

Minimum 44×44px on mobile. Buttons that read 12px×24px on desktop expand to 14px×28px on mobile. Tap targets in nav menus get 48px height.

### Collapsing Strategy

- **Hero**: 12-column desktop becomes single-column mobile; mascot scales down 40%, headline drops one tier (display-large → h1)
- **Feature grid**: 3-up desktop → 2-up tablet → 1-up mobile
- **Code blocks**: full-bleed on mobile (negative margin to canvas edge), padded on desktop
- **Navigation**: horizontal nav becomes hamburger drawer at < 1024px

### Image Behavior

Mascot is SVG and scales without quality loss. Marketing illustrations use `srcset` with 1x/2x/3x. Images on cards crop to `aspect-ratio: 16/9` on desktop, `4/3` on mobile.

### Container Queries

Used in feature cards: when card width drops below 480px, internal layout collapses from horizontal (icon left, text right) to vertical stack regardless of viewport width.

## 11. Content & Voice

### Tone

**Warm-technical with confectionery confidence.** Bun is a high-performance JavaScript runtime; the technical authority is non-negotiable. But the voice is also quietly playful — the mascot, the pink, the "freshly-baked" branding metaphor. Microcopy reads as if a senior engineer wrote it after their second coffee, not their fifth.

### Microcopy Patterns

- **Button verbs**: prefer concrete actions ("Install Bun", "Read the docs", "View benchmarks") over hedged verbs ("Learn more", "Get started")
- **Error messages**: lead with the problem in plain language, then the fix. Example: `Cannot find module 'fs'. Bun resolves Node built-ins automatically — make sure you're running this with bun, not node.`
- **Success confirmations**: brief, never exclamation-marked. "Copied." not "Copied!"
- **Loading states**: avoid; Bun's marketing is about being fast, so visible loading is off-brand. Use skeleton states only when data is genuinely deferred.

### Empty States

What they say: "No packages installed yet. Try `bun add react`." (Concrete, action-oriented.)

What they don't say: "Looks like you haven't installed anything yet. Why not get started by installing your first package?" (Bun is too confident for hedged friendliness.)

### CTA Verb Conventions

- **Primary action**: "Install Bun" (always concrete and product-named)
- **Secondary action**: "Read the docs" / "View benchmarks" / "Browse examples"
- **Footer CTA**: "Try Bun in 30 seconds" (specific time-frame, never vague)
- **Not used**: "Get started", "Learn more", "Sign up free" — too generic

## 12. Dark Mode & Theming

**Light-only — no dark variant offered.**

Bun's identity is cream-light. A dark canvas reads as Vite, Node, or Vercel and erases the warmth that is Bun's single biggest differentiator. The brand commits to light, and that commitment is part of the design discipline.

The only dark surface on the entire site is the code block (`#15151b` background with cream text), and that surface is treated as an artifact — an oven window, not a continuous theme. Users who set their OS to dark mode see the same cream canvas; this is intentional. The brand's identity is the canvas, not the user preference.

If a future dark variant ships (currently not planned), the canvas would need to remain warm — a deep cream-tinted near-black like `#1a1612` rather than a cool `#0f1419` — to preserve the bakery-sign register. But until that ships, light is the only mode.

## 13. Lineage & Influences

Bun's design language sits at the intersection of three traditions. From **Stripe Press**, Bun inherits the warm-paper canvas and chunky display-type discipline — both brands use cream rather than white as the ground, and both treat the page as a printed object rather than a screen. From **1970s confectionery branding** (think Charms candy wrappers, vintage Hershey's lockups, Penguin paperback spines), Bun inherits the cream-pink-brown palette and the woodtype-poster type weight. From **Berkeley Graphics**, Bun gets the warm, slightly-rounded mono in code surfaces — a deliberate rejection of JetBrains Mono's cool-modern character.

What Bun rejects: dark-mode defaults (Vite, Node), gradient hero (Vercel, Qwik), particle-field hero (Three.js demos, Astro), monochrome-with-blue (Solid, Stripe). The brand's negative space — what it refuses to do — is as defining as what it does.

**Named influences**

- **Stripe Press** — warm-paper cream canvas, chunky display, editorial-book register. https://press.stripe.com
- **1970s confectionery branding** — cream + pink + brown palette signaling warmth and craft.
- **Berkeley Graphics (Berkeley Mono)** — warm, slightly-rounded mono with retro character.
- **Penguin paperback covers** — single-saturated-accent-on-warm-paper print discipline. https://www.penguin.co.uk
- **CoFo Foundry** — chunky grotesk display with woodtype warmth. https://contrastfoundry.com

## 14. Do's and Don'ts

### Do's

- **Do** keep the canvas at `#fbf0df` cream. Pure white reads as Stripe; off-white reads as Notion — the warmth is uniquely Bun.
- **Do** lean on chunky display type (CoFo Sans or equivalent at 700/800). The woodtype-poster register is what carries the warm-retro voice.
- **Do** treat the mascot as primary brand surface — not as an Easter egg. Bun's emotional differentiation lives in the wide-eyed bun.
- **Do** use the inverse-dark code block. It is the only place dark appears, and it works as artifact-on-paper.
- **Do** pair pink with near-black ON the pink, not white. Bun's signature inversion is `#15151b` on `#f472b6`.
- **Do** prefer Berkeley Mono over JetBrains Mono in code surfaces — the warmth must extend into mono.
- **Do** lean on hairline borders (`#15151b1a`) for depth instead of drop shadows.
- **Do** keep section padding generous (96px) — the cream canvas absorbs whitespace as paper, not emptiness.
- **Do** use the slashed zero (`zero` OpenType feature) in all mono surfaces — small detail, brand-consistent.
- **Do** reserve the pink halo (`shadow-pink`) for one moment per page maximum. Scarcity preserves its impact.

### Don'ts

- **Don't** introduce a dark-mode default. Bun's identity is cream-light; a dark canvas reads as Vite or Node and erases the warmth.
- **Don't** pair the pink (`#f472b6`) with cool blues or purples. Stay in the warm half of the wheel — pink, gold, cream, near-black.
- **Don't** apply heavy drop shadows. Depth here is tonal-warm and bordered, never shadowed; shadows undermine the print/poster register.
- **Don't** use Inter Display in place of CoFo Sans for hero copy. The chunkiness is non-negotiable — Inter Display is too refined.
- **Don't** use white-on-pink for the brand button. The signature is `#15151b` on `#f472b6`; reversing it reads as Stripe or generic SaaS.
- **Don't** soften `#15151b` to a lighter charcoal. The slight cool tilt is what registers it against the warm canvas.
- **Don't** add gradients on the brand pink. Bun commits where peers hedge — single-color, no gradients.
- **Don't** use JetBrains Mono in code blocks. Berkeley Mono's slightly-rounded warmth is part of the brand identity.
- **Don't** stack two display weights in one heading. CoFo Sans 800 is the hero; mixing 700 and 800 in adjacent text reads as inconsistent.
- **Don't** use blue for links. Links are `#db2777` plum-pink — the warm-link discipline keeps the chromatic family closed.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #fbf0df
surface: #ffffff
text: #15151b
text-muted: #6b6b6b
brand: #f472b6
brand-strong: #db2777
accent: #fbbf24
border: #15151b1a
inverse-bg: #15151b
inverse-text: #fbf0df
link: #db2777
```

### Example Component Prompts

1. *"Create a hero with a 96px CoFo Sans 800 headline at -0.04em tracking, 19px Inter body subhead, a dark `#15151b` solid CTA button with cream text and weight 700, and the Bun mascot anchored to the right at ~320px tall. Use the cream `#fbf0df` canvas, no shadows, no gradients."*
2. *"Design a feature card with `#ffffff` background on the cream canvas, 1px solid `#15151b1a` hairline border, 12px radius, 24px padding, a 30px CoFo Sans 700 title, and a 17px Inter body. On hover, the border deepens to `#15151b33` over 200ms."*
3. *"Build a dark code block with `#15151b` background, cream `#fbf0df` text, Berkeley Mono at 14px, 12px radius, 20px×24px padding, slashed-zero OpenType feature enabled, and pink (`#f472b6`) keyword highlighting. Include a copy button that fades in on block hover."*
4. *"Create a pink secondary button: `#f472b6` background, near-black `#15151b` text (do not use white), 8px radius, weight 700 in CoFo Sans, padding 12px 24px. Hover deepens to `#db2777` with cream text."*
5. *"Render the navigation: 64px height, `#fbf0dfcc` background with 8px backdrop-blur, 1px `#15151b14` bottom border, the Bun mascot + wordmark on the left, primary nav center, install CTA on the right. No shadow."*
6. *"Add a brand-pink callout card: `#fce7f3` background, 1px solid `#f9a8d4` border, 12px radius, 20px padding, a 20px CoFo Sans 600 title, and a 17px Inter body in `#9d174d` text. Use for tips and 'did you know' blocks."*

### Iteration Guide

1. **Lock the canvas first.** If the cream is not `#fbf0df`, nothing else will look like Bun. Verify before iterating on type or color.
2. **Check display weight.** If the hero feels generic, the display family is wrong (probably Inter Display); push to CoFo Sans 800 or a comparable chunky grotesk.
3. **Audit the pink usage.** Pink should appear in 5–10% of the visual area max — accents, buttons, callouts. If it's covering more, the discipline has slipped.
4. **Verify the on-brand inversion.** `#15151b` on `#f472b6` is Bun's signature; if the pink button has white text, the brand is wrong.
5. **Confirm no drop shadows on cards.** If cards have drop shadows, the depth strategy has drifted toward Material Design. Remove shadows; rely on hairline borders.
6. **Check the mono.** If code is in JetBrains Mono, swap to Berkeley Mono (or a comparable warm-rounded mono). The warmth must extend into code.
7. **Assess section padding.** 96px is the breathing default; if the page feels cramped, the padding has been reduced and Bun's airy paper-print register has flattened.
8. **Render the mascot last.** Treat the mascot as the final 10% — if it's not present, the brand is incomplete; if it's the first 90%, the design has become novelty rather than runtime.
