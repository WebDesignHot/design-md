---
name: Vuori
tagline: Coastal-California performance calm — Aktiv Grotesk on pure white, warm near-black `#333333` ink, restrained small type (28px h1), photography-led, sharp 0px corners. Premium-athletic that never raises its voice.
updated_at: 2026-05-29T21:45:22.003Z
published_at: 2026-05-29T21:45:22.003Z
author: webdesignhot
source_url: https://vuori.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [retail, fashion]
tags: [light, sans, warm, photography-led, minimal, spacious]
preview_swatch: ['#ffffff', '#333333', '#c08457']
related: [lululemon, patagonia, aesop]
description: 'Vuori''s site is what an activewear brand looks like when it would rather feel like a coastal-California lifestyle magazine than a sportswear catalog. The canvas is **pure white** `#ffffff` — full stop, no off-white tint — and the ink is a **warm near-black** `#333333` (`rgb(51, 51, 51)`) for headlines, with body copy rendering even softer at `rgba(0, 0, 0, 0.87)` (≈`#212121`). Type is **Aktiv Grotesk** (Dalton Maag) — a clean, neutral grotesque — held at deliberately **restrained, small sizes**: the H1 is just **28px at weight 400**, body is **14px at weight 300**. Nothing shouts. Corners are **sharp 0px** everywhere — buttons, cards, images, inputs — so the photography reads as full-bleed editorial plates rather than UI tiles. The system itself is near-monochrome (warm black on white); all the brand warmth is carried by the **coastal earth palette in the imagery** — sand, terracotta, sage, sun-bleached driftwood. CTAs are two-tone and flat: a `#333333`-fill / white-label primary and a white-fill / `#333333`-label ghost, both square-cornered with no shadow. The register is calm, premium-athletic, coastal: lots of white space, large photography, small confident type, and a complete refusal of urgency, neon, or rounded-corner friendliness.'


# Canonical 8-role aliases (bg / text / brand / border / accent / muted / surface / danger).
# Maps role names to this entry's actual token names so role-aware
# downstream tools resolve `theme.background` → entry's `bg`, etc.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-terracotta
  muted: text-muted
  border: border
  ring: focus-ring

colors:
  # Page grounds — pure white, no tint
  bg: '#ffffff'                  # pure white canvas — not off-white
  surface: '#ffffff'            # cards and inputs share the canvas
  surface-soft: '#f7f7f7'        # faint gray panel / hover ground
  surface-image-placeholder: '#f0efed'  # warm gray photo loading state
  # Text — warm near-black, never pure black at full strength
  text: '#212121'               # body copy — computed from rgba(0,0,0,0.87) over white
  text-heading: '#333333'        # `rgb(51, 51, 51)` — headlines (also the brand ink)
  text-muted: '#666666'          # subdued meta, prices, captions
  text-faint: '#999999'          # disabled / placeholder
  on-brand: '#ffffff'            # white label on the dark CTA fill
  # Brand — warm near-black is the system color; warmth lives in imagery
  brand: '#333333'              # warm near-black — `rgb(51, 51, 51)`
  brand-hover: '#1a1a1a'         # darkens toward black on hover
  brand-pressed: '#000000'
  # Coastal earth accents — carried by photography, surfaced sparingly in UI
  accent-sand: '#d8c3a5'         # sun-bleached dune / driftwood
  accent-terracotta: '#c08457'   # warm clay — the primary warm accent
  accent-sage: '#9aa78c'         # muted coastal sage / sea-grass
  accent-clay-deep: '#a8623a'    # deeper terracotta for hover/emphasis
  # Borders — hairline warm gray
  border: '#e0e0e0'             # default hairline divider
  border-strong: '#333333'       # outline around ghost CTAs / focus emphasis
  border-input: '#cccccc'        # form field stroke
  focus-ring: '#333333'          # warm-black focus indicator (no blue brand to clash)
  # Semantic — restrained, desaturated to match the calm register
  success: '#3f7d4e'
  success-bg: '#eef4ef'
  warning: '#b07b2e'
  warning-bg: '#f7f0e3'
  danger: '#b23b3b'
  danger-bg: '#f6eaea'

typography:
  display:
    family: '"Aktiv Grotesk", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif'
    weights: [300, 400, 500, 700]
  body:
    family: '"Aktiv Grotesk", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif'
    weights: [300, 400, 500]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 48, weight: 400, lineHeight: 1.1,  tracking: '0.01em',  family: display }
    display-lg:      { size: 36, weight: 400, lineHeight: 1.15, tracking: '0.01em',  family: display }
    h1:              { size: 28, weight: 400, lineHeight: 1.2,  tracking: '0.01em',  family: display }
    h2:              { size: 21, weight: 700, lineHeight: 1.25, tracking: '0',       family: display }
    h3:              { size: 18, weight: 500, lineHeight: 1.3,  tracking: '0.02em',  family: display }
    h4:              { size: 16, weight: 500, lineHeight: 1.35, tracking: '0.04em',  family: body }
    body-lg:         { size: 16, weight: 300, lineHeight: 1.6,  tracking: '0',       family: body }
    body:            { size: 14, weight: 300, lineHeight: 1.6,  tracking: '0',       family: body }
    body-strong:     { size: 14, weight: 500, lineHeight: 1.6,  tracking: '0',       family: body }
    body-sm:         { size: 13, weight: 300, lineHeight: 1.5,  tracking: '0',       family: body }
    label:           { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.08em',  family: body }
    eyebrow:         { size: 11, weight: 500, lineHeight: 1.4,  tracking: '0.14em',  family: body }
    button:          { size: 13, weight: 500, lineHeight: 1.0,  tracking: '0.08em',  family: body }
    caption:         { size: 12, weight: 300, lineHeight: 1.4,  tracking: '0.02em',  family: body }
    price:           { size: 14, weight: 400, lineHeight: 1.4,  tracking: '0',       family: body }

radius:
  none: 0
  micro: 0
  sm: 0
  md: 0
  lg: 0
  pill: 0

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128]

layout:
  page-width: 1440
  prose-width: 680
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  card: 'none'
  card-hover: 'none'
  modal: '0 16px 48px rgba(51, 51, 51, 0.16)'

accessibility:
  contrast-text-on-bg: 16.1     # #212121 on #ffffff
  contrast-heading-on-bg: 12.6  # #333333 on #ffffff
  contrast-on-brand: 12.6       # #ffffff on #333333
  focus-ring: '2px solid #333333 + 2px outset gap'
  reduced-motion-honored: true

components:
  button-primary: { bg: brand, text: on-brand, padding: '14px 28px', radius: 0, font: button }
  button-ghost:   { bg: surface, text: text-heading, border: border-strong, padding: '14px 28px', radius: 0, font: button }
  button-link:    { bg: transparent, text: text-heading, padding: '0', radius: 0, font: button, decoration: 'underline' }
  card:           { bg: surface, border: 'none', radius: 0, padding: 0 }
  card-image:     { bg: surface-image-placeholder, radius: 0, aspect-ratio: '3 / 4' }
  input:          { bg: surface, border: border-input, text: text, radius: 0, padding: '12px 14px' }
  badge:          { bg: surface-soft, text: text-heading, radius: 0, padding: '4px 10px', font: label }

lineage:
  summary: 'Vuori was founded in 2015 in Encinitas, California by Joe Kudla as a performance-apparel brand built around a coastal-California lifestyle ethos — surf, yoga, run, recover — rather than competitive-athletic aggression. The site identity reflects that positioning directly: a calm, premium-athletic register that reads closer to a lifestyle magazine or a quiet-luxury fashion house than to a sportswear catalog. The system is near-monochrome by design — warm near-black `#333333` on pure white `#ffffff`, set in **Aktiv Grotesk** (Dalton Maag, 2010) at deliberately small, restrained sizes (28px H1, 14px/300 body). All brand warmth is delegated to the **photography**, which carries a coastal earth palette (sand, terracotta, sage, driftwood). Sharp 0px corners on every surface let large product and lifestyle images read as full-bleed editorial plates rather than rounded UI tiles. Where Nike SHOUTS and lululemon murmurs in compressed Saans, Vuori speaks softly in a neutral grotesque and lets the West-Coast light do the persuading — the closest tonal neighbors are Aesop, Everlane, and the editorial side of Patagonia, not the saturated sportswear mainstream.'
  influences:
    - { name: 'Aktiv Grotesk (Dalton Maag, 2010)', role: 'the entire type system — neutral grotesque set small and light across display and body', url: 'https://www.daltonmaag.com/font-library/aktiv-grotesk' }
    - { name: 'Joe Kudla / Encinitas 2015 founding', role: 'coastal-California performance-lifestyle positioning and calm brand voice', url: 'https://vuori.com/pages/about-us' }
    - { name: 'Aesop', role: 'minimal monochrome-on-white, photography-led, sharp-cornered premium retail register', url: 'https://www.aesop.com' }
    - { name: 'Everlane', role: 'restrained DTC apparel layout — small neutral type, generous white space, image-first product cards', url: 'https://www.everlane.com' }
    - { name: 'Patagonia (editorial side)', role: 'warm earth-tone outdoor photography carrying brand warmth over a quiet UI', url: 'https://www.patagonia.com' }
    - { name: 'Swiss / International Typographic Style', role: 'grid discipline, neutral grotesque, flat sharp-edged surfaces, restraint as the aesthetic', url: 'https://en.wikipedia.org/wiki/International_Typographic_Style' }
---


## 1. Visual Theme & Atmosphere

Vuori's site is what an activewear brand looks like when it would rather feel like a coastal-California lifestyle magazine than a sportswear catalog. The canvas is **pure white** `#ffffff` — no bone tint, no warm off-white, just white — and the ink is a **warm near-black** `#333333` (`rgb(51, 51, 51)`) for headlines, with body copy rendering even softer at `rgba(0, 0, 0, 0.87)` (≈`#212121`). The whole interface is, on the surface, almost colorless: warm black on white, hairline gray dividers, and nothing else competing. That restraint is the point — it clears the stage for photography.

Type is **Aktiv Grotesk** (Dalton Maag) — a clean, neutral grotesque, slightly warmer and more humanist than Helvetica but without personality tics. What makes Vuori distinctive is not the typeface but the **scale and weight**: the H1 is only **28px at weight 400**, body copy is **14px at weight 300**. Most brands push display type to 64–100px; Vuori holds it down to magazine-caption sizes. The effect is confidence-through-quiet — copy that doesn't need to be large to be read as premium. Letter-spacing on labels and eyebrows opens up slightly (`0.08–0.14em`) to give the small type air.

Corners are **sharp 0px everywhere** — buttons, cards, images, inputs, badges. There is no rounding anywhere in the system. This is a deliberate choice that does real work: with zero radius, every product photo and lifestyle plate reads as a **full-bleed editorial image** butted edge-to-edge, not a friendly rounded UI tile. The grid feels like a printed lookbook. Combined with the absence of shadows (the system is flat), depth comes entirely from photographic contrast and white space.

The brand's warmth is carried almost entirely by the **imagery**, not the chrome. The photography runs a **coastal earth palette** — sand and sun-bleached driftwood, terracotta and warm clay, muted sage and sea-grass — shot in soft West-Coast light. The UI stays monochrome so the pictures supply all the color. This is the inverse of how saturated sportswear brands work: instead of neon UI over neutral product shots, Vuori runs neutral UI over warm, tonal product shots.

The overall register is **calm, premium-athletic, coastal**. Generous white space, large photography, small confident type, two-tone flat CTAs, and a complete refusal of urgency, neon, or rounded-corner friendliness. Where Nike SHOUTS and lululemon murmurs in compressed Saans, Vuori speaks softly in a neutral grotesque and lets the light do the persuading.

**Key Characteristics:**
- Pure white canvas `#ffffff` — no off-white tint
- Warm near-black ink `#333333` for headings; softer `#212121` (`rgba(0,0,0,0.87)`) for body
- **Aktiv Grotesk** across the entire system — display and body
- Deliberately **small, light type**: 28px/400 H1, 14px/300 body
- **Sharp 0px corners everywhere** — buttons, cards, images, inputs
- Flat — **no shadows** on cards or buttons at any state
- Near-monochrome UI; **coastal earth palette lives in the photography** (sand / terracotta / sage / driftwood)
- Full-bleed image plates butted edge-to-edge — reads like a printed lookbook
- Two-tone flat CTAs: `#333333`-fill / white primary, white-fill / `#333333` ghost
- Open letter-tracking on labels and eyebrows to give small type air
- Generous white space; quiet section cadence with no decorative dividers
- Calm coastal voice — no urgency, no exclamation points, no neon


## 2. Color Palette & Roles

### Primary / Canvas
- **Background** `#ffffff` [→ `body { background }`]: pure white page canvas. Never tinted, never off-white.
- **Surface** `#ffffff`: cards and inputs share the canvas — no lift, no panel color by default.
- **Surface Soft** `#f7f7f7`: faint gray ground for hover states and occasional panels.
- **Surface Image Placeholder** `#f0efed`: warm gray shown while product photography loads.

### Text
- **Text** `#212121` [→ `body { color: rgba(0,0,0,0.87) }`]: body copy. Computed from the live `rgba(0,0,0,0.87)` over white. Warm near-black, never pure black at full strength.
- **Text Heading** `#333333` [→ `h1 { color: rgb(51,51,51) }`]: headlines and emphasis ink. Also the system brand color.
- **Text Muted** `#666666`: subdued meta, prices, captions.
- **Text Faint** `#999999`: disabled labels and placeholder text.

### Brand
- **Brand** `#333333`: warm near-black is the system color — it does the work imagery doesn't. Used for primary CTA fills, headings, and focus.
- **Brand Hover** `#1a1a1a`: darkens toward black on hover.
- **Brand Pressed** `#000000`: full black on active press only.
- **On-Brand** `#ffffff`: white label on the dark CTA fill.

### Coastal Earth Accents (photography-led)
These live primarily in imagery; surface them in UI only sparingly (sale flags, editorial blocks, illustration).
- **Sand** `#d8c3a5`: sun-bleached dune / driftwood.
- **Terracotta** `#c08457`: warm clay — the primary warm accent when one is needed.
- **Sage** `#9aa78c`: muted coastal sage / sea-grass.
- **Clay Deep** `#a8623a`: deeper terracotta for accent hover/emphasis.

### Borders
- **Border** `#e0e0e0`: default hairline divider between sections and list rows.
- **Border Strong** `#333333`: outline around ghost CTAs and emphasized fields.
- **Border Input** `#cccccc`: form field stroke at rest.
- **Focus Ring** `#333333`: warm-black focus indicator — no competing blue, so focus reads cleanly against the monochrome UI.

### Semantic
- **Success** `#3f7d4e` on **Success Bg** `#eef4ef`: order confirmations, in-stock.
- **Warning** `#b07b2e` on **Warning Bg** `#f7f0e3`: low-stock, backorder.
- **Danger** `#b23b3b` on **Danger Bg** `#f6eaea`: form errors, sold-out.

Semantic colors are intentionally **desaturated** to match the calm register — no fire-engine red, no signal green. They read as muted earth tones first, status second.


## 3. Typography Rules

### Font Family

**Aktiv Grotesk** (Dalton Maag, 2010) is the entire type system — both display and body. It's a neutral grotesque in the Helvetica/Univers lineage but slightly warmer and more open, with a touch of humanist softness in the curves. Vuori uses it without ornament; the distinctiveness comes entirely from **how small and light** it's set, not from the letterforms.

```
display: "Aktiv Grotesk", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif
body:    "Aktiv Grotesk", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif
mono:    ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace   (rare — code/order IDs only)
```

There is no serif in the system. There is no second sans. One typeface, four weights (300 / 400 / 500 / 700), carries everything. The fallback chain leads with Helvetica Neue / Helvetica so the neutral grotesque character survives if Aktiv Grotesk fails to load.

### Hierarchy

| Token | Size | Weight | Tracking | LH | Use |
|-------|------|--------|----------|-----|-----|
| `display-hero` | 48 | 400 | +0.01em | 1.10 | largest marketing statement (rare — most heroes use h1) |
| `display-lg` | 36 | 400 | +0.01em | 1.15 | campaign landing headlines |
| `h1` | **28** | **400** | +0.01em | 1.20 | **primary page / hero headline (live value)** |
| `h2` | **21** | **700** | 0 | 1.25 | **section titles (live value — note the bold jump)** |
| `h3` | 18 | 500 | +0.02em | 1.30 | sub-sections, product group titles |
| `h4` | 16 | 500 | +0.04em | 1.35 | card / panel titles |
| `body-lg` | 16 | 300 | 0 | 1.60 | editorial body, intro paragraphs |
| `body` | **14** | **300** | 0 | 1.60 | **default body copy (live value)** |
| `body-strong` | 14 | 500 | 0 | 1.60 | emphasized inline copy |
| `body-sm` | 13 | 300 | 0 | 1.50 | secondary meta |
| `price` | 14 | 400 | 0 | 1.40 | product prices — slightly heavier than body |
| `label` | 12 | 500 | +0.08em | 1.40 | form labels, UI labels |
| `button` | 13 | 500 | +0.08em | 1.0 | CTA labels — tracked, often uppercase |
| `eyebrow` | 11 | 500 | +0.14em | 1.40 | UPPERCASE micro-labels above headings |
| `caption` | 12 | 300 | +0.02em | 1.40 | image captions, footnotes |

### Principles

- **Small is the signature.** The H1 is 28px and the body is 14px. Resist the urge to scale display type up — Vuori's confidence is in its restraint. The largest type on a typical page is 28px.
- **Light body, regular headings.** Body copy is weight 300 (light). Headings are 400 (regular), except H2 section titles, which jump to **700** — the one place the system uses real bold. That bold H2 is the strongest typographic accent in the entire interface.
- **Open the small type.** Labels, buttons, and eyebrows get `+0.08–0.14em` tracking so they don't feel cramped at 11–13px. Body and headlines stay near-neutral (`0` to `+0.01em`).
- **Generous line-height on body.** Body runs at `1.6` line-height — airy, magazine-like, easy to read at small sizes.
- **Uppercase only for utility.** Eyebrows, buttons, and nav labels may use UPPERCASE with wide tracking. Headlines and body stay sentence case.
- **One typeface, no exceptions.** No serif accents, no secondary display face. The system's discipline is part of the brand.


## 4. Component Stylings

### Buttons — Flat, Square, Two-Tone

```
/* Primary — dark fill */
.btn-primary {
  background: #333333;          /* warm near-black */
  color: #ffffff;
  padding: 14px 28px;
  border: none;
  border-radius: 0;             /* sharp — always */
  font: 500 13px/1 "Aktiv Grotesk";
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: background 240ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary:hover { background: #1a1a1a; }
.btn-primary:active { background: #000000; }

/* Ghost / outline — the "Shop Women's New" pattern */
.btn-ghost {
  background: #ffffff;
  color: #333333;
  padding: 14px 28px;
  border: 1px solid #333333;
  border-radius: 0;
  font: 500 13px/1 "Aktiv Grotesk";
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.btn-ghost:hover { background: #333333; color: #ffffff; }   /* inverts on hover */

/* Link / text — underline, no chrome */
.btn-link {
  background: transparent;
  color: #333333;
  border: none;
  padding: 0;
  font: 500 13px/1 "Aktiv Grotesk";
  letter-spacing: 0.04em;
  text-decoration: underline;
  text-underline-offset: 4px;
}

/* Accent — earth-tone, reserved for editorial/sale */
.btn-accent {
  background: #c08457;          /* terracotta — sparing use */
  color: #ffffff;
  padding: 14px 28px;
  border-radius: 0;
  font: 500 13px/1 "Aktiv Grotesk";
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.btn-accent:hover { background: #a8623a; }
```

The two live CTAs probed directly are the **dark-fill primary** (`#333333` bg / white label) and the **ghost** (white bg / `#333333` label). Both are `0px` radius and flat. The ghost-inverts-on-hover move is the signature interaction. Padding is generous (`14px 28px`), labels are uppercase and tracked at `0.08em`, and buttons never lift or cast a shadow.

### Cards — Image Is the Card

```
.product-card {
  background: transparent;
  border: none;                 /* no border */
  border-radius: 0;             /* sharp */
  box-shadow: none;             /* flat */
  padding: 0;
}
.product-card__image {
  background: #f0efed;          /* warm gray placeholder */
  border-radius: 0;
  aspect-ratio: 3 / 4;
  display: block;
}
.product-card__name  { font: 400 14px "Aktiv Grotesk"; color: #333333; margin-top: 12px; }
.product-card__price { font: 400 14px "Aktiv Grotesk"; color: #666666; margin-top: 4px; }
```

There is no card chrome. The photograph **is** the card — square corners, edge-to-edge, no border, no shadow, no rounding. Text (name, price) sits below the image in a tight 12px stack. Cards butt against each other in the grid with minimal gutters so the page reads as a continuous lookbook spread.

### Inputs & Forms

```
.input {
  background: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 0;             /* sharp */
  padding: 12px 14px;
  font: 300 14px "Aktiv Grotesk";
  color: #212121;
}
.input::placeholder { color: #999999; }
.input:focus {
  outline: none;
  border-color: #333333;        /* darken stroke on focus */
  box-shadow: 0 0 0 1px #333333; /* doubles the hairline — no glow */
}
.label {
  font: 500 12px "Aktiv Grotesk";
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #333333;
}
```

Inputs are square-cornered hairline boxes that darken their stroke on focus — no rounded fields, no colored glow. Labels are small, uppercase, tracked.

### Badges & Tags

```
.badge {
  background: #f7f7f7;
  color: #333333;
  border-radius: 0;
  padding: 4px 10px;
  font: 500 12px "Aktiv Grotesk";
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.badge--sale { background: #c08457; color: #ffffff; }   /* terracotta accent */
.badge--new  { background: #333333; color: #ffffff; }
```

Badges are flat rectangles with uppercase tracked labels. "New" uses the dark brand fill; "Sale" is the one place the terracotta accent reaches the UI surface.

### Navigation

```
.nav {
  height: 64px;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;   /* single hairline divider */
}
.nav__link {
  font: 500 13px "Aktiv Grotesk";
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #333333;
  text-decoration: none;
}
.nav__link:hover { text-decoration: underline; text-underline-offset: 6px; }
```

The header is a 64px white bar with a single hairline bottom border. Nav links are small, uppercase, tracked, and underline on hover. No background color shifts, no pills, no dropshadow on scroll — just the white bar and its hairline.


## 5. Layout Principles

### Spacing System
- Base unit **4px**. Working rhythm steps: `4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128` px.
- Section vertical padding is generous — `64–96px` between major content blocks. White space is the primary structural device.

### Grid & Container
- Page max-width: **1440px**. Editorial prose columns cap at **680px** for readability at 14–16px.
- Product grids run **2-up (mobile) → 4-up (desktop)** with tight gutters (`8–16px`) so images read as a near-continuous spread.
- Header height: **64px**.

### Whitespace Philosophy
- The page is mostly empty. Type is small, photography is large, and the negative space between them is the design. Vuori would rather add white space than a divider, a border, or a background panel.
- Sections are separated by space and image edges, not by lines or color blocks. A single hairline (`#e0e0e0`) appears only where structurally necessary (header, footer, form rows).

### Section Cadence
- Full-bleed lifestyle photo → small centered headline + ghost CTA → product grid → editorial block → footer. The rhythm alternates large image / quiet type, never two loud elements adjacent.
- Images often bleed to the viewport edge; copy is contained within the 1440px frame and frequently centered.


## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|------|-------|-------|-----|
| **None** | `radius-none` | **0** | **everything — buttons, cards, images, inputs, badges, modals** |
| Micro | `radius-micro` | 0 | (aliased to 0 — system has no rounding) |
| Small | `radius-sm` | 0 | (aliased to 0) |
| Medium | `radius-md` | 0 | (aliased to 0) |
| Large | `radius-lg` | 0 | (aliased to 0) |
| Pill | `radius-pill` | 0 | (aliased to 0 — even CTAs are square) |

### The Zero-Radius Rule

Vuori uses **`0px` radius on every surface, without exception.** There is no rounded corner anywhere in the system — not on buttons, not on cards, not on images, not on inputs, not on modals. This is the single most consistent structural decision in the design. Sharp corners are what let photography read as full-bleed editorial plates rather than UI tiles, and what give the whole interface its printed-lookbook character. **If you reach for any `border-radius` value above 0, you are outside the system.** Where lululemon runs a two-radius rule (0 + 999), Vuori runs a one-radius rule: everything is 0.


## 7. Depth & Elevation

The system is **flat**. Cards, buttons, inputs, and badges have no shadow at any state. Depth comes from photographic contrast and white space, not elevation.

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | flat — no shadow | default for cards, buttons, inputs, badges, nav |
| 1 | `0 16px 48px rgba(51, 51, 51, 0.16)` | modal / drawer overlay only |

### Shadow Philosophy

The only shadow in the system is the modal/cart-drawer overlay, and even that is warm — built from the brand `#333333` at 16% opacity rather than neutral black. Everything else is resolutely flat. The absence of shadow is intentional: it keeps the interface reading as printed pages rather than stacked UI surfaces, and it lets the photography (which carries all the tonal depth) stay the focus. No card hover-lifts, no button drop-shadows, no glow on focus.


## 8. Interaction & Motion

- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (standard material-style ease) across all transitions.
- **Durations:** fast `150ms` (hover tone shifts), standard `240ms` (button/ghost inversion), slow `400ms` (scroll-reveal fades, image cross-fades).
- **Ghost CTA inversion:** the signature micro-interaction — white-fill / `#333333`-label flips to `#333333`-fill / white-label on hover over `240ms`. No transform, no shadow.
- **Primary CTA:** background darkens `#333333 → #1a1a1a` on hover, `→ #000000` on active. Tone shift only.
- **Product image:** cross-fades to an alternate angle / lifestyle shot on hover (~`400ms`). No zoom-bounce, no rounded-corner reveal.
- **Nav links:** underline slides in on hover with a `6px` underline-offset.
- **Scroll reveals:** editorial blocks fade in (and translate Y a few pixels) at `400ms` as they enter the viewport — subtle, never bouncy.
- **Reduced motion:** `prefers-reduced-motion: reduce` is honored — image cross-fades become instant swaps, scroll-reveals render immediately, no Y translation.

Motion is calm and tonal, matching the brand register. Nothing pops, bounces, or scales aggressively. The whole interaction language is "settle," not "snap."


## 9. Accessibility & A11y

### Computed Contrast Pairs (from live tokens)

- **Body text on canvas:** `#212121` on `#ffffff` = **16.1:1** — AAA. (`rgba(0,0,0,0.87)` over white.)
- **Heading on canvas:** `#333333` on `#ffffff` = **12.6:1** — AAA.
- **White label on primary CTA:** `#ffffff` on `#333333` = **12.6:1** — AAA.
- **Ghost CTA label on white:** `#333333` on `#ffffff` = **12.6:1** — AAA.
- **Muted meta on canvas:** `#666666` on `#ffffff` = **5.7:1** — AA (passes normal text; comfortable for meta/price).
- **Terracotta accent label:** `#ffffff` on `#c08457` = **3.0:1** — passes AA for large/bold text only; reserve white-on-terracotta for badges and ≥18px bold, not body.

The monochrome warm-black-on-white core is well above AAA everywhere, which is a direct benefit of the restrained palette. The only contrast watch-item is the terracotta accent — keep its white labels large and bold.

### Focus, Keyboard, ARIA

- **Focus ring:** `2px solid #333333` with a `2px` outset gap. Warm-black, not blue — but distinct enough against white. (If focus and active states risk ambiguity on dark surfaces, switch the ring to white inset.)
- **Touch targets:** CTAs are ≥44px tall by padding (`14px` vertical + 13px label + line-height). Maintain `44×44px` minimum on icon buttons.
- **Keyboard nav:** standard tab order; ghost-CTA inversion and nav underline must also trigger on `:focus-visible`, not only `:hover`.
- **Screen readers:** product cards need an accessible name combining product + color + price; image-only links require `aria-label`. The cart drawer is a modal — trap focus and restore on close.
- **Reduced motion:** honored — see Section 8.


## 10. Responsive Behavior

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640 | 1–2-up product grid, hamburger nav, full-width CTAs, hero H1 stays ~24–28px |
| Tablet | 640–1024 | 2–3-up grid, nav may stay collapsed, hero image full-bleed |
| Desktop | 1024–1280 | 3–4-up grid, inline uppercase nav, 64px header |
| Wide | 1280–1536+ | 4-up grid, content centers within 1440px, images bleed to viewport edge |

- **Touch targets** stay ≥ 44px tall across all breakpoints; CTAs go full-width on mobile.
- **Type** barely scales — the 28px H1 holds near its desktop size down to mobile (Vuori's type is already small enough that aggressive responsive shrinking isn't needed). Body stays at 14px.
- **Images** are the responsive workhorse: hero and lifestyle plates go edge-to-edge on every breakpoint; product images preserve their `3:4` aspect ratio and reflow column count.
- **Nav** collapses to a hamburger on mobile; the white bar and hairline divider persist.


## 11. Content & Voice

### Tone

**Calm, coastal, premium-athletic.** Vuori writes the way it designs: quietly. Copy is plain, benefit-forward, and unhurried — performance described in lifestyle terms (move, recover, breathe, go) rather than competitive ones (crush, dominate, beat). Sentence case throughout. No urgency, no hype, no exclamation points outside genuine seasonal moments.

### Microcopy patterns

- Primary CTA: **"Shop Now"** / **"Add to Bag"** / **"Shop Women's New"** / **"Find Your Fit"**
- Section headers: short noun phrases or gentle invitations ("New Arrivals", "The Daily Edit", "Made to Move")
- Subheaders: plain-language product benefits, fabric-and-feel led ("Buttery-soft, four-way stretch, built for everything from the studio to the street.")
- Errors: **"Something isn't right. Please try again."**
- Empty state: **"Your bag is empty."** / **"Nothing here yet."**
- Sale label: **"Sale"** or **"Last Chance"** — never "HURRY" or countdown urgency

### CTA verb conventions

- **Use:** Shop / Find / Discover / Explore / Add / Move / Go
- **Avoid:** ALL-CAPS shouting (uppercase is fine for *style* via tracking, but the words stay calm), urgency ("Limited time", "Don't miss out", "Only X left!"), and exclamation points in standard UI.


## 12. Dark Mode & Theming

**Light-only.** Pure white `#ffffff` IS the Vuori identity — it's the gallery wall the photography hangs on. The warm near-black `#333333` is used as fill (CTAs, footer, occasional inverse blocks) but never as a global theme. Inverting the system to a dark canvas would collapse the editorial-lookbook character and dim the coastal photography that carries the brand's warmth. There is no dark variant offered, and one would work against the brand's core premise.


## 13. Lineage & Influences

Vuori was founded in 2015 in Encinitas, California by Joe Kudla as a performance-apparel brand built around a **coastal-California lifestyle** ethos — surf, yoga, run, recover — rather than competitive-athletic aggression. The site identity reflects that positioning directly: a calm, premium-athletic register that reads closer to a lifestyle magazine or a quiet-luxury fashion house than to a sportswear catalog. The system is near-monochrome by design — warm near-black `#333333` on pure white `#ffffff`, set in **Aktiv Grotesk** at deliberately small, restrained sizes (28px H1, 14px/300 body).

All brand warmth is delegated to the **photography**, which carries a coastal earth palette: sand and sun-bleached driftwood, terracotta and warm clay, muted sage, shot in soft West-Coast light. Sharp **0px corners** on every surface let large product and lifestyle images read as full-bleed editorial plates rather than rounded UI tiles. The discipline — one typeface, one radius (zero), one ink, all color delegated to imagery — descends visibly from the **Swiss / International Typographic Style** and its modern retail inheritors. Where Nike SHOUTS and lululemon murmurs in compressed Saans, Vuori speaks softly in a neutral grotesque and lets the light do the persuading; the closest tonal neighbors are Aesop, Everlane, and the editorial side of Patagonia, not the saturated sportswear mainstream.

**Named influences:**
- **Aktiv Grotesk (Dalton Maag, 2010)** — the entire type system; a neutral grotesque set small and light.
- **Joe Kudla / Encinitas 2015 founding** — coastal-California performance-lifestyle positioning and the calm brand voice.
- **Aesop** — minimal monochrome-on-white, photography-led, sharp-cornered premium retail register.
- **Everlane** — restrained DTC apparel layout: small neutral type, generous white space, image-first cards.
- **Patagonia (editorial side)** — warm earth-tone outdoor photography carrying brand warmth over a quiet UI.
- **Swiss / International Typographic Style** — grid discipline, neutral grotesque, flat sharp-edged surfaces, restraint as the aesthetic.


## 14. Do's and Don'ts

### Do

- Use **`#ffffff`** for the page canvas — pure white, no tint.
- Use **`#333333`** (`rgb(51,51,51)`) for headings and primary CTA fills; use **`#212121`** for body copy.
- Set **everything in Aktiv Grotesk** — display and body, one typeface, four weights.
- Keep type **small and light**: 28px/400 H1, 14px/300 body. Restraint reads as premium here.
- Make **H2 section titles bold (700)** — it's the one strong typographic accent the system allows.
- Use **`0px` radius on every surface** — buttons, cards, images, inputs, badges, modals.
- Keep the UI **flat** — no card shadows, no button lifts. Depth comes from photography and white space.
- Let **large photography carry the warmth** — coastal earth tones (sand, terracotta, sage) live in the images.
- Use **two-tone flat CTAs**: `#333333`-fill / white primary and white-fill / `#333333` ghost; invert the ghost on hover.
- **Open the tracking** on labels, buttons, and eyebrows (`0.08–0.14em`) so small type breathes.
- Use **terracotta `#c08457`** sparingly on the surface — sale badges, accent buttons, editorial blocks only.
- Give sections **generous white space** instead of borders or background panels.

### Don't

- **Don't** use off-white or cream for the canvas — Vuori's ground is **pure** white `#ffffff`.
- **Don't** use pure black `#000000` for text — headings are `#333333`, body is `#212121`.
- **Don't** scale display type large — the H1 is 28px; large headlines break the brand's restraint.
- **Don't** add **any** `border-radius` above 0 — the zero-radius rule is absolute.
- **Don't** add card shadows, button drop-shadows, or focus glows — the system is flat.
- **Don't** let the UI carry color — saturate the *photography*, keep the *chrome* monochrome.
- **Don't** use neon or fire-engine semantic colors — status colors are desaturated earth tones.
- **Don't** use a second typeface or any serif — Aktiv Grotesk does everything.
- **Don't** write urgent or shouty copy — no "HURRY", no countdowns, no stacked exclamation points.
- **Don't** round product images or add card borders — the photo butts edge-to-edge, square.
- **Don't** overuse terracotta in the UI — it belongs to the imagery; surface it only as a rare accent.


## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas (bg):        #ffffff   (pure white — never tinted)
Heading ink:        #333333   (warm near-black, rgb(51,51,51))
Body ink:           #212121   (rgba(0,0,0,0.87) over white)
Brand:              #333333   (system color = warm near-black)
On-brand label:     #ffffff
Muted meta/price:   #666666
Border hairline:    #e0e0e0
Focus ring:         #333333
Accent terracotta:  #c08457   (sparing UI use; lives in imagery)
Accent sage:        #9aa78c
Accent sand:        #d8c3a5
```

### Example Component Prompts

> **Hero:** "Create a Vuori-style landing hero. Full-bleed coastal-California lifestyle photograph (soft warm light, sand/terracotta/sage tones) bleeding to the viewport edge. Over it, a small centered headline in Aktiv Grotesk — 28px, weight 400, sentence case, color `#333333` — with a single ghost CTA below it: white fill, `#333333` 1px border, `#333333` uppercase label tracked `0.08em`, `0px` radius, `14px 28px` padding, inverts to `#333333`-fill / white-label on hover. No rounded corners, no shadow."

> **Product card:** "Design a Vuori product card. The image IS the card — `3:4` aspect ratio, `0px` radius, no border, no shadow, warm-gray `#f0efed` placeholder while loading. Below the image, a tight 12px stack: product name in Aktiv Grotesk 14px/400 `#333333`, price in 14px/400 `#666666`. Cards butt against each other with 8–16px gutters like a lookbook spread."

> **Buttons:** "Generate the Vuori two-button set. Primary: `#333333` fill, white uppercase label tracked `0.08em`, `0px` radius, `14px 28px` padding, hover darkens to `#1a1a1a`. Ghost: white fill, `#333333` 1px border, `#333333` label, inverts to dark on hover. Both flat — no shadow, no transform."

> **Nav:** "Build a Vuori header. 64px white bar, single `#e0e0e0` hairline bottom border, no shadow on scroll. Nav links in Aktiv Grotesk 13px/500 uppercase tracked `0.06em` `#333333`, underline-on-hover with 6px offset. Logo centered or left, cart/account icons right."

> **Editorial section:** "Create a Vuori editorial block. Two-column: a large coastal photograph (terracotta/sage earth tones) on one side, on the other a bold 700-weight 21px Aktiv Grotesk H2 in `#333333`, a 14px/300 light body paragraph at `1.6` line-height, and a text-link CTA (`#333333`, underline, `4px` offset). Pure white background, generous white space, `0px` radius everywhere."

> **Form:** "Design a Vuori email-capture form. Square `0px` input, `#ffffff` fill, `#cccccc` 1px border that darkens to `#333333` on focus (no glow). Uppercase tracked `#333333` label above. Submit is the dark primary button. Keep it flat and minimal."

### Iteration Guide

1. **Check the canvas first.** If the background is anything but pure `#ffffff`, fix it. Off-white belongs to lululemon, not Vuori.
2. **Hunt for rounded corners.** Any `border-radius > 0` is wrong — buttons, cards, images, inputs all go to `0`. This is the fastest tell that output drifted off-brand.
3. **Shrink the type.** AI defaults to large headlines; pull the H1 back to 28px/400 and body to 14px/300. Restraint is the look.
4. **Kill the shadows.** Remove any card shadow, button lift, or focus glow. The only allowed shadow is the modal overlay.
5. **Move color into the photography.** If the UI has colored panels or buttons everywhere, strip them to monochrome and push the warmth (sand/terracotta/sage) into the *images* instead.
6. **Make the H2 bold.** Section titles jump to weight 700, 21px — it's the one strong typographic accent. If everything is the same weight, the page reads flat in the wrong way.
7. **Open the small-type tracking.** Labels, buttons, eyebrows want `0.08–0.14em` letter-spacing or they feel cramped.
8. **Calm the copy.** Swap any urgency or exclamation points for plain, benefit-forward, sentence-case lines. Vuori never shouts.

This produces Vuori directly. The two structural rules to never violate: **pure white canvas with monochrome warm-black UI, and the zero-radius rule (everything is `0`).** Everything else is texture on top of those — and the texture lives in the photography, not the chrome.

---

*Theme-toggle audit: score=0, signals=[none]*
