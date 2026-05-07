---
name: Raycast
tagline: Near-black canvas, glowing keycaps, monospaced shortcut chips — a marketing site that thinks like a launcher.
updated_at: 2026-05-04T21:08:09+12:00
published_at: 2026-05-03T10:27:49+12:00
author: webdesignhot
source_url: https://www.raycast.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, minimal, sans, mono, dense, structured]
preview_swatch: ['#07080a', '#56c2ff', '#f5f5f7']
related: [linear, vercel, anthropic]
description: 'Raycast''s marketing site mirrors the launcher itself — a near-black `#07080a` canvas, Inter at 600 for headlines, JetBrains Mono shortcut chips that pretend to be live keycaps, and a four-step `--color-bg-100/200/300/400` tonal ladder for surface lift instead of shadows. HSL-defined accent hues (blue at 202°/100%/67%, green at 151°/59%/59%) read as OS-level system colors rather than marketing accents. The signature visual moment is a red gradient hero stripe paired with full-bleed product UI screenshots — the chrome IS the in-product chrome at marketing scale.'

colors:
  bg: '#07080a'                # canvas — body backdrop, all surfaces lift from this
  bg-100: '#101111'             # first-tier elevated panel — cards, code blocks
  bg-200: '#18191a'             # second tier — input fields, key caps base
  bg-300: '#313133'             # third tier — popovers
  surface: '#0d0d0d'            # primary card surface
  surface-elevated: '#101111'   # elevated panel
  surface-card: '#121212'       # command palette card body
  surface-key-start: '#121212'  # top of keycap gradient
  surface-key-end: '#0d0d0d'    # bottom of keycap gradient
  text: '#f4f5f7'               # primary copy ≈ hsl(240,11%,96%)
  text-strong: '#ffffff'        # display emphasis
  text-200: '#c2c7ca'           # secondary copy and subdued labels
  text-300: '#78787c'           # captions, footnotes
  text-400: '#5e6366'           # muted
  text-faint: '#434345'         # disabled
  brand: '#56c2ff'              # signature blue accent ≈ hsl(202,100%,67%)
  blue: '#56c2ff'               # accent blue
  blue-soft: 'rgba(86, 194, 255, 0.15)'  # tinted background
  red: '#ff6363'                # utility red
  red-soft: 'rgba(255, 99, 99, 0.15)'
  green: '#5fd9a0'              # utility green ≈ hsl(151,59%,59%)
  green-soft: 'rgba(95, 217, 160, 0.15)'
  yellow: '#ffc233'             # utility yellow ≈ hsl(43,100%,60%)
  yellow-soft: 'rgba(255, 194, 51, 0.15)'
  primary-cta-bg: 'rgba(255, 255, 255, 0.815)'  # near-white pill, slightly translucent
  primary-cta-text: '#18191a'
  primary-cta-pressed: 'rgba(232, 232, 232, 0.815)'
  hero-stripe-start: '#ff5757'  # red gradient hero stripe top
  hero-stripe-end: '#a1131a'    # red gradient hero stripe bottom
  link: '#56c2ff'               # accent blue link
  link-hover: '#7dd3ff'         # lighter on hover
  border: '#262a2c'             # ≈ hsl(195,5%,15%) — desaturated, never pure grey
  border-soft: 'rgba(255, 255, 255, 0.08)'   # softer divider
  border-strong: 'rgba(255, 255, 255, 0.16)' # stronger panel outline
  semantic-success: '#5fd9a0'   # mirrors utility green
  semantic-warning: '#ffc233'   # mirrors utility yellow
  semantic-danger: '#ff6363'    # mirrors utility red
  semantic-info: '#56c2ff'      # mirrors utility blue
  on-brand: '#07080a'           # ink on blue accent
  on-dark: '#ffffff'             # text on dark surfaces

typography:
  display:
    family: 'Inter, "Inter Fallback", -apple-system, BlinkMacSystemFont, system-ui, sans-serif'
    weights: [400, 500, 600]
    opentype: ['kern', 'liga', 'calt', 'ss03']
  body:
    family: 'Inter, "Inter Fallback", -apple-system, BlinkMacSystemFont, system-ui, sans-serif'
    weights: [400, 500]
    opentype: ['kern', 'liga', 'calt', 'ss03']
  mono:
    family: '"JetBrains Mono", "JetBrains Mono Fallback", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    weights: [400, 500, 600]
    opentype: ['kern', 'tnum']
  scale:
    display-hero:   { size: 64, weight: 600, lineHeight: 1.10, tracking: '0',       family: display, opentype: 'kern, ss03' }
    display-large:  { size: 56, weight: 500, lineHeight: 1.17, tracking: '0.003em', family: display, opentype: 'kern, ss03' }
    h1:             { size: 40, weight: 600, lineHeight: 1.15, tracking: '0',       family: display, opentype: 'kern, ss03' }
    h2:             { size: 32, weight: 500, lineHeight: 1.20, tracking: '0.003em', family: display, opentype: 'kern, ss03' }
    h3:             { size: 24, weight: 500, lineHeight: 1.30, tracking: '0.003em', family: display, opentype: 'kern, ss03' }
    h4:             { size: 20, weight: 500, lineHeight: 1.40, tracking: '0.003em', family: display, opentype: 'kern, ss03' }
    body-large:     { size: 18, weight: 400, lineHeight: 1.60, tracking: '0',       family: body, opentype: 'kern, ss03' }
    body:           { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',       family: body, opentype: 'kern, ss03' }
    body-small:     { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',       family: body, opentype: 'kern, ss03' }
    label-mono:     { size: 11, weight: 500, lineHeight: 1.40, tracking: '0.04em',  family: mono, opentype: 'tnum', transform: 'uppercase' }
    button:         { size: 14, weight: 500, lineHeight: 1.00, tracking: '0.003em', family: body, opentype: 'kern, ss03' }
    button-small:   { size: 13, weight: 500, lineHeight: 1.00, tracking: '0.003em', family: body, opentype: 'kern, ss03' }
    link:           { size: 16, weight: 500, lineHeight: 1.40, tracking: '0.005em', family: body, opentype: 'kern, ss03' }
    caption:        { size: 13, weight: 400, lineHeight: 1.40, tracking: '0.002em', family: body, opentype: 'kern, ss03' }
    caption-small:  { size: 12, weight: 400, lineHeight: 1.50, tracking: '0.005em', family: body, opentype: 'kern, ss03' }
    micro:          { size: 11, weight: 500, lineHeight: 1.30, tracking: '0.04em',  family: body }
    code-body:      { size: 13, weight: 400, lineHeight: 1.50, tracking: '0',       family: mono }
    code-bold:      { size: 13, weight: 500, lineHeight: 1.50, tracking: '0',       family: mono }
    code-label:     { size: 11, weight: 500, lineHeight: 1.40, tracking: '0.04em',  family: mono, transform: 'uppercase' }
    keycap:         { size: 13, weight: 400, lineHeight: 1.40, tracking: '0',       family: mono }

radius:
  none: 0
  micro: 2
  xs: 4
  sm: 6
  md: 8
  lg: 10
  xl: 16
  xxl: 24
  featured: 20
  pill: 9999

spacing:
  base: 4
  xxs: 2
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
  xxl: 32
  section-sm: 64
  section: 96
  section-lg: 168
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96, 112, 168, 224]

layout:
  page-width: 1204
  prose-width: 720
  header-height: 76
  grid-gap: 32

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-entrance: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — keycap glow pulses pause; transforms collapse to opacity'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0, 0, 0, 0.20) 0 1px 2px'
  standard: 'rgba(0, 0, 0, 0.30) 0 4px 12px'
  elevated: 'rgba(0, 0, 0, 0.50) 0 12px 32px'
  deep: 'rgba(0, 0, 0, 0.70) 0 24px 48px'
  ring: '0 0 0 2px #56c2ff'
  keycap: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.40)'

accessibility:
  contrast-text-on-bg: 16.8         # #f4f5f7 on #07080a — AAA
  contrast-text-on-brand: 9.4       # #07080a on #56c2ff — AAA
  contrast-link-on-bg: 7.1          # #56c2ff on #07080a — AAA at body
  contrast-soft-on-bg: 8.9          # #c2c7ca on #07080a — AAA
  focus-ring: '2px solid #56c2ff with 2px offset on #07080a canvas'
  reduced-motion-honored: true
  keyboard-nav: 'tab order follows visual; skip-link present; arrow keys nav command palette rows'

components:
  button-primary:
    background: 'rgba(255, 255, 255, 0.815)'
    text: '#18191a'
    radius: 8
    padding: '8px 16px'
    height: 36
    font: button
    hover: 'background rgba(255, 255, 255, 0.95)'
    active: 'background rgba(232, 232, 232, 0.815)'
    use: 'primary CTA — Download for Mac / Get Started, near-white pill on dark canvas'
  button-secondary:
    background: 'transparent'
    text: '#f4f5f7'
    border: '1px solid #262a2c'
    radius: 8
    padding: '8px 16px'
    height: 36
    font: button
    hover: 'background #101111; border rgba(255, 255, 255, 0.16)'
    use: 'secondary action — Watch demo / View on GitHub'
  button-tertiary:
    background: '#101111'
    text: '#f4f5f7'
    radius: 8
    padding: '8px 16px'
    height: 36
    font: button
    hover: 'background #18191a'
    use: 'tertiary action — outlined panel'
  button-ghost:
    background: 'transparent'
    text: '#f4f5f7'
    radius: 8
    padding: '6px 12px'
    font: button
    hover: 'background rgba(255, 255, 255, 0.04)'
    use: 'inline text-link CTA'
  button-danger:
    background: '#ff6363'
    text: '#07080a'
    radius: 8
    padding: '8px 16px'
    font: button
    hover: 'background #ff4d4d'
    use: 'destructive confirms (rare on marketing)'
  install-button:
    background: 'transparent'
    text: '#f4f5f7'
    radius: 8
    padding: '6px 14px'
    font: button
    use: 'extension store install button — outlined inline'
  input:
    background: '#101111'
    text: '#f4f5f7'
    border: '1px solid #262a2c'
    radius: 8
    padding: '8px 12px'
    height: 36
    focus: 'border #56c2ff; ring 0 0 0 2px rgba(86, 194, 255, 0.20)'
    use: 'search / email / form input'
  store-search-bar:
    background: '#101111'
    text: '#f4f5f7'
    radius: 8
    padding: '10px 16px'
    height: 44
    use: 'extension store search bar — taller than standard input'
  command-palette-row:
    background: 'transparent'
    text: '#f4f5f7'
    radius: 6
    padding: '6px 10px'
    use: 'command palette row — default'
  command-palette-row-active:
    background: '#121212'
    text: '#ffffff'
    radius: 6
    padding: '6px 10px'
    use: 'command palette row — selected (keyboard focus)'
  command-palette-card:
    background: '#0d0d0d'
    text: '#f4f5f7'
    radius: 10
    padding: 0
    border: '1px solid #262a2c'
    shadow: 'rgba(0, 0, 0, 0.50) 0 12px 32px'
    use: 'command palette card — hero mockup; full elevated chrome'
  feature-card-dark:
    background: '#0d0d0d'
    text: '#f4f5f7'
    border: '1px solid #262a2c'
    radius: 10
    padding: 24
    use: 'feature card on canvas — first elevation tier'
  feature-card-elevated:
    background: '#101111'
    text: '#f4f5f7'
    border: '1px solid #262a2c'
    radius: 10
    padding: 24
    hover: 'background #18191a; border rgba(255, 255, 255, 0.16)'
    use: 'interactive feature card — second elevation tier'
  pricing-card:
    background: '#0d0d0d'
    text: '#f4f5f7'
    border: '1px solid #262a2c'
    radius: 10
    padding: 32
    use: 'pricing tier card'
  pricing-card-featured:
    background: '#101111'
    text: '#f4f5f7'
    border: '1px solid #56c2ff'
    radius: 10
    padding: 32
    use: 'featured pricing tier — blue accent border, no colored ribbon'
  badge-pro:
    background: '#101111'
    text: 'rgba(255, 255, 255, 0.72)'
    radius: 4
    padding: '2px 6px'
    font: caption-small
    use: 'PRO label inside extension cards'
  badge-info-soft:
    background: 'rgba(86, 194, 255, 0.15)'
    text: '#56c2ff'
    radius: 4
    padding: '2px 8px'
    font: caption-small
    use: 'NEW / category badge — blue tint'
  badge-success-soft:
    background: 'rgba(95, 217, 160, 0.15)'
    text: '#5fd9a0'
    radius: 4
    padding: '2px 8px'
    font: caption-small
    use: 'success / OK badge — green tint'
  keycap:
    background: '#121212'
    text: '#c2c7ca'
    border: '1px solid #262a2c'
    radius: 4
    padding: '1px 6px'
    height: 20
    font: keycap
    shadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.40)'
    use: 'keyboard shortcut chip — real kbd element with gradient'
  pill-tab:
    background: 'transparent'
    text: '#c2c7ca'
    radius: 9999
    padding: '4px 10px'
    font: caption
    use: 'pill tab — default state'
  pill-tab-active:
    background: '#101111'
    text: '#f4f5f7'
    radius: 9999
    padding: '4px 10px'
    font: caption
    use: 'pill tab — active state'
  hero-stripe:
    background: 'linear-gradient(180deg, #ff5757 0%, #a1131a 100%)'
    use: 'red gradient hero stripe at top of homepage — three diagonal red stripes'
  nav-link:
    background: 'transparent'
    text: '#c2c7ca'
    font: body-small
    padding: '6px 12px'
    hover: 'text #f4f5f7'
    use: 'top-nav menu (Pro / Store / Manual / Changelog / Blog)'

dark-mode: optional

lineage:
  summary: |
    Raycast's web design is an extension of the launcher's visual
    language — every page reads like an over-sized command palette.
    The near-black `#07080a` canvas borrows the same off-black Linear
    popularised, but Raycast pushes further into chroma with
    HSL-defined utility hues (blue at 202°/100%/67%, green at
    151°/59%/59%) that read as OS-level system colours rather than
    marketing accents. Inter at 600 gives display type the engineered
    feel that Vercel established for dev-tool sites, but Raycast pairs
    it with JetBrains Mono shortcut chips that visually quote the
    product's keyboard-first ethos. The spacing token ladder
    (8/12/16/24/32/48/64/80/96/112/168/224) is unusually long — that
    range is what lets dense feature grids and cinematic hero sections
    live in the same template without changing rhythm. Where
    Apple-influenced sites soften depth with shadows, Raycast layers
    tonal `--color-bg-*` greys (16,17,17 → 24,25,26 → 49,49,51) for
    surface lift, and reserves shadow only for the keycap gradients
    (`--key-bg-start-color → end`). The signature visual moment is a
    red gradient hero stripe — three diagonal red bands across the top
    of the home page like a launch banner — paired with full-bleed
    product UI screenshots that show Raycast's actual command palette,
    store, and AI chat surfaces. The chrome IS the product chrome at
    marketing scale.
  influences:
    - name: 'Linear'
      role: 'Pioneered the near-black dark-mode marketing canvas and Inter-as-display approach for dev tools'
      url: 'https://linear.app'
    - name: 'Apple Human Interface Guidelines'
      role: 'HSL-driven system colour vocabulary (blue/green/red/yellow as semantic states, not brand decoration)'
      url: 'https://developer.apple.com/design/human-interface-guidelines/'
    - name: 'Vercel'
      role: 'Confidence in oversized Inter display type with tight 1.10 line-height as a hero pattern'
      url: 'https://vercel.com'
    - name: 'JetBrains Mono'
      role: 'Open-source mono used as shortcut chips, kbd elements, code samples — the keyboard-first identity'
      url: 'https://www.jetbrains.com/lp/mono/'
    - name: 'Inter ss03'
      role: 'Stylistic set 03 enabled site-wide — slightly narrower terminal forms (a, t)'
      url: 'https://rsms.me/inter/'
---

## 1. Visual Theme & Atmosphere

Raycast's marketing site is a near-black launcher pretending to be a website. The canvas sits at `#07080a` (`--color-bg`), display type is Inter 600 at 64px/1.10, and every "shortcut" graphic uses a real `kbd` rendered with the `--key-bg-start-color`/`--key-bg-end-color` gradient — so the page itself demonstrates the product's typography and key shapes without an animation ever firing.

Unlike Linear's monochrome restraint or Vercel's hyper-flat black-on-black, Raycast layers tonal greys (`--color-bg-100` through `--color-bg-300`, roughly 16/24/49 in lightness) and lets HSL-defined utility colours (`hsl(202,100%,67%)` blue, `hsl(151,59%,59%)` green) glow against them. The result is closer to a macOS menu bar than a marketing site — chromatic where it matters, monochrome everywhere else.

The signature visual moment is a **red gradient hero stripe** at the top of the homepage — three diagonal red bands (`#ff5757` → `#a1131a`) laid across like a launch banner, immediately establishing this as a product launch / brand moment rather than a generic SaaS landing page. The stripe sits above a full-bleed product UI screenshot that shows Raycast's actual command palette — the chrome IS the in-product chrome at marketing scale.

The spacing token ladder is unusually long — from 4px micro to 224px section. That range is what lets dense feature grids (16–24px gaps) and cinematic hero sections (168px breathing room) live in the same template without changing typographic rhythm. Reading the homepage feels like opening Spotlight at extra-large size: monochrome chrome with bright accent moments, keyboard shortcuts everywhere, density-forward.

**Key Characteristics:**
- Near-black `#07080a` canvas — matches launcher canvas exactly.
- Four-step tonal ladder (`bg-100`/`bg-200`/`bg-300`/`bg-400`) for surface lift instead of shadows.
- HSL-defined utility colors: blue 202° / green 151° / red 0° / yellow 43° — read as system colors.
- Inter at 600 with ss03 stylistic set enabled site-wide.
- JetBrains Mono on every keycap, shortcut chip, code sample.
- Near-white pill CTA (`rgba(255, 255, 255, 0.815)`) — slightly translucent, inverts on dark.
- Red gradient hero stripe — three diagonal bands at top of homepage.
- Spacing scale 4 → 224px — engineered for both dense grids and cinematic heroes.
- Container width 1204px; navbar height 76px; grid gap 32px.
- Keycap shadow: `inset` gradient mimicking physical key — only shadow on the page.

## 2. Color Palette & Roles

### Primary

- **Background** (`#07080a`): canvas — body backdrop, the value all surfaces lift from. Off-black with a hint of blue.
- **Text** (`#f4f5f7`): primary copy ≈ `hsl(240, 11%, 96%)` — slightly cool off-white.
- **Brand / Accent** (`#56c2ff`): signature blue ≈ `hsl(202, 100%, 67%)`. System-color saturation, not marketing accent.

### Brand & Dark

- **bg-100** (`#101111`): first-tier elevated panel — cards, code blocks. The most-used surface above canvas.
- **bg-200** (`#18191a`): second tier — input fields, key cap base.
- **bg-300** (`#313133`): third tier — popovers.
- **Surface** (`#0d0d0d`): primary card surface (slightly different from bg-100 — used for command palette card body).
- **Surface Card** (`#121212`): command palette card body, keycap top of gradient.
- **Surface Key Start** (`#121212`): top of keycap gradient.
- **Surface Key End** (`#0d0d0d`): bottom of keycap gradient.

### Accent (Utility Hues — HSL-defined)

These read as OS-level semantic states, not marketing decoration:

- **Blue** (`#56c2ff` ≈ `hsl(202, 100%, 67%)`): info, link, primary accent.
- **Green** (`#5fd9a0` ≈ `hsl(151, 59%, 59%)`): success, "online" status.
- **Red** (`#ff6363` ≈ `hsl(0, 100%, 70%)`): danger, error.
- **Yellow** (`#ffc233` ≈ `hsl(43, 100%, 60%)`): warning, attention.

Each utility hue ships with a soft variant: `rgba(hue, 0.15)` for tinted backgrounds (badges, indicators).

### Hero Stripe

- **Hero Stripe Start** (`#ff5757`): top of red gradient.
- **Hero Stripe End** (`#a1131a`): bottom of red gradient.

The three diagonal bands at the top of the homepage — like a launch banner / product reveal moment.

### Interactive

- **Link** (`#56c2ff`): accent blue.
- **Link Hover** (`#7dd3ff`): lighter on hover.
- **Focus Ring** (`2px solid #56c2ff`): blue ring with 2px offset on canvas.

### Neutral Scale

- **Text Strong** (`#ffffff`): display emphasis (rare).
- **Text** (`#f4f5f7`): primary copy.
- **Text 200** (`#c2c7ca`): secondary copy and subdued labels.
- **Text 300** (`#78787c`): captions, footnotes.
- **Text 400** (`#5e6366`): muted.
- **Text Faint** (`#434345`): disabled.

### Surface & Borders

- **Border** (`#262a2c` ≈ `hsl(195, 5%, 15%)`): desaturated, never pure grey. The system's primary depth tool above tonal layering.
- **Border Soft** (`rgba(255, 255, 255, 0.08)`): softer divider — nested rows.
- **Border Strong** (`rgba(255, 255, 255, 0.16)`): stronger panel outline — hover state, focus.

### Shadow Colors

- **Ambient** (`rgba(0, 0, 0, 0.20) 0 1px 2px`): minimal card lift (rare).
- **Standard** (`rgba(0, 0, 0, 0.30) 0 4px 12px`): hover elevation.
- **Elevated** (`rgba(0, 0, 0, 0.50) 0 12px 32px`): command palette card.
- **Keycap** (`inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.40)`): the signature inset gradient mimicking a physical key.

### CTA

- **Primary CTA Background** (`rgba(255, 255, 255, 0.815)`): near-white pill, slightly translucent.
- **Primary CTA Text** (`#18191a`): inverts on near-white.
- **Primary CTA Pressed** (`rgba(232, 232, 232, 0.815)`): press state.

### Semantic

Mirrors utility hues exactly:
- **Success** (`#5fd9a0`)
- **Warning** (`#ffc233`)
- **Danger** (`#ff6363`)
- **Info** (`#56c2ff`)

## 3. Typography Rules

### Font Family

- **Primary (display + body):** `Inter, "Inter Fallback", -apple-system, BlinkMacSystemFont, system-ui, sans-serif`. Loaded with an `Inter Fallback` so layout never reflows.
- **Mono companion:** `"JetBrains Mono", "JetBrains Mono Fallback", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`. Used for keycaps, shortcut chips, code, label-mono.
- **OpenType features site-wide:** `kern`, `liga`, `calt`, `ss03`. The **ss03 stylistic set** is the brand fingerprint — slightly narrower terminal forms (a, t, l) that give Raycast's text its precise, system-font feel.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Inter | 64 | 600 | 1.10 | 0 | kern, ss03 | Homepage h1 — single typographic block |
| display-large | Inter | 56 | 500 | 1.17 | 0.003em | kern, ss03 | Section h1 |
| h1 | Inter | 40 | 600 | 1.15 | 0 | kern, ss03 | Page h1 |
| h2 | Inter | 32 | 500 | 1.20 | 0.003em | kern, ss03 | Section heads |
| h3 | Inter | 24 | 500 | 1.30 | 0.003em | kern, ss03 | Sub-section heads |
| h4 | Inter | 20 | 500 | 1.40 | 0.003em | kern, ss03 | Card titles |
| body-large | Inter | 18 | 400 | 1.60 | 0 | kern, ss03 | Hero subhead |
| body | Inter | 16 | 400 | 1.55 | 0 | kern, ss03 | Default body |
| body-small | Inter | 14 | 400 | 1.55 | 0 | kern, ss03 | Footer body |
| label-mono | JetBrains Mono | 11 | 500 | 1.40 | 0.04em | tnum, uppercase | UPPERCASE eyebrow |
| button | Inter | 14 | 500 | 1.00 | 0.003em | kern, ss03 | CTA button label |
| button-small | Inter | 13 | 500 | 1.00 | 0.003em | kern, ss03 | Compact button |
| link | Inter | 16 | 500 | 1.40 | 0.005em | kern, ss03 | Inline link |
| caption | Inter | 13 | 400 | 1.40 | 0.002em | kern, ss03 | Caption |
| caption-small | Inter | 12 | 400 | 1.50 | 0.005em | kern, ss03 | Footer microcopy |
| micro | Inter | 11 | 500 | 1.30 | 0.04em | kern | UI hint |
| code-body | JetBrains Mono | 13 | 400 | 1.50 | 0 | tnum | Code sample |
| code-bold | JetBrains Mono | 13 | 500 | 1.50 | 0 | tnum | Inline emphasis in code |
| code-label | JetBrains Mono | 11 | 500 | 1.40 | 0.04em | tnum, uppercase | Code-block filename |
| keycap | JetBrains Mono | 13 | 400 | 1.40 | 0 | tnum | Real `kbd` element |

### Principles

- **Inter ss03 enabled site-wide.** This is the brand fingerprint — the stylistic set tightens terminal forms (a, t, l) for a precise, system-font feel that distinguishes Raycast's text from default Inter.
- **Display weight stays at 500–600.** Inter at 500 reads as engineered; Inter at 600 reads as confident. Below 500, type loses authority.
- **JetBrains Mono on every keycap, shortcut, code surface.** Pairing humanist sans with clearly geometric mono is what makes the keyboard-first identity legible.
- **Tight line-heights on display.** 1.10 at 64px keeps the hero reading as a single typographic block rather than two stacked lines.
- **Body sits at 16px / 1.55 line-height.** Generous enough to read at distance but tight enough that feature lists stack densely.
- **Positive tracking on body sizes.** Most marketing sites use neutral or negative tracking on body. Raycast pushes slightly positive (0.002em–0.005em) — same convention as macOS system fonts.

## 4. Component Stylings

### Buttons

**Primary (Near-White Pill)** — Background `rgba(255, 255, 255, 0.815)` (slightly translucent near-white), text `#18191a`, 8px radius, padding `8px 16px`, height 36px, button font (14/500). Hover background `rgba(255, 255, 255, 0.95)`. **Use:** primary CTA — Download for Mac / Get Started.

**Secondary (Outlined)** — Transparent background, `#f4f5f7` text, 1px `#262a2c` border, 8px radius. Hover: background `#101111`, border deepens to `rgba(255, 255, 255, 0.16)`. **Use:** Watch demo / View on GitHub.

**Tertiary (Filled)** — Background `#101111`, ink text, 8px radius. Hover background `#18191a`. **Use:** outlined panel button.

**Ghost** — Transparent background, ink text, 8px radius, padding `6px 12px`. Hover: `rgba(255, 255, 255, 0.04)` background. **Use:** inline text-link CTA.

**Danger** — Background `#ff6363`, ink text `#07080a`, 8px radius. Hover `#ff4d4d`. **Use:** destructive confirms (rare on marketing).

**Install Button** — Transparent background, ink text, 8px radius, padding `6px 14px`. Outlined inline. **Use:** extension store install button.

### Cards

**Feature Card Dark** — Background `#0d0d0d` (surface), 1px `#262a2c` border, 10px radius, 24px padding. **Use:** feature card on canvas — first elevation tier.

**Feature Card Elevated** — Background `#101111` (bg-100), 1px `#262a2c` border, 10px radius, 24px padding. Hover: background `#18191a`, border `rgba(255, 255, 255, 0.16)`. **Use:** interactive feature card — second elevation tier.

**Command Palette Card (Hero)** — Background `#0d0d0d`, 1px `#262a2c` border, 10px radius, 0 padding (rows fill edge-to-edge), elevated shadow `rgba(0, 0, 0, 0.50) 0 12px 32px`. Holds a multi-row command palette mockup. **Use:** hero region only — the page's most elevated chrome element.

**Pricing Card** — Background `#0d0d0d`, 1px `#262a2c` border, 10px radius, 32px padding.

**Pricing Card Featured** — Same shape as standard, but border becomes `1px solid #56c2ff` (blue accent). The blue border is the "highlighted tier" signal — no colored ribbon, no background change.

### Badges & Tags

**Badge Pro** — Background `#101111`, text `rgba(255, 255, 255, 0.72)`, 4px radius, `2px 6px` padding, caption-small font. **Use:** PRO label inside extension cards.

**Badge Info Soft** — Background `rgba(86, 194, 255, 0.15)`, text `#56c2ff`, 4px radius, `2px 8px` padding. Same shape for success-soft (green tint), warning-soft (yellow tint), danger-soft (red tint). **Use:** category badges — utility-color tinted.

**Pill Tab (Default)** — Transparent background, `#c2c7ca` text, 9999 radius, `4px 10px` padding, caption font. **Pill Tab Active** — Background `#101111`, ink text, same shape.

### Keyboard Shortcuts (signature)

**Keycap** — Background `#121212` (top of gradient), text `#c2c7ca`, 1px `#262a2c` border, 4px radius, `1px 6px` padding, height 20px, JetBrains Mono 13/400, **inset shadow** `inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.40)` (mimics a physical keycap). Built from `--key-bg-start-color` (`#121212`) blending into `--key-bg-end-color` (`#0d0d0d`). **Use:** every keyboard shortcut on the page is a real `kbd` element styled this way — never icon fonts.

### Inputs & Forms

**Text Input** — Background `#101111`, 1px `#262a2c` border, 8px radius, padding `8px 12px`, height 36px, body font. Focus: border `#56c2ff`, ring `0 0 0 2px rgba(86, 194, 255, 0.20)`.

**Store Search Bar** — Background `#101111`, 8px radius, padding `10px 16px`, height 44px (taller than standard input). **Use:** extension store search.

### Navigation

**Top Nav** — Background transparent over `#07080a` canvas, 76px height (taller than typical 64px). Layout: Raycast wordmark left, primary horizontal menu (Pro / Store / Manual / Changelog / Blog / Pricing), Sign In + Download CTA right.

**Nav Link** — Transparent background, `#c2c7ca` text, body-small font, padding `6px 12px`. Hover: text `#f4f5f7`.

### Decorative

**Hero Stripe** — Linear gradient `180deg, #ff5757 0%, #a1131a 100%`. Three diagonal red bands at the top of the homepage. Sits above the navigation.

**Code Block** — Background `#101111`, 1px `#262a2c` border, 8px radius, 16px padding, JetBrains Mono 13/400. Optional filename header in mono 11/500/0.04em uppercase.

**Command Palette Row** — Default: transparent background, ink text, 6px radius, `6px 10px` padding. **Active (keyboard focus)** — Background `#121212`, white text, same shape. Mimics actual product chrome.

## 5. Layout Principles

### Spacing System

- **Base unit:** 4px (some 2px micro tokens).
- **Scale:** 2 / 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 56 / 64 / 80 / 96 / 112 / 168 / 224.
- **Section padding:** 96px standard, 168px for cinematic hero sections.
- **Grid gap:** 32px (`--grid-gap`).
- **Card padding:** 24px standard, 32px for pricing.

### Grid & Container

- **Max content width:** 1204px (`--container-width`).
- **Navbar:** 1204px wide, 76px height (`--navbar-height`).
- **Bento / feature grid:** 32px gap, 2-3 column at desktop.
- **Editorial body:** 12-column grid.
- **Footer:** 5-column at desktop.

### Whitespace Philosophy

The unusually long spacing scale (4 → 224px) lets dense and cinematic regions coexist. Feature grids tighten to 16px gaps; hero sections breathe at 168px. This range is the deepest layout decision — fewer tokens would force compromises between density and air.

### Section Cadence

- Red hero stripe → dark hero with command palette mockup → 168px breathing → feature Bento grid → mid-page editorial section → product UI screenshot full-bleed → pricing → CTA → footer.
- Tonal continuity throughout — no light sections in the marketing chrome.
- The red stripe is the single chromatic break.

## 6. Shapes & Radius Scale

| Token | Value | Use |
|---|---|---|
| none | 0 | Reserved (rare flat edges) |
| micro | 2 | Inline pills (rare) |
| xs | 4 | **Keycaps, badges** — the smallest functional radius |
| sm | 6 | **Command palette rows** — slightly softer |
| md | 8 | **Buttons, inputs** — default |
| lg | 10 | **Cards, command palette card** — Raycast's signature card radius |
| xl | 16 | Larger feature cards (rare) |
| xxl | 24 | Hero containers (rare) |
| featured | 20 | Featured shells (rare) |
| pill | 9999 | Pill tabs, status dots |

The radius ladder is precise: 4 → 6 → 8 → 10 → 16 → 20 → 24. The 10px card radius is Raycast's signature — softer than 8 (button), sharper than 12 (Linear / Vercel cards). Mixing radii within a primitive is explicitly avoided: a button is 8px, a card is 10px, a hero shell is 20–24px.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Canvas | `#07080a` flat | Body bands, footer |
| 1 — bg-100 | `#101111` + 1px `#262a2c` | Feature cards, code blocks, inputs |
| 2 — bg-200 | `#18191a` + 1px `#262a2c` | Input fields, key cap base, hover states |
| 3 — bg-300 | `#313133` + 1px `rgba(255, 255, 255, 0.16)` | Popovers, tooltips |
| 4 — Command Palette | `#0d0d0d` + 1px `#262a2c` + elevated shadow | Hero command palette card |
| Keycap | `#121212` → `#0d0d0d` gradient + inset shadow | Real `kbd` elements only |

### Shadow Philosophy

Depth is achieved entirely through **tonal layering**, not shadows. The `--color-bg-100/200/300/400` ladder lifts cards, panels and popovers in discrete steps. The single shadow-bearing element on the page is the **keycap**, where `--key-bg-start-color` (#121212) blends into `--key-bg-end-color` (#0d0d0d) with an inset highlight to emulate physical keycap rounding. The hero command palette card uses a standard outset shadow as its single exception. Borders are `hsl(195, 5%, 15%)` — desaturated, never pure grey.

## 8. Interaction & Motion

### Easing & Duration

- **ease-standard:** `cubic-bezier(0.4, 0, 0.2, 1)` — material default.
- **ease-emphasized:** `cubic-bezier(0.2, 0, 0, 1)` — used for command palette row reveal.
- **ease-entrance:** `cubic-bezier(0, 0, 0.2, 1)` — content fade-in on scroll.
- **duration-fast:** 100ms — color transitions on hover.
- **duration-standard:** 200ms — opacity / transform on cards.
- **duration-slow:** 320ms — hero command palette mockup animation.

### Per-Component Micro-States

- **Button hover:** background opacity shift (`rgba(255, 255, 255, 0.815)` → `0.95`). No transform. 100ms.
- **Card hover (elevated feature):** background `#101111` → `#18191a`, border deepens. 200ms.
- **Link hover:** color `#56c2ff` → `#7dd3ff`. Underline appears. 100ms.
- **Input focus:** border `#262a2c` → `#56c2ff`, ring fades in over 100ms.
- **Command palette row hover:** background transparent → `#121212`. Mimics actual product chrome. 100ms.
- **Keycap glow pulse:** subtle `box-shadow` cycle on keycaps in the hero (idle animation, 2.4s cycle).

### Page Transitions

The hero command palette mockup auto-types a sequence of commands on first load. Sections fade in as user scrolls (translateY(8px) → 0, opacity 0 → 1, 320ms staggered).

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. When set:
- Keycap glow pulses pause completely.
- Hero command palette auto-type freezes; show first state.
- Card hover transforms collapse to opacity-only.
- On-scroll fade-ins become instant.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | WCAG |
|---|---|---|
| `#f4f5f7` text on `#07080a` canvas | 16.8 | AAA |
| `#07080a` on `#56c2ff` blue | 9.4 | AAA |
| `#c2c7ca` soft on `#07080a` | 8.9 | AAA at body |
| `#56c2ff` link on `#07080a` | 7.1 | AAA at body |
| `#5fd9a0` green on `#07080a` | 9.2 | AAA |
| `#18191a` text on `rgba(255, 255, 255, 0.815)` | 14.2 | AAA |

### Focus Indicators

2px solid `#56c2ff` blue ring with 2px offset on canvas. Applied to every interactive element — buttons, links, inputs, keycaps, nav, command palette rows. Never `outline: none` without replacement.

### ARIA Patterns

- **Combobox:** `role="combobox"` + `aria-expanded` + `aria-controls` for store search.
- **Listbox:** `role="listbox"` for command palette mockup; rows are `role="option"` with `aria-selected`.
- **Dialog:** `role="dialog"` + `aria-modal="true"` + focus trap.
- **kbd:** real `<kbd>` elements with text content (not icon-only).

### Keyboard Nav

- Tab order strictly visual.
- Skip-link present in header.
- Arrow keys navigate command palette mockup rows in hero.
- Cmd/Ctrl+K opens global search.
- Escape closes all modals.

### Screen Reader

- Decorative red hero stripe marked `aria-hidden="true"`.
- Keycaps include text content (no icon-only kbd).
- Command palette mockup includes `aria-label="Example: Raycast command palette in action"`.
- Utility-color badges include hidden context: "Category: Productivity".

### Reduced Motion

Honored — see §8.

## 10. Responsive Behavior

| Breakpoint | Range | Key Changes |
|---|---|---|
| Mobile | < 640px | display-hero 64→32px; command palette mockup compresses to single-row preview; feature grid 1-up; nav hamburger |
| Tablet | 640–1024px | display-hero 48px; feature grid 2-up; command palette mockup partial |
| Desktop | 1024–1280px | display-hero 56–64px; feature grid 3-up; full command palette mockup |
| Wide | > 1280px | Content caps at 1204px; full hero |

### Touch Targets

- Primary CTA: 36px height — at WCAG AA (padded internally for AAA at touch).
- Store search bar: 44px height — at AAA.
- Keycaps: 20px height (visual only, not interactive — keycaps are decorative).
- Nav links: 32px tap target padded externally.

### Collapsing Strategy

- Top nav switches to hamburger below 768px.
- Command palette mockup: full → partial (3 rows) → single-row preview as viewport narrows.
- Feature grid: 3-up → 2-up → 1-up.
- Pricing 3-up stacks below 768px.
- Hero red stripe: scales fluidly with viewport.

### Image Behavior

Product UI screenshots use `srcset` 1x/2x/3x. Command palette mockup is rendered as live HTML, not raster — scales without quality loss. Hero red stripe is CSS gradient (no image).

### Container Queries

Used inside command palette card — row layout reflows when card width drops below 480px.

## 11. Content & Voice

### Tone

Confident, technical, slightly playful. Raycast's voice sounds like a senior macOS engineer demoing at WWDC — informed, precise, generous with keyboard shortcuts. Sentences trend short. Headlines are declarative ("Your shortcut to everything"). The voice rewards keyboard-first users without alienating mouse-first ones.

### Microcopy Patterns

- **Button verbs:** "Download for Mac", "Get Started", "Sign In", "Watch demo", "Read the docs", "View on GitHub", "Install Extension".
- **Error recipe:** `[What failed] — [Why] — [What to do]`. Example: "Couldn't sync settings. Token expired. Sign in to continue."
- **Success confirmations:** terse — "Installed", "Saved", "Synced". No emoji on marketing.
- **Empty states:** instructional + slightly product-aware. "No commands match. Try a different keyword — or press ⌘ K to search."

### CTA Verb Conventions

- Primary: "Download for Mac" (homepage hero), "Get Started", "Try Raycast Pro".
- Secondary: "Watch demo", "View on GitHub", "Read the manual", "See pricing".
- Avoid: "Sign up now!", emoji-heavy CTAs, "Join thousands".
- Keyboard-first signal: shortcuts referenced everywhere — "Press ⌘ Space to launch" in body copy is canonical.

### Empty States

Raycast's empty states are product-aware. The extension store with no results says: "No extensions match. Try a different category — or press ⌘ K to search across all extensions." The keyboard reference IS the empty state.

## 12. Dark Mode & Theming

Raycast's marketing site is **dark-only**. The `#07080a` canvas matches the launcher's canvas exactly. A light variant exists inside the launcher (preference inside Settings), but the marketing site does not ship a light marketing chrome — the dark canvas IS the brand.

When users toggle to light mode in the launcher:
- `bg` → `#ffffff`
- `text` → `#18191a`
- `surface` → `#f5f5f7`
- `border` → `#e5e5e7`
- Utility hues shift to slightly darker variants for contrast on light: blue → `#0d80c8`, green → `#1f9a5f`, red → `#cc2626`, yellow → `#cc8a00`.

But this is product, not marketing.

## 13. Lineage & Influences

Raycast sits at the intersection of **Linear's near-black canvas tradition**, **Apple's HSL-driven system color vocabulary**, and **its own keyboard-first product identity**. It rejects the typical SaaS-cyan accent in favor of system-saturation hues that match macOS conventions exactly — blue at 202°, green at 151°, red at 0°, yellow at 43°. The result feels native to the platform Raycast extends.

The deepest design move is the **keycap as graphic primitive**. Where Linear renders shortcuts as text (`Cmd+K`) and Vercel renders them as monospaced inline code, Raycast renders every shortcut as a real `kbd` element with a custom inset gradient — `--key-bg-start-color` (#121212) blending to `--key-bg-end-color` (#0d0d0d) — so the page itself demonstrates the product's tactile keyboard-first identity.

The Inter ss03 stylistic set enabled site-wide is the type fingerprint. Raycast's text reads as slightly narrower than default Inter — a precision that distinguishes it from Linear (default Inter) and Vercel (Geist). The pairing of humanist Inter with geometric JetBrains Mono is deliberate: the contrast is what makes the keyboard-shortcut grammar legible.

**Named influences:**

- **Linear** — pioneered the near-black dark-mode marketing canvas and Inter-as-display.
- **Apple HIG** — HSL-driven system color vocabulary (blue/green/red/yellow as semantic states).
- **Vercel** — confidence in oversized Inter display with tight 1.10 line-height.
- **JetBrains Mono** (open-source) — used as keycaps, shortcut chips, code samples.
- **Inter ss03** — stylistic set that gives Raycast's text its precise, system-font feel.

## 14. Do's and Don'ts

### Do

- **Do** anchor the canvas at `#07080a` near-black — match the launcher canvas exactly.
- **Do** lift surfaces with the four-step `--color-bg-100/200/300/400` tonal ladder. Reserve shadow for keycap-style affordances only.
- **Do** render keyboard shortcuts as real `<kbd>` elements styled with the start/end gradient — never use icon fonts.
- **Do** keep utility colors saturated (HSL S=59–100%) so they read as system states, not decoration.
- **Do** enable Inter ss03 stylistic set site-wide — it's the brand fingerprint.
- **Do** use the four utility hues (blue/green/red/yellow) as semantic states only, never as marketing decoration.
- **Do** keep section rhythm long (96 standard, 168 cinematic) using the unusually deep spacing token ladder.
- **Do** use 10px radius for cards (Raycast's signature), 8px for buttons, 4px for keycaps.
- **Do** ship the near-white pill CTA (`rgba(255, 255, 255, 0.815)`) at slightly translucent — not pure `#fff`.
- **Do** open the homepage with the red gradient hero stripe — three diagonal bands at the top.

### Don't

- **Don't** introduce additional accent hues outside the four utility colours (blue/green/red/yellow). The palette discipline is the brand.
- **Don't** mix radii within a primitive: a button is 8px, a card is 10px, a hero shell is 20–24px. Cross-pollination breaks the ladder.
- **Don't** soften display copy below 500 weight; Inter at 400 reads as body text and weakens the hero.
- **Don't** use shadows for chrome elevation. Tonal layering does the work.
- **Don't** use pure black `#000000` as canvas. Raycast's `#07080a` has a hint of blue that matters.
- **Don't** use pure grey borders. `#262a2c` is desaturated (5% saturation in HSL) — never use neutral greys.
- **Don't** render shortcuts as text-only (`Cmd+K`). Always real `<kbd>` elements with the inset gradient.
- **Don't** introduce a third sans family. Inter (with ss03) carries display + body unified.
- **Don't** drop the red hero stripe on the homepage — it's the page's chromatic identity moment.
- **Don't** use weight 700. Inter at 600 is the maximum display weight.

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #07080a
Surface:       #0d0d0d
bg-100:        #101111
bg-200:        #18191a
bg-300:        #313133
Text:          #f4f5f7
Text 200:      #c2c7ca
Brand (Blue):  #56c2ff
Green:         #5fd9a0
Red:           #ff6363
Yellow:        #ffc233
Border:        #262a2c
Hero Stripe:   #ff5757 → #a1131a
```

### Example Component Prompts

- **"Create a hero section in the Raycast style"** — `#07080a` canvas, 64px Inter h1 at weight 600 with neutral tracking and ss03 enabled, 18px body subhead at weight 400, near-white pill CTA `rgba(255, 255, 255, 0.815)`. Add a red gradient hero stripe (three diagonal bands `#ff5757` → `#a1131a`) above the navigation.

- **"Design a command palette mockup in the Raycast style"** — Background `#0d0d0d`, 1px `#262a2c` border, 10px radius, elevated shadow `rgba(0, 0, 0, 0.50) 0 12px 32px`. Inside: vertical list of command rows (transparent default, `#121212` active state with white text). Each row: 6px radius, `6px 10px` padding, body 16/400 + keycap chip on the right.

- **"Build a primary CTA in the Raycast style"** — Background `rgba(255, 255, 255, 0.815)` near-white translucent, `#18191a` text, 8px radius, `8px 16px` padding, 36px height, button font 14/500 with ss03. Hover: background `rgba(255, 255, 255, 0.95)`. No transform.

- **"Make a keycap in the Raycast style"** — Background `#121212` (top of gradient), text `#c2c7ca`, 1px `#262a2c` border, 4px radius, `1px 6px` padding, 20px height, JetBrains Mono 13/400. Inset shadow: `inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.40)` mimics a physical key. Always a real `<kbd>` element.

- **"Render a feature card in the Raycast style"** — Background `#0d0d0d` (or `#101111` for elevated), 1px `#262a2c` border, **10px radius** (Raycast's signature card radius), 24px padding. Hover (elevated only): background `#18191a`, border `rgba(255, 255, 255, 0.16)`. No shadow.

- **"Design a soft badge in the Raycast style"** — Pick a utility hue: blue / green / red / yellow. Background `rgba(hue, 0.15)`, text the same hue at full saturation, 4px radius, `2px 8px` padding, caption-small font. Reads as system-state, not decoration.

### Iteration Guide

1. Start with `#07080a` canvas — non-negotiable. Hint of blue, never pure black.
2. Apply Inter with ss03 stylistic set site-wide. Display weight 500–600. The fingerprint.
3. Lift surfaces with the four-step bg ladder (`#101111` → `#18191a` → `#313133`). No shadows for chrome.
4. Use 10px card radius (Raycast's signature), 8px buttons, 4px keycaps. Don't cross.
5. Keyboard shortcuts are real `<kbd>` elements with the inset gradient. Never text-only.
6. Utility hues (blue/green/red/yellow) read as system states. Never marketing decoration.
7. Section rhythm: 96 standard, 168 cinematic. The unusual range is the brand.
8. Open the homepage with the red gradient hero stripe — the chromatic identity moment.
