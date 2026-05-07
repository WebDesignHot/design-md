---
name: Runway
tagline: A near-black research canvas with ABC Normal headlines pulled tight at -2.5px — a film studio, an ML lab, and a brutalist gallery in one shell.
updated_at: 2026-05-04T20:53:02+12:00
published_at: 2026-05-03T16:49:18+12:00
author: webdesignhot
source_url: https://runwayml.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [ai, media, design-tools]
tags: [dark, editorial, sans, dense, structured, brutalist, cool]
preview_swatch: ['#0c0c0c', '#eef1f5', '#efeee6']
related: [openai, anthropic, vercel]
description: 'Runway''s site is a research lab that learned to look like a film studio. The canvas runs near-black `#0c0c0c`, headlines are typeset in the custom **abcNormal** at 56px with `-2.5px` of negative tracking — a brutal compression that turns "Building general-purpose multimodal simulators of the world." into a single bulletin. The interior accent is a paper warm-white `#efeee6` that lets video stills dominate; chrome stays out of the way.'

colors:
  # Primary
  bg: '#0c0c0c'                   # research near-black, warmer than #000
  bg-alt: '#1a1a1a'               # secondary panel
  text: '#ffffff'                 # display white
  text-strong: '#ffffff'
  text-paper: '#404040'           # body on light surfaces
  text-muted: '#666e7a'           # cool-grey caption
  text-soft: '#999999'            # quiet ui label
  text-faint: '#4a4a4a'           # whisper metadata

  # Brand & Dark
  brand: '#0c0c0c'                # the brand has no chromatic accent — black is the accent
  brand-paper: '#efeee6'          # paper warm-white as secondary brand
  on-brand: '#ffffff'

  # Accent (chromatic accents are intentionally absent)
  accent-iced: '#eef1f5'          # ice-cool surface
  accent-cream: '#efeee6'         # paper warm-white
  accent-bone: '#e8e6dc'          # alternate paper
  accent-graphite: '#262626'      # raised dark
  accent-charcoal: '#1a1a1a'      # panel dark

  # Interactive
  link: '#ffffff'
  link-hover: '#dddddd'
  link-underline: '#666e7a'
  link-visited: '#999999'
  selected: '#262626'
  disabled: '#404040'

  # Neutral scale
  neutral-50: '#fafafa'
  neutral-100: '#efeee6'
  neutral-200: '#eef1f5'
  neutral-300: '#cccccc'
  neutral-500: '#999999'
  neutral-600: '#666e7a'
  neutral-700: '#404040'
  neutral-800: '#262626'
  neutral-900: '#1a1a1a'
  neutral-950: '#0c0c0c'

  # Surface & Borders
  surface: '#262626'              # raised card on the dark ground
  surface-paper: '#efeee6'        # warm-white press zones
  surface-iced: '#eef1f5'         # ice-blue alternate light
  surface-bone: '#e8e6dc'         # alternate paper
  border: '#ffffff0d'             # 5% white hairline on dark
  border-strong: '#ffffff1f'      # 12% white visible
  border-subtle: '#f7f7f70d'      # alternate hairline
  border-paper: '#404040'         # 1px rule on light press surfaces

  # Shadow colors
  shadow-ambient: 'rgba(0,0,0,0.4)'
  shadow-paper: 'rgba(0,0,0,0.08)'
  shadow-deep: 'rgba(0,0,0,0.6)'

  # Semantic
  success: '#7cb342'
  success-bg: '#1a2410'
  success-text: '#a8d978'
  warning: '#e6a23c'
  warning-bg: '#2a1f10'
  warning-text: '#f5c878'
  danger: '#e74c3c'
  danger-bg: '#2a1010'
  danger-text: '#f08a80'
  info: '#5a9ed3'
  info-bg: '#0e1a26'
  info-text: '#90c4ec'

typography:
  display:
    family: 'abcNormal, "abcNormal Fallback", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500]
    opentype-features: ['ss01']
  body:
    family: 'abcNormal, "abcNormal Fallback", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400]
  scale:
    display-hero:    { size: 80, weight: 400, family: display, lineHeight: 0.94, tracking: '-0.05em' }
    display-large:   { size: 64, weight: 400, family: display, lineHeight: 0.95, tracking: '-0.045em' }
    h1:              { size: 56, weight: 400, family: display, lineHeight: 0.96, tracking: '-0.0446em' }
    h2:              { size: 40, weight: 400, family: display, lineHeight: 1.0,  tracking: '-0.04em' }
    h3:              { size: 24, weight: 500, family: display, lineHeight: 1.2,  tracking: '-0.02em' }
    h4:              { size: 18, weight: 500, family: display, lineHeight: 1.3,  tracking: '-0.015em' }
    body-large:      { size: 18, weight: 400, family: body, lineHeight: 1.45 }
    body:            { size: 16, weight: 400, family: body, lineHeight: 1.4 }
    body-small:      { size: 14, weight: 400, family: body, lineHeight: 1.4 }
    caption:         { size: 12, weight: 400, family: body, lineHeight: 1.35 }
    label:           { size: 12, weight: 500, family: mono,  lineHeight: 1.2,  tracking: '0.04em' }
    label-small:     { size: 10, weight: 500, family: mono,  lineHeight: 1.2,  tracking: '0.06em' }
    code:            { size: 13, weight: 400, family: mono,  lineHeight: 1.5 }
    code-micro:      { size: 11, weight: 400, family: mono,  lineHeight: 1.4 }
    button:          { size: 14, weight: 500, family: body,  lineHeight: 1.0,  tracking: '-0.01em' }
    nav-link:        { size: 13, weight: 500, family: body,  lineHeight: 1.0,  tracking: '0' }
    tabular:         { size: 12, weight: 400, family: mono,  lineHeight: 1.4,  opentype: 'tnum' }

radius:
  micro: 0
  xs: 2
  sm: 4
  md: 8
  lg: 12
  card: 12
  pill: 9999

spacing:
  base: 4
  scale: [2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 64
  hero-min-height: 720

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0,0,0,0.4) 0 1px 3px'
  standard: 'rgba(0,0,0,0.5) 0 4px 16px'
  elevated: 'rgba(0,0,0,0.6) 0 16px 32px -8px'
  paper: 'rgba(0,0,0,0.08) 0 1px 2px'
  deep: 'rgba(0,0,0,0.7) 0 32px 64px -16px'
  ring: '0 0 0 2px #ffffff'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-in: 'cubic-bezier(0.4, 0, 1, 1)'
  duration-fast: 100
  duration-standard: 180
  duration-slow: 280
  duration-page: 420
  reduced-motion: 'respects prefers-reduced-motion: reduce — video autoplay disabled, transitions degrade to opacity-only'

accessibility:
  contrast-text-on-bg: 19.6          # white on #0c0c0c, AAA
  contrast-text-on-paper: 11.4       # #404040 on #efeee6, AAA
  contrast-muted-on-bg: 5.4          # #999999 on #0c0c0c, AA large
  contrast-cool-on-bg: 4.7           # #666e7a on #0c0c0c, AA large
  focus-ring: '2px solid #ffffff with 2px offset'
  focus-ring-offset-color: '#0c0c0c'
  reduced-motion-honored: true
  keyboard-nav: 'full tab traversal; ESC closes lightbox; arrow keys advance research-list rows'

components:
  button-primary:
    bg: '#ffffff'
    text: '#0c0c0c'
    border: 'none'
    radius: 9999
    padding: '10px 20px'
    font: 'body 14/1.0 weight 500 tracking -0.01em'
    hover: 'bg #efeee6'
    active: 'bg #cccccc'
    focus: '2px ring #ffffff + 2px offset'
  button-ghost:
    bg: 'transparent'
    text: '#ffffff'
    border: '1px solid #ffffff1f'
    radius: 9999
    padding: '10px 20px'
    font: 'body 14/1.0 weight 500'
    hover: 'border #ffffff5f, bg #ffffff08'
    active: 'bg #ffffff14'
  button-paper:
    bg: '#0c0c0c'
    text: '#ffffff'
    border: 'none'
    radius: 9999
    padding: '10px 20px'
    font: 'body 14/1.0 weight 500'
    hover: 'bg #1a1a1a'
    active: 'bg #262626'
  button-danger:
    bg: '#e74c3c'
    text: '#ffffff'
    border: 'none'
    radius: 9999
    padding: '10px 20px'
    hover: 'bg #f08a80'
  card:
    bg: '#262626'
    border: '1px solid #ffffff0d'
    radius: 12
    padding: '24px'
    shadow: 'ambient'
    hover: 'border #ffffff1f'
  card-paper:
    bg: '#efeee6'
    border: '1px solid #404040'
    radius: 0
    padding: '32px'
    shadow: 'none'
  input:
    bg: '#1a1a1a'
    text: '#ffffff'
    placeholder: '#999999'
    border: '1px solid #ffffff1f'
    radius: 4
    padding: '10px 14px'
    font: 'body 14/1.4 weight 400'
    focus: 'border #ffffff, ring 2px #ffffff'
  badge:
    bg: 'transparent'
    text: '#ffffff'
    border: '1px solid #ffffff3f'
    radius: 9999
    padding: '4px 10px'
    font: 'mono 12/1.2 weight 500 tracking 0.04em uppercase'

lineage:
  summary: |
    Runway looks like Anthropic's research lab if it ran a film studio.
    The canvas is `#0c0c0c` — a research-paper near-black that reads
    quieter than `#000` — and the headline face is **abcNormal**, a
    custom cut from Dinamo's ABC family with the negative tracking
    cranked to `-2.5px` at 56px (roughly `-0.045em`). That hard
    compression is the brand's voice: it turns research-paper titles
    into bulletin headlines without ever using bold. The secondary
    surface is a paper warm-white `#efeee6` paired with an ice-cool
    `#eef1f5` — Runway oscillates between the lab and the gallery,
    sometimes within a single page. There is no chromatic accent in
    the brand: video stills, model outputs, and B-roll provide all
    the colour. The chrome's discipline is the point — every pixel
    of saturation comes from the work, not the wrapper.
  influences:
    - name: Dinamo Foundry
      role: ABC type system as the editorial spine; brutalist-but-readable headline tracking.
      url: https://abcdinamo.com
    - name: Anthropic
      role: Near-black research canvas + paper-warm secondary surface duet.
      url: https://anthropic.com
    - name: A24
      role: Film-studio editorial register — chrome quiet, image loud.
      url: https://a24films.com
    - name: 032c
      role: Brutalist magazine compression of headlines into bulletins.
      url: https://032c.com

dark-mode: native        # Runway is dark-by-default; the near-black canvas is the brand
---

## 1. Visual Theme & Atmosphere

Runway is a research lab and a film studio in the same shell. The body sits at `#0c0c0c` — a near-black that reads warmer than pure `#000` — and the headline face is the custom **abcNormal**, set at 56px on a 54px line-height with `-2.5px` of negative tracking. That tracking is the signature: it compresses the line into a single dense bulletin, the way 032c or A24 letterheads compress their titles. Headlines in Runway do not announce; they declare.

There is no chromatic accent. Buttons are ghost outlines or stark white pills, links are quiet greys, and the only saturation on the page is the model output itself — Gen-3 stills, video B-roll, the latest research preview. The chrome refuses to compete with the work. This refusal is total: no brand colour, no gradient, no glow.

Pages oscillate between two registers within a single scroll. The dark register — `#0c0c0c` ground, white display, video full-bleed — is the lab. The light register — `#efeee6` paper warm-white surface with `#404040` body type, a 1px `#404040` rule instead of a shadow — is the press release. The duet of lab-and-gallery, sometimes within a single page, is the brand's structural move. A press essay sits like a printed insert in a folder of black photographs.

The sensory metaphor is film-studio editorial: the rough wall of a soundstage, the matte black of a video monitor, the cream of a press kit. Runway's discipline is to keep the chrome silent so the work — generated video, B-roll, research outputs — can carry every pixel of saturation. Where Vercel uses pure black to signal a builder's console, Runway uses near-black to signal a screening room.

**Key Characteristics**

- Near-black `#0c0c0c` canvas — warmer than pure `#000`
- abcNormal headlines at `-2.5px` tracking, weight 400 — compression as voice
- Paper warm-white `#efeee6` press surface duet
- No chromatic accent — saturation comes from video stills only
- Pill-shape buttons (white-on-dark or dark-on-paper)
- Wide asymmetric layouts; magazine rhythm not SaaS rhythm
- Hard 0/2/4px corner discipline alongside 12px cards
- Mono register reserved for technical metadata
- Single-family typography (abcNormal carries display + body)
- Chrome refuses to compete with the work

## 2. Color Palette & Roles

### Primary

- **bg** (`#0c0c0c`): research near-black, warmer than `#000`
- **text** (`#ffffff`): pure white display copy
- **text-paper** (`#404040`): body slate on light press surfaces

### Brand & Dark

- **brand** (`#0c0c0c`): the brand has no chromatic accent — black IS the accent
- **brand-paper** (`#efeee6`): paper warm-white as the secondary brand register
- **on-brand** (`#ffffff`): text on dark fills

### Accent (intentionally non-chromatic)

- **accent-iced** (`#eef1f5`): ice-cool blue-grey alternate
- **accent-cream** (`#efeee6`): paper warm-white press
- **accent-bone** (`#e8e6dc`): alternate paper
- **accent-graphite** (`#262626`): raised dark surface
- **accent-charcoal** (`#1a1a1a`): panel dark

The "accent" set is monochromatic by intent. Runway's only saturation is in the imagery — Gen-3 stills, model outputs, video B-roll. The chrome has none.

### Interactive

- **link** (`#ffffff`): default, sits inside body copy with subtle underline
- **link-hover** (`#dddddd`): lifts toward white hover
- **link-underline** (`#666e7a`): cool-grey rule on hover
- **link-visited** (`#999999`): muted-grey visited
- **selected** (`#262626`): selected list-item bg
- **disabled** (`#404040`): muted-grey disabled

### Neutral Scale

A full grayscale ladder runs `#fafafa` paper highlight → `#efeee6` press → `#eef1f5` ice → `#cccccc` light grey → `#999999` quiet → `#666e7a` cool muted → `#404040` body → `#262626` raised → `#1a1a1a` panel → `#0c0c0c` ground. The cool-grey `#666e7a` is the brand's signature midtone.

### Surface & Borders

- **surface** (`#262626`): raised card on dark ground
- **surface-paper** (`#efeee6`): warm-white press editorial zones
- **surface-iced** (`#eef1f5`): cool ice-blue alternate light surface
- **surface-bone** (`#e8e6dc`): alternate warm-white
- **border** (`#ffffff0d`): 5% white hairline on dark — never solid
- **border-strong** (`#ffffff1f`): 12% visible divider
- **border-subtle** (`#f7f7f70d`): alternate hairline tone
- **border-paper** (`#404040`): 1px rule on light press surfaces — replaces shadows

### Shadow Colors

- **shadow-ambient** (`rgba(0,0,0,0.4)`): the dark-canvas base shadow
- **shadow-paper** (`rgba(0,0,0,0.08)`): minimal lift on press cards
- **shadow-deep** (`rgba(0,0,0,0.6)`): modal-elevation black

Runway uses shadows sparingly. On the dark canvas, depth is tonal. On paper surfaces, a 1px rule replaces a shadow — the editorial register.

### Semantic

- **success** (`#7cb342`) — sage-leaning green; rare
- **warning** (`#e6a23c`) — amber for system messages
- **danger** (`#e74c3c`) — used only for destructive actions, never marketing
- **info** (`#5a9ed3`) — cool-blue for system info

## 3. Typography Rules

### Font Family

- **Display & Body**: `abcNormal, "abcNormal Fallback", "Helvetica Neue", Helvetica, Arial, sans-serif` — weights 400, 500. abcNormal is a custom cut from Dinamo's ABC family.
- **Mono**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` — weight 400 only
- **OpenType**: `ss01` for the abcNormal stylistic alt; `tnum` for tabular figures in research metric columns; default contextual ligatures off (brutalist register)

### Hierarchy

| Role            | Font     | Size | Weight | Line H | Tracking   | OT Features | Notes |
|-----------------|----------|------|--------|--------|------------|-------------|-------|
| display-hero    | abcNormal| 80   | 400    | 0.94   | -0.05em    | ss01        | full-bleed hero, rare |
| display-large   | abcNormal| 64   | 400    | 0.95   | -0.045em   | —           | section heads |
| h1              | abcNormal| 56   | 400    | 0.96   | -0.0446em  | —           | the canonical Runway headline |
| h2              | abcNormal| 40   | 400    | 1.00   | -0.04em    | —           | feature heads |
| h3              | abcNormal| 24   | 500    | 1.20   | -0.02em    | —           | sub-section |
| h4              | abcNormal| 18   | 500    | 1.30   | -0.015em   | —           | label heads |
| body-large      | abcNormal| 18   | 400    | 1.45   | 0          | —           | hero supporting copy |
| body            | abcNormal| 16   | 400    | 1.40   | 0          | —           | default body |
| body-small      | abcNormal| 14   | 400    | 1.40   | 0          | —           | caption-adjacent |
| caption         | abcNormal| 12   | 400    | 1.35   | 0          | —           | image captions |
| label           | mono     | 12   | 500    | 1.20   | 0.04em     | —           | uppercase ui |
| label-small     | mono     | 10   | 500    | 1.20   | 0.06em     | —           | tag chips |
| code            | mono     | 13   | 400    | 1.50   | 0          | —           | inline tech |
| code-micro      | mono     | 11   | 400    | 1.40   | 0          | —           | model versions |
| button          | abcNormal| 14   | 500    | 1.00   | -0.01em    | —           | CTA label |
| nav-link        | abcNormal| 13   | 500    | 1.00   | 0          | —           | top nav |
| tabular         | mono     | 12   | 400    | 1.40   | 0          | tnum        | research metric columns |

### Principles

- **Compression as voice**: `-2.5px` at 56px (roughly `-0.0446em`) is the canonical Runway tracking. Display heads always pull tight; emphasis comes from compression, never from bold.
- **Single family discipline**: abcNormal carries display and body. There is no second sans, no serif. The voice stays consistent from hero to footer.
- **Mono as metadata only**: model versions, training-run IDs, research-paper labels, technical captions. Never as marketing.
- **Weight restraint**: 400 carries display and body. 500 reserved for h3+, ui labels, and buttons. Never 600 or 700.
- **Tracking philosophy**: tighter as size grows. Display: `-0.045em` to `-0.05em`. h2–h3: `-0.02em` to `-0.04em`. Body: 0. Labels: positive `0.04–0.06em` for uppercase legibility.
- **Line-height as compression**: display copy uses `0.94–0.96` line-height (sub-1.0) so multi-line heads stack like a magazine kicker.
- **No italics, no decorative case**: emphasis is structural — uppercase labels in mono, weight 500 for h3+, and the headline tracking. That is all.

## 4. Component Stylings

### Buttons

**button-primary** — the white pill on dark ground
- Background: `#ffffff`
- Text: `#0c0c0c`, abcNormal 14/1.0, weight 500, tracking `-0.01em`
- Border: none
- Radius: 9999 (pill)
- Padding: `10px 20px`
- Hover: bg `#efeee6` (paper warm-white)
- Active: bg `#cccccc`
- Focus: 2px white ring + 2px offset on `#0c0c0c`
- Use: hero "Try Runway", "Get started"

**button-ghost** — the outlined pill
- Background: transparent
- Text: `#ffffff`, abcNormal 14/1.0, weight 500
- Border: `1px solid #ffffff1f`
- Radius: 9999
- Padding: `10px 20px`
- Hover: border lifts to `#ffffff5f`, bg `#ffffff08`
- Active: bg `#ffffff14`
- Use: secondary actions, "Watch demo", "View research"

**button-paper** — the dark pill on paper surface
- Background: `#0c0c0c`
- Text: `#ffffff`
- Radius: 9999
- Padding: `10px 20px`
- Hover: bg `#1a1a1a`
- Use: CTAs sitting on `#efeee6` editorial zones

**button-danger** — destructive
- Background: `#e74c3c`
- Text: `#ffffff`
- Radius: 9999
- Use: in-product "Delete", "Cancel" — never marketing

### Cards

**Dark card** (research-list, model gallery):
- Background: `#262626`
- Border: `1px solid #ffffff0d`
- Radius: 12px
- Padding: `24px`
- Shadow: ambient
- Hover: border lifts to `#ffffff1f`, image scales 1.02

**Paper card** (press release, editorial):
- Background: `#efeee6`
- Border: `1px solid #404040`
- Radius: **0** (hard brutalist edge)
- Padding: `32px`
- Shadow: none — depth is paper-rule, not cast shadow

### Badges / Tags / Pills

- Background: transparent
- Text: `#ffffff`, mono 12/1.2 weight 500 tracking 0.04em, uppercase
- Border: `1px solid #ffffff3f`
- Radius: 9999
- Padding: `4px 10px`
- Use: model versions ("Gen-3 Alpha"), research labels ("PREVIEW")

### Inputs / Forms

**Text input** (in-product):
- Background: `#1a1a1a`
- Text: `#ffffff`, 14/1.4
- Placeholder: `#999999`
- Border: `1px solid #ffffff1f`
- Radius: 4px (hard, brutalist)
- Padding: `10px 14px`
- Focus: border `#ffffff`, 2px white ring

### Navigation

- Top bar: 64px, on `#0c0c0c` with no border (or 1px `#ffffff0d` rule on scroll)
- Wordmark: hard-left, abcNormal 16/1.0 weight 500 tracking `-0.01em`, white
- Link list: hard-right, 13/1.0 weight 500, gap 24px
- No dropdowns, no mega-menu — links are flat
- Mobile: hamburger collapses into full-bleed sheet at `#0c0c0c`

### Decorative

- **Hairline rule**: `1px solid #ffffff0d` between sections on dark; `1px solid #404040` on paper
- **Video frames**: full-bleed, no rounded corners, no shadow
- **Captions**: mono 11/1.4 at the foot of each panel

## 5. Layout Principles

### Spacing System

Base 4px. Scale: `2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160`. Section padding lands at 96 or 128. Density is asymmetric — Runway uses generous vertical breath but pulls horizontal margins narrow on press essays for magazine-spread feel.

### Grid & Container

- Page max width: **1440px**, sometimes full-bleed
- Prose max width: **720px**
- Hero is full-bleed video or model output with copy floated low-left in a narrow column (typically 540–680px)
- Research listings: dense vertical rows (not card grids), separated by 1px `#ffffff0d` rules
- Feature grids: 12-column, 24px gutters

### Whitespace Philosophy

Section padding is generous (`96–128px`); margins are narrow on press essays for magazine-spread feel. Headlines breathe (32–64px above sub-copy) but the lines themselves compress (`0.94–0.96` line-height). The rhythm is closer to a magazine spread than a SaaS page.

### Section Cadence

Pages alternate between dark-canvas bands (`#0c0c0c` with full-bleed video) and paper-warm press surfaces (`#efeee6` editorial inserts). The duet — sometimes within a single page — is the lab-and-gallery move. Sequence: dark-hero → dark-feature → paper-essay → dark-gallery → dark-footer.

## 6. Shapes & Radius Scale

| Tier        | px    | Use |
|-------------|-------|-----|
| Micro       | 0     | paper press cards, video frames, hard brutalist edges |
| XS          | 2     | secondary metadata chips |
| Standard    | 4     | input fields, in-product chrome |
| Comfortable | 8     | minor cards |
| Relaxed     | 12    | dark cards, gallery tiles |
| Pill        | 9999  | buttons, badges |

Note the **bimodal radius**: 0 (brutalist hard edge) for paper press surfaces and video frames; 9999 (pill) for all buttons and badges; 12 only for dark cards. There is essentially no middle ground, which is the brand's structural signature.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | Flat, no shadow | bg, full-bleed sections, video |
| 1 | Tonal step (`#1a1a1a` panel on `#0c0c0c`) | dark inset zones |
| 2 | `ambient` shadow `rgba(0,0,0,0.4) 0 1px 3px` | dark cards |
| 3 | Paper rule — 1px `#404040` border, no shadow | press editorial cards |
| 4 | `elevated` shadow `rgba(0,0,0,0.6) 0 16px 32px -8px` | hover lifts on dark |
| 5 | `deep` shadow `rgba(0,0,0,0.7) 0 32px 64px -16px` | modals, lightbox |

### Shadow Philosophy

Depth is achieved through **tonal stepping** on dark (`#0c0c0c` → `#1a1a1a` → `#262626`) and **paper rules** on light. There are essentially no shadows on the marketing surface; on light press zones, the warm `#efeee6` paper takes a single 1px `#404040` rule rather than a shadow. Elevation reads as paper, not plastic. This editorial choice — rule-not-shadow — is what makes Runway read as printed press kit rather than SaaS card grid.

## 8. Interaction & Motion ✨

### Easing

- `ease-standard` `cubic-bezier(0.4, 0, 0.2, 1)` — default
- `ease-emphasized` `cubic-bezier(0.2, 0, 0, 1)` — entrance, reveal
- `ease-out` `cubic-bezier(0, 0, 0.2, 1)` — exits
- `ease-in` `cubic-bezier(0.4, 0, 1, 1)` — rare, dismissals

### Durations

- `duration-fast` **100ms** — focus rings, micro hovers
- `duration-standard` **180ms** — button states, card hovers
- `duration-slow` **280ms** — reveals, modal opens
- `duration-page` **420ms** — section reveals, video crossfades

### Per-Component Micro-States

- **Button hover**: bg shifts in 180ms `ease-standard`. White primary darkens to `#efeee6` (a paper warm-white), not pure white→grey
- **Card hover (dark)**: border lifts from `#ffffff0d` to `#ffffff1f` over 180ms; nested image scales 1.02 over 280ms `ease-emphasized`
- **Link hover**: cool-grey underline `#666e7a` grows from 0 to 1px over 100ms; never colour shift on links inside dark canvas (the link IS white)
- **Video B-roll**: autoplays muted, full-bleed, with a 420ms crossfade between scenes
- **Research-row hover**: bg fills from transparent to `#ffffff05` over 100ms

### Page Transitions

Section reveals use `IntersectionObserver` to fade-up content over 420ms `ease-emphasized` with a 12px transform-y. The hero video autoplays muted and loops; subsequent scrolls reveal model outputs in staggered fade-up.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Video autoplay disabled (still poster shown). All transforms (scale, translate-y) dropped. Transitions degrade to opacity-only fades capped at 180ms. This is critical because Runway's surface relies heavily on motion — the reduced-motion path must remain coherent.

## 9. Accessibility & A11y ✨

### Contrast Pairs

- White on `#0c0c0c`: **19.6:1** — AAA
- `#404040` on `#efeee6` (body on paper): **11.4:1** — AAA
- `#999999` on `#0c0c0c` (muted on dark): **5.4:1** — AA at body sizes
- `#666e7a` on `#0c0c0c` (cool-grey caption): **4.7:1** — AA at large sizes only — captions must be 14px+ to clear AA
- White on `#262626` (raised card): **15.8:1** — AAA

### Focus Indicators

- 2px solid `#ffffff` ring with 2px offset on dark surfaces
- 2px solid `#0c0c0c` ring with 2px offset on paper surfaces
- Never removed; `:focus-visible` only

### ARIA Patterns

- **Listbox**: research-list rows are `role="listbox"` with `role="option"` children; arrow keys traverse
- **Dialog**: lightbox uses `role="dialog"` `aria-modal="true"` with `aria-labelledby`
- **Status**: video loading uses `role="status"` with `aria-live="polite"`
- **Region**: paper press essays wrapped in `<article>` with `aria-labelledby`

### Keyboard Navigation

- Tab order strict, follows visual flow
- ESC closes lightbox/modal/dropdown
- Arrow keys advance research-list rows
- Enter activates row, opens lightbox
- Space toggles video play/pause when video focused

### Screen Reader Hints

- Generated videos carry a descriptive `aria-label`
- Decorative video B-roll uses `aria-hidden="true"`
- All `mono` labels (research IDs, model versions) read aloud as visible text — no aria-label override
- Icon-only buttons require `aria-label`

### Reduced Motion

Video autoplay disabled. All decorative motion (scale, translate) suppressed. Functional motion (focus, modal) capped at 180ms opacity-only. Static poster frames replace looped B-roll.

## 10. Responsive Behavior

| Breakpoint | px    | Behavior |
|------------|-------|----------|
| mobile     | 0–639 | single column, stacked nav, 16px gutters; headlines drop to 36px |
| tablet     | 640–1023 | 2-column, condensed nav, headlines at 48px |
| desktop    | 1024–1279 | 3-column research grid, full nav, headline at 56px |
| wide       | 1280+ | wide asymmetric layouts, hero at 1440 max, headline up to 80px |

### Touch Targets

44×44px minimum on mobile. Pill buttons retain their height (40px) but gain horizontal padding (24px) on touch surfaces. Research-row tap zones expand to 56px tall.

### Collapsing Strategy

- **Nav**: full-link list above 1024; hamburger sheet below
- **Headline tracking**: held tight (`-0.045em`) above 1024; relaxed slightly (`-0.03em`) below 768 to avoid character collision
- **Paper-essay**: maintains 720px prose width above 1024; full-width with 24px horizontal padding below
- **Video full-bleed**: stays full-bleed at all sizes; aspect-ratio adapts 16:9 → 4:5 below 768

### Image Behavior

Generated video and model output is served at native aspect ratio. `loading="lazy"` on below-the-fold media. `srcset` for retina; `<video>` `preload="metadata"` only.

### Container Queries

Research-row uses `@container` queries to drop the metadata column under 720px container width and stack instead.

## 11. Content & Voice ✨

### Tone

Editorial, declarative, brutalist-prose. Runway writes like a press release from a film studio that also publishes research. Sentences are short, statement-shaped. The voice avoids hype and adverbs. "Building general-purpose multimodal simulators of the world." is the canonical Runway sentence — declarative, terminal period, no qualifier.

### Microcopy Patterns

- **Buttons**: "Try Runway", "Watch", "Read the paper", "Get started" — never "Get started for free!"
- **Errors**: "Render failed. Try again." — terminal period, no apology
- **Success**: "Saved." — single word, period
- **Loading**: "Generating…" — present participle, ellipsis

### Empty States

- Research-list empty: "No items." — two words
- Search empty: "Nothing matched." — no recovery
- Error empty: "Disconnected." — no detail

### CTA Verb Conventions

- "Try Runway" (not "Sign up")
- "Watch" (not "Watch the demo" — single verb)
- "Read the paper" (academic register)
- "Get started" (single allowed marketing verb, used sparingly)
- "Open Studio" (in-product transition)

The voice's signature is its **brevity**: full stops where SaaS would use exclamation, declarative where SaaS would use imperative-with-promise. Marketing intensifiers ("powerful", "best", "revolutionary") are absent.

## 12. Dark Mode & Theming ✨

Runway is **dark-by-default**. The near-black canvas (`#0c0c0c`) is the brand register. There is no system-level light mode.

The paper warm-white (`#efeee6`) editorial register is **not** a light theme — it is an editorial inset used inside dark layouts, the way a press kit insert sits inside a black portfolio folder. A page may contain both: a dark hero, a paper press essay, then dark research grids beneath.

No `prefers-color-scheme: light` override is applied. The dark canvas holds across OS preferences. The brand is the theme.

## 13. Lineage & Influences

Runway's surface inherits from three traditions:

**Brutalist editorial magazines** — 032c, Apartamento, Toiletpaper. The hard `-2.5px` tracking, the bimodal radius (0 OR 9999, no middle ground), the paper-rule-not-shadow logic all trace to magazine print. Runway treats its press essays as printed inserts.

**Film studio chrome** — A24, MUBI, Letterboxd's editorial. The full-bleed video hero, the silent-with-captions B-roll, the cool-grey muted text all borrow from the film-house register.

**Research-paper landing pages** — Anthropic (the warmer near-black sibling), DeepMind, NVIDIA Research. The mono-as-metadata move, the dense vertical research listings, the paper-warm secondary surface all share Anthropic's DNA.

What Runway rejects: the Vercel pure-black corporate canvas, the Stripe gradient hero, the Linear OKLCH precision palette, any brand colour, any glow on a button, any illustration that competes with the work.

**Named influences:**

- Dinamo Foundry — `https://abcdinamo.com` — ABC type system, abcNormal cut
- Anthropic — `https://anthropic.com` — near-black research canvas, paper-warm secondary surface
- A24 — `https://a24films.com` — film-studio editorial register
- 032c — `https://032c.com` — brutalist magazine compression
- MUBI — `https://mubi.com` — film-house chrome
- Letterboxd — `https://letterboxd.com` — quiet metadata over loud imagery

## 14. Do's and Don'ts

### Do

- Crank the negative tracking on display copy (`-2.5px` at 56px); the compression is the brand voice
- Let video stills carry the colour — the chrome itself has no chromatic accent
- Pair the dark canvas with paper-warm `#efeee6` for editorial zones; the duet is the lab-and-gallery move
- Use 0 radius on paper press cards and video frames — the brutalist hard edge is part of the editorial register
- Use 9999 (pill) on all buttons and badges — the bimodal radius is structural
- Replace shadows with 1px `#404040` rules on paper surfaces
- Reserve mono for technical metadata (model versions, research IDs)
- Keep section padding generous (96–128px); narrow margins on press essays for magazine-spread feel
- Use abcNormal at 400 for all display copy
- Honor reduced-motion by disabling video autoplay
- Use terminal periods in microcopy; refuse exclamation marks
- Keep the line-height of display copy below 1.0 (0.94–0.96) — compression top to bottom

### Don't

- Introduce a brand colour — saturation belongs to the work, not the wrapper
- Use bold weights for headlines; abcNormal at 400 with hard tracking is the signature
- Apply shadows to cards on dark; depth is tonal
- Apply shadows to paper press cards; depth is the 1px `#404040` rule
- Mix abcNormal with a second sans face
- Use 6, 8, or 10px radius on buttons — they are pill or nothing
- Animate decoratively under reduced-motion
- Use SaaS-CTA verbs ("Get started for free", "Sign up free")
- Crop generated video to show only a portion — full-bleed or nothing
- Soften display tracking to defaults — the negative tracking IS the brand
- Use `#000` instead of `#0c0c0c` — the warmer near-black is deliberate
- Add gradients anywhere — not in the hero, not on buttons, not behind text

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:           #0c0c0c   (research near-black)
text:         #ffffff
paper:        #efeee6   (warm-white press)
ice:          #eef1f5   (cool secondary)
text-paper:   #404040
muted:        #666e7a   (cool-grey)
soft:         #999999
surface:      #262626   (raised dark)
panel:        #1a1a1a
border-dark:  #ffffff0d (5% white)
border-paper: #404040   (1px rule, replaces shadow)
ring:         #ffffff
```

### Example Component Prompts

1. **"Create a hero on `#0c0c0c` with a full-bleed muted-autoplay video, an abcNormal headline at 56px weight 400 line-height 0.96 tracking `-0.0446em` floated low-left in a 600px column reading 'Building general-purpose multimodal simulators of the world.', a body line at 18px in cool-grey `#666e7a`, and a white pill button 'Try Runway' with `#0c0c0c` text below."**

2. **"Design a paper press editorial card at `#efeee6` with 0 radius, a 1px `#404040` rule on all sides (no shadow), 32px padding, abcNormal h2 at 40/1.0 weight 400 tracking `-0.04em` in `#0c0c0c`, body in `#404040` 16/1.4, and a dark pill button at the bottom."**

3. **"Build a dense research list — five rows on `#0c0c0c`, separated by 1px `#ffffff0d` hairlines, each row 64px tall with mono label-small `PREVIEW` chip, abcNormal 18 title in white, and metadata in cool-grey `#666e7a` at 13/1.4. Hover fills row at `#ffffff05`."**

4. **"Compose a dark gallery tile: `#262626` card at 12px radius, `1px #ffffff0d` border, 1.5:1 aspect-ratio video filling top, mono caption '12 — Gen-3 Alpha' at 11/1.4 in `#999999` foot, hover lifts border to `#ffffff1f` and scales the video 1.02."**

5. **"Make a top nav on `#0c0c0c` at 64px tall: wordmark abcNormal 16/1.0 weight 500 hard-left, link list 13/1.0 weight 500 hard-right with 24px gap (Research, Studio, Pricing, Blog, Sign in), no dropdowns, no border (1px `#ffffff0d` rule appears on scroll only)."**

6. **"Design a paper-essay layout: 720px column on `#efeee6` ground, abcNormal h1 at 56/0.96/400 tracking `-0.0446em` in `#0c0c0c`, body in 16/1.4 `#404040`, blockquotes inset 24px with left rule `1px #404040`, captions in mono 11/1.4 in `#666e7a`."**

### Iteration Guide

1. **Crank the tracking first**: if a headline reads loose, pull tracking tighter — never reach for bold. The brand's emphasis lives in compression.
2. **Refuse colour**: when a CTA looks weak, swap to a white pill with `#0c0c0c` text. Adding a brand colour is the wrong fix.
3. **Use the duet**: a dark-only page misses Runway's lab-and-gallery move. Insert at least one paper-warm `#efeee6` press band.
4. **Replace shadows with rules** on paper surfaces. If a card needs separation, use a 1px `#404040` rule on the relevant edges.
5. **Choose radius bimodally**: 0 (brutalist) or 9999 (pill). If you're reaching for 6px, you're in SaaS register — pull back.
6. **Quiet the link colour** — links on dark are white with a cool-grey underline grow on hover, not blue, not violet.
7. **Cap motion at 280ms** and respect reduced-motion completely (kill video autoplay, drop transforms).
8. **Drop adjectives in copy** — if you wrote "powerful", "amazing", "innovative", strike them. The brand's voice is statement, not pitch.
