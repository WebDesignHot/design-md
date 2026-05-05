---
name: Oura
tagline: Pure-black canvas with Inter precision and gold-stamped scores — the premium-ring health-precision aesthetic.
author: webdesignhot
source_url: https://ouraring.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media, marketplace]
tags: [dark, fitness, sans, premium, health, precision, photographic, jewelry]
preview_swatch: ['#000000', '#d6c283', '#ffffff']
related: [whoop, peloton, apple]
description: 'Oura''s storefront is the canonical premium-ring health-precision canvas — a pure-black ground (`#000000`) with hard-set white type and a refined **champagne-gold** (`#d6c283`) accent that signals jewelry-grade luxury rather than fitness-tech voltage. Type runs **Inter** at light 300–500 weights for hero display (40–80px), borrowed straight from the high-fashion editorial playbook — large, light, confident, with negative tracking that compresses the headlines into precise type-blocks. Cards round at 8–16px, CTAs are softly rounded rectangles (8px), and the entire surface is engineered to evoke the matte-titanium ring itself: deep-black surfaces, champagne accents on score rings, ring-product photography as the design''s anchor, and Health Score circular meters that look like jewelry-gallery centrepieces.'

colors:
  bg: '#000000'                  # pure black canvas — Oura's signature deep ground
  bg-elev: '#0d0d0d'             # subtle card lift on dark
  bg-elev-strong: '#1a1a1a'      # elevated card, dropdown
  bg-light: '#ffffff'            # rare light-mode shop band (apparel, education)
  bg-cream: '#f5f0e6'            # warm cream — appears on certain editorial bands
  surface: '#0d0d0d'
  surface-soft: '#1a1a1a'
  surface-strong: '#262626'
  brand: '#d6c283'               # champagne gold — the Oura signature accent
  brand-hover: '#c4ae6a'         # deeper gold on hover
  brand-active: '#a8924f'        # pressed state
  brand-pale: '#ede4cb'          # light gold tint
  brand-deep: '#7d6a3d'          # deepest gold for editorial stamping
  brand-soft: '#1a1612'          # gold-tinted dark surface
  ring-titanium: '#8a8a8a'       # matte titanium product colour
  ring-rose-gold: '#c4847a'      # rose-gold ring variant
  ring-stealth: '#3a3a3a'        # stealth-black ring variant
  text: '#ffffff'                # primary white text on dark canvas
  text-strong: '#ffffff'         # heading punch
  text-muted: '#b5b5b5'          # secondary metadata
  text-soft: '#8a8a8a'           # caption text, faint counts
  text-faint: '#666666'           # disabled, microcopy
  text-on-brand: '#000000'       # black on gold CTA — high contrast
  text-on-light: '#000000'       # ink on rare light bands
  link: '#ffffff'                # default white link with underline
  link-hover: '#d6c283'          # link hover flips to champagne gold
  border: '#262626'              # default 1px hairline on dark
  border-soft: '#1a1a1a'         # subtle dividers
  border-strong: '#3a3a3a'       # focus state hairline
  border-input: '#4d4d4d'        # form input outline
  score-readiness: '#84d97e'     # readiness-green score ring
  score-sleep: '#7eb8d9'         # sleep-blue score ring
  score-activity: '#d9b67e'      # activity-amber score ring
  score-stress: '#d97e84'        # stress-red score ring
  score-resilience: '#9c7ed9'    # resilience-purple score ring
  scrim: 'rgba(0,0,0,0.8)'       # modal backdrop on dark
  shadow-card: 'rgba(0,0,0,0.5)'
  shadow-elev: 'rgba(0,0,0,0.7)'
  success: '#84d97e'             # health-green
  warning: '#d9b67e'             # advisory amber-gold
  danger: '#d97e84'              # alert red
  info: '#7eb8d9'                # sleep-blue, also info

typography:
  display:
    family: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [300, 400, 500, 600]
    opentype-features: ['ss01', 'tnum']
  body:
    family: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500]
  mono:
    family: '"Inter", "SF Mono", Menlo, Monaco, monospace'
    weights: [400, 500]
  scale:
    hero-display:    { size: 80, weight: 300, lineHeight: 1.0,  tracking: '-2.5px',   family: display, opentype: ['ss01'] }
    hero-display-md: { size: 64, weight: 300, lineHeight: 1.04, tracking: '-2px',     family: display, opentype: ['ss01'] }
    page-title:      { size: 48, weight: 300, lineHeight: 1.08, tracking: '-1.5px',   family: display, opentype: ['ss01'] }
    section-head:    { size: 36, weight: 400, lineHeight: 1.15, tracking: '-1px',     family: display, opentype: ['ss01'] }
    sub-section:     { size: 24, weight: 500, lineHeight: 1.25, tracking: '-0.5px',   family: display }
    pull-quote:      { size: 28, weight: 300, lineHeight: 1.4,  tracking: '-0.5px',   family: display }
    body-md:         { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    micro:           { size: 11, weight: 500, lineHeight: 1.27, tracking: '0.12em',   family: body, transform: 'uppercase' }
    score-display:   { size: 96, weight: 300, lineHeight: 1.0,  tracking: '-3px',     family: body, opentype: ['tnum'] }
    score-md:        { size: 64, weight: 300, lineHeight: 1.0,  tracking: '-2px',     family: body, opentype: ['tnum'] }
    score-label:     { size: 11, weight: 500, lineHeight: 1.0,  tracking: '0.16em',   family: body, transform: 'uppercase' }
    metric-tabular:  { size: 18, weight: 500, lineHeight: 1.0,  tracking: '0',        family: body, opentype: ['tnum'] }
    button-cta:      { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0.08em',   family: body, transform: 'uppercase' }
    nav-link:        { size: 13, weight: 500, lineHeight: 1.0,  tracking: '0.08em',   family: body, transform: 'uppercase' }
    eyebrow:         { size: 11, weight: 500, lineHeight: 1.0,  tracking: '0.2em',    family: body, transform: 'uppercase' }
    price-display:   { size: 28, weight: 400, lineHeight: 1.0,  tracking: '-0.25px',  family: body, opentype: ['tnum'] }

radius:
  micro: 2
  sm: 4
  md: 8        # CTAs, buttons, inputs
  lg: 12       # cards
  xl: 16       # hero promo bands
  xxl: 24
  pill: 9999   # avatars, score rings (circular SVG)

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 200]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 72
  masthead-height: 72

components:
  button-cta:
    bg: '#d6c283'
    color: '#000000'
    radius: 8
    padding: '14px 28px'
    height: 48
    font: button-cta
    use: 'Buy Ring, Subscribe, Get Started — every primary action.'
  button-cta-hover:
    bg: '#c4ae6a'
    color: '#000000'
    use: 'Hover state — deeper champagne gold.'
  button-cta-light:
    bg: '#ffffff'
    color: '#000000'
    radius: 8
    padding: '14px 28px'
    height: 48
    use: 'Alt CTA on dark — white-on-dark variant for high-contrast moments.'
  button-secondary:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #ffffff'
    radius: 8
    padding: '13px 27px'
    height: 48
    use: 'Learn More, Compare, Sign In — outline variant.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#d6c283'
    use: 'Inline gold links — underline on hover.'
  ring-product-card:
    bg: '#0d0d0d'
    color: '#ffffff'
    radius: 12
    padding: '40px'
    use: 'Ring product card — full-bleed photo with finish label, eyebrow tag, price, gold CTA.'
  score-ring-card:
    bg: '#0d0d0d'
    color: '#ffffff'
    radius: 16
    padding: '32px'
    use: 'Score ring card — large circular SVG progress ring with score (96/300 tnum) at centre, label below, optional trend metric strip.'
  metric-tile:
    bg: '#0d0d0d'
    color: '#ffffff'
    radius: 12
    padding: '24px'
    border: '1px solid #1a1a1a'
    use: 'Health metric tile — eyebrow label + tabular value + sparkline + trend caption.'
  hero-product-band:
    bg: '#000000'
    color: '#ffffff'
    use: 'Full-bleed product hero with the ring photographed against deep black, headline 80/300 light-weight overlay, champagne CTA pinned bottom.'
  ring-finish-selector:
    bg: 'transparent'
    color: '#ffffff'
    radius: 9999
    padding: '12px 20px'
    border: '1px solid #3a3a3a'
    use: 'Pill ring-finish selector — Stealth · Silver · Gold · Rose Gold — selected state shows matte-titanium swatch dot.'
  pull-quote:
    bg: 'transparent'
    color: '#ffffff'
    use: 'Editorial pull quote in 28/300 with -0.5px tracking, attribution beneath in 11/500 uppercase eyebrow.'
  text-input:
    bg: 'transparent'
    color: '#ffffff'
    radius: 8
    height: 48
    padding: '14px 16px'
    border: '1px solid #4d4d4d'
    focus: '2px solid #d6c283'
    use: 'Form input on dark — slim utility radius, gold focus ring.'
  modal:
    bg: '#0d0d0d'
    color: '#ffffff'
    radius: 16
    padding: '40px'
    use: 'Centered dialog over 80% black scrim, gold-bordered close affordance.'
  testimonial-card:
    bg: '#1a1a1a'
    color: '#ffffff'
    radius: 12
    padding: '32px'
    use: 'Editorial testimonial — pull quote 28/300, author photo (40px pill), name + role in 13/400, decorated by gold quote-mark glyph.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-precise: 'cubic-bezier(0.65, 0, 0.35, 1)'   # pharmaceutical/jewelry-grade smoothness
  duration-fast: 200
  duration-standard: 320
  duration-slow: 480
  duration-score-fill: 1200
  cta-press: 'CTA bg deepens d6c283 → a8924f over 200ms on :active'
  card-hover: 'card border lightens 1a1a1a → 3a3a3a + subtle gold-glow halo over 320ms'
  score-ring-fill: 'circular SVG ring stroke-dashoffset animates 0 → score% over 1200ms ease-precise on mount'
  score-count-up: 'score numeric counts from 0 to target value over 1200ms in sync with ring fill'
  product-rotate: 'on ring product hero, the ring rotates 360deg over 8s (autoplay loop, paused on prefers-reduced-motion)'
  reduced-motion: 'respects prefers-reduced-motion: reduce — score-ring-fill, count-up, and product-rotate suppress to instant; colour transitions remain.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  ambient: 'rgba(0,0,0,0.5) 0 4px 16px'
  hover-card: 'rgba(0,0,0,0.7) 0 12px 32px'
  modal: 'rgba(0,0,0,0.8) 0 24px 64px'
  gold-glow: '0 0 24px rgba(214,194,131,0.2)'  # subtle champagne halo on featured/hover
  ring: '0 0 0 2px #d6c283'

accessibility:
  contrast-text-on-bg: 21.0          # #ffffff on #000000 — AAA (maximum)
  contrast-text-on-brand: 11.4       # #000000 on #d6c283 — AAA
  contrast-muted-on-bg: 8.2          # #b5b5b5 on #000000 — AAA
  contrast-link-hover: 9.3           # #d6c283 on #000000 — AAA
  focus-ring: '2px solid #d6c283 + 2px outline offset (champagne ring)'
  reduced-motion-honored: true
  touch-target-min: 48
  keyboard-nav: 'Tab moves masthead → ring selector → CTAs → score-ring cards → testimonial → footer. Arrow keys inside ring-finish selector and metric trends.'

dark-mode: 'native'   # Oura is dark-first across web and app. Light bands appear sparingly on shop & education pages.
---

## 1. Visual Theme & Atmosphere

Oura's storefront is the canonical premium-ring health-precision canvas — a **pure-black** ground (`#000000`) with hard-set white type and a refined **champagne-gold** (`#d6c283`) accent that signals jewelry-grade luxury rather than fitness-tech voltage. The black is uncompromising — true `#000000`, deeper than Peloton's `#0d0d0d` studio-dim, deeper than Apple's `#1d1d1f` — because the ring itself is photographed against this deep ground for every product hero.

The chromatic identity is **white on pure black with a champagne accent**. The gold (`#d6c283`) is desaturated, slightly warm, deliberately under-saturated — closer to brushed-bronze or champagne-bottle foil than to the high-saturation gold of trophy iconography. It carries the wordmark, every primary CTA, the score-ring stroke colour for the Readiness/Sleep/Activity scores, the link-hover state, the focus ring, and the gold-glow halo on featured cards. The gold is the brand's whisper — present, precious, never loud.

Type runs **Inter** at light 300–500 weights for hero display (40–80px) — **borrowed straight from the high-fashion editorial playbook**. The hero "Healthspan begins here" runs Inter 80/300 with `-2.5px` tracking — a whisper-weight luxury treatment that mirrors Stripe's 300-weight discipline, but applied to a wellness brand rather than a fintech. Where most fitness brands shout in 700–900 weights, Oura whispers in 300 — the headline doesn't need volume because the ring itself is the brand's loudest statement.

The **score ring** is the brand's signature data-visualization. Every health metric (Readiness, Sleep, Activity, Stress, Resilience) renders as a **circular SVG progress ring** with the numeric score in 96/300 tabular at the centre and an uppercase eyebrow label beneath. Each metric ring has its own colour — Readiness green, Sleep blue, Activity amber, Stress red, Resilience purple — but all share the same circular geometry. On mount, the ring strokes animate from 0% to score% over 1200ms with ease-precise (a pharmaceutical-grade easing curve), and the numeric value counts up in sync.

Shape language is utility-rectangular for chrome (8px CTAs, 12px cards) and pill (9999px) for ring-finish selectors and avatars. The 8px CTA radius reads as utility-grade, but the Inter 14/500 uppercase label with `+0.08em` tracking pushes it into editorial-luxury territory. Ring product photography is the design's gravity — every hero image is the ring against deep black with subtle rim-light highlighting the matte titanium finish.

**Key Characteristics:**
- Pure-black canvas (`#000000`) — deeper than any peer fitness brand, designed to match the ring's product-shot ground
- Single brand accent: champagne gold (`#d6c283`) — under-saturated, jewelry-grade, never high-voltage
- Inter at light 300–500 weights for display — hero 80/300/-2.5px is a whisper-weight luxury treatment
- Score-ring data-viz is the signature: circular SVG progress + 96/300 tnum centre value + uppercase eyebrow label
- Five distinct metric colours (Readiness/Sleep/Activity/Stress/Resilience) all in the same desaturated palette
- 8px rectangular CTAs at 48px height; 9999px pills only for ring-finish selectors and avatars
- Ring product photography against deep-black with rim-light — the ring IS the design's gravity
- Uppercase 11/500 eyebrows with `+0.16–0.2em` tracking — editorial-magazine label discipline
- Subtle gold-glow halo (`0 0 24px rgba(214,194,131,0.2)`) on featured cards and ring-product hover
- Pharmaceutical-grade ease-precise (`cubic-bezier(0.65, 0, 0.35, 1)`) on all score-ring fills

## 2. Color Palette & Roles

### Primary
- **Pure Black** (`#000000`): default canvas — deeper than peers, matched to product-shot ground
- **Card Surface** (`#0d0d0d`): elevated cards, score-ring cards, testimonial surfaces
- **Card Strong** (`#1a1a1a`): testimonial cards, metric tiles
- **White** (`#ffffff`): primary text, hero display
- **Cream** (`#f5f0e6`): rare warm-cream band on certain editorial education pages

### Brand
- **Champagne Gold** (`#d6c283`): wordmark, primary CTA, score-ring stroke (Readiness), link hover, focus ring, gold-glow halo — the single brand accent
- **Brand Hover** (`#c4ae6a`): deeper gold on hover
- **Brand Active** (`#a8924f`): pressed state
- **Brand Pale** (`#ede4cb`): light gold tint
- **Brand Deep** (`#7d6a3d`): editorial accent for inline gold accents
- **Brand Soft** (`#1a1612`): gold-tinted dark surface

### Ring Finish (Product Colours)
- **Stealth Black** (`#3a3a3a`): the matte-black ring finish
- **Titanium Silver** (`#8a8a8a`): the matte-silver ring finish
- **Champagne Gold** (`#d6c283`): the gold ring finish (matches brand accent)
- **Rose Gold** (`#c4847a`): the rose-gold ring finish

### Score-Ring Colours
- **Readiness Green** (`#84d97e`): Readiness score ring
- **Sleep Blue** (`#7eb8d9`): Sleep score ring
- **Activity Amber** (`#d9b67e`): Activity score ring
- **Stress Red** (`#d97e84`): Stress score ring
- **Resilience Purple** (`#9c7ed9`): Resilience score ring

All five metric colours are deliberately desaturated and colour-balanced to read as a coordinated palette, not as alarm or celebration colours. They sit closer to watercolour than to neon.

### Interactive
- **Link** (`#ffffff`): default inline link with underline
- **Link Hover** (`#d6c283`): hover flips white to champagne gold
- **Disabled** (`#666666`): disabled text and outline
- **Focus** (`#d6c283`): 2px champagne ring with 2px offset

### Neutral Scale
- **White** (`#ffffff`) — primary text
- **Muted** (`#b5b5b5`) — secondary metadata, body sub-copy
- **Soft** (`#8a8a8a`) — caption, faint counts, "Updated 2h ago"
- **Faint** (`#666666`) — disabled, microcopy, footer legal
- **Border** (`#262626`) — default 1px hairline on dark
- **Border Soft** (`#1a1a1a`) — subtle dividers
- **Border Strong** (`#3a3a3a`) — focus state hairline on inputs
- **Border Input** (`#4d4d4d`) — default form-input outline

### Surface & Borders
- **Black** (`#000000`) — default canvas
- **Card** (`#0d0d0d`) — elevated cards
- **Card Strong** (`#1a1a1a`) — testimonial, metric tile
- **Strong Surface** (`#262626`) — divider band
- **Cream Band** (`#f5f0e6`) — rare warm-cream education page

### Shadow Colors
Oura uses dark-on-dark shadows with subtle **champagne gold-glow** halos on featured ring-product cards and hover states.

- `rgba(0,0,0,0.5) 0 4px 16px` — ambient card lift
- `rgba(0,0,0,0.7) 0 12px 32px` — hover card
- `rgba(0,0,0,0.8) 0 24px 64px` — modal drop
- `0 0 24px rgba(214,194,131,0.2)` — gold-glow on featured ring-product cards

### Semantic
- **Success Green** (`#84d97e`): "Score improved", "Goal hit" — Readiness palette
- **Warning Amber** (`#d9b67e`): advisory banners — Activity palette
- **Danger Red** (`#d97e84`): validation errors — Stress palette
- **Info Blue** (`#7eb8d9`): informational banners — Sleep palette

## 3. Typography Rules

### Font Family

**Primary**: `Inter`. Fallback chain: `"Helvetica Neue", Helvetica, Arial, sans-serif`. Inter carries the entire scale across display, body, score values, CTAs.

**Mono**: not a distinct family; tabular numerals via Inter `tnum`.

**OpenType features**: `tnum` is enabled on every score value, metric tabular, and price. `ss01` (the alternate-glyph stylistic set) is enabled on display headlines.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | Inter | 80 | 300 | 1.0 | -2.5px | ss01 | "Healthspan begins here" |
| hero-display-md | Inter | 64 | 300 | 1.04 | -2px | ss01 | Sub-hero on category pages |
| page-title | Inter | 48 | 300 | 1.08 | -1.5px | ss01 | "Oura Ring 4", "Membership" page H1 |
| section-head | Inter | 36 | 400 | 1.15 | -1px | ss01 | "How it works", "What you get" |
| sub-section | Inter | 24 | 500 | 1.25 | -0.5px | — | Sub-section heads |
| pull-quote | Inter | 28 | 300 | 1.4 | -0.5px | — | Editorial testimonial pull-quote |
| body-md | Inter | 16 | 400 | 1.6 | 0 | — | Default body |
| body-lg | Inter | 18 | 400 | 1.6 | 0 | — | Lead paragraphs |
| body-sm | Inter | 14 | 400 | 1.5 | 0 | — | Secondary metadata |
| caption | Inter | 13 | 400 | 1.4 | 0.02em | — | Metric trend captions |
| micro | Inter | 11 | 500 | 1.27 | 0.12em | uppercase | Editorial labels — "FEATURED" |
| score-display | Inter | 96 | 300 | 1.0 | -3px | tnum | Score ring centre value — "84" |
| score-md | Inter | 64 | 300 | 1.0 | -2px | tnum | Sub-score in metric strip |
| score-label | Inter | 11 | 500 | 1.0 | 0.16em | uppercase | "READINESS", "SLEEP", "ACTIVITY" |
| metric-tabular | Inter | 18 | 500 | 1.0 | 0 | tnum | Metric tile values |
| button-cta | Inter | 14 | 500 | 1.0 | 0.08em | uppercase | "BUY RING", "GET STARTED" |
| nav-link | Inter | 13 | 500 | 1.0 | 0.08em | uppercase | "RING", "MEMBERSHIP", "RESEARCH" |
| eyebrow | Inter | 11 | 500 | 1.0 | 0.2em | uppercase | "LIMITED EDITION", "NEW" |
| price-display | Inter | 28 | 400 | 1.0 | -0.25px | tnum | "$349" ring product price |

### Principles

- **Light-weight luxury.** Inter at 300 for hero is Oura's most signature typographic choice. Where other fitness brands command at 700–900, Oura whispers at 300 — the headline doesn't need volume.
- **Negative tracking on display.** Hero 80/300/-2.5px. Page title 48/300/-1.5px. Section head 36/400/-1px. The negative tracking compresses the light type into precise blocks.
- **Editorial uppercase eyebrows.** Section labels and product tags render uppercase at 11/500 with `+0.12–0.2em` tracking — borrowed from high-fashion magazine label conventions (Vogue, GQ, Wallpaper).
- **Score values at 96/300 tnum.** The centre numeric of every score ring is light-weight (300) tabular at 96px. The light weight reads as confidence, not anxiety — the user's score is a fact, not a verdict.
- **Two-weight body.** Body 400 (regular) and 500 (caption emphasis); 600+ never used. Light voice across the entire surface.
- **No bold display.** There is no 700+ weight in the display scale. The brand's typographic restraint is non-negotiable.

## 4. Component Stylings

### Buttons

**`button-cta`** — champagne-gold (`#d6c283`) fill, **black** text in 14/500 uppercase with `+0.08em` tracking, 8px radius, 14×28px padding, 48px height. Black-on-gold gives 11.4 contrast — AAA. Hover deepens to `#c4ae6a`. Active to `#a8924f`. Used for "BUY RING", "GET STARTED", "SUBSCRIBE".

**`button-cta-light`** — alt CTA on dark for moments where gold would clash with adjacent product photography. White fill, black text, same 8px radius and 48px height.

**`button-secondary`** — transparent fill, 1px white outline, white text in 14/500 uppercase. Same 8px radius, same 48px height. Used for "LEARN MORE", "COMPARE".

**`button-tertiary-text`** — plain champagne-gold (`#d6c283`) text, no surface. Underline on hover.

### Cards

**`ring-product-card`** — full-bleed product hero. Black surface, 12px radius, 40px padding. Stack: eyebrow tag in 11/500 uppercase gold ("LIMITED EDITION"), ring product photograph centred against deep black with subtle rim-light, finish label in 13/400 white, price in 28/400 tabular, gold CTA pinned bottom. Hover triggers a subtle gold-glow halo and the ring product rotates 360deg over 8s.

**`score-ring-card`** — score visualization centrepiece. Black surface (`#0d0d0d`), 16px radius, 32px padding. Centre: large circular SVG progress ring (~280px diameter, 12px stroke) with score colour stroke and `#262626` background ring. Ring fill animates from 0 to score% over 1200ms with ease-precise. Centre numeric in 96/300 tabular ("84"). Beneath the ring: score label in 11/500 uppercase ("READINESS"), then a 3-up trend metric strip showing yesterday/7-day/30-day averages.

**`metric-tile`** — health metric tile. Black-card surface (`#0d0d0d`), 12px radius, 24px padding, 1px `#1a1a1a` border. Stack: eyebrow label in 11/500 uppercase muted ("HRV"), tabular value in 18/500 ("48 ms"), 24px sparkline showing trend, trend caption in 13/400 muted ("+4 ms vs your 7-day avg").

**`hero-product-band`** — full-bleed product hero band. Pure-black ground, ring product photograph centred, hero headline in 80/300 white floating above or below, eyebrow tag in 11/500 uppercase gold, primary gold CTA + secondary white-outline CTA pinned beneath.

**`testimonial-card`** — editorial testimonial. Card surface (`#1a1a1a`), 12px radius, 32px padding. Decorated by an oversized gold quote-mark glyph top-left. Pull quote in 28/300 white with `-0.5px` tracking. Author avatar (40px pill), name + role in 13/400 muted beneath.

### Badges, Tags, Pills

**`eyebrow-tag`** — uppercase 11/500 white text with `+0.2em` tracking. No surface, no border, sits above section heads. "FEATURED", "NEW", "LIMITED EDITION".

**`score-eyebrow`** — same eyebrow style but coloured to match the score ring it labels. "READINESS" in green tone.

**`new-tag`** — small gold pill (4px radius, 4×8px padding) with "NEW" in 11/500 uppercase black. Appears on new ring finishes.

### Ring-Finish Selector

**`ring-finish-selector`** — pill (9999px) selector group. Each option: 12×20px padding, 1px `#3a3a3a` border on transparent fill, 8px swatch dot + finish name in 13/500 white. Selected state: 2px champagne border + brand-soft (`#1a1612`) tinted fill.

### Inputs / Forms

**`text-input`** — transparent surface (lets the dark canvas show through), 1px `#4d4d4d` hairline, 8px radius, 48px height, 14×16px padding, white text in 16/400. Stacked label above in 11/500 uppercase muted with `+0.12em` tracking. On focus the border thickens to 2px champagne gold.

**`search-bar`** — dark surface, 8px radius, 48px height, 1px `#3a3a3a` hairline, magnifier icon flush left in muted, gold focus ring on `:focus-visible`.

### Navigation

**`masthead`** — full-width black bar, 72px height, no bottom border (the masthead floats over the hero product band on the homepage). Wordmark flush left in white (Oura's flat sans wordmark). Nav links centred in 13/500 uppercase white with `+0.08em` tracking. Account / Cart utilities flush right with gold CTA "BUY RING".

**`mega-menu-flyout`** — opens from category dropdown; black-card surface (`#0d0d0d`), 16px radius, 1px `#262626` hairline, ambient shadow.

### Modals & Toasts

**`modal`** — centred dialog over an 80%-opacity black scrim. Black-card surface, 16px radius, 40px padding, modal shadow.

**`toast`** — bottom-centre. Black-card fill, 8px radius, 1px `#262626` hairline, white text, gold icon for celebration toasts (PR set, score milestone).

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160 · 200`
- Section padding (vertical): **96–200px** between major bands — Oura uses more breath than any peer in the fitness category, mirroring high-fashion editorial layouts (Vogue, Wallpaper)
- Card internal padding: **32–40px** for ring product cards; **24–32px** for score-ring and testimonial cards
- Gutters: **24–32px** between cards in grid view; **128–200px** between major page bands

### Grid & Container

- Max content width: **1440px** centred; **720px** for prose-centred bands
- Homepage: full-bleed product hero (with ring photographed against pure black) → 3-up score-ring grid → testimonial band → research/citation band → footer
- Ring product page: 2-column with 360° product spinner left (~50%), buy box right (~40%) — generous breath between
- Membership page: long-form editorial layout with 720px prose-centred body and 960px figure breakouts

### Whitespace Philosophy

Oura trusts **dramatic breath** more than any peer fitness brand. Hero sections run 128–200px vertical padding. Inside the ring product card, 40px internal padding gives the ring photograph room to breathe. The discipline is borrowed from high-fashion editorial — the brand position is "this is jewelry-grade, give it the breath it deserves".

### Section Cadence

Pages stay on the pure-black canvas almost everywhere. Rhythm comes from **photo-density alternation**: full-bleed product hero → tight score-ring grid → editorial pull-quote with generous breath → research-band with citation typography → testimonial. The rare warm-cream band (`#f5f0e6`) appears only on education-deep-dive pages where Oura wants to evoke a printed health-research journal.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Dense table corners |
| Small | 4px | New tag, dense badges |
| Default | 8px | CTAs, buttons, inputs, ring-finish selector swatch |
| Card | 12px | Ring product cards, metric tiles, testimonial cards |
| Featured | 16px | Score-ring cards, modals, hero bands |
| Hero | 24px | Hero promo bands |
| Pill | 9999px | Ring-finish selector, avatars, score-ring SVG (circular) |

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer |
| 1 — Ambient | `rgba(0,0,0,0.5) 0 4px 16px` | Default cards |
| 2 — Hover | `rgba(0,0,0,0.7) 0 12px 32px` | Cards on hover, dropdowns |
| 3 — Modal | `rgba(0,0,0,0.8) 0 24px 64px` | Centred dialogs |
| 4 — Gold Glow | `0 0 24px rgba(214,194,131,0.2)` | Featured ring-product cards on hover |
| 5 — Scrim | `rgba(0,0,0,0.8)` | Modal backdrop |

### Shadow Philosophy

Oura's depth strategy is **dark-on-dark** with selective **champagne gold-glow** halos on featured ring-product cards and hover states. The gold halo is set at 20% opacity — restrained, never neon. The brand position: depth comes from product photography contrast and selective gold-glow, never from atmospheric multi-layer stacks.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry
- **Precise**: `cubic-bezier(0.65, 0, 0.35, 1)` — score-ring fill, count-up animations (pharmaceutical-grade smoothness)

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 200ms | Hover colour swap, focus ring fade-in |
| Standard | 320ms | Card hover, modal enter, mega-menu flyout |
| Slow | 480ms | Hero carousel slide |
| Score Fill | 1200ms | Circular ring stroke fill on mount |
| Product Rotate | 8000ms | Ring product 360° rotation autoplay loop |

### Per-Component Recipes

- **CTA hover**: bg `#d6c283` → `#c4ae6a` over 200ms.
- **CTA press**: deepens to `#a8924f` for 200ms on `:active`.
- **Card hover**: border lightens `#1a1a1a` → `#3a3a3a` + subtle gold-glow halo fades in over 320ms.
- **Score-ring fill**: SVG `stroke-dashoffset` animates from 0 → score% over 1200ms with ease-precise. Numeric counts up in sync.
- **Score count-up**: numeric value tween from 0 to target over 1200ms ease-precise, in sync with ring fill.
- **Ring product rotate**: on the ring product hero, the ring photograph rotates 360deg over 8s autoplay loop. Pauses on `prefers-reduced-motion: reduce`.
- **Modal enter**: scrim fades in over 200ms, dialog translates from `translateY(8px) opacity(0)` to `0/1` over 320ms emphasized.
- **Eyebrow micro-fade**: eyebrows fade in 200ms after section enters viewport.

### Page Transitions

Page-to-page navigation uses no transition — links fire a hard navigation. Hero product images fade-in beneath the masthead over 320ms.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Score-ring fill, count-up, and product-rotate suppress to instant. Modal slide degrades to opacity-only.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #ffffff white on #000000 canvas | 21.0 | AAA (maximum) |
| #000000 black on #d6c283 CTA | 11.4 | AAA |
| #b5b5b5 muted on #000000 | 8.2 | AAA |
| #d6c283 link hover on #000000 | 9.3 | AAA |
| #ffffff on #0d0d0d card | 19.8 | AAA |
| #84d97e Readiness green on #000000 | 13.2 | AAA |
| #7eb8d9 Sleep blue on #000000 | 9.6 | AAA |

The black-on-gold CTA pair sits at **11.4 — AAA**. Black-text-on-gold is Oura's signature high-contrast luxury treatment — gold-on-black would fail; black-on-gold passes AAA.

### Focus Indicators

Focus ring is **2px solid `#d6c283`** (champagne) with 2px outline-offset. The dark canvas gives the gold ring high luminance contrast. All interactive elements receive the focus ring on `:focus-visible`.

### ARIA Patterns

- **Score ring**: `role="meter"` with `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`, `aria-label="Readiness score 84 out of 100"`.
- **Ring-finish selector**: `role="radiogroup"` with `role="radio"` per option; arrow keys navigate.
- **Ring product card**: entire card is `<a>` with verbose `aria-label` — "Oura Ring 4 Stealth, $349, Buy now."
- **Score eyebrow label**: bound to score-ring with `aria-describedby`.
- **Mega-menu**: `role="menu"` with `role="menuitem"`; arrow keys, Escape closes.

### Keyboard Navigation

- Masthead: Tab moves wordmark → nav → CTA
- Hero: Tab through eyebrow → CTAs → ring-finish selector
- Score-ring grid: Tab through cards in document order
- Modal: Tab is trapped; Esc closes

### Screen Reader Hints

Verbose `aria-label` on score rings — the meter announces both score and label. Decorative gold quote-marks on testimonial cards are `aria-hidden="true"` so the quote text reads cleanly.

### Reduced Motion

All transitions degrade to opacity-only. Score-ring fill, count-up, and product-rotate suppress to instant.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Masthead collapses to wordmark + cart + hamburger; score-ring grid stacks 1-up; ring product 360° spinner reduces to single-photo |
| Tablet | 640–1024px | Masthead with collapsed nav; score-ring grid 2-up |
| Desktop | 1024–1280px | Full masthead nav; score-ring grid 3-up |
| Wide | 1280–1440px | Content caps at 1440px; generous gutters |

### Touch Targets

- Primary CTAs: 48px height — meets AAA
- Ring-finish selector: 48px height
- Score ring cards: tappable for detail expansion
- Account / Cart icons: 48×48px

### Collapsing Strategy

- Masthead: nav links hide first; only wordmark + cart + hamburger remain at <640px
- Score-ring grid: 3 → 2 → 1; ring diameter compresses 280px → 220px → 180px
- Ring product hero: 2-column splits to single-column at <1024px
- Hero typography: 80px → 64px → 48px display compression across breakpoints

### Image Behavior

Ring product photographs use `aspect-ratio: 1/1` with `object-fit: contain` (never `cover` — the product needs full visibility). Editorial bands use `object-fit: cover`.

### Container Queries

Used in the score-ring card: when the card narrows below ~280px, the trend metric strip collapses from 3-up to a horizontal-scrollable row.

## 11. Content & Voice

### Tone

Calm, confident, scientifically-precise. Oura's voice is "the personal physician at a longevity clinic" — measured, evidence-cited, never alarmist. Headlines use restrained language ("Healthspan begins here", "Optimised by your data") rather than bombastic fitness-tech voice. The brand consistently positions Oura as **a scientific instrument first, a wellness product second**.

### Microcopy Patterns

- **Button verbs**: "BUY RING", "GET STARTED", "SUBSCRIBE", "LEARN MORE" — uppercase, calm
- **Error message recipe**: clinical — "We couldn't sync your ring. Open Bluetooth and try again."
- **Success confirmations**: data-aware — "Last night's Sleep score: 87. You spent 2h 14m in deep sleep."
- **Score interpretation**: "Your Readiness is High. Your body recovered well overnight."
- **Notifications**: "Your Resilience score has improved 7% this week"

### Empty States

Empty score history: "Once you've worn your ring for 14 days, your score trends will appear here."

Empty insights: "We're learning your patterns. Insights will appear here after a few days of wear."

### CTA Verb Conventions

- Primary: **BUY RING**, **GET STARTED**, **SUBSCRIBE**, **JOIN**
- Secondary: **LEARN MORE**, **COMPARE**, **READ THE RESEARCH**
- Tertiary: "View score detail", "See research citation"
- Avoided: "Click here", "Submit", "Buy now" (Oura prefers calm direct verbs over urgency-driven CTAs)

## 12. Dark Mode & Theming

**Dark-native.** Oura's storefront is dark-first across the entire experience. The base canvas is pure `#000000`, every text element is white, every CTA is champagne gold. There is no "light mode toggle" on the marketing site — the dark ground is the brand.

**Cream-band exceptions appear on education-deep-dive pages** (`#f5f0e6` warm cream with `#000000` ink text) — used scarcely on research-citation and educational content where Oura wants to evoke a printed health-research journal. Even there, the score-ring colours and gold accent stay unchanged.

The Oura iOS / Android app ships dark-by-default with optional light-mode toggle. The web is a faithful mirror of the dark-app experience.

## 13. Lineage & Influences

Oura's visual lineage runs through three traditions: **high-fashion editorial layout** (Vogue, GQ, Wallpaper — light-weight Inter display, dramatic 96–200px section breath, uppercase eyebrow labels with `+0.16–0.2em` tracking, jewelry-grade product photography), **Apple's product-photography-on-deep-canvas school** (the ring product against pure-black is a direct heir to Apple's iPhone Pro Max product hero pages, recoloured from `#1d1d1f` to `#000000`), and **pharmaceutical / longevity-clinic brand chrome** (the calm, evidence-cited voice; the 1200ms ease-precise score-ring fills; the data-precision discipline borrowed from medical device interfaces).

The 2013 founding aesthetic was much more clinical. The 2018 Oura Ring 2 launch introduced the gold accent. The 2021 Oura Ring 3 launch refined the dark-canvas-with-gold treatment to its current form. The 2024 Oura Ring 4 launch added the score-ring data-viz as the brand's centrepiece visualization.

What Oura rejects: high-saturation brand colours, multi-colour brand systems, voluminous bold display typefaces, urgency-driven CTAs, exclamation marks, fitness-tech voltage. The brand position is **calm precision** — Oura wants to feel like wearing a scientific instrument that happens to be jewelry, not like browsing a fitness app.

**Influences:**
- Apple — product-photography-on-deep-canvas, [apple.com](https://www.apple.com)
- Wallpaper magazine — high-fashion editorial layout, light-weight display, [wallpaper.com](https://www.wallpaper.com)
- WHOOP — wellness-data wearable adjacency, [whoop.com](https://whoop.com)
- Apple Health — score-ring data-viz lineage (the original health-rings concept)
- Stripe — light-weight luxury display typography, [stripe.com](https://stripe.com)
- Inter typeface (Rasmus Andersson) — light-weight workhorse, [rsms.me/inter](https://rsms.me/inter)

## 14. Do's and Don'ts

**Do**
- Anchor on the pure-black canvas (`#000000`) — deeper than peers, matched to the ring's product-shot ground
- Use a single brand accent: champagne gold (`#d6c283`) — under-saturated, jewelry-grade, never high-voltage
- Run Inter at light 300 weight for hero display — whisper-weight luxury, not bold conviction
- Apply tight negative tracking to display: `-2.5px` at 80px, `-2px` at 64px, `-1.5px` at 48px
- Render score values in 96/300 tabular at the centre of every score ring
- Use uppercase 11/500 eyebrows with `+0.16–0.2em` tracking — high-fashion editorial discipline
- Use **black** text on gold CTAs — the inversion is what gives it AAA contrast
- Add the gold-glow halo (`0 0 24px rgba(214,194,131,0.2)`) sparingly — only on featured ring-product cards
- Animate score-ring fills with ease-precise (`cubic-bezier(0.65, 0, 0.35, 1)`) over 1200ms
- Lean into 128–200px vertical hero padding — high-fashion editorial breath

**Don't**
- Don't introduce a second brand colour — champagne gold is the only true brand accent
- Don't use white-on-gold CTAs — the contrast fails AAA, and the brand uses black-on-gold
- Don't run Inter above 500 weight in the display scale — light-weight luxury is non-negotiable
- Don't use high-saturation gold (`#ffd700` trophy gold) — Oura's gold is desaturated champagne
- Don't compress section padding below 96px — the breath is the brand
- Don't use bold, voluminous display typefaces — Inter 300 carries the entire scale
- Don't render score values in 700–900 weights — 300 reads as confidence, 700+ reads as alarm
- Don't add atmospheric multi-layer shadows — Oura stays single-layer with selective gold-glow
- Don't say "Click here" or use exclamation marks — the voice is calm clinical precision
- Don't render score-ring colours in neon — all five metric colours are deliberately desaturated

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #000000
Card:          #0d0d0d
White:         #ffffff
Champagne:     #d6c283
Gold Hover:    #c4ae6a
Gold Active:   #a8924f
Muted:         #b5b5b5
Soft:          #8a8a8a
Border:        #262626
Border Strong: #3a3a3a
Readiness Gn:  #84d97e
Sleep Blue:    #7eb8d9
Activity Amber:#d9b67e
Stress Red:    #d97e84
Resilience:    #9c7ed9
Gold Glow:     rgba(214,194,131,0.2)
```

### Example Component Prompts

- "Create an Oura-style Buy Ring CTA: 48px-tall rectangular button (8px radius) with champagne-gold `#d6c283` fill and **BLACK** text in Inter 14/500 uppercase with `+0.08em` tracking, 14×28px padding. Hover deepens to `#c4ae6a`. Active to `#a8924f`. Black-on-gold passes AAA at 11.4 contrast — never use white text on gold."
- "Build an Oura score-ring card: pure-black surface (`#0d0d0d`), 16px radius, 32px padding. Centre: 280px-diameter circular SVG progress ring with 12px stroke. Background ring stroke `#262626`, foreground ring stroke `#84d97e` (Readiness green). Animate `stroke-dashoffset` from 0 → score% over 1200ms with `cubic-bezier(0.65, 0, 0.35, 1)` ease-precise on mount. Centre numeric in Inter 96/300 tabular ('84'). Beneath the ring: 'READINESS' label in 11/500 uppercase white with `+0.16em` tracking. 3-up trend metric strip beneath: yesterday/7-day/30-day averages in 18/500 tabular."
- "Design an Oura ring product hero: pure-black (`#000000`) full-bleed band, 200px vertical padding. Ring product photograph centred against the black with subtle rim-light highlighting matte-titanium finish — uses `aspect-ratio: 1/1` with `object-fit: contain`. Eyebrow tag in Inter 11/500 uppercase champagne gold (`#d6c283`) with `+0.2em` tracking — 'OURA RING 4'. Hero headline beneath in Inter 80/300 white with `-2.5px` tracking and `ss01` enabled — 'Healthspan begins here'. Sub-copy in 18/400 muted (`#b5b5b5`). Champagne-gold rectangular CTA 'BUY RING' (8px radius, 48px height, Inter 14/500 uppercase black text) + secondary 1px white-outline CTA 'LEARN MORE'. Optional autoplay rotate: ring photograph rotates 360deg over 8s, paused on prefers-reduced-motion."
- "Create an Oura testimonial card: card surface (`#1a1a1a`), 12px radius, 32px padding. Decorated by an oversized champagne-gold (`#d6c283`) quote-mark glyph top-left. Pull quote in Inter 28/300 white with `-0.5px` tracking — 'Oura helped me see what my body was really doing.' Author avatar (40px pill) flush left, name + role in 13/400 muted (`#b5b5b5`) — 'Sarah Chen · Endurance athlete'."
- "Build an Oura ring-finish selector: pill (9999px) selector group with 4 options — Stealth, Silver, Gold, Rose Gold. Each option: 12×20px padding, 1px `#3a3a3a` border on transparent fill, 8px swatch dot (matched finish colour) + finish name in Inter 13/500 white. Selected state: 2px champagne (`#d6c283`) border + brand-soft (`#1a1612`) tinted fill. ARIA: `role='radiogroup'`, arrow keys navigate."
- "Design an Oura metric tile: black-card surface (`#0d0d0d`), 12px radius, 24px padding, 1px `#1a1a1a` border. Stack: eyebrow label in Inter 11/500 uppercase muted (`#b5b5b5`) with `+0.16em` tracking — 'HRV'. Tabular value in 18/500 white — '48 ms'. 24px sparkline showing 7-day trend in score-colour stroke. Trend caption in 13/400 muted — '+4 ms vs your 7-day avg'."

### Iteration Guide

1. **Start with the pure-black canvas.** Not Peloton's `#0d0d0d` studio-dim — Oura is `#000000`, the deepest possible ground, matched to product photography.
2. **One brand accent: champagne gold.** Desaturated `#d6c283`. No high-saturation gold, no secondary colour. The discipline is the brand.
3. **Inter at 300 for hero, 400–500 for body.** Light-weight luxury — never above 500 in the display scale.
4. **Negative tracking on display.** Hero 80/300/-2.5px. The negative tracking compresses the light type into precise blocks.
5. **Score-ring centre numerics in 96/300 tnum.** The light weight reads as confidence, not alarm.
6. **Black text on gold CTAs.** Black-on-gold = 11.4 AAA. White-on-gold fails. Always invert.
7. **Uppercase eyebrows with `+0.16–0.2em` tracking.** High-fashion editorial discipline borrowed from Vogue/Wallpaper.
8. **Dramatic breath: 128–200px vertical section padding.** Oura uses more breath than any peer — the ring deserves the room.
