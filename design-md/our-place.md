---
name: Our Place
tagline: Warm-heritage cookware DTC — Cheltenham serif at light 300 on a cream canvas, terracotta SHOP NOW CTAs, Plaid body.
updated_at: 2026-05-29T21:45:30.347Z
published_at: 2026-05-29T21:45:30.347Z
author: webdesignhot
source_url: https://fromourplace.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [retail]
tags: [light, warm, serif, commerce, heritage]
preview_swatch: ['#fcfaf6', '#af5a3c', '#35312e']
related: []
description: 'Our Place — the cookware brand behind the Always Pan — builds its storefront on warmth. The canvas is a soft warm cream `#fcfaf6` (not white), type is a warm brown-black `#35312e`, and the display face is **Cheltenham** — a humanist serif set at an unusually *light* weight (300) for the hero, where the h1 runs 60px. Body copy is the brand''s own **Plaid** sans at 16px. The signature is the **terracotta / clay CTA** `#af5a3c` (rgb 175,90,60): a "SHOP NOW" button in white text at a small `4px` radius, while quieter secondary actions sit in warm cream fills at a softer `8px` radius. The register is modern-heritage, earthy, and editorial — a kitchen-table warmth rather than the cool pure-white minimalism most cookware DTC defaults to. Where competitors go stainless and clinical, Our Place leans terracotta, cream, and serif: the palette of a sunlit pantry, the typography of a recipe card you''d keep. Color personality lives in the single clay CTA and the product photography (the Spice, Steam, Char, and Blue Salt colorways of the pans), while the chrome stays warm-neutral cream and brown-black. The result reads inviting and grown-up — heritage cues delivered with a contemporary DTC discipline.'


# Canonical 8-role aliases (bg / text / brand / border / accent / muted / surface / danger).
# Maps role names to this entry's actual token names so role-aware
# downstream tools resolve `theme.background` → entry's `bg`, etc.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: brand
  muted: text-muted
  border: border
  ring: brand

colors:
  # Page grounds
  bg: '#fcfaf6'                  # warm cream canvas — the dominant surface (live-probed, NOT white)
  bg-soft: '#f6f1e8'            # deeper warm cream for alternating sections
  bg-deeper: '#efe7d8'         # warmest sand panel for nested modules
  # Surfaces
  surface: '#ffffff'           # cards may sit on true white to lift off the cream
  surface-soft: '#f6f1e8'      # quiet warm-cream card / module background
  # Brand — Our Place signature terracotta / clay
  brand: '#af5a3c'             # terracotta — the signature clay CTA color (rgb 175,90,60, live-probed)
  brand-deep: '#8f4730'        # deepened terracotta for hover / text-on-cream emphasis
  brand-soft: '#d8a087'        # pale clay tint for backgrounds / hover washes
  on-brand: '#ffffff'          # white label on the terracotta CTA
  # Secondary CTA — warm cream fill (live-probed)
  cta-secondary-bg: '#ebe5d4'  # warm cream secondary-button fill
  cta-secondary-text: '#35312e' # brown-black label on the cream secondary
  # Text
  text: '#35312e'              # body + headings — warm brown-black (live-probed)
  text-strong: '#2a2724'       # max-contrast emphasis (rare)
  text-muted: '#6b645c'        # meta, captions, secondary copy
  text-faint: '#9a9189'        # disclaimer / utility
  text-on-image: '#ffffff'     # white headline/copy over photographic plates (hero h1, live-probed)
  link: '#af5a3c'              # inline links pick up the terracotta
  link-hover: '#8f4730'        # deepen on hover
  # Borders & dividers
  border: '#e4dccb'           # warm hairline divider on cream
  border-strong: '#35312e'    # brown-black emphasis hairline / input focus
  border-soft: '#efe7d8'      # faintest warm divider
  # Semantic — tuned warm to fit the palette
  success: '#5a7a4d'          # muted sage green
  warning: '#c8861a'          # warm amber
  danger: '#a73b2b'           # warm brick red
  info: '#5c707e'             # muted slate (matches live --tw-ring-color base)

typography:
  display:
    family: 'Chelt, Cheltenham, Georgia, "Times New Roman", serif'
    weights: [300, 400, 500]
  body:
    family: 'Plaid-XS-Web, Plaid, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 300, lineHeight: 1.02, tracking: '-0.01em',  family: display }
    display-lg:      { size: 60, weight: 300, lineHeight: 1.05, tracking: '-0.005em', family: display }
    h1:              { size: 60, weight: 300, lineHeight: 1.05, tracking: '-0.005em', family: display }
    h2:              { size: 40, weight: 400, lineHeight: 1.15, tracking: '0',        family: display }
    h3:              { size: 28, weight: 400, lineHeight: 1.25, tracking: '0',        family: display }
    h4:              { size: 22, weight: 500, lineHeight: 1.3,  tracking: '0',        family: display }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    button:          { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0.04em',   family: body }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.2,  tracking: '0.14em',   family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0.02em',   family: body }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
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
  card-hover: '0 8px 24px rgba(53, 49, 46, 0.10)'
  modal: '0 24px 64px rgba(53, 49, 46, 0.18)'

accessibility:
  contrast-text-on-bg: 12.36
  contrast-on-brand: 4.83
  contrast-secondary-cta: 10.24
  focus-ring: '2px solid #af5a3c + 2px outset gap'
  reduced-motion-honored: true

components:
  button-primary:   { bg: brand, text: on-brand, padding: '12px 22px', radius: 4, font: button, hover-bg: brand-deep }
  button-secondary: { bg: cta-secondary-bg, text: cta-secondary-text, padding: '12px 22px', radius: 8, font: button }
  button-outline:   { bg: transparent, text: text, border: '1px solid border-strong', padding: '11px 21px', radius: 8, font: button }
  button-ghost:     { bg: transparent, text: brand, padding: '12px 18px', radius: 8, font: button }
  card:             { bg: surface, border: '1px solid border', radius: 12, padding: 24 }
  input:            { bg: bg, border: '1px solid border', text: text, radius: 8, padding: '12px 14px', focus-border: brand }
  badge:            { bg: cta-secondary-bg, text: text, radius: 4, padding: '4px 10px', font: eyebrow }

lineage:
  summary: 'Our Place launched in 2019 as a values-led, mission-driven DTC cookware brand built around one hero object — the Always Pan — and its identity rejects the cold stainless minimalism of legacy cookware. The system is warm by design: a cream `#fcfaf6` canvas (never pure white), warm brown-black `#35312e` type, the humanist serif **Cheltenham** set at a notably light weight (300) for the 60px hero, and the brand''s own **Plaid** sans for body. The signature move is the **terracotta / clay CTA** `#af5a3c` — a "SHOP NOW" button in white at a small `4px` radius — paired with quieter warm-cream secondaries at a softer `8px` radius. This places Our Place in a modern-heritage register: the editorial warmth of food publishing (Kinfolk, Cherry Bombe), the earthen palette of artisanal ceramics, and the recipe-card serif of a vintage cookbook, executed with contemporary DTC discipline. Color personality lives in the single clay CTA and the multi-colorway product photography (Spice, Steam, Char, Blue Salt), while the chrome stays warm-neutral cream and brown-black. Where competitors go clinical and stainless, Our Place leans pantry-warm — terracotta, cream, serif — and reads as a kitchen you''d want to cook in rather than a showroom.'
  influences:
    - { name: 'Cheltenham (ITC / Tony Stan revival of the 1896 Goodhue design)', role: 'humanist serif at light 300 carrying the 60px hero display', url: 'https://fonts.adobe.com/fonts/itc-cheltenham' }
    - { name: 'Kinfolk', role: 'warm editorial food-and-home register, cream-and-earth palette tone', url: 'https://www.kinfolk.com/' }
    - { name: 'Cherry Bombe', role: 'contemporary food-media warmth and serif-led editorial cooking voice', url: 'https://cherrybombe.com/' }
    - { name: 'Aesop', role: 'warm-neutral apothecary chrome and restrained serif-adjacent product-forward retail', url: 'https://www.aesop.com/' }
    - { name: 'Heath Ceramics', role: 'earthen terracotta-and-clay artisanal palette and modern-heritage craft positioning', url: 'https://www.heathceramics.com/' }
    - { name: 'Apartamento', role: 'lived-in, warm, human-domestic editorial sensibility', url: 'https://www.apartamentomagazine.com/' }
---

## 1. Visual Theme & Atmosphere

Our Place's storefront feels like a sunlit pantry rather than a cookware showroom. The whole system is staged on a **warm cream canvas `#fcfaf6`** — deliberately *not* white — with type in a soft **warm brown-black `#35312e`**. The display face is **Cheltenham**, a humanist serif with a long literary pedigree, and the brand sets it at an unusually *light* weight: the hero h1 runs **60px at weight 300**. That single choice — a large, low-weight serif on cream — establishes the entire mood: heritage, editorial, and grown-up, but airy rather than stuffy. Body copy is the brand's own **Plaid** sans at 16px, which keeps the running text crisp and contemporary against the serif headlines.

The defining accent is the **terracotta / clay CTA `#af5a3c`** (rgb 175, 90, 60). The primary "SHOP NOW" button is a warm clay rectangle with white text at a small **`4px` radius** — tight, confident, the one truly saturated element on the page. Quieter secondary actions retreat into **warm cream fills `#ebe5d4`** at a softer **`8px` radius**, so the hierarchy is legible at a glance: clay means *go*, cream means *consider*. There are no neon accents, no cool blues, no stainless grays in the chrome — the color personality is entirely earthen.

Typographically the register is **modern-heritage**. The serif headline does the emotional work (a recipe-card, cookbook-cover warmth), while Plaid handles the practical copy. Eyebrows and button labels are the only uppercase moments, set with wide tracking like a specimen label. Nothing shouts: the page moves with the unhurried confidence of a food magazine spread, letting whitespace and the cream ground breathe between modules.

The **shape language is gently rounded but restrained**. The clay primary holds a crisp `4px`; cream secondaries, cards, and inputs soften to `8–12px`. Nothing is fully pill-shaped in the chrome except utility chips — the rounding is *comfortable*, not *bubbly*. This keeps the brand reading as considered and tactile (like a well-thrown ceramic) rather than playful or techy.

Atmospherically, Our Place sits with **Kinfolk, Cherry Bombe, Heath Ceramics, and Aesop**: warm editorial food-and-home culture crossed with artisanal-craft palette and restrained apothecary chrome. It rejects the cold stainless minimalism that legacy cookware defaults to. The color comes from the clay CTA and the multi-colorway product photography (Spice, Steam, Char, Blue Salt) — never from a loud gradient or a saturated UI. The result is inviting, earthy, and quietly premium.

**Key Characteristics:**
- Warm **cream canvas `#fcfaf6`** (live-probed) — intentionally not white
- Warm **brown-black `#35312e`** type (live-probed) — never pure black
- **Cheltenham serif** display at a notably *light* weight (h1 = 60px / 300)
- Brand-owned **Plaid** sans for all body and UI copy
- Signature **terracotta / clay CTA `#af5a3c`** — white "SHOP NOW", `4px` radius
- Warm **cream secondary buttons `#ebe5d4`** at a softer `8px` radius
- Earthen, food-warm palette — no cool grays, no stainless, no neon
- Gentle, comfortable rounding (4–12px) — considered, not bubbly
- Editorial, magazine-paced layout with generous cream whitespace
- Color delivered through the clay CTA and product colorways, not the chrome


## 2. Color Palette & Roles

### Primary / Canvas
- **Background** `#fcfaf6` [→ `bg`]: warm cream — the dominant surface for the whole storefront (live-probed; not white).
- **Bg Soft** `#f6f1e8` [→ `bg-soft`]: deeper warm cream for alternating sections and quiet panels.
- **Bg Deeper** `#efe7d8` [→ `bg-deeper`]: warmest sand panel for nested modules and callouts.

### Surface
- **Surface** `#ffffff` [→ `surface`]: true white for cards that need to lift cleanly off the cream ground.
- **Surface Soft** `#f6f1e8` [→ `surface-soft`]: quiet warm-cream card / module background.

### Brand — Terracotta / Clay (the signature)
- **Brand** `#af5a3c` [→ `brand`]: terracotta — the clay "SHOP NOW" CTA and primary accent (rgb 175,90,60, live-probed).
- **Brand Deep** `#8f4730` [→ `brand-deep`]: deepened clay for button hover and text-on-cream emphasis.
- **Brand Soft** `#d8a087` [→ `brand-soft`]: pale clay tint for hover washes and tinted backgrounds.
- **On-Brand** `#ffffff` [→ `on-brand`]: white label on the terracotta CTA.

### Secondary CTA — Warm Cream (live-probed)
- **CTA Secondary Bg** `#ebe5d4` [→ `cta-secondary-bg`]: warm cream fill of quieter secondary buttons.
- **CTA Secondary Text** `#35312e` [→ `cta-secondary-text`]: brown-black label on the cream secondary.

### Text
- **Text** `#35312e` [→ `text`]: body and headings — warm brown-black (live-probed, not pure black).
- **Text Strong** `#2a2724` [→ `text-strong`]: max-contrast emphasis (rare).
- **Text Muted** `#6b645c` [→ `text-muted`]: meta, captions, secondary copy.
- **Text Faint** `#9a9189` [→ `text-faint`]: disclaimers and utility text.
- **Text On Image** `#ffffff` [→ `text-on-image`]: white headline/copy over photographic plates (the live-probed hero h1 is white).

### Interactive
- **Link** `#af5a3c` [→ `link`]: inline links pick up the terracotta.
- **Link Hover** `#8f4730` [→ `link-hover`]: deepens to the darker clay on hover.

### Borders & Dividers
- **Border** `#e4dccb` [→ `border`]: warm hairline divider on cream.
- **Border Strong** `#35312e` [→ `border-strong`]: brown-black emphasis hairline and input-focus border.
- **Border Soft** `#efe7d8` [→ `border-soft`]: faintest warm section divider.

### Shadow
- Shadows are **warm-tinted** `rgba(53, 49, 46, …)` (brown-black, never pure black): `0 8px 24px rgba(53,49,46,0.10)` for card hover, `0 24px 64px rgba(53,49,46,0.18)` for modals.

### Semantic — Tuned Warm to Fit the Palette
- **Success** `#5a7a4d` [→ `success`]: muted sage green — confirmations, in-stock.
- **Warning** `#c8861a` [→ `warning`]: warm amber — low-stock, caution.
- **Danger** `#a73b2b` [→ `danger`]: warm brick red — errors (sits close to the clay hue, deepened).
- **Info** `#5c707e` [→ `info`]: muted slate — informational notes (matches the live `--tw-ring-color` base hue).


## 3. Typography Rules

### Font Family — Serif Display + Brand Sans Body

Our Place pairs two faces. **Cheltenham** (a humanist serif, live-probed as `Chelt`) carries every display moment — the hero, section headings, and editorial titles — and crucially it runs at a *light* weight (300) for the big h1. The brand's own **Plaid** sans (live-probed as `Plaid-XS-Web`) handles all running copy, nav, labels, and buttons. The serif supplies the heritage/editorial warmth; the sans keeps the practical text crisp and modern.

```
display: Chelt, Cheltenham, Georgia, "Times New Roman", serif
body:    Plaid-XS-Web, Plaid, system-ui, -apple-system, sans-serif
mono:    ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace   (utility only — not in chrome)
```

Display weights cluster **light**: 300 for the hero, 400–500 for smaller headings. The deliberate move is the **60px hero at weight 300** — large but airy, never bold. Body weights run 400 / 500 / 600, with 600 reserved for button labels and inline emphasis.

### Hierarchy — Warm Editorial Scale

| Token | Size | Weight | Family | Tracking | Case | Use |
|-------|------|--------|--------|----------|------|-----|
| `display-hero` | 80 | 300 | Cheltenham | -0.01em | sentence | oversized landing display |
| `display-lg` | 60 | 300 | Cheltenham | -0.005em | sentence | full-bleed editorial headline |
| `h1` | 60 | 300 | Cheltenham | -0.005em | sentence | hero headline (live-probed: 60px / 300, white on image) |
| `h2` | 40 | 400 | Cheltenham | 0 | sentence | section headings |
| `h3` | 28 | 400 | Cheltenham | 0 | sentence | sub-section / module headings |
| `h4` | 22 | 500 | Cheltenham | 0 | sentence | card / spec headings |
| `body-lg` | 18 | 400 | Plaid | 0 | sentence | lead paragraphs (1.6 line-height) |
| `body` | 16 | 400 | Plaid | 0 | sentence | default body (live-probed; 1.55 line-height) |
| `body-sm` | 14 | 400 | Plaid | 0 | sentence | secondary copy, fine print |
| `button` | 14 | 600 | Plaid | +0.04em | UPPERCASE | "SHOP NOW", "ADD TO BAG" |
| `eyebrow` | 12 | 600 | Plaid | +0.14em | UPPERCASE | section labels, "BESTSELLER" |
| `label` | 13 | 500 | Plaid | +0.02em | sentence | form labels, swatch names |
| `caption` | 12 | 400 | Plaid | +0.02em | sentence | image captions, meta |
| `nav` | 14 | 500 | Plaid | +0.02em | sentence | primary nav items |
| `price` | 16 | 500 | Plaid | 0 | sentence | product price under card |

### Principles

- **Light serif headlines.** The hero is 60px Cheltenham at weight 300 — large, warm, and airy; never bold. Lightness *is* the heritage cue.
- **Serif sells, sans informs.** Cheltenham handles display warmth; Plaid handles all running copy, nav, and UI — the pairing is the brand.
- **Sentence case for headlines, UPPERCASE for labels.** Headlines read like a recipe-card phrase; only eyebrows and button labels go caps, with wide tracking.
- **Generous body rhythm.** 1.55–1.6 line-height on Plaid gives the catalog its unhurried, magazine pace.
- **Tighten display, loosen labels.** Big serif display tracks slightly negative; small uppercase Plaid labels track wide (+0.04 to +0.14em).
- **Bold is punctuation, not display.** Plaid 600 appears for button labels and inline emphasis only — never for the serif hero.
- **Warm-neutral type, never pure black.** All text is the brown-black `#35312e`; pure `#000000` would break the warm palette.


## 4. Component Stylings

### Buttons — Clay Primary, Cream Secondary

```
/* Primary: terracotta "SHOP NOW" (live-probed clay CTA) */
.btn-primary {
  background: #af5a3c;            /* terracotta / clay */
  color: #ffffff;
  padding: 12px 22px;
  border-radius: 4px;            /* tight — the live-probed primary radius */
  font: 600 14px/1 Plaid;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  transition: background 150ms;
}
.btn-primary:hover { background: #8f4730; }   /* deepens to darker clay */
```

```
/* Secondary: warm cream fill (live-probed) */
.btn-secondary {
  background: #ebe5d4;           /* warm cream */
  color: #35312e;               /* brown-black label */
  padding: 12px 22px;
  border-radius: 8px;           /* softer than the primary */
  font: 600 14px/1 Plaid; letter-spacing: 0.04em; text-transform: uppercase;
}
.btn-secondary:hover { background: #efe7d8; }
```

```
/* Outline: tertiary action on cream */
.btn-outline {
  background: transparent; color: #35312e;
  border: 1px solid #35312e;
  padding: 11px 21px; border-radius: 8px;
  font: 600 14px/1 Plaid; letter-spacing: 0.04em; text-transform: uppercase;
}
.btn-outline:hover { background: #35312e; color: #fcfaf6; }
```

```
/* Ghost: inline / link-button in clay */
.btn-ghost {
  background: transparent; color: #af5a3c;
  padding: 12px 18px; border-radius: 8px;
  font: 600 14px/1 Plaid; letter-spacing: 0.04em; text-transform: uppercase;
  text-decoration: underline; text-underline-offset: 4px;
}
.btn-ghost:hover { color: #8f4730; }
```

Four variants. The signature is the **terracotta primary at a tight `4px` radius** with white uppercase Plaid; everything quieter (secondary, outline, ghost) softens to `8px` and stays warm-neutral. Clay means *go*; cream means *consider*. Never paint a secondary in a cool color.

### Cards — Warm Lift Off the Cream

```
.card {
  background: #ffffff;           /* true white to lift off cream */
  border: 1px solid #e4dccb;    /* warm hairline */
  border-radius: 12px;          /* comfortable rounding */
  padding: 24px;
  box-shadow: none;
}
.card:hover { box-shadow: 0 8px 24px rgba(53, 49, 46, 0.10); }  /* warm-tinted lift */
.product-card__name  { font: 500 16px Plaid; color: #35312e; margin-top: 12px; }
.product-card__price { font: 500 16px Plaid; color: #35312e; margin-top: 4px; }
```

Cards sit on true white to separate from the cream ground, framed by a warm hairline at a comfortable `12px` radius. At rest they're flat; on hover a faint *warm-tinted* shadow (brown-black, never pure black) lifts them. The product photo carries the colorway identity.

### Badges / Tags — Warm Specimen Labels

```
.badge {
  background: #ebe5d4;          /* warm cream */
  color: #35312e;
  padding: 4px 10px; border-radius: 4px;
  font: 600 12px Plaid; letter-spacing: 0.14em; text-transform: uppercase;
}
.badge--bestseller { background: #af5a3c; color: #ffffff; }   /* clay highlight */
```

Badges are warm-cream, uppercase Plaid specimen labels — "BESTSELLER", "NEW", "BACK IN STOCK". The one highlighted variant uses the clay fill with white text. No cool-colored badges.

### Inputs / Forms — Warm Hairline, Clay Focus

```
.input {
  background: #fcfaf6;          /* cream, matching canvas */
  border: 1px solid #e4dccb;   /* warm hairline */
  border-radius: 8px;
  padding: 12px 14px;
  font: 400 16px Plaid;         /* 16px avoids mobile zoom */
  color: #35312e;
}
.input::placeholder { color: #9a9189; }
.input:focus { border-color: #af5a3c; outline: 2px solid #af5a3c; outline-offset: 2px; }
```

Newsletter and search fields sit on the cream canvas with a warm hairline at `8px`. Focus picks up the **terracotta** ring — the one place the brand color enters a form.

### Navigation — Thin Cream Bar, Sentence-Case

```
.nav { height: 64px; background: #fcfaf6; border-bottom: 1px solid #e4dccb; }
.nav__item {
  font: 500 14px Plaid; letter-spacing: 0.02em; color: #35312e;
  text-transform: none;
}
.nav__item:hover { color: #af5a3c; }
.nav__cart { color: #af5a3c; }   /* cart / promo accents in clay */
```

A thin 64px cream bar with a warm hairline bottom border. Nav items are sentence-case Plaid; hover and the cart/account accents pick up the clay. Over a full-bleed photographic hero the nav may render with white type, settling to brown-black-on-cream once scrolled.


## 5. Layout Principles

### Spacing System
Base unit **4px**; scale `[0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]`. Sections breathe at 64–96–128px — an editorial cadence, not dense retail packing.

### Grid & Container
Page max-width **1280px**; prose column **720px**. Product grids run **3–4-up at desktop, 2-up at tablet, 1-up at mobile**. Editorial blocks alternate full-bleed photographic rows with centered cream copy sections.

### Whitespace Philosophy
The cream ground *is* the whitespace, and it's the primary layout tool. Modules are separated by air and warm hairlines, not heavy borders. A hero may occupy the full viewport with a single light-serif headline and one clay CTA — the restraint reads as confidence.

### Section Cadence
The page alternates **full-bleed product / lifestyle photography** with **cream copy and grid sections**. The rhythm is image → breathe → grid → breathe — a warm magazine spread sequenced for scroll, with the clay CTA recurring as the consistent call to action.


## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2 | hairline focus chip / tooltip |
| **Small** | 4 | **the terracotta primary CTA** (live-probed "SHOP NOW") and badges |
| **Medium** | 8 | **default for secondaries, outline/ghost buttons, inputs** (live-probed cream CTA radius) |
| Comfortable | 12 | cards and larger panels |
| Relaxed | 16 | featured modules / image frames |
| Pill | 9999 | utility chips / toggles only — sparingly |

Our Place's rounding is **gently graduated**, not uniform. The signature contrast is live-probed: the **clay primary holds a tight `4px`** while **cream secondaries soften to `8px`** — the radius itself encodes hierarchy (sharper = more urgent). Cards step up to `12px` for a comfortable, tactile feel. Avoid full pills in the chrome; the brand reads as considered ceramic, not bubbly app.


## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | flat — `none` | default for cards, buttons, inputs, nav |
| 1 | `0 8px 24px rgba(53, 49, 46, 0.10)` | product-card / panel hover lift |
| 4 | `0 24px 64px rgba(53, 49, 46, 0.18)` | modal / cart-drawer overlay |

### Shadow Philosophy
The system is essentially flat. At rest, separation comes from **the cream ground, warm hairlines, and photographic contrast** — not from elevation. A faint **warm-tinted** lift appears on card hover, and a deeper warm shadow anchors modals and the cart drawer. Every shadow uses `rgba(53, 49, 46, …)` — the brown-black text hue, never pure black — so even the depth stays warm and on-brand.


## 8. Interaction & Motion

- **Easing:** standard `cubic-bezier(0.4, 0, 0.2, 1)` for nearly everything — a calm, natural ease.
- **Durations:** fast `150ms` (button color shifts), standard `240ms` (image fades, card hovers), slow `320ms` (drawer / modal entrances).
- **Primary button hover:** terracotta `#af5a3c` → deepened clay `#8f4730` background — a warm darkening, no transform.
- **Secondary button hover:** cream `#ebe5d4` → warmer cream `#efe7d8`.
- **Outline button hover:** transparent → brown-black fill, text flips to cream.
- **Card hover:** faint warm shadow lift (240ms); optional image cross-fade to an alternate product shot; no scale transform.
- **Swatch / colorway select:** clay outline appears with a 150ms fade; the card image swaps to the selected colorway (Spice, Steam, Char, Blue Salt).
- **Nav:** items shift to clay on hover; transparent-over-hero → solid-cream transition on scroll.
- **Page transitions:** 240ms cross-fade; full-bleed hero images may use a slow ken-burns drift on load (disabled under reduced motion).
- **Reduced motion:** `prefers-reduced-motion: reduce` honored — image drift and cross-fades are disabled; color-state changes remain (instantaneous, not animated movement).


## 9. Accessibility & A11y

Computed contrast against the live-probed tokens (`bg #fcfaf6`, `text #35312e`, `brand #af5a3c`, secondary cream `#ebe5d4`):

- **Text on canvas:** `#35312e` on `#fcfaf6` = **12.36:1** — AAA (well above the 7:1 threshold).
- **White CTA label on clay:** `#ffffff` on `#af5a3c` = **4.83:1** — AA for normal text, AAA for large/bold. The 14px/600 uppercase button label clears AA comfortably.
- **Secondary CTA label on cream:** `#35312e` on `#ebe5d4` = **10.24:1** — AAA.
- **Text on white surface:** `#35312e` on `#ffffff` = **12.88:1** — AAA (cards).
- **Muted meta on canvas:** `#6b645c` on `#fcfaf6` = **5.59:1** — AA for normal text, AAA for large.
- **Clay link on canvas:** `#af5a3c` on `#fcfaf6` = **4.63:1** — AA. For body-size links, deepen to `brand-deep #8f4730` = **6.47:1** (AA+), or underline to carry the affordance.
- **Brand text on cream needs the deep tint:** prefer `#8f4730` over raw `#af5a3c` for small terracotta text on cream.

Patterns:
- **Focus:** 2px solid `#af5a3c` outline with a 2px outset gap — visible on cream and on white cards.
- **Clay CTA:** white label is AA at the button's 14px/600 size; keep the primary at button scale, never shrink the white-on-clay text below 14px bold.
- **Colorway swatches:** expose `aria-label` (colorway name, e.g. "Spice") and `aria-pressed`; selection is announced, not communicated by the outline alone.
- **Keyboard nav:** full tab order across nav, search, swatches, add-to-bag, and the cart drawer; the drawer traps focus and restores it on close.
- **Reduced motion:** image drift / cross-fades disabled; no information conveyed by motion alone.


## 10. Responsive Behavior

| Breakpoint | Width | Behavior |
|-----------|-------|----------|
| Mobile | <640 | 1-up product grid; hero headline 60→36px (stays weight 300); nav → hamburger; clay CTA full-width |
| Tablet | 640–1024 | 2-up grid; nav condenses; hero ~46px |
| Desktop | 1024–1280 | 3–4-up grid; inline nav; full editorial cadence |
| Wide | 1280–1536 | content caps at 1280; hero photography bleeds full-viewport |

- **Touch targets:** 44×44 minimum maintained — CTA padding (12×22) plus a 44px-tall tap zone on swatches/nav.
- **Hero:** full-bleed at every size; the serif headline scales down but holds weight 300 (never thickens on mobile); the clay CTA goes full-width on mobile.
- **Cards:** image stays edge-to-edge in its column; the colorway swatch row wraps below 4 colors on narrow screens.
- **Images:** `object-fit: cover` for full-bleed plates; product shots stay `contain` on white cards.
- **Nav:** transparent-over-hero on desktop collapses to a solid-cream hamburger bar on mobile.


## 11. Content & Voice

### Tone
**Warm, inviting, grown-up.** Sentence-case headlines, no exclamation-point urgency, no hype theatrics. The copy sells the *feeling* of cooking and gathering — the warmth of a shared kitchen — declarative and human. Think a thoughtful food editor or a friend who cooks, not a flash-sale email.

### Microcopy patterns
- Primary CTA: **"SHOP NOW"** (uppercase, the live clay-button label)
- Product action: **"ADD TO BAG"** (uppercase, on the clay button)
- Out of stock: **"NOTIFY ME"**
- Newsletter: **"SIGN UP"** — terse, no "Join our family!" exclamation
- Empty cart: **"Your bag is empty."** (declarative, sentence case)
- Error: **"Something went wrong. Please try again."** (no exclamation)

### Empty states
Quiet and reassuring — a single line of sentence-case copy plus one clay CTA back to the catalog. No mascots or busy illustrations; let the cream ground breathe.

### CTA verb conventions
- **Use:** SHOP NOW · ADD TO BAG · EXPLORE · DISCOVER (sparingly) · NOTIFY ME · SIGN UP
- **Avoid:** "Buy now!", urgency ("Last chance", "Selling fast"), emoji, and anything with an exclamation point.


## 12. Dark Mode & Theming

**Light-only.** The warm cream canvas and brown-black type *are* the brand; the warmth would not survive an inversion. There is no dark-mode storefront — a dark theme would lose the sunlit-pantry quality that defines Our Place. The only legitimately "dark" surfaces are **full-bleed photographic plates** carrying white type (the live-probed white h1 over hero imagery), which is a content treatment, not a theme. Theme switching is not part of the visual language.


## 13. Lineage & Influences

Our Place launched in 2019 as a values-led, mission-driven DTC cookware brand built around one hero object — the **Always Pan** — and from the start it rejected the cold stainless minimalism that legacy cookware defaults to. Its identity is **warm by design**: a cream `#fcfaf6` canvas (never pure white), warm brown-black `#35312e` type, the humanist serif **Cheltenham** set at a notably *light* weight (the 60px hero runs 300), and the brand's own **Plaid** sans for body. The signature is the **terracotta / clay CTA `#af5a3c`** — a white "SHOP NOW" at a tight `4px` radius — paired with quieter warm-cream secondaries at a softer `8px`. This places Our Place in a **modern-heritage** register: the editorial warmth of contemporary food media (Kinfolk, Cherry Bombe), the earthen palette of artisanal ceramics (Heath), and the restrained product-forward chrome of apothecary retail (Aesop) — heritage cues delivered with contemporary DTC discipline.

What Our Place **rejects** is just as defining. No stainless gray, no clinical pure-white showroom canvas, no cool blues or neon accents, no loud gradients. Where competitors shout in saturated buttons over white, Our Place holds a single warm clay rectangle on a cream ground and lets the multi-colorway product photography (Spice, Steam, Char, Blue Salt) supply the rest of the color. The typographic signature is a **large, low-weight serif headline** — 60px Cheltenham at weight 300 — that reads like a recipe-card phrase: warm, literary, and unhurried rather than bold and promotional. The lineage is food-editorial warmth crossed with artisanal-craft palette: a kitchen you'd want to cook in, not a showroom you'd photograph.

**Named influences:**
- **Cheltenham (ITC revival of the 1896 Bertram Goodhue / Ingalls Kimball design)** — the humanist serif at light 300 carrying the hero display; the typographic backbone.
- **Kinfolk** — the warm editorial food-and-home register and cream-and-earth palette tone.
- **Cherry Bombe** — contemporary food-media warmth and a serif-led editorial cooking voice.
- **Aesop** — warm-neutral apothecary chrome and restrained, product-forward retail.
- **Heath Ceramics** — the earthen terracotta-and-clay artisanal palette and modern-heritage craft positioning.
- **Apartamento** — the lived-in, human-domestic editorial sensibility.


## 14. Do's and Don'ts

### Do
- Keep the canvas **warm cream `#fcfaf6`** (live-probed) — never pure white.
- Set type in warm **brown-black `#35312e`** (live-probed) — never pure black.
- Use **Cheltenham serif at a light weight** for display — the hero is 60px / weight 300, large and airy.
- Run all body, nav, labels, and buttons in the brand's **Plaid** sans.
- Make the primary the **terracotta / clay CTA `#af5a3c`** — white uppercase "SHOP NOW" at a tight **`4px`** radius.
- Use **warm cream `#ebe5d4`** secondary buttons at a softer **`8px`** radius — let radius encode hierarchy.
- Deliver color through the **clay CTA and product colorways** (Spice/Steam/Char/Blue Salt), not the chrome.
- Track button + eyebrow labels **wide (+0.04 to +0.14em)** and set them **UPPERCASE**.
- Keep headlines **sentence case** and serif — warm, recipe-card phrasing.
- Make shadows **warm-tinted** `rgba(53,49,46,…)` (brown-black), never pure black.
- Pick up the **terracotta** for links, focus rings, and cart/nav accents.

### Don't
- **Don't** use a pure-white `#ffffff` page canvas — the brand ground is warm cream `#fcfaf6` (white is for cards only).
- **Don't** set body text in pure black `#000000` — it's the warm brown-black `#35312e`.
- **Don't** make the serif hero bold — it's a *light* weight (300); thickening it breaks the heritage warmth.
- **Don't** use cool grays, stainless, slate, or neon in the chrome — the palette is earthen.
- **Don't** give the primary CTA a soft pill or a large radius — the clay button is a tight `4px`.
- **Don't** paint secondary buttons in the clay or a cool color — they stay warm cream.
- **Don't** put saturated brand color on badges or nav at large scale — keep it on the CTA and products.
- **Don't** use exclamation points, urgency banners, or emoji — the voice is warm and calm.
- **Don't** swap Cheltenham/Plaid for generic system fonts — the serif+brand-sans pairing is the identity.
- **Don't** use pure-black shadows — depth stays warm-tinted brown-black.
- **Don't** shrink white-on-clay button text below 14px/600 — that's the contrast floor (4.83:1).


## 15. Agent Prompt Guide

### Quick Color Reference
```
Background:        #fcfaf6   (warm cream canvas — NOT white)
Text:              #35312e   (warm brown-black — NOT pure black)
Brand (clay):      #af5a3c   (terracotta CTA "SHOP NOW", rgb 175,90,60)
Brand deep:        #8f4730   (clay hover / small clay text on cream)
On-brand:          #ffffff   (white label on the clay CTA)
Secondary CTA:     #ebe5d4   (warm cream fill)  / text #35312e
Surface (card):    #ffffff   (true white, lifts off cream)
Muted text:        #6b645c
Border:            #e4dccb   (warm hairline)  /  #35312e (strong/focus)
Link:              #af5a3c   (clay)  / hover #8f4730
```

### Example Component Prompts

> **Hero:** "Create a full-bleed cookware hero on a warm photographic plate. Place a white Cheltenham serif headline at 60px, weight 300 (light, NOT bold), sentence case, tracked −0.005em. Below it, one terracotta CTA — `4px` radius, clay `#af5a3c` fill, white `#ffffff` text, uppercase 'SHOP NOW' in 14px Plaid 600 tracked +0.04em — that deepens to `#8f4730` on hover. Warm, editorial, sunlit-pantry register; no cool grays."

> **Product card:** "Design a warm product card: true-white `#ffffff` surface lifting off the cream page, 1px `#e4dccb` warm hairline border, `12px` radius. Full-width product photograph, then the name in 16px Plaid 500 `#35312e`, price in 16px Plaid 500 `#35312e`, and a row of colorway swatches (Spice, Steam, Char, Blue Salt). Flat at rest; faint warm shadow `0 8px 24px rgba(53,49,46,0.10)` on hover. No pure-black shadows."

> **Button pair:** "Build two buttons side by side. Primary: terracotta `#af5a3c` fill, white text, `4px` radius, uppercase 'ADD TO BAG' in 14px Plaid 600 +0.04em, hover `#8f4730`. Secondary: warm cream `#ebe5d4` fill, brown-black `#35312e` text, softer `8px` radius, uppercase 'LEARN MORE'. The radius difference encodes urgency — clay is tighter."

> **Newsletter form:** "Build a warm email signup on cream `#fcfaf6`: a single input with a 1px `#e4dccb` warm border and `8px` radius (16px Plaid, placeholder `#9a9189`), focus ring in terracotta `#af5a3c`, beside a clay 'SIGN UP' button (`4px` radius, white text, uppercase +0.04em). No exclamation-point copy; calm and inviting."

> **Editorial section:** "Lay out an alternating editorial section on warm cream: full-bleed lifestyle photograph row, then a centered copy block with a sentence-case 40px Cheltenham serif heading (weight 400) `#35312e`, 18px Plaid lead at 1.6 line-height, and an underlined clay ghost CTA ('EXPLORE', uppercase +0.04em, `#af5a3c`). Generous 96px vertical spacing; separation by cream whitespace and warm hairlines, not heavy borders."

> **Badge:** "Make a warm specimen-label badge: cream `#ebe5d4` background, `#35312e` text, `4px` radius, 12px Plaid 600 UPPERCASE tracked +0.14em, e.g. 'BESTSELLER'. For a highlight badge use clay `#af5a3c` background with white text. Never use cool colors on badges."

### Iteration Guide
1. **If the page feels cold or clinical**, the canvas is probably pure white — switch it to warm cream `#fcfaf6` and warm every gray toward brown.
2. **If the hero feels heavy or generic**, drop the serif weight to 300 and increase its size; a bold serif is the tell of the wrong register.
3. **If the brand looks washed out**, you've removed the clay — bring back the single terracotta `#af5a3c` CTA; it's the one saturated element.
4. **If hierarchy reads flat between buttons**, restore the radius contrast — clay primary at `4px`, cream secondary at `8px`.
5. **If text looks harsh**, you're using pure black — soften to brown-black `#35312e`; same for shadows (use `rgba(53,49,46,…)`).
6. **If the type feels off**, confirm Cheltenham (serif) for display and Plaid (sans) for body — not Inter/Georgia generics — and widen uppercase label tracking.
7. **If a secondary looks loud**, you've painted it clay or a cool color — pull it back to warm cream `#ebe5d4`.
8. **To shift toward a colorway**, lead with one product color (Spice/Steam/Char/Blue Salt) in the photography while keeping every UI element warm-neutral cream and clay.

---

*Theme-toggle audit: score=0, signals=[none]*
