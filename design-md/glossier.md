---
name: Glossier
tagline: Post-pink austerity — white canvas, single-family Apercu, 0px radius rectangles. The brand that invented millennial-pink chrome in 2014 has retired pink to a footer wash and a single badge color.
updated_at: 2026-05-09T00:00:00.000Z
published_at: 2026-05-09T00:00:00.000Z
author: webdesignhot
source_url: https://www.glossier.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [fashion, marketplace]
tags: [light, white, sans, structured, spacious, editorial]
preview_swatch: ['#ffffff', '#000000', '#f6e3e6']
related: [rare-beauty, patagonia, lego]
description: 'Glossier''s site in 2026 is the most surprising rebrand in DTC: the company that spent a decade making "millennial pink" the default DTC chrome has, in its current redesign, retired pink from the storefront entirely and rebuilt the system around a single typeface (Apercu Pro), a pure-white canvas, and 0px-radius rectangles. The famous Glossier Pink survives only as a "Top-rated" badge color `#f6e3e6` and a single footer wash `#faf2f4` — both noticeably grayer and paler than the candy-pink era. CTAs are sharp light-gray rectangles `#e8e8e8`, not pills. Display copy is set 32px Apercu Regular, sentence case, tracked −0.32px — a magazine-deck rhythm rather than a marketing headline. Section eyebrows are 12px UPPERCASE Apercu with +0.04px tracking. The wordmark hovers to "You look good." The femininity has migrated entirely into the photography and product names — the chrome is now closer to Calvin Klein-stripped-luxury-in-beauty-drag than to the 2014 Soho-flagship version. Where Rare Beauty went lavender + cream + Recoleta and Fenty went jewel-tone-bold, Glossier 2026 went **post-pink Apercu-monolith on white**.'


# Canonical 8-role aliases (per google-labs-code/design.md PR #76).
# Maps role names to this entry's actual token names so role-aware
# downstream tools resolve `theme.background` → entry's `bg`, etc.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-cobalt
  muted: text-muted
  border: border
  ring: border-strong

colors:
  # Page grounds
  bg: '#ffffff'                  # pure white canvas — the dominant surface
  bg-soft: '#f7f7f7'             # most-used non-white surface (notify-me, light panels)
  bg-deeper: '#f0f0f0'           # secondary surfaces
  bg-pink-wash: '#faf2f4'        # footer-only pink wash — last visible trace of millennial pink in chrome
  # Surfaces & buttons
  surface: '#ffffff'
  surface-soft: '#f7f7f7'
  button-default: '#e8e8e8'      # sharp-cornered light-gray "Add to bag" default state
  button-hover: '#000000'        # CTA flips to black on hover
  on-button-hover: '#ffffff'
  promo-bar: '#000000'           # sitewide top promo strip — solid black
  on-promo-bar: '#ffffff'
  # Brand — the rebrand chose black-as-primary, pink-as-recall
  brand: '#000000'                # primary CTA + wordmark
  brand-hover: '#1a1a1a'
  on-brand: '#ffffff'
  pink-badge: '#f6e3e6'          # "Top-rated" / "Best Seller" badge — pink as punctuation, not page
  pink-badge-deep: '#e8c8cd'     # hover/border on pink badge
  # Accents — saturated single-purpose tokens
  accent-cobalt: '#0600ff'        # "New" nav link, "Coming soon" badge bg — punchy single accent
  accent-red-orange: '#f94200'    # primary badge color (sale, primary CTA flag)
  accent-red-deep: '#d30000'      # secondary text accent
  accent-blue-deep: '#3860be'     # editorial blue accent
  accent-sage: '#468254'          # seasonal accent (limited use)
  # Text
  text: '#000000'                 # body copy, headlines — pure black
  text-strong: '#000000'
  text-muted: '#666666'           # meta, captions
  text-soft: '#555555'
  text-faint: '#999999'
  text-on-brand: '#ffffff'
  text-secondary: '#333333'
  link: '#000000'
  link-hover: '#666666'
  selection-bg: '#f6e3e6'        # text-selection wash — pink-as-history made interactive
  # Borders & dividers
  border: '#e9e9eb'              # hairline, dividers
  border-strong: '#d4d4d8'       # emphasis hairline
  border-soft: '#f0f0f0'
  border-brand: '#000000'        # focus border
  # Semantic
  success: '#468254'
  warning: '#f94200'
  danger: '#d30000'
  info: '#0600ff'

typography:
  display:
    family: '"Apercu Pro", "Apercu", "Gill Sans", "Helvetica Neue", -apple-system, sans-serif'
    weights: [200, 300, 400, 500, 600, 700]
  body:
    family: '"Apercu Pro", "Apercu", "Gill Sans", "Helvetica Neue", -apple-system, sans-serif'
    weights: [300, 400, 500, 700]
  serif:
    family: 'Georgia, "Times New Roman", serif'
    weights: [400]
  mono:
    family: '"Apercu Mono", "Apercu Mono Pro", ui-monospace, SFMono-Regular, Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 48, weight: 400, lineHeight: 1.05, tracking: '-0.012em', family: display }
    display-xl:      { size: 32, weight: 400, lineHeight: 1.15, tracking: '-0.01em',  family: display }
    display-lg:      { size: 32, weight: 500, lineHeight: 1.1,  tracking: '0',        family: display }
    h1:              { size: 32, weight: 500, lineHeight: 1.15, tracking: '0',        family: display }
    h2:              { size: 20, weight: 400, lineHeight: 1.3,  tracking: '0',        family: display }
    h3:              { size: 14, weight: 400, lineHeight: 1.4,  tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 400, lineHeight: 1.2,  tracking: '0.04em',   family: display }
    eyebrow-bold:    { size: 12, weight: 700, lineHeight: 1.2,  tracking: '0.04em',   family: display }
    body-lg:         { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body:            { size: 14, weight: 400, lineHeight: 1.4,  tracking: '0.002em',  family: body }
    body-sm:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',        family: body }
    button:          { size: 14, weight: 400, lineHeight: 1.0,  tracking: '0.02em',   family: body }
    nav:             { size: 12, weight: 400, lineHeight: 1.2,  tracking: '0',        family: body }
    label:           { size: 12, weight: 400, lineHeight: 1.2,  tracking: '0.04em',   family: body }
    caption:         { size: 11, weight: 400, lineHeight: 1.4,  tracking: '0',        family: body }

radius:
  none: 0
  micro: 1
  sm: 2

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 80, 96, 128, 160, 192]

layout:
  page-width: 1920
  prose-width: 720
  header-height: 40

motion:
  ease-standard: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  duration-fast: 150
  duration-standard: 250
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1280
  wide: 1920

shadows:
  card: 'none'
  card-hover: 'none'
  modal: '0 24px 64px rgba(0, 0, 0, 0.20)'

accessibility:
  contrast-text-on-bg: 21
  contrast-text-on-brand: 21
  focus-ring: '2px solid #000000 + 2px outset gap'
  reduced-motion-honored: true

components:
  button-primary: { bg: button-default, text: text, padding: '8px 16px', radius: 0, font: button, hover-bg: brand, hover-text: on-brand }
  button-secondary: { bg: surface, text: text, padding: '8px 16px', radius: 0, border: '1px solid border-strong' }
  button-ghost: { bg: transparent, text: text, padding: '8px 12px' }
  card: { bg: surface, radius: 0, padding: 0, border: 'none' }   # cards have zero chrome — image carries identity
  pill: { bg: pink-badge, text: text, radius: pill, padding: '4px 10px', font: 'eyebrow' }
  badge-new: { bg: accent-cobalt, text: on-brand, padding: '2px 8px', radius: 0, font: 'eyebrow-bold' }
  badge-primary: { bg: accent-red-orange, text: on-brand, padding: '2px 8px', radius: 0, font: 'eyebrow-bold' }
  input: { bg: surface, border: '1px solid border-strong', text: text, radius: 0, padding: '12px 14px', focus-border: brand }
  promo-bar: { bg: promo-bar, text: on-promo-bar, padding: '14px 20px', radius: 0, font: 'eyebrow-bold' }

lineage:
  summary: 'Glossier started in 2014 as the Into-The-Gloss-blog-spinoff that made millennial pink (`#FFD7D7`-ish) the default DTC canvas color. The 2014–2019 storefront was pink page + black Sangbleu + amber-cyc product photography + pill buttons — a complete sensibility that competitors copied for half a decade. The 2025–2026 redesign reverses every one of those choices except the photography. The current site is white canvas + Apercu (Colophon Foundry, single family handling 100% of type) + 0px-radius rectangles + 12px UPPERCASE eyebrows. Pink survives only as a Top-rated badge color (`#f6e3e6`) and a footer wash (`#faf2f4`). The signature move has migrated from "pink chrome" to "32px sentence-case headlines tracked −0.32px" — magazine-deck typography in place of marketing-headline typography. Femininity has been pushed entirely into product naming, copy, and campaign photography; the chrome is now stripped luxury. Where Rare Beauty went lavender + Recoleta and Fenty went jewel-tone bold, Glossier 2026 chose to look like Calvin Klein in beauty drag.'
  influences:
    - { name: 'Emily Weiss / Into The Gloss (2010)', role: 'editor-as-founder editorial heritage', url: 'https://intothegloss.com/' }
    - { name: 'Apercu Pro (Colophon Foundry, 2010)', role: 'single-family typographic monolith', url: 'https://www.colophon-foundry.org/typefaces/apercu-pro/' }
    - { name: 'Sangbleu (Swiss Typefaces)', role: 'historical italic serif on Into The Gloss / 2014 Glossier — replaced in current rebrand', url: 'https://swisstypefaces.com/fonts/sangbleu/' }
    - { name: 'Calvin Klein circa Raf Simons', role: 'stripped-luxury-on-white tonal target for the 2025 rebrand', url: 'https://www.calvinklein.com/' }
    - { name: 'COS / Aritzia / The Row', role: 'minimal-luxury-DTC contemporaries', url: 'https://www.cos.com/' }
    - { name: 'Original Glossier Soho flagship (2018)', role: 'pink-cyc photography studio aesthetic — preserved in campaign imagery, retired from chrome', url: 'https://www.glossier.com/' }
---


## 1. Visual Theme & Atmosphere

Glossier's site in 2026 is the most surprising rebrand in DTC: the company that spent a decade making "millennial pink" synonymous with direct-to-consumer chrome has, in its current redesign, **retired pink from the storefront almost entirely**. The canvas is now pure white `#ffffff`, body copy is pure black `#000000`, every heading and every button is set in a single typeface — **Apercu Pro** (Colophon Foundry) — and every container has `0px` border-radius. The famous Glossier Pink survives in two places only: a "Top-rated" / "Best Seller" badge background `#f6e3e6` and a footer wash `#faf2f4`. Both are noticeably *grayer* and *paler* than the candy-pink Soho-flagship era — pink as punctuation, not page.

The display move is unusual for DTC: **32px Apercu Regular, sentence case, tracked −0.32px** (about −0.01em). Most beauty brands at this size go all-caps + tight or sentence + neutral; Glossier sets a paragraph-like editorial deck and lets it carry the page. Section eyebrows are **12px UPPERCASE Apercu with +0.04px tracking** — micro-eyebrows, not full caps-aggressive labels. The wordmark hovers to "You look good." The slogan *is* the hover state.

Where Rare Beauty went **lavender + cream + Recoleta serif**, Fenty went **jewel-tone-bold + saturated blacks**, and Merit went **warm-cream + serif italics**, Glossier 2026 chose to look like **stripped luxury in beauty drag** — Calvin Klein, Aritzia, COS rather than the millennial-DTC playbook the brand itself helped invent. Femininity has migrated entirely into campaign photography, product naming ("Boy Brow", "Cloud Paint", "Balm Dotcom"), and footer copy. The chrome is austere on purpose — a quiet stage for the warmth.

**Key Characteristics:**
- Pure white canvas `#ffffff`
- Pure black text `#000000`
- Single-family **Apercu Pro** for 100% of type (display, body, nav, button, eyebrow)
- `0px` border-radius on every button, card, input, badge — sharp rectangles only
- 12px UPPERCASE eyebrows with +0.04px tracking as the page-rhythm device
- 32px sentence-case headlines tracked −0.32px (magazine-deck rhythm)
- Pink relegated to badge + footer wash; no longer a page color
- Cobalt `#0600ff` for "New" / "Coming soon" — punchy single saturated accent
- Red-orange `#f94200` for sale/primary badges
- Solid black promo bar at top of every page
- Wordmark hover swap → "YOU LOOK GOOD."
- Photography (warm, lifestyle, tonal) carries 100% of the brand warmth
- Anti-pill: every button is a sharp-cornered rectangle


## 2. Color Palette & Roles

### Primary
- **Background** `#ffffff`: pure white. The dominant surface.
- **Bg Soft** `#f7f7f7`: most-used non-white surface — Notify-me buttons, light panels.
- **Bg Deeper** `#f0f0f0`: secondary surfaces.
- **Surface** `#ffffff`: cards have *no* chrome, so the page is the surface.

### Brand — Black, Not Pink
- **Brand** `#000000`: primary CTA fill (on hover), wordmark, focus ring.
- **Brand Hover** `#1a1a1a`: subtle on-press.
- **On-Brand** `#ffffff`: text on black.
- **Button Default** `#e8e8e8`: light-gray default rectangle for "Add to bag" — flips to black on hover.

### The Pink, Reduced
- **Pink Badge** `#f6e3e6`: "Top-rated" / "Best Seller" badge background. The single chrome use of pink.
- **Pink Wash** `#faf2f4`: footer-only background. Last visible trace of millennial pink in the chrome.
- **Selection Bg** `#f6e3e6`: text-selection color. Pink-as-history made interactive.

### Accent — One Saturated Token Per Job
- **Accent Cobalt** `#0600ff`: "New" nav link, "Coming soon" badge background. Punchy, single-purpose.
- **Accent Red-Orange** `#f94200`: primary badge color (sale, primary CTA flag).
- **Accent Red-Deep** `#d30000`: secondary text accent.
- **Accent Blue-Deep** `#3860be`: editorial blue accent.
- **Accent Sage** `#468254`: seasonal accent (limited use).

### Text
- **Text** `#000000`: body, headlines. Pure black.
- **Text Muted** `#666666`: meta, captions.
- **Text Soft** `#555555`: tertiary.
- **Text Faint** `#999999`: utility/disclaimer.

### Borders
- **Border** `#e9e9eb`: hairline, dividers.
- **Border Strong** `#d4d4d8`: emphasis.
- **Border Brand** `#000000`: focus.

### Promo Bar
- **Promo Bar** `#000000` / **On Promo Bar** `#ffffff`: sitewide top strip ("Score free shipping over $40"). Solid black, no rounding.


## 3. Typography Rules

### Font Family — Single-Family Monolith

Apercu Pro by Colophon Foundry (2010) handles **100% of the typography**: display, body, nav, button, eyebrow, footer. Self-hosted at `/cdn/shop/t/1401/assets/Apercu*.woff2`. There is **no GT Sectra, no Tiempos, no Suisse, no Inter** in the live site. The italic display serif people remember from Into The Gloss is **Sangbleu** (Swiss Typefaces) — historical, retired in the rebrand.

```
display: "Apercu Pro", "Apercu", "Gill Sans", "Helvetica Neue", -apple-system, sans-serif
body:    "Apercu Pro", "Apercu", "Gill Sans", "Helvetica Neue", -apple-system, sans-serif
serif:   Georgia, "Times New Roman", serif      (fallback only — not used by Glossier directly)
mono:    "Apercu Mono", ui-monospace, SFMono-Regular, Menlo, monospace
```

Loaded weights: 200, 300, 400, 500, 600, 700 (regular + italic). **Apercu Mono** is loaded but barely visible — likely reserved for clinical-claim and ingredient panels (a quiet "lab" register).

### Hierarchy — One Ratio, One Family

| Token | Size | Weight | Tracking | Case | Use |
|-------|------|--------|----------|------|-----|
| `display-hero` | 48 | 400 | -0.012em | sentence | rare full-bleed editorial |
| `display-xl` | 32 | 400 | **-0.01em** | sentence | **the signature 32px deck** |
| `h1` (PDP title) | 32 | 500 | 0 | sentence | "Balm Dotcom", "Cloud Paint" |
| `h2` (small) | 20 | 400 | 0 | sentence | "Search our site" |
| `eyebrow` | **12** | 400 | **+0.04em** | UPPERCASE | "INGREDIENTS", "GET THE LOOK", "YOU MIGHT ALSO LIKE" |
| `eyebrow-bold` | 12 | 700 | +0.04em | UPPERCASE | wordmark hover, "MENU", "STORES" |
| `body` | 14 | 400 | +0.002em | sentence | nav, body copy |
| `body-sm` | 12 | 400 | 0 | sentence | meta, captions |
| `button` | 14 | 400 | +0.02em | sentence | "Add to bag", "Submit" |
| `nav` | 12 | 400 | 0 | UPPERCASE | "MENU", "STORES", "LOG IN" |

### The Signature Type Move

**32px Apercu Regular, sentence case, tracked −0.32px** for editorial body-headlines. Sentence case + tightened tracking + sans-serif at this size reads more like a **fashion-magazine deck** than a marketing headline — slow, calm, declarative. Example from a PDP: *"Clinically proven to moisturize lips for up to 12 hours."*

Combined with **12px UPPERCASE +0.04em** eyebrows, the system has only two type registers that matter: micro-caps eyebrow + medium-paragraph deck. Everything else is body text or nav.

### No Italic-In-Product-Names

Despite editorial heritage from Into The Gloss, current product titles ("Boy Brow", "Cloud Paint", "Balm Dotcom", "Futuredew") are set in Apercu Medium **roman, sentence case, 14–32px**. There is no italic display serif anywhere in the live storefront. The italic move you may remember is from older comms; do not copy it.


## 4. Component Stylings

### Buttons — Sharp Rectangles, Not Pills

```
.btn-primary {
  background: #e8e8e8;     /* default light gray */
  color: #000;
  padding: 8px 16px;
  border-radius: 0;        /* sharp corners — not pills */
  font: 400 14px/1.0 Apercu Pro;
  letter-spacing: +0.02em;
  text-transform: none;    /* sentence case */
  transition: background 150ms;
}
.btn-primary:hover {
  background: #000;
  color: #fff;
}
```

The pill-button reputation is **out of date**. Current Glossier has zero pill buttons in the storefront chrome. Add-to-bag is a sharp light-gray rectangle that flips to solid black on hover. This is a deliberate inversion of the millennial-DTC pill aesthetic the brand itself helped popularize.

### Product Cards — Zero Chrome

```
.product-card {
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 0;
}
.product-card__image { width: 100%; }
.product-card__name  { font: 400 14px Apercu Pro; margin-top: 12px; }
.product-card__price { font: 400 14px Apercu Pro; color: #666; }
```

No border, no shadow, no radius, no padding. The photograph carries 100% of the visual identity. Card layout: photo → name → price → optional badge. This is unusually confident — most competitors put their card chrome to work; Glossier removes all of it.

### Badges — Color As Signal

| Badge | Bg | Text | Use |
|-------|-----|------|-----|
| Top-rated | `#f6e3e6` (pink) | `#000` | best-seller flag |
| New | `#0600ff` (cobalt) | `#fff` | newly launched |
| Sale / primary | `#f94200` (red-orange) | `#fff` | promotional |
| Coming soon | `#0600ff` (cobalt) | `#fff` | preview |

All `0px` radius, `2px 8px` padding, 12px UPPERCASE Apercu Bold +0.04em.

### Promo Bar

```
.promo-bar {
  background: #000;
  color: #fff;
  padding: 14px 20px;
  font: 700 12px/1.2 Apercu Pro;
  letter-spacing: +0.04em;
  text-transform: uppercase;
  text-align: center;
  border-radius: 0;
}
```

Sitewide top strip. Solid black, no rounding, no brand color. Most DTC peers use a brand color here; Glossier deliberately keeps the chrome neutral so products land hardest.

### Inputs — Flat White, Sharp Edges

```
.input {
  background: #fff;
  border: 1px solid #d4d4d8;
  border-radius: 0;
  padding: 12px 14px;
  font: 400 14px Apercu Pro;
}
.input:focus { border-color: #000; outline: 2px solid #000; outline-offset: 2px; }
```

Even the newsletter signup is austere — no pill, no rounded edges, plain "Submit" rectangle.


## 5. Layout Principles

- Base 4px, generous 56–96–160px between sections (editorial breathing room).
- Page max-width: **1920px** (extremely wide — full-bleed editorial).
- Header height: **40px** (`2.5rem` — extremely thin nav).
- Promo bar: 57.4px above header; total chrome ~100px.
- Product grid: 4-up at desktop, 2-up at tablet, 1-up at mobile.
- Editorial articles in 720px prose column.
- Hero: full-bleed photography with overlapping headline at 30% from bottom (legacy 2018-era pattern preserved in campaigns).
- Photography backdrop: **pure white cyc** for product carousels; lifestyle imagery carries its own warm/peach/pink mood. There is no "amber bay" or "pink bay" templated backdrop in the chrome anymore.


## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| **None** | 0 | **default everywhere** — buttons, cards, inputs, badges |
| Micro | 1 | hairline indicators (rare) |
| Small | 2 | tooltips (rare) |

Glossier's radius scale is intentionally *almost-empty*. There are no pills, no rounded cards, no soft corners. The brand has committed to **sharp rectangles as the chrome**. If a future component needs radius, prefer 0; if it can't be 0, prefer 1–2px. Anything ≥ 4px would feel foreign.


## 7. Depth & Elevation

Effectively flat. The product card has no shadow at any state. The page relies on **photography contrast and white-on-white spacing** to create depth, not shadow tokens.

| Level | Treatment |
|-------|-----------|
| 0 | flat — default for cards, buttons, inputs |
| 4 | `0 24px 64px rgba(0, 0, 0, 0.20)` — modal overlay only |

### Shadow Philosophy

Glossier 2026 treats shadow as a foreign material. Cards do not lift on hover. Buttons do not gain depth on press — they invert color (gray → black) instead. The only place shadow appears is full-screen modal overlays.


## 8. Interaction & Motion

- Standard ease (`cubic-bezier(0.25, 0.1, 0.25, 1)`), short durations (150–400ms).
- Card hover: no transform, no shadow lift. Image may swap to alt-shot on PDP cards.
- Button hover: background flips gray → black, text flips black → white. Color inversion as the only feedback signal.
- Wordmark hover: text content swap to "YOU LOOK GOOD." in 12px Apercu Bold.
- Promo-bar text: optional fade-cycle through messages, 5–8s per slide.
- Page transitions: 250ms fade.
- `prefers-reduced-motion: reduce` honored — wordmark swap still works (text-only, not animated).


## 9. Accessibility & A11y

- text on bg: `#000` on `#fff` = **21:1** AAA (max possible).
- on-brand on brand (button hover): `#fff` on `#000` = **21:1** AAA.
- Default light-gray button: `#000` on `#e8e8e8` = **17.4:1** AAA.
- Pink badge text: `#000` on `#f6e3e6` = **18.2:1** AAA.
- Cobalt badge text: `#fff` on `#0600ff` = **8.5:1** AAA.
- Red-orange badge text: `#fff` on `#f94200` = **3.7:1** AA-large (acceptable for 12px Bold tracked +0.04em).
- 2px solid black focus ring + 2px outset gap. Keyboard-accessible across nav, search, cart.
- Wordmark hover swap is `text-content` change, not `display: none` — screen readers announce the slogan correctly.


## 10. Responsive Behavior

- Mobile (<480): nav collapses to hamburger; product grid 1-up; hero copy 32→24px; promo-bar single line truncated.
- Tablet (480–768): 2-up product grid; nav still collapsed.
- Desktop (768–1280): 4-up product grid; nav inline.
- Wide (1280–1920): full editorial bleed; hero photography may extend beyond 1280 viewport.

Touch targets: 44×44 minimum maintained on all CTAs even at body-text 14px (achieved via padding 8×16 on default buttons + adjacent tap area).


## 11. Content & Voice

### Tone

**Sentence-case, second-person-implied, no exclamation points, no emoji.** Editorial-restrained without being stiff. Signs off with the "you look good" wordmark recall — the brand promise is also the hover state.

### Microcopy patterns

- Primary CTA: **"Add to bag"** (sentence case, never "ADD TO BAG")
- Notify: **"Notify me"** (out-of-stock state)
- Sign-up: **"Submit"** (newsletter — terse, not "Subscribe!" or "Join us")
- Errors: **"Something went wrong."** (no exclamation)
- Empty cart: **"Your bag is empty."** (declarative)
- Footer ethos: **"Skin First. Makeup Second.™"** (preserved from 2014, still in footer copy verbatim)

### Editorial declarations (32px deck pattern)

- *"Clinically proven to moisturize lips for up to 12 hours."*
- *"A skincare-meets-makeup hybrid that gives skin a healthy, radiant glow."*
- *"At Glossier, we make products inspired by real life."*

Pattern: full sentence, sentence case, tracked −0.01em, 32px Apercu. No "Discover", no "Introducing", no "Meet the X" — just the claim.

### CTA verb conventions

- Use: **Add / Save / Submit / Notify / Read more / Find a store**
- Avoid: "Buy", "Shop now", "Get yours", urgency ("Limited time", "Last chance")


## 12. Dark Mode & Theming

**Light-only.** White canvas IS the brand. There is no dark-mode storefront — the system would lose its meaning inverted. Theme switching is not part of the visual language.


## 13. Lineage & Influences

Glossier started in 2014 as the Into-The-Gloss-blog-spinoff that made millennial pink (`#FFD7D7`-ish) the default DTC canvas color. The 2014–2019 storefront was **pink page + black Sangbleu + amber-cyc product photography + pill buttons** — a complete sensibility competitors copied for half a decade. The 2025–2026 redesign reverses every one of those choices except the photography. Pink has migrated from "page" to "punctuation" — a single badge color and a single footer wash. The pill is gone. Sangbleu is gone. Apercu (single-family) handles every register. Border-radius is `0` everywhere.

The signature move has shifted from **"pink chrome"** to **"32px sentence-case headlines tracked −0.32px"** — magazine-deck typography in place of marketing-headline typography. Femininity has been pushed entirely into product naming, copy, and campaign photography; the chrome is now stripped luxury. Where Rare Beauty went lavender + cream + Recoleta and Fenty went jewel-tone bold, Glossier 2026 chose to look like Calvin Klein in beauty drag.

**Named influences:**
- **Emily Weiss / Into The Gloss (2010)** — editor-as-founder editorial heritage; pre-Glossier brand voice.
- **Apercu Pro (Colophon Foundry, 2010)** — single-family typographic monolith handling 100% of the live storefront.
- **Sangbleu (Swiss Typefaces)** — historical italic serif on Into The Gloss / 2014 Glossier; retired in current rebrand. Worth knowing about for legacy comms inheritance.
- **Calvin Klein circa Raf Simons (2017–2018)** — stripped-luxury-on-white tonal target the 2025 rebrand visibly aspires to.
- **COS / Aritzia / The Row** — minimal-luxury-DTC contemporaries the new chrome reads against.
- **Original Glossier Soho flagship (2018)** — pink-cyc photography studio aesthetic; preserved in campaign imagery, retired from chrome.


## 14. Do's and Don'ts

### Do

- Set every heading in **Apercu Pro** — display, body, nav, button, eyebrow, footer. Do not mix in another typeface.
- Use **0px radius** on every button, card, input, and badge. Sharp rectangles only.
- Set **12px UPPERCASE +0.04em** for every section eyebrow. Treat it as the page-rhythm device.
- Use **sentence case** at 32px for editorial declarations (never SHOUTING-CAPS or Title Case).
- Track display copy at **−0.01em** for the magazine-deck rhythm.
- Reserve pink for **badge + footer wash only**. Never as page background.
- Use **cobalt `#0600ff`** for "New" / "Coming soon", **red-orange `#f94200`** for sale/primary. One saturated token per job.
- Strip all chrome from product cards — let the photograph carry identity.
- Keep the **promo bar solid black** with white type. Do not brand-color it.
- Hover wordmark to **"YOU LOOK GOOD."** — the slogan is the hover state.

### Don't

- **Don't** use pill buttons. The pill-button reputation is historical, not current.
- **Don't** use millennial-pink (`#FFD7D7`) as a page color. It belongs in the badge or footer wash, not the canvas.
- **Don't** add italic display serif (Sangbleu, GT Sectra, Tiempos). The current system is sans-only.
- **Don't** use ALL-CAPS at heading sizes (24px+). Caps belong only at 12px eyebrow scale.
- **Don't** add card shadow or border-radius. Cards are flat and sharp.
- **Don't** use exclamation points or emoji in copy. The voice is calm-declarative.
- **Don't** use "Buy" / "Shop now" / urgency CTAs. Verbs are **Add / Save / Submit / Notify**.
- **Don't** add brand color to the promo bar — it stays black.


## 15. Agent Prompt Guide

When prompting an LLM to generate or modify a Glossier-style surface:

> "Generate a Glossier-2026-style landing page hero. Pure white background `#ffffff`, pure black text `#000000`. Set the headline in Apercu Pro Regular 32px, sentence case, tracked −0.01em (about −0.32px). Place a 12px UPPERCASE +0.04em Apercu eyebrow above the headline. Below the headline, a sharp-cornered rectangular CTA — `0px` border-radius, `8px 16px` padding, `#e8e8e8` background, black text — that flips to solid black on hover. No pills, no rounded edges, no shadows, no italic serif. Product cards have no border, no radius, no shadow — just the photograph + name + price below in 14px Apercu Regular. If you need a saturated accent for a 'New' or 'Coming soon' badge, use `#0600ff` cobalt. If a 'Top-rated' badge is needed, use `#f6e3e6` pink with black text. Solid black promo bar with white 12px UPPERCASE Apercu Bold +0.04em copy at top of every page. Voice: sentence-case, no exclamation points, no emoji. CTAs are 'Add to bag' / 'Submit' / 'Notify me' — never 'Buy' or 'Shop now'."

This produces 2026-Glossier directly. To produce 2014-Glossier (millennial-pink era), invert: pink canvas, pill buttons, italic Sangbleu serif headlines, amber-cyc photography. The two systems are *completely incompatible* — knowing which era to produce is the most important parameter.
