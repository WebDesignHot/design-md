---
name: Mastercard
tagline: Cream-canvas editorial fintech, circular-portrait orbits, MarkForMC at 450 weight — institutional-but-warm payments brand.
author: webdesignhot
source_url: https://www.mastercard.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [fintech]
tags: [light, fintech, payments, editorial, warm-cream, institutional, photographic, brand]
preview_swatch: ['#F3F0EE', '#141413', '#CF4500']
related: [paypal, square, venmo]
description: 'Mastercard''s experience reads like a warm, editorial magazine built from soft stone and signal orange. The canvas is a muted putty-cream (`#F3F0EE`) — not white, not gray, but a colour that feels like the paper of a premium annual report. On top of that canvas, everything that matters is shaped like a stadium, a pill, or a perfect circle. The dominant visual gesture is the oversized radius: heroes carry 40-point corners, cards go fully pill-shaped, service images are cropped into circular orbits, and buttons either complete the pill or fit snugly at 20 points. The second gesture is orbit and trajectory: circular image masks don''t sit still — they''re connected by thin, hand-drawn-feeling orange arcs that span entire viewport widths, implying a constellation of services rather than a list. Each circle has a small attached "satellite" — a white micro-CTA holding an arrow icon — docked onto its perimeter like a moon. Typography is rendered entirely in MarkForMC, Mastercard''s proprietary geometric sans, with the load-bearing 450 body weight that creates an unusually soft reading tone. The whole system feels simultaneously institutional (a 60-year-old payments network) and editorial (a modern brand magazine).'

colors:
  bg: '#F3F0EE'                    # canvas cream — page floor, warm putty-toned
  bg-lifted: '#FCFBFA'             # one step lighter for nested raised sections
  surface: '#F3F0EE'
  surface-soft: '#F4F4F4'          # cool-gray alternative inside component subregions
  surface-card: '#FFFFFF'          # reserved for nav pill, modal cards, satellite circles
  surface-dark: '#141413'          # warm near-black footer surface
  brand-red: '#EB001B'             # Mastercard logo red — used ONLY in brand mark
  brand-yellow: '#F79E1B'          # Mastercard logo yellow — used ONLY in brand mark
  brand-ink: '#141413'             # primary CTA, headline text, footer surface — warm near-black
  signal-orange: '#CF4500'         # consent/legal CTA — burnt rust, deeper than brand yellow
  light-signal-orange: '#F37338'   # carrot orange for orbital arcs and carousel indicators
  clay-brown: '#9A3A0A'            # deep rust for secondary link-style buttons
  text-ink: '#141413'              # primary headline + body text colour
  text-charcoal: '#262627'         # slightly softer black, alternate body
  text-slate: '#696969'            # muted secondary, eyebrow alt, disabled
  text-granite: '#555555'          # deeper grey for inline body accents
  text-graphite: '#565656'         # alternate link-row grey
  text-dust: '#D1CDC7'             # very muted cream-gray, whisper text
  text-on-dark: '#FFFFFF'          # white reverse on footer ink
  text-on-brand: '#F3F0EE'         # cream reverse on ink CTAs (NOT pure white)
  text-on-orange: '#FFFFFF'        # white on signal-orange consent buttons
  link-blue: '#3860BE'             # deep dusty blue for inline links and informational callouts
  border: '#E8E4DE'                # default 1px hairline (cream-tinted)
  border-soft: '#F0EBE5'           # editorial dividers
  border-strong: '#141413'         # button outlines (1.5px)
  border-on-dark: 'rgba(255,255,255,0.3)'  # hairlines inside footer
  ghost-watermark: '#E8E2DA'       # cream-on-cream layered headline text
  scrim: 'rgba(20,20,19,0.4)'      # modal backdrop using ink-tinted
  shadow-soft: 'rgba(0,0,0,0.04)'  # nav pill shadow
  shadow-medium: 'rgba(0,0,0,0.08)' # hero media frame shadow
  shadow-deep: 'rgba(0,0,0,0.25)'  # rare dramatic elevation
  on-brand: '#F3F0EE'
  success: '#067F5B'
  warning: '#A35316'
  danger: '#CF4500'                # warning reuses signal orange tone
  info: '#3860BE'

typography:
  display:
    family: '"MarkForMC", "MarkOffcForMC", "Sofia Sans", Arial, sans-serif'
    weights: [400, 450, 500, 700]
    opentype-features: []
  body:
    family: '"MarkForMC", "Sofia Sans", Arial, sans-serif'
    weights: [400, 450, 500, 700]
  mono:
    family: '"SF Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    h1-hero:         { size: 64, weight: 500, lineHeight: 1.0,  tracking: '-1.28px',  family: display, notes: '1:1 ratio for tight vertical rhythm on multi-line hero' }
    h2-section:      { size: 36, weight: 500, lineHeight: 1.22, tracking: '-0.72px',  family: display }
    h3-card:         { size: 24, weight: 500, lineHeight: 1.20, tracking: '-0.48px',  family: display }
    h4-subhead:      { size: 14, weight: 700, lineHeight: 1.30, tracking: '0',        family: display }
    eyebrow-h5:      { size: 14, weight: 700, lineHeight: 1.0,  tracking: '0.56px',   family: body, transform: uppercase, notes: 'paired with tiny accent dot' }
    body-paragraph:  { size: 16, weight: 450, lineHeight: 1.40, tracking: '0',        family: body, notes: '450 is the load-bearing signature weight' }
    nav-link:        { size: 16, weight: 500, lineHeight: 1.0,  tracking: '-0.48px',  family: body }
    button-label:    { size: 16, weight: 500, lineHeight: 1.0,  tracking: '-0.32px',  family: body }
    footer-link:     { size: 14, weight: 450, lineHeight: 1.43, tracking: '0',        family: body }
    footer-header:   { size: 13, weight: 700, lineHeight: 1.0,  tracking: '0.56px',   family: body, transform: uppercase }
    consent-button:  { size: 13, weight: 400, lineHeight: 1.0,  tracking: '0.13px',   family: body }
    chip-label:      { size: 14, weight: 500, lineHeight: 1.0,  tracking: '0',        family: body }
    ghost-watermark: { size: 96, weight: 500, lineHeight: 0.95, tracking: '-2px',     family: display, notes: 'cream-on-cream layered behind portrait circles' }
    legal-micro:     { size: 12, weight: 450, lineHeight: 1.4,  tracking: '0',        family: body }

radius:
  micro: 3
  tiny: 6           # cookie banner micro-chips
  small: 6
  md: 20            # primary and secondary body CTAs — Mastercard's signature button radius
  lg: 24            # consent / orange pill buttons
  xl: 40            # hero media frames, section containers, H2 pill labels — iconic Mastercard gesture
  pill: 9999        # full pill shapes — navigation, carousel cards, footer country selector
  circle: 9999      # circular portraits, icon-only buttons, satellite CTAs (50% applied to square boxes)

spacing:
  base: 8
  scale: [8, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72
  card-gutter: 32
  section-vertical: 96

components:
  button-ink-pill:
    bg: '#141413'
    color: '#F3F0EE'
    radius: 20
    padding: '6px 24px'
    border: '1.5px solid #141413'
    height: 40
    font: button-label
    use: 'Primary CTA — solid warm-black pill on cream canvas. Marketing actions ("Learn more", "Explore", "Discover").'
  button-outline:
    bg: '#FFFFFF'
    color: '#141413'
    radius: 20
    padding: '6px 24px'
    border: '1.5px solid #141413'
    height: 40
    font: button-label
    use: 'Secondary action paired with primary, or standalone utility CTA.'
  button-consent:
    bg: '#CF4500'
    color: '#FFFFFF'
    radius: 24
    padding: '1px 30px'
    border: 'none'
    height: 36
    font: consent-button
    use: 'Consent / legal CTA. Bright rust pill — must NOT be used for marketing CTAs.'
  button-satellite:
    bg: '#FFFFFF'
    color: '#141413'
    radius: 9999
    width: 56
    height: 56
    border: 'none'
    use: 'Circular micro-CTA docked onto bottom-right of circular portrait, protruding ~40% outside.'
  button-icon-circle:
    bg: 'transparent'
    color: '#141413'
    radius: 9999
    width: 40
    height: 40
    border: '1px solid #141413'
    use: 'Carousel pagination/play-pause, hero video play, search toggle.'
  hero-media-frame:
    bg: '#000000'
    color: '#FFFFFF'
    radius: 40
    padding: '0'
    border: 'none'
    use: 'Stadium-shape hero — extreme 40px radius is the most iconic Mastercard gesture.'
  service-portrait:
    bg: 'transparent'
    color: '#141413'
    radius: 9999
    width: 320
    height: 320
    use: 'Perfect circle service/solution card with attached white satellite CTA at bottom-right.'
  pill-carousel-card:
    bg: '#FFFFFF'
    color: '#141413'
    radius: 9999
    padding: '0'
    use: 'Full-pill carousel card with full-bleed photography and overlaid chip labels.'
  ghost-watermark-text:
    bg: 'transparent'
    color: '#E8E2DA'
    font: ghost-watermark
    use: 'Cream-on-cream watermark headline layered behind portrait circles, bleeding off viewport edge.'
  search-button:
    bg: '#FFFFFF'
    color: '#141413'
    radius: 9999
    width: 48
    height: 48
    border: '1px solid rgba(20,20,19,0.5)'
    use: 'Initial collapsed search — 48px circular magnifier.'
  search-input-expanded:
    bg: '#FFFFFF'
    color: '#141413'
    radius: 9999
    padding: '12px 24px'
    border: '1px solid rgba(20,20,19,0.5)'
    height: 48
    use: 'Expanded horizontal input field — full pill with magnifier inset.'
  country-selector:
    bg: '#141413'
    color: '#FFFFFF'
    radius: 9999
    padding: '8px 16px'
    border: '1px solid rgba(255,255,255,0.4)'
    use: 'Footer pill with downward chevron — country/language picker.'
  nav-pill:
    bg: '#FFFFFF'
    color: '#141413'
    radius: 9999
    padding: '16px 40px'
    border: 'none'
    height: 56
    use: 'Floating navigation pill — white-to-translucent-white, ~24px below viewport top, soft 4-24-shadow lift.'
  eyebrow-with-dot:
    color: '#F37338'
    font: eyebrow-h5
    use: 'Light-signal-orange dot + uppercase eyebrow label ("• SERVICES", "• SOLUTIONS").'
  orbital-arc:
    color: '#F37338'
    use: 'Thin 1-1.5px curved line tracing arcs between circular portraits. Hand-drawn-feeling, never CSS-perfect.'
  footer:
    bg: '#141413'
    color: '#FFFFFF'
    radius: 0
    padding: '48px 100px 148px'
    use: 'Ink Black footer with 4-column link grid + conversational H2 + bottom row.'
  card-feature:
    bg: '#FCFBFA'
    color: '#141413'
    radius: 40
    padding: '40px'
    border: 'none'
    use: 'Feature card on lifted-cream surface with soft elevated shadow.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-orbital: 'cubic-bezier(0.16, 1, 0.3, 1)'
  duration-fast: 150
  duration-standard: 250
  duration-slow: 400
  duration-cinematic: 800
  button-press: 'subtle inward shrink or 2px offset on :active over 150ms — not a hover variant'
  satellite-cta-hover: 'satellite circle expands 56px → 60px and arrow translates 2px diagonally over 250ms'
  orbital-arc-draw: 'on viewport entry, the orbital line draws from start to end via stroke-dashoffset over 800ms ease-orbital'
  card-elevation-hover: 'rare hero card lifts via shadow-medium → shadow-deep transition over 250ms; no transform'
  carousel-pill-snap: 'horizontal scroll-snap on pill carousel rail; snap-stop with 250ms ease-emphasized settle'
  reduced-motion: 'respects prefers-reduced-motion: reduce — orbital arc draw becomes instant fade-in; satellite expand and carousel snap preserved at reduced amplitude'

breakpoints:
  mobile: 767
  tablet: 1023
  desktop: 1439
  wide: 1440

shadows:
  ambient: 'rgba(0,0,0,0.04) 0 4px 24px 0'        # floating nav pill — barely-there lift
  hover-card: 'rgba(0,0,0,0.08) 0 24px 48px 0'    # hero media frames, elevated cards — soft halo
  modal: 'rgba(20,20,19,0.16) 0 12px 32px'
  deep: 'rgba(0,0,0,0.25) 0 70px 110px 0'         # rare dramatic feature-tile elevation
  ring: '0 0 0 2px #141413'
  philosophy: 'Mastercard uses shadows as atmospheric cushioning, not directional light. Level 2 has 48px spread at 8% opacity — barely exists as dark pixels but creates a "card is breathing above the canvas" feel. Border lines are preferred over shadows for functional delineation.'

accessibility:
  contrast-text-on-bg: 14.6           # #141413 on #F3F0EE — AAA
  contrast-text-on-brand: 12.5        # #F3F0EE on #141413 — AAA
  contrast-text-on-orange: 4.9        # #FFFFFF on #CF4500 — AA at body, AAA at large
  contrast-link: 5.4                  # #3860BE on #F3F0EE — AA at body
  contrast-mute: 4.7                  # #696969 on #F3F0EE — AA at body
  focus-ring: '2px solid #141413 with 2px outline-offset'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab cycles nav-pill links → search button → primary CTA → service portraits → satellite CTAs → footer columns. Skip-link present.'
  aria-patterns: 'circular portraits use role="link" with aria-label; satellite CTAs are decorative aria-hidden when paired with portrait link; orbital arcs are aria-hidden="true" SVG'
  screen-reader: 'eyebrow dots are decorative aria-hidden; eyebrow text is the announced label; ghost watermark headlines are aria-hidden="true" to avoid duplicate announcement with foreground H2'

dark-mode: null   # Light-only — Mastercard's brand commits to the warm cream canvas. The footer ink is structural surface contrast, not a separate mode.
---

## 1. Visual Theme & Atmosphere

Mastercard's experience reads like a warm, editorial magazine built from soft stone and signal orange. The canvas is a muted putty-cream (`#F3F0EE`) — not white, not gray, but a colour that feels like the paper of a premium annual report. On top of that canvas, everything that matters is shaped like a stadium, a pill, or a perfect circle. The dominant visual gesture is the **oversized radius**: heroes carry 40-point corners, cards go fully pill-shaped, service images are cropped into circular orbits, and buttons either complete the pill or fit snugly at 20 points. There are almost no sharp corners anywhere on the page.

The second gesture is **orbit and trajectory**. Circular image masks don't sit still — they're connected by thin, hand-drawn-feeling orange arcs that span entire viewport widths, implying a constellation of services rather than a list. Each circle has a small attached "satellite" — a white micro-CTA holding an arrow icon — docked onto its perimeter like a moon. This is the most distinctive thing about Mastercard's current design language: the circles feel like they're in motion even though the page is still.

Typography is rendered entirely in **MarkForMC**, Mastercard's proprietary geometric sans. Headlines are set at a medium weight (500) with tight negative letter-spacing (-2%), giving them confidence without shouting. Body copy runs at the same family in a slightly lighter weight (450) — a weight you rarely see on the web, chosen because it reads softer than regular 400 without feeling thin. The whole system — warm cream surfaces, pill shapes, circular portraits, traced-orange orbits, black CTAs — feels simultaneously institutional (a 60-year-old payments network) and editorial (a modern brand magazine), which is exactly the tension Mastercard wants to hold.

A defining chromatic restraint: the brand red (`#EB001B`) and yellow (`#F79E1B`) of the Mastercard logo appear *only* inside the wordmark itself. The colour palette of the chrome is ink black on cream with one signal orange (`#CF4500`) reserved for cookie consent and legal compliance flows. This means a marketing page never feels like the brand's logo colours — it feels like the brand's editorial voice, with the logo itself acting as a small chromatic stamp at the very top of the page.

**Key Characteristics:**
- Warm cream canvas (`#F3F0EE`) replaces traditional white — every surface is tinted, never sterile
- Extreme border-radius as design language: 20px, 40px, 999px dominate; anything square is a cookie-banner third-party
- Circular image portraits with attached white satellite-CTAs and traced-orange orbital paths
- Ghost "watermark" headlines (cream-on-cream text at heading scale) layered behind circle portraits
- Black primary CTAs with 20px radius — the cookie-banner orange is kept to consent flows
- Floating pill-shaped navigation that docks below viewport top with rounded shoulders
- Eyebrow labels with a tiny accent dot + uppercase bold tracking — the section-category signal
- Dark warm-black footer (`#141413`) with 4-column link layout and large conversational headline
- MarkForMC weight 450 body — the load-bearing signature weight that creates the soft reading tone

## 2. Color Palette & Roles

### Primary
- **Mastercard Red** (`#EB001B`): the left circle of the Mastercard mark — used **only** in the brand logo, never as a UI colour
- **Mastercard Yellow** (`#F79E1B`): the right circle of the Mastercard mark — used **only** in the brand logo, never as a UI colour
- **Ink Black** (`#141413`): the warm near-black used for primary CTAs, headline text on cream, and footer surface. Slightly warm (the `13` blue value pulls toward the cream) so it never feels jet-black on the warm canvas

### Brand & Dark
- **Ink Black** (`#141413`): the load-bearing dark colour — CTA fill, footer surface, headline text. The whole system pivots around the contrast between this warm near-black and the cream canvas
- **Mastercard Logo Mark** (red + yellow combined): the sole place the brand's red and yellow appear together; locks the identity to the page without acting as a UI palette

### Accent
- **Signal Orange** (`#CF4500`): the burnt/rust CTA orange used on consent actions and eyebrow dots. Deeper than brand yellow, brighter than ink — the page's single aggressive colour, used sparingly
- **Light Signal Orange** (`#F37338`): a lighter carrot orange used for carousel active indicators and decorative orbital arcs. Always an attention cue, never body colour
- **Clay Brown** (`#9A3A0A`): the deep rust used for secondary link-style buttons (e.g., cookie details). Sits between ink and signal orange

### Surface & Background
- **Canvas Cream** (`#F3F0EE`): the page canvas. Warm, putty-toned, the default body background
- **Lifted Cream** (`#FCFBFA`): one step lighter than canvas — used for nested "raised" sections that want to feel like paper laid on paper
- **White** (`#FFFFFF`): reserved for floating navigation pill, modal cards, secondary button fills, and small satellite-CTA circles attached to image portraits
- **Soft Bone** (`#F4F4F4`): a cool-gray alternative surface used inside a handful of component subregions

### Interactive
- **Link Blue** (`#3860BE`): a deep, slightly dusty blue used for inline links and informational callouts. Saturated enough to read as a link without being neon
- **Link Visited**: rare; the site mostly suppresses visited state to maintain editorial uniformity

### Neutral Scale
- **Ink Black** (`#141413`): primary headline and body text
- **Charcoal** (`#262627`): slightly softer black used for some text alternates
- **Slate Gray** (`#696969`): muted secondary text — eyebrow label alternative, disabled states, "Privacy Choices" bottom-row text
- **Granite** (`#555555`) and **Graphite** (`#565656`): deeper grey for inline body accents and link alternates
- **Dust Taupe** (`#D1CDC7`): very muted cream-gray used for disabled or "whisper" text. Low contrast on cream; use only for subdued content

### Surface & Borders
- **Border default** (`#E8E4DE`): standard 1px hairline (cream-tinted)
- **Border soft** (`#F0EBE5`): editorial dividers between modules
- **Border strong** (`#141413`): button outlines (1.5px)
- **Border on dark** (`rgba(255,255,255,0.3)`): hairlines inside footer

### Shadow Colors
Mastercard uses shadows as atmospheric cushioning. The Level 2 shadow has 48px spread and only 8% opacity — barely exists as dark pixels but creates a "the card is breathing above the canvas" feel. Border lines are preferred over shadows for functional delineation (form inputs, footer divider).

### Semantic
- **Success** (`#067F5B`): rare success green — confirmation states only
- **Warning** (`#A35316`): rare warning amber-brown — advisory banners
- **Danger** (`#CF4500`): error states reuse signal orange
- **Info** (`#3860BE`): informational banners reuse link blue

### Gradient System
Mastercard uses no programmatic gradients in the core UI. The visual impression of "gradient" comes from two places:
- **Circular image portraits** where a warm-orange photo subject (a card, a sunflower, a beverage) fades to the cream canvas at its edge
- **Deep card shadows** on elevated content that create a soft halo beneath pill-shaped media

## 3. Typography Rules

### Font Family
- **Primary**: `MarkForMC` — Mastercard's proprietary geometric sans. Every headline, body paragraph, button, nav link, and footer link on the page
- **Secondary**: `MarkOffcForMC` — an "Official" cut used in a minority of contexts (legal text, some forms)
- **Fallback stack**: `SofiaSans, Arial, sans-serif` — Sofia Sans is a reasonable open-source stand-in; Arial is the final web-safe fallback

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| H1 (hero) | 64 | 500 | 1.0 (64px) | -1.28px (-2%) | 1:1 line-height for very tight vertical rhythm on multi-line hero |
| H2 (section) | 36 | 500 | 1.22 (44px) | -0.72px (-2%) | Used in ghost-watermark and section titles |
| H3 (card title) | 24 | 500 | 1.20 (28.8px) | -0.48px (-2%) | Titles inside service/solution cards |
| H4 (subhead) | 14 | 700 | 1.30 | 0 | Rarely used in marketing surfaces |
| Eyebrow (H5) | 14 | 700 | 1.0 | 0.56px (+4%) | Uppercase, paired with tiny accent dot ("• SERVICES") |
| Body paragraph | 16 | 450 | 1.40 (22.4px) | 0 | The half-step 450 weight is MarkForMC's signature |
| Nav link / Button label | 16 | 500 | 1.0 | -0.48px (-3%) | Tight, compact, no text-transform |
| Footer link | 14 | 450 | 1.43 (~20px) | 0 | Lighter weight on dark footer for airier density |
| Footer column header | 13 | 700 | 1.0 | 0.56px (+4%) | Uppercase, muted gray, short tracking |
| Consent button | 13 | 400 | 1.0 | 0.13px | Cookie/legal action label |
| Ghost watermark | 96 | 500 | 0.95 | -2px | Cream-on-cream layered behind portrait circles |

### Principles

- **Weight 450 is load-bearing.** Most brands use 400/500/700; Mastercard uses 450 for body copy, which creates an unusually soft reading tone. Replacing it with 400 flattens the identity.
- **Tight negative tracking on headlines (-2%)** gives display text its editorial density — the words lock together rather than breathe.
- **Uppercase tracking only on the eyebrow scale** (14px / 700 / +4% tracking). Don't use uppercase anywhere else; no shouty section titles.
- **One-font system.** Resist the urge to add a second typeface for contrast. The contrast comes from scale, weight, and letter-spacing, not from a serif or display accent.
- **Line-height ratio drops with size.** H1 is 1:1, H3 is 1.2, body is 1.4. Tight display, comfortable reading.

### Note on Font Substitutes

MarkForMC is proprietary and licensed. When rebuilding without access to the original:
- **Sofia Sans** (Google Fonts) is the closest open-source match — already in Mastercard's declared fallback stack
- **Inter** at weights 450/500/700 works as a generic stand-in; expect slightly taller x-height and looser letter shapes
- **Neue Haas Grotesk** or **Geist** can approximate the geometric feel for commercial projects
- Whichever substitute is used, preserve the **-2% letter-spacing on headlines** and the **450 body weight** (use `font-weight: 450` with variable fonts, or substitute `font-weight: 400` and tighten letter-spacing by ~-0.5% to compensate)

## 4. Component Stylings

### Buttons

**`button-ink-pill`** — Primary, solid warm-black pill on cream
- Background: Ink Black (`#141413`)
- Text: Canvas Cream (`#F3F0EE`) — not pure white
- Border: 1.5px solid Ink Black (same as bg, creates crisp edge)
- Radius: 20px
- Padding: 6px 24px
- Font: MarkForMC 16/500 with -0.32px letter-spacing
- Default: solid warm-black pill
- Active / pressed: subtle inward-shrink or 2px offset (not a hover variant)
- Use: all marketing CTAs in the page body ("Learn more", "Explore", "Discover")

**`button-outline`** — Secondary outlined pill
- Background: White (`#FFFFFF`)
- Text: Ink Black (`#141413`)
- Border: 1.5px solid Ink Black
- Radius: 20px
- Padding: 6px 24px
- Font: MarkForMC 16/450 with 1.30 line-height
- Default: white-on-cream pill with crisp ink outline
- Active: subtle compression
- Use: secondary actions paired with a primary, or standalone utility CTAs

**`button-consent`** — Consent / signal orange pill
- Background: Signal Orange (`#CF4500`)
- Text: White (`#FFFFFF`)
- Border: 0
- Radius: 24px
- Padding: 1px 30px (very tight vertical, wide horizontal)
- Font: MarkForMC 13/400 with 0.13px letter-spacing
- Use: cookie consent, privacy preference, and other legally-distinct confirmations
- **Do not** use this orange for marketing CTAs — it reads as a compliance colour

**`button-satellite`** — Circular micro-CTA
- Background: White (`#FFFFFF`)
- Icon: Ink Black arrow (`→`) at ~20px
- Border: none
- Radius: 50% (perfect circle)
- Size: ~50–60px diameter
- Shadow: none or very subtle (the portrait's shadow carries the elevation)
- Default: docks onto the bottom-right edge of a circular portrait, protruding partway outside the portrait's circle
- Use: primary entry point into service/solution cards; always paired with circular portrait

**`button-icon-circle`** — Icon-only circular button (carousel, play/pause)
- Background: transparent or white
- Icon: 10–20px centred
- Border: 1px solid Ink Black (when on cream) or none (when over media)
- Radius: 50%
- Size: 40px diameter minimum for carousel; 80px for hero video play
- Use: carousel pagination/play-pause, hero video play, search toggle

### Cards & Containers

**`hero-media-frame`** — Stadium-shape hero
- Background: dark video or full-bleed imagery (typically black `#000000` or `#2B2B2B` behind video)
- Radius: 40px all corners (creates a stadium shape on wide viewports)
- Width: ~full viewport minus ~48px gutter on each side
- Height: ~60–70% of viewport
- Shadow: none (sits directly on canvas)
- Corners: the extreme 40px radius on a media element is the most iconic Mastercard gesture — do not round less

**`service-portrait`** — Service / solution circular card
- Shape: perfect circle (radius 50%) or ellipse (radius 999px)
- Diameter: 260–340px desktop; ~220px mobile
- Image crop: square source, cropped to circle
- Attached: white satellite circular CTA docked bottom-right, ~40% outside the portrait
- Eyebrow below: accent dot + uppercase label ("• SERVICES", "• SOLUTIONS")
- Title below: H3 (24/500 with -2% tracking), 1–2 lines max
- Decorative orbit: thin ~1px Light Signal Orange curved line spanning from this card outward to the next, implying connection

**`pill-carousel-card`**
- Radius: 9999px (full pill) or 40px corners (rounded stadium)
- Width: ~40–60% of viewport
- Height: ~380–420px (portrait-pill orientation)
- Content: full-bleed photography with small overlaid chip labels
- Chip inside: white pill (~999px radius), Ink Black text, padding 8px 20px, used for category tags like "Story"
- Large inline CTA inside: Ink Pill button, oversized (padding 16px 40px, radius 40px)

**`ghost-watermark-text`** — Cream-on-cream layered headline
- Font: MarkForMC 72–128px / weight 500 / -2% tracking
- Colour: Canvas Cream slightly darkened (`#E8E2DA` or similar)
- Position: layered behind portrait circles, bleeding off viewport edge
- Purpose: sets section theme without competing with foreground copy

### Inputs & Forms

Minimal form surface on the marketing page. The search input in the nav header:
- Initial: 48px circular button with magnifier icon
- Expanded: horizontal input field, border 1px solid Ink Black at ~50% opacity, radius 999px, padding 12px 24px, white background

**Country/language selector (footer)**
- Background: Ink Black
- Text: White
- Border: 1px solid `rgba(255,255,255,0.4)`
- Radius: 999px (full pill)
- Icon: downward chevron on the right

### Navigation

**Floating Nav Pill (desktop)**
- Container: white-to-translucent-white pill floating below the very top of the viewport with ~24px top margin
- Radius: 999px (full pill)
- Padding: ~16px 40px internal
- Shadow: very soft (`rgba(0, 0, 0, 0.04) 0 4px 24px 0`) — just enough to lift it off the cream canvas
- Content: Mastercard logo left, primary link group centre ("For you", "For business", "For the world", "For innovators", "News and trends"), search icon right
- Link spacing: ~48–56px gap between primary links
- Link style: Ink Black, weight 500, 16px, no underline, no pill surround until active

**Mobile Nav**
- Same pill shape collapsed to: logo + hamburger + search icon only
- Menu opens into full-screen overlay with primary links stacked vertically

### Image Treatment

- **Aspect ratios used**: 1:1 (all service portraits — cropped to circle), ~3:4 or ~4:5 (carousel pill cards), 16:9 or wider (hero video frame)
- **Full-bleed vs padded**: hero is viewport-wide with gutters; service portraits centred in their column with generous whitespace; footer imagery rare
- **Masking**: aggressive circular masking is the defining treatment — square source images are cropped to perfect circles. Never use rectangular service imagery.
- **Lazy loading**: standard `loading="lazy"` with a soft blur-up transition from a cream-tinted placeholder, preserving the warm palette during load

### Decorative Orbital Lines

A signature motif: thin (~1–1.5px) single-weight curved lines in Light Signal Orange (`#F37338`) tracing arcs between circular portraits. These lines:
- Imply connection between service cards without literal arrows
- Span widths from ~200px up to full-viewport arcs
- Feel hand-drawn (subtle irregularity) rather than perfect CSS curves
- Appear only in sections with circular portrait content — never on pill sections, never in footer

### Footer

- Background: Ink Black (`#141413`)
- Text: White
- Padding: 48px horizontal / 100px top / 148px bottom (very tall bottom space)
- Structure: large conversational H2 ("We're always here when you need us") left-aligned, then 4-column link grid below
- Column headers: uppercase, muted, weight 700, +4% tracking
- Link rows: white, weight 450, 14px; entries prefixed with small icon (support bubble, card, map pin, question mark) for "NEED HELP?" column
- External link marker: small upper-right arrow (`↗`) after link text
- Bottom row (below 1px white-at-opacity divider): copyright + privacy small-print + country-language pill dropdown + four social icons (LinkedIn, Facebook, X, YouTube)

## 5. Layout Principles

### Spacing System
- **Base unit**: 8px (confirmed by computed styles)
- **Scale**: 8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 (powers of 8)
- **Section vertical padding**: ~96–128px between major sections on desktop; ~48–64px on mobile
- **Card internal padding**: 32–40px on desktop, ~24px on mobile
- **Nav top margin**: ~24px from viewport top (the pill floats, doesn't touch)

### Grid & Container
- **Max content width**: ~1200–1280px centred, with ~48–100px horizontal gutter
- **Column pattern**: 12-column implied, but practical layouts use 2-up asymmetric (large headline left, supporting text right), 1-up full-bleed (hero, video), or staggered single-portrait placement (service cards in varying grid positions creating the "constellation" feel)
- **Footer grid**: 4 equal columns on desktop, collapses to single column accordion on mobile

### Whitespace Philosophy

Mastercard treats whitespace as structure, not absence. A typical service section has:
- A ghost headline occupying the top ~40% of the section (mostly empty cream)
- A single circular portrait positioned ~60% down, asymmetric to left or right
- ~300–500px of blank canvas between the portrait and the next section

This deliberate emptiness tells the eye "slow down, read one thing at a time" — the opposite of dense dashboard UIs.

### Section Cadence

The homepage scroll pattern:
1. Floating nav pill (always visible, lifts on scroll)
2. Hero stadium-frame (40px radius video container)
3. Section ribbon: ghost watermark + circular portrait + satellite + orbital arc
4. Pill carousel section (story / news cards)
5. Section ribbon: another portrait + arc to next
6. Feature grid (lifted-cream cards on canvas-cream)
7. Footer (ink black with conversational H2 + 4-column grid)

## 6. Shapes & Radius Scale

| Radius | Use |
|--------|-----|
| 3–6px | Tiny decorative elements, cookie banner micro-chips |
| 20px | Primary and secondary body CTAs (the signature button radius) |
| 24px | Consent/orange pill buttons, modal inner chips |
| 40px | Hero media frames, large section container corners, H2 pill labels |
| 50% | Circular portraits, icon-only buttons, satellite CTAs |
| 99px / 999px / 9999px | Full pill shapes — navigation, carousel cards, footer country selector, primary inline chips |

The scale is unusual: most systems use 4/8/12/16. Mastercard skips those and commits to **either small (≤6), medium-large (20–40), or full-pill (99+)**. The middle ground of 8–12 is absent, which is why the UI feels either "precise and utility" or "soft and editorial" with no in-between.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | No shadow | Default — 95% of surfaces sit directly on cream canvas |
| 1 | `rgba(0, 0, 0, 0.04) 0 4px 24px 0` | Floating nav pill — barely-there lift |
| 2 | `rgba(0, 0, 0, 0.08) 0 24px 48px 0` | Hero media frames, elevated cards — soft large-radius halo |
| 3 | `rgba(0, 0, 0, 0.25) 0 70px 110px 0` | Rare; dramatic elevation on a feature tile |

### Shadow Philosophy

Mastercard uses shadows as **atmospheric cushioning**, not directional light. The Level 2 shadow has a 48px spread and only 8% opacity — it barely exists as dark pixels but creates a "card is breathing above the canvas" feel. There are almost no hard-edged, tight shadows anywhere in the system. Border lines are preferred over shadows for functional delineation (form inputs, footer divider).

### Decorative Depth
- **Orbital arcs** (Light Signal Orange, ~1px): trace connective paths across sections
- **Ghost watermark headlines**: cream-on-cream text gives sections an almost-pressed-paper quality
- **Circle-image fade**: warm-toned photography at the edge of circular portraits dissolves into the canvas, implying soft atmospheric depth

## 8. Interaction & Motion

### Easing Curves
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — most colour and opacity transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — satellite-CTA expand on hover
- **Orbital**: `cubic-bezier(0.16, 1, 0.3, 1)` — orbital arc draw-in animation

### Duration Buckets
- **Fast** (150ms): button :active state
- **Standard** (250ms): satellite CTA expand on hover
- **Slow** (400ms): pill-carousel snap settle
- **Cinematic** (800ms): orbital arc stroke draw-in on viewport entry

### Per-Component Motion

**Ink-pill button**
- Default → :active: subtle inward shrink (`scale(0.98)`) over 150ms, or 2px offset
- No hover-state lift — buttons remain grounded

**Satellite CTA**
- Hover: circle expands 56px → 60px and arrow translates 2px diagonally over 250ms ease-emphasized
- Click: arrow translates further with elastic ease, button colour holds

**Orbital arc**
- On viewport entry: stroke-dashoffset animates from `length` to 0 over 800ms ease-orbital, drawing the arc from start to end

**Carousel pill rail**
- Horizontal scroll-snap with snap-stop
- Snap settle: 250ms ease-emphasized
- Active indicator transitions colour from default to Light Signal Orange

**Hero media frame**
- No hover transform — the 40px-radius container stays put
- Video controls fade in on hover over 200ms

### Reduced Motion Strategy

`@media (prefers-reduced-motion: reduce)`:
- Orbital arc draw-in: becomes instant fade-in over 200ms
- Satellite expand: preserved at reduced amplitude (56 → 58px)
- Carousel snap: preserved (functional behaviour)
- Hero ken-burns (if used): suppressed

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | WCAG Level |
|------|-------|------------|
| `#141413` text on `#F3F0EE` cream | 14.6:1 | AAA |
| `#F3F0EE` cream on `#141413` ink button | 12.5:1 | AAA |
| `#FFFFFF` on `#CF4500` consent | 4.9:1 | AA at body, AAA at large |
| `#3860BE` link on `#F3F0EE` | 5.4:1 | AA at body |
| `#696969` mute on `#F3F0EE` | 4.7:1 | AA at body |

### Focus Indicators
- 2px solid `#141413` outline ring with 2px outline-offset
- Applied to all focusable: nav links, search button, primary CTAs, satellite CTAs, footer links
- The ring uses ink black rather than browser-default blue, preserving chromatic discipline

### ARIA Patterns
- Circular portraits use `role="link"` with descriptive `aria-label` (e.g., "Explore Services for Innovators")
- Satellite CTAs are decorative when paired with portrait link — `aria-hidden="true"`
- Orbital arcs: `aria-hidden="true"` SVG, decorative connection
- Eyebrow dots: `aria-hidden="true"` so screen readers announce the eyebrow text only
- Ghost watermark headlines: `aria-hidden="true"` to avoid duplicate announcement with foreground H2
- Country/language pill uses `<select>` semantically with custom styling for keyboard accessibility

### Keyboard Navigation
- Tab cycles: nav pill links → search button → primary CTA → service portraits (which act as links) → satellite CTAs → footer columns
- Skip-link present at very top: "Skip to main content"
- Carousel arrow keys: left/right scrub the pill carousel
- Escape: closes mobile menu overlay
- Modal focus-trap: focus stays within modal until dismissed

### Screen Reader Hints
- Photography supplies meaningful `alt` (e.g., "Person paying with contactless card at a coffee shop")
- Decorative-only photography uses `alt=""`
- Portrait-link `aria-label` describes the destination, not the image content
- Eyebrow text is announced as part of the link label, not separately

### Reduced Motion Handling
Detailed in §8. The system respects `prefers-reduced-motion: reduce` and disables orbital arc animations while preserving structural transitions.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | ≤767px | Nav pill shows logo + menu + search only; primary links hide behind hamburger; service portraits stack single-column centred; hero headline drops 64 → ~40px; footer columns collapse to vertical accordion |
| Tablet | 768–1023px | Nav pill shows 2–3 primary links truncated; service portraits arrange 2-up; hero headline ~48px |
| Desktop | ≥1024px | Full nav with 5 primary links centred; service portraits asymmetrically placed with decorative orbital lines; hero headline 64px |
| Wide | ≥1440px | Content max-width caps at ~1280px; gutters grow symmetrically; orbital lines extend further |

### Touch Targets
All interactive elements comfortably exceed 44×44px. The satellite CTA (circle + arrow) is ~50–60px. The nav pill buttons are ~48px tall. Mobile hamburger and search are 48×48px. No link or button drops below 40px in any breakpoint.

### Collapsing Strategy
- **Nav**: full pill → compact pill with hamburger. Pill shape is preserved across breakpoints — always rounded, always floating
- **Service grid**: asymmetric constellation → 2-up → 1-up stack. Orbital arcs are removed on mobile (they only work with asymmetric placement)
- **Spacing**: section vertical padding compresses from 128 to 48px on mobile
- **Content**: two-column hero (headline left / supporting text right) becomes stacked (headline top, supporting text below)
- **Footer**: 4 columns → 1 column accordion with chevron toggles per section

### Image Behavior
Circular portraits scale proportionally (maintaining the perfect circle at every size). Hero video frames maintain their 40px radius at every breakpoint, but the frame itself shrinks with the viewport. Lazy loading is standard with a cream-tinted blur-up placeholder, preserving the palette during load.

## 11. Content & Voice

### Tone

The voice is **institutional-but-warm**. Mastercard writes like a 60-year-old payments network that has decided to publish a magazine — confident, slightly editorial, never SaaS-y, never trendy. The brand voice is the soft 450-weight body type translated into prose: present, considered, not aggressive.

### Microcopy Patterns
- **Button verbs**: "Learn more", "Explore", "Discover", "Get in touch", "View details" — institutional verbs, never "Get started" or "Try free"
- **Headline structure**: editorial declarations, often present-tense and human-scale ("We're powering tomorrow's commerce", "Connecting people for good")
- **Body copy**: confident assertions backed by data; medium sentences with editorial cadence
- **Error messages**: "We weren't able to complete your request. Please try again." — calm, never apologetic, never blaming
- **Success confirmations**: "You're subscribed" or "Form submitted" — terse, professional

### Empty States
Empty content blocks say "No updates at this time" rather than "Nothing here yet" — the brand never breaks character with playful empty-state copy.

### CTA Verb Conventions

Mastercard uses institutional-imperative verbs:
- Learn more
- Explore
- Discover
- View details
- Get in touch
- Read full story
- Accept all (consent only)

It does *not* use:
- Get started (too SaaS)
- Sign up free (too trial-product)
- Try now (too aggressive)
- Join us! (too excited; punctuation rejected)

## 12. Dark Mode & Theming

**Mastercard is light-only — no dark mode variant.** The brand commits to the warm cream canvas as its primary surface; the footer ink (`#141413`) is structural surface contrast within the light theme, not a separate mode.

### Theming Notes for Derivatives

If you are adapting this system for a brand that needs a true dark mode:
- Swap `#F3F0EE` cream → `#1a1816` (warm dark — preserves the warmth)
- Swap `#141413` ink → `#F3F0EE` (the cream becomes the dark-mode text)
- Swap `#FCFBFA` lifted cream → `#22201d` (slightly raised dark)
- Signal orange (`#CF4500`) holds — it reads on dark
- Light signal orange (`#F37338`) for orbits holds at slightly higher saturation
- Photography: shift toward warm-tone subjects (sunsets, golden-hour) so the inversion preserves brand warmth

## 13. Lineage & Influences

Mastercard's design language draws from:

- **Pentagram's Mastercard 2016 brand refresh** (Michael Bierut) — the wordmark drop, the circle-on-circle logo modernization. https://www.pentagram.com/work/mastercard
- **Saul Bass / Ivan Chermayeff mid-century corporate identity** — the discipline of one strong colour + one typeface + ruthless restraint
- **The New Yorker editorial design** — large display, calm body, tight tracking. https://www.newyorker.com
- **Conde Nast magazine art direction** — circular portraits, eyebrow labels with dots, the constellation-of-services layout
- **Cooper Hewitt design exhibitions** — orbital geometric motifs, hand-drawn arc treatments
- **Apple's Apple One product page** — service-as-circle-with-satellite-CTA pattern that Mastercard absorbs and refines

What Mastercard rejects:
- Stripe-style developer-tool dense feature grids
- Material Design's elevation-tier system (shadows are atmospheric, not lighting)
- Trendy gradient-heavy SaaS aesthetics
- Glassmorphism / frosted-glass effects
- Round-corner softness in the 8–12px range — Mastercard skips this entirely

### Named Influences
- Pentagram Mastercard rebrand — https://www.pentagram.com/work/mastercard
- Michael Bierut typographic systems — https://www.pentagram.com/about/michael-bierut
- The New Yorker editorial design — https://www.newyorker.com
- Apple One service page constellation — https://www.apple.com/apple-one/
- Cooper Hewitt design language — https://www.cooperhewitt.org

## 14. Do's and Don'ts

### Do

- Use Canvas Cream (`#F3F0EE`) as the default body background — never pure white
- Mask service/feature imagery as perfect circles, not rectangles or rounded rectangles
- Attach a white satellite CTA to the bottom-right of each circular portrait
- Set headlines in MarkForMC weight 500 with -2% letter-spacing
- Use weight 450 (not 400) for body paragraphs — this is the load-bearing signature weight
- Keep primary CTAs as Ink Black pills (20px radius) with cream text
- Use Signal Orange only on consent, legal, or compliance actions
- Float the nav as a rounded white pill below the viewport top, not flush at y=0
- Build page rhythm from three surface tones: canvas cream → lifted cream → ink footer
- Use thin Light Signal Orange arcs between service cards to imply connection
- Pair every eyebrow with a tiny accent dot — it's the brand's identity gesture

### Don't

- Don't use pure white as a page background — it breaks the warm editorial tone
- Don't round image frames at 8–16px — Mastercard either uses full-pill, 40px, or full-circle. In-between radii look generic
- Don't use Signal Orange for marketing CTAs — it reads as cookie-consent orange and dilutes the legal colour signal
- Don't mix typefaces — no serif accent, no script, no secondary display font
- Don't crowd the nav with more than six top-level links — the pill is meant to feel airy
- Don't drop hard shadows — all elevation should use 48px+ spread and ≤10% opacity
- Don't use uppercase for anything larger than the 14px eyebrow label
- Don't omit the tiny accent dot before eyebrow labels — it's the identity
- Don't place circular portraits on a grid — their magic comes from asymmetric placement
- Don't use the brand red `#EB001B` or yellow `#F79E1B` outside the logo mark — they are NOT UI colours

## 15. Agent Prompt Guide

### Quick Color Reference
- Primary CTA: Ink Black (`#141413`) — warm near-black for primary pill buttons and footer
- Background: Canvas Cream (`#F3F0EE`) — warm putty body canvas, never pure white
- Lifted surface: Lifted Cream (`#FCFBFA`) — one step lighter for nested sections
- Heading text: Ink Black (`#141413`)
- Body text: Ink Black (`#141413`) at weight 450
- Muted text: Slate Gray (`#696969`)
- Signal / Consent: Signal Orange (`#CF4500`) — reserve for cookie consent and legal actions
- Accent arc: Light Signal Orange (`#F37338`) — orbital decorative lines only
- Border / Outline: Ink Black at 1.5px for pill buttons; 1px at low opacity elsewhere
- Footer: Ink Black (`#141413`) with White text

### Example Component Prompts

- "Create a circular portrait card 300px in diameter, with a square photograph cropped to a perfect circle. Attach a 56px white satellite button with a dark arrow icon at the bottom-right, so it protrudes ~40% outside the portrait. Below the portrait, add an eyebrow label with a Light Signal Orange dot and uppercase 'SERVICES' text in MarkForMC weight 700 at 14px. Below the eyebrow, set a 24px / weight 500 title in Ink Black."
- "Design a primary CTA button: Ink Black (`#141413`) background, Canvas Cream (`#F3F0EE`) text, 20px border-radius, 6px vertical and 24px horizontal padding, MarkForMC font at 16px weight 500 with -2% letter-spacing."
- "Build a floating navigation pill: white background with `rgba(0, 0, 0, 0.04) 0 4px 24px 0` shadow, 999px border-radius, ~16px vertical and 40px horizontal internal padding. Position it 24px below the viewport top, centred, with the Mastercard logo at the left, five primary links centred with 48px gap, and a circular 48px search button at the right."
- "Create a hero media frame: 40px border-radius on all corners, full viewport width minus 48px gutters, ~60% viewport height, dark background for video content. Place it directly on the cream canvas with no shadow."
- "Design a footer: Ink Black (`#141413`) background, white text, 4-column link grid with uppercase muted column headers at 14px weight 700 +4% tracking. Include a large conversational H2 above the grid, a 1px white-at-30%-opacity horizontal divider below, and a bottom row with copyright, legal small-print links, a pill-shaped country selector, and four social icons."
- "Create an orbital arc: thin 1.5px stroke in Light Signal Orange (`#F37338`), curved hand-drawn path connecting two circular portraits across ~600px of viewport width. SVG with stroke-dashoffset animated to draw in over 800ms when scrolled into view."

### Iteration Guide

When refining existing screens generated with this design system:
1. Focus on ONE component at a time — don't redesign multiple surfaces in parallel
2. Reference specific colour names AND hex codes from this document
3. Use natural language ("warm putty cream", "stadium pill", "circular portrait with satellite CTA") alongside technical values
4. Describe the desired "feel" (editorial, soft, institutional) alongside specific measurements
5. When in doubt, reach for one of three radii: 20px (buttons), 40px (hero/stadium), or 999px (pill/nav)
6. Default backgrounds to Canvas Cream (`#F3F0EE`), not white — this single change shifts the entire mood toward Mastercard
7. Use weight 450 for body — this is the most-overlooked detail when reproducing the brand
8. Keep Signal Orange scarce — if more than one orange element appears per fold, ask whether one should drop to Ink Black instead
