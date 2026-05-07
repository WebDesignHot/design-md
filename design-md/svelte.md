---
name: Svelte
tagline: 'Hot orange #ff3e00 against clean white with a confident sans — the framework that wears its flame as a wordmark.'
updated_at: 2026-05-05T20:10:49+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://svelte.dev
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools]
tags: [light, minimal, sans, structured, warm, bright]
preview_swatch: ['#ffffff', '#ff3e00', '#15191e']
related: [vite, vercel, tailwindcss]
description: 'Svelte''s site is built around a single screaming-hot accent — the `#ff3e00` orange from the flame logo — set against a clean white canvas and Source Sans Pro / Inter-grade body type. Where most frameworks hedge with gradients, Svelte commits: one color, one face, one wordmark, every surface scaled around that flame. The brand reads as Penguin Books paperback rather than Silicon Valley landing page — print discipline, single saturated accent, and the muscular Overpass display register that turns "compiler-as-framework" into a poster.'

colors:
  # — Primary —
  bg: '#ffffff'                  # pure white canvas
  bg-soft: '#f9f9f9'              # subtle alternate-section
  bg-strong: '#f4f4f4'             # card lift, sidebar panels
  surface: '#ffffff'               # default surface (matches bg)
  surface-strong: '#f4f4f4'         # raised card surface
  surface-muted: '#ededed'          # pressed surface
  text: '#15191e'                  # near-black body, slight blue undertone
  text-strong: '#000000'           # absolute black for emphasis
  text-muted: '#5b5b5b'            # captions, sidebar metadata
  text-faint: '#8c8c8c'             # tertiary, deemphasized
  text-disabled: '#bababa'           # disabled labels
  # — Brand & Accents —
  brand: '#ff3e00'                 # iconic Svelte flame orange — sacred
  brand-hover: '#e63600'           # hover-down state
  brand-strong: '#cc3100'          # pressed orange for emphasis
  brand-soft: '#fff1ec'            # tinted callout backgrounds, used sparingly
  brand-faint: '#fff8f5'           # palest orange tint
  accent: '#40b3ff'                # documentation link blue (separate from brand)
  accent-strong: '#1d96e0'         # darker doc link
  # — Interactive —
  link: '#ff3e00'                  # marketing links pick up brand orange
  link-hover: '#cc3100'             # darker on hover
  link-doc: '#40b3ff'               # documentation links use the doc-blue
  link-doc-hover: '#1d96e0'         # doc link hover
  link-visited: '#a78bfa'           # visited soft violet (rare, docs only)
  selected: '#fff1ec'               # selected-row orange tint
  disabled-bg: '#f4f4f4'             # disabled control
  disabled-text: '#bababa'           # disabled label
  # — Neutrals & Borders —
  border: '#0000001a'               # 10% black hairline
  border-strong: '#00000033'        # 20% black
  border-subtle: '#0000000d'         # 5% black
  divider: '#00000014'               # 8% black for table rules
  # — Inverse / Dark Surfaces —
  inverse-bg: '#0d1117'              # dark code-block ground
  inverse-text: '#e6e6e6'            # near-white text on dark code
  inverse-text-muted: '#8b949e'      # muted code comment
  inverse-border: '#30363d'          # dark-surface border
  # — Shadow Colors —
  shadow-soft: 'rgba(0, 0, 0, 0.04)'
  shadow-standard: 'rgba(0, 0, 0, 0.08)'
  shadow-orange: 'rgba(255, 62, 0, 0.18)'   # rare brand-glow
  # — Semantic —
  success-bg: '#dcfce7'
  success-text: '#166534'
  success-border: '#86efac'
  warning-bg: '#fff1ec'              # warning uses the brand-soft orange — discipline
  warning-text: '#cc3100'
  warning-border: '#ff3e00'
  danger-bg: '#fee2e2'
  danger-text: '#991b1b'
  danger-border: '#fca5a5'
  info-bg: '#e0f2ff'
  info-text: '#0c4a6e'
  info-border: '#7dd3fc'
  on-brand: '#ffffff'              # white ON the orange (the brand button)
  on-accent: '#ffffff'              # white ON the doc-blue

typography:
  display:
    family: '"Overpass", "Source Sans Pro", Inter, -apple-system, "system-ui", sans-serif'
    weights: [500, 600, 700, 900]
    opentype-features: ['ss01']
  body:
    family: '"Source Sans Pro", Inter, -apple-system, "system-ui", "Segoe UI", sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['cv01']
  mono:
    family: '"Fira Mono", "JetBrains Mono", ui-monospace, Menlo, Consolas, monospace'
    weights: [400, 500, 700]
    opentype-features: ['zero']
  scale:
    display-hero:    { size: 96, weight: 900, lineHeight: 0.95, tracking: '-0.03em', family: display, opentype: 'ss01' }
    display-large:   { size: 80, weight: 900, lineHeight: 1.0,  tracking: '-0.025em', family: display }
    display:         { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    h1:              { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.015em', family: display }
    h2:              { size: 36, weight: 700, lineHeight: 1.2,  tracking: '-0.012em', family: display }
    h3:              { size: 28, weight: 700, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 22, weight: 600, lineHeight: 1.3,  tracking: '0',        family: display }
    h5:              { size: 18, weight: 600, lineHeight: 1.4,  tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 700, lineHeight: 1.4,  tracking: '0.1em',    family: body, transform: 'uppercase' }
    body-lg:         { size: 19, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body:            { size: 17, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 15, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    caption:         { size: 13, weight: 500, lineHeight: 1.5,  tracking: '0.01em',   family: body }
    micro:           { size: 11, weight: 600, lineHeight: 1.4,  tracking: '0.04em',   family: body, transform: 'uppercase' }
    code:            { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',        family: mono, opentype: 'zero' }
    code-sm:         { size: 12, weight: 400, lineHeight: 1.5,  tracking: '0',        family: mono, opentype: 'zero' }
    code-tabular:    { size: 14, weight: 500, lineHeight: 1.5,  tracking: '0',        family: mono, opentype: 'zero, tnum' }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  xl: 12
  card: 8
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
    bg: '#ff3e00'
    color: '#ffffff'
    radius: 6
    weight: 600
    padding: '12px 20px'
    font: display
    hover: 'bg #e63600'
  button-ghost:
    bg: 'transparent'
    color: '#15191e'
    border: '1px solid #00000033'
    radius: 6
    weight: 500
    padding: '12px 20px'
    hover: 'bg #f9f9f9; border #15191e'
  button-link:
    bg: 'transparent'
    color: '#ff3e00'
    underline: 'on hover'
    weight: 500
  card:
    bg: '#ffffff'
    border: '1px solid #0000001a'
    radius: 8
    padding: '24px'
    shadow: 'none'
  card-callout:
    bg: '#fff1ec'
    border: '1px solid #ff3e0033'
    radius: 8
    padding: '20px'
  badge:
    bg: '#fff1ec'
    color: '#cc3100'
    radius: 9999
    padding: '4px 10px'
    weight: 600
    font: mono
  input:
    bg: '#ffffff'
    color: '#15191e'
    border: '1px solid #00000033'
    radius: 6
    padding: '10px 14px'
    focus-ring: '0 0 0 3px rgba(255, 62, 0, 0.3)'
  nav:
    bg: '#ffffffe6'
    backdrop-blur: 8
    border-bottom: '1px solid #00000014'
    height: 64
  code-block:
    bg: '#0d1117'
    color: '#e6e6e6'
    radius: 8
    padding: '20px 24px'
    font: mono

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-print: 'cubic-bezier(0.5, 0, 0.5, 1)'  # symmetric, deliberate, print-discipline
  duration-fast: 100
  duration-standard: 180
  duration-slow: 300
  duration-page: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — translateY transforms collapse to opacity-only fades; underline grows become instant.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: 'rgba(0, 0, 0, 0.04) 0 1px 2px'
  standard: 'rgba(0, 0, 0, 0.08) 0 4px 12px'
  elevated: 'rgba(0, 0, 0, 0.10) 0 12px 24px -8px'
  brand-glow: 'rgba(255, 62, 0, 0.2) 0 0 24px'
  ring: '0 0 0 3px rgba(255, 62, 0, 0.3)'

accessibility:
  contrast-text-on-bg: 16.4                 # AAA — #15191e on #ffffff
  contrast-muted-on-bg: 7.0                 # AAA — #5b5b5b on #ffffff
  contrast-text-on-brand: 4.6               # AA — #ffffff on #ff3e00
  contrast-link-on-bg: 4.7                  # AA — #ff3e00 on #ffffff
  focus-ring: '3px solid rgba(255, 62, 0, 0.3)'
  focus-offset: '2px'
  reduced-motion-honored: true
  min-touch-target: 44

dark-mode: optional   # Light is default; documentation has a dark theme — see §12

dark-mode-tokens:
  bg: '#100b08'                  # warm-leaning near-black to preserve the brand register
  bg-soft: '#1a1410'
  surface: '#211a14'
  text: '#f0e8e0'                # warm cream-leaning near-white
  text-muted: '#a8a098'
  brand: '#ff5722'                # slightly brighter on dark for AA contrast
  brand-hover: '#ff7043'
  border: '#ffffff1a'

lineage:
  summary: |
    Svelte's identity is the most monochromatic-with-one-accent site
    in the JS framework world. The canvas is pure `#ffffff`, the body
    is a near-black `#15191e` (slight blue undertone, distinct from
    Remix's pure black), and the brand color — `#ff3e00`, a saturated,
    almost cinnabar orange — does ALL of the chromatic work. That
    orange comes straight from the flame in the wordmark and is
    treated as sacred: never a gradient, never a tint pair, just the
    single hex value applied with absolute confidence. Display type
    leans on Overpass (Red Hat's grotesk) at 700/900 weights, paired
    with Source Sans Pro for body — the heavier display weight is
    what gives the marketing its declarative tone. Code surfaces
    flip to a dark `#0d1117` panel inside the otherwise-white page,
    a deliberate choice to make code blocks read as artifacts rather
    than continuous canvas. The closest spiritual cousin is Vercel
    in light mode, but Svelte's orange is too saturated to feel
    Silicon Valley — it reads more like a 1970s warning sign or a
    Penguin Books paperback spine.
  influences:
    - name: Penguin Books (orange spine)
      role: Single saturated orange against white as a serious, memorable identity.
      url: https://www.penguin.co.uk
    - name: Vercel
      role: Clean light-mode dev-tool template; type-led, low-chroma, structured.
      url: https://vercel.com
    - name: Red Hat (Overpass)
      role: Lent the Overpass display family — engineered, slightly extended grotesk.
      url: https://www.redhat.com
    - name: 1970s warning signage
      role: Cinnabar orange as the single saturated accent on white industrial ground.
    - name: Stripe Press
      role: Type-led editorial discipline; muscular display weights as voice.
      url: https://press.stripe.com
---

## 1. Visual Theme & Atmosphere

Svelte's marketing site is the most disciplined one-color brand in
the JavaScript framework world. The canvas is pure `#ffffff`, the
body type is a near-black `#15191e` Inter (with Source Sans Pro as
a documentation alternate), and the entire chromatic expression of
the brand lives in a single hex: `#ff3e00`. That orange appears on
the flame logo, the primary CTA, key documentation links, and
absolutely nowhere else as a gradient. Every other framework hedges;
Svelte commits.

The atmosphere is **Penguin paperback discipline meets compiler
manual**. The page reads less like a tech homepage and more like a
1970s Penguin Classic — clean white field, single saturated orange
spine accent, confident sans display. The dark code blocks inside
the white canvas are the one departure, and they read as artifacts
rather than chrome — `#0d1117` islands of GitHub-Dark cut into the
otherwise-print-quality page. Where Vercel sells "ship faster" with
gradients and Bun sells "fresh" with cream-and-pink, Svelte sells
"compiler-as-framework" with a flame and a Penguin paperback voice.

Depth is **almost absent**. Cards rest on the white canvas with a
10% black hairline at 8px radius — no shadow, no tonal layering. The
single source of depth is the dark code block: a `#0d1117` rectangle
that reads as a window into a different surface. That contrast does
all of the page's vertical work. Where most light-canvas brands lean
on subtle drop shadows or background-color stepping, Svelte refuses
both — depth is provided by the orange flame and the dark code, full
stop. The brand's confidence is in its restraint.

Display type leans on **Overpass** (Red Hat's slightly-extended
grotesk) at weights 700 and 900. H1 sits at 80–96px with `-0.025em`
to `-0.03em` tracking; the heavy 900 weight is what gives the
marketing copy its declarative energy. The label of "minimal sans"
doesn't quite cover it — Overpass at 900 is **muscular**, not
minimal, and that muscularity is what keeps the brand from feeling
like a generic startup template. Body type is **Source Sans Pro** at
17px on a 1.6 line-height — slightly larger than Stripe or Notion's
16px, signaling readability. Code surfaces use **Fira Mono** at 14px,
deliberately distinct from the JetBrains-Mono dev-tool default.

**Key Characteristics**

- Pure white canvas (`#ffffff`) — no warm tint, no off-white
- Single saturated orange (`#ff3e00`) — sacred, no gradients
- Near-black body (`#15191e`) — slight blue undertone, never charcoal
- Overpass 900 display — muscular, declarative, near-poster weight
- Fira Mono on `#0d1117` dark code panels — only dark surface
- Source Sans Pro body at 17px — slightly larger, signals readability
- 8px max card radius — angular discipline, no softening
- No drop shadows on cards — depth lives in the code block contrast
- 10% black hairline borders — Penguin paperback structural rules
- Flame glyph as the single brand mark — used at every scale

## 2. Color Palette & Roles

### Primary

- **bg** (`#ffffff`): pure white canvas, every page-level background
- **text** (`#15191e`): near-black body, slight blue undertone — distinct from pure black
- **brand** (`#ff3e00`): the sacred Svelte orange, single accent
- **on-brand** (`#ffffff`): white ON the orange (the brand button text)

### Brand & Dark

- **brand-hover** (`#e63600`): hover-down state on orange surfaces
- **brand-strong** (`#cc3100`): pressed orange for emphasis
- **brand-soft** (`#fff1ec`): pale orange tint for callouts and badges
- **brand-faint** (`#fff8f5`): palest orange tint, decorative
- **inverse-bg** (`#0d1117`): dark code-block ground (the only dark surface)
- **inverse-text** (`#e6e6e6`): near-white text on dark code

### Accent

- **accent** (`#40b3ff`): documentation link blue (separate from brand)
- **accent-strong** (`#1d96e0`): darker doc link
- **shadow-orange** (`rgba(255, 62, 0, 0.18)`): rare brand-glow halo

### Interactive

- **link** (`#ff3e00`): marketing links use the brand orange
- **link-hover** (`#cc3100`): pressed orange
- **link-doc** (`#40b3ff`): documentation links use the doc-blue (utility, not brand)
- **link-doc-hover** (`#1d96e0`): doc link hover
- **link-visited** (`#a78bfa`): visited soft violet (rare, docs only)
- **selected** (`#fff1ec`): selected-row orange tint
- **disabled-bg** (`#f4f4f4`): disabled control
- **disabled-text** (`#bababa`): disabled label

### Neutral Scale

- **text-strong** (`#000000`): absolute black emphasis
- **text** (`#15191e`): near-black body, slight blue undertone
- **text-muted** (`#5b5b5b`): captions, sidebar metadata
- **text-faint** (`#8c8c8c`): tertiary helper labels
- **text-disabled** (`#bababa`): disabled state
- **bg-soft** (`#f9f9f9`): subtle alternate-section gray
- **bg-strong** (`#f4f4f4`): card lift, sidebar panels

### Surface & Borders

- **surface** (`#ffffff`): default (matches canvas)
- **surface-strong** (`#f4f4f4`): raised card
- **surface-muted** (`#ededed`): pressed surface
- **border** (`#0000001a`): 10% black hairline, default
- **border-strong** (`#00000033`): 20% black, emphasized
- **border-subtle** (`#0000000d`): 5% black, near-invisible
- **divider** (`#00000014`): 8% black for table rules

### Shadow Colors

Shadows are **near-absent**. Cards don't ship with drop shadows; depth comes from hairline borders and the dark code block's contrast. When a shadow is used (modals, popovers), it is pure neutral and low-alpha. The only brand-tinted depth move is the rare `shadow-orange` glow — used once or twice per page maximum, behind a featured CTA, never as ambient depth. Where Bun has paper-print depth and Stripe has blue-tinted shadows, Svelte has **no-shadow print discipline**.

### Semantic

- **success-bg** (`#dcfce7`) / **success-text** (`#166534`) / **success-border** (`#86efac`)
- **warning-bg** (`#fff1ec`) / **warning-text** (`#cc3100`) / **warning-border** (`#ff3e00`) — warning uses the brand orange family, keeping the chromatic discipline
- **danger-bg** (`#fee2e2`) / **danger-text** (`#991b1b`) / **danger-border** (`#fca5a5`)
- **info-bg** (`#e0f2ff`) / **info-text** (`#0c4a6e`) / **info-border** (`#7dd3fc`) — info picks up the doc-blue family

## 3. Typography Rules

### Font Family

- **Primary display**: `Overpass`, fallback to `"Source Sans Pro"`, `Inter`, system stack
- **Body**: `"Source Sans Pro"`, fallback to `Inter`, `-apple-system`, `"system-ui"`, `"Segoe UI"`
- **Mono**: `"Fira Mono"`, fallback to `"JetBrains Mono"`, `ui-monospace`, `Menlo`, `Consolas`
- **OpenType features used**: `ss01` (Overpass alternates), `cv01` (Source Sans Pro character variants), `zero` (slashed zero in Fira Mono), `tnum` in benchmark tables

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| display-hero | Overpass | 96 | 900 | 0.95 | -0.03em | ss01 | Hero only — muscular |
| display-large | Overpass | 80 | 900 | 1.0 | -0.025em | — | Marketing H1 |
| display | Overpass | 64 | 700 | 1.05 | -0.02em | — | Section openers |
| h1 | Overpass | 48 | 700 | 1.1 | -0.015em | — | Page titles |
| h2 | Overpass | 36 | 700 | 1.2 | -0.012em | — | Sub-section headers |
| h3 | Overpass | 28 | 700 | 1.25 | -0.005em | — | Feature titles |
| h4 | Overpass | 22 | 600 | 1.3 | 0 | — | Card titles |
| h5 | Overpass | 18 | 600 | 1.4 | 0 | — | Sidebar headers |
| eyebrow | Source Sans Pro | 12 | 700 | 1.4 | 0.1em | uppercase | Section labels |
| body-lg | Source Sans Pro | 19 | 400 | 1.6 | 0 | — | Hero subhead |
| body | Source Sans Pro | 17 | 400 | 1.6 | 0 | — | Default body — readability-first |
| body-sm | Source Sans Pro | 15 | 400 | 1.55 | 0 | — | Secondary |
| caption | Source Sans Pro | 13 | 500 | 1.5 | 0.01em | — | Metadata |
| micro | Source Sans Pro | 11 | 600 | 1.4 | 0.04em | uppercase | Tags |
| code | Fira Mono | 14 | 400 | 1.55 | 0 | zero | Code blocks |
| code-sm | Fira Mono | 12 | 400 | 1.5 | 0 | zero | Inline code |
| code-tabular | Fira Mono | 14 | 500 | 1.5 | 0 | zero, tnum | Spec tables |

### Principles

1. **Overpass at 900 is the brand voice.** The muscular near-poster weight is what carries Svelte's declarative tone. Anything lighter than 700 in display reads as Inter-Display generic; 900 is reserved for hero moments.
2. **Source Sans Pro at 17px on 1.6.** The slightly-larger body size signals readability; combined with the generous line-height, it reads as documentation-quality even in marketing contexts. Inter at 16px would feel Silicon Valley; SSPro at 17px feels print.
3. **Negative tracking on display, neutral on body.** Display rolls in tight (`-0.015em` to `-0.03em`); body sits at `0`.
4. **Fira Mono over JetBrains.** Fira Mono is deliberately distinct from the dev-tool default. The slightly-narrower glyphs of Fira are part of Svelte's "we made our own choice" voice.
5. **No italic display, no decorative cuts.** Discipline mirrors the single-color brand confidence.
6. **Slashed zero in mono.** OpenType `zero` enabled across all mono surfaces.
7. **Eyebrow at 700 weight.** Heavier than peers (most use 600); the heavier eyebrow matches the muscular display register.

## 4. Component Stylings

### Buttons

**Primary (orange)**: `#ff3e00` background, `#ffffff` text, 6px radius, weight 600 in Overpass, padding `12px 20px`. Hover deepens to `#e63600`. The dominant CTA — used for "Get started", "Try the REPL", "Read the tutorial." Padding is slightly tighter than peers (most use 12×24); Svelte's print discipline keeps it compact.

**Ghost**: transparent background, `#15191e` near-black text, 1px solid `#00000033` border, 6px radius, weight 500. Hover fills to `#f9f9f9` and border deepens to `#15191e`.

**Link button**: transparent, `#ff3e00` text, weight 500, underline on hover.

### Cards

**Default**: `#ffffff` background, 1px solid `#0000001a` (10% black) hairline border, 8px radius, padding `24px`, **no shadow**. Hover: border deepens to `#00000033` over 180ms. The hairline-and-radius are the entire depth treatment.

**Callout**: `#fff1ec` orange-soft background, 1px solid `#ff3e0033` border, 8px radius, padding `20px`. Used for tips, warnings, "did you know" blocks.

### Badges & Tags

`#fff1ec` orange-soft background, `#cc3100` deep-orange text, 9999 (pill) radius, padding `4px 10px`, weight 600, Fira Mono. Used for version numbers, status indicators, technology tags.

### Inputs

`#ffffff` background, `#15191e` text, 1px solid `#00000033` border, 6px radius, padding `10px 14px`. Focus ring: `0 0 0 3px rgba(255, 62, 0, 0.3)` — the orange halo. Placeholder: `#8c8c8c`.

### Navigation

`#ffffffe6` (90% white) with `8px` backdrop-blur, 1px solid `#00000014` bottom border, 64px height. Flame glyph + "Svelte" wordmark on the left, primary nav center, REPL CTA right.

### Code blocks

`#0d1117` (GitHub-Dark) background, `#e6e6e6` near-white text, 8px radius (matches card radius), padding `20px 24px`, Fira Mono at 14px on 1.55 line-height (slightly tighter than body's 1.6 to fit more code in view). Syntax highlighting uses GitHub-Dark conventions adjusted for orange brand emphasis: orange for tag names, soft blue for attributes, near-white for identifiers.

### Flame wordmark glyph

The signature visual element — used at every scale from 16px favicon to 200px hero callout. Always rendered solid `#ff3e00`, never gradient, never softened. The angular triangle geometry of the flame echoes through chevron icons and section dividers.

## 5. Layout Principles

### Spacing System

Base unit is **4px**. Scale: `2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160`. Density: Svelte is **mid-density** — 96px section padding, 24px card padding, 16px between elements. The page breathes without becoming a billboard.

### Grid & Container

The container caps at **1200px** with **24px gutters**. Prose width: 680px. The marketing layout is a clean 12-column grid, but documentation pages use a three-column structure (sidebar / content / TOC) that mirrors MDN. Hero blocks routinely sit at full bleed with the flame glyph anchoring the left edge.

### Whitespace Philosophy

The pure-white canvas is unforgiving — every element shows its weight. Svelte compensates with generous whitespace (96px section padding, 32px between cards in a grid) and with the Overpass display's muscularity, which fills negative space without requiring decorative chrome.

### Section Cadence

The white canvas runs continuously; alternation happens via `bg-soft` (`#f9f9f9`) bands every 2–3 sections. Brand-band moments (full-orange sections) are essentially absent — the orange is reserved for buttons, links, the flame, and 1–2 callout cards per page. Documentation has no brand-band moments at all; the orange appears only inline.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | --- | --- |
| Micro | 2px | Border accents, dividers |
| Standard | 4px | Inline tags, micro-pills |
| Comfortable | 6px | Inputs, buttons |
| Relaxed | 8px | Cards, code blocks |
| Featured | 12px | Hero illustration frames (rare) |
| Pill | 9999px | Badges, status pills |

Radius ladder is **tight** — nothing rounds past 8px except status pills, in keeping with the print-discipline register. The flame logo itself is angular — sharp triangle geometry — and that angularity carries through to the chevron icons and section dividers. Where Qwik leans 16px-rounded for kinetic energy and Bun leans 12px for warm-cushion register, Svelte stays at 6/8px for muscular precision.

## 7. Depth & Elevation

| Level | Treatment | Use |
| --- | --- | --- |
| 0 — Flat | No shadow, no border | Page canvas |
| 1 — Hairline | 1px solid `#0000001a` | Default cards, dividers |
| 2 — Lifted | 1px border + `rgba(0,0,0,0.04) 0 1px 2px` ambient | Featured cards (rare) |
| 3 — Hovered | Hairline border deepens to `#00000033` | Card hover |
| 4 — Elevated | `rgba(0,0,0,0.08) 0 4px 12px` | Modals, popovers |
| 5 — Brand-glow | `rgba(255, 62, 0, 0.2) 0 0 24px` | Featured CTA (very rare) |

**Shadow Philosophy** — Svelte is a **no-shadow print** brand. Drop shadows are essentially absent on cards; depth comes from hairline borders and the dramatic contrast between the white canvas and the dark code blocks. The single dramatic depth move is the inverse `#0d1117` code block — a dark window cut into the white page, the equivalent of a Penguin paperback's interior illustration. Shadows on modals and popovers are present but understated, pure-neutral, low-alpha.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — feature reveals
- **Print**: `cubic-bezier(0.5, 0, 0.5, 1)` — symmetric, deliberate, used on UI state changes that should feel print-precise rather than springy

### Durations

- **Fast (100ms)**: hover color shifts, link underline grow, badge state
- **Standard (180ms)**: button hover deepening, card border emphasis, focus ring fade-in
- **Slow (300ms)**: section reveals, modal entrance
- **Page (400ms)**: route transitions

Like Solid, Svelte's durations are slightly faster than peers — the print-discipline voice favors crispness over indulgence.

### Per-component Micro-states

- **Button hover**: orange deepens from `#ff3e00` to `#e63600` over 180ms ease-standard; **no translateY lift** (the deepening is the entire hover)
- **Card hover**: border opacity bumps from `1a` to `33` over 180ms; if the card has a CTA inside, the CTA's underline grows in
- **Link hover**: underline grows 0→100% in 100ms; orange deepens to `#cc3100`
- **Flame glyph**: subtle scale from 1.0 to 1.05 on hover — the only flourish animation, used only when flame is interactive
- **Focus**: 3px orange halo fades in over 100ms

### Page Transitions

400ms cross-fade with 16px translateY enter. White canvas remains constant; only inline content shifts. Reduced motion strips the translateY.

### Reduced Motion

`prefers-reduced-motion: reduce` honored. translateY transforms become opacity-only fades. Underline grows become instant (no animation). Flame scale-on-hover disabled. Focus rings remain visible.

## 9. Accessibility & A11y

### Contrast Pairs

- **Body on canvas** (`#15191e` on `#ffffff`): **16.4:1** — AAA at all sizes
- **Muted on canvas** (`#5b5b5b` on `#ffffff`): **7.0:1** — AAA
- **White on brand** (`#ffffff` on `#ff3e00`): **4.6:1** — AA at body sizes (the brand-button pairing)
- **Brand on canvas** (`#ff3e00` on `#ffffff`): **4.7:1** — AA at body sizes (link-on-bg)
- **Inverse text on dark code** (`#e6e6e6` on `#0d1117`): **15.3:1** — AAA
- **Doc-blue on canvas** (`#40b3ff` on `#ffffff`): **3.4:1** — fails AA at body but passes AA at large text; documentation links should be paired with underline for accessibility

**Note on doc-blue**: The doc link blue (`#40b3ff`) is below AA at body sizes (3.4:1). The mitigation is that documentation links **always** carry an underline, never relying on color alone — this satisfies WCAG 1.4.1 even without sufficient contrast.

### Focus Indicators

3px solid `rgba(255, 62, 0, 0.3)` orange ring with 2px offset. Consistent across buttons, links, inputs, interactive cards. Visible on white surfaces.

### ARIA Patterns

- **Combobox**: `role="combobox"` with `aria-expanded`, `aria-controls`, `aria-activedescendant`
- **Dialog**: `role="dialog"` `aria-modal="true"`, focus trap, restore focus on close
- **Tooltip**: `role="tooltip"` with `aria-describedby`
- **Tabs**: `role="tablist"` / `role="tab"` / `role="tabpanel"` with arrow-key navigation
- **Code-copy**: `aria-label="Copy code"` with polite live region
- **REPL**: `role="application"` with full keyboard navigation; iframe boundaries clearly labeled

### Keyboard Navigation

- Tab order follows visual order
- Skip-to-content link visually hidden until focused
- Documentation: Tab cycles sidebar → main → TOC; arrow keys navigate sidebar tree
- Code blocks: Tab to copy button, Enter to copy, focus returns
- Modals: Tab cycles within, Escape closes

### Screen Reader Hints

- Flame glyph: `aria-label="Svelte"` when used as logo, `aria-hidden="true"` when decorative
- Decorative SVGs: `aria-hidden="true"`
- Code blocks: language announced via `aria-label`
- Documentation links: never communicate state through color alone — always use underline + color

### Reduced Motion

See §8. Underline grows become instant; flame hover scale disabled.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Notes |
| --- | --- | --- |
| Mobile | < 640px | Single column, flame scales to 60% |
| Tablet | 640–1024px | 8-column grid, hero stacks |
| Desktop | 1024–1280px | Full 12-column grid |
| Wide | 1280–1536px | Container caps at 1200px |
| Ultra-wide | > 1536px | Container holds, side gutters expand |

### Touch Targets

Minimum 44×44px on mobile. Buttons that read 12×20px on desktop expand to 14×24px on mobile. Nav links get 48px height.

### Collapsing Strategy

- **Hero**: 12-col → single-col; flame glyph scales 60%, headline drops one tier (display-large → h1)
- **Feature grid**: 3-up desktop → 2-up tablet → 1-up mobile
- **Documentation**: 3-col (sidebar / content / TOC) → single-col with drawer-based sidebar at < 1024px
- **Code blocks**: full-bleed on mobile, padded on desktop
- **REPL**: side-by-side editor/preview becomes stacked on mobile

### Image Behavior

Flame glyph is SVG with no gradient — scales without loss. Marketing illustrations (rare) use `srcset` 1x/2x/3x. Card images crop to `aspect-ratio: 16/9` desktop, `4/3` mobile.

### Container Queries

Used in feature cards: at < 480px container width, internal layout collapses from horizontal to vertical regardless of viewport.

## 11. Content & Voice

### Tone

**Declarative-print, with engineer's precision.** Svelte's voice is the opposite of hedged. Where Vercel says "ship faster, scale anywhere", Svelte says "compiler-as-framework". Where Bun says "freshly-baked", Svelte says "the framework that compiles your code." The brand's confidence comes from technical specificity stated as fact.

### Microcopy Patterns

- **Button verbs**: prefer concrete actions ("Get started", "Try the REPL", "Read the tutorial") over hedged verbs
- **Error messages**: lead with the technical reality, then the fix. Example: `Component must export at least one accessor. Add `export let name` to the component script.` — names the requirement, names the fix.
- **Success confirmations**: brief, period-terminated. "Compiled." "Saved." Not "Successfully compiled!"
- **Loading states**: minimal; Svelte's brand is "compiled, not interpreted at runtime", so visible loading is rare and brief

### Empty States

What they say: "No components yet. Run `npm create svelte` to scaffold one." (Command-shaped, action-direct.)

What they don't say: "It looks like you haven't added any components yet. Why not get started?" (Too apologetic for Svelte's confident-print voice.)

### CTA Verb Conventions

- **Primary**: "Get started" / "Try the REPL" / "Read the tutorial"
- **Secondary**: "Browse examples" / "View the API" / "See on GitHub"
- **Footer CTA**: "Build with Svelte" — outcome-anchored
- **Not used**: "Sign up free" — Svelte is open source; "Learn more" — too vague

## 12. Dark Mode & Theming

**Light is the marketing default; documentation has an optional dark theme.**

Svelte's marketing identity is white-canvas, orange-flame, near-black-type. A dark variant for the homepage would erase the Penguin-paperback discipline and flatten the brand to a generic dark-mode dev-tool template.

The **documentation site** offers a dark theme as an opt-in setting. When toggled, the canvas becomes `#100b08` (a warm-leaning near-black to preserve the brand's warm register; not the cool `#0a0e1a` or `#0c1424` of dev-tool peers), body type becomes `#f0e8e0` (warm cream-leaning near-white), the brand orange brightens slightly to `#ff5722` for AA contrast on the dark ground, and code blocks remain `#0d1117` (the only constant across themes). Borders become `#ffffff1a` (10% white) to preserve the hairline discipline.

**Dark token map:**

```yaml
bg: '#100b08'                # warm-leaning near-black
bg-soft: '#1a1410'
surface: '#211a14'
text: '#f0e8e0'              # warm cream-leaning near-white
text-muted: '#a8a098'
brand: '#ff5722'              # slightly brighter on dark for AA contrast
brand-hover: '#ff7043'
border: '#ffffff1a'
```

The dark theme is **functional**, not the brand voice — it exists for readers who need lower-fatigue reading during long documentation sessions, not for marketing impact. The light theme remains canonical.

## 13. Lineage & Influences

Svelte's design language sits at the intersection of three lineages. From **Penguin Books (orange spine)**, Svelte inherits the single-saturated-orange-against-white discipline — the brand's most direct visual ancestor. From **Vercel light mode**, the clean dev-tool template, type-led layout, and the structural rigor. From **Red Hat (Overpass)**, the muscular Overpass display family that gives the marketing its declarative tone. From **1970s warning signage**, the cinnabar-orange chromatic sensibility — the orange is too saturated to feel Silicon Valley; it reads more like industrial caution paint than tech accent. From **Stripe Press**, the type-led editorial discipline and the muscular-display-as-voice philosophy.

What Svelte rejects: gradient hero (every other framework), dark canvas defaults, mascot illustration (Bun, Deno), particle-field hero (Astro, Three.js demos), monochrome-without-accent (Notion). The brand's negative space — what it refuses to do — is part of its identity; the orange is sacred precisely because every adjacent space is white.

**Named influences**

- **Penguin Books (orange spine)** — single saturated orange against white. https://www.penguin.co.uk
- **Vercel** — clean light-mode dev-tool template; type-led, low-chroma, structured. https://vercel.com
- **Red Hat (Overpass)** — Overpass display family; engineered, slightly extended grotesk. https://www.redhat.com
- **1970s warning signage** — cinnabar orange as the single saturated accent.
- **Stripe Press** — type-led editorial discipline; muscular display weights as voice. https://press.stripe.com

## 14. Do's and Don'ts

### Do's

- **Do** treat `#ff3e00` as sacred. One color, no gradients, no tints — that single saturated orange is the entire brand.
- **Do** lean on Overpass at 700/900 for headlines; the heavy weight is what carries the declarative voice.
- **Do** keep the canvas pure `#ffffff`. Off-white reads as Notion, paper-cream reads as Bun — Svelte is white.
- **Do** use Source Sans Pro at 17px for body — slightly larger than peers, signals readability and print quality.
- **Do** use the dark `#0d1117` code block as the only dark surface. It is the brand's depth signature.
- **Do** keep card radius at 8px maximum. Larger radii read as Qwik or Astro.
- **Do** reserve the orange halo for one moment per page maximum. Scarcity preserves its impact.
- **Do** lean on Fira Mono in code surfaces. Distinct from the JetBrains-default; part of "we made our own choice."
- **Do** treat the flame glyph as a solid orange, never gradient. The flame is the second-most-sacred element after the hex value.
- **Do** keep section padding at 96px for marketing, slightly tighter (80px) for documentation.

### Don'ts

- **Don't** introduce a second brand color. Documentation link blue exists for utility, but marketing surfaces should never pair orange with another accent.
- **Don't** apply orange to large surfaces. The hex is too saturated for full backgrounds; reserve it for buttons, links, and the flame.
- **Don't** add gradients, glows, or backdrop blur to the orange. Svelte's brand is print-discipline; effects undermine the single-color confidence.
- **Don't** soften `#ff3e00` to a less-saturated orange. The exact hex is what makes it read as Penguin paperback rather than Silicon Valley.
- **Don't** use white-on-white card-on-canvas without a hairline border. Borders are how Svelte articulates structure.
- **Don't** apply drop shadows to cards. The brand's depth strategy is no-shadow print discipline plus the dark code block.
- **Don't** use Inter Display for hero copy. Overpass at 900 is the brand voice; Inter Display reads as generic dev-tool.
- **Don't** use JetBrains Mono in code surfaces. Fira Mono is the brand-default mono.
- **Don't** soften the body type's near-black `#15191e` to charcoal. The slight blue undertone is part of the precision.
- **Don't** add illustrative mascots. Svelte's voice is print-paperback, not children's-book.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #ffffff
text: #15191e
text-muted: #5b5b5b
brand: #ff3e00 (sacred orange)
brand-hover: #e63600
brand-soft: #fff1ec
accent: #40b3ff (doc-blue, utility only)
border: #0000001a (10% black)
inverse-bg: #0d1117
inverse-text: #e6e6e6
on-brand: #ffffff
```

### Example Component Prompts

1. *"Create a hero with a 96px Overpass 900 headline at -0.03em tracking, 19px Source Sans Pro body subhead at 1.6 line-height, a `#ff3e00` solid CTA button with white text, weight 600 in Overpass, padding 12px 20px, 6px radius. Canvas is pure `#ffffff`. The flame glyph (solid `#ff3e00`, no gradient) anchors the top-left at 48px."*
2. *"Design a feature card with `#ffffff` background, 1px solid `#0000001a` (10% black) hairline border, 8px radius, 24px padding, NO drop shadow, a 28px Overpass 700 title, and 17px Source Sans Pro body. On hover, border deepens to `#00000033` over 180ms."*
3. *"Build a dark code block with `#0d1117` background, `#e6e6e6` near-white text, Fira Mono at 14px on 1.55 line-height, 8px radius, 20px×24px padding, slashed-zero enabled, GitHub-Dark-style syntax highlighting with orange keyword color (`#ff7b72` adjusted toward `#ff3e00` brand register)."*
4. *"Create a ghost button: transparent background, `#15191e` near-black text, 1px solid `#00000033` border, 6px radius, weight 500 in Overpass, padding 12px 20px. Hover fills to `#f9f9f9` and border deepens to `#15191e`."*
5. *"Render the navigation: 64px height, `#ffffffe6` background with 8px backdrop-blur, 1px `#00000014` bottom border, flame glyph (solid `#ff3e00`) + 'Svelte' wordmark on left in Overpass 700, primary nav center, REPL CTA right."*
6. *"Add an orange callout card: `#fff1ec` background, 1px solid `#ff3e0033` border, 8px radius, 20px padding, a 22px Overpass 600 title, and a 17px Source Sans Pro body in `#cc3100` deep-orange text. Use for 'did you know' and tutorial tip blocks."*

### Iteration Guide

1. **Verify the orange is exactly `#ff3e00`.** If it's `#ff5722` or `#e63600` for a primary surface, the brand has drifted. The exact hex is sacred.
2. **Confirm the canvas is pure white.** No `#fafafa`, no `#fefefe`. Svelte is `#ffffff`.
3. **Check display weight.** If the hero feels light, push to Overpass 900 with `-0.025em` to `-0.03em` tracking. The muscular weight is the voice.
4. **Audit shadow presence.** If cards have drop shadows, the print-discipline has slipped. Remove shadows; rely on hairline borders.
5. **Verify body face is Source Sans Pro at 17px.** Inter at 16px reads as generic; SSPro at 17px reads as print.
6. **Confirm card radius at 8px max.** Larger radii read as Qwik or Astro; Svelte stays angular.
7. **Audit orange usage.** Orange should appear in 5–10% of visual area — buttons, links, flame, callouts. If covering more, the brand has flattened toward marketing template.
8. **Check for the dark code block.** If code blocks are light or `bg-soft`, the depth signature is missing. Code must be on `#0d1117`.
