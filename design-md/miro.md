---
name: Miro
tagline: Canary-yellow #ffd02f wordmark over white canvas with sticky-note pastels and Roobert PRO carrying a playful AI-powered visual workspace.
author: webdesignhot
source_url: https://miro.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [saas, dev-tools]
tags: [light, playful, sans, warm, sticky-notes, collaboration]
preview_swatch: ['#ffffff', '#ffd02f', '#1c1c1e']
related: [figma, notion, excalidraw]
description: 'Miro presents itself as the AI-powered visual workspace through a confident, almost playful brand voice — anchored by its signature canary yellow (#ffd02f) wordmark over white canvas, broken open by colorful pastel feature tints (rose, teal, coral, orange, mint) that echo the actual sticky-note color palette used on the live whiteboard. Black-pill primary buttons dominate marketing, real Miro-board mockups serve as feature illustrations, and a 4-tier pricing grid leads into a dense comparison table. Roobert PRO carries display headlines at weight 500 with negative tracking; the system supports homepage, pricing, AI Workflows product page, agile vertical, and customer stories surfaces.'

colors:
  bg: '#ffffff'                    # canvas — white page floor
  bg-surface: '#f7f8fa'            # surface — subtle gray-white tint
  bg-soft: '#fafbfc'               # surface-soft — even subtler tint for nested cards
  bg-yellow: '#fff8e0'             # surface-yellow — soft yellow callout band
  bg-pricing-featured: '#f5f3ff'   # featured pricing tier soft lavender wash
  surface: '#f7f8fa'               # alias of bg-surface
  text: '#1c1c1e'                  # ink — display + body emphasis + pill button bg
  text-deep: '#050038'             # ink-deep — rare emphasis, used inside dark deep-navy
  text-charcoal: '#2c2c34'         # charcoal — nav links, labels
  text-slate: '#555a6a'            # slate — sub-titles
  text-steel: '#6b6f7e'            # steel — body
  text-stone: '#8e91a0'            # stone — captions, breadcrumbs
  text-muted: '#a5a8b5'            # muted — disabled, placeholder
  brand: '#1c1c1e'                 # primary CTA — black pill
  brand-pressed: '#2c2c34'         # primary pressed
  on-brand: '#ffffff'
  on-dark: '#ffffff'
  on-dark-muted: '#a5a8b5'
  brand-yellow: '#ffd02f'          # signature canary yellow — wordmark, secondary CTA
  brand-yellow-deep: '#fcb900'     # deeper yellow on hover, focus
  yellow-light: '#fff4c4'          # light yellow surface
  yellow-dark: '#746019'           # legible dark text on yellow
  brand-blue: '#4262ff'            # link blue, secondary CTA on certain surfaces
  blue-450: '#5b76fe'              # hover variant
  blue-pressed: '#2a41b6'          # pressed
  brand-coral: '#ff9999'           # sticky-note coral
  coral-light: '#ffc6c6'           # softer coral
  coral-dark: '#600000'            # legible text on coral
  brand-rose: '#ffd8f4'            # sticky-note rose
  brand-pink: '#fde0f0'            # sticky-note pink
  rose-light: '#fde0f0'            # alias
  brand-teal: '#0fbcb0'            # signature teal accent
  teal-light: '#c3faf5'            # soft teal surface
  moss-dark: '#187574'             # dark teal text
  brand-orange-light: '#ffe6cd'    # sticky-note orange (peach)
  brand-red: '#fbd4d4'             # sticky-note red (very soft)
  success-accent: '#00b473'        # success green accent
  border: '#e0e2e8'                # hairline default
  border-soft: '#eef0f3'           # softer hairline
  border-strong: '#c7cad5'         # stronger outline
  footer-bg: '#1c1c1e'             # dark footer ground
  link: '#4262ff'                  # inline link blue
  link-hover: '#2a41b6'
  semantic-success: '#00b473'
  semantic-warning: '#fcb900'
  semantic-error: '#c41c1c'
  semantic-info: '#4262ff'

typography:
  display:
    family: '"Roobert PRO", "Roobert", "Inter Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weights: [400, 500, 600]
  body:
    family: '"Roobert PRO", "Roobert", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "Fira Code", ui-monospace, SF Mono, Menlo, monospace'
    weights: [400]
  scale:
    hero-display:        { size: 80, weight: 500, lineHeight: 1.05, tracking: '-2px',    family: display, notes: 'homepage hero h1' }
    display-lg:          { size: 60, weight: 500, lineHeight: 1.10, tracking: '-1.5px',  family: display, notes: 'product page heroes' }
    heading-1:           { size: 48, weight: 500, lineHeight: 1.15, tracking: '-1px',    family: display }
    heading-2:           { size: 36, weight: 500, lineHeight: 1.20, tracking: '-0.5px',  family: display }
    heading-3:           { size: 28, weight: 500, lineHeight: 1.25, tracking: 0,         family: display }
    heading-4:           { size: 22, weight: 500, lineHeight: 1.30, tracking: 0,         family: display }
    heading-5:           { size: 18, weight: 500, lineHeight: 1.40, tracking: 0,         family: display }
    subtitle:            { size: 18, weight: 400, lineHeight: 1.50, tracking: 0,         family: body }
    body-md:             { size: 16, weight: 400, lineHeight: 1.50, tracking: 0,         family: body }
    body-md-medium:      { size: 16, weight: 500, lineHeight: 1.50, tracking: 0,         family: body }
    body-sm:             { size: 14, weight: 400, lineHeight: 1.50, tracking: 0,         family: body }
    body-sm-medium:      { size: 14, weight: 500, lineHeight: 1.50, tracking: 0,         family: body }
    caption:             { size: 13, weight: 400, lineHeight: 1.40, tracking: 0,         family: body }
    caption-bold:        { size: 13, weight: 600, lineHeight: 1.40, tracking: 0,         family: body }
    micro:               { size: 12, weight: 500, lineHeight: 1.40, tracking: 0,         family: body }
    micro-uppercase:     { size: 11, weight: 600, lineHeight: 1.40, tracking: '0.5px',   family: body, transform: uppercase }
    button-md:           { size: 14, weight: 500, lineHeight: 1.30, tracking: 0,         family: body }
    stat-display:        { size: 64, weight: 500, lineHeight: 1.10, tracking: '-1.5px',  family: display, notes: 'big number stat counters' }
    code-md:             { size: 13, weight: 400, lineHeight: 1.50, tracking: 0,         family: mono, notes: 'rare — only inside developer-platform pages' }

radius:
  micro: 4
  sm: 6
  md: 8
  lg: 12
  xl: 16
  xxl: 20
  xxxl: 28
  feature: 32
  pill: 9999
  full: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96, 120]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: pill
    padding: '12px 24px'
    use: 'every primary CTA — Sign up free, Get Miro free'
  button-primary-pressed:
    backgroundColor: brand-pressed
    textColor: on-brand
    rounded: pill
  button-primary-disabled:
    backgroundColor: border
    textColor: text-muted
    rounded: pill
  button-yellow:
    backgroundColor: brand-yellow
    textColor: brand
    rounded: pill
    padding: '12px 24px'
    use: 'in-product or campaign CTA — playful variant'
  button-blue:
    backgroundColor: brand-blue
    textColor: on-brand
    rounded: pill
    padding: '12px 24px'
    use: 'rare brand-blue CTA — pricing or campaign use'
  button-secondary:
    backgroundColor: transparent
    textColor: text
    rounded: pill
    padding: '12px 24px'
    border: '1px solid border-strong'
    use: 'less-committed pair next to primary'
  button-ghost:
    backgroundColor: transparent
    textColor: text
    rounded: md
    padding: '8px 12px'
    use: 'inline ghost button — nav menu, dropdown trigger'
  hero-band:
    backgroundColor: bg
    textColor: text
    padding: 120
    use: 'homepage hero with mockup grid + black pill CTA'
  feature-mockup-card:
    backgroundColor: bg
    textColor: text
    rounded: feature
    padding: 32
    use: 'large feature card framing a real Miro-board mockup'
  sticky-note-card-yellow:
    backgroundColor: brand-yellow
    textColor: text
    rounded: md
    padding: 16
    use: 'yellow sticky-note feature callout — playful variant'
  sticky-note-card-coral:
    backgroundColor: brand-coral
    textColor: coral-dark
    rounded: md
    padding: 16
    use: 'coral sticky-note feature callout'
  sticky-note-card-teal:
    backgroundColor: teal-light
    textColor: moss-dark
    rounded: md
    padding: 16
    use: 'teal sticky-note callout'
  sticky-note-card-rose:
    backgroundColor: brand-rose
    textColor: text
    rounded: md
    padding: 16
    use: 'rose sticky-note callout'
  feature-card:
    backgroundColor: bg-surface
    textColor: text
    rounded: xl
    padding: 32
    use: '3-up benefit grid card'
  testimonial-card:
    backgroundColor: bg-surface
    textColor: text
    rounded: xl
    padding: 32
    use: 'customer quote card'
  customer-logo-tile:
    backgroundColor: bg
    textColor: text-stone
    padding: 24
    use: 'monochrome logo strip tile'
  pricing-tier-card:
    backgroundColor: bg
    textColor: text
    rounded: xl
    padding: 32
    border: '1px solid border'
    use: 'standard pricing tier card'
  pricing-tier-card-featured:
    backgroundColor: bg-pricing-featured
    textColor: text
    rounded: xl
    padding: 32
    use: 'featured tier — soft lavender wash, no badge'
  pricing-comparison-row:
    backgroundColor: bg
    textColor: text-steel
    padding: 12
    use: 'pricing-page comparison table row'
  text-input:
    backgroundColor: bg
    textColor: text
    rounded: md
    padding: '12px 16px'
    height: 44
    border: '1px solid border'
  text-input-focus:
    border: '2px solid brand-blue'
  badge-pill:
    backgroundColor: bg-yellow
    textColor: yellow-dark
    rounded: pill
    padding: '4px 10px'
    use: 'product callout pill — NEW, BETA'
  badge-uppercase:
    backgroundColor: transparent
    textColor: text-charcoal
    padding: '0 0'
    use: 'micro-uppercase eyebrow label'
  cta-band-light:
    backgroundColor: bg-surface
    textColor: text
    rounded: feature
    padding: 64
    use: 'pre-footer CTA strip'
  cta-band-yellow:
    backgroundColor: brand-yellow
    textColor: text
    rounded: feature
    padding: 64
    use: 'rare yellow CTA band — campaign use'
  top-nav:
    backgroundColor: bg
    textColor: text
    height: 72
    use: 'sticky white nav with yellow Miro wordmark left'
  footer:
    backgroundColor: footer-bg
    textColor: on-dark-muted
    padding: 96

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.16, 1, 0.3, 1)'
  ease-bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 120
  duration-standard: 240
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — sticky-note hover bounce removed; transitions reduced to opacity-only at 100ms'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  ambient: '0 1px 2px rgba(28,28,30,0.04)'
  standard: '0 4px 12px rgba(28,28,30,0.08)'
  elevated: '0 12px 32px rgba(28,28,30,0.12)'
  deep: '0 24px 48px rgba(28,28,30,0.16)'
  ring: '0 0 0 2px rgba(66,98,255,0.5)'
  sticky-note: '0 2px 4px rgba(28,28,30,0.10), 0 4px 8px rgba(28,28,30,0.06)'

accessibility:
  contrast-text-on-bg: 17.1               # AAA — #1c1c1e on #ffffff
  contrast-body-on-bg: 7.4                # AAA — #555a6a on #ffffff
  contrast-stone-on-bg: 4.6               # AA — #8e91a0 on #ffffff at body sizes
  contrast-on-brand: 16.3                 # AAA — white on #1c1c1e
  contrast-on-yellow: 12.4                # AAA — #1c1c1e on #ffd02f
  contrast-on-coral: 11.8                 # AAA — #600000 on #ff9999
  focus-ring: '2px solid #4262ff with 2px offset'
  reduced-motion-honored: true

dark-mode: 'light-only marketing — Miro does not ship a dark marketing variant. The footer is the only dark surface (#1c1c1e); in-product whiteboards have their own dark/light theme system separate from this spec.'
---

## 1. Visual Theme & Atmosphere

Miro's marketing surface reads as a **playful visual workspace** dressed for enterprise procurement. The page sits on white canvas (`#ffffff`) holding crisp dark type, but the brand's voltage comes from a **canary yellow wordmark** (`#ffd02f`) and a constellation of **sticky-note pastels** — coral, teal, rose, peach, mint — that surface as feature callouts throughout the page. Those pastels aren't arbitrary marketing chroma; they are literally the colour palette of the live Miro whiteboard sticky-notes, promoted from in-product UI to marketing surface.

Display type is **Roobert PRO**, a custom geometric sans by Displaay Type Foundry (similar to Inter or Söhne in lineage). Hero scales hit 80px at weight 500 with -2px tracking; the negative tracking is what gives "Innovate together" headlines their compressed, confident feel. Body type drops to 16px / 400 with relaxed 1.5 line-height — the editorial dialect of "this is a tool you'll actually use, not a dashboard demo."

The brand's primary CTA is a **black pill button** (`#1c1c1e` background, full pill radius), which is unusually understated for a colorful brand — Miro deliberately uses black-pill chrome to ground the playful pastel surfaces. The signature canary yellow appears mostly in the wordmark, occasional callout cards, and the sticky-note motif; it almost never carries a primary CTA.

The page rhythm alternates white canvas → mockup-anchored feature card → sticky-note pastel band → testimonial → CTA strip → dark footer. Real Miro-board mockups (with sticky-notes, frames, arrows, and cursors visible) anchor most feature sections — the screenshots themselves are dense enough that the surrounding chrome can stay quiet.

**Key Characteristics:**
- White canvas with **canary yellow wordmark** (`#ffd02f`) — the single most recognizable Miro signal.
- **Sticky-note pastel palette** (coral `#ff9999`, teal `#0fbcb0` / `#c3faf5`, rose `#ffd8f4`, peach `#ffe6cd`) used as feature callout surfaces.
- **Black pill CTA** (`#1c1c1e`, full pill radius) is the primary action — playful brand, grounded chrome.
- **Roobert PRO** display at weight 500 with -2px tracking on hero h1.
- **Mockup-anchored feature cards**: real Miro-board screenshots inside 32px-radius feature containers.
- 64–120px section padding; **120px hero padding** is the brand's signature breathing room.
- Pill radius (9999px) on every button — never sharp corners on CTAs.
- Dark footer (`#1c1c1e`) is the only inverted surface in the system.

## 2. Color Palette & Roles

### Primary
- **Bg / Canvas** (`#ffffff`): The page floor. Pure white — no warm tint.
- **Text / Ink** (`#1c1c1e`): Display headlines, primary button background, footer surface.
- **Brand / Primary CTA** (`#1c1c1e`): Black-pill CTA. Same hex as ink.

### Brand & Dark
- **Brand Yellow** (`#ffd02f`): The signature canary yellow wordmark and rare campaign-CTA color.
- **Brand Yellow Deep** (`#fcb900`): Hover / focus on yellow surfaces.
- **Yellow Light** (`#fff4c4`): Soft yellow surface for callouts.
- **Footer Bg** (`#1c1c1e`): Dark inverted footer ground — same hex as primary.

### Accent — Sticky-note Pastels
The brand's playful voltage. Each pastel echoes the actual sticky-note palette inside the live Miro whiteboard.
- **Brand Coral** (`#ff9999`) — coral sticky-note feature callout.
- **Coral Light** (`#ffc6c6`) — softer coral surface.
- **Brand Teal** (`#0fbcb0`) — signature teal accent.
- **Teal Light** (`#c3faf5`) — soft teal callout band.
- **Brand Rose** (`#ffd8f4`) — rose sticky-note callout.
- **Brand Pink** (`#fde0f0`) — pink callout surface.
- **Brand Orange Light** (`#ffe6cd`) — peach sticky-note.
- **Brand Red** (`#fbd4d4`) — very soft red sticky-note (more peach than red).

### Brand Blue
- **Brand Blue** (`#4262ff`): Inline link blue and rare secondary-CTA blue. Not a primary brand color — supporting role only.
- **Blue 450** (`#5b76fe`): Hover variant.
- **Blue Pressed** (`#2a41b6`): Pressed state.

### Interactive
- **Link** (`#4262ff`): Inline body links — underlined.
- **Link Hover** (`#2a41b6`): Pressed state.
- **Selected**: Selection bg uses brand-blue at 20% alpha.
- **Disabled**: Background `#e0e2e8`, text `#a5a8b5`.

### Neutral Scale
- **Ink / Text** (`#1c1c1e`): Display, body emphasis.
- **Ink Deep** (`#050038`): Rare maximum emphasis — used inside dark deep-navy callouts.
- **Charcoal** (`#2c2c34`): Nav links, labels.
- **Slate** (`#555a6a`): Sub-titles.
- **Steel** (`#6b6f7e`): Body running-text.
- **Stone** (`#8e91a0`): Captions, breadcrumbs.
- **Muted** (`#a5a8b5`): Disabled, placeholder.

### Surface & Borders
- **Bg Surface** (`#f7f8fa`): Subtle gray-white tint for nested cards and feature backgrounds.
- **Bg Soft** (`#fafbfc`): Even subtler tint.
- **Bg Yellow** (`#fff8e0`): Soft yellow callout band.
- **Bg Pricing Featured** (`#f5f3ff`): Featured pricing tier soft lavender wash.
- **Border** (`#e0e2e8`): Default 1px hairline.
- **Border Soft** (`#eef0f3`): Lighter hairline.
- **Border Strong** (`#c7cad5`): Stronger outline — secondary button border, focus context.

### Shadow Colors
- **Ambient** (`rgba(28,28,30,0.04)`): Barely-there card shadow.
- **Standard** (`rgba(28,28,30,0.08)`): Default elevated card.
- **Elevated** (`rgba(28,28,30,0.12)`): Floating popovers.
- **Sticky-note shadow**: 2-layer drop (`0 2px 4px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)`) — the shadow that makes a sticky-note feel physical.

### Semantic
- **Success** (`#00b473`): Confirmation, online states.
- **Warning** (`#fcb900`): Caution — same hex as brand-yellow-deep.
- **Error** (`#c41c1c`): Destructive actions, validation errors.
- **Info** (`#4262ff`): Info notices — same as brand-blue.

## 3. Typography Rules

### Font Family
- **Primary**: `"Roobert PRO", "Roobert", "Inter Display", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`. Roobert PRO (Displaay Type Foundry) carries every text role.
- **Mono**: `"JetBrains Mono", "Fira Code", ui-monospace, SF Mono, Menlo, monospace`. Rare — only inside developer-platform pages.
- **Substitutes**: If Roobert PRO is unavailable, **Inter** or **Söhne** are the closest open-source pairs. Roobert is geometric-humanist with slightly wider proportions than Inter — adjust letter-spacing -0.01em on Inter to match.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| hero-display | Roobert PRO | 80 | 500 | 1.05 | -2px | — | Homepage hero h1 |
| display-lg | Roobert PRO | 60 | 500 | 1.10 | -1.5px | — | Product page heroes |
| heading-1 | Roobert PRO | 48 | 500 | 1.15 | -1px | — | Major section heads |
| heading-2 | Roobert PRO | 36 | 500 | 1.20 | -0.5px | — | Sub-section heads |
| heading-3 | Roobert PRO | 28 | 500 | 1.25 | 0 | — | Feature card titles |
| heading-4 | Roobert PRO | 22 | 500 | 1.30 | 0 | — | Card titles |
| heading-5 | Roobert PRO | 18 | 500 | 1.40 | 0 | — | Inline emphasis heads |
| subtitle | Roobert PRO | 18 | 400 | 1.50 | 0 | — | Hero subhead, intro paragraphs |
| body-md | Roobert PRO | 16 | 400 | 1.50 | 0 | — | Default body |
| body-md-medium | Roobert PRO | 16 | 500 | 1.50 | 0 | — | Body emphasis |
| body-sm | Roobert PRO | 14 | 400 | 1.50 | 0 | — | Footer body, secondary copy |
| body-sm-medium | Roobert PRO | 14 | 500 | 1.50 | 0 | — | Card metadata |
| caption | Roobert PRO | 13 | 400 | 1.40 | 0 | — | Photo captions |
| caption-bold | Roobert PRO | 13 | 600 | 1.40 | 0 | — | Card category labels |
| micro | Roobert PRO | 12 | 500 | 1.40 | 0 | — | Tiny meta text |
| micro-uppercase | Roobert PRO | 11 | 600 | 1.40 | 0.5px | — | Uppercase eyebrow labels |
| button-md | Roobert PRO | 14 | 500 | 1.30 | 0 | — | CTA labels |
| stat-display | Roobert PRO | 64 | 500 | 1.10 | -1.5px | — | Big number stat counters |
| code-md | JetBrains Mono | 13 | 400 | 1.50 | 0 | — | Code blocks (dev-platform pages) |

### Principles
- **Roobert PRO 500 is the brand voice.** Display headlines never go bolder than 500. Going to 600 reads as marketing-shouty.
- **Negative tracking on display sizes**: -2px at 80px, -1.5px at 60px, -1px at 48px, -0.5px at 36px. Linear scaling preserves the compressed feel.
- **Single-family discipline**: Roobert PRO across every text role. No display/body family split.
- **Line-height generous on body**: 1.5 throughout body sizes — Miro's body text is meant to read like editorial, not like a dashboard.
- **Uppercase eyebrow micro** (11px / 600 / 0.5px tracking) is the section-label rhythm — every major band is preceded by one.
- **Caption-bold (13px / 600)** is the only place 600-weight appears in body sizes — used for card category labels and metadata.

## 4. Component Stylings

### Buttons (5 variants)

**`button-primary`** — The signature black pill. Background `#1c1c1e`, text `#ffffff`, type 14px / 500 Roobert, padding 12px × 24px, radius 9999px (full pill). Used on every primary action.
- *Pressed*: `button-primary-pressed` darkens to `#2c2c34`.
- *Disabled*: Background `#e0e2e8`, text `#a5a8b5`.

**`button-yellow`** — The campaign yellow CTA. Background `#ffd02f`, text `#1c1c1e`, same shape as primary. Used in playful campaign moments — never as the homepage primary.

**`button-blue`** — Rare brand-blue CTA. Background `#4262ff`, text `#ffffff`, same shape as primary. Used on pricing or specific campaign moments.

**`button-secondary`** — Transparent with `#c7cad5` border, text `#1c1c1e`. The "less-committed" pair next to primary.

**`button-ghost`** — Inline ghost button. Transparent, text `#1c1c1e`, smaller padding (8×12px), 8px radius (the only place the system uses 8px radius on a button — for ghost variants only).

### Cards

**`hero-band`** — Homepage hero. White canvas, 120px vertical padding, hero-display headline + subtitle + primary button cluster. A real Miro-board mockup sits below or beside the type column, contained inside a 32px-radius feature card with the sticky-note shadow.

**`feature-mockup-card`** — Large feature card framing a real Miro-board mockup. Background `#ffffff` with sticky-note shadow, 32px radius, 32px padding. Often paired with copy in an adjacent column.

**`sticky-note-card-yellow`** — Yellow sticky-note feature callout. Background `#ffd02f`, text `#1c1c1e`, 8px radius, 16px padding, sticky-note shadow. The chrome mimics a real sticky-note.

**`sticky-note-card-coral`** — Same shape, background `#ff9999`, text `#600000`.

**`sticky-note-card-teal`** — Background `#c3faf5`, text `#187574`.

**`sticky-note-card-rose`** — Background `#ffd8f4`, text `#1c1c1e`.

**`feature-card`** — 3-up benefit grid card. Background `#f7f8fa`, 16px radius, 32px padding, no border. Carries an icon glyph, heading-3 title, body-md description.

**`testimonial-card`** — Customer quote card. Background `#f7f8fa`, 16px radius, 32px padding. Quote in heading-4 (22 / 500), customer name + title in body-sm-medium.

**`customer-logo-tile`** — Monochrome logo strip tile. White surface, 24px padding. 8 logos at desktop, 4 at mobile.

### Pricing Cards

**`pricing-tier-card`** — Standard tier. White, 16px radius, 32px padding, 1px `#e0e2e8` border. Plan name in heading-4, price in stat-display (64 / 500 / -1.5px), feature checklist in body-md, primary button at bottom.

**`pricing-tier-card-featured`** — Featured tier. Background shifts to `#f5f3ff` (soft lavender wash). No badge — surface tone shift is the only signal.

**`pricing-comparison-row`** — Comparison table row. Hairline divider between rows, 12px vertical padding, label left + checkmarks across 4 plan columns.

### Badges & Pills

**`badge-pill`** — Product callout pill. Background `#fff8e0` (soft yellow), text `#746019`, full pill radius, 4×10px padding, type micro-uppercase. Used for "NEW", "BETA", "COMING SOON".

**`badge-uppercase`** — Section eyebrow. Transparent, text `#2c2c34`, type micro-uppercase (11 / 600 / 0.5px tracking). Every major band is preceded by one.

### Inputs / Forms

**`text-input`** — Default form input. White, 8px radius, 12×16px padding, 44px height, 1px `#e0e2e8` border.

**`text-input-focus`** — Border thickens to 2px solid `#4262ff`.

### Navigation

**`top-nav`** — 72px-tall sticky white bar. Yellow Miro wordmark left (the only place yellow appears in nav), horizontal menu (Product / Solutions / Resources / Pricing) center, "Contact Sales" + "Sign in" + primary "Get Miro free" right. Sticky on scroll with subtle ambient shadow.

**`footer`** — Dark footer ground `#1c1c1e`, white headings, `#a5a8b5` link tone. Multi-column layout — Platform / Solutions / Resources / Company. 96px vertical padding.

### CTA Bands

**`cta-band-light`** — Pre-footer CTA strip. Background `#f7f8fa`, 32px feature radius, 64px padding. Headline in heading-1 + subhead + primary button cluster.

**`cta-band-yellow`** — Rare yellow CTA band. Background `#ffd02f`, text `#1c1c1e`, 32px radius, 64px padding. Used for campaign moments only.

## 5. Layout Principles

### Spacing System
Base unit **4px**. Tokens: `xxs:4 · xs:8 · sm:12 · md:16 · lg:20 · xl:24 · xxl:32 · xxxl:40 · section-sm:48 · section:64 · section-lg:96 · hero:120`. The unusual 20px / 40px tokens reflect Miro's decimal-rounded sub-grid on certain card layouts.

Section padding alternates: 64px between minor bands, 96px between major bands, **120px** for hero spaces. Card internal padding ranges 16–48px depending on density: 16px sticky-note, 32px feature card, 48px hero callout.

### Grid & Container
- **Max content width**: ~1280px centered, with 32px horizontal breathing room.
- **Hero**: full-width, 120px vertical padding, type column constrained to ~640px with mockup floating right or below.
- **3-up feature grid**: 3 columns desktop, 2 tablet, 1 mobile. Card heights uniform (unlike Airtable's intentional unevenness).
- **Sticky-note callout grid**: 2×2 or 3×2 grid of sticky-note cards. Cards rotate slightly (-2° / +2° / 0°) for the playful "tossed onto a board" feel.
- **Pricing tier grid**: 4-up at desktop with the featured tier in column 2 or 3.

### Whitespace Philosophy
Miro uses **generous breathing room around dense content**. Hero whitespace is 120px top + 120px bottom around the type column. Inside feature cards, padding shrinks to 16–32px, creating dense information clusters separated by big voids. The combination feels editorial without being slow.

### Section Cadence
Page rhythm: white hero → 3-up feature grid → mockup-anchored feature card → sticky-note callout band → testimonial row → 4-up customer logo strip → pricing teaser → pre-footer CTA → dark footer.

## 6. Shapes & Radius Scale

| Tier | Token | Value | Use |
|---|---|---|---|
| Micro | micro | 4px | Inline tags inside data tables |
| Standard | sm | 6px | Compact rows |
| Comfortable | md | 8px | Form inputs, ghost buttons, sticky-note cards |
| Large | lg | 12px | Compact cards |
| XL | xl | 16px | Feature cards, pricing tier cards, testimonial cards |
| XXL | xxl | 20px | Large content cards |
| XXXL | xxxl | 28px | Hero illustration containers |
| Feature | feature | 32px | Mockup-anchored feature cards, CTA bands |
| Pill | pill | 9999px | Every button — primary, yellow, secondary, blue |

The pill radius on every button is non-negotiable — sharp-cornered CTAs read as "another SaaS template" rather than Miro. Sticky-note cards stay at 8px to mimic the real sticky-note feel; feature mockups jump to 32px to feel architectural.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | No shadow | Body sections, top nav (until scrolled), footer |
| 1 — Ambient | `0 1px 2px rgba(28,28,30,0.04)` | Sticky nav after scroll, subtle card lift |
| 2 — Standard | `0 4px 12px rgba(28,28,30,0.08)` | Default elevated cards (3-up grid, testimonial) |
| 3 — Sticky-note | `0 2px 4px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)` | Sticky-note cards — 2-layer drop for physical feel |
| 4 — Elevated | `0 12px 32px rgba(28,28,30,0.12)` | Floating popovers, dropdowns |
| 5 — Deep | `0 24px 48px rgba(28,28,30,0.16)` | Modals, dialogs |

### Shadow Philosophy
Miro uses **2-layer drop shadows** to give cards a sense of physical presence — the sticky-note shadow is the brand's distinctive depth signature. Where Linear and Vercel use brightness-step elevation on dark canvases, Miro uses softly tinted shadows on white canvas to make cards feel like paper artifacts on a desk. The pricing tier cards and feature cards both use the standard 2-layer shadow; sticky-note cards use a tighter, more pronounced 2-layer drop that mimics the real lift of a Post-it.

Decorative depth: real Miro-board mockups inside feature cards carry their own internal depth (sticky-notes, frames, cursors all have shadows in the screenshot), so the surrounding card chrome stays quiet — one shadow ring per element.

## 8. Interaction & Motion

### Easing Curves
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for color, border, opacity transitions.
- **Emphasized ease**: `cubic-bezier(0.16, 1, 0.3, 1)` — sticky-note card reveals, mockup pan-in.
- **Bounce ease**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — sticky-note hover bounce. The brand's signature playful motion.

### Duration Buckets
- **Fast (120ms)**: Color transitions, focus ring expansion, link hover.
- **Standard (240ms)**: Card hover lift, button press feedback, dropdown opens.
- **Slow (400ms)**: Sticky-note bounce-in, hero mockup reveal, modal entrance.

### Per-Component Micro-States
- **Button hover (primary)**: Background brightens by 4% over 120ms; no transform.
- **Button press**: Background drops to `#2c2c34` over 80ms; 1px translate-down via `transform: translateY(1px)`.
- **Sticky-note card hover**: Card translates `translateY(-2px)` with bounce ease over 240ms; shadow intensifies from 2-layer to 3-layer.
- **Feature card hover**: Card lifts via `translateY(-4px)` over 240ms; shadow intensifies to elevated.
- **Link hover**: Underline thickens from 1px → 2px over 120ms.
- **Mockup pan-in (on scroll)**: Mockup translates from `translateY(40px)` to `0` and fades in over 600ms with emphasized ease.
- **Input focus**: Border recolors from `#e0e2e8` → 2px `#4262ff` over 120ms.

### Page Transitions
Standard browser navigation. Section-on-scroll reveals are a 400ms fade-in-up (24px offset) gated by `IntersectionObserver`. Sticky-notes inside a callout band stagger in with 80ms increments and a slight rotation (-2° to 0° or +2° to 0°) — they "settle" onto the board.

### Reduced Motion
`prefers-reduced-motion: reduce` honored: all transforms removed, sticky-note bounce becomes a 100ms opacity fade, rotation is skipped (cards arrive at 0° rotation directly), card hover lifts are removed, transitions reduced to opacity-only at 100ms.

## 9. Accessibility & A11y

### Contrast Pairs
- **Text on bg**: `#1c1c1e` on `#ffffff` = **17.1** — AAA at every size.
- **Body on bg**: `#555a6a` on `#ffffff` = **7.4** — AAA at body sizes.
- **Stone on bg**: `#8e91a0` on `#ffffff` = **4.6** — AA at body sizes; do not use below 14px.
- **On-brand on brand**: `#ffffff` on `#1c1c1e` = **16.3** — AAA.
- **On-yellow on brand-yellow**: `#1c1c1e` on `#ffd02f` = **12.4** — AAA.
- **On-coral**: `#600000` on `#ff9999` = **11.8** — AAA.
- **On-teal-light**: `#187574` on `#c3faf5` = **5.9** — AA.
- **Link on bg**: `#4262ff` on `#ffffff` = **4.8** — AA.

### Focus Indicators
Every focusable element shows a 2px solid `#4262ff` ring with 2px offset. The brand-blue is used (rather than yellow) because yellow on white doesn't carry sufficient contrast for a focus ring.

### ARIA Patterns
- **Buttons**: Native `<button>` elements; `aria-label` only when icon-only.
- **Sticky-note cards**: `<article>` with `aria-labelledby` referencing the card title; rotation transforms applied via CSS (not affecting DOM order).
- **Pricing comparison table**: `<table>` with `<thead>` plan headers; the featured-tier surface change is reinforced with `aria-label="Most popular plan"` on the column header.
- **Navigation**: `<nav aria-label="Primary">`; mobile drawer uses `aria-expanded` and `inert` on background content.
- **Mockups**: Wrapped in `<figure>` with `<figcaption>` describing the board content.

### Keyboard Navigation
Tab order follows visual reading order. Skip-link at top of every page jumps to `<main>`. Mobile nav drawer traps focus when open; Escape closes. Sticky-note cards expose their CTA as the primary keyboard target. Tabbing through the pricing comparison reaches the CTA on each tier card before the comparison table.

### Screen Reader Hints
Mockup screenshots use descriptive `alt` text describing the board ("Miro whiteboard showing a customer journey map with sticky-notes, frames, and cursor labels"). The Miro wordmark in nav uses `aria-label="Miro home"`. Decorative sticky-note rotation transforms are `aria-hidden` for the angle (the content remains accessible).

### Reduced Motion Handling
All transforms and stagger reveals are removed. Sticky-note bounce becomes a 100ms opacity fade. Mockup pan-in is replaced by a static reveal. Card hover lifts are removed.

## 10. Responsive Behavior

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero h1 80→40px; mockup stacks below type column; sticky-note grid drops to 1-up; nav collapses to hamburger |
| Tablet | 640–1024px | Hero h1 60px; mockup right-aligned; 3-up feature grid stays; pricing tier grid switches to 2-up with horizontal scroll |
| Desktop | 1024–1280px | Full hero h1 80px; 3-up feature grid; 4-up pricing |
| Wide | > 1280px | Content caps at 1280px; outer breathing room expands |

### Touch Targets
- Primary CTA: 44px height (12px vertical padding + 14px line-height + 6px effective touch area) — meets WCAG AAA.
- Ghost buttons: 36px — slightly under recommended; the system pads them via 8px gutters in nav layouts.
- Sticky-note cards: minimum 80×80px touch area.
- Pricing tier card CTAs: full-width on mobile.

### Collapsing Strategy
Top nav switches to hamburger below 1024px. Sticky-note grid: 3×2 → 2×2 → 1×N. 3-up feature grid: 3 → 2 → 1. Mockup-anchored feature cards: type + mockup side-by-side at desktop, mockup-below-type at mobile.

### Image Behavior
Mockups retain native aspect ratios; horizontal scroll preserved on mobile rather than wrapping. Customer logos stay at native widths; logo strip wraps to 2 rows on mobile. Sticky-note cards retain their rotation transforms even on mobile (the playful angle is the brand).

## 11. Content & Voice

### Tone
**Playful, collaborative, enterprise-credible.** Miro writes for cross-functional teams — designers, PMs, engineers, sales, ops — needing a shared visual workspace. Headlines describe outcomes ("Innovate together", "Build a clearer plan", "Run better workshops"); body copy supports with named customer wins (Cisco, Frog, Deloitte). The voice avoids both "magic" framing and dry enterprise jargon.

### Microcopy Patterns
- **CTA verbs**: "Get Miro free", "Sign up free", "Contact Sales", "Request a demo", "Try AI Workflows". Never "Start your journey" or "Unleash your team".
- **Section labels**: 11px micro-uppercase eyebrow at 0.5px tracking — "FOR DESIGN TEAMS", "INTEGRATIONS", "TEMPLATES".
- **Sticky-note callout titles**: One-line capability statements — "Brainstorm together" not "Tap into the magic of collaboration".

### Empty States
Where empty states appear (search results, template gallery), the recipe is: a single line in `text-stone` ("No templates match 'foo'") with a brand-blue link to all templates.

### Error Messages
Pattern: short, declarative, action-oriented. "Email already in use — try signing in" not "Oops!". Errors carry a small icon-x in `#c41c1c` and inline guidance.

### Success Confirmations
Single-line toast in `text` color over `surface` background with a `success` (#00b473) accent stripe at the left. "Board created" not "Great job!".

### CTA verb conventions
The brand prefers the simple, declarative present-imperative: "Get Miro free", "Sign up", "Try it free", "Watch demo". Pricing CTAs add specificity: "Start free", "Contact sales". The "free" qualifier appears almost everywhere — Miro's free tier is genuinely generous and the marketing leans into that.

## 12. Dark Mode & Theming

Miro's marketing surface is **light-only**. There is no dark-mode toggle on miro.com. The footer (`#1c1c1e`) is the only dark surface in the entire system, and it serves a structural role rather than a theme variant.

The in-product whiteboard ships with its own light/dark theme system (separate from this marketing spec), but those theme tokens don't surface on the marketing site. The yellow wordmark and sticky-note pastels are calibrated for white canvas — moving them to dark canvas would require a different palette tune.

If a future dark variant ships, the natural mapping would be: bg → `#1c1c1e`, text → `#ffffff`, surface → `#2c2c34`, border → `#3c3c44`, brand-yellow stays `#ffd02f` (the wordmark survives dark canvas), sticky-note pastels need 30–40% saturation reduction to read as soft on dark surfaces.

## 13. Lineage & Influences

Miro descends from the **collaborative-canvas-tool tradition** — Figma's marketing playfulness, Notion's editorial calm, and the older legacy of Mural and InVision. The sticky-note motif is unambiguously borrowed from physical brainstorming culture (3M Post-it Notes), elevated to brand surface.

The black-pill CTA discipline is a 2023–2024 SaaS convention (Notion, Linear, Vercel all run variants), but Miro's specific commitment to pill-radius on **every button variant** is more disciplined than most peers. The yellow wordmark + colorful pastel palette traces back to playful brand identities of the early 2010s (Trello, Slack pre-rebrand, MailChimp) — Miro's contribution is keeping that playfulness while maintaining enterprise-procurement credibility.

Roobert PRO references the "geometric humanist" sans family — Inter, Söhne, GT America all live in the same neighbourhood. Miro's specific weight (500) and tracking (linearly negative across display sizes) are calibrated to feel "engineered playful" rather than "designy decorative."

- **Figma** — Marketing playfulness, customer-led headlines, real product mockups as feature anchors. https://figma.com
- **Notion** — Editorial calm, single-family discipline. https://notion.so
- **Linear** — Black-pill CTA, restrained chroma, dark footer. https://linear.app
- **3M Post-it Notes** — The literal sticky-note motif elevated to brand surface.
- **Displaay Type Foundry (Roobert PRO)** — The geometric humanist sans that ships modern collaboration brands. https://displaay.net

## 14. Do's and Don'ts

### Do
- Reserve `brand-yellow` (`#ffd02f`) primarily for the wordmark, sticky-note callouts, and rare campaign CTAs. Never as the primary homepage CTA.
- Use the **black pill** (`#1c1c1e`, full pill radius) as the primary CTA across every page.
- Pair every hero with a real Miro-board mockup — sticky-notes, frames, cursors visible.
- Use the sticky-note pastel palette (coral / teal / rose / peach) as feature callout surfaces — these echo the in-product palette.
- Apply the 2-layer sticky-note shadow on sticky-note cards to mimic the physical sticky-note feel.
- Keep display headlines at Roobert PRO 500 with proportional negative tracking — roughly -2.5% across display sizes.
- Use 11px micro-uppercase (0.5px tracking) for every section eyebrow.
- Anchor major bands at 96–120px vertical padding; hero gets 120px.
- Use real customer names in body copy (Cisco, Frog, Deloitte) — social proof is the brand's credibility lever.

### Don't
- Don't use yellow as the primary CTA color. The yellow is a brand signal (wordmark, callouts), not an action color.
- Don't use sharp-cornered CTAs. Every button is full pill — sharp corners read as "wrong template."
- Don't drop display weight to 400. Roobert PRO at 400 reads as body text, not headline.
- Don't introduce a serif. The single-family Roobert discipline is the brand.
- Don't apply the sticky-note shadow to non-sticky-note cards. The 2-layer drop is reserved for the sticky-note motif.
- Don't bold inside body text. Body emphasis goes to weight 500 (`body-md-medium`) — never 600+.
- Don't repeat the sticky-note pastel palette in two consecutive bands. Cadence requires alternation: sticky-note band → mockup-anchored band → sticky-note band.
- Don't use cool greys. Miro's neutrals lean slightly warm-cool-neutral with a faint blue cast (`#555a6a`, `#6b6f7e`).
- Don't overuse rotation. Sticky-note rotation (-2° to +2°) is signature; rotating other elements reads as decoration-for-decoration.

## 15. Agent Prompt Guide

### Quick Color Reference
```
Bg / Canvas:     #ffffff (white — never tint)
Text:            #1c1c1e (near-black — same hex as primary CTA)
Body:            #555a6a (slate)
Stone:           #8e91a0 (captions)
Brand Yellow:    #ffd02f (wordmark, sticky-note, rare CTA)
Coral:           #ff9999 (sticky-note coral)
Teal Light:      #c3faf5 (sticky-note teal surface)
Rose:            #ffd8f4 (sticky-note rose)
Brand Blue:      #4262ff (link, focus ring)
Surface:         #f7f8fa (subtle gray-white)
Border:          #e0e2e8 (1px hairline)
Footer Bg:       #1c1c1e (dark footer ground)
On-brand:        #ffffff (white text on black pill)
```

### Example Component Prompts

1. "Create a hero band on `#ffffff` canvas with Roobert PRO 80px / 500 / -2px tracking headline ('Innovate together'), 18px / 400 `#555a6a` subhead, primary CTA (`#1c1c1e` background, white text, full pill radius, 12×24px padding) and secondary outline button (transparent, `#1c1c1e` text, 1px `#c7cad5` border, full pill). 120px vertical padding. Real Miro-board mockup floats right or below, contained in a 32px-radius feature card with 2-layer drop shadow."

2. "Build a sticky-note callout grid: 3×2 of sticky-note cards. Mix yellow (`#ffd02f`/`#1c1c1e`), coral (`#ff9999`/`#600000`), teal (`#c3faf5`/`#187574`), rose (`#ffd8f4`/`#1c1c1e`), peach (`#ffe6cd`/`#1c1c1e`). Each card 8px radius, 16px padding, sticky-note shadow `0 2px 4px rgba(0,0,0,0.10), 0 4px 8px rgba(0,0,0,0.06)`. Apply -2° / +2° / 0° random rotations for the playful tossed-on-a-board feel."

3. "Compose a 3-up feature grid on `#ffffff`: each card on `#f7f8fa`, 16px radius, 32px padding, no border, standard shadow. Each card carries an icon glyph, heading-3 title (Roobert PRO 28 / 500), body-md description (16 / 400 `#555a6a`)."

4. "Design a pricing tier card: white background (`#f5f3ff` for the featured tier), 16px radius, 32px padding, 1px `#e0e2e8` border. Plan name in heading-4 (Roobert PRO 22 / 500), price in stat-display (Roobert PRO 64 / 500 / -1.5px), feature checklist in body-md (16 / 400), full-width primary pill button at bottom."

5. "Create a top nav: 72px tall sticky white bar with yellow Miro wordmark left (`#ffd02f`), horizontal menu (Product / Solutions / Resources / Pricing) center in body-md-medium (`#1c1c1e`), 'Contact Sales' text link + 'Sign in' text link + primary 'Get Miro free' pill button right. Subtle ambient shadow appears on scroll."

6. "Build a pre-footer CTA strip: `#f7f8fa` surface, 32px feature radius, 64px padding. Headline in heading-1 (Roobert PRO 48 / 500 / -1px tracking), subhead in subtitle (18 / 400 `#555a6a`), primary pill button. Centered."

### Iteration Guide
1. Start with `#ffffff` canvas. The white is the brand. Tinting it cream or dark breaks the playful-meets-enterprise tone.
2. Place one `button-primary` (black pill) per viewport. The black is the action; the yellow is the brand.
3. Use the sticky-note motif (2-layer shadow, optional small rotation, pastel palette) only for sticky-note callouts — don't apply the shadow or rotation to feature cards or hero mockups.
4. Keep hero h1 at Roobert PRO 80 / 500 / -2px tracking. Smaller heroes scale to 60 / 500 / -1.5px linearly.
5. The yellow `#ffd02f` is a destination color, not a layout color. Most pages should have white as the dominant surface and yellow only in the wordmark + 1–2 callouts.
6. Pricing-page work uses the lavender `#f5f3ff` for featured tier (no badge), and 4-up grid at desktop.
7. Mockups are the brand's credibility lever. Use real Miro-board screenshots — sticky-notes, frames, cursors, AI prompt panes visible. Avoid generic dashboard mockups.
8. When in doubt about emphasis, scale the type up before bolding. Miro's max display weight is 500; 600 only appears on caption-bold and uppercase eyebrow.
