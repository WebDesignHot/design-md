---
name: Lego
tagline: Lego Yellow + Red on white — primary-color toy theatre, custom Lego Sans, brick-as-hero photography.
updated_at: 2026-05-08T00:00:00.000Z
published_at: 2026-05-08T00:00:00.000Z
author: webdesignhot
source_url: https://www.lego.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [marketplace]
tags: [light, playful, sans, bright, rounded, dense]
preview_swatch: ['#ffffff', '#ffd500', '#d62027']
related: [nintendo, duolingo, fortnite]
description: 'Lego''s site is the unembarrassed primary-color toy theatre of the web. The canvas is white, headings sit in Lego Sans (the in-house custom rounded humanist sans, descended from VAG Rounded) at 32–56px, and the brand identity is the dual primary palette — Lego Yellow `#ffd500` and Lego Red `#d62027`, with secondary blue `#0055bf` and green `#179a35` reserved for product-line accents. Where Nintendo chose single Nintendo Red and white, Lego embraced the **full primary spectrum** — yellow, red, blue, green — the same palette Lego bricks have been molded in since 1958. Photography is brick-stacked product shots with primary-color backdrops, rarely abstract. Voice is enthusiastic-direct: "Build something rare", "Find your build". The whole brand reads as the **toy aisle of the web** at maximum saturation.'

colors:
  bg: '#ffffff'
  bg-soft: '#f5f5f5'
  bg-warm: '#fffaf0'
  surface: '#ffffff'
  surface-soft: '#fafafa'
  surface-strong: '#f0f0f0'
  brand: '#ffd500'
  brand-hover: '#e6c000'
  brand-pressed: '#cca900'
  brand-deep: '#a89200'
  brand-tint: '#fff8d0'
  brand-soft: '#ffec8a'
  on-brand: '#1a1a1a'
  red: '#d62027'
  red-deep: '#a8161c'
  red-soft: '#ffd5d8'
  blue: '#0055bf'
  blue-deep: '#003e8e'
  blue-soft: '#cee0f5'
  green: '#179a35'
  green-deep: '#0c7826'
  green-soft: '#cdf0d4'
  text: '#1a1a1a'
  text-strong: '#000000'
  text-muted: '#5a5a5a'
  text-soft: '#8a8a8a'
  text-faint: '#bcbcbc'
  text-on-brand: '#1a1a1a'
  text-on-red: '#ffffff'
  text-on-blue: '#ffffff'
  text-on-green: '#ffffff'
  link: '#0055bf'
  link-hover: '#003e8e'
  selected-bg: '#fff8d0'
  border: '#e0e0e0'
  border-strong: '#cccccc'
  border-soft: '#f0f0f0'
  border-brand: '#ffd500'
  age-0plus: '#179a35'
  age-6plus: '#0055bf'
  age-12plus: '#d62027'
  age-adult: '#1a1a1a'
  success: '#179a35'
  warning: '#ffd500'
  danger: '#d62027'
  info: '#0055bf'

typography:
  display:
    family: '"Lego Sans", "VAG Rounded", "Avenir Next Rounded", "Helvetica Neue", -apple-system, sans-serif'
    weights: [600, 700, 800]
  body:
    family: '"Lego Sans", "Avenir Next", "Helvetica Neue", -apple-system, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 56, weight: 800, lineHeight: 1.05, tracking: '-0.018em', family: display }
    display-xl:      { size: 48, weight: 800, lineHeight: 1.1,  tracking: '-0.015em', family: display }
    display-lg:      { size: 40, weight: 700, lineHeight: 1.15, tracking: '-0.012em', family: display }
    h1:              { size: 32, weight: 700, lineHeight: 1.2,  tracking: '-0.008em', family: display }
    h2:              { size: 24, weight: 700, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h3:              { size: 20, weight: 700, lineHeight: 1.3,  tracking: '0',        family: display }
    h4:              { size: 16, weight: 700, lineHeight: 1.35, tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 700, lineHeight: 1.2,  tracking: '0.10em',   family: body }
    body-lg:         { size: 17, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body:            { size: 15, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.45, tracking: '0',        family: body }
    label:           { size: 12, weight: 700, lineHeight: 1.3,  tracking: '0.04em',   family: body }
    button:          { size: 15, weight: 700, lineHeight: 1.0,  tracking: '0.02em',   family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    age-badge:       { size: 14, weight: 800, lineHeight: 1.0,  tracking: '0.04em',   family: display }

radius:
  micro: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 80, 96, 120]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  ease-emphasized: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1280
  wide: 1440

shadows:
  card: '0 2px 8px rgba(0, 0, 0, 0.08)'
  card-hover: '0 6px 20px rgba(0, 0, 0, 0.14)'
  modal: '0 20px 60px rgba(0, 0, 0, 0.20)'
  brick: '0 4px 0 0 rgba(0, 0, 0, 0.08)'

accessibility:
  contrast-text-on-bg: 16.1
  contrast-text-on-brand: 13.4
  focus-ring: '3px solid #0055bf'
  reduced-motion-honored: true
  note: 'Yellow `#ffd500` requires DARK text (not white) — `text-on-brand: #1a1a1a` ensures AAA contrast. Red and Blue use white text.'

components:
  button-primary: { bg: brand, text: text-on-brand, padding: '14px 28px', radius: pill, font: button }
  button-red: { bg: red, text: text-on-red, padding: '14px 28px', radius: pill, font: button }
  button-blue: { bg: blue, text: text-on-blue, padding: '14px 28px', radius: pill, font: button }
  button-secondary: { bg: bg, text: text, padding: '12px 26px', radius: pill, border: '2px solid border-strong' }
  button-ghost: { bg: transparent, text: blue, padding: '10px 20px' }
  card: { bg: surface, radius: 12, padding: 16, shadow: 'card' }
  pill: { bg: surface-strong, text: text, radius: pill, padding: '4px 10px', font: 'label' }
  age-badge: { bg: 'age-color', text: on-brand, radius: 8, padding: '6px 10px', font: 'age-badge' }
  input: { bg: bg, border: '2px solid border-strong', text: text, radius: 8, padding: '12px 16px', focus-border: blue }

lineage:
  summary: 'Lego''s marketing system descends directly from the 1958 plastic-brick patent — yellow, red, blue, green molded primary colors that have stayed identical for 67 years. The website preserves this primary palette as canvas-level brand identity: every product line, every age-rating badge, every CTA pulls from yellow/red/blue/green. Lego Sans (custom rounded humanist sans, VAG Rounded descendant) anchors typography. Photography is brick-stacked product shots — physical bricks photographed against primary-color backdrops, never abstract. Voice is enthusiastic-direct: "Build something rare", "Discover your next build". The brand reads as the toy aisle of the web at maximum saturation — the same Lego that has been the same Lego since your grandparents.'
  influences:
    - { name: 'Lego brick patent (1958)', role: 'primary-color palette molded into the original plastic bricks', url: 'https://en.wikipedia.org/wiki/Lego' }
    - { name: 'VAG Rounded (Volkswagen, 1979)', role: 'rounded humanist sans typographic ancestor', url: 'https://en.wikipedia.org/wiki/VAG_Rounded' }
    - { name: 'Lego Sans (custom)', role: 'in-house wordmark + UI typography', url: 'https://www.lego.com' }
    - { name: 'Pantone 116 (Yellow), 186 (Red), 286 (Blue), 354 (Green)', role: 'four primary-color anchors since 1958', url: 'https://www.pantone.com' }
    - { name: 'Disney parks signage', role: 'family-first chromatic palette discipline', url: 'https://disneyparks.disney.go.com' }
---

## 1. Visual Theme & Atmosphere

Lego's site is the unembarrassed primary-color toy theatre of the web. The canvas is pure white, headings sit in Lego Sans (custom rounded humanist sans, VAG Rounded descendant) at 32–56px Bold, and the brand identity is the **dual primary palette** — Lego Yellow `#ffd500` and Lego Red `#d62027`, with secondary Blue `#0055bf` and Green `#179a35` reserved for product-line accents and age-rating badges.

Where Nintendo chose single Nintendo Red and Disney chose Disney Blue, Lego embraced the **full primary spectrum** — yellow, red, blue, green — the same palette Lego bricks have been molded in since 1958. Photography is brick-stacked product shots with primary-color backdrops, rarely abstract: real bricks, real builds, real plastic. Cards have 12-16px radius and gentle shadows.

Voice is enthusiastic-direct: "Build something rare", "Discover your next build". The whole brand reads as the **toy aisle of the web** at maximum saturation. Importantly, the primary CTA uses **yellow with dark text** (not white) — yellow `#ffd500` against white text fails AA contrast (~1.7:1), so the brand uses dark text on yellow (~13.4:1) and white text on red/blue/green when those are CTA bg.

**Key Characteristics:**
- White canvas + 4-color primary palette (yellow / red / blue / green)
- Lego Sans rounded humanist sans
- Pill-radius CTAs (9999px)
- 12-16px card radius
- **Dark text on yellow** (accessibility), white text on red/blue/green
- Age-rating badge color system (green = 0+, blue = 6+, red = 12+, dark = adult)
- Photography brick-stacked, never abstract
- Body 15px (denser than typical SaaS — product-grid first)
- Light-only canvas
- Enthusiastic-direct voice

## 2. Color Palette & Roles

### Primary
- **Background** (`#ffffff`): white.
- **Text** (`#1a1a1a`): body.

### Brand — Lego Yellow (primary CTA)
- **Brand** (`#ffd500`): primary CTA + brand mark color.
- **Brand Hover** (`#e6c000`), **Pressed** (`#cca900`).
- **Brand Tint** (`#fff8d0`): selection wash.
- **Text on Brand** (`#1a1a1a`): **DARK text** on yellow (AA accessibility — never white).

### Red — secondary CTA + danger
- **Red** (`#d62027`): emphasized CTA, error state, high-tier age.
- **Red Deep** (`#a8161c`), **Red Soft** (`#ffd5d8`).

### Blue — link + tier
- **Blue** (`#0055bf`): links, mid-tier age badges.
- **Blue Deep** (`#003e8e`), **Blue Soft** (`#cee0f5`).

### Green — success + tier
- **Green** (`#179a35`): success, low-tier age badges.
- **Green Deep** (`#0c7826`), **Green Soft** (`#cdf0d4`).

### Age-Rating Color System
- **Age 0+** (`#179a35` green): toddler builds.
- **Age 6+** (`#0055bf` blue): elementary builds.
- **Age 12+** (`#d62027` red): teen / advanced.
- **Adult** (`#1a1a1a` dark): expert / display sets.

### Borders
- **Border** (`#e0e0e0`), **Border Strong** (`#cccccc`).

### Semantic
- success green, warning yellow, danger red, info blue.

## 3. Typography Rules

### Font Family
- **Display + Body**: Lego Sans (custom). Falls back to VAG Rounded → Avenir Next Rounded → Helvetica Neue.
- **Mono**: system mono.

### Hierarchy

| Role | Font | Size | Weight | LH | Tracking |
|------|------|------|--------|-----|----------|
| display-hero | Lego Sans | 56 | 800 | 1.05 | -0.018em |
| display-lg | Lego Sans | 40 | 700 | 1.15 | -0.012em |
| h1 | Lego Sans | 32 | 700 | 1.2 | -0.008em |
| h2 | Lego Sans | 24 | 700 | 1.25 | -0.005em |
| h3 | Lego Sans | 20 | 700 | 1.3 | 0 |
| eyebrow | Lego Sans | 12 | 700 | 1.2 | 0.10em UPPER |
| body | Lego Sans | 15 | 400 | 1.5 | 0 |
| label | Lego Sans | 12 | 700 | 1.3 | 0.04em |
| button | Lego Sans | 15 | 700 | 1.0 | 0.02em |
| age-badge | Lego Sans | 14 | 800 | 1.0 | 0.04em |

### Principles
- **Lego Sans for everything** — VAG Rounded as fallback only.
- **Heavy weights on display** (700-800).
- **Body 15px** — slightly denser for product-grid density.
- **Mixed case display, UPPER eyebrows + age badges.**

## 4. Component Stylings

### Buttons (5 variants — pill-radius)

**Primary** — Yellow with DARK text:
- bg `#ffd500`, **text `#1a1a1a`** (dark — accessibility), 15px Lego Sans 700 0.02em
- Padding 14×28, **radius 9999 (pill)**
- Hover: bg `#e6c000`, scale 1.02

**Red** — emphasized CTA:
- bg `#d62027`, white text, otherwise primary

**Blue** — secondary action:
- bg `#0055bf`, white text, otherwise primary

**Secondary** — bordered:
- bg white, text dark, 2px gray border, pill radius

**Ghost**: bg transparent, text blue, padding 10×20.

### Cards
- bg white, **12-16px radius**, padding 16
- Soft shadow `0 2px 8px rgba(0,0,0,0.08)`
- Hover: shadow `0 6px 20px rgba(0,0,0,0.14)`
- Featured: `0 4px 0 0 rgba(0,0,0,0.08)` flat-color drop (Lego brick metaphor)

### Age Badge (the brand's signature component)
- bg in age-color (green/blue/red/dark), white text
- 8px radius (rectangular like a brick), 6×10 pad
- 14px Lego Sans 800 0.04em UPPER, e.g. "6+", "12+", "ADULT"

### Pills (set tags, themes)
- bg `surface-strong`, text dark, pill radius

### Inputs
- bg white, 2px gray border, 8px radius
- Focus: border blue (not yellow — readability)

### Navigation
- 64px sticky header, white bg
- Lego wordmark left (red on yellow tile), top-level nav center, account + cart right

## 5. Layout Principles

- Base 4px, 56-96px between sections (denser than editorial)
- Page max width 1280px
- Hero: brick-stack product photo right + headline left
- Product grid: 4-up at desktop, 2-up at tablet, 1-up at mobile

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 4 | inline tags |
| Standard | 8 | **age badges + inputs** |
| Comfortable | 12 | **default cards** |
| Relaxed | 16 | featured cards |
| Featured | 24 | hero modules |
| Pill | 9999 | **buttons** |

## 7. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| 1 | `0 2px 8px rgba(0,0,0,0.08)` resting cards |
| 2 | `0 6px 20px rgba(0,0,0,0.14)` hover |
| 3 | `0 4px 0 0 rgba(0,0,0,0.08)` brick-style drop (featured) |
| 4 | `0 20px 60px rgba(0,0,0,0.20)` modal |

### Shadow Philosophy
Soft shadows for cards, occasional **flat-color drop** (4px, no blur) for featured items — evokes the physical brick-stacking metaphor.

## 8. Interaction & Motion

- Standard ease, emphasized for celebrate states
- 150ms hover, 240ms standard, 400ms slow
- Card hover: scale 1.02 + shadow lift
- Build-instruction modals: stepped reveal animation

## 9. Accessibility & A11y

- text on bg: `#1a1a1a` on `#ffffff` = **16.1:1** AAA
- **on-brand on brand: `#1a1a1a` on `#ffd500` = 13.4:1 AAA** (dark text on yellow — required, not white)
- white on red: `#ffffff` on `#d62027` = 5.4:1 AA
- white on blue: `#ffffff` on `#0055bf` = 7.6:1 AAA
- 3px blue focus ring (distinct from brand yellow for keyboard nav)

Age badges use `aria-label="Recommended for ages 12 and up"`. Brick-photography decorative `aria-hidden`.

## 10. Responsive Behavior

mobile <479: hero 56→32; nav hamburger; 1-up grid. tablet: 2-up. desktop+: 4-up.

44×44 min touch targets.

## 11. Content & Voice

### Tone
**Enthusiastic-direct.** Friendly, family-first, never corporate.

### Microcopy patterns
- Primary CTA: **"Add to Bag"** / **"Build now"** / **"Find your build"**
- Sign-up: **"Join VIP"**
- Errors: **"Hmm, something went wrong. Try again."**
- Empty: **"No sets in your bag yet — explore our themes."**

### CTA verb conventions
- **Build / Add / Discover / Explore**
- Avoid: NFT-bro language, urgent ("Last chance")

## 12. Dark Mode & Theming

**Light-only on web.** Primary-color brand identity is anchored to white canvas — toy-aisle metaphor doesn't translate to dark.

## 13. Lineage & Influences

Lego's marketing system descends from the 1958 plastic-brick patent — yellow, red, blue, green molded primary colors that have stayed identical for 67 years. The site preserves this primary palette as canvas-level brand identity. Lego Sans (custom rounded humanist) anchors typography.

**Named influences:**
- **Lego brick patent (1958)** — primary-color palette
- **VAG Rounded (Volkswagen, 1979)** — typographic ancestor
- **Lego Sans (custom)** — in-house UI typography
- **Pantone 116 / 186 / 286 / 354** — four primary anchors
- **Disney parks signage** — family-first chromatic discipline

## 14. Do's and Don'ts

### Do
- **White canvas + Lego Yellow `#ffd500` + Red + Blue + Green** primary palette.
- **DARK text on yellow CTA** — accessibility (never white).
- **White text on red/blue/green CTAs.**
- **Pill-radius CTAs, 12-16px cards.**
- **Age-badge color system** — green 0+ / blue 6+ / red 12+ / dark adult.
- **Brick-stacked product photography** with primary-color backdrops.
- **Mixed case display, UPPER eyebrows + age badges.**

### Don't
- **Don't put white text on yellow.** 1.7:1 contrast fails AA.
- **Don't substitute primary palette colors.** Pantones 116/186/286/354 specifically.
- **Don't add gradients on CTA.**
- **Don't all-caps headlines.**
- **Don't use abstract photography** without brick presence.
- **Don't add a friendly mascot beyond the minifigure.**
- **Don't add dark mode** — primary-color brand fails on dark.

## 15. Agent Prompt Guide

### Quick Color Reference
- bg: `#ffffff`
- text: `#1a1a1a`
- brand (Lego Yellow): `#ffd500` / hover `#e6c000` (use **dark text** on yellow)
- red: `#d62027` / blue: `#0055bf` / green: `#179a35`
- age badges: 0+ green, 6+ blue, 12+ red, adult dark

### Example Component Prompts

> Build a Lego-style hero: white canvas, brick-stacked product photo right 50%, 56px Lego Sans Bold heading "Build something rare" left, 17px subhead. Primary CTA "Find your build" pill-radius yellow `#ffd500` with **dark text** `#1a1a1a` 15px Lego Sans 700 0.02em.

> Design a set card: white surface, 12px radius, 16px pad, soft shadow. Brick-stack photo top, 20px Lego Sans 700 set name, age-badge top-right (green 0+ / blue 6+ / red 12+ / dark adult), price right-aligned 24px bold.

> Render an age badge: 8px radius, age-color bg (e.g. blue `#0055bf`), white 14px Lego Sans 800 0.04em UPPER "6+", padding 6×10.

> Build an "Add to Bag" CTA: pill radius, Lego Yellow bg, **dark `#1a1a1a` text** 15px Lego Sans 700 0.02em, padding 14×28. Hover: bg `#e6c000`, scale 1.02.

> Design a search input: white bg, 2px gray border, 8px radius, padding 12×16, placeholder "Find sets, themes, ages…". Focus border blue `#0055bf` (not yellow — readability).

### Iteration Guide

1. **White + 4-color primary palette + Lego Sans.**
2. **Pill-radius CTAs, 12-16px cards.**
3. **DARK text on yellow** — accessibility-mandatory.
4. **White text on red/blue/green CTAs.**
5. **Age-badge color system anchors set discoverability.**
6. **Brick-stacked photography, never abstract.**
7. **Body 15px — denser product-grid feel.**
8. **Reject white-on-yellow, abstract photo, dark mode, gradient CTAs.**
