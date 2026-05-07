---
name: Marriott
tagline: Luxury-hospitality restraint — Caudex serif for editorial moments, off-white canvas, gold-bronze CTA, photographed-resort hero.
updated_at: 2026-05-08T00:00:00.000Z
published_at: 2026-05-07T20:01:51.021Z
author: webdesignhot
source_url: https://www.marriott.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [hospitality]
tags: [light, structured, serif, sans, warm, spacious]
preview_swatch: ['#f9f6f0', '#a4793f', '#1f2a44']
related: [hilton, delta-air, jetblue]
description: 'Marriott''s site reads like the lobby of a five-star hotel that doesn''t need to shout. The canvas is a warm off-white `#f9f6f0` (cream tint), display headings sit in a custom serif (Caudex, descending from Trajan / classical Roman epigraphy) at 48–72px, body in Avenir Next sans, and the only chromatic accent is a muted gold-bronze `#a4793f` for primary CTAs and brand mark. Photography is the dominant visual instrument — full-bleed lobby and resort interiors at 16:9, color-graded to a warm-amber palette. The brand reads luxury-restrained: confident enough not to chase trends, traditional enough to anchor 8,000 properties under one wordmark.'

colors:
  bg: '#f9f6f0'
  bg-soft: '#f5efe5'
  bg-warm: '#fdf9f2'
  surface: '#ffffff'
  surface-soft: '#fdfcf8'
  surface-strong: '#f5efe5'
  brand: '#a4793f'
  brand-hover: '#8d6232'
  brand-pressed: '#6e4d27'
  brand-deep: '#553c1e'
  brand-tint: '#f5e9d4'
  on-brand: '#ffffff'
  navy: '#1f2a44'
  navy-deep: '#141d33'
  navy-soft: 'rgba(31, 42, 68, 0.06)'
  text: '#2a2a2a'
  text-strong: '#1f2a44'
  text-muted: '#6a6a6a'
  text-soft: '#8c8c8c'
  text-faint: '#b8b8b8'
  text-on-brand: '#ffffff'
  link: '#a4793f'
  link-hover: '#1f2a44'
  selected-bg: '#f5e9d4'
  border: '#e0d9c8'
  border-strong: '#c8bea8'
  border-soft: '#f0eadd'
  border-brand: '#a4793f'
  success: '#3d8b62'
  warning: '#c5832e'
  danger: '#a93535'
  info: '#1f2a44'

typography:
  display:
    family: '"Caudex", "Trajan Pro", "Times New Roman", Georgia, serif'
    weights: [400, 700]
    opentype-features: 'kern, liga, smcp'
  body:
    family: '"Avenir Next", "Helvetica Neue", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weights: [300, 400, 500, 600, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 400, lineHeight: 1.05, tracking: '-0.005em', family: display, opentype: 'smcp' }
    display-xl:      { size: 64, weight: 400, lineHeight: 1.1,  tracking: '-0.005em', family: display }
    display-lg:      { size: 48, weight: 400, lineHeight: 1.15, tracking: '0',        family: display }
    h1:              { size: 36, weight: 400, lineHeight: 1.2,  tracking: '0',        family: display }
    h2:              { size: 28, weight: 400, lineHeight: 1.25, tracking: '0',        family: display }
    h3:              { size: 22, weight: 600, lineHeight: 1.3,  tracking: '0',        family: body }
    h4:              { size: 18, weight: 600, lineHeight: 1.35, tracking: '0',        family: body }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.2,  tracking: '0.20em',   family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    label:           { size: 12, weight: 700, lineHeight: 1.3,  tracking: '0.10em',   family: body }
    button:          { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.08em',   family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.45, tracking: '0',        family: body }

radius:
  none: 0
  micro: 1
  sm: 2
  md: 4
  lg: 6
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 80, 96, 128, 160, 200]

layout:
  page-width: 1280
  prose-width: 680
  header-height: 88

motion:
  ease-standard: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  ease-emphasized: 'cubic-bezier(0.45, 0, 0.55, 1)'
  duration-fast: 200
  duration-standard: 320
  duration-slow: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce — disables image kenburns, freezes carousel'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1280
  wide: 1440

shadows:
  card: '0 2px 12px rgba(31, 42, 68, 0.06)'
  card-hover: '0 8px 24px rgba(31, 42, 68, 0.10)'
  modal: '0 24px 64px rgba(31, 42, 68, 0.20)'

accessibility:
  contrast-text-on-bg: 12.4
  contrast-text-on-brand: 5.1
  focus-ring: '2px solid #a4793f + 2px outset gap'
  reduced-motion-honored: true

components:
  button-primary: { bg: brand, text: on-brand, padding: '14px 32px', radius: 0, font: button }
  button-secondary: { bg: transparent, text: navy, padding: '12px 30px', radius: 0, border: '1px solid border-strong' }
  button-ghost: { bg: transparent, text: brand, padding: '10px 20px' }
  card: { bg: surface, radius: 2, padding: 32, shadow: 'card' }
  pill: { bg: surface-strong, text: navy, radius: pill, padding: '4px 12px', font: 'label' }
  input: { bg: surface, border: '1px solid border-strong', text: text, radius: 0, padding: '14px 16px', focus-border: brand }

lineage:
  summary: 'Marriott''s marketing system descends from luxury-hotel branding traditions — Ritz-Carlton, Four Seasons, Mandarin Oriental — distilled through Bill Marriott Sr.''s 1960s commitment to "the gold standard". The Caudex serif (a Trajan derivative drawn for classical typesetting) carries every display headline, lending each property page the gravitas of a hotel-letterhead. The gold-bronze `#a4793f` is "M Beyond Gold" — a muted, oxidized variant tuned to read warm against cream rather than yellow-flat against white. Avenir Next handles body, retaining the light-elegance of the Adrian Frutiger family without going as cool as Helvetica. Photography drives the visual experience: full-bleed lobby and resort interiors color-graded to amber/cream/teal, never saturated. The brand commits to luxury-restrained — confident enough not to chase trends, traditional enough to unify 8,000 properties.'
  influences:
    - { name: 'Caudex / Trajan Pro lineage', role: 'classical Roman epigraphy translated to display serif', url: 'https://fonts.google.com/specimen/Caudex' }
    - { name: 'Ritz-Carlton brand language', role: 'luxury-hotel typographic restraint', url: 'https://www.ritzcarlton.com' }
    - { name: 'Four Seasons / Mandarin Oriental', role: 'gold-cream-navy hospitality palette tradition', url: 'https://www.fourseasons.com' }
    - { name: 'Avenir Next (Frutiger)', role: 'humanist sans for body text — warmth without trend', url: 'https://www.linotype.com/2090/avenir-next.html' }
    - { name: 'Conde Nast Traveler', role: 'aspirational travel-magazine photography style', url: 'https://www.cntraveler.com' }
---

## 1. Visual Theme & Atmosphere

Marriott's site reads like the lobby of a five-star hotel that doesn't need to shout. The canvas is a warm off-white `#f9f6f0` (cream tint, never pure white), display headings sit in Caudex serif at 48–72px (sometimes set in small-caps via OpenType `smcp`), body in Avenir Next sans at 16px line-height 1.6. The only chromatic accent is a muted gold-bronze `#a4793f` (M Beyond Gold) for CTAs and the brand mark. A deep navy `#1f2a44` provides the secondary typographic anchor, used for emphasized headlines and footer.

Photography is the dominant visual instrument. Every property page leads with a full-bleed lobby or resort-interior photograph at 16:9, color-graded to a warm-amber palette (no over-saturation, no Instagram filter look). Cards have hairline borders and 1-2px radius — never rounded, never pill. CTAs are rectangular with 0px corners, 0.08em tracked uppercase, gold-bronze bg with white text.

The brand commits to luxury-restrained. Where Hilton chose contemporary blue-and-white and Delta chose corporate navy-red, Marriott chose **traditional editorial**. Caudex's classical Roman lineage (descending from Trajan) gives each property page the gravitas of hotel letterhead. The Bonvoy loyalty program, listed properties, and editorial Bonvoy Magazine all share the same restraint.

**Key Characteristics:**
- Cream off-white canvas `#f9f6f0` (warm tint, never pure white)
- Caudex serif display at 48–72px, often small-caps via OpenType
- M Beyond Gold `#a4793f` is the only chromatic CTA color
- Navy `#1f2a44` for secondary typographic emphasis
- 0–2px radius on UI (rectangular, never rounded)
- Photography-led — full-bleed resort interiors at 16:9
- Avenir Next sans for body
- 0.08em tracked uppercase on buttons + labels
- Hairline borders, soft small shadows
- Light-only canvas (no dark mode published)

## 2. Color Palette & Roles

### Primary
- **Background** (`#f9f6f0`): warm cream off-white. Never pure white.
- **Bg Soft** (`#f5efe5`): deeper cream alternate band.
- **Bg Warm** (`#fdf9f2`): palest cream for hero washes.
- **Text** (`#2a2a2a`): body. Slightly warm dark gray, not pure black.
- **Text Strong** (`#1f2a44`): emphasized headlines in navy.

### Brand — M Beyond Gold + Navy
- **Brand** (`#a4793f`): muted gold-bronze. Primary CTA, brand mark, accent rule.
- **Brand Hover** (`#8d6232`), **Pressed** (`#6e4d27`), **Deep** (`#553c1e`).
- **Brand Tint** (`#f5e9d4`): cream-gold wash for selected.
- **Navy** (`#1f2a44`): secondary typographic anchor, footer bg.
- **Navy Deep** (`#141d33`): hover/pressed navy.

### Surface
- **Surface** (`#ffffff`): cards lift slightly from cream canvas.
- **Surface Soft** (`#fdfcf8`): hover lift.
- **Surface Strong** (`#f5efe5`): pressed input bg.

### Borders
- **Border** (`#e0d9c8`): warm cream hairline.
- **Border Strong** (`#c8bea8`): emphasis.
- **Border Soft** (`#f0eadd`): softest divider.

### Semantic
- success `#3d8b62`, warning `#c5832e`, danger `#a93535`, info navy.

## 3. Typography Rules

### Font Family
- **Display**: Caudex (or Trajan Pro). A Trajan-derivative serif drawn for classical typesetting. Falls back to Times New Roman → Georgia → serif.
- **Body**: Avenir Next regular at 16px, line-height 1.6. Falls back to Helvetica Neue → system stacks.
- **Mono**: system mono only.

### Hierarchy

| Role | Font | Size | Weight | LH | Tracking | Notes |
|------|------|------|--------|-----|----------|-------|
| display-hero | Caudex | 80 | 400 | 1.05 | -0.005em | small-caps OT for brand moments |
| display-xl | Caudex | 64 | 400 | 1.1 | -0.005em | feature |
| display-lg | Caudex | 48 | 400 | 1.15 | 0 | section H |
| h1 | Caudex | 36 | 400 | 1.2 | 0 | page title |
| h2 | Caudex | 28 | 400 | 1.25 | 0 | sub-section |
| h3 | Avenir | 22 | 600 | 1.3 | 0 | card heading (sans) |
| h4 | Avenir | 18 | 600 | 1.35 | 0 | inline |
| eyebrow | Avenir | 12 | 600 | 1.2 | 0.20em (UPPER) | section labels |
| body-lg | Avenir | 18 | 400 | 1.6 | 0 | hero subhead |
| body | Avenir | 16 | 400 | 1.6 | 0 | body |
| body-sm | Avenir | 14 | 400 | 1.55 | 0 | secondary |
| label | Avenir | 12 | 700 | 1.3 | 0.10em (UPPER) | tags |
| button | Avenir | 14 | 700 | 1.0 | 0.08em (UPPER) | CTA |

### Principles
- **Caudex for display, Avenir for body** — the serif/sans dichotomy is the brand's typographic signature.
- **400 weight on display** — Caudex stays elegant at regular weight. 700 only for emphasis.
- **Tracking 0.08em+ on uppercase**, never default.
- **Body 16px / 1.6 line-height** — generous reading rhythm.
- **Mixed case display**, all-caps eyebrows + buttons + labels.
- **Sub-headings (h3, h4) shift to Avenir sans** — serif reserved for display moments.

## 4. Component Stylings

### Buttons (3 variants — rectangular, no radius)

**Primary** — gold-bronze:
- bg `#a4793f`, text white, font Avenir 14px 700 0.08em UPPER
- padding 14×32, **radius 0** — rectangular is the brand
- Hover: bg `#8d6232`
- Press: bg `#6e4d27`
- Disabled: bg 30% gold

**Secondary** — bordered:
- bg transparent, text navy, 1px navy-strong border, radius 0
- Hover: bg navy-soft

**Ghost** — link-style:
- bg transparent, text gold, padding 10×20

### Cards
- bg white, **2px radius**, padding 32
- Shadow: `0 2px 12px rgba(31,42,68,0.06)` — soft navy-tinted
- Hover: shadow shifts to `0 8px 24px rgba(31,42,68,0.10)`
- Featured cards: 1px gold left border

### Pills (rare — used for amenity tags)
- bg surface-strong, text navy, radius pill (only place pills exist)
- font label

### Inputs
- bg surface, 1px gray-cream border, radius 0
- Focus: border gold, no glow
- Padding 14×16

### Navigation
- 88px sticky header, cream bg with hairline bottom
- Wordmark left (Marriott in serif italic), top-level nav center, "Sign in" + "Bonvoy" right
- Sign-in CTA in gold rectangular button

## 5. Layout Principles

### Spacing
- Base 4px, scale `[0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 80, 96, 128, 160, 200]`
- 96-128px between sections (generous)
- 32px card pad

### Grid & Container
- Page max width 1280px, prose 680px
- Hero often full-bleed photography, 70vh
- Property grid: 3-up at desktop, 2-up at tablet, 1-up at mobile
- Editorial articles in single-column 680px prose

### Whitespace
- Generous around hero photography (96-160px section pads)
- Cards 32px internal pad
- Editorial pieces use Caudex display + sans body for clear hierarchy

### Section Cadence
- Cream-on-cream with photography breaks
- Occasional `bg-soft` or `bg-warm` band
- Footer is navy with cream text — the brand's only dark surface

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0 | **default** for buttons, inputs |
| Micro | 1 | hairline indicators |
| Standard | 2 | **cards** |
| Comfortable | 4 | tooltips |
| Relaxed | 6 | dropdown |
| Pill | 9999 | amenity tags only |

The brand commits to **near-zero radius** — luxury-traditional feels rectangular.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | none | inline |
| 1 | `0 2px 12px rgba(31,42,68,0.06)` | resting cards |
| 2 | `0 8px 24px rgba(31,42,68,0.10)` | hover, dropdown |
| 3 | `0 12px 36px rgba(31,42,68,0.14)` | featured |
| 4 | `0 24px 64px rgba(31,42,68,0.20)` | modal |

### Shadow Philosophy
Soft, navy-tinted (not pure black), generous blur. The brand uses subtle elevation — never aggressive.

## 8. Interaction & Motion

### Easing & duration
- **Standard ease**: `cubic-bezier(0.25, 0.1, 0.25, 1)` — gentle in-out
- **Emphasized ease**: `cubic-bezier(0.45, 0, 0.55, 1)` — more deliberate (no overshoot)
- Durations: 200ms (hover, slow but deliberate), 320ms (focus, dropdown), 480ms (modal, page transition — luxurious)

### Per-component
- **Primary CTA hover**: bg darken in 200ms, no transform
- **Card hover**: shadow lifts in 200ms
- **Photography hero**: subtle Ken Burns zoom on key images (slow, 8-12s)
- **Carousel**: 480ms cinematic transitions

### Reduced Motion
Honors `prefers-reduced-motion: reduce`. Ken Burns disabled; carousel auto-advance disabled.

## 9. Accessibility & A11y

### Contrast
- text on bg: `#2a2a2a` on `#f9f6f0` = **12.4:1** (AAA)
- on-brand on brand: `#ffffff` on `#a4793f` = **5.1:1** (AA at body)

### Focus
2px solid gold ring with 2px outset gap (creates a 4px visible focus state).

### ARIA & Keyboard
- Property cards `role="link"` with full property name + location aria-label
- Photography decorative — `aria-hidden`
- Bonvoy points balance `aria-live="polite"`

### Screen Reader
- Caudex small-caps via OpenType `smcp` — uses regular CSS, screen readers pronounce normally
- Decorative cream textures `aria-hidden`
- Date-picker uses semantic `<dialog>` with proper modal trapping

## 10. Responsive Behavior

| Breakpoint | px | Behavior |
|-----------|-----|----------|
| mobile | 0-479 | hero scales 80→44px; nav hamburger; 1-up property grid |
| tablet | 480-767 | 2-up, sticky reservation CTA |
| desktop | 768-1279 | 3-up, full nav |
| wide | 1280-1440 | 3-up larger photography |

### Touch Targets
44×44 min, primary CTAs 56-64px tall on hero.

### Per-component
- Date-picker → bottom sheet on mobile
- Property grid → vertical scroll mobile
- Hero photography → cropped to 1:1 on mobile

### Image Behavior
- Hero photos: `cover`, top-aligned, color-graded amber/cream/teal
- Property thumbnails: `cover`, 4:3 aspect

## 11. Content & Voice

### Tone
**Luxury-restrained.** Confident without bragging, descriptive without being technical, hospitable without being overly familiar. Voice is a concierge who has seen everything.

### Microcopy patterns
- Primary CTA: **"Reserve now"** / **"Book stay"** — never "Buy"
- Sign-up: **"Join Marriott Bonvoy"** — capitalized as proper noun
- Errors: **"Something went wrong. Please try again."** — measured, no apology theater
- Loading: **"Searching properties…"** — descriptive
- Empty: **"No properties match your search. Try adjusting dates or destination."**

### Empty states
Suggestive, action-oriented. Always offer adjusted criteria.

### CTA verb conventions
- **Reserve / Book** (primary commerce)
- **Explore** (browse properties)
- **Join Bonvoy** (loyalty)
- **Sign in / Sign up** (auth)
- Avoid: "Buy", "Click", "Get" (too casual)

## 12. Dark Mode & Theming

**Light-only.** The brand's identity rests on cream off-white canvas — luxury-hotel letterhead doesn't translate to dark mode.

If a partner integration requires dark, the published guidance is to use navy `#1f2a44` as bg, gold unchanged, cream text on navy — but no marketing surface ships dark.

## 13. Lineage & Influences

Marriott's marketing system descends from luxury-hotel branding traditions — Ritz-Carlton, Four Seasons, Mandarin Oriental — distilled through Bill Marriott Sr.'s 1960s commitment to "the gold standard". Caudex (a Trajan derivative drawn for classical typesetting) carries display, lending each property page the gravitas of hotel letterhead. M Beyond Gold `#a4793f` is a muted, oxidized variant of yellow-gold tuned to read warm against cream rather than flat against white. Avenir Next handles body, retaining light-elegance of the Frutiger family without Helvetica's coolness.

Photography drives the visual experience — full-bleed lobby and resort interiors color-graded to amber/cream/teal, never saturated. The brand commits to luxury-restrained: confident enough not to chase trends, traditional enough to unify 8,000 properties under one wordmark.

**Named influences:**
- **Caudex / Trajan Pro lineage** — classical Roman epigraphy → display serif
- **Ritz-Carlton brand language** — luxury-hotel typographic restraint
- **Four Seasons / Mandarin Oriental** — gold-cream-navy palette tradition
- **Avenir Next (Frutiger)** — humanist sans for body
- **Conde Nast Traveler** — aspirational travel-magazine photography

## 14. Do's and Don'ts

### Do
- **Cream canvas `#f9f6f0`** — never pure white.
- **Caudex serif for display**, Avenir sans for body.
- **0–2px radius on UI** — rectangular is the brand.
- **0.08em tracking on uppercase buttons + labels.**
- **Photography color-graded to amber/cream/teal** — never saturated.
- **M Beyond Gold `#a4793f` for primary CTA only.**
- **Generous whitespace** — 96-128px section pads.
- **Mixed case display, UPPER-tracked buttons + labels.**

### Don't
- **Don't use pure white bg** — cream tint is the brand.
- **Don't round corners 4+** on UI — feels untraditional.
- **Don't substitute gold.** `#a4793f` is M Beyond Gold — not Tailwind amber, not yellow-gold.
- **Don't all-caps headlines.**
- **Don't add gradients** — the brand commits to flat color.
- **Don't oversaturate photography** — color-graded warm is the look.
- **Don't add a friendly mascot.**
- **Don't add dark mode** without explicit Marriott approval.

## 15. Agent Prompt Guide

### Quick Color Reference
- bg (cream): `#f9f6f0`
- text: `#2a2a2a` / strong (navy): `#1f2a44`
- brand (M Beyond Gold): `#a4793f` / hover `#8d6232`
- navy: `#1f2a44`
- border: `#e0d9c8`

### Example Component Prompts

> Build a Marriott-style property hero: 70vh full-bleed lobby photo color-graded amber/cream, 80px Caudex serif heading "Welcome to The St. Regis" with OpenType small-caps, 18px Avenir Next subhead in `#2a2a2a`. Primary CTA "Reserve now" in 0px-radius gold `#a4793f` 14px Avenir 700 0.08em UPPER, padding 14×32.

> Design a property card: white surface, 2px radius, 32px pad, soft navy-tinted shadow `0 2px 12px rgba(31,42,68,0.06)`. 22px Avenir h3 property name, eyebrow "ST. REGIS COLLECTION" in 12px UPPER 0.20em gold, 14px Avenir body for amenities.

> Render a Bonvoy points pill: pill radius (only place), surface-strong cream bg, navy text 12px 700 0.10em UPPER "GOLD ELITE", padding 4×12.

> Build a date-range input: cream surface, 1px gray-cream border, 0px radius, padding 14×16, label above in 12px UPPER 0.20em eyebrow gold. Focus: border shifts to gold `#a4793f`.

> Design an editorial article card: cream bg, full-bleed photo top, 36px Caudex h1 article title, 16px Avenir body, byline in 12px gold UPPER eyebrow.

### Iteration Guide

1. **Cream canvas + Caudex display.** The serif/cream pairing IS the brand.
2. **0px radius on UI.** Luxury-traditional is rectangular.
3. **0.08em tracking on uppercase buttons.**
4. **Photography color-graded amber/cream/teal**, never saturated.
5. **Generous whitespace.** 96-128px between sections.
6. **Gold `#a4793f` only for primary CTA + brand.** Decorative use kills luxury feel.
7. **Mixed case display, UPPER eyebrows + buttons.**
8. **Reject roundness, saturation, all-caps headlines, mascots.**
