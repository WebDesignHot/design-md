---
name: Bose
tagline: Pure black canvas, Helvetica restraint, and premium-audio confidence — sound presented as engineering art.
updated_at: 2026-05-04T20:53:02+12:00
published_at: 2026-05-04T20:53:02+12:00
author: webdesignhot
source_url: https://www.bose.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media, marketplace]
tags: [dark, premium, sans, monochrome, photography, helvetica, audio]
preview_swatch: ['#000000', '#ffffff', '#d6d6d6']
related: [sonos, apple, tesla]
description: 'Bose''s site is a study in premium-audio restraint. The page ground oscillates between pure `#000000` for hero / product showcase bands and pure `#ffffff` for editorial detail — the alternation creates a dramatic chiaroscuro rhythm that frames every speaker, headphone, and soundbar as a singular engineering object. Helvetica Neue carries the entire typographic system at weights 400 and 500 — a deliberate choice that sets Bose apart from the Inter-and-system-sans crowd that dominates the modern product web. The brand''s 60+ years of engineering heritage shows up as confident silence: no decorative gradients, no chromatic accents on chrome, no audio-wave illustrations, no soundscape metaphors. Just black ground, white type, a single CTA, and product photography lit like industrial sculpture.'

colors:
  bg: '#000000'                    # Bose Black — primary canvas
  bg-light: '#ffffff'              # White editorial bands — alternating ground
  bg-elev: '#0d0d0d'               # Marginally elevated dark — modal backdrops
  bg-soft: '#1a1a1a'               # Card surface on dark
  bg-warm-light: '#f5f5f5'         # Soft grey alternate light surface
  surface: '#0d0d0d'               # Panel surface on dark
  surface-hover: '#1f1f1f'         # Card hover on dark
  surface-light: '#fafafa'         # Panel surface on light
  text: '#ffffff'                  # Primary on dark
  text-strong: '#ffffff'           # Display headlines on dark
  text-muted: '#d6d6d6'            # Subtle text on dark
  text-soft: '#a3a3a3'             # Faintest on dark
  text-inverse: '#000000'          # Primary on light
  text-inverse-muted: '#5c5c5c'    # Muted on light
  text-inverse-soft: '#737373'     # Faintest on light
  brand: '#000000'                 # Bose wordmark colour — black on white surfaces
  brand-on-dark: '#ffffff'         # White wordmark on dark canvases
  brand-cta-dark: '#ffffff'        # White CTA on dark hero
  brand-cta-light: '#000000'       # Black CTA on light hero
  brand-hover: '#262626'           # Black-CTA hover (slightly less black)
  on-brand: '#ffffff'              # White text on black CTA
  border: '#262626'                # Default divider on dark
  border-soft: '#1a1a1a'           # Faintest dark hairline
  border-strong: '#404040'         # Stronger dark divider
  border-on-light: '#e5e5e5'       # Hairline on light
  border-on-light-strong: '#cccccc'
  ring: '#ffffff'                  # Focus ring on dark
  ring-on-light: '#000000'
  link: '#ffffff'                  # White links on dark, underlined
  link-hover: '#d6d6d6'
  link-on-light: '#000000'         # Black links on light
  badge-bg: '#ffffff'              # NEW chip on dark
  badge-text: '#000000'
  rating-star: '#ffd700'           # Gold rating star — review system only
  product-shadow: 'rgba(0,0,0,0.5)'         # Floor shadow under floating product on dark
  product-shadow-light: 'rgba(0,0,0,0.1)'   # Same on light bg
  modal-overlay: 'rgba(0,0,0,0.7)'
  audio-cyan: '#3dd5e8'            # Sparingly used inside QuietComfort feature illustrations
  qc-line: '#999999'               # Used inside ANC frequency diagrams only
  cta-strikethrough: '#a3a3a3'     # Sale-price strikethrough
  sale-price: '#e60023'            # Sparingly used — clearance sticker
  success: '#10b981'               # Toasts only
  warning: '#f59e0b'               # Form validation
  danger: '#dc2626'                # Form errors
  info: '#ffffff'                  # No info-blue; defaults to brand white

typography:
  display:
    family: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
    opentype-features: []
  body:
    family: '"Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500]
    opentype-features: []
  mono:
    family: '"SF Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-hero:    { size: 72, weight: 500, lineHeight: 1.05, tracking: '-0.015em', family: display, notes: 'QuietComfort Ultra, Soundbar Ultra' }
    display-large:   { size: 56, weight: 500, lineHeight: 1.08, tracking: '-0.012em', family: display, notes: 'Section opener' }
    display-medium:  { size: 44, weight: 500, lineHeight: 1.12, tracking: '-0.01em', family: display }
    display-small:   { size: 32, weight: 500, lineHeight: 1.18, tracking: '-0.008em', family: display, notes: 'Feature card titles' }
    title-large:     { size: 24, weight: 500, lineHeight: 1.25, tracking: '-0.005em', family: body, notes: 'Product cards, comparison rows' }
    title-medium:    { size: 20, weight: 500, lineHeight: 1.3, tracking: 'normal', family: body }
    title-small:     { size: 16, weight: 500, lineHeight: 1.4, tracking: 'normal', family: body, notes: 'Card subheaders' }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, tracking: 'normal', family: body, notes: 'Hero subhead' }
    body:            { size: 16, weight: 400, lineHeight: 1.5, tracking: 'normal', family: body, notes: 'Default paragraph' }
    body-small:      { size: 14, weight: 400, lineHeight: 1.45, tracking: 'normal', family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.4, tracking: 'normal', family: body }
    micro:           { size: 11, weight: 500, lineHeight: 1.3, tracking: '0.08em', family: body, notes: 'Eyebrow uppercase — "NEW", "FEATURED"' }
    nav-item:        { size: 14, weight: 500, lineHeight: 1.2, tracking: 'normal', family: body }
    button:          { size: 14, weight: 500, lineHeight: 1.0, tracking: '0.02em', family: body, notes: 'Slightly wide-spaced for confidence' }
    wordmark:        { size: 22, weight: 700, lineHeight: 1.0, tracking: '-0.02em', family: display, notes: 'BOSE wordmark — bold compact uppercase' }
    tabular:         { size: 14, weight: 500, lineHeight: 1.4, tracking: 'normal', family: body, opentype: 'tnum' }
    code:            { size: 14, weight: 400, lineHeight: 1.5, tracking: 'normal', family: mono }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.4, tracking: 'normal', family: mono }

radius:
  flat: 0                         # Bose's signature — many hard edges
  micro: 2
  sm: 4                           # Form inputs
  md: 6
  card: 8                         # Product cards
  lg: 12
  xl: 16                          # Feature panels
  pill: 9999                      # Buttons

spacing:
  base: 8
  scale: [4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160, 200]

layout:
  page-width: 1440
  prose-width: 720
  header-height: 80               # Generously tall — premium signal
  hero-height: '90vh'

components:
  button-primary-dark:
    bg: '#ffffff'
    text: '#000000'
    padding: '16px 32px'
    radius: 9999
    border: 'none'
    font: 'Helvetica Neue 14/500 with 0.02em tracking'
    transition: 'background-color 250ms ease-out'
    hover-bg: '#d6d6d6'
    use: 'Primary action on dark hero — Buy / Shop / Add to Cart'
  button-primary-light:
    bg: '#000000'
    text: '#ffffff'
    padding: '16px 32px'
    radius: 9999
    border: 'none'
    hover-bg: '#262626'
    use: 'Primary action on light hero — same shape, inverse colour'
  button-secondary-dark:
    bg: 'transparent'
    text: '#ffffff'
    padding: '16px 32px'
    radius: 9999
    border: '1px solid #ffffff'
    hover-bg: 'rgba(255,255,255,0.1)'
    use: 'Secondary action on dark — Learn More'
  button-secondary-light:
    bg: 'transparent'
    text: '#000000'
    border: '1px solid #000000'
    hover-bg: 'rgba(0,0,0,0.05)'
    use: 'Secondary action on light'
  button-tertiary:
    bg: 'transparent'
    text: 'inherits'
    padding: '0'
    border: 'none'
    decoration: 'underline 1px solid currentColor'
    use: 'Inline arrow link with → suffix'
  card-product:
    bg: '#0d0d0d on dark, #ffffff on light'
    border: '1px solid #262626 on dark, 1px solid #e5e5e5 on light'
    radius: 8
    padding: '24px 20px'
    hover: 'border lifts to #404040 / #cccccc; image scales 1.02 over 250ms'
  card-feature:
    bg: 'full-bleed photograph'
    radius: 16
    overflow: hidden
    aspect: '4:3 or 16:9'
    text-overlay: 'White headline bottom-left'
  badge-new:
    bg: '#ffffff'
    text: '#000000'
    padding: '4px 12px'
    radius: 9999
    font: '11/500 uppercase 0.08em tracking'
  badge-sale:
    bg: '#e60023'
    text: '#ffffff'
    padding: '4px 12px'
    radius: 9999
    font: '11/500 uppercase 0.08em tracking'
    use: 'Sparingly used — only during sales periods'
  input:
    bg: 'transparent on dark, #ffffff on light'
    text: 'inherits'
    placeholder: '#737373'
    padding: '14px 16px'
    radius: 4
    border: '1px solid #404040 on dark, 1px solid #cccccc on light'
    focus-border: '#ffffff on dark, #000000 on light'
    font: '16/400'
  navigation:
    align: 'BOSE wordmark left, 5 nav categories centred, search + account + cart icons right'
    height: 80
    bg: '#000000'
    text: '#ffffff'
    border-bottom: 'none at hero, 1px solid #1a1a1a after scroll'
  mega-menu:
    bg: '#000000'
    border-top: '1px solid #1a1a1a'
    columns: 'category list left + featured product card right'
    padding: '64px 80px'
  footer:
    bg: '#000000'
    text: '#d6d6d6'
    columns: 5
    padding: '96px 64px 48px'
    border-top: '1px solid #1a1a1a'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-bose-glide: 'cubic-bezier(0.25, 0.1, 0.25, 1)'   # Used on parallax product reveal
  duration-fast: 150
  duration-standard: 250
  duration-slow: 400
  duration-hero: 700
  reduced-motion: 'respects prefers-reduced-motion: reduce — parallax floats become static, image-on-scroll reveals collapse to instant; only opacity transitions retained.'

breakpoints:
  mobile: 640
  tablet: 768
  desktop: 1024
  wide: 1440

shadows:
  none: 'none'
  product-float: 'rgba(0,0,0,0.5) 0 50px 100px -25px'
  product-float-light: 'rgba(0,0,0,0.1) 0 30px 60px -15px'
  card-light: 'rgba(0,0,0,0.06) 0 4px 12px -2px'
  modal: 'rgba(0,0,0,0.7) 0 0 0 9999px'
  ring: '0 0 0 2px #ffffff with 2px offset'

accessibility:
  contrast-text-on-bg: 21.0          # #ffffff on #000000 — perfect AAA
  contrast-muted-on-bg: 14.0         # #d6d6d6 on #000000 — AAA
  contrast-soft-on-bg: 7.7           # #a3a3a3 on #000000 — AAA Large, AA Normal
  contrast-text-on-brand: 21.0       # #000000 on #ffffff CTA
  focus-ring: '2px solid #ffffff (on dark) / #000000 (on light) with 2px offset'
  reduced-motion-honored: true
  touch-target-min: 48

dark-mode: 'native — Bose.com is dark-first. Light bands appear inside individual product pages as alternating chiaroscuro, but the dominant scheme is dark. There is no separate dark-mode toggle; the design is fixed.'
---

## 1. Visual Theme & Atmosphere

Bose's website is a chiaroscuro masterclass. The page ground oscillates between pure `#000000` for hero and product-showcase bands and pure `#ffffff` for editorial detail bands — the alternation creates a dramatic rhythm that frames each headphone, speaker, and soundbar as a discrete sculpted object. There are no transition gradients between the two states; the page cuts hard from black to white and back, the way magazine spreads alternate full-bleed cover photos with text-only feature pages.

Helvetica Neue carries the entire typographic system. That choice is itself a brand statement: in 2024 most consumer-electronics websites have migrated to Inter, GT America, or custom commissioned families — Bose's continued commitment to Helvetica reads as an admission that the original Modernist sans is still the most confident type. There are no display flourishes, no negative tracking dramatic enough to draw attention to itself, no italics, no decorative weights. Just the ur-sans, set at sizes from 11px to 72px, carrying every word.

The mood is engineered restraint. Bose has been making premium audio since 1964; the website is the visual equivalent of an MIT engineering report dressed in gallery clothing. Hero photographs are studio-lit product shots floating against neutral grounds, casting soft floor shadows that suggest weight and presence. There are no abstract sound-wave illustrations, no glowing equaliser bars, no kinetic motion graphics implying frequency response. The product itself is the design.

Where competitors lean into lifestyle photography (people wearing headphones in vivid environments), Bose holds back: most product pages stay product-only, with lifestyle bands appearing once or twice per page as deliberate emotional punctuation. The CTA discipline is severe — typically one primary button per viewport, sometimes paired with a secondary ghost-outline alternative. Pricing is bold and unapologetic. Specifications are presented in tabular figures with `tnum` enabled. Everything signals: this product is engineered, not designed.

**Key Characteristics:**
- Chiaroscuro alternation — pure `#000000` and pure `#ffffff` bands stacked sequentially
- Helvetica Neue 400/500 carries the entire system — no custom typeface
- Product photography on neutral grounds with `rgba(0,0,0,0.5) 0 50px 100px -25px` floor shadow
- Single white pill CTA on dark hero, single black pill CTA on light hero
- Generous 80px navigation bar height — the premium-signal proportion
- 9999px pill buttons with `0.02em` tracking on the label
- Bold compact uppercase BOSE wordmark at 22px with `-0.02em` tracking
- No chromatic accents on chrome — gold appears only inside review-rating stars
- 96px section padding rhythm — twice as much breathing room as a typical retail site
- Hard cuts between dark and light bands — no gradient transitions

## 2. Color Palette & Roles

### Primary
- **Bose Black** (`#000000`): The dominant canvas. Hero, navigation, footer, and the majority of product showcase bands.
- **Pure White** (`#ffffff`): The alternating canvas; the colour of all primary text on dark; the colour of the dark-page CTA pill.

### Brand & Dark
- **Bose Black** (`#000000`): The wordmark colour on light surfaces; the brand's foundational hue.
- **Bose White** (`#ffffff`): The wordmark colour on dark canvases.
- The duality is central — Bose treats black-and-white as a single brand colour pair rather than as opposed schemes. Either appears as foreground depending on ground.
- **Coal Layer** (`#0d0d0d`): Marginally elevated dark surface — sits one shade above Bose Black for cards and modal backdrops.

### Accent
- Bose's marketing surface refuses chromatic accents. The only "accents" that appear are:
- **Audio Cyan** (`#3dd5e8`): Used exclusively inside QuietComfort technical-feature illustrations — never on chrome.
- **Sale Red** (`#e60023`): A historical Bose accent used only during clearance/sale events on price stickers.
- **Rating Gold** (`#ffd700`): Star icons inside review widgets only.

### Interactive
- **Link** on dark `#ffffff` with 1px underline; on light `#000000` with 1px underline.
- **Link Hover**: subtle desaturation — `#d6d6d6` on dark, `#262626` on light.
- **Hover-bg** on white CTA: lightens to `#d6d6d6`. On black CTA: lightens to `#262626`.
- **Active**: pressed state shifts CTA bg one more step toward grey.
- **Disabled**: 50% opacity on text + grey background.
- **Focus**: 2px solid contrasting outline (white on dark, black on light) with 2px offset.

### Neutral Scale (Dark)
- **Pure White** `#ffffff` — primary text on dark
- **Frost** `#fafafa` — light-bg surface
- **Soft Light** `#f5f5f5` — alternate light surface
- **Mist** `#e5e5e5` — light-bg hairline
- **Silver** `#d6d6d6` — muted text on dark, white-CTA hover
- **Pewter** `#a3a3a3` — soft text on dark
- **Steel** `#737373` — muted on light
- **Slate** `#5c5c5c` — body text on light alternative
- **Dark Slate** `#404040` — strong dark border
- **Onyx** `#262626` — black-CTA hover, default dark border
- **Coal** `#1a1a1a` — faintest dark hairline
- **Coal Layer** `#0d0d0d` — elevated dark surface
- **Bose Black** `#000000` — canvas

### Surface & Borders
- **bg** `#000000` — dominant page ground.
- **bg-light** `#ffffff` — alternating ground for editorial bands.
- **bg-warm-light** `#f5f5f5` — soft grey alternative to white for dense content.
- **surface** `#0d0d0d` (dark), `#fafafa` (light) — card and panel surface.
- **border** `#262626` (dark), `#e5e5e5` (light) — default dividers.
- **border-strong** `#404040` (dark), `#cccccc` (light) — for inputs and emphasis.

### Shadow Colors
- **product-float** `rgba(0,0,0,0.5) 0 50px 100px -25px` — the cinematic drop beneath floating products on dark grounds. Bose's shadow is one shade darker (0.5 vs Sonos's 0.4) — premium-deep rather than premium-soft.
- **product-float-light** `rgba(0,0,0,0.1) 0 30px 60px -15px` — same shadow on light bands.
- **card-light** `rgba(0,0,0,0.06) 0 4px 12px -2px` — subtle card lift on light grounds.

### Semantic
- Bose's marketing site mostly avoids semantic colour. Form validation uses muted `#dc2626` red and `#10b981` green inside the checkout flow only. Sales sticker red `#e60023` appears on clearance bands. No green/blue/yellow status indicators appear in product-page chrome.

## 3. Typography Rules

### Font Family
- **Display + Body**: `"Helvetica Neue"`, Helvetica, Arial, sans-serif. Bose's continued use of Helvetica Neue (rather than migrating to Inter or commissioning a custom typeface) is itself a brand statement — it positions Bose alongside the long lineage of Modernist consumer-electronics brands (Braun, B&O, Leica) that all use unmodified Modernist sans.
- **Mono companion**: `"SF Mono"` / Menlo — appears in technical specification tables and developer-facing pages.
- **OpenType features**: none invoked at the family level. Tabular figures (`tnum`) enabled inside pricing tables only.
- **No italics**: zero italic usage. Helvetica's italic is famously poor; Bose simply refuses it.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Hero | Helvetica Neue | 72 | 500 | 1.05 | -0.015em | — | QuietComfort Ultra, Soundbar Ultra |
| Display Large | Helvetica Neue | 56 | 500 | 1.08 | -0.012em | — | Section opener |
| Display Medium | Helvetica Neue | 44 | 500 | 1.12 | -0.01em | — | Sub-section |
| Display Small | Helvetica Neue | 32 | 500 | 1.18 | -0.008em | — | Feature card titles |
| Title Large | Helvetica Neue | 24 | 500 | 1.25 | -0.005em | — | Product card titles |
| Title Medium | Helvetica Neue | 20 | 500 | 1.3 | normal | — | Section sub-titles |
| Title Small | Helvetica Neue | 16 | 500 | 1.4 | normal | — | Card sub-headers |
| Body Large | Helvetica Neue | 18 | 400 | 1.55 | normal | — | Hero subhead lede |
| Body | Helvetica Neue | 16 | 400 | 1.5 | normal | — | Default paragraph |
| Body Small | Helvetica Neue | 14 | 400 | 1.45 | normal | — | Card descriptions |
| Caption | Helvetica Neue | 12 | 400 | 1.4 | normal | — | Photo credits, fine print |
| Micro Eyebrow | Helvetica Neue | 11 | 500 | 1.3 | 0.08em | — | NEW / FEATURED uppercase |
| Nav Item | Helvetica Neue | 14 | 500 | 1.2 | normal | — | Headphones, Speakers, Soundbars, Pro |
| Button Label | Helvetica Neue | 14 | 500 | 1.0 | 0.02em | — | Buy / Add to Cart — slightly wide-spaced |
| Wordmark | Helvetica Neue | 22 | 700 | 1.0 | -0.02em | — | BOSE — bold compact uppercase |
| Tabular | Helvetica Neue | 14 | 500 | 1.4 | normal | tnum | Pricing — $429, $799 |
| Code | SF Mono | 14 | 400 | 1.5 | normal | — | Spec tables |
| Code Micro | SF Mono | 12 | 400 | 1.4 | normal | — | Inline tokens |

### Principles
- **Helvetica Neue as engineering signal**: The family says "we are not chasing trends." Brands that switched from Helvetica to Inter or custom families during the 2018–2024 sans-serif renaissance have all left Bose behind on this discipline. The decision is itself the design.
- **Two weights only**: 400 for body, 500 for headings and UI. The wordmark's 700 is the only heavy weight, used exactly once per page.
- **Negative tracking on display sizes**: `-0.015em` at 72px, easing toward `normal` at body sizes. The tracking is gentler than Sonos's `-0.02em` — Bose tightens but doesn't compress.
- **Slight wide-spacing on button labels**: `0.02em` tracking on CTA labels gives the buttons a confident, slightly-formal feel — the way premium-product chrome reads on luxury sites.
- **No transforms except wordmark**: lowercase calm in headlines and UI; the only uppercase elements are the BOSE wordmark, eyebrow micros, and badge labels.
- **Tabular figures inside pricing tables**: `font-feature-settings: 'tnum' 1` ensures digits align column-wise — important when comparing $429 to $799.
- **No italics, no underlines except on hover**: Bose refuses decorative type.

## 4. Component Stylings

### Buttons

All buttons use a **9999px pill radius** — fully rounded ends — with `0.02em` letter-spacing on the label for subtle wide-spacing.

**Primary (white pill on dark)**:
- Background `#ffffff`, text `#000000`, font Helvetica Neue 14/500, label tracking `0.02em`
- Padding `16px 32px`, border-radius `9999px`, no border
- Transition `background-color 250ms ease-out`
- Hover: background lightens to `#d6d6d6`
- Active: returns to default with very subtle scale 0.99
- Use case: Buy, Shop, Add to Cart, Customize on dark hero

**Primary (black pill on light)**:
- Background `#000000`, text `#ffffff`, otherwise identical to white-pill
- Hover: background lightens to `#262626`
- Use case: Same actions on light editorial bands

**Secondary (ghost outline) — Dark**:
- Background transparent, text `#ffffff`, border `1px solid #ffffff`
- Same padding and radius
- Hover: background `rgba(255,255,255,0.1)`
- Use case: Learn More, Compare, Explore

**Secondary (ghost outline) — Light**:
- Background transparent, text `#000000`, border `1px solid #000000`
- Hover: background `rgba(0,0,0,0.05)`

**Tertiary (inline arrow link)**:
- No background, no padding (inherits flow)
- Text inherits parent colour with 1px underline
- Suffixed with `→` for internal links, `↗` for external
- Hover: `→` translates +4px, underline deepens to 1.5px

### Cards

**Product Card (dark)**:
- Background `#0d0d0d`, border `1px solid #262626`, radius `8px`
- Padding `24px 20px`
- Layout: square product image top, NEW chip top-right, product name (Helvetica Neue 24/500), short description, price row (with tnum), primary CTA
- Hover: border lifts to `#404040`, product image scales `1.02` over 250ms

**Product Card (light)**:
- Background `#ffffff`, border `1px solid #e5e5e5`, otherwise identical
- Hover: border lifts to `#cccccc`, subtle shadow `rgba(0,0,0,0.06) 0 4px 12px -2px`

**Feature Card** — full-bleed photographic:
- Background full-bleed photo, border-radius `16px`, overflow hidden
- Aspect 4:3 or 16:9
- Text overlay: white headline bottom-left, 64px padding from edges
- Hover: 1.02 image scale

### Badges, Tags, Pills

**NEW chip**:
- White bg `#ffffff`, black text `#000000`
- Padding `4px 12px`, radius `9999px`
- Helvetica Neue 11/500 uppercase with `0.08em` tracking
- Sits top-right of product card

**SALE chip**:
- Sale Red `#e60023` bg, white text
- Same dimensions and font as NEW chip
- Used only during clearance windows

**FEATURED eyebrow**:
- No background, just inline label
- Helvetica Neue 11/500 uppercase, `0.08em` tracking
- Colour inherits surface contrast (white on dark, black on light)

### Inputs & Forms

**Dark Input**:
- Background transparent, text `#ffffff`, placeholder `#737373`
- Padding `14px 16px`, radius `4px`
- Border `1px solid #404040`, focus `#ffffff`
- Font Helvetica Neue 16/400

**Light Input**:
- Background `#ffffff`, text `#000000`, placeholder `#737373`
- Border `1px solid #cccccc`, focus `#000000`

### Navigation

- Layout: BOSE wordmark left (Helvetica Neue 22/700, `-0.02em` tracking) | 5 category items centre | search + account + cart icons right
- Height **80px** — generously tall, premium signal
- Background `#000000`, text `#ffffff`
- No bottom border at hero; on scroll past hero, gains `1px solid #1a1a1a`
- Mega-menu opens on hover/click: full-width black panel with category list left + featured product card right, padding `64px 80px`

### Footer

- Background `#000000`, text `#d6d6d6`
- 5 columns of links (Products, Support, Company, Sustainability, Pro Audio) + region selector + social icons
- Padding `96px 64px 48px`, border-top `1px solid #1a1a1a`
- BOSE wordmark sits bottom-left, copyright text bottom-right

## 5. Layout Principles

### Spacing System
- Base unit **8px**. Scale: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160, 200.
- Section padding: typically `128px` top/bottom on desktop, `80px` on tablet, `64px` on mobile — Bose's vertical rhythm is even more generous than Sonos's.
- Card grid gap: `24px` mobile, `32px` desktop.
- Hero internal padding: `96px–120px` from viewport edges to content.

### Grid & Container
- Max content width `1440px`; content centres at `1280–1440`.
- Hero typically uses a 50/50 layout on desktop: copy + CTA on one side, product photography on the other.
- Comparison grid: 3-up on desktop, 2-up on tablet, 1-up on mobile.
- Lifestyle bands break the grid — full-viewport-width photographs.

### Whitespace Philosophy
Whitespace on Bose is luxury rather than negligence. The 128px vertical section padding (vs typical 80–96px) means each product earns its own scroll. The chiaroscuro alternation between black and white bands creates visual breathing room without literal emptiness — the eye rests on the contrast change as much as on the white space.

### Section Cadence
- Hero (black) → Product Showcase (black) → Feature Detail (white) → Comparison (black) → Lifestyle (white photography full-bleed) → CTA Recap (black) → Footer (black)
- The hard cut between black and white sections is deliberate — no gradient transitions. The page reads like a magazine spread alternating cover photos with feature articles.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Flat | 0 | Full-bleed photographs, lifestyle bands, badges-without-radius |
| Micro | 2px | Decorative borders, inline tags |
| Standard | 4px | Form inputs |
| Comfortable | 6px | Lifestyle card with rounded corners |
| Card | 8px | Product comparison cards |
| Large | 12px | Music-service tiles, modal corners |
| Featured | 16px | Feature-band rounded panels |
| Pill | 9999px | All CTA buttons, NEW/SALE chips |

The 9999px pill on every CTA, paired with `8px` cards and `0` full-bleed bands, creates a layered hierarchy: cards are softly rounded, buttons are unmistakably round, and full-bleed bands are sharp. The contrast between rounded button and sharp band is visually memorable.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 (Flat) | No shadow, border `#262626` (dark) / `#e5e5e5` (light) | Default for cards |
| 1 (Float) | `rgba(0,0,0,0.5) 0 50px 100px -25px` | Speaker hero — deep cinematic drop |
| 2 (Float Light) | `rgba(0,0,0,0.1) 0 30px 60px -15px` | Same on light bands |
| 3 (Card-Lift Light) | `rgba(0,0,0,0.06) 0 4px 12px -2px` | Hover state on light cards |
| 4 (Modal Overlay) | `rgba(0,0,0,0.7)` | Full-viewport modal backdrop |
| 5 (Focus Ring) | `0 0 0 2px #ffffff/000000` with 2px offset | Keyboard focus |

### Shadow Philosophy
Bose's shadow strategy is "cinematic floor shadow only." The product-float drop shadow is deeper and more pronounced than Sonos's (0.5 alpha vs 0.4) — Bose products feel weightier, more grounded. Cards rely on borders for separation, not shadows, even on light grounds where the rgba(0,0,0,0.06) hover lift is the only flourish. There are no inset shadows, no glowing inner rims, no decorative blurs.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — colour and opacity transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — hero entrances, page-level fades
- **Bose Glide**: `cubic-bezier(0.25, 0.1, 0.25, 1)` — parallax product reveal on scroll

### Duration
- **Fast** 150ms — micro-interactions
- **Standard** 250ms — most state changes
- **Slow** 400ms — image scale, card hover
- **Hero** 700ms — initial reveal, parallax

### Per-Component Recipes
- **Button hover**: bg shifts (`#ffffff → #d6d6d6` or `#000000 → #262626`) over 250ms; no scale, no translate.
- **Card hover**: border lightens over 250ms; image inside scales `1.02` over 300ms.
- **Link hover**: underline thickens from 1px to 1.5px over 200ms; arrow translates `+4px` x.
- **Hero parallax**: product photograph translates `+30px → 0` and fades `0 → 1` over 700ms with Bose Glide ease.
- **Mega-menu open**: panel fades in 250ms; categories inside stagger by 30ms each.
- **Section reveal**: each band fades in `0 → 1` over 600ms as it crosses the viewport.

### Page Transitions
- Fade-only between routes — no slide. New page fades in over 400ms after old fades out over 200ms.
- Lazy-loading sections fade in from `opacity: 0` over 600ms as they cross the viewport edge.

### Reduced Motion
`prefers-reduced-motion: reduce` collapses all parallax and scroll-triggered transforms to zero. Image-scale on card hover is removed. Only opacity transitions remain. Hero photography becomes static; the product appears in its final position immediately.

## 9. Accessibility & A11y

### Contrast Pairs
- **White on Black** — `#ffffff` / `#000000` = **21:1** — perfect AAA at all sizes
- **Silver on Black** — `#d6d6d6` / `#000000` = **14:1** — AAA all sizes
- **Pewter on Black** — `#a3a3a3` / `#000000` = **7.7:1** — AAA Large, AA Normal
- **Black on White CTA** — `#000000` / `#ffffff` = **21:1** — perfect AAA
- **Slate on White** — `#5c5c5c` / `#ffffff` = **7.05:1** — AAA Large, AA Normal
- **Steel on White** — `#737373` / `#ffffff` = **5.2:1** — AA Normal

### Focus Indicators
- Default focus is a **2px solid contrasting outline** (white on dark, black on light) with a 2px offset.
- All interactive elements use `:focus-visible`.
- The 9999px pill button preserves the visible ring outside the pill — never inset.

### ARIA & Patterns
- Mega-menu uses `aria-expanded` on triggers and `role="menu"` on panel
- Product comparison cards use `role="article"` with `aria-labelledby` pointing at product name
- Modals trap focus with `role="dialog"` `aria-modal="true"`
- Cart drawer uses `role="region" aria-label="Shopping cart"` with `aria-live="polite"` for cart updates
- Star ratings use `role="img"` with `aria-label="4.7 out of 5 stars, 1,243 reviews"`

### Keyboard Nav
- Tab order: wordmark → nav items → icons → hero CTA → page content → footer
- Esc closes mega-menu, modal, cart drawer
- Arrow keys traverse mega-menu items
- Enter/Space activates all CTAs

### Screen Reader Hints
- BOSE wordmark uses `aria-label="Bose home"` on the home link
- Product images carry rich `alt` text describing model + finish ("QuietComfort Ultra Headphones in white smoke")
- Decorative shadow elements use `aria-hidden="true"`
- Pricing announces with currency: `aria-label="$429 US dollars"`

### Reduced Motion
Honoured at the CSS level — see §8.

## 10. Responsive Behavior

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column; hamburger nav; hero text 36px; CTAs stack full-width |
| Tablet | 640–1024px | 2-up product grid; nav collapses to icons; hero text 56px |
| Desktop | 1024–1440px | Full horizontal nav; 3-up product grid; hero text 64px |
| Wide | >1440px | Hero text 72px; max content width 1440 with side gutters |

### Touch Targets
- Primary CTA min height 48px (above WCAG 44×44)
- Nav items 44px hit area
- Cart and account icons 44×44 touch target
- Card hover-scale becomes tap-only on mobile

### Collapsing Strategy
- **Nav** mega-menu → mobile drawer with accordion sections
- **Hero** 50/50 → stacked column (photo above copy)
- **Product grid** 3 → 2 → 1
- **Footer** 5-column → 2-column → accordion
- **Lifestyle bands** maintain full-bleed at every breakpoint; copy may stack above

### Image Behavior
- Product PNGs (transparent, retina) scale proportionally
- Lifestyle photographs use `object-fit: cover`
- `srcset` serves 1×, 2×, 3× densities
- Hero images use `loading="eager"`; below-fold images `loading="lazy"`

### Container Queries
Used inside the comparison grid: cards reflow internally based on container width rather than viewport.

## 11. Content & Voice

### Tone
**Confident engineering.** Bose writes like a 60-year-old audio engineering company that has nothing to prove. Sentences are short, declarative, sensory but technically grounded. Headlines are typically 2–6 words: "Better sound through research." (the long-running tagline) "Hear and feel every note." "Designed for life on the go."

### Microcopy Patterns
- **Primary CTA**: "Shop", "Buy", "Customize", "Add to Cart"
- **Secondary CTA**: "Learn more", "Compare", "Watch video", "Find a store"
- **Eyebrow labels**: "NEW", "FEATURED", "LIMITED EDITION"
- **Pricing prefix**: bare currency symbol — "$429", never "From $429"
- **Form errors**: short and direct — "Please enter a valid email address."
- **Success messages**: "Thanks. We'll be in touch." — formal-friendly
- **Empty states**: brief and instructional — "Your bag is empty. Continue shopping."

### CTA Verb Conventions
- **Shop** — discovery (home page, category landing)
- **Buy** — conversion (product detail, comparison)
- **Customize** — used uniquely for personalised soundbar / speaker configurations
- **Compare** — multi-product flows
- **Try** — limited-window offers ("Try for 90 days, free returns")
- **Listen** — used for music demos and sound samples

### Empty States
The Bose site has minimal empty states because most pages are static product showcase. The cart empty state reads: "Your bag is empty. Continue shopping." with a primary CTA. Order history empty state: "No past orders. Start exploring our products."

## 12. Dark Mode & Theming

Bose.com is **dark-first by design** with **integrated chiaroscuro** — light bands appear inside individual product pages as alternating editorial sections, but the overall scheme is fixed and not user-toggleable.

If implementing a dark variant of the system on a different platform (e.g. iOS Music app integration):
- `bg-light #ffffff → #000000` (the scheme is already dark)
- The chiaroscuro alternation is the design — there is no separate "light mode" because light surfaces already exist within the design

The Bose Music app honours device-level dark/light preferences. The web defaults to its dark spine because that is the brand's authoritative voice. There is no toggle.

## 13. Lineage & Influences

Bose's web design lineage runs through three streams: **Modernist consumer-electronics design** (Dieter Rams at Braun, Jacob Jensen at B&O, Henry Wolf at Eames Office) where product is the design and chrome is invisible; **Helvetica-as-corporate-IBM** (the long lineage of premium American industrial brands using unmodified Helvetica as a confidence signal); and **engineering-report aesthetics** (MIT publications, Bell Labs technical white papers, where typography is utilitarian and product photography is studio-lit). Bose was founded by an MIT professor in 1964, and that academic engineering heritage shows up in the brand's refusal to chase visual trends.

What Bose rejects defines it: it rejects the abstract sound-wave illustration that has dominated audio brand design since the 2000s. It rejects the lifestyle-photography-first approach of competitors (Beats, Skullcandy, Marshall). It rejects the bright accent-colour conventions of streaming brands. It rejects Inter and other "post-Helvetica" typefaces, holding Helvetica Neue as a brand signal of continuity. The site reads less like a 2024 e-commerce site and more like a 1980s premium-audio catalogue rendered in HTML.

- **Apple** — full-bleed product hero, single-CTA discipline — https://www.apple.com
- **Bang & Olufsen** — premium-audio sculpture lineage — https://www.bang-olufsen.com
- **Braun (Dieter Rams)** — "less but better" engineering aesthetic — https://www.braun.com
- **Helvetica Neue (Linotype)** — the typeface that defines the brand voice — https://www.linotype.com/1308/helvetica-now-family.html
- **Modernist industrial design** — the broader lineage of product-as-design — https://en.wikipedia.org/wiki/Modernism

## 14. Do's and Don'ts

### Do
- Anchor every page on the chiaroscuro alternation — pure `#000000` and pure `#ffffff` bands stacked in deliberate sequence
- Use Helvetica Neue at weight 500 with `-0.015em` tracking on display sizes
- Photograph products with deep `rgba(0,0,0,0.5) 0 50px 100px -25px` floor shadow on dark grounds
- Maintain 80px navigation height — the premium-signal proportion
- Use 9999px pill buttons with `0.02em` letter-spacing on the label
- Apply tabular figures (`tnum`) inside pricing tables so digits align column-wise
- Keep one primary CTA per viewport — never compete with multiple buttons of equal weight
- Use 128px section padding rhythm — twice as much as a typical retail site
- Let lifestyle bands (full-bleed photography) appear once or twice per page as emotional punctuation
- Use the BOSE wordmark in compact bold uppercase with `-0.02em` tracking — the brand's typographic crest
- Treat black-and-white as a single brand pair — they're inverse expressions of the same brand value
- Refuse italics — Helvetica's italic is poor; Bose embraces that constraint

### Don't
- Use chromatic accents on chrome — no signature blue, red, or green appears in nav, buttons, or cards
- Add gradients between black and white bands — the hard cut is the rhythm
- Apply sound-wave illustrations, equaliser bars, or kinetic audio metaphors — too literal, too dated
- Use Inter, GT America, or any non-Helvetica typeface — the family is brand-identifying
- Stack two products in a single viewport — one product, one scroll, one CTA
- Use weight 600 or 700 outside the wordmark — keeps the type restrained
- Override the white CTA with a coloured background — even for partner brands
- Add inner glows or soft inner shadows — depth is product-photographic only
- Use 4px or square buttons — the pill is the shape signature
- Reduce section padding below 96px on desktop — vertical rhythm is the luxury signal
- Mix the chiaroscuro with mid-tone grey bands — only black and white belong on the spine
- Show pricing in italic or thin weight — pricing is bold and unapologetic

## 15. Agent Prompt Guide

### Quick Color Reference
- Background: Bose Black `#000000` and Pure White `#ffffff` (alternating)
- Primary text on dark: White `#ffffff`
- Primary text on light: Black `#000000`
- Muted text on dark: Silver `#d6d6d6`
- Muted text on light: Steel `#737373`
- Card surface dark: Coal Layer `#0d0d0d`
- Card surface light: Frost `#fafafa`
- Border dark: Onyx `#262626`
- Border light: Mist `#e5e5e5`
- Primary CTA on dark: White `#ffffff` background with `#000000` text
- Primary CTA on light: Black `#000000` background with `#ffffff` text

### Example Component Prompts
- "Create a hero section with pure black `#000000` background, a transparent-PNG product image of QuietComfort headphones floating right with `rgba(0,0,0,0.5) 0 50px 100px -25px` deep floor shadow, and a left column with eyebrow 'NEW' (Helvetica Neue 11/500, 0.08em uppercase tracking), a 72px Helvetica Neue 500 headline 'QuietComfort Ultra' with `-0.015em` tracking, a 18px subhead, and a primary white pill button (`#ffffff` bg, `#000000` text, 9999px radius, 16px 32px padding, label tracking 0.02em) labelled 'Buy'."
- "Design an alternating chiaroscuro band sequence: black hero, black product showcase, hard cut to white feature-detail band, hard cut back to black comparison grid. No gradient transitions between bands."
- "Build a navigation bar with 'BOSE' wordmark left in Helvetica Neue 22/700 with `-0.02em` tracking (compact bold uppercase), five 14/500 nav items (Headphones, Speakers, Soundbars, Pro, Support) centred, and search + account + cart icons right — all on `#000000` background, 80px height, no border at hero, gains `1px solid #1a1a1a` bottom on scroll."
- "Create a product comparison grid on `#000000` background: 3 cards each `#0d0d0d` surface, `1px solid #262626` border, 8px border-radius, 24px padding — square product image top, NEW chip top-right, 24px Helvetica Neue 500 product name, $429 price (14/500 with tnum), white pill primary CTA labelled 'Buy'."
- "Design a feature-detail band on `#ffffff`: 50/50 split, headline left in Helvetica Neue 56/500 `-0.012em` tracking, body 18/28, black pill CTA `#000000` bg `#ffffff` text. Right side full-bleed product photography with 0.1 alpha floor shadow."
- "Add a focus ring on a primary CTA: 2px solid `#ffffff` (on dark) or `#000000` (on light) outline with 2px offset — only visible on `:focus-visible`."

### Iteration Guide
1. Verify the chiaroscuro rhythm — bands alternate hard-cut between `#000000` and `#ffffff`. Any gradient between them breaks the brand.
2. Confirm Helvetica Neue is the only typeface used. If you find yourself reaching for Inter, you've broken the brand's typographic continuity.
3. Check that display sizes use `-0.015em` letter-spacing — without negative tracking, headlines read body-bold.
4. Verify pill buttons at `9999px` with `0.02em` label tracking — the slight wide-spacing is brand-defining.
5. Confirm exactly one primary CTA per viewport. Pair with a secondary ghost-outline if needed, but never two primary actions.
6. Check product floor shadow at `rgba(0,0,0,0.5) 0 50px 100px -25px` (dark) or `rgba(0,0,0,0.1) 0 30px 60px -15px` (light) — the depth is brand-defining.
7. Refuse chromatic accents on chrome. If you reach for blue, red, or green for a CTA, revert to white-on-black or black-on-white.
8. Test at 80px navigation height — anything shorter loses the premium signal.
