---
name: Apple
tagline: White-canvas product theatre — SF Pro Text, 980px pill CTAs, and a single-blue accent system.
updated_at: 2026-05-05T19:20:38+12:00
published_at: 2026-05-03T10:27:49+12:00
author: webdesignhot
source_url: https://www.apple.com
spec: webdesignhot/0.1
quality: curated
featured: true
categories: [marketplace, media]
tags: [light, minimal, sans, spacious, soft, premium, product-led]
preview_swatch: ['#ffffff', '#0071e3', '#1d1d1f']
related: [linear, vercel, stripe]
description: 'Apple''s homepage is a vertical rail of edge-to-edge product theatres — pure-white grounds, a single Apple-blue `#0071e3` link/CTA color, and SF Pro Text at small sizes for nav and CTA copy. The geometry is enormous (`980px` button radius — effective full pill) and the type discipline is severe; everything sits on the `--sk-*` Apple Stylekit token system. It''s the elder design system most other product sites quietly reference — semantic pairs (fill/glyph, primary/secondary/tertiary), single-blue accent, near-zero shadow, and a chrome that yields to the product photography. Where Stripe ships gradients and Linear ships a dark canvas, Apple ships silence.'

colors:
  bg: '#ffffff'                  # --sk-fill — primary canvas
  surface: '#fafafc'             # --sk-fill-secondary — header, footer, gutters
  surface-2: '#f5f5f7'           # --sk-fill-tertiary — section panels
  surface-soft: 'rgba(0,0,0,0.04)'   # in-card translucent fill
  surface-elev: '#ffffff'        # cards keep canvas, separated by panel
  text: '#1d1d1f'                # --sk-body-text-color / --sk-headline-text-color
  text-strong: '#1d1d1f'         # headlines on white
  text-soft: '#6e6e73'           # --sk-glyph-gray-secondary
  text-muted: '#86868b'          # --sk-fill-gray-secondary — captions / disclaimers
  text-faint: '#a1a1a6'          # disclosed legal copy
  text-on-dark: '#f5f5f7'        # body copy on dark product panels
  text-soft-on-dark: '#a1a1a6'   # secondary on dark
  brand: '#0071e3'               # --sk-fill-blue / --sk-focus-color — Apple blue
  brand-hover: '#0077ed'         # observed pointer-over on CTA
  brand-pressed: '#006edb'       # pointer-down
  link: '#0066cc'                # --sk-body-link-color — body-text links
  link-hover: '#004999'          # darker on hover
  on-brand: '#ffffff'            # white text on blue
  border: 'rgba(0,0,0,0.16)'     # --sk-fill-gray-tertiary-alpha
  border-soft: 'rgba(0,0,0,0.08)'
  border-strong: 'rgba(0,0,0,0.32)'
  border-on-dark: 'rgba(255,255,255,0.16)'
  divider: '#d2d2d7'             # --sk-fill-gray-tertiary solid
  scrim: 'rgba(0,0,0,0.48)'
  shadow-card: 'rgba(0,0,0,0.04)'
  shadow-elev: 'rgba(0,0,0,0.10)'
  shadow-modal: 'rgba(0,0,0,0.18)'
  success: '#1d8649'             # confirmation green inside Account flows
  success-soft: '#e8f5ee'
  warning: '#bf4800'             # advisory orange (carrier disclosures)
  warning-soft: '#fff5ee'
  danger: '#d32f2f'              # form-error red
  danger-soft: '#fdecec'
  info: '#0071e3'                # info uses brand blue
  info-soft: '#e8f2fc'
  accent-product-tv: '#0071e3'   # iPhone Pro panel uses Apple blue family
  accent-product-watch: '#fa4c5a'    # observed on Watch panel
  accent-product-vision: '#a16eff'   # observed on Vision Pro panel
  bg-dark: '#000000'             # full-black product panels (iPhone Pro hero)
  bg-deep: '#1d1d1f'             # near-black product panels (Watch hero)

typography:
  display:
    family: '"SF Pro Display", "SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['ss01', 'ss02', 'tnum']
  body:
    family: '"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"SF Mono", ui-monospace, Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 96,  weight: 600, lineHeight: 1.0417, tracking: '-0.015em', family: display, opentype: ['ss01'] }
    display-xxl:     { size: 80,  weight: 600, lineHeight: 1.05,   tracking: '-0.012em', family: display }
    display-xl:      { size: 64,  weight: 600, lineHeight: 1.0625, tracking: '-0.009em', family: display }
    display-lg:      { size: 56,  weight: 600, lineHeight: 1.07,   tracking: '-0.005em', family: display }
    display-md:      { size: 48,  weight: 600, lineHeight: 1.08,   tracking: '-0.003em', family: display }
    h2:              { size: 34,  weight: 600, lineHeight: 1.47,   tracking: '-0.011em', family: display }
    h3:              { size: 28,  weight: 600, lineHeight: 1.143,  tracking: '0.007em',  family: display }
    h4:              { size: 24,  weight: 600, lineHeight: 1.167,  tracking: '0.009em',  family: display }
    title-lg:        { size: 21,  weight: 600, lineHeight: 1.19,   tracking: '0.011em',  family: body }
    title-md:        { size: 19,  weight: 600, lineHeight: 1.2105, tracking: '0.012em',  family: body }
    body-lg:         { size: 19,  weight: 400, lineHeight: 1.4211, tracking: '0.012em',  family: body }
    body:            { size: 17,  weight: 400, lineHeight: 1.47,   tracking: '-0.022em', family: body }
    body-sm:         { size: 15,  weight: 400, lineHeight: 1.33,   tracking: '-0.014em', family: body }
    caption:         { size: 14,  weight: 400, lineHeight: 1.286,  tracking: '-0.016em', family: body }
    legal:           { size: 12,  weight: 400, lineHeight: 1.333,  tracking: '-0.005em', family: body }
    micro:           { size: 11,  weight: 500, lineHeight: 1.27,   tracking: '0.066em',  family: body, transform: uppercase }
    nav-link:        { size: 14,  weight: 400, lineHeight: 1.286,  tracking: '-0.016em', family: body }
    button-lg:       { size: 17,  weight: 400, lineHeight: 1.18,   tracking: '-0.022em', family: body }
    button-sm:       { size: 14,  weight: 400, lineHeight: 1.286,  tracking: '-0.016em', family: body }
    code:            { size: 14,  weight: 400, lineHeight: 1.43,   tracking: '0',         family: mono }

radius:
  micro: 0          # form inputs, table edges
  sm: 4             # nav popovers, small chips
  md: 8             # inline tiles, image overlays
  lg: 12            # standard cards (developer.apple)
  xl: 18            # --media-gallery-tile — feature cards
  xxl: 28           # large product tiles
  hero: 34          # section bezels on hero panels
  button: 980       # signature: behaves as pill until extreme widths
  pill: 9999

spacing:
  base: 4
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 44, 48, 64, 80, 96, 120, 160]

layout:
  page-width: 1440         # max content; panels go edge-to-edge
  prose-width: 980         # type column inside panels
  header-height: 44        # iconic skinny chrome
  panel-min-height: 692    # marketing panel minimum
  gutter: 12               # inter-panel #fafafc gap

components:
  button-primary:
    bg: '#0071e3'
    color: '#ffffff'
    radius: 980
    padding: '11px 21px'
    height: 40
    font: button-lg
    use: 'Buy, Order Now, Pre-order — every primary commerce CTA.'
  button-primary-hover:
    bg: '#0077ed'
    color: '#ffffff'
    radius: 980
    use: 'Pointer-over state. No transform, no shadow change.'
  button-primary-pressed:
    bg: '#006edb'
    color: '#ffffff'
    use: 'Pointer-down state. Slight darken, no scale.'
  button-secondary-link:
    bg: 'transparent'
    color: '#0066cc'
    use: 'Learn more, Compare, Watch the film — chevron-suffixed link button. No border, no fill.'
  button-on-dark:
    bg: '#ffffff'
    color: '#1d1d1f'
    radius: 980
    padding: '11px 21px'
    use: 'Primary CTA on dark product panels — inverts to white pill.'
  button-on-dark-secondary:
    bg: 'transparent'
    color: '#2997ff'
    use: 'Secondary "Learn more" on dark — uses lighter blue (#2997ff) for contrast.'
  link-chevron:
    bg: 'transparent'
    color: '#0066cc'
    use: 'Inline "Learn more" with trailing chevron icon. Underline appears only on hover.'
  card-feature:
    bg: '#fafafc'
    color: '#1d1d1f'
    radius: 18
    padding: '40px 28px'
    use: 'Apple TV+ tile, news editorial card, accessory grid item.'
  card-product:
    bg: '#f5f5f7'
    color: '#1d1d1f'
    radius: 28
    padding: '0'
    use: 'Section panel containing one product theatre.'
  nav-pill:
    bg: 'rgba(255,255,255,0.72)'
    color: '#1d1d1f'
    radius: 980
    padding: '0 24px'
    use: 'Sub-nav pill (e.g., Watch sub-page) that floats below main nav.'
  text-input:
    bg: '#ffffff'
    color: '#1d1d1f'
    radius: 0
    height: 28
    border: '1px solid #d2d2d7'
    padding: '4px 8px'
    focus: 'outline 2px #0071e3'
    use: 'Account / search inputs. Sharp corners — explicit register break from the 980px pill.'
  search-overlay:
    bg: 'rgba(255,255,255,0.94)'
    radius: 0
    use: 'Full-bleed search modal with backdrop-blur. Single shadow on chrome.'
  badge-feature:
    bg: 'transparent'
    color: '#bf4800'
    use: 'Tiny "New" or "Now available" eyebrow above headlines. Uppercase 11px / 500.'
  modal:
    bg: '#ffffff'
    color: '#1d1d1f'
    radius: 18
    padding: '32px'
    use: 'Buy-flow configurator, account modals.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.16, 1, 0.3, 1)'    # apple-design-curve — peak signature
  ease-out-soft: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-fluid: 'cubic-bezier(0.65, 0, 0.35, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 400
  duration-deliberate: 600
  scroll-pin-product: '600–1200ms cinematic ease-emphasized — product pinned in view, copy scrolls past'
  hover-cta-fade: 'fill #0071e3 → #0077ed over 200ms standard'
  link-underline-grow: 'underline thickens 0 → 1px on hover, 200ms'
  modal-enter: 'scrim 200ms + dialog 240ms ease-emphasized translate-y +12 → 0'
  carousel-product: '900ms ease-emphasized — slow, deliberate hand-off between product slides'
  reduced-motion: 'respects prefers-reduced-motion: reduce — pinned product scrolls degrade to instant cuts; carousel auto-advance disables; opacity-only transitions remain.'

breakpoints:
  mobile: 734
  tablet: 1068
  desktop: 1280
  wide: 1440

shadows:
  none: 'none'
  ambient: 'rgba(0,0,0,0.04) 0 1px 2px'
  card: 'rgba(0,0,0,0.04) 0 4px 12px'
  dropdown: 'rgba(0,0,0,0.10) 0 6px 16px'
  modal: 'rgba(0,0,0,0.18) 0 12px 32px'
  ring: '0 0 0 4px rgba(0,113,227,0.4)'   # focus halo

accessibility:
  contrast-text-on-bg: 17.4              # #1d1d1f on #ffffff — AAA
  contrast-text-on-brand: 4.6            # #ffffff on #0071e3 — AA at body
  contrast-soft-on-bg: 4.5               # #6e6e73 on #ffffff — AA
  contrast-muted-on-bg: 3.5              # #86868b on #ffffff — AA large only (used at ≥18px)
  contrast-link-on-bg: 7.0               # #0066cc on #ffffff — AAA
  focus-ring: '4px solid rgba(0,113,227,0.4) outline + 2px outline-offset — Apple''s signature blue halo'
  reduced-motion-honored: true
  touch-target-min: 44                   # nav and primary CTA both
  keyboard-nav: 'Skip-to-main link first. Top nav: Tab through product tabs left → right, then sub-nav, then in-page hero CTAs.'
  aria-conventions: 'Product panels use <section aria-labelledby>; carousel uses role="region" with aria-roledescription="carousel"; price configurators use role="radiogroup" for capacity choices.'

dark-mode: per-panel
# Apple''s marketing site is fundamentally light, but individual product panels (iPhone Pro hero, Watch hero, Vision Pro) ship full dark surfaces with the SAME Apple-blue accent (rendered as #2997ff, the optical-text variant for dark backgrounds). The chrome (header / footer / page bg) stays light.

colors-dark:
  bg: '#000000'
  bg-deep: '#1d1d1f'
  surface: '#1d1d1f'
  surface-2: '#2c2c2e'
  text: '#f5f5f7'
  text-soft: '#a1a1a6'
  text-muted: '#86868b'
  brand: '#2997ff'              # optical-blue cut for dark — observed on iPhone Pro panel
  link: '#2997ff'
  on-brand: '#ffffff'
  border: 'rgba(255,255,255,0.16)'
  divider: 'rgba(255,255,255,0.08)'

lineage:
  summary: |
    Apple's marketing site is the elder system most other product sites
    quietly reference. The `--sk-*` ("Stylekit") token namespace exposes
    a complete chromatic system — `--sk-fill-blue: rgb(0, 113, 227)` for
    primary, `--sk-fill-gray-tertiary: rgb(210, 210, 215)` for ground,
    `--sk-body-text-color: rgb(29, 29, 31)` for type — with semantic
    pairs (`fill` / `glyph`, `primary` / `secondary` / `tertiary`) that
    show up later in Linear, Vercel, and dozens of agency portfolios.
    The signature button radius is `980px` — large enough to behave as a
    full pill at every realistic button width, but specified as a
    deliberate finite number so very wide variants degrade to a soft
    rounded rect rather than a stadium. SF Pro Text (the optical text
    cut) is used at 17px body — Apple ships *two* SF Pro families and
    chooses Text rather than Display for the homepage so the small UI
    legible-at-distance branch wins. The chrome is restrained to a 44px
    sticky `#fafafc` header with no border, no shadow.
  influences:
    - name: Susan Kare / original Mac UI
      role: Foundation for the SF type lineage and the rounded-rect ergonomic that defines the button system
      url: https://kare.com
    - name: Dieter Rams / Braun
      role: White-canvas product theatre — "weniger, aber besser" — as a marketing language
      url: https://en.wikipedia.org/wiki/Dieter_Rams
    - name: Apple Human Interface Guidelines
      role: Token semantics (fill / glyph / primary / secondary / tertiary) that the rest of the industry copies
      url: https://developer.apple.com/design/human-interface-guidelines/
    - name: SF Pro / SF Pro Text by Apple
      role: The two-axis optical-cut typography model — Display for ≥20px, Text for body — that the homepage exploits
      url: https://developer.apple.com/fonts/
    - name: Stylekit (sk- namespace)
      role: The internal Apple design system that ships the --sk-* tokens powering apple.com
      url: https://www.apple.com
---

## 1. Visual Theme & Atmosphere

Apple's homepage is a vertical rail of full-width product theatres — a hero panel for each major product line, separated by ~12px gaps of the `#fafafc` page background. The page itself is pure white (`#ffffff`); the header, footer, and inter-panel gutters are the very-slightly-warmer gray-secondary `#fafafc`. There is no marketing copy in the header, no tagline strip, no banner — just a 44px nav, then the first product panel begins.

The atmosphere is **silent and confident**. Where Stripe ships a crafted gradient and Linear ships a dark canvas, Apple ships nothing — a bright, deliberately empty stage that yields to the product photography. The brand color `#0071e3` appears only as text-link and inside the rare elevated CTA. Every product panel is its own self-contained chromatic universe — the iPhone Pro panel goes black, the Watch panel goes graphite, the AirPods panel stays white — but the chrome that wraps them is uncompromisingly neutral.

The geometry is engineered to be invisible. The signature `980px` button radius behaves as a perfect pill at every realistic button width but degrades to a soft rounded rect at extreme widths — a finite number, not the lazy `9999`, exposing the engineering discipline. SF Pro Text (the optical "small size" cut) is chosen for body at 17px / 1.47, generous compared to most product sites. The combination of larger body type and tight tracking (`-0.022em` on body) makes Apple's marketing copy read like print magazine pulls — long sentences, lots of air around the column, no nervous energy.

The page works because it never tries to entertain you. It is a vertical sequence of product hand-offs, paced like a magazine flat-plan: each panel a full visual moment, separated by the pale gutter, with no narrative chrome trying to bridge them. Apple's brand-ness comes from the absence — the silence is the system.

**Key Characteristics:**
- Pure white canvas (`#ffffff`) — silence as a design principle
- `980px` button radius — finite-pill geometry, the system's signature
- Single brand voltage: Apple blue `#0071e3` only for actionable surfaces
- SF Pro Text at 17px body — optical small-size cut, generous line-height
- 44px sticky header — the skinniest chrome in the industry
- Edge-to-edge product panels separated by 12px `#fafafc` gutters
- Per-panel chromatic universes — black iPhone Pro, white AirPods, graphite Watch
- Near-zero shadows — depth comes from gutter color, not elevation
- Two type cuts (SF Pro Display for ≥20px, SF Pro Text for body)
- 980px centred type column inside edge-to-edge panels
- Cinematic scroll: products pin in view as copy scrolls past

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`) → `--sk-fill`: the page floor for the chrome and most marketing panels.
- **Ink** (`#1d1d1f`) → `--sk-body-text-color` / `--sk-headline-text-color`: dominant text colour. Slightly softened from pure black, photographs warmer.
- **Apple Blue** (`#0071e3`) → `--sk-fill-blue` / `--sk-focus-color`: the singular brand voltage. Only on actionable surfaces — primary CTA fill, focus ring, inline brand wordmark.

### Brand & Dark
- **Optical Blue** (`#2997ff`): the dark-mode SF-equivalent. Used inside dark product panels (iPhone Pro hero, Vision Pro) so the link / CTA blue stays legible against `#000`. Apple ships two blues, one per optical mode.
- **Bg Dark** (`#000000`): pure black product-panel ground (iPhone Pro hero).
- **Bg Deep** (`#1d1d1f`): near-black product-panel ground (Watch, AirPods Pro hero) — slightly softer than `#000`, photographs better against high-key product imagery.

### Accent (Per-Panel)
- **Watch Coral** (`#fa4c5a`): observed on Watch hero seasonal campaigns.
- **Vision Pro Lavender** (`#a16eff`): observed inside Vision Pro splash bands.
- These are sub-brand accents — they appear inside one panel and never leak into chrome.

### Interactive
- **Link** (`#0066cc`) → `--sk-body-link-color`: inline body-text links. Slightly darker than `#0071e3` for AAA contrast on white.
- **Link Hover** (`#004999`): underline appears, colour darkens.
- **Selected** (`#0071e3` fill, `#ffffff` text): radio-style selectors in the Buy configurator.
- **Disabled** (`#a1a1a6` text, `#f5f5f7` fill): the `#86868b` disabled register only kicks in below 18px.

### Neutral Scale
- **Ink** (`#1d1d1f`) — display, body, headlines
- **Soft** (`#6e6e73`) → `--sk-glyph-gray-secondary`: supporting copy under headlines
- **Muted** (`#86868b`) → `--sk-fill-gray-secondary`: captions, disclaimers, currency disclosures
- **Faint** (`#a1a1a6`): legal copy, footnote stars
- **Divider** (`#d2d2d7`) → `--sk-fill-gray-tertiary`: solid hairlines between footer columns

### Surface & Borders
- **Canvas** (`#ffffff`) — page floor
- **Surface** (`#fafafc`) → `--sk-fill-secondary`: header / footer / inter-panel gutter — the page's only "non-white" white
- **Surface-2** (`#f5f5f7`) → `--sk-fill-tertiary`: section-panel ground (the AirPods Pro panel, the Apple TV+ panel)
- **Border** (`rgba(0,0,0,0.16)`) → `--sk-fill-gray-tertiary-alpha`: translucent hairline used inside in-card dividers
- **Border Strong** (`rgba(0,0,0,0.32)`): footer column rules, table borders inside Buy configurators

### Shadow Colors
Apple stays neutral-grey-tinted, never blue-tinted. The system trusts the gutter to carry depth — most surfaces have no shadow at all. Shadows that exist are 2-layer at most.

- `rgba(0,0,0,0.04) 0 1px 2px` — ambient (almost invisible)
- `rgba(0,0,0,0.04) 0 4px 12px` — card hover (Apple TV+ tiles)
- `rgba(0,0,0,0.10) 0 6px 16px` — dropdown / nav popover
- `rgba(0,0,0,0.18) 0 12px 32px` — modal (Buy configurator overlay)

### Semantic
- **Success** (`#1d8649` on `#e8f5ee`) — order confirmation in Buy flows
- **Warning** (`#bf4800` on `#fff5ee`) — carrier disclosure / regulatory advisory
- **Danger** (`#d32f2f` on `#fdecec`) — form errors (rarely seen in marketing)
- **Info** uses the brand blue (`#0071e3` on `#e8f2fc`) — Apple does not differentiate info from brand

## 3. Typography Rules

### Font Family

**Primary**: `"SF Pro Display"`. Fallback chain: `"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif`. SF Pro Display is the headline cut; Apple swaps to **SF Pro Text** below 20px, where Text's looser counters and slightly heavier hairlines beat Display's tighter forms. The two-cut model is the system's typographic discipline.

**Body**: `"SF Pro Text"` exclusively for nav, CTA copy, body, and form fields. Apple's homepage runs on the Text cut — Display is reserved for ≥20px headlines.

**Mono companion**: `"SF Mono"`. Used sparingly — mostly on developer.apple.com and inside spec sheets. Does not appear in consumer marketing chrome.

**OpenType features**: `tnum` enabled on prices and measurements (timing values like "20-hour battery life"). `ss01` is enabled on display headlines for the alternate single-storey `a` that gives Display its sharp character. `ss02` enables on select wordmarks for the slashed-zero variant.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | SF Pro Display | 96 | 600 | 1.0417 | -0.015em | ss01 | iPhone hero ("iPhone 16 Pro") — peak typographic moment |
| display-xxl | SF Pro Display | 80 | 600 | 1.05 | -0.012em | — | Vision Pro / Mac hero second tier |
| display-xl | SF Pro Display | 64 | 600 | 1.0625 | -0.009em | — | Section H1 inside product panels |
| display-lg | SF Pro Display | 56 | 600 | 1.07 | -0.005em | — | Standard H1 across product pages |
| display-md | SF Pro Display | 48 | 600 | 1.08 | -0.003em | — | Sub-section heads ("Camera. New ways to shoot.") |
| h2 | SF Pro Display | 34 | 600 | 1.47 | -0.011em | — | Apple TV+ tile titles, Apple News heads |
| h3 | SF Pro Display | 28 | 600 | 1.143 | 0.007em | — | Feature card titles — note positive tracking |
| h4 | SF Pro Display | 24 | 600 | 1.167 | 0.009em | — | Sub-feature titles inside panels |
| title-lg | SF Pro Text | 21 | 600 | 1.19 | 0.011em | — | Footer column heads — switches to Text cut at 21 |
| title-md | SF Pro Text | 19 | 600 | 1.2105 | 0.012em | — | "Buy" callout titles |
| body-lg | SF Pro Text | 19 | 400 | 1.4211 | 0.012em | — | Hero supporting paragraph |
| body | SF Pro Text | 17 | 400 | 1.47 | -0.022em | — | Default running text — note the slight negative tracking |
| body-sm | SF Pro Text | 15 | 400 | 1.33 | -0.014em | — | Card body, feature lists |
| caption | SF Pro Text | 14 | 400 | 1.286 | -0.016em | — | Currency / price disclaimers |
| legal | SF Pro Text | 12 | 400 | 1.333 | -0.005em | — | Footnote symbols, regulatory copy |
| micro | SF Pro Text | 11 | 500 | 1.27 | 0.066em | uppercase | "NEW" eyebrow tags — uppercase, positive tracking |
| nav-link | SF Pro Text | 14 | 400 | 1.286 | -0.016em | — | Top product-nav labels |
| button-lg | SF Pro Text | 17 | 400 | 1.18 | -0.022em | — | Primary CTA labels — note: weight 400, not 600 |
| button-sm | SF Pro Text | 14 | 400 | 1.286 | -0.016em | — | Secondary "Learn more" links |
| code | SF Mono | 14 | 400 | 1.43 | 0 | — | Developer doc code samples (off marketing) |

### Principles

- **Two-cut optical discipline.** SF Pro Display below 20px is forbidden; SF Pro Text above 20px is forbidden. The two cuts are not interchangeable — they have different x-heights, different counter shapes, different stroke contrast.
- **Body weight is 400, not 500.** Marketing CTAs use weight 400 too — Apple lets size and color carry hierarchy, never pushes weight.
- **Tracking switches sign at the boundary.** Display sizes track *negative* (-0.005 to -0.015em); body and small text track *positive or zero*. The reason: large display benefits from tighter letterfit, body benefits from slightly opened tracking for legibility.
- **Body 17px is intentionally generous.** Most product sites ship 15–16px body. Apple ships 17 because the marketing reads like long-form magazine copy — generous body invites slow reading.
- **Headline lineHeight tightens with size.** 96px sits at 1.0417, 56px at 1.07, 34px at 1.47. The H2 line-height looks too tall on paper but reads correctly because H2s often wrap to 2–3 lines.
- **One typographically loud moment per page.** The 96px hero is the only place type alone carries hierarchy. Below the hero, photography takes over; type recedes to 17/1.47 body.
- **Tabular numerals on prices.** Configurator prices and "From $999" callouts all enable `tnum` so columns align.
- **Never push weight to 700 in marketing.** 700+ exists in SF Pro but Apple reserves it for OS chrome, not marketing.

## 4. Component Stylings

### Buttons

**`button-primary`** — The famous **blue pill**: `#0071e3` fill, white text, SF Pro Text 17/1.18 weight 400, padding `11px 21px`, `980px` radius. Every "Buy", "Order Now", "Pre-order" inherits this geometry. The 980px is finite — at extreme widths it degrades to a soft rounded rect, not a stadium.

**`button-primary-hover`** — Pointer-over flips fill to `#0077ed`. No transform, no shadow. The colour shift is the entire interaction.

**`button-primary-pressed`** — Pointer-down: `#006edb`. Slight darken, no scale change. Apple does not "click" with motion.

**`button-secondary-link`** — Plain `#0066cc` link with trailing chevron icon. No border, no fill. Underline appears only on hover and grows from 0 → 1px over 200ms. Used for "Learn more", "Compare", "Watch the film".

**`button-on-dark`** — On dark product panels (iPhone Pro hero, Watch hero), the primary CTA inverts to **white pill on black**: `#ffffff` fill, `#1d1d1f` text, same `980px` radius and padding. The blue link colour switches to `#2997ff` (optical blue).

**`button-on-dark-secondary`** — `#2997ff` text on dark, no fill, chevron-suffixed.

**Nav pill** — Sub-nav (e.g., the Watch sub-page) uses a `980px` floating pill of `rgba(255,255,255,0.72)` with `1d1d1f` text. Sticky on scroll; backdrop-blur applied.

### Cards

**`card-feature`** (`--media-gallery-tile`) — `#fafafc` fill, `18px` radius, 40×28px padding. Apple TV+ show tiles, Apple News editorial tiles, accessory grid items. Hover lift: `transform: translateY(-2px); box-shadow: rgba(0,0,0,0.04) 0 4px 12px;` over 200ms.

**`card-product`** — Section panel containing one product theatre. `#f5f5f7` ground, `28px` radius, no padding (image and copy float inside). The card *is* the panel; there's no card chrome beyond the corner radius and ground fill.

**`card-on-dark`** — Inside dark product panels, cards keep the panel ground (no separate fill) and rely on hairline `rgba(255,255,255,0.16)` borders. Apple does not stack dark cards on dark panels — depth comes from the panel itself.

### Badges, Tags, Pills

**`badge-feature`** — Uppercase eyebrow above headlines: 11px / 500, `0.066em` tracking, `#bf4800` (the warm advisory orange) for "NEW", `#1d8649` for "AVAILABLE NOW", or `#0071e3` for "PRE-ORDER". No fill, no border — just coloured uppercase text.

**`pill-spec`** — Inline spec badges in iPhone configurator ("128 GB", "512 GB"): `#f5f5f7` fill, `1d1d1f` text, sharp `4px` radius. Selected state: `#0071e3` fill, white text. Note the radius break — specs use `4px`, not the `980px` button radius.

### Inputs / Forms

**`text-input`** — Account / search inputs. `#ffffff` fill, `1px solid #d2d2d7` border, **0px radius** (sharp corners — explicit register break from the `980px` pill), 28px height, 4×8px padding. On focus: `outline: 2px solid #0071e3`. The system's only sharp-corner element.

**`search-overlay`** — Full-bleed search modal. `rgba(255,255,255,0.94)` fill with backdrop-blur. Single drop shadow `rgba(0,0,0,0.18) 0 12px 32px`. Sharp corners for the input, but the overlay container itself is straight-edged.

### Navigation

**`top-nav`** — `44px` height, `#fafafc` (`--sk-fill-secondary`) backdrop with backdrop-blur `saturate(180%) blur(20px)`. No border, no shadow. Apple wordmark flush left at 14px wide, ~10 product tabs (Mac, iPad, iPhone, Watch, …) centred, search and bag icons flush right. Each tab is 14×0px text with 16px horizontal padding; hover state shows a subtle `rgba(0,0,0,0.04)` background pill.

**`top-nav-on-dark`** — On dark product hero panels, the nav inverts: `rgba(0,0,0,0.5)` backdrop with the same blur. Wordmark goes white. This is the only place Apple paints chrome on top of a panel.

### Modals & Overlays

**`modal`** — Centred dialog over `rgba(0,0,0,0.48)` scrim. White surface, `18px` radius, `32px` padding, modal shadow tier. Buy configurator and account modals.

**`tooltip`** — Used very sparingly. `#1d1d1f` fill, white text in `caption` (14/400), `4px` radius, 6×10px padding. Apple prefers explicit visible labels to hover-revealed help.

### Decorative

**`product-photo-frame`** — Edge-to-edge product imagery floats inside panels with no frame, no shadow, no rounded corners. The product is the visual; the system trusts the photo to do everything chrome would.

## 5. Layout Principles

### Spacing System

- Base unit: **4px** with 2px micro-step
- Scale: `2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 44 · 48 · 64 · 80 · 96 · 120 · 160`
- Inter-panel gutter: **12px** of `#fafafc` between every product panel — the system's only consistent rhythm
- Section padding (vertical): 96px–160px inside major panels (generous, magazine-paced)
- Card internal padding: 40×28px on feature cards, 28px on Apple TV+ tiles
- Type column gutter: 16px between body and trailing CTA chevron link

### Grid & Container

- Max content: panels go **edge-to-edge** (no clamp on 4K displays)
- Type column inside panels: centred ~**980px** wide
- Two-column inside panels: 50/50 split with 32px gutter (e.g., "Performance" and "Battery" sub-features side by side)
- Apple TV+ grid: 4-column at desktop, 18px radius cards, 12px gutter between
- Footer: 4-column link list at desktop, ~1280px max width

### Whitespace Philosophy

The system is **magazine-paced**. Each panel has 96–160px of vertical breathing room above and below the type column. The hero gets the most space (often 200px+ above the H1). Apple uses whitespace as the brand's primary chrome — there is no decorative imagery filling negative space; the negative space is the imagery.

### Section Cadence

The homepage alternates **light → dark → light** through the panel rail:
- White panel (Watch, MacBook Air)
- Dark panel (iPhone Pro hero — pure `#000`)
- Light grey panel (Apple Vision Pro splash on `#f5f5f7`)
- White panel (Apple TV+ editorial)
- Dark panel (AirPods Pro)

The cadence is musical — every 2 panels the ground shifts. This gives the page rhythm without a single visible divider.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Sharp | 0px | Form inputs (text, search) — explicit register break |
| Micro | 4px | Spec pills (capacity, colour selectors) inside Buy configurators |
| Standard | 8px | Inline tiles, image overlays |
| Comfortable | 12px | Apple News editorial cards |
| Relaxed | 18px | `--media-gallery-tile` — Apple TV+ tiles, accessory grids |
| Featured | 28px | Product panel section bezels |
| Hero | 34px | Largest product tiles (iPhone Pro feature panel) |
| Button | 980px | The signature finite-pill — primary CTAs |
| Pill | 9999px | Status badges only — never on buttons |

The `980px` is the system's single most distinctive number. It is **not** `9999px`; the finite value means very wide buttons (rare but possible) degrade to a soft rounded rect rather than a perfect stadium. This is engineering discipline made visible — Apple specifies the exact radius rather than the lazy infinity.

There is one **forbidden mix**: never combine `980px` button corners with `0px` form-input corners on the same screen. The system has only two shape registers — products use big curves, forms use sharp corners — and they are kept on separate screens.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, hero, all editorial panels (~95% of surfaces) |
| 1 — Card hover | `rgba(0,0,0,0.04) 0 4px 12px` | Apple TV+ tiles, accessory cards on pointer-over |
| 2 — Dropdown | `rgba(0,0,0,0.10) 0 6px 16px` | Nav popovers, search-suggest dropdown |
| 3 — Overlay | `rgba(0,0,0,0.18) 0 12px 32px` | Buy configurator modal, search overlay |
| 4 — Scrim | `rgba(0,0,0,0.48)` ground | Modal backdrop tone |

### Shadow Philosophy

Apple's homepage uses **near-zero shadow**. Panels separate by gutter color alone — `#fafafc` between `#ffffff` panels (or vice versa: `#ffffff` between dark panels). The only shadow on the chrome is the search overlay's drop shadow at full open. Cards inside product panels (Apple TV+ tile grid) use a `12–18px` radius and a barely-there `rgba(0,0,0,0.04)` fill instead of a stroke or shadow.

Where Stripe layers blue-tinted multi-stack shadows for depth, Apple lets **negative space** carry depth. The system's depth is in the gutter — not above the surface, but between the surfaces. This is why the homepage photographs cleanly even on cheap displays: there's no nuanced shadow for a low-gamut screen to crush.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — hover colour swaps, link underline grow, dropdown reveal
- **Emphasized**: `cubic-bezier(0.16, 1, 0.3, 1)` — Apple's signature design curve. Modal entry, scroll-pin product hand-offs, carousel slide
- **Out-soft**: `cubic-bezier(0, 0, 0.2, 1)` — image fades, scrim entry
- **Fluid**: `cubic-bezier(0.65, 0, 0.35, 1)` — long deliberate animations (product reveal, parallax)

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 100ms | Hover colour swaps, focus ring appearance |
| Standard | 200ms | Link underline grow, button hover, dropdown reveal |
| Slow | 400ms | Modal enter, scrim fade |
| Deliberate | 600–1200ms | Cinematic product pin-and-scroll, carousel slide |

### Per-Component Recipes

- **Primary CTA hover**: fill `#0071e3` → `#0077ed` over 200ms standard. No transform, no shadow change. The colour shift is the entire interaction.
- **Link underline grow**: `text-decoration-thickness: 0px → 1px` over 200ms. Apple is the only major brand that *grows* underlines on hover instead of just toggling them.
- **Card hover lift**: `translateY(-2px)` over 200ms ease-emphasized + `box-shadow: 0 4px 12px rgba(0,0,0,0.04)`. Used on Apple TV+ tiles.
- **Scroll-pin product hand-off**: as a panel scrolls into view, the product image pins to viewport centre and the supporting copy scrolls past it over 600–1200ms ease-emphasized. The signature Apple marketing motion — used on iPhone Pro feature panels.
- **Modal enter**: scrim fades 0 → 0.48 opacity over 200ms ease-out, then dialog translates `translateY(12px)` → 0 with opacity 0 → 1 over 240ms ease-emphasized.
- **Carousel slide**: 900ms ease-emphasized between product slides — slow and deliberate, never snappy. The slowness is the brand voice.
- **Search overlay**: full-bleed reveal with backdrop-blur applied over 240ms ease-emphasized. Input focus is delayed 80ms after overlay enter so keyboard nav lands right.

### Page Transitions

Page-to-page navigation (homepage → product → Buy) uses a soft cross-fade rather than a slide — 300ms over the full page. The white canvas makes this nearly invisible, which is the point: Apple wants the product photography to be the moment of arrival, not the chrome.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. The signature scroll-pin hand-off degrades to instant cuts (the product appears in place, copy appears below). Carousel auto-advance disables; user-initiated navigation still works. All `translate` and `scale` transforms suppress; only opacity transitions remain. The blue pill hover stays (it's a colour swap, not a transform).

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #1d1d1f ink on #ffffff canvas | 17.4 | AAA |
| #ffffff on #0071e3 brand CTA | 4.6 | AA body / AAA large |
| #0066cc link on #ffffff | 7.0 | AAA |
| #6e6e73 soft on #ffffff | 4.5 | AA |
| #86868b muted on #ffffff | 3.5 | AA large only — used at ≥18px |
| #f5f5f7 on #ffffff (surface vs canvas) | 1.04 | Borders required to separate |
| #2997ff optical blue on #000 dark | 5.9 | AA |

### Focus Indicators

Focus ring is `4px solid rgba(0,113,227,0.4)` outline with `2px outline-offset` — the signature Apple-blue halo. Larger than most systems' 2px ring; the soft alpha makes it feel like a glow rather than a hard border. It survives at high contrast and never overlaps the button corners.

### ARIA Patterns

- **Product panels**: `<section aria-labelledby="iphone-hero">` with H1 inside. Announces correctly on screen readers.
- **Carousel** (used in Apple TV+ shelf): `role="region" aria-roledescription="carousel"` with prev/next buttons that announce slide position.
- **Buy configurator**: `role="radiogroup"` for capacity / colour choices. Each option is a `role="radio"` with `aria-checked`.
- **Modal**: focus trap, Esc closes, focus returns to trigger on close.
- **Search overlay**: `role="dialog" aria-label="Search apple.com"`. Input gets `aria-autocomplete="list"` for the suggest dropdown.

### Keyboard Navigation

- Skip-to-main link first (visible on focus).
- Top nav: Tab through wordmark → product tabs left-to-right → search → bag.
- Carousel: Tab to region, then arrow keys to navigate slides.
- Configurator: Tab to radiogroup, arrow keys to change selection (standard radio behaviour).
- Buy flow: Tab through fields top-to-bottom, Enter submits.

### Screen Reader Hints

Apple uses verbose `aria-label` on icon-only chrome — the bag icon announces "Shopping bag, 0 items"; the search icon announces "Search apple.com"; product nav icons (which sometimes show only an icon at narrow widths) carry `aria-label="iPhone"`. The wordmark links to home with `aria-label="Apple"`.

### Reduced Motion

Honored via `@media (prefers-reduced-motion: reduce)`. Pinned-product scroll hand-offs degrade to instant cuts; carousel auto-advance disables; all transform-based animations become opacity-only.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <734px | Top nav collapses to wordmark + hamburger; product panels shrink to viewport-width, type column to ~88vw; carousel becomes scroll-snap |
| Tablet | 734–1067px | Top nav keeps product tabs but collapses sub-tabs; panels at full-bleed but type column tightens to 600px |
| Desktop | 1068–1279px | Full top nav with all product tabs; type column at 980px |
| Wide | ≥1280px | Panels stay edge-to-edge; type column caps at 980px; gutters absorb the rest |

### Touch Targets

- Primary CTAs: minimum 40×40px (slightly under 44px AAA, but compensated by 12px+ surrounding padding)
- Top nav links: 44×44px effective (text 14px + 16px horizontal padding)
- Carousel arrows: 44×44px circular
- Spec pills inside Buy configurator: 32px tall — compensated by 8px gutters

### Collapsing Strategy

- Top nav → hamburger sheet below 734px; the sheet is full-bleed white with 18px-radius corners and product tabs stacked vertically at 17px / 600.
- Product panels stay edge-to-edge at every breakpoint — never reflow to padded boxes.
- Type column inside panels collapses to ~88vw on mobile, then 600px / 720px / 980px at tablet / desktop / wide.
- Apple TV+ grid: 4-column → 2-column → 1-column.
- Buy configurator collapses from 2-column to single-column at 734px; sticky bottom bar replaces the right-rail price summary.

### Image Behavior

Product photography uses `aspect-ratio` lockfor the hero image and `object-fit: cover` for the panel. Carousels use scroll-snap on touch surfaces and arrow buttons on mouse. Apple ships HEIC and AVIF for product images with WebP and JPEG fallbacks; the same image at multiple resolutions is served via `srcset`.

### Container Queries

Apple TV+ tiles use container queries to swap from a 16:9 hero card (when tile width ≥ 480px) to a 1:1 portrait card (below 480px). Inside the Buy configurator, the price summary uses container queries to switch between horizontal (price + spec line) at ≥600px and vertical stack below.

## 11. Content & Voice

### Tone

**Confident, declarative, and never chatty**. Apple's voice trusts the reader to understand product value without being told. Headlines lead with the product ("iPhone 16 Pro. So strong. So light. So Pro."), not the action ("Buy the latest iPhone!"). There are no exclamation marks in product marketing (rare exceptions in seasonal banners like "Happy Holidays!"). The brand consistently positions products as objects of craft, not commodities.

### Microcopy Patterns

- **Button verbs**: "Buy", "Order Now", "Pre-order", "Learn more", "Compare", "Watch the film" — direct, outcome-named, never "Submit" or "Click here"
- **Configurator labels**: instructive and complete — "Choose your finish", "Choose your storage" — never "Select option"
- **Error message recipe**: `[What went wrong]. [How to fix].` — e.g., "Your card was declined. Choose a different payment method or contact your bank."
- **Success confirmations**: short and personalized — "Your order is confirmed. We'll email you a tracking number when your iPhone ships." rather than "Order successful"
- **Price disclaimers**: full sentences with footnote markers — "From $999 or $41.62/mo. for 24 mo. before trade-in*"

### Empty States

Apple's marketing site has very few empty states (most pages are populated by product). The exceptions:

- Empty bag: "Your bag is empty. Continue shopping" with a chevron link to the homepage.
- Empty search: "No results for `query`. Check the spelling or try a more general term."
- Empty wishlist (in Apple Music marketing): "Songs you save to your library will appear here. Tap the + on any song to start."

### CTA Verb Conventions

- Primary action: **"Buy"** (commerce), **"Order Now"** (in-stock new product), **"Pre-order"** (announced but not shipping)
- Secondary action: **"Learn more"** (chevron link), **"Compare"** (across product line), **"Watch the film"** (video link)
- Tertiary text: **"View all"** (gallery), **"See it in AR"** (mobile)
- Never: "Submit", "Click here", "Get yours", "Sign up now" (consumer-tech cliché Apple avoids)

## 12. Dark Mode & Theming

Apple's marketing site is **per-panel dark, not site-wide dark**. The chrome (header / footer / page background) stays light at every visit; individual product panels (iPhone Pro hero, Apple Watch hero, Vision Pro, AirPods Pro) ship full dark surfaces.

When a panel goes dark:
- Ground flips to `#000000` (pure black, e.g. iPhone Pro) or `#1d1d1f` (near-black, e.g. Watch)
- Body text becomes `#f5f5f7`
- Soft text becomes `#a1a1a6`
- Brand blue swaps to **optical blue** `#2997ff` — the SF-equivalent for dark backgrounds
- Apple Blue `#0071e3` would clip against pure black; `#2997ff` retains hue while gaining luminance
- Borders flip to `rgba(255,255,255,0.16)`
- The white pill CTA (`button-on-dark`) replaces the blue pill — black panels need maximum-contrast actions

**Dark token swap (when a panel ships dark):**

| Token | Light | Dark |
|-------|-------|------|
| bg | #ffffff | #000000 (or #1d1d1f) |
| text | #1d1d1f | #f5f5f7 |
| text-soft | #6e6e73 | #a1a1a6 |
| brand | #0071e3 | #2997ff |
| link | #0066cc | #2997ff |
| on-brand | #ffffff | #ffffff |
| border | rgba(0,0,0,0.16) | rgba(255,255,255,0.16) |

The site does not respond to `prefers-color-scheme`. The light/dark choice is editorial — chosen per panel by the designer, not by the user. This is deliberate: the iPhone Pro hero photographs better against `#000` regardless of user preference.

## 13. Lineage & Influences

Apple's marketing site is the elder system most other product sites quietly reference. The `--sk-*` ("Stylekit") token namespace exposes a complete chromatic system — `--sk-fill-blue: rgb(0, 113, 227)` for primary, `--sk-fill-gray-tertiary: rgb(210, 210, 215)` for ground, `--sk-body-text-color: rgb(29, 29, 31)` for type — with semantic pairs (`fill` / `glyph`, `primary` / `secondary` / `tertiary`) that show up later in Linear, Vercel, Stripe, Notion, and dozens of agency portfolios. The Apple HIG's token semantics are the foundation; the marketing site is the most public expression of that token system.

The visual lineage runs through three traditions: **Dieter Rams / Braun's "weniger, aber besser"** (white-canvas product theatre as a marketing language); **Susan Kare's original Mac UI** (rounded-rect ergonomic that defines the button radius scale); and **Helmut Schmidt / Swiss editorial design** (single-column type, generous whitespace, restrained colour). The 980px button radius is the system's most distinctive single number — finite, not infinite, exposing engineering discipline.

What Apple rejects: heavy shadows, decorative gradients (Stripe's territory), dark site-wide canvas (Linear's territory), multiple brand colours, illustrative chrome, banner copy, exclamation marks. The brand's voice is silence; the page chrome's job is to disappear so the product photography does the work.

**Influences:**
- Dieter Rams / Braun — white-canvas product theatre, [Wikipedia](https://en.wikipedia.org/wiki/Dieter_Rams)
- Susan Kare — original Mac UI typography & icon language, [kare.com](https://kare.com)
- Helmut Schmidt / Swiss design — single-column type, generous whitespace
- Apple Human Interface Guidelines — semantic token pairs (fill/glyph, primary/secondary/tertiary), [HIG](https://developer.apple.com/design/human-interface-guidelines/)
- SF Pro / SF Pro Text — two-axis optical-cut typography, [apple.com/fonts](https://developer.apple.com/fonts/)
- Stylekit (--sk- namespace) — internal Apple design tokens, [apple.com](https://www.apple.com)

## 14. Do's and Don'ts

**Do**
- Use `980px` radius (not `9999px`) on the primary button — it's the signature geometry that subtly degrades on extreme widths
- Use SF Pro **Text** for marketing copy at 14–17px and reserve SF Pro **Display** for headlines above 20px
- Separate sections with a `#fafafc` gutter rather than a border or shadow — Apple's depth comes from negative space
- Use Apple Blue `#0071e3` only on actionable surfaces — primary CTA, focus ring, inline brand wordmark
- Use Optical Blue `#2997ff` on dark panels — the light blue cut for dark backgrounds
- Pair sharp `0px` form-input corners with `980px` button corners — the system has only two shape registers
- Lead headlines with the product, not the action — "iPhone 16 Pro." not "Buy the new iPhone!"
- Use tabular numerals on prices and configurator capacities
- Keep the chrome at 44px height with no border, no shadow — the skinniest top-nav in the industry
- Use `prefers-reduced-motion` to degrade scroll-pin hand-offs to instant cuts

**Don't**
- Don't use Apple Blue `#0071e3` as decoration. It is reserved for actionable surfaces (buttons, links, focus rings) only
- Don't clamp page width on the marketing surface. Apple's panels are always edge-to-edge; the type column inside is what's centered
- Don't mix the `980px` button pill with sharp `4px` form-input corners on the same screen — the system has only two shape registers
- Don't apply heavy multi-layer shadows. The system's depth is in the gutter, not above the surface
- Don't use exclamation marks in product marketing — the voice is confident, never giddy
- Don't push display weight to 700. SF Pro Display at 600 is the system; 700 is for OS chrome
- Don't break the two-cut optical discipline. SF Pro Display below 20px is forbidden; SF Pro Text above 20px is forbidden
- Don't add decorative gradients. Apple ships product photography on flat ground — gradients are Stripe's territory
- Don't paint the focus ring solid. It is `rgba(0,113,227,0.4)` at 4px outline — a halo, not a hard border
- Don't use Apple Blue on dark panels. Switch to Optical Blue `#2997ff` so the link colour stays legible against `#000`
- Don't ship a site-wide dark mode toggle. Apple's dark is per-panel and editorial, not user-toggled

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #ffffff
Surface (gutter): #fafafc
Surface-2 (panel): #f5f5f7
Ink:           #1d1d1f
Soft:          #6e6e73
Muted:         #86868b
Apple Blue:    #0071e3
Apple Blue (hover): #0077ed
Optical Blue (dark mode): #2997ff
Link:          #0066cc
Border:        rgba(0,0,0,0.16)
Bg Dark:       #000000
Bg Deep:       #1d1d1f
```

### Example Component Prompts

- "Create an Apple-style hero panel: pure white canvas (#ffffff), 96px / 600 SF Pro Display headline 'iPhone 16 Pro' centred, supporting paragraph in 19px / 400 SF Pro Text below, then a 980px-radius blue pill (#0071e3) labelled 'Buy' followed by a #0066cc 'Learn more ›' link with chevron. No shadows, generous 96px+ vertical breathing room."
- "Design an Apple TV+ feature card: #fafafc fill, 18px radius, 40×28px padding, show poster fills the top half edge-to-edge, title in 28px / 600 SF Pro Display below, single-line description in 17px / 400 ink. Hover lift: translateY(-2px) + rgba(0,0,0,0.04) 0 4px 12px shadow over 200ms ease-emphasized."
- "Build a primary CTA button: #0071e3 fill, white text in SF Pro Text 17/1.18 weight 400, 980px radius, padding 11×21px, 40px height. Hover: fill flips to #0077ed, no transform, no shadow. Pressed: #006edb."
- "Build a dark product hero panel: pure black (#000000) ground, 80px / 600 SF Pro Display headline in #f5f5f7, supporting paragraph in 19px / 400 #a1a1a6 below, then a white pill CTA (#ffffff fill, #1d1d1f text, 980px radius) and a #2997ff 'Learn more ›' optical-blue link to the right. Header chrome inverts to rgba(0,0,0,0.5) with backdrop-blur."
- "Build a Buy configurator: 2-column at desktop, product photo left (60%), spec selector right (40%). Spec pills are 4px-radius (NOT 980px), 32px tall, #f5f5f7 fill / #1d1d1f text in default state, #0071e3 fill / white text when selected. Sticky right-rail price summary at bottom. Mobile: collapses to single-column with sticky bottom bar carrying selected price + Continue CTA."
- "Build a top nav: 44px height, #fafafc backdrop with backdrop-blur saturate(180%) blur(20px), no border. Apple wordmark left at 14px wide; product tabs centred (Mac, iPad, iPhone, Watch, AirPods, TV & Home, Entertainment, Accessories, Support); search and bag icons right. Each tab is 14px / 400 SF Pro Text with 16px horizontal padding. Hover: rgba(0,0,0,0.04) background pill."

### Iteration Guide

1. **Start on white canvas.** Anything other than `#ffffff` for the chrome reads as a different brand. Surface (`#fafafc`) is for the gutter only; surface-2 (`#f5f5f7`) is for product panels.
2. **One Apple Blue moment per fold.** If your composition has two or more `#0071e3` elements visible at once, demote one — the brand colour draws the eye, not papers the page.
3. **Use 980px, not 9999px.** The finite radius is the system's signature engineering discipline. Lazy infinity gives you a stadium; 980 gives you a soft rounded rect at the edges.
4. **SF Pro Display ≥20px, SF Pro Text <20px.** Resist the urge to use Display at body sizes — Text's looser counters and slightly heavier hairlines beat Display below 20px.
5. **Photography carries hierarchy.** If the page feels weak, add a larger product image, not a heavier headline. Type stays at 600 weight max for display; product photos do the work.
6. **Switch to Optical Blue on dark panels.** `#0071e3` clips against `#000` — `#2997ff` is the cut for dark backgrounds. Apple ships two blues for a reason.
7. **Sharp corners on form inputs only.** Every other interactive element is curved. The 0px form input is the deliberate register break.
8. **Headline lineHeight tightens with size.** 96/1.04, 56/1.07, 34/1.47. The H2 line-height looks tall on paper but reads correctly because H2s wrap to 2–3 lines.
