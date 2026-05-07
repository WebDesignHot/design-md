---
name: Deliveroo
tagline: Deliveroo Teal on white — food-delivery design at maximum saturation, custom Roo Sans, kangaroo-mark mascot energy.
updated_at: 2026-05-08T00:00:00.000Z
published_at: 2026-05-07T20:02:36.853Z
author: webdesignhot
source_url: https://deliveroo.co.uk
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [marketplace]
tags: [light, dense, sans, cool, bright]
preview_swatch: ['#ffffff', '#00ccbc', '#1a1a1a']
related: [doordash, instacart, opentable]
description: 'Deliveroo''s site is the dense, deal-led counterpart to ClassPass''s wellness-marketplace energy. The canvas is white, headings sit in Roo Sans (Deliveroo''s custom rounded sans, Inter-adjacent) at 32–56px, and the brand color is "Deliveroo Teal" `#00ccbc` — a bright cyan-teal lifted directly from the kangaroo logo. Where DoorDash chose corporate-red and Uber Eats chose corporate-green, Deliveroo picked this distinctive teal that no major peer occupied. The Roo (kangaroo) mascot appears as the wordmark mark + on splash screens, but never in marketing photography. Cards have 8-12px radius, soft shadows, and house dense restaurant-listing UI (cuisine + delivery time + rating + price-band at a glance). Voice is enthusiastic-direct: "Order in 30 minutes" — utility-led, never aspirational.'

colors:
  bg: '#ffffff'
  bg-soft: '#f5f5f5'
  bg-warm: '#fffaf3'
  surface: '#ffffff'
  surface-soft: '#fafafa'
  surface-strong: '#f0f0f0'
  brand: '#00ccbc'
  brand-hover: '#00b8aa'
  brand-pressed: '#00a399'
  brand-deep: '#007a72'
  brand-tint: '#cef4f0'
  brand-soft: '#9eebde'
  on-brand: '#ffffff'
  text: '#1a1a1a'
  text-strong: '#000000'
  text-muted: '#5a5a5a'
  text-soft: '#8a8a8a'
  text-faint: '#bcbcbc'
  text-on-brand: '#ffffff'
  text-on-teal: '#1a1a1a'
  link: '#00b8aa'
  link-hover: '#007a72'
  selected-bg: '#cef4f0'
  border: '#e5e5e5'
  border-strong: '#cccccc'
  border-soft: '#f0f0f0'
  border-brand: '#00ccbc'
  rating-yellow: '#ffc833'
  urgency-red: '#e63946'
  plus-purple: '#7a3dd6'
  success: '#1a8757'
  warning: '#cc8800'
  danger: '#e63946'
  info: '#00ccbc'

typography:
  display:
    family: '"Roo Sans", "Inter", "Avenir Next", -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [600, 700, 800]
  body:
    family: '"Roo Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 56, weight: 800, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    display-xl:      { size: 48, weight: 800, lineHeight: 1.1,  tracking: '-0.018em', family: display }
    display-lg:      { size: 40, weight: 700, lineHeight: 1.15, tracking: '-0.012em', family: display }
    h1:              { size: 32, weight: 700, lineHeight: 1.2,  tracking: '-0.008em', family: display }
    h2:              { size: 24, weight: 700, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h3:              { size: 20, weight: 700, lineHeight: 1.3,  tracking: '0',        family: display }
    h4:              { size: 16, weight: 700, lineHeight: 1.35, tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 700, lineHeight: 1.2,  tracking: '0.10em',   family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body:            { size: 15, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 12, weight: 700, lineHeight: 1.3,  tracking: '0.04em',   family: body }
    button:          { size: 15, weight: 700, lineHeight: 1.0,  tracking: '0.02em',   family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.45, tracking: '0',        family: body }

radius:
  micro: 4
  sm: 8
  md: 12
  lg: 16
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 80]

layout:
  page-width: 1200
  prose-width: 720
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1200
  wide: 1440

shadows:
  card: '0 2px 8px rgba(0, 204, 188, 0.08)'
  card-hover: '0 4px 16px rgba(0, 204, 188, 0.14)'
  modal: '0 20px 40px rgba(0, 0, 0, 0.18)'

accessibility:
  contrast-text-on-bg: 16.1
  contrast-text-on-brand: 1.9
  focus-ring: '2px solid #00ccbc + 1px outset'
  reduced-motion-honored: true
  note: 'Teal `#00ccbc` is too light for white text body — UI uses dark text `#1a1a1a` on brand tint, white only on emphasized brand-deep CTAs.'

components:
  button-primary: { bg: brand, text: text-on-teal, padding: '12px 24px', radius: 8, font: button }
  button-deep: { bg: brand-deep, text: on-brand, padding: '12px 24px', radius: 8, font: button }
  button-secondary: { bg: bg, text: brand-deep, padding: '10px 22px', radius: 8, border: '1px solid border-brand' }
  button-ghost: { bg: transparent, text: brand-deep, padding: '8px 16px' }
  card: { bg: surface, radius: 12, padding: 16, shadow: 'card' }
  pill: { bg: brand-tint, text: brand-deep, radius: pill, padding: '4px 10px', font: 'label' }
  rating-pill: { bg: rating-yellow, text: text-strong, radius: pill, padding: '4px 8px', font: 'label' }
  input: { bg: bg, border: '1px solid border-strong', text: text, radius: 8, padding: '10px 14px', focus-border: brand }

lineage:
  summary: 'Deliveroo''s marketing system descends from the 2013 London-startup origin (founded by Will Shu, originally a finance-bro who wanted decent food delivered). The Roo (kangaroo) mascot was added in 2016 with the brand refresh that introduced Deliveroo Teal `#00ccbc` as the chromatic anchor. Where DoorDash went corporate-red and Uber Eats went corporate-green, Deliveroo picked this distinctive cyan-teal that no major food-delivery peer occupied. Roo Sans (custom rounded sans, Inter-adjacent) handles every heading. Body density is high (15px line-height 1.55) — restaurant pages need to fit 30+ menu items per fold. Voice is enthusiastic-direct: "Order in 30 minutes" — utility-led, never aspirational. The brand reads as friendly-fast: more energetic than Just Eat, less brand-driven than DoorDash.'
  influences:
    - { name: 'Will Shu (founder, 2013)', role: 'London finance-bro origin shaping urban-utility brand instinct', url: 'https://en.wikipedia.org/wiki/Deliveroo' }
    - { name: 'Roo Sans (custom)', role: 'in-house rounded sans, Inter-adjacent', url: 'https://deliveroo.co.uk' }
    - { name: 'Pantone 326 — Deliveroo Teal', role: 'distinctive cyan-teal differentiating from red/green peers', url: 'https://www.pantone.com' }
    - { name: 'Just Eat / DoorDash / Uber Eats', role: 'food-delivery category peers', url: 'https://www.just-eat.com' }
    - { name: 'British marketplace utility design', role: 'density + deal-led layout instincts', url: 'https://www.amazon.co.uk' }
---

## 1. Visual Theme & Atmosphere

Deliveroo's site is the dense, deal-led counterpart to ClassPass's wellness-marketplace energy. The canvas is pure white, headings sit in Roo Sans at 32–56px, and the brand color is **Deliveroo Teal** `#00ccbc` — a bright cyan-teal lifted directly from the kangaroo logo. Where DoorDash chose red and Uber Eats chose green, Deliveroo picked this distinctive teal — no major food-delivery peer occupies it.

The Roo (kangaroo) wordmark mark is present but never anthropomorphized in marketing — Deliveroo refuses the cute-mascot route despite owning a brandable animal. Cards have 8-12px radius, soft teal-tinted shadows, and house dense restaurant-listing UI (cuisine + delivery time + rating + price band at a glance). Voice is enthusiastic-direct: "Order in 30 minutes" — utility-led, never aspirational.

A note on the teal: `#00ccbc` is too light for white text at body sizes (1.9:1 contrast). Primary CTAs use **dark text on teal bg** (text-on-teal `#1a1a1a`) for body-size copy, white only when the bg shifts to `brand-deep` `#007a72` for emphasized hero CTAs. This is non-obvious but accessibility-correct.

**Key Characteristics:**
- White canvas + Deliveroo Teal `#00ccbc`
- Roo Sans custom rounded sans
- 8-12px radius on UI
- Dark text on teal bg (accessibility-correct, contrast 1.9:1 too low for white)
- Body 15px (denser than typical SaaS)
- Roo wordmark mark — never mascot-anthropomorphized
- Soft teal-tinted shadows
- Plus tier purple `#7a3dd6`
- Yellow rating pills `#ffc833`
- Light-only canvas

## 2. Color Palette & Roles

### Primary
- **Background** (`#ffffff`): white.
- **Text** (`#1a1a1a`): body.

### Brand — Deliveroo Teal
- **Brand** (`#00ccbc`): bright cyan-teal CTA + brand mark.
- **Brand Hover** (`#00b8aa`), **Pressed** (`#00a399`).
- **Brand Deep** (`#007a72`): used when white text is required on a teal bg (hero CTAs).
- **Brand Tint** (`#cef4f0`): selection wash.

### Accents
- **Rating Yellow** (`#ffc833`): rating pills.
- **Urgency Red** (`#e63946`): "Out of stock", "Closing soon".
- **Plus Purple** (`#7a3dd6`): Plus subscription tier.

### Surface
- **Surface** (`#ffffff`), **Surface Soft** (`#fafafa`), **Surface Strong** (`#f0f0f0`).

### Borders
- **Border** (`#e5e5e5`), **Border Strong** (`#cccccc`).

### Semantic
- success `#1a8757`, warning `#cc8800`, danger `#e63946`, info = brand.

## 3. Typography Rules

### Font Family
- **Display + Body**: Roo Sans (custom). Falls back to Inter → Avenir Next.
- **Mono**: system mono only.

### Hierarchy

| Role | Font | Size | Weight | LH | Tracking |
|------|------|------|--------|-----|----------|
| display-hero | Roo Sans | 56 | 800 | 1.05 | -0.02em |
| display-lg | Roo Sans | 40 | 700 | 1.15 | -0.012em |
| h1 | Roo Sans | 32 | 700 | 1.2 | -0.008em |
| h2 | Roo Sans | 24 | 700 | 1.25 | -0.005em |
| h3 | Roo Sans | 20 | 700 | 1.3 | 0 |
| eyebrow | Roo Sans | 12 | 700 | 1.2 | 0.10em UPPER |
| body | Roo Sans | 15 | 400 | 1.55 | 0 |
| label | Roo Sans | 12 | 700 | 1.3 | 0.04em |
| button | Roo Sans | 15 | 700 | 1.0 | 0.02em |

### Principles
- **Roo Sans for everything** — Inter is fallback only.
- **Body 15px** — slightly denser than typical SaaS for restaurant-list density.
- **Mixed case display, UPPER eyebrows + buttons.**

## 4. Component Stylings

### Buttons (4 variants — 8px radius)

**Primary** — Deliveroo Teal:
- bg `#00ccbc`, **text `#1a1a1a`** (dark on teal — accessibility), 15px Roo Sans 700 0.02em
- Padding 12×24, radius 8

**Deep** — emphasized hero CTA:
- bg `#007a72`, text white, otherwise primary
- Used when white text is required visually (e.g., hero on bright photo)

**Secondary** — bordered:
- bg white, text brand-deep, 1px brand border, radius 8

**Ghost**: bg transparent, text brand-deep, padding 8×16.

### Cards
- bg white, **12px radius**, padding 16
- Soft teal-tinted shadow `0 2px 8px rgba(0,204,188,0.08)`
- Hover: shadow `0 4px 16px rgba(0,204,188,0.14)`

### Restaurant Card (the brand's signature)
- White surface, 12px radius, full-bleed restaurant photo top
- Restaurant name 16px Bold + cuisine + rating-pill (yellow) + delivery-time pill (teal)
- Price band: "$" / "$$" / "$$$" labels right-aligned

### Pills
- Default: `brand-tint` bg, `brand-deep` text, pill radius
- Rating: yellow bg, dark text, "4.7" + star
- Plus tier: purple bg, white text

### Inputs
- bg white, 1px gray border, 8px radius
- Focus: border teal

### Navigation
- 64px sticky header, white bg
- Roo wordmark left (teal kangaroo), top-level nav center, "Sign in" + cart right

## 5. Layout Principles

- Base 4px, 56-80px between sections (denser)
- Page max width 1200px (denser than 1280px)
- Hero: search-with-address-input on photo bg
- Restaurant grid: 3-up at desktop, 2-up at tablet, 1-up at mobile

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 4 | inline tags |
| Standard | 8 | **buttons + inputs** |
| Comfortable | 12 | **cards** |
| Relaxed | 16 | featured cards |
| Pill | 9999 | rating + cuisine pills |

## 7. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| 1 | `0 2px 8px rgba(0,204,188,0.08)` resting |
| 2 | `0 4px 16px rgba(0,204,188,0.14)` hover |
| 3 | `0 8px 24px rgba(0,204,188,0.18)` featured |
| 4 | `0 20px 40px rgba(0,0,0,0.18)` modal (neutral) |

## 8. Interaction & Motion

- Standard ease, faster durations 120-320ms
- Card hover: subtle shadow lift
- Search-input expand on focus (240ms)

## 9. Accessibility & A11y

- text on bg = **16.1:1** AAA
- **white on teal = 1.9:1 — fails AA**, so primary CTAs use dark text on teal bg
- white on brand-deep = **5.4:1** AA — used when white text required
- 2px teal focus ring + 1px outset

Restaurant cards `role="link"` with full restaurant + cuisine + rating aria-label. Rating pills use semantic markup.

## 10. Responsive Behavior

mobile <479: hero scales 56→32; nav hamburger; 1-up grid. tablet: 2-up. desktop+: 3-up.

## 11. Content & Voice

### Tone
**Enthusiastic-direct.** Friendly, fast, utility-led. Voice is the friend who knows where to order from at 11pm.

### Microcopy patterns
- Primary CTA: **"Order now"** / **"Find food near you"**
- Sign-up: **"Sign up — free delivery on first order"**
- Errors: **"Sorry, that restaurant isn't delivering right now. Here are similar."**
- Loading: **"Looking for restaurants…"**
- Empty: **"No restaurants in your area. Try a different postcode."**
- Urgency: **"Closing in 15 mins"** in red

### CTA verb conventions
- **Order / Find / Track / Sign up**
- Avoid: aspirational ("Discover the best of…"), too-cute ("Yum!")

## 12. Dark Mode & Theming

**Light-only on web.** Mobile app has dark mode optional.

## 13. Lineage & Influences

Deliveroo descends from Will Shu's 2013 London startup. The Roo mascot was added in 2016 with Deliveroo Teal `#00ccbc` as chromatic anchor. Where DoorDash went red and Uber Eats green, Deliveroo picked this distinctive cyan-teal — no major peer occupied it. Roo Sans (custom rounded sans) handles every heading. The brand reads friendly-fast: more energetic than Just Eat, less brand-driven than DoorDash.

**Named influences:**
- **Will Shu (founder, 2013)** — London startup origin
- **Roo Sans (custom)** — in-house rounded sans
- **Pantone 326 — Deliveroo Teal** — distinctive anchor
- **Just Eat / DoorDash / Uber Eats** — category peers
- **British marketplace utility design** — density instincts

## 14. Do's and Don'ts

### Do
- **Deliveroo Teal `#00ccbc` for primary CTA + brand.**
- **Dark text `#1a1a1a` on teal bg** — accessibility-correct.
- **Roo Sans (custom) for everything.**
- **8-12px radius on UI.**
- **Body 15px** — denser SaaS.
- **Yellow rating pills, teal delivery-time pills.**
- **Soft teal-tinted shadows.**
- **Photography of food / restaurant interiors**, never anthropomorphized Roo.

### Don't
- **Don't put white text on teal bg.** Contrast 1.9:1 fails AA.
- **Don't substitute teal.** `#00ccbc` is the brand.
- **Don't anthropomorphize Roo.** The mascot lives only as wordmark mark.
- **Don't all-caps headlines.**
- **Don't add gradients on CTA.**
- **Don't add aspirational microcopy.** ("Treat yourself") is anti-brand.
- **Don't use red as primary CTA** — that's DoorDash's territory.

## 15. Agent Prompt Guide

### Quick Color Reference
- bg: `#ffffff`
- text: `#1a1a1a` / on-teal `#1a1a1a` (NOT white)
- brand (Deliveroo Teal): `#00ccbc` / hover `#00b8aa` / deep `#007a72`
- rating-yellow: `#ffc833`
- urgency-red: `#e63946`
- plus-purple: `#7a3dd6`

### Example Component Prompts

> Build a Deliveroo-style hero: white canvas, food-photography bg, search input center "your address", primary CTA "Order now" 8px-radius teal `#00ccbc` with **dark text** `#1a1a1a` 15px Roo Sans 700 0.02em.

> Design a restaurant card: white surface, 12px radius, 16px pad, full-bleed photo top. Restaurant name 16px Roo Sans 700, cuisine in 13px gray. Yellow rating pill "4.7 ★", teal delivery-time pill "30-40 min", price band "$$" right-aligned.

> Render a rating pill: pill radius, yellow `#ffc833` bg, dark text 12px Roo Sans 700 0.04em, "4.7 ★" with star icon.

> Build an "Order now" CTA: 8px radius, teal `#00ccbc` bg, **dark `#1a1a1a` text** (accessibility), 15px Roo Sans 700 0.02em, padding 12×24.

> Design a Plus tier badge: pill radius, purple `#7a3dd6` bg, white text 12px Roo Sans 700 0.04em UPPER "PLUS".

### Iteration Guide

1. **White + Deliveroo Teal + Roo Sans.** The trio.
2. **Dark text on teal bg** — never white at body sizes.
3. **8-12px radius — gentle utilitarian.**
4. **Body 15px — denser.**
5. **Yellow rating pills, teal delivery-time pills.**
6. **Soft teal-tinted shadows.**
7. **Roo lives only as wordmark mark, not anthropomorphized.**
8. **Reject white-on-teal at body size, mascot-anthropomorphizing, aspirational microcopy.**
