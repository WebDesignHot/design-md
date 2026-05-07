---
name: Valorant
tagline: Tactical-shooter design language — Tungsten condensed all-caps, signal-red CTAs, and an off-white text the brand calls "ECE8E1".
updated_at: 2026-05-08T00:00:00.000Z
published_at: 2026-05-07T20:01:46.885Z
author: webdesignhot
source_url: https://playvalorant.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [gaming]
tags: [dark, brutalist, sans, structured, dense]
preview_swatch: ['#0f1923', '#ff4655', '#ece8e1']
related: [playstation, xbox, krea]
description: 'Riot''s Valorant marketing site is the rare AAA-game brand site that has accepted typography as the primary instrument: Tungsten Bold (condensed, all-caps) handles every display and pre-headline, Inter (regular weight) carries body copy, and the only chromatic accents on a near-black `#0f1923` canvas are the signature signal-red `#ff4655` and a warm bone-white `#ece8e1` borrowed from agent uniforms. Hard 0–4px corners across every component reject the rounded-edtech instinct; thick strokes, hairline rules, and edge-of-page brand watermarks sit beside dense agent stat blocks. The whole system reads like a magazine for tactical shooters.'

colors:
  bg: '#0f1923'
  bg-deep: '#1a242e'
  bg-section: '#212d39'
  surface: '#1a242e'
  surface-strong: '#212d39'
  surface-translucent: 'rgba(15, 25, 35, 0.85)'
  brand: '#ff4655'
  brand-deep: '#d62836'
  brand-active: '#a81e29'
  brand-tint: 'rgba(255, 70, 85, 0.15)'
  on-brand: '#ffffff'
  bone: '#ece8e1'
  bone-soft: 'rgba(236, 232, 225, 0.7)'
  bone-faint: 'rgba(236, 232, 225, 0.4)'
  text: '#ece8e1'
  text-strong: '#ffffff'
  text-muted: '#9aa6b1'
  text-faint: '#6c7780'
  text-on-brand: '#ffffff'
  link: '#ff4655'
  link-hover: '#ffffff'
  selected-bg: 'rgba(255, 70, 85, 0.20)'
  border: 'rgba(236, 232, 225, 0.15)'
  border-strong: 'rgba(236, 232, 225, 0.30)'
  border-brand: '#ff4655'
  success: '#22c55e'
  warning: '#f5a524'
  danger: '#ff4655'
  info: '#9aa6b1'

typography:
  display:
    family: '"Tungsten-Bold", "Tungsten", "Bebas Neue", "Oswald", Impact, sans-serif'
    weights: [700]
    opentype-features: 'kern, liga'
  body:
    family: '"Inter", "DIN Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 144, weight: 700, lineHeight: 0.92, tracking: '0.01em',  family: display, opentype: 'liga' }
    display-xl:      { size: 96,  weight: 700, lineHeight: 0.95, tracking: '0.01em',  family: display }
    display-lg:      { size: 72,  weight: 700, lineHeight: 1.0,  tracking: '0.01em',  family: display }
    h1:              { size: 56,  weight: 700, lineHeight: 1.05, tracking: '0.005em', family: display }
    h2:              { size: 40,  weight: 700, lineHeight: 1.1,  tracking: '0.005em', family: display }
    h3:              { size: 28,  weight: 700, lineHeight: 1.15, tracking: '0',       family: display }
    h4:              { size: 22,  weight: 700, lineHeight: 1.25, tracking: '0',       family: display }
    eyebrow:         { size: 14,  weight: 700, lineHeight: 1.2,  tracking: '0.18em',  family: body }
    body-lg:         { size: 18,  weight: 400, lineHeight: 1.55, tracking: '0',       family: body }
    body:            { size: 15,  weight: 400, lineHeight: 1.6,  tracking: '0',       family: body }
    body-sm:         { size: 13,  weight: 400, lineHeight: 1.5,  tracking: '0',       family: body }
    label:           { size: 12,  weight: 700, lineHeight: 1.2,  tracking: '0.20em',  family: body }
    button:          { size: 14,  weight: 700, lineHeight: 1.0,  tracking: '0.16em',  family: body }
    button-lg:       { size: 16,  weight: 700, lineHeight: 1.0,  tracking: '0.16em',  family: body }
    caption:         { size: 11,  weight: 500, lineHeight: 1.4,  tracking: '0.04em',  family: body }
    code:            { size: 13,  weight: 400, lineHeight: 1.6,  tracking: '0',       family: mono }

radius:
  none: 0
  micro: 1
  sm: 2
  md: 4
  lg: 6
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 96, 128, 160, 200]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 80
  hero-y: 200

motion:
  ease-standard: 'cubic-bezier(0.65, 0, 0.35, 1)'
  ease-emphasized: 'cubic-bezier(0.85, 0, 0.15, 1)'
  duration-fast: 100
  duration-standard: 180
  duration-slow: 260
  duration-cinematic: 420
  reduced-motion: 'respects prefers-reduced-motion: reduce — replaces all transforms with opacity'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1280
  wide: 1440

shadows:
  card: '0 1px 0 0 rgba(236, 232, 225, 0.10)'
  card-hover: '0 0 0 1px rgba(255, 70, 85, 0.6)'
  modal: '0 24px 64px rgba(0, 0, 0, 0.80)'

accessibility:
  contrast-text-on-bg: 14.2
  contrast-text-on-brand: 4.5
  focus-ring: '2px solid #ff4655 + 1px outset bg gap'
  reduced-motion-honored: true

components:
  button-primary: { bg: brand, text: on-brand, padding: '14px 32px', radius: 0, font: button, transform: 'skew(-6deg)' }
  button-ghost: { bg: transparent, text: text, padding: '12px 28px', border: '1px solid border-strong', radius: 0, transform: 'skew(-6deg)' }
  card: { bg: surface, radius: 0, padding: 32, border-top: '2px solid border-brand' }
  pill: { bg: bg-deep, text: text, border: '1px solid border', radius: pill, padding: '4px 12px', font: 'label' }
  input: { bg: bg-deep, border: '1px solid border-strong', text: text, radius: 0, padding: '12px 16px', focus-border: brand }
  badge-agent: { bg: brand, text: on-brand, radius: 0, padding: '4px 8px', font: 'label' }

lineage:
  summary: 'Valorant''s marketing system is what happens when Riot lets a tactical-shooter team hire magazine art directors. Tungsten Bold — the condensed sans drawn for Esquire and Sports Illustrated — runs every display headline at 96–144px, all caps, tightly tracked. The signal-red `#ff4655` is Riot-internal "ELO Red"; bone-white `#ece8e1` is borrowed from the in-game agent uniforms. CTA buttons skew at -6° because they evoke knife edges; cards have hard 0px corners and red top-stripe rules instead of shadows. The whole thing rejects the rounded-edtech instinct of mainstream gaming sites and reads more like a Wired feature than a marketing page.'
  influences:
    - { name: 'Tungsten by Hoefler & Co', role: 'condensed display sans drawn for Esquire / Sports Illustrated', url: 'https://www.typography.com/fonts/tungsten' }
    - { name: 'Counter-Strike (Valve)', role: 'tactical-shooter UI legacy — dense agent stat blocks, hard corners', url: 'https://blog.counter-strike.net' }
    - { name: 'Wired (US edition)', role: 'magazine layout instincts — eyebrow + display + dek', url: 'https://www.wired.com' }
    - { name: 'Tactical military typography', role: 'all-caps + extended tracking on agent code-names', url: 'https://en.wikipedia.org/wiki/Military_alphabet' }
    - { name: 'Riot League of Legends', role: 'in-house Riot brand language for esports clients', url: 'https://www.leagueoflegends.com' }
---

## 1. Visual Theme & Atmosphere

Valorant's marketing site is the rare AAA-game brand that has accepted typography as the primary instrument. Tungsten Bold — the condensed display sans Hoefler & Co drew for *Esquire* and *Sports Illustrated* — runs every display headline at 96–144px, all-caps, tightly tracked. Inter handles body copy at 15px regular. The canvas is the brand's "blacksite" near-black `#0f1923` (subtle cool tilt, not pure black). The only chromatic accents are the signal-red `#ff4655` (every CTA, every error, every hit-marker indicator) and a warm bone-white `#ece8e1` (body copy, secondary CTAs) borrowed from agent uniforms.

What's rejected here is more telling than what's adopted. No rounded corners on interactive elements — buttons, cards, inputs all 0px. No drop shadows with blur — only hairline rules and 1px red rings on hover. No gradients on CTAs. No serif anywhere. No friendly mascot. The brand has decided it's making a tactical shooter, not a console-store loyalty program.

CTAs skew at `-6°` because they evoke knife edges. Section labels are 12px Inter all-caps, 0.20em tracking, sitting above 96px Tungsten display. Cards get a red 2px top-stripe rule instead of a shadow. Agent reveal pages are full-bleed video heroes with the agent codename in 144px Tungsten over a 70% black scrim. The whole layout reads like a *Wired* feature about a war you can't quite tell is real.

**Key Characteristics:**
- Near-black canvas `#0f1923` (cool tilt, never pure black)
- Tungsten Bold for ALL display, all-caps, 96–144px hero
- Bone-white `#ece8e1` body — never pure white at 100%
- Signal-red `#ff4655` is the only chromatic accent
- 0px radius on every interactive element
- CTAs skew `-6°` (the knife-edge mark)
- Cards use red top-stripes, not shadows
- 0.16–0.20em tracking on every uppercase label
- Hairline rules everywhere; no soft shadows on UI
- Dense agent-stat blocks coexist with magazine-scale display type

## 2. Color Palette & Roles

### Primary
- **Background** (`#0f1923`): the "blacksite" canvas — near-black with cool tilt, never pure `#000`.
- **Text** (`#ece8e1`): body uses Bone, never pure white at 100%.
- **Text Strong** (`#ffffff`): display headlines pop to pure white.

### Brand — Signal Red
- **Brand** (`#ff4655`): "ELO Red" / signal red — every CTA, hit-marker, error.
- **Brand Deep** (`#d62836`): pressed.
- **Brand Active** (`#a81e29`): icon strokes on red bg.
- **Brand Tint** (`rgba(255, 70, 85, 0.15)`): subtle wash for selected.

### Bone (warm off-white scale)
- **Bone** (`#ece8e1`): body, secondary CTAs.
- **Bone Soft** (70%): muted body, captions.
- **Bone Faint** (40%): tertiary, breadcrumbs.

### Surface
- **Surface** (`#1a242e`): cards on dark.
- **Surface Strong** (`#212d39`): featured / hover.
- **Surface Translucent** (85% bg): video-hero overlay.

### Borders
- **Border** (15% bone): hairline.
- **Border Strong** (30% bone): emphasis hairline.
- **Border Brand** (`#ff4655`): 1–2px red rule under headers + cards.

### Semantic
- success `#22c55e`, warning `#f5a524`, danger `#ff4655` (= brand), info cool gray.

## 3. Typography Rules

### Font Family
- **Display**: Tungsten Bold (condensed all-caps display sans). Fallback chain Tungsten-Bold → Bebas Neue → Oswald → Impact → sans-serif.
- **Body**: Inter regular at 15px line-height 1.6. Falls back to DIN Pro and system stacks.
- **Mono**: JetBrains Mono / IBM Plex Mono in stat blocks and code samples.

### Hierarchy

| Role | Font | Size | Weight | LH | Tracking | Notes |
|------|------|------|--------|-----|----------|-------|
| display-hero | Tungsten | 144 | 700 | 0.92 | 0.01em | agent reveal |
| display-xl | Tungsten | 96 | 700 | 0.95 | 0.01em | section H |
| display-lg | Tungsten | 72 | 700 | 1.0 | 0.01em | feature heading |
| h1 | Tungsten | 56 | 700 | 1.05 | 0.005em | sub-section |
| h2 | Tungsten | 40 | 700 | 1.1 | 0.005em | card heading |
| h3 | Tungsten | 28 | 700 | 1.15 | 0 | sub-card |
| h4 | Tungsten | 22 | 700 | 1.25 | 0 | inline emphasis |
| eyebrow | Inter | 14 | 700 | 1.2 | 0.18em (UPPER) | section labels |
| body-lg | Inter | 18 | 400 | 1.55 | 0 | hero subhead |
| body | Inter | 15 | 400 | 1.6 | 0 | body |
| body-sm | Inter | 13 | 400 | 1.5 | 0 | secondary |
| label | Inter | 12 | 700 | 1.2 | 0.20em (UPPER) | tags, agent badges |
| button | Inter | 14 | 700 | 1.0 | 0.16em (UPPER) | CTA |
| button-lg | Inter | 16 | 700 | 1.0 | 0.16em (UPPER) | hero CTA |

### Principles
- **Tungsten condensed for display, no exceptions.**
- **Display copy ALL CAPS** — eyebrow, hero, section H. Mixed case only on body and dek.
- **Heavy tracking on uppercase**: 0.16em on buttons, 0.18em on eyebrows, 0.20em on labels.
- **Never pure white for body**. Bone `#ece8e1` is warmer; white reserved for max-emphasis display.
- **Tight leading on display**: 0.92 hero, 0.95–1.0 elsewhere.
- **Body 15px, not 16px** — denser, magazine-like.

## 4. Component Stylings

### Buttons (skewed -6°)

**Primary** — signal red:
- bg `#ff4655`, text `#ffffff`, font Inter 14px 700 0.16em UPPER
- padding 14×32, radius 0, transform `skew(-6deg)`, text counter-skewed `+6°`
- Hover: bg `#ffffff`, text `#0f1923` (full inversion)
- Press: bg `#d62836`
- Disabled: bg 40% red, text 40% white

**Ghost** — bordered:
- bg transparent, text bone, 1px border at 30% bone
- Same skew
- Hover: bg bone, text blacksite

### Cards
- bg `#1a242e`, 0px radius, padding 32
- 2px solid red `#ff4655` top-stripe — the brand's card signature
- No drop shadow; on hover, 1px red ring outside card

### Pills (agent role badges)
- bg bg-deep, text bone, 1px border at 15% bone, radius 9999 (only place pills exist)
- font label (12px 700 0.20em UPPER)

### Inputs
- bg bg-deep, 1px border at 30% bone, 0px radius, padding 12×16
- Focus: border shifts to `#ff4655`, no glow ring
- Label sits above input in eyebrow style

### Navigation
- 80px sticky header, near-black bg with bottom hairline
- Logo left (V mark in white), 5-6 items center bone color 0.18em 14px, "PLAY FREE" red skewed CTA right

## 5. Layout Principles

### Spacing
- Base 4px, scale `[0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 72, 96, 128, 160, 200]`
- 96px is the workhorse between sections
- 200px reserved for hero top-pad

### Grid & Container
- Page max width 1440px (wider than typical SaaS)
- Hero often full-bleed video, 100vh
- Agent reveal: image left 60%, copy right 40% (asymmetric on purpose)
- Stat blocks: 4-up dense grid, 32px gap, no internal borders — only external

### Whitespace
- Density allowed in stat blocks; generous around hero typography
- Section pads 128–200px on marketing; 56–72px on docs

### Section Cadence
- Alternating bg `#0f1923` ↔ `#1a242e` ↔ video hero
- No light sections at all

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0 | **default** for buttons, cards, inputs, panels |
| Micro | 1 | hairline-style indicator dots |
| Standard | 2 | rare; only on agent stat sub-cells |
| Comfortable | 4 | tooltip / toast |
| Relaxed | 6 | dropdown menu |
| Pill | 9999 | agent role badges only |

The brand commits to **0px** on all primary surfaces. 4-6px shows up only on tooltips/dropdowns where rounding aids legibility.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | none | default |
| 1 | 1px hairline rule | cards, panels |
| 2 | 1px red ring outside | hover state |
| 3 | 2px solid red top-stripe | featured cards |
| 4 | `0 24px 64px rgba(0,0,0,0.80)` | modal / video lightbox |

### Shadow Philosophy
The brand rejects soft shadows on UI. Elevation is signaled by **rules and rings**, not blur. Modals get a heavy black shadow because they're cinematic, not interface.

## 8. Interaction & Motion

### Easing & duration
- **Standard ease**: `cubic-bezier(0.65, 0, 0.35, 1)` — sharp tactical curve
- **Emphasized ease**: `cubic-bezier(0.85, 0, 0.15, 1)` — weapon-snap
- Durations: 100ms (hover), 180ms (focus), 260ms (modal, dropdown), 420ms (cinematic, agent reveal)

### Per-component
- **Primary CTA hover**: bg → bone, text → blacksite, full color inversion in 100ms
- **Card hover**: 1px red ring grows from 0 to 1px in 180ms
- **Agent card reveal (scroll)**: cinematic ease, 420ms, fade + 24px translate
- **Video hero**: autoplay loops with first 4s opacity fade-in
- **Cursor on interactive**: subtle scale 1.02

### Reduced Motion
Honors `prefers-reduced-motion: reduce`. Skew transforms remain (purely visual brand signal); translate/scale animations replaced with opacity. Video heroes pause and show poster frame.

## 9. Accessibility & A11y

### Contrast
- bone on bg: `#ece8e1` on `#0f1923` = **14.2:1** (AAA at body)
- white on bg: `#ffffff` on `#0f1923` = **17.8:1** (AAA)
- white on brand: `#ffffff` on `#ff4655` = **4.5:1** (AA at body, AAA at large)

### Focus
2px solid `#ff4655` ring with 1px outset bg gap (looks like a tactical UI selection).

### ARIA & Keyboard
- Skewed CTAs maintain accessible name from text content (skew is decorative)
- Video heroes have visible play/pause + `prefers-reduced-motion` poster fallback
- Agent stat blocks use semantic table markup with `<th scope="row">` for screen readers

### Screen Reader
- Visually all-caps labels are NOT all-caps in HTML (CSS `text-transform: uppercase`) so screen readers pronounce them as normal words
- Decorative red top-stripes have `aria-hidden`
- Agent ability tooltips announce via `aria-describedby`

## 10. Responsive Behavior

| Breakpoint | px | Behavior |
|-----------|-----|----------|
| mobile | 0-479 | hero scales 144→64px; nav collapses to red hamburger |
| tablet | 480-767 | 2-col agent grid; stat blocks stack |
| desktop | 768-1279 | full marketing grid; 4-up stat blocks |
| wide | 1280-1440 | identical, larger hero video |

### Touch Targets
44×44px min on mobile, but skewed buttons get extra horizontal pad to compensate for visual angle.

### Per-component
- Nav → red hamburger at <768px, full-screen overlay menu
- Agent cards → vertical scroll with snap points on mobile
- Stat tables → horizontal-scroll containers with red gradient fade on right edge

### Image Behavior
- Hero video: `cover`, 16:9 aspect with hard 100vh cap
- Agent portraits: `cover`, top-aligned, 60vh tall

## 11. Content & Voice

### Tone
**Tactical-precise, never effusive.** Copy is short, declarative, military-coded. Verbs over adjectives. Headlines often drop subjects ("DEFY THE LIMITS" not "You can defy the limits").

### Microcopy patterns
- Primary CTA: **"PLAY FREE"** — never "Sign up" or "Get started"
- Agent reveal: **"REVEALED: <NAME>"** — always uppercase, colon-anchored
- Lobby: **"AGENT SELECT"**, **"ROUND 1"** — magazine all-caps
- Errors: **"CONNECTION TERMINATED"**, **"AGENT UNAVAILABLE"**
- Loading: **"INITIALIZING"** — never "Please wait"

### Empty states
The brand mostly avoids empty states by replacing them with 0-stat displays (0 wins, 0 deaths, 0 elims). When unavoidable: **"NO MATCHES YET — DEPLOY TO FIND ONE"**.

### CTA verb conventions
- **PLAY** (game entry, lobby, queue)
- **DEPLOY** (training, range)
- **VIEW** (agent, weapon, map detail)
- **REVEAL** (cinematic / story)
- Avoid: "Learn", "Discover", "Explore" — too soft

## 12. Dark Mode & Theming

**Dark-only.** The brand has no light mode. Marketing site, in-game UI, and Riot Account interfaces all use the same `#0f1923` base.

If a partner integration requires light mode (e.g. embedded press kit), invert: bg → bone, text → blacksite, brand red unchanged. Skew, hard corners, Tungsten remain.

## 13. Lineage & Influences

Valorant's brand language emerged in 2020 as Riot positioned the title as the tactical-shooter answer to *Counter-Strike: Global Offensive*. Where CS:GO leaned military-utility, Valorant leaned magazine-editorial. Hoefler & Co's Tungsten — drawn for *Esquire* and *Sports Illustrated* — became the display face. The signal-red `#ff4655` was tuned in-house to read on dark canvas without glow at 5+ meters (the assumed esports stage distance).

The site rejects the rounded-edtech instinct of mainstream gaming sites (PlayStation, Xbox web feels comparatively soft). Hard corners, hairline rules, all-caps display, 0.16–0.20em tracking on labels read like a *Wired* feature, not a marketing page. The skewed CTA is Riot's signature interaction trick — also visible on League of Legends (different colors) and Project L.

**Named influences:**
- **Tungsten by Hoefler & Co** ([typography.com](https://www.typography.com/fonts/tungsten))
- **Counter-Strike (Valve)** — tactical-shooter UI legacy
- **Wired (US edition)** — magazine layout instincts
- **Tactical military typography** — all-caps + extended tracking on agent code-names
- **Riot League of Legends** — in-house Riot brand language

## 14. Do's and Don'ts

### Do
- **Use Tungsten Bold for every display.** No Helvetica Compressed substitute.
- **Skew CTAs `-6°`** with text counter-skewed `+6°` to read straight.
- **Commit to 0px radius** on buttons, cards, inputs.
- **Use Bone `#ece8e1` for body**, not pure white.
- **Track uppercase aggressively** (0.16em buttons, 0.18em eyebrows, 0.20em labels).
- **Cards get a 2px red top-stripe**, not a shadow.
- **Use red `#ff4655` exclusively for primary CTA + brand mark.**
- **Hero typography goes huge** (96–144px). Don't scale below 64px on hero, even mobile.

### Don't
- **Don't round corners.** 0px is the rule; 4-6px on dropdowns is the only exception.
- **Don't use rounded sans-serif for display.** Tungsten Bold or nothing.
- **Don't add gradients** on CTAs, headers, or cards.
- **Don't add drop-shadow blur on UI.** Hairlines and rings only.
- **Don't make body 16px.** 15px is the brand's beat.
- **Don't substitute red.** `#ff4655` is the brand red — not Tailwind red, not `#dc2626`.
- **Don't write friendly microcopy.** "Welcome back!" is off-brand. "DEPLOYED" is on-brand.
- **Don't add a light mode** without explicit Riot brand approval.

## 15. Agent Prompt Guide

### Quick Color Reference
- bg (blacksite): `#0f1923`
- bg-deep (surface): `#1a242e`
- text (bone): `#ece8e1`
- text-strong (white): `#ffffff`
- brand (signal red): `#ff4655` / pressed `#d62836`
- border (15% bone): `rgba(236, 232, 225, 0.15)`

### Example Component Prompts

> Build a Valorant-style hero: 100vh full-bleed video bg, near-black overlay scrim, 144px Tungsten Bold heading "DEFY THE LIMITS" all-caps tracked 0.01em in pure white, 18px Inter dek in `#ece8e1`. Skewed `-6°` red CTA "PLAY FREE" 14px Inter 700 0.16em UPPER. 200px top pad.

> Design an agent reveal card: `#1a242e` surface, 0px radius, 32px pad, 2px red top-stripe `#ff4655`. 96px Tungsten codename ALL-CAPS, 12px label eyebrow "DUELIST" in `#ff4655`. 4-up ability stats below in mono.

> Render a stat block: 4 columns, no internal borders, each cell labelled in 12px Inter 700 0.20em UPPER bone-soft, value in 56px Tungsten Bold pure white. 1px hairline divider top + bottom.

> Build a tactical button: 0px radius, signal-red bg, white text 14px Inter 700 0.16em uppercase "DEPLOY", padding 14×32, transformed `skew(-6deg)` with text inner-counter `skew(6deg)`. Hover inverts colors fully.

> Design a tooltip: 4px radius (only place corners aren't 0), bg-deep, 1px bone-15% border, 13px Inter body, 12×16 padding. No arrow.

### Iteration Guide

1. **Start with Tungsten and 0px corners.**
2. **Skew every primary CTA.** -6° transform is the brand's signature.
3. **Track uppercase 0.16em+.** Eyebrows go 0.18-0.20em.
4. **Use red sparingly.** One CTA per fold, one accent stripe per card.
5. **Bone, not white.** Body in `#ece8e1`; reserve `#ffffff` for max-emphasis display.
6. **Hairlines beat shadows.** 1px rules and 1-2px stripes; avoid `box-shadow: blur > 0` on UI.
7. **Density is OK in stat blocks**, generous around hero.
8. **Reject roundness.** If it feels Discord-friendly, you're off-brand.
