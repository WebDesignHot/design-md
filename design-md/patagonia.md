---
name: Patagonia
tagline: Outdoor-cooperative editorial — Futura sans on cream, ranger-station palette, photography-led story-first marketing.
updated_at: 2026-05-08T00:00:00.000Z
published_at: 2026-05-08T00:00:00.000Z
author: webdesignhot
source_url: https://www.patagonia.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [fashion, marketplace]
tags: [light, warm, sans, structured, spacious, editorial]
preview_swatch: ['#f6efe1', '#cd0000', '#1c1c1c']
related: [rei, lego, lululemon]
description: 'Patagonia''s site is what an outdoor-cooperative looks like when it has been an outdoor-cooperative for 50 years and refuses to look corporate. The canvas is cream `#f6efe1` (warm off-white that recalls field-journal paper), headings sit in Futura Bold (or its in-house geometric variant) at 48–80px, and the brand color is "Patagonia Red" `#cd0000` — drawn from the iconic mountain wordmark. Photography is the dominant visual instrument: full-bleed climbing-and-fishing-and-environmental-activism shots at 16:9, color-graded warm. Where REI chose green and North Face chose white-and-black, Patagonia chose cream + red + Futura. Voice is essay-confident: long-form articles about activism, climate, repair-not-replace philosophy alongside the product grid.'

colors:
  bg: '#f6efe1'
  bg-soft: '#fdf9ed'
  bg-deeper: '#ebe3d0'
  bg-warm: '#f9f3e3'
  surface: '#ffffff'
  surface-soft: '#fbf8ed'
  surface-deeper: '#ede5d0'
  brand: '#cd0000'
  brand-hover: '#a80000'
  brand-pressed: '#820000'
  brand-deep: '#5a0000'
  brand-tint: '#fde0e0'
  on-brand: '#ffffff'
  forest: '#3d4a2e'
  forest-deep: '#293421'
  forest-soft: '#dde3d4'
  text: '#1c1c1c'
  text-strong: '#000000'
  text-muted: '#5a5a5a'
  text-soft: '#8a8a8a'
  text-faint: '#bcbcbc'
  text-on-brand: '#ffffff'
  link: '#cd0000'
  link-hover: '#820000'
  selected-bg: '#fde0e0'
  border: '#d8d0bc'
  border-strong: '#bcb09a'
  border-soft: '#e8e0c8'
  border-brand: '#cd0000'
  amber: '#cb9c45'
  success: '#3d4a2e'
  warning: '#cb9c45'
  danger: '#a80000'
  info: '#3d4a2e'

typography:
  display:
    family: '"Futura PT", "Futura", "Avenir Next", "Helvetica Neue", -apple-system, sans-serif'
    weights: [500, 700, 800]
  body:
    family: '"Futura PT", "Helvetica Neue", "Inter", -apple-system, sans-serif'
    weights: [400, 500, 600, 700]
  serif:
    family: '"Patagonia Serif", "Georgia", "Times New Roman", serif'
    weights: [400, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 800, lineHeight: 1.0,  tracking: '-0.02em',  family: display }
    display-xl:      { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.018em', family: display }
    display-lg:      { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.012em', family: display }
    h1:              { size: 36, weight: 700, lineHeight: 1.15, tracking: '-0.008em', family: display }
    h2:              { size: 28, weight: 700, lineHeight: 1.2,  tracking: '-0.005em', family: display }
    h3:              { size: 22, weight: 600, lineHeight: 1.3,  tracking: '0',        family: display }
    h4:              { size: 18, weight: 600, lineHeight: 1.35, tracking: '0',        family: display }
    eyebrow:         { size: 11, weight: 700, lineHeight: 1.2,  tracking: '0.20em',   family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.65, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.65, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    label:           { size: 12, weight: 700, lineHeight: 1.3,  tracking: '0.10em',   family: body }
    button:          { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.08em',   family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    article-display: { size: 56, weight: 600, lineHeight: 1.1,  tracking: '-0.012em', family: serif }

radius:
  none: 0
  micro: 1
  sm: 2
  md: 4
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 80, 96, 128, 160]

layout:
  page-width: 1280
  prose-width: 680
  header-height: 80

motion:
  ease-standard: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  duration-fast: 200
  duration-standard: 320
  duration-slow: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1280
  wide: 1440

shadows:
  card: '0 2px 8px rgba(28, 28, 28, 0.06)'
  card-hover: '0 4px 16px rgba(28, 28, 28, 0.10)'
  modal: '0 24px 64px rgba(28, 28, 28, 0.20)'

accessibility:
  contrast-text-on-bg: 13.6
  contrast-text-on-brand: 5.7
  focus-ring: '2px solid #cd0000 + 2px outset gap'
  reduced-motion-honored: true

components:
  button-primary: { bg: brand, text: on-brand, padding: '14px 28px', radius: 0, font: button }
  button-secondary: { bg: transparent, text: text, padding: '12px 26px', radius: 0, border: '1px solid border-strong' }
  button-ghost: { bg: transparent, text: brand, padding: '10px 20px' }
  card: { bg: surface, radius: 2, padding: 24, border: '1px solid border-soft' }
  pill: { bg: surface-deeper, text: text, radius: pill, padding: '4px 12px', font: 'label' }
  input: { bg: surface, border: '1px solid border-strong', text: text, radius: 0, padding: '14px 16px', focus-border: brand }

lineage:
  summary: 'Patagonia''s marketing system descends from Yvon Chouinard''s 1973 founding philosophy — climber-first, environment-first, anti-corporate-default. The cream-canvas-and-red identity has been preserved with minimal change for decades. Futura PT handles every heading — chosen specifically for its mid-century industrial heritage that feels honest rather than trendy. Photography is the primary visual instrument: full-bleed climbing/fishing/activist shots color-graded warm-amber. Voice is essay-confident: long-form articles about climate activism, repair-not-replace philosophy, supply-chain transparency, sit alongside the product grid. The brand commits to "we''re here to outlast you" — patient, principled, slightly old-school.'
  influences:
    - { name: 'Yvon Chouinard / Patagonia 1973 founding', role: 'climber-first founding philosophy', url: 'https://www.patagonia.com/our-footprint' }
    - { name: 'Futura PT (Paul Renner, 1927)', role: 'geometric mid-century sans typography', url: 'https://www.linotype.com/2079/futura-pt.html' }
    - { name: 'National Geographic editorial design', role: 'photography-as-instrument lineage', url: 'https://www.nationalgeographic.com' }
    - { name: 'Whole Earth Catalog', role: 'self-publishing + cooperative-tone editorial heritage', url: 'https://en.wikipedia.org/wiki/Whole_Earth_Catalog' }
    - { name: 'REI / North Face / Arc''teryx', role: 'outdoor-brand contemporaries differentiated against', url: 'https://www.rei.com' }
---

## 1. Visual Theme & Atmosphere

Patagonia's site is what an outdoor-cooperative looks like when it has been one for 50 years and refuses to look corporate. The canvas is **cream** `#f6efe1` (warm off-white recalling field-journal paper), display headings sit in Futura PT Bold at 48–80px, and the brand color is **Patagonia Red** `#cd0000` — drawn from the iconic mountain wordmark. Body uses Futura at 16px line-height 1.65 (generous editorial); long-form articles use a serif (Patagonia Serif, descended from Georgia) for display only.

Photography drives the experience. Full-bleed shots of climbing in Yosemite, fly-fishing in Wyoming, environmental-activism rallies in Patagonia — all color-graded warm-amber, never saturated. Where REI chose green and North Face chose white-and-black, Patagonia chose **cream + red + Futura**. The brand reads as "we're here to outlast you" — patient, principled, slightly old-school.

CTAs are 0px-radius rectangular (the brand rejects rounded; cooperative not consumer-tech). Cards have 1-2px radius and hairline borders. Long-form essays threaded through product navigation are unusual — most marketplace brands wouldn't put a 3000-word "Why we self-impose carbon taxes" essay above the product grid, but Patagonia does.

**Key Characteristics:**
- Cream canvas `#f6efe1` (warm off-white)
- Patagonia Red `#cd0000` (the wordmark anchor)
- Futura PT Bold for display, Futura for body
- 0–2px radius on UI (cooperative-rectangular)
- Photography color-graded warm-amber
- Long-form activist essays alongside product grid
- Forest green `#3d4a2e` as secondary accent
- Serif (Patagonia Serif) reserved for editorial article display
- Light-only canvas
- Patient, principled voice

## 2. Color Palette & Roles

### Primary
- **Background** (`#f6efe1`): cream off-white. Never pure white.
- **Text** (`#1c1c1c`): body. Soft warm dark gray.
- **Text Strong** (`#000000`): emphasized headlines.

### Brand — Patagonia Red
- **Brand** (`#cd0000`): primary CTA + wordmark.
- **Brand Hover** (`#a80000`), **Pressed** (`#820000`), **Deep** (`#5a0000`).
- **Brand Tint** (`#fde0e0`): selection wash.

### Forest (secondary accent)
- **Forest** (`#3d4a2e`): muted moss for environmental-content sections.

### Borders
- **Border** (`#d8d0bc`): warm cream hairline.
- **Border Strong** (`#bcb09a`): emphasis.

### Semantic
- success forest, warning amber, danger brand-hover, info forest.

## 3. Typography Rules

### Font Family
- **Display**: Futura PT (Paul Renner, 1927). Falls back to Avenir Next → Helvetica Neue.
- **Body**: Futura PT regular at 16px line-height 1.65.
- **Serif**: Patagonia Serif (Georgia descendant) for editorial display only.

### Hierarchy

| Role | Font | Size | Weight | LH | Tracking |
|------|------|------|--------|-----|----------|
| display-hero | Futura | 80 | 800 | 1.0 | -0.02em |
| display-lg | Futura | 48 | 700 | 1.1 | -0.012em |
| h1 | Futura | 36 | 700 | 1.15 | -0.008em |
| h2 | Futura | 28 | 700 | 1.2 | -0.005em |
| eyebrow | Futura | 11 | 700 | 1.2 | 0.20em UPPER |
| body | Futura | 16 | 400 | 1.65 | 0 |
| label | Futura | 12 | 700 | 1.3 | 0.10em UPPER |
| button | Futura | 14 | 700 | 1.0 | 0.08em UPPER |
| article-display | Patagonia Serif | 56 | 600 | 1.1 | -0.012em |

### Principles
- **Futura PT for everything**, serif reserved for editorial article display.
- **Body line-height 1.65** — generous editorial rhythm.
- **Mixed case display, UPPER eyebrows + buttons.**
- **Heavy tracking on uppercase** (0.08-0.20em).

## 4. Component Stylings

### Buttons (3 variants — 0px radius)

**Primary** — Patagonia Red:
- bg `#cd0000`, text white, 14px Futura 700 0.08em UPPER
- Padding 14×28, **radius 0** (rectangular)
- Hover: bg `#a80000`

**Secondary** — bordered:
- bg transparent, text dark, 1px gray border, radius 0

**Ghost**: bg transparent, text red, padding 10×20.

### Cards
- bg white (lifts from cream), 2px radius, padding 24
- 1px soft border + minimal shadow
- Used for product grid; editorial articles use no card

### Pills (size + material tags)
- bg `surface-deeper`, text dark, pill radius

### Inputs
- bg white, 1px border, **radius 0** (rectangular)
- Focus: border red

### Navigation
- 80px sticky header, cream bg with hairline bottom
- Patagonia mountain wordmark left (red), top-level nav center, account + cart right

## 5. Layout Principles

- Base 4px, 96-160px between sections (generous editorial)
- Page max width 1280px, prose 680px
- Hero: full-bleed photography with overlapping headline 30% from bottom
- Product grid: 4-up at desktop, 2-up at tablet, 1-up at mobile
- Editorial articles in single 680px column

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0 | **default** for buttons, inputs |
| Micro | 1 | hairline indicators |
| Standard | 2 | **cards** |
| Comfortable | 4 | tooltips |
| Pill | 9999 | size + material pills |

## 7. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| 1 | `0 2px 8px rgba(28,28,28,0.06)` resting cards |
| 2 | `0 4px 16px rgba(28,28,28,0.10)` hover |
| 3 | `0 8px 24px rgba(28,28,28,0.14)` featured |
| 4 | `0 24px 64px rgba(28,28,28,0.20)` modal |

### Shadow Philosophy
Soft, neutral, generous blur. Never colored shadows.

## 8. Interaction & Motion

- Standard ease, slower durations (200-480ms) — patient brand pacing
- Card hover: shadow lift, no transform
- Photography hero: subtle Ken Burns 8-12s
- Page transitions: 480ms

## 9. Accessibility & A11y

- text on bg: `#1c1c1c` on `#f6efe1` = **13.6:1** AAA
- on-brand on brand: `#ffffff` on `#cd0000` = **5.7:1** AA
- 2px Patagonia Red focus ring + 2px outset gap

Editorial articles use semantic `<article>` markup with `<time>` for publish dates. Photography decorative `aria-hidden`.

## 10. Responsive Behavior

mobile <479: hero 80→44; nav hamburger; 1-up grid. tablet: 2-up. desktop+: 4-up.

44×44 min touch targets. Long-form articles use full-width on mobile, prose-width on desktop+.

## 11. Content & Voice

### Tone
**Patient-principled.** Essay-confident, never a hard sell.

### Microcopy patterns
- Primary CTA: **"Add to Bag"** / **"Sign in"**
- Sign-up: **"Create an account"**
- Errors: **"Something went wrong. Try refreshing."**
- Empty: **"No items yet — start with our climbing essentials."**

### CTA verb conventions
- **Add / Save / Sign in / Read more / Repair**
- Avoid: "Buy" (too transactional), urgency ("Last chance")

## 12. Dark Mode & Theming

**Light-only on web.** Cream canvas IS the brand.

## 13. Lineage & Influences

Patagonia descends from Yvon Chouinard's 1973 founding philosophy — climber-first, environment-first, anti-corporate-default. Cream-canvas-and-red identity preserved for decades. Futura PT handles display.

Photography is primary visual instrument; long-form activist articles alongside product grids — unusual for marketplace, structural for Patagonia.

**Named influences:**
- **Yvon Chouinard / 1973 founding** — climber-first philosophy
- **Futura PT (Paul Renner, 1927)** — geometric mid-century sans
- **National Geographic editorial design** — photography-as-instrument
- **Whole Earth Catalog** — cooperative-tone editorial
- **REI / North Face / Arc'teryx** — outdoor-brand peers

## 14. Do's and Don'ts

### Do
- **Cream canvas `#f6efe1`** — never pure white.
- **Futura PT for everything.**
- **Patagonia Red `#cd0000` for primary CTA + wordmark only.**
- **0-2px radius on UI** — cooperative-rectangular.
- **Photography color-graded warm-amber.**
- **Long-form essays alongside product grid.**
- **Mixed case display, UPPER eyebrows + buttons.**
- **Generous body line-height 1.65.**

### Don't
- **Don't use pure white bg.** Cream is the brand.
- **Don't substitute Patagonia Red.**
- **Don't round corners.** Outdoor-cooperative is rectangular.
- **Don't add gradients on CTA.**
- **Don't use urgency microcopy.**
- **Don't oversaturate photography.**
- **Don't add a friendly mascot.**

## 15. Agent Prompt Guide

### Quick Color Reference
- bg (cream): `#f6efe1`
- text: `#1c1c1c`
- brand (Patagonia Red): `#cd0000` / hover `#a80000`
- forest: `#3d4a2e`

### Example Component Prompts

> Build a Patagonia-style hero: cream canvas, full-bleed climbing photo color-graded warm, 80px Futura PT Bold heading "Repair, don't replace" mixed-case `-0.02em`. Primary CTA "Read the essay" 0px-radius red `#cd0000` 14px Futura 700 0.08em UPPER, padding 14×28.

> Design a product card: white surface (lifts from cream), 2px radius, 24px pad, soft hairline border. 22px Futura h3 product name, eyebrow "MEN'S · CLIMBING" in 11px UPPER 0.20em red. Price right-aligned 18px bold.

> Render an editorial article header: cream canvas, 56px Patagonia Serif (italic) article title, eyebrow "ACTIVISM · CLIMATE" in 11px Futura UPPER 0.20em red. Body in 16px Futura line-height 1.65.

> Build an "Add to Bag" CTA: 0px radius, Patagonia Red bg, white 14px Futura 700 0.08em UPPER text, padding 14×28.

> Design a size selector: pill radius, surface-deeper bg, text 12px Futura 700 0.10em UPPER "M / 32".

### Iteration Guide

1. **Cream canvas + Patagonia Red + Futura PT.**
2. **0-2px radius — cooperative-rectangular.**
3. **Photography warm-amber color-graded.**
4. **Long-form essay alongside product grid is on-brand.**
5. **Mixed case display, UPPER eyebrows + buttons.**
6. **Generous line-height 1.65 on body.**
7. **Patient voice — never urgency, never hard sell.**
8. **Reject pure white, rounded corners, mascots, urgency.**
