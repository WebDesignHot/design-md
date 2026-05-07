---
name: Honda
tagline: Reliability-first restraint — HondaGlobalFont on white, signature red #cc0000 used scarcely, Power-of-Dreams confidence.
updated_at: 2026-05-05T20:10:49+12:00
published_at: 2026-05-05T20:10:49+12:00
author: webdesignhot
source_url: https://global.honda
spec: design.md/v1.5
quality: curated
featured: false
categories: [automotive]
tags: [light, sans, photography, editorial, engineering, friendly]
preview_swatch: ['#ffffff', '#cc0000', '#35363b']
related: [tesla, bmw, ferrari]
description: 'Honda''s site reads as reliability-first engineering — closer to a parts catalog than a luxury brochure. The base canvas is paper-white `#ffffff` carrying display headlines in soft-charcoal `#35363b` (not pure black; Honda''s body color is famously a warm dark grey for paragraph reading comfort). The single chromatic voltage is **Honda Red** `#cc0000` — the iconic logotype red that has identified the brand since 1949 — used scarcely on the wordmark, primary CTAs, and motorsport callouts. Custom **HondaGlobalFontEN** runs as the single sans family across every text role at modest weights (regular 400 dominates, 500 for emphasis); body copy uses tracked `0.8px` letter-spacing to add a subtle Japanese-engineering precision. The "Power of Dreams" tagline appears at the homepage hero, anchoring the optimistic-engineering brand voice. Section rhythm is generous editorial — full-bleed product photography (CR-V on autumn forest road, Civic Type R on track, jet aircraft in hangar) alternating with tighter spec bands.'

colors:
  bg: '#ffffff'                  # paper-white canvas
  bg-elevated: '#f7f7f7'         # near-white surface variant
  bg-dark: '#000000'             # rare; used on motorsport and Civic Type R bands
  surface: '#f7f7f7'             # neutral grey panel — spec tables, comparison cards
  surface-hover: '#ededed'       # hover state on light surface
  surface-strong: '#e0e0e0'      # heavier panel
  surface-on-dark: '#1a1a1a'     # card surface inside dark bands
  text: '#35363b'                # signature soft-charcoal — body color, not pure black
  text-strong: '#1a1a1a'         # strong-emphasis copy
  text-display: '#000000'        # display headlines — pure black for impact
  text-body: '#35363b'           # running paragraph copy
  text-muted: '#666666'          # captions, metadata
  text-faint: '#999999'          # disabled, footer secondary
  text-on-dark: '#ffffff'        # text on dark bands
  brand: '#cc0000'               # Honda Red — wordmark, primary CTA, motorsport
  brand-hover: '#b30000'         # press state
  brand-active: '#990000'        # deeper press
  brand-soft: '#fceaea'          # softest tint — selected nav, badge bg
  brand-deep: '#7a0000'          # deep red for gradient accents
  on-brand: '#ffffff'            # white on Honda Red
  accent-blue: '#0066cc'         # Honda Aviation accent (HondaJet program)
  accent-yellow: '#ffd200'       # Civic Type R / racing program accent
  border: '#d8d8d8'              # standard 1px hairline on light
  border-soft: '#ebebeb'         # soft divider, table rows
  border-strong: '#999999'       # input border, section divider
  border-on-dark: '#2a2a2a'      # 1px hairline on dark surface
  link: '#cc0000'                # Honda links default to brand red
  link-hover: '#990000'          # darker red on hover
  ring: '#cc0000'                # focus ring — Honda red
  success: '#00854a'             # confirmation states
  warning: '#ff8c00'             # validation warnings
  danger: '#cc0000'              # form errors (shares brand)
  info: '#0066cc'                # info badges (shares aviation accent)

typography:
  display:
    family: 'HondaGlobalFontEN-Regular, "HondaGlobalFontEN", "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 700]
    opentype-features: []
  body:
    family: 'HondaGlobalFontEN-Regular, "HondaGlobalFontEN", "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500]
    opentype-features: []
  mono:
    family: '"SF Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-mega:    { size: 64, weight: 400, lineHeight: 1.15, tracking: '0',     family: display, notes: 'Homepage hero h1 — "The Power of Dreams" or model name' }
    display-xl:      { size: 48, weight: 400, lineHeight: 1.20, tracking: '0',     family: display, notes: 'Subsidiary heroes' }
    display-lg:      { size: 36, weight: 400, lineHeight: 1.25, tracking: '0',     family: display, notes: 'Section heads, feature band headlines' }
    display-md:      { size: 28, weight: 500, lineHeight: 1.30, tracking: '0',     family: display, notes: 'Sub-section heads, card titles' }
    display-sm:      { size: 22, weight: 500, lineHeight: 1.35, tracking: '0.4px', family: display, notes: 'Component titles' }
    title-md:        { size: 18, weight: 500, lineHeight: 1.40, tracking: '0.4px', family: body,    notes: 'Card titles, list section labels' }
    title-sm:        { size: 16, weight: 500, lineHeight: 1.45, tracking: '0.4px', family: body,    notes: 'Small section titles' }
    body-lg:         { size: 16, weight: 400, lineHeight: 1.65, tracking: '0.8px', family: body,    notes: 'Editorial body, intro paragraphs — tracked Japanese-engineering precision' }
    body:            { size: 14, weight: 400, lineHeight: 1.65, tracking: '0.8px', family: body,    notes: 'Default running text — tracked' }
    body-sm:         { size: 12, weight: 400, lineHeight: 1.55, tracking: '0.6px', family: body,    notes: 'Footer body, fine print' }
    caption:         { size: 11, weight: 400, lineHeight: 1.50, tracking: '0.4px', family: body,    notes: 'Photo captions' }
    eyebrow:         { size: 11, weight: 500, lineHeight: 1.40, tracking: '1.5px', family: body,    notes: 'Section eyebrows — uppercase' }
    button:          { size: 14, weight: 500, lineHeight: 1.00, tracking: '1.0px', family: body,    notes: 'CTA labels — uppercase, tracked' }
    nav-link:        { size: 13, weight: 500, lineHeight: 1.40, tracking: '0.8px', family: body,    notes: 'Top-nav menu items' }
    spec-value:      { size: 48, weight: 500, lineHeight: 1.10, tracking: '0',     family: display, notes: 'Engine spec values' }
    spec-label:      { size: 11, weight: 500, lineHeight: 1.40, tracking: '1.5px', family: body,    notes: 'Spec metric labels — uppercase' }
    code:            { size: 13, weight: 400, lineHeight: 1.50, tracking: '0',     family: mono }

radius:
  none: 0           # spec tables, photo containers (rare)
  xs: 2             # tight badges
  sm: 4             # text inputs, small badges
  md: 6             # secondary cards, compact UI
  lg: 8             # default CTA radius
  xl: 12            # primary feature cards
  xxl: 16           # photo cards
  pill: 9999        # avatar plates, navigation pill highlights

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72
  hero-height: '720px on desktop; 480px on mobile'
  section-padding: 80
  card-grid-gutter: 24

components:
  top-nav:
    bg: '#ffffff'
    text: '#35363b'
    typography: 'HondaGlobalFontEN 13/500 0.8px'
    height: 72
    layout: 'Honda H wordmark left, horizontal menu (Cars / Motorcycles / Power Equipment / Marine / Aviation) center, utilities right'
    border-bottom: '1px solid #d8d8d8'
    sticky: true
  honda-wordmark:
    height: 24
    placement: 'top-left of nav, in Honda Red #cc0000'
    notes: 'The italicized "HONDA" wordmark with the H insignia — non-negotiable nav element'
  button-primary:
    bg: '#cc0000'
    text: '#ffffff'
    padding: '14px 32px'
    height: 48
    radius: 8
    border: 'none'
    font: 'HondaGlobalFontEN 14/500 1.0px uppercase'
    transition: 'background-color 200ms ease'
    use: 'Build & Price, Find a Dealer, Schedule Service'
  button-primary-hover:
    bg: '#b30000'
    notes: 'Color-only hover'
  button-secondary:
    bg: 'transparent'
    text: '#cc0000'
    border: '1px solid #cc0000'
    padding: '13px 31px'
    height: 48
    radius: 8
    font: 'HondaGlobalFontEN 14/500 1.0px uppercase'
    use: 'Secondary action paired with primary'
  button-outline-dark:
    bg: 'transparent'
    text: '#35363b'
    border: '1px solid #35363b'
    padding: '13px 31px'
    height: 48
    radius: 8
    use: 'Tertiary action on light bands'
  button-outline-on-dark:
    bg: 'transparent'
    text: '#ffffff'
    border: '1px solid #ffffff'
    use: 'Outline on dark hero band (Civic Type R, motorsport)'
  button-text:
    bg: 'transparent'
    text: '#cc0000'
    font: 'HondaGlobalFontEN 14/500 1.0px uppercase'
    decoration: 'arrow indicator (→) appears next to label'
    use: 'Inline editorial actions'
  hero-band-cinema:
    bg: '#ffffff'
    text: '#35363b'
    photo: 'full-bleed cinematic, 720px tall on desktop'
    headline: 'HondaGlobalFontEN 64/400 0'
    cta-arrangement: 'one Honda Red primary + one secondary outline'
    padding: '80px 48px'
  hero-band-dark:
    bg: '#000000'
    text: '#ffffff'
    notes: 'Used for Civic Type R, motorsport, Aviation hero bands'
    headline: 'HondaGlobalFontEN 64/400 0 white'
    padding: '80px 48px'
  feature-card:
    bg: '#ffffff'
    text: '#35363b'
    radius: 12
    border: '1px solid #d8d8d8'
    padding: 32
    notes: 'Title display-md + body + button-text; image fills top edge-to-edge'
  feature-card-photo:
    bg: '#f7f7f7'
    text: '#35363b'
    radius: 12
    overflow: hidden
    notes: 'Photo-led card; image fills top'
  spec-cell:
    bg: 'transparent'
    text: '#35363b'
    typography: 'HondaGlobalFontEN 48/500 0'
    label: 'spec-label 11/500 1.5px uppercase'
    padding: '24px 0'
  spec-table-row:
    bg: 'transparent'
    text: '#35363b'
    border-bottom: '1px solid #ebebeb'
    padding: '16px 0'
    layout: 'label left, value right'
  text-input:
    bg: '#ffffff'
    text: '#35363b'
    border: '1px solid #999999'
    radius: 4
    padding: '12px 16px'
    height: 48
    font: 'HondaGlobalFontEN 14/400 0.8px'
    focus: 'border-color shifts to #cc0000; ring 2px solid #cc0000 at 2px offset'
  badge-pill:
    bg: '#fceaea'
    text: '#cc0000'
    radius: 9999
    padding: '4px 12px'
    font: 'eyebrow 11/500 1.5px uppercase'
  cta-band:
    bg: '#f7f7f7'
    text: '#35363b'
    typography: 'HondaGlobalFontEN 36/400 0'
    padding: 80
    cta: 'single Honda Red primary, centered'
  footer-light:
    bg: '#ffffff'
    text: '#35363b'
    columns: 5
    padding: '64px 48px'
    border-top: '1px solid #d8d8d8'
  footer-dark:
    bg: '#1a1a1a'
    text: '#999999'
    notes: 'Used on motorsport and Aviation pages'
    columns: 5
    padding: '64px 48px'
  footer-link:
    text: '#35363b'
    font: '12/400 0.6px'
    hover: 'text shifts to #cc0000'

lineage:
  summary: 'Honda''s digital surface is the closest a global multi-product brand comes to an engineering reliability catalog. The discipline is Japanese-engineering precision filtered through the Power-of-Dreams optimism: paper-white canvas, single typeface (HondaGlobalFontEN, custom cut), modest sizes, generous editorial pacing, and a single chromatic voltage in Honda Red. The tracked body copy (`0.8px` letter-spacing on 14px body) is the Japanese-engineering tell — it adds a subtle precision that feels intentional rather than default. The 8px CTA corners are disciplined-friendly — neither sharp Italian-Modernist nor pill-soft consumer-tech. What it rejects: ornamental gradients, decorative typography, color-coded section themes, anything that competes with the engineering-reliability brand promise.'
  influences:
    - name: 'Sony / Panasonic engineering catalogs'
      role: 'Japanese-engineering reliability voice, modest typography, generous whitespace'
      url: 'https://www.sony.com'
    - name: 'Toyota Motor Corporation'
      role: 'Direct OEM-engineering parallel — tracked body, single chromatic voltage discipline'
      url: 'https://www.toyota.com'
    - name: 'Apple product pages'
      role: 'Full-viewport cinematic hero photography, light-canvas confidence'
      url: 'https://www.apple.com'
    - name: 'Soichiro Honda design heritage'
      role: 'Power of Dreams tagline, optimistic-engineering brand voice'
      url: 'https://global.honda/en/heritage/'
    - name: 'Massimo Vignelli / Italian Modernism'
      role: 'Restrained chromatic vocabulary, single-accent voltage discipline'
      url: 'https://en.wikipedia.org/wiki/Massimo_Vignelli'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-precision: 'cubic-bezier(0.65, 0, 0.35, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 400
  duration-cinema: 800
  hero-parallax: 'subtle 0.3 scroll-coefficient on cinema hero photograph'
  spec-counter: 'count-up 800ms ease-precision on spec values when scrolled into view'
  card-hover-lift: '4px translateY over 240ms with shadow fade-in'
  reduced-motion: 'respects prefers-reduced-motion: reduce — parallax and count-ups disabled, card-lift becomes opacity-only'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  flat: 'none'
  hover-card: 'rgba(0,0,0,0.08) 0 4px 12px'
  raised-card: 'rgba(0,0,0,0.12) 0 8px 24px'
  modal: 'rgba(0,0,0,0.18) 0 20px 48px -12px'
  ring: '0 0 0 2px #cc0000'
  notes: 'Subtle shadow tiers — Japanese-engineering restraint'

accessibility:
  contrast-text-on-bg: 11.6              # #35363b on #ffffff — AAA at body sizes
  contrast-display-on-bg: 21.0           # #000000 on #ffffff — AAA
  contrast-text-on-brand: 5.9            # #ffffff on #cc0000 — AA Normal, AAA Large
  contrast-link-on-bg: 6.0               # #cc0000 on #ffffff — AA Normal, AAA Large
  focus-ring: '2px solid #cc0000 at 2px offset'
  reduced-motion-honored: true
  touch-target-min: 48                  # CTA height — exceeds WCAG 44

dark-mode: 'no global dark toggle — Honda is light-by-default. Dark sections are scoped contextual surfaces (Civic Type R, motorsport, Aviation hero bands). Token swap is local: bg #ffffff → #000000, text #35363b → #ffffff, border #d8d8d8 → #2a2a2a. brand and on-brand stay unchanged.'
---

## 1. Visual Theme & Atmosphere

Honda's website is what happens when an engineering reliability catalog meets the Power-of-Dreams optimism. The page opens onto a paper-white canvas (`#ffffff` — pure paper, no warmth, no cool tint) with display headlines in soft-charcoal `#35363b` (not pure black; Honda's body color is famously a warm dark grey for paragraph reading comfort). The voice is declarative-engineering, friendly and precise — not flagship-luxury (Mercedes), not Italian-cinema (Ferrari), not consumer-tech (Apple). Honda is the engineer who fixes your car, builds your generator, and makes the world's best-selling motorcycle — all with the same calm confidence.

The chromatic discipline is monk-like. Soft-charcoal for body copy, pure black `#000000` for high-impact display headlines, paper-white canvas, and exactly one chromatic voltage: **Honda Red** `#cc0000` — the iconic logotype red that has identified the brand since the 1949 Dream D-Type. It appears scarcely. The italicized "HONDA" wordmark, primary CTA fills, motorsport callouts, and inline body links. Body text running paragraphs are never red; backgrounds are never red. When Honda Red does appear, it carries the weight of a 70-year reliability record.

Typography runs **HondaGlobalFontEN-Regular** as the single sans family across every text role. Display sizes hold weight 400 — never bold. Body copy at 14px default with **`0.8px` letter-spacing** is the Japanese-engineering tell: tracked body adds a subtle precision that feels intentional rather than default. Headlines use 0 tracking — at 64px display, the geometric construction holds without compression. CTAs render uppercase with `1.0px` tracking — disciplined but not flagship-loud (Mercedes uses `1.4px`).

Section rhythm is generous editorial. Full-bleed product photography (CR-V on autumn forest road, Civic Type R carving Suzuka Curve, jet aircraft in hangar at golden hour, ASIMO mid-stride) alternates with tighter spec bands holding engine data, fuel-economy numbers, and feature comparisons. Dark hero bands appear on Civic Type R, motorsport, and Aviation contexts only — pure black `#000000` with white display copy. The dark is contextual, not a theme.

Honda's product breadth is the visual challenge: cars, motorcycles, power equipment (lawn mowers, generators), marine engines, aviation. The visual system handles this by keeping chrome consistent (white canvas, Honda Red CTAs, charcoal body) while letting product photography carry the visual differentiation. A page about HondaJet uses the same color palette as a page about Civic — only the photograph changes.

**Key Characteristics:**
- Paper-white `#ffffff` canvas — engineering catalog ground
- Soft-charcoal `#35363b` body color — warmer than pure black, paragraph-comfort optimized
- Pure black `#000000` only for high-impact display headlines
- Single chromatic voltage: Honda Red `#cc0000` for wordmark, primary CTAs, motorsport — used scarcely
- Single typeface: HondaGlobalFontEN-Regular across every text role
- Display copy at weight 400 — never bold
- Body copy with `0.8px` letter-spacing — Japanese-engineering precision
- 8px CTA radius — disciplined-friendly
- Honda Red links inline (not blue) — brand-consistent linking
- Italicized "HONDA" wordmark in red — non-negotiable nav chrome
- Power of Dreams tagline at the homepage hero — anchors the optimistic-engineering voice

## 2. Color Palette & Roles

### Primary
- **Paper White** (`#ffffff`): The canvas. Engineering catalog ground.
- **Soft Charcoal** (`#35363b`): Default body text — Honda's signature warm dark grey, not pure black.
- **Honda Red** (`#cc0000`): The single high-voltage chromatic moment. The wordmark, primary CTAs, motorsport callouts, inline body links.

### Brand & Dark
- **Honda Red Hover** (`#b30000`): Press state — slight saturation drop on click.
- **Honda Red Active** (`#990000`): Deep press feedback. Also link-hover color.
- **Honda Red Soft** (`#fceaea`): Selected-tab background, badge tint, very-soft brand surface.
- **Honda Red Deep** (`#7a0000`): Used in promotional gradient bands (`linear-gradient(180deg, #7a0000, #cc0000 64%)`).
- **Cinema Black** (`#000000`): Reserved for Civic Type R, motorsport, and Aviation dark hero bands.
- **Pure Black** (`#000000`): Display headlines on light canvas (high-impact moments only).

### Accent
- **Aviation Blue** (`#0066cc`): Reserved for HondaJet contexts. Functions as a sub-brand accent.
- **Racing Yellow** (`#ffd200`): Reserved for Civic Type R and racing program callouts.
- No additional saturated brand colors. Honda deliberately refuses chromatic variety; sub-program accents are scoped.

### Interactive
- **Link** (`#cc0000`): Inline body links default to Honda Red — Honda is unusual in linking the same color as the brand (most sites use blue).
- **Link Hover** (`#990000`): Darker red on hover.
- **Button Primary** (`#cc0000`): Primary CTA fill.
- **Button Hover** (`#b30000`): Press state.
- **Disabled** (`#999999`): Faint — disabled CTAs and form fields.

### Neutral Scale
- **Display Black** `#000000` — high-impact display headlines on light
- **Strong** `#1a1a1a` — strong-emphasis body copy
- **Body** `#35363b` — default running paragraph text — Honda's signature warm dark grey
- **Muted** `#666666` — captions, photo metadata, secondary list copy
- **Faint** `#999999` — disabled secondary text, footer secondary, form placeholder
- **Border Strong** `#999999` — input border, section divider
- **Border Default** `#d8d8d8` — standard 1px hairline on light surfaces
- **Border Soft** `#ebebeb` — soft divider, table row separator
- **Surface** `#f7f7f7` — neutral grey panel for spec tables and comparison cards
- **Surface Strong** `#e0e0e0` — heavier panel surface
- **Bg Elevated** `#f7f7f7` — same as surface (Honda uses one elevation tier on light)

### Surface & Borders
- **bg** is `#ffffff` paper-white — the canvas.
- **bg-elevated** and **surface** share `#f7f7f7` — Honda uses a single elevation tier on light.
- **bg-dark** `#000000` for scoped Civic Type R, motorsport, Aviation hero bands.
- **border** is `#d8d8d8` 1px hairline default; `#ebebeb` for soft dividers; `#999999` for input borders.
- **border-on-dark** `#2a2a2a` 1px on dark.

### Shadow Colors
Honda uses **subtle shadow tiers** — Japanese-engineering restraint. Shadows are present but never dramatic:
- **Hover Card**: `rgba(0,0,0,0.08) 0 4px 12px` — single soft tier on hovered feature cards.
- **Raised Card**: `rgba(0,0,0,0.12) 0 8px 24px` — for elevated cards (model picker, dealer cards).
- **Modal**: `rgba(0,0,0,0.18) 0 20px 48px -12px` — single deep tier for dialogs.
- **Focus Ring**: `0 0 0 2px #cc0000`.

### Semantic
- **Success** (`#00854a`): Confirmation states.
- **Warning** (`#ff8c00`): Validation warnings.
- **Danger** (`#cc0000`): Form errors — shares brand red. Brand and danger are visually identical; context disambiguates.
- **Info** (`#0066cc`): Info badges — shares Aviation accent blue.

## 3. Typography Rules

### Font Family
- **Primary**: `HondaGlobalFontEN-Regular` — the custom Honda-commissioned global typeface, English variant (`-EN`) used on global.honda. Geometric construction with humanist terminals; engineered for global multi-product applications across cars, motorcycles, power equipment.
- **Fallback chain**: `"HondaGlobalFontEN", "Helvetica Neue", Arial, sans-serif` — Helvetica Neue is the closest-proportioned commercial fallback.
- **Mono companion**: `"SF Mono", Menlo, Consolas` — appears only on developer/spec pages (rare).
- **OpenType features**: Default ligatures only. No tabular figures called out — HondaGlobalFontEN's natural figures align well enough in spec tables.
- **No italics in body** — italics appear only in the "HONDA" wordmark itself.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Mega | HondaGlobalFontEN | 64 | 400 | 1.15 | 0 | — | Homepage hero h1 — "The Power of Dreams" or model name |
| Display XL | HondaGlobalFontEN | 48 | 400 | 1.20 | 0 | — | Subsidiary heroes |
| Display Lg | HondaGlobalFontEN | 36 | 400 | 1.25 | 0 | — | Section heads, feature band headlines |
| Display Md | HondaGlobalFontEN | 28 | 500 | 1.30 | 0 | — | Sub-section heads, card titles |
| Display Sm | HondaGlobalFontEN | 22 | 500 | 1.35 | 0.4px | — | Component titles |
| Title Md | HondaGlobalFontEN | 18 | 500 | 1.40 | 0.4px | — | Card titles, list section labels |
| Title Sm | HondaGlobalFontEN | 16 | 500 | 1.45 | 0.4px | — | Small section titles |
| Body Lg | HondaGlobalFontEN | 16 | 400 | 1.65 | 0.8px | — | Editorial body, intro paragraphs |
| Body | HondaGlobalFontEN | 14 | 400 | 1.65 | 0.8px | — | Default running text — tracked precision |
| Body Sm | HondaGlobalFontEN | 12 | 400 | 1.55 | 0.6px | — | Footer body, fine print |
| Caption | HondaGlobalFontEN | 11 | 400 | 1.50 | 0.4px | — | Photo captions |
| Eyebrow | HondaGlobalFontEN | 11 | 500 | 1.40 | 1.5px | — | Section eyebrows — uppercase |
| Button | HondaGlobalFontEN | 14 | 500 | 1.00 | 1.0px | — | CTA labels — uppercase, tracked |
| Nav Link | HondaGlobalFontEN | 13 | 500 | 1.40 | 0.8px | — | Top-nav menu items |
| Spec Value | HondaGlobalFontEN | 48 | 500 | 1.10 | 0 | — | Engine spec values |
| Spec Label | HondaGlobalFontEN | 11 | 500 | 1.40 | 1.5px | — | Spec metric labels — uppercase |
| Code | SF Mono | 13 | 400 | 1.50 | 0 | — | Rare — developer surfaces |

### Principles
- **Display weight stays at 400.** HondaGlobalFontEN at regular weight has enough geometric presence at 64px; bolding it would feel shouted. Honda is reliability-confident, not announce-y.
- **Body copy tracked at `0.8px`.** This is the brand's typographic signature — the tracked body adds Japanese-engineering precision. Without it, Honda's body would read as default Helvetica; with it, the type feels intentional.
- **No tracking on display sizes.** At 36px+ display sizes, HondaGlobalFontEN holds without compression — no negative letter-spacing.
- **Title sizes (16-22px) get `0.4px` tracking.** A subtle continuation of the body-tracked discipline at intermediate sizes.
- **CTAs at `1.0px` uppercase tracking.** Disciplined but not flagship-loud — Honda is friendly-engineering, not luxury.
- **Body color is `#35363b` soft-charcoal, not pure black.** Pure black is reserved for high-impact display headlines.
- **Honda Red `#cc0000` is the link color, not blue.** Brand-consistent linking is unusual and distinctive.
- **HondaGlobalFontEN is licensed.** Open-source substitute: **Inter** at weight 400 with `+0.05em` letter-spacing for body, `0` letter-spacing for display.

## 4. Component Stylings

### Buttons

All buttons use **8px border-radius** — disciplined-friendly, neither sharp nor pill.

**Primary (Honda Red)** — the singular high-voltage action:
- Background `#cc0000`, text `#ffffff`, font `HondaGlobalFontEN 14/500 1.0px uppercase`
- Padding `14px 32px`, height `48px`, border-radius `8px`, no border
- Transition `background-color 200ms ease`
- Hover: background `#b30000` (color-only, no transform)
- Active: background `#990000`
- Use case: Build & Price, Find a Dealer, Schedule Service

**Secondary (Outline Red)** — alternative action paired with primary:
- Background transparent, text `#cc0000`, border `1px solid #cc0000`
- Padding `13px 31px` (1px less for border), height `48px`, radius `8px`
- Same `HondaGlobalFontEN 14/500 1.0px uppercase` typography
- Hover: background `#fceaea` (brand-soft fill)
- Use case: secondary CTA paired with primary

**Outline (Charcoal)** — tertiary action on light bands:
- Background transparent, text `#35363b`, border `1px solid #35363b`
- Same dimensions and typography
- Use case: tertiary action; alternative on configurator pages

**Outline (On Dark)** — alternative on dark hero bands:
- Background transparent, text `#ffffff`, border `1px solid #ffffff`
- Same dimensions
- Use case: secondary CTA on Civic Type R / motorsport / Aviation hero band

**Text** — inline editorial actions:
- Background transparent, text `#cc0000`, no border
- Same `HondaGlobalFontEN 14/500 1.0px uppercase`
- Decoration: arrow indicator (→) appears next to label
- Use case: "View Details", "Read More" inside body copy

### Hero Bands

**Cinema (default hero)** — light-canvas cinematic photograph:
- Background `#ffffff`, text `#35363b`
- Full-bleed photograph at 720px on desktop, 480px on mobile
- Display headline in `HondaGlobalFontEN 64/400 0` soft-charcoal (or pure black for high-impact)
- One Honda Red primary + one secondary outline-red, side-by-side
- Padding `80px 48px`

**Cinema Dark** — dark variant for Civic Type R / motorsport / Aviation:
- Background `#000000`, text `#ffffff`
- Same headline geometry in pure white
- One Honda Red primary + one outline-on-dark secondary

### Cards

**Feature Card** — light surface card:
- Background `#ffffff`, text `#35363b`, border `1px solid #d8d8d8`, radius `12px`, padding `32px`
- Image fills top edge-to-edge with rounded top corners
- Title in `display-md 28/500`, body in `body 14/400 0.8px tracked`, button-text below
- Hover: border shifts to `#999999`, shadow `rgba(0,0,0,0.08) 0 4px 12px` fades in, lift 4px translateY over 240ms
- Use case: model line grid, feature highlights

**Photo-Led Card** — image-dominant card:
- Background `#f7f7f7`, text `#35363b`, radius `12px`, overflow hidden
- Photograph fills the entire top half; title overlay or below
- Use case: Models grid on homepage, motorcycle line grid

### Spec Surfaces

**Spec Cell** — engineering-spec callout:
- Transparent background
- Value in `HondaGlobalFontEN 48/500 0` soft-charcoal (or white on dark)
- Label below in `spec-label 11/500 1.5px uppercase`
- Padding `24px 0`
- Use: hp, torque, fuel economy, towing capacity, range

**Spec Table Row** — hairline-divided spec row:
- Transparent background, `1px solid #ebebeb` divider
- Layout: spec label left (`HondaGlobalFontEN 14/400 0.8px #666666`), value right (`HondaGlobalFontEN 14/500 0.4px #35363b`)
- Padding `16px 0`
- Use: detailed spec sheets, comparison tables

### Forms & Inputs

**Text Input**:
- Background `#ffffff`, text `#35363b`, border `1px solid #999999`, radius `4px`
- Padding `12px 16px`, height `48px`
- Font `HondaGlobalFontEN 14/400 0.8px`
- Focus: border-color shifts to `#cc0000`; ring `2px solid #cc0000` at 2px offset

### Tags & Badges

**Badge Pill** — small uppercase pill:
- Background `#fceaea` (brand-soft), text `#cc0000`, radius `9999px`
- Padding `4px 12px`, font `eyebrow 11/500 1.5px uppercase`
- Use: "New", "Hybrid", "Type R" callouts

### Navigation

**Top Nav (Light)** — default nav on every page:
- Background `#ffffff`, text `#35363b`, height `72px`, border-bottom `1px solid #d8d8d8`
- Layout: italicized Honda wordmark left in `#cc0000`, horizontal menu (Cars / Motorcycles / Power Equipment / Marine / Aviation) center, utility icons right
- Menu items in `HondaGlobalFontEN 13/500 0.8px`
- Hover: subtle Honda Red 1px underline grows beneath active item over 150ms

### Footer

**Footer Light** — closing footer on most pages:
- Background `#ffffff`, text `#35363b`, border-top `1px solid #d8d8d8`
- 5-column link list at desktop covering Cars / Motorcycles / Power Equipment / Marine / Aviation
- Padding `64px 48px`
- Honda wordmark in red at the bottom-left below link columns
- Footer links hover to `#cc0000`

**Footer Dark** — alternative on motorsport and Aviation:
- Background `#1a1a1a`, text `#999999`
- Same column layout

## 5. Layout Principles

### Spacing System
- **Base unit:** 4px.
- **Scale:** `4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128`.
- **Section padding:** 80px for major bands (lighter than Mercedes/Porsche's 96px — Honda's voice is more efficient).
- **Card internal padding:** 32px for feature cards.
- **Gutters:** 24px between cards in 3-up grids; 32px in 2-up hero splits.

### Grid & Container
- Max content width: **1280px** on editorial bands. Hero photography goes full-bleed.
- Editorial body: 12-column grid.
- Feature card grids: 2-up at desktop for hero splits, 3-up for benefit grids, 4-up for product line tiles.
- Footer: 5-column at desktop (one per product category).

### Whitespace Philosophy
Generous engineering-catalog pacing, slightly more efficient than luxury automotive. Cinematic hero photography occupies 720px (not full-viewport — Honda is reliability-friendly, not flagship-cinematic). Body sections sit in tighter editorial layouts on white with disciplined density. The product breadth (cars, motorcycles, power equipment, marine, aviation) requires layouts that scale across category — the visual system prioritizes consistency over per-category atmospheric differentiation.

### Section Cadence
The homepage rhythm: cinema-band → editorial-band → product-grid (5-up: cars / motorcycles / power equipment / marine / aviation) → spec/feature-band → CTA-band → footer-light. Each section's role is signalled by its background color before content renders. Dark hero bands appear only on Civic Type R, motorsport, and Aviation contexts.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|------|-------|-------|-----|
| None | `none` | 0 | Spec table cells, hero photo containers (rare) |
| Tight | `xs` | 2 | Tight badges (rare) |
| Standard | `sm` | 4 | Text inputs, small badges |
| Comfortable | `md` | 6 | Secondary cards, compact UI |
| Default CTA | `lg` | 8 | All primary/secondary/outline buttons |
| Card | `xl` | 12 | Primary feature cards |
| Photo Card | `xxl` | 16 | Photo-led product cards |
| Pill | `pill` | 9999 | Avatar plates, badge pills, navigation pill highlights |

The **8px CTA radius** is disciplined-friendly. There is no compound-radius geometry on the site.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (Flat) | `#ffffff` canvas, no shadow | Body bands, footer link rows |
| 1 (Card) | `#ffffff` background, `1px solid #d8d8d8` border, no shadow | Feature cards |
| 2 (Hover Card) | Border shifts to `#999999`, `rgba(0,0,0,0.08) 0 4px 12px` shadow + 4px translateY | Hovered feature cards |
| 3 (Raised Card) | `rgba(0,0,0,0.12) 0 8px 24px` shadow | Elevated cards (model picker, dealer cards) |
| 4 (Modal) | `rgba(0,0,0,0.18) 0 20px 48px -12px` | Dialogs |
| 5 (Photographic) | Full-bleed cinema imagery | Hero band — depth via lens |

### Shadow Philosophy
Subtle Japanese-engineering restraint. Drop shadows present but never dramatic. The `0.08` alpha on hover shadows is gentler than competitors (Mercedes uses `0.3` on dark canvas), reflecting Honda's friendly-engineering voice rather than flagship gravity. Surface brightness steps (`#ffffff` → `#f7f7f7` → `#e0e0e0`) carry most structural elevation; shadows reinforce hover and modal moments only.

### Decorative Depth
- **Full-bleed cinematic photography** is the brand's primary depth treatment.
- **Honda Red gradient** `linear-gradient(180deg, #7a0000, #cc0000 64%)` used in promotional accent bands (rare).
- **Surface brightness steps** carry most structural elevation.

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — material-style ease for most micro-interactions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — stronger entrance for cinema bands
- **Precision**: `cubic-bezier(0.65, 0, 0.35, 1)` — engineering-precision ease for spec count-ups

### Duration Buckets
- **Fast** (150ms): button background-color transitions, link underline-grow
- **Standard** (240ms): card hover-lift, shadow fade-in
- **Slow** (400ms): section entrance fades, hero band reveals
- **Cinema** (800ms): spec value count-ups, hero parallax

### Per-Component Micro-States
- **Button Primary (Honda Red)** — hover: background-color transitions to `#b30000` over 150ms. No transform. Active: background drops to `#990000`.
- **Button Outline Red** — hover: background fills to `#fceaea` (brand-soft) over 150ms.
- **Feature Card** — hover: border-color shifts to `#999999`, shadow fades in, card lifts 4px translateY over 240ms.
- **Link** — hover: color shifts from `#cc0000` to `#990000` over 150ms.
- **Nav Item** — hover: 1px Honda Red underline grows beneath active item over 150ms.
- **Spec Counter** — first-paint into-view: count-up animation from 0 to final value over 800ms ease-precision.

### Page Transitions
Page-to-page transitions: 240ms cross-fade between hero photographs. Internal scroll-into-view triggers fade-up entrances on cinema bands (400ms emphasized). Hero photograph holds a `0.3` parallax coefficient on scroll.

### Reduced Motion Strategy
Respects `prefers-reduced-motion: reduce`. Under reduced motion: parallax disabled, count-ups static, card hover-lift becomes shadow-only fade, all scroll-triggered animations collapse to opacity transitions over 200ms.

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)
- **Body on Canvas**: `#35363b` on `#ffffff` = 11.6:1 — AAA at body sizes
- **Display on Canvas**: `#000000` on `#ffffff` = 21.0:1 — AAA
- **Text on Brand**: `#ffffff` on `#cc0000` = 5.9:1 — AA Normal, AAA Large
- **Link on Canvas**: `#cc0000` on `#ffffff` = 6.0:1 — AA Normal, AAA Large
- **Muted on Canvas**: `#666666` on `#ffffff` = 5.7:1 — AA Normal
- **Faint on Canvas**: `#999999` on `#ffffff` = 2.8:1 — fails AA at body sizes; reserved for caption-uppercase 11px+ where AA Large applies, or non-essential metadata

### Focus Indicators
- **Ring color**: `#cc0000` (Honda Red)
- **Ring style**: `2px solid` at `2px` offset from element's outer edge
- **Focus-visible only**: ring appears only on keyboard focus, not mouse-click focus

### ARIA Patterns
- **Combobox** (model search, dealer locator): `role="combobox"` with `aria-expanded`, `aria-controls`, `aria-activedescendant`. Listbox uses `role="listbox"`.
- **Dialog** (Schedule Service, dealer contact): `role="dialog"` with `aria-modal="true"`, `aria-labelledby`, focus trap.
- **Tabs** (model trim selector, product category navigation): `role="tablist"` with `aria-selected`. Arrow-key navigation.
- **Carousel** (homepage hero, motorsport gallery): `role="region"` with `aria-roledescription="carousel"`. Each slide is `role="group"`.

### Keyboard Nav Order
Tab order: skip-to-content link → Honda wordmark (home link) → primary nav (Cars, Motorcycles, Power Equipment, Marine, Aviation) → utilities (search, language, account) → hero CTAs → editorial body content top-to-bottom → footer columns → cookie banner.

### Screen Reader Hints
- Honda wordmark carries `aria-label="Honda home"` rather than alt-text.
- Spec values carry `aria-label="158 horsepower"` for full unit context.
- Photo captions wrapped in `<figcaption>` inside `<figure>`.
- Decorative cinema photography uses `aria-hidden="true"`.

### Reduced Motion Handling
`@media (prefers-reduced-motion: reduce)` overrides scroll-triggered transforms, parallax, and count-ups. Documented in §8.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | < 640px | Hero h1 64→32px; cinema photograph crops vertically; feature card grid 1-up; nav collapses to hamburger; spec cells 1-up |
| Tablet | 640–1024px | Hero h1 48px; feature card grid 2-up; nav still hamburger; spec cells 2-up |
| Desktop | 1024–1280px | Hero h1 64px; feature card grid 3-up; horizontal nav appears; spec cells 4-up |
| Wide | > 1280px | Editorial body content caps at 1280px; hero photography continues full-bleed |

### Touch Targets
- Primary CTA at 48px height — exceeds WCAG AAA (44 × 44).
- Nav items render with 24px vertical padding for an effective 56px tap area on mobile hamburger.

### Collapsing Strategy
- **Top nav** switches to hamburger below 1024px.
- **Hero photograph** reframes per breakpoint via art direction.
- **Feature card grid**: 4-up → 3-up → 2-up → 1-up.
- **Spec cells**: 4-up at desktop, 2-up at tablet, 1-up at mobile.
- **Footer**: 5-column at desktop, accordion-collapsed at mobile.

### Image Behavior
- Hero photography uses `<picture>` with mobile-cropped + desktop-wide art direction.
- AVIF with WebP fallback and JPEG floor.
- All photography uses `loading="lazy"` except homepage hero (eager).

### Container Queries
Used selectively on configurator and dealer-locator pages.

## 11. Content & Voice

### Tone
**Engineering-friendly, declarative, optimistic.** The voice reads like a Honda engineer who genuinely loves their work — calm, confident, friendly. Sentences are short and concrete. The Power-of-Dreams tagline is the brand voice anchor: optimistic-engineering, world-betterment-through-mobility. There is no marketing-jargon, no "innovative" or "revolutionary" — those words are beneath the brand. Honda earns reliability; it doesn't claim it.

### Microcopy Patterns
- **Buttons**: action-verb + noun, uppercase. "BUILD & PRICE", "FIND A DEALER", "SCHEDULE SERVICE", "VIEW DETAILS". Never "Click here", never "Learn more about our..."
- **Eyebrows**: uppercase context cue above display heads. "ALL-NEW CR-V", "CIVIC TYPE R", "HONDAJET ELITE II".
- **Error message recipe**: `[What went wrong]. [What to do.]` — e.g. "We couldn't reach our servers. Please try again in a moment."
- **Success confirmations**: terse and friendly. "Your service appointment is confirmed." "Your build is saved." No exclamation marks.
- **Form labels**: capitalized noun phrases. "Email Address", "Phone Number", "Preferred Dealer".

### Empty States
- **No results**: "No models match your filters. Try widening your search or browse the full lineup."
- **Saved build empty**: "Your saved configurations will appear here. Begin a new configuration to save it."
- **Dealer locator no results**: "No dealers within 50 miles. Try a wider radius or browse our authorized service network."

### CTA Verb Conventions
- **BUILD & PRICE** — primary verb on every model page (not "Customize")
- **FIND A DEALER** — for dealer locator (not "Locate")
- **SCHEDULE SERVICE** — for service appointment (not "Book")
- **VIEW DETAILS** — for editorial articles (not "Read More" — Honda uses "View Details" because they're spec-forward)
- **SIGN IN** — for owner/account pages (never "Login")

## 12. Dark Mode & Theming

Honda has **no global user-facing dark/light toggle**. The site is light-by-default. Dark sections are scoped contextual surfaces — Civic Type R, motorsport, Aviation hero bands, and certain promotional contexts. The token swap is local:

- `bg`: `#ffffff` → `#000000`
- `text`: `#35363b` → `#ffffff`
- `text-body`: `#35363b` → `#a8a8a8`
- `border`: `#d8d8d8` → `#2a2a2a`
- `surface`: `#f7f7f7` → `#1a1a1a`
- `brand` and `on-brand` stay unchanged: Honda Red CTAs render identically on both grounds.

When dark sections appear, they're sandwiched between light editorial bands or used as the closing footer on motorsport pages. The site never inverts globally.

## 13. Lineage & Influences

Honda's digital surface is the closest a global multi-product brand comes to an engineering reliability catalog. The discipline is Japanese-engineering precision filtered through the Power-of-Dreams optimism: paper-white canvas, single typeface, modest sizes, generous editorial pacing, and a single chromatic voltage in Honda Red. The tracked body copy (`0.8px` letter-spacing on 14px body) is the Japanese-engineering tell — it adds a subtle precision that feels intentional.

Influences run from the Sony/Panasonic engineering-catalog tradition to Toyota's same-OEM parallel. The full-bleed cinematic photographic-hero pattern is borrowed from Apple-era product launches. The single-accent restraint borrows from Italian Modernism (Vignelli) but the friendly-engineering voice pulls it back from pure-luxury territory. The Power-of-Dreams tagline is from Soichiro Honda's design heritage — optimistic-engineering, world-betterment-through-mobility.

What it rejects: ornamental gradients, decorative typography, color-coded section themes, anything that competes with the engineering-reliability brand promise.

**Named influences:**
- Sony / Panasonic engineering catalogs — Japanese-engineering reliability voice (https://www.sony.com)
- Toyota Motor Corporation — direct OEM-engineering parallel (https://www.toyota.com)
- Apple product pages — full-viewport cinematic hero photography (https://www.apple.com)
- Soichiro Honda design heritage — Power of Dreams tagline, optimistic-engineering voice
- Massimo Vignelli / Italian Modernism — restrained chromatic vocabulary

## 14. Do's and Don'ts

### Do
- Reserve Honda Red `#cc0000` for the wordmark, primary CTAs, motorsport callouts, and inline body links — used scarcely.
- Use soft-charcoal `#35363b` for body running text — Honda's signature warm dark grey.
- Use pure black `#000000` for high-impact display headlines only.
- Track body copy with `0.8px` letter-spacing — the Japanese-engineering signature.
- Render CTA labels in uppercase HondaGlobalFontEN 14/500 with `1.0px` tracking.
- Use HondaGlobalFontEN at weight 400 for display sizes — never bold.
- Pair every cinema hero with a full-bleed photograph at 720px desktop.
- Use 8px CTA corners — disciplined-friendly.
- Render the italicized "HONDA" wordmark in red top-left of every nav.
- Hover states change color only on CTAs — feature cards may lift 4px with shadow.

### Don't
- Don't introduce a saturated brand color other than Honda Red, Aviation Blue (scoped), and Racing Yellow (scoped).
- Don't use pure black for body running text. Body is `#35363b` soft-charcoal.
- Don't bold display copy. HondaGlobalFontEN at 400 carries enough presence at 64px.
- Don't use `0` letter-spacing on body. The tracked body is the brand signature.
- Don't link with blue. Honda is one of the few brands that links with brand red.
- Don't use 0px sharp corners on CTAs. Honda is 8px disciplined-friendly.
- Don't translate "BUILD & PRICE" to "CUSTOMIZE" or "DESIGN YOURS" — the brand verb is "BUILD & PRICE".
- Don't compress the 80px section rhythm.
- Don't use Aviation Blue or Racing Yellow outside scoped sub-program contexts.
- Don't add italic display copy. Italics appear only in the "HONDA" wordmark.
- Don't add ornamental gradient backgrounds. The site is paper white + photograph + Honda Red.

## 15. Agent Prompt Guide

### Quick Color Reference
- Primary CTA / Wordmark / Links: `#cc0000` (Honda Red)
- Background: `#ffffff` (Paper White)
- Body text: `#35363b` (Soft Charcoal — signature)
- Display text: `#000000` (Pure Black, high-impact only)
- Surface: `#f7f7f7` (Neutral Grey Panel)
- Border: `#d8d8d8` (Hairline)
- CTA hover: `#b30000`
- Brand soft (badges): `#fceaea`
- Focus ring: `#cc0000` 2px
- Success: `#00854a`

### Example Component Prompts
- "Create a Honda hero band with full-bleed cinematic photography of a 2026 CR-V on an autumn forest road, 720px tall on desktop. Above the headline, an uppercase Honda Red eyebrow 'ALL-NEW CR-V HYBRID' in HondaGlobalFontEN 11/500 with 1.5px tracking. The headline 'The Power of Dreams.' floats over the lower-third in HondaGlobalFontEN 64px weight 400, no letter-spacing, in pure black `#000000`. Below it, two side-by-side CTAs: a Honda Red `#cc0000` 'BUILD & PRICE' button (HondaGlobalFontEN 14/500 1.0px uppercase, 14×32 padding, 48px tall, 8px corners) and an outline-red 'FIND A DEALER' button (1px solid `#cc0000` border, transparent fill)."
- "Design a Honda feature card on `#ffffff` canvas: 12px radius, 1px solid `#d8d8d8` border, 32px padding. 16:9 photograph at top with rounded top corners, then a title in HondaGlobalFontEN 28/500 soft-charcoal `#35363b`, 16px gap, body copy in HondaGlobalFontEN 14/400 with `0.8px` letter-spacing soft-charcoal, 24px gap, and a 'VIEW DETAILS →' text button in 14/500 1.0px uppercase Honda Red. Hover: border shifts to `#999999`, shadow `rgba(0,0,0,0.08) 0 4px 12px` fades in, card lifts 4px translateY over 240ms."
- "Build a Honda spec cell: transparent background, 24px vertical padding, value in HondaGlobalFontEN 48px weight 500 soft-charcoal `#35363b` ('158'), label below in HondaGlobalFontEN 11/500 with 1.5px uppercase tracking ('HORSEPOWER'). Group four spec cells in a 4-up row at desktop on a `#f7f7f7` neutral panel."
- "Create a Honda product-line grid with 5 photo-led cards in a 5-up row at desktop: Cars, Motorcycles, Power Equipment, Marine, Aviation. Each card on `#f7f7f7` background, 12px radius, photo filling the top half, category title in HondaGlobalFontEN 22/500 with 0.4px tracking soft-charcoal centered below. Hover: card lifts 4px with subtle shadow."
- "Build a Honda top nav: 72px tall on `#ffffff`, italicized 'HONDA' wordmark left in `#cc0000` Honda Red at 24px height. Horizontal menu (CARS / MOTORCYCLES / POWER EQUIPMENT / MARINE / AVIATION) center in HondaGlobalFontEN 13/500 with 0.8px tracking soft-charcoal. Utility icons (search, language, account) far right. 1px solid `#d8d8d8` border-bottom. On hover over a nav item, a Honda Red 1px underline grows from invisible to full width over 150ms."
- "Design a Honda outline button: transparent background, 1px solid `#cc0000` Honda Red border, Honda Red text in HondaGlobalFontEN 14/500 with 1.0px uppercase tracking ('FIND A DEALER'), 13×31 padding (compensating for the 1px border), 48px tall, 8px corners. Hover: background fills to `#fceaea` brand-soft over 150ms; no transform."

### Iteration Guide
1. Focus on ONE component at a time. Reference its YAML key (`button-primary`, `hero-band-cinema`).
2. Variants live as separate entries inside `components:`.
3. CTAs default to 8px corners — disciplined-friendly. Never 0px sharp, never pill (except badges).
4. Use color tokens (`brand`, `text`, `surface`) — never inline hex on multiple components.
5. HondaGlobalFontEN at weight 400 for display, 500 for CTAs/titles. Body copy ALWAYS gets `0.8px` letter-spacing — this is the brand signature.
6. Honda Red stays scarce — wordmark, primary CTAs, motorsport, inline body links only.
7. Body color is `#35363b` soft-charcoal, NOT pure black. Pure black reserved for high-impact display headlines.
8. Use the explicit spacing ladder (4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128). Section padding 80px.
9. Honda links inline with brand red — unusual and distinctive. Don't override to blue.
