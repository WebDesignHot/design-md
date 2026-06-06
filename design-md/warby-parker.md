---
name: Warby Parker
tagline: 'Friendly-premium DTC eyewear — white canvas, bright blue + deep navy, fully pill CTAs.'
updated_at: 2026-05-28T23:13:03.700Z
published_at: 2026-05-28T23:13:03.700Z
author: webdesignhot
source_url: https://www.warbyparker.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [retail]
tags: [light, editorial, serif, commerce, eyewear]
preview_swatch: ['#ffffff', '#1050d0', '#072369']
related: [everlane, allbirds, away, casper, glossier]
description: 'Warby Parker''s 2026 storefront is the textbook execution of friendly-premium DTC: a pure-white canvas `#ffffff`, near-black `#121212` text, and a two-tone brand spine of bright cobalt-leaning blue `#1050d0` (rgb 16,80,208) paired with a deep, almost-ink navy `#072369` (rgb 7,35,105). The signature shape move is the **fully-pill CTA** — every primary, secondary, and inverted button carries `border-radius: 100px`, so "Start the quiz" (blue), "Shop eyeglasses" (navy), and "Shop Lenore" (white-on-white outlined) all read as soft capsules rather than the sharp rectangles competitors like Glossier use. Display copy is set in Warby''s **custom serif (fontIvoryLl, an Ivory-class warm transitional serif)** at large sizes — the editorial, optical-shop-heritage register — while the entire UI layer (nav, body, buttons, captions) runs on a clean neutral sans. The result is approachable-luxury: a brand that feels like a well-lit modern optometrist''s showroom rather than a fashion house. Where Glossier 2026 went post-pink Apercu-monolith with 0px rectangles, and Everlane went radical-transparency minimal-gray, Warby Parker stays warm, optimistic, and rounded — serif headline + sans UI + two-blue palette + 100px pills on white.'


# Canonical 8-role aliases (bg / text / brand / border / accent / muted / surface / danger).
# Maps role names to this entry's actual token names so role-aware
# downstream tools resolve `theme.background` → entry's `bg`, etc.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-navy
  muted: text-muted
  border: border
  ring: brand

colors:
  # Page grounds
  bg: '#ffffff'                  # pure white canvas — the dominant surface
  bg-soft: '#f7f7f5'             # warm off-white panel / alternating section band
  bg-deeper: '#f0efe9'           # secondary warm surface (callouts, footers)
  surface: '#ffffff'             # cards sit on white; image carries the product
  surface-soft: '#f7f7f5'
  # Brand — two blues do all the work
  brand: '#1050d0'              # bright cobalt-leaning blue — primary CTA ("Start the quiz")
  brand-hover: '#0d44b0'        # darkened press/hover of the bright blue
  on-brand: '#ffffff'           # white text on blue
  accent-navy: '#072369'        # deep ink navy — secondary CTA ("Shop eyeglasses"), headings accent
  accent-navy-hover: '#05194d'  # darkened press/hover of navy
  on-navy: '#ffffff'            # white text on navy
  # Inverted / outline CTA
  button-light: '#ffffff'       # white CTA on imagery ("Shop Lenore")
  on-button-light: '#121212'    # near-black text on the white CTA
  # Text
  text: '#121212'              # body copy, headlines — near-black, softer than #000
  text-strong: '#072369'        # navy used as an emphatic heading color over white
  text-muted: '#5c5c5c'         # meta, captions, secondary copy
  text-faint: '#8a8a8a'         # disclaimers, helper text
  text-on-brand: '#ffffff'
  link: '#1050d0'               # links inherit the bright brand blue
  link-hover: '#0d44b0'
  selection-bg: '#cfe0fb'       # pale-blue text selection wash
  # Borders & dividers
  border: '#e2e1da'             # warm hairline dividers, card outlines
  border-strong: '#121212'      # outlined-button border, focus emphasis on white
  border-input: '#bdbcb4'       # input resting border
  # Semantic
  success: '#0f8a4f'            # in-stock / confirmation green
  warning: '#b06a00'            # low-stock / caution amber
  danger: '#c0331f'             # form error / removal red
  info: '#1050d0'               # informational — reuses brand blue

typography:
  display:
    family: '"fontIvoryLl", "Ivory", "Tiempos", "Freight Display", Georgia, "Times New Roman", serif'
    weights: [500, 600, 700]
  body:
    family: '"Proxima Nova", "Helvetica Neue", "Inter", system-ui, -apple-system, "Segoe UI", Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    display-lg:      { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    h1:              { size: 40, weight: 700, lineHeight: 1.1,  tracking: '-0.018em', family: display }
    h2:              { size: 32, weight: 600, lineHeight: 1.2,  tracking: '-0.012em', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.3,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    button:          { size: 16, weight: 600, lineHeight: 1.0,  tracking: '0',        family: body }
    nav:             { size: 15, weight: 500, lineHeight: 1.2,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  pill: 100

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96]

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
  card: '0 1px 2px rgba(7, 35, 105, 0.06)'
  card-hover: '0 8px 24px rgba(7, 35, 105, 0.12)'
  modal: '0 24px 64px rgba(7, 35, 105, 0.22)'

accessibility:
  contrast-text-on-bg: 17.4
  contrast-on-brand-on-brand: 6.0
  contrast-on-navy-on-navy: 14.2
  focus-ring: '2px solid #1050d0 + 2px offset gap'
  reduced-motion-honored: true

components:
  button-primary:   { bg: brand, text: on-brand, padding: '14px 28px', radius: 100, font: button, hover-bg: brand-hover }
  button-secondary: { bg: accent-navy, text: on-navy, padding: '14px 28px', radius: 100, font: button, hover-bg: accent-navy-hover }
  button-light:     { bg: button-light, text: on-button-light, padding: '14px 28px', radius: 100, font: button, border: '1px solid border-strong' }
  button-ghost:     { bg: transparent, text: text, padding: '14px 28px', radius: 100, border: '1px solid border-strong', hover-bg: bg-soft }
  card:             { bg: surface, border: '1px solid border', radius: 12, padding: 24, shadow: card }
  input:            { bg: bg, border: '1px solid border-input', text: text, radius: 8, padding: '12px 14px', focus-border: brand }
  badge:            { bg: bg-deeper, text: text-strong, radius: 100, padding: '4px 12px', font: caption }
  nav:              { bg: bg, text: text, font: nav, height: 64, border-bottom: '1px solid border' }

lineage:
  summary: 'Warby Parker launched in 2010 as one of the founding direct-to-consumer brands — a Wharton-incubated startup that cut out the optical-retail middleman (then near-monopolized by Luxottica) and sold designer-quality glasses online at one price with a Home Try-On program and a Buy a Pair, Give a Pair social mission. The brand identity from the start borrowed from literary-prep heritage: the name itself is stitched from two Jack Kerouac journal characters (Zagg Parker and Warby Pepper), and the early visual language leaned on bookish serif type, library/reading-room photography, and a warm, witty, never-stuffy voice. The 2026 storefront keeps that DNA but modernizes it into a clean DTC system: a pure-white canvas, a custom warm serif (fontIvoryLl, an Ivory-class transitional serif) reserved for editorial display, a neutral sans for the entire UI layer, and a two-blue palette — bright cobalt `#1050d0` for primary action and a deep ink navy `#072369` for secondary weight. The defining shape choice is the fully-pill CTA (`border-radius: 100px`), which makes every button feel soft, friendly, and approachable rather than corporate-sharp. Where Glossier 2026 retired warmth from its chrome into pure Apercu-on-white rectangles, and Everlane pursued radical-transparency gray minimalism, Warby Parker holds the friendly-premium middle: optimistic blue, warm white, serif-headline editorial, and rounded capsules. It reads as the trustworthy, well-designed modern optical shop — the exact register that made it the prototype the entire 2010s DTC wave imitated.'
  influences:
    - { name: 'Jack Kerouac (literary namesake — Zagg Parker / Warby Pepper)', role: 'bookish-prep brand heritage and witty literary voice', url: 'https://en.wikipedia.org/wiki/Jack_Kerouac' }
    - { name: 'Everlane', role: 'contemporary radical-transparency DTC peer on white', url: 'https://www.everlane.com/' }
    - { name: 'Glossier', role: 'DTC-on-white minimal-chrome contemporary it reads against', url: 'https://www.glossier.com/' }
    - { name: 'Allbirds', role: 'friendly-premium DTC with rounded, approachable chrome', url: 'https://www.allbirds.com/' }
    - { name: 'Tiempos / Klim Type Foundry', role: 'warm transitional-serif editorial register the display type belongs to', url: 'https://klim.co.nz/retail-fonts/tiempos-text/' }
    - { name: 'IBM / Massimo Vignelli prep-modernism', role: 'restrained American modernist grid + serif heritage tonal target', url: 'https://en.wikipedia.org/wiki/Massimo_Vignelli' }
---


## 1. Visual Theme & Atmosphere

Warby Parker's 2026 storefront is the textbook execution of **friendly-premium direct-to-consumer**: a system engineered to feel like a well-lit modern optical showroom rather than a fashion house or a tech startup. The canvas is pure white `#ffffff`, body copy is a soft near-black `#121212` (deliberately not pure `#000000` — the slightly-warm dark reads gentler), and the whole identity rests on a **two-blue spine**: a bright, optimistic, cobalt-leaning blue `#1050d0` (rgb 16, 80, 208) for primary action, and a deep, almost-ink navy `#072369` (rgb 7, 35, 105) for secondary weight and emphasis. Blue is the brand's emotional anchor — it signals trust, clarity, and a clinical-but-warm optical heritage all at once.

The single most recognizable move is the **fully-pill CTA**. Every button — primary, secondary, and the inverted white variant — carries `border-radius: 100px`. "Start the quiz" is a bright-blue capsule, "Shop eyeglasses" is a navy capsule, and "Shop Lenore" is a white-on-image outlined capsule. Nothing is a sharp rectangle. This rounding is the source of the brand's approachability: where Glossier 2026 committed to 0px rectangles as austere chrome, Warby leans the opposite direction — soft, rounded, inviting capsules that say *try this, it's easy*.

Typography splits cleanly into two registers. Display headlines run on Warby's **custom serif (fontIvoryLl, an Ivory-class warm transitional serif)** — the editorial, bookish, optical-shop-heritage voice that nods to the brand's literary namesake (the name itself is stitched from two Jack Kerouac journal characters). The entire UI layer — navigation, body copy, buttons, captions, form labels — runs on a **clean neutral sans**. Serif for the story, sans for the interface. This is the inverse of the all-sans monolith trend; the serif is what keeps Warby feeling premium and considered rather than generic-DTC.

Atmospherically, the site is warm, optimistic, and uncluttered. Sections breathe with generous whitespace; product photography is bright and clean against white or soft warm-gray bands `#f7f7f5`; lifestyle imagery shows real faces wearing the frames in good light. There's wit in the copy but never snark; there's polish but never coldness. The whole thing is calibrated to lower the anxiety of buying glasses online — the hardest thing Warby ever had to solve — by making the experience feel friendly, trustworthy, and a little bit fun.

Where Glossier 2026 went post-pink Apercu-monolith on white, and Everlane pursued radical-transparency minimal-gray, Warby Parker holds the **friendly-premium center**: bright blue + deep navy, warm white, serif-headline editorial, sans UI, and 100px pill capsules everywhere.

**Key Characteristics:**
- Pure white canvas `#ffffff`
- Soft near-black text `#121212` (not pure black — gentler, warmer)
- Two-blue brand spine: bright cobalt `#1050d0` (primary) + deep navy `#072369` (secondary)
- **Fully-pill CTAs** — `border-radius: 100px` on every button variant
- Custom warm serif (fontIvoryLl / Ivory-class) for display headlines only
- Clean neutral sans for 100% of the UI layer (nav, body, button, label)
- Warm off-white section bands `#f7f7f5` / `#f0efe9` instead of cold grays
- White inverted/outlined CTA variant for use over imagery
- Generous whitespace; bright, clean product photography
- Friendly-premium register — approachable, witty, never cold or stuffy
- Blue links inheriting the bright brand color `#1050d0`
- Trust-first chrome calibrated to de-risk buying eyewear online


## 2. Color Palette & Roles

### Primary / Canvas
- **Background** `#ffffff` [→ `bg`]: pure white. The dominant surface across every page.
- **Bg Soft** `#f7f7f5` [→ `bg-soft`]: warm off-white — alternating section bands, light panels, callouts.
- **Bg Deeper** `#f0efe9` [→ `bg-deeper`]: secondary warm surface for footers, feature blocks, badge fills.
- **Surface** `#ffffff` [→ `surface`]: card background; the photograph carries the product, the white frame keeps it clean.

### Brand — The Two Blues
- **Brand** `#1050d0` [→ `brand`]: bright cobalt-leaning blue. Primary CTA fill ("Start the quiz"), links, focus ring, info accent.
- **Brand Hover** `#0d44b0` [→ `brand-hover`]: darkened bright blue for hover/press of the primary CTA.
- **On-Brand** `#ffffff` [→ `on-brand`]: white text on the bright blue.
- **Accent Navy** `#072369` [→ `accent-navy`]: deep ink navy. Secondary CTA fill ("Shop eyeglasses"), emphatic headings, navy-on-white text-strong.
- **Accent Navy Hover** `#05194d` [→ `accent-navy-hover`]: darkened navy for hover/press of the secondary CTA.
- **On-Navy** `#ffffff` [→ `on-navy`]: white text on navy.

### Interactive — Inverted / Outline
- **Button Light** `#ffffff` [→ `button-light`]: white CTA used over photography ("Shop Lenore") with a near-black outline.
- **On Button Light** `#121212` [→ `on-button-light`]: near-black text on the white CTA.

### Neutral / Text
- **Text** `#121212` [→ `text`]: body copy and headlines — soft near-black, deliberately warmer than pure `#000`.
- **Text Strong** `#072369` [→ `text-strong`]: navy used as an emphatic heading color over white.
- **Text Muted** `#5c5c5c` [→ `text-muted`]: meta, captions, secondary copy.
- **Text Faint** `#8a8a8a` [→ `text-faint`]: disclaimers, helper text, fine print.
- **Link** `#1050d0` [→ `link`]: inline links inherit the bright brand blue.
- **Link Hover** `#0d44b0` [→ `link-hover`]: darkened link on hover.

### Borders & Dividers
- **Border** `#e2e1da` [→ `border`]: warm hairline — dividers, card outlines, section rules.
- **Border Strong** `#121212` [→ `border-strong`]: outlined-button border and emphatic separators on white.
- **Border Input** `#bdbcb4` [→ `border-input`]: input resting border (focuses to brand blue).

### Surface Tint / Selection
- **Selection Bg** `#cfe0fb` [→ `selection-bg`]: pale-blue text-selection wash, tonally tied to the brand blue.

### Shadow
- **Card** `0 1px 2px rgba(7, 35, 105, 0.06)`: navy-tinted hairline lift at rest.
- **Card Hover** `0 8px 24px rgba(7, 35, 105, 0.12)`: navy-tinted soft lift on hover.
- **Modal** `0 24px 64px rgba(7, 35, 105, 0.22)`: navy-tinted overlay depth.

### Semantic
- **Success** `#0f8a4f`: in-stock, confirmation, order-placed green.
- **Warning** `#b06a00`: low-stock, caution amber.
- **Danger** `#c0331f`: form error, removal, validation red.
- **Info** `#1050d0`: informational — reuses the brand blue so the palette stays tight.


## 3. Typography Rules

### Font Family — Serif Display, Sans UI

Warby Parker runs a **two-family split**: a custom warm serif for editorial display, and a clean neutral sans for the entire interface. The serif (probed as `fontIvoryLl`, an Ivory-class transitional serif in the Tiempos/Freight family of warm, slightly-condensed editorial faces) appears only at large headline sizes — it carries the brand's bookish, literary, optical-heritage register. Everything functional — nav, body copy, buttons, labels, captions, prices — is set in a clean humanist sans (Proxima-Nova-class), which keeps the UI legible, modern, and unfussy.

```
display: "fontIvoryLl", "Ivory", "Tiempos", "Freight Display", Georgia, "Times New Roman", serif
body:    "Proxima Nova", "Helvetica Neue", "Inter", system-ui, -apple-system, "Segoe UI", Arial, sans-serif
mono:    ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace   (fallback only — rarely used)
```

Display weights: 500, 600, 700. Body weights: 400, 500, 600. The serif is never used below ~20px; the sans is never used above ~24px for headings (h4 and below switch to sans). The handoff line between the two families sits around the h3/h4 boundary — large editorial moments are serif, functional headings are sans.

### Hierarchy

| Token | Size | Weight | Line-height | Tracking | Family | Use |
|-------|------|--------|-------------|----------|--------|-----|
| `display-hero` | 80 | 700 | 1.0 | -0.03em | serif | full-bleed campaign hero |
| `display-lg` | 56 | 700 | 1.05 | -0.02em | serif | section opener / category banner |
| `h1` | 40 | 700 | 1.1 | -0.018em | serif | page title, PDP product name |
| `h2` | 32 | 600 | 1.2 | -0.012em | serif | sub-section headline |
| `h3` | 24 | 600 | 1.25 | -0.005em | serif | card group title, editorial sub-head |
| `h4` | 20 | 600 | 1.3 | 0 | **sans** | functional heading, panel title |
| `body-lg` | 18 | 400 | 1.55 | 0 | sans | lead paragraph, hero subcopy |
| `body` | 16 | 400 | 1.55 | 0 | sans | default body copy |
| `body-sm` | 14 | 400 | 1.5 | 0 | sans | secondary copy, dense lists |
| `button` | 16 | 600 | 1.0 | 0 | sans | CTA label ("Start the quiz") |
| `nav` | 15 | 500 | 1.2 | 0 | sans | top-nav links |
| `label` | 13 | 500 | 1.4 | 0 | sans | form labels, field captions |
| `caption` | 12 | 500 | 1.4 | +0.02em | sans | meta, badges, fine print |
| `price` | 16 | 600 | 1.4 | 0 | sans | product price (sans, semibold) |
| `eyebrow` | 12 | 600 | 1.2 | +0.06em | sans | UPPERCASE section eyebrow |

### Principles

- **Serif carries the story, sans carries the interface.** Never set a CTA, nav item, or form label in the serif. Never set a hero headline in the sans.
- **Tighten display tracking.** Large serif headlines tighten progressively (-0.03em at hero → -0.005em at h3) for an editorial, confident set.
- **Body stays open.** Sans body runs at 1.55 line-height — relaxed and readable, the optical-clarity move.
- **Sentence case for headlines.** Editorial display is sentence case; reserve UPPERCASE for the rare 12px eyebrow only.
- **Semibold for action.** Buttons and prices are weight 600 sans — confident without shouting.
- **Soft near-black, not pure black.** Type color is `#121212`, never `#000000` — keeps the warm, friendly tone.
- **Navy for emphasis.** When a heading needs extra weight on white, color it navy `#072369` rather than enlarging it.


## 4. Component Stylings

### Buttons — Fully-Pill Capsules

Every button is a `border-radius: 100px` capsule. There are no sharp-cornered buttons anywhere in the chrome. Four variants:

```
/* 1. Primary — bright blue */
.btn-primary {
  background: #1050d0;
  color: #ffffff;
  padding: 14px 28px;
  border-radius: 100px;          /* fully pill */
  font: 600 16px/1.0 "Proxima Nova", sans-serif;
  border: none;
  transition: background 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary:hover { background: #0d44b0; }

/* 2. Secondary — deep navy */
.btn-secondary {
  background: #072369;
  color: #ffffff;
  padding: 14px 28px;
  border-radius: 100px;
  font: 600 16px/1.0 "Proxima Nova", sans-serif;
  border: none;
}
.btn-secondary:hover { background: #05194d; }

/* 3. Light / inverted — white on imagery */
.btn-light {
  background: #ffffff;
  color: #121212;
  padding: 14px 28px;
  border-radius: 100px;
  border: 1px solid #121212;
  font: 600 16px/1.0 "Proxima Nova", sans-serif;
}
.btn-light:hover { background: #f7f7f5; }

/* 4. Ghost / outline — transparent on white */
.btn-ghost {
  background: transparent;
  color: #121212;
  padding: 14px 28px;
  border-radius: 100px;
  border: 1px solid #121212;
  font: 600 16px/1.0 "Proxima Nova", sans-serif;
}
.btn-ghost:hover { background: #f7f7f5; }
```

The primary blue capsule is the highest-intent action ("Start the quiz", "Add to cart"). The navy capsule is the second action of equal importance but different journey ("Shop eyeglasses"). The light capsule lives over photography. The ghost capsule is for tertiary/quiet actions on white. All four share the 100px radius, the 14×28 padding, and the 600-weight sans label.

### Cards — Clean, Lightly-Lifted

```
.card {
  background: #ffffff;
  border: 1px solid #e2e1da;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 2px rgba(7, 35, 105, 0.06);
  transition: box-shadow 240ms, transform 240ms;
}
.card:hover {
  box-shadow: 0 8px 24px rgba(7, 35, 105, 0.12);
  transform: translateY(-2px);
}
```

Product cards are `12px` radius (softer than functional radius, harder than the pill) with a warm hairline border, a navy-tinted hairline shadow at rest, and a gentle lift on hover. Card content stacks: image → product name (h4 sans or h3 serif for hero cards) → frame-color swatches → price (16px sans 600). The shadow tint is navy, not neutral gray — it keeps elevation on-brand.

### Badges / Tags / Pills

```
.badge {
  background: #f0efe9;
  color: #072369;
  border-radius: 100px;         /* pill, matching the CTA language */
  padding: 4px 12px;
  font: 600 12px/1.4 "Proxima Nova", sans-serif;
  letter-spacing: +0.02em;
}
.badge--new   { background: #1050d0; color: #ffffff; }   /* "New" — bright blue */
.badge--sale  { background: #c0331f; color: #ffffff; }   /* "Sale" — danger red */
.badge--stock { background: #0f8a4f; color: #ffffff; }   /* "In stock" — success green */
```

Badges echo the pill language at small scale (`100px` radius). The default badge is warm-neutral with navy text; status badges use the semantic colors. "Home Try-On" and "Eligible" tags are common Warby badge patterns.

### Inputs / Forms

```
.input {
  background: #ffffff;
  border: 1px solid #bdbcb4;
  border-radius: 8px;            /* inputs are softly-rounded, NOT pills */
  padding: 12px 14px;
  font: 400 16px "Proxima Nova", sans-serif;
  color: #121212;
}
.input::placeholder { color: #8a8a8a; }
.input:focus {
  border-color: #1050d0;
  outline: 2px solid #1050d0;
  outline-offset: 2px;
}
.input--error { border-color: #c0331f; }
.field-label { font: 500 13px "Proxima Nova", sans-serif; color: #121212; margin-bottom: 6px; }
```

Inputs use the functional `8px` radius — deliberately *not* pills. The pill is reserved for action buttons; mixing inputs into pills would muddy the hierarchy. Focus flips the border to bright blue and adds a 2px blue ring with a 2px offset. The 16px input font-size prevents iOS zoom-on-focus.

### Navigation

```
.nav {
  height: 64px;
  background: #ffffff;
  border-bottom: 1px solid #e2e1da;
  display: flex; align-items: center;
}
.nav__link {
  font: 500 15px "Proxima Nova", sans-serif;
  color: #121212;
  padding: 0 16px;
}
.nav__link:hover { color: #1050d0; }
.nav__cart-pill { /* a small blue pill count badge */
  background: #1050d0; color: #fff; border-radius: 100px;
  font: 600 12px/1 "Proxima Nova", sans-serif; padding: 2px 8px;
}
```

A clean 64px white nav with a warm hairline bottom border. Links are 15px sans medium in near-black, hovering to bright blue. The cart count rides in a small blue pill. Mega-menus drop on white with warm-gray category panels and lifestyle thumbnails.


## 5. Layout Principles

### Spacing System
Base unit **4px**; scale `[0, 4, 8, 12, 16, 24, 32, 48, 64, 96]`. Component padding clusters at 12–24px; section vertical rhythm runs 48–96px. The system is generous but not extreme — closer to a clean retail catalog than a sparse luxury editorial.

### Grid & Container
Page max-width **1280px**, centered, with comfortable side gutters. Product grids run 4-up at desktop, 3-up at tablet, 2-up at mobile (eyewear thumbnails are wide, so even mobile keeps two columns). Editorial/prose columns cap at **720px** for readability.

### Whitespace Philosophy
White is the active material. Products and faces sit in clean, well-lit white space; alternating warm-gray bands `#f7f7f5` segment the page into digestible chapters without hard dividers. The whitespace lowers purchase anxiety — it reads calm, considered, uncrowded.

### Section Cadence
Pages move in a predictable editorial rhythm: full-bleed serif hero → product grid → benefit/trust band (warm gray) → lifestyle editorial → secondary grid → mission/social-proof footer band. Each band is separated by 64–96px of vertical space or a warm-gray background shift, never by a heavy rule.


## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| **Micro** | 2px | inline chips, tiny indicators |
| **Standard** | 4px | small controls, inline tags |
| **Comfortable** | 8px | **inputs, selects, text fields** |
| **Relaxed** | 12px | **product cards, panels, modals** |
| **Large** | 16px | feature tiles, hero image masks |
| **Pill** | 100px | **all buttons + status badges** |

Warby's radius story has two anchors: a **functional mid-radius** (8–12px) for surfaces and containers, and a **full pill** (100px) for everything that gets clicked. The pill is the brand signature — buttons, status badges, and cart counts. Cards and inputs deliberately stay in the softer-but-not-round 8–12px zone so the pill reads as *action*, not decoration. There are no sharp 0px corners anywhere; even the smallest chip carries at least 2px.


## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | flat | section bands, page background |
| 1 | `0 1px 2px rgba(7, 35, 105, 0.06)` | resting product cards, inputs |
| 2 | `0 8px 24px rgba(7, 35, 105, 0.12)` | card hover, dropdowns, popovers |
| 3 | `0 24px 64px rgba(7, 35, 105, 0.22)` | modals, Home Try-On overlays |

### Shadow Philosophy
Elevation is soft and **navy-tinted**, never neutral-gray or black. Every shadow carries `rgba(7, 35, 105, …)` so depth reads warm and on-brand rather than generic. Cards lift gently on hover (`translateY(-2px)` + a deeper navy shadow) — an inviting, "pick me up" motion that suits a try-on-first brand. The page itself stays flat; depth is reserved for interactive and overlay surfaces.


## 8. Interaction & Motion

- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (Material standard) for nearly everything — a smooth, friendly accelerate-decelerate.
- **Durations:** fast **150ms** (color/border on buttons & links), standard **240ms** (card hover, dropdowns, transforms), slow **320ms** (modals, page-section reveals, Home Try-On panel).
- **Button hover:** background darkens (blue `#1050d0`→`#0d44b0`, navy `#072369`→`#05194d`) over 150ms. No transform — the color shift carries the feedback.
- **Card hover:** `translateY(-2px)` + shadow deepens from level 1 to level 2 over 240ms. Image may swap to an alternate frame angle on PDP cards.
- **Link hover:** color flips to bright blue `#1050d0` over 150ms.
- **Input focus:** border flips to blue + a 2px blue ring fades in over 150ms.
- **Page-section reveals:** subtle fade-up (`opacity 0→1`, `translateY 12px→0`) over 320ms as sections enter the viewport.
- **Modals / Home Try-On:** scale-and-fade in over 320ms with a navy-tinted backdrop wash.
- **Reduced motion:** `prefers-reduced-motion: reduce` is honored — transforms and fade-ups are dropped; only instantaneous color/state changes remain.


## 9. Accessibility & A11y

Computed contrast pairs (from the live tokens):

- **Text on background:** `#121212` on `#ffffff` = **17.4:1** — AAA (exceeds the 7:1 bar at every size).
- **White on brand blue:** `#ffffff` on `#1050d0` = **~6.0:1** — AA for normal text, AAA for large/18px+ and the 16px-600 button label.
- **White on navy:** `#ffffff` on `#072369` = **~14.2:1** — AAA (the navy CTA is the most legible button).
- **Near-black on white CTA:** `#121212` on `#ffffff` = **17.4:1** — AAA.
- **Navy text on white:** `#072369` on `#ffffff` = **~12.0:1** — AAA (the emphatic heading color is safe).
- **Muted meta on white:** `#5c5c5c` on `#ffffff` = **~7.0:1** — AAA for normal text.
- **Faint helper on white:** `#8a8a8a` on `#ffffff` = **~3.5:1** — AA-large only; keep `#8a8a8a` at 14px+ or reserve for non-essential fine print.

Guidance:
- **Focus indicators:** a 2px solid bright-blue `#1050d0` ring with a 2px offset gap on every interactive element. Visible against both white and imagery.
- **ARIA patterns:** the Home Try-On and frame-finder quiz should use `role="dialog"` / `aria-modal="true"` with focus trapping; the lens-prescription forms need explicit `<label>` + `aria-describedby` for helper text and `aria-invalid` on error.
- **Keyboard nav:** full tab order through nav → grid → cart; the quiz advances on Enter; carousels expose prev/next as real buttons.
- **Screen reader hints:** frame-color swatches need `aria-label` ("Crystal" / "Jet Black"); price + "per pair" should be a single accessible string.
- **Reduced motion:** honored site-wide (see §8).


## 10. Responsive Behavior

| Breakpoint | Width | Behavior |
|-----------|-------|----------|
| Mobile | <640px | 2-up product grid; nav → hamburger; hero 80→40px; pill CTAs go full-width |
| Tablet | 640–1024px | 3-up grid; condensed inline nav; hero 56px |
| Desktop | 1024–1280px | 4-up grid; full inline nav + mega-menu |
| Wide | 1280–1536px | 4-up grid centered in 1280 container; extra side gutter |

- **Touch targets:** every pill CTA stays ≥ 44px tall (14px vertical padding + 16px line). On mobile, primary CTAs expand to full container width while keeping the 100px radius.
- **Per-component collapsing:** the mega-menu collapses to an accordion drawer; multi-column footers stack; the frame-finder quiz becomes a single-question-per-screen flow.
- **Image behavior:** product shots are responsive `srcset` against white; lifestyle imagery uses `object-fit: cover` and art-directs to portrait crops on mobile.
- **Container queries:** card internals (swatch row wrapping, price placement) respond to card width rather than viewport, so the same card works in a 2-up and 4-up grid.


## 11. Content & Voice

### Tone
**Friendly, witty, and trustworthy — never stuffy, never snarky.** Warby writes like a smart, well-read friend who happens to know a lot about glasses. Sentences are warm and plain; the brand earns its premium feel through clarity and a light literary wit (a nod to its Kerouac-stitched name), not through luxury posturing.

### Microcopy patterns
- Primary CTA: **"Start the quiz"** / **"Shop eyeglasses"** / **"Add to cart"**
- Try-on: **"Try on at home — free"** (the Home Try-On hook, anxiety-lowering)
- Inverted CTA: **"Shop Lenore"** (frame-name as verb-object — confident, specific)
- Helper: **"Most frames are $95, including prescription lenses."** (price transparency up front)
- Confirmation: **"Nice choice. Your try-on kit is on its way."**

### Empty states
- Empty cart: **"Your cart's looking a little bare. Let's fix that."**
- No results: **"Hmm, no frames match. Try adjusting your filters."**
- Out of stock: **"This one's taking a break. We'll email you when it's back."**

### CTA verb conventions
- **Use:** Start, Shop, Try, Add, Find, Explore, Get started, Take the quiz
- **Avoid:** "Buy now" urgency, "Hurry", "Limited time", "Don't miss out" — pressure tactics break the friendly-premium trust.


## 12. Dark Mode & Theming

**Light-only.** The white canvas is the brand — it reads as the clean, well-lit optical showroom, and the two-blue palette plus warm whites lose their meaning inverted. There is no dark-mode storefront. (Confirmed against the production site: theme-toggle audit returned no dark signals.)


## 13. Lineage & Influences

Warby Parker launched in 2010 as one of the founding direct-to-consumer brands — a Wharton-incubated startup that cut out the optical-retail middleman (then near-monopolized by Luxottica) and sold designer-quality glasses online at one transparent price, with a Home Try-On program and a "Buy a Pair, Give a Pair" social mission. The identity drew from literary-prep heritage from day one: the name is stitched from two Jack Kerouac journal characters (Zagg Parker and Warby Pepper), and the early visual language leaned on bookish serif type, reading-room photography, and a warm, witty, never-stuffy voice. That DNA is exactly what the 2026 storefront preserves and modernizes.

The current system translates the heritage into a clean DTC chrome: a pure-white canvas, a custom warm serif (fontIvoryLl, an Ivory-class transitional serif in the Tiempos/Freight family) reserved for editorial display, a neutral humanist sans for the entire UI, and a two-blue palette — bright cobalt `#1050d0` for primary action, deep ink navy `#072369` for secondary weight. The fully-pill CTA (`100px`) is what makes the whole thing feel friendly rather than corporate. Where Glossier 2026 retired warmth into Apercu-on-white 0px rectangles, and Everlane pursued radical-transparency gray minimalism, Warby holds the friendly-premium middle and, in doing so, remains the prototype the entire 2010s DTC wave imitated.

**Named influences:**
- **Jack Kerouac (literary namesake)** — the brand name and its bookish, witty, literary voice trace directly to two characters in Kerouac's journals.
- **Everlane** — contemporary radical-transparency DTC peer working the same white-canvas, clear-pricing territory.
- **Glossier** — DTC-on-white minimal-chrome contemporary; Warby reads warm-and-rounded against Glossier's austere rectangles.
- **Allbirds** — friendly-premium DTC sibling with the same rounded, approachable, trust-first chrome.
- **Tiempos / Klim Type Foundry** — the warm transitional-serif editorial register the display type belongs to.
- **Massimo Vignelli / American prep-modernism** — restrained modernist grid + serif heritage as the tonal target for "considered but warm."


## 14. Do's and Don'ts

### Do
- Use the **two-blue spine**: bright cobalt `#1050d0` for the single highest-intent CTA, deep navy `#072369` for the secondary action.
- Make **every button a 100px pill** — primary, secondary, light, and ghost variants all share the full radius.
- Set display headlines in the **warm serif** and the entire UI layer in the **clean sans** — serif for story, sans for interface.
- Keep text the **soft near-black `#121212`**, never pure `#000000`.
- Use **warm off-whites `#f7f7f5` / `#f0efe9`** for section bands, not cold neutral grays.
- Tint shadows **navy** (`rgba(7,35,105,…)`) so elevation stays on-brand.
- Keep **inputs at 8px radius** — softly rounded but not pills, so the pill stays the action signal.
- Lead with **price transparency and Home Try-On** copy to lower purchase anxiety.
- Use **sentence case** for headlines; reserve UPPERCASE for the rare 12px eyebrow.
- Let products and faces breathe in **generous white space**.

### Don't
- **Don't** use sharp 0px-radius buttons — every CTA is a pill. Sharp corners read as the wrong (Glossier/austere) brand.
- **Don't** set CTAs, nav, or form labels in the serif — the serif is display-only.
- **Don't** set hero headlines in the sans — the sans is interface-only.
- **Don't** substitute a different blue. The two brand blues are exactly `#1050d0` and `#072369`.
- **Don't** use pure black `#000000` for text or pure-gray for shadows — both break the warm tone.
- **Don't** make inputs into pills — that collapses the hierarchy between fields and actions.
- **Don't** use urgency/pressure copy ("Hurry", "Limited time") — it breaks friendly-premium trust.
- **Don't** crowd the layout — anxiety-lowering whitespace is part of the conversion strategy.
- **Don't** use cold gray section bands — bands are warm off-white.
- **Don't** add a dark mode — the white canvas is the brand.


## 15. Agent Prompt Guide

### Quick Color Reference
- Background: `#ffffff`
- Text: `#121212`
- Brand (primary CTA blue): `#1050d0`
- Accent (secondary CTA navy): `#072369`
- On-brand / on-navy text: `#ffffff`
- Section band (warm off-white): `#f7f7f5`
- Border (warm hairline): `#e2e1da`
- Muted text: `#5c5c5c`
- Link: `#1050d0`
- Success / Danger: `#0f8a4f` / `#c0331f`

### Example Component Prompts

> **Create a hero** — "Build a Warby-Parker-style landing hero. Pure white background `#ffffff`. Headline in a warm serif (Tiempos/Ivory-class), 56–80px, weight 700, sentence case, tracked -0.02em, color `#121212`. Subcopy in a clean sans, 18px, color `#5c5c5c`. Two fully-pill CTAs side by side: primary `#1050d0` bright-blue capsule 'Start the quiz' and secondary `#072369` navy capsule 'Shop eyeglasses' — both `border-radius: 100px`, 14×28 padding, white 16px/600 sans labels. Friendly, optimistic, trust-first."

> **Design a product card** — "Warby-Parker eyewear card on white. 12px radius, 1px `#e2e1da` border, navy-tinted hairline shadow `0 1px 2px rgba(7,35,105,0.06)`. Stack: frame photo on white → product name (20px sans 600) → a row of round color swatches → price '16px sans 600' reading '$95'. On hover: lift `translateY(-2px)` and deepen the navy shadow. No sharp corners."

> **Build a CTA set** — "Four Warby-Parker pill buttons, all `border-radius: 100px`, 14×28 padding, 16px/600 sans: (1) primary bright-blue `#1050d0` white text, hover `#0d44b0`; (2) secondary navy `#072369` white text, hover `#05194d`; (3) light/inverted white `#ffffff` with `#121212` text and a 1px near-black border for use over imagery; (4) ghost transparent with a 1px `#121212` border on white."

> **Design a form** — "Warby-Parker prescription-entry form on white. Inputs at 8px radius (NOT pills), 1px `#bdbcb4` border, 12×14 padding, 16px sans, placeholder `#8a8a8a`. Labels 13px/500 sans `#121212`. Focus: border + 2px ring in `#1050d0`, 2px offset. Submit is a full-pill blue capsule. Lead with helper copy 'Most frames are $95, including prescription lenses.'"

> **Build a section band** — "Warby-Parker benefit band on warm off-white `#f7f7f5`, 96px vertical padding. Three columns: icon → serif sub-head (24px) → sans body (16px `#5c5c5c`). Center a navy pill CTA. Generous whitespace, no hard dividers."

### Iteration Guide
1. **Start from the two blues.** If the design feels off-brand, check that the primary action is bright `#1050d0` and the secondary is deep navy `#072369` — nothing else carries brand color.
2. **Pill-check every button.** If any button isn't `border-radius: 100px`, fix it first — the full pill is the single most recognizable Warby trait.
3. **Verify the serif/sans split.** Headlines must be serif; everything clickable or functional must be sans. Mixing them is the most common failure.
4. **Warm the neutrals.** Swap any cold `#f5f5f5`/`#000000`/gray-shadow for the warm equivalents (`#f7f7f5`, `#121212`, navy-tinted shadows).
5. **Add whitespace before adding elements.** If a layout feels cramped or anxious, increase section padding to 64–96px rather than shrinking content.
6. **Soften the copy.** Replace any urgency or pressure language with friendly, transparent, witty phrasing — and surface price/try-on early.
7. **Keep inputs at 8px.** If inputs crept up to the pill radius, pull them back to 8px so the pill reads exclusively as *action*.

---

*Theme-toggle audit: score=0, signals=[none]*
