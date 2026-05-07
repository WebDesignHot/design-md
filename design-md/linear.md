---
name: Linear
tagline: Dark-canvas product surface — pure-black ground, indigo accent, custom Inter weights, pill CTAs.
updated_at: 2026-05-06T08:15:13+12:00
published_at: 2026-05-02T23:10:16+12:00
author: webdesignhot
source_url: https://linear.app
spec: design.md/v1.5
quality: curated
featured: true
categories: [dev-tools, saas]
tags: [dark, minimal, sans, mono, dense, structured]
preview_swatch: ['#08090a', '#5e6ad2', '#f7f8f8']
related: [vercel, stripe, raycast]
description: 'Linear treats its marketing site like the product itself — same Inter Variable type at custom weights, same pure-black canvas, same pill-shaped action surfaces. The system is engineered for keyboard-driven dense interfaces; the website inherits that geometry. Indigo `#5e6ad2` is reserved as accent-only; the dominant CTA inverts to near-white on near-black for a single eye anchor per screen.'

colors:
  # Page grounds
  bg: '#08090a'                  # canvas, pure-near-black with a hint of warmth
  bg-marketing: '#010102'        # marketing landing pages — deeper still
  bg-level-1: '#0f1011'          # first elevation tier (cards, panels)
  bg-level-2: '#141516'          # second elevation (hover, emphasized)
  bg-level-3: '#1a1b1d'          # third tier — popovers, raised tooltips
  bg-overlay: 'rgba(8,9,10,0.72)'  # modal scrim
  # Surfaces & containers
  surface: '#0f1011'
  surface-strong: '#141516'
  surface-tinted-brand: 'rgba(94,106,210,0.08)'  # brand-tinted callout wash
  # Text
  text: '#f7f8f8'                 # body copy, headlines
  text-strong: '#ffffff'          # display, max contrast
  text-secondary: '#d0d6e0'       # supporting copy
  text-tertiary: '#8a8f98'        # metadata, captions
  text-quaternary: '#62666d'      # placeholder, faint helpers
  text-disabled: '#3d3f44'
  # Brand & accent
  brand: '#5e6ad2'                # Linear indigo — accent-only
  brand-hover: '#7170ff'          # active states / focus rings
  brand-press: '#4a55c1'
  brand-soft: 'rgba(94,106,210,0.16)'  # tinted backdrop
  accent: '#7170ff'
  link: '#828fff'                 # link copy on dark
  link-hover: '#a3acff'
  # Borders
  border: '#23252a'               # default 1px hairline
  border-strong: '#34343a'        # emphasized
  border-subtle: 'rgba(255,255,255,0.06)'  # near-invisible
  border-brand: '#5e6ad2'
  # CTA-inverse (the signature primary)
  cta-fill: '#e5e5e6'             # near-white pill button
  cta-fill-hover: '#f3f3f4'
  cta-fill-press: '#cfcfd1'
  cta-text: '#08090a'
  # Semantic
  success: '#4cb782'
  success-bg: 'rgba(76,183,130,0.12)'
  warning: '#f2c94c'
  warning-bg: 'rgba(242,201,76,0.12)'
  danger: '#eb5757'
  danger-bg: 'rgba(235,87,87,0.12)'
  info: '#5e6ad2'
  info-bg: 'rgba(94,106,210,0.12)'
  # Shortcut-chip ink (mono signature)
  chip-bg: '#1a1b1d'
  chip-text: '#d0d6e0'
  chip-border: '#34343a'
  on-brand: '#ffffff'

typography:
  display:
    family: 'Inter Variable, "SF Pro Display", -apple-system, system-ui, sans-serif'
    weights: [400, 510, 590]
    opentype-features: ['cv11', 'ss03', 'cv01']  # alt 1/g/l, single-storey
  body:
    family: 'Inter Variable, "SF Pro Display", -apple-system, system-ui, sans-serif'
    weights: [400, 510]
    opentype-features: ['cv11', 'ss03']
  mono:
    family: '"Berkeley Mono", ui-monospace, "SF Mono", monospace'
    weights: [400, 500]
    opentype-features: ['zero', 'tnum']
  scale:
    display-hero:    { size: 80, weight: 510, lineHeight: 1.0,  tracking: '-0.025em', family: display }
    display:         { size: 64, weight: 510, lineHeight: 1.05, tracking: '-0.022em', family: display }
    h1:              { size: 48, weight: 510, lineHeight: 1.05, tracking: '-0.018em', family: display }
    h2:              { size: 32, weight: 510, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h3:              { size: 22, weight: 510, lineHeight: 1.25, tracking: '-0.01em',  family: display }
    h4:              { size: 18, weight: 510, lineHeight: 1.3,  tracking: '-0.005em', family: display }
    eyebrow:         { size: 13, weight: 510, lineHeight: 1.4,  tracking: '0.04em',   family: display, transform: uppercase }
    body-large:      { size: 17, weight: 400, lineHeight: 1.55, tracking: '-0.01em',  family: body }
    body:            { size: 15, weight: 400, lineHeight: 1.55, tracking: '-0.005em', family: body }
    body-small:      { size: 13, weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    body-emphasis:   { size: 15, weight: 510, lineHeight: 1.55, tracking: '-0.005em', family: body }
    label:           { size: 12, weight: 510, lineHeight: 1.4,  tracking: '0.04em',   family: body, transform: uppercase }
    caption:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',         family: body }
    micro:           { size: 11, weight: 510, lineHeight: 1.3,  tracking: '0.05em',   family: mono, transform: uppercase }
    code-inline:     { size: 13, weight: 400, lineHeight: 1.5,  tracking: '0',         family: mono }
    code-block:      { size: 13, weight: 400, lineHeight: 1.6,  tracking: '0',         family: mono }
    shortcut-chip:   { size: 11, weight: 500, lineHeight: 1,    tracking: '0.02em',   family: mono }
    button:          { size: 14, weight: 510, lineHeight: 1,    tracking: '-0.005em', family: body }
    button-large:    { size: 16, weight: 510, lineHeight: 1,    tracking: '-0.005em', family: body }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  card: 24
  pill: 9999

spacing:
  base: 4
  scale: [0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 48, 64, 96, 120, 160]

layout:
  page-width: 1024
  prose-width: 680
  header-height: 72
  section-y: 96
  gutter: 24
  grid-columns: 12

components:
  button-primary:
    backgroundColor: '#e5e5e6'
    textColor: '#08090a'
    rounded: pill
    padding: '0 12px (small) | 0 20px (large)'
    height: '32 / 40'
    font: '13–16px Inter Variable, weight 510'
    hover: 'bg #f3f3f4 — slight brightness lift'
    active: 'bg #cfcfd1'
    focus: 'ring 2px #7170ff offset 2px on bg'
    use: 'sign-up / get-started — high-contrast inverted, one per screen'
  button-ghost:
    backgroundColor: transparent
    textColor: '#d0d6e0'
    border: '1px solid #23252a'
    rounded: pill
    padding: '0 16px'
    height: 32
    hover: 'bg rgba(255,255,255,0.05); text #f7f8f8'
    use: 'secondary nav, "Learn more"'
  button-brand:
    backgroundColor: '#5e6ad2'
    textColor: '#ffffff'
    rounded: pill
    use: 'rare — used only when emphasis must be brand-coded (downloads, beta sign-up)'
    hover: 'bg #7170ff'
  button-icon:
    backgroundColor: transparent
    textColor: '#8a8f98'
    rounded: md
    size: '28 × 28'
    hover: 'bg #141516; text #f7f8f8'
    use: 'header utility — search, theme, account'
  card:
    backgroundColor: '#0f1011'
    border: '1px solid #23252a'
    rounded: lg
    padding: 24
    shadow: none
    hover: 'border #34343a; bg #141516'
    use: 'feature blocks, doc cards — never shadowed'
  card-hero:
    backgroundColor: '#0f1011'
    border: '1px solid #23252a'
    rounded: card
    padding: 48
    use: 'product-screenshot frames, feature splits'
  input:
    backgroundColor: '#0f1011'
    textColor: '#f7f8f8'
    placeholderColor: '#62666d'
    border: '1px solid #23252a'
    rounded: md
    height: 32
    padding: '0 10px'
    focus: 'border #5e6ad2; ring rgba(94,106,210,0.32) 0 0 0 3px'
    font: '14px Inter Variable 400'
    use: 'compact dense — matches in-product editor'
  pill-status:
    backgroundColor: 'rgba(94,106,210,0.12)'
    textColor: '#828fff'
    border: '1px solid rgba(94,106,210,0.22)'
    rounded: pill
    padding: '2px 10px'
    font: '12px Inter Variable 510'
    use: 'status: in-progress / done / blocked — semantic colour swap'
  shortcut-chip:
    backgroundColor: '#1a1b1d'
    textColor: '#d0d6e0'
    border: '1px solid #34343a'
    rounded: sm
    padding: '2px 6px'
    font: '11px Berkeley Mono 500 uppercase'
    use: 'keyboard shortcuts in marketing copy and tooltips'
  navbar:
    backgroundColor: 'rgba(8,9,10,0.72)'
    backdrop-filter: 'blur(12px) saturate(180%)'
    border-bottom: '1px solid #23252a'
    height: 72
    use: 'sticky top — no shadow on scroll, just border edge'
  tooltip:
    backgroundColor: '#1a1b1d'
    textColor: '#f7f8f8'
    border: '1px solid #34343a'
    rounded: md
    font: '12px Inter Variable 510'
    shadow: '0 8px 24px rgba(0,0,0,0.4)'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-instant: 80
  duration-fast: 120
  duration-standard: 180
  duration-slow: 280
  hover-button: 'transform translateY(-1px) over 120ms ease-out; bg shift over 120ms'
  hover-card: 'border #34343a transition over 180ms; no transform'
  page-transition: 'opacity 200ms ease-standard; no slide'
  scroll-fade: 'opacity 0 → 1 over 280ms with translateY(8px) → 0'
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transitions to opacity-only, transform disabled'

breakpoints:
  mobile: 640
  tablet: 768
  laptop: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: '0 1px 2px rgba(0,0,0,0.4)'
  popover: '0 8px 24px rgba(0,0,0,0.5)'
  modal: '0 24px 48px rgba(0,0,0,0.6)'
  ring-focus: '0 0 0 3px rgba(94,106,210,0.32)'
  ring-cta: '0 0 0 2px #7170ff'

accessibility:
  contrast-text-on-bg: 17.4              # #f7f8f8 on #08090a — AAA
  contrast-text-on-brand: 4.7            # #ffffff on #5e6ad2 — AA
  contrast-cta-text: 18.1                # #08090a on #e5e5e6 — AAA
  focus-ring: '3px solid rgba(94,106,210,0.32) offset 2px'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive; tab cycles header → hero CTA → feature grid → footer'
  aria-patterns: 'dialog uses role=dialog + aria-modal=true; popover uses role=dialog + aria-labelledby; status pills use aria-live=polite'

dark-mode: native        # Linear is dark-first; light variant is in-product only, marketing has no light mode

---

## 1. Visual Theme & Atmosphere

Linear is dark-canvas product design at full conviction. The marketing
site is rendered with the same components, weights, and spatial
language as the in-product editor — a deliberate choice that says
"this is what your team will live in." Pure black `#08090a` ground
(not `#000` — a hair warmer to keep the type from crunching), indigo
`#5e6ad2` accent reserved for emphasis, and the pill-shaped CTA
pattern that mirrors keyboard-shortcut chips throughout the app. The
atmosphere is industrial and dense, like an OLED workstation at
2 a.m.: nothing decorative, every pixel earning its place.

What makes it distinctive vs. nearby alternatives: most dev-tool
sites soften their dark canvases for marketing — bigger margins,
lighter text, playful illustrations. Linear refuses. The site reads
like product documentation that happened to include a sign-up form,
and that's exactly what makes it credible to the workflow-obsessed
engineering teams it targets. There's no hero illustration, no
glowing gradient orbs, no marketing-flavoured motion — just product
screenshots set inside their own native frames, captured from the
real running app.

The mood is deliberate restraint as a flex. Where Stripe choreographs
gradients and Vercel celebrates the wordmark, Linear shows you the
issue tracker. The page is the artefact. The signature design moves
— the 510 sub-pixel weight, the inverted near-white CTA pill, the
Berkeley Mono shortcut chips — are all sourced directly from the
product, never invented for marketing.

**Key Characteristics**
- Pure-near-black `#08090a` ground (warm, not cold; never `#000`)
- Custom Inter Variable weights (`510`, `590`) — sub-pixel between 500 and 600
- Indigo `#5e6ad2` reserved as accent — never primary CTA fill
- Inverted CTA: near-white `#e5e5e6` pill on near-black ground
- Berkeley Mono (paid licence) for shortcuts and code — credibility signal
- 1024px page-width cap on 4K displays — refuses to stretch
- Tonal layering, not shadows, for depth (`#08090a` → `#0f1011` → `#141516`)
- Pill geometry runs through buttons, status chips, and key shortcuts
- No drop shadows on cards; floating UI only
- Marketing site shipped from the product codebase — same components

## 2. Color Palette & Roles

### Primary

- **bg** `#08090a` — page canvas, near-black with a hint of warmth
- **text** `#f7f8f8` — primary copy and headlines, never `#ffffff`
- **cta-fill** `#e5e5e6` — primary button background (the inversion move)
- **cta-text** `#08090a` — ink on the inverted button

### Brand & Dark

- **brand** `#5e6ad2` — Linear indigo, emphasis-only
- **brand-hover** `#7170ff` — active states, focus rings
- **bg-marketing** `#010102` — landing pages, deeper-than-product
- **bg-level-1** `#0f1011` — first elevation (cards, panels)
- **bg-level-2** `#141516` — hover state, second elevation
- **bg-level-3** `#1a1b1d` — popovers, tooltips, third elevation

### Accent

- **accent** `#7170ff` — brighter indigo for active glow / focus
- **link** `#828fff` — link copy on dark, slightly brighter than brand
- **link-hover** `#a3acff`
- **brand-soft** `rgba(94,106,210,0.16)` — tinted callout backdrops

### Interactive

- **cta-fill-hover** `#f3f3f4` — primary button hover lift
- **cta-fill-press** `#cfcfd1` — pressed state
- **brand-press** `#4a55c1` — branded button pressed
- Disabled buttons drop alpha to ~40% rather than swapping hue

### Neutral Scale

- **text** `#f7f8f8` — body
- **text-secondary** `#d0d6e0` — supporting copy
- **text-tertiary** `#8a8f98` — captions, metadata
- **text-quaternary** `#62666d` — placeholders, faint helpers
- **text-disabled** `#3d3f44` — disabled labels

### Surface & Borders

- **surface** `#0f1011` — default card
- **surface-strong** `#141516` — emphasized panel
- **border** `#23252a` — default 1px hairline
- **border-strong** `#34343a` — emphasized rule
- **border-subtle** `rgba(255,255,255,0.06)` — barely-visible
- **border-brand** `#5e6ad2` — active input outline

### Shadow Colors

Shadows are *almost never used on cards.* When they appear (popovers,
modals), they are pure-neutral black, multi-layer:

- **shadow-popover** `0 8px 24px rgba(0,0,0,0.5)`
- **shadow-modal** `0 24px 48px rgba(0,0,0,0.6)`
- **shadow-ambient** `0 1px 2px rgba(0,0,0,0.4)` — sticky-header subtle lift

### Semantic

- **success** `#4cb782` + **success-bg** `rgba(76,183,130,0.12)` + 1px tinted border
- **warning** `#f2c94c` + **warning-bg** `rgba(242,201,76,0.12)`
- **danger**  `#eb5757` + **danger-bg**  `rgba(235,87,87,0.12)`
- **info**    `#5e6ad2` + **info-bg**    `rgba(94,106,210,0.12)` — uses the brand

Status pills follow the same pattern: tinted bg + tinted border at
~22% alpha + tinted text at full saturation.

## 3. Typography Rules

### Font Family

- **Primary (display + body)**: Inter Variable, with `"SF Pro Display"`,
  `-apple-system`, `system-ui`, `sans-serif` fallback chain
- **Mono**: Berkeley Mono (paid commercial licence, not free Google
  font), with `ui-monospace`, `"SF Mono"`, `monospace` fallback
- **OpenType features in use**: `cv11` (alt 1, single-storey), `ss03`
  (alt l, single-storey), `cv01` (alt g). These pull Inter slightly
  toward Helvetica-Now feel and remove the disambiguating tail on `l`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Inter Var | 80 | 510 | 1.0 | -0.025em | cv11, ss03 | Marketing landing only |
| display | Inter Var | 64 | 510 | 1.05 | -0.022em | cv11, ss03 | Section heroes |
| h1 | Inter Var | 48 | 510 | 1.05 | -0.018em | cv11, ss03 | Page titles |
| h2 | Inter Var | 32 | 510 | 1.15 | -0.015em | cv11, ss03 | Major sections |
| h3 | Inter Var | 22 | 510 | 1.25 | -0.01em | cv11 | Sub-sections |
| h4 | Inter Var | 18 | 510 | 1.3 | -0.005em | cv11 | Card titles |
| eyebrow | Inter Var | 13 | 510 | 1.4 | 0.04em uppercase | — | Section markers |
| body-large | Inter Var | 17 | 400 | 1.55 | -0.01em | cv11 | Hero subhead |
| body | Inter Var | 15 | 400 | 1.55 | -0.005em | cv11 | Default body |
| body-emphasis | Inter Var | 15 | 510 | 1.55 | -0.005em | cv11 | Inline emphasis |
| body-small | Inter Var | 13 | 400 | 1.5 | 0 | — | Footnotes |
| label | Inter Var | 12 | 510 | 1.4 | 0.04em uppercase | — | Form labels |
| caption | Inter Var | 12 | 400 | 1.4 | 0 | — | Metadata |
| micro | Berkeley Mono | 11 | 510 | 1.3 | 0.05em uppercase | — | Eyebrows, tags |
| code-inline | Berkeley Mono | 13 | 400 | 1.5 | 0 | zero, tnum | Inline code |
| code-block | Berkeley Mono | 13 | 400 | 1.6 | 0 | zero, tnum | Code blocks |
| shortcut-chip | Berkeley Mono | 11 | 500 | 1 | 0.02em | — | Key chip ink |
| button | Inter Var | 14 | 510 | 1 | -0.005em | — | Default button |
| button-large | Inter Var | 16 | 510 | 1 | -0.005em | — | Hero CTA |

### Principles

- **The 510 weight is load-bearing.** Linear licenses a custom
  intermediate Inter weight (between 500 and 600) for headlines. The
  free fallback is `500` — but the 510 cut is what gives the system
  its specific, slightly-firmer-than-medium voice.
- **No true bold.** Hierarchy is carried by size and tracking, not
  weight. `700` is reserved for code emphasis and the rare wordmark
  context — never body.
- **Tracking tightens with size.** Display-hero at `-0.025em` is
  almost a third tighter than body. The 80px H1 needs the negative
  tracking to feel typographically engineered, not bloated.
- **Mono is brand vocabulary.** Berkeley Mono isn't a fallback — it's
  a specific paid licence chosen for its slab-influenced grotesque
  shapes. It signals willingness to spend on type to the right
  audience.
- **OpenType discipline.** `cv11` + `ss03` are enabled globally. The
  alt single-storey `l` and `1` give Inter a more geometric feel and
  match the keyboard-chip aesthetic.
- **Reading width caps at 680px** even when the page is 1024px wide.
  Multi-column layouts appear in documentation, never on marketing.

## 4. Component Stylings

### Buttons (5 variants)

**Primary (the signature inversion)**
- Background: `#e5e5e6`
- Text: `#08090a` at 14/510
- Padding: `0 20px` (large), `0 12px` (small)
- Height: 40 / 32
- Radius: pill (9999)
- Border: none
- Hover: bg lifts to `#f3f3f4`; transform `translateY(-1px)` over 120ms
- Active: bg `#cfcfd1`
- Focus: `ring 2px #7170ff offset 2px`
- Use: sign-up, get-started, the *one* CTA per screen

**Ghost**
- Background: transparent
- Text: `#d0d6e0` at 14/510
- Border: `1px solid #23252a`
- Radius: pill
- Hover: bg `rgba(255,255,255,0.05)`; text `#f7f8f8`; border `#34343a`
- Use: secondary nav, "Learn more"

**Brand (rare)**
- Background: `#5e6ad2`
- Text: `#ffffff` at 14/510
- Radius: pill
- Hover: bg `#7170ff`
- Use: only when the action must read as brand-coded — beta downloads,
  branded downloads. Most pages don't have one.

**Icon**
- Background: transparent → `#141516` on hover
- Size: 28 × 28
- Radius: 8 (md)
- Use: header utilities — search, theme toggle, account

**Destructive**
- Background: `#eb5757` → `#d54848` on hover
- Text: `#ffffff`
- Radius: pill
- Use: confirm-delete dialogs only

### Cards (3 variants)

**Standard card**
- Background: `#0f1011`, Border: `1px solid #23252a`, Radius: 12 (lg)
- Padding: 24, Shadow: none
- Hover: border `#34343a`, bg `#141516`
- Use: feature blocks, doc cards

**Hero card**
- Background: `#0f1011`, Border: `1px solid #23252a`, Radius: 24 (card)
- Padding: 48
- Use: product-screenshot frames

**Tinted brand card**
- Background: `rgba(94,106,210,0.08)`, Border: `1px solid rgba(94,106,210,0.22)`
- Radius: 12
- Use: rare brand-coded callouts (changelog highlights)

### Badges, Tags, Pills

**Status pill** — pill radius, tinted bg + tinted border at ~22% alpha
+ tinted text at full saturation. Used for: in-progress, done, blocked,
in-review. Each maps to semantic colour swap.

**Shortcut chip** — `#1a1b1d` bg, `#34343a` border, Berkeley Mono 11/500
uppercase, 4px radius (small), 2px × 6px padding. Renders as ⌘K, ⇧K, etc.

**Tag** — same as status pill but neutral: `#141516` bg, `#34343a`
border, `#d0d6e0` text. Used for category labels.

### Inputs / Forms

**Text input**
- Background: `#0f1011`, Border: `1px solid #23252a`, Radius: 8
- Height: 32, Padding: `0 10px`
- Font: `14px Inter Variable 400`
- Placeholder: `#62666d`
- Focus: border `#5e6ad2`; ring `rgba(94,106,210,0.32) 0 0 0 3px`
- Disabled: bg `#08090a`, text `#3d3f44`

**Select** — same shell as input + a chevron icon at 12px in
`#8a8f98`; popover follows tooltip styling.

**Checkbox / Radio** — 16 × 16, `1px solid #34343a`, 4px radius
(checkbox) or 9999 (radio); checked fill is brand `#5e6ad2`.

### Navigation

**Top nav**: 72px tall, `rgba(8,9,10,0.72)` bg with `backdrop-filter:
blur(12px) saturate(180%)`, 1px bottom border `#23252a`. Sticky on
scroll — no shadow added, just the border edge.

**Footer**: dark with low-contrast `#62666d` text on bg-marketing
`#010102`; 1px top border.

**Side nav (docs)**: tonal column at `bg-level-1` with `#23252a` rule
on the right; active item gets `bg-level-2` + 2px brand left border.

### Tooltips & Popovers

Tooltip: `#1a1b1d` bg, `#34343a` border, 8 radius, `12px Inter 510`
text, 6 × 10 padding. Shadow `0 8px 24px rgba(0,0,0,0.5)`.

Popover (combobox, menu): `#1a1b1d` bg with same border and shadow,
12 radius, max-width 320, list items use 6/8 padding.

### Toasts

Bottom-right stack, each toast is `#141516` with 1px `#34343a` border,
12 radius, semantic icon at left, body 14/400, optional close at
right. Auto-dismiss 4 seconds; respects reduced motion.

### Modals

Centered overlay on `rgba(8,9,10,0.72)` scrim with backdrop blur.
Dialog box at `#141516`, 16 radius, 24 padding, 1px `#34343a` border,
shadow `0 24px 48px rgba(0,0,0,0.6)`. Title at h3 510, body 15/400,
action row pinned to footer with primary CTA on the right.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px
- **Scale**: `[0, 2, 4, 6, 8, 12, 16, 20, 24, 32, 48, 64, 96, 120, 160]`
- The system favours small steps (2, 6) for in-component spacing and
  big jumps (96, 120) for section rhythm. There's almost no use of
  10 or 14 — the ladder is even-only.
- Density is product-grade: 8px between form rows, 4px between an
  icon and its label, 16px between cards. The marketing page inherits
  the editor's tight spacing.

### Grid & Container

- **Page width**: 1024px max, even on 4K displays
- **Prose width**: 680px — multi-paragraph copy is always capped at
  this width within the 1024 frame
- **Gutter**: 24px
- **Grid**: 12 columns on tablet+, 4 columns on mobile
- Hero treatment: full-bleed bg + centred 1024 content; product
  screenshot lives inside its own card, not full-bleed
- Feature grid: 1.4fr / 1fr asymmetric splits when one side deserves
  visual primacy (product screenshot vs. copy)

### Whitespace Philosophy

Linear is dense by product DNA but generous on marketing rhythm.
Sections breathe at 96–120px vertical gutters; *within* sections the
density tightens immediately to product values (8–24px). The
juxtaposition is the brand's tempo: macro-relaxed, micro-tight.

### Section Cadence

Linear refuses light/dark alternation entirely. The whole site stays
on `#08090a` (or deeper `#010102` on landing pages); section breaks
are tonal — `bg-level-1` panels stand against the canvas, not new
colours. The exception is changelog/customer-quote bands which lift
to `bg-level-2` for one viewport then return to canvas.

## 6. Shapes & Radius Scale

| Tier | px | Use |
|---|---|---|
| Micro | 2 | Decorative slashes, chip corners |
| Standard | 4 | Shortcut chips, inline tags, micro-pills |
| Comfortable | 8 | Inputs, icon buttons, default cards |
| Relaxed | 12 | Cards, panel containers |
| Large | 16 | Modal bodies, hero panels |
| Featured | 24 | Card-hero (product-screenshot frames) |
| Pill | 9999 | Buttons, status pills, avatar mode |

The pill is the system's signature — once you see it on a key
shortcut chip you can't unsee it on the CTAs and status indicators.
There is essentially no `0px` radius element except section dividers
(1px hairline rules); the system has no sharp corners.

Compound radii appear only in modal headers (`16 16 0 0` to lock to
the body) and in pinned tab strips (`8 8 0 0`).

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | flat — `#08090a` only | page canvas |
| 1 | `#0f1011` + 1px `#23252a` border | cards, panels |
| 2 | `#141516` + 1px `#34343a` border | hover, emphasized |
| 3 | `#1a1b1d` + ambient shadow `0 1px 2px rgba(0,0,0,0.4)` | sticky header, eyebrow |
| 4 | `#1a1b1d` + popover shadow `0 8px 24px rgba(0,0,0,0.5)` | tooltips, menus, popovers |
| 5 | `#141516` + modal shadow `0 24px 48px rgba(0,0,0,0.6)` + scrim | modals, dialogs |

### Shadow Philosophy

Linear uses **tonal stacking** as its default depth language. Each
elevation step is roughly 8% lightness — barely perceptible
individually, deliberately readable as a stack. Borders pick up
where tone alone is too subtle: `#23252a` → `#34343a` is the
two-step border ladder.

Drop shadows are **floating UI only**: popovers, tooltips, modals,
toasts. Cards never carry shadows; the border + tonal lift do all
the work. Shadows are pure neutral black (no tint), multi-layer when
deep (modal). The result is a system that reads as solid surfaces
on a solid ground, not floating glass.

## 8. Interaction & Motion ✨

### Easing curves

- **ease-standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for
  hover/state transitions
- **ease-emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — page enters,
  modal slide-in
- **ease-out**: `cubic-bezier(0, 0, 0.2, 1)` — settling motions

### Duration buckets

- **instant**: 80ms — focus-ring appearance
- **fast**: 120ms — button hover, state changes
- **standard**: 180ms — card hover, popover open
- **slow**: 280ms — modal enter, scroll-fade

### Per-component micro-states

- **Button hover**: `translateY(-1px)` + bg lift over 120ms ease-out
- **Button active**: `translateY(0)` + bg press over 80ms
- **Card hover**: border colour transition `#23252a → #34343a` over
  180ms ease-standard; bg lift `#0f1011 → #141516`; *no transform*
- **Link hover**: colour shift only, 120ms; no underline grow (Linear
  uses static underlines on body links)
- **Popover open**: opacity 0 → 1 + scale 0.96 → 1 over 180ms
  ease-emphasized
- **Modal enter**: scrim fade 280ms + dialog slide from `translateY(8px)`
  to 0 over 280ms ease-emphasized
- **Toast enter**: slide from `translateX(16px)` + opacity, 280ms
  ease-emphasized; auto-dismiss after 4s

### Page transitions

Linear avoids slide transitions on marketing — page changes are full
opacity 0 → 1 over 200ms. Scroll-fade for in-view content uses
opacity + 8px translateY → 0 over 280ms.

### Reduced motion

Respects `prefers-reduced-motion: reduce`. All transforms disabled,
all transitions reduced to opacity-only at the same durations. The
sticky-header backdrop-blur stays on (it's not motion).

## 9. Accessibility & A11y ✨

### Contrast pairs

- **#f7f8f8 on #08090a (text on bg)**: 17.4 — AAA at all sizes
- **#d0d6e0 on #08090a (secondary on bg)**: 13.1 — AAA
- **#8a8f98 on #08090a (tertiary on bg)**: 5.4 — AA body, fails AAA at small
- **#08090a on #e5e5e6 (CTA text)**: 18.1 — AAA
- **#ffffff on #5e6ad2 (text on brand)**: 4.7 — AA at body sizes
- **#828fff on #08090a (link)**: 8.2 — AAA

### Focus indicators

All interactive elements ship a focus ring: `3px solid
rgba(94,106,210,0.32)` with 2px offset on dark surfaces, never
outline-style — always box-shadow ring so it composites cleanly over
borders. Brand inputs get the lighter `#7170ff` 2px solid ring.

### ARIA patterns

- **Combobox** (search): `role=combobox` + `aria-expanded` +
  `aria-controls` + `aria-activedescendant`
- **Listbox**: `role=listbox` with `role=option` children, arrow-key
  navigation, Enter to select, Esc to dismiss
- **Dialog**: `role=dialog` + `aria-modal=true` + `aria-labelledby`
  pointing to title node
- **Status pills**: `aria-live=polite` for in-page state changes
- **Shortcut chips**: paired with `aria-keyshortcuts` on the parent
  control

### Keyboard nav

Tab order: header logo → nav links → header CTA → hero CTA → in-page
sections → footer. Skip-to-content link appears on Tab focus before
the header. All buttons and links are reachable via keyboard;
keyboard shortcuts are documented in the help menu (`?`).

### Screen reader hints

- Icon-only buttons carry `aria-label` (e.g., `aria-label="Search"`)
- Decorative icons get `aria-hidden=true`
- Status pills include their state in `aria-label` (e.g.,
  `aria-label="Status: in progress"`)

### Reduced motion

Honoured globally; see §8. Auto-playing GIFs in changelog respect
the same query and freeze on first frame.

## 10. Responsive Behavior

| Breakpoint | px | Layout |
|---|---|---|
| mobile | < 640 | single-column, 16px gutter, h1 → 32px |
| tablet | 640–1023 | 2-column on splits, 20px gutter, h1 → 40px |
| laptop | 1024–1279 | full 1024 layout, 12-col grid, h1 → 48px |
| desktop | 1280–1535 | same as laptop — page caps at 1024 |
| wide | ≥ 1536 | same as laptop — refuses to stretch |

### Touch targets

Minimum 44 × 44 on mobile (buttons grow vertical padding from 8 to
12; icon buttons grow to 36 × 36). Tap targets use the same pill
geometry — fingerprint matches desktop.

### Collapsing strategy

- Header collapses to hamburger at ≤ 768
- Feature grids switch from 1.4fr/1fr asymmetric to single-column
  stack at ≤ 768
- Tables (changelog, comparison) become card lists at ≤ 640
- Sticky sidebar (docs) becomes a top sheet on mobile

### Image behavior

Product screenshots use `aspect-ratio: 16 / 10` and `object-fit:
cover` with `loading=lazy`. SVG illustrations are inline and respect
`currentColor`. No image gets a border-radius mismatch from its
parent card.

### Container queries

Used in card-hero variants where the screenshot frame switches from
landscape to portrait based on container width below 480px.

## 11. Content & Voice ✨

### Tone

Direct, technical, slightly understated. Linear writes like an
engineer pair-reviewing a PR: declarative, present-tense, allergic
to hype. Sentences cap at ~14 words; metaphors are rare and always
mechanical when used.

### Microcopy patterns

- **Button verbs**: "Get started", "Sign in", "Try Linear", "Start
  building" — short, imperative, present-tense. Never "Click here"
  or "Learn more about our..."
- **Errors**: format `<noun> couldn't be <verbed>. <one-sentence
  reason>.` Example: "Issue couldn't be saved. You're offline."
- **Success confirmations**: terse, no exclamation marks. Example:
  "Issue updated."
- **Progress**: `Saving...` rather than `Please wait...`

### Empty states

Empty list views in the marketing demo show: short headline (e.g.,
"No issues yet"), one-line orientation, and a single CTA. No
illustration, no upbeat encouragement.

### CTA verb conventions

The verb ladder Linear uses, in observed frequency:
1. **Get started** — top-of-page hero CTA
2. **Try Linear** — secondary on landing
3. **Sign in** — utility nav
4. **Start building** — developer-facing pages
5. **See pricing** — pricing-link surface

Linear avoids "Sign up free" / "Free trial" / "Free forever" — the
free-tier fact is mentioned in copy below the CTA, not in the verb.

## 12. Dark Mode & Theming ✨

Linear is **dark-first by design**. The marketing site has no light
mode — the in-product editor offers a light theme but the public
website ships dark only. The brand identity is the dark canvas;
inverting it would break recognition.

If a downstream system needs to derive a light variant from these
tokens (e.g., for a light-mode docs portal):

```yaml
colors-light:
  bg: '#ffffff'
  bg-level-1: '#fafbfc'
  bg-level-2: '#f4f5f8'
  text: '#08090a'
  text-secondary: '#393a3f'
  text-tertiary: '#62666d'
  brand: '#5e6ad2'                 # unchanged
  border: '#e1e3e8'
  cta-fill: '#08090a'              # inverts the inversion
  cta-text: '#ffffff'
```

But Linear's own marketing surface stays dark. This is intentional.

## 13. Lineage & Influences

Linear's marketing surface is engineered as a continuation of the
product, not a separate brand layer. The lineage runs through three
strands: dark-canvas product design (Vercel, Modal), keyboard-first
power tools (Sublime Text, Raycast, Superhuman), and Bay-Area-tech
typography discipline (Apple, Stripe). What Linear inherits is the
willingness to refuse marketing softening — to treat the website as
documentation. What it adds is the specific 510-weight Inter cut
and the inverted near-white CTA pill, both unique to this system.

What it rejects: Stripe-class chromatic gradients, Apple-class
glassy chrome, GitHub-class playful illustration. The system has no
mascot, no gradient mark, no decorative element. It also rejects
the Vercel move of using the brand wordmark as the hero — Linear's
hero is always the product itself, never the logo.

**Influences:**
- **Apple SF Pro Display** — Type fallback discipline; sets the
  Bay-Area-tech baseline that Inter's variable cut continues
  ([apple.com/fonts](https://developer.apple.com/fonts/))
- **Berkeley Mono** — Paid licensed mono for shortcut chips and
  code; credibility signal to engineers
  ([berkeleygraphics.com](https://berkeleygraphics.com/typefaces/berkeley-mono/))
- **Vercel Geist** — Adjacent dev-tool typography lineage; both
  prove sans Inter-family for product UI ([vercel.com/font](https://vercel.com/font))
- **Raycast** — Keyboard-shortcut chip aesthetic; Linear's chip
  geometry shares Raycast's mono-inside-rounded pattern
- **Superhuman** — Keyboard-first product UX; Linear inherits the
  density and shortcut-as-first-class-citizen philosophy

## 14. Do's and Don'ts

### Do

- Treat the brand color as accent-only. Linear's indigo is
  punctuation, not a CTA fill — invert to white-on-near-black for
  the primary action.
- Use custom intermediate Inter weights (`510`, `590`) when
  available; fall back to `500` / `600` only when shipping to
  runtimes without variable-font support.
- Cap page width at 1024px even on 4K displays. Wider lines hurt
  product credibility.
- Use tonal layering (`#08090a` → `#0f1011` → `#141516`) for depth.
  Each step is ~8% lightness.
- Render keyboard shortcuts in Berkeley Mono inside `#1a1b1d` chips
  with `#34343a` borders and 4px radius.
- Use the pill (9999) for CTAs, status indicators, and any
  emphasis-bearing geometry.
- Honor `prefers-reduced-motion` — switch all transforms to
  opacity-only.
- Cap reading width at 680px even when the page is 1024.
- Ship the marketing site from the product codebase — match
  components 1:1.
- Use mono micro-labels (Berkeley Mono 11px uppercase) as section
  eyebrows.

### Don't

- Soften dark canvases for marketing — the product is dark, the site
  should be dark.
- Add drop shadows on cards. Use tonal layering or borders.
- Mix the pill (`9999px`) with sharp `0px` — the system has no
  zero-radius elements except section dividers.
- Use brand indigo `#5e6ad2` as a CTA fill colour. The CTA inverts
  to near-white; brand indigo is for accents, links, and tinted
  backgrounds.
- Introduce a second saturated colour. Linear's chromatic budget is
  one indigo plus the semantic four.
- Use pure `#000` or `#ffffff` — both are off by design (`#08090a`,
  `#f7f8f8`).
- Centre H1s. Linear's headlines are left-aligned, period.
- Replace Berkeley Mono with a free Google fallback in production.
  The whole point of the choice is the licence.
- Use slide-in page transitions. Opacity-only matches the system.
- Stretch product screenshots wider than 1024 — they sit inside
  cards, never full-bleed.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:           #08090a
text:         #f7f8f8
text-muted:   #8a8f98
brand:        #5e6ad2
accent:       #7170ff
link:         #828fff
border:       #23252a
cta-fill:     #e5e5e6
cta-text:     #08090a
chip-bg:      #1a1b1d
success:      #4cb782
danger:       #eb5757
```

### Example Component Prompts

1. **Hero**: "Create a hero section on `#08090a` background with a
   left-aligned 64px Inter Variable headline at weight 510 and
   `-0.022em` tracking, body copy at 17px/400 in `#f7f8f8`, capped
   at 680px reading width, with a single primary CTA: a pill button
   filled `#e5e5e6` with `#08090a` text reading 'Get started'."

2. **Card**: "Design a feature card with `#0f1011` background, 1px
   `#23252a` border, 12px radius, 24px padding, no shadow. Title at
   18px Inter 510, body at 15px/400 in `#d0d6e0`. On hover, transition
   border to `#34343a` and bg to `#141516` over 180ms."

3. **Status pill**: "Render a status pill with pill radius (9999),
   `rgba(94,106,210,0.12)` background, `rgba(94,106,210,0.22)` border,
   `#828fff` text at 12px Inter 510, 2px × 10px padding. Vary the
   colour to map to in-progress (brand) / done (success `#4cb782`) /
   blocked (danger `#eb5757`)."

4. **Shortcut chip**: "Build a keyboard-shortcut chip: `#1a1b1d`
   background, 1px `#34343a` border, 4px radius, 11px Berkeley Mono
   500 uppercase text in `#d0d6e0`, 2px × 6px padding. Use for ⌘K,
   ⇧K, Esc — render as a small inline element next to its label."

5. **Sticky nav**: "Make a 72px-tall sticky nav with
   `rgba(8,9,10,0.72)` background, `backdrop-filter: blur(12px)
   saturate(180%)`, 1px bottom border `#23252a`. Logo on the left,
   utility nav (search icon, account) on the right; on scroll the
   border edge stays — no shadow added."

6. **Inverted CTA pill**: "Create a primary CTA button: pill radius
   (9999), `#e5e5e6` background, `#08090a` text at 14px Inter Variable
   weight 510, padding `0 20px`, height 40. Hover: bg `#f3f3f4` +
   `translateY(-1px)` over 120ms ease-out. Focus: `0 0 0 2px #7170ff`
   ring with 2px offset."

### Iteration Guide

1. **Pure-near-black, not pure black.** If your `bg` reads as
   `#000`, soften by 1–2 lightness points to `#08090a`. The warmth
   prevents type crunch.
2. **CTA inverts.** If your primary action is brand-coloured, you've
   missed the central move. Flip it: near-white pill on near-black
   ground. Brand colour goes on accents, links, and tinted bgs only.
3. **Custom Inter weight or fallback.** Prefer Inter Variable at 510
   for headlines; fall back to 500 only when variable isn't shipping.
   Never use 600 — it crosses into the wrong density.
4. **No card shadows.** If a card needs depth, lift its bg one tonal
   step (`#0f1011 → #141516`) and tighten its border. Shadows belong
   to floating UI only.
5. **Pill the CTAs and status.** Mixing pill (9999) with rectilinear
   buttons (8px) breaks the system. Choose pill for any
   emphasis-bearing rounded geometry.
6. **1024 cap.** Never let the page stretch past 1024 even on 4K.
   The product credibility comes from the spatial discipline.
7. **Mono = Berkeley.** When using a code or chip surface, prefer
   Berkeley Mono. If the licence isn't available, JetBrains Mono is
   the closest free substitute — but acknowledge the downgrade.
8. **Reduced motion always.** Respect `prefers-reduced-motion` on
   every transition. Linear's motion is restrained even at full —
   reduced should feel almost identical.
