---
name: Railway
tagline: 'Ship software peacefully — IBM Plex Serif headlines on a deep eggplant canvas, with a single confident violet for action.'
updated_at: 2026-05-05T10:17:17+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://railway.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, editorial, serif, sans, mono, structured, cool]
preview_swatch: ['#13111c', '#553f83', '#f7f7f8']
related: [vercel, linear, supabase]
description: 'Railway''s marketing site is a near-black eggplant canvas (`#13111c`) carrying serif headlines set in IBM Plex Serif at 54px with `-1.96px` tracking — a deliberate departure from the all-Inter PaaS norm. Action lives on a deep violet button (`#553f83`) with an 8px radius; the body is Inter, the mood is calm-night-shift rather than launch-day spectacle.'

colors:
  # Primary
  bg: '#13111c'                  # eggplant near-black canvas
  bg-deep: '#0c0a14'             # deeper section transitions
  bg-elev-1: '#1c1a26'           # subtle lift
  bg-elev-2: '#291839'           # secondary CTA / panel
  bg-elev-3: '#322046'           # popover surface
  surface: '#291839'             # secondary CTA panel
  surface-alt: '#1c1a26'         # card panel
  surface-deep: '#322046'        # nested panel
  surface-pink: '#2a1f3f'        # tinted soft panel

  # Brand & Dark
  brand: '#553f83'               # primary CTA violet
  brand-hover: '#6b4fa3'         # hover (lighter)
  brand-pressed: '#46336e'       # pressed
  brand-deep: '#3a2b5d'          # deeper violet
  brand-glow: '#553f8333'        # 20% violet wash
  on-brand: '#ffffff'            # white text on violet

  # Accent
  accent: '#9d7ad4'              # lighter violet accent
  accent-hover: '#b39de2'        # accent hover
  accent-soft: '#2a1f3f'         # tinted surface
  accent-mid: '#7d63b8'          # mid-violet

  # Interactive
  link: '#9d7ad4'                # links use lighter violet
  link-hover: '#b39de2'          # link hover
  link-visited: '#8462c4'        # visited
  selected: '#553f8326'          # 15% violet selection
  disabled: '#33323e'            # disabled bg
  disabled-text: '#7a798a'       # disabled text

  # Neutral Scale
  text: '#f7f7f8'                # primary copy (just-off-pure-white)
  text-heading: '#ffffff'        # headlines
  text-muted: '#a1a0ab'          # secondary
  text-soft: '#7a798a'           # tertiary
  text-faint: '#5a5969'          # quaternary
  text-disabled: '#7a798a'       # disabled

  # Surface & Borders
  border: '#33323e'              # solid hairline
  border-soft: '#ffffff14'       # 8% white
  border-strong: '#ffffff26'     # 15% emphasized (Railway's CTA outline)
  border-brand: '#553f8366'      # 40% brand on focus

  # Shadow
  shadow-ambient: 'rgba(0,0,0,0.3)'      # low ambient
  shadow-standard: 'rgba(0,0,0,0.5)'     # standard
  shadow-elevated: 'rgba(0,0,0,0.65)'    # popover
  shadow-glow: 'rgba(85,63,131,0.35)'    # violet focus glow

  # Semantic
  success: '#22c55e'             # green
  success-bg: '#0f3a1f'          # success surface
  warning: '#f59e0b'             # amber
  warning-bg: '#3a2710'          # warning surface
  danger: '#ef4444'              # red
  danger-bg: '#3a1818'           # danger surface
  info: '#9d7ad4'                # info uses lighter violet
  info-bg: '#291839'             # info surface

typography:
  display:
    family: '"IBM Plex Serif", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
    weights: [400, 500, 600]
    opentype-features: ['liga', 'kern']
  body:
    family: 'Inter, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['ss01', 'kern']
  mono:
    family: '"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace'
    weights: [400, 500, 600]
    opentype-features: ['zero', 'tnum']
  scale:
    display-hero:   { size: 72, weight: 500, lineHeight: 1.08, tracking: '-0.04em',  family: display, opentype: 'liga' }
    display-large:  { size: 54, weight: 500, lineHeight: 1.12, tracking: '-0.036em', family: display, opentype: 'liga' }
    h1:             { size: 48, weight: 500, lineHeight: 1.12, tracking: '-0.03em',  family: display, opentype: 'liga' }
    h2:             { size: 40, weight: 500, lineHeight: 1.15, tracking: '-0.02em',  family: display }
    h3:             { size: 24, weight: 500, lineHeight: 1.3,  tracking: '-0.01em',  family: display }
    h4:             { size: 20, weight: 500, lineHeight: 1.35, tracking: '-0.005em', family: display }
    body-large:     { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    body:           { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    body-small:     { size: 14, weight: 400, lineHeight: 1.45, tracking: '0',         family: body }
    label-mono:     { size: 13, weight: 500, lineHeight: 1.3,  tracking: '0.04em',    family: mono, opentype: 'zero, tnum' }
    button:         { size: 20, weight: 500, lineHeight: 1.0,  tracking: '0',         family: body }
    button-small:   { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',         family: body }
    link:           { size: 16, weight: 500, lineHeight: 1.5,  tracking: '0',         family: body }
    quote:          { size: 26, weight: 400, lineHeight: 1.4,  tracking: '-0.005em',  family: display }
    caption:        { size: 14, weight: 400, lineHeight: 1.4,  tracking: '0',         family: body }
    caption-small:  { size: 13, weight: 400, lineHeight: 1.35, tracking: '0',         family: body }
    micro:          { size: 12, weight: 500, lineHeight: 1.3,  tracking: '0.06em',    family: body }
    code-body:      { size: 14, weight: 400, lineHeight: 1.6,  tracking: '0',         family: mono, opentype: 'zero' }
    code-bold:      { size: 14, weight: 600, lineHeight: 1.6,  tracking: '0',         family: mono, opentype: 'zero' }
    code-label:     { size: 12, weight: 500, lineHeight: 1.3,  tracking: '0.05em',    family: mono, opentype: 'zero, tnum' }

radius:
  micro: 2
  sm: 6           # secondary controls
  md: 8           # primary button
  lg: 12          # card
  xl: 16          # hero shell
  featured: 20    # signature feature shells
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
  page-width: 1280
  prose-width: 720
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 120
  duration-standard: 240
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — translate-y page enters become opacity-only, scroll-triggered Plex Serif headlines render statically, button scale removed.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0,0,0,0.3) 0 1px 2px'
  standard: 'rgba(0,0,0,0.5) 0 8px 24px -4px'
  elevated: 'rgba(0,0,0,0.65) 0 18px 36px -12px, rgba(0,0,0,0.4) 0 4px 8px'
  deep: 'rgba(0,0,0,0.8) 0 30px 60px -16px'
  ring: '0 0 0 3px rgba(85,63,131,0.4)'
  glow: '0 0 24px rgba(85,63,131,0.35)'

accessibility:
  contrast-text-on-bg: 17.8         # AAA — #f7f7f8 on #13111c
  contrast-text-on-brand: 7.4       # AAA — white on #553f83
  contrast-link-on-bg: 7.2          # AAA — lighter violet link on canvas
  contrast-muted-on-bg: 6.4         # AA at body sizes
  focus-ring: '3px solid rgba(85,63,131,0.4), 0 offset'
  reduced-motion-honored: true
  keyboard-nav: 'standard tab order; violet focus ring on all interactive controls'

components:
  button-primary:
    bg: '#553f83'
    text: '#ffffff'
    padding: '14px 24px'
    radius: 8
    font: 'button (20/500)'
    border: '1px solid rgba(255,255,255,0.15)'
    hover: 'bg → #6b4fa3; border → rgba(255,255,255,0.25)'
    active: 'bg → #46336e'
    use: 'primary CTA — Deploy →, Sign up'
  button-ghost:
    bg: 'transparent'
    text: '#f7f7f8'
    padding: '14px 24px'
    radius: 8
    font: 'button (20/500)'
    border: '1px solid #33323e'
    hover: 'border → #555560; bg → rgba(255,255,255,0.04)'
    use: 'secondary action'
  button-danger:
    bg: 'transparent'
    text: '#ef4444'
    padding: '14px 24px'
    radius: 8
    border: '1px solid rgba(239,68,68,0.4)'
    hover: 'bg → rgba(239,68,68,0.08)'
    use: 'destructive action'
  card:
    bg: '#1c1a26'
    text: '#f7f7f8'
    padding: '28px'
    radius: 12
    border: '1px solid #33323e'
    shadow: 'rgba(0,0,0,0.3) 0 1px 2px'
    hover: 'border → #555560; shadow → standard'
    use: 'feature card, template card'
  card-tinted:
    bg: '#291839'
    text: '#f7f7f8'
    padding: '28px'
    radius: 12
    border: 'none'
    use: 'tinted feature panel, recommended tier'
  input:
    bg: '#0c0a14'
    text: '#f7f7f8'
    placeholder: '#7a798a'
    padding: '12px 16px'
    radius: 8
    border: '1px solid #33323e'
    focus: 'border → #553f83; ring 3px solid rgba(85,63,131,0.4)'
    use: 'text input, search'
  badge:
    bg: '#291839'
    text: '#9d7ad4'
    padding: '2px 10px'
    radius: 9999
    font: 'micro (12/500)'
    use: 'tag, status pill'
  nav-link:
    bg: 'transparent'
    text: '#a1a0ab'
    padding: '8px 12px'
    font: 'body-small (14/500)'
    hover: 'text → #f7f7f8'
    active: 'text → #f7f7f8'
    use: 'top nav, sidebar'

lineage:
  summary: |
    Railway is what happens when a Heroku-class PaaS decides it wants to feel
    like a literary publication. The canvas is `#13111c` — eggplant pulled
    so far toward black it reads as a quiet night sky. Where Vercel commits
    to pure `#000` and Linear builds on graphite, Railway tilts the entire
    palette toward violet, which lets a single brand colour (`#553f83`) do
    the work without ever fighting the background. The headline choice is
    the giveaway: **IBM Plex Serif** at 500 weight, 54px, with hard
    `-1.96px` (≈ `-0.036em`) tracking — almost no infrastructure brand
    runs serif display type. It echoes editorial PaaS-as-craft brands like
    Plain and the early Vercel-Knowledge work, with mono accents (Plex
    Mono) reinforcing the "we ship software, peacefully" voice. Action
    buttons land at 8px with a translucent white hairline border, a detail
    borrowed from Linear's translucent control language. Inter handles
    body — the only concession to PaaS convention.
  influences:
    - name: 'IBM Plex'
      role: 'Plex Serif and Plex Mono carry the entire typographic identity — the only PaaS using a serif headline.'
      url: https://www.ibm.com/plex
    - name: 'Linear'
      role: 'Translucent border on primary CTA, near-black canvas, restrained chromatic palette.'
      url: https://linear.app
    - name: 'Vercel'
      role: 'Single confident accent against a dark substrate, generous vertical rhythm.'
      url: https://vercel.com
    - name: 'Plain'
      role: 'Editorial PaaS-as-craft framing, calm-night-shift mood, serif-as-voice typographic discipline.'
      url: https://plain.com

dark-mode: native    # Railway is committedly dark; the eggplant canvas is the brand
---

## 1. Visual Theme & Atmosphere

Railway's home page opens on the headline "Ship software peacefully" set in
IBM Plex Serif — a serif so editorial it could be the masthead of a
literary quarterly. The canvas (`#13111c`) is an eggplant black: warmer
than Linear's graphite, cooler than Notion's near-paper-white inverse,
and just chromatic enough that the violet brand button (`#553f83`) reads
as a continuation of the surface rather than an interruption. The first
impression is **infrastructure-as-craft** — a PaaS that wants to feel
considered, almost monastic, in contrast to the launch-day-spectacle
energy of most dev-tool marketing.

The infrastructure-as-craft framing is deliberate. Railway is selling
deployment as something thoughtful, almost monastic — and the type
choices reinforce that. Plex Serif at 500 weight (not 700) keeps the
headline calm; the negative tracking (`-1.96px` ≈ `-0.036em`) compresses
the words just enough to feel typeset rather than rendered. There is
no exclamation, no "ship faster," no aggressive feature-comparison
chart. Just the calm assertion that deployment can be peaceful.

The whole chromatic palette tilts toward violet, with the eggplant
canvas (`#13111c`), the brand violet (`#553f83`), the lighter violet
accent (`#9d7ad4`), and the tinted surface (`#291839`) all sharing a
chromatic family. This monochromatic violet discipline lets the brand
button feel like a continuation of the surface, not an interruption —
the action is part of the conversation, not separate from it.

The mood is **calm night-shift**. Body type is Inter (the only
concession to PaaS convention); mono is Plex Mono for code blocks and
template slugs. The vertical rhythm is generous (sections at 120–160px
gap), and the cards at 12px radius float quietly on the eggplant
canvas. The translucent white border on the primary CTA — a detail
borrowed from Linear's control language — is the page's most refined
touch.

**Key Characteristics**

- Eggplant near-black canvas (`#13111c`) — warmer than Linear, cooler than Notion
- IBM Plex Serif at 500 for display — the only major PaaS with serif headlines
- Brand violet `#553f83` with a 1px translucent white border on primary CTA
- IBM Plex Mono for code, template slugs, technical metadata
- Inter for body (the only concession to PaaS convention)
- 8px button radius, 12px card radius — Vercel/Linear-class geometry
- Generous vertical rhythm (120–160px between sections)
- Tonal violet ladder: bg → surface (`#291839`) → brand (`#553f83`) → accent (`#9d7ad4`)
- Plex Serif H1 at 54px with -1.96px (-0.036em) tracking
- Calm, considered, editorial — no marketing fluff

## 2. Color Palette & Roles

### Primary

- **Background** (`#13111c`) [→ `--rw-bg`]: eggplant near-black, the entire page sits on this single substrate
- **Background Deep** (`#0c0a14`): used to drop into deeper section transitions
- **Primary Text** (`#f7f7f8`) [→ `--rw-text`]: just-off-pure-white for warmth
- **Primary CTA Fill** (`#553f83`): brand violet

### Brand & Dark

- **Brand Violet** (`#553f83`): primary CTA — observed on "Deploy →"
- **Brand Hover** (`#6b4fa3`): lighter on hover
- **Brand Pressed** (`#46336e`): pressed/active
- **Brand Deep** (`#3a2b5d`): deepest violet for emphasized strokes
- **Brand Glow** (`#553f8333`): 20% violet wash
- **On-Brand Text** (`#ffffff`): pure white on violet, 7.4:1 AAA

### Accent

- **Lighter Violet** (`#9d7ad4`): accent for emphasis swatches and inline links
- **Accent Hover** (`#b39de2`): hover state
- **Accent Mid** (`#7d63b8`): mid-violet — between accent and brand
- **Accent Soft** (`#2a1f3f`): tinted surface for nested panels

### Interactive

- **Link** (`#9d7ad4`): inline links use lighter violet
- **Link Hover** (`#b39de2`): brightened
- **Link Visited** (`#8462c4`): muted
- **Selected** (`#553f8326`): 15% violet wash
- **Disabled** (`#33323e`)
- **Disabled Text** (`#7a798a`)

### Neutral Scale

- **Text Heading** (`#ffffff`): full white for headlines
- **Text Body** (`#f7f7f8`): just-off-pure-white (the warm tone matters)
- **Text Muted** (`#a1a0ab`): secondary copy, captions, nav inactive
- **Text Soft** (`#7a798a`): tertiary
- **Text Faint** (`#5a5969`): quaternary annotations
- **Text Disabled** (`#7a798a`)

### Surface & Borders

- **Surface** (`#291839`) [→ `--rw-surface`]: secondary CTA fill, panel base — a tonal cousin of the brand
- **Surface Alt** (`#1c1a26`): card panel
- **Surface Deep** (`#322046`): nested panel
- **Surface Pink** (`#2a1f3f`): tinted soft panel for callouts
- **Border** (`#33323e`) [→ `--rw-border`]: solid hairline, slightly warmer than pure neutral
- **Border Soft** (`#ffffff14`): 8% white translucent
- **Border Strong** (`#ffffff26`): 15% white translucent — used on the primary CTA outline (Linear-class detail)
- **Border Brand** (`#553f8366`): 40% violet on focus

### Shadow Colors

Shadows are pure-black at varying alpha. The brand never tints standard shadows — depth stays neutral so the violet brand can foreground:

- **Ambient** (`rgba(0,0,0,0.3)`): low resting
- **Standard** (`rgba(0,0,0,0.5)`): card hover
- **Elevated** (`rgba(0,0,0,0.65)`): popover
- **Deep** (`rgba(0,0,0,0.8)`): modal
- **Glow** (`rgba(85,63,131,0.35)`): violet focus glow only

### Semantic

- **Success** (`#22c55e`): green
- **Success Bg** (`#0f3a1f`)
- **Warning** (`#f59e0b`): amber
- **Warning Bg** (`#3a2710`)
- **Danger** (`#ef4444`): red
- **Danger Bg** (`#3a1818`)
- **Info** (`#9d7ad4`): info uses lighter violet
- **Info Bg** (`#291839`)

## 3. Typography Rules

### Font Family

- **Display**: IBM Plex Serif — the brand's typographic spine, the only PaaS using a serif headline
- **Body**: Inter — the concession to PaaS convention
- **Mono**: IBM Plex Mono — completes the IBM Plex family for code and technical labels
- **OpenType**: `liga` and `kern` enabled on Plex Serif for typographic ligatures (ff, ffl, fi); `ss01` on Inter for alternate single-storey g; `tnum` and `zero` on Plex Mono for tabular alignment

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | display | 72 | 500 | 1.08 | -0.04em | liga | hero only |
| display-large | display | 54 | 500 | 1.12 | -0.036em | liga | observed -1.96px @ 54 |
| h1 | display | 48 | 500 | 1.12 | -0.03em | liga | page title |
| h2 | display | 40 | 500 | 1.15 | -0.02em | — | feature heading |
| h3 | display | 24 | 500 | 1.3 | -0.01em | — | sub-feature |
| h4 | display | 20 | 500 | 1.35 | -0.005em | — | card title |
| body-large | body | 18 | 400 | 1.55 | 0 | — | hero supporting |
| body | body | 16 | 400 | 1.5 | 0 | — | default |
| body-small | body | 14 | 400 | 1.45 | 0 | — | dense feature blocks |
| label-mono | mono | 13 | 500 | 1.3 | 0.04em | zero, tnum | eyebrow, label |
| button | body | 20 | 500 | 1.0 | 0 | — | primary CTA — larger than typical PaaS |
| button-small | body | 14 | 500 | 1.0 | 0 | — | dense controls |
| link | body | 16 | 500 | 1.5 | 0 | — | inline link |
| quote | display | 26 | 400 | 1.4 | -0.005em | — | pull-quote in Plex Serif |
| caption | body | 14 | 400 | 1.4 | 0 | — | image caption |
| caption-small | body | 13 | 400 | 1.35 | 0 | — | metadata |
| micro | body | 12 | 500 | 1.3 | 0.06em | — | badge label |
| code-body | mono | 14 | 400 | 1.6 | 0 | zero | code blocks |
| code-bold | mono | 14 | 600 | 1.6 | 0 | zero | emphasized id |
| code-label | mono | 12 | 500 | 1.3 | 0.05em | zero, tnum | template slug |

### Principles

- **Plex Serif at 500, not 700**: the headline weight is 500 — keeps the editorial calm; 700 would feel aggressive
- **Tracking discipline**: -0.036em (≈ -1.96px @ 54px) is Railway's signature display tracking — non-negotiable
- **Three-family discipline**: Plex Serif (display) + Inter (body) + Plex Mono (code) — each family has a clear role
- **Body is just-off-pure-white**: `#f7f7f8` warmth is part of the chromatic story; pure white reads too aggressive
- **Button size is 20px**: larger than typical PaaS button copy (16px) — emphasizes the CTA's calm confidence
- **Mono labels with `zero`**: slashed zero on template slugs, deploy URLs, identifiers
- **Pull-quotes in Plex Serif**: 26px display-set quotes for editorial emphasis
- **No italic on Plex Serif**: keep the serif upright; italic feels too literary-pretentious

## 4. Component Stylings

### Buttons

**button-primary** — Violet
- Background: `#553f83`
- Text: `#ffffff` at 20/500 Inter
- Padding: 14px 24px (generous for the editorial CTA scale)
- Radius: 8
- Border: 1px solid rgba(255,255,255,0.15) — Linear-class translucent outline
- Hover: bg → `#6b4fa3`, border → rgba(255,255,255,0.25)
- Active: bg → `#46336e`
- Focus: 3px solid rgba(85,63,131,0.4) ring
- Use: primary CTA — "Deploy →", "Sign up", "Get started"

**button-ghost** — Outlined
- Background: transparent
- Text: `#f7f7f8` at 20/500
- Padding: 14px 24px
- Radius: 8
- Border: 1px solid `#33323e`
- Hover: border → `#555560`, bg → rgba(255,255,255,0.04)
- Use: secondary action — "View pricing", "Read the docs"

**button-danger** — Destructive
- Background: transparent
- Text: `#ef4444` at 20/500
- Padding: 14px 24px
- Radius: 8
- Border: 1px solid rgba(239,68,68,0.4)
- Hover: bg → rgba(239,68,68,0.08)
- Use: "Delete service", "Cancel deployment"

**button-link** — Bare
- Background: transparent
- Text: `#9d7ad4` at 16/500
- Padding: 0
- Hover: text → `#b39de2`, underline grows from 0 → 1px

### Cards

**card-default** — Template, feature
- Background: `#1c1a26`
- Padding: 28px
- Radius: 12
- Border: 1px solid `#33323e`
- Shadow: ambient
- Hover: border → `#555560`, shadow → standard
- Use: feature card, template card

**card-tinted** — Recommended tier
- Background: `#291839`
- Padding: 28px
- Radius: 12
- Border: none
- Use: recommended pricing tier, callout panel

### Badges / Tags / Pills

**badge-tag**
- Background: `#291839`
- Text: `#9d7ad4` at 12/500 micro
- Padding: 2px 10px
- Radius: pill
- Use: tag chip, status label

**badge-monospace** — Template slug
- Background: transparent
- Text: `#a1a0ab` at 12/500 Plex Mono
- Border: 1px solid `#33323e`
- Padding: 2px 8px
- Radius: 6
- Use: deploy slug, template URL

### Inputs / Forms

**input-text**
- Background: `#0c0a14`
- Text: `#f7f7f8` at 16/400
- Placeholder: `#7a798a`
- Padding: 12px 16px
- Radius: 8
- Border: 1px solid `#33323e`
- Focus: border → `#553f83`, ring 3px solid rgba(85,63,131,0.4)

### Navigation

**nav-link**
- Background: transparent
- Text: `#a1a0ab` at 14/500
- Padding: 8px 12px
- Hover: text → `#f7f7f8`
- Active: text → `#f7f7f8`

### Decorative

**pull-quote**
- Set in Plex Serif at 26px / 400, line-height 1.4
- Optional 4px violet `#553f83` left-border at 16px gap
- Used inside content sections for editorial emphasis

**code-block**
- Background: `#0c0a14`
- Text: `#f7f7f8` at code-body (14/400 Plex Mono)
- Padding: 16px 20px
- Radius: 8
- Border: 1px solid `#33323e`
- Inline backticks render in `#9d7ad4` on rgba(85,63,131,0.15) wash

**template-card** — Deploy template
- Background: `#1c1a26`
- Padding: 24px
- Radius: 12
- Border: 1px solid `#33323e`
- Mono slug at 12px Plex Mono in `#a1a0ab`
- Title in 20px Plex Serif at 500 weight
- Use: template gallery — Railway's signature feature surface

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px
- **Scale**: 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160
- **Density observation**: Railway's grid is **editorial-spacious** — sections separated by 120–160px (more than typical PaaS), reinforcing the calm-night-shift mood

### Grid & Container

- **Page width**: 1280px max
- **Prose width**: 720px (documentation, marketing body)
- **Hero treatment**: full-bleed eggplant canvas, content constrained to ~1024px
- **Feature grid**: 3-col at desktop, 2-col at tablet, 1-col at mobile

### Whitespace Philosophy

- Whitespace is the brand's pacing — generous gaps function as breathing room between thoughts
- Section gaps at 120–160px support the editorial rhythm
- Cards float quietly on the eggplant canvas with 1px hairline border, ambient shadow

### Section Cadence

- Hero (eggplant canvas) → product surface → template gallery (eggplant) → testimonial (eggplant) → pricing → footer (eggplant)
- The page rarely shifts canvas colour — the entire experience runs on `#13111c`
- Tonal layering (`#13111c` → `#1c1a26` → `#291839`) provides break

## 6. Shapes & Radius Scale

| Tier | Px | Use |
|------|----|----|
| Micro | 2 | inline pills, tight chips |
| Standard | 6 | secondary controls, mono badges |
| Comfortable | 8 | buttons, inputs |
| Relaxed | 12 | cards, template cards |
| Featured | 16 | hero shells, feature blocks |
| Large | 20 | signature illustrative panels |
| Pill | 9999 | status badges, avatars |

The 8px primary button radius matches Vercel/Linear defaults — Railway isn't reinventing geometry; it's reinventing the type.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|----|
| 0 | flat | hero copy on canvas |
| 1 | 1px solid `#33323e` border | inline cards, code blocks |
| 2 | 1px hairline + ambient shadow | feature cards |
| 3 | standard shadow + border lift | hover state |
| 4 | elevated + 1px translucent white edge | popover, dropdown |
| 5 | deep shadow | modal |

**Shadow Philosophy**: Railway's depth is **tonal-and-bordered**, not shadowed. The eggplant canvas allows a secondary panel at `#291839` to read as elevated without any blur — pure tonal lift. Where elevation is needed (hovers, popovers), Railway uses a 1px translucent white edge (`rgba(255,255,255,0.15)`) — the Linear-class detail — rather than a heavy drop shadow. Multi-layer shadows are reserved for level 4+ floating UI.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — page transitions, modal enter
- **Decelerate**: `cubic-bezier(0, 0, 0.2, 1)` — tooltips, dropdowns

### Durations

- **Fast** (120ms): hover, focus
- **Standard** (240ms): card lift, button press — slightly slower than typical for the calm feel
- **Slow** (400ms): modal enter, page transition — emphasized pacing

### Per-Component Recipes

- **Button hover**: bg colour + border-opacity transitions over 240ms standard ease
- **Card hover**: border lifts from `#33323e` → `#555560`, shadow ambient → standard, over 240ms
- **Link hover**: underline grows from 0 → 1px over 120ms
- **Plex Serif H1 enter**: opacity 0 → 1 + translateY 12px → 0 over 400ms emphasized when scrolled into view
- **Template card hover**: subtle 1.005× scale + shadow lift over 240ms

### Page Transitions

- Default: opacity 0 → 1 + translateY 12px → 0 over 400ms emphasized
- Section transitions use staggered fade-in for editorial cadence

### Reduced Motion

When `prefers-reduced-motion: reduce` is set:

- TranslateY page enters become opacity-only fades
- Scroll-triggered Plex Serif headline enters render statically
- Card hover scale removed
- Section staggered fade disabled

## 9. Accessibility & A11y

### Contrast Pairs

- **`#f7f7f8` on `#13111c`**: 17.8:1 (AAA, all sizes)
- **White on `#553f83` brand**: 7.4:1 (AAA at body sizes)
- **Lighter violet `#9d7ad4` link on `#13111c`**: 7.2:1 (AAA)
- **Muted `#a1a0ab` on `#13111c`**: 6.4:1 (AA at body sizes)
- **Soft `#7a798a` on `#13111c`**: 3.4:1 (AA Large only — sizes ≥18px)
- **White on `#291839` surface**: 14.6:1 (AAA)

### Focus Indicators

- Default: 3px solid rgba(85,63,131,0.4) violet ring, no offset
- Inputs: focus border → `#553f83` + 3px ring
- Always visible

### ARIA Patterns

- **Combobox**: standard listbox pattern
- **Dialog**: aria-labelledby + aria-describedby; trap focus; ESC to close
- **Pull-quotes**: use `<blockquote>` with optional cite
- **Template cards**: aria-label spelling template name + repository

### Keyboard Navigation

- Tab order follows visual order; skip-link at page top
- Enter activates buttons; Enter on links
- Cmd/Ctrl+K opens command palette (when present)
- Escape closes modals, dropdowns

### Screen Reader Hints

- Status colour-coding always paired with text label
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
| Wide | 1280 | max page width |
| Ultra | 1536 | hero only |

### Touch Targets

- Minimum 44×44px for primary controls
- Pill badges expand hit-area to 32×24px

### Collapsing Strategy

- **Nav**: collapses to hamburger ≤ 768px
- **Feature grid**: 3-col → 2-col @ 1024 → 1-col @ 640
- **Hero**: display-large (54px) reduces to 36px @ 640
- **Plex Serif headlines**: maintain serif but reduce tracking less aggressively at small sizes (-0.025em instead of -0.036em)
- **Code blocks**: scroll horizontally on overflow

### Image Behavior

- Hero illustrations and template screenshots are SVG/PNG
- Logos lock at intrinsic size
- Avatars scale with text

## 11. Content & Voice

### Tone

Calm, considered, editorial. Railway writes like a thoughtful publication editor — full sentences, present tense, occasional turns toward the literary. The brand's tagline "Ship software peacefully" is a tone marker: no urgency, no exclamation, just the calm assertion that infrastructure can be a craft.

### Microcopy Patterns

- **Button verbs**: "Deploy →", "Sign up", "Get started", "View pricing", "Read the docs" — short, often with arrow indicator on primary CTAs
- **Error message recipe**: full sentences — "We couldn't deploy that service. The build failed because…"
- **Success confirmations**: "[noun] [verb-past]" — "Service deployed", "Database created"
- **Empty states**: editorial — "No services yet. Deploy your first one to see it here."

### CTA Verb Conventions

- Top-level: "Deploy →" (with arrow), "Sign up"
- Product: "Try Railway", "Deploy now"
- Documentation: "Read the docs"
- Sales: "Talk to sales"
- Templates: "Deploy this template"

## 12. Dark Mode & Theming

Railway is **dark-only**. The eggplant canvas (`#13111c`) is the brand — flipping to light would collapse the calm-night-shift mood and the violet chromatic family. There is no light-mode marketing variant.

The dashboard product runs the same dark palette. Documentation maintains the dark canvas with optional readability adjustments (slightly larger body, narrower prose width).

If a light variant were ever needed for documentation:
- `bg`: `#13111c` → `#fafafa`
- `text`: `#f7f7f8` → `#13111c`
- `surface`: `#291839` → `#f3eefe` (tinted lilac)
- `brand`: `#553f83` → stays (works on both)

The recommendation is don't. The eggplant canvas is the brand.

## 13. Lineage & Influences

Railway is what happens when a Heroku-class PaaS decides it wants to feel like a literary publication. The canvas is `#13111c` — eggplant pulled so far toward black it reads as a quiet night sky. Where Vercel commits to pure `#000` and Linear builds on graphite, Railway tilts the entire palette toward violet, which lets a single brand colour (`#553f83`) do the work without ever fighting the background.

The headline choice is the giveaway: **IBM Plex Serif** at 500 weight, 54px, with hard `-1.96px` (≈ `-0.036em`) tracking — almost no infrastructure brand runs serif display type. It echoes editorial PaaS-as-craft brands like Plain and the early Vercel-Knowledge work, with mono accents (Plex Mono) reinforcing the "we ship software, peacefully" voice. Action buttons land at 8px with a translucent white hairline border, a detail borrowed from Linear's translucent control language. Inter handles body — the only concession to PaaS convention.

- **IBM Plex** — https://www.ibm.com/plex — Plex Serif and Plex Mono carry the entire typographic identity
- **Linear** — https://linear.app — translucent border on primary CTA, restrained chromatic palette
- **Vercel** — https://vercel.com — single confident accent against a dark substrate
- **Plain** — https://plain.com — editorial PaaS-as-craft framing, calm-night-shift mood

## 14. Do's and Don'ts

### Do

- **Do** keep the action palette to a single confident violet (`#553f83`); secondary actions use the `#291839` surface, never a different hue
- **Do** reach for IBM Plex Serif on display headlines — it's the brand's typographic signature and the single most differentiating choice
- **Do** hold the canvas at `#13111c`; flipping to pure black reads as Vercel, flipping to graphite reads as Linear
- **Do** keep Plex Serif at 500 weight — 700 collapses the calm into aggressive
- **Do** apply -0.036em tracking on Plex Serif display — the typeset compression is part of the voice
- **Do** use the 1px translucent white border on primary CTAs — Linear-class detail
- **Do** set body in Inter at `#f7f7f8` (not pure white); the warmth matters
- **Do** use Plex Mono with `zero` for template slugs and deploy commands
- **Do** keep section rhythm at 120–160px for editorial pacing
- **Do** float cards quietly on the eggplant canvas — depth is tonal, not heavy-shadow

### Don't

- **Don't** use Inter for the H1 — it collapses Railway's voice into generic-PaaS register
- **Don't** layer drop shadows on cards; depth is achieved through tonal lift and translucent borders
- **Don't** mix the violet brand (`#553f83`) with cooler indigo or magenta accents; the palette is monochromatically violet on purpose
- **Don't** flip to a light canvas; the eggplant is the brand
- **Don't** swap Plex Serif for any other serif (Lyon, Source Serif, Mackinac) — Plex Serif's slabs and notched terminals are non-negotiable
- **Don't** use 700 weight on Plex Serif display — 500 is the calm editorial weight
- **Don't** apply italic to Plex Serif — keep the serif upright
- **Don't** soften the canvas above `#13111c` — pure-black reads as Vercel
- **Don't** use bright/saturated chromatic accents — semantic colours only outside the violet family
- **Don't** rush the motion — 240–400ms is Railway's pacing, not 100–200ms

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #13111c
bg-deep: #0c0a14
surface: #291839
surface-alt: #1c1a26
text: #f7f7f8
text-muted: #a1a0ab
brand: #553f83
brand-hover: #6b4fa3
accent: #9d7ad4
border: #33323e
border-strong: rgba(255,255,255,0.15)
on-brand: #ffffff
```

### Example Component Prompts

1. "Create a hero section: eggplant near-black `#13111c` background, a 54px IBM Plex Serif display-large headline at 500 weight in `#ffffff` with -0.036em tracking and `liga` ligatures enabled, body-large 18px Inter subhead in `#a1a0ab`. Add a primary violet button (`#553f83` fill, white text, 8px radius, 14px 24px padding, 20/500 button text) saying 'Deploy →' with a 1px rgba(255,255,255,0.15) translucent border. Secondary ghost button 'View pricing' (transparent + `#33323e` border)."

2. "Design a 3-card template gallery: each card `#1c1a26` bg, 24px padding, 12px radius, 1px `#33323e` border. Each card shows a 12px Plex Mono slug in `#a1a0ab` (e.g., 'railwayapp/typebot-builder'), then a 20px Plex Serif title at 500 in `#ffffff`, then a 14px Inter description in `#a1a0ab`. Hover: border lifts to `#555560`, shadow ambient → standard."

3. "Build a pull-quote inside an editorial section: 26px IBM Plex Serif at 400 weight, line-height 1.4, in `#f7f7f8` on the eggplant canvas. Add a 4px `#553f83` violet left-border at 16px gap. Use `<blockquote>` semantic."

4. "Create a code block: `#0c0a14` background, 14px IBM Plex Mono `#f7f7f8` body text with `zero` slashed-zero feature, 16px 20px padding, 8px radius, 1px `#33323e` border. Inline backticks within prose render in `#9d7ad4` lighter violet on rgba(85,63,131,0.15) wash."

5. "Design a pricing-tier grid: 3 cards on the eggplant canvas. Default tiers `#1c1a26` bg with `#33323e` border. Recommended (middle) tier uses `#291839` tinted background, no border. 'POPULAR' badge at top in 12px Inter at 500 with 0.06em tracking, on `#553f83` violet pill. Primary CTA is the violet button at 14px 24px padding."

6. "Build a top navigation: eggplant background, 'Railway' wordmark in white Inter at 600 weight, nav links in 14px Inter at 500 in `#a1a0ab` (hover `#f7f7f8`), right-side ghost 'Sign in' and primary 'Sign up' violet button at 8px radius."

### Iteration Guide

1. **Start with the canvas** — `#13111c` (eggplant), not `#000` (Vercel) and not graphite (Linear). The exact hex matters
2. **Use Plex Serif for display** — the only PaaS-class brand using a serif headline; Inter substitution collapses the voice
3. **Plex Serif weight is 500** — not 700; the calm editorial weight is the brand
4. **Tighten display tracking** — -0.036em (≈ -1.96px @ 54px); aggressive compression is part of the typeset feel
5. **Translucent white border on CTAs** — Linear-class detail; never use a solid border
6. **Layer Plex Mono on technical labels** — template slugs, deploy URLs, identifiers; complete the IBM Plex family
7. **Keep body at `#f7f7f8`** — just-off-pure-white warmth is non-negotiable; pure white feels too aggressive
8. **Pace the motion** — 240–400ms transitions match the calm-night-shift mood; faster transitions break it
