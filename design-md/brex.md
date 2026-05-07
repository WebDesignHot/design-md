---
name: Brex
tagline: Cool grey-blue surfaces, magenta-to-purple-to-indigo gradient, Söhne 600 — fintech as fast, modern, slightly flashy.
updated_at: 2026-05-05T20:10:49+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://brex.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [fintech, saas]
tags: [light, sans, structured, cool, bright, gradient]
preview_swatch: ['#f5f5f7', '#a855ff', '#0e0f12']
related: [stripe, ramp, mercury]
description: 'Brex picked the loudest position in the corporate-card category: cool grey-blue surfaces, a magenta-to-purple-to-indigo gradient on every primary surface, and Söhne-class neo-grotesque type set tight at weight 600 with `-0.03em` tracking. Where Ramp whispers in editorial calm and Mercury commits to a serif headline + a single mint band, Brex commits to chroma — a `135°` linear gradient (`#ff5cad → #a855ff → #5b6dff`) that appears on the primary CTA, on hero illustration washes, on framework-icon backdrops, and as sectional accents. The neutral surfaces are cool grey-blue (`#f5f5f7`, `#f0f0f3`), distancing Brex from Wise''s warm cream and Mercury''s pure white. Söhne carries the type at 600 weight with `-0.03em` tracking — the same neo-grotesque Ramp uses, but heavier and more declarative; the H1 lands at 72px / 600. The 16px card radius, 8px button radius, and soft `0 4px 20px` shadow are 2026 SaaS-consensus values; what distinguishes Brex from any Linear-style dark surface is its refusal to go fully dark — the canvas stays white, and the gradient does the work of "modern fintech for fast companies." The aesthetic descends from Stripe''s gradient brand era circa 2019-2021, but Brex pushes it harder into pink-magenta where Stripe pulled back to a single confident blue.'

colors:
  bg: '#ffffff'                  # white canvas — the dominant page background
  bg-soft: '#f5f5f7'             # cool grey-blue panel base — the brand neutral
  bg-tile: '#f0f0f3'             # tile / inset card base, slightly cooler
  bg-soft-2: '#f7f7f9'           # softer panel, between bg-soft and white
  bg-ink: '#0e0f12'              # near-black hero band — rare, used for testimonials/inverted sections
  bg-violet: '#1a0d2e'           # deep aubergine band — rare emotional emphasis
  bg-gradient-wash: 'linear-gradient(180deg, rgba(255, 92, 173, 0.06) 0%, rgba(168, 85, 255, 0.06) 50%, rgba(91, 109, 255, 0.06) 100%)'
  surface: '#ffffff'             # default card surface
  surface-soft: '#f7f7f9'        # secondary card surface
  surface-cool: '#f0f0f3'        # tertiary tile surface
  surface-dark: '#0e0f12'        # near-black surface for inversion
  text: '#0e0f12'                # near-black body — slight warmth in the deep
  text-strong: '#000000'         # peak black for display copy
  text-body: '#1c1d22'           # body paragraph, slightly softened from headlines
  text-muted: '#5a5d66'          # supporting copy, captions
  text-soft: '#8a8d96'           # eyebrows, helper text
  text-faint: '#b0b3bb'          # placeholder, disabled
  text-on-dark: '#ffffff'        # text on bg-ink
  text-on-dark-soft: '#a3a6af'   # secondary text on dark band
  brand: '#a855ff'               # magenta-purple — the brand identity colour
  brand-strong: '#7e3df0'        # deeper purple, gradient stop
  brand-pink: '#ff5cad'          # pink stop in the signature gradient — first stop
  brand-deep: '#6b2ed3'          # pressed-state purple
  brand-hover: '#9744ee'         # hover-state purple
  brand-soft: '#f3e8ff'          # light purple wash for backgrounds
  brand-tint: 'rgba(168, 85, 255, 0.08)'   # very soft purple tint
  brand-glow: 'rgba(168, 85, 255, 0.32)'   # focus glow
  accent: '#5b6dff'              # supporting electric-indigo — third gradient stop
  accent-strong: '#3b4eff'       # deeper indigo
  accent-soft: 'rgba(91, 109, 255, 0.10)'  # indigo wash
  on-brand: '#ffffff'            # white text on gradient CTA
  cta-text: '#ffffff'            # CTA copy, full white on gradient
  link: '#5b6dff'                # links lean indigo (third gradient stop) for legibility on white
  link-hover: '#3b4eff'          # darker indigo, hover state
  border: 'rgba(14, 15, 18, 0.09)'         # 9% near-black hairline rule
  border-soft: 'rgba(14, 15, 18, 0.06)'    # 6% near-black, quieter
  border-strong: 'rgba(14, 15, 18, 0.16)'  # 16% near-black, focused inputs
  border-brand: 'rgba(168, 85, 255, 0.40)' # purple-tinted border for emphasis
  shadow-ambient: 'rgba(14, 15, 18, 0.04)'           # subtle ambient
  shadow-card: 'rgba(14, 15, 18, 0.04) 0 4px 20px'   # the signature soft elevated shadow
  shadow-elev: 'rgba(14, 15, 18, 0.08) 0 12px 32px -8px'  # elevated dropdown
  shadow-popover: 'rgba(14, 15, 18, 0.10) 0 16px 40px -16px'
  shadow-modal: 'rgba(14, 15, 18, 0.20) 0 24px 64px -16px'
  shadow-glow-brand: 'rgba(168, 85, 255, 0.24) 0 8px 32px -4px'  # purple glow on hero gradient ground
  scrim: 'rgba(14, 15, 18, 0.60)'           # modal backdrop
  gradient-primary: 'linear-gradient(135deg, #ff5cad 0%, #a855ff 50%, #5b6dff 100%)'
  gradient-hero: 'linear-gradient(135deg, #ff5cad 0%, #a855ff 60%, #5b6dff 100%)'
  gradient-wash: 'linear-gradient(135deg, rgba(255, 92, 173, 0.10) 0%, rgba(168, 85, 255, 0.10) 50%, rgba(91, 109, 255, 0.10) 100%)'
  gradient-vertical: 'linear-gradient(180deg, #ff5cad 0%, #a855ff 50%, #5b6dff 100%)'
  gradient-radial: 'radial-gradient(circle at 30% 30%, #ff5cad 0%, #a855ff 50%, #5b6dff 100%)'
  success: '#10b981'             # emerald-green confirmation
  success-soft: 'rgba(16, 185, 129, 0.10)'
  warning: '#f59e0b'             # advisory amber
  warning-soft: 'rgba(245, 158, 11, 0.10)'
  danger: '#ef4444'              # error red
  danger-soft: 'rgba(239, 68, 68, 0.10)'
  info: '#5b6dff'                # info reads as indigo accent
  info-soft: 'rgba(91, 109, 255, 0.10)'

typography:
  display:
    family: '"Söhne", "Söhne Breit", "Inter Display", Inter, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['kern', 'liga', 'ss01', 'ss02']
  body:
    family: '"Söhne", Inter, -apple-system, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['kern', 'liga']
  mono:
    family: '"Söhne Mono", "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace'
    weights: [400, 500]
    opentype-features: ['liga', 'tnum', 'zero']
  scale:
    display-hero:    { size: 96, weight: 600, lineHeight: 0.95, tracking: '-0.035em', family: display, opentype: ['ss01'] }
    display-xl:      { size: 80, weight: 600, lineHeight: 0.98, tracking: '-0.03em',  family: display }
    display-lg:      { size: 72, weight: 600, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    h1:              { size: 56, weight: 600, lineHeight: 1.05, tracking: '-0.025em', family: display }
    h2:              { size: 40, weight: 600, lineHeight: 1.10, tracking: '-0.02em',  family: display }
    h3:              { size: 28, weight: 600, lineHeight: 1.20, tracking: '-0.01em',  family: display }
    h4:              { size: 22, weight: 500, lineHeight: 1.30, tracking: '-0.005em', family: display }
    h5:              { size: 18, weight: 500, lineHeight: 1.40, tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.40, tracking: '0.06em',   family: mono, transform: uppercase }
    section-label:   { size: 13, weight: 600, lineHeight: 1.40, tracking: '0.06em',   family: mono, transform: uppercase }
    body-lg:         { size: 20, weight: 400, lineHeight: 1.50, tracking: '0',        family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.50, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.45, tracking: '0',        family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.40, tracking: '0',        family: body }
    caption-mono:    { size: 12, weight: 500, lineHeight: 1.40, tracking: '0',        family: mono, opentype: ['tnum'] }
    label:           { size: 12, weight: 600, lineHeight: 1.30, tracking: '0',        family: body }
    label-mono:      { size: 11, weight: 600, lineHeight: 1.30, tracking: '0.06em',   family: mono, transform: uppercase }
    button-md:       { size: 15, weight: 600, lineHeight: 1.20, tracking: '0',        family: body }
    button-sm:       { size: 13, weight: 600, lineHeight: 1.20, tracking: '0',        family: body }
    pricing-display: { size: 64, weight: 600, lineHeight: 1.0,  tracking: '-0.025em', family: display, opentype: ['tnum'] }
    quote-pull:      { size: 32, weight: 500, lineHeight: 1.25, tracking: '-0.015em', family: display }
    code-inline:     { size: 14, weight: 500, lineHeight: 1.40, tracking: '0',        family: mono }

radius:
  micro: 2
  xs: 4           # status badges
  sm: 6           # tag chips
  md: 8           # buttons, inputs
  lg: 12          # secondary cards
  xl: 16          # primary cards — the modern fintech default
  hero: 20        # hero panels, large surfaces
  pill: 9999      # capsule chips, status capsules

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 112, 128]

layout:
  page-width: 1280
  prose-width: 720
  container-gutter: 24
  section-y: 112
  rhythm: 8
  header-height: 72
  hero-min-height: 720

components:
  button-primary:
    bg: 'linear-gradient(135deg, #ff5cad 0%, #a855ff 50%, #5b6dff 100%)'
    color: '#ffffff'
    radius: 8
    padding: '12px 20px'
    height: 44
    font: 'Söhne 15px / 600'
    shadow: 'rgba(168, 85, 255, 0.24) 0 8px 24px -8px'
    hover-shadow: 'rgba(168, 85, 255, 0.40) 0 12px 32px -8px'
    use: 'The signature gradient pill — Apply Now, Get Started, Open Account. The brand-defining element.'
  button-secondary:
    bg: '#ffffff'
    color: '#0e0f12'
    border: '1px solid rgba(14, 15, 18, 0.09)'
    radius: 8
    padding: '12px 20px'
    height: 44
    font: 'Söhne 15px / 600'
    hover-border: 'rgba(14, 15, 18, 0.16)'
    use: 'Outlined twin — Sign in, Watch demo, Talk to sales. White fill, hairline border.'
  button-ghost:
    bg: 'transparent'
    color: '#0e0f12'
    radius: 8
    padding: '8px 12px'
    font: 'Söhne 15px / 500'
    hover-bg: 'rgba(14, 15, 18, 0.04)'
    use: 'Quiet third action — nav links, footer, in-card actions.'
  button-dark:
    bg: '#0e0f12'
    color: '#ffffff'
    radius: 8
    padding: '12px 20px'
    height: 44
    font: 'Söhne 15px / 600'
    hover-bg: '#1c1d22'
    use: 'Inverted dark CTA — used on gradient-heavy pages where the primary gradient is already in play elsewhere.'
  card:
    bg: '#ffffff'
    border: '1px solid rgba(14, 15, 18, 0.06)'
    radius: 16
    padding: '32px'
    shadow: 'rgba(14, 15, 18, 0.04) 0 4px 20px'
    use: 'Default feature card — white fill on cool grey panel, hairline border, soft elevated shadow. The signature card geometry.'
  card-cool:
    bg: '#f5f5f7'
    border: 'none'
    radius: 16
    padding: '32px'
    use: 'Cool-grey inset card — testimonials, code-tour blocks, quoted callouts.'
  card-gradient:
    bg: 'linear-gradient(135deg, #ff5cad 0%, #a855ff 60%, #5b6dff 100%)'
    color: '#ffffff'
    radius: 16
    padding: '32px'
    use: 'Gradient hero card — featured pricing tier, marquee feature tile, conversion CTA card.'
  card-dark:
    bg: '#0e0f12'
    color: '#ffffff'
    border: '1px solid rgba(255, 255, 255, 0.06)'
    radius: 16
    padding: '32px'
    use: 'Inverted dark card — used on testimonial bands or featured customer quotes.'
  text-input:
    bg: '#ffffff'
    color: '#0e0f12'
    radius: 8
    height: 44
    padding: '12px 14px'
    border: '1px solid rgba(14, 15, 18, 0.16)'
    font: 'Söhne 16px / 400'
    placeholder-color: '#8a8d96'
    focus-border: '#a855ff'
    focus-ring: '0 0 0 3px rgba(168, 85, 255, 0.24)'
    use: 'Form fields, search bar — purple-glow focus state.'
  badge-status:
    bg: 'rgba(168, 85, 255, 0.10)'
    color: '#7e3df0'
    radius: 4
    padding: '2px 8px'
    font: 'Söhne Mono 11px / 600 / uppercase / 0.06em'
    use: 'Status pill — NEW, FEATURED, BETA. Mono caps in soft purple wash.'
  badge-tag:
    bg: '#f5f5f7'
    color: '#5a5d66'
    radius: 4
    padding: '2px 8px'
    font: 'Söhne Mono 11px / 500'
    use: 'Tag chip — feature labels, integration tags.'
  pill-eyebrow:
    bg: 'transparent'
    color: '#5a5d66'
    padding: '0'
    font: 'Söhne Mono 12px / 600 / uppercase / 0.06em'
    use: 'Section eyebrow — mono caps without chrome, sits above headlines.'
  nav-top:
    bg: 'rgba(255, 255, 255, 0.80)'
    backdrop-filter: 'blur(12px) saturate(180%)'
    height: 72
    border-bottom: '1px solid rgba(14, 15, 18, 0.06)'
    use: 'Sticky top nav — translucent white fill with blur, hairline divider on scroll.'
  hero-wash:
    bg: 'radial-gradient(ellipse at 50% 0%, rgba(168, 85, 255, 0.16) 0%, rgba(255, 255, 255, 0) 60%)'
    use: 'Hero background wash — soft purple radial fade behind product imagery, grounds the hero in brand chroma.'
  pricing-card-featured:
    bg: 'linear-gradient(135deg, #ff5cad 0%, #a855ff 60%, #5b6dff 100%)'
    color: '#ffffff'
    radius: 16
    padding: '40px'
    use: 'Featured pricing tier — full gradient fill, white text, with a "Most Popular" mono-caps eyebrow at the top.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out-soft: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 300
  duration-page: 400
  duration-gradient: 8000
  link-hover: 'colour 100ms standard'
  button-hover: 'shadow intensifies + slight 1px translate-up over 200ms'
  card-hover: 'shadow lifts from 4px to 12px over 200ms — subtle vertical translate of 2px'
  gradient-shift: 'hero gradient subtly shifts hue rotation 8s linear infinite (suppressed under reduced-motion)'
  scroll-reveal: 'sections fade in over 300ms ease-out-soft when entering viewport'
  reduced-motion: 'respects prefers-reduced-motion: reduce — gradient shifts freeze, transforms suppress, opacity-only fades.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440
  ultra: 1600

shadows:
  none: 'none'
  ambient: 'rgba(14, 15, 18, 0.04) 0 1px 2px'
  card: 'rgba(14, 15, 18, 0.04) 0 4px 20px'
  card-hover: 'rgba(14, 15, 18, 0.08) 0 8px 28px -4px'
  elevated: 'rgba(14, 15, 18, 0.08) 0 12px 32px -8px'
  popover: 'rgba(14, 15, 18, 0.10) 0 16px 40px -16px'
  modal: 'rgba(14, 15, 18, 0.20) 0 24px 64px -16px'
  brand-glow: 'rgba(168, 85, 255, 0.24) 0 8px 24px -8px'
  brand-glow-hover: 'rgba(168, 85, 255, 0.40) 0 12px 32px -8px'
  ring: '0 0 0 3px rgba(168, 85, 255, 0.24)'

accessibility:
  contrast-text-on-bg: 16.8                   # #0e0f12 on #ffffff — AAA at all sizes
  contrast-text-on-bg-soft: 14.2              # #0e0f12 on #f5f5f7 — AAA at all sizes
  contrast-text-muted-on-bg: 7.8              # #5a5d66 on #ffffff — AAA at body sizes
  contrast-text-on-gradient-mid: 4.6          # #ffffff on #a855ff (gradient mid-stop) — AA at body sizes
  contrast-text-on-gradient-edge: 5.2         # #ffffff on #5b6dff (gradient indigo edge) — AA at body sizes
  contrast-text-on-cta: 4.6                   # #ffffff on gradient (worst case at #a855ff midpoint) — AA at body
  focus-ring: '3px solid rgba(168, 85, 255, 0.24) + 2px outline-offset; brand-purple ring'
  reduced-motion-honored: true
  touch-target-min: 44
  prose-line-length: 'capped at 720px / ~70 characters'
  gradient-fallback: 'solid #a855ff brand colour as fallback if gradient fails to render'

dark-mode: optional                           # Brex ships a dark variant on certain product pages — duplicate token map below

colors-dark:
  bg: '#0e0f12'                  # near-black canvas
  bg-soft: '#1a1d24'             # cool dark panel
  bg-tile: '#22252e'             # dark tile
  bg-ink: '#000000'              # peak dark
  text: '#ffffff'                # white body
  text-strong: '#ffffff'
  text-body: '#e5e7eb'
  text-muted: '#a3a6af'
  text-soft: '#737680'
  brand: '#a855ff'               # gradient unchanged — passes contrast on both grounds
  brand-pink: '#ff5cad'
  accent: '#5b6dff'
  border: 'rgba(255, 255, 255, 0.10)'
  border-soft: 'rgba(255, 255, 255, 0.06)'
  border-strong: 'rgba(255, 255, 255, 0.20)'
  on-brand: '#ffffff'

lineage:
  summary: 'Brex is the fintech that picked saturation. Where Ramp commits to black-on-white editorialism and Mercury commits to a serif headline + a single mint band, Brex commits to chroma — a magenta→purple→indigo gradient that appears on the primary CTA, on hero illustration washes, on framework-icon backdrops, and as sectional accents. The neutral surfaces are cool grey-blue (`#f5f5f7`, `#f0f0f3`), distancing Brex from Wise''s warm cream and Mercury''s pure white. Söhne carries the type at 600 weight with `-0.03em` tracking — the same neo-grotesque Ramp uses, but heavier and more declarative. The 16px card radius, 8px button radius, and soft `0 4px 20px` shadow are 2026 SaaS-consensus values; what distinguishes Brex from any Linear-style dark surface is its refusal to go fully dark — the canvas stays white, and the gradient does the work of "modern fintech for fast companies." The aesthetic descends from Stripe''s gradient brand era circa 2019-2021, but Brex pushes it harder into pink-magenta where Stripe pulled back to a single confident blue.'
  influences:
    - name: 'Stripe (2019-2021 gradient era)'
      role: 'Multi-stop chromatic gradient as fintech-modernity signal — the conic / linear gradient corner motif that Brex inherits and extends into pink-magenta'
      url: 'https://stripe.com'
    - name: 'Linear / Vercel'
      role: 'Cool-grey neutral palette and 16px card radius are inherited from this lineage; Brex stays light-canvas where Linear goes dark'
      url: 'https://linear.app'
    - name: 'Klim / Lineto (Söhne)'
      role: 'Heavier Söhne weights (600/700) carry the more declarative, ad-grade voice. The neo-grotesque is the type-discipline anchor.'
      url: 'https://lineto.com'
    - name: 'Ramp'
      role: 'Direct competitor in the corporate-card category. Brex deliberately picks the louder/more chromatic position to differentiate.'
      url: 'https://ramp.com'
    - name: 'Mercury'
      role: 'Adjacent fintech competitor. Where Mercury runs serif headline + mint-green band, Brex runs sans + magenta-indigo gradient.'
      url: 'https://mercury.com'
    - name: 'Apple App Store'
      role: 'Cool-grey neutral surfaces (`#f5f5f7`) descended from Apple''s system-grey conventions. Brex uses similar neutrals to signal modern-Apple-adjacent polish.'
      url: 'https://www.apple.com/app-store/'
---

## 1. Visual Theme & Atmosphere

Brex is the corporate-card brand that decided fintech could be a little flashy. The page surfaces are cool greys (`#f5f5f7`, `#f0f0f3`) — Apple-system-grey adjacent, distinctly *not* warm cream. The type is **Söhne** at weight 600, the H1 lands at 72–96px with hard `-0.03em` tracking, and the primary CTA is a magenta-pink → purple → indigo gradient rendered as a 135° linear gradient. That gradient shows up again in hero illustration washes, as ambient radial-glow washes behind product imagery, and on featured pricing cards where the entire tier surface fills with the gradient. It is the brand-defining element — desaturate it and you lose the entire identity.

What makes Brex distinctive is the *category positioning*. The corporate-card category (Ramp, Mercury, Wise, Bill.com, Airbase) trends toward editorial restraint: monochrome black-on-white, single accent colour, generous whitespace, modest type scales. Brex picks the loudest position in the category. The H1 goes to 72px instead of 56px. The CTA goes from a single brand colour to a three-stop gradient. The hero gets a radial-glow wash. The pricing tier card replaces its border with a full gradient fill. Compared to Ramp's monochrome editorialism, Brex reads as fast, ad-saturated, slightly louder. Compared to Mercury's editorial serif, Brex is fully sans-grotesque. The cool-grey neutrals distance it from warm fintechs (Wise, Mercury) and place it in the modern-SaaS lineage that Linear and Vercel established — but rotated into a chromatic register those peers refuse.

The third register is the **discipline of weight 600 at large sizes**. Söhne is a neo-grotesque designed by Klim Type Foundry / Lineto (depending on which family member); it has tight terminals, modest x-height, and a slightly geometric construction. At weight 600, the strokes thicken just enough to read as confident-and-corporate without crossing into shouty-and-promotional. Brex pushes Söhne to 600 across all display copy and pairs it with `-0.03em` letter-spacing — the hard tracking is half the brand voice. The combination creates a register that's neither Ramp's editorial calm nor Stripe's developer-tool restraint; it's somewhere closer to *fintech-as-magazine-ad* — the kind of polish a CFO who wants their corporate card brand to look "fast and modern" recognises immediately.

The atmospheric vocabulary that captures Brex's feeling: *gradient-confident, magenta-to-indigo, cool-grey-neutral, Söhne-600-tight, ad-saturated, fintech-as-magazine, corporate-card-flashy, Stripe-gradient-descendant, Ramp-rejection, modern-fintech, soft-shadow-floating, hairline-restrained, Apple-grey-adjacent.* Every surface lands like it was designed by an in-house brand team that has been told their differentiation is "louder than Ramp, more polished than Mercury, more chromatic than any fintech competitor."

**Key Characteristics**
- Pure white `#ffffff` canvas with cool grey-blue `#f5f5f7` panel surfaces (the brand neutral)
- Cool-grey tile surface `#f0f0f3` — slightly cooler than the panel base
- Near-black `#0e0f12` for body text — slight warmth in the deep, not pure black
- The signature 135° gradient: `#ff5cad` (pink) → `#a855ff` (magenta-purple) → `#5b6dff` (electric indigo)
- Three-stop gradient appears on: primary CTA, hero radial-wash, framework-icon backdrops, featured pricing tier
- **Söhne** type at weight 600 with `-0.03em` tracking — neo-grotesque, neither humanist nor geometric
- H1 at 72px / 600 with hard tracking; display-hero pushes to 96px
- 16px card radius (the modern fintech default), 8px button radius
- Signature soft shadow: `rgba(14, 15, 18, 0.04) 0 4px 20px` — diffuse, low-opacity, intentionally subtle
- 1280px max page width with 24px container gutters
- 112px section padding for major bands; the brand breathes
- Mono caps eyebrows in Söhne Mono at `0.06em` tracking
- Brand-purple focus glow `rgba(168, 85, 255, 0.24) 0 0 0 3px`
- Optional dark mode on certain product pages — gradient unchanged across both grounds

## 2. Color Palette & Roles

### Primary

- **Canvas** (`#ffffff`): pure white page background. The dominant tone — Brex doesn't tint the canvas warm.
- **Brand Neutral** (`#f5f5f7`): cool grey-blue panel base. The signature neutral — Apple-system-grey-adjacent. Used for section bands, panel backgrounds, inset blocks.
- **Tile Surface** (`#f0f0f3`): slightly cooler grey for tiles and inset cards. The third tier in the cool-grey neutral system.
- **Text** (`#0e0f12`): near-black with a slight warmth — body and headlines. Not pure black; the deep has a subtle blue-warmth that prevents a flat dead-grey feeling.
- **Text Strong** (`#000000`): peak black for hero display copy where maximum contrast against the cool-grey panel is needed.

### Brand & Sub-Brand

- **Brand Purple** (`#a855ff`): the magenta-purple identity colour — the gradient mid-stop. When a single brand colour is needed (logos, focus rings, brand chips), it's `#a855ff`.
- **Brand Pink** (`#ff5cad`): the gradient's first stop — pink at the top-left of the 135° gradient.
- **Brand Indigo Accent** (`#5b6dff`): the gradient's third stop — electric indigo at the bottom-right. Doubles as the link colour for body text (where blue-leaning indigo reads more legibly than purple on white).
- **Brand Strong** (`#7e3df0`): deeper purple, used as a secondary gradient stop in some illustrations.
- **Brand Hover** (`#9744ee`): hover/pressed state for solid-purple buttons and chips.
- **Brand Deep** (`#6b2ed3`): pressed-state purple, deepest tier.
- **Brand Soft** (`#f3e8ff`): light purple wash for backgrounds, success-tier indicators.
- **Brand Tint** (`rgba(168, 85, 255, 0.08)`): very soft purple tint for subtle brand emphasis.
- **Brand Glow** (`rgba(168, 85, 255, 0.32)`): focus glow colour.

### Accent

The accent system is the **gradient itself**: `linear-gradient(135deg, #ff5cad 0%, #a855ff 50%, #5b6dff 100%)`. This is the brand-defining element — every saturated surface uses some variant of this gradient. Variants:

- **Primary Gradient** (`135deg, #ff5cad → #a855ff → #5b6dff`): default for CTAs, featured pricing tier, brand cards
- **Wash Gradient** (`linear-gradient(135deg, ...10% opacity)`): hero ambient backgrounds, framework-icon backdrops
- **Vertical Gradient** (`180deg, ...full opacity`): rare, used for sectional band transitions
- **Radial Gradient** (`radial-gradient(circle at 30% 30%, ...)`): used for orb-like illustration elements behind product imagery

The gradient is **never recolored**. The three stops are fixed, the angle is canonical (135°), and the proportional position (0% / 50% / 100%) doesn't vary. Variants are limited to opacity, gradient type (linear/radial/conic), and direction.

### Interactive

- **Link** (`#5b6dff`): inline body links — indigo-leaning third stop, more legible than purple on white. No underline at rest; hover deepens to `#3b4eff` and underline appears.
- **Link Hover** (`#3b4eff`): deeper indigo, hover state.
- **Selected** (`#a855ff` text on `rgba(168, 85, 255, 0.10)` background): selected nav, active filter chip, current pricing tier.
- **Disabled** (`#b0b3bb`): faint neutral for disabled controls.
- **Focus** (`#a855ff` border + `rgba(168, 85, 255, 0.24)` 3px ring): brand-purple focus state — visible against both white and cool-grey panels.

### Neutral Scale

- **Pure White** (`#ffffff`) — canvas
- **Brand Neutral** (`#f5f5f7`) — cool-grey panel base
- **Tile Surface** (`#f0f0f3`) — cooler tile
- **Bg Soft 2** (`#f7f7f9`) — softer panel between bg-soft and white
- **Border** (`rgba(14, 15, 18, 0.09)`) — 9% near-black hairline rule
- **Border Soft** (`rgba(14, 15, 18, 0.06)`) — 6% quieter
- **Text Faint** (`#b0b3bb`) — placeholder, disabled
- **Text Soft** (`#8a8d96`) — eyebrows, helper text
- **Text Muted** (`#5a5d66`) — supporting copy, captions
- **Text Body** (`#1c1d22`) — body paragraph, slightly softer
- **Text** (`#0e0f12`) — primary headlines and body
- **Text Strong** (`#000000`) — peak display

The cool-grey ramp is what distinguishes Brex from warm-fintech competitors. Wise's neutrals lean cream (`#f7f5f0`); Mercury's lean pure-white. Brex commits to cool-blue greys throughout.

### Surface & Borders

- **Canvas** (`#ffffff`) — page background
- **Surface Soft** (`#f7f7f9`) — secondary card surface
- **Surface Cool** (`#f0f0f3`) — tile / inset surface
- **Brand Neutral** (`#f5f5f7`) — panel band
- **Surface Dark** (`#0e0f12`) — inversion band
- **Border Default** (`rgba(14, 15, 18, 0.09)`) — 9% near-black hairline
- **Border Soft** (`rgba(14, 15, 18, 0.06)`) — quieter separation
- **Border Strong** (`rgba(14, 15, 18, 0.16)`) — focused inputs, outlined buttons
- **Border Brand** (`rgba(168, 85, 255, 0.40)`) — purple-tinted hairline for brand emphasis

### Shadow Colors

Brex uses **near-black-tinted** shadows (`rgba(14, 15, 18, …)`) — the slight warmth of the deep ink colour ports into the shadow tones, keeping the page coherent. The signature shadow is `rgba(14, 15, 18, 0.04) 0 4px 20px` — soft, diffuse, low-opacity, intentionally subtle. It gives product cards and feature tiles a slight float without stepping into glassmorphism. On gradient-heavy surfaces, the shadow gets a **brand-glow** treatment: `rgba(168, 85, 255, 0.24) 0 8px 24px -8px` — purple-tinted, used under primary CTAs to extend the brand chroma into the surrounding negative space.

- `rgba(14, 15, 18, 0.04) 0 1px 2px` — ambient
- `rgba(14, 15, 18, 0.04) 0 4px 20px` — card (the signature soft elevated)
- `rgba(14, 15, 18, 0.08) 0 8px 28px -4px` — card-hover (intensifies on hover)
- `rgba(14, 15, 18, 0.08) 0 12px 32px -8px` — elevated dropdown
- `rgba(14, 15, 18, 0.10) 0 16px 40px -16px` — popover
- `rgba(14, 15, 18, 0.20) 0 24px 64px -16px` — modal
- `rgba(168, 85, 255, 0.24) 0 8px 24px -8px` — brand glow (under gradient CTAs)

### Semantic

- **Success** (`#10b981` on `rgba(16, 185, 129, 0.10)`): emerald-green confirmation — used for "Application approved", "Card activated".
- **Warning** (`#f59e0b` on `rgba(245, 158, 11, 0.10)`): advisory amber — used for rate limits, expiring offers.
- **Danger** (`#ef4444` on `rgba(239, 68, 68, 0.10)`): error red — used for declined transactions, form validation.
- **Info** (`#5b6dff` on `rgba(91, 109, 255, 0.10)`): info reads as the indigo accent — adjacent to brand but visually distinct from the magenta-purple.

## 3. Typography Rules

### Font Family

**Primary**: `"Söhne", "Söhne Breit", "Inter Display", Inter, "Helvetica Neue", Arial, sans-serif`. **Söhne** is a neo-grotesque type family from Klim Type Foundry / Lineto (the legal heritage is split between the two foundries). Used at weight 600 for display copy with `-0.03em` letter-spacing — the hard tracking is half the brand voice. The fallback chain runs Inter Display → Inter → Helvetica → Arial; on no-license environments (foreign agencies, certain partner integrations), Inter is the closest open-source substitute.

**Mono companion**: `"Söhne Mono", "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace`. Söhne Mono carries section eyebrows, status pills, pricing tabular numerals, and the rare inline code reference. Pricing values use Söhne Mono with `tnum` enabled so digits align column-wise across pricing tier cards.

**OpenType features**: Söhne renders with `kern` and `liga` always on. `ss01` and `ss02` enable for stylistic alternates (`ss01` cleans up the `R` and `K` joins; `ss02` substitutes the alternate `g`). Mono adds `liga`, `tnum`, and `zero`.

The discipline: weight 600 across all display copy, weight 400 for body, weight 500 for nav and labels. There is no medium-weight middle ground at display sizes — display lives at 600. Body lives at 400. Nav links and form labels live at 500 / 600 split. The system has clear tiers without ambiguity.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | Söhne | 96px | 600 | 0.95 | -0.035em | ss01 | The largest hero variant — landing page only |
| display-xl | Söhne | 80px | 600 | 0.98 | -0.03em | — | Major section opener |
| display-lg | Söhne | 72px | 600 | 1.0 | -0.03em | — | The canonical Brex H1 — most pages |
| h1 | Söhne | 56px | 600 | 1.05 | -0.025em | — | Sub-page title |
| h2 | Söhne | 40px | 600 | 1.10 | -0.02em | — | Marketing section H2 |
| h3 | Söhne | 28px | 600 | 1.20 | -0.01em | — | Card heading, sub-section |
| h4 | Söhne | 22px | 500 | 1.30 | -0.005em | — | Sub-card heading — note weight drops to 500 |
| h5 | Söhne | 18px | 500 | 1.40 | 0 | — | Inline emphasis |
| eyebrow | Söhne Mono | 12px | 600 | 1.40 | 0.06em | uppercase | Section pre-label |
| section-label | Söhne Mono | 13px | 600 | 1.40 | 0.06em | uppercase | Marketing section eyebrow |
| body-lg | Söhne | 20px | 400 | 1.50 | 0 | — | Hero deck, lede paragraph |
| body-md | Söhne | 16px | 400 | 1.50 | 0 | — | Default body |
| body-sm | Söhne | 14px | 400 | 1.45 | 0 | — | Card body, dense rows |
| caption | Söhne | 13px | 400 | 1.40 | 0 | — | Image caption, footer micro |
| caption-mono | Söhne Mono | 12px | 500 | 1.40 | 0 | tnum | Pricing values, dashboard meta |
| label | Söhne | 12px | 600 | 1.30 | 0 | — | Form field label |
| label-mono | Söhne Mono | 11px | 600 | 1.30 | 0.06em | uppercase | Mono caps label |
| button-md | Söhne | 15px | 600 | 1.20 | 0 | — | Default CTA copy |
| button-sm | Söhne | 13px | 600 | 1.20 | 0 | — | Compact button |
| pricing-display | Söhne | 64px | 600 | 1.0 | -0.025em | tnum | Pricing tier values |
| quote-pull | Söhne | 32px | 500 | 1.25 | -0.015em | — | Pull quote |
| code-inline | Söhne Mono | 14px | 500 | 1.40 | 0 | — | Inline `code` reference |

### Principles

- **Weight 600 + `-0.03em` tracking is the brand voice.** Söhne at 600 with hard negative tracking is the canonical Brex display. Drop to 500 and the page reads as Ramp; push to 700 and it reads as Klarna. The 600/`-0.03em` pair is the precise sweet spot.
- **Single-family system with mono companion.** Söhne Sans + Söhne Mono cover everything. Adding a serif (Mercury territory) or a third sans (most-of-SaaS territory) breaks the brand's neo-grotesque commitment.
- **Body holds at weight 400.** Body never goes 500 except for nav links and labels. The 400-vs-600 split is the brand's hierarchy logic.
- **Negative tracking compresses with size.** `-0.035em` at 96px, `-0.03em` at 72–80px, `-0.025em` at 56px, `-0.02em` at 40px, `-0.01em` at 28px, near-zero below.
- **16px body, 1.50 line-height.** Slightly tighter than Vercel's 1.55 — the ad-grade voice prefers a denser baseline.
- **Mono caps for eyebrows, status pills, and pricing values.** Söhne Mono at 11–13px / 0.06em tracking is the brand's secondary-identity tell.
- **`tnum` enabled in pricing displays.** Tabular numerals make pricing comparison tables align column-wise — a polish detail that signals corporate-grade attention.
- **No italic in display.** Söhne is set roman across all hierarchy. Body italics carry quoted titles only.

## 4. Component Stylings

### Buttons

**Primary Gradient CTA** — The signature button. Background: `linear-gradient(135deg, #ff5cad 0%, #a855ff 50%, #5b6dff 100%)`. Text: pure white at 15px / 600 in Söhne, **8px radius**, 12×20px padding, 44px height. Brand-glow shadow: `rgba(168, 85, 255, 0.24) 0 8px 24px -8px` — the shadow extends the gradient chroma into the negative space below the button. On hover, shadow intensifies to `rgba(168, 85, 255, 0.40) 0 12px 32px -8px` over 200ms standard, and the button translates 1px upward. Use case: *Apply Now*, *Get Started*, *Open Account* — the brand-defining element.

**Secondary (Outlined)** — `#ffffff` fill, near-black text at 15px / 600, 1px border at `rgba(14, 15, 18, 0.09)`, 8px radius, 44px height. Hover deepens border to `rgba(14, 15, 18, 0.16)`. Use case: *Sign in*, *Watch demo*, *Talk to sales* — paired adjacently with primary.

**Ghost (Quiet)** — Transparent background, near-black text at 15px / 500 (note: weight steps down to 500 — ghost is quieter), 8px radius, 8×12px padding. Hover fills `rgba(14, 15, 18, 0.04)`. Use case: nav links, footer secondaries.

**Dark CTA** — `#0e0f12` near-black fill, white text at 15px / 600, 8px radius, 44px height. Hover deepens to `#1c1d22`. Use case: alternate primary on gradient-heavy pages where the gradient is already in play elsewhere (e.g., a feature page where the hero card is full-gradient and the closing CTA needs visual differentiation).

### Cards

**Default Card** — `#ffffff` fill, 1px hairline border at `rgba(14, 15, 18, 0.06)`, **16px radius**, 32px padding, signature soft shadow `rgba(14, 15, 18, 0.04) 0 4px 20px`. The dominant card across feature grids, customer logos, partner directories. Hover: shadow lifts to `0 8px 28px -4px` and translates 2px upward.

**Cool Inset Card** — `#f5f5f7` cool-grey fill, no border, 16px radius, 32px padding. Used for testimonials, code-tour blocks, quoted callouts. The cool-grey fill provides separation from the white canvas without needing a border.

**Gradient Card** — `linear-gradient(135deg, #ff5cad → #a855ff → #5b6dff)` fill, white text, 16px radius, 32px padding. Used sparingly: featured pricing tier, marquee feature tile, conversion CTA card. The gradient card is a *moment*, not a pattern.

**Dark Card** — `#0e0f12` fill, white text, 1px border at `rgba(255, 255, 255, 0.06)`, 16px radius, 32px padding. Used on dark inversion bands for testimonials or featured customer quotes.

### Pricing Cards

**Default Tier** — Default card geometry (white fill, hairline border, soft shadow, 16px radius, 32px padding). Tier name in Söhne 22px / 500. Pricing display in Söhne 64px / 600 with `tnum`. Feature list with brand-purple checkmarks. Outlined secondary CTA at the bottom.

**Featured Tier** — Replaces default with the gradient card geometry: `linear-gradient(135deg, #ff5cad → #a855ff → #5b6dff)` fill, white text, "MOST POPULAR" mono-caps eyebrow at the top in `rgba(255, 255, 255, 0.80)` semi-translucent, white-on-white-with-glow CTA at the bottom (white pill that sits on the gradient surface).

### Badges, Tags, Pills

**Status Pill (Brand)** — `rgba(168, 85, 255, 0.10)` brand-soft fill, brand-strong text at 11px / 600 in Söhne Mono uppercase with `0.06em` tracking, 4px radius, 2×8px padding. Use case: `NEW`, `FEATURED`, `BETA`, `PRO`.

**Tag Chip** — `#f5f5f7` cool-grey fill, muted text at 11px / 500 in Söhne Mono, 4px radius, 2×8px padding. Use case: feature labels, integration tags.

**Eyebrow** — No chrome, just type. Söhne Mono 12px / 600 / uppercase / `0.06em` in `#5a5d66`. Sits above section headlines.

### Inputs / Forms

**Text Input** — `#ffffff` fill, near-black text at 16px / 400 in Söhne, 1px border at `rgba(14, 15, 18, 0.16)`, **8px radius**, 44px height, 12×14px padding. Placeholder colour at `#8a8d96`. On focus: border shifts to `#a855ff` brand-purple and a 3px translucent purple ring appears (`rgba(168, 85, 255, 0.24) 0 0 0 3px`).

**Select** — Same shape as text-input with a chevron icon at right (12px) at muted-text colour.

### Navigation

**Top Nav** — `rgba(255, 255, 255, 0.80)` translucent white fill with `backdrop-filter: blur(12px) saturate(180%)`, **72px height**, 1px bottom hairline at `rgba(14, 15, 18, 0.06)` that appears after scroll > 8px. Brex wordmark left in Söhne 20px / 600. Center: nav links (Products, Solutions, Customers, Resources, Pricing) at 15px / 500 ghost-button style. Right: ghost `Sign in` + primary gradient `Apply Now` button.

**Footer** — `#0e0f12` near-black inversion band (rare; one of the few full-dark sections on the site), 96px top padding, multi-column link grid in Söhne 14px / 400 in `#a3a6af` soft-on-dark. Wordmark + social icons + legal links at the bottom.

### Optional / Decorative

**Hero Wash** — A radial-gradient ambient background behind hero imagery: `radial-gradient(ellipse at 50% 0%, rgba(168, 85, 255, 0.16) 0%, rgba(255, 255, 255, 0) 60%)`. The wash provides chromatic grounding for the hero without making the canvas itself purple — the gradient fades to transparent before reaching the section edges.

**Pull Quote** — Söhne 32px / 500 / -0.015em, near-black text, with a 4px gradient-purple vertical rule on the left edge.

**Modal** — `#ffffff` fill, 16px radius, 32px padding, modal shadow stack. Backdrop scrim at `rgba(14, 15, 18, 0.60)`. Max-width 520px for confirmations, 720px for application dialogs.

**Toast** — `#ffffff` fill, hairline border, 12px radius, 12×16px padding. Icon + message in Söhne 14px / 400 + dismiss button. Brand-purple accent for info, success-green for confirmations, danger-red for errors.

## 5. Layout Principles

### Spacing System

- Base unit: **4px** (with 8px rhythm enforced for major spacing)
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 112 · 128`
- Section padding (vertical): **112px** for major marketing bands (the brand breathes); 64–80px between minor sections; 24–32px between content blocks
- Card internal padding: **32px** on default cards; 40px on featured pricing cards; 24px on compact tiles
- Inter-card gutters: 24px between cards in 3-up; 16px in dense 4-up

### Grid & Container

- Max content width: **1280px** with 24px gutters
- 12-column grid; hero blocks span full width; feature grids span 4-3-2-1 columns by breakpoint
- Reading column caps at **720px** for prose-heavy content (case studies, blog posts)
- Hero treatment: full-bleed white canvas with radial-gradient wash, headline left-aligned at 72–96px, dual CTA pair below (gradient primary + outlined secondary)

### Whitespace Philosophy

The page breathes — 112px section padding is generous by SaaS standards (typical is 80–96px). The whitespace is part of the brand's "modern fintech" pitch — corporate-card buyers want their card brand to feel premium-and-considered, not crowded-and-busy. The breathing room compounds with the gradient: when the gradient appears, it has room to be a *moment* against the negative space surrounding it.

### Section Cadence

A typical Brex page runs:

1. **Hero** — `#ffffff` canvas with subtle radial-gradient wash, 72–96px / 600 H1, 20px / 400 deck, dual CTA pair (gradient primary + outlined secondary), product imagery on the right side
2. **Feature Grid** — `#ffffff` cards in 3-up at desktop, hairline borders, soft 4%-opacity shadow, 28px / 600 card titles + 16px / 400 body
3. **Cool-Grey Band** — `#f5f5f7` panel section with feature highlights, often containing inset white cards
4. **Gradient Feature Tile** — A single full-gradient card showcasing a marquee feature ("Brex AI", "Spend Pro"), white text on gradient
5. **Customer Logo Grid** — `#ffffff` band with monochrome customer logos (12 logos, 4-up at desktop)
6. **Pricing Cards** — 3-up with featured tier replaced with full gradient fill
7. **Testimonial Band** — `#f5f5f7` cool-grey panel with pull quotes and customer photos
8. **Closing CTA** — Centered hero pill (gradient primary) on white canvas, single dominant action
9. **Footer** — `#0e0f12` near-black inversion, multi-column link grid in 14px / 400 soft-on-dark

The "alternation" is *cool-grey + white + gradient moments + dark footer*. The brand commits to the cool-grey panel system; warm cream tones never appear.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Decorative dividers, focus indicators inside chips |
| XS | 4px | Status badges, tag chips |
| Small | 6px | Compact chips |
| Medium | 8px | Buttons, inputs — the dominant button radius |
| Large | 12px | Secondary cards |
| XL | 16px | Primary cards — the modern fintech default |
| Hero | 20px | Large surfaces, hero panels |
| Pill | 9999px | Capsule chips, status capsules — reserved emphasis |

Brex's signature pairing is **8px buttons + 16px cards** — the modern Linear/Vercel-influenced contemporary SaaS shape language. Cards at 16px feel softer than Vercel's 12px (where Vercel signals brutalist-dev-tool, Brex signals modern-corporate-card). Buttons at 8px are sharper than the SaaS-pill convention. There are no zero-radius elements except section dividers. The 9999px pill is reserved for status capsules and the rare brand chip — never the primary action button.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow, hairline only | Page canvas, body sections, dense data |
| 1 — Hairline | 1px `rgba(14, 15, 18, 0.06)` border | Pricing cards, dense data tiles |
| 2 — Soft Card | hairline + `rgba(14, 15, 18, 0.04) 0 4px 20px` | Default feature cards (the signature) |
| 3 — Card Hover | hairline + `rgba(14, 15, 18, 0.08) 0 8px 28px -4px` + 2px translate-up | Hover state on cards |
| 4 — Brand Glow | `rgba(168, 85, 255, 0.24) 0 8px 24px -8px` | Under primary gradient CTAs |
| 5 — Elevated | `rgba(14, 15, 18, 0.08) 0 12px 32px -8px` | Dropdowns, popover menus |
| 6 — Modal | scrim `rgba(14, 15, 18, 0.60)` + `rgba(14, 15, 18, 0.20) 0 24px 64px -16px` | Application dialogs, confirmation modals |

### Shadow Philosophy

Brex uses **two distinct shadow languages**: the *soft neutral* shadow (`rgba(14, 15, 18, 0.04) 0 4px 20px`) for content cards, and the *brand glow* (`rgba(168, 85, 255, 0.24) 0 8px 24px -8px`) for primary CTAs. The neutral shadow is intentionally diffuse — low opacity, wide spread, no tight 1–2px ambient layer. It gives cards a sense of *floating slightly* without the heavy lift of consumer-app shadows.

The brand glow is the ambitious move. By tinting the shadow under the primary CTA with the brand purple, Brex extends the gradient chroma into the negative space below the button. The effect is subtle but compounding: the CTA doesn't just sit on the page; it *radiates* purple into its surroundings. On a brand whose entire identity is "the gradient is the hero", extending the gradient via shadow tone is the perfect detail. Most other gradient-using brands (Stripe historically, Linear's brand-blue era) used neutral shadows — Brex's purple-tinted glow is one of its most distinctive micro-moves.

## 8. Interaction & Motion

### Easing Curves

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style; default for hover, focus, color transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; modal entry, hero reveal
- **Out-Soft**: `cubic-bezier(0.0, 0, 0.2, 1)` — gentle settle; dropdown reveal, gradient hue shift

### Duration Buckets

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 100ms | Link colour swaps, focus ring fade-in |
| Standard | 200ms | Button hover (shadow + 1px translate), card hover |
| Slow | 300ms | Modal entry, dropdown reveal |
| Page | 400ms | Route transitions |
| Gradient | 8000ms | Hero gradient subtle hue rotation (linear, infinite) |

### Per-Component Recipes

- **Link hover**: colour `#5b6dff` → `#3b4eff` over 100ms, underline appears in 100ms.
- **Primary gradient CTA hover**: shadow intensifies from `rgba(168, 85, 255, 0.24) 0 8px 24px -8px` to `rgba(168, 85, 255, 0.40) 0 12px 32px -8px` and button translates 1px upward over 200ms standard. The gradient itself doesn't change — the *light around it* changes.
- **Secondary button hover**: border deepens `rgba(14, 15, 18, 0.09)` → `rgba(14, 15, 18, 0.16)` over 200ms.
- **Card hover**: shadow lifts from `0 4px 20px` to `0 8px 28px -4px` and card translates 2px upward over 200ms standard.
- **Hero gradient**: subtle 8s linear infinite hue rotation — the gradient stops shift `±5°` in HSL hue, creating a barely-perceptible animation. Under reduced-motion, freezes static.
- **Scroll-reveal**: marketing-page sections fade in over 300ms ease-out-soft when entering viewport at 80% threshold.
- **Modal entry**: backdrop scrim fades in over 200ms; modal content fades + scales from 0.96 to 1.0 over 300ms ease-emphasized.

### Page Transitions

Page-to-page navigation uses a 400ms cross-fade with the sticky header staying static. Anchor smooth-scroll uses 600ms ease-emphasized.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. The hero gradient hue rotation freezes. All `translate` and `scale` transforms suppress entirely — replaced with instant render or opacity-only fades. Durations halve. Card hover loses the 2px lift; only the shadow change remains. Button hover loses the 1px translate. Modal scale-in becomes instant render.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| `#0e0f12` text on `#ffffff` canvas | 16.8 | AAA at all sizes |
| `#0e0f12` text on `#f5f5f7` panel | 14.2 | AAA at all sizes |
| `#0e0f12` text on `#f0f0f3` tile | 13.7 | AAA at all sizes |
| `#5a5d66` muted on `#ffffff` | 7.8 | AAA at body sizes |
| `#8a8d96` soft on `#ffffff` | 4.5 | AA at body sizes |
| `#ffffff` on `#a855ff` (gradient mid-stop) | 4.6 | AA at body sizes |
| `#ffffff` on `#5b6dff` (gradient indigo edge) | 5.2 | AA at body sizes |
| `#ffffff` on `#ff5cad` (gradient pink edge) | 3.0 | Fails AA at body — but gradient direction ensures text never sits over pink edge |
| `#ffffff` on `#0e0f12` dark CTA | 16.8 | AAA at all sizes |
| `#5b6dff` link on `#ffffff` | 5.4 | AA at body sizes |

The gradient CTA's worst-case contrast is at the pink edge (`#ff5cad`) at 3.0:1 — fails AA. Brex compensates by ensuring the **text is positioned over the mid-stop or indigo edge** of the gradient, never the pink. The 135° gradient direction means text in the button center sits over the `#a855ff` mid-stop at 4.6:1 (passes AA body), and the gradient transitions away from the pink toward the indigo — the reverse direction would fail. The button's geometry and gradient direction are accessibility-correct by design.

### Focus Indicators

Focus ring is `3px solid rgba(168, 85, 255, 0.24)` brand-purple translucent ring with 2px outline-offset. The ring colour ports the brand identity into every focus interaction — it's the same purple as the gradient mid-stop, so users see the brand chroma at every keyboard event.

### ARIA Patterns

- **Top nav**: `<nav aria-label="Primary">` landmark with skip-link.
- **Hero CTA**: gradient button uses `aria-label` to compensate for visual-only chroma; text remains the primary signal.
- **Pricing tier toggle**: `role="radiogroup"` with `<input type="radio">` for monthly/annual switching.
- **Application form**: multi-step form uses `aria-current="step"` on the active step indicator.
- **Modal**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Combobox / search**: `role="combobox" aria-expanded aria-autocomplete="list"`.
- **Toast notifications**: `aria-live="polite"` for non-critical; `aria-live="assertive"` for errors and approval failures.
- **Featured pricing tier**: announces "Most popular tier" via visually-hidden text inside the eyebrow chip.

### Keyboard Navigation

- Tab order: skip-link → wordmark → primary nav → search → auth CTAs → main content → footer
- Pricing tier card tab order respects visual flow (left-to-right at desktop, top-to-bottom at mobile)
- Modal focus trap: Tab cycles within modal; Esc dismisses
- Application form steps are keyboard-only navigable (no required mouse interactions)

### Screen Reader Hints

- Mono caps eyebrows use CSS `text-transform: uppercase` so screen readers announce natural-case
- Brex wordmark uses `aria-label="Brex"`
- Gradient hero wash has `aria-hidden="true"` (decorative)
- Pricing values announce with currency unit despite tabular-numeral mono visual
- Featured tier "MOST POPULAR" announces as a label, not interactive

### Reduced Motion

All transitions degrade to opacity-only or instant. Gradient hue rotation freezes. Card and button hover translates suppress; only shadow/colour changes remain. Modal scale-in becomes instant. Scroll-reveal becomes static on-mount.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Top nav collapses to logo + Apply Now + hamburger; hero H1 drops 96→48px; cards 1-up; pricing tiers stack vertically; gradient hero wash compresses |
| Tablet | 640–1024px | Top nav keeps inline links (without mega-menu); hero H1 at 64px; cards 2-up; pricing tiers 2-up |
| Desktop | 1024–1280px | Full nav with mega-menu; hero H1 at 72–96px; cards 3-up; pricing tiers 3-up |
| Wide | 1280–1440px | Content width caps at 1280; gutters absorb the rest |
| Ultra | >1440px | Page locks to 1280; gutters expand to 64px |

### Touch Targets

- Buttons: 44px minimum height across all sizes — Apple HIG compliant
- Top-nav links: 44×44px tap area even at 15px text
- Pricing tier toggle: 44×44px segmented-control thumb
- Tag chips: 28px visual but 12px vertical padding for 44px effective

### Collapsing Strategy

- **Top nav** at <1024px: primary nav links collapse into hamburger sheet; `Apply Now` gradient CTA stays visible
- **Hero CTA pair** at <640px: stacks vertically (gradient primary above, outlined secondary below)
- **Card grids**: 4 → 3 → 2 → 1 columns
- **Pricing cards** at <1024px: stack vertically; featured tier remains prominent (full gradient maintained)
- **Customer logo grid**: 4 → 3 → 2 columns; logos render monochrome at all sizes
- **Hero radial wash**: scales proportionally; on mobile, simplifies to a smaller centered glow

### Image Behavior

Customer logos use SVG with `currentColor`. Product imagery uses `aspect-ratio` to prevent layout shift. The gradient hero wash is rendered with CSS (no image asset) so it scales infinitely. Marketing illustrations use `srcset` with 1x/2x/3x.

### Container Queries

Used inside pricing tier cards: when card width crosses 320px, feature list switches from below-the-CTA to inline-with-CTA. At narrower widths, content stacks vertically.

## 11. Content & Voice

### Tone

**Confident, fast-moving, modestly aspirational.** Brex writes like a fintech product team that has decided their differentiation is "we ship faster than the bank you used to use." Headlines pose direct claims ("The smarter way to spend"); subheads explain capability with light marketing flair; product copy mixes financial vocabulary (corporate card, expense management, AP automation) with startup vocabulary (velocity, scale, runway). The voice is faster than Mercury's editorial calm, slightly more polished than Stripe's developer-grade restraint, more declarative than Ramp's understated minimalism.

### Microcopy Patterns

- **Button verbs**: *Apply Now*, *Get Started*, *Open Account*, *Watch Demo*, *Talk to Sales*, *Sign In*. Outcome-focused, conversion-oriented.
- **Error messages**: *"We couldn't process your application. Please verify your business information and try again."* — specific, accountable, professional.
- **Success confirmations**: *"Application submitted. We'll review and respond within 24 hours."* — clear, time-bounded, professional.
- **Empty states**: *"No transactions yet. Connect your accounts to see real-time spending."* — instruction-led, includes the next action.
- **Field labels**: *Business name*, *Email*, *Annual revenue*, *Industry*. Specific, no friendly framing.
- **Loading states**: *"Verifying business…"*, *"Approving application…"*, *"Connecting accounts…"* — context-specific and trust-building.

### Empty States

The dashboard empty state for new accounts: *"Welcome to Brex. Add your first card holder to start spending."* — instruction-led, points at the next action, builds momentum. The transaction empty state: *"No transactions yet. Spend with your Brex card or connect external accounts."* — describes the state and offers two paths forward.

### CTA Verb Conventions

- Primary on hero: *Apply Now*, *Get Started*, *Open Account*, *Talk to Sales*
- Secondary: *Watch Demo*, *See Pricing*, *Read Customer Stories*, *Sign In*
- Tertiary text: *Learn more*, *Browse integrations*, *View documentation*, *Read our blog*
- Avoided: *Click here*, *Submit*, exclamation-mark-heavy enthusiasm. Brex maintains a corporate-grade register without dropping into marketing-template language.

The verbs match the corporate-card audience — CFOs, controllers, finance leads — who respond to outcome verbs and time-to-value claims.

## 12. Dark Mode & Theming

**Optional dark mode on certain product pages.** The marketing surface is primarily light-canvas, but Brex ships dark variants on specific dashboard preview pages and case-study pages where the dark mode demonstrates the in-product experience. The dark mode is a complete token swap with the gradient unchanged across both grounds.

Dark-mode token swap:

- **canvas**: `#ffffff` → `#0e0f12`
- **bg-soft**: `#f5f5f7` → `#1a1d24`
- **bg-tile**: `#f0f0f3` → `#22252e`
- **bg-ink**: `#0e0f12` → `#000000`
- **text**: `#0e0f12` → `#ffffff`
- **text-body**: `#1c1d22` → `#e5e7eb`
- **text-muted**: `#5a5d66` → `#a3a6af`
- **text-soft**: `#8a8d96` → `#737680`
- **brand**: `#a855ff` (unchanged — passes AA on both grounds)
- **brand-pink**: `#ff5cad` (unchanged)
- **accent**: `#5b6dff` (unchanged)
- **on-brand**: `#ffffff` (unchanged)
- **gradient**: unchanged — the magenta→purple→indigo gradient reads strongly on both light and dark grounds
- **border**: `rgba(14, 15, 18, 0.09)` → `rgba(255, 255, 255, 0.10)`
- **border-strong**: `rgba(14, 15, 18, 0.16)` → `rgba(255, 255, 255, 0.20)`
- **shadow opacities**: doubled in dark mode for visibility against dark canvas
- **brand-glow**: unchanged at `rgba(168, 85, 255, 0.24)` — the purple glow remains brand-coherent on dark canvas

The brand-glow under the primary CTA is one of the few dark-mode-improved details: on dark canvas, the `rgba(168, 85, 255, 0.24)` purple glow reads more vividly than on white, making the CTA radiate even more strongly. The gradient itself is the brand's most cross-mode-resilient asset; it never needs reformulation.

## 13. Lineage & Influences

Brex's design DNA traces three lineages: **Stripe's gradient brand era (2019-2021)**, where multi-stop chromatic gradients became the fintech-modernity signal — Brex inherits the conic / linear gradient corner motif and pushes it harder into pink-magenta where Stripe pulled back to a single confident blue; **Linear / Vercel cool-grey neutral palette + 16px card radius** — Brex sits in this contemporary SaaS shape language but stays light-canvas where Linear goes dark; and **Klim / Lineto's Söhne** — the neo-grotesque type family carrying the more declarative, ad-grade voice. Brex's combination of these three lineages produces a register no single peer occupies: cool-neutral panel system + 16px card radius + Söhne 600 type + magenta-indigo gradient + light canvas.

The choice to commit to gradient over a single brand colour is the brand's most considered decision. A single colour (Linear's indigo, Mercury's mint, Wise's teal, Stripe's blue) reads as restrained-corporate; a multi-stop gradient reads as tech-modern-ambitious. Brex picks the latter because the corporate-card category was already saturated with single-colour brand systems by 2019 — differentiating required either a different shape language (Mercury's serif headline) or a different chromatic register. Brex picked the chromatic register and pushed it harder than any peer.

The cool-grey neutral system (`#f5f5f7`, `#f0f0f3`) is Apple-system-grey-adjacent — borrowed from Apple's macOS / iOS conventions for inactive-window grounds. The choice signals "modern Apple-adjacent polish" without literally using Apple's typography (which would require Apple's licensing and `-apple-system` fallback). The cool greys also distance Brex from warm-fintech competitors (Wise, Mercury) whose neutrals lean cream, and from pure-white-canvas peers (Vercel) whose surfaces feel more dev-tool-grade.

What Brex rejects: warm cream surfaces (Wise / Mercury signal), serif headlines (Mercury signal), single-colour brand systems (Linear / Stripe signal), pure-black canvas (consumer-app signal), heavy drop-shadow consumer-grade lifts (early-2010s SaaS signal), pill-only button radii (Stripe / Cal.com signal), brand colour as flat fill (peer fintech signal). The brand position is engineered to look like a fast-moving, ad-saturated, slightly flashy fintech that's confident enough in its product to lean on chroma.

**Influences:**

- **Stripe (2019-2021 gradient era)** — Multi-stop chromatic gradient as fintech-modernity signal. The conic/linear gradient corner motif Brex inherits and extends into pink-magenta. *https://stripe.com*
- **Linear / Vercel** — Cool-grey neutral palette and 16px card radius are inherited from this lineage. Brex stays light-canvas where Linear goes dark. *https://linear.app*
- **Klim / Lineto (Söhne)** — Heavier Söhne weights (600/700) carry the more declarative, ad-grade voice. The neo-grotesque is the type-discipline anchor. *https://lineto.com*
- **Ramp** — Direct competitor in the corporate-card category. Brex deliberately picks the louder/more chromatic position to differentiate. *https://ramp.com*
- **Mercury** — Adjacent fintech competitor. Where Mercury runs serif headline + mint-green band, Brex runs sans + magenta-indigo gradient. *https://mercury.com*
- **Apple App Store** — Cool-grey neutral surfaces (`#f5f5f7`) descended from Apple's system-grey conventions. *https://www.apple.com/app-store/*
- **Klarna / Robinhood (consumer-fintech bright-chroma era)** — Adjacent precedent for fintech-as-magazine-ad register; Brex pulls similar chromatic confidence into B2B corporate cards. *https://klarna.com*

## 14. Do's and Don'ts

### Do

- **Do** use the magenta→purple→indigo gradient (`135deg, #ff5cad → #a855ff → #5b6dff`) consistently on primary CTAs. Flat purple loses the brand.
- **Do** keep neutrals cool (`#f5f5f7`, `#f0f0f3`). Warm cream would shift the brand into Wise / Mercury territory.
- **Do** ship Söhne at weight 600 for the H1 with `-0.03em` tracking. The hard tracking is half the brand voice.
- **Do** use the signature soft shadow `rgba(14, 15, 18, 0.04) 0 4px 20px` on cards — diffuse, low-opacity, intentionally subtle.
- **Do** apply the brand-glow shadow `rgba(168, 85, 255, 0.24) 0 8px 24px -8px` under primary gradient CTAs. The purple glow extends brand chroma into the negative space.
- **Do** use 16px card radius and 8px button radius — the modern Linear/Vercel-influenced contemporary SaaS shape language.
- **Do** apply a radial-gradient hero wash behind product imagery — soft purple radial fade that grounds the hero in brand chroma without making the canvas itself purple.
- **Do** use Söhne Mono caps for section eyebrows, status pills, and pricing tabular values (with `tnum` enabled for column alignment).
- **Do** pair the gradient CTA with an outlined secondary `Sign in` / `Watch Demo` button — the dual CTA pair is the signature hero pattern.
- **Do** invert the footer to `#0e0f12` near-black — provides closure to the page and contrasts with the cool-grey panels above.
- **Do** drop the dashboard-grade density on pricing comparison tables — `tnum` enabled, hairline rows, dense feature checklists.
- **Do** use the gradient on featured pricing tier (full surface fill) rather than as a border accent — the gradient as *moment* is the design language.

### Don't

- **Don't** introduce a serif. Brex is fully sans-grotesque; mixing serif breaks the modern-fintech pose and pulls the brand into Mercury territory.
- **Don't** flatten the gradient on the CTA. The gradient *is* the brand mark. A flat purple CTA loses 80% of the brand identity.
- **Don't** push card radius beyond 16px. Larger reads as consumer-app; smaller reads as institutional bank. 16px is the sweet spot.
- **Don't** use warm cream or off-white surfaces. The cool-grey system is the brand's neutrality choice.
- **Don't** use brand purple `#a855ff` as a flat fill on primary CTAs. The gradient is required.
- **Don't** apply the gradient as a section background. Reserve it for CTAs, hero washes (with low opacity), and featured tiles. A gradient section bg is too aggressive.
- **Don't** drop display weight below 600. Söhne at 500 reads as Ramp; the 600 tier is the brand voice.
- **Don't** use heavy drop shadows on cards. The signature 4%-opacity shadow is what makes the page feel modern-and-floating rather than consumer-and-clunky.
- **Don't** introduce a third accent colour. The gradient (pink + purple + indigo) is the entire chromatic system. A green or red accent would compete.
- **Don't** widen the container beyond 1280px. The brand reads as Apple-grade-considered, not data-dense.
- **Don't** use exclamation marks in marketing copy. The voice is corporate-confident, not consumer-enthusiasm.
- **Don't** drop the brand-glow shadow under primary CTAs. It's a small detail but one of the brand's most distinctive moves.

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #ffffff
Brand Neutral:    #f5f5f7
Tile Surface:     #f0f0f3
Text:             #0e0f12
Text Muted:       #5a5d66
Brand Purple:     #a855ff
Brand Pink:       #ff5cad
Brand Indigo:     #5b6dff
Gradient:         linear-gradient(135deg, #ff5cad 0%, #a855ff 50%, #5b6dff 100%)
On Brand:         #ffffff
Border:           rgba(14, 15, 18, 0.09)
Border Soft:      rgba(14, 15, 18, 0.06)
Card Shadow:      rgba(14, 15, 18, 0.04) 0 4px 20px
Brand Glow:       rgba(168, 85, 255, 0.24) 0 8px 24px -8px
```

### Example Component Prompts

1. **"Create a Brex-style hero: pure white `#ffffff` canvas with a soft radial-gradient wash (`radial-gradient(ellipse at 50% 0%, rgba(168, 85, 255, 0.16) 0%, transparent 60%)`). 72px / 600 Söhne H1 with `-0.03em` tracking in `#0e0f12` near-black. 20px / 400 Söhne body deck at 1.50 line-height. Dual CTA pair below — primary gradient pill (`linear-gradient(135deg, #ff5cad → #a855ff → #5b6dff)` fill, white text 15px / 600, 8px radius, 12×20 padding, brand-glow shadow `rgba(168, 85, 255, 0.24) 0 8px 24px -8px`) + secondary outlined `Watch Demo` button (white fill, near-black text, 1px `rgba(14, 15, 18, 0.09)` border). Product imagery on the right side."**

2. **"Design a Brex feature card: `#ffffff` background, 16px radius, 1px `rgba(14, 15, 18, 0.06)` hairline border, 32px padding, signature soft shadow `rgba(14, 15, 18, 0.04) 0 4px 20px`. Inside: 28×28 brand-purple icon at top, 28px / 600 Söhne heading in `#0e0f12`, 16px / 400 Söhne body in `#5a5d66` muted. Hover lifts shadow to `0 8px 28px -4px` and translates 2px upward over 200ms."**

3. **"Build a Brex featured pricing tier: full gradient fill `linear-gradient(135deg, #ff5cad → #a855ff → #5b6dff)`, 16px radius, 40px padding, white text. At top: `MOST POPULAR` mono-caps eyebrow at 11px / 600 / `0.06em` in semi-translucent white. Tier name at 22px / 500. Pricing display at 64px / 600 Söhne with `tnum` enabled. Feature list with white checkmarks at 16px. At bottom: white pill CTA (`#ffffff` fill, brand-purple text, 8px radius)."**

4. **"Compose a Brex top nav: 72px height, `rgba(255, 255, 255, 0.80)` translucent fill with `backdrop-filter: blur(12px) saturate(180%)`, 1px bottom hairline `rgba(14, 15, 18, 0.06)`. Brex wordmark left in Söhne 20px / 600 near-black. Center nav links (Products, Solutions, Customers, Resources, Pricing) in Söhne 15px / 500 ghost-button style. Right: ghost `Sign in` + primary gradient `Apply Now` button (8px radius, brand-glow shadow)."**

5. **"Render a Brex testimonial card: `#f5f5f7` cool-grey inset card, 16px radius, no border, 32px padding. 4px gradient-purple vertical rule on the left edge. Pull quote in Söhne 32px / 500 / `-0.015em` near-black. Below: customer photo (48×48 circular) + customer name in Söhne 16px / 600 + role/company in Söhne 14px / 400 muted."**

6. **"Build a Brex pricing tier toggle: segmented control with `Monthly` and `Annual (save 20%)` options. Container: `#f5f5f7` panel, 8px radius, 1px hairline border. Active option: `#ffffff` background, near-black text 14px / 600, soft shadow. Inactive option: transparent, muted text 14px / 500. Toggle animates with 200ms ease-standard slide between options."**

### Iteration Guide

1. **Check the canvas + panel pair.** Brex is `#ffffff` canvas + `#f5f5f7` cool-grey panel. If your panels are warm cream or pure-white-on-pure-white, you've drifted to Wise/Mercury or Vercel territory.
2. **Switch to Söhne at weight 600.** Inter at the same sizes collapses the brand into Linear/Hashnode territory. Söhne's neo-grotesque proportions and 600 weight are the type-discipline anchor.
3. **Push the H1 to 72px with `-0.03em` tracking.** 56–64px reads as Ramp-restraint; 72px+ at 600 with hard tracking reads as Brex.
4. **Apply the gradient on the primary CTA.** A flat purple CTA loses 80% of the brand identity. The gradient *is* the brand mark.
5. **Add the brand-glow shadow under the gradient CTA.** `rgba(168, 85, 255, 0.24) 0 8px 24px -8px` extends brand chroma into the negative space — one of the brand's most distinctive moves.
6. **Use the signature 4%-opacity card shadow.** `rgba(14, 15, 18, 0.04) 0 4px 20px`. Heavier shadows shift to consumer-product; sharper hairline-only feels too dev-tool.
7. **Pair the gradient with cool-grey neutrals only.** Warm cream + gradient is too consumer-app; pure-white-only + gradient feels too Vercel-clinical. The cool grey is what makes the gradient land as "modern fintech".
8. **Reserve the gradient for moments.** CTAs, featured pricing tier, hero radial wash. Apply it as a section background and the brand becomes overwhelming; withhold it everywhere except moments and the brand reads as Linear-restrained.
