---
name: lululemon
tagline: Quiet-luxury athleisure — Saans variable on bone-off-white, off-black ink (`#140f0f`, not pure black), pill CTAs on square product cards, mixed-case sentence-cased headlines tracked −4px. The athletic brand that murmurs.
updated_at: 2026-05-09T00:00:00.000Z
published_at: 2026-05-09T00:00:00.000Z
author: webdesignhot
source_url: https://shop.lululemon.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [fashion, marketplace]
tags: [light, warm, sans, structured, spacious, editorial]
preview_swatch: ['#fafafa', '#140f0f', '#c8102e']
related: [patagonia, nike, rare-beauty]
description: 'lululemon''s site is what happens when an athletic brand decides it would rather look like Aritzia or COS than Nike. The canvas is bone-off-white `#fafafa` (faintly cool, not pure white), body ink is **off-black** `#140f0f` (`rgb(20,15,15)` — *not* pure black, ever), display type is **Saans** (Display Type Foundry) at unusual variable-font weight stops (`380`, `570`, `670`), and headlines get aggressive negative tracking (`-4px` on a 64px H1). The brand color is **lululemon Red** `#c8102e` — the exact red of the omega-A "yogo" symbol — paired with a brighter coral `#de212f` (internal token name *"Hot Heat"*) for marketing surfaces. Where Nike chose ALL-CAPS-AGGRESSIVE and Patagonia chose cream-and-Futura-cooperative, lululemon chose **mixed-case-confident-Vancouver-yoga-studio**. Voice is breath/movement-metaphors at sentence case ("Breathes easy.", "Stretch the possibilities", "Shoulder the load.") — punchy but never yelling. The signature contrast: **square-cornered product cards** (`0px` radius, photograph carries identity) paired with **fully pill-shaped CTAs** (`999px` radius, off-black fill, warm-white label) — hardware is hard-edged, voice is soft. Buried in the tokens: `#f4ff8e` acid-lemon as the canonical primary-CTA text color on hero/marketing surfaces — their secret-handshake accent that no other DTC brand uses.'


# Canonical 8-role aliases (per google-labs-code/design.md PR #76).
# Maps role names to this entry's actual token names so role-aware
# downstream tools resolve `theme.background` → entry's `bg`, etc.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-lemonade
  muted: text-muted
  border: border
  ring: focus-ring

colors:
  # Page grounds — bone, not white
  bg: '#fafafa'                  # faintly cool off-white canvas
  bg-warm-bone: '#efeeec'        # warm bone-gray secondary surface — used everywhere
  bg-soft: '#f9f9f8'             # subdued surface (hover states)
  bg-disabled: '#f4f3f2'
  bg-image-placeholder: '#e5e6e7'  # cool gray product-tile loading state
  # Surfaces & inverse
  surface: '#ffffff'             # cards, inputs lift to white above the bone canvas
  surface-soft: '#f9f9f8'
  surface-inverse: '#140f0f'     # "off-black" — the actual lululemon black
  on-surface-inverse: '#fdfdf6'  # warm bone-white text on dark surfaces
  # Brand — the wordmark red + the brighter "Hot Heat" coral
  brand: '#c8102e'                # the omega-A red — `--zest-color-text-accent`
  brand-hover: '#a50d25'
  brand-pressed: '#840a1d'
  brand-deep: '#5a0710'
  brand-tint: '#fae5e7'           # error/danger surface wash
  on-brand: '#ffffff'
  hot-heat: '#de212f'             # brighter coral — email-capture lockup, marketing CTAs
  hot-heat-hover: '#c81a26'
  # Acid-lemon — the secret CTA text color
  accent-lemonade: '#f4ff8e'      # canonical primary-CTA label color on hero/marketing surfaces
  # Zest secondary palette — named accents for marketing/category surfaces
  accent-zest: '#f3fed7'          # pale celery green
  accent-daydream: '#c0ddff'      # pale sky blue
  accent-wilderness: '#142a0e'    # deep forest
  accent-mossy: '#524a43'         # warm taupe
  accent-espresso: '#2b1f1e'      # near-black brown
  accent-sequoia: '#73273d'       # deep berry
  accent-rosewood: '#dc6d85'      # dusty pink
  # Text — off-black, never pure black
  text: '#140f0f'                 # `rgb(20,15,15)` — body copy, headlines
  text-strong: '#140f0f'
  text-muted: '#757575'           # subdued meta
  text-soft: '#53565a'             # legacy subdued
  text-faint: '#919191'            # disabled
  text-highlighted: '#c8c8c8'
  text-on-brand: '#ffffff'
  text-on-cta: '#fdfdf6'           # warm-white CTA label (default)
  text-on-cta-marketing: '#f4ff8e' # acid-lemon CTA label (marketing/hero surfaces)
  link: '#c8102e'
  link-hover: '#a50d25'
  # Borders
  border: '#d6d6d6'                # subdued (zest)
  border-strong: '#140f0f'         # hairline around outlined CTAs
  border-default: '#757575'
  border-soft: '#d3d5d7'           # legacy subdued
  border-brand: '#c8102e'
  focus-ring: '#005fcc'
  # Semantic
  success: '#0f752f'
  success-bg: '#e7f1ea'
  warning: '#b15115'
  warning-bg: '#f8efe8'
  danger: '#d20014'
  danger-bg: '#fae5e7'
  info: '#2966b0'
  info-bg: '#eaf0f7'

typography:
  display:
    family: '"Saans", "Helvetica Neue", "Helvetica", "Roboto", -apple-system, sans-serif'
    weights: [380, 570, 670]
  body:
    family: '"Saans", "Helvetica Neue", "Helvetica", "Roboto", -apple-system, sans-serif'
    weights: [380, 400, 500, 600]
  serif:
    family: '"KH Giga", Georgia, Cambria, "Times New Roman", serif'
    weights: [400]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, monospace'
    weights: [400]
  scale:
    display-hero:    { size: 100, weight: 380, lineHeight: 1.10, tracking: '-0.04em',  family: display }
    display-xl:      { size: 72,  weight: 380, lineHeight: 1.10, tracking: '-0.035em', family: display }
    display-lg:      { size: 64,  weight: 380, lineHeight: 1.10, tracking: '-0.0625em', family: display }
    h1:              { size: 64,  weight: 380, lineHeight: 1.10, tracking: '-0.0625em', family: display }
    h2:              { size: 56,  weight: 380, lineHeight: 1.10, tracking: '-0.03em',  family: display }
    h3:              { size: 40,  weight: 380, lineHeight: 1.20, tracking: '-0.02em',  family: display }
    h4:              { size: 28,  weight: 380, lineHeight: 1.30, tracking: '-0.01em',  family: display }
    eyebrow:         { size: 12,  weight: 600, lineHeight: 1.40, tracking: '0.10em',   family: body }
    body-lg:         { size: 18,  weight: 400, lineHeight: 1.40, tracking: '+0.0125em', family: body }
    body:            { size: 17,  weight: 400, lineHeight: 1.40, tracking: '0',         family: body }
    body-sm:         { size: 14,  weight: 400, lineHeight: 1.40, tracking: '0',         family: body }
    button:          { size: 16,  weight: 500, lineHeight: 1.0,  tracking: '0',         family: body }
    label:           { size: 14,  weight: 500, lineHeight: 1.30, tracking: '0',         family: body }
    caption:         { size: 12,  weight: 600, lineHeight: 1.40, tracking: '0',         family: body }
    pull-quote:      { size: 32,  weight: 400, lineHeight: 1.30, tracking: '-0.01em',   family: serif }

radius:
  none: 0
  micro: 2          # zest-radius-25
  sm: 5             # zest-radius-50
  md: 8             # zest-radius-100
  input: 4
  xl: 32            # zest-radius-400
  pill: 999         # zest-radius-1000

spacing:
  base: 4
  scale: [0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 128, 160, 256]

layout:
  page-width: 1440
  legacy-page-width: 1322  # `--lll-grid-width-maximum` — old PDP/checkout
  prose-width: 720
  header-height: 80
  grid-columns: 12
  gutter-mobile: 8
  gutter-desktop: 20

motion:
  ease-standard: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  duration-extra-fast: 125
  duration-fast: 250
  duration-medium: 500
  duration-slow: 1000
  duration-extra-slow: 2000
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 992
  wide: 1440

shadows:
  card: 'none'
  card-hover: 'none'
  modal: '0 24px 64px rgba(20, 15, 15, 0.20)'

accessibility:
  contrast-text-on-bg: 17.4    # #140f0f on #fafafa
  contrast-text-on-brand: 6.4  # #ffffff on #c8102e
  contrast-text-on-cta: 17.4   # #fdfdf6 on #140f0f
  focus-ring: '2px solid #005fcc + 2px outset gap'
  reduced-motion-honored: true

components:
  button-primary: { bg: surface-inverse, text: text-on-cta, padding: '0 24px', height: 48, radius: pill, font: button, hover-bg: brand-hover-cta }
  button-primary-marketing: { bg: surface-inverse, text: text-on-cta-marketing, padding: '0 24px', height: 56, radius: pill, font: button }
  button-secondary: { bg: bg-warm-bone, text: text, padding: '0 24px', height: 48, radius: pill, font: button, hover-bg: '#e5e5e5' }
  button-outline: { bg: surface, text: text, padding: '0 24px', height: 48, radius: pill, border: '1px solid border-strong' }
  shop-this-look-chip: { bg: 'rgba(239, 238, 236, 0.8)', text: text, padding: '10px 12px', radius: pill, font: 'caption' }
  card-product: { bg: surface, radius: 0, padding: '20px 12px 0', border: 'none' }
  card-tile-image: { bg: bg-image-placeholder, radius: 0 }
  pill: { bg: bg-warm-bone, text: text, radius: pill, padding: '6px 12px', font: 'caption' }
  swatch: { radius: '50%', size: 24 }
  input: { bg: surface, border: '1px solid border-default', text: text, radius: input, padding: '14px 16px', focus-border: focus-ring }
  yogo-symbol: { fill: brand, size: 32, shape: 'circular omega-A' }

lineage:
  summary: 'lululemon was founded in Vancouver in 1998 by Chip Wilson as a yoga-pant boutique. The current site identity descends from a 2024–2025 rebrand led by an internal team building on Pentagram''s manifesto work — establishing **Saans** (Display Type Foundry) as the new display + body typeface across marketing, refining the legacy "Calibre" + bone-and-red palette. Where Nike chose ALL-CAPS-AGGRESSIVE and Patagonia chose cream-and-Futura-cooperative, lululemon chose **mixed-case-confident-Vancouver-yoga-studio** — closer in tone to Aritzia, COS, or Everlane than to Adidas or Under Armour. The system''s defining structural choice is the **two-radius rule**: square product cards (hardware-is-hard-edged) on top of pill CTAs (voice-is-soft). Two design systems coexist on the live site — `--lll-*` (legacy Calibre) on PDP/checkout, `--zest-*` (Saans rebrand) on marketing/category surfaces — visible in the wild as a controlled migration. The `#f4ff8e` acid-lemon CTA-text color on hero surfaces is a quiet brand signature buried in tokens.'
  influences:
    - { name: 'Chip Wilson / Vancouver 1998 founding', role: 'yoga-studio Vancouver heritage and direct address voice', url: 'https://www.lululemon.com/story' }
    - { name: 'Saans (Display Type Foundry, 2022)', role: 'contemporary geometric grotesque — handles every refreshed surface', url: 'https://www.displaay.net/typeface/saans/' }
    - { name: 'Calibre (Klim Type Foundry, 2011)', role: 'legacy display + body face still active on PDP/checkout', url: 'https://klim.co.nz/retail-fonts/calibre/' }
    - { name: 'Pentagram lululemon work (Practice + Manifesto, 2010s)', role: 'identity foundation — Calibre weights, omega-A yogo refinement, manifesto typography', url: 'https://www.pentagram.com/work/lululemon-practice/story' }
    - { name: 'KH Giga (editorial serif)', role: 'pull-quote-only typeface — branded escape hatch for editorial pages', url: 'https://klim.co.nz/' }
    - { name: 'Aritzia / COS / Everlane', role: 'quiet-luxury contemporaries — tonal targets above athletic peers', url: 'https://www.aritzia.com' }
---


## 1. Visual Theme & Atmosphere

lululemon's site is what happens when an athletic brand decides it would rather look like Aritzia or COS than Nike. The canvas is **bone-off-white** `#fafafa` (faintly cool, not pure white), body ink is **off-black** `#140f0f` (`rgb(20, 15, 15)` — not pure black, ever), and display copy is set in **Saans** (Display Type Foundry, 2022) at unusual variable-font weight stops — `380` (between light and regular), `570` (medium), and `670` (semibold). The default body weight is `380`, which gives copy a slightly delicate, less newspaper-y feel.

Headlines get **aggressive negative tracking**: a 64px H1 is set with `-4px` (`-0.0625em`) letter-spacing — the kind of compression you'd see on a fashion-magazine spread, not a sportswear catalog. The signature copy move is **mixed-case sentence-cased declarations** ("Breathes easy.", "Holds up in the heat.", "Stretch the possibilities", "Shoulder the load.") — punchy but never yelling. Where Nike SHOUTS IN BOLD CAPS and Under Armour goes ALL-CAPS-AGGRESSIVE, lululemon murmurs in compressed Saans.

The brand color is **lululemon Red** `#c8102e` (`rgb(200, 16, 46)`) — the exact red of the omega-A "yogo" symbol — paired with a brighter coral `#de212f` (internal token name *"Hot Heat"*) on email-capture lockups and marketing surfaces. The structural contrast is deliberate: **square-cornered product cards** (`0px` radius, photograph carries identity) paired with **fully pill-shaped CTAs** (`999px` radius, off-black fill, warm-white label). Hardware is hard-edged; voice is soft.

Buried in the tokens: `#f4ff8e` **acid-lemon** as the canonical primary-CTA text color on hero and marketing surfaces. It's their secret-handshake accent — no other DTC brand uses it. Most CTAs render with `#fdfdf6` warm-white labels; the acid-lemon variant surfaces only on hero/landing CTAs as a quiet brand signature.

**Key Characteristics:**
- Bone-off-white canvas `#fafafa` (not pure white)
- Off-black ink `#140f0f` (`rgb(20, 15, 15)` — never pure black)
- **Saans** variable-font display + body, weight stops `380` / `570` / `670`
- 64px headlines with `-4px` letter-tracking — compressed editorial
- Mixed-case sentence-case throughout (not ALL-CAPS)
- Brand red `#c8102e` (omega-A wordmark red) + bright coral `#de212f` ("Hot Heat")
- Acid-lemon `#f4ff8e` as the marketing-CTA text color (secret signature)
- **Square product cards** (`0px` radius) + **pill CTAs** (`999px` radius) — the two-radius rule
- Warm bone-gray `#efeeec` as the dominant secondary surface
- Image-cycling product tiles (4–5 photos at 250ms each on hover)
- "Zest" secondary palette: Lemonade, Daydream, Wilderness, Sequoia, Rosewood
- KH Giga serif reserved for pull-quotes only — branded escape hatch
- Two design systems coexisting (`--lll-*` legacy Calibre + `--zest-*` Saans rebrand)


## 2. Color Palette & Roles

### Primary
- **Background** `#fafafa`: faintly cool off-white canvas. Not pure white.
- **Bg Warm Bone** `#efeeec`: warm bone-gray — the most-used non-white surface (secondary buttons, panel backgrounds).
- **Bg Soft** `#f9f9f8`: subdued surface for hover states.
- **Surface** `#ffffff`: cards and inputs lift to white above the bone canvas.
- **Surface Inverse** `#140f0f`: off-black blocks (CTA fills, dark-mode sections, footer).

### Brand — Wordmark Red + Hot Heat Coral
- **Brand** `#c8102e`: the omega-A red. Token name `--zest-color-text-accent`. Used on links, accent text, focus borders.
- **Brand Hover** `#a50d25`, **Pressed** `#840a1d`, **Deep** `#5a0710`.
- **Hot Heat** `#de212f`: the brighter coral. Email-capture lockup background, marketing CTA fills.
- **On-Brand** `#ffffff`.
- **Brand Tint** `#fae5e7`: error/danger surface wash.

### The Acid-Lemon — Secret Signature
- **Accent Lemonade** `#f4ff8e`: canonical primary-CTA text color on hero/marketing surfaces. Token name `--zest-color-interactive-filled-color-default`. Buried in the system; surfaces only when intentional.

### "Zest" Secondary Palette
Named accents for marketing and category landings — softer and more residential than any sport brand:
- **Zest** `#f3fed7` — pale celery
- **Daydream** `#c0ddff` — pale sky
- **Wilderness** `#142a0e` — deep forest
- **Mossy** `#524a43` — warm taupe
- **Espresso** `#2b1f1e` — near-black brown
- **Sequoia** `#73273d` — deep berry
- **Rosewood** `#dc6d85` — dusty pink

Daydream and Rosewood in particular feel borrowed from interior design / home goods — a deliberate departure from the saturated neon-and-fluorescent palette athletic peers default to.

### Text
- **Text** `#140f0f`: body, headlines. Off-black, `rgb(20, 15, 15)`. **Never** pure black.
- **Text Muted** `#757575`: subdued meta.
- **Text Soft** `#53565a`: legacy subdued (Calibre surfaces).
- **Text Faint** `#919191`: disabled.
- **Text On CTA** `#fdfdf6`: warm-white default CTA label.
- **Text On CTA Marketing** `#f4ff8e`: acid-lemon CTA label (hero/marketing only).

### Borders
- **Border** `#d6d6d6`: subdued zest border.
- **Border Strong** `#140f0f`: hairline around outlined CTAs.
- **Border Default** `#757575`.
- **Border Soft** `#d3d5d7`: legacy subdued.
- **Border Brand** `#c8102e`.
- **Focus Ring** `#005fcc`.


## 3. Typography Rules

### Font Family

**Saans** (Display Type Foundry) is the rebrand display + body typeface — a contemporary geometric grotesque, slightly humanist, lower-contrast than Helvetica. It's a **variable font** with custom axis stops at `380`, `570`, and `670` — non-standard weights that signal "designed system, not stock font." The default body weight is `380`, sitting between light and regular.

**Calibre** (Klim Type Foundry, 2011) is the legacy display face, still active on PDP forms, h3 product titles, and checkout flows. The site is mid-migration: marketing surfaces use Saans, transactional surfaces still use Calibre.

**KH Giga** is the editorial serif — reserved exclusively for `--zest-type-heading-quote` (pull-quotes on manifesto/story pages). Anywhere else on the site, serif is wrong.

```
display: "Saans", "Helvetica Neue", "Helvetica", "Roboto", -apple-system, sans-serif
body:    "Saans", "Helvetica Neue", "Helvetica", "Roboto", -apple-system, sans-serif
serif:   "KH Giga", Georgia, Cambria, "Times New Roman", serif    (pull-quotes only)
mono:    ui-monospace, SFMono-Regular, Menlo, monospace            (rare, code samples only)
```

No mono in the live system; included as a fallback for technical content if it ever appears.

### Hierarchy

| Token | Size | Weight | Tracking | LH | Use |
|-------|------|--------|----------|-----|-----|
| `display-hero` | 100 | 380 | -0.04em | 1.10 | brand-statement marketing pages |
| `display-xl` | 72 | 380 | -0.035em | 1.10 | category landings |
| `display-lg` / `h1` | 64 | 380 | **-0.0625em** | 1.10 | hero headlines |
| `h2` | 56 | 380 | -0.03em | 1.10 | section titles |
| `h3` | 40 | 380 | -0.02em | 1.20 | sub-section |
| `h4` | 28 | 380 | -0.01em | 1.30 | product card titles |
| `eyebrow` | 12 | 600 | +0.10em | 1.40 | UPPERCASE micro-labels (rare — mostly utility) |
| `body-lg` | 18 | 400 | +0.0125em | 1.40 | editorial body |
| `body` | 17 | 400 | 0 | 1.40 | default body |
| `body-sm` | 14 | 400 | 0 | 1.40 | meta, captions |
| `button` | 16 | 500 | 0 | 1.0 | CTA labels |
| `pull-quote` | 32 | 400 | -0.01em | 1.30 | KH Giga serif — manifesto pages only |

### The Tracking Curve

Letter-spacing tightens as size grows. On a 64px headline that's `-4px` (-0.0625em); on the 100px hero it's effectively `-4px` again (-0.04em). Body extra-large goes the *opposite* direction — `+0.0125em` slight loosening. This is what gives lululemon copy its compressed-editorial feel: tight headlines, breathing-easy body.

### Mixed Case, Always

Every heading on the site is sentence-cased except for a single legacy `Close` button and "SKIP NAVIGATION." The wordmark itself is lowercase **lululemon**. ALL-CAPS-AGGRESSIVE is the wrong register here — when in doubt, sentence case.


## 4. Component Stylings

### CTAs — The Two-Radius Rule

```
.cta-primary {
  background: #140f0f;          /* off-black, not pure */
  color: #fdfdf6;                /* warm-white default */
  height: 48px;
  padding: 0 24px;
  border-radius: 999px;          /* fully pill */
  font: 500 16px/1 Saans;
  text-transform: none;          /* sentence case */
  transition: background 250ms;
}
.cta-primary:hover { background: #433f3f; }

.cta-primary--marketing {
  height: 56px;
  color: #f4ff8e;                /* acid-lemon — hero/marketing only */
}

.cta-secondary {
  background: #efeeec;           /* warm bone-gray */
  color: #140f0f;
  height: 48px;
  padding: 0 24px;
  border-radius: 999px;
  font: 500 16px/1 Saans;
}
.cta-secondary:hover { background: #e5e5e5; }
```

CTAs are **always pills**. The system never uses sharp-edged buttons for primary actions. Padding is `0 24px` with a `48px` height (`56px` on marketing/hero) — taller than most competitors, generous tap target.

### Product Cards — Square, No Chrome

```
.product-card {
  background: transparent;
  border: none;
  border-radius: 0;              /* square — never rounded */
  padding: 20px 12px 0;
}
.product-card__image {
  background: #e5e6e7;           /* cool gray placeholder while loading */
  border-radius: 0;
  aspect-ratio: 3 / 4;
}
.product-card__image:hover {
  /* image cycles through 4–5 photos at 250ms each */
}
.product-card__name { font: 400 17px Saans; margin-top: 12px; }
.product-card__price { font: 400 14px Saans; color: #757575; }
```

Hardware-is-hard-edged: the photograph carries identity, the system gets out of the way. No card border, no shadow, no rounded corners on the image. Image-cycling on hover (4–5 product shots cycling at ~250ms each) is the long-running lululemon UX move competitors have copied for years.

### "Shop This Look" Floating Chip

```
.shop-this-look {
  position: absolute;
  background: rgba(239, 238, 236, 0.8);   /* semi-transparent bone */
  color: #140f0f;
  padding: 10px 12px;
  border-radius: 999px;
  font: 600 12px/1.4 Saans;
  backdrop-filter: blur(8px);
}
```

Appears on lifestyle photography over models — tap to see every garment they're wearing.

### Color Swatches & Pills

- Color swatches on product cards: `border-radius: 50%` (circular).
- Form inputs: `border-radius: 4px` — the only place small rounded corners appear.
- Pills (filter chips, sale flags): `border-radius: 999px`, `padding: 6px 12px`, 12px Saans 600.

### Yogo Symbol

The circular omega-A wordmark anchor — fills with `#c8102e` brand red on white, or white on `#de212f` Hot Heat coral. Appears in the email-capture modal lockup, footer, and quietly in cart/order confirmations.


## 5. Layout Principles

- Base 4px, working rhythm 8px. Scale: `2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 80, 96, 128, 160, 256` px.
- Page max-width: **1440px** (zest); legacy PDP/checkout still uses 1322px (`--lll-grid-width-maximum`).
- Header height: 80px.
- 12-column grid. Mobile gutter 8px, desktop gutter 20px.
- Hero copy padding: `96px 40px 48px` — generous vertical breathing room.
- Card padding: `20px 12px 0` on product details (top-padding only — image bleeds to edge).
- Editorial articles: 720px prose column.
- Site renders near-full-bleed (~1455px on a 1470px viewport) — sections extend to viewport edges, copy is centered within.


## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|------|-------|-------|-----|
| **None** | `radius-0` | 0 | **product cards, image surfaces, hero blocks** |
| Micro | `radius-25` | 2 | filter chips border |
| Small | `radius-50` | 5 | rare |
| Medium | `radius-100` | 8 | rare |
| Input | `radius-input` | 4 | form fields |
| XL | `radius-400` | 32 | promotional cards (rare) |
| **Pill** | `radius-1000` | 999 | **all CTAs, "Shop This Look" chip, filter pills** |

### The Two-Radius Rule

The system effectively only uses `0` and `999`. Square cards, pill buttons. Mid-range radii (4–32) appear only on inputs and rare promotional surfaces. **If you find yourself reaching for `border-radius: 12px`, you're probably outside the system.**


## 7. Depth & Elevation

Largely flat. Cards have no shadow at any state. Photography contrast and white-on-bone spacing create depth.

| Level | Treatment |
|-------|-----------|
| 0 | flat — default for cards, buttons, inputs |
| 4 | `0 24px 64px rgba(20, 15, 15, 0.20)` — modal overlay only |

Note the modal shadow uses the off-black `#140f0f` at 20% opacity — even shadows are warm.


## 8. Interaction & Motion

- Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` standard.
- Durations: extra-fast 125ms, fast 250ms, medium 500ms, slow 1000ms, extra-slow 2000ms.
- **Image-cycling product tiles** on hover — 4–5 photos at ~250ms each. The signature interaction.
- CTA hover: background tone shift only (`#140f0f` → `#433f3f` on primary; `#efeeec` → `#e5e5e5` on secondary). No transform, no shadow lift.
- Scroll-revealed editorial blocks: fade-in at 500ms with slight Y translation.
- `prefers-reduced-motion: reduce` honored — image cycling pauses, fade-ins instant.


## 9. Accessibility & A11y

- text on bg: `#140f0f` on `#fafafa` = **17.4:1** AAA.
- CTA label on primary: `#fdfdf6` on `#140f0f` = **17.4:1** AAA.
- Acid-lemon on primary: `#f4ff8e` on `#140f0f` = **15.1:1** AAA.
- on-brand on brand: `#ffffff` on `#c8102e` = **6.4:1** AA.
- Focus ring: `2px solid #005fcc + 2px outset gap` — distinct blue from brand red so focus-vs-active is unambiguous.
- 44×44px minimum touch targets (CTAs are 48–56px tall by default).
- Reduced-motion honored. Image-cycle disables; fade-ins go instant.


## 10. Responsive Behavior

- Mobile (<480): nav collapses to hamburger, product grid 1-up, hero copy 64→32px, CTAs full-width.
- Tablet (480–768): 2-up product grid, nav still collapsed, hero 64→48px.
- Desktop (768–992): 3-up product grid, inline nav.
- Wide (992–1440): 4-up product grid, full editorial sections.
- Ultra-wide (1440+): content centers within the 1440px max; backgrounds extend to viewport edges.

Touch targets stay ≥ 48px tall across breakpoints.


## 11. Content & Voice

### Tone

**Confident-Vancouver-yoga-studio.** Sentence case, casual, slightly playful, breath/movement metaphors throughout. Verb-forward, second-person, body-aware. Often a single short declarative followed by a period — punchy but not yelling.

### Microcopy patterns

- Primary CTA: **"Shop now"** / **"Add to bag"** / **"Find a store"**
- Section headers: questions ("What's new?", "New to lululemon?") rather than commands
- Subheaders: plain-language product benefits ("The new License To Train Textured Jacket airs you out with two-way ventilation.")
- Errors: **"Something went wrong. Try again."**
- Empty state: **"Your bag is empty."**
- Sale label: **"We Made Too Much"** — honest-language version of "clearance"

### Headline patterns (live samples)

- *"Breathes easy."*
- *"Holds up in the heat."*
- *"Stretch the possibilities"*
- *"Stretch your limits."*
- *"Shoulder the load."*
- *"Get a move on most-loved styles."*
- *"Unrestrict your training."*
- *"What's new? So glad you asked."*

Pattern: short declarative or invitation, sentence case, often verb-forward, ends with a period (or no punctuation if rhetorical). Never a question mark followed by an exclamation.

### CTA verb conventions

- Use: **Shop / Find / Discover / Add / Save / Stretch / Train / Move**
- Avoid: ALL-CAPS verbs, urgency ("Limited time", "Don't miss"), exclamation points outside seasonal/sale contexts


## 12. Dark Mode & Theming

**Light-only on web.** Bone canvas IS the brand identity. The off-black `#140f0f` surface is used for inverse blocks (CTA fills, hero overlays, footer) but not as a global theme. Inverting the system would lose the bone-and-warm character that distinguishes lululemon from athletic peers.


## 13. Lineage & Influences

lululemon was founded in Vancouver in 1998 by Chip Wilson as a yoga-pant boutique. The current site identity descends from a 2024–2025 rebrand led by an internal design team building on Pentagram's foundational work — establishing **Saans** (Display Type Foundry) as the new display + body typeface across marketing, refining the legacy Calibre + bone-and-red palette.

Where Nike chose ALL-CAPS-AGGRESSIVE and Patagonia chose cream-and-Futura-cooperative, lululemon chose **mixed-case-confident-Vancouver-yoga-studio** — closer in tone to Aritzia, COS, or Everlane than to Adidas or Under Armour. The system's defining structural choice is the **two-radius rule**: square product cards (hardware-is-hard-edged) on top of pill CTAs (voice-is-soft).

Two design systems coexist on the live site. `--lll-*` (legacy Calibre, original bone-and-red palette) still ships on PDP, checkout, and forms. `--zest-*` (Saans rebrand, expanded "Zest" secondary palette) ships on marketing surfaces, category landings, and hero blocks. The migration is visibly mid-flight — a controlled hand-over, not a flag-day swap.

The `#f4ff8e` acid-lemon CTA-text color on hero surfaces is a quiet brand signature buried in tokens — appears intentionally on big marketing CTAs, never on transactional ones. No other DTC athletic brand uses anything like it.

**Named influences:**
- **Chip Wilson / Vancouver 1998 founding** — yoga-studio Vancouver heritage and direct-address voice.
- **Saans (Display Type Foundry, 2022)** — variable-font geometric grotesque, custom weight stops `380/570/670`.
- **Calibre (Klim Type Foundry, 2011)** — legacy display face still active on transactional surfaces.
- **Pentagram lululemon work (Practice + Manifesto, 2010s)** — identity foundation, omega-A yogo refinement, manifesto typography.
- **KH Giga editorial serif** — pull-quote-only typeface; branded escape hatch.
- **Aritzia / COS / Everlane** — quiet-luxury contemporaries; tonal targets above athletic peers.


## 14. Do's and Don'ts

### Do

- Use **`#140f0f`** for body text and CTA fills — `rgb(20, 15, 15)`, never `#000`.
- Use **`#fafafa`** for the page canvas — bone-cool off-white, never pure white.
- Set every heading in **Saans** at weight `380` for display, `570`/`670` for emphasis. Hold the line on non-standard weight stops.
- Apply **`-4px` (`-0.0625em`) letter-tracking** on 64px headlines. Tighten as size grows.
- Use **mixed-case sentence case** for every heading. The wordmark is lowercase.
- Use **pill CTAs** (`border-radius: 999px`) at `48px` height (default) or `56px` (hero/marketing).
- Use **square product cards** (`border-radius: 0`). Image carries identity.
- Use **`#c8102e`** for the omega-A red and accent text. Use **`#de212f`** ("Hot Heat") for marketing surface fills.
- Use **`#f4ff8e`** acid-lemon as CTA label color on hero/marketing CTAs only.
- Reach for the **"Zest" secondary palette** (Lemonade, Daydream, Wilderness, Sequoia, Rosewood) on category landings — softer than typical athletic accents.
- Use **`KH Giga` serif** for pull-quotes only — branded escape hatch.

### Don't

- **Don't** use pure black `#000`. The text color is `#140f0f`.
- **Don't** use pure white `#fff` as a page background. The canvas is `#fafafa`.
- **Don't** ALL-CAPS headlines. Mixed-case sentence case is the register.
- **Don't** use sharp-edged rectangles for CTAs. They are pills, always.
- **Don't** add `border-radius: 12px` (or any mid-range radius) outside form inputs. The system uses `0` and `999`; mid-range looks foreign.
- **Don't** add card shadows or rounded image corners. Square + flat is the rule.
- **Don't** use `KH Giga` serif outside pull-quotes. Anywhere else, serif is wrong.
- **Don't** use exclamation points or urgency language in CTAs.
- **Don't** use saturated neon-and-fluorescent palettes. Reach for "Zest" instead — Daydream, Rosewood, Wilderness.
- **Don't** confuse the two reds: `#c8102e` is the wordmark/accent red; `#de212f` is the brighter Hot Heat marketing fill.


## 15. Agent Prompt Guide

When prompting an LLM to generate or modify a lululemon-style surface:

> "Generate a lululemon-2026-style landing page hero. Bone-off-white canvas `#fafafa` (NOT pure white). Body and headline ink `#140f0f` (off-black, `rgb(20,15,15)`, NOT pure black). Set the headline in Saans Variable at weight `380`, 64px, sentence case, with `-4px` letter-tracking (`-0.0625em`). Headline copy should be a single short declarative ending in a period — verb-forward, breath/movement metaphor, never ALL-CAPS, never an exclamation point. Examples: 'Breathes easy.', 'Stretch the possibilities', 'Holds up in the heat.' Below the headline, place a fully pill-shaped CTA — `border-radius: 999px`, `0 24px` padding, `56px` height (hero size), `#140f0f` background. CTA label is `#f4ff8e` acid-lemon for hero/marketing surfaces (this is the secret signature) or `#fdfdf6` warm-white for default surfaces. Beneath the hero, product cards with `border-radius: 0` (square, never rounded), no border, no shadow — the photograph is the chrome. Color swatches on product cards are circular (`border-radius: 50%`). Use **`#c8102e`** for the omega-A wordmark and accent text; use **`#de212f`** Hot Heat coral for marketing-surface fills. If you need a softer secondary accent, reach for the Zest palette — Daydream `#c0ddff`, Rosewood `#dc6d85`, Wilderness `#142a0e`, Sequoia `#73273d` — never neon. Voice: confident Vancouver yoga studio — sentence case, no exclamations outside sale contexts, verbs like 'Shop', 'Find', 'Stretch', 'Move'. The two-radius rule is non-negotiable: 0 for hardware (cards, images), 999 for voice (CTAs, chips, pills)."

This produces 2026-lululemon directly. The two structural rules to never violate: **off-black not black, and the two-radius rule (0 + 999, nothing in between)**. Everything else is texture on top of those.
