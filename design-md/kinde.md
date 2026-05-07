---
name: Kinde
tagline: White canvas with Inter 72/500 display + dev-friendly pink-coral accent — the approachable auth-billing-access platform.
updated_at: 2026-05-04T21:19:12+12:00
published_at: 2026-05-04T21:08:09+12:00
author: webdesignhot
source_url: https://kinde.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, auth, billing, sans, friendly, dev-tool, approachable, modern]
preview_swatch: ['#ffffff', '#0f0f0f', '#ff6e6c']
related: [stripe, vercel, supabase]
description: 'Kinde''s marketing site is the approachable-dev-tool counterpoint to enterprise-identity gravitas — a pure-white canvas (`#ffffff`) anchored on near-black ink (`#0f0f0f`), hero display in Inter 72/500 carrying `-2.16px` tracking, and a signature pink-coral accent (`#ff6e6c`) that warms the page without competing with the typography. Body runs in Inter at 16/400 with body ink at warm-grey (`#2b2b2b`) and `-0.08px` letter-spacing — Kinde tightens body slightly compared to web-default Inter to read as more considered. Where WorkOS commits to pure white + indigo-violet enterprise gravitas, Kinde plants its flag on the same white canvas but with a pink-coral signature that signals "developer-friendly, approachable, modern" — closer to Linear''s playful-yet-professional voice than Stripe''s corporate trust. The page architecture is unmistakably modern dev-tool: 6–8px button radii, flat surfaces over hairline borders, soft section grounds (`#f5f5f5`), Inter throughout the entire scale, and the unique combination of auth + billing + access management baked into a single platform position. The result is the only auth-platform site that successfully channels "dev-friendly without being toy" — the discipline of a senior engineer with the warmth of a startup.'

colors:
  bg: '#ffffff'                  # pure-white canvas
  bg-soft: '#fafafa'             # softest off-white for alt sections
  bg-section: '#f5f5f5'          # section ground tier (button-secondary surface too)
  bg-violet-tint: '#f6f5ff'      # rare softest violet tint
  bg-coral-tint: '#fff5f4'       # softest coral tint for accent sections
  bg-dark: '#0f0f0f'             # dark mood-zone footer / pricing CTA strip
  surface: '#ffffff'
  surface-soft: '#fafafa'
  surface-strong: '#f0f0f0'      # hovered card surface
  surface-section: '#f5f5f5'     # section surface
  surface-coral: '#fff5f4'       # coral-tinted card
  surface-dark: '#1a1a1a'        # dark-section card
  text: '#2b2b2b'                # primary body — warm-grey ink (rgb(43,43,43))
  text-strong: '#0f0f0f'         # near-black for headings & emphasis (rgb(15,15,15))
  text-muted: '#5a5a5a'          # secondary metadata
  text-soft: '#787878'           # caption text
  text-faint: '#a0a0a0'          # disabled
  text-on-dark: '#ffffff'        # white on dark sections
  text-on-coral: '#0f0f0f'       # near-black on coral surface
  brand: '#ff6e6c'               # Kinde pink-coral — the signature warm accent
  brand-deep: '#e85a58'          # darker pressed
  brand-light: '#ff8584'         # hover brightening
  brand-soft: '#fff5f4'          # softest coral surface
  brand-pale: '#ffd6d4'          # paler coral for hover surfaces
  accent-violet: '#7c5cff'       # rare violet accent for AI-feature emphasis
  accent-violet-soft: '#f6f5ff'  # violet-tinted soft surface
  accent-yellow: '#ffd84d'       # tertiary yellow accent (changelog highlight)
  accent-green: '#4dd991'        # tertiary green accent (status confirmations)
  black-cta: '#0f0f0f'           # primary CTA fill (near-black)
  ink-active: '#000000'          # pressed state
  border: '#e5e5e5'              # default 1px hairline
  border-soft: '#efefef'         # editorial divider
  border-strong: '#d0d0d0'       # stronger hairline
  border-input: '#d4d4d4'        # form input default
  border-coral: '#ff6e6c'        # focus ring (coral)
  on-brand: '#ffffff'            # white on coral CTA
  on-dark: '#ffffff'
  on-light: '#0f0f0f'
  scrim: 'rgba(15,15,15,0.48)'   # modal backdrop
  shadow-card: 'rgba(15,15,15,0.04)'
  shadow-elev: 'rgba(15,15,15,0.08)'
  shadow-modal: 'rgba(15,15,15,0.16)'
  success: '#0f8a4d'             # success green
  success-bg: '#e6f6ec'
  warning: '#a35316'             # advisory amber
  warning-bg: '#fef0e6'
  danger: '#d92929'              # error red
  danger-bg: '#fdebeb'
  info: '#1a4ed8'

typography:
  display:
    family: 'Inter, "Inter Fallback", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['ss01', 'ss02']
  body:
    family: 'Inter, "Inter Fallback", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "SF Mono", "Fira Code", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    hero-display:    { size: 96, weight: 500, lineHeight: 1.05, tracking: '-3.0px',  family: display, opentype: ['ss01'] }
    h1:              { size: 72, weight: 500, lineHeight: 1.14, tracking: '-2.16px', family: display, opentype: ['ss01'] }
    h2:              { size: 48, weight: 500, lineHeight: 1.15, tracking: '-1.44px', family: display, opentype: ['ss01'] }
    h3:              { size: 32, weight: 500, lineHeight: 1.20, tracking: '-0.96px', family: display }
    h4:              { size: 24, weight: 500, lineHeight: 1.33, tracking: '-0.48px', family: display }
    h5:              { size: 18, weight: 500, lineHeight: 1.40, tracking: '-0.18px', family: display }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.50, tracking: '0.06em',  family: body, transform: uppercase }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.60, tracking: '-0.08px', family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.50, tracking: '-0.08px', family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.50, tracking: '-0.05px', family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.40, tracking: '-0.05px', family: body }
    button-label:    { size: 14, weight: 500, lineHeight: 1.0,  tracking: '-0.05px', family: body }
    nav-link:        { size: 14, weight: 500, lineHeight: 1.20, tracking: '-0.05px', family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.40, tracking: '0',       family: body }
    micro:           { size: 12, weight: 400, lineHeight: 1.40, tracking: '0',       family: body }
    code-inline:     { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',       family: mono }
    code-block:      { size: 13, weight: 400, lineHeight: 1.55, tracking: '0',       family: mono }
    pricing-display: { size: 56, weight: 500, lineHeight: 1.0,  tracking: '-1.7px',  family: display, opentype: ['tnum'] }
    quote:           { size: 24, weight: 400, lineHeight: 1.40, tracking: '-0.005em', family: display, italic: true }

radius:
  micro: 2
  sm: 4
  md: 6           # button — observed
  lg: 8           # nav-link / dropdown — observed
  xl: 12
  card: 16
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  hero-padding-y: 128

components:
  button-primary:
    bg: '#0f0f0f'
    color: '#ffffff'
    radius: 6
    padding: '6px 12px'
    height: 36
    font: button-label
    use: 'Primary CTA — near-black fill, white text. "Get started", "Book a demo".'
  button-primary-large:
    bg: '#0f0f0f'
    color: '#ffffff'
    radius: 8
    padding: '12px 24px'
    height: 48
    use: 'Hero-prominent primary CTA at 48px height.'
  button-coral:
    bg: '#ff6e6c'
    color: '#ffffff'
    radius: 6
    padding: '6px 12px'
    height: 36
    use: 'Brand-emphasized CTA — pink-coral fill. Used for "Try free" or feature-emphasis CTAs.'
  button-secondary:
    bg: '#f5f5f5'
    color: '#0f0f0f'
    radius: 6
    padding: '6px 12px'
    height: 36
    use: 'Soft-grey secondary — section-grey fill, near-black text.'
  button-ghost:
    bg: 'transparent'
    color: '#0f0f0f'
    border: '1px solid #e5e5e5'
    radius: 6
    padding: '6px 12px'
    height: 36
    use: 'Outlined ghost — secondary action with hairline border.'
  button-text-link:
    bg: 'transparent'
    color: '#0f0f0f'
    use: 'Inline link — text colour, hover underlines or flips to coral.'
  card-feature:
    bg: '#ffffff'
    color: '#2b2b2b'
    radius: 16
    padding: '32px'
    border: '1px solid #e5e5e5'
    use: 'Feature card — hairline border, generous internal padding.'
  card-section:
    bg: '#f5f5f5'
    color: '#2b2b2b'
    radius: 16
    padding: '32px'
    use: 'Section-grey card — flat surface, no border. Used for compact feature blocks.'
  card-coral:
    bg: '#fff5f4'
    color: '#0f0f0f'
    radius: 16
    padding: '32px'
    use: 'Coral-tinted feature card — used for the brand-emphasized "Built by devs" moments.'
  card-pricing:
    bg: '#ffffff'
    color: '#2b2b2b'
    radius: 16
    padding: '32px'
    border: '1px solid #e5e5e5'
    use: 'Pricing tier — recommended tier highlights with 2px coral border.'
  card-dark:
    bg: '#1a1a1a'
    color: '#ffffff'
    radius: 16
    padding: '32px'
    use: 'Dark-mood card for footer-strip closing CTA.'
  input:
    bg: '#ffffff'
    color: '#0f0f0f'
    border: '1px solid #d4d4d4'
    focus: '0 0 0 2px #ff6e6c'
    radius: 6
    height: 40
    padding: '10px 12px'
    placeholder: '#787878'
    use: 'Form input — slim 6px radius, coral focus ring.'
  navbar-top:
    bg: 'rgba(255,255,255,0.85) backdrop-blur(8px)'
    color: '#0f0f0f'
    height: 64
    border-bottom: '1px solid #efefef'
    use: 'Frosted-white navbar — backdrop-blur for floating-glass feel.'
  code-block:
    bg: '#0f0f0f'
    color: '#ffffff'
    radius: 12
    padding: '20px 24px'
    use: 'JetBrains Mono code block on near-black ground — coral keywords, light syntax.'
  pill-eyebrow-coral:
    bg: '#fff5f4'
    color: '#ff6e6c'
    radius: 9999
    padding: '4px 10px'
    use: 'Coral eyebrow pill — soft coral surface, brand text.'
  pill-eyebrow-grey:
    bg: '#f5f5f5'
    color: '#0f0f0f'
    radius: 9999
    padding: '4px 10px'
    use: 'Neutral eyebrow pill — soft grey surface.'
  modal:
    bg: '#ffffff'
    color: '#2b2b2b'
    radius: 16
    padding: '32px'
    border: '1px solid #e5e5e5'
    shadow: 'rgba(15,15,15,0.16) 0 24px 48px'
    use: 'Centred dialog over scrim.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'   # rare playful overshoot
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  cta-hover: 'near-black brightens 0f0f0f → 1f1f1f over 120ms; coral brightens ff6e6c → ff8584'
  card-hover: 'border deepens slightly + 1px translateY(-1) over 200ms; subtle 4% shadow appears'
  hero-reveal: 'sections fade-up from translateY(16px)/opacity 0 → 0/1 over 320ms emphasized'
  brand-mark-bounce: 'wordmark icon bounces with spring overshoot on initial page load (rare playful moment)'
  reduced-motion: 'respects prefers-reduced-motion: reduce — translateY suppressed; brand bounce becomes static.'

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
  ring-coral: '0 0 0 2px #ff6e6c'
  ring-black: '0 0 0 2px #0f0f0f'

accessibility:
  contrast-text-on-bg: 13.0        # #2b2b2b on #ffffff — AAA at body sizes
  contrast-strong-on-bg: 18.5      # #0f0f0f on #ffffff — AAA
  contrast-coral-on-bg: 3.5        # #ff6e6c on #ffffff — AA large only
  contrast-on-black-cta: 18.5      # #ffffff on #0f0f0f — AAA
  contrast-on-coral-cta: 3.5       # #ffffff on #ff6e6c — AA large only at body sizes
  contrast-muted-on-bg: 7.4        # #5a5a5a on #ffffff — AAA
  focus-ring: '2px solid #ff6e6c + 2px outline-offset (coral ring)'
  reduced-motion-honored: true
  touch-target-min: 36
  keyboard-nav: 'Tab moves logo → product → pricing → docs → customers → sign in → primary CTA; arrow keys in mega-menu.'

dark-mode: optional   # Marketing canvas is light-only by default; dark mood-zone footer with `bg-dark` token; full dark theme available for `<KindeAuth />` component

lineage:
  summary: |
    Kinde's marketing site is the approachable dev-tool counterpoint to
    enterprise-identity gravitas — a pure-white canvas anchored on
    near-black ink (`#0f0f0f`) with hero display in Inter 72/500 and
    `-2.16px` tracking. The signature is the pink-coral accent (`#ff6e6c`)
    used as a focal warm-tone in focus rings, brand-emphasized CTAs,
    and the wordmark mark. The visual lineage is Inter-based modern
    dev-tool aesthetic (Stripe, Vercel, Linear cohort) plus a deliberate
    Australian-startup approachability that comes from Kinde's ex-Canva
    engineering team. The single coral accent is the chromatic flag-plant
    — most auth platforms reach for blue (trust), violet (modern), or
    green (money); Kinde planted pink-coral because it was an open
    chromatic position in the dev-tool palette. The frosted-glass navbar
    with backdrop-blur(8px) is the unmistakable 2022+ dev-tool signal,
    and the once-on-page-load wordmark bounce is the page's only deliberately
    playful moment — a deliberate touch of personality that distinguishes
    Kinde from rigid enterprise-identity peers.
  influences:
    - name: Inter (Rasmus Andersson)
      role: Typeface foundation — Inter at the entire scale with body letter-spacing of `-0.08px`.
      url: https://rsms.me/inter
    - name: Stripe
      role: Single brand colour discipline, hairline cards, near-black primary CTA fill.
      url: https://stripe.com
    - name: Vercel
      role: Frosted-glass navbar with backdrop-blur — the modern dev-tool signal.
      url: https://vercel.com
    - name: Linear
      role: Sub-200ms motion discipline and hairline-over-shadow depth strategy.
      url: https://linear.app
    - name: Canva
      role: Australian-startup design lineage — friendly-yet-professional voice (Kinde's team is ex-Canva).
      url: https://canva.com
---

## 1. Visual Theme & Atmosphere

Kinde's marketing site is the **approachable dev-tool counterpoint to enterprise-identity gravitas** — a pure-white canvas (`#ffffff`) anchored on near-black ink (`#0f0f0f`) with hero display in Inter 72/500 carrying tight `-2.16px` tracking. The signature is the **pink-coral accent (`#ff6e6c`)** — used as a focal warm-tone in CTAs, eyebrow pills, and the brand-mark's "love-from-developers" affordance. The page reads as a senior-engineer-built tool with a startup's warmth: confident enough to compete with WorkOS on B2B-readiness, friendly enough to compete with Clerk on developer experience, and considered enough to read as premium without enterprise stiffness.

The chromatic system is **white + warm-grey + pink-coral**. The canvas is pure `#ffffff`. Body text runs in `#2b2b2b` (warm-grey, slightly green undertone), distinct from the heading ink at `#0f0f0f` (near-black). Body type uses `-0.08px` letter-spacing — Kinde tightens Inter slightly compared to web-default (which runs at `0`), reading as more considered. The pink-coral `#ff6e6c` is the brand colour: it carries focus rings, accent eyebrow pills, brand-emphasized CTAs ("Try free"), and the wordmark mark. Hover brightens to `#ff8584`, pressed to `#e85a58`. There is also a rare violet accent (`#7c5cff`) used exclusively for AI-feature emphasis, but it appears once or twice per page.

Type runs **Inter** (Rasmus Andersson, 2017, open-source) across the entire scale. Display is Inter at 72/500 — Medium weight, not Bold. The 72px H1 with `-2.16px` tracking (≈ `-0.03em`) compresses the hero into a confident block without ever tipping into corporate. Body is 16/400 with `-0.08px` letter-spacing. There is no display companion typeface — Inter does the entire job, which is the modern dev-tool discipline. Mono is **JetBrains Mono** for code blocks, used minimally because Kinde's marketing pages favour copy + diagrammatic illustrations over heavy code samples.

Shape language is **6–16px radii** with a sweet-spot at 6–8px for buttons and 16px for cards. Buttons round at **6px** — observed across primary, secondary, and ghost variants. Inputs at 6px to match. Cards round at 16px (one tier above the conventional 12px). The 6px button radius reads as friendly-modern — sharper than Stripe's 6px (which feels architectural), softer than WorkOS's 2px (which feels enterprise), warmer than Linear's 8px (which feels neutral).

Depth is achieved through **hairline borders + flat section grounds**. Most cards are hairline-bordered only — `1px solid #e5e5e5` — with no shadow at rest. Section variation comes from soft-grey `#f5f5f5` ground tier, used as an alt section colour to break visual rhythm. The dark mood-zone (`#0f0f0f`) appears in the footer-strip closing CTA. Shadows are reserved for hover and modal states.

The signature visual element is the **frosted-glass navbar** with `backdrop-blur(8px)` at 85% opacity — a Vercel-trained move that tells the user this is a modern dev-tool. The page-load brand-mark bounce (a small spring-eased overshoot animation on the wordmark icon) is the page's only playful motion — a deliberate moment of personality that distinguishes Kinde from the rigid enterprise-identity peers.

**Key Characteristics:**
- Pure-white canvas (`#ffffff`) with optional soft-grey `#f5f5f5` alt section
- Hero display in Inter 72/500 with `-2.16px` (`-0.03em`) tracking
- Body Inter at 16/400 with `-0.08px` letter-spacing — slightly tightened from web-default
- Pink-coral accent (`#ff6e6c`) as the single brand colour — focus ring, brand CTA, eyebrow pills
- 6px button radius, 16px card radius — friendly-modern proportions
- Hairline-bordered cards with no shadow at rest, subtle 4% shadow on hover
- Frosted-glass navbar with backdrop-blur(8px) at 85% opacity
- Single typeface (Inter) across the entire scale — no display companion
- JetBrains Mono for code blocks on near-black `#0f0f0f` ground
- Spring-eased brand-mark bounce on page load — the only playful motion
- 96–128px section padding — modern dev-tool breath, not enterprise breath

## 2. Color Palette & Roles

### Primary

- **Canvas** (`#ffffff`) — pure-white default page ground
- **Soft Canvas** (`#fafafa`) — softest off-white for subtle alt sections
- **Section Grey** (`#f5f5f5`) — section ground tier; also the surface for `button-secondary`
- **Body Ink** (`#2b2b2b`) — primary body text. Warm-grey with a slight green undertone.
- **Heading Ink** (`#0f0f0f`) — display headings, primary CTA fill, near-black with slight warmth
- **Pure Black** (`#000000`) — pressed state on primary CTA only
- **Muted** (`#5a5a5a`) — secondary metadata
- **Soft** (`#787878`) — caption text, placeholder
- **Faint** (`#a0a0a0`) — disabled state

### Brand & Dark

- **Kinde Coral** (`#ff6e6c`) — the pink-coral signature brand colour. Focus ring, brand-CTA fill, eyebrow accent pills, wordmark mark.
- **Brand Light** (`#ff8584`) — hover brightening
- **Brand Deep** (`#e85a58`) — pressed/active state
- **Brand Soft** (`#fff5f4`) — softest coral surface for cards and pills
- **Brand Pale** (`#ffd6d4`) — paler coral for hover surfaces
- **Coral Tint** (`#fff5f4`) — softest coral section tint

### Accent

- **AI Violet** (`#7c5cff`) — rare violet accent used exclusively for AI-feature emphasis. Appears 1–2 times per page max.
- **AI Violet Soft** (`#f6f5ff`) — soft violet surface for AI-feature pills
- **Yellow** (`#ffd84d`) — tertiary highlight for changelog "NEW" badges
- **Green** (`#4dd991`) — tertiary green for status confirmations

### Interactive

- **Link** (`#0f0f0f`) — default link inline; underline indicates link, not colour
- **Link Hover** (`#ff6e6c`) — link hover flips ink → coral. The signature link interaction.
- **Selected** — 2px coral border on selected pricing tier, focused inputs
- **Disabled** (`#a0a0a0`) — faint text on `#fafafa` surface

### Neutral Scale

- **Heading Ink** (`#0f0f0f`) — display headings
- **Body Ink** (`#2b2b2b`) — primary body
- **Muted** (`#5a5a5a`) — secondary
- **Soft** (`#787878`) — captions, placeholder
- **Faint** (`#a0a0a0`) — disabled
- **Border Strong** (`#d0d0d0`) — emphasized hairline
- **Border Default** (`#e5e5e5`) — default 1px hairline
- **Border Soft** (`#efefef`) — editorial divider
- **Surface Strong** (`#f0f0f0`) — hovered card surface
- **Section Grey** (`#f5f5f5`) — alt section
- **Soft White** (`#fafafa`) — section
- **Canvas** (`#ffffff`) — page

### Surface & Borders

- **White** (`#ffffff`) — default
- **Soft White** (`#fafafa`) — alt
- **Section Grey** (`#f5f5f5`) — section ground / button-secondary surface
- **Coral Tint** (`#fff5f4`) — accent section / coral card
- **Violet Tint** (`#f6f5ff`) — rare AI-feature tint
- **Dark Card** (`#1a1a1a`) — dark-mood card
- **Dark Mood** (`#0f0f0f`) — footer-strip / pricing dark
- **Border** (`#e5e5e5`) — default
- **Border Soft** (`#efefef`)
- **Border Strong** (`#d0d0d0`)
- **Border Input** (`#d4d4d4`) — slightly darker than card border
- **Border Coral** (`#ff6e6c`) — focus ring

### Shadow Colors

Kinde's shadow palette is **invisible at rest, near-invisible on hover**. Most cards have no shadow — depth is the hairline border. On hover, a subtle 4% shadow appears alongside the 1px translateY lift. This is closer to Linear and WorkOS's shadow discipline than to Stripe's atmospheric multi-layer.

- `rgba(15,15,15,0.04) 0 4px 12px` — card hover
- `rgba(15,15,15,0.08) 0 16px 32px` — elevated panel
- `rgba(15,15,15,0.16) 0 24px 48px` — modal
- `0 0 0 2px #ff6e6c` — coral focus ring
- `0 0 0 2px #0f0f0f` — alt focus ring on dark surfaces

### Semantic

- **Success Green** (`#0f8a4d`) — success state, on `#e6f6ec` surface
- **Warning Amber** (`#a35316`) — advisory state
- **Danger Red** (`#d92929`) — error state, on `#fdebeb` surface
- **Info Blue** (`#1a4ed8`) — informational, used sparingly

## 3. Typography Rules

### Font Family

**Display & Body**: `Inter` (Rasmus Andersson, 2017, open-source). Fallback chain: `"Inter Fallback", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif`. Inter is the modern dev-tool default — neutral, humanist, optimised for screen rendering. Kinde runs Inter at weights 400, 500, 600, and 700, with display preferring 500 (Medium).

**Mono**: `JetBrains Mono` (JetBrains, 2020). Used for code blocks and inline code. Pairs cleanly with Inter because both are humanist sans-grotesque hybrids designed for technical interfaces.

**OpenType features**: `ss01` and `ss02` enabled on display Inter for the alternate-`a` and alternate-`g` forms (which give Inter its more characterful display feel). Body uses default glyphs.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | Inter | 96 | 500 | 1.05 | -3.0px | ss01 | Hero — XL variant |
| h1 | Inter | 72 | 500 | 1.14 | -2.16px | ss01 | Page title — observed 82px line-height |
| h2 | Inter | 48 | 500 | 1.15 | -1.44px | ss01 | Section opener |
| h3 | Inter | 32 | 500 | 1.20 | -0.96px | — | Sub-section |
| h4 | Inter | 24 | 500 | 1.33 | -0.48px | — | Feature card title |
| h5 | Inter | 18 | 500 | 1.40 | -0.18px | — | Sub-feature |
| eyebrow | Inter | 12 | 500 | 1.50 | 0.06em uppercase | — | "Get started", "What's new" |
| body-lg | Inter | 18 | 400 | 1.60 | -0.08px | — | Hero sub-copy — note negative tracking |
| body-md | Inter | 16 | 400 | 1.50 | -0.08px | — | Default body — `-0.08px` is the body signature |
| body-sm | Inter | 14 | 400 | 1.50 | -0.05px | — | Secondary |
| label | Inter | 13 | 500 | 1.40 | -0.05px | — | Form labels |
| button-label | Inter | 14 | 500 | 1.0 | -0.05px | — | CTA text |
| nav-link | Inter | 14 | 500 | 1.20 | -0.05px | — | Top nav |
| caption | Inter | 13 | 400 | 1.40 | 0 | — | Captions |
| micro | Inter | 12 | 400 | 1.40 | 0 | — | Footer legal |
| code-inline | JetBrains Mono | 14 | 400 | 1.50 | 0 | — | Inline `<code>` |
| code-block | JetBrains Mono | 13 | 400 | 1.55 | 0 | — | Code panel |
| pricing-display | Inter | 56 | 500 | 1.0 | -1.7px | tnum | Tier price |
| quote | Inter | 24 | 400 | 1.40 | -0.005em | italic | Pull quote |

### Principles

- **Inter at the entire scale.** Kinde commits to a single typeface — no display companion, no editorial serif. Inter Medium handles display, Inter Regular handles body. Discipline is the brand.
- **`-2.16px` tracking on 72px H1.** That's `-0.03em` — tighter than Stripe's `-0.025em`, looser than WorkOS's `-0.07em`. Kinde sits in the modern-dev-tool middle.
- **Body at 16/400 with `-0.08px` letter-spacing.** This is the body signature — Kinde slightly tightens body Inter to read as more considered than web-default.
- **Display weight 500, not 700.** Medium-as-display is the discipline; Bold would tip into corporate.
- **`ss01` + `ss02` enabled on display.** The alternate-`a` and alternate-`g` give Inter Display its characterful feel.
- **JetBrains Mono for code only.** Never used in eyebrows or labels.
- **Inter is the canonical type.** No substitute necessary — Inter IS the source of truth for Kinde.

## 4. Component Stylings

### Buttons

**`button-primary`** — primary CTA. Near-black `#0f0f0f` fill, white text, 14/500 Inter, **6px radius**, 6×12px padding, 36px height. Hover brightens to `#1f1f1f`. Used for "Get started", "Book a demo", "Sign in".

**`button-primary-large`** — hero-prominent primary CTA. Same colour scheme, 8px radius, 12×24px padding, 48px height.

**`button-coral`** — brand-emphasized CTA. Pink-coral `#ff6e6c` fill, white text, same dimensions as primary. Used for "Try free" or feature-emphasized CTAs.

**`button-secondary`** — soft-grey secondary. `#f5f5f5` fill (section-grey), near-black text. Same dimensions. Hover deepens to `#ebebeb`.

**`button-ghost`** — outlined ghost. Transparent fill, near-black text, 1px `#e5e5e5` border. Same dimensions.

**`button-text-link`** — plain inline link. Near-black text, hover flips to coral or underlines.

### Cards

**`card-feature`** — feature card. White surface, 16px radius, 1px `#e5e5e5` hairline border, 32px internal padding. Stack: optional coral icon, h4 title, body description, optional inline link. On hover: subtle `rgba(15,15,15,0.04) 0 4px 12px` shadow + 1px translateY(-1) lift.

**`card-section`** — section-grey card. `#f5f5f5` ground, 16px radius, no border, 32px padding. Used for compact feature blocks within a section.

**`card-coral`** — coral-tinted feature card. `#fff5f4` ground, 16px radius, no border, 32px padding. Used for the brand-emphasized "Built by devs" or "Built different" feature blocks.

**`card-pricing`** — pricing tier. White surface, 16px radius, 1px hairline border, 32px padding. Recommended tier highlights with 2px `#ff6e6c` coral border.

**`card-dark`** — dark-mood card. `#1a1a1a` ground, 16px radius, 32px padding, white text. Used in footer-strip closing CTA.

**`card-stat`** — metric card. White surface, 16px radius, 32px padding. Massive Inter 56/500 metric with `tnum`, eyebrow label below.

### Badges, Tags, Pills

**`pill-eyebrow-coral`** — coral eyebrow pill. Soft coral `#fff5f4` ground, brand `#ff6e6c` text, 9999px radius, 4×10px padding, 12/500 Inter uppercase. "NEW", "BETA", "DEVELOPER".

**`pill-eyebrow-grey`** — neutral eyebrow pill. Soft grey `#f5f5f5` ground, near-black text. Same dimensions.

**`pill-status-success`** — success-green text on `#e6f6ec` surface, 9999px.

**`pill-status-error`** — danger-red text on `#fdebeb` surface.

### Inputs / Forms

**`input`** — text input. White surface, 1px `#d4d4d4` hairline (slightly darker than card border for utility), **6px radius**, 40px height, 10×12px padding. Placeholder in `#787878`. On focus: 2px `#ff6e6c` coral ring with 2px outline-offset.

**`textarea`** — same as input with auto-grow.

**`select-dropdown`** — same as input with chevron-down icon.

**`checkbox`** — 16×16px, 4px radius, 1px hairline border. On checked: coral fill, white check.

**`radio`** — 16×16px circle, 1px hairline border. On selected: coral fill, white dot.

### Navigation

**`navbar-top`** — top nav. `rgba(255,255,255,0.85)` ground with `backdrop-blur(8px)` — frosted-glass navbar. 1px `#efefef` bottom border, 64px height. Kinde wordmark flush left in near-black with the small coral mark. Product / docs / pricing / customers in 14/500 Inter centre. Sign-in text link + primary near-black CTA flush right.

**`mega-menu`** — opens from product nav. White surface, 8px radius, 1px hairline border, 24px padding, soft shadow. Multi-column nav with eyebrow group titles and 14/500 link rows.

**`footer`** — `#0f0f0f` deep ground, 5-column link list at desktop. Eyebrow group titles in 12/500 uppercase, link rows in 14/400 muted, social row at the bottom. Wordmark at the bottom-left.

**`breadcrumb`** — muted text with `›` separators, 13/400 Inter.

### Tooltips, Toasts, Modals

**`tooltip`** — `#1a1a1a` ground, 6px radius, 8×10px padding, 12/400 white text, 6px arrow.

**`toast`** — bottom-right corner. White surface, 8px radius, 1px hairline, 16×20px padding, 14/400 ink text.

**`modal`** — centred dialog over `rgba(15,15,15,0.48)` scrim. White surface, 16px radius, 1px hairline border, 32px padding, `rgba(15,15,15,0.16) 0 24px 48px` shadow.

### Code Block

**`code-block`** — `#0f0f0f` near-black ground, 12px radius, 20×24px padding. JetBrains Mono 13/400. Coral keywords, light-blue strings, white default text. Optional copy button top-right.

### Decorative

**`brand-mark-bounce`** — page-load wordmark icon bounce — small spring-eased overshoot animation (scale 1.0 → 1.15 → 1.0 over 600ms with bounce easing). Plays once on first visit, then sits static. The page's only deliberately playful moment.

**`pricing-illustration`** — line-art illustrations of auth flows, billing tiers, and access management. Warm-grey strokes on white ground, coral highlights on key paths. The signature illustrative element.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160`
- Hero padding (vertical): **128px** at desktop
- Section padding: **96–128px** between major sections
- Card internal padding: **32px** for feature cards
- Gutter: **24px** between feature cards in 2-column; 32px in 3-column

### Grid & Container

- Max content width: **1280px** centred
- Hero: full-width with copy capped at 720px prose width
- Feature grid: 2-column at desktop with 24px gutter; 3-column for compact features
- Pricing: 4-column tier comparison cards; "Pro" tier coral-bordered
- Editorial 1-column: hero + body for blog and customer-story pages

### Whitespace Philosophy

Kinde gives sections **modern dev-tool breath** — 96–128px between bands, 32px internal card padding. The hero band is 128px tall (less than WorkOS's 160px enterprise gravitas; more than Vercel's 80px sharp dev-tool). The result feels considered but warm — Kinde is positioned as the friendly-yet-professional dev-tool, not the premium-enterprise platform.

### Section Cadence

The page alternates **white canvas (`#ffffff`) → soft white (`#fafafa`) → white → section grey (`#f5f5f5`) → white → coral tint (`#fff5f4`) → dark mood-zone (`#0f0f0f`)**. The coral-tinted section appears 1–2 times per page for the brand-emphasized "Built by devs" moment. The dark mood-zone is the closing CTA strip.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Dense tag corners |
| Small | 4px | Checkboxes |
| Default | 6px | Buttons, inputs, dropdowns |
| Standard | 8px | Larger CTAs, mega-menu |
| Comfortable | 12px | Code blocks |
| Card | 16px | Feature cards, modals, pricing |
| Pill | 9999px | Eyebrow pills, status pills |

The default radius is **6px** — sweet-spot between WorkOS's 2px (architectural) and Linear's 8px (neutral). Cards step up to 16px for a slightly more rounded feel that ties to the friendly voice.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body sections |
| 1 — Hairline | `1px #e5e5e5` border | Cards at rest |
| 2 — Hover | `rgba(15,15,15,0.04) 0 4px 12px` | Hovered cards, mega-menu |
| 3 — Elevated | `rgba(15,15,15,0.08) 0 16px 32px` | Mega-menu, sticky bars |
| 4 — Modal | `rgba(15,15,15,0.16) 0 24px 48px` | Centred dialog |
| 5 — Focus | `0 0 0 2px #ff6e6c` ring | Focused inputs and buttons |

### Shadow Philosophy

Kinde's depth is **architectural with one warm focus accent**. Hairline borders dominate at rest. Hover introduces a subtle 4% shadow. The coral focus ring is the only chromatic depth — it doubles as brand affordance and a11y indicator.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu
- **Bounce**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — wordmark bounce (rare playful overshoot)

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 120ms | Hover colour swap, focus ring fade-in |
| Standard | 200ms | Card hover, mega-menu open |
| Slow | 320ms | Modal enter, hero reveal |
| Bounce | 600ms | Wordmark page-load overshoot |

### Per-Component Recipes

- **CTA hover (primary)**: near-black brightens `#0f0f0f` → `#1f1f1f` over 120ms.
- **CTA hover (coral)**: coral brightens `#ff6e6c` → `#ff8584` over 120ms.
- **Card hover**: 1px translateY(-1) + subtle 4% shadow over 200ms; border deepens slightly.
- **Hero reveal**: sections fade-up from `translateY(16px)/opacity 0` → `0/1` over 320ms emphasized.
- **Wordmark bounce**: page-load only — wordmark icon scales 1.0 → 1.15 → 1.0 over 600ms with bounce easing.
- **Mega-menu open**: 200ms fade + 4px slide-down.
- **Modal enter**: scrim fades in 200ms; dialog enters from `translateY(8px)/opacity(0)` → `0/1` over 320ms emphasized.
- **Link hover**: ink → coral over 120ms.

### Page Transitions

Page-to-page navigation uses no transition — hard navigation. Kinde prioritises perceived speed.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Wordmark bounce becomes static. Hero reveal and card hover translateY suppress (opacity-only).

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #2b2b2b body on #ffffff | 13.0 | AAA |
| #0f0f0f heading on #ffffff | 18.5 | AAA |
| #ff6e6c coral on #ffffff | 3.5 | AA large only |
| #ffffff on #0f0f0f near-black CTA | 18.5 | AAA |
| #ffffff on #ff6e6c coral CTA | 3.5 | AA large only at body sizes |
| #5a5a5a muted on #ffffff | 7.4 | AAA |
| #0f8a4d success on #e6f6ec | 5.4 | AA |
| #d92929 danger on #fdebeb | 6.0 | AA |

The coral CTA pair sits at **3.5 — AA large only**. Kinde compensates by setting button labels in 14/500 (large-text threshold) and by using the coral CTA selectively — primary CTAs default to near-black `#0f0f0f`, which sits at AAA.

### Focus Indicators

Focus ring is **2px solid `#ff6e6c` (coral) with 2px outline-offset**. The coral ring is both brand affordance and accessibility indicator.

### ARIA Patterns

- **Top nav**: `role="navigation"`, `aria-label="Primary"`. Mega-menu uses `role="menu"` with `role="menuitem"`.
- **Pricing tier cards**: `<h3>` heading, recommended tier `aria-current="recommended"`.
- **Modal**: `role="dialog"`, `aria-modal="true"`, focus trap, Esc closes.
- **Tooltip**: `role="tooltip"`, on `:hover` and `:focus`.
- **Code blocks**: `role="region"`, `aria-label="Code example"`. Copy button `aria-live="polite"`.
- **Brand-mark bounce**: `aria-hidden="true"` (decorative).

### Keyboard Navigation

- Tab: logo → product → pricing → docs → customers → sign in → primary CTA
- Mega-menu: arrow keys navigate, Esc closes
- Modal: focus trap, Tab cycles
- Skip-to-main visible on first Tab

### Screen Reader Hints

- Brand-mark bounce decorative-only
- Pricing tier names announced before price + features
- Code copy button announces success state

### Reduced Motion

Wordmark bounce becomes static. Hero reveal and card hover translateY suppress.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Nav collapses to hamburger; hero copy 40px; feature grid 1-up |
| Tablet | 640–1024px | Nav reveals product + sign-in; feature grid 2-up |
| Desktop | 1024–1280px | Full mega-menu; container caps at 1280px |
| Wide | 1280–1440px | Container stays 1280px |

### Touch Targets

- Primary CTAs: 36px — meets AA via hit-zone padding; 48px for hero variant
- Nav links: 36×16px
- Form inputs: 40px height
- Tag pills: 24px tall — non-interactive

### Collapsing Strategy

- Nav: product / docs / customers collapse to hamburger at <1024px
- Hero: 96px → 72px → 56px → 40px down breakpoints; tracking compresses proportionally
- Feature grid: 3-up → 2-up → 1-up; gutters 32 → 24 → 16px
- Pricing: 4-column → 2-column → 1-column; recommended tier surfaces first

### Image Behavior

Pricing illustrations use inline SVG. Customer logos use SVG. Photographic imagery is rare.

### Container Queries

Used in feature cards: when card width drops below ~280px, icon shifts above title.

## 11. Content & Voice

### Tone

Friendly, technical, slightly opinionated. Kinde's voice positions auth + billing + access as **a single platform built by devs who'd rather not rebuild this every time** — assumes the reader is a senior engineer or technical founder. Headlines lead with capability + warmth ("Auth, billing, and access management for modern SaaS products", "Built different"). The brand voice is friendlier than WorkOS but more rigorous than Clerk.

### Microcopy Patterns

- **Button verbs**: "Get started", "Book a demo", "Try free", "Read the docs", "View pricing"
- **Eyebrow labels**: 12/500 uppercase Inter — "BUILT DIFFERENT", "FOR DEVELOPERS", "WHAT'S NEW"
- **Error message recipe**: warm + actionable — "We couldn't reach the IdP. Verify the metadata URL or try again."
- **Success confirmations**: friendly + minimal — "All set. Test sign-in now."
- **Field labels**: short and friendly — "Domain", "Sign-in URL", "Customer email"
- **Doc links**: lead with verb — "Read the SDK guide", "View API reference"

### Empty States

- Empty users: "No users yet. Invite users or share a sign-up link to begin."
- Empty plans: "No plans yet. Create your first plan to start charging customers."
- Empty webhooks: "No webhooks yet. Add one to receive real-time events."

### CTA Verb Conventions

- Primary: "Get started", "Try free", "Book a demo"
- Secondary: "Read the docs", "View pricing", "See how it works"
- Tertiary: "Learn more →", "View changelog"
- Avoided: "Click here", "Submit", "Buy now"

## 12. Dark Mode & Theming

**Light-only on the marketing canvas with dark mood-zone footer.** Kinde's marketing canvas is light. The dark mood-zone (`#0f0f0f`) appears in the footer-strip closing CTA.

### Component Theming

The Kinde-branded components (`<KindeAuth />`, `<KindeBilling />`) ship with both light and dark themes:

```yaml
component-light:
  bg: '#ffffff'
  text: '#0f0f0f'
  border: '#e5e5e5'
  brand: '#ff6e6c'
  input-bg: '#fafafa'
  input-border: '#d4d4d4'

component-dark:
  bg: '#1a1a1a'
  text: '#ffffff'
  border: 'rgba(255,255,255,0.10)'
  brand: '#ff8584'   # brightens slightly on dark for AAA
  input-bg: '#0f0f0f'
  input-border: 'rgba(255,255,255,0.10)'
```

The brand coral `#ff6e6c` brightens to `#ff8584` on dark backgrounds for accessibility.

## 13. Lineage & Influences

Kinde's visual lineage runs through three traditions: **modern Inter-based dev-tool aesthetic** (Inter at 500 display weight, hairline-bordered cards, frosted-glass navbar with backdrop-blur — all canonical 2022+ dev-tool moves); **Stripe's confidence-via-restraint chromatic discipline** (single brand colour, generous whitespace, near-black primary CTA); and **Australian-startup approachability** (Kinde is built in Australia by ex-Canva engineers — the warmth and the friendly-coral accent reflect that lineage).

The **single coral accent** is the move that distinguishes Kinde. Where most auth platforms reach for blue (trust), violet (modern), or green (money), Kinde planted the pink-coral flag because it was an open chromatic position in the dev-tool palette. The hue is warm enough to read as friendly (not corporate-blue), bright enough to read as modern (not warm-orange-Etsy), and rare enough to be ownable — only a handful of dev-tools use coral as the primary accent.

What Kinde rejects: **dark canvases as primary** (light-first commitment), **enterprise blue trust** (coral instead), **photographic product screenshots** (line-art SVG illustrations), **decorative motion** (only the wordmark bounce is playful), and **multi-coloured feature accents** (single coral + rare violet for AI-only).

**Influences:**
- Inter (Rasmus Andersson) — typeface foundation, [rsms.me/inter](https://rsms.me/inter)
- Stripe — single brand colour discipline, hairline cards, [stripe.com](https://stripe.com)
- Vercel — frosted-glass navbar, backdrop-blur, [vercel.com](https://vercel.com)
- Linear — sub-100ms motion discipline, [linear.app](https://linear.app)
- Canva (Australian design lineage) — friendly-yet-professional voice, [canva.com](https://canva.com)
- JetBrains Mono — code-block typeface, [jetbrains.com/mono](https://www.jetbrains.com/lp/mono/)

## 14. Do's and Don'ts

**Do**
- Anchor the canvas on pure white `#ffffff` with section-grey `#f5f5f5` for alt sections
- Run hero display in Inter 72/500 with `-2.16px` (`-0.03em`) tracking
- Set body Inter at 16/400 with `-0.08px` letter-spacing — slightly tightened from web-default
- Use pink-coral `#ff6e6c` for focus rings, brand-emphasized CTAs, and wordmark mark
- Default primary CTA fill to near-black `#0f0f0f` — coral CTA is the brand-emphasized variant
- Use 6px button radius / 16px card radius — friendly-modern proportions
- Apply `backdrop-blur(8px)` at 85% opacity to the sticky navbar — modern dev-tool signal
- Render code blocks on near-black `#0f0f0f` ground with JetBrains Mono
- Use Inter across the entire scale — no display companion typeface
- Trigger the wordmark bounce once on page load — the page's only playful motion

**Don't**
- Don't introduce a second brand colour beyond coral + rare AI-violet
- Don't use button radius greater than 8px — 6px is the sweet-spot
- Don't substitute Inter — the typographic foundation is non-negotiable
- Don't tighten body letter-spacing below `-0.08px` — that's the body signature
- Don't use coral as the primary CTA fill globally — primary is near-black; coral is brand-emphasized
- Don't add atmospheric multi-layer shadows — hairline + 4% hover is the depth strategy
- Don't run Inter at weight 700 for display — Medium (500) is the discipline
- Don't tighten section padding below 96px — modern dev-tool breath
- Don't use serif for any element — Inter does the entire job
- Don't make every page bounce — wordmark bounce is once-on-page-load only

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #ffffff
Soft White:    #fafafa
Section Grey:  #f5f5f5
Body Ink:      #2b2b2b
Heading Ink:   #0f0f0f
Coral Brand:   #ff6e6c
Coral Light:   #ff8584
Coral Soft:    #fff5f4
Border:        #e5e5e5
Border Input:  #d4d4d4
Muted:         #5a5a5a
Dark Mood:     #0f0f0f
```

### Example Component Prompts

- "Create a Kinde-style hero section: pure-white canvas, 128px vertical padding. Hero copy in Inter 72/500 with `-2.16px` tracking, near-black ink (`#0f0f0f`). Eyebrow above in 12/500 uppercase Inter with 0.06em tracking, soft coral `#fff5f4` pill ground, brand `#ff6e6c` text. Sub-copy in Inter 18/400 with `-0.08px` letter-spacing, body-ink (`#2b2b2b`). Primary CTA: near-black (`#0f0f0f`) fill, white text, 14/500, 6px radius, 6×12px padding, 36px height. Secondary section-grey CTA: `#f5f5f5` fill, near-black text."
- "Build a Kinde feature card: white surface, 16px radius, 1px `#e5e5e5` hairline border, 32px padding. On hover: subtle 4% shadow + 1px translateY(-1) lift. Stack: optional coral icon, h4 title in Inter 24/500 with `-0.48px` tracking near-black, body description in Inter 16/400 with `-0.08px` body-ink, optional 'Read the docs →' link near-black with hover flipping to coral."
- "Design a Kinde pricing tier card: white surface, 16px radius, 32px padding. Default cards have 1px `#e5e5e5` border; the recommended ('Pro') tier highlights with 2px `#ff6e6c` coral border. Stack: tier name in 12/500 uppercase, price in Inter 56/500 with `tnum` and `-1.7px` tracking, '/month' caption in 14/400 muted, feature checklist with coral check icons, primary near-black CTA at the bottom."
- "Create a Kinde navbar: 64px tall, `rgba(255,255,255,0.85)` ground with `backdrop-blur(8px)` (frosted glass), 1px `#efefef` bottom border. Kinde wordmark flush left in near-black with the small coral mark beside. Nav links 'Product', 'Docs', 'Pricing', 'Customers' in Inter 14/500 near-black centre. Sign-in text link + primary near-black CTA flush right."
- "Build a Kinde code block: near-black (`#0f0f0f`) ground, 12px radius, 20×24px padding. JetBrains Mono 13/400. Coral (`#ff6e6c`) keywords (`import`, `const`, `function`), light-blue strings, white default text. Top-right copy button — small icon-only, transparent fill, hairline border."
- "Design a Kinde coral-tinted feature card: `#fff5f4` ground, 16px radius, 32px padding. Used 1–2 times per page for the brand-emphasized 'Built by devs' moment. Stack: coral icon, h4 title in Inter 24/500 near-black, body description in Inter 16/400 body-ink, 'Try free' coral CTA at the bottom."

### Iteration Guide

1. **Inter at the entire scale.** No display companion. Inter Medium at 500 weight for display, Inter Regular at 400 for body.
2. **Body at 16/400 with `-0.08px` letter-spacing.** This is the body signature — slightly tighter than web-default Inter.
3. **Pink-coral `#ff6e6c` for focus + brand emphasis only.** Primary CTA is near-black `#0f0f0f`. Don't make every CTA coral.
4. **6px button radius / 16px card radius.** Friendly-modern proportions. Don't soften to 8px buttons or harden to 4px cards.
5. **Frosted-glass navbar.** `backdrop-blur(8px)` at 85% opacity. Without it, the page reads as static dev-doc.
6. **`-2.16px` tracking on 72px H1.** That's `-0.03em` — substitute Inter at the same metrics if not Kinde-licensed.
7. **Single typeface discipline.** Don't add Inter Tight, Inter Display, or any other variant — single Inter does everything.
8. **Wordmark bounce once on page load.** The only playful moment. Don't add bounces elsewhere.
