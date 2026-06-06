---
name: Away
tagline: Editorial travel-luggage DTC — Graphik on white, photography-led, sharp 0px white CTAs over dark hero imagery.
updated_at: 2026-05-28T23:13:08.554Z
published_at: 2026-05-28T23:13:08.554Z
author: webdesignhot
source_url: https://www.awaytravel.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [retail]
tags: [light, editorial, sans, commerce, travel]
preview_swatch: ['#ffffff', '#a9c4d4', '#111111']
related: []
description: 'Away''s site is a photography-led travel-retail system built on one typeface — Graphik — set near-black `#111111` on a pure-white `#ffffff` canvas, with full-bleed editorial imagery doing the emotional work. The hero is a dark photographic plate with a white Graphik headline (56px / weight 400, not bold) and a single sharp-cornered white CTA reading "SHOP NOW" in uppercase — `0px` radius, white fill, `#111111` text. There are no pills, no soft corners, no gradients in the chrome: the brand''s warmth lives entirely in the muted-pastel suitcase palette (Coast blue, Sand, Olive, Navy, Blush, Cherry) and in the lifestyle photography, not in the UI furniture. Body copy is 16px Graphik Regular at a calm 1.55 line-height. The register is aspirational-but-restrained: a premium catalog rather than a noisy storefront. Where most DTC brands lean on rounded buttons and brand-color CTAs, Away holds the chrome neutral — sharp white-on-image rectangles — and lets the product color do the talking. The result reads closer to a travel magazine spread than an e-commerce grid: editorial typography, generous whitespace, and color delivered through the suitcases themselves.'


# Canonical 8-role aliases (bg / text / brand / border / accent / muted / surface / danger).
# Maps role names to this entry's actual token names so role-aware
# downstream tools resolve `theme.background` → entry's `bg`, etc.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-sand
  muted: text-muted
  border: border
  ring: text

colors:
  # Page grounds
  bg: '#ffffff'                  # pure white canvas — the dominant surface
  bg-soft: '#f7f6f4'             # warm off-white panel / alternating section
  bg-deeper: '#efece8'           # secondary warm surface
  hero-plate: '#1a1a1a'          # dark photographic hero ground (image overlay base)
  # Surfaces
  surface: '#ffffff'             # cards sit on white, image carries identity
  surface-soft: '#f7f6f4'        # quiet card / module background
  # Brand — Away's signature muted-pastel suitcase palette
  brand: '#a9c4d4'               # Coast — the signature muted pastel blue (brand identity color)
  brand-deep: '#3b5566'          # deepened Coast for text-on-pastel / emphasis
  on-brand: '#111111'            # near-black text on pastel chips
  # Suitcase pastels — color delivered through the product, not the chrome
  pastel-coast: '#a9c4d4'        # Coast blue
  pastel-sand: '#e3d9c6'         # Sand
  pastel-olive: '#9aa07c'        # Olive
  pastel-navy: '#2b3a4a'         # Navy
  pastel-blush: '#e8c9c5'        # Blush pink
  pastel-cherry: '#9e2b2b'       # Cherry red
  # CTA — sharp white-on-image rectangle (live-probed)
  cta-bg: '#ffffff'              # white "SHOP NOW" button fill
  cta-text: '#111111'            # near-black label on the white CTA
  cta-bg-hover: '#111111'        # inverts to near-black on hover
  on-cta-hover: '#ffffff'        # white label on hover
  # Text
  text: '#111111'                # body + headings — near-black (live-probed)
  text-strong: '#000000'         # max-contrast emphasis (rare)
  text-muted: '#6b6b6b'          # meta, captions, secondary copy
  text-faint: '#9a9a9a'          # disclaimer / utility
  text-on-image: '#ffffff'       # white headline/copy over dark photographic plates
  link: '#111111'
  link-hover: '#6b6b6b'
  # Borders & dividers
  border: '#e4e2dd'              # hairline divider on warm white
  border-strong: '#111111'       # near-black emphasis hairline / input focus
  border-soft: '#efece8'         # faintest divider
  # Semantic
  success: '#2f7a4d'
  warning: '#c8861a'
  danger: '#9e2b2b'
  info: '#3b5566'

typography:
  display:
    family: 'Graphik, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
  body:
    family: 'Graphik, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 56, weight: 400, lineHeight: 1.05, tracking: '-0.01em',  family: display }
    display-lg:      { size: 44, weight: 400, lineHeight: 1.08, tracking: '-0.01em',  family: display }
    h1:              { size: 40, weight: 500, lineHeight: 1.1,  tracking: '-0.005em', family: display }
    h2:              { size: 32, weight: 500, lineHeight: 1.15, tracking: '-0.005em', family: display }
    h3:              { size: 24, weight: 500, lineHeight: 1.25, tracking: '0',        family: display }
    h4:              { size: 20, weight: 500, lineHeight: 1.3,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    button:          { size: 13, weight: 500, lineHeight: 1.0,  tracking: '0.08em',   family: body }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.2,  tracking: '0.12em',   family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0.02em',   family: body }

radius:
  none: 0
  micro: 2
  sm: 4
  md: 8

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1440
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
  wide: 1440

shadows:
  card: 'none'
  card-hover: '0 8px 24px rgba(17, 17, 17, 0.08)'
  modal: '0 24px 64px rgba(17, 17, 17, 0.18)'

accessibility:
  contrast-text-on-bg: 18.1
  contrast-cta-text-on-cta: 18.1
  contrast-on-image: 21
  focus-ring: '2px solid #111111 + 2px outset gap'
  reduced-motion-honored: true

components:
  button-primary:   { bg: cta-bg, text: cta-text, padding: '14px 28px', radius: 0, font: button, hover-bg: cta-bg-hover, hover-text: on-cta-hover }
  button-dark:      { bg: text, text: text-on-image, padding: '14px 28px', radius: 0, font: button, hover-bg: brand-deep }
  button-outline:   { bg: transparent, text: text, border: '1px solid border-strong', padding: '13px 27px', radius: 0, font: button }
  button-ghost:     { bg: transparent, text: text, padding: '14px 24px', radius: 0, font: button }
  card:             { bg: surface, border: 'none', radius: 0, padding: 0 }
  input:            { bg: surface, border: '1px solid border-strong', text: text, radius: 0, padding: '12px 16px', focus-border: text }
  badge:            { bg: bg-soft, text: text, radius: 0, padding: '4px 10px', font: eyebrow }
  swatch:           { bg: pastel-coast, radius: pill, border: '1px solid border', size: 24 }

lineage:
  summary: 'Away launched in 2015 as a venture-backed DTC luggage brand and built its identity around three things: a single hard-working sans (Graphik, by Commercial Type), full-bleed editorial travel photography, and a muted-pastel color story delivered entirely through the suitcases themselves — Coast, Sand, Olive, Navy, Blush, Cherry. The chrome is deliberately quiet: pure-white canvas, near-black `#111111` type, and sharp 0px-radius CTAs that are white-on-image in the hero and invert to near-black on hover. This is the catalog/lifestyle-magazine register — closer to Kinfolk, Cereal, and the editorial DTC wave of the mid-2010s than to conversion-optimized retail. Away rejects the pill button, the brand-colored CTA, and the gradient; warmth and personality come from the photography and the suitcase palette, never from the UI furniture. The typographic move is a large, calm, low-weight headline (56px Graphik Regular, not bold) set in white over a dark photographic plate — declarative and aspirational rather than loud. Where competitors shout discounts in saturated buttons, Away lets a single sharp white rectangle and a beautiful photograph carry the page.'
  influences:
    - { name: 'Graphik (Commercial Type, Christian Schwartz)', role: 'single-family grotesque handling display + body + UI', url: 'https://commercialtype.com/catalog/graphik' }
    - { name: 'Kinfolk', role: 'editorial whitespace + muted-photography lifestyle register', url: 'https://www.kinfolk.com/' }
    - { name: 'Cereal Magazine', role: 'travel-editorial minimalism + muted palette tone', url: 'https://readcereal.com/' }
    - { name: 'Everlane', role: 'mid-2010s editorial-DTC chrome — white canvas, sharp buttons, photography-led', url: 'https://www.everlane.com/' }
    - { name: 'Aesop', role: 'restrained luxury-retail typography and quiet product-forward chrome', url: 'https://www.aesop.com/' }
    - { name: 'Muji', role: 'neutral-chrome, product-as-color minimalism', url: 'https://www.muji.com/' }
---


## 1. Visual Theme & Atmosphere

Away's storefront reads like a travel magazine that happens to sell luggage. The system is built on a single typeface — **Graphik** (Commercial Type) — set near-black `#111111` on a pure-white `#ffffff` canvas, with full-bleed editorial photography doing the emotional heavy lifting. The first thing on the page is a **dark photographic hero plate** carrying a white Graphik headline at **56px / weight 400** — large, calm, and notably *not bold*. Below it sits a single sharp-cornered white CTA reading **"SHOP NOW"** in uppercase: `0px` radius, white fill, `#111111` text. There is nothing else competing for attention. The whole composition is aspirational-but-restrained.

The defining decision is **where the color lives**. The chrome — buttons, headers, dividers, cards — is studiously neutral: white, near-black, warm off-white. All the warmth and personality come from two places: the **muted-pastel suitcase palette** (Coast blue, Sand, Olive, Navy, Blush, Cherry) and the **lifestyle photography**. Away never paints its buttons brand-blue or runs a gradient behind a headline. The product *is* the color story. This is why the site feels premium rather than promotional — it trusts the photograph and the suitcase to carry the mood, and keeps the UI furniture out of the way.

Typographically the register is **editorial, not e-commerce**. The hero headline is low-weight and tracked slightly tight; body copy is a comfortable 16px Graphik Regular at a generous **1.55 line-height**. Eyebrows and button labels are the only places that go uppercase, and they do so with wide tracking (a +0.08–0.12em "specimen-label" feel). There is no shouting type, no Title-Case marketing headline, no exclamation-point urgency. The page moves at the pace of a print spread.

The **shape language is sharp**. Every CTA is a `0px`-radius rectangle. There are no pills, no rounded cards, no soft chips in the chrome. The one place roundness appears is the **color swatch** — the little circular suitcase-color dots on a product card — which is appropriate, because that is the color story made interactive. Everything else holds a hard right angle, which reinforces the catalog/architectural calm.

Atmospherically, Away sits with **Kinfolk, Cereal, Everlane, and Aesop**: the editorial-DTC wave that rejected loud conversion chrome in favor of whitespace, photography, and one disciplined typeface. It is travel-aspirational without being escapist-kitsch — muted, grown-up, and quietly confident.

**Key Characteristics:**
- Pure-white canvas `#ffffff` with near-black `#111111` type (live-probed)
- Single-family **Graphik** for display, body, nav, and UI
- Dark photographic hero plate with **white 56px / weight-400** headline (not bold)
- Sharp **0px-radius** CTAs everywhere — no pills, no soft corners
- Signature CTA: **white fill + `#111111` text, uppercase "SHOP NOW"**, inverts to near-black on hover
- Color delivered through the **suitcase pastels** (Coast/Sand/Olive/Navy/Blush/Cherry), never the chrome
- Generous 1.55 line-height body and editorial whitespace cadence
- Uppercase, wide-tracked eyebrows and button labels; sentence-case headlines
- Photography-led layout — full-bleed imagery carries the emotion
- Neutral chrome on purpose: warmth lives in product + image, not UI furniture


## 2. Color Palette & Roles

### Primary / Canvas
- **Background** `#ffffff` [→ `bg`]: pure white — the dominant surface for grids, PDPs, and copy blocks.
- **Bg Soft** `#f7f6f4` [→ `bg-soft`]: warm off-white for alternating sections and quiet panels.
- **Bg Deeper** `#efece8` [→ `bg-deeper`]: secondary warm surface for nested modules.
- **Hero Plate** `#1a1a1a` [→ `hero-plate`]: dark photographic ground beneath hero imagery; white type sits on it.

### Brand — Coast (the signature pastel)
- **Brand** `#a9c4d4` [→ `brand`]: Coast — Away's signature muted pastel blue and brand identity color. Appears as the leading suitcase color and accent, not as a button fill.
- **Brand Deep** `#3b5566` [→ `brand-deep`]: deepened Coast for text-on-pastel and emphasis where the pale blue can't carry contrast.
- **On-Brand** `#111111` [→ `on-brand`]: near-black label on pastel chips and swatches.

### Suitcase Pastels — color through the product
- **Coast** `#a9c4d4` [→ `pastel-coast`]: the signature pale blue.
- **Sand** `#e3d9c6` [→ `pastel-sand`]: warm neutral pastel.
- **Olive** `#9aa07c` [→ `pastel-olive`]: muted green.
- **Navy** `#2b3a4a` [→ `pastel-navy`]: deep blue anchor for the palette.
- **Blush** `#e8c9c5` [→ `pastel-blush`]: soft pink.
- **Cherry** `#9e2b2b` [→ `pastel-cherry`]: muted red — also doubles as the semantic danger token.

### CTA — sharp white-on-image (live-probed)
- **CTA Bg** `#ffffff` [→ `cta-bg`]: white fill of the "SHOP NOW" button (over dark imagery).
- **CTA Text** `#111111` [→ `cta-text`]: near-black label on the white CTA.
- **CTA Bg Hover** `#111111` [→ `cta-bg-hover`]: inverts to near-black on hover.
- **On CTA Hover** `#ffffff` [→ `on-cta-hover`]: white label on the hover state.

### Text
- **Text** `#111111` [→ `text`]: body and headings — near-black (live-probed, not pure black).
- **Text Strong** `#000000` [→ `text-strong`]: max-contrast emphasis (rare).
- **Text Muted** `#6b6b6b` [→ `text-muted`]: meta, captions, secondary copy.
- **Text Faint** `#9a9a9a` [→ `text-faint`]: disclaimers and utility text.
- **Text On Image** `#ffffff` [→ `text-on-image`]: white headlines/copy over dark photographic plates.

### Interactive
- **Link** `#111111` [→ `link`]: inline links match body color; weight or underline carries the affordance.
- **Link Hover** `#6b6b6b` [→ `link-hover`]: softens to muted gray on hover.

### Borders & Dividers
- **Border** `#e4e2dd` [→ `border`]: hairline dividers on warm white.
- **Border Strong** `#111111` [→ `border-strong`]: near-black emphasis hairline and input-focus border.
- **Border Soft** `#efece8` [→ `border-soft`]: faintest section divider.

### Semantic
- **Success** `#2f7a4d` [→ `success`]: confirmations, in-stock.
- **Warning** `#c8861a` [→ `warning`]: low-stock, caution.
- **Danger** `#9e2b2b` [→ `danger`]: errors (shares the Cherry pastel hue, deepened).
- **Info** `#3b5566` [→ `info`]: informational notes (deep Coast).


## 3. Typography Rules

### Font Family — Single-Family Grotesque

**Graphik** (Commercial Type, Christian Schwartz) handles **all** of Away's typography: hero display, headings, body, nav, eyebrows, and button labels. It is a clean, neutral grotesque with even color and a slightly humanist warmth — ideal for an editorial register that needs to read as premium-but-approachable. There is no serif and no second display face in the live chrome.

```
display: Graphik, system-ui, -apple-system, sans-serif
body:    Graphik, system-ui, -apple-system, sans-serif
mono:    ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace   (utility only — not used in chrome)
```

Loaded weights cluster at **400 / 500 / 600**. The notable choice is that the **hero headline runs at weight 400, not bold** — large-but-light. Bold (600) is reserved for small emphasis, never for the big display moments.

### Hierarchy — Calm Editorial Scale

| Token | Size | Weight | Tracking | Case | Use |
|-------|------|--------|----------|------|-----|
| `display-hero` | 56 | 400 | -0.01em | sentence | dark-plate hero headline (live-probed) |
| `display-lg` | 44 | 400 | -0.01em | sentence | secondary full-bleed editorial |
| `h1` | 40 | 500 | -0.005em | sentence | section / PDP title |
| `h2` | 32 | 500 | -0.005em | sentence | sub-section headings |
| `h3` | 24 | 500 | 0 | sentence | module headings |
| `h4` | 20 | 500 | 0 | sentence | card / spec headings |
| `body-lg` | 18 | 400 | 0 | sentence | lead paragraphs |
| `body` | 16 | 400 | 0 | sentence | default body (live-probed, 1.55 line-height) |
| `body-sm` | 14 | 400 | 0 | sentence | secondary copy, fine print |
| `button` | 13 | 500 | +0.08em | UPPERCASE | "SHOP NOW", "ADD TO BAG" |
| `eyebrow` | 12 | 500 | +0.12em | UPPERCASE | section labels, "FEATURED" |
| `label` | 13 | 500 | +0.02em | sentence | form labels, swatch names |
| `caption` | 12 | 400 | +0.02em | sentence | image captions, meta |
| `nav` | 14 | 500 | +0.02em | sentence | primary nav items |
| `price` | 16 | 400 | 0 | sentence | product price under card |

### Principles

- **Large, light headlines.** The hero is 56px at weight 400 — calm and declarative, never a bold marketing shout.
- **One family, many sizes.** Graphik does everything; hierarchy comes from size and weight, not from mixing faces.
- **Sentence case for headlines, UPPERCASE for labels.** Headlines read like sentences; only eyebrows and button labels go caps, and they widen tracking when they do.
- **Generous body line-height.** 1.55 on 16px body gives the catalog its unhurried rhythm.
- **Tighten display, loosen labels.** Big display copy tracks slightly negative (−0.01em); small uppercase labels track wide (+0.08 to +0.12em).
- **Bold is punctuation, not display.** Weight 600 appears only for inline emphasis, never for the hero.
- **Numerals stay tabular-quiet.** Prices are plain Graphik Regular, the same color as body — no special price styling.


## 4. Component Stylings

### Buttons — Sharp Rectangles, Never Pills

```
/* Primary: white-on-image "SHOP NOW" (live-probed hero CTA) */
.btn-primary {
  background: #ffffff;
  color: #111111;
  padding: 14px 28px;
  border-radius: 0;                 /* sharp — no pills */
  font: 500 13px/1 Graphik;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: background 150ms, color 150ms;
}
.btn-primary:hover { background: #111111; color: #ffffff; }   /* inverts */
```

```
/* Dark: near-black CTA on white sections */
.btn-dark {
  background: #111111; color: #ffffff;
  padding: 14px 28px; border-radius: 0;
  font: 500 13px/1 Graphik; letter-spacing: 0.08em; text-transform: uppercase;
}
.btn-dark:hover { background: #3b5566; }   /* deep Coast */
```

```
/* Outline: secondary action on white */
.btn-outline {
  background: transparent; color: #111111;
  border: 1px solid #111111;
  padding: 13px 27px; border-radius: 0;
  font: 500 13px/1 Graphik; letter-spacing: 0.08em; text-transform: uppercase;
}
.btn-outline:hover { background: #111111; color: #ffffff; }
```

```
/* Ghost: tertiary / inline link-button */
.btn-ghost {
  background: transparent; color: #111111;
  padding: 14px 24px; border-radius: 0;
  font: 500 13px/1 Graphik; letter-spacing: 0.08em; text-transform: uppercase;
  text-decoration: underline; text-underline-offset: 4px;
}
.btn-ghost:hover { color: #6b6b6b; }
```

Four variants, all `0px` radius, all uppercase Graphik Medium at 13px with +0.08em tracking. The signature is the **white-on-image primary that inverts to near-black** — never a brand-colored or rounded button.

### Product Cards — Zero Chrome, Photo + Swatches

```
.product-card {
  background: #ffffff;
  border: none;
  border-radius: 0;
  padding: 0;
}
.product-card__image { width: 100%; display: block; }
.product-card__name  { font: 500 16px Graphik; color: #111111; margin-top: 12px; }
.product-card__price { font: 400 16px Graphik; color: #111111; margin-top: 4px; }
.product-card__swatches { display: flex; gap: 8px; margin-top: 12px; }
```

No border, no shadow at rest, no radius. The photograph carries the identity. The one rounded element is the **color swatch row** — circular pastel dots that preview the suitcase colorways — which is the brand's color story made interactive. Optional `0 8px 24px rgba(17,17,17,0.08)` lift may appear on hover.

### Color Swatches — The Only Round Thing

```
.swatch {
  width: 24px; height: 24px;
  border-radius: 9999px;             /* circular — the sole pill in the system */
  border: 1px solid #e4e2dd;
}
.swatch--coast { background: #a9c4d4; }
.swatch--sand  { background: #e3d9c6; }
.swatch--olive { background: #9aa07c; }
.swatch--navy  { background: #2b3a4a; }
.swatch--blush { background: #e8c9c5; }
.swatch--cherry{ background: #9e2b2b; }
.swatch[aria-pressed="true"] { outline: 1px solid #111111; outline-offset: 2px; }
```

### Badges / Tags — Quiet Specimen Labels

```
.badge {
  background: #f7f6f4; color: #111111;
  padding: 4px 10px; border-radius: 0;
  font: 500 12px Graphik; letter-spacing: 0.12em; text-transform: uppercase;
}
.badge--new { background: #111111; color: #ffffff; }
```

Badges are sharp, warm-gray, uppercase specimen labels — "NEW", "FEATURED", "BACK IN STOCK". No saturated brand-color badges; the suitcase palette stays on the products.

### Inputs / Forms — Flat White, Sharp Edges

```
.input {
  background: #ffffff;
  border: 1px solid #111111;
  border-radius: 0;
  padding: 12px 16px;
  font: 400 16px Graphik;
  color: #111111;
}
.input::placeholder { color: #9a9a9a; }
.input:focus { outline: 2px solid #111111; outline-offset: 2px; }
```

Newsletter and search fields are austere — near-black hairline border, no rounding, 16px Graphik to avoid mobile zoom.

### Navigation — Thin, Sentence-Case, Underline-on-Hover

```
.nav { height: 64px; background: #ffffff; border-bottom: 1px solid #e4e2dd; }
.nav__item {
  font: 500 14px Graphik; letter-spacing: 0.02em; color: #111111;
  text-transform: none;
}
.nav__item:hover { text-decoration: underline; text-underline-offset: 4px; }
```

A thin 64px white bar with a hairline bottom border. Over a full-bleed hero, the nav can render transparent with white type; once scrolled, it settles to white-on-near-black.


## 5. Layout Principles

### Spacing System
Base unit **4px**; scale `[0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]`. Sections breathe at 64–96–128px — editorial cadence, not dense retail packing.

### Grid & Container
Page max-width **1440px**; prose column **720px**. Product grids run **4-up at desktop, 2-up at tablet, 1-up at mobile**. Editorial blocks alternate full-bleed image rows with centered copy.

### Whitespace Philosophy
Whitespace is the primary layout tool. Modules are separated by air, not borders. A hero is allowed to occupy the full viewport with a single headline and one CTA — the restraint is the point.

### Section Cadence
The page alternates **full-bleed photographic plates** (hero, lifestyle, "shop the look") with **white copy/grid sections**. The rhythm is image → breathe → grid → breathe — a magazine spread sequenced for scroll.


## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| **None** | 0 | **default everywhere** — buttons, cards, inputs, badges, nav |
| Micro | 2 | rare hairline tooltip / focus chip |
| Small | 4 | rare nested utility element |
| Medium | 8 | reserved (modal corners, rarely used) |
| **Pill** | 9999 | **color swatches only** — the circular suitcase-color dots |

Away's chrome is built on **sharp 0px rectangles**. The single intentional exception is the **circular color swatch**, because that element *is* the suitcase palette made tactile. Anything else round (a pill CTA, a rounded card) would read as foreign to the system. If a new component needs softness, prefer 0; reserve the pill exclusively for the swatch.


## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | flat — `none` | default for cards, buttons, inputs, nav |
| 1 | `0 8px 24px rgba(17, 17, 17, 0.08)` | optional product-card hover lift |
| 4 | `0 24px 64px rgba(17, 17, 17, 0.18)` | modal / cart-drawer overlay |

### Shadow Philosophy
The system is essentially flat. At rest nothing casts a shadow — separation comes from **whitespace, hairlines, and photographic contrast**, not elevation. A faint warm-tinted lift may appear on product-card hover, and a deeper shadow anchors modals and the cart drawer. Shadows are always **warm-tinted** (`rgba(17,17,17,…)`, never pure black), matching the near-black text token.


## 8. Interaction & Motion

- **Easing:** standard `cubic-bezier(0.4, 0, 0.2, 1)` for nearly everything.
- **Durations:** fast `150ms` (button color flips), standard `240ms` (image fades, card hovers), slow `320ms` (drawer / modal entrances).
- **Primary button hover:** white → near-black background, near-black → white text — a clean color inversion, no transform.
- **Outline button hover:** transparent → near-black fill, text flips to white.
- **Product card hover:** optional image cross-fade to an alternate shot (240ms); optional faint shadow lift; no scale transform.
- **Swatch select:** 2px near-black outline appears with a 150ms fade; the card image swaps to the selected colorway.
- **Nav:** underline slides in on hover (4px offset); transparent-over-hero → solid-white transition on scroll.
- **Page transitions:** 240ms cross-fade; full-bleed hero images may use a slow ken-burns drift on load (disabled under reduced motion).
- **Reduced motion:** `prefers-reduced-motion: reduce` honored — image drift and cross-fades are disabled; color-state changes remain (they are instantaneous, not animated movement).


## 9. Accessibility & A11y

Computed contrast against the live-probed tokens (`bg #ffffff`, `text #111111`, `brand #a9c4d4`, CTA white/`#111111`):

- **Text on canvas:** `#111111` on `#ffffff` = **18.1:1** — AAA (well above the 7:1 threshold).
- **CTA label on CTA fill:** `#111111` on `#ffffff` = **18.1:1** — AAA (the white "SHOP NOW" over imagery).
- **CTA hover state:** `#ffffff` on `#111111` = **18.1:1** — AAA.
- **White headline on dark hero plate:** `#ffffff` on `#1a1a1a` ≈ **17.4:1** — AAA (real-world value depends on the photo; a `rgba(0,0,0,0.35)` scrim is applied to guarantee it).
- **Muted meta on canvas:** `#6b6b6b` on `#ffffff` = **5.1:1** — AA for normal text, AAA for large.
- **Brand pastel needs dark text:** `#111111` on `#a9c4d4` (Coast) = **9.6:1** — AAA. Coast must never carry white text — pair it with near-black only.
- **Deep Coast on white:** `#3b5566` on `#ffffff` = **8.0:1** — AAA (use for links/info on pastel-adjacent surfaces).

Patterns:
- **Focus:** 2px solid `#111111` outline with a 2px outset gap — visible on white and on pastel.
- **Swatches:** expose `aria-label` (color name) and `aria-pressed`; selection is not communicated by the outline alone — the name is announced.
- **CTAs over imagery:** always backed by a scrim or a solid fill so contrast never depends on the photograph.
- **Keyboard nav:** full tab order across nav, search, swatches, add-to-bag, and cart drawer; the drawer traps focus and restores it on close.
- **Reduced motion:** image drift / cross-fades disabled; no information conveyed by motion alone.


## 10. Responsive Behavior

| Breakpoint | Width | Behavior |
|-----------|-------|----------|
| Mobile | <640 | 1-up product grid; hero headline 56→34px; nav → hamburger; CTAs full-width |
| Tablet | 640–1024 | 2-up grid; nav condenses; hero ~44px |
| Desktop | 1024–1280 | 4-up grid; inline nav; full editorial cadence |
| Wide | 1280–1440 | content caps at 1440; hero photography bleeds full-viewport |

- **Touch targets:** 44×44 minimum maintained — CTA padding (14×28) and a 44px-tall tap zone on swatches/nav.
- **Hero:** full-bleed at every size; headline scales down but stays weight 400; the single CTA goes full-width on mobile.
- **Cards:** image stays edge-to-edge in its column; swatch row wraps below 4 colors on narrow screens.
- **Images:** `object-fit: cover` full-bleed plates; product shots stay `contain` on white.
- **Nav:** transparent-over-hero on desktop collapses to a solid-white hamburger bar on mobile.


## 11. Content & Voice

### Tone
**Aspirational, calm, grown-up.** Sentence-case headlines, no exclamation points, no urgency theatrics. The copy sells the *feeling* of travel and the confidence of a well-made object — declarative, never hype. Think travel-magazine editor, not flash-sale email.

### Microcopy patterns
- Primary CTA: **"SHOP NOW"** (uppercase, the live hero label)
- Product action: **"ADD TO BAG"** (uppercase, sharp button)
- Out of stock: **"NOTIFY ME"**
- Newsletter: **"SIGN UP"** — terse, no "Join the club!" exclamation
- Empty cart: **"Your bag is empty."** (declarative, sentence case)
- Error: **"Something went wrong. Please try again."** (no exclamation)

### Empty states
Quiet and reassuring — a single line of sentence-case copy plus one sharp CTA back to the catalog. No illustrations or mascots.

### CTA verb conventions
- **Use:** SHOP NOW · ADD TO BAG · EXPLORE · DISCOVER (sparingly) · NOTIFY ME · SIGN UP
- **Avoid:** "Buy now!", urgency ("Last chance", "Selling fast"), emoji, and anything with an exclamation point.


## 12. Dark Mode & Theming

**Light-only.** The white canvas and near-black type are the brand; the dark moments are *photographic hero plates*, not a dark theme. There is no inverted dark-mode storefront — the system would lose the editorial whitespace that defines it. The only legitimate "dark" surface is a full-bleed image plate carrying white type, which is a content treatment, not a theme. Theme switching is not part of the visual language.


## 13. Lineage & Influences

Away launched in 2015 as a venture-backed DTC luggage brand, and from the start it built its identity around three disciplined choices: **one typeface (Graphik), editorial travel photography, and a muted-pastel color story carried entirely by the suitcases themselves.** The chrome stays neutral — pure-white canvas, near-black `#111111` type, sharp `0px` CTAs that are white-on-image in the hero and invert to near-black on hover. This places Away firmly in the **editorial-DTC wave of the mid-2010s** alongside Everlane and the print sensibility of Kinfolk and Cereal: whitespace over chrome, photography over gradients, one sans over a type pairing.

What Away **rejects** is just as defining. No pill buttons. No brand-colored CTAs. No gradients, no drop-shadow-heavy cards, no urgency banners. Where conversion-optimized retail shouts in saturated rounded buttons, Away holds a single sharp white rectangle over a beautiful photograph and lets the muted suitcase palette — Coast, Sand, Olive, Navy, Blush, Cherry — supply all the color. The typographic signature is a **large, low-weight headline** (56px Graphik Regular, not bold) in white over a dark plate: declarative and premium rather than loud. The lineage is luxury-retail restraint (Aesop, Muji) crossed with travel-magazine editorial — a catalog you'd keep on the coffee table.

**Named influences:**
- **Graphik (Commercial Type, Christian Schwartz)** — the single grotesque carrying display, body, and UI; the typographic backbone.
- **Kinfolk** — editorial whitespace and muted-photography lifestyle register.
- **Cereal Magazine** — travel-editorial minimalism and the muted-palette tone.
- **Everlane** — the mid-2010s editorial-DTC chrome (white canvas, sharp buttons, photography-led) that Away runs parallel to.
- **Aesop** — restrained luxury-retail typography and quiet, product-forward chrome.
- **Muji** — neutral-chrome, product-as-color minimalism.


## 14. Do's and Don'ts

### Do
- Set everything in **Graphik** — hero, headings, body, nav, labels. One family only.
- Keep the canvas **pure white `#ffffff`** and type **near-black `#111111`** (live-probed, not pure black).
- Make the hero a **dark photographic plate** with a **white 56px / weight-400** headline — large but light.
- Use **0px-radius** CTAs everywhere; the primary is **white fill + `#111111` text, uppercase "SHOP NOW"**, inverting to near-black on hover.
- Deliver color through the **suitcase pastels** (Coast/Sand/Olive/Navy/Blush/Cherry) and the photography — never the buttons.
- Track button + eyebrow labels **wide (+0.08 to +0.12em)** and set them **UPPERCASE**.
- Keep headlines **sentence case** and tracked slightly tight (−0.01em).
- Reserve the **pill/circle for color swatches only** — the one round element in the system.
- Let **whitespace and hairlines** create separation; keep cards flat and chrome-free.
- Pair the **Coast pastel with near-black text** for contrast — never white-on-Coast.

### Don't
- **Don't** use pill or rounded buttons — every CTA is a sharp rectangle.
- **Don't** paint the CTA brand-blue or any saturated color; the chrome stays white / near-black.
- **Don't** set the hero headline bold — it's weight 400, large and calm.
- **Don't** add gradients, glows, or decorative drop shadows to the chrome.
- **Don't** use pure black `#000000` for body text — the brand text is `#111111`.
- **Don't** put the suitcase pastels on UI furniture (buttons, badges, nav). Keep them on products and swatches.
- **Don't** use exclamation points, urgency banners, or emoji — the voice is calm and editorial.
- **Don't** mix in a second typeface or a display serif — Graphik does all the work.
- **Don't** clutter sections with borders; use air to separate modules.
- **Don't** rely on a photograph alone for CTA contrast — back it with a scrim or solid fill.


## 15. Agent Prompt Guide

### Quick Color Reference
```
Background:        #ffffff   (pure white canvas)
Text:              #111111   (near-black — NOT pure black)
Brand (Coast):     #a9c4d4   (signature pastel — products/accents, not buttons)
CTA fill:          #ffffff   (white "SHOP NOW" over imagery)
CTA text:          #111111
CTA hover fill:    #111111   (inverts; white text)
On image:          #ffffff   (white type over dark hero plate)
Muted text:        #6b6b6b
Border:            #e4e2dd   (hairline)  /  #111111 (strong/focus)
Suitcase pastels:  Coast #a9c4d4 · Sand #e3d9c6 · Olive #9aa07c · Navy #2b3a4a · Blush #e8c9c5 · Cherry #9e2b2b
```

### Example Component Prompts

> **Hero:** "Create a full-bleed travel-luggage hero with a dark photographic background and a `rgba(0,0,0,0.35)` scrim. Place a white Graphik headline at 56px, weight 400 (NOT bold), sentence case, tracked −0.01em. Below it, one sharp rectangular CTA — `0px` radius, white `#ffffff` fill, `#111111` text, uppercase 'SHOP NOW' in 13px Graphik Medium tracked +0.08em — that inverts to near-black background with white text on hover. No pills, no gradients in the chrome."

> **Product card:** "Design a chrome-free product card on white `#ffffff`: full-width photograph, no border or radius, then the product name in 16px Graphik Medium `#111111`, price in 16px Graphik Regular `#111111`, and a row of circular `24px` color swatches (Coast #a9c4d4, Sand #e3d9c6, Olive #9aa07c, Navy #2b3a4a, Blush #e8c9c5, Cherry #9e2b2b). The swatch is the only round element. Optional faint warm shadow `0 8px 24px rgba(17,17,17,0.08)` on hover."

> **Newsletter form:** "Build an austere email signup: white background, a single flat input with a 1px `#111111` border and `0px` radius (16px Graphik), placeholder `#9a9a9a`, and a sharp near-black 'SIGN UP' button (uppercase, +0.08em tracking) that flips to deep Coast `#3b5566` on hover. No rounded corners, no exclamation-point copy."

> **Badge:** "Make a quiet specimen-label badge: warm-gray `#f7f6f4` background, `#111111` text, `0px` radius, 12px Graphik Medium UPPERCASE tracked +0.12em, e.g. 'FEATURED' or 'BACK IN STOCK'. For a 'NEW' badge use near-black `#111111` background with white text. Never use the suitcase pastels on badges."

> **Editorial section:** "Lay out an alternating editorial section: full-bleed lifestyle photograph row, then a centered white copy block with a sentence-case 40px Graphik Medium heading `#111111`, 18px Graphik Regular lead at 1.55 line-height, and an underlined ghost CTA ('EXPLORE', uppercase, +0.08em). Generous 96px vertical spacing; separation by whitespace, not borders."

### Iteration Guide
1. **If it looks too 'startup'**, the buttons are probably rounded or brand-colored — switch to sharp `0px` white/near-black CTAs.
2. **If the hero feels loud**, drop the headline weight to 400 and increase its size; bold is the tell of the wrong register.
3. **If the page feels flat-gray**, you've leaked pastel into the chrome — pull color back onto the products and swatches and keep the UI white/near-black.
4. **If contrast looks off on the hero**, add or deepen the dark scrim — never trust the raw photograph for CTA legibility.
5. **If it reads cluttered**, remove borders and add whitespace; Away separates modules with air, not lines.
6. **If the type feels generic**, confirm Graphik (not Inter/Helvetica) and widen the uppercase label tracking to +0.08–0.12em.
7. **If text looks harsh**, you're using pure black `#000000` — soften to `#111111`.
8. **To shift toward a specific colorway**, lead with one suitcase pastel as the photographed product color (e.g., a Coast suitcase) while keeping every UI element neutral.

---

*Theme-toggle audit: score=0, signals=[none]*
