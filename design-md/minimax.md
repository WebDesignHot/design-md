---
name: MiniMax
tagline: Stark monochrome canvas broken open by vibrant gradient product cards — coral, magenta, blue, purple as model identity.
updated_at: 2026-05-05T19:20:38+12:00
published_at: 2026-05-03T20:43:35+12:00
author: webdesignhot
source_url: https://www.minimax.io
spec: design.md/v1.5
quality: curated
featured: false
categories: [ai, saas, dev-tools]
tags: [light, mono-then-vivid, sans, geometric, pill, dual-rhythm]
preview_swatch: ['#ffffff', '#0a0a0a', '#ff5530']
related: [deepseek, anthropic]
description: 'MiniMax presents itself as a premium AI infrastructure brand through a striking duality — bold black-pill CTAs and stark white canvas for marketing, paired with vibrant gradient product cards (coral, magenta, blue, purple) that turn each model release into a distinctive visual identity. The system uses DM Sans across all surfaces, employs an oversized 80px hero display with -2px tracking, anchors major actions in deep near-black pills, and layers content density via a 3-column documentation grid with sidebar nav, prose body, and TOC.'

colors:
  bg: '#ffffff'                 # canvas-white, primary page background
  bg-surface: '#f7f8fa'         # subtle section background, search-pill rest
  bg-surface-soft: '#f2f3f5'    # quieter section divisions
  bg-footer: '#0a0a0a'          # dense black multi-column footer
  surface: '#ffffff'            # default card surface
  surface-card: '#ffffff'       # standard documentation/feature card
  surface-feature: '#f7f8fa'    # quieter feature panel
  text: '#0a0a0a'               # ink — primary headline and CTA text
  text-strong: '#000000'        # ink-strong — promo banners, max contrast
  text-body: '#222222'          # charcoal — body text on light surfaces
  text-secondary: '#45515e'     # slate — secondary text, metadata
  text-tertiary: '#5f5f5f'      # steel — table headers, sidebar inactive
  text-muted: '#8e8e93'         # stone — muted captions, tab inactive
  text-faint: '#a8aab2'         # muted — footer link text, de-emphasized
  brand: '#0a0a0a'              # primary CTA fill — black pill anchor
  brand-pressed: '#222222'      # button-primary-pressed
  brand-coral: '#ff5530'        # M2.7 / Token Plan signature high-impact accent
  brand-magenta: '#ea5ec1'      # Music 2.6 product-card identity
  brand-blue: '#1456f0'         # Hailuo video product identity
  brand-blue-deep: '#1d4ed8'    # form-control activation, link emphasis
  brand-blue-mid: '#3b82f6'     # secondary blue accent
  brand-blue-700: '#17437d'     # documentation tag/reference text
  brand-blue-200: '#bfdbfe'     # code badges, info-tag backgrounds
  brand-cyan: '#3daeff'         # atmospheric blue for product gradients
  brand-purple: '#a855f7'       # Speech 2.8 product identity
  border: '#e5e7eb'             # 1px input border, primary divider
  border-soft: '#eaecf0'        # quieter table-row divider
  on-brand: '#ffffff'           # white text on black pill
  on-dark: '#ffffff'            # white text on dark surfaces
  on-coral: '#ffffff'           # white text on coral product card
  semantic-success-bg: '#e8ffea' # pale-green wash for success badges
  semantic-success-text: '#1ba673' # deep-green ink for success labels
  semantic-error: '#d45656'     # input border error state

typography:
  display:
    family: '"DM Sans", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype: 'kern, calt, ss01'
  body:
    family: '"DM Sans", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    hero-display:    { size: 80, weight: 600, lineHeight: 1.10, tracking: '-2px',    family: display, opentype: 'kern' }
    display-lg:      { size: 56, weight: 600, lineHeight: 1.10, tracking: '-1.5px',  family: display }
    heading-lg:      { size: 40, weight: 600, lineHeight: 1.20, tracking: '-1px',    family: display }
    heading-md:      { size: 32, weight: 600, lineHeight: 1.25, tracking: '-0.5px',  family: display }
    heading-sm:      { size: 24, weight: 600, lineHeight: 1.30, tracking: '0',       family: display }
    card-title:      { size: 20, weight: 600, lineHeight: 1.40, tracking: '0',       family: body }
    subtitle:        { size: 18, weight: 500, lineHeight: 1.50, tracking: '0',       family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    body-bold:       { size: 16, weight: 700, lineHeight: 1.50, tracking: '0',       family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    body-sm-medium:  { size: 14, weight: 500, lineHeight: 1.50, tracking: '0',       family: body }
    button:          { size: 14, weight: 600, lineHeight: 1.40, tracking: '0',       family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.70, tracking: '0',       family: body }
    caption-bold:    { size: 13, weight: 600, lineHeight: 1.50, tracking: '0',       family: body }
    micro:           { size: 12, weight: 400, lineHeight: 1.50, tracking: '0',       family: body }
    code-inline:     { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',       family: mono }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  xl: 16
  xxl: 20
  xxxl: 24
  hero: 32         # vibrant gradient product cards
  full: 9999

spacing:
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 20
  xl: 24
  xxl: 32
  xxxl: 40
  section-sm: 48
  section: 64
  section-lg: 80
  hero: 96

layout:
  page-width: 1280
  prose-width: 720
  sidebar-width: 220
  toc-width: 180
  header-height: 64

components:
  button-primary:
    backgroundColor: '#0a0a0a'
    textColor: '#ffffff'
    rounded: 9999
    padding: '11px 24px'
    font: '14px DM Sans, weight 600'
    use: 'Black pill primary CTA — the dominant action across all surfaces'
  button-primary-pressed:
    backgroundColor: '#222222'
    textColor: '#ffffff'
    rounded: 9999
    use: 'Pressed state of primary pill'
  button-secondary:
    backgroundColor: transparent
    textColor: '#0a0a0a'
    rounded: 9999
    padding: '11px 24px'
    border: '1px solid #0a0a0a'
    font: '14px DM Sans, weight 600'
    use: 'Outlined pill paired with primary in dual-CTA hero patterns'
  button-tertiary:
    backgroundColor: '#ffffff'
    textColor: '#0a0a0a'
    rounded: 9999
    padding: '11px 24px'
    border: '1px solid #e5e7eb'
    use: 'White-fill quieter pill for tertiary nav and informational CTAs'
  button-link:
    backgroundColor: transparent
    textColor: '#0a0a0a'
    padding: '8px 0'
    font: '14px DM Sans, weight 500'
    use: 'Inline text link styled as subtle button'
  button-icon-circular:
    backgroundColor: '#ffffff'
    textColor: '#0a0a0a'
    rounded: 9999
    size: 36
    border: '1px solid #e5e7eb'
    use: 'Circular utility button for carousel arrows, share, copy'
  product-card-coral:
    backgroundColor: '#ff5530'
    textColor: '#ffffff'
    rounded: 32
    padding: '32px'
    use: 'M2.7 / Token Plan signature card — volcanic coral identity'
  product-card-magenta:
    backgroundColor: '#ea5ec1'
    textColor: '#ffffff'
    rounded: 32
    padding: '32px'
    use: 'Music 2.6 product showcase — magenta-pink identity'
  product-card-blue:
    backgroundColor: '#1456f0'
    textColor: '#ffffff'
    rounded: 32
    padding: '32px'
    use: 'Hailuo Video product showcase — deep blue identity'
  product-card-purple:
    backgroundColor: '#a855f7'
    textColor: '#ffffff'
    rounded: 32
    padding: '32px'
    use: 'Speech 2.8 product showcase — saturated purple identity'
  product-card-photo:
    backgroundColor: '#0a0a0a'
    textColor: '#ffffff'
    rounded: 32
    padding: '32px'
    use: 'Dark portrait product card with overlaid photography'
  card-base:
    backgroundColor: '#ffffff'
    rounded: 16
    padding: '24px'
    border: '1px solid #e5e7eb'
    use: 'Standard documentation/feature card'
  card-feature:
    backgroundColor: '#f7f8fa'
    rounded: 16
    padding: '32px'
    use: 'Quieter feature panel on light gray'
  ai-product-tile:
    backgroundColor: '#ffffff'
    rounded: 24
    padding: '24px'
    border: '1px solid #e5e7eb'
    use: 'White card in AI Product Matrix grid (Agent, Hailuo, Audio)'
  promo-cta-card:
    backgroundColor: '#ff5530'
    textColor: '#ffffff'
    rounded: 32
    padding: '64px'
    use: 'Bright coral promo strip with embedded white pill CTA'
  text-input:
    backgroundColor: '#ffffff'
    textColor: '#0a0a0a'
    rounded: 8
    padding: '12px 16px'
    height: 40
    border: '1px solid #e5e7eb'
    focusBorder: '2px solid #1d4ed8'
  search-pill:
    backgroundColor: '#f7f8fa'
    textColor: '#5f5f5f'
    rounded: 8
    padding: '8px 16px'
    height: 36
    border: '1px solid #e5e7eb'
    use: 'Documentation top-bar search field'
  pill-tab:
    backgroundColor: '#ffffff'
    textColor: '#5f5f5f'
    rounded: 9999
    padding: '8px 16px'
    border: '1px solid #e5e7eb'
    use: 'Pricing-page tab nav (inactive)'
  pill-tab-active:
    backgroundColor: '#0a0a0a'
    textColor: '#ffffff'
    rounded: 9999
    padding: '8px 16px'
  segmented-tab:
    backgroundColor: transparent
    textColor: '#5f5f5f'
    padding: '12px 20px'
    border: '0 0 2px transparent solid'
  segmented-tab-active:
    backgroundColor: transparent
    textColor: '#0a0a0a'
    border: '0 0 2px #0a0a0a solid'
  badge-success:
    backgroundColor: '#e8ffea'
    textColor: '#1ba673'
    rounded: 9999
    padding: '4px 10px'
  badge-new:
    backgroundColor: '#ff5530'
    textColor: '#ffffff'
    rounded: 9999
    padding: '4px 10px'
  badge-beta:
    backgroundColor: '#bfdbfe'
    textColor: '#1d4ed8'
    rounded: 9999
    padding: '4px 10px'
  badge-code:
    backgroundColor: '#bfdbfe'
    textColor: '#1d4ed8'
    rounded: 6
    padding: '2px 6px'
  promo-banner:
    backgroundColor: '#0a0a0a'
    textColor: '#ffffff'
    padding: '12px 20px'
    use: 'Sticky black promotional strip ABOVE the top nav'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'Respects prefers-reduced-motion: reduce — pill press feedback collapses to opacity-only; product-card carousel auto-advance pauses; tab indicator slide becomes instant swap'

breakpoints:
  small-mobile: 480
  mobile: 768
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: '0 1px 2px rgba(0, 0, 0, 0.04)'                                        # card-recommendation hover lift
  standard: '0 4px 6px rgba(0, 0, 0, 0.08)'                                       # standard feature cards, dropdowns
  elevated: '0 0 22px rgba(0, 0, 0, 0.08)'                                        # diffuse glow on featured product cards
  deep: '0 12px 16px -4px rgba(36, 36, 36, 0.08)'                                 # modals, sticky panels
  ring: '0 0 0 2px rgba(29, 78, 216, 0.5)'                                        # focus halo, brand-blue-deep based

accessibility:
  contrast-text-on-bg: 19.8           # #0a0a0a on #ffffff — AAA at all sizes
  contrast-text-on-brand: 19.8        # #ffffff on #0a0a0a — AAA
  contrast-text-on-coral: 4.1         # #ffffff on #ff5530 — AA at large/headline sizes
  contrast-text-on-magenta: 3.0       # #ffffff on #ea5ec1 — large only — used at hero scale
  contrast-text-body: 13.6            # #222222 on #ffffff — AAA
  contrast-success-pair: 4.6          # #1ba673 on #e8ffea — AA
  focus-ring: '2px solid #1d4ed8 with 2px offset'
  reduced-motion-honored: true

dark-mode: light-only

lineage:
  summary: |
    MiniMax is the album-cover-meets-infrastructure design system —
    each model release becomes a vibrant gradient product card (coral
    M2.7, magenta Music 2.6, blue Hailuo, purple Speech 2.8), and
    these cards lay out across the homepage like a record-shop bin.
    The chrome itself is monochrome and disciplined: stark white
    canvas, near-black pill CTAs, DM Sans across the entire system.
    What MiniMax borrows from album design is the idea that each
    product release should have its own distinctive visual identity
    — color, gradient, photography — while the brand frame around
    them stays neutral. The pill geometry traces to Vercel and
    Linear's pill discipline; the 32px-radius gradient cards are a
    MiniMax invention that has been imitated across Chinese AI brands
    (Moonshot, Zhipu) since. The 80px hero with -2px tracking and DM
    Sans 600 is the typographic signature — magazine-grade
    compression at marketing scale. Documentation surfaces invert the
    energy: 3-column desktop layout with left sidebar, center prose
    body at 720px, right TOC, and 14px DM Sans body type at 1.5
    line-height for long-form prose.
  influences:
    - name: Vercel
      role: Pill-CTA discipline (`rounded-full`) and stark monochrome chrome
      url: https://vercel.com
    - name: Linear
      role: Custom-weight sans + pill geometry as keyboard-shortcut signature
      url: https://linear.app
    - name: Apple Music / Spotify Album Art
      role: Each product release as a distinctive visual identity (color/gradient)
      url: https://www.apple.com/apple-music/
    - name: DM Sans (Colophon Foundry)
      role: Single-typeface system — geometric humanist sans across all roles
      url: https://fonts.google.com/specimen/DM+Sans
---

## 1. Visual Theme & Atmosphere

MiniMax stages itself as a Chinese AI infrastructure brand with a
sophisticated dual identity. Marketing surfaces and platform pages
anchor in stark white canvas with deep-black typographic emphasis —
the brand voice is confident, technical, almost editorial. But each
model release gets its own vibrant gradient identity card: M2.7 in
volcanic coral-red, Music 2.6 in magenta-pink, Hailuo in deep blue,
Speech 2.8 in saturated purple. Together these vibrant tiles read
like album covers laid out on the homepage — each one declaring its
own product personality.

DM Sans anchors every surface from oversized 80px hero displays down
to 12px micro labels. The geometric, slightly humanist character of
the face suits both the dense documentation surfaces (where 14px body
type carries 1.5 line-height for long-form prose) and the high-impact
marketing displays (where -2px letter-spacing tightens 80px headlines).
Buttons are universally pill-shaped (`rounded-full`) with a sharp
two-tier system: black-pill primary (the dominant CTA) and outline-pill
secondary. Cards split into two distinct families: vibrant gradient
product showcases (32px corner softening) and quiet white documentation
cards (16px corner softening).

The dual rhythm is what defines the brand. Where Cohere uses dark
green/navy bands as section breaks, MiniMax uses vibrant gradient
product cards as the breaks themselves — they're not section
backgrounds, they're content units. The chrome around them stays so
restrained (white canvas, black pills, hairline borders) precisely
because the product cards are doing the chromatic work. The 32px
hero radius vs. the 16px card radius — that doubled radius — is the
visual signature: it tells you "this card is a featured product
moment" before you've even read the content.

What truly distinguishes MiniMax is the pricing page's pill-tab
discipline. Most AI platforms render pricing as table-heavy density;
MiniMax frames it as a tab-switch decision (Token Plan / Audio
Subscription / Video Package), with a single dominant pill-tab-active
in black announcing the user's current selection. The page reads as
"here are three cleanly-separated paths — pick one" rather than "here
are 12 columns of pricing data, decode them."

**Key Characteristics:**
- Stark monochrome palette — black `#0a0a0a` and white `#ffffff` — broken open by saturated brand-color gradient cards
- Distinct product-color encoding: each model line has its own vibrant brand color (coral M2.7, magenta Music 2.6, blue Hailuo, purple Speech 2.8)
- DM Sans across the entire system; no second typeface enters the brand canvas
- Pill-shaped buttons (9999px) and pill-shaped tabs everywhere; rectangular forms only inside data tables and dense docs
- Hero typography uses tight 1.10 line-height with -2px letter-spacing for impact
- Documentation surfaces use a 3-column layout: left sidebar nav (220px), center prose body (720px), right table-of-contents (180px)
- Black promo banners above the nav for time-bound brand moments
- 32px radius gradient cards vs. 16px white documentation cards — the doubled radius is the signature
- Footer is dense black multi-column with coral "AI moves fast" eyebrow

## 2. Color Palette & Roles

### Primary
- **Canvas White** (`#ffffff`): The dominant page background and card surface. Cool, clean, no warm shift.
- **Ink** (`#0a0a0a`): Primary headline and CTA text — the brand's near-black anchor. Used for body display, button fills, footer background.
- **Ink Strong** (`#000000`): Pure black used in promo banners and hero displays for maximum contrast.

### Brand & Dark
- **CTA Black** (`#0a0a0a`): Black pill primary CTA fill — the most recognizable interactive element.
- **CTA Pressed** (`#222222`): Charcoal pressed state for primary pill, also body text on light surfaces.
- **Footer Background** (`#0a0a0a`): Dense multi-column footer canvas; identical to ink.

### Accent — Product Identity
- **Brand Coral** (`#ff5530`): Signature high-impact accent. Used on M2.7 product card, "Token Plan" hero band, promo CTA strips, and "NEW" badges. Carries the brand's most attention-grabbing energy.
- **Brand Magenta** (`#ea5ec1`): Secondary product-card identity (Music 2.6); used for music/audio product encoding.
- **Brand Blue** (`#1456f0`): Hailuo video product identity; primary blue accent across the system.
- **Brand Blue Deep** (`#1d4ed8`): Form-control activation, link emphasis, focus rings.
- **Brand Blue Mid** (`#3b82f6`): Secondary blue accent for documentation links.
- **Brand Blue 700** (`#17437d`): Documentation tag and reference text color.
- **Brand Cyan** (`#3daeff`): Atmospheric blue for product gradients and decorative wash.
- **Brand Blue 200** (`#bfdbfe`): Code badges, info-tag backgrounds.
- **Brand Purple** (`#a855f7`): Speech 2.8 and minor purple-product identity; gradient mate for magenta cards.

### Interactive
- **Primary Pill Fill**: Black `#0a0a0a` — the system's only solid CTA color.
- **Pill Pressed**: Charcoal `#222222` — single-step darkening.
- **Pill Disabled**: Border `#e5e7eb` background, muted `#a8aab2` text.
- **Form Focus**: Border switches to `2px solid #1d4ed8` (brand-blue-deep).
- **Link**: Body links use `#1d4ed8` with underline; hover thickens underline.

### Neutral Scale
- **Ink** (`#0a0a0a`): Primary headline ink.
- **Charcoal** (`#222222`): Body text on light surfaces.
- **Slate** (`#45515e`): Secondary text, metadata.
- **Steel** (`#5f5f5f`): Tertiary text, table headers, sidebar inactive items.
- **Stone** (`#8e8e93`): Muted captions and tab inactive labels.
- **Muted** (`#a8aab2`): Footer link text and de-emphasized labels.
- **On-Dark Muted**: `rgba(255,255,255,0.7)` — secondary text on black surfaces.

### Surface & Borders
- **Surface** (`#f7f8fa`): Subtle section backgrounds, search-pill rest, sidebar-nav active state.
- **Surface Soft** (`#f2f3f5`): Quieter section divisions.
- **Hairline** (`#e5e7eb`): 1px input border and primary divider.
- **Hairline Soft** (`#eaecf0`): Quieter table-row divider and secondary section break.

### Shadow Colors
- **Subtle** (`rgba(0, 0, 0, 0.04)`): `0 1px 2px` — card-recommendation hover lift.
- **Standard** (`rgba(0, 0, 0, 0.08)`): `0 4px 6px` — feature cards, dropdowns.
- **Atmospheric** (`rgba(0, 0, 0, 0.08)`): `0 0 22px` — diffuse glow on featured product cards.
- **Modal** (`rgba(36, 36, 36, 0.08)`): `0 12px 16px -4px` — modals, confirmation dialogs.
- **Brand-tinted purple** (`rgba(44, 30, 116, 0.16)`): `0 0 15px` — under purple-themed cards.

### Semantic
- **Success Background** (`#e8ffea`): Pale-green wash for success badges.
- **Success Text** (`#1ba673`): Deep-green ink for success badge labels.
- **Error** (`#d45656`): Input border error state; error label microcopy.
- **Info Pair**: Brand Blue 200 background + Brand Blue Deep text for `BETA`/info badges.

## 3. Typography Rules

### Font Family

**DM Sans** (Colophon Foundry) is the single typeface across every surface and every role. The face is chosen for its dual fluency: it scales cleanly from 80px hero displays (where -2px letter-spacing creates magazine-grade tightness) down to 12px micro labels (where the slightly humanist counters maintain legibility). DM Sans has no italic variant in MiniMax's deployment — emphasis comes from weight (500/600/700) instead.

**Fallback chain**: `DM Sans, Inter, "Helvetica Neue", Helvetica, Arial, sans-serif`.

**Mono**: When code samples appear in documentation, the system uses a system-monospace fallback (`JetBrains Mono`, `ui-monospace`, `SF Mono`, `Menlo`). MiniMax does not ship a custom monospace face — code is treated as content, not as brand expression.

**OpenType features**: Default `kern` and `calt` only. DM Sans's stylistic sets are not used in the brand chrome.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Hero Display | DM Sans | 80px (5.0rem) | 600 | 1.10 | -2px | kern, calt | Homepage hero ("MiniMax Music 2.6") |
| Display Large | DM Sans | 56px (3.5rem) | 600 | 1.10 | -1.5px | kern | Section openers, major page heroes |
| Heading Large | DM Sans | 40px (2.5rem) | 600 | 1.20 | -1px | kern | Sub-page headlines ("Token Plan", "Models Overview") |
| Heading Medium | DM Sans | 32px (2.0rem) | 600 | 1.25 | -0.5px | kern | Subsection headers ("Full-Stack Model Matrix") |
| Heading Small | DM Sans | 24px (1.5rem) | 600 | 1.30 | 0 | kern | Card titles, feature headers |
| Card Title | DM Sans | 20px (1.25rem) | 600 | 1.40 | 0 | kern | Product-card titles, feature-tile headers |
| Subtitle | DM Sans | 18px (1.13rem) | 500 | 1.50 | 0 | kern | Section subtitles, lead body |
| Body | DM Sans | 16px (1.0rem) | 400 | 1.50 | 0 | kern | Primary body text |
| Body Bold | DM Sans | 16px (1.0rem) | 700 | 1.50 | 0 | kern | Body emphasis |
| Body Small | DM Sans | 14px (0.88rem) | 400 | 1.50 | 0 | kern | Secondary body, table cells, navigation |
| Body Small Medium | DM Sans | 14px (0.88rem) | 500 | 1.50 | 0 | kern | Active sidebar nav, button labels |
| Button | DM Sans | 14px (0.88rem) | 600 | 1.40 | 0 | kern | Pill button labels |
| Caption | DM Sans | 13px (0.81rem) | 400 | 1.70 | 0 | kern | Documentation captions, fine print |
| Caption Bold | DM Sans | 13px (0.81rem) | 600 | 1.50 | 0 | kern | Badge labels, table-header text |
| Micro | DM Sans | 12px (0.75rem) | 400 | 1.50 | 0 | kern | Footer microcopy, chip labels |
| Code Inline | JetBrains Mono | 14px (0.88rem) | 400 | 1.50 | 0 | — | Inline code in docs prose |

### Principles

- **Tight hero leading** (1.10) and aggressive negative letter-spacing on display sizes (-2px at 80px) create a magazine-quality typographic display unique to MiniMax.
- **Generous body leading** (1.50) keeps long-form documentation comfortable; captions push to 1.70 for scientific-paper-grade clarity.
- **Weight discipline**: 400 (body), 500 (medium emphasis), 600 (headings/buttons), 700 (strong inline emphasis). Heavier weights are not used.
- **Single typeface strategy** — never mix DM Sans with another sans-serif. Code samples (when shown) use a system monospace fallback, but no second sans enters the brand canvas.
- **Negative tracking scales with size**: -2px at 80px → -1.5px at 56px → -1px at 40px → -0.5px at 32px → 0 at 24px and below. The tightening is what gives the headlines their compressed, album-cover quality.
- **Caption weight 400 with 1.70 line-height** — the unusually generous leading at small sizes is for documentation legibility, not for visual rhythm. Captions read like scientific-paper figure annotations.

## 4. Component Stylings

### Buttons

**`button-primary`** — Black pill primary CTA, the dominant action across all surfaces.
- Background `#0a0a0a`, text `#ffffff`
- Padding `11px 24px`, rounded `9999px` (full pill)
- Font: 14px DM Sans weight 600, line-height 1.40
- Hover: opacity 0.92 over 150ms (no color shift)
- Pressed `button-primary-pressed`: lifts to `#222222`
- Disabled: background `#e5e7eb`, text `#a8aab2`
- Use: Hero CTAs, "Get Started", "Sign Up", primary action everywhere

**`button-secondary`** — Outlined pill, paired with primary in dual-CTA hero patterns.
- Background transparent, text `#0a0a0a`
- 1px solid `#0a0a0a` border, rounded `9999px`, padding `11px 24px`
- Hover: background fills `rgba(10,10,10,0.05)` over 150ms

**`button-tertiary`** — White-fill quieter pill for tertiary nav and informational CTAs.
- Background `#ffffff`, text `#0a0a0a`
- 1px solid `#e5e7eb` border, rounded `9999px`, padding `11px 24px`

**`button-link`** — Inline text link styled as subtle button.
- Background transparent, text `#0a0a0a`
- 14px DM Sans weight 500, padding `8px 0`
- Underline appears on activation

**`button-icon-circular`** — 36×36px utility button (carousel arrows, share, copy).
- Background `#ffffff`, 1px solid `#e5e7eb`, rounded `9999px`
- Icon stroke `#0a0a0a` at 1.5px

### Vibrant Product Cards

**`product-card-coral`** — M2.7 / Token Plan signature card.
- Background `#ff5530`, text `#ffffff`
- Rounded `32px` (signature hero radius), padding `32px`
- Hosts the M2.7 wordmark in massive 56px DM Sans weight 600 with white tagline
- May embed a secondary `button-tertiary` CTA pill (white on coral)

**`product-card-magenta`** — Music 2.6 product showcase.
- Background `#ea5ec1`, text `#ffffff`
- Same shape, padding, radius
- Often paired with abstract waveform or sound-art photography

**`product-card-blue`** — Hailuo Video product showcase.
- Background `#1456f0`, text `#ffffff`
- Same shape — video product imagery overlay

**`product-card-purple`** — Speech 2.8 / variant product showcase.
- Background `#a855f7`, text `#ffffff`
- Same shape

**`product-card-photo`** — Dark portrait product card (homepage S2 placement).
- Background `#0a0a0a` with overlaid product photo, text `#ffffff`
- Same shape — photographic content carries the visual energy

### Cards & Containers

**`card-base`** — Standard documentation/feature card.
- Background `#ffffff`, rounded `16px`, padding `24px`
- 1px solid `#e5e7eb` border, no shadow

**`card-feature`** — Quieter feature panel on light gray.
- Background `#f7f8fa`, rounded `16px`, padding `32px`
- No border, no shadow — surface contrast does the containment

**`card-recommendation`** — "Recommended Reading" tile in documentation footer.
- Background `#ffffff`, rounded `12px`, padding `20px`
- 1px solid `#e5e7eb`, with hover `0 1px 2px rgba(0,0,0,0.04)` lift

**`promo-cta-card`** — Bright orange "Refunds of 10%..." promo strip.
- Background `#ff5530`, text `#ffffff`
- Rounded `32px`, padding `64px`
- Embedded `button-tertiary` (white pill on coral) for "Join Now" action

**`ai-product-tile`** — White card in AI Product Matrix grid.
- Background `#ffffff`, rounded `24px`, padding `24px`
- 1px solid `#e5e7eb` border
- Carries an icon/illustration top, title at 20px card-title weight, description at 14px body-sm

### Inputs & Forms

**`text-input`** — Standard text field.
- Background `#ffffff`, text `#0a0a0a`
- 1px solid `#e5e7eb` border, rounded `8px`, padding `12px 16px`, height `40px`
- Font: 16px DM Sans weight 400

**`text-input-focused`** — Activated state.
- Border switches to `2px solid #1d4ed8` (brand-blue-deep)
- 2px focus ring at `rgba(29,78,216,0.5)` offset 2px

**`text-input-error`** — Validation error.
- Border switches to `1px solid #d45656`
- Error label below in matching red 14px body-sm weight 400

**`search-pill`** — Documentation top-bar search field.
- Background `#f7f8fa`, text `#5f5f5f`
- Rounded `8px`, height `36px`, 1px solid `#e5e7eb`
- Magnifier icon prefix in `#5f5f5f`

### Tabs

**`segmented-tab` + `segmented-tab-active`** — Underline-style tab navigation (M2.7 page Benchmarks/Self-Eval/Multi-Agent).
- Inactive: text `#5f5f5f`, transparent background, padding `12px 20px`
- Active: text `#0a0a0a`, 2px bottom border `#0a0a0a`
- Tab indicator slides between active states over 200ms with ease-emphasized

**`pill-tab` + `pill-tab-active`** — Pricing-page tab nav (Token Plan / Audio / Video).
- Inactive: background `#ffffff`, text `#5f5f5f`, 1px solid `#e5e7eb` border, rounded `9999px`, padding `8px 16px`
- Active: background `#0a0a0a`, text `#ffffff` — single dominant active state

### Badges & Status

**`badge-success`** — Pale-green confirmation badge ("Available", "Active").
- Background `#e8ffea`, text `#1ba673`
- 13px DM Sans weight 600, rounded `9999px`, padding `4px 10px`

**`badge-new`** — Coral "NEW" / "Live" pill for fresh releases.
- Background `#ff5530`, text `#ffffff`
- Same shape, padding

**`badge-beta`** — Pale-blue informational pill.
- Background `#bfdbfe`, text `#1d4ed8`
- Same shape, padding

**`badge-code`** — Inline code-style chip ("Code", "API").
- Background `#bfdbfe`, text `#1d4ed8`
- Rounded `6px`, padding `2px 6px`, 13px caption-bold

**`promo-banner`** — Sticky black promotional strip ABOVE the top nav.
- Background `#0a0a0a`, text `#ffffff`
- 14px DM Sans weight 500, padding `12px 20px`
- One-line copy with optional inline link

### Data Tables

**`data-table`** — Documentation models comparison table.
- Background `#ffffff`, text `#0a0a0a`
- 14px DM Sans, rounded `8px`, 1px solid `#e5e7eb`

**`data-table-header`** — Top header row.
- Background `#f7f8fa`, text `#5f5f5f`
- 13px caption-bold, padding `12px 16px`

**`data-table-row`** — Body rows.
- Background `#ffffff`, text `#0a0a0a`
- 14px body-sm, padding `16px`, bottom border `1px solid #eaecf0`

### Navigation

**Top Navigation (Marketing)** — Sticky white bar.
- Background `#ffffff`, height ~64px
- Bottom border `1px solid #eaecf0`
- Layout: MiniMax wordmark left, horizontal link list (Models, Product, API, Company), right cluster: black-pill "Contact Us" + outlined-pill "Login"

**Top Navigation (Documentation/Platform)** — Compressed nav with center search.
- Background `#ffffff`, height ~56px
- Search-pill at center, "Documentation / Account / Subscribe" links right
- Black-pill "Sign Up" at far right

**`sidebar-nav-item` + `sidebar-nav-item-active`** — Documentation left rail.
- Inactive: transparent background, text `#222222`, 14px body-sm
- Rounded `6px`, padding `8px 16px`
- Active: background `#f7f8fa`, text `#0a0a0a`, 14px body-sm-medium

**`doc-toc-item`** — Right-rail table-of-contents links.
- Background transparent, text `#5f5f5f`, 14px body-sm
- Padding `8px 0`
- Active item color shifts to `#0a0a0a`

### Signature Components

**`hero-band-marketing`** — Centered hero with massive 80px display + dual-CTA pair.
- Layout: centered headline in 80px DM Sans weight 600, centered subtitle in 18px subtitle weight 500 color `#5f5f5f`
- Centered button row: `button-primary` + `button-secondary` paired

**`product-matrix-grid`** — 4-column horizontal scroll of vibrant gradient product cards.
- Each tile is one of `product-card-coral` / `magenta` / `blue` / `purple` / `photo`
- Card title in 56px display-lg or 40px heading-lg
- Below wordmark: thin tagline in 14px body-sm at 80% white opacity
- Optional badge top-right: `badge-new`
- Card heights uniform (~360-400px); row scrolls horizontally on mobile

**`ai-product-matrix`** — 4-column grid of white product tiles below the vibrant matrix.
- Each tile is `ai-product-tile`
- Top: 100px-tall illustration zone (line-art icon or 3D mark)
- Title in 20px card-title, description in 14px body-sm `#5f5f5f`

**`testimonial-stat-row`** — Stats strip ("214,000+ Enterprise Clients & Developers").
- Horizontal row of 4 stat cells
- Each cell: 40px heading-lg number + 14px body-sm label below in `#5f5f5f`

**`footer-region`** — Dense black-canvas multi-column footer.
- Background `#0a0a0a`, padding `64px 32px`
- Top row: MiniMax wordmark + tagline + social icons (X, Twitter, GitHub)
- Body: 4-column link grid (Research / Product / API / Company / News)
- Section headers in 14px body-sm-medium `#ffffff`
- Footer links in 14px body-sm color `#a8aab2`, padding `4px 0`

## 5. Layout Principles

### Spacing System

Base unit is 4px (8px primary increment). Tokens:
- `xxs` (4px), `xs` (8px), `sm` (12px), `md` (16px), `lg` (20px), `xl` (24px), `xxl` (32px), `xxxl` (40px)
- `section-sm` (48px), `section` (64px), `section-lg` (80px), `hero` (96px)

**Section rhythm**: Marketing pages separate at `hero` (96px) above-fold, then `section-lg` (80px) below. Documentation tightens to `section` (64px). Table rows compress to `md` (16px).

**Card internal padding**: Vibrant product cards use `xxl` (32px); documentation cards use `lg-xl` (20-24px); promo strips expand to `section` (64px).

### Grid & Container

- **Marketing pages**: 1280px max-width with 32px gutters
- **Homepage product matrix**: 4-column row of 32px-rounded gradient cards, each ~280-320px wide
- **AI Product Matrix**: 4-column grid of 16px-rounded white cards
- **Documentation**: 3-column layout — left sidebar nav (220px), center prose body (720px max-width), right TOC (180px). Sidebar persists on desktop; collapses to drawer below 1024px.
- **Token Plan / pricing**: 2-column tabs above a 3-column tier card grid

### Whitespace Philosophy

Marketing pages give product photography and color cards generous breathing room — `hero` (96px) above-the-fold creates visual oxygen for the 80px hero display. Inside documentation, whitespace tightens dramatically: section gaps drop to `xxl` (32px), table rows pack down to `md` (16px), and the sidebar nav uses `xs` (8px) vertical rhythm.

The dual rhythm (marketing-loose, docs-dense) is intentional: marketing pages are about emotional impact and product personality; documentation is about scanability and reference. The same DM Sans handles both, but the spacing tells you which surface you're on.

### Section Cadence

Home page rhythm:
1. **Promo banner** (sticky black, above nav)
2. **Top nav** (white)
3. **Hero band** (white, 80px display + dual-CTA)
4. **Vibrant product matrix** (4-column gradient cards)
5. **AI product matrix** (4-column white tiles)
6. **Testimonial stat row** (4-cell horizontal)
7. **Promo CTA card** (coral, embedded white pill)
8. **Footer** (black, multi-column)

## 6. Shapes & Radius Scale

| Token | Value | Tier | Use |
|-------|-------|------|-----|
| `xs` | 4px | Micro | Code chips, micro-controls |
| `sm` | 6px | Compact | Compact controls, table cells, code badges |
| `md` | 8px | Standard | Inputs, secondary buttons, search pill |
| `lg` | 12px | Comfortable | Documentation cards, recommendation tiles |
| `xl` | 16px | Featured | Standard feature cards, AI product tiles |
| `xxl` | 20px | Larger | Larger feature panels |
| `xxxl` | 24px | AI tile | AI product tile feature variants |
| `hero` | 32px | Signature | Vibrant gradient product cards, promo CTA strip |
| `full` | 9999px | Pill | All buttons, all pill tabs, badges |

### Photography Geometry

- Vibrant product cards use **32px** corner softening — distinct from the **16px** used on quiet white cards. The doubled radius is the visual signature of "this is a featured product moment."
- Product imagery inside cards is treated as photographic content (silhouettes, dark portrait studio lighting) without rounded internal frames.
- Avatar circles in testimonials are `9999px` — perfect circles.
- The 32px-vs-16px contrast is the system's most identifiable shape signal: in a single viewport, you can immediately see which cards are "featured" and which are "documentation."

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (flat) | No shadow; `#e5e7eb` border | Default cards, table rows, form inputs |
| 1 (subtle) | `0 1px 2px rgba(0, 0, 0, 0.04)` | Card-recommendation, hover-elevated tiles |
| 2 (card) | `0 4px 6px rgba(0, 0, 0, 0.08)` | Standard feature cards, dropdowns |
| 3 (atmospheric) | `0 0 22px rgba(0, 0, 0, 0.08)` | Diffuse glow on featured product cards |
| 4 (modal) | `0 12px 16px -4px rgba(36, 36, 36, 0.08)` | Modals, confirmation dialogs, sticky panels |
| 5 (purple-tinted) | `0 0 15px rgba(44, 30, 116, 0.16)` | Purple-themed cards subtle ambient lift |
| 6 (focus ring) | `0 0 0 2px rgba(29, 78, 216, 0.5)` | Keyboard focus halo |

**Shadow Philosophy**: The system runs predominantly flat. Elevation is reserved for sticky panels, dropdowns, and the rare floating CTA. The vibrant gradient product cards carry their own atmospheric depth via internal radial gradients and silhouette imagery — no shadow needed; the color does the work. Brand-tinted purple shadows appear under purple-themed cards for subtle ambient lift. Dotted/grain textures occasionally appear inside product cards as photographic-content decoration; these are not formalized as system tokens.

The shadow philosophy mirrors the chromatic philosophy: stay flat by default, then elevate dramatically when the moment calls for it. The `0 0 22px` atmospheric glow on a featured product card is the system's most recognizable elevation signal — diffuse, brand-colored, no offset, suggesting the card is glowing rather than floating.

## 8. Interaction & Motion

### Easing
- **Standard ease**: `cubic-bezier(0.4, 0, 0.2, 1)` — material-style for state transitions
- **Emphasized ease**: `cubic-bezier(0.2, 0, 0, 1)` — for tab indicator slides, mega-menu opens

### Duration Buckets
- **Fast**: 150ms — pill press feedback, button hover opacity
- **Standard**: 200ms — most state transitions, card hover lift
- **Slow**: 320ms — section reveals, product-card carousel transitions

### Per-component micro-states

- **Primary pill press**: opacity 1.0 → 0.92 over 150ms; on release, returns to 1.0 with slight bounce
- **Secondary outlined pill hover**: background fills `rgba(10,10,10,0.05)` over 150ms
- **Card hover (recommendation)**: `0 1px 2px rgba(0,0,0,0.04)` shadow appears over 200ms; no transform
- **Vibrant product card hover**: 1.02× scale transform over 200ms with ease-emphasized; shadow remains static
- **Sidebar nav active**: background fades from transparent to `#f7f8fa` over 150ms; weight increases from 400 to 500 (no animation, just instant)
- **Tab indicator slide**: the 2px bottom border under segmented tabs slides from previous to current over 200ms with ease-emphasized
- **Pill-tab-active toggle**: background fades white→black over 200ms, text fades dark→white in parallel

### Page transitions

- Mega-menu dropdowns expand from height 0 to auto over 200ms with ease-emphasized
- Vibrant product cards in the matrix use a staggered entrance (50ms delay between cards) with opacity 0 → 1 + 8px translate-up over 320ms
- Promo banner ascends from height 0 to auto on first load if dismissable

### Reduced motion

The site respects `prefers-reduced-motion: reduce`. Pill press feedback collapses to opacity-only (no scale). Product-card carousel auto-advance pauses. Tab indicator slide becomes instant swap. Card hover transform disables; only the shadow appears. Stagger entrance animations all collapse to instant appearance.

## 9. Accessibility & A11y

### Contrast pairs (WCAG)
- **Body text on canvas**: `#0a0a0a` on `#ffffff` = 19.8:1 — AAA at all sizes
- **White on black brand**: `#ffffff` on `#0a0a0a` = 19.8:1 — AAA
- **Charcoal body on canvas**: `#222222` on `#ffffff` = 13.6:1 — AAA
- **Steel tertiary on canvas**: `#5f5f5f` on `#ffffff` = 6.0:1 — AA
- **White on coral product card**: `#ffffff` on `#ff5530` = 4.1:1 — AA at large/headline sizes only; product card text uses 56px display-lg which qualifies
- **White on magenta product card**: `#ffffff` on `#ea5ec1` = 3.0:1 — large only — used at hero scale only
- **Success pair**: `#1ba673` on `#e8ffea` = 4.6:1 — AA
- **Brand-blue link on canvas**: `#1d4ed8` on `#ffffff` = 7.6:1 — AAA at body sizes

### Focus indicators
- Default focus ring: 2px solid `#1d4ed8` (brand-blue-deep) with 2px offset
- Form-input focus: border becomes `2px solid #1d4ed8`, with halo `0 0 0 2px rgba(29,78,216,0.5)` outside
- Pill CTAs: focus halo at `0 0 0 2px rgba(29,78,216,0.5)` outside the pill

### ARIA patterns
- **Top nav dropdowns**: `role="menubar"` with arrow-key navigation; submenus use `role="menu"` with `aria-expanded`
- **Documentation sidebar**: `role="navigation"` with nested `<ul>` lists; active item gets `aria-current="page"`
- **Documentation TOC**: `aria-label="On this page"` with `aria-current="location"` on active section
- **Tabs**: `role="tablist"` + `role="tab"` + `role="tabpanel"` with arrow-key navigation between tabs
- **Pricing pill-tabs**: same tablist pattern, with the dominant active state announced via `aria-selected`
- **Modal dialogs** (e.g., contact form): `role="dialog"`, `aria-modal="true"`, focus trap, escape dismisses
- **Product cards**: `role="article"` with `aria-labelledby` pointing to the model name heading

### Keyboard nav
- Tab order: promo banner close → nav menubar → hero CTA pair → vibrant product matrix (each card focusable) → AI product tiles → CTA card → footer
- Arrow keys move between tabs in tablists and between dropdown items in mega-menu
- Escape closes any popout (dropdown, dialog, mega-menu)
- Enter/Space activate buttons; Enter activates links

### Screen reader hints
- Vibrant product cards announce "M2.7. New. Tap for details" with the badge content as part of the accessible name
- Decorative product imagery has `alt=""` (decorative) since the model name is announced via the card heading
- Footer social icons have descriptive `aria-label` ("MiniMax on X", "MiniMax on GitHub") rather than just "X" or "GitHub"
- Documentation TOC anchors include the section number in the aria-label for scan-friendly navigation

### Reduced motion
The system respects `prefers-reduced-motion: reduce` per §8. All entrance animations collapse to instant. Tab slide indicators become instant swaps. Carousel auto-advance pauses (no manual auto-pause control needed since motion is disabled).

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile (small) | <480px | Single column. Hero drops to 40px. Pill nav collapses to hamburger. Product matrix horizontal-scroll. Footer 1-column accordion. |
| Mobile (large) | 480-767px | AI product matrix renders 2-up. Hero at 56px. Section padding 48px. |
| Tablet | 768-1023px | 2-column AI product matrix. Pill-tab nav returns. Documentation sidebar collapses to drawer. Hero at 64px. |
| Desktop | 1024-1279px | Full 4-column product matrix; 3-column docs grid (sidebar 220px / body 720px / TOC 180px). Hero at 80px. |
| Wide | ≥1280px | Wider hero gutters, larger product photography, fixed 220px sidebar. Page caps at 1280px. |

### Touch Targets
- Pill buttons render at 38-40px effective height — bumps to 44px on mobile via padding override
- Circular icon buttons: 36×36px desktop → 44×44px on mobile
- Form inputs render at 40px height; bumps to 44px on mobile
- Sidebar nav items render at ~32px tall — bumps to 44px on mobile drawers
- Pricing pill-tabs render at ~40px effective tap height with 16px horizontal padding

### Collapsing Strategy
- **Promo banner** stays full-width; collapses to single line at <480px with truncation
- **Top nav** below 1024px collapses to hamburger; horizontal links move into drawer
- **Documentation grid**: 3-column desktop → sidebar-drawer at <1024px → single-column with collapsible sidebar at <768px
- **Product matrix**: 4-column desktop → horizontal-scroll at <1024px (carousel-style with snap points)
- **AI Product Matrix**: 4-column → 2-column at tablet → 1-column at mobile
- **Hero typography**: 80px → 56px at <1024px → 40px at <768px → 32px at <480px
- **Stats strip**: 4-column → 2×2 at <768px → 1-column at <480px

### Image Behavior
- Product card imagery uses photographic content with internal gradient overlays; lazy-loaded below the fold
- AI product tile illustrations are SVG-based; remain crisp at all breakpoints
- Avatar imagery in testimonials uses 1:1 aspect ratio with `9999px` masking
- Vibrant gradient backgrounds are CSS `background-color` (not images) so they render instantly with no flash

## 11. Content & Voice

### Tone

MiniMax writes with precise technical confidence. The voice is "we ship state-of-the-art models — here's what they do." There is no startup breathlessness ("imagine the possibilities!"), no AGI hype, no anthropomorphic language ("our AI thinks"). The product is described in capability terms (parameter count, context window, throughput), and the marketing trusts the reader to understand what those mean.

### Microcopy patterns

**Primary CTAs**: "Get Started", "Sign Up", "Try Now", "Contact Us"
**Pricing CTAs**: "Subscribe", "Choose Plan", "Get the Plan"
**Documentation CTAs**: "Read Docs", "View API Reference", "Get API Key"
**Promo banner**: "Invite & Earn — Rewards for Both!" — short, action-oriented, exclamation-only when warranted

### Error message recipe

`{Field name} is required` for empty fields. `Please enter a valid {field type}` for malformed input. Errors appear directly below the field in 14px body-sm color `#d45656`. No icons unless validation succeeds (then a small green check appears).

For API/system errors: `Something went wrong. Please try again. [Contact support]` with the bracketed link in `#1d4ed8`.

### Empty states

The product matrix has no empty state — the page always shows the latest 4-5 model releases. Documentation search empty states use a single line: "No results for '{query}'. Try fewer terms or [browse documentation]." Account dashboards (when applicable) show a centered illustration + headline + primary CTA pill.

### CTA verb conventions

- "Get Started" — primary onboarding CTA
- "Sign Up" — auth CTA when distinct from "Get Started"
- "Try Now" — for in-platform Playground/demo
- "Contact Us" — for enterprise sales
- "Subscribe" — pricing CTA (not "Buy" — MiniMax frames pricing as subscription)
- "Read Docs" — documentation CTA (not "View" or "See")

The brand avoids "Discover" (sounds breathless), "Explore" (sounds undirected), and "Learn more" (vague). Action verbs are concrete and direct.

## 12. Dark Mode & Theming

**Light-only.** MiniMax does not ship a public dark-mode toggle on its marketing or platform pages. The system uses dark *moments* (the `#0a0a0a` footer, the promo banner, the dark-portrait product card) as structural devices, but there is no per-user dark theme.

The in-product Playground for some MiniMax models uses a dark theme with `#0a0a0a` ground and DM Sans white text, but those tokens are not exposed in the marketing system.

If implementing a MiniMax-flavored dark mode, the suggested mapping:
- `bg` → `#0a0a0a`
- `surface` → `#161618` (one step lighter for cards)
- `surface-soft` → `#1f1f22`
- `text` → `#ffffff`
- `text-secondary` → `rgba(255,255,255,0.7)`
- `text-muted` → `rgba(255,255,255,0.5)`
- `brand` → `#ffffff` (CTAs invert to white pills with `#0a0a0a` text)
- `border` → `rgba(255,255,255,0.12)`
- Vibrant product cards (coral/magenta/blue/purple) persist unchanged — they're designed to stand out against any background
- Documentation card surfaces use `#161618` with `rgba(255,255,255,0.12)` borders

## 13. Lineage & Influences

MiniMax inherits from two distinct lineages, fused into a single system. The **chrome lineage** runs through Vercel and Linear: stark monochrome canvas, near-black pill CTAs, custom-cut sans (in MiniMax's case, DM Sans rather than Inter), pill geometry as the dominant interactive shape. The pill-CTA pattern at 9999px radius is shared with Vercel's Geist system; the typographic compression at hero scale (-2px tracking on 80px display) shares an aesthetic with Linear's marketing pages (though Linear uses Inter Variable rather than DM Sans).

The **product-identity lineage** runs through music streaming and album-art design: each model release gets its own vibrant color identity, and the homepage product matrix lays them out like a record-shop bin. This is more unusual in B2B AI marketing — most competitors (OpenAI, Anthropic, Cohere) treat their model releases as updates to a single product, not as distinct visual identities. MiniMax's approach treats each model as a brand within the brand, which mirrors how music labels treat each artist as a distinct visual identity within the label.

The 32px-vs-16px radius contrast (vibrant cards vs. white cards) is a MiniMax invention that has been imitated across other Chinese AI brands (Moonshot, Zhipu) since. The doubled radius is the visual signature: it tells you "featured product" vs. "documentation reference" before you've read the content.

What MiniMax rejects: gradient hero backgrounds (the AI-marketing default), atmospheric brand decoration outside product cards (the Together AI default), and warm-neutral palettes (the Notion default). The chrome stays cool, monochrome, and disciplined; the chromatic energy is reserved for product moments.

**Influences:**
- **Vercel** — Pill-CTA discipline (`rounded-full`) and stark monochrome chrome — https://vercel.com
- **Linear** — Custom-weight sans + pill geometry as keyboard-shortcut signature — https://linear.app
- **Apple Music / Spotify Album Art** — Each product release as distinctive visual identity — https://www.apple.com/apple-music/
- **DM Sans (Colophon Foundry)** — Single-typeface system, geometric humanist sans — https://fonts.google.com/specimen/DM+Sans
- **Moonshot AI / Zhipu** — Adjacent Chinese AI brands sharing the vibrant-product-card pattern — https://www.moonshot.cn

## 14. Do's and Don'ts

### Do
- Use `#0a0a0a` (black) as the dominant CTA — it's the brand's most recognizable interactive element
- Reserve product brand colors (coral, magenta, blue, purple) ONLY for product-identity moments — never for general buttons or text
- Pair 32px-radius gradient cards with 16px-radius white cards in the same viewport — the radius contrast is the visual signature
- Apply 9999px (full pill) to every button, every pill tab, every badge
- Use 80px DM Sans weight 600 with -2px letter-spacing for hero displays — never compromise the leading or letter-spacing
- Treat each model/product line as a distinct color identity (M2.7 = coral, Music = magenta, Hailuo = blue, Speech = purple)
- Use 14px body-sm with 1.5 line-height for documentation prose
- Use 13px caption with 1.7 line-height for fine-print and figure annotations
- Render code badges with brand-blue-200 background and brand-blue-deep text — the cool-blue code chip is the signature
- Default to flat (no shadow) — reach for atmospheric `0 0 22px` glow only for featured product cards

### Don't
- Don't use brand-coral or brand-magenta on body text or large surfaces — they lose meaning when overused
- Don't soften corners on buttons (anything less than 9999px); the pill is a brand signature
- Don't introduce a second display typeface; DM Sans handles every role
- Don't reduce hero leading below 1.10 — the brand needs that breathing room on the 80px display
- Don't apply heavy shadows on white cards; flat-with-borders is the documentation default
- Don't put gradient backgrounds on standard buttons; gradients are reserved for product-card identity moments
- Don't use the 32px hero radius on documentation cards — it's reserved for vibrant product cards only
- Don't mix italic styles into the chrome — DM Sans's emphasis is via weight (500/600/700), not slant
- Don't render uppercase headlines — MiniMax's display type is mixed-case at all sizes
- Don't use warm-shifted whites or creams — the canvas is cool `#ffffff`

## 15. Agent Prompt Guide

### Quick Color Reference
- Page Background: `#ffffff`
- Primary CTA Pill: `#0a0a0a` (black) on white text
- Heading text: `#0a0a0a` (Ink)
- Body text: `#222222` (Charcoal)
- Body muted: `#5f5f5f` (Steel)
- Coral product card: `#ff5530`
- Magenta product card: `#ea5ec1`
- Blue product card: `#1456f0`
- Purple product card: `#a855f7`
- Border hairline: `#e5e7eb`
- Surface gray: `#f7f8fa`

### Example Component Prompts

- "Create a MiniMax hero band on white. Headline at 80px DM Sans weight 600, line-height 1.10, letter-spacing -2px, color `#0a0a0a`. Subtitle at 18px DM Sans weight 500, line-height 1.5, color `#5f5f5f`. Centered button row: primary pill (`#0a0a0a` background, `#ffffff` text, 9999px radius, padding 11px 24px, 14px DM Sans weight 600) + outlined pill (transparent background, `#0a0a0a` text, 1px solid `#0a0a0a` border, same shape). 96px top padding."

- "Design a vibrant MiniMax product card for M2.7: background `#ff5530` (coral), text `#ffffff`, rounded 32px, padding 32px. Top-right: 'NEW' badge (background `#ff5530`, white text, 9999px radius, padding 4px 10px, 13px DM Sans weight 600). Center: 'M2.7' wordmark in 56px DM Sans weight 600, line-height 1.10, letter-spacing -1.5px. Below: tagline in 14px DM Sans weight 400, color `rgba(255,255,255,0.8)`. Optional bottom-left: white pill CTA (`#ffffff` bg, `#ff5530` text, 9999px radius, padding 11px 24px). Card height ~360px, fixed width ~280-320px."

- "Build a MiniMax AI product tile (white card variant): background `#ffffff`, rounded 24px, padding 24px, 1px solid `#e5e7eb` border. Top: 100px-tall illustration zone (line-art icon or 3D mark, color `#0a0a0a`). Middle: title in 20px DM Sans weight 600, color `#0a0a0a`. Below: description in 14px DM Sans weight 400, line-height 1.5, color `#5f5f5f`. Optional bottom: outlined-pill 'Learn more' button. 4-up grid on desktop, 2-up on tablet, 1-up on mobile."

- "Create a MiniMax documentation 3-column layout: left sidebar (220px wide, background `#ffffff`, sidebar items at `#222222` 14px DM Sans weight 400, padding 8px 16px, rounded 6px; active item background `#f7f8fa`, text `#0a0a0a`, weight 500). Center prose body (720px max-width, 16px DM Sans weight 400, line-height 1.5, color `#222222`; inline code in 14px JetBrains Mono with `#f7f8fa` background and 4px radius). Right TOC (180px wide, items at `#5f5f5f` 14px DM Sans weight 400, active item `#0a0a0a`)."

- "Design a MiniMax pricing pill-tab nav: 3 pill tabs (Token Plan / Audio Subscription / Video Package). Inactive: background `#ffffff`, text `#5f5f5f`, 1px solid `#e5e7eb` border, rounded 9999px, padding 8px 16px, 14px DM Sans weight 500. Active: background `#0a0a0a`, text `#ffffff`. Tab indicator transitions smoothly between active states over 200ms with cubic-bezier(0.2, 0, 0, 1)."

- "Build a MiniMax footer: full-width black `#0a0a0a` background, 64px vertical padding, 32px horizontal. Top row: MiniMax wordmark in `#ffffff` + tagline 'intelligence with everyone' in 14px DM Sans weight 400 color `rgba(255,255,255,0.7)`. Right of top row: social icons (X, GitHub, LinkedIn) at 24px in `#a8aab2`, hover to `#ffffff`. Body: 4-column link grid (Research / Product / API / Company). Section headers in 14px DM Sans weight 500 color `#ffffff`. Footer links in 14px DM Sans weight 400 color `#a8aab2`, padding 4px 0."

### Iteration Guide

1. **Focus on ONE component at a time.** The system has high internal consistency — changing one component's geometry usually means it's no longer in the system.
2. **Reference component names and tokens directly.** "Primary pill at `#0a0a0a` 9999px" beats "rounded black button" — the precision is what makes it feel MiniMax.
3. **Default to `body` (16px) for body text and `subtitle` (18px) for emphasis.** Headlines step down `hero-display` (80) → `display-lg` (56) → `heading-lg` (40) → `heading-md` (32) → `heading-sm` (24).
4. **Keep brand colors confined to product-card identity.** If a brand color appears on a standard button or generic surface, ask whether it earned that surface. Coral is M2.7. Magenta is Music. Blue is Hailuo. Purple is Speech. These are brand assignments, not free choices.
5. **Pill-shaped buttons (9999px) always.** Squared buttons signal "third-party widget" in this design language. Even tertiary actions use pills.
6. **The 32px-vs-16px radius contrast is the visual signature.** When you place a vibrant product card next to a documentation card, the doubled radius announces "featured" vs. "reference." Don't equalize them.
7. **Hero typography is sacred.** 80px DM Sans weight 600, line-height 1.10, letter-spacing -2px. Reducing the leading or relaxing the tracking removes the album-cover quality.
8. **Documentation pages tighten everything.** Section padding 32px (not 64px), card padding 20px (not 32px), nav padding 8px (not 16px). The chrome compresses to make room for content density.
