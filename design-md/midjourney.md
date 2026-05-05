---
name: Midjourney
tagline: A deep cosmic canvas where JetBrains Mono headlines float over a wide-gamut OKLCH rainbow — a research lab dressed as a chapel.
author: webdesignhot
source_url: https://www.midjourney.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [ai, media, design-tools]
tags: [dark, editorial, mono, sans, spacious, cool, multi-theme]
preview_swatch: ['#06051d', '#2d0e36', '#9061f9']
related: [openai, anthropic, claude-ai]
description: 'Midjourney''s site reads like a private chapel for image research. The canvas is a deep navy-violet `#06051d`, headlines are typeset in JetBrains Mono at regular weight (a deliberate refusal of marketing-bold), and body copy uses DM Sans for warmth. The interior swatches go straight to wide-gamut OKLCH — saturated greens, oranges, and magentas Photoshop cannot name — so the chrome itself signals that this is a tool that lives past sRGB.'

colors:
  # Primary
  bg: '#06051d'                   # cosmic navy-violet ground
  bg-alt: '#0f1c36'               # secondary panel
  text: '#ffffff'                 # display white on dark
  text-strong: '#ffffff'          # bolder heading white
  text-body: '#2e3038'            # body slate on light surfaces
  text-muted: '#9ca0ad'           # secondary on dark
  text-soft: '#ebf8ff'            # iced highlight tone
  text-faint: '#5a5d6c'           # quiet metadata

  # Brand & Dark
  brand: '#9061f9'                # signature violet — oklch(0.541 0.281 293)
  brand-deep: '#5b21b6'           # pressed violet
  brand-soft: '#3b2566'           # tinted violet panel
  on-brand: '#ffffff'

  # Accent (wide-gamut OKLCH set)
  accent-rose: '#fc2c83'          # research-rose — oklch(0.645 0.246 16)
  accent-amber: '#f5a524'         # sandstone amber — oklch(0.795 0.184 86)
  accent-emerald: '#16a394'       # generative green — oklch(0.696 0.17 162)
  accent-sky: '#63b3ed'           # fallback link blue
  accent-magenta: '#d946ef'       # rare emphasis
  accent-cyan: '#22d3ee'          # status pulse

  # Interactive
  link: '#9061f9'
  link-hover: '#a78bfa'
  link-visited: '#7c3aed'
  selected: '#3b2566'
  disabled: '#3a3d4a'

  # Neutral scale
  neutral-50: '#f8f8fb'
  neutral-100: '#ebecf0'
  neutral-300: '#9ca0ad'
  neutral-500: '#5a5d6c'
  neutral-700: '#2e3038'
  neutral-900: '#161827'

  # Surface & Borders
  surface: '#2d0e36'              # violet card surface
  surface-deep: '#28172e'         # alternate violet panel
  surface-soft: '#314062'         # blue-grey panel
  surface-raised: '#3a1c44'       # hover-raised card
  border: '#00000099'             # 60% black hairline on dark
  border-strong: '#ffffff1f'      # 12% white hairline alt
  border-subtle: '#ffffff0a'      # 4% white hairline

  # Shadow colors
  shadow-ambient: 'rgba(6,5,29,0.4)'
  shadow-violet: 'rgba(144,97,249,0.25)'
  shadow-deep: 'rgba(0,0,0,0.6)'

  # Semantic
  success: '#16a394'
  success-bg: '#0e2a26'
  success-text: '#5eead4'
  warning: '#f5a524'
  warning-bg: '#2e2010'
  warning-text: '#fcd34d'
  danger: '#fc2c83'
  danger-bg: '#2c0a1a'
  danger-text: '#fda4af'
  info: '#63b3ed'
  info-bg: '#0f1f33'
  info-text: '#93c5fd'

typography:
  display:
    family: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400, 500]
    opentype-features: ['ss01', 'cv02']
  body:
    family: '"DM Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif'
    weights: [400, 500, 700]
  mono:
    family: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 48, weight: 400, family: mono, lineHeight: 1.1,  tracking: '0',         opentype: 'ss01' }
    display-large:   { size: 36, weight: 400, family: mono, lineHeight: 1.15, tracking: '0' }
    h1:              { size: 30, weight: 400, family: mono, lineHeight: 1.2,  tracking: '0' }
    h2:              { size: 24, weight: 500, family: mono, lineHeight: 1.25, tracking: '0' }
    h3:              { size: 18, weight: 500, family: body, lineHeight: 1.3,  tracking: '0' }
    h4:              { size: 16, weight: 500, family: body, lineHeight: 1.35, tracking: '0' }
    body-large:      { size: 16, weight: 400, family: body, lineHeight: 1.55 }
    body:            { size: 14, weight: 400, family: body, lineHeight: 1.5 }
    body-small:      { size: 13, weight: 400, family: body, lineHeight: 1.5 }
    caption:         { size: 12, weight: 400, family: body, lineHeight: 1.4 }
    label:           { size: 11, weight: 500, family: mono, lineHeight: 1.3,  tracking: '0.04em' }
    label-small:     { size: 10, weight: 500, family: mono, lineHeight: 1.2,  tracking: '0.06em' }
    code:            { size: 13, weight: 400, family: mono, lineHeight: 1.5 }
    code-micro:      { size: 11, weight: 400, family: mono, lineHeight: 1.4 }
    button:          { size: 13, weight: 500, family: mono, lineHeight: 1.0,  tracking: '0.02em' }
    nav-link:        { size: 13, weight: 500, family: mono, lineHeight: 1.0,  tracking: '0.02em' }
    tabular:         { size: 12, weight: 400, family: mono, lineHeight: 1.4,  opentype: 'tnum' }

radius:
  micro: 2
  xs: 4
  sm: 6
  md: 8
  lg: 12
  card: 16
  xl: 20
  pill: 9999

spacing:
  base: 4
  scale: [2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1280
  prose-width: 680
  header-height: 56
  hero-min-height: 640

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(6,5,29,0.4) 0 1px 2px'
  standard: 'rgba(6,5,29,0.5) 0 8px 24px'
  elevated: 'rgba(0,0,0,0.6) 0 24px 48px -16px, rgba(144,97,249,0.15) 0 4px 12px'
  deep: 'rgba(0,0,0,0.7) 0 36px 72px -24px'
  ring: '0 0 0 2px #9061f9'
  glow: '0 0 32px rgba(144,97,249,0.35)'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-in: 'cubic-bezier(0.4, 0, 1, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  duration-page: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce — transitions degrade to opacity-only fades; no transforms or parallax'

accessibility:
  contrast-text-on-bg: 18.2          # white on #06051d, AAA
  contrast-text-on-brand: 4.8        # white on #9061f9, AA
  contrast-body-on-surface: 14.6     # white on #2d0e36, AAA
  contrast-muted-on-bg: 7.1          # #9ca0ad on #06051d, AAA
  focus-ring: '2px solid #9061f9 with 2px offset'
  focus-ring-offset-color: '#06051d'
  reduced-motion-honored: true
  keyboard-nav: 'standard tab order; ESC closes modals; arrow keys traverse feed grid'

components:
  button-primary:
    bg: '#9061f9'
    text: '#ffffff'
    border: 'none'
    radius: 8
    padding: '10px 18px'
    font: 'mono 13/1.0 weight 500 tracking 0.02em'
    hover: 'bg #a78bfa, glow 0 0 16px rgba(144,97,249,0.4)'
    active: 'bg #7c3aed'
    focus: '2px ring #9061f9 + 2px offset'
  button-ghost:
    bg: 'transparent'
    text: '#ffffff'
    border: '1px solid #ffffff1f'
    radius: 8
    padding: '10px 18px'
    font: 'mono 13/1.0 weight 500'
    hover: 'border #ffffff3f, bg #ffffff08'
    active: 'bg #ffffff14'
  button-danger:
    bg: '#fc2c83'
    text: '#ffffff'
    border: 'none'
    radius: 8
    padding: '10px 18px'
    font: 'mono 13/1.0 weight 500'
    hover: 'bg #f472b6'
    active: 'bg #db2777'
  card:
    bg: '#2d0e36'
    border: '1px solid #00000099'
    radius: 16
    padding: '24px'
    shadow: 'ambient'
    hover: 'shadow elevated, border #ffffff1f'
  input:
    bg: '#0f1c36'
    text: '#ffffff'
    placeholder: '#9ca0ad'
    border: '1px solid #ffffff1f'
    radius: 8
    padding: '10px 14px'
    font: 'body 14/1.5 weight 400'
    focus: 'border #9061f9, ring 2px #9061f9'
  badge:
    bg: '#3b2566'
    text: '#a78bfa'
    border: 'none'
    radius: 9999
    padding: '3px 10px'
    font: 'mono 11/1.3 weight 500 tracking 0.04em uppercase'

lineage:
  summary: |
    Midjourney's website is the antithesis of the Vercel/Linear dark
    canvas. Instead of `#000` or `#0a0a0a`, the body sits at `#06051d` —
    a deep navy-violet that reads as cosmic, not corporate. Headlines
    use **JetBrains Mono at 400 weight**, a typographic move borrowed
    from research-paper landing pages (Anthropic, Inflection's early
    site) but dialled down to the chapel-quiet end of that lineage —
    no bold, no negative tracking, just a steady monospaced cadence.
    Body text is **DM Sans**, the warmer Google sans used by Substack
    and many newsletter-era brands, which softens the JetBrains rigour.
    The defining colour move is wide-gamut OKLCH: the interior swatches
    use `oklch(0.541 0.281 293)` violets, `oklch(0.645 0.246 16)` roses,
    and `oklch(0.696 0.17 162)` greens — saturations that exceed sRGB
    and only render correctly on P3 displays. This is a deliberate
    statement: the colour system itself signals that Midjourney lives
    beyond the colour gamut other tools can describe.
  influences:
    - name: Anthropic
      role: Mono-as-headline research-lab register; restraint as authority signal.
      url: https://anthropic.com
    - name: Linear
      role: Dark-canvas marketing rhythm and OKLCH-native palette engineering.
      url: https://linear.app
    - name: Apple Pro Display XDR / P3
      role: Wide-gamut as the implicit medium — colour choices exceed sRGB.
      url: https://www.apple.com/pro-display-xdr/
    - name: JetBrains
      role: Monospace-as-display-typeface lineage — the IDE register applied to marketing.
      url: https://www.jetbrains.com/lp/mono/

dark-mode: native        # Midjourney is dark-by-default; the cosmic ground is the brand
---

## 1. Visual Theme & Atmosphere

Midjourney's marketing surface is a chapel. The canvas drops to `#06051d` — not black, not navy, but a deep violet-black that reads cosmic — and the headline runs in **JetBrains Mono at regular weight (400)**. That refusal to use bold, combined with the monospace cadence, puts the tone somewhere between research paper and gallery placard. The page does not market; it observes.

Body copy switches register entirely: **DM Sans**, a warmer humanist sans, carries the explanatory text. The duet — monospace headline, DM Sans body — mirrors the research-lab landing pages of Anthropic and early Inflection, but Midjourney holds itself quieter. There are no gradients, no animated mesh in the hero, no neon ring around the CTA. The cosmos is still.

What makes the surface unmistakable is the OKLCH-native palette. Interior swatches are declared in `oklch()` rather than hex — violets at `oklch(0.541 0.281 293)`, roses at `oklch(0.645 0.246 16)`, greens at `oklch(0.696 0.17 162)`. These saturations exceed the sRGB gamut and only render at full intensity on P3 displays. The chrome itself is a wide-gamut artifact: an instrument tuned to a screen most users do not yet own. That is the brand's quiet boast.

The sensory metaphor is twilight observatory: still air, deep violet, instrument panels aglow with carefully calibrated colour. Cards float as lit panels on the dark ground. Text is paper-white. Accent dots — rose, amber, emerald — appear like distant stars, never as gradients, never as marketing flares.

**Key Characteristics**

- Cosmic violet-black canvas (`#06051d`), not pure black
- JetBrains Mono headlines at weight 400 — no bold, no negative tracking
- DM Sans body for humanist warmth
- OKLCH-declared accents that exceed sRGB
- Tonal violet layering, not cast shadows
- Single-note accent discipline (rose OR amber OR emerald, never blended)
- Image and video as the colour; chrome as the frame
- Research-lab register over SaaS marketing register
- Spacious vertical rhythm; chapel-quiet density
- Wide-gamut signature: P3-aware palette as identity

## 2. Color Palette & Roles

### Primary

- **bg** (`#06051d`): page ground; cosmic navy-violet, not corporate black
- **text** (`#ffffff`): pure white display copy
- **text-body** (`#2e3038`): body slate when content lands on light surfaces

### Brand & Dark

- **brand** (`#9061f9` → `oklch(0.541 0.281 293)`): signature violet for primary CTA, links, focus rings
- **brand-deep** (`#5b21b6`): pressed/active violet
- **brand-soft** (`#3b2566`): tinted-violet panel for selected feed cards
- **on-brand** (`#ffffff`): text on violet fill

### Accent (wide-gamut, single-note)

- **accent-rose** (`#fc2c83` → `oklch(0.645 0.246 16)`): research emphasis
- **accent-amber** (`#f5a524` → `oklch(0.795 0.184 86)`): warmth interrupts, sandstone notes
- **accent-emerald** (`#16a394` → `oklch(0.696 0.17 162)`): status, generative pulses
- **accent-sky** (`#63b3ed`): fallback link tone for rare blue moments
- **accent-magenta** (`#d946ef`): rare emphasis only
- **accent-cyan** (`#22d3ee`): status indicator

### Interactive

- **link** (`#9061f9`): default link colour
- **link-hover** (`#a78bfa`): lighter violet on hover
- **link-visited** (`#7c3aed`): deeper violet visited
- **selected** (`#3b2566`): selected feed/list-item background
- **disabled** (`#3a3d4a`): muted slate for disabled controls

### Neutral Scale

- **neutral-50** (`#f8f8fb`): paper highlight on light press zones
- **neutral-100** (`#ebecf0`): light surface
- **neutral-300** (`#9ca0ad`): muted text on dark
- **neutral-500** (`#5a5d6c`): metadata
- **neutral-700** (`#2e3038`): body slate
- **neutral-900** (`#161827`): deep navy panel

### Surface & Borders

- **surface** (`#2d0e36`): violet card surface for community/feed shells
- **surface-deep** (`#28172e`): alternate near-black violet for inset zones
- **surface-soft** (`#314062`): slate-blue secondary panel
- **surface-raised** (`#3a1c44`): hover-raised card
- **border** (`#00000099`): 60% black hairline; disappears into navy ground
- **border-strong** (`#ffffff1f`): 12% white alt for visible dividers
- **border-subtle** (`#ffffff0a`): 4% white whisper-line

### Shadow Colors

- **shadow-ambient** (`rgba(6,5,29,0.4)`): the navy-tinted base shadow
- **shadow-violet** (`rgba(144,97,249,0.25)`): brand-tinted glow on focus
- **shadow-deep** (`rgba(0,0,0,0.6)`): modal-elevation black

### Semantic

- **success** (`#16a394`) on **success-bg** (`#0e2a26`) with **success-text** (`#5eead4`)
- **warning** (`#f5a524`) on **warning-bg** (`#2e2010`) with **warning-text** (`#fcd34d`)
- **danger** (`#fc2c83`) on **danger-bg** (`#2c0a1a`) with **danger-text** (`#fda4af`)
- **info** (`#63b3ed`) on **info-bg** (`#0f1f33`) with **info-text** (`#93c5fd`)

## 3. Typography Rules

### Font Family

- **Display & Headline**: `"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` — weights 400, 500
- **Body**: `"DM Sans", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` — weights 400, 500, 700
- **Mono companion**: same JetBrains Mono stack as display, used for code and labels
- **OpenType**: `ss01` for the JetBrains stylistic alt; `tnum` for tabular figures in metric columns; default ligatures enabled in code blocks; disabled in headlines

### Hierarchy

| Role            | Font  | Size | Weight | Line H | Tracking | OT Features | Notes |
|-----------------|-------|------|--------|--------|----------|-------------|-------|
| display-hero    | mono  | 48   | 400    | 1.10   | 0        | ss01        | hero on landing; never bold |
| display-large   | mono  | 36   | 400    | 1.15   | 0        | —           | section heads |
| h1              | mono  | 30   | 400    | 1.20   | 0        | —           | page title |
| h2              | mono  | 24   | 500    | 1.25   | 0        | —           | feature heads, the only mono-500 |
| h3              | sans  | 18   | 500    | 1.30   | 0        | —           | switches to DM Sans |
| h4              | sans  | 16   | 500    | 1.35   | 0        | —           | sub-section |
| body-large      | sans  | 16   | 400    | 1.55   | 0        | —           | hero supporting copy |
| body            | sans  | 14   | 400    | 1.50   | 0        | —           | default body |
| body-small      | sans  | 13   | 400    | 1.50   | 0        | —           | secondary |
| caption         | sans  | 12   | 400    | 1.40   | 0        | —           | image captions |
| label           | mono  | 11   | 500    | 1.30   | 0.04em   | —           | uppercase ui labels |
| label-small     | mono  | 10   | 500    | 1.20   | 0.06em   | —           | tag chips |
| code            | mono  | 13   | 400    | 1.50   | 0        | ligatures   | inline code |
| code-micro      | mono  | 11   | 400    | 1.40   | 0        | —           | metadata |
| button          | mono  | 13   | 500    | 1.00   | 0.02em   | —           | CTA label |
| nav-link        | mono  | 13   | 500    | 1.00   | 0.02em   | —           | top nav |
| tabular         | mono  | 12   | 400    | 1.40   | 0        | tnum        | numeric columns |

### Principles

- **Mono headline as voice**: JetBrains Mono at 400 is the brand's signature refusal of marketing-bold. The cadence reads as research, not pitch.
- **Two-family duet, no third register**: monospace for headlines and labels; DM Sans for prose. No serif, no third sans, no decorative face.
- **Tracking discipline**: 0 tracking on display copy. Mono labels gain `0.04–0.06em` for uppercase legibility. DM Sans body never tightens.
- **Weight restraint**: 400 carries display; 500 is reserved for h2, ui labels, and buttons. 700 appears only in dense data tables in product UI.
- **OpenType discipline**: `tnum` for any column of numbers; `ss01` for the JetBrains stylistic alt that softens the default `g`. Ligatures stay on for code, off for headlines.
- **Size restraint**: 30px is the marketing h1 ceiling; 48px appears only on the rare landing hero. The brand never reaches the 64–80px scale of typical SaaS.
- **No italics**: emphasis is structural (caps, weight 500) not slanted.

## 4. Component Stylings

### Buttons

**button-primary** — the violet CTA
- Background: `#9061f9`
- Text: `#ffffff`, mono 13/1.0, weight 500, tracking 0.02em
- Padding: `10px 18px`
- Radius: 8px
- Border: none
- Hover: bg lifts to `#a78bfa`, soft violet glow `0 0 16px rgba(144,97,249,0.4)`
- Active: bg drops to `#7c3aed`
- Focus: 2px ring `#9061f9` with 2px offset on ground
- Use: hero "Sign Up", "Open App", "Subscribe"

**button-ghost** — the dark-mode quiet button
- Background: transparent
- Text: `#ffffff`, mono 13/1.0, weight 500
- Border: `1px solid #ffffff1f`
- Radius: 8px
- Padding: `10px 18px`
- Hover: border `#ffffff3f`, bg `#ffffff08`
- Active: bg `#ffffff14`
- Use: secondary ("Learn more", "View gallery"), nav buttons

**button-danger** — the rose destructive
- Background: `#fc2c83`
- Text: `#ffffff`, mono 13/1.0, weight 500
- Radius: 8px
- Hover: bg `#f472b6`
- Active: bg `#db2777`
- Use: "Delete", "Cancel subscription"

**button-icon** — the square icon-only
- Background: transparent
- Border: `1px solid #ffffff1f`
- Radius: 8px
- Size: 36×36
- Hover: bg `#ffffff08`
- Use: feed action buttons (heart, save, share)

### Cards

**Image card** (community feed):
- Background: `#2d0e36`
- Border: `1px solid #00000099`
- Radius: 16px
- Padding: 24px
- Shadow: ambient
- Hover: shadow elevates, border lifts to `#ffffff1f`, image scales 1.02

**Research note card** (essays):
- Background: `#28172e`
- Border: `1px solid #ffffff0a`
- Radius: 12px
- Padding: 32px

### Badges / Tags / Pills

- Background: `#3b2566`
- Text: `#a78bfa`, mono 11/1.3 weight 500 tracking 0.04em, uppercase
- Radius: 9999 (pill)
- Padding: `3px 10px`
- Use: research labels, model version tags, "v6", "alpha"

### Inputs / Forms

**Text input**:
- Background: `#0f1c36`
- Text: `#ffffff`, body 14/1.5 weight 400
- Placeholder: `#9ca0ad`
- Border: `1px solid #ffffff1f`
- Radius: 8px
- Padding: `10px 14px`
- Focus: border `#9061f9`, ring 2px `#9061f9`

**Composer / prompt input** (when present in product chrome):
- Background: `#0f1c36`
- Border: `1px solid #ffffff1f`
- Radius: 12px
- Padding: `12px 16px`
- Send button: violet primary, hard-right

### Navigation

- Top bar: 56px, transparent over the cosmic ground, no border
- Wordmark: hard-left, mono 16/1.0 weight 500, white
- Link list: hard-right, mono 13/1.0 weight 500 tracking 0.02em, gap 24px
- Hover: opacity to `0.8`
- Mobile: hamburger collapses into a full-bleed sheet at `#06051d`

### Decorative

- **OKLCH accent dots**: 8px circles, `oklch()` declared, mark research notes and status pulses
- **Hairline divider**: `1px solid #ffffff0a` between sections
- **Image grid frames**: 16px radius wrapping all generated outputs

## 5. Layout Principles

### Spacing System

Base unit is 4px. Scale: `2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128`. Section padding lands at 64 or 96; component gap lands at 24 or 32. Density is restrained — Midjourney trades information per pixel for spaciousness.

### Grid & Container

- Page max width: **1280px**, centered
- Prose max width: **680px**
- Hero takes full bleed; copy lives in a 680px column floated low-left
- Feature grids: 12-column, 24px gutters; images break out to 1280
- Community feed: masonry, 16px gutters, columns adapt 2/3/4/5 across breakpoints

### Whitespace Philosophy

Section padding is generous (`80–96px` vertical between bands); card padding is comfortable (`24px`). The chapel-quiet density is the point — never crowd the cosmos. Headlines have 32–48px breathing room above sub-copy.

### Section Cadence

Pages alternate between full-bleed cosmic bands (`#06051d`) and tonal violet panels (`#28172e`, `#2d0e36`). Light press zones are rare and used sparingly for editorial essays. The rhythm is dark-dark-dark-(rare-light)-dark.

## 6. Shapes & Radius Scale

| Tier        | px    | Use |
|-------------|-------|-----|
| Micro       | 2     | inline code |
| XS          | 4     | tag chips, small dots |
| Standard    | 6     | secondary buttons |
| Comfortable | 8     | primary buttons, inputs |
| Relaxed     | 12    | medium cards, research notes |
| Featured    | 16    | image cards, feed tiles |
| XL          | 20    | hero panels |
| Pill        | 9999  | badges, avatars, accent dots |

The shape language is rounded but never plump — closer to a physics tool than a consumer app. No compound radii.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | Flat, no shadow | bg, full-bleed sections |
| 1 | Tonal step (`#28172e` panel on `#06051d` ground) | inset zones |
| 2 | `ambient` shadow `rgba(6,5,29,0.4) 0 1px 2px` | resting cards |
| 3 | `standard` shadow `rgba(6,5,29,0.5) 0 8px 24px` | hover-raised cards |
| 4 | `elevated` shadow + violet glow `rgba(144,97,249,0.15) 0 4px 12px` | featured/active |
| 5 | `deep` `rgba(0,0,0,0.7) 0 36px 72px -24px` | modals, lightbox |

### Shadow Philosophy

Depth is achieved primarily through **tonal layering of violets** — `#06051d` ground → `#28172e` panel → `#2d0e36` raised card — rather than cast shadows. The wide-gamut OKLCH palette gives the colour layer a luminous quality on P3 displays that no shadow could approximate. When shadows do appear, they are navy-tinted (`rgba(6,5,29,0.4)`) not neutral black, so they read as cosmic atmosphere not corporate elevation. The brand bets the medium itself carries the depth.

## 8. Interaction & Motion ✨

### Easing

- `ease-standard` `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover/focus
- `ease-emphasized` `cubic-bezier(0.2, 0, 0, 1)` — entrance and reveal
- `ease-out` `cubic-bezier(0, 0, 0.2, 1)` — exits
- `ease-in` `cubic-bezier(0.4, 0, 1, 1)` — rare; quick dismissals

### Durations

- `duration-fast` **120ms** — micro hover lifts, focus rings
- `duration-standard` **200ms** — button states, card hovers
- `duration-slow` **320ms** — panel reveals, modal open
- `duration-page` **480ms** — hero loads, section fades

### Per-Component Micro-States

- **Button hover**: bg shifts in 200ms `ease-standard`; primary buttons add a soft violet glow (`0 0 16px rgba(144,97,249,0.4)`) over 200ms
- **Card hover**: shadow intensifies from `ambient` to `standard` in 200ms, image inside scales 1.02 over 320ms `ease-emphasized`
- **Link hover**: colour shifts `#9061f9` → `#a78bfa` in 120ms; no underline grow (research register, not blog register)
- **Feed grid**: images crossfade in over 320ms with a 40ms stagger
- **Modal open**: 320ms `ease-emphasized` scale-95→100 with opacity 0→1; backdrop fades in over 200ms

### Page Transitions

Section reveals use `IntersectionObserver` to fade-up content over 480ms `ease-emphasized` with 6px transform-y. The hero is static — no parallax, no animated mesh.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. All transforms (scale, translate) are dropped; transitions degrade to opacity-only fades capped at 200ms. Focus rings still animate (functional, not decorative).

## 9. Accessibility & A11y ✨

### Contrast Pairs

- White on `#06051d`: **18.2:1** — AAA
- White on `#9061f9`: **4.8:1** — AA at body sizes, AAA large
- White on `#2d0e36` (card surface): **14.6:1** — AAA
- `#9ca0ad` on `#06051d` (muted): **7.1:1** — AAA
- `#a78bfa` on `#3b2566` (badge text on tinted bg): **5.4:1** — AA

### Focus Indicators

- 2px solid `#9061f9` ring with 2px offset
- Offset color matches surface (`#06051d` on ground, `#2d0e36` on cards)
- Never removed — `:focus-visible` only suppresses for mouse pointer

### ARIA Patterns

- **Combobox**: prompt search uses `role="combobox"` with `aria-expanded`, `aria-controls`, `aria-activedescendant`
- **Listbox**: model version selector uses `role="listbox"` with `role="option"` children
- **Dialog**: lightbox uses `role="dialog"` `aria-modal="true"` with `aria-labelledby` pointing to image title
- **Status**: render progress uses `role="status"` with `aria-live="polite"`

### Keyboard Navigation

- Tab order follows visual order strictly
- ESC closes lightbox, modal, dropdown
- Arrow keys traverse feed grid and version selector
- Enter activates focused image; Space toggles select
- `/` shortcut focuses search/prompt

### Screen Reader Hints

- All generated images carry `alt` derived from prompt text
- Decorative accent dots use `aria-hidden="true"`
- Mono labels in display use visible text (no aria-label override)
- Icon-only buttons require `aria-label`

### Reduced Motion

All decorative motion (scale, translate, parallax) is disabled under `prefers-reduced-motion: reduce`. Functional motion (focus, modal-open) is retained but capped at 200ms opacity-only.

## 10. Responsive Behavior

| Breakpoint | px    | Behavior |
|------------|-------|----------|
| mobile     | 0–639 | single-column, stacked nav, 16px gutters |
| tablet     | 640–1023 | 2-column feed, condensed top bar |
| desktop    | 1024–1279 | 3-column feed, full nav |
| wide       | 1280+ | 4–5 column masonry, 1280 max width |

### Touch Targets

Minimum 44×44px for all interactive elements on mobile. Buttons grow from 36px to 44px below 640px. Tag chips remain 28px tall but gain 12px tap padding.

### Collapsing Strategy

- **Nav**: full-link list above 1024; hamburger sheet below
- **Feed**: masonry collapses 5→4→3→2→1 columns at 1536/1280/1024/640
- **Hero copy**: side-floated 680px → top-stacked full-width below 1024
- **Cards**: padding shrinks 24→16 below 640

### Image Behavior

Generated outputs are served at their native aspect ratios; the masonry grid never crops. `loading="lazy"` on all below-the-fold images. `srcset` provides 1x/2x/3x for retina/P3.

### Container Queries

Cards in the feed use `@container` queries to adapt label visibility — under 240px wide, mono caption is hidden; under 180px, only the image and a single icon row remain.

## 11. Content & Voice ✨

### Tone

Quiet, observational, research-paper. Midjourney does not pitch; it describes. Sentences end without hype. The voice borrows from gallery placards and academic journals: "v6 introduces image weight controls" rather than "Unleash your creativity with v6!"

### Microcopy Patterns

- **Buttons**: "Sign Up", "Open App", "Subscribe", "Learn more" — verbs are simple infinitives or single nouns
- **Errors**: "Something didn't render. Try again." — never "Oops!" or "Whoops!"
- **Success**: "Saved." — terminal period, no exclamation
- **Loading**: "Generating…" — present participle, ellipsis, no spinner copy

### Empty States

- Feed empty: "No images yet. Try a prompt." — two short sentences, no illustration
- Search empty: "Nothing matched." — no recovery suggestions
- Error empty: "Disconnected. Reconnecting…" — present-tense reassurance

### CTA Verb Conventions

- "Sign Up" (not "Get started", not "Start free trial")
- "Open App" (not "Launch")
- "Subscribe" (not "Upgrade", not "Go pro")
- "Read more" (not "Learn more about" — never preposition trail-off)

The voice's signature is **what is omitted**: no exclamations, no second-person hype, no marketing intensifiers ("powerful", "revolutionary", "best-in-class"). The product speaks through outputs.

## 12. Dark Mode & Theming ✨

Midjourney is **dark-by-default**. The cosmic violet ground (`#06051d`) is the brand — a light variant would betray the chapel-observatory metaphor.

There is a rare light register for editorial press essays where the surface flips to `#efeee6` paper warm-white with `#2e3038` body slate. This is **not** a system-level light mode — it is an editorial treatment used sparingly inside dark layouts, the way 032c flips a single magazine page to off-white for emphasis.

No `prefers-color-scheme: light` override is applied. Users on light-OS still see the cosmic dark canvas. The brand is the theme.

## 13. Lineage & Influences

Midjourney's surface inherits from three traditions:

**Research-paper landing pages** — Anthropic, Inflection's early site, the Open Philosophy Project. The mono-as-headline move and the refusal of bold are direct borrowings. But Midjourney holds itself even quieter: where Anthropic uses Tiempos serif for body, Midjourney uses DM Sans, softening the rigour.

**Wide-gamut display engineering** — Apple's Pro Display XDR marketing surface, Linear's OKLCH palette engineering. Midjourney goes further: the interior swatches are *declared* in `oklch()` rather than just calibrated against P3, so the colour system itself is the medium statement.

**Gallery and observatory chrome** — A24's restraint, MoMA's wall placards, JPL's deep-field astronomy posters. The rejection of gradient, glow, and SaaS-CTA conventions traces back to museum and scientific publishing.

What Midjourney rejects: the Vercel/Linear pure-black canvas (too corporate), the OpenAI green-on-white research register (too clinical), the Stripe gradient hero (too marketing), the standard SaaS 64–80px display headline (too loud).

**Named influences:**

- Anthropic — `https://anthropic.com` — mono-as-headline, research-lab register
- Linear — `https://linear.app` — OKLCH palette engineering, dark-canvas marketing rhythm
- Apple Pro Display XDR — `https://www.apple.com/pro-display-xdr/` — wide-gamut as implicit medium
- JetBrains — `https://www.jetbrains.com/lp/mono/` — IDE typography applied to marketing
- A24 / 032c — `https://a24films.com` — film-studio editorial restraint
- DM Sans / Google Fonts — `https://fonts.google.com/specimen/DM+Sans` — humanist body warmth

## 14. Do's and Don'ts

### Do

- Typeset display copy in JetBrains Mono at 400; the refusal of bold is the brand's voice
- Declare interior swatches in OKLCH, not hex — the wide-gamut saturation is part of the identity
- Keep the canvas at `#06051d`, not `#000`; the violet undertone separates Midjourney from Linear/Vercel dark mode
- Pair mono headlines with DM Sans body — the duet is the typographic signature
- Use accent dots single-note: rose OR amber OR emerald per module, never blended
- Layer depth tonally (`#06051d` → `#28172e` → `#2d0e36`) before reaching for shadows
- Reserve 30px as the headline ceiling; only the rare landing hero reaches 48px
- Let images and video carry the colour; chrome is the frame
- Animate with 200ms standard / 320ms emphasized; respect reduced-motion
- Use mono for labels and uppercase ui; sans for prose
- Honor `tnum` for numeric columns (model versions, dates, counts)
- Keep section padding generous (80–96px); the chapel-quiet density is the rhythm

### Don't

- Apply gradients to the hero — the still cosmic ground is the visual hero
- Mix the rose, amber, and emerald accents in the same module; each is a single-note interrupt
- Pair JetBrains Mono with another monospace; DM Sans is the body register, full stop
- Use bold weights (700) for marketing display copy
- Reach for the 64–80px SaaS hero scale; Midjourney's discipline is restraint
- Add cast shadows where tonal layering will work
- Introduce a second sans face — DM Sans alone carries body
- Use exclamation marks in microcopy
- Strip OKLCH declarations down to hex — the wide-gamut signature requires the colour space
- Animate decoratively under reduced-motion
- Pair the violet brand with a blue accent except as a fallback link tone
- Crop generated images in feed; respect native aspect ratios

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:           #06051d   (cosmic navy-violet)
text:         #ffffff
brand:        #9061f9   (oklch(0.541 0.281 293))
brand-deep:   #5b21b6
surface:      #2d0e36
border:       #00000099
accent-rose:  #fc2c83   (oklch(0.645 0.246 16))
accent-amber: #f5a524   (oklch(0.795 0.184 86))
accent-em:    #16a394   (oklch(0.696 0.17 162))
muted:        #9ca0ad
ring:         #9061f9
```

### Example Component Prompts

1. **"Create a hero with a `#06051d` background, JetBrains Mono headline at 30px weight 400 with no tracking reading 'Image generation, considered.', a DM Sans 16px sub-copy at `#9ca0ad`, and a violet primary button at `#9061f9` with mono 13/500 label 'Sign Up'. No gradients, no glow on the button at rest."**

2. **"Design a community feed card at `#2d0e36` with 16px radius, a 1px `#00000099` hairline, a 1:1 generated image filling the top, and mono caption at 11/500 tracking 0.04em uppercase reading 'v6 — alpha' below in `#a78bfa`."**

3. **"Build an OKLCH accent dot strip — three 8px circles at `oklch(0.645 0.246 16)`, `oklch(0.795 0.184 86)`, `oklch(0.696 0.17 162)` separated by 16px gap, used as a research-note marker above an h2."**

4. **"Compose a research-essay layout: 680px prose column on `#06051d` ground, h1 in JetBrains Mono 30/1.2/400, body in DM Sans 16/1.55/400 at `#ebf8ff`, blockquotes inset 24px with a left border `#9061f9` 2px, code blocks on `#0f1c36` with 12px padding and JetBrains Mono 13/1.5."**

5. **"Make a model-version selector pill row: 8 pill buttons at `#3b2566` bg, `#a78bfa` text, mono 11/500 tracking 0.04em uppercase, 9999 radius, 3px 10px padding. Active state flips to `#9061f9` bg with `#ffffff` text."**

6. **"Design a dark modal: `#2d0e36` panel, 20px radius, 32px padding, `0 36px 72px -24px rgba(0,0,0,0.7)` deep shadow, JetBrains Mono 24/1.25/500 title, DM Sans 14/1.5 body, ghost button cancel + violet primary confirm hard-right."**

### Iteration Guide

1. **Drop the canvas first**: paint everything on `#06051d` before adding panels. The cosmic ground is load-bearing.
2. **Refuse bold**: if a headline reads weak, shrink it or tighten the column — never reach for weight 700.
3. **Declare in OKLCH**: when an accent looks dull, check if it's been hex-clamped. Re-declare in `oklch()` with chroma above 0.2.
4. **Reduce sans variants**: if you have three sans faces on the page, you have two too many. Keep DM Sans for prose only.
5. **Tone shadows navy, not black**: shadow opacity should be `rgba(6,5,29,…)` not `rgba(0,0,0,…)` — the cosmic tint is the depth.
6. **Single-note accents**: pick one of rose/amber/emerald per module. If you find yourself blending two, the module is doing two jobs.
7. **Cap headline at 30px (or 48px hero)**: every additional 4px past that pushes the brand toward SaaS marketing register.
8. **Test on a P3 display**: the wide-gamut palette only renders correctly on P3. If you proof on sRGB only, you'll under-saturate the accents.
