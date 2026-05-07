---
name: Claude.ai
tagline: 'Cream paper canvas, Anthropic Sans for body and Anthropic Serif for the headline — an AI assistant set in literary type.'
updated_at: 2026-05-06T01:20:47+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://claude.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [ai, saas]
tags: [light, editorial, sans, serif, spacious, warm, literary, paper]
preview_swatch: ['#f8f8f6', '#cd6f47', '#121212']
related: [anthropic, notion, perplexity]
description: 'Claude.ai (and the unified claude.com marketing surface) is Anthropic''s editorial calm rendered as a consumer product page. The canvas is the same `#f8f8f6` cream that anchors the parent brand, body and nav set in **Anthropic Sans** at a relaxed 17px / 400 weight, but the hero headline switches to **Anthropic Serif** at 56px / 330 weight — an unusually light serif that reads more like a New Yorker title than a software brand. Claude''s warm clay-orange `#cd6f47` carries the brand mark; primary CTAs are a near-black `#121212` rectangle with mild rounding. The whole register is ''magazine essay introducing a new technology,'' not ''tech startup launching a chatbot.'''

colors:
  bg: '#f8f8f6'                    # cream — observed body background
  bg-soft: '#faf9f5'               # softer module surface
  bg-deep: '#f0efea'                # deeper cream banding
  surface: '#ffffff'                # cards and overlays lift to white
  surface-soft: '#fbfaf6'           # soft white for nested cards
  surface-warm: '#f3f0ea'           # warm pull-quote band
  text: '#121212'                  # near-black body text (observed rgb 18,18,18)
  text-strong: '#000000'            # rare, used on display in some moments
  text-muted: '#666660'             # secondary text on cream
  text-subtle: '#8e8e85'            # tertiary, "Updated 5 days ago"
  text-faint: '#b4b4a8'             # quaternary, footer micro-text
  text-on-brand: '#ffffff'          # white on clay-orange (rare)
  text-on-cta: '#f8f8f6'            # cream-tinted on near-black CTA
  text-on-dark: '#f3f0ea'           # cream text inside dark research bands
  brand: '#cd6f47'                 # Claude clay-orange brand mark
  brand-soft: '#f3e7df'             # tinted info / hover surface
  brand-paler: '#fdf0e8'             # softest tint for brand-tagged callouts
  brand-strong: '#a85530'            # pressed clay
  brand-deep: '#7d3c1f'              # deepest clay for accent text
  on-brand: '#ffffff'
  cta-bg: '#121212'                # primary marketing button
  cta-text: '#f8f8f6'               # cream-tinted on-cta text
  cta-hover: '#2a2a2a'               # subtle lift on hover
  cta-active: '#3d3d3d'              # pressed state
  link: '#121212'                   # links are inline near-black with underline
  link-hover: '#cd6f47'              # link hover flips to clay-orange
  link-visited: '#7d3c1f'            # deeper clay for visited
  border: 'rgba(18,18,18,0.12)'     # default hairline
  border-soft: 'rgba(18,18,18,0.06)' # soft divider
  border-strong: 'rgba(18,18,18,0.18)' # focus state hairline, outlined buttons
  scrim: 'rgba(18,18,18,0.45)'       # warm cocoa modal backdrop
  shadow-warm: 'rgba(18,18,18,0.04)'
  shadow-card: 'rgba(18,18,18,0.06)'
  shadow-elev: 'rgba(18,18,18,0.10)'
  shadow-modal: 'rgba(18,18,18,0.18)'
  success: '#5a8c5a'                # warm sage green for "Saved", "Sent"
  success-soft: '#e6efe2'           # success badge background
  warning: '#b58a3c'                # warm gold for caution
  warning-soft: '#fbf3df'
  danger: '#b54a3c'                 # warm red sits in the same family as the clay
  danger-soft: '#fbe8e3'
  info: '#5a708c'                   # warm slate for info, used sparingly
  highlight: '#fbe8d6'              # warm cream highlight wash for inline emphasis

typography:
  display:
    family: '"Anthropic Serif", "Tiempos Headline", Georgia, "Times New Roman", "Hiragino Mincho ProN", "Yu Mincho", "Songti SC", serif'
    weights: [330, 400, 500]
    opentype-features: ['liga', 'kern', 'oldstyle']
  body:
    family: '"Anthropic Sans", "Söhne", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['liga', 'kern', 'ss01']
  serif:
    family: '"Anthropic Serif", "Tiempos Text", Georgia, serif'
    weights: [400, 500]
    opentype-features: ['liga', 'kern']
  mono:
    family: '"Anthropic Mono", "Söhne Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-mega:    { size: 80, weight: 330, lineHeight: 1.0,   tracking: '-0.5px',   family: serif, opentype: ['liga', 'oldstyle'] }
    display-hero:    { size: 56, weight: 330, lineHeight: 1.05,  tracking: 'normal',   family: serif, opentype: ['liga'] }
    h1:              { size: 48, weight: 400, lineHeight: 1.08,  tracking: '-0.2px',   family: serif }
    h2:              { size: 40, weight: 400, lineHeight: 1.1,   tracking: 'normal',   family: serif }
    h3:              { size: 28, weight: 400, lineHeight: 1.2,   tracking: 'normal',   family: serif }
    h4-sans:         { size: 22, weight: 500, lineHeight: 1.3,   tracking: '-0.1px',   family: body }
    h5-sans:         { size: 17, weight: 500, lineHeight: 1.4,   tracking: '0',         family: body }
    sub-section:     { size: 17, weight: 500, lineHeight: 1.4,   tracking: '0',         family: body }
    body-large:      { size: 19, weight: 400, lineHeight: 1.55,  tracking: '0',         family: body }
    body:            { size: 17, weight: 400, lineHeight: 1.5,   tracking: '0',         family: body }
    body-default:    { size: 16, weight: 400, lineHeight: 1.5,   tracking: '0',         family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.43,  tracking: '0',         family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.4,   tracking: '0',         family: body }
    micro:           { size: 11, weight: 500, lineHeight: 1.3,   tracking: '0.04em',    family: body, transform: uppercase }
    pull-quote:      { size: 28, weight: 400, lineHeight: 1.35,  tracking: '-0.1px',   family: serif, style: italic }
    button-cta:      { size: 16, weight: 500, lineHeight: 1.0,   tracking: '0',         family: body }
    nav-link:        { size: 15, weight: 500, lineHeight: 1.0,   tracking: '0',         family: body }
    label:           { size: 12, weight: 500, lineHeight: 1.3,   tracking: '0.04em',    family: body, transform: uppercase }
    code:            { size: 14, weight: 400, lineHeight: 1.5,   tracking: '0',         family: mono }
    code-inline:     { size: 0.9em, weight: 400, lineHeight: 'inherit', tracking: '0', family: mono }

radius:
  micro: 4
  sm: 6
  md: 8                            # buttons
  lg: 12                           # cards
  xl: 16                           # feature cards
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 144]

layout:
  page-width: 1200
  prose-width: 680
  header-height: 64
  rhythm: 8

components:
  button-primary:
    bg: '#121212'
    color: '#f8f8f6'
    radius: 8
    padding: '12px 20px'
    height: 44
    font: 'Anthropic Sans 500 / 16px'
    use: 'Try Claude / Start building / Get the app — the single warm-black rectangle per hero.'
  button-primary-hover:
    bg: '#2a2a2a'
    color: '#f8f8f6'
    use: 'Hover state — subtle warm-up.'
  button-secondary:
    bg: 'transparent'
    color: '#121212'
    border: '1px solid rgba(18,18,18,0.18)'
    radius: 8
    padding: '12px 20px'
    height: 44
    use: 'Read the docs / Talk to sales / Watch demo — outlined twin to primary.'
  button-tertiary-text:
    bg: 'transparent'
    color: '#121212'
    use: 'Inline text links — underlined on hover, flips colour to clay-orange.'
  button-clay:
    bg: '#cd6f47'
    color: '#ffffff'
    radius: 8
    padding: '12px 20px'
    use: 'Rare clay-orange CTA — used on Claude-specific consumer surfaces; primary CTA stays near-black.'
  card-feature:
    bg: '#ffffff'
    color: '#121212'
    border: '1px solid rgba(18,18,18,0.06)'
    radius: 12
    padding: '24px'
    use: 'Use-case tile, capability card — white panel lifting off cream.'
  card-warm:
    bg: '#f3f0ea'
    color: '#121212'
    border: 'none'
    radius: 12
    padding: '28px'
    use: 'Warmer tinted card for accent moments — typically pull-quote bands.'
  card-plan:
    bg: '#ffffff'
    color: '#121212'
    border: '1px solid rgba(18,18,18,0.12)'
    radius: 16
    padding: '32px'
    use: 'Pricing tier card — generous padding, hairline border, no shadow.'
  pull-quote:
    bg: 'transparent'
    color: '#121212'
    font: 'Anthropic Serif 28/400 italic'
    accent: 'small clay-orange star glyph above'
    padding: '0'
    use: 'Long-form testimonial — serif italic with a clay-orange star glyph as decoration.'
  text-input:
    bg: '#ffffff'
    color: '#121212'
    radius: 6
    height: 44
    padding: '12px 14px'
    border: '1px solid rgba(18,18,18,0.18)'
    focus: '2px solid #121212'
    use: 'Form input — slim 6px radius.'
  badge-pill:
    bg: '#f3e7df'
    color: '#7d3c1f'
    radius: 9999
    padding: '4px 10px'
    font: 'Anthropic Sans 500 / 12px'
    use: 'Status pill — "New", "Available", "Beta". Soft clay surface with deep clay text.'
  star-mark:
    color: '#cd6f47'
    use: 'The Claude logomark — a small clay-orange star, sits in nav top-left and above pull-quotes.'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-warm: 'cubic-bezier(0.32, 0.72, 0, 1)'
  duration-instant: 100
  duration-fast: 150
  duration-standard: 240
  duration-slow: 360
  cta-press: 'CTA bg deepens #121212 → #2a2a2a over 150ms on :hover'
  card-hover: 'border darkens rgba(18,18,18,0.06) → rgba(18,18,18,0.18) over 240ms; no translate'
  link-hover: 'colour transitions #121212 → #cd6f47 over 150ms'
  hero-fade: 'on-load opacity 0 → 1 over 360ms with translateY(8 → 0) emphasized; honours reduced motion'
  star-twinkle: 'subtle rotation -3deg → 0 → +3deg on hover over 600ms warm easing — Claude''s only decorative motion'
  reduced-motion: 'respects prefers-reduced-motion: reduce — translate, scale, and rotation suppressed; opacity transitions remain.'

breakpoints:
  mobile: 640
  tablet: 960
  desktop: 1200
  wide: 1440

shadows:
  ambient: 'rgba(18,18,18,0.04) 0 1px 2px'
  card-hover: 'rgba(18,18,18,0.06) 0 4px 12px'
  modal: 'rgba(18,18,18,0.18) 0 24px 48px'
  ring: '0 0 0 2px rgba(18,18,18,0.5)'

accessibility:
  contrast-text-on-bg: 16.5                  # #121212 on #f8f8f6 — AAA
  contrast-text-on-cta: 15.4                  # #f8f8f6 on #121212 — AAA
  contrast-link-on-bg: 16.5                   # #121212 on #f8f8f6 — AAA (links underlined)
  contrast-muted-on-bg: 6.7                   # #666660 on #f8f8f6 — AAA
  contrast-clay-on-bg: 4.2                    # #cd6f47 on #f8f8f6 — AA-large only; clay used for accent + brand mark
  contrast-deep-clay-on-soft: 6.5             # #7d3c1f on #f3e7df — AAA
  focus-ring: '2px solid #121212 with 2px outline-offset'
  reduced-motion-honored: true
  touch-target-min: 44
  keyboard-nav: 'Tab: skip → masthead → main content → use-case grid → pricing → footer; Esc closes overlays.'

dark-mode: optional

colors-dark:
  bg: '#1a1a18'                    # warm cocoa night canvas
  bg-soft: '#221f1c'
  bg-deep: '#16140f'
  surface: '#22201c'
  surface-warm: '#2a2620'
  text: '#f3f0ea'
  text-strong: '#ffffff'
  text-muted: '#a8a59c'
  text-subtle: '#7c7a72'
  brand: '#e08d63'                 # lighter clay for night legibility
  brand-soft: '#3d2a1f'
  cta-bg: '#f3f0ea'                # CTA inverts to cream-on-cocoa
  cta-text: '#1a1a1a'
  border: 'rgba(243,240,234,0.1)'
  border-soft: 'rgba(243,240,234,0.06)'
  on-brand: '#1a1a18'
  link: '#f3f0ea'

lineage:
  summary: |
    Claude.ai inherits Anthropic's editorial register wholesale and
    polishes it for a consumer audience. The cream canvas
    (`#f8f8f6`) is the parent brand's signature backdrop — a warm
    paper white that explicitly rejects the cool whites of OpenAI
    and the dark slabs of Linear. The headline face is **Anthropic
    Serif**, set at 56px and an extraordinarily light **330 weight**
    (essentially a hairline cut), giving "Think fast, build faster"
    the airy gravity of a magazine title rather than the punch of a
    marketing headline. Body and nav use **Anthropic Sans** at 17px
    / 400 — slightly larger than the tech-default 14–16px, again a
    print-grade choice. The warm clay-orange `#cd6f47` brand mark
    quotes the same earthy palette that animates Anthropic's longer
    research essays, but Claude.ai dials it back to a single accent;
    primary CTAs default to a near-black `#121212` rectangle. The
    overall effect is "New Yorker cover story introducing AI" —
    deliberately countering the loud-launch register of competing
    consumer assistants. The signature decorative element is the
    **clay-orange star glyph** that sits in the masthead and above
    pull-quotes — Claude's only saturated mark.
  influences:
    - name: Anthropic
      role: Direct parent — Anthropic Sans, Anthropic Serif, the cream canvas, and the clay-orange accent are inherited unchanged.
      url: https://www.anthropic.com
    - name: The New Yorker
      role: Light-weight serif headline + cream paper as a register of "considered, edited, important."
      url: https://www.newyorker.com
    - name: Notion
      role: Cousin in the off-white + custom-sans editorial lineage.
      url: https://www.notion.com
    - name: Stripe Press
      role: Long-form essay register, generous breath, type-as-image hero treatments.
      url: https://press.stripe.com
    - name: Klim Type Foundry — Tiempos
      role: Tiempos Headline is the closest commercial precedent for Anthropic Serif.
      url: https://klim.co.nz
---

## 1. Visual Theme & Atmosphere

Claude.ai's marketing surface (now consolidated under claude.com) opens with a cream `#f8f8f6` canvas and the headline "Think fast, build faster" set in **Anthropic Serif** at 56px and a remarkable **330 weight**. That hairline serif weight is the brand's most distinctive typographic move — almost no other consumer software brand sets a hero in a sub-400-weight serif, and it instantly positions Claude as "for thoughtful work" rather than "for instant answers." Walk in from an OpenAI or Mistral page and the shift is immediate — warmer, slower, more considered.

Body, nav, and most secondary headings revert to **Anthropic Sans** at 17px / 400, also a print-grade choice (most tech sites set body at 14–16px). The clay-orange `#cd6f47` shows up only for the brand mark, the small clay star glyph, link hover, and a small set of accent moments — the rest of the page lives in cream, near-black, and a single white surface tier. The warm cocoa shadow tone (`rgba(18,18,18,...)`) matches the paper register; nothing on the page reads as glass or screen.

The chromatic identity is essentially three-tone: **cream canvas** (`#f8f8f6`), **near-black ink** (`#121212`), **clay-orange accent** (`#cd6f47`). The CTA is near-black, not clay — Claude resists making the primary action chromatically branded, preferring the institutional restraint of a warm rectangle. The clay appears only on the brand mark, the star glyph, link hover, badge text, and the soft `#f3e7df` info-surface tint. White (`#ffffff`) is reserved for cards lifting off the cream, never for the page floor.

Shape language is gently rounded — 8px buttons, 12px cards, 16px feature cards. There are no fully-rounded CTAs except status pills. The radii ladder is **6 / 8 / 12 / 16** with no extreme corners on either end. Section padding runs 96–144px between major bands — generous breath, magazine cadence.

The defining experience is **literary calm**. Claude's marketing surface looks closer to a New Yorker feature, an Anthropic research essay, or a Stripe Press chapter than to a consumer-AI launch page. The brand position is "AI for thoughtful work" — and the typographic register, the cream canvas, and the hairline serif all compound to communicate that posture before any copy is read.

**Key Characteristics:**
- Cream canvas `#f8f8f6` — Anthropic's signature paper white, warmer than OpenAI cool, cooler than Mistral butter
- Anthropic Serif at 56px / 330 weight (hairline cut) on display — almost no other brand uses sub-400 serif
- Anthropic Sans at 17/400 body — print-grade size, a step up from 14–16 SaaS default
- Near-black `#121212` rectangle CTAs at 8px radius — restraint over chromatic branding
- Clay-orange `#cd6f47` reserved for brand mark, star glyph, link hover, accent text only
- White `#ffffff` cards lifting off the cream, never as page floor
- Warm cocoa shadows `rgba(18,18,18,...)` — paper-on-paper, never glass
- 96–144px section padding — magazine breath
- Clay-orange star glyph as the only decorative mark

## 2. Color Palette & Roles

### Primary
- **Cream Canvas** (`#f8f8f6`): the Anthropic-inherited backdrop — every page sits on this warm paper white
- **Bg Soft** (`#faf9f5`): softer module surface for occasional lifting
- **Bg Deep** (`#f0efea`): deeper cream for alternate-band separation
- **Surface White** (`#ffffff`): cards and overlays lift to true white — never the page floor
- **Surface Warm** (`#f3f0ea`): warmer tinted card for accent / pull-quote bands
- **Body Ink** (`#121212`): near-black body text (rgb 18,18,18) — never pure black
- **Display Ink** (`#121212`): hero serif copy at the same near-black

### Brand
- **Clay Orange** (`#cd6f47`): brand mark colour, link hover, star glyph, accent text — the single chromatic accent
- **Clay Strong** (`#a85530`): pressed clay for `:active`
- **Clay Deep** (`#7d3c1f`): deepest clay for accent text on soft-clay surfaces
- **Clay Soft** (`#f3e7df`): tinted info / hover surface
- **Clay Paler** (`#fdf0e8`): softest tint for brand-tagged callouts

### Action
- **CTA Black** (`#121212`): primary marketing button — same near-black as body text
- **CTA Hover** (`#2a2a2a`): subtle warm-up on hover
- **CTA Active** (`#3d3d3d`): pressed state
- **CTA Text** (`#f8f8f6`): cream-tinted label on near-black CTA — note: not pure white
- **On-Clay White** (`#ffffff`): white text on rare clay CTA variants

### Interactive
- **Link Default** (`#121212`): inline near-black links with underline — distinguished by underline only
- **Link Hover** (`#cd6f47`): hover flips colour to clay-orange — Claude's signature link interaction
- **Visited** (`#7d3c1f`): deeper clay for visited
- **Focus Ring**: `2px solid #121212` with 2px outline-offset
- **Selected** (`#121212`): selected radio / checkbox / tab fill

### Neutral Scale
- **Body Ink** (`#121212`): primary text
- **Muted** (`#666660`): captions, "Updated 5 days ago", metadata
- **Subtle** (`#8e8e85`): tertiary metadata
- **Faint** (`#b4b4a8`): footer micro-text
- **On-Dark Default** (`#f3f0ea`): cream text inside rare dark research bands
- **Border Default** (`rgba(18,18,18,0.12)`): primary 12% black hairline
- **Border Soft** (`rgba(18,18,18,0.06)`): subtle 6% divider
- **Border Strong** (`rgba(18,18,18,0.18)`): focus state hairline, outlined buttons

### Surface & Borders
- **Cream Canvas** (`#f8f8f6`): default
- **Bg Soft** (`#faf9f5`): occasional lift
- **Bg Deep** (`#f0efea`): alternate band
- **Surface White** (`#ffffff`): cards, modals
- **Surface Warm** (`#f3f0ea`): accent cards, pull-quote bands
- **Hairline** (`rgba(18,18,18,0.12)`): used everywhere a divider is needed; never grey, always semi-transparent black

### Shadow Colors
Claude's shadows are warm-tinted using the body-ink black at low alpha (`rgba(18,18,18,...)`), so the elevation reads as paper-on-paper rather than glass. Most cards have no shadow at all — they lift off the cream by colour-value contrast alone. Where shadows do appear (overlays, modals), they're soft and warm.

- `rgba(18,18,18,0.04) 0 1px 2px` — ambient
- `rgba(18,18,18,0.06) 0 4px 12px` — card hover
- `rgba(18,18,18,0.10) 0 8px 24px` — elev
- `rgba(18,18,18,0.18) 0 24px 48px` — modal

### Semantic
- **Success Sage** (`#5a8c5a`): warm sage green for "Saved", "Sent", "Synced" — earthier than typical bright success
- **Success Soft** (`#e6efe2`): success badge background
- **Warning Gold** (`#b58a3c`): warm gold-brown for caution copy
- **Warning Soft** (`#fbf3df`): warning badge background
- **Danger Red** (`#b54a3c`): warm red — sits in the same family as the clay
- **Danger Soft** (`#fbe8e3`): danger badge background
- **Info Slate** (`#5a708c`): warm slate-blue for info; used sparingly because cool blue feels off-brand
- **Highlight** (`#fbe8d6`): warm cream highlight wash for inline emphasis (rare on marketing, occasional on long-form posts)

## 3. Typography Rules

### Font Family

**Display**: `Anthropic Serif` — the custom typeface Anthropic commissioned. Fallback chain: `"Tiempos Headline", Georgia, "Times New Roman", "Hiragino Mincho ProN", "Yu Mincho", "Songti SC", serif`. Anthropic Serif shares DNA with Klim's Tiempos and Söhne Buch — it's a literary, slightly relaxed serif designed for long-form reading and large-display moments. The hairline 330 weight is the brand's most distinctive typographic move; almost no other consumer brand sets display copy below 400 weight.

**Body**: `Anthropic Sans` — the sans companion to Anthropic Serif. Fallback through `"Söhne", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial`. Anthropic Sans is geometric humanist, slightly relaxed terminals, optimised for body reading at 14–17px. The same family is used in Anthropic's research papers and the Claude product UI.

**Serif (alternate)**: `Anthropic Serif` at 28/400 italic for pull-quotes and editorial-callout moments. Tiempos Text is the documented commercial precedent.

**Mono**: `Anthropic Mono` — the monospaced companion. Fallback through `"Söhne Mono", ui-monospace, "SF Mono", Menlo, Consolas`. Used in API documentation and code samples.

**OpenType features**: `liga` and `kern` everywhere; `oldstyle` numerals on the display-mega variant for editorial elegance; `ss01` is enabled on Anthropic Sans body to surface the more humanist alphabet alternates.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-mega | Anthropic Serif | 80 | 330 | 1.0 | -0.5px | liga, oldstyle | Take-over hero on flagship pages — extremely rare |
| display-hero | Anthropic Serif | 56 | 330 | 1.05 | normal | liga | Standard hero — observed "Think fast, build faster" |
| h1 | Anthropic Serif | 48 | 400 | 1.08 | -0.2px | — | Major page titles |
| h2 | Anthropic Serif | 40 | 400 | 1.1 | normal | — | Section openers |
| h3 | Anthropic Serif | 28 | 400 | 1.2 | normal | — | Sub-section heads |
| h4-sans | Anthropic Sans | 22 | 500 | 1.3 | -0.1px | — | Feature card titles — Sans, not Serif |
| h5-sans | Anthropic Sans | 17 | 500 | 1.4 | 0 | — | Sub-card heads |
| sub-section | Anthropic Sans | 17 | 500 | 1.4 | 0 | — | Nav and inline sub-section titles |
| body-large | Anthropic Sans | 19 | 400 | 1.55 | 0 | ss01 | Hero sub-copy |
| body | Anthropic Sans | 17 | 400 | 1.5 | 0 | ss01 | Default paragraph — print-grade size |
| body-default | Anthropic Sans | 16 | 400 | 1.5 | 0 | — | Card body, secondary copy |
| body-small | Anthropic Sans | 14 | 400 | 1.43 | 0 | — | Footer, metadata |
| caption | Anthropic Sans | 13 | 400 | 1.4 | 0 | — | Footer micro |
| micro | Anthropic Sans | 11 | 500 | 1.3 | 0.04em | uppercase | Eyebrow labels |
| pull-quote | Anthropic Serif Italic | 28 | 400 | 1.35 | -0.1px | liga | Long-form testimonial — italic serif |
| button-cta | Anthropic Sans | 16 | 500 | 1.0 | 0 | — | Primary CTA label — medium weight |
| nav-link | Anthropic Sans | 15 | 500 | 1.0 | 0 | — | Top nav |
| label | Anthropic Sans | 12 | 500 | 1.3 | 0.04em | uppercase | "BETA" / "NEW" badges |
| code | Anthropic Mono | 14 | 400 | 1.5 | 0 | liga | API doc samples |
| code-inline | Anthropic Mono | 0.9em | 400 | inherit | 0 | liga | Inline `code` in body paragraphs |

### Principles

- **Anthropic Serif at 330 weight on hero** is the brand's most distinctive typographic move. Substituting any heavier weight collapses the literary register.
- **Anthropic Sans + Anthropic Serif duet.** Sans for body, Serif for display. Mixing in Inter, Helvetica, or any system sans breaks the entire brand.
- **Body at 17/1.5** signals "thoughtful, slow, intended for reading." 16px is the SaaS default; 17 is print-grade.
- **Negative tracking only on h1 (-0.2px) and display-mega (-0.5px).** Display-hero at 56/330 ships with **normal** tracking — the airy spacing is part of the hairline serif's character.
- **Sans for headings inside cards.** When a feature card needs a title, Claude shifts to Anthropic Sans 22/500 rather than serif — the serif is reserved for editorial moments, not utility headings.
- **Pull-quotes go italic Serif.** 28/400 italic with the small clay star glyph as decoration above.
- **Mono is Anthropic Mono only on docs and code samples.** Marketing surface stays serif + sans.
- **`oldstyle` numerals on display-mega.** Surfaces the elegant lining-figure alternates in dates and large numerals.

## 4. Component Stylings

### Buttons

**`button-primary`** — near-black (`#121212`) fill, cream text (`#f8f8f6`, not pure white) in Anthropic Sans 16/500, 8px radius, 12×20px padding, 44px height. The defining CTA: "Try Claude", "Start building", "Get the app". Hover transitions to `#2a2a2a` over 150ms — subtle warm-up. Note: the CTA text is **cream-tinted**, not pure white — a deliberate choice to keep continuity with the cream canvas.

**`button-secondary`** — transparent fill, 1px `rgba(18,18,18,0.18)` hairline, near-black text. Same 8px radius and 44px height. Used for "Read the docs", "Talk to sales", "Watch demo". Outlined twin to the primary.

**`button-tertiary-text`** — plain near-black text, no surface, underlined on hover with the colour flipping to clay-orange. The link-style CTA.

**`button-clay`** — rare clay-orange variant. `#cd6f47` fill, white text. Used on Claude-specific consumer surfaces (the iOS app store callout, occasional brand-emphasis CTAs); the marketing primary CTA stays near-black to maintain the institutional register.

### Cards

**`card-feature`** — pure white (`#ffffff`) surface lifting off the cream, 12px radius, 1px `rgba(18,18,18,0.06)` soft hairline, 24px padding, no shadow. Holds an icon, h4-sans title, body description. Hover: border darkens to `rgba(18,18,18,0.18)` over 240ms — no translate, no shadow.

**`card-warm`** — warmer tinted (`#f3f0ea`) surface, 12px radius, no border, 28px padding. Used for accent / pull-quote bands where Claude wants the card to recede slightly into the cream while still defining a region.

**`card-plan`** — pricing tier card. White surface, 16px radius (more relaxed than feature cards), 1px `rgba(18,18,18,0.12)` hairline, 32px padding. Inside, plan name in 22/500 sans, price in 48/400 serif, billing cadence in muted body, feature list with check icons, primary CTA at the bottom.

**`pull-quote`** — transparent surface, Anthropic Serif 28/400 italic in near-black, with a small clay-orange star glyph (1.5em size) sitting above the quote at the same left edge. Below the quote, an Anthropic Sans 14/500 attribution line in muted ink — "— Maria Konnikova". The brand's signature editorial moment.

### Inputs / Forms

**`text-input`** — white surface, 1px `rgba(18,18,18,0.18)` hairline, 6px radius (slimmer than the 8px buttons to keep utility), 44px height, 12×14px padding, Anthropic Sans 17/400. On focus the border thickens to 2px near-black.

**`textarea`** — same hairline + radius, 100px min-height, resize: vertical.

**`toggle-switch`** — soft `#f3e7df` track, 12px height, 24px width, white thumb. When active, track flips to `#121212`.

### Badges, Tags, Pills

**`badge-pill`** — soft clay (`#f3e7df`) surface, deep clay (`#7d3c1f`) text in Anthropic Sans 12/500, 9999px radius, 4×10px padding. Status pills like "New", "Available", "Beta". The deep-clay-on-soft-clay duet is the only place Claude uses two clay tones in tandem.

**`badge-eyebrow`** — no fill, 11/500 uppercase Anthropic Sans in muted, 0.04em tracking. Used as eyebrow labels above section titles.

**`star-mark`** — small clay-orange star glyph sized 1em–1.5em, used in the masthead top-left and above pull-quotes. Claude's only saturated mark on the page.

### Navigation

**`nav-global`** — sticky transparent bar across the top, 64px height, blends into cream canvas. Wordmark + star left, primary nav centre (Product, Research, Pricing, API), secondary actions right (Sign in, Try Claude). Nav link colour is near-black at 15/500. On hover, links underline + flip to clay-orange.

**`nav-mobile`** — full-screen overlay with stacked nav items in Anthropic Sans 22/500. Closing X anchored top-right.

**`footer`** — multi-column link list with 14/400 nav links, brand mark + tagline on the right. Cream fill, 1px top hairline. Bottom band has the Claude star + copyright in 13/400 muted.

### Modals & Toasts

**`modal`** — centred dialog over a 45% near-black scrim. White surface, 16px radius, no border, modal shadow. Close X anchored top-right.

**`toast`** — bottom-centre notifications. White fill, 12px radius, 1px hairline, body text in Anthropic Sans 14/400.

## 5. Layout Principles

### Spacing System

- Base unit: **4px**; modular grid runs on **8px** rhythm
- Scale: `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 120 · 144`
- Section padding (vertical): **96–144px** between major bands — magazine cadence
- Card internal padding: **24px** for feature cards, **28px** for warm cards, **32px** for plan cards
- Gutters: **24px** between columns at desktop, **16px** at tablet, **12px** at mobile

### Grid & Container

- Max content width: **1200px** centred — slightly tighter than OpenAI's 1280
- Prose width inside long-form: **680px** — canonical reading column
- Hero: full-width band with content capped at 1200, often offset slightly left to leave breathing room on the right
- Feature grid: typically 3-up at desktop, 2-up at tablet, 1-up at mobile
- Plan cards: 3-up cards spanning the full content width

### Whitespace Philosophy

Claude gives each section the most breath of any AI consumer marketing site. The 96–144px vertical rhythm between sections, combined with the 17px body type and 1.5 line-height, produces a marketing surface that paces like a long-form essay. Inside each section, density stays moderate — feature grids run 3-up with generous card padding, and the hero column rarely fills more than 60% of the viewport width. The visual rhythm is **dense literary type → generous breath → modest density grid → repeat**.

### Section Cadence

Claude alternates between **cream bands** (`#f8f8f6` default, ~80% of the page), **softer bands** (`#faf9f5`), and **warm tinted bands** (`#f3f0ea` for pull-quote and accent moments). White is reserved for cards lifting off the cream — never as a section ground. The brand resists chromatic alternation; the cream is the constant register.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 4px | Rare |
| Small | 6px | Form inputs (slimmer than buttons to keep utility) |
| Medium | 8px | Buttons — gentler than Linear's 6px, sharper than Stripe's 12px |
| Large | 12px | Cards |
| Extra | 16px | Plan cards, modals |
| Pill | 9999px | Status pills only |

The radii ladder is **6 / 8 / 12 / 16** with no extreme corners on either end. Pills appear only on status chips and the "New" callout that sometimes sits in the nav. There are no fully-rounded CTAs.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | no shadow | Body, masthead, footer, all editorial bands (~85% of marketing surface) |
| 1 — Hairline Soft | 1px `rgba(18,18,18,0.06)` border | Feature cards default |
| 2 — Hairline Border | 1px `rgba(18,18,18,0.12)` border | Plan cards, inputs |
| 3 — Hairline Strong | 1px `rgba(18,18,18,0.18)` border | Outlined buttons, focus state, card hover |
| 4 — Card Hover | `rgba(18,18,18,0.06) 0 4px 12px` | Card hover (rare) |
| 5 — Modal | `rgba(18,18,18,0.18) 0 24px 48px` | Centred dialog |

### Shadow Philosophy

Claude achieves depth through **value contrast** (white cards on cream, warm-tinted cards on cream) and **hairline borders**, not elevation. Most cards have no shadow at all — they define their region by a 6–12% near-black hairline. Where shadows do appear, they use the warm cocoa tone (`rgba(18,18,18,...)`) at low alpha so the elevation reads as **paper-on-paper**, never as glass-on-glass. The brand position: depth here is value contrast and warm hairlines.

## 8. Interaction & Motion

### Easing
- **Standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus, fades
- **Emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — modal entry
- **Warm**: `cubic-bezier(0.32, 0.72, 0, 1)` — star-twinkle, hero on-load — slightly slower start for organic feel

### Durations
| Bucket | Value | Use |
|--------|-------|-----|
| Instant | 100ms | Focus ring fade-in |
| Fast | 150ms | CTA bg warm-up, link colour transition |
| Standard | 240ms | Card border darken, dropdown enter |
| Slow | 360ms | Hero on-load fade-up, modal enter |

### Per-Component Recipes

- **CTA hover**: bg transitions `#121212` → `#2a2a2a` over 150ms standard easing — subtle warm-up.
- **CTA press**: deepens to `#3d3d3d` momentarily on `:active`.
- **Card hover**: border darkens `rgba(18,18,18,0.06)` → `rgba(18,18,18,0.18)` over 240ms. No translate, no shadow change.
- **Link hover**: text colour transitions `#121212` → `#cd6f47` over 150ms — Claude's signature link interaction. Underline thickness stays the same.
- **Hero on-load**: opacity 0 → 1 over 360ms with `translateY(8px → 0)` emphasized easing — fires once on initial paint.
- **Star-twinkle**: the clay-orange star glyph rotates -3° → 0 → +3° on hover over 600ms warm easing. Claude's only decorative motion, used as an Easter-egg moment.
- **Modal enter**: scrim fades in over 200ms, dialog scales `0.96 → 1` and translates from `translateY(8px) opacity(0)` to `0/1` over 240ms emphasized.
- **Page transitions**: hard navigation, no transition. Claude prioritises perceived speed.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. Translate, scale, and rotation transitions degrade to opacity-only. Star-twinkle suppresses entirely. Hero fade-up loses translate. CTA colour transitions remain because they communicate state.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | Level |
|------|-------|-------|
| #121212 on #f8f8f6 cream | 16.5 | AAA |
| #f8f8f6 on #121212 CTA | 15.4 | AAA |
| #f3f0ea on #1a1a18 dark | 13.5 | AAA |
| #121212 link on #f8f8f6 | 16.5 | AAA |
| #cd6f47 clay link hover on #f8f8f6 | 4.2 | AA-large only |
| #cd6f47 brand on #f8f8f6 | 4.2 | AA-large only — used for brand mark + link hover, not body |
| #7d3c1f deep clay on #f3e7df soft | 6.5 | AAA |
| #666660 muted on #f8f8f6 | 6.7 | AAA |

The clay-orange brand colour sits at 4.2 contrast on cream — passes AA-large only. Claude compensates by reserving the clay for the brand mark, link hover state (where the underline carries the affordance), accent text on soft surfaces (deep clay `#7d3c1f` at AAA), and badge text. The clay never appears as body type. All primary content (body, headings, CTA, links default) sits at AAA.

### Focus Indicators

Focus ring is **2px solid `#121212`** (near-black) with 2px outline-offset, applied via `:focus-visible`. The ring sits on the cream canvas with strong AAA contrast. On dark research bands, the ring inverts to cream `#f3f0ea`.

### ARIA Patterns

- **Skip link**: `<a href="#main">Skip to content</a>` is the first focusable element on every page.
- **Global nav**: `<header role="banner">` with `<nav aria-label="Global">`.
- **Hero CTA**: standard `<a>` element; no extra ARIA.
- **Feature card**: entire card wrapped in `<a>` when navigable; `aria-label` describes the destination.
- **Plan card**: structured with `<article>` and explicit heading hierarchy; price has `aria-label="$20 per month, billed annually"`.
- **Pull-quote**: `<blockquote>` with `<cite>` for attribution; the star glyph carries `aria-hidden="true"`.
- **Modal**: `role="dialog"` + `aria-modal="true"` + focus trap + Esc closes.
- **Status badges**: include `aria-label` with full meaning ("Beta — feature in active development").

### Keyboard Navigation

- Skip link → masthead → main content → feature grid (each card focusable) → pricing → footer
- Within feature grid: Tab moves through cards in DOM order
- Mega-flyout: Tab moves through items + Esc closes
- Modal: focus trapped; Esc closes; focus returns to trigger

### Screen Reader Hints

Verbose `aria-label` on icon-only buttons. The clay-orange star glyph in the masthead is `<svg aria-hidden="true">` with the brand name as visible text. Decorative warm-tinted cards carry no extra ARIA — their content is the announcement.

### Reduced Motion

All scale and translate transitions degrade to opacity-only. Star-twinkle and hero fade-up suppress. CTA hover colour remains.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Masthead collapses to logo + Try Claude pill + hamburger; hero serif drops to 36/330; feature grid stacks 1-up |
| Tablet | 640–960px | Full masthead; hero at 44/330; feature grid 2-up |
| Desktop | 960–1200px | Full nav with all primary links; feature grid 3-up; hero at 56/330 |
| Wide | 1200–1440px | Content caps at 1200; hero may scale to 80/330 on flagship landing pages |

### Touch Targets

- Primary CTAs: 44px height — meets AAA
- Nav links: 44px hit area
- Form inputs: 44px
- Mobile menu items: 56px height

### Collapsing Strategy

- Masthead: nav links collapse to hamburger at <960px; "Sign in" hides first
- Hero: serif scales 80 → 56 → 44 → 36px across breakpoints; weight stays at 330 throughout
- Feature grid: 3 → 2 → 1 columns
- Plan cards: 3-up at desktop stacks to 1-up at <640px; "recommended" tier sticky at top of stack
- Footer: multi-column collapses to 2-column at tablet, 1-column at mobile

### Image Behavior

Hero illustration (when present) is SVG. Feature card icons are SVG. Photography (when used, rare) uses `<picture>` with WebP + PNG fallback. All illustration uses `loading="lazy"`.

### Container Queries

Plan cards use container queries to switch from "feature list inline" to "feature list stacked" when the card narrows below 280px.

## 11. Content & Voice

### Tone

Considered, literary, slightly philosophical. Claude's voice is "the thoughtful colleague who reads the New Yorker over coffee and explains technical concepts with patience." Headlines lead with capability framed as character ("Think fast, build faster", "An AI that listens before it speaks") rather than spec or hype. The brand consistently positions Claude as **AI for thoughtful work** — the assistant that aligns with how careful people already think.

### Microcopy Patterns

- **Button verbs**: "Try Claude", "Start building", "Get the app", "Read the docs", "Talk to sales"
- **Error message recipe**: warm + instructive — "Something didn't work. Try again or reach out if it persists."
- **Success confirmations**: minimal, warm — "Saved", "Sent", "Signed in"
- **Field labels**: short and friendly — "Email", "Password", "Organization"
- **Empty states**: invitation, not absence — "Start a conversation. Ask anything."

### Empty States

Empty conversation: "Start a conversation. Ask Claude anything — research, code, writing, analysis." — names four next moves.

Empty file upload: "Drop a PDF, image, or text file here, or paste from clipboard."

Empty workspace: "No projects yet. Create your first to organise conversations by topic."

### CTA Verb Conventions

- Primary: **"Try Claude"** (default), **"Start building"** (developer-facing), **"Get the app"** (consumer-facing)
- Secondary: **"Read the docs"**, **"Talk to sales"**, **"Watch demo"**, **"See pricing"**
- Tertiary: **"Learn more"**, **"View research"**, **"Read the announcement"**
- Avoided: "Sign up free", "Click here", "Get instant access" — these would break the considered register

## 12. Dark Mode & Theming

**Optional dark mode supported.** The marketing site defaults to light, but the Claude app respects system dark mode. The dark theme uses warm cocoa night `#1a1a18` as the canvas with `#f3f0ea` cream text — a warm-on-warm inversion that maintains the Anthropic register. The cream text is the same warm-cream used as the CTA-text in light mode, giving continuity.

The full dark token swap is documented in `colors-dark:`. The brand clay-orange lifts slightly to `#e08d63` for night legibility (the original `#cd6f47` reads slightly hot at low ambient light). The CTA inverts to cream-on-cocoa (`#f3f0ea` on `#1a1a18`). Cards lift to `#22201c` warm cocoa. Hairlines shift to `rgba(243,240,234,0.1)` cream-translucent.

The brand position: dark mode is the **product-app default for system-dark users**, while the marketing site stays light because the cream canvas is the brand identity. Claude's Anthropic-inherited paper register is built around the cream — inverting it to dark would lose the literary, magazine-essay register that distinguishes Claude from OpenAI and Mistral.

## 13. Lineage & Influences

Claude.ai's visual lineage runs through three traditions: **Anthropic's parent brand register** (cream canvas, hairline-weight serif, warm clay accents — Anthropic established this register for research papers years before Claude.ai launched), **mid-century editorial typography** (The New Yorker, The Atlantic — light-weight serif headlines on warm paper as a register of "considered, edited, important"), and **the post-Stripe-Press editorial-software wave** (Stripe Press treated long-form essays as art objects; Claude borrowed the cream-canvas-plus-serif-headline model and dialled it warmer).

Three contemporaries share the same neighbourhood. **OpenAI** went pure-white with a custom geometric sans — the cool counter to Claude's warm. **Notion** went off-white with a custom sans — the closest cousin in register, but Notion runs sans-only where Claude commits to the serif/sans duet. **Stripe Press** went cream with editorial serif — the strongest typographic precedent, but Stripe Press is publishing-as-art (a closed catalogue) where Claude is publishing-as-product (the page is a product page first, an essay second). The closest spiritual sibling outside this trio is **The New Yorker** — light-weight serif headline + cream paper + clay accent on the cover, all carried at scale across a literary register.

What Claude rejects: pure white canvases, neutral grey palettes, expressive display typefaces beyond Anthropic Serif, dark-mode-as-marketing-default, gradient meshes, hero animations beyond the gentle fade-up, neon or saturated accents, and any colour register that suggests "tech startup." The brand position is **AI for thoughtful work** — and the typographic register, the cream canvas, and the hairline serif compound to communicate that posture before any copy is read.

**Influences:**
- Anthropic — direct parent: Anthropic Sans, Anthropic Serif, the cream canvas, and the clay-orange accent are inherited, [anthropic.com](https://www.anthropic.com)
- The New Yorker — light-weight serif headline + cream paper as a register of "considered, edited, important", [newyorker.com](https://www.newyorker.com)
- Notion — cousin in the off-white + custom-sans editorial lineage, [notion.com](https://www.notion.com)
- Stripe Press — long-form essay register, type-as-image hero treatments, [press.stripe.com](https://press.stripe.com)
- Klim Type Foundry — Tiempos Headline is the closest commercial precedent for Anthropic Serif, [klim.co.nz](https://klim.co.nz)
- The Atlantic — sister editorial register at consumer scale

## 14. Do's and Don'ts

**Do**
- Anchor the canvas on cream (`#f8f8f6`) — pure white collapses Claude into the OpenAI register
- Set hero headlines in Anthropic Serif at 56/330 — the hairline weight is the brand's most distinctive move
- Pair Anthropic Sans (body) with Anthropic Serif (display) — the duet is the entire register
- Use clay-orange (`#cd6f47`) as a single small accent (logomark, link hover, badge text), never as a button colour
- Make primary CTAs near-black `#121212` rectangles with cream text (not white) — institutional restraint over chromatic branding
- Use 8px button radius and 12px card radius — gentler than Linear's 6, sharper than Stripe's 12
- Use the small clay-orange star glyph above pull-quotes and in the masthead — Claude's only decorative mark
- Lift cards to white (`#ffffff`) off the cream — never use white as a section ground
- Use warm-cocoa shadows (`rgba(18,18,18,...)`) — paper-on-paper, not glass-on-glass
- Maintain 96–144px section padding — magazine cadence
- Set body at 17/1.5 — print-grade size signals "this is meant to be read"

**Don't**
- Don't use Inter, system-ui, or any default sans for headlines — Anthropic Sans + Anthropic Serif is the entire register
- Don't stack heavy drop shadows — depth here is value-contrast and warm hairlines
- Don't mix neon or saturated accents into the palette — the brand is paper-cream, near-black, and one warm clay note
- Don't make CTAs clay-orange (`#cd6f47`) on the marketing primary action — clay belongs on the brand mark, not the CTA
- Don't use Anthropic Serif heavier than 400 on display — 330 hairline is the signature
- Don't crowd sections below 96px vertical padding — the breath is the brand
- Don't differentiate visited links in cool blue — Claude's visited state is deeper clay (warm)
- Don't use exclamation marks gratuitously — the voice is considered, never enthusiastic
- Don't introduce a custom syntax theme on code blocks — Anthropic Mono with the standard token palette is the register
- Don't render the masthead with a hard bottom border — the cream floor flows up

## 15. Agent Prompt Guide

### Quick Color Reference

```
Cream Canvas:     #f8f8f6
Bg Soft:          #faf9f5
Bg Deep:          #f0efea
Surface White:    #ffffff
Surface Warm:     #f3f0ea
Body Ink:         #121212
Muted:            #666660
Clay Orange:      #cd6f47
Clay Strong:      #a85530
Clay Deep:        #7d3c1f
Clay Soft:        #f3e7df
CTA Bg:           #121212
CTA Text:         #f8f8f6
Hairline:         rgba(18,18,18,0.12)
```

### Example Component Prompts

- "Create a Claude-style primary CTA: a 44px-tall rectangle with 8px radius, near-black (`#121212`) fill, cream text (`#f8f8f6`, not pure white) in Anthropic Sans 16/500, 12×20px padding. Hover transitions the fill to `#2a2a2a` over 150ms standard easing. No drop-shadow."
- "Build a Claude hero band: cream canvas (`#f8f8f6`) at 96–144px vertical padding, content capped at 1200px. Display headline in Anthropic Serif 56/330 — 'Think fast, build faster'. Note: 330 weight is hairline; substituting any heavier weight collapses the brand. Sub-copy in Anthropic Sans 19/400 near-black. Near-black primary CTA + outline secondary CTA flush left. Above the headline, a small clay-orange (`#cd6f47`) star glyph at 1.5em sized."
- "Design a Claude feature card: pure white (`#ffffff`) surface lifting off the cream canvas, 12px radius, 1px `rgba(18,18,18,0.06)` soft hairline, 24px padding, no shadow. Stack: 32px clay-orange icon, h4 in Anthropic Sans 22/500 near-black, body in 16/400 near-black. Hover: border darkens to `rgba(18,18,18,0.18)` over 240ms — no translate, no shadow."
- "Build a Claude pull-quote: transparent surface, Anthropic Serif 28/400 italic in near-black. Above the quote, a small clay-orange (`#cd6f47`) star glyph at 1.5em sized at the same left edge. Below, an Anthropic Sans 14/500 attribution in muted near-black — '— Maria Konnikova, The Confidence Game'."
- "Create a Claude pricing card: pure white surface, 16px radius, 1px `rgba(18,18,18,0.12)` hairline, 32px padding. Stack: plan name in Anthropic Sans 22/500, price in Anthropic Serif 48/400 near-black, billing cadence in 14/400 muted, feature list with check icons in 16/400 near-black, near-black primary CTA at the bottom. The 'recommended' tier swaps the border to 2px solid clay-orange (`#cd6f47`) and adds a small 'Recommended' badge."
- "Design a Claude masthead: transparent bar (blends into cream canvas), 64px height. Wordmark + clay-orange star glyph flush left in Anthropic Sans 17/500 near-black. Primary nav centre (Product, Research, Pricing, API) in 15/500 near-black, hover flips to clay-orange (`#cd6f47`). Secondary actions right: 'Sign in' as text link, 'Try Claude' as near-black pill."

### Iteration Guide

1. **Cream canvas first.** If your page has pure white, it isn't Claude. `#f8f8f6` is the brand identity.
2. **Anthropic Serif at 330 weight on hero.** The hairline serif is the signature. 400 collapses it; 700 destroys it.
3. **Anthropic Sans + Anthropic Serif duet.** Sans for body, Serif for display. Mixing in any default sans or serif breaks the brand.
4. **Body at 17/1.5.** Print-grade size. 16 reads as default SaaS; 17 reads as "intended for reading."
5. **Near-black CTAs, not clay.** `#121212` rectangle with cream text. Clay belongs on the brand mark and link hover.
6. **One brand colour: clay-orange `#cd6f47`.** Used sparingly — brand mark, star glyph, link hover, badge text. Never on CTAs, never on body.
7. **Warm-cocoa shadows.** `rgba(18,18,18,...)` for any drop. Reads as paper, not glass.
8. **96–144px section padding.** Magazine cadence. The breath is the brand.
