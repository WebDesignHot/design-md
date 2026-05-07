---
name: NVIDIA
tagline: Engineering-grade canvas — pure black hero / paper-white body / one violently saturated `#76b900` green that carries every CTA and corner square.
updated_at: 2026-05-04T14:57:35+12:00
published_at: 2026-05-04T14:57:35+12:00
author: webdesignhot
source_url: https://www.nvidia.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [media]
tags: [enterprise, sans, tech, dense, dark, square, technical]
preview_swatch: ['#000000', '#76b900', '#ffffff']
related: [tesla, hashicorp, datadog]
description: 'NVIDIA''s marketing system is built like a piece of engineering documentation that learned graphic design. Every page is a structured cascade of dense, factual content arranged on a paper-white grid (`#ffffff`), framed top and bottom by deep-black hero / footer chapters (`#000000`), connected by a single, almost violently saturated **NVIDIA Green** (`#76b900`) that carries every primary CTA, every active state, every link affordance on dark surfaces, and the small decorative corner squares that mark out card containers. Type runs **NVIDIA-EMEA** at weights 400 and 700 across a 17-tier hierarchy from 10px utility through 48px hero. Geometry is hyper-angular: `2px` radius on every interactive element, hairline gray rules on every card border, and a tight 8-px-base spacing rhythm. There is no decorative gradient, no atmospheric mesh, no soft drop shadow — just black, white, gray, and green stacked into a structured editorial grid.'

colors:
  bg: '#ffffff'                  # canvas — paper-white body
  bg-hero: '#000000'             # surface-dark — hero / footer chapters
  surface: '#ffffff'              # cards inherit canvas
  surface-soft: '#f7f7f7'        # breadcrumb strip, sub-nav, comparison panels
  surface-dark: '#000000'        # primary nav, dark CTA strips
  surface-dark-elev: '#1a1a1a'   # nested dark panels inside footer
  text: '#000000'                # ink — headlines and body on canvas
  text-strong: '#000000'
  text-body: '#1a1a1a'           # long-form paragraph where pure black is too heavy
  text-muted: '#757575'          # mute — metadata, breadcrumb separators
  text-soft: '#898989'           # stone — least-emphasis, disabled
  text-faint: '#a7a7a7'          # ash — disabled icon, faint utility
  text-on-dark: '#ffffff'        # on-dark — primary text on black
  text-on-dark-mute: 'rgba(255,255,255,0.7)'  # secondary footer link on black
  brand: '#76b900'               # NVIDIA Green — the entire system's accent
  brand-active: '#5a8d00'        # primary-dark — pressed state
  brand-pale: '#bff230'          # accent-green-pale — rare highlight tint
  on-brand: '#000000'            # black on green — high contrast
  border: '#cccccc'              # hairline — 1px card border, table rule
  border-strong: '#5e5e5e'       # hairline-strong — divider on dark surfaces
  border-soft: '#e0e0e0'         # rare lighter inline divider
  link: '#0046a4'                # link-blue — the only blue, inline body anchors only
  link-hover: '#0033b8'
  scrim: 'rgba(0,0,0,0.6)'       # modal backdrop on dark hero gradient
  hero-overlay: 'rgba(0,0,0,0.5)' # gradient overlay on hero photography
  success: '#3f8500'             # success-deep — positive confirmation where brand green clashes
  success-soft: '#e8f3d3'        # pale success surface
  warning: '#df6500'             # caution callouts, deprecated banners
  warning-bright: '#ef9100'      # inverse warning on dark canvas
  warning-soft: '#feeeb2'        # accent-yellow-pale — soft documentation tip
  danger: '#e52020'              # error — validation, destructive
  danger-deep: '#650b0b'         # error-deep — pressed error
  danger-soft: '#fce4e4'
  accent-purple: '#952fc6'       # research / scientific computing editorial accent
  accent-purple-deep: '#4d1368'  # paired dark for purple lockups
  accent-purple-pale: '#f9d4ff'  # editorial wash background

typography:
  display:
    family: '"NVIDIA-EMEA", "NVIDIA Sans", Inter, Arial, Helvetica, sans-serif'
    weights: [400, 700]
    opentype-features: []
  body:
    family: '"NVIDIA-EMEA", "NVIDIA Sans", Inter, Arial, Helvetica, sans-serif'
    weights: [400, 700]
  mono:
    family: '"NVIDIA Sans Mono", "SF Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-xl:    { size: 48,   weight: 700, lineHeight: 1.25, tracking: '0',     family: display }
    display-lg:    { size: 36,   weight: 700, lineHeight: 1.25, tracking: '0',     family: display }
    heading-xl:    { size: 24,   weight: 700, lineHeight: 1.25, tracking: '0',     family: display }
    heading-lg:    { size: 22,   weight: 400, lineHeight: 1.75, tracking: '0',     family: display }
    heading-md:    { size: 20,   weight: 700, lineHeight: 1.25, tracking: '0',     family: display }
    heading-sm:    { size: 18,   weight: 700, lineHeight: 1.40, tracking: '0',     family: display }
    card-title:    { size: 17,   weight: 700, lineHeight: 1.47, tracking: '0',     family: display }
    body-md:       { size: 16,   weight: 400, lineHeight: 1.50, tracking: '0',     family: body }
    body-strong:   { size: 16,   weight: 700, lineHeight: 1.50, tracking: '0',     family: body }
    body-sm:       { size: 15,   weight: 400, lineHeight: 1.67, tracking: '0',     family: body }
    button-lg:     { size: 18,   weight: 700, lineHeight: 1.25, tracking: '0',     family: body }
    button-md:     { size: 16,   weight: 700, lineHeight: 1.25, tracking: '0',     family: body }
    button-sm:     { size: 14.4, weight: 700, lineHeight: 1.00, tracking: '0.144px', family: body }
    link-md:       { size: 15,   weight: 400, lineHeight: 1.50, tracking: '0',     family: body }
    caption-md:    { size: 14,   weight: 700, lineHeight: 1.43, tracking: '0',     family: body, transform: uppercase }
    caption-sm:    { size: 12,   weight: 400, lineHeight: 1.25, tracking: '0',     family: body }
    caption-xs:    { size: 11,   weight: 700, lineHeight: 1.00, tracking: '0',     family: body }
    utility-xs:    { size: 10,   weight: 700, lineHeight: 1.50, tracking: '0',     family: body, transform: uppercase }

radius:
  none: 0          # hero chapters, footer, dark CTA strips, primary nav
  xs: 1            # decorative micro-rules and inset accent strips
  sm: 2            # every interactive element — buttons, cards, inputs, pill tabs, badges
  full: 9999       # avatar circles, social-icon dots, brand wordmark icon

spacing:
  base: 8
  scale: [2, 4, 8, 12, 16, 24, 32, 64]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  utility-bar-height: 32
  hero-padding-vertical: 80

components:
  button-primary:
    bg: '#76b900'
    color: '#000000'
    radius: 2
    padding: '11px 24px'
    height: 44
    font: button-md
    use: 'Universal NVIDIA CTA — hero CTA, dark CTA strip, "Learn More", "Sign Up", "Get Started".'
  button-primary-active:
    bg: '#5a8d00'
    color: '#000000'
    radius: 2
    use: 'Pressed state — brand green dropped one notch.'
  button-outline:
    bg: 'transparent'
    color: '#000000'
    border: '2px solid #76b900'
    radius: 2
    padding: '11px 13px'
    use: 'Secondary on light canvas — clear pane bordered in NVIDIA Green. "Read the Documentation", "Watch the Video".'
  button-outline-on-dark:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #ffffff'
    radius: 2
    use: 'White-on-black variant in dark hero / footer CTA strips paired with primary green.'
  button-ghost-link:
    bg: 'transparent'
    color: '#76b900'
    radius: 0
    use: '"Learn More →" affordance with right chevron at the bottom of resource cards and section blocks.'
  button-disabled:
    bg: '#f7f7f7'
    color: '#a7a7a7'
    radius: 2
    use: 'Disabled — flat soft-gray.'
  pill-tab:
    bg: 'transparent'
    color: '#000000'
    radius: 2
    padding: '10px 18px'
    font: button-sm
    use: 'Inactive tab in segmented control filter strip ("Latest in AI Resources").'
  pill-tab-active:
    bg: '#000000'
    color: '#ffffff'
    radius: 2
    use: 'Active tab — flips fully inverted on selection.'
  text-input:
    bg: '#ffffff'
    color: '#000000'
    radius: 2
    padding: '12px 16px'
    height: 44
    border: '1px solid #cccccc'
    use: 'Default form field. Hairline border, square-ish corners.'
  text-input-focused:
    bg: '#ffffff'
    color: '#000000'
    radius: 2
    border: '2px solid #76b900'
    use: 'Focused state — border becomes 2px NVIDIA Green. The green border is the only focus signal in the system.'
  search-input:
    bg: '#ffffff'
    color: '#000000'
    radius: 2
    padding: '10px 16px'
    height: 40
    use: 'Used in the global search overlay — same chrome as text-input at 40px height with magnifier glyph at left.'
  product-card:
    bg: '#ffffff'
    color: '#000000'
    border: '1px solid #cccccc'
    radius: 2
    padding: '24px'
    use: '16:9 product image at top, card-title title, body-sm description, ghost-link "Learn More →" at bottom. Corner-square at top-left.'
  feature-card:
    bg: '#ffffff'
    color: '#000000'
    border: '1px solid #cccccc'
    radius: 2
    padding: '32px'
    use: 'Icon at top in NVIDIA Green, heading-md title, body-md body. Used in 3-up or 4-up grids ("Agentic AI", "Inference", "Conversational AI").'
  resource-card:
    bg: '#ffffff'
    color: '#000000'
    border: '1px solid #cccccc'
    radius: 2
    padding: '24px'
    use: 'Document-type badge-tag, 3:2 thumbnail, card-title title, body-sm description, ghost-link "Read More →".'
  hero-card-dark:
    bg: '#000000'
    color: '#ffffff'
    radius: 0
    padding: '80px 48px'
    font: display-xl
    use: 'Full-bleed 16:9 hero image with dark gradient overlay; copy slot at left. Single primary CTA + optional outline-on-dark.'
  cta-strip-dark:
    bg: '#000000'
    color: '#ffffff'
    radius: 0
    padding: '64px 48px'
    font: heading-xl
    use: '"Ready to get started?" bridge band — heading-xl headline + single CTA. Sits between content sections.'
  callout-stat:
    bg: '#ffffff'
    color: '#000000'
    border: '1px solid #cccccc'
    radius: 2
    padding: '32px'
    use: 'Massive display-lg numeric in NVIDIA Green ("4× faster training") + body-md caption beneath.'
  corner-square:
    bg: '#76b900'
    color: '#000000'
    radius: 0
    size: 12
    use: '12×12px solid green square anchored to a card corner — the brand''s signature ornamental motif.'
  utility-bar:
    bg: '#000000'
    color: '#ffffff'
    radius: 0
    height: 32
    font: caption-sm
    use: 'Right-aligned cluster: locale / Login / Account. Always at top of page.'
  primary-nav:
    bg: '#000000'
    color: '#ffffff'
    radius: 0
    height: 64
    font: body-strong
    use: 'NVIDIA wordmark left, centered nav row, right cluster (search + Login + green Get Started CTA).'
  breadcrumb-bar:
    bg: '#f7f7f7'
    color: '#1a1a1a'
    radius: 0
    height: 48
    font: caption-md
    use: 'Sits under primary nav on every interior page; chevron separators in mute.'
  sub-nav-strip:
    bg: '#f7f7f7'
    color: '#000000'
    radius: 0
    height: 56
    font: button-md
    use: 'Section-specific nav above content (Healthcare → Drug Discovery / Medical Imaging / Genomics).'
  badge-tag:
    bg: '#f7f7f7'
    color: '#1a1a1a'
    radius: 2
    padding: '4px 10px'
    font: caption-md
    use: 'Document type / category labels at top of resource cards ("WHITE PAPER", "WEBINAR", "BLOG").'
  footer-section:
    bg: '#000000'
    color: 'rgba(255,255,255,0.7)'
    radius: 0
    padding: '64px 48px'
    use: '6-column link grid + social-icon strip + locale + legal/privacy fine-print row in utility-xs uppercase.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 100        # button background transitions
  duration-standard: 200    # nav drawer slides
  duration-slow: 300        # hero fade-ins on scroll
  button-hover: 'background swap from #76b900 → slightly brighter / inverse-text contrast hold; 100ms.'
  card-hover: 'no transform — corner-square may grow ~1px or hairline border thicken to 2px in 100ms.'
  modal-enter: 'scrim fades 200ms + dialog 8px → 0 with ease-emphasized.'
  reduced-motion: 'respects prefers-reduced-motion: reduce — sticky nav 5px ambient shadow drops, no transforms.'

breakpoints:
  mobile-narrow: 320
  mobile: 480
  tablet: 768
  desktop-small: 1024
  desktop: 1280
  desktop-large: 1440
  ultrawide: 1920

shadows:
  none: 'none'
  ambient: 'rgba(0,0,0,0.3) 0 0 5px 0'   # the only documented shadow — sticky chrome only
  ring: '0 0 0 2px #76b900'              # focus ring stands in for hairline-strong
  hero-overlay: 'inset 0 0 0 100vh rgba(0,0,0,0.5)' # photographic legibility overlay
  modal: 'rgba(0,0,0,0.4) 0 16px 32px'

accessibility:
  contrast-text-on-bg: 21.0          # #000000 on #ffffff — AAA
  contrast-text-on-brand: 8.4        # #000000 on #76b900 — AAA
  contrast-muted-on-bg: 4.6          # #757575 on #ffffff — AA
  contrast-on-dark: 21.0             # #ffffff on #000000 — AAA
  focus-ring: '2px solid #76b900 — the green border that doubles as input-focused signal'
  reduced-motion-honored: true
  touch-target-min: 44               # button-primary holds 44px height standard
  keyboard-nav: 'Utility-bar → primary-nav → breadcrumb → sub-nav → main content → footer columns. Green focus border visible on every focused control.'

dark-mode: optional   # The hero / footer chapters are already dark; product surfaces have full Gray-100 dark theme. Marketing body stays light.
---

## 1. Visual Theme & Atmosphere

NVIDIA's marketing system is built like a piece of engineering documentation that learned graphic design. Every page is a structured cascade of dense, factual information arranged on a paper-white grid (`#ffffff`), framed top and bottom by deep-black hero / footer chapters (`#000000`). There is exactly one accent colour in the entire system, and it is doing all the work: **NVIDIA Green** (`#76b900`), used for every primary CTA, every active tab, every link affordance on dark surfaces, and the small decorative corner squares that mark out card containers. Nothing else competes for attention.

The system's character comes from extreme typographic restraint and an almost punishingly angular geometry. Every container, button, and image uses `2px` radius — barely-there but never zero — giving the system the precise, technical feel of CAD output rather than warm consumer software. Cards sit on plain canvas with a hairline `#cccccc` border (no shadow, no elevation), separated by tight 8-px-base spacing rhythm. Long-form pages stack 6–10 of these cards into multi-column technical grids without ever introducing decorative breaks.

The black-canvas hero and footer chapters are the system's "headline moments" — a single full-bleed photographic or 3D-rendered image (data-center hardware, neural-net visualisations, life-sciences microscopy) with a `display-xl` 48px headline laid in white, a single green CTA, and a small green corner square as the only ornamentation. Everything else is subordinate to the imagery and the headline.

There is no atmospheric mesh, no soft gradient, no tinted card background — black, white, gray, and green stacked rigorously. The result is a marketing surface that reads as engineering-grade rather than consumer-friendly, scaling from product cards to massive industry landing pages without ever bending its rules.

**Key Characteristics:**
- Single-accent system: NVIDIA Green carries every CTA, active state, decorative corner square, and the wordmark itself
- Two-mode surface architecture: black hero / footer chapters + paper-white body, alternating in a predictable rhythm
- Hyper-angular geometry: 2px radius on every interactive element. Never 0, never past 4
- NVIDIA-EMEA proprietary sans at weights 400 and 700, scaled across a 17-tier hierarchy from 10px utility through 48px hero
- Card library leans on hairline `#cccccc` borders rather than shadows for separation
- Signature decorative element: 12×12px green corner-square anchored to one corner of resource and feature cards
- Dense multi-column footer with 6 link columns on `#000000` — every page closes with the same global navigation
- Inline body links use `#0046a4` blue — the *only* blue in the system, never on chrome

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): Paper-white body of every page. Cards sit directly on it with hairline rules.
- **Black** (`#000000`): Hero chapter, dark CTA strips, footer, primary nav. The system's "frame" colour.
- **Ink** (`#000000`): Headlines and body text on canvas. Never softened — pure ink is part of the engineering voice.

### Brand & Dark
- **NVIDIA Green** (`#76b900`): The brand. Every primary CTA, every active state, every link on dark surfaces, every corner square, and the wordmark itself.
- **NVIDIA Green Dark** (`#5a8d00`): Pressed state for the primary button — a single notch deeper.
- **Surface Dark** (`#000000`): The "frame" colour for hero and footer.
- **Surface Dark Elev** (`#1a1a1a`): Nested dark panels inside the footer (column dividers, fine-print bar).

### Accent
- **Accent Green Pale** (`#bff230`): Rare highlight tint used in editorial callouts and decorative micro-blocks; never on chrome.
- **Accent Purple** (`#952fc6`): Research / scientific computing editorial accent — appears inside long-form articles, never on chrome.
- **Accent Purple Deep** (`#4d1368`): Paired dark for purple lockups.
- **Accent Purple Pale** (`#f9d4ff`): Wash background for editorial callouts.
- **Warning Soft** (`#feeeb2`): Documentation tip / soft callout fill.

### Interactive
- **Link** (`#0046a4`): Inline body anchor link on light canvas — the only blue in the system, reserved for prose-embedded hyperlinks.
- **Link Hover** (`#0033b8`): Hovered link state.
- **Focus** (`#76b900`): The 2px green border that doubles as input focus signal and button focus ring.
- **Disabled** (`#a7a7a7` text on `#f7f7f7` surface).

### Neutral Scale
- **Ink** (`#000000`) — display headlines, body
- **Body** (`#1a1a1a`) — long-form paragraph text where pure black is too heavy
- **Mute** (`#757575`) — metadata, breadcrumb separators, footer copyright
- **Stone** (`#898989`) — least-emphasis text, disabled state
- **Ash** (`#a7a7a7`) — disabled icon colour, faint utility text
- **On Dark** (`#ffffff`) — primary text on `#000000`
- **On Dark Mute** (`rgba(255,255,255,0.7)`) — secondary footer link text

### Surface & Borders
- **Canvas** (`#ffffff`) — page body
- **Surface Soft** (`#f7f7f7`) — breadcrumb strip, sub-nav, comparison panels, alternating row backgrounds
- **Surface Dark** (`#000000`) — hero, footer, dark CTA, primary nav
- **Surface Dark Elev** (`#1a1a1a`) — nested footer panel
- **Hairline** (`#cccccc`) — 1px card border, table rule, divider between footer link sections
- **Hairline Strong** (`#5e5e5e`) — 1px divider on dark surfaces (footer column rules, dark-mode card edges)

### Shadow Colors
NVIDIA's system has effectively no drop-shadow elevation in card or content surfaces. The only "shadow" is a subtle 5px ambient on sticky chrome bars (`rgba(0,0,0,0.3)`). Cards do not lift; cards are flat rectangles with hairline borders. Modal layers use a `rgba(0,0,0,0.4)` shadow at 16px blur as the only documented multi-layer shadow.

### Semantic
- **Error** (`#e52020` on pale `#fce4e4`) — validation messages, destructive confirmation
- **Error Deep** (`#650b0b`) — pressed state for error buttons
- **Warning** (`#df6500`) — caution callouts, deprecated banners
- **Warning Bright** (`#ef9100`) — inverse warning on dark canvas
- **Success Deep** (`#3f8500`) — positive confirmation where NVIDIA Green's saturation would clash. Never use brand green for success — they read as the same chrome.

## 3. Typography Rules

### Font Family

**Primary**: `NVIDIA-EMEA` — the proprietary brand sans-serif used across every text role on the site. Carries weights 400 (regular) and 700 (bold). Falls back through a long stack: `Inter` → `Arial` → `Helvetica` → `sans-serif`.

**Mono companion**: not surfaced on marketing chrome. Code samples appear inside developer documentation only and use `NVIDIA Sans Mono` / `SF Mono` / `Menlo` system fallbacks.

**Icons**: `Font Awesome 6 Pro` and `Font Awesome 6 Sharp` are used exclusively for iconography (chevrons, social glyphs, breadcrumb separators, search/menu icons) at sizes 14–22px. NVIDIA Green is the icon colour on light surfaces; white on dark.

**OpenType features**: NVIDIA does not aggressively use OpenType features. The face is used as-shipped — no `tnum`, no `ss01`, no decorative alternates. Hierarchy is built from size and weight (400 vs 700) with no italic, no medium weight, no decorative cuts.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-xl | NVIDIA-EMEA | 48 | 700 | 1.25 | 0 | — | Hero headline on dark hero card |
| display-lg | NVIDIA-EMEA | 36 | 700 | 1.25 | 0 | — | Section headline, large stat callout |
| heading-xl | NVIDIA-EMEA | 24 | 700 | 1.25 | 0 | — | Sub-section title, dark CTA-strip headline |
| heading-lg | NVIDIA-EMEA | 22 | 400 | 1.75 | 0 | — | Long-form intro paragraph that doubles as a heading |
| heading-md | NVIDIA-EMEA | 20 | 700 | 1.25 | 0 | — | Card group title, sub-nav anchor heading |
| heading-sm | NVIDIA-EMEA | 18 | 700 | 1.40 | 0 | — | Side-rail filter group, small section label |
| card-title | NVIDIA-EMEA | 17 | 700 | 1.47 | 0 | — | Resource card title, product card title |
| body-md | NVIDIA-EMEA | 16 | 400 | 1.50 | 0 | — | Body copy, default paragraph |
| body-strong | NVIDIA-EMEA | 16 | 700 | 1.50 | 0 | — | Inline emphasis, primary nav link, label |
| body-sm | NVIDIA-EMEA | 15 | 400 | 1.67 | 0 | — | Card description, secondary copy |
| button-lg | NVIDIA-EMEA | 18 | 700 | 1.25 | 0 | — | Hero primary CTA |
| button-md | NVIDIA-EMEA | 16 | 700 | 1.25 | 0 | — | Standard primary / secondary button |
| button-sm | NVIDIA-EMEA | 14.4 | 700 | 1.00 | 0.144px | — | Compact pill tab, in-card secondary CTA |
| link-md | NVIDIA-EMEA | 15 | 400 | 1.50 | 0 | — | Inline anchor link in body prose |
| caption-md | NVIDIA-EMEA | 14 | 700 | 1.43 | 0 | uppercase | Eyebrow over section heading, breadcrumb |
| caption-sm | NVIDIA-EMEA | 12 | 400 | 1.25 | 0 | — | Footnote copy, metadata, table caption |
| caption-xs | NVIDIA-EMEA | 11 | 700 | 1.00 | 0 | — | Pill chip label, utility-bar text |
| utility-xs | NVIDIA-EMEA | 10 | 700 | 1.50 | 0 | uppercase | Legal fine-print bar at the very bottom |

### Principles

- **Brand-locked face.** NVIDIA-EMEA at every level — no serif, no display variant, no mono, no italic. This is the engineering-grade discipline.
- **Hierarchy by weight + size, never by colour.** Body stays `#000000` or `#1a1a1a` regardless of context. Colour is reserved for emphasis (NVIDIA Green on links over dark surfaces, link-blue inline).
- **Two weights only.** 400 (regular) and 700 (bold). The system rejects medium / semibold weights entirely — the contrast between 400 and 700 is what carries hierarchy at body sizes.
- **Tight line-heights at display, generous at body.** 1.25 at display-xl through heading-md, 1.50 at body, 1.67 at body-sm. Proportional to size with one exception: heading-lg sits at 1.75 because it doubles as long-form intro paragraph.
- **Uppercase only on caption-md / utility-xs.** The eyebrow (caption-md) and legal fine-print (utility-xs) are uppercase; everything else is sentence case. NVIDIA does not use all-caps on body, headlines, or button labels.
- **Inter is the closest open-source substitute** for NVIDIA-EMEA. Weights 400 / 700 only; the metric difference at body sizes is ~2%. Avoid Helvetica Now or Helvetica Neue substitutes — their slightly tighter cap heights drift away from the brand's geometry.

## 4. Component Stylings

### Buttons

**`button-primary`** — The universal NVIDIA CTA. Background `#76b900`, text `#000000`, type `button-md` (16/700), padding `11px 24px`, height 44px, radius 2px. The single most-repeated component in the system: hero CTA, dark CTA strip, "Learn More" on every card group, "Sign Up" / "Get Started" on every long-form page bottom. Pressed flips to `#5a8d00`. Black-on-green is the high-contrast pairing — green-on-white would clash with photo content.

**`button-outline`** — Secondary on light canvas. Background transparent, text `#000000`, 2px solid `#76b900` border, type `button-md`, padding `11px 13px`, radius 2px. The system's distinctive secondary CTA: a clear pane bordered in NVIDIA Green. Used for "Read the Documentation", "Watch the Video", "Compare Products" — second-tier actions that still earn the brand color.

**`button-outline-on-dark`** — White-on-black variant. Background transparent, text `#ffffff`, 1px solid `#ffffff`, radius 2px. Used in dark hero / footer CTA strips paired with a primary green button.

**`button-ghost-link`** — Inline arrow link. Text `#76b900` with a small right-arrow icon, type `button-md`, no background, no border, radius 0. "Learn More →" affordance sitting at the bottom of resource cards and section blocks.

**`button-disabled`** — Background `#f7f7f7`, text `#a7a7a7`, radius 2px — flat soft-gray. No interaction.

### Tabs & Chips

**`pill-tab`** + **`pill-tab-active`** — Default: transparent background, text `#000000`, type `button-sm`, padding `10px 18px`, radius 2px. Active: background `#000000`, text `#ffffff` — the tab flips inverted on selection. Used in the "Latest in AI Resources" filter strip and similar segmented controls.

**`badge-tag`** — Background `#f7f7f7`, text `#1a1a1a`, type `caption-md` (14/700/uppercase), padding `4px 10px`, radius 2px. Document-type / category labels at the top of resource cards ("WHITE PAPER", "WEBINAR", "BLOG").

### Cards

**`product-card`** — Container: `#ffffff` background, 1px solid `#cccccc`, padding 24px, radius 2px. Layout: 16:9 product image at top, `card-title` title, `body-sm` description, `button-ghost-link` "Learn More →" affordance at bottom. The signature `corner-square` (12px green) sits at the top-left.

**`feature-card`** — Container: `#ffffff` background, 1px hairline, padding 32px, radius 2px. Layout: icon (Font Awesome 22–24px) at top in NVIDIA Green, `heading-md` title, `body-md` body. Used in 3-up or 4-up grids that explain product capabilities ("Agentic AI", "Data Science", "Inference", "Conversational AI").

**`resource-card`** — Container: `#ffffff` background, 1px hairline, padding 24px, radius 2px. Header strip: `badge-tag` document-type label. Body: 3:2 thumbnail, `card-title` title, `body-sm` description. Footer: ghost-link "Read More →" with right-pointing chevron in NVIDIA Green.

**`callout-stat`** — Background `#ffffff` with 1px hairline, padding 32px, radius 2px. Massive `display-lg` (36px) numeric in NVIDIA Green followed by `body-md` caption underneath ("4× faster training", "60% lower cost", etc.). Used inside long-form industry pages.

### Hero & CTA Strips

**`hero-card-dark`** — Background `#000000` with full-bleed 16:9 photographic / 3D image and dark gradient overlay (`rgba(0,0,0,0.5)`); copy slot at left third. `display-xl` headline in `#ffffff`, `heading-lg` subhead, single `button-primary` CTA (sometimes paired with `button-outline-on-dark`). Anchors the top of every primary landing page.

**`cta-strip-dark`** — Same dark surface compressed to a 1-row band with `heading-xl` headline + single CTA. Sits between content sections as a "Ready to get started?" bridge. Padding `64px 48px`, radius 0.

### Decorative

**`corner-square`** — 12×12px solid `#76b900` square anchored to a card corner. The brand's signature ornamental motif. Used on resource cards, feature cards, and editorial callouts. Position varies (top-left, bottom-right) but the size and colour are constant. On hero callouts the square scales to 16×16px; on small cards it stays at 12×12px.

### Inputs / Forms

**`text-input`** + **`text-input-focused`** — Default: `#ffffff` background, `#000000` text, 1px solid `#cccccc`, type `body-md`, padding `12px 16px`, height 44px, radius 2px. Focused: same surface, border becomes 2px solid `#76b900` — the green border is the only focus signal in the system. No glow, no shadow, no inset ring.

**`search-input`** — Used in the global search overlay. Same chrome as `text-input` at 40px height with a magnifier glyph at left.

### Navigation

**`utility-bar`** — Background `#000000`, text `#ffffff`, height 32px, type `caption-sm`, radius 0. Right-aligned cluster: locale selector / "Login" / "Account". Always present at the very top of the page.

**`primary-nav`** — Background `#000000`, text `#ffffff`, height 64px, type `body-strong`, radius 0. Layout: NVIDIA wordmark at left, centered nav row ("Products / Solutions / Industries / Resources / Support / Company"), right cluster (search-glyph + "Login" button + green CTA "Get Started").

**`breadcrumb-bar`** — Background `#f7f7f7`, text `#1a1a1a`, height 48px, type `caption-md` (uppercase). Sits directly under the primary nav on every interior page; chevron separators in mute (`#757575`).

**`sub-nav-strip`** — Background `#f7f7f7`, text `#000000`, height 56px, type `button-md`, radius 0. Section-specific nav anchored above content (Healthcare → Drug Discovery / Medical Imaging / Genomics / Patient Care).

**Mobile**: hamburger menu icon left, NVIDIA wordmark center, search + locale icons right. Primary nav collapses into a full-screen drawer that slides in from the right.

### Footer

**`footer-section`** — Background `#000000`, text `rgba(255,255,255,0.7)`, padding `64px 48px`, radius 0. Layout: 6-column link grid (Products / Software / Resources / Company Info / Solutions / Support) with column headers in `body-strong` `#ffffff` and link lists in `body-sm` muted. Below the columns: social-icon strip + locale selector + legal/privacy fine-print row in `utility-xs` (uppercase) muted.

### Inline

**`link-inline`** — Body-prose anchor link: `#0046a4` text with underline. The ONLY blue in the system — appears nowhere except inline links inside `body-md` paragraphs.

## 5. Layout Principles

### Spacing System

- **Base unit**: 8px
- **Scale**: `2 · 4 · 8 · 12 · 16 · 24 · 32 · 64`
- Section rhythm: every page uses `64px` as the vertical gap between major content blocks. Card grids use 24px gutters; in-card padding sits at 24–32px depending on density.
- Hero chapter padding: `80px` vertical / `48px` horizontal — the largest spacing in the system, reserved for `hero-card-dark`.
- Button padding: `11px 24px` for primary, `11px 13px` for outline.

### Grid & Container

- Max content width: ~1280px at desktop, with 24px gutters that grow to ~48px at ultrawide.
- Card grids: 4-up at desktop, 3-up at 1024px, 2-up at 768px, 1-up at 480px.
- Long-form text: 2-column 60/40 split (body + sidebar) at desktop, single-column at < 960px.
- Footer: 6-up link columns at desktop, collapsing to 2-up on tablet, full accordion on mobile.
- Card aspect: product cards lean to 1:1 or 4:3 with 16:9 imagery on top + 1–2 lines of metadata below. Resource cards are 3:2 imagery with a longer description block.

### Whitespace Philosophy

Whitespace is **structural, not atmospheric**. Sections butt against each other with `64px` rhythm — no decorative dividers, no empty "breathing room" bands, no gradient transitions between sections. The sense of air comes from canvas body sections sandwiched between dark chapter blocks, not from generous padding inside any one component.

### Section Cadence

Black hero → white body → black CTA strip → white body → black footer. The system alternates dark and light in a predictable rhythm, with each transition an abrupt edge — no fade, no gradient, no bridging band. The rhythm itself is the brand.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0px | Hero chapter, footer, dark CTA strips, primary nav |
| Micro | 1px | Decorative micro-rules and inset accent strips |
| Standard | 2px | Every interactive element — buttons, cards, inputs, pill tabs, badges |
| Pill | 9999px / 50% | Avatar circles, social-icon dots, brand wordmark icon |

The system is aggressively angular. Outside of avatar / icon circles, no element exceeds 2px radius. The 2px is enough to soften optical aliasing on a sharp edge but small enough that the system reads as engineering-grade. There are no compound radii.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | No border, no shadow | Canvas-on-canvas blocks, hero chapter content, footer column body |
| 1 — Hairline | 1px solid `#cccccc` | All cards on canvas, table cells, comparison panels |
| 2 — Hairline strong | 1px solid `#5e5e5e` | Dividers on `#000000` (footer column rules, dark-card edges) |
| 3 — Soft shadow | `0 0 5px 0 rgba(0,0,0,0.3)` | Sticky nav bottom edge when scrolled, sticky CTA bar — used very sparingly |
| 4 — Modal | `rgba(0,0,0,0.4) 0 16px 32px` over `rgba(0,0,0,0.6)` scrim | Centered dialogs (search overlay, locale picker) |

### Shadow Philosophy

NVIDIA's system has effectively no drop-shadow elevation in card or content surfaces. The only "shadow" in the extracted tokens is a subtle 5px ambient on sticky chrome bars. Cards do not lift; cards are flat rectangles with hairline borders. Depth in NVIDIA's system comes from photography and 3D-rendered hero imagery rather than from CSS effects: full-bleed photographic or rendered scenes (data-center hardware, neural-net visualisations, life-sciences microscopy) sit behind hero copy with a dark gradient overlay for legibility.

### Decorative Depth

- **Hero imagery** carries cinematic depth through composition.
- **Decorative corner squares** — the 12×12px green square anchored to one corner of resource and feature cards is the system's only consistent ornamental device.
- **Editorial 3D accents** — isometric or wireframe renderings appear as illustration-style fills inside long-form articles, never as chrome.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover swaps, hairline transitions, surface tone shifts.
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, drawer slides.
- **Out**: `cubic-bezier(0.0, 0, 0.2, 1)` — element exits viewport.

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 100ms | Button background swap, hairline transition, chevron rotation |
| Standard | 200ms | Modal scrim fade, drawer slide |
| Slow | 300ms | Hero fade-in on scroll-into-view |

### Per-Component Micro-States

- **Button hover**: subtle background brightening only, no transform. Outline buttons may transition border thickness 2px → 3px but more often hold steady.
- **Card hover**: no transform, no shadow intensify. The corner-square may grow ~1px or the hairline border may subtly thicken.
- **Input focus**: 1px `#cccccc` border transitions to 2px `#76b900` in 100ms.
- **Tab selection**: background flips from transparent to `#000000` instantly, text colour from `#000000` to `#ffffff`. No transition timing — selection is decisive.
- **Modal enter**: scrim fades in over 200ms (ease-standard) + dialog slides 8px → 0 with `ease-emphasized`.

### Page Transitions

NVIDIA does not ship animated page transitions. Pages load instantly with no fade-in, no slide-in chrome. The only persistent motion across navigation is the sticky nav's 5px ambient shadow that appears once the user scrolls past the hero — it materializes via a 200ms opacity fade.

### Reduced Motion

`prefers-reduced-motion: reduce` is honored. The 5px ambient shadow on sticky chrome holds; transforms (modal slide, drawer slide, corner-square hover grow) are suppressed. Background colour swaps are essential to interaction feedback and remain.

## 9. Accessibility & A11y

### Contrast Pairs

- **Text on canvas**: `#000000` on `#ffffff` — 21.0:1 (AAA)
- **Text on brand**: `#000000` on `#76b900` — 8.4:1 (AAA at body, AAA at large)
- **On-dark text**: `#ffffff` on `#000000` — 21.0:1 (AAA)
- **On-dark muted**: `rgba(255,255,255,0.7)` on `#000000` — ~10:1 (AAA)
- **Muted on canvas**: `#757575` on `#ffffff` — 4.6:1 (AA)
- **Link on canvas**: `#0046a4` on `#ffffff` — 8.6:1 (AAA)

### Focus Indicators

The 2px solid `#76b900` border that signals input focus also doubles as the focus ring for buttons (offset 2px). Focus is unmistakable: the green border on either an input or a button is the single visual signal.

### ARIA Patterns

- **Dialogs**: `role="dialog"` with `aria-modal="true"`, focus trap, `aria-labelledby` on the dialog title.
- **Tabs**: `role="tablist"` / `role="tab"` / `role="tabpanel"` with arrow-key navigation. `aria-selected="true"` on the active tab.
- **Combobox / search**: `role="combobox"` with `aria-expanded` and `aria-controls` on the search input.
- **Disclosure**: `aria-expanded` on the trigger, `aria-controls` pointing to the content panel.

### Keyboard Navigation

Tab order: utility-bar → primary-nav (logomark, nav categories, search, login, Get Started CTA) → breadcrumb → sub-nav → main content (hero CTA → feature cards in row order) → footer columns. Skip link to `#main-content` is the first focusable element.

### Screen Reader Hints

NVIDIA prefers visible, self-describing labels over `aria-label`. Decorative SVGs (corner-squares, divider rules) receive `aria-hidden="true"`. Icon-only buttons (search, social) carry `aria-label` matching their tooltip.

### Reduced Motion

`prefers-reduced-motion: reduce` is honored. All transform-based motion suppressed; opacity transitions hold (sticky nav shadow fade-in, modal scrim fade) because they don't constitute motion that triggers vestibular reactions.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| ultrawide | 1920+ | Content max-width holds at 1280px; outer gutters grow to ~80px |
| desktop-large | 1440 | Default desktop layout — 4-up card grid, 6-col footer |
| desktop | 1280 | Same as large with slightly narrower outer gutters |
| desktop-small | 1024 | 4-up cards collapse to 3-up; sub-nav remains horizontal |
| tablet | 768 | 3-up cards collapse to 2-up; primary nav becomes hamburger drawer |
| mobile | 480 | Single-column everything; footer columns collapse to accordion |
| mobile-narrow | 320 | Hero `display-xl` scales from 48px → 32px |

### Touch Targets

All interactive elements meet WCAG AA (≥ 44×44px). `button-primary` sits at 44px height with 24px horizontal padding. `text-input` sits at 44px. `pill-tab` sits at ~40px with extended hit-target padding to 44px. Footer links are 18–20px line-height with 8–12px vertical padding to keep tap targets at ~36–44px.

### Collapsing Strategy

- **Primary nav**: desktop centered nav row → tablet hamburger drawer at 768px.
- **Card grid**: 4-up → 3-up → 2-up → 1-up at 1024 / 768 / 480px; gutters drop from 24px to 16px on mobile.
- **Footer**: 6-up link columns → 2-up at tablet → full accordion at mobile (each column header becomes tap-to-expand).
- **Hero copy**: desktop `display-xl` (48px) → tablet 36px → mobile 32px; line-height holds at 1.25.
- **Sub-nav strip**: desktop horizontal anchor row → tablet horizontal scroll → mobile collapses into a select dropdown.
- **Section padding**: 64px desktop → 48px tablet → 32px mobile.
- **Long-form text**: desktop 60/40 body+sidebar → tablet/mobile single-column with sidebar pushed below.

### Image Behavior

- Hero imagery uses art-direction crops: 16:9 wide hero on desktop swaps to 4:5 portrait on mobile so the subject stays centered and headline overlay space holds.
- Card imagery is fixed-aspect (16:9 for resource, 1:1 for product, 3:2 for editorial) that scales rather than re-crops between breakpoints.
- All non-critical imagery is lazy-loaded as the user scrolls into the next grid row.

## 11. Content & Voice

### Tone

NVIDIA's marketing voice is **technical, precise, and confidently dense** — never breathless, never playful. Headlines lean factual ("AI Computing for the Endeavors of Humanity", "Drive Discovery with Accelerated Computing") rather than aspirational metaphor. The voice borrows from research-paper abstracts: noun-dense, active-verbed, jargon used precisely where the audience expects it.

### Microcopy Patterns

- **Button verbs**: "Get Started", "Learn More", "Read the Documentation", "Watch the Video", "Compare Products", "Sign Up". Action-first, title case.
- **Error messages**: stated plainly with technical specificity. "Connection timed out. Retry in 5 seconds." NVIDIA writes errors like an engineer logs them.
- **Success confirmations**: brief and factual. "Subscription confirmed."
- **Loading states**: a thin progress indicator with optional `body-sm` muted text ("Loading..."). No skeleton screens on marketing.

### Empty States

NVIDIA's marketing surfaces are densely populated. Where empty states appear (resource search results), the copy is direct: "No results match your filters." A `button-outline` "Clear Filters" appears below in NVIDIA Green border.

### CTA Verb Conventions

- "Get Started" — the universal sign-up phrasing across product pages.
- "Learn More" — the standard tertiary affordance with a `→` chevron. Always title case.
- "Read the Documentation" — preferred over "View Docs" — engineering-grade phrasing.
- "Watch the Video" — preferred over "Watch Now" — technical precision over urgency.
- "Sign Up" — used for newsletter and developer-program enrollment.
- "Contact Sales" — enterprise lead-gen; never "Request a Demo".

The system rejects "Click here", "Try it now", "Buy today" — those phrasings read as marketing-by-default rather than NVIDIA's voice.

## 12. Dark Mode & Theming

NVIDIA's marketing system **already includes dark surfaces** as a structural element — the hero / footer chapters are `#000000` regardless of any user theme preference. The body content, however, is light-only on the public marketing site. There is no documented marketing dark-mode toggle that inverts the entire page; the alternation is editorial, not user-controlled.

NVIDIA's product surfaces (NGC, developer portal, GeForce Now) ship a full Gray-100 dark theme — the inverse token map matches what's already present in the hero and footer:

- `bg`: `#ffffff` → `#000000`
- `surface-soft`: `#f7f7f7` → `#1a1a1a`
- `text`: `#000000` → `#ffffff`
- `text-body`: `#1a1a1a` → `rgba(255,255,255,0.9)`
- `text-muted`: `#757575` → `rgba(255,255,255,0.7)`
- `border`: `#cccccc` → `#5e5e5e` (hairline-strong)
- `brand`: `#76b900` → `#76b900` (NVIDIA Green is constant — high contrast on both light and dark)
- `link`: `#0046a4` → `#76b900` (links flip to brand green on dark, since blue underperforms on black)

The corner-square stays NVIDIA Green at all times — it is the constant signature.

## 13. Lineage & Influences

NVIDIA's design lineage runs through three eras of GPU industry maturation:

**1993–2005: GeForce gamer era.** Early NVIDIA branding leaned on bold, neon-tinged gamer aesthetics — chromed wordmarks, lens flares, gradient backgrounds. The current marketing system rejects every visual decision from this era except the green wordmark colour itself.

**2005–2018: Datacenter / CUDA era.** As NVIDIA pivoted from gaming to general-purpose GPU compute (CUDA, 2007), the brand voice tightened toward enterprise restraint. The marketing site became denser, more technical, less consumer. The black hero / white body alternation took root in this era.

**2018–today: AI / accelerated-computing era.** The current marketing system codifies the engineering-documentation aesthetic — minimal chrome, hairline-bordered cards, single-accent green, and the corner-square as the lone ornament. This is the system the spec captures.

**Influences absorbed:**

- **Swiss / International Typographic Style** — the grid discipline and hierarchy-by-weight that makes NVIDIA's marketing read as engineering-grade rather than consumer-friendly.
- **Bauhaus / Dieter Rams** — function-over-ornament, the "less but better" rule that justifies the corner-square as the system's only decorative motif.
- **CAD / engineering documentation** — the 2px radius, hairline borders, and dense multi-column layouts borrow directly from engineering-drawing conventions.
- **IBM Carbon** — peer enterprise design system; NVIDIA shares Carbon's restraint but reaches further into 2px-radius angularity (Carbon stays at 0px, NVIDIA at 2px — the contrast is real).

**What it rejects:**

- Pill-shaped buttons (consumer SaaS aesthetic).
- Atmospheric depth (no gradient backdrops, no decorative meshes).
- Multi-color accent systems (NVIDIA Green is the only chromatic accent on chrome).
- Decorative animation (no parallax, no scroll-triggered scale, no auto-playing video on hover).

**Named contemporaries:**

- [Tesla](https://www.tesla.com) — peer engineering-grade brand with heavier typographic discipline and similar dark-hero rhythm.
- [HashiCorp](https://www.hashicorp.com) — peer enterprise system with similar restraint, more rounded corners.
- [IBM Carbon](https://carbondesignsystem.com) — peer enterprise design system; pioneer of the open-source-system-as-marketing-chrome approach.

## 14. Do's and Don'ts

### Do

- Reserve `#76b900` NVIDIA Green for primary CTAs, active states, decorative corner squares, and the wordmark itself. Treat it as a precious resource.
- Stack hero / footer chapters in `#000000` and body sections in `#ffffff` — alternate them in a predictable rhythm down the page.
- Anchor a 12×12px green corner-square to one corner of every reusable card. It is the system's identity tag.
- Use 2px radius on every interactive element. Never go to 0, never go past 4.
- Build hierarchy from font weight (400 vs 700) and size, not from color tinting. Body text stays `#000000` or `#1a1a1a` regardless of context.
- Stack content sections at 64px rhythm with no decorative dividers between them.
- Pair `button-primary` (green fill) with `button-outline` (green border) for primary + secondary action pairs.
- Use the dark hero / dark CTA strip as the system's "headline moment" — a single full-bleed photographic / 3D image with one green CTA.

### Don't

- Don't introduce drop shadows on cards or content surfaces. The only allowed shadow is the 5px ambient on sticky chrome.
- Don't substitute `success-deep`, `accent-green-pale`, or any other green for `#76b900` in CTAs. The brand green is precise.
- Don't use `#0046a4` link-blue outside of inline body-prose links. It is not a button colour, not a chrome colour.
- Don't soften the geometry. No pill buttons, no rounded cards, no `lg`+ radius anywhere except avatars and social icons.
- Don't pad the dark hero card symmetrically. Copy hugs the left third; imagery fills the right.
- Don't add a second accent colour for variety. The system is intentionally one-colour on chrome.
- Don't put `button-primary` (green fill) on `#ffffff` backgrounds where green-on-white would clash with photo content — use `button-outline` instead and reserve fill for dark surfaces.
- Don't use medium / semibold weights. The system is 400 / 700 only.

## 15. Agent Prompt Guide

### Quick Color Reference

- Canvas: `#ffffff`
- Hero / Footer: `#000000`
- Surface Soft: `#f7f7f7`
- Ink: `#000000`
- Body: `#1a1a1a`
- Mute: `#757575`
- NVIDIA Green: `#76b900`
- NVIDIA Green Active: `#5a8d00`
- Hairline: `#cccccc`
- Link Blue (inline only): `#0046a4`

### Example Component Prompts

- "Create a dark hero: full-bleed black `#000000` background with a 16:9 photograph (data-center hardware) and a `rgba(0,0,0,0.5)` gradient overlay. Display headline at 48px NVIDIA-EMEA / 700 in `#ffffff`, subhead in 22px / 400. A single green `#76b900` button with black text, 2px radius, 11×24px padding, height 44px. Optional outline-on-dark secondary button beside it with 1px white border. Padding `80px` vertical, `48px` horizontal."
- "Design a feature card: white `#ffffff` background, 1px `#cccccc` hairline border, square 2px corners, 32px padding. Icon at the top in NVIDIA Green at 22-24px, then a 20px / 700 heading, then 16px / 400 body. Anchor a 12×12px solid `#76b900` corner-square at the top-left of the card."
- "Build a resource-card: white background, 1px hairline, 2px radius, 24px padding. At the top: an uppercase 14px / 700 'WHITE PAPER' badge-tag pill on `#f7f7f7`. Then a 3:2 thumbnail. Then a 17px / 700 card-title. Then a 15px / 400 body-sm description. Then a green ghost-link 'Read More →' at the bottom. Green corner-square top-left."
- "Create a callout-stat: 1px hairline white card, 32px padding, 2px radius. Massive 36px NVIDIA-EMEA / 700 numeric in `#76b900` ('4× faster training'), then 16px / 400 caption beneath."
- "Design a primary nav: full-bleed `#000000` background, 64px height. NVIDIA wordmark left, centered nav row with 'Products / Solutions / Industries / Resources / Support / Company' in 16px / 700 white. Right cluster: search-glyph + 'Login' button + green CTA 'Get Started' (button-primary)."
- "Build a footer: full-bleed `#000000` background, 64×48px padding. 6-column link grid with column heads in 16px / 700 white and link lists in 15px / 400 `rgba(255,255,255,0.7)`. Below: social-icon strip + locale selector + legal/privacy fine-print row in 10px / 700 uppercase muted."

### Iteration Guide

1. **Audit corners.** Every interactive surface should be 2px. If you see 0px (drift toward IBM) or 8px+ (drift toward Pinterest), bring it back to 2px.
2. **Audit green discipline.** NVIDIA Green appears only on: primary CTA fill, outline button border, active tab background-text-flip, corner-square, link colour on dark surfaces, focused input border, brand wordmark. Anywhere else is drift.
3. **Audit weight binary.** Only weight 400 and 700 — no 500, no 600. Carbon-style emphasis happens via 16/700 body-strong, not via medium weight.
4. **Audit shadow restraint.** Strip every box-shadow except the 5px sticky-chrome ambient and the 16px modal lift. Cards are flat with hairline borders.
5. **Audit corner-squares.** Every reusable card type (product, feature, resource, callout-stat) should carry a 12×12px green corner-square at one corner. Without it, the card reads as generic.
6. **Audit dark-light rhythm.** Hero black → body white → CTA-strip black → body white → footer black. The alternation is the brand. If you see a tinted body band (gray, blue, beige), flatten it to `#ffffff`.
7. **Audit body tracking.** NVIDIA does not use letter-spacing on body — it's `0`. Only `caption-md` and `utility-xs` carry uppercase + tracking, and only at small sizes.
8. **Honor the link colour.** Inline body links are `#0046a4` blue with underline. Anywhere else is wrong — there is no other blue in the system.
