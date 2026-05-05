---
name: Frontegg
tagline: PP Neue Machina display + Neue Montreal body — plug-and-play user-management with deep-blue gravitas.
author: webdesignhot
source_url: https://frontegg.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, auth, b2b, identity, sans, premium, plug-and-play, user-management]
preview_swatch: ['#ffffff', '#1a1a2f', '#003ae4']
related: [stripe, supabase, sentry]
description: 'Frontegg''s marketing site is the canonical "plug-and-play user-management" platform canvas — a white ground (`#ffffff`) anchored on deep-navy ink (`#1a1a2f`), display in **PP Neue Machina** at 56/400 and body in **PP Neue Montreal** at 18/400. The two custom Pangram Pangram Foundry typefaces — Machina''s slightly geometric-mechanical display (with its signature angular `r`, `a`, and `e` glyphs) paired with Montreal''s quiet humanist body — give Frontegg its signature "Berlin design-studio + B2B-platform" hybrid voice. The signature accent is **deep blue `#003ae4`** for inline links and brand emphasis, used sparingly because the page architecture leans on the type itself for chromatic rhythm. Where competitors lean on a single brand colour or fully-pill CTAs, Frontegg''s identity rests entirely on the typographic discipline — display in Machina is unmistakable. The page reads as a Berlin-studio design-portfolio that happens to ship enterprise B2B identity infrastructure: confident type, restrained colour, generous editorial breath, and the unique PP Neue Machina + Montreal pairing that no other auth platform has chosen. The result is the only B2B-identity site that successfully channels "European design-studio + B2B-platform" without sacrificing technical credibility.'

colors:
  bg: '#ffffff'                  # white canvas
  bg-soft: '#fafafa'             # softest off-white for alt sections
  bg-section: '#f4f4f6'          # section ground tier
  bg-blue-tint: '#f0f3ff'        # softest blue-tinted section
  bg-deep-navy: '#1a1a2f'        # deep-navy mood-zone
  bg-deepest: '#0e0e1f'          # deepest near-black footer
  surface: '#ffffff'
  surface-soft: '#fafafa'
  surface-strong: '#f4f4f6'
  surface-blue-tint: '#f0f3ff'
  surface-dark: '#1a1a2f'
  surface-dark-card: '#252540'   # deep-blue card on dark band
  text: '#1a1a2f'                # primary ink — deep-navy near-black (rgb(26,26,47))
  text-strong: '#0e0e1f'         # deepest near-black for emphasis
  text-body: '#3a3a4f'           # body — slightly lighter slate
  text-muted: '#6c6c80'          # secondary metadata
  text-soft: '#8a8a9a'           # caption
  text-faint: '#aaaab5'          # disabled
  text-on-dark: '#ffffff'        # white on dark sections
  text-on-deep-navy: '#ffffff'
  brand: '#003ae4'               # Frontegg deep-blue — link / brand emphasis
  brand-deep: '#0028b0'          # darker pressed
  brand-light: '#1a52f0'         # hover brightening
  brand-soft: '#e6ecff'          # softest blue surface
  brand-pale: '#bfcfff'          # paler blue
  navy-cta: '#1a1a2f'            # primary CTA fill (deep-navy)
  navy-cta-hover: '#252540'      # hover brightens
  navy-cta-active: '#0e0e1f'     # pressed deepest
  blue-cta: '#003ae4'            # blue accent CTA
  on-brand: '#ffffff'
  on-navy-cta: '#ffffff'
  on-dark: '#ffffff'
  on-light: '#1a1a2f'
  border: '#e5e5e9'              # default 1px hairline
  border-soft: '#efeff2'         # editorial divider
  border-strong: '#cdcdd2'       # stronger hairline
  border-input: '#cdcdd2'        # form input default
  border-blue: '#003ae4'         # focus ring
  border-on-dark: 'rgba(255,255,255,0.10)'
  scrim: 'rgba(26,26,47,0.48)'   # modal backdrop (deep-navy)
  shadow-card: 'rgba(26,26,47,0.04)'
  shadow-elev: 'rgba(26,26,47,0.08)'
  shadow-modal: 'rgba(26,26,47,0.16)'
  success: '#0f8a4d'
  success-bg: '#e6f6ec'
  warning: '#a35316'
  warning-bg: '#fef0e6'
  danger: '#dc2626'
  danger-bg: '#fdebeb'
  info: '#003ae4'

typography:
  display:
    family: '"PP Neue Machina", "PP Neue Machina Fallback", -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [400, 500, 700]
    opentype-features: ['ss01', 'ss02']
  body:
    family: '"PP Neue Montreal", "PP Neue Montreal Fallback", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
    weights: [400, 500, 600]
  body-alt:
    family: 'Manrope, -apple-system, sans-serif'
    weights: [400, 500, 600, 700]
  body-alt-2:
    family: 'Epilogue, -apple-system, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "SF Mono", "Fira Code", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    hero-display:    { size: 80, weight: 400, lineHeight: 1.0,  tracking: '0.01em',  family: display, opentype: ['ss01'] }
    h1:              { size: 56, weight: 400, lineHeight: 1.0,  tracking: '0.018em', family: display, opentype: ['ss01'] }
    h2:              { size: 40, weight: 400, lineHeight: 1.10, tracking: '0.005em', family: display }
    h3:              { size: 28, weight: 400, lineHeight: 1.20, tracking: '0',       family: display }
    h4:              { size: 22, weight: 500, lineHeight: 1.30, tracking: '0',       family: display }
    h5:              { size: 18, weight: 500, lineHeight: 1.40, tracking: '0',       family: display }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.50, tracking: '0.10em',  family: display, transform: uppercase }
    body-lg:         { size: 20, weight: 400, lineHeight: 1.60, tracking: '0',       family: body }
    body-md:         { size: 18, weight: 400, lineHeight: 1.78, tracking: '0',       family: body }
    body-sm:         { size: 16, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    body-xs:         { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.40, tracking: '0',       family: body }
    button-label:    { size: 15, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body }
    nav-link:        { size: 15, weight: 500, lineHeight: 1.20, tracking: '0',       family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.40, tracking: '0',       family: body }
    micro:           { size: 12, weight: 400, lineHeight: 1.40, tracking: '0',       family: body }
    code-inline:     { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',       family: mono }
    code-block:      { size: 13, weight: 400, lineHeight: 1.55, tracking: '0',       family: mono }
    pricing-display: { size: 64, weight: 400, lineHeight: 1.0,  tracking: '0.005em', family: display, opentype: ['tnum'] }
    quote:           { size: 24, weight: 400, lineHeight: 1.40, tracking: '-0.005em', family: display, italic: true }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8           # default button — observed
  xl: 12
  card: 16
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72
  hero-padding-y: 160

components:
  button-primary:
    bg: '#1a1a2f'
    color: '#ffffff'
    radius: 8
    padding: '12px 20px'
    height: 44
    font: button-label
    use: 'Primary CTA — deep-navy fill, white text. "Get started", "Book a demo".'
  button-blue:
    bg: '#003ae4'
    color: '#ffffff'
    radius: 8
    padding: '12px 20px'
    height: 44
    use: 'Brand-blue CTA — used for emphasis CTAs and conversion moments.'
  button-secondary:
    bg: '#ffffff'
    color: '#1a1a2f'
    border: '1px solid #cdcdd2'
    radius: 8
    padding: '12px 20px'
    height: 44
    use: 'Outlined ghost — secondary CTA on light section.'
  button-ghost-dark:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid rgba(255,255,255,0.20)'
    radius: 8
    padding: '12px 20px'
    height: 44
    use: 'Ghost CTA on dark band.'
  button-text-link:
    bg: 'transparent'
    color: '#003ae4'
    use: 'Inline link — brand-blue text. Hover underlines.'
  card-feature:
    bg: '#ffffff'
    color: '#3a3a4f'
    radius: 16
    padding: '32px'
    border: '1px solid #e5e5e9'
    use: 'Feature card — hairline border, generous internal padding.'
  card-section:
    bg: '#fafafa'
    color: '#3a3a4f'
    radius: 16
    padding: '32px'
    use: 'Section-grey card — flat surface, no border.'
  card-blue:
    bg: '#f0f3ff'
    color: '#1a1a2f'
    radius: 16
    padding: '32px'
    use: 'Blue-tinted feature card — used for the brand-emphasized "Why Frontegg" moments.'
  card-deep-navy:
    bg: '#1a1a2f'
    color: '#ffffff'
    radius: 16
    padding: '32px'
    use: 'Dark feature card — used in the brand mood-zone band.'
  card-deep-navy-elevated:
    bg: '#252540'
    color: '#ffffff'
    radius: 16
    padding: '32px'
    use: 'Slightly elevated dark card — for tier separation within a dark band.'
  card-pricing:
    bg: '#ffffff'
    color: '#3a3a4f'
    radius: 16
    padding: '32px'
    border: '1px solid #e5e5e9'
    use: 'Pricing tier — recommended highlights with 2px brand-blue border.'
  input:
    bg: '#ffffff'
    color: '#1a1a2f'
    border: '1px solid #cdcdd2'
    focus: '0 0 0 2px #003ae4'
    radius: 8
    height: 44
    padding: '12px 14px'
    placeholder: '#8a8a9a'
    use: 'Form input — slim 8px radius, brand-blue focus ring.'
  navbar-top:
    bg: 'rgba(255,255,255,0.92) backdrop-blur(8px)'
    color: '#1a1a2f'
    height: 72
    border-bottom: '1px solid #e5e5e9'
    use: 'Frosted-white navbar with hairline bottom.'
  code-block:
    bg: '#1a1a2f'
    color: '#ffffff'
    radius: 12
    padding: '20px 24px'
    use: 'JetBrains Mono code block on deep-navy ground — brand-blue keywords, light syntax.'
  pill-eyebrow:
    bg: 'transparent'
    color: '#1a1a2f'
    border: '1px solid #cdcdd2'
    radius: 9999
    padding: '4px 10px'
    use: 'Outlined eyebrow pill — PP Neue Machina uppercase 12/500.'
  pill-eyebrow-blue:
    bg: '#e6ecff'
    color: '#003ae4'
    radius: 9999
    padding: '4px 10px'
    use: 'Blue eyebrow pill — soft blue ground, brand-blue text.'
  modal:
    bg: '#ffffff'
    color: '#3a3a4f'
    radius: 16
    padding: '32px'
    border: '1px solid #e5e5e9'
    shadow: 'rgba(26,26,47,0.16) 0 24px 48px'
    use: 'Centred dialog over deep-navy scrim.'
  feature-illustration:
    bg: '#1a1a2f'
    color: '#ffffff'
    radius: 16
    padding: '48px'
    use: 'Hero illustration card — deep-navy ground with line-art SVG of identity flow.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  cta-hover: 'deep-navy brightens 1a1a2f → 252540 over 150ms; brand-blue darkens 003ae4 → 0028b0'
  card-hover: 'border deepens slightly + 1px translateY(-1) over 240ms; subtle 4% navy-tinted shadow appears'
  hero-reveal: 'sections fade-up from translateY(16px)/opacity 0 → 0/1 over 320ms emphasized'
  reduced-motion: 'respects prefers-reduced-motion: reduce — translateY suppressed; transitions remain opacity-only.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  ambient: 'none — most cards are hairline-bordered only'
  card: 'rgba(26,26,47,0.04) 0 4px 12px'
  elevated: 'rgba(26,26,47,0.08) 0 16px 32px'
  modal: 'rgba(26,26,47,0.16) 0 24px 48px'
  ring-blue: '0 0 0 2px #003ae4'
  ring-navy: '0 0 0 2px #1a1a2f'

accessibility:
  contrast-text-on-bg: 14.0        # #1a1a2f on #ffffff — AAA
  contrast-body-on-bg: 9.4         # #3a3a4f on #ffffff — AAA
  contrast-on-navy-cta: 14.0       # #ffffff on #1a1a2f — AAA
  contrast-on-blue-cta: 8.0        # #ffffff on #003ae4 — AAA
  contrast-blue-on-bg: 8.0         # #003ae4 on #ffffff — AAA
  contrast-muted-on-bg: 5.7        # #6c6c80 on #ffffff — AA
  focus-ring: '2px solid #003ae4 + 2px outline-offset (brand-blue ring)'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab moves logo → product → developers → customers → pricing → log in → CTA; arrow keys in mega-menu.'

dark-mode: optional   # Marketing canvas is light-only by default; deep-navy mood-zone bands; full dark theme available for `<FronteggUI />` components

lineage:
  summary: |
    Frontegg's marketing site is the canonical "plug-and-play user-management"
    platform canvas — a white ground anchored on deep-navy ink (`#1a1a2f`)
    with hero display in PP Neue Machina at 56/400 and body in PP Neue
    Montreal at 18/400 with extra-loose 1.78 line-height. The Pangram
    Pangram Foundry pairing — Machina's geometric-mechanical display
    paired with Montreal's quiet humanist body — gives Frontegg its
    "Berlin design-studio + B2B-platform" hybrid voice. The display
    weight at Regular (400) with positive tracking (`+0.01em` to `+0.018em`)
    is the unusual move that distinguishes Frontegg from negative-tracking
    peers. The visual lineage runs through Pangram Pangram Foundry /
    European-design-studio aesthetic (PP Neue Machina + Montreal pairing
    is a deliberate move borrowed from Berlin and Amsterdam studios),
    B2B-platform-with-design-discipline positioning (deep-navy + brand-blue
    chromatic system, editorial 1.78 line-height body, generous 160px
    hero padding), and modern dev-tool foundation (hairline cards,
    JetBrains Mono code blocks, frosted-glass navbar).
  influences:
    - name: Pangram Pangram Foundry
      role: PP Neue Machina + PP Neue Montreal typeface pairing — the typographic signature.
      url: https://pangrampangram.com
    - name: European design-studio aesthetic (Berlin / Amsterdam / Copenhagen)
      role: Generous editorial breath, considered type, Pangram Pangram lineage.
      url: https://werkplaatstypografie.org
    - name: Stripe
      role: Confidence-via-restraint, hairline-bordered cards, single brand-colour discipline.
      url: https://stripe.com
    - name: Vercel
      role: Frosted-glass navbar, restraint discipline, modern dev-tool foundation.
      url: https://vercel.com
    - name: WorkOS
      role: B2B-enterprise-ready positioning — Frontegg differentiates with design-studio polish.
      url: https://workos.com
    - name: Auth0
      role: Predecessor in identity-platform aesthetic; lineage in plug-and-play user-management.
      url: https://auth0.com
---

## 1. Visual Theme & Atmosphere

Frontegg's marketing site is the canonical **"plug-and-play user-management" platform canvas** — a white ground (`#ffffff`) anchored on deep-navy ink (`#1a1a2f`) with hero display in **PP Neue Machina** at 56/400 and body in **PP Neue Montreal** at 18/400 with extra-loose 1.78 line-height. The two Pangram Pangram Foundry typefaces — Machina's slightly geometric-mechanical display (with signature angular glyphs) paired with Montreal's quiet humanist body — give Frontegg its signature "Berlin design-studio + B2B-platform" hybrid voice. The page reads as the kind of design-portfolio you'd expect from a Berlin or Amsterdam studio that happens to ship enterprise B2B identity infrastructure: confident type, restrained colour, generous editorial breath, and unmistakable typographic discipline.

The chromatic system is **white + deep-navy + bright brand-blue**. The canvas is pure `#ffffff`. Heading text runs in `#1a1a2f` (deep-navy near-black with slight purple undertone, distinct from absolute black). Body text in `#3a3a4f` (slightly lighter slate). The brand colour is **deep blue `#003ae4`** — used for inline links, brand emphasis, and the focus ring. Where competitors lean on a single brand colour for primary CTAs, Frontegg's primary CTA is the deep-navy `#1a1a2f` itself — the brand-blue is reserved for emphasis CTAs ("Try free") and inline links. This split (navy primary, blue accent) is the chromatic discipline.

Type runs **PP Neue Machina** for display and **PP Neue Montreal** for body. Both are Pangram Pangram Foundry typefaces. Machina is the typographic signature — its slightly geometric-mechanical display (with the angular `r`, `a`, and `e` glyphs that distinguish it from Inter or Helvetica Neue) immediately reads as "design-studio considered" rather than "B2B utility". Display weight is **400 (Regular)**, not Bold or Heavy — Frontegg's typographic discipline is to let Machina's character carry the display without relying on weight. Body Montreal at 18/400 with **1.78 line-height** is generously paced — that's significantly looser than the conventional 1.5 line-height, making body prose feel editorial rather than utility. Eyebrows are 12/500 uppercase Machina with 0.10em tracking.

Shape language is **8–16px radii** with a sweet-spot at 8px for buttons. Buttons round at **8px** (a friendly-modern default). Inputs at 8px to match. Cards at 16px. The 8px button radius reads as friendly-but-architectural — softer than WorkOS's 2px (uncompromisingly architectural), tighter than Linear's 8px (which feels neutral).

Depth is achieved through **hairline borders + soft section grounds**. Most cards are hairline-bordered only — `1px solid #e5e5e9`. The dark mood-zone is `#1a1a2f` (the same deep-navy used for headings and primary CTA — the ink-as-section move). Within dark bands, slightly elevated cards use `#252540` for tier separation.

The signature visual element is the **deep-navy hero illustration band** — a wide section showing line-art SVG diagrams of identity flows (SSO, MFA, RBAC, organizations) on deep-navy ground with white strokes. This illustration band typically appears below the hero copy, providing a strong visual anchor that ties to the brand colour.

**Key Characteristics:**
- White canvas (`#ffffff`) with soft white (`#fafafa`) and section grey (`#f4f4f6`) alt sections
- Hero display in **PP Neue Machina** 56/400 (Regular weight) — the typographic signature
- Body in **PP Neue Montreal** 18/400 with **1.78 line-height** — extra-loose editorial pacing
- Deep-navy ink (`#1a1a2f`) for headings — slight purple undertone, never pure black
- Body slate (`#3a3a4f`) — slightly lighter than heading
- Deep blue (`#003ae4`) for inline links and brand emphasis CTAs
- Primary CTA fill is deep-navy `#1a1a2f` (not brand-blue) — chromatic discipline
- 8px button radius / 16px card radius — friendly-modern proportions
- PP Neue Machina + PP Neue Montreal pairing — Pangram Pangram Foundry duet
- Hairline-bordered cards with no shadow at rest
- Code blocks on deep-navy `#1a1a2f` ground (matches brand)
- 160px hero padding — editorial gravitas requires breath

## 2. Color Palette & Roles

### Primary

- **Canvas** (`#ffffff`) — pure-white default
- **Soft White** (`#fafafa`) — softest off-white for alt sections
- **Section Grey** (`#f4f4f6`) — section ground tier
- **Heading Navy** (`#1a1a2f`) — deep-navy for headings, primary CTA fill
- **Body Slate** (`#3a3a4f`) — body text, slightly lighter than heading
- **Strong Ink** (`#0e0e1f`) — deepest near-black for emphasis
- **Muted** (`#6c6c80`) — secondary metadata
- **Soft** (`#8a8a9a`) — caption, placeholder
- **Faint** (`#aaaab5`) — disabled

### Brand & Dark

- **Heading Navy** (`#1a1a2f`) — primary brand and CTA colour. Deep-navy near-black with slight purple undertone.
- **Navy Hover** (`#252540`) — hover brightening
- **Navy Active** (`#0e0e1f`) — pressed/active state
- **Deep Card** (`#252540`) — slightly lighter dark surface for tier separation in dark bands
- **Deepest** (`#0e0e1f`) — deepest near-black footer

### Accent

- **Brand Blue** (`#003ae4`) — deep blue, used for inline links, brand emphasis CTAs, focus rings, accent moments
- **Brand Light** (`#1a52f0`) — hover brightening
- **Brand Deep** (`#0028b0`) — pressed/active state
- **Brand Soft** (`#e6ecff`) — softest blue surface
- **Brand Pale** (`#bfcfff`) — paler blue
- **Blue Tint** (`#f0f3ff`) — softest blue-tinted section

### Interactive

- **Link** (`#003ae4`) — brand-blue, often without underline
- **Link Hover** (`#0028b0`) — darker
- **Selected** (`#003ae4`) — 2px brand-blue border on selected pricing tier, focused inputs
- **Disabled** (`#aaaab5`) — faint text on `#f4f4f6` surface

### Neutral Scale

- **Strong Ink** (`#0e0e1f`)
- **Heading Navy** (`#1a1a2f`)
- **Body Slate** (`#3a3a4f`)
- **Muted** (`#6c6c80`)
- **Soft** (`#8a8a9a`)
- **Faint** (`#aaaab5`)
- **Border Strong** (`#cdcdd2`)
- **Border Default** (`#e5e5e9`)
- **Border Soft** (`#efeff2`)
- **Section Grey** (`#f4f4f6`)
- **Soft White** (`#fafafa`)
- **Canvas** (`#ffffff`)

### Surface & Borders

- **White** (`#ffffff`) — default
- **Soft White** (`#fafafa`) — alt
- **Section Grey** (`#f4f4f6`) — section ground
- **Blue Tint** (`#f0f3ff`) — soft blue section
- **Dark Mood** (`#1a1a2f`) — section ground
- **Dark Card Elevated** (`#252540`) — within dark bands
- **Deepest** (`#0e0e1f`) — footer
- **Border** (`#e5e5e9`)
- **Border Soft** (`#efeff2`)
- **Border Strong** (`#cdcdd2`)
- **Border Input** (`#cdcdd2`)
- **Border Blue** (`#003ae4`) — focus ring

### Shadow Colors

Frontegg's shadows are **navy-tinted** (`rgba(26,26,47,...)`) at low opacity. The brand colour as the shadow source ties elevated surfaces to the page.

- `rgba(26,26,47,0.04) 0 4px 12px` — card hover
- `rgba(26,26,47,0.08) 0 16px 32px` — elevated
- `rgba(26,26,47,0.16) 0 24px 48px` — modal
- `0 0 0 2px #003ae4` — brand-blue focus ring

### Semantic

- **Success Green** (`#0f8a4d`) — on `#e6f6ec` surface
- **Warning Amber** (`#a35316`) — on `#fef0e6` surface
- **Danger Red** (`#dc2626`) — on `#fdebeb` surface
- **Info Blue** (`#003ae4`) — uses brand colour

## 3. Typography Rules

### Font Family

**Display**: `PP Neue Machina` (Pangram Pangram Foundry, 2018) with the foundry's fallback. Machina is a contemporary geometric-mechanical sans with slightly angular glyphs — its `r`, `a`, and `e` forms distinguish it from Inter or Helvetica Neue. Used at weights 400, 500, and 700.

**Body**: `PP Neue Montreal` (Pangram Pangram Foundry, 2017). Montreal is a quiet humanist sans designed to pair with Machina — its body proportions feel editorial-considered rather than utility-default. Used at weights 400, 500, and 600.

**Body-Alt**: `Manrope` and `Epilogue` are also loaded as fallback bodies for blog posts and customer stories.

**Mono**: `JetBrains Mono`, fallback `SF Mono`, `Fira Code`. Used for code blocks.

**OpenType features**: `ss01` and `ss02` enabled on display Machina for the alternate-`a` and alternate-`g` forms.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | PP Neue Machina | 80 | 400 | 1.0 | 0.01em | ss01 | Hero — note positive tracking |
| h1 | PP Neue Machina | 56 | 400 | 1.0 | 0.018em | ss01 | Page title — positive tracking |
| h2 | PP Neue Machina | 40 | 400 | 1.10 | 0.005em | — | Section opener |
| h3 | PP Neue Machina | 28 | 400 | 1.20 | 0 | — | Sub-section |
| h4 | PP Neue Machina | 22 | 500 | 1.30 | 0 | — | Feature card title |
| h5 | PP Neue Machina | 18 | 500 | 1.40 | 0 | — | Sub-feature |
| eyebrow | PP Neue Machina | 12 | 500 | 1.50 | 0.10em uppercase | — | "USER MANAGEMENT", "B2B" |
| body-lg | PP Neue Montreal | 20 | 400 | 1.60 | 0 | — | Hero sub-copy |
| body-md | PP Neue Montreal | 18 | 400 | 1.78 | 0 | — | Default body — note 1.78 line-height |
| body-sm | PP Neue Montreal | 16 | 400 | 1.50 | 0 | — | Secondary body |
| body-xs | PP Neue Montreal | 14 | 400 | 1.50 | 0 | — | Compact body |
| label | PP Neue Montreal | 13 | 500 | 1.40 | 0 | — | Form labels |
| button-label | PP Neue Montreal | 15 | 500 | 1.0 | 0 | — | CTA text |
| nav-link | PP Neue Montreal | 15 | 500 | 1.20 | 0 | — | Top nav |
| caption | PP Neue Montreal | 13 | 400 | 1.40 | 0 | — | Captions |
| micro | PP Neue Montreal | 12 | 400 | 1.40 | 0 | — | Footer legal |
| code-inline | JetBrains Mono | 14 | 400 | 1.50 | 0 | — | Inline `<code>` |
| code-block | JetBrains Mono | 13 | 400 | 1.55 | 0 | — | Code panel |
| pricing-display | PP Neue Machina | 64 | 400 | 1.0 | 0.005em | tnum | Tier price |
| quote | PP Neue Machina | 24 | 400 | 1.40 | -0.005em | italic | Pull quote |

### Principles

- **PP Neue Machina at weight 400 is the typographic signature.** Regular weight, not Bold. Machina's character carries the display without weight.
- **Positive tracking on display.** Frontegg uses **+0.01em** to **+0.018em** tracking on h1 — most peers use negative tracking, Frontegg's positive tracking is the unusual move that lets Machina breathe.
- **PP Neue Montreal at 18/400 with 1.78 line-height.** Generously paced body prose. Most peers use 1.5 line-height; Frontegg's 1.78 is editorial.
- **Two typefaces, two registers.** Machina display is design-studio considered; Montreal body is quiet humanist. The split is the brand voice.
- **Eyebrows in Machina (display), not body.** 12/500 uppercase Machina with 0.10em tracking — keeps eyebrow tied to display register.
- **JetBrains Mono for code only.** Pairs cleanly with Montreal because both are geometric-leaning humanist.
- **Substitute Inter Display for Machina.** Use Inter Display at 400 with positive tracking ~0.01em. Substitute Inter for Montreal body with 1.7+ line-height.

## 4. Component Stylings

### Buttons

**`button-primary`** — primary CTA. Deep-navy `#1a1a2f` fill, white text, 15/500 PP Neue Montreal, **8px radius**, 12×20px padding, 44px height. Hover brightens to `#252540`. Used for "Get started", "Book a demo".

**`button-blue`** — brand-blue CTA. `#003ae4` fill, white text, same dimensions. Used for emphasis CTAs ("Try free") and conversion moments.

**`button-secondary`** — outlined ghost. White fill, deep-navy text, 1px `#cdcdd2` border, 8px radius, same dimensions.

**`button-ghost-dark`** — outlined ghost on dark. Transparent fill, white text, 1px `rgba(255,255,255,0.20)` border, 8px radius.

**`button-text-link`** — plain inline link. Brand-blue text. Hover underlines or darkens.

### Cards

**`card-feature`** — feature card. White surface, 16px radius, 1px `#e5e5e9` hairline border, 32px internal padding. Stack: optional brand-blue icon, h4 title in PP Neue Machina 22/500 deep-navy, body in PP Neue Montreal 18/400 body-slate with 1.78 line-height, optional inline link in brand-blue.

**`card-section`** — section-grey card. `#fafafa` ground, 16px radius, no border, 32px padding.

**`card-blue`** — blue-tinted feature card. `#f0f3ff` ground, 16px radius, no border, 32px padding. Used for the brand-emphasized "Why Frontegg" moments.

**`card-deep-navy`** — dark feature card. `#1a1a2f` ground, 16px radius, 32px padding, white text. Used in the brand mood-zone band.

**`card-deep-navy-elevated`** — slightly elevated dark card. `#252540` ground, used for tier separation within a dark band.

**`card-pricing`** — pricing tier. White surface, 16px radius, 1px hairline, 32px padding. Recommended tier highlights with 2px brand-blue border.

**`card-stat`** — metric card. White surface, 16px radius, 32px padding. Massive Machina 64/400 metric with `tnum` and 0.005em positive tracking, eyebrow label below.

### Badges, Tags, Pills

**`pill-eyebrow`** — outlined eyebrow pill. Transparent fill, deep-navy text, 1px `#cdcdd2` border, 9999px radius, 4×10px padding, 12/500 Machina uppercase 0.10em tracking. "USER MANAGEMENT", "B2B", "ENTERPRISE".

**`pill-eyebrow-blue`** — soft blue eyebrow pill. `#e6ecff` ground, brand-blue text. Same dimensions.

**`pill-status`** — semantic status pill. Success: `#e6f6ec` ground + `#0f8a4d` text. Error: `#fdebeb` ground + `#dc2626` text.

### Inputs / Forms

**`input`** — text input. White surface, 1px `#cdcdd2` border, 8px radius, 44px height, 12×14px padding. Placeholder `#8a8a9a`. On focus: 2px `#003ae4` brand-blue ring with 2px outline-offset.

**`textarea`** — same as input with auto-grow.

**`select-dropdown`** — same as input with chevron icon.

**`checkbox`** — 16×16px, 4px radius, 1px hairline. On checked: brand-blue fill, white check.

**`radio`** — 16×16px circle, 1px hairline. On selected: brand-blue fill, white dot.

### Navigation

**`navbar-top`** — top nav. `rgba(255,255,255,0.92)` ground with `backdrop-blur(8px)`, 1px `#e5e5e9` bottom border, 72px height. Frontegg wordmark flush left in PP Neue Machina deep-navy. Nav links "Product", "Developers", "Customers", "Pricing" in PP Neue Montreal 15/500 deep-navy centre. "Log in" text + primary deep-navy CTA flush right.

**`mega-menu`** — opens from product nav. White surface, 12px radius, 1px hairline, 24px padding, navy-tinted shadow. Multi-column nav with Machina-uppercase eyebrow group titles ("Authentication", "Authorization", "User Management") and Montreal 15/500 link rows.

**`footer`** — `#0e0e1f` deepest ground, 5-column link list at desktop. Eyebrow group titles in 12/500 uppercase Machina white, link rows in Montreal 14/400 muted, social row at the bottom.

**`breadcrumb`** — muted slate with `›` separators, 13/400 PP Neue Montreal.

### Tooltips, Toasts, Modals

**`tooltip`** — `#1a1a1f` deep-navy ground, 6px radius, 8×10px padding, 12/400 white text in Montreal.

**`toast`** — bottom-right corner. White surface, 12px radius, 1px hairline, 16×20px padding, 14/400 ink text in Montreal.

**`modal`** — centred dialog over `rgba(26,26,47,0.48)` deep-navy scrim. White surface, 16px radius, 1px hairline border, 32px padding, navy-tinted modal shadow.

### Code Block

**`code-block`** — `#1a1a2f` deep-navy ground (matches brand CTA), 12px radius, 20×24px padding. JetBrains Mono 13/400. Brand-blue keywords (`#003ae4`), light-blue strings, white default text.

### Decorative

**`hero-illustration-band`** — wide deep-navy section showing line-art SVG diagrams of identity flows (SSO, MFA, RBAC, organizations). White strokes on `#1a1a2f` ground, brand-blue highlights on active paths. The signature visual element.

**`feature-illustration-card`** — full-width dark card with line-art SVG illustration. `#1a1a2f` ground, 16px radius, 48px padding.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160`
- Hero padding (vertical): **160px** at desktop — editorial gravitas
- Section padding: **96–128px** between major sections
- Card internal padding: **32px** for feature cards
- Gutter: **24px** between feature cards in 2-column

### Grid & Container

- Max content width: **1280px** centred
- Hero: full-width with copy capped at 720px prose
- Feature grid: 2-column at desktop with 24px gutter
- Pricing: 3-column tier comparison cards with recommended tier brand-blue-bordered
- Hero illustration band: full-width deep-navy section

### Whitespace Philosophy

Frontegg gives sections **editorial breath** — 96–128px between bands, 32px internal card padding. The hero band is 160px tall (matching WorkOS's enterprise-gravitas breath). The body line-height at 1.78 makes prose feel paced and readable rather than dense.

### Section Cadence

The page alternates **white canvas → soft white → white → blue-tinted → white → deep-navy mood-zone → deepest footer**. The deep-navy mood-zone (`#1a1a2f`) appears 1–2 times per page, including the hero illustration band.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Dense table corners |
| Small | 4px | Checkboxes |
| Default | 6px | Tooltips, dropdowns |
| Standard | 8px | Buttons, inputs |
| Comfortable | 12px | Code blocks, mega-menu |
| Card | 16px | Feature cards, modals, pricing |
| Pill | 9999px | Eyebrow pills, status pills |

The 8px button radius is the friendly-modern default. 16px cards are slightly more rounded for editorial feel.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body sections |
| 1 — Hairline | `1px #e5e5e9` border | Cards at rest |
| 2 — Hover | `rgba(26,26,47,0.04) 0 4px 12px` | Hovered cards, mega-menu |
| 3 — Elevated | `rgba(26,26,47,0.08) 0 16px 32px` | Mega-menu, sticky bars |
| 4 — Modal | `rgba(26,26,47,0.16) 0 24px 48px` | Centred dialog |
| 5 — Focus | `0 0 0 2px #003ae4` ring | Focused inputs and buttons |

### Shadow Philosophy

Frontegg's shadows are **navy-tinted** with the brand-blue focus ring as the only chromatic depth. Most cards have no shadow at rest — depth is the hairline border. Navy-tinted shadows on hover and modal preserve the brand chromatic continuity.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Hover colour swap, focus ring fade-in |
| Standard | 240ms | Card hover, mega-menu open |
| Slow | 320ms | Modal enter, hero reveal |

### Per-Component Recipes

- **CTA hover (primary)**: deep-navy brightens `#1a1a2f` → `#252540` over 150ms.
- **CTA hover (brand-blue)**: brand-blue darkens `#003ae4` → `#0028b0` over 150ms.
- **Card hover**: 1px translateY(-1) + navy-tinted 4% shadow over 240ms; border deepens slightly.
- **Hero reveal**: sections fade-up from `translateY(16px)/opacity 0` → `0/1` over 320ms emphasized.
- **Mega-menu open**: 240ms fade + 4px slide-down.
- **Modal enter**: scrim fades 240ms; dialog from `translateY(8px)/opacity(0)` → `0/1` over 320ms emphasized.
- **Link hover**: brand-blue darkens by ~10% luminance over 150ms.

### Page Transitions

Page-to-page navigation uses no transition — hard navigation.

### Reduced Motion

Hero reveal and card hover translateY suppress (opacity-only).

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #1a1a2f heading on #ffffff | 14.0 | AAA |
| #3a3a4f body on #ffffff | 9.4 | AAA |
| #ffffff on #1a1a2f deep-navy CTA | 14.0 | AAA |
| #ffffff on #003ae4 brand-blue CTA | 8.0 | AAA |
| #003ae4 link on #ffffff | 8.0 | AAA |
| #6c6c80 muted on #ffffff | 5.7 | AA |
| #0f8a4d success on #e6f6ec | 5.4 | AA |
| #dc2626 danger on #fdebeb | 6.0 | AA |

All Frontegg chromatic pairings sit at AA or AAA — the deep-navy + bright brand-blue discipline ensures maximum contrast.

### Focus Indicators

Focus ring is **2px solid `#003ae4` (brand-blue) with 2px outline-offset**. The brand-blue ring is brand affordance and accessibility indicator.

### ARIA Patterns

- **Top nav**: `role="navigation"`, `aria-label="Primary"`. Mega-menu uses `role="menu"`.
- **Pricing tier cards**: `<h3>` heading, recommended tier `aria-current="recommended"`.
- **Hero illustration band**: inline SVG with `<title>` and `<desc>` describing the identity flow.
- **Modal**: `role="dialog"`, `aria-modal="true"`, focus trap, Esc closes.
- **Code blocks**: `role="region"`, `aria-label="Code example"`. Copy button `aria-live="polite"`.

### Keyboard Navigation

- Tab: logo → product → developers → customers → pricing → log in → primary CTA
- Mega-menu: arrow keys navigate, Esc closes
- Modal: focus trap, Tab cycles
- Skip-to-main visible on first Tab

### Screen Reader Hints

- Hero illustration announces the identity flow it describes
- Code copy button announces success state
- Eyebrows are part of the heading announcement order

### Reduced Motion

Hero reveal and card hover translateY suppress. Mega-menu fade only.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Nav collapses to hamburger; hero copy 36px; feature grid 1-up |
| Tablet | 640–1024px | Nav reveals product + log in; feature grid 2-up |
| Desktop | 1024–1280px | Full mega-menu; container caps at 1280px |
| Wide | 1280–1440px | Container stays 1280px |

### Touch Targets

- Primary CTAs: 44px height — meets AA
- Nav links: 36×16px tap target at desktop, 44×20 on mobile
- Form inputs: 44px height

### Collapsing Strategy

- Nav: product / developers / customers collapse to hamburger at <1024px
- Hero: 80px → 56px → 40px → 36px down breakpoints; positive tracking compresses
- Feature grid: 3-up → 2-up → 1-up
- Pricing: 3-column → 1-column
- Hero illustration band: scales with container queries; line-art SVG remains crisp

### Image Behavior

Identity-flow illustrations use inline SVG. Customer logos use SVG. There are no photographic product screenshots.

### Container Queries

Used in feature cards: when card width drops below ~280px, icon shifts above title.

## 11. Content & Voice

### Tone

Confident, considered, design-studio-polished, B2B-focused. Frontegg's voice positions identity as **the user-management infrastructure your B2B SaaS needs from day one** — assumes the reader is a senior engineer or technical founder at a B2B SaaS company. Headlines lead with capability + voice ("The Identity Layer for Every SaaS Entry Point", "User management in minutes, not months"). The voice is more European-considered than American-startup — there's a quiet confidence in the copy that mirrors the typographic discipline.

### Microcopy Patterns

- **Button verbs**: "Get started", "Book a demo", "Try free", "Read the docs", "View pricing"
- **Eyebrow labels**: 12/500 uppercase PP Neue Machina — "USER MANAGEMENT", "B2B IDENTITY", "ENTERPRISE READY"
- **Error message recipe**: precise + actionable — "We couldn't add this user. Verify their email address or check your seat allowance."
- **Success confirmations**: minimal + considered — "User invited. They'll receive an email within minutes."
- **Field labels**: short and exact — "Organization name", "Default role", "SSO domain"
- **Doc links**: lead with verb — "Read the user-management guide", "View SDK reference"

### Empty States

- Empty users: "No users yet. Invite users by email or share a sign-up link."
- Empty organizations: "No organizations yet. Create your first organization to begin multi-tenant auth."
- Empty roles: "No custom roles yet. Use the defaults or define your own."

### CTA Verb Conventions

- Primary: "Get started", "Book a demo", "Try free"
- Secondary: "Read the docs", "View pricing", "See how it works"
- Tertiary: "Learn more →", "View changelog"
- Avoided: "Click here", "Submit", "Buy now"

## 12. Dark Mode & Theming

**Light-only on the marketing canvas with deep-navy mood-zone bands.** The deep-navy `#1a1a2f` appears in the hero illustration band and 1–2 brand-emphasized sections per page. The deepest near-black `#0e0e1f` is the footer.

### Dark Mood-Zone Treatment

```yaml
bg-dark: '#1a1a2f'
bg-dark-elevated: '#252540'
bg-deepest: '#0e0e1f'
text-on-dark: '#ffffff'
text-muted-on-dark: '#aaaab5'
border-on-dark: 'rgba(255,255,255,0.10)'
brand-on-dark: '#1a52f0'        # brand-blue brightens slightly on dark
button-primary-on-dark: '#ffffff'  # inverse — white CTA on dark
button-primary-text-on-dark: '#1a1a2f'
```

### Component Theming

The Frontegg-branded components ship with both light and dark themes for embedding in customer apps:

```yaml
component-light:
  bg: '#ffffff'
  text: '#1a1a2f'
  brand: '#003ae4'
component-dark:
  bg: '#1a1a2f'
  text: '#ffffff'
  brand: '#1a52f0'
```

## 13. Lineage & Influences

Frontegg's visual lineage runs through three traditions: **Pangram Pangram Foundry / European-design-studio aesthetic** (the PP Neue Machina + PP Neue Montreal pairing is a deliberate move borrowed from Berlin and Amsterdam design studios — Pangram Pangram is a foundry that supplies typefaces to that ecosystem); **B2B-platform-with-design-discipline positioning** (the deep-navy + brand-blue chromatic system, the editorial 1.78 line-height body, the generous 160px hero padding — all moves that signal "design-led B2B platform"); and **modern dev-tool foundation** (hairline cards, JetBrains Mono code blocks, frosted-glass navbar).

The **PP Neue Machina at weight 400 with positive tracking** is the typographic signature that distinguishes Frontegg. No other auth platform uses Machina. The decision to run display at Regular weight with positive tracking (most peers use Bold or Heavy with negative tracking) is the deliberate move that positions Frontegg as design-studio-considered. Combined with Montreal's quiet humanist body at 1.78 line-height, the page reads as European design-studio quality — a quality that customers associate with premium B2B platforms.

What Frontegg rejects: **dark canvases as primary** (light-first with deep-navy mood-zones), **single-typeface discipline** (the Machina + Montreal pairing is more expressive), **negative-tracking display** (positive tracking is the unusual move), **photographic product screenshots** (line-art SVG identity-flow diagrams instead), and **enterprise blue-trust cliché** (deep-navy with purple undertone instead).

**Influences:**
- Pangram Pangram Foundry — PP Neue Machina + PP Neue Montreal typefaces, [pangrampangram.com](https://pangrampangram.com)
- European design-studio aesthetic (Berlin, Amsterdam, Copenhagen) — generous editorial breath, considered type
- Stripe — confidence-via-restraint, [stripe.com](https://stripe.com)
- Vercel — frosted-glass navbar, restraint discipline, [vercel.com](https://vercel.com)
- WorkOS — B2B-enterprise-ready positioning (Frontegg differentiates with design-studio polish), [workos.com](https://workos.com)
- Auth0 — predecessor in identity-platform aesthetic, [auth0.com](https://auth0.com)

## 14. Do's and Don'ts

**Do**
- Anchor the canvas on white (`#ffffff`) with soft white (`#fafafa`) and section grey (`#f4f4f6`) for alt sections
- Run hero display in **PP Neue Machina 56/400** (Regular weight) — the typographic signature
- Run body in **PP Neue Montreal 18/400 with 1.78 line-height** — extra-loose editorial pacing
- Use deep-navy `#1a1a2f` for headings and primary CTA — slight purple undertone, never pure black
- Use brand-blue `#003ae4` for inline links and brand emphasis CTAs (not primary CTA)
- Apply **positive tracking** on display — `+0.01em` to `+0.018em` is the unusual move that lets Machina breathe
- Use 8px button radius / 16px card radius — friendly-modern proportions
- Render the deep-navy hero illustration band with line-art SVG identity flows
- Render code blocks on deep-navy `#1a1a2f` ground (matches brand)
- Give the hero 160px vertical padding — editorial gravitas

**Don't**
- Don't substitute Inter without compensating — Machina's character is the signature; substitute Inter Display at 400 with positive tracking
- Don't run Machina at weight 700 for display — Regular is the discipline
- Don't run Montreal body at 1.5 line-height — 1.78 is the editorial signature
- Don't use negative tracking on display — positive tracking is the brand's typographic move
- Don't introduce a third brand colour — deep-navy + brand-blue is the system
- Don't use brand-blue as the primary CTA — primary is deep-navy; brand-blue is emphasis only
- Don't tighten section padding below 96px — editorial breath is the brand
- Don't add atmospheric multi-layer shadows — navy-tinted hairline + 4% hover is the depth strategy
- Don't show photographic product screenshots — line-art SVG identity-flow diagrams instead
- Don't use serif type — Machina + Montreal is the system

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #ffffff
Soft White:       #fafafa
Section:          #f4f4f6
Heading Navy:     #1a1a2f
Body Slate:       #3a3a4f
Brand Blue:       #003ae4
Brand Blue Light: #1a52f0
Blue Soft:        #e6ecff
Blue Tint:        #f0f3ff
Border:           #e5e5e9
Border Input:     #cdcdd2
Muted:            #6c6c80
Dark Mood:        #1a1a2f
```

### Example Component Prompts

- "Create a Frontegg-style hero section: white canvas, 160px vertical padding. Hero copy in **PP Neue Machina 56/400** (Regular weight) with **positive tracking +0.018em**, deep-navy ink (`#1a1a2f`). Eyebrow above in 12/500 uppercase PP Neue Machina with 0.10em tracking, transparent ground with 1px `#cdcdd2` hairline pill, deep-navy text. Sub-copy in **PP Neue Montreal 18/400 with 1.78 line-height**, body slate (`#3a3a4f`). Primary CTA: deep-navy (`#1a1a2f`) fill, white text, 15/500 PP Neue Montreal, 8px radius, 12×20px padding, 44px height. Secondary outlined ghost: white fill, 1px `#cdcdd2` border, deep-navy text."
- "Build a Frontegg feature card: white surface, 16px radius, 1px `#e5e5e9` hairline border, 32px padding. On hover: subtle navy-tinted 4% shadow + 1px translateY(-1) lift. Stack: optional brand-blue icon, h4 title in PP Neue Machina 22/500 deep-navy, body description in **PP Neue Montreal 18/400 with 1.78 line-height** body-slate (`#3a3a4f`), optional 'Read the docs →' link in brand-blue (`#003ae4`)."
- "Design a Frontegg pricing tier card: white surface, 16px radius, 32px padding. Default cards have 1px `#e5e5e9` border; the recommended tier highlights with 2px `#003ae4` brand-blue border. Stack: tier name in 12/500 uppercase PP Neue Machina, price in PP Neue Machina 64/400 with `tnum` and 0.005em positive tracking deep-navy, '/month' caption in 14/400 muted PP Neue Montreal, feature checklist with brand-blue check icons, primary deep-navy CTA at the bottom."
- "Create a Frontegg navbar: 72px tall, `rgba(255,255,255,0.92)` ground with `backdrop-blur(8px)`, 1px `#e5e5e9` bottom border. Frontegg wordmark flush left in PP Neue Machina deep-navy. Nav links 'Product', 'Developers', 'Customers', 'Pricing' in PP Neue Montreal 15/500 deep-navy centre. 'Log in' text + primary deep-navy CTA flush right."
- "Build a Frontegg deep-navy hero illustration band: full-width section, `#1a1a2f` ground, 96–128px vertical padding. Inside: line-art SVG diagram of identity flows (SSO, MFA, RBAC, organizations) with white strokes and brand-blue (`#003ae4`) highlights on active paths. Caption below the illustration in PP Neue Montreal 14/400 muted-slate `#aaaab5`."
- "Design a Frontegg code block: deep-navy (`#1a1a2f`) ground (matches brand CTA), 12px radius, 20×24px padding. JetBrains Mono 13/400. Brand-blue (`#003ae4`) keywords (`import`, `const`, `function`), light-blue strings, white default text. Top-right copy button — small icon-only, transparent fill, hairline border."

### Iteration Guide

1. **PP Neue Machina display + PP Neue Montreal body is the signature.** Substitute Inter Display + Inter at the same metrics with positive tracking and 1.78 line-height to approximate.
2. **Display weight 400 (Regular).** Don't substitute Bold or Heavy. Machina's character carries the display.
3. **Positive tracking on display.** `+0.01em` to `+0.018em` is the unusual move that distinguishes Frontegg from negative-tracking peers.
4. **Body line-height at 1.78.** Editorial pacing. Don't tighten to 1.5 or 1.6.
5. **Deep-navy `#1a1a2f` for primary CTA.** Brand-blue `#003ae4` is for inline links and emphasis CTAs only.
6. **8px button radius / 16px card radius.** Friendly-modern proportions.
7. **160px hero padding.** Editorial gravitas matches WorkOS-tier breath.
8. **Hero illustration band on deep-navy ground.** Line-art SVG identity flows are the signature visual element.
