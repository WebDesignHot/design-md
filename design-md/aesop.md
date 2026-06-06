---
name: Aesop
tagline: Monochrome-warm apothecary — ivory canvas, charcoal type, Suisse Int'l set small, 0px corners.
updated_at: 2026-05-29T21:45:15.132Z
published_at: 2026-05-29T21:45:15.132Z
author: webdesignhot
source_url: https://www.aesop.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [retail]
tags: [light, minimal, sans, editorial, spacious]
preview_swatch: ['#fffef2', '#333333', '#f7ecdd']
related: []
description: 'Aesop''s site is the canonical monochrome-warm apothecary system: a signature ivory canvas `#fffef2` — a barely-warm cream that reads as paper rather than white — carrying charcoal `#333333` type set in Suisse Int''l (Swiss Typefaces). The defining move is restraint at scale. Where almost every luxury beauty brand reaches for an oversized display headline, Aesop sets its h1 at just **36px / weight 400** and runs body copy at a near-print **12px**, letting whitespace, photography, and the warm paper ground do the work. Every corner is sharp `0px` — no pills, no rounded cards, no soft chrome anywhere. The palette is essentially two values plus a taupe: ivory ground, charcoal ink, and a warm sand surface `#f7ecdd` for inset panels. CTAs invert that relationship — charcoal `#333333` fill with ivory text, still `0px`. There is no saturated accent, no gradient, no shadow language; depth is built from tonal warmth and generous margins, not elevation. The register is editorial, understated, intellectual — closer to a small-press literary journal or a Kinfolk spread than to a cosmetics storefront. This is luxury-minimal expressed as monochrome-warm: the absence of color *is* the brand, and the warmth of the paper is what keeps the austerity from going cold.'


# Canonical 8-role aliases (bg / text / brand / border / accent / muted / surface / danger).
# Maps role names to this entry's actual token names so role-aware
# downstream tools resolve `theme.background` → entry's `bg`, etc.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: surface
  muted: text-muted
  border: border
  ring: brand

colors:
  # Page grounds
  bg: '#fffef2'                  # signature ivory / cream canvas — warm paper, the brand's identity surface
  bg-soft: '#faf6ea'            # one step warmer-down — alternating section ground
  surface: '#f7ecdd'            # warm sand / taupe — inset panels, cards, quiet blocks
  surface-deep: '#efe3d2'       # secondary warm panel
  # Brand — charcoal, not pure black
  brand: '#333333'              # primary CTA fill, wordmark, charcoal ink — the only "dark" in the system
  brand-hover: '#1f1f1f'        # CTA darkens slightly on hover
  on-brand: '#fffef2'           # ivory text on charcoal CTAs (matches the canvas, not pure white)
  # Text
  text: '#333333'               # body copy, headings — warm charcoal, never pure black
  text-strong: '#1f1f1f'        # rare emphasis / wordmark weight
  text-muted: '#666666'         # captions, meta, secondary copy
  text-faint: '#8a8a8a'         # disclaimers, fine print
  # Borders & dividers
  border: '#333333'             # primary hairline — charcoal rule, used at 1px on ivory
  border-soft: '#d9cfbe'        # warm hairline divider on sand panels
  border-faint: '#e6dcc9'       # subtle separator
  # Semantic (used sparingly — system avoids saturated color)
  success: '#3a5a40'            # muted forest, confirmation only
  warning: '#8a6d3b'            # muted ochre
  danger: '#7a3030'             # muted brick — form errors, never bright red

typography:
  display:
    family: '"Suisse Int''l", "SuisseIntl", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif'
    weights: [400, 500]
  body:
    family: '"Suisse Int''l", "SuisseIntl", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif'
    weights: [400, 500]
  mono:
    family: '"Suisse Int''l Mono", ui-monospace, SFMono-Regular, Menlo, monospace'
    weights: [400]
  scale:
    display-hero:    { size: 48, weight: 400, lineHeight: 1.08, tracking: '-0.01em',  family: display }
    display-lg:      { size: 40, weight: 400, lineHeight: 1.1,  tracking: '-0.008em', family: display }
    h1:              { size: 36, weight: 400, lineHeight: 1.12, tracking: '-0.006em', family: display }
    h2:              { size: 30, weight: 400, lineHeight: 1.2,  tracking: '-0.004em', family: display }
    h3:              { size: 22, weight: 400, lineHeight: 1.3,  tracking: '0',        family: display }
    h4:              { size: 18, weight: 500, lineHeight: 1.35, tracking: '0',        family: body }
    body-lg:         { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body:            { size: 14, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 12, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    nav:             { size: 12, weight: 400, lineHeight: 1.2,  tracking: '0.01em',   family: body }
    button:          { size: 12, weight: 500, lineHeight: 1.0,  tracking: '0.01em',   family: body }
    label:           { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    eyebrow:         { size: 11, weight: 400, lineHeight: 1.4,  tracking: '0.08em',   family: body }
    caption:         { size: 11, weight: 400, lineHeight: 1.45, tracking: '0.01em',   family: body }

radius:
  none: 0
  micro: 1
  sm: 2

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160]

layout:
  page-width: 1280
  prose-width: 680
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
  modal: '0 16px 48px rgba(51, 51, 51, 0.16)'

accessibility:
  contrast-text-on-bg: 12.46
  contrast-text-on-brand: 12.46
  focus-ring: '1px solid #333333 + 2px outset gap'
  reduced-motion-honored: true

components:
  button-primary:   { bg: brand, text: on-brand, padding: '12px 24px', radius: 0, font: button, hover-bg: brand-hover }
  button-secondary: { bg: transparent, text: text, border: '1px solid border', padding: '12px 24px', radius: 0, font: button }
  button-ghost:     { bg: transparent, text: text, padding: '8px 0', radius: 0, font: button }   # text + underline only
  button-on-dark:   { bg: bg, text: text, padding: '12px 24px', radius: 0, font: button }        # ivory button on charcoal section
  card:             { bg: surface, border: 'none', radius: 0, padding: 32 }   # warm sand panel, no chrome
  input:            { bg: bg, border: '1px solid border', text: text, radius: 0, padding: '12px 14px', focus-border: brand }
  nav:              { bg: bg, text: text, height: 64, font: nav, border-bottom: 'none' }

lineage:
  summary: 'Aesop was founded in Melbourne in 1987 by Dennis Paphitis, a hairdresser, and the visual system has been almost monastically consistent ever since: amber apothecary bottles, dense ingredient-led label copy, and an ivory-and-charcoal identity that treats a cosmetics store like a pharmacy crossed with a reading room. The digital system is a direct translation of that store language. The canvas is a warm ivory `#fffef2` — paper, not white — and the only ink is a charcoal `#333333` set in Suisse Int''l (Swiss Typefaces, 2011), a neo-grotesque whose quiet, unmannered letterforms carry the brand''s intellectual register. The single most distinctive decision is restraint at scale: the h1 is just 36px at weight 400 and body copy runs near-print at 12px, an inversion of the oversized-display convention that dominates luxury beauty. Corners are sharp `0px` throughout; there is no shadow, no gradient, no saturated accent. Warmth comes entirely from the paper ground and the sand-taupe inset panels `#f7ecdd`. The lineage is Swiss-typographic rigour (Müller-Brockmann grids, Helvetica neutrality) fused with a literary, broadsheet-editorial sensibility — Aesop reads its own product copy the way a small-press journal reads an essay. It rejects the conventions of its own category: no before/after imagery, no urgency, no bright color, no rounded friendliness. The austerity is the luxury, and the warmth of the cream is what keeps the austerity humane.'
  influences:
    - { name: 'Suisse Int''l (Swiss Typefaces)', role: 'the neo-grotesque carrying 100% of the type system', url: 'https://www.swisstypefaces.com/fonts/suisse/' }
    - { name: 'Josef Müller-Brockmann / Swiss grid', role: 'objective grid + neutral type lineage behind the layout discipline', url: 'https://en.wikipedia.org/wiki/Josef_M%C3%BCller-Brockmann' }
    - { name: 'Helvetica / neo-grotesque tradition', role: 'unmannered sans-serif neutrality the brand voice depends on', url: 'https://en.wikipedia.org/wiki/Helvetica' }
    - { name: 'Kinfolk', role: 'editorial, muted, slow-living photographic register contemporaneous with the brand', url: 'https://www.kinfolk.com/' }
    - { name: 'Dieter Rams / functional minimalism', role: 'less-but-better product-design ethos mirrored in the chrome', url: 'https://en.wikipedia.org/wiki/Dieter_Rams' }
    - { name: 'Apothecary / pharmacy label tradition', role: 'ingredient-led dense label copy as the source of the voice', url: 'https://en.wikipedia.org/wiki/Apothecary' }
---


## 1. Visual Theme & Atmosphere

Aesop's site is the canonical expression of a **monochrome-warm apothecary** aesthetic. The first thing you notice is what is *missing*: there is no color. The canvas is an ivory `#fffef2` — a barely-warm cream that reads as paper rather than screen-white — and the only ink on it is a charcoal `#333333`. That is essentially the entire palette. A warm sand `#f7ecdd` shows up for inset panels and quiet blocks, and there is no saturated hue, no gradient, no glow anywhere. The effect is closer to a small-press literary journal or a well-made paperback than to a cosmetics storefront. The warmth of the paper is doing enormous work: drop the ivory back to pure white and the whole system goes clinical and cold; the cream is what keeps the austerity humane.

The defining typographic decision is **restraint at scale**. Almost every luxury beauty brand reaches for an oversized display headline — 64px, 80px, sometimes larger. Aesop refuses. Its h1 is set at just **36px at weight 400**, and body copy runs at a near-print **12–14px**. Headlines are not loud; they sit calmly in the page, the same charcoal as the body, distinguished only by size and air. This is confidence expressed as quietness — the brand trusts that the reader will lean in rather than be shouted at. The whole register depends on the assumption that you are reading, not scanning.

Every corner in the system is sharp **`0px`**. There are no pills, no rounded cards, no soft chrome of any kind. Buttons are rectangles. Inputs are rectangles. Image crops are hard-edged. Combined with the absence of shadow, this produces a flatness that feels architectural rather than digital — like type and image printed directly onto the page. Depth, where it exists, is built entirely from **tonal warmth and generous margins**: a sand panel sits a half-step away from the ivory ground, and that tiny temperature shift is the only "elevation" in the design.

The type is **Suisse Int'l** (Swiss Typefaces), a neo-grotesque with unmannered, objective letterforms. It is the perfect vehicle for the brand's intellectual voice: never decorative, never expressive, just clear. The CTA inverts the page relationship — charcoal `#333333` fill with ivory `#fffef2` text — but even the primary button stays small, set at 12px and 0px corners, so it never breaks the calm. Aesop's photography is tonal, dim, and editorial; the chrome's job is to disappear so the imagery and the long ingredient-led copy can carry the brand.

Where competitors signal premium with metallics, serifs, or saturated jewel tones, Aesop signals it through **subtraction**. The absence of color, the smallness of the type, the sharpness of the corners, the warmth of the paper — these are not omissions, they are the identity. This is luxury-minimal at its most disciplined: monochrome-warm, editorial, understated, and quietly unmistakable.

**Key Characteristics:**
- Signature ivory / cream canvas `#fffef2` — warm paper, never screen-white
- Warm charcoal `#333333` for *all* text and the brand — never pure black
- **Suisse Int'l** (Swiss Typefaces) carrying 100% of the type system
- Restraint at scale: h1 at **36px / weight 400**, body at **12–14px**
- Every corner sharp `0px` — no pills, no rounded cards, no soft chrome
- Zero shadow language — depth built from tonal warmth and whitespace
- Warm sand `#f7ecdd` as the only secondary surface (taupe inset panels)
- No saturated accent, no gradient — monochrome-warm by design
- CTA inverts the page: charcoal fill, ivory text, still `0px`
- Editorial / broadsheet register — reads like a journal, not a store
- Photography and long ingredient-led copy carry the brand, not chrome
- Generous margins; whitespace treated as a primary material


## 2. Color Palette & Roles

### Primary (Grounds)
- **Background** `#fffef2` [→ `body { background }`]: the signature ivory / cream canvas. Warm paper, the brand's identity surface — used on virtually every page.
- **Bg Soft** `#faf6ea`: a half-step warmer-down ground for alternating sections, so blocks separate without a rule.
- **Surface** `#f7ecdd`: warm sand / taupe. The only secondary surface — inset panels, quiet content blocks, quote cards.
- **Surface Deep** `#efe3d2`: a deeper warm panel for nested or secondary insets.

### Brand (The Only "Dark")
- **Brand** `#333333` [→ CTA `background`, wordmark]: warm charcoal. The single dark value in the system — primary CTA fill, wordmark, hairlines.
- **Brand Hover** `#1f1f1f`: charcoal darkens slightly on CTA hover. The only interactive color shift in the chrome.
- **On-Brand** `#fffef2`: ivory text on charcoal CTAs — matched to the *canvas*, not pure white, so dark and light surfaces share one warmth.

### Accent
- **None.** There is no saturated accent token. The warm sand `#f7ecdd` surface is the closest thing to an accent, and it is a ground, not a highlight. Resist the urge to add one — the absence is the brand.

### Interactive
- **Link** `#333333`: links are the same charcoal as body text, distinguished by a 1px underline that thickens on hover.
- **Focus** `#333333`: 1px solid charcoal outline with a 2px outset gap. No color change — only the ring appears.

### Neutral (Text)
- **Text** `#333333`: body copy and headings. Warm charcoal — never `#000`.
- **Text Strong** `#1f1f1f`: rare emphasis and wordmark weight.
- **Text Muted** `#666666`: captions, meta, secondary copy.
- **Text Faint** `#8a8a8a`: disclaimers, fine print, ingredient sub-lines.

### Borders
- **Border** `#333333`: the primary hairline — a 1px charcoal rule on ivory, used for dividers, input outlines, and secondary-button edges.
- **Border Soft** `#d9cfbe`: warm hairline divider on sand panels.
- **Border Faint** `#e6dcc9`: subtle separator where a charcoal rule would be too loud.

### Surface
- See Primary above — `#f7ecdd` (sand) and `#efe3d2` (deep sand) are the entire surface inventory. Cards do not get their own fill beyond these.

### Shadow
- **None at rest.** `card: none`, `card-hover: none`. The only shadow in the system is a soft modal scrim: `0 16px 48px rgba(51, 51, 51, 0.16)` — warm-tinted (charcoal, not black) to stay on-palette.

### Semantic (Used Sparingly)
- **Success** `#3a5a40`: muted forest — confirmation states only.
- **Warning** `#8a6d3b`: muted ochre — gentle cautions.
- **Danger** `#7a3030`: muted brick — form errors. Never a bright red; the system refuses high-chroma even for errors.


## 3. Typography Rules

### Font Family — Single Neo-Grotesque

Suisse Int'l (Swiss Typefaces, 2011) handles **100% of the typography**: display, headings, body, nav, button, caption. There is no serif, no second display face, no decorative cut anywhere. The voice depends on the typeface's neutrality — Suisse Int'l is an unmannered neo-grotesque in the Helvetica lineage but slightly warmer and more humanist in its proportions, which suits the warm-paper ground.

```
display: "Suisse Int'l", "SuisseIntl", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif
body:    "Suisse Int'l", "SuisseIntl", "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif
mono:    "Suisse Int'l Mono", ui-monospace, SFMono-Regular, Menlo, monospace
```

Loaded weights are essentially **400 (Regular)** and **500 (Medium)**. There is no bold display weight in active use — headings hold their authority through *size and air*, not weight. This is central to the brand: a 36px headline at weight 400 is the signature, and bumping it to 700 would break the register entirely.

### Hierarchy — Restraint at Scale

| Token | Size | Weight | Tracking | Line-Height | Case | Use |
|-------|------|--------|----------|-------------|------|-----|
| `display-hero` | 48 | 400 | -0.01em | 1.08 | sentence | rare full-bleed campaign headline |
| `display-lg` | 40 | 400 | -0.008em | 1.10 | sentence | landing section opener |
| `h1` | **36** | **400** | -0.006em | 1.12 | sentence | **the signature page headline** |
| `h2` | 30 | 400 | -0.004em | 1.20 | sentence | section heading |
| `h3` | 22 | 400 | 0 | 1.30 | sentence | sub-section / product title |
| `h4` | 18 | 500 | 0 | 1.35 | sentence | small heading, label group |
| `body-lg` | 16 | 400 | 0 | 1.60 | sentence | intro / lede paragraph |
| `body` | 14 | 400 | 0 | 1.60 | sentence | standard copy |
| `body-sm` | **12** | 400 | 0 | 1.55 | sentence | **the near-print default body size** |
| `nav` | 12 | 400 | 0.01em | 1.20 | sentence | top navigation links |
| `button` | 12 | 500 | 0.01em | 1.0 | sentence | CTA label |
| `label` | 12 | 500 | 0.02em | 1.40 | sentence | form labels |
| `eyebrow` | 11 | 400 | 0.08em | 1.40 | UPPERCASE | rare section kicker / category |
| `caption` | 11 | 400 | 0.01em | 1.45 | sentence | image captions, fine print |

### Principles

- **Set everything small.** The h1 lives at 36px / 400 and body at 12–14px. This is the single most important rule — restraint at scale *is* the brand. Do not scale headings up to "make them pop."
- **One weight does the work.** Headings hold at weight 400; reach for 500 only on small UI labels and the button. There is no 700.
- **Charcoal, not black.** All type is `#333333`. Pure `#000` is foreign to the system and reads cold against the warm ground.
- **Negative tracking on headings only.** Display sizes get a touch of −0.006 to −0.01em; body and small text stay at 0.
- **Generous line-height for body** (1.55–1.60). The copy is dense and long; the leading keeps the apothecary text readable.
- **Sentence case nearly everywhere.** All-caps appears only at the 11px eyebrow scale with wide +0.08em tracking — never at heading sizes.
- **Underline is the link signal**, not color. Links are charcoal with a 1px rule that thickens on hover.
- **Let air create hierarchy.** Section separation comes from whitespace and a half-step ground shift, not from larger or heavier type.


## 4. Component Stylings

### Buttons — Sharp Charcoal Rectangles (4 variants)

Every button is `0px` radius, small (12px label), and quiet. There is no pill, no rounded chip, no fill animation beyond a subtle darken.

**1. Primary** — charcoal fill, ivory text:
```
.btn-primary {
  background: #333333;
  color: #fffef2;            /* ivory, matched to canvas — not pure white */
  padding: 12px 24px;
  border-radius: 0;          /* sharp */
  font: 500 12px/1 "Suisse Int'l";
  letter-spacing: 0.01em;
  text-transform: none;
}
.btn-primary:hover { background: #1f1f1f; }
```

**2. Secondary** — outlined charcoal on ivory:
```
.btn-secondary {
  background: transparent;
  color: #333333;
  border: 1px solid #333333;
  padding: 12px 24px;
  border-radius: 0;
  font: 500 12px/1 "Suisse Int'l";
}
.btn-secondary:hover { background: #333333; color: #fffef2; }
```

**3. Ghost / Text** — label + underline only (the most-used inline CTA):
```
.btn-ghost {
  background: transparent;
  color: #333333;
  padding: 8px 0;
  border: none;
  border-radius: 0;
  text-decoration: underline;
  text-underline-offset: 4px;
  font: 500 12px/1 "Suisse Int'l";
}
.btn-ghost:hover { text-decoration-thickness: 2px; }
```

**4. On-Dark** — ivory button for charcoal sections:
```
.btn-on-dark {
  background: #fffef2;
  color: #333333;
  padding: 12px 24px;
  border-radius: 0;
  font: 500 12px/1 "Suisse Int'l";
}
.btn-on-dark:hover { background: #f7ecdd; }   /* warms toward sand */
```

### Cards — Warm Sand Panels, Zero Chrome

```
.card {
  background: #f7ecdd;       /* warm sand inset */
  border: none;
  border-radius: 0;          /* sharp */
  box-shadow: none;          /* flat */
  padding: 32px;
}
.product-card {
  background: transparent;   /* product cards sit on the ivory ground */
  border: none;
  border-radius: 0;
  padding: 0;
}
.product-card__image { width: 100%; }     /* hard-edged crop */
.product-card__name  { font: 400 14px "Suisse Int'l"; color: #333; margin-top: 12px; }
.product-card__price { font: 400 12px "Suisse Int'l"; color: #666; }
```

Cards have no shadow and no radius. A content card gets the warm sand fill; a product card gets *nothing* — the photograph sits directly on the ivory ground with name and price below. The image carries the identity.

### Badges / Tags / Pills — Minimal, No Color

Aesop barely uses badges, and when it does they are charcoal hairline rectangles, never colored chips.

| Badge | Bg | Text | Border | Use |
|-------|-----|------|--------|-----|
| Category tag | transparent | `#333` | 1px `#333` | product category |
| New | transparent | `#333` | 1px `#333` | rare launch flag |
| Sold out | transparent | `#666` | 1px `#d9cfbe` | out-of-stock |

All `0px` radius, `4px 10px` padding, 11px UPPERCASE +0.08em. There is no red sale badge, no colored "new" chip — the system refuses promotional color.

### Inputs / Forms — Flat Ivory, Charcoal Rule

```
.input {
  background: #fffef2;       /* ivory, matches the page */
  color: #333333;
  border: 1px solid #333333; /* charcoal hairline */
  border-radius: 0;          /* sharp */
  padding: 12px 14px;
  font: 400 14px "Suisse Int'l";
}
.input::placeholder { color: #8a8a8a; }
.input:focus {
  outline: 1px solid #333333;
  outline-offset: 2px;
  border-color: #333333;
}
.label {
  font: 500 12px "Suisse Int'l";
  letter-spacing: 0.02em;
  color: #333333;
  margin-bottom: 8px;
}
```

Forms are as austere as everything else — a charcoal rule, ivory fill, no rounding, no fill color on focus, just the outline ring.

### Navigation — Thin, Inline, Borderless

```
.nav {
  background: #fffef2;       /* same ivory as page — no separation bar */
  height: 64px;
  border-bottom: none;       /* nav floats on the ground */
}
.nav__link {
  font: 400 12px "Suisse Int'l";
  letter-spacing: 0.01em;
  color: #333333;
  text-decoration: none;
}
.nav__link:hover { text-decoration: underline; text-underline-offset: 4px; }
```

The header is a thin 64px band the same ivory as the page, with small charcoal links and no dividing rule — the nav floats on the canvas. The wordmark sits at the same weight as the rest; there is no oversized logo lockup.


## 5. Layout Principles

### Spacing System
- Base unit **4px**; scale `[0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160]`.
- Section gaps are large — **96–160px** between major blocks. The whitespace is the luxury cue.
- Component padding clusters at 24–32px; CTA padding is 12×24px.

### Grid & Container
- Page max-width **1280px**, centered, with wide outer margins on desktop so the content column never reaches the viewport edge.
- Prose column **680px** — narrow, for the long ingredient-led essays. The brand reads like a journal, so line length is tuned for reading, not for filling the screen.
- Product grids run 3–4-up at desktop, 2-up at tablet, 1-up at mobile, separated by generous gutters rather than rules.

### Whitespace Philosophy
- Whitespace is a **primary material**, not leftover space. Aesop will leave half a screen empty above a 36px headline rather than scale the headline up.
- Separation is achieved with air and a half-step ground shift (`#fffef2` → `#faf6ea`), not with borders or shadows.

### Section Cadence
- Alternate ivory `#fffef2` and warm sand `#f7ecdd` (or `#faf6ea`) grounds to pace a long page.
- Occasional full-bleed charcoal `#333333` section for emphasis, with ivory type and an on-dark button — the single inversion the system allows.
- Imagery is full-bleed or set in a generous margin; captions sit small (11px) beneath in muted charcoal.


## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| **None** | 0 | **default everywhere** — buttons, cards, inputs, images, badges |
| Micro | 1 | hairline-corner softening (rare, almost never used) |
| Small | 2 | tooltips / popovers only (rare) |

Aesop's radius scale is deliberately near-empty. The system is built on **sharp `0px` rectangles**. There are no pills, no rounded cards, no soft chips — the hard edge is part of the architectural, printed-on-paper feeling. If a future component truly needs a radius, prefer `0`; if it cannot be `0`, cap it at 1–2px. Anything ≥ 4px would read as foreign and friendly in a way that contradicts the brand's austerity. (Note: the seed scale included a `pill: 9999` token — it is wrong for this system and has been removed.)


## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | flat — `box-shadow: none` | cards, buttons, inputs, nav (default) |
| Tonal | half-step ground shift `#fffef2` → `#f7ecdd` | the only "elevation" at rest — a warm panel |
| Modal | `0 16px 48px rgba(51, 51, 51, 0.16)` | overlays / drawers only — warm-tinted, charcoal not black |

### Shadow Philosophy

Aesop treats shadow as a foreign material. Cards do not lift on hover; buttons do not gain depth on press — they darken in color instead. The sense of layering comes entirely from **tonal temperature**: a sand panel reads as "raised" not because of a shadow but because it is a half-step warmer and darker than the ivory ground. The only real shadow in the system is the scrim behind a modal or cart drawer, and even that is tinted charcoal (`rgba(51,51,51,...)`) rather than pure black, so it stays on-palette. The result is a flat, paper-like surface where depth is implied by warmth and air, never by elevation.


## 8. Interaction & Motion

- **Easing**: a single standard curve `cubic-bezier(0.4, 0, 0.2, 1)` for nearly all transitions — calm and even, no bounce, no overshoot.
- **Durations**: fast 150ms (hover color), standard 240ms (drawers, fades), slow 320ms (page / image transitions). Nothing is snappy or playful; the motion matches the unhurried tone.
- **Buttons**: hover darkens charcoal `#333333` → `#1f1f1f` (primary) or fills outline (secondary). No scale, no shadow, no lift — color is the only feedback.
- **Links / ghost CTAs**: underline thickens from 1px to 2px on hover; offset stays at 4px.
- **Cards**: no transform and no shadow on hover. A product image may cross-fade to an alternate shot over 320ms — the only motion on a card.
- **Nav / menu**: the full-screen menu and cart drawer slide / fade in at 240ms with the standard ease; the scrim fades to the warm-charcoal modal shadow.
- **Page transitions**: a quiet 320ms fade between routes — no slide, no wipe.
- **Reduced motion**: `prefers-reduced-motion: reduce` is honored. Cross-fades and slides resolve to instant or simple opacity changes; no functional state depends on animation.


## 9. Accessibility & A11y

Computed against the live tokens (ivory `#fffef2`, charcoal `#333333`):

- **Text on bg**: `#333333` on `#fffef2` = **12.46:1** — AAA at all sizes.
- **On-brand on brand (CTA)**: `#fffef2` on `#333333` = **12.46:1** — AAA. The CTA inversion is symmetric, so it passes identically.
- **Text on surface (sand)**: `#333333` on `#f7ecdd` = **10.83:1** — AAA.
- **Muted text on bg**: `#666666` on `#fffef2` = **5.66:1** — AA at all sizes, AAA at large.
- **Faint text on bg**: `#8a8a8a` on `#fffef2` ≈ **3.4:1** — reserve for ≥14px or non-essential fine print; do not use for body copy.
- **Danger on bg**: muted brick `#7a3030` on `#fffef2` — comfortably AA; the system's restrained semantic palette stays legible.

Guidance:
- **Focus indicators**: 1px solid `#333333` outline with a 2px outset gap. Because there is no color accent, the focus ring must always be visible — never remove the outline. The charcoal-on-ivory ring has ample contrast.
- **The small type is a watch-point.** Body at 12px is on-brand but borderline for some users; ensure a comfortable line-height (1.55+) and never drop essential copy below 12px. Offer the browser's zoom rather than relying on the small default.
- **ARIA**: standard landmark roles (`banner`, `nav`, `main`, `contentinfo`); the full-screen menu is a labeled `dialog` with focus trap; the cart is an `aria-live` region for quantity changes.
- **Keyboard nav**: all CTAs, nav links, and form fields are reachable in source order; the charcoal underline doubles as a non-color affordance for links.
- **Screen reader**: image captions and ingredient lists are real text, not baked into imagery — the dense apothecary copy is fully readable.
- **Reduced motion**: honored (see §8); no information is conveyed by animation alone.


## 10. Responsive Behavior

| Breakpoint | Range | Behavior |
|------------|-------|----------|
| Mobile | < 640 | 1-up product grid; nav collapses to a hamburger / menu icon; hero headline 36 → 28px; outer margins tighten to 20px |
| Tablet | 640–1024 | 2-up product grid; nav may stay collapsed; section gaps reduce from 160 → 96px |
| Desktop | 1024–1280 | 3–4-up grid; inline nav; full prose column at 680px |
| Wide | 1280–1536 | content caps at 1280px and centers; outer margins grow rather than the column |

- **Touch targets**: CTAs keep a 44×44px minimum tap area via 12×24px padding plus surrounding space, even though the label is only 12px.
- **Per-component collapsing**: the inline nav becomes a full-screen ivory menu; multi-column ingredient/spec blocks stack to a single column; alternating ground sections keep their cadence but compress vertical spacing.
- **Image behavior**: full-bleed imagery stays full-bleed on mobile; bounded images scale within the (now-tighter) margins. Crops remain hard-edged at every size.
- **Container queries**: where used, product and content cards switch from horizontal (image-left) to stacked (image-top) based on container width rather than viewport, keeping the sand-panel padding consistent.


## 11. Content & Voice

### Tone
Intellectual, understated, and unhurried — Aesop writes like a small-press essay, not a cosmetics ad. Copy is **declarative, ingredient- and ritual-led, and never urgent**: it explains a formulation the way a journal explains a subject, trusting the reader to be curious. No exclamation points, no emoji, no hype, no scarcity.

### Microcopy patterns
- Primary CTA: **"Add to cart"** (sentence case, never "ADD TO CART" or "Buy now")
- Secondary: **"Read more"**, **"Explore"**, **"Discover the range"** (calm, exploratory)
- Out of stock: **"Currently unavailable"** (declarative, no apology theater)
- Newsletter: **"Subscribe"** — terse; the surrounding copy explains, the button does not
- Confirmation: **"Your selection has been added to the cart."** (full sentence, no exclamation)

### Empty states
- Empty cart: **"Your cart is currently empty."** — declarative, followed by a quiet "Explore the range" ghost link.
- No results: **"No products match your selection."** — never cute, never an illustration.

### CTA verb conventions
- Use: **Add / Explore / Discover / Read / Subscribe / Find a store**
- Avoid: **Buy / Shop now / Get yours / Grab it**, and all urgency ("Limited time", "Last chance", "Hurry"). The brand never rushes the reader.


## 12. Dark Mode & Theming

**Light-only by design.** The warm ivory canvas `#fffef2` *is* the brand — invert it and the system loses its meaning entirely. There is no dark-mode storefront; the warmth of the paper ground, the charcoal-not-black ink, and the sand inset panels form a single tonal identity that cannot be flipped without becoming a different brand. The closest thing to a "dark" treatment is the occasional full-bleed charcoal `#333333` section with ivory type — but that is an *emphasis device within* the light system, not a theme. Theme switching is not part of the visual language.


## 13. Lineage & Influences

Aesop was founded in Melbourne in 1987 by Dennis Paphitis, a hairdresser, and the visual system has been almost monastically consistent ever since: amber apothecary bottles, dense ingredient-led label copy, and an ivory-and-charcoal identity that treats a cosmetics store like a pharmacy crossed with a reading room. The digital system is a direct translation of that store language. The canvas is a warm ivory `#fffef2` — paper, not white — and the only ink is a charcoal `#333333` set in **Suisse Int'l** (Swiss Typefaces, 2011), a neo-grotesque whose quiet, unmannered letterforms carry the brand's intellectual register. The single most distinctive decision is **restraint at scale**: the h1 is just 36px at weight 400 and body copy runs near-print at 12px, an inversion of the oversized-display convention that dominates luxury beauty. Corners are sharp `0px` throughout; there is no shadow, no gradient, no saturated accent. Warmth comes entirely from the paper ground and the sand-taupe inset panels `#f7ecdd`.

The lineage is **Swiss-typographic rigour** — Müller-Brockmann's objective grids and the Helvetica neutrality tradition — fused with a **literary, broadsheet-editorial** sensibility. Aesop reads its own product copy the way a small-press journal reads an essay, and the chrome's restraint (no color, small type, hard edges) is in service of that reading. It deliberately rejects the conventions of its own category: no before/after imagery, no urgency, no bright color, no rounded friendliness. The Dieter Rams "less, but better" ethos is visible in every subtracted decision, and the slow, muted photographic register sits alongside contemporaries like Kinfolk. The austerity is the luxury, and the warmth of the cream is what keeps the austerity humane.

**Named influences:**
- **Suisse Int'l (Swiss Typefaces)** — the neo-grotesque carrying 100% of the type system; the brand's intellectual neutrality lives in this typeface.
- **Josef Müller-Brockmann / Swiss grid** — the objective-grid and neutral-type lineage behind the layout discipline.
- **Helvetica / neo-grotesque tradition** — the unmannered sans-serif neutrality the voice depends on.
- **Kinfolk** — the editorial, muted, slow-living photographic register the imagery shares.
- **Dieter Rams / functional minimalism** — the "less, but better" ethos mirrored in the subtracted chrome.
- **Apothecary / pharmacy label tradition** — dense, ingredient-led label copy as the source of the brand voice.


## 14. Do's and Don'ts

### Do
- Use the warm ivory `#fffef2` as the canvas — it is the brand. Reach for it before any other ground.
- Set *all* type in **charcoal `#333333`**, never pure black. Black reads cold against the warm paper.
- Keep the **h1 at ~36px / weight 400**. Restraint at scale is the signature — let air, not size, create authority.
- Run body copy small (**12–14px**) with generous line-height (1.55+). The apothecary copy is meant to be *read*.
- Use **Suisse Int'l** (or a neo-grotesque fallback) for everything — display, body, nav, button.
- Keep every corner **`0px`**. Buttons, cards, inputs, images — sharp rectangles only.
- Use the warm sand `#f7ecdd` for inset panels and quiet blocks — the only secondary surface.
- Pace long pages by alternating ivory and sand grounds, plus the occasional full-bleed charcoal section.
- Let photography and long-form ingredient copy carry the brand; keep the chrome quiet.
- Write declarative, unhurried, ingredient-led copy. CTAs are "Add to cart" / "Explore" / "Discover".

### Don't
- **Don't** use pure white `#ffffff` as the page ground — it kills the warmth and goes clinical.
- **Don't** use pure black `#000` for type or rules — charcoal `#333333` only.
- **Don't** scale headings up to "make them pop." A 64px+ display headline breaks the register.
- **Don't** use bold (700) display weight. Headings hold at 400; 500 is for small labels only.
- **Don't** add a saturated accent, gradient, or colored badge — the absence of color *is* the identity.
- **Don't** round any corner. No pills, no rounded cards, no soft chips. (Remove the seed's `pill: 9999`.)
- **Don't** add card shadows or hover-lift. The system is flat; depth comes from tonal warmth.
- **Don't** use a serif or a second display face. Suisse Int'l does all the work.
- **Don't** use urgency or promotional language ("Buy now", "Last chance", exclamation points, emoji).
- **Don't** introduce a dark mode — the ivory ground cannot be inverted without becoming a different brand.


## 15. Agent Prompt Guide

### Quick Color Reference
```
bg (ivory canvas):    #fffef2
bg-soft:              #faf6ea
surface (warm sand):  #f7ecdd
brand / text / ink:   #333333
brand-hover:          #1f1f1f
on-brand (ivory):     #fffef2
text-muted:           #666666
border (charcoal):    #333333
border-soft:          #d9cfbe
danger (muted brick): #7a3030
```

### Example Component Prompts

> **Hero** — "Create an Aesop-style landing hero. Warm ivory background `#fffef2`. Set the headline in Suisse Int'l (fallback Helvetica Neue) at **36px, weight 400**, sentence case, charcoal `#333333` — do NOT scale it up. Below it, one line of 14px body copy in muted charcoal `#666`, then a single sharp-cornered CTA: `0px` radius, charcoal `#333333` fill, ivory `#fffef2` text, 12px label, 12×24px padding. No shadow, no color accent, lots of whitespace above the headline."

> **Card** — "Design a content card on warm sand `#f7ecdd`, `0px` radius, no border, no shadow, 32px padding. Heading 22px / weight 400 charcoal, body 14px charcoal, and a ghost CTA that is just charcoal text with a 1px underline (offset 4px). Keep it flat and quiet."

> **Product grid** — "Build a 3-up product grid on ivory `#fffef2`. Each product is a hard-edged image (no radius, no shadow) sitting directly on the ground, with the name 14px charcoal and price 12px in `#666` below. Generous gutters, no card chrome at all."

> **Form** — "Create a newsletter signup. Ivory `#fffef2` inputs with a 1px charcoal `#333` border, `0px` radius, 12×14px padding, 14px Suisse Int'l. Label is 12px weight 500. Submit button is charcoal fill, ivory text, `0px`, 12px label. No rounded corners anywhere."

> **Nav** — "Build a 64px-tall header the same ivory `#fffef2` as the page, no bottom border. Small 12px charcoal nav links with an underline-on-hover. Wordmark at the same weight as the links — no oversized logo."

> **Editorial section** — "Add a full-bleed charcoal `#333333` section with ivory `#fffef2` headline (36px / 400) and body, plus one ivory on-dark button (`#fffef2` fill, charcoal text, `0px`). This is the single dark-emphasis device the system allows."

### Iteration Guide
1. **If it looks loud, shrink the type.** The most common failure is headlines that are too big — pull the h1 back to 36px / 400.
2. **If it looks cold, check the ground.** Pure white `#ffffff` instantly breaks the brand; switch it to ivory `#fffef2` and the warmth returns.
3. **If it looks generic-minimal, warm the secondary surface.** Swap any gray panel for sand `#f7ecdd`.
4. **If a corner looks friendly, set it to `0px`.** Hunt down every `border-radius` and zero it — including buttons and images.
5. **If there's a shadow, remove it.** Replace hover-lift with a subtle charcoal darken (`#333` → `#1f1f1f`) or an underline thicken.
6. **If you added a color, take it out.** No accent belongs here; restraint to two tones plus sand is the whole point.
7. **If the copy is selling, make it explain.** Rewrite urgency/hype as calm, ingredient-led, declarative prose.
8. **If hierarchy is unclear, add air, not weight.** Increase margins and section gaps before bumping a font size or weight.

---

*Theme-toggle audit: score=0, signals=[none]*
