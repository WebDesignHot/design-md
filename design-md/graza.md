---
name: Graza
tagline: Squeeze-bottle olive-oil DTC — quirky GT Alpina Typewriter on peachy-cream, olive type, chartreuse-lime CTAs at 32px.
updated_at: 2026-05-29T21:45:33.013Z
published_at: 2026-05-29T21:45:33.013Z
author: webdesignhot
source_url: https://www.graza.co
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [retail]
tags: [light, bold, playful, food, commerce]
preview_swatch: ['#f6e6d9', '#d1e030', '#3c422e']
related: []
description: 'Graza''s storefront is the squeeze-bottle olive-oil brand rendered as a website: a warm peachy-cream `#f6e6d9` canvas, olive-green `#3c422e` text, and a signature chartreuse-lime `#d1e030` — the exact green of the squeeze bottle — driving every CTA. The whole thing is set in **GT Alpina Typewriter**, a quirky, slightly clattery serif that gives the brand its handmade, modern-pantry voice; a clean Apercu sans handles secondary structural copy. Buttons are generously rounded at `32px` (nearly pill) and carry olive text on lime, bordered in the same olive — a high-energy, foodie, anti-corporate register. Color does the talking: peachy-cream ground, olive ink, and pops of lime, mint-accent `#9eef80`, and marigold `#fbd535` that read like a stocked Mediterranean pantry. Where most DTC food brands play it safe with white-and-sans minimalism, Graza is loud, warm, and tactile — the digital equivalent of a kitchen-counter bottle you actually want to squeeze. The result is playful and confident: editorial enough to feel premium, kitschy-typewriter enough to feel like a friend who really cares about good oil.'


# Canonical 8-role aliases (bg / text / brand / border / accent / muted / surface / danger).
# Maps role names to this entry's actual token names so role-aware
# downstream tools resolve `theme.background` → entry's `bg`, etc.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-mint
  muted: text-muted
  border: border
  ring: brand

colors:
  # Page grounds
  bg: '#f6e6d9'                  # peachy-cream canvas — the dominant warm surface (--color-background, live-probed)
  bg-soft: '#fff4ec'             # lighter cream highlight panel / CTA chrome (--color-highlight)
  bg-deeper: '#e8d6c8'           # deeper peach shading for nested modules (--oke-shadingColor)
  # Surfaces
  surface: '#fff4ec'             # cream card / module background
  surface-soft: '#f6e6d9'        # quiet card matching the canvas
  # Brand — Graza's signature squeeze-bottle chartreuse-lime
  brand: '#d1e030'               # CHARTREUSE-LIME — the squeeze-bottle green; every CTA (--color-brand / --oke-button-backgroundColor, live-probed)
  brand-ink: '#3c422e'           # olive label/text + border on the lime button (--oke-button-textColor)
  on-brand: '#3c422e'            # olive text on lime — the live button pairing, never white
  # Accents — the stocked-pantry pops
  accent-mint: '#9eef80'         # bright mint-green accent (--color-accent)
  accent-yellow: '#fbd535'       # marigold / golden-oil yellow secondary (--color-secondary)
  accent-stroke: '#9fcd7a'       # soft green outline / stroke color (--color-stroke)
  # CTA — live-probed cart pill + primary button
  cta-bg: '#d1e030'              # chartreuse-lime fill on primary CTAs
  cta-text: '#3c422e'            # olive label on the lime CTA
  cta-cart-bg: '#fff4ec'         # cream cart pill fill (live-probed header cart)
  cta-cart-text: '#3c422e'       # olive cart label
  # Text
  text: '#3c422e'                # body + headings — olive green (--color-text, live-probed)
  text-muted: '#6b6f5d'          # softened olive for meta, captions, secondary copy
  text-faint: '#9a9b8a'          # disclaimer / utility olive-gray
  link: '#3c422e'                # inline links match olive body
  link-hover: '#d1e030'          # links flush to chartreuse on hover
  # Borders & dividers
  border: '#3c422e'              # olive hairline / button + input border (--oke-border-color, live-probed)
  border-soft: '#9fcd7a'         # soft green stroke for quiet dividers (--color-stroke)
  border-faint: '#e8d6c8'        # faintest peach divider
  # Semantic
  success: '#5a8a3c'             # deepened pantry green
  warning: '#fbd535'             # marigold (shares the secondary accent)
  danger: '#b3472d'             # warm terracotta error, tuned to the peach world
  info: '#3c422e'                # olive — informational notes match body

typography:
  display:
    family: '"GT Alpina Typewriter", "Courier New", ui-monospace, serif'
    weights: [400, 500, 600]
  body:
    family: '"GT Alpina Typewriter", "Courier New", ui-monospace, serif'
    weights: [400, 500, 600]
  structural:
    family: 'Apercu, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 600, lineHeight: 1.0,  tracking: '-0.02em',  family: display }
    display-lg:      { size: 56, weight: 600, lineHeight: 1.05, tracking: '-0.015em', family: display }
    h1:              { size: 40, weight: 600, lineHeight: 1.1,  tracking: '-0.01em',  family: display }
    h2:              { size: 32, weight: 500, lineHeight: 1.15, tracking: '0',        family: display }
    h3:              { size: 24, weight: 500, lineHeight: 1.25, tracking: '0',        family: display }
    h4:              { size: 20, weight: 500, lineHeight: 1.3,  tracking: '0',        family: structural }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    button:          { size: 15, weight: 500, lineHeight: 1.0,  tracking: '0.01em',   family: display }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.2,  tracking: '0.14em',   family: structural }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: structural }
    caption:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0.02em',   family: structural }

radius:
  micro: 4
  sm: 8
  md: 12
  lg: 20
  xl: 32
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
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
  card-hover: '0 8px 24px rgba(60, 66, 46, 0.10)'
  button: '0 2px 0 rgba(60, 66, 46, 0.18)'
  modal: '0 24px 64px rgba(60, 66, 46, 0.20)'

accessibility:
  contrast-text-on-bg: 8.57
  contrast-text-on-brand: 7.17
  contrast-on-cream: 9.65
  focus-ring: '2px solid #3c422e + 2px outset gap'
  reduced-motion-honored: true

components:
  button-primary:   { bg: brand, text: on-brand, border: '2px solid border', padding: '12px 24px', radius: 32, font: button, hover-bg: brand }
  button-cream:     { bg: cta-cart-bg, text: cta-cart-text, border: '2px solid border', padding: '12px 24px', radius: 32, font: button }
  button-outline:   { bg: transparent, text: text, border: '2px solid border', padding: '11px 23px', radius: 32, font: button }
  button-ghost:     { bg: transparent, text: text, padding: '12px 20px', radius: 32, font: button }
  card:             { bg: surface, border: '2px solid border', radius: 20, padding: 24 }
  input:            { bg: bg-soft, border: '2px solid border', text: text, radius: 12, padding: '12px 16px', focus-border: brand }
  badge:            { bg: brand, text: on-brand, radius: pill, padding: '4px 12px', font: eyebrow }
  pill-cart:        { bg: cta-cart-bg, text: cta-cart-text, border: '2px solid border', radius: pill, padding: '8px 16px' }

lineage:
  summary: 'Graza launched in 2022 as a DTC olive-oil brand built on one tactile idea — a squeeze bottle of fresh, high-quality oil you keep on the counter — and its website translates that idea directly into chrome. The palette is the bottle: a peachy-cream `#f6e6d9` canvas (the label), olive-green `#3c422e` ink (the type and brand mark), and a signature chartreuse-lime `#d1e030` — the exact squeeze-bottle green — driving every CTA. The typographic move that defines the brand is GT Alpina Typewriter (Grilli Type): a quirky, slightly clattery serif with typewriter rhythm that makes the whole site feel handmade, warm, and a little irreverent, set against a clean Apercu sans that carries the structural/secondary copy. Buttons are generously rounded at `32px` — nearly pill — with olive text on lime and a matching olive border, a high-energy foodie register that rejects the white-and-Helvetica minimalism most premium-food brands default to. Graza sits with the new wave of loud, characterful CPG-DTC brands — Liquid Death, Magic Spoon, Olipop, Omsom — that win by being warm, opinionated, and instantly recognizable rather than tastefully neutral. The lineage is modern-pantry maximalism crossed with editorial discipline: color and a single weird typeface do the work, and the chrome is unapologetically playful.'
  influences:
    - { name: 'GT Alpina (Grilli Type)', role: 'quirky typewriter-serif display + body family carrying the brand voice', url: 'https://www.grillitype.com/typeface/gt-alpina' }
    - { name: 'Liquid Death', role: 'loud, irreverent CPG-DTC branding that wins on personality over neutral minimalism', url: 'https://liquiddeath.com/' }
    - { name: 'Magic Spoon', role: 'playful, color-saturated food-DTC chrome with rounded, candy-like CTAs', url: 'https://magicspoon.com/' }
    - { name: 'Olipop', role: 'warm retro-pantry palette and characterful soda-brand identity', url: 'https://drinkolipop.com/' }
    - { name: 'Omsom', role: 'bold, saturated pantry-brand color and confident food-DTC voice', url: 'https://omsom.com/' }
    - { name: 'Gimlet (Gretel / Studio brand work)', role: 'maximalist food-and-flavor branding with quirky display type', url: 'https://gretelny.com/' }
---


## 1. Visual Theme & Atmosphere

Graza's storefront is the squeeze bottle rendered as a website. Open the page and the first thing that lands is the **warm peachy-cream `#f6e6d9` canvas** — not white, not off-white, but a genuinely sun-warmed peach that reads like the label of the bottle. Olive-green `#3c422e` type sits on top of it, and the whole composition is set in **GT Alpina Typewriter** (Grilli Type): a quirky, slightly clattery serif with a typewriter cadence that immediately signals *handmade, opinionated, fun*. Before you read a word, the page has already told you this is a brand with a personality, not a faceless premium-food shop.

The defining decision is **where the energy comes from: the chartreuse-lime**. `#d1e030` is the exact green of the squeeze bottle, and it drives every CTA on the site. Buttons carry olive `#3c422e` text on that lime fill, ringed in a matching olive border, with corners rounded to a generous **`32px`** — nearly a pill, soft and grabbable like the bottle cap. This is the brand's voltage. Against the calm peach ground and olive ink, the lime pops like a fresh herb on a plate. Nowhere is the green muted or corporate-ized; it's the real thing, full saturation, the squeeze.

Typographically the register is **playful-editorial**. GT Alpina Typewriter does the display and body work, giving headlines a charming clatter, while a clean **Apercu** sans handles structural and secondary copy — the small labels, eyebrows, and utility text that need to read crisply. The contrast between the quirky serif and the neutral sans is intentional: the serif is the voice, the sans is the scaffolding. Body copy runs at a comfortable 16px with a generous **1.55 line-height**, so the page reads warm and unhurried, like a friend explaining why this oil is better.

The **shape language is round and tactile**. Where a brand like Away holds hard `0px` corners, Graza does the opposite — `32px` CTAs, `20px` cards, soft `12px` inputs. Everything feels squeezable. Borders are present and confident: olive `2px` strokes outline buttons and cards, giving the chrome a hand-drawn, sticker-like quality rather than a flat shadow-based depth. The brand wants to feel like a physical object you could pick up off the counter.

Atmospherically, Graza belongs to the **loud CPG-DTC wave** — Liquid Death, Magic Spoon, Olipop, Omsom — brands that won by being warm, weird, and instantly recognizable instead of tastefully neutral. It's a stocked Mediterranean pantry: peachy-cream, olive, lime, mint-accent `#9eef80`, marigold `#fbd535`. The mood is foodie, confident, and a little irreverent — premium oil with a sense of humor.

**Key Characteristics:**
- Peachy-cream canvas `#f6e6d9` (live-probed) — warm, label-like, never white
- Olive-green `#3c422e` type for body, headings, borders, and brand mark (live-probed)
- Signature chartreuse-lime `#d1e030` — the squeeze-bottle green — on every CTA (live-probed)
- **GT Alpina Typewriter** quirky serif for display + body; **Apercu** sans for structural/secondary copy
- Generously rounded **`32px`** CTAs — olive text on lime, ringed in a matching olive `2px` border
- Confident `2px` olive outlines on buttons and cards — sticker-like, not shadow-based depth
- Pantry-pop accents: mint `#9eef80`, marigold `#fbd535`, soft green stroke `#9fcd7a`
- Comfortable 16px body at 1.55 line-height — warm, unhurried reading rhythm
- Tactile, squeezable shape language — everything rounds, nothing is sharp
- Playful, foodie, modern-pantry register — loud and characterful by design


## 2. Color Palette & Roles

### Primary / Canvas
- **Background** `#f6e6d9` [→ `bg`]: peachy-cream — the dominant warm canvas (live-probed `--color-background`).
- **Bg Soft** `#fff4ec` [→ `bg-soft`]: lighter cream highlight for panels, cards, and cart chrome (live-probed `--color-highlight`).
- **Bg Deeper** `#e8d6c8` [→ `bg-deeper`]: deeper peach shading for nested modules (live-probed `--oke-shadingColor`).

### Brand — Chartreuse-Lime (the squeeze)
- **Brand** `#d1e030` [→ `brand`]: chartreuse-lime, the exact squeeze-bottle green; every primary CTA (live-probed `--color-brand`).
- **Brand Ink** `#3c422e` [→ `brand-ink`]: olive label + border on the lime button (live-probed `--oke-button-textColor`).
- **On-Brand** `#3c422e` [→ `on-brand`]: olive text on lime — the live button pairing; **never white on lime**.

### Accents — the stocked-pantry pops
- **Accent Mint** `#9eef80` [→ `accent-mint`]: bright mint-green accent for highlights and tags (live-probed `--color-accent`).
- **Accent Yellow** `#fbd535` [→ `accent-yellow`]: marigold / golden-oil secondary (live-probed `--color-secondary`).
- **Accent Stroke** `#9fcd7a` [→ `accent-stroke`]: soft green outline for quiet borders (live-probed `--color-stroke`).

### CTA — live-probed
- **CTA Bg** `#d1e030` [→ `cta-bg`]: chartreuse-lime fill on the primary button.
- **CTA Text** `#3c422e` [→ `cta-text`]: olive label on the lime CTA.
- **CTA Cart Bg** `#fff4ec` [→ `cta-cart-bg`]: cream fill of the header cart pill (live-probed).
- **CTA Cart Text** `#3c422e` [→ `cta-cart-text`]: olive cart label.

### Text
- **Text** `#3c422e` [→ `text`]: body and headings — olive green (live-probed `--color-text`).
- **Text Muted** `#6b6f5d` [→ `text-muted`]: softened olive for meta, captions, secondary copy.
- **Text Faint** `#9a9b8a` [→ `text-faint`]: disclaimers and utility text.

### Interactive
- **Link** `#3c422e` [→ `link`]: inline links match olive body; underline or weight carries the affordance.
- **Link Hover** `#d1e030` [→ `link-hover`]: flushes to chartreuse on hover (use carefully — lime is low-contrast on peach; reserve for already-underlined links).

### Borders & Dividers
- **Border** `#3c422e` [→ `border`]: olive `2px` stroke on buttons, cards, and inputs (live-probed `--oke-border-color`).
- **Border Soft** `#9fcd7a` [→ `border-soft`]: soft green stroke for quiet dividers (live-probed `--color-stroke`).
- **Border Faint** `#e8d6c8` [→ `border-faint`]: faintest peach divider.

### Semantic
- **Success** `#5a8a3c` [→ `success`]: deepened pantry green for confirmations / in-stock.
- **Warning** `#fbd535` [→ `warning`]: marigold (shares the secondary accent) for caution / low-stock.
- **Danger** `#b3472d` [→ `danger`]: warm terracotta error, tuned to live inside the peach world (not a clashing pure red).
- **Info** `#3c422e` [→ `info`]: olive — informational notes match the body color.


## 3. Typography Rules

### Font Family — Quirky Serif + Clean Sans

Graza runs a deliberate two-family system. **GT Alpina Typewriter** (Grilli Type) is the *voice* — a quirky, slightly clattery serif with typewriter rhythm that carries the hero, headings, and body, giving the brand its handmade, modern-pantry character. **Apercu** is the *scaffolding* — a clean, neutral grotesque that handles structural and secondary copy: eyebrows, small labels, utility text, and the occasional sub-heading where the typewriter serif would feel too loud at small sizes.

```
display:    "GT Alpina Typewriter", "Courier New", ui-monospace, serif
body:       "GT Alpina Typewriter", "Courier New", ui-monospace, serif
structural: Apercu, system-ui, -apple-system, sans-serif
mono:       ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace   (utility only)
```

Loaded weights cluster at **400 / 500 / 600**. The hero display goes to 600 for presence, but the typewriter serif keeps its character even when bold — it never reads as a generic heavy sans. The Apercu sans stays at 400/500 for crisp small text.

### Hierarchy — Playful Editorial Scale

| Token | Size | Weight | Tracking | Family | Case | Use |
|-------|------|--------|----------|--------|------|-----|
| `display-hero` | 80 | 600 | -0.02em | GT Alpina Typewriter | sentence | big landing headline |
| `display-lg` | 56 | 600 | -0.015em | GT Alpina Typewriter | sentence | secondary feature headline |
| `h1` | 40 | 600 | -0.01em | GT Alpina Typewriter | sentence | section / PDP title |
| `h2` | 32 | 500 | 0 | GT Alpina Typewriter | sentence | sub-section heading |
| `h3` | 24 | 500 | 0 | GT Alpina Typewriter | sentence | module heading |
| `h4` | 20 | 500 | 0 | Apercu | sentence | card / spec heading |
| `body-lg` | 18 | 400 | 0 | GT Alpina Typewriter | sentence | lead paragraphs |
| `body` | 16 | 400 | 0 | GT Alpina Typewriter | sentence | default body (live-probed, 1.55 line-height) |
| `body-sm` | 14 | 400 | 0 | GT Alpina Typewriter | sentence | secondary copy, fine print |
| `button` | 15 | 500 | +0.01em | GT Alpina Typewriter | sentence | "Add to cart", "Shop" |
| `eyebrow` | 12 | 500 | +0.14em | Apercu | UPPERCASE | section labels, "NEW" |
| `label` | 13 | 500 | +0.02em | Apercu | sentence | form labels, swatch names |
| `caption` | 12 | 400 | +0.02em | Apercu | sentence | image captions, meta |
| `nav` | 15 | 500 | 0 | GT Alpina Typewriter | sentence | primary nav items |
| `price` | 16 | 500 | 0 | GT Alpina Typewriter | sentence | product price |
| `quote` | 28 | 400 | 0 | GT Alpina Typewriter | sentence | pull-quotes / testimonials |

### Principles

- **Let the typewriter serif be the voice.** GT Alpina Typewriter carries display, body, and CTAs; its quirky clatter *is* the brand. Don't sand it down to a neutral sans.
- **Apercu is the quiet scaffold.** Use the clean sans only for eyebrows, small labels, and utility text — places where the serif's character would read as noise.
- **Sentence case almost everywhere.** Headlines and buttons read like a friendly sentence; only eyebrows go UPPERCASE (and widen tracking to +0.14em when they do).
- **Generous body line-height.** 1.55 on 16px gives the page its warm, unhurried, conversational rhythm.
- **Tighten display, leave body neutral.** Big headlines track slightly negative (−0.01 to −0.02em); body stays at 0; small caps labels go wide.
- **Bold is character, not just weight.** The 600 hero still looks like the typewriter face — choose the family before reaching for weight.
- **Prices stay in the serif.** No special tabular price treatment — prices are plain GT Alpina, the same olive as body.


## 4. Component Stylings

### Buttons — Rounded, Bordered, Lime

```
/* Primary: the squeeze-bottle CTA (live-probed) */
.btn-primary {
  background: #d1e030;              /* chartreuse-lime */
  color: #3c422e;                  /* olive label */
  border: 2px solid #3c422e;       /* matching olive ring */
  padding: 12px 24px;
  border-radius: 32px;             /* generously rounded — nearly pill */
  font: 500 15px "GT Alpina Typewriter", serif;
  letter-spacing: 0.01em;
  transition: transform 150ms cubic-bezier(0.34,1.56,0.64,1), filter 150ms;
}
.btn-primary:hover  { filter: brightness(0.96); transform: translateY(-1px); }
.btn-primary:active { transform: translateY(0); }
```

```
/* Cream: the header cart pill / secondary CTA (live-probed) */
.btn-cream {
  background: #fff4ec; color: #3c422e;
  border: 2px solid #3c422e;
  padding: 12px 24px; border-radius: 32px;
  font: 500 15px "GT Alpina Typewriter", serif;
}
.btn-cream:hover { background: #f6e6d9; }
```

```
/* Outline: tertiary action on the peach canvas */
.btn-outline {
  background: transparent; color: #3c422e;
  border: 2px solid #3c422e;
  padding: 11px 23px; border-radius: 32px;
  font: 500 15px "GT Alpina Typewriter", serif;
}
.btn-outline:hover { background: #d1e030; }    /* fills with lime on hover */
```

```
/* Ghost: inline link-button */
.btn-ghost {
  background: transparent; color: #3c422e;
  padding: 12px 20px; border-radius: 32px;
  font: 500 15px "GT Alpina Typewriter", serif;
  text-decoration: underline; text-underline-offset: 4px;
}
.btn-ghost:hover { color: #3c422e; text-decoration-color: #d1e030; }
```

Four variants, all rounded to `32px`, all ringed (or hovering into) the olive `2px` border. The signature is the **lime-fill primary with olive text and an olive border** — never white-on-lime, never a sharp corner. Buttons feel squeezable; a small `translateY(-1px)` lift with a bouncy easing on hover reinforces the tactile, physical-object feeling.

### Product Cards — Cream, Bordered, Warm

```
.product-card {
  background: #fff4ec;             /* cream surface */
  border: 2px solid #3c422e;       /* confident olive outline */
  border-radius: 20px;
  padding: 24px;
}
.product-card__image { width: 100%; display: block; border-radius: 12px; }
.product-card__name  { font: 500 18px "GT Alpina Typewriter", serif; color: #3c422e; margin-top: 16px; }
.product-card__price { font: 500 16px "GT Alpina Typewriter", serif; color: #3c422e; margin-top: 4px; }
```

Cards are warm cream panels with a confident olive outline rather than a drop shadow — sticker-like, not floating. Corners round to `20px`, the product image to `12px` inside. An optional faint warm lift `0 8px 24px rgba(60,66,46,0.10)` may appear on hover, but the border carries the depth.

### Badges / Tags — Lime & Mint Pops

```
.badge {
  background: #d1e030; color: #3c422e;   /* lime pop */
  padding: 4px 12px; border-radius: 9999px;
  font: 500 12px Apercu, sans-serif;
  letter-spacing: 0.14em; text-transform: uppercase;
}
.badge--mint  { background: #9eef80; }   /* mint accent */
.badge--yellow{ background: #fbd535; }   /* marigold */
.badge--olive { background: #3c422e; color: #f6e6d9; }
```

Badges are full pills carrying the pantry pops — lime, mint, marigold — with olive UPPERCASE Apercu text: "NEW", "BEST SELLER", "LIMITED". The olive-on-peach inverted badge handles the loudest moments.

### Inputs / Forms — Cream, Rounded, Olive Border

```
.input {
  background: #fff4ec;
  border: 2px solid #3c422e;
  border-radius: 12px;
  padding: 12px 16px;
  font: 400 16px "GT Alpina Typewriter", serif;
  color: #3c422e;
}
.input::placeholder { color: #9a9b8a; }
.input:focus {
  outline: none;
  border-color: #d1e030;            /* lime focus ring */
  box-shadow: 0 0 0 3px rgba(209,224,48,0.35);
}
```

Newsletter and search fields are warm cream with a `2px` olive border and softly rounded `12px` corners. Focus shifts the border to chartreuse with a soft lime glow. 16px body font avoids mobile zoom.

### Navigation — Warm Bar, Serif Items, Cream Cart Pill

```
.nav { height: 64px; background: #f6e6d9; border-bottom: 2px solid #3c422e; }
.nav__item {
  font: 500 15px "GT Alpina Typewriter", serif; color: #3c422e;
  text-transform: none;
}
.nav__item:hover { text-decoration: underline; text-decoration-color: #d1e030; text-underline-offset: 4px; }

.nav__cart {                         /* live-probed cart pill */
  background: #fff4ec; color: #3c422e;
  border: 2px solid #3c422e; border-radius: 9999px;
  padding: 8px 16px;
}
```

A warm peach bar with an olive `2px` bottom border. Nav items are sentence-case GT Alpina that underline in chartreuse on hover. The header cart is a cream pill — `#fff4ec` fill, olive text, olive border — exactly as live-probed.


## 5. Layout Principles

### Spacing System
Base unit **4px**; scale `[0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]`. Sections breathe at 64–96–128px — generous, but warmer and a touch denser than a pure editorial system because color and borders do the separating.

### Grid & Container
Page max-width **1280px**; prose column **720px**. Product grids run **3-up at desktop, 2-up at tablet, 1-up at mobile** — slightly chunkier cards than a 4-up retail grid, because each card is a bordered, characterful object rather than a chrome-free thumbnail.

### Whitespace Philosophy
Warmth over austerity. Whitespace exists, but Graza is comfortable filling it with color blocks, bordered cards, and playful type. Modules are separated by **air and confident borders**, not by emptiness alone. The page should feel stocked, like an open pantry, not minimal.

### Section Cadence
The page alternates **lime/mint/marigold color-block sections** with peach copy/grid sections — a rhythm of bold flat color then warm reading space. Pull-quotes and oversized typewriter headlines punctuate the scroll; the cadence is loud → read → loud, keeping energy high throughout.


## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 4 | tiny chips, focus highlights |
| Small | 8 | small inline elements, tags |
| **Standard** | 12 | **inputs, inner image corners** |
| Relaxed | 20 | **cards, panels, modules** |
| **Featured** | 32 | **buttons / CTAs — the signature corner (live-probed)** |
| Pill | 9999 | badges, cart pill, fully-rounded tags |

Graza's chrome is built on **soft, tactile rounding**. The signature value is the **`32px` button corner** (live-probed) — generous enough to feel nearly pill, soft enough to feel squeezable. Cards relax to `20px`, inputs to `12px`. Nothing in the system is sharp; a `0px` corner would read as foreign and cold. When adding a new component, round it — prefer the `20–32px` range for anything interactive, and the full pill for badges and the cart.


## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | flat + `2px` olive border | default for buttons, cards, inputs, nav |
| 1 | `0 2px 0 rgba(60,66,46,0.18)` | optional "pressed-sticker" button depth |
| 2 | `0 8px 24px rgba(60,66,46,0.10)` | optional product-card hover lift |
| 4 | `0 24px 64px rgba(60,66,46,0.20)` | modal / cart-drawer overlay |

### Shadow Philosophy
Graza creates depth primarily through **confident olive borders**, not shadows — the chrome reads as flat, sticker-like, hand-placed objects rather than floating cards. When a shadow does appear, it is **olive-tinted** (`rgba(60,66,46,…)`, never pure black) to stay inside the warm world. The most characterful elevation is the optional **hard `0 2px 0` bottom edge** on buttons, which gives them a tactile, pressable, almost physical-bottle-cap quality. Modals and the cart drawer earn a softer, deeper olive shadow.


## 8. Interaction & Motion

- **Easing:** standard `cubic-bezier(0.4, 0, 0.2, 1)` for fades; **bouncy** `cubic-bezier(0.34, 1.56, 0.64, 1)` for button lifts and playful pops.
- **Durations:** fast `150ms` (button hover, lifts), standard `240ms` (image fades, card hovers), slow `320ms` (drawer / modal entrances).
- **Primary button hover:** a small `translateY(-1px)` lift with the bouncy easing plus a slight `brightness(0.96)` — squeezable, tactile, never a flat color swap.
- **Outline button hover:** transparent → lime fill (`#d1e030`), olive text and border held.
- **Product card hover:** optional warm shadow lift (`0 8px 24px rgba(60,66,46,0.10)`); optional image cross-fade to a second shot; border stays put.
- **Input focus:** border shifts olive → chartreuse with a soft `3px` lime glow (240ms).
- **Nav:** chartreuse underline slides in on hover at 4px offset.
- **Badges / pops:** color-block sections may have a subtle entrance pop (scale 0.98 → 1 with bouncy easing) on scroll-in.
- **Page transitions:** 240ms cross-fade; loud color blocks may stagger-in their content.
- **Reduced motion:** `prefers-reduced-motion: reduce` honored — lifts, pops, and cross-fades disabled; color and border state-changes remain (they're instantaneous, not movement).


## 9. Accessibility & A11y

Computed contrast against the live-probed tokens (`bg #f6e6d9`, `text #3c422e`, `brand #d1e030`, cart `#fff4ec`):

- **Text on canvas:** `#3c422e` on `#f6e6d9` = **8.57:1** — AAA (well above the 7:1 threshold).
- **Text on lime CTA:** `#3c422e` on `#d1e030` = **7.17:1** — AAA (the live olive-on-lime button pairing).
- **Text on cream cart/card:** `#3c422e` on `#fff4ec` = **9.65:1** — AAA.
- **Text on mint accent:** `#3c422e` on `#9eef80` = **7.52:1** — AAA. Mint must carry olive text, never white.
- **Text on marigold:** `#3c422e` on `#fbd535` = **7.30:1** — AAA.
- **White on olive (inverted chips):** `#ffffff` on `#3c422e` = **10.44:1** — AAA (for olive-background badges/sections).
- **Text on soft green stroke:** `#3c422e` on `#9fcd7a` = **5.71:1** — AA (fine for normal text; AAA for large).

Caution:
- **Lime on peach fails badly:** `#d1e030` on `#f6e6d9` ≈ **1.20:1** — never set lime *text* directly on the peach canvas. Lime is a *fill* color (olive sits on it), not a text color. The `link-hover` lime is only acceptable on an already-underlined link where the underline carries the affordance.

Patterns:
- **Focus:** 2px solid `#3c422e` outline with a 2px outset gap, or the chartreuse focus glow on inputs — visible on peach, cream, and lime.
- **CTAs over color blocks:** olive text on lime/mint/marigold all clear AAA — no scrim needed.
- **Keyboard nav:** full tab order across nav, cart pill, search, swatches, add-to-cart, and the cart drawer; the drawer traps focus and restores it on close.
- **Reduced motion:** lifts and pops disabled; no information conveyed by motion alone.
- **Badges:** never rely on color alone — pair the lime/mint/marigold with a text label.


## 10. Responsive Behavior

| Breakpoint | Width | Behavior |
|-----------|-------|----------|
| Mobile | <640 | 1-up product grid; hero headline 80→40px; nav → hamburger; CTAs full-width pill |
| Tablet | 640–1024 | 2-up grid; nav condenses; hero ~56px |
| Desktop | 1024–1280 | 3-up grid; inline nav; full color-block cadence |
| Wide | 1280–1536 | content caps at 1280; color blocks bleed full-viewport width |

- **Touch targets:** 44×44 minimum maintained — CTA padding (12×24) plus the `32px` radius gives a comfortable squeezable tap zone; cart pill and nav items keep a 44px-tall hit area.
- **Hero:** the GT Alpina headline scales down but keeps its weight and character; the lime CTA goes full-width on mobile.
- **Cards:** the `2px` olive border and `20px` radius stay at every size; cards stack 1-up on mobile.
- **Images:** product shots stay `contain` on cream; lifestyle plates use `object-fit: cover` full-bleed.
- **Nav:** inline serif items on desktop collapse to a peach hamburger bar on mobile; the cream cart pill persists in the header.


## 11. Content & Voice

### Tone
**Warm, opinionated, a little irreverent.** Graza talks like a friend who genuinely cares about good olive oil — confident, playful, never stuffy. Sentence-case copy, occasional well-placed humor, and a foodie's enthusiasm. It's premium without being precious: the brand will crack a joke and still mean it about the oil.

### Microcopy patterns
- Primary CTA: **"Add to cart"** (sentence case, lime pill)
- Shop entry: **"Shop the squeeze"** / **"Get squeezing"**
- Subscribe: **"Never run dry"** (subscription) — playful, on-brand
- Out of stock: **"Back soon"**
- Newsletter: **"Join the drizzle"** — characterful, not generic
- Empty cart: **"Your cart's running on empty."** (sentence case, warm)
- Error: **"Something went sideways. Give it another squeeze."** (light, never alarming)

### Empty states
Warm and a little funny — a single line of sentence-case copy with an oil/squeeze pun, plus one lime CTA back to the shop. The brand uses personality where other DTC brands use a sad-face illustration.

### CTA verb conventions
- **Use:** Add to cart · Shop · Get squeezing · Subscribe · Learn more · Drizzle on (playfully)
- **Avoid:** corporate "Buy now", aggressive urgency ("ACT FAST"), all-caps shouting in body copy, and anything that strips the warmth out of the voice.


## 12. Dark Mode & Theming

**Light-only — warm-pantry, no dark variant offered.** Graza's identity *is* the peachy-cream canvas, olive ink, and lime pop; a dark theme would invert the warmth that defines the brand and turn the friendly pantry cold. The site ships a single warm light theme. The only "dark" surfaces are intentional **olive `#3c422e` color-block sections** carrying cream `#f6e6d9` type — a content treatment for emphasis, not a theme. Theme switching is not part of the visual language.


## 13. Lineage & Influences

Graza launched in 2022 as a DTC olive-oil brand built on one tactile idea — a squeeze bottle of fresh, high-quality oil you keep on the counter — and the website translates that idea straight into chrome. The palette *is* the bottle: a peachy-cream `#f6e6d9` canvas (the label), olive-green `#3c422e` ink (the type and brand mark), and a signature chartreuse-lime `#d1e030` — the exact squeeze-bottle green — on every CTA. The typographic move that defines the brand is **GT Alpina Typewriter** (Grilli Type): a quirky, slightly clattery serif with typewriter rhythm that makes the whole site feel handmade, warm, and a little irreverent, set against a clean **Apercu** sans that carries the structural copy. Buttons round to a generous `32px`, ringed in olive — a high-energy foodie register that rejects the white-and-Helvetica minimalism most premium-food brands default to.

What Graza **rejects** is just as defining. No white-and-sans neutrality, no muted "tasteful" palette, no sharp corporate corners, no shadow-heavy floating cards. Where conversion-optimized retail plays it safe, Graza is loud, warm, and bordered like a sticker. This places it firmly in the **new wave of characterful CPG-DTC brands** — Liquid Death, Magic Spoon, Olipop, Omsom — that win by being opinionated and instantly recognizable rather than safely minimal. The lineage is modern-pantry maximalism crossed with editorial discipline: color and a single weird typeface do the heavy lifting, and the chrome is unapologetically playful. It's the digital equivalent of a kitchen-counter bottle you actually want to pick up and squeeze.

**Named influences:**
- **GT Alpina (Grilli Type)** — the quirky typewriter-serif family that carries the brand voice across display and body.
- **Liquid Death** — loud, irreverent CPG-DTC branding that wins on personality over neutral minimalism.
- **Magic Spoon** — playful, color-saturated food-DTC chrome with rounded, candy-like CTAs.
- **Olipop** — warm retro-pantry palette and characterful soda-brand identity.
- **Omsom** — bold, saturated pantry-brand color and a confident food-DTC voice.
- **Gretel / studio food-branding** — maximalist food-and-flavor identity systems with quirky display type.


## 14. Do's and Don'ts

### Do
- Keep the canvas **peachy-cream `#f6e6d9`** and type **olive `#3c422e`** (live-probed) — warm, never white-on-black.
- Drive every CTA with the **chartreuse-lime `#d1e030`** — the squeeze-bottle green — with **olive `#3c422e` text** on it.
- Ring buttons, cards, and inputs in a confident **`2px` olive border** — sticker-like depth, not drop shadows.
- Round CTAs to the signature **`32px`** (live-probed); cards to `20px`, inputs to `12px`. Everything is tactile.
- Set display and body in **GT Alpina Typewriter** — its quirky clatter *is* the brand.
- Use **Apercu** for eyebrows, small labels, and utility copy where the serif would read as noise.
- Lean on the **pantry-pop accents** — mint `#9eef80`, marigold `#fbd535` — for badges and color-block sections.
- Keep copy **sentence-case, warm, and a little funny** — the friend-who-loves-oil voice.
- Pair every bright fill (lime/mint/marigold) with **olive text** — all clear AAA contrast.
- Add a tactile **`translateY(-1px)` lift with bouncy easing** on button hover — squeezable feel.

### Don't
- **Don't** set the canvas pure white — Graza's ground is warm peach `#f6e6d9`.
- **Don't** put **lime text on the peach canvas** — it's a ~1.2:1 contrast fail; lime is a *fill*, olive is the text.
- **Don't** use white text on the lime button — the live pairing is olive `#3c422e` on lime.
- **Don't** use sharp `0px` corners — every interactive element rounds; sharp reads as cold and foreign.
- **Don't** replace GT Alpina Typewriter with a generic sans — the quirky serif is the entire personality.
- **Don't** lean on drop shadows for depth — confident olive borders carry the chrome.
- **Don't** mute or corporate-ize the palette — the brand is loud, warm, and saturated on purpose.
- **Don't** write stiff, corporate copy — the voice is playful, foodie, and opinionated.
- **Don't** use pure-red errors — use the warm terracotta `#b3472d` that lives inside the peach world.
- **Don't** ship a dark mode — the warm light pantry is the brand; inverting it kills the warmth.


## 15. Agent Prompt Guide

### Quick Color Reference
```
Background:        #f6e6d9   (peachy-cream canvas — NOT white)
Text:              #3c422e   (olive green — body, headings, borders)
Brand (lime):      #d1e030   (chartreuse-lime squeeze-bottle green — every CTA)
On brand:          #3c422e   (olive text on lime — NEVER white on lime)
Cart / cream:      #fff4ec   (cream cart pill + card surface)
Accent mint:       #9eef80   (bright mint-green pop)
Accent yellow:     #fbd535   (marigold / golden-oil)
Border:            #3c422e   (2px olive stroke)  /  #9fcd7a (soft green)
Muted text:        #6b6f5d
CTA radius:        32px      (the signature rounded corner)
```

### Example Component Prompts

> **Hero:** "Create a playful olive-oil DTC hero on a peachy-cream `#f6e6d9` canvas. Set a big sentence-case headline in GT Alpina Typewriter at 80px, weight 600, olive `#3c422e`, tracked −0.02em. Below it, a chartreuse-lime CTA — `#d1e030` fill, olive `#3c422e` text, `2px` olive border, `32px` radius, 15px GT Alpina — reading 'Get squeezing', that lifts `translateY(-1px)` with a bouncy ease on hover. Warm, foodie, opinionated. No white background, no sharp corners."

> **Product card:** "Design a warm product card on cream `#fff4ec` with a confident `2px` olive `#3c422e` border and `20px` radius. Inside: a product image rounded to `12px`, the name in 18px GT Alpina Typewriter Medium olive, the price in 16px GT Alpina olive, and a lime `#d1e030` 'Add to cart' pill (olive text, olive border, `32px` radius). Optional faint olive-tinted shadow on hover; the border carries the depth, not a drop shadow."

> **Newsletter form:** "Build a warm email signup: peachy-cream `#f6e6d9` section, a single cream `#fff4ec` input with a `2px` olive `#3c422e` border and `12px` radius (16px GT Alpina), placeholder `#9a9b8a`, focus shifting the border to chartreuse `#d1e030` with a soft lime glow, and a lime 'Join the drizzle' pill button (olive text, `32px` radius). Playful copy, no corporate tone."

> **Badge row:** "Make a row of pill badges (`9999px` radius) carrying the pantry pops: lime `#d1e030` 'NEW', mint `#9eef80` 'BEST SELLER', marigold `#fbd535` 'LIMITED', all with olive `#3c422e` UPPERCASE Apercu text tracked +0.14em. For the loudest badge, invert to olive `#3c422e` background with cream `#f6e6d9` text."

> **Color-block section:** "Lay out a bold full-bleed lime `#d1e030` section with a centered olive `#3c422e` GT Alpina Typewriter headline at 56px and a short sentence-case paragraph, then an olive-outline CTA that fills with cream on hover. A subtle scale 0.98→1 bouncy pop on scroll-in. Loud, warm, pantry-maximalist."

> **Nav bar:** "Build a peachy-cream `#f6e6d9` nav at 64px with a `2px` olive `#3c422e` bottom border. Sentence-case GT Alpina nav items in olive that underline in chartreuse `#d1e030` on hover, and a cream `#fff4ec` cart pill on the right — `2px` olive border, fully rounded, olive 'Cart [0]' label."

### Iteration Guide
1. **If it looks too 'startup-minimal'**, the canvas is probably white — switch the ground to peachy-cream `#f6e6d9` and the type to olive `#3c422e`.
2. **If the CTAs feel cold**, they're likely sharp or wrong-colored — round them to `32px` and fill with chartreuse-lime `#d1e030` (olive text, olive border).
3. **If a lime label is invisible**, you've set lime *text* on peach (~1.2:1) — lime is a fill, olive is the text. Move the lime to the background.
4. **If the type feels generic**, confirm GT Alpina Typewriter (not a plain serif or Inter) for display + body; that quirky clatter is the whole brand.
5. **If the page feels flat or floaty**, swap drop shadows for confident `2px` olive borders — Graza's depth is sticker-like, not elevation-based.
6. **If the chrome looks dull**, you've muted the palette — bring back full-saturation lime, mint `#9eef80`, and marigold `#fbd535` in color-block sections and badges.
7. **If the copy reads corporate**, loosen it to the warm, playful, foodie voice — sentence case, a little humor, oil/squeeze puns where they fit.
8. **To push the energy higher**, add a bouncy `translateY(-1px)` button lift and stagger-in color-block sections; to calm it, lean on cream `#fff4ec` reading panels between the loud blocks.

---

*Theme-toggle audit: score=2, signals=[theme-context-selector]*
