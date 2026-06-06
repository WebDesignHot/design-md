---
name: SKIMS
tagline: 'Nude-neutral minimal luxury — cream canvas, dark photographic hero, warm near-black #2d2a26, sharp 0px.'
updated_at: 2026-05-29T21:45:19.745Z
published_at: 2026-05-29T21:45:19.745Z
author: webdesignhot
source_url: https://skims.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [retail, fashion]
tags: [light, minimal, sans, editorial, structured]
preview_swatch: ['#ffffff', '#2d2a26', '#0e7a82']
related: []
description: 'SKIMS is the shapewear-to-loungewear house that turned "nude" into a design system rather than a SKU. Its 2026 storefront is a study in nude-neutral minimal luxury: a near-white cream canvas `#ffffff`, copy set in a single warm near-black `#2d2a26` (the brand''s `--oke-text-primary`), and a dark, full-bleed photographic hero where the headline flips to near-white `#f6f6f6` so the campaign image carries the page. Display type is **Tstar Pro Headline** — a condensed grotesque set tight at 48px — over **Inter** body. Every corner is sharp: `0px` radius on the body, the hero, the headings, and both CTAs probed live (the dark "Continue Shopping" rectangle `#2d2a26` and the white "Choose Your Shipping" outline). The palette is deliberately tonal — warm taupe, sand, and near-black doing the work that color does elsewhere — with a single deep teal `#0e7a82` reserved for review highlights. Where Glossier went post-pink Apercu-monolith on pure white and Aritzia leans cool greige, SKIMS is **warm-nude, condensed-grotesque, photographic, and sensual-minimal** — DTC luxury that reads like a fashion editorial, not a marketing page.'


# Canonical 8-role aliases (bg / text / brand / border / accent / muted / surface / danger).
# Maps role names to this entry's actual token names so role-aware
# downstream tools resolve `theme.background` → entry's `bg`, etc.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-teal
  muted: text-secondary
  border: border
  ring: brand

colors:
  # Page grounds
  bg: '#ffffff'                  # near-white cream canvas — the dominant surface
  bg-soft: '#f7f7f8'             # shading / panel ground (--oke-shading-color, button rest)
  bg-deeper: '#f4f4f6'           # secondary hover surface
  hero-dark: '#1f1d1b'           # dark photographic hero band — image-over-near-black
  # Surfaces
  surface: '#ffffff'            # cards have no chrome — photography is the surface
  surface-soft: '#f7f7f8'
  # Brand — warm near-black IS the identity
  brand: '#2d2a26'              # primary CTA fill, body text, wordmark — warm near-black (--oke-text-primary)
  brand-hover: '#1f1d1b'        # darker on-press
  on-brand: '#ffffff'          # white text on the dark rectangle
  # Text
  text: '#2d2a26'              # body copy + headings — warm near-black, never pure #000
  text-strong: '#1f1d1b'
  text-secondary: '#676986'    # meta, captions, secondary copy (--oke-text-secondary, cool slate)
  text-faint: '#9a9db1'        # disclaimers / utility (--oke-attributeBar-shading)
  text-on-hero: '#f6f6f6'      # near-white headline over the dark photographic hero
  text-on-brand: '#ffffff'
  link: '#2d2a26'
  link-hover: '#1f1d1b'
  # Accent — single saturated token, review/highlight only
  accent-teal: '#0e7a82'       # review-highlight + interactive accent (--oke-highlight) deep teal
  accent-teal-bright: '#00caaa' # rating marker / progress fill (--oke-attributeBar-marker)
  # Borders & dividers
  border: '#e5e5eb'            # hairline dividers (--oke-border-color)
  border-strong: '#dbdde4'     # button/filter border (--oke-button-border)
  border-active: '#676986'     # active filter / pressed border
  # Semantic (tinted, near-white grounds)
  success: '#e6fbf0'           # success ground hsl(143,85%,96%)
  info: '#f0f7ff'              # info ground hsl(208,100%,97%)
  warning: '#fffaeb'           # warning ground hsl(49,100%,97%)
  danger: '#fff0f0'            # error ground hsl(359,100%,97%)
  star: '#2d2a26'              # filled review star (--oke-stars-foreground)
  star-empty: '#e5e5e5'        # empty review star (--oke-stars-background)

typography:
  display:
    family: '"Tstar Pro Headline", "Helvetica Neue", Arial, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: 'Inter, system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    display-lg:      { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.025em', family: display }
    h1:              { size: 48, weight: 400, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    h2:              { size: 32, weight: 600, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.008em', family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.3,  tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.2,  tracking: '0.12em',   family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    button:          { size: 14, weight: 600, lineHeight: 1.0,  tracking: '0.06em',   family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    nav:             { size: 13, weight: 500, lineHeight: 1.2,  tracking: '0.04em',   family: body }

radius:
  none: 0
  micro: 1
  sm: 2

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1536
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
  dropdown: '0 8px 24px rgba(31, 29, 27, 0.10)'
  modal: '0 24px 64px rgba(31, 29, 27, 0.22)'

accessibility:
  contrast-text-on-bg: 13.1
  contrast-text-on-brand: 13.1
  contrast-hero-headline: 14.8
  focus-ring: '2px solid #2d2a26 + 2px offset'
  reduced-motion-honored: true

components:
  button-primary:   { bg: brand, text: on-brand, padding: '14px 28px', radius: 0, font: button, hover-bg: brand-hover }
  button-secondary: { bg: surface, text: brand, border: '1px solid brand', padding: '14px 28px', radius: 0, font: button }
  button-ghost:     { bg: transparent, text: text, padding: '12px 20px', radius: 0, font: button }
  button-on-hero:   { bg: surface, text: brand, padding: '14px 28px', radius: 0, font: button }
  card:             { bg: surface, border: 'none', radius: 0, padding: 0 }   # photograph carries identity
  badge:            { bg: brand, text: on-brand, padding: '4px 10px', radius: 0, font: 'eyebrow' }
  input:            { bg: surface, border: '1px solid border-strong', text: text, radius: 0, padding: '14px 16px', focus-border: brand }
  nav:              { bg: surface, text: text, height: 64, font: nav }

lineage:
  summary: 'SKIMS launched in 2019 (founded by Kim Kardashian, Jens Grede and Emma Grede) with a thesis that the absence of a single "nude" was a design opportunity — the brand built an entire identity around an expanded range of skin-tone neutrals. That thesis became the chrome. The 2026 storefront treats warm tonal neutrals as a complete color system: a cream-white canvas, a warm near-black `#2d2a26` doing the work of "black", taupe/sand mid-tones in photography, and a single deep teal reserved for review highlights. Type is condensed-grotesque (Tstar Pro Headline) set tight over Inter — a fashion-editorial pairing rather than a DTC marketing pairing. Corners are sharp `0px` everywhere; depth is created by full-bleed photography and generous whitespace, not by shadow or radius. The register reads against minimal-luxury fashion houses (Calvin Klein, The Row, COS, Aritzia) and the broadsheet/condensed-grotesque tradition (Tstar / Trade Gothic lineage), not against the rounded-pill millennial-DTC playbook. Where Glossier removed pink to land on Apercu-on-white, SKIMS removed contrast itself — the brand is warm, low-chroma, sensual-minimal, and photographic, letting the body (and the bodies) carry the page.'
  influences:
    - { name: 'Tstar / Trade Gothic condensed grotesque lineage', role: 'condensed display-grotesque tradition the headline face descends from', url: 'https://www.myfonts.com/collections/trade-gothic-font-linotype' }
    - { name: 'Inter (Rasmus Andersson)', role: 'neutral UI workhorse for 100% of body + interface copy', url: 'https://rsms.me/inter/' }
    - { name: 'Calvin Klein circa Raf Simons', role: 'stripped warm-luxury, body-forward fashion editorial tone', url: 'https://www.calvinklein.com/' }
    - { name: 'The Row', role: 'quiet-luxury tonal restraint — neutral palette, no chrome ornament', url: 'https://www.therow.com/' }
    - { name: 'COS', role: 'minimal-luxury DTC contemporary — sharp grids, neutral grounds', url: 'https://www.cos.com/' }
    - { name: 'Aritzia', role: 'editorial-DTC contemporary the storefront reads against', url: 'https://www.aritzia.com/' }
---


## 1. Visual Theme & Atmosphere

SKIMS in 2026 is **nude-neutral minimal luxury** — a storefront that treats the absence of color as the brand. The canvas is a near-white cream `#ffffff`, copy is set in a single **warm near-black `#2d2a26`** (the live `--oke-text-primary`, not pure black), and the page is paced by full-bleed photography rather than by chrome. The signature view is the dark photographic hero: a campaign image laid over near-black, with the headline flipped to near-white `#f6f6f6` so the body in the photograph — and the typography — carry everything. There is no candy color, no gradient, no glow. The warmth lives entirely in the photography and in the choice to never use a cold `#000`.

The display move is condensed and editorial. **Tstar Pro Headline** — a condensed grotesque in the Trade-Gothic lineage — is set tight at 48px for the live h1, tracked negative, sentence- or title-case. It reads like a fashion-magazine masthead, not a marketing headline. Body and interface are **Inter** at 16px, 1.55 line-height — a neutral, almost invisible workhorse whose only job is to disappear under the photography and the condensed display. The two-register system (condensed display + neutral Inter body) is the entire typographic identity.

Every corner is sharp. The live probe returns `0px` radius on the body, the hero, the h1, the h2, and both CTAs — the dark "Continue Shopping" rectangle `#2d2a26` with white text, and the white "Choose Your Shipping" outline rectangle. SKIMS is firmly **anti-pill**: rectangles only, hairline borders, no rounded softness. This is a deliberate luxury signal — sharp corners read as architectural and editorial, where rounded corners read as friendly-consumer.

The palette is tonal by design. SKIMS was built on the premise that "nude" is plural — an expanded range of skin-tone neutrals rather than one beige — and that thesis became the chrome. Warm taupe, sand, and near-black do the work that saturated color does on other sites. The only saturated token in the live system is a deep teal `#0e7a82`, reserved for review highlights and a single interactive accent. Semantic states (success, info, warning, error) are near-white tints, barely-there, so they never break the calm.

Where Glossier went post-pink Apercu-monolith on pure white, and where most DTC went rounded-pill-and-gradient, SKIMS went **warm, low-contrast, condensed, and photographic**. The register is sensual-minimal: quiet, confident, body-forward, the chrome stepping back so the campaign imagery and the product land hardest.

**Key Characteristics:**
- Near-white cream canvas `#ffffff` — calm, photographic ground
- Warm near-black `#2d2a26` for text AND brand — never pure `#000` (the warm cast is the identity)
- Dark photographic hero with near-white `#f6f6f6` headline — image carries the page
- **Tstar Pro Headline** condensed grotesque display at 48px, tracked tight
- **Inter** for 100% of body and interface copy
- `0px` radius everywhere — sharp rectangles, hard anti-pill stance
- Nude/neutral tonal palette — warm taupe/sand/near-black instead of color
- Single deep-teal accent `#0e7a82` for review highlights only
- Near-white tinted semantic states — quiet, non-disruptive
- Flat: depth comes from photography + whitespace, not shadow
- Hairline borders `#e5e5eb` / `#dbdde4` — thin, low-contrast dividers
- Editorial, sensual-minimal, DTC-luxury register


## 2. Color Palette & Roles

### Primary / Canvas
- **Background** `#ffffff` [→ `--normal-bg`]: near-white cream canvas. The dominant surface; calm photographic ground.
- **Bg Soft** `#f7f7f8` [→ `--oke-shading-color`]: panel/shading ground and button rest state.
- **Bg Deeper** `#f4f4f6` [→ `--oke-button-bg-hover`]: secondary hover surface.
- **Hero Dark** `#1f1d1b`: the dark photographic hero band — image laid over warm near-black.
- **Surface** `#ffffff`: cards have no chrome, so the page IS the surface.

### Brand — Warm Near-Black
- **Brand** `#2d2a26` [→ `--oke-text-primary`]: primary CTA fill, body text, wordmark. Warm near-black — the brand identity. CTA probed live as `rgb(45, 42, 38)`.
- **Brand Hover** `#1f1d1b`: darker on-press / hover for the dark rectangle.
- **On-Brand** `#ffffff`: white text on the dark rectangle.

### Text
- **Text** `#2d2a26`: body copy and headings. Warm near-black — **never pure `#000`**.
- **Text Strong** `#1f1d1b`: emphasis / strongest body weight.
- **Text Secondary** `#676986` [→ `--oke-text-secondary`]: meta, captions, secondary copy. Cool slate, the one cool note.
- **Text Faint** `#9a9db1`: disclaimers, utility microcopy.
- **Text on Hero** `#f6f6f6`: near-white headline over the dark photographic hero (live h1 color).

### Accent — One Saturated Token
- **Accent Teal** `#0e7a82` [→ `--oke-highlight`]: review-highlight + single interactive accent. Deep teal — the only saturated color in the chrome.
- **Accent Teal Bright** `#00caaa` [→ `--oke-attributeBar-marker`]: rating marker / progress fill. Use sparingly, data-viz only.

### Interactive / Borders
- **Border** `#e5e5eb` [→ `--oke-border-color`]: hairline dividers between rows and sections.
- **Border Strong** `#dbdde4` [→ `--oke-button-border`]: button and filter borders.
- **Border Active** `#676986`: active filter / pressed border state.

### Neutral — Review UI
- **Star** `#2d2a26` [→ `--oke-stars-foreground`]: filled review star — warm near-black, same as text.
- **Star Empty** `#e5e5e5` [→ `--oke-stars-background`]: empty review star track.

### Semantic — Near-White Tints
- **Success** `#e6fbf0` (`hsl(143, 85%, 96%)`): success ground. Barely-there green tint.
- **Info** `#f0f7ff` (`hsl(208, 100%, 97%)`): info ground.
- **Warning** `#fffaeb` (`hsl(49, 100%, 97%)`): warning ground.
- **Danger** `#fff0f0` (`hsl(359, 100%, 97%)`): error ground. Tint-only — calm-first.

### Shadow
- **No card shadow.** Depth is photography + whitespace. Dropdown/modal shadows are warm-tinted (`rgba(31, 29, 27, …)`) so even the rare shadow stays warm, never cool gray.


## 3. Typography Rules

### Font Family — Condensed Display + Neutral Body

Two families, two jobs. **Tstar Pro Headline** (a condensed grotesque in the Trade Gothic / Tstar lineage) handles all display and headings — set tight, negative-tracked, fashion-masthead register. **Inter** handles 100% of body, navigation, buttons, labels, and captions — a neutral UI workhorse engineered to disappear. There is no serif anywhere in the live storefront.

```
display: "Tstar Pro Headline", "Helvetica Neue", Arial, system-ui, -apple-system, sans-serif
body:    Inter, system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif
mono:    ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace   (rare — order/SKU panels)
```

The live h1 probes at **48px, Tstar Pro Headline**, near-white `#f6f6f6` over the dark hero. The live h2 probes at **20px, Tstar Pro Headline**, warm near-black `#2d2a26`. Body probes at **16px Inter, weight 400**, color `#2d2a26`.

### Hierarchy — Two Registers That Matter

| Token | Size | Weight | Tracking | Case | Family | Use |
|-------|------|--------|----------|------|--------|-----|
| `display-hero` | 80 | 700 | -0.03em | title | Tstar | rare full-bleed campaign splash |
| `display-lg` | 56 | 700 | -0.025em | title | Tstar | large editorial headline |
| `h1` (live) | **48** | 400 | -0.02em | title | **Tstar** | **hero headline, near-white on dark** |
| `h2` | 32 | 600 | -0.015em | title | Tstar | section headline |
| `h2` (live small) | 20 | 400 | 0 | title | Tstar | inline section title |
| `h3` | 24 | 600 | -0.008em | title | Tstar | sub-section |
| `h4` | 20 | 600 | 0 | title | Tstar | card / block heading |
| `eyebrow` | 12 | 600 | +0.12em | UPPERCASE | Inter | "NEW", "BESTSELLER", category label |
| `body-lg` | 18 | 400 | 0 | sentence | Inter | lede / intro paragraph |
| `body` (live) | **16** | 400 | 0 | sentence | **Inter** | **default body copy** |
| `body-sm` | 14 | 400 | 0 | sentence | Inter | secondary copy |
| `label` | 13 | 500 | +0.02em | sentence | Inter | form labels, size chips |
| `button` | 14 | 600 | +0.06em | UPPERCASE | Inter | "ADD TO BAG", "CONTINUE SHOPPING" |
| `nav` | 13 | 500 | +0.04em | UPPERCASE | Inter | top-nav items |
| `caption` | 12 | 500 | +0.02em | sentence | Inter | meta, captions, fine print |

### Principles

- **Two families only** — Tstar Pro Headline for everything display/heading, Inter for everything body/UI. Never introduce a third family or a serif.
- **Track the display tight.** Condensed grotesque wants negative tracking (−0.02em to −0.03em) at large sizes; this is the fashion-masthead rhythm.
- **Headings stay warm near-black on light, near-white on dark.** `#2d2a26` on cream, `#f6f6f6` over the photographic hero.
- **Eyebrows are wide-tracked Inter caps** (+0.12em) — they punctuate sections; they are the only place wide tracking appears.
- **Body never uses pure black.** All body copy is `#2d2a26`; secondary is the cool slate `#676986`.
- **Buttons are uppercase Inter 600** tracked +0.06em — terse, editorial, calm.
- **Line-height stays generous on body** (1.55) for editorial readability; headings tighten to ~1.05.


## 4. Component Stylings

### Buttons — Sharp Rectangles, Anti-Pill

```
/* Primary — dark warm-black rectangle (live "Continue Shopping") */
.btn-primary {
  background: #2d2a26;
  color: #ffffff;
  padding: 14px 28px;
  border-radius: 0;                /* sharp — confirmed live */
  font: 600 14px/1 Inter;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: background 240ms cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary:hover { background: #1f1d1b; }
```

```
/* Secondary — white outline rectangle (live "Choose Your Shipping") */
.btn-secondary {
  background: #ffffff;
  color: #2d2a26;
  border: 1px solid #2d2a26;
  padding: 14px 28px;
  border-radius: 0;
  font: 600 14px/1 Inter;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.btn-secondary:hover { background: #2d2a26; color: #ffffff; }   /* fill on hover */
```

```
/* On-hero — white rectangle that floats over the dark photographic hero */
.btn-on-hero {
  background: #ffffff;
  color: #2d2a26;
  padding: 14px 28px;
  border-radius: 0;
  font: 600 14px/1 Inter;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
```

```
/* Ghost — text-only, underline-on-hover */
.btn-ghost {
  background: transparent;
  color: #2d2a26;
  padding: 12px 20px;
  border: none;
  font: 600 14px/1 Inter;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.btn-ghost:hover { text-decoration: underline; }
```

Zero pills. Every button is a sharp `0px` rectangle. The primary is the dark warm-black fill; the secondary is the same shape as an outline; the on-hero variant inverts to a white rectangle so it reads over the dark campaign image.

### Product Cards — Zero Chrome

```
.product-card {
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
  box-shadow: none;
}
.product-card__image { width: 100%; aspect-ratio: 3 / 4; object-fit: cover; }
.product-card__name  { font: 500 14px Inter; color: #2d2a26; margin-top: 12px; }
.product-card__price { font: 400 14px Inter; color: #676986; }
.product-card__swatches { display: flex; gap: 6px; margin-top: 8px; }   /* nude tonal dots */
```

No border, no shadow, no radius, no padding. The photograph carries the identity; the card chrome is the tonal color swatches (the "nude range" made tactile). Layout: image → name → price → swatch row → optional eyebrow badge.

### Badges / Tags — Color As Signal

| Badge | Bg | Text | Use |
|-------|-----|------|-----|
| New / Bestseller | `#2d2a26` | `#ffffff` | launch / top-seller flag |
| Outline tag | `#ffffff` | `#2d2a26` (1px `#dbdde4` border) | category / fit tag |
| Sale | `#0e7a82` | `#ffffff` | promotional (rare — teal accent) |

All `0px` radius, `4px 10px` padding, 12px Inter 600 UPPERCASE +0.12em. Badges are sharp rectangles, not pills.

### Inputs / Forms — Flat, Sharp, Hairline

```
.input {
  background: #ffffff;
  border: 1px solid #dbdde4;
  border-radius: 0;
  padding: 14px 16px;
  font: 400 16px Inter;
  color: #2d2a26;
}
.input::placeholder { color: #9a9db1; }
.input:focus { border-color: #2d2a26; outline: 2px solid #2d2a26; outline-offset: 2px; }
.label { font: 500 13px Inter; letter-spacing: 0.02em; color: #2d2a26; }
```

Size and fit selectors are sharp rectangular chips with a hairline border that fills warm near-black when selected. Newsletter signup is the same austere rectangle + uppercase "SUBMIT".

### Navigation

```
.nav {
  height: 64px;
  background: #ffffff;
  border-bottom: 1px solid #e5e5eb;
  display: flex; align-items: center;
}
.nav__item {
  font: 500 13px Inter;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #2d2a26;
}
.nav__item:hover { text-decoration: underline; text-underline-offset: 4px; }
```

64px header, hairline bottom border, uppercase Inter nav items. The wordmark sits center or left in Tstar; the bar is otherwise empty — the calm, editorial top chrome.


## 5. Layout Principles

### Spacing System
- Base **4px** unit; scale `[0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]`.
- Section spacing is generous (64–128px) — editorial breathing room between full-bleed blocks.
- Component padding is moderate (14–28px on buttons, 24px inside grouped panels).

### Grid & Container
- Page max-width **1536px** (wide, full-bleed editorial campaigns extend toward the edges).
- Prose / editorial column **720px**.
- Product grid: 4-up desktop, 3-up small-desktop, 2-up tablet, 2-up mobile (SKIMS keeps 2-up on mobile, not 1-up, to preserve the catalog density).
- Hero is full-bleed photography, no max-width — image runs edge to edge.

### Whitespace Philosophy
- Whitespace is structural, not decorative. The cream canvas around photography is what creates the luxury read.
- Let images breathe: 64–96px above and below full-bleed hero blocks.
- No filler ornament — dividers are hairlines, never rules with weight.

### Section Cadence
- Alternating rhythm: dark photographic hero → cream product grid → cream editorial block → dark campaign band. The dark/light alternation is the page's pulse.
- Eyebrow → headline → supporting line → CTA is the standard block stack.


## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| **None** | 0 | **default everywhere** — buttons, cards, inputs, badges, hero, chips (confirmed live across body/h1/h2/CTAs) |
| Micro | 1 | hairline indicator edges (rare) |
| Small | 2 | tooltip / popover corner (rare) |

SKIMS has committed to **sharp rectangles as the chrome**. The live probe returns `0px` on every measured element. There are no pills, no rounded cards, no soft corners. If a future component must round, prefer 0; if it absolutely cannot, cap at 1–2px. Anything ≥ 4px would read as friendly-consumer and break the minimal-luxury register.


## 7. Depth & Elevation

Effectively flat. Cards carry no shadow at any state. Depth is created by **full-bleed photography contrast and cream-on-cream whitespace**, not by elevation tokens. The dark hero band sits "above" the cream sections by tonal contrast alone.

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | flat — no shadow | default for cards, buttons, inputs, badges |
| 1 | `0 8px 24px rgba(31, 29, 27, 0.10)` | dropdowns, sticky cart, menu flyouts |
| 2 | `0 24px 64px rgba(31, 29, 27, 0.22)` | full-screen modal / overlay only |

### Shadow Philosophy

Even the rare shadow stays **warm** — tinted `rgba(31, 29, 27, …)` rather than cool `rgba(0, 0, 0, …)` — so it matches the warm near-black identity. Cards do not lift on hover; product images may swap to an alternate shot or zoom subtly instead. Buttons do not gain depth on press — they darken (`#2d2a26` → `#1f1d1b`) or invert (outline → fill).


## 8. Interaction & Motion

- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (Material-standard ease-in-out) for all transitions.
- **Durations:** fast 150ms (hover color), standard 240ms (button state, fade), slow 320ms (image swap, drawer).
- **Button hover:** primary darkens `#2d2a26` → `#1f1d1b`; secondary/outline fills warm near-black with white text. Color transition, no transform.
- **Product card hover:** image swaps to alternate shot or subtle 1.03 zoom (320ms); no shadow lift, no card transform.
- **Nav hover:** underline slides in (`text-underline-offset: 4px`).
- **Drawer / cart:** slide-in from right, 320ms, warm modal shadow behind.
- **Page transitions:** 240ms fade between routes; hero images cross-fade.
- **Reduced motion:** `prefers-reduced-motion: reduce` honored — image swaps and zooms disabled, color-only feedback retained, drawers appear without slide.


## 9. Accessibility & A11y

Computed against the live tokens (warm near-black `#2d2a26`, cream `#ffffff`, hero white `#f6f6f6`, teal `#0e7a82`):

- **Text on bg:** `#2d2a26` on `#ffffff` = **13.1:1** — AAA (body and headings).
- **On-brand on brand:** `#ffffff` on `#2d2a26` = **13.1:1** — AAA (primary button).
- **Hero headline:** `#f6f6f6` on `#1f1d1b` (dark hero) ≈ **14.8:1** — AAA. (Over a photographic hero, always back the text with a scrim or gradient — image luminance varies.)
- **Secondary text:** `#676986` on `#ffffff` = **5.5:1** — AA for normal text, AAA for large.
- **Teal accent text:** `#ffffff` on `#0e7a82` = **4.8:1** — AA (use ≥14px or bold for the sale badge).
- **Teal on cream:** `#0e7a82` on `#ffffff` = **4.4:1** — AA-large only; pair with an icon or weight for review-highlight legibility.
- **Faint text:** `#9a9db1` on `#ffffff` = **2.6:1** — decorative/disclaimer only; never load-bearing copy.

Other a11y guidance:
- **Focus:** 2px solid `#2d2a26` ring with 2px offset on every interactive element — visible against cream.
- **Hero text:** never rely on the photograph for contrast; add a `linear-gradient(rgba(0,0,0,0.4), transparent)` scrim behind hero copy.
- **ARIA:** size/fit chips need `role="radiogroup"` + `aria-checked`; the cart drawer needs `role="dialog"` + `aria-modal` + focus trap.
- **Keyboard:** full keyboard path through nav, search, filters, size selection, and cart.
- **Reduced motion:** image swaps/zooms suppressed; color feedback retained.


## 10. Responsive Behavior

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | < 640 | 2-up product grid; nav → hamburger; hero copy 48 → 32px; full-bleed images stack |
| Tablet | 640–1024 | 2–3-up grid; nav still collapsed; sticky add-to-bag bar appears on PDP |
| Desktop | 1024–1280 | 4-up grid; inline nav; hover image-swap enabled |
| Wide | 1280–1536 | full editorial bleed; campaign imagery extends toward viewport edges |

- **Touch targets:** 44×44 minimum on all CTAs and chips (achieved via 14×28 button padding + spacing).
- **Per-component collapse:** filters move into a bottom-sheet drawer on mobile; the size grid becomes a horizontal scroll of chips.
- **Image behavior:** `aspect-ratio: 3/4` product images hold across breakpoints; hero uses `object-fit: cover` and art-directed `<picture>` sources (portrait crop on mobile, landscape on desktop).
- **Sticky CTA:** PDP "ADD TO BAG" pins to the bottom of the viewport on mobile/tablet.


## 11. Content & Voice

### Tone

**Confident, terse, body-positive, editorial.** Sentence-case in body, UPPERCASE in CTAs and eyebrows. No exclamation marks, no hype, no emoji. The brand promise — "Solutions For Every Body" — sets the register: inclusive, declarative, calm.

### Microcopy patterns

- Primary CTA: **"ADD TO BAG"** (uppercase Inter 600)
- Cart: **"CONTINUE SHOPPING"** (live), **"CHECKOUT"**
- Shipping: **"Choose Your Shipping Destination"** (live)
- Out of stock: **"NOTIFY ME"**
- Newsletter: **"SUBMIT"** (terse — never "Join the family!")
- Fit guidance: **"True to size."** / **"Size up for a relaxed fit."** (declarative)

### Empty states

- Empty bag: **"Your bag is empty."** (declarative, no exclamation)
- No results: **"No results. Try a different size or color."**

### CTA verb conventions

- Use: **Add / Shop / Select / Notify / Submit / Continue**
- Avoid: urgency ("Hurry!", "Last chance!"), hype ("Obsessed!", "You NEED this"), emoji of any kind.


## 12. Dark Mode & Theming

**Light-only canvas with a dark photographic hero — not a togglable dark mode.** The brand IS the warm cream canvas; there is no inverted full-dark storefront, and the theme-toggle audit found no dark-mode signals (`score=0`). The dark hero is a *content band*, not a theme: it is the photographic stage, set against the cream page. Do not invert the whole system — the warm-neutral identity would lose its meaning. If a true dark surface is needed, build it as a content band (warm `#1f1d1b` ground, `#f6f6f6` text), never as a global theme flip.


## 13. Lineage & Influences

SKIMS launched in 2019 (Kim Kardashian with Jens and Emma Grede) on a single design insight: there is no one "nude." The brand built its identity around an *expanded range* of skin-tone neutrals, and that thesis became the chrome. The 2026 storefront treats warm tonal neutrals as a complete color system — a cream-white canvas, a warm near-black `#2d2a26` standing in for "black," taupe and sand mid-tones living in the photography, and a single deep teal reserved for review highlights. Type is condensed-grotesque (Tstar Pro Headline, in the Trade Gothic / Tstar lineage) set tight over Inter — a fashion-editorial pairing, not a DTC marketing pairing. Corners are sharp `0px` everywhere, and depth comes from full-bleed photography and whitespace rather than shadow or radius.

The register reads against minimal-luxury fashion (Calvin Klein circa Raf Simons, The Row, COS, Aritzia) and against the condensed-grotesque broadsheet tradition — not against the rounded-pill, gradient-heavy millennial-DTC playbook. Where Glossier removed *pink* to land on Apercu-on-white, SKIMS removed *contrast itself*: the system is warm, low-chroma, sensual-minimal, and photographic, letting the body — and the bodies — carry the page.

**Named influences:**
- **Tstar / Trade Gothic condensed grotesque lineage** — the condensed display-grotesque tradition the headline face descends from.
- **Inter (Rasmus Andersson)** — neutral UI workhorse handling 100% of body and interface copy.
- **Calvin Klein circa Raf Simons (2017–2018)** — stripped warm-luxury, body-forward fashion-editorial tone.
- **The Row** — quiet-luxury tonal restraint: neutral palette, no chrome ornament.
- **COS** — minimal-luxury DTC contemporary with sharp grids and neutral grounds.
- **Aritzia** — editorial-DTC contemporary the storefront reads against.


## 14. Do's and Don'ts

### Do

- Use **warm near-black `#2d2a26`** for text AND the primary brand fill. The warm cast is the identity.
- Keep the canvas **cream-white `#ffffff`** — calm, photographic ground.
- Set headlines in **Tstar Pro Headline** condensed, tracked tight (−0.02em), 48px on the hero.
- Set all body and UI in **Inter** 16px, 1.55 line-height.
- Use **`0px` radius** on every button, card, input, badge, and chip. Sharp rectangles only.
- Flip the hero headline to **near-white `#f6f6f6`** over the dark photographic band, with a scrim behind.
- Keep the palette **tonal** — warm taupe/sand/near-black do the work of color.
- Reserve **deep teal `#0e7a82`** for review highlights and the rare sale badge — the only saturated token.
- Make **photography carry the page** — let images run full-bleed with generous whitespace.
- Set CTAs **UPPERCASE Inter 600** tracked +0.06em — terse and editorial.
- Keep semantic states as **near-white tints** — calm, non-disruptive.
- Keep even shadows **warm-tinted** (`rgba(31, 29, 27, …)`).

### Don't

- **Don't** use pure black `#000` for text — it breaks the warm-neutral identity. Always `#2d2a26`.
- **Don't** use pill buttons or rounded cards. SKIMS is hard anti-pill — `0px` only.
- **Don't** introduce a serif or a third typeface. Two families: Tstar + Inter.
- **Don't** add saturated brand color, gradients, or glow. The palette is nude/neutral.
- **Don't** invert the whole site to a dark theme — the dark hero is a content band, not a theme.
- **Don't** add card shadows or hover-lift. Depth is photography + whitespace.
- **Don't** use cool gray shadows — keep them warm.
- **Don't** crowd the photography — whitespace is structural.
- **Don't** use hype, urgency, or emoji in copy. The voice is calm-declarative.
- **Don't** place hero text over photography without a scrim — contrast must be guaranteed.
- **Don't** widen tracking on body copy — wide tracking belongs only to eyebrows and buttons.
- **Don't** use teal as a large surface — it is an accent, never a ground.


## 15. Agent Prompt Guide

### Quick Color Reference

```
Background (canvas):  #ffffff   (near-white cream)
Text / Brand:         #2d2a26   (warm near-black — both roles)
Brand hover:          #1f1d1b
On-brand text:        #ffffff
Hero headline:        #f6f6f6   (near-white, over dark hero)
Secondary text:       #676986   (cool slate)
Accent (teal):        #0e7a82   (review highlight only)
Border (hairline):    #e5e5eb
Border (strong):      #dbdde4
Shading / panel:      #f7f7f8
```

### Example Component Prompts

- **"Create a SKIMS-style hero:** full-bleed dark photographic band, headline in Tstar Pro Headline condensed 48px near-white `#f6f6f6` tracked −0.02em over a subtle dark scrim, a single white `0px`-radius rectangular CTA `ADD TO BAG` (white bg, `#2d2a26` text, uppercase Inter 600 +0.06em). No rounding, no shadow, no color."

- **"Design a SKIMS product card:** no border, no shadow, no radius. 3:4 image, then product name in Inter 14px `#2d2a26`, price in Inter 14px `#676986`, then a row of small tonal nude color swatches. Photography carries the card."

- **"Build a SKIMS primary button:** dark warm-black `#2d2a26` rectangle, white text, `0px` radius, 14×28 padding, uppercase Inter 600 tracked +0.06em, darkens to `#1f1d1b` on hover. No pill."

- **"Style a SKIMS input field:** white bg, 1px `#dbdde4` hairline border, `0px` radius, 16px Inter, placeholder `#9a9db1`, focus border `#2d2a26` with a 2px offset outline."

- **"Compose a SKIMS section block:** cream `#ffffff` ground, wide-tracked uppercase Inter eyebrow `#676986`, Tstar headline `#2d2a26` 32px tracked tight, one supporting Inter 18px line, sharp rectangular CTA. 96px vertical breathing room."

- **"Make a SKIMS review module:** filled stars `#2d2a26`, empty `#e5e5e5`, the rating highlight/marker in deep teal `#0e7a82` — the only saturated color on the page."

### Iteration Guide

1. **If it looks cold, warm the black.** Pure `#000` is the #1 mistake — switch every text and fill to `#2d2a26`.
2. **If it looks consumer-friendly, sharpen the corners.** Set every radius to `0`; remove any pill.
3. **If it looks busy, remove color.** Pull everything back to the nude/neutral tonal range; let teal appear only on review highlights.
4. **If it looks flat-boring, lean on photography.** Add a full-bleed dark photographic hero with a near-white headline — the image is the energy.
5. **If headings feel weak, condense and tighten.** Use Tstar Pro Headline (condensed), track −0.02em, increase size before adding weight.
6. **If the page feels cramped, add whitespace, not ornament.** Push section spacing to 96–128px.
7. **If shadows look off, warm them.** Replace `rgba(0,0,0,…)` with `rgba(31,29,27,…)`.
8. **If a CTA feels loud, make it terser.** Uppercase Inter 600, two words max — "ADD TO BAG", "CONTINUE SHOPPING".

---

*Theme-toggle audit: score=0, signals=[none]*
