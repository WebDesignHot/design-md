---
name: Stytch
tagline: Paper-cream canvas with Booton display + Chivo Mono body — passwordless-modern auth, joined Twilio.
author: webdesignhot
source_url: https://stytch.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, auth, passwordless, sans, mono-body, modern, paper, joined-twilio]
preview_swatch: ['#fbfaf9', '#1d1d1d', '#e6fd13']
related: [stripe, vercel, supabase]
description: 'Stytch''s marketing site is one of the most distinctive auth-platform canvases on the modern web — a **paper-cream ground (`#fbfaf9`)** anchored on near-black ink (`#1d1d1d`), display in custom **Booton** typeface at 40/700, and body running in **Chivo Mono** (a monospace sans, used as primary body text — an unusual move). The signature accent is electric **yellow-green `#e6fd13`** appearing in the "Joined Twilio" announcement banner, while soft cyan `#b2d6de` carries secondary CTAs and "Watch demo" buttons. Where Auth0 commits to twilight blue, Clerk to violet on dark, and Ory to fully-pill navy, Stytch chose the boldest typographic move in the auth space: monospace as the body register, Booton as the display, and a vibrant yellow-green accent colour. The page reads as an editorial-engineering hybrid — the kind of typesetting you''d see in a contemporary art catalogue or a Berlin design-studio portfolio. Stytch joined Twilio in 2024 and the marketing site preserves its independent visual identity while acknowledging the lineage. Body sits at default 16/400 with the unusual choice of monospace for prose, giving every paragraph a slight typewriter-poetic feel that immediately distinguishes Stytch from every Inter-default peer.'

colors:
  bg: '#fbfaf9'                  # paper-cream canvas — Stytch's signature
  bg-soft: '#f7f5f3'             # softer cream for alt sections
  bg-section: '#f0ede9'          # section ground tier
  bg-cyan-soft: '#e9f4f6'        # softest cyan-tinted section
  bg-yellow-tint: '#fbfeed'      # softest electric-yellow tint
  bg-dark: '#1d1d1d'             # dark mood-zone (near-black ink)
  surface: '#fbfaf9'
  surface-soft: '#f7f5f3'
  surface-strong: '#f0ede9'
  surface-cyan: '#b2d6de'        # secondary CTA / soft cyan tier
  surface-cyan-soft: '#e9f4f6'   # softer cyan
  surface-electric: '#e6fd13'    # electric yellow-green accent
  surface-electric-soft: '#fbfeed' # softer accent
  surface-dark: '#1d1d1d'        # dark surface
  text: '#1d1d1d'                # primary ink — near-black with slight warmth
  text-strong: '#000000'         # absolute black for emphasis
  text-muted: '#5e5e5e'          # secondary metadata
  text-soft: '#7d7d7d'           # caption
  text-faint: '#a8a8a8'          # disabled
  text-on-dark: '#fbfaf9'        # paper-cream on dark
  text-on-electric: '#1d1d1d'    # near-black on electric-yellow
  text-on-cyan: '#1d1d1d'        # near-black on cyan
  brand: '#1d1d1d'               # Stytch brand — near-black is the brand colour
  brand-deep: '#000000'          # deepest near-black
  accent-electric: '#e6fd13'     # signature electric yellow-green
  accent-cyan: '#b2d6de'         # signature soft cyan
  accent-cyan-deep: '#7eb8c4'    # deeper cyan for hover
  accent-pink: '#ff9eb8'         # rare warm-pink accent
  accent-orange: '#fc8854'       # rare orange accent for charts
  link: '#1d1d1d'                # ink link with underline
  link-hover: '#000000'          # darker hover
  border: '#e8e6e3'              # default 1px hairline (warm-grey)
  border-soft: '#efedea'         # editorial divider
  border-strong: '#d3d0cd'       # stronger hairline
  border-input: '#c2bfbc'        # form input default
  on-brand: '#fbfaf9'            # paper-cream on brand near-black
  on-dark: '#fbfaf9'
  on-light: '#1d1d1d'
  scrim: 'rgba(29,29,29,0.48)'   # modal backdrop
  shadow-card: 'rgba(29,29,29,0.04)'
  shadow-elev: 'rgba(29,29,29,0.08)'
  shadow-modal: 'rgba(29,29,29,0.16)'
  success: '#0f8a4d'             # success-green
  success-bg: '#e6f6ec'
  warning: '#a35316'             # advisory amber
  warning-bg: '#fef0e6'
  danger: '#d92929'              # error-red
  danger-bg: '#fdebeb'
  info: '#7eb8c4'                # cyan info

typography:
  display:
    family: '"Booton", "BootonUncommon", "Booton Fallback", "BootonUncommon Fallback", -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [400, 500, 700, 900]
    opentype-features: ['ss01', 'ss02']
  body:
    family: '"Chivo Mono", "Chivo Mono Fallback", ui-monospace, SFMono-Regular, Menlo, monospace'
    weights: [400, 500, 700]
  body-sans:
    family: '"Booton", "BootonUncommon", "Booton Fallback", -apple-system, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: '"Chivo Mono", "Chivo Mono Fallback", ui-monospace, SFMono-Regular, Menlo, monospace'
    weights: [400, 500]
  scale:
    hero-display:    { size: 64, weight: 700, lineHeight: 1.0,  tracking: '-0.02em', family: display, opentype: ['ss01'] }
    h1:              { size: 40, weight: 700, lineHeight: 1.0,  tracking: '-0.01em', family: display, opentype: ['ss01'] }
    h2:              { size: 25, weight: 700, lineHeight: 1.20, tracking: '-0.005em', family: display }
    h3:              { size: 20, weight: 700, lineHeight: 1.30, tracking: '0',       family: display }
    h4:              { size: 18, weight: 700, lineHeight: 1.40, tracking: '0',       family: display }
    h5:              { size: 16, weight: 500, lineHeight: 1.40, tracking: '0',       family: display }
    eyebrow:         { size: 11, weight: 500, lineHeight: 1.50, tracking: '0.10em',  family: mono, transform: uppercase }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',       family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    body-sans-md:    { size: 16, weight: 400, lineHeight: 1.50, tracking: '0',       family: body-sans }
    label:           { size: 13, weight: 500, lineHeight: 1.40, tracking: '0',       family: body }
    button-label:    { size: 13, weight: 400, lineHeight: 1.0,  tracking: '0',       family: body-sans }
    nav-link:        { size: 14, weight: 400, lineHeight: 1.20, tracking: '0',       family: body-sans }
    caption:         { size: 13, weight: 400, lineHeight: 1.40, tracking: '0',       family: body }
    micro:           { size: 11, weight: 400, lineHeight: 1.40, tracking: '0',       family: body }
    code-inline:     { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',       family: mono }
    code-block:      { size: 13, weight: 400, lineHeight: 1.55, tracking: '0',       family: mono }
    pricing-display: { size: 48, weight: 700, lineHeight: 1.0,  tracking: '-0.01em', family: display, opentype: ['tnum'] }
    quote:           { size: 22, weight: 400, lineHeight: 1.40, tracking: '-0.005em', family: display, italic: true }

radius:
  micro: 2
  sm: 4           # default — observed across most CTAs and cards
  md: 6
  lg: 8
  xl: 12
  card: 16
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1200
  prose-width: 720
  header-height: 64
  hero-padding-y: 128

components:
  button-primary:
    bg: '#1d1d1d'
    color: '#fbfaf9'
    radius: 4
    padding: '12px 16px'
    height: 40
    font: button-label
    use: 'Primary CTA — near-black ink fill, paper-cream text. "Log in", "Start building".'
  button-cyan:
    bg: '#b2d6de'
    color: '#1d1d1d'
    radius: 4
    padding: '12px 16px'
    height: 40
    use: 'Soft-cyan CTA — observed on "Watch demo" and "Start building for free". The signature secondary.'
  button-electric:
    bg: '#e6fd13'
    color: '#1d1d1d'
    radius: 4
    padding: '8px 12px'
    height: 32
    use: 'Electric yellow-green announcement banner — "Stytch has joined Twilio".'
  button-secondary:
    bg: 'transparent'
    color: '#1d1d1d'
    border: '1px solid #1d1d1d'
    radius: 4
    padding: '12px 16px'
    height: 40
    use: 'Outlined ghost — secondary action with ink hairline.'
  button-text-link:
    bg: 'transparent'
    color: '#1d1d1d'
    use: 'Inline link — ink with underline. Hover stays ink (no colour swap).'
  card-feature:
    bg: '#fbfaf9'
    color: '#1d1d1d'
    radius: 16
    padding: '32px'
    border: '1px solid #e8e6e3'
    use: 'Feature card — warm-grey hairline, generous internal padding.'
  card-cyan:
    bg: '#e9f4f6'
    color: '#1d1d1d'
    radius: 16
    padding: '32px'
    use: 'Cyan-tinted feature card — used for the auth-feature emphasis.'
  card-electric:
    bg: '#fbfeed'
    color: '#1d1d1d'
    radius: 16
    padding: '32px'
    use: 'Electric-tinted card — used sparingly for the brand-emphasized "Why Stytch" section.'
  card-pricing:
    bg: '#fbfaf9'
    color: '#1d1d1d'
    radius: 16
    padding: '32px'
    border: '1px solid #e8e6e3'
    use: 'Pricing tier — recommended highlights with 2px ink border.'
  card-comparison:
    bg: '#fbfaf9'
    color: '#1d1d1d'
    radius: 8
    padding: '8px 16px 8px 8px'
    border: '1px solid #e8e6e3'
    use: 'Comparison row card — "Auth0", "Fingerprint", "Amazon Cognito" — auth-competitor links.'
  input:
    bg: '#fbfaf9'
    color: '#1d1d1d'
    border: '1px solid #c2bfbc'
    focus: '0 0 0 2px #1d1d1d'
    radius: 4
    height: 44
    padding: '12px 14px'
    placeholder: '#7d7d7d'
    use: 'Form input — slim 4px radius, ink focus ring.'
  navbar-top:
    bg: '#fbfaf9'
    color: '#1d1d1d'
    height: 64
    border-bottom: '1px solid #e8e6e3'
    use: 'Top nav with paper-cream ground and warm-grey hairline bottom.'
  code-block:
    bg: '#1d1d1d'
    color: '#fbfaf9'
    radius: 12
    padding: '20px 24px'
    use: 'Chivo Mono code block on near-black ink ground — paper-cream default, electric keywords.'
  pill-eyebrow-mono:
    bg: 'transparent'
    color: '#5e5e5e'
    border: '1px solid #d3d0cd'
    radius: 9999
    padding: '4px 10px'
    use: 'Mono eyebrow pill — Chivo Mono uppercase 11/500.'
  pill-electric:
    bg: '#e6fd13'
    color: '#1d1d1d'
    radius: 9999
    padding: '4px 10px'
    use: 'Electric announcement pill — "JOINED TWILIO".'
  modal:
    bg: '#fbfaf9'
    color: '#1d1d1d'
    radius: 16
    padding: '32px'
    border: '1px solid #e8e6e3'
    shadow: 'rgba(29,29,29,0.16) 0 24px 48px'
    use: 'Centred dialog over scrim.'
  announcement-banner:
    bg: '#e6fd13'
    color: '#1d1d1d'
    radius: 4
    padding: '8px 12px'
    use: 'Top-of-page banner — "Stytch has joined Twilio to build the future of communications".'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  cta-hover: 'ink darkens 1d1d1d → 000000 over 150ms; cyan deepens b2d6de → 7eb8c4 over 150ms'
  card-hover: 'border deepens slightly + 1px translateY(-1) over 240ms; subtle 4% shadow appears'
  hero-reveal: 'sections fade-up from translateY(16px)/opacity 0 → 0/1 over 320ms emphasized'
  reduced-motion: 'respects prefers-reduced-motion: reduce — translateY suppressed; transitions remain opacity-only.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  ambient: 'none — most cards are hairline-bordered only'
  card: 'rgba(29,29,29,0.04) 0 4px 12px'
  elevated: 'rgba(29,29,29,0.08) 0 16px 32px'
  modal: 'rgba(29,29,29,0.16) 0 24px 48px'
  ring-ink: '0 0 0 2px #1d1d1d'

accessibility:
  contrast-text-on-bg: 14.6        # #1d1d1d on #fbfaf9 — AAA
  contrast-strong-on-bg: 17.5      # #000000 on #fbfaf9 — AAA
  contrast-on-ink-cta: 14.6        # #fbfaf9 on #1d1d1d — AAA
  contrast-on-cyan-cta: 11.0       # #1d1d1d on #b2d6de — AAA
  contrast-on-electric: 14.0       # #1d1d1d on #e6fd13 — AAA
  contrast-muted-on-bg: 6.4        # #5e5e5e on #fbfaf9 — AA
  focus-ring: '2px solid #1d1d1d + 2px outline-offset (ink ring)'
  reduced-motion-honored: true
  touch-target-min: 40
  keyboard-nav: 'Tab moves logo → product → docs → customers → pricing → log in → CTA; arrow keys in mega-menu.'

dark-mode: optional   # Marketing canvas is paper-cream by default; near-black mood-zone footer; full dark theme available for `<StytchUI />` components

lineage:
  summary: |
    Stytch's marketing site is one of the most distinctive auth-platform
    canvases on the modern web — a paper-cream ground (`#fbfaf9`) anchored
    on near-black ink (`#1d1d1d`), display in custom Booton typeface at
    40/700, and body running in Chivo Mono — a monospace typeface used
    as primary body text. The monospace-as-body move is the typographic
    signature that distinguishes Stytch from every other auth platform.
    The chromatic system layers electric yellow-green (`#e6fd13`) for
    the "Joined Twilio" announcement banner and soft cyan (`#b2d6de`)
    for secondary CTAs — an unusually expressive four-colour palette
    for a B2B-auth site. The visual lineage runs through contemporary
    editorial typesetting (manuscript-paper canvas, Chivo Mono prose —
    moves borrowed from contemporary art catalogues and Berlin design-studio
    portfolios), modern dev-tool restraint (hairline cards, ink-as-brand
    discipline), and passwordless-modern auth positioning. Stytch joined
    Twilio in 2024 and the marketing site preserves its independent visual
    identity while acknowledging the lineage.
  influences:
    - name: Omnibus-Type
      role: Chivo Mono typeface — used as body prose, the typographic signature.
      url: https://www.omnibus-type.com
    - name: Contemporary art catalogues + Berlin design-studio publishing
      role: Manuscript-paper canvas + mono-body discipline borrowed from European editorial.
      url: https://werkplaatstypografie.org
    - name: Stripe
      role: Confidence-via-restraint chromatic strategy and ink-as-brand discipline.
      url: https://stripe.com
    - name: Twilio
      role: Acquired Stytch in 2024 — preserved independent visual brand similar to Auth0/Okta.
      url: https://twilio.com
    - name: Auth0
      role: Predecessor positioning Stytch differentiates against (legacy auth → passwordless-modern).
      url: https://auth0.com
---

## 1. Visual Theme & Atmosphere

Stytch's marketing site is one of the most distinctive auth-platform canvases on the modern web — a **paper-cream ground (`#fbfaf9`)** anchored on near-black ink (`#1d1d1d`), display in custom **Booton** typeface at 40/700, and body running in **Chivo Mono** — a monospace typeface used as primary body text. The page reads as an editorial-engineering hybrid: the kind of typesetting you'd see in a contemporary art catalogue or a Berlin design-studio portfolio. Where every other auth platform uses a sans-serif body (Inter, Geist, Untitled Sans), Stytch chose monospace prose — a bold typographic move that immediately distinguishes the brand and signals "we're the thoughtful technical alternative".

The chromatic system is **paper-cream + ink + electric yellow-green + soft cyan**. The canvas at `#fbfaf9` is paper-cream — slightly warmer than off-white, with a hint of yellow that gives the page a manuscript-paper warmth. Ink runs at `#1d1d1d` (near-black with slight warmth, never pure `#000000`). The brand colour is the ink itself — Stytch's primary CTA fill is `#1d1d1d`, and the brand-mark is rendered in the same ink. The signature accent is **electric yellow-green `#e6fd13`** — used in the "Stytch has joined Twilio" announcement banner at the top of the page and as a rare emphasis colour. The secondary signature is **soft cyan `#b2d6de`** — used for "Watch demo" and "Start building for free" CTAs. This four-colour palette (cream + ink + electric + cyan) is unusually expressive for a B2B-auth site without ever feeling consumer.

Type runs **Booton** (custom display typeface) for headings and **Chivo Mono** (Omnibus-Type, open-source) for body. Display is Booton at 40/700 — a contemporary sans with slight quirks in the lower-case `g` and `a` that read as editorial rather than utility. Body type is Chivo Mono at 16/400 — a pure monospace typeface used as body prose, which is the typographic signature. The decision to use mono for body is the page's most distinctive move — every paragraph reads with a slight typewriter-poetic feel, every numeric callout aligns naturally, and the page architecture takes on the rhythm of typeset code rather than marketing copy. Eyebrows are 11/500 uppercase Chivo Mono with 0.10em tracking.

Shape language is **slim 4px radii** with a sweet-spot at 4px for buttons and 16px for feature cards. Buttons round at **4px** (slimmer than Stripe's 6px, much slimmer than Linear's 8px, sharing the architectural-utility quality with WorkOS's 2px). Inputs at 4px. Cards round at 16px. Comparison row cards at 8px. The 4px button radius reads as architectural and editorial — it ties to the manuscript-paper canvas and the Booton-display typesetting.

Depth is achieved through **warm-grey hairline borders + soft cream alt sections**. Most cards are hairline-bordered only — `1px solid #e8e6e3` (warm-grey). The dark mood-zone is `#1d1d1d` (the same near-black ink used for body text — the ink-as-section move). There is no atmospheric multi-layer shadow.

The signature visual element is the **"Stytch has joined Twilio" announcement banner** at the top of the page — rendered as an electric yellow-green pill with near-black text. This banner is the brand's most distinctive moment: it preserves Stytch's independent identity while acknowledging the 2024 acquisition. The chromatic energy of the electric yellow against the manuscript-paper canvas gives the page an immediate "look here first" focal point.

**Key Characteristics:**
- Paper-cream canvas (`#fbfaf9`) — manuscript-warm, never off-white or pure white
- Display in custom **Booton** typeface at 40/700
- Body in **Chivo Mono** monospace — the most distinctive typographic move in the auth space
- Brand colour is the ink itself (`#1d1d1d`) — primary CTA fill, brand-mark, body text
- Electric yellow-green `#e6fd13` for the "Joined Twilio" announcement banner
- Soft cyan `#b2d6de` for secondary CTAs ("Watch demo", "Start building for free")
- Warm-grey hairline borders (`#e8e6e3`) — ties to manuscript-paper canvas
- 4px button radius, 16px card radius — architectural-editorial proportions
- Eyebrows in Chivo Mono uppercase 11/500 with 0.10em tracking
- Code blocks on near-black `#1d1d1d` ground with paper-cream text
- Comparison row cards naming auth competitors directly ("Auth0", "Fingerprint", "Amazon Cognito")
- Joined Twilio in 2024; site preserves independent brand voice

## 2. Color Palette & Roles

### Primary

- **Paper-Cream** (`#fbfaf9`) — manuscript-warm canvas, slightly yellow undertone
- **Soft Cream** (`#f7f5f3`) — softer cream for alt sections
- **Section** (`#f0ede9`) — section ground tier
- **Ink** (`#1d1d1d`) — primary text and brand colour, near-black with slight warmth
- **Strong Ink** (`#000000`) — absolute black for emphasis only
- **Muted** (`#5e5e5e`) — secondary metadata
- **Soft** (`#7d7d7d`) — caption, placeholder
- **Faint** (`#a8a8a8`) — disabled

### Brand & Dark

- **Brand Ink** (`#1d1d1d`) — Stytch's brand colour IS the ink. Primary CTA fill, brand mark, body text.
- **Brand Deep** (`#000000`) — pressed/active state
- **Dark Mood** (`#1d1d1d`) — same as brand, used as dark-section ground (the ink-as-section move)

### Accent

- **Electric Yellow-Green** (`#e6fd13`) — signature accent. Used in the "Joined Twilio" announcement banner and rare emphasis moments.
- **Electric Tint** (`#fbfeed`) — softest electric-tinted section
- **Soft Cyan** (`#b2d6de`) — secondary signature. Used for "Watch demo" and "Start building" CTAs.
- **Cyan Deep** (`#7eb8c4`) — deeper cyan for hover state on cyan CTAs
- **Cyan Soft** (`#e9f4f6`) — softest cyan-tinted section
- **Pink** (`#ff9eb8`) — rare warm-pink accent (used in illustrations only)
- **Orange** (`#fc8854`) — rare orange accent (used in chart illustrations)

### Interactive

- **Link** (`#1d1d1d`) — ink with underline (Stytch uses underline-as-link, not colour)
- **Link Hover** (`#000000`) — darker ink on hover
- **Visited** — same as link (no visited distinction)
- **Selected** (`#1d1d1d`) — 2px ink border on selected pricing tier, focused inputs
- **Disabled** (`#a8a8a8`) — faint text on `#f0ede9` surface

### Neutral Scale

- **Strong Ink** (`#000000`) — emphasis
- **Brand Ink** (`#1d1d1d`) — primary text
- **Muted** (`#5e5e5e`) — secondary
- **Soft** (`#7d7d7d`) — captions
- **Faint** (`#a8a8a8`) — disabled
- **Border Strong** (`#d3d0cd`) — emphasized hairline
- **Border Default** (`#e8e6e3`) — default 1px hairline (warm-grey)
- **Border Soft** (`#efedea`) — editorial divider
- **Border Input** (`#c2bfbc`) — slightly darker than card border
- **Surface Strong** (`#f0ede9`)
- **Soft Cream** (`#f7f5f3`)
- **Paper-Cream** (`#fbfaf9`)

### Surface & Borders

- **Paper-Cream** (`#fbfaf9`) — default
- **Soft Cream** (`#f7f5f3`) — alt
- **Section Cream** (`#f0ede9`) — section ground
- **Cyan Soft** (`#e9f4f6`) — soft cyan section
- **Electric Tint** (`#fbfeed`) — soft electric section
- **Dark Ink** (`#1d1d1d`) — dark section
- **Border** (`#e8e6e3`) — warm-grey hairline
- **Border Soft** (`#efedea`)
- **Border Strong** (`#d3d0cd`)
- **Border Input** (`#c2bfbc`)
- **Border Ink** (`#1d1d1d`) — focus ring

### Shadow Colors

Stytch's shadows are **ink-tinted at near-invisible opacity**. Most cards have no shadow. On hover, a subtle 4% ink-tinted shadow appears.

- `rgba(29,29,29,0.04) 0 4px 12px` — card hover
- `rgba(29,29,29,0.08) 0 16px 32px` — elevated
- `rgba(29,29,29,0.16) 0 24px 48px` — modal
- `0 0 0 2px #1d1d1d` — ink focus ring

### Semantic

- **Success Green** (`#0f8a4d`) — on `#e6f6ec` surface
- **Warning Amber** (`#a35316`) — on `#fef0e6` surface
- **Danger Red** (`#d92929`) — on `#fdebeb` surface
- **Info Cyan** (`#7eb8c4`) — uses brand cyan

## 3. Typography Rules

### Font Family

**Display**: `Booton` (custom display typeface), with `BootonUncommon` as the alternate variant, system fallback. Booton is Stytch's commissioned display sans — slightly quirky in the lower-case `g` and `a` forms, with a contemporary editorial feel. Used at weights 400, 500, 700, and 900.

**Body**: `Chivo Mono` (Omnibus-Type, open-source) — a monospace typeface used as primary body text. The decision to use mono for prose is the page's most distinctive typographic move. Chivo Mono runs at weight 400 (Regular) and 500 (Medium).

**Body-Sans**: `Booton` is also used selectively as a body sans-serif when the monospace would feel inappropriate (button labels, nav links, ultra-compact label text).

**Mono**: `Chivo Mono` doubles as the code block typeface. Same family handles body and code.

**OpenType features**: `ss01` and `ss02` enabled on display Booton.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | Booton | 64 | 700 | 1.0 | -0.02em | ss01 | Hero — observed 64/64 |
| h1 | Booton | 40 | 700 | 1.0 | -0.01em | ss01 | Page title |
| h2 | Booton | 25 | 700 | 1.20 | -0.005em | — | Section opener |
| h3 | Booton | 20 | 700 | 1.30 | 0 | — | Sub-section |
| h4 | Booton | 18 | 700 | 1.40 | 0 | — | Feature card title |
| h5 | Booton | 16 | 500 | 1.40 | 0 | — | Sub-feature |
| eyebrow | Chivo Mono | 11 | 500 | 1.50 | 0.10em uppercase | — | "AUTH", "DEVELOPERS" |
| body-lg | Chivo Mono | 18 | 400 | 1.55 | 0 | — | Hero sub-copy in mono |
| body-md | Chivo Mono | 16 | 400 | 1.50 | 0 | — | Default body — mono prose |
| body-sm | Chivo Mono | 14 | 400 | 1.50 | 0 | — | Secondary body |
| body-sans-md | Booton | 16 | 400 | 1.50 | 0 | — | Body in sans where mono would feel wrong |
| label | Chivo Mono | 13 | 500 | 1.40 | 0 | — | Form labels |
| button-label | Booton | 13 | 400 | 1.0 | 0 | — | CTA text in sans |
| nav-link | Booton | 14 | 400 | 1.20 | 0 | — | Top nav |
| caption | Chivo Mono | 13 | 400 | 1.40 | 0 | — | Captions |
| micro | Chivo Mono | 11 | 400 | 1.40 | 0 | — | Footer legal |
| code-inline | Chivo Mono | 14 | 400 | 1.50 | 0 | — | Inline `<code>` |
| code-block | Chivo Mono | 13 | 400 | 1.55 | 0 | — | Code panel |
| pricing-display | Booton | 48 | 700 | 1.0 | -0.01em | tnum | Tier price |
| quote | Booton | 22 | 400 | 1.40 | -0.005em | italic | Pull quote |

### Principles

- **Mono as body is the typographic signature.** Chivo Mono at 16/400 for prose. This is the most distinctive Stytch move — every paragraph reads with typewriter-poetic feel.
- **Booton for display, Chivo Mono for body.** The split is the brand voice — display is editorial-considered, body is technical-precise.
- **Booton is the brand's commissioned display.** Substitute `Söhne Breit`, `Inter Display`, or a similar contemporary sans with slight character.
- **Eyebrows in Chivo Mono uppercase, 0.10em tracking.** The mono uppercase echoes the body-mono register.
- **Button labels in Booton (sans), not mono.** CTA text uses Booton because mono would tip into "code button" rather than "action".
- **`-0.02em` to `-0.005em` tracking on display.** Modest negative tracking — Booton already reads tight.
- **No serif anywhere.** Stytch commits to a Booton-and-Chivo-Mono system.

## 4. Component Stylings

### Buttons

**`button-primary`** — primary CTA. Near-black ink `#1d1d1d` fill, paper-cream `#fbfaf9` text, 13/400 Booton, **4px radius**, 12×16px padding, 40px height. Hover darkens to `#000000`. Used for "Log in", "Start building".

**`button-cyan`** — soft-cyan signature CTA. `#b2d6de` fill, ink text, same dimensions. Used for "Watch demo", "Start building for free". The signature secondary.

**`button-electric`** — electric yellow-green announcement pill. `#e6fd13` fill, ink text, smaller dimensions (32px height, 8×12px padding). Reserved for the "Stytch has joined Twilio" announcement banner.

**`button-secondary`** — outlined ghost. Transparent fill, ink text, 1px ink border, 4px radius, same dimensions as primary.

**`button-text-link`** — plain inline link. Ink text with underline. Hover stays ink (no colour swap — Stytch uses underline-as-link).

### Cards

**`card-feature`** — feature card. Paper-cream surface, 16px radius, 1px `#e8e6e3` warm-grey hairline border, 32px internal padding. Stack: optional icon, h4 title in Booton 18/700 ink, body in Chivo Mono 16/400 ink, optional inline link.

**`card-cyan`** — cyan-tinted feature card. `#e9f4f6` ground, 16px radius, no border, 32px padding. Used for the auth-feature emphasis blocks.

**`card-electric`** — electric-tinted card. `#fbfeed` ground, 16px radius, no border, 32px padding. Used sparingly — 1–2 times per page for the brand-emphasized "Why Stytch" moment.

**`card-pricing`** — pricing tier. Paper-cream surface, 16px radius, 1px hairline border, 32px padding. Recommended tier highlights with 2px ink border.

**`card-comparison`** — auth-competitor comparison row. Paper-cream surface, 8px radius, 1px hairline, 8×16×8×8px padding. Names competitors directly: "Auth0", "Fingerprint", "Amazon Cognito" — each links to a comparison page.

### Badges, Tags, Pills

**`pill-eyebrow-mono`** — outlined mono eyebrow pill. Transparent fill, muted ink text, 1px `#d3d0cd` border, 9999px radius, 4×10px padding, 11/500 Chivo Mono uppercase 0.10em tracking. "AUTH", "DEVELOPERS", "ENTERPRISE".

**`pill-electric`** — electric announcement pill. `#e6fd13` ground, ink text, 9999px radius, 4×10px padding, 11/500 Chivo Mono uppercase. "JOINED TWILIO".

**`pill-cyan`** — cyan tag pill. `#e9f4f6` ground, ink text. 9999px radius.

**`pill-status`** — semantic status. Same recipe as eyebrow with semantic colours.

### Inputs / Forms

**`input`** — text input. Paper-cream surface, 1px `#c2bfbc` border, **4px radius**, 44px height, 12×14px padding. Placeholder `#7d7d7d`. On focus: 2px `#1d1d1d` ink ring with 2px outline-offset.

**`textarea`** — same as input with auto-grow.

**`select-dropdown`** — same as input with chevron icon.

**`checkbox`** — 16×16px, 4px radius, 1px hairline. On checked: ink fill, paper-cream check.

**`radio`** — 16×16px circle, 1px hairline. On selected: ink fill, paper-cream dot.

### Navigation

**`navbar-top`** — top nav. Paper-cream `#fbfaf9` ground, 1px `#e8e6e3` warm-grey hairline bottom, 64px height. Stytch wordmark flush left in ink (Booton Heavy). Nav links "Product", "Docs", "Customers", "Pricing" in Booton 14/400 ink centre. "Log in" text + primary ink CTA flush right. Above the navbar (or just below, depending on session): the electric yellow-green announcement banner with "Stytch has joined Twilio".

**`mega-menu`** — opens from product nav. Paper-cream surface, 8px radius, 1px hairline, 24px padding. Multi-column nav with mono-uppercase eyebrow group titles in Chivo Mono and Booton link rows.

**`footer`** — `#1d1d1d` ink ground, 5-column link list at desktop, eyebrow group titles in 11/500 uppercase Chivo Mono paper-cream, link rows in 14/400 Booton paper-cream-muted, social row at the bottom. Twilio acknowledgment in the legal strip.

**`breadcrumb`** — muted ink with `›` separators, 13/400 Chivo Mono.

### Tooltips, Toasts, Modals

**`tooltip`** — `#1d1d1d` ink ground, 4px radius, 8×10px padding, 12/400 paper-cream text in Booton.

**`toast`** — bottom-right corner. Paper-cream surface, 12px radius, 1px hairline, 16×20px padding, 14/400 ink text in Chivo Mono.

**`modal`** — centred dialog over `rgba(29,29,29,0.48)` ink scrim. Paper-cream surface, 16px radius, 1px hairline border, 32px padding, ink-tinted modal shadow.

### Code Block

**`code-block`** — `#1d1d1d` ink ground (matches brand), 12px radius, 20×24px padding. Chivo Mono 13/400 paper-cream default text. Electric yellow-green keywords (`#e6fd13` rare emphasis), soft cyan strings (`#b2d6de`), white default text.

### Decorative

**`announcement-banner`** — top-of-page pill banner. `#e6fd13` electric yellow-green ground, ink text in 13/400 Booton, 4px radius, 8×12px padding. "Stytch has joined Twilio to build the future of communications". Click takes user to the announcement post.

**`comparison-grid`** — competitor comparison grid. Multiple `card-comparison` rows naming Auth0, Fingerprint, Amazon Cognito, etc. Each row is a clickable comparison page link.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160`
- Hero padding (vertical): **128px** at desktop
- Section padding: **96–128px** between major sections
- Card internal padding: **32px** for feature cards
- Gutter: **24px** between feature cards

### Grid & Container

- Max content width: **1200px** centred
- Hero: full-width with copy capped at 720px prose
- Feature grid: 2-column at desktop with 24px gutter
- Pricing: 3-column tier comparison
- Comparison grid: 4-column auth-competitor cards

### Whitespace Philosophy

Stytch gives sections **editorial breath** — 96–128px between bands, 32px internal card padding. The hero band is 128px tall. The mono body register reads slightly looser than sans by visual weight, so the page feels generously paced even at moderate density.

### Section Cadence

The page alternates **paper-cream → soft cream → paper-cream → cyan-tinted → paper-cream → electric-tinted → ink mood-zone**. The electric-tinted section appears 1–2 times per page for the brand-emphasized moment. The ink mood-zone is the closing footer-strip.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Dense table corners |
| Default | 4px | Buttons, inputs, dropdowns, announcement banner |
| Standard | 6px | Tooltips |
| Comfortable | 8px | Comparison cards, mega-menu |
| Card | 12–16px | Feature cards, modals, pricing |
| Pill | 9999px | Eyebrow pills, electric announcement pill |

The 4px button radius is the architectural-editorial signature — slimmer than Stripe's 6px, sharper than Linear's 8px, ties to the manuscript-paper canvas.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body sections |
| 1 — Hairline | `1px #e8e6e3` border | Cards at rest |
| 2 — Hover | `rgba(29,29,29,0.04) 0 4px 12px` | Hovered cards, mega-menu |
| 3 — Elevated | `rgba(29,29,29,0.08) 0 16px 32px` | Mega-menu, sticky bars |
| 4 — Modal | `rgba(29,29,29,0.16) 0 24px 48px` | Centred dialog |
| 5 — Focus | `0 0 0 2px #1d1d1d` ring | Focused inputs and buttons |

### Shadow Philosophy

Stytch's shadows are **ink-tinted, near-invisible at rest**. The depth strategy is hairline-bordered cream cards over hairline-bordered cream sections — chromatic surface separation rather than atmospheric shadow. Only modal and mega-menu use a visible shadow.

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

- **CTA hover (primary)**: ink darkens `#1d1d1d` → `#000000` over 150ms.
- **CTA hover (cyan)**: cyan deepens `#b2d6de` → `#7eb8c4` over 150ms.
- **CTA hover (electric)**: electric stays — no hue change. Subtle 1px translateY(-1).
- **Card hover**: 1px translateY(-1) + ink-tinted 4% shadow over 240ms; border deepens slightly.
- **Hero reveal**: sections fade-up from `translateY(16px)/opacity 0` → `0/1` over 320ms emphasized.
- **Mega-menu open**: 240ms fade + 4px slide-down.
- **Modal enter**: scrim fades 240ms; dialog from `translateY(8px)/opacity(0)` → `0/1` over 320ms emphasized.
- **Link hover**: ink stays ink; underline thickens slightly.

### Page Transitions

Page-to-page navigation uses no transition — hard navigation.

### Reduced Motion

Hero reveal and card hover translateY suppress (opacity-only).

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #1d1d1d ink on #fbfaf9 | 14.6 | AAA |
| #fbfaf9 on #1d1d1d ink CTA | 14.6 | AAA |
| #1d1d1d on #b2d6de cyan CTA | 11.0 | AAA |
| #1d1d1d on #e6fd13 electric | 14.0 | AAA |
| #5e5e5e muted on #fbfaf9 | 6.4 | AA |
| #0f8a4d success on #e6f6ec | 5.4 | AA |
| #d92929 danger on #fdebeb | 6.0 | AA |

All Stytch chromatic pairings sit at AAA — the paper-cream + ink discipline ensures maximum contrast.

### Focus Indicators

Focus ring is **2px solid `#1d1d1d` (ink) with 2px outline-offset**. The ink ring is the brand affordance and accessibility indicator.

### ARIA Patterns

- **Top nav**: `role="navigation"`, `aria-label="Primary"`. Mega-menu uses `role="menu"`.
- **Announcement banner**: `role="banner"` with `aria-label="Announcement"`.
- **Comparison grid**: `role="list"` with `role="listitem"` for each competitor row.
- **Modal**: `role="dialog"`, `aria-modal="true"`, focus trap, Esc closes.
- **Code blocks**: `role="region"`, `aria-label="Code example"`. Copy button `aria-live="polite"`.

### Keyboard Navigation

- Tab: announcement banner → logo → product → docs → customers → pricing → log in → primary CTA
- Mega-menu: arrow keys navigate, Esc closes
- Modal: focus trap, Tab cycles
- Skip-to-main visible on first Tab

### Screen Reader Hints

- Announcement banner announces full text: "Stytch has joined Twilio to build the future of communications"
- Comparison rows announce competitor name + "Compare to Stytch"
- Code copy button announces success state

### Reduced Motion

Hero reveal and card hover translateY suppress.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Nav collapses to hamburger; hero copy 32px; feature grid 1-up |
| Tablet | 640–1024px | Nav reveals product + log in; feature grid 2-up |
| Desktop | 1024–1280px | Full mega-menu; container caps at 1200px |
| Wide | 1280–1440px | Container stays 1200px |

### Touch Targets

- Primary CTAs: 40px height — meets AA via hit-zone padding
- Nav links: 36×16px tap target
- Form inputs: 44px height
- Comparison rows: 44px height

### Collapsing Strategy

- Nav: product / docs / customers collapse to hamburger at <1024px
- Hero: 64px → 48px → 36px → 32px down breakpoints
- Feature grid: 2-up → 1-up
- Pricing: 3-column → 1-column
- Comparison grid: 4-column → 2-column → 1-column

### Image Behavior

Marketing illustrations use inline SVG. Customer logos use SVG. Hero illustration is line-art style.

### Container Queries

Used in feature cards: when card width drops below ~280px, icon shifts above title.

## 11. Content & Voice

### Tone

Confident, technical, slightly irreverent, editorial. Stytch's voice positions auth as **a thoughtful technical alternative to legacy auth platforms** — assumes the reader is a senior engineer or technical founder who has built auth before and is looking for a fresh approach. Headlines lead with capability + voice ("A better way to build auth", "Passwordless made simple"). The "Joined Twilio" announcement is acknowledged at the top of every page but the brand voice remains independent.

### Microcopy Patterns

- **Button verbs**: "Log in", "Start building", "Watch demo", "Start building for free", "View docs"
- **Eyebrow labels**: 11/500 uppercase Chivo Mono — "AUTH", "PASSWORDLESS", "B2B", "ENTERPRISE"
- **Error message recipe**: precise + actionable — "Magic link expired. Request a new one or contact support."
- **Success confirmations**: minimal + technical — "Magic link sent. Check your inbox."
- **Field labels**: short and exact — "Email", "Phone", "Project ID"
- **Doc links**: lead with verb — "Read the magic-link guide", "View SDK reference"

### Empty States

- Empty users: "No users yet. Send a magic link to invite your first user."
- Empty sessions: "No active sessions. Sessions appear here as users sign in."
- Empty webhooks: "No webhooks configured. Add one to receive auth events."

### CTA Verb Conventions

- Primary: "Log in", "Start building", "Start building for free"
- Secondary: "Watch demo", "Read the docs", "View pricing"
- Tertiary: "Learn more →", "Compare to [competitor]"
- Avoided: "Click here", "Submit", "Buy now"

## 12. Dark Mode & Theming

**Light-only on the marketing canvas.** Stytch commits to paper-cream as the brand. The dark mood-zone (`#1d1d1d` ink) appears in the footer-strip closing CTA and in code blocks.

### Component Theming

The Stytch UI components ship with both light and dark themes:

```yaml
component-light:
  bg: '#fbfaf9'
  text: '#1d1d1d'
  border: '#e8e6e3'
  brand: '#1d1d1d'
component-dark:
  bg: '#1d1d1d'
  text: '#fbfaf9'
  border: 'rgba(255,255,255,0.10)'
  brand: '#fbfaf9'   # inverts for dark
```

## 13. Lineage & Influences

Stytch's visual lineage runs through three traditions: **contemporary editorial typesetting** (the manuscript-paper canvas, Booton display, Chivo Mono body — all moves borrowed from contemporary art catalogues, design-studio portfolios, and Berlin-school graphic-design publishing); **modern dev-tool restraint** (hairline cards, generous whitespace, ink-as-brand discipline); and **passwordless-modern auth positioning** (Stytch was one of the first auth platforms to lead with passwordless / magic-link as the primary flow rather than as an alternative).

The **monospace-as-body move** is the typographic signature that distinguishes Stytch from every other auth platform. While competitors run Inter, Geist, or Untitled Sans for body, Stytch chose Chivo Mono — a deliberate decision that reads as editorial-considered rather than technical-utility. Combined with the paper-cream canvas and the electric yellow-green accent, the page positions Stytch as the design-led auth platform. The 2024 Twilio acquisition preserved this independent visual identity, similar to how Auth0 retained its identity post-Okta.

What Stytch rejects: **dark canvases as primary** (paper-cream is the brand), **sans-serif body** (mono is the discipline), **photographic product screenshots** (line-art SVG and editorial illustration instead), **multi-coloured feature accent palettes** (cream + ink + electric + cyan is the entire chromatic vocabulary), and **enterprise blue trust** (ink and electric instead).

**Influences:**
- Omnibus-Type — Chivo Mono typeface, [chivomono.com](https://www.omnibus-type.com)
- Contemporary art catalogues + Berlin design-studio publishing — manuscript-paper canvas, mono-body discipline
- Stripe — confidence-via-restraint, ink-as-brand, [stripe.com](https://stripe.com)
- Twilio — acquired Stytch in 2024 but preserved the visual brand, [twilio.com](https://twilio.com)
- Auth0 — predecessor positioning Stytch differentiates against (legacy auth → passwordless-modern), [auth0.com](https://auth0.com)

## 14. Do's and Don'ts

**Do**
- Anchor the canvas on paper-cream `#fbfaf9` — manuscript-warm, never off-white
- Run display in custom Booton at 40/700 — the editorial display
- Use **Chivo Mono for body prose** — the monospace-as-body move is the typographic signature
- Set primary CTA fill to ink `#1d1d1d` with paper-cream text — brand IS ink
- Use electric yellow-green `#e6fd13` for the "Joined Twilio" announcement banner
- Use soft cyan `#b2d6de` for secondary CTAs ("Watch demo", "Start building for free")
- Render eyebrows in Chivo Mono uppercase 11/500 with 0.10em tracking
- Use 4px button radius — architectural-editorial proportions
- Render code blocks on near-black `#1d1d1d` ground with paper-cream text
- Name competitors directly ("Auth0", "Fingerprint", "Amazon Cognito") in comparison rows

**Don't**
- Don't substitute Inter for body — Chivo Mono is the typographic signature
- Don't use pure white canvas — paper-cream `#fbfaf9` is the manuscript warmth
- Don't introduce a coloured brand fill for primary CTA — ink is the brand
- Don't use the electric yellow-green for general CTAs — it's reserved for the Twilio announcement
- Don't run Booton below weight 700 for display — Bold is the discipline
- Don't tighten section padding below 96px — editorial breath is the brand
- Don't soften the ink to grey — `#1d1d1d` near-black with slight warmth is the ink
- Don't add atmospheric multi-layer shadows — ink-tinted hairline + 4% hover is the depth strategy
- Don't use serif type — Booton + Chivo Mono is the system
- Don't use button radius greater than 6px — 4px is the architectural-editorial signature

## 15. Agent Prompt Guide

### Quick Color Reference

```
Paper Cream:      #fbfaf9
Soft Cream:       #f7f5f3
Section Cream:    #f0ede9
Ink:              #1d1d1d
Strong Ink:       #000000
Electric Yellow:  #e6fd13
Soft Cyan:        #b2d6de
Cyan Soft:        #e9f4f6
Border:           #e8e6e3
Border Input:     #c2bfbc
Muted:            #5e5e5e
```

### Example Component Prompts

- "Create a Stytch-style hero section: paper-cream canvas (`#fbfaf9`), 128px vertical padding. Hero copy in **Booton** 64/700 with `-0.02em` tracking, ink (`#1d1d1d`). Eyebrow above in **Chivo Mono** 11/500 uppercase with 0.10em tracking, transparent ground with 1px `#d3d0cd` hairline pill. Sub-copy in **Chivo Mono 18/400** ink — note the monospace body register. Primary CTA: ink (`#1d1d1d`) fill, paper-cream (`#fbfaf9`) text, 13/400 Booton, **4px radius**, 12×16px padding, 40px height. Secondary cyan CTA: `#b2d6de` fill, ink text."
- "Build a Stytch announcement banner: electric yellow-green (`#e6fd13`) ground, ink text in 13/400 Booton, 4px radius, 8×12px padding. Content: 'Stytch has joined Twilio to build the future of communications →'. Pinned to top of page."
- "Design a Stytch feature card: paper-cream surface, 16px radius, 1px `#e8e6e3` warm-grey hairline border, 32px padding. Stack: optional icon, h4 title in Booton 18/700 ink, body description in **Chivo Mono 16/400 ink** — the mono body is the signature. Optional inline link in ink with underline."
- "Create a Stytch comparison row card: paper-cream surface, 8px radius, 1px `#e8e6e3` hairline, 8×16×8×8px padding. Stack: competitor logo (24×24) + name in Booton 16/400 ink — 'Auth0', 'Fingerprint', 'Amazon Cognito'. Hover deepens border slightly. Click opens comparison page."
- "Build a Stytch navbar: 64px tall, paper-cream `#fbfaf9` ground, 1px `#e8e6e3` warm-grey hairline bottom. Stytch wordmark flush left in ink (Booton). Nav links 'Product', 'Docs', 'Customers', 'Pricing' in Booton 14/400 ink centre. 'Log in' text + primary ink CTA flush right. Above the navbar: electric yellow-green announcement banner pinned to top of page."
- "Design a Stytch code block: ink (`#1d1d1d`) ground, 12px radius, 20×24px padding. **Chivo Mono** 13/400 paper-cream default text. Electric yellow-green keywords (rare emphasis), soft cyan strings, paper-cream default. Top-right copy button in transparent fill with paper-cream text."

### Iteration Guide

1. **Paper-cream canvas + Chivo Mono body is the signature.** This is the most distinctive Stytch combination. The mono prose register is what makes the page unmistakable.
2. **Booton for display, Chivo Mono for body.** Two typefaces, two registers — don't unify.
3. **Ink is the brand colour.** `#1d1d1d` for primary CTA, brand mark, body text. No coloured brand fill.
4. **Electric yellow-green is reserved for the Twilio announcement.** Don't use it as a general accent.
5. **Soft cyan for secondary CTAs.** Stytch's signature secondary — "Watch demo", "Start building for free".
6. **4px button radius.** Architectural-editorial. Don't soften to 6px or 8px.
7. **Eyebrows in Chivo Mono uppercase.** Echoes the body-mono register.
8. **Name competitors directly.** The comparison-row pattern is unique to Stytch — embrace it.
