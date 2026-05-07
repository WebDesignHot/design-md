---
name: Booking.com
tagline: Booking Blue + signal yellow — the deal-finder design language at maximum density, optimized for conversion not contemplation.
updated_at: 2026-05-08T00:00:00.000Z
published_at: 2026-05-07T20:03:08.266Z
author: webdesignhot
source_url: https://www.booking.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [hospitality, marketplace]
tags: [light, dense, sans, cool, bright]
preview_swatch: ['#ffffff', '#003580', '#febb02']
related: [kayak, expedia, marriott]
description: 'Booking.com''s site is the antithesis of Marriott''s luxury-restraint. The canvas is white, the brand colors are Booking Blue `#003580` and Signal Yellow `#febb02`, and the design priority is not aesthetic but conversion-density. Every fold is engineered for visible deals, urgency banners, social proof ("3 people are looking at this hotel right now"), and direct booking CTAs. Headings sit in BlinkMacSystemFont / Inter at 28-40px (smaller than typical SaaS — hotel pages need to fit 30+ properties above the fold). Cards have 1-2px radius and hairline borders; lists are denser than typical SaaS. Voice is direct, deal-led, never marketing-fluff. The brand reads as utility: you''re here to book, the design gets out of the way.'

colors:
  bg: '#ffffff'
  bg-soft: '#f5f5f5'
  bg-warm: '#fefdf6'
  surface: '#ffffff'
  surface-soft: '#fafafa'
  surface-strong: '#f0f2f5'
  brand: '#003580'
  brand-hover: '#0066cc'
  brand-pressed: '#002566'
  brand-deep: '#001a4d'
  brand-tint: '#e8f0fa'
  brand-soft: '#cee0f0'
  on-brand: '#ffffff'
  yellow: '#febb02'
  yellow-deep: '#cc9700'
  yellow-soft: '#fff4d4'
  text: '#262626'
  text-strong: '#000000'
  text-muted: '#595959'
  text-soft: '#8a8a8a'
  text-faint: '#bcbcbc'
  text-on-brand: '#ffffff'
  text-on-yellow: '#262626'
  link: '#0066cc'
  link-hover: '#003580'
  selected-bg: '#e8f0fa'
  border: '#e0e0e0'
  border-strong: '#bdbdbd'
  border-soft: '#eeeeee'
  border-brand: '#003580'
  rating-good: '#008009'
  rating-superb: '#003580'
  urgency: '#d63333'
  urgency-soft: '#fff0f0'
  success: '#008009'
  warning: '#d68500'
  danger: '#d63333'
  info: '#0066cc'
  genius-purple: '#562155'

typography:
  display:
    family: '"BlinkMacSystemFont", "Inter", "Helvetica Neue", -apple-system, "Segoe UI", sans-serif'
    weights: [600, 700, 800]
  body:
    family: '"BlinkMacSystemFont", "Inter", "Helvetica Neue", -apple-system, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 48, weight: 800, lineHeight: 1.1,  tracking: '-0.012em', family: display }
    display-xl:      { size: 40, weight: 800, lineHeight: 1.15, tracking: '-0.01em',  family: display }
    display-lg:      { size: 32, weight: 700, lineHeight: 1.2,  tracking: '-0.005em', family: display }
    h1:              { size: 24, weight: 700, lineHeight: 1.25, tracking: '0',        family: display }
    h2:              { size: 20, weight: 700, lineHeight: 1.3,  tracking: '0',        family: display }
    h3:              { size: 18, weight: 700, lineHeight: 1.35, tracking: '0',        family: display }
    h4:              { size: 16, weight: 700, lineHeight: 1.4,  tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 700, lineHeight: 1.2,  tracking: '0.08em',   family: body }
    body-lg:         { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body:            { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.45, tracking: '0',        family: body }
    label:           { size: 12, weight: 600, lineHeight: 1.3,  tracking: '0.04em',   family: body }
    button:          { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0',        family: body }
    caption:         { size: 11, weight: 400, lineHeight: 1.4,  tracking: '0',        family: body }
    price:           { size: 24, weight: 700, lineHeight: 1.0,  tracking: '0',        family: display }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80]

layout:
  page-width: 1140
  prose-width: 720
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  duration-fast: 100
  duration-standard: 180
  duration-slow: 280
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1140
  wide: 1280

shadows:
  card: '0 1px 3px rgba(0, 0, 0, 0.06)'
  card-hover: '0 2px 8px rgba(0, 0, 0, 0.10)'
  modal: '0 20px 40px rgba(0, 0, 0, 0.18)'

accessibility:
  contrast-text-on-bg: 13.6
  contrast-text-on-brand: 12.6
  focus-ring: '2px solid #003580 + 1px outset'
  reduced-motion-honored: true

components:
  button-primary: { bg: brand, text: on-brand, padding: '10px 20px', radius: 4, font: button }
  button-yellow: { bg: yellow, text: text-on-yellow, padding: '10px 20px', radius: 4, font: button }
  button-secondary: { bg: bg, text: brand, padding: '8px 18px', radius: 4, border: '1px solid border-brand' }
  button-ghost: { bg: transparent, text: brand, padding: '6px 12px' }
  card: { bg: surface, radius: 4, padding: 16, border: '1px solid border' }
  pill: { bg: brand-tint, text: brand-pressed, radius: pill, padding: '2px 8px', font: 'caption' }
  rating-pill: { bg: brand, text: on-brand, radius: 4, padding: '4px 8px', font: 'label' }
  input: { bg: bg, border: '1px solid border-strong', text: text, radius: 4, padding: '10px 12px', focus-border: brand }

lineage:
  summary: 'Booking.com''s marketing system is the antithesis of luxury-hospitality design. The brand commits to deal-finder utility: dense fare grids, urgency social-proof ("3 people are looking at this hotel right now"), and conversion-optimized CTA-first layouts. Booking Blue `#003580` (since the 2010 wordmark) and Signal Yellow `#febb02` are the dual brand colors. Typography defaults to system stacks (BlinkMacSystemFont / Inter) at smaller sizes than typical SaaS — hotel pages need to fit 30+ properties above the fold. The "Genius" loyalty program adds a Royal Purple `#562155` accent for tier badges. Voice is direct: "Find deals", "Book now", "Free cancellation". The whole brand reads as utility — you''re here to book, the design gets out of the way.'
  influences:
    - { name: 'Priceline group', role: 'parent corporate brand language influencing utilitarian instincts', url: 'https://www.priceline.com' }
    - { name: 'Pantone 286 — Booking Blue', role: 'brand color anchor since 2010', url: 'https://www.pantone.com' }
    - { name: 'Genius loyalty program', role: 'tier-badge purple introducing accent color discipline', url: 'https://www.booking.com/genius.html' }
    - { name: 'Kayak / Expedia / Hotels.com', role: 'conversion-density industry peers', url: 'https://www.kayak.com' }
    - { name: 'Amazon search results', role: 'density + social-proof pattern lineage for marketplace listings', url: 'https://www.amazon.com' }
---

## 1. Visual Theme & Atmosphere

Booking.com's site is the antithesis of Marriott's luxury-restraint. The canvas is white, the brand colors are Booking Blue `#003580` and Signal Yellow `#febb02`, and the design priority is not aesthetic but **conversion-density**. Every fold is engineered for visible deals, urgency banners ("Only 2 left at this price!", "3 people are looking at this hotel right now"), social proof, and direct booking CTAs.

Headings sit in system stacks (BlinkMacSystemFont / Inter) at 24–48px — smaller than typical SaaS — because hotel search pages need to fit 30+ properties above the fold. Cards have 4px radius and hairline borders. Lists are denser than typical SaaS, with multiple price points, ratings, and amenity tags packed into a single property row. Voice is direct, deal-led, never marketing-fluff.

The Genius loyalty program adds Royal Purple `#562155` for tier badges (Genius Level 1, 2, 3). Rating pills (Booking's signature 8.5+ "Superb" / 9+ "Wonderful" badges) use brand blue. Urgency messaging is in red `#d63333`. The brand reads as utility — you're here to book, the design gets out of the way.

**Key Characteristics:**
- White canvas + Booking Blue `#003580` + Signal Yellow `#febb02`
- System stacks (BlinkMacSystemFont / Inter) — no custom typography
- Smaller heading sizes (24-48px) — density-first
- 4px radius on UI — gentle rectangular
- Genius Purple `#562155` for loyalty tiers only
- Rating pills (8.5+ "Superb") in brand blue
- Urgency banners in red `#d63333`
- 1140px page width (denser than 1280px standard)
- Hairline borders, minimal shadows
- Conversion-first voice: "Book now", "Free cancellation", "Only 2 left"

## 2. Color Palette & Roles

### Primary
- **Background** (`#ffffff`): white.
- **Text** (`#262626`): body. Slightly soft black.
- **Text Strong** (`#000000`): emphasized headlines + prices.

### Brand — Booking Blue
- **Brand** (`#003580`): Pantone 286, primary CTA + brand mark.
- **Brand Hover** (`#0066cc`), **Pressed** (`#002566`), **Deep** (`#001a4d`).
- **Brand Tint** (`#e8f0fa`): selection wash.

### Yellow — Signal Accent
- **Yellow** (`#febb02`): special-deal CTAs, "Genius deals" highlight, navigation.
- **Yellow Deep** (`#cc9700`): pressed.
- **Yellow Soft** (`#fff4d4`): tinted band for promo strips.

### Genius — Loyalty Tier
- **Genius Purple** (`#562155`): Genius Level 1, 2, 3 tier badges only.

### Urgency
- **Urgency** (`#d63333`): "Only 2 left", "Last 1 available" banners.
- **Urgency Soft** (`#fff0f0`): tinted urgency band.

### Rating
- **Rating Good** (`#008009`): green for 8.0+.
- **Rating Superb** (`#003580`): blue for 9.0+ "Superb" badges.

### Borders
- **Border** (`#e0e0e0`), **Border Strong** (`#bdbdbd`), **Border Soft** (`#eeeeee`).

### Semantic
- success `#008009`, warning `#d68500`, danger `#d63333`, info `#0066cc`.

## 3. Typography Rules

### Font Family
- **Display + Body**: BlinkMacSystemFont (system) / Inter — no custom typography. The brand commits to system stacks for performance + universality (every device renders perfectly without webfont download).
- **Mono**: system mono only.

### Hierarchy

| Role | Font | Size | Weight | LH | Tracking | Notes |
|------|------|------|--------|-----|----------|-------|
| display-hero | system | 48 | 800 | 1.1 | -0.012em | hero (rare — most pages skip hero) |
| display-xl | system | 40 | 800 | 1.15 | -0.01em | feature |
| display-lg | system | 32 | 700 | 1.2 | -0.005em | section H |
| h1 | system | 24 | 700 | 1.25 | 0 | property name |
| h2 | system | 20 | 700 | 1.3 | 0 | sub-section |
| h3 | system | 18 | 700 | 1.35 | 0 | card heading |
| h4 | system | 16 | 700 | 1.4 | 0 | inline |
| eyebrow | system | 12 | 700 | 1.2 | 0.08em (UPPER) | section labels |
| body | system | 14 | 400 | 1.5 | 0 | **body 14px (denser)** |
| body-sm | system | 13 | 400 | 1.45 | 0 | secondary |
| label | system | 12 | 600 | 1.3 | 0.04em | tags |
| button | system | 14 | 700 | 1.0 | 0 | CTA |
| price | system | 24 | 700 | 1.0 | 0 | price displays |

### Principles
- **System stacks for performance.** No webfont = faster TTFB on hotel search, where every ms matters.
- **Smaller body (14px not 16px)** — fits more properties per fold.
- **Mixed case display, UPPER eyebrows + labels.**
- **Buttons mixed case, no UPPER tracking.**
- **Density over hierarchy** — most pages skip hero entirely; search results lead.
- **Bold display weights (700-800)** — system fonts need extra weight to read display-scale.

## 4. Component Stylings

### Buttons (4 variants — 4px radius, smaller padding)

**Primary** — Booking Blue:
- bg `#003580`, text white, 14px system 700
- Padding 10×20, radius 4 — smaller than other brands
- Hover: bg `#0066cc`
- Press: bg `#002566`

**Yellow** — Genius / promo:
- bg `#febb02`, text `#262626` (dark on yellow)
- "Get Genius deals", "Sign in to save"

**Secondary** — bordered:
- bg white, text brand, 1px brand border, radius 4

**Ghost**: bg transparent, text brand, padding 6×12.

### Cards
- bg white, **4px radius**, padding 16
- 1px `#e0e0e0` border + minimal shadow `0 1px 3px rgba(0,0,0,0.06)`
- Hover: shadow shifts slightly + scale 1.005

### Pills (rating, amenity, Genius tier)

**Rating pill** (8.5+):
- bg `#003580`, text white, 4px radius (not full pill — distinctive)
- "8.5 Superb · 1,234 reviews"

**Genius tier**: pill radius, Genius Purple bg, white text, 12px UPPER 0.04em.

**Amenity pills**: pill radius, brand-tint bg, brand-pressed text.

### Inputs
- bg white, 1px gray border, 4px radius
- Focus: border Booking Blue, no glow

### Navigation
- 64px sticky header — shorter than typical SaaS
- Booking.com wordmark left (blue, .com lowercase), top-level nav center, "Sign in" + "Currency" + "Language" right

## 5. Layout Principles

- Base 4px, 32-48px between sections (denser)
- Page max width **1140px** (denser than 1280px)
- Search results lead — no "hero" on most pages
- Property cards: 1-up at all sizes (vertical scroll list)
- Filter sidebar 240px left, results 880px right at desktop

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2 | indicators |
| Standard | 4 | **default for buttons, cards, inputs** |
| Comfortable | 6 | dropdowns |
| Relaxed | 8 | featured cards (rare) |
| Pill | 9999 | amenity pills + tier badges |

## 7. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| 0 | none |
| 1 | `0 1px 3px rgba(0,0,0,0.06)` resting |
| 2 | `0 2px 8px rgba(0,0,0,0.10)` hover |
| 3 | `0 8px 24px rgba(0,0,0,0.14)` featured |
| 4 | `0 20px 40px rgba(0,0,0,0.18)` modal |

### Shadow Philosophy
Minimal — the brand prefers hairline borders to shadows. Density is the goal; shadows would push elements apart.

## 8. Interaction & Motion

- Standard ease, faster durations (100-280ms) — matches deal-finder snappy feel
- Card hover: very subtle shadow lift, no transform
- Date-picker open: 180ms slide-down
- Filter sidebar updates: instant (no transition)

## 9. Accessibility & A11y

- text on bg: `#262626` on `#ffffff` = **13.6:1** AAA
- on-brand on brand: `#ffffff` on `#003580` = **12.6:1** AAA
- 2px Booking Blue focus ring + 1px outset

Property cards `role="link"`. Rating pills use semantic `<span aria-label="Rated 8.5 out of 10, 1234 reviews">`. Urgency banners are `role="status"` (not `alert` — informational not interruptive).

## 10. Responsive Behavior

mobile <479: filter as bottom sheet; 1-up cards; sticky CTA. tablet 480-767: filter inline at top, 1-up still. desktop+: filter sidebar 240px, results 880px.

## 11. Content & Voice

### Tone
**Direct-utility.** No marketing fluff, no aspirational language. Voice is the bargain-hunter friend who's done all the comparison.

### Microcopy patterns
- Primary CTA: **"Book now"** / **"See availability"** / **"Reserve"**
- Sign-up: **"Sign in"** / **"Create an account"**
- Errors: **"Something went wrong. Please try again."**
- Loading: **"Searching properties…"**
- Urgency: **"Only 2 rooms left at this price!"** / **"This price is dropping every minute"**
- Social proof: **"3 people are looking at this hotel right now"**
- Empty: **"No properties match your filters. Try adjusting."**

### CTA verb conventions
- **Book / Reserve / See availability**
- **Sign in / Save**
- Avoid: aspirational verbs ("Discover", "Explore"), too-casual ("Get")

## 12. Dark Mode & Theming

**Light-only on web.** Density-first design doesn't translate well to dark mode without losing legibility on social proof and ratings.

## 13. Lineage & Influences

Booking.com's marketing system descends from the marketplace-utility lineage of Amazon, Kayak, and Expedia rather than the luxury-hospitality lineage of Marriott or Hilton. Density + social proof + urgency are the priorities; aesthetic restraint and aspirational photography are explicitly rejected.

Booking Blue `#003580` (since the 2010 wordmark) and Signal Yellow `#febb02` are the dual brand colors. The Genius loyalty program adds Royal Purple `#562155` for tier badges. Voice is direct: "Find deals", "Book now", "Free cancellation". The whole brand reads as utility — you're here to book, the design gets out of the way.

**Named influences:**
- **Priceline group** — parent corporate brand
- **Pantone 286 — Booking Blue** — anchor since 2010
- **Genius loyalty program** — purple tier accent
- **Kayak / Expedia / Hotels.com** — conversion-density peers
- **Amazon search results** — density + social-proof pattern

## 14. Do's and Don'ts

### Do
- **System stacks (BlinkMacSystemFont / Inter)** — no custom typography.
- **Booking Blue + Signal Yellow + Genius Purple** as the only brand colors.
- **4px radius on UI** — gentle rectangular.
- **Smaller body 14px, denser layouts.**
- **Urgency banners in red** when warranted by data.
- **Direct microcopy.** "Book now" beats "Reserve your stay".
- **Hairline borders** for separation.
- **Social proof inline** in property cards.

### Don't
- **Don't add custom webfonts** — performance > brand typography.
- **Don't oversize headings** — 24-48px range, not 64-96px.
- **Don't use yellow as primary CTA** — it's deal/promo only.
- **Don't add a friendly mascot.**
- **Don't add gradients on CTA.**
- **Don't add aspirational marketing copy.** Direct utility.
- **Don't add dark mode** without explicit Booking approval.

## 15. Agent Prompt Guide

### Quick Color Reference
- bg: `#ffffff`
- text: `#262626` / strong `#000000`
- brand (Booking Blue): `#003580` / hover `#0066cc`
- yellow (deal accent): `#febb02`
- genius-purple: `#562155`
- urgency: `#d63333`
- border: `#e0e0e0` / strong `#bdbdbd`

### Example Component Prompts

> Build a Booking.com-style property card: white surface, 4px radius, 16px pad, 1px `#e0e0e0` border. Photo left 240×180, content right. 18px system Bold property name, location below in 13px gray. Rating pill `#003580` "8.5 Superb · 1,234 reviews". Price right-aligned 24px Bold black. "Book now" CTA in Booking Blue 14×20 padding.

> Design a search header: 64px tall, Booking Blue bg, white wordmark left, white search-input fields inline (Destination / Check-in / Check-out / Guests), yellow "Search" button.

> Render an urgency banner: red `#d63333` text on `#fff0f0` bg, 13px 600 "Only 2 rooms left at this price!", inline icon left.

> Build a Genius tier badge: pill radius, Genius Purple `#562155` bg, white 12px UPPER 0.04em "GENIUS LEVEL 2".

> Design a filter sidebar: 240px wide, white bg, 24px pad, hairline borders separating sections. Filter labels in 12px UPPER 0.08em eyebrow. Checkboxes 16px square Booking Blue when checked. Price range slider with Booking Blue track.

### Iteration Guide

1. **System stacks, no custom fonts.** Performance > aesthetics.
2. **Smaller everything** — body 14px, headings 24-48px max.
3. **Booking Blue primary, Signal Yellow promo, Genius Purple loyalty.**
4. **4px radius on UI.**
5. **Urgency in red, social proof inline.**
6. **Direct microcopy.** "Book now" not "Reserve your stay".
7. **Density first, aesthetics second.**
8. **Reject custom fonts, oversized hero typography, aspirational copy, mascots.**
