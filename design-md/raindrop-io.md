---
name: Raindrop.io
tagline: White paper, system-ui sans, soft watercolor blob backgrounds, and a vivid `#0b7ed0` blue CTA — a bookmark manager that ships like a creative-tool sketch.
author: webdesignhot
source_url: https://raindrop.io
spec: design.md/v1.5
quality: curated
featured: false
categories: [saas, design-tools]
tags: [light, minimal, sans, soft, organic, playful, cool]
preview_swatch: ['#ffffff', '#0b7ed0', '#5ec5d8']
related: [notion, things-app, hashnode]
description: 'Raindrop.io''s site mixes Apple system-ui pragmatism with watercolor whimsy — paper-white canvas, system-stack sans for every type role, and pastel blob illustrations (soft mint, blush pink, lilac, dusty teal) drifting around the hero. The brand mark is a blue-to-cyan gradient cloud, the primary CTA is a vivid `#0b7ed0` pill at 8px radius, and the page reads as a creative tool more than a productivity SaaS.'

colors:
  bg: '#ffffff'                     # paper-white canvas
  bg-soft: '#fafbfc'                # subtle cool grey nested panel
  bg-tinted: '#f7f9fb'              # softly tinted section band
  surface: '#f4f6f8'                # card surface
  surface-raised: '#eef1f4'         # hovered card
  surface-overlay: '#ffffff'        # popover (white over white with shadow)
  text: '#000000'                   # primary body copy — true black
  text-strong: '#0a0a0a'            # display copy
  text-secondary: '#333333'         # "Download" link in nav
  text-muted: '#7a7a82'             # captions, meta
  text-soft: '#a8a8b0'              # tertiary
  text-faint: '#c8c8d0'             # disabled
  text-on-brand: '#ffffff'          # text on blue CTA
  brand: '#0b7ed0'                  # primary blue CTA
  brand-hover: '#0964a8'            # pressed state
  brand-active: '#0a548d'           # deep press
  brand-soft: '#e6f1f9'             # 8% blue overlay (rare)
  brand-cyan: '#5ec5d8'             # cyan half of brand gradient
  brand-blue-deep: '#1e7bd9'        # deep blue half of brand gradient
  accent-mint: '#cce8d4'            # soft watercolor blob — top right
  accent-mint-deep: '#9ed4ad'       # deeper mint accent edge
  accent-pink: '#ffd7d7'            # soft pink blob — bottom left, announcement chip
  accent-pink-deep: '#f5b8b8'       # deeper pink edge
  accent-lilac: '#e8d4f0'           # lilac blob accent
  accent-lilac-deep: '#c8a8d8'      # deeper lilac edge
  accent-teal: '#b8d8d4'            # dusty teal blob
  accent-teal-deep: '#88b8b0'       # deeper teal edge
  accent-yellow: '#fde68a'          # rare warm yellow blob
  link: '#0b7ed0'                   # links pick up brand
  link-hover: '#0964a8'             # hover deepens
  border: '#0000001a'               # 10% black hairline
  border-soft: '#00000010'          # 6% black for nested
  border-strong: '#00000033'        # 20% black for selected
  focus-ring: '#0b7ed0'             # blue focus ring
  selection-bg: '#0b7ed0'
  selection-text: '#ffffff'
  shadow: 'rgba(0,0,0,0.08)'
  shadow-tinted: 'rgba(11,126,208,0.12)'
  success: '#34c759'
  warning: '#ffcc00'
  danger: '#ff3b30'
  info: '#5ac8fa'
  on-brand: '#ffffff'

typography:
  display:
    family: '-apple-system, BlinkMacSystemFont, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['kern', 'liga']
  body:
    family: '-apple-system, BlinkMacSystemFont, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500]
    opentype-features: ['kern', 'liga', 'tnum']
  mono:
    family: '"SF Mono", "Menlo", ui-monospace, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 64, weight: 700, lineHeight: 1.10, tracking: '-0.02em', family: display }
    display-large:   { size: 50, weight: 600, lineHeight: 1.15, tracking: '-0.015em', family: display }
    display-medium:  { size: 42, weight: 600, lineHeight: 1.18, tracking: '-0.012em', family: display }
    h1:              { size: 50, weight: 600, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h2:              { size: 36, weight: 600, lineHeight: 1.20, family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.30, family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.35, family: body }
    h5:              { size: 17, weight: 600, lineHeight: 1.40, family: body }
    body-large:      { size: 19, weight: 400, lineHeight: 1.55, family: body }
    body:            { size: 17, weight: 400, lineHeight: 1.55, family: body }
    body-small:      { size: 15, weight: 400, lineHeight: 1.50, family: body }
    label:           { size: 13, weight: 500, family: body, tracking: '0.01em' }
    label-tabular:   { size: 13, weight: 500, family: body, tracking: '0', opentype: 'tnum' }
    caption:         { size: 12, weight: 400, family: body, lineHeight: 1.40 }
    code-inline:     { size: 14, weight: 400, family: mono }
    code-block:      { size: 13, weight: 400, family: mono, lineHeight: 1.55 }
    code-label:      { size: 11, weight: 500, family: mono, tracking: '0.04em' }

radius:
  micro: 3          # default text-link radius
  sm: 8             # primary CTA pill (observed)
  md: 12            # secondary card
  lg: 16            # large card
  xl: 24            # featured shell
  featured: 32      # hero panel
  pill: 9999        # small chip, status

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
    section-lg: 128

layout:
  page-width: 1180
  prose-width: 680
  header-height: 64
  container: 1180
  gutter: 24
  rhythm: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.16, 1, 0.3, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-organic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  duration-fast: 150
  duration-standard: 280
  duration-slow: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce — watercolor blob drift becomes static; only opacity transitions'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: '0 1px 2px rgba(0,0,0,0.04)'
  standard: '0 4px 12px rgba(0,0,0,0.08)'
  elevated: '0 12px 28px rgba(0,0,0,0.10)'
  deep: '0 24px 56px rgba(0,0,0,0.14)'
  ring: '0 0 0 3px rgba(11,126,208,0.30)'
  brand-glow: '0 8px 24px rgba(11,126,208,0.20)'

accessibility:
  contrast-text-on-bg: 21.0          # 000 on ffffff — AAA, max
  contrast-text-on-brand: 4.6        # ffffff on 0b7ed0 — AA at body, AAA at large
  contrast-text-secondary: 12.6      # 333 on ffffff — AAA
  focus-ring: '3px solid rgba(11,126,208,0.30), 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'tab order DOM-based, skip-link to #main, all CTAs reachable'

components:
  button-primary:
    bg: '#0b7ed0'
    text: '#ffffff'
    radius: 8
    padding: '12px 24px'
    font: 'body, 16px, weight 600'
    hover: 'bg #0964a8, brand-glow shadow'
    use: 'primary CTA — "Get Raindrop.io," "Sign up free"'
  button-ghost:
    bg: 'transparent'
    text: '#0b7ed0'
    radius: 8
    padding: '12px 24px'
    border: '1px solid #0b7ed0'
    hover: 'bg rgba(11,126,208,0.08)'
    use: 'secondary action'
  button-link:
    bg: 'transparent'
    text: '#0b7ed0'
    padding: '0'
    hover: 'text #0964a8, underline'
    use: 'inline action — "Download" in nav uses this with #333 instead'
  button-danger:
    bg: 'transparent'
    text: '#ff3b30'
    border: '1px solid #ff3b30'
    radius: 8
    hover: 'bg rgba(255,59,48,0.08)'
    use: 'rare destructive action'
  card:
    bg: '#ffffff'
    border: '1px solid rgba(0,0,0,0.10)'
    radius: 12
    padding: '24px'
    hover: 'border rgba(0,0,0,0.20), shadow standard'
    use: 'feature card on canvas'
  card-tinted:
    bg: '#f4f6f8'
    border: 'none'
    radius: 16
    padding: '32px'
    use: 'cards on white, no border, soft surface'
  input:
    bg: '#ffffff'
    text: '#000000'
    placeholder: '#a8a8b0'
    border: '1px solid rgba(0,0,0,0.20)'
    radius: 8
    padding: '12px 16px'
    focus: 'border #0b7ed0, ring 3px #0b7ed0 at 30% alpha'
    use: 'email capture, search'
  badge:
    bg: '#f4f6f8'
    text: '#7a7a82'
    radius: 9999
    padding: '4px 10px'
    font: 'label, 12px, weight 500'
    use: 'status, version chip'
  badge-pink:
    bg: '#ffd7d7'
    text: '#8a3a3a'
    radius: 9999
    padding: '6px 14px'
    font: 'label, 13px, weight 500'
    use: 'announcement chip — "New: AI Assistant" — the only saturated chip on the page'
  nav-link:
    text: '#333333'
    hover: 'text #000000'
    active: 'text #000000'
    spacing: '24px between items'
    use: 'top nav'
  watercolor-blob:
    fill: 'accent-mint / accent-pink / accent-lilac / accent-teal'
    border: 'none'
    radius: 'organic SVG'
    opacity: 0.6
    use: 'decorative atmosphere drifting around hero — never a system component'

dark-mode: 'light-only — no dark variant offered for marketing. The watercolor palette only works on white.'

lineage:
  summary: |
    Raindrop.io''s site lives at the intersection of Apple system
    pragmatism and watercolor sketchbook — every typographic choice is
    system-ui (no custom web font, the way Things and Apple Mac App
    Store use the OS face), but the visual layer adds soft pastel
    blob illustrations drifting around the hero in mint, blush pink,
    lilac, and dusty teal. The brand mark is a blue-to-cyan
    gradient cloud (`#1e7bd9 → #5ec5d8`), and the primary CTA is a
    vivid `#0b7ed0` pill at a conservative 8px radius — the same
    blue Stripe and Linear flirt with, but warmer. The
    "New: AI Assistant" announcement chip is a soft-pink pill, the
    only saturated chip on the page. Where Things commits fully to
    Apple''s restraint and Notion commits to editorial weight,
    Raindrop sits between them — system-ui for legibility, but
    watercolor for personality. The page reads more like a
    creative-tool''s landing (Procreate, Pixelmator) than a typical
    productivity SaaS, which matches Raindrop''s positioning as
    "for creatives, built for coders".
  influences:
    - name: 'Apple Mac App Store'
      role: 'System-ui typography, white canvas, no custom web fonts.'
      url: https://www.apple.com/app-store/
    - name: 'Procreate / Pixelmator'
      role: 'Watercolor blob accents and pastel-pink announcements as creative-tool brand vocabulary.'
      url: https://procreate.com
    - name: 'Stripe / Linear'
      role: 'Single confident-blue action color over a near-monochrome canvas.'
      url: https://stripe.com
    - name: 'Things 3 (Cultured Code)'
      role: 'System-ui body + restraint discipline — Things is the cleaner sibling Raindrop occasionally references.'
      url: https://culturedcode.com/things/
    - name: 'Hashnode / Mintlify'
      role: 'Soft pastel decoration as a developer-friendly aesthetic.'
      url: https://hashnode.com
---

## 1. Visual Theme & Atmosphere

Raindrop.io''s site is system-ui pragmatism with watercolor whimsy laid on top. The canvas stays paper-white, the typography is unstyled `-apple-system, system-ui` (so SF Pro on Mac, Segoe UI on Windows, Roboto on Android), and soft pastel blob illustrations — mint, blush pink, lilac, dusty teal — drift around the hero like watercolor washes on a sketch.

The brand mark is a blue-to-cyan gradient cloud (`#1e7bd9 → #5ec5d8`), the primary CTA is a vivid `#0b7ed0` pill at a conservative 8px radius, and the announcement chip ("New: AI Assistant") is a soft-pink pill — the only saturated chip on the page. The H1 "All-in-one bookmark manager" sets at 50px weight 600, body at 17px on 1.55 line-height. Everything reads instantly because nothing is loading; the system fonts render before the watercolor SVGs paint in.

The watercolor blobs are the page''s identity. Most productivity SaaS sites stay monochromatic or commit to one accent gradient; Raindrop sprinkles four pastels around the hero like decorative washes — mint near the top right, blush pink near the bottom left, lilac drifting beside the product mockup, dusty teal in a section transition. The blobs have organic SVG shapes (no defined radius), opacity around 60%, and never carry content. They''re atmosphere.

The decision to use system-ui exclusively is the brand''s most disciplined move. Loading SF Pro Display via web font would shift the page''s weight class — Raindrop instead lets each platform render in its own native face. SF Pro on Mac, Segoe UI on Windows, Roboto on Android. The page feels native everywhere because it *is* native everywhere. This is the same discipline Apple uses on its Mac App Store landing pages.

Density is balanced. The hero leaves significant room around the H1 and CTA, but the feature grid is dense — three-up cards with tight 24px gutters. Pricing is a tight three-column comparison. The page never feels sparse; it feels organized like a creative-tool''s landing rather than a productivity tool''s pitch.

**Key Characteristics**
- Paper-white `#ffffff` canvas — never tinted off-white
- System-ui type stack only — no custom web fonts, no FOUT
- Watercolor pastel blobs (mint / pink / lilac / teal) drift around hero
- Single saturated action: `#0b7ed0` blue CTA pill at 8px radius
- Announcement chip is pink (`#ffd7d7`) — the only other saturated element
- Brand mark is a blue-to-cyan gradient cloud icon
- 10% black hairlines for borders — never grey, always alpha-black
- Cool tonal layering for depth: `#fff` → `#fafbfc` → `#f4f6f8`
- True black `#000` for body — not soft `#0a` or `#1a`
- Reads as creative tool (Procreate / Pixelmator), not productivity SaaS

## 2. Color Palette & Roles

### Primary
- **bg** `#ffffff`: paper-white canvas — never tinted.
- **text** `#000000`: primary body copy, true black — Raindrop chooses pure over soft.
- **brand** `#0b7ed0`: primary blue CTA — confident saturated blue, warmer than Stripe/Linear.

### Brand & Dark
- **brand-cyan** `#5ec5d8`: cyan half of brand gradient (logo cloud icon).
- **brand-blue-deep** `#1e7bd9`: deep blue half of brand gradient.
- **brand-hover** `#0964a8`: pressed state, deeper blue.
- **brand-active** `#0a548d`: deep press.
- **brand-soft** `#e6f1f9`: 8% blue overlay — used on tinted info bands, rare.

### Accent — Watercolor Blobs
- **accent-mint** `#cce8d4`: soft mint blob — top-right of hero.
- **accent-mint-deep** `#9ed4ad`: deeper mint edge for depth.
- **accent-pink** `#ffd7d7`: soft pink blob — bottom-left, also announcement chip bg.
- **accent-pink-deep** `#f5b8b8`: deeper pink edge.
- **accent-lilac** `#e8d4f0`: lilac blob beside product mockup.
- **accent-lilac-deep** `#c8a8d8`: deeper lilac edge.
- **accent-teal** `#b8d8d4`: dusty teal blob in section transition.
- **accent-teal-deep** `#88b8b0`: deeper teal edge.
- **accent-yellow** `#fde68a`: rare warm yellow blob — used in single section.

### Interactive
- **link** `#0b7ed0`: inline links pick up brand.
- **link-hover** `#0964a8`: hover deepens to brand-hover.
- **focus-ring** `#0b7ed0`: 3px ring at 30% alpha at 2px offset.
- **selection-bg** `#0b7ed0` / **selection-text** `#ffffff`.

### Neutral Scale
- **text-strong** `#0a0a0a`: display peak, used for the H1 — softer than pure black.
- **text** `#000000`: body, primary.
- **text-secondary** `#333333`: nav "Download" link, secondary text.
- **text-muted** `#7a7a82`: caption, meta — note the cool grey, not warm.
- **text-soft** `#a8a8b0`: tertiary deck.
- **text-faint** `#c8c8d0`: disabled.

### Surface & Borders
- **bg-soft** `#fafbfc`: subtle cool grey nested panel — almost imperceptible.
- **bg-tinted** `#f7f9fb`: softly tinted section band.
- **surface** `#f4f6f8`: card surface — cool grey wash.
- **surface-raised** `#eef1f4`: hovered card.
- **border** `rgba(0,0,0,0.10)`: 10% black — never grey, always alpha-black for crispness on white.
- **border-soft** `rgba(0,0,0,0.06)`: 6% black for nested borders.
- **border-strong** `rgba(0,0,0,0.20)`: 20% black for selected / focused.

### Shadow Colors
- **shadow** `rgba(0,0,0,0.08)`: standard card shadow on white.
- **shadow-tinted** `rgba(11,126,208,0.12)`: brand-tinted glow on hover for CTA.
- Shadows are subtle, neutral by default. The brand-tinted shadow only appears under the primary CTA on hover.

### Semantic
- **success** `#34c759`: Apple system green.
- **warning** `#ffcc00`: Apple system yellow.
- **danger** `#ff3b30`: Apple system red.
- **info** `#5ac8fa`: Apple system blue.

The semantic palette is pulled directly from Apple''s system colors — another signal of the system-ui commitment.

## 3. Typography Rules

### Font Family

- **Primary display & body**: the system stack — `-apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Helvetica Neue, Helvetica, Arial, sans-serif`. Renders as SF Pro on Apple, Segoe UI on Windows, Roboto on Android, Helvetica fallback elsewhere.
- **Mono companion**: SF Mono on Apple, Menlo fallback. Used rarely — only inline code spans and code blocks in docs.
- **No custom web fonts**: the page''s lightness depends on this. There is no FOIT, no FOUT, no cumulative layout shift from font loading.
- **OpenType features**: `kern` and `liga` always on; `tnum` for tabular numbers in pricing.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | system-ui | 64 | 700 | 1.10 | -0.02em | kern | Optional larger hero |
| display-large | system-ui | 50 | 600 | 1.15 | -0.015em | kern | **H1 "All-in-one bookmark manager" — observed peak** |
| display-medium | system-ui | 42 | 600 | 1.18 | -0.012em | kern | Sub-hero |
| h1 | system-ui | 50 | 600 | 1.15 | -0.015em | kern | Article title |
| h2 | system-ui | 36 | 600 | 1.20 | 0 | kern | Section head ("Designed for creatives") |
| h3 | system-ui | 24 | 600 | 1.30 | 0 | kern | Sub-section, card title |
| h4 | system-ui | 20 | 600 | 1.35 | 0 | kern | Inline head |
| h5 | system-ui | 17 | 600 | 1.40 | 0 | kern | Small head |
| body-large | system-ui | 19 | 400 | 1.55 | 0 | kern, liga | Hero deck |
| body | system-ui | 17 | 400 | 1.55 | 0 | kern, liga | Default reading size |
| body-small | system-ui | 15 | 400 | 1.50 | 0 | kern | Card description |
| label | system-ui | 13 | 500 | 1.30 | 0.01em | kern | Tag, eyebrow |
| label-tabular | system-ui | 13 | 500 | 1.30 | 0 | tnum | Pricing rows |
| caption | system-ui | 12 | 400 | 1.40 | 0 | kern | Image caption |
| code-inline | SF Mono | 14 | 400 | 1.55 | 0 | — | Inline code spans (rare) |
| code-block | SF Mono | 13 | 400 | 1.55 | 0 | — | Code blocks (docs only) |
| code-label | SF Mono | 11 | 500 | 1.30 | 0.04em | — | Status, version chip — rare |

### Principles

- **System-ui is the entire type voice.** Loading a custom web font would shift the page''s weight class. Raindrop refuses.
- **Weight 600 is the display weight.** Not 700, not 800. Six-hundred is the system-ui weight that reads native on every platform.
- **Tracking is light.** Display gets `-0.015em` to `-0.02em`; body neutral. Never aggressive tracking — system fonts already render with platform-tuned spacing.
- **Body is true `#000`.** Soft body color (`#1a` or `#333`) is used for secondary text only. Primary body is uncompromised black for readability on white.
- **17px is the body baseline.** Not 16px. The bump matches Apple''s reading-app standard (Mail, Notes).
- **Mono is rare.** The page is consumer-facing, not developer-first; mono only appears in docs, never on marketing.
- **No condensed weights.** SF Pro Compressed and Roboto Condensed don''t appear; the page breathes wide.

## 4. Component Stylings

### Buttons

**Primary (blue pill CTA)**
- Background: `#0b7ed0`
- Text: `#ffffff`, system-ui 16px weight 600
- Padding: 12px 24px
- Radius: 8px
- Border: none
- Hover: bg `#0964a8`, `0 8px 24px rgba(11,126,208,0.20)` brand-glow shadow
- Active: bg `#0a548d`, no shadow
- Focus: 3px ring `rgba(11,126,208,0.30)` at 2px offset
- Use: primary CTA — "Get Raindrop.io," "Sign up free"

**Ghost (secondary)**
- Background: transparent
- Text: `#0b7ed0`, system-ui 16px weight 600
- Padding: 12px 24px
- Radius: 8px
- Border: 1px solid `#0b7ed0`
- Hover: bg `rgba(11,126,208,0.08)`
- Use: secondary action ("Learn more")

**Link (text-only)**
- Background: none
- Text: `#0b7ed0`, system-ui 16px weight 500
- Padding: 0
- Hover: text `#0964a8`, underline appears
- Use: inline action; the "Download" link in nav uses `#333333` instead of brand blue

**Danger (rare)**
- Background: transparent
- Text: `#ff3b30` (Apple system red)
- Border: 1px solid `#ff3b30`
- Radius: 8px
- Hover: bg `rgba(255,59,48,0.08)`
- Use: rare destructive action — never on marketing chrome

### Cards

**Standard feature card**
- Background: `#ffffff`
- Border: 1px solid `rgba(0,0,0,0.10)`
- Radius: 12px
- Padding: 24px
- Hover: border `rgba(0,0,0,0.20)`, shadow `0 4px 12px rgba(0,0,0,0.08)`
- Use: feature grid card

**Tinted card (no border)**
- Background: `#f4f6f8`
- Border: none
- Radius: 16px
- Padding: 32px
- Use: cards on white where the surface tint is the divider

**Featured card (large)**
- Background: `#ffffff`
- Border: 2px solid `#0b7ed0`
- Radius: 16px
- Padding: 32px
- Use: pricing recommended tier — blue border is the signal

### Badges & Chips

**Default tag**
- Background: `#f4f6f8`
- Text: `#7a7a82`, system-ui 12px weight 500
- Padding: 4px 10px
- Radius: 9999px (pill)
- Use: status, version chip

**Pink announcement chip — the page''s defining accessory**
- Background: `#ffd7d7`
- Text: `#8a3a3a`, system-ui 13px weight 500
- Padding: 6px 14px
- Radius: 9999px (pill)
- Optional: small icon prefix (sparkle, star)
- Use: announcement — "New: AI Assistant," "Just launched" — the only saturated chip on the page

### Inputs

- Background: `#ffffff`
- Text: `#000000`
- Placeholder: `#a8a8b0`
- Border: 1px solid `rgba(0,0,0,0.20)`
- Radius: 8px
- Padding: 12px 16px
- Focus: border `#0b7ed0`, 3px ring `rgba(11,126,208,0.30)`
- Use: email capture, search bar

### Navigation

- Background: `#ffffff` with subtle shadow on scroll
- Items: `#333333` default (not pure black, not brand blue)
- Hover: `#000000`, no underline
- Spacing: 24px between top-level items
- CTA: blue pill anchored right
- Mobile: hamburger reveals slide-down white panel with stacked items at h4 size

### Decorative

**Watercolor blobs** — organic SVG shapes filled with `accent-mint / pink / lilac / teal` at 60% opacity, no border, no defined radius. Sized roughly 400–800px wide and drift around hero modules. Positioned absolutely behind content. Decorative-only; carry no semantic content.

**Brand cloud icon** — the logo is a cloud-shape SVG with a linear gradient from `#1e7bd9` (deep blue, top-left) to `#5ec5d8` (cyan, bottom-right). Used in nav, hero decoration, and favicon.

**Product screenshot card** — shows the actual app chrome with realistic browser frame and `0 12px 28px rgba(0,0,0,0.10)` elevated shadow.

## 5. Layout Principles

### Spacing System
Base unit = 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Density observation: hero is sparse (96px+ vertical padding); feature grids are denser (24px gutters). Cards inside grids hold 24px internal padding.

### Grid & Container
Container max-width 1180px with 24px gutters. Hero is full-width with content centered. Feature grids run three-up at desktop, collapsing to two-up at tablet and single column at mobile. Prose-width sections cap at 680px.

### Whitespace Philosophy
Balanced — neither sparse like Tana nor dense like Polar. Section padding 64–96px vertical. Adjacent text elements get spacing roughly equal to their cap-height. The watercolor blobs occupy negative space, so the page reads as filled even when the content is sparse.

### Section Cadence
White → tinted (`#fafbfc` or `#f4f6f8`) → white. Sometimes a section gets a watercolor blob accent rather than a tonal shift. The pattern is editorial: hero (white + blobs) → feature grid (white) → testimonial (tinted) → pricing (white) → footer (tinted).

## 6. Shapes & Radius Scale

| Tier | Px | Use |
|------|----|-----|
| Micro | 3 | Inline text-link rounding (rare) |
| Small | 8 | **Primary CTA pill, input, secondary button** |
| Medium | 12 | Card |
| Large | 16 | Tinted card, featured card |
| XL | 24 | Featured shell |
| Featured | 32 | Hero panel |
| Pill | 9999 | Status chip, announcement chip |

The 8px CTA radius is conservative compared to peer creative tools (Procreate at 12px, Pixelmator at 10px). Going more rounded would tip Raindrop into iOS-native territory; the 8px keeps it cross-platform. Watercolor blobs have no defined radius — they''re organic SVG shapes.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | `#ffffff` flat | Canvas |
| 1 | `#fafbfc` flat | Subtle tinted nested panel |
| 2 | `#ffffff` + `1px rgba(0,0,0,0.10)` border | Card on canvas |
| 3 | `#ffffff` + border + `0 4px 12px rgba(0,0,0,0.08)` shadow | Hovered card |
| 4 | `#ffffff` + `0 12px 28px rgba(0,0,0,0.10)` shadow | Product screenshot, dropdown |
| 5 | `#ffffff` + `0 24px 56px rgba(0,0,0,0.14)` shadow | Modal |

**Shadow Philosophy**: Raindrop uses neutral shadows on white — soft, low opacity (0.08–0.14), short blur radius. The brand-tinted shadow (`rgba(11,126,208,0.12)`) only appears under the primary CTA on hover, where it acts as a subtle glow signaling "hover-able." Watercolor blobs themselves create the page''s decorative depth — they sit on top of the canvas with no border, behaving as atmospheric elevation rather than tonal layering.

## 8. Interaction & Motion

### Easing Curves
- **ease-standard** `cubic-bezier(0.4, 0, 0.2, 1)` — color, opacity, default.
- **ease-emphasized** `cubic-bezier(0.16, 1, 0.3, 1)` — overlay entrances.
- **ease-out** `cubic-bezier(0, 0, 0.2, 1)` — exits.
- **ease-organic** `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — watercolor blob drift, organic motion.

### Duration Buckets
- **fast** 150ms — hover state shifts.
- **standard** 280ms — overlay fade, card lift.
- **slow** 480ms — modal entrance, watercolor blob drift cycle.

### Per-Component Micro-States
- **Blue CTA hover** — bg shifts `#0b7ed0` → `#0964a8` over 150ms; brand-glow shadow appears over 280ms.
- **Card hover** — border darkens, shadow lifts from ambient to standard, both over 280ms.
- **Link hover** — color deepens to brand-hover; underline grows from 0 to 100% width over 200ms.
- **Watercolor blob drift** — subtle 8–12s loop with `transform: translateY(±8px)` on `ease-organic`. Disabled under reduced-motion.
- **Pink announcement chip** — slight scale (1.0 → 1.02) on hover over 200ms.

### Page Transitions
Hard cuts on navigation. Anchor scroll uses ease-standard at 600ms. Hero loads with a single 280ms fade (text + product mockup), no stagger.

### Reduced Motion Strategy
With `prefers-reduced-motion: reduce`, watercolor blob drift becomes static (no transform animation). Card lift collapses to opacity-only. CTA glow stays. Total motion budget under reduced-motion: 200ms max.

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)
- **Text on bg**: `#000` on `#ffffff` = **21:1** — AAA, maximum.
- **Text-secondary on bg**: `#333` on `#ffffff` = **12.6:1** — AAA.
- **Text-on-brand**: `#ffffff` on `#0b7ed0` = **4.6:1** — AA at body, AAA at large.
- **Text-muted on bg**: `#7a7a82` on `#ffffff` = **4.7:1** — AA body.
- **Pink chip text**: `#8a3a3a` on `#ffd7d7` = **6.0:1** — AA at all sizes.

### Focus Indicators
3px brand-tinted ring (`rgba(11,126,208,0.30)`) at 2px offset on all interactive elements. The lower-opacity ring softens the visual disruption while staying clearly visible. Outline solid, not dashed. Focus visible at all times.

### ARIA Patterns
- Top nav uses `<nav aria-label="Primary">`.
- Modals use `role="dialog"` with `aria-modal="true"`.
- Form inputs have visible labels.
- Watercolor blob SVGs have `aria-hidden="true"` (decorative only).
- Announcement chip is wrapped in `<aside aria-label="Announcement">`.

### Keyboard Navigation
- Tab order follows DOM.
- Skip-link to `#main` visible on focus.
- Modals trap focus, restore on close.
- Escape closes overlays.
- All interactive elements reachable via Tab.

### Screen Reader Hints
- Decorative SVGs hidden with `aria-hidden`.
- Icon-only buttons carry `aria-label`.
- Live regions on form validation.

### Reduced Motion
Honored throughout — see §8.

## 10. Responsive Behavior

### Breakpoints
| Name | Min-width |
|------|-----------|
| mobile | 0–640 |
| tablet | 641–1024 |
| desktop | 1025–1280 |
| wide | 1281+ |

### Touch Targets
Minimum 44×44px on mobile. The primary CTA grows to 48px height on touch.

### Collapsing Strategy
- **Hero**: 50px H1 drops to 36px at tablet, 28px at mobile.
- **Feature grid**: three-up → two-up → single column.
- **Watercolor blobs**: scale down at mobile (smaller blob count) to avoid visual crowding.
- **Nav**: full top bar → hamburger with slide-down white panel at h4 size.
- **Section padding**: 96px → 64px → 48px across breakpoints.

### Image Behavior
Product screenshots use `object-fit: contain` with realistic browser chrome. On mobile, they become full-width edge-to-edge with no chrome. Watercolor blobs scale fluidly with viewport.

### Container Queries
Used on the testimonial grid where card density depends on parent width.

## 11. Content & Voice

### Tone
Friendly, creative-tool register. Raindrop writes like a Procreate or Pixelmator landing — warm, plain, occasionally playful. Avoids both startup jargon and overly formal copy. Short sentences.

### Microcopy Patterns
- Buttons: imperative or product name — "Get Raindrop.io," "Sign up free," "Download."
- Errors: "We couldn''t save that. Please try again." (full sentence, polite).
- Success: "Saved to your collection." (descriptive, contextual).
- Empty states: "Nothing here yet. Add your first bookmark to get started." (instructive, friendly).

### CTA Verb Conventions
- "Get Raindrop.io" (product-named)
- "Sign up free" (qualified — "free" is a positioning move)
- "Download" (literal — used for app store links)
- "Learn more" (default for secondary)

The voice trusts the reader to be a creative or developer who knows what bookmarks are. No condescending explanation, no over-promised benefits.

## 12. Dark Mode & Theming

Raindrop is **light-only** for the marketing surface. The watercolor pastel palette only works on white — mint/pink/lilac/teal blobs would lose their delicate quality on a dark canvas. The app itself supports a dark mode (different palette entirely), but marketing stays on white as a deliberate brand choice.

If a dark variant were ever introduced for marketing, the entire visual language would need to shift — different palette, different decoration strategy, different brand mood. Raindrop has explicitly avoided this; the white + watercolor identity is the brand.

## 13. Lineage & Influences

Raindrop sits at the intersection of three traditions: Apple''s system-ui pragmatism (Mac App Store, Things 3), creative-tool watercolor whimsy (Procreate, Pixelmator), and confident-blue SaaS (Stripe, Linear). The synthesis is what makes it distinctive — most productivity tools commit to one of these registers; Raindrop blends all three.

The system-ui commitment is the deepest architectural choice — it places Raindrop in the Things 3 / Bear / Mac App Store lineage rather than the Notion / Linear / Vercel lineage. The watercolor pastels then add a second layer that creative tools (Procreate, Pixelmator Pro) use for personality. The single saturated blue CTA borrows from the SaaS confidence of Stripe/Linear, but warmer (Raindrop''s blue is `#0b7ed0`, slightly warmer than Linear''s indigo or Stripe''s royal).

The pink announcement chip is the single most copy-able decision: most SaaS sites would use blue or grey for announcements, Raindrop uses pastel pink and immediately reads as a creative tool. It''s the page''s positional flag.

**Named influences**:
- Apple Mac App Store (https://www.apple.com/app-store/) — system-ui typography, white canvas, no custom fonts.
- Procreate / Pixelmator (https://procreate.com) — watercolor pastels and creative-tool brand vocabulary.
- Stripe / Linear (https://stripe.com) — single confident-blue action color over near-monochrome.
- Things 3 / Cultured Code (https://culturedcode.com/things/) — system-ui body + restraint discipline.
- Hashnode / Mintlify (https://hashnode.com) — soft pastel decoration as developer-friendly aesthetic.

## 14. Do''s and Don''ts

### Do
- Use system-ui exclusively — no custom web fonts; the page''s lightness depends on it.
- Anchor canvas at pure `#ffffff` — never tinted off-white.
- Scatter watercolor blobs sparingly around hero modules — atmosphere, not a system component.
- Keep primary CTA at conservative 8px radius — fully-round pills tip into iOS-native territory.
- Use the soft pink (`#ffd7d7`) for the announcement chip alone.
- Use 10% alpha-black borders rather than grey — keeps borders crisp on white.
- Set body at 17px (matches Apple reading-app standard).
- Use weight 600 for display copy — system-ui-native, never 800.
- Apply brand-tinted shadow under the CTA on hover only — neutral shadows everywhere else.
- Honor `prefers-reduced-motion: reduce` — watercolor drift becomes static.

### Don''t
- Introduce a dark mode for the marketing surface — the watercolor palette only works on white.
- Use the soft pink for buttons — it belongs to the announcement chip alone.
- Add a custom display font — the contrast between system-ui pragmatism and watercolor whimsy is the brand''s defining tension.
- Make watercolor blobs interactive — they''re decorative atmosphere only.
- Push CTA radius to 12px or fully round — 8px is the sweet spot.
- Use bright orange or red as a second accent — the palette is blue + pastels, never warm-saturated.
- Set body in pure `#1a1a1a` instead of `#000` — Raindrop chooses true black for primary.
- Use grey borders — alpha-black `rgba(0,0,0,0.10)` is the page''s border discipline.
- Drop shadows on watercolor blobs — they sit flat as washes.
- Use exclamation marks excessively — the tone is warm, not breathless.

## 15. Agent Prompt Guide

### Quick Color Reference
- Bg: `#ffffff`
- Text: `#000000`
- Text secondary: `#333333`
- Text muted: `#7a7a82`
- Brand (blue CTA): `#0b7ed0`
- Brand cyan (gradient): `#5ec5d8`
- Accent pink (chip): `#ffd7d7`
- Accent mint (blob): `#cce8d4`
- Border: `rgba(0,0,0,0.10)`
- Text on brand: `#ffffff`

### Example Component Prompts

> "Create a Raindrop.io-style hero with a paper-white `#ffffff` canvas. The H1 ''All-in-one bookmark manager'' sets at 50px in system-ui weight 600 with `-0.015em` tracking in `#0a0a0a`. Body deck below in 19px regular `#000`. A primary CTA pill in `#0b7ed0` with white text at 8px radius. Behind the hero, scatter four organic SVG watercolor blobs in mint, pink, lilac, and teal at 60% opacity."

> "Design a Raindrop.io feature card: white `#ffffff` background, 1px solid `rgba(0,0,0,0.10)` border, 12px radius, 24px padding. Title in system-ui 24px weight 600, body in 15px regular `#7a7a82`. On hover, the border deepens to `rgba(0,0,0,0.20)` and a subtle `0 4px 12px rgba(0,0,0,0.08)` shadow appears."

> "Build a Raindrop.io announcement chip: soft pink `#ffd7d7` background, 13px system-ui weight 500 in `#8a3a3a`, padding 6px 14px, radius 9999 (pill). Text reads ''New: AI Assistant'' with a small sparkle icon prefix."

> "Create a Raindrop.io brand cloud icon: an organic cloud SVG shape with a linear gradient from `#1e7bd9` (top-left, deep blue) to `#5ec5d8` (bottom-right, cyan). Use as the logo mark in the top nav."

> "Design a Raindrop.io pricing card with white background, 2px solid `#0b7ed0` border to mark it as the recommended tier, 16px radius, 32px padding. Price displayed in system-ui 48px weight 700 with tabular numerals."

### Iteration Guide

1. **Start with `#ffffff` and system-ui** — no custom fonts, no tinted background. If the page looks anything but instantly native, you''re overcomplicating.
2. **Add a single saturated blue CTA at 8px radius** — `#0b7ed0` is the action color. Pill (9999) tips into iOS, 12px tips into creative-tool territory.
3. **Scatter watercolor blobs around hero** — four organic SVGs in mint/pink/lilac/teal at 60% opacity. Don''t exceed five blobs total per page.
4. **Use pink only for the announcement chip** — `#ffd7d7` is reserved. Pink buttons would break the system.
5. **Set body to 17px true black** — bumping to 18px tips into Notion territory; dropping to 15px tips into dense SaaS.
6. **Borders are 10% alpha-black, never grey** — `rgba(0,0,0,0.10)` keeps crisp on white.
7. **Use the brand-tinted CTA glow on hover** — `0 8px 24px rgba(11,126,208,0.20)` is the only tinted shadow on the page.
8. **Section rhythm: white → tinted → white** — alternate `#fff` and `#fafbfc` or `#f4f6f8` for section bands.
