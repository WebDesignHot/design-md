---
name: Caraway
tagline: 'Wholesome non-toxic-cookware DTC — Suisse Works serif on warm off-white, deep teal-green pill CTAs, pastel colorway palette.'
updated_at: 2026-05-29T21:45:35.043Z
published_at: 2026-05-29T21:45:35.043Z
author: webdesignhot
source_url: https://www.carawayhome.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [retail]
tags: [light, warm, soft, serif, commerce]
preview_swatch: ['#fcfcf9', '#1f3438', '#e9b949']
related: []
description: 'Caraway''s storefront is a warm, design-forward home-goods system built on a serif/sans pairing — a Suisse Works serif display set against Moderat body copy — colored deep teal-black `#1f3438` on an off-white `#fcfcf9` canvas. The hero headline is a 48px / weight-700 Suisse Works serif, calm and editorial, with the signature CTA directly beneath: a full-pill (`40px` radius) button in deep teal-green `#1f3438` with white text reading "Shop Savings →". The chrome is intentionally soft and wholesome — rounded pills, generous whitespace, no hard sell — while the real color story comes from Caraway''s pastel cookware colorways (Cream, Sage, Navy, Terracotta, Marigold) shown through the product photography, not painted onto the UI. Body copy is 16px Moderat at a comfortable line-height. The register is the modern wellness-DTC voice: trustworthy, warm, and quietly premium — a kitchen brand that reads like a lifestyle magazine rather than a cookware catalog. Where most cookware sites lean industrial or promotional, Caraway holds a single deep-teal pill over a beautiful pastel pan and lets the colorway do the talking.'


# Canonical 8-role aliases (bg / text / brand / border / accent / muted / surface / danger).
# Maps role names to this entry's actual token names so role-aware
# downstream tools resolve `theme.background` → entry's `bg`, etc.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-marigold
  muted: text-muted
  border: border
  ring: brand

colors:
  # Page grounds
  bg: '#fcfcf9'                  # warm off-white canvas — the dominant surface (live-probed)
  bg-soft: '#f7f7f4'             # faint warm panel / alternating section (live-probed from secondary CTA)
  bg-deeper: '#f0efe9'           # secondary warm surface for nested modules
  hero-plate: '#1f3438'          # deep teal-green ground for inverted / full-bleed sections
  # Surfaces
  surface: '#ffffff'             # cards sit on pure white above the off-white canvas
  surface-soft: '#f7f7f4'        # quiet card / module background
  # Brand — Caraway's signature deep teal-green (= text + CTA)
  brand: '#1f3438'               # deep teal-green — text, CTA fill, and brand identity color (live-probed)
  brand-soft: '#33524f'          # lifted teal for hover / secondary emphasis
  on-brand: '#ffffff'            # white label on the deep-teal pill (live-probed)
  # Pastel cookware colorways — color delivered through the product, not the chrome
  colorway-cream: '#f3ead9'      # Cream — the warm off-white pan colorway
  colorway-sage: '#b9c4ad'       # Sage — muted green colorway
  colorway-navy: '#2b3a52'       # Navy — deep blue colorway
  colorway-terracotta: '#c97b58' # Terracotta — warm clay colorway
  colorway-marigold: '#e9b949'   # Marigold — warm golden-yellow colorway (the brightest accent)
  # CTA — deep-teal full-pill (live-probed)
  cta-bg: '#1f3438'              # deep teal-green "Shop Savings →" pill fill
  cta-text: '#ffffff'            # white label on the pill
  cta-bg-hover: '#33524f'        # lifts to softer teal on hover
  on-cta-hover: '#ffffff'        # white label stays on hover
  cta-secondary-bg: '#f7f7f4'    # faint warm fill of the secondary chip (live-probed)
  cta-secondary-text: '#1f3438'  # deep-teal label on the secondary chip
  # Text
  text: '#1f3438'               # body + headings — deep teal-black (live-probed)
  text-strong: '#16282b'        # max-contrast emphasis (deepened teal)
  text-muted: '#5b6f72'          # meta, captions, secondary copy (muted teal-gray)
  text-faint: '#8a999b'          # disclaimer / utility
  text-on-brand: '#ffffff'       # white headline/copy over deep-teal plates
  link: '#1f3438'
  link-hover: '#33524f'
  # Borders & dividers
  border: '#e4e2da'              # hairline divider on warm off-white
  border-strong: '#1f3438'       # deep-teal emphasis hairline / input focus
  border-soft: '#efeee7'         # faintest divider
  # Semantic
  success: '#3a7a52'
  warning: '#c8861a'
  danger: '#b04a3a'
  info: '#33524f'

typography:
  display:
    family: '"Suisse Works", Georgia, "Times New Roman", serif'
    weights: [400, 500, 700]
  body:
    family: 'Moderat, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    display-lg:      { size: 56, weight: 700, lineHeight: 1.08, tracking: '-0.015em', family: display }
    h1:              { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.012em', family: display }
    h2:              { size: 20, weight: 400, lineHeight: 1.3,  tracking: '0',        family: body }
    h3:              { size: 24, weight: 700, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 18, weight: 600, lineHeight: 1.3,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    button:          { size: 15, weight: 600, lineHeight: 1.0,  tracking: '0.01em',   family: body }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.2,  tracking: '0.1em',    family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.01em',   family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  xxl: 24
  pill: 40

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  card: 'none'
  card-hover: '0 10px 30px rgba(31, 52, 56, 0.10)'
  modal: '0 24px 64px rgba(31, 52, 56, 0.18)'

accessibility:
  contrast-text-on-bg: 11.8
  contrast-on-brand-on-brand: 11.4
  contrast-cta-text-on-cta: 11.4
  focus-ring: '2px solid #1f3438 + 2px outset gap'
  reduced-motion-honored: true

components:
  button-primary:   { bg: cta-bg, text: cta-text, padding: '14px 28px', radius: 40, font: button, hover-bg: cta-bg-hover }
  button-secondary: { bg: cta-secondary-bg, text: cta-secondary-text, padding: '14px 28px', radius: 40, font: button }
  button-outline:   { bg: transparent, text: text, border: '1px solid border-strong', padding: '13px 27px', radius: 40, font: button }
  button-ghost:     { bg: transparent, text: text, padding: '14px 20px', radius: 40, font: button }
  card:             { bg: surface, border: 'none', radius: 16, padding: 24 }
  input:            { bg: surface, border: '1px solid border', text: text, radius: 8, padding: '12px 16px', focus-border: brand }
  badge:            { bg: bg-soft, text: text, radius: pill, padding: '4px 12px', font: eyebrow }
  swatch:           { bg: colorway-sage, radius: pill, border: '1px solid border', size: 24 }

lineage:
  summary: 'Caraway launched in 2019 as a venture-backed non-toxic cookware brand and built its identity around three things: a serif/sans typographic pairing (Suisse Works for display, Moderat for body), a warm off-white `#fcfcf9` canvas, and a signature deep teal-green `#1f3438` that does double duty as both the body-text color and the full-pill (`40px`) CTA fill. The real color story lives in the pastel cookware colorways — Cream, Sage, Navy, Terracotta, Marigold — shown through product photography rather than painted onto the chrome. This places Caraway in the modern wellness-DTC wave alongside brands like Our Place, Great Jones, and Brightland: warm, design-forward kitchen storefronts that read more like lifestyle magazines than cookware catalogs. Caraway rejects the industrial-kitchen register (chrome, steel, hard edges, spec sheets) and the loud promotional storefront (saturated banners, urgency, square hard-sell buttons). Instead it leans wholesome and quietly premium: a calm Suisse Works serif headline, generous whitespace, soft rounded pills, and a single deep-teal CTA over a beautiful pastel pan. The serif display is the key move — most cookware competitors run all-sans, so the Suisse Works headline signals editorial taste and trust, while Moderat keeps the body copy modern and legible. Warmth comes from the off-white ground, the serif, and the colorway photography; the deep teal supplies the grounding, trustworthy anchor.'
  influences:
    - { name: 'Suisse Works (Swiss Typefaces)', role: 'serif display family carrying the editorial hero + headings', url: 'https://www.swisstypefaces.com/fonts/suisse/' }
    - { name: 'Our Place', role: 'warm wellness-DTC cookware register — pastel colorways, serif display, design-forward chrome', url: 'https://fromourplace.com/' }
    - { name: 'Great Jones', role: 'playful pastel cookware palette delivered through the product, not the UI', url: 'https://greatjones.co/' }
    - { name: 'Brightland', role: 'warm off-white canvas + serif/sans pantry-goods editorial calm', url: 'https://brightland.co/' }
    - { name: 'Aesop', role: 'restrained, product-forward retail typography and quiet premium chrome', url: 'https://www.aesop.com/' }
    - { name: 'Kinfolk', role: 'editorial whitespace + muted-photography lifestyle tone', url: 'https://www.kinfolk.com/' }
---


## 1. Visual Theme & Atmosphere

Caraway's storefront reads like a wellness lifestyle magazine that happens to sell cookware. The system is built on a deliberate **serif/sans pairing** — **Suisse Works** (Swiss Typefaces) for the display headlines and **Moderat** for body and UI — set deep teal-black `#1f3438` on a warm off-white `#fcfcf9` canvas. The first thing the page does is establish trust through calm: a **48px / weight-700 Suisse Works serif headline**, editorial rather than promotional, with the signature CTA directly beneath it — a **full-pill button** (`40px` radius) in deep teal-green `#1f3438` with white text reading **"Shop Savings →"**. There is no shouting, no saturated banner; the page is quiet, warm, and assured.

The defining decision is the **serif headline on a warm ground**. Most cookware competitors run all-sans on white — industrial, spec-forward, or loudly promotional. Caraway instead chooses a serif for display, which immediately signals editorial taste and the kind of considered, design-forward sensibility that the non-toxic / wellness register depends on. The serif carries the emotion and the trust; Moderat keeps the body copy modern, neutral, and legible. The off-white `#fcfcf9` canvas — never pure white — softens the whole page and gives it a paper-like, homey warmth.

The second defining decision is **where the color lives**. The chrome is monochrome-warm: deep teal-green and off-white, with the deep teal doing double duty as both the body text color and the CTA fill. All the brightness and personality come from the **pastel cookware colorways** — Cream, Sage, Navy, Terracotta, Marigold — delivered entirely through the product photography. Caraway never paints its buttons marigold or runs a terracotta gradient behind a headline. The pans *are* the color story. This is why the site feels premium and trustworthy rather than busy: the UI stays grounded in deep teal, and the colorways pop against it from inside the photographs.

The **shape language is soft**. The primary CTA is a full `40px` pill, cards and surfaces carry comfortable rounding, and the overall geometry is rounded and friendly — the opposite of an industrial-kitchen aesthetic. Where a brand like Away holds hard `0px` corners, Caraway leans into roundness because the register is *wholesome and approachable*, not architectural. The pill CTA is the brand's most recognizable piece of UI furniture.

Atmospherically, Caraway sits with **Our Place, Great Jones, and Brightland**: the warm wellness-DTC wave that reinvented kitchen and pantry goods as design objects. It is trustworthy and premium without being clinical, warm without being twee — a kitchen brand grown-up enough to keep on the open shelf.

**Key Characteristics:**
- Warm off-white canvas `#fcfcf9` with deep teal-black `#1f3438` type (live-probed)
- **Suisse Works serif** display paired with **Moderat** sans for body and UI
- Editorial hero headline: **48px / weight 700** Suisse Works serif, calm not loud
- Signature CTA: deep-teal `#1f3438` **full-pill (`40px` radius)** with white text, "Shop Savings →"
- Deep teal `#1f3438` does double duty: **body text color AND CTA fill**
- Color delivered through **pastel cookware colorways** (Cream/Sage/Navy/Terracotta/Marigold), never the chrome
- Soft, rounded geometry throughout — pills and comfortable corners, no hard edges
- Generous whitespace and 1.55 line-height body — editorial, unhurried cadence
- Wholesome, design-forward, trustworthy register — lifestyle magazine, not cookware catalog
- Off-white ground + serif headline + colorway photography carry all the warmth


## 2. Color Palette & Roles

### Primary / Canvas
- **Background** `#fcfcf9` [→ `bg`]: warm off-white — the dominant surface for the whole storefront (live-probed).
- **Bg Soft** `#f7f7f4` [→ `bg-soft`]: faint warm panel for alternating sections and quiet modules (live-probed from the secondary chip).
- **Bg Deeper** `#f0efe9` [→ `bg-deeper`]: secondary warm surface for nested modules and footers.
- **Hero Plate** `#1f3438` [→ `hero-plate`]: deep teal-green ground for inverted / full-bleed sections; white type sits on it.

### Surfaces
- **Surface** `#ffffff` [→ `surface`]: pure white for cards that lift off the off-white canvas.
- **Surface Soft** `#f7f7f4` [→ `surface-soft`]: quiet card / module background that blends into the warm ground.

### Brand — Deep Teal-Green (the signature)
- **Brand** `#1f3438` [→ `brand`]: deep teal-green — Caraway's identity color; it is the text color *and* the CTA fill (live-probed).
- **Brand Soft** `#33524f` [→ `brand-soft`]: a lifted teal for hover states and secondary emphasis.
- **On-Brand** `#ffffff` [→ `on-brand`]: white label on the deep-teal pill and on inverted plates (live-probed).

### Pastel Cookware Colorways — color through the product
- **Cream** `#f3ead9` [→ `colorway-cream`]: the warm off-white pan colorway.
- **Sage** `#b9c4ad` [→ `colorway-sage`]: muted green colorway.
- **Navy** `#2b3a52` [→ `colorway-navy`]: deep blue colorway and palette anchor.
- **Terracotta** `#c97b58` [→ `colorway-terracotta`]: warm clay colorway.
- **Marigold** `#e9b949` [→ `colorway-marigold`]: warm golden-yellow — the brightest accent in the palette.

### CTA — deep-teal full-pill (live-probed)
- **CTA Bg** `#1f3438` [→ `cta-bg`]: deep teal-green fill of the "Shop Savings →" pill.
- **CTA Text** `#ffffff` [→ `cta-text`]: white label on the pill.
- **CTA Bg Hover** `#33524f` [→ `cta-bg-hover`]: lifts to a softer teal on hover.
- **On CTA Hover** `#ffffff` [→ `on-cta-hover`]: white label stays on hover.
- **CTA Secondary Bg** `#f7f7f4` [→ `cta-secondary-bg`]: faint warm fill of the secondary chip (live-probed).
- **CTA Secondary Text** `#1f3438` [→ `cta-secondary-text`]: deep-teal label on the secondary chip.

### Text
- **Text** `#1f3438` [→ `text`]: body and headings — deep teal-black (live-probed, not pure black).
- **Text Strong** `#16282b` [→ `text-strong`]: max-contrast emphasis (deepened teal).
- **Text Muted** `#5b6f72` [→ `text-muted`]: meta, captions, secondary copy (muted teal-gray).
- **Text Faint** `#8a999b` [→ `text-faint`]: disclaimers and utility text.
- **Text On Brand** `#ffffff` [→ `text-on-brand`]: white headlines/copy over deep-teal plates.

### Interactive
- **Link** `#1f3438` [→ `link`]: inline links match body color; underline or weight carries the affordance.
- **Link Hover** `#33524f` [→ `link-hover`]: softens to lifted teal on hover.

### Borders & Dividers
- **Border** `#e4e2da` [→ `border`]: hairline dividers on warm off-white.
- **Border Strong** `#1f3438` [→ `border-strong`]: deep-teal emphasis hairline and input-focus border.
- **Border Soft** `#efeee7` [→ `border-soft`]: faintest section divider.

### Semantic
- **Success** `#3a7a52` [→ `success`]: confirmations, in-stock, free-shipping notices.
- **Warning** `#c8861a` [→ `warning`]: low-stock, caution (harmonizes with the Marigold colorway).
- **Danger** `#b04a3a` [→ `danger`]: errors (a deepened terracotta, kept on-palette).
- **Info** `#33524f` [→ `info`]: informational notes (lifted teal).


## 3. Typography Rules

### Font Family — Serif Display + Sans Body

Caraway runs a deliberate **two-family pairing**. **Suisse Works** (Swiss Typefaces) is the serif display face: it carries the hero headline, section titles, and editorial moments — large, calm, and trust-building. **Moderat** is the sans body face: a clean, modern grotesque that handles body copy, navigation, labels, eyebrows, and button text. The serif/sans split is the brand's signature typographic move — the serif reads as considered and premium, the sans keeps everything else neutral and legible.

```
display: "Suisse Works", Georgia, "Times New Roman", serif
body:    Moderat, system-ui, -apple-system, sans-serif
mono:    ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace   (utility only — not used in chrome)
```

Note the live probe: the **hero h1 is Suisse Works at 48px / weight 700**, while the **h2 is Moderat at 20px / weight 400** — i.e. the big editorial headline is serif, but the supporting sub-headline drops to the sans. That alternation (serif for the marquee line, sans for the supporting copy) is intentional and worth replicating.

### Hierarchy — Serif Marquee, Sans Support

| Token | Size | Weight | Family | Tracking | Case | Use |
|-------|------|--------|--------|----------|------|-----|
| `display-hero` | 64 | 700 | Suisse Works (serif) | -0.02em | sentence | oversized editorial hero (scaled up from live h1) |
| `display-lg` | 56 | 700 | Suisse Works (serif) | -0.015em | sentence | secondary full-bleed editorial headline |
| `h1` | 48 | 700 | Suisse Works (serif) | -0.012em | sentence | hero / page title (live-probed) |
| `h2` | 20 | 400 | Moderat (sans) | 0 | sentence | supporting sub-headline (live-probed — sans, light) |
| `h3` | 24 | 700 | Suisse Works (serif) | -0.005em | sentence | module / section headings |
| `h4` | 18 | 600 | Moderat (sans) | 0 | sentence | card / spec headings |
| `body-lg` | 18 | 400 | Moderat (sans) | 0 | sentence | lead paragraphs |
| `body` | 16 | 400 | Moderat (sans) | 0 | sentence | default body (live-probed, 1.55 line-height) |
| `body-sm` | 14 | 400 | Moderat (sans) | 0 | sentence | secondary copy, fine print |
| `button` | 15 | 600 | Moderat (sans) | +0.01em | sentence | "Shop Savings →", "Add to Cart" |
| `eyebrow` | 12 | 600 | Moderat (sans) | +0.1em | UPPERCASE | section labels, "BESTSELLER" |
| `label` | 13 | 500 | Moderat (sans) | +0.01em | sentence | form labels, swatch names |
| `caption` | 12 | 500 | Moderat (sans) | +0.02em | sentence | image captions, meta |
| `nav` | 15 | 500 | Moderat (sans) | 0 | sentence | primary nav items |
| `price` | 16 | 500 | Moderat (sans) | 0 | sentence | product price under card |

### Principles

- **Serif marquee, sans everything-else.** The headline is Suisse Works serif; nearly all other text is Moderat sans. The pairing *is* the brand.
- **Big, calm, bold serif headlines.** The hero is 48px weight 700 — large and confident, but editorial rather than promotional. Let the serif do the trust-building.
- **Drop to sans for support copy.** Per live probe, the supporting sub-headline (h2) is Moderat at 20px / weight 400 — light and quiet beneath the serif marquee.
- **Sentence case for headlines, UPPERCASE only for eyebrows.** Headlines and buttons read like sentences; only small eyebrows go caps, and they widen tracking (+0.1em) when they do.
- **Generous body line-height.** 1.55 on 16px Moderat body gives the storefront its unhurried, magazine rhythm.
- **Tighten the serif, leave the sans neutral.** Big serif display tracks slightly negative (−0.012 to −0.02em); Moderat body sits at 0 tracking.
- **Buttons are sans, near-neutral tracking.** Button labels are 15px Moderat semibold, sentence case, with light +0.01em tracking — never the loud all-caps of a discount banner.
- **Numerals stay quiet.** Prices are plain Moderat, deep-teal like the body — no special saturated price styling.


## 4. Component Stylings

### Buttons — Full Pills, Deep Teal First

```
/* Primary: deep-teal full pill "Shop Savings →" (live-probed hero CTA) */
.btn-primary {
  background: #1f3438;
  color: #ffffff;
  padding: 14px 28px;
  border-radius: 40px;              /* signature full pill */
  font: 600 15px/1 Moderat;
  letter-spacing: 0.01em;
  transition: background 150ms, transform 150ms;
}
.btn-primary:hover { background: #33524f; }   /* lifts to softer teal */
.btn-primary:active { transform: translateY(1px); }
```

```
/* Secondary: faint warm chip (live-probed alt CTA) */
.btn-secondary {
  background: #f7f7f4; color: #1f3438;
  padding: 14px 28px; border-radius: 40px;
  font: 600 15px/1 Moderat; letter-spacing: 0.01em;
}
.btn-secondary:hover { background: #f0efe9; }
```

```
/* Outline: secondary action on the off-white canvas */
.btn-outline {
  background: transparent; color: #1f3438;
  border: 1px solid #1f3438;
  padding: 13px 27px; border-radius: 40px;
  font: 600 15px/1 Moderat; letter-spacing: 0.01em;
}
.btn-outline:hover { background: #1f3438; color: #ffffff; }
```

```
/* Ghost: tertiary / inline link-button */
.btn-ghost {
  background: transparent; color: #1f3438;
  padding: 14px 20px; border-radius: 40px;
  font: 600 15px/1 Moderat; letter-spacing: 0.01em;
  text-decoration: underline; text-underline-offset: 4px;
}
.btn-ghost:hover { color: #33524f; }
```

Four variants, all **full `40px` pills**, all Moderat semibold at 15px with light +0.01em tracking. The signature is the **deep-teal `#1f3438` primary pill with white text** that lifts to a softer teal on hover — never a saturated colorway button, never a hard-cornered rectangle.

### Product Cards — Soft, Photo-Forward, Colorway Swatches

```
.product-card {
  background: #ffffff;
  border: none;
  border-radius: 16px;
  padding: 16px;
  transition: box-shadow 240ms, transform 240ms;
}
.product-card__image { width: 100%; border-radius: 12px; display: block; }
.product-card__name  { font: 600 18px Moderat; color: #1f3438; margin-top: 16px; }
.product-card__price { font: 500 16px Moderat; color: #1f3438; margin-top: 4px; }
.product-card__swatches { display: flex; gap: 8px; margin-top: 12px; }
.product-card:hover { box-shadow: 0 10px 30px rgba(31,52,56,0.10); transform: translateY(-2px); }
```

Cards are soft and rounded (`16px`), flat at rest, with a faint warm-tinted lift on hover. The photograph and the colorway swatch row carry the identity. The **swatches preview the cookware colorways** — Cream, Sage, Navy, Terracotta, Marigold — which is the brand's color story made interactive.

### Color Swatches — The Colorway Picker

```
.swatch {
  width: 24px; height: 24px;
  border-radius: 9999px;             /* circular colorway dots */
  border: 1px solid #e4e2da;
}
.swatch--cream      { background: #f3ead9; }
.swatch--sage       { background: #b9c4ad; }
.swatch--navy       { background: #2b3a52; }
.swatch--terracotta { background: #c97b58; }
.swatch--marigold   { background: #e9b949; }
.swatch[aria-pressed="true"] { outline: 2px solid #1f3438; outline-offset: 2px; }
```

### Badges / Tags / Pills — Quiet Warm Labels

```
.badge {
  background: #f7f7f4; color: #1f3438;
  padding: 4px 12px; border-radius: 40px;   /* pill, matching the system */
  font: 600 12px Moderat; letter-spacing: 0.1em; text-transform: uppercase;
}
.badge--bestseller { background: #1f3438; color: #ffffff; }
.badge--savings    { background: #e9b949; color: #1f3438; }   /* Marigold accent, sparingly */
```

Badges are soft warm pills — "BESTSELLER", "NEW", "NON-TOXIC". Most stay warm-gray with deep-teal text; a Marigold accent badge is the one place a colorway is allowed onto the chrome, and only for a savings/promo flag.

### Inputs / Forms — Soft Rounded, Warm Ground

```
.input {
  background: #ffffff;
  border: 1px solid #e4e2da;
  border-radius: 8px;
  padding: 12px 16px;
  font: 400 16px Moderat;
  color: #1f3438;
}
.input::placeholder { color: #8a999b; }
.input:focus { border-color: #1f3438; outline: 2px solid #1f3438; outline-offset: 2px; }
```

Newsletter and search fields are soft and warm — gentle `8px` rounding, hairline warm border, deep-teal focus, 16px Moderat to avoid mobile zoom.

### Navigation — Thin, Sentence-Case, Warm

```
.nav { height: 64px; background: #fcfcf9; border-bottom: 1px solid #e4e2da; }
.nav__item {
  font: 500 15px Moderat; color: #1f3438; text-transform: none;
}
.nav__item:hover { text-decoration: underline; text-underline-offset: 4px; }
.nav__cta { /* the deep-teal pill lives in the nav too */
  background: #1f3438; color: #ffffff; border-radius: 40px; padding: 10px 20px;
}
```

A thin 64px bar on the off-white canvas with a hairline bottom border, sentence-case Moderat items, and the deep-teal pill CTA carried into the top-right. Over a full-bleed deep-teal plate the nav can render with white type.


## 5. Layout Principles

### Spacing System
Base unit **4px**; scale `[0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]`. Sections breathe at 64–96–128px — editorial cadence, generous and unhurried, never dense retail packing.

### Grid & Container
Page max-width **1280px**; prose column **720px**. Product grids run **4-up at desktop, 2-up at tablet, 1-up at mobile**. Editorial blocks alternate full-bleed photography rows with centered copy and offset two-column "feature" rows (image one side, copy the other).

### Whitespace Philosophy
Whitespace is the primary layout tool. Modules are separated by air and the warm off-white ground, not by borders. A hero is allowed a single serif headline, one line of sub-copy, and one deep-teal pill — the restraint is what makes it read premium.

### Section Cadence
The page alternates **warm off-white copy/grid sections** with **occasional deep-teal `#1f3438` plates** (a value-prop band, a "why non-toxic" section) and **colorway-led photography rows**. The rhythm is warm → grid → deep-teal moment → photography → breathe — a magazine spread sequenced for scroll.


## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2 | rare hairline tooltip / focus chip |
| Small | 4 | small nested utility element |
| Medium | 8 | inputs, search fields, small chips |
| Large | 12 | product-image rounding inside cards |
| X-Large | 16 | cards, modules, panels (default surface rounding) |
| XX-Large | 24 | large feature panels / hero cards |
| **Pill** | 40 | **all buttons, badges, the signature CTA** (live-probed) |

Caraway's chrome is built on **soft, rounded geometry**. The signature is the **full `40px` pill** on every button and badge — the live-probed CTA radius — which gives the storefront its wholesome, friendly feel. Surfaces and cards use comfortable `16px` rounding; images inside cards soften to `12px`; inputs sit at `8px`. There are essentially no hard `0px` corners in the chrome (the live secondary chip is the only `0px`-radius element, and it is best normalized to a pill for consistency). If a new component needs an edge, prefer rounding — sharpness reads as foreign to this warm system.


## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | flat — `none` | default for sections, buttons, inputs, nav |
| 1 | `0 10px 30px rgba(31, 52, 56, 0.10)` | product-card hover lift |
| 4 | `0 24px 64px rgba(31, 52, 56, 0.18)` | modal / cart-drawer overlay |

### Shadow Philosophy
The system is essentially flat. At rest nothing casts a shadow — separation comes from **whitespace, the warm off-white ground, hairlines, and photographic contrast**, not elevation. A faint warm-tinted lift appears on product-card hover, and a deeper shadow anchors modals and the cart drawer. Shadows are always **teal-tinted** (`rgba(31, 52, 56, …)`, never pure black), matching the deep-teal brand color so the depth reads warm rather than gray.


## 8. Interaction & Motion

- **Easing:** standard `cubic-bezier(0.4, 0, 0.2, 1)` for nearly everything — gentle and unhurried.
- **Durations:** fast `150ms` (button color shifts), standard `240ms` (image fades, card hovers), slow `320ms` (drawer / modal entrances).
- **Primary button hover:** deep teal `#1f3438` → softer teal `#33524f`; a subtle `translateY(1px)` on active. No dramatic transform.
- **Outline button hover:** transparent → deep-teal fill, text flips to white.
- **Product card hover:** faint teal-tinted shadow lift (`0 10px 30px rgba(31,52,56,0.10)`) plus a 2px rise (240ms); optional image cross-fade to a lifestyle shot.
- **Swatch / colorway select:** 2px deep-teal outline appears with a 150ms fade; the card image swaps to the selected colorway.
- **Nav:** underline slides in on hover (4px offset); over a deep-teal plate the nav settles to warm off-white on scroll.
- **Page transitions:** 240ms cross-fade; full-bleed photography may use a slow ken-burns drift on load (disabled under reduced motion).
- **Reduced motion:** `prefers-reduced-motion: reduce` honored — image drift, cross-fades, and card-rise transforms are disabled; color-state changes remain (instantaneous, not animated movement).


## 9. Accessibility & A11y

Computed contrast against the live-probed tokens (`bg #fcfcf9`, `text #1f3438`, `brand/CTA #1f3438`, `on-brand #ffffff`):

- **Text on canvas:** `#1f3438` on `#fcfcf9` = **11.8:1** — AAA (well above the 7:1 threshold).
- **CTA label on CTA fill:** `#ffffff` on `#1f3438` = **11.4:1** — AAA (the deep-teal "Shop Savings →" pill).
- **Brand on canvas:** `#1f3438` on `#fcfcf9` = **11.8:1** — AAA (deep teal as text and outline-button border).
- **Secondary chip:** `#1f3438` on `#f7f7f4` = **11.3:1** — AAA (deep-teal label on the warm chip).
- **Muted meta on canvas:** `#5b6f72` on `#fcfcf9` = **5.0:1** — AA for normal text, AAA for large.
- **White on hover teal:** `#ffffff` on `#33524f` = **7.4:1** — AAA (the lifted-teal hover state still clears AAA).
- **Marigold accent caution:** `#e9b949` is a *product/accent* color, not a text color. On the off-white canvas it is low-contrast — never set Marigold as text; use deep teal `#1f3438` on a Marigold fill (`#1f3438` on `#e9b949` ≈ **7.0:1**, AAA) for the savings badge.

Patterns:
- **Focus:** 2px solid `#1f3438` outline with a 2px outset gap — visible on off-white, on warm chips, and on colorway photography.
- **Colorway swatches:** expose `aria-label` (colorway name) and `aria-pressed`; selection is not communicated by the outline alone — the colorway name is announced.
- **CTAs over imagery:** the deep-teal pill is a solid fill, so its contrast never depends on the photograph behind it.
- **Keyboard nav:** full tab order across nav, search, colorway swatches, add-to-cart, and the cart drawer; the drawer traps focus and restores it on close.
- **Reduced motion:** image drift / cross-fades / card rises disabled; no information conveyed by motion alone.


## 10. Responsive Behavior

| Breakpoint | Width | Behavior |
|-----------|-------|----------|
| Mobile | <640 | 1-up product grid; serif hero 48→32px; nav → hamburger; CTAs full-width pills |
| Tablet | 640–1024 | 2-up grid; nav condenses; serif hero ~40px |
| Desktop | 1024–1280 | 4-up grid; inline nav with deep-teal pill CTA; full editorial cadence |
| Wide | 1280–1536 | content caps at 1280; colorway photography bleeds wider |

- **Touch targets:** 44×44 minimum maintained — the pill CTA padding (14×28) and a 44px-tall tap zone on swatches and nav.
- **Hero:** the serif headline scales down (48→32px) but stays weight 700; the deep-teal pill CTA goes full-width on mobile.
- **Cards:** image stays edge-to-edge in its rounded column; the colorway swatch row wraps below 5 colorways on narrow screens.
- **Images:** `object-fit: cover` for full-bleed lifestyle plates; product shots stay `contain` on the warm ground; corners keep `12–16px` rounding.
- **Nav:** inline on desktop (with the pill CTA visible) collapses to a hamburger bar on the off-white ground on mobile.


## 11. Content & Voice

### Tone
**Warm, trustworthy, wholesome, design-forward.** Sentence-case headlines, no urgency theatrics, no exclamation-point hype. The copy sells the *feeling* of a healthier, more beautiful kitchen — non-toxic, considered, made to last. Think wellness-lifestyle editor, not flash-sale email. Confidence comes from the serif headline and the calm, not from shouting.

### Microcopy patterns
- Primary CTA: **"Shop Savings →"** (sentence case, live hero label, arrow glyph)
- Product action: **"Add to Cart"** (sentence case, deep-teal pill)
- Out of stock: **"Notify Me"**
- Newsletter: **"Sign Up"** — terse, no "Join the club!" exclamation
- Value props: **"Non-toxic"**, **"Free of forever chemicals"**, **"Easy to clean"** (declarative)
- Empty cart: **"Your cart is empty."** (declarative, sentence case)
- Error: **"Something went wrong. Please try again."** (no exclamation)

### Empty states
Quiet and reassuring — a single line of sentence-case copy plus one deep-teal pill CTA back to the catalog. No illustrations or mascots; the warmth comes from the off-white ground and the serif type.

### CTA verb conventions
- **Use:** Shop, Add to Cart, Explore, Discover, Notify Me, Sign Up, Learn More (with → glyph)
- **Avoid:** "Buy now!", urgency ("Last chance", "Selling fast"), all-caps shouting, emoji, and anything with an exclamation point.


## 12. Dark Mode & Theming

**Light-only.** The warm off-white canvas and deep teal-black type *are* the brand; the "dark" moments are deep-teal `#1f3438` content plates (a value-prop band, a "why non-toxic" section), not a dark theme. There is no inverted dark-mode storefront — flipping to a dark ground would lose the warm, paper-like off-white that defines the wholesome register, and the pastel colorways read best against the warm light ground. The only legitimate dark surface is a full-bleed deep-teal plate carrying white type, which is a content treatment, not a theme switch. Theme toggling is not part of the visual language.


## 13. Lineage & Influences

Caraway launched in 2019 as a venture-backed **non-toxic cookware** brand, and from the start it built its identity around three disciplined choices: **a serif/sans typographic pairing (Suisse Works for display, Moderat for body), a warm off-white `#fcfcf9` canvas, and a signature deep teal-green `#1f3438`** that does double duty as both the body-text color and the full-pill (`40px`) CTA fill. The real color story lives in the **pastel cookware colorways** — Cream, Sage, Navy, Terracotta, Marigold — delivered through the product photography rather than painted onto the chrome. This places Caraway firmly in the **warm wellness-DTC wave** alongside Our Place, Great Jones, and the pantry-goods sensibility of Brightland: design-forward kitchen storefronts that read more like lifestyle magazines than industrial cookware catalogs.

What Caraway **rejects** is just as defining. No industrial-kitchen chrome, steel, or spec-sheet density. No saturated promotional banners, urgency, or hard-cornered hard-sell buttons. No painting the bright colorways onto the UI furniture. Where conversion-optimized cookware sites shout discounts in loud rectangles, Caraway holds a single calm Suisse Works serif headline over a beautiful pastel pan with one deep-teal pill, and lets the colorway photography supply all the brightness. The typographic signature — a **serif display on a warm ground** — is the key move: most competitors run all-sans, so the Suisse Works headline signals editorial taste and the kind of considered, trustworthy register that the non-toxic / wellness positioning depends on, while Moderat keeps the body modern and legible. The lineage is restrained luxury-retail typography (Aesop) crossed with lifestyle-magazine editorial (Kinfolk) — a kitchen brand you'd keep on the open shelf.

**Named influences:**
- **Suisse Works (Swiss Typefaces)** — the serif display family carrying the editorial hero and headings; the typographic signature.
- **Our Place** — the warm wellness-DTC cookware register: pastel colorways, serif display, design-forward chrome.
- **Great Jones** — playful pastel cookware palette delivered through the product, not the UI.
- **Brightland** — warm off-white canvas plus serif/sans pantry-goods editorial calm.
- **Aesop** — restrained, product-forward retail typography and quiet premium chrome.
- **Kinfolk** — editorial whitespace and muted-photography lifestyle tone.


## 14. Do's and Don'ts

### Do
- Pair **Suisse Works serif** (display) with **Moderat sans** (body/UI) — the serif/sans split is the brand.
- Keep the canvas **warm off-white `#fcfcf9`** and type **deep teal-black `#1f3438`** (live-probed, not pure white / not pure black).
- Make the hero a **48px / weight-700 Suisse Works serif** headline — large, calm, editorial, sentence case.
- Drop the **supporting sub-headline to Moderat sans** (20px / weight 400) beneath the serif marquee, per the live probe.
- Use **full `40px` pills** on every button; the primary is the **deep-teal `#1f3438` fill with white text** ("Shop Savings →") lifting to softer teal on hover.
- Deliver brightness through the **pastel colorways** (Cream/Sage/Navy/Terracotta/Marigold) and the photography — never the buttons.
- Soften surfaces — `16px` cards, `12px` images, `8px` inputs — and keep the geometry rounded and wholesome.
- Track eyebrows **wide (+0.1em) and UPPERCASE**; keep headlines and buttons **sentence case**.
- Tint shadows and overlays **teal** (`rgba(31,52,56,…)`), never pure black, so depth reads warm.
- Pair the **Marigold accent with deep-teal text** (e.g. a savings badge) — never Marigold as a text color.

### Don't
- **Don't** use hard `0px`-radius rectangles for CTAs — every button is a full `40px` pill.
- **Don't** paint the buttons in a saturated colorway (Marigold/Terracotta) — the chrome stays deep teal / off-white.
- **Don't** set the hero in an all-sans face — the serif Suisse Works headline is the brand's trust signal.
- **Don't** use pure white `#ffffff` for the page canvas — the brand ground is warm off-white `#fcfcf9`.
- **Don't** use pure black `#000000` for body text — the brand text is deep teal-black `#1f3438`.
- **Don't** put the pastel colorways on UI furniture (buttons, nav, inputs). Keep them on products and swatches.
- **Don't** use urgency banners, all-caps shouting, exclamation points, or emoji — the voice is calm and wholesome.
- **Don't** lean industrial (steel, chrome, spec sheets) — the register is warm, design-forward, lifestyle-magazine.
- **Don't** clutter sections with borders; use the warm ground and whitespace to separate modules.
- **Don't** set Marigold as a text color — it fails contrast on the off-white ground; use it as a fill behind deep-teal text only.


## 15. Agent Prompt Guide

### Quick Color Reference
```
Background:        #fcfcf9   (warm off-white canvas — NOT pure white)
Text:              #1f3438   (deep teal-black — NOT pure black)
Brand / CTA:       #1f3438   (deep teal-green — text AND button fill)
CTA text:          #ffffff   (white on the deep-teal pill)
CTA hover fill:    #33524f   (lifted teal)
Secondary chip:    #f7f7f4   bg / #1f3438 text
Muted text:        #5b6f72
Border:            #e4e2da   (hairline)  /  #1f3438 (strong/focus)
Colorways:         Cream #f3ead9 · Sage #b9c4ad · Navy #2b3a52 · Terracotta #c97b58 · Marigold #e9b949
Display font:      "Suisse Works" serif   ·   Body font: Moderat sans
CTA radius:        40px (full pill)
```

### Example Component Prompts

> **Hero:** "Create a warm cookware hero on an off-white `#fcfcf9` canvas. Headline in Suisse Works serif at 48px, weight 700, deep teal-black `#1f3438`, sentence case, tracked −0.012em. Below it a supporting sub-headline in Moderat sans at 20px / weight 400. Then one full-pill CTA — `40px` radius, deep-teal `#1f3438` fill, white `#ffffff` text, 'Shop Savings →' in 15px Moderat semibold — that lifts to softer teal `#33524f` on hover. Beside the copy, a photograph of a pastel cookware set. No saturated colorway on the button; no hard corners."

> **Product card:** "Design a soft product card on white `#ffffff` with `16px` rounding: a full-width product photo rounded to `12px`, then the product name in 18px Moderat semibold `#1f3438`, price in 16px Moderat medium `#1f3438`, and a row of circular `24px` colorway swatches (Cream #f3ead9, Sage #b9c4ad, Navy #2b3a52, Terracotta #c97b58, Marigold #e9b949). Flat at rest; on hover add a faint teal-tinted shadow `0 10px 30px rgba(31,52,56,0.10)` and a 2px rise."

> **Newsletter form:** "Build a warm email signup on off-white `#fcfcf9`: a single input with `8px` radius, 1px `#e4e2da` border (16px Moderat), placeholder `#8a999b`, deep-teal `#1f3438` focus border, and a full-pill 'Sign Up' button — `40px` radius, deep-teal `#1f3438` fill, white text. Sentence-case copy, no exclamation points."

> **Value-prop band:** "Lay out a deep-teal `#1f3438` full-bleed section with white `#ffffff` Moderat copy and a 32px Suisse Works serif heading in white. Three columns of non-toxic value props ('Free of forever chemicals', 'Easy to clean', 'Even heating'), each with a small icon. Generous 96px vertical padding; this is the one dark plate in an otherwise warm-light page."

> **Savings badge:** "Make a soft pill badge: Marigold `#e9b949` background with deep-teal `#1f3438` text (the one place a colorway touches the chrome), `40px` radius, 12px Moderat semibold UPPERCASE tracked +0.1em, e.g. 'SAVE 20%'. For a 'BESTSELLER' badge use deep-teal `#1f3438` background with white text. Never use Marigold as a text color."

> **Editorial section:** "Alternating editorial row on off-white: a lifestyle photograph one side, a centered copy block the other with a sentence-case 24px Suisse Works serif heading `#1f3438`, 18px Moderat regular lead at 1.55 line-height, and an underlined ghost pill CTA ('Learn More →'). Generous 96px spacing; separation by the warm ground and whitespace, not borders."

### Iteration Guide
1. **If it looks too 'industrial'**, you're probably all-sans on pure white — switch the headline to Suisse Works serif and warm the canvas to `#fcfcf9`.
2. **If the buttons feel wrong**, they're likely hard-cornered or a saturated colorway — make them full `40px` deep-teal `#1f3438` pills with white text.
3. **If the page feels flat-gray or muddy**, you've leaked a colorway into the chrome — pull Marigold/Terracotta/Sage back onto the products and swatches and keep the UI deep-teal / off-white.
4. **If the canvas looks clinical**, you're using pure white — soften to warm off-white `#fcfcf9`; pure white reads cold for this brand.
5. **If text looks harsh**, you're using pure black `#000000` — soften to deep teal-black `#1f3438`.
6. **If the hero feels promotional**, drop the sub-headline to light Moderat (20px / weight 400) and keep the serif headline calm at weight 700 — let the serif build trust instead of a loud banner.
7. **If the type feels generic**, confirm Suisse Works (serif) for display and Moderat (sans) for body — not Inter/Helvetica for everything.
8. **To shift toward a specific colorway**, lead with one pastel as the photographed pan color (e.g. a Sage Dutch oven) while keeping every UI element deep-teal / off-white.

---

*Theme-toggle audit: score=2, signals=[prefers-color-scheme-css]*
