---
name: WorkOS
tagline: Pure-white canvas with Untitled Sans 80/500 display + indigo-violet h2 — the B2B-enterprise gravitas aesthetic.
updated_at: 2026-05-04T21:19:12+12:00
published_at: 2026-05-04T20:53:02+12:00
author: webdesignhot
source_url: https://workos.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, identity, auth, sans, enterprise, b2b, considered, premium]
preview_swatch: ['#ffffff', '#29363d', '#6363f1']
related: [stripe, vercel, linear]
description: 'WorkOS''s marketing site is the canonical B2B-enterprise-ready dev-tool canvas — pure white (`#ffffff`) ground anchored on warm-slate ink (`#29363d`) with hero display in **Untitled Sans** 80/500 carrying `-5.6px` tracking. Subheaders run in indigo-violet (`#6363f1`) — WorkOS''s signature accent that ties to the legacy logo and gives every section opener its enterprise gravitas. Where Auth0 commits to twilight blue and Clerk to violet on dark, WorkOS chose the opposite: a confident pure-white canvas that signals "trustworthy, premium, B2B-ready", paired with one of the most distinctive typographic moves in modern SaaS — Untitled Sans by Klim Type Foundry, used at extra-tight `-7%` tracking on hero display. The page architecture is uncompromisingly editorial: 4px radius buttons, generous 96–128px section padding, an Aeonik mono companion for code blocks, and an indigo-violet accent that is reserved exclusively for h2 section openers and selected emphasis. The result is the only B2B-identity site that successfully channels the Stripe-canon "enterprise gravitas via restraint" without copying Stripe''s signature blue.'

colors:
  bg: '#ffffff'                  # pure-white canvas
  bg-soft: '#fafafa'             # softest off-white for alt sections
  bg-section: '#f5f5f5'          # section ground tier
  bg-dark: '#0a0a0a'             # dark mood-zone footer / pricing CTA strip
  bg-violet-tint: '#f5f5fb'      # softest violet-tinted section
  surface: '#ffffff'
  surface-soft: '#fafafa'
  surface-strong: '#f0f0f2'      # hovered card surface
  surface-violet: '#eeeefe'      # violet-tinted card
  surface-dark: '#1a1a1f'        # dark-section card
  text: '#29363d'                # primary body — warm slate (rgb(41,54,61))
  text-strong: '#0a0a0a'         # near-black for emphasis
  text-muted: '#6c7780'          # secondary metadata
  text-soft: '#8b9296'           # caption / footer
  text-faint: '#aab1b5'          # disabled
  text-on-dark: '#ffffff'        # white text on dark sections
  text-on-violet: '#ffffff'      # white on violet CTA
  brand: '#6363f1'               # WorkOS indigo-violet — h2 headings, accent
  brand-deep: '#4848d6'          # darker pressed
  brand-light: '#8181f5'         # hover brightening
  brand-soft: '#eeeefe'          # softest violet surface
  brand-pale: '#dadafe'          # paler violet for hover surfaces
  brand-deeper: '#3535b8'        # deepest violet for active
  black-cta: '#0a0a0a'           # primary CTA fill (near-black)
  ink-active: '#000000'          # pressed state
  border: '#e5e5e7'              # default 1px hairline
  border-soft: '#efeff1'         # editorial divider
  border-strong: '#cdcdd0'       # stronger hairline
  border-input: '#d1d1d4'        # form input default
  border-violet: '#6363f1'       # focus ring
  on-brand: '#ffffff'
  on-dark: '#ffffff'
  on-light: '#29363d'
  scrim: 'rgba(10,10,10,0.48)'   # modal backdrop
  shadow-card: 'rgba(15,15,15,0.04)'   # subtle hairline shadow
  shadow-elev: 'rgba(15,15,15,0.08)'
  shadow-modal: 'rgba(15,15,15,0.16)'
  success: '#168346'             # success green
  success-bg: '#e7f6ec'
  warning: '#a35316'             # advisory amber
  warning-bg: '#fef0e6'
  danger: '#c62a2a'              # error red
  danger-bg: '#fdebeb'
  info: '#1d4ed8'

typography:
  display:
    family: '"Untitled Sans", "Untitled Fallback", -apple-system, "system-ui", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['ss01']
  body:
    family: '"Untitled Sans", "Untitled Fallback", -apple-system, "system-ui", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"IBM Plex Mono", "Aeonik Mono", "JetBrains Mono", "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  display-condensed:
    family: '"Feature Deck Condensed", "Feature Deck", "Untitled Sans"'
    weights: [400, 500]
  scale:
    hero-display:    { size: 80, weight: 500, lineHeight: 1.05, tracking: '-5.6px',  family: display, opentype: ['ss01'] }
    h1:              { size: 64, weight: 500, lineHeight: 1.10, tracking: '-3.5px',  family: display, opentype: ['ss01'] }
    h2:              { size: 28, weight: 500, lineHeight: 1.20, tracking: '-1.4px',  family: display, color: brand }
    h2-display:      { size: 56, weight: 500, lineHeight: 1.10, tracking: '-2.8px',  family: display, opentype: ['ss01'] }
    h3:              { size: 32, weight: 500, lineHeight: 1.20, tracking: '-1.0px',  family: display }
    h4:              { size: 22, weight: 500, lineHeight: 1.30, tracking: '-0.5px',  family: display }
    h5:              { size: 18, weight: 500, lineHeight: 1.40, tracking: '-0.2px',  family: display }
    eyebrow:         { size: 11, weight: 500, lineHeight: 1.50, tracking: '0.08em',  family: body, transform: uppercase }
    body-lg:         { size: 20, weight: 400, lineHeight: 1.55, tracking: '-0.005em', family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.50, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',        family: body }
    body-tight:      { size: 16, weight: 400, lineHeight: 1.20, tracking: '0',        family: body }
    label:           { size: 11, weight: 500, lineHeight: 1.50, tracking: '0',        family: body }
    button-label:    { size: 11, weight: 500, lineHeight: 1.0,  tracking: '0',        family: body }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.20, tracking: '0',        family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.40, tracking: '0',        family: body }
    micro:           { size: 11, weight: 400, lineHeight: 1.40, tracking: '0',        family: body }
    code-inline:     { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',        family: mono }
    code-block:      { size: 13, weight: 400, lineHeight: 1.55, tracking: '0',        family: mono }
    quote:           { size: 24, weight: 400, lineHeight: 1.40, tracking: '-0.005em', family: display, italic: true }

radius:
  micro: 1
  sm: 2          # button — observed
  md: 4          # nav-link / dropdown — observed
  lg: 6
  xl: 8
  card: 12
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  hero-padding-y: 160

components:
  button-primary:
    bg: '#0a0a0a'
    color: '#ffffff'
    radius: 2
    padding: '10px 16px'
    height: 36
    font: button-label
    use: 'Primary CTA — near-black fill, white text, 11/500. "Get started", "Talk to sales".'
  button-violet:
    bg: '#6363f1'
    color: '#ffffff'
    radius: 2
    padding: '10px 16px'
    height: 36
    use: 'Secondary CTA — indigo-violet, brand-emphasized.'
  button-secondary:
    bg: 'transparent'
    color: '#29363d'
    border: '1px solid #e5e5e7'
    radius: 2
    padding: '10px 16px'
    height: 36
    use: 'Outlined ghost — secondary action.'
  button-text-link:
    bg: 'transparent'
    color: '#6363f1'
    use: 'Inline link — violet text with arrow `→`. Hover underlines.'
  card-feature:
    bg: '#ffffff'
    color: '#29363d'
    radius: 12
    padding: '32px'
    border: '1px solid #e5e5e7'
    use: 'Feature card — hairline border, generous internal padding.'
  card-violet:
    bg: '#eeeefe'
    color: '#29363d'
    radius: 12
    padding: '32px'
    use: 'Violet-tinted feature card for indigo-emphasized moments.'
  card-pricing:
    bg: '#ffffff'
    color: '#29363d'
    radius: 12
    padding: '32px'
    border: '1px solid #e5e5e7'
    use: 'Pricing tier — Enterprise tier highlights with 2px `#6363f1` violet border.'
  card-dark:
    bg: '#1a1a1f'
    color: '#ffffff'
    radius: 12
    padding: '32px'
    use: 'Dark-section card — white text on near-black surface for footer-strip CTAs.'
  input:
    bg: '#ffffff'
    color: '#29363d'
    border: '1px solid #d1d1d4'
    focus: '0 0 0 2px #6363f1'
    radius: 4
    height: 40
    padding: '10px 12px'
    placeholder: '#8b9296'
    use: 'Form input — slim 4px radius, violet focus ring.'
  navbar-top:
    bg: '#ffffff'
    color: '#29363d'
    height: 64
    border-bottom: '1px solid #e5e5e7'
    use: 'Top nav with hairline bottom border. Logo, mega-menu nav, sign-in, primary CTA.'
  code-block:
    bg: '#0a0a0a'
    color: '#ffffff'
    radius: 8
    padding: '20px 24px'
    use: 'IBM Plex Mono code block on near-black ground — violet keywords, light syntax.'
  pill-eyebrow:
    bg: '#eeeefe'
    color: '#6363f1'
    radius: 9999
    padding: '4px 10px'
    use: 'Eyebrow pill — soft violet ground, brand-violet text in 11/500 uppercase.'
  modal:
    bg: '#ffffff'
    color: '#29363d'
    radius: 12
    padding: '32px'
    border: '1px solid #e5e5e7'
    shadow: 'rgba(15,15,15,0.16) 0 24px 48px'
    use: 'Centred dialog over scrim.'
  mega-menu:
    bg: '#ffffff'
    color: '#29363d'
    radius: 8
    padding: '24px'
    border: '1px solid #e5e5e7'
    shadow: 'rgba(15,15,15,0.08) 0 16px 32px'
    use: 'Multi-column dropdown — Untitled Sans 14/500 nav links, eyebrow group titles.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  cta-hover: 'near-black brightens 0a0a0a → 1f1f1f over 120ms; violet brightens 6363f1 → 8181f5'
  card-hover: 'border opacity transitions to slightly darker hairline + 1px translateY(-1) over 200ms; subtle shadow appears'
  hero-reveal: 'h1 fades from translateY(16px)/opacity 0 → 0/1 over 320ms emphasized ease; 80ms stagger on subheading'
  reduced-motion: 'respects prefers-reduced-motion: reduce — translateY suppressed, transitions remain opacity-only.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  ambient: 'none — most cards are hairline-bordered only'
  card: 'rgba(15,15,15,0.04) 0 4px 12px'
  elevated: 'rgba(15,15,15,0.08) 0 16px 32px'
  modal: 'rgba(15,15,15,0.16) 0 24px 48px'
  ring-violet: '0 0 0 2px #6363f1'
  ring-black: '0 0 0 2px #0a0a0a'

accessibility:
  contrast-text-on-bg: 11.6        # #29363d on #ffffff — AAA at body sizes
  contrast-strong-on-bg: 19.0      # #0a0a0a on #ffffff — AAA
  contrast-violet-on-bg: 4.6       # #6363f1 on #ffffff — AA at body sizes
  contrast-on-black-cta: 19.0      # #ffffff on #0a0a0a — AAA
  contrast-on-violet-cta: 4.6      # #ffffff on #6363f1 — AA at body sizes
  contrast-muted-on-bg: 5.6        # #6c7780 on #ffffff — AA
  focus-ring: '2px solid #6363f1 + 2px outline-offset (indigo-violet ring)'
  reduced-motion-honored: true
  touch-target-min: 36
  keyboard-nav: 'Tab moves logo → product mega-menu → resources → pricing → sign in → primary CTA; arrow keys in mega-menu.'

dark-mode: optional   # Marketing canvas is light-only by default; dark mood-zone footer with `bg-dark` token

lineage:
  summary: |
    WorkOS's marketing site is the canonical B2B-enterprise-ready dev-tool
    canvas — pure white (`#ffffff`) ground anchored on warm-slate ink
    (`#29363d`) with hero display in Untitled Sans 80/500 carrying extreme
    `-5.6px` tracking (a `-7%` letter-spacing that is the typographic
    signature). Every h2 globally is rendered in indigo-violet (`#6363f1`)
    — the chromatic typographic move that distinguishes WorkOS from peers.
    Buttons round at uncompromisingly architectural 2px (slimmer than
    Stripe's 6px or Linear's 8px). Depth is achieved through hairline
    borders rather than shadows, mirroring Linear's discipline. The page
    architecture borrows Klim Type Foundry's editorial typography (Untitled
    Sans is Klim's flagship), Stripe's confidence-via-restraint chromatic
    discipline, and modern B2B-enterprise broadsheet aesthetic. The result
    is a page that reads like a Klim type specimen page that happens to
    sell developer infrastructure.
  influences:
    - name: Klim Type Foundry
      role: Untitled Sans typeface — the negative-tracking signature is borrowed from Klim's editorial discipline.
      url: https://klim.co.nz
    - name: Stripe
      role: Single-blue confidence, hairline-bordered cards, confidence-via-restraint chromatic strategy.
      url: https://stripe.com
    - name: Linear
      role: Hairline-over-shadow depth discipline; minimal hover shadow.
      url: https://linear.app
    - name: Auth0
      role: Predecessor in identity-platform aesthetic — WorkOS positioned deliberately as the lighter B2B-first alternative.
      url: https://auth0.com
    - name: Stripe Atlas / Stripe Connect
      role: B2B infrastructure-platform editorial style for premium dev-tool positioning.
      url: https://stripe.com/atlas
---

## 1. Visual Theme & Atmosphere

WorkOS's marketing site is the canonical **B2B-enterprise-ready dev-tool canvas** — pure white (`#ffffff`) ground anchored on a warm-slate ink (`#29363d`) that sits between near-black and Stripe-blue, with hero display running **Untitled Sans** at 80px / 500 with extreme `-5.6px` tracking. The page reads as a modern enterprise broadsheet that happens to sell developer infrastructure: confident, premium, gravitas-via-restraint, and unmistakably positioned as "the platform for enterprise-ready apps". Where Auth0 commits to twilight blue and Clerk plants its violet on dark, WorkOS chose the inverse strategy — a pure-white canvas that signals trustworthiness without reaching for the corporate blue cliché.

The chromatic system is **white + warm-slate + indigo-violet**. The canvas is pure `#ffffff` (not warm-cream, not off-white). Body text runs in `#29363d`, a warm-slate that has slightly more green than navy — it sits at the neutral point between corporate-blue and editorial-black. Subheaders (h2) flip into **indigo-violet `#6363f1`** — WorkOS's signature accent colour, used exclusively on h2 section openers, selected feature emphasis, focus rings, and the wordmark mark. The combined effect is editorial gravitas with a single, considered, tech-forward accent.

Type runs **Untitled Sans** (Klim Type Foundry, 2017 — Kris Sowersby), one of the most distinctive humanist sans on the modern web. Display is Untitled Sans at 80/500 (Medium, not Bold) with `-5.6px` tracking — that's an extreme `-7%` letter-spacing that compresses the headline into a single confident block. Body type is the same Untitled Sans at 16/400 with normal letter-spacing. The mono companion is **IBM Plex Mono**. WorkOS also ships **Feature Deck** and **Aeonik** as condensed-display and accent type for marketing pages. Eyebrows are 11/500 uppercase with 0.08em tracking.

Shape language is **uncompromisingly slim 2–12px radii**. Buttons round at **2px** — observed across nearly every CTA on the site. This 2px radius is the WorkOS shape signature: it reads as architectural and considered rather than friendly-rounded. Cards round at 12px (one tier above the conventional 8px). Inputs at 4px. The 2px button radius alone immediately distinguishes WorkOS from Clerk's 6px, Auth0's 6.4px, and the conventional 8px most B2B SaaS uses.

Depth is achieved through **hairline borders, not shadows**. Most cards are hairline-bordered only — `1px solid #e5e5e7` — with no shadow at rest. On hover, a subtle `rgba(15,15,15,0.04) 0 4px 12px` shadow appears alongside a 1px translateY lift. The result is a page that feels architectural and editorial — closer to a Klim type specimen than to a marketing landing.

The page architecture is **compositional and editorial**: a confident hero block, alternating sections of feature copy with diagrammatic illustrations, code blocks rendered on near-black ground, and pricing tiers laid out as comparison cards. Photography is rare — illustrations are line-art SVG diagrams of identity flows, often with the indigo-violet brand colour highlighting the active path.

**Key Characteristics:**
- Pure-white canvas (`#ffffff`) — never warm-cream, never off-white
- Hero display in Untitled Sans 80/500 with `-5.6px` tracking — extreme `-7%` letter-spacing
- Warm-slate body ink (`#29363d`) — sits between near-black and Stripe-blue
- Indigo-violet `#6363f1` exclusively on h2 section openers and accent moments
- 2px button radius — the architectural shape signature
- Hairline borders over shadows — depth via 1px `#e5e5e7` rest, subtle shadow on hover
- Untitled Sans + IBM Plex Mono — Klim Type Foundry pairing
- 11/500 uppercase eyebrows in body Untitled Sans (not mono)
- Code blocks on near-black `#0a0a0a` ground — inverse of the canvas
- 96–128px section padding — editorial breath, never cramped
- "Enterprise Ready" wordmark — WorkOS's positional voice

## 2. Color Palette & Roles

### Primary

- **Canvas** (`#ffffff`) — pure white default page ground
- **Soft Canvas** (`#fafafa`) — softest off-white for alternate sections
- **Section** (`#f5f5f5`) — section ground tier, used sparingly for editorial breathing
- **Body Ink** (`#29363d`) — primary text colour. Warm slate, slightly more green than navy. Never pure black.
- **Strong Ink** (`#0a0a0a`) — display headlines and primary-CTA fill. Near-black with slight warmth.
- **Pure Black** (`#000000`) — pressed state on primary CTA only.
- **Muted** (`#6c7780`) — secondary metadata, captions
- **Soft** (`#8b9296`) — caption text, footer
- **Faint** (`#aab1b5`) — disabled state

### Brand & Dark

- **WorkOS Violet** (`#6363f1`) — the signature indigo-violet brand colour. Used on h2 section openers, accent CTAs, focus rings, and the wordmark.
- **Brand Light** (`#8181f5`) — hover brightening
- **Brand Deep** (`#4848d6`) — pressed/active state
- **Brand Deeper** (`#3535b8`) — deepest violet for emphasis-on-emphasis
- **Brand Soft** (`#eeeefe`) — softest violet surface for cards and pills
- **Brand Pale** (`#dadafe`) — pale violet for hover surfaces
- **Brand Tint** (`#f5f5fb`) — softest violet section tint

### Accent

WorkOS does not maintain a traditional "accent" palette beyond the violet brand. Where competitors layer multiple feature accents, WorkOS uses **the single violet** for every brand moment.

### Interactive

- **Link** (`#6363f1`) — indigo-violet, often without underline (arrow `→` indicates link)
- **Link Hover** (`#8181f5`) — brightens
- **Visited** — same as link (no visited state distinction on marketing)
- **Disabled** (`#aab1b5`) — faint slate text on `#fafafa` surface
- **Selected** — 2px violet border on selected pricing tier, focused inputs

### Neutral Scale

- **Strong Ink** (`#0a0a0a`) — display, primary CTA fill
- **Ink** (`#29363d`) — primary body
- **Muted** (`#6c7780`) — secondary
- **Soft** (`#8b9296`) — captions
- **Faint** (`#aab1b5`) — disabled
- **Border Strong** (`#cdcdd0`) — emphasized hairline
- **Border Default** (`#e5e5e7`) — default 1px hairline
- **Border Soft** (`#efeff1`) — editorial divider
- **Surface Strong** (`#f0f0f2`) — hovered card surface
- **Section** (`#f5f5f5`) — alt section
- **Soft Canvas** (`#fafafa`) — section
- **Canvas** (`#ffffff`) — page

### Surface & Borders

- **White** (`#ffffff`) — default
- **Soft White** (`#fafafa`) — alt
- **Section Grey** (`#f5f5f5`) — section ground
- **Violet Tint** (`#f5f5fb`) — softest violet section
- **Violet Card** (`#eeeefe`) — accent card surface
- **Dark Card** (`#1a1a1f`) — dark-mood card
- **Dark Mood** (`#0a0a0a`) — footer / pricing strip dark background
- **Border** (`#e5e5e7`) — default
- **Border Soft** (`#efeff1`) — softer
- **Border Strong** (`#cdcdd0`) — emphasized
- **Border Input** (`#d1d1d4`) — form-input default
- **Border Violet** (`#6363f1`) — focus ring

### Shadow Colors

WorkOS's shadow palette is **near-invisible at rest**. Most cards have no shadow — the depth is the hairline border. On hover, a subtle 4% shadow appears. This is closer to Linear's shadow discipline than to Stripe's atmospheric multi-layer.

- `rgba(15,15,15,0.04) 0 4px 12px` — card hover
- `rgba(15,15,15,0.08) 0 16px 32px` — elevated panel, mega-menu
- `rgba(15,15,15,0.16) 0 24px 48px` — modal
- `0 0 0 2px #6363f1` — focus ring
- `0 0 0 2px #0a0a0a` — alt focus ring on dark surfaces

### Semantic

- **Success Green** (`#168346`) — success state, on `#e7f6ec` surface
- **Warning Amber** (`#a35316`) — advisory state, on `#fef0e6` surface
- **Danger Red** (`#c62a2a`) — error state, on `#fdebeb` surface
- **Info Blue** (`#1d4ed8`) — informational, used sparingly because the brand is already violet

## 3. Typography Rules

### Font Family

**Display & Body**: `Untitled Sans` by Klim Type Foundry (Kris Sowersby, 2017). Fallback chain: `"Untitled Fallback", -apple-system, "system-ui", Helvetica, Arial, sans-serif`. Untitled Sans is one of the most distinctive humanist grotesques in modern type — slightly geometric, slightly warm, with a subtle quirk in the lower-case `g` and `a` that gives it character without ornament. WorkOS runs Untitled Sans at weights 400, 500, and 600.

**Display Condensed**: `Feature Deck Condensed` and `Feature Deck` (Feature Type Foundry) appear sparingly in marketing — used on landing-page hero variations for editorial moments.

**Aeonik**: also loaded as a secondary font but used minimally — appears in some marketing illustrations and brand chrome.

**Mono**: `IBM Plex Mono` (Bold Decisions, IBM, 2017). Open-source and pairs cleanly with the humanist Untitled Sans because both have similar humanist proportions.

**OpenType features**: `ss01` enabled on display Untitled Sans for the alternate-`a` form. Body uses default glyphs.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | Untitled Sans | 80 | 500 | 1.05 | -5.6px | ss01 | Hero — note the extreme `-7%` tracking |
| h1 | Untitled Sans | 64 | 500 | 1.10 | -3.5px | ss01 | Page title |
| h2 | Untitled Sans | 28 | 500 | 1.20 | -1.4px | — | Section opener — **indigo-violet** colour |
| h2-display | Untitled Sans | 56 | 500 | 1.10 | -2.8px | ss01 | Larger section opener variant |
| h3 | Untitled Sans | 32 | 500 | 1.20 | -1.0px | — | Sub-section |
| h4 | Untitled Sans | 22 | 500 | 1.30 | -0.5px | — | Feature card title |
| h5 | Untitled Sans | 18 | 500 | 1.40 | -0.2px | — | Sub-feature |
| eyebrow | Untitled Sans | 11 | 500 | 1.50 | 0.08em uppercase | — | "Enterprise Ready", "Identity" |
| body-lg | Untitled Sans | 20 | 400 | 1.55 | -0.005em | — | Hero sub-copy |
| body-md | Untitled Sans | 16 | 400 | 1.50 | 0 | — | Default body |
| body-sm | Untitled Sans | 14 | 400 | 1.50 | 0 | — | Secondary |
| body-tight | Untitled Sans | 16 | 400 | 1.20 | 0 | — | Tight body for compact lists |
| label | Untitled Sans | 11 | 500 | 1.50 | 0 | — | Form labels |
| button-label | Untitled Sans | 11 | 500 | 1.0 | 0 | — | CTA text — note 11/500, very compact |
| nav-link | Untitled Sans | 14 | 500 | 1.20 | 0 | — | Top nav |
| caption | Untitled Sans | 13 | 400 | 1.40 | 0 | — | Captions |
| micro | Untitled Sans | 11 | 400 | 1.40 | 0 | — | Footer legal |
| code-inline | IBM Plex Mono | 14 | 400 | 1.50 | 0 | — | Inline `<code>` |
| code-block | IBM Plex Mono | 13 | 400 | 1.55 | 0 | — | Code panel |
| quote | Untitled Sans | 24 | 400 | 1.40 | -0.005em | italic | Pull quote |

### Principles

- **`-5.6px` tracking on 80px display is the typographic signature.** That's an extreme `-7%` letter-spacing that compresses the hero into a single block. Substitute Inter at 80/600 with `-0.07em` to approximate.
- **Untitled Sans 500 (Medium), not 700 (Bold), for display.** WorkOS commits to Medium-as-display because the negative tracking already gives the type weight presence; Bold would tip into corporate.
- **h2 in indigo-violet.** This is the chromatic typographic signature — every h2 on the page is `#6363f1`. This single chromatic move is the brand's most distinctive trait.
- **11/500 uppercase eyebrows in body sans (not mono).** WorkOS uses Untitled Sans for eyebrows, unlike Clerk which uses Söhne Mono. This makes the eyebrows feel editorial rather than dev-tool.
- **Button labels at 11/500.** Very compact. WorkOS chose 11px because Untitled Sans reads larger than Inter at the same size due to its open apertures.
- **Mono for code only.** IBM Plex Mono never appears in eyebrow or label positions.
- **Inter is the closest open-source substitute for Untitled Sans.** Use Inter at the same weights but increase letter-spacing by ~5% to compensate for Inter's tighter cap height.

## 4. Component Stylings

### Buttons

**`button-primary`** — primary CTA. Near-black `#0a0a0a` fill, white text, 11/500 Untitled Sans, **2px radius**, 10×16px padding, 36px height. Hover brightens to `#1f1f1f`. Used for "Get started", "Talk to sales".

**`button-violet`** — accent CTA. Indigo-violet `#6363f1` fill, white text, same dimensions. Used when the brand-emphasis matters more than the call-to-action ranking — e.g. "See live demo".

**`button-secondary`** — outlined ghost. Transparent fill, warm-slate text `#29363d`, 1px `#e5e5e7` border, 2px radius, same dimensions. Hover deepens border to `#cdcdd0`.

**`button-text-link`** — plain inline link. Indigo-violet text `#6363f1`, often paired with `→` arrow. Hover underlines.

### Cards

**`card-feature`** — feature card. White surface, 12px radius, 1px `#e5e5e7` hairline border, 32px internal padding. Stack: optional violet icon, h4 title, body-md description, optional inline `→` link. On hover: subtle `rgba(15,15,15,0.04) 0 4px 12px` shadow + 1px translateY(-1) lift.

**`card-violet`** — violet-tinted card. `#eeeefe` ground, 12px radius, no border, 32px padding. Used for the indigo-emphasized "Why WorkOS" or "Built for B2B" feature blocks.

**`card-pricing`** — pricing tier. White surface, 12px radius, 1px hairline border, 32px padding. The "Enterprise" tier highlights with a 2px `#6363f1` violet border instead of the default hairline.

**`card-dark`** — dark-section card. `#1a1a1f` ground, 12px radius, 32px padding, white text. Used in the footer-strip pricing CTA.

**`card-stat`** — metric card. White surface, 12px radius, 32px padding. Massive Untitled Sans 64/500 metric with `-3.5px` tracking, eyebrow label below in 11/500 uppercase.

### Badges, Tags, Pills

**`pill-eyebrow`** — eyebrow pill. Soft violet `#eeeefe` ground, brand-violet text `#6363f1`, 9999px radius, 4×10px padding, 11/500 Untitled Sans uppercase. "Enterprise Ready", "New", "Free Trial".

**`pill-tag`** — outlined tag. Transparent fill, warm-slate text, 1px `#e5e5e7` border, 9999px radius, 4×10px padding, 11/400 Untitled Sans.

**`pill-status-success`** — success-green text on `#e7f6ec` surface, 9999px.

**`pill-status-error`** — danger-red text on `#fdebeb` surface.

### Inputs / Forms

**`input`** — text input. White surface, 1px `#d1d1d4` hairline (slightly darker than the `#e5e5e7` card border to read as form-utility), 4px radius, 40px height, 10×12px padding. Placeholder in `#8b9296`. On focus: 2px `#6363f1` violet ring with 2px outline-offset.

**`textarea`** — same as input with auto-grow.

**`select-dropdown`** — same as input with chevron-down icon.

**`checkbox`** — 16×16px, 2px radius, 1px hairline border. On checked: violet `#6363f1` fill, white check.

**`radio`** — 16×16px circle, 1px hairline border. On selected: violet fill, white dot.

### Navigation

**`navbar-top`** — top nav. White ground, 1px `#e5e5e7` bottom border, 64px height. WorkOS wordmark flush left in warm-slate (with the small violet brand-mark beside). Mega-menu nav, resources, customers, docs, pricing in 14/500 Untitled Sans flush centre. Sign-in text link + primary near-black CTA flush right.

**`mega-menu`** — opens from product nav. White surface, 8px radius, 1px hairline border, 24px padding, `rgba(15,15,15,0.08) 0 16px 32px` shadow. Multi-column nav with eyebrow group titles and 14/500 link rows. Each link has its own optional 12/400 caption.

**`footer`** — `#0a0a0c` deep ground, 5-column link list at desktop with eyebrow group titles in mono-uppercase, link rows in 14/400 muted, social row at the bottom.

**`breadcrumb`** — muted-slate text with `›` separators, 13/400.

### Tooltips, Toasts, Modals

**`tooltip`** — `#1a1a1f` ground, 4px radius, 8×10px padding, 12/400 white text. 6px arrow.

**`toast`** — bottom-right corner. White surface, 8px radius, 1px hairline, 16×20px padding, 14/400 warm-slate text.

**`modal`** — centred dialog over `rgba(10,10,10,0.48)` scrim. White surface, 12px radius, 1px hairline border, 32px padding, `rgba(15,15,15,0.16) 0 24px 48px` shadow.

### Code Block

**`code-block`** — `#0a0a0a` near-black ground, 8px radius, 20×24px padding. IBM Plex Mono 13/400. Violet `#6363f1` keywords, light-blue strings, white default text. Optional copy button top-right with light-grey hairline border.

### Decorative

**`identity-flow-diagram`** — line-art SVG of identity flows (SSO, SCIM, MFA). Warm-slate strokes on white ground, indigo-violet highlights on active path. The signature illustrative element.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160`
- Hero padding (vertical): **160px** at desktop — editorial gravitas requires breath
- Section padding: **96–128px** between major bands
- Card internal padding: **32px** for feature cards
- Gutter: **24px** between feature cards in 2-column; 32px in 3-column

### Grid & Container

- Max content width: **1280px** centred
- Hero: full-width with copy capped at 720px prose width
- Feature grid: 2-column at desktop with 24px gutter (preferred)
- Pricing: 3-column tier comparison cards with "Enterprise" tier violet-bordered
- Editorial 1-column: hero + body for blog and customer-story pages

### Whitespace Philosophy

WorkOS gives sections **editorial breath** — 96–128px between major bands, 32px internal card padding, 24px gutters. The hero band is 160px tall with copy capped at 720px prose width — this is the most breath of any auth dev-tool we've audited, deliberately positioning WorkOS as the premium tier of B2B-identity. The result feels like a Klim type specimen page rather than a marketing landing.

### Section Cadence

The page alternates **white canvas (`#ffffff`) → soft white (`#fafafa`) → white → violet-tinted (`#f5f5fb`) → white → dark mood-zone (`#0a0a0a`)**. The violet-tinted sections are rare — used 1–2 times per page for the "Why B2B?" or "Trusted by enterprise" emphasis. The dark mood-zone is the closing CTA strip, where the inverse ink-on-white flip provides emotional contrast.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 1px | Hairline-only fields |
| Button | 2px | All buttons (primary, secondary, ghost) — the architectural signature |
| Form | 4px | Form inputs, dropdowns, mega-menu, nav-link hover |
| Standard | 6px | Small panels |
| Comfortable | 8px | Code blocks, modal-adjacent panels |
| Card | 12px | Feature cards, modals, pricing cards |
| Pill | 9999px | Eyebrow pills, status pills |

The **2px button radius** is the WorkOS shape signature — slimmer than Stripe's 6px, tighter than Clerk's 6px, more architectural than Linear's 8px. Inputs at 4px are slightly more rounded than buttons to read as form-utility. There are no compound radii.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body sections (~95% of surface) |
| 1 — Hairline | `1px #e5e5e7` border | Cards at rest, inputs, dropdowns |
| 2 — Hover | `rgba(15,15,15,0.04) 0 4px 12px` | Hovered cards, mega-menu |
| 3 — Elevated | `rgba(15,15,15,0.08) 0 16px 32px` | Mega-menu, sticky bars |
| 4 — Modal | `rgba(15,15,15,0.16) 0 24px 48px` | Centred dialog |
| 5 — Focus | `0 0 0 2px #6363f1` ring | Focused inputs and buttons |

### Shadow Philosophy

WorkOS's depth is **architectural, not atmospheric**. Hairline borders dominate at rest — most cards have no shadow. The shadow palette is near-invisible (4% at hover) because depth is achieved through chromatic surface separation (white → soft-white → violet-tint → dark) and through the type's negative tracking compressing the visual rhythm. This is closer to Linear's shadow discipline than to Stripe's blue-tinted multi-layer atmospheric depth.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 120ms | Hover colour swap, focus ring fade-in |
| Standard | 200ms | Card hover lift, mega-menu open |
| Slow | 320ms | Modal enter, hero reveal |

### Per-Component Recipes

- **CTA hover (primary)**: near-black brightens `#0a0a0a` → `#1f1f1f` over 120ms.
- **CTA hover (violet)**: violet brightens `#6363f1` → `#8181f5` over 120ms.
- **Card hover**: 1px translateY(-1) + subtle 4% shadow appears over 200ms; border colour deepens slightly to `#dcdcde`.
- **Hero reveal**: h1 fades from `translateY(16px)/opacity 0` → `0/1` over 320ms emphasized; subhead reveals 80ms later with the same recipe.
- **Mega-menu open**: 200ms fade + 4px slide-down from navbar.
- **Modal enter**: scrim fades in over 200ms; dialog from `translateY(8px)/opacity(0)` → `0/1` over 320ms emphasized.
- **Link hover**: violet brightens by ~10% luminance over 120ms; underline grows from offset 4px to 2px.
- **Pricing tier hover**: card lifts 2px translateY(-2) with shadow appearing.

### Page Transitions

Page-to-page navigation uses no transition — links fire a hard navigation. WorkOS prioritises perceived speed.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Hero reveal and card hover translateY suppress (opacity-only). Mega-menu slide-down becomes fade-only.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #29363d ink on #ffffff | 11.6 | AAA |
| #0a0a0a strong-ink on #ffffff | 19.0 | AAA |
| #6363f1 violet on #ffffff | 4.6 | AA at body sizes |
| #ffffff on #0a0a0a near-black CTA | 19.0 | AAA |
| #ffffff on #6363f1 violet CTA | 4.6 | AA at body sizes |
| #6c7780 muted on #ffffff | 5.6 | AA |
| #168346 success on #e7f6ec | 5.7 | AA |
| #c62a2a danger on #fdebeb | 6.4 | AA |

The violet pair sits at **4.6 — AA at body sizes**. WorkOS renders the violet at full opacity without overlay; the page deliberately reserves violet for h2 (28px display) and CTAs (11/500 — which crosses into "large text" threshold).

### Focus Indicators

Focus ring is **2px solid `#6363f1` (indigo-violet) with 2px outline-offset**. All focusable elements use this exact ring. The violet doubles as brand affordance and accessibility indicator — when focus moves through the page, the violet ring is the visual cue that this is a WorkOS interaction.

### ARIA Patterns

- **Top nav**: `role="navigation"`, `aria-label="Primary"`. Mega-menu uses `role="menu"` with `role="menuitem"`.
- **Pricing tier cards**: headlined with `<h3>`. Enterprise tier has `aria-current="recommended"`.
- **Modal**: `role="dialog"`, `aria-modal="true"`, focus trap, Esc closes.
- **Tooltip**: `role="tooltip"`, triggered on `:hover` and `:focus`.
- **Code blocks**: `role="region"`, `aria-label="Code example"`. Copy button announces "Copied" via `aria-live="polite"`.
- **Identity-flow diagrams**: inline SVG with `<title>` and `<desc>`.

### Keyboard Navigation

- Tab: logo → product mega-menu → resources → customers → docs → pricing → sign in → primary CTA
- Mega-menu: arrow keys navigate, Esc closes
- Modal: focus trap, Tab cycles within
- Skip-to-main visible on first Tab

### Screen Reader Hints

- Identity-flow diagrams: `<title>` describes the flow, `<desc>` describes the steps
- Code copy button: announces "Copied" with `aria-live`
- Eyebrows are part of the heading announcement order

### Reduced Motion

Hero reveal and card hover translateY suppress. Mega-menu fade only (no slide).

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Nav collapses to logo + hamburger; hero copy 40px; feature grid stacks 1-up |
| Tablet | 640–1024px | Nav reveals product + sign-in; feature grid 2-up |
| Desktop | 1024–1280px | Full nav with mega-menu; container caps at 1280px |
| Wide | 1280–1440px | Container stays 1280px; type scales |

### Touch Targets

- Primary CTAs: 36px height — meets AA via larger hit zone padding
- Nav links: 36×16px tap target
- Form inputs: 40px height
- Tag pills: 24px tall — non-interactive

### Collapsing Strategy

- Nav: product / resources / customers collapse into hamburger drawer at <1024px
- Hero: 80px → 56px → 40px down the breakpoints; tracking compresses proportionally
- Feature grid: 3-up → 2-up → 1-up; gutters 32px → 24px → 16px
- Pricing: 3-column → 1-column; "Enterprise" tier surfaces first on mobile

### Image Behavior

Identity-flow illustrations use inline SVG. Customer logos use SVG. There are no photographic product screenshots; all illustrations are vector.

### Container Queries

Used in feature cards: when card width drops below ~280px, the icon shifts from inline-with-title to above-title.

## 11. Content & Voice

### Tone

Confident, premium, technically rigorous, slightly editorial. WorkOS's voice positions identity as **infrastructure for B2B-ready apps** — the copy assumes the reader is a senior engineer or CTO at a SaaS company who needs to add SSO, SCIM, audit logs, and other enterprise-required features without rebuilding their auth from scratch. Headlines lead with capability + outcome ("Your app, Enterprise Ready", "All the features your enterprise customers expect").

### Microcopy Patterns

- **Button verbs**: "Get started", "Talk to sales", "Read the docs", "View pricing", "See live demo"
- **Eyebrow labels**: uppercase Untitled Sans 11/500, 0.08em tracking — "Enterprise Ready", "Identity", "AuthKit", "Directory Sync"
- **Error message recipe**: precise + technical — "SSO connection failed: Verify the IdP metadata URL or contact your IT admin."
- **Success confirmations**: minimal + reassuring — "Connection added. Test sign-in now."
- **Field labels**: short and exact — "Domain", "IdP metadata URL", "ACS URL"
- **Doc links**: lead with the verb — "Read the SSO guide", "View API reference", "Setup guide"

### Empty States

- Empty connections: "No SSO connections yet. Add your first connection to enable enterprise sign-in."
- Empty directories: "No directories synced. Connect your IdP to begin user provisioning."
- Empty audit logs: "No events in the last 24 hours. Adjust the time range or check the integration."

### CTA Verb Conventions

- Primary: "Get started", "Talk to sales", "Start building"
- Secondary: "Read the docs", "View pricing", "See live demo"
- Tertiary: "Learn more →", "View pricing", "See changelog"
- Avoided: "Click here", "Submit", "Buy now"

## 12. Dark Mode & Theming

**Light-only on the marketing canvas, with dark mood-zone footer.** WorkOS commits to a pure-white canvas as the brand. The dark mood-zone (`#0a0a0a`) appears only in the footer-strip closing CTA — used as an emotional contrast pivot, not as a theme.

### Dark Mood-Zone Treatment

```yaml
bg-dark: '#0a0a0a'
surface-dark: '#1a1a1f'
text-on-dark: '#ffffff'
border-on-dark: 'rgba(255,255,255,0.10)'
brand-on-dark: '#8181f5'        # violet brightens slightly on dark for AAA contrast
button-primary-on-dark: '#ffffff'  # inverse — white CTA on dark mood
button-primary-text-on-dark: '#0a0a0a'
```

The dark mood-zone preserves the violet brand colour but brightens it slightly (`#8181f5` instead of `#6363f1`) for contrast on the dark surface. The primary CTA inverts: white fill with near-black text. Documentation pages support a full dark theme but the marketing canvas is light-only.

## 13. Lineage & Influences

WorkOS's visual lineage runs through three traditions: **Stripe's confidence-via-restraint chromatic discipline** (single brand colour, generous whitespace, hairline-bordered cards — all canonical Stripe moves); **Klim Type Foundry's editorial typography** (Untitled Sans is Klim's flagship, and WorkOS leans into the typeface's distinctive negative-tracking signature); and **modern B2B-enterprise broadsheet aesthetic** (the `-7%` hero tracking, the 96–128px section padding, the indigo-violet h2 colour — all moves borrowed from financial-broadsheet typography of the early 2020s).

The **single h2-violet move** — every section opener flipped to `#6363f1` — is the chromatic signature that distinguishes WorkOS. No other B2B-identity site does this. Most competitors flip h2 to a tinted accent only on emphasized sections; WorkOS commits to the violet on every h2 globally. The result is a page that has an unmistakable tonal rhythm without ever feeling "branded".

What WorkOS rejects: **dark canvases as primary** (light-first commitment), **photographic product screenshots** (line-art SVG diagrams instead), **bright primary CTAs** (the near-black `#0a0a0a` is the primary fill, not a brand-coloured CTA), **friendly-rounded buttons** (the 2px radius is uncompromisingly architectural), and **multi-coloured feature accents** (single violet does all the work).

**Influences:**
- Klim Type Foundry — Untitled Sans, [klim.co.nz](https://klim.co.nz)
- Stripe — single-blue confidence, hairline-bordered cards, [stripe.com](https://stripe.com)
- Linear — shadow discipline (hairline + minimal hover shadow), [linear.app](https://linear.app)
- Auth0 — predecessor in identity-platform aesthetic (WorkOS deliberately positioned as the lighter, B2B-first alternative)
- Stripe Atlas / Stripe Connect — B2B infrastructure-platform editorial style

## 14. Do's and Don'ts

**Do**
- Anchor the canvas on pure white `#ffffff` — never warm-cream, never off-white
- Run hero display in Untitled Sans 80/500 with `-5.6px` tracking — the extreme `-7%` is the signature
- Set every h2 in indigo-violet `#6363f1` — globally, not just on emphasis sections
- Use 2px button radius — the architectural shape signature
- Keep primary CTA fill at near-black `#0a0a0a` — not a brand-coloured CTA
- Use hairline borders over shadows — `1px #e5e5e7` at rest, subtle 4% shadow on hover
- Pair Untitled Sans with IBM Plex Mono — Klim + Bold Decisions canon
- Render code blocks on near-black `#0a0a0a` ground — inverse of canvas
- Give the hero 160px vertical padding — editorial gravitas requires breath
- Use 11/500 uppercase eyebrows in body Untitled Sans — not in mono

**Don't**
- Don't use cool-greys for body — `#29363d` warm-slate is the ink
- Don't use rounded buttons (>4px) — the 2px radius is the discipline
- Don't introduce additional brand accent colours — single violet does all the work
- Don't run Untitled Sans at weights below 400 or above 600 — 500 is the display weight
- Don't soften the hero tracking below `-5%` — the compression is the signature
- Don't use atmospheric multi-layer shadows — hairline is the depth strategy
- Don't substitute Inter without compensating tracking — Inter at the same metrics reads as generic
- Don't use Untitled Sans Bold for display — Medium is the typographic discipline
- Don't tighten section padding below 96px — the breath is what positions WorkOS as premium
- Don't use mono for eyebrows — body Untitled Sans is the editorial choice

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #ffffff
Soft White:       #fafafa
Section:          #f5f5f5
Body Ink:         #29363d
Strong Ink:       #0a0a0a
Brand Violet:     #6363f1
Brand Light:      #8181f5
Brand Soft:       #eeeefe
Border:           #e5e5e7
Border Input:     #d1d1d4
Muted:            #6c7780
Dark Mood:        #0a0a0a
```

### Example Component Prompts

- "Create a WorkOS-style hero section: pure-white canvas, 160px vertical padding. Hero copy in Untitled Sans 80/500 with `-5.6px` tracking, warm-slate ink (`#29363d`). Eyebrow above in 11/500 uppercase Untitled Sans with 0.08em tracking, soft violet `#eeeefe` pill ground, brand-violet `#6363f1` text. Sub-copy in Untitled Sans 20/400 muted slate `#6c7780`. Primary CTA: near-black (`#0a0a0a`) fill, white text, 11/500, **2px radius**, 10×16px padding. Secondary outlined ghost: white fill, 1px `#e5e5e7` border, warm-slate text."
- "Build a WorkOS feature card: white surface, 12px radius, 1px `#e5e5e7` hairline border, 32px padding, no shadow at rest. On hover: subtle `rgba(15,15,15,0.04) 0 4px 12px` shadow + 1px translateY(-1) lift. Stack: optional indigo-violet icon, h4 title in Untitled Sans 22/500 with `-0.5px` tracking warm-slate, body description in Untitled Sans 16/400 muted, 'Read the docs →' link in indigo-violet."
- "Design a WorkOS section opener: h2 in Untitled Sans 28/500 indigo-violet `#6363f1` with `-1.4px` tracking. Below in Untitled Sans 32/500 warm-slate as h3. The violet h2 is non-negotiable — every section opener globally is violet, not a tinted accent."
- "Create a WorkOS pricing tier: white surface, 12px radius, 32px padding. Default cards have 1px `#e5e5e7` border; the 'Enterprise' tier highlights with 2px `#6363f1` violet border. Stack: tier name in 11/500 uppercase, price in Untitled Sans 64/500 with `-3.5px` tracking, '/month' caption in 14/400 muted, feature checklist with violet checks, primary near-black CTA at the bottom."
- "Build a WorkOS code block: near-black (`#0a0a0a`) ground, 8px radius, 20×24px padding. IBM Plex Mono 13/400. Indigo-violet (`#6363f1`) keywords (`import`, `const`), light-blue strings, white default text. Optional copy button top-right with light-grey hairline border."
- "Design a WorkOS navbar: 64px tall, white ground, 1px `#e5e5e7` bottom border. WorkOS wordmark flush left in warm-slate with the small violet brand-mark beside. Mega-menu nav, resources, customers, docs, pricing in Untitled Sans 14/500 warm-slate flush centre. Sign-in text link + primary near-black CTA flush right."

### Iteration Guide

1. **Start with `#ffffff` and Untitled Sans.** The pure-white canvas + Klim humanist sans is the foundation. Substitute Inter at the same weights with ~5% looser tracking if Untitled Sans isn't licensed.
2. **Hero tracking at `-7%`.** This is the signature typographic move — `-5.6px` at 80px. Don't soften this.
3. **Every h2 in violet.** Globally. The chromatic rhythm is what makes the page unmistakably WorkOS.
4. **2px button radius, non-negotiable.** This is the architectural signature. 4px or higher reads as friendly-rounded.
5. **Near-black CTA fill, not violet CTA fill.** The primary CTA is `#0a0a0a` — violet is the accent CTA, used selectively.
6. **Hairline borders, not shadows.** `1px #e5e5e7` at rest. Shadow appears only on hover at 4% opacity.
7. **Eyebrows in body sans uppercase.** Not in mono. WorkOS chose body Untitled Sans for eyebrows because it ties the eyebrow to the editorial voice.
8. **160px hero padding, 96–128px section padding.** Don't tighten. The breath is the brand.
