---
name: Asana
tagline: Approachable work management in soft purple — Asana Sans at modest weights with a rainbow accent palette and warm sky-tinted whitespace.
author: webdesignhot
source_url: https://asana.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [saas]
tags: [light, sans, approachable, purple, work-management, rainbow, warm]
preview_swatch: ['#ffffff', '#796eff', '#1e1f21']
related: [monday-com, notion, airtable]
description: 'Asana''s marketing surface is approachable, methodical work management dressed in soft purple. The canvas is mostly pure white `#ffffff` with subtle warm-cream accents on alternating bands, and the type is Asana Sans at modest mid-weights (500–600 for display) sitting in deliberate, balanced layouts. Brand voltage is `#796eff` Asana-purple — a soft electric lavender that anchors primary CTAs, brand wordmark, and feature accents — paired with a six-color rainbow accent palette (coral, peach, sage, sky, lavender-soft, rose) that maps to the actual product UI''s project-color system. Where Monday.com is loud-saturated, Asana is friendly-restrained — its rainbow appears in pastel pastels rather than full saturation, and the typography is more humanist than geometric. Section rhythm: white hero → pastel feature pair → cream-warm band → white feature grid → dark mid-page CTA → pastel pricing → cream pre-footer → footer. The voice is methodical and team-affirming — Asana writes about teams achieving goals, not individuals crushing them.'

colors:
  bg: '#ffffff'                  # pure white canvas
  bg-soft: '#f9f8f6'             # warm cream-tinted soft surface
  bg-warm: '#f6f4ef'             # warmer cream band — alternates with white
  bg-elev: '#ffffff'             # elevated surface stays white
  bg-strong: '#efece5'           # deeper cream pre-footer
  bg-dark: '#1e1f21'             # mid-page dark CTA — soft near-black
  bg-dark-elev: '#2a2b2e'
  surface: '#f9f8f6'
  text: '#1e1f21'                # ink — soft near-black
  text-body: '#3e3e44'           # default running-text
  text-muted: '#6d6e78'          # captions, footer links
  text-faint: '#9a9aa3'          # placeholder, disabled
  brand: '#796eff'               # Asana-purple — soft electric lavender
  brand-hover: '#665cdb'         # press / hover
  brand-active: '#544ab8'        # active / focused
  brand-soft: '#e7e5fe'          # lavender pastel surface
  brand-deep: '#3e3492'          # deep brand for layered compositions
  on-brand: '#ffffff'
  on-dark: '#fafaf7'             # cream-tinted white over dark
  link: '#3e60ff'                # link blue — distinct from brand purple
  link-hover: '#2747e3'
  # Six-color rainbow palette (pastel surfaces + saturated chip variants)
  rainbow-coral: '#ff7c70'        # saturated
  rainbow-coral-soft: '#ffd9d3'   # pastel surface
  rainbow-peach: '#ffb15c'
  rainbow-peach-soft: '#ffe6cc'
  rainbow-sage: '#74c990'
  rainbow-sage-soft: '#d4ecdc'
  rainbow-sky: '#5cc4f0'
  rainbow-sky-soft: '#d3edfa'
  rainbow-lavender: '#a99cff'
  rainbow-lavender-soft: '#ebe7fe'
  rainbow-rose: '#f08fc0'
  rainbow-rose-soft: '#fadcec'
  border: '#e3e1db'              # warm-tinted hairline
  border-strong: '#c3c0b6'       # stronger card border
  border-soft: '#efece5'         # softer divider
  shadow-tint: 'rgba(30, 31, 33, 0.06)'
  shadow-deep: 'rgba(30, 31, 33, 0.16)'
  info: '#3e60ff'
  success: '#5da970'             # sage-deep
  success-soft: '#d4ecdc'
  warning: '#e09a3a'
  warning-soft: '#ffe6cc'
  danger: '#df5c5c'
  danger-soft: '#ffd9d3'
  selection: 'rgba(121, 110, 255, 0.18)'
  ring: 'rgba(121, 110, 255, 0.45)'

typography:
  display:
    family: '"Asana Sans", "Inter Display", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: 'Asana Sans defaults — humanist tail-based character'
  body:
    family: '"Asana Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, sans-serif'
    weights: [400, 500, 600]
    opentype-features: 'tnum inside data tables and metric chips'
  mono:
    family: '"Source Code Pro", "JetBrains Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-hero:    { size: 76, weight: 600, lineHeight: 1.05, tracking: '-0.02em',  family: display, notes: 'mega hero — single anchor' }
    display-xl:      { size: 60, weight: 600, lineHeight: 1.08, tracking: '-0.018em', family: display, notes: 'homepage hero h1' }
    display-lg:      { size: 44, weight: 600, lineHeight: 1.10, tracking: '-0.014em', family: display, notes: 'feature section h2' }
    display-md:      { size: 36, weight: 600, lineHeight: 1.16, tracking: '-0.01em',  family: display, notes: 'pricing section heads' }
    title-lg:        { size: 28, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    title-md:        { size: 22, weight: 600, lineHeight: 1.30, tracking: 0,           family: display }
    title-sm:        { size: 18, weight: 600, lineHeight: 1.40, tracking: 0,           family: body }
    label-md:        { size: 16, weight: 600, lineHeight: 1.45, tracking: 0,           family: body }
    button:          { size: 16, weight: 600, lineHeight: 1.20, tracking: 0,           family: body }
    body-lg:         { size: 19, weight: 400, lineHeight: 1.55, tracking: 0,           family: body }
    body-md:         { size: 17, weight: 400, lineHeight: 1.55, tracking: 0,           family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.50, tracking: 0,           family: body }
    caption:         { size: 13, weight: 600, lineHeight: 1.40, tracking: '0.04em',    family: body }
    caption-tabular: { size: 13, weight: 500, lineHeight: 1.30, tracking: 0,           family: body, opentype: 'tnum' }
    legal:           { size: 12, weight: 400, lineHeight: 1.40, tracking: '0.01em',    family: body }
    code-md:         { size: 14, weight: 400, lineHeight: 1.50, tracking: 0,           family: mono }

radius:
  micro: 2
  sm: 6
  md: 10
  lg: 14
  xl: 20
  pill: 9999
  full: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1200
  prose-width: 720
  header-height: 64
  card-padding-default: 32
  card-padding-large: 48
  section-padding: 96

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: lg
    padding: '14px 24px'
    use: 'primary CTA — Get started / Try for free — Asana-purple anchor'
  button-primary-hover:
    backgroundColor: brand-hover
    textColor: on-brand
    use: 'pointer hover'
  button-secondary:
    backgroundColor: bg
    textColor: text
    rounded: lg
    padding: '14px 24px'
    border: '1px solid border-strong'
    use: 'Watch demo / Sign in pair'
  button-tertiary:
    backgroundColor: transparent
    textColor: link
    rounded: lg
    padding: '12px 16px'
    use: 'inline link-style'
  button-on-dark:
    backgroundColor: bg
    textColor: text
    rounded: lg
    padding: '14px 24px'
    use: 'white CTA over dark mid-page band'
  button-icon:
    backgroundColor: bg
    textColor: text
    rounded: full
    size: 40
    border: '1px solid border'
    use: 'carousel arrows, share'
  card-default:
    backgroundColor: bg-soft
    textColor: text
    rounded: lg
    padding: 32
    use: 'default content card on white canvas — warm cream tone'
  card-elevated:
    backgroundColor: bg
    textColor: text
    rounded: lg
    padding: 32
    border: '1px solid border-soft'
    shadow: standard
    use: 'pricing tier, integration, feature card'
  card-rainbow-coral:
    backgroundColor: rainbow-coral-soft
    textColor: text
    rounded: xl
    padding: 48
    use: 'feature demo — coral accent (priority / urgent)'
  card-rainbow-peach:
    backgroundColor: rainbow-peach-soft
    textColor: text
    rounded: xl
    padding: 48
    use: 'feature demo — peach accent (warmth / community)'
  card-rainbow-sage:
    backgroundColor: rainbow-sage-soft
    textColor: text
    rounded: xl
    padding: 48
    use: 'feature demo — sage accent (progress / done)'
  card-rainbow-sky:
    backgroundColor: rainbow-sky-soft
    textColor: text
    rounded: xl
    padding: 48
    use: 'feature demo — sky accent (overview / collaboration)'
  card-rainbow-lavender:
    backgroundColor: rainbow-lavender-soft
    textColor: text
    rounded: xl
    padding: 48
    use: 'feature demo — lavender accent (brand-anchored / advanced)'
  card-rainbow-rose:
    backgroundColor: rainbow-rose-soft
    textColor: text
    rounded: xl
    padding: 48
    use: 'feature demo — rose accent (creative / design)'
  hero-card-dark:
    backgroundColor: bg-dark
    textColor: on-dark
    rounded: xl
    padding: 64
    use: 'mid-page dark CTA — section reset'
  badge-tag:
    backgroundColor: bg-soft
    textColor: text-muted
    rounded: pill
    padding: '4px 10px'
    fontSize: 12
    use: 'category / status pill'
  badge-status-coral:
    backgroundColor: rainbow-coral
    textColor: on-brand
    rounded: pill
    padding: '4px 10px'
    fontSize: 12
    use: 'product UI status — Priority'
  badge-status-sage:
    backgroundColor: rainbow-sage
    textColor: on-brand
    rounded: pill
    padding: '4px 10px'
    fontSize: 12
    use: 'product UI status — Done'
  badge-status-sky:
    backgroundColor: rainbow-sky
    textColor: on-brand
    rounded: pill
    padding: '4px 10px'
    fontSize: 12
    use: 'product UI status — Overview / On track'
  text-input:
    backgroundColor: bg
    textColor: text
    rounded: md
    padding: '12px 14px'
    height: 44
    border: '1px solid border-strong'
    use: 'email signup, in-page demo input'
  text-input-focus:
    border: '1px solid brand'
    shadow: '0 0 0 3px rgba(121,110,255,0.20)'
  top-nav:
    backgroundColor: 'rgba(255,255,255,0.92)'
    textColor: text
    height: 64
    use: 'sticky white-tinted bar with backdrop-blur — Asana wordmark left, mega-menu center, primary CTA right'
  footer:
    backgroundColor: bg-strong
    textColor: text-muted
    padding: 96
    use: 'cream pre-footer carrying multi-column link list'
  toast:
    backgroundColor: bg-dark
    textColor: on-dark
    rounded: md
    padding: '12px 16px'
    shadow: deep

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.16, 1, 0.3, 1)'
  ease-spring: 'cubic-bezier(0.34, 1.32, 0.64, 1)'
  duration-instant: 100
  duration-fast: 160
  duration-standard: 240
  duration-slow: 380
  duration-page: 500
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transforms removed, transitions reduced to 100ms opacity-only'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1200
  wide: 1440

shadows:
  ambient: '0 1px 2px rgba(30,31,33,0.05)'
  standard: '0 6px 20px rgba(30,31,33,0.08)'
  elevated: '0 14px 36px rgba(30,31,33,0.10), 0 2px 6px rgba(30,31,33,0.05)'
  deep: '0 24px 56px rgba(30,31,33,0.18), 0 6px 12px rgba(30,31,33,0.08)'
  ring: '0 0 0 3px rgba(121,110,255,0.45)'

accessibility:
  contrast-text-on-bg: 14.4              # AAA — #1e1f21 on #ffffff
  contrast-body-on-bg: 9.4               # AAA — #3e3e44 on #ffffff
  contrast-muted-on-bg: 5.2              # AA — #6d6e78 on #ffffff
  contrast-on-brand: 5.0                 # AA — white on #796eff at body sizes
  contrast-on-dark: 14.0                 # AAA — cream-white on #1e1f21
  contrast-link-on-bg: 7.5               # AAA — #3e60ff on #ffffff
  focus-ring: '3px solid rgba(121,110,255,0.45) with 2px offset'
  reduced-motion-honored: true
  keyboard-nav-honored: true

dark-mode: 'optional — Asana''s in-product UI ships a dark variant with canvas at #1e1f21, brand purple slightly desaturated, and rainbow palette desaturated to tonal variants. Marketing surface is light-only.'
---

## 1. Visual Theme & Atmosphere

Asana's marketing surface is approachable, methodical work management dressed in soft purple. The canvas is mostly pure white `#ffffff` with subtle warm-cream accents on alternating bands, and the type is Asana Sans (a custom humanist sans) at modest mid-weights — display sits at 600 (not the 700–800 of Monday) and body at 400 with a generous 1.55 line-height.

Brand voltage is `#796eff` Asana-purple — a soft electric lavender that anchors primary CTAs, brand wordmark, and feature accents. Where Monday's red-pink screams confidence, Asana's purple whispers approachability. The brand color sits cooler than `#7551dc` (Height) and warmer than `#7c3aed` (Motion-AI) — a deliberate middle ground that reads as "tech-friendly, not tech-cold."

The signature design move is the **six-color rainbow** — coral, peach, sage, sky, lavender, rose — which maps to the actual product UI's project-color system. On the marketing surface, the rainbow appears as pastel surface cards (`rainbow-{name}-soft`) for feature demos, with the saturated variants (`rainbow-{name}`) reserved for status chips and rare accent type. Asana's pastels are warmer and softer than Monday's saturated soft-tones — they feel hand-tinted rather than calculated.

Section rhythm: white hero → pastel feature pair → warm-cream band → white feature grid → dark mid-page CTA → pastel pricing → cream pre-footer → footer. Whitespace is moderately generous (96px section padding, 32–48px card padding) but doesn't reach the meditative 128px of Sunsama. The voice is methodical and team-affirming — Asana writes about teams achieving goals, not individuals crushing them.

**Key Characteristics:**
- Canvas alternates **pure white** `#ffffff` and **warm cream** `#f6f4ef` between bands.
- Brand voltage is `#796eff` Asana-purple — soft, electric, decidedly approachable.
- Display weight is **600** — between Linear's 500 and Monday's 700–800.
- Type is **Asana Sans** (humanist) — not Inter (geometric-modern) or Poppins (geometric-friendly).
- Six-color rainbow (coral, peach, sage, sky, lavender, rose) maps to product UI project colors.
- Pastels are **soft + warm-tinted** — hand-tinted feel vs Monday's saturated calculation.
- Body line-height is 1.55 at 17px — generous but not paper-book.
- Section padding is **96px** between bands.
- Hairlines are **warm-tinted** (`#e3e1db`).

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#ffffff`): Pure white — the dominant canvas.
- **Bg Warm** (`#f6f4ef`): Warm cream — alternating with white between bands.
- **Text / Ink** (`#1e1f21`): Soft near-black — slightly warmer than pure black.
- **Brand / Asana Purple** (`#796eff`): Soft electric lavender. Primary CTA, brand wordmark, primary feature accent.

### Brand & Dark
- **Brand Hover** (`#665cdb`): Press state.
- **Brand Active** (`#544ab8`): Focused.
- **Brand Soft** (`#e7e5fe`): Lavender pastel surface.
- **Brand Deep** (`#3e3492`): Layered purple-on-purple compositions.
- **Bg Dark** (`#1e1f21`): Single mid-page dark CTA. Soft near-black, never pure.
- **Bg Dark Elev** (`#2a2b2e`): Elevated dark surface.
- **On-Dark** (`#fafaf7`): Cream-tinted white over dark.

### Accent — Six-Color Rainbow

The rainbow is Asana's signature design system, mapping directly to in-product project colors. Each color has a saturated form (for status chips and accents) and a soft pastel surface form (for feature card backgrounds).

- **Coral** (`#ff7c70` saturated, `#ffd9d3` soft): Priority / urgent feature card.
- **Peach** (`#ffb15c` / `#ffe6cc`): Warmth / community feature card.
- **Sage** (`#74c990` / `#d4ecdc`): Progress / done feature card.
- **Sky** (`#5cc4f0` / `#d3edfa`): Overview / collaboration feature card.
- **Lavender** (`#a99cff` / `#ebe7fe`): Brand-anchored / advanced (lighter than brand purple).
- **Rose** (`#f08fc0` / `#fadcec`): Creative / design feature card.

### Interactive
- **Link** (`#3e60ff`): Inline body links — blue, distinct from brand purple.
- **Link Hover** (`#2747e3`): Pressed state.
- **Selection** (`rgba(121, 110, 255, 0.18)`): Brand-purple selection.

### Neutral Scale
- **Ink** (`#1e1f21`): Soft near-black.
- **Text Body** (`#3e3e44`): Default running-text.
- **Text Muted** (`#6d6e78`): Captions, footer links.
- **Text Faint** (`#9a9aa3`): Placeholder, disabled.

### Surface & Borders
- **Bg** (`#ffffff`): Canvas.
- **Bg Soft** (`#f9f8f6`): Default warm-tinted card.
- **Bg Warm** (`#f6f4ef`): Warm cream alternating band.
- **Bg Strong** (`#efece5`): Pre-footer cream.
- **Border** (`#e3e1db`): Default 1px hairline — warm-tinted.
- **Border Strong** (`#c3c0b6`): Stronger card border.
- **Border Soft** (`#efece5`): Softest divider.

### Shadow Colors
All shadows use ink-tinted neutral `rgba(30, 31, 33, …)` — closer to neutral than Sunsama's earth-tint, slightly cooler than Height's. Focus ring is brand-purple at 45%.

### Semantic
- **Info** (`#3e60ff`): Same as link blue.
- **Success** (`#5da970`) on `#d4ecdc` sage-soft: confirmation states.
- **Warning** (`#e09a3a`) on `#ffe6cc` peach-soft: caution.
- **Danger** (`#df5c5c`) on `#ffd9d3` coral-soft: destructive actions.

## 3. Typography Rules

### Font Family
- **Primary**: `"Asana Sans"` (custom humanist) for both display and body. Fallback to `"Inter"` if unavailable.
- **Mono**: `"Source Code Pro"` (with `"JetBrains Mono"` fallback) for code snippets.
- **Fallback chain**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`.
- **OpenType features**: Asana Sans defaults — humanist tail-based character. `tnum` inside data tables and metric chips.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Asana Sans | 76 | 600 | 1.05 | -0.02em | — | Mega hero — single anchor |
| display-xl | Asana Sans | 60 | 600 | 1.08 | -0.018em | — | Homepage hero h1 |
| display-lg | Asana Sans | 44 | 600 | 1.10 | -0.014em | — | Feature section h2 |
| display-md | Asana Sans | 36 | 600 | 1.16 | -0.01em | — | Pricing section heads |
| title-lg | Asana Sans | 28 | 600 | 1.25 | -0.005em | — | Section titles |
| title-md | Asana Sans | 22 | 600 | 1.30 | 0 | — | Card titles |
| title-sm | Asana Sans | 18 | 600 | 1.40 | 0 | — | Small card titles |
| label-md | Asana Sans | 16 | 600 | 1.45 | 0 | — | List labels |
| button | Asana Sans | 16 | 600 | 1.20 | 0 | — | CTA labels |
| body-lg | Asana Sans | 19 | 400 | 1.55 | 0 | — | Hero subhead |
| body-md | Asana Sans | 17 | 400 | 1.55 | 0 | — | Default running-text |
| body-sm | Asana Sans | 14 | 400 | 1.50 | 0 | — | Caption support |
| caption | Asana Sans | 13 | 600 | 1.40 | 0.04em | — | Uppercase eyebrow with brand-purple accent |
| caption-tabular | Asana Sans | 13 | 500 | 1.30 | 0 | tnum | Metric chips |
| legal | Asana Sans | 12 | 400 | 1.40 | 0.01em | — | Footer legal |
| code-md | Source Code Pro | 14 | 400 | 1.50 | 0 | — | Code snippets |

### Principles
- **Asana Sans is humanist, not geometric.** The tails on a/g/y are angled, the e-bar is curved, and the x-height is moderate. Don't substitute Poppins (geometric).
- **Display weight is 600 — never 700.** Asana's confidence is approachable; bolder reads as wrong-brand.
- **Negative tracking only at large sizes.** -0.02em at 76px tightens to 0 at 16px.
- **Body at 17px / 400 / 1.55.** Slightly larger than 16px convention, contributing to friendly feel.
- **Eyebrow accent in brand purple.** Caption-eyebrows often use brand `#796eff` for color.
- **Tabular figures inside data tables.** All metric and time displays use `tnum`.
- **No serif companion.** Asana's voice is pure humanist-sans — no editorial serif accent.

## 4. Component Stylings

### Buttons (5 variants)

**`button-primary`** — Background `#796eff` Asana-purple, text white, type 16px / 600 Asana Sans, padding 14 × 24px, radius 14px. "Get started" / "Try for free". Hover lightens via 4% white overlay; active darkens. Focus shows a 3px brand-purple ring at 45% alpha.

**`button-secondary`** — White, ink text, 1px border `#c3c0b6`, same shape and padding.

**`button-tertiary`** — Inline link-style. Transparent, link-blue text, 12 × 16px padding, 14px radius.

**`button-on-dark`** — White over dark band. White background, ink text.

**`button-icon`** — 40 × 40px circular. White, 1px hairline, ink icon. Carousel arrows.

### Cards

**`card-default`** — Warm bg-soft `#f9f8f6` surface, 14px radius, 32px padding. Default content card.

**`card-elevated`** — White, 14px radius, 32px padding, 1px border, standard shadow. Pricing tier, integration card.

**`card-rainbow-{coral|peach|sage|sky|lavender|rose}`** — Pastel rainbow feature cards. Each uses the corresponding `rainbow-{name}-soft` background, 20px radius, 48px padding. Pastel surface signals feature semantic.

**`hero-card-dark`** — Single mid-page dark CTA. Bg-dark `#1e1f21`, cream-white text, 20px radius, 64px padding.

### Badges & Pills

- **`badge-tag`** — Default category. Bg-soft, muted text, rounded pill, 4 × 10px, 12px font.
- **`badge-status-{coral|sage|sky}`** — Product UI status pills. Saturated rainbow color background, white text, rounded pill. Used inside demo cards to dramatize Asana's project status workflow.

### Inputs / Forms

**`text-input`** — White, 10px radius, 12 × 14px padding, 44px height, 1px `#c3c0b6` border. Asana Sans 17px / 400.

**`text-input-focus`** — Border recolors to brand purple; 3px brand-purple ring at 20% alpha.

### Navigation

**`top-nav`** — 64px-tall sticky bar, `rgba(255,255,255,0.92)` white-tinted backdrop with 16px blur. Asana wordmark left in ink. Mega-menu center (Product, Solutions, Use Cases, Resources, Pricing) — opens a full-width panel on hover. Right cluster carries "Talk to sales" text link, "Sign in" text link, "Try for free" `button-primary`.

**`footer`** — Cream `bg-strong` band, 96px padding, 6-column desktop link grid.

### Toasts & Modals

**`toast`** — Bg-dark, cream-white text, 10px radius, deep shadow.

**Modal** — White, 20px radius, 48px padding, deep shadow, ink-tinted backdrop overlay 70% alpha.

### Decorative

**Project-color rainbow chip strip** — A signature hero element: a horizontal row of six rainbow-soft pills representing the six project colors, often appearing above the hero h1 as a visual eyebrow. Each pill is 28px wide × 8px tall, 9999px radius.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`. Section padding **96px** between bands. Card padding 32px (default), 48px (rainbow pastels), 64px (dark hero).

### Grid & Container
- **Max content width**: 1200px centered.
- **Rainbow card grid**: 2-up at desktop with semantic pairing (coral+sage = priority+done, sky+lavender = overview+advanced). 1-up at mobile.
- **Pricing tier grid**: 4-up at desktop (Personal, Starter, Advanced, Enterprise), 1-up at mobile.

### Whitespace Philosophy
Whitespace is moderately generous — 96px section padding sits between Linear's 96 and Sunsama's 128. Cards get 32–48px internal padding. The brand reads as "balanced" — neither dense nor meditative.

### Section Cadence
White hero → 2-up pastel rainbow pair → warm-cream band → white feature grid → dark mid-page CTA → 3-up rainbow grid → cream pricing → cream pre-footer → footer. The white/warm-cream alternation between bands is Asana's specific rhythm move.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 2px | Cookie / legal CTAs |
| Standard | sm | 6px | Inputs, small chips |
| Comfortable | md | 10px | Default content cards, table cells |
| Relaxed | lg | 14px | Primary CTAs, secondary buttons, default cards |
| Featured | xl | 20px | Rainbow surface cards, dark hero, modals |
| Pill | pill | 9999px | Badges, status pills, project-color chips |
| Full | full | 9999px / 50% | Avatars, icon buttons |

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow | Canvas, top nav background, footer band, rainbow cards |
| 1 — Hairline | 1px `#e3e1db` border | Default cards, inputs, secondary buttons |
| 2 — Ambient | `0 1px 2px rgba(30,31,33,0.05)` | Resting cards |
| 3 — Standard | `0 6px 20px rgba(30,31,33,0.08)` | Card hover, sticky nav at scroll, pricing tiers |
| 4 — Elevated | `0 14px 36px rgba(30,31,33,0.10), 0 2px 6px rgba(30,31,33,0.05)` | Mega-menu dropdowns, integration cards |
| 5 — Deep | `0 24px 56px rgba(30,31,33,0.18), 0 6px 12px rgba(30,31,33,0.08)` | Modals, command palette |

### Shadow Philosophy
Ink-tinted neutral shadows match the warm-cream canvas. Rainbow cards stay flat — they carry depth through pastel color and 48px padding. Modals stack two shadows for compound depth.

## 8. Interaction & Motion

### Easing Curves
- **Standard** `cubic-bezier(0.4, 0, 0.2, 1)` — color, opacity.
- **Emphasized** `cubic-bezier(0.16, 1, 0.3, 1)` — pastel reveals, modal entrance.
- **Spring** `cubic-bezier(0.34, 1.32, 0.64, 1)` — task-completion check animation, project-color chip strip animation.

### Duration Buckets
- **Instant (100ms)**: Color hover.
- **Fast (160ms)**: Button hover, focus ring.
- **Standard (240ms)**: Card hover, dropdown, mega-menu.
- **Slow (380ms)**: Pastel reveal, modal entrance, project-color chip animation.
- **Page (500ms)**: Inter-page transition.

### Per-Component Micro-States
- **Button hover (primary)**: 4% white overlay; no transform; 160ms.
- **Button hover (secondary)**: Border color shifts toward brand purple at 30% alpha; 160ms.
- **Card hover (rainbow)**: 4px translate-y lift + standard shadow; 240ms emphasized.
- **Project-color chip strip**: Subtle pulse animation — chips alternate scale 1.0 → 1.04 → 1.0 in sequence at 180ms intervals; ambient breathing.
- **Task-completion check**: Spring bounce on checkbox fill (380ms spring); brand-purple fill from canvas.
- **Link hover**: Underline grows 0 → 1px under text; 160ms.
- **Input focus**: Border recolors → brand purple; 3px ring expands at 20% alpha; 160ms.

### Page Transitions
Default fade. Inter-page route is 500ms emphasized fade-in with 12px translate-y. Section-on-scroll reveals are 380ms fade + 16px offset. Rainbow cards stagger left-to-right at 80ms increments inside a row.

### Reduced Motion
All transforms removed. Project-color chip strip stops pulsing. Pastel reveals fade without offset.

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#1e1f21` on `#ffffff` = **14.4** — AAA.
- **Body on bg**: `#3e3e44` on `#ffffff` = **9.4** — AAA.
- **Muted on bg**: `#6d6e78` on `#ffffff` = **5.2** — AA.
- **On-brand**: white on `#796eff` = **5.0** — AA.
- **On-dark**: cream-white on `#1e1f21` = **14.0** — AAA.
- **Link on bg**: `#3e60ff` on `#ffffff` = **7.5** — AAA.
- **Status chip text**: white on saturated rainbow colors — coral (4.7), sage (3.9), sky (3.4). Sage/sky chips need `text-deep` variant or display sizes only.

### Focus Indicators
3px solid brand-purple ring at 45% alpha with 2px offset on every focusable element.

### ARIA Patterns
- **Buttons**: Native `<button>`; `aria-label` only for icon-only.
- **Mega-menu**: `role="menu"` with `role="menuitem"`; `aria-expanded` on trigger.
- **Tabs (feature cards)**: `role="tablist"` + `role="tab"` with `aria-selected`.
- **Dialog (modals)**: `role="dialog"` with `aria-modal="true"`, focus trap.
- **Live region (status updates)**: `aria-live="polite"`.
- **Navigation**: `<nav aria-label="Primary">`.

### Keyboard Navigation
Tab order follows visual reading order. Skip-link to `<main>`. Mega-menu opens on Enter/Space, navigates with arrow keys, closes with Escape.

### Screen Reader Hints
Rainbow card screenshots use descriptive `alt` text. Status chips announce status name. Project-color chip strip uses `aria-hidden="true"`.

### Reduced Motion Handling
All transforms removed. Project-color chip strip becomes static. Rainbow card reveals fade without offset.

## 10. Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Single-column body; nav collapses to hamburger; rainbow grid 1-up; hero h1 scales to 36px / 600; section padding 64px |
| Tablet | 640–1024px | 2-up rainbow grid; nav stays horizontal but tightens; hero at 48px |
| Desktop | 1024–1200px | 2-up or 3-up rainbow grid; full mega-menu; hero at 60–76px |
| Wide | > 1200px | Same as desktop with more outer breathing room; max content width 1200px |

### Touch Targets
- `button-primary` renders at 48 × 48px minimum.
- `button-icon` is 40 × 40px (under WCAG 44 — used inside dense desktop UI).
- `text-input` height is 44px throughout.

### Collapsing Strategy
- Nav collapses to hamburger at < 640px.
- Mega-menu becomes accordion on tablet.
- Rainbow grids reduce columns rather than scaling cards.
- Pricing comparison table converts to horizontally-scrollable swipe at < 1024px.

### Image Behavior
- Rainbow card UI screenshots crop to fit container.
- Hero illustrations bleed full-width on mobile.
- Customer logo strip wraps to 2–3 rows at smaller breakpoints.

### Container Queries
Pricing tier cards use `@container (min-width: 360px)` for vertical-to-inline price display.

## 11. Content & Voice

### Tone
**Methodical, team-affirming, approachable-confident.** Asana writes about teams achieving goals together. Headlines say "Where work happens" and "Manage projects, processes, and goals" — claims that emphasize collective work over individual productivity. Body copy uses concrete team examples (marketing, ops, design) with workflow specifics.

### Microcopy Patterns
- **CTA verbs**: "Get started", "Try for free", "Watch demo", "Talk to sales", "See how it works". Direct, methodical.
- **Section eyebrows**: 13px / 600 / 0.04em uppercase, often in brand purple — "PROJECT MANAGEMENT", "GOALS", "PORTFOLIOS".
- **Feature titles**: One-line capability — "See how work moves across teams" not "Unleash team potential".
- **Project status names**: Direct — "On track", "At risk", "Off track", "Done".

### Empty States
"No projects yet — create your first project to get started." Single line muted text plus brand-purple CTA link.

### Error Messages
Short, friendly, action-oriented. "Couldn't connect — let's try again" not "Oops!". Errors carry coral icon-x and inline guidance.

### Success Confirmations
Toast: "Project created", "Status updated", "Goal saved". Bg-dark, cream text, deep shadow, auto-dismiss 3s.

### CTA verb conventions
The brand prefers methodical present-imperative: "Get started", "Try for free", "Manage projects". Free-trial nudges are explicit ("Free for up to 10 users").

## 12. Dark Mode & Theming

Asana's in-product UI ships a dark variant — canvas inverts to `#1e1f21`, brand purple slightly desaturated (`#8d83ff`), rainbow palette desaturated to tonal variants. The marketing surface is **light-only** with the white-and-warm-cream alternation as the primary rhythm.

In-page dark contrast on marketing is achieved through the single `hero-card-dark` band per page.

## 13. Lineage & Influences

Asana descends from the **friendly enterprise SaaS tradition** — Slack (warm humanist sans), Mailchimp pre-2023 (rainbow accents), Trello (color-coded projects). The Asana Sans humanist family is closest to Slack's Larsseit and HubSpot's Lexend — humanist with subtle character without being overt. The six-color rainbow is Asana's contribution: a fixed semantic system mapping pastel surfaces to project colors that exists inside the actual product UI.

Where Monday.com's chromatic system is high-saturation, Asana's is warm-soft — the brand identity sits between Linear's monochrome and Monday's saturation. The brand purple `#796eff` references contemporary AI-tool brand colors but lands warmer/softer than the deep purples used by Anthropic or Cursor.

- **Slack** — Friendly humanist sans, rainbow accent ladder. https://slack.com
- **Mailchimp (pre-2023)** — Rainbow pastel surfaces, humanist voice.
- **Trello** — Color-coded project labels.
- **Notion** — Editorial whitespace and 96px rhythm.
- **Asana Sans** (custom) — Humanist character with moderate x-height.

## 14. Do's and Don'ts

### Do
- Keep canvas white with warm-cream alternation between bands.
- Use brand purple `#796eff` for the single voltage CTA per viewport.
- Map rainbow pastel surfaces to feature semantic: coral=priority, peach=warmth, sage=progress, sky=overview, lavender=advanced, rose=creative.
- Anchor every band at 96px vertical padding.
- Use Asana Sans (humanist) — don't substitute Poppins (geometric).
- Display weight at 600 — between Linear's 500 and Monday's 800.
- Use the project-color chip strip as a hero eyebrow — it signals the rainbow system.
- Use status chips with their canonical color/text pairs.
- Body line-height at 1.55. Approachable but not paper-book.
- Lift caption-eyebrows to brand purple color when accenting CTA region.

### Don't
- Don't use cool greys for borders. Asana's hairlines are warm-tinted.
- Don't desaturate brand purple. `#796eff` is the soft-electric voltage.
- Don't substitute Poppins (geometric) for Asana Sans (humanist). The character is different.
- Don't use display weight below 600 or above 700. Asana's middle ground is the brand.
- Don't repeat the same rainbow pastel in two consecutive cards.
- Don't pair coral+peach adjacent — both warm-orange-leaning. Pair coral with sage or sky instead.
- Don't add atmospheric gradients to hero. Pure white + rainbow chip eyebrow is the move.
- Don't replace warm-cream alternation with pure white throughout. The alternation is the brand rhythm.
- Don't use status chips outside their semantic meaning.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:           #ffffff (pure white)
Bg Warm:               #f6f4ef (warm cream — alternating band)
Text / Ink:            #1e1f21 (soft near-black)
Body:                  #3e3e44
Muted:                 #6d6e78
Brand / Asana Purple:  #796eff (primary CTA + voltage)
Brand Soft / Lavender: #e7e5fe
Rainbow Coral:         #ff7c70 (soft #ffd9d3) — priority
Rainbow Peach:         #ffb15c (soft #ffe6cc) — warmth
Rainbow Sage:          #74c990 (soft #d4ecdc) — progress
Rainbow Sky:           #5cc4f0 (soft #d3edfa) — overview
Rainbow Lavender:      #a99cff (soft #ebe7fe) — advanced
Rainbow Rose:          #f08fc0 (soft #fadcec) — creative
Bg Dark:               #1e1f21
Hairline:              #e3e1db (warm-tinted)
Link:                  #3e60ff (inline body link)
```

### Example Component Prompts

1. "Create a hero band on `#ffffff` canvas. Above the headline, place a 6-pill project-color chip strip — each 28×8px pill, 9999px radius, rainbow-soft colors (coral, peach, sage, sky, lavender, rose) in sequence with subtle pulse animation. Below: Asana Sans 60px / 600 / 1.08 / -0.018em headline ('Where work happens'), 19px / 400 `#3e3e44` subhead at 1.55. Primary CTA `#796eff` Asana-purple (white, 16px / 600, 14px radius, 14×24px). Secondary CTA white with 1px `#c3c0b6` border."

2. "Build a 2-up rainbow pastel pair with semantic contrast: coral `#ffd9d3` left framing a Priority/Urgent feature; sage `#d4ecdc` right framing a Progress/Done feature. Each card 20px radius, 48px padding. Title in Asana Sans 28px / 600. Body in 17px / 400 / 1.55."

3. "Compose a project status pill row inside a feature demo: 3 horizontal pills each 9999px radius, 4×10px padding, 12px / 600. Sage 'On track' (white text), peach 'At risk' (ink text), coral 'Off track' (white text)."

4. "Design a dark mid-page CTA band: full-bleed `#1e1f21` background, 64px padding, 20px outer radius. White Asana Sans 44px / 600 headline. Single white-on-dark `button-on-dark` CTA (white background, ink text, 14px radius, 14×24px padding)."

5. "Build a pricing tier card: white surface, 14px radius, 32px padding, 1px border `#efece5`, ambient shadow. Plan name in Asana Sans 22px / 600, price in 36px / 600 / -0.01em, feature checklist in 17px / 400 with brand-purple check icons. Primary CTA at bottom — Asana-purple, 14px radius, 14×24px padding."

6. "Design the top nav: 64px-tall sticky bar, `rgba(255,255,255,0.92)` white-tinted backdrop with 16px backdrop-blur. Asana wordmark left in ink with small project-color dot accent. Mega-menu center (Product / Solutions / Use Cases / Resources / Pricing) — opens full-width panel on hover. Right cluster: 'Talk to sales' text link, 'Sign in' text link, 'Try for free' primary CTA."

### Iteration Guide
1. Start with pure white `#ffffff` canvas. Alternate with warm cream `#f6f4ef` between bands.
2. Place one `button-primary` per viewport in Asana-purple `#796eff`.
3. Match rainbow pastel surface to feature semantic. Pair contrasting semantics (priority+progress, overview+advanced) in 2-up grids.
4. Display weight is 600. Going to 500 reads as wrong-brand; going to 700 reads as Monday.
5. Asana Sans is humanist — don't substitute Poppins (geometric) or Inter (geometric-modern).
6. Use the project-color chip strip as a hero eyebrow.
7. Anchor every band at 96px vertical padding.
8. Status chips use saturated rainbow colors with white text — except yellow-adjacent (peach) which uses ink text for AA contrast.
