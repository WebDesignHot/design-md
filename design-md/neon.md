---
name: Neon
tagline: 'Serverless Postgres dressed in late-night green — a near-black canvas with a single electric mint accent.'
updated_at: 2026-05-05T10:17:17+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://neon.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, sans, mono, structured, cool, bright]
preview_swatch: ['#0a0a0b', '#34d59a', '#94b5f7']
related: [supabase, vercel, planetscale]
description: 'Neon runs a near-black canvas (`#0a0a0b`) with a single electric mint accent (`#34d59a`) — the green of an OLED indicator lamp. The supporting palette ranges through forest tones (`#285d49`, `#2c6d4c`) for darker tinted panels and a cool periwinkle (`#94b5f7`) used for documentation links. The display face is custom; mono numerals carry the metric copy.'

colors:
  # Primary
  bg: '#0a0a0b'                  # near-black canvas (OLED-grade)
  bg-deep: '#000000'             # full-bleed hero, footer
  bg-elev-1: '#0c0d0d'           # secondary canvas
  bg-elev-2: '#111215'           # card surface
  bg-elev-3: '#151617'           # mid-tone panel / popover
  surface: '#111215'             # card surface (observed)
  surface-alt: '#151617'         # secondary panel
  surface-tinted: '#285d49'      # forest-green tinted panel
  surface-tinted-2: '#2c6d4c'    # secondary tinted green
  surface-tinted-soft: '#cae6d9' # soft mint surface (light feature blocks)

  # Brand & Dark
  brand: '#34d59a'               # electric mint, primary action + status
  brand-hover: '#37c38f'         # hover variant (slightly desaturated)
  brand-pressed: '#2cb583'       # active/pressed state
  brand-deep: '#1a8d65'          # deep mint for icon strokes
  brand-glow: '#34d59a33'        # 20% glow for hero halos
  on-brand: '#0a0a0b'            # near-black text on mint fill

  # Accent
  accent: '#94b5f7'              # cool periwinkle (links, doc labels)
  accent-hover: '#a9c4f9'        # link hover
  accent-soft: '#94b5f71f'       # 12% periwinkle wash

  # Interactive
  link: '#94b5f7'                # documentation links
  link-hover: '#a9c4f9'          # link hover
  link-visited: '#7d9ce0'        # visited link
  selected: '#34d59a26'          # 15% mint selection
  disabled: '#3a3c40'            # disabled control
  disabled-text: '#5b5e64'       # disabled text

  # Neutral Scale (heading → faint)
  text: '#ffffff'                # primary copy
  text-heading: '#ffffff'        # headlines
  text-muted: '#94979e'          # secondary copy
  text-soft: '#a3a6b3'           # tertiary, captions
  text-faint: '#c2c4cc'          # quaternary
  text-disabled: '#5b5e64'       # disabled state

  # Surface & Borders
  border: '#303236'              # solid hairline (rgb 48,50,54)
  border-soft: '#ffffff14'       # 8% white
  border-strong: '#4a4d52'       # emphasized border
  border-brand: '#34d59a66'      # 40% mint border on focus

  # Shadow
  shadow-ambient: 'rgba(0,0,0,0.35)'    # low ambient shadow
  shadow-standard: 'rgba(0,0,0,0.55)'   # standard card shadow
  shadow-elevated: 'rgba(0,0,0,0.7)'    # popover / modal
  shadow-glow: 'rgba(52,213,154,0.25)'  # mint glow on focus

  # Semantic
  success: '#34d59a'             # success uses brand mint
  success-bg: '#2c6d4c'          # success surface tinted
  warning: '#f5a623'             # amber warning
  warning-bg: '#3a2a10'          # warning surface
  danger: '#ff5c5c'              # danger red
  danger-bg: '#3a1818'           # danger surface
  info: '#94b5f7'                # info uses periwinkle
  info-bg: '#1a2240'             # info surface

typography:
  display:
    family: '"Esbuild", Inter, -apple-system, "system-ui", "Segoe UI", Roboto, sans-serif'
    weights: [500, 600, 700]
    opentype-features: ['ss01', 'ss02', 'cv11', 'tnum']
  body:
    family: 'Inter, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['ss01', 'cv11']
  mono:
    family: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace'
    weights: [400, 500, 600]
    opentype-features: ['zero', 'tnum']
  scale:
    display-hero:   { size: 96, weight: 600, lineHeight: 1.0,  tracking: '-0.04em', family: display, opentype: 'ss01, ss02' }
    display-large:  { size: 72, weight: 600, lineHeight: 1.05, tracking: '-0.03em', family: display, opentype: 'ss01' }
    h1:             { size: 56, weight: 600, lineHeight: 1.08, tracking: '-0.025em', family: display, opentype: 'ss01' }
    h2:             { size: 40, weight: 600, lineHeight: 1.1,  tracking: '-0.02em', family: display }
    h3:             { size: 28, weight: 600, lineHeight: 1.2,  tracking: '-0.015em', family: display }
    h4:             { size: 22, weight: 500, lineHeight: 1.3,  tracking: '-0.01em', family: display }
    body-large:     { size: 18, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
    body:           { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0', family: body }
    body-small:     { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    label-mono:     { size: 12, weight: 500, lineHeight: 1.3,  tracking: '0.04em', family: mono, opentype: 'zero, tnum' }
    button:         { size: 15, weight: 500, lineHeight: 1.0,  tracking: '-0.005em', family: body }
    button-small:   { size: 13, weight: 500, lineHeight: 1.0,  tracking: '0', family: body }
    link:           { size: 16, weight: 500, lineHeight: 1.5,  tracking: '0', family: body }
    caption:        { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0', family: body }
    caption-small:  { size: 12, weight: 400, lineHeight: 1.35, tracking: '0', family: body }
    micro:          { size: 11, weight: 500, lineHeight: 1.3,  tracking: '0.05em', family: body }
    code-body:      { size: 13, weight: 400, lineHeight: 1.55, tracking: '0', family: mono, opentype: 'zero' }
    code-bold:      { size: 13, weight: 600, lineHeight: 1.55, tracking: '0', family: mono, opentype: 'zero' }
    code-label:     { size: 11, weight: 500, lineHeight: 1.3,  tracking: '0.06em', family: mono, opentype: 'zero, tnum' }

radius:
  micro: 2
  sm: 4
  md: 8           # button
  lg: 12          # card
  xl: 16          # hero shell
  featured: 20    # signature feature shells
  pill: 9999

spacing:
  base: 4
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]
  xxs: 2
  xs: 4
  sm: 8
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

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transitions reduce to opacity-only fades, mint-glow pulses disabled.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0,0,0,0.35) 0 1px 2px'
  standard: 'rgba(0,0,0,0.55) 0 8px 16px -4px'
  elevated: 'rgba(0,0,0,0.7) 0 20px 40px -8px, rgba(0,0,0,0.4) 0 8px 16px -8px'
  deep: 'rgba(0,0,0,0.8) 0 32px 64px -16px'
  ring: '0 0 0 2px #34d59a'
  glow: '0 0 24px rgba(52,213,154,0.3)'

accessibility:
  contrast-text-on-bg: 19.2          # AAA at body sizes (white on #0a0a0b)
  contrast-text-on-brand: 13.4       # AAA — near-black text on mint
  contrast-muted-on-bg: 5.8          # AA at body sizes
  contrast-link-on-bg: 8.9           # AAA — periwinkle on near-black
  focus-ring: '2px solid #34d59a, offset 2px'
  reduced-motion-honored: true
  keyboard-nav: 'standard tab order; mint focus ring on all interactive controls'

components:
  button-primary:
    bg: '#34d59a'
    text: '#0a0a0b'
    padding: '10px 16px'
    radius: 8
    font: 'button (15/500)'
    border: 'none'
    hover: 'bg → #37c38f; subtle scale 1.0 → 1.005'
    active: 'bg → #2cb583'
    use: 'primary CTA — Sign up, Deploy, Get started'
  button-ghost:
    bg: 'transparent'
    text: '#ffffff'
    padding: '10px 16px'
    radius: 8
    font: 'button (15/500)'
    border: '1px solid #303236'
    hover: 'border → #4a4d52; bg → rgba(255,255,255,0.04)'
    use: 'secondary action — Documentation, Sign in'
  button-danger:
    bg: 'transparent'
    text: '#ff5c5c'
    padding: '10px 16px'
    radius: 8
    border: '1px solid rgba(255,92,92,0.4)'
    hover: 'bg → rgba(255,92,92,0.08)'
    use: 'destructive action — Delete branch, Drop database'
  card:
    bg: '#111215'
    text: '#ffffff'
    padding: '24px'
    radius: 12
    border: '1px solid #303236'
    shadow: 'rgba(0,0,0,0.35) 0 1px 2px'
    use: 'feature card, pricing tier, doc snippet'
  card-tinted:
    bg: '#285d49'
    text: '#ffffff'
    padding: '24px'
    radius: 12
    border: 'none'
    use: 'forest-tinted feature panel — section emphasis'
  input:
    bg: '#0c0d0d'
    text: '#ffffff'
    placeholder: '#5b5e64'
    padding: '10px 14px'
    radius: 8
    border: '1px solid #303236'
    focus: 'border → #34d59a; ring 0 0 0 2px rgba(52,213,154,0.3)'
    use: 'text input, search, connection-string field'
  badge:
    bg: '#285d49'
    text: '#34d59a'
    padding: '2px 8px'
    radius: 9999
    font: 'micro (11/500)'
    use: 'status pill — Live, Beta, region label'
  nav-link:
    bg: 'transparent'
    text: '#a3a6b3'
    padding: '8px 12px'
    font: 'body-small (14/500)'
    hover: 'text → #ffffff'
    active: 'text → #34d59a'
    use: 'top nav, sidebar nav'

lineage:
  summary: |
    Neon's chromatic identity is the **mint-green-on-near-black** pairing
    that immediately reads "running database, healthy." `#34d59a` is the
    colour of a heartbeat light — bright enough to feel electric, cool
    enough to stay legible against the `#0a0a0b` canvas. The supporting
    forest tones (`#285d49`, `#2c6d4c`) give the brand a tonal range no
    other Postgres-in-the-cloud product has — Supabase committed to
    forest-green on light, Neon committed to electric-mint on dark.
    The periwinkle accent `#94b5f7` is a small but distinctive secondary
    — it shows up on documentation links and feature labels, providing
    the only chromatic counterpoint to the green. Type is Inter for body
    with a custom sans for display; mono is JetBrains-class for code
    samples and connection strings. The overall feel is "OLED status
    panel" — every interaction reads as a literal indicator lamp.
  influences:
    - name: 'OLED dashboard panels'
      role: 'The mint indicator-lamp aesthetic — bright single-hue accent on near-black.'
      url: https://en.wikipedia.org/wiki/OLED
    - name: 'Supabase'
      role: 'Open-source Postgres lineage; Neon adopts the same green semantics but inverts to dark canvas.'
      url: https://supabase.com
    - name: 'Vercel'
      role: 'Near-black canvas, single-accent confidence, tight Inter headlines.'
      url: https://vercel.com
    - name: 'Linear'
      role: 'Near-black canvas with restrained chromatic palette, tight 8px button radius.'
      url: https://linear.app

dark-mode: native    # Neon ships dark-only — no light variant
---

## 1. Visual Theme & Atmosphere

Neon's home page sits on a `#0a0a0b` canvas — a near-black so dark it
reads as deliberately OLED-friendly. The single accent, mint-green
`#34d59a`, carries every CTA and every status indicator. The
combination is "running database, all systems green" rendered as
brand language. You feel like you're looking at a perfectly tuned
status panel rather than a marketing page.

Where Supabase commits to forest-green on a light substrate, Neon
inverts the relationship — electric mint on near-black. The forest
tones (`#285d49`, `#2c6d4c`) live as tinted panel backgrounds, giving
the brand a chromatic ladder rather than a single accent. The
periwinkle `#94b5f7` enters quietly, showing up on documentation
links and feature labels as the only chromatic counterpoint.

The mood is **late-night dev console**. Mono numerals run the
metrics; the hero copy is set in a custom sans that reads tighter
than vanilla Inter; whitespace is generous but the type is dense
enough to feel technical. There is no skeuomorphic 3D, no gradient
mesh, no AI-generated imagery — Neon's identity comes entirely from
its chromatic discipline and typographic restraint.

Reading the page top-to-bottom, the rhythm alternates between the
near-black canvas, forest-tinted feature panels, and inline mono
code samples. The mint accent is rationed: it appears on the primary
button, on status dots, and on a single hero word per section. Over-
applying it — colouring more than ~5% of any viewport — would
collapse the OLED-indicator semantic into noise.

**Key Characteristics**

- OLED near-black canvas (`#0a0a0b`) with electric mint accent (`#34d59a`)
- Forest-green tonal ladder for tinted panels (`#285d49`, `#2c6d4c`)
- Periwinkle (`#94b5f7`) as the only chromatic counterpoint, reserved for documentation links
- Inter body + custom display sans + JetBrains Mono for connection strings
- Tight 8px button radius, 12px card radius, 16px hero shell radius
- Status dots (●) borrow the mint hue from server-room indicator lamps
- Mono tabular numerals for replication metrics, region counts, latency figures
- Dark-only — no light variant offered
- Generous vertical rhythm with dense type within sections
- Forest-tinted feature panels as the primary section-break device

## 2. Color Palette & Roles

### Primary

- **Background** (`#0a0a0b`) [→ `--neon-bg`]: page canvas, near-black with imperceptible warmth
- **Primary Text** (`#ffffff`) [→ `--neon-text`]: headlines and primary copy
- **Primary CTA Fill** (`#34d59a`) [→ `--neon-brand`]: mint button background

### Brand & Dark

- **Brand Mint** (`#34d59a`) [→ `--neon-brand`]: electric mint, the brand's defining hue — the colour of an OLED indicator lamp
- **Brand Hover** (`#37c38f`) [→ `--neon-brand-hover`]: slightly desaturated for hover continuity
- **Brand Pressed** (`#2cb583`): active/pressed state, deeper still
- **Brand Deep** (`#1a8d65`): icon strokes and decorative accents
- **Bg Deep** (`#000000`): pure black for full-bleed hero panels
- **On-Brand Text** (`#0a0a0b`): near-black on mint — chosen over white for max contrast (13.4:1)

### Accent

- **Periwinkle** (`#94b5f7`) [→ `--neon-accent`]: documentation links, feature labels — the page's only chromatic counterpoint
- **Periwinkle Hover** (`#a9c4f9`): link hover state
- **Mint Glow** (`#34d59a33`): 20% mint wash for hero halos and hover backgrounds

### Interactive

- **Link** (`#94b5f7`): periwinkle for inline links and documentation
- **Link Hover** (`#a9c4f9`): brightened periwinkle
- **Link Visited** (`#7d9ce0`): muted periwinkle for visited state
- **Selected** (`#34d59a26`): 15% mint wash for selection highlight
- **Disabled Bg** (`#3a3c40`): disabled control fill
- **Disabled Text** (`#5b5e64`): disabled text

### Neutral Scale

- **Text Heading** (`#ffffff`): full white for headlines
- **Text Body** (`#ffffff`): same — body copy is full white on the near-black canvas
- **Text Muted** (`#94979e`): secondary copy, metadata
- **Text Soft** (`#a3a6b3`): tertiary, captions, nav inactive
- **Text Faint** (`#c2c4cc`): quaternary annotations
- **Text Disabled** (`#5b5e64`): disabled-state copy

### Surface & Borders

- **Surface** (`#111215`) [→ `--neon-surface`]: card and panel base
- **Surface Alt** (`#151617`): mid-tone panel
- **Surface Tinted** (`#285d49`): forest-green feature panel — Neon's signature chromatic surface
- **Surface Tinted 2** (`#2c6d4c`): secondary forest tint
- **Surface Tinted Soft** (`#cae6d9`): rare soft-mint surface for inverted feature blocks
- **Border** (`#303236`) [→ `--neon-border`]: solid hairline
- **Border Soft** (`#ffffff14`): 8% white translucent for low-emphasis dividers
- **Border Strong** (`#4a4d52`): emphasized border on hover/focus

### Shadow Colors

Shadows are pure-black at low alpha — never tinted with brand. Multi-layer when elevated:

- **Ambient** (`rgba(0,0,0,0.35)`): low resting shadow
- **Standard** (`rgba(0,0,0,0.55)`): card hover
- **Elevated** (`rgba(0,0,0,0.7)`): popover and dropdown
- **Glow** (`rgba(52,213,154,0.25)`): exception — mint focus glow only

### Semantic

- **Success** (`#34d59a`): success uses brand mint — they are the same hue
- **Success Bg** (`#2c6d4c`): success surface tinted
- **Warning** (`#f5a623`): amber, only colour outside the green/periwinkle palette
- **Warning Bg** (`#3a2a10`): warning surface
- **Danger** (`#ff5c5c`): coral red
- **Danger Bg** (`#3a1818`): danger surface
- **Info** (`#94b5f7`): info uses periwinkle accent
- **Info Bg** (`#1a2240`): info surface

## 3. Typography Rules

### Font Family

- **Display**: `Esbuild` (custom Inter-class sans), Inter, -apple-system fallback chain
- **Body**: Inter — same fallback chain
- **Mono**: JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace
- **OpenType features**: `ss01` (single-storey a) and `ss02` for the display face; `tnum` (tabular numerals) and `zero` (slashed zero) on the mono throughout metrics, latency figures, and connection strings

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | display | 96 | 600 | 1.0 | -0.04em | ss01, ss02 | hero only, single line |
| display-large | display | 72 | 600 | 1.05 | -0.03em | ss01 | hero subhead |
| h1 | display | 56 | 600 | 1.08 | -0.025em | ss01 | section opener |
| h2 | display | 40 | 600 | 1.1 | -0.02em | — | feature heading |
| h3 | display | 28 | 600 | 1.2 | -0.015em | — | sub-feature |
| h4 | display | 22 | 500 | 1.3 | -0.01em | — | card heading |
| body-large | body | 18 | 400 | 1.55 | 0 | — | hero supporting copy |
| body | body | 16 | 400 | 1.5 | 0 | — | default body |
| body-small | body | 14 | 400 | 1.45 | 0 | — | dense feature blocks |
| label-mono | mono | 12 | 500 | 1.3 | 0.04em | zero, tnum | feature labels, eyebrow text |
| button | body | 15 | 500 | 1.0 | -0.005em | — | primary/ghost button |
| button-small | body | 13 | 500 | 1.0 | 0 | — | dense ui controls |
| link | body | 16 | 500 | 1.5 | 0 | — | inline link |
| caption | body | 13 | 400 | 1.4 | 0 | — | image captions, footnotes |
| caption-small | body | 12 | 400 | 1.35 | 0 | — | metadata |
| micro | body | 11 | 500 | 1.3 | 0.05em | — | badges, status pills |
| code-body | mono | 13 | 400 | 1.55 | 0 | zero | inline + block code |
| code-bold | mono | 13 | 600 | 1.55 | 0 | zero | emphasized identifiers |
| code-label | mono | 11 | 500 | 1.3 | 0.06em | zero, tnum | region/branch labels |

### Principles

- **Weight as voice**: 600 for display, 500 for buttons and labels, 400 for body. No use of 700 — the display weight tops out at 600 to keep the calm late-night-console mood
- **Tracking philosophy**: tight negative tracking (-0.025em to -0.04em) on display, neutral on body, positive (`0.04em` to `0.06em`) on micro/label uppercase-feeling copy
- **Two-mode OpenType discipline**: tabular numerals only inside metric tables and inline metric callouts — proportional figures elsewhere
- **Mono numerals are non-negotiable**: latency, replication delta, branch counts, region pills all must align column-wise
- **Slashed zero on mono**: `zero` feature enabled to disambiguate `0` from `O` in connection strings and identifiers
- **Display family is custom**: when "Esbuild" is unavailable, Inter is the closest fallback — never substitute a serif or rounded sans
- **Caption sizes ≤ 13px**: labels at 11–12px use letter-spacing to maintain legibility at small sizes
- **Body line-height 1.5**: generous reading rhythm; tighten to 1.45 only in dense feature blocks

## 4. Component Stylings

### Buttons

**button-primary** — Mint primary
- Background: `#34d59a`
- Text: `#0a0a0b` at 15/500
- Padding: 10px 16px
- Radius: 8
- Border: none
- Hover: `#37c38f`, subtle 1.005× scale
- Active: `#2cb583`
- Focus: 2px solid `#34d59a` ring, 2px offset
- Use: primary CTA — "Sign up", "Deploy now", "Get started"

**button-ghost** — Outlined secondary
- Background: transparent
- Text: `#ffffff` at 15/500
- Padding: 10px 16px
- Radius: 8
- Border: 1px solid `#303236`
- Hover: border → `#4a4d52`, bg → rgba(255,255,255,0.04)
- Use: "Documentation", "Sign in", secondary section CTAs

**button-danger** — Destructive
- Background: transparent
- Text: `#ff5c5c` at 15/500
- Padding: 10px 16px
- Radius: 8
- Border: 1px solid rgba(255,92,92,0.4)
- Hover: bg → rgba(255,92,92,0.08)
- Use: "Delete branch", "Drop database"

**button-link** — Bare link
- Background: transparent
- Text: `#94b5f7` at 15/500
- Padding: 0
- Hover: text → `#a9c4f9`, underline grows from 0 → 1px
- Use: inline navigation in body copy

### Cards

**card-default**
- Background: `#111215`
- Padding: 24px
- Radius: 12
- Border: 1px solid `#303236`
- Shadow: ambient (rgba(0,0,0,0.35) 0 1px 2px)
- Hover: border → `#4a4d52`, shadow → standard
- Use: feature card, pricing tier, doc snippet

**card-tinted** — Forest-green feature panel
- Background: `#285d49`
- Padding: 32px
- Radius: 12
- Border: none
- Use: section-emphasis feature block — Neon's signature surface

### Badges / Tags / Pills

**badge-status** — Mint status pill
- Background: `#285d49`
- Text: `#34d59a` at 11/500 micro
- Padding: 2px 8px
- Radius: pill (9999)
- Use: "Live", "Beta", region label

**badge-info** — Periwinkle pill
- Background: `#1a2240`
- Text: `#94b5f7` at 11/500
- Padding: 2px 8px
- Radius: pill
- Use: "Docs", "v17", documentation links inline

### Inputs / Forms

**input-text**
- Background: `#0c0d0d`
- Text: `#ffffff` at 15/400
- Placeholder: `#5b5e64`
- Padding: 10px 14px
- Radius: 8
- Border: 1px solid `#303236`
- Focus: border → `#34d59a`, ring 0 0 0 2px rgba(52,213,154,0.3)

### Navigation

**nav-link**
- Background: transparent
- Text: `#a3a6b3` at 14/500
- Padding: 8px 12px
- Hover: text → `#ffffff`
- Active: text → `#34d59a`

### Decorative

**status-dot** — Live indicator
- 6–8px circle of `#34d59a`
- Optional 0 0 12px rgba(52,213,154,0.5) glow on live state
- Use: next to region labels, branch labels, "online" indicators

**code-block**
- Background: `#0c0d0d`
- Text: `#c2c4cc` at code-body
- Padding: 16px 20px
- Radius: 8
- Border: 1px solid `#1a1c20`
- Use: connection strings, query examples, CLI snippets

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px
- **Scale**: 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128
- **Density observation**: dense within sections, generous between — sections separated by 96–128px, but feature blocks within a section sit on 24–32px gaps

### Grid & Container

- **Page width**: 1280px max
- **Prose width**: 720px (documentation, marketing body)
- **Hero treatment**: full-bleed background, content constrained to 1024px
- **Feature grid**: 3-column at desktop, 2-column at tablet, 1-column at mobile

### Whitespace Philosophy

- Section rhythm: ~96–128px between major sections
- Within-section rhythm: ~24–48px between feature blocks
- Density allows for "console-grade" information density without feeling cluttered
- Negative space carries the OLED-indicator metaphor — black lets the mint sing

### Section Cadence

- Near-black canvas → forest-tinted feature panel → near-black → forest-tinted-2 → footer
- The forest panels function as section-break devices, not full backgrounds
- Mint accent stays foreground — it never anchors a section background

## 6. Shapes & Radius Scale

| Tier | Px | Use |
|------|----|----|
| Micro | 2 | inline pills, tag chips |
| Standard | 4 | small badges, dense controls |
| Comfortable | 8 | buttons, inputs |
| Relaxed | 12 | cards |
| Featured | 16 | hero shells, feature blocks |
| Large | 20 | signature feature panels |
| Pill | 9999 | status pills, avatars |

Compound radii are rare; when used, footer cards drop the bottom radius (`12 12 0 0`) to merge with the footer band.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|----|
| 0 (flat) | no shadow, no border | hero copy on canvas |
| 1 | 1px solid `#303236` border, no shadow | inline cards, code blocks |
| 2 | 1px border + ambient shadow (0 1px 2px) | feature cards |
| 3 | standard shadow (0 8px 16px -4px) | hover state |
| 4 | elevated shadow (0 20px 40px -8px) | popover, dropdown |
| 5 | deep shadow (0 32px 64px -16px) | modal, command palette |

**Shadow Philosophy**: shadows are pure black at varying alpha, never tinted with brand mint. The only chromatic shadow is the focus glow (`rgba(52,213,154,0.25)`) — and that is reserved for the focus ring on interactive controls, not for resting elevation. Multi-layer shadows are used at level 4+ to soften the edge and increase apparent depth without introducing chromatic noise.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus, fade
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — page transitions, modal enter
- **Decelerate**: `cubic-bezier(0, 0, 0.2, 1)` — tooltips, dropdowns enter

### Durations

- **Fast** (120ms): hover state changes, focus ring
- **Standard** (200ms): card lift, button press
- **Slow** (320ms): modal enter, page transition

### Per-Component Recipes

- **Button hover**: bg colour transitions over 120ms standard ease; subtle 1.005× scale via transform
- **Card hover**: border lifts from `#303236` → `#4a4d52`, shadow intensifies from ambient → standard, over 200ms
- **Link hover**: underline grows from 0 → 1px over 120ms
- **Status dot (live)**: optional pulse animation — opacity 0.6 → 1.0 over 1.5s ease-in-out infinite
- **Mint glow on focus**: ring opacity fades in over 120ms

### Page Transitions

- Default: fade-only between routes (200ms standard ease, opacity 0 → 1)
- No translate/scale page transitions — keeps the dashboard mood

### Reduced Motion

When `prefers-reduced-motion: reduce` is set:

- All transitions reduce to opacity-only
- The mint status-dot pulse animation is disabled
- Card scale transforms (1.0 → 1.005) are removed
- Page transitions become instant

## 9. Accessibility & A11y

### Contrast Pairs

- **White text on `#0a0a0b` bg**: 19.2:1 (WCAG AAA, all sizes)
- **Mint `#34d59a` text on `#0a0a0b` bg**: 11.6:1 (AAA)
- **Near-black `#0a0a0b` text on mint `#34d59a` brand fill**: 13.4:1 (AAA)
- **Periwinkle `#94b5f7` link on `#0a0a0b` bg**: 8.9:1 (AAA)
- **Muted `#94979e` on `#0a0a0b` bg**: 5.8:1 (AA at body sizes)
- **White on forest tinted `#285d49`**: 6.2:1 (AA)

### Focus Indicators

- Default focus: `2px solid #34d59a` ring, 2px offset, 8px radius
- Inputs: focus border → `#34d59a` + ring 0 0 0 2px rgba(52,213,154,0.3)
- Always visible — never `outline: none` without replacement

### ARIA Patterns

- **Combobox**: standard listbox pattern with aria-expanded, aria-activedescendant, role="combobox"
- **Dialog**: aria-labelledby + aria-describedby; trap focus; ESC to close
- **Status dots**: aria-label="Live" or "Online" — never relied on colour alone
- **Region pills**: aria-label="Region: us-east-2" since the abbreviation may not be obvious

### Keyboard Navigation

- Tab order follows visual order; skip-link at page top
- Enter/Space activates primary buttons; Enter on links
- Arrow keys navigate within combobox listboxes
- Cmd/Ctrl+K opens command palette (when present)
- Escape closes modals, popovers, command palette

### Screen Reader Hints

- Status indicators have explicit aria-label (never "green dot")
- Mint colour-coding always paired with a text label
- Mono code blocks include role="code" or `<code>` semantic

### Reduced Motion

`prefers-reduced-motion: reduce` honored throughout — see §8 for the strategy.

## 10. Responsive Behavior

### Breakpoints

| Name | Min Width | Use |
|------|-----------|----|
| Mobile | — | default |
| Tablet | 640 | enlarged grids |
| Desktop | 1024 | full feature grid |
| Wide | 1280 | max page width |
| Ultra | 1536 | wide hero only |

### Touch Targets

- Minimum 44×44px for primary interactive controls
- Status dots remain 6–8px visual but hit-area expands to 24×24px

### Collapsing Strategy

- **Nav**: top nav collapses to hamburger ≤ 768px
- **Feature grid**: 3-col → 2-col @ 1024 → 1-col @ 640
- **Hero**: display-hero (96px) reduces to 56px @ 640
- **Code blocks**: scroll horizontally on overflow; never wrap

### Image Behavior

- Hero illustrations are SVG, render crisp at all sizes
- Logos lock at intrinsic size
- Avatars/region flags scale with text

## 11. Content & Voice

### Tone

Calm, technical, confident. Neon writes for backend developers who already know what serverless Postgres is — copy is informative-not-promotional, with a mild "we know what you need" assurance. No exclamation points; no emoji in the marketing body.

### Microcopy Patterns

- **Button verbs**: "Sign up", "Deploy", "Get started", "Connect", "Branch" — single-word or two-word maximum
- **Error message recipe**: `[noun] [failed verb]: [reason]` — e.g., "Branch creation failed: insufficient permissions"
- **Success confirmations**: `[noun] [verb-past]` — e.g., "Database created", "Branch deployed"
- **Empty states**: "No branches yet. [CTA: Create your first branch]" — single concrete next action

### CTA Verb Conventions

- Top-level: "Sign up free" (not "Start trial")
- Product: "Deploy now" (not "Launch")
- Documentation: "Read the docs" (not "Learn more")
- Support: "Contact sales" (not "Get in touch")

## 12. Dark Mode & Theming

Neon is **dark-only**. There is no light variant. The brand identity depends on the OLED-near-black canvas; the mint accent reads as an electric indicator only against `#0a0a0b`. A light-mode flip would invert the indicator-lamp metaphor and collapse the chromatic story.

The console UI honors the same tokens; only the marketing site occasionally inverts to a soft-mint surface (`#cae6d9`) for contrast within a feature panel — and even there, the canvas behind remains near-black.

## 13. Lineage & Influences

Neon's chromatic identity is the **mint-green-on-near-black** pairing that immediately reads "running database, healthy." It traces aesthetically to OLED dashboard panels and server-room indicator lamps — the bright single-hue accent on near-black is the language of physical status hardware. The forest-tone tinted panels (`#285d49`, `#2c6d4c`) are Neon's expansion of that language into a chromatic ladder, a move neither Supabase nor Vercel makes.

Where Supabase committed to forest-green on light, Neon inverts to electric-mint on dark. The typographic restraint — Inter body + custom display sans + JetBrains Mono — borrows the "single confident accent on near-black" formula from Vercel and Linear, but the chromatic vocabulary is entirely Neon's. The periwinkle counterpoint (`#94b5f7`) is the brand's quiet differentiator: a single secondary accent that lets documentation and feature labels read distinct from action without introducing a third hue family.

- **OLED dashboard panels** — https://en.wikipedia.org/wiki/OLED — mint indicator-lamp aesthetic
- **Supabase** — https://supabase.com — open-source Postgres lineage; Neon inverts to dark
- **Vercel** — https://vercel.com — single-accent confidence on near-black
- **Linear** — https://linear.app — restrained palette, tight 8px button radius

## 14. Do's and Don'ts

### Do

- **Do** keep the mint accent (`#34d59a`) for primary action and live status only — over-applying collapses its semantic
- **Do** layer forest tones (`#285d49`, `#2c6d4c`) for tinted panels rather than introducing a second hue
- **Do** anchor body copy at `#94979e` and `#a3a6b3` for the tonal hierarchy — pure-white secondary copy reads as too aggressive
- **Do** use mono with tabular numerals + slashed zero for all metric and identifier copy
- **Do** keep the canvas at `#0a0a0b` — pure black collapses the warmth, lighter blacks lose the OLED feel
- **Do** use the periwinkle `#94b5f7` for documentation links and informational labels only
- **Do** pair status colour with explicit text labels for accessibility
- **Do** honor `prefers-reduced-motion` — disable the mint-dot pulse and scale transforms
- **Do** use 8px button radius and 12px card radius — Vercel/Linear-class geometry is the platonic dev-tool feel
- **Do** keep section rhythm at 96–128px between major sections

### Don't

- **Don't** flip to light mode; Neon's identity depends on the OLED-near-black canvas
- **Don't** mix the mint with conventional Tailwind green (`#22c55e`); the cooler hue and slightly higher lightness are deliberate
- **Don't** use the periwinkle `#94b5f7` for primary action — it's a documentation/label accent, not a CTA
- **Don't** apply heavy drop shadows; depth here is tonal and bordered
- **Don't** introduce orange, magenta, or cyan accents — the palette is mint + forest + periwinkle, full stop
- **Don't** use the brand mint as a background colour — it stays foregrounded as action
- **Don't** set body copy in mono — mono is for metrics, identifiers, code, and labels only
- **Don't** use dark grey (`#222`-class) as text — the text scale runs `#fff` → `#94979e` → `#a3a6b3` → `#c2c4cc`
- **Don't** add chromatic gradients to backgrounds — Neon's depth is tonal-only

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #0a0a0b
surface: #111215
surface-tinted: #285d49
text: #ffffff
text-muted: #94979e
brand: #34d59a
brand-hover: #37c38f
accent: #94b5f7
border: #303236
on-brand: #0a0a0b
```

### Example Component Prompts

1. "Create a hero section with a `#0a0a0b` near-black background, a 56px display-hero headline in white at 600 weight with -0.025em tracking, a subhead at 18px `#94979e`, and a primary mint button (`#34d59a` fill, `#0a0a0b` text, 8px radius) that says 'Sign up free.'"

2. "Design a card grid: 3 cards on a `#111215` surface, each with 24px padding, 12px radius, 1px `#303236` border, a 28px h3 in white, body copy at 16px `#94979e`. The middle card uses `#285d49` forest-tinted background instead, with white body copy."

3. "Build a status indicator: a 6px `#34d59a` circle with a `0 0 12px rgba(52,213,154,0.5)` glow, paired with the text 'Live in us-east-2' set in 12px JetBrains Mono with tabular numerals."

4. "Create a code block component: `#0c0d0d` background, 13px JetBrains Mono `#c2c4cc` body text with `zero` slashed-zero feature, 16px 20px padding, 8px radius, 1px `#1a1c20` border. Inline backticks render in `#34d59a` brand mint."

5. "Design a pricing card with a `#111215` base surface, the recommended tier showing a `#94b5f7` periwinkle 'RECOMMENDED' label at 11px in mono with 0.05em tracking. Primary CTA is the mint button; secondary is ghost (transparent + `#303236` border)."

6. "Build a documentation nav: 14px Inter at 500 weight, items at `#a3a6b3` default, hover `#ffffff`, active `#34d59a`. Active item gets a 2px left border in mint."

### Iteration Guide

1. **Start with the canvas** — confirm `#0a0a0b` (not `#000` or `#111`); the warmth distinguishes Neon from Vercel
2. **Ration the mint** — count viewport mint pixels; if more than ~5%, demote to forest-tinted surface or text
3. **Mono everywhere metric** — latency, branches, regions, query results; tabular numerals + slashed zero
4. **Forest tints carry sections** — use `#285d49` panels as section-break devices, not flat coloured backgrounds
5. **Periwinkle is rare** — reserve `#94b5f7` for documentation links and feature labels; never as a CTA colour
6. **Tighten display tracking** — display copy needs -0.025em to -0.04em to feel typeset
7. **No drop shadows on mint** — shadows are pure black at low alpha; only focus uses a mint glow
8. **Test contrast** — secondary copy at `#94979e` is the floor; lower greys collapse to AA failure
