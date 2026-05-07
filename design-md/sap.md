---
name: SAP
tagline: Enterprise-ERP precision in cobalt — SAP72 sans, signal-blue accents, and a calm white canvas built for trust.
updated_at: 2026-05-04T19:57:58+12:00
published_at: 2026-05-04T19:57:58+12:00
author: webdesignhot
source_url: https://www.sap.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [saas]
tags: [light, enterprise, sans, cobalt, b2b, corporate, calm, blue, erp]
preview_swatch: ['#ffffff', '#0070f2', '#1d2d3e']
related: [salesforce, ibm, microsoft]
description: 'SAP''s web is corporate-cobalt enterprise software dressed in a flagship signal blue (`#0070f2`) and a custom **72** typeface — a system designed to read confident across 50 industries and 25 languages. The canvas is a near-paper white (`#ffffff`) with a deep navy ink (`#1d2d3e`) for text; the brand blue carries every action moment without a hint of accent rotation. Headings run **72 Bold** at tight tracking, body sits at 16/1.5 with friendly counters, and the system reaches for editorial restraint over flash — every card is a 6px hairline-bordered surface, every CTA a 4px-radius rectangle, every shadow whisper-soft. Where Stripe builds trust through blue, SAP doubles down: trust through blue plus a 50-year ERP heritage, plus the spectral confidence of a typeface that exists nowhere else.'

colors:
  bg: '#ffffff'                     # primary page canvas — paper white
  bg-soft: '#f5f6f7'                # quiet section wash
  bg-section: '#eaecee'             # alternating section band
  bg-feature: '#1d2d3e'             # deep-navy feature band — SAP "ink"
  bg-footer: '#1d2d3e'              # dark navy footer
  bg-cool: '#ebf8ff'                # pale-blue info surface
  surface: '#ffffff'                # default card surface
  surface-soft: '#f5f6f7'           # secondary card surface
  surface-elev: '#ffffff'           # elevated card on shaded section
  brand: '#0070f2'                  # SAP signal blue — primary CTA, links
  brand-hover: '#0040b0'            # darker hover state
  brand-active: '#002a77'           # pressed state
  brand-subtle: '#d1efff'           # info-blue surface tint
  brand-soft: '#ebf8ff'             # softest info wash
  navy: '#1d2d3e'                   # SAP corporate navy — text, dark band
  navy-deep: '#0a2540'              # deepest navy for headings on white
  text: '#1d2d3e'                   # primary text on white
  text-strong: '#0a2540'            # heading-level deep navy
  text-soft: '#556270'              # secondary metadata
  text-faint: '#8b95a3'             # placeholder, caption
  text-on-dark: '#ffffff'           # primary text on navy
  text-on-dark-soft: 'rgba(255,255,255,0.78)' # secondary on navy
  on-brand: '#ffffff'               # white text on signal blue
  border: '#d8dee5'                 # default hairline border
  border-soft: '#eaecee'            # lighter table-row separator
  border-strong: '#a8b1bd'          # form-input emphasized border
  link: '#0070f2'                   # link blue == brand
  link-hover: '#0040b0'             # darker hover
  link-visited: '#5d36ff'           # rare visited purple
  success: '#36a41d'                # SAP green — confirmation
  success-soft: '#e9f8ec'
  warning: '#e76500'                # SAP orange — caution
  warning-soft: '#fff3e0'
  danger: '#d20a0a'                 # SAP red — error
  danger-soft: '#fde1e1'
  info: '#0070f2'                   # blue, equal to brand
  info-soft: '#ebf8ff'
  scrim: 'rgba(29,45,62,0.55)'      # modal backdrop in navy alpha
  shadow-card: 'rgba(29,45,62,0.10)'
  shadow-elev: 'rgba(29,45,62,0.18)'
  shadow-deep: 'rgba(0,0,0,0.20)'

typography:
  display:
    family: '"72", "72full", "Noto Sans", "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['ss01: alt zero', 'tnum: tabular numerals on numeric tables']
  body:
    family: '"72", "72full", "Noto Sans", Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"72 Mono", "JetBrains Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 72, weight: 700, lineHeight: 1.05, tracking: '-0.02em', family: display, notes: 'flagship homepage hero' }
    display-large:   { size: 56, weight: 700, lineHeight: 1.08, tracking: '-0.02em', family: display, notes: 'section opener / industry page' }
    h1:              { size: 44, weight: 700, lineHeight: 1.14, tracking: '-0.015em', family: display }
    h2:              { size: 36, weight: 700, lineHeight: 1.18, tracking: '-0.01em', family: display }
    h3:              { size: 28, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 22, weight: 600, lineHeight: 1.3, tracking: '0', family: display }
    h5:              { size: 18, weight: 600, lineHeight: 1.4, tracking: '0', family: display }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, tracking: '0', family: body, notes: 'hero intro paragraph' }
    body-md:         { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body, notes: 'default body copy' }
    body-strong:     { size: 16, weight: 600, lineHeight: 1.5, tracking: '0', family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body, notes: 'metadata, captions' }
    label:           { size: 14, weight: 600, lineHeight: 1.4, tracking: '0', family: body, notes: 'form labels, table headers' }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.3, tracking: '0.08em', family: body, transform: uppercase, notes: 'category eyebrow above headlines' }
    button:          { size: 14, weight: 600, lineHeight: 1.2, tracking: '0', family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.4, tracking: '0', family: body }
    legal:           { size: 11, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.5, tracking: '0', family: mono, notes: 'inline code in docs' }
    tabular:         { size: 14, weight: 500, lineHeight: 1.4, tracking: '0', family: body, opentype: 'tnum', notes: 'tabular numerals for ERP financial tables' }

radius:
  micro: 2                           # internal divider chips
  sm: 4                              # button, input, primary chip
  md: 6                              # card
  lg: 8                              # modal, dialog
  xl: 12                             # hero card / industry tile
  pill: 9999                         # status pill, language pill

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1280
  prose-width: 760
  header-height: 72                  # 72 desktop / 56 mobile
  sub-nav-height: 48
  outer-gutter-mobile: 16
  outer-gutter-tablet: 24
  outer-gutter-desktop: 40
  hero-content-proportion: 0.6
  hero-image-proportion: 0.4

components:
  button-primary:
    bg: '#0070f2'
    color: '#ffffff'
    border: '1px solid #0070f2'
    radius: 4
    padding: '10px 20px'
    font: button
    use: 'Primary CTA — "Try free", "Talk to an expert", "Watch the demo".'
  button-primary-dark:
    bg: '#ffffff'
    color: '#0070f2'
    border: '1px solid #ffffff'
    radius: 4
    padding: '10px 20px'
    use: 'Primary CTA on the navy feature band — inverts to white-on-blue text.'
  button-secondary:
    bg: 'transparent'
    color: '#0070f2'
    border: '1px solid #0070f2'
    radius: 4
    padding: '10px 20px'
    use: 'Secondary outlined — "Learn more", "Read story".'
  button-secondary-dark:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #ffffff'
    radius: 4
    padding: '10px 20px'
    use: 'Outlined CTA on navy feature band, paired with white-filled primary.'
  button-tertiary:
    bg: 'transparent'
    color: '#0070f2'
    border: 'none'
    padding: '10px 12px'
    icon: 'arrow-right after label'
    use: 'Inline link-style CTA with chevron — "See how it works ›".'
  button-ghost:
    bg: 'transparent'
    color: '#1d2d3e'
    border: '1px solid #d8dee5'
    radius: 4
    padding: '10px 20px'
    use: 'Quiet utility action — secondary on a heavily-CTA page.'
  card-content:
    bg: '#ffffff'
    radius: 6
    border: '1px solid #d8dee5'
    padding: '24px'
    shadow: 'none — hairline-only by default'
    hover-shadow: '0 4px 16px rgba(29,45,62,0.10)'
    use: 'Default content card — feature card, industry tile, customer story.'
  card-feature:
    bg: '#f5f6f7'
    radius: 12
    border: 'none'
    padding: '40px'
    use: 'Hero feature card on shaded section — larger radius, no border.'
  card-stats:
    bg: '#ffffff'
    radius: 6
    border: '1px solid #d8dee5'
    padding: '32px 24px'
    metric-size: 56
    metric-color: '#0070f2'
    use: '"€2.1B saved" stat callout — display-72-Bold blue numeral over a 14/600 navy label.'
  badge-info:
    bg: '#ebf8ff'
    color: '#0040b0'
    radius: 4
    padding: '4px 10px'
    font: { size: 12, weight: 600 }
    use: '"New", "Generative AI", "Featured" — categorical pill on cards.'
  badge-success:
    bg: '#e9f8ec'
    color: '#256d0e'
    radius: 4
    padding: '4px 10px'
    use: '"Available now", "Live" — confirmation pill.'
  input-text:
    bg: '#ffffff'
    border: '1px solid #d8dee5'
    radius: 4
    padding: '12px 16px'
    focus-border: '2px solid #0070f2'
    label-position: 'above input — left-aligned 14/600'
    use: 'Default text input — search, contact form.'
  input-search:
    bg: '#f5f6f7'
    border: '1px solid #d8dee5'
    radius: 4
    padding: '10px 16px 10px 40px'
    icon: 'search 16px left-padded'
    use: 'Top-bar global search input.'
  global-nav:
    bg: '#ffffff'
    height: 72
    border-bottom: '1px solid #eaecee'
    sticky: true
    items: 'wordmark + Solutions / Industries / Services / Insights + utility (Search/Login/Contact)'
    use: 'Fixed top bar — full-width, 1px hairline only, never shadowed at rest.'
  mega-menu:
    bg: '#ffffff'
    radius: '0 0 8px 8px'
    shadow: '0 16px 32px rgba(29,45,62,0.10)'
    columns: 4
    use: 'Solutions hover panel — 4-column grid of category links + featured banner right.'
  feature-band:
    bg: '#1d2d3e'
    color: '#ffffff'
    padding: '96px 0'
    use: 'Full-width navy strip — split 50/50 with copy left + product visual right.'
  footer:
    bg: '#1d2d3e'
    color: '#ffffff'
    padding: '64px 0 32px'
    columns: 5
    legal-bar: 'separated by 1px white-10% hairline'
    use: 'Deep-navy footer with 5-column site index + legal strip.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  duration-page: 400
  hover-lift: 'card hover: shadow rises from none → 0 4px 16px rgba(29,45,62,0.10) over 200ms ease-standard'
  cta-press: 'transform: translateY(1px) — subtle press dip on filled buttons'
  link-underline: 'underline grows from 0 → 100% width left-to-right over 200ms on hover'
  reduced-motion: 'respects prefers-reduced-motion: reduce — transforms degrade to opacity changes; underline-grow disabled; image-fade-in disabled.'

breakpoints:
  mobile: 600
  tablet: 900
  desktop: 1280
  wide: 1600

shadows:
  none: 'none'
  hairline: '0 1px 0 rgba(29,45,62,0.06)'
  card-hover: '0 4px 16px rgba(29,45,62,0.10)'
  elevated: '0 8px 24px rgba(29,45,62,0.14)'
  modal: '0 24px 48px rgba(29,45,62,0.20), 0 4px 8px rgba(0,0,0,0.10)'
  ring: '0 0 0 2px #0070f2'

accessibility:
  contrast-text-on-bg: 13.2                # navy on white — AAA
  contrast-text-on-brand: 4.6              # white on signal blue — AA at body
  contrast-text-on-navy: 14.0              # white on deep navy — AAA
  contrast-soft-on-bg: 6.8                 # text-soft on white — AA
  focus-ring: '2px solid #0070f2 with 2px offset on dark surfaces, 0px on light — never just color change'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab order — skip-link → wordmark → primary nav (Solutions/Industries/Services/Insights) → utility (Search/Login/Contact) → main → footer.'
  aria-patterns: 'Mega-menu uses aria-haspopup + aria-expanded; hero carousel uses aria-roledescription="carousel"; pricing tabs use roving tabindex.'

dark-mode: null   # SAP marketing site is light-only. Feature bands are dark-by-content (navy panels), not theme-driven. The SAP Build Apps product surface and Fiori 3 design system support theming, but the public marketing site does not ship a dark mode toggle.
---

## 1. Visual Theme & Atmosphere

SAP's web is **enterprise-ERP precision wearing a cobalt suit**. The canvas is a near-paper white (`#ffffff`) with a deep navy ink (`#1d2d3e`) for text; the brand blue — a single confident `#0070f2` "signal blue" — carries every action moment without a hint of accent rotation. There is no rainbow palette here, no gradient hero, no pastel illustration. Just a four-stop chromatic system (white ground, navy ink, blue action, gray scale) repeated across thousands of pages with absolute discipline. SAP is a 50-year-old company that runs the world's payroll, supply chain, and finance back-offices for a third of the global Fortune 500, and the design system reads exactly like that mandate: do not break trust, do not surprise, do not shout.

Typography carries enormous brand weight. SAP commissioned **72** — a custom typeface from Foundry Type — explicitly to render their interfaces across 50 industries and 25 languages, and the marketing site uses the same family the product surface uses. **72 Bold** at tight `-0.02em` tracking carries every hero headline; the counters are slightly squarer than Inter, slightly more open than Helvetica Now, and the lowercase 'a' has a single-story bowl that signals "humanist warmth" inside a system that otherwise reads cool-corporate. Body text sits at a generous 16px/1.5 with friendly weights (400/500/600), tabular numerals (`tnum`) flip on automatically inside ERP financial tables, and the alt-zero stylistic set (`ss01`) is on by default to disambiguate `0` from `O` in product codes. There is no serif companion. There is no decorative script. Just 72, in five weights, doing all the work.

Surfaces breathe through hairline-only restraint. Every card is a 6px-radius white panel with a `1px solid #d8dee5` border and zero default shadow. Hover lifts apply a whisper-soft `0 4px 16px rgba(29,45,62,0.10)` over 200ms. Buttons are 4px-radius rectangles, never pills — a deliberate departure from the soft-pill maximalism of B2C SaaS (Linear, Vercel, Stripe). The only exception: status badges and language pills get the full `9999px` rounding, but those are categorical chips, not actions. The whole system feels like clean ERP interface chrome scaled up to marketing — disciplined, calm, and built to survive a quarterly SAP Sapphire keynote without dating.

The page rhythm alternates **white ground → soft `#f5f6f7` zone → navy `#1d2d3e` feature band → white ground**, with the navy band reserved for a single emphatic moment per page (typically a customer-story testimonial or a multi-product callout). Where Notion oscillates between paper-white and `#191918` for editorial drama, SAP uses navy as a corporate "ground floor" — the band that anchors trust before the page returns to its working state. The visual cadence references corporate-broadsheet print: white pages, navy section dividers, blue links. Nothing flashy, everything calibrated for a CFO to read on a Wednesday morning.

**Key Characteristics:**
- Single confident signal blue (`#0070f2`) for every action — never an accent rotation
- Deep corporate navy (`#1d2d3e`) for text and feature bands — not pure black
- Custom **72** typeface (Foundry Type, commissioned for SAP) across product and marketing
- Tabular numerals (`tnum`) and alt-zero (`ss01`) on by default — ERP-financial discipline
- 4px-radius rectangle buttons — no pills, no soft maximalism
- 6px hairline-bordered card with 0-default shadow, 200ms hover lift
- Navy feature band as the page's emotional anchor — used once per page, never twice
- 5-stop semantic palette (success green / warning orange / danger red / info blue / neutral gray) — colorblind-safe, AA at body sizes
- Mega-menu with 4-column grid + featured banner right — corporate-portal taxonomy depth
- 72px header height with 1px hairline, never shadowed at rest

## 2. Color Palette & Roles

### Primary
- **White** (`#ffffff`): The default page canvas. Pure paper-white, never tinted off-white.
- **Navy Ink** (`#1d2d3e`): Primary text on white, also the dark feature-band ground. Reads as a "deep navy" rather than black — softens the contrast just enough to feel editorial, not aggressive.
- **Signal Blue** (`#0070f2`): The single brand action color. Used on filled CTAs, links, hover-state accents, and stat-callout numerals. Never paired with a competing accent hue.

### Brand & Dark
- **Navy** (`#1d2d3e`): Feature band, footer, dark surface. The brand's secondary "ground" color.
- **Navy Deep** (`#0a2540`): Reserved for headings on white — slightly deeper than text-navy to give H1/H2 typographic weight.
- **Brand Hover** (`#0040b0`): Signal-blue darkened ~30% for hover/active states on filled CTAs and links.
- **Brand Active** (`#002a77`): Pressed state — darker still.

### Accent
There is no second accent color. Status colors (success/warning/danger) are categorical and never used as decorative accents. Gradients are disallowed across the marketing surface.

### Interactive
- **Link** (`#0070f2`): Inline link blue == brand. Underlined on hover, never on rest.
- **Link Hover** (`#0040b0`): Darker blue + underline-grow animation.
- **Link Visited** (`#5d36ff`): Rare visited-state purple — appears only on long-form Insights articles.
- **Disabled** (text `#8b95a3` + bg `#eaecee`): 38% opacity equivalent.

### Neutral Scale
- **Text** (`#1d2d3e`): Primary body — deep navy, never pure black.
- **Text Strong** (`#0a2540`): Heading-grade deep navy.
- **Text Soft** (`#556270`): Secondary metadata, captions, label-secondary.
- **Text Faint** (`#8b95a3`): Placeholder, timestamp, hint text.
- **Border** (`#d8dee5`): Default hairline on inputs, cards, table rows.
- **Border Soft** (`#eaecee`): Lightest table-row separator.
- **Border Strong** (`#a8b1bd`): Form-input emphasized border.

### Surface & Borders
- **Surface** (`#ffffff`): Default card surface.
- **Surface Soft** (`#f5f6f7`): Quiet section wash — a 1-shade darker tint to delineate alternating bands.
- **Section Band** (`#eaecee`): Slightly deeper alternating band for the "two-tone vertical rhythm" used on long industry pages.
- **Hairline Border** (`#d8dee5`): The system's universal 1px line — cards, inputs, table rows, footer dividers.

### Shadow Colors
SAP shadows are navy-tinted, not black. The system uses `rgba(29,45,62, alpha)` for every shadow layer — slightly cooler than pure black, which keeps elevation feeling "cobalt-coherent" with the brand blue.
- **Card Hover** `rgba(29,45,62,0.10)` — 16px Y4 spread
- **Elevated** `rgba(29,45,62,0.14)` — 24px Y8 spread
- **Modal** `rgba(29,45,62,0.20)` + `rgba(0,0,0,0.10)` — two-layer for depth

### Semantic
SAP follows a 5-stop semantic palette with a `colored-text + colored-bg + colored-border` pattern for badges and toasts:
- **Success Green** (`#36a41d`) on `#e9f8ec` — confirmation, "Available now"
- **Warning Orange** (`#e76500`) on `#fff3e0` — caution, "Action required"
- **Danger Red** (`#d20a0a`) on `#fde1e1` — error, "Failed"
- **Info Blue** (`#0070f2`) on `#ebf8ff` — informational, equal to brand
- **Neutral Gray** (`#556270`) on `#f5f6f7` — utility, default state

## 3. Typography Rules

### Font Family

- **Primary**: `"72", "72full", "Noto Sans", "Helvetica Neue", Arial, sans-serif` — SAP's commissioned typeface from Foundry Type, used across product (Fiori 3) and marketing.
- **Mono**: `"72 Mono", "JetBrains Mono", Menlo, Consolas, monospace` — for inline code, API references, and product-code snippets in docs.
- **Open-source substitute**: Inter (similar humanist proportions, free), Source Sans 3 (a closer match in counter shape), or Noto Sans (ships in the SAP fallback chain itself). If substituting, verify tabular numerals (`font-variant-numeric: tabular-nums`) are enabled — SAP's ERP-financial heritage relies on it.
- **OpenType features**: `tnum` (tabular numerals) on by default for ERP financial tables; `ss01` (alt zero with slash) on by default to disambiguate `0` from `O` in product codes; `kern` always on; `liga` on for body, off for tabular contexts.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | 72 | 72 | 700 | 1.05 | -0.02em | kern | Flagship homepage hero |
| display-large | 72 | 56 | 700 | 1.08 | -0.02em | kern | Section opener / industry page |
| h1 | 72 | 44 | 700 | 1.14 | -0.015em | kern | Article-level heading |
| h2 | 72 | 36 | 700 | 1.18 | -0.01em | kern | Major section heading |
| h3 | 72 | 28 | 600 | 1.25 | -0.005em | kern | Subsection heading |
| h4 | 72 | 22 | 600 | 1.3 | 0 | kern | Minor heading |
| h5 | 72 | 18 | 600 | 1.4 | 0 | kern | Card title |
| body-large | 72 | 18 | 400 | 1.55 | 0 | kern, liga | Hero intro paragraph |
| body-md | 72 | 16 | 400 | 1.5 | 0 | kern, liga | Default body copy |
| body-strong | 72 | 16 | 600 | 1.5 | 0 | kern, liga | Emphasized body |
| body-sm | 72 | 14 | 400 | 1.45 | 0 | kern, liga | Metadata, captions |
| label | 72 | 14 | 600 | 1.4 | 0 | kern | Form labels, table headers |
| eyebrow | 72 | 12 | 600 | 1.3 | 0.08em | kern, uppercase | Category eyebrow above headlines |
| button | 72 | 14 | 600 | 1.2 | 0 | kern | All CTA labels |
| caption | 72 | 12 | 400 | 1.4 | 0 | kern, liga | Captions, footnotes |
| legal | 72 | 11 | 400 | 1.45 | 0 | kern | Legal fine print, cookie strip |
| code | 72 Mono | 14 | 400 | 1.5 | 0 | none | Inline code in docs |
| tabular | 72 | 14 | 500 | 1.4 | 0 | tnum | Financial tables, pricing rows |

### Principles

- **Tight negative tracking on display sizes** — hero headlines run `-0.02em`, dropping toward `0em` as size drops. The system never tracks looser than `0em` except for uppercase eyebrows (`+0.08em`).
- **Weight carries hierarchy alongside size.** H1 (44/700) and H3 (28/600) differ by both size *and* weight — the system never relies on size alone.
- **Tabular numerals are non-negotiable in financial contexts.** Any pricing row, ERP table, or stat-callout numeral must opt into `font-variant-numeric: tabular-nums`. SAP's ERP heritage demands column-aligned digits.
- **Alt-zero (`ss01`) is on by default.** SAP product codes use both `0` and `O` heavily — slash-zero discipline prevents support tickets.
- **No serif. No script. No decorative typeface.** The system is monolithically 72. Editorial moments use weight + size, never a typeface switch.
- **Body text never goes below 14px** on the marketing surface. Captions and legal use 12px sparingly.
- **Headings on white never go pure black.** Use `#0a2540` (text-strong / navy-deep) — softens the contrast just enough to feel editorial.

## 4. Component Stylings

### Buttons

**`button-primary` — "Try free"**
- Background `#0070f2`, text `#ffffff`, border `1px solid #0070f2`, radius `4`, padding `10px 20px`, font 14/600 (`button` token). Hover: `bg #0040b0` + shadow `0 4px 12px rgba(29,45,62,0.18)`. Active: `translateY(1px)`. Transition: `all 200ms ease-standard`.

**`button-primary-dark` — "Talk to an expert" (on navy band)**
- Background `#ffffff`, text `#0070f2`, border `1px solid #ffffff`. White-on-blue inverse for use over the navy feature band.

**`button-secondary` — "Learn more"**
- Background transparent, text `#0070f2`, border `1px solid #0070f2`. Same radius/padding/active as filled. Hover: `bg #ebf8ff`.

**`button-secondary-dark` — "Read story" (on navy band)**
- Background transparent, text `#ffffff`, border `1px solid #ffffff`. Hover: `bg rgba(255,255,255,0.10)`.

**`button-tertiary` — Inline link CTA**
- Background transparent, text `#0070f2`, no border, padding `10px 12px`. Trailing chevron arrow appears on hover. Pattern: `Read more ›` style.

**`button-ghost` — Quiet utility**
- Background transparent, text `#1d2d3e`, border `1px solid #d8dee5`. Used as a secondary on a button-heavy page where the outlined-blue would be too loud.

### Cards

**`card-content` — Default Content Card**
- Background `#ffffff`, radius `6`, border `1px solid #d8dee5`, padding `24px`. Default shadow: `none` (hairline-only). Hover shadow: `0 4px 16px rgba(29,45,62,0.10)` over 200ms. Used for feature cards, industry tiles, customer story cards.

**`card-feature` — Hero Feature Card**
- Background `#f5f6f7`, radius `12`, border `none`, padding `40px`. Larger radius and shaded surface signal "featured" without using a colored border or shadow.

**`card-stats` — Stat Callout**
- Background `#ffffff`, radius `6`, border `1px solid #d8dee5`, padding `32px 24px`. Metric size `56`, color `#0070f2`, family 72 / weight 700. Below: 14/600 navy label. Three-up grid on industry pages: "€2.1B saved / 35% faster cycle / 99.9% uptime".

### Badges & Pills

**`badge-info` — "New", "Generative AI"**
- Background `#ebf8ff`, color `#0040b0`, radius `4`, padding `4px 10px`, font 12/600. Uppercase letter-spacing `0.04em`.

**`badge-success` — "Available now"**
- Background `#e9f8ec`, color `#256d0e`, radius `4`, padding `4px 10px`.

**`badge-warning` — "Beta"**
- Background `#fff3e0`, color `#a04400`, radius `4`, padding `4px 10px`.

**`pill-language` — "EN", "DE", "JA"**
- Background `#f5f6f7`, color `#1d2d3e`, radius `9999`, padding `4px 12px`. Language-selector pills on top-bar utility.

### Inputs

**`input-text` — Default Text Input**
- Background `#ffffff`, border `1px solid #d8dee5`, radius `4`, padding `12px 16px`. Focus border: `2px solid #0070f2` (no glow ring). Label sits above input, left-aligned, 14/600 navy.

**`input-search` — Top-bar Global Search**
- Background `#f5f6f7`, border `1px solid #d8dee5`, radius `4`, padding `10px 16px 10px 40px`. Search icon 16px, left-padded.

**`select` — Dropdown**
- Same shell as input-text + chevron-down icon right-padded `40px`. On open: chevron rotates 180° over 200ms.

### Navigation

**`global-nav` — Fixed Top Bar**
- Background `#ffffff`, height `72`, border-bottom `1px solid #eaecee`, sticky on scroll. Items: SAP wordmark left, primary nav (Solutions / Industries / Services / Insights) center, utility (Search / Login / Contact) right. Never shadowed at rest — only the 1px hairline.

**`mega-menu` — Solutions Hover Panel**
- Background `#ffffff`, radius `0 0 8px 8px`, shadow `0 16px 32px rgba(29,45,62,0.10)`, 4-column grid of category links + featured banner right. Hover-trigger with 200ms delay; click-trigger on touch devices.

**`sub-nav` — Sticky Section Nav**
- Below global nav on long article/product pages. Height `48`, background `#ffffff`, border-bottom `1px solid #eaecee`. Items: in-page anchors with active-link `2px solid #0070f2` underline.

**`feature-band` — Navy Splash**
- Background `#1d2d3e`, color `#ffffff`, padding `96px 0`. 50/50 split: copy left + product visual right. Used once per page maximum.

**`footer` — Deep Navy Footer**
- Background `#1d2d3e`, color `#ffffff`, padding `64px 0 32px`. 5 columns: Solutions / Industries / Services / Resources / Company. Legal strip below with `1px solid rgba(255,255,255,0.10)` separator.

## 5. Layout Principles

### Spacing System
Base unit: 4px. Scale: `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160`. Components use 16/24/32; sections use 64/96/128. The system favors 8px-multiples for component padding (`10px 20px` button is the rare odd one — scaled from a 24px-target padding minus 4px optical).

### Grid & Container
Max page width: `1280px` with `40px` outer gutters on desktop, `24px` on tablet, `16px` on mobile. Hero sections break the container width and use `100vw` backgrounds with `1280px` inner content. Industry-page feature grids run 3-up on desktop, 2-up on tablet, 1-up on mobile.

### Whitespace Philosophy
SAP is **density-tolerant rather than maximalist-airy**. Body line-height sits at `1.5`, paragraphs spaced `16px` apart. Section padding is `96px` top/bottom on desktop — generous but not Stripe-airy. The system trusts the reader to scan dense content (product matrices, industry comparisons) without requiring extreme whitespace.

### Section Cadence
Page rhythm alternates **white ground → soft `#f5f6f7` zone → navy `#1d2d3e` feature band → white ground**. Navy bands appear once per page maximum, reserved for a single emphatic moment (customer testimonial, multi-product callout, conference hero).

## 6. Shapes & Radius Scale

- **Micro 2px** — internal divider chips, inline tag accents
- **Standard 4px** — buttons, inputs, primary chips, badges
- **Card 6px** — content cards, customer-story tiles, table containers
- **Modal 8px** — dialogs, overlays, dropdown panels
- **Featured 12px** — hero feature card, industry tile, stat-grid container
- **Pill 9999px** — language pills, status badges, "New" tags

Compound radii: mega-menu uses `0 0 8px 8px` (top-flat, bottom-rounded) to anchor under the global nav. Sub-nav uses `0` (flat) since it sits flush against the global nav above.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | `box-shadow: none`, hairline `1px solid #d8dee5` only | Default cards, inputs, tables — flat-with-line aesthetic |
| 1 | `0 4px 16px rgba(29,45,62,0.10)` | Card hover, dropdown panel, popover |
| 2 | `0 8px 24px rgba(29,45,62,0.14)` | Elevated card (industry detail tile), tooltip |
| 3 | `0 16px 32px rgba(29,45,62,0.10)` | Mega-menu hover panel — wide spread, low alpha |
| 4 | `0 24px 48px rgba(29,45,62,0.20), 0 4px 8px rgba(0,0,0,0.10)` | Modal dialog, full-screen overlay |
| 5 | scrim `rgba(29,45,62,0.55)` + Level 4 shadow | Scrim-backed modal — navy alpha rather than black |

### Shadow Philosophy

SAP shadows are **navy-tinted, not black**. Every elevation layer uses `rgba(29,45,62, alpha)` for the primary shadow, which keeps depth feeling "cobalt-coherent" with the brand. On modal-tier elevations, a secondary `rgba(0,0,0,0.10)` layer adds neutral grounding under the navy tint. The system never reaches for a single heavy drop shadow — it always layers two or three thin spreads. Cards default to `0` shadow with a hairline border; shadow only appears on hover. This restraint reads as "enterprise-grade" rather than "consumer-app playful".

## 8. Interaction & Motion

### Easing Curves
- `ease-standard: cubic-bezier(0.4, 0, 0.2, 1)` — universal default
- `ease-emphasized: cubic-bezier(0.2, 0, 0, 1)` — entry animations, modal open
- `ease-decelerate: cubic-bezier(0, 0, 0.2, 1)` — outgoing animations, modal close

### Duration Buckets
- `duration-fast: 120ms` — chevron rotations, badge color shifts, focus rings
- `duration-standard: 200ms` — button hovers, card hover lifts, link underlines
- `duration-slow: 320ms` — mega-menu open, image fade-ins
- `duration-page: 400ms` — full-page transitions on Insights articles

### Per-Component Micro-States
- **Button hover**: bg shifts to brand-hover (`#0040b0`) + shadow rises from `none → 0 4px 12px rgba(29,45,62,0.18)` over 200ms. Active: `translateY(1px)` press dip.
- **Card hover**: shadow rises from `none → 0 4px 16px rgba(29,45,62,0.10)` over 200ms. No transform lift — the shadow alone signals interactivity.
- **Link hover**: underline grows from `0 → 100%` width, left-to-right, over 200ms. On focus: 2px outline ring instead of underline.
- **Mega-menu open**: opacity `0 → 1` + translateY `-8px → 0` over 320ms ease-emphasized. 200ms hover-intent delay before opening.
- **Modal open**: scrim fades `0 → 0.55` over 320ms; modal scales `0.96 → 1` + opacity `0 → 1` over 400ms ease-emphasized.
- **Image fade-in**: `opacity 0 → 1` + `filter blur(8px) → blur(0)` over 600ms on intersection-observer trigger.
- **Chevron rotate**: dropdown chevron rotates `0 → 180deg` over 120ms ease-standard.

### Page Transitions
SAP does not use SPA-style page transitions on the marketing surface — every page is a full document load. Insights articles use a subtle `opacity 0 → 1` over 400ms on initial paint to mask the FOUT.

### Reduced Motion Strategy
Respects `prefers-reduced-motion: reduce`:
- All transforms (translateY, scale) degrade to opacity changes
- Underline-grow disabled — links go straight to underlined state
- Image fade-ins disabled — images appear instantly
- Modal scale-in disabled — modal appears at scale-1 with opacity fade only
- Chevron rotation preserved (spatial cue, not decoration)

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)
- Text `#1d2d3e` on bg `#ffffff` — **13.2:1 (AAA at body sizes)**
- Text-strong `#0a2540` on bg `#ffffff` — **15.8:1 (AAA)**
- Text-soft `#556270` on bg `#ffffff` — **6.8:1 (AA at body sizes)**
- White `#ffffff` on signal blue `#0070f2` — **4.6:1 (AA at body sizes)**
- White `#ffffff` on navy `#1d2d3e` — **14.0:1 (AAA)**
- Brand `#0070f2` on bg `#ffffff` — **4.6:1 (AA at large text only)** — acceptable for h1/h2 stat callouts; never used for body links (which underline on hover for additional cue).

### Focus Indicators
Universal: `2px solid #0070f2` ring with `2px` offset. On dark feature bands, the ring switches to `2px solid #ffffff` for visibility against navy. Buttons add a 2px ring + 1px outer offset; inputs use a 2px solid border replacement (no glow).

### ARIA Patterns
- Mega-menu: `aria-haspopup="menu"` + `aria-expanded` toggled on hover/focus
- Hero carousel: `aria-roledescription="carousel"` + slide counter `aria-live="polite"`
- Pricing tabs: roving `tabindex` (one tabbable tab, arrow-key navigation)
- Language switcher: `<select>` with visible `<label>` (no aria-label-only patterns)

### Keyboard Navigation
Tab order: skip-link → wordmark → primary nav (Solutions / Industries / Services / Insights) → utility (Search / Login / Contact / Language) → main content → footer columns → legal strip. Esc closes mega-menu, modal, search overlay. Enter activates buttons and links; Space activates buttons (not links — accessibility convention).

### Screen Reader Hints
- All icons have `aria-label` when standalone, `aria-hidden="true"` when paired with visible text
- Stat-callout numerals use `aria-label="2.1 billion euros saved"` instead of relying on `€2.1B` visual shorthand
- Decorative product visuals use `role="img"` + `aria-label` describing the screenshot, not `alt=""`

### Reduced Motion
Honored via `@media (prefers-reduced-motion: reduce)` — see §8 for full degradation matrix.

## 10. Responsive Behavior

### Breakpoints
| Name | Min Width | Notes |
|------|-----------|-------|
| mobile | 0 | Default mobile-first stack |
| tablet | 600 | 2-column feature grids, 56px header |
| desktop | 900 | 3-column feature grids, mega-menu activates |
| wide | 1280 | Max content width, hero breaks 100vw |
| ultra | 1600 | Larger gutter spacing, no layout change |

### Touch Targets
Minimum 44×44px for all interactive elements. Buttons stretch from 32px-tall (button-sm) to 48px-tall (button-large) — small button sizes add padding to meet touch-target on mobile.

### Collapsing Strategy
- **Global nav**: collapses to hamburger menu below 900px. Solutions / Industries become accordion sections inside the slide-in panel.
- **Sub-nav**: collapses to a horizontal-scroll chip strip below 600px.
- **Mega-menu**: replaced by a tap-expand accordion on touch devices.
- **Feature bands**: 50/50 split collapses to stacked (copy-above-image) below 900px.
- **Stat grid**: 3-up grid → 2-up at 600 → 1-up below.
- **Footer**: 5-column → 2-column → accordion below 600px.

### Image Behavior
- Hero images: `aspect-ratio: 16/9` desktop, `4/3` tablet, `1/1` mobile
- Industry tiles: `aspect-ratio: 4/3`, `object-fit: cover`
- All images load with native `loading="lazy"` (except hero); `srcset` for `1x / 2x / 3x`
- Image fade-in via intersection observer with `margin-bottom: 100px` preroll

### Container Queries
Used on the **stat-callout** card to switch numeral size from `56` → `40` when the card narrower than 320px (e.g., when nested inside a 4-column instead of 3-column grid).

## 11. Content & Voice

### Tone
SAP's voice is **corporate-confident-warm** — formal enough to convince a CFO, plain enough that a procurement manager understands the value prop without translation. The brand explicitly avoids "salesy" verbs and tech jargon; their internal style guide names "clarity over cleverness" as the primary rule.

### Microcopy Patterns

**Button verbs:**
- Primary CTAs use action verbs: "Try free", "Talk to an expert", "Watch the demo", "Get started", "Read the story"
- Secondary CTAs use exploration verbs: "Learn more", "See how it works", "View pricing", "Explore solutions"
- Tertiary CTAs use guidance verbs: "Read more ›", "Find your industry ›", "Compare plans ›"

**Error message recipe:** `[What went wrong] + [Why] + [What to do]` — e.g., "We couldn't process your form. Please check your email address and try again. If the problem continues, contact support."

**Success confirmation:** Quiet and definitive — "Your message has been sent. We'll respond within 1 business day." No exclamation points.

### Empty States
SAP empty states are **informational, not whimsical**. A search-no-results says "No solutions match 'xyz'. Try broader keywords or browse by industry." — never "Hmm, nothing here!" or illustrated mascot emptiness.

### CTA Verb Conventions
- "Try free" — for products with a freemium tier (SAP Build, SAP Sales Cloud)
- "Talk to an expert" — for enterprise-sales products (S/4HANA, Concur)
- "Watch the demo" — for product walkthroughs
- "Read the story" — for customer case studies
- "Explore solutions" — for category/index pages
- "Get started" — used sparingly; reserved for self-serve products

### Voice Anchors
- Use second person ("you can"). Avoid first-person plural ("we'll show you").
- Lead with the customer outcome, not the product feature. ("Reduce close cycle time by 35%" not "S/4HANA Cloud Financial Close")
- Avoid superlatives ("the best", "world-class"). Lead with specific numbers.
- Industry-specific pages use the customer's vocabulary, not SAP's. (e.g., the Retail page says "merchandise planning", not "SAP CAR".)

## 12. Dark Mode & Theming

**Light-only — no dark variant offered on the marketing site.**

Feature bands are dark-by-content (navy `#1d2d3e` panels), not theme-driven — they appear in light mode just as they do in any (hypothetical) dark mode. The SAP product surface (Fiori 3 design system) supports `sap_horizon` (light), `sap_horizon_dark` (dark), and `sap_horizon_hcb` (high contrast black) themes, but the public marketing site explicitly does not ship a dark mode toggle.

Reasoning: SAP's marketing audience includes 50+ industries and 25+ languages, and the brand prioritizes a single canonical visual identity across all touchpoints. A dark mode would fragment the brand surface; the navy feature band already carries the "dark moment" emotional anchor that dark-mode users typically seek.

## 13. Lineage & Influences

SAP's design language inherits from the **enterprise-software broadsheet tradition** — IBM, Oracle, Microsoft Office's pre-Fluent era — calibrated for trust over delight. The single confident signal blue echoes the chromatic discipline of Stripe and pre-2018 IBM, but SAP holds it tighter: never a gradient, never a hue rotation, never a brand-blue stop-trio. Where Stripe builds trust through chromatic confidence + editorial restraint, SAP doubles down on restraint and adds heritage: a 50-year-old company running 77% of global transaction revenue, dressed in the same color it shipped on its first product brochures.

The custom **72** typeface is the system's signature move. Commissioned from Foundry Type explicitly for SAP's interface needs, 72 has visible humanist warmth (single-story 'a', open counters) inside an otherwise rigorously corporate framework — it humanizes a system that could read as cold-spreadsheet. The naming references SAP's founding year (1972) and the customary 72-pixel hero size used across enterprise UIs of that era.

What SAP rejects: pastel accents (the system has no pinks, no soft purples), gradients (brand blue is solid `#0070f2` everywhere), pill buttons (4px-radius rectangles only), brand-as-illustration (the system uses photography and diagrams, never mascot illustrations). The Fiori 3 product surface allows decorative chart colors and accent palettes inside applications, but the marketing surface is ruthlessly mono-blue.

**Named influences:**
- **Stripe** — single-blue chromatic discipline + editorial restraint, scaled to enterprise
- **IBM Carbon** — corporate-broadsheet typography hierarchy, sub-nav anchor pattern
- **Microsoft Fluent (pre-2024)** — neutral-warm canvas with cobalt action color
- **Oracle Redwood** — hairline-bordered card discipline, deep-navy feature band

## 14. Do's and Don'ts

**Do**
- Keep the action palette to a single confident signal blue (`#0070f2`) — secondary actions use `#ebf8ff` soft surfaces, never a different hue.
- Use deep navy (`#1d2d3e`) for text and feature bands; pure black reads as harsh on this canvas.
- Lock buttons to 4px-radius rectangles; pill buttons are reserved for status badges and language selectors.
- Lead with tabular numerals (`tnum`) in any pricing or financial context — SAP's ERP heritage demands column alignment.
- Reach for navy feature bands as a "single emphatic moment" per page; never two on the same page.
- Use 72 (or Inter as substitute) at all sizes; never introduce a serif or script for editorial flourish.
- Apply hover-only shadows to cards — default state is hairline-only.
- Use editorial weight + size shifts to carry hierarchy, not color rotations.
- Tint shadows with navy alpha (`rgba(29,45,62, x)`) rather than pure black for cobalt-coherent depth.
- Honor `prefers-reduced-motion` — degrade transforms to opacity, disable underline-grow.

**Don't**
- Don't introduce a second accent color (orange, purple, teal) — the system is monolithically blue.
- Don't use gradients — every brand surface is a solid color or photographic image.
- Don't shadow the global nav at rest; only the 1px hairline border anchors it.
- Don't pill-shape primary CTAs — that signals B2C SaaS; SAP is enterprise.
- Don't use pure-black text — always navy `#1d2d3e` for body, `#0a2540` for headings.
- Don't rotate brand blue per industry — every industry page uses the same `#0070f2`.
- Don't introduce illustrated mascots or pastel gradient heroes — the brand surface is photography + diagrams only.
- Don't use exclamation points in marketing copy — the voice is corporate-confident, not enthusiastic.
- Don't rely on color alone for state (success/warning/danger) — always pair with an icon.
- Don't apply heavy drop shadows to cards — depth here is hairline + whisper-soft hover.
- Don't break the 1280px page-width constraint outside hero `100vw` background panels.
- Don't use button-medium below 14px font size — it fails minimum touch-target legibility.

## 15. Agent Prompt Guide

### Quick Color Reference
```
bg: #ffffff
text: #1d2d3e
text-strong: #0a2540
brand: #0070f2
brand-hover: #0040b0
navy-band: #1d2d3e
surface-soft: #f5f6f7
border: #d8dee5
success: #36a41d
danger: #d20a0a
```

### Example Component Prompts

1. *"Create a hero section in the SAP design system: white canvas, 72-Bold display headline at 72px with -0.02em tracking and navy `#1d2d3e` color, body intro at 18/1.55, and a primary CTA "Try free" filled in `#0070f2` with a secondary outlined "Watch the demo" beside it. Use the 72 typeface (or Inter as substitute), 4px button radius, and 96px section padding."*

2. *"Design an enterprise-stat card in the SAP style: white card, 6px radius, 1px hairline border `#d8dee5`, 24px padding. Display a metric ("€2.1B saved") at 56px in 72 Bold signal blue `#0070f2` with a 14/600 navy label below. Three-up grid on desktop, hover lift to shadow `0 4px 16px rgba(29,45,62,0.10)` over 200ms."*

3. *"Build a navy feature band in SAP style: full-width `#1d2d3e` background, 96px vertical padding, 50/50 split with white headline (44/700) + body copy on the left and a product screenshot on the right. Include a primary CTA in white `#ffffff` filled with `#0070f2` text, plus an outlined-white secondary."*

4. *"Render a 5-column footer in SAP style: deep navy `#1d2d3e` background, white text, 64px top padding, 32px bottom padding. Columns: Solutions / Industries / Services / Resources / Company. Add a legal strip below separated by a 1px `rgba(255,255,255,0.10)` hairline."*

5. *"Create a mega-menu hover panel in SAP style: white background, `0 0 8px 8px` bottom-rounded radius, shadow `0 16px 32px rgba(29,45,62,0.10)`, 4-column grid of category links plus a featured banner on the right. Open animation: opacity 0→1 + translateY -8px→0 over 320ms ease-emphasized."*

6. *"Design an SAP-style customer story card: 6px radius, 1px hairline border, 24px padding, white background. Top: company logo + "Customer Story" eyebrow in 12/600 uppercase with 0.08em tracking. Middle: pull-quote in 22/600 navy text. Bottom: link CTA "Read the story ›" in signal-blue."*

### Iteration Guide

1. **Start with the chromatic discipline.** If your design uses more than three colors (white + navy + signal blue + neutral grays), it's already off-brand. Strip to those four and add only when semantic state demands it.

2. **Switch to 72 first, refine tracking second.** The typeface alone gets you 60% of the way. Then add `-0.02em` tracking on display sizes and turn on `font-variant-numeric: tabular-nums` for any numerical contexts.

3. **Replace gradients with solid colors.** Any gradient signals "consumer SaaS"; SAP is enterprise. Use a solid `#0070f2` brand block or a navy `#1d2d3e` feature band instead.

4. **Reduce button radius from 8px to 4px.** Pill buttons (50px+ radius) are the strongest "off-brand" signal. SAP buttons are crisp 4px rectangles.

5. **Replace black with navy.** Every `#000000` in your design should become `#1d2d3e` (text) or `#0a2540` (headings). The shift is subtle but recognizable.

6. **Tone down shadows.** Default cards should be hairline-only (`1px solid #d8dee5`, no shadow). Add hover-only shadow at `0 4px 16px rgba(29,45,62,0.10)`. Tint navy, not black.

7. **Use one navy feature band per page.** If you have multiple dark sections, you're echoing Linear or Vercel — not SAP. Reserve the navy band as a single emphatic moment.

8. **Lead with the customer outcome in copy.** Replace "Powered by SAP S/4HANA" with "Reduce close-cycle time by 35%". Lead with specific, quantified results.
