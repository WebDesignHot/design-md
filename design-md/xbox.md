---
name: Xbox
tagline: Xbox Green on near-black, Microsoft's Segoe UI Display dialed to gamer-coded confidence — bold, energetic, Game Pass-first.
updated_at: 2026-05-08T00:00:00.000Z
published_at: 2026-05-07T20:01:41.593Z
author: webdesignhot
source_url: https://www.xbox.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [gaming]
tags: [dark, structured, sans, bright]
preview_swatch: ['#0e0e10', '#107c10', '#ffffff']
related: [playstation, valorant, microsoft]
description: 'Xbox''s site is what happens when Microsoft Fluent Design meets gamer-bro confidence. The canvas is near-black `#0e0e10`, headings sit in Segoe UI Display (Microsoft''s system display face) at 56–96px Bold, and the only chromatic accent is "Xbox Green" `#107c10`. Where PlayStation chose cinematic restraint, Xbox chose bold, energetic, and unembarrassed: pill-radius CTAs, Game Pass-first navigation, full-bleed video heroes with overlapping headline blocks, and a green-on-black palette that rejects subtlety in favor of stage-light visibility. The brand reads premium-but-energetic — premium hardware, but you''re here to play, not contemplate.'

colors:
  bg: '#0e0e10'
  bg-deep: '#040405'
  bg-section: '#1a1a1c'
  bg-elev: '#222226'
  surface: '#1a1a1c'
  surface-strong: '#2a2a2e'
  surface-translucent: 'rgba(14, 14, 16, 0.85)'
  brand: '#107c10'
  brand-hover: '#16a316'
  brand-pressed: '#0c5e0c'
  brand-deep: '#08440a'
  brand-tint: 'rgba(16, 124, 16, 0.20)'
  on-brand: '#ffffff'
  text: '#ffffff'
  text-strong: '#ffffff'
  text-muted: '#a8a8a8'
  text-soft: '#787878'
  text-faint: '#5a5a5a'
  text-on-brand: '#ffffff'
  link: '#3aaa3a'
  link-hover: '#16a316'
  selected-bg: 'rgba(16, 124, 16, 0.20)'
  border: 'rgba(255, 255, 255, 0.10)'
  border-strong: 'rgba(255, 255, 255, 0.20)'
  border-brand: '#107c10'
  game-pass-yellow: '#ffd71a'
  game-pass-yellow-deep: '#cc9f00'
  success: '#107c10'
  warning: '#ffa61a'
  danger: '#ff4757'
  info: '#0078d4'

typography:
  display:
    family: '"Segoe UI Display", "Segoe UI", "Inter", -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [600, 700, 800]
  body:
    family: '"Segoe UI", "Inter", -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"Cascadia Code", "Consolas", ui-monospace, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 96, weight: 800, lineHeight: 1.0,  tracking: '-0.02em',  family: display }
    display-xl:      { size: 72, weight: 800, lineHeight: 1.05, tracking: '-0.018em', family: display }
    display-lg:      { size: 56, weight: 700, lineHeight: 1.1,  tracking: '-0.012em', family: display }
    h1:              { size: 40, weight: 700, lineHeight: 1.15, tracking: '-0.008em', family: display }
    h2:              { size: 32, weight: 700, lineHeight: 1.2,  tracking: '-0.005em', family: display }
    h3:              { size: 24, weight: 700, lineHeight: 1.25, tracking: '0',        family: display }
    h4:              { size: 18, weight: 700, lineHeight: 1.3,  tracking: '0',        family: display }
    eyebrow:         { size: 13, weight: 700, lineHeight: 1.2,  tracking: '0.10em',   family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 700, lineHeight: 1.3,  tracking: '0.04em',   family: body }
    button:          { size: 16, weight: 700, lineHeight: 1.0,  tracking: '0.02em',   family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 72
  hero-y: 160

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — pauses video, freezes parallax'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1280
  wide: 1440

shadows:
  card: '0 2px 8px rgba(0, 0, 0, 0.40)'
  card-hover: '0 4px 16px rgba(16, 124, 16, 0.30)'
  modal: '0 24px 64px rgba(0, 0, 0, 0.85)'

accessibility:
  contrast-text-on-bg: 18.6
  contrast-text-on-brand: 5.6
  focus-ring: '3px solid #16a316'
  reduced-motion-honored: true

components:
  button-primary: { bg: brand, text: on-brand, padding: '14px 36px', radius: pill, font: button }
  button-secondary: { bg: bg-elev, text: text, padding: '12px 32px', radius: pill, border: '1px solid border-strong' }
  button-ghost: { bg: transparent, text: brand, padding: '12px 24px' }
  card: { bg: surface, radius: 8, padding: 24, shadow: 'card' }
  pill: { bg: surface-strong, text: text, radius: pill, padding: '4px 12px', font: 'label' }
  input: { bg: bg-elev, border: '1px solid border-strong', text: text, radius: 4, padding: '12px 16px', focus-border: brand }

lineage:
  summary: 'Xbox''s marketing system is Microsoft Fluent Design dialed to gamer confidence. Segoe UI Display — the same family that runs Windows 11, Microsoft 365, Surface, and every Microsoft Cloud product — handles every heading. Xbox Green `#107c10` traces to the 2001 launch and has been preserved as Pantone 369 C across four console generations. Where PlayStation chose cinematic restraint, Xbox chose bold-energetic. Pill-radius CTAs (the only major gaming brand using full pill), Game Pass-first navigation, full-bleed video heroes with overlapping headline blocks, and unapologetic green-on-black saturation. The brand reads "premium-but-energetic" — Microsoft hardware confidence, gamer-bro voice, Game Pass mass-market positioning.'
  influences:
    - { name: 'Microsoft Fluent Design (2017)', role: 'design system parent, motion + materials language', url: 'https://www.microsoft.com/design/fluent' }
    - { name: 'Segoe UI / Segoe UI Display', role: 'Microsoft''s typographic monoculture across all products', url: 'https://learn.microsoft.com/en-us/typography/font-list/segoe-ui' }
    - { name: 'Pantone 369 C — Xbox Green', role: 'brand color anchor since 2001 console launch', url: 'https://www.pantone.com' }
    - { name: 'Halo (Bungie / 343 Industries)', role: 'iconic Xbox franchise visual influence — Spartan green, sci-fi typography', url: 'https://www.halowaypoint.com' }
    - { name: 'Xbox Game Pass marketing', role: 'subscription-first nav language; CTA = "Join Game Pass" not "Buy now"', url: 'https://www.xbox.com/games/xbox-game-pass' }
---

## 1. Visual Theme & Atmosphere

Xbox's site is what happens when Microsoft Fluent Design meets gamer-bro confidence. The canvas is near-black `#0e0e10` (slightly cooler than PlayStation's pure black, slightly less brutalist than Valorant's blacksite). Headings sit in Segoe UI Display — Microsoft's system display face — at 56–96px Bold. The only chromatic accent is "Xbox Green" `#107c10` (Pantone 369 C, preserved across four console generations).

Where PlayStation chose cinematic restraint and Valorant chose magazine-tactical, Xbox chose **bold-energetic**. Pill-radius CTAs (full 9999px — the only major gaming brand committing to pill), Game Pass-first navigation prioritizing subscription over hardware, full-bleed video heroes with overlapping headline blocks, and unapologetic green-on-black saturation that rejects subtlety in favor of stage-light visibility.

The brand reads "premium-but-energetic" — Microsoft's hardware confidence layered with gamer-bro voice and Game Pass's mass-market positioning. Headings are mixed-case (not all-caps like Valorant), but typography weights run aggressive (700-800 Bold). Cards have soft drop shadows with a green tint on hover, not hairline rules. CTAs are oversized: 14×36 padding minimum, scaling to 18×48 on hero. Microcopy leans "Join Game Pass", "Play now", "Stream and play" — never "Buy now" alone.

**Key Characteristics:**
- Near-black canvas `#0e0e10` (cooler than PS5's true black)
- Xbox Green `#107c10` (Pantone 369 C) — only chromatic accent
- Segoe UI Display for everything (Microsoft monoculture)
- Pill-radius (9999px) on all CTAs — the brand's button signature
- Game Pass-first nav language ("Join Game Pass" > "Buy")
- Mixed case display, never all-caps
- Soft drop shadows with green tint on hover
- Bold weights (700-800), aggressive
- Game Pass yellow `#ffd71a` as a secondary system accent
- Microsoft Fluent Design lineage visible in motion + materials

## 2. Color Palette & Roles

### Primary
- **Background** (`#0e0e10`): near-black with slight cool tilt — the brand's canvas across console UI and web.
- **Text** (`#ffffff`): pure white at 100%.
- **Text Muted** (`#a8a8a8`): captions, metadata.

### Brand — Xbox Green
- **Brand** (`#107c10`): Pantone 369 C, the iconic Xbox Green.
- **Brand Hover** (`#16a316`): brighter green on hover.
- **Brand Pressed** (`#0c5e0c`): pressed state.
- **Brand Deep** (`#08440a`): icon strokes inside green badges.
- **Brand Tint** (20% green): selection wash.

### Surface
- **Surface** (`#1a1a1c`): cards on near-black.
- **Surface Strong** (`#2a2a2e`): featured / hover.
- **Bg Elev** (`#222226`): inputs, dense panels.

### Game Pass Accent (paired)
- **Game Pass Yellow** (`#ffd71a`): subscription badge, "GP" mark.
- **Game Pass Yellow Deep** (`#cc9f00`): shadow / pressed.

### Borders
- **Border** (10% white), **Border Strong** (20% white), **Border Brand** = green.

### Semantic
- success = brand `#107c10`, warning `#ffa61a`, danger `#ff4757`, info Microsoft blue `#0078d4`.

## 3. Typography Rules

### Font Family
- **Display + Body**: Segoe UI Display (display) / Segoe UI (body) — Microsoft's system family. Falls back to Inter and system stacks. Microsoft licenses Segoe across all products (Windows, 365, Surface, Xbox, Cloud).
- **Mono**: Cascadia Code (Microsoft's mono) / Consolas in code samples.

### Hierarchy

| Role | Font | Size | Weight | LH | Tracking | Notes |
|------|------|------|--------|-----|----------|-------|
| display-hero | Segoe UI Display | 96 | 800 | 1.0 | -0.02em | Game Pass / new console hero |
| display-xl | Segoe UI Display | 72 | 800 | 1.05 | -0.018em | feature heading |
| display-lg | Segoe UI Display | 56 | 700 | 1.1 | -0.012em | section H |
| h1 | Segoe UI Display | 40 | 700 | 1.15 | -0.008em | sub-section |
| h2 | Segoe UI Display | 32 | 700 | 1.2 | -0.005em | card H |
| h3 | Segoe UI Display | 24 | 700 | 1.25 | 0 | sub-card |
| h4 | Segoe UI Display | 18 | 700 | 1.3 | 0 | inline |
| eyebrow | Segoe UI | 13 | 700 | 1.2 | 0.10em (UPPER) | section labels |
| body-lg | Segoe UI | 18 | 400 | 1.55 | 0 | hero subhead |
| body | Segoe UI | 16 | 400 | 1.55 | 0 | body |
| body-sm | Segoe UI | 14 | 400 | 1.5 | 0 | secondary |
| label | Segoe UI | 13 | 700 | 1.3 | 0.04em | tags |
| button | Segoe UI | 16 | 700 | 1.0 | 0.02em | CTA |

### Principles
- **Segoe everywhere**, mirroring the rest of Microsoft's products. No substituting Inter on production.
- **Mixed case display** — no all-caps headlines.
- **Aggressive weights** (700-800) — Xbox skews bolder than PlayStation.
- **Body 16px** (not 15px like PS) — slightly more accessible / less editorial.
- **Eyebrow tracking 0.10em** (lighter than Valorant's 0.18em) — matches Microsoft Fluent's gentler caps treatment.

## 4. Component Stylings

### Buttons (3 variants — pill-radius)

**Primary** — Xbox Green:
- bg `#107c10`, text white, font Segoe UI 16px 700 0.02em
- padding 14×36, **radius 9999 (pill)** — the brand's button signature
- Hover: bg `#16a316`, scale 1.03
- Press: bg `#0c5e0c`, scale 0.98
- Disabled: bg 30% green, text 60% white

**Secondary** — bordered:
- bg `bg-elev`, text white, 1px white-20% border, pill radius
- Hover: bg `surface-strong`

**Ghost** — link-style:
- bg transparent, text Xbox Green, padding 12×24

**Game Pass CTA (oversized)**:
- 18px font, padding 18×48, pill radius, otherwise primary
- Often paired with Game Pass yellow accent dot/badge

### Cards
- bg `#1a1a1c`, **radius 8** (not pill, not 0), padding 24
- Drop shadow `0 2px 8px rgba(0,0,0,0.40)`
- Hover: shadow shifts to `0 4px 16px rgba(16,124,16,0.30)` — green tint signature
- Featured cards: 1px green border + Game Pass yellow dot

### Pills (game tags, age ratings, GP badges)
- bg `surface-strong`, text white, radius pill (only place pills exist outside buttons)
- font label
- "Game Pass" pill: bg yellow `#ffd71a`, text black `#0e0e10`, deep yellow shadow

### Inputs
- bg `bg-elev`, 1px border at 20% white, **radius 4** (not pill — readability)
- Focus: border green, no glow

### Navigation
- 72px sticky header, near-black bg
- Xbox sphere logo left (green sphere on near-black), top-level nav center
- "Join Game Pass" pill CTA right (Xbox Green), Account icon

## 5. Layout Principles

### Spacing
- Base 4px, scale `[0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]`
- 96px between sections
- 160px reserved for hero top

### Grid & Container
- Page max width 1440px
- Hero often overlapping blocks: video bg + 96px headline + 18px dek + dual CTA, all aligned bottom-left
- Game grid: 4-up at desktop, 2-up at tablet, 1-up at mobile
- Game Pass library: dense 6-up grid (more games visible per fold)

### Whitespace
- Section pads 96-120px on marketing
- Game-grid sections allow density (6-up with 16px gap)

### Section Cadence
- Mostly black-on-near-black with green accents
- Occasional `bg-section` (`#1a1a1c`) for editorial / news bands
- Game Pass campaign sections sometimes get a green gradient fade

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2 | hairline indicators |
| Standard | 4 | inputs, dropdowns |
| Comfortable | 8 | **default card radius** |
| Relaxed | 12 | featured cards, modals |
| Featured | 16 | oversized hero cards |
| Pill | 9999 | **all buttons + GP badges** |

Pill on buttons and 8px on cards is the brand's structural signature.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | none | inline |
| 1 | `0 2px 8px rgba(0,0,0,0.40)` | resting cards |
| 2 | `0 4px 16px rgba(16,124,16,0.30)` | hover (green tint) |
| 3 | `0 8px 24px rgba(0,0,0,0.55)` | featured / dropdown |
| 4 | `0 24px 64px rgba(0,0,0,0.85)` | modal |

### Shadow Philosophy
The brand uses **soft blur shadows with selective green tinting on hover**. This is Microsoft Fluent's "depth + brand-tint" pattern, distinguishing Xbox from PlayStation's hairline-rule approach.

## 8. Interaction & Motion

### Easing & duration
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — Microsoft Fluent's standard curve
- **Emphasized ease**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — overshoot for celebratory states
- Durations: 120ms (hover), 200ms (focus, dropdown), 320ms (modal, page transition)

### Per-component
- **Primary CTA hover**: bg shift + scale 1.03 in 120ms
- **Card hover**: shadow shifts + green tint in 200ms
- **Game tile reveal (scroll)**: fade + 16px translate in 320ms
- **Hero video**: autoplay loops, muted

### Reduced Motion
Honors `prefers-reduced-motion: reduce`. Video pauses; transforms replaced with opacity.

## 9. Accessibility & A11y

### Contrast
- white on bg: `#ffffff` on `#0e0e10` = **18.6:1** (AAA)
- on-brand on brand: `#ffffff` on `#107c10` = **5.6:1** (AA at body, AAA at large)

### Focus
3px solid `#16a316` (brand-hover green, brighter than brand for visibility) ring.

### ARIA & Keyboard
- Game Pass CTA has `aria-label="Join Xbox Game Pass — $14.99/month"`
- Sphere logo wordmarked for SR
- Hero video has visible play/pause + audio toggle

### Screen Reader
- Eyebrow all-caps via CSS uppercase, not HTML
- Decorative imagery `aria-hidden="true"`

## 10. Responsive Behavior

| Breakpoint | px | Behavior |
|-----------|-----|----------|
| mobile | 0-479 | hero scales 96→44px; nav hamburger; 1-up game grid |
| tablet | 480-767 | 2-up grid, sticky CTA |
| desktop | 768-1279 | 3-up grid, full nav, GP banner |
| wide | 1280-1440 | 4-up grid, larger heroes |

### Touch Targets
44×44 min, primary CTAs scale to 56-64px height on hero.

### Per-component
- Nav → hamburger overlay at <768px with full-screen menu
- Game grid → vertical scroll snap mobile
- GP banner → sticky top of mobile pages

### Image Behavior
- Game key art: `cover`, top-aligned 16:9
- Hero video: `cover`, 100vh, muted autoplay

## 11. Content & Voice

### Tone
**Confident-energetic.** Microsoft hardware confidence + gamer-bro voice + Game Pass mass-market warmth. Verbs over adjectives, "Play now", "Join", "Discover".

### Microcopy patterns
- Primary CTA: **"Join Game Pass"** (subscription-first), **"Play now"** (game), **"Buy now"** (hardware)
- Sign-up: **"Sign in with Microsoft"** — Account integration explicit
- Errors: **"Something went wrong"** — gentle, gamer-friendly
- Loading: **"Loading…"** with the iconic Xbox spinner ring
- Empty: **"Add games to start your library"** — suggestive

### Empty states
Always include a CTA path. Sometimes show GP recommendations.

### CTA verb conventions
- **Join Game Pass** (subscription)
- **Play / Play now** (game)
- **Buy / Pre-order** (hardware, owned games)
- **Stream and play** (cloud gaming)
- **Sign in / Sign up** (auth)
- Avoid: "Click", "Submit", PS-style "Buy now" alone (Xbox prefers "Play now" for owned content)

## 12. Dark Mode & Theming

**Dark-only.** Near-black `#0e0e10` is the brand's canvas across web, Xbox console UI, and Xbox app. Marketing surfaces never ship light.

The Microsoft Store on Windows has a light variant, but Xbox marketing always stays dark. If a light surface is forced (rare partner), the brand keeps Xbox Green unchanged and inverts to white bg with `#1a1a1c` text.

## 13. Lineage & Influences

Xbox's marketing system is Microsoft Fluent Design dialed to gamer confidence. Segoe UI Display — the family running every Windows product, Microsoft 365 surface, Surface hardware, and Microsoft Cloud — handles every heading. Xbox Green `#107c10` traces to the 2001 launch and has been preserved as Pantone 369 C across four console generations.

Where PlayStation chose cinematic restraint, Xbox chose bold-energetic. Pill-radius CTAs (the only major gaming brand committing to full pill), Game Pass-first navigation prioritizing subscription over hardware, full-bleed video heroes with overlapping headline blocks. The brand reads "premium-but-energetic" — Microsoft hardware confidence + gamer-bro voice + Game Pass mass-market positioning.

**Named influences:**
- **Microsoft Fluent Design (2017)** — design system parent
- **Segoe UI / Segoe UI Display** — Microsoft typographic monoculture
- **Pantone 369 C — Xbox Green** — brand color since 2001
- **Halo (Bungie / 343 Industries)** — iconic franchise visual influence
- **Xbox Game Pass marketing** — subscription-first nav language

## 14. Do's and Don'ts

### Do
- **Use Xbox Green `#107c10` for brand + primary CTA.** Pantone 369 C exclusively.
- **Pill-radius (9999px) on all CTAs.**
- **Segoe UI Display for everything.** No Inter unless absolutely necessary.
- **Mixed case display.** All-caps for eyebrows + labels only.
- **Aggressive weights** (700-800) on display.
- **Microsoft Fluent shadows** — soft blur with green tint on hover.
- **Game Pass-first messaging** — "Join Game Pass" beats "Buy" for subscription content.
- **8px radius on cards.** Not pill (cards are content), not 0 (too brutalist).

### Don't
- **Don't use pure black `#000000`.** Near-black `#0e0e10` is the brand.
- **Don't use Inter or generic sans for display.** Segoe is non-negotiable.
- **Don't all-caps headlines.**
- **Don't substitute Xbox Green.** No Tailwind green, no `#22c55e`.
- **Don't use hairline borders for elevation.** Soft shadows do the work.
- **Don't add gradients on CTA.** Solid Xbox Green only.
- **Don't lead with hardware purchase.** Game Pass is the brand's primary commerce surface.
- **Don't add a friendly mascot.** Xbox has no mascot; the sphere is the mark.

## 15. Agent Prompt Guide

### Quick Color Reference
- bg: `#0e0e10`
- text: `#ffffff`
- brand (Xbox Green / Pantone 369 C): `#107c10` / hover `#16a316` / pressed `#0c5e0c`
- game-pass-yellow: `#ffd71a` / shadow `#cc9f00`
- surface: `#1a1a1c` / strong `#2a2a2e`
- border: 10% white / strong 20% white

### Example Component Prompts

> Build an Xbox-style hero: 100vh full-bleed game video, near-black overlay scrim 30% from bottom, 96px Segoe UI Display Bold heading "Welcome to Game Pass" mixed-case `-0.02em`, 18px Segoe regular dek in white. Primary CTA "Join Game Pass" pill-radius Xbox Green `#107c10` 16px Segoe 700 0.02em. Padding 14×36.

> Design a game card: bg `#1a1a1c`, 8px radius, 24px pad, `0 2px 8px rgba(0,0,0,0.40)` shadow. Key art top full-bleed, 24px Segoe UI Display 700 game title, 13px Segoe label "Game Pass" in yellow pill. Hover: green-tinted shadow `0 4px 16px rgba(16,124,16,0.30)`.

> Render a Game Pass badge: pill radius, yellow `#ffd71a` bg, black `#0e0e10` text 13px Segoe UI 700 0.04em "GAME PASS", padding 4×12, 1-2px deep yellow shadow `#cc9f00`.

> Build a "Sign in with Microsoft" CTA: pill radius, transparent bg, 1px white-20% border, 16px Segoe UI 700 white text, padding 12×32. Hover: bg shifts to `#222226`.

> Design a tag pill: surface-strong `#2a2a2e` bg, white text 13px Segoe UI 700 0.04em "ACTION", pill radius, 4×12 pad.

### Iteration Guide

1. **Start with near-black `#0e0e10` + Segoe.** Get the Microsoft monoculture right.
2. **Pill-radius all CTAs.** It's the brand's structural signature.
3. **Bold weights everywhere.** 700-800 on display, 700 on buttons.
4. **Soft blur shadows + green tint on hover.** Microsoft Fluent's "depth + brand" pattern.
5. **Game Pass-first messaging.** Lead with subscription, not hardware.
6. **8px on cards, pill on buttons.** Mixing is the brand.
7. **Microsoft Sphere logo, no mascot.**
8. **Mixed case display, never all-caps.**
