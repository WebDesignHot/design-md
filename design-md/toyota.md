---
name: Toyota
tagline: Japanese-reliability mainstream — `#eb0a1e` Toyota red on white, ToyotaType sans, and a calm-confident marketing surface for the world's most-sold automotive brand.
author: webdesignhot
source_url: https://www.toyota.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [automotive, marketing]
tags: [light, mainstream, sans, red, japanese, reliability, configurator, photography]
preview_swatch: ['#ffffff', '#eb0a1e', '#252525']
related: [honda, ford, tesla]
description: 'Toyota.com is the Japanese-reliability mainstream — calm, confident, dependable. The canvas is bright white, the brand voltage is the iconic **Toyota Red** (`#eb0a1e`) that has appeared on every Toyota since the 1990 ovals-within-an-oval emblem, and a deep ink (`#252525`) carries body type without going pure black. Type runs **ToyotaType** — a custom 2018 family by Monotype — at weight 400 body / 700 display with subtle humanist proportions designed for legibility across global markets including CJK siblings. The signature visual move: **Toyota oval emblem + red CTA + family/utility photography** — Camry, RAV4, Corolla, Tacoma, Tundra, GR Supra — selling reliability to the world''s largest mainstream automotive market.'

colors:
  bg: '#ffffff'
  bg-soft: '#f5f5f5'              # surface alternation
  bg-card: '#ffffff'
  bg-strong: '#e8e8e8'             # divider band
  bg-dark: '#252525'               # near-black hero band — performance launches
  bg-dark-elev: '#383838'          # elevated panel
  bg-deep: '#101010'               # deep — footer
  surface: '#ffffff'
  surface-soft: '#f5f5f5'
  surface-card: '#ffffff'
  surface-table: '#fafafa'         # spec table band
  text: '#333333'                  # body
  text-strong: '#252525'           # body-strong
  text-ink: '#252525'              # ink — primary headings (signature deep grey)
  text-muted: '#6e6e6e'             # muted
  text-faint: '#9c9c9c'             # disabled
  brand: '#eb0a1e'                 # Toyota Red — primary CTA, oval logo
  brand-hover: '#c10a16'            # primary-active — pressed
  brand-deep: '#7a0510'             # deep accent
  brand-disabled: '#d0d0d0'        # disabled
  on-brand: '#ffffff'
  on-dark: '#ffffff'
  on-dark-soft: '#bcbcbc'
  accent-blue-hybrid: '#0066b1'    # Hybrid / EV badge blue
  accent-blue-hover: '#004f8c'      # hybrid pressed
  accent-gr-orange: '#ff5a1f'      # GR / Gazoo Racing accent — performance only
  border: '#d8d8d8'                # hairline
  border-strong: '#a8a8a8'         # input border
  border-soft: '#e8e8e8'            # subtle dividers
  border-on-dark: 'rgba(255,255,255,0.18)'
  link: '#0066b1'
  link-hover: '#004f8c'
  ring: '#eb0a1e'
  shadow-soft: 'rgba(0,0,0,0.06)'
  shadow-elev: 'rgba(0,0,0,0.12)'
  shadow-deep: 'rgba(0,0,0,0.32)'
  success: '#1f8b46'
  warning: '#f0a020'
  danger: '#eb0a1e'
  info: '#0066b1'

typography:
  display:
    family: '"ToyotaType", "Toyota Type", "Helvetica Neue", Arial, sans-serif'
    weights: [300, 400, 500, 700]
    opentype-features: ['kern', 'liga']
  body:
    family: '"ToyotaType", "Toyota Type", "Helvetica Neue", Arial, sans-serif'
    weights: [300, 400, 500]
    opentype-features: ['kern', 'liga']
  mono:
    family: 'SF Mono, Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-hero:      { size: 72, weight: 700, lineHeight: 1.06, tracking: '-0.01em', family: display, notes: 'Homepage hero — Camry / RAV4 / Tundra name' }
    display-xl:        { size: 56, weight: 700, lineHeight: 1.10, tracking: '-0.005em', family: display }
    display-lg:        { size: 40, weight: 700, lineHeight: 1.14, tracking: '0', family: display, notes: 'Section opener' }
    display-md:        { size: 32, weight: 700, lineHeight: 1.18, tracking: '0', family: display }
    display-sm:        { size: 24, weight: 700, lineHeight: 1.25, tracking: '0', family: display }
    title-lg:          { size: 20, weight: 700, lineHeight: 1.30, tracking: '0', family: display }
    title-md:          { size: 18, weight: 700, lineHeight: 1.40, tracking: '0', family: display }
    title-sm:          { size: 16, weight: 500, lineHeight: 1.40, tracking: '0', family: display }
    body-lg:           { size: 18, weight: 400, lineHeight: 1.55, tracking: '0', family: body, notes: 'Lead paragraph' }
    body-md:           { size: 16, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
    body-sm:           { size: 14, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
    caption:           { size: 12, weight: 400, lineHeight: 1.40, tracking: '0.04em', family: body }
    label-uppercase:   { size: 12, weight: 700, lineHeight: 1.30, tracking: '0.12em', family: display, notes: 'Section eyebrow — uppercase' }
    button:            { size: 14, weight: 700, lineHeight: 1.00, tracking: '0.06em', family: display }
    nav-link:          { size: 14, weight: 500, lineHeight: 1.40, tracking: '0.02em', family: body }
    micro:             { size: 11, weight: 400, lineHeight: 1.40, tracking: '0.05em', family: body }
    code:              { size: 13, weight: 400, lineHeight: 1.50, tracking: '0', family: mono }

radius:
  none: 0
  xs: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  pill: 9999

spacing:
  base: 8
  scale: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160]

layout:
  page-width: 1440
  prose-width: 760
  header-height: 72
  hero-height: 88vh

components:
  button-primary:
    bg: '#eb0a1e'
    text: '#ffffff'
    padding: '14px 32px'
    radius: 9999
    font: 'ToyotaType 14/700 uppercase 0.06em tracking'
    transition: 'background 0.2s ease'
    hover: '#c10a16'
  button-ghost:
    bg: 'transparent'
    text: '#252525'
    padding: '14px 32px'
    radius: 9999
    border: '1px solid #252525'
    font: 'ToyotaType 14/700 uppercase'
  button-on-dark:
    bg: '#ffffff'
    text: '#252525'
    padding: '14px 32px'
    radius: 9999
  button-on-dark-ghost:
    bg: 'transparent'
    text: '#ffffff'
    border: '1px solid #ffffff'
    padding: '14px 32px'
    radius: 9999
  button-text-link:
    bg: 'transparent'
    text: '#eb0a1e'
    font: 'ToyotaType 14/700 uppercase with arrow ›'
  card-vehicle:
    bg: '#ffffff'
    radius: 8
    padding: '24px'
    border: '1px solid #d8d8d8'
    image-position: 'top, full-width 16:9 PNG render'
    title: '24/700 ToyotaType'
    cta: '"Build & Price" → 14/700 uppercase #eb0a1e'
  card-feature:
    bg: '#f5f5f5'
    border: 'none'
    padding: '32px'
    radius: 12
  hero-band-dark:
    bg: '#252525'
    text: '#ffffff'
    notes: 'Used for GR Performance, Tundra HD, Land Cruiser launches'
  config-tile:
    bg: '#ffffff'
    border: '1px solid #d8d8d8'
    radius: 8
    padding: '16px 20px'
    selected-border: '2px solid #eb0a1e'
  badge:
    bg: '#252525'
    text: '#ffffff'
    padding: '4px 12px'
    font: '11/700 uppercase 0.12em'
    radius: 9999
  badge-hybrid:
    bg: '#0066b1'
    text: '#ffffff'
    padding: '4px 12px'
    font: '11/700 uppercase 0.12em'
    radius: 9999
  badge-gr:
    bg: '#ff5a1f'
    text: '#ffffff'
    padding: '4px 12px'
    font: '11/700 uppercase 0.12em'
    radius: 9999
  navigation:
    bg: '#ffffff'
    height: 72
    border-bottom: '1px solid #d8d8d8'
    nav-link: '14/500 #252525'
    logo: 'Toyota oval — 96×40, monochrome black on white or red oval inversion'
  input:
    bg: '#ffffff'
    border: '1px solid #a8a8a8'
    radius: 4
    padding: '12px 16px'
    font: 'ToyotaType 16/400'
    focus-border: '#eb0a1e'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 250
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — hero parallax disables, video autoplay pauses, only opacity transitions remain.'

breakpoints:
  mobile: 600
  tablet: 768
  desktop: 1024
  wide: 1440
  ultra: 1920

shadows:
  flat: 'none'
  card: 'rgba(0,0,0,0.06) 0 2px 6px'
  elevated: 'rgba(0,0,0,0.12) 0 8px 24px'
  modal: 'rgba(0,0,0,0.32) 0 24px 64px'
  ring: '0 0 0 2px #eb0a1e'

accessibility:
  contrast-text-on-bg: 14.7          # #252525 on #ffffff — AAA
  contrast-body-on-bg: 11.0          # #333333 on #ffffff — AAA
  contrast-text-on-brand: 4.6        # #ffffff on #eb0a1e — AA Large only (red is bright)
  contrast-on-dark-bg: 14.4          # #ffffff on #252525 — AAA
  focus-ring: '2px solid #eb0a1e with 2px offset'
  reduced-motion-honored: true
  touch-target-min: 44

dark-mode: 'partial — Toyota uses near-black hero bands (#252525) within otherwise light pages, primarily for GR Performance and Tundra HD launches. Full dark variant not shipped on Toyota.com. Toyota App and Multimedia in-vehicle UI run dark by default.'
---

## 1. Visual Theme & Atmosphere

Toyota.com is the Japanese-reliability mainstream — the marketing surface for the world's most-sold automotive brand, calibrated for global markets where the brand voice must read as **calm, confident, dependable** across two hundred countries. The page opens onto a bright white canvas with the **Toyota oval emblem** (the 1990 oval-within-an-oval that contains the letters T-O-Y-O-T-A in its negative space) anchored top-left of a thin nav, and an immediate full-bleed photograph of a Camry on a coastal highway, a RAV4 at a trailhead, a Corolla in a city sunset, or a Tundra towing a trailer through Wyoming. The photography mood is **everyday capability** — neither Audi-luxury nor Ford-truck-tough nor VW-friendly — but **dependable across contexts**.

The colour mood is **iconic red on white**. Toyota's signature voltage — the bright `#eb0a1e` red that has appeared on every Toyota emblem since 1990 — carries every primary CTA, every selected state, every hover-link. Surrounding it, a near-monochrome neutral system in cool whites (`#ffffff` / `#f5f5f5` / `#e8e8e8`) provides the ground. The dark band (`#252525`, deep neutral grey rather than pure black) is reserved for **GR Performance** (Gazoo Racing) launches, **Tundra HD**, and **Land Cruiser** moments — when the brand wants to signal capability or motorsport heritage.

Typography is **ToyotaType** — a custom 2018 family by Monotype designed specifically for the Toyota brand across global markets including Latin, Cyrillic, Greek, Arabic, and crucial CJK siblings (Japanese, Chinese, Korean). Display sets at weight 700 with negative tracking on hero sizes; body sits at 400. The family has slightly wider proportions than European brands' bespoke sans, drawn for legibility at small sizes across diverse global rendering environments. Headlines like "Let's Go Places" (the long-running tagline), "Camry", or "Tundra" land at 56–72px with `-0.005em` to `-0.01em` tracking — confident, broad-shouldered, never delicate.

The signature visual move is the **Toyota oval emblem + red pill CTA + everyday-capability photography** triplet. Like Ford and VW, **Toyota uses pill-radius CTAs** (9999px) — friendly-mainstream geometry that distinguishes the brand from German rectangular-precision and aligns it with global mainstream-automotive convention. The oval emblem itself is the only logomark — never substituted with a "Toyota" wordmark, which would feel formal and lose the brand's seven-decade global recognition.

Motion is **dependable-controlled**: a gentle parallax on hero photography, video autoplay-with-audio-off on GR / Tundra pages, fade-in-on-scroll for content blocks. The brand uses motion to communicate **everyday reliability** — never tech-industry futurism, never American truck swagger, never Bavarian engineering severity.

**Key Characteristics:**
- White canvas (`#ffffff`) with cool-grey neutrals and near-black (`#252525`) hero bands for GR/Tundra/Land Cruiser
- Toyota Red (`#eb0a1e`) — the iconic 1990 emblem voltage — as the singular primary CTA
- ToyotaType global-legible sans (custom 2018 by Monotype with CJK siblings)
- **Pill-radius CTAs** (9999px) — friendly-mainstream geometry
- Soft 8–12px card radii — slightly less soft than VW, slightly more than Audi
- Full-bleed everyday-capability photography (highways, trailheads, sunsets, towing)
- Uppercase section eyebrows at 12/700/0.12em
- The oval-within-an-oval emblem is the only logomark
- Generous 96–128px section padding, 12-column grid
- Hybrid/EV blue (`#0066b1`) reserved for hybrid/electrified content
- GR Orange (`#ff5a1f`) reserved for Gazoo Racing/Performance content
- "Build & Price" / "Build Yours" as primary configurator verbs — American-mainstream convention

## 2. Color Palette & Roles

### Primary
- **Toyota Red** (`#eb0a1e`): The iconic emblem red since 1990 (rgb 235, 10, 30). Bright, saturated, immediately recognizable. Appears on every primary CTA, every selected state, every hover-link, and the emblem itself when inverted.
- **Pure White** (`#ffffff`): Page canvas, card surface, default ground.

### Brand & Dark
- **Surface Dark** (`#252525`): Deep-neutral-grey hero band for GR Performance, Tundra HD, Land Cruiser. Notably **not pure black** — the slight greyness softens the brand from severity into reliability.
- **Surface Dark Elevated** (`#383838`): Cards, panels on the dark band.
- **Deep Footer** (`#101010`): The deepest the page gets — footer ground only.
- **Toyota Emblem**: Always rendered as monochrome black-on-white oval with negative-space "TOYOTA" lettering inside. Inverted to white-on-red on hero bands occasionally.

### Accent (Hybrid / Electrified)
- **Hybrid Blue** (`#0066b1`): The Hybrid Synergy Drive / Electrified blue. Used on Prius, Camry Hybrid, RAV4 Hybrid, BZ4X badges and EV-context content. Never on combustion-only model pages.
- **Hybrid Blue Deep** (`#004f8c`): Pressed/active state.

### Accent (GR / Performance)
- **GR Orange** (`#ff5a1f`): Gazoo Racing / Performance accent. Used on GR Supra, GR Corolla, GR86 content, racing storytelling, performance trim badges. Never decorative.

### Interactive
- **Link** `#0066b1` — body-text inline links (uses Hybrid blue for distinction from Toyota Red CTAs)
- **Link Hover** `#004f8c` — deepens
- **Disabled** `#d0d0d0` — neutral grey
- **Focus** — 2px `#eb0a1e` outline with 2px offset

### Neutral Scale
- **Ink** `#252525` — primary headings (deep grey, not pure black)
- **Body Strong** `#252525` — same as ink
- **Body** `#333333` — paragraph default
- **Muted** `#6e6e6e` — captions, metadata
- **Faint** `#9c9c9c` — disabled labels
- **Hairline Strong** `#a8a8a8` — input borders
- **Hairline** `#d8d8d8` — divider
- **Hairline Soft** `#e8e8e8` — subtle dividers
- **Surface Strong** `#e8e8e8` — divider band
- **Surface Soft** `#f5f5f5` — section alternation
- **Canvas** `#ffffff`

### Surface & Borders
- Light surface tiers cascade `#ffffff` → `#fafafa` → `#f5f5f5` → `#e8e8e8`
- Dark tiers cascade `#252525` → `#383838` → `#101010` (deepest)
- Borders are always 1px solid; soft 8px radii on most surfaces.
- Cards lean on background contrast + 1px hairlines + soft shadows on hover.

### Shadow Colors
Toyota uses **neutral black** at low opacity:
- **Card** `rgba(0,0,0,0.06) 0 2px 6px`
- **Elevated** `rgba(0,0,0,0.12) 0 8px 24px`
- **Modal** `rgba(0,0,0,0.32) 0 24px 64px`

Pure-black-no-tint shadows feel global-neutral — Toyota markets across regions where chromatic shadow tints might read as cultural-specific.

### Semantic
- **Success** `#1f8b46` — confirmation, "in stock"
- **Warning** `#f0a020` — limited offer
- **Danger** `#eb0a1e` — error (also Toyota Red)
- **Info** `#0066b1` — informational badges (also Hybrid blue)

## 3. Typography Rules

### Font Family
- **Display & Body**: `"ToyotaType"` — custom 2018 family by Monotype. Weights 300, 400, 500, 700. Latin, Cyrillic, Greek, Arabic, and crucially **CJK siblings** (Japanese, Chinese, Korean) for global market consistency.
- **ToyotaType lineage**: a slightly-wider humanist sans drawn for legibility across diverse global rendering environments. More open apertures than European bespoke sans, slightly higher x-height for small-screen legibility on global devices.
- **Fallback chain**: `"Helvetica Neue", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`
- **CJK Fallback**: `"Hiragino Kaku Gothic Pro", "Yu Gothic", "Noto Sans JP", sans-serif` for Japanese; comparable chains for zh-CN, zh-TW, ko-KR
- **Mono**: SF Mono / Menlo — used only on developer-facing surfaces
- **OpenType features**: kern, liga (default ligatures only).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT | Notes |
|------|------|------|--------|-------------|----------------|----|-------|
| Display Hero | Display | 72 | 700 | 1.06 | -0.01em | kern, liga | Homepage hero — model name |
| Display XL | Display | 56 | 700 | 1.10 | -0.005em | kern, liga | Subsidiary hero |
| Display LG | Display | 40 | 700 | 1.14 | 0 | kern, liga | Section opener |
| Display MD | Display | 32 | 700 | 1.18 | 0 | kern, liga | Sub-section |
| Display SM | Display | 24 | 700 | 1.25 | 0 | kern, liga | Card header |
| Title LG | Display | 20 | 700 | 1.30 | 0 | kern, liga | Module title |
| Title MD | Display | 18 | 700 | 1.40 | 0 | kern, liga | List item title |
| Title SM | Display | 16 | 500 | 1.40 | 0 | kern, liga | Compact label |
| Body LG | Body | 18 | 400 | 1.55 | 0 | kern, liga | Lead paragraph |
| Body MD | Body | 16 | 400 | 1.55 | 0 | kern, liga | Default paragraph |
| Body SM | Body | 14 | 400 | 1.55 | 0 | kern, liga | Secondary copy |
| Caption | Body | 12 | 400 | 1.40 | 0.04em | kern, liga | Image captions |
| Label Uppercase | Display | 12 | 700 | 1.30 | 0.12em | kern, liga | Section eyebrow — UPPERCASE |
| Button | Display | 14 | 700 | 1.00 | 0.06em | kern, liga | CTA label — UPPERCASE |
| Nav Link | Body | 14 | 500 | 1.40 | 0.02em | kern, liga | Top-level nav |
| Micro | Body | 11 | 400 | 1.40 | 0.05em | kern, liga | Footer fine print |
| Code | Mono | 13 | 400 | 1.50 | 0 | — | Developer docs only |

### Principles
- **Global-legible humanist proportions** are ToyotaType's typographic DNA — slightly wider than Audi/BMW for cross-language legibility.
- **Two-weight workhorse: 400 body, 700 display.** Weights 300 and 500 reserved for nuanced contexts.
- **Negative tracking on display only.** -0.005em to -0.01em on hero copy gives the headline a confident broad-shouldered feel.
- **Uppercase section eyebrows** at 12/700/0.12em — wide tracking, mainstream-automotive tradition.
- **CTA labels in uppercase**, 0.06em tracking — bold-and-bright signage.
- **Body never tracks.** Paragraph copy sits at 0 tracking.
- **CJK-first design**: ToyotaType was drawn with CJK siblings as a first-class concern, not afterthought — critical for the brand's Japanese home market.
- **No italic in display.** Italic appears in press-release datelines only.

## 4. Component Stylings

### Buttons
Toyota CTAs are **pill-radius** (9999px) — mainstream-automotive-friendly geometry shared with Ford and VW. The pill aligns Toyota with global mainstream conventions and softens the brand from German-engineering severity into Japanese-reliability approachability.

**Primary CTA** — the Toyota Red pill:
- Background `#eb0a1e`, text `#ffffff`, font 14/700 uppercase, `0.06em` tracking
- Padding `14px 32px`, radius `9999`, no border
- Transition `background 0.2s ease`
- Hover background `#c10a16`
- Disabled background `#d0d0d0`, text `#9c9c9c`
- Use case: Build & Price, Build Yours, Find a Dealer, Schedule Test Drive

**Ghost (Light)** — secondary on light surfaces:
- Background transparent, text `#252525`, border `1px solid #252525`
- Same padding/typography as primary, pill radius
- Hover: bg `#252525`, text `#ffffff` (full inversion)

**On-Dark Primary** — primary on near-black hero band:
- Background `#ffffff`, text `#252525` (full inversion to ensure contrast on dark)
- Same padding/typography, pill radius
- Use case: GR / Tundra / Land Cruiser hero CTAs

**On-Dark Ghost** — secondary on near-black band:
- Background transparent, text `#ffffff`, border `1px solid #ffffff`
- Hover: bg `rgba(255,255,255,0.1)`

**Text Link with Chevron** — inline action:
- Text `#eb0a1e`, font 14/700 uppercase with arrow glyph `›`
- Underline on hover; colour stays red
- Use case: "Learn More", "View Inventory", "See All Models"

### Cards

**Vehicle Card** — the showroom workhorse:
- Background `#ffffff`, border `1px solid #d8d8d8`, radius 8
- Padding `24px`
- Top: 16:9 transparent-PNG model render
- Below image: optional Hybrid/GR/TRD trim badge, model name in 24/700, starting MSRP, "Build & Price" CTA
- Hover: card lifts 2px with `rgba(0,0,0,0.06) 0 8px 24px` shadow

**Feature Card** — for technology callouts (Toyota Safety Sense, Hybrid Synergy Drive):
- Background `#f5f5f5`, no border, radius 12
- Padding `32px`
- Used in 3-up grids on technology pages

**Hero Band Card** (dark):
- Sits inside a `#252525` band
- Background `#383838`, text white, border `1px solid rgba(255,255,255,0.18)`
- Padding `48px`, radius 12

### Configurator Tile
- Background `#ffffff`, border `1px solid #d8d8d8`, radius 8
- Padding `16px 20px`
- Selected: border `2px solid #eb0a1e` with subtle inner glow
- Used for trim/colour/wheel/package selection

### Badges

**Standard Badge** (filled):
- Background `#252525`, text `#ffffff`
- Font 11/700 uppercase `0.12em`
- Padding `4px 12px`, radius 9999 (pill)

**Hybrid / Electrified Badge**:
- Background `#0066b1`, text `#ffffff`
- Same typography & geometry

**GR / Performance Badge**:
- Background `#ff5a1f`, text `#ffffff`
- Same typography & geometry

### Inputs
- Background `#ffffff`, border `1px solid #a8a8a8`, radius 4
- Padding `12px 16px`, font 16/400
- Focus border `#eb0a1e`, no shadow, 2px ring offset
- Floating label pattern: label inside on rest, animates to top on focus/value
- Error: border `#eb0a1e`, helper text `#eb0a1e` 13/400 below

### Navigation
- White background, 72px height, 1px bottom border `#d8d8d8`
- Toyota oval 96×40 at far left — monochrome black on white
- Primary nav links (Vehicles / Electrified / Shop / Owners / Local Dealer) 14/500 with `0.02em` tracking, `#252525`
- Hover: text `#eb0a1e`, no background change
- Mega-menu opens on hover: full-width white panel, 5-column model grid (Cars / SUVs / Trucks / Vans / Hybrid & EV)
- Sticky on scroll with subtle shadow

### Tooltips & Toasts
- Tooltip: `#252525` background, white text 12/400, padding `8px 12px`, radius 8
- Toast: `#252525` background, white text, fixed bottom-right, slide-in 300ms

### Modal
- Overlay `rgba(0,0,0,0.6)`
- Dialog `#ffffff`, radius 12, padding `48px`, max-width 720
- Close icon top-right

### Tabs (Specs Pages)
- Underline tabs, 14/500, `#6e6e6e` inactive, `#eb0a1e` active with 2px bottom border

## 5. Layout Principles

### Spacing System
- Base **8px**. Scale 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.
- Section padding 96–128px on desktop, 64–96px on tablet, 48–64px on mobile.
- Card gap 24–32px in grids.
- Button padding `14px 32px`.

### Grid & Container
- 12-column grid, 1440px max content width, 24px gutters
- Hero is full-bleed (100vw, 88vh)
- Vehicle card grid is 4-up at desktop, 2-up tablet, 1-up mobile

### Whitespace Philosophy
Toyota uses whitespace as **dependable whitespace** — neither luxury (Audi-restrained) nor mainstream-American (Ford-catalogue) nor friendly-German (VW-welcoming) — but **calm-confident global pacing**. Sections breathe at 96–128px so the everyday-capability photograph dominates, and surrounding copy reads as supporting voice. The brand commits to **reliable rhythm**.

### Section Cadence
- The brand rhythm is **white → grey-soft → white → near-black (GR/Tundra moments) → white → footer**
- Hero (white or near-black for GR) → vehicle grid (white) → feature row (grey-soft) → spec table (white) → CTA band (often near-black) → footer (deep)

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0 | Tables, dividers, image edges |
| Micro | 2 | Form-error indicator |
| Standard | 4 | Inputs, small tiles |
| Comfortable | 8 | **Vehicle cards, configurator tiles — Toyota's primary card radius** |
| Relaxed | 12 | Feature cards, modals, hero panels |
| Featured | 16 | Showcase image vignettes (rare) |
| Pill | 9999 | **All buttons + badges — Toyota's signature CTA shape** |

The combination of **pill buttons + 8px-soft cards** is Toyota's distinctive geometry — friendlier than Audi/BMW (rectangle), slightly less soft than VW (12px cards), aligned with mainstream-automotive global conventions.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | Flat | Default state for cards, inputs, buttons |
| 1 | `rgba(0,0,0,0.06) 0 2px 6px` | Sticky nav on scroll, light card hover |
| 2 | `rgba(0,0,0,0.12) 0 8px 24px` | Vehicle card hover, mega-menu overlay |
| 3 | `rgba(0,0,0,0.32) 0 24px 64px` | Modal dialogs |
| 4 | Frost — `rgba(255,255,255,0.92)` + blur 12px | Image-overlay info panel on hero |
| 5 | Inner glow — `inset 0 0 0 2px #eb0a1e` | Selected configurator tile |

### Shadow Philosophy
Toyota uses **neutral black** shadows — global-neutral, no chromatic tint. Cards lift on hover; flat-default-with-hover-lift is the brand's grammar.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style for most transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — slower entry for hero parallax and GR reveal sections
- **Spring/bounce**: never. Toyota refuses overshoot.

### Duration
- **Fast** 150ms — colour transitions on hover
- **Standard** 250ms — opacity fades, mega-menu reveal
- **Slow** 400ms — hero parallax, video poster fades

### Per-Component Recipes
- **Primary button hover**: `background 0.2s ease`. No lift, no scale.
- **Vehicle card hover**: card lifts 2px translateY + shadow intensify 250ms
- **Mega-menu reveal**: opacity + 8px translateY 250ms emphasized
- **Hero parallax**: image scrolls at 0.7× speed of viewport; disabled on prefers-reduced-motion
- **Configurator tile select**: border weight + colour transition 200ms

### Page Transitions
Hard cuts on route change. Configurator step transitions use opacity 250ms.

### Reduced Motion
Honoured at the CSS level: parallax disables; video autoplay pauses; carousel auto-advance pauses; opacity-only transitions remain.

## 9. Accessibility & A11y

### Contrast Pairs
- **Ink on White** — `#252525` / `#ffffff` = **14.7:1** — AAA all sizes
- **Body on White** — `#333333` / `#ffffff` = **11.0:1** — AAA
- **Muted on White** — `#6e6e6e` / `#ffffff` = **5.0:1** — AA Normal
- **White on Toyota Red** — `#ffffff` / `#eb0a1e` = **4.6:1** — AA Large only (Toyota Red is bright; bold or large text required for AA)
- **White on Dark Surface** — `#ffffff` / `#252525` = **14.4:1** — AAA
- **Hybrid Blue on White** — `#0066b1` / `#ffffff` = **6.4:1** — AA Normal, AAA Large
- **Disabled** — `#9c9c9c` / `#ffffff` = **2.8:1** — fails AA Normal, used only for disabled

**Important**: Toyota Red `#eb0a1e` against white passes AA at large sizes (≥18.66px bold or ≥24px). For small-bold body text inside the red CTA, the bold weight + 14px size combination satisfies AA. Avoid red text on white below 14px.

### Focus Indicators
- 2px solid `#eb0a1e` outline with 2px offset on every interactive element
- On dark bands, focus uses 2px solid white with 2px offset
- `:focus-visible` only — not on mouse click

### ARIA & Patterns
- Mega-menu uses `aria-haspopup="menu"` and `aria-expanded`
- Configurator step uses `role="tablist"` with `aria-selected`
- Modal dialogs trap focus, label via `aria-labelledby`, dismiss on Esc
- Build-and-price flow uses `aria-live="polite"` for price updates

### Keyboard Nav
- Tab order: oval emblem → primary nav → utility (account, locator) → main content → CTA
- Configurator: arrow keys move between trim tiles; Space selects
- Carousel: arrow keys move slides

### Screen Reader Hints
- Toyota oval uses `aria-label="Toyota homepage"`
- Model names announced as full ("Toyota Tundra TRD Pro") not abbreviated
- MSRP includes currency
- Spec tables use proper `<th scope="col">` and `<th scope="row">` semantics
- Multi-language `lang` attribute set per market locale

### Reduced Motion
Honoured (see §8).

## 10. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <600 | Single column; hamburger nav; hero text 32px; CTA stacks; vehicle cards 1-up |
| Tablet | 600–1024 | 2-column vehicle grid; hero 48px; nav stays horizontal but condensed |
| Desktop | 1024–1440 | 4-column vehicle grid; full mega-menu; hero 56–72px |
| Wide | 1440–1920 | Content centred at 1440 max-width |
| Ultra | >1920 | Hero photography scales to fill |

### Touch Targets
- Buttons 48×48 minimum
- Nav links 44px tap area
- Configurator tiles 64×64 minimum

### Collapsing Strategy
- Nav: horizontal → hamburger drawer at <1024
- Vehicle grid: 4 → 2 → 1
- Spec tables: horizontal scroll on mobile
- Hero CTA pair: side-by-side → stacked at <600

### Image Behavior
- Hero images responsive across breakpoints, fill viewport
- `object-fit: cover` on hero, `object-fit: contain` on transparent-PNG renders
- Lazy-load below the fold

### Container Queries
Used selectively on the configurator panel.

## 11. Content & Voice

### Tone
**Calm, confident, dependable, globally-mainstream.** Toyota writes like a reliable engineer who has spent decades earning customer trust. Sentences are declarative and friendly: "Let's Go Places." "Built for the Long Haul." "Camry. Always Iconic." The voice is neither luxury-restrained nor playful — it is **everyday-trustworthy**.

### Microcopy Patterns
- **Primary CTA**: "Build & Price", "Build Yours", "Find a Dealer", "Schedule Test Drive"
- **Secondary**: "Compare Models", "View Specs", "Learn More"
- **Form error**: "Please enter a valid ZIP code."
- **Empty state**: "No matches found near you. Try expanding your search radius."
- **Confirmation**: "Your build has been saved. We'll email you the summary."

### CTA Verb Conventions
- **Build & Price** — the configurator entry verb (American-mainstream, shared with Ford/Chevrolet)
- **Build Yours** — alternate friendly verb
- **Find a Dealer** — locator verb
- **Schedule** — for test drive, service appointment
- **Shop** — for inventory browsing

### Empty States
On the configurator, an unselected option shows the base trim with a quiet "Customize" prompt. Inventory empty states suggest expanding ZIP radius.

### Headline Voice
Headlines lean on the seven-decade tagline tradition: "Let's Go Places", "Moving Forward", "I Love What You Do For Me, Toyota". Sub-heads use **plainspoken capability claims**: "Up to 10,800 lbs of max towing", "Up to 53 mpg combined".

## 12. Dark Mode & Theming

Toyota.com is **partial-dark**: near-black hero bands (`#252525`) appear within otherwise light pages, primarily for **GR Performance**, **Tundra HD**, and **Land Cruiser** moments. The site does not ship a full page-level dark variant. The **Toyota App** and **Toyota Multimedia** (in-vehicle infotainment) run dark by default with the same token bundle inverted.

If implementing a dark variant:
- Swap `bg #ffffff → #252525`
- Swap `bg-soft #f5f5f5 → #383838`
- Swap `text-ink #252525 → #ffffff`
- Swap `text #333333 → #d8d8d8`
- Brand stays `#eb0a1e` (works on both grounds)
- Borders shift to `rgba(255,255,255,0.18)`
- Card surface becomes `#383838`

## 13. Lineage & Influences

Toyota.com inherits from three traditions: **Japanese reliability marketing tradition** (the seven-decade "Quality, Dependability, Value" promise distilled into the iconic 1990 oval emblem), **mainstream-American automotive web** (build-and-price flows, MSRP transparency, dealer-locator integration — adopted from Ford/Chevrolet conventions for the US market), and **global-corporate design system rigor** (CJK-first typography, multi-locale URL structures, pill-radius geometry shared with Ford and VW).

What Toyota rejects: it rejects Audi's monochrome severity (Toyota commits to chromatic red), BMW's two-weight typographic discipline (Toyota uses 400 body and 500 nav-link, not exclusively 300/700), Tesla's no-CTA minimalism (Toyota commits to clear primary CTAs), and Ferrari's editorial-dark canvas pretense (Toyota's canvas is bright white). The brand commits to **everyday global reliability**.

- **Toyota oval-within-an-oval emblem, 1990** — designed by the in-house Toyota Design Division for the company's 50th anniversary, encoding "T" + "Y" + the steering wheel + the road in a single mark — https://www.toyota.com/
- **Saul Bass / IBM logo lineage** — corporate emblem reduction tradition (broadly influential on Toyota's 1990 oval)
- **Monotype / ToyotaType 2018** — bespoke global font family — https://www.monotype.com/
- **Japanese reliability print marketing** — 1970s–90s — quality-dependability-value voice
- **Global mainstream-automotive pill-CTA convention** — shared with Ford, VW, Honda

## 14. Do's and Don'ts

### Do
- Use Toyota Red `#eb0a1e` for every primary CTA — the iconic 1990 emblem voltage
- Set body type at weight 400 — ToyotaType's body weight
- Set display type at weight 700 — the brand's monumental weight
- Open every section with a 12/700 uppercase eyebrow at 0.12em tracking
- Use **pill-radius (9999) buttons** — mainstream-automotive friendly geometry
- Use **soft 8px card radii** — slightly less soft than VW, aligned with mainstream conventions
- Reserve Hybrid Blue `#0066b1` for hybrid/electrified content
- Trust GR Orange `#ff5a1f` only inside Gazoo Racing / Performance content
- Use full-bleed everyday-capability photography (highways, trailheads, sunsets, family contexts)
- Render the Toyota oval as monochrome black-on-white — never coloured
- Use "Build & Price" or "Build Yours" as the configurator entry verb

### Don't
- Use rectangular CTAs — Toyota's pill is non-negotiable
- Use Toyota Red `#eb0a1e` body text below 14px on white — the contrast doesn't pass AA at small sizes
- Use weight 300 for body — drifts into European luxury territory
- Apply Hybrid Blue `#0066b1` outside hybrid/electrified content
- Apply GR Orange `#ff5a1f` outside Gazoo Racing / Performance content
- Substitute the oval emblem with a "Toyota" wordmark — the oval is the only logomark
- Use uppercase headlines — uppercase is reserved for 12px eyebrows and 14px CTAs
- Apply chromatic-tinted shadows — Toyota uses neutral black for global-neutral feel
- Use italic in body or display — italic is press-release dateline only
- Use studio-isolated photography — Toyota photography is environmental and everyday
- Use "Configure" — Toyota's verb is "Build & Price" or "Build Yours" (American-mainstream)

## 15. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Toyota Red `#eb0a1e`
- Background: White `#ffffff`
- Heading text: Deep Grey `#252525`
- Body text: `#333333`
- Muted text: `#6e6e6e`
- Dark surface: Near-black `#252525`
- Hairline border: `#d8d8d8`
- Hybrid Blue (electrified only): `#0066b1`
- GR Orange (Gazoo Racing only): `#ff5a1f`

### Example Component Prompts
- "Create a Toyota hero section with full-bleed Camry or RAV4 photography in everyday-capability environmental light (16:9), a 72px ToyotaType 700 model name on the bottom-left in `#252525`, a 12px uppercase eyebrow ('THE 2026 CAMRY HYBRID') above it tracked at 0.12em in `#eb0a1e`, and a primary `#eb0a1e` pill 'Build & Price' button + ghost 'Find a Dealer' button — both 14/700 uppercase, pill-radius 9999."
- "Design a 4-up vehicle card grid where each card sits on `#ffffff` with a 1px `#d8d8d8` border at 8px radius, holds a 16:9 transparent-PNG vehicle render at top, then optional Hybrid/GR/TRD pill badge, a 24/700 model name, a starting MSRP, and a 14/700 uppercase Toyota-Red 'Build & Price ›' link. Hover lifts card 2px with neutral-black shadow."
- "Build a near-black GR Performance launch band: background `#252525`, white 56/700 headline ('GR Corolla. Bred for Performance.'), 18/400 body lead in `#bcbcbc`, white-pill ghost CTA. 96px vertical padding."
- "Create a configurator step with a 4-up tile grid; each tile is white with a 1px `#d8d8d8` border at 8px radius, 16×20 padding. Selected state: border 2px `#eb0a1e` with subtle inner glow."
- "Design a Toyota uppercase eyebrow component: 12px ToyotaType 700, letter-spacing 0.12em, color `#eb0a1e`, sits above every section headline with 16px bottom margin."
- "Make a sticky white nav with the Toyota oval emblem (96×40 monochrome black) at far left, five 14/500 nav links centre (Vehicles / Electrified / Shop / Owners / Local Dealer), three utility icons right, 72px height, 1px bottom border `#d8d8d8`."

### Iteration Guide
1. Verify the pill-radius CTA — if a button is rectangular, the brand reads as Audi/BMW, not Toyota.
2. Check that Toyota Red `#eb0a1e` is on every primary CTA — never substitute with Hybrid blue or GR orange.
3. Confirm Toyota Red against white passes AA at the size you're using — small body text in red won't pass.
4. Ensure section eyebrows are uppercase 12/700 at 0.12em.
5. Hold Hybrid Blue `#0066b1` for hybrid/electrified content only.
6. Hold GR Orange `#ff5a1f` for Gazoo Racing / Performance content only.
7. Photography should be **everyday-capability environmental** — highways, trailheads, family contexts — not studio-isolated luxury.
8. Use "Build & Price" or "Build Yours" as the configurator verb — American-mainstream convention shared with Ford/Chevrolet.
9. The Toyota oval emblem must be monochrome black on white or white on dark — never coloured, never gradient.
