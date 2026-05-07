---
name: ClassPass
tagline: Wellness-marketplace energy — coral-pink CTA on warm white, GT America sans, photographed-class-as-hero pattern.
updated_at: 2026-05-08T00:00:00.000Z
published_at: 2026-05-07T20:02:32.215Z
author: webdesignhot
source_url: https://classpass.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [healthcare, saas, marketplace]
tags: [light, playful, sans, warm, bright, rounded]
preview_swatch: ['#fffaf6', '#ec5e8a', '#1a1a1a']
related: [strava, peloton, classpass]
description: 'ClassPass''s site is the wellness-marketplace counterpart to MyFitnessPal''s tracker-utility. The canvas is warm off-white `#fffaf6` (slight cream tilt), headings sit in GT America (Grilli Type''s neo-grotesque sans) at 48–72px, and the brand color is "ClassPass Coral" `#ec5e8a` — a warm pink-coral picked for energetic-friendly wellness without going as candy as Glossier or as muted as Calm. Photography drives the visual experience — full-bleed yoga, pilates, dance, boxing studio interiors at 16:9. Cards have 12-16px radius and warm-pink-tinted shadows. Voice is enthusiastic-discovery: "Try a thousand studios", "Find your next favorite workout". The whole brand reads as wellness-marketplace energy: enough variety that you''ll find your thing, enough quality that you won''t regret the pick.'

colors:
  bg: '#fffaf6'
  bg-soft: '#fef4eb'
  bg-warm: '#fdebdb'
  surface: '#ffffff'
  surface-soft: '#fdf8f2'
  surface-cream: '#fbf2e7'
  brand: '#ec5e8a'
  brand-hover: '#d44872'
  brand-pressed: '#b8385d'
  brand-deep: '#982a48'
  brand-tint: '#fde0ea'
  brand-soft: '#f8c4d1'
  on-brand: '#ffffff'
  text: '#1a1a1a'
  text-strong: '#000000'
  text-muted: '#5a5a5a'
  text-soft: '#8a8a8a'
  text-faint: '#bcbcbc'
  text-on-brand: '#ffffff'
  link: '#ec5e8a'
  link-hover: '#b8385d'
  selected-bg: '#fde0ea'
  border: '#e8d8c8'
  border-strong: '#c8b6a4'
  border-soft: '#f0e6d8'
  border-brand: '#ec5e8a'
  yoga-purple: '#9b6dd4'
  pilates-mint: '#5dd4b8'
  hiit-orange: '#ff7e3f'
  success: '#3da568'
  warning: '#cc8800'
  danger: '#c4313a'
  info: '#ec5e8a'

typography:
  display:
    family: '"GT America", "Inter", "Söhne", -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [500, 700]
  body:
    family: '"GT America", "Inter", -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 72, weight: 700, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    display-xl:      { size: 56, weight: 700, lineHeight: 1.1,  tracking: '-0.018em', family: display }
    display-lg:      { size: 48, weight: 700, lineHeight: 1.15, tracking: '-0.012em', family: display }
    h1:              { size: 36, weight: 700, lineHeight: 1.2,  tracking: '-0.008em', family: display }
    h2:              { size: 28, weight: 700, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h3:              { size: 22, weight: 700, lineHeight: 1.3,  tracking: '0',        family: display }
    h4:              { size: 18, weight: 500, lineHeight: 1.35, tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 700, lineHeight: 1.2,  tracking: '0.14em',   family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 700, lineHeight: 1.3,  tracking: '0.06em',   family: body }
    button:          { size: 15, weight: 700, lineHeight: 1.0,  tracking: '0.04em',   family: body }
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
  header-height: 72

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
  card: '0 2px 12px rgba(236, 94, 138, 0.08)'
  card-hover: '0 8px 24px rgba(236, 94, 138, 0.14)'
  modal: '0 20px 60px rgba(236, 94, 138, 0.20)'

accessibility:
  contrast-text-on-bg: 16.0
  contrast-text-on-brand: 4.5
  focus-ring: '3px solid #ec5e8a'
  reduced-motion-honored: true

components:
  button-primary: { bg: brand, text: on-brand, padding: '14px 32px', radius: pill, font: button }
  button-secondary: { bg: bg, text: brand, padding: '12px 30px', radius: pill, border: '2px solid border-brand' }
  button-ghost: { bg: transparent, text: brand, padding: '10px 20px' }
  card: { bg: surface, radius: 16, padding: 24, shadow: 'card' }
  pill: { bg: brand-tint, text: brand-pressed, radius: pill, padding: '4px 12px', font: 'label' }
  input: { bg: bg, border: '1px solid border-strong', text: text, radius: 12, padding: '12px 16px', focus-border: brand }

lineage:
  summary: 'ClassPass''s marketing system descends from the wellness-marketplace category that emerged 2013-2018 (ClassPass + Mindbody + Studios.com + Wellable). ClassPass Coral `#ec5e8a` was picked specifically to land between Glossier-candy-pink and Calm-muted-blue — energetic-friendly without becoming infantile. GT America (Grilli Type''s neo-grotesque sans, used by Linear and Vercel) anchors typography. Photography drives the visual experience — full-bleed studio interiors at 16:9, color-graded warm with subtle pink wash. Specialty class-type accents (Yoga purple, Pilates mint, HIIT orange) appear in class-card chips, never as primary CTA colors. The brand reads as wellness-marketplace energy: variety + quality + the friendliness of a class-pass card you''d actually use.'
  influences:
    - { name: 'GT America by Grilli Type', role: 'neo-grotesque sans, used by Linear/Vercel', url: 'https://www.grillitype.com/typeface/gt-america' }
    - { name: 'Glossier brand language', role: 'wellness-adjacent contemporary; ClassPass differentiated via deeper coral', url: 'https://www.glossier.com' }
    - { name: 'Mindbody / Studios.com', role: 'wellness-marketplace category peers', url: 'https://www.mindbodyonline.com' }
    - { name: 'Pantone 1925 / coral palette', role: 'pink-coral lineage in wellness branding', url: 'https://www.pantone.com' }
    - { name: 'Aerial silks / boutique studio photography style', role: 'studio-interior visual lineage', url: 'https://en.wikipedia.org/wiki/Aerial_silk' }
---

## 1. Visual Theme & Atmosphere

ClassPass's site is the wellness-marketplace counterpart to MyFitnessPal's tracker-utility. The canvas is warm off-white `#fffaf6` (slight cream tilt), headings sit in GT America (Grilli Type's neo-grotesque sans, also used by Linear and Vercel) at 48–72px, and the brand color is **ClassPass Coral** `#ec5e8a` — a warm pink-coral picked specifically to land between Glossier-candy-pink and Calm-muted-blue.

Photography drives the visual experience — full-bleed studio interiors (yoga, pilates, dance, boxing) at 16:9, color-graded warm with subtle pink wash. Cards have 16px radius and warm-pink-tinted shadows. Class-type accent colors (Yoga purple `#9b6dd4`, Pilates mint `#5dd4b8`, HIIT orange `#ff7e3f`) appear in class-card chips and category badges — never as primary CTA.

Voice is enthusiastic-discovery: "Try a thousand studios", "Find your next favorite workout". The brand reads as wellness-marketplace energy: variety + quality + the friendliness of a class-pass card you'd actually use. CTAs are pill-radius (full 9999px) — softer than utilitarian rectangular, more confident than fully rounded card.

**Key Characteristics:**
- Warm off-white canvas `#fffaf6` (cream tilt)
- ClassPass Coral `#ec5e8a` — only chromatic primary
- GT America sans for everything
- Class-type accent palette (yoga-purple, pilates-mint, HIIT-orange) for chips only
- Pill-radius CTAs (9999px)
- 16px card radius
- Warm-pink-tinted soft shadows
- Photography of studio interiors, never people-in-pose stock
- Light-only canvas
- Enthusiastic-discovery voice

## 2. Color Palette & Roles

### Primary
- **Background** (`#fffaf6`): warm cream off-white.
- **Bg Soft** (`#fef4eb`): deeper cream alternate band.
- **Bg Warm** (`#fdebdb`): peach-cream wash for hero.
- **Text** (`#1a1a1a`): body. Soft near-black.

### Brand — ClassPass Coral
- **Brand** (`#ec5e8a`): primary CTA, brand mark.
- **Brand Hover** (`#d44872`), **Pressed** (`#b8385d`), **Deep** (`#982a48`).
- **Brand Tint** (`#fde0ea`): selection wash.

### Class-Type Accents (chips only, not UI primary)
- **Yoga Purple** (`#9b6dd4`)
- **Pilates Mint** (`#5dd4b8`)
- **HIIT Orange** (`#ff7e3f`)

### Surface
- **Surface** (`#ffffff`), **Surface Soft** (`#fdf8f2`), **Surface Cream** (`#fbf2e7`).

### Borders
- **Border** (`#e8d8c8`), **Border Strong** (`#c8b6a4`), **Border Soft** (`#f0e6d8`).

### Semantic
- success `#3da568`, warning `#cc8800`, danger `#c4313a`, info = brand.

## 3. Typography Rules

### Font Family
- **Display + Body**: GT America. Falls back to Inter → Söhne.
- **Mono**: system mono only.

### Hierarchy

| Role | Font | Size | Weight | LH | Tracking |
|------|------|------|--------|-----|----------|
| display-hero | GT America | 72 | 700 | 1.05 | -0.02em |
| display-lg | GT America | 48 | 700 | 1.15 | -0.012em |
| h1 | GT America | 36 | 700 | 1.2 | -0.008em |
| h2 | GT America | 28 | 700 | 1.25 | -0.005em |
| h3 | GT America | 22 | 700 | 1.3 | 0 |
| eyebrow | GT America | 12 | 700 | 1.2 | 0.14em UPPER |
| body | GT America | 16 | 400 | 1.55 | 0 |
| label | GT America | 13 | 700 | 1.3 | 0.06em |
| button | GT America | 15 | 700 | 1.0 | 0.04em |

### Principles
- **GT America Bold for display** — Linear/Vercel sibling.
- **Mixed case display, UPPER eyebrows + buttons.**
- **Body 16px / 1.55** — standard rhythm.
- **0.04-0.14em tracking on uppercase.**

## 4. Component Stylings

### Buttons (3 variants — pill-radius)

**Primary** — ClassPass Coral:
- bg `#ec5e8a`, text white, 15px GT America 700 0.04em UPPER
- Padding 14×32, **radius 9999 (pill)**
- Hover: bg `#d44872`, scale 1.02

**Secondary** — bordered:
- bg cream, text brand, 2px brand border, pill radius

**Ghost**: bg transparent, text brand, padding 10×20.

### Cards
- bg white, **16px radius**, padding 24
- Soft warm-pink-tinted shadow `0 2px 12px rgba(236,94,138,0.08)`
- Hover: shadow `0 8px 24px rgba(236,94,138,0.14)`

### Class-Card (with class-type accent)
- White surface, 16px radius, full-bleed photo top, 24px Bold class name, class-type chip in respective accent color (yoga purple, pilates mint, HIIT orange)

### Pills (class types, time slots)
- bg `brand-tint`, text `brand-pressed`, pill radius
- Class-type pills: respective accent color tint bg + accent color text

### Inputs
- bg cream, 1px border, 12px radius
- Focus: border ClassPass Coral

### Navigation
- 72px sticky header, cream bg with hairline
- ClassPass wordmark left (coral), top-level nav center, "Sign in" + "Plans" right

## 5. Layout Principles

- Base 4px, 96-120px between sections
- Page max width 1280px
- Hero: full-bleed studio photo with overlapping headline left
- Class grid: 4-up at desktop, 2-up at tablet, 1-up at mobile

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 4 | tags |
| Standard | 8 | tooltips |
| Comfortable | 12 | inputs |
| Relaxed | 16 | **cards** |
| Featured | 24 | hero modules |
| Pill | 9999 | **buttons + class-type pills** |

## 7. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| 1 | `0 2px 12px rgba(236,94,138,0.08)` resting |
| 2 | `0 8px 24px rgba(236,94,138,0.14)` hover |
| 3 | `0 12px 32px rgba(236,94,138,0.18)` featured |
| 4 | `0 20px 60px rgba(236,94,138,0.20)` modal |

## 8. Interaction & Motion

- Standard ease, emphasized with overshoot for celebrate states
- 150ms hover, 240ms standard, 400ms slow
- Card hover: scale 1.02 + shadow lift
- Studio photos slow Ken Burns 8-10s

## 9. Accessibility & A11y

- text on bg = **16.0:1** AAA
- on-brand on brand = **4.5:1** AA
- 3px ClassPass Coral focus ring

Class-type chips use `aria-label="Yoga class, beginner level"` etc. Studio photography decorative `aria-hidden`.

## 10. Responsive Behavior

mobile <479: hero 72→44; nav hamburger; 1-up. tablet: 2-up. desktop+: 4-up.

## 11. Content & Voice

### Tone
**Enthusiastic-discovery.** Friendly, warm, curious, never preachy. Voice is the friend who's tried every studio in town.

### Microcopy patterns
- Primary CTA: **"Try ClassPass"** / **"Book a class"** / **"Find studios near you"**
- Sign-up: **"Sign up — first month half off"**
- Errors: **"That class is full. Here are similar nearby."**
- Loading: **"Finding classes…"**
- Empty: **"No classes match. Try a different time or category."**

### CTA verb conventions
- **Try / Book / Find / Discover**
- Avoid: utilitarian ("Submit", "Click")

## 12. Dark Mode & Theming

**Light-only on web.** Cream canvas + coral CTA is the brand.

## 13. Lineage & Influences

ClassPass descends from the 2013-2018 wellness-marketplace category. ClassPass Coral `#ec5e8a` lands between Glossier-candy-pink and Calm-muted-blue. GT America (Linear/Vercel sibling) anchors typography. Photography of studio interiors drives visual; class-type accents (yoga purple, pilates mint, HIIT orange) chip-only.

**Named influences:**
- **GT America (Grilli Type)** — neo-grotesque sans
- **Glossier brand language** — wellness-adjacent contemporary
- **Mindbody / Studios.com** — marketplace peers
- **Pantone 1925 / coral palette** — pink-coral wellness lineage
- **Boutique studio photography style** — visual lineage

## 14. Do's and Don'ts

### Do
- **Warm cream canvas** `#fffaf6` — never pure white.
- **ClassPass Coral `#ec5e8a` for primary CTA + brand only.**
- **GT America sans for everything.**
- **Class-type accents (yoga/pilates/HIIT) for chips only.**
- **Pill-radius CTAs.**
- **16px card radius.**
- **Warm-pink-tinted shadows.**
- **Studio-interior photography**, never stock people-in-pose.

### Don't
- **Don't substitute coral.** `#ec5e8a` is the brand.
- **Don't use accent colors as primary CTA.**
- **Don't all-caps headlines.**
- **Don't add gradients on CTA.**
- **Don't add dark mode.**
- **Don't use pure white canvas.**
- **Don't add a friendly mascot.**

## 15. Agent Prompt Guide

### Quick Color Reference
- bg (warm cream): `#fffaf6`
- text: `#1a1a1a`
- brand (ClassPass Coral): `#ec5e8a` / hover `#d44872`
- class-type: yoga `#9b6dd4` / pilates `#5dd4b8` / HIIT `#ff7e3f`
- border: `#e8d8c8`

### Example Component Prompts

> Build a ClassPass-style hero: 70vh full-bleed yoga studio photo color-graded warm with pink wash, cream scrim 30% from bottom, 72px GT America Bold heading "Find your next favorite workout" mixed-case `-0.02em`. Pill-radius coral `#ec5e8a` "Try ClassPass" CTA, 15px GT America 700 0.04em UPPER.

> Design a class card: white surface, 16px radius, 24px pad, full-bleed studio photo top, soft warm-pink-tinted shadow. 22px GT America h3 "Vinyasa Flow", yoga-purple chip 13px UPPER 0.06em "YOGA · 60 MIN", body in 14px gray.

> Render a class-type chip: pill radius, accent-color-soft bg, accent-color text 13px GT America 700 0.06em UPPER. Yoga purple, Pilates mint, HIIT orange.

> Build a "Book class" CTA: pill radius, ClassPass Coral bg, white 15px GT America 700 0.04em UPPER, padding 14×32. Hover scale 1.02.

> Design a search input: cream bg, 1px gray-cream border, 12px radius, padding 12×16, placeholder "studio, class, or area", focus border coral.

### Iteration Guide

1. **Warm cream + ClassPass Coral + GT America.** The trio.
2. **Pill-radius CTAs, 16px cards.**
3. **Class-type accents (purple/mint/orange) for chips only.**
4. **Warm-pink-tinted shadows.**
5. **Mixed case display, UPPER buttons.**
6. **Studio-interior photography, never stock yoga-poses.**
7. **Enthusiastic-discovery voice.**
8. **Reject pure white, accent-as-primary, all-caps headlines, mascots.**
