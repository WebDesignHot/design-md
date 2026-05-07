---
name: Clerk
tagline: Geist + Suisse on near-black canvas with `#6c47ff` violet CTA — the drop-in-auth dev-tool aesthetic.
updated_at: 2026-05-04T21:19:12+12:00
published_at: 2026-05-04T20:53:02+12:00
author: webdesignhot
source_url: https://clerk.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, auth, sans, technical, dev-tool, drop-in, modern]
preview_swatch: ['#131316', '#6c47ff', '#ffffff']
related: [vercel, stripe, supabase]
description: 'Clerk''s site is the canonical drop-in-auth dev-tool canvas — a near-black ground (`#131316`) with absolute-white display in Geist Sans 700 at 64px and `-2.24px` tracking, body running Suisse / Geist at 16/400, and the unmistakable `#6c47ff` Clerk-purple as the single brand colour driving every primary CTA, the wordmark, and the focus ring. Where Auth0 commits to twilight blue and Stripe to single-blue trust, Clerk plants its flag on a vivid mid-purple that signals "modern dev-tool, not enterprise SaaS". The page architecture is unmistakably Vercel-coded — Geist as the primary type, Söhne Mono for monospace eyebrows, 6px button radius, sticky-spec product feel — but the violet brand colour and component-first marketing voice are pure Clerk. The result is the most-imitated authentication-dev-tool aesthetic of the early-2020s era.'

colors:
  bg: '#131316'                  # near-black canvas — Clerk default
  bg-section: '#1a1a1f'          # alt section ground
  bg-elevated: '#22222a'          # card / panel surface tier
  bg-deep: '#0a0a0c'              # deepest near-black for mood-zone footer
  surface: '#22222a'              # default elevated card surface
  surface-soft: '#1a1a1f'         # softer surface
  surface-strong: '#2c2c35'       # stronger surface for hovered cards
  surface-glass: 'rgba(255,255,255,0.04)' # glassy hover/active overlay
  text: '#ffffff'                # primary text — pure white on dark
  text-strong: '#ffffff'         # display text — same pure white
  text-muted: '#9394a1'          # eyebrow / muted body — observed h2 colour
  text-soft: '#7c7d8a'           # secondary muted
  text-faint: '#5e5f6b'          # tertiary muted, footer-meta
  text-on-brand: '#ffffff'       # white on Clerk-purple CTA
  text-link: '#6c47ff'           # default link in body
  text-link-hover: '#8a6dff'     # hover brightens
  brand: '#6c47ff'               # Clerk-purple — the signature brand colour
  brand-deep: '#5938e0'          # darker pressed state
  brand-light: '#8a6dff'         # hover brightening
  brand-pale: '#a48efc'          # palest brand-violet for halo tints
  brand-soft: 'rgba(108,71,255,0.16)' # soft brand surface for tags
  accent-pink: '#ff7a8a'         # secondary brand accent — pinkish coral
  accent-cyan: '#3acefa'         # cyan accent for code-block highlights
  accent-yellow: '#fff066'       # tertiary highlight (changelog "NEW")
  border: 'rgba(255,255,255,0.10)'   # default hairline on dark
  border-soft: 'rgba(255,255,255,0.06)'
  border-strong: 'rgba(255,255,255,0.16)'
  border-brand: '#6c47ff'        # focus / selected border
  hairline-cta: '#42434d'        # subtle CTA outline observed (rgb(66,67,77))
  on-brand: '#ffffff'
  on-dark: '#ffffff'
  scrim: 'rgba(0,0,0,0.72)'      # modal backdrop
  shadow-card: 'rgba(0,0,0,0.32)'
  shadow-elev: 'rgba(0,0,0,0.48)'
  shadow-glow-violet: 'rgba(108,71,255,0.32)'  # hero violet halo
  success: '#36d576'             # success green
  success-bg: 'rgba(54,213,118,0.12)'
  warning: '#ffb547'             # advisory amber
  danger: '#ef2236'              # error red
  danger-bg: 'rgba(239,34,58,0.12)'
  info: '#3acefa'

typography:
  display:
    family: 'geistSans, "Geist Sans", suisse, "suisse Fallback", -apple-system, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['ss01', 'ss02']
  body:
    family: 'geistSans, "Geist Sans", suisse, "suisse Fallback", -apple-system, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'soehneMono, "Söhne Mono", geistMono, "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400, 500]
  numbers:
    family: 'geistNumbers, "Geist Numbers", geistSans'
    weights: [400, 500, 700]
    opentype-features: ['tnum']
  scale:
    hero-display:    { size: 80, weight: 700, lineHeight: 1.05, tracking: '-2.8px',  family: display, opentype: ['ss01'] }
    h1:              { size: 64, weight: 700, lineHeight: 1.12, tracking: '-2.24px', family: display, opentype: ['ss01'] }
    h2-eyebrow-mono: { size: 11, weight: 500, lineHeight: 1.63, tracking: '0.10em',  family: mono,   transform: uppercase }
    h2:              { size: 40, weight: 700, lineHeight: 1.10, tracking: '-1.4px',  family: display, opentype: ['ss01'] }
    h3:              { size: 28, weight: 600, lineHeight: 1.20, tracking: '-0.5px',  family: display }
    h4:              { size: 18, weight: 600, lineHeight: 1.33, tracking: '-0.2px',  family: display }
    h5:              { size: 16, weight: 600, lineHeight: 1.40, tracking: '-0.1px',  family: display }
    eyebrow-uppercase: { size: 11, weight: 500, lineHeight: 1.63, tracking: '0.10em', family: mono, transform: uppercase }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',       family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.40, tracking: '0',       family: body }
    button-label:    { size: 13, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body }
    nav-link:        { size: 13, weight: 500, lineHeight: 1.20, tracking: '0',       family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.40, tracking: '0',       family: body }
    micro:           { size: 11, weight: 400, lineHeight: 1.40, tracking: '0.01em',  family: body }
    code-inline:     { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',       family: mono }
    code-block:      { size: 13, weight: 400, lineHeight: 1.55, tracking: '0',       family: mono }
    pricing-display: { size: 48, weight: 700, lineHeight: 1.0,  tracking: '-1.4px',  family: numbers, opentype: ['tnum'] }
    metric:          { size: 32, weight: 700, lineHeight: 1.0,  tracking: '-0.5px',  family: numbers, opentype: ['tnum'] }

radius:
  micro: 2
  sm: 4
  md: 6           # default button — observed
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
    bg: '#6c47ff'
    color: '#ffffff'
    radius: 6
    padding: '8px 16px'
    height: 36
    font: button-label
    use: 'Primary CTA — Clerk violet fill. "Sign up", "Get started", "Talk to sales".'
  button-primary-large:
    bg: '#6c47ff'
    color: '#ffffff'
    radius: 8
    padding: '12px 24px'
    height: 44
    use: 'Hero-size primary CTA at 44px height for prominent moments.'
  button-secondary-glass:
    bg: '#42434d'
    color: '#ffffff'
    radius: 6
    padding: '8px 16px'
    height: 36
    use: 'Secondary CTA on dark — glassy mid-grey, hover brightens.'
  button-ghost:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid rgba(255,255,255,0.10)'
    radius: 6
    padding: '8px 16px'
    height: 36
    use: 'Outlined ghost — secondary action.'
  button-text-link:
    bg: 'transparent'
    color: '#6c47ff'
    use: 'Inline link or "Read the docs →" — violet hover brightens to #8a6dff.'
  card-feature:
    bg: '#1a1a1f'
    color: '#ffffff'
    radius: 16
    padding: '32px'
    border: '1px solid rgba(255,255,255,0.06)'
    use: 'Feature card on dark — soft border, generous internal padding.'
  card-component-demo:
    bg: '#22222a'
    color: '#ffffff'
    radius: 16
    padding: '24px'
    border: '1px solid rgba(255,255,255,0.10)'
    use: 'Live component-demo card showing the actual <SignIn /> component embedded.'
  card-pricing:
    bg: '#1a1a1f'
    color: '#ffffff'
    radius: 16
    padding: '32px'
    border: '1px solid rgba(255,255,255,0.10)'
    use: 'Pricing tier card — Pro tier gets violet `#6c47ff` border highlight.'
  input-dark:
    bg: '#22222a'
    color: '#ffffff'
    border: '1px solid rgba(255,255,255,0.10)'
    focus: '0 0 0 2px #6c47ff'
    radius: 6
    height: 40
    padding: '10px 12px'
    placeholder: '#7c7d8a'
    use: 'Form input on dark — violet focus ring.'
  navbar-top:
    bg: 'rgba(19,19,22,0.72) backdrop-blur(8px)'
    color: '#ffffff'
    height: 64
    border-bottom: '1px solid rgba(255,255,255,0.06)'
    use: 'Translucent + blur navbar — Vercel-style sticky header on dark.'
  code-block:
    bg: '#1a1a1f'
    color: '#ffffff'
    radius: 12
    padding: '20px 24px'
    border: '1px solid rgba(255,255,255,0.06)'
    use: 'Söhne Mono code block — violet keyword syntax, cyan strings.'
  pill-eyebrow:
    bg: 'rgba(108,71,255,0.16)'
    color: '#a48efc'
    radius: 9999
    padding: '4px 10px'
    use: 'Eyebrow pill — "NEW", "BETA", "AVAILABLE NOW".'
  pill-tag-mono:
    bg: 'transparent'
    color: '#9394a1'
    radius: 9999
    padding: '2px 8px'
    border: '1px solid rgba(255,255,255,0.10)'
    use: 'Mono-eyebrow tag — Söhne Mono uppercase 11/500.'
  modal:
    bg: '#1a1a1f'
    color: '#ffffff'
    radius: 16
    padding: '32px'
    border: '1px solid rgba(255,255,255,0.10)'
    shadow: 'rgba(0,0,0,0.48) 0 24px 48px'
    use: 'Centred dialog over scrim.'
  signin-component:
    bg: '#22222a'
    color: '#ffffff'
    radius: 16
    padding: '32px'
    border: '1px solid rgba(255,255,255,0.10)'
    use: 'The `<SignIn />` component itself — Clerk''s signature drop-in UI.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'   # for component-demo bounces
  duration-fast: 100
  duration-standard: 200
  duration-slow: 300
  duration-component-demo: 600
  cta-hover: 'violet brightens 6c47ff → 8a6dff over 100ms'
  card-hover: 'border opacity 0.06 → 0.12 over 200ms; subtle 1px translateY(-1)'
  hero-glow: 'soft 320px violet halo behind hero copy — static (no breathing animation)'
  component-tab-switch: 'spring-eased 600ms morph between component states (sign-in → sign-up → user-button)'
  reveal: 'sections fade-up from translateY(16px)/opacity 0 → 0/1 over 300ms standard ease'
  reduced-motion: 'respects prefers-reduced-motion: reduce — component morphs become instant swaps; reveal degrades to opacity-only.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  ambient: 'rgba(0,0,0,0.32) 0 1px 2px'
  card: 'rgba(0,0,0,0.32) 0 8px 24px'
  elevated: 'rgba(0,0,0,0.48) 0 16px 32px'
  modal: 'rgba(0,0,0,0.48) 0 24px 48px'
  ring-violet: '0 0 0 2px #6c47ff'
  hero-halo: '0 0 320px 0 rgba(108,71,255,0.32)'

accessibility:
  contrast-text-on-bg: 16.1         # #ffffff on #131316 — AAA
  contrast-muted-on-bg: 6.8         # #9394a1 on #131316 — AA at body sizes
  contrast-on-violet-cta: 5.6       # #ffffff on #6c47ff — AA at body sizes
  contrast-link-on-bg: 5.4          # #6c47ff on #131316 — AA large
  contrast-link-hover-on-bg: 7.2    # #8a6dff on #131316 — AAA
  focus-ring: '2px solid #6c47ff + 2px outline-offset (Clerk-violet ring)'
  reduced-motion-honored: true
  touch-target-min: 36
  keyboard-nav: 'Tab moves logo → product nav → docs → pricing → sign in → primary CTA; arrow keys navigate component-demo tabs.'

dark-mode: native    # Clerk ships dark-first; light theme available for `<SignIn />` component but marketing site is dark-only

lineage:
  summary: |
    Clerk's marketing site is the canonical modern drop-in-auth dev-tool
    canvas — a near-black ground (`#131316`) with a subtle warm-violet
    undertone, white text in Geist Sans 700 at 64px / `-2.24px` tracking,
    and the unmistakable Clerk-violet (`#6c47ff`) as the single brand
    colour. The visual lineage is unmistakably Vercel-trained: the Geist
    typography, the near-black canvas, the mono-uppercase eyebrows in
    Söhne Mono, the 6px button radius, the backdrop-blur glassy navbar,
    the sub-100ms hover transitions — all canonical 2020–2022 dev-tool
    moves Vercel popularised and Clerk extended. What Clerk added was
    the component-as-marketing-asset move (borrowing from Stripe Elements):
    embedding the live `<SignIn />` component directly on the marketing
    page instead of showing screenshots. The brand colour Clerk-violet
    is the move that distinguishes Clerk from the rest of the Vercel-trained
    cohort — a deliberate flag-plant in an empty chromatic position in
    the dev-tool palette.
  influences:
    - name: Vercel
      role: Geist typeface, near-black canvas, glassy backdrop-blur navbar.
      url: https://vercel.com
    - name: Stripe Elements
      role: Embedded-component-as-marketing pattern — Clerk applies this to every component.
      url: https://stripe.com
    - name: Linear
      role: Sub-100ms motion discipline and hairline border depth strategy.
      url: https://linear.app
    - name: Klim Type Foundry
      role: Söhne Mono typeface for the mono-uppercase eyebrow signature.
      url: https://klim.co.nz
    - name: Resend
      role: Modern dev-tool brand-cyan precedent for choosing a single bright accent.
      url: https://resend.com
---

## 1. Visual Theme & Atmosphere

Clerk's marketing site is the canonical **modern drop-in-auth dev-tool canvas** — a near-black ground (`#131316`) anchored on absolute white text and the unmistakable Clerk-purple (`#6c47ff`) as the single brand colour. The page reads as a Vercel-trained dev-tool with a violet voice — tight 64px Geist Sans 700 display, mono-uppercased eyebrows, glassy navbar with backdrop-blur, sub-100ms hover transitions. It feels like a modern engineering tool that respects the developer's time: every CTA names the outcome, every component is a live demo of the actual product, every page is a study in restraint.

The chromatic system is **dark-canvas + white-text + Clerk-violet**. The canvas at `#131316` is slightly warmer than pure `#000000` — a deliberate ~3% lift toward purple to give the page a subtle violet tonal undertone that ties to the brand colour. White text runs at full `#ffffff` (Clerk doesn't soften it to off-white; the contrast is intentional). Eyebrow / muted text drops to `#9394a1` — a neutral cool-grey, never tinted. Clerk-violet `#6c47ff` is the only brand colour: it carries every primary CTA, every focus ring, every active-state highlight, and the wordmark. Hover brightens to `#8a6dff`, pressed darkens to `#5938e0`. There is no secondary brand colour — purple is the entire identity.

Type runs **Geist** (the Vercel-released open-source typeface) with **Suisse** as the fallback. Display is Geist Sans at 64–80px / 700 with `-2.24px` tracking, body is Geist / Suisse 16/400. Eyebrows are **Söhne Mono** (or Geist Mono fallback) at 11/500 uppercase with `0.10em` letter-spacing — the mono-uppercase eyebrow is the typographic signature, immediately marking the page as "modern dev-tool". Pricing display uses Geist Numbers at 48/700 with `tnum` for tabular figures.

Shape language is **6–16px radii** with tight, restrained curves. Buttons round at 6px (compact, dev-tool default), feature cards at 16px, code blocks at 12px. Pills are 9999px and used only for status / eyebrow tags. There are no hero shells with 24px+ radii — Clerk keeps the radius scale modest to read as engineering tool rather than marketing landing page.

The signature visual element is the **live `<SignIn />` component embedded directly on the marketing page**. Where competitors show product screenshots, Clerk shows the actual interactive sign-in component running in real time — you can type in it, the social-login buttons work, the form validates. This component-as-marketing-asset move is unique to Clerk and is the literal proof of "drop-in auth": the demo IS the product.

**Key Characteristics:**
- Near-black canvas (`#131316`) with subtle warm-violet undertone — never pure black
- Geist Sans 700 display at 64px with `-2.24px` tracking — the Vercel-trained typographic foundation
- Söhne Mono uppercase eyebrows (11/500, 0.10em tracking) — the dev-tool typographic signature
- Single brand colour: Clerk-violet `#6c47ff` — wordmark, every primary CTA, focus ring, active state
- Live `<SignIn />` component embedded as the hero — the demo IS the product
- Glassy backdrop-blur navbar at 72% opacity — Vercel-style sticky header
- 6px button radius, 16px card radius — tight engineering-tool proportions
- Soft 320px violet halo glow behind hero copy — static (no breathing)
- Sub-100ms hover transitions — Clerk respects developer time
- Spring-eased component-demo tab morphs (600ms) — the page's only emphasized motion

## 2. Color Palette & Roles

### Primary

- **Canvas** (`#131316`) — default page ground. Near-black with a subtle warm-violet tonal undertone (the ~3% lift toward purple ties it to the brand).
- **Section** (`#1a1a1f`) — alt section ground; one tier above canvas.
- **Surface** (`#22222a`) — card / panel ground; two tiers above canvas.
- **Surface Strong** (`#2c2c35`) — hovered card surface.
- **Deep** (`#0a0a0c`) — deepest near-black for footer / mood-zone sections.
- **Text** (`#ffffff`) — primary text colour. Pure white, never softened to off-white.
- **Text Muted** (`#9394a1`) — secondary text, eyebrows, captions. Cool-grey neutral.
- **Text Soft** (`#7c7d8a`) — placeholder, faint metadata.
- **Text Faint** (`#5e5f6b`) — footer micro-text, disabled states.

### Brand & Dark

- **Clerk Violet** (`#6c47ff`) — the signature brand colour. Wordmark, every primary CTA, focus ring, active-state highlight, link colour on dark.
- **Brand Light** (`#8a6dff`) — hover brightening.
- **Brand Deep** (`#5938e0`) — pressed/active state.
- **Brand Pale** (`#a48efc`) — palest tint for halo glows and pill text.
- **Brand Soft** (`rgba(108,71,255,0.16)`) — soft violet surface for badges and selected tags.

### Accent

- **Accent Pink** (`#ff7a8a`) — secondary brand-adjacent coral, used in marketing illustrations.
- **Accent Cyan** (`#3acefa`) — cyan accent for code-block syntax highlighting (strings, types).
- **Accent Yellow** (`#fff066`) — tertiary highlight for changelog "NEW" badges.

### Interactive

- **Link on dark** (`#6c47ff`) — Clerk-violet, often without underline (icon `→` indicates link).
- **Link hover** (`#8a6dff`) — violet brightens.
- **Selected** (`#6c47ff`) — 2px violet border on selected pricing tier, focused inputs.
- **Disabled** (`rgba(255,255,255,0.32)`) text on `rgba(255,255,255,0.06)` surface.

### Neutral Scale

- **White** (`#ffffff`) — pure
- **Muted** (`#9394a1`)
- **Soft** (`#7c7d8a`)
- **Faint** (`#5e5f6b`)
- **Hairline CTA** (`#42434d`) — secondary button background
- **Surface Strong** (`#2c2c35`)
- **Surface** (`#22222a`)
- **Section** (`#1a1a1f`)
- **Canvas** (`#131316`)
- **Deep** (`#0a0a0c`)

### Surface & Borders

- **Border** — `rgba(255,255,255,0.10)` — default hairline
- **Border Soft** — `rgba(255,255,255,0.06)` — softer inter-card hairline
- **Border Strong** — `rgba(255,255,255,0.16)` — emphasized hairline (focus-adjacent borders)
- **Border Brand** — `#6c47ff` — focus ring or selected state
- **Border CTA Hairline** — `#42434d` — observed on secondary CTAs

### Shadow Colors

Clerk's shadow palette is **deep neutral with one violet glow accent**. The atmospheric depth comes from the hero violet halo, not from layered shadows on cards.

- `rgba(0,0,0,0.32) 0 1px 2px` — ambient
- `rgba(0,0,0,0.32) 0 8px 24px` — card hover
- `rgba(0,0,0,0.48) 0 16px 32px` — elevated
- `rgba(0,0,0,0.48) 0 24px 48px` — modal
- `0 0 320px 0 rgba(108,71,255,0.32)` — hero halo

### Semantic

- **Success Green** (`#36d576`) — used in changelog and success toasts
- **Warning Amber** (`#ffb547`) — advisory state
- **Danger Red** (`#ef2236`) — error state
- **Info Cyan** (`#3acefa`) — informational

## 3. Typography Rules

### Font Family

**Display & Body**: `Geist Sans` (Vercel, 2024, open-source) with `Suisse` as the legacy fallback. Geist is a geometric grotesque designed for technical interfaces — open apertures, slightly tighter than Inter. Clerk runs Geist at weights 400, 500, 600, and 700.

**Mono**: `Söhne Mono` (Klim Type Foundry) is the canonical eyebrow / code-block font, with `Geist Mono` as the modern fallback. Used for uppercase eyebrows, code blocks, and inline code.

**Numbers**: `Geist Numbers` (Geist's monospaced numeric variant) is used for pricing display and metrics — provides `tnum` tabular figures.

**OpenType features**: `ss01` and `ss02` enabled on display Geist for the alternate-`a` and alternate-`g` forms. `tnum` enabled on all numeric display.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | Geist Sans | 80 | 700 | 1.05 | -2.8px | ss01 | Hero — "The most comprehensive User Management Platform" |
| h1 | Geist Sans | 64 | 700 | 1.12 | -2.24px | ss01 | Page title — observed on pricing |
| h2-eyebrow-mono | Söhne Mono | 11 | 500 | 1.63 | 0.10em uppercase | — | Section eyebrow — "PRICING", "FEATURES" |
| h2 | Geist Sans | 40 | 700 | 1.10 | -1.4px | ss01 | Section heading |
| h3 | Geist Sans | 28 | 600 | 1.20 | -0.5px | — | Sub-section |
| h4 | Geist Sans | 18 | 600 | 1.33 | -0.2px | — | Feature card title |
| h5 | Geist Sans | 16 | 600 | 1.40 | -0.1px | — | Sub-feature |
| body-lg | Geist Sans | 18 | 400 | 1.55 | 0 | — | Hero sub-copy |
| body-md | Geist Sans | 16 | 400 | 1.50 | 0 | — | Default body |
| body-sm | Geist Sans | 14 | 400 | 1.50 | 0 | — | Secondary body |
| label | Geist Sans | 13 | 500 | 1.40 | 0 | — | Form labels, sub-nav |
| button-label | Geist Sans | 13 | 500 | 1.0 | 0 | — | Button text — note 13/500 default |
| nav-link | Geist Sans | 13 | 500 | 1.20 | 0 | — | Top nav |
| caption | Geist Sans | 12 | 400 | 1.40 | 0 | — | Captions |
| micro | Geist Sans | 11 | 400 | 1.40 | 0.01em | — | Footer legal |
| code-inline | Söhne Mono | 14 | 400 | 1.50 | 0 | — | Inline `<code>` |
| code-block | Söhne Mono | 13 | 400 | 1.55 | 0 | — | Code panel |
| pricing-display | Geist Numbers | 48 | 700 | 1.0 | -1.4px | tnum | "$0", "$25" |
| metric | Geist Numbers | 32 | 700 | 1.0 | -0.5px | tnum | Metric callouts |

### Principles

- **Geist Sans 700 with negative tracking is the display signature.** `-2.24px` on h1 is the marker — substitute Inter at weight 700 with `-0.04em` to approximate.
- **Mono-uppercase eyebrows are the typographic signature.** Söhne Mono 11/500 uppercase with 0.10em tracking. Without the mono eyebrow, Clerk reads as generic dev-tool.
- **Body at 16/400, hero sub-copy at 18/400.** Clerk uses 16 not 17 for body; the Vercel-trained foundation favors slightly tighter.
- **`tnum` on every price and metric.** Geist Numbers ensures alignment.
- **No serif, anywhere.** Clerk commits to a sans-only system; even pull-quotes use Geist 24/400 italic.
- **Tighter tracking than Stripe.** Clerk's `-2.24px` at 64px (≈ -0.035em) is tighter than Stripe's `-0.025em` — modern dev-tool, not financial-platform.
- **Inter is the closest open-source substitute.** Use Inter at the same weights with slightly tighter tracking; pair with JetBrains Mono for the eyebrow.

## 4. Component Stylings

### Buttons

**`button-primary`** — Clerk-violet (`#6c47ff`) fill, white text, 13/500 Geist Sans, 6px radius, 8×16px padding, 36px height. Hover brightens to `#8a6dff`. Used for "Sign up", "Get started", "Talk to sales".

**`button-primary-large`** — same colour scheme, 8px radius, 12×24px padding, 44px height. Used for hero-prominent CTAs.

**`button-secondary-glass`** — `#42434d` (warm dark grey) fill, white text. Same dimensions as primary. Hover brightens by 10%.

**`button-ghost`** — transparent fill, white text, 1px `rgba(255,255,255,0.10)` border. Used for "Read the docs" alongside the primary.

**`button-text-link`** — plain violet text (`#6c47ff`), often with `→` arrow icon. Hover brightens to `#8a6dff`. No underline by default.

**`button-icon`** — 32×32 square button, 6px radius, transparent fill, white icon. Used for menu toggles and copy-to-clipboard.

### Cards

**`card-feature`** — feature card. `#1a1a1f` surface, 16px radius, 1px `rgba(255,255,255,0.06)` border, 32px internal padding. Stack: optional violet icon, h4 title, body description, optional inline `→` link.

**`card-component-demo`** — live component demo. `#22222a` surface, 16px radius, 1px `rgba(255,255,255,0.10)` border, 24px padding. Embeds the actual `<SignIn />`, `<UserButton />`, or `<OrganizationSwitcher />` component running interactively.

**`card-pricing`** — pricing tier. `#1a1a1f` surface, 16px radius, 32px padding. The recommended ("Pro") tier has a 2px `#6c47ff` border instead of the default hairline.

**`card-stat`** — metric card. `#22222a` surface, 16px radius, 32px padding. Massive Geist Numbers 32/700 metric, eyebrow label below.

### Badges, Tags, Pills

**`pill-eyebrow`** — soft brand surface `rgba(108,71,255,0.16)` ground, brand-pale `#a48efc` text, 9999px radius, 4×10px padding, 11/500 Söhne Mono uppercase. "NEW", "BETA", "AVAILABLE NOW".

**`pill-tag-mono`** — outlined mono tag. Transparent fill, muted text `#9394a1`, 1px `rgba(255,255,255,0.10)` border, 11/500 Söhne Mono uppercase. Used in changelog and feature lists.

**`pill-status`** — semantic status pill. Success: `rgba(54,213,118,0.12)` ground + `#36d576` text. Error: `rgba(239,34,58,0.12)` ground + `#ef2236` text.

### Inputs / Forms

**`input-dark`** — `#22222a` surface, white text, 1px `rgba(255,255,255,0.10)` border, 6px radius, 40px height, 10×12px padding. Placeholder in `#7c7d8a`. On focus: 2px `#6c47ff` violet ring.

**`textarea`** — same as input with auto-grow.

**`select-dropdown`** — same as input with chevron-down icon flush right.

**`checkbox`** — 16×16px, 4px radius, hairline border default. On checked: violet fill, white check.

**`radio`** — 16×16px circle, hairline border. On selected: violet fill, white dot.

### Navigation

**`navbar-top`** — top nav. `rgba(19,19,22,0.72)` ground with `backdrop-blur(8px)`, 1px `rgba(255,255,255,0.06)` bottom border, 64px height. Clerk wordmark flush left in white. Product / docs / pricing / customers links flush right in 13/500 Geist Sans. Sign-in link + primary CTA flush right end.

**`mega-menu`** — opens from product nav. `#1a1a1f` surface, 16px radius, 1px hairline border, 32px padding, soft shadow. Multi-column nav with mono-uppercase eyebrow titles and feature row links.

**`footer`** — `#0a0a0c` deep ground, 5-column link list at desktop. Eyebrow group titles in mono-uppercase, link rows in 13/400 muted, social row at the bottom.

**`breadcrumb`** — muted text `#9394a1` with `/` separators, 13/400.

### Tooltips, Toasts, Modals

**`tooltip`** — `#22222a` ground, 6px radius, 8×10px padding, 12/400 white text, ambient shadow.

**`toast`** — bottom-right corner. `#1a1a1f` ground, 12px radius, 1px hairline, 16×20px padding, 14/400 white text. Auto-dismiss 5s.

**`modal`** — centred dialog over `rgba(0,0,0,0.72)` scrim. `#1a1a1f` surface, 16px radius, 1px `rgba(255,255,255,0.10)` border, 32px padding, 24×48px shadow.

### Code Block

**`code-block`** — `#1a1a1f` ground, 12px radius, 1px `rgba(255,255,255,0.06)` border, 20×24px padding. Söhne Mono 13/400. Violet (`#6c47ff`) keywords, cyan (`#3acefa`) strings, white default text. Optional copy button top-right.

### Decorative

**`hero-halo`** — soft 320px-radius violet glow behind hero copy. Static (no breathing animation, unlike Auth0). `0 0 320px 0 rgba(108,71,255,0.32)`.

**`signin-component`** — the actual `<SignIn />` component running on marketing pages. `#22222a` surface, 16px radius, 1px hairline, 32px padding. Stacks: app logo, "Sign in to [App]" title, social provider buttons (Google, GitHub, Apple), divider with "or", email input, primary violet CTA "Continue", "Don't have an account?" link.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160`
- Hero padding (vertical): **128px** at desktop
- Section padding: **96–128px** between major sections
- Card internal padding: **32px** for feature cards, **24px** for component-demo cards
- Gutter: **24px** between feature cards in 2- or 3-column layout

### Grid & Container

- Max content width: **1200px** centred
- Hero: full-width with violet halo extending beyond container; copy capped at 720px prose width
- Feature grid: 2-column at desktop with 24px gutter; 3-column for compact features
- Pricing: 4-column tier comparison cards; "Pro" tier is highlighted with violet border
- Component-demo grid: 2-column where the live `<SignIn />` is alongside descriptive copy

### Whitespace Philosophy

Clerk gives sections **modern dev-tool breath**: 96–128px between major bands, 32px internal card padding, 24px gutters. The hero band is 128px tall (less cinematic than Auth0's 160px, more like a Vercel landing page). The result feels considered but not theatrical — engineering tool, not consumer marketing.

### Section Cadence

The page alternates **canvas (`#131316`) → section (`#1a1a1f`) → canvas → component-demo zone → canvas**. The component-demo zones break the rhythm with a `#22222a` surface card containing the live `<SignIn />` component — these are the page's most-styled moments. There is no light-flip section; Clerk commits to dark-only on the marketing canvas.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Dense table corners |
| Small | 4px | Checkboxes, radio outlines |
| Default | 6px | Buttons, inputs, dropdowns |
| Standard | 8px | Larger CTAs, small panels |
| Comfortable | 12px | Code blocks |
| Card | 16px | Feature cards, modals, component-demo |
| Pill | 9999px | Status pills, eyebrow tags |

The default radius is **6px** — slightly tighter than the conventional 8px most modern dev-tools use. Cards step up to 16px (one tier above the standard 12px). There are no compound radii.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body sections, navbar at top |
| 1 — Hairline | `1px rgba(255,255,255,0.10)` border | Cards at rest |
| 2 — Card | `rgba(0,0,0,0.32) 0 8px 24px` | Hovered cards, mega-menu |
| 3 — Elevated | `rgba(0,0,0,0.48) 0 16px 32px` | Sticky bars, dropdown panels |
| 4 — Modal | `rgba(0,0,0,0.48) 0 24px 48px` | Centred dialog |
| 5 — Halo | `0 0 320px 0 rgba(108,71,255,0.32)` | Hero violet halo (decorative) |

### Shadow Philosophy

Clerk's depth is **two-channel**: hairline borders for rest state, deep-neutral shadows for hover/elevated, **violet halo** for hero atmosphere. The hairline border is the dominant rest treatment — most cards have no shadow, just a 1px `rgba(255,255,255,0.06)` or 0.10 border. On hover, the shadow appears alongside the brightening border. The hero halo is the only decorative depth on the page.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus, fade
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu
- **Spring**: `cubic-bezier(0.34, 1.56, 0.64, 1)` — component-demo morphs (spring overshoot for personality)

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 100ms | Hover colour swap, focus ring fade-in |
| Standard | 200ms | Card hover, mega-menu open |
| Slow | 300ms | Modal enter, drawer slide |
| Demo | 600ms | Component-demo tab morphs (spring eased) |

### Per-Component Recipes

- **CTA hover**: violet brightens `#6c47ff` → `#8a6dff` over 100ms. No transform.
- **Card hover**: border opacity transitions 0.06 → 0.12 over 200ms; subtle 1px `translateY(-1)` lift.
- **Hero halo**: static — no animation. Clerk doesn't breathe the halo (unlike Auth0).
- **Component-demo morph**: when user toggles between `<SignIn />`, `<SignUp />`, and `<UserButton />` tabs, the embedded component morphs over 600ms with spring easing — children fade out, container resizes, new children fade in. The page's signature emphasized motion.
- **Section reveal**: scrolling sections fade-up from `translateY(16px)` / `opacity(0)` over 300ms standard ease.
- **Mega-menu open**: 200ms fade + 4px slide-down from navbar bottom.
- **Modal enter**: scrim fades over 200ms; dialog enters from `translateY(8px)/opacity(0)` to `0/1` over 300ms emphasized.
- **Code block copy**: copy button fades from "Copy" to "Copied" over 200ms with a small green check.
- **Link hover**: violet brightens by ~10% luminance over 100ms.

### Page Transitions

Page-to-page navigation uses no transition — links fire a hard navigation. Clerk prioritises perceived speed.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Component-demo morphs become instant swaps (no spring). Section reveals degrade to opacity-only. Card hover loses the translateY but keeps the border opacity transition.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #ffffff white on #131316 canvas | 16.1 | AAA |
| #9394a1 muted on #131316 canvas | 6.8 | AA at body sizes |
| #ffffff on #6c47ff violet CTA | 5.6 | AA at body sizes |
| #6c47ff link on #131316 | 5.4 | AA large only at body sizes |
| #8a6dff link hover on #131316 | 7.2 | AAA |
| #36d576 success on #131316 | 8.1 | AAA |
| #ef2236 error on #131316 | 4.7 | AA large |

The violet CTA pair sits at **5.6 — AA at body sizes**. Clerk renders the violet at full opacity without layered transparency to preserve the contrast ratio.

### Focus Indicators

Focus ring is **2px solid `#6c47ff` (Clerk-violet) with 2px outline-offset**. All focusable elements use this exact ring — buttons, inputs, links, tab triggers, component-demo controls. The violet ring is also the brand colour, which doubles its function: it's both a contrast indicator and a brand affordance.

### ARIA Patterns

- **Top nav**: `role="navigation"`, `aria-label="Primary"`. Mega-menu uses `role="menu"` with `role="menuitem"`.
- **Component-demo tabs**: `role="tablist"` with `role="tab"` and `aria-controls` linking to `<SignIn />`, `<SignUp />`, `<UserButton />` panels.
- **Live `<SignIn />`** has full ARIA — `role="form"`, `aria-label="Sign in"`, all inputs labelled, error states announced via `aria-live="polite"`.
- **Pricing tier cards**: headlined with `<h3>`. Recommended tier has `aria-current="true"`.
- **Modal**: `role="dialog"`, `aria-modal="true"`, focus trap, Esc closes.
- **Code blocks**: `role="region"`, `aria-label="Code example"`. Copy button announces "Copied" via `aria-live="polite"`.

### Keyboard Navigation

- Tab: logo → product → docs → pricing → customers → sign in → primary CTA
- Component-demo tabs: arrow keys cycle, Tab moves to active panel
- Modal: focus trap, Tab cycles within
- Skip-to-main link visible on first Tab

### Screen Reader Hints

- Hero halo glow has `aria-hidden="true"` (decorative only)
- Mono-uppercase eyebrows are announced as the section heading
- Live `<SignIn />` component announces form state and validation
- Code copy button announces success state via `aria-live`

### Reduced Motion

Component-demo morphs become instant. Section reveals degrade to opacity-only. Modal slide degrades to fade.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Nav collapses to logo + hamburger; hero copy 40px; feature grid stacks 1-up; halo radius reduces to 160px |
| Tablet | 640–1024px | Nav reveals product + sign-in; feature grid 2-up |
| Desktop | 1024–1280px | Full nav with mega-menu; feature grid 3-up; container caps at 1200px |
| Wide | 1280–1440px | Container stays 1200px; halo extends into negative space |

### Touch Targets

- Primary CTAs: 36px height — meets AA (44px on mobile via larger hit zone)
- Nav links: 36×16px tap targets at desktop, 44×20 on mobile
- Form inputs: 40px — borderline AA; mobile increases to 44
- Component-demo controls: 32px tab buttons with 8px hit-padding

### Collapsing Strategy

- Nav: product / docs / customers collapse into hamburger drawer at <1024px
- Hero: copy reflows from 80px to 56px to 40px
- Feature grid: 3-up → 2-up → 1-up; gutters compress 24 → 16 → 12px
- Pricing: 4-column → 2-column → 1-column; "Pro" tier surfaces first on mobile
- Component-demo: 2-column splits to single-column stack at <1024px; live component moves above descriptive copy

### Image Behavior

Marketing illustrations use inline SVG. Brand logos use SVG. Hero halo is rendered with CSS `box-shadow` (no image), so it scales perfectly.

### Container Queries

Used in the `<SignIn />` component-demo card: when card width drops below ~360px, social-provider buttons stack instead of inline.

## 11. Content & Voice

### Tone

Modern, technical, friendly. Clerk's voice positions auth as **a solved problem you can drop in** — the copy assumes the reader is a developer who has built auth before and would rather not. Headlines lead with completion-of-task ("Auth that's complete in minutes", "All the user-management features you need"). The voice is explicitly non-enterprise: no "compliance", no "trust", no "scale" language at the top of pages — those appear deeper in the docs.

### Microcopy Patterns

- **Button verbs**: "Get started", "Sign up", "Talk to sales", "Read the docs", "View pricing", "Try the demo"
- **Eyebrow labels**: uppercase Söhne Mono 11/500, 0.10em tracking — "AUTH", "USER MANAGEMENT", "ORGANIZATIONS", "AVAILABLE NOW"
- **Error message recipe**: short + actionable — "Email already in use. Try signing in instead."
- **Success confirmations**: instant + minimal — "Welcome back, [Name]"
- **Field labels**: invisible / floating — Clerk leans on placeholder-as-label with floating-label animation
- **Doc links**: lead with the verb — "Read the SDK guide", "View API reference", "See changelog"

### Empty States

- Empty users: "No users yet. Invite users or share a sign-up link."
- Empty organizations: "No organizations yet. Create one to start."
- Empty sessions: "No active sessions. Users will appear here when they sign in."

### CTA Verb Conventions

- Primary: "Sign up", "Get started", "Start building"
- Secondary: "Read the docs", "View demo", "Try free"
- Tertiary: "Learn more →", "View pricing", "See changelog"
- Avoided: "Click here", "Submit", "Buy now"

## 12. Dark Mode & Theming

**Dark-only on the marketing site.** Clerk commits to dark for the entire marketing canvas. The `<SignIn />` component itself ships with both light and dark themes (developers can configure either) but the public marketing pages are dark-only.

### Component Theming

The `<SignIn />` component supports full theming via the `appearance` prop:

```yaml
component-light:
  bg: '#ffffff'
  text: '#131316'
  border: 'rgba(0,0,0,0.10)'
  brand: '#6c47ff'   # invariant — Clerk-violet works on both themes
  input-bg: '#f7f7f8'
  input-border: 'rgba(0,0,0,0.10)'

component-dark:
  bg: '#22222a'
  text: '#ffffff'
  border: 'rgba(255,255,255,0.10)'
  brand: '#6c47ff'   # invariant
  input-bg: '#131316'
  input-border: 'rgba(255,255,255,0.10)'
```

The brand violet (`#6c47ff`) is invariant across themes — it's a brand colour, not a context colour. Clerk-violet works on both light and dark canvases because the hue is balanced for both luminance contexts.

## 13. Lineage & Influences

Clerk's visual lineage is unmistakably **Vercel-trained**. The Geist typography, the near-black canvas, the mono-uppercase eyebrows, the 6px button radius, the backdrop-blur glassy navbar, the sub-100ms hover transitions — all of these are visual moves Vercel canonised in 2020–2022 and that became the early-2020s "modern dev-tool" template. Clerk borrowed the entire foundation.

What Clerk added was **the component-as-marketing-asset move** — embedding the live `<SignIn />` component directly on the marketing page instead of showing screenshots. This is a Stripe-Elements move (Stripe pioneered embedding the actual `<CardElement />` on the marketing site), but Clerk applied it to the entire surface area: every component the SDK ships gets a live demo on the marketing page. The result is the only auth dev-tool whose marketing IS the product.

The brand colour choice — Clerk-violet `#6c47ff` — is the move that distinguishes Clerk from the rest of the Vercel-trained cohort. Where Vercel commits to single-blue trust, Linear to deep-purple gravitas, and Resend to brand-cyan, Clerk planted the violet flag specifically because it was empty space in the dev-tool palette circa 2020. The hue is bright enough to read as modern (not enterprise) but subdued enough to read as professional (not toy). It's the most-imitated dev-tool brand colour of the early 2020s.

What Clerk rejects: **light canvases on marketing** (dark-only commitment), **photographic product screenshots** (live components instead), **enterprise blue trust** (violet voice instead), and **theatrical motion** (sub-100ms hover, no breathing halos).

**Influences:**
- Vercel — Geist typeface, near-black canvas, glassy navbar, backdrop-blur, [vercel.com](https://vercel.com)
- Stripe Elements — embedded-component-as-marketing pattern, [stripe.com](https://stripe.com)
- Linear — sub-100ms motion discipline, [linear.app](https://linear.app)
- Resend — modern dev-tool brand-cyan precedent for choosing a single bright accent, [resend.com](https://resend.com)
- Klim Type Foundry — Söhne Mono typeface, [klim.co.nz](https://klim.co.nz)

## 14. Do's and Don'ts

**Do**
- Anchor the canvas on `#131316` near-black with a subtle warm-violet undertone — never pure black
- Run display in Geist Sans 700 with `-2.24px` tracking at 64px — the typographic foundation
- Use Söhne Mono uppercase eyebrows at 11/500 with 0.10em tracking — the typographic signature
- Plant Clerk-violet `#6c47ff` on every primary CTA, focus ring, and the wordmark
- Embed the live `<SignIn />` component as the marketing hero — the demo IS the product
- Use 6px button radius / 16px card radius — tight engineering-tool proportions
- Apply `backdrop-blur(8px)` to the sticky navbar at 72% opacity — Vercel-style
- Sub-100ms hover transitions — Clerk respects developer time
- Use spring easing (600ms) for component-demo morphs — the only emphasized motion
- Render the violet halo behind hero copy as static — no breathing animation

**Don't**
- Don't use pure `#000000` — `#131316` with the violet undertone is the canvas
- Don't substitute Inter at the same weights — Inter reads as generic SaaS, not Clerk
- Don't show product screenshots — live components are non-negotiable
- Don't introduce a second brand colour — Clerk-violet does all the brand work
- Don't make the halo glow breathe — Clerk's halo is static (Auth0 breathes; Clerk doesn't)
- Don't use button radius greater than 8px — tight 6px is the dev-tool quality
- Don't tighten section padding below 96px — the breath is what makes it considered
- Don't use serif type anywhere — Geist + Söhne Mono is the entire typographic system
- Don't use enterprise "trust" language at the top of pages — Clerk leads with dev outcomes
- Don't over-animate — sub-100ms hover, no decorative motion

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:           #131316
Section:          #1a1a1f
Surface:          #22222a
Text White:       #ffffff
Text Muted:       #9394a1
Clerk Violet:     #6c47ff
Brand Hover:      #8a6dff
Brand Pressed:    #5938e0
Border (Hairline):rgba(255,255,255,0.10)
Border (Soft):    rgba(255,255,255,0.06)
CTA Hairline:     #42434d
Halo:             rgba(108,71,255,0.32)
```

### Example Component Prompts

- "Create a Clerk-style hero section: near-black canvas (`#131316`), 128px vertical padding, hero copy in Geist Sans 64/700 with `-2.24px` tracking, white text. Eyebrow above in Söhne Mono 11/500 uppercase with 0.10em tracking, violet `#a48efc` text on `rgba(108,71,255,0.16)` pill surface. Sub-copy in Geist Sans 18/400 muted `#9394a1`. Soft 320px violet halo glow (`0 0 320px 0 rgba(108,71,255,0.32)`) behind copy — static, no breathing. Primary CTA: violet (`#6c47ff`) fill, white text, 13/500, 6px radius, 8×16px padding, 36px height. Secondary glass CTA: `#42434d` fill, white text."
- "Build a Clerk component-demo card: `#22222a` surface, 16px radius, 1px `rgba(255,255,255,0.10)` border, 24px padding. Embed the live `<SignIn />` component — app logo at top, 'Sign in to [App]' title in Geist 18/600, social provider buttons (Google, GitHub, Apple) stacked, divider with 'or', email input with violet focus ring, primary violet 'Continue' CTA, 'Don't have an account?' link with 'Sign up' violet text."
- "Design a Clerk pricing tier card: `#1a1a1f` surface, 16px radius, 32px padding. Default cards have 1px `rgba(255,255,255,0.10)` border; the 'Pro' tier highlights with 2px `#6c47ff` violet border. Stack: tier name in Söhne Mono 11/500 uppercase, price in Geist Numbers 48/700 with `tnum`, '/month' caption in 14/400 muted, feature checklist with violet check icons, primary CTA at the bottom."
- "Create a Clerk navbar: 64px tall, `rgba(19,19,22,0.72)` ground with `backdrop-blur(8px)`, 1px `rgba(255,255,255,0.06)` bottom border. Clerk wordmark flush left in white. Nav links 'Product', 'Docs', 'Pricing', 'Customers' in Geist 13/500 white, with 24px gutters. Sign-in text link + primary violet CTA flush right."
- "Build a Clerk code block: `#1a1a1f` ground, 12px radius, 1px `rgba(255,255,255,0.06)` border, 20×24px padding. Söhne Mono 13/400. Violet `#6c47ff` keywords (`import`, `const`, `return`), cyan `#3acefa` strings, white default text. Top-right copy button — small icon-only, transparent fill, hairline border, hover brightens. On click, button text morphs to 'Copied' for 2s with small green check."
- "Design a Clerk feature card: `#1a1a1f` surface, 16px radius, 1px `rgba(255,255,255,0.06)` border, 32px padding. Stack: optional violet icon (24×24, `#6c47ff` stroke), title in Geist 18/600 white with `-0.2px` tracking, body description in Geist 16/400 muted `#9394a1`, optional 'Read the docs →' link in violet without underline."

### Iteration Guide

1. **Start with Geist 700 + `-2.24px` tracking.** This is the typographic foundation. Substitute Inter 700 with `-0.04em` if Geist isn't available.
2. **Mono-uppercase eyebrows are non-negotiable.** Söhne Mono / Geist Mono / JetBrains Mono at 11/500 with 0.10em tracking. Without them, the page reads as generic dev-tool.
3. **Embed the actual component, not a screenshot.** Even a static SVG mockup of the `<SignIn />` UI works in spec; on live sites, embed the real component.
4. **Single brand colour: violet `#6c47ff`.** No secondary brand. Don't introduce a "feature accent" colour.
5. **Halo is static.** Soft 320px-radius violet glow behind hero — don't animate the breath. (That's Auth0; Clerk is sharper.)
6. **6px button radius, 16px card radius.** Don't soften the buttons to 8px — the 6px is the engineering-tool quality.
7. **Glassy navbar.** `backdrop-blur(8px)` at 72% opacity is the hallmark — without it, the page reads as static dev-doc.
8. **Sub-100ms hover.** Clerk's discipline is to respect time. Don't add 240ms emphasized eases on CTAs — only on component-demo morphs.
