---
name: Render
tagline: 'Lavender on white — a PaaS that swapped Heroku purple for a candy-bright #8a05ff and kept the airy whitespace.'
updated_at: 2026-05-05T10:17:17+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://render.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, sans, spacious, bright, cool]
preview_swatch: ['#ffffff', '#8a05ff', '#373145']
related: [vercel, supabase, linear]
description: 'Render runs a paper-white canvas with a single saturated violet (`#8a05ff`) carrying every action — a candy-bright, almost CMYK-magenta tone that reads more "design tool" than "deploy platform." The deep ink is `#373145`, a warm near-black with violet undertone; soft lilac surfaces (`#e6daff`) and a brighter pink halo (`#fbceff`) build out a 3-step tonal violet system that no other infrastructure brand uses.'

colors:
  # Primary
  bg: '#ffffff'                  # paper-white canvas
  bg-deep: '#fafafa'             # subtle off-white panel
  bg-elev-1: '#f5f3fb'           # soft tinted surface
  bg-elev-2: '#ffffff'           # cards float on white
  surface: '#fafafa'             # subtle off-white card
  surface-soft: '#e6daff'        # soft lilac panel
  surface-glow: '#fbceff'        # hero glow / pink halo
  surface-deep: '#f3eefe'        # deeper tint for nested panels

  # Brand & Dark
  brand: '#8a05ff'               # candy-bright primary violet
  brand-hover: '#6e04cc'         # hover (deeper)
  brand-pressed: '#5a039f'       # pressed
  brand-deep: '#3d0270'          # deepest violet for icons
  brand-glow: '#8a05ff1f'        # 12% violet wash
  on-brand: '#ffffff'            # white text on violet

  # Accent
  accent: '#9d66ff'              # mid-violet (secondary emphasis)
  accent-hover: '#b08aff'        # accent hover
  accent-soft: '#e6daff'         # tinted background
  accent-glow: '#fbceff'         # pink halo glow

  # Interactive
  link: '#8a05ff'                # links use brand
  link-hover: '#6e04cc'          # link hover
  link-visited: '#6a04b8'        # visited
  selected: '#8a05ff14'          # 8% violet selection
  disabled: '#e6e4ec'            # disabled bg
  disabled-text: '#a8a4b4'       # disabled text

  # Neutral Scale
  text: '#373145'                # primary — warm near-black with violet undertone
  text-heading: '#1f1a2e'        # headlines, slightly deeper
  text-muted: '#5e5b6f'          # secondary
  text-soft: '#9089a0'           # tertiary
  text-faint: '#bcb6c8'          # quaternary
  text-disabled: '#a8a4b4'       # disabled

  # Surface & Borders
  border: '#0000001a'            # 10% black hairline
  border-soft: '#0000000d'       # 5% black
  border-strong: '#00000033'     # 20% emphasized
  border-brand: '#8a05ff66'      # 40% brand on focus

  # Shadow
  shadow-ambient: 'rgba(55,49,69,0.06)'    # ink-tinted ambient
  shadow-standard: 'rgba(55,49,69,0.1)'    # standard
  shadow-elevated: 'rgba(138,5,255,0.18)'  # violet-tinted hover
  shadow-glow: 'rgba(251,206,255,0.5)'     # pink halo glow

  # Semantic
  success: '#0a8754'             # forest green
  success-bg: '#dffaef'          # success surface
  warning: '#cc7400'             # amber
  warning-bg: '#fff4e0'          # warning surface
  danger: '#d72638'              # red
  danger-bg: '#ffe5e8'           # danger surface
  info: '#8a05ff'                # info uses brand
  info-bg: '#e6daff'             # info surface

typography:
  display:
    family: 'Inter, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    weights: [500, 600, 700]
    opentype-features: ['ss01', 'cv11']
  body:
    family: 'Inter, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['ss01']
  mono:
    family: '"JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, monospace'
    weights: [400, 500]
    opentype-features: ['zero', 'tnum']
  scale:
    display-hero:   { size: 88, weight: 700, lineHeight: 1.0,  tracking: '-0.035em', family: display, opentype: 'ss01' }
    display-large:  { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.02em',  family: display, opentype: 'ss01' }
    h1:             { size: 48, weight: 700, lineHeight: 1.08, tracking: '-0.02em',  family: display, opentype: 'ss01' }
    h2:             { size: 36, weight: 700, lineHeight: 1.1,  tracking: '-0.018em', family: display }
    h3:             { size: 24, weight: 600, lineHeight: 1.3,  tracking: '0',         family: display }
    h4:             { size: 20, weight: 600, lineHeight: 1.35, tracking: '0',         family: display }
    body-large:     { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    body:           { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    body-small:     { size: 14, weight: 400, lineHeight: 1.45, tracking: '0',         family: body }
    label-mono:     { size: 12, weight: 500, lineHeight: 1.3,  tracking: '0.04em',    family: mono, opentype: 'zero, tnum' }
    button:         { size: 16, weight: 500, lineHeight: 1.0,  tracking: '0',         family: body }
    button-small:   { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',         family: body }
    link:           { size: 16, weight: 500, lineHeight: 1.5,  tracking: '0',         family: body }
    caption:        { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',         family: body }
    caption-small:  { size: 12, weight: 400, lineHeight: 1.35, tracking: '0',         family: body }
    micro:          { size: 11, weight: 500, lineHeight: 1.3,  tracking: '0.05em',    family: body }
    code-body:      { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',         family: mono, opentype: 'zero' }
    code-bold:      { size: 14, weight: 600, lineHeight: 1.55, tracking: '0',         family: mono, opentype: 'zero' }
    code-label:     { size: 12, weight: 500, lineHeight: 1.3,  tracking: '0.05em',    family: mono, opentype: 'zero, tnum' }

radius:
  micro: 2
  sm: 6
  md: 8           # button
  lg: 12          # card
  xl: 16          # hero shell
  featured: 24    # halo containers
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
  header-height: 72

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 120
  duration-standard: 220
  duration-slow: 360
  reduced-motion: 'respects prefers-reduced-motion: reduce — halo radial gradients become static, button scale removed, transitions reduced to opacity.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(55,49,69,0.06) 0 1px 3px'
  standard: 'rgba(55,49,69,0.1) 0 8px 24px -4px'
  elevated: 'rgba(138,5,255,0.18) 0 18px 36px -12px, rgba(55,49,69,0.06) 0 4px 8px -2px'
  deep: 'rgba(138,5,255,0.25) 0 30px 60px -16px'
  ring: '0 0 0 3px rgba(138,5,255,0.3)'
  glow: '0 0 80px rgba(251,206,255,0.7)'

accessibility:
  contrast-text-on-bg: 12.4         # AAA — #373145 on #fff
  contrast-text-on-brand: 8.1       # AAA — #fff on #8a05ff
  contrast-link-on-bg: 8.6          # AAA — #8a05ff on #fff
  contrast-muted-on-bg: 6.4         # AA at body sizes
  focus-ring: '3px solid rgba(138,5,255,0.3), 0 offset'
  reduced-motion-honored: true
  keyboard-nav: 'standard tab order; violet focus ring on all interactive controls'

components:
  button-primary:
    bg: '#8a05ff'
    text: '#ffffff'
    padding: '12px 20px'
    radius: 8
    font: 'button (16/500)'
    border: 'none'
    hover: 'bg → #6e04cc; lift via shadow elevated'
    active: 'bg → #5a039f'
    use: 'primary CTA — Get started, Deploy now'
  button-ghost:
    bg: 'transparent'
    text: '#373145'
    padding: '12px 20px'
    radius: 8
    font: 'button (16/500)'
    border: '1px solid #0000001a'
    hover: 'border → rgba(0,0,0,0.2); bg → rgba(138,5,255,0.04)'
    use: 'secondary action'
  button-danger:
    bg: '#fff'
    text: '#d72638'
    padding: '12px 20px'
    radius: 8
    border: '1px solid rgba(215,38,56,0.3)'
    hover: 'bg → #ffe5e8'
    use: 'destructive action'
  card:
    bg: '#ffffff'
    text: '#373145'
    padding: '28px'
    radius: 12
    border: '1px solid #0000001a'
    shadow: 'rgba(55,49,69,0.06) 0 1px 3px'
    hover: 'shadow → standard'
    use: 'feature card, pricing tier'
  card-tinted:
    bg: '#e6daff'
    text: '#373145'
    padding: '28px'
    radius: 12
    border: 'none'
    use: 'lilac feature panel'
  input:
    bg: '#ffffff'
    text: '#373145'
    placeholder: '#9089a0'
    padding: '10px 14px'
    radius: 8
    border: '1px solid #0000001a'
    focus: 'border → #8a05ff; ring 3px solid rgba(138,5,255,0.3)'
    use: 'text input, search'
  badge:
    bg: '#e6daff'
    text: '#5a039f'
    padding: '2px 10px'
    radius: 9999
    font: 'micro (11/500)'
    use: 'tag, label, status pill'
  nav-link:
    bg: 'transparent'
    text: '#373145'
    padding: '8px 14px'
    font: 'body-small (14/500)'
    hover: 'text → #8a05ff'
    active: 'text → #8a05ff'
    use: 'top nav, sidebar'

lineage:
  summary: |
    Render's chromatic identity is its singularity — `#8a05ff` is one of
    the most saturated violets used as a primary action colour in
    developer infrastructure. It sits between Heroku purple and Stripe-
    era magenta-violet, but pushed harder toward CMYK saturation than
    either. The supporting tonal scale (`#9d66ff` mid, `#e6daff` soft,
    `#fbceff` glow) gives Render a 4-step violet ladder that no other
    PaaS uses; most competitors stop at one accent and a tint. The body
    canvas is paper-white — a deliberate light-mode posture against the
    dark-substrate fashion of Vercel, Railway, and Fly.io. The deep ink
    `#373145` is the move that ties it together: warm near-black with a
    violet undercurrent, so even body copy feels chromatically continuous
    with the brand. Type is Inter, weights ladder 400 → 700, on a 1.25×
    modular scale. Cards 12px, buttons 8px — Vercel-class geometry with
    a pop-art chromatic spine.
  influences:
    - name: 'Heroku'
      role: "Render's PaaS lineage and its 'purple = deploy' colour grammar — modernised toward saturation."
      url: https://heroku.com
    - name: 'Stripe'
      role: 'Light canvas + single-accent confidence, gradient halos behind hero copy.'
      url: https://stripe.com
    - name: 'Linear'
      role: 'Inter at 700 with negative tracking for the hero, 8px button radius, restrained component vocabulary.'
      url: https://linear.app
    - name: 'Figma'
      role: 'Candy-bright violet aligned with creative-tool brands rather than industrial-deploy brands.'
      url: https://figma.com

dark-mode: optional   # Render ships a quiet dark dashboard mode but the marketing site is light-only
---

## 1. Visual Theme & Atmosphere

Render's home page opens on a paper-white canvas with a single, almost
shockingly saturated violet (`#8a05ff`) carrying every action. Where
Vercel commits to monochrome black-on-white and Railway runs eggplant-
on-violet, Render runs the inverse — light substrate, pop-violet brand,
with a soft pink-lilac glow `#fbceff` behind the hero copy that gives
the page a candy-bright halo. The first impression is not "deploy
platform"; it's "creative tool that happens to deploy."

The design language is closer to a creative-tool brand (Figma, Framer)
than a typical infrastructure-as-a-service site. That's the point:
Render's product positioning leans "deployments shouldn't feel
industrial," and the chromatic confidence is the carrier wave for that
message. The brand violet is more saturated than Heroku's, more chromatic
than any indigo, and more design-tool than dev-tool — and it works precisely
because Render commits to it instead of muting it.

The supporting scale — `#9d66ff` mid-violet for secondary emphasis,
`#e6daff` soft lilac for feature panels, `#fbceff` pink halo for hero
glow — gives Render a 4-step violet system unique among PaaS brands.
Body type is Inter; the deep ink `#373145` carries a violet undertone
so even body copy feels chromatically continuous with the brand. There
is no skeuomorphic gradient, no glassmorphism — just clean light surfaces,
generous whitespace, and the pop-violet doing the heavy lifting.

The mood is **playful infrastructure**. The page rhythm is spacious,
the type is confident but not aggressive, and the halo behind the hero
gives the whole composition a soft optimism that reads as "ship without
stress." Render's identity sits on the careful balance between candy-
bright (almost retail) and dev-tool (Inter + monospace details).

**Key Characteristics**

- Paper-white canvas with single saturated violet `#8a05ff` accent
- 4-step violet tonal scale: brand → mid (`#9d66ff`) → soft (`#e6daff`) → glow (`#fbceff`)
- Pink-lilac halo behind hero — Render's signature layout move
- Warm near-black ink `#373145` with violet undertone — never pure black
- Inter at 700 with negative tracking for display
- 8px button radius, 12px card radius, 24px hero halo container
- Generous whitespace, low-density grid layouts
- Design-tool aesthetic rather than industrial-PaaS aesthetic
- Light-only marketing site (dashboard has dark mode)
- Soft ambient + violet-tinted shadows for elevation

## 2. Color Palette & Roles

### Primary

- **Background** (`#ffffff`): paper-white canvas, deliberate light-mode posture
- **Primary Text** (`#373145`): warm near-black with violet undertone — ink, not black
- **Primary CTA Fill** (`#8a05ff`): candy-bright violet brand

### Brand & Dark

- **Brand Violet** (`#8a05ff`): the signature CMYK-saturated violet
- **Brand Hover** (`#6e04cc`): deepened hover state
- **Brand Pressed** (`#5a039f`): active/pressed
- **Brand Deep** (`#3d0270`): deepest violet for icon strokes and emphasized text on light surfaces
- **On-Brand Text** (`#ffffff`): pure white on the violet fill — 8.1:1 AAA contrast

### Accent

- **Mid-Violet** (`#9d66ff`): secondary emphasis, hover bands, illustrations
- **Soft Lilac** (`#e6daff`): tinted feature panel surface
- **Pink Halo** (`#fbceff`): radial-gradient halo behind hero copy — the page's most distinctive surface
- **Brand Glow** (`#8a05ff1f`): 12% violet wash for hover backgrounds

### Interactive

- **Link** (`#8a05ff`): links use the brand violet
- **Link Hover** (`#6e04cc`): deepened violet
- **Link Visited** (`#6a04b8`): muted-deep violet
- **Selected** (`#8a05ff14`): 8% violet wash for selection
- **Disabled Bg** (`#e6e4ec`): light grey disabled fill
- **Disabled Text** (`#a8a4b4`): muted purple-grey

### Neutral Scale

- **Text Heading** (`#1f1a2e`): deeper for headlines (more contrast)
- **Text Body** (`#373145`): warm near-black with violet undertone
- **Text Muted** (`#5e5b6f`): secondary
- **Text Soft** (`#9089a0`): tertiary, captions
- **Text Faint** (`#bcb6c8`): quaternary annotations
- **Text Disabled** (`#a8a4b4`)

### Surface & Borders

- **Surface** (`#fafafa`): subtle off-white panel
- **Surface Soft** (`#e6daff`): lilac feature panel
- **Surface Glow** (`#fbceff`): pink halo (rare, hero-only)
- **Surface Deep** (`#f3eefe`): nested panel tint
- **Border** (`#0000001a`): 10% black hairline — kept neutral so violet sings
- **Border Soft** (`#0000000d`): 5% black for low-emphasis
- **Border Strong** (`#00000033`): emphasized border
- **Border Brand** (`#8a05ff66`): 40% violet on focus

### Shadow Colors

Shadows are ink-tinted (using the deep `#373145`) at low alpha, with violet-tinted shadows for hover/elevated states — a deliberate move to keep the chromatic story consistent into the depth layer:

- **Ambient** (`rgba(55,49,69,0.06)`): low resting shadow
- **Standard** (`rgba(55,49,69,0.1)`): card hover
- **Elevated** (`rgba(138,5,255,0.18)`): brand-tinted elevation
- **Glow** (`rgba(251,206,255,0.5)`): pink halo behind hero
- **Ring** (`rgba(138,5,255,0.3)`): focus ring

### Semantic

- **Success** (`#0a8754`): forest green — kept saturated to pop on white
- **Success Bg** (`#dffaef`): pale mint surface
- **Warning** (`#cc7400`): amber
- **Warning Bg** (`#fff4e0`): pale amber surface
- **Danger** (`#d72638`): red
- **Danger Bg** (`#ffe5e8`): pale red surface
- **Info** (`#8a05ff`): info uses the brand violet
- **Info Bg** (`#e6daff`): lilac surface

## 3. Typography Rules

### Font Family

- **Display & Body**: Inter — same family throughout, weight ladder differentiates roles
- **Mono**: JetBrains Mono with Fira Code as fallback
- **OpenType features**: `ss01` for the alternate single-storey g (used in display and body for chromatic continuity); `tnum` and `zero` on the mono for tabular alignment

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | display | 88 | 700 | 1.0 | -0.035em | ss01 | hero only |
| display-large | display | 64 | 700 | 1.05 | -0.02em | ss01 | section opener |
| h1 | display | 48 | 700 | 1.08 | -0.02em | ss01 | page title |
| h2 | display | 36 | 700 | 1.1 | -0.018em | — | feature heading |
| h3 | display | 24 | 600 | 1.3 | 0 | — | sub-feature |
| h4 | display | 20 | 600 | 1.35 | 0 | — | card title |
| body-large | body | 18 | 400 | 1.55 | 0 | — | hero supporting |
| body | body | 16 | 400 | 1.5 | 0 | — | default |
| body-small | body | 14 | 400 | 1.45 | 0 | — | dense blocks |
| label-mono | mono | 12 | 500 | 1.3 | 0.04em | zero, tnum | eyebrow text |
| button | body | 16 | 500 | 1.0 | 0 | — | primary/ghost |
| button-small | body | 14 | 500 | 1.0 | 0 | — | dense controls |
| link | body | 16 | 500 | 1.5 | 0 | — | inline link |
| caption | body | 13 | 400 | 1.4 | 0 | — | footnotes |
| caption-small | body | 12 | 400 | 1.35 | 0 | — | metadata |
| micro | body | 11 | 500 | 1.3 | 0.05em | — | badges |
| code-body | mono | 14 | 400 | 1.55 | 0 | zero | code blocks |
| code-bold | mono | 14 | 600 | 1.55 | 0 | zero | emphasized id |
| code-label | mono | 12 | 500 | 1.3 | 0.05em | zero, tnum | deploy slugs |

### Principles

- **Weight as voice**: 700 for display headlines (confident), 600 for sub-feature, 500 for buttons and labels, 400 for body
- **Tracking philosophy**: aggressive negative tracking on display (-0.02em to -0.035em) to compress the headline; neutral on body; positive on uppercase micro
- **Single-family discipline**: Inter handles both display and body — the chromatic violet does the work of typographic differentiation
- **Mono only for code and deploy slugs**: marketing copy stays Inter; deploy URLs and command snippets use JetBrains Mono with `zero`
- **Hero scale generosity**: 88px display-hero is on the large end for PaaS — supports the spacious-canvas brief
- **No italic**: italics are absent from the marketing brand — emphasis comes from weight and colour
- **Tabular numerals on metrics**: `tnum` enabled on pricing tables, region listings, latency callouts
- **`ss01` continuity**: the alternate single-storey g feature used across display and body keeps the type chromatically consistent

## 4. Component Stylings

### Buttons

**button-primary** — Violet primary
- Background: `#8a05ff`
- Text: `#ffffff` at 16/500
- Padding: 12px 20px
- Radius: 8
- Border: none
- Hover: bg → `#6e04cc`, shadow lifts to elevated (violet-tinted)
- Active: bg → `#5a039f`
- Focus: 3px solid rgba(138,5,255,0.3) ring
- Use: primary CTA — "Get started", "Deploy now", "Sign up free"

**button-ghost** — Outlined secondary
- Background: transparent
- Text: `#373145` at 16/500
- Padding: 12px 20px
- Radius: 8
- Border: 1px solid rgba(0,0,0,0.1)
- Hover: border → rgba(0,0,0,0.2), bg → rgba(138,5,255,0.04)
- Use: "View documentation", "Sign in"

**button-danger** — Destructive
- Background: `#fff`
- Text: `#d72638` at 16/500
- Padding: 12px 20px
- Radius: 8
- Border: 1px solid rgba(215,38,56,0.3)
- Hover: bg → `#ffe5e8`
- Use: "Delete service", "Cancel deployment"

**button-link** — Inline link button
- Background: transparent
- Text: `#8a05ff` at 16/500
- Underline grows on hover from 0 → 1px

### Cards

**card-default**
- Background: `#ffffff`
- Padding: 28px
- Radius: 12
- Border: 1px solid rgba(0,0,0,0.1)
- Shadow: ambient
- Hover: shadow → standard
- Use: feature card, pricing tier

**card-tinted** — Lilac feature panel
- Background: `#e6daff`
- Padding: 28px
- Radius: 12
- Border: none
- Use: section-emphasis feature block

### Badges / Tags / Pills

**badge-tag**
- Background: `#e6daff`
- Text: `#5a039f` at 11/500 micro
- Padding: 2px 10px
- Radius: pill
- Use: tag chip, status label

**badge-status-success**
- Background: `#dffaef`
- Text: `#0a8754`
- Padding: 2px 10px
- Radius: pill

### Inputs / Forms

**input-text**
- Background: `#ffffff`
- Text: `#373145` at 16/400
- Placeholder: `#9089a0`
- Padding: 10px 14px
- Radius: 8
- Border: 1px solid rgba(0,0,0,0.1)
- Focus: border → `#8a05ff`, ring 3px solid rgba(138,5,255,0.3)

### Navigation

**nav-link**
- Background: transparent
- Text: `#373145` at 14/500
- Padding: 8px 14px
- Hover: text → `#8a05ff`
- Active: text → `#8a05ff`, optional 2px bottom-border in violet

### Decorative

**hero-halo** — Pink lilac radial glow
- Position: behind hero H1, centered
- Background: radial-gradient(`#fbceff` 0% → transparent 70%)
- Size: 800–1200px viewport-dependent
- Opacity: 0.7
- Use: hero only — never repeated below the fold

**code-block**
- Background: `#fafafa`
- Text: `#373145` at code-body (14/400)
- Padding: 16px 20px
- Radius: 8
- Border: 1px solid rgba(0,0,0,0.06)
- Inline backticks render with violet `#5a039f` text on `#e6daff` 4px-radius wash

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px
- **Scale**: 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128
- **Density observation**: Render's grid is **spacious** — generous whitespace is part of the brand. Section gaps default to 96–128px

### Grid & Container

- **Page width**: 1280px max
- **Prose width**: 720px (documentation, marketing body)
- **Hero treatment**: full-bleed pink halo, content constrained to ~1024px
- **Feature grid**: 3-column at desktop, 2-column at tablet, 1-column at mobile, with 24–32px gaps

### Whitespace Philosophy

- Whitespace is the brand — the airy spacing is what differentiates Render from Heroku's tight legacy aesthetic
- Cards float on white with shadow rather than sitting in flat coloured backgrounds
- Hero halo anchors the spacious canvas — a single chromatic event in a sea of white

### Section Cadence

- White canvas → lilac feature panel (`#e6daff`) → white → soft surface (`#fafafa`) → white
- Feature panels sit inside the white canvas — they don't span full-width
- The hero halo is unrepeated below the fold

## 6. Shapes & Radius Scale

| Tier | Px | Use |
|------|----|----|
| Micro | 2 | inline backticks, small chips |
| Standard | 6 | tighter UI controls |
| Comfortable | 8 | buttons, inputs |
| Relaxed | 12 | cards |
| Featured | 16 | hero shells, feature blocks |
| Large | 24 | halo containers, signature panels |
| Pill | 9999 | badges, status pills |

Compound radii are reserved for tabbed feature blocks (top-radius 16, bottom-radius 0 to merge with adjacent panel).

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|----|
| 0 | flat, no shadow | hero copy on canvas |
| 1 | 1px hairline, no shadow | inline cards, code blocks |
| 2 | 1px hairline + ambient shadow | resting feature card |
| 3 | standard shadow (no border) | hover state |
| 4 | elevated (violet-tinted) shadow | popover, dropdown |
| 5 | deep + glow | modal, command palette |

**Shadow Philosophy**: Render's shadows tilt **chromatically warm** — ambient and standard layers use ink-tinted (`#373145`) shadows, while elevated and deep tiers tint toward violet. This continuity keeps the chromatic story alive into the depth layer. The only neutral shadow is the ambient resting shadow; everything that "lifts" picks up brand chromaticity.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — page transitions, halo entrance
- **Decelerate**: `cubic-bezier(0, 0, 0.2, 1)` — tooltips, dropdowns

### Durations

- **Fast** (120ms): hover, focus
- **Standard** (220ms): card lift, button press, halo opacity
- **Slow** (360ms): modal enter, page transition

### Per-Component Recipes

- **Button hover**: bg fade `#8a05ff` → `#6e04cc`, shadow lifts ambient → elevated, over 220ms
- **Card hover**: shadow ambient → standard over 220ms; subtle 1.005× scale via transform
- **Link hover**: underline grows 0 → 1px over 120ms
- **Hero halo**: subtle drift animation — 80px radial pulse over 8s ease-in-out infinite (disabled with reduced-motion)
- **Page enter**: opacity 0 → 1 + translateY 8px → 0 over 360ms emphasized

### Page Transitions

- Default: fade + 8px translate-y (slide-up) over 360ms
- Hero halo radial fades in last (delay 200ms) for staged reveal

### Reduced Motion

When `prefers-reduced-motion: reduce` is set:

- Hero halo radial pulse disabled (becomes static)
- Card hover scale removed
- Page enter translateY removed (opacity-only fade)
- All transitions reduce to opacity

## 9. Accessibility & A11y

### Contrast Pairs

- **Ink `#373145` on white**: 12.4:1 (AAA, all sizes)
- **Heading `#1f1a2e` on white**: 16.8:1 (AAA)
- **White on `#8a05ff`**: 8.1:1 (AAA at body sizes)
- **Brand link `#8a05ff` on white**: 8.6:1 (AAA)
- **Muted `#5e5b6f` on white**: 6.4:1 (AA at body sizes)
- **Soft `#9089a0` on white**: 3.4:1 (AA Large only — use only for non-text or sizes ≥18px)
- **Deep violet `#5a039f` on lilac `#e6daff`**: 7.4:1 (AAA)

### Focus Indicators

- Default: 3px solid rgba(138,5,255,0.3) ring, no offset (a soft halo rather than a hard ring)
- Inputs: focus border → `#8a05ff` + 3px ring
- Always visible — never `outline: none` without replacement

### ARIA Patterns

- **Combobox**: standard listbox pattern
- **Dialog**: aria-labelledby + aria-describedby; trap focus; ESC to close
- **Tooltip**: aria-describedby; trigger via hover/focus
- **Hero halo**: decorative — `aria-hidden="true"` (no semantic value)

### Keyboard Navigation

- Tab order follows visual order; skip-link at page top
- Enter/Space activates buttons; Enter on links
- Escape closes modals, dropdowns

### Screen Reader Hints

- Status colour-coding always paired with text label
- "Get started" buttons preferred over arrow-only icon buttons (which need `aria-label`)
- Mono code blocks include `<code>` semantic

### Reduced Motion

`prefers-reduced-motion: reduce` honored — see §8.

## 10. Responsive Behavior

### Breakpoints

| Name | Min Width | Use |
|------|-----------|----|
| Mobile | — | default |
| Tablet | 640 | 2-col grids |
| Desktop | 1024 | 3-col grids |
| Wide | 1280 | max page width |
| Ultra | 1536 | wide hero |

### Touch Targets

- Minimum 44×44px for interactive controls
- Pill badges expand hit-area to 32×24px

### Collapsing Strategy

- **Nav**: top nav collapses to hamburger ≤ 768px
- **Feature grid**: 3-col → 2-col @ 1024 → 1-col @ 640
- **Hero**: display-hero (88px) reduces to 48px @ 640
- **Halo**: scales with hero — narrows on mobile

### Image Behavior

- Hero illustrations are SVG
- Logos lock at intrinsic size
- Avatars/region flags scale with text

### Container Queries

Used inside feature cards to switch from horizontal to vertical layout when the card narrows below 320px.

## 11. Content & Voice

### Tone

Friendly-confident, design-tool casual. Render writes like a creative-tool brand: short sentences, present tense, occasional contractions. Less "enterprise infrastructure", more "shipping made calm." No exclamation points; no jargon dumps; copy avoids both the dry-technical and the hype-marketing extremes.

### Microcopy Patterns

- **Button verbs**: "Get started", "Deploy now", "Try free", "Connect", "Sign up free" — verb-led, friendly
- **Error message recipe**: "[noun] couldn't [verb]: [reason]" — e.g., "Service couldn't deploy: missing environment variable"
- **Success confirmations**: "[noun] [verb-past]" — "Service deployed", "Database created"
- **Empty states**: "No services yet. [CTA: Create your first service]" — encouraging, single concrete next step

### CTA Verb Conventions

- Top-level: "Get started" or "Sign up free" (never "Start trial")
- Product: "Deploy now" or "Try [feature]"
- Documentation: "Read the docs"
- Support: "Contact us"
- Sales: "Talk to sales"

## 12. Dark Mode & Theming

The marketing site is **light-only** by design — Render's identity depends on the paper-white substrate that lets the candy-bright violet pop. The dashboard product ships a dark mode (with the same brand violet, on a deep `#15131c` near-black canvas), but the marketing brand stays committed to the light surface.

If a dark variant is ever needed for marketing, swap:
- `bg`: `#ffffff` → `#15131c`
- `text`: `#373145` → `#f5f3fb`
- `surface-soft`: `#e6daff` → `#2a1f3f` (deep lilac)
- `surface-glow`: `#fbceff` → soft `rgba(251,206,255,0.15)` halo
- Brand violet stays `#8a05ff` (it works on dark too)

But — the recommendation is don't. The light canvas is the brand.

## 13. Lineage & Influences

Render's chromatic identity descends from **Heroku's "purple = deploy"** lineage but pushes the saturation toward CMYK candy-bright territory. The supporting tonal scale (mid-violet → soft lilac → pink halo) is closer to a Figma/Framer creative-tool palette than a typical PaaS — and that's the point. Render's positioning is "deployment shouldn't feel industrial," and the chromatic confidence is the carrier wave for that brief.

The light canvas + single-saturated-accent + halo gradient + Inter typography is Stripe's grammar applied to PaaS. The tight component geometry (8px buttons, 12px cards) borrows from Linear and Vercel; the design-tool tonal scale is what makes it Render.

- **Heroku** — https://heroku.com — purple-as-deploy lineage, modernised
- **Stripe** — https://stripe.com — light canvas + halo + single-accent confidence
- **Linear** — https://linear.app — Inter at 700 with negative tracking, 8px button radius
- **Figma** — https://figma.com — candy-bright violet aligned with creative-tool brands

## 14. Do's and Don'ts

### Do

- **Do** commit to the saturated violet (`#8a05ff`); muting it toward indigo collapses the brand
- **Do** build the tonal ladder (`#8a05ff` → `#9d66ff` → `#e6daff` → `#fbceff`) — the 4-step violet scale is Render's identity
- **Do** anchor the deep ink at `#373145` rather than pure `#000`; the violet undertone in body copy is part of the chromatic story
- **Do** float cards on white with shadow rather than placing them on flat coloured backgrounds
- **Do** keep the hero halo single-use — only behind the H1, never repeated
- **Do** use Inter at 700 with -0.02em tracking for display headlines
- **Do** pair semantic colour-coding with text labels for accessibility
- **Do** use violet-tinted shadows on hover/elevated states for chromatic continuity
- **Do** honor `prefers-reduced-motion` — disable halo pulse and card scale
- **Do** keep section rhythm spacious (96–128px between sections)

### Don't

- **Don't** flip to a dark canvas; Render's positioning depends on the light, candy-bright substrate
- **Don't** use the lilac halo `#fbceff` outside hero contexts; it loses meaning when over-applied
- **Don't** pair the brand violet with green or orange accents — the palette is monochromatically violet by design (semantic colours only)
- **Don't** use `#000` for body copy; `#373145` warmth is non-negotiable
- **Don't** apply heavy drop shadows; depth here is light-touch and chromatically tinted
- **Don't** use mono for body or labels — mono is reserved for code and deploy slugs
- **Don't** shrink the violet's saturation toward indigo `#5a40d4` — the brand depends on the candy-bright tone
- **Don't** add neon glow or gradients to the violet — keep it flat
- **Don't** crowd the canvas — Render's whitespace is brand
- **Don't** use italics anywhere in the marketing brand

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #ffffff
text: #373145
text-heading: #1f1a2e
text-muted: #5e5b6f
brand: #8a05ff
brand-hover: #6e04cc
accent-soft: #e6daff
accent-glow: #fbceff
border: rgba(0,0,0,0.1)
on-brand: #ffffff
```

### Example Component Prompts

1. "Create a hero section: paper-white `#ffffff` background, a 88px display-hero headline in `#1f1a2e` at 700 weight with -0.035em tracking, body-large 18px subhead in `#5e5b6f`, and a primary violet button (`#8a05ff` fill, white text, 8px radius, 12px 20px padding) saying 'Get started.' Add a soft pink-lilac radial halo (`#fbceff` → transparent, 0.7 opacity) centered behind the headline."

2. "Design a 3-card feature grid on a white canvas. Each card: `#ffffff` bg, 28px padding, 12px radius, 1px rgba(0,0,0,0.1) border, ambient shadow. The middle card uses `#e6daff` lilac background with no border. Each has an h4 24px display in `#1f1a2e`, body 16px in `#373145`, and a 'Learn more' link in `#8a05ff`."

3. "Build a pricing card section: 3 cards floating on white, the recommended tier wrapped in a 24px-radius shell with `#e6daff` lilac background. Recommended badge at top: 'POPULAR' in 11px Inter at 500 with 0.05em tracking, on a `#8a05ff` violet pill. Primary CTA is the violet button; secondary is ghost (transparent + rgba(0,0,0,0.1) border)."

4. "Create a code block component: `#fafafa` background, 14px JetBrains Mono `#373145` body text with `zero` slashed-zero feature, 16px 20px padding, 8px radius, 1px rgba(0,0,0,0.06) border. Inline backticks render in `#5a039f` violet text on a 4px-radius `#e6daff` wash."

5. "Design a top navigation: white background, 14px Inter at 500, items in `#373145` default, hover/active in `#8a05ff`. Right side has a ghost 'Sign in' button and a violet 'Get started' primary button at 8px radius."

6. "Build an empty state for a service dashboard: centered icon in `#9d66ff` mid-violet, h3 24px in `#1f1a2e` saying 'No services yet,' body 16px in `#5e5b6f` saying 'Create your first service to deploy code from any Git provider.' Single primary CTA: 'Create service' violet button."

### Iteration Guide

1. **Start with the canvas** — if it's not paper-white, you're not on Render. The light substrate is non-negotiable
2. **Confirm violet saturation** — the brand is `#8a05ff` (CMYK-saturated), not indigo `#5a40d4` or muted purple
3. **Add the halo** — pink-lilac (`#fbceff`) radial behind hero copy is Render's signature layout move
4. **Warm the ink** — body text is `#373145` (warm with violet undertone), never pure `#000`
5. **Build the tonal ladder** — soft lilac `#e6daff` for tinted panels, mid-violet `#9d66ff` for secondary emphasis
6. **Float, don't fill** — cards sit on white with shadow, not on flat coloured backgrounds
7. **Tighten display tracking** — -0.02em to -0.035em for confidence
8. **Keep halo unrepeated** — the pink glow is hero-only; using it twice collapses its meaning
