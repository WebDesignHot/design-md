---
name: Meta
tagline: Optimistic blue (#0467df) on a white corporate canvas — Optimistic Display headlines, generous space, social-platform conglomerate at rest.
updated_at: 2026-05-03T20:43:35+12:00
published_at: 2026-05-03T20:43:35+12:00
author: webdesignhot
source_url: https://about.meta.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media, social]
tags: [light, corporate, social, sans, display, blue, technology]
preview_swatch: ['#ffffff', '#0467df', '#1c2b33']
related: [openai, anthropic, github]
description: 'Meta''s corporate site reads like an annual report given a tech-product polish — pure-white canvas (`#ffffff`), deep slate ink (`#1c2b33`), and one confident Meta blue (`#0467df`) for action. The custom Optimistic Display sans (a Mark Simonson commission) carries the headlines at 64–96px in weight 400; Meta Sans handles the body at 16/24. The composition is wide-margin, image-led, and willingly minimal — there are no cards, no shadows, and almost no decorative chrome. The page is a corporate skeleton built to host the family of brands (Facebook, Instagram, WhatsApp, Quest, Threads) without competing with any of them. Action is restrained to one blue; everything else is type, photo, and air.'

colors:
  bg: '#ffffff'
  bg-deep: '#1c2b33'                # dark hero band, occasional inverted section
  bg-soft: '#f5f5f5'                # alternate section ground
  surface: '#ffffff'
  surface-soft: '#f5f5f5'           # quote band, alt-section
  surface-strong: '#ebedf0'         # input fill, secondary card
  surface-tint: '#f0f4fa'           # blue-tinted info surface
  text: '#1c2b33'                   # primary ink — slate, never pure black
  text-strong: '#0a1014'            # extreme contrast headline ink (rare)
  text-muted: '#65676b'             # secondary metadata, captions
  text-soft: '#8a8d91'              # disabled, footer fine print
  text-on-dark: '#ffffff'           # ink-equivalent on dark sections
  text-on-dark-muted: '#b0b3b8'     # secondary text on dark sections
  brand: '#0467df'                  # Optimistic blue — primary CTA, links
  brand-hover: '#0356b8'            # darker hover variant
  brand-active: '#024187'           # press state
  brand-soft: '#e7f3ff'             # blue-tinted info surface, link bg
  on-brand: '#ffffff'
  accent-instagram: '#e4405f'       # sub-brand accent — Instagram contexts only
  accent-whatsapp: '#25d366'        # sub-brand — WhatsApp contexts only
  accent-quest: '#000000'           # sub-brand — Quest/RL contexts (high-contrast)
  accent-threads: '#000000'         # sub-brand — Threads contexts
  border: '#dddfe2'                 # default 1px border
  border-soft: '#e4e6eb'            # softer divider
  border-strong: '#1c2b33'          # focused input border
  link: '#0467df'                   # links match brand
  link-hover: '#0356b8'
  scrim: 'rgba(28,43,51,0.7)'       # modal backdrop
  shadow-card: 'rgba(0,0,0,0.08)'
  success: '#42b72a'                # green confirmation
  success-soft: '#e9f7e2'
  warning: '#f7b928'                # yellow advisory
  warning-soft: '#fff8e1'
  danger: '#fa3e3e'                 # error red
  danger-soft: '#ffeaea'
  info: '#0467df'
  info-soft: '#e7f3ff'

typography:
  display:
    family: '"Optimistic Display", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 700]
  body:
    family: '"Meta Sans", "Optimistic Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: '"Optimistic Mono", "SF Mono", Menlo, Monaco, monospace'
    weights: [400]
  scale:
    display-hero:    { size: 96, weight: 400, lineHeight: 1.04, tracking: '-0.04em', family: display }
    display-xl:      { size: 72, weight: 400, lineHeight: 1.06, tracking: '-0.035em', family: display }
    display-lg:      { size: 56, weight: 400, lineHeight: 1.08, tracking: '-0.03em',  family: display }
    display-md:      { size: 40, weight: 500, lineHeight: 1.1,  tracking: '-0.02em',  family: display }
    display-sm:      { size: 32, weight: 500, lineHeight: 1.15, tracking: '-0.015em', family: display }
    title-lg:        { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: body }
    title-md:        { size: 20, weight: 600, lineHeight: 1.3,  tracking: '0',        family: body }
    title-sm:        { size: 17, weight: 600, lineHeight: 1.35, tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-md:         { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.45, tracking: '0',        family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0.005em',  family: body }
    micro:           { size: 11, weight: 600, lineHeight: 1.35, tracking: '0.04em',   family: body, transform: uppercase }
    button-md:       { size: 16, weight: 600, lineHeight: 1.25, tracking: '0',        family: body }
    button-sm:       { size: 14, weight: 600, lineHeight: 1.25, tracking: '0',        family: body }
    nav-link:        { size: 15, weight: 500, lineHeight: 1.35, tracking: '0',        family: body }
    quote:           { size: 36, weight: 400, lineHeight: 1.35, tracking: '-0.01em',  family: display }
    code:            { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: mono }

radius:
  micro: 4
  sm: 6
  md: 8
  lg: 12
  xl: 16
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72
  hero-padding: 120

components:
  button-primary:
    bg: '#0467df'
    color: '#ffffff'
    radius: 9999
    padding: '14px 28px'
    height: 48
    font: button-md
    use: 'Primary CTA — "Get Quest 3", "Read more", "Subscribe".'
  button-primary-hover:
    bg: '#0356b8'
    use: 'Hover state — darker brand blue, no transform.'
  button-secondary:
    bg: '#ffffff'
    color: '#1c2b33'
    border: '1px solid #1c2b33'
    radius: 9999
    padding: '14px 28px'
    height: 48
    use: 'Inverse CTA, "Learn more" pairings.'
  button-on-dark:
    bg: '#ffffff'
    color: '#1c2b33'
    radius: 9999
    padding: '14px 28px'
    use: 'Primary CTA over dark hero band — flips polarity.'
  button-text-link:
    bg: 'transparent'
    color: '#0467df'
    use: '"Read full report ›" type tertiary links — chevron suffix is the system''s mark.'
  card-feature:
    bg: '#ffffff'
    color: '#1c2b33'
    radius: 12
    padding: '32px'
    border: 'none'
    shadow: 'none'
    use: 'Feature article card — relies on type and photography, not chrome.'
  card-stat:
    bg: '#f5f5f5'
    color: '#1c2b33'
    radius: 12
    padding: '40px'
    use: 'Quoted statistic ("3.5 billion daily users") with display number on alt-section ground.'
  nav-top:
    bg: '#ffffff'
    color: '#1c2b33'
    height: 72
    padding: '0 32px'
    border-bottom: '1px solid #dddfe2'
    use: 'Top nav with Meta wordmark left, product menu centre, account utilities right.'
  nav-link:
    color: '#1c2b33'
    font: nav-link
    padding: '8px 16px'
    use: 'Inactive nav link. Hover adds 2px brand-blue underline.'
  text-input:
    bg: '#ffffff'
    color: '#1c2b33'
    border: '1px solid #dddfe2'
    radius: 8
    padding: '12px 16px'
    height: 48
    focus: 'border becomes 2px solid #1c2b33; no glow.'
    use: 'Standard form input.'
  badge-tag:
    bg: '#f0f4fa'
    color: '#0467df'
    radius: 9999
    padding: '4px 12px'
    font: micro
    use: 'Section tag ("Research", "News", "Reality Labs") above article headlines.'
  pull-quote:
    color: '#1c2b33'
    font: quote
    border-left: '4px solid #0467df'
    padding: '24px 0 24px 32px'
    use: 'Pull-quote inside long-form research articles.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out-soft: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  duration-page: 480
  card-hover-lift: 'translate-y -2px, optional shadow fade-in'
  link-underline-grow: 'underline 0 → 2px from left over 200ms'
  modal-enter: 'scrim 200ms + dialog 280ms emphasized translate-y +12 → 0'
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transforms suppress, opacity-only.'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1600

shadows:
  ambient: 'none'
  hover-card: 'rgba(0,0,0,0.06) 0 4px 12px'
  dropdown: 'rgba(0,0,0,0.1) 0 8px 24px'
  modal: 'rgba(0,0,0,0.18) 0 16px 40px'
  ring: '0 0 0 2px #0467df'

accessibility:
  contrast-text-on-bg: 14.6        # #1c2b33 on #ffffff — AAA
  contrast-text-on-brand: 4.5      # #ffffff on #0467df — AA at body, AAA at large
  contrast-muted-on-bg: 5.4        # #65676b on #ffffff — AA
  focus-ring: '2px solid #0467df + 2px outline-offset'
  reduced-motion-honored: true
  touch-target-min: 44

dark-mode: optional
---

## 1. Visual Theme & Atmosphere

Meta's corporate marketing site (about.meta.com, ai.meta.com) reads like an annual report given a tech-product polish. The canvas is **pure white** (`#ffffff`), the primary ink is a deep slate (`#1c2b33`) rather than pure black, and a single **Optimistic blue** (`#0467df`) carries every primary CTA, every link, every accent moment. The composition is wide-margin, image-led, and willingly minimal — there are no cards on most pages, no shadows, no decorative chrome. The page is a corporate skeleton built to host a family of brands (Facebook, Instagram, WhatsApp, Quest, Threads, Reality Labs) without competing with any of them.

Type runs **Optimistic Display** for the headlines — a custom display sans Meta commissioned in 2023 to consolidate its visual identity across the conglomerate. It draws on humanist-geometric foundations (Mark Simonson's Proxima Nova, Erik Spiekermann's Meta Serif as a wink to the brand name), but reads modern, optimistic, and slightly soft. Headlines run at 56–96px in weight 400 — not 700, not bold — because the typeface itself carries enough presence at large sizes that bolding would push it into corporate-aggression territory. Body type is **Meta Sans** at 16/24, plain and trustworthy.

There are essentially three visual modes on the site: the white **research-paper mode** (long-form essays from FAIR, Reality Labs reports, policy posts), the **product-launch mode** (a hero photo of Quest, Ray-Ban Meta, or Threads with a single button overlay), and the occasional **dark inverted band** (`#1c2b33` ground, white type) used to signal a moment of corporate gravity. There is no dark-mode equivalent for the entire site — the dark bands are deliberate composition, not theme.

The shape language is **soft pill** for buttons (radius 9999px on every CTA) and **comfortable rectangle** (8–12px) for cards. Pills make the buttons feel approachable in a corporate context where rectangles would read as legalese. There are almost no other rounded shapes — Meta avoids the hyper-rounded aesthetic of consumer apps.

**Key Characteristics:**
- Single brand voltage: Optimistic blue `#0467df` for every CTA, link, and accent
- Slate ink (`#1c2b33`) over pure black — softens corporate copy
- Custom Optimistic Display sans for headlines at 400 weight (never 700) at 56–96px
- Meta Sans body at 16/24 — plain, trustworthy, corporate-neutral
- Pill-shaped buttons (9999px) over rounded rectangles — approachable in a corporate context
- No card chrome on most pages — type and photography carry the layout
- Occasional inverted dark bands (`#1c2b33` ground) for moments of corporate gravity
- Sub-brand accent colours (Instagram coral, WhatsApp green, Quest black) appear only inside their respective product contexts

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): default page floor for every public corporate page
- **Ink** (`#1c2b33`): the dominant text colour — a deep slate, not pure black, which softens long-form research copy
- **Optimistic Blue** (`#0467df`): single brand voltage for every primary CTA, every inline link, every accent moment

### Brand & Dark
- **Optimistic Blue Hover** (`#0356b8`): hover variant — slightly darker, used on link and CTA hover
- **Optimistic Blue Active** (`#024187`): press state, rarely visible
- **Brand Soft** (`#e7f3ff`): blue-tinted surface for inline link backgrounds and info bands
- **Bg Deep** (`#1c2b33`): dark hero band ground, occasional full-section inversion. Same as ink — the brand uses one near-black for both type-on-light and surface-when-dark

### Accent (Sub-Brand)
- **Instagram Coral** (`#e4405f`): only used inside Instagram product contexts (instagram.com, ad-product mentions)
- **WhatsApp Green** (`#25d366`): only inside WhatsApp product contexts
- **Quest Black** (`#000000`): Reality Labs / Quest product surfaces use pure black, not slate
- **Threads Black** (`#000000`): same as Quest — Threads inherits the inverted black aesthetic

### Interactive
- **Link** (`#0467df`): inline links match brand exactly; underline appears on hover, not at rest
- **Link Hover** (`#0356b8`): hover state — text colour darkens, 2px underline appears
- **Visited**: `#0467df` (Meta does not differentiate visited state — keeps brand consistent)
- **Selected** (`#e7f3ff` background, `#0467df` text): selected nav item or filter chip
- **Disabled** (`#8a8d91` text, `#ebedf0` surface)

### Neutral Scale
- **Text Strong** (`#0a1014`) — extreme contrast headline ink, rare
- **Text** (`#1c2b33`) — slate primary
- **Text Muted** (`#65676b`) — secondary metadata, captions, byline names
- **Text Soft** (`#8a8d91`) — disabled, footer fine print
- **Surface Soft** (`#f5f5f5`) — alternate section ground for visual rhythm
- **Surface Strong** (`#ebedf0`) — input fill, secondary card surface
- **Surface Tint** (`#f0f4fa`) — blue-tinted info surface

### Surface & Borders
- **Border** (`#dddfe2`) — default 1px border on inputs, dividers, footer columns
- **Border Soft** (`#e4e6eb`) — softer divider for long-form prose breaks
- **Border Strong** (`#1c2b33`) — focused input border (replaces hairline on focus)

### Shadow Colors
Meta keeps shadows neutral (no blue tint) and minimal — most surfaces are flat. The hover-card tier is the only shadow used in marketing, and it appears only on press articles and feature cards, not on default page surfaces.

- `rgba(0,0,0,0.06) 0 4px 12px` — hover-card
- `rgba(0,0,0,0.1) 0 8px 24px` — dropdown
- `rgba(0,0,0,0.18) 0 16px 40px` — modal

### Semantic
- **Success** (`#42b72a` on `#e9f7e2`): confirmation, complete states
- **Warning** (`#f7b928` on `#fff8e1`): cautions, low-priority advisories
- **Danger** (`#fa3e3e` on `#ffeaea`): error inline, destructive confirmation
- **Info** (`#0467df` on `#e7f3ff`): informational banner — same as brand

## 3. Typography Rules

### Font Family

**Primary Display**: `Optimistic Display` (custom Meta sans, 2023). Fallback: `"Helvetica Neue", Helvetica, Arial, sans-serif`. Used at 32px and above.

**Body**: `Meta Sans` (custom — drop-in for system sans). Fallback: `"Optimistic Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.

**Mono**: `Optimistic Mono` for code samples in research papers and developer docs. Fallback: `"SF Mono", Menlo, Monaco, monospace`.

**OpenType features**: `kern`, `liga`, and `tnum` are enabled site-wide. `tnum` matters most on AI benchmark tables and statistic cards where numerical columns must align.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | Optimistic Display | 96 | 400 | 1.04 | -0.04em | kern | Homepage hero ("Building the future of human connection") |
| display-xl | Optimistic Display | 72 | 400 | 1.06 | -0.035em | kern | Section-page hero |
| display-lg | Optimistic Display | 56 | 400 | 1.08 | -0.03em | kern | Article hero, research paper title |
| display-md | Optimistic Display | 40 | 500 | 1.1 | -0.02em | kern | H2 inside articles |
| display-sm | Optimistic Display | 32 | 500 | 1.15 | -0.015em | kern | H3 inside articles |
| title-lg | Meta Sans | 24 | 600 | 1.25 | -0.005em | — | Card headline |
| title-md | Meta Sans | 20 | 600 | 1.3 | 0 | — | Sub-section title |
| title-sm | Meta Sans | 17 | 600 | 1.35 | 0 | — | List item title |
| body-lg | Meta Sans | 18 | 400 | 1.55 | 0 | — | Long-form intro paragraph |
| body-md | Meta Sans | 16 | 400 | 1.5 | 0 | — | Standard body |
| body-sm | Meta Sans | 14 | 400 | 1.45 | 0 | — | Caption, metadata |
| caption | Meta Sans | 13 | 400 | 1.4 | 0.005em | — | Image captions, byline |
| micro | Meta Sans | 11 | 600 | 1.35 | 0.04em | uppercase | Section tags ("Research", "News") |
| button-md | Meta Sans | 16 | 600 | 1.25 | 0 | — | CTA |
| button-sm | Meta Sans | 14 | 600 | 1.25 | 0 | — | Inline button |
| nav-link | Meta Sans | 15 | 500 | 1.35 | 0 | — | Top-nav link |
| quote | Optimistic Display | 36 | 400 | 1.35 | -0.01em | kern | Pull-quote inside research |
| code | Optimistic Mono | 14 | 400 | 1.5 | 0 | — | Code samples |

### Principles

- **Display at 400, never 700.** Optimistic Display has enough presence at large sizes that bolding pushes it into aggression. Meta keeps display at the regular weight and lets size carry hierarchy.
- **Slate, not black.** All ink uses `#1c2b33` rather than `#000000` — the softening reads warmer and more human, important for a corporate brand whose product is human connection.
- **Negative tracking on display, neutral on body.** Display sits at -0.02 to -0.04em; body and caption stay at 0 for legibility at small sizes.
- **Three families, three uses.** Optimistic Display → headlines, Meta Sans → body, Optimistic Mono → code. Never substitute across roles.
- **One quote moment per article.** Pull-quotes use display at 36px / 400 with a 4px brand-blue left rule. The blue rule is the only place the brand appears in long-form prose.
- **Tabular numerals on stats.** `font-variant-numeric: tabular-nums` is enabled on all statistic cards and benchmark tables.

## 4. Component Stylings

### Buttons

**`button-primary`** — Optimistic blue (`#0467df`) fill, white text at 16px / 600, **9999px (pill) radius**, 14×28px padding, 48px height. The pill shape is signature — keeps a corporate brand approachable. Hover darkens to `#0356b8`, no transform.

**`button-secondary`** — White fill, slate ink text, 1px slate border, same pill radius. Used for "Learn more" pairings beside the primary.

**`button-on-dark`** — When the page band inverts to `#1c2b33`, the primary CTA flips polarity: white fill, slate text, same pill. The brand blue is held back here — the dark band is meant to feel solemn, not selling.

**`button-text-link`** — Plain Optimistic-blue text with a `›` chevron suffix ("Read full report ›"). The chevron is the system's tertiary-link mark — never an arrow, always a chevron.

### Cards

**`card-feature`** — White surface, 12px radius, 32px padding, no shadow, no border. The card "exists" only because of its type weight and image — the chrome itself is invisible. Hover applies the hover-card shadow tier.

**`card-stat`** — Stat card on alt-section ground (`#f5f5f5`), 12px radius, 40px padding, holding a display-md / 500 number ("3.5B daily users") above a body-md descriptor.

### Badges, Tags, Pills

**`badge-tag`** — Section tag ("Research", "News", "Reality Labs") that sits above article headlines. Brand-soft (`#e7f3ff`) background, brand-blue text in `micro` (11px / 600 / uppercase / 0.04em tracking), 9999px radius, 4×12px padding.

### Inputs / Forms

**`text-input`** — White surface, 1px border (`#dddfe2`), 8px radius, 48px height, 12×16px padding. On focus the border becomes 2px solid slate (`#1c2b33`) — no glow ring, no brand colour overlay. Newsletter signup forms wrap a primary pill button inside the right edge of the input for an inline-CTA pattern.

### Navigation

**`nav-top`** — White ground, 72px height, 1px bottom border. Wordmark flush left, product menu centred, account utilities flush right.

**`nav-link`** — Slate text in `nav-link` style (15px / 500). Hover adds a 2px brand-blue underline that grows from left → right over 200ms. Active link inherits the underline at full width.

### Pull Quote

**`pull-quote`** — Used inside research articles. 36px / 400 Optimistic Display, slate ink, with a 4px left rule in brand blue and 24×0×24×32 padding. The blue rule is the only brand-colour moment inside long-form prose.

### Modal & Tooltip

**`modal`** — White surface, 12px radius, 32–48px padding, modal shadow tier. Centred over a 70%-opacity slate scrim. Close button is a 32px circular icon-button anchored top-right.

**`tooltip`** — Slate fill (`#1c2b33`), white text in `body-sm`, 6px radius, 8×12px padding. Used sparingly — Meta prefers explicit captions to hover-revealed help.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128`
- Section padding (vertical): **120px** for hero bands, **96px** for body sections — generous, magazine-like
- Article body paragraph spacing: 24px between paragraphs, 48px above/below pull quotes
- Card internal padding: 32px (feature card), 40px (stat card)

### Grid & Container

- Max content width: **1280px** centred for marketing pages
- Prose width: **720px** centred for long-form research and blog posts
- Hero treatment: full-bleed photography behind a 1280px content container
- Feature grid: 3-column at desktop, 2-column at tablet, 1-column at mobile, all with 32px gutters

### Whitespace Philosophy

Meta gives bands of generous whitespace (96–120px vertical padding) so each section reads as a discrete chapter — the page is a slow scroll through a corporate annual report, not a dense product page. The trade-off is page length; Meta accepts long pages because the brand position rewards depth and patience.

### Section Cadence

Light/dark alternation is rare but pointed. The default is white. Roughly once per long landing page, a single full-section dark band (`#1c2b33`) appears — typically the "About Meta" mission statement or a Reality Labs reveal. The dark band is a visual sigh, a moment of corporate gravity in the otherwise weightless white scroll.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 4px | Code blocks, tags inside dense lists |
| Standard | 6px | Avatars (rounded-square), small chips |
| Comfortable | 8px | Text inputs, secondary cards |
| Relaxed | 12px | Feature cards, stat cards, modal |
| Featured | 16px | Hero image clipping (rare) |
| Pill | 9999px | All buttons, all badges, all chips |

The defining shape rule: **buttons are always pills, cards are always 8–12px rectangles.** Meta does not mix the two — the pill button on a rounded-rectangle card creates the system's signature tension between approachable action and corporate substance.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, hero, all sections (~95% of surfaces) |
| 1 — Hover card | `rgba(0,0,0,0.06) 0 4px 12px` | Feature cards on pointer hover, press articles |
| 2 — Dropdown | `rgba(0,0,0,0.1) 0 8px 24px` | Account menu, language picker, search suggestions |
| 3 — Modal | `rgba(0,0,0,0.18) 0 16px 40px` | Centred dialogs (subscribe, contact, video player) |
| 4 — Scrim | `rgba(28,43,51,0.7)` ground | Modal backdrop — slate-tinted, not pure black |

### Shadow Philosophy

Meta is **flat by default**. Most marketing surfaces have no shadow at all — depth comes from whitespace separation, not layered elevation. The hover-card tier is reserved for feature cards and only appears on hover; the system explicitly does not show shadows at rest. The modal scrim uses slate-tinted black (rather than pure black) to keep colour temperature consistent with the page ink.

## 8. Interaction & Motion

### Easing

- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — hover state colour swaps, hairline transitions
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry, page-section reveals on scroll
- **Out-soft**: `cubic-bezier(0.0, 0, 0.2, 1)` — image-fade transitions

### Durations

| Bucket | Value | Use |
|--------|-------|-----|
| Fast | 150ms | Hover colour changes, link underline fade |
| Standard | 240ms | Card hover lift, button colour transition |
| Slow | 320ms | Modal enter, dropdown open |
| Page | 480ms | Page-section scroll-reveal fade-in |

### Per-Component Recipes

- **Button hover**: background colour fades from `#0467df` → `#0356b8` over 150ms standard. No transform. The pill maintains its shape.
- **Link underline grow**: nav-link hover triggers a 2px brand-blue underline that grows from left → right over 200ms, anchored at the left edge of the text. On hover-out the underline shrinks back to the left.
- **Card hover lift**: feature card translates `translateY(-2px)` and the hover-card shadow fades in over 240ms standard. On hover-out, both reverse.
- **Modal enter**: scrim fades in over 200ms, then the dialog translates from `translateY(12px) opacity(0)` to `translateY(0) opacity(1)` over 280ms emphasized.
- **Section scroll-reveal**: on first scroll into view, sections fade from `opacity(0) translateY(16px)` to `opacity(1) translateY(0)` over 480ms emphasized. Each child element staggered by 80ms.

### Page Transitions

Within the about.meta.com domain, navigation triggers a 240ms cross-fade rather than a hard cut. The white canvas makes the transition feel like a page-turn in a printed report.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. All `translate` transforms suppress; only opacity transitions remain. Section scroll-reveals become instant. Card hover lifts disappear — only the shadow change remains.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #1c2b33 ink on #ffffff canvas | 14.6 | AAA |
| #ffffff on #0467df brand | 4.5 | AA body / AAA large |
| #65676b muted on #ffffff | 5.4 | AA |
| #ffffff on #1c2b33 dark band | 14.6 | AAA |
| #b0b3b8 muted on #1c2b33 | 5.7 | AA |

### Focus Indicators

Focus ring is `2px solid #0467df` with 2px outline-offset — the brand colour does double-duty as the focus indicator, which is unusual for a brand-disciplined system. The choice is deliberate: keyboard users see brand colour as feedback, which reinforces the brand's promise of accessibility.

### ARIA Patterns

- **Top nav**: `role="navigation"` with `aria-label="Primary"`. The product menu is a `role="menu"` opened by Enter/Space
- **Article**: `<article>` element wraps long-form content with `<header>` for byline and pub date
- **Pull quote**: `<blockquote>` semantic, with `<cite>` inside for attribution
- **Modal**: focus trap inside, Esc closes, click outside closes, focus returns to trigger on close
- **Newsletter signup**: form with explicit `<label>` (visually hidden via class but available to screen readers); error state populates `aria-describedby` with the inline error message

### Keyboard Navigation

- Top nav: Tab moves logo → product menu → account utilities
- Product menu: Enter/Space opens, arrow keys navigate items, Esc closes
- Article body: standard tab order through links, with skip-to-content link at the top
- Modal: focus trap; Tab cycles inside the modal only

### Screen Reader Hints

Meta uses semantic HTML aggressively — `<nav>`, `<article>`, `<header>`, `<footer>`, `<main>`, `<section>` all carry their default roles. Image captions live inside `<figcaption>`. Decorative icons get `aria-hidden="true"`; meaningful icons get `role="img" aria-label="..."`.

### Reduced Motion

Honored. All `translate`, `scale`, and scroll-reveal animations suppress. Only opacity transitions remain.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Top nav collapses to wordmark + hamburger; hero display drops 96 → 48px; feature grid 1-column; pull quote loses left rule |
| Tablet | 640–1024px | Top nav keeps utilities flush right; hero display 72px; feature grid 2-column |
| Desktop | 1024–1280px | Full top nav with centre product menu; hero display 96px; feature grid 3-column |
| Wide | >1280px | Content caps at 1280px centred; gutters absorb the rest |

### Touch Targets

- Primary CTAs: 48×48px (above WCAG AAA)
- Nav links: 44×44px tappable area (padding around the visible 15px text)
- Pill buttons maintain 48px height across all breakpoints

### Collapsing Strategy

- Top product menu collapses into a full-screen overlay sheet below 1024px
- Feature grid drops 3 → 2 → 1 column cleanly at each breakpoint
- Hero photography reframes (loses negative space margins) below mobile breakpoint
- Stat cards stack vertically and lose 40px padding → 24px padding on mobile

### Image Behavior

Hero photos use `object-fit: cover` with a focal-point hint (`object-position: 50% 30%`) so the subject stays centred when the image reframes. Inline article images use `width: 100%; height: auto` and an explicit aspect ratio to prevent layout shift.

### Container Queries

Used inside the feature card so the card padding and title size adapt to its container width regardless of breakpoint — important when the card appears in a 2-column or 3-column layout on the same page.

## 11. Content & Voice

### Tone

Optimistic, reflective, occasionally aspirational — Meta writes as a corporate citizen, not as a tech company selling product. Headlines lead with values ("Building the future of human connection") and missions, not feature lists. The voice avoids both startup punchiness ("Get yours today!") and enterprise stiffness ("Deploy at scale"); it sits somewhere between an annual report and a magazine essay.

### Microcopy Patterns

- **Button verbs**: "Read more", "Learn more", "Subscribe", "Get Quest 3", "Watch the announcement", "Read the paper" — outcome-named, never "Click here"
- **Tertiary link**: always ends in a `›` chevron — "Read full report ›", "See research ›"
- **Error message recipe**: `[What went wrong] + [What to do]` — "We couldn't reach the server. Try again in a moment."
- **Success confirmation**: short and quiet — "Subscribed" rather than "Thanks for subscribing!"
- **Section tags**: single-word categorical — "Research", "News", "Reality Labs", "Connectivity", "Open Source"

### Empty States

Empty newsletter archive: "No posts yet." That's the entire copy — Meta does not over-explain absence. Empty search results inside the press centre: "No results for 'X.' Try a broader search." — names the cause, suggests a remedy.

### CTA Verb Conventions

- Primary action: **"Read more"** (research), **"Watch"** (announcements), **"Get [product]"** (commerce: Quest 3, Ray-Ban Meta), **"Subscribe"** (newsletter)
- Secondary action: **"Learn more"**, **"Explore"** (product overview pages)
- Tertiary text-link: **"Read full report ›"**, **"See research ›"** — always with chevron suffix
- Avoided: "Click here", "Buy now", "Sign up free!", "Try it now"

## 12. Dark Mode & Theming

**Light-only on the corporate web.** about.meta.com, ai.meta.com, and the press centre do not respect `prefers-color-scheme: dark`. The deliberate dark bands (`#1c2b33`) are composition, not theme — they are a design tool used inside the otherwise white page.

The Meta product surfaces (Facebook, Instagram, WhatsApp web, Threads) all ship full dark themes, but those are governed by separate product design systems. The corporate site explicitly stays light because it positions itself as a published artefact (an annual report, an essay collection) rather than an app — and published artefacts in 2026 are still almost universally light.

If a future inversion ships, the swap would be:

```yaml
colors-dark:
  bg: '#1c2b33'
  surface: '#22323b'
  text: '#ffffff'
  text-muted: '#b0b3b8'
  brand: '#5fa8ff'              # lifted blue for AA contrast on dark
  border: '#2f3f47'
```

## 13. Lineage & Influences

Meta's corporate design draws on three streams. **Helvetica-era corporate identity** (think IBM, Lufthansa, the Swiss-grid age of brand books) gives it the wide whitespace, single-colour discipline, and willingness to leave large white voids. **Annual-report editorial design** (think Berkshire Hathaway letters meet Apple's environment reports) gives it the magazine-like vertical pacing and the comfort with long scrolls. **Tech-product minimalism** (Stripe, Apple, Linear) gives it the pill buttons, the comfort with one accent colour, and the rejection of decorative chrome.

The Optimistic Display typeface is the most distinctive single choice — a custom face designed to signal that Meta is a single corporate entity (not just Facebook + Instagram + WhatsApp), modern but not aggressive, optimistic but not naive. The face was rolled out across about.meta.com, the Reality Labs site, the FAIR research blog, and corporate press materials in 2023.

What Meta rejects: the dark social-media-app aesthetic of its consumer products (Facebook's blue chrome, Instagram's coral gradient), decorative illustration, multiple brand colours on a single page, hyper-rounded consumer-app shapes.

**Influences:**
- IBM / Helvetica-era corporate identity — single-colour discipline, [ibm.com](https://ibm.com)
- Apple environment reports — annual-report editorial pacing, [apple.com/environment](https://apple.com/environment)
- Stripe — single-blue voltage, pill buttons, [stripe.com](https://stripe.com)
- Berkshire Hathaway shareholder letters — long-form corporate prose comfort

## 14. Do's and Don'ts

**Do**
- Use Optimistic blue (`#0467df`) for every primary CTA and inline link — single voltage
- Keep ink slate (`#1c2b33`) — never pure black
- Use Optimistic Display at 400 weight for headlines — let size carry hierarchy
- Pill-shape every button — corporate context demands approachable shapes
- Embrace whitespace — 96–120px section padding is intentional
- Use the `›` chevron suffix on tertiary links
- Render statistics with tabular numerals
- Apply the brand-blue 4px left rule on pull quotes — the only brand moment inside prose
- Use slate (#1c2b33) for inverted dark bands — keeps colour temperature consistent
- Lead headlines with values, not features

**Don't**
- Don't introduce a second brand colour on the corporate site — sub-brand accents stay in their product contexts
- Don't bold display headlines — Optimistic Display at 400 carries enough presence
- Don't use pure black (`#000000`) for ink — slate is the brand discipline
- Don't add shadows to cards at rest — depth lives in whitespace
- Don't use rounded rectangles for buttons — pills only
- Don't use exclamation marks in microcopy
- Don't use "Click here" or "Submit" — outcome-named verbs only
- Don't render the focus ring in slate — keep brand-blue focus, even though it's unusual
- Don't fight the white canvas with decorative chrome
- Don't break the pill/rectangle button-vs-card discipline — they create the brand's signature tension

## 15. Agent Prompt Guide

### Quick Color Reference

```
Canvas:        #ffffff
Ink:           #1c2b33
Brand:         #0467df
Brand-hover:   #0356b8
Brand-soft:    #e7f3ff
Surface-soft:  #f5f5f5
Border:        #dddfe2
Muted:         #65676b
Bg-deep:       #1c2b33
Success:       #42b72a
Danger:        #fa3e3e
```

### Example Component Prompts

- "Create a Meta-style hero: pure white canvas (#ffffff). 96px / 400 Optimistic Display headline in slate (#1c2b33), two lines, -0.04em tracking ('Building the future of human connection'). Below the headline, an 18px / 400 body paragraph at 720px max width. Below that, a single Optimistic-blue (#0467df) pill CTA at 16px / 600 white text, 14×28px padding, 9999px radius."
- "Design a feature card: white surface, 12px radius, 32px padding, no shadow at rest. Inside: a section tag at 11px / 600 / uppercase / 0.04em tracking in brand-blue text on brand-soft (#e7f3ff) pill background. Then a 24px / 600 title, 16px / 400 body excerpt, and a tertiary text-link 'Read more ›' in brand-blue. On hover, the card translates -2px and applies the hover-card shadow."
- "Build a stat card: alt-section ground (#f5f5f5), 12px radius, 40px padding. Display the number at 56px / 400 Optimistic Display ('3.5B'), then a 16px / 400 descriptor below ('people on Meta apps daily')."
- "Create a pull quote: 36px / 400 Optimistic Display in slate, 4px brand-blue left rule, 24×0×24×32 padding. Use inside long-form research articles."
- "Design a newsletter signup: pill input (white, 1px #dddfe2 border, 8px radius, 48px height) with a brand-blue Subscribe pill button nested at the right edge inside the input."
- "Build an inverted dark band: full-width #1c2b33 ground, 120px vertical padding. White headline at 56px / 400 Optimistic Display, white body at 18px / 400. CTA flips polarity: white pill button with slate text."

### Iteration Guide

1. **Start on white at 1280px max width.** Anything else reads as a different brand.
2. **One brand-blue per fold.** If two CTAs are visible, demote one to a secondary white-with-border pill.
3. **Resist bold display.** Optimistic Display at 400 is correct — bumping to 700 reads as corporate aggression.
4. **Pill buttons, rectangle cards.** Mixing pill cards or rectangle buttons breaks the system's signature tension.
5. **Slate, not black.** If you find yourself reaching for `#000000`, you've broken the brand.
6. **Whitespace is a feature.** 96–120px section padding feels excessive on its own; it works in concert with long-form pacing.
7. **Chevron suffixes on tertiary links.** `›` not `→`.
8. **Sub-brand accents stay in their contexts.** Instagram coral does not appear on the corporate page; Quest black does not appear on the FAIR research blog.
