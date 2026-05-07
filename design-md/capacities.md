---
name: Capacities
tagline: Cream-yellow canvas, Inter at 700 with a Crimson Pro serif fallback, and a yellow underline as page ornament — a PKM that thinks like a sketchbook.
updated_at: 2026-05-05T20:10:49+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://capacities.io
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [saas, ai]
tags: [light, editorial, sans, serif, warm, soft, organic, structured]
preview_swatch: ['#fff4d6', '#1a1a1f', '#f5c842']
related: [notion, granola, hashnode]
description: 'Capacities'' site dresses a personal-knowledge-management tool in sketchbook clothes. The hero canvas is a soft cream-yellow gradient, body copy in Inter is paired with Crimson Pro serif on emphasis words, and a hand-drawn yellow marker underline runs beneath the word "home" in the H1 — using ornament as a chromatic accent rather than a button. The action layer is a single dark CTA on cream.'

colors:
  bg: '#ffffff'                     # white base canvas
  bg-cream: '#fff4d6'               # warm cream-yellow hero gradient peak
  bg-cream-soft: '#fff9e8'          # softer cream gradient stop
  bg-soft: '#fef9e8'                # softer cream nested panel
  bg-tinted: '#fdf6e3'              # tinted section band
  surface: '#faf3df'                # warmer card surface
  surface-raised: '#f5edd0'         # hovered card
  surface-overlay: '#ffffff'        # popover (white over cream)
  text: '#1a1a1f'                   # primary body copy (oklch 0.39 darkened)
  text-strong: '#0e0f12'            # display copy
  text-muted: '#6b6770'             # captions and metadata
  text-soft: '#9a969f'              # tertiary
  text-faint: '#c4c0c8'             # disabled
  text-on-cta: '#ffffff'            # text on near-black CTA
  text-on-yellow: '#1a1a1f'         # text on yellow chip
  brand-yellow: '#f5c842'           # marker-underline accent, soft gold
  brand-yellow-deep: '#e6b430'      # deeper yellow for ornament shadow
  brand-yellow-soft: '#fce98c'      # softer yellow chip / pill bg
  brand-yellow-pale: '#fef4c2'      # palest yellow for tinted bg
  cta-bg: '#1a1a1f'                 # near-black primary CTA
  cta-text: '#ffffff'
  cta-hover: '#0e0f12'              # pressed state
  cta-active: '#000000'             # deep press
  link: '#1a1a1f'                   # links are body color
  link-hover: '#0e0f12'             # hover deepens
  link-underline: '#f5c842'         # links underlined in brand yellow
  border: '#0000001a'               # 10% black hairline
  border-soft: '#00000010'          # 6% black for nested
  border-strong: '#00000033'        # 20% black for selected
  border-cream: '#e8dfb8'           # warm border on cream
  focus-ring: '#1a1a1f'             # near-black focus ring
  selection-bg: '#fce98c'
  selection-text: '#1a1a1f'
  shadow: 'rgba(0,0,0,0.06)'
  shadow-warm: 'rgba(180,140,40,0.10)'   # warm tinted shadow on cream
  success: '#5b9a4f'
  warning: '#e6b430'
  danger: '#c4554d'
  info: '#5a8eb5'
  on-brand: '#1a1a1f'

typography:
  display:
    family: 'Inter, "Inter var", ui-sans-serif, "system-ui", sans-serif'
    weights: [600, 700]
    opentype-features: ['ss01', 'cv11', 'kern', 'liga']
  serif:
    family: '"Crimson Pro", Georgia, "Times New Roman", serif'
    weights: [400, 500]
    opentype-features: ['liga', 'kern', 'dlig', 'onum']
  body:
    family: 'Inter, "Inter var", ui-sans-serif, "system-ui", sans-serif'
    weights: [400, 500]
    opentype-features: ['kern', 'liga', 'tnum']
  mono:
    family: '"JetBrains Mono", "SF Mono", ui-monospace, Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 72, weight: 700, lineHeight: 1.08, tracking: '-0.025em', family: display, opentype: 'ss01' }
    display-large:   { size: 64, weight: 700, lineHeight: 1.10, tracking: '-0.02em', family: display, opentype: 'ss01' }
    display-medium:  { size: 52, weight: 700, lineHeight: 1.12, tracking: '-0.02em', family: display }
    h1:              { size: 64, weight: 700, lineHeight: 1.10, tracking: '-0.02em', family: display, opentype: 'ss01' }
    h2:              { size: 48, weight: 700, lineHeight: 1.15, tracking: '-0.01em', family: display }
    h3:              { size: 36, weight: 700, lineHeight: 1.25, family: display }
    h4:              { size: 24, weight: 600, lineHeight: 1.30, family: body }
    h5:              { size: 18, weight: 600, lineHeight: 1.40, family: body }
    serif-emphasis:  { size: 64, weight: 500, italic: true, family: serif, lineHeight: 1.10 }
    serif-h2:        { size: 48, weight: 500, italic: true, family: serif, lineHeight: 1.15 }
    body-large:      { size: 19, weight: 400, lineHeight: 1.60, family: body }
    body:            { size: 17, weight: 400, lineHeight: 1.60, family: body }
    body-small:      { size: 15, weight: 400, lineHeight: 1.55, family: body }
    label:           { size: 13, weight: 500, family: body, tracking: '0.02em' }
    label-tabular:   { size: 13, weight: 500, family: body, tracking: '0', opentype: 'tnum' }
    caption:         { size: 12, weight: 400, family: body, lineHeight: 1.40 }
    code-inline:     { size: 14, weight: 400, family: mono }
    code-block:      { size: 13, weight: 400, family: mono, lineHeight: 1.55 }
    code-label:      { size: 11, weight: 500, family: mono, tracking: '0.04em' }

radius:
  micro: 4
  sm: 6             # default button (observed)
  md: 8             # secondary card
  lg: 12            # card
  xl: 16            # featured card
  featured: 24      # hero shell
  pill: 9999        # announcement chip

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
  page-width: 1200
  prose-width: 680
  header-height: 64
  container: 1200
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
  reduced-motion: 'respects prefers-reduced-motion: reduce — marker-underline draw animation disabled; only opacity transitions'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: '0 1px 2px rgba(0,0,0,0.04)'
  standard: '0 4px 16px rgba(180,140,40,0.10)'   # warm tinted card shadow
  elevated: '0 12px 32px rgba(180,140,40,0.14)'   # warm tinted dropdown
  deep: '0 24px 56px rgba(0,0,0,0.10)'
  ring: '0 0 0 3px rgba(26,26,31,0.20)'
  cream-glow: 'inset 0 0 0 1px #e8dfb8, 0 8px 24px rgba(245,200,66,0.15)'

accessibility:
  contrast-text-on-bg: 17.6           # 1a1a1f on ffffff — AAA
  contrast-text-on-cream: 14.2        # 1a1a1f on fff4d6 — AAA
  contrast-text-on-cta: 17.0          # ffffff on 1a1a1f — AAA
  contrast-text-muted-on-cream: 5.8   # 6b6770 on fff4d6 — AA body
  focus-ring: '3px solid rgba(26,26,31,0.20), 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'tab order DOM-based, skip-link to #main, all CTAs reachable'

components:
  button-primary:
    bg: '#1a1a1f'
    text: '#ffffff'
    radius: 6
    padding: '12px 24px'
    font: 'body, 16px, weight 500'
    hover: 'bg #0e0f12, no transform'
    use: 'primary CTA — "Get started," "Try Capacities"'
  button-ghost:
    bg: 'transparent'
    text: '#1a1a1f'
    radius: 6
    padding: '12px 24px'
    border: '1px solid #0000001a'
    hover: 'border #0000003a, bg #0000000a'
    use: 'secondary action — "Learn more"'
  button-link:
    bg: 'transparent'
    text: '#1a1a1f'
    padding: '0'
    underline: '#f5c842 (yellow brand)'
    hover: 'text #0e0f12, underline thickens'
    use: 'inline action with yellow underline'
  button-danger:
    bg: 'transparent'
    text: '#c4554d'
    border: '1px solid #c4554d'
    radius: 6
    hover: 'bg rgba(196,85,77,0.08)'
    use: 'rare destructive action'
  card:
    bg: '#faf3df'
    border: '1px solid #0000001a'
    radius: 12
    padding: '24px'
    hover: 'border #0000003a, no transform'
    use: 'feature card on cream'
  card-white:
    bg: '#ffffff'
    border: '1px solid #0000001a'
    radius: 12
    padding: '24px'
    use: 'cards on cream sections — invert tier'
  card-featured:
    bg: '#faf3df'
    border: '1px solid #1a1a1f'
    radius: 16
    padding: '32px'
    shadow: 'cream-glow inset border + 0 8px 24px rgba(245,200,66,0.15)'
    use: 'featured card, pricing recommended'
  input:
    bg: '#ffffff'
    text: '#1a1a1f'
    placeholder: '#9a969f'
    border: '1px solid #0000001a'
    radius: 6
    padding: '12px 16px'
    focus: 'border #1a1a1f, ring 3px rgba(26,26,31,0.20)'
    use: 'email capture, search'
  badge:
    bg: '#fce98c'
    text: '#1a1a1f'
    radius: 9999
    padding: '4px 12px'
    font: 'label, 13px, weight 500'
    use: 'announcement pill — "A studio for your mind"'
  badge-tag:
    bg: '#faf3df'
    text: '#6b6770'
    radius: 4
    padding: '4px 8px'
    font: 'label, 12px, weight 500, tracking 0.02em'
    use: 'feature tag, version chip'
  nav-link:
    text: '#1a1a1f'
    hover: 'text #0e0f12, underline #f5c842 grows'
    active: 'underline #f5c842 visible'
    spacing: '24px between items'
    use: 'top nav'
  marker-underline:
    color: '#f5c842'
    height: '12px'
    style: 'hand-drawn brushstroke SVG, slightly irregular edges, lower-third position under text'
    use: 'ornament under the word "home" in H1 — ornament, not a system component'

dark-mode: 'light-only — no dark variant for marketing. The cream is the brand.'

lineage:
  summary: |
    Capacities is a personal-knowledge-management tool, and its design
    rejects the dark-slab Roam / Logseq aesthetic in favor of a
    sketchbook palette. The hero gradient is a warm cream-yellow
    (`#fff4d6` peak), body is Inter at 700 (sized 64px on a tight
    1.10 line-height for the H1), and the page''s most distinctive
    move is a hand-drawn yellow marker line underneath the word
    "home" — ornament as accent, the way a Field Notes interior
    diagram would mark a key term. Section headings occasionally
    swap into Crimson Pro italic for editorial emphasis (the
    serif:Inter ratio is roughly 1:6 — a flourish, not a system).
    The action layer is a single near-black CTA pill at 6px radius
    — the conservative radius is what keeps the page from tipping
    into "playful" territory; it stays closer to Notion''s editorial
    rigor than to a hand-drawn brand. Capacities is positioning
    itself as Notion-but-warmer — same warm-cream + serif emphasis
    DNA, but with sketchbook ornament where Notion uses chromatic
    restraint.
  influences:
    - name: 'Notion'
      role: 'Warm-cream canvas + serif emphasis + sans body, the editorial PKM template.'
      url: https://www.notion.com
    - name: 'Field Notes'
      role: 'Sketchbook ornament — marker underlines and hand-drawn dingbats as chromatic accent.'
      url: https://fieldnotesbrand.com
    - name: 'Tailwind CSS'
      role: 'Inter at 700 with tight tracking as the dev-tool display convention; Capacities uses the same display weight.'
      url: https://tailwindcss.com
    - name: 'Crimson Pro (Sebastian Kosch)'
      role: 'Editorial italic serif for emphasis moments — book-grade typography.'
      url: https://fonts.google.com/specimen/Crimson+Pro
    - name: 'Roam Research / Obsidian'
      role: 'PKM contemporaries Capacities deliberately rejects — dark slab aesthetic vs Capacities'' warm cream.'
      url: https://roamresearch.com
---

## 1. Visual Theme & Atmosphere

Capacities'' site is a personal knowledge tool dressed as a sketchbook. The hero canvas is a gradient that washes from white into a warm cream-yellow (`#fff4d6` peak), and the H1 ("A home for everything you think, learn, and create.") sets at 64px in Inter weight 700. The page''s defining ornament — a hand-drawn yellow marker underline running beneath the word "home" — is the single most identifying decoration. It''s ornament as accent, the way a Field Notes interior diagram marks a key term.

The action layer is a single near-black CTA pill (`#1a1a1f` background, white text, 6px radius). Capacities deliberately keeps the radius conservative — going to 12px or fully round would tip the page into hand-drawn / consumer-craft territory; 6px keeps it closer to Notion''s editorial rigor. The button is the only chromatic action on the page; everything else is cream, near-black, and the brand yellow `#f5c842`.

Body copy in Inter 400 at 17px is occasionally interrupted by **Crimson Pro** italic for editorial emphasis. The serif appears in roughly 1 in 6 headings, never on body, behaving as a flourish rather than a system. When Crimson Pro shows up, it''s usually italic at the same point size as the surrounding sans — the contrast is voice-based, not size-based. This is the typographic discipline Notion popularized for PKM tools.

The cream gradient is the page''s structural device. Every section transition is a soft fade from cream to white or back, never a hard boundary. The page never has a "hero ends here, features begin" line; instead the cream washes gradually, and section blocks emerge from it. Cards on cream use a warmer surface (`#faf3df`) with 10% alpha-black hairlines — depth comes from warm tonal layering, not shadow.

Density is balanced. The hero is sparse with generous breathing room around the marker-underline H1; feature grids run three-up at desktop with moderate 24px gaps. Pricing is a tight three-column comparison. The page feels like a sketchbook page that happens to have software content on it — not a software page that pretends to be a sketchbook.

**Key Characteristics**
- Cream-yellow gradient hero (`#fff4d6` peak fading into white)
- Inter at weight 700 for display, Crimson Pro italic for rare emphasis
- Hand-drawn yellow marker underline as defining ornament (`#f5c842`)
- Single near-black CTA pill at conservative 6px radius
- Yellow announcement chip ("A studio for your mind") — pill 9999
- Warm tonal layering for cards: `#fff` → `#fef9e8` → `#fff4d6` → `#faf3df`
- 10% alpha-black borders (matches Notion convention)
- Warm tinted shadows: `rgba(180,140,40,0.10)` instead of neutral
- Yellow underlines on links and nav items (subtle ornament)
- Reads as Notion-but-warmer with sketchbook ornament

## 2. Color Palette & Roles

### Primary
- **bg** `#ffffff`: white base canvas — the gradient''s starting stop.
- **bg-cream** `#fff4d6`: warm cream-yellow hero gradient peak — the page''s defining mood.
- **text** `#1a1a1f`: primary body copy, near-black with a slight warm cast (oklch 0.39).
- **cta-bg** `#1a1a1f`: near-black primary CTA — same hue as body text.

### Brand & Dark
- **bg-cream-soft** `#fff9e8`: softer cream gradient stop (between bg and bg-cream).
- **bg-soft** `#fef9e8`: softer cream nested panel.
- **bg-tinted** `#fdf6e3`: tinted section band — even warmer.
- **surface** `#faf3df`: warmer card surface — the dominant card bg on cream sections.
- **surface-raised** `#f5edd0`: hovered card.
- **brand-yellow-pale** `#fef4c2`: palest yellow for tinted bg.
- **text-strong** `#0e0f12`: display peak — slightly darker than body for hierarchy.

### Accent
- **brand-yellow** `#f5c842`: marker-underline accent, soft gold — the page''s identifying chromatic move.
- **brand-yellow-deep** `#e6b430`: deeper yellow for ornament shadow / press state.
- **brand-yellow-soft** `#fce98c`: softer yellow chip / announcement pill bg.
- **link-underline** `#f5c842`: links underlined in brand yellow as a subtle ornament.

### Interactive
- **link** `#1a1a1f`: links are body color (no blue link convention).
- **link-hover** `#0e0f12`: hover deepens.
- **focus-ring** `#1a1a1f`: 3px near-black ring at 20% alpha at 2px offset.
- **selection-bg** `#fce98c` / **selection-text** `#1a1a1f`: text selection inverts to soft yellow.

### Neutral Scale
- **text** `#1a1a1f`: body, primary copy.
- **text-strong** `#0e0f12`: display peak.
- **text-muted** `#6b6770`: caption, metadata.
- **text-soft** `#9a969f`: tertiary deck.
- **text-faint** `#c4c0c8`: disabled.

### Surface & Borders
- **surface-overlay** `#ffffff`: popover surfaces (white over cream).
- **border** `#0000001a`: 10% black hairline — Notion convention.
- **border-soft** `#0000000a`: 6% black for nested.
- **border-strong** `#0000003a`: 20% black for selected / focused.
- **border-cream** `#e8dfb8`: warm border on cream — slightly tinted.

### Shadow Colors
- **shadow** `rgba(0,0,0,0.06)`: standard neutral shadow.
- **shadow-warm** `rgba(180,140,40,0.10)`: warm tinted shadow on cream — the page''s defining shadow color.
- Shadows are warm-tinted on cream sections, neutral on white. This is the elevation discipline.

### Semantic
- **success** `#5b9a4f`: muted sage green, warm-shifted.
- **warning** `#e6b430`: deep yellow — overlaps with brand.
- **danger** `#c4554d`: muted terracotta red.
- **info** `#5a8eb5`: muted chambray blue.

The semantic palette is muted and warm-shifted to match the cream canvas — saturated greens and reds would clash with the sketchbook mood.

## 3. Typography Rules

### Font Family

- **Primary display & body**: `Inter` (or `Inter var` with variable weight). Tailwind''s default sans, paired with the dev-tool / PKM convention of weight 700 + tight tracking for display.
- **Editorial accent**: `Crimson Pro` (Sebastian Kosch) — a real licensed serif for emphasis moments. Falls back to Georgia, Times New Roman.
- **Mono companion**: JetBrains Mono / SF Mono — used rarely, only in code blocks.
- **OpenType features**: `ss01` (stylistic set 1, alternate glyphs for `a` and `g`) on display; `dlig` discretionary ligatures and `onum` old-style figures on Crimson Pro for editorial feel; `tnum` for tabular numbers in pricing; `kern` and `liga` always.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| display-hero | Inter | 72 | 700 | 1.08 | -0.025em | ss01 | Optional larger hero |
| display-large | Inter | 64 | 700 | 1.10 | -0.02em | ss01 | **H1 observed peak** |
| display-medium | Inter | 52 | 700 | 1.12 | -0.02em | ss01 | Sub-hero, feature opener |
| h1 | Inter | 64 | 700 | 1.10 | -0.02em | ss01 | Page title |
| h2 | Inter | 48 | 700 | 1.15 | -0.01em | kern | Section head |
| h3 | Inter | 36 | 700 | 1.25 | 0 | kern | Sub-section |
| h4 | Inter | 24 | 600 | 1.30 | 0 | kern | Card title |
| h5 | Inter | 18 | 600 | 1.40 | 0 | kern | Inline head |
| serif-emphasis | Crimson Pro italic | 64 | 500 | 1.10 | 0 | dlig, onum | Italic word inside H1 — voice flourish |
| serif-h2 | Crimson Pro italic | 48 | 500 | 1.15 | 0 | dlig | Editorial section head |
| body-large | Inter | 19 | 400 | 1.60 | 0 | kern, liga | Hero deck |
| body | Inter | 17 | 400 | 1.60 | 0 | kern, liga | Default reading size |
| body-small | Inter | 15 | 400 | 1.55 | 0 | kern | Card description |
| label | Inter | 13 | 500 | 1.30 | 0.02em | kern | Tag, eyebrow |
| label-tabular | Inter | 13 | 500 | 1.30 | 0 | tnum | Pricing rows |
| caption | Inter | 12 | 400 | 1.40 | 0 | kern | Image caption |
| code-inline | JetBrains Mono | 14 | 400 | 1.55 | 0 | — | Inline code (rare) |
| code-block | JetBrains Mono | 13 | 400 | 1.55 | 0 | — | Code blocks (docs) |
| code-label | JetBrains Mono | 11 | 500 | 1.30 | 0.04em | — | Status, version |

### Principles

- **Inter weight 700 is the display weight.** Capacities follows the Tailwind / Vercel / dev-tool convention — heavy sans display with tight negative tracking. No condensed weights.
- **Crimson Pro is voice flourish, not size hierarchy.** When Crimson Pro appears, it''s italic at the same point size as surrounding Inter — the contrast is between sans and serif voices, not between large and small.
- **Tracking is aggressively negative on display.** `-0.02em` to `-0.025em` on sizes 48px and up. This is the dev-tool discipline.
- **Body line-height is generous.** 1.60 — slightly looser than Notion''s 1.55. This adds reading comfort on cream.
- **Body is 17px.** Matches Apple reading-app standard, slightly larger than Vercel''s 16px.
- **`ss01` is the Inter signature.** The single-storey `a` and `g` alternates in the stylistic set make Inter feel intentional rather than default.
- **Mono is rare.** Capacities is consumer/creative-facing, not developer-first; mono only appears in docs.
- **No dark serif.** Crimson Pro''s warmth pairs with cream; a colder serif (Tiempos, Playfair) would clash.

## 4. Component Stylings

### Buttons

**Primary (near-black CTA)**
- Background: `#1a1a1f`
- Text: `#ffffff`, Inter 16px weight 500
- Padding: 12px 24px
- Radius: 6px
- Border: none
- Hover: bg `#0e0f12`, no transform, no shadow
- Active: bg `#000000`
- Focus: 3px ring `rgba(26,26,31,0.20)` at 2px offset
- Use: primary CTA — "Get started," "Try Capacities"

**Ghost (secondary)**
- Background: transparent
- Text: `#1a1a1f`, Inter 16px weight 500
- Padding: 12px 24px
- Radius: 6px
- Border: 1px solid `rgba(0,0,0,0.10)`
- Hover: border `rgba(0,0,0,0.20)`, bg `rgba(0,0,0,0.04)`
- Use: secondary action — "Learn more"

**Link (text + yellow underline)**
- Background: none
- Text: `#1a1a1f`, Inter 16px weight 500
- Underline: `#f5c842` (brand yellow), 2px thick
- Padding: 0
- Hover: text `#0e0f12`, underline thickens to 3px
- Use: inline action — the yellow underline is the subtle ornament

**Danger (rare)**
- Background: transparent
- Text: `#c4554d`
- Border: 1px solid `#c4554d`
- Radius: 6px
- Hover: bg `rgba(196,85,77,0.08)`
- Use: rare destructive action

### Cards

**Standard card on cream**
- Background: `#faf3df` (warmer surface)
- Border: 1px solid `rgba(0,0,0,0.10)`
- Radius: 12px
- Padding: 24px
- Hover: border `rgba(0,0,0,0.20)`, no transform
- Use: feature card on cream sections

**White card on cream sections**
- Background: `#ffffff`
- Border: 1px solid `rgba(0,0,0,0.10)`
- Radius: 12px
- Padding: 24px
- Use: cards on cream that need to "lift" — invert tier

**Featured card (pricing recommended)**
- Background: `#faf3df`
- Border: 1px solid `#1a1a1f` (near-black border for emphasis)
- Radius: 16px
- Padding: 32px
- Shadow: `inset 0 0 0 1px #e8dfb8, 0 8px 24px rgba(245,200,66,0.15)` — cream-glow
- Use: featured card, pricing recommended

### Badges & Chips

**Announcement pill (yellow)**
- Background: `#fce98c` (soft yellow)
- Text: `#1a1a1f`, Inter 13px weight 500
- Padding: 4px 12px
- Radius: 9999px (pill)
- Optional: small icon prefix (sparkle, bulb)
- Use: announcement — "A studio for your mind," top-of-page hero deck

**Feature tag**
- Background: `#faf3df` (warm surface)
- Text: `#6b6770`, Inter 12px weight 500, tracking 0.02em
- Padding: 4px 8px
- Radius: 4px
- Use: feature tag, version chip — small ornament-only

### Inputs

- Background: `#ffffff`
- Text: `#1a1a1f`
- Placeholder: `#9a969f`
- Border: 1px solid `rgba(0,0,0,0.10)`
- Radius: 6px
- Padding: 12px 16px
- Focus: border `#1a1a1f`, 3px ring `rgba(26,26,31,0.20)`
- Use: email capture, search

### Navigation

- Background: cream gradient (transparent over hero, white on scroll)
- Items: `#1a1a1f` default
- Hover: text `#0e0f12`; yellow underline `#f5c842` grows from 0 to 100% width over 200ms
- Active: yellow underline visible at 100%
- Spacing: 24px between top-level items
- CTA: near-black pill anchored right
- Mobile: hamburger reveals slide-down cream panel with stacked items at h4 size

### Decorative

**Marker underline (the page''s defining ornament)**
- Color: `#f5c842` (brand yellow)
- Height: ~12px
- Style: hand-drawn brushstroke SVG with slightly irregular edges, positioned at the lower-third of the underlined word
- Usage: the H1 has a single marker underline on the word "home" or other key noun. Never used elsewhere on the page.

**Cream gradient backgrounds** — soft radial or linear gradient from `#ffffff` to `#fff4d6` at the hero and section transitions. The gradient is the page''s structural device.

**Object-graph mockup** — Capacities'' product UI rendered with cream backgrounds and warm borders rather than the typical neutral gray browser chrome. The product mockup itself adopts the cream palette.

## 5. Layout Principles

### Spacing System
Base unit = 4px. Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Density observation: hero is generous (96–128px vertical padding); feature grids are moderate (24–32px gaps). Cards inside grids hold 24px internal padding.

### Grid & Container
Container max-width 1200px with 24px gutters. Hero is full-width with content centered. Feature grids run three-up at desktop, two-up at tablet, single column at mobile. Prose-width sections cap at 680px.

### Whitespace Philosophy
Generous on hero, balanced through feature sections. Vertical section padding 96–128px on hero, 64–96px elsewhere. Adjacent text elements get spacing roughly equal to or greater than their cap-height.

### Section Cadence
Cream → white → cream → white. Section transitions are gradient fades, not hard boundaries. Sometimes a section is fully cream (`#fff4d6`), sometimes fully white, sometimes a soft cream tint (`#fdf6e3`). The fade is the rhythm.

## 6. Shapes & Radius Scale

| Tier | Px | Use |
|------|----|-----|
| Micro | 4 | Feature tag, small chip |
| Small | 6 | **Primary CTA, button, input — page default** |
| Medium | 8 | Secondary card |
| Large | 12 | Card |
| XL | 16 | Featured card |
| Featured | 24 | Hero shell |
| Pill | 9999 | Announcement chip, status badge |

The 6px CTA radius is the discipline. Granola uses 9999, Notion uses 8px — Capacities goes more conservative at 6px to keep the page from tipping into "playful." Compound radii are not used. The marker underline is a hand-drawn SVG, not a CSS border-radius.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | `#ffffff` or `#fff4d6` flat | Canvas (gradient transitions) |
| 1 | `#fef9e8` flat | Subtle nested panel |
| 2 | `#faf3df` + 1px `rgba(0,0,0,0.10)` border | Card on cream |
| 3 | `#ffffff` + 1px border + `0 4px 16px rgba(180,140,40,0.10)` warm shadow | Hovered card |
| 4 | `#ffffff` + `0 12px 32px rgba(180,140,40,0.14)` warm shadow | Dropdown, popover |
| 5 | `#ffffff` + `0 24px 56px rgba(0,0,0,0.10)` shadow | Modal |

**Shadow Philosophy**: Capacities uses warm-tinted shadows on cream sections — `rgba(180,140,40,0.10)` rather than neutral black. The amber tint comes from the cream canvas itself, making shadows feel native to the page rather than imposed. On white sections (deeper modals, footer), shadows return to neutral black. The featured card shadow combines an inset cream border (`#e8dfb8`) with a warm yellow halo (`rgba(245,200,66,0.15)`) — the cream-glow effect.

## 8. Interaction & Motion

### Easing Curves
- **ease-standard** `cubic-bezier(0.4, 0, 0.2, 1)` — color, opacity, default.
- **ease-emphasized** `cubic-bezier(0.16, 1, 0.3, 1)` — overlay entrances.
- **ease-out** `cubic-bezier(0, 0, 0.2, 1)` — exits.
- **ease-organic** `cubic-bezier(0.25, 0.46, 0.45, 0.94)` — marker-underline draw, organic motion.

### Duration Buckets
- **fast** 150ms — hover state shifts.
- **standard** 280ms — overlay fade, card lift.
- **slow** 480ms — modal entrance, marker-underline draw animation.

### Per-Component Micro-States
- **Marker underline draw** — on hero load, the yellow brushstroke draws from left to right over 800ms with `ease-organic`. SVG path animation (stroke-dashoffset). Disabled under reduced-motion.
- **Black CTA hover** — bg shifts `#1a1a1f` → `#0e0f12` over 150ms; no transform, no shadow change.
- **Card hover** — border deepens, warm shadow appears over 280ms.
- **Nav link hover** — yellow underline `#f5c842` grows from 0 to 100% width over 200ms with ease-standard.
- **Yellow chip hover** — slight scale (1.0 → 1.02) on hover over 200ms.

### Page Transitions
Hard cuts on navigation. Anchor scroll uses ease-standard at 600ms. Hero loads with marker-underline draw plus 280ms fade on text and product mockup.

### Reduced Motion Strategy
With `prefers-reduced-motion: reduce`, the marker-underline draw disables (stroke is pre-rendered, no animation). All transforms collapse to opacity-only. Total motion budget: 200ms max per transition.

## 9. Accessibility & A11y

### Contrast Pairs (WCAG)
- **Text on bg**: `#1a1a1f` on `#ffffff` = **17.6:1** — AAA.
- **Text on cream**: `#1a1a1f` on `#fff4d6` = **14.2:1** — AAA.
- **Text on CTA**: `#ffffff` on `#1a1a1f` = **17.0:1** — AAA.
- **Text-muted on cream**: `#6b6770` on `#fff4d6` = **5.8:1** — AA body.
- **Yellow chip text**: `#1a1a1f` on `#fce98c` = **15.4:1** — AAA.

### Focus Indicators
3px near-black ring (`rgba(26,26,31,0.20)`) at 2px offset on all interactive elements. The ring is intentionally soft to harmonize with the cream canvas. Outline solid, not dashed. Focus visible at all times.

### ARIA Patterns
- Top nav uses `<nav aria-label="Primary">`.
- Marker-underline SVG has `aria-hidden="true"` (decorative).
- Modals use `role="dialog"` with `aria-modal="true"`.
- Form inputs have visible labels.
- Announcement chip wrapped in `<aside aria-label="Announcement">`.

### Keyboard Navigation
- Tab order DOM-based.
- Skip-link to `#main` visible on focus.
- Modals trap focus, restore on close.
- Escape closes overlays.
- All interactive elements reachable via Tab.

### Screen Reader Hints
- Decorative marker-underline hidden with `aria-hidden`.
- Icon-only buttons carry `aria-label`.
- Live regions on form validation.

### Reduced Motion
Honored throughout — marker-underline draw disables, transforms collapse to opacity. See §8.

## 10. Responsive Behavior

### Breakpoints
| Name | Min-width |
|------|-----------|
| mobile | 0–640 |
| tablet | 641–1024 |
| desktop | 1025–1280 |
| wide | 1281+ |

### Touch Targets
Minimum 44×44px on mobile. Black CTA grows to 48px height on touch.

### Collapsing Strategy
- **Hero**: 64px H1 drops to 44px at tablet, 32px at mobile. Marker-underline scales proportionally.
- **Feature grid**: three-up → two-up → single column.
- **Crimson Pro emphasis word**: maintains size ratio with surrounding Inter at all breakpoints.
- **Nav**: full bar → hamburger with slide-down cream panel at h4 size.
- **Section padding**: 128px → 96px → 64px across breakpoints.

### Image Behavior
Object-graph mockups become full-width on mobile. Product screenshots use `object-fit: contain` inside cream-tinted frames. Yellow marker underline scales with H1.

### Container Queries
Used on the feature grid where card density depends on parent width.

## 11. Content & Voice

### Tone
Warm, thoughtful, slightly literary. Capacities writes like a Field Notes interior diagram — precise but warm, with occasional moments of editorial flourish (the Crimson Pro italic words). The voice is closer to a Notion blog post or an Inkdrop landing than to typical SaaS.

### Microcopy Patterns
- Buttons: imperative or product-oriented — "Get started," "Try Capacities," "Sign up free."
- Errors: "We couldn''t save that. Try again in a moment." (warm, full sentence).
- Success: "Saved to your space." (descriptive, contextual).
- Empty states: "Nothing here yet. Start by adding a thought." (gentle, instructive).

### CTA Verb Conventions
- "Get started" (default for hero)
- "Try Capacities" (product-named, occasional)
- "Sign up free" (qualified — "free" appears on pricing CTAs)
- "Read the blog" (not "Learn more")

The voice trusts the reader to be a thoughtful person interested in note-taking. Avoids both startup jargon and overly casual register.

## 12. Dark Mode & Theming

Capacities is **light-only** for the marketing surface. The cream-yellow palette is the brand identity — flipping to dark would lose the entire sketchbook mood. The product itself supports a dark mode (different palette entirely, slate gray + yellow), but marketing stays anchored to cream.

If a dark variant were ever introduced for marketing, the implied token swap: `#fff4d6` → `#2a2520` (warm dark), `#1a1a1f` → `#fafafa` (text inverts), brand-yellow `#f5c842` stays unchanged (it works on dark too), Crimson Pro and Inter unchanged. But Capacities has explicitly chosen not to ship marketing dark — the cream + marker-underline is the brand.

## 13. Lineage & Influences

Capacities sits in the Notion / Bear / Inkdrop lineage of warm-light PKM tools, but distinguishes itself with three deliberate moves: the cream-yellow gradient (warmer than Notion''s neutral cream), the hand-drawn marker underline (sketchbook ornament that no peer uses), and the Inter weight 700 + Crimson Pro italic pairing (tightly tracked sans for display, warm serif for emphasis).

The Field Notes influence is the sketchbook one — interior diagrams in Field Notes pocket notebooks use marker underlines and hand-drawn dingbats as accent. Capacities adapts this directly: the H1 marker-underline is the digital equivalent of a Field Notes diagram''s key-term highlight.

The Notion influence is structural — same warm-cream + serif emphasis + sans body editorial DNA. Capacities differentiates by adding ornament where Notion uses chromatic restraint, and by going slightly warmer (Capacities cream is `#fff4d6`, Notion cream is closer to `#f5f5f0`).

The Tailwind / dev-tool influence is typographic — Inter weight 700 with `-0.02em` tracking is the dev-tool display convention. By using this on a PKM marketing site, Capacities signals "engineered seriously," not just "soft warm."

**Named influences**:
- Notion (https://www.notion.com) — warm-cream canvas + serif emphasis + sans body.
- Field Notes (https://fieldnotesbrand.com) — sketchbook ornament, marker underlines, hand-drawn dingbats.
- Tailwind CSS (https://tailwindcss.com) — Inter 700 with tight tracking display convention.
- Crimson Pro / Sebastian Kosch (https://fonts.google.com/specimen/Crimson+Pro) — editorial italic serif for emphasis.
- Roam Research / Obsidian (https://roamresearch.com) — PKM contemporaries Capacities deliberately rejects (dark-slab vs warm-cream).

## 14. Do''s and Don''ts

### Do
- Keep the canvas warm cream-yellow gradient (`#ffffff` to `#fff4d6`) — flat white reads as Notion, not Capacities.
- Use the marker-underline accent sparingly — it''s ornament for the H1, not a system component.
- Reserve Crimson Pro for emphasis words inside Inter headings — italic at the same size, never used for body.
- Anchor body at 17px on a 1.60 line-height — slightly more generous than Notion for reading comfort.
- Set Inter at weight 700 with `-0.02em` tracking for display — the dev-tool discipline.
- Apply `ss01` stylistic set on display Inter — single-storey `a` and `g` alternates are the brand signature.
- Use warm-tinted shadows `rgba(180,140,40,0.10)` on cream sections — neutral black would feel cold.
- Underline links in brand yellow `#f5c842` — subtle ornament that ties to the marker.
- Keep CTA radius at conservative 6px — what differentiates Capacities from playful PKM tools.
- Honor `prefers-reduced-motion: reduce` — marker-underline draw disables.

### Don''t
- Flip the page to a dark mode for marketing — the cream is the brand.
- Introduce a second accent color — soft yellow does all chromatic work, the CTA stays near-black.
- Raise the CTA radius above 8px — the conservative 6px is what differentiates Capacities from playful PKM tools.
- Use the marker-underline as a system component — it''s a one-time hero ornament.
- Apply Crimson Pro at a different size than the surrounding Inter — voice contrast, not size contrast.
- Use bright/saturated yellows like `#ffd700` — `#f5c842` is the soft-gold sweet spot.
- Use neutral black shadows on cream — warm-tinted is the discipline.
- Pair Inter with a colder serif (Tiempos, Playfair) — Crimson Pro''s warmth matches the cream.
- Set body weight to 500+ — body should be 400 (regular) for editorial reading register.
- Use a third type voice — Inter / Crimson Pro is the system; mono is rare-only.

## 15. Agent Prompt Guide

### Quick Color Reference
- Bg: `#ffffff`
- Bg cream: `#fff4d6`
- Surface (card on cream): `#faf3df`
- Text: `#1a1a1f`
- Text muted: `#6b6770`
- CTA bg: `#1a1a1f`
- Brand yellow (marker, underline): `#f5c842`
- Brand yellow soft (chip): `#fce98c`
- Border: `rgba(0,0,0,0.10)`
- Text on CTA: `#ffffff`

### Example Component Prompts

> "Create a Capacities-style hero with a soft gradient from `#ffffff` at the top to `#fff4d6` at the bottom (cream-yellow). The H1 ''A home for everything you think, learn, and create.'' sets at 64px in Inter weight 700 with `-0.02em` tracking and `ss01` stylistic set, in `#1a1a1f`. Beneath the word ''home,'' draw a hand-drawn yellow marker underline in `#f5c842`, ~12px tall, with slightly irregular brushstroke edges. Below, place a single near-black CTA pill — `#1a1a1f` background, white text, 6px radius, padding 12px 24px."

> "Design a Capacities feature card on a cream section: `#faf3df` background, 1px solid `rgba(0,0,0,0.10)` border, 12px radius, 24px padding. Title in Inter 24px weight 600, body in 15px regular `#6b6770` on 1.55 line-height. On hover, the border deepens to `rgba(0,0,0,0.20)` and a warm `0 4px 16px rgba(180,140,40,0.10)` shadow appears."

> "Build a Capacities announcement pill: soft yellow `#fce98c` background, 13px Inter weight 500 in `#1a1a1f`, padding 4px 12px, radius 9999 (pill). Text reads ''A studio for your mind'' with a small icon prefix."

> "Create a Capacities pricing card with `#faf3df` background and a 1px solid `#1a1a1f` border to mark the recommended tier, 16px radius, 32px padding. Apply the cream-glow shadow: `inset 0 0 0 1px #e8dfb8, 0 8px 24px rgba(245,200,66,0.15)`. Price displayed in Inter 48px weight 700 with `tnum` for tabular alignment."

> "Design a Capacities navigation bar with a transparent background over the cream gradient, items in `#1a1a1f`, with a yellow underline `#f5c842` that grows from 0 to 100% width on hover over 200ms. The CTA is a near-black pill anchored right."

### Iteration Guide

1. **Start with the cream-yellow gradient, not flat white** — `#ffffff` to `#fff4d6` is the structural device. Flat white reads as Notion, not Capacities.
2. **Add the marker underline to one word in the H1** — `#f5c842` brushstroke SVG, ~12px tall, hand-drawn irregularity. This is the page''s identifying ornament.
3. **Set Inter at weight 700 with `-0.02em` tracking** — and apply `ss01`. The single-storey `a` and `g` alternates are the brand signature.
4. **Drop Crimson Pro italic into one heading** — at the same point size as surrounding Inter. Voice contrast, not size contrast. Use sparingly: 1 in 6 headings, never on body.
5. **Set CTA radius to 6px (not 8px, not 12px)** — this is the discipline. Going more rounded tips into hand-drawn / playful territory.
6. **Use warm-tinted shadows on cream** — `rgba(180,140,40,0.10)` instead of neutral black. The amber tint comes from the canvas itself.
7. **Underline links and nav items in brand yellow** — subtle ornament that ties to the marker. Yellow underlines are the page''s second-most identifying decoration.
8. **Body at 17px on 1.60 line-height** — generous for reading on cream. Bumping to 18px tips into Notion territory; dropping to 16px feels too dense.
