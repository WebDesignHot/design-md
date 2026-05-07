---
name: GitHub Copilot
tagline: 'Pure-white canvas, pure-black inverted CTAs, Mona Sans display — GitHub''s editorial confidence applied to AI tooling.'
updated_at: 2026-05-06T01:20:47+12:00
published_at: 2026-05-03T16:49:18+12:00
author: webdesignhot
source_url: https://github.com/features/copilot
spec: design.md/v1.5
quality: curated
featured: false
categories: [ai, dev-tools]
tags: [light, minimal, sans, mono, structured, cool, monochrome, editorial]
preview_swatch: ['#ffffff', '#000000', '#0969da']
related: [github, cursor, claude-ai]
description: 'GitHub Copilot''s marketing page weaponises GitHub''s house style: a pure-white canvas, pure-black inverted CTAs, Mona Sans for display copy at heroically large sizes (96px+ at 800 weight), and the iconic Primer blue `#0969da` reserved for textual links. The result reads less like an AI product page and more like a Primer Press editorial — confident, monochromatic, type-led. Copilot intentionally has no sub-brand colour: the strategic message is ''Copilot is GitHub,'' carried by the absence of a separate accent. The vocabulary is Primer system tokens (canvas-default, fg-default, accent-fg) wired through a Mona Sans + Monaspice typeface pair, with rectangular 6px buttons and 12px cards that stay dimensional via tone-and-border rather than shadow.'

colors:
  bg: '#ffffff'                    # Primer canvas-default — paper white canvas
  bg-inverse: '#0d1117'            # Primer canvas-default (dark) — near-black hero band
  bg-overlay: '#ffffffee'          # 93% white overlay used on sticky nav
  surface: '#f6f8fa'               # Primer canvas-subtle — cards, code blocks
  surface-strong: '#eaeef2'        # Primer canvas-inset — disabled fields
  surface-on-dark: '#161b22'       # Primer canvas-subtle (dark) — cards on dark hero
  surface-strong-on-dark: '#21262d' # Primer canvas-inset (dark)
  text: '#1f2328'                  # Primer fg-default — primary body
  text-strong: '#000000'           # display copy at full black
  text-muted: '#59636e'            # Primer fg-muted — captions, metadata
  text-subtle: '#6e7781'           # Primer fg-subtle — quaternary
  text-on-dark: '#f0f6fc'          # Primer fg-default (dark) — text inside dark hero bands
  text-on-dark-muted: '#9198a1'    # Primer fg-muted (dark)
  brand: '#000000'                 # action colour — pure black inverted CTA
  brand-hover: '#1f2328'           # subtle warm-up on hover
  brand-active: '#3d444d'           # pressed state
  brand-on-dark: '#ffffff'         # CTA inverts to white on dark surfaces
  brand-on-dark-hover: '#f0f6fc'   # subtle warm-down on hover (dark)
  accent: '#0969da'                # Primer accent-fg — textual links only
  accent-hover: '#0550ae'          # link hover deepens
  accent-soft: '#ddf4ff'           # Primer accent-subtle — alert backgrounds
  accent-emphasis: '#0969da'       # Primer accent-emphasis — focus ring
  accent-on-dark: '#4493f8'        # link colour on dark surfaces
  success: '#1a7f37'               # Primer success-fg — "GA" availability badges
  success-soft: '#dafbe1'          # Primer success-subtle
  warning: '#9a6700'               # Primer attention-fg
  warning-soft: '#fff8c5'          # Primer attention-subtle
  danger: '#cf222e'                # Primer danger-fg
  danger-soft: '#ffebe9'           # Primer danger-subtle
  done: '#8250df'                  # Primer done-fg — purple, used in PR-merged state
  border: '#d0d7de'                # Primer border-default — hairline
  border-muted: '#d8dee4'           # Primer border-muted — subtle dividers
  border-strong: '#afb8c1'          # focus-state hairline
  border-on-dark: '#3d444d'        # Primer border-default (dark)
  on-brand: '#ffffff'              # white text on black CTA
  scrim: 'rgba(140,149,159,0.15)'  # Primer overlay-bg-color
  shadow-small: 'rgba(31,35,40,0.04)'
  shadow-medium: 'rgba(31,35,40,0.08)'
  shadow-large: 'rgba(31,35,40,0.12)'

typography:
  display:
    family: '"Mona Sans", "Mona Sans VF", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [500, 600, 700, 800, 900]
    opentype-features: ['liga', 'kern', 'ss01']
  body:
    family: '"Mona Sans", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['liga', 'kern']
  mono:
    family: '"MonaspiceNe", "Monaspice Neon Variable", "Mona Sans Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
    weights: [400, 500, 700]
    opentype-features: ['liga', 'calt']
  scale:
    display-mega:    { size: 120, weight: 800, lineHeight: 0.92, tracking: '-0.045em', family: display, opentype: ['ss01'] }
    display-hero:    { size: 96,  weight: 800, lineHeight: 0.95, tracking: '-0.04em',  family: display, opentype: ['ss01'] }
    h1:              { size: 64,  weight: 800, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    h2:              { size: 56,  weight: 700, lineHeight: 1.0,  tracking: '-0.025em', family: display }
    h3:              { size: 32,  weight: 600, lineHeight: 1.15, tracking: '-0.01em',  family: display }
    h4:              { size: 24,  weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    sub-section:     { size: 20,  weight: 600, lineHeight: 1.3,  tracking: '0',         family: body }
    body-large:      { size: 20,  weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    body:            { size: 18,  weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    body-default:    { size: 16,  weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    body-small:      { size: 14,  weight: 400, lineHeight: 1.43, tracking: '0',         family: body }
    caption:         { size: 12,  weight: 400, lineHeight: 1.33, tracking: '0',         family: body }
    button-cta:      { size: 16,  weight: 600, lineHeight: 1.0,  tracking: '0',         family: body }
    nav-link:        { size: 14,  weight: 500, lineHeight: 1.0,  tracking: '0',         family: body }
    label:           { size: 12,  weight: 500, lineHeight: 1.3,  tracking: '0.02em',    family: mono, transform: uppercase }
    code-block:      { size: 14,  weight: 400, lineHeight: 1.45, tracking: '0',         family: mono }
    code-inline:     { size: 0.95em, weight: 400, lineHeight: 'inherit', tracking: '0', family: mono }
    code-small:      { size: 12,  weight: 400, lineHeight: 1.4,  tracking: '0',         family: mono }

radius:
  micro: 3                         # Primer borderRadius-small
  sm: 6                            # Primer borderRadius-medium — buttons, inputs
  md: 8                            # subtle module
  lg: 12                           # Primer borderRadius-large — cards
  xl: 16                           # feature cards
  pill: 9999                       # tags only

spacing:
  base: 4
  scale: [4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1280
  prose-width: 768
  header-height: 64
  rhythm: 8

components:
  button-primary:
    bg: '#000000'
    color: '#ffffff'
    radius: 6
    padding: '12px 20px'
    height: 44
    font: 'Mona Sans 600 / 16px'
    use: 'Try Copilot, Get started, Sign up — pure black on white. Inverts to white-on-#0d1117 on dark hero bands.'
  button-primary-on-dark:
    bg: '#ffffff'
    color: '#000000'
    radius: 6
    padding: '12px 20px'
    use: 'Inverted CTA on dark hero bands.'
  button-secondary:
    bg: '#ffffff'
    color: '#1f2328'
    border: '1px solid #d0d7de'
    radius: 6
    padding: '11px 19px'
    height: 44
    use: 'Read the docs, See pricing — outlined twin to the primary, no fill.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#0969da'
    use: 'Inline text links — Primer accent blue, never as a button background.'
  button-invisible:
    bg: 'transparent'
    color: '#1f2328'
    use: 'Nav buttons that show no chrome until hover — hover gains a #f6f8fa fill.'
  card-feature:
    bg: '#ffffff'
    color: '#1f2328'
    border: '1px solid #d0d7de'
    radius: 12
    padding: '24px'
    use: 'Feature grid card on white — hairline border, no shadow.'
  card-subtle:
    bg: '#f6f8fa'
    color: '#1f2328'
    border: '1px solid #d0d7de'
    radius: 12
    padding: '24px'
    use: 'Pricing tier card and feature module — Primer canvas-subtle.'
  code-block:
    bg: '#f6f8fa'
    color: '#1f2328'
    border: '1px solid #d0d7de'
    radius: 6
    padding: '16px'
    font: 'Monaspice 14/1.45'
    use: 'Marketing-page code samples — Primer light syntax theme.'
  code-block-dark:
    bg: '#0d1117'
    color: '#f0f6fc'
    border: '1px solid #3d444d'
    radius: 6
    padding: '16px'
    font: 'Monaspice 14/1.45'
    use: 'Code sample inside dark hero bands.'
  badge-pill:
    bg: '#ddf4ff'
    color: '#0550ae'
    radius: 9999
    padding: '2px 8px'
    font: 'Mona Sans 500 / 12px'
    use: 'Status pill — "Public preview", "Generally available", "New".'
  badge-success:
    bg: '#dafbe1'
    color: '#1a7f37'
    radius: 9999
    padding: '2px 8px'
    use: '"GA" availability badge.'
  text-input:
    bg: '#ffffff'
    color: '#1f2328'
    border: '1px solid #d0d7de'
    radius: 6
    height: 32
    padding: '5px 12px'
    focus: '2px solid #0969da'
    use: 'Form input — Primer standard, 32px tall, 6px radius.'
  hero-band-light:
    bg: '#ffffff'
    color: '#000000'
    use: 'Pure white hero band — Mona Sans 96px / 800 cranked across 2–3 lines.'
  hero-band-dark:
    bg: '#0d1117'
    color: '#f0f6fc'
    use: 'Inverted dark band — Primer dark canvas, white-on-near-black hero copy.'
  nav-global:
    bg: '#0d1117'
    color: '#f0f6fc'
    height: 64
    font: 'Mona Sans 500 / 14px'
    use: 'Sticky GitHub global header — black bar, white text, identical to github.com.'

motion:
  ease-standard: 'cubic-bezier(0.65, 0, 0.35, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-instant: 80
  duration-fast: 120
  duration-standard: 200
  duration-slow: 300
  cta-press: 'CTA bg deepens #000000 → #1f2328 over 120ms on :hover; back to #000000 on :focusout'
  card-hover: 'border-color: #d0d7de → #afb8c1 over 200ms — no translate, no shadow change'
  link-hover: 'underline thickness grows 0 → 1px over 80ms; colour stays #0969da'
  hero-fade: 'on-load opacity 0 → 1 over 300ms with translateY(8px → 0) emphasized'
  reduced-motion: 'respects prefers-reduced-motion: reduce — translate suppressed; opacity transitions remain.'

breakpoints:
  small: 544
  medium: 768
  large: 1012
  xlarge: 1280
  xxlarge: 1400

shadows:
  ambient: 'rgba(31,35,40,0.04) 0 1px 0'
  small: 'rgba(31,35,40,0.04) 0 1px 0, rgba(31,35,40,0.04) 0 1px 1px'
  medium: 'rgba(31,35,40,0.08) 0 3px 6px, rgba(31,35,40,0.04) 0 1px 0'
  large: 'rgba(31,35,40,0.12) 0 8px 24px'
  ring: '0 0 0 3px rgba(9,105,218,0.4)'

accessibility:
  contrast-text-on-bg: 16.1                  # #1f2328 on #ffffff — AAA
  contrast-text-strong-on-bg: 21.0           # #000000 on #ffffff — AAA
  contrast-text-on-cta: 21.0                 # #ffffff on #000000 — AAA
  contrast-link-on-bg: 6.1                   # #0969da on #ffffff — AAA
  contrast-muted-on-bg: 5.6                  # #59636e on #ffffff — AA
  contrast-text-on-dark: 14.7                # #f0f6fc on #0d1117 — AAA
  focus-ring: '2px solid #0969da inset + 2px outline offset (Primer focus-default)'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab: skip link → global nav → product nav → hero CTAs → feature grid → footer; Esc closes flyouts.'

dark-mode: optional

colors-dark:
  bg: '#0d1117'                    # Primer canvas-default (dark)
  bg-inverse: '#ffffff'             # in inverted band
  surface: '#161b22'                # Primer canvas-subtle (dark)
  surface-strong: '#21262d'         # Primer canvas-inset (dark)
  text: '#f0f6fc'                   # Primer fg-default (dark)
  text-strong: '#ffffff'
  text-muted: '#9198a1'             # Primer fg-muted (dark)
  brand: '#ffffff'                  # CTA inverts to white-on-near-black
  brand-hover: '#f0f6fc'
  accent: '#4493f8'                 # Primer accent-fg (dark) — link blue lifted
  accent-soft: '#0c2d6b'
  border: '#3d444d'                 # Primer border-default (dark)
  border-muted: '#21262d'
  on-brand: '#0d1117'

lineage:
  summary: |
    GitHub Copilot lives inside the Primer design system, so its
    marketing page reads as a high-confidence application of that
    system rather than a separate brand. The canvas defaults to pure
    white (Primer canvas-default `#ffffff`), text stays at near-black
    `#1f2328` (fg-default), and the only chromatic accent allowed in
    body copy is the famous Primer accent blue `#0969da` — used for
    textual hyperlinks, not CTAs. The action surface is monochromatic:
    primary CTAs are pure black `#000000` on white, inverting to pure
    white on `#0d1117` dark hero bands. There is no brand purple, no
    OctocatOS rainbow, no Copilot-specific accent — Copilot's
    differentiation is typographic, not chromatic. Mona Sans, GitHub's
    custom variable display family, is cranked to 96px+ in 800 weight
    across hero bands, with negative tracking that gives the marketing
    a magazine-cover quality. Code blocks shift to Monaspice / Mona
    Sans Mono, the family GitHub commissioned to pair with Mona. The
    aesthetic lineage runs through Primer Press, Vercel's monochromatic
    discipline, and the New York Times Magazine's confidence in
    type-as-image. Copilot's visual signature is therefore the
    *absence* of differentiation — the page tells visitors "Copilot is
    GitHub" by refusing to look like its own brand.
  influences:
    - name: GitHub Primer
      role: Provides the entire colour system — canvas, fg, accent, border tokens — and the Mona Sans family.
      url: https://primer.style
    - name: Vercel
      role: Monochromatic black/white discipline with type as the primary expressive surface.
      url: https://vercel.com
    - name: Stripe Press
      role: Editorial typographic confidence — display sizes treated as image, not as headline.
      url: https://press.stripe.com
    - name: Mona Sans / Hubot Sans
      role: GitHub-commissioned variable typeface family — Mona for marketing display, Hubot for product.
      url: https://github.com/mona-sans
    - name: The New York Times Magazine
      role: Type-as-image editorial confidence at hero sizes 96px+.
      url: https://www.nytimes.com/section/magazine
---

## 1. Visual Theme & Atmosphere

GitHub Copilot's product page is a master class in restraint. The canvas is pure white `#ffffff` (Primer's `canvas-default`), the action colour is pure black `#000000`, and Mona Sans — GitHub's commissioned variable display family — does the heavy lifting at hero sizes that approach 96px in 800 weight. There is no Copilot purple, no AI-product gradient, no chromatic differentiation from github.com itself; the page declares, through pure typographic and chromatic restraint, that Copilot is *GitHub*, not a sub-brand. Walk in from a Linear or Anthropic page and the temperature shift is immediate — colder, harder, more architectural.

Hero bands occasionally invert to `#0d1117` (Primer's dark canvas), and the CTA flips from black-on-white to white-on-black with no other adjustment. The accent blue `#0969da` (Primer `accent-fg`) appears only as textual link colour — never as a button background, never as a hero gradient, never as a chart fill on the marketing surface. The success green `#1a7f37` shows up sparingly for "GA" / availability badges — Primer's standard semantic palette, not custom Copilot decoration.

Type is the entire expressive surface. **Mona Sans** at 96px / 800 weight with `-0.04em` tracking sits across two or three short lines on hero bands, and the wide letterforms — Mona was designed with a slightly extended set width compared to Inter or Helvetica — make 96px feel architectural rather than shouty. Body type drops to 18px / 400 with 1.5 leading, a step up from the 16px default that signals "Copilot copy is meant to be read as essay, not scanned as feature list." Code samples shift to **MonaspiceNe**, the variable monospace GitHub commissioned to pair with Mona, rendered in the Primer light syntax theme.

Shape language is rectangular and confident — 6px button radius (Primer's standard control radius), 12px card radius, no fully-rounded CTAs. Shadows are essentially absent on marketing surfaces; cards sit on tone (white → `#f6f8fa` → `#eaeef2`) with hairline borders, not on elevation. The 8px Primer rhythm grid governs spacing, and section padding runs 96–144px between major bands — generous enough that each band reads as a chapter, not a sub-section.

The overall register is **editorial software**. Copilot's marketing surface looks closer to a Primer Press chapter, a Vercel essay band, or a New York Times Magazine cover than to a typical AI product page. The brand position is "GitHub already won developer trust — Copilot inherits it by refusing to perform a separate identity."

**Key Characteristics:**
- Pure-white canvas (`#ffffff`) inverting to pure-near-black (`#0d1117`) on hero bands — chromatic shift as depth
- Mona Sans display at 96px+ / 800 weight with -0.04em tracking — type-as-image
- No Copilot accent colour — Primer accent blue `#0969da` reserved for textual links only
- 6px buttons, 12px cards, no shadows on marketing surfaces — tone-and-border, not elevation
- MonaspiceNe code blocks in Primer light syntax theme — code surface identical to github.com editor
- Pure-black inverted CTA (`#000000` on white, `#ffffff` on `#0d1117`) — single CTA shape across all bands
- 8px Primer rhythm grid — spacing scale of 4·8·16·24·32·64·96·128
- Section padding at 96–144px — chapter-scale rhythm

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): Primer `canvas-default` — pure-white default page floor
- **Canvas Inverse** (`#0d1117`): Primer dark `canvas-default` — near-black hero band ground
- **Body Ink** (`#1f2328`): Primer `fg-default` — primary body text, never pure black at body sizes
- **Display Black** (`#000000`): hero / display copy at full black

### Brand & Action
- **Black** (`#000000`): primary CTA fill, the only action colour on light surfaces
- **White on Dark** (`#ffffff`): CTA fill on dark hero bands — pure inversion
- **Brand Hover** (`#1f2328`): hover state — subtle warm-up by 16/16/16 RGB
- **Brand Active** (`#3d444d`): pressed state for the rare prolonged press
- **On-Brand White** (`#ffffff`): label colour on black CTA

### Accent
- **Primer Blue** (`#0969da`): Primer `accent-fg` — textual link colour and focus ring; never a CTA fill
- **Accent Hover** (`#0550ae`): link hover deepens
- **Accent Soft** (`#ddf4ff`): Primer `accent-subtle` — alert backgrounds for "Public preview" / informational notices

### Interactive
- **Link Default** (`#0969da`): Primer accent blue
- **Link Hover** (`#0550ae`): deeper blue
- **Link on Dark** (`#4493f8`): lifted Primer blue for dark surfaces
- **Visited**: same as default (Primer doesn't differentiate on marketing)
- **Focus Ring**: `2px solid #0969da` inset + 2px outline-offset
- **Selected** (`#0969da`): selected radio / checkbox / tab fill

### Neutral Scale
- **Display Black** (`#000000`): hero copy
- **Body Ink** (`#1f2328`): default body — Primer `fg-default`
- **Muted** (`#59636e`): Primer `fg-muted` — captions, metadata, hover-secondary
- **Subtle** (`#6e7781`): Primer `fg-subtle` — quaternary, "5 days ago"
- **On-Dark Default** (`#f0f6fc`): Primer dark `fg-default`
- **On-Dark Muted** (`#9198a1`): Primer dark `fg-muted`
- **Border Default** (`#d0d7de`): Primer `border-default` — hairline rules
- **Border Muted** (`#d8dee4`): Primer `border-muted` — subtle dividers
- **Border Strong** (`#afb8c1`): focus-state hairline on hover

### Surface & Borders
- **Canvas** (`#ffffff`): default
- **Subtle** (`#f6f8fa`): Primer `canvas-subtle` — feature cards, code blocks, alternating bands
- **Inset** (`#eaeef2`): Primer `canvas-inset` — disabled fields, deepest light tier
- **Dark Canvas** (`#0d1117`): inverted hero ground
- **Dark Subtle** (`#161b22`): cards on dark hero bands
- **Dark Inset** (`#21262d`): deepest dark tier
- **Hairline** (`#d0d7de`): used everywhere a divider is needed; never the accent blue

### Shadow Colors
Copilot's marketing surfaces use shadows almost exclusively in dropdowns and overlays — feature cards stay flat. Where shadows do appear, they use Primer's neutral `rgba(31,35,40,...)` tone, never tinted. The brand position: depth comes from chromatic inversion (white → near-black band), not atmospheric elevation.

- `rgba(31,35,40,0.04) 0 1px 0` — small (rare on marketing)
- `rgba(31,35,40,0.08) 0 3px 6px` — medium (dropdowns)
- `rgba(31,35,40,0.12) 0 8px 24px` — large (modals)

### Semantic
- **Success Green** (`#1a7f37`): Primer `success-fg` — "GA", "Available now" badges
- **Success Soft** (`#dafbe1`): Primer `success-subtle` — success badge background
- **Warning Amber** (`#9a6700`): Primer `attention-fg` — caution copy
- **Warning Soft** (`#fff8c5`): Primer `attention-subtle`
- **Danger Red** (`#cf222e`): Primer `danger-fg` — error states
- **Danger Soft** (`#ffebe9`): Primer `danger-subtle`
- **Done Purple** (`#8250df`): Primer `done-fg` — used to mark "merged" / "completed" states (rare on marketing)

## 3. Typography Rules

### Font Family

**Display & Body**: `Mona Sans` (and the variable axis `Mona Sans VF`). Fallback chain: `-apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif`. Mona Sans is GitHub's commissioned variable typeface (released 2022, designer: Michael Sharanda for GitHub) — a slightly wider, more architectural sans designed specifically to handle 96px+ display sizes without losing rhythm. Copilot uses Mona for both display and body, leveraging the variable axis to span 400 → 900 weights without loading separate font files.

**Mono**: `MonaspiceNe` (the "Neon" cut of GitHub's Monaspice family). Fallback through `"Mona Sans Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas`. Monaspice is the monospace family GitHub commissioned to pair with Mona Sans (2023, by Mark Simonson Studio) — designed specifically for code editors and rendered with the same Primer light theme used in github.com's source view.

**OpenType features**: `liga` and `kern` everywhere; `ss01` is enabled on display copy to swap in Mona's alternate stylistic glyphs (the more architectural `g` and `R` forms); Monaspice ships with `liga` and `calt` enabled for code-ligature behaviour (`==`, `!=`, `=>` render as proper ligatures).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-mega | Mona Sans | 120 | 800 | 0.92 | -0.045em | ss01 | Page-take-over hero, single line |
| display-hero | Mona Sans | 96 | 800 | 0.95 | -0.04em | ss01 | Standard hero — "GitHub Copilot. Your AI pair programmer." |
| h1 | Mona Sans | 64 | 800 | 1.0 | -0.03em | — | Major page titles |
| h2 | Mona Sans | 56 | 700 | 1.0 | -0.025em | — | Section openers |
| h3 | Mona Sans | 32 | 600 | 1.15 | -0.01em | — | Sub-section heads |
| h4 | Mona Sans | 24 | 600 | 1.25 | -0.005em | — | Feature card titles |
| sub-section | Mona Sans | 20 | 600 | 1.3 | 0 | — | Sub-section heads inside long bands |
| body-large | Mona Sans | 20 | 400 | 1.5 | 0 | — | Hero sub-copy |
| body | Mona Sans | 18 | 400 | 1.5 | 0 | — | Default paragraph — slightly larger than 16 norm |
| body-default | Mona Sans | 16 | 400 | 1.5 | 0 | — | Card body, secondary copy |
| body-small | Mona Sans | 14 | 400 | 1.43 | 0 | — | Footer, metadata |
| caption | Mona Sans | 12 | 400 | 1.33 | 0 | — | Footer micro-text |
| button-cta | Mona Sans | 16 | 600 | 1.0 | 0 | — | Primary CTA label — semibold, not bold |
| nav-link | Mona Sans | 14 | 500 | 1.0 | 0 | — | Global nav, sub-nav |
| label | Monaspice | 12 | 500 | 1.3 | 0.02em | uppercase | "BETA" / "PUBLIC PREVIEW" pill text |
| code-block | Monaspice | 14 | 400 | 1.45 | 0 | liga, calt | Code samples in marketing |
| code-inline | Monaspice | 0.95em | 400 | inherit | 0 | liga | Inline `code` in body paragraphs |
| code-small | Monaspice | 12 | 400 | 1.4 | 0 | — | Small code snippets in footnotes |

### Principles

- **Mona Sans is the entire family.** Substituting Inter, Helvetica, or system-sans collapses the brand into generic SaaS — Mona's slightly wider metrics and architectural cap heights are the typographic signature.
- **Crank to 96px+ at 800 weight on hero bands.** Mona's wide letterforms are designed for it and start to feel anaemic below 600 weight at large sizes.
- **Negative tracking scales with size.** -0.04em at 96px, -0.03em at 64px, -0.01em at 32px. Required to keep Mona's wide set from feeling spacy at display sizes.
- **Body at 18px / 1.5** is the editorial signal. 16px reads as default SaaS; 18px reads as "this is meant to be read as essay."
- **Button labels at 600, not 700.** Most retail CTAs run 700 bold; Copilot uses 600 semibold because the pure-black fill already commands attention.
- **Primer accent blue stays text-only.** `#0969da` appears as inline link colour and focus ring — never as a button, banner, or chart fill.
- **Code blocks shift to Monaspice with Primer light syntax theme.** The marketing code surface is intentionally identical to the github.com editor — no custom syntax theme, no decorative variants.
- **`ss01` on display copy.** Surfaces Mona's alternate `g`, `R`, and `&` forms — the glyphs designed for hero use.

## 4. Component Stylings

### Buttons

**`button-primary`** — pure-black (`#000000`) fill, white text in Mona Sans 16/600, 6px radius, 12×20px padding, 44px height. The most common CTA: "Try Copilot", "Get started", "Sign up". On hover the fill transitions to `#1f2328` over 120ms — a subtle warm-up rather than a colour shift. On dark hero bands the button inverts to white fill with `#000000` text.

**`button-primary-on-dark`** — white (`#ffffff`) fill, black text, same 6px radius and 44px height. Used inside `bg-inverse` hero bands.

**`button-secondary`** — white fill, 1px `#d0d7de` Primer hairline, ink (`#1f2328`) text in 16/600. Same 6px radius. Used for "Read the docs", "See pricing", inverse twin of the primary.

**`button-tertiary-text`** — plain Primer accent blue (`#0969da`) text, no surface, underlined on hover. The textual-link CTA.

**`button-invisible`** — Primer's "invisible" variant. Transparent fill in default state, gains a `#f6f8fa` background on hover. Used for nav-bar action items that need to fade into the chrome.

### Cards

**`card-feature`** — white surface, 1px `#d0d7de` hairline, 12px radius, 24px padding, no shadow. Holds an icon, h4 title, body description. Hover: border darkens to `#afb8c1` over 200ms — no translate, no shadow, no fill change. The brand's defining "depth without elevation" treatment.

**`card-subtle`** — Primer `canvas-subtle` (`#f6f8fa`) fill, same 12px radius and hairline border. Used for pricing tier cards and feature modules where Copilot wants the card to recede slightly from the white canvas.

**`code-block`** — Primer `canvas-subtle` (`#f6f8fa`) fill, 1px hairline, 6px radius, 16px padding, MonaspiceNe 14/1.45 in `#1f2328`. Syntax highlighting uses the standard Primer light theme palette (keywords in `#cf222e`, strings in `#0a3069`, comments in `#6e7781`). The dark-band variant uses `#0d1117` fill with `#3d444d` border.

### Badges, Tags, Pills

**`badge-pill`** — soft Primer accent (`#ddf4ff`) fill, deep accent (`#0550ae`) text in Mona Sans 12/500, 9999px radius, 2×8px padding. Used for "Public preview", "GA", "New" status pills beside section titles.

**`badge-success`** — Primer success-soft (`#dafbe1`) fill, success-fg (`#1a7f37`) text, same 9999px / 2×8px. The "Generally available" badge.

**`badge-mono`** — Mona Sans Mono 12/500 uppercase in muted ink, no fill, 0.02em tracking. Used for eyebrow labels above section titles ("01. INSTALL", "02. AUTHENTICATE").

### Inputs / Forms

**`text-input`** — white fill, 1px `#d0d7de` hairline, 6px radius, 32px height, 5×12px padding, Mona Sans 14/400. On focus the border thickens to 2px Primer accent blue with the standard Primer focus ring offset. Disabled state uses `#eaeef2` fill with muted text.

**`textarea`** — same hairline + radius, 80px min-height, resize: vertical.

**`select-dropdown`** — same shape as text-input, 32px height, with a chevron icon at 8px right padding. Used for plan / region selectors.

### Navigation

**`nav-global`** — sticky `#0d1117` (Primer dark canvas) bar across the top of every page, 64px height, white text in Mona Sans 14/500. Identical to github.com's global header — the Copilot marketing page deliberately doesn't differentiate. Includes the Octocat mark left, primary nav (Product, Solutions, Resources, Open Source, Enterprise, Pricing) centre, and Sign in / Sign up flush right.

**`nav-product`** — secondary band beneath the global nav, white fill, 56px height, 1px hairline bottom. Holds product-specific nav (Copilot Workspace, Copilot Chat, Copilot Pricing, etc.) in 14/500 ink.

**`nav-mobile`** — full-screen overlay with stacked nav items in Mona Sans 24/600. Closing X anchored top-right.

### Dropdown / Flyout

**`flyout-mega`** — opens from global nav; white surface, 12px radius, 1px hairline, medium shadow. Multi-column structure with Mona Sans 16/600 column titles and 14/400 row links.

### Modals & Toasts

**`modal`** — centred dialog over a Primer overlay scrim (`rgba(140,149,159,0.15)`). White surface, 12px radius, 1px hairline, large shadow. Close X anchored top-right.

**`toast`** — top-right notifications. White fill, 6px radius, hairline, body-small text in Mona Sans 14/400.

### Hero Bands

**`hero-band-light`** — full-width white band, 96–144px vertical padding, content capped at 1280. Display-hero in Mona Sans 96/800 with -0.04em tracking, body-large 20/400 sub-copy, primary CTA + secondary CTA flush left.

**`hero-band-dark`** — full-width `#0d1117` band, white text, otherwise identical structure to light hero. CTA inverts to white-on-dark.

## 5. Layout Principles

### Spacing System

- Base unit: **4px** (Primer's smallest unit); modular grid runs on **8px** rhythm
- Scale: `4 · 8 · 12 · 16 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160`
- Section padding (vertical): **96–144px** between major bands — chapter-scale rhythm
- Card internal padding: **24px** for feature cards, **16px** for code blocks
- Gutters: **24px** between columns at desktop, **16px** at tablet, **12px** at mobile

### Grid & Container

- Max content width: **1280px** centred — Primer standard
- Prose width inside long-form: **768px** for readable line length
- Hero: full-width band with content capped at 1280
- Feature grid: typically 3-up at desktop, 2-up at tablet, 1-up at mobile
- Pricing tiers: 3-up cards spanning the full content width

### Whitespace Philosophy

Copilot leans on Primer's discipline: **8px rhythm grid + 96–144px section padding**. The result is a marketing surface that paces like an essay rather than a SaaS template. Inside each section, density stays moderate — feature grids run 3-up with comfortable card padding, and the hero column rarely fills more than 70% of the viewport width. The visual rhythm is **dense type + generous breath** — Mona Sans 96px display compressed onto a few short lines, then 144px of vertical space before the next band.

### Section Cadence

Copilot alternates between **white bands** (default, ~70% of the page) and **`#0d1117` dark inverted bands** (used 1–2 times per page for emphasis — typically the "Built on the GitHub platform" or "Try it free" closing band). The chromatic inversion is the page's primary navigational signal — readers know they've crossed a chapter boundary because the canvas has flipped colour. Subtle `#f6f8fa` bands occasionally separate feature blocks from pricing.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 3px | Primer `borderRadius-small` — rarely used on marketing |
| Small | 6px | Buttons, inputs, code blocks — Primer `borderRadius-medium` |
| Medium | 8px | Subtle modules |
| Large | 12px | Cards, modals, flyouts — Primer `borderRadius-large` |
| Extra | 16px | Featured pricing card |
| Pill | 9999px | Status tags only |

Copilot uses pill (9999px) **only** for status tags ("Public preview", "GA"). CTAs and cards stay rectangular. The radii ladder is **6 / 8 / 12 / 16** for the vast majority of surfaces — confident rectangles, never fully rounded.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer, all editorial bands (~95% of marketing surface) |
| 1 — Hairline | 1px `#d0d7de` border | Cards, inputs, code blocks |
| 2 — Hover Border | 1px `#afb8c1` border | Card hover state |
| 3 — Small Shadow | `rgba(31,35,40,0.04) 0 1px 0` | Sticky nav |
| 4 — Medium Shadow | `rgba(31,35,40,0.08) 0 3px 6px` | Dropdowns, flyouts |
| 5 — Large Shadow | `rgba(31,35,40,0.12) 0 8px 24px` | Modals |
| 6 — Inversion | `bg: #0d1117` | Dark hero bands — depth-as-colour-shift |

### Shadow Philosophy

Copilot's marketing surfaces achieve depth through **tone-and-border**, not elevation. Cards lift off the canvas via the 1px `#d0d7de` Primer hairline, not via shadow. Hover states intensify the border (`#d0d7de → #afb8c1`) rather than adding a drop-shadow. Where shadows do appear (dropdowns, modals), they use Primer's neutral, multi-layer-free recipe — single subtle drop, never atmospheric. The defining "depth event" is the chromatic inversion to `#0d1117` on hero bands — **depth as colour shift, not as elevation**.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.65, 0, 0.35, 1)` — default for hover, focus, button press
- **Out**: `cubic-bezier(0, 0, 0.2, 1)` — entry animations
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, hero on-load

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Instant | 80ms | Link underline grow, focus ring fade |
| Fast | 120ms | CTA fill warm-up on hover |
| Standard | 200ms | Card border darken, dropdown enter |
| Slow | 300ms | Hero on-load fade-up, modal enter |

### Per-Component Recipes

- **CTA hover**: bg transitions `#000000` → `#1f2328` over 120ms standard easing — subtle warm-up, not a colour shift.
- **CTA press**: `#3d444d` momentary deepen on `:active` for 80ms.
- **Card hover**: border-color transitions `#d0d7de` → `#afb8c1` over 200ms. No translate, no shadow change, no scale. The defining "static depth" interaction.
- **Link hover**: underline thickness grows 0 → 1px over 80ms; colour stays `#0969da`. Underline appears below the baseline at 2px offset.
- **Hero on-load**: opacity 0 → 1 over 300ms with `translateY(8px → 0)` emphasized easing — fires once on initial paint, never on subsequent navigation.
- **Code-block syntax highlight reveal**: when entering viewport, syntax tokens fade in sequentially over 400ms (each token 50ms after the previous) — used sparingly, only on the "watch the AI write code" hero variant.
- **Modal enter**: scrim fades in over 200ms, dialog scales `0.96 → 1` and translates from `translateY(8px) opacity(0)` to `0/1` over 200ms emphasized.
- **Page transitions**: hard navigation, no transition. GitHub prioritises perceived speed and full-page paint.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. All translate and scale transitions degrade to opacity-only. Hero on-load fade remains. Code-block syntax-token reveal becomes an instant fill. Card hover border-color transition remains because it communicates state.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #1f2328 body on #ffffff | 16.1 | AAA |
| #000000 display on #ffffff | 21.0 | AAA |
| #ffffff on #000000 CTA | 21.0 | AAA |
| #ffffff on #1f2328 hover | 16.1 | AAA |
| #0969da link on #ffffff | 6.1 | AAA |
| #0550ae link hover on #ffffff | 9.4 | AAA |
| #59636e muted on #ffffff | 5.6 | AA |
| #f0f6fc text on #0d1117 dark | 14.7 | AAA |
| #4493f8 link on #0d1117 dark | 7.0 | AAA |
| #1a7f37 success on #dafbe1 soft | 5.0 | AA |

Copilot's contrast pairs sit overwhelmingly at AAA — the pure-black on pure-white CTA hits the maximum 21:1, and the body ink at 16.1:1 is well above the 7.0 AAA threshold. The only AA-not-AAA pair is `#59636e` muted on white at 5.6:1, used for non-essential metadata. All link colours pass AAA both in light and dark modes.

### Focus Indicators

Focus ring is **2px solid `#0969da`** (Primer accent blue) inset, with a 2px outline-offset, applied via Primer's `:focus-visible` pattern. The ring is the most chromatically prominent accent on any focused element, and because it borrows from Primer's standard focus pattern, it stays consistent across github.com, copilot.com, and all sub-products.

### ARIA Patterns

- **Skip link**: `<a href="#main">Skip to content</a>` is the first focusable element on every page, hidden until focused.
- **Global nav**: `<header role="banner">` wrapping the global nav; nav itself uses `<nav aria-label="Global">`.
- **Product nav**: `<nav aria-label="Product">` for the secondary nav.
- **Hero CTAs**: standard `<a>` and `<button>` elements; no extra ARIA.
- **Code blocks**: `<pre><code>` with `aria-label="Code sample showing..."` for context. Decorative syntax-token reveal uses `aria-hidden="true"` on the animation wrapper.
- **Pricing toggle**: `role="radiogroup"` with monthly/annual radios; arrow keys navigate.
- **Mobile nav overlay**: `role="dialog"` + `aria-modal="true"` + focus trap + Esc closes.
- **Status badges**: "Public preview" / "GA" pills include `aria-label` with full meaning.

### Keyboard Navigation

- Skip link → global nav → product nav → hero primary CTA → hero secondary CTA → feature grid (each card focusable as `<a>`) → pricing → footer
- Within feature grid: tab order follows DOM order; arrow keys navigate within card-internal tabs (when present)
- Mega-flyout: Tab moves through column headings + items in order; Esc closes and returns focus to trigger
- Modal: focus trapped; Esc closes; focus returns to trigger element

### Screen Reader Hints

Verbose `aria-label` on icon-only buttons (the close-X on modals announces "Close dialog"). Decorative octocat mark in the global nav is `<svg aria-hidden="true">` with the brand name as visible text. Code-sample syntax-token animation wrappers carry `aria-hidden="true"` so the screen reader announces the static code, not the animation.

### Reduced Motion

All translate and scale transitions degrade to opacity-only. Hero on-load fade remains. Card hover border-color transition remains. Code-block reveal becomes instant.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Small | <544px | Global nav collapses to hamburger; hero display drops to 48/800; feature grid stacks 1-up |
| Medium | 544–768px | Full nav; hero at 64/800; feature grid 1-up |
| Large | 768–1012px | Full sub-nav; feature grid 2-up; hero at 80/800 |
| XLarge | 1012–1280px | Full marketing layout; feature grid 3-up; hero at 96/800 |
| XXLarge | 1280–1400px | Content caps at 1280; hero scales to 120/800 on landing pages |

### Touch Targets

- Primary CTAs: 44px height — meets AAA for touch
- Nav links: 44px hit area (text 14px + padding to 44)
- Mobile menu items: 56px height
- Form inputs: 32px (Primer's default — meets WCAG 2.5.5 enhanced through padding)

### Collapsing Strategy

- Global nav: full nav collapses to hamburger at <768px; sign-in / sign-up pills hide first
- Hero: display scales 120 → 96 → 80 → 64 → 48px across breakpoints
- Feature grid: 3 → 2 → 1 columns
- Pricing: 3-up cards stack to 1-up at <768px; the "recommended" tier is sticky at the top of the stack
- Footer: 6-column link list collapses to 3-column at tablet, 1-column at mobile

### Image Behavior

Hero illustrations use SVG with `viewBox` — never raster — so they scale crisply across breakpoints. Code-sample animations use `<picture>` with WebP + PNG fallback. All illustration uses `loading="lazy"` for off-screen art.

### Container Queries

Pricing cards use container queries to switch from "feature list right of price" to "feature list below price" when the card narrows below 280px — keeping the pricing layout legible inside narrow sidebars.

## 11. Content & Voice

### Tone

Confident, technical, slightly understated. GitHub Copilot's voice is "the senior engineer at the next desk who knows their stuff and doesn't need to oversell it." Headlines lead with capability ("The world's most widely adopted AI developer tool", "Code 55% faster") rather than promise. The brand consistently positions Copilot as **infrastructure for the developer who already has GitHub** — not as a separate product to evaluate, but as a default the visitor should adopt.

### Microcopy Patterns

- **Button verbs**: "Try Copilot", "Get started", "Sign in with GitHub", "See pricing", "Read the docs"
- **Error message recipe**: technical + actionable — "We couldn't authenticate that GitHub account. Try signing in again or check your access at github.com/settings."
- **Success confirmations**: terse — "Authorized", "Subscription activated", "Pull request merged"
- **Field labels**: short and engineer-coded — "Repository", "Token", "Workflow"
- **Empty states**: instructive — "No active sessions yet. Run `gh copilot suggest` to get started."

### Empty States

Empty enterprise dashboard: "No teams have enabled Copilot yet. [Invite a team] or [view documentation]."

Empty Copilot Chat: "Ask anything. Try 'How do I write a recursive function?' or '/explain' on selected code." — names two next moves.

Empty pricing comparison: "Compare plans" with a link to docs — Copilot rarely sits at "no data" for long.

### CTA Verb Conventions

- Primary: **"Try Copilot"** (default, top of every page), **"Get started"** (signed-in upsell), **"Sign in with GitHub"** (auth-gated CTA)
- Secondary: **"Read the docs"**, **"See pricing"**, **"Watch the demo"**
- Tertiary: **"Learn more"**, **"View on GitHub"**, **"Read the blog"**
- Avoided: "Click here", "Buy now", "Sign up free" (Copilot prefers cleaner verbs)

## 12. Dark Mode & Theming

**Optional dark mode supported** via Primer's full token swap. The marketing site defaults to light, but it respects the `data-theme="dark"` attribute and the `prefers-color-scheme` media query when set. The dark theme is the canonical Primer dark canvas (`#0d1117`) with `#f0f6fc` text — identical to github.com's default dark mode.

The dark token swap is comprehensive: every `colors:` key has a `colors-dark:` counterpart. The brand action colour inverts (black on white → white on near-black), the Primer accent blue lifts (`#0969da → #4493f8`) for night legibility, and surfaces step through `#0d1117 → #161b22 → #21262d` (canvas / subtle / inset). Borders shift to `#3d444d`. Code blocks shift to the Primer dark syntax theme — keywords in `#ff7b72`, strings in `#a5d6ff`, comments in `#9198a1`.

The brand position: dark mode is **fully first-class**, not an afterthought. GitHub has shipped dark mode since 2020 and the Copilot marketing site honours the same token discipline. The dark hero band (`#0d1117` ground used as a section accent in light mode) is *the same canvas colour* as the full dark theme — there's a deliberate continuity between "dark band as chapter accent in light mode" and "the entire site flipped to dark."

## 13. Lineage & Influences

GitHub Copilot's visual lineage runs through three traditions: **the Primer design system** (GitHub's in-house design language, originated by Diana Mounter in 2016 and now the canonical "developer-tool design system"), **the Mona Sans / Hubot Sans typeface family** (commissioned 2022 to replace the previous Helvetica/Inter stack), and **the Vercel / Stripe Press editorial-software wave** (monochromatic discipline, type-as-image, 96px+ display copy on white).

Three contemporaries share the same neighbourhood. **Vercel** went earlier with the monochrome discipline and the type-as-image hero; Copilot diverges by having access to Primer's deeper colour system (the accent blue, the success green) and using them sparingly in semantic moments. **Linear** went monochrome with much darker grey scales; Copilot stays brighter. **Anthropic / Claude.ai** went serif-on-cream — the warm counter to Copilot's cool. Outside the AI peer group, the closest spiritual sibling is **Stripe Press** — both surfaces treat display type as the primary expressive object on white canvas, and both refuse the gradient-and-mascot SaaS register.

What Copilot rejects: brand purple, Copilot-specific accent colours, gradient meshes, hero animations beyond on-load fade, custom syntax themes, drop shadows on cards, decorative illustration that competes with type, and any chromatic differentiation from github.com. The brand position is **GitHub already won developer trust — Copilot inherits it** by refusing to perform a separate identity. The strategic message is "Copilot is GitHub," carried by the absence of a sub-brand.

**Influences:**
- GitHub Primer — the entire design system (colour, typography, components), [primer.style](https://primer.style)
- Mona Sans / Monaspice — GitHub's commissioned typeface family, [github.com/mona-sans](https://github.com/mona-sans)
- Vercel — monochromatic black/white type-as-image discipline, [vercel.com](https://vercel.com)
- Stripe Press — editorial typographic confidence at hero sizes 96px+, [press.stripe.com](https://press.stripe.com)
- The New York Times Magazine — type-as-image cover treatment
- Linear — monochrome marketing discipline with adjacent register, [linear.app](https://linear.app)

## 14. Do's and Don'ts

**Do**
- Anchor the canvas on pure white (`#ffffff`) — Primer `canvas-default`, no warm tint, no off-white
- Use pure black (`#000000`) for primary CTAs on light surfaces; invert to white-on-`#0d1117` on dark hero bands
- Crank Mona Sans to 96px+ at 800 weight on hero bands with `-0.04em` tracking — type-as-image is the brand
- Reserve Primer accent blue (`#0969da`) for textual links and the focus ring only — never a button background
- Use 6px button radius and 12px card radius — confident rectangles, no fully-rounded CTAs except status tags
- Render code blocks in MonaspiceNe with the Primer light syntax theme — keep the marketing code surface identical to the github.com editor
- Use tone-and-border for card depth, not shadow — the 1px `#d0d7de` hairline does the work
- Treat dark hero bands (`#0d1117`) as chapter-accent moments — invert depth via colour, not elevation
- Maintain 96–144px vertical section padding — chapter-scale rhythm
- Keep button labels at 16/600 (semibold), not 700 — the pure-black fill already commands attention

**Don't**
- Don't introduce a Copilot-specific accent (purple, gradient, etc.) — the strategic message is "Copilot is GitHub," carried by the absence of a sub-brand colour
- Don't add drop-shadows to cards — Primer surfaces use tone-and-border, not elevation, on marketing
- Don't mix font families — Mona Sans + MonaspiceNe is the pair; introducing Inter or system-ui breaks the GitHub-press feel
- Don't soften CTAs to pill shape — the brand vocabulary is rectangular at 6px
- Don't use the Primer accent blue as a button or banner fill — it's the link colour, not the brand colour
- Don't tighten section padding below 96px — the breath is the brand
- Don't decorate with illustration that competes with type — Copilot's hero is type-as-image, not illustration-led
- Don't use exclamation marks in copy — the voice is confident-understated, never enthusiastic
- Don't depart from the 8px Primer rhythm grid — every spacing decision should derive from `4·8·12·16·24·32·64·96·128`
- Don't ship a custom syntax theme on marketing — the Primer light/dark theme is the brand's code register

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #ffffff
Canvas Inverse:   #0d1117
Body Ink:         #1f2328
Display Black:    #000000
Brand:            #000000
Brand on Dark:    #ffffff
Surface Subtle:   #f6f8fa
Surface Inset:    #eaeef2
Hairline:         #d0d7de
Hairline Strong:  #afb8c1
Muted:            #59636e
Primer Blue:      #0969da
Link Hover:       #0550ae
Success:          #1a7f37
On-Dark Text:     #f0f6fc
On-Dark Border:   #3d444d
```

### Example Component Prompts

- "Create a GitHub Copilot-style primary CTA: a 44px-tall rectangle with 6px radius, pure-black (`#000000`) fill, white text in Mona Sans 16/600, 12×20px padding. Hover transitions the fill to `#1f2328` over 120ms standard easing. No drop-shadow, no border. On dark hero bands, invert to white fill with black text."
- "Build a Copilot hero band: pure white (`#ffffff`) ground, content capped at 1280px, 144px vertical padding. Display headline in Mona Sans 96/800 with -0.04em tracking, set across two lines — 'GitHub Copilot. Your AI pair programmer.' Body-large sub-copy at 20/400 in `#1f2328`. Primary CTA + outline secondary CTA flush left. Right column: a Monaspice code sample inside a `#f6f8fa` card with 6px radius and 1px `#d0d7de` border, demonstrating Copilot's autocomplete behaviour."
- "Design a Copilot feature card: white surface, 12px radius, 1px `#d0d7de` Primer hairline, 24px padding, no shadow. Stack: 32px monochrome icon (no fill colour, just stroke), h4 in Mona Sans 24/600 ink, body in 16/400 muted ink. On hover, the border darkens to `#afb8c1` over 200ms — no translate, no shadow change."
- "Create a Copilot dark hero band: full-width `#0d1117` ground, 144px vertical padding. Display in Mona Sans 96/800 white text. Body-large sub-copy at 20/400 in `#f0f6fc`. White CTA pill (inverted from the primary) with black text. Below the headline, a Monaspice code sample in a `#161b22` surface with `#3d444d` border, using the Primer dark syntax theme."
- "Build a Copilot 'Public preview' status pill: soft Primer accent (`#ddf4ff`) fill, deep accent (`#0550ae`) text in Mona Sans 12/500, 9999px radius, 2×8px padding. Sits inline beside section titles."
- "Design a Copilot pricing card: Primer canvas-subtle (`#f6f8fa`) surface, 12px radius, 1px `#d0d7de` hairline, 24px padding, no shadow. Stack: plan name in Mona Sans 24/600, price in 56/700 with -0.025em tracking, billing cadence in 14/400 muted, feature list with check icons in 14/400 ink, primary CTA at the bottom. The 'recommended' tier swaps to a 16px radius and adds a 2px Primer accent blue border."

### Iteration Guide

1. **Pure-white canvas first.** If your page has off-white, cream, or any tint, it isn't Copilot. Primer `canvas-default: #ffffff`, no warmth.
2. **Pure-black CTAs.** No grey, no near-black. `#000000` on white, `#ffffff` on `#0d1117`. The discipline is the brand.
3. **Mona Sans cranked.** Hero copy at 96px+ / 800 weight with -0.04em tracking. Substituting Inter or system-sans collapses the brand.
4. **Primer accent blue stays text-only.** `#0969da` is the link colour and focus ring. Never a button, never a banner, never a chart fill.
5. **Confident rectangles, never pills (except tags).** 6px buttons, 12px cards. Pill shapes only on status tags.
6. **No drop-shadows on cards.** Tone-and-border (`#ffffff` on `#f6f8fa` with 1px `#d0d7de` hairline) is the entire elevation vocabulary.
7. **Inversion as depth.** Use `#0d1117` dark bands sparingly — once or twice per page — as a chapter accent. The colour shift is the depth event.
8. **Monaspice in code blocks with Primer syntax theme.** Keep the marketing code surface visually identical to the github.com editor — that continuity is the brand promise.
