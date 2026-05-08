---
name: Fortnite
tagline: Battle-royale design at maximum saturation — neon yellow + electric blue on near-black, Burbank Big condensed display, season-driven brand kaleidoscope.
updated_at: 2026-05-08T00:00:00.000Z
published_at: 2026-05-08T00:00:00.000Z
author: webdesignhot
source_url: https://www.fortnite.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [gaming]
tags: [dark, playful, sans, bright, structured]
preview_swatch: ['#0e1218', '#fcfd00', '#27c2ff']
related: [valorant, playstation, xbox]
description: 'Fortnite''s site is the AAA battle-royale brand at maximum saturation. The canvas is near-black `#0e1218`, headings sit in Burbank Big Condensed (Process Type Foundry) at 64–120px all-caps, and the dual brand colors are "Fortnite Yellow" `#fcfd00` and "Fortnite Blue" `#27c2ff` — neon-vivid, picked to read at esports stage distance through screen glare. Every season (Chapter 5, Chapter 6, etc.) introduces fresh accent palettes layered over this base, but the yellow/blue/near-black trio is the structural anchor. Where Valorant chose magazine-tactical and PlayStation chose cinematic-restrained, Fortnite chose **kaleidoscope-energetic** — overlapping headlines, gradient text, video-hero parallax, dense item grids. Voice is hype-direct: "Drop in", "Survive", "Win". The whole brand reads like a gameshow that never stops.'

colors:
  bg: '#0e1218'
  bg-deep: '#06090d'
  bg-section: '#181d27'
  bg-elev: '#222936'
  surface: '#181d27'
  surface-strong: '#222936'
  surface-translucent: 'rgba(14, 18, 24, 0.85)'
  brand-yellow: '#fcfd00'
  brand-yellow-deep: '#ccd000'
  brand-yellow-soft: 'rgba(252, 253, 0, 0.20)'
  brand-blue: '#27c2ff'
  brand-blue-deep: '#1da0d8'
  brand-blue-soft: 'rgba(39, 194, 255, 0.20)'
  brand-gradient: 'linear-gradient(135deg, #fcfd00 0%, #27c2ff 100%)'
  on-brand-yellow: '#0e1218'
  on-brand-blue: '#ffffff'
  text: '#ffffff'
  text-strong: '#ffffff'
  text-muted: '#a8b0bc'
  text-soft: '#7a818c'
  text-faint: '#5a6068'
  text-on-brand-yellow: '#0e1218'
  text-on-brand-blue: '#ffffff'
  link: '#27c2ff'
  link-hover: '#fcfd00'
  selected-bg: 'rgba(39, 194, 255, 0.15)'
  border: 'rgba(255, 255, 255, 0.10)'
  border-strong: 'rgba(255, 255, 255, 0.25)'
  border-yellow: '#fcfd00'
  border-blue: '#27c2ff'
  rare-blue: '#27c2ff'
  rare-purple: '#a05ec5'
  rare-orange: '#ff8a00'
  rare-gold: '#ffd700'
  success: '#5dd48a'
  warning: '#fcfd00'
  danger: '#ff4757'
  info: '#27c2ff'

typography:
  display:
    family: '"Burbank Big Condensed", "Burbank Big", "Bebas Neue", "Oswald", Impact, sans-serif'
    weights: [700, 800]
    opentype-features: 'kern, liga'
  body:
    family: '"Burbank Big", "Inter", "Helvetica Neue", -apple-system, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 120, weight: 800, lineHeight: 0.92, tracking: '0.005em', family: display, opentype: 'liga' }
    display-xl:      { size: 96,  weight: 800, lineHeight: 0.95, tracking: '0.005em', family: display }
    display-lg:      { size: 72,  weight: 800, lineHeight: 1.0,  tracking: '0.005em', family: display }
    h1:              { size: 56,  weight: 800, lineHeight: 1.05, tracking: '0',       family: display }
    h2:              { size: 40,  weight: 700, lineHeight: 1.1,  tracking: '0',       family: display }
    h3:              { size: 28,  weight: 700, lineHeight: 1.15, tracking: '0',       family: display }
    h4:              { size: 22,  weight: 700, lineHeight: 1.2,  tracking: '0',       family: display }
    eyebrow:         { size: 13,  weight: 700, lineHeight: 1.2,  tracking: '0.16em',  family: body }
    body-lg:         { size: 18,  weight: 400, lineHeight: 1.55, tracking: '0',       family: body }
    body:            { size: 15,  weight: 400, lineHeight: 1.55, tracking: '0',       family: body }
    body-sm:         { size: 13,  weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    label:           { size: 12,  weight: 700, lineHeight: 1.3,  tracking: '0.10em',  family: body }
    button:          { size: 16,  weight: 700, lineHeight: 1.0,  tracking: '0.06em',  family: body }
    caption:         { size: 12,  weight: 500, lineHeight: 1.4,  tracking: '0',       family: body }

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
  duration-standard: 180
  duration-slow: 280
  duration-cinematic: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce — disables parallax + gradient animations'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1280
  wide: 1440

shadows:
  card: '0 2px 8px rgba(0, 0, 0, 0.40)'
  card-hover: '0 0 0 2px rgba(39, 194, 255, 0.6)'
  glow-yellow: '0 0 32px rgba(252, 253, 0, 0.40)'
  glow-blue: '0 0 32px rgba(39, 194, 255, 0.40)'
  modal: '0 24px 64px rgba(0, 0, 0, 0.80)'

accessibility:
  contrast-text-on-bg: 19.6
  contrast-text-on-brand-yellow: 17.2
  contrast-text-on-brand-blue: 4.5
  focus-ring: '3px solid #fcfd00'
  reduced-motion-honored: true
  note: 'Yellow `#fcfd00` requires DARK text (1.7:1 vs white). Blue `#27c2ff` works with white at large sizes (4.5:1 AA).'

components:
  button-primary: { bg: brand-yellow, text: text-on-brand-yellow, padding: '14px 32px', radius: 4, font: button }
  button-blue: { bg: brand-blue, text: text-on-brand-blue, padding: '14px 32px', radius: 4, font: button }
  button-secondary: { bg: transparent, text: text, padding: '12px 30px', radius: 4, border: '1px solid border-strong' }
  button-ghost: { bg: transparent, text: brand-blue, padding: '10px 20px' }
  card: { bg: surface, radius: 4, padding: 24, border: '1px solid border' }
  pill: { bg: surface-strong, text: text, radius: pill, padding: '4px 12px', font: 'label' }
  rarity-pill: { bg: 'rarity-color-soft', text: 'rarity-color', radius: 4, padding: '4px 8px', font: 'label' }
  input: { bg: bg-elev, border: '1px solid border-strong', text: text, radius: 4, padding: '12px 16px', focus-border: brand-blue }

lineage:
  summary: 'Fortnite''s marketing system descends from Epic Games'' 2017 Battle Royale launch, evolved through 25+ seasons (Chapter 1-6) of brand iteration. Burbank Big Condensed (Process Type Foundry) anchors all display headlines — chosen specifically for its esports-stage legibility. The dual brand colors — Fortnite Yellow `#fcfd00` and Fortnite Blue `#27c2ff` — are neon-vivid, picked to read at distance through stage glare. Every season introduces fresh accent palettes layered over this base; loot rarity is color-coded (Common gray → Uncommon green → Rare blue → Epic purple → Legendary orange → Mythic gold). Where Valorant chose magazine-tactical, Fortnite chose kaleidoscope-energetic — overlapping headlines, gradient text, video-hero parallax, dense item grids. The brand reads like a gameshow that never stops.'
  influences:
    - { name: 'Epic Games / Tim Sweeney', role: 'Battle Royale launch (2017) shaping season-driven brand iteration', url: 'https://www.epicgames.com' }
    - { name: 'Burbank Big by Process Type Foundry', role: 'condensed display sans, esports-stage-legible', url: 'https://processtypefoundry.com/fonts/burbank' }
    - { name: 'Loot rarity color system', role: 'Common/Uncommon/Rare/Epic/Legendary/Mythic palette lineage in MMO/RPG history', url: 'https://en.wikipedia.org/wiki/Loot_(video_gaming)' }
    - { name: 'Saturday-morning gameshow aesthetics', role: 'kaleidoscope-energetic visual lineage', url: 'https://en.wikipedia.org/wiki/Game_show' }
    - { name: 'Travis Scott / Marshmello in-game concerts', role: 'cross-media brand expansion influencing site-wide aesthetic', url: 'https://www.fortnite.com' }
---

## 1. Visual Theme & Atmosphere

Fortnite's site is the AAA battle-royale brand at **maximum saturation**. The canvas is near-black `#0e1218`, headings sit in **Burbank Big Condensed** (Process Type Foundry) at 64–120px all-caps, and the dual brand colors are **Fortnite Yellow** `#fcfd00` and **Fortnite Blue** `#27c2ff` — neon-vivid, picked to read at esports-stage distance through screen glare.

Every season (Chapter 5, Chapter 6, etc.) introduces fresh accent palettes layered over this base, but the yellow/blue/near-black trio is the **structural anchor**. Where Valorant chose magazine-tactical and PlayStation chose cinematic-restrained, Fortnite chose **kaleidoscope-energetic** — overlapping headlines, gradient text combining the dual brand colors, video-hero parallax, dense item grids.

Loot rarity is color-coded across MMO/RPG tradition: **Common gray → Uncommon green → Rare blue → Epic purple → Legendary orange → Mythic gold**. The whole brand reads like a **gameshow that never stops**. CTAs are 4px-radius rectangles (gentle rectangular, not 0px brutalist). Voice is hype-direct: "Drop in", "Survive", "Win".

**Key Characteristics:**
- Near-black canvas `#0e1218`
- Dual brand: Fortnite Yellow `#fcfd00` + Fortnite Blue `#27c2ff`
- Gradient text combining yellow → blue
- Burbank Big Condensed all-caps display 64-120px
- Loot-rarity color system (gray/green/blue/purple/orange/gold)
- 4px radius UI (gentle rectangular)
- **DARK text on yellow** (accessibility); white text on blue
- Hero typography goes huge (96-120px+)
- Glow shadows on featured items
- Dark-only canvas
- Hype-direct voice (Drop / Survive / Win)
- Season-driven brand kaleidoscope

## 2. Color Palette & Roles

### Primary
- **Background** (`#0e1218`): near-black with cool tilt.
- **Text** (`#ffffff`): pure white.

### Brand — Dual: Yellow + Blue
- **Brand Yellow** (`#fcfd00`): primary CTA, "Drop in", brand wordmark.
- **Brand Yellow Deep** (`#ccd000`): pressed.
- **Text on Yellow** (`#0e1218`): **DARK text** on yellow (accessibility — never white).
- **Brand Blue** (`#27c2ff`): secondary CTA, links, info.
- **Brand Blue Deep** (`#1da0d8`): pressed.
- **Text on Blue** (`#ffffff`): white text on blue (4.5:1 AA at large).
- **Brand Gradient**: `linear-gradient(135deg, #fcfd00 0%, #27c2ff 100%)` — used as text-clip on hero or accent strips.

### Loot Rarity Palette
- **Common** (gray) — `#a8b0bc`
- **Uncommon** (green) — `#5dd48a`
- **Rare** (blue) — `#27c2ff` (= brand-blue)
- **Epic** (purple) — `#a05ec5`
- **Legendary** (orange) — `#ff8a00`
- **Mythic** (gold) — `#ffd700`

### Surface
- **Surface** (`#181d27`), **Surface Strong** (`#222936`), **Bg Elev** (`#222936`).

### Borders
- **Border** (10% white), **Border Strong** (25% white), **Border Yellow/Blue** = brand colors.

### Glow
- **Glow Yellow** (`0 0 32px rgba(252, 253, 0, 0.40)`)
- **Glow Blue** (`0 0 32px rgba(39, 194, 255, 0.40)`)

### Semantic
- success uncommon-green, warning yellow, danger `#ff4757`, info brand-blue.

## 3. Typography Rules

### Font Family
- **Display**: Burbank Big Condensed (Process Type Foundry). Falls back to Burbank Big → Bebas Neue → Oswald → Impact.
- **Body**: Burbank Big regular OR Inter as fallback.
- **Mono**: JetBrains Mono / IBM Plex Mono.

### Hierarchy

| Role | Font | Size | Weight | LH | Tracking |
|------|------|------|--------|-----|----------|
| display-hero | Burbank Cond | 120 | 800 | 0.92 | 0.005em UPPER |
| display-xl | Burbank Cond | 96 | 800 | 0.95 | 0.005em UPPER |
| display-lg | Burbank Cond | 72 | 800 | 1.0 | 0.005em UPPER |
| h1 | Burbank Cond | 56 | 800 | 1.05 | 0 UPPER |
| h2 | Burbank Cond | 40 | 700 | 1.1 | 0 UPPER |
| h3 | Burbank Cond | 28 | 700 | 1.15 | 0 |
| eyebrow | Burbank | 13 | 700 | 1.2 | 0.16em UPPER |
| body | Burbank/Inter | 15 | 400 | 1.55 | 0 |
| label | Burbank | 12 | 700 | 1.3 | 0.10em UPPER |
| button | Burbank | 16 | 700 | 1.0 | 0.06em UPPER |

### Principles
- **Burbank Big Condensed for ALL display, all-caps.**
- **Tight leading on display** (0.92-1.0).
- **Heavy tracking on uppercase** (0.06-0.16em).
- **Body 15px**, denser than typical SaaS.
- **All-caps headlines** — Fortnite is shouty by design.

## 4. Component Stylings

### Buttons (4 variants — 4px radius)

**Primary** — Yellow with DARK text:
- bg `#fcfd00`, **text `#0e1218`** (dark — accessibility)
- 16px Burbank 700 0.06em UPPER, padding 14×32, radius 4
- Hover: bg `#ccd000`, scale 1.02

**Blue** — secondary CTA:
- bg `#27c2ff`, white text, otherwise primary

**Secondary** — bordered:
- bg transparent, text white, 1px white-25% border, radius 4

**Ghost**: bg transparent, text blue, padding 10×20.

### Cards
- bg `#181d27`, **4px radius**, padding 24
- 1px white-10% border + dark shadow `0 2px 8px rgba(0,0,0,0.40)`
- Hover: 2px blue ring outside (`box-shadow: 0 0 0 2px rgba(39,194,255,0.6)`)
- Featured/Mythic cards: glow shadow `0 0 32px` in rarity color

### Pills (item types, season tags)
- Default: `surface-strong` bg, white text, pill radius
- Loot rarity pills: rarity-color-soft bg, rarity-color text, 4px radius

### Inputs
- bg bg-elev, 1px white-25% border, 4px radius
- Focus: border blue (not yellow — better contrast)

### Navigation
- 72px sticky header, near-black bg
- Fortnite wordmark left (yellow), top-level nav center, "Download" yellow CTA right

## 5. Layout Principles

- Base 4px, 96-200px between sections (cinematic spacing)
- Page max width 1440px
- Hero: full-bleed video / parallax background with overlapping all-caps headline
- Item grid: 4-up at desktop, 2-up at tablet, 1-up at mobile

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0 | full-bleed video |
| Micro | 2 | indicators |
| Standard | 4 | **default for buttons, cards, inputs** |
| Comfortable | 6 | dropdowns |
| Relaxed | 8 | featured |
| Pill | 9999 | season + item-type tags |

## 7. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| 1 | `0 2px 8px rgba(0,0,0,0.40)` resting cards |
| 2 | `0 0 0 2px rgba(39,194,255,0.6)` blue ring hover |
| 3 | `0 0 32px rgba(252,253,0,0.40)` yellow glow / blue glow featured |
| 4 | `0 24px 64px rgba(0,0,0,0.80)` modal |

### Shadow Philosophy
**Glow** for featured items in rarity-color (yellow / blue / purple / gold). Hairline rings for hover. Heavy black shadow for modal.

## 8. Interaction & Motion

- Standard ease (sharp), emphasized for cinematic
- 100ms hover, 180ms standard, 480ms cinematic
- Hero parallax: scroll-triggered translate
- Card hover: 2px blue ring grows from 0
- Mythic items: continuous gold pulsing glow

## 9. Accessibility & A11y

- white on bg = **19.6:1** AAA
- **dark on yellow = 17.2:1 AAA** (dark text required, not white)
- white on blue = 4.5:1 AA at large (>= 18px Bold)
- 3px Yellow focus ring

Loot rarity pills use `aria-label="Mythic rarity, gold tier"`. Hero parallax decorative `aria-hidden`.

## 10. Responsive Behavior

mobile <479: hero 120→48; nav hamburger; 1-up grid. tablet: 2-up. desktop+: 4-up.

44×44 min touch targets. Hero video pauses with `prefers-reduced-motion`.

## 11. Content & Voice

### Tone
**Hype-direct.** Confident, energetic, unembarrassed by enthusiasm.

### Microcopy patterns
- Primary CTA: **"Drop In"** / **"Play Free"** / **"Download"**
- Sign-up: **"Sign In with Epic Games"**
- Errors: **"Connection lost. Reconnecting…"**
- Loading: **"Initializing…"**
- Battle pass: **"Tier 100 unlocked"**
- Empty: **"No items here yet — drop in to find loot."**

### CTA verb conventions
- **Drop / Play / Win / Survive / Build**
- Avoid: corporate ("Onboard"), aspirational ("Discover")

## 12. Dark Mode & Theming

**Dark-only.** Near-black canvas IS the brand. No light mode.

## 13. Lineage & Influences

Fortnite descends from Epic Games' 2017 Battle Royale launch, evolved through 25+ seasons of brand iteration. Burbank Big Condensed anchors display — esports-stage-legible. Yellow `#fcfd00` + Blue `#27c2ff` are neon-vivid for stage distance.

Loot rarity color-coding follows MMO/RPG tradition. Season-driven palette refreshes (Chapter 5 / 6) layer over the base.

**Named influences:**
- **Epic Games / Tim Sweeney** — Battle Royale launch (2017)
- **Burbank Big** — esports-stage-legible display sans
- **Loot rarity color system** — MMO/RPG palette lineage
- **Saturday-morning gameshow aesthetics** — kaleidoscope-energetic
- **Travis Scott / Marshmello in-game concerts** — cross-media expansion

## 14. Do's and Don'ts

### Do
- **Near-black + Fortnite Yellow + Fortnite Blue.**
- **Burbank Big Condensed all-caps for display.**
- **DARK text on yellow** (accessibility).
- **White text on blue at large sizes** (4.5:1 AA).
- **4px radius — gentle rectangular.**
- **Loot-rarity color system for items.**
- **Hero typography 96-120px+.**
- **Glow shadows on featured / Mythic items.**

### Don't
- **Don't put white text on yellow.** 1.7:1 fails AA.
- **Don't substitute brand colors.**
- **Don't use rounded sans for display.** Burbank or fallback only.
- **Don't add gradients on body text** — gradient only on hero text-clip.
- **Don't add a friendly mascot.** Fortnite skins are players, not mascots.
- **Don't add light mode.**

## 15. Agent Prompt Guide

### Quick Color Reference
- bg: `#0e1218`
- text: `#ffffff`
- brand-yellow: `#fcfd00` (use **DARK text**)
- brand-blue: `#27c2ff` (use white text at 18px+)
- gradient: `linear-gradient(135deg, #fcfd00 0%, #27c2ff 100%)`
- rarity: gray / green / blue / purple `#a05ec5` / orange `#ff8a00` / gold `#ffd700`

### Example Component Prompts

> Build a Fortnite-style hero: near-black canvas, full-bleed video bg with parallax, 120px Burbank Big Condensed Bold heading "DROP IN. WIN BIG." all-caps tracked 0.005em in white. Primary CTA "PLAY FREE" 4px-radius yellow `#fcfd00` with **dark text** `#0e1218` 16px Burbank 700 0.06em UPPER, padding 14×32.

> Design an item card: surface `#181d27`, 4px radius, 24px pad, 1px white-10% border. Item-skin image top, 28px Burbank 700 item name UPPER. Rarity pill bottom-left in rarity-color (orange = Legendary). For Mythic: gold glow shadow.

> Render a rarity pill: 4px radius, rarity-color-soft bg, rarity-color text 12px Burbank 700 0.10em UPPER "LEGENDARY".

> Build a "Drop In" CTA: 4px radius, Fortnite Yellow bg, **dark `#0e1218` text** 16px Burbank 700 0.06em UPPER "DROP IN", padding 14×32. Hover: bg `#ccd000`, scale 1.02.

> Design a season banner: full-bleed parallax bg, gradient text overlay "CHAPTER 6 SEASON 2" 96px Burbank 800 with `linear-gradient(135deg, #fcfd00, #27c2ff)` text-clip.

### Iteration Guide

1. **Near-black + Yellow + Blue + Burbank Big Condensed all-caps.**
2. **DARK text on yellow** — accessibility-mandatory.
3. **Hero typography goes huge** — 96-120px minimum.
4. **Loot-rarity color system anchors items.**
5. **Glow shadows on Mythic / featured.**
6. **4px radius on UI.**
7. **All-caps display, hype-direct voice.**
8. **Reject white-on-yellow at body, rounded display sans, light mode.**
