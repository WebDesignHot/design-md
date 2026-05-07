---
name: Duolingo
tagline: Owl-green confidence and DIN-Round buttons that lift like candy — the gamified language app distilled to four colors and one mascot.
updated_at: 2026-05-08T00:00:00.000Z
published_at: 2026-05-07T20:02:15.138Z
author: webdesignhot
source_url: https://www.duolingo.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [education, saas]
tags: [bright, playful, rounded, warm, sans]
preview_swatch: ['#ffffff', '#58cc02', '#3c3c3c']
related: [headspace, brilliant-org, masterclass]
description: 'Duolingo''s site reads like a friend who learned graphic design at a candy factory: the canvas stays paper-white, headings sit at 64–88px in DIN Round Bold, and the only saturated colors are the famous Feather Green CTA (`#58cc02`) and a small palette of gamification cues — Streak orange, Heart red, XP gold, Super purple. Every primary button drops a 3–4px solid shadow in its own darker shade, snapping flush on press. The result feels less like SaaS and more like a Saturday-morning game your phone keeps in its pocket.'

colors:
  # Primary canvas
  bg: '#ffffff'                 # white paper canvas — the entire marketing site
  bg-soft: '#f7f7f7'            # off-white alternate band
  bg-warm: '#fff4dd'            # warm cream for hero accent strips
  surface: '#ffffff'            # cards float on white with shadow, not a different bg
  surface-soft: '#fafafa'       # very subtle hover lift
  surface-tinted: '#f0fff0'     # palest green wash for branded panels

  # Text
  text: '#4b4b4b'               # body — warm dark gray, never pure black
  text-strong: '#3c3c3c'        # display headlines, slightly deeper
  text-muted: '#777777'         # captions, metadata
  text-soft: '#afafaf'           # tertiary, helper
  text-faint: '#d4d4d4'         # disabled
  text-on-brand: '#ffffff'      # white on green/red/purple CTA
  text-link: '#1cb0f6'          # Macaw blue — link color

  # Brand — Feather Green
  brand: '#58cc02'              # primary CTA — the iconic "Feather Green"
  brand-hover: '#61e002'        # very slight lift on hover
  brand-pressed: '#46a302'      # pressed state + button-bottom shadow
  brand-deep: '#3a8c00'         # deep green for icon strokes
  brand-tint: '#d7ffb8'         # palest green wash for selected rows
  on-brand: '#ffffff'

  # Gamification accents — all used as named tokens, not derived
  streak-orange: '#ff9600'      # streak flame icon + counter
  streak-orange-deep: '#cc7700' # darker shade for shadow under streak buttons
  heart-red: '#ff4b4b'          # health icon, mistake color, danger CTA
  heart-red-deep: '#e02e2e'     # darker shade for shadow
  xp-gold: '#ffc800'            # XP gem, league position
  xp-gold-deep: '#cc9f00'       # gold shadow
  super-purple: '#ce82ff'       # Super Duolingo tier color
  super-purple-deep: '#a560d4'  # Super shadow
  macaw-blue: '#1cb0f6'         # Plus tier, link color, info pills
  macaw-blue-deep: '#0a8acf'    # Plus shadow

  # Borders
  border: '#e5e5e5'             # default card hairline
  border-strong: '#d4d4d4'      # input border + selected card edge
  border-soft: '#f0f0f0'        # softest divider
  border-brand: '#58cc02'       # focus on green CTA

  # Shadow palette — the Duolingo signature is solid-color drop shadows
  shadow-button: '#46a302'      # 3-4px solid green-deep under primary CTA
  shadow-card: 'rgba(0, 0, 0, 0.08)' # soft shadow on card hover
  shadow-modal: 'rgba(0, 0, 0, 0.16)' # heavier modal scrim shadow

  # Semantic
  success: '#58cc02'            # success matches brand — green is success
  success-bg: '#d7ffb8'
  warning: '#ff9600'            # warning = streak orange
  warning-bg: '#fff4dd'
  danger: '#ff4b4b'             # danger = heart red
  danger-bg: '#ffe5e5'
  info: '#1cb0f6'               # info = macaw blue
  info-bg: '#ddf4ff'

typography:
  display:
    family: '"din-round", "Feather Bold", "Lexend Deca", system-ui, -apple-system, sans-serif'
    weights: [700, 800]
    opentype-features: 'kern, liga'
  body:
    family: '"Lexend Deca", "din-round", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 88, weight: 800, lineHeight: 1.0,  tracking: '-0.02em',  family: display }
    display-xl:      { size: 72, weight: 800, lineHeight: 1.05, tracking: '-0.018em', family: display }
    display-lg:      { size: 56, weight: 800, lineHeight: 1.1,  tracking: '-0.015em', family: display }
    h1:              { size: 40, weight: 800, lineHeight: 1.15, tracking: '-0.012em', family: display }
    h2:              { size: 32, weight: 700, lineHeight: 1.2,  tracking: '-0.01em',  family: display }
    h3:              { size: 24, weight: 700, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 20, weight: 700, lineHeight: 1.3,  tracking: '0',        family: display }
    h5:              { size: 17, weight: 700, lineHeight: 1.35, tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body-bold:       { size: 16, weight: 700, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 14, weight: 700, lineHeight: 1.3,  tracking: '0.02em',   family: body }
    button-lg:       { size: 18, weight: 700, lineHeight: 1.0,  tracking: '0.04em',   family: display }
    button:          { size: 15, weight: 700, lineHeight: 1.0,  tracking: '0.04em',   family: display }
    caption:         { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    eyebrow:         { size: 12, weight: 700, lineHeight: 1.3,  tracking: '0.08em',   family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.6,  tracking: '0',        family: mono }

radius:
  micro: 4
  sm: 8
  md: 12
  lg: 16
  xl: 20
  featured: 24
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72
  hero-y: 120

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.34, 1.56, 0.64, 1)'   # overshoot for celebratory states
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  duration-celebrate: 600
  press-translate: 4              # buttons translate Y by 4px on press
  reduced-motion: 'respects prefers-reduced-motion: reduce — replaces translate with opacity 0.85'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1024
  wide: 1280

shadows:
  card: '0 2px 8px rgba(0, 0, 0, 0.06)'
  card-hover: '0 4px 16px rgba(0, 0, 0, 0.10)'
  button-primary: '0 4px 0 0 #46a302'    # the iconic flat color drop
  button-danger: '0 4px 0 0 #e02e2e'
  button-warning: '0 4px 0 0 #cc7700'
  modal: '0 16px 48px rgba(0, 0, 0, 0.20)'

accessibility:
  contrast-text-on-bg: 9.4              # AAA at body sizes
  contrast-text-on-brand: 4.7           # AA on green
  contrast-text-on-danger: 4.5          # AA on red
  focus-ring: '3px solid #1cb0f6'       # macaw blue ring + 2px offset
  reduced-motion-honored: true

components:
  button-primary:
    bg: brand
    text: on-brand
    padding: '14px 24px'
    radius: 16
    font: button
    border: 'none'
    shadow: 'button-primary'              # the 4px solid green-deep underline
    press: 'translateY(2px); shadow-trim'
  button-secondary:
    bg: bg
    text: text
    padding: '12px 22px'
    radius: 16
    border: '2px solid border-strong'
    shadow: '0 2px 0 0 border-strong'
  button-danger:
    bg: danger
    text: on-brand
    radius: 16
    shadow: 'button-danger'
  button-ghost:
    bg: transparent
    text: brand
    padding: '12px 16px'
    border: 'none'
  card:
    bg: surface
    border: 'none'
    radius: 20
    padding: 24
    shadow: 'card'
  pill:
    bg: surface-soft
    text: text
    radius: pill
    padding: '6px 14px'
    font: 'label'
  input:
    bg: bg
    border: '2px solid border-strong'
    text: text
    radius: 12
    padding: '12px 16px'
    focus-border: brand
  badge-streak:
    bg: streak-orange
    text: on-brand
    radius: pill
    icon: 'flame'
  badge-xp:
    bg: xp-gold
    text: '#3c3c3c'
    radius: pill
    icon: 'lightning'

lineage:
  summary: 'Duolingo''s system is the result of distilling Saturday-morning gameshow energy through a Berlin street-sign typeface and a single press metaphor. DIN Round (originally a German signage type) anchors every heading; Feather Green (`#58cc02`) anchors every CTA. The flat-color drop shadow under buttons — borrowed from early skeuomorphic mobile games like Candy Crush and Angry Birds — became the most-imitated pattern in edtech UI by 2024. The brand rejects gradients, shadows-with-blur on CTAs, and gray-scale neutrality. Mistakes are red, streaks are orange, XP is gold, premium tiers are purple — a 4-color language children can read before they can read.'
  influences:
    - { name: 'DIN 1451', role: 'German road-sign typography that became DIN Round Bold', url: 'https://en.wikipedia.org/wiki/DIN_1451' }
    - { name: 'Candy Crush', role: 'flat-color drop shadow + press-down button metaphor', url: 'https://www.candycrushsaga.com' }
    - { name: 'Angry Birds', role: 'comic-outline illustration discipline', url: 'https://www.rovio.com' }
    - { name: 'Material Design (2014)', role: 'shadow-as-elevation language, distilled to a single press indicator', url: 'https://m1.material.io' }
    - { name: 'Sesame Street', role: 'kid-friendly chromatic palette discipline', url: 'https://www.sesamestreet.org' }
---

## 1. Visual Theme & Atmosphere

Duolingo's site reads like a friend who learned graphic design at a candy factory. The canvas stays paper-white, headings sit huge and round in DIN Round Bold (44–88px), and the only saturated colors are the famous Feather Green CTA and a small palette of gamification cues. Every primary button drops a 3–4px solid shadow in its own darker shade and snaps flush on press — the most-imitated button pattern in edtech.

The mascot Duo (the green owl) is everywhere but never takes itself seriously. Empty states feature illustrated characters in mid-action; loading screens crack jokes; an inactivity popup will reproach you in five different voices. The whole brand operates on the Saturday-morning premise that learning is a game and games reward you with hearts, streaks, gems, and league standings.

What's missing tells the story too. No gradients on CTAs (only the mascot's feathers gradient softly). No drop shadow with blur on buttons (always flat color). No grayscale "neutral" UI states — every interactive element commits to a color. No serif body text. No dense data tables. No corporate "trusted by" logo wall. The brand has decided what it is — a colorful, gamified, mobile-first study app — and refuses every frame that doesn't fit.

**Key Characteristics:**
- Paper-white canvas (`#ffffff`) — never tinted
- Feather Green (`#58cc02`) is the only primary CTA color
- DIN Round Bold for every heading and button — never a serif
- 4-color gamification system: green/red/orange/gold/purple as functional roles
- Flat-color drop shadow under every primary CTA (3-4px solid, never blurred)
- Press metaphor: button translates `translateY(2px)` and shadow trims to match
- Big rounded corners — 16-24px on buttons, 20-24px on cards, 9999px on pills
- Owl mascot present in 80% of marketing screens
- Microcopy is conversational, slightly cheeky, never corporate
- Light-only — no dark mode on web (the iOS app has one)

## 2. Color Palette & Roles

### Primary
- **Background** (`#ffffff`): the entire marketing canvas. Never tinted, never warm.
- **Text** (`#4b4b4b`): body copy. Warm dark gray, deliberately not pure black — softer feel.
- **Text Strong** (`#3c3c3c`): display headings, slightly deeper than body.

### Brand — Feather Green
- **Brand** (`#58cc02`): the canonical Duolingo CTA color, also success state. Used on every primary button, the streak counter when active, and the wordmark.
- **Brand Hover** (`#61e002`): very slight lift on hover (rare — most lift comes from translate, not color).
- **Brand Pressed** (`#46a302`): pressed state. Also reused as the 4px drop-shadow under primary CTA.
- **Brand Deep** (`#3a8c00`): icon strokes inside green pills, deep mascot feather areas.
- **Brand Tint** (`#d7ffb8`): palest green wash. Selected lesson cards, achievement badges' bg.

### Gamification Accents — first-class roles
Every accent has a paired `-deep` variant for its drop shadow:
- **Streak Orange** (`#ff9600` / shadow `#cc7700`): flame icon, streak counter.
- **Heart Red** (`#ff4b4b` / shadow `#e02e2e`): hearts icon, mistake feedback, danger CTA.
- **XP Gold** (`#ffc800` / shadow `#cc9f00`): XP gem, league rank.
- **Super Purple** (`#ce82ff` / shadow `#a560d4`): Super Duolingo (premium tier).
- **Macaw Blue** (`#1cb0f6` / shadow `#0a8acf`): Duolingo Plus, links, info pills.

### Interactive
- **Link** (`#1cb0f6`): Macaw blue. Underlined only on hover.
- **Selected bg** (`#d7ffb8`): green tint behind selected list items.
- **Disabled** (`#d4d4d4` / `#afafaf`): faint gray bg + soft gray text.

### Surface & Borders
- **Surface** (`#ffffff`): cards on white. Lift via shadow, not bg.
- **Surface Soft** (`#fafafa`): very subtle hover lift.
- **Surface Tinted** (`#f0fff0`): palest green wash for branded panels (achievements, streak history).
- **Border** (`#e5e5e5`): default hairline.
- **Border Strong** (`#d4d4d4`): inputs, selected card edge.

### Shadows
The Duolingo signature is **solid-color drop shadows** on buttons — 3-4px flat color in the role's `-deep` variant, no blur. Cards still use traditional soft shadows; only buttons commit to the flat metaphor.

## 3. Typography Rules

### Font Family
- **Primary (display + UI)**: `din-round` — a rounded variant of DIN designed by Albert-Jan Pool. Falls back to Duolingo's custom "Feather Bold" (mobile app) and Lexend Deca (web-safe).
- **Body**: Lexend Deca with `din-round` as the secondary fallback. Lexend's hyper-legibility is intentional — Duolingo studies have shown it improves reading retention for second-language learners.
- **Mono**: system mono only, used for code blocks in the dev/jobs site.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | Notes |
|------|------|------|--------|-------------|----------|-------|
| display-hero | DIN Round | 88px | 800 | 1.0 | -0.02em | top-of-funnel hero |
| display-xl | DIN Round | 72px | 800 | 1.05 | -0.018em | feature heroes |
| display-lg | DIN Round | 56px | 800 | 1.1 | -0.015em | section H |
| h1 | DIN Round | 40px | 800 | 1.15 | -0.012em | page title |
| h2 | DIN Round | 32px | 700 | 1.2 | -0.01em | feature heading |
| h3 | DIN Round | 24px | 700 | 1.25 | -0.005em | card heading |
| h4 | DIN Round | 20px | 700 | 1.3 | 0 | sub-heading |
| body-lg | Lexend Deca | 18px | 400 | 1.55 | 0 | hero subhead |
| body | Lexend Deca | 16px | 400 | 1.55 | 0 | body copy |
| body-sm | Lexend Deca | 14px | 400 | 1.5 | 0 | secondary |
| body-bold | Lexend Deca | 16px | 700 | 1.5 | 0 | inline emphasis |
| label | Lexend Deca | 14px | 700 | 1.3 | 0.02em | form labels |
| button-lg | DIN Round | 18px | 700 | 1.0 | 0.04em | primary CTA |
| button | DIN Round | 15px | 700 | 1.0 | 0.04em | secondary CTA |
| caption | Lexend Deca | 13px | 500 | 1.4 | 0 | metadata |
| eyebrow | Lexend Deca | 12px | 700 | 1.3 | 0.08em | section labels (uppercase) |

### Principles
- **Round, not square**: DIN Round's tucked-in corners are non-negotiable — the brand's whole feel rests on it.
- **Heavy weights for display, regular for body**: 800 vs 400, no in-between for headings. Skip 600.
- **Tight tracking on big type, normal on body**: -0.02em at 88px → 0em at 16px → +0.04em at 15px buttons.
- **All-caps only for labels and eyebrow** (12-14px, 0.08em tracking). Never for headings — the brand reads warmer in mixed-case.
- **Lexend Deca's hyper-legibility is the body choice for a reason** — Duolingo's audience is non-native readers. Don't substitute Inter or Helvetica without a good reason.
- **Buttons feel chunky** — 700 weight, lowercase letters or capitalized first letter, 0.04em tracking for breathing room.

## 4. Component Stylings

### Buttons (4 variants)

**Primary** — green Feather:
- bg `#58cc02`, text white, weight 700, padding 14×24px, radius 16
- 4px solid drop shadow in `#46a302` (brand-pressed)
- Hover: bg shifts to `#61e002`, no other change
- Press: `translateY(2px)` + shadow trims to 0 → snaps flush
- Disabled: bg `#a8e8a0`, shadow opacity 0.4

**Secondary** — bordered:
- bg white, text `#4b4b4b`, weight 700, 2px gray border
- 2px solid drop shadow in border color
- Hover: bg `#fafafa`
- Press: same translate/trim mechanic

**Danger** — heart red (mistake / quit lesson / unsubscribe):
- bg `#ff4b4b`, shadow `#e02e2e`
- All other rules identical to primary

**Ghost** — link-style:
- bg transparent, text `#58cc02`, no shadow
- Used for "Skip", "Maybe later", "Already have an account"

### Cards
- bg white, no border, radius 20, padding 24
- Shadow: `0 2px 8px rgba(0,0,0,0.06)` resting → `0 4px 16px rgba(0,0,0,0.10)` on hover
- Featured cards (lesson previews) get a 3px solid border in their unit color

### Pills (badges, tags, league position)
- radius 9999, padding 6×14, font `label`
- bg in semantic role color or `surface-soft`
- Streak/XP/Super pills carry their accent color + matching shadow

### Inputs
- 2px border `#d4d4d4` (border-strong), radius 12, padding 12×16
- Focus: border shifts to `#58cc02` (brand) + 3px ring `rgba(28, 176, 246, 0.25)` (macaw blue tint)
- Error: border `#ff4b4b`, helper text `#e02e2e`

### Navigation
- Sticky header, white bg, 72px tall, hairline `#e5e5e5` bottom
- Logo left, top-level nav center (5-6 items), CTA + sign-in right
- Sign-up CTA reuses the primary button style, scaled to 38px tall

### Tooltips & Toasts
- Tooltip: dark `#3c3c3c` bg, white text, radius 12, no arrow
- Toast: white bg with semantic color icon + 3px left-border in semantic color

## 5. Layout Principles

### Spacing System
- Base unit 4px, scale [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]
- 24px is the most-used (card padding, section sub-margins)
- 64px between content blocks, 96-120px between major sections, 160px top of hero

### Grid & Container
- Page max width 1280px, prose 720px
- Hero often wider — full-bleed background with constrained text inside
- Feature grid: 3-up at desktop, 2-up at tablet, 1-up at mobile (rare 4-up for testimonial slabs)

### Whitespace Philosophy
- Density is hostile to language learners — generous whitespace by design
- Section heights breathe; avoid stacking content that reads "form-like"

### Section Cadence
- Alternating `bg-white` ↔ `bg-soft` ↔ `bg-warm` (cream) ↔ `bg-tinted` (palest green)
- Hero is always white with a colored illustration
- Pricing/CTA section often `bg-warm` (cream) for warmth

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 4px | input clear icons, tiny dot indicators |
| Standard | 8px | inline tags, kbd-style hints |
| Comfortable | 12px | input borders, dropdowns |
| Relaxed | 16px | **default button radius** |
| Large | 20px | **default card radius** |
| Featured | 24px | hero cards, achievement modals |
| Pill | 9999px | streak/XP/Super badges, league position |

The brand commits to "comfortable rounded" — never sharp, never circular except for icons and pills. 16-20px is the most-felt range.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | none | inline elements, body copy |
| 1 | `0 2px 8px rgba(0,0,0,0.06)` | resting cards |
| 2 | `0 4px 16px rgba(0,0,0,0.10)` | hover cards, dropdown |
| 3 | `0 8px 24px rgba(0,0,0,0.12)` | sticky toast |
| 4 | `0 16px 48px rgba(0,0,0,0.20)` | modal |
| Button | `0 4px 0 0 <role-deep>` | **flat-color** drop, never blurred |

### Shadow Philosophy

Buttons commit to the **flat-color drop** — a solid 3-4px shadow in the role's deeper variant, no blur, no opacity. This makes the press metaphor (translate + trim) physically convincing. Cards and modals use traditional soft shadows because they don't need the press affordance.

## 8. Interaction & Motion

### Easing & duration
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` for most transitions
- **Emphasized ease** (overshoot): `cubic-bezier(0.34, 1.56, 0.64, 1)` for celebratory states (lesson complete, level up, streak fire)
- Durations: 120ms (fast — hover), 200ms (standard — focus, dropdown), 320ms (slow — modal, page transition), 600ms (celebrate — confetti, mascot animation)

### Per-component micro-states
- **Primary CTA hover**: bg `#58cc02` → `#61e002`, no transform
- **Primary CTA press**: `translateY(2px)` + shadow trim to 0 → flush. 80ms.
- **Card hover**: shadow lifts (level 1 → 2) over 200ms
- **Lesson icon (skill tree)**: hover scales to 1.04, idle bobs ±2px every 1.6s
- **Streak fire icon**: continuous flicker animation when active
- **Lesson complete**: confetti burst (mascot's color), button celebrate ease

### Reduced Motion
Honors `prefers-reduced-motion: reduce`. Translate animations are replaced with opacity 0.85 on press; flicker and bob disabled; confetti burst disabled. Lesson-complete still triggers a static badge with no animation.

## 9. Accessibility & A11y

### Contrast
- text on bg: `#4b4b4b` on `#ffffff` = **9.4:1** (AAA at body)
- text-strong on bg: `#3c3c3c` on `#ffffff` = **11.2:1** (AAA)
- on-brand on brand: `#ffffff` on `#58cc02` = **4.7:1** (AA at body, AAA at large)
- on-brand on danger: `#ffffff` on `#ff4b4b` = **4.5:1** (AA)

### Focus indicators
- 3px solid Macaw Blue (`#1cb0f6`) ring, 2px offset (`box-shadow: 0 0 0 2px white, 0 0 0 5px #1cb0f6`)
- Focus is independent of hover — visible on keyboard nav even when no hover

### ARIA & Keyboard
- Skill tree nodes use `role="button"` with `aria-disabled` for locked units
- Confetti and celebrate animations use `aria-hidden="true"`
- "Hearts" (lives) use `role="status"` with live update announcing remaining count
- All keyboard nav follows visual order; no tab traps in lessons

### Screen Reader
- Mascot illustrations get `aria-hidden="true"` (decorative)
- Streak counter has `aria-label="<N> day streak, lit"` rather than the bare number
- "Mistake" feedback announces visible message via `role="alert"`

## 10. Responsive Behavior

| Breakpoint | px | Behavior |
|-----------|-----|----------|
| mobile | 0-479 | single column, hero scales 64px → 44px, sticky CTA at bottom |
| tablet | 480-767 | 2-column feature grids, sidebar becomes inline |
| desktop | 768-1023 | full marketing grid, 3-col features |
| wide | 1024-1279 | identical to desktop, larger illustrations |

### Touch Targets
Minimum 44×44px tap target on mobile (Apple HIG). Buttons scale up to 56px tall on hero CTAs.

### Per-component Collapsing
- Nav collapses to hamburger at <768px
- Pricing cards stack vertical with selected card promoted
- Tables → card list (rare, mainly in /super pricing comparison)

### Image Behavior
- Mascot illustrations: SVG, scale fluidly with `width: 100%` cap
- Photos rare (mostly in customer testimonials) — used `aspect-ratio: 4/3` containers

## 11. Content & Voice

### Tone
**Cheerfully relentless.** Friendly enough to be addressed by name; insistent enough to track 16-day streaks. The voice is a friend who really wants you to study, never a teacher who's disappointed.

### Microcopy patterns
- Primary CTA: **"Get Started"** (signed-out), **"Continue Learning"** (signed-in)
- Sign-up: **"Start your first lesson — it's free"**
- Mistake feedback: **"Hmm, not quite"** + correct answer (never "Wrong" or "Incorrect")
- Lesson complete: **"Lesson complete!"** + XP earned + streak status
- Inactivity prompt: **"This is your last chance"** (delivered with mascot deadpan)
- Empty list: **"You haven't started yet — let's fix that"**

### Empty states
Always include the mascot in mid-action. Copy is short, suggestion-led, never apologetic.

### CTA verb conventions
- "Start" (free entry, lesson begin)
- "Continue" (returning user)
- "Try" (paid trial — "Try Super for free")
- "Save" (settings, never "Update" or "Submit")
- Avoid: "Learn more" (too vague), "Click here" (never)

## 12. Dark Mode & Theming

**Light-only on web.** The mobile app has a dark mode introduced in 2022 but the marketing site stays light. If extending to dark, the brand's published guidance is:
- Background → `#1f1f1f` (warm dark, not true black)
- Surface → `#2a2a2a`
- Text → `#ffffff` for body, `#e5e5e5` for muted
- Brand stays `#58cc02` — Feather Green works on both modes
- Drop-shadow under primary CTA shifts from `#46a302` to `#3a8c00` for stronger contrast

Mobile-app screenshots in marketing pages may show dark UI even on the light site — that's intentional product showcase, not a theme switch.

## 13. Lineage & Influences

Duolingo's visual system is the result of distilling Saturday-morning gameshow energy through a Berlin street-sign typeface and a single press metaphor. DIN Round (originally derived from DIN 1451, the German signage standard) anchors every heading; Feather Green anchors every CTA; the flat-color drop shadow under buttons — borrowed from early skeuomorphic mobile games like *Candy Crush* and *Angry Birds* — became the most-imitated pattern in edtech UI by 2024.

The brand rejects what most modern SaaS adopts: gradients on CTAs, blurred shadows, gray-scale neutrality, dense data tables, and corporate "trusted by" logo walls. Mistakes are red, streaks are orange, XP is gold, premium tiers are purple — a 4-color language children can read before they can read.

**Named influences:**
- **DIN 1451** — German road-sign type, source of DIN Round Bold ([wikipedia](https://en.wikipedia.org/wiki/DIN_1451))
- **Candy Crush** — flat-color drop shadow + press-down button metaphor ([candycrushsaga.com](https://www.candycrushsaga.com))
- **Angry Birds** — comic-outline illustration discipline ([rovio.com](https://www.rovio.com))
- **Material Design (2014)** — shadow-as-elevation language, distilled to a single press indicator ([m1.material.io](https://m1.material.io))
- **Sesame Street** — kid-friendly chromatic palette discipline ([sesamestreet.org](https://www.sesamestreet.org))

## 14. Do's and Don'ts

### Do
- **Use Feather Green only for primary CTA + success.** It loses meaning if applied decoratively.
- **Pair every accent with its `-deep` shadow variant.** Streak orange always has streak-orange-deep beneath it.
- **Translate buttons on press, don't change opacity.** The translate+shadow-trim is the brand's signature.
- **Round headings — DIN Round Bold, never square sans.** Inter or Helvetica makes the brand feel like Slack.
- **Keep canvas pure white.** Tinting it warmer or grayer kills the candy-factory feel.
- **Use the mascot.** Empty states and 404 pages without Duo feel sterile.
- **Conversational microcopy.** "Hmm, not quite" beats "Incorrect" every time.
- **Big radius** — 16px buttons, 20px cards. Don't go below 12px on interactive elements.

### Don't
- **Don't use gradients on primary CTA.** Solid Feather Green only.
- **Don't put `box-shadow: blur > 0` on buttons.** Cards use blur shadows; buttons commit to the flat 4px drop.
- **Don't use pure black `#000000` for text.** `#3c3c3c` or `#4b4b4b` are warmer and on-brand.
- **Don't use a serif font anywhere.** Even in long-form blog posts.
- **Don't blue-link inside body copy.** Underline only on hover; the link itself is `text-link` blue.
- **Don't pad buttons under 14×24px.** Tap-target affordance plus the rounded, chunky feel both depend on it.
- **Don't add "powered by" footer logos.** The brand never explains itself with vendor proof.
- **Don't dim disabled buttons to invisibility.** A faded green still commits to the role; the disabled treatment is bg `#a8e8a0` with shadow opacity 0.4 — visible but unactionable.

## 15. Agent Prompt Guide

### Quick Color Reference
- bg: `#ffffff`
- text: `#4b4b4b` / text-strong: `#3c3c3c`
- brand (Feather Green): `#58cc02` / shadow `#46a302`
- streak-orange: `#ff9600` / shadow `#cc7700`
- heart-red (danger): `#ff4b4b` / shadow `#e02e2e`
- xp-gold: `#ffc800` / shadow `#cc9f00`
- super-purple: `#ce82ff` / shadow `#a560d4`
- macaw-blue (link): `#1cb0f6` / shadow `#0a8acf`
- border: `#e5e5e5` / border-strong: `#d4d4d4`

### Example Component Prompts

> Create a hero section in Duolingo's style: 88px DIN Round Bold heading, white canvas, primary CTA in Feather Green (`#58cc02`) with a 4px solid drop shadow in `#46a302`. Mascot illustration aligned right, 50% width on desktop. Subhead 18px Lexend Deca in `#4b4b4b`. Section pad 96-120px vertical.

> Design a lesson card in Duolingo's style: white surface, 20px radius, 24px padding, 2px solid drop shadow in card hover state. 32px DIN Round h3 with the unit color as 3px left border. Pill badge for "10 lessons" in surface-soft bg with macaw blue text.

> Render a streak counter chip: pill radius, `#ff9600` (streak-orange) bg, white flame icon left, white DIN Round 700 14px label "16 day streak". 4px solid drop shadow in `#cc7700`.

> Build a pricing card for Super Duolingo: 24px radius, white bg, 2px purple (`#ce82ff`) border, "SUPER" eyebrow in 12px purple uppercase, $6.99 price in 56px DIN Round Bold black, primary CTA "Try Super for Free" in `#ce82ff` bg with `#a560d4` shadow.

> Design a mistake feedback toast: white bg, 12px radius, 3px left border in `#ff4b4b`, "Hmm, not quite" header in `#3c3c3c` 16px DIN Round 700, body text in `#4b4b4b` 14px Lexend Deca, optional "Try again" button in danger style.

### Iteration Guide

1. **Round everything.** If a corner is sharp or a heading is square, you're not yet on-brand.
2. **Commit to flat-color drop shadows on buttons.** No `blur > 0` on interactive elements; the 4px solid drop is the brand.
3. **Lean into mascot moments.** Empty states, 404s, success screens all benefit from Duo present.
4. **Don't add a 6th gamification color.** The 5-color system (green/red/orange/gold/purple/blue) is the brand's whole vocabulary; expanding dilutes meaning.
5. **Conversational microcopy beats neutral.** Replace "Submit" with "Save it" and "Error" with "Hmm, not quite". The voice should sound like a friend.
6. **Keep typography hierarchy aggressive.** 88-72-56-40-32-24 — don't smooth this into a gentle scale.
7. **White space is not optional.** 64-96px between sections, generous card padding (24px+). Cramming content kills the brand.
8. **Test in mobile-first.** The product is mobile-native; marketing pages should feel as good at 375px as at 1280px.
