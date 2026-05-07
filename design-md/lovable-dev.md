---
name: Lovable
tagline: Pink-into-violet gradient on white — vibe-coding dressed in playful, friendly chromatics.
updated_at: 2026-05-06T20:10:21+12:00
published_at: 2026-05-03T16:49:18+12:00
author: webdesignhot
source_url: https://lovable.dev
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, dev-tools]
tags: [light, sans, soft, playful, bright, warm, multi-theme]
preview_swatch: ['#ffffff', '#ff66c4', '#9b6bff']
related: [cursor, vercel, framer]
description: 'Lovable''s site sells "build apps by chatting" with a deliberately friendly chromatic system: pure white canvas, a hot pink-to-violet gradient (`#ff66c4` → `#9b6bff`) for the brand mark and primary CTA, soft Inter at sensible sizes, and big rounded super-ellipse cards. Where most AI coding tools lean dark and serious, Lovable leans bright, warm, and human — the visual equivalent of "no, really, this is approachable".'

themes:
  default: light
  available: [light, dark]
  switch-via: 'Marketing site default is the bright illustrative light canvas; the in-app builder honors prefers-color-scheme + manual toggle. The pink→violet brand gradient is invariant across themes.'

colors:
  light:
    bg: '#ffffff'                    # white canvas
    bg-soft: '#fafafb'               # secondary stripe surface
    bg-elev: '#f8f9fc'               # tertiary tint
    surface: '#f4f5f8'               # default card base
    surface-2: '#ebedf2'             # hover card
    surface-3: '#dfe2ea'             # pressed
    surface-tint-pink: '#fff0f8'     # soft pink wash
    surface-tint-violet: '#f4eeff'   # soft violet wash
    text: '#1a1a23'                  # near-black with violet cast
    text-strong: '#0a0a14'           # display copy
    text-muted: '#6b6e7d'            # secondary copy
    text-soft: '#9498a8'              # tertiary, helper
    text-faint: '#c1c4d0'             # disabled
    text-on-brand: '#ffffff'         # white on gradient
    brand: '#ff66c4'                 # gradient start — hot pink
    brand-mid: '#c068dd'             # gradient mid — magenta
    brand-end: '#9b6bff'             # gradient end — soft violet
    brand-solid: '#a665ff'           # gradient collapsed for solo marks
    brand-hover: '#8f54f0'           # pressed solid
    brand-active: '#7d44e0'          # active solid
    accent-cream: '#fff1e6'
    accent-cream-deep: '#ffd9bf'
    accent-mint: '#bdf3d8'
    accent-mint-deep: '#7ed4a8'
    accent-sky: '#cfe9ff'
    accent-yellow: '#fff5b8'
    border: '#0000000f'              # 6% black hairline
    border-strong: '#0000001a'       # 10% black
    border-subtle: '#00000008'       # 3% black
    border-brand: '#ff66c4'
    border-focus: '#9b6bff'
    success: '#22c55e'
    success-bg: '#dcfce7'
    warning: '#f59e0b'
    warning-bg: '#fef3c7'
    danger: '#ef4444'
    danger-bg: '#fee2e2'
    info: '#9b6bff'
    info-bg: '#f4eeff'
    on-brand: '#ffffff'

  dark:
    bg: '#0a0a14'                    # deeper near-black with violet cast (mirrors light/text-strong)
    bg-soft: '#13131e'               # secondary stripe on dark
    bg-elev: '#1a1a26'               # tertiary tint
    surface: '#1f1f2e'               # default dark card
    surface-2: '#272739'             # hover dark card
    surface-3: '#33334a'             # pressed
    surface-tint-pink: 'rgba(255, 102, 196, 0.10)'
    surface-tint-violet: 'rgba(155, 107, 255, 0.10)'
    text: '#f4f4fa'                  # near-white with violet cast (mirrors light/text)
    text-strong: '#ffffff'
    text-muted: '#a0a3b3'
    text-soft: '#7a7d8e'
    text-faint: '#4a4d5e'
    text-on-brand: '#ffffff'
    brand: '#ff66c4'                 # gradient stays — chromatic identity
    brand-mid: '#c068dd'
    brand-end: '#9b6bff'
    brand-solid: '#a665ff'
    brand-hover: '#b87aff'           # lifted on dark for legibility
    brand-active: '#9b6bff'
    accent-cream: 'rgba(255, 217, 191, 0.18)'
    accent-cream-deep: '#d4b08a'
    accent-mint: 'rgba(126, 212, 168, 0.20)'
    accent-mint-deep: '#7ed4a8'
    accent-sky: 'rgba(207, 233, 255, 0.20)'
    accent-yellow: 'rgba(255, 245, 184, 0.20)'
    border: '#ffffff14'              # 8% white hairline
    border-strong: '#ffffff26'       # 15% white
    border-subtle: '#ffffff0a'       # 4% white
    border-brand: '#ff66c4'
    border-focus: '#b87aff'
    success: '#22c55e'
    success-bg: 'rgba(34, 197, 94, 0.18)'
    warning: '#fbbf24'
    warning-bg: 'rgba(245, 158, 11, 0.18)'
    danger: '#ef4444'
    danger-bg: 'rgba(239, 68, 68, 0.18)'
    info: '#b87aff'
    info-bg: 'rgba(155, 107, 255, 0.18)'
    on-brand: '#ffffff'

typography:
  display:
    family: 'Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [500, 600, 700, 800]
    opentype-features: 'ss01, cv11'
  body:
    family: 'Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "Geist Mono", ui-monospace, Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 88, weight: 700, lineHeight: 1.0,  tracking: '-0.035em', family: display, opentype: 'ss01' }
    display-xl:      { size: 72, weight: 700, lineHeight: 1.05, tracking: '-0.03em',  family: display }
    display-lg:      { size: 56, weight: 700, lineHeight: 1.08, tracking: '-0.025em', family: display }
    h1:              { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.02em',  family: display }
    h2:              { size: 36, weight: 700, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.3,  tracking: '-0.005em', family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.35, tracking: '-0.003em', family: body }
    h5:              { size: 18, weight: 600, lineHeight: 1.4,  tracking: '0',        family: body }
    body-lg:         { size: 19, weight: 400, lineHeight: 1.55, tracking: '-0.005em', family: body }
    body:            { size: 17, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 15, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 14, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    caption:         { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.4,  tracking: '0.08em',   family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.6,  tracking: '0',        family: mono }
    code-micro:      { size: 12, weight: 500, lineHeight: 1.5,  tracking: '0',        family: mono }

radius:
  micro: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
  xxl: 32
  featured: 40
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]

layout:
  page-width: 1200
  prose-width: 680
  header-height: 64
  hero-y: 120
  section-y: 100
  gutter: 24

components:
  button-primary:
    bg: 'linear-gradient(90deg, #ff66c4 0%, #9b6bff 100%)'
    text: '#ffffff'
    radius: 14
    paddingX: 22
    paddingY: 13
    font: 'Inter 600 / 15px'
    hover: 'shimmer + 1px lift'
  button-secondary:
    bg: '#f4f5f8'
    text: '#1a1a23'
    radius: 14
    paddingX: 22
    paddingY: 13
    font: 'Inter 600 / 15px'
    hover: 'bg #ebedf2'
  button-ghost:
    bg: 'transparent'
    text: '#1a1a23'
    radius: 14
    paddingX: 22
    paddingY: 13
    hover: 'bg #f4f5f8'
  card-default:
    bg: '#f4f5f8'
    radius: 24
    padding: 32
    border: '1px solid #0000000f'
    shadow: 'none'
  card-prompt:
    bg: '#ffffff'
    radius: 20
    padding: 16
    border: '1px solid #0000001a'
    shadow: '0 4px 16px rgba(155,107,255,0.1)'
  input-text:
    bg: '#ffffff'
    border: '1px solid #0000001a'
    radius: 14
    paddingX: 16
    paddingY: 12
    focus: 'border #9b6bff + ring 2px rgba(155,107,255,0.2)'
  badge:
    bg: '#f4eeff'
    text: '#9b6bff'
    radius: 9999
    paddingX: 10
    paddingY: 4
    font: 'Inter 600 / 12px'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  ease-soft: 'cubic-bezier(0.45, 0, 0.55, 1)'
  duration-fast: 150
  duration-standard: 280
  duration-slow: 440
  duration-cinematic: 700
  reduced-motion: 'respects prefers-reduced-motion: reduce — gradient shimmer disabled, hover lifts collapse to opacity-only, scroll reveals become static'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: '0 1px 2px rgba(20,20,40,0.04)'
  standard: '0 4px 16px rgba(155,107,255,0.08)'
  elevated: '0 12px 32px rgba(155,107,255,0.12), 0 2px 6px rgba(20,20,40,0.04)'
  deep: '0 24px 64px rgba(155,107,255,0.16), 0 8px 16px rgba(20,20,40,0.06)'
  glow-pink: '0 0 40px rgba(255,102,196,0.3)'
  glow-violet: '0 0 40px rgba(155,107,255,0.3)'
  glow-gradient: '0 0 80px rgba(255,102,196,0.2), 0 0 60px rgba(155,107,255,0.2)'
  ring: '0 0 0 2px rgba(155,107,255,0.4)'

accessibility:
  contrast-text-on-bg: 16.8           # AAA — #1a1a23 on white
  contrast-strong-on-bg: 19.6         # AAA — #0a0a14 on white
  contrast-muted-on-bg: 5.2           # AA at body sizes
  contrast-text-on-brand-solid: 4.7   # AA at body sizes — white on #a665ff
  contrast-on-pink-gradient: 3.2      # AA Large only — large display weights
  focus-ring: '2px solid #9b6bff with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive; gradient borders preserve contrast'

dark-mode: optional                  # Lovable ships an in-product dark mode but the marketing site is light-only
---

## 1. Visual Theme & Atmosphere

Lovable's site argues that you can build a real app by chatting, and the visual posture has to make that feel possible — not intimidating, not enterprise-coded, not dark-mode-serious. The answer is a deeply friendly chromatic system: pure white canvas, a pink-to-violet gradient (`#ff66c4` → `#9b6bff`) doing all the brand work, and generous 24px rounded cards that look like consumer-app surfaces.

The hero is anchored on a large rounded prompt input — *what should we build today?* — with a gradient send button on the right, and the section below shows template tiles of pre-built apps you can remix. The whole page reads as an invitation, not a spec sheet.

The atmosphere borrows from consumer-app marketing (Notion's friendliness, Linear's rounded discipline) more than dev-tool marketing (Cursor's terminal-dark, v0's monochrome). Where Cursor leans into a dark editor aesthetic and v0 stays achromatic, Lovable runs a chromatic gradient across primary CTAs, brand mark, and section accents — a move much closer to a consumer app than a dev tool.

Warm illustration accents (`#fff1e6` cream, `#bdf3d8` mint, `#cfe9ff` sky) punctuate feature sections without competing with the brand gradient. The shape language is deliberately rounded — 24px super-ellipse cards, 14px buttons, 20px prompt inputs — which completes the "approachable" message the gradient starts.

**Key Characteristics**
- Pure white canvas with hot-pink-to-violet gradient brand mark
- Rounded super-ellipse cards (24–32px radii)
- Inter at 17px body, 72px display — slightly larger than SaaS norm
- Prompt-bar-as-hero pattern (large rounded input with gradient send)
- Soft shadows tinted violet-pink, never neutral grey
- Warm cream / mint / sky illustration accents
- 14px button radius (between Linear's 6 and Webflow's 8)
- 6% black hairlines (no shadows on cards)
- "Vibe-coding" generation aesthetic — friendly, post-2024
- Consumer-app posture in a developer-tool product

## 2. Color Palette & Roles

### Primary

- **bg** (`#ffffff`): clean white canvas, the friendly default
- **bg-soft** (`#fafafb`): secondary stripe surface for alternating bands
- **bg-elev** (`#f8f9fc`): tertiary tint with violet cast
- **text** (`#1a1a23`): primary body — near-black with subtle violet tilt, not pure `#000`
- **text-strong** (`#0a0a14`): display copy, deeper near-black
- **on-brand** (`#ffffff`): white on gradient surfaces

### Brand & Gradient

- **brand** (`#ff66c4`): gradient start — hot pink, hue 320°
- **brand-mid** (`#c068dd`): gradient mid — magenta, hue 290°
- **brand-end** (`#9b6bff`): gradient end — soft violet, hue 260°
- **brand-solid** (`#a665ff`): gradient collapsed to a single hue for small marks (favicons, single-color logos)
- **brand-hover** (`#8f54f0`): pressed solid state
- **brand-active** (`#7d44e0`): active solid state

The gradient is **always linear, 90deg, pink → violet** — never radial, never reversed, never with a third stop. Drift breaks recognition.

### Accent (Illustration)

- **accent-cream** (`#fff1e6`): warm illustration background — used in hero illustrations only
- **accent-cream-deep** (`#ffd9bf`): warm illustration foreground
- **accent-mint** (`#bdf3d8`): secondary illustration accent
- **accent-mint-deep** (`#7ed4a8`): mint emphasis — used for "remix" and growth signals
- **accent-sky** (`#cfe9ff`): tertiary illustration tint
- **accent-yellow** (`#fff5b8`): rare highlight, used in "tip" callouts

These accents **never appear on action surfaces**. They belong to illustration and tonal feature backgrounds.

### Interactive

- **link**: `#9b6bff` — same as brand-end, the violet pulls more reading-friendly than the pink
- **link-hover**: `#7d44e0` with underline-grow
- **selected**: `rgba(155,107,255,0.1)` — soft violet tint
- **disabled**: `#c1c4d0` text on `#f4f5f8` bg

### Neutral Scale

- **text** `#1a1a23` — heading & body
- **text-muted** `#6b6e7d` — secondary
- **text-soft** `#9498a8` — tertiary, helper
- **text-faint** `#c1c4d0` — disabled
- **border** `#0000000f` (6% black) — default hairline
- **border-strong** `#0000001a` (10% black) — emphasis
- **border-subtle** `#00000008` (3% black) — softest

### Surface & Borders

- **surface** `#f4f5f8` — default card base, soft cool grey
- **surface-2** `#ebedf2` — hover
- **surface-3** `#dfe2ea` — pressed
- **surface-tint-pink** `#fff0f8` — soft pink wash for feature sections
- **surface-tint-violet** `#f4eeff` — soft violet wash

### Shadow Colors

Lovable's shadows are **violet-tinted** rather than neutral grey — `rgba(155,107,255,...)` — which keeps depth feeling continuous with the gradient brand mark. Pure black/grey shadows would read as too "dev-tool serious".

- **shadow-ambient** `rgba(20,20,40,0.04)` — softest neutral
- **shadow-standard** `rgba(155,107,255,0.08)` — card resting
- **shadow-elevated** `rgba(155,107,255,0.12)` — card hover
- **glow-pink/violet/gradient** for focused interactives and hero atmospherics

### Semantic

- **success** `#22c55e` on `#dcfce7`
- **warning** `#f59e0b` on `#fef3c7`
- **danger** `#ef4444` on `#fee2e2`
- **info** `#9b6bff` on `#f4eeff` (uses brand-end instead of generic blue)

## 3. Typography Rules

### Font Family

- **Display & Body**: Inter — single-family system, weighted 400 through 800
- **Mono**: JetBrains Mono / Geist Mono — code samples in feature sections
- **OpenType**: `ss01` (single-storey g), `cv11` (open 4) — Lovable's Inter rendering uses stylistic sets to lean friendlier

### Hierarchy

| Role | Font | Size | Weight | Line H | Tracking | OT | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Inter | 88 | 700 | 1.0 | -0.035em | ss01 | Above-fold marketing hero |
| display-xl | Inter | 72 | 700 | 1.05 | -0.03em | — | Standard H1 |
| display-lg | Inter | 56 | 700 | 1.08 | -0.025em | — | Section opener |
| h1 | Inter | 48 | 700 | 1.1 | -0.02em | — | Subsection |
| h2 | Inter | 36 | 700 | 1.15 | -0.015em | — | Feature header |
| h3 | Inter | 24 | 600 | 1.3 | -0.005em | — | Card title |
| h4 | Inter | 20 | 600 | 1.35 | -0.003em | — | Component title |
| h5 | Inter | 18 | 600 | 1.4 | 0 | — | Inline label |
| body-lg | Inter | 19 | 400 | 1.55 | -0.005em | — | Hero subhead |
| body | Inter | 17 | 400 | 1.55 | 0 | — | Default paragraph (1pt larger than 16-norm) |
| body-sm | Inter | 15 | 400 | 1.5 | 0 | — | Captions |
| label | Inter | 14 | 500 | 1.4 | 0 | — | Form & button |
| caption | Inter | 13 | 500 | 1.4 | 0 | — | Meta below cards |
| eyebrow | Inter | 12 | 600 | 1.4 | 0.08em | — | Section taglines |
| code | JetBrains Mono | 14 | 400 | 1.6 | 0 | tnum | Inline code |
| code-micro | JetBrains Mono | 12 | 500 | 1.5 | 0 | tnum | Version strings |

### Principles

- **17px body, not 16** — Lovable's marketing copy is meant to be read like a friendly product newsletter, not a spec sheet
- **Display weight stays at 700** — 800 reads aggressive, 600 reads anaemic at 72px
- **Tracking is moderate-negative** — `-0.03em` at display, never tighter than `-0.035em`
- **No serif anywhere** — Inter carries the entire system; the friendliness comes from chromatics + shape, not from typography
- **Single-storey g (ss01)** is part of the voice — leans humanist
- **Mono is rare** — code blocks live in `#f4f5f8` cards in feature sections only
- **Eyebrows tracked +0.08em ALL CAPS** — the only positive tracking move
- **No italic** — Lovable's voice is sincere, not editorial

## 4. Component Stylings

### Buttons

**Primary CTA** — the gradient pill
- bg `linear-gradient(90deg, #ff66c4 0%, #9b6bff 100%)`
- text `#ffffff`, radius `14px`, padding `13px 22px`, Inter 600 15px
- hover: subtle shimmer (gradient shifts 10% right) + 1px lift, 280ms ease-emphasized
- focus: ring `2px solid #9b6bff` + 2px offset
- use: every primary action — "Start building", "Try Lovable", "Sign up"

**Secondary Button**
- bg `#f4f5f8`, text `#1a1a23`, radius `14px`
- padding `13px 22px`, Inter 600 15px, no border
- hover: bg `#ebedf2`
- use: secondary action — "Watch demo", "Browse templates"

**Ghost Button**
- bg transparent, text `#1a1a23`, radius `14px`
- hover: bg `#f4f5f8`
- use: tertiary action — "Learn more", "View docs"

**Send Button** (in prompt input)
- circular, 40×40px, gradient fill, white arrow icon
- inline right-side of prompt input, 14px from edge

### Cards

**Card Default**
- bg `#f4f5f8`, radius `24px`, padding `32px`
- border `1px solid #0000000f`, no shadow
- hover: bg `#ebedf2` + 2px translateY lift
- many cards include a small inline emoji or coloured glyph at top-left

**Template Tile**
- bg `#ffffff`, radius `24px`, padding `0` (image fills) + 16px caption strip
- border `1px solid #0000000f`, shadow ambient
- hover: shadow-standard + reveal "Remix" CTA overlay

**Prompt Bar**
- bg `#ffffff`, radius `20px`, padding `16px 16px 16px 20px`
- border `1px solid #0000001a`, shadow `0 4px 16px rgba(155,107,255,0.1)`
- inline gradient send button right
- focus: shadow `0 8px 32px rgba(155,107,255,0.2)`

### Badges & Tags

**Badge Brand**
- bg `#f4eeff`, text `#9b6bff`, radius `9999px`
- padding `4px 10px`, Inter 600 12px

**Badge Mint** (growth signals)
- bg `#bdf3d8`, text `#0d6e3b`, radius `9999px`
- padding `4px 10px`

**Tag Eyebrow**
- bg transparent, text `#9b6bff`, radius `0`, no border
- Inter 600 12px, ALL CAPS, tracking `0.08em`

### Inputs & Forms

**Text Input**
- bg `#ffffff`, border `1px solid #0000001a`, radius `14px`
- padding `12px 16px`, Inter 400 17px
- focus: border `#9b6bff` + ring `2px rgba(155,107,255,0.2)`
- placeholder: `#9498a8`

**Prompt Input** (special hero variant)
- larger: 72px+ height, 20px radius
- gradient send button inline right
- placeholder is a sample app idea ("a habit tracker for runners…")

### Navigation

**Top Nav**
- bg `#ffffff` (or `rgba(255,255,255,0.8)` blurred when sticky)
- height `64px`, 24px gutters
- gradient logo lockup left, link cluster center (Pricing/Templates/Docs), gradient CTA right
- hairline `#0000000f` bottom on scroll

**Footer**
- bg `#ffffff` with top hairline `#0000000f`
- 4-column link grid, Inter 14 muted, 96px vertical padding
- gradient wordmark + copyright row at bottom

### Tabs / Tooltips / Toasts

**Tab Group**
- pill-style: full-pill 9999px container with active state filling one segment in `#1a1a23`
- inactive: text `#6b6e7d`, active: text `#ffffff`

**Tooltip**
- bg `#1a1a23`, text `#ffffff`, radius `8px`, padding `8px 12px`
- Inter 500 12px, drop shadow standard

**Toast**
- bg `#ffffff`, border `1px solid #0000001a`, radius `16px`, shadow elevated
- Inter 600 15px message, Inter 400 14px body

## 5. Layout Principles

### Spacing System

- **base** `4px`, scale `[0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]`
- Density philosophy: **air-friendly**. Lovable doesn't pack as tightly as Linear or Vercel — feature cards have 32px internal padding, 24–48px between cards.

### Grid & Container

- **page-width** `1200px` with 24px gutters
- 12-column grid with 8px rhythm baseline
- Hero takes full viewport width, anchored on the prompt input
- Template grids run 3–4 columns of square-ish 24px-radius preview tiles
- **prose-width** `680px` — used for blog and docs

### Whitespace Philosophy

Vertical rhythm runs 80–120px between sections — generous, with each band reading as a distinct chapter rather than a packed feature wall. The hero gets 120–160px of vertical air. Cards sit on 24px gutters in template grids.

### Section Cadence

The page reads as alternating soft tints:
1. White hero with prompt input
2. White stripe with template grid
3. Soft pink wash (`#fff0f8`) feature row
4. White feature row with screenshot
5. Soft violet wash (`#f4eeff`) testimonial band
6. White pricing
7. White footer

The tinted bands are subtle — 2–4% saturation — so the gradient brand mark always pops.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 4px | Inline code, mono badges |
| Small | 8px | Tooltips, small UI |
| Medium | 12px | Inputs |
| Large | 14px | **Buttons** — signature Lovable button radius |
| Comfortable | 16px | Toasts, secondary cards |
| XL | 24px | **Default card** — signature super-ellipse |
| XXL | 32px | Large feature cards |
| Featured | 40px | Hero shells |
| Pill | 9999px | Badges, avatars |

Lovable runs noticeably rounder than most dev tools — 24px super-ellipse cards are a signature decision. The 14px button radius sits between Linear's 6 and Webflow's 8, slightly softer.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow, no border | Hero text on white |
| 1 | 1px hairline `#0000000f` | Resting cards |
| 2 | shadow-ambient `0 1px 2px rgba(20,20,40,0.04)` | Lifted cards |
| 3 | shadow-standard `0 4px 16px rgba(155,107,255,0.08)` | Hovered cards / prompt bar |
| 4 | shadow-elevated + glow-violet | Focused prompt input |
| 5 | shadow-deep + glow-gradient | Modals, hero floating element |

### Shadow Philosophy

Lovable's shadows are **violet-pink-tinted** — `rgba(155,107,255,...)` — keeping depth visually continuous with the brand gradient. Cards on the white canvas mostly use a single 6% black hairline (no shadow); shadows appear on the prompt bar, focused inputs, and hovered template tiles. The aesthetic is **flat-friendly**, not flat-clinical — depth via tonal layering and light tinted shadows, never heavy elevation.

## 8. Interaction & Motion

### Easing Curves

- **ease-standard** `cubic-bezier(0.4, 0, 0.2, 1)` — most state changes
- **ease-emphasized** `cubic-bezier(0.2, 0, 0, 1)` — page transitions
- **ease-bounce** `cubic-bezier(0.34, 1.56, 0.64, 1)` — playful product moments
- **ease-soft** `cubic-bezier(0.45, 0, 0.55, 1)` — symmetric breathing animations

### Duration Buckets

- **fast** `150ms` — hover state shifts
- **standard** `280ms` — card hover, dropdown reveal
- **slow** `440ms` — modal entry
- **cinematic** `700ms` — gradient shimmer cycle, hero reveal

### Per-Component Recipes

- **Primary CTA hover**: gradient shimmer (10% horizontal shift) + 1px lift + shadow intensify
- **Card hover**: bg `#f4f5f8` → `#ebedf2` + 2px translateY + shadow ambient → standard
- **Prompt input focus**: shadow `0 4px 16px` → `0 8px 32px` violet glow + border violet
- **Template tile hover**: scale 1.0 → 1.02 + reveal "Remix" overlay
- **Link hover**: text color shift + underline grow

### Page Transitions

- Section reveals on scroll: fade-up 12px, 440ms slow ease-emphasized
- Hero gradient: subtle breathing animation, 700ms cycle, 6s loop
- Template tiles cascade in: 60ms stagger, fade + 8px up

### Reduced Motion Strategy

Lovable respects `prefers-reduced-motion: reduce`:
- Gradient shimmer disabled (static gradient)
- Hero breathing animation freezes
- Hover lifts collapse to opacity-only
- Scroll reveals become static
- Stagger animations replaced with single fade-in

## 9. Accessibility & A11y

### Contrast Pairs

- text `#1a1a23` on bg `#ffffff`: **16.8** — AAA all sizes
- text-strong `#0a0a14` on bg `#ffffff`: **19.6** — AAA
- text-muted `#6b6e7d` on bg `#ffffff`: **5.2** — AA body, AAA large
- on-brand `#fff` on brand-solid `#a665ff`: **4.7** — AA body, AAA large
- on-brand `#fff` on brand-end `#9b6bff`: **3.8** — AA Large only — keep button labels at ≥15px 600
- text `#1a1a23` on surface `#f4f5f8`: **15.2** — AAA

### Focus Indicators

- 2px solid `#9b6bff` (brand-end violet) with 2px offset
- Visible on every interactive: buttons, links, prompt input, cards-as-links
- Never `outline: none` without replacement

### ARIA Patterns

- Prompt input: `role="textbox"` + `aria-label="Describe your app idea"`
- Template tiles (cards-as-links): wrapped in `<a>` with `aria-label`
- Modal dialogs: `role="dialog"` + `aria-modal="true"` + focus trap
- Gradient logo: `<svg>` with `<title>Lovable</title>`

### Keyboard Nav

- Tab order matches DOM source
- ENTER submits prompt, ESC clears focus
- ARROW navigates within tab groups
- All interactives reachable in tab cycle

### Screen Reader Hints

- Prompt placeholder is decorative — `aria-label` carries the real label
- Template tile preview images have `alt` text describing the app
- Brand gradient SVG is `aria-hidden="true"` when paired with wordmark
- "New" / "Beta" badges have visible text + appropriate `role`

### Reduced Motion

- Honored across the site
- Gradient shimmer, breathing, parallax: all disabled
- Stagger reveals: opacity-only fade
- Loading spinners: respect reduced motion (disable spin, show static)

## 10. Responsive Behavior

### Breakpoints

| Tier | Min-width | Use |
|---|---|---|
| mobile | 0–639px | Single-column, prompt input full-width |
| tablet | 640–1023px | 2-column template grid |
| desktop | 1024–1279px | 3-column template grid |
| wide | 1280px+ | 4-column template grid, container caps at 1200 |

### Touch Targets

Minimum 44×44px on mobile. Primary CTA scales padding from `13px 22px` (desktop) to `15px 24px` (mobile) for 48px+ tap area.

### Collapsing Strategy

- **Hero display**: 88px → 56px → 40px → 32px down the cascade
- **Template grid**: 4-col → 3-col → 2-col → 1-col
- **Top nav**: full link bar → hamburger drawer at <1024px
- **Section vertical rhythm**: 120px → 80px → 64px

### Image Behavior

- Template preview images: aspect-ratio 4:3, `object-fit: cover`
- Hero illustration: `object-fit: contain`, max-width 600px
- Decorative gradients: SVG-based for infinite scaling

### Container Queries

Lovable uses container queries on the template tile grid — when a tile's container narrows below 280px, the inline caption strip wraps to a stacked layout.

## 11. Content & Voice

### Tone

**Friendly-builder.** Lovable talks to people who have an app idea but don't know how to code. The voice is warm, direct, and second-person — "Build the app you've been dreaming about" rather than "Empower your creative journey". Adjectives are reserved for the user's idea, not the tool. No buzzwords, no enterprise hedging.

### Microcopy Patterns

- **Button verbs**: "Start building", "Try it free", "Sign up", "Browse templates", "Remix this"
- **Empty states**: "Tell us what to build." (Direct prompt, no apology.)
- **Errors**: "Something went sideways — let's try that again." (Conversational, not technical.)
- **Success**: "Built." (Past tense. Confidence.)
- **Loading**: "Building your app…" (Verb in progress, sets expectation.)

### CTA Verb Conventions

Lovable prefers **"Start building"** as the primary CTA across pricing, hero, and footer. Secondary is **"Try it free"** (for risk-aversion users). Tertiary: **"Browse templates"** (for inspiration-seekers).

### Empty States

Lovable fills empty states with prompts, not apologies. The prompt input is itself an empty state — placeholder text suggests an idea ("a habit tracker for runners that uses local storage…").

## 12. Dark Mode & Theming

Lovable's marketing site is **light-only** — no dark variant offered. The product UI (the actual builder) ships a dark mode, but the marketing canvas commits to white as part of the friendliness posture. Pulling the gradient onto a dark canvas would shift the brand from "approachable" to "dev-tool serious", breaking the entire chromatic argument.

If the brand were to ship a marketing dark mode, the swap would preserve the gradient (gradients render well on both light and dark) but the surface tints would invert:

```yaml
# hypothetical — not currently shipped
colors-dark:
  bg: '#0a0a14'
  surface: '#1a1a23'
  surface-2: '#22222d'
  text: '#ffffff'
  text-muted: '#9498a8'
  brand: '#ff66c4'              # gradient unchanged
  brand-end: '#9b6bff'
  border: '#ffffff14'
```

Until shipped, treat the marketing site as light-only.

## 13. Lineage & Influences

Lovable sits in the "vibe-coding" generation of tools (v0, bolt.new, Magic Patterns) that emerged in 2024 alongside the rise of agent-driven app generation. Within that cohort, Lovable commits hardest to **friendliness as differentiator**. Where Cursor leans dark-editor and v0 stays monochromatic, Lovable runs the pink-violet gradient.

The chromatic move borrows from Framer's friendlier purple-leaning gradient, but Lovable adds the hot pink stop that pushes it consumer rather than designer-tool. The shape vocabulary inherits Linear's rounded discipline (pill-style segmented controls, soft hairlines without shadows) but rounds further — 24px super-ellipse cards where Linear holds at 12.

The 17px body type is borrowed from consumer-app marketing (Notion, Beehiiv) rather than dev-tool norms (Stripe, Vercel at 16) — a deliberate move to read more "newsletter-friendly" than "spec-sheet".

**Named Influences**
- **Framer** ([framer.com](https://www.framer.com)) — Friendly purple-leaning gradient + rounded card vocabulary aimed at non-developers
- **Linear** ([linear.app](https://linear.app)) — Rounded card discipline, hairline borders without shadows
- **v0 / bolt.new** ([v0.dev](https://v0.dev)) — 2024 vibe-coding cohort that established the prompt-bar-as-hero pattern
- **Notion** ([notion.so](https://www.notion.so)) — Friendly consumer-app posture for productivity tools
- **Stripe** ([stripe.com](https://stripe.com)) — Gradient brand mark + clean white canvas

## 14. Do's and Don'ts

### Do

- Apply the gradient to the brand mark and primary CTA — it's the single chromatic decision the brand makes
- Keep cards generously rounded (24px+); softer corners are load-bearing for the friendly posture
- Use Inter at 700 / `-0.03em` for hero headlines; lighter weights drift anaemic at 72px
- Hold body type at 17px — the 1pt-larger-than-norm reads "for everyone, not just devs"
- Use 14px button radius — between Linear's 6 and Webflow's 8, the sweet-spot soft
- Tint shadows violet-pink, not neutral grey
- Fill cards with soft cool grey `#f4f5f8`, not pure white
- Use the prompt-bar-as-hero pattern — it's the brand's most recognisable layout
- Honor reduced motion — gradient shimmer must disable
- Reach for accent-cream / mint / sky in illustrations only

### Don't

- Drop the gradient onto a dark canvas; Lovable's posture depends on white-canvas + bright-gradient contrast
- Introduce shadows on cards — depth here is tonal, with a single 6% black hairline
- Mix the warm cream / mint accents into CTAs; they belong to illustration, not action
- Use solid pink or solid violet alone as the brand — the gradient is the identity, not its endpoints
- Drop body type below 16px — 17px is the friendliness floor
- Reverse the gradient (violet → pink); it's always pink → violet, 90deg
- Use a third gradient stop or shift toward a non-magenta middle hue
- Apply the gradient to interior body components (cards, dividers); it lives on CTAs and the brand mark
- Use Inter at 800 weight on display — reads aggressive, breaks the friendliness
- Pack sections tighter than 80px vertical rhythm — air is part of the message

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:               #ffffff
surface:          #f4f5f8
text:             #1a1a23
text-muted:       #6b6e7d
brand-start:      #ff66c4 (hot pink)
brand-mid:        #c068dd (magenta)
brand-end:        #9b6bff (soft violet)
brand-solid:      #a665ff
accent-cream:     #fff1e6
accent-mint:      #bdf3d8
border:           #0000000f (6% black)
```

### Example Component Prompts

1. *"Create a hero in Lovable style: white background, Inter 700 at 72px headline reading 'Build the app you've been dreaming about' tracked at -0.03em, 19px body in #6b6e7d below, large rounded prompt input (#fff, 20px radius, 1px #0000001a border, 16px padding) with placeholder 'a habit tracker for runners…' and a circular gradient send button right (40×40px, pink-to-violet)."*
2. *"Design a Lovable-style template tile grid: 4-column on desktop, each tile is a #fff card with 24px radius, 1px #0000000f border, 16:10 app screenshot at top, 16px caption strip with Inter 600 15px title and Inter 400 13px description in #6b6e7d, hover reveals 'Remix' overlay button."*
3. *"Build a primary CTA in Lovable style: linear-gradient(90deg, #ff66c4 0%, #9b6bff 100%) background, white Inter 600 15px label saying 'Start building', 14px radius, 13px×22px padding, subtle shimmer on hover."*
4. *"Compose a Lovable feature card: bg #f4f5f8, 24px radius, 32px padding, 1px #0000000f border, no shadow, small inline emoji glyph at top-left (40×40), Inter 600 24px title, Inter 400 17px body in #1a1a23."*
5. *"Create a soft pink wash testimonial section: full-bleed bg #fff0f8, 80px vertical padding, Inter 600 36px quote in #0a0a14, Inter 500 14px attribution in #6b6e7d below, no card chrome — quote sits directly on tinted ground."*
6. *"Design a Lovable nav: 64px height, white bg with backdrop-blur on scroll, gradient wordmark left, link cluster center (Pricing/Templates/Docs in Inter 500 15px #1a1a23), gradient pill CTA right reading 'Try it free'."*

### Iteration Guide

1. **Start with the gradient.** If the design feels too dev-tool-serious, the gradient is the fix. Brand mark, primary CTA, and one accent surface — that's the formula.
2. **Round the corners.** If buttons land at 8–12px or cards at 12–16px, push to 14px buttons / 24px cards. Lovable runs deliberately rounder than peers.
3. **Tint the shadows.** If a card has `rgba(0,0,0,0.1)` shadow, swap to `rgba(155,107,255,0.1)`. The violet-pink tint keeps depth on-brand.
4. **Push body to 17.** If body type is at 16px, bump to 17 — the slightly larger size reads "newsletter-friendly".
5. **Replace the prompt-bar.** If the hero CTA is a button alone, replace with a prompt-input-with-send-button. It's Lovable's most recognisable layout.
6. **Use cream / mint in illustration.** If feature sections feel chromatically thin, drop a `#fff1e6` cream illustration block — never as a background tint, always as illustration.
7. **Cap shadows at 12% violet.** If a card shadow goes deeper than `rgba(155,107,255,0.16)`, pull back. Lovable's depth is restrained, not dramatic.
8. **Hold the surface tint cycle.** If sections all sit on white, alternate one as `#fff0f8` (pink wash) and one as `#f4eeff` (violet wash) — the 2-4% saturation gives rhythm without competing with the gradient.
