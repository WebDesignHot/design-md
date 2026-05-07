---
name: Figma
tagline: Bright multi-color section bands with figmaSans display and figmaMono eyebrows — a marketing site that designs in scenes.
updated_at: 2026-05-04T20:53:02+12:00
published_at: 2026-05-03T10:27:49+12:00
author: webdesignhot
source_url: https://www.figma.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [saas, dev-tools]
tags: [light, bright, sans, mono, playful, spacious]
preview_swatch: ['#ffffff', '#dceeb1', '#000000']
related: [notion, stripe, linear]
description: 'Figma''s homepage is a sequence of full-bleed coloured scenes — white, lime, lavender, cream, mint, pink, coral, navy — narrated in custom figmaSans display type with figmaMono caps as eyebrows. The CTA is a hard `#000` pill at 50px radius; nothing about it apologises for being a tool. The system rule is contrast: monochrome chrome between oversized pastel color-block sections that take over a full viewport like sticky notes on a clean wall.'

colors:
  bg: '#ffffff'                # default page canvas
  bg-soft: '#f7f7f5'           # template card / illustration tile
  surface: '#ffffff'           # white card body
  surface-soft: '#f7f7f5'      # alternate elevated band
  text: '#000000'              # pure black ink — body + display
  text-strong: '#000000'       # display emphasis
  text-soft: '#1e1e1e'         # softer near-black on subdued copy
  text-muted: '#666666'        # captions
  text-faint: '#999999'        # disabled
  brand: '#000000'             # CTA fill — primary action surface
  brand-pressed: '#1e1e1e'     # press state
  on-brand: '#ffffff'          # CTA text + reverse-band copy
  inverse-bg: '#000000'        # closing scene band + marquee strip
  inverse-text: '#ffffff'
  link: '#000000'              # all links default to ink
  link-hover: '#1e1e1e'
  border: '#e6e6e6'            # 1px hairline divider
  border-soft: '#f1f1f1'       # nested row divider
  border-strong: '#cccccc'     # input + secondary border
  block-lime: '#dceeb1'        # color-block section: lime
  block-lilac: '#c5b0f4'       # color-block section: lavender
  block-cream: '#f4ecd6'       # color-block section: cream
  block-pink: '#efd4d4'        # color-block section: pink
  block-mint: '#c8e6cd'        # color-block section: mint
  block-coral: '#f3c9b6'       # color-block section: coral
  block-navy: '#1f1d3d'        # color-block section: deep navy
  accent-magenta: '#ff3d8b'    # rare promo CTA pink — Release Notes only
  accent-blue: '#0d99ff'       # Figma signature blue (in-product only)
  accent-green: '#0fa958'      # in-product only
  accent-red: '#f24822'        # in-product only
  accent-purple: '#9747ff'     # in-product only
  accent-yellow: '#ffcd29'     # in-product only
  semantic-success: '#1ea64a'  # checkmark green
  semantic-warning: '#ff9800'  # rare
  semantic-error: '#f24822'    # validation red
  overlay-scrim: 'rgba(0, 0, 0, 0.6)'  # modal backdrop

typography:
  display:
    family: 'figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif'
    weights: [320, 330, 340, 450, 480, 540, 700]
    opentype: ['kern', 'liga']
  body:
    family: 'figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif'
    weights: [320, 330, 340, 480]
    opentype: ['kern']
  mono:
    family: 'figmaMono, "figmaMono Fallback", "SF Mono", menlo, monospace'
    weights: [400, 500]
    opentype: ['kern', 'tnum']
  scale:
    display-hero:   { size: 86, weight: 340, lineHeight: 1.00, tracking: '-0.02em',  family: display, opentype: 'kern' }
    display-large:  { size: 64, weight: 340, lineHeight: 1.10, tracking: '-0.015em', family: display, opentype: 'kern' }
    h1:             { size: 48, weight: 340, lineHeight: 1.15, tracking: '-0.012em', family: display, opentype: 'kern' }
    h2:             { size: 36, weight: 340, lineHeight: 1.20, tracking: '-0.01em',  family: display, opentype: 'kern' }
    h3:             { size: 26, weight: 540, lineHeight: 1.35, tracking: '-0.01em',  family: display, opentype: 'kern' }
    h4:             { size: 24, weight: 700, lineHeight: 1.45, tracking: '0',        family: display }
    body-large:     { size: 20, weight: 330, lineHeight: 1.40, tracking: '-0.007em', family: body }
    body:           { size: 18, weight: 320, lineHeight: 1.45, tracking: '-0.014em', family: body }
    body-small:     { size: 16, weight: 330, lineHeight: 1.45, tracking: '-0.009em', family: body }
    label-mono:     { size: 18, weight: 400, lineHeight: 1.30, tracking: '0.03em',   family: mono, transform: 'uppercase' }
    button:         { size: 20, weight: 480, lineHeight: 1.40, tracking: '-0.005em', family: body }
    button-small:   { size: 16, weight: 480, lineHeight: 1.40, tracking: '-0.005em', family: body }
    link:           { size: 20, weight: 480, lineHeight: 1.40, tracking: '-0.005em', family: body }
    caption:        { size: 14, weight: 330, lineHeight: 1.45, tracking: '0',        family: body }
    caption-small:  { size: 13, weight: 400, lineHeight: 1.40, tracking: '0',        family: mono }
    micro:          { size: 12, weight: 400, lineHeight: 1.00, tracking: '0.05em',   family: mono, transform: 'uppercase' }
    code-body:      { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',        family: mono }
    code-bold:      { size: 14, weight: 500, lineHeight: 1.50, tracking: '0',        family: mono }
    code-label:     { size: 12, weight: 400, lineHeight: 1.40, tracking: '0.04em',   family: mono, transform: 'uppercase' }

radius:
  micro: 2
  sm: 6
  md: 8
  lg: 24
  xl: 32
  featured: 48
  pill: 50
  full: 9999

spacing:
  base: 4
  hair: 1
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section-sm: 64
  section: 96
  section-lg: 128
  scale: [1, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 56

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-entrance: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 120
  duration-standard: 240
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — color-block scroll-snap stays; transforms collapse to opacity'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0, 0, 0, 0.04) 0 1px 2px'
  standard: 'rgba(0, 0, 0, 0.06) 0 4px 12px'
  elevated: 'rgba(0, 0, 0, 0.10) 0 12px 32px'
  deep: 'rgba(0, 0, 0, 0.18) 0 24px 48px'
  ring: '0 0 0 2px #000000'

accessibility:
  contrast-text-on-bg: 21.0          # #000000 on #ffffff — AAA
  contrast-text-on-brand: 21.0       # #ffffff on #000000 — AAA
  contrast-text-on-lime: 14.5        # #000000 on #dceeb1 — AAA
  contrast-text-on-lilac: 9.7        # #000000 on #c5b0f4 — AAA at body
  contrast-text-on-navy: 14.6        # #ffffff on #1f1d3d — AAA
  focus-ring: '2px solid #000000 with 2px offset on light, 2px solid #ffffff on inverse'
  reduced-motion-honored: true
  keyboard-nav: 'tab order follows visual order; skip-link visible on focus'

components:
  button-primary:
    background: '#000000'
    text: '#ffffff'
    radius: 50
    padding: '10px 20px'
    height: 44
    font: button
    hover: 'background #1e1e1e; no transform'
    active: 'background #1e1e1e'
    use: 'every primary CTA across the site — start free, sign up, get Figma'
  button-secondary:
    background: '#ffffff'
    text: '#000000'
    border: '1px solid #cccccc'
    radius: 50
    padding: '8px 18px 10px'
    height: 44
    font: button
    hover: 'background #f7f7f5; border #999999'
    use: 'tertiary action sitting next to primary on hero'
  button-ghost:
    background: 'transparent'
    text: '#000000'
    radius: 9999
    padding: '8px 12px'
    font: link
    hover: 'background rgba(0, 0, 0, 0.04)'
    use: 'inline text-link CTA inside body copy'
  button-danger:
    background: '#f24822'
    text: '#ffffff'
    radius: 50
    padding: '10px 20px'
    font: button
    hover: 'background #d83a1a'
    use: 'destructive confirms — delete file / cancel team'
  button-icon-circular:
    background: '#f7f7f5'
    text: '#000000'
    radius: 9999
    size: 40
    use: 'icon-only chrome button — close, expand, share'
  button-magenta-promo:
    background: '#ff3d8b'
    text: '#ffffff'
    radius: 50
    padding: '10px 18px'
    font: button
    use: 'rare promotional inline CTA — Release Notes "Save your spot" only'
  card:
    background: '#ffffff'
    text: '#000000'
    border: '1px solid #e6e6e6'
    radius: 24
    padding: 32
    use: 'pricing card / feature card / template card'
  pricing-card:
    background: '#ffffff'
    text: '#000000'
    border: '1px solid #e6e6e6'
    radius: 24
    padding: 24
    use: 'pricing tier card — flat, hairline only'
  template-card:
    background: '#f7f7f5'
    text: '#000000'
    radius: 8
    padding: 16
    use: 'community template card — 3-up grid'
  color-block-lime:
    background: '#dceeb1'
    text: '#000000'
    radius: 24
    padding: 48
    use: 'oversized color-block section — lime'
  color-block-lilac:
    background: '#c5b0f4'
    text: '#000000'
    radius: 24
    padding: 48
    use: 'oversized color-block section — lavender'
  color-block-navy:
    background: '#1f1d3d'
    text: '#ffffff'
    radius: 24
    padding: 48
    use: 'oversized color-block section — deep navy ship-products'
  marquee-strip:
    background: '#000000'
    text: '#ffffff'
    radius: 0
    height: 36
    use: 'announcement marquee strip below header'
  input:
    background: '#ffffff'
    text: '#000000'
    border: '1px solid #cccccc'
    radius: 8
    padding: '12px 14px'
    height: 44
    focus: 'border #000000; ring 0 0 0 2px rgba(0, 0, 0, 0.12)'
    use: 'email / search / form input'
  badge:
    background: '#f7f7f5'
    text: '#000000'
    radius: 50
    padding: '4px 12px'
    font: caption-small
    use: 'NEW / category tag — pill shape, mono caption'
  comparison-checkmark:
    background: 'transparent'
    text: '#1ea64a'
    radius: 9999
    size: 16
    use: 'pricing feature checkmark'
  pricing-tab-default:
    background: '#ffffff'
    text: '#000000'
    radius: 50
    padding: '8px 18px'
    font: button
    use: 'pricing toggle tab — monthly/annual'
  pricing-tab-selected:
    background: '#000000'
    text: '#ffffff'
    radius: 50
    padding: '8px 18px'
    font: button
    use: 'pricing toggle tab — selected state'
  nav-link:
    background: 'transparent'
    text: '#000000'
    font: caption
    padding: '8px 12px'
    hover: 'background rgba(0, 0, 0, 0.04)'
    use: 'top-nav menu items (Products / Use cases / Resources / Pricing)'

dark-mode: optional

lineage:
  summary: |
    Figma's marketing language is unique among design-tool sites:
    rather than committing to a single canvas tone, the homepage
    scrolls through a sequence of full-bleed coloured scenes — white,
    lime, lavender, cream, mint, pink, coral, finally a deep navy —
    each scene reframing the product against a different tonal
    context. It's the same rhythm a Pentagram poster series uses:
    each panel its own backdrop, the type doing the work of carrying
    continuity. That work is done by figmaSans, a custom variable cut
    where the H1 arrives at weight 340 (an unusual non-standard weight
    axis Figma uses for that hairline-display feel) with `-0.96px`
    tracking at 64px and `-1.72px` at 86px. The eyebrow / overline
    pattern uses figmaMono in caps with positive tracking — a
    typographic convention borrowed from indie editorial design (think
    IDEO, Pentagram, even old Apple Pro pages) that signals "section
    header" without needing a different weight. The single hard-black
    `#000` pill CTA is an inversion of the SaaS-blue-button orthodoxy:
    where Notion uses `#0075de` and Stripe a vibrant indigo, Figma
    trusts pure black to read as confident-not-corporate. Color-block
    sections take over an entire viewport like sticky notes on a clean
    wall, while the chrome itself stays rigorously monochrome — the
    contrast is what makes the system feel both technical and joyful.
  influences:
    - name: 'Pentagram (poster series)'
      role: 'Section-as-coloured-scene composition with type carrying continuity across tonal shifts'
      url: 'https://www.pentagram.com'
    - name: 'IDEO / Field Notes editorial'
      role: 'Mono-caps eyebrow as section labelling convention with positive tracking'
      url: 'https://fieldnotesbrand.com'
    - name: 'Apple (Pro pages, 2008–2014)'
      role: 'Confidence in oversized variable display sans paired with hard-black CTAs'
      url: 'https://www.apple.com'
    - name: 'figmaSans (custom commissioned)'
      role: 'Variable display family with non-standard weight axis (320/330/340/480/540) — the entire type voice'
      url: 'https://www.figma.com'
---

## 1. Visual Theme & Atmosphere

Figma's website is structured as a sequence of full-bleed coloured **scenes**, not a single canvas. The header and opening sections are white; a lime `#dceeb1` band introduces use-cases; a lavender `#c5b0f4` section follows; the page closes on either a deep navy `#1f1d3d` ship-products band or a hard `#000` final scene. Each scene is its own visual exhibit, narrated in custom figmaSans at 86px / weight 340 (a non-standard variable axis — that's why the display reads as oversized and quiet at the same time).

What separates Figma from peer SaaS sites is the absence of brand chroma in the chrome. The five product hues (`#0d99ff` blue, `#0fa958` green, `#f24822` red, `#9747ff` purple, `#ffcd29` yellow) live exclusively inside product screenshots — never as marketing surfaces. The CTA is hard `#000`, the same colour as text — which is what gives the site its tool-not-platform feel.

The pastel color-block sections are the strongest single signature. They span full content width with `24px` corners and `48px` interior padding, taking over an entire viewport like a giant sticky note placed on a clean desk. FigJam is the most pastel-saturated route; the home page rotates through the full set; the pricing page ends with a lime FAQ panel — same vocabulary, different rhythm per route. The system reads as both technical and joyful: a tool for serious work, made by people who like color.

This is a system built on contrast: the monochrome chrome makes the color blocks feel intentional rather than decorative, and the color blocks make the monochrome chrome feel like editorial paper rather than enterprise SaaS. Density is generous, line-heights are tight on display sizes, and the interface never reaches for shadows or gradients to do the work that color blocks and confident typography already do.

**Key Characteristics:**
- Monochrome system core: `#000000` and `#ffffff` carry every CTA, every body line, every footer link.
- Oversized pastel color-block sections (lime / lavender / cream / mint / pink / coral / navy) define narrative rhythm.
- Pill is the only button shape — `50px` radius for text CTAs, full `9999` for icon buttons. No square buttons.
- figmaSans variable typeface used at unusually fine weight increments (320, 330, 340, 480, 540).
- Tight negative letter-spacing on display sizes (-1.72px at 86px, -0.96px at 64px).
- figmaMono reserved for category labels, eyebrows, captions — always uppercase, positive tracking.
- Scene-as-band rhythm: white hero → marquee strip → white feature → lime systems → navy ship → coral developer → white templates → footer.
- No gradients, no glassmorphism, no chrome shadows. Color blocks do the work.

## 2. Color Palette & Roles

### Primary

- **Background** (`#ffffff`): default page canvas. Used for header, opening scenes, and product surfaces.
- **Text** (`#000000`): pure black ink — body and display alike.
- **Brand / CTA** (`#000000`): the action surface is the same colour as type.

### Brand & Dark

- **Inverse Background** (`#000000`): closing scene band, marquee strip, dark CTA fill.
- **Inverse Text** (`#ffffff`): text on dark scenes.
- **Brand Pressed** (`#1e1e1e`): primary button press state.
- **Block Navy** (`#1f1d3d`): deep navy color-block section — used for "ship products" panel.

### Accent

- **Block Lime** (`#dceeb1`): lime color-block section — "make anything" tonal moment.
- **Block Lilac** (`#c5b0f4`): lavender color-block section — collaborative themes.
- **Block Cream** (`#f4ecd6`): cream color-block section — editorial tone.
- **Block Pink** (`#efd4d4`): pink color-block section.
- **Block Mint** (`#c8e6cd`): mint color-block section.
- **Block Coral** (`#f3c9b6`): coral color-block section — developer tools.
- **Block Navy** (`#1f1d3d`): the only saturated dark color-block.
- **Magenta Promo** (`#ff3d8b`): a single saturated CTA pink reserved for promotional inline buttons (Release Notes "Save your spot" lilac banner). Use scarcely; not a section color.

### Interactive

- **Link** (`#000000`): all text links default to ink.
- **Link Hover** (`#1e1e1e`): subtle deepening on hover.
- **Focus Ring** (`2px solid #000000`): black ring with 2px offset on light scenes; white on inverse scenes.

### Neutral Scale

- **Text Strong** (`#000000`): display emphasis.
- **Text Soft** (`#1e1e1e`): subdued copy.
- **Text Muted** (`#666666`): captions, secondary metadata.
- **Text Faint** (`#999999`): disabled states.

### Surface & Borders

- **Surface** (`#ffffff`): white card body — pricing, feature, template.
- **Surface Soft** (`#f7f7f5`): canonical Figma neutral. Template card / illustration tile background.
- **Border** (`#e6e6e6`): 1px hairline divider.
- **Border Soft** (`#f1f1f1`): nested row divider.
- **Border Strong** (`#cccccc`): input + secondary button border.

### Shadow Colors

- **Shadow Ambient** (`rgba(0, 0, 0, 0.04)`): rare — only on testimonial cards.
- **Shadow Standard** (`rgba(0, 0, 0, 0.06)`): pricing card hover lift.
- **Shadow Deep** (`rgba(0, 0, 0, 0.18)`): modal / dialog backdrop.

The chrome itself prefers no shadows — depth comes from scene-color contrast, not lift.

### Semantic

- **Success** (`#1ea64a`): comparison checkmark, success toast.
- **Warning** (`#ff9800`): rare warning state (not on homepage).
- **Danger / Error** (`#f24822`): validation red. Same hue as in-product accent-red, here used for system errors only.

### In-Product (NOT for chrome)

- **Accent Blue** (`#0d99ff`), **Accent Green** (`#0fa958`), **Accent Red** (`#f24822`), **Accent Purple** (`#9747ff`), **Accent Yellow** (`#ffcd29`): these five live inside product screenshots only. Never on marketing surfaces.

## 3. Typography Rules

### Font Family

- **Primary (display + body):** `figmaSans, "figmaSans Fallback", "SF Pro Display", system-ui, helvetica, sans-serif`. Custom variable cut with non-standard weight axis (320/330/340/480/540).
- **Mono companion:** `figmaMono, "figmaMono Fallback", "SF Mono", menlo, monospace`. Used for eyebrows, caption-small, code.
- **OpenType features:** `kern` enabled site-wide on display + body. `liga` retained on body. `tnum` activated on mono caption + code.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | figmaSans | 86 | 340 | 1.00 | -0.02em (-1.72px) | kern | Homepage h1 — hairline-display |
| display-large | figmaSans | 64 | 340 | 1.10 | -0.015em (-0.96px) | kern | Section h1 |
| h1 | figmaSans | 48 | 340 | 1.15 | -0.012em | kern | Page h1 |
| h2 | figmaSans | 36 | 340 | 1.20 | -0.01em | kern | Section heads |
| h3 | figmaSans | 26 | 540 | 1.35 | -0.01em | kern | Sub-section headlines (heavier — narrative) |
| h4 | figmaSans | 24 | 700 | 1.45 | 0 | kern | Card title (bold — only place 700 appears) |
| body-large | figmaSans | 20 | 330 | 1.40 | -0.007em | kern | Hero subhead |
| body | figmaSans | 18 | 320 | 1.45 | -0.014em (-0.26px) | kern | Default paragraph copy |
| body-small | figmaSans | 16 | 330 | 1.45 | -0.009em | kern | Pricing feature row |
| label-mono | figmaMono | 18 | 400 | 1.30 | 0.03em (0.54px) | tnum, uppercase | Section eyebrow |
| button | figmaSans | 20 | 480 | 1.40 | -0.005em | kern | CTA pill label |
| button-small | figmaSans | 16 | 480 | 1.40 | -0.005em | kern | Compact button row |
| link | figmaSans | 20 | 480 | 1.40 | -0.005em | kern | Inline text link |
| caption | figmaSans | 14 | 330 | 1.45 | 0 | kern | Small body / nav copy |
| caption-small | figmaMono | 13 | 400 | 1.40 | 0 | tnum | Footer caption |
| micro | figmaMono | 12 | 400 | 1.00 | 0.05em (0.60px) | uppercase | Footer caption / disclaimer |
| code-body | figmaMono | 14 | 400 | 1.50 | 0 | tnum | Code sample |
| code-bold | figmaMono | 14 | 500 | 1.50 | 0 | tnum | Inline emphasis in code |
| code-label | figmaMono | 12 | 400 | 1.40 | 0.04em | tnum, uppercase | Code-block filename header |

### Principles

- **Display weight is 340, not 400.** figmaSans loads a non-standard weight axis — the H1 ships at weight 340 (between ExtraLight and Light in conventional terms). This is what gives oversized text its weightless, quiet character.
- **figmaMono is for taxonomy.** Mono-caps overlines flag section structure without needing heavier weights. Always uppercase, always positive tracking.
- **One bold appears: card titles at 700.** Outside of card-title, weight 700 never shows on the homepage. Display-bold would shout; figmaSans 340 whispers confidently.
- **Negative tracking scales with size.** -1.72px at 86px → -0.96px at 64px → -0.26px at 18px. Body retains slight negative tracking (-0.14px) so paragraph color holds dense.
- **Two type voices, three roles.** figmaSans does display + body; figmaMono does eyebrows + captions + code. No third sans, no second mono.
- **OpenType kern always on.** figmaSans is cut for tight kerning; disabling kern produces visible looseness at hero sizes.

## 4. Component Stylings

### Buttons

**Primary (Black Pill)** — Background `#000000`, text `#ffffff`, **50px radius** (the system's pill shape — note: not 9999), padding `10px 20px`, height 44px, button font (20/480/-0.005em). Hover: background `#1e1e1e`, no transform. **Use:** every primary CTA across the site.

**Secondary (White Pill)** — Background `#ffffff`, text `#000000`, 1px `#cccccc` border, 50px radius, padding `8px 18px 10px`. Hover: background `#f7f7f5`, border deepens. **Use:** tertiary action sitting next to primary on hero.

**Ghost / Inline Link** — Transparent background, ink text, `9999` radius for icon variant or no radius for text. Padding `8px 12px`. Hover: `rgba(0, 0, 0, 0.04)` background. **Use:** inline text-link CTA inside body copy.

**Danger** — Background `#f24822`, text `#ffffff`, 50px radius. Hover: `#d83a1a`. **Use:** destructive confirms — delete file, cancel team.

**Icon Circular** — Background `#f7f7f5`, ink text, 9999 radius, 40px square. Inverse variant flips to `#ffffff` text on transparent. **Use:** close, expand, share.

**Magenta Promo** — Background `#ff3d8b`, white text, 50px radius. **Use:** rare promotional inline CTA — Release Notes "Save your spot" only. Never as a system primary.

### Cards

**Pricing Card** — Background `#ffffff`, 1px `#e6e6e6` border, 24px radius, 24px padding, no shadow.

**Feature Card** — Same shape as pricing; 32px padding for breathing room.

**Template Card (community)** — Background `#f7f7f5`, 8px radius, 16px padding. Smaller, denser, hairline-free.

**Color-Block Section** — The signature primitive. Background `#dceeb1` (lime) / `#c5b0f4` (lilac) / `#1f1d3d` (navy) etc., 24px radius (yes, even at scene size), 48px interior padding, full content width. Copy stays figmaSans h3 + body.

### Badges & Tags

**Badge** — Background `#f7f7f5`, ink text, 50px radius, `4px 12px` padding, mono caption. **Use:** NEW / category tag.

**Pricing Tab Default** — Background `#ffffff`, ink text, 50px radius, `8px 18px` padding, button font. **Pricing Tab Selected** — Inverts to `#000000` background, white text. The toggle is a pill swap.

**Comparison Checkmark** — Transparent background, `#1ea64a` text, 9999 radius, 16px square. **Use:** pricing feature checkmark.

### Inputs & Forms

**Text Input** — Background `#ffffff`, 1px `#cccccc` border, 8px radius (note: NOT pill — only buttons are pills), padding `12px 14px`, height 44px, body font. Focus: border `#000000`, ring `0 0 0 2px rgba(0, 0, 0, 0.12)`.

### Navigation

**Top Nav** — Background `#ffffff`, ink text, 56px height. Layout: Figma wordmark left, horizontal menu (Products / Use cases / Resources / Pricing / Contact / Get Started CTA), no underlines, hover-only highlight.

**Marquee Strip** — Inverse `#000000` band beneath header, white text, 36px height, horizontal-scrolling announcement.

**Nav Link** — Transparent background, ink text, `8px 12px` padding, button-small font. Hover: `rgba(0, 0, 0, 0.04)` background.

### Decorative

**Color-Block Promo Banner (Release Notes)** — `#c5b0f4` lavender background, ink text, 8px radius, `16px 24px` padding. Embedded inside body, smaller than full color-block section.

**Footer** — White background, ink text, 64px / 32px padding, mono caption-small.

## 5. Layout Principles

### Spacing System

- **Base unit:** 4px.
- **Scale:** 1 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160.
- **Section padding:** 96px standard, 128px between major regions.
- **Color-block interior:** 48px padding.

### Grid & Container

- **Max content width:** 1280px (looser than Stripe's 1200, tighter than full-bleed).
- **Color-block sections:** full-bleed — span 100% viewport width with `24px` outer radius creating the "inset card" feel.
- **Editorial body:** 12-column grid, 24px gutter.
- **Feature grids:** 2-up at desktop for splits, 3-up for benefits, 4-up for templates.
- **Footer:** 5-column at desktop.

### Whitespace Philosophy

The homepage breathes wide between scenes (96–128px) and tight inside scenes (24–48px). Color-block sections always include generous internal padding (48px) so the pastel feels intentional rather than crowded. The chrome itself never clamps to a 1200px frame the way Stripe or Linear do — content has room to behave like a poster panel.

### Section Cadence

- White hero → black marquee strip → white feature → **lime systems block** → white prose → **navy ship-products block** → white template grid → **coral developer block** → white footer.
- Pastel scenes alternate with white scenes; navy appears once per page as a tonal anchor.
- The page reads as a sequence of flat coloured planes, not a stack of cards.

## 6. Shapes & Radius Scale

| Token | Value | Use |
|---|---|---|
| micro | 2px | Footer / nav link inline backgrounds |
| sm | 6px | Compact inline rows |
| md | 8px | Inputs, template cards |
| lg | 24px | Pricing cards, feature cards, **color-block sections** |
| xl | 32px | Larger feature shells |
| featured | 48px | Hero containers (rare) |
| pill | 50px | All text CTAs — the system's signature |
| full | 9999px | Icon buttons, avatars, comparison checkmarks |

The pill at **50px** (not 9999) is the entire button language. Cards live at 24px. Inputs at 8px. The radius is restrained — Figma trusts hard rectangles in scene composition to read as canvas-aware. Pills only appear on buttons.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | Pure scene color (white / lime / lilac / navy etc.) | Body bands, footer |
| 1 — Card | `#ffffff` + 1px `#e6e6e6` hairline | Pricing, feature, template cards |
| 2 — Color-Block | Pastel scene + 24px radius | Color-block sections |
| 3 — Modal | `#ffffff` + 24px radius + deep shadow `rgba(0, 0, 0, 0.18) 0 24px 48px` | Pricing modal / dialog |
| 4 — Marquee | `#000000` band + flat | Header marquee strip |

### Shadow Philosophy

Depth is achieved entirely through **scene composition**, not shadows. The page reads as a sequence of flat coloured planes; cards and images sit directly on the scene background with at most a hairline border (`#e6e6e6`). The black final scene provides contrast as endpoint, not as elevation. When shadows do appear (modal backdrop, rare hover lifts), they're neutral black-with-alpha — never tinted.

## 8. Interaction & Motion

### Easing & Duration

- **ease-standard:** `cubic-bezier(0.4, 0, 0.2, 1)` — material default for hover transitions.
- **ease-emphasized:** `cubic-bezier(0.2, 0, 0, 1)` — used for color-block scene transitions.
- **ease-entrance:** `cubic-bezier(0, 0, 0.2, 1)` — used when content fades in from below as the user scrolls.
- **duration-fast:** 120ms — color shifts on hover.
- **duration-standard:** 240ms — most opacity / transform animations.
- **duration-slow:** 400ms — color-block scene reveals on scroll.

### Per-Component Micro-States

- **Button hover:** background `#000000` → `#1e1e1e`. No transform, no shadow. 120ms.
- **Card hover (pricing):** subtle lift — translateY(-2px) + shadow `rgba(0, 0, 0, 0.06) 0 4px 12px`. 240ms.
- **Color-block scroll-reveal:** the pastel scene fades from `#ffffff` opacity to full color over 400ms as it enters the viewport.
- **Link hover:** underline appears (decoration-thickness 1.5px, offset 4px). 120ms.
- **Input focus:** border color shift to ink, ring fades in over 120ms.

### Page Transitions

The homepage uses **scroll-snap** between major scenes on certain breakpoints, giving each color-block its own viewport moment. The transition itself is a smooth-scroll + fade.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. When set:
- Scroll-snap stays (it's a layout, not an animation).
- Color-block scene reveals fade to instant — no opacity ramp.
- Card hover transforms disabled; color shifts retained.
- Marquee strip pauses scrolling.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | WCAG |
|---|---|---|
| `#000000` ink on `#ffffff` | 21.0 | AAA |
| `#ffffff` on `#000000` | 21.0 | AAA |
| `#000000` on `#dceeb1` (lime) | 14.5 | AAA |
| `#000000` on `#c5b0f4` (lilac) | 9.7 | AAA at body |
| `#000000` on `#1f1d3d` (navy) | — | inverted to white text |
| `#ffffff` on `#1f1d3d` (navy) | 14.6 | AAA |

### Focus Indicators

2px solid `#000000` ring with 2px offset on light scenes; 2px solid `#ffffff` on inverse (navy / black) scenes. Applied to every interactive element.

### ARIA Patterns

- **Combobox:** `role="combobox"` + `aria-expanded` for nav search.
- **Dialog:** `role="dialog"` + `aria-modal="true"` + focus trap on pricing modal.
- **Tabs:** `role="tablist"` for monthly/annual pricing toggle.

### Keyboard Nav

- Tab order strictly visual.
- Skip-link present in header (visible on focus).
- Escape closes all dialogs; arrow keys navigate pricing tabs.

### Screen Reader

- Color-block sections include `aria-label` describing the scene's role ("Use cases section").
- Decorative SVG illustrations marked `aria-hidden="true"`.
- Marquee strip uses `aria-live="polite"`.

### Reduced Motion

Honored — see §8.

## 10. Responsive Behavior

| Breakpoint | Range | Key Changes |
|---|---|---|
| Mobile | < 640px | display-hero 86→48px; color-block sections collapse to full-bleed without 24px radius; feature grid 1-up; nav hamburger |
| Tablet | 640–1024px | display-hero 64px; feature grid 2-up; pricing 2-up |
| Desktop | 1024–1280px | display-hero 86px; full color-block scenes; feature grid 3-up |
| Wide | > 1280px | Content caps at 1280px; color-block scenes still full-bleed |

### Touch Targets

- Primary CTA: 44px height — at AAA.
- Nav links: 32px tap target padded internally to 44px effective.
- Icon buttons: 40px square.

### Collapsing Strategy

- Top nav switches to hamburger below 768px.
- Color-block sections drop the 24px outer radius on mobile (full bleed feels poster-like at small width).
- Feature grids: 4-up → 3-up → 2-up → 1-up.
- Pricing cards stack vertically below 768px.

### Image Behavior

Product screenshots use `srcset` 1x/2x/3x. Color-block scenes use solid CSS color (no images), so they scale infinitely.

### Container Queries

Used sparingly — the color-block layout reflows on container width when nested inside narrower templates.

## 11. Content & Voice

### Tone

Confident, friendly, designer-aware. Figma's voice sounds like a senior product designer presenting at a meetup — sharp on craft, light on jargon, generous with examples. Sentences trend short. Headlines are declarative ("Make anything possible, all in Figma").

### Microcopy Patterns

- **Button verbs:** "Get Figma", "Start free", "Sign up", "Contact sales", "Book a demo".
- **Error recipe:** `[What happened] — [Why] — [What to do]`. Example: "Couldn't open file. The file may have moved. Refresh to try again."
- **Success confirmations:** terse — "Saved", "Copied", "Sent". No emoji.
- **Empty states:** instructional. "No files yet — create one to get started." Sometimes a small color-block illustration accompanies.

### CTA Verb Conventions

- Primary: "Get Figma" (homepage hero), "Start free" (pricing top), "Sign up" (footer), "Contact sales" (enterprise).
- Secondary: "Watch overview", "Read the docs", "See pricing".
- Avoid: "Sign up now!", emoji-heavy CTAs, "Join thousands of users".

### Empty States

When a community template page has no results, Figma shows a small line illustration plus copy: "No templates match. Try a different search." The illustration is line-art, not pastel — empty states stay quiet.

## 12. Dark Mode & Theming

The marketing site is **light-only**. The closing scene uses a dark navy `#1f1d3d` band as a tonal endpoint, but a global dark mode is not offered on figma.com. The product itself ships with a dark canvas (preference inside the editor), but marketing chrome stays white-and-color.

If a dark variant were rendered (preference inside docs):
- `bg` → `#0f0e20`
- `text` → `#ffffff`
- `surface` → `#1f1d3d`
- Color-block pastels would invert to deeper saturations — but this is hypothetical; Figma does not ship a marketing dark mode.

## 13. Lineage & Influences

Figma sits at the intersection of **editorial poster design** (Pentagram, IDEO), **modern product-craft sites** (Apple Pro pages, Stripe Press), and **its own custom variable typeface**. The page rejects the SaaS-blue-CTA orthodoxy by using pure black for the action surface — an inversion of Notion (`#0075de`) and Stripe (vibrant indigo). The signal is "we're a tool, not a platform."

The color-block sections are the brand's deepest design move. Where Linear keeps to a single dark canvas with one indigo accent, Figma rotates through eight pastel scenes — and the chrome's monochrome discipline is what keeps the system from feeling chaotic. The figmaSans variable axis (320–540) is unusually fine; most variable type ships with five-step axes, Figma's flexes between hairline and bold inside a single family.

**Named influences:**

- **Pentagram** — section-as-coloured-scene composition with type carrying continuity.
- **IDEO / Field Notes editorial** — mono-caps eyebrow as section labelling convention.
- **Apple (Pro pages, 2008–2014)** — confidence in oversized variable display sans paired with hard-black CTAs.
- **figmaSans** (custom commissioned variable) — non-standard weight axis (320/330/340/480/540) is the type voice.
- **figmaMono** (custom commissioned mono) — eyebrows + captions + code.

## 14. Do's and Don'ts

### Do

- **Do** treat sections as **coloured scenes** — full-bleed bands of `#ffffff`, `#dceeb1` lime, `#c5b0f4` lilac, `#1f1d3d` navy rotated to break rhythm.
- **Do** use figmaMono in caps with `+0.03em` tracking for section eyebrows; never use figmaSans bold instead.
- **Do** keep the primary CTA pure black `#000000`. The brand reads as "tool" only because the action surface refuses to colour-code itself.
- **Do** hold display weight at 340. The non-standard axis is what carries quiet-oversized identity.
- **Do** apply tight negative tracking on display sizes (-1.72px at 86px). Body retains slight negative tracking (-0.26px at 18px).
- **Do** use 50px pill radius on every text CTA; never square buttons.
- **Do** scope the five product accent colours (`#0d99ff`, `#0fa958`, `#f24822`, `#9747ff`, `#ffcd29`) to product imagery only.
- **Do** layer color-block sections with 48px interior padding and 24px outer radius.
- **Do** keep card surfaces flat — hairline `#e6e6e6` border, no shadows on chrome.
- **Do** use figmaMono for code, captions, and footer microcopy.

### Don't

- **Don't** introduce gradients or shadows on the marketing chrome; chromatic interest belongs inside product screenshots.
- **Don't** scale figmaSans below 320 weight at display sizes — the variable axis is what carries the quiet-oversized identity.
- **Don't** use the product accent palette as marketing surfaces; lime/lilac/cream/mint/pink/coral/navy are the only approved scene colours.
- **Don't** use square buttons. Pills (50px) are the only button shape.
- **Don't** apply weight 700 except on card-title (h4). figmaSans 340 is the voice; bold breaks it.
- **Don't** use blue links. All links default to ink `#000000`.
- **Don't** skip the figmaMono eyebrow before sections that need a taxonomy label — it's the convention.
- **Don't** stack cards on color-block sections; the scene IS the elevation.
- **Don't** introduce a third sans family (no Inter, no system-ui body fallback that visibly differs from figmaSans).
- **Don't** use the magenta promo `#ff3d8b` outside Release Notes inline CTAs.

## 15. Agent Prompt Guide

### Quick Color Reference

```
Background:    #ffffff
Text:          #000000
Brand / CTA:   #000000
Block Lime:    #dceeb1
Block Lilac:   #c5b0f4
Block Cream:   #f4ecd6
Block Mint:    #c8e6cd
Block Navy:    #1f1d3d
Surface Soft:  #f7f7f5
Border:        #e6e6e6
```

### Example Component Prompts

- **"Create a hero section in the Figma style"** — White `#ffffff` canvas, 86px figmaSans h1 at weight 340 with `-1.72px` tracking, 20px body subhead at weight 330, single black `#000000` 50px-pill CTA labeled "Get Figma".

- **"Design a color-block section in the Figma style"** — Full-bleed pastel scene (`#dceeb1` lime / `#c5b0f4` lilac), 24px outer radius, 48px interior padding. Inside: figmaMono uppercase eyebrow ("USE CASES"), figmaSans h2 at 36/340/-0.01em, figmaSans body at 18/320/-0.014em.

- **"Build a primary CTA in the Figma style"** — `#000000` background, `#ffffff` text, 50px radius pill, `10px 20px` padding, button font (20/480/-0.005em). Hover background `#1e1e1e`. No transform.

- **"Make a pricing card in the Figma style"** — `#ffffff` background, 1px `#e6e6e6` border, 24px radius, 24px padding. h3 figmaSans 26/540, body 16/330, pill CTA at the bottom. No shadow.

- **"Render a navigation eyebrow in the Figma style"** — figmaMono uppercase 18/400 with `+0.03em` (0.54px) tracking. Color: `#000000` ink. Sits above the section's display heading.

- **"Design a marquee strip in the Figma style"** — `#000000` band, 36px height, white text in mono caption-small, horizontal-scroll announcement. Sits directly beneath the white nav.

### Iteration Guide

1. Start with the scene. Decide which color-block this section lives in (white / lime / lilac / cream / mint / pink / coral / navy). The scene is the foundation.
2. Set type next. figmaSans display at weight 340 with negative tracking; mono eyebrow above.
3. Apply the 50px pill CTA. Black on light scenes, white on inverse scenes. No other button shape.
4. Cards live at 24px radius with 1px hairline. No shadows on chrome.
5. Section padding: 96px standard, 128px between major regions, 48px inside color-blocks.
6. Color-block scenes always include a figmaMono uppercase eyebrow above the display headline.
7. Don't introduce a chromatic accent — the product palette stays inside screenshots.
8. Test contrast on every pastel scene — pastels read at AAA on body sizes; tighten weights on display if not.
