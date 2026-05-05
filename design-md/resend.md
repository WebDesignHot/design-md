---
name: Resend
tagline: Pure-black canvas with Domaine Display serif at 96px and Commit Mono code chips — email infra that thinks in italics.
author: webdesignhot
source_url: https://resend.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, editorial, serif, sans, mono, spacious]
preview_swatch: ['#000000', '#f0f0f0', '#3b9eff']
related: [linear, supabase, vercel]
description: 'Resend pairs a pure-`#000` canvas with **Domaine Display** for headlines and **Commit Mono** for code, then quietly hands the body to Inter and the buttons to ABC Favorit. The result is dev-tool infrastructure dressed in a magazine — uncommon for the category, and the reason its API docs feel like an essay.'

colors:
  bg: '#000000'                  # observed body bg, also --color-background — pure black, no calibration
  bg-elevated: '#141517'         # --color-gray-1 — first surface stop
  bg-elevated-2: '#191b1e'       # --color-gray-2 — card panels
  bg-elevated-3: '#212629'       # --color-gray-3 — input fields, code blocks
  bg-elevated-4: '#2a3035'       # --color-gray-4 — popover hover
  surface: '#191b1e'             # primary card surface (alias of bg-elevated-2)
  surface-2: '#212629'           # code blocks, input fields
  surface-3: '#2a3035'           # nested elevated
  text: '#f0f0f0'                # --color-gray-12 — observed body color rgb(240,240,240)
  text-soft: '#a1a4a5'           # --color-gray-11
  text-muted: '#878d8f'           # --color-gray-10
  text-faint: '#5e6466'           # --color-gray-9
  text-disabled: '#3f4546'       # --color-gray-7
  brand: '#f0f0f0'               # the brand voice is the type itself; primary accent stays neutral
  brand-warm: '#fafafa'          # warmer brand for emphasis
  link-blue: '#3b9eff'           # --color-blue-10 (used for inline links in copy)
  link-blue-hover: '#5fb1ff'     # lighter blue on hover
  link-blue-soft: 'rgba(0,117,255,0.34)' # --color-blue-4 — CTA wash
  link-blue-deep: '#0075ff'      # full saturated blue
  accent-mint: '#3ddc84'         # --color-green-10 — success / API key indicator
  accent-amber: '#ffba08'        # --color-amber-10 — warning
  accent-coral: '#ff5e5b'        # --color-red-10 — danger / error
  border: '#212629'              # --color-gray-3 used as hairline
  border-soft: 'rgba(255,255,255,0.07)' # observed faint divider
  border-strong: 'rgba(255,255,255,0.16)' # hover/focus
  shadow-card: 'rgba(0,0,0,0.40)' # subtle, rare
  shadow-elev: 'rgba(0,0,0,0.60)'
  shadow-deep: 'rgba(0,0,0,0.80)'
  on-brand: '#000000'            # ink on neutral text-as-brand
  on-blue: '#ffffff'             # ink on saturated blue
  semantic-success: '#3ddc84'
  semantic-warning: '#ffba08'
  semantic-danger: '#ff5e5b'
  semantic-info: '#3b9eff'

typography:
  display:
    family: '"domaine", "Domaine Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
    weights: [400]                 # observed at 400 only — Domaine carries presence at regular
    opentype: ['kern', 'liga', 'dlig']
  body:
    family: 'inter, ui-sans-serif, system-ui, sans-serif'
    weights: [400, 500, 600]
    opentype: ['kern', 'liga', 'calt']
  ui:
    family: '"aBCFavorit", "ABC Favorit", ui-sans-serif, system-ui, sans-serif'
    weights: [400, 500]            # CTA / button voice observed at 500
    opentype: ['kern', 'liga']
  mono:
    family: '"commitMono", "Commit Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    weights: [400, 500]
    opentype: ['kern', 'tnum', 'zero']
  scale:
    display-hero:    { size: 144, weight: 400, lineHeight: 0.95, tracking: '-0.015em', family: display, opentype: 'kern, liga, dlig' }
    display-large:   { size: 120, weight: 400, lineHeight: 0.98, tracking: '-0.012em', family: display, opentype: 'kern, liga, dlig' }
    h1:              { size: 96, weight: 400, lineHeight: 1.0, tracking: '-0.01em', family: display, opentype: 'kern, liga, dlig' }
    h2:              { size: 64, weight: 400, lineHeight: 1.05, tracking: '-0.01em', family: display, opentype: 'kern, liga' }
    h3:              { size: 40, weight: 400, lineHeight: 1.15, tracking: '-0.005em', family: display, opentype: 'kern, liga' }
    h4:              { size: 24, weight: 500, lineHeight: 1.30, tracking: '0', family: body }
    body-large:      { size: 18, weight: 400, lineHeight: 1.6, tracking: '0', family: body, opentype: 'kern, liga' }
    body:            { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body, opentype: 'kern, liga' }
    body-small:      { size: 14, weight: 400, lineHeight: 1.5, tracking: '0', family: body, opentype: 'kern, liga' }
    button:          { size: 14, weight: 500, lineHeight: 1.0, tracking: '0', family: ui }
    button-large:    { size: 15, weight: 500, lineHeight: 1.0, tracking: '0', family: ui }
    nav-link:        { size: 14, weight: 400, lineHeight: 1.40, tracking: '0', family: ui }
    label:           { size: 12, weight: 500, lineHeight: 1.30, tracking: '0.04em', family: ui, transform: 'uppercase' }
    label-mono:      { size: 11, weight: 500, lineHeight: 1.30, tracking: '0.04em', family: mono, transform: 'uppercase' }
    caption:         { size: 13, weight: 400, lineHeight: 1.4, tracking: '0', family: body }
    micro:           { size: 11, weight: 500, lineHeight: 1.3, tracking: '0.02em', family: ui }
    code:            { size: 14, weight: 400, lineHeight: 1.6, tracking: '0', family: mono, opentype: 'tnum, zero' }
    code-bold:       { size: 14, weight: 500, lineHeight: 1.6, tracking: '0', family: mono }

radius:
  none: 0
  micro: 2                       # --radius-xs 0.125rem
  xs: 4                          # --radius-sm 0.25rem
  sm: 6                          # --radius-md 0.375rem
  md: 8                          # --radius-lg 0.5rem
  lg: 12                         # --radius-xl 0.75rem
  xl: 16                         # --radius-2xl 1rem
  pill: 9999                     # observed CTA radius is effectively pill (1.67e7px)

spacing:
  base: 4
  xxs: 2
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
  xxl: 32
  section-sm: 80
  section: 120
  section-lg: 200
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 80, 120, 160, 200]

layout:
  page-width: 1280
  prose-width: 680
  header-height: 64
  hero-height: 800
  grid-gap: 24

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-entrance: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 320
  duration-fade: 600
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transforms collapse to opacity'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0,0,0,0.40) 0 1px 2px'
  standard: 'rgba(0,0,0,0.50) 0 4px 12px'
  elevated: 'rgba(0,0,0,0.60) 0 12px 32px'
  deep: 'rgba(0,0,0,0.80) 0 24px 48px'
  ring: '0 0 0 2px #3b9eff'
  blue-glow: '0 0 0 4px rgba(59,158,255,0.20)'

accessibility:
  contrast-text-on-bg: 18.7              # #f0f0f0 on #000000 — AAA
  contrast-soft-on-bg: 9.6               # #a1a4a5 on #000000 — AAA
  contrast-muted-on-bg: 6.4              # #878d8f on #000000 — AA at body, AAA at large
  contrast-link-on-bg: 7.4               # #3b9eff on #000000 — AAA at body
  focus-ring: '2px solid #3b9eff with 2px offset on pure-black canvas'
  reduced-motion-honored: true
  keyboard-nav: 'tab order follows visual; skip-link present; copy-code buttons keyboard-accessible'

components:
  button-primary:
    background: 'rgba(0,117,255,0.34)'
    text: '#ffffff'
    radius: 9999
    padding: '8px 16px'
    height: 36
    font: button
    border: '1px solid rgba(59,158,255,0.40)'
    hover: 'background rgba(0,117,255,0.50); border rgba(59,158,255,0.60)'
    use: 'primary CTA — Get Started, soft-blue translucent pill, deliberately small to keep eye on Domaine'
  button-secondary:
    background: '#191b1e'
    text: '#f0f0f0'
    radius: 9999
    padding: '8px 16px'
    height: 36
    font: button
    border: '1px solid #212629'
    hover: 'background #212629; border rgba(255,255,255,0.16)'
    use: 'secondary CTA — Talk to Sales / Read Docs'
  button-ghost:
    background: 'transparent'
    text: '#f0f0f0'
    radius: 9999
    padding: '6px 12px'
    font: button
    hover: 'background rgba(255,255,255,0.05)'
    use: 'tertiary text-link CTA / nav button'
  card-feature:
    background: '#141517'
    text: '#f0f0f0'
    border: '1px solid rgba(255,255,255,0.07)'
    radius: 12
    padding: '32px'
    use: 'feature card — gray-1 over canvas, subtle border'
  card-elevated:
    background: '#191b1e'
    text: '#f0f0f0'
    border: '1px solid rgba(255,255,255,0.07)'
    radius: 12
    padding: '40px'
    use: 'elevated panel — gray-2, second tier'
  card-pricing:
    background: '#141517'
    text: '#f0f0f0'
    border: '1px solid rgba(255,255,255,0.07)'
    radius: 16
    padding: '40px'
    use: 'pricing tier card — slightly larger radius'
  card-pricing-featured:
    background: '#191b1e'
    text: '#f0f0f0'
    border: '1px solid #3b9eff'
    radius: 16
    padding: '40px'
    use: 'featured pricing tier — blue accent border'
  code-block:
    background: '#212629'
    text: '#f0f0f0'
    border: '1px solid rgba(255,255,255,0.07)'
    radius: 8
    padding: '20px 24px'
    font: code
    use: 'multi-line API code sample — Commit Mono, slate gray-3 background'
  code-chip:
    background: '#191b1e'
    text: '#f0f0f0'
    border: '1px solid rgba(255,255,255,0.07)'
    radius: 6
    padding: '4px 8px'
    font: code
    use: 'inline code chip — npm install resend, API endpoint reference'
  input:
    background: '#212629'
    text: '#f0f0f0'
    border: '1px solid rgba(255,255,255,0.16)'
    radius: 8
    padding: '10px 14px'
    height: 40
    font: body
    focus: 'border #3b9eff; ring 0 0 0 2px rgba(59,158,255,0.20)'
    use: 'email / form input'
  badge-pill:
    background: '#191b1e'
    text: '#a1a4a5'
    border: '1px solid rgba(255,255,255,0.07)'
    radius: 9999
    padding: '4px 12px'
    font: micro
    use: 'NEW / category badge — neutral on dark'
  badge-blue-soft:
    background: 'rgba(0,117,255,0.20)'
    text: '#5fb1ff'
    radius: 9999
    padding: '4px 12px'
    font: micro
    use: 'feature badge — soft blue, sparingly used'
  nav-link:
    background: 'transparent'
    text: '#a1a4a5'
    font: nav-link
    padding: '6px 12px'
    hover: 'text #f0f0f0'
    use: 'top nav menu — Product / Docs / Pricing / Company'

dark-mode: optional

lineage:
  summary: |
    Resend's homepage is the rare developer-infrastructure site that
    chooses a **serif display face**. Where Linear, Vercel, Supabase
    and Stripe all reach for Inter or a custom geometric sans, Resend
    drops a 96–144px **Domaine Display** as its hero — Domaine is the
    Klim Type Foundry serif used by The New Yorker, *Bloomberg
    Businessweek*, and several literary publishers. Pairing it with
    a pure-`#000` canvas turns the marketing into something closer
    to an essay opener than an SDK pitch. Body copy hands off to
    `Inter` at 16px (the dev-tool default), and inline code uses
    **Commit Mono**, the open-source mono designed for terminal
    legibility — together those three faces stake out three distinct
    voices: editorial display, neutral body, and functional code. A
    fourth face, **ABC Favorit** (Lineto), carries the CTA / button
    voice at weight 500. The CTA uses ABC Favorit at 14px on a
    faint-blue wash (`rgba(0,117,255,0.34)`) at full pill radius —
    that pill-shaped chip is conspicuously small (8/16px padding),
    which keeps the editorial typography in command of the
    composition. Where Stripe trusts a single saturated brand colour,
    Resend trusts neutral grays plus type — there's no signature hue,
    only a signature serif. The radius ladder runs 2/4/6/8/12/16 with
    a full-pill (9999) reserved for the primary CTA chip. The surface
    ladder is three near-imperceptible gray stops (`#141517 → #191b1e
    → #212629`) — each just 4–6 lightness units apart — that let
    cards differentiate without breaking the editorial register.
  influences:
    - name: 'Klim Type Foundry / Domaine Display'
      role: 'The literary-magazine display serif at 96–144px gives Resend its essay-not-SDK feel'
      url: 'https://klim.co.nz'
    - name: 'The New Yorker / Bloomberg Businessweek'
      role: 'Editorial publishing''s serif-on-black grammar, repurposed for developer infrastructure'
      url: 'https://www.newyorker.com'
    - name: 'Commit Mono'
      role: 'Open-source terminal-grade mono used for inline code chips and API examples'
      url: 'https://commitmono.com'
    - name: 'Lineto / ABC Favorit'
      role: 'Contemporary geometric sans used for CTA / button voice — third typographic register'
      url: 'https://lineto.com/typefaces/favorit'
    - name: 'Inter'
      role: 'Body voice — the dev-tool default for long-form documentation legibility'
      url: 'https://rsms.me/inter/'
---

## 1. Visual Theme & Atmosphere

Resend's marketing site lives at pure `#000` and lets a 96–144px **Domaine Display** serif do the heavy lifting. The hero "Email for / developers" arrives at weight 400 with `-0.96px` tracking — Domaine's organic counters and pronounced ball terminals turn the line into a magazine opener, not a typical SaaS hero. The body voice is `Inter` at 16px; inline code drops to `Commit Mono`; the CTA uses `ABC Favorit`. The visual register is *Bloomberg Businessweek* wearing developer-tool clothing.

Where peer dev-infra sites (Vercel, Supabase, Linear) commit to geometric sans systems, Resend's serif-led identity is what carries the brand: there's no signature accent colour, no chromatic gimmick. The canvas is `#000`, the type is editorial, and the link blue (`#3b9eff`) is borrowed from Radix UI's blue-10 — neutral enough not to compete with the typography. The brand's primary signal is **the serif itself**, deliberately the only ornament on the page.

Below the hero, sections breathe with editorial pacing — 120–200px of vertical space between sections, generous prose widths (680px), and a deliberate avoidance of multi-column information density. The page reads top-to-bottom like a long-form essay rather than a feature-grid landing. Each section carries a single h2 in Domaine, a body paragraph or two in Inter, and a code sample in Commit Mono. Cards are sparse; product screenshots appear inline rather than crowding the layout.

The signature design move is the **small pill CTA**. The primary action ("Get Started" or "Sign Up") renders as a tiny rounded pill in a faint-blue wash (`rgba(0,117,255,0.34)`), only 36px tall with 8/16 padding — conspicuously small relative to the 96–144px Domaine display above it. The size discipline keeps the editorial typography in command of the composition. Where Stripe makes the CTA the visual hero, Resend treats it as a footnote.

The surface ladder is three near-imperceptible gray stops (`#141517 → #191b1e → #212629`) — each just 4–6 lightness units apart. The differences read on a calibrated monitor; on most screens the three look nearly identical. That subtlety is intentional: Resend doesn't want elevation to compete with type. Cards lift through hairline borders (`rgba(255,255,255,0.07)` — a faint glow rather than a solid line) rather than shadow-and-elevation drama.

**Key Characteristics:**
- Pure `#000` canvas — no off-black calibration, the serif needs maximum contrast.
- Domaine Display serif at 96–144px, weight 400 only — editorial register, not bold.
- Three distinct type voices: Domaine (display), Inter (body), Commit Mono (code), ABC Favorit (CTA).
- Small pill CTA — 36px tall in faint-blue wash, deliberately understated.
- Three-step gray ladder (`#141517 / #191b1e / #212629`) — 4–6 lightness units apart.
- Hairline borders (`rgba(255,255,255,0.07)`) — faint glow, not solid line.
- Editorial pacing — 120–200px section gaps, 680px prose width.
- No signature hue — neutral grays plus serif is the entire visual identity.
- Blue accent (`#3b9eff`) only for inline links and CTA wash — never as fill.
- Centered hero composition — like a magazine cover.

## 2. Color Palette & Roles

### Primary

- **Background** (`#000000`): pure black canvas, no off-black calibration. The serif needs maximum contrast curves designed for high-contrast print.
- **Text** (`#f0f0f0`): primary copy — slightly off-white to soften against pure black. Mapped to `--color-gray-12`.
- **Brand** (`#f0f0f0`): the brand voice is the type itself — primary "accent" stays neutral. There's no signature hue.

### Brand & Dark

Three near-imperceptible gray stops form the surface ladder:

- **bg-elevated** (`#141517`): `--color-gray-1` — first surface stop.
- **bg-elevated-2 / surface** (`#191b1e`): `--color-gray-2` — card panels, primary card surface.
- **bg-elevated-3 / surface-2** (`#212629`): `--color-gray-3` — code blocks, input fields.
- **bg-elevated-4 / surface-3** (`#2a3035`): `--color-gray-4` — popover hover, deepest elevated.

### Accent

The single chromatic accent — used very sparingly, never as a fill on chrome:

- **Link Blue** (`#3b9eff`): `--color-blue-10` — inline links in copy, focus rings.
- **Link Blue Hover** (`#5fb1ff`): lighter blue.
- **Link Blue Soft** (`rgba(0,117,255,0.34)`): `--color-blue-4` — the CTA wash. The primary chromatic event on the page.
- **Link Blue Deep** (`#0075ff`): full saturated blue, rare.

Semantic accents (used inside docs and product screenshots, rare on marketing):

- **Mint** (`#3ddc84`): success / API key indicator.
- **Amber** (`#ffba08`): warning.
- **Coral** (`#ff5e5b`): danger / error.

### Interactive

- **CTA Background** (`rgba(0,117,255,0.34)`): the soft-blue wash on primary CTA.
- **CTA Text** (`#ffffff`): white on soft-blue.
- **Link** (`#3b9eff`): inline link in copy.
- **Focus Ring** (`2px solid #3b9eff`): blue ring with 2px offset on canvas.

### Neutral Scale

The Radix gray ramp (truncated to the values Resend uses):

- **Text** (`#f0f0f0`): primary copy, `--color-gray-12`.
- **Text Soft** (`#a1a4a5`): secondary copy, `--color-gray-11`.
- **Text Muted** (`#878d8f`): captions, metadata, `--color-gray-10`.
- **Text Faint** (`#5e6466`): disabled, `--color-gray-9`.
- **Text Disabled** (`#3f4546`): faintest, `--color-gray-7`.

### Surface & Borders

- **Surface** (`#191b1e`): primary card surface (alias of bg-elevated-2).
- **Surface 2** (`#212629`): code blocks, input fields.
- **Surface 3** (`#2a3035`): nested elevated.
- **Border** (`#212629`): hairline divider — same as surface-2, used as outline.
- **Border Soft** (`rgba(255,255,255,0.07)`): the **faint glow** border — not a solid line, more like a subtle backlight.
- **Border Strong** (`rgba(255,255,255,0.16)`): hover/focus outline.

### Shadow Colors

- **Ambient** (`rgba(0,0,0,0.40) 0 1px 2px`): rare faint lift.
- **Standard** (`rgba(0,0,0,0.50) 0 4px 12px`): hover elevation.
- **Elevated** (`rgba(0,0,0,0.60) 0 12px 32px`): modal.
- **Deep** (`rgba(0,0,0,0.80) 0 24px 48px`): rare backdrop.

Resend uses shadows sparingly — most depth comes from the surface ladder and faint-glow borders. Shadows would add visual weight that competes with the editorial typography.

### Semantic

- **Success** (`#3ddc84`): mint.
- **Warning** (`#ffba08`): amber.
- **Danger** (`#ff5e5b`): coral.
- **Info** (`#3b9eff`): blue.

## 3. Typography Rules

### Font Family

Four distinct type voices — the most stratified type system in the dev-tool category:

- **Display:** `"domaine", "Domaine Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`. Klim Type Foundry's literary book serif. **Weight 400 only** — Domaine carries enough presence at regular that bolder weights would feel heavy.
- **Body:** `inter, ui-sans-serif, system-ui, sans-serif`. The dev-tool default — Inter at 400/500/600 for long-form documentation legibility.
- **UI / CTA:** `"aBCFavorit", "ABC Favorit", ui-sans-serif, system-ui, sans-serif`. Lineto's contemporary geometric sans at 400/500. Used for buttons, nav, labels — a deliberate third register, neither serif (Domaine's drama) nor body (Inter's neutrality).
- **Mono:** `"commitMono", "Commit Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`. Open-source terminal-grade mono with intentionally over-equalised stem widths.

### OpenType Features

- **Domaine:** `kern, liga, dlig` — kerning, standard ligatures, and discretionary ligatures (Domaine's `ct`, `st` ligatures appear at display sizes).
- **Inter:** `kern, liga, calt` — standard.
- **ABC Favorit:** `kern, liga`.
- **Commit Mono:** `kern, tnum, zero` — tabular figures and slashed zero for code legibility.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Domaine | 144 | 400 | 0.95 | -0.015em | kern, liga, dlig | Largest hero (rare) |
| display-large | Domaine | 120 | 400 | 0.98 | -0.012em | kern, liga, dlig | Section hero |
| h1 | Domaine | 96 | 400 | 1.0 | -0.01em | kern, liga, dlig | Page H1 — "Email for / developers" |
| h2 | Domaine | 64 | 400 | 1.05 | -0.01em | kern, liga | Section heads |
| h3 | Domaine | 40 | 400 | 1.15 | -0.005em | kern, liga | Sub-section heads |
| h4 | Inter | 24 | 500 | 1.30 | 0 | kern, liga | Card titles — Inter, not Domaine (only at h1–h3) |
| body-large | Inter | 18 | 400 | 1.6 | 0 | kern, liga | Hero deck |
| body | Inter | 16 | 400 | 1.5 | 0 | kern, liga | Default body |
| body-small | Inter | 14 | 400 | 1.5 | 0 | kern, liga | Footer body |
| button | ABC Favorit | 14 | 500 | 1.0 | 0 | kern | CTA label |
| button-large | ABC Favorit | 15 | 500 | 1.0 | 0 | kern | Hero CTA |
| nav-link | ABC Favorit | 14 | 400 | 1.40 | 0 | kern | Top nav |
| label | ABC Favorit | 12 | 500 | 1.30 | 0.04em | kern, uppercase | UPPERCASE eyebrow |
| label-mono | Commit Mono | 11 | 500 | 1.30 | 0.04em | tnum, uppercase | Mono UPPERCASE category |
| caption | Inter | 13 | 400 | 1.4 | 0 | kern | Caption |
| micro | ABC Favorit | 11 | 500 | 1.3 | 0.02em | kern | Pill / badge text |
| code | Commit Mono | 14 | 400 | 1.6 | 0 | tnum, zero | Inline code chip |
| code-bold | Commit Mono | 14 | 500 | 1.6 | 0 | tnum, zero | Code emphasis |

### Principles

- **Domaine at 400 only.** Resend never weights Domaine at 600+ for headlines. The regular cut is what gives the type its bookish authority — heavier weights would tip the page toward marketing impact.
- **Reserve Domaine for hero + h1–h3.** Below h3 (40px), Domaine loses its presence and the body voice (Inter) takes over. h4 onward is Inter.
- **Three voices, three jobs.** Display = Domaine (drama). Body = Inter (neutrality). UI/CTA = ABC Favorit (functionality). Mono = Commit Mono (code). Each face has a distinct role; mixing them is forbidden.
- **Discretionary ligatures.** Domaine's `ct`, `st`, `ft` ligatures are enabled at display tier — they're the brand's editorial fingerprint. At body sizes they'd be precious.
- **Pure `#000` for serif contrast.** Off-black backgrounds dull Domaine's serifs. The pure black is part of the type's design — it was made for high-contrast print.
- **No serif emphasis.** Italics are rare. Domaine carries every drama-tier voice without italic.
- **Slashed zero in mono.** Commit Mono's `zero` feature distinguishes 0 from O in API examples — important for keys and IDs.
- **CTA stays small.** The button is rendered in ABC Favorit at 14px, height 36px — conspicuously small to keep eye on Domaine.

## 4. Component Stylings

### Buttons

**Primary (Soft-Blue Pill)**
- Background: `rgba(0,117,255,0.34)` — `--color-blue-4` translucent
- Text: `#ffffff`
- Padding: `8px 16px`, height 36
- Radius: 9999 (full pill)
- Border: `1px solid rgba(59,158,255,0.40)` — subtle blue trim
- Font: button (ABC Favorit 14 / 500)
- Hover: background `rgba(0,117,255,0.50)` + border opacity rises
- Use: hero CTA — Get Started, Sign Up. The only chromatic chrome on the page.

**Secondary (Dark-Surface Pill)**
- Background: `#191b1e`
- Text: `#f0f0f0`
- Padding: `8px 16px`, height 36
- Radius: 9999
- Border: `1px solid #212629`
- Hover: background `#212629` + border `rgba(255,255,255,0.16)`
- Use: Talk to Sales / Read Docs — neutral pair to primary.

**Ghost (Tertiary)**
- Background: transparent
- Text: `#f0f0f0`
- Padding: `6px 12px`
- Radius: 9999
- Hover: `rgba(255,255,255,0.05)` background
- Use: nav button, inline ghost.

### Cards

**Feature Card**
- Background: `#141517` (gray-1)
- Border: `1px solid rgba(255,255,255,0.07)` — faint glow
- Radius: 12
- Padding: 32
- Use: feature card on canvas — first elevation tier.

**Elevated Panel**
- Background: `#191b1e` (gray-2)
- Border: `1px solid rgba(255,255,255,0.07)`
- Radius: 12
- Padding: 40
- Use: second-tier elevated, e.g., highlighted feature.

**Pricing Card**
- Background: `#141517`
- Border: `1px solid rgba(255,255,255,0.07)`
- Radius: 16 (slightly larger)
- Padding: 40
- Use: pricing tier card.

**Pricing Card (Featured)**
- Background: `#191b1e` (one tier up)
- Border: `1px solid #3b9eff` — full blue accent border (rare chromatic moment)
- Radius: 16
- Padding: 40
- Use: featured pricing tier — the rare full-saturation blue moment.

### Code

**Code Block (Multi-Line)**
- Background: `#212629` (gray-3)
- Text: `#f0f0f0`
- Border: `1px solid rgba(255,255,255,0.07)`
- Radius: 8
- Padding: `20px 24px`
- Font: code (Commit Mono 14 / 400)
- Use: API code samples, `resend.emails.send(...)` snippets.

**Code Chip (Inline)**
- Background: `#191b1e` (gray-2)
- Text: `#f0f0f0`
- Border: `1px solid rgba(255,255,255,0.07)`
- Radius: 6
- Padding: `4px 8px`
- Font: code
- Use: inline `npm install resend`, API endpoint reference.

### Inputs / Forms

**Input**
- Background: `#212629`
- Border: `1px solid rgba(255,255,255,0.16)`
- Radius: 8
- Padding: `10px 14px`, height 40
- Focus: border `#3b9eff` + ring `0 0 0 2px rgba(59,158,255,0.20)`
- Use: email signup, contact form.

### Badges

**Neutral Pill**
- Background: `#191b1e`
- Text: `#a1a4a5`
- Border: `1px solid rgba(255,255,255,0.07)`
- Radius: 9999, Padding: `4px 12px`
- Font: micro (11/500 ABC Favorit)
- Use: NEW / category badges.

**Soft-Blue Pill**
- Background: `rgba(0,117,255,0.20)`
- Text: `#5fb1ff`
- Radius: 9999
- Use: feature badges where blue is earned.

### Navigation

Top nav 64px tall, `#000000` background (matches canvas) with no border on hero, `1px solid rgba(255,255,255,0.07)` border-bottom on scroll. Links: ABC Favorit 14/400 `#a1a4a5`, hover to `#f0f0f0`. Right side: Sign In (ghost) + Get Started (soft-blue pill primary).

## 5. Layout Principles

### Spacing System

Base 4px. Scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 120 / 160 / 200. Section gaps run **120–200px** (significantly more lavish than dev-tool peers); inside-card padding 32–40; nav padding `6px 12px`; grid gap 24.

The density is **editorial** — not the dense feature grids of Linear/Vercel, not the lavish breathing room of Apple. Resend's pacing matches a literary magazine's column: top-to-bottom rhythm, generous between-section air, prose-width centered.

### Grid & Container

- **Page width:** 1280px max.
- **Prose width:** 680px (intro paragraphs and long-form copy).
- **Header height:** 64px.
- **Hero height:** ~800px (taller than peer dev-tool sites).
- **Grid gap:** 24px between feature cards.

The page is **center-justified, top-to-bottom**. Multi-column layouts are rare; when they appear (pricing, comparison tables), they break out of the prose-width and use the full 1280px container.

### Whitespace Philosophy

Resend's whitespace is **literary, not lavish**. Sections breathe at 120–200px gaps — twice what Linear or Vercel use, half what Apple uses. The pacing rewards careful reading and gives Domaine room to land. Each h2 sits in its own visual paragraph, with 80–120px above and 32–48px below.

### Section Cadence

Pure black canvas runs edge-to-edge. Section breaks come from typography, not background shifts:

1. Hero (centered, ~800px tall) — Domaine 96–144px headline + small CTA.
2. Feature stack (alternating: text-left + code-right, then text-right + code-left).
3. Customer logo cloud (compact, faint).
4. Code-sample showcase (full-width code block in surface-2).
5. Pricing (3-col card grid).
6. FAQ (single-column accordion).
7. Footer.

The dark-canvas-throughout discipline is the brand's editorial signature — Resend doesn't break into light bands.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| None | 0 | Edge-bound (rare) |
| Micro | 2 | Decorative pills |
| XS | 4 | Tag chips |
| **SM** | **6** | **Code chips, small inputs** |
| MD | 8 | Code blocks, inputs |
| LG | 12 | Cards |
| XL | 16 | Pricing cards |
| **Pill** | **9999** | **Primary CTA — full pill, deliberately small** |

Resend's radius scale is short and disciplined. The full-pill (9999) is reserved for the small primary CTA and avatar elements — its compactness keeps the eye on Domaine. Cards land at 12 (lg); pricing at 16 (xl); code blocks and inputs at 8 (md).

**No compound radii.** Each component has consistent corners.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Body copy on canvas |
| 1 | Tonal `#141517` over `#000` + faint-glow border | Feature cards |
| 2 | Tonal `#191b1e` + faint-glow border | Elevated panels |
| 3 | Tonal `#212629` + faint-glow border | Code blocks, inputs |
| 4 | `0 12px 32px rgba(0,0,0,0.60)` | Modal (rare) |
| 5 | `0 24px 48px rgba(0,0,0,0.80)` | Modal backdrop (rare) |

### Shadow Philosophy

Resend uses **tonal layering plus faint-glow borders** — almost no shadows. The three near-imperceptible gray stops (`#141517 → #191b1e → #212629`) are each just 4–6 lightness units apart; the differences are subtle on most screens. The faint-glow border (`rgba(255,255,255,0.07)`) reads as a soft backlight rather than a solid line, giving cards a floating quality without the weight of shadow.

The discipline is: **shadows would compete with Domaine's serif**, so they're avoided. The editorial typography is the figure; the gray ladder is just the ground.

## 8. Interaction & Motion ✨

### Easing Curves

- **Standard:** `cubic-bezier(0.4, 0, 0.2, 1)` — default.
- **Emphasized:** `cubic-bezier(0.2, 0, 0, 1)` — modal entrance.
- **Entrance:** `cubic-bezier(0, 0, 0.2, 1)` — content fade-in.

### Duration Buckets

- **Fast (100ms):** color transitions, button hover.
- **Standard (200ms):** card hover.
- **Slow (320ms):** modal entry.
- **Fade (600ms):** hero load — long, magazine-style fade.

### Per-Component Micro-States

- **Button (soft-blue pill):** background `rgba(0,117,255,0.34)` → `rgba(0,117,255,0.50)` + border opacity rises. 100ms.
- **Button (secondary):** background `#191b1e` → `#212629`. 100ms.
- **Card (feature):** border opacity 0.07 → 0.12 on hover; no transform, no shadow. 200ms.
- **Code chip:** subtle background lighten on hover (`#191b1e` → `#212629`). 100ms.
- **Link (inline blue):** text `#3b9eff` → `#5fb1ff` on hover, with subtle underline. 100ms.
- **Nav-link:** text `#a1a4a5` → `#f0f0f0`. 100ms.

### Page Transitions

- Hero: long fade-in (600ms) with 12px translateY rise. The slow fade is part of the editorial register — fast transitions would feel SaaS-y.
- Below-fold sections: fade + 8px translateY on scroll-into-viewport. 320ms ease-entrance.
- Code block reveal: cross-fade with subtle border highlight on first appearance.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)`:
- All transforms collapse to opacity-only.
- Hero fade reduces from 600ms to 200ms opacity.
- Hover state color transitions persist.

## 9. Accessibility & A11y ✨

### Contrast Pairs

- **Body text on canvas:** `#f0f0f0` on `#000000` → 18.7:1. **AAA.**
- **Soft text on canvas:** `#a1a4a5` on `#000000` → 9.6:1. **AAA at body.**
- **Muted text on canvas:** `#878d8f` on `#000000` → 6.4:1. **AA at body, AAA at large.**
- **Faint text:** `#5e6466` on `#000000` → 3.9:1. **AA at large only** — limit to ≥18px.
- **Disabled text:** `#3f4546` on `#000000` → 2.0:1 — fails. Reserve for disabled-only.
- **Inline link blue on canvas:** `#3b9eff` on `#000000` → 7.4:1. **AAA at body.**
- **CTA text on soft-blue:** `#ffffff` on effective `#1a3f7a` (translucent over black) → 8.2:1. **AAA.**
- **Body text on gray-1 card:** `#f0f0f0` on `#141517` → 16.8:1. **AAA.**
- **Body text on gray-3 code block:** `#f0f0f0` on `#212629` → 13.4:1. **AAA.**

### Focus Indicators

`2px solid #3b9eff` with 2px offset. The blue ring is the only saturated chromatic moment outside the CTA wash, and it doubles as a brand signal. Form fields use the same blue ring at `0 0 0 2px rgba(59,158,255,0.20)` softer halo.

### ARIA Pattern Recommendations

- **Top nav:** `<nav aria-label="Primary">` with skip-link.
- **Code blocks:** `role="region"` with `aria-label="Code example: send email with React"` so screen readers announce context. Copy button labeled `aria-label="Copy code"`.
- **Pricing:** `role="region"` with `aria-label="Pricing tiers"`.
- **Modal:** `role="dialog"` + `aria-modal="true"`.
- **Inline blue links:** `<a>` with descriptive text — never bare URLs.
- **CTA buttons:** semantic `<button>`/`<a>` with descriptive labels.

### Keyboard Navigation

- Tab order: nav → primary CTA → secondary CTA → page content → footer.
- Skip-link to `#main-content` first focus stop.
- Code-block copy buttons keyboard-accessible (Tab + Enter).
- FAQ accordion: Tab to expand, Enter/Space to toggle, Esc to collapse.

### Screen Reader Hints

- Domaine display headlines use semantic `<h1>` through `<h3>`.
- Code chips render in `<code>` elements so screen readers announce as code.
- API endpoint examples: announce literally — `"resend.emails.send"`.
- Decorative serif ornaments (rare): `aria-hidden="true"`.

### Reduced Motion

`prefers-reduced-motion: reduce` collapses transforms and reduces fade durations. Hover state color transitions persist.

## 10. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | 0–640px | Single column, hero shrinks to ~600px tall, Domaine collapses to 56px |
| Tablet | 640–1024px | Two-column features, prose width holds at 680 |
| Desktop | 1024–1280px | Full layout, multi-column pricing |
| Wide | 1280–1536px+ | 1280px container caps |

### Touch Targets

- Buttons height 36 — pad to 44 with surrounding hit area on mobile.
- Code-block copy buttons 32px — pad to 44.
- Nav links 44px hit area on mobile.

### Collapsing Strategy

- **Hero:** display-hero shrinks 144 → 96 → 72 → 56 → 40. Line-height stays 0.95–1.05.
- **Feature alternating layout:** text-left/code-right pattern collapses to vertical stack at <1024px.
- **Pricing:** 3-col → vertical stack on mobile, "Most Popular" tier first.
- **Code blocks:** scale fluidly; mono text inside scrolls horizontally if line is long.

### Image Behavior

- Product UI screenshots: aspect-ratio container, scale to fit, lazy-loaded below fold.
- Customer logos: SVG, scale fluidly.
- Decorative serif ornaments: SVG, scale with display tier.

### Container Queries

Resend's pricing cards may use `@container` queries to switch from horizontal to vertical layouts based on container width — useful when a card sits in a narrow column.

## 11. Content & Voice ✨

### Tone

**Editorial, technical, restrained.** Resend writes like a magazine that happens to ship an SDK. Sentences are crafted; word choice favors precision over enthusiasm. The voice never says "amazing" or "powerful"; it says "send email" and lets the API examples carry the proof.

### Microcopy Patterns

- **Headlines:** elemental and direct. "Email for / developers", "The best email API for developers", "Send better emails."
- **Decks:** specifics + capability. "Build, send, and track emails with the modern API. From transactional to marketing — we've got you covered."
- **CTA verbs:** "Get Started", "Sign Up", "Read Docs", "Talk to Sales". Specific, never aspirational.
- **Error messages** (in-product convention): editorial-precise. "We couldn't send your email. Check the recipient's address and try again."

### Empty States

In-product / docs: "No emails sent yet. Try `resend.emails.send({...})` to send your first message." Always with a concrete code suggestion.

### Success Confirmations

- After signup: "Welcome. Your API key is on its way to your inbox."
- After send: "Email sent. View it in your dashboard."
- Toast pattern: minimal — small text + optional inline link.

### CTA Verb Conventions

The verbs Resend uses, ranked:
1. **Get Started** (primary conversion)
2. **Sign Up**
3. **Read Docs** / **Read the Docs**
4. **Talk to Sales** (enterprise)
5. **Try Resend** (rare, for campaigns)
6. **Sign In** (returning users)

What Resend *doesn't* say: "Start your free trial" (too SaaS), "Click here" (never), "Schedule a demo" (Resend prefers self-serve). The voice avoids B2B marketing-speak.

## 12. Dark Mode & Theming ✨

Resend is **dark-mode-only** by default. The brand identity is built around the pure-`#000` canvas + Domaine serif pairing — there's no light-mode marketing variant. The in-product app supports light/dark mode (light mode would invert canvas to `#ffffff` with `#0a0a0a` text, and Domaine remains at weight 400), but the marketing site stays dark across user preference.

If a future light-mode variant were implemented, the canonical token swap would be:

```yaml
colors-light:
  bg: '#ffffff'                   # pure white — Domaine designed for high-contrast print
  bg-elevated: '#fafafa'          # gray-1 light
  bg-elevated-2: '#f5f5f5'        # gray-2 light
  bg-elevated-3: '#ebebeb'        # gray-3 light
  surface: '#f5f5f5'
  text: '#0a0a0a'                 # near-black, slight off-black for serif softness
  text-soft: '#5e6466'
  text-muted: '#878d8f'
  brand: '#0a0a0a'
  link-blue: '#0075ff'             # full saturated blue (light backgrounds need more contrast)
  link-blue-soft: 'rgba(0,117,255,0.12)' # softer wash on light
  border: '#ebebeb'
  border-soft: 'rgba(0,0,0,0.06)'
```

Domaine's contrast curve was designed for high-contrast print, so pure white + pure black is the canonical light variant — same maximum-contrast principle as the dark mode.

**Dark-only register** for marketing — the editorial atmosphere depends on the pure-black canvas.

## 13. Lineage & Influences

Resend's design lineage is **editorial publishing** — *The New Yorker*, *Bloomberg Businessweek*, *Harper's Magazine*, *The Paris Review* — repurposed for developer infrastructure. Klim Type Foundry's Domaine Display is the literary serif most associated with that tradition; pairing it with pure black creates the magazine-on-screen register that Vercel and Linear (with their geometric sans systems) explicitly avoid.

The four-voice type system (Domaine + Inter + ABC Favorit + Commit Mono) is unusual for the dev-tool category. Most peers commit to a single typographic voice (Linear: Inter; Vercel: Inter Display; Stripe: custom Söhne-derived; Supabase: Custom). Resend's stratified system mirrors how a magazine works: display serif for headlines, sans for body, dingbat sans for captions and ornaments, mono for code listings. Each voice has a domain.

The neutral grays-plus-blue-link palette is borrowed from Radix UI's color system — the same gray and blue ramps power most of Resend's UI tokens. The decision to use Radix's neutral palette signals "we're using the de facto open-source design tokens" in a way that closed brand systems can't.

What Resend *rejects*: signature accent colors (no Stripe iridescence, no Linear blue gradients), gradient surfaces (no glass morphism), feature-dense grids (no Vercel-style data-rich panels), large CTA buttons (no Supabase-style "Get Started" hero pill). The brand's discipline is **subtraction**: less is the visual identity.

**Influences:**
- **Klim Type Foundry / Domaine Display** — literary-magazine display serif (https://klim.co.nz)
- **The New Yorker / Bloomberg Businessweek** — editorial serif-on-black grammar (https://www.newyorker.com)
- **Commit Mono** — open-source terminal-grade mono (https://commitmono.com)
- **Lineto / ABC Favorit** — contemporary geometric sans for CTA voice (https://lineto.com/typefaces/favorit)
- **Inter** — body voice, dev-tool default (https://rsms.me/inter/)
- **Radix UI color system** — neutral gray + blue accent ramps (https://radix-ui.com/colors)

## 14. Do's and Don'ts

### Do's

- **Do** reserve **Domaine Display** for hero + h1–h3 only — its presence is what defines the brand, and over-use would dilute it. h4 and below are Inter.
- **Do** use **Commit Mono** for every code chip and inline API token; it's the third voice the system depends on.
- **Do** use **ABC Favorit** for buttons, nav, labels — the deliberate fourth register that's neither serif (drama) nor body (neutrality).
- **Do** keep the canvas at pure `#000` — Domaine's contrast curve was designed for high-contrast print, and off-black backgrounds dull its serifs.
- **Do** ship the primary CTA as a small soft-blue pill (`rgba(0,117,255,0.34)` background, 36px tall, `8/16` padding). The compactness keeps the eye on Domaine.
- **Do** use the three-step gray ladder (`#141517 / #191b1e / #212629`) for surface elevation — 4–6 lightness units apart, deliberately subtle.
- **Do** use faint-glow borders (`rgba(255,255,255,0.07)`) instead of solid lines or shadows. The faint glow is the depth language.
- **Do** breathe at 120–200px between sections. The editorial pacing is part of the brand identity.
- **Do** enable Domaine's discretionary ligatures (`dlig`) at display tier — `ct`, `st` ligatures are the editorial fingerprint.
- **Do** use the slashed zero in Commit Mono — distinguishes 0 from O in API examples.

### Don'ts

- **Don't** introduce a saturated brand accent; the system depends on neutral-plus-serif for its editorial register. Adding a "Resend orange" or "Resend purple" would tip the brand toward generic SaaS.
- **Don't** weight Domaine at 600+ for headlines; the regular cut is what gives the type its bookish authority.
- **Don't** mix Inter into the hero — body Inter at H1 size reads as a different brand entirely (Linear / Vercel territory).
- **Don't** use shadows for elevation. The surface ladder + faint-glow border is the depth language.
- **Don't** make the CTA large. The small pill is the discipline; a 56px hero CTA pill would dominate the composition and silence Domaine.
- **Don't** add gradient washes or glass effects. The pure-black canvas is the brand.
- **Don't** drop into multi-column dense feature grids. Top-to-bottom editorial pacing is the layout language.
- **Don't** use system serif fallbacks (Georgia, Times) at hero size if Domaine fails to load — fall back to Inter at the same size instead. Generic serifs would look broken.
- **Don't** mix the four type voices. Domaine + Inter + ABC Favorit + Commit Mono have specific jobs; using ABC Favorit for body would dilute the system.
- **Don't** off-black the canvas to "soften" the serifs. Domaine was made for pure black; calibrated off-blacks (`#0a0a0a`, `#141517`) reduce the type's legibility curve.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:                  #000000
bg-elevated (gray-1): #141517
bg-elevated-2 (gray-2): #191b1e
bg-elevated-3 (gray-3): #212629
text:                #f0f0f0
text-soft:           #a1a4a5
text-muted:          #878d8f
link-blue:           #3b9eff
cta-bg:              rgba(0,117,255,0.34)
border-glow:         rgba(255,255,255,0.07)
```

### Example Component Prompts

- **Hero:** "Create a centered hero on a `#000000` pure-black canvas with a 96–144px Domaine Display / weight 400 / line-height 0.95 / tracking -0.015em headline reading 'Email for / developers' with a line break on the slash. Below: an 18px Inter 400 deck in `#a1a4a5` muted, then a small primary CTA pill in `rgba(0,117,255,0.34)` background / `#ffffff` text / 9999 radius / `8px 16px` padding / 36px tall in ABC Favorit 14/500. Generous 120px space between hero elements."

- **Code-sample feature row:** "Design a feature row split horizontally: left side has h2 in Domaine 64/400 / line-height 1.05, body in Inter 16/400 `#a1a4a5`, an inline code chip in Commit Mono 14 reading `resend.emails.send({...})` with `#191b1e` background and faint-glow border. Right side has a `#212629` code block with 8px radius, 20×24 padding, multi-line Commit Mono code with proper syntax-highlight tokens."

- **Pricing card:** "Place a pricing tier card with `#141517` background, `1px solid rgba(255,255,255,0.07)` faint-glow border, 16px radius, 40px padding. Tier name in ABC Favorit 12/500 UPPERCASE label `0.04em` tracking. Price in Domaine 64/400. Features list in Inter 16/400 with mint `#3ddc84` checkmarks. Subscribe CTA at the bottom — small soft-blue pill, full width."

- **Feature card:** "Build a feature card with `#141517` background, `1px solid rgba(255,255,255,0.07)` faint-glow border, 12px radius, 32px padding, no shadow. Title in Inter 24/500 (NOT Domaine — h4 is Inter), body in Inter 16/400 `#a1a4a5`, optional inline code chip."

- **Soft-blue CTA pill:** "Create a primary CTA as `rgba(0,117,255,0.34)` background (translucent blue wash) with `#ffffff` text, `1px solid rgba(59,158,255,0.40)` border, full pill radius (9999), `8px 16px` padding, 36px height, ABC Favorit 14/500 label 'Get Started'. Hover: background opacity rises to 0.50, border opacity rises. The button is conspicuously small to keep eye on Domaine."

- **Code block (multi-line):** "Render a code block at `#212629` background, `1px solid rgba(255,255,255,0.07)` border, 8px radius, `20px 24px` padding, Commit Mono 14/400 `#f0f0f0`, slashed zero on. Add a copy icon button in the top-right corner that shows a check on click."

### Iteration Guide

1. **Anchor canvas at pure `#000000`.** Domaine was designed for high-contrast print. Off-black tints (`#0a0a0a`, `#141517`) dull the serifs and tip the page toward generic dev-tool dark mode.
2. **Set Domaine at weight 400 only.** Bolder weights lose the editorial register. The regular cut at 96–144px is the brand voice.
3. **Reserve Domaine for h1–h3 (40px+).** Below 40px, Domaine loses presence. h4 onward is Inter — the family swap is deliberate.
4. **Make the CTA small.** 36px tall, `8/16` padding, full pill in soft-blue wash. A larger CTA would dominate the composition. The compactness is the discipline.
5. **Use four type voices with distinct jobs.** Domaine = drama (display). Inter = neutrality (body). ABC Favorit = function (UI/CTA). Commit Mono = code. Mixing them is forbidden.
6. **Three-step gray ladder for elevation.** `#141517 / #191b1e / #212629` — 4–6 lightness units apart. Subtle is the point. Bigger jumps would feel SaaS.
7. **Faint-glow borders, no shadows.** `rgba(255,255,255,0.07)` reads as soft backlight. Shadows would compete with Domaine's serif weight.
8. **Breathe at 120–200px between sections.** Editorial pacing, not lavish. Vercel/Linear use 64–96; Apple uses 200+. Resend lives at 120–160 — the magazine column rhythm.
