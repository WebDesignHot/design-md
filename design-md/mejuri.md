---
name: Mejuri
tagline: Monochrome luxury — white canvas, near-black ink, Syndicat Grotesk small caps and a Simon Mono accent. The jewelry photography does all the color work.
updated_at: 2026-05-29T21:45:42.356Z
published_at: 2026-05-29T21:45:42.356Z
author: webdesignhot
source_url: https://mejuri.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [retail, fashion]
tags: [light, white, minimal, editorial, sharp, mono]
preview_swatch: ['#ffffff', '#0a0a0a', '#c9a86a']
related: [glossier, aesop, cos]
description: 'Mejuri''s site in 2026 is accessible-luxury jewelry rendered as monochrome editorial: a pure-white canvas `#ffffff`, near-black ink `#0a0a0a`, and almost no chrome color at all. The whole palette is white + near-black; the *warmth* — the gold, the rose, the skin tones — lives entirely in the warm-lit jewelry photography, never in the UI. Type is the differentiator: display is set in **Syndicat Grotesk** (a sharp grotesque) at deliberately *restrained* sizes — the live H1 is just 24px / weight 500, small and confident rather than shouting — while body and editorial accents run in **Simon Mono**, a monospaced face that gives prices, specs, and labels a quiet jeweler''s-ledger precision. Corners are sharp: `0px` radius across buttons, cards, and inputs, no pills, no soft luxury. Where Glossier went post-pink Apercu-monolith and Aesop went amber-and-serif apothecary, Mejuri 2026 is **white-and-near-black, grotesque-plus-mono, sharp-cornered editorial** — elevated but unfussy, the chrome stepping back so the metal can shine.'


# Canonical 8-role aliases (bg / text / brand / border / accent / muted / surface / danger).
# Maps role names to this entry's actual token names so role-aware
# downstream tools resolve `theme.background` → entry's `bg`, etc.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-gold
  muted: text-muted
  border: border
  ring: brand

colors:
  # Page grounds
  bg: '#ffffff'                  # pure white canvas — the dominant surface
  bg-soft: '#f7f6f4'             # faint warm-gray panel (editorial blocks, value props)
  bg-deeper: '#ebebe8'           # secondary surface / hairline-divided sections
  surface: '#ffffff'             # cards inherit the page — no separate fill
  surface-inverse: '#0a0a0a'     # near-black full-bleed editorial / footer sections
  on-inverse: '#ffffff'          # text on the dark editorial blocks
  # Brand — near-black, not a color
  brand: '#0a0a0a'               # primary CTA fill, wordmark, focus ring — near-black
  brand-hover: '#000000'         # deepens to true black on press
  on-brand: '#ffffff'            # text on the near-black button
  # Accent — supplied by photography, echoed sparingly in chrome
  accent-gold: '#c9a86a'         # warm-gold echo (rare — sale flags, "new" dot); the photo color made literal
  accent-gold-soft: '#e8dcc4'    # pale gold wash for tiny highlights
  # Text
  text: '#0a0a0a'                # body copy, headlines — near-black ink
  text-strong: '#000000'        # true black for the heaviest display
  text-muted: '#6b6b6b'         # meta, captions, secondary spec text
  text-soft: '#8a8a8a'          # tertiary / placeholder
  text-faint: '#b0b0b0'         # disclaimers, disabled
  text-on-inverse: '#ffffff'    # copy over the dark editorial blocks
  link: '#0a0a0a'
  link-hover: '#6b6b6b'
  selection-bg: '#ebebe8'
  # Borders & dividers
  border: '#e5e5e5'             # default hairline, dividers, input outline
  border-strong: '#0a0a0a'      # emphasis / focused input / active filter
  border-soft: '#efefee'        # faintest separators
  # Semantic
  success: '#3f7a4f'
  warning: '#b07a2a'
  danger: '#9b2c2c'
  info: '#0a0a0a'

typography:
  display:
    family: '"Syndicat Grotesk", "SyndicatGrotesk", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: '"Simon Mono", "SimonMono", ui-monospace, "SFMono-Regular", Menlo, monospace'
    weights: [400, 500, 600]
  mono:
    family: '"Simon Mono", "SimonMono", ui-monospace, "SFMono-Regular", "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 48, weight: 500, lineHeight: 1.05, tracking: '-0.01em',  family: display }
    display-lg:      { size: 36, weight: 500, lineHeight: 1.1,  tracking: '-0.008em', family: display }
    h1:              { size: 24, weight: 500, lineHeight: 1.2,  tracking: '-0.004em', family: display }
    h2:              { size: 20, weight: 500, lineHeight: 1.25, tracking: '0',        family: display }
    h3:              { size: 18, weight: 500, lineHeight: 1.3,  tracking: '0',        family: display }
    h4:              { size: 16, weight: 500, lineHeight: 1.35, tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.2,  tracking: '0.08em',   family: mono }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    price:           { size: 14, weight: 500, lineHeight: 1.4,  tracking: '0.01em',   family: mono }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: mono }
    button:          { size: 13, weight: 500, lineHeight: 1.0,  tracking: '0.04em',   family: mono }
    nav:             { size: 13, weight: 500, lineHeight: 1.2,  tracking: '0.02em',   family: mono }
    caption:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0.02em',   family: mono }

radius:
  none: 0
  micro: 1
  sm: 2

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
  card-hover: 'none'
  modal: '0 20px 56px rgba(10, 10, 10, 0.16)'

accessibility:
  contrast-text-on-bg: 19.6
  contrast-text-on-brand: 18.9
  focus-ring: '2px solid #0a0a0a + 2px outset gap'
  reduced-motion-honored: true

components:
  button-primary:   { bg: brand, text: on-brand, padding: '12px 20px', radius: 0, font: button, hover-bg: brand-hover }
  button-secondary: { bg: surface, text: text, padding: '12px 20px', radius: 0, border: '1px solid border-strong' }
  button-ghost:     { bg: transparent, text: text, padding: '10px 14px', radius: 0, font: button }
  button-inverse:   { bg: surface-inverse, text: on-inverse, padding: '12px 20px', radius: 0 }
  card:             { bg: surface, radius: 0, padding: 0, border: 'none' }   # image carries the card; no chrome
  input:            { bg: bg, border: '1px solid border', text: text, radius: 0, padding: '12px 14px', focus-border: brand }
  badge:            { bg: bg-deeper, text: text, padding: '4px 8px', radius: 0, font: 'label' }
  badge-gold:       { bg: accent-gold-soft, text: text, padding: '4px 8px', radius: 0, font: 'label' }

lineage:
  summary: 'Mejuri launched in 2015 (Toronto) selling fine, everyday jewelry direct-to-consumer at price points that undercut the legacy houses — "fine jewelry for every day", positioned for self-purchase rather than gifting. Its 2026 storefront is the visual articulation of that "accessible luxury" thesis: it borrows the restraint of a real fashion house (the white-on-near-black severity of COS, the editorial calm of The Row, the apothecary discipline of Aesop) while refusing the cost-signals — the gold-foil, the script serif, the heavy gilt frames — that read as "trying to look expensive". The chrome is monochrome on purpose: pure-white canvas, near-black ink `#0a0a0a`, `0px` radius everywhere, and almost no UI color. All warmth is delegated to the photography, where warm-lit gold and skin tones do the seducing. Type carries the brand: Syndicat Grotesk (a sharp, contemporary grotesque) at deliberately small display sizes — the live H1 is only 24px — paired with Simon Mono for prices, specs, and labels, which lends a jeweler''s-ledger precision and a quietly technical, un-precious confidence. The signature move is *small-and-sharp*: confident understatement instead of luxury maximalism.'
  influences:
    - { name: 'COS', role: 'white-on-near-black minimal-luxury retail chrome', url: 'https://www.cos.com/' }
    - { name: 'The Row', role: 'quiet-luxury editorial restraint and small, confident type', url: 'https://www.therow.com/' }
    - { name: 'Aesop', role: 'monochrome apothecary discipline; product photography carries the warmth', url: 'https://www.aesop.com/' }
    - { name: 'Helvetica / Swiss grotesque tradition', role: 'neutral grotesque display lineage behind Syndicat Grotesk', url: 'https://en.wikipedia.org/wiki/Helvetica' }
    - { name: 'Monospace-as-luxury (technical-precision aesthetic)', role: 'Simon Mono for prices/specs — the jeweler''s-ledger register', url: 'https://en.wikipedia.org/wiki/Monospaced_font' }
    - { name: 'Celine under Phoebe Philo', role: 'minimal fashion-house severity the chrome reads against', url: 'https://www.celine.com/' }
---


## 1. Visual Theme & Atmosphere

Mejuri's site in 2026 is **monochrome luxury**: a fine-jewelry storefront rendered almost entirely in white and near-black, where the only real color enters through the photography. The canvas is pure white `#ffffff`, ink is near-black `#0a0a0a`, and the chrome carries essentially no brand color — no gold foil, no blush, no jewel-tone gradient. This is a deliberate inversion of how "luxury jewelry" usually looks online. Instead of signalling expense with gilt and script, Mejuri signals it with **restraint** — the confidence to leave the page nearly empty and let the metal do the talking.

The differentiator is type, and it works on two registers. Display is set in **Syndicat Grotesk**, a sharp contemporary grotesque, at *deliberately small* sizes — the live H1 is just **24px at weight 500**, an editorial whisper rather than a marketing shout. Body copy and, crucially, all the functional text — prices, product specs, sizes, labels, navigation — run in **Simon Mono**, a monospaced face. The mono lends a jeweler's-ledger precision: a $48 price set in monospace reads as a *measurement*, not a sales tag. That grotesque-plus-mono pairing is the entire identity; there is no serif, no script, no second display face.

Geometry reinforces the severity. Corners are **sharp — `0px` radius** across buttons, cards, inputs, and badges. There are no pills, no soft-rounded "friendly luxury" shapes. Elevation is effectively flat: cards have no shadow, the page relies on whitespace and photographic contrast for depth. The result is a stage, not a showroom — cool, even, and quiet, so that a single warm-lit close-up of a gold hoop or a stack of rings lands with maximum impact.

Where Glossier 2026 went post-pink Apercu-monolith, Aesop went amber-and-serif apothecary, and Tiffany leans on its signature blue, Mejuri chose **white-and-near-black, sharp-cornered, grotesque-plus-mono editorial**. It reads against fashion houses — COS, The Row, Celine — more than against jewelers. The register is *accessible-luxury*: elevated enough to justify the price, plain enough to feel like everyday wear, never precious.

**Key Characteristics:**
- Pure white canvas `#ffffff` — the dominant surface
- Near-black ink `#0a0a0a` (not pure black) for body and display
- Monochrome chrome — **all color lives in the warm-gold jewelry photography**, not the UI
- **Syndicat Grotesk** display at *restrained small* sizes (live H1 = 24px/500)
- **Simon Mono** for prices, specs, labels, nav — the jeweler's-ledger register
- `0px` radius everywhere — sharp rectangles, no pills, no soft luxury
- Flat elevation — no card shadow; depth comes from whitespace + photography
- Near-black `#0a0a0a` primary button, white text, sharp corners
- Full-bleed near-black `#0a0a0a` editorial / footer blocks as the only "dark" surface
- Hairline `#e5e5e5` dividers; emphasis borders go straight to near-black
- Calm, declarative, no-exclamation voice — confident understatement


## 2. Color Palette & Roles

### Primary
- **Background** `#ffffff` [→ `--bg`]: pure white, the dominant surface across every page.
- **Bg Soft** `#f7f6f4` [→ `--bg-soft`]: faint warm-gray panel for editorial blocks and value-prop strips.
- **Bg Deeper** `#ebebe8` [→ `--bg-deeper`]: secondary surface for hairline-divided sections and default badges.
- **Surface** `#ffffff` [→ `--surface`]: product cards inherit the page; there is no separate card fill.

### Brand — Near-Black, Not a Color
- **Brand** `#0a0a0a` [→ `--brand`]: primary CTA fill, wordmark, focus ring. Near-black, the single "brand" value.
- **Brand Hover** `#000000` [→ `--brand-hover`]: deepens to true black on press.
- **On-Brand** `#ffffff` [→ `--on-brand`]: white text on the near-black button.

### Accent — Photography Made Literal (use sparingly)
- **Accent Gold** `#c9a86a` [→ `--accent-gold`]: warm-gold echo of the product photography. Reserved for rare flags ("new" dot, sale tick). Never a page color.
- **Accent Gold Soft** `#e8dcc4` [→ `--accent-gold-soft`]: pale gold wash for tiny highlights and gilt-feel badges.

### Inverse / Editorial Surface
- **Surface Inverse** `#0a0a0a` [→ `--surface-inverse`]: full-bleed near-black editorial blocks and footer.
- **On Inverse** `#ffffff` [→ `--on-inverse`]: white copy over the dark blocks.

### Text
- **Text** `#0a0a0a` [→ `--text`]: body copy and headlines — near-black ink.
- **Text Strong** `#000000` [→ `--text-strong`]: true black for the heaviest display moments.
- **Text Muted** `#6b6b6b` [→ `--text-muted`]: meta, captions, secondary spec text.
- **Text Soft** `#8a8a8a` [→ `--text-soft`]: tertiary text and input placeholders.
- **Text Faint** `#b0b0b0` [→ `--text-faint`]: disclaimers and disabled labels.

### Borders & Interactive
- **Border** `#e5e5e5` [→ `--border`]: default hairline, dividers, resting input outline.
- **Border Strong** `#0a0a0a` [→ `--border-strong`]: emphasis — focused input, active filter, selected option.
- **Border Soft** `#efefee` [→ `--border-soft`]: the faintest separators.
- **Link** `#0a0a0a` / **Link Hover** `#6b6b6b`: text links underline-on-hover, no color shift to blue.

### Shadow
- **Card / Card-hover** `none`: cards are flat at every state.
- **Modal** `0 20px 56px rgba(10, 10, 10, 0.16)`: the only elevation token, reserved for overlays.

### Semantic
- **Success** `#3f7a4f`: order/confirmation states (muted, never neon green).
- **Warning** `#b07a2a`: low-stock / back-order notices (warm, near the gold accent).
- **Danger** `#9b2c2c`: form errors, removal actions (muted brick red).
- **Info** `#0a0a0a`: informational notes default to ink — info is not a color here.


## 3. Typography Rules

### Font Family — Grotesque Display + Mono Everything-Else

Two faces, no third. **Syndicat Grotesk** carries display and headings; **Simon Mono** carries body, prices, specs, labels, navigation, and captions. There is no serif and no script in the live system — a striking choice for a fine-jewelry brand, and the core of its un-precious, accessible-luxury voice.

```
display: "Syndicat Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif
body:    "Simon Mono", ui-monospace, "SFMono-Regular", Menlo, monospace
mono:    "Simon Mono", ui-monospace, "SFMono-Regular", "SF Mono", Menlo, monospace
```

The mono fallback chain matters: if Simon Mono fails to load, the page should degrade to a *system monospace* (the precision register), not to a proportional sans — losing the mono breaks the brand feel more than losing the exact face.

### Hierarchy — Small Display, Monospace Function

| Token | Size | Weight | Tracking | Family | Case | Use |
|-------|------|--------|----------|--------|------|-----|
| `display-hero` | 48 | 500 | -0.01em | display | sentence | rare full-bleed campaign headline |
| `display-lg` | 36 | 500 | -0.008em | display | sentence | section opener on editorial pages |
| `h1` | **24** | **500** | -0.004em | display | sentence | **the signature restrained page title** |
| `h2` | 20 | 500 | 0 | display | sentence | sub-section heading |
| `h3` | 18 | 500 | 0 | display | sentence | card group / module title |
| `h4` | 16 | 500 | 0 | display | sentence | inline heading |
| `eyebrow` | 12 | 500 | **+0.08em** | mono | UPPERCASE | "NEW IN", "BESTSELLERS", "THE EDIT" |
| `body-lg` | 18 | 400 | 0 | body | sentence | editorial lede / product description |
| `body` | 16 | 400 | 0 | body | sentence | default copy |
| `body-sm` | 14 | 400 | 0 | body | sentence | secondary copy, fine print |
| `price` | 14 | 500 | +0.01em | mono | tabular | "$48", "$120" — monospace price tags |
| `label` | 13 | 500 | +0.02em | mono | UPPERCASE | filters, size chips, form labels |
| `button` | 13 | 500 | +0.04em | mono | UPPERCASE | "ADD TO BAG", "SHOP" |
| `nav` | 13 | 500 | +0.02em | mono | sentence | top-nav items |
| `caption` | 12 | 400 | +0.02em | mono | sentence | image credit, micro-meta |

### Principles

- **Keep display small.** The live H1 is 24px. Resist the urge to scale headings to "luxury hero" sizes — the restraint *is* the brand. Use 48px only for a single rare campaign moment.
- **Mono for anything functional.** Prices, specs, sizes, filters, nav, and labels go in Simon Mono. The monospace gives precision and a technical, un-precious confidence.
- **Grotesque for anything expressive.** Headlines and editorial titles go in Syndicat Grotesk, sentence case, weight 500.
- **One weight does most of the work.** Display sits at 500; mono body at 400, mono labels at 500. Avoid 700 except for the rarest emphasis.
- **Eyebrows are UPPERCASE mono, tracked +0.08em.** This is the page-rhythm device — the only place tracking goes wide.
- **Sentence case for headings, UPPERCASE for mono labels/buttons.** Never SHOUTING-CAPS at display sizes.
- **Tabular figures for prices.** Mono is naturally monospaced — let prices align in columns down product grids.
- **No serif, no script, ever.** Adding one breaks the whole accessible-luxury thesis.


## 4. Component Stylings

### Buttons — Sharp Rectangles, Mono Labels

```
.btn-primary {
  background: #0a0a0a;          /* near-black */
  color: #ffffff;
  padding: 12px 20px;
  border-radius: 0;            /* sharp corners — no pills */
  font: 500 13px/1.0 "Simon Mono", ui-monospace, monospace;
  letter-spacing: +0.04em;
  text-transform: uppercase;   /* "ADD TO BAG" */
  transition: background 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary:hover { background: #000000; }
```

Four variants:

| Variant | Background | Text | Border | Use |
|---------|-----------|------|--------|-----|
| **Primary** | `#0a0a0a` | `#ffffff` | none | "ADD TO BAG", checkout |
| **Secondary** | `#ffffff` | `#0a0a0a` | `1px solid #0a0a0a` | "ADD TO WISHLIST", secondary actions |
| **Ghost** | transparent | `#0a0a0a` | none (underline on hover) | inline/tertiary actions |
| **Inverse** | `#0a0a0a` block, button `#ffffff` | `#0a0a0a` | none | CTA inside a dark editorial block |

All `0px` radius, all mono UPPERCASE labels at 13px tracked +0.04em. No pill buttons anywhere.

### Product Cards — Zero Chrome

```
.product-card {
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
}
.product-card__image { width: 100%; aspect-ratio: 1; object-fit: cover; }
.product-card__name  { font: 400 14px "Simon Mono"; margin-top: 12px; }
.product-card__price { font: 500 14px "Simon Mono"; letter-spacing: +0.01em; }
```

No border, no shadow, no radius, no padding box. The warm-lit photograph is the card. Layout is photo → name (mono) → price (mono, tabular) → optional small badge. Hover may cross-fade to an alternate shot; the frame itself never lifts or rounds.

### Badges & Tags

| Badge | Bg | Text | Use |
|-------|-----|------|-----|
| Default | `#ebebe8` | `#0a0a0a` | "RESTOCKED", category tag |
| Gold | `#e8dcc4` | `#0a0a0a` | "NEW", limited drop — the only gilt touch |
| Sale | `#0a0a0a` | `#ffffff` | price-off flag |

All `0px` radius, `4px 8px` padding, 13px mono UPPERCASE tracked +0.02em. Gold is the one place the photography's warmth is allowed into the chrome — keep it tiny.

### Inputs & Forms — Flat White, Sharp Edges

```
.input {
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-radius: 0;
  padding: 12px 14px;
  font: 400 16px "Simon Mono", ui-monospace, monospace;
  color: #0a0a0a;
}
.input::placeholder { color: #8a8a8a; }
.input:focus { border-color: #0a0a0a; outline: 2px solid #0a0a0a; outline-offset: 2px; }
```

Labels sit above in 13px mono UPPERCASE. Focus drives the border straight to near-black — no color glow. Newsletter signup is a plain rectangle with a "SUBSCRIBE" mono button, no rounding.

### Navigation

Thin 64px header on white, near-black wordmark, mono nav items at 13px. Mega-menu opens on a white panel with hairline `#e5e5e5` dividers and small category thumbnails. Cart/account/search are icon-only at small sizes. Sticky on scroll with a single hairline bottom border; no shadow, no background blur tint beyond a subtle white.


## 5. Layout Principles

### Spacing System
Base unit 4px. Scale `[0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]`. Component padding clusters at 12–24px; section gaps at 64–128px for editorial breathing room.

### Grid & Container
Page max-width **1280px**, centered, with generous side gutters. Product grids run 4-up at desktop, 3-up at tablet, 2-up at mobile (jewelry photographs benefit from larger cells — never go 1-up except on the PDP). Editorial prose sits in a 720px column.

### Whitespace Philosophy
Whitespace is the primary luxury signal. The page is allowed to feel *empty* — large quiet margins, single hero images, lots of room around a small headline. Density would read as fast-fashion; the restraint is the price tag.

### Section Cadence
Alternate white sections with the occasional full-bleed near-black `#0a0a0a` editorial block (lookbook, brand story, ethics). The dark block is rare and intentional — it punctuates, it isn't a recurring stripe. Hairline `#e5e5e5` rules separate dense modules; whitespace separates everything else.


## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| **None** | 0 | **default everywhere** — buttons, cards, inputs, badges, modals |
| Micro | 1 | hairline indicators (rare) |
| Small | 2 | tooltips / tiny chips (rare) |

The radius scale is intentionally almost empty. The live site renders `0px` on body, headings, and controls. There are no pills, no rounded cards, no soft "friendly" corners. Sharp rectangles are the chrome. If a future component truly needs softening, cap it at 1–2px; anything ≥4px would read as a different brand.


## 7. Depth & Elevation

Effectively flat. Cards carry no shadow at rest or on hover; the page builds depth from **whitespace and photographic contrast**, not elevation tokens. Buttons do not lift on press — they deepen color (near-black → true black). The single shadow in the system is reserved for overlays.

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | flat — no shadow | cards, buttons, inputs, badges (default) |
| 1 | `0 20px 56px rgba(10, 10, 10, 0.16)` | modal / cart-drawer overlay only |

### Shadow Philosophy
Shadow is treated as a foreign material. In a monochrome system, a drop shadow reads as noise — it muddies the white canvas and competes with the product photography. Mejuri keeps surfaces in-plane and lets the warm jewelry shots, not blur, create dimension.


## 8. Interaction & Motion

- **Easing:** standard `cubic-bezier(0.4, 0, 0.2, 1)` for everything. Calm, no overshoot, no bounce.
- **Durations:** fast 150ms (color/border), standard 240ms (image cross-fade, drawer), slow 320ms (page/section reveals).
- **Buttons:** background deepens near-black → true black over 150ms; no transform, no shadow.
- **Product cards:** hover cross-fades to an alternate product shot over 240ms; the frame stays put — no lift, no scale, no rounding.
- **Cart drawer:** slides from the right over 320ms with the modal shadow; backdrop fades in.
- **Links:** underline appears on hover (150ms); color does not change.
- **Page transitions:** quiet 240–320ms fade, no slide.
- **Reduced motion:** `prefers-reduced-motion: reduce` honored — cross-fades become instant swaps, drawer appears without slide, reveals snap in.


## 9. Accessibility & A11y

- Text on bg: `#0a0a0a` on `#ffffff` = **19.6:1** — AAA (near-maximum).
- On-brand on brand: `#ffffff` on `#0a0a0a` = **18.9:1** — AAA (button text).
- Inverse text: `#ffffff` on `#0a0a0a` editorial block = **18.9:1** — AAA.
- Muted text: `#6b6b6b` on `#ffffff` = **5.3:1** — AA for normal text, AAA for large.
- Soft text / placeholder: `#8a8a8a` on `#ffffff` = **3.5:1** — AA-large only; never use for body copy, fine for placeholders.
- Gold badge text: `#0a0a0a` on `#e8dcc4` = **15.2:1** — AAA.
- Default badge text: `#0a0a0a` on `#ebebe8` = **16.8:1** — AAA.
- **Focus:** 2px solid `#0a0a0a` ring with a 2px outset gap on every interactive element. Visible on the white canvas; on dark blocks the ring inverts to white.
- **Keyboard:** full tab order across nav, mega-menu, filters, size chips, cart drawer, and checkout. Drawer traps focus and restores it on close.
- **ARIA:** mega-menu uses `aria-expanded`; size/color chips use `role="radiogroup"`; price + "sale" pairing uses `aria-label` so screen readers announce "$48, on sale" cleanly.
- **Screen readers:** mono prices need an `aria-label` if presented as bare numbers; image-only cards need descriptive `alt` (the photo is the content).
- **Reduced motion:** honored throughout (see section 8).


## 10. Responsive Behavior

| Breakpoint | Width | Grid / Nav |
|------------|-------|-----------|
| Mobile | <640 | 2-up product grid; nav → hamburger; hero headline 24→20px |
| Tablet | 640–1024 | 3-up product grid; condensed nav |
| Desktop | 1024–1280 | 4-up product grid; full inline nav + mega-menu |
| Wide | 1280–1536 | centered 1280 container; wider editorial gutters |

- **Touch targets:** 44×44 minimum on all CTAs, chips, and icon buttons (achieved via 12px padding on mono labels).
- **Per-component:** mega-menu collapses to an accordion drawer on mobile; filters move to a bottom sheet; PDP goes single-column with a swipeable image gallery.
- **Images:** product photography uses `aspect-ratio: 1` cells and `object-fit: cover` so the grid stays even across breakpoints; editorial heroes go full-bleed below 1280.
- **Type:** body holds at 16px across breakpoints (mono legibility); only display steps down.


## 11. Content & Voice

### Tone
**Calm, declarative, accessible-luxury.** Sentence case, no exclamation points, no emoji. Confident understatement — describes the product and the value, never hard-sells. "Fine jewelry for every day" is the whole thesis: elevated but unpretentious.

### Microcopy patterns
- Primary CTA: **"Add to bag"** (rendered "ADD TO BAG" in mono caps).
- Wishlist: **"Add to wishlist"**.
- Out of stock: **"Notify me"** / **"Back in stock soon"**.
- Newsletter: **"Subscribe"** — terse, never "Join the club!".
- Errors: **"Something went wrong. Please try again."** (no exclamation).

### Empty states
- Empty bag: **"Your bag is empty."** (declarative) + a quiet "Continue shopping" link.
- No results: **"No pieces match your filters."** + a "Clear filters" action.

### CTA verb conventions
- Use: **Add / Shop / Explore / Discover / Notify / Subscribe / Find a store**.
- Avoid: "Buy now", urgency ("Last chance", "Selling fast"), and any exclamation-driven hype.


## 12. Dark Mode & Theming

**Light-only.** The white canvas with near-black ink *is* the brand — inverting it would turn the rare full-bleed `#0a0a0a` editorial blocks into the norm and erase the whitespace-as-luxury signal. The dark surface exists only as an intentional punctuation block, not as a theme. There is no dark-mode toggle in the live storefront, and adding one would dilute the monochrome thesis.


## 13. Lineage & Influences

Mejuri launched in 2015 out of Toronto selling fine, everyday jewelry direct-to-consumer at prices that undercut the legacy houses — "fine jewelry for every day", explicitly positioned for self-purchase rather than gifting. The 2026 storefront is the visual articulation of that *accessible-luxury* thesis. It borrows the restraint of a real fashion house — the white-on-near-black severity of COS, the quiet-luxury editorial calm of The Row, the apothecary discipline of Aesop, the minimalism of Celine under Phoebe Philo — while pointedly refusing the cost-signals (gold foil, script serif, gilt frames) that read as "trying to look expensive". The chrome is monochrome so the warmth can be delegated entirely to the photography.

The typographic choice is the brand's signature. Syndicat Grotesk supplies a sharp, neutral grotesque display — descendant of the Helvetica/Swiss tradition — kept deliberately small. Simon Mono supplies the functional register: prices, specs, sizes, and labels in monospace, which reads as precision and gives the page a quietly technical, un-precious confidence. The pairing of grotesque-plus-mono on a white-and-near-black canvas, with sharp `0px` corners throughout, is what separates Mejuri from both the legacy jewelers it undercuts and the DTC peers it sits beside.

**Named influences:**
- **COS** — white-on-near-black minimal-luxury retail chrome; the closest direct analogue.
- **The Row** — quiet-luxury editorial restraint and small, confident type.
- **Aesop** — monochrome apothecary discipline; product photography carries the warmth.
- **Helvetica / Swiss grotesque tradition** — the neutral grotesque lineage behind Syndicat Grotesk.
- **Monospace-as-luxury** — Simon Mono for prices/specs; the jeweler's-ledger, technical-precision register.
- **Celine under Phoebe Philo** — minimal fashion-house severity the chrome reads against.


## 14. Do's and Don'ts

### Do
- Keep the canvas **pure white `#ffffff`** and ink **near-black `#0a0a0a`** — monochrome chrome.
- Let the **photography do all the color work** — warm-lit gold, skin, and stone tones.
- Set display in **Syndicat Grotesk at small sizes** — the live H1 is 24px. Restraint is the brand.
- Use **Simon Mono for everything functional** — prices, specs, sizes, labels, nav, captions.
- Use **`0px` radius** on every button, card, input, and badge. Sharp rectangles only.
- Make the primary button **near-black `#0a0a0a` with white mono caps**, deepening to true black on hover.
- Use **eyebrows in UPPERCASE mono, tracked +0.08em** as the page-rhythm device.
- Use **generous whitespace** and large section gaps (64–128px) — empty is the luxury signal.
- Reserve **full-bleed near-black blocks** for rare editorial punctuation, not recurring stripes.
- Keep prices **tabular and monospaced** so they align cleanly down a grid.

### Don't
- **Don't** introduce a serif or script face — it breaks the accessible-luxury thesis instantly.
- **Don't** scale headings to "luxury hero" sizes — keep display small and confident.
- **Don't** use pills or rounded corners — geometry is sharp.
- **Don't** put gold/color into backgrounds, buttons, or large surfaces — gold is a tiny badge touch only.
- **Don't** add card shadows or hover-lift — the system is flat; depth comes from photos and whitespace.
- **Don't** use pure black `#000000` for body text — the brand ink is near-black `#0a0a0a`.
- **Don't** ship a dark-mode toggle — it erases the whitespace-and-punctuation logic.
- **Don't** use exclamation points, emoji, or urgency hype ("Selling fast!").
- **Don't** set prices or specs in a proportional sans — they belong in mono.
- **Don't** crowd the page — density reads as fast-fashion, not fine jewelry.


## 15. Agent Prompt Guide

### Quick Color Reference
- Background: `#ffffff`
- Text (ink): `#0a0a0a`
- Brand / Primary button: `#0a0a0a`
- On-brand (button text): `#ffffff`
- Inverse surface (editorial block): `#0a0a0a`
- Border (hairline): `#e5e5e5`
- Border strong (focus/active): `#0a0a0a`
- Muted text: `#6b6b6b`
- Accent gold (tiny use only): `#c9a86a`
- Bg deeper (default badge): `#ebebe8`

### Example Component Prompts

> **Hero:** "Create a Mejuri-style fine-jewelry hero. Pure white background `#ffffff`, near-black ink `#0a0a0a`. Headline in Syndicat Grotesk, sentence case, only 24–28px at weight 500 — small and confident, not a giant hero. Place a 12px UPPERCASE Simon Mono eyebrow tracked +0.08em above it. One warm-lit close-up photo of gold jewelry carries all the color. CTA: a sharp-cornered near-black rectangle, `0px` radius, white mono caps 'SHOP THE EDIT'. Lots of whitespace."

> **Product card:** "Design a Mejuri product card with no border, no shadow, no radius. Square photo on top (`object-fit: cover`), then product name in Simon Mono 14px, then price in Simon Mono 14px weight 500, tabular. On hover, cross-fade to an alternate photo over 240ms — no lift, no rounding."

> **Button set:** "Build four buttons, all `0px` radius, all Simon Mono UPPERCASE 13px tracked +0.04em: primary near-black `#0a0a0a` / white; secondary white with a 1px `#0a0a0a` border; ghost transparent with hover underline; inverse white button on a near-black block."

> **Input:** "Create a Mejuri form input: white fill, 1px `#e5e5e5` border, `0px` radius, Simon Mono 16px text, `#8a8a8a` placeholder. On focus, border goes to near-black `#0a0a0a` with a 2px outset focus ring. Label above in 13px mono UPPERCASE."

> **Editorial block:** "Make a full-bleed near-black `#0a0a0a` brand-story section with white copy. Heading in Syndicat Grotesk sentence case, body in Simon Mono. One inverse CTA (white button, near-black mono text). Use it sparingly — this is punctuation, not a recurring stripe."

> **Badge:** "Add a small `0px`-radius badge: gold variant `#e8dcc4` background with `#0a0a0a` mono caps for 'NEW' — keep it tiny; gold appears only here, never on large surfaces."

### Iteration Guide
1. **If it looks too 'startup'**, shrink the headings — Mejuri's H1 is 24px. Big type is the most common mistake.
2. **If it feels cheap**, add whitespace, not color. Empty space is the luxury signal; more color reads as fast-fashion.
3. **If prices look generic**, switch them to Simon Mono and make them tabular — the monospace is half the brand.
4. **If a corner is rounded anywhere**, set it to `0px`. Sharp geometry is non-negotiable.
5. **If you reached for gold**, pull it back — gold belongs in the photography and one tiny badge, nothing larger.
6. **If you added a shadow**, remove it and let whitespace plus the photograph create depth instead.
7. **If the copy has exclamation points or urgency**, rewrite it calm and declarative — confident understatement.
8. **If you used pure black `#000000` for body**, switch to near-black `#0a0a0a` — that softer ink is the brand's actual tone.

---

*Theme-toggle audit: score=0, signals=[none]*
