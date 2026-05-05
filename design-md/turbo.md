---
name: Turbo
tagline: 'Vercel-grade pure-black canvas with a magenta-to-blue Turbo gradient — the build system that wears its speed as a sweep.'
author: webdesignhot
source_url: https://turbo.build
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools]
tags: [dark, sans, structured, cool, minimal, multi-theme]
preview_swatch: ['#000000', '#ff1e56', '#0096ff']
related: [vercel, vite, tailwindcss]
description: 'Turbo''s site inherits the Vercel design system''s pure-black canvas and Geist type stack, then layers in its own signature: a magenta-to-blue brand gradient sweeping from `#ff1e56` to `#0096ff` across the wordmark and key CTAs. The page reads as Vercel-grade minimalism with one allocated chromatic surface — the brand sweep — and nothing else.'

colors:
  # Primary surfaces
  bg: '#000000'                    # pure black canvas, Vercel-grade — non-negotiable
  bg-soft: '#0a0a0a'               # secondary panels, code blocks
  surface: '#111111'               # card lift tier 1
  surface-strong: '#1a1a1a'        # card lift tier 2, hover
  surface-elevated: '#202020'      # popovers, dialogs
  bg-overlay: 'rgba(0, 0, 0, 0.72)' # modal scrim

  # Text scale
  text: '#ffffff'                  # primary copy, full strength
  text-strong: '#ffffff'           # display headlines, wordmark
  text-muted: '#a1a1a1'            # secondary copy, nav links
  text-soft: '#666666'             # tertiary copy, captions
  text-faint: '#444444'            # disabled, watermark
  text-on-brand: '#ffffff'

  # Brand — the only allocated chromatic surface
  brand: '#ff1e56'                 # Turbo magenta (left of gradient)
  brand-strong: '#e6164a'          # hover/active magenta
  brand-soft: 'rgba(255, 30, 86, 0.12)' # tinted backgrounds
  accent: '#0096ff'                # Turbo blue (right of gradient)
  accent-strong: '#0078cc'         # hover/active blue
  accent-soft: 'rgba(0, 150, 255, 0.12)'

  # Gradient stops
  gradient-from: '#ff1e56'
  gradient-via: '#9b56b3'          # midpoint reference for 3-stop variants
  gradient-to: '#0096ff'

  # Glows / atmosphere
  glow-magenta: 'rgba(255, 30, 86, 0.4)'
  glow-blue: 'rgba(0, 150, 255, 0.35)'
  glow-soft: 'rgba(255, 30, 86, 0.2)'

  # Borders
  border: 'rgba(255, 255, 255, 0.08)'    # 8% white hairline — identical to Vercel
  border-strong: 'rgba(255, 255, 255, 0.15)'
  border-subtle: 'rgba(255, 255, 255, 0.05)'
  border-brand: 'rgba(255, 30, 86, 0.4)'
  border-focus: '#ff1e56'

  # Semantic
  success: '#0cce6b'
  success-bg: 'rgba(12, 206, 107, 0.1)'
  warning: '#f5a623'
  warning-bg: 'rgba(245, 166, 35, 0.1)'
  danger: '#ff4d4f'
  danger-bg: 'rgba(255, 77, 79, 0.1)'
  info: '#0096ff'
  info-bg: 'rgba(0, 150, 255, 0.1)'

  # On-color
  on-brand: '#ffffff'
  on-accent: '#ffffff'
  on-surface: '#ffffff'
  on-bg: '#ffffff'

typography:
  display:
    family: '"Geist", Inter, -apple-system, "system-ui", sans-serif'
    weights: [500, 600, 700]
    opentype-features: ['ss01', 'cv11', 'tnum']
  body:
    family: '"Geist", Inter, -apple-system, "system-ui", sans-serif'
    weights: [400, 500]
  mono:
    family: '"Geist Mono", ui-monospace, "JetBrains Mono", Menlo, monospace'
    weights: [400, 500]
    opentype-features: ['ss01', 'zero']
  scale:
    display-hero:    { size: 96, weight: 700, lineHeight: 0.95, tracking: '-0.045em' }
    display:         { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.04em' }
    h1:              { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.035em' }
    h2:              { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.025em' }
    h3:              { size: 32, weight: 600, lineHeight: 1.2,  tracking: '-0.015em' }
    h4:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.01em' }
    h5:              { size: 18, weight: 600, lineHeight: 1.3,  tracking: '-0.005em' }
    body-large:      { size: 18, weight: 400, lineHeight: 1.6 }
    body:            { size: 16, weight: 400, lineHeight: 1.6 }
    body-small:      { size: 14, weight: 400, lineHeight: 1.5 }
    label:           { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em' }
    caption:         { size: 12, weight: 400, lineHeight: 1.4 }
    overline:        { size: 11, weight: 500, lineHeight: 1.3,  tracking: '0.08em', transform: 'uppercase' }
    code:            { size: 14, weight: 400, lineHeight: 1.6,  family: mono }
    code-inline:     { size: 13, weight: 500, lineHeight: 1.4,  family: mono }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.5,  family: mono }

radius:
  micro: 2
  xs: 4
  sm: 6
  md: 8
  lg: 12
  xl: 16
  card: 12
  button: 8
  pill: 9999

spacing:
  base: 4
  scale: [0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1200
  prose-width: 720
  container: 1200
  gutter: 24
  section-padding: 96
  header-height: 64
  grid: 12

components:
  button-primary:
    bg: '#ffffff'
    color: '#000000'
    radius: 8
    weight: 500
    padding: '8px 16px'
    use: 'Solid white CTA — Vercel-signature primary action'
  button-gradient:
    bg: 'linear-gradient(90deg, #ff1e56 0%, #0096ff 100%)'
    color: '#ffffff'
    radius: 8
    weight: 500
    padding: '8px 16px'
    use: 'The single chromatic CTA — reserved for the highest-stakes action per page'
  button-ghost:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid rgba(255, 255, 255, 0.15)'
    radius: 8
    weight: 500
    padding: '8px 16px'
    use: 'Secondary action; pairs alongside the white primary'
  button-tertiary:
    bg: 'transparent'
    color: '#a1a1a1'
    radius: 8
    weight: 500
    padding: '8px 12px'
    use: 'Inline link-grade action, hover lifts to white text'
  card:
    bg: '#111111'
    border: '1px solid rgba(255, 255, 255, 0.08)'
    radius: 12
    padding: '24px'
    use: 'Feature tile, doc preview — Vercel-system canvas'
  code-block:
    bg: '#0a0a0a'
    color: '#ededed'
    border: '1px solid rgba(255, 255, 255, 0.08)'
    radius: 8
    font: mono
    padding: '16px 20px'
    use: 'Install commands, snippets — full-bleed inside cards'
  input:
    bg: '#0a0a0a'
    color: '#ffffff'
    border: '1px solid rgba(255, 255, 255, 0.15)'
    radius: 8
    padding: '8px 12px'
    focus-ring: '0 0 0 2px #ff1e56'
    use: 'Newsletter, search — minimal hairline rendering'
  badge:
    bg: 'rgba(255, 30, 86, 0.12)'
    color: '#ff1e56'
    border: '1px solid rgba(255, 30, 86, 0.4)'
    radius: 9999
    padding: '2px 10px'
    font: 'overline'
    use: 'New / Beta / version chips — magenta pill'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-accelerate: 'cubic-bezier(0.4, 0, 1, 1)'
  duration-instant: 80
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  duration-deliberate: 480
  hover-lift: 'translateY(-1px) over 120ms ease-standard'
  gradient-shift: '300% 300% background-size, 6s ease-in-out infinite'
  reduced-motion: 'respects prefers-reduced-motion: reduce — gradient halt, transitions to opacity-only at 80ms'

breakpoints:
  mobile: 640
  tablet: 768
  laptop: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: '0 1px 2px rgba(0, 0, 0, 0.4)'
  standard: '0 4px 12px rgba(0, 0, 0, 0.5)'
  elevated: '0 12px 32px rgba(0, 0, 0, 0.6), 0 2px 6px rgba(0, 0, 0, 0.4)'
  deep: '0 30px 60px rgba(0, 0, 0, 0.7), 0 12px 24px rgba(0, 0, 0, 0.5)'
  glow-magenta: '0 0 60px rgba(255, 30, 86, 0.4)'
  glow-blue: '0 0 60px rgba(0, 150, 255, 0.35)'
  ring: '0 0 0 2px #ff1e56'
  ring-blue: '0 0 0 2px #0096ff'

accessibility:
  contrast-text-on-bg: 21.0           # white on pure black — AAA at all sizes
  contrast-muted-on-bg: 6.4           # #a1a1a1 on #000 — AAA body
  contrast-soft-on-bg: 4.5            # #666 on #000 — AA body, AAA large
  contrast-text-on-brand: 4.7         # white on #ff1e56 — AA body, AAA large
  contrast-text-on-accent: 3.4        # white on #0096ff — AA large only
  contrast-on-brand-recommended: 'use white text on gradient buttons — passes at large sizes; for body-size copy on solid magenta consider a darkened brand-strong'
  focus-ring: '2px solid #ff1e56 with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'full tab order through nav, primary CTA, secondary CTA, then content. Skip link to #main provided.'
  aria-patterns: 'docs nav uses [role=navigation], code copy buttons announce "Copy to clipboard" via aria-label'

dark-mode: 'native — Turbo is dark-only by design. No light variant offered; the pure black canvas is part of the Vercel-system inheritance. A "light docs" theme exists at /docs that flips bg to #ffffff and text to #000000 with the same gradient brand color preserved.'

lineage:
  summary: |
    Turbo's site is a direct expression of Vercel's design system —
    same pure `#000000` canvas, same Geist type family, same 8% white
    hairline borders, same minimalist component vocabulary — with
    one signature departure: the **magenta-to-blue brand gradient**
    that runs from `#ff1e56` to `#0096ff`. That sweep is the entire
    chromatic identity, applied to the wordmark, to occasional
    primary CTAs, and as a soft halo behind hero copy. Where Vercel's
    main marketing surface is fully monochrome with rare blue accents,
    Turbo allocates one specific gradient as its single brand surface
    and leaves everything else to Vercel's discipline. Type is Geist
    and Geist Mono, the in-house Vercel families, used at sizes
    and weights identical to Vercel's marketing — H1 at 80px with hard
    `-0.04em` tracking. The closest design cousin isn't actually a
    framework — it's Vercel itself, and Turbo's identity exists
    as a controlled deviation from that template, asserting product
    individuality through a single allocated gradient while keeping
    every other surface in the parent system's discipline.
  influences:
    - name: Vercel
      role: 'Direct lineage — Turbo lives inside Vercel''s design system, sharing canvas, type, and component vocabulary.'
      url: https://vercel.com
    - name: Geist (typeface)
      role: 'In-house Vercel sans/mono pair; engineered minimalist register.'
      url: https://vercel.com/font
    - name: Stripe
      role: 'Diagonal-gradient hero treatment as a controlled chromatic surface.'
      url: https://stripe.com
    - name: Linear
      role: 'Dark-mode-first marketing with single-accent restraint.'
      url: https://linear.app
---

## 1. Visual Theme & Atmosphere

Turbo's marketing site is a Vercel page that was given permission to
keep one piece of color. The canvas is pure `#000000` — not a near-
black, not navy, not graphite, but the actual zero of the color
cube. On top of that void sits Geist at 80 pixels, tracked hard to
`-0.04em`, in pure white. The text reads like cut metal: confident,
engineered, deliberately under-decorated.

The single chromatic intervention is the brand gradient — a magenta
that nearly pulses (`#ff1e56`) sweeping into a Vercel-cousin blue
(`#0096ff`). That sweep belongs to three places: the wordmark, the
primary chromatic CTA on the hero, and a soft blurred halo bleeding
behind hero headlines. Everywhere else, the page enforces the parent
system's monochrome discipline. The atmosphere is *infrastructure-
grade fast*: nothing breathes more than necessary, hairlines are 8%
white, motion is restrained to 200ms transitions, and the only
ornament is the controlled gradient.

The mood is closer to a metal foundry than a SaaS landing. There's
no glassmorphism, no soft pastel halos, no decorative noise. The
gradient does the entire emotional lifting for the brand —
positioning Turbo as the *fast piece* inside the Vercel ecosystem.

The information surfaces (docs, benchmarks, install commands) lean
fully into the dark dev-tool tradition: full-bleed mono in Geist
Mono on `#0a0a0a` panels, syntax tokens in muted off-whites and the
occasional magenta for emphasis. The total effect is a page that
trusts type and grid to do the entire job, with a single allocated
piece of color signalling brand.

**Key Characteristics**

- Pure `#000000` canvas — no softening, no near-black
- Single magenta-to-blue gradient as the only allocated chromatic surface
- Geist + Geist Mono — the Vercel typography lineage
- 8% white hairlines on every border — identical to the parent system
- Display type at 80px+ with `-0.04em` hard tracking
- Soft magenta halo behind hero copy — the brand's depth signal
- Tonal-black layering (000 → 0a → 11 → 1a → 20) — no shadows on cards
- Sub-200ms transitions — speed is the brand promise
- White-text-on-gradient CTAs — never a third accent color
- Dark-only by design (light docs theme exists but flips the same gradient)

## 2. Color Palette & Roles

### Primary

- **Background** `#000000` — page canvas. Pure zero across every section. The Vercel-system inheritance demands this exact value.
- **Text Primary** `#ffffff` — body copy, headlines, wordmark fill (when not using gradient).
- **Text Muted** `#a1a1a1` — nav links, secondary descriptions, breadcrumbs.

### Brand

- **Brand Magenta** `#ff1e56` — left endpoint of the brand gradient. Used solo for badges, focus rings, error/danger contexts.
- **Brand Magenta Strong** `#e6164a` — hover/active state for solo magenta.
- **Brand Magenta Soft** `rgba(255, 30, 86, 0.12)` — tinted background fills for chips, alerts, hover panels.
- **Accent Blue** `#0096ff` — right endpoint of the brand gradient. Used solo for info badges, link emphasis when contrast permits.
- **Accent Blue Strong** `#0078cc` — hover/active state for solo blue.
- **Brand Gradient** `linear-gradient(90deg, #ff1e56, #0096ff)` — the single allocated chromatic surface. Wordmark, primary CTA, hero halo. Nothing else.

### Accent / Atmosphere

- **Glow Magenta** `rgba(255, 30, 86, 0.4)` — 40% alpha blurred behind hero copy.
- **Glow Blue** `rgba(0, 150, 255, 0.35)` — 35% alpha blue counter-halo on dark panels.
- **Glow Soft** `rgba(255, 30, 86, 0.2)` — gentler atmospheric bleed.

### Interactive

- **Link** `#0096ff` — inline link color on dark surfaces (rare; most navigation uses white).
- **Link Hover** `#33adff` — lighter blue on hover.
- **Focus Ring** `#ff1e56` — 2px solid magenta ring with 2px offset.
- **Selection** `rgba(0, 150, 255, 0.3)` — text-selection background.
- **Disabled Text** `#444444` — text-faint role.

### Neutral Scale

- **Text Strong** `#ffffff` — display headlines, hero, wordmark (non-gradient).
- **Text** `#ffffff` — body primary.
- **Text Muted** `#a1a1a1` — secondary copy.
- **Text Soft** `#666666` — tertiary copy, captions.
- **Text Faint** `#444444` — disabled, watermark.
- **Background** `#000000` — canvas.
- **BG Soft** `#0a0a0a` — secondary panels.
- **Surface** `#111111` — cards.
- **Surface Strong** `#1a1a1a` — hover state on cards.
- **Surface Elevated** `#202020` — popovers, dialogs.

### Surface & Borders

- **Border** `rgba(255, 255, 255, 0.08)` — 8% white hairline. The Vercel-system signature divider.
- **Border Strong** `rgba(255, 255, 255, 0.15)` — emphasis dividers, ghost button outlines.
- **Border Subtle** `rgba(255, 255, 255, 0.05)` — barely-visible dividers between dense rows.
- **Border Brand** `rgba(255, 30, 86, 0.4)` — magenta border on chips, focus contexts.
- **Border Focus** `#ff1e56` — full-saturation magenta for focus rings.

### Shadow Colors

Turbo's shadows are minimal — depth comes from tonal stacking, not shadow occlusion. When shadows do render (popovers, modal dialogs), they use pure black at varying alpha:

- **Shadow Ambient** `0 1px 2px rgba(0, 0, 0, 0.4)` — barely-there lift for input focus.
- **Shadow Standard** `0 4px 12px rgba(0, 0, 0, 0.5)` — popover lift.
- **Shadow Elevated** `0 12px 32px rgba(0, 0, 0, 0.6)` — dialog lift.
- **Shadow Deep** `0 30px 60px rgba(0, 0, 0, 0.7)` — full modal occlusion.
- **Glow Magenta** `0 0 60px rgba(255, 30, 86, 0.4)` — the brand's signature atmospheric depth move.

### Semantic

- **Success** `#0cce6b` text on `rgba(12, 206, 107, 0.1)` background. Build-passed states.
- **Warning** `#f5a623` text on `rgba(245, 166, 35, 0.1)` background. Cache stale, deprecation notices.
- **Danger** `#ff4d4f` text on `rgba(255, 77, 79, 0.1)` background. Build failures.
- **Info** `#0096ff` text on `rgba(0, 150, 255, 0.1)` background. Informational callouts (overlaps the brand-blue role).

## 3. Typography Rules

### Font Family

- **Primary**: `"Geist", Inter, -apple-system, "system-ui", sans-serif` — the in-house Vercel sans, an engineered grotesk with slightly extended characters and tightened apertures.
- **Monospace**: `"Geist Mono", ui-monospace, "JetBrains Mono", Menlo, monospace` — the matching mono, optically calibrated to Geist sans for code blocks adjacent to prose.
- **OpenType features**: `ss01` (alternate single-story `g`), `cv11` (alternate `a`), `tnum` (tabular numerals for benchmarks), `zero` (slashed zero in mono).

The Geist family is the foundational typographic move. Substituting Inter, Söhne, or General Sans breaks the Vercel-system signal and weakens Turbo's positioning as a Vercel-native product.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | Geist | 96 | 700 | 0.95 | -0.045em | ss01 | Reserved for landing hero only |
| Display | Geist | 80 | 700 | 1.0 | -0.04em | ss01 | Standard hero h1 — Vercel-grade |
| H1 | Geist | 64 | 700 | 1.05 | -0.035em | ss01 | Section opener |
| H2 | Geist | 48 | 700 | 1.1 | -0.025em | — | Sub-section |
| H3 | Geist | 32 | 600 | 1.2 | -0.015em | — | Feature title |
| H4 | Geist | 24 | 600 | 1.25 | -0.01em | — | Card heading |
| H5 | Geist | 18 | 600 | 1.3 | -0.005em | — | Inline emphasis |
| Body Large | Geist | 18 | 400 | 1.6 | 0 | — | Hero subhead |
| Body | Geist | 16 | 400 | 1.6 | 0 | — | Default reading copy |
| Body Small | Geist | 14 | 400 | 1.5 | 0 | — | Footnotes, secondary |
| Label | Geist | 12 | 500 | 1.4 | 0.02em | — | Form labels, table headers |
| Caption | Geist | 12 | 400 | 1.4 | 0 | — | Image captions, meta |
| Overline | Geist | 11 | 500 | 1.3 | 0.08em UPPER | — | Section markers |
| Code | Geist Mono | 14 | 400 | 1.6 | 0 | zero | Block code |
| Code Inline | Geist Mono | 13 | 500 | 1.4 | 0 | zero | Inline ``code`` token |
| Code Micro | Geist Mono | 12 | 400 | 1.5 | 0 | zero | Tooltips, dense tables |
| Numeric Tabular | Geist | inherit | 500 | inherit | 0 | tnum | Benchmarks, version pills |

### Principles

- **Negative tracking is the brand voice.** Display sizes (48px+) use `-0.025em` to `-0.045em`. Smaller sizes (≤14px) use `0`. Never apply negative tracking below 16px — it crushes legibility.
- **Weight 700 stops at the hero.** Body copy stays at 400. The contrast between heavy display and lean body is part of the engineered register.
- **Geist Mono is for code only.** Don't use mono for labels or chips — that's a Linear/Modal move, not a Vercel/Turbo one.
- **Tabular numerals** (`tnum`) for any benchmark, version chip, or percent — Geist supports it, use it.
- **Single-story `g` (ss01)** is the Geist signature. Enable it on display copy.
- **Line-heights compress as size grows.** 0.95 at 96px, 1.0 at 80px, 1.6 at 16px. The bigger the size, the more visual weight a tight LH adds.
- **No italics in display.** Body italics are fine for editorial emphasis. Display italics break the engineered grotesk register.

## 4. Component Stylings

### Buttons

**Button Primary (White Solid)** — Vercel's canonical CTA.

- Background: `#ffffff`
- Text: `#000000`, weight 500, 14px
- Padding: `8px 16px`
- Radius: 8px
- Border: none
- Hover: scale `1.02`, no color change
- Active: scale `0.98`
- Focus: 2px magenta ring with 2px offset
- Use: primary action on every section ("Get started", "Deploy")

**Button Gradient** — the single chromatic CTA per page.

- Background: `linear-gradient(90deg, #ff1e56 0%, #0096ff 100%)`
- Text: `#ffffff`, weight 500, 14px
- Padding: `8px 16px`
- Radius: 8px
- Border: none
- Hover: `background-position` shift right via 300% bg-size animation
- Active: scale `0.98`
- Focus: 2px white ring with 2px offset
- Use: hero CTA, single highest-stakes action ("Try Turbopack")

**Button Ghost** — secondary action, paired with primary.

- Background: transparent
- Text: `#ffffff`, weight 500, 14px
- Padding: `8px 16px`
- Border: `1px solid rgba(255, 255, 255, 0.15)`
- Radius: 8px
- Hover: border lifts to `rgba(255, 255, 255, 0.4)`, bg lifts to `rgba(255, 255, 255, 0.05)`
- Active: scale `0.98`
- Focus: 2px magenta ring
- Use: "Read docs", "GitHub", "Star on GitHub"

**Button Tertiary (Inline)** — link-grade.

- Background: transparent
- Text: `#a1a1a1`, weight 500, 14px
- Padding: `8px 12px`
- Border: none
- Hover: text lifts to `#ffffff`
- Use: nav links, footer columns, "Learn more" inline

### Cards

- Background: `#111111`
- Border: `1px solid rgba(255, 255, 255, 0.08)`
- Radius: 12px
- Padding: 24px
- Hover: border lifts to `rgba(255, 255, 255, 0.15)`, no shadow added
- Use: feature tiles, benchmark cards, doc previews

### Badges / Chips

**Brand Badge (Magenta Pill)**

- Background: `rgba(255, 30, 86, 0.12)`
- Text: `#ff1e56`, 11px, weight 500, uppercase, `0.08em` tracking
- Border: `1px solid rgba(255, 30, 86, 0.4)`
- Radius: 9999 (pill)
- Padding: `2px 10px`
- Use: "New", "Beta", "v2.0"

**Info Badge (Blue Pill)**

- Background: `rgba(0, 150, 255, 0.12)`
- Text: `#0096ff`, otherwise identical
- Use: framework version chips, info notices

**Neutral Badge**

- Background: `rgba(255, 255, 255, 0.08)`
- Text: `#a1a1a1`
- Border: `1px solid rgba(255, 255, 255, 0.15)`
- Use: tag pills, category markers

### Inputs / Forms

- Background: `#0a0a0a`
- Text: `#ffffff`, 14px
- Placeholder: `#666666`
- Border: `1px solid rgba(255, 255, 255, 0.15)`
- Radius: 8px
- Padding: `8px 12px`
- Focus: border to `#ff1e56`, ring `0 0 0 2px rgba(255, 30, 86, 0.2)`
- Error: border to `#ff4d4f`, ring `rgba(255, 77, 79, 0.2)`
- Use: newsletter, search, login

### Code Block

- Background: `#0a0a0a`
- Text: `#ededed`
- Border: `1px solid rgba(255, 255, 255, 0.08)`
- Radius: 8px
- Padding: `16px 20px`
- Font: Geist Mono 14px / 1.6
- Copy button: top-right, hover-revealed, 12px Geist Mono
- Syntax tokens: keywords `#ff1e56`, strings `#0cce6b`, comments `#666666`, functions `#0096ff`

### Navigation

- Height: 64px sticky
- Background: `rgba(0, 0, 0, 0.72)` with `backdrop-filter: blur(12px)` on scroll
- Border-bottom: `1px solid rgba(255, 255, 255, 0.08)` on scroll
- Logo: 24px Geist 600 wordmark with gradient fill
- Nav links: 14px weight 500 `#a1a1a1` → `#ffffff` on hover
- CTA cluster: ghost + white solid, right-aligned

### Tooltip

- Background: `#1a1a1a`
- Text: `#ffffff`, 12px Geist 500
- Border: `1px solid rgba(255, 255, 255, 0.08)`
- Radius: 6px
- Padding: `4px 8px`
- Shadow: `0 4px 12px rgba(0, 0, 0, 0.5)`

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px
- **Scale**: 0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128
- **Density observation**: Turbo uses the tighter end of the scale inside cards (12px and 16px gutters) and the wide end at section boundaries (96px and 128px). The density ratio is ~8:1 between intra-card and section-level — that ratio is the "engineered register" signal.

### Grid & Container

- Container: 1200px max-width with 24px gutters.
- Grid: 12-column with 24px gaps.
- Hero treatment: full-bleed background, content constrained to 800px center-aligned, with the magenta halo positioned `top: 0; left: 50%; translateX(-50%)` as a 1200px-wide blurred ellipse.
- Feature grid: 3-column at desktop, 2-column at tablet, 1-column at mobile. Cards `1fr 1fr 1fr` with 24px gap.
- Benchmark grid: asymmetric 2-column at desktop, narrow column for code, wide column for chart.

### Whitespace Philosophy

Turbo treats whitespace as a speed signal — generous section padding (96px) but tight intra-card density (16px). The page reads fast because every section transition is unambiguous and every card is information-dense. Vercel's marketing template informs this: avoid the "spacious SaaS" look and lean toward "dense docs page".

### Section Cadence

- **Section 1 (Hero)**: pure black, gradient halo, single gradient CTA.
- **Section 2 (Feature highlights)**: 3-column card grid on the same black canvas.
- **Section 3 (Benchmark)**: asymmetric 2-column with code-block left and chart right.
- **Section 4 (Code preview)**: full-bleed code block on `#0a0a0a` with line-numbers.
- **Section 5 (Logos / social proof)**: muted 50% opacity logo strip.
- **Section 6 (Final CTA)**: same gradient halo treatment as hero, with a second gradient CTA.

The page never alternates light/dark — that's a Stripe move. Turbo stays in pure black through every section, and the depth comes from tonal layering inside each section.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Hairline dividers with rounded ends, tag border-radius hints |
| XS | 4px | Inline code chips, compact tags |
| SM | 6px | Tooltips, small inputs |
| MD | 8px | Buttons (all variants), inputs, code blocks |
| LG | 12px | Cards, modal panels |
| XL | 16px | Hero illustration containers |
| Pill | 9999px | Status badges, brand chips |

The defining radius is **8px on buttons** and **12px on cards** — exactly Vercel's component radii. The geometry is grid-aligned; nothing rounds past 16px except pills. No compound radii (e.g., bottom-only rounding) — every corner is uniform.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat on `#000000` | Hero, section bodies — no shadow, no lift |
| 1 | Tonal lift to `#0a0a0a` | Code blocks, secondary panels |
| 2 | Tonal lift to `#111111` + 8% white border | Cards |
| 3 | Tonal lift to `#1a1a1a` + 15% white border | Hovered cards, popovers |
| 4 | `#202020` + standard shadow | Dropdowns, dialogs |
| 5 | `#202020` + deep shadow | Full modal overlays |

### Shadow Philosophy

Turbo's depth strategy is **tonal-black layering, not shadow occlusion**. Cards lift through background-color steps (000 → 0a → 11 → 1a → 20), each ~6% lightness apart, with 8% white hairlines providing edge definition. Shadows render only at level 4+ (popovers, modals) and use pure black at 40–70% alpha — never a blue-tinted shadow.

The signature depth move is the **magenta-blue halo** — a 1200px-wide blurred radial gradient at 40% alpha behind the hero. It's not technically a shadow; it's atmospheric color bleed. That halo is the only place gradient touches anything outside its allocated CTA usage.

## 8. Interaction & Motion

### Easing Curves

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, fade, slide.
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — large transitions (modal open, page enter).
- **Decelerate**: `cubic-bezier(0, 0, 0.2, 1)` — entering elements.
- **Accelerate**: `cubic-bezier(0.4, 0, 1, 1)` — exiting elements.

### Duration Buckets

- **Instant**: 80ms — tooltip show, micro feedback.
- **Fast**: 120ms — button hover, link hover.
- **Standard**: 200ms — card hover, dropdown open.
- **Slow**: 320ms — modal open, page transition.
- **Deliberate**: 480ms — gradient sweep on CTA hover.

### Per-Component Micro-States

- **Button hover**: `translateY(-1px)` + slight brightness lift over 120ms ease-standard.
- **Gradient button hover**: `background-position` shifts via 300% bg-size animation, 6s loop infinite — gradient appears to flow.
- **Card hover**: border lifts from 8% → 15% white over 200ms; background lifts from `#111111` → `#1a1a1a`.
- **Link hover**: color shifts `#a1a1a1` → `#ffffff` over 120ms; underline grows from 0% → 100% width via `text-underline-offset` and decoration grow.
- **Code copy button**: opacity 0 → 1 on card hover over 200ms; success state shows green checkmark for 1.2s then reverts.

### Page Transitions

Turbo uses Next.js client-side routing with no page-level transition — the canvas stays black across navigations, only content swaps. This is intentional: the brand is fast, and a transition implies wait.

### Reduced-Motion Strategy

Respects `prefers-reduced-motion: reduce`:

- Gradient sweep animation halts (gradient renders static).
- All hover lifts collapse to opacity-only at 80ms.
- Card hover removes the `translateY` move; only border color changes.
- Modal open uses opacity fade only, no slide.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | WCAG Level |
|---|---|---|
| `#ffffff` on `#000000` | 21.0 | AAA all sizes |
| `#a1a1a1` on `#000000` | 6.4 | AAA body |
| `#666666` on `#000000` | 4.5 | AA body, AAA large |
| `#ffffff` on `#ff1e56` | 4.7 | AA body, AAA large |
| `#ffffff` on `#0096ff` | 3.4 | AA large only |
| `#ffffff` on gradient | 3.8–4.7 | AA large guaranteed; body-size at risk on the blue end |

**Recommendation**: Gradient buttons display 14px+ weight 500 text — passes AA at large. Avoid using gradient backgrounds with body-size copy.

### Focus Indicators

- All interactive elements: `2px solid #ff1e56` with 2px offset.
- Inputs: border swap to `#ff1e56` plus a `0 0 0 2px rgba(255, 30, 86, 0.2)` ring.
- Focus-visible only — mouse clicks don't show the ring; keyboard navigation does.

### ARIA Pattern Recommendations

- Navigation: `<nav role="navigation" aria-label="Main">`
- Code blocks: copy buttons use `aria-label="Copy code to clipboard"` and announce success via live region.
- Brand badge chips: decorative-only chips use `aria-hidden="true"`; informational chips have explicit text.
- Modal dialogs: `role="dialog"`, `aria-modal="true"`, focus trap on open, return focus on close.

### Keyboard Navigation

Tab order: skip link → logo → main nav → utility nav → primary CTA → main content (h1 first) → feature cards (skipped if not interactive) → footer. Skip-link to `#main` always present at top of page.

### Screen Reader Hints

- Wordmark uses both gradient text and an `<svg aria-label="Turbo">` fallback for SR.
- Decorative halos use `aria-hidden="true"`.
- Code copy buttons announce "Copy <language> snippet to clipboard".

### Reduced Motion

Respected via `@media (prefers-reduced-motion: reduce)`. Specifically: gradient animation halts, lift transitions become opacity-only, page transitions disable.

## 10. Responsive Behavior

### Breakpoints

| Name | Min Width | Use |
|---|---|---|
| Mobile | 0–639px | Single-column, 16px gutters |
| Tablet | 640–767px | 2-column cards, 20px gutters |
| Laptop | 768–1023px | 3-column cards, full nav |
| Desktop | 1024–1279px | 1200px container, full grid |
| Wide | 1280–1535px | 1200px container, more padding |
| 4K | 1536+ | 1200px container caps |

### Touch Targets

Minimum 44x44px. Buttons render at `8px 16px` padding around 14px text → ~36px tall — bumped to 44px on mobile via increased vertical padding.

### Collapsing Strategy

- **Hero**: 96px → 56px on mobile; gradient halo scales proportionally.
- **Feature cards**: 3-col → 1-col below 768px, 2-col at 640–767px.
- **Code blocks**: full-width at all sizes; horizontal scroll for long lines.
- **Nav**: collapses to hamburger below 768px; CTA buttons stack vertically in mobile menu.

### Image Behavior

Hero illustrations use `srcset` + `<picture>` with `media` queries; vector logos lift to gradient fills via `<linearGradient>` defs.

### Container Queries

Used inside the docs sidebar for nested-list density: when sidebar narrows below 220px, list items collapse padding from `8px 12px` to `4px 8px`.

## 11. Content & Voice

### Tone

Engineering-grade and confident. Sentences are short. Adjectives are scarce. The voice is "we built the fastest build system; the data backs it up". Never apologetic, never speculative. The brand assumes the reader is a senior engineer who values benchmarks over marketing.

### Microcopy Patterns

**Button verbs (in order of confidence)**:

- **Primary**: "Get started", "Try Turbopack", "Deploy"
- **Secondary**: "Read docs", "Learn more", "View benchmarks"
- **Tertiary**: "GitHub", "Star", "Follow updates"

**Error message recipe**: `<verb> failed.` followed by `<reason>.` followed by an inline link to docs. Example: "Build failed. Cache invalid. [Read troubleshooting →]".

**Success confirmation**: short, terminal-style. "Deployed.", "Cache cleared.", "Build succeeded in 1.4s."

### Empty States

Empty states focus on next action, not explanation. "No projects yet — [Create one]." Not "You have no projects. To create your first project, click the button below."

### CTA Verb Conventions

Turbo's verbs are imperative and brief: **Get, Try, Deploy, Build, Run, Cache, Star**. Avoid "Sign up", "Register", "Create account" — those are SaaS verbs. Turbo is infrastructure; verbs are infrastructure verbs.

## 12. Dark Mode & Theming

Turbo is **dark-only by design**. The pure `#000000` canvas is part of the Vercel-system inheritance, and a light variant would weaken the lineage signal.

A "light docs" theme exists at `/docs` for users who want light reading mode. It flips:

- `bg`: `#000000` → `#ffffff`
- `text`: `#ffffff` → `#0a0a0a`
- `text-muted`: `#a1a1a1` → `#666666`
- `surface`: `#111111` → `#f5f5f5`
- `border`: `rgba(255, 255, 255, 0.08)` → `rgba(0, 0, 0, 0.08)`

The brand gradient stays identical (`#ff1e56 → #0096ff`), and the magenta focus ring stays at `#ff1e56`. Code blocks invert their syntax token palette. Marketing pages do not offer a light variant — the hero, features, and CTAs always render dark.

## 13. Lineage & Influences

Turbo's design language is a **direct expression of Vercel's design system**, with one allocated chromatic surface (the magenta-blue gradient) as the brand departure. The pure `#000000` canvas, Geist type stack, 8% white hairlines, 8px button radii, 12px card radii, 96px section padding, and 1200px container are all inherited verbatim from Vercel's marketing template. Turbo's identity exists *as a controlled deviation* — asserting product individuality through the gradient while keeping every other surface in the parent system's discipline.

The closest non-Vercel cousin is **Stripe** — specifically Stripe's diagonal-gradient hero treatment. Stripe pioneered the "single allocated chromatic gradient" pattern as an antidote to flat one-color marketing. Turbo uses the same pattern but flips the canvas from Stripe's white to pure black.

What it rejects: glassmorphism (Apple-flavored), soft pastels (Linear's softer neighbors), light-mode default (Remix), multi-accent palettes (Notion). Turbo is the *fast piece inside Vercel's orbit*, and the design language enforces that positioning.

**Named influences**:

- **Vercel** — direct design lineage; canvas, type, components, spacing.
- **Geist (typeface)** — in-house Vercel sans/mono, the engineered grotesk register.
- **Stripe** — single-allocated-gradient pattern as the brand's chromatic identity.
- **Linear** — dark-mode-first marketing with single-accent restraint and tonal-layer depth.

## 14. Do's and Don'ts

### Do

- **Do** treat the magenta-to-blue gradient as Turbo's only allocated chromatic surface. Wordmark, primary gradient CTA, hero halo — and nothing else.
- **Do** stay inside Vercel's discipline for everything non-gradient. Pure-black canvas, Geist type, 8% white hairlines, 8px buttons, 12px cards.
- **Do** use the soft magenta halo (`rgba(255, 30, 86, 0.4)` blurred) behind hero copy as the brand's depth signal — it's the one place gradient bleeds outside CTAs.
- **Do** render display copy at 80px+ with `-0.04em` tracking. Anything smaller reads as generic dev-tool.
- **Do** use Geist Mono for code blocks and tabular numerals (`tnum`) for benchmark figures.
- **Do** keep section padding at 96–128px; intra-card padding at 16–24px. The density ratio is the engineered register.
- **Do** animate the gradient on CTA hover via `background-position` shift — it's the only place motion adds chromatic weight.
- **Do** respect `prefers-reduced-motion` — halt the gradient animation entirely.
- **Do** use white text on the gradient CTA. Black text on gradient fails contrast on the blue end.
- **Do** lock the canvas to pure `#000000`. Any softening reads as a lesser-Vercel.

### Don't

- **Don't** introduce a third accent color. The gradient is the entire chromatic identity; pulling in green, yellow, or purple breaks the controlled-deviation logic.
- **Don't** swap Geist for Inter, Söhne, or General Sans. The type lineage is part of the Vercel-system signal.
- **Don't** lighten the canvas to `#0a0a0a`, `#111111`, or navy. Pure `#000000` is non-negotiable.
- **Don't** add drop shadows to cards. Depth is tonal layering only; shadows render at level 4+ (popovers, modals).
- **Don't** use the gradient on body-size text. Contrast fails on the blue end; reserve gradient for 14px+ weight 500 minimum.
- **Don't** use Geist Mono for labels or chips. That's a Linear/Modal move, not a Vercel/Turbo one.
- **Don't** soften corners past 16px. Buttons stay 8px, cards 12px. Hero illustrations max at 16px.
- **Don't** use light-mode marketing variants. Dark is the brand; light docs is an accommodation.
- **Don't** add SaaS verbs ("Sign up", "Register", "Create account"). Use infrastructure verbs ("Get started", "Deploy", "Try").
- **Don't** introduce alternating light/dark sections. Stay pure black through every section; depth comes from tonal stacking inside the section.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #000000
text: #ffffff
text-muted: #a1a1a1
brand-magenta: #ff1e56
brand-blue: #0096ff
gradient: linear-gradient(90deg, #ff1e56, #0096ff)
surface: #111111
border: rgba(255, 255, 255, 0.08)
focus: #ff1e56
glow: rgba(255, 30, 86, 0.4)
```

### Example Component Prompts

1. **"Create a hero section in Turbo's design language. Pure black canvas, Geist 80px display headline at -0.04em tracking, 18px body subhead in #a1a1a1, single gradient CTA from #ff1e56 to #0096ff, soft magenta halo behind the headline."**

2. **"Design a feature card for Turbo. Background #111111, 8% white hairline border, 12px radius, 24px padding. Header in Geist 24px weight 600, body in 16px regular #a1a1a1. Hover lifts border to 15% white."**

3. **"Build a benchmark code block in Turbo's style. Background #0a0a0a, Geist Mono 14px, syntax tokens with magenta keywords, green strings, soft-gray comments. Top-right copy button revealed on card hover."**

4. **"Render a Turbo nav bar. 64px height, sticky, backdrop-blur on scroll, hairline bottom border. Logo wordmark with gradient fill, nav links at 14px weight 500 #a1a1a1, ghost button + white solid CTA right-aligned."**

5. **"Create a brand badge chip for Turbo. Pill shape, magenta tinted background rgba(255, 30, 86, 0.12), 11px Geist weight 500 uppercase #ff1e56 text, 0.08em tracking, magenta hairline border."**

6. **"Design a Turbo dialog modal. #202020 surface, 12px radius, deep shadow, full-page rgba(0, 0, 0, 0.72) scrim. Header h3 at 32px weight 600. Primary action is white solid button; secondary is ghost."**

### Iteration Guide

1. **If the page reads too "Vercel-clone"**: lean harder on the gradient — add a second halo behind a feature section, or animate the gradient sweep on the CTA. The gradient is what makes Turbo *Turbo*.

2. **If the gradient feels overused**: pull it back to wordmark + hero CTA + one halo. Three placements is the maximum. Anything more dilutes the "single allocated surface" logic.

3. **If contrast fails on the gradient**: bump text weight to 500+ at 14px minimum. Or use the solo magenta `#ff1e56` instead of the gradient where contrast is critical.

4. **If the page feels static**: enable the gradient sweep animation on the CTA via `background-position` shift over 6s loop. Don't add chrome motion elsewhere — Turbo's brand promise is speed, and excess motion contradicts that.

5. **If the canvas reads "soft"**: check that `bg` is exactly `#000000`, not `#0a0a0a`. The pure zero is non-negotiable; any softening weakens the Vercel-system signal.

6. **If Geist isn't available**: fall back to Inter at the same sizes and tracking. Don't substitute Söhne, General Sans, or Helvetica — the lineage signal breaks.

7. **If light mode is requested**: only allow it inside docs surfaces. Marketing always renders dark. The light docs theme keeps the gradient identical and only flips the neutral scale.

8. **If a third accent color is suggested**: refuse. The gradient is the entire chromatic identity. Add white intensity, change tonal layer, or use semantic tokens (success/warning/danger) — but never a fourth brand color.
