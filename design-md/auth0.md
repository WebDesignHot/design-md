---
name: Auth0
tagline: Twilight-blue dark canvas with TWK Lausanne 300 display + Aeonik body — the original identity-platform aesthetic.
author: webdesignhot
source_url: https://auth0.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, identity, auth, sans, technical, enterprise, twilight, by-okta]
preview_swatch: ['#030710', '#7fc8ff', '#cce9ff']
related: [stripe, vercel, supabase]
description: 'Auth0''s marketing site is the canonical identity-platform canvas — a near-black twilight ground (`#030710`), light-blue display copy in TWK Lausanne weight 300 (`#7fc8ff`), body running Aeonik at 17px (`#cce9ff`), and a chromatic system organised around blue-light / blue-dark / violet / orange ramps. The signature `#eb5424` orange-red brand colour appears as the platform''s product-mark accent inside dashboards and the logo, but the marketing canvas leans into the deep-blue twilight aesthetic — confident, technical, slightly cinematic. The 2022 Okta acquisition kept Auth0''s independent visual identity intact: the result is the only B2B identity-platform site that successfully pulls off a near-black canvas without feeling cold, anchored on TWK Lausanne''s human warmth at the lightest weight and a 6.4px button radius that softens every edge.'

colors:
  bg: '#030710'                  # --_v-2-colors---c-blue-dark--900 — twilight near-black canvas
  bg-section: '#0d1322'          # --_v-2-colors---c-blue-dark--800 — section ground tier
  bg-elevated: '#161f34'         # --_v-2-colors---c-blue-dark--700 — card / panel ground
  bg-light: '#f8f7ff'            # --colors--violet--violet-100 — light-section flip
  bg-paper: '#ffffff'            # default light surface (docs, marketing flips)
  surface: '#161f34'             # elevated card surface
  surface-soft: '#0d1322'        # section ground tier
  surface-light: '#e5f4ff'       # --_v-2-colors---c-blue-light--400 — soft light surface
  surface-violet: '#ebe8fe'      # --colors--violet--violet-200-full — violet card
  text: '#cce9ff'                # --_v-2-colors---c-blue-light--500 — primary body text on dark
  text-strong: '#f2faff'         # --link-color brightest white-blue (display brightest)
  text-display: '#7fc8ff'        # --_v-2-colors---c-blue-light--900 — h1/h2 display copy
  text-display-bright: '#99d3ff' # --_v-2-colors---c-blue-light--800 — alt display
  text-muted: '#b2deff'          # --_v-2-colors---c-blue-light--600 — secondary body
  text-on-light: '#1d3d3c'       # --colors--green--green-400 — ink for light sections
  text-on-violet: '#1d3d3c'      # ink on violet button
  text-link-secondary: '#aaaaaa' # --link-color--link-secondary
  brand: '#eb5424'               # Auth0 signature orange-red — wordmark and product mark
  brand-deep: '#d85522'          # --colors--orange--orange-400 — deeper orange variant
  brand-light: '#eaa990'         # --colors--orange--orange-300 — soft orange tint
  brand-pale: '#f3cdbe'          # --colors--orange--orange-200 — palest orange surface
  brand-paper: '#fbeee9'         # --colors--orange--orange-100 — orange-tinted paper
  violet: '#beb4fd'              # --colors--violet--violet-400 / --dark--button-bg — primary CTA fill on dark
  violet-soft: '#cfc8fe'         # --colors--violet--violet-300
  violet-pale: '#edeafdbf'       # --colors--violet--violet-200
  violet-paper: '#f8f7ff'        # --colors--violet--violet-100 — violet-tinted paper
  blue-action: '#006ddd'         # --_v-2-colors---c-blue-dark--400 — link blue
  blue-paper: '#f2faff'          # --_v-2-colors---c-blue-light--300 — palest blue paper
  blue-deep: '#043e5d'           # --colors--blue--blue-500 — deepest blue accent
  blue-mid: '#076597'            # --colors--blue--blue-400 — mid blue accent
  blue-grey-mid: '#40668d'       # --_v-2-colors---c-blue-dark--500 — mid blue-grey
  blue-grey-soft: '#2f4b68'      # --_v-2-colors---c-blue-dark--600 — softer blue-grey ground
  green-deep: '#1d3d3c'          # --colors--green--green-400 — light-button text / ink-on-light
  green-mid: '#132d2d'           # --colors--green--green-500 — deepest green
  red-text: '#772730'            # --colors--red--red-400 — error / muted brand-red
  red-pale: '#f1e9ea'            # --colors--red--red-100 — soft red surface
  border: 'rgba(47,75,104,0.16)' # --_v-2-colors---c-black--16-p analog (button border on dark)
  border-soft: 'rgba(255,255,255,0.16)' # --_v-2-colors---c-white--16-p
  border-faint: 'rgba(255,255,255,0.08)' # --_v-2-colors---c-white--8-p
  on-brand: '#ffffff'            # white on brand orange CTA
  on-violet: '#1d3d3c'           # green-deep ink on violet CTA
  on-dark: '#cce9ff'             # default text on dark canvas
  scrim: 'rgba(3,7,16,0.72)'     # modal backdrop (twilight ink)
  shadow-card: 'rgba(0,0,0,0.32)' # card lift on dark
  shadow-elev: 'rgba(0,0,0,0.48)' # elevated panel
  success: '#027a48'             # --text-color--text-success
  success-bg: '#ecfdf3'          # --background-color--background-success
  danger: '#b42318'              # --text-color--text-error
  danger-bg: '#fef3f2'           # --background-color--background-error
  warning: '#d85522'             # advisory amber-orange
  info: '#006ddd'                # info blue

typography:
  display:
    family: '"Twklausanne", "TWK Lausanne", Tahoma, sans-serif'
    weights: [300, 400, 500]
    opentype-features: ['ss01']
  body:
    family: 'Aeonik, Tahoma, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: '"Aeonik Mono", "JetBrains Mono", "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    hero-display:    { size: 80, weight: 300, lineHeight: 1.05, tracking: '-0.03em', family: display, opentype: ['ss01'] }
    h1:              { size: 64, weight: 300, lineHeight: 1.10, tracking: '-0.03em', family: display, opentype: ['ss01'] }
    h2:              { size: 51, weight: 300, lineHeight: 1.10, tracking: '-0.03em', family: display, opentype: ['ss01'] }
    h3:              { size: 38, weight: 300, lineHeight: 1.15, tracking: '-0.02em', family: display }
    h4:              { size: 28, weight: 400, lineHeight: 1.25, tracking: '-0.01em', family: display }
    h5:              { size: 22, weight: 500, lineHeight: 1.30, tracking: '0',       family: display }
    eyebrow:         { size: 13, weight: 500, lineHeight: 1.20, tracking: '0.08em',  family: body, transform: uppercase }
    body-lg:         { size: 21, weight: 400, lineHeight: 1.55, tracking: '0',       family: body }
    body-md:         { size: 17, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    body-sm:         { size: 15, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    label:           { size: 14, weight: 500, lineHeight: 1.30, tracking: '0',       family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.40, tracking: '0',       family: body }
    micro:           { size: 12, weight: 400, lineHeight: 1.35, tracking: '0.01em',  family: body }
    button-label:    { size: 15, weight: 500, lineHeight: 1.0,  tracking: '0',       family: body }
    nav-link:        { size: 15, weight: 400, lineHeight: 1.20, tracking: '0',       family: body }
    code-inline:     { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',       family: mono }
    code-block:      { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',       family: mono }
    quote:           { size: 24, weight: 400, lineHeight: 1.40, tracking: '-0.005em', family: display, italic: true }

radius:
  micro: 2
  sm: 4
  md: 6           # default button — 6.38px observed
  lg: 8
  xl: 12
  card: 14
  hero: 24
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
  button-violet-primary:
    bg: '#beb4fd'
    color: '#1d3d3c'
    radius: 6
    padding: '12px 20px'
    height: 44
    font: button-label
    use: 'Primary CTA on dark canvas — violet fill (--dark--button-bg), green-deep ink. "Get started", "Talk to sales".'
  button-orange-brand:
    bg: '#eb5424'
    color: '#ffffff'
    radius: 6
    padding: '12px 20px'
    height: 44
    use: 'Brand-orange CTA — used sparingly for product-mark moments and conversion CTAs.'
  button-light:
    bg: '#1d3d3c'
    color: '#f8f7ff'
    radius: 6
    padding: '12px 20px'
    height: 44
    use: 'Light-section CTA — green-deep fill, violet-paper text. Inverse colour scheme for marketing flips.'
  button-ghost-dark:
    bg: 'transparent'
    color: '#cce9ff'
    border: '1px solid rgba(255,255,255,0.16)'
    radius: 6
    padding: '12px 20px'
    height: 44
    use: 'Secondary action on dark — outlined ghost with hairline white border.'
  button-ghost-light:
    bg: 'transparent'
    color: '#1d3d3c'
    border: '1px solid rgba(47,75,104,0.16)'
    radius: 6
    padding: '12px 20px'
    height: 44
    use: 'Secondary action on light section.'
  card-feature:
    bg: '#161f34'
    color: '#cce9ff'
    radius: 14
    padding: '32px'
    border: '1px solid rgba(255,255,255,0.08)'
    use: 'Feature card on dark — twilight surface, hairline border, generous internal padding.'
  card-violet:
    bg: '#ebe8fe'
    color: '#1d3d3c'
    radius: 14
    padding: '32px'
    use: 'Violet-paper card — violet ground, green-deep ink, used for "developer-friendly" feature blocks.'
  card-orange-paper:
    bg: '#fbeee9'
    color: '#1d3d3c'
    radius: 14
    padding: '32px'
    use: 'Orange-tinted paper card — used for the brand-product moment.'
  input-dark:
    bg: '#161f34'
    color: '#f2faff'
    border: '1px solid rgba(255,255,255,0.16)'
    focus: '0 0 0 2px #beb4fd'
    radius: 6
    height: 44
    padding: '12px 14px'
    placeholder: '#b2deff'
    use: 'Form input on dark — twilight surface, white-blue text, violet focus ring.'
  navbar:
    bg: 'transparent → #030710 on scroll'
    color: '#cce9ff'
    height: 72
    use: 'Translucent at top of hero; solidifies to twilight on scroll.'
  code-block:
    bg: '#0d1322'
    color: '#cce9ff'
    radius: 8
    padding: '20px 24px'
    border: '1px solid rgba(255,255,255,0.08)'
    use: 'Aeonik Mono code block on twilight ground — violet syntax for keywords, light-blue for strings.'
  pill-tag:
    bg: 'rgba(190,180,253,0.16)'
    color: '#beb4fd'
    radius: 9999
    padding: '4px 10px'
    use: 'Eyebrow pill — "NEW", "BETA", category tag.'
  modal:
    bg: '#161f34'
    color: '#cce9ff'
    radius: 14
    padding: '32px'
    border: '1px solid rgba(255,255,255,0.08)'
    shadow: 'rgba(0,0,0,0.48) 0 24px 48px'
    use: 'Centred dialog on twilight scrim.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-cinematic: 'cubic-bezier(0.16, 1, 0.3, 1)'   # for hero parallax
  duration-fast: 150
  duration-standard: 240
  duration-slow: 360
  duration-cinematic: 600
  cta-hover: 'violet brightens beb4fd → cfc8fe over 150ms; subtle 1px translateY(-1) lift'
  card-hover: 'border opacity 0.08 → 0.20 over 240ms; no scale change'
  hero-glow: 'subtle 600ms breathing glow on hero violet halo — opacity 0.6 → 0.8 → 0.6 (16s loop)'
  reveal: 'sections fade-up from translateY(24px)/opacity 0 → 0/1 over 600ms cinematic ease, ~80ms stagger'
  reduced-motion: 'respects prefers-reduced-motion: reduce — hero glow becomes static; reveal degrades to opacity-only.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  ambient: 'rgba(0,0,0,0.32) 0 1px 2px'
  card: 'rgba(0,0,0,0.32) 0 8px 24px'
  elevated: 'rgba(0,0,0,0.48) 0 24px 48px'
  modal: 'rgba(0,0,0,0.48) 0 32px 64px'
  ring-violet: '0 0 0 2px #beb4fd'
  ring-orange: '0 0 0 2px #eb5424'
  hero-halo: '0 0 240px 0 rgba(190,180,253,0.32)'

accessibility:
  contrast-text-on-bg: 13.4         # #cce9ff on #030710 — AAA at body sizes
  contrast-display-on-bg: 9.8       # #7fc8ff on #030710 — AAA
  contrast-text-strong-on-bg: 18.7  # #f2faff on #030710 — AAA
  contrast-violet-cta-text: 9.4     # #1d3d3c on #beb4fd — AAA
  contrast-orange-cta-text: 4.0     # #ffffff on #eb5424 — AA large only at body sizes
  focus-ring: '2px solid #beb4fd + 2px outline-offset (violet ring on dark, orange ring on brand surfaces)'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab moves logo → product nav → resources → pricing → log in → CTA; arrow keys in mega-menu.'

dark-mode: native    # Auth0 ships dark-first; light-section flips reverse the entire token map (see §12)

lineage:
  summary: |
    Auth0's marketing site is the canonical identity-platform twilight
    aesthetic — a near-black canvas (`#030710`) anchored on light-blue
    display in TWK Lausanne weight 300 (`#7fc8ff`), body in Aeonik 17/400,
    and violet (`#beb4fd`) CTAs that sit adjacent to the canvas in hue
    but contrast in luminance. The signature `#eb5424` orange-red brand
    colour is preserved post-Okta acquisition, scoped exclusively to the
    wordmark and product-mark moments. The page borrows Stripe's atmospheric
    halo glow and Vercel's twilight canvas, then layers in TWK Lausanne's
    Swiss-graphic-design rigor and isometric line-diagrams borrowed from
    Sun Microsystems / Bell Labs documentation. The 6.4px button radius
    is slightly more utilitarian than the conventional 8px, reading as
    engineering-tool rather than marketing-landing. The 2022 Okta acquisition
    preserved the independent visual brand — the "by Okta" sub-mark sits
    adjacent to the wordmark but never replaces it.
  influences:
    - name: Swiss Typefaces
      role: TWK Lausanne typeface — the lightest weight is Auth0's typographic signature.
      url: https://swisstypefaces.com
    - name: CoType Foundry
      role: Aeonik typeface — geometric grotesque body for engineering documentation feel.
      url: https://www.cotypefoundry.com
    - name: Stripe
      role: Single-blue confidence and atmospheric halo glow chromatic strategy.
      url: https://stripe.com
    - name: Vercel
      role: Twilight canvas + cinematic 600ms section reveals.
      url: https://vercel.com
    - name: Okta
      role: Acquired Auth0 in 2022 but preserved Auth0's independent visual identity.
      url: https://okta.com
---

## 1. Visual Theme & Atmosphere

Auth0's marketing site is the canonical **identity-platform twilight aesthetic** — a near-black canvas at `#030710` that reads as deep-blue twilight rather than absolute black, anchored on light-blue display copy (`#7fc8ff`) in TWK Lausanne weight 300 and body running Aeonik at 17px in a slightly softer light-blue (`#cce9ff`). The page feels like the moment after sunset over a server farm: cinematic, technical, slightly nostalgic, completely confident. Where competitors push for either pure-tech-black or trust-via-corporate-blue, Auth0 chose the twilight in between — a deliberate emotional position that says identity is a craft, not a commodity.

The chromatic system is **blue-dark + blue-light + violet + orange**. Blue-dark (`#030710` → `#0d1322` → `#161f34` → `#2f4b68`) handles canvas and surface tiers. Blue-light (`#cce9ff` → `#7fc8ff` → `#f2faff`) handles text, from primary body to display to brightest emphasis. Violet (`#beb4fd`) is the dark-mode CTA fill — Auth0 chose violet because the standard B2B "primary blue" would compete with the page's twilight tone; violet sits adjacent to the canvas in hue but contrasts in luminance. Orange-red (`#eb5424`) is the legacy Auth0 brand colour, preserved through the 2022 Okta acquisition, but on the marketing canvas it appears almost exclusively in the wordmark and product-mark — the page itself is twilight, the brand-mark is orange.

Type runs **TWK Lausanne** (Swiss Typefaces, 2018) at weight **300** for display copy. The 300 is the typographic signature — Auth0 deliberately chose the lightest weight rather than the conventional 600/700 because it gives the page a quiet authority: large copy at light weight reads as patient and confident. Negative tracking at `-0.03em` keeps the headlines tight despite the thin weight. Body type is **Aeonik** (CoType Foundry, 2018), a geometric grotesque, at 17px / 400 with normal letter-spacing — Aeonik handles the engineering documentation feel without ever crowding the lighter display.

Shape language is **calm 6–14px radii** with a heavy bias toward 6.4px — the observed default button radius. Cards round at 14px, hero shells at 24px, pills at 9999px. The 6.4px default is unusual: most competitors use 8px or 12px; Auth0's 6.4px reads as slightly more utilitarian, slightly more grown-up. Combined with the twilight canvas and light TWK Lausanne, the radius scale gives the page a "considered engineering tool" quality rather than a "marketing landing page" quality.

Photography and illustration are **minimal and architectural**. Auth0 doesn't use product screenshots in the traditional sense — instead, isometric line diagrams of the auth flow, code blocks rendered on twilight panels with violet syntax, and abstract halo glows behind hero copy. The result feels like reading a technical specification that happens to be beautiful.

**Key Characteristics:**
- Twilight canvas (`#030710`) — near-black with deep-blue undertone, never pure black
- Display copy in TWK Lausanne weight 300 — the lightest weight is the typographic signature
- Body copy in Aeonik 17/400 — geometric grotesque for engineering authority
- Violet CTAs (`#beb4fd`) on dark canvas — chosen so the brand's blue-dark canvas isn't competed with
- Brand orange (`#eb5424`) preserved post-Okta acquisition, scoped to wordmark and product-mark
- 6.4px default button radius — slightly more utilitarian than conventional 8px
- Subtle violet halo glows behind hero — cinematic atmosphere without ornamental ink
- Isometric line diagrams of auth flows — engineering specification meets editorial polish
- Light-section flips invert the entire token map (violet-paper `#f8f7ff` ground + green-deep `#1d3d3c` ink)
- 600ms cinematic reveals on scroll — sections breathe in like a stage lighting cue

## 2. Color Palette & Roles

### Primary

- **Twilight Canvas** (`#030710`) — `--_v-2-colors---c-blue-dark--900`. Default page ground — near-black with a deep-blue undertone, never pure `#000000`.
- **Section Ground** (`#0d1322`) — `--_v-2-colors---c-blue-dark--800`. One tier up from canvas, used for alternating section bands.
- **Surface Elevated** (`#161f34`) — `--_v-2-colors---c-blue-dark--700`. Card and panel ground; one tier above section.
- **Display Copy** (`#7fc8ff`) — `--_v-2-colors---c-blue-light--900`. h1 / h2 colour — light-blue, never pure white, gives the headlines their signature twilight tone.
- **Display Bright** (`#99d3ff`) — `--_v-2-colors---c-blue-light--800`. Slightly brighter alternative for accent display moments.
- **Body Text** (`#cce9ff`) — `--_v-2-colors---c-blue-light--500`. Default body text — light-blue at body sizes for warmth on twilight.
- **Body Strong** (`#f2faff`) — `--_v-2-colors---c-blue-light--300`. Brightest white-blue used for hero kickers and emphasis pulls.
- **Body Muted** (`#b2deff`) — `--_v-2-colors---c-blue-light--600`. Secondary metadata, captions, footer copy.

### Brand & Dark

- **Auth0 Orange** (`#eb5424`) — the Auth0 signature orange-red, preserved post-Okta acquisition. Used in the wordmark, product mark, and conversion CTAs.
- **Brand Deep** (`#d85522`) — `--colors--orange--orange-400`. Hover state for orange CTAs.
- **Brand Light** (`#eaa990`) — soft orange tint.
- **Brand Pale** (`#f3cdbe`) — pale orange, used for surface tints and disabled states.
- **Brand Paper** (`#fbeee9`) — orange-tinted paper background.
- **Twilight Deep** (`#0d1322`) → **Twilight Mid** (`#2f4b68`) → **Blue Grey** (`#40668d`) — the surface ramp gives the dark canvas its tiered architecture.

### Accent

- **Violet** (`#beb4fd`) — `--dark--button-bg`. The dark-mode primary CTA fill. Auth0 chose violet over blue because blue would compete with the twilight canvas.
- **Violet Soft** (`#cfc8fe`) — hover state for violet CTAs.
- **Violet Pale** (`#edeafdbf`) — soft violet surface for badges and pills.
- **Violet Paper** (`#f8f7ff`) — `--colors--violet--violet-100`. Light-section paper ground — the ink-on-light reverse of the dark canvas.
- **Action Blue** (`#006ddd`) — `--_v-2-colors---c-blue-dark--400`. Inline link blue on light surfaces.
- **Deep Blue** (`#043e5d`) — deepest blue for accent moments.
- **Mid Blue** (`#076597`) — secondary blue accent.

### Interactive

- **Link on Light** (`#006ddd`) — Action Blue with underline.
- **Link on Dark** (`#beb4fd`) — Violet with underline (links inherit the CTA hue on dark sections).
- **Hover** — violet brightens to `#cfc8fe`; orange darkens to `#d85522`.
- **Active** — violet darkens; subtle 1px translateY indication.
- **Disabled** — `rgba(255,255,255,0.32)` text on `rgba(255,255,255,0.08)` surface.
- **Selected** — violet outline 2px ring.

### Neutral Scale

Auth0's "neutral scale" is functionally a **blue-light scale** — there are no warm or cool greys; every neutral has a slight blue tint that ties it to the twilight canvas.

- **Display** (`#7fc8ff`) — h1/h2 colour
- **Body Strong** (`#f2faff`) — brightest pull
- **Body** (`#cce9ff`) — default body
- **Body Muted** (`#b2deff`) — secondary
- **Body Soft** (`#84b3cd`) — `--colors--blue--blue-300` — captions on dark
- **Mid Blue-Grey** (`#40668d`) — `--_v-2-colors---c-blue-dark--500`
- **Soft Blue-Grey** (`#2f4b68`) — `--_v-2-colors---c-blue-dark--600`
- **Surface Mid** (`#161f34`) — card ground
- **Section** (`#0d1322`) — section ground
- **Canvas** (`#030710`) — page ground

### Surface & Borders

- **Canvas** (`#030710`) — default page
- **Section** (`#0d1322`) — alt section
- **Card** (`#161f34`) — feature card / panel
- **Light Section** (`#f8f7ff`) — light-flip ground
- **Light Card** (`#ebe8fe`) — violet card on light section
- **Border (Dark)** — `rgba(255,255,255,0.16)` — default hairline on dark
- **Border (Faint)** — `rgba(255,255,255,0.08)` — softest hairline
- **Border (Light)** — `rgba(47,75,104,0.16)` — default hairline on light section

### Shadow Colors

Auth0's shadow palette is **deep neutral, not blue-tinted** — on the twilight canvas, shadows compound visually but are simple `rgba(0,0,0,0.32)` and `rgba(0,0,0,0.48)`. The atmospheric depth comes from the violet halo glows behind the hero, not from layered shadows.

- `rgba(0,0,0,0.32) 0 1px 2px` — ambient
- `rgba(0,0,0,0.32) 0 8px 24px` — card
- `rgba(0,0,0,0.48) 0 24px 48px` — elevated panel
- `rgba(0,0,0,0.48) 0 32px 64px` — modal
- `0 0 240px 0 rgba(190,180,253,0.32)` — hero halo glow

### Semantic

- **Success Green** (`#027a48`) — `--text-color--text-success`. On `#ecfdf3` surface.
- **Danger Red** (`#b42318`) — `--text-color--text-error`. On `#fef3f2` surface.
- **Muted Red** (`#772730`) — `--colors--red--red-400`. Soft inline error text on dark.
- **Warning** (`#d85522`) — advisory amber-orange (intentionally close to the brand orange to preserve voice consistency).
- **Info** (`#006ddd`) — informational blue, used sparingly.

## 3. Typography Rules

### Font Family

**Display**: `TWK Lausanne` (Swiss Typefaces). Fallback chain: `Tahoma, sans-serif`. TWK Lausanne is the typographic signature — Auth0 uses it at weight **300** (Light) for h1, h2, and h3, with negative tracking `-0.03em`. The light weight is the discipline: Auth0 commits to confident-and-quiet rather than confident-and-loud.

**Body**: `Aeonik` (CoType Foundry). Fallback chain: `Tahoma, sans-serif`. Aeonik handles all body, button, label, and caption sizes at weight 400 (Regular) and 500 (Medium). It's a geometric grotesque — slightly more compact than Inter, slightly more humanist than Helvetica Neue.

**Mono**: `Aeonik Mono`, fallback `JetBrains Mono`, `SF Mono`, `Menlo`. Used for inline code and code blocks. Auth0's Aeonik Mono pairs cleanly with the body Aeonik because they share metrics.

**OpenType features**: `ss01` enabled on display copy (TWK Lausanne) for the alternate-`a` and alternate-`g` forms. Body Aeonik runs default glyphs.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| hero-display | TWK Lausanne | 80 | 300 | 1.05 | -0.03em | ss01 | Hero — "Make smart auth a reality" |
| h1 | TWK Lausanne | 64 | 300 | 1.10 | -0.03em | ss01 | Page title — note the 300 weight is the signature |
| h2 | TWK Lausanne | 51 | 300 | 1.10 | -0.03em | ss01 | Section opener |
| h3 | TWK Lausanne | 38 | 300 | 1.15 | -0.02em | — | Sub-section |
| h4 | TWK Lausanne | 28 | 400 | 1.25 | -0.01em | — | Feature card title |
| h5 | TWK Lausanne | 22 | 500 | 1.30 | 0 | — | Sub-feature title |
| eyebrow | Aeonik | 13 | 500 | 1.20 | 0.08em (uppercase) | — | "AUTH FOR AI", "PLATFORM" |
| body-lg | Aeonik | 21 | 400 | 1.55 | 0 | — | Hero sub-copy |
| body-md | Aeonik | 17 | 400 | 1.50 | 0 | — | Default body — note 17px not 16px |
| body-sm | Aeonik | 15 | 400 | 1.50 | 0 | — | Secondary body |
| label | Aeonik | 14 | 500 | 1.30 | 0 | — | Form labels, sub-nav |
| caption | Aeonik | 13 | 400 | 1.40 | 0 | — | Captions, footer copy |
| micro | Aeonik | 12 | 400 | 1.35 | 0.01em | — | Footer legal, micro-meta |
| button-label | Aeonik | 15 | 500 | 1.0 | 0 | — | CTA text — semibold |
| nav-link | Aeonik | 15 | 400 | 1.20 | 0 | — | Top nav |
| code-inline | Aeonik Mono | 14 | 400 | 1.50 | 0 | — | Inline `<code>` |
| code-block | Aeonik Mono | 14 | 400 | 1.55 | 0 | — | Code panel |
| quote | TWK Lausanne | 24 | 400 | 1.40 | -0.005em | italic | Pull quote |

### Principles

- **TWK Lausanne 300 is the typographic signature.** Without the light weight, the display reads as generic geometric sans. The 300 weight is what sets Auth0 apart from Stripe (Sohne 500) and Okta (Inter 600).
- **17px body, not 16px.** Auth0 chose 17px Aeonik for body — slightly larger than the 16px web standard, which gives the engineering documentation more breath and reads as "considered" rather than "default".
- **Negative tracking on display, normal on body.** The `-0.03em` on display tightens the light TWK Lausanne; body Aeonik runs at default tracking because it's already humanist.
- **Eyebrow uppercase with 0.08em tracking.** Eyebrows are Aeonik 13/500 uppercase with letter-spacing — the only uppercase moment on the page.
- **Mono pairs with body, not display.** Aeonik Mono shares metrics with Aeonik body, keeping inline code readable inline.
- **No serif on the marketing canvas.** Auth0 commits to a sans-only system; even pull-quotes use TWK Lausanne italic, not a serif.
- **Inter is the closest open-source substitute for TWK Lausanne.** Use Inter at weight 200–300 with `-0.03em` tracking to approximate the feel.

## 4. Component Stylings

### Buttons

**`button-violet-primary`** — primary CTA on dark canvas. Violet (`#beb4fd`) fill, green-deep ink (`#1d3d3c`), 15/500 Aeonik label, 6px radius, 12×20px padding, 44px height. Hover brightens to `#cfc8fe`. Used for "Get started", "Talk to sales", "Start your free trial".

**`button-orange-brand`** — brand-orange CTA. Orange (`#eb5424`) fill, white text, same dimensions. Used sparingly — primarily on the "Auth0 by Okta" product-mark moments and high-conversion CTAs where the brand ID needs to be foregrounded.

**`button-light`** — light-section CTA (inverse). Green-deep (`#1d3d3c`) fill, violet-paper (`#f8f7ff`) text. Used on light-flip sections.

**`button-ghost-dark`** — outlined ghost on dark. Transparent fill, light-blue text, 1px `rgba(255,255,255,0.16)` border. Used for secondary "Learn more", "Read the docs".

**`button-ghost-light`** — outlined ghost on light. Transparent fill, green-deep text, 1px `rgba(47,75,104,0.16)` border.

**`button-text-link`** — plain link. Violet (`#beb4fd`) on dark, action-blue (`#006ddd`) on light. Underlined on hover.

### Cards

**`card-feature`** — feature card on dark. `#161f34` surface, 14px radius, 1px `rgba(255,255,255,0.08)` border, 32px internal padding. Stack: optional violet halo or icon, h4 title, body-md description, optional inline "Learn more" link with arrow.

**`card-violet`** — violet-paper card on light section. `#ebe8fe` ground, 14px radius, no border, 32px padding, green-deep ink. Used for developer-friendly feature blocks ("SDKs", "Code examples").

**`card-orange-paper`** — orange-tinted paper card. `#fbeee9` ground, 14px radius, 32px padding, green-deep ink. The brand-product moment — used to call out "Auth0 by Okta" pricing or AI-agent auth.

**`card-code`** — code panel. `#0d1322` surface, 8px radius, 1px `rgba(255,255,255,0.08)` border, 20×24px padding. Aeonik Mono 14/400. Violet syntax for keywords, light-blue for strings, white-blue for default text. Window controls (red/yellow/green dots) optional in top-left.

**`card-stat`** — stat card. Twilight surface, 14px radius, 32px padding. Stack: massive TWK Lausanne 64/300 number, eyebrow label below.

### Badges, Tags, Pills

**`pill-tag`** — eyebrow pill. Soft violet `rgba(190,180,253,0.16)` surface, violet text, 9999px radius, 4×10px padding, 12/500 Aeonik. "NEW", "BETA", "FOR DEVELOPERS".

**`pill-status-success`** — green text on `#ecfdf3` surface, 9999px, used in changelog.

**`pill-status-error`** — red text on `#fef3f2` surface.

**`badge-okta`** — small "by Okta" badge — 12/400 Aeonik in muted blue-grey, sits adjacent to wordmark.

### Inputs / Forms

**`input-dark`** — text input on dark. `#161f34` surface, light-blue text, 1px `rgba(255,255,255,0.16)` border, 6px radius, 44px height, 12×14px padding. Placeholder in muted `#b2deff`. On focus: 2px violet (`#beb4fd`) ring with 2px outline-offset.

**`input-light`** — light-section input. White surface, 1px `rgba(47,75,104,0.16)` border, green-deep ink. Same dimensions.

**`select-dropdown`** — same as input with chevron-down icon flush right.

**`checkbox`** — 16×16px square, 4px radius, hairline border default. On checked: violet fill with green-deep checkmark.

**`radio`** — 16×16px circle, hairline border. On selected: violet fill with green-deep dot.

### Navigation

**`navbar-top`** — top nav. Transparent at hero (twilight canvas shows through), solidifies to `#030710` with 1px `rgba(255,255,255,0.08)` bottom border on scroll. 72px height. Auth0 wordmark flush left in white, with "by Okta" small mark beside. Product nav, resources, pricing, log in, primary CTA flush right. Aeonik 15/400 nav links.

**`mega-menu`** — opens from product nav. `#161f34` surface, 14px radius, 1px `rgba(255,255,255,0.08)` border, 32px padding, 24×48px shadow. Multi-column nav of products with eyebrow group titles and 14/500 link rows.

**`footer`** — `#030710` ground, 6-column link list at desktop, eyebrow group titles, 14/400 muted-blue link rows, "by Okta" sub-mark, social row.

**`breadcrumb`** — muted blue-grey with `›` separators, 13/400 Aeonik.

### Tooltips & Toasts

**`tooltip`** — twilight `#161f34` ground, 6px radius, 8×10px padding, light-blue text in 13/400 Aeonik, ambient shadow, 6px arrow.

**`toast`** — bottom-centre. Twilight surface, 8px radius, 1px hairline, 16×20px padding, 14/400 light-blue text. Auto-dismiss 5s.

### Modals

**`modal`** — centred dialog over twilight scrim `rgba(3,7,16,0.72)`. `#161f34` surface, 14px radius, 1px `rgba(255,255,255,0.08)` border, 32px padding, 32×64px shadow. Close X anchored top-right.

### Decorative

**`hero-halo`** — soft 240px-radius violet glow behind hero copy. `0 0 240px 0 rgba(190,180,253,0.32)`. Provides cinematic atmosphere without ornamental ink.

**`isometric-diagram`** — line-art auth flow diagrams. Light-blue strokes on twilight ground, violet accents at active nodes. The signature illustrative element.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160`
- Hero padding (vertical): **160px** — Auth0 gives the hero band cinematic breath
- Section padding (vertical): **96–128px** between major sections
- Card internal padding: **32px** — generous; Auth0 trusts breath over density
- Gutter: **24–32px** between feature cards in 2- or 3-column layout

### Grid & Container

- Max content width: **1280px** centred
- Hero: full-width with halo glow extending beyond container edges; copy capped at 720px prose width
- Feature grid: 2-column at desktop with 32px gutter, 3-column for compact feature lists
- Pricing: 3-column tier comparison cards
- Documentation links: 4-column compact tile grid

### Whitespace Philosophy

Auth0 commits to **cinematic breath**. The hero band is 160px tall with 720px prose-capped copy, which makes the page feel calm and considered. Section padding stays 96–128px between bands, never tightening below 96px. Card internal padding stays 32px. The result is a page that breathes like a magazine layout rather than scrolling like a marketing template.

### Section Cadence

The page alternates **dark canvas (`#030710`) → twilight section (`#0d1322`) → dark canvas → light flip (`#f8f7ff`) → dark canvas**. The light flip is rare — used 1–2 times per page for a deliberate emotional pivot ("see how it works" or "developer experience"). The light section is violet-paper, never pure white, which keeps it tonally connected to the dark canvas.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Dense tag corners |
| Small | 4px | Checkboxes, radio outlines |
| Default Button | 6px | Buttons, inputs, dropdowns (~6.4px observed) |
| Standard | 8px | Code blocks, small panels |
| Comfortable | 12px | Mid-size cards |
| Card | 14px | Feature cards, modals |
| Hero | 24px | Hero shells, hero promo bands |
| Pill | 9999px | Tags, status pills, eyebrow chips |

The default radius is **6.4px** (observed `6.38281px`) — slightly more utilitarian than the conventional 8px most B2B SaaS sites use. This is a deliberate engineering-tool quality. There are no compound radii in mainline UI.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body sections, navbar at top |
| 1 — Ambient | `rgba(0,0,0,0.32) 0 1px 2px` | Cards at rest |
| 2 — Card | `rgba(0,0,0,0.32) 0 8px 24px` | Hovered cards, mega-menu |
| 3 — Elevated | `rgba(0,0,0,0.48) 0 24px 48px` | Modal, sticky CTA bar |
| 4 — Modal | `rgba(0,0,0,0.48) 0 32px 64px` | Centred dialog |
| 5 — Halo | `0 0 240px 0 rgba(190,180,253,0.32)` | Hero atmospheric glow |

### Shadow Philosophy

Auth0's depth is **two-channel**: deep-neutral shadows for elevation, **violet halo glows** for atmosphere. The shadow palette is simple `rgba(0,0,0,0.32–0.48)` — never blue-tinted, because the canvas is already blue. The halo glow is the cinematic signature: a single 240px-radius soft-violet bloom behind hero copy that gives the page its twilight atmosphere without adding ornamental ink. On light-section flips, shadows return to standard `rgba(50,50,93,0.25)` Stripe-style multi-layer.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover and focus
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu
- **Cinematic**: `cubic-bezier(0.16, 1, 0.3, 1)` — hero parallax and section reveals

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Hover colour swap, focus ring fade-in |
| Standard | 240ms | Card hover, mega-menu open |
| Slow | 360ms | Modal enter, drawer slide |
| Cinematic | 600ms | Section reveals, hero halo breath |

### Per-Component Recipes

- **CTA hover**: violet brightens `#beb4fd` → `#cfc8fe` over 150ms; subtle 1px translateY(-1) lift.
- **Card hover**: 1px border opacity transitions 0.08 → 0.20 over 240ms; no scale change.
- **Hero halo glow**: subtle 600ms breathing — opacity oscillates 0.6 → 0.8 → 0.6 in a 16-second loop. Auth0's signature ambient motion.
- **Section reveal**: scrolling sections fade-up from `translateY(24px)` / `opacity(0)` to `0/1` over 600ms cinematic ease, with ~80ms stagger between child elements.
- **Mega-menu open**: 240ms emphasized fade-in + 4px slide-down from navbar bottom.
- **Modal enter**: scrim fades in over 240ms; dialog enters from `translateY(8px)/opacity(0)` to `0/1` over 360ms emphasized.
- **Code panel**: syntax highlight pulses on first viewport entry — keywords flash violet briefly to draw attention.
- **Link hover**: text colour brightens by ~10% luminance over 150ms; underline grows from offset 4px to 2px.

### Page Transitions

Page-to-page navigation uses a soft 240ms fade between bodies — not a full transition, but a gentle dampening to prevent the harsh content-flash. The navbar persists.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. The hero halo glow becomes static (no breathing). Section reveals degrade to opacity-only (no translateY). Card hover no longer animates the border opacity (instant swap).

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #cce9ff body on #030710 canvas | 13.4 | AAA |
| #f2faff bright body on #030710 | 18.7 | AAA |
| #7fc8ff display on #030710 | 9.8 | AAA |
| #1d3d3c ink on #beb4fd violet CTA | 9.4 | AAA |
| #ffffff on #eb5424 brand orange | 4.0 | AA large only at body sizes |
| #006ddd link on #ffffff | 5.4 | AA at body sizes |
| #027a48 success on #ecfdf3 | 5.6 | AA |
| #b42318 danger on #fef3f2 | 6.4 | AA |

The orange CTA pair sits at **4.0 — AA large only**. Auth0 compensates by setting button labels in 15/500 (large-text threshold) and reserving brand orange for moments where the surrounding violet halo provides ambient luminance support.

### Focus Indicators

Focus ring is **2px solid `#beb4fd` (violet) on dark surfaces and 2px solid `#eb5424` (orange) on light surfaces** — chosen because violet sits adjacent to the canvas hue but contrasts in luminance, while orange contrasts against light surfaces. 2px outline-offset on all focusable elements.

### ARIA Patterns

- **Top nav**: `role="navigation"` with `aria-label="Primary"`. Mega-menu uses `role="menu"` with `role="menuitem"` for sub-items.
- **Pricing tier cards**: Headlined with `<h3>`, with `aria-describedby` linking to the feature list.
- **Code blocks**: `role="region"` with `aria-label="Code example: [language]"`. Includes a "Copy" button with `aria-live="polite"` for status updates.
- **Modal**: `role="dialog"`, `aria-modal="true"`, focus trap, Esc closes.
- **Tooltip**: `role="tooltip"`, triggered on `:hover` and `:focus`.
- **Tabs** (in docs): `role="tablist"` with `role="tab"` and `aria-controls`.

### Keyboard Navigation

- Tab moves logo → product → resources → pricing → log in → primary CTA
- Mega-menu: arrow keys navigate, Esc closes
- Modal: focus trap; Tab cycles within
- Code copy button: Enter/Space activates
- Skip-to-main link visible on first Tab

### Screen Reader Hints

- Hero halo glow has `aria-hidden="true"` (decorative)
- Isometric diagrams include `<title>` and `<desc>` in inline SVG
- "by Okta" badge has explicit `aria-label="Auth0 by Okta"` to communicate ownership
- Code blocks announce language and copy state

### Reduced Motion

All cinematic reveals degrade to opacity-only. Halo glow becomes static. Mega-menu slide degrades to fade.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Nav collapses to logo + hamburger; hero copy 40px; feature grid stacks 1-up; halo radius reduces to 120px |
| Tablet | 640–1024px | Nav reveals product + log in; feature grid 2-up |
| Desktop | 1024–1280px | Full nav with mega-menu; feature grid 3-up; container caps at 1280px |
| Wide | 1280–1440px | Container stays 1280px; halo glow extends into negative space |

### Touch Targets

- Primary CTAs: 44px height — meets AA
- Nav links: 40×16px — adequate at desktop, 44×20 on mobile
- Form inputs: 44px height
- Tag pills: 24px tall — non-interactive (purely decorative)

### Collapsing Strategy

- Nav: product / resources / pricing collapse into hamburger drawer at <1024px
- Hero: copy reflows from 80px to 56px to 40px down the breakpoints
- Feature grid: 3-up → 2-up → 1-up; gutters compress from 32px → 24px → 16px
- Pricing tiers: 3-column → 1-column stack at <1024px; "Recommended" tier surfaces first
- Code panels: maintain horizontal scroll, never collapse

### Image Behavior

Isometric diagrams use inline SVG with `viewBox` for scaling; rasters use `srcset` for retina. Hero halo is rendered with CSS `box-shadow` (no image), so it scales perfectly.

### Container Queries

Used in the feature card: when card width drops below ~280px, the icon shifts from inline-with-title to above-title.

## 11. Content & Voice

### Tone

Confident, technical, slightly cinematic. Auth0's voice positions identity as **a craft, not a commodity** — the copy assumes the reader is a technical decision-maker (developer, architect, security engineer) who values rigour over hype. Headlines lead with capability and outcome ("Make smart auth a reality", "Secure AI agents at scale") rather than feature lists. The "by Okta" line is acknowledged but never foregrounded — Auth0 maintains its own voice while honoring the lineage.

### Microcopy Patterns

- **Button verbs**: "Get started", "Talk to sales", "Read the docs", "Explore platform", "Watch the demo"
- **Eyebrow labels**: uppercase Aeonik 13/500, 0.08em tracking — "AUTH FOR AI", "PLATFORM", "ENTERPRISE", "DEVELOPER EXPERIENCE"
- **Error message recipe**: precise + actionable — "We couldn't find a tenant matching that domain. Verify the URL or contact your admin."
- **Success confirmations**: technical + reassuring — "API key created. Copy it now — you won't see it again."
- **Field labels**: short and exact — "Email", "Tenant domain", "API key name"
- **Doc links**: lead with the verb — "Read the SDK guide", "View API reference", "See changelog"

### Empty States

- Empty tenant list: "No tenants yet. Create your first tenant to start building."
- Empty users: "No users in this tenant. Invite users or enable signup to begin."
- Empty logs: "No events in the last 24 hours. Adjust the time range or check the integration."

### CTA Verb Conventions

- Primary: "Get started", "Start your free trial", "Talk to sales"
- Secondary: "Read the docs", "Watch the demo", "Explore the platform"
- Tertiary: "Learn more →", "View pricing", "See changelog"
- Avoided: "Click here", "Submit", "Buy now" (Auth0 prefers outcome-named verbs)

## 12. Dark Mode & Theming

**Dark-first.** Auth0 ships dark as the canonical canvas — `#030710` twilight is the brand. Light-section flips reverse the entire token map for deliberate emotional pivots (1–2 times per page).

### Light-flip Token Map (`colors-light`)

```yaml
bg: '#f8f7ff'              # violet-paper canvas (--violet-100)
bg-section: '#ebe8fe'      # violet card ground (--violet-200-full)
text: '#1d3d3c'            # green-deep ink (replaces light-blue body)
text-strong: '#000000'     # near-black for max emphasis
text-muted: '#494744'      # warm muted neutral
brand: '#eb5424'           # orange unchanged — brand colour is invariant
violet-cta: '#beb4fd'      # violet on light section reads as accent, not primary
button-primary-bg: '#1d3d3c'   # green-deep CTA on light
button-primary-text: '#f8f7ff' # violet-paper text on dark CTA
border: 'rgba(47,75,104,0.16)'
shadow-card: 'rgba(50,50,93,0.10) 0 4px 12px'
```

The light flip preserves the **violet-and-green-deep** colour relationship — on light it's green-deep ink with violet accents; on dark it's light-blue body with violet CTAs. The brand orange (`#eb5424`) is invariant across themes — it's a brand colour, not a context colour.

## 13. Lineage & Influences

Auth0's visual lineage runs through three traditions: **Swiss-graphic-design rigour** (TWK Lausanne is a Swiss Typefaces release; the negative-tracked light weight is a Swiss editorial move borrowed from Helvetica Now Display); **engineering-documentation aesthetics** (the twilight canvas, code panels with syntax highlighting, isometric diagrams — all borrowed from technical-spec layouts going back to Sun Microsystems and Bell Labs documentation); and **post-2018 startup-cinematic** (the halo glow, 600ms reveals, and 80px hero — these are the visual moves Stripe popularised in 2017 and Vercel refined in 2020).

The **2022 Okta acquisition** preserved Auth0's independent visual identity. Where most acquired brands fold into the parent's design language within 18 months, Okta committed publicly to keeping Auth0's twilight canvas and TWK Lausanne 300 typography — a deliberate brand-preservation move. The "by Okta" sub-mark sits adjacent to the Auth0 wordmark but never replaces it. The page reads as Auth0, not Okta-Auth0.

What Auth0 rejects: **light canvases as primary** (dark-first commitment), **bright primary CTAs** (the violet is muted, never electric), **dense feature grids** (cinematic breath wins), **photographic product screenshots** (isometric diagrams instead), and **B2B "trust blue"** (the violet+orange duet says identity-as-craft, not enterprise-conformance).

**Influences:**
- Swiss Typefaces — TWK Lausanne typeface, [swisstypefaces.com](https://swisstypefaces.com)
- CoType Foundry — Aeonik typeface, [cotypefoundry.com](https://www.cotypefoundry.com)
- Stripe — single-blue confidence and atmospheric halo glows, [stripe.com](https://stripe.com)
- Vercel — twilight canvas + cinematic reveals, [vercel.com](https://vercel.com)
- Sun Microsystems / Bell Labs documentation — engineering-spec aesthetic
- Okta — acquired Auth0 in 2022 but preserved the visual brand, [okta.com](https://okta.com)

## 14. Do's and Don'ts

**Do**
- Anchor the canvas on twilight `#030710` — never pure black
- Run display copy in TWK Lausanne weight 300 with `-0.03em` tracking — the light weight is the signature
- Use Aeonik for all body, button, label sizes — 17px / 400 default body, not 16px
- Set CTAs in violet (`#beb4fd`) on dark canvas, green-deep (`#1d3d3c`) on light flip
- Reserve brand orange (`#eb5424`) for the wordmark and product-mark moments
- Add a soft violet halo glow behind hero copy — `0 0 240px 0 rgba(190,180,253,0.32)`
- Use 6.4px button radius (slightly more utilitarian than 8px)
- Render code panels on twilight section ground (`#0d1322`) with violet keyword syntax
- Give the hero 160px vertical padding — cinematic breath wins
- Use 600ms cinematic reveals on scroll with 80ms stagger

**Don't**
- Don't use pure `#000000` — twilight `#030710` is the canvas
- Don't run TWK Lausanne at 600+ — the 300 weight is the discipline
- Don't substitute Inter for body — Aeonik's geometric metrics are part of the engineering-tool feel
- Don't make orange the dark-mode CTA — violet is the dark-mode primary; orange is brand-mark only
- Don't add multi-coloured "feature accent" colours — violet + orange + light-blue is the entire chromatic vocabulary
- Don't tighten section padding below 96px — the breath is the brand
- Don't use 3D illustrations — line-art isometric diagrams maintain the engineering-spec voice
- Don't tighten the radius below 6px — slightly utilitarian is the discipline
- Don't put the "by Okta" mark larger than the Auth0 wordmark — Auth0 voice leads, Okta lineage supports
- Don't use exclamation marks gratuitously — the voice is confident-quiet, not enthusiastic-loud

## 15. Agent Prompt Guide

### Quick Color Reference

```
Twilight Canvas:     #030710
Section Ground:      #0d1322
Card Surface:        #161f34
Body Text:           #cce9ff
Display Text:        #7fc8ff
Body Strong:         #f2faff
Violet CTA:          #beb4fd
Brand Orange:        #eb5424
Action Blue:         #006ddd
Green-Deep Ink:      #1d3d3c
Violet Paper Light:  #f8f7ff
Border (Dark):       rgba(255,255,255,0.16)
```

### Example Component Prompts

- "Create an Auth0-style hero section: twilight canvas (`#030710`), 160px vertical padding, hero copy in TWK Lausanne 80/300 with `-0.03em` tracking and a soft violet halo glow (`0 0 240px 0 rgba(190,180,253,0.32)`) behind the copy. Sub-copy in Aeonik 21/400 light-blue (`#cce9ff`). Primary CTA: violet pill (`#beb4fd`) with green-deep text (`#1d3d3c`), 15/500 Aeonik, 6px radius, 12×20px padding. Secondary ghost button: transparent with 1px `rgba(255,255,255,0.16)` border, light-blue text."
- "Build an Auth0 feature card: twilight surface (`#161f34`), 14px radius, 1px `rgba(255,255,255,0.08)` border, 32px internal padding. Stack: optional icon in violet (`#beb4fd`), title in TWK Lausanne 28/400 white-blue (`#f2faff`), body in Aeonik 17/400 light-blue (`#cce9ff`), inline 'Learn more →' link in violet underlined."
- "Design an Auth0 code panel: section ground (`#0d1322`), 8px radius, 1px `rgba(255,255,255,0.08)` border, 20×24px padding. Aeonik Mono 14/400. Violet (`#beb4fd`) keywords, light-blue (`#cce9ff`) default text, white-blue strings. Optional copy button top-right with `aria-live` announcement."
- "Create an Auth0 navbar: 72px tall, transparent at hero (canvas shows through), solidifies to `#030710` on scroll with 1px `rgba(255,255,255,0.08)` bottom border. Auth0 wordmark flush left in white with small 'by Okta' sub-mark in muted blue-grey. Nav links in Aeonik 15/400 light-blue. Primary CTA flush right: violet pill, 6px radius, 12×16px padding."
- "Build an Auth0 stat card: twilight surface, 14px radius, 32px padding. Massive number in TWK Lausanne 64/300 light-blue (`#7fc8ff`) with `-0.03em` tracking. Eyebrow label below in Aeonik 13/500 uppercase muted blue-grey, 0.08em letter-spacing."
- "Design an Auth0 light-flip section: violet-paper ground (`#f8f7ff`), 96px vertical padding, ink in green-deep (`#1d3d3c`). Cards on violet card ground (`#ebe8fe`), 14px radius, 32px padding. CTA in green-deep fill with violet-paper text — the inverse of dark-mode primary."

### Iteration Guide

1. **Start twilight, not black.** If your canvas is `#000000`, it isn't Auth0. The deep-blue undertone of `#030710` is what gives the page its cinematic warmth.
2. **TWK Lausanne 300 is non-negotiable.** Substitute Inter at weight 200–300 with `-0.03em` tracking. Don't substitute a heavier weight.
3. **Body in Aeonik 17/400, not Inter 16/400.** The 17px and the geometric grotesque metrics matter.
4. **Violet CTA on dark, green-deep CTA on light.** The two are mirror states of each other. Don't use orange for primary CTA — orange is brand-mark only.
5. **Halo glow behind hero copy.** A single soft 240px-radius `rgba(190,180,253,0.32)` bloom is what makes the page cinematic. Without it, the page feels flat.
6. **6.4px radius, not 8px.** The slightly utilitarian radius is the engineering-tool quality.
7. **Cinematic reveals over hover micro-states.** 600ms section fade-ups with 80ms stagger sell the brand more than card-hover lifts.
8. **Light-flip sparingly.** Use a violet-paper light section 1–2 times per page max. The twilight canvas is the brand.
