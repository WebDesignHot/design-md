---
name: Dyson
tagline: Engineering-greyscale on white — Dyson Futura Light at 44px (weight `300`, never bold), body ink `#333` not pure black, zero-radius CTAs with a fluid-dynamics ripple hover, and a single magenta accent reserved for haircare. The web brand of an engineering company that refuses to look like a marketing site.
updated_at: 2026-05-09T00:00:00.000Z
published_at: 2026-05-09T00:00:00.000Z
author: webdesignhot
source_url: https://www.dyson.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [marketplace, hardware]
tags: [light, cool, sans, structured, dense, engineering]
preview_swatch: ['#ffffff', '#333333', '#c4398d']
related: [apple, bose, patagonia]
description: 'Dyson''s site is what a vacuum-cleaner-and-haircare engineering company looks like when it refuses to look like a marketing site. The canvas is white `#ffffff`, body ink and primary CTA fill are both **`#333`** (warm dark grey, never pure black), display copy is set in **Dyson Futura** — their proprietary geometric sans, served with eight locale-specific variants (`DysonFutura-Light`, `DysonThai`, `DysonArabic`, `DysonHebrew`, `DysonHant`, `Dyson CHT`, etc.) — at weight `300` (Light) for every heading. Big-but-unbold typography is the signature engineering-product move (Tesla, Bang & Olufsen, Leica) — confident-precision rather than marketing-shout. Stat numbers shift to a second typeface — **FoundryGridnik** at 56–72px tracking-tight — so the engineering claims read as measured, not yelled. CTAs have **zero border-radius** (industrial), with an unusual **water-ripple hover** (`::before` circle scales 12× at 500ms) — fluid-dynamics imagery as UI motion, a quiet nod to airflow. The hero pattern is **product-on-seam**: a `linear-gradient(180deg, #f2f2f2 30%, #fff 33%)` 3-pixel seam under floated 33%-width product imagery, creating a faux-shelf shadow line. The brand operates almost entirely in greyscale — out of 158 most-used colors, 8 of the top 10 are greys/whites/blacks. The single saturated accent `#c4398d` magenta is reserved for the Supersonic/Airwrap **haircare** line. Where Apple chose minimalist-white-aspirational and Bose chose warm-luxury-showroom, Dyson chose **engineering-precision-greyscale**.'


# Canonical 8-role aliases (per google-labs-code/design.md PR #76).
# Maps role names to this entry's actual token names so role-aware
# downstream tools resolve `theme.background` → entry's `bg`, etc.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-magenta
  muted: text-muted
  border: border
  ring: focus-ring

colors:
  # Page grounds — white, with a 11-step grey scale
  bg: '#ffffff'                  # pure white canvas
  bg-near-white: '#fdfdfd'       # off-white (clr-dy-grey-07)
  bg-callout: '#fbfbfb'          # near-white callout BG (clr-dy-grey-05)
  bg-lightest: '#f3f3f3'          # lightest surface (clr-dy-grey-0)
  bg-subtle: '#f0f0f0'            # subtle fill (clr-dy-grey-1)
  bg-light: '#ebebeb'             # most-used light surface (clr-dy-grey-2 — 158 occurrences)
  bg-product-seam: '#f2f2f2'      # the product-on-seam hero gradient base
  # Surfaces & containers
  surface: '#ffffff'
  surface-soft: '#fbfbfb'
  surface-callout: '#fbfbfb'
  # Brand — `#333` is the actual brand black on web
  brand: '#333333'                # body text + primary CTA fill (clr-dy-grey-7) — the most common brand color
  brand-hover: '#292929'          # CTA hover state
  brand-pressed: '#1a1a1a'
  brand-deep: '#000000'           # `.hero--dark { background: #000 }` — premium reveals only
  on-brand: '#ffffff'
  text-on-brand: '#ffffff'
  # The single saturated accent — magenta, haircare-only
  accent-magenta: '#c4398d'       # Supersonic/Airwrap "Ceramic pink" line — used in `.pink h3`
  accent-gold: '#8a6e00'          # gift/premium accent (clr-dy-gold-1)
  accent-yellow: '#ffcc01'        # warning, star ratings (clr-dy-yellow-0)
  # Functional reds — NOT brand
  danger: '#da2f47'               # form validation only (clr-dy-red-0)
  danger-tint: 'rgba(218, 47, 71, 0.1)'
  # Links — blue, distinct from brand
  link: '#0066cc'                 # clr-dy-blue-1
  link-hover: '#006fdd'           # clr-dy-blue-2
  focus-ring: '#66afe9'            # clr-dy-blue-0 — form focus
  # Success
  success: '#79b928'               # in-stock indicator (clr-dy-green-0)
  success-hover: '#69a239'
  # Text — `#333` not black, with a precise grey scale
  text: '#333333'                  # clr-dy-grey-7 — body, headlines
  text-strong: '#2e2e2e'
  text-muted: '#666666'             # clr-dy-grey-6 — secondary
  text-soft: '#999999'              # clr-dy-grey-5 — tertiary
  text-faint: '#b2b3b4'             # clr-dy-grey-4 — disabled/divider
  # Borders
  border: '#dcdcdc'                 # card hairline
  border-strong: '#b2b3b4'           # clr-dy-grey-4 — emphasis
  border-soft: '#d5d5d5'             # clr-dy-grey-3 — callout border
  border-brand: '#333333'

typography:
  display:
    family: '"Dyson Futura", "Dyson Futura Regular", "Helvetica Neue", "Helvetica", Arial, sans-serif'
    weights: [300, 400, 500, 700]
  body:
    family: '"Dyson Futura", "Dyson Futura Regular", "Helvetica Neue", "Helvetica", Arial, sans-serif'
    weights: [300, 400, 500]
  serif:
    family: 'Georgia, "Times New Roman", serif'
    weights: [400]
  mono:
    family: '"FoundryGridnik", Menlo, Monaco, Consolas, "Courier New", monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 56, weight: 300, lineHeight: 1.10, tracking: '-0.01em', family: display }
    display-xl:      { size: 48, weight: 300, lineHeight: 1.10, tracking: '-0.01em', family: display }
    display-lg:      { size: 44, weight: 300, lineHeight: 1.18, tracking: '-0.01em', family: display }
    h1:              { size: 44, weight: 300, lineHeight: 1.18, tracking: '-0.01em', family: display }
    h2:              { size: 36, weight: 300, lineHeight: 1.22, tracking: '-0.01em', family: display }
    h3:              { size: 32, weight: 300, lineHeight: 1.25, tracking: '-0.01em', family: display }
    h4:              { size: 28, weight: 300, lineHeight: 1.29, tracking: '-0.01em', family: display }
    h5:              { size: 24, weight: 400, lineHeight: 1.33, tracking: '0',       family: display }
    h6:              { size: 18, weight: 500, lineHeight: 1.55, tracking: '0',       family: display }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',       family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',       family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    body-xs:         { size: 13, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    legal:           { size: 11, weight: 400, lineHeight: 1.45, tracking: '0',       family: body }
    button:          { size: 16, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body }
    stat-value:      { size: 72, weight: 500, lineHeight: 1.10, tracking: '-0.05em', family: mono }
    stat-value-sm:   { size: 56, weight: 500, lineHeight: 1.10, tracking: '-0.05em', family: mono }

radius:
  none: 0          # default for buttons, hero blocks, hard surfaces
  card-top: 4      # 4px top-only on product cards (4px 4px 0 0)
  pill: 9999       # rare — used on a few utility chips

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1270    # canonical container — appears 8× at exactly this value
  inner-width: 1024   # inner content for text sections
  prose-width: 640    # narrow text columns
  page-gutter-desktop: 50
  page-gutter-mobile: 15
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  duration-fast: 200
  duration-standard: 300
  duration-slow: 500
  duration-ripple: 500            # the signature button hover ripple
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1024
  wide: 1270

shadows:
  card: 'none'
  card-hover: 'none'
  modal: '0 24px 64px rgba(0, 0, 0, 0.20)'

accessibility:
  contrast-text-on-bg: 12.6     # #333 on #ffffff
  contrast-text-on-brand: 12.6  # #ffffff on #333
  contrast-text-on-magenta: 4.8 # #ffffff on #c4398d
  focus-ring: '2px solid #66afe9 + 2px outset gap'
  reduced-motion-honored: true

components:
  button-primary: { bg: brand, text: on-brand, padding: '16px 12px', radius: 0, border: 0, font: button, hover-bg: brand-hover, ripple: true }
  button-secondary: { bg: surface, text: brand, padding: '16px 12px', radius: 0, border: '1px solid border-strong' }
  button-ghost: { bg: transparent, text: brand, padding: '14px 10px' }
  card-product: { bg: surface, radius: '4px 4px 0 0', padding: '12px 16px', border: '1px solid #dcdcdc' }
  callout: { bg: bg-callout, border: '1px solid #d5d5d5', padding: '25px 20px 30px', radius: 0, has-tail: true }
  hero-gradient: { background: 'linear-gradient(180deg, #f6f8f9 0, #e5ebee 35%, #d7dee3 45%, #c8ccd1 62%, #f7fbff 77%, #f5f7f9)' }
  hero-product-seam: { background: 'linear-gradient(180deg, #f2f2f2 30%, #ffffff 33%)' }
  hero-dark: { bg: brand-deep, text: on-brand }
  spec-block: { title-size: 32, padding-top: 64 }
  stat: { value-font: mono, value-size: 72, label-font: body, label-size: 14 }
  input: { bg: surface, border: '1px solid border-soft', text: text, radius: 0, padding: '14px 16px', focus-border: focus-ring }
  pink-section: { accent: accent-magenta, scope: 'haircare line only' }

lineage:
  summary: 'Dyson was founded by James Dyson in 1991 in Malmesbury, UK, on the back of the bagless cyclone vacuum. The current web identity descends from a long-evolved Magento Commerce platform with a heavily customized `Dyson/commerce` theme — a 2017-era Sass-token system that pre-dates wide CSS-custom-property adoption, with tokens baked into class names (`.clr-dy-grey-7-text`) rather than `--var`. The system is **engineering-precision-greyscale**: out of 158 most-used colors in the live CSS, 8 of the top 10 are greys/whites/blacks. The brand owns its typography deeply — **Dyson Futura** ships with eight locale-specific variants (DysonThai, DysonArabic, DysonHebrew, DysonHant, etc.) — a level of typographic investment few brands match. Headings are big-but-unbold (weight `300` Light) — confident-precision rather than marketing-shout — and stat numbers shift to **FoundryGridnik** for engineering-spec credibility. The single saturated accent `#c4398d` magenta is reserved for the haircare line (Supersonic, Airwrap). The "Dyson Red" the public associates with the wordmark exists in product photography and physical housings, but the digital UI is grey-on-white. Where Apple chose minimalist-white-aspirational and Bose chose warm-luxury-showroom, Dyson chose engineering-precision — light-weight Futura at 44px, `#333` not black, zero-radius industrial CTAs with a water-ripple hover that quietly nods to fluid dynamics.'
  influences:
    - { name: 'James Dyson / Malmesbury 1991 founding', role: 'engineer-founder anti-marketing identity', url: 'https://www.dyson.com/inside-dyson/james-dyson' }
    - { name: 'Dyson Futura (proprietary)', role: 'eight-locale custom geometric sans — display + body monolith', url: 'https://www.dyson.com' }
    - { name: 'FoundryGridnik (Foundry Types)', role: 'stat-block monospace — squared-aperture engineering-spec face', url: 'https://www.foundrytypes.co.uk/typefaces/foundry-gridnik/' }
    - { name: 'Bauhaus / Dieter Rams (Braun)', role: 'industrial-design lineage — function-led, anti-ornamental', url: 'https://www.vitsoe.com/us/about/dieter-rams' }
    - { name: 'Apple / Bang & Olufsen / Leica', role: 'engineering-product peers — big-but-unbold typography lineage', url: 'https://www.apple.com' }
    - { name: 'Magento Commerce 2', role: 'platform substrate — Bootstrap-derived patterns aggressively flattened', url: 'https://magento.com' }
---


## 1. Visual Theme & Atmosphere

Dyson's site is what a vacuum-cleaner-and-haircare engineering company looks like when it refuses to look like a marketing site. The canvas is white `#ffffff`, body ink and primary CTA fill are both **`#333`** (warm dark grey, never pure black), and display copy is set in **Dyson Futura** — their proprietary geometric sans — at weight `300` (Light) for every heading. Big-but-unbold typography is the signature engineering-product move (Tesla, Bang & Olufsen, Leica) — confident-precision rather than marketing-shout.

The depth of the typographic investment is unusual. **Dyson Futura ships with eight locale-specific variants** — `DysonFutura-Light`, `DysonThai`, `DysonArabic`, `DysonHebrew`, `DysonHant`, `Dyson CHT`, plus regular Latin Light/Book/Medium/Heavy weights. The brand owns this typeface across every script it sells in. Few brands at any size match this commitment.

Stat numbers shift to a **second typeface — FoundryGridnik** (Foundry Types) at 56–72px with `-0.05em` tracking. The mode-shift is the engineering-credibility move: motor RPM, AW suction, decibels rendered in a squared-aperture geometric sans that reads as measured, not yelled. The two-face system (Futura Light for prose, FoundryGridnik for stats) is the structural typographic move.

CTAs have **zero border-radius** (industrial, sharp-edged), with an unusual **water-ripple hover**: a `::before` pseudo-element 50% circle scales 12× at 500ms. Fluid-dynamics imagery applied to UI motion — a quiet nod to the airflow technology Dyson products are built around. The hero pattern is **product-on-seam**: a `linear-gradient(180deg, #f2f2f2 30%, #fff 33%)` 3-pixel seam under floated 33%-width product imagery, creating a faux-shelf shadow line — the canonical "product hovering on a studio shelf" template.

The brand operates almost entirely in **greyscale**. Out of 158 most-used colors in the live CSS, 8 of the top 10 are greys/whites/blacks. The single saturated accent `#c4398d` (magenta) is reserved for the **haircare line** (Supersonic, Airwrap). The "Dyson Red" the public associates with the wordmark exists in product photography and physical product housings, but the digital UI is grey-on-white-with-magenta-accent. Where Apple chose minimalist-white-aspirational and Bose chose warm-luxury-showroom, Dyson chose **engineering-precision-greyscale**.

**Key Characteristics:**
- White canvas `#ffffff`
- Body ink and primary CTA fill both **`#333`** (never pure black)
- **Dyson Futura** display + body — weight `300` (Light) on every heading
- Eight locale-specific Futura variants (Latin / Thai / Arabic / Hebrew / Hant / CHT / etc.)
- **FoundryGridnik** stat-block face — 56–72px tracking-tight numerics for engineering claims
- Zero border-radius on CTAs — industrial, sharp-edged
- Water-ripple hover (`::before` 50% circle scales 12× at 500ms) — fluid-dynamics-as-UI
- Product-on-seam hero gradient (`#f2f2f2 30% → #fff 33%`)
- Cool-steel hero gradient for premium reveals (`#f6f8f9 → #c8ccd1 → #f7fbff`)
- Greyscale-dominant: 8 of top 10 colors are greys
- Single magenta accent `#c4398d` reserved for haircare
- Trademark-led copy: HushJet™, Coanda, Chitosan™, Hyperdymium™, Solarcycle
- Speech-bubble callouts with CSS-triangle tails — engineering-review-notes aesthetic
- 1270px container max-width, 50px page gutter desktop


## 2. Color Palette & Roles

### Primary Greys — `clr-dy-grey-{0..7}` Scale

| Token | Hex | Use |
|-------|-----|-----|
| `clr-dy-grey-7` | `#333` | **Body text + primary CTA fill** (the brand black) |
| `clr-dy-grey-6` | `#666` | Secondary text |
| `clr-dy-grey-5` | `#999` | Tertiary / muted text |
| `clr-dy-grey-4` | `#b2b3b4` | Disabled / dividers |
| `clr-dy-grey-3` | `#d5d5d5` | Callout borders |
| `clr-dy-grey-2` | `#ebebeb` | **Most-used light surface** (158 occurrences) |
| `clr-dy-grey-1` | `#f0f0f0` | Subtle fills |
| `clr-dy-grey-0` | `#f3f3f3` | Lightest surface |
| `clr-dy-grey-05` | `#fbfbfb` | Near-white callout BG |
| `clr-dy-grey-07` | `#fdfdfd` | Off-white |

### Brand — `#333` Is The Actual Black

- **Brand** `#333`: body text + primary CTA fill. The most-used color in the system (474 occurrences). This is Dyson's "black."
- **Brand Hover** `#292929`: CTA hover state.
- **Brand Pressed** `#1a1a1a`.
- **Brand Deep** `#000`: `.hero--dark { background: #000 }` — reserved for premium product reveals (haircare hero blocks, Supersonic launches).
- **On-Brand** `#ffffff`.

### The Single Saturated Accent — Magenta For Haircare

- **Accent Magenta** `#c4398d`: Supersonic / Airwrap "Ceramic pink" color story. Used in `.pink h3` selector and haircare-line headers. **Not** a global brand accent — scope is haircare only.
- **Accent Gold** `#8a6e00`: gift / premium accent (`clr-dy-gold-1`).
- **Accent Yellow** `#ffcc01`: warning + star ratings (`clr-dy-yellow-0`).

### Functional — Not Brand

- **Danger** `#da2f47` (`clr-dy-red-0`): form validation only. **Not** Dyson's brand red — this is a UI-error red. The "Dyson red" lives in product housings and packaging, not the web system.
- **Danger Tint** `rgba(218, 47, 71, 0.1)`: error-state surface wash.
- **Link** `#0066cc` (`clr-dy-blue-1`), **Link Hover** `#006fdd`.
- **Focus Ring** `#66afe9` (`clr-dy-blue-0`) — distinct blue from anything else.
- **Success** `#79b928` (`clr-dy-green-0`): in-stock / available indicator.

### Hero Gradients — Cool Steel + Product Seam

- **Hero Gradient (cool-steel)** `linear-gradient(180deg, #f6f8f9 0, #e5ebee 35%, #d7dee3 45%, #c8ccd1 62%, #f7fbff 77%, #f5f7f9)` — reads as "studio lighting on an aluminum surface."
- **Hero Product Seam** `linear-gradient(180deg, #f2f2f2 30%, #fff 33%)` — sharp horizontal seam at 30–33% under floated 33%-width product imagery. The canonical Dyson PDP hero.
- **Hero Dark** `#000` — premium reveals only.


## 3. Typography Rules

### Font Family — Dyson Futura, Eight Locales

```
display: "Dyson Futura", "Dyson Futura Regular", "Helvetica Neue", "Helvetica", Arial, sans-serif
body:    "Dyson Futura", "Dyson Futura Regular", "Helvetica Neue", "Helvetica", Arial, sans-serif
serif:   Georgia, "Times New Roman", serif      (rare — fallback only)
mono:    "FoundryGridnik", Menlo, Monaco, Consolas, "Courier New", monospace
```

**Dyson Futura** is the proprietary display + body face. The locale variants are:

- `DysonFutura-Light.woff2` (300 — default for headings)
- `DysonFutura-Book.woff2` (400 — default body)
- `DysonFutura-Medium.woff2` (500 — buttons, h6)
- `DysonFutura-Heavy.woff2` (700 — rare emphasis)
- `DysonThai`, `DysonArabic`, `DysonHebrew`, `DysonHant`, `Dyson CHT` — multilingual coverage

**FoundryGridnik** (Foundry Types) is the secondary face — used **only** on stat values. Squared apertures, geometric, reads as engineering-spec. Sizes 56px and 72px with `-0.05em` letter-spacing.

### Hierarchy — Light-Weight At Every Heading Size

| Token | Size (D) | Weight | Tracking | Use |
|-------|---------|--------|----------|-----|
| `display-hero` | 56 | **300** | -0.01em | brand-statement marketing |
| `display-xl` | 48 | **300** | -0.01em | category landings |
| `h1` | **44** | **300** | -0.01em | product hero, page H1 |
| `h2` | 36 | **300** | -0.01em | section titles |
| `h3` | 32 | **300** | -0.01em | sub-section titles |
| `h4` | 28 | **300** | -0.01em | spec-set titles |
| `h5` | 24 | 400 | 0 | minor headings (weight bumps to 400 here) |
| `h6` | 18 | 500 | 0 | smallest heading (weight bumps to 500) |
| `body` | 16 | 400 | 0 | default body |
| `body-sm` | 14 | 400 | 0 | meta, spec lists |
| `legal` | 11 | 400 | 0 | disclaimer text |
| `button` | 16 | 500 | 0 | CTA labels |
| `stat-value` | **72** | 500 | **-0.05em** | **FoundryGridnik** big stats |
| `stat-value-sm` | 56 | 500 | -0.05em | FoundryGridnik smaller stats |

### Light-Weight Headings — The Signature

Every heading from `h1` (44px) up through `display-hero` (56px) ships at `font-weight: 300` (Light). Big-but-unbold. This single decision is the source of Dyson's "engineering-precision-not-shouty" feel. Combined with `letter-spacing: -0.01em` slight tightening and `color: #333` (not black), large display copy reads as confident-measured rather than marketing-aggressive. Tesla, Bang & Olufsen, and Leica use the same lineage.

### Stat-Block Mode-Shift

When numbers matter — motor RPM (`110,000`), AW suction (`230AW`), decibels (`67dB`) — the typeface shifts to **FoundryGridnik** at 72px Medium with `-0.05em` tracking. This is the engineering-credibility move. The mode-shift signals "this is a measurement, not a claim." Most retail brands set stats in their display face with a weight bump; Dyson treats stats as a different visual register entirely.


## 4. Component Stylings

### CTAs — Zero Radius, Ripple Hover

```
.button {
  background: #333;
  color: #fff;
  padding: 16px 12px;
  border: 0;
  border-radius: 0;          /* zero — industrial, sharp-edged */
  font: 500 16px/1 "Dyson Futura";
  letter-spacing: 0;
  position: relative;
  overflow: hidden;
}
.button:hover { background: #292929; }

/* The signature ripple */
.button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  transition: all 500ms ease-out;
  transform: translate(-50%, -50%);
}
.button:hover::before {
  width: 1200%;             /* scales 12× */
  height: 1200%;
}
```

The ripple is the signature interaction. A 50% circle hidden at center, scaled 12× at 500ms on hover. Reads as a fluid-dynamics expansion — a quiet nod to airflow technology applied to UI motion. No other major brand does this.

### Cards — 4px Top-Only Radius

```
.card {
  background: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 4px 4px 0 0;   /* rounded only at top */
  padding: 12px 16px;
}
```

Subtle but specific: cards round at the top, square at the bottom. Implies a flat-bottom card with a CTA strip beneath. The button gets the harder edge; the card gets the softer top — a deliberate inversion of the usual hierarchy.

### Callouts — Engineering-Review-Notes Speech Bubbles

```
.callout {
  background: #fbfbfb;
  border: 1px solid #d5d5d5;
  padding: 25px 20px 30px;
  position: relative;
}
.callout::after {
  content: '';
  position: absolute;
  bottom: -32px;
  left: 32px;
  border: 32px solid transparent;
  border-top-color: #fbfbfb;
  border-bottom: 0;
  border-left: 0;
}
.callout::before {
  /* paired triangle — provides the border outline */
  bottom: -33px;
  border-top-color: #d5d5d5;
}
```

Pure-CSS triangle tails. Reads as engineering-blueprint-meets-comic-bubble. Used for annotations, pull-quotes, technology callouts. Never skeuomorphic dotted-line schematics — just a low-key "review notes" register.

### Hero — Product On Seam

```
.hero--product-variant--perfect {
  background: linear-gradient(180deg, #f2f2f2 30%, #fff 33%);
  display: flex;
  align-items: center;
}
.hero__product-image {
  width: 33%;
  margin-left: auto;        /* floats right */
}
```

The 3-pixel seam at 30–33% creates a faux-shelf shadow line under the product. The product floats at 33% width on the right. This is the canonical Dyson PDP hero — every product-detail page uses this template.

### Stat Block

```
.stat__value {
  font-family: FoundryGridnik, courier, sans-serif;
  font-weight: 500;
  font-size: 72px;
  line-height: 1.1;
  letter-spacing: -0.05em;
  color: #333;
}
.stat__label {
  font: 400 14px "Dyson Futura";
  color: #666;
}
```

72px FoundryGridnik tracking-tight number, 14px Dyson Futura label below. Mode-shift between two faces is the structural move.


## 5. Layout Principles

- Base 4px, 8px working rhythm.
- Page max-width: **1270px** (the canonical container — appears 8 times at this exact value in production CSS).
- Inner content width: 1024px (text-only sections).
- Narrow prose width: 640px (legal, support documentation).
- Page gutter: 50px desktop, 15–20px mobile.
- Header height: 64px.
- Spec sets: 64px top-padding between blocks (generous whitespace).
- Hero gradients run full-bleed; content sits centered within 1270px.


## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| **None** | 0 | **default everywhere** — buttons, hero blocks, hard surfaces |
| **Card top-only** | `4px 4px 0 0` | product cards (rounded only at top edge) |
| Pill | 9999 | rare — utility chips |

Dyson's radius vocabulary is intentionally narrow. The system says "industrial, sharp-edged, occasionally softened at top corners on cards." If you're reaching for a radius outside `0`, `4px 4px 0 0`, or `9999`, you're outside the system. The Bootstrap defaults that come with Magento are aggressively overridden with `border-radius: 0!important` patterns.


## 7. Depth & Elevation

Effectively flat. Cards and buttons have no shadow at any state. Depth is created via:

- **Hero gradients** — cool-steel `linear-gradient` simulates studio lighting on aluminum.
- **Product seam** — the `#f2f2f2 → #fff` 3px seam creates a shelf-shadow line under floating product imagery.
- **Pure-CSS triangle tails** on callouts — depth via geometry, not shadow.

| Level | Treatment |
|-------|-----------|
| 0 | flat — default for cards, buttons, inputs, hero blocks |
| 4 | `0 24px 64px rgba(0, 0, 0, 0.20)` — modal overlay only |


## 8. Interaction & Motion

- Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` standard.
- Durations: 200ms fast, 300ms standard, 500ms slow.
- **Button ripple**: `::before` 50% circle scales 12× at 500ms. The signature interaction.
- Image cycles on hover: subtle, no transform — image swap only.
- Callout tails: static pure-CSS triangles, no animation.
- `prefers-reduced-motion: reduce` honored — ripple disables, transitions go instant.


## 9. Accessibility & A11y

- text on bg: `#333` on `#ffffff` = **12.6:1** AAA.
- on-brand on brand: `#ffffff` on `#333` = **12.6:1** AAA.
- magenta on white: `#c4398d` on `#ffffff` = **4.8:1** AA (haircare scope only — passes large-text AA).
- Focus ring: `2px solid #66afe9 + 2px outset gap` — distinct blue from any other system color so focus state is unambiguous.
- 44×44px minimum touch targets (CTAs are 16px font + 16px+12px padding ≈ 50px tall).
- Reduced-motion honored. Ripple disables; image swaps go instant.


## 10. Responsive Behavior

- Mobile (<480): page gutter 15px, hero copy 56→32px, stat values 72→48px, single-column stack.
- Tablet (480–768): page gutter 20px, hero 56→44px.
- Desktop (1024+): full 1270px container, 50px gutter, multi-column spec layouts.
- Wide (1270+): content centers; gradients extend to viewport edges.

The system's typographic scale shrinks proportionally on mobile but never lets weight bump above `300` for heading 1–4 — the light-weight identity holds across breakpoints.


## 11. Content & Voice

### Tone

**Technical-claim-led.** Names the technology by trademark, then states what it does in plain consumer terms. "Engineered" appears repeatedly. Almost never aspirational/lifestyle copy.

### Microcopy patterns

- Primary CTA: **"Add to bag"** / **"Buy now"** / **"Find a stockist"**
- Secondary: **"Learn more"** / **"View specifications"**
- Errors: form-level, plain ("Please enter a valid email address.")
- Sale/clearance: rare. Dyson rarely runs storefront-wide sale UI — promotions are line-specific.

### Headline patterns (live samples)

- *"The only connected multi-styler to intelligently adapt heat, airflow and timings to your hair type."*
- *"Style with Coanda airflow, not extreme heat"*
- *"Unique HushJet™ air projection"*
- *"Engineered for longer hair."*
- *"Dyson-engineered bristles for improved scalp comfort and less snagging."*
- *"Try it risk free for 45 days"*

Pattern: technology trademark + functional claim + "engineered" framing. Often a long subordinate clause with technical specifics. Voice never goes lifestyle; it stays in the engineering register.

### Trademark-led naming

- **HushJet™** — air projection technology
- **Coanda** — airflow attachment principle
- **Chitosan™** — hair-styling polymer
- **Hyperdymium™** — motor technology
- **Solarcycle** — lighting technology
- **Airwrap i.d.™** — connected styler

The trademark glyph (™ or ®) is consistent and visible in headlines — itself a small Dyson-ism that signals "this is our patented technology, not generic terminology."

### CTA verb conventions

- Use: **Buy / Find / View / Learn / Compare / Engineered**
- Avoid: lifestyle verbs ("Discover yourself", "Live better"), urgency ("Last chance", "Don't miss")


## 12. Dark Mode & Theming

**Light-only globally.** White canvas IS the brand. The `#000` background appears only in `.hero--dark` blocks for premium product reveals (haircare line, Supersonic launches). There is no global dark-mode storefront — inverting the system would lose the engineering-on-white character. The greyscale palette already provides the visual depth that dark-mode would supplant.


## 13. Lineage & Influences

Dyson was founded by James Dyson in 1991 in Malmesbury, UK, on the back of the bagless cyclone vacuum. The current web identity descends from a long-evolved Magento Commerce platform with a heavily customized `Dyson/commerce` theme — a 2017-era Sass-token system that pre-dates wide CSS-custom-property adoption, with tokens baked into class names (`.clr-dy-grey-7-text`) rather than `--var`.

The system is **engineering-precision-greyscale**: 8 of the top 10 colors are greys/whites/blacks. The brand owns its typography deeply — Dyson Futura ships with eight locale-specific variants, a level of typographic investment few brands match. Headings are big-but-unbold (weight `300` Light) — confident-precision rather than marketing-shout — and stat numbers shift to FoundryGridnik for engineering-spec credibility.

The single saturated accent `#c4398d` magenta is reserved for the haircare line (Supersonic, Airwrap). The "Dyson Red" the public associates with the wordmark exists in product photography and physical housings, but the digital UI is grey-on-white. Where Apple chose minimalist-white-aspirational and Bose chose warm-luxury-showroom, Dyson chose engineering-precision — light-weight Futura at 44px, `#333` not black, zero-radius industrial CTAs with a water-ripple hover that quietly nods to fluid dynamics.

**Named influences:**
- **James Dyson / 1991 Malmesbury founding** — engineer-founder anti-marketing identity. The "we don't do flowery copy" voice descends from JD's own writing.
- **Dyson Futura (proprietary)** — eight-locale custom geometric sans. Latin / Thai / Arabic / Hebrew / Hant / CHT / etc. The brand's typographic depth is unusual.
- **FoundryGridnik (Foundry Types)** — squared-aperture geometric sans for stat blocks. The mode-shift face.
- **Bauhaus / Dieter Rams (Braun)** — industrial-design lineage. Function-led, anti-ornamental. Visible in the zero-radius button + light-weight typography choices.
- **Apple / Bang & Olufsen / Leica** — engineering-product peers. Big-but-unbold typography lineage shared.
- **Magento Commerce 2** — platform substrate. Bootstrap-derived patterns aggressively flattened and de-rounded.


## 14. Do's and Don'ts

### Do

- Use **`#333`** for body text and CTA fills — never pure `#000`. This is Dyson's "black."
- Use **`#ffffff`** as the page canvas. White is core to the engineering-on-white identity.
- Set every heading from h4 (28px) up to display-hero (56px) at **weight `300` (Light)**. Light-at-large-size is the signature.
- Apply **`-0.01em` letter-tracking** on all heading sizes 28px+ for the slight-tightening engineering register.
- Use **Dyson Futura** for everything except stat values. For stat values, mode-shift to **FoundryGridnik** at 56–72px with `-0.05em` tracking.
- Set CTAs at **`border-radius: 0`** with `padding: 16px 12px`. Zero radius is non-negotiable — industrial register.
- Implement the **water-ripple hover** on primary CTAs (`::before` 50% circle scaling 12× at 500ms).
- Use **`linear-gradient(180deg, #f2f2f2 30%, #fff 33%)`** for product-on-seam PDP heroes.
- Use the **cool-steel hero gradient** (`#f6f8f9 → #c8ccd1 → #f7fbff`) for premium reveals.
- Reserve **`#c4398d`** magenta for the haircare line only.
- Lead copy with **trademark-named technology** (HushJet™, Coanda, Hyperdymium™, Chitosan™), then explain in plain terms.

### Don't

- **Don't** use pure black `#000` for text. The body color is `#333`.
- **Don't** use bold weights on headings 28px+. The system holds at weight `300` Light from h4 up.
- **Don't** add border-radius to buttons. They are sharp-edged industrial rectangles, always.
- **Don't** use saturated red as a brand color in the digital UI. The only red is `#da2f47` for form validation. The "Dyson red" lives in product housings, not the web system.
- **Don't** use `#c4398d` magenta outside the haircare line. Supersonic / Airwrap scope only.
- **Don't** add card shadows. Depth comes from gradients and seams, not shadow.
- **Don't** use lifestyle/aspirational verbs ("Discover", "Live better"). Stay in the engineering register.
- **Don't** set stat values in Dyson Futura. Mode-shift to FoundryGridnik — the typeface change is the credibility signal.
- **Don't** skip the water-ripple hover on primary CTAs. It's the signature interaction.


## 15. Agent Prompt Guide

When prompting an LLM to generate or modify a Dyson-style surface:

> "Generate a Dyson-style product hero page. White canvas `#ffffff`. Body and headline ink `#333` (Dyson's actual black — never pure `#000`). Set the page H1 in Dyson Futura at `font-weight: 300` (Light), 44px, with `-0.01em` letter-tracking — never bold. Headline copy should lead with a trademark-named technology and then state its function plainly: e.g., 'Style with Coanda airflow, not extreme heat' or 'Unique HushJet™ air projection.' Avoid lifestyle/aspirational language. Below the headline, place a primary CTA — `background: #333`, `color: #fff`, `padding: 16px 12px`, `border-radius: 0` (zero — industrial), `font: 500 16px Dyson Futura`. Add a water-ripple hover effect: a `::before` pseudo-element with `border-radius: 50%`, `background: rgba(255,255,255,0.1)`, scaling 12× at 500ms ease-out on hover. For the hero photography backdrop, use a `linear-gradient(180deg, #f2f2f2 30%, #fff 33%)` — the 3-pixel seam at 30–33% is the canonical Dyson product-shelf shadow line — and float the product image at 33% width to the right. If the page includes engineering specs (motor RPM, suction, decibels), shift the typeface for stat values to **FoundryGridnik** at 72px / weight 500 / `-0.05em` tracking. The mode-shift is the engineering-credibility signal. Cards have `border: 1px solid #dcdcdc` and `border-radius: 4px 4px 0 0` (rounded only at top). For accents, the system is greyscale-dominant — only use `#c4398d` magenta if the page is specifically about haircare (Supersonic, Airwrap). Voice: technical-claim-led. Lead with trademarked technology names, then plain functional explanation. Avoid 'discover', 'live better', urgency. Use 'engineered' liberally."

This produces 2026-Dyson directly. The structural rules to never violate: **`#333` not `#000`, weight `300` not bold on big headings, zero-radius industrial CTAs, mode-shift to FoundryGridnik for stats**. Magenta is haircare-only. Red is form-validation-only. Light-weight + greyscale + trademark-named-tech is the system.
