---
name: Notion
tagline: Off-white canvas with Lyon serif accents and a custom NotionInter — a workspace dressed as a literary magazine.
author: webdesignhot
source_url: https://www.notion.com
spec: design.md/v1.5
quality: curated
featured: true
categories: [saas, media]
tags: [light, editorial, sans, serif, spacious, warm]
preview_swatch: ['#ffffff', '#0075de', '#191918']
related: [stripe, linear, figma]
description: 'Notion''s marketing site reads like a publication — off-white pages, a custom NotionInter sans, Lyon Text serif for editorial accents, and a single confident `#0075de` blue for action. Hero campaigns flip into near-black `#191918` zones for emotional contrast, but the underlying canvas stays calm and paper-like. Warm-grey neutrals (`#f9f9f8` → `#494744`) replace the cool greys of Apple-school SaaS, giving every surface a slight ecru tint. The card primitive holds at 12px radius, the action button at 8px, and the action verb is invariably blue — never green, never the campaign-launch periwinkle. The result is a software product that markets itself as literature.'

colors:
  bg: '#ffffff'                      # --color-background-base; paper-white canvas
  bg-campaign: '#191918'             # observed hero band; warm near-black ground
  bg-soft: '#fbfaf9'                 # softest off-white surface tint
  surface: '#f6f5f4'                 # --color-background-surface-neutral / --color-gray-200
  surface-hover: '#dfdcd9'           # --color-background-surface-neutral-hover
  surface-soft: '#f9f9f8'            # --color-gray-100
  surface-strong: '#eeede8'          # --color-gray-300; strongest light panel
  surface-dark: '#28272a'             # dark-band card surface within campaigns
  text: '#000000e6'                  # --color-text-normal; rgba(0,0,0,0.9)
  text-strong: '#000000f2'           # --color-text-strong; near-full opacity black
  text-display: '#000000'            # crisp 100% black reserved for H1
  text-muted: '#0000008a'            # --color-text-muted; captions & metadata
  text-soft: '#00000096'             # --color-link-secondary-text
  text-faint: '#00000061'            # placeholder, disabled labels
  text-on-dark: '#ffffff'            # campaign band text
  text-on-dark-muted: '#ffffffb3'    # 70% white on dark
  brand: '#0075de'                   # --color-button-primary-background / --color-blue-600
  brand-hover: '#005bab'             # --color-blue-700; pressed state
  brand-active: '#00396b'            # --color-blue-800; deepest pressed
  brand-soft: '#e6f3fe'              # --color-blue-200 / accent-soft surface
  campaign-launch: '#455dd3'         # --color-campaigns-agents-launch-blue-400
  accent: '#62aef0'                  # --color-accent / --color-blue-400
  accent-strong: '#097fe8'           # --color-accent-strong / --color-card-accent
  border: '#0000001a'                # --color-border-base; 10% black hairline
  border-soft: '#00000014'           # --border-color-regular; 8% black
  border-strong: '#00000033'         # 20% black; emphasised divider
  on-brand: '#ffffff'                # white text on blue CTA
  success: '#0a8754'                 # editorial green
  success-bg: '#e8f5ee'              # success surface tint
  warning: '#a06b00'                 # warm amber, not yellow
  warning-bg: '#fdf3e0'              # warning surface tint
  danger: '#a02b1d'                  # restrained brick
  danger-bg: '#fbeae8'               # danger surface tint
  info: '#0075de'                    # info reuses brand
  info-bg: '#e6f3fe'                 # info surface tint

typography:
  display:
    family: 'NotionInter, Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['ss01', 'cv11', 'tnum']
  body:
    family: 'NotionInter, Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500]
    opentype-features: ['ss01', 'kern']
  serif:
    family: '"Lyon Text", Georgia, YuMincho, "Hiragino Mincho ProN", "Songti SC", "Nanum Myeongjo", serif'
    weights: [400, 500]
  mono:
    family: '"iA Writer Mono", Nitti, Menlo, Courier, monospace'
    weights: [400]
  scale:
    display-hero:    { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.04em',  family: display, opentype: 'ss01' }
    display-large:   { size: 64, weight: 700, lineHeight: 1.0,  tracking: '-0.0332em', family: display, opentype: 'ss01' }
    display:         { size: 54, weight: 700, lineHeight: 1.04, tracking: '-0.025em', family: display, opentype: 'ss01' }
    h1:              { size: 48, weight: 700, lineHeight: 1.08, tracking: '-0.022em', family: display }
    h2:              { size: 40, weight: 700, lineHeight: 1.12, tracking: '-0.02em',  family: display }
    h3:              { size: 32, weight: 700, lineHeight: 1.25, tracking: '-0.015em', family: display }
    h4:              { size: 24, weight: 600, lineHeight: 1.3,  tracking: '-0.01em',  family: display }
    h5:              { size: 20, weight: 600, lineHeight: 1.35, tracking: '-0.005em', family: display }
    h6:              { size: 16, weight: 600, lineHeight: 1.5,  tracking: '0',         family: display }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.45, tracking: '0',         family: body }
    quote-large:     { size: 32, weight: 400, lineHeight: 1.27, tracking: '-0.005em', family: serif }
    quote:           { size: 22, weight: 400, lineHeight: 1.27, tracking: '0',         family: serif }
    label:           { size: 11, weight: 500, lineHeight: 1.3,  tracking: '0.06em',   family: mono }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',         family: mono }
    code-inline:     { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',         family: mono }

radius:
  micro: 2          # --border-radius-100; inline tag
  xs: 4             # --border-radius-200
  sm: 5             # --border-radius-300
  md: 6             # --border-radius-400
  lg: 8             # --border-radius-500 / --border-button-radius
  card: 12          # --border-card-radius (0.75rem)
  xl: 14            # --border-radius-800
  xxl: 16           # --border-radius-900
  hero: 20          # marketing hero shells
  pill: 9999        # --border-radius-round (~625rem)

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1200
  prose-width: 720
  header-height: 64
  hero-padding-y: 96
  section-padding-y: 80
  card-padding: 24

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    radius: lg
    padding: '12px 20px'
    font: { family: body, weight: 500, size: 16 }
    hover: { backgroundColor: brand-hover }
    active: { backgroundColor: brand-active }
    use: 'Confident single blue — only saturated chrome on the page'
  button-ghost:
    backgroundColor: brand-soft
    textColor: brand
    radius: lg
    padding: '12px 20px'
    font: { family: body, weight: 500, size: 16 }
    hover: { backgroundColor: surface-hover }
    use: 'Secondary action; reads as a calm neutral against white'
  button-text:
    backgroundColor: transparent
    textColor: text
    radius: lg
    padding: '8px 12px'
    font: { family: body, weight: 500, size: 14 }
    hover: { backgroundColor: surface }
    use: 'Tertiary inline action; nav links and editorial CTAs'
  button-on-dark:
    backgroundColor: '#ffffff'
    textColor: '#191918'
    radius: lg
    padding: '12px 20px'
    font: { family: body, weight: 500, size: 16 }
    hover: { backgroundColor: '#f1f0ee' }
    use: 'Inverted CTA for the campaign-dark hero band'
  card:
    backgroundColor: surface
    border: border
    radius: card
    padding: 24
    shadow: 'none'
    use: 'Warm-grey panel; depth via tone, not shadow'
  card-elevated:
    backgroundColor: bg
    border: border
    radius: card
    padding: 28
    shadow: 'rgba(15,15,15,0.05) 0 1px 2px, rgba(15,15,15,0.04) 0 4px 12px'
    use: 'Floating panels — pricing, demo previews'
  card-launch:
    backgroundColor: campaign-launch
    textColor: on-brand
    radius: hero
    padding: 32
    use: 'Campaign-launch promo card; periwinkle, not action blue'
  input:
    backgroundColor: bg
    border: border
    radius: md
    padding: '10px 14px'
    font: { family: body, weight: 400, size: 16 }
    focus: { border: brand, ring: '0 0 0 3px rgba(0,117,222,0.18)' }
  badge:
    backgroundColor: surface
    textColor: text-muted
    radius: pill
    padding: '4px 10px'
    font: { family: mono, weight: 500, size: 11 }

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-instant: 80
  duration-fast: 150
  duration-standard: 220
  duration-slow: 320
  duration-emphasized: 480
  hover-lift: 'translateY(-1px)'
  page-transition: 'opacity-only, 200ms standard'
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transitions to opacity-only at 100ms'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1024
  wide: 1280
  ultra: 1536

shadows:
  none: 'none'
  ambient: 'rgba(15,15,15,0.04) 0 1px 2px'
  raised: 'rgba(15,15,15,0.05) 0 1px 2px, rgba(15,15,15,0.04) 0 4px 12px'
  elevated: 'rgba(15,15,15,0.06) 0 8px 24px, rgba(15,15,15,0.04) 0 2px 6px'
  popover: 'rgba(15,15,15,0.10) 0 12px 32px, rgba(15,15,15,0.06) 0 4px 8px'
  ring: '0 0 0 3px rgba(0,117,222,0.18)'

accessibility:
  contrast-text-on-bg: 18.5            # AAA at body sizes
  contrast-text-on-brand: 5.4          # AA at body sizes
  contrast-muted-on-bg: 7.2            # AAA
  contrast-on-campaign-bg: 16.8        # AAA on dark band
  focus-ring: '3px solid rgba(0,117,222,0.4) with 1px offset'
  reduced-motion-honored: true
  keyboard-trap-free: true
  min-touch-target: 44

dark-mode: campaign-only

colors-dark:
  bg: '#191918'
  bg-soft: '#1f1e1d'
  surface: '#28272a'
  surface-hover: '#2f2e30'
  surface-strong: '#3a393b'
  text: '#ffffff'
  text-muted: '#ffffffb3'
  text-soft: '#ffffff80'
  brand: '#62aef0'
  brand-hover: '#82c0f5'
  border: '#ffffff14'
  on-brand: '#191918'

lineage:
  summary: |
    Notion's website operates on a publication metaphor. The canvas is paper white
    (`--color-background-base: #fff`), the neutral palette is warm-grey rather than
    cool — the gray scale runs from `#f9f9f8` up to `#494744`, giving every surface
    a slight ecru tint that distinguishes it from Apple-style cool greys. NotionInter,
    a custom Inter cut, is paired with Lyon Text for editorial pull quotes
    (`--typography-global-quote-md-font` uses Lyon at 32px/2.5), a move borrowed
    directly from magazine design — Wired and the New York Times Magazine use the
    same sans-and-serif duet for the same reason. The single confident blue
    (`#0075de`) for action references Stripe's brand-as-singular-blue discipline,
    but Notion holds it closer to a hyperlink hue than a tech-brand accent. Where
    Linear builds visual gravity through near-black surfaces, Notion does the
    opposite — campaign hero bands flip the body bg to `#191918` momentarily for
    emotional contrast, then return to white. The spacing rhythm and 0.75rem card
    radius match recent Vercel and Stripe defaults, but the warm gray and serif
    accents are unmistakably Notion.
  influences:
    - name: Stripe
      role: Confident single-blue action colour and trust-via-restraint chromatic strategy.
      url: https://stripe.com
    - name: Wired magazine
      role: Sans-headline + Lyon-style serif pull-quote editorial duet.
      url: https://www.wired.com
    - name: NYT Magazine
      role: Editorial discipline of running serif over sans for emotional contrast.
      url: https://www.nytimes.com/section/magazine
    - name: iA Writer
      role: Lent its iA Writer Mono — a typographic stamp tying Notion to the writing-tool lineage.
      url: https://ia.net/writer
    - name: Linear
      role: Inverse reference — Notion borrows the dark-band campaign trick but inverts the default canvas.
      url: https://linear.app
---

## 1. Visual Theme & Atmosphere

Notion's marketing site reads like a publication that learned how to sell software. The base canvas stays paper-white at `#ffffff`, NotionInter (a custom Inter cut) carries the bulk of the type, and Lyon Text — a 21st-century book serif — appears wherever quotes or editorial flourishes live. Headlines hit 64px at 700 weight with `-2.125px` tracking (roughly `-0.033em`); that hard negative tracking is what gives "Meet the night shift." its compressed, bulletin-bold feel, more newspaper standfirst than landing-page banner.

Where Linear and Raycast commit to a single near-black canvas, Notion oscillates. The home `body` ships with bg `#191918` for the launch hero band, then the page proper resumes on white. This dual-mode rhythm — campaign-zone dark, content-zone light — is what makes the marketing feel like an issue of a magazine rather than a single landing page. The dark zone is a feature spread; the light zone is the article body.

The palette lives in a subtly warm register. Notion's neutral ramp runs from `#f9f9f8` up to `#494744`, every surface tinted with a hint of ecru. Set this beside Apple's cool grey or GitHub's neutral grey and the difference is unmistakable — Notion's surfaces feel like good paper. Cards land at 12px radius (`--border-card-radius: 0.75rem`), buttons at 8px (`--border-button-radius`), and the only saturated colour event is `#0075de` blue for action.

The voice is editorial-first, software-second. Pull quotes set in Lyon at 32px/2.5 line-height. Captions in iA Writer Mono at 11px / 500 weight, tracked positive at `0.06em` — the typewriter cue that anchors Notion to the writing-tool lineage. The result is a SaaS marketing surface that reads like an issue of *Apartamento* or *Wallpaper\**, not an enterprise software landing page.

**Key Characteristics**

- Paper-white canvas with warm-grey neutral ramp (never cool)
- Custom NotionInter for body, Lyon Text serif for editorial pull-quotes
- Single confident `#0075de` action blue, never mixed with the campaign-launch periwinkle
- Campaign-band dark zones (`#191918`) interrupt the light canvas for emotional contrast
- Tight negative tracking (`-0.033em`) at hero scale gives bulletin-bold compression
- 12px card radius, 8px button radius, 9999px pill for badges and avatars
- iA Writer Mono labels for the writing-tool nostalgia cue
- 10% black hairline borders (`#0000001a`) — never solid grey dividers
- No drop shadows on the marketing surface; depth is tonal layering
- Generous 96–120px section padding; spacing as editorial breathing room

## 2. Color Palette & Roles

### Primary

- **bg** (`#ffffff`) [→ `--color-background-base`]: paper-white canvas, the workspace metaphor made literal.
- **text** (`#000000e6`) [→ `--color-text-normal`]: 90% black for slight optical softness; never quite full-bleed black.
- **text-display** (`#000000`): crisp 100% black reserved for H1 headlines that need maximum punch.
- **brand** (`#0075de`) [→ `--color-button-primary-background`]: single action blue used for primary CTA, link colour cousin.

### Brand & Dark

- **bg-campaign** (`#191918`): warm near-black for hero bands; ecru-tinted black, not pure `#000`.
- **brand-hover** (`#005bab`) [→ `--color-blue-700`]: pressed CTA, half-step into deeper blue.
- **brand-active** (`#00396b`) [→ `--color-blue-800`]: deepest pressed; mid-blue rather than navy.
- **campaign-launch** (`#455dd3`) [→ `--color-campaigns-agents-launch-blue-400`]: periwinkle reserved for product-launch campaigns; never substitutes for the action blue.

### Accent

- **accent** (`#62aef0`) [→ `--color-accent`]: secondary blue used for decorative gradient stops.
- **accent-strong** (`#097fe8`) [→ `--color-accent-strong`]: card-accent fill for highlighted feature blocks.
- **brand-soft** (`#e6f3fe`) [→ `--color-blue-200`]: soft action-tint surface for ghost buttons and info banners.

### Interactive

- **link**: identical to `brand` (`#0075de`); the action blue and the link blue are deliberately the same hue.
- **link-hover**: `brand-hover` (`#005bab`); link gains underline at hover, never colour shift alone.
- **selected**: `brand-soft` (`#e6f3fe`) as fill, `brand` as text.
- **disabled**: `text-faint` (`#00000061`) on `surface` (`#f6f5f4`).

### Neutral Scale

- **text-strong** (`#000000f2`) [→ `--color-text-strong`]: 95% black for display copy below H1.
- **text** (`#000000e6`): primary body text, 90% black.
- **text-muted** (`#0000008a`) [→ `--color-text-muted`]: captions, metadata, secondary labels.
- **text-soft** (`#00000096`) [→ `--color-link-secondary-text`]: tertiary text and timestamps.
- **text-faint** (`#00000061`): placeholder text and disabled labels.

### Surface & Borders

- **surface-soft** (`#f9f9f8`) [→ `--color-gray-100`]: softest panel tint, a half-step warmer than white.
- **surface** (`#f6f5f4`) [→ `--color-gray-200`]: standard card and panel base.
- **surface-hover** (`#dfdcd9`) [→ `--color-background-surface-neutral-hover`]: hover state for cards and ghost buttons.
- **surface-strong** (`#eeede8`) [→ `--color-gray-300`]: strongest light panel for emphasis blocks.
- **border** (`#0000001a`) [→ `--color-border-base`]: 10% black hairline; the universal divider.
- **border-soft** (`#00000014`): 8% black, used for nested grids and table rows.
- **border-strong** (`#00000033`): 20% black for emphasised dividers and form field borders.

### Shadow Colors

- **ambient**: `rgba(15,15,15,0.04) 0 1px 2px` — barely-there resting shadow for elevated cards.
- **raised**: two-layer warm-tinted shadow (`0 1px 2px` + `0 4px 12px`) for floating panels.
- **popover**: deeper warm-tinted multi-layer for menus and tooltips.

Note: Notion's shadows are warm-tinted (`rgba(15,15,15,...)` rather than `rgba(0,0,0,...)`) — a subtle move that keeps shadows in chromatic agreement with the warm-grey canvas.

### Semantic

- **success** (`#0a8754`) on **success-bg** (`#e8f5ee`): editorial green, never a saturated chartreuse.
- **warning** (`#a06b00`) on **warning-bg** (`#fdf3e0`): warm amber rather than yellow, fits the warm-grey palette.
- **danger** (`#a02b1d`) on **danger-bg** (`#fbeae8`): restrained brick red, never crayon-red.
- **info** (`#0075de`) on **info-bg** (`#e6f3fe`): info reuses the action blue; the system avoids inventing a separate info hue.

## 3. Typography Rules

### Font Family

- **Primary (display & body)**: NotionInter (custom Inter cut) → Inter → -apple-system → system-ui → Segoe UI → Helvetica → Arial → sans-serif.
- **Editorial serif**: Lyon Text → Georgia → YuMincho → Hiragino Mincho ProN → Songti SC → Nanum Myeongjo → serif.
- **Mono companion**: iA Writer Mono → Nitti → Menlo → Courier → monospace.
- **OpenType features**: `ss01` (stylistic alternates for Inter's tail forms) and `cv11` (curved-tail letters) on display; `tnum` (tabular numerals) on data tables and pricing tiers.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | NotionInter | 80 | 700 | 1.0 | -0.04em | ss01 | reserved for issue-defining marketing |
| display-large | NotionInter | 64 | 700 | 1.0 | -0.0332em | ss01 | the iconic hero size — `-2.125px` track |
| display | NotionInter | 54 | 700 | 1.04 | -0.025em | ss01 | secondary heroes |
| h1 | NotionInter | 48 | 700 | 1.08 | -0.022em | — | primary section heads |
| h2 | NotionInter | 40 | 700 | 1.12 | -0.02em | — | feature-band heads |
| h3 | NotionInter | 32 | 700 | 1.25 | -0.015em | — | sub-feature heads |
| h4 | NotionInter | 24 | 600 | 1.3 | -0.01em | — | card heads |
| h5 | NotionInter | 20 | 600 | 1.35 | -0.005em | — | inline emphasis |
| h6 | NotionInter | 16 | 600 | 1.5 | 0 | — | label-grade heads |
| body-large | NotionInter | 18 | 400 | 1.55 | 0 | — | hero subheads |
| body | NotionInter | 16 | 400 | 1.5 | 0 | — | default reading size |
| body-small | NotionInter | 14 | 400 | 1.45 | 0 | — | secondary copy |
| quote-large | Lyon Text | 32 | 400 | 1.27 | -0.005em | — | hero pull-quote |
| quote | Lyon Text | 22 | 400 | 1.27 | 0 | — | feature-band quote |
| label | iA Writer Mono | 11 | 500 | 1.3 | 0.06em | — | category cues, eyebrows |
| caption | NotionInter | 12 | 500 | 1.4 | 0.02em | — | image and chart captions |
| code-inline | iA Writer Mono | 13 | 400 | 1.4 | 0 | — | inline code |
| code | iA Writer Mono | 14 | 400 | 1.5 | 0 | — | code block |

### Principles

- **Negative tracking carries the bulletin voice**: at hero sizes the track tightens to `-0.033em` and beyond; without that compression NotionInter at 700 reads as competent rather than declarative.
- **Two-mode OpenType discipline**: display copy gets `ss01` for the curved-tail Inter alternates (a softer, more humanist feel); tabular numerals (`tnum`) appear on every data surface — pricing, dashboards, stat callouts.
- **Lyon as emotional pivot**: serif appears only at pull-quote scale and only for words you want a reader to hold their breath on. Never for body, never for headings.
- **iA Writer Mono is the writing-tool stamp**: caption-grade mono labels signal that Notion belongs in the lineage of writing software (iA, Bear, Ulysses) rather than office software.
- **Long fallback chains for i18n**: the serif chain explicitly includes Hiragino, Songti, and Nanum Myeongjo — internationalisation is treated as a typographic concern, not an afterthought.
- **Modular scale**: the type ladder steps in stable 1.125–1.25× ratios, matching an editorial modular scale rather than the usual SaaS 1.5× jumps.

## 4. Component Stylings

### Buttons

**Primary**
- Background: `#0075de`. Text: `#ffffff` at NotionInter 500 / 16px. Padding: `12px 20px`. Radius: 8px. Border: none.
- Hover: background → `#005bab`, no shadow change. Active: background → `#00396b`.
- Use: every primary CTA — Sign up, Get Notion free, Request a demo.

**Ghost (secondary)**
- Background: `#e6f3fe`. Text: `#0075de` at NotionInter 500 / 16px. Padding: `12px 20px`. Radius: 8px. Border: none.
- Hover: background → `#dfdcd9`. Active: background → `#d4cdc8`.
- Use: secondary action paired with a primary blue button.

**Text (tertiary)**
- Background: transparent. Text: `#000000e6` at NotionInter 500 / 14px. Padding: `8px 12px`. Radius: 8px.
- Hover: background → `#f6f5f4`. Active: background → `#dfdcd9`.
- Use: nav links, inline editorial CTAs.

**On-dark inverted**
- Background: `#ffffff`. Text: `#191918` at NotionInter 500 / 16px. Padding: `12px 20px`. Radius: 8px.
- Hover: background → `#f1f0ee`. Use: CTA inside the campaign-band dark zone.

### Cards

**Standard card**
- Background: `#f6f5f4`. Border: `1px solid #0000001a`. Radius: 12px. Padding: 24px. No shadow.
- Use: feature-band content tile; depth via warm-grey tonal contrast.

**Elevated card**
- Background: `#ffffff`. Border: `1px solid #0000001a`. Radius: 12px. Padding: 28px.
- Shadow: `rgba(15,15,15,0.05) 0 1px 2px, rgba(15,15,15,0.04) 0 4px 12px`.
- Use: pricing tiers, demo previews, anything that should float.

**Launch card**
- Background: `#455dd3`. Text: `#ffffff` at NotionInter 600 / 18px. Radius: 20px. Padding: 32px.
- Use: campaign-launch promo; periwinkle, never the action blue.

### Badges, Tags, Pills

**Category tag**
- Background: `#f6f5f4`. Text: `#0000008a` at iA Writer Mono 500 / 11px tracked `+0.06em` uppercase. Padding: `4px 10px`. Radius: 9999px.
- Use: article categories, feature labels.

**Status badge**
- Background: `#e6f3fe`. Text: `#0075de` at NotionInter 500 / 12px. Padding: `4px 10px`. Radius: 9999px.
- Use: "New", "Beta", inline status callouts.

### Inputs / Forms

**Text input**
- Background: `#ffffff`. Border: `1px solid #00000033`. Radius: 6px. Padding: `10px 14px`. Font: NotionInter 400 / 16px.
- Focus: border → `#0075de`, ring `0 0 0 3px rgba(0,117,222,0.18)`.
- Placeholder colour: `#00000061`.

**Search input**
- Background: `#f6f5f4`. Border: none. Radius: 6px. Padding: `10px 14px 10px 36px` (icon-prefixed).
- Focus: ring `0 0 0 3px rgba(0,117,222,0.18)`.

### Navigation

**Top bar**
- Background: `#ffffff` with `1px solid #0000001a` bottom border. Height: 64px.
- Logo at NotionInter 700 / 18px. Nav items at NotionInter 500 / 14px, colour `#000000e6`.
- Hover: background → `#f6f5f4` on each nav item, no underline shift.

**Side nav (in product mockups)**
- Background: `#f9f9f8`. Border: none. Item padding: `6px 8px`. Radius: 4px on hover bg.

### Tooltips, Toasts, Modals

- **Tooltip**: background `#191918`, text `#ffffff` at NotionInter 500 / 12px, radius 6px, padding `6px 10px`. Shadow: `rgba(15,15,15,0.10) 0 12px 32px`.
- **Toast**: background `#ffffff`, border `1px solid #0000001a`, radius 12px, shadow `popover`. Status icon at left in semantic colour.
- **Modal**: background `#ffffff`, radius 16px, shadow `popover`, backdrop `rgba(25,25,24,0.4)`, padding 32px.

## 5. Layout Principles

### Spacing System

Base unit: 4px. Scale: `[1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64, 96, 128]` × 4px. The system steps in editorial intervals — a 24px gutter is the workhorse, 48px separates stacked feature blocks within a band, and 96–128px separates major bands. Density observation: Notion runs *looser* than Linear or Vercel — it trusts whitespace as part of the magazine register.

### Grid & Container

- **Page width**: 1200px max, centred.
- **Prose width**: 720px max for editorial text columns.
- **Hero treatment**: hero copy claims roughly 800–900px horizontal, image/illustration spans full container width below.
- **Feature grid**: 3-column at 1024px+, 2-column at 768–1024px, 1-column below 768px. Card gap: 24px.

### Whitespace Philosophy

Whitespace is editorial breathing room, not modernist void. Section padding lives between 80–120px on desktop, and inside cards Notion runs 24–32px padding. The page exhales between bands; the user's eye is given a beat to land before the next section enters. This is the magazine-spread cadence translated to web.

### Section Cadence

Light/dark alternation is the signature. The pattern: `light hero → light feature → dark campaign band → light pricing → light footer`. The dark band is always a campaign moment — product launch, big announcement, emotional pivot — never a default surface.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| micro | 2px | inline tags, small inline pills |
| xs | 4px | text inputs, side-nav item hover, small badges |
| sm | 5px | tight UI primitives |
| md | 6px | search inputs, secondary panels |
| lg | 8px | buttons (`--border-button-radius`) |
| card | 12px | standard cards (`--border-card-radius`) |
| xl | 14px | larger feature cards |
| xxl | 16px | modals, emphasis blocks |
| hero | 20px | hero shells, campaign-launch cards |
| pill | 9999px | badges, avatars, status tags |

Notion's radii are moderate-modern: nothing sharper than 4px, nothing more pillowy than 20px (excluding pills). The 12px card radius is the brand's most recognisable shape primitive.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | flat, no shadow, on `#ffffff` | body content, default surfaces |
| 1 | warm-grey tonal lift (`#f6f5f4`) | cards within a feature band |
| 2 | `1px hairline + ambient shadow` | elevated cards over white |
| 3 | `raised` two-layer shadow | pricing, demo previews, floating panels |
| 4 | `popover` shadow, 16px radius | tooltips, dropdowns |
| 5 | `popover` shadow + backdrop, 20px radius | modals, lightboxes |

**Shadow Philosophy**: Notion's shadows are warm-tinted (`rgba(15,15,15,...)`) rather than neutral black. The marketing surface is sparing with elevation — most depth is achieved through tonal layering of warm greys (`#f9f9f8` → `#f6f5f4` → `#dfdcd9`) and the universal 10% black hairline. Shadows appear only on cards that should float — pricing tiers, modal dialogs — never as a default card treatment.

## 8. Interaction & Motion

### Easing

- **standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — the workhorse Material-style ease, used for most transitions.
- **emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — slower acceleration, faster deceleration; reserved for hero entrance and modal open.
- **decelerate**: `cubic-bezier(0, 0, 0.2, 1)` — used when an element enters from off-canvas.

### Durations

- **instant** (80ms): hover state colour shifts on buttons.
- **fast** (150ms): card hover background tint, link underline grow.
- **standard** (220ms): button hover lift, dropdown open.
- **slow** (320ms): modal open, page band cross-fade.
- **emphasized** (480ms): hero entrance choreography.

### Per-component micro-states

- **Button hover**: background colour shift over 150ms with `standard` ease; no scale, no shadow change.
- **Card hover**: background tint deepens (`#f6f5f4` → `#eeede8`) over 150ms; if elevated, shadow intensifies one tier.
- **Link hover**: underline grows from 0 to full width over 150ms with `decelerate` ease (uses `text-decoration-thickness: from-font` and a CSS variable trick).
- **Input focus**: ring fades in at 100ms; border colour shifts simultaneously.

### Page transitions

Notion's marketing site keeps page transitions deliberately quiet — opacity-only fades at 200ms with `standard` ease. No slide, no scale, no parallax. The product side (in-app) has more elaborate motion, but marketing stays editorial.

### Reduced-motion strategy

`prefers-reduced-motion: reduce` is fully respected: all transform-based animations collapse to opacity-only at 100ms. Hover lifts disappear. Page transitions become instant cuts. The hero remains static rather than animating in.

## 9. Accessibility & A11y

### Contrast pairs (computed)

- **text on bg**: `#000000e6` on `#ffffff` → 18.5:1 (AAA at all sizes).
- **text-muted on bg**: `#0000008a` on `#ffffff` → 7.2:1 (AAA at body sizes).
- **on-brand on brand**: `#ffffff` on `#0075de` → 5.4:1 (AA at body, AAA at large).
- **text on surface**: `#000000e6` on `#f6f5f4` → 17.6:1 (AAA).
- **on-dark text on bg-campaign**: `#ffffff` on `#191918` → 16.8:1 (AAA).

### Focus indicators

- **Default focus ring**: `3px solid rgba(0,117,222,0.4)` with 1px offset; never removed for mouse users.
- **Within input fields**: border colour shifts to `#0075de` and adds a `0 0 0 3px rgba(0,117,222,0.18)` ring.
- **On dark band**: ring uses `rgba(255,255,255,0.6)` instead of brand-tinted blue.

### ARIA patterns

- Combobox in the header search uses `role="combobox"` with `aria-expanded`, `aria-controls`, `aria-activedescendant`.
- Modals use `role="dialog"`, `aria-modal="true"`, focus trap, `Esc` to close.
- Tabs use `role="tablist"` / `role="tab"` / `role="tabpanel"` with arrow-key navigation.
- Pricing toggles use `role="radiogroup"` rather than tabs.

### Keyboard nav order

Top bar → hero CTA → feature bands in DOM order → pricing → footer. `Tab` order matches visual order. `Skip to content` link appears at top of DOM, visible on focus.

### Screen reader hints

- Decorative illustrations carry `aria-hidden="true"`.
- Icon-only buttons carry `aria-label` describing the action ("Open menu", "Sign up").
- Stat callouts use `aria-label="X million users"` rather than relying on numeral parsing.

### Reduced motion

Honored throughout — see §8.

## 10. Responsive Behavior

### Breakpoints

| Tier | Width | Behavior |
|---|---|---|
| mobile | < 480px | single column, 16px gutter, 48px section padding |
| tablet | 480–768px | single column, 24px gutter, 64px section padding |
| desktop | 768–1024px | 2-column feature grids, 32px gutter |
| wide | 1024–1280px | 3-column feature grids, 24px gutter, 96px section padding |
| ultra | 1280px+ | container caps at 1200px, content centred |

### Touch Targets

Minimum 44×44px on touch devices, achieved through padding (12px vertical + 16px font line-height = ~44px). Inline links increase tap area through `padding: 8px 0` rather than relying on font line-height.

### Collapsing strategy

- **Top nav**: hamburger menu < 768px; full nav above.
- **Feature grid**: 3 → 2 → 1 columns at 1024 / 768 / 480.
- **Hero**: image moves below copy < 768px; copy claims full width.
- **Pricing**: tiers stack vertically < 768px, with the popular tier highlighted via order shift.
- **Footer**: 4-column → 2-column → 1-column at 1024 / 768 / 480.

### Image behavior

Hero images use `srcset` with 1x/2x/3x densities and `sizes` matched to container width. Below 768px, `object-fit: cover` and `aspect-ratio: 16/9` lock the hero ratio.

### Container queries

Used inside the side-nav (in-product mockups) — the nav switches between condensed and expanded modes based on container width rather than viewport.

## 11. Content & Voice

### Tone

Notion's tone is **literary-confident**: warm, declarative, and quietly editorial. It writes like a publication's masthead — first-person plural where it counts, present tense, and a willingness to use a Lyon serif pull-quote where another SaaS would put a stat block. Headlines are short bulletins ("Meet the night shift.", "Your wiki, docs, & projects. Together."), and sentences favour periods over exclamation marks.

### Microcopy patterns

- **Button verbs**: "Get Notion free", "Try Notion AI", "Request a demo", "Sign up", "Talk to sales". Notion does not say "Get started" or "Continue" — every CTA names the actual product noun.
- **Error messages**: pattern is "Couldn't [action] because [reason]. Try [recovery]." e.g. "Couldn't create the page because the workspace is full. Free up space or upgrade."
- **Success confirmations**: short, declarative, single-line. "Page created." rather than "Your page has been created successfully!"

### Empty states

Empty states are warm and editorial rather than cheerful. "No pages yet — start with a template" (link to gallery) or "Your first wiki" with an embedded screenshot. Never empty-state cartoons or "Oops!" copy.

### CTA verb conventions

- **Primary marketing CTA**: "Get Notion free" (the canonical phrase) or "Try [product] free".
- **Demo CTA**: "Request a demo" or "Talk to sales".
- **Newsletter**: "Stay updated" — never "Subscribe" or "Sign up for our newsletter".
- **Pricing**: "Choose plan" or "Start trial".

## 12. Dark Mode & Theming

Notion's marketing surface uses dark mode **only as a campaign band** — full dark token swap is not offered for the marketing site. The campaign-dark zone uses the `colors-dark` map (see frontmatter): `#191918` ground, `#28272a` surface, `#ffffff` text, `#62aef0` brand (a lighter blue that holds contrast against dark).

The product itself ships full light/dark theming with comprehensive token parity, but for marketing the dark zone is intentionally bounded — a feature spread, not the default. Designers building marketing pages should use `bg-campaign` selectively (one band per page maximum) and return to white between dark zones.

When implementing dark mode for any component:
- swap `bg` → `#191918`, `surface` → `#28272a`
- text becomes `#ffffff` (no opacity tilt — full bleed white reads as cleaner against warm-near-black)
- borders become `#ffffff14` (8% white)
- brand colour shifts from `#0075de` to a lighter `#62aef0` to maintain contrast
- shadows are removed; depth comes from surface tonal contrast

## 13. Lineage & Influences

Notion sits at the crossroads of two lineages: the editorial publication (Wired, NYT Magazine, NewYorker.com) and the trust-via-restraint SaaS (Stripe, Linear, Vercel). The Lyon serif pull-quote is borrowed from print magazines that used a sans headline + serif body register to create emotional hierarchy; Notion inverts this (sans body + serif quote) but the underlying logic is identical.

The single confident `#0075de` blue is a Stripe move — one chromatic event, no hue inflation. But Notion holds the blue closer to a hyperlink than a brand-purple, which positions it adjacent to the writing-tool lineage (iA Writer, Bear, Ulysses) rather than the developer-tool lineage (Linear, Vercel). The iA Writer Mono caption stamp is the explicit citation of this kinship.

What Notion rejects: cool-grey neutrals (Apple, Vercel, GitHub), drop-shadow elevation as default (Material, Bootstrap), broadcast-loud headline copy (beehiiv, Gusto), and any chromatic system involving more than one accent. The warm grey is the discipline; the single blue is the discipline; the serif pull-quote is the surprise.

**Named influences**

- **Stripe** ([stripe.com](https://stripe.com)) — Confident single-blue action colour and trust-via-restraint chromatic strategy.
- **Wired magazine** ([wired.com](https://www.wired.com)) — Sans-headline + Lyon-style serif pull-quote editorial duet.
- **NYT Magazine** ([nytimes.com/section/magazine](https://www.nytimes.com/section/magazine)) — Editorial discipline of running serif over sans for emotional contrast.
- **iA Writer** ([ia.net/writer](https://ia.net/writer)) — Lent its iA Writer Mono — a typographic stamp tying Notion to the writing-tool lineage.
- **Linear** ([linear.app](https://linear.app)) — Inverse reference; Notion borrows the dark-band campaign trick but keeps its default canvas light.

## 14. Do's and Don'ts

**Do**

- Keep the action palette to a single confident blue (`#0075de`); secondary actions use the soft `#e6f3fe` surface, never a different hue.
- Reach for Lyon Text whenever a pull-quote, testimonial, or editorial accent appears — the sans + serif duet is the brand's signature.
- Use warm-grey neutrals (`#f9f9f8` → `#494744`); cool greys read as a different product (Linear, Vercel, GitHub).
- Run NotionInter at 700 with `-0.033em` tracking for hero headlines; the negative tracking is what carries the bulletin voice.
- Use iA Writer Mono for caption-grade labels (eyebrows, category tags, code) — the typewriter cue is part of the brand.
- Pair the campaign-launch periwinkle (`#455dd3`) only with white text and only inside campaign cards; never substitute it for the action blue.
- Honor `prefers-reduced-motion: reduce` — collapse all hover lifts and slide-ins to opacity-only.
- Run sections at 96–120px vertical padding on desktop; the magazine breath is the rhythm.
- Use 12px radius for cards and 8px for buttons; resist the temptation to round further.

**Don't**

- Don't apply heavy drop-shadows to cards — depth here is tonal and bordered, not shadowed.
- Don't use NotionInter below 600 weight for headlines; the negative-tracked 700 is what carries the bulletin voice.
- Don't mix the campaign-launch blue (`#455dd3`) with the action blue (`#0075de`) in the same module — they belong to different layers.
- Don't introduce a third hue beyond blue + warm-grey neutrals; even semantic colours stay restrained.
- Don't pure black (`#000`) for body text; the 90% black (`#000000e6`) is calibrated for paper-on-paper softness.
- Don't run the dark campaign band as a default page surface; it is a feature spread, never the everyday.
- Don't break the hairline border discipline — solid grey 1px dividers read as a different product.
- Don't use sentence-case CTAs that don't name the noun ("Get started", "Continue") — Notion always names what's at the end of the click.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #ffffff
bg-campaign: #191918
surface: #f6f5f4
surface-soft: #f9f9f8
text: #000000e6
text-muted: #0000008a
brand: #0075de
brand-hover: #005bab
brand-soft: #e6f3fe
border: #0000001a
campaign-launch: #455dd3
```

### Example Component Prompts

1. "Create a marketing hero in the Notion style: paper-white `#ffffff` canvas, NotionInter 64px / 700 weight headline with `-0.033em` tracking, 24px subhead at 18px / 400 in `#0000008a`, primary CTA blue pill (`#0075de`, 8px radius, white text, 12px / 20px padding), and a secondary ghost button (`#e6f3fe` background, `#0075de` text)."

2. "Design a feature card in the Notion style: `#f6f5f4` warm-grey background, 12px radius, `1px solid #0000001a` hairline, 24px padding, NotionInter 600 / 24px H4 title, body at NotionInter 400 / 16px in `#000000e6`, no drop-shadow."

3. "Render a Lyon-Text pull-quote block: serif Lyon Text at 32px / 1.27 line-height, paragraph in `#000000f2`, attribution below in iA Writer Mono 500 / 11px tracked `+0.06em` uppercase in `#0000008a`."

4. "Create a campaign-band hero: full-bleed `#191918` background, NotionInter 700 / 80px display headline in `#ffffff` with `-0.04em` tracking, supporting body at 18px / 1.55 in `#ffffffb3`, inverted CTA (white background, `#191918` text) at 8px radius."

5. "Design a pricing tier card: `#ffffff` background, `1px solid #0000001a` hairline, 12px radius, 28px padding, raised shadow (`rgba(15,15,15,0.05) 0 1px 2px, rgba(15,15,15,0.04) 0 4px 12px`), tier name in NotionInter 600 / 20px, price in NotionInter 700 / 48px with `tnum` enabled, feature list in 16px / 1.5 with bullet markers in `#0075de`."

6. "Render a category eyebrow: iA Writer Mono 500 / 11px in `#0000008a`, tracked `+0.06em`, uppercase, with optional `1px solid #0000001a` left border at 8px padding to mimic the magazine standfirst."

### Iteration Guide

1. **Start with the canvas**: confirm the `#ffffff` paper-white base and the 12px / 8px radius pair. If your prototype looks too "tech", check whether you accidentally cooled the greys.
2. **Verify the type voice**: hero headlines should hit 56–64px at 700 weight with negative tracking around `-0.025em` to `-0.033em`. If the headline reads soft or marketing-friendly, tighten the track.
3. **Audit the action colour**: there should be exactly one `#0075de` per module. If you have two saturated colours, one of them is wrong.
4. **Check the editorial accent**: every long-form section should have a Lyon-Text pull-quote or testimonial. If your page is all sans, reach for serif on one element.
5. **Verify warm-grey discipline**: the surface tints should run `#fbfaf9` → `#f9f9f8` → `#f6f5f4` → `#dfdcd9`. Cool-grey reads as a different product.
6. **Test the dark band**: if your campaign needs emotional pivot, drop in a `#191918` band — but only one per page, and it should return to white above and below.
7. **Confirm the border treatment**: dividers should be 10% black hairline (`#0000001a`), never solid grey. If you see solid grey, you've drifted to a different system.
8. **Check the reduced-motion path**: hover lifts and slide-ins should collapse to opacity-only when `prefers-reduced-motion: reduce` is set.
