---
name: Inngest
tagline: 'Durable workflows on a near-black canvas — Whyte display, muted gold CTAs, sharp 0px edges.'
updated_at: 2026-05-29T21:44:22.007Z
published_at: 2026-05-29T21:44:22.007Z
author: webdesignhot
source_url: https://www.inngest.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools]
tags: [dark, sans, developer, infra, sharp]
preview_swatch: ['#0c0a09', '#cbb26a', '#fafaf9']
related: [railway, vercel, linear]
description: 'Inngest''s marketing site is a near-black canvas (`#0c0a09`) carrying near-white display type set in Whyte at 72px/400 — a calm, infrastructural register for a durable-workflow platform. Action lives on a single muted-gold button (`#cbb26a`) printed with dark `#1a161c` text and a signature arrow, every corner held at a sharp 0px. The body is Circular XX, the mood is restrained, developer-first, and engineered rather than expressive.'

colors:
  # Primary
  bg: '#0c0a09'                  # near-black canvas — warm-leaning, the entire page sits on it
  bg-deep: '#070605'            # deeper section transitions / footer
  surface: '#16130f'            # subtle warm lift for panels
  surface-alt: '#1a161c'        # cool-tinted panel (matches on-brand text family)
  surface-muted: '#211c16'      # nested / inset surface

  # Brand
  brand: '#cbb26a'              # muted gold / khaki primary CTA fill (rgb 203,178,106)
  brand-hover: '#d8c285'        # lighter gold on hover
  brand-pressed: '#b89a55'      # deeper gold on press
  brand-soft: '#cbb26a1f'       # ~12% gold wash for tints
  on-brand: '#1a161c'           # near-black ink printed on the gold (rgb 26,22,28)

  # Accent
  accent: '#cbb26a'             # gold doubles as the single accent — no second hue
  link: '#4078f2'              # syntax-highlight / code link blue (Shiki token link)

  # Interactive
  selected: '#cbb26a26'         # ~15% gold selection wash
  disabled: '#211c16'           # disabled surface
  disabled-text: '#6b665f'      # disabled copy

  # Neutral Scale
  text: '#f6f6f6'              # primary copy + H1, near-white (rgb 246,246,246)
  text-heading: '#fafaf9'      # secondary headings / H2, the warmest near-white
  text-muted: '#a8a39b'        # secondary copy, captions
  text-soft: '#7c7770'         # tertiary, metadata
  text-faint: '#57534e'        # quaternary annotations

  # Surface & Borders
  border: '#27241f'            # solid warm hairline
  border-soft: '#ffffff0f'      # ~6% white translucent
  border-strong: '#ffffff1f'    # ~12% white translucent — emphasized edge
  border-brand: '#cbb26a66'     # ~40% gold on focus

  # Shadow
  shadow-ambient: 'rgba(0,0,0,0.4)'      # low ambient on warm-black
  shadow-standard: 'rgba(0,0,0,0.55)'    # standard
  shadow-elevated: 'rgba(0,0,0,0.7)'     # popover / modal

  # Semantic
  success: '#3ecf8e'             # green
  success-bg: '#0f2a1d'          # success surface
  warning: '#cbb26a'             # warning reuses the gold register
  warning-bg: '#2a2310'          # warning surface
  danger: '#ef4444'              # red
  danger-bg: '#2a1414'           # danger surface
  info: '#4078f2'               # info uses the code-link blue
  info-bg: '#101a2e'             # info surface

typography:
  display:
    family: 'Whyte, "Helvetica Neue", Helvetica, system-ui, -apple-system, sans-serif'
    weights: [400, 500]
    opentype-features: ['kern']
  body:
    family: '"Circular XX", CircularXX, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
    weights: [300, 400, 500]
    opentype-features: ['kern']
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
    opentype-features: ['zero']
  scale:
    display-hero:    { size: 84, weight: 400, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    display-lg:      { size: 72, weight: 400, lineHeight: 1.02, tracking: '-0.025em', family: display }
    h1:              { size: 72, weight: 400, lineHeight: 1.02, tracking: '-0.025em', family: display }
    h2:              { size: 40, weight: 400, lineHeight: 1.1,  tracking: '-0.018em', family: display }
    h3:              { size: 28, weight: 500, lineHeight: 1.2,  tracking: '-0.01em',  family: display }
    h4:              { size: 20, weight: 500, lineHeight: 1.3,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-light:      { size: 16, weight: 300, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    button:          { size: 15, weight: 500, lineHeight: 1.0,  tracking: '0',        family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.04em',   family: body }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.08em',   family: body }
    code-body:       { size: 14, weight: 400, lineHeight: 1.6,  tracking: '0',        family: mono }
    code-label:      { size: 12, weight: 500, lineHeight: 1.3,  tracking: '0.04em',   family: mono }

radius:
  micro: 0
  sm: 0
  md: 0
  lg: 0
  xl: 0
  pill: 0

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]
  xxs: 2
  xs: 4
  sm: 8
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section-sm: 80
  section: 112
  section-lg: 160

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — scroll-triggered fades render statically, button color transitions remain, transform-based motion removed.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0,0,0,0.4) 0 1px 2px'
  standard: 'rgba(0,0,0,0.55) 0 8px 24px -6px'
  elevated: 'rgba(0,0,0,0.7) 0 18px 36px -12px, rgba(0,0,0,0.4) 0 4px 8px'
  ring: '0 0 0 2px rgba(203,178,106,0.5)'

accessibility:
  contrast-text-on-bg: 18.6        # AAA — #f6f6f6 on #0c0a09
  contrast-heading-on-bg: 19.4     # AAA — #fafaf9 on #0c0a09
  contrast-onbrand-on-brand: 9.7   # AAA — #1a161c ink on #cbb26a gold
  contrast-muted-on-bg: 7.4        # AAA — #a8a39b on #0c0a09
  focus-ring: '2px solid rgba(203,178,106,0.5), 0 offset'
  reduced-motion-honored: true
  keyboard-nav: 'standard tab order; gold focus ring on all interactive controls'

components:
  button-primary:
    bg: '#cbb26a'
    text: '#1a161c'
    padding: '12px 20px'
    radius: 0
    font: 'button (15/500)'
    border: 'none'
    hover: 'bg → #d8c285'
    active: 'bg → #b89a55'
    use: 'primary CTA — Sign up →'
  button-ghost:
    bg: 'transparent'
    text: '#fafaf9'
    padding: '12px 20px'
    radius: 0
    font: 'button (15/500)'
    border: '1px solid #27241f'
    hover: 'border → #57534e; bg → rgba(255,255,255,0.03)'
    use: 'secondary action — Get a demo →'
  button-solid-dark:
    bg: '#0c0a09'
    text: '#fafaf9'
    padding: '12px 20px'
    radius: 0
    border: '1px solid #27241f'
    hover: 'border → #57534e'
    use: 'tertiary action on lifted surfaces'
  card:
    bg: '#16130f'
    text: '#f6f6f6'
    padding: '24px'
    radius: 0
    border: '1px solid #27241f'
    hover: 'border → #57534e'
    use: 'feature card, doc card'
  input:
    bg: '#0c0a09'
    text: '#f6f6f6'
    placeholder: '#7c7770'
    padding: '10px 14px'
    radius: 0
    border: '1px solid #27241f'
    focus: 'border → #cbb26a; ring 2px solid rgba(203,178,106,0.5)'
    use: 'text input, search'
  badge:
    bg: '#cbb26a1f'
    text: '#cbb26a'
    padding: '2px 8px'
    radius: 0
    font: 'caption (12/500)'
    use: 'tag, status pill — sharp, never rounded'
  nav-link:
    bg: 'transparent'
    text: '#a8a39b'
    padding: '8px 12px'
    font: 'body-sm (14/400)'
    hover: 'text → #f6f6f6'
    use: 'top nav'

lineage:
  summary: |
    Inngest reads as infrastructure dressed in editorial restraint. The
    canvas is `#0c0a09` — a near-black pulled slightly warm, closer to
    burnt umber than to Vercel's pure `#000` or Linear's cool graphite.
    The display face is **Whyte**, a grotesque sans run at 72px/400 with
    tight negative tracking, which gives the headlines a calm, almost
    Swiss-broadsheet authority rather than launch-day spectacle. The single
    brand colour is a **muted gold / khaki** (`#cbb26a`) printed with dark
    `#1a161c` ink — a deliberately un-saturated, un-neon choice that signals
    "serious backend tooling" rather than consumer flash. Everything is held
    at a sharp **0px radius**: buttons, cards, inputs, and badges all have
    square corners, an engineered, terminal-adjacent geometry that pairs with
    the gold-and-black to feel like well-set technical print. Body is set in
    Circular XX, the geometric humanist sans that underpins much of modern
    SaaS, here weighted as low as 300 for subheads to keep the page airy. The
    register is developer-first: durable workflows, event-driven execution,
    queues and retries — communicated with the visual calm of a system that
    is supposed to just keep running.
  influences:
    - name: 'Whyte (Dinamo)'
      role: 'Grotesque display face carrying the headline identity at 72px/400 with tight negative tracking.'
      url: https://abcdinamo.com/typefaces/whyte
    - name: 'Circular (Lineto)'
      role: 'Geometric humanist sans underpinning body copy; Circular XX is the workhorse text face.'
      url: https://lineto.com/typefaces/circular
    - name: 'Vercel'
      role: 'Near-black canvas, single confident accent, generous vertical rhythm, developer-infra register.'
      url: https://vercel.com
    - name: 'Linear'
      role: 'Restrained chromatic discipline and hairline-bordered surfaces on a dark substrate.'
      url: https://linear.app
    - name: 'Shiki'
      role: 'Syntax-highlight token system (the `#4078f2` code-link blue) used across docs and code blocks.'
      url: https://shiki.style

dark-mode: native    # Inngest is committedly dark; the warm near-black canvas is the brand
---

## 1. Visual Theme & Atmosphere

Inngest's home page opens on the line "AI and backend workflows, orchestrated at any scale" set in **Whyte** at 72px and a single 400 weight — a grotesque display face that reads less like marketing copy and more like the masthead of a technical broadsheet. The canvas (`#0c0a09`) is a warm near-black, pulled a hair toward burnt umber rather than the cool graphite of Linear or the pure `#000` of Vercel. The first impression is **engineered calm**: this is infrastructure that is meant to disappear into reliability, and the page carries that promise visually — quiet, dark, and confidently understated.

The single decisive gesture is the colour. Inngest spends its entire chromatic budget on one **muted gold / khaki** (`#cbb26a`), printed with a dark `#1a161c` ink, and reserves it almost exclusively for the primary CTA — "Sign up →". The gold is deliberately desaturated; it has none of the neon optimism of a typical SaaS accent. It reads like aged brass or anodized metal, which is exactly right for a durable-execution platform: the colour of something built to last rather than something built to ship a launch tweet.

Geometry reinforces the register. Every corner on the page is held at a sharp **0px radius** — buttons, cards, inputs, badges, code blocks. Nothing is rounded, nothing is soft. The square edges read as terminal-adjacent, almost like well-set technical print, and they pair with the gold-on-black palette to give the whole surface the feeling of a precisely typeset reference manual. Where most dev-tool brands soften their controls to feel friendly, Inngest leaves them sharp to feel exact.

Type does the rest of the work. Display is Whyte; body is **Circular XX**, the geometric-humanist sans that quietly underpins much of modern SaaS, here run as light as 300 weight on subheads to keep the dark page airy. Near-white copy (`#f6f6f6` for body, `#fafaf9` for headings) floats on the warm black with very high contrast, so the page never feels murky despite the darkness. The vertical rhythm is generous, sections breathe, and the gold appears just often enough to guide the eye to the next action without ever shouting.

The mood, in sum, is **restrained, developer, infra**. No gradients-as-spectacle, no rounded-pill friendliness, no second accent competing for attention. One warm-black canvas, one muted gold, two near-whites, sharp corners, and disciplined grotesque-plus-geometric type. It is the visual equivalent of a system that just keeps running.

**Key Characteristics**

- Warm near-black canvas (`#0c0a09`) — slightly burnt-umber, not Vercel-pure-black, not Linear-cool-graphite
- Whyte grotesque display at 72px / 400 with tight negative tracking — broadsheet authority
- Single muted gold / khaki brand (`#cbb26a`) printed with dark `#1a161c` ink
- Sharp 0px radius across every control — buttons, cards, inputs, badges
- Circular XX body, run as light as 300 weight on subheads for air
- Near-white copy: `#f6f6f6` body, `#fafaf9` headings — very high contrast on warm black
- Arrow-suffixed CTAs ("Sign up →", "Get a demo →") — directional, terminal-flavored
- Hairline warm borders (`#27241f`) define surfaces; depth is tonal, not heavy-shadowed
- One accent only — gold; the code-link blue (`#4078f2`) lives only inside syntax highlighting
- Generous section rhythm (80–160px) reinforcing the engineered-calm pacing

## 2. Color Palette & Roles

### Primary

- **Background** (`#0c0a09`) [→ `--color-canvas-base`]: warm near-black, the entire page sits on this single substrate
- **Background Deep** (`#070605`): used to drop into deeper section transitions and the footer
- **Primary Text** (`#f6f6f6`) [→ `--color-foreground-base`]: near-white body and H1 copy

### Brand

- **Brand Gold** (`#cbb26a`): the muted gold / khaki primary CTA fill — observed on "Sign up →"
- **Brand Hover** (`#d8c285`): lighter gold on hover
- **Brand Pressed** (`#b89a55`): deeper gold on press
- **Brand Soft** (`#cbb26a1f`): ~12% gold wash for tinted badges and inline emphasis
- **On-Brand Ink** (`#1a161c`): near-black text printed on the gold, 9.7:1 AAA

### Accent

- **Accent** (`#cbb26a`): the gold doubles as the single accent — there is no competing second hue
- **Code Link** (`#4078f2`) [→ `--shiki-token-link`]: a one-off blue reserved exclusively for syntax-highlight links inside code blocks; never used in marketing chrome

### Interactive

- **Selected** (`#cbb26a26`): ~15% gold selection wash
- **Disabled** (`#211c16`): disabled surface
- **Disabled Text** (`#6b665f`): disabled copy

### Neutral Scale

- **Text Heading** (`#fafaf9`): the warmest near-white, used on H2 and secondary headings
- **Text Body** (`#f6f6f6`): near-white default copy
- **Text Muted** (`#a8a39b`): secondary copy, captions, inactive nav
- **Text Soft** (`#7c7770`): tertiary, placeholders, metadata
- **Text Faint** (`#57534e`): quaternary annotations, faint dividers

### Surface

- **Surface** (`#16130f`): subtle warm lift for feature panels and cards
- **Surface Alt** (`#1a161c`): cool-tinted panel, the same family as the on-brand ink
- **Surface Muted** (`#211c16`): nested / inset surface for code blocks and wells

### Borders

- **Border** (`#27241f`): solid warm hairline — the primary way surfaces are defined
- **Border Soft** (`#ffffff0f`): ~6% white translucent
- **Border Strong** (`#ffffff1f`): ~12% white translucent — emphasized edge
- **Border Brand** (`#cbb26a66`): ~40% gold on focus

### Shadow Colors

Shadows are pure-black at varying alpha; on the warm-black canvas they are subtle by design. Depth is carried more by hairline borders and tonal lift than by blur:

- **Ambient** (`rgba(0,0,0,0.4)`): low resting
- **Standard** (`rgba(0,0,0,0.55)`): card hover
- **Elevated** (`rgba(0,0,0,0.7)`): popover, modal

### Semantic

- **Success** (`#3ecf8e`): green
- **Success Bg** (`#0f2a1d`)
- **Warning** (`#cbb26a`): warning reuses the gold register rather than introducing amber
- **Warning Bg** (`#2a2310`)
- **Danger** (`#ef4444`): red
- **Danger Bg** (`#2a1414`)
- **Info** (`#4078f2`): info uses the code-link blue
- **Info Bg** (`#101a2e`)

## 3. Typography Rules

### Font Family

- **Display**: Whyte — the brand's grotesque display spine, set at 72px / 400 with tight negative tracking
- **Body**: Circular XX — the geometric-humanist workhorse, run from 300 (airy subheads) to 500 (labels)
- **Mono**: system mono stack (SF Mono / Menlo / Consolas) for code and technical labels
- **OpenType**: `kern` enabled across Whyte and Circular XX; `zero` (slashed zero) on the mono stack for identifiers and numeric alignment

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| display-hero | display | 84 | 400 | 1.0 | -0.03em | oversized hero variant |
| display-lg | display | 72 | 400 | 1.02 | -0.025em | hero headline |
| h1 | display | 72 | 400 | 1.02 | -0.025em | observed Whyte 72/400 |
| h2 | display | 40 | 400 | 1.1 | -0.018em | section heading |
| h3 | display | 28 | 500 | 1.2 | -0.01em | sub-feature |
| h4 | body | 20 | 500 | 1.3 | 0 | card title |
| body-lg | body | 18 | 400 | 1.6 | 0 | hero supporting copy |
| body | body | 16 | 400 | 1.6 | 0 | default |
| body-light | body | 16 | 300 | 1.6 | 0 | subhead — observed H2-region 300 weight |
| body-sm | body | 14 | 400 | 1.5 | 0 | dense blocks, nav |
| label | body | 13 | 500 | 1.4 | 0.02em | form label |
| button | body | 15 | 500 | 1.0 | 0 | CTA copy |
| caption | body | 12 | 500 | 1.4 | 0.04em | badge, metadata |
| eyebrow | body | 12 | 500 | 1.4 | 0.08em | section eyebrow / kicker |
| code-body | mono | 14 | 400 | 1.6 | 0 | code blocks |
| code-label | mono | 12 | 500 | 1.3 | 0.04em | inline identifier, slug |

### Principles

- **Whyte at a single 400 weight for display**: Inngest does not bold its headlines — the calm authority comes from the typeface and tracking, not heavy weight
- **Tight negative tracking on display**: ≈ -0.025em at 72px compresses the grotesque just enough to feel typeset
- **Circular XX 300 for subheads**: the light weight (observed in the H2 region) keeps the dark page from feeling heavy
- **Near-white, two tones**: body at `#f6f6f6`, headings at the slightly warmer `#fafaf9` — never pure `#ffffff`
- **No serif, no italic on display**: the register is grotesque-and-geometric throughout; serifs would break the infra mood
- **Mono for identifiers only**: function names, event slugs, queue IDs — Circular handles everything narrative
- **Eyebrows use wide tracking**: 0.08em uppercase-flavored kickers introduce sections
- **Body line-height is roomy (1.6)**: long technical paragraphs stay legible on the dark canvas

## 4. Component Stylings

### Buttons

**button-primary** — Gold
- Background: `#cbb26a`
- Text: `#1a161c` at 15/500 Circular XX
- Padding: 12px 20px
- Radius: 0 (sharp — non-negotiable)
- Border: none
- Hover: bg → `#d8c285`
- Active: bg → `#b89a55`
- Focus: 2px solid rgba(203,178,106,0.5) ring
- Use: primary CTA — "Sign up →" (with trailing arrow)

**button-ghost** — Outlined
- Background: transparent
- Text: `#fafaf9` at 15/500
- Padding: 12px 20px
- Radius: 0
- Border: 1px solid `#27241f`
- Hover: border → `#57534e`, bg → rgba(255,255,255,0.03)
- Use: secondary action — "Get a demo →"

**button-solid-dark** — Canvas-filled
- Background: `#0c0a09`
- Text: `#fafaf9` at 15/500
- Padding: 12px 20px
- Radius: 0
- Border: 1px solid `#27241f`
- Hover: border → `#57534e`
- Use: tertiary action on lifted surfaces where transparency would disappear

**button-link** — Bare
- Background: transparent
- Text: `#cbb26a` at 15/500
- Padding: 0
- Hover: text → `#d8c285`; optional arrow translates 2px right
- Use: inline "Read the docs →" style links

### Cards

**card-default** — Feature, doc
- Background: `#16130f`
- Padding: 24px
- Radius: 0
- Border: 1px solid `#27241f`
- Hover: border → `#57534e`
- Use: feature card, documentation card, integration tile

**card-inset** — Code / data well
- Background: `#211c16`
- Padding: 16px 20px
- Radius: 0
- Border: 1px solid `#27241f`
- Use: embedded code sample, output panel

### Badges / Tags / Pills

**badge-gold** — Status / tag
- Background: `#cbb26a1f` (~12% gold wash)
- Text: `#cbb26a` at 12/500 caption
- Padding: 2px 8px
- Radius: 0 (square chip, never a pill)
- Use: tag chip, "New", status label

**badge-mono** — Identifier
- Background: `#211c16`
- Text: `#a8a39b` at 12/500 mono
- Border: 1px solid `#27241f`
- Padding: 2px 8px
- Radius: 0
- Use: event name, function ID, queue slug

### Inputs / Forms

**input-text**
- Background: `#0c0a09`
- Text: `#f6f6f6` at 16/400
- Placeholder: `#7c7770`
- Padding: 10px 14px
- Radius: 0
- Border: 1px solid `#27241f`
- Focus: border → `#cbb26a`, ring 2px solid rgba(203,178,106,0.5)

### Navigation

**nav-link**
- Background: transparent
- Text: `#a8a39b` at 14/400
- Padding: 8px 12px
- Hover: text → `#f6f6f6`
- Active: text → `#f6f6f6`, optional 1px gold underline

**code-block** — Decorative / technical
- Background: `#211c16`
- Text: `#f6f6f6` at code-body (14/400 mono)
- Padding: 16px 20px
- Radius: 0
- Border: 1px solid `#27241f`
- Syntax links render in `#4078f2` (Shiki token-link blue), the only place that blue appears

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px
- **Scale**: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128
- **Density observation**: Inngest's grid is **infra-spacious** — sections separated by 80–160px, with the hero given the most room. The pacing is calm rather than dense; the dark canvas does the framing so the layout can stay open.

### Grid & Container

- **Page width**: 1280px max
- **Prose width**: 720px (documentation, marketing body)
- **Hero treatment**: full-bleed warm-black canvas, content constrained to ~1024px
- **Feature grid**: 3-col at desktop, 2-col at tablet, 1-col at mobile, separated by hairline borders rather than gaps where a table-like feel is wanted

### Whitespace Philosophy

- Whitespace is the framing device — generous gaps let the single gold CTA carry the eye without competition
- Section gaps at 80–160px support the engineered-calm rhythm
- Cards and panels are defined by 1px hairline borders, not drop shadows; the dark canvas keeps them quiet

### Section Cadence

- Hero (warm-black canvas) → product surface → feature grid → code / integration showcase → social proof → pricing → footer (`#070605` deep)
- The page rarely shifts canvas colour — the entire experience runs on `#0c0a09`
- Tonal layering (`#0c0a09` → `#16130f` → `#211c16`) provides separation without a second hue

## 6. Shapes & Radius Scale

| Tier | Px | Use |
|------|----|----|
| Micro | 0 | inline chips, badges |
| Standard | 0 | buttons, inputs, controls |
| Comfortable | 0 | cards, panels |
| Relaxed | 0 | feature blocks, code wells |
| Large | 0 | hero shells |
| Pill | 0 | even status badges are square |

Inngest's defining geometric choice is the **absence** of a radius scale. Every corner is held at a sharp 0px — buttons, cards, inputs, badges, code blocks. This is not a default left unset; it is a deliberate engineered-print aesthetic. Where Railway lands at 8/12px and Linear softens its controls, Inngest stays square. The sharp corners are as much a brand signature as the gold.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|----|
| 0 | flat | hero copy on canvas |
| 1 | 1px solid `#27241f` border | inline cards, code blocks |
| 2 | 1px hairline + tonal lift (`#16130f`) | feature cards |
| 3 | border → `#57534e` on hover | interactive card hover |
| 4 | ambient shadow + 1px border | floating panel |
| 5 | elevated shadow | popover, modal |

**Shadow Philosophy**: Inngest's depth is **tonal-and-bordered**, not shadowed. On the warm-black canvas a panel at `#16130f` reads as lifted without any blur — pure tonal step. Hairline warm borders (`#27241f`) do most of the separation work, brightening to `#57534e` on hover. Drop shadows are reserved for genuinely floating UI (popovers, modals) and are kept subtle because heavy blur reads as noise against the near-black. The sharp 0px corners further discourage soft glows — the brand wants edges that are crisp, not haloed.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — section enters, modal open
- **Decelerate**: `cubic-bezier(0, 0, 0.2, 1)` — tooltips, dropdowns

### Durations

- **Fast** (150ms): hover, focus, color transitions
- **Standard** (240ms): card border lift, button press
- **Slow** (320ms): section fade-in, modal enter

### Per-Component Recipes

- **Button hover**: gold fill brightens `#cbb26a` → `#d8c285` over 150ms standard ease; ghost border lifts `#27241f` → `#57534e`
- **CTA arrow**: trailing "→" translates 2–3px to the right on hover over 150ms — reinforces the directional, terminal-flavored copy
- **Card hover**: border brightens to `#57534e` over 240ms; no scale, no shadow bloom
- **Link hover**: gold link brightens; underline grows from 0 → 1px over 150ms
- **Section enter**: opacity 0 → 1 (+ small translateY where used) over 320ms emphasized when scrolled into view

### Page Transitions

- Default: opacity-led fades over 320ms emphasized; the engineered register avoids flashy slides
- Section content staggers in subtly for cadence, never bouncing

### Reduced Motion

When `prefers-reduced-motion: reduce` is set:

- Scroll-triggered fades render statically
- Transform-based motion (arrow nudge, translateY) is removed
- Color transitions on hover/focus remain — they communicate state without movement
- Section stagger disabled

## 9. Accessibility & A11y

### Contrast Pairs

- **`#f6f6f6` on `#0c0a09`**: 18.6:1 (AAA, all sizes) — body copy
- **`#fafaf9` on `#0c0a09`**: 19.4:1 (AAA, all sizes) — headings
- **`#1a161c` ink on `#cbb26a` gold**: 9.7:1 (AAA at body sizes) — primary CTA
- **`#a8a39b` muted on `#0c0a09`**: 7.4:1 (AAA) — secondary copy, captions
- **`#7c7770` soft on `#0c0a09`**: 4.2:1 (AA at body sizes) — placeholders, metadata
- **`#cbb26a` gold on `#0c0a09`**: 8.9:1 (AAA) — gold used as text/link on the canvas

### Focus Indicators

- Default: 2px solid rgba(203,178,106,0.5) gold ring, no offset
- Inputs: focus border → `#cbb26a` + 2px ring
- Always visible; the gold ring is the single focus colour everywhere

### ARIA Patterns

- **Combobox**: standard listbox pattern for the docs search / command menu
- **Dialog**: aria-labelledby + aria-describedby; trap focus; ESC to close
- **Code blocks**: `<pre><code>` semantics; copy button has `aria-label`
- **Status badges**: gold/green/red coding always paired with a text label

### Keyboard Navigation

- Tab order follows visual order; skip-link at page top
- Enter activates buttons and links
- Cmd/Ctrl+K opens the docs command palette (when present)
- Escape closes modals and dropdowns

### Screen Reader Hints

- Status colour-coding always paired with text — never colour alone
- Decorative hairline dividers and arrow glyphs are `aria-hidden`
- Mono identifiers use `<code>`; code samples use `<pre>`

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
- Square badges expand hit-area without rounding — padding grows, corners stay sharp

### Collapsing Strategy

- **Nav**: collapses to hamburger ≤ 768px
- **Feature grid**: 3-col → 2-col @ 1024 → 1-col @ 640
- **Hero headline**: Whyte 72px reduces to ~40px @ 640, tracking relaxes slightly (-0.018em)
- **Code blocks**: scroll horizontally on overflow; never reflow
- **CTAs**: stack vertically, full-width, gold primary on top

### Image Behavior

- Diagrams, workflow graphs, and integration logos are SVG where possible
- Screenshots are PNG/WebP, framed by a 1px `#27241f` border with no radius
- Logos lock at intrinsic size; avatars scale with text

## 11. Content & Voice

### Tone

Precise, technical, calm. Inngest writes like senior infrastructure engineers explaining a system to peers — "AI and backend workflows, orchestrated at any scale" is the tone marker: declarative, scale-aware, no hype. The voice trusts the reader to care about durability, retries, and event-driven execution, and never inflates the feature set with exclamation.

### Microcopy Patterns

- **Button verbs**: "Sign up →", "Get a demo →", "Read the docs →" — short, almost always with a trailing arrow on action CTAs
- **Error message recipe**: full sentences with cause — "This function failed after 3 retries. The last attempt timed out after 30s."
- **Success confirmations**: "[noun] [verb-past]" — "Function deployed", "Event sent"
- **Empty states**: factual and instructive — "No runs yet. Send your first event to see it here."

### CTA Verb Conventions

- Top-level: "Sign up →" (gold), "Get a demo →" (ghost)
- Product: "Start building", "Deploy a function"
- Documentation: "Read the docs →"
- Sales: "Talk to an engineer"

## 12. Dark Mode & Theming

Inngest is **dark-only**. The warm near-black canvas (`#0c0a09`) is the brand — flipping to light would collapse the engineered-calm mood, and the muted gold (`#cbb26a`) is tuned specifically to read as aged brass on black; on white it would lose its quiet authority. There is no light-mode marketing variant.

The dashboard product runs the same dark palette, with the gold reserved for primary actions and run-status accents. Documentation maintains the dark canvas with the Shiki syntax theme (where the `#4078f2` code-link blue lives).

If a light variant were ever required for documentation:

- `bg`: `#0c0a09` → `#faf9f7` (warm off-white)
- `text`: `#f6f6f6` → `#1a161c`
- `surface`: `#16130f` → `#f1efe9` (tinted warm panel)
- `brand`: `#cbb26a` → `#8a7430` (the gold must darken to hold contrast on light)

The recommendation is don't. The warm near-black is the brand, and the gold only sings against it.

## 13. Lineage & Influences

Inngest reads as infrastructure dressed in editorial restraint. The canvas is `#0c0a09` — a near-black pulled slightly warm, closer to burnt umber than to Vercel's pure `#000` or Linear's cool graphite. The display face is **Whyte**, a Dinamo grotesque run at 72px / 400 with tight negative tracking, which gives the headlines a calm, almost Swiss-broadsheet authority rather than launch-day spectacle. The single brand colour is a **muted gold / khaki** (`#cbb26a`) printed with dark `#1a161c` ink — a deliberately un-saturated, un-neon choice that signals serious backend tooling rather than consumer flash.

Everything is held at a sharp 0px radius: buttons, cards, inputs, and badges all have square corners, an engineered, terminal-adjacent geometry that pairs with the gold-and-black to feel like well-set technical print. Body is set in **Circular** (Circular XX), the geometric-humanist sans that underpins much of modern SaaS, here weighted as low as 300 for subheads to keep the page airy. The code surfaces borrow the **Shiki** syntax system — the `#4078f2` token-link blue is the one place a second hue appears, and it stays sealed inside code. The result sits in the Vercel/Linear developer-infra lineage but distinguishes itself with the warm-black canvas, the brass-not-neon accent, and the uncompromising sharp corners.

- **Whyte (Dinamo)** — https://abcdinamo.com/typefaces/whyte — grotesque display face carrying the headline identity at 72px/400
- **Circular (Lineto)** — https://lineto.com/typefaces/circular — geometric humanist sans underpinning all body copy
- **Vercel** — https://vercel.com — near-black canvas, single confident accent, developer-infra register
- **Linear** — https://linear.app — restrained chromatic discipline, hairline-bordered surfaces on a dark substrate
- **Shiki** — https://shiki.style — syntax-highlight token system providing the `#4078f2` code-link blue

## 14. Do's and Don'ts

### Do

- **Do** keep the action palette to a single muted gold (`#cbb26a`) printed with dark `#1a161c` ink — one accent, no second hue
- **Do** hold every corner at a sharp 0px — buttons, cards, inputs, badges; the square geometry is a brand signature
- **Do** set display in Whyte at a single 400 weight with tight negative tracking (≈ -0.025em at 72px)
- **Do** keep the canvas warm-black at `#0c0a09`; pure `#000` reads as Vercel, cool graphite reads as Linear
- **Do** set body in Circular XX, and reach for the 300 weight on subheads to keep the dark page airy
- **Do** use near-whites (`#f6f6f6` body, `#fafaf9` headings) — never pure `#ffffff`
- **Do** suffix action CTAs with a trailing arrow ("Sign up →", "Get a demo →")
- **Do** define surfaces with 1px warm hairline borders (`#27241f`), brightening to `#57534e` on hover
- **Do** keep the `#4078f2` blue sealed inside code blocks — it is a syntax token, not a brand colour
- **Do** pace motion calmly (150–320ms); the register is engineered, not flashy

### Don't

- **Don't** round any corners — even badges stay square; a pill radius collapses the engineered-print aesthetic
- **Don't** brighten or saturate the gold toward yellow/amber — the muted brass quality is the point
- **Don't** introduce a second marketing accent; the gold carries all action, semantics aside
- **Don't** bold the Whyte headlines to 700 — the calm comes from the face and tracking, not weight
- **Don't** swap the warm-black canvas for pure `#000` (Vercel) or cool graphite (Linear)
- **Don't** use pure `#ffffff` for text — the near-whites are warmer and intentional
- **Don't** layer heavy drop shadows on cards; depth is tonal and bordered
- **Don't** use the code-link blue (`#4078f2`) anywhere outside syntax highlighting
- **Don't** substitute a serif or italic display face — the grotesque-and-geometric register is the whole identity
- **Don't** rush the motion into bouncy 100ms transitions; 150–320ms is the calm infra pacing

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #0c0a09
bg-deep: #070605
surface: #16130f
surface-inset: #211c16
text: #f6f6f6
text-heading: #fafaf9
text-muted: #a8a39b
brand: #cbb26a
brand-hover: #d8c285
on-brand: #1a161c
border: #27241f
code-link: #4078f2
```

### Example Component Prompts

1. "Create a hero section: warm near-black `#0c0a09` background, a 72px Whyte display headline at 400 weight in `#f6f6f6` with -0.025em tracking, a Circular XX subhead at 18px / 300 weight in `#a8a39b`. Add a primary gold button (`#cbb26a` fill, `#1a161c` text, 0px radius — sharp corners, 12px 20px padding, 15/500) saying 'Sign up →' with a trailing arrow. Secondary ghost button 'Get a demo →' (transparent + 1px `#27241f` border). Every corner sharp, no rounding."

2. "Design a 3-card feature grid on `#0c0a09`: each card `#16130f` bg, 24px padding, 0px radius, 1px `#27241f` border. Card title in 20px Circular XX at 500 in `#fafaf9`, body in 14px Circular XX at 400 in `#a8a39b`. Hover: border brightens to `#57534e`. No shadow, no rounding — depth is the border alone."

3. "Build a status badge: square 0px-radius chip, `#cbb26a1f` (~12% gold) background, `#cbb26a` gold text at 12px / 500, 2px 8px padding. Never use a pill — the corners stay sharp."

4. "Create a code block: `#211c16` background, 14px monospace `#f6f6f6` body, 16px 20px padding, 0px radius, 1px `#27241f` border. Syntax links render in `#4078f2` (the only place blue appears). Add a copy button in the top-right with an `aria-label`."

5. "Design a top navigation: warm-black `#0c0a09` background, 'Inngest' wordmark in `#fafaf9` Circular XX at 500, nav links at 14px / 400 in `#a8a39b` (hover `#f6f6f6`), right side a ghost 'Get a demo →' and a gold 'Sign up →' button — both 0px radius, sharp corners."

6. "Build a text input: `#0c0a09` background, `#f6f6f6` text at 16px, `#7c7770` placeholder, 10px 14px padding, 0px radius, 1px `#27241f` border. On focus the border turns gold `#cbb26a` with a 2px rgba(203,178,106,0.5) ring."

### Iteration Guide

1. **Start with the canvas** — `#0c0a09` warm near-black, not `#000` (Vercel) and not cool graphite (Linear). The warmth is intentional
2. **Use exactly one accent** — the muted gold `#cbb26a` with `#1a161c` ink; resist adding a second marketing hue
3. **Keep every corner sharp** — 0px radius on buttons, cards, inputs, badges; this is the single most distinguishing geometric choice
4. **Whyte for display, single 400 weight** — tight tracking carries the authority; don't reach for 700
5. **Circular XX for body, 300 on subheads** — the light weight keeps the dark page airy
6. **Near-whites, never pure white** — `#f6f6f6` body, `#fafaf9` headings; the warmth matters
7. **Arrow-suffix the CTAs** — "Sign up →", "Get a demo →"; the directional glyph is part of the voice
8. **Seal the blue in code** — `#4078f2` is a syntax token only; it never appears in marketing chrome
