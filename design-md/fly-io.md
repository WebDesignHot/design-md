---
name: Fly.io
tagline: 'Mackinac display + Fragment Mono on a violet-saturated canvas — a PaaS that dresses like a small-press magazine.'
updated_at: 2026-05-05T10:17:17+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://fly.io
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [editorial, serif, sans, mono, structured, cool]
preview_swatch: ['#24175b', '#7c3aed', '#fbf2e4']
related: [railway, vercel, supabase]
description: 'Fly.io is the rare infrastructure brand that uses **Mackinac** as its display face — a high-contrast wedge-serif normally found in editorial magazines — paired with **Fricolage Grotesque** for body and **Fragment Mono** for code. The chromatic identity is a violet-saturated near-black canvas that fades into a creamy off-white reading panel; the result is a PaaS that reads like a literary quarterly with a deploy command.'

colors:
  # Primary
  bg: '#24175b'                  # deep violet hero band
  bg-deep: '#15103d'             # near-black violet
  bg-cream: '#fbf2e4'            # creamy off-white reading panel
  bg-elev-1: '#1f1748'           # tinted purple panel
  bg-elev-2: '#2a1f6b'           # mid-tone purple
  surface: '#1f1748'             # tinted purple panel
  surface-cream: '#f4ead7'       # cream variant
  surface-cream-deep: '#ede0c4'  # deeper cream

  # Brand & Dark
  brand: '#7c3aed'               # violet primary action — Fly's signature
  brand-hover: '#9061f5'         # hover (lighter)
  brand-pressed: '#6929d4'       # pressed (deeper)
  brand-deep: '#5b21b6'          # deepest violet
  brand-glow: '#7c3aed33'        # 20% violet wash
  on-brand: '#ffffff'            # white text on violet

  # Accent
  accent: '#a78bfa'              # lighter violet
  accent-hover: '#c4b5fd'        # accent hover
  accent-warm: '#f59e0b'         # amber counterpoint
  accent-warm-soft: '#fbbf24'    # softer amber
  accent-soft: '#7c3aed1f'       # 12% violet wash

  # Interactive
  link: '#a78bfa'                # links use lighter violet
  link-hover: '#c4b5fd'          # link hover
  link-visited: '#8b6cd9'        # visited
  link-cream: '#5b21b6'          # link on cream panels (darker)
  selected: '#7c3aed26'          # 15% violet selection
  disabled: '#3a2f5f'            # disabled bg
  disabled-text: '#6b5d8a'       # disabled text

  # Neutral Scale
  text: '#fbf2e4'                # cream on dark
  text-ink: '#15103d'            # near-black violet on cream
  text-heading: '#fbf2e4'        # headline cream
  text-muted: '#a89dc8'          # muted lavender on dark
  text-soft: '#867aa8'           # softer lavender
  text-faint: '#5b537a'          # quaternary
  text-disabled: '#6b5d8a'

  # On-cream neutrals
  text-cream-heading: '#15103d'  # near-black violet on cream
  text-cream-body: '#2a1f4d'     # mid-violet on cream
  text-cream-muted: '#5b507a'    # muted on cream

  # Surface & Borders
  border: '#ffffff1a'            # 10% white hairline on dark
  border-soft: '#ffffff0d'       # 5% white
  border-strong: '#ffffff33'     # 20% white emphasized
  border-ink: '#15103d33'        # 20% violet ink on cream
  border-ink-strong: '#15103d4d' # 30% ink emphasized
  border-brand: '#7c3aed66'      # 40% brand on focus

  # Shadow
  shadow-ambient: 'rgba(0,0,0,0.25)'      # low ambient
  shadow-standard: 'rgba(15,16,61,0.4)'   # ink-tinted standard
  shadow-elevated: 'rgba(15,16,61,0.55)'  # deep elevated
  shadow-glow: 'rgba(124,58,237,0.3)'     # violet focus glow

  # Semantic
  success: '#34d399'             # mint green
  success-bg: '#0f3a2a'          # success surface
  warning: '#f59e0b'             # amber (also brand counterpoint)
  warning-bg: '#3a2710'          # warning surface
  danger: '#f87171'              # coral red
  danger-bg: '#3a1818'           # danger surface
  info: '#a78bfa'                # info uses lighter violet
  info-bg: '#1f1748'             # info surface

typography:
  display:
    family: 'Mackinac, ui-serif, Georgia, "Times New Roman", serif'
    weights: [400, 500, 700]
    opentype-features: ['liga', 'dlig', 'kern']
  body:
    family: '"Fricolage Grotesque", Inter, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['ss01', 'kern']
  mono:
    family: '"Fragment Mono", ui-monospace, SFMono-Regular, Menlo, monospace'
    weights: [400]
    opentype-features: ['zero', 'tnum']
  scale:
    display-hero:   { size: 96, weight: 500, lineHeight: 1.0,  tracking: '-0.03em',  family: display, opentype: 'liga, dlig' }
    display-large:  { size: 72, weight: 500, lineHeight: 1.05, tracking: '-0.025em', family: display, opentype: 'liga' }
    h1:             { size: 56, weight: 500, lineHeight: 1.08, tracking: '-0.022em', family: display, opentype: 'liga' }
    h2:             { size: 42, weight: 500, lineHeight: 1.12, tracking: '-0.02em',  family: display }
    h3:             { size: 28, weight: 500, lineHeight: 1.25, tracking: '-0.01em',  family: display }
    h4:             { size: 22, weight: 500, lineHeight: 1.3,  tracking: '-0.005em', family: display }
    body-large:     { size: 19, weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    body:           { size: 17, weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    body-small:     { size: 15, weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    label-mono:     { size: 13, weight: 400, lineHeight: 1.3,  tracking: '0.04em',    family: mono, opentype: 'zero, tnum' }
    button:         { size: 16, weight: 500, lineHeight: 1.0,  tracking: '0',         family: body }
    button-small:   { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',         family: body }
    link:           { size: 17, weight: 500, lineHeight: 1.55, tracking: '0',         family: body }
    quote:          { size: 24, weight: 400, lineHeight: 1.35, tracking: '-0.005em',  family: display }
    caption:        { size: 14, weight: 400, lineHeight: 1.4,  tracking: '0',         family: body }
    caption-small:  { size: 13, weight: 400, lineHeight: 1.35, tracking: '0',         family: body }
    micro:          { size: 12, weight: 500, lineHeight: 1.3,  tracking: '0.06em',    family: body }
    code-body:      { size: 14, weight: 400, lineHeight: 1.6,  tracking: '0',         family: mono, opentype: 'zero' }
    code-bold:      { size: 14, weight: 700, lineHeight: 1.6,  tracking: '0',         family: mono, opentype: 'zero' }
    code-label:     { size: 12, weight: 400, lineHeight: 1.3,  tracking: '0.05em',    family: mono, opentype: 'zero, tnum' }

radius:
  micro: 2
  sm: 4
  md: 6           # button — tighter than 8px PaaS norm
  lg: 10          # card
  xl: 14          # hero shell
  featured: 18    # signature panels
  pill: 9999

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
  page-width: 1200
  prose-width: 680
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 120
  duration-standard: 240
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — panel transitions reduce to opacity-only, hover scale removed, decorative floats disabled.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1200
  wide: 1536

shadows:
  ambient: 'rgba(0,0,0,0.25) 0 1px 3px'
  standard: 'rgba(15,16,61,0.4) 0 8px 24px -4px'
  elevated: 'rgba(15,16,61,0.55) 0 18px 36px -12px, rgba(0,0,0,0.3) 0 4px 8px'
  deep: 'rgba(15,16,61,0.7) 0 30px 60px -16px'
  ring: '0 0 0 3px rgba(124,58,237,0.4)'
  glow: '0 0 32px rgba(124,58,237,0.35)'

accessibility:
  contrast-text-on-bg: 11.6         # AAA — cream on deep violet
  contrast-text-on-brand: 5.2       # AA — white on #7c3aed
  contrast-ink-on-cream: 14.8       # AAA — #15103d on #fbf2e4
  contrast-link-on-bg: 7.4          # AAA — light violet link on dark canvas
  contrast-muted-on-bg: 5.8         # AA at body sizes
  focus-ring: '3px solid rgba(124,58,237,0.4), 0 offset'
  reduced-motion-honored: true
  keyboard-nav: 'standard tab order; violet focus ring on dark, brand-deep on cream'

components:
  button-primary:
    bg: '#7c3aed'
    text: '#ffffff'
    padding: '10px 18px'
    radius: 6
    font: 'button (16/500)'
    border: 'none'
    hover: 'bg → #9061f5; subtle 1.005 scale'
    active: 'bg → #6929d4'
    use: 'primary CTA — Sign up, Deploy, Try Fly'
  button-ghost:
    bg: 'transparent'
    text: '#fbf2e4'
    padding: '10px 18px'
    radius: 6
    font: 'button (16/500)'
    border: '1px solid rgba(255,255,255,0.2)'
    hover: 'border → rgba(255,255,255,0.35); bg → rgba(255,255,255,0.05)'
    use: 'secondary action on dark'
  button-cream:
    bg: '#fbf2e4'
    text: '#15103d'
    padding: '10px 18px'
    radius: 6
    font: 'button (16/500)'
    border: 'none'
    hover: 'bg → #f4ead7'
    use: 'inverted CTA on dark canvas'
  card:
    bg: '#1f1748'
    text: '#fbf2e4'
    padding: '24px'
    radius: 10
    border: '1px solid rgba(255,255,255,0.1)'
    shadow: 'rgba(0,0,0,0.25) 0 1px 3px'
    use: 'feature card on dark'
  card-cream:
    bg: '#fbf2e4'
    text: '#15103d'
    padding: '24px'
    radius: 10
    border: '1px solid rgba(15,16,61,0.15)'
    use: 'reading panel — body content, blog'
  input:
    bg: '#15103d'
    text: '#fbf2e4'
    placeholder: '#867aa8'
    padding: '10px 14px'
    radius: 6
    border: '1px solid rgba(255,255,255,0.15)'
    focus: 'border → #7c3aed; ring 3px solid rgba(124,58,237,0.4)'
    use: 'text input, search'
  badge:
    bg: '#1f1748'
    text: '#a78bfa'
    padding: '2px 10px'
    radius: 9999
    font: 'micro (12/500)'
    use: 'tag, status, region label'
  nav-link:
    bg: 'transparent'
    text: '#a89dc8'
    padding: '8px 12px'
    font: 'body-small (15/500)'
    hover: 'text → #fbf2e4'
    active: 'text → #a78bfa'
    use: 'top nav, sidebar'

lineage:
  summary: |
    Fly.io is the only major PaaS that runs a wedge-serif display face.
    **Mackinac** — by Production Type — is a high-contrast 21st-century
    serif most commonly seen on small-press book covers and design-
    journal mastheads. Pairing it with **Fricolage Grotesque** (a
    geometric sans with rounded terminals) and **Fragment Mono** (an
    angular variable-width monospace) gives Fly.io a typographic palette
    that has more in common with The Browser Company's Arc memos and
    Plain's editorial restraint than with any AWS-class infrastructure
    brand. The chromatic identity is a violet-saturated near-black
    `#24175b` that fades into cream `#fbf2e4` reading panels — a high-
    contrast tonal flip borrowed from magazine spread design. Action
    sits on the brand violet `#7c3aed`. Where Railway uses eggplant and
    Render uses CMYK violet, Fly leans into the saturated indigo-violet
    of Plex's older "Plex Indigo" colour-way, modernised toward Tailwind's
    `violet-600`. Buttons are 6px — tighter than the 8px PaaS norm —
    reinforcing the editorial-print feel.
  influences:
    - name: 'Mackinac (Production Type)'
      role: 'The wedge-serif display face that sets Fly.io apart from every Inter-based PaaS.'
      url: https://productiontype.com
    - name: 'Plain'
      role: 'Editorial cream panels, restrained type-driven layouts, mono accents as voice.'
      url: https://plain.com
    - name: 'The Browser Company / Arc'
      role: 'Cream-on-violet tonal flips, magazine-spread layout rhythm, mono pull-quotes.'
      url: https://arc.net
    - name: 'Velvetyne (Fricolage Grotesque)'
      role: 'Geometric sans with rounded terminals — softer than Inter, less institutional than Geist.'
      url: https://velvetyne.fr

dark-mode: native    # Fly's primary canvas is the violet-dark; cream panels are inversions, not a dark-mode toggle
---

## 1. Visual Theme & Atmosphere

Fly.io's home page opens with a Mackinac headline at roughly 72–96px on a
deep violet (`#24175b`) field — a treatment that reads more like the
cover of a design-quarterly than a deploy-platform landing. Mackinac's
high contrast and wedge-shaped terminals give the type a hand-cut feel
no Inter or Geist headline can replicate. The first impression is
**editorial PaaS** — a small-press literary magazine that happens to
run global edge infrastructure.

The page rhythms alternate between dark violet panels and creamy
`#fbf2e4` reading bands — a magazine-spread tonal flip. Fragment Mono
appears in pull-quotes, deploy commands, and the navigation tags,
giving the technical voice a typeset rather than terminal-y character.
The brand violet `#7c3aed` carries every primary action; the amber
`#f59e0b` is a single counterpoint accent used sparingly for highlights
and warmth.

The chromatic palette is unusually rich for infrastructure. The hero
canvas (`#24175b`) sits between Tailwind violet-900 and Plex Indigo —
saturated enough to feel chromatic, dark enough to read as evening
sky. The cream panel `#fbf2e4` flips the entire tonal relationship:
ink (`#15103d`) on cream, body type set in Fricolage Grotesque, with
Fragment Mono pull-quotes that read like typeset broadside fragments.

The mood is **deploy-platform-as-craft**. Where AWS feels industrial
and Vercel feels minimalist, Fly.io feels considered — the
infrastructure equivalent of a hand-bound book. Every typographic
decision (the wedge-serif display, the rounded-sans body, the angular
mono) reinforces the brief: deployment as a small-press act, not an
enterprise transaction.

**Key Characteristics**

- Deep violet canvas (`#24175b`) alternating with cream reading panels (`#fbf2e4`) — magazine tonal flip
- Mackinac wedge-serif for display — the only major PaaS with serif headlines
- Fricolage Grotesque body sans + Fragment Mono for code/quotes
- Brand violet `#7c3aed` (Tailwind violet-600) for primary action
- Amber `#f59e0b` as the sole counterpoint accent
- 6px button radius (tighter than 8px PaaS norm) — reinforces print feel
- 10px card radius, 14px hero shell — slightly tighter than industry default
- Generous vertical rhythm with magazine-spread cadence
- Pull-quotes set in Mackinac at 24px italic-feeling
- Mono labels for region tags, deploy commands, technical metadata

## 2. Color Palette & Roles

### Primary

- **Background** (`#24175b`) [→ `--fly-bg`]: deep violet hero canvas — the brand's defining surface
- **Background Deep** (`#15103d`): near-black violet — used for footer and full-bleed panels
- **Background Cream** (`#fbf2e4`): creamy off-white reading panel — Fly's tonal flip
- **Primary Text on Dark** (`#fbf2e4`): cream optical-white
- **Primary Text on Cream** (`#15103d`): near-black violet ink
- **Primary CTA Fill** (`#7c3aed`): brand violet

### Brand & Dark

- **Brand Violet** (`#7c3aed`) [Tailwind violet-600]: primary action
- **Brand Hover** (`#9061f5`): lighter on hover
- **Brand Pressed** (`#6929d4`): pressed state
- **Brand Deep** (`#5b21b6`): deepest violet — icon strokes, links on cream
- **Brand Glow** (`#7c3aed33`): 20% violet wash

### Accent

- **Lighter Violet** (`#a78bfa`): secondary emphasis, links on dark
- **Accent Hover** (`#c4b5fd`): hover state
- **Amber** (`#f59e0b`) [→ `--fly-accent-warm`]: warm counterpoint — the only non-violet brand colour
- **Amber Soft** (`#fbbf24`): softer amber
- **Brand Soft** (`#7c3aed1f`): 12% wash

### Interactive

- **Link on Dark** (`#a78bfa`): lighter violet
- **Link on Cream** (`#5b21b6`): deep violet
- **Link Hover** (`#c4b5fd`): brightened
- **Link Visited** (`#8b6cd9`): muted
- **Selected** (`#7c3aed26`): 15% violet wash
- **Disabled** (`#3a2f5f`)
- **Disabled Text** (`#6b5d8a`)

### Neutral Scale

#### On dark canvas

- **Text Heading** (`#fbf2e4`): cream optical-white
- **Text Body** (`#fbf2e4`): same cream
- **Text Muted** (`#a89dc8`): muted lavender
- **Text Soft** (`#867aa8`): softer lavender
- **Text Faint** (`#5b537a`): quaternary

#### On cream panel

- **Text Heading** (`#15103d`): near-black violet ink
- **Text Body** (`#2a1f4d`): mid-violet
- **Text Muted** (`#5b507a`): muted violet-grey

### Surface & Borders

- **Surface (dark)** (`#1f1748`): tinted purple panel
- **Surface (cream)** (`#fbf2e4`): same as bg-cream (cards float on cream)
- **Surface Cream Deep** (`#ede0c4`): nested cream panel
- **Border on Dark** (`#ffffff1a`): 10% white hairline
- **Border Soft on Dark** (`#ffffff0d`): 5% white
- **Border Strong on Dark** (`#ffffff33`): 20% emphasized
- **Border on Cream** (`#15103d33`): 20% violet ink
- **Border Brand** (`#7c3aed66`): 40% on focus

### Shadow Colors

Shadows are ink-tinted (using `#15103d`) at varying alpha — the violet undertone keeps depth chromatically continuous with the brand:

- **Ambient** (`rgba(0,0,0,0.25)`): low resting
- **Standard** (`rgba(15,16,61,0.4)`): card hover, ink-tinted
- **Elevated** (`rgba(15,16,61,0.55)`): popover, dropdown
- **Deep** (`rgba(15,16,61,0.7)`): modal
- **Glow** (`rgba(124,58,237,0.35)`): violet focus glow

### Semantic

- **Success** (`#34d399`): mint green
- **Success Bg** (`#0f3a2a`): dark mint surface
- **Warning** (`#f59e0b`): amber (also brand counterpoint)
- **Warning Bg** (`#3a2710`): dark amber surface
- **Danger** (`#f87171`): coral red
- **Danger Bg** (`#3a1818`)
- **Info** (`#a78bfa`): info uses lighter violet
- **Info Bg** (`#1f1748`)

## 3. Typography Rules

### Font Family

- **Display**: Mackinac (Production Type) — high-contrast wedge-serif, the brand's typographic spine
- **Body**: Fricolage Grotesque (Velvetyne) — geometric sans with rounded terminals
- **Mono**: Fragment Mono — angular variable-width monospace
- **OpenType**: `liga` and `dlig` enabled on Mackinac for typographic ligatures (ff, ffl, ct); `kern` enabled throughout; `tnum` and `zero` on Fragment Mono for technical alignment

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | display | 96 | 500 | 1.0 | -0.03em | liga, dlig | hero only |
| display-large | display | 72 | 500 | 1.05 | -0.025em | liga | section opener |
| h1 | display | 56 | 500 | 1.08 | -0.022em | liga | page title |
| h2 | display | 42 | 500 | 1.12 | -0.02em | — | feature heading |
| h3 | display | 28 | 500 | 1.25 | -0.01em | — | sub-feature |
| h4 | display | 22 | 500 | 1.3 | -0.005em | — | card title |
| body-large | body | 19 | 400 | 1.55 | 0 | — | hero supporting |
| body | body | 17 | 400 | 1.55 | 0 | — | default — slightly larger than usual 16 |
| body-small | body | 15 | 400 | 1.5 | 0 | — | dense feature blocks |
| label-mono | mono | 13 | 400 | 1.3 | 0.04em | zero, tnum | eyebrow, region tag |
| button | body | 16 | 500 | 1.0 | 0 | — | primary/ghost |
| button-small | body | 14 | 500 | 1.0 | 0 | — | dense controls |
| link | body | 17 | 500 | 1.55 | 0 | — | inline link |
| quote | display | 24 | 400 | 1.35 | -0.005em | — | pull-quote in Mackinac |
| caption | body | 14 | 400 | 1.4 | 0 | — | image caption |
| caption-small | body | 13 | 400 | 1.35 | 0 | — | metadata |
| micro | body | 12 | 500 | 1.3 | 0.06em | — | badge label |
| code-body | mono | 14 | 400 | 1.6 | 0 | zero | inline + block code |
| code-bold | mono | 14 | 700 | 1.6 | 0 | zero | emphasized identifiers |
| code-label | mono | 12 | 400 | 1.3 | 0.05em | zero, tnum | deploy slugs |

### Principles

- **Mackinac is non-negotiable**: the wedge-serif is the brand's typographic spine — every display-level headline must use it
- **Weight discipline**: Mackinac stays at 500 (not 700) — keeps the display calm and editorial
- **Body 17px, not 16px**: Fly's body size is one step larger than the PaaS norm — matches the editorial reading rhythm
- **Tracking philosophy**: tight negative tracking (-0.02em to -0.03em) on display; neutral on body; positive (`0.04em` to `0.06em`) on mono labels
- **Three-family discipline**: Mackinac (serif display) + Fricolage (sans body) + Fragment Mono (mono) — never substitute any one of them
- **Pull-quotes in Mackinac**: 24px display-set quotes for blog and feature copy — typeset, not screen-read
- **Tabular numerals on metrics**: Fragment Mono with `tnum` for region pricing, latency, machine counts
- **OpenType ligatures**: `liga` and `dlig` on Mackinac for ff, fi, ct, st — these are part of the editorial feel

## 4. Component Stylings

### Buttons

**button-primary** — Violet
- Background: `#7c3aed`
- Text: `#ffffff` at 16/500 Fricolage
- Padding: 10px 18px
- Radius: 6 (tighter than 8px PaaS norm)
- Border: none
- Hover: bg → `#9061f5`, subtle 1.005× scale
- Active: bg → `#6929d4`
- Focus: 3px solid rgba(124,58,237,0.4) ring
- Use: primary CTA — "Sign up", "Deploy", "Try Fly"

**button-ghost** — Outlined on dark
- Background: transparent
- Text: `#fbf2e4` at 16/500
- Padding: 10px 18px
- Radius: 6
- Border: 1px solid rgba(255,255,255,0.2)
- Hover: border → rgba(255,255,255,0.35), bg → rgba(255,255,255,0.05)
- Use: secondary action on dark canvas

**button-cream** — Inverted CTA on dark
- Background: `#fbf2e4`
- Text: `#15103d` at 16/500
- Padding: 10px 18px
- Radius: 6
- Border: none
- Hover: bg → `#f4ead7`
- Use: alternative primary on dark — "Read the docs", "View pricing"

**button-danger**
- Background: transparent
- Text: `#f87171` at 16/500
- Padding: 10px 18px
- Radius: 6
- Border: 1px solid rgba(248,113,113,0.4)
- Hover: bg → rgba(248,113,113,0.08)
- Use: destructive action

### Cards

**card-dark** — On violet canvas
- Background: `#1f1748`
- Padding: 24px
- Radius: 10
- Border: 1px solid rgba(255,255,255,0.1)
- Shadow: ambient
- Use: feature card on dark sections

**card-cream** — On cream reading panel
- Background: `#fbf2e4`
- Padding: 24px
- Radius: 10
- Border: 1px solid rgba(15,16,61,0.15)
- Use: blog card, doc card, pricing tier

### Badges / Tags / Pills

**badge-tag-dark**
- Background: `#1f1748`
- Text: `#a78bfa` at 12/500 micro
- Padding: 2px 10px
- Radius: pill
- Use: tag, region label, status

**badge-mono** — Deploy region
- Background: transparent
- Text: `#a78bfa` at 12/400 mono
- Border: 1px solid rgba(255,255,255,0.15)
- Padding: 2px 8px
- Radius: 4
- Use: region pills (`iad`, `lhr`, `nrt`)

### Inputs / Forms

**input-text-dark**
- Background: `#15103d`
- Text: `#fbf2e4` at 17/400 Fricolage
- Placeholder: `#867aa8`
- Padding: 10px 14px
- Radius: 6
- Border: 1px solid rgba(255,255,255,0.15)
- Focus: border → `#7c3aed`, ring 3px solid rgba(124,58,237,0.4)

### Navigation

**nav-link**
- Background: transparent
- Text: `#a89dc8` at 15/500 Fricolage
- Padding: 8px 12px
- Hover: text → `#fbf2e4`
- Active: text → `#a78bfa`

### Decorative

**pull-quote**
- Set in Mackinac at 24px / 400, line-height 1.35
- Optional 4px violet `#7c3aed` left-border at 16px gap
- Used inside cream reading panels for editorial emphasis

**code-block-dark**
- Background: `#15103d`
- Text: `#fbf2e4` at code-body (14/400 Fragment Mono)
- Padding: 16px 20px
- Radius: 8
- Border: 1px solid rgba(255,255,255,0.08)
- Inline backticks render in `#a78bfa` on rgba(124,58,237,0.15) wash

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px
- **Scale**: 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160
- **Density observation**: Fly's grid is **editorial** — sections are separated by 120–160px (more than typical PaaS), feature blocks within sections at 32–48px

### Grid & Container

- **Page width**: 1200px max
- **Prose width**: 680px (blog, documentation, marketing body — narrow for editorial reading)
- **Hero treatment**: full-bleed violet canvas, content constrained to ~960px
- **Feature grid**: 3-col at desktop, 2-col at tablet, 1-col at mobile

### Whitespace Philosophy

- Whitespace functions as breathing room between editorial moments
- Section gaps are generous (120–160px) to support magazine-spread cadence
- Cream panels function as reading-rest — a tonal break between dense violet sections

### Section Cadence

- Hero (deep violet) → feature grid (dark surface) → testimonial (cream panel) → product detail (violet) → cream blog teaser → footer (deep violet)
- The violet/cream alternation is the layout signature
- Cream panels never share a section with violet panels — they take the whole section

## 6. Shapes & Radius Scale

| Tier | Px | Use |
|------|----|----|
| Micro | 2 | inline pills, mono region tags |
| Standard | 4 | small badges |
| Comfortable | 6 | buttons (Fly's tight default) |
| Relaxed | 10 | cards |
| Featured | 14 | hero shells, feature blocks |
| Large | 18 | signature illustrative panels |
| Pill | 9999 | status pills, avatars |

The 6px button radius is a deliberate departure from the 8px PaaS default — it pulls the controls toward print/typeset feel.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|----|
| 0 | flat | hero copy on canvas |
| 1 | 1px translucent hairline | inline cards, code blocks |
| 2 | 1px hairline + ambient shadow | feature cards |
| 3 | standard shadow, ink-tinted | hover state |
| 4 | elevated ink-tinted | popover, dropdown |
| 5 | deep + violet ring glow | modal, command palette |

**Shadow Philosophy**: Fly's shadows tilt **ink-tinted** — using `#15103d` (the deepest violet) at varying alpha rather than pure black. This keeps the chromatic story continuous into the depth layer. Multi-layer shadows are used at level 4+ to soften edges. Depth is more often **panel-to-panel** (tonal contrast between violet and cream sections) than card-to-card; shadows are reserved for floating UI elements.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — page transitions, modal enter
- **Decelerate**: `cubic-bezier(0, 0, 0.2, 1)` — tooltips

### Durations

- **Fast** (120ms): hover, focus
- **Standard** (240ms): card lift, button press
- **Slow** (400ms): modal enter, page transition

### Per-Component Recipes

- **Button hover**: bg colour transitions over 240ms standard ease; 1.005× scale via transform
- **Card hover**: shadow ambient → standard, border opacity 0.1 → 0.2, over 240ms
- **Link hover**: underline grows 0 → 1px over 120ms; text colour fades to brighter accent
- **Pull-quote enter**: opacity 0 → 1 + translateY 16px → 0 over 400ms emphasized when scrolled into view
- **Section transitions**: cream panel entry uses scaleY 0.98 → 1 + opacity 0 → 1 over 400ms emphasized

### Page Transitions

- Default: opacity 0 → 1 + translateY 12px → 0 over 400ms emphasized

### Reduced Motion

When `prefers-reduced-motion: reduce` is set:

- Section entry animations reduce to opacity-only fade
- Card hover scale removed
- Pull-quote scroll-triggered enter becomes instant
- Page enter translate removed

## 9. Accessibility & A11y

### Contrast Pairs

- **Cream `#fbf2e4` on `#24175b`**: 11.6:1 (AAA, all sizes)
- **Cream on `#15103d`**: 14.4:1 (AAA)
- **Ink `#15103d` on cream `#fbf2e4`**: 14.8:1 (AAA)
- **White on `#7c3aed`**: 5.2:1 (AA at body sizes)
- **Light violet `#a78bfa` link on dark canvas**: 7.4:1 (AAA)
- **Muted lavender `#a89dc8` on `#24175b`**: 5.8:1 (AA)
- **Brand-deep `#5b21b6` link on cream**: 8.6:1 (AAA)

### Focus Indicators

- Default on dark: 3px solid rgba(124,58,237,0.4) ring, no offset
- Default on cream: 3px solid rgba(124,58,237,0.5) ring, 2px offset
- Always visible

### ARIA Patterns

- **Combobox**: standard listbox pattern
- **Dialog**: aria-labelledby + aria-describedby; trap focus; ESC to close
- **Region pills**: aria-label spelling out the airport code (e.g., "Region: Frankfurt — fra")
- **Pull-quotes**: use `<blockquote>` with optional cite attribute

### Keyboard Navigation

- Tab order follows visual order
- Skip-link at page top
- Enter activates buttons; Enter on links
- Cmd/Ctrl+K for command palette (when present)
- Escape closes modals

### Screen Reader Hints

- Status pills always paired with aria-label
- Decorative pull-quote borders are `aria-hidden`
- Mono code uses `<code>` semantic; `<pre>` for blocks

### Reduced Motion

`prefers-reduced-motion: reduce` honored throughout — see §8.

## 10. Responsive Behavior

### Breakpoints

| Name | Min Width | Use |
|------|-----------|----|
| Mobile | — | default |
| Tablet | 640 | enlarged grids |
| Desktop | 1024 | full feature grid |
| Wide | 1200 | max page width |
| Ultra | 1536 | hero only |

### Touch Targets

- Minimum 44×44px for primary buttons
- Region mono pills expand hit-area to 32×24px

### Collapsing Strategy

- **Nav**: collapses to hamburger ≤ 768px
- **Feature grid**: 3-col → 2-col @ 1024 → 1-col @ 640
- **Hero**: display-hero (96px) reduces to 56px @ 640
- **Pull-quotes**: maintain Mackinac display but reduce 24 → 20 @ 640

### Image Behavior

- Hero illustrations + map visuals use SVG
- Logos lock at intrinsic size
- Region maps respond fluidly with viewport

## 11. Content & Voice

### Tone

Considered, slightly literary, technical-but-warm. Fly.io's marketing copy reads more like a craft-publication than a SaaS landing — sentences are full, verbs are precise, occasional turns toward the witty. The brand explicitly avoids both corporate jargon and dev-bro hype.

### Microcopy Patterns

- **Button verbs**: "Sign up", "Deploy", "Try Fly", "Read more", "Get started" — direct but unembellished
- **Error message recipe**: "[noun] [failed]: [reason]. [actionable next step]" — full sentences, not jargon-fragments
- **Success confirmations**: "[noun] [verb-past] in [region]" — "App deployed in iad"
- **Empty states**: short editorial sentences — "Nothing here yet. Spin up an app to see it here."

### CTA Verb Conventions

- Top-level: "Sign up" or "Get started"
- Product: "Deploy now" or "Try [feature]"
- Documentation: "Read the docs"
- Blog/editorial: "Read more"
- Sales: "Talk to us"

## 12. Dark Mode & Theming

Fly.io is **dark-as-default** — the violet canvas is the brand's primary surface, and the cream panels are an inversion within the same brand, not a separate "light mode." There is no light-mode toggle for the marketing site; the dashboard product runs the same chromatic palette throughout.

The cream `#fbf2e4` reading panels function as **inverted moments** within the dark brand:
- Page sections alternate violet → cream → violet (magazine-spread tonal flip)
- Cards and content within cream panels use the cream sub-token map (`text-cream-heading`, `text-cream-body`)
- The brand violet `#7c3aed` works on both surfaces; the deep violet `#5b21b6` is preferred for links on cream for contrast

If a true light-only mode were needed: hold `text-cream-heading` (`#15103d`) as primary text on `#fbf2e4` background, swap brand to `brand-deep` (`#5b21b6`) for primary CTAs.

## 13. Lineage & Influences

Fly.io is the only major PaaS that runs a wedge-serif display face. **Mackinac** by Production Type — a high-contrast 21st-century serif most commonly seen on small-press book covers and design-journal mastheads — is paired with **Fricolage Grotesque** (a geometric sans with rounded terminals) and **Fragment Mono** (an angular variable-width monospace). The chromatic identity is a violet-saturated near-black canvas that fades into cream reading panels — a high-contrast tonal flip borrowed from magazine spread design.

Where Railway uses eggplant and Render uses CMYK violet, Fly leans into the saturated indigo-violet of Plex's older "Plex Indigo" colour-way, modernised toward Tailwind's `violet-600`. The 6px button radius — tighter than the 8px PaaS norm — reinforces the editorial-print feel. The amber `#f59e0b` is a single counterpoint accent borrowed from sunlight-warmth gradient palettes.

- **Mackinac (Production Type)** — https://productiontype.com — wedge-serif display
- **Plain** — https://plain.com — editorial cream panels, restrained type-driven layouts
- **The Browser Company / Arc** — https://arc.net — cream-on-violet tonal flips, magazine cadence
- **Velvetyne (Fricolage Grotesque)** — https://velvetyne.fr — geometric sans with rounded terminals

## 14. Do's and Don'ts

### Do

- **Do** use Mackinac for every display headline — it is the brand's typographic spine
- **Do** alternate violet and cream panels for section transitions; that tonal flip is the layout signature
- **Do** set technical labels and deploy commands in Fragment Mono — it ties the developer copy to the editorial voice
- **Do** keep button radius at 6px (not 8px) — the tighter geometry is part of the print feel
- **Do** use 17px body (not 16px) — the slightly larger reading size matches the editorial rhythm
- **Do** use Mackinac for pull-quotes at 24px — typeset emphasis in editorial copy
- **Do** ink-tint shadows with `#15103d` — keeps depth chromatically continuous
- **Do** anchor body copy at `#fbf2e4` cream optical-white on dark, `#15103d` on cream
- **Do** use the amber `#f59e0b` as the only counterpoint accent
- **Do** honor `prefers-reduced-motion` — disable scroll-triggered enters

### Don't

- **Don't** swap Mackinac for any other serif (Lyon, Plex Serif, Source Serif) — Mackinac's wedge terminals are non-negotiable
- **Don't** pair the brand violet with cool blues or magentas; the warm amber `#f59e0b` is the only counterpoint
- **Don't** apply drop shadows to cards on cream panels; depth there is hairline-bordered, never elevation-shadow
- **Don't** use Inter for display headlines — Inter collapses Fly's voice into generic-PaaS register
- **Don't** flip to a light-only marketing site; the violet canvas is the brand
- **Don't** use 8px button radius — Fly is 6px
- **Don't** over-apply the cream — it functions as reading-rest, not as a primary surface
- **Don't** layer mono on long-form copy — Fragment Mono is for technical labels and pull-quote fragments
- **Don't** add italic to Mackinac — the brand's italic-feeling effect comes from optical adjustment, not style toggle
- **Don't** use 700 weight on Mackinac display — 500 is the calm editorial weight

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #24175b
bg-deep: #15103d
bg-cream: #fbf2e4
text-on-dark: #fbf2e4
text-on-cream: #15103d
brand: #7c3aed
brand-hover: #9061f5
accent: #a78bfa
accent-warm: #f59e0b
border-on-dark: rgba(255,255,255,0.1)
on-brand: #ffffff
```

### Example Component Prompts

1. "Create a hero section: deep violet `#24175b` background, a 96px Mackinac display headline at 500 weight in `#fbf2e4` cream with -0.03em tracking and `liga, dlig` ligatures enabled, body-large 19px Fricolage subhead in `#a89dc8`. Add a primary violet button (`#7c3aed` fill, white text, 6px radius, 10px 18px padding) saying 'Sign up' and a ghost button 'Read the docs' (transparent, white text, 1px rgba(255,255,255,0.2) border)."

2. "Design a magazine-spread layout: section 1 deep violet (`#24175b`) with feature grid, section 2 cream `#fbf2e4` reading panel with 3 blog cards (cream `#fbf2e4` bg, 24px padding, 10px radius, 1px rgba(15,16,61,0.15) border, ink `#15103d` headlines in Mackinac at 28px, body in Fricolage 17px `#2a1f4d`)."

3. "Build a pull-quote component for a cream reading panel: Mackinac display at 24px, 400 weight, line-height 1.35, ink `#15103d` text, optional 4px `#7c3aed` violet left-border at 16px gap. Pull-quote text reads typeset rather than screen-read."

4. "Create a code block on dark canvas: `#15103d` background, 14px Fragment Mono `#fbf2e4` body text with `zero` slashed-zero feature, 16px 20px padding, 8px radius, 1px rgba(255,255,255,0.08) border. Inline backticks render in `#a78bfa` on a rgba(124,58,237,0.15) wash."

5. "Design a region pill: 1px rgba(255,255,255,0.15) border, 4px radius, 2px 8px padding, 12px Fragment Mono in `#a78bfa`. Add aria-label spelling the full region (e.g., 'Region: Frankfurt — fra')."

6. "Build a top navigation: deep violet `#24175b` background, Fly.io wordmark in cream Mackinac, nav links in Fricolage 15px at 500 weight in `#a89dc8` (hover `#fbf2e4`), right-side ghost 'Sign in' and primary 'Sign up' violet button at 6px radius."

### Iteration Guide

1. **Start with Mackinac** — if your display isn't a wedge-serif, you're not on Fly. Substitute Mackinac is a non-starter
2. **Layer the magazine cadence** — alternate deep violet sections with cream panels for the editorial rhythm
3. **Tighten button radius** — 6px, not 8px; this single detail pulls everything toward print
4. **Set body at 17px** — slightly larger reading size matches the literary voice
5. **Reserve amber** — `#f59e0b` is the single warm accent; never mix with red, magenta, or other warm hues
6. **Pull-quotes in Mackinac** — 24px display-set quotes inside cream panels for editorial emphasis
7. **Mono with `zero`** — Fragment Mono with slashed zero for region labels, deploy commands, technical metadata
8. **Ink-tint shadows** — `rgba(15,16,61,X)` not `rgba(0,0,0,X)`; the violet undertone is part of the chromatic story
