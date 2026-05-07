---
name: Qwik
tagline: 'Electric purple-to-blue gradient on near-black — resumable execution dressed as a lightning bolt.'
updated_at: 2026-05-06T20:10:21+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://qwik.dev
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools]
tags: [dark, sans, structured, cool, bright, multi-theme]
preview_swatch: ['#0a0e1a', '#ac7ef4', '#18b6f6']
related: [vite, vercel, tailwindcss]
description: 'Qwik''s identity is a high-voltage gradient — `#ac7ef4` violet flowing into `#18b6f6` electric blue — set against a near-black `#0a0e1a` canvas. The lightning-bolt glyph anchors the wordmark, and Inter (paired with Poppins for select display moments) carries the marketing copy. The brand reads as kinetic infrastructure: speed-as-aesthetic, execution-as-electricity. Resumability is the framework''s technical pitch; the violet halo is its visual analog. Where Astro feels cosmic and Solid feels infrastructural, Qwik feels like a charging arc.'

themes:
  default: dark
  available: [dark, light]
  switch-via: 'data-theme on <html>; persisted in localStorage; respects prefers-color-scheme. Marketing site is dark; docs honor user preference. The violet+cyan brand gradient is invariant across themes.'

colors:
  dark:
    bg: '#0a0e1a'                  # cool near-black canvas
    bg-soft: '#11162a'              # secondary panel, code-block surface
    bg-strong: '#1a2040'             # card lift
    surface: '#1a2040'               # raised card surface
    surface-strong: '#252b50'         # hovered card
    surface-muted: '#0d1224'         # pressed card
    text: '#ffffff'
    text-strong: '#ffffff'
    text-muted: '#a8b1c2'
    text-soft: '#7a8499'
    text-faint: '#5a6478'
    text-disabled: '#3a4258'
    brand: '#ac7ef4'                 # Qwik violet
    brand-strong: '#8b5cf0'
    brand-soft: '#ac7ef422'           # 13% violet
    accent: '#18b6f6'                # electric blue
    accent-strong: '#0a9ad9'
    accent-soft: '#18b6f622'
    gradient-from: '#ac7ef4'
    gradient-to: '#18b6f6'
    gradient-via: '#7c3aed'
    glow: '#ac7ef466'
    glow-blue: '#18b6f666'
    link: '#18b6f6'
    link-hover: '#33d4ff'
    link-visited: '#c4b5fd'
    selected: '#ac7ef422'
    disabled-bg: '#252b50'
    disabled-text: '#5a6478'
    border: '#ffffff14'
    border-strong: '#ffffff26'
    border-subtle: '#ffffff0a'
    border-brand: '#ac7ef466'
    divider: '#ffffff14'
    shadow-deep: 'rgba(0, 0, 0, 0.4)'
    shadow-violet: 'rgba(172, 126, 244, 0.32)'
    shadow-blue: 'rgba(24, 182, 246, 0.32)'
    success-bg: '#0d2818'
    success-text: '#86efac'
    success-border: '#22c55e'
    warning-bg: '#2a2010'
    warning-text: '#fbbf24'
    warning-border: '#f59e0b'
    danger-bg: '#2a1414'
    danger-text: '#fca5a5'
    danger-border: '#ef4444'
    info-bg: '#0c2030'
    info-text: '#7dd3fc'
    info-border: '#0ea5e9'
    on-brand: '#ffffff'
    on-accent: '#0a0e1a'

  light:
    bg: '#ffffff'                  # docs light canvas
    bg-soft: '#f8fafc'              # subtle alt panel
    bg-strong: '#f1f5f9'             # raised surface tier
    surface: '#ffffff'
    surface-strong: '#f1f5f9'
    surface-muted: '#fafbfc'
    text: '#0a0e1a'                  # mirrors dark/bg as text role
    text-strong: '#000000'
    text-muted: '#475569'             # slate-600
    text-soft: '#64748b'              # slate-500
    text-faint: '#94a3b8'             # slate-400
    text-disabled: '#cbd5e1'
    brand: '#7c3aed'                  # deeper violet for AAA on white
    brand-strong: '#6d28d9'
    brand-soft: 'rgba(124, 58, 237, 0.10)'
    accent: '#0a9ad9'                 # deeper cyan for legibility
    accent-strong: '#0e7490'
    accent-soft: 'rgba(24, 182, 246, 0.10)'
    gradient-from: '#ac7ef4'          # gradient stays — chromatic identity
    gradient-to: '#18b6f6'
    gradient-via: '#7c3aed'
    glow: 'rgba(172, 126, 244, 0.30)'
    glow-blue: 'rgba(24, 182, 246, 0.20)'
    link: '#0a9ad9'                   # cyan link
    link-hover: '#0e7490'
    link-visited: '#7c3aed'
    selected: 'rgba(124, 58, 237, 0.08)'
    disabled-bg: '#f1f5f9'
    disabled-text: '#94a3b8'
    border: '#e2e8f0'                 # slate-200 hairline
    border-strong: '#cbd5e1'           # slate-300
    border-subtle: '#f1f5f9'           # slate-100
    border-brand: 'rgba(124, 58, 237, 0.40)'
    divider: '#e2e8f0'
    shadow-deep: 'rgba(15, 23, 42, 0.12)'
    shadow-violet: 'rgba(172, 126, 244, 0.18)'
    shadow-blue: 'rgba(24, 182, 246, 0.18)'
    success-bg: '#f0fdf4'
    success-text: '#15803d'
    success-border: '#22c55e'
    warning-bg: '#fffbeb'
    warning-text: '#b45309'
    warning-border: '#f59e0b'
    danger-bg: '#fef2f2'
    danger-text: '#b91c1c'
    danger-border: '#ef4444'
    info-bg: '#f0f9ff'
    info-text: '#0369a1'
    info-border: '#0ea5e9'
    on-brand: '#ffffff'
    on-accent: '#ffffff'

typography:
  display:
    family: 'Poppins, "Inter Display", Inter, -apple-system, "system-ui", sans-serif'
    weights: [500, 600, 700, 800]
    opentype-features: ['ss01']
  body:
    family: 'Inter, -apple-system, "system-ui", "Segoe UI", sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['cv01', 'cv11']
  mono:
    family: '"JetBrains Mono", "Fira Code", ui-monospace, Menlo, Consolas, monospace'
    weights: [400, 500, 700]
    opentype-features: ['zero', 'ss02']
  scale:
    display-hero:    { size: 88, weight: 700, lineHeight: 1.0,  tracking: '-0.025em', family: display, opentype: 'ss01' }
    display-large:   { size: 72, weight: 700, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    display:         { size: 56, weight: 700, lineHeight: 1.1,  tracking: '-0.018em', family: display }
    h1:              { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.015em', family: display }
    h2:              { size: 36, weight: 700, lineHeight: 1.2,  tracking: '-0.012em', family: display }
    h3:              { size: 28, weight: 600, lineHeight: 1.25, tracking: '-0.008em', family: display }
    h4:              { size: 22, weight: 600, lineHeight: 1.3,  tracking: '-0.005em', family: display }
    h5:              { size: 18, weight: 600, lineHeight: 1.4,  tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.4,  tracking: '0.12em',   family: body, transform: 'uppercase' }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.6,  tracking: '-0.005em', family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    caption:         { size: 13, weight: 500, lineHeight: 1.5,  tracking: '0.01em',   family: body }
    micro:           { size: 11, weight: 600, lineHeight: 1.4,  tracking: '0.04em',   family: body, transform: 'uppercase' }
    code:            { size: 14, weight: 400, lineHeight: 1.6,  tracking: '0',        family: mono, opentype: 'zero' }
    code-sm:         { size: 12, weight: 400, lineHeight: 1.55, tracking: '0',        family: mono, opentype: 'zero' }
    code-tabular:    { size: 14, weight: 500, lineHeight: 1.5,  tracking: '0',        family: mono, opentype: 'zero, tnum' }

radius:
  micro: 2
  sm: 6
  md: 10
  lg: 14
  xl: 16
  xxl: 20
  card: 16
  pill: 9999

spacing:
  base: 4
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  gutter: 24
  section-padding: 96
  grid: 12

components:
  button-primary:
    bg: 'linear-gradient(90deg, #ac7ef4, #18b6f6)'
    color: '#ffffff'
    radius: 10
    weight: 600
    padding: '14px 28px'
    font: display
    hover: 'shadow #ac7ef466 0 0 24px; brightness(1.05)'
  button-ghost:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #ffffff26'
    radius: 10
    weight: 500
    hover: 'bg #ffffff0a; border #ffffff40'
  button-violet:
    bg: '#ac7ef4'
    color: '#0a0e1a'
    radius: 10
    weight: 600
    hover: 'bg #8b5cf0; color #ffffff'
  button-link:
    bg: 'transparent'
    color: '#18b6f6'
    underline: 'on hover'
    weight: 500
  card:
    bg: '#1a2040'
    border: '1px solid #ffffff14'
    radius: 16
    padding: '24px'
    shadow: 'rgba(0, 0, 0, 0.2) 0 4px 12px'
  card-haloed:
    bg: '#1a2040'
    border: '1px solid #ac7ef466'
    radius: 16
    padding: '24px'
    shadow: 'rgba(172, 126, 244, 0.2) 0 0 32px'
  badge:
    bg: '#ac7ef422'
    color: '#ac7ef4'
    radius: 9999
    padding: '4px 10px'
    weight: 600
    font: mono
  input:
    bg: '#11162a'
    color: '#ffffff'
    border: '1px solid #ffffff26'
    radius: 10
    padding: '10px 14px'
    focus-ring: '0 0 0 3px rgba(172, 126, 244, 0.4)'
  nav:
    bg: '#0a0e1acc'
    backdrop-blur: 12
    border-bottom: '1px solid #ffffff14'
    height: 64
  code-block:
    bg: '#11162a'
    color: '#e6e6e6'
    radius: 12
    padding: '20px 24px'
    font: mono

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-electric: 'cubic-bezier(0.16, 1, 0.3, 1)'  # snappy, expo-out, kinetic
  duration-fast: 120
  duration-standard: 200
  duration-slow: 360
  duration-page: 420
  reduced-motion: 'respects prefers-reduced-motion: reduce — gradient animations freeze, halos remain static, translateY transforms become opacity-only fades.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: 'rgba(0, 0, 0, 0.2) 0 1px 3px'
  standard: 'rgba(0, 0, 0, 0.3) 0 4px 12px'
  elevated: 'rgba(0, 0, 0, 0.4) 0 12px 24px -8px'
  violet-halo: 'rgba(172, 126, 244, 0.4) 0 0 32px'
  blue-halo: 'rgba(24, 182, 246, 0.4) 0 0 32px'
  ring: '0 0 0 3px rgba(172, 126, 244, 0.4)'

accessibility:
  contrast-text-on-bg: 17.6                 # AAA — #ffffff on #0a0e1a
  contrast-muted-on-bg: 8.2                 # AAA — #a8b1c2 on #0a0e1a
  contrast-text-on-brand: 4.5               # AA — #ffffff on #ac7ef4
  contrast-text-on-accent: 12.4             # AAA — #0a0e1a on #18b6f6 (the on-accent inversion)
  contrast-link-on-bg: 8.6                  # AAA — #18b6f6 on #0a0e1a
  focus-ring: '3px solid rgba(172, 126, 244, 0.4)'
  focus-offset: '2px'
  reduced-motion-honored: true
  min-touch-target: 44

dark-mode: default   # Dark IS the default; no light variant offered

lineage:
  summary: |
    Qwik's design language is built around a single gradient with a
    very specific emotional shape: violet `#ac7ef4` on the left,
    electric blue `#18b6f6` on the right, sweeping diagonally across
    the lightning-bolt wordmark glyph. That gradient is the brand —
    used on the wordmark, on primary CTAs, on key feature illustrations,
    and as a soft 40%-alpha halo behind hero copy. The canvas is a
    cool near-black `#0a0e1a`, slightly bluer than Astro's cosmos
    navy, and softer than Solid's technical navy. Type pairs Inter
    (with Poppins for select display moments) for marketing copy,
    giving the brand a crisp, kinetic register distinct from the
    Geist-Inter monoculture. The lightning-bolt glyph echoes through
    small UI elements: chevron icons get a slight angular kink,
    section dividers stagger like waveforms. Where Astro feels cosmic
    and Solid feels infrastructural, Qwik feels kinetic — the design
    language sells "instant" and "resumable" by visually behaving like
    a charging arc.
  influences:
    - name: Stripe
      role: Diagonal-gradient hero treatment as primary brand surface.
      url: https://stripe.com
    - name: Linear
      role: Brand-tinted halo behind hero copy as a depth strategy.
      url: https://linear.app
    - name: Vercel
      role: Dark-canvas dev-tool template with single dominant gradient accent.
      url: https://vercel.com
    - name: Builder.io
      role: Parent company aesthetic — saturated electric accents on dark grounds.
      url: https://www.builder.io
    - name: Synthwave / vaporwave aesthetics
      role: Violet-to-cyan gradient register, neon-on-dark chromatic discipline.

---

## 1. Visual Theme & Atmosphere

Qwik's marketing site is wired for kinetic energy. Open the page and
the first thing you feel is the gradient — `#ac7ef4` violet flowing
into `#18b6f6` electric blue, sweeping diagonally across the lightning-
bolt wordmark and bleeding behind the hero copy as a soft 40%-alpha
halo. The canvas is a cool near-black `#0a0e1a`, slightly bluer than
Astro's cosmos navy and softer than Solid's technical navy, and it
exists primarily as the ground from which the gradient emerges. This
is **speed-as-aesthetic**: the design language sells "instant" and
"resumable" by visually behaving like a charging arc.

The atmosphere is **electric, kinetic, edge-of-the-future**. Where
Solid leans engineering-document and Astro leans content-cosmic, Qwik
leans **runtime-as-lightning**. The gradient is the brand — not an
accent on top of the brand, not a flourish, but the literal expression
of the framework's pitch: violet (the slow, traditional execution) on
the left, electric blue (instant, resumed) on the right, the sweep
between them is the resumability arc. The lightning-bolt glyph is
what holds it together visually.

Depth comes from **tonal-blue layering plus a brand-tinted halo**.
Cards lift from `#0a0e1a` to `#1a2040`; hover brightens to `#252b50`.
The signature depth move is the **violet halo** (`#ac7ef466`, 40%
alpha, heavily blurred at 32px) that bleeds behind hero text and
primary CTAs, mimicking the corona of a charging arc. Borders are
uniform 8% white hairlines (`#ffffff14`); shadows are dark-tinted
and used sparingly. The gradient itself substitutes for most depth
moves — when a CTA needs to feel "lifted", it gets a violet glow,
not a drop shadow.

Type pairs **Inter** for body and most display with **Poppins** as
the optional brand-display alternate for select moments. The
geometric-rounded character of Poppins — when used — gives the
marketing a slightly playful kinetic register, but the bulk of the
type is Inter at heavy weights with negative tracking. Code blocks
sit on `#11162a` (one step lighter than canvas) with JetBrains Mono.
The dev-tool default mono is foregrounded as primary content.

**Key Characteristics**

- Cool near-black canvas (`#0a0e1a`) — slight blue tilt, never warm
- Violet-to-cyan gradient (`#ac7ef4` → `#18b6f6`) as primary brand
- Lightning-bolt glyph in the wordmark — angular, kinetic geometry
- Violet halo (`#ac7ef466`) as signature depth move
- 8% white hairlines for borders — uniform across the system
- Inter Display + Poppins (optional) for kinetic display character
- JetBrains Mono on `#11162a` code panels
- Dark-default — no light variant offered
- Card radii at 16px — slightly more rounded than Solid (12px) or Astro
- Brand discipline: only purple-violet to electric blue, no warm hues

## 2. Color Palette & Roles

### Primary

- **bg** (`#0a0e1a`): cool near-black, the canvas of every section
- **text** (`#ffffff`): primary copy, full strength
- **brand** (`#ac7ef4`): Qwik violet, left endpoint of the gradient
- **accent** (`#18b6f6`): electric blue, right endpoint
- **on-brand** (`#ffffff`): white ON the violet (button text)
- **on-accent** (`#0a0e1a`): near-black ON the cyan (legibility inversion)

### Brand & Dark

- **brand-strong** (`#8b5cf0`): pressed violet, hover-down
- **accent-strong** (`#0a9ad9`): pressed cyan
- **gradient-from** (`#ac7ef4`): the violet endpoint, used in linear-gradient declarations
- **gradient-to** (`#18b6f6`): the cyan endpoint
- **gradient-via** (`#7c3aed`): optional middle stop for thicker gradient compositions
- **glow** (`#ac7ef466`): 40% alpha violet halo, the brand's depth signature
- **glow-blue** (`#18b6f666`): 40% alpha cyan halo, secondary

### Accent

- **brand-soft** (`#ac7ef422`): 13% violet wash for callouts and badges
- **accent-soft** (`#18b6f622`): 13% blue wash
- **bg-soft** (`#11162a`): code-block surface, secondary panel
- **bg-strong** (`#1a2040`): card lift, raised surface

### Interactive

- **link** (`#18b6f6`): link picks up accent cyan, brightest ground-glow
- **link-hover** (`#33d4ff`): brighter cyan on hover
- **link-visited** (`#c4b5fd`): visited violet
- **selected** (`#ac7ef422`): selected-row violet tint
- **disabled-bg** (`#252b50`): disabled control surface
- **disabled-text** (`#5a6478`): disabled label

### Neutral Scale

- **text** (`#ffffff`): body, display
- **text-muted** (`#a8b1c2`): secondary copy, nav metadata
- **text-soft** (`#7a8499`): tertiary, deemphasized
- **text-faint** (`#5a6478`): quaternary helper labels
- **text-disabled** (`#3a4258`): disabled labels

### Surface & Borders

- **surface** (`#1a2040`): default card surface
- **surface-strong** (`#252b50`): hovered card
- **surface-muted** (`#0d1224`): pressed card
- **border** (`#ffffff14`): 8% white hairline, default
- **border-strong** (`#ffffff26`): 15% white, emphasized
- **border-subtle** (`#ffffff0a`): 4% white, near-invisible
- **border-brand** (`#ac7ef466`): violet 40% for branded borders (haloed cards)
- **divider** (`#ffffff14`): table rules

### Shadow Colors

Shadows are **deep-neutral on the dark canvas**, but the brand's depth signature is the **violet halo** — `rgba(172, 126, 244, 0.4)` blurred at 32px, used behind hero copy and primary CTAs. Where Stripe uses blue-tinted shadows on light grounds, Qwik uses violet-tinted glows on dark grounds — the inverse direction with the same brand-coloring intent.

### Semantic

- **success-bg** (`#0d2818`) / **success-text** (`#86efac`) / **success-border** (`#22c55e`)
- **warning-bg** (`#2a2010`) / **warning-text** (`#fbbf24`) / **warning-border** (`#f59e0b`)
- **danger-bg** (`#2a1414`) / **danger-text** (`#fca5a5`) / **danger-border** (`#ef4444`)
- **info-bg** (`#0c2030`) / **info-text** (`#7dd3fc`) / **info-border** (`#0ea5e9`)

## 3. Typography Rules

### Font Family

- **Primary display**: `Poppins`, fallback to `"Inter Display"`, `Inter`, system stack
- **Body**: `Inter`, fallback to `-apple-system`, `"system-ui"`, `"Segoe UI"`
- **Mono**: `"JetBrains Mono"`, fallback to `"Fira Code"`, `ui-monospace`, `Menlo`, `Consolas`
- **OpenType features used**: `ss01` (Poppins/Inter alternates), `cv01`/`cv11` (Inter character variants), `zero` (slashed zero in JetBrains Mono), `tnum` in benchmark tables

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| display-hero | Poppins | 88 | 700 | 1.0 | -0.025em | ss01 | Hero only |
| display-large | Poppins | 72 | 700 | 1.05 | -0.02em | — | Marketing H1 |
| display | Poppins | 56 | 700 | 1.1 | -0.018em | — | Section openers |
| h1 | Poppins | 48 | 700 | 1.1 | -0.015em | — | Page titles |
| h2 | Poppins | 36 | 700 | 1.2 | -0.012em | — | Sub-section headers |
| h3 | Poppins | 28 | 600 | 1.25 | -0.008em | — | Feature titles |
| h4 | Poppins | 22 | 600 | 1.3 | -0.005em | — | Card titles |
| h5 | Poppins | 18 | 600 | 1.4 | 0 | — | Sidebar headers |
| eyebrow | Inter | 12 | 600 | 1.4 | 0.12em | uppercase | Section labels |
| body-lg | Inter | 18 | 400 | 1.6 | -0.005em | — | Hero subhead |
| body | Inter | 16 | 400 | 1.6 | 0 | — | Default body |
| body-sm | Inter | 14 | 400 | 1.55 | 0 | — | Secondary body |
| caption | Inter | 13 | 500 | 1.5 | 0.01em | — | Metadata |
| micro | Inter | 11 | 600 | 1.4 | 0.04em | uppercase | Tags |
| code | JetBrains Mono | 14 | 400 | 1.6 | 0 | zero | Code blocks |
| code-sm | JetBrains Mono | 12 | 400 | 1.55 | 0 | zero | Inline code |
| code-tabular | JetBrains Mono | 14 | 500 | 1.5 | 0 | zero, tnum | Benchmark tables |

### Principles

1. **Poppins for display, Inter for body.** Poppins is geometric-rounded with broader x-height than Inter, lending the marketing a kinetic, slightly playful tone. The choice is deliberate: Poppins reads less Silicon-Valley than Geist, more "we are excited about this" than "we are serious infrastructure."
2. **Negative tracking on display, neutral on body.** Display rolls in tight (`-0.015em` to `-0.025em`); body sits at `0`. The kinetic register depends on tight display.
3. **One sans for body, one for display, one mono.** No secondary cuts, no italic display, no decorative faces.
4. **Slashed zero in mono.** OpenType `zero` is enabled across all mono surfaces.
5. **Eyebrow tracking is wider than peers.** At `0.12em`, eyebrows are slightly more spaced than Inter's typical `0.08em` — the wider tracking signals "label" with extra emphasis.
6. **Weight 700 is the display default.** Where Solid uses 600/700 and Bun uses 800, Qwik centers on 700 — the kinetic-bold register without going woodtype-heavy.

## 4. Component Stylings

### Buttons

**Primary (gradient)**: `linear-gradient(90deg, #ac7ef4, #18b6f6)` background, `#ffffff` text, 10px radius, weight 600 in Poppins, padding `14px 28px`. Hover adds violet halo (`#ac7ef466 0 0 24px`) and brightens 5%. The signature CTA — used for "Get started", "Read the docs."

**Ghost**: transparent background, `#ffffff` text, 1px solid `#ffffff26` border, 10px radius, weight 500. Hover fills to `#ffffff0a` and border deepens to `#ffffff40`.

**Violet (signature)**: `#ac7ef4` solid background, `#0a0e1a` near-black text, 10px radius, weight 600. Hover deepens to `#8b5cf0` with white text.

**Link button**: transparent, `#18b6f6` cyan text, weight 500, underline on hover.

### Cards

**Default**: `#1a2040` background, 1px solid `#ffffff14` hairline, 16px radius, padding `24px`, ambient `rgba(0, 0, 0, 0.2) 0 4px 12px` shadow. Hover lifts to `#252b50` background.

**Haloed (signature)**: `#1a2040` background, 1px solid `#ac7ef466` violet border, 16px radius, padding `24px`, violet halo shadow `rgba(172, 126, 244, 0.2) 0 0 32px`. Used for featured CTAs or primary feature cards — the brand's depth-and-energy moment.

### Badges & Tags

`#ac7ef422` (13% violet) background, `#ac7ef4` violet text, 9999 (pill) radius, padding `4px 10px`, weight 600, mono font. Cyan variant for secondary tags: `#18b6f622` background, `#18b6f6` text.

### Inputs

`#11162a` background, `#ffffff` text, 1px solid `#ffffff26` border, 10px radius, padding `10px 14px`. Focus ring: `0 0 0 3px rgba(172, 126, 244, 0.4)` — the violet halo. Placeholder: `#5a6478`.

### Navigation

`#0a0e1acc` (80% near-black) with `12px` backdrop-blur, 1px solid `#ffffff14` bottom border, 64px height. Lightning-bolt glyph + "Qwik" wordmark on the left, primary nav center, gradient CTA right.

### Code blocks

`#11162a` (one step lighter than canvas) background, `#e6e6e6` near-white text, 12px radius, padding `20px 24px`, JetBrains Mono at 14px. Syntax highlighting: violet for keywords (matches brand), cyan for strings, near-white for identifiers, soft gray for comments.

### Lightning-bolt glyph

The wordmark glyph is the signature visual element. Used at multiple scales — favicon (16px), nav (24px), feature illustrations (~80–120px), hero callouts (~200px). Always rendered with the gradient fill `linear-gradient(135deg, #ac7ef4, #18b6f6)` — never solid-colored, never gradient-rotated to vertical.

## 5. Layout Principles

### Spacing System

Base unit is **4px**. Scale: `2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160`. Density is **mid** — 96px section padding, 24px card padding, 16px between elements.

### Grid & Container

Container caps at **1280px** with **24px gutters** (slightly wider than Solid's 1200px). Prose width: 720px. The grid is 12-column with frequent diagonal-element layouts — feature cards offset slightly, gradient bars sweeping at angles — that visually echo the lightning-bolt geometry.

### Whitespace Philosophy

The dark canvas absorbs whitespace as void rather than as paper. Qwik compensates by using more contained layouts than light-canvas peers — sections often have explicit border-top/border-bottom hairlines to contain the page rather than letting elements float in deep space.

### Section Cadence

Canvas runs continuously; alternation happens via the `bg-soft` (`#11162a`) bands and through gradient-band moments — full-width gradient strips that appear once or twice per page as section transitions.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | --- | --- |
| Micro | 2px | Border accents, dividers |
| Standard | 6px | Inline tags, micro-pills |
| Comfortable | 10px | Inputs, primary buttons |
| Relaxed | 14px | Secondary cards |
| Large | 16px | Default cards, code blocks |
| Featured | 20px | Hero illustration frames |
| Pill | 9999px | Badges, status pills |

Radii lean slightly more rounded than Solid's grid-aligned 8/12px ladder. The kinetic register supports the softer rounding — Qwik's brand is fast and modern, not engineering-document. The lightning-bolt geometry — sharp angular kinks — echoes through chevron icons, section dividers, and the wordmark itself.

## 7. Depth & Elevation

| Level | Treatment | Use |
| --- | --- | --- |
| 0 — Flat | No shadow, no border | Page canvas, full-bleed sections |
| 1 — Hairline | 1px solid `#ffffff14` | Section dividers, subtle cards |
| 2 — Lifted | 1px border + `rgba(0,0,0,0.2) 0 4px 12px` | Default cards |
| 3 — Hovered | Lifted + brighter surface (`#252b50`) | Card hover |
| 4 — Elevated | `rgba(0,0,0,0.4) 0 12px 24px -8px` | Modals, popovers |
| 5 — Violet-haloed | `rgba(172, 126, 244, 0.4) 0 0 32px` | Featured CTAs, primary feature cards |
| 6 — Cyan-haloed | `rgba(24, 182, 246, 0.4) 0 0 32px` | Secondary brand emphasis (rare) |

**Shadow Philosophy** — Qwik is a **brand-glow depth** brand. Standard cards use deep neutral shadows on the dark canvas, but the brand's signature depth is the **violet halo** — a 40%-alpha violet circle blurred at 32px, used behind hero copy and primary CTAs. The halo mimics the corona of a charging arc; it is the literal visual translation of "resumable execution as electricity." Pure neutral shadows are present but understated; the brand-tinted glow does the emotional work.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — feature reveals
- **Electric**: `cubic-bezier(0.16, 1, 0.3, 1)` — snappy, expo-out, kinetic — used on gradient sweeps, halo entrances, brand moments

### Durations

- **Fast (120ms)**: hover color shifts, link underline, badge state
- **Standard (200ms)**: button hover lift, halo fade-in, focus ring
- **Slow (360ms)**: section reveals, modal entrance, gradient sweeps
- **Page (420ms)**: route transitions

### Per-component Micro-states

- **Button hover (gradient)**: violet halo fades in over 200ms, brightness +5%, no translateY (the halo is the lift)
- **Card hover**: surface brightens from `#1a2040` to `#252b50` over 200ms; if haloed card, halo intensifies from 0.2 to 0.4 alpha
- **Link hover**: underline grows 0→100% in 120ms; color brightens from `#18b6f6` to `#33d4ff`
- **Lightning-bolt glyph**: subtle gradient shimmer on hover — the gradient angle rotates 15° over 360ms ease-electric, then snaps back
- **Page enter**: hero gradient sweeps in from left to right over 360ms ease-electric, mimicking the resumability arc
- **Focus**: 3px violet halo fades in over 120ms

### Page Transitions

420ms cross-fade with 24px translateY enter. Hero gradient sweeps in as part of the page-load animation. Reduced-motion strips this entirely.

### Reduced Motion

`prefers-reduced-motion: reduce` honored. Gradient sweeps freeze (no rotation, no shimmer). Halos remain static (no fade-in pulse). translateY transforms become opacity-only fades. Page transitions become instantaneous. Focus rings remain visible.

## 9. Accessibility & A11y

### Contrast Pairs

- **Body on canvas** (`#ffffff` on `#0a0e1a`): **17.6:1** — AAA at all sizes
- **Muted on canvas** (`#a8b1c2` on `#0a0e1a`): **8.2:1** — AAA
- **Body on violet** (`#ffffff` on `#ac7ef4`): **4.5:1** — AA at body sizes (button text)
- **Body on cyan** (`#0a0e1a` on `#18b6f6`): **12.4:1** — AAA (the on-accent inversion)
- **Link on canvas** (`#18b6f6` on `#0a0e1a`): **8.6:1** — AAA
- **Code text on code-bg** (`#e6e6e6` on `#11162a`): **14.8:1** — AAA

### Focus Indicators

3px solid `rgba(172, 126, 244, 0.4)` violet ring with 2px offset. Consistent across buttons, links, inputs, interactive cards. Visible on dark surfaces.

### ARIA Patterns

- **Combobox**: `role="combobox"` with `aria-expanded`, `aria-controls`, `aria-activedescendant`
- **Dialog**: `role="dialog"` `aria-modal="true"`, focus trap, restore focus on close
- **Tooltip**: `role="tooltip"` with `aria-describedby`
- **Tabs**: `role="tablist"` / `role="tab"` / `role="tabpanel"` with arrow-key navigation
- **Code-copy**: `aria-label="Copy code"` with polite live region

### Keyboard Navigation

- Tab order follows visual order
- Skip-to-content link visually hidden until focused
- Escape closes modals; Tab cycles within
- Code blocks: Tab to copy button, Enter to copy, focus returns

### Screen Reader Hints

- Lightning-bolt glyph: `aria-hidden="true"` when decorative; `aria-label="Qwik"` when used as logo
- Decorative SVGs: `aria-hidden="true"`
- Code blocks: language announced via `aria-label`
- Gradient backgrounds: never communicate information through gradient alone

### Reduced Motion

See §8. Brand-glow effects (halos) freeze at static state when reduced motion is honored.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Notes |
| --- | --- | --- |
| Mobile | < 640px | Single column, halos scale to 24px blur |
| Tablet | 640–1024px | 8-column grid, hero stacks |
| Desktop | 1024–1280px | Full 12-column grid |
| Wide | 1280–1536px | Container caps at 1280px |
| Ultra-wide | > 1536px | Container holds, side gutters expand |

### Touch Targets

Minimum 44×44px on mobile. Buttons expand to `16×32px` padding on mobile. Nav links get 48px height.

### Collapsing Strategy

- **Hero**: 12-col → single-col; gradient halo scales 50%, headline drops one tier
- **Feature grid**: 3-up desktop → 2-up tablet → 1-up mobile
- **Code blocks**: full-bleed mobile, padded desktop
- **Navigation**: horizontal nav becomes hamburger drawer at < 1024px
- **Haloed cards**: halo blur scales down on mobile to avoid overwhelming small screens

### Image Behavior

Lightning-bolt glyph is SVG with gradient defs — scales without loss. Marketing illustrations use `srcset` 1x/2x/3x. Card images crop to `aspect-ratio: 16/9` desktop, `4/3` mobile.

### Container Queries

Used in feature cards: at < 480px container width, internal layout collapses from horizontal to vertical regardless of viewport.

## 11. Content & Voice

### Tone

**Kinetic-technical, edge-of-the-future.** Qwik's voice is excited about speed. Where Solid says "fine-grained reactivity" with engineering reserve, Qwik says "instant" with a slight lean forward. The technical authority is real — resumability, hydration-free execution — but the register is energetic, almost evangelical.

### Microcopy Patterns

- **Button verbs**: prefer kinetic actions ("Get started", "Try it now", "See it in action") with slight enthusiasm
- **Error messages**: lead with the problem, then the fix, with a hint of forward-motion. Example: `Hydration mismatch detected. Qwik resumes — no hydration needed. Make sure your component is server-resumable.`
- **Success confirmations**: brief, can use exclamation-marked when celebratory ("Resumed!" "Loaded instantly")
- **Loading states**: avoid; Qwik's brand is "instant", so visible loading is off-brand. If genuinely deferred, use skeleton with a subtle gradient shimmer

### Empty States

What they say: "No routes registered yet. Try `qwik new route /about` to scaffold one." (Action-shaped, command-named.)

What they don't say: "It looks like you haven't added any routes." (Too apologetic; Qwik leans confident.)

### CTA Verb Conventions

- **Primary**: "Get started" / "Try Qwik" / "Read the docs"
- **Secondary**: "View benchmarks" / "Explore examples" / "See it on GitHub"
- **Footer CTA**: "Build something fast" — speed-anchored
- **Not used**: "Sign up free", "Buy now" — Qwik is open source

## 12. Dark Mode & Theming

**Dark IS the default — no light variant offered.**

Qwik's identity is dark-canvas, gradient-on-dark, halo-on-dark. A light variant would erase the violet halo's emotional impact (halos require dark grounds to glow), would flatten the gradient's saturation against white, and would invert the brand's "edge-of-the-future" register into something closer to corporate SaaS.

The only light surface on the entire site is occasional inverse moments — pricing tables, contrast callouts — where `#ffffff` background is used deliberately to break the dark continuity for emphasis. These appear once or twice per page maximum.

If a light variant ships in the future, the gradient endpoints would need to deepen significantly (`#7c3aed` to `#0ea5e9`) and the halo would need to become a soft drop shadow rather than a glow. But until then, dark is the only mode and the only mode that captures the brand voice.

## 13. Lineage & Influences

Qwik's design language sits at the intersection of three lineages. From **Stripe**, Qwik inherits the diagonal-gradient hero treatment as primary brand surface — both brands commit to a single gradient as the visual signature. From **Linear**, Qwik inherits the brand-tinted halo behind hero copy as a depth strategy. From **Vercel**, the dark-canvas dev-tool template with single dominant accent. From **Builder.io** (Qwik's parent company), the saturated-electric-accents-on-dark-grounds discipline. From **synthwave/vaporwave aesthetics**, the violet-to-cyan gradient register and the neon-on-dark chromatic logic.

What Qwik rejects: light-canvas defaults (Stripe, Deno, Bun), monochrome accent (Solid's blue-on-blue), warm hues entirely (Bun, Astro's cosmos navy with warm twilight). The brand's chromatic discipline is rigorously cool — purple-violet to electric blue, no exceptions.

**Named influences**

- **Stripe** — diagonal-gradient hero treatment as primary brand surface. https://stripe.com
- **Linear** — brand-tinted halo behind hero copy as depth strategy. https://linear.app
- **Vercel** — dark-canvas dev-tool template with single dominant accent. https://vercel.com
- **Builder.io** — parent-company aesthetic, saturated electric accents on dark. https://www.builder.io
- **Synthwave/vaporwave aesthetics** — violet-to-cyan gradient register, neon-on-dark.

## 14. Do's and Don'ts

### Do's

- **Do** lean on the violet-to-blue gradient as the primary brand surface — wordmark, CTA, hero halo. Single accent, no pairing with other hues.
- **Do** use Poppins for display when going for kinetic energy. Inter is the safe fallback; Poppins is the brand voice.
- **Do** apply the soft violet halo (`#ac7ef466` blurred 32px) behind hero copy — it is the brand's depth and energy signal.
- **Do** keep the canvas at exact `#0a0e1a`. Lighter navy reads as Solid; warmer navy reads as Astro.
- **Do** use the lightning-bolt glyph at multiple scales — favicon, nav, feature illustrations, hero callouts.
- **Do** pair white-on-violet for buttons, near-black-on-cyan for legibility moments. The on-brand pair is white; the on-accent inversion is `#0a0e1a`.
- **Do** use 8% white hairlines uniformly across the system. Borders should be invisible until they need to articulate structure.
- **Do** lean on JetBrains Mono in code surfaces. The dev-tool default keeps the brand grounded.
- **Do** use violet halos on featured CTAs, cyan halos sparingly. Halos are scarce by design — one or two per page.
- **Do** keep section padding at 96px. The dark canvas needs breathing room to prevent claustrophobia.

### Don'ts

- **Don't** flatten the gradient to a single color. Both endpoints — the violet and the blue — must appear together; either alone reads as Astro or Solid.
- **Don't** lighten the canvas to pure navy or warm twilight. The exact `#0a0e1a` cool near-black is what holds the gradient's brightness.
- **Don't** mix in green or warm accents. Qwik's chromatic surface is exclusively cool — purple-violet to electric blue, no exceptions.
- **Don't** use white-on-cyan for buttons. The legibility falls below AA — use `#0a0e1a` near-black ON the cyan instead.
- **Don't** apply the gradient to large surfaces. The hex pair is too saturated for full backgrounds; reserve for buttons, wordmark, hero halos, and small feature graphics.
- **Don't** use drop shadows where halos belong. Halos are the brand's depth signature; drop shadows undermine the kinetic register.
- **Don't** rotate the gradient angle freely. The brand convention is `90deg` (left-to-right) for buttons, `135deg` for the wordmark glyph. Other angles read as off-brand.
- **Don't** use solid backgrounds for the lightning-bolt glyph. The gradient fill is non-negotiable.
- **Don't** introduce a light mode as the default. The brand identity depends on the dark canvas.
- **Don't** use Berkeley Mono or other mono families. JetBrains is the brand-default.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #0a0e1a
bg-soft: #11162a
surface: #1a2040
text: #ffffff
text-muted: #a8b1c2
brand: #ac7ef4 (violet)
accent: #18b6f6 (cyan)
gradient: linear-gradient(90deg, #ac7ef4, #18b6f6)
glow: #ac7ef466 (40% violet halo)
border: #ffffff14 (8% white)
link: #18b6f6
```

### Example Component Prompts

1. *"Create a hero with an 88px Poppins 700 headline at -0.025em tracking, 18px Inter body subhead, a violet-to-cyan gradient CTA button (`linear-gradient(90deg, #ac7ef4, #18b6f6)`) with white text and weight 600. Behind the hero copy, place a violet halo (`rgba(172, 126, 244, 0.4)` blurred 32px). Canvas is `#0a0e1a`. Lightning-bolt glyph anchors the wordmark at top-left."*
2. *"Design a haloed feature card with `#1a2040` background, 1px solid `#ac7ef466` violet border, 16px radius, 24px padding, violet halo shadow (`rgba(172, 126, 244, 0.2) 0 0 32px`), a 28px Poppins 600 title, 16px Inter body. On hover, halo intensifies to 0.4 alpha."*
3. *"Build a dark code block with `#11162a` background (one step lighter than canvas), `#e6e6e6` near-white text, JetBrains Mono at 14px, 12px radius, 20px×24px padding, slashed-zero enabled, violet keyword highlighting (`#ac7ef4`), cyan strings (`#18b6f6`)."*
4. *"Create a ghost button: transparent background, white text, 1px solid `#ffffff26` border, 10px radius, weight 500 in Poppins, padding 14px 28px. Hover fills to `#ffffff0a` and border deepens to `#ffffff40`."*
5. *"Render the navigation: 64px height, `#0a0e1acc` background with 12px backdrop-blur, 1px `#ffffff14` bottom border, lightning-bolt glyph (gradient fill) + 'Qwik' wordmark on left, primary nav center, gradient CTA right."*
6. *"Add a violet badge: `#ac7ef422` (13% violet) background, `#ac7ef4` violet text, 9999 (pill) radius, padding 4px 10px, weight 600, JetBrains Mono. Used for version numbers and feature tags."*

### Iteration Guide

1. **Verify the canvas.** If the bg is not exactly `#0a0e1a`, the brand has drifted. Lighter navy reads as Solid; warmer navy reads as Astro.
2. **Confirm gradient direction.** Buttons use `90deg` (left-to-right); the wordmark glyph uses `135deg`. Other angles are off-brand.
3. **Audit halo presence.** If there is no violet halo behind hero copy or featured CTAs, the brand's depth signature is missing. Add `rgba(172, 126, 244, 0.4)` blurred at 32px.
4. **Check display family.** If the hero feels generic, push to Poppins. Inter is the safe fallback but loses the kinetic personality.
5. **Verify on-brand pairing.** White on violet is correct; near-black on cyan is the legibility inversion. White on cyan fails AA — never ship that.
6. **Confirm card radius at 16px.** If cards are at 8 or 12px, they read as Solid. Qwik's slightly-rounder 16px is part of the kinetic register.
7. **Audit gradient surface.** The gradient should appear on wordmark, CTAs, and 1–2 hero illustrations maximum. If covering more, the brand has flattened toward marketing template.
8. **Check border discipline.** All hairlines should be `#ffffff14` (8% white) by default. Random colored or thicker borders break the system.
