---
name: Tana
tagline: Pure black canvas, a custom tanaClassic serif at 83px, and a pale-pistachio CTA — a knowledge graph dressed as a literary supplement.
updated_at: 2026-05-05T20:10:49+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://tana.inc
spec: design.md/v1.5
quality: curated
featured: false
categories: [ai, saas, dev-tools]
tags: [dark, editorial, serif, minimal, spacious, structured]
preview_swatch: ['#000000', '#e1f0bd', '#f0eded']
related: [linear, anthropic, notion]
description: 'Tana''s site is a literary supplement on a black page. The canvas is pure `#000`, the hero "Meetings that ship" sets at 83px in a custom tanaClassic serif weighted at 350 (a near-light italic-feeling axis), and the CTA is a pale-pistachio `#e1f0bd` pill on black. SF Pro carries body copy. The whole page reads like the inside of a New Yorker issue printed on dark stock — generous margin, serif headline, single restrained accent.'

colors:
  bg: '#000000'                     # pure black canvas
  bg-soft: '#0a0a0a'                # nested panel, first tonal step
  bg-deep: '#050505'                # nav band overlay
  surface: '#141414'                # card / pricing surface
  surface-raised: '#1a1a1a'         # hovered card
  surface-overlay: '#1f1f1f'        # popover, dropdown
  surface-inverted: '#f0eded'       # announcement strip (the only inversion)
  text: '#f0eded'                   # primary copy on dark — soft warm white
  text-strong: '#ffffff'            # display copy peak
  text-muted: '#a8a5a3'             # secondary deck
  text-soft: '#7a7775'              # captions, meta
  text-faint: '#555250'             # disabled, footnote
  text-on-brand: '#000000'          # text inside the pistachio CTA
  text-on-inverted: '#0a0a0a'       # text on announcement strip
  brand: '#e1f0bd'                  # pale-pistachio CTA — the entire chromatic palette
  brand-hover: '#cde0a3'            # pressed state
  brand-active: '#b8cc88'           # pressed deep
  brand-soft: '#1f2516'             # 8% pistachio overlay (rare)
  accent-italic: '#d4caa8'          # warm-cream italic word color in hero subdeck
  accent-italic-soft: '#a8a08a'     # secondary cream tone
  link: '#e1f0bd'                   # links use brand
  link-hover: '#ffffff'             # hovered link goes pure white
  border: '#1f1f1f'                 # near-black divider — barely there
  border-soft: '#161616'            # softer divider
  border-strong: '#2a2a2a'          # focus / selected card edge
  border-inverted: '#d8d5d3'        # divider inside announcement strip
  focus-ring: '#e1f0bd'             # pistachio focus outline
  selection-bg: '#e1f0bd'
  selection-text: '#000000'
  shadow: 'rgba(0,0,0,0.6)'         # near-imperceptible against pure black
  success: '#a8d896'
  warning: '#e6c07a'
  danger: '#e89a8d'
  info: '#9bb8d4'
  on-brand: '#000000'

typography:
  display:
    family: '"tanaClassic", "tanaClassic Fallback", "Tiempos Headline", "Iowan Old Style", Georgia, serif'
    weights: [350, 400]
    opentype-features: ['liga', 'kern', 'dlig']
  serif:
    family: '"tanaClassic", Georgia, serif'
    weights: [350, 400, 500]
  body:
    family: '"SF Pro", -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['kern', 'liga', 'tnum']
  mono:
    family: '"SF Mono", "JetBrains Mono", ui-monospace, Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 83, weight: 350, lineHeight: 1.10, tracking: '-0.005em', family: display, opentype: 'liga, dlig' }
    display-large:   { size: 64, weight: 350, lineHeight: 1.12, tracking: '-0.005em', family: display }
    display-medium:  { size: 48, weight: 400, lineHeight: 1.15, tracking: '0', family: display }
    h1:              { size: 42, weight: 400, lineHeight: 1.20, tracking: '0', family: display }
    h2:              { size: 32, weight: 400, lineHeight: 1.25, tracking: '0', family: display }
    h3:              { size: 24, weight: 500, lineHeight: 1.40, family: body }
    h4:              { size: 20, weight: 500, lineHeight: 1.40, family: body }
    h5:              { size: 17, weight: 600, lineHeight: 1.40, family: body }
    serif-emphasis:  { size: 32, weight: 350, italic: true, family: serif, color: 'accent-italic' }
    body-large:      { size: 19, weight: 400, lineHeight: 1.55, family: body }
    body:            { size: 17, weight: 400, lineHeight: 1.55, family: body }
    body-small:      { size: 15, weight: 400, lineHeight: 1.50, family: body }
    label:           { size: 12, weight: 500, family: body, tracking: '0.04em' }
    label-tabular:   { size: 12, weight: 500, family: body, tracking: '0.04em', opentype: 'tnum' }
    caption:         { size: 12, weight: 400, lineHeight: 1.40, family: body }
    code-inline:     { size: 14, weight: 400, family: mono }
    code-block:      { size: 13, weight: 400, family: mono, lineHeight: 1.55 }
    code-label:      { size: 11, weight: 500, family: mono, tracking: '0.03em' }

radius:
  micro: 2          # divider rounding
  sm: 4             # input, chip
  md: 8             # secondary button
  lg: 12            # primary CTA pistachio pill (observed)
  xl: 16            # card
  featured: 24      # hero shell
  pill: 9999        # avoided — Tana uses moderate radius

spacing:
  base: 4
  scale:
    xxs: 4
    xs: 8
    sm: 12
    md: 16
    lg: 24
    xl: 32
    xxl: 48
    section-sm: 64
    section: 96
    section-lg: 160

layout:
  page-width: 1200
  prose-width: 720
  header-height: 64
  container: 1200
  gutter: 32
  rhythm: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160]

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 120
  duration-standard: 240
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — fades collapse to opacity-only, no translate, no scale'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'none'                                                     # there are no shadows on the canvas
  standard: '0 1px 0 rgba(255,255,255,0.04) inset'                    # near-invisible inner glow on cards
  elevated: '0 8px 24px rgba(0,0,0,0.6)'                              # popover only
  deep: '0 24px 48px rgba(0,0,0,0.7)'                                 # modal
  ring: '0 0 0 2px #e1f0bd'                                           # focus ring

accessibility:
  contrast-text-on-bg: 18.1            # f0eded on 000 — AAA
  contrast-text-on-brand: 16.8         # 000 on e1f0bd — AAA
  contrast-text-muted-on-bg: 7.2       # a8a5a3 on 000 — AAA body, AA caption
  focus-ring: '2px solid #e1f0bd, 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'tab order follows DOM, skip-link to #main, all CTAs reachable'

components:
  button-primary:
    bg: '#e1f0bd'
    text: '#000000'
    radius: 12
    padding: '12px 24px'
    font: 'body, 15px, weight 500'
    hover: 'bg #cde0a3, no lift, opacity 1'
    use: 'single primary CTA per page — "Get early access"'
  button-ghost:
    bg: 'transparent'
    text: '#f0eded'
    radius: 12
    padding: '12px 24px'
    border: '1px solid #2a2a2a'
    hover: 'border #f0eded, bg rgba(255,255,255,0.04)'
    use: 'secondary nav action'
  button-link:
    bg: 'transparent'
    text: '#e1f0bd'
    padding: '0'
    hover: 'text #ffffff, underline'
    use: 'inline action, "Learn more"'
  button-danger:
    bg: 'transparent'
    text: '#e89a8d'
    border: '1px solid #e89a8d'
    radius: 12
    hover: 'bg rgba(232,154,141,0.08)'
    use: 'rare destructive action — never on marketing chrome'
  card:
    bg: '#141414'
    border: '1px solid #1f1f1f'
    radius: 16
    padding: '32px'
    hover: 'border #2a2a2a, no shadow'
    use: 'feature, pricing, testimonial'
  card-featured:
    bg: '#141414'
    border: '1px solid #e1f0bd'
    radius: 24
    padding: '40px'
    use: 'pricing recommended tier'
  input:
    bg: '#0a0a0a'
    text: '#f0eded'
    placeholder: '#7a7775'
    border: '1px solid #1f1f1f'
    radius: 8
    padding: '12px 16px'
    focus: 'border #e1f0bd, ring 2px #e1f0bd at 30% alpha'
    use: 'email capture, search'
  badge:
    bg: '#1f1f1f'
    text: '#a8a5a3'
    radius: 4
    padding: '4px 8px'
    font: 'label, 12px, weight 500, tracking 0.04em'
    use: 'tag, version chip, "BETA"'
  badge-brand:
    bg: 'rgba(225,240,189,0.12)'
    text: '#e1f0bd'
    radius: 4
    padding: '4px 8px'
    use: 'highlighted feature label'
  nav-link:
    text: '#a8a5a3'
    hover: 'text #f0eded, no underline'
    active: 'text #f0eded'
    spacing: '24px between items'
    use: 'top nav, footer'
  announcement-strip:
    bg: '#f0eded'
    text: '#0a0a0a'
    padding: '8px 16px'
    border: 'none'
    use: 'top-of-page announcement — the page''s only inversion'

dark-mode: 'native — Tana is dark-only. No light variant offered for the marketing surface.'

lineage:
  summary: |
    Tana''s site borrows the literary-supplement aesthetic — generous
    margin, single serif voice, restrained accent — and prints it on
    black stock. The canvas is pure `#000`, deeper than Linear''s
    `#08090a` or Raycast''s `#07080a`, and the hero serif is custom
    (`tanaClassic`) at 83px weight 350 — that 350 axis is the design
    fingerprint, lighter than book weight, almost calligraphic, with
    italic moments that glow in a warm `#d4caa8`. Body copy is SF Pro,
    Apple''s system face — a deliberate move, since Tana is positioning
    itself as a system-level knowledge layer rather than a third-party
    tool. The single brand color is a pale-pistachio (`#e1f0bd`), used
    only on the "Get early access" CTA — closer to Aesop / Faber
    & Faber book-jacket green than the saturated brand greens of
    productivity tools. Everything else is monochrome. The result is
    that Tana reads like a New Yorker article about software more
    than a software product page.
  influences:
    - name: 'The New Yorker'
      role: 'Editorial discipline — single serif voice, generous margins, restrained accent.'
      url: https://www.newyorker.com
    - name: 'Linear'
      role: 'Pioneered the near-black dark-mode marketing canvas; Tana pushes deeper to pure `#000`.'
      url: https://linear.app
    - name: 'Aesop / Faber & Faber'
      role: 'Pale-pistachio + black is a literary-luxury colorway borrowed from book jacket and apothecary design.'
      url: https://www.aesop.com
    - name: 'Apple system typography'
      role: 'SF Pro for body signals system-level positioning rather than third-party tool.'
      url: https://developer.apple.com/fonts/
    - name: 'Tiempos Headline (Klim)'
      role: 'Inspirational lineage for the tanaClassic custom serif — high-contrast literary display.'
      url: https://klim.co.nz/retail-fonts/tiempos-headline/
---

## 1. Visual Theme & Atmosphere

Tana''s marketing surface reads like a literary supplement printed on black stock. The canvas is pure `#000` — deeper than Linear''s `#08090a` or Raycast''s `#07080a` — and the page''s entire mood emerges from what *isn''t* there: no gradient, no shadow, no ambient glow. Just a vast black field with type set in a custom serif and a single pale-pistachio button waiting at the center.

The hero copy ("Meetings that ship") sets at 83.23px in **tanaClassic**, a proprietary book serif loaded at weight 350 — a near-light axis that reads as calligraphic rather than display-bold. At that size and weight, the type stops being a headline and starts feeling like the opening line of a printed essay. The italic word "in" in the deck glows in warm `#d4caa8`, the only chromatic move on the marketing chrome before the CTA itself.

The CTA pill is the page''s second design moment: pale-pistachio `#e1f0bd` on black, set at a moderate 12px radius (not a full pill — that would push toward consumer-tech), with black text inside. The color reads as Aesop apothecary or Faber & Faber book-jacket green rather than the saturated greens of productivity tools (Notion, Things, Asana). It''s the entire chromatic palette of the page; nothing else on the canvas carries hue.

Body copy is **SF Pro** — Apple''s system face — at 17px on a 1.55 line-height. The choice is positional rather than aesthetic: by using the macOS system font for body, Tana reads as system infrastructure rather than as a third-party tool. SF Pro on dark stock, paired with a custom serif display, is the typographic signature of a publication that takes itself seriously.

Density is luxurious. Sections occupy full viewports; the hero alone takes up a screen with the deck centered low and acres of black above it. There''s no information density anywhere — every element has space around it equal to the element itself. This is the rhythm of a magazine layout, not a SaaS landing page.

**Key Characteristics**
- Pure-black canvas (`#000`) — deeper than peer dev-tool sites
- Custom **tanaClassic** serif at 83px weight 350 — calligraphic, not display-bold
- Single pale-pistachio (`#e1f0bd`) accent reserved for the primary CTA only
- SF Pro body — Apple''s system face for positional credibility
- Italic moments glow in warm `#d4caa8` — the second tonal voice
- Magazine-grade vertical rhythm — full-viewport sections, generous margins
- Zero shadows; depth via narrow tonal layering (`#000` → `#0a0a0a` → `#141414`)
- Borders at `#1f1f1f` — barely visible, used for spec rather than weight
- Moderate radii (12px CTA, 16px card) — architectural, not playful
- Reads as a New Yorker article about software rather than a product page

## 2. Color Palette & Roles

### Primary
- **bg** `#000000`: pure black canvas — the page''s chromatic ground; never softens to `#0a` or `#0f`.
- **text** `#f0eded`: primary body copy, a soft warm white that feels less surgical than `#fff`.
- **brand** `#e1f0bd`: pale-pistachio CTA — the entire chromatic palette beyond grayscale.

### Brand & Dark
- **bg-deep** `#050505`: faint nav band overlay used as a texture differentiation, not elevation.
- **bg-soft** `#0a0a0a`: first nested panel — barely lifts from the canvas.
- **surface** `#141414`: card / pricing surface — the elevation step large enough to register.
- **surface-raised** `#1a1a1a`: hovered card; +6% luminance over surface.

### Accent
- **accent-italic** `#d4caa8`: warm-cream italic word color in the hero subdeck — the second chromatic moment.
- **accent-italic-soft** `#a8a08a`: secondary cream tone for footnote-style emphasis.
- **brand-hover** `#cde0a3`: pressed state of the pistachio CTA — slightly more saturated.

### Interactive
- **link** `#e1f0bd`: inline links pick up the brand pistachio.
- **link-hover** `#ffffff`: hovered links shift to pure white — restraint over saturation.
- **focus-ring** `#e1f0bd`: 2px pistachio outline at 2px offset.
- **selection-bg** `#e1f0bd` / **selection-text** `#000000`: text selection inverts to brand.

### Neutral Scale
- **text-strong** `#ffffff`: display peak, used sparingly — only on cards.
- **text** `#f0eded`: body and primary copy.
- **text-muted** `#a8a5a3`: secondary deck, captions on dark cards.
- **text-soft** `#7a7775`: meta, low-importance footnote.
- **text-faint** `#555250`: disabled, last-tier metadata.

### Surface & Borders
- **surface-overlay** `#1f1f1f`: popover, dropdown panel.
- **border** `#1f1f1f`: near-black divider — used for spec rather than visual weight.
- **border-soft** `#161616`: softer hairline between adjacent surfaces.
- **border-strong** `#2a2a2a`: focus / selected card edge — the only border that registers visually.

### Shadow Colors
- **shadow** `rgba(0,0,0,0.6)`: shadows are essentially invisible on the pure-black canvas; reserved for popover/modal.
- No tinted shadow palette — Tana''s entire elevation system runs on tonal lift, not shadow grammar.

### Semantic
- **success** `#a8d896`: muted sage, never bright.
- **warning** `#e6c07a`: dusty gold.
- **danger** `#e89a8d`: muted coral — never used for marketing CTAs.
- **info** `#9bb8d4`: chambray blue, low saturation — system message only.

## 3. Typography Rules

### Font Family

- **Primary display**: `tanaClassic` — a custom proprietary book serif (loaded with `tanaClassic Fallback` for FOIT prevention). Falls back to Tiempos Headline, Iowan Old Style, Georgia.
- **Body**: SF Pro Text / Display via the Apple system stack. On non-Apple systems, falls through to Segoe UI / Roboto / Helvetica Neue.
- **Mono companion**: SF Mono for code, JetBrains Mono fallback.
- **OpenType features**: `liga` and `kern` always on; `dlig` discretionary ligatures enabled on the hero serif for the calligraphic feel; `tnum` for tabular numbers in pricing.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | tanaClassic | 83 | 350 | 1.10 | -0.005em | liga, dlig | The page''s defining type moment |
| display-large | tanaClassic | 64 | 350 | 1.12 | -0.005em | liga, dlig | Major section opener |
| display-medium | tanaClassic | 48 | 400 | 1.15 | 0 | liga | Sub-hero, feature head |
| h1 | tanaClassic | 42 | 400 | 1.20 | 0 | liga | Article-grade title |
| h2 | tanaClassic | 32 | 400 | 1.25 | 0 | liga | Section head |
| h3 | SF Pro | 24 | 500 | 1.40 | 0 | kern | Card title — sans for clarity |
| h4 | SF Pro | 20 | 500 | 1.40 | 0 | kern | Sub-section |
| h5 | SF Pro | 17 | 600 | 1.40 | 0 | kern | Inline label, list head |
| serif-emphasis | tanaClassic italic | 32 | 350 | 1.30 | 0 | dlig | The warm-cream italic moment |
| body-large | SF Pro | 19 | 400 | 1.55 | 0 | kern, liga | Hero deck, lead paragraph |
| body | SF Pro | 17 | 400 | 1.55 | 0 | kern, liga | Default reading size |
| body-small | SF Pro | 15 | 400 | 1.50 | 0 | kern | Deck below feature, footnote |
| label | SF Pro | 12 | 500 | 1.30 | 0.04em | kern | All-caps eyebrow, tag text |
| label-tabular | SF Pro | 12 | 500 | 1.30 | 0.04em | tnum | Pricing rows, schedule |
| caption | SF Pro | 12 | 400 | 1.40 | 0 | kern | Image caption, meta |
| code-inline | SF Mono | 14 | 400 | 1.55 | 0 | — | Inline code spans |
| code-block | SF Mono | 13 | 400 | 1.55 | 0 | — | Code blocks |
| code-label | SF Mono | 11 | 500 | 1.30 | 0.03em | — | Status, version chip |

### Principles

- **The 350 weight is the fingerprint.** Display copy at weight 350 (not 400) at 83px reads calligraphic rather than display-bold. This is the single most copy-able decision on the page.
- **Two-mode type discipline.** Display = serif (tanaClassic). UI/body = sans (SF Pro). The two voices never blur — the moment a serif appears at body size or a sans appears at hero size, the system breaks.
- **Tracking is light to neutral.** Display gets `-0.005em` (barely tighter), labels get `+0.04em` (mild expansion). Never the heavy negative tracking of Linear/Vercel.
- **Italics are chromatic.** When tanaClassic italic appears, it''s tinted warm-cream `#d4caa8` — italic isn''t just a slant, it''s a color shift.
- **SF Pro for positioning.** Body in the OS face is the typographic equivalent of saying "Tana is system infrastructure," not "Tana is an app."
- **Tabular numerals for pricing.** `tnum` makes columns of prices align without hand-tweaking.
- **No condensed weights.** SF Pro Compressed and tanaClassic Compressed do not appear; the system breathes wide.

## 4. Component Stylings

### Buttons

**Primary (pistachio pill CTA)**
- Background: `#e1f0bd`
- Text: `#000000`, SF Pro 15px weight 500
- Padding: 12px 24px
- Radius: 12px
- Border: none
- Hover: bg `#cde0a3`, no lift, no shadow
- Active: bg `#b8cc88`
- Focus: 2px pistachio ring at 2px offset
- Use: single primary CTA per page — "Get early access," "Join waitlist"

**Ghost (secondary)**
- Background: transparent
- Text: `#f0eded`, SF Pro 15px weight 500
- Padding: 12px 24px
- Radius: 12px
- Border: 1px solid `#2a2a2a`
- Hover: border `#f0eded`, bg `rgba(255,255,255,0.04)`
- Use: secondary nav action ("Sign in")

**Link (text-only)**
- Background: none
- Text: `#e1f0bd`, SF Pro 15px weight 500
- Padding: 0
- Hover: text `#ffffff`, underline appears
- Use: inline action, "Learn more →"

**Danger (rare)**
- Background: transparent
- Text: `#e89a8d`
- Border: 1px solid `#e89a8d`
- Radius: 12px
- Hover: bg `rgba(232,154,141,0.08)`
- Use: rare destructive action — never on marketing chrome

### Cards

**Standard feature card**
- Background: `#141414`
- Border: 1px solid `#1f1f1f`
- Radius: 16px
- Padding: 32px
- Hover: border `#2a2a2a`, no shadow lift
- Use: feature grid, three-up layout

**Featured card (pricing)**
- Background: `#141414`
- Border: 1px solid `#e1f0bd`
- Radius: 24px
- Padding: 40px
- Use: pricing recommended tier — pistachio border is the signal

### Badges & Chips

**Default tag**
- Background: `#1f1f1f`
- Text: `#a8a5a3`, SF Pro 12px weight 500, tracking 0.04em
- Padding: 4px 8px
- Radius: 4px
- Use: tag, version chip, "BETA"

**Brand tag**
- Background: `rgba(225,240,189,0.12)`
- Text: `#e1f0bd`
- Use: highlighted feature label — rare

### Inputs

- Background: `#0a0a0a`
- Text: `#f0eded`
- Placeholder: `#7a7775`
- Border: 1px solid `#1f1f1f`
- Radius: 8px
- Padding: 12px 16px
- Focus: border `#e1f0bd`, 2px ring at 30% alpha
- Use: email capture, search

### Navigation

- Background: transparent over canvas, occasional `#050505` overlay band on scroll
- Item color: `#a8a5a3` default, `#f0eded` on hover/active — no underline, color shift only
- Spacing: 24px between top-level items
- CTA: pistachio pill anchored right
- Mobile: hamburger reveals full-screen black overlay with stacked items at h3 size

### Decorative

**Announcement strip** — the page''s only inversion. Light surface (`#f0eded`) banded across the top with near-black text (`#0a0a0a`), 8px vertical padding, no radius. Used for product announcements.

**Hero serif display** — 83px tanaClassic at weight 350, with one italic word colored `#d4caa8`. Centered, generous breathing room above and below. The single most identifying primitive.

## 5. Layout Principles

### Spacing System
Base unit = 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160. Density observation: most spacing falls in the 32–96 range — the page is luxurious. Tight 4–8 spacing only inside chips and badges.

### Grid & Container
Container max-width 1200px with 32px gutters. Hero is full-viewport with content centered. Feature grid is typically three-up at desktop, collapsing to single column on mobile. Prose-width sections cap at 720px for legibility.

### Whitespace Philosophy
Generous everywhere. Section padding is typically 96–160px vertical. Adjacent text elements get spacing equal to or greater than their cap-height. The page never feels packed.

### Section Cadence
Pure-black throughout. There is no light/dark alternation; every section is the same canvas. Sections distinguish themselves through type rhythm and content density, not chromatic banding. The only exception is the announcement strip at the very top.

## 6. Shapes & Radius Scale

| Tier | Px | Use |
|------|----|-----|
| Micro | 2 | Divider rounding (rare) |
| Small | 4 | Chip, badge, tag |
| Medium | 8 | Input, secondary button |
| Large | 12 | **Primary CTA pistachio pill** |
| XL | 16 | Card |
| Featured | 24 | Hero shell, pricing recommended card |
| Pill | 9999 | Avoided — Tana doesn''t use full pills |

Compound radii are not used. Tana keeps every corner uniform — the moderate 12px CTA is what keeps the page feeling architectural rather than playful (consumer-tech defaults to pill or 6–8px).

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | Pure `#000` flat | Canvas, page bg |
| 1 | `#0a0a0a` flat, no border | Nested panel, faint section band |
| 2 | `#141414` + `1px #1f1f1f` border | Card, pricing tile |
| 3 | `#1a1a1a` + `1px #2a2a2a` border | Hovered card |
| 4 | `#1f1f1f` + `0 8px 24px rgba(0,0,0,0.6)` shadow | Popover, dropdown |
| 5 | `#1f1f1f` + `0 24px 48px rgba(0,0,0,0.7)` shadow | Modal, dialog |

**Shadow Philosophy**: Tana avoids shadows on the canvas entirely. On a pure-black ground, even soft shadows read as smudges. Depth comes from narrow tonal layering — `#000` → `#0a0a0a` → `#141414` — with each step roughly 4–6% lighter. Borders are nearly invisible (`#1f1f1f` on `#141414` is a 4-point luminance step), used as spec rather than visual weight. Shadows reappear only on overlays detached from the page surface (popover, modal), where they serve as depth cue against the canvas darkness.

## 8. Interaction & Motion

### Easing Curves
- **ease-standard** `cubic-bezier(0.4, 0, 0.2, 1)` — default for color, opacity, transform.
- **ease-emphasized** `cubic-bezier(0.2, 0, 0, 1)` — entrance of overlays and modals.
- **ease-out** `cubic-bezier(0, 0, 0.2, 1)` — exit transitions.

### Duration Buckets
- **fast** 120ms — hover state shifts (color, border).
- **standard** 240ms — overlay fade-in, accordion open.
- **slow** 400ms — modal entrance, page transition.

### Per-Component Micro-States
- **Pistachio CTA hover** — bg shifts to `#cde0a3` over 120ms; no lift, no scale, no shadow change. The button stays put.
- **Card hover** — border brightens from `#1f1f1f` to `#2a2a2a` over 120ms; no transform.
- **Link hover** — color shifts from `#e1f0bd` to `#ffffff` over 120ms; underline fades in over 200ms.
- **Popover entrance** — opacity 0 → 1 + translateY(-4px) over 240ms with ease-emphasized.

### Page Transitions
Tana avoids page transitions entirely on marketing surface. Navigation is a hard cut. Smooth scroll on anchor links uses ease-standard at 600ms.

### Reduced Motion Strategy
With `prefers-reduced-motion: reduce`, all transforms collapse to opacity-only. Translate, scale, and rotate are removed. Color and border transitions remain (they aren''t spatially disorienting). Total motion budget under reduced-motion: 200ms max per transition.

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)
- **Text on bg**: `#f0eded` on `#000` = **18.1:1** — AAA at all sizes.
- **Text-muted on bg**: `#a8a5a3` on `#000` = **7.2:1** — AAA body, AA caption.
- **Text-on-brand**: `#000` on `#e1f0bd` = **16.8:1** — AAA at all sizes.
- **Border on bg**: `#1f1f1f` on `#000` = **1.4:1** — non-text decorative; meets WCAG decorative threshold.

### Focus Indicators
2px pistachio ring (`#e1f0bd`) at 2px offset on all interactive elements. Outline is solid, not dashed; offset prevents the ring from blending into adjacent elements. Focus is *always* visible — `outline: none` is never used without replacement.

### ARIA Patterns
- Top nav uses `<nav aria-label="Primary">`.
- Modals use `role="dialog"` with `aria-modal="true"` and `aria-labelledby` pointing to the dialog title.
- Form inputs have visible labels; placeholder text is supplemental, not load-bearing.
- The pistachio CTA is a `<button>` or `<a>`, never a styled `<div>`.

### Keyboard Navigation
- Tab order follows DOM order top-to-bottom, left-to-right.
- Skip-link to `#main` is present and visible on focus.
- Modals trap focus and restore on close.
- Escape closes overlays and modals.

### Screen Reader Hints
- Decorative SVG (italic glyph accents) gets `aria-hidden="true"`.
- Icon-only buttons carry `aria-label`.
- Live regions used for form validation feedback (`aria-live="polite"`).

### Reduced Motion
`prefers-reduced-motion: reduce` is honored throughout — see §8.

## 10. Responsive Behavior

### Breakpoints
| Name | Min-width |
|------|-----------|
| mobile | 0–640 |
| tablet | 641–1024 |
| desktop | 1025–1280 |
| wide | 1281+ |

### Touch Targets
All interactive elements meet a minimum 44×44px touch target on mobile. The pistachio CTA grows to 48px height on touch devices.

### Collapsing Strategy
- **Hero**: 83px display drops to 56px at tablet, 40px at mobile.
- **Feature grid**: three-up at desktop → two-up at tablet → single column at mobile, with vertical rhythm preserved.
- **Nav**: full top bar at desktop → hamburger at mobile (revealing full-screen black overlay with h3-sized stacked items).
- **Padding**: section vertical padding reduces from 160px → 96px → 64px across breakpoints.

### Image Behavior
Product mockups use `object-fit: contain` inside fixed-height frames. On mobile, mockups become full-width with horizontal scroll only when they''d be unintelligibly small.

### Container Queries
Used sparingly on the feature grid where card density depends on parent width rather than viewport.

## 11. Content & Voice

### Tone
Editorial and confident. Tana writes like a publication, not a startup — full sentences, declarative pacing, no exclamation marks. The voice is closer to Anthropic''s research notes or The New Yorker''s tech essays than to typical SaaS marketing.

### Microcopy Patterns
- Buttons: imperative verb + object — "Get early access," "Join the waitlist," "Watch demo."
- Errors: "We couldn''t reach the server. Please try again." (full sentence, polite, no emoji).
- Success: "You''re on the list." (terse, confident).
- Empty states: "No notes yet — start by capturing one." (instructive, not apologetic).

### CTA Verb Conventions
- "Get early access" (not "Sign up free")
- "Join the waitlist" (not "Get notified")
- "Watch demo" (not "See it in action")
- "Read the blog" (not "Learn more")

The verbs assume the user has agency and intent. Tana does not say "Try" — it says "Get."

## 12. Dark Mode & Theming

Tana is **dark-only**. No light variant exists for the marketing surface. The product itself ships dark by default; a light app theme exists but is not reflected in marketing chrome. The cream-on-black announcement strip at the top is the only light moment, and it functions as an inversion accent rather than a theme toggle.

If a light variant were ever to ship, the implied token swap would be: `#000` → `#fafafa` for canvas, `#f0eded` → `#1a1a1a` for text, pistachio brand stays `#e1f0bd` (it works on cream too), tanaClassic and SF Pro unchanged. But Tana has explicitly rejected the dark/light toggle on marketing — the brand''s entire position depends on the literary-on-black aesthetic.

## 13. Lineage & Influences

Tana draws from two distant traditions: editorial print (The New Yorker, Tiempos serif tradition, Aesop apothecary brand discipline) and software design''s recent dark-mode wave (Linear, Vercel, Raycast). What''s unusual is the synthesis. Linear pioneered the near-black canvas for dev tools, but Linear stays inside an Inter / system-sans typographic register. Tana takes the dark canvas and inverts the type strategy — display goes serif, body goes system, color is reduced to a single literary accent.

The pistachio + black colorway is borrowed almost directly from book-jacket design — Faber & Faber poetry covers, Aesop apothecary packaging — rather than from software brands. No mainstream productivity tool uses pale-pistachio as its only accent; the closest analogs are luxury / niche brands outside software.

The decision to use SF Pro for body is a positional move: Tana wants to read as system infrastructure (like macOS itself), not as a third-party app. The custom `tanaClassic` serif then takes on the role of the proprietary mark — the one element no other product can copy.

**Named influences**:
- The New Yorker (https://www.newyorker.com) — editorial discipline, single serif voice, generous margins.
- Linear (https://linear.app) — pioneered the near-black dev-tool canvas; Tana pushes deeper.
- Aesop / Faber & Faber (https://www.aesop.com) — pale-pistachio + black book-jacket colorway.
- Apple system typography — SF Pro body for system-level positioning.
- Tiempos Headline (Klim Type Foundry) — high-contrast literary display lineage for tanaClassic.

## 14. Do''s and Don''ts

### Do
- Anchor the canvas at pure `#000` — Linear and Raycast use `#07–09`, Tana goes deeper for the literary feel.
- Set the hero in tanaClassic at weight 350 — the unusually-light axis at large size is the fingerprint.
- Reserve pistachio (`#e1f0bd`) for the single primary CTA — never use it on body chrome or as a hover state.
- Use SF Pro for body — it positions Tana as system infrastructure, not a third-party app.
- Tint italic words warm-cream `#d4caa8` — italic = chromatic shift, not just slant.
- Keep CTA radius at 12px (moderate, architectural) — never go full pill.
- Allow generous vertical rhythm — 96–160px between sections is the standard.
- Honor `prefers-reduced-motion: reduce` — fades collapse to opacity-only.

### Don''t
- Swap SF Pro for Inter — Apple''s system face is a positional signal that Tana is system-level.
- Introduce a second saturated accent — pistachio is the entire chromatic palette.
- Soften display copy to weight 400+ — the calligraphic 350 reads as bold-enough on black.
- Add drop shadows on the canvas — they read as smudges on pure `#000`.
- Use bright `#ffffff` for body — `#f0eded` is the warmer, less surgical default.
- Apply hover lift / translate on the pistachio CTA — color shift only, the button stays put.
- Use full pills on buttons — moderate 12px keeps the page architectural.
- Alternate light/dark sections — the canvas stays uniformly black throughout.
- Use exclamation marks in microcopy — the voice is editorial, not enthusiastic.
- Add a second display font — tanaClassic carries every serif moment alone.

## 15. Agent Prompt Guide

### Quick Color Reference
- Bg: `#000000`
- Text: `#f0eded`
- Text muted: `#a8a5a3`
- Brand (pistachio CTA): `#e1f0bd`
- Brand hover: `#cde0a3`
- Italic accent: `#d4caa8`
- Surface (card): `#141414`
- Border: `#1f1f1f`
- Text on brand: `#000000`
- Focus ring: `#e1f0bd`

### Example Component Prompts

> "Create a Tana-style hero with a pure `#000` canvas, an 83px tanaClassic serif headline at weight 350 with one italic word in `#d4caa8`, and a centered pistachio (`#e1f0bd`) pill CTA at 12px radius with black text reading ''Get early access''."

> "Design a Tana feature card: `#141414` background, 1px solid `#1f1f1f` border, 16px radius, 32px padding. Title in SF Pro 24px weight 500, body in SF Pro 17px on 1.55 line-height in `#a8a5a3`. On hover, the border brightens to `#2a2a2a` over 120ms — no shadow, no lift."

> "Build a Tana announcement strip: `#f0eded` bg banded across the top, `#0a0a0a` text in SF Pro 14px weight 500, 8px vertical padding, no radius. This is the page''s only inversion."

> "Create a Tana pricing card with a `#e1f0bd` border (pistachio), 24px radius, `#141414` bg, 40px padding. Display the price in SF Pro 48px weight 600 in `#ffffff` with tabular numerals."

> "Design a Tana navigation bar: transparent background over the `#000` canvas, items in `#a8a5a3` shifting to `#f0eded` on hover (color only, no underline), with a pistachio pill CTA anchored to the right."

### Iteration Guide

1. **Start with pure `#000`** — if the canvas is `#0a` or `#0f`, you''re Linear or Raycast, not Tana. Anchor at zero.
2. **Set the hero serif at weight 350** — this is the single most copy-able decision. Weight 400 will look "wrong" but in the bold direction; only 350 reads calligraphic.
3. **Reduce the palette to grayscale + pistachio + cream-italic** — three colors total. If you''ve added a fourth, remove one.
4. **Move body to SF Pro** — Inter, Geist, and Helvetica all break the positional signal. The system font matters here.
5. **Strip every shadow from the canvas** — depth comes from `#0a` → `#14` tonal lift. Shadows reappear only on detached overlays.
6. **Set CTA radius to 12px** — fully-round (9999) tips into consumer-tech; 6–8px tips into Stripe/Vercel. The 12px is the architectural sweet spot.
7. **Pace generously** — every section should breathe. If your padding is under 64px, increase it.
8. **Audit microcopy for verbs** — "Get early access," not "Sign up free." Tana uses imperatives that assume agency.
