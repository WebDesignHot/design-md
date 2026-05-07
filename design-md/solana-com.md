---
name: Solana
tagline: Solana Gradient + Diatype on near-black — Layer 1 chain marketing as cinematic experiment, magenta-purple-cyan brand prism.
updated_at: 2026-05-08T00:00:00.000Z
published_at: 2026-05-07T20:02:49.970Z
author: webdesignhot
source_url: https://solana.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [fintech]
tags: [dark, brutalist, sans, bright, structured]
preview_swatch: ['#000000', '#9945ff', '#14f195']
related: [phantom-app, arbitrum, ethereum-org]
description: 'Solana''s site is the Layer 1 chain marketing closest in spirit to Apple''s product launches. The canvas is true black `#000000`, headings sit in ABC Diatype (Dinamo Type Foundry''s neo-grotesque sans, used by Linear and Vercel) at 64–96px, and the brand identity is the Solana Gradient — a magenta-to-purple-to-cyan spectrum (`#dc1fff` → `#9945ff` → `#14f195`) that anchors every brand mark, hero band, and chart-data fill. Where Phantom went editorial-restrained and MetaMask went friendly-warm, Solana went **cinematic-experimental**: full-bleed video heroes, gradient overlays on hero typography, dense ecosystem grids, and CTA buttons that switch between the gradient (bg) and pure white. Voice is technical-confident: "The community-run blockchain that''s anywhere".'

colors:
  bg: '#000000'
  bg-deep: '#040407'
  bg-section: '#0a0a0e'
  bg-elev: '#13131a'
  surface: '#0a0a0e'
  surface-strong: '#13131a'
  surface-translucent: 'rgba(0, 0, 0, 0.85)'
  brand-magenta: '#dc1fff'
  brand-purple: '#9945ff'
  brand-cyan: '#14f195'
  brand-gradient: 'linear-gradient(90deg, #dc1fff 0%, #9945ff 50%, #14f195 100%)'
  brand-tint: 'rgba(153, 69, 255, 0.15)'
  on-brand: '#000000'
  text: '#ffffff'
  text-strong: '#ffffff'
  text-muted: '#a8aab2'
  text-soft: '#7a7d88'
  text-faint: '#5a5e6a'
  text-on-brand: '#000000'
  link: '#14f195'
  link-hover: '#ffffff'
  selected-bg: 'rgba(153, 69, 255, 0.15)'
  border: 'rgba(255, 255, 255, 0.08)'
  border-strong: 'rgba(255, 255, 255, 0.20)'
  border-brand: '#9945ff'
  ecosystem-color-1: '#dc1fff'
  ecosystem-color-2: '#9945ff'
  ecosystem-color-3: '#14f195'
  success: '#14f195'
  warning: '#ffba33'
  danger: '#ff4757'
  info: '#9945ff'

typography:
  display:
    family: '"ABC Diatype", "Söhne", "Inter", -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [400, 500, 700]
  body:
    family: '"ABC Diatype", "Söhne", "Inter", -apple-system, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"ABC Diatype Mono", "JetBrains Mono", ui-monospace, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 96, weight: 700, lineHeight: 0.95, tracking: '-0.025em', family: display }
    display-xl:      { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.02em',  family: display }
    display-lg:      { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.018em', family: display }
    h1:              { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.012em', family: display }
    h2:              { size: 36, weight: 500, lineHeight: 1.15, tracking: '-0.008em', family: display }
    h3:              { size: 24, weight: 500, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 18, weight: 500, lineHeight: 1.3,  tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 700, lineHeight: 1.2,  tracking: '0.16em',   family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 15, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 12, weight: 600, lineHeight: 1.3,  tracking: '0.10em',   family: body }
    button:          { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0.04em',   family: body }
    address:         { size: 13, weight: 400, lineHeight: 1.5,  tracking: '0',        family: mono }

radius:
  none: 0
  micro: 2
  sm: 4
  md: 6
  lg: 8
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 80, 96, 128, 160, 200]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 72

motion:
  ease-standard: 'cubic-bezier(0.65, 0, 0.35, 1)'
  ease-emphasized: 'cubic-bezier(0.85, 0, 0.15, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 320
  duration-cinematic: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce — disables gradient animations'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1280
  wide: 1440

shadows:
  card: '0 1px 0 0 rgba(255, 255, 255, 0.10)'
  card-hover: '0 0 0 1px rgba(153, 69, 255, 0.6)'
  glow-purple: '0 0 32px rgba(153, 69, 255, 0.40)'
  glow-cyan: '0 0 32px rgba(20, 241, 149, 0.40)'
  modal: '0 24px 64px rgba(0, 0, 0, 0.80)'

accessibility:
  contrast-text-on-bg: 21
  contrast-text-on-brand-cyan: 13.4
  contrast-text-on-brand-purple: 4.6
  focus-ring: '2px solid #9945ff + 1px outset gap'
  reduced-motion-honored: true

components:
  button-primary: { bg: brand-gradient, text: on-brand, padding: '12px 28px', radius: 4, font: button }
  button-secondary: { bg: transparent, text: text, padding: '12px 28px', radius: 4, border: '1px solid border-strong' }
  button-ghost: { bg: transparent, text: brand-cyan, padding: '10px 20px' }
  card: { bg: surface, radius: 4, padding: 24, border: '1px solid border' }
  pill: { bg: bg-elev, text: text, border: '1px solid border-strong', radius: pill, padding: '4px 12px', font: 'label' }
  input: { bg: bg-elev, border: '1px solid border-strong', text: text, radius: 4, padding: '12px 16px', focus-border: brand-purple }

lineage:
  summary: 'Solana''s marketing system descends from Anatoly Yakovenko''s 2017 white-paper origin and the 2020-2021 brand refresh that introduced the Solana Gradient — magenta-to-purple-to-cyan (`#dc1fff` → `#9945ff` → `#14f195`). The gradient anchors every brand mark, hero band, and chart-data fill. ABC Diatype (Dinamo Type Foundry''s neo-grotesque sans, used by Linear and Vercel) handles every heading. Where Ethereum-side wallets went editorial (Phantom) or friendly (MetaMask), Solana''s site went cinematic-experimental — full-bleed video heroes, gradient overlays on hero typography, dense ecosystem grids. Voice is technical-confident: "The community-run blockchain that''s anywhere".'
  influences:
    - { name: 'Anatoly Yakovenko (founder, 2017 white paper)', role: 'Solana origin', url: 'https://solana.com/news/anatoly-yakovenko' }
    - { name: 'ABC Diatype by Dinamo', role: 'neo-grotesque sans, Linear/Vercel sibling', url: 'https://abcdinamo.com/typefaces/diatype' }
    - { name: 'Solana Gradient (2020-2021 refresh)', role: 'magenta-purple-cyan brand prism', url: 'https://solana.com' }
    - { name: 'Apple product launches', role: 'cinematic Layer 1 marketing as Apple-paced experimental', url: 'https://www.apple.com' }
    - { name: 'Linear + Vercel + Cursor', role: 'tech-editorial dark-canvas contemporaries', url: 'https://linear.app' }
---

## 1. Visual Theme & Atmosphere

Solana's site is the Layer 1 chain marketing closest in spirit to Apple's product launches. The canvas is true black `#000000`, headings sit in ABC Diatype (Dinamo Type Foundry's neo-grotesque sans, used by Linear and Vercel) at 64–96px, and the brand identity is the **Solana Gradient** — a magenta-to-purple-to-cyan spectrum (`#dc1fff` → `#9945ff` → `#14f195`) that anchors every brand mark, hero band, and chart-data fill.

Where Phantom went editorial-restrained and MetaMask went friendly-warm, Solana went **cinematic-experimental**: full-bleed video heroes, gradient overlays on hero typography, dense ecosystem grids, and CTA buttons that switch between the gradient (bg) and pure white. Voice is technical-confident: "The community-run blockchain that's anywhere".

The brand commits to magazine-density at marketing scale. Section type is 0.16em-tracked all-caps eyebrows in 12px sitting above 96px Diatype display. Cards use 4px radius and hairline rules (1px white-8% border). The whole experience reads as **AAA tech product launch** filtered through a deflationary chain's confidence.

**Key Characteristics:**
- True black canvas `#000000`
- Solana Gradient (magenta-purple-cyan) anchors brand marks
- ABC Diatype neo-grotesque sans
- Hero-typography gradient overlays
- 4px radius on UI (gentle rectangular)
- Hairline borders + 1px purple-glow shadows
- Dense ecosystem grids
- Mono for addresses + transaction signatures
- Dark-only canvas
- Technical-confident voice
- Cinematic motion at 480ms+ for hero transitions

## 2. Color Palette & Roles

### Primary
- **Background** (`#000000`): true black.
- **Text** (`#ffffff`): pure white.

### Brand — Solana Gradient
- **Brand Magenta** (`#dc1fff`): gradient stop 1.
- **Brand Purple** (`#9945ff`): gradient stop 2 (mid).
- **Brand Cyan** (`#14f195`): gradient stop 3.
- **Brand Gradient**: `linear-gradient(90deg, #dc1fff 0%, #9945ff 50%, #14f195 100%)` — used as bg on primary CTA, hero accent strips, chart fills.
- **Brand Tint** (15% purple): selection wash.

### Surface
- **Surface** (`#0a0a0e`), **Surface Strong** (`#13131a`), **Bg Elev** (`#13131a`).

### Borders
- **Border** (8% white), **Border Strong** (20% white), **Border Brand** = purple.

### Glow
- **Glow Purple** (`0 0 32px rgba(153, 69, 255, 0.40)`): featured cards.
- **Glow Cyan** (`0 0 32px rgba(20, 241, 149, 0.40)`): success states.

### Semantic
- success cyan, warning `#ffba33`, danger `#ff4757`, info purple.

## 3. Typography Rules

### Font Family
- **Display + Body**: ABC Diatype (Dinamo). Falls back to Söhne → Inter.
- **Mono**: ABC Diatype Mono / JetBrains Mono.

### Hierarchy

| Role | Font | Size | Weight | LH | Tracking |
|------|------|------|--------|-----|----------|
| display-hero | Diatype | 96 | 700 | 0.95 | -0.025em |
| display-lg | Diatype | 64 | 700 | 1.05 | -0.018em |
| h1 | Diatype | 48 | 700 | 1.1 | -0.012em |
| h2 | Diatype | 36 | 500 | 1.15 | -0.008em |
| h3 | Diatype | 24 | 500 | 1.25 | -0.005em |
| eyebrow | Diatype | 12 | 700 | 1.2 | 0.16em UPPER |
| body | Diatype | 15 | 400 | 1.6 | 0 |
| label | Diatype | 12 | 600 | 1.3 | 0.10em |
| button | Diatype | 14 | 500 | 1.0 | 0.04em |
| address | Diatype Mono | 13 | 400 | 1.5 | 0 |

### Principles
- **Diatype for everything**, Diatype Mono for addresses.
- **Tight tracking on display** (-0.025em hero).
- **Body 15px / 1.6** — editorial reading rhythm.
- **Heavy tracking on uppercase** (0.10-0.16em).

## 4. Component Stylings

### Buttons (3 variants — 4px radius)

**Primary** — Solana Gradient:
- bg `linear-gradient(90deg, #dc1fff, #9945ff, #14f195)`, text **black** (gradient mid is too bright for white at body)
- 14px Diatype 500 0.04em, padding 12×28, radius 4
- Hover: brightness 1.1, scale 1.02
- Note: gradient text contrast varies; using black ensures AA across all gradient stops

**Secondary** — bordered:
- bg transparent, text white, 1px white-20% border, radius 4

**Ghost**: bg transparent, text cyan `#14f195`, padding 10×20.

### Cards
- bg `#0a0a0e`, **4px radius**, padding 24
- 1px white-8% border + hairline shadow
- Hover: 1px purple ring outside (`box-shadow: 0 0 0 1px #9945ff`)
- Featured cards: glow `0 0 32px rgba(153,69,255,0.40)`

### Pills (token tags, ecosystem labels)
- bg bg-elev, text white, 1px border, pill radius
- Featured "MAINNET" pill: gradient bg, black text

### Inputs
- bg bg-elev, 1px white-20% border, 4px radius
- Focus: border purple

### Navigation
- 72px sticky header, true black bg with hairline bottom
- Solana wordmark left (gradient), top-level nav center, "Get Started" gradient pill CTA right

## 5. Layout Principles

- Base 4px, 96-200px between sections (cinematic)
- Page max width 1440px
- Hero: full-bleed video / animated gradient with overlapping headline
- Ecosystem grid: 4-up at desktop, 2-up at tablet

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0 | full-bleed video |
| Micro | 2 | indicators |
| Standard | 4 | **default for buttons, cards, inputs** |
| Comfortable | 6 | dropdowns |
| Relaxed | 8 | featured |
| Pill | 9999 | tags only |

## 7. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| 1 | 1px hairline rule | cards |
| 2 | 1px purple ring hover |
| 3 | `0 0 32px rgba(153,69,255,0.40)` purple glow | featured |
| 3 | `0 0 32px rgba(20,241,149,0.40)` cyan glow | success |
| 4 | `0 24px 64px rgba(0,0,0,0.80)` modal |

## 8. Interaction & Motion

- Standard ease (sharp tactical), emphasized for cinematic
- 100ms hover, 200ms standard, 320ms modal, 480ms cinematic hero
- Gradient on hero subtly shifts hue over 8s loop
- Card hover: 1px purple ring, 200ms

## 9. Accessibility & A11y

- white on bg = **21:1** AAA
- black on cyan = **13.4:1** AAA
- black on purple-mid = **4.6:1** AA
- 2px purple focus ring + 1px outset

Gradient text uses CSS background-clip; fallback solid color for unsupported clients. Address truncation has full-address tooltip.

## 10. Responsive Behavior

mobile <479: hero 96→48; nav hamburger; 1-up. tablet: 2-up. desktop+: 4-up.

## 11. Content & Voice

### Tone
**Technical-confident.** Sophisticated DeFi without lecturing.

### Microcopy patterns
- Primary CTA: **"Get Started"** / **"Build on Solana"** / **"Connect Wallet"**
- Errors: **"Transaction failed. Check fees."**
- Loading: **"Confirming on Solana…"**
- Success: **"Transaction confirmed (signature: ...)"**

### CTA verb conventions
- **Build / Get Started / Connect / Stake**
- Avoid: NFT-bro language, generic "Sign up"

## 12. Dark Mode & Theming

**Dark-only.** True black canvas IS the brand. No light mode published.

## 13. Lineage & Influences

Solana descends from Anatoly Yakovenko's 2017 white paper. The Solana Gradient (magenta-purple-cyan) was anchored in the 2020-2021 brand refresh. ABC Diatype handles typography (Linear/Vercel sibling). Cinematic-experimental layout reads as Apple-paced AAA tech product launch.

**Named influences:**
- **Anatoly Yakovenko** — founder, 2017 white paper
- **ABC Diatype by Dinamo** — neo-grotesque sans
- **Solana Gradient (2020-2021)** — brand prism
- **Apple product launches** — cinematic pacing
- **Linear + Vercel + Cursor** — tech-editorial dark-canvas contemporaries

## 14. Do's and Don'ts

### Do
- **True black canvas + Solana Gradient + Diatype.**
- **Gradient on primary CTA bg with black text** for AA.
- **Hairline borders, no soft shadows on UI.**
- **Purple/cyan glow on featured + success states.**
- **Mono for addresses + transaction signatures.**
- **4px radius — gentle rectangular.**
- **Cinematic motion (480ms+) on hero.**
- **Technical-confident voice.**

### Don't
- **Don't use white text on gradient bg** — contrast varies across stops.
- **Don't substitute the gradient.** Magenta-purple-cyan order is fixed.
- **Don't use rounded corners 8+ on UI.**
- **Don't add a friendly mascot.**
- **Don't add NFT-bro microcopy.**
- **Don't add light mode** without explicit Solana Foundation approval.

## 15. Agent Prompt Guide

### Quick Color Reference
- bg: `#000000`
- text: `#ffffff` / muted `#a8aab2`
- gradient: `linear-gradient(90deg, #dc1fff, #9945ff, #14f195)`
- brand-purple: `#9945ff` / cyan `#14f195` / magenta `#dc1fff`
- border: 8% white / strong 20% white

### Example Component Prompts

> Build a Solana-style hero: true black canvas, full-bleed gradient hero band animated, 96px Diatype 700 heading "Powerful for developers, Fast for everyone" with gradient text-clip mid-word "Powerful". 18px subhead in white. Primary CTA "Build on Solana" 4px-radius gradient bg with **black** text 14px Diatype 500 0.04em.

> Design an ecosystem card: surface `#0a0a0e`, 4px radius, 24px pad, 1px white-8% border. 24px Diatype protocol name, 13px UPPER 0.16em eyebrow "DEFI · SOLANA" in purple. Hover: 1px purple ring.

> Render a transaction signature: Diatype Mono 13px gray on near-black, "5j7s8...K9pQ2" truncated, copy-icon button in cyan.

> Build a "Get Started" CTA: 4px radius, gradient bg, **black** text 14px Diatype 500 0.04em "Get Started", padding 12×28. Hover: brightness 1.1, scale 1.02.

> Design a featured validator card: surface, 4px radius, glow shadow `0 0 32px rgba(153,69,255,0.40)`, 32px Diatype validator name + monospace stake amount.

### Iteration Guide

1. **True black + Solana Gradient + Diatype.**
2. **Black text on gradient bg** for AA contrast.
3. **4px radius — gentle rectangular.**
4. **Hairline borders + purple/cyan glow on featured.**
5. **Mono for addresses + signatures.**
6. **Cinematic motion (480ms+).**
7. **Technical-confident voice.**
8. **Reject white-on-gradient at body, rounded UI 8+, mascots.**
