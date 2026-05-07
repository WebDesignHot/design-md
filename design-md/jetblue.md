---
name: JetBlue
tagline: JetBlue Blue on white — friendly aviation with a custom rounded sans, Mint cabin orange accent, lower-case microcopy.
updated_at: 2026-05-08T00:00:00.000Z
published_at: 2026-05-07T20:02:08.385Z
author: webdesignhot
source_url: https://www.jetblue.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [hospitality]
tags: [light, playful, sans, cool, rounded]
preview_swatch: ['#ffffff', '#0033a0', '#ff6633']
related: [delta-air, hilton, marriott]
description: 'JetBlue''s site is the friendly counterpart to Delta''s confident-trustworthy. The canvas is pure white, headings sit in JetBlue Sans (a custom rounded humanist sans, Inter-adjacent) at 40–64px, and the dual brand colors are JetBlue Blue `#0033a0` (primary) and Mint Orange `#ff6633` (premium-cabin accent + urgency). Where Delta chose Whitney and corporate navy + red, JetBlue chose rounded sans and lower-case microcopy ("book a flight", not "Book a flight"). The brand is unembarrassed by friendliness — pill-radius CTAs, soft drop shadows, conversational copy, occasional puns about altitude. The TrueBlue loyalty program (Mosaic, Mint Suite, Even More Space) carries the visual weight of the premium experience without losing the friendly tone.'

colors:
  bg: '#ffffff'
  bg-soft: '#f5f7fa'
  bg-warm: '#fffaf6'
  surface: '#ffffff'
  surface-soft: '#fafbfd'
  surface-strong: '#f0f4f9'
  brand: '#0033a0'
  brand-hover: '#002a82'
  brand-pressed: '#001f63'
  brand-deep: '#001548'
  brand-tint: '#e6ecf5'
  brand-soft: '#cbd6ea'
  on-brand: '#ffffff'
  mint-orange: '#ff6633'
  mint-orange-deep: '#d8501f'
  mint-orange-soft: '#ffe9df'
  text: '#1a1a1a'
  text-strong: '#0033a0'
  text-muted: '#5a5a5a'
  text-soft: '#8a8a8a'
  text-faint: '#bcbcbc'
  text-on-brand: '#ffffff'
  link: '#0033a0'
  link-hover: '#ff6633'
  selected-bg: '#e6ecf5'
  border: '#dee2e8'
  border-strong: '#bcc2cc'
  border-soft: '#eaedf2'
  border-brand: '#0033a0'
  trueblue-mosaic: '#0033a0'
  trueblue-mint: '#ff6633'
  success: '#1a8757'
  warning: '#cc8800'
  danger: '#c4313a'
  info: '#0033a0'

typography:
  display:
    family: '"JetBlue Sans", "Avenir Next", "Inter", -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [500, 600, 700]
  body:
    family: '"JetBlue Sans", "Inter", "Avenir Next", -apple-system, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.018em', family: display }
    display-xl:      { size: 56, weight: 700, lineHeight: 1.1,  tracking: '-0.015em', family: display }
    display-lg:      { size: 48, weight: 700, lineHeight: 1.15, tracking: '-0.012em', family: display }
    h1:              { size: 36, weight: 700, lineHeight: 1.2,  tracking: '-0.008em', family: display }
    h2:              { size: 28, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h3:              { size: 22, weight: 600, lineHeight: 1.3,  tracking: '0',        family: display }
    h4:              { size: 18, weight: 600, lineHeight: 1.35, tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.2,  tracking: '0.10em',   family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 700, lineHeight: 1.3,  tracking: '0.04em',   family: body }
    button:          { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0.02em',   family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.45, tracking: '0',        family: body }

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
  header-height: 80

motion:
  ease-standard: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  ease-emphasized: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 150
  duration-standard: 250
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1280
  wide: 1440

shadows:
  card: '0 4px 12px rgba(0, 51, 160, 0.08)'
  card-hover: '0 8px 24px rgba(0, 51, 160, 0.12)'
  modal: '0 20px 60px rgba(0, 51, 160, 0.20)'

accessibility:
  contrast-text-on-bg: 16.1
  contrast-text-on-brand: 12.6
  focus-ring: '3px solid #0033a0'
  reduced-motion-honored: true

components:
  button-primary: { bg: brand, text: on-brand, padding: '14px 32px', radius: pill, font: button }
  button-mint: { bg: mint-orange, text: on-brand, padding: '14px 32px', radius: pill, font: button }
  button-secondary: { bg: bg, text: brand, padding: '12px 30px', radius: pill, border: '2px solid border-brand' }
  button-ghost: { bg: transparent, text: brand, padding: '10px 20px' }
  card: { bg: surface, radius: 12, padding: 24, shadow: 'card' }
  pill: { bg: brand-tint, text: brand-pressed, radius: pill, padding: '4px 12px', font: 'label' }
  input: { bg: bg, border: '2px solid border-strong', text: text, radius: 12, padding: '14px 16px', focus-border: brand }

lineage:
  summary: 'JetBlue''s marketing system is the contrarian airline-design choice — friendly where Delta and United chose corporate-trust, rounded where everyone else chose rectangular. JetBlue Blue `#0033a0` traces to the 2000 launch wordmark; Mint Orange `#ff6633` was added in 2014 with the launch of Mint (premium transcon cabin) and now flags both the cabin upgrade and urgency states. JetBlue Sans (a custom rounded humanist sans by the in-house brand team) descends from Avenir Next''s warmth without the formality. The brand commits to lower-case microcopy throughout — buttons say "book a flight" not "Book a Flight" — borrowing from the iconic 2014 brand refresh that adopted Mailchimp''s casual-confident voice school. The whole system reads "we''re an airline that doesn''t take itself too seriously, but we still care about your bags".'
  influences:
    - { name: 'JetBlue Sans (custom)', role: 'in-house rounded humanist sans, Avenir-adjacent', url: 'https://www.jetblue.com' }
    - { name: 'JetBlue Mint cabin (2014)', role: 'premium-cabin product driving Mint Orange brand color introduction', url: 'https://www.jetblue.com/mint' }
    - { name: 'Mailchimp brand refresh (2018)', role: 'casual-confident lower-case microcopy school', url: 'https://mailchimp.com' }
    - { name: 'Avenir Next', role: 'humanist sans lineage for JetBlue Sans', url: 'https://www.linotype.com/2090/avenir-next.html' }
    - { name: 'Pantone 287 — JetBlue Blue', role: 'brand color anchor since 2000 launch', url: 'https://www.pantone.com' }
---

## 1. Visual Theme & Atmosphere

JetBlue's site is the friendly counterpart to Delta's confident-trustworthy. The canvas is pure white `#ffffff`, headings sit in JetBlue Sans (a custom rounded humanist sans, Avenir-adjacent) at 40–64px Bold, and the dual brand colors are JetBlue Blue `#0033a0` (primary CTA, brand mark) and Mint Orange `#ff6633` (Mint premium-cabin accent + urgency states). The brand commits to lower-case microcopy throughout — buttons say "book a flight" not "Book a Flight" — a deliberate friendliness inherited from the 2014 brand refresh.

CTAs are pill-radius (9999px) — the only major US airline using full pill, signaling "more friendly than corporate". Cards have 12-16px radius, soft drop shadows tinted blue, and rounded inputs. Photography is bright + saturated — blue sky from window seats, Mint cabin interiors, friendly crew portraits. The TrueBlue loyalty program (Mosaic tier, Mint Suite class, Even More Space upgrade) carries premium visual weight without losing the conversational tone.

Where Delta said "captain's announcement" and Marriott said "concierge", JetBlue says "flight attendant who likes the job". The voice is unembarrassed by approachability — copywriters allowed to make altitude puns, weather puns, brand-character moments.

**Key Characteristics:**
- White canvas + JetBlue Blue `#0033a0` + Mint Orange `#ff6633`
- JetBlue Sans (custom, Avenir-adjacent rounded humanist)
- **Lower-case microcopy** ("book a flight" not "Book a Flight")
- Pill-radius (9999px) on all CTAs — only major US airline doing this
- 12-16px radius on cards
- Mint Orange for premium cabin + urgency only
- Soft blue-tinted drop shadows
- Bright + saturated photography (blue sky, Mint cabin)
- TrueBlue + Mosaic + Mint loyalty thread
- Light-only canvas

## 2. Color Palette & Roles

### Primary
- **Background** (`#ffffff`): pure white.
- **Text** (`#1a1a1a`): body. Soft near-black.
- **Text Strong** (`#0033a0`): emphasized headlines in JetBlue Blue.

### Brand — JetBlue Blue
- **Brand** (`#0033a0`): Pantone 287, primary CTA, wordmark.
- **Brand Hover** (`#002a82`), **Pressed** (`#001f63`), **Deep** (`#001548`).
- **Brand Tint** (`#e6ecf5`): selection wash.

### Mint Orange — Premium + Urgency
- **Mint Orange** (`#ff6633`): Mint cabin upgrade CTA + urgency banners.
- **Mint Orange Deep** (`#d8501f`): pressed.
- **Mint Orange Soft** (`#ffe9df`): tinted band for Mint promos.

### Surface
- **Surface** (`#ffffff`), **Surface Soft** (`#fafbfd`), **Surface Strong** (`#f0f4f9`).

### Borders
- **Border** (`#dee2e8`), **Border Strong** (`#bcc2cc`), **Border Soft** (`#eaedf2`).

### Semantic
- success `#1a8757`, warning `#cc8800`, danger `#c4313a`, info = brand.

## 3. Typography Rules

### Font Family
- **Display + Body**: JetBlue Sans (custom). Falls back to Avenir Next → Inter → system stacks.
- **Mono**: system mono only.

### Hierarchy

| Role | Font | Size | Weight | LH | Tracking | Notes |
|------|------|------|--------|-----|----------|-------|
| display-hero | JetBlue Sans | 64 | 700 | 1.05 | -0.018em | hero |
| display-xl | JetBlue Sans | 56 | 700 | 1.1 | -0.015em | feature |
| display-lg | JetBlue Sans | 48 | 700 | 1.15 | -0.012em | section H |
| h1 | JetBlue Sans | 36 | 700 | 1.2 | -0.008em | sub-section |
| h2 | JetBlue Sans | 28 | 600 | 1.25 | -0.005em | card H |
| h3 | JetBlue Sans | 22 | 600 | 1.3 | 0 | sub-card |
| eyebrow | JetBlue Sans | 12 | 600 | 1.2 | 0.10em (UPPER) | section labels |
| body | JetBlue Sans | 16 | 400 | 1.55 | 0 | body |
| label | JetBlue Sans | 13 | 700 | 1.3 | 0.04em (UPPER) | tags |
| button | JetBlue Sans | 16 | 700 | 1.0 | 0.02em | CTA (mixed case OR lowercase) |

### Principles
- **Mixed case display, UPPER eyebrows.**
- **Buttons in lower case or mixed case** — never all-caps. "book a flight" / "Book a flight".
- **Tracking 0.02em on buttons** (gentle, never aggressive).
- **Body 16px / 1.55** — standard rhythm.
- **JetBlue Sans's rounded humanist warmth** is the brand signal — never substitute Helvetica.

## 4. Component Stylings

### Buttons (4 variants — pill-radius)

**Primary** — JetBlue Blue:
- bg `#0033a0`, text white, 16px JetBlue Sans 700 0.02em
- Padding 14×32, **radius 9999 (pill)**
- Hover: bg `#002a82`, scale 1.02
- Press: bg `#001f63`

**Mint** — premium upgrade or urgency:
- bg `#ff6633`, text white, otherwise primary
- Used for "book mint", "only 2 seats left"

**Secondary** — bordered:
- bg white, text brand, 2px brand border, pill radius

**Ghost**: bg transparent, text brand, padding 10×20.

### Cards
- bg white, **12-16px radius**, padding 24
- Soft blue-tinted shadow `0 4px 12px rgba(0,51,160,0.08)`
- Hover: shadow shifts to `0 8px 24px rgba(0,51,160,0.12)`
- Featured cards: 1px brand left border + Mint Orange highlight

### Pills (loyalty tiers, fare tags)
- Mosaic tier: pill radius, brand-tint bg, brand-pressed text
- Mint cabin: pill radius, mint-orange-soft bg, mint-orange-deep text

### Inputs
- bg white, 2px gray border, 12px radius, padding 14×16
- Focus: border JetBlue Blue with no glow

### Navigation
- 80px sticky header, white bg, soft hairline
- JetBlue wordmark left, top-level nav center ("book" / "trips" / "trueblue" — all lower-case), Account icon right

## 5. Layout Principles

- Base 4px, 96px between sections, 24px card pad
- Page max width 1280px
- Hero often sky photography (cabin window views) with overlaid search
- Fare results: 3-up at desktop, 2-up at tablet, 1-up at mobile

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 4 | inline tags |
| Standard | 8 | tooltips |
| Comfortable | 12 | **inputs, default cards** |
| Relaxed | 16 | featured cards |
| Featured | 24 | oversized hero cards |
| Pill | 9999 | **all buttons** |

Pill on buttons + 12-16 on cards is the brand's structural signature.

## 7. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| 1 | `0 4px 12px rgba(0,51,160,0.08)` resting |
| 2 | `0 8px 24px rgba(0,51,160,0.12)` hover |
| 3 | `0 12px 32px rgba(0,51,160,0.16)` featured |
| 4 | `0 20px 60px rgba(0,51,160,0.20)` modal |

## 8. Interaction & Motion

- Standard `cubic-bezier(0.25, 0.1, 0.25, 1)`, emphasized with overshoot for celebratory states
- 150ms hover, 250ms standard, 400ms slow
- Card hover scales 1.02 + shadow lift

## 9. Accessibility & A11y

- text on bg = **16.1:1** AAA
- on-brand on brand = **12.6:1** AAA
- 3px brand focus ring

Lower-case microcopy works fine for screen readers (no special handling needed). Loyalty tier badges use semantic abbreviations.

## 10. Responsive Behavior

mobile <479: hero 64→44; nav hamburger; 1-up. tablet: 2-up. desktop: 3-up. wide: 3-up larger.

## 11. Content & Voice

### Tone
**Friendly-confident.** "We know you'd rather not be in airports" implied throughout. Voice is the flight attendant who genuinely likes the job and makes the safety video watchable.

### Microcopy patterns
- Primary CTA: **"book a flight"** / **"book"** — lower case
- Sign-up: **"join trueblue"**
- Errors: **"that didn't work — let's try again"** — conversational
- Loading: **"finding your flight…"** — friendly + lower case
- Empty: **"no flights here. try other dates?"**
- Urgency: **"only 2 seats at this price — book mint now"**

### CTA verb conventions
- **book / search / continue / confirm** — all lower case
- **join trueblue** (loyalty)
- Avoid: ALL CAPS, "Buy", "Click"

## 12. Dark Mode & Theming

**Light-only on web.** The brand's identity rests on white canvas + blue.

## 13. Lineage & Influences

JetBlue's marketing system is the contrarian airline-design choice — friendly where Delta and United chose corporate-trust, rounded where everyone else chose rectangular. JetBlue Blue `#0033a0` traces to the 2000 launch wordmark; Mint Orange `#ff6633` was added in 2014 with the Mint cabin product. JetBlue Sans (custom rounded humanist) descends from Avenir Next's warmth without formality.

The brand commits to lower-case microcopy throughout — buttons say "book a flight" not "Book a Flight" — borrowing from Mailchimp's 2018 casual-confident voice school.

**Named influences:**
- **JetBlue Sans (custom)** — in-house Avenir-adjacent rounded humanist
- **JetBlue Mint cabin (2014)** — Mint Orange brand color introduction
- **Mailchimp brand refresh (2018)** — lower-case microcopy school
- **Avenir Next** — humanist lineage
- **Pantone 287 — JetBlue Blue** — brand anchor

## 14. Do's and Don'ts

### Do
- **Lower-case microcopy** — "book a flight" not "Book a Flight".
- **Pill-radius CTAs** — full 9999px.
- **JetBlue Sans (or Avenir Next fallback)** — never Helvetica.
- **JetBlue Blue + Mint Orange dual brand.** Mint Orange = premium + urgency only.
- **12-16px radius on cards.**
- **Soft blue-tinted shadows.**
- **Bright + saturated photography** — sky views, cabin interiors, friendly crew.
- **Friendly conversational microcopy** — altitude puns, weather puns OK.

### Don't
- **Don't use ALL CAPS** anywhere.
- **Don't substitute brand colors.**
- **Don't use Mint Orange as primary CTA color** — it's premium + urgency only.
- **Don't add gradients on CTAs.**
- **Don't choose square-corner buttons** — pill is the brand.
- **Don't add a serif font** anywhere.
- **Don't add dark mode** without explicit JetBlue approval.

## 15. Agent Prompt Guide

### Quick Color Reference
- bg: `#ffffff`
- text: `#1a1a1a` / strong: `#0033a0`
- brand (JetBlue Blue): `#0033a0` / hover `#002a82`
- mint-orange (premium / urgency): `#ff6633` / soft `#ffe9df`
- border: `#dee2e8` / strong `#bcc2cc`

### Example Component Prompts

> Build a JetBlue-style hero: 70vh full-bleed sky-from-window photo, white scrim 30% from bottom, 64px JetBlue Sans Bold heading "find your next flight" lower-case, 18px subhead. Primary CTA "book a flight" pill-radius blue `#0033a0` 16px JetBlue Sans 700 0.02em. Padding 14×32.

> Design a fare card: white surface, 12px radius, 24px pad, soft blue-tinted shadow `0 4px 12px rgba(0,51,160,0.08)`. 22px JetBlue Sans h3 "JFK → LAX", price `$329`. Eyebrow "MINT" in 12px UPPER 0.10em mint-orange. Urgency "only 2 seats left" in mint-orange 14px.

> Render a Mosaic tier pill: pill radius, brand-tint bg, JetBlue Blue text 13px JetBlue Sans 700 0.04em UPPER "MOSAIC".

> Build a "book a flight" CTA: pill radius, JetBlue Blue bg, white 16px JetBlue Sans 700 lower-case "book a flight", padding 14×32. Hover: bg shifts to `#002a82`, scale 1.02.

> Design a search input: white bg, 2px gray border, 12px radius, padding 14×16, lower-case placeholder "where to?", focus border JetBlue Blue.

### Iteration Guide

1. **Lower-case microcopy.** This is the brand's signature voice.
2. **Pill-radius buttons + 12-16px cards.**
3. **JetBlue Blue primary, Mint Orange premium-or-urgency only.**
4. **JetBlue Sans (rounded humanist) — fallback Avenir Next.**
5. **Soft blue-tinted shadows.**
6. **Friendly conversational copy.** Puns OK.
7. **Bright sky-and-cabin photography.**
8. **Reject ALL CAPS, square corners, mascots, dark mode.**
