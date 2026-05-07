---
name: Microsoft
tagline: Fluent surfaces — off-white canvas, Segoe UI Variable Display, and a Cortana-blue action color carrying every product.
updated_at: 2026-05-04T14:57:35+12:00
published_at: 2026-05-04T14:57:35+12:00
author: webdesignhot
source_url: https://www.microsoft.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [saas]
tags: [light, structured, sans, dense, cool]
preview_swatch: ['#fffdfb', '#0067b8', '#0e1726']
related: [github, copilot, adobe]
description: 'Microsoft''s marketing surface is Fluent Design slowed down to corporate cadence. The canvas is a slightly-warm off-white (`#fffdfb`), the workhorse type is **Segoe UI Variable Display** for headlines and **Segoe UI Variable Text** for body, and the action blue is `#0067b8` — Cortana-blue, slightly deeper than Microsoft''s logo cyan `#00a4ef`. Surfaces use Fluent''s soft 8px corners with Mica-style translucent tints, shadows are warm and ambient, and the four-square logo (`#f25022 #7fba00 #00a4ef #ffb900`) appears as a chromatic flag wherever the brand needs to remind you it''s the company that ships Office, Windows, Xbox, and Azure under one roof.'

colors:
  bg: '#fffdfb'                # observed body bg — warm off-white
  bg-soft: '#f5f5f5'           # alternating section
  bg-tinted: '#dceef8'         # observed accent surface (light blue Mica tint)
  bg-deep: '#0e1726'           # observed near-black hero band (h1 #0e1726)
  bg-deeper: '#05111c'         # deepest cool-black ground
  surface: '#ffffff'           # card panel
  surface-elevated: '#ffffff'  # raised tile (relies on shadow not bg)
  surface-hover: '#efefef'     # observed hover ground
  text: '#0e1726'              # observed h1 ink (cool-near-black)
  text-strong: '#000000'       # observed h2 maxed
  text-body: '#17253d'         # observed body color
  text-muted: '#091f2c'        # subdued display
  text-faint: '#616161'        # caption / metadata
  text-disabled: '#dcdcdc'     # disabled control text
  text-on-deep: '#ffffff'      # white on dark band
  brand: '#0067b8'             # observed link / accent — Cortana blue (action)
  brand-hover: '#005490'       # pressed
  brand-active: '#003e6c'      # mousedown
  brand-soft: '#dceef8'        # info surface tint (Mica-light)
  logo-orange: '#f25022'       # four-square top-left
  logo-green: '#7fba00'        # four-square top-right
  logo-cyan: '#00a4ef'         # four-square bottom-left (the famous Microsoft cyan)
  logo-yellow: '#ffb900'       # four-square bottom-right
  accent: '#00a4ef'            # logo cyan as decorative accent
  accent-strong: '#0078d4'     # secondary action (older Office blue)
  accent-soft: '#dceef8'       # info-band ground
  link: '#0067b8'              # default anchor (Cortana blue)
  link-hover: '#005490'        # underline grows
  link-visited: '#3c4858'      # visited state
  selected: 'rgba(0,103,184,0.10)' # row-selected ground
  border: 'rgba(6,22,31,0.10)' # observed hairline (rgba(6,22,31,0.1))
  border-strong: '#737373'     # table-row separator
  border-subtle: 'rgba(6,22,31,0.06)' # faintest divider
  ring-focus: '#0067b8'        # 2px focus ring
  shadow-fluent: 'rgba(0,0,0,0.10) 0 6.4px 14.4px' # Fluent depth-8
  shadow-fluent-lifted: 'rgba(0,0,0,0.12) 0 12.8px 28.8px' # Fluent depth-16
  on-brand: '#ffffff'          # white on Cortana blue
  on-accent: '#ffffff'         # white on cyan
  success: '#0e7c41'
  success-bg: '#dff6dd'
  warning: '#d83b01'
  warning-bg: '#fed9cc'
  danger: '#c50f1f'
  danger-bg: '#fde7e9'
  info: '#0067b8'
  info-bg: '#dceef8'

typography:
  display:
    family: '"Segoe UI Variable Display", "Segoe UI", segoeui, "Helvetica Neue", helvetica, arial, sans-serif'
    weights: [300, 400, 500, 600, 700]
    opentype-features: 'kern, liga, calt'
    note: 'Variable axis: weight 100–700, optical-size 9–144 (Display cut auto-engages ≥36px)'
  body:
    family: '"Segoe UI Variable Text", "Segoe UI", segoeui, "Helvetica Neue", helvetica, arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"Cascadia Code", "Cascadia Mono", "SF Mono", Consolas, "Courier New", monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 96, weight: 600, lineHeight: 1.05, tracking: '-0.02em', family: display, opticalSize: 144 }
    display-xl:      { size: 72, weight: 600, lineHeight: 1.10, tracking: '-0.018em', family: display, opticalSize: 96 }
    display-lg:      { size: 62, weight: 500, lineHeight: 1.16, tracking: '-0.012em', family: display, opticalSize: 72 }
    h1:              { size: 48, weight: 500, lineHeight: 1.20, tracking: '-0.01em',  family: display, opticalSize: 48 }
    h2:              { size: 36, weight: 500, lineHeight: 1.22, tracking: '-0.005em', family: display, opticalSize: 36 }
    h3:              { size: 28, weight: 600, lineHeight: 1.30, tracking: '0',         family: display }
    h4:              { size: 22, weight: 600, lineHeight: 1.35, tracking: '0',         family: display }
    eyebrow:         { size: 13, weight: 600, lineHeight: 1.30, tracking: '0.06em',   family: body, transform: uppercase }
    lead:            { size: 20, weight: 400, lineHeight: 1.50, tracking: '0',         family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.43, tracking: '0',         family: body }
    label:           { size: 13, weight: 600, lineHeight: 1.4,  tracking: '0.01em',   family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',         family: body }
    cta:             { size: 15, weight: 600, lineHeight: 1.0,  tracking: '0.005em',  family: body }
    nav-link:        { size: 14, weight: 600, lineHeight: 1.3,  tracking: '0',         family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',         family: mono }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',         family: mono }
    price:           { size: 36, weight: 600, lineHeight: 1.05, tracking: '-0.01em',  family: display, opentype: 'tnum' }

radius:
  micro: 2
  sm: 4         # Fluent default for Inputs
  md: 6
  lg: 8         # Fluent default for Cards (most observed)
  xl: 12
  xxl: 16
  pill: 9999
  button: 4     # Fluent button radius
  card: 8       # Fluent card radius
  mica: 12      # Larger Fluent surfaces

spacing:
  base: 4
  scale: [1, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 48
  product-grid-cols: 4
  feature-grid-cols: 3

components:
  button-primary: { bg: '#0067b8', text: '#ffffff', padding: '8px 20px', radius: 4, font: cta, weight: 600, hover-bg: '#005490', use: 'Buy now, Sign in' }
  button-secondary: { bg: 'transparent', text: '#0067b8', padding: '7px 19px', radius: 4, border: '1px solid #0067b8', hover-bg: 'rgba(0,103,184,0.06)', use: 'Learn more' }
  button-subtle: { bg: '#efefef', text: '#0e1726', padding: '8px 20px', radius: 4, hover-bg: '#dcdcdc', use: 'Tertiary action' }
  button-ghost:  { bg: 'transparent', text: '#0067b8', padding: '8px 0', font: cta, weight: 600, hover-text: '#005490', icon-suffix: '›', use: 'Inline link CTA' }
  card:          { bg: '#ffffff', border: 'none', radius: 8, padding: '24px 28px', shadow: 'rgba(0,0,0,0.06) 0 2px 6px, rgba(0,0,0,0.10) 0 6.4px 14.4px', use: 'Feature card, Fluent depth-8' }
  card-mica:     { bg: 'rgba(255,255,255,0.85)', backdrop: 'blur(48px)', radius: 12, border: '1px solid rgba(255,255,255,0.6)', use: 'Translucent panel over hero image' }
  product-tile:  { bg: '#ffffff', radius: 8, padding: 20, shadow: 'rgba(0,0,0,0.06) 0 2px 6px', hover-shadow: 'rgba(0,0,0,0.12) 0 12.8px 28.8px', hover-lift: '-2px', use: 'Microsoft 365 / Surface tile' }
  pricing-card:  { bg: '#ffffff', radius: 8, padding: '32px 28px', shadow: 'rgba(0,0,0,0.10) 0 6.4px 14.4px', highlight-border: '2px solid #0067b8', use: 'Plans grid' }
  badge:         { bg: '#dceef8', text: '#0067b8', padding: '4px 10px', radius: 4, font: label, weight: 600, use: 'New, Recommended' }
  input:         { bg: '#ffffff', border: '1px solid #737373', radius: 4, padding: '8px 12px', focus-ring: '2px solid #0067b8', use: 'Form field' }
  nav-link:      { padding: '0 12px', height: 48, font: nav-link, color-rest: '#0e1726', color-hover: '#0067b8', use: 'Top-nav primary' }

motion:
  ease-standard: 'cubic-bezier(0.33, 0, 0.67, 1)'   # Fluent ease-out cubic
  ease-emphasized: 'cubic-bezier(0.1, 0.9, 0.2, 1)' # Fluent emphasized
  ease-accelerate: 'cubic-bezier(0.7, 0, 1, 0.5)'   # Fluent accelerate
  duration-fast: 150
  duration-standard: 250
  duration-slow: 400
  duration-page: 500
  reduced-motion: 'respects prefers-reduced-motion: reduce — Mica blur disabled, lifts removed, color crossfades retained'

breakpoints:
  mobile: 540
  tablet: 860
  desktop: 1084
  wide: 1400

shadows:
  ambient: 'rgba(0,0,0,0.06) 0 2px 6px'
  fluent-2: 'rgba(0,0,0,0.10) 0 1.6px 3.6px, rgba(0,0,0,0.05) 0 0.3px 0.9px'
  fluent-8: 'rgba(0,0,0,0.10) 0 6.4px 14.4px, rgba(0,0,0,0.05) 0 1.2px 3.6px'
  fluent-16: 'rgba(0,0,0,0.12) 0 12.8px 28.8px, rgba(0,0,0,0.06) 0 2.4px 7.2px'
  fluent-32: 'rgba(0,0,0,0.14) 0 25.6px 57.6px, rgba(0,0,0,0.07) 0 4.8px 14.4px'
  ring: '0 0 0 2px #0067b8'

accessibility:
  contrast-text-on-bg: 16.8           # #0e1726 on #fffdfb — AAA
  contrast-text-on-brand: 5.4         # #fff on #0067b8 — AA
  contrast-link-on-bg: 5.5            # #0067b8 on #fffdfb — AA
  contrast-text-on-deep: 16.0         # #fff on #0e1726 — AAA
  focus-ring: '2px solid #0067b8, 2px offset (Fluent focus)'
  reduced-motion-honored: true
  high-contrast-mode-supported: true   # Windows high-contrast theme honored

dark-mode: optional
---

## 1. Visual Theme & Atmosphere

Microsoft's marketing surface is **Fluent Design** slowed down to corporate cadence — the same design language that ships in Windows 11 and Office, but tuned for narrative density. The page canvas is a slightly-warm off-white at `#fffdfb` (Microsoft chose `255,253,251` for a reason — it reads warmer than pure white on Windows displays calibrated to D65, which compensates for LCD blue-shift). The workhorse is **Segoe UI Variable Display** for everything ≥36px and **Segoe UI Variable Text** for everything below; the optical-size axis switches automatically, so a hero at 96px gets the Display cut and a body paragraph at 16px gets the Text cut without the developer specifying either.

The action color is `#0067b8` — Cortana-blue, slightly deeper than Microsoft's famous logo cyan `#00a4ef`. The deeper hue carries the AA contrast burden (5.4:1 on `#fffdfb`), which the lighter cyan can't sustain at body sizes. The cyan is reserved for **decoration**: the four-square logo's bottom-left tile, accent waves, illustration highlights. This split — deeper blue for action, lighter cyan for identity — is what differentiates Microsoft chrome from Salesforce's `#0d9dda` cyan-everywhere or IBM's `#0f62fe` flat-blue dominance.

Surfaces use Fluent's signature **soft 8px corners** with **Mica** translucent tinting where the page sits over imagery — a desktop-OS treatment imported into the web. The Mica recipe is `rgba(255,255,255,0.85)` over a blurred backdrop with `backdrop-filter: blur(48px)` and a `1px solid rgba(255,255,255,0.6)` highlight border. Shadows follow Fluent's depth ladder — depth-8 (`0 6.4px 14.4px rgba(0,0,0,0.10)`) for cards, depth-16 for hover lifts, depth-32 for modals. The blur values are unusually high; this is what gives Microsoft surfaces their "soft-glass" feel versus Apple's hard-edged macOS shadows.

Layout is **dense-but-orderly**, much like Adobe — Microsoft sells Office, Windows, Xbox, Azure, Surface, LinkedIn, GitHub, and dozens of sub-products under one roof, so the marketing site optimizes for *scannability across product taxonomies*. The four-square logo (`#f25022 #7fba00 #00a4ef #ffb900` — orange/green/cyan/yellow) appears as a chromatic flag in the top-left of the nav, never larger than 24px, never animated, never in any other context. It's the brand's grounding mark — present, small, never theatrical.

**Key Characteristics**
- Warm off-white `#fffdfb` canvas — slightly creamy, not cold-paper
- Segoe UI Variable Display + Text — optical-size axis, weight 300–700
- Cortana-blue `#0067b8` for action (deeper than logo cyan for contrast)
- Logo cyan `#00a4ef` reserved for decoration and the four-square mark
- Fluent depth ladder — 2px / 6.4px / 12.8px / 25.6px shadows
- 8px Fluent card radius; 4px button radius (Fluent specifies smaller corners on smaller controls)
- Mica translucent panels over hero imagery (`rgba(255,255,255,0.85)` + 48px blur)
- Four-square logo as chromatic flag — orange/green/cyan/yellow
- Cool-near-black `#0e1726` for hero text (not pure black — slightly blue-shifted)
- Hairline borders at `rgba(6,22,31,0.10)` — never solid grey

## 2. Color Palette & Roles

### Primary

- **bg** (`#fffdfb`) [observed body bg]: warm off-white canvas — D65-compensated
- **text** (`#0e1726`) [observed h1]: cool-near-black ink, slightly blue-shifted
- **text-body** (`#17253d`) [observed body color]: navy-tinted body type
- **brand** (`#0067b8`) [observed link]: Cortana-blue, primary action
- **on-brand** (`#ffffff`): always white on Cortana blue

### Brand & Logo

- **logo-orange** (`#f25022`): four-square top-left
- **logo-green** (`#7fba00`): four-square top-right
- **logo-cyan** (`#00a4ef`): four-square bottom-left — the famous Microsoft cyan
- **logo-yellow** (`#ffb900`): four-square bottom-right
- **brand-hover** (`#005490`): pressed action
- **brand-active** (`#003e6c`): mousedown

### Accent

- **accent** (`#00a4ef`): logo cyan as decorative — never CTA fill at body sizes
- **accent-strong** (`#0078d4`): legacy Office blue, secondary action
- **accent-soft** (`#dceef8`) [observed bg-tinted]: Mica-light info surface

### Interactive

- **link** (`#0067b8`): default anchor — same as brand
- **link-hover** (`#005490`): underline grows from 1px to 2px
- **link-visited** (`#3c4858`): visited state for content links
- **selected** (`rgba(0,103,184,0.10)`): row-selected ground
- **disabled-text** (`#dcdcdc`): disabled control text
- **disabled-bg** (`#f5f5f5`): disabled control surface

### Neutral Scale (cool, navy-tinted)

- `#0e1726` heading
- `#17253d` body strong
- `#091f2c` display muted
- `#3c4858` body muted
- `#616161` caption
- `#737373` border-strong
- `#dcdcdc` disabled
- `#efefef` surface-hover
- `#f5f5f5` surface-soft
- `#fffdfb` page-bg
- `#ffffff` surface-elevated

### Surface & Borders

- **surface** (`#ffffff`): card panel ground
- **surface-elevated** (`#ffffff`): hover-lifted card (contrast via shadow)
- **surface-hover** (`#efefef`) [observed]: nav-item hover ground
- **bg-tinted** (`#dceef8`) [observed]: Fluent accent surface (Mica-light blue)
- **bg-deep** (`#0e1726`) [observed h1 bg]: near-black hero band
- **bg-deeper** (`#05111c`): deepest cool-black ground
- **border** (`rgba(6,22,31,0.10)`) [observed]: 10% navy-black hairline
- **border-strong** (`#737373`): table separator, input border
- **border-subtle** (`rgba(6,22,31,0.06)`): faintest divider

### Shadow Colors (Fluent Depth Ladder)

Microsoft shadows are **two-layer ambient + key** — every depth level uses both a small ambient shadow for surface contact and a larger key shadow for elevation. All neutral-black, no blue tint:

- **fluent-2** — `rgba(0,0,0,0.10) 0 1.6px 3.6px, rgba(0,0,0,0.05) 0 0.3px 0.9px`
- **fluent-8** — `rgba(0,0,0,0.10) 0 6.4px 14.4px, rgba(0,0,0,0.05) 0 1.2px 3.6px` (default card)
- **fluent-16** — `rgba(0,0,0,0.12) 0 12.8px 28.8px, rgba(0,0,0,0.06) 0 2.4px 7.2px` (hover lift)
- **fluent-32** — `rgba(0,0,0,0.14) 0 25.6px 57.6px, rgba(0,0,0,0.07) 0 4.8px 14.4px` (modal)

### Semantic

- **success** (`#0e7c41`) on **success-bg** (`#dff6dd`): Microsoft 365 confirmation
- **warning** (`#d83b01`) on **warning-bg** (`#fed9cc`): trial-expiring (note: same hue family as logo orange but darker for contrast)
- **danger** (`#c50f1f`) on **danger-bg** (`#fde7e9`): payment-failed
- **info** (`#0067b8`) on **info-bg** (`#dceef8`): default notice — same as brand

## 3. Typography Rules

### Font Family

**Segoe UI Variable** is Microsoft's variable replacement for the static Segoe UI family that shipped from Vista through Windows 10. The variable cut has two key axes:

- **Weight axis** (100–700): Thin to Bold
- **Optical-size axis** (9–144): a true variable optical-size, which means the same file shipping at `wght 600 opsz 12` for body and `wght 600 opsz 96` for hero produces visibly different shapes — the body cut is more open and humanist, the display cut tighter and more geometric.

Stack:

```
"Segoe UI Variable Display", "Segoe UI", segoeui, "Helvetica Neue", helvetica, arial, sans-serif
```

The Display variant auto-engages above 36px when the optical-size axis is bound to font-size. Below 36px, the Text variant takes over. On systems without Segoe UI Variable, the cascade falls back to static Segoe UI (Windows 10), then Helvetica Neue (macOS), then Arial.

The mono companion is **Cascadia Code** — Microsoft's terminal-and-editor mono with programming ligatures (`->`, `=>`, `!=`). Cascadia Mono is the no-ligature variant for tabular displays.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | OT Features | Notes |
|------|------|-----:|-------:|-------:|---------:|-------------|-------|
| display-hero | Segoe UI Var Display | 96 | 600 | 1.05 | -0.02em | kern, liga | optical-size 144 |
| display-xl | Segoe UI Var Display | 72 | 600 | 1.10 | -0.018em | kern | optical-size 96 |
| display-lg | Segoe UI Var Display | 62 | 500 | 1.16 | -0.012em | kern | observed h1 size |
| h1 | Segoe UI Var Display | 48 | 500 | 1.20 | -0.01em | kern | section title |
| h2 | Segoe UI Var Display | 36 | 500 | 1.22 | -0.005em | kern | observed h2 |
| h3 | Segoe UI Var Display | 28 | 600 | 1.30 | 0 | kern | card title |
| h4 | Segoe UI Var Display | 22 | 600 | 1.35 | 0 | kern | tile title |
| eyebrow | Segoe UI Var Text | 13 | 600 | 1.30 | 0.06em | uppercase | section eyebrow |
| lead | Segoe UI Var Text | 20 | 400 | 1.50 | 0 | — | hero subhead |
| body-lg | Segoe UI Var Text | 18 | 400 | 1.55 | 0 | — | marketing prose |
| body | Segoe UI Var Text | 16 | 400 | 1.5 | 0 | — | default paragraph |
| body-sm | Segoe UI Var Text | 14 | 400 | 1.43 | 0 | — | secondary copy |
| label | Segoe UI Var Text | 13 | 600 | 1.4 | 0.01em | — | form label |
| caption | Segoe UI Var Text | 12 | 400 | 1.4 | 0 | — | fine print |
| cta | Segoe UI Var Text | 15 | 600 | 1.0 | 0.005em | — | button label |
| nav-link | Segoe UI Var Text | 14 | 600 | 1.3 | 0 | — | top-nav |
| price | Segoe UI Var Display | 36 | 600 | 1.05 | -0.01em | tnum | plan card price |
| code | Cascadia Code | 14 | 400 | 1.5 | 0 | calt, liga | API snippets |
| code-micro | Cascadia Mono | 12 | 400 | 1.4 | 0 | — | inline code |

### Principles

- **Weight 500 is the headline default** — Segoe UI Variable's 500 reads as Microsoft's signature mid-weight. 600 is for tighter card titles; 700 is reserved for strong emphasis.
- **Optical-size is automatic** — when the page ships `font-variation-settings: 'opsz' var(--size)`, the cut adjusts without per-class declarations. This is unique to Segoe UI Variable.
- **Tracking only on display** — `-0.01em` to `-0.02em` for ≥36px; below that, tracking returns to 0.
- **Cascadia for code only** — never use Cascadia for body or display, even for "techy" effect; the brand keeps Segoe and Cascadia in their lanes.
- **Tabular numerals on prices and dashboards** — `tnum` activates for plan-card pricing, KPI widgets, and any data-table cell.
- **Eyebrow uppercase + 0.06em tracking** — 13/600 with uppercase transform; the only place Microsoft "shouts."
- **No italics in display** — italic is reserved for body emphasis and quotes.

## 4. Component Stylings

### Button — Primary (Cortana Blue)

- Background `#0067b8`; text `#ffffff` weight 600
- Padding 8×20, radius 4 (Fluent button radius — smaller than card)
- Font `cta` (Segoe UI Variable Text 15/1.0, +0.005em)
- Hover: bg → `#005490`, no transform
- Active: bg → `#003e6c`, scale(0.98) optional
- Focus: ring `0 0 0 2px #0067b8`, 2px offset (Fluent focus indicator)
- Use: hero CTA "Buy now", "Sign in", "Get Microsoft 365"

### Button — Secondary (Outlined Blue)

- Background transparent; text `#0067b8` weight 600
- Border `1px solid #0067b8`, padding 7×19
- Hover: bg → `rgba(0,103,184,0.06)`, no border change
- Use: "Learn more", "Compare plans"

### Button — Subtle (Fluent Subtle)

- Background `#efefef`; text `#0e1726` weight 600
- Padding 8×20, radius 4
- Hover: bg → `#dcdcdc`
- Use: tertiary action, table-row toolbar

### Button — Ghost (Inline Link CTA)

- Background transparent; text `#0067b8` weight 600
- Padding 8×0; icon suffix `›` 1ch right
- Hover: text → `#005490`, icon translates `+2px` right
- Use: "See all features ›", "Read the case study ›"

### Card (Fluent Depth-8)

- Background `#ffffff`; border `none`; radius 8
- Padding 24×28
- Shadow `rgba(0,0,0,0.06) 0 2px 6px, rgba(0,0,0,0.10) 0 6.4px 14.4px` (two-layer Fluent)
- Hover: shadow → fluent-16 (`rgba(0,0,0,0.12) 0 12.8px 28.8px`)
- Use: feature card, customer story card

### Card — Mica (Translucent over imagery)

- Background `rgba(255,255,255,0.85)`; backdrop-filter `blur(48px) saturate(125%)`
- Border `1px solid rgba(255,255,255,0.6)` (highlight edge)
- Radius 12; padding 32
- Use: hero copy panel sitting over a photo, Surface product page heroes

### Product Tile

- Background `#ffffff`; radius 8; padding 20
- Shadow `rgba(0,0,0,0.06) 0 2px 6px` (resting)
- Hover: shadow → fluent-16, transform `translateY(-2px)`
- Icon 32×32 top-left; title `h4` (22/1.35 600); body-sm description
- Use: Microsoft 365 / Surface / Xbox tile in product portals

### Pricing Card

- Background `#ffffff`; radius 8; padding 32×28
- Shadow `fluent-8` (default), `fluent-16` (highlighted variant) + 2px `#0067b8` border
- "Recommended" ribbon: `#0067b8` bg, white text, top-right corner
- Plan title `h3`; price `price` (36/600 tnum)
- Use: Microsoft 365 plans, Azure pricing tiers

### Badge

- Background `#dceef8`; text `#0067b8`; padding 4×10; radius 4
- Font `label` (13/1.4 600, +0.01em)
- Variants: success, warning, danger, info — palette swap on same shape
- Use: "New", "Recommended", "Best value"

### Input

- Background `#ffffff`; border `1px solid #737373`; radius 4
- Padding 8×12; font `body` (16/1.5 400)
- Focus: border → `#0067b8`, ring `0 0 0 2px rgba(0,103,184,0.20)`
- Error: border → `#c50f1f`, helper-text in `caption` red below
- Use: form field, search

### Navigation

- Top bar height 48px (Fluent default — slimmer than Adobe's 64); bg `#fffdfb`
- Bottom border `1px solid rgba(6,22,31,0.10)`
- Four-square logo at left (24×24)
- Nav links: padding 0×12, font `nav-link` (14/1.3 600), color `#0e1726`
- Hover: color → `#0067b8`, no underline
- Mega-menu drops on hover with multi-column product grid + featured promo card

## 5. Layout Principles

### Spacing System

Base unit `4px`. Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128. Microsoft uses a `40px` step that Adobe doesn't — a Fluent-specific cadence between 32 and 48. Section spacing typically lands at 80–96; card padding at 24–32; tile gaps at 16–20.

### Grid & Container

- Page max-width `1440px` with 24–48px side padding (responsive)
- Prose containers cap at 720px
- Product grid: 4-up at desktop ≥1084, 3-up at tablet 860–1083, 2-up at 540–859, 1-up below 540
- Hero often runs full-bleed with Mica panel overlay

### Whitespace Philosophy

Microsoft's whitespace is **denser than Apple, more breathing-room than Adobe**. The Fluent design language explicitly calls for "comfortable density" — enough air to feel modern but enough density to fit Microsoft 365's 30+ apps in a portal. Section spacing is generous (80–96px); intra-section spacing is tight (16–24px).

### Section Cadence

- Hero (full-bleed image + Mica panel OR `#fffdfb` clean ground)
- Product portal (white, 4-up tiles, Fluent shadows)
- Feature trio (alternating `#fffdfb` / `#f5f5f5`, 3-up)
- Customer logos band (`#f5f5f5`, single row)
- Plans grid (white, 3-up, "Recommended" highlighted)
- FAQ accordion (white, single-column, max-720)
- Footer (`#0e1726` cool-near-black, white text, dense link mesh)

## 6. Shapes & Radius Scale

| Tier | Radius | Use |
|------|------:|-----|
| Micro | 2 | Pill counts, tag corners |
| Small | 4 | Buttons, inputs, badges (Fluent control radius) |
| Medium | 6 | rare |
| Large | 8 | Cards, product tiles, pricing cards (Fluent surface radius) |
| XL | 12 | Mica panels, hero cards |
| XXL | 16 | Premium feature tiles |
| Pill | 9999 | Avatar, status indicator |

The Fluent radius split — small controls (4px) and larger surfaces (8/12px) — is distinctive. Adobe uses a single pill radius for buttons; Microsoft uses small-square buttons inside soft-corner cards. This signals "precision tool" rather than "consumer pop."

## 7. Depth & Elevation

| Level | Treatment | Use |
|------:|-----------|-----|
| 0 | Flat — page bg | Body text, hero |
| 1 | fluent-2 | Resting subtle UI (toolbar) |
| 2 | fluent-8 | Default card, plan card |
| 3 | fluent-16 | Hover lift, dropdown |
| 4 | fluent-32 | Modal, mega-menu |
| 5 | Mica + fluent-32 | Top-most overlay (purchase, sign-in flyout) |

**Shadow Philosophy** — Microsoft's Fluent shadows are **two-layer**: every level combines a small ambient shadow (for surface contact) with a larger key shadow (for elevation). This is borrowed directly from Material Design but tuned with Microsoft's specific opacity values. Shadows are neutral-black; the warmth in Microsoft surfaces comes from the bg color (`#fffdfb`), not from shadow tinting.

## 8. Interaction & Motion

### Easing Curves (Fluent Motion)

- **standard** `cubic-bezier(0.33, 0, 0.67, 1)`: Fluent ease-out cubic — default for most state changes
- **emphasized** `cubic-bezier(0.1, 0.9, 0.2, 1)`: hero CTA, premium tile lift
- **accelerate** `cubic-bezier(0.7, 0, 1, 0.5)`: exit animations (modal dismiss, drawer close)

### Duration Buckets

- **fast** 150ms — hover color, button press
- **standard** 250ms — card lift, shadow intensify
- **slow** 400ms — Mica panel slide-in, mega-menu drop
- **page** 500ms — route transition (cross-fade only)

### Per-Component Recipes

- **Button hover**: bg-color 150ms standard, no transform
- **Button press**: scale(0.98) 100ms standard
- **Card hover**: shadow `fluent-8 → fluent-16` 250ms standard, no lift
- **Tile hover**: `translateY(-2px)` + shadow → fluent-16 250ms emphasized
- **Link hover**: `text-decoration-thickness 1px → 2px` 150ms standard
- **Mega-menu drop**: opacity 0→1 + `translateY(-8px) → 0`, 400ms emphasized
- **Mica panel reveal**: opacity 0→1 + blur `0px → 48px`, 500ms emphasized

### Page Transitions

Cross-fade only (Fluent default). Slide transitions are reserved for Windows shell animations and don't appear on the marketing site.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)`: Mica blur disabled (panels become solid `#ffffff`), tile lifts removed (translateY → 0), shadow transitions still occur (color is information). Modal entry capped at 100ms cross-fade.

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)

- Text `#0e1726` on bg `#fffdfb` — **16.8:1, AAA**
- Body `#17253d` on bg — **13.5:1, AAA**
- Muted `#3c4858` on bg — **8.4:1, AAA**
- White on Cortana `#0067b8` — **5.4:1, AA**
- Link `#0067b8` on bg — **5.5:1, AA**
- White on bg-deep `#0e1726` — **16.0:1, AAA**
- Logo cyan `#00a4ef` on bg — **2.4:1, FAIL** — never use cyan as text/CTA fill at body sizes

### Focus Indicators

Fluent focus is `2px solid #0067b8` with 2px offset. On dark backgrounds, the offset becomes a 1px white inner ring + 2px Cortana outer to maintain contrast on both grounds.

### Windows High-Contrast Mode

Microsoft uniquely honors `forced-colors: active` (Windows high-contrast theme) — buttons render with system colors, borders become `Windows ButtonText`, focus uses `Windows Highlight`. This is a Microsoft-specific accessibility commitment most other brands ignore.

### ARIA Patterns

- **Mega-menu** — `role="menu"` on the dropdown, `role="menuitem"` on links; trigger has `aria-haspopup="menu"` + `aria-expanded`
- **Pricing card** — `role="region"` with aria-labelledby pointing at the plan name
- **Plan toggle** (monthly/annual) — `role="radiogroup"`
- **Mica panel** — decorative, aria-hidden if it carries no semantic content
- **Modal** — `role="dialog"` + `aria-modal="true"`; focus trapped, Escape closes

### Keyboard Navigation

Tab order follows DOM. Skip-link to `#main`. Mega-menu: Tab to trigger → Enter to open → Arrow keys within → Escape returns. Plans: Tab through cards, Enter activates.

### Screen Reader Hints

- Four-square logo: `aria-label="Microsoft"`, decorative aria-hidden on the four colored squares
- Product icons inside tiles: aria-hidden; title carries the accessible name
- "Recommended" ribbon: visually-hidden text "Recommended plan"

### Reduced Motion

Honored — see §8.

## 10. Responsive Behavior

| Breakpoint | Width | Behavior |
|-----------|------:|----------|
| mobile | 0–539 | 1-up tiles, hamburger nav, hero stacks |
| tablet | 540–859 | 2-up tiles, condensed nav, hamburger remains |
| desktop-sm | 860–1083 | 3-up tiles, full nav, mega-menu |
| desktop | 1084–1399 | 4-up tiles, full nav, max-width 1440 |
| wide | 1400+ | 4-up tiles, container caps |

### Touch Targets

Minimum 44×44 (Fluent guideline matches WCAG). Buttons hit 36×~96 on desktop but expand to 44×~120 on touch via media query.

### Collapsing Strategy

- **Nav** — desktop mega-menu; mobile hamburger drawer with accordion product taxonomy
- **Mica panel** — desktop overlays hero image; mobile becomes solid card below image
- **Product grid** — 4 → 3 → 2 → 1 with shrinking gutters 24→20→16→12
- **Pricing** — desktop side-by-side; mobile stacked, "Recommended" first

### Image Behavior

`<picture>` with art-direction sources. Hero stills are JPEG with WebP fallbacks. Lazy-load below-fold. Mica overlays use `image-rendering: auto` to preserve blur fidelity.

### Container Queries

Used for the **product tile** — at container width <320px, the icon shrinks 32→24, body-sm description hides. Allows the same component to ship in 4-up portals and 2-up sidebar embeds.

## 11. Content & Voice

### Tone

Confident, productivity-focused, mildly aspirational. Microsoft's voice is the IT director who wants to look modern but never sacrifices reliability for novelty. Less playful than Apple, less dry than Oracle, less developer-bro than GitHub. The product names do most of the heavy lifting — "Microsoft 365", "Surface Pro", "Azure" — and the surrounding copy stays measured.

### Microcopy Patterns

- **Buttons**: "Buy Microsoft 365", "Sign in", "Try free for 1 month", "See plans", "Compare", "Learn more"
- **Errors**: "Something went wrong. Please try again or [contact support]." — direct, action-oriented
- **Success**: "Welcome to Microsoft 365. Get started with your apps." — confirmation + next step
- **Empty states**: "No documents yet. Create one to get started." — direct + primary CTA

### CTA Verb Conventions

- "Buy" — perpetual purchase
- "Subscribe" / "Try free for 1 month" — recurring (Microsoft 365 default)
- "Sign in" — existing user
- "Get started" — new user free tier (used heavily on Azure)
- "Compare plans" — pricing-page entry
- "Talk to sales" — enterprise / Azure / Dynamics

### Empty States

Functional and direct, like Adobe but warmer in tone — Microsoft empty states often include a thumbnail illustration (line-art with cyan highlights). They never use "Oops!" or apologetic language; they state the situation and offer the action.

### Tone Guardrails

- Avoid "delight", "magical" — Microsoft voice is not Apple voice
- Avoid "we" — refer to products by name ("Microsoft 365 helps you...")
- Avoid heavy exclamation — one per page maximum, usually in a promo banner
- Use "Microsoft" sparingly in body copy — the wordmark already carries the brand; over-naming reads as marketing

## 12. Dark Mode & Theming

Microsoft ships dark mode in Windows 11, Office, and Xbox — but `microsoft.com` itself does **not** honor `prefers-color-scheme: dark` for the marketing site. The closest treatment is the **dark hero band** (`#0e1726`) and the **dark footer**, both local zone-treatments.

If implementing a derivative dark theme, the token swap is well-documented (Fluent dark theme):

```yaml
colors-dark:
  bg: '#0e1726'
  bg-soft: '#17253d'
  surface: '#1e2942'
  surface-elevated: '#243154'
  text: '#fffdfb'
  text-body: '#dcdcdc'
  text-muted: '#a6a6a6'
  brand: '#3aa0f3'      # lighter Cortana for AA on dark
  brand-hover: '#5cb3f5'
  border: 'rgba(255,255,255,0.10)'
  border-strong: 'rgba(255,255,255,0.20)'
```

Mica on dark uses `rgba(0,0,0,0.65)` over a blurred bright backdrop — the inverse recipe of light Mica. Shadows on dark become subtle highlights (`rgba(255,255,255,0.04) 0 1px 0 inset`) since black-on-black shadows are invisible.

## 13. Lineage & Influences

Microsoft's marketing identity is **Fluent Design ported from desktop to web**. Fluent itself descends from Metro (Windows 8), which descended from the Zune typography revolution of 2007–2010 — clean Helvetica-derived sans, generous whitespace, color-as-information. Segoe UI was originally licensed from a Belgian foundry (Agfa Monotype's Segoe), then radically redrawn as Microsoft's own variable cut in 2021.

The four-square logo dates to 2012 — a deliberate break from the italic-Windows-flag of the 1990s and the gradient Windows-XP "luna" mark. It was meant to flatten Microsoft into the Apple-iOS post-skeuomorph era. The four colors aren't arbitrary: orange = Office, green = Windows historically (and Xbox), cyan = browser/Bing/Cortana, yellow = Office's older identity. A chromatic flag for a chromatic conglomerate.

What Microsoft rejects: Apple's hard-edged black-and-white absolutism (Microsoft surfaces are warmer, softer, more permissive); IBM's grid-of-grayscale corporate severity (Microsoft permits brand chroma); Salesforce's cyan-everywhere sameness (Microsoft splits action-blue from decorative-cyan). What Microsoft borrows: Material's two-layer shadow elevation, Apple's optical-size variable typography, Stripe's discipline of one-blue-for-action.

**Influences**

- Metro / Windows Phone (2010) — typography-as-decoration, color-as-information
- Material Design (Google, 2014) — two-layer shadow elevation ladder (https://m3.material.io)
- Apple SF Pro Variable — optical-size axis adoption (https://developer.apple.com/fonts/)
- Helvetica → Segoe lineage — humanist sans corporate reliability
- Office 365 Modern (2018 redesign) — Mica translucent surfaces

## 14. Do's and Don'ts

**Do**

- **Do** keep canvas warm-white `#fffdfb` (not pure `#ffffff` — the warmth matters)
- **Do** use Segoe UI Variable Display ≥36px and Variable Text below; let optical-size axis do its job
- **Do** use Cortana-blue `#0067b8` for action; reserve logo cyan `#00a4ef` for decoration only
- **Do** ship the four-square logo as a 24×24 chromatic flag — never larger, never animated
- **Do** apply Fluent two-layer shadows (ambient + key) — single-layer reads as Material, not Fluent
- **Do** use 4px button radius and 8px card radius — the size split is signature Fluent
- **Do** ship Mica panels (`rgba(255,255,255,0.85)` + 48px blur) over hero imagery
- **Do** honor Windows high-contrast mode (`forced-colors: active`) — distinctive Microsoft commitment
- **Do** keep nav bar slim at 48px — half Adobe's 64
- **Do** use 80–96px section spacing for breathing room

**Don't**

- **Don't** use logo cyan `#00a4ef` as text color or button fill — it fails AA at body sizes
- **Don't** mix the four logo squares as decorative chromas — they belong only inside the wordmark
- **Don't** use single-layer shadows — Fluent demands ambient + key
- **Don't** pure-black `#000000` text — Microsoft uses cool-near-black `#0e1726`
- **Don't** use Cascadia Code outside `<code>` blocks — even for "techy" effect
- **Don't** apply pill-radius buttons — Microsoft uses 4px square buttons (Adobe's pill is the wrong language)
- **Don't** ship a site-wide dark mode without retuning shadows to highlights
- **Don't** use exclamation marks — Microsoft voice is measured, professional
- **Don't** animate the four-square logo — the mark is identity, not effect
- **Don't** drop Mica panels on white backgrounds — they need imagery to function

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #fffdfb
text: #0e1726
text-body: #17253d
brand (Cortana): #0067b8
brand-soft: #dceef8
logo-cyan: #00a4ef
logo-orange: #f25022
logo-green: #7fba00
logo-yellow: #ffb900
border: rgba(6,22,31,0.10)
surface-soft: #f5f5f5
bg-deep: #0e1726
on-brand: #ffffff
```

### Example Component Prompts

1. *"Create a Microsoft hero: warm-white `#fffdfb` ground, 96px Segoe UI Variable Display weight 600 headline, 20px lead in `#17253d`, primary CTA `#0067b8` 4px-radius button 'Buy Microsoft 365', four-square logo top-left in 24×24."*
2. *"Build a Microsoft 365 product portal: 4-up tiles on white ground, each tile 8px radius with two-layer Fluent shadow `rgba(0,0,0,0.06) 0 2px 6px, rgba(0,0,0,0.10) 0 6.4px 14.4px`, 32px product icon, 22/600 Segoe Variable Display title, hover lifts -2px to depth-16 shadow."*
3. *"Design a Mica panel hero: full-bleed photo background, white panel `rgba(255,255,255,0.85)` with `backdrop-filter: blur(48px)` + 1px highlight border, 12px radius, 32px padding, 48/500 Segoe Variable headline, primary `#0067b8` 4px button."*
4. *"Create a Microsoft pricing card: 3-up grid, 8px radius, fluent-8 shadow on resting cards, middle 'Recommended' card with 2px `#0067b8` border + fluent-16 shadow + Cortana-blue ribbon, 36/600 tnum price."*
5. *"Build a Fluent nav bar: 48px height on `#fffdfb`, four-square logo at left, Segoe UI Variable Text 14/600 nav links with `#0e1726` rest and `#0067b8` hover, mega-menu drops on hover with 4-column product grid + featured Mica promo card."*
6. *"Design a feature card with Fluent depth-8: white bg, no border, 8px radius, two-layer shadow, 28/600 h3, 16/400 body, 'Learn more ›' ghost link in Cortana blue with arrow translating +2px right on hover."*

### Iteration Guide

1. **Set the bg first**. If your canvas is `#ffffff` instead of `#fffdfb`, the page reads as Apple/Stripe — not Microsoft. The 2-point warmth is identity-defining.
2. **Don't conflate the cyans**. Cortana blue `#0067b8` is for action; logo cyan `#00a4ef` is for decoration. Mixing them on CTAs reads as bad-Salesforce.
3. **Two-layer shadows or it's not Fluent**. Replace any single-shadow with the ambient + key recipe.
4. **Optical-size matters**. Segoe UI Variable Display at 16px looks wrong; Segoe UI Variable Text at 96px looks wrong. Let the axis switch.
5. **4 + 8 radius split**. Buttons 4, cards 8. If everything has the same radius, the design reads as Adobe (pill-everywhere) or Stripe (6-everywhere).
6. **The four-square is not wallpaper**. One instance per page, top-left of nav, 24×24 maximum. If you want decorative chroma, use Mica or single-color Fluent accents.
7. **Mica needs imagery**. A Mica panel on a white background looks like a bad blur effect. Always pair with a photo/illustration backdrop.
8. **Hero text in `#0e1726`, not black**. The cool-navy-tinted near-black is a Microsoft tell. `#000000` reads as Apple.
