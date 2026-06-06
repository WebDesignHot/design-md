---
name: Penpot
tagline: Open-source design-and-code platform — dark hero, Work Sans display, mint-green action surface on a white canvas.
updated_at: 2026-05-29T21:44:49.221Z
published_at: 2026-05-29T21:44:49.221Z
author: webdesignhot
source_url: https://penpot.app
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [design-tools, dev-tools]
tags: [light, sans, open-source, mint, collaborative]
preview_swatch: ['#ffffff', '#31efb8', '#14ceca']
related: [figma]
description: 'Penpot is the open-source design tool built for designers and developers working in the same file. Its marketing site pairs a white working canvas with a deep-indigo `#151035` dark hero, narrated in Work Sans at 72px / weight 500 against an off-white `#fafafa` headline. The action surface is unmistakable: a signature mint-green `#31efb8` paired with cyan `#14ceca`, both carrying deep-indigo `#151035` text rather than white — a high-energy, accessible combination that reads as friendly and technical at once. CTAs sit at an 8px radius; chrome stays flat, generous, and code-aware, the way a tool that exports real CSS should.'

colors:
  bg: '#ffffff'                # default page canvas — white working surface
  bg-soft: '#f5f8fb'           # tinted panel / secondary CTA fill
  surface: '#ffffff'           # white card body
  surface-soft: '#f8f8f8'      # alternate panel / code-export tile
  surface-dark: '#151035'      # deep-indigo hero band + dark sections
  text: '#000000'              # body ink on white canvas
  text-indigo: '#151035'       # deep-indigo — heading + CTA-label ink
  text-muted: '#888888'        # captions, secondary metadata
  text-on-dark: '#fafafa'      # off-white headline on the dark hero
  text-on-dark-pure: '#ffffff' # pure-white copy on dark sections
  brand: '#31efb8'             # signature mint-green — primary action surface (--primary)
  brand-hover: '#2bd9a6'       # mint pressed / hover deepening
  on-brand: '#151035'          # deep-indigo text ON the mint button
  accent-cyan: '#14ceca'       # cyan companion — secondary action + highlight
  on-accent: '#151035'         # deep-indigo text ON the cyan button
  inverse-bg: '#151035'        # dark hero / footer fill
  inverse-text: '#fafafa'      # off-white text on inverse
  link: '#151035'              # links default to deep indigo
  link-hover: '#14ceca'        # cyan on hover
  border: '#d9d9d9'            # 1px hairline divider (antd base)
  border-soft: '#f0f0f0'       # nested / secondary divider
  border-strong: '#dddddd'     # input + code-block border
  semantic-success: '#52c41a'  # success state (antd token)
  semantic-warning: '#faad14'  # warning state (antd token)
  semantic-error: '#ff4d4f'    # validation / error red (antd token)
  semantic-info: '#1677ff'     # info / system-blue (antd token)

typography:
  display:
    family: 'Work Sans, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif'
    weights: [500, 600, 700]
    opentype: ['kern', 'liga']
  body:
    family: 'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
    opentype: ['kern']
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
    opentype: ['kern', 'tnum']
  scale:
    display-hero:    { size: 72, weight: 500, lineHeight: 1.0,  tracking: '-0.02em',  family: display, opentype: 'kern' }
    display-lg:      { size: 52, weight: 500, lineHeight: 1.05, tracking: '-0.018em', family: display, opentype: 'kern' }
    h1:              { size: 40, weight: 600, lineHeight: 1.1,  tracking: '-0.015em', family: display, opentype: 'kern' }
    h2:              { size: 32, weight: 600, lineHeight: 1.2,  tracking: '-0.012em', family: display, opentype: 'kern' }
    h3:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display, opentype: 'kern' }
    h4:              { size: 20, weight: 600, lineHeight: 1.3,  tracking: '0',        family: display }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    button:          { size: 16, weight: 500, lineHeight: 1.2,  tracking: '0',        family: display }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: mono }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-entrance: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — transforms collapse to opacity; color transitions retained'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(21, 16, 53, 0.04) 0 1px 2px'
  standard: 'rgba(21, 16, 53, 0.08) 0 4px 12px'
  elevated: 'rgba(21, 16, 53, 0.12) 0 12px 32px'
  ring: '0 0 0 2px #31efb8'

accessibility:
  contrast-text-on-bg: 21.0          # #000000 on #ffffff — AAA
  contrast-indigo-on-bg: 17.6        # #151035 on #ffffff — AAA
  contrast-indigo-on-brand: 11.2     # #151035 on #31efb8 mint — AAA
  contrast-indigo-on-cyan: 8.3       # #151035 on #14ceca — AAA
  contrast-offwhite-on-dark: 16.4    # #fafafa on #151035 — AAA
  focus-ring: '2px solid #31efb8 with 2px offset on light; 2px solid #14ceca on dark hero'
  reduced-motion-honored: true
  keyboard-nav: 'tab order follows visual order; skip-link visible on focus'

components:
  button-primary:
    background: '#31efb8'
    text: '#151035'
    radius: 8
    padding: '10px 16px'
    font: button
    hover: 'background #2bd9a6; no transform'
    use: 'primary CTA — Sign up, Get started free'
  button-secondary:
    background: '#14ceca'
    text: '#151035'
    radius: 8
    padding: '10px 16px'
    font: button
    hover: 'background #11b8b4'
    use: 'secondary high-emphasis action sitting beside the mint primary'
  button-tinted:
    background: '#f5f8fb'
    text: '#151035'
    radius: 8
    padding: '10px 16px'
    font: button
    hover: 'background #eaf0f6'
    use: 'low-emphasis action on white chrome — Contact Sales'
  button-ghost:
    background: 'transparent'
    text: '#151035'
    radius: 8
    padding: '10px 16px'
    font: button
    hover: 'background rgba(21, 16, 53, 0.06)'
    use: 'nav links and inline text CTAs — Pricing'
  card:
    background: '#ffffff'
    text: '#151035'
    border: '1px solid #d9d9d9'
    radius: 12
    padding: 24
    use: 'feature card / pricing tier — flat, hairline border'
  card-dark:
    background: '#151035'
    text: '#fafafa'
    radius: 12
    padding: 24
    use: 'feature card on dark sections'
  input:
    background: '#ffffff'
    text: '#151035'
    border: '1px solid #dddddd'
    radius: 8
    padding: '8px 12px'
    height: 40
    focus: 'border #31efb8; ring 0 0 0 2px rgba(49, 239, 184, 0.25)'
    use: 'email / search / form input'
  badge:
    background: '#f5f8fb'
    text: '#151035'
    radius: 9999
    padding: '4px 12px'
    font: caption
    use: 'NEW / category tag — pill shape'
  badge-mint:
    background: '#31efb8'
    text: '#151035'
    radius: 9999
    padding: '4px 12px'
    font: caption
    use: 'highlight badge — Open source / Free'
  nav-link:
    background: 'transparent'
    text: '#151035'
    font: label
    padding: '8px 12px'
    hover: 'background rgba(21, 16, 53, 0.06)'
    use: 'top-nav menu items'

dark-mode: optional

lineage:
  summary: |
    Penpot is the first design-and-prototyping tool built natively
    on open web standards — files are SVG, exports are real CSS, and
    the marketing site wears that engineering honesty as identity.
    Where most design-tool sites lead with screenshots, Penpot leads
    with a deep-indigo `#151035` hero and an off-white `#fafafa`
    Work Sans headline, then drops the visitor onto a clean white
    working canvas — the same white you'd see inside the editor. The
    action language is the brand's loudest move: a signature mint-green
    `#31efb8` (the literal `--primary` token) paired with cyan
    `#14ceca`, both carrying deep-indigo text rather than white. That
    inversion — dark ink on a bright surface — is borrowed straight
    from the open-source / developer-tooling vernacular (think GitLab's
    energetic accents, Mozilla's confident chroma) where a bright
    action color signals "this is free, this is yours, click it." The
    typography pairs Work Sans (a Google-hosted, openly-licensed
    grotesque — fitting for an open project) at a restrained weight 500
    for display, against a clean system-sans body. The chrome leans on
    Ant Design's neutral token scale (`#151035` text base, `#d9d9d9`
    borders, the `#52c41a` / `#faad14` / `#ff4d4f` semantic trio) for
    its component layer, which is why forms and tables feel like a
    well-built app rather than a bespoke landing page. The result reads
    as a tool made by engineers who care about design — confident,
    accessible, and a little bit punk about being free.
  influences:
    - name: 'Work Sans (Wei Huang)'
      role: 'Openly-licensed grotesque carrying the display voice at weight 500'
      url: 'https://fonts.google.com/specimen/Work+Sans'
    - name: 'Ant Design'
      role: 'Neutral token scale + semantic palette (text base #151035, borders, success/warning/error) powering the component layer'
      url: 'https://ant.design'
    - name: 'GitLab'
      role: 'Open-source SaaS register — bright, high-energy accent on a clean canvas signalling free-and-yours'
      url: 'https://about.gitlab.com'
    - name: 'Figma'
      role: 'Design-tool marketing grammar — white canvas, oversized confident display, single dominant CTA shape'
      url: 'https://www.figma.com'
    - name: 'Inkscape / open-web SVG tooling'
      role: 'The standards-first ethos that makes "exports real code" the core brand promise'
      url: 'https://inkscape.org'
---

## 1. Visual Theme & Atmosphere

Penpot's website opens on a deep-indigo `#151035` hero — almost black, but with a violet undertone that keeps it from feeling corporate — and sets an off-white `#fafafa` Work Sans headline at 72px / weight 500 against it. The choice is deliberate: rather than dropping you straight onto product chrome, Penpot frames its pitch in a calm, dark theater first, then hands you a clean **white** working canvas below the fold. That white is not decorative; it's the same surface you'd be drawing on inside the editor, so the marketing site and the tool feel like one continuous environment.

The single loudest gesture is the action color. Penpot's `--primary` token is a signature **mint-green `#31efb8`**, partnered with a **cyan `#14ceca`**, and both buttons carry **deep-indigo `#151035` text** rather than white. That inversion — dark ink on a bright surface — is what gives the brand its energy. A mint button on white doesn't whisper "enterprise"; it reads "this is open, this is free, this is yours." The pairing also happens to be highly accessible: deep indigo on mint clears AAA at body size, so the bright surface never costs legibility.

Structurally the page is generous and flat. Sections breathe with wide vertical rhythm, cards sit on the white canvas behind a single hairline border, and the chrome refuses shadows and gradients almost entirely — depth comes from the dark-vs-white band contrast and from the bright accent, not from lift. The component layer (forms, tables, dropdowns) is built on Ant Design's neutral token scale, which is why those pieces feel like a competently-engineered app rather than a hand-rolled landing page. Deep-indigo `#151035` is the working text color across headings and CTAs; pure black `#000000` carries long-form body copy.

The overall register is **open-source, design-meets-dev, collaborative**. Penpot's whole value proposition is that designers and developers live in the same file — SVG in, real CSS out — and the visual system performs that promise: it is technical without being cold, friendly without being cute, and a little bit proud of being free. Where Figma rotates through pastel scenes and Linear hides in a dark canvas, Penpot does something simpler and braver: a dark hero, a white canvas, and one bright color you can't ignore.

**Key Characteristics:**
- Deep-indigo `#151035` dark hero opening, then a clean white `#ffffff` working canvas — marketing mirrors the editor.
- Off-white `#fafafa` Work Sans headline on the dark hero (72px / weight 500) — confident, not heavy.
- Signature **mint-green `#31efb8`** primary action surface (the literal `--primary` token), with cyan `#14ceca` as the high-emphasis companion.
- Buttons carry **deep-indigo `#151035` text**, never white — the bright-surface / dark-ink inversion is the brand's energy.
- 8px CTA radius — soft but not pill; cards at 12px; inputs at 8px.
- Work Sans (openly licensed) for display at a restrained weight 500–600; clean system-sans body.
- Ant Design neutral + semantic tokens power the component layer (text base `#151035`, borders `#d9d9d9`, success/warning/error trio).
- Flat chrome — hairline borders, almost no shadows; depth from band contrast and accent color.
- AAA-accessible accent pairing: deep indigo on mint clears 11:1.
- Open-source / developer-tooling tone — technical, generous, quietly punk about being free.

## 2. Color Palette & Roles

### Primary

- **Background** (`#ffffff`) [→ `--antd-colorBgBase`]: default page canvas — the white working surface.
- **Text** (`#000000`): pure-black ink for long-form body copy on white.
- **Text Indigo** (`#151035`) [→ `--antd-colorTextBase`]: deep-indigo working ink — every heading and CTA label.

### Brand

- **Brand / Mint** (`#31efb8`) [→ `--primary`]: signature mint-green — primary action surface.
- **Brand Hover** (`#2bd9a6`): mint deepened on hover / press.
- **On-Brand** (`#151035`): deep-indigo text that sits ON the mint button — never white.

### Accent

- **Accent Cyan** (`#14ceca`) [→ `--token-LQ-hEAmKfgwN`]: cyan companion — secondary high-emphasis action and inline highlight.
- **On-Accent** (`#151035`): deep-indigo text on the cyan button.

### Interactive

- **Link** (`#151035`): links default to deep indigo, matching heading ink.
- **Link Hover** (`#14ceca`): cyan on hover.
- **Focus Ring** (`2px solid #31efb8`): mint ring with 2px offset on light surfaces; cyan `#14ceca` on the dark hero.

### Neutral Scale

- **Text Muted** (`#888888`) [→ code-export mixin]: captions and secondary metadata.
- **Text on Dark** (`#fafafa`): off-white headline on the deep-indigo hero.
- **Text on Dark (pure)** (`#ffffff`): pure-white body copy on dark sections.
- **antd text ramp**: `rgba(21,16,53,0.88)` heading · `rgba(21,16,53,0.65)` secondary · `rgba(21,16,53,0.45)` tertiary · `rgba(21,16,53,0.25)` disabled — the deep-indigo base stepped down by alpha.

### Surface

- **Surface** (`#ffffff`): white card body.
- **Surface Soft** (`#f8f8f8`): alternate panel / code-export tile background.
- **Surface Tinted** (`#f5f8fb`): cool-tinted fill for the low-emphasis "Contact Sales" button.
- **Surface Dark** (`#151035`): deep-indigo hero band, footer, dark feature sections.

### Borders

- **Border** (`#d9d9d9`) [→ `--antd-colorBorder`]: 1px hairline divider — default.
- **Border Soft** (`#f0f0f0`) [→ `--antd-colorBorderSecondary`]: nested row / secondary divider.
- **Border Strong** (`#dddddd`) [→ code-export mixin]: input and code-block border.

### Shadow

- **Shadow Ambient** (`rgba(21, 16, 53, 0.04)`): rare 1px card lift — tinted with the indigo base, never neutral black.
- **Shadow Standard** (`rgba(21, 16, 53, 0.08)`): hover lift on interactive cards.
- **Shadow Elevated** (`rgba(21, 16, 53, 0.12)`): dropdown / popover.

### Semantic

- **Success** (`#52c41a`) [→ `--antd-colorSuccess`]: success state / confirmation.
- **Warning** (`#faad14`) [→ `--antd-colorWarning`]: warning state.
- **Error / Danger** (`#ff4d4f`) [→ `--antd-colorError`]: validation red, destructive confirms.
- **Info** (`#1677ff`) [→ `--antd-colorInfo`]: system-blue info notices — chrome only, never a marketing CTA.

## 3. Typography Rules

### Font Family

- **Display:** `Work Sans, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. Work Sans is an openly-licensed grotesque (fitting for an open-source project) used for every headline and button, held at a restrained weight 500–600.
- **Body:** `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`. A clean native sans for paragraph copy. (The `Times` reported in the raw audit is the *unloaded* serif fallback firing before the web font lands — the production body is a sans.)
- **Mono:** `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace`. Used for the code-export panels Penpot is famous for.
- **OpenType:** `kern` + `liga` on display, `kern` on body, `tnum` on code.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| display-hero | Work Sans | 72 | 500 | 1.0 | -0.02em | Homepage h1 on dark hero (`#fafafa`) |
| display-lg | Work Sans | 52 | 500 | 1.05 | -0.018em | Section h1 (`#ffffff` on dark) |
| h1 | Work Sans | 40 | 600 | 1.1 | -0.015em | Page heading on light |
| h2 | Work Sans | 32 | 600 | 1.2 | -0.012em | Section heads |
| h3 | Work Sans | 24 | 600 | 1.25 | -0.005em | Sub-section / card title |
| h4 | Work Sans | 20 | 600 | 1.3 | 0 | Small card title |
| body-lg | system sans | 18 | 400 | 1.55 | 0 | Hero subhead / lead paragraph |
| body | system sans | 16 | 400 | 1.55 | 0 | Default paragraph copy |
| body-sm | system sans | 14 | 400 | 1.5 | 0 | Dense rows, secondary copy |
| label | system sans | 13 | 500 | 1.4 | 0 | Nav items, form labels |
| button | Work Sans | 16 | 500 | 1.2 | 0 | CTA label |
| caption | system sans | 12 | 500 | 1.4 | 0.02em | Badge / metadata caption |
| code | mono | 14 | 400 | 1.5 | 0 | Code-export panel |

### Principles

- **Display weight is restrained.** The hero ships at Work Sans 500, not 700 — confident without shouting. Headings step to 600; 700 is reserved for rare emphasis.
- **Deep indigo is the heading ink.** On white, headings and buttons use `#151035` (not pure black); body copy uses `#000000`. The difference is subtle but holds the brand's violet undertone through the type.
- **Off-white on the dark hero.** The hero headline is `#fafafa`, not `#ffffff` — a hair softer so it reads as warm display rather than harsh contrast.
- **Negative tracking scales with size.** -0.02em at 72px tightens to 0 by body size; body copy stays at default tracking with a roomy 1.55 line-height for readability.
- **Two voices, clear split.** Work Sans does display + buttons; a system sans does body + labels. Mono appears only in code-export contexts.
- **Body line-height is generous (1.55).** Penpot's copy is explanatory; the loose leading keeps multi-line paragraphs comfortable.

## 4. Component Stylings

### Buttons

**Primary (Mint)** — Background `#31efb8`, text **`#151035` deep-indigo** (not white), 8px radius, padding `10px 16px`, Work Sans button font. Hover: background `#2bd9a6`, no transform. **Use:** the dominant CTA — "Sign up", "Get started free".

**Secondary (Cyan)** — Background `#14ceca`, text `#151035`, 8px radius, padding `10px 16px`. Hover: background deepens to ~`#11b8b4`. **Use:** high-emphasis action sitting beside the mint primary.

**Tinted (Cool)** — Background `#f5f8fb`, text `#151035`, 8px radius, padding `10px 16px`. Hover: `#eaf0f6`. **Use:** low-emphasis action on white chrome — "Contact Sales".

**Ghost** — Transparent background, `#151035` text, 8px radius, padding `10px 16px`. Hover: `rgba(21, 16, 53, 0.06)` wash. **Use:** nav links and inline text CTAs — "Pricing".

### Cards

**Feature / Pricing Card** — Background `#ffffff`, 1px `#d9d9d9` border, 12px radius, 24px padding, no shadow at rest. Hover (interactive cards only): subtle lift with `rgba(21, 16, 53, 0.08) 0 4px 12px`.

**Dark Card** — Background `#151035`, `#fafafa` text, 12px radius, 24px padding. Used inside dark feature sections; pairs with mint/cyan accents for stat callouts.

**Code-Export Tile** — Background `#f8f8f8`, 1px `#dddddd` border, 8px radius, mono code at 14px. The hero artifact of the product — show real CSS/SVG output.

### Badges & Tags

**Badge (Neutral)** — Background `#f5f8fb`, `#151035` text, pill radius (9999), `4px 12px` padding, caption font. **Use:** NEW / category tag.

**Badge (Mint)** — Background `#31efb8`, `#151035` text, pill radius, `4px 12px` padding. **Use:** highlight badges — "Open source", "Free forever".

### Inputs & Forms

**Text Input** — Background `#ffffff`, 1px `#dddddd` border, 8px radius (NOT pill), padding `8px 12px`, ~40px height, `#151035` text. Focus: border shifts to mint `#31efb8` with a `0 0 0 2px rgba(49, 239, 184, 0.25)` ring. Placeholder uses `rgba(21, 16, 53, 0.25)`. Built on Ant Design field tokens.

### Navigation

**Top Nav** — Background `#ffffff`, `#151035` ink, 64px height. Layout: Penpot wordmark left, horizontal menu (Product / Use cases / Resources / Pricing), mint "Sign up" CTA right. No underlines; hover-only wash.

**Nav Link** — Transparent background, `#151035` text, label font (13/500), `8px 12px` padding. Hover: `rgba(21, 16, 53, 0.06)` background.

**Footer** — Deep-indigo `#151035` band, `#fafafa` text, generous column layout, cyan `#14ceca` link hovers.

## 5. Layout Principles

### Spacing System

- **Base unit:** 4px.
- **Scale:** 0 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96.
- **Section padding:** 64–96px between major regions.
- **Card interior:** 24px.

### Grid & Container

- **Max content width:** 1280px.
- **Prose width:** 720px for long-form copy and docs.
- **Header height:** 64px.
- **Feature grids:** 2-up for splits, 3-up for benefit triplets.
- **Hero:** full-bleed dark band; content centered within the 1280px frame.

### Whitespace Philosophy

Penpot's layout is generous and unhurried. The dark hero gives the headline room to land alone before the page resolves to the white canvas, and feature sections sit in wide vertical bands rather than tight stacks. Cards never crowd — a single hairline border and 24px of internal padding is enough separation because the chrome carries no competing shadows or gradients.

### Section Cadence

- Deep-indigo hero → white feature band → tinted/code-export band → white pricing → dark footer.
- Dark bands bookend the page (hero + footer); white carries the working content in between.
- Bright mint/cyan accents punctuate each band — one dominant action per section, never two competing primaries.

## 6. Shapes & Radius Scale

| Token | Value | Tier | Use |
|---|---|---|---|
| micro | 2px | Micro | Tiny inline chips, tag corners |
| sm | 4px | Standard | Compact controls, nested rows |
| md | 8px | Comfortable | **Buttons, inputs, code tiles** — the workhorse |
| lg | 12px | Relaxed | Cards, pricing tiers |
| xl | 16px | Large | Larger feature shells, modals |
| pill | 9999px | Pill | Badges, avatars, tags |

The system's center of gravity is **8px** — every CTA and input lands there, soft enough to feel friendly but never the full pill Figma reserves for buttons. Cards step up to 12px for a slightly more relaxed container, and pills are scoped to badges and avatars only. Radius is consistent and quiet; it never tries to be the personality.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | Pure band color (white / deep-indigo) | Hero, footer, body bands |
| 1 — Card | `#ffffff` + 1px `#d9d9d9` hairline | Feature, pricing cards |
| 2 — Hover | + `rgba(21, 16, 53, 0.08) 0 4px 12px` | Interactive card hover |
| 3 — Popover | `#ffffff` + 16px radius + `rgba(21, 16, 53, 0.12) 0 12px 32px` | Dropdowns, tooltips, menus |
| 4 — Dark band | `#151035` flat | Hero / footer contrast endpoint |

### Shadow Philosophy

Depth comes primarily from **band contrast** — the deep-indigo hero against the white canvas does the elevation work that shadows do elsewhere. When shadows appear, they're tinted with the indigo base (`rgba(21, 16, 53, ...)`) rather than neutral black, so lifted surfaces stay tonally consistent with the brand. Cards rest flat behind a hairline at level 1; only interactive surfaces and floating chrome (popovers, dropdowns) earn a shadow. Never stack gradients or glassmorphism — Penpot's depth is honest and structural.

## 8. Interaction & Motion

### Easing & Duration

- **ease-standard:** `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover and color transitions.
- **ease-entrance:** `cubic-bezier(0, 0, 0.2, 1)` — content fading in from below on scroll.
- **duration-fast:** 150ms — color shifts, button hovers.
- **duration-standard:** 240ms — most opacity / transform animations.
- **duration-slow:** 320ms — section reveals on scroll.

### Per-Component Micro-States

- **Button hover:** mint `#31efb8` → `#2bd9a6` (cyan deepens similarly). No transform, no shadow. 150ms.
- **Card hover:** subtle translateY(-2px) + `rgba(21, 16, 53, 0.08) 0 4px 12px`. 240ms.
- **Link hover:** color shifts `#151035` → cyan `#14ceca`; optional underline. 150ms.
- **Input focus:** border → mint, ring fades in over 150ms.
- **Scroll reveal:** feature bands fade up from below over 320ms with ease-entrance.

### Page Transitions

Standard scroll page; sections fade-and-rise into view as they enter the viewport. No scroll-snap or full-screen takeover — the page reads as one continuous document.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. When set:
- Scroll-reveal fades become instant — no rise.
- Card hover transforms disabled; color shifts retained.
- All decorative motion collapses to opacity or is removed.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | WCAG |
|---|---|---|
| `#000000` body on `#ffffff` | 21.0 | AAA |
| `#151035` indigo on `#ffffff` | 17.6 | AAA |
| `#151035` indigo on `#31efb8` mint | 11.2 | AAA |
| `#151035` indigo on `#14ceca` cyan | 8.3 | AAA |
| `#fafafa` off-white on `#151035` hero | 16.4 | AAA |
| `#ffffff` on `#151035` hero | 17.6 | AAA |

The bright-surface / dark-ink inversion is what makes Penpot's accent system accessible: deep indigo on mint clears AAA at body size, so the energetic color never costs legibility — a key reason it works as a button surface where white-on-bright would fail.

### Focus Indicators

2px solid mint `#31efb8` ring with 2px offset on light surfaces; 2px solid cyan `#14ceca` on the dark hero so the indicator stays visible against indigo. Applied to every interactive element.

### ARIA Patterns

- **Dialog:** `role="dialog"` + `aria-modal="true"` + focus trap on sign-up / contact modals.
- **Menu:** `role="menu"` for nav dropdowns with arrow-key navigation.
- **Combobox:** `role="combobox"` + `aria-expanded` for search.
- **Status:** `aria-live="polite"` for async form confirmations.

### Keyboard Nav

- Tab order follows visual order.
- Skip-link in header, visible on focus.
- Escape closes dialogs and dropdowns; arrow keys move within menus.

### Screen Reader

- Decorative product illustrations and SVG art marked `aria-hidden="true"`.
- Code-export panels labelled with the language/format they output.
- Icon-only controls carry `aria-label`.

### Reduced Motion

Honored — see §8.

## 10. Responsive Behavior

| Breakpoint | Range | Key Changes |
|---|---|---|
| Mobile | < 640px | display-hero 72→40px; feature grid 1-up; nav hamburger; full-bleed bands |
| Tablet | 640–1024px | display-hero ~52px; feature grid 2-up; pricing 2-up |
| Desktop | 1024–1280px | full hero scale; feature grid 3-up |
| Wide | > 1280px | Content caps at 1280px; bands stay full-bleed |

### Touch Targets

- Primary CTA: ~40px height, padded to a 44px effective target.
- Nav links: padded internally to 44px effective.
- Form fields: 40px min height.

### Collapsing Strategy

- Top nav switches to a hamburger below 768px.
- Feature grids: 3-up → 2-up → 1-up.
- Pricing cards stack vertically on mobile.
- Dark hero retains its band; headline scales down and re-wraps.

### Image Behavior

Product screenshots and SVG art use responsive `srcset`; vector illustration scales cleanly. The dark hero uses solid CSS color, so it scales infinitely without an image.

### Container Queries

Used sparingly — card grids reflow on container width when embedded inside narrower templates or docs columns.

## 11. Content & Voice

### Tone

Open, technical, and quietly confident — the voice of an engineering-led open-source project that genuinely respects designers. Sentences are clear and direct; the copy leans on concrete promises ("design and code in the same file", "export real CSS") rather than hype. There's a friendly undercurrent of pride about being free and open.

### Microcopy Patterns

- **Button verbs:** "Sign up", "Get started free", "Contact Sales", "Read the docs".
- **Error recipe:** `[What happened] — [What to do]`. Example: "Couldn't save your file. Check your connection and try again."
- **Success confirmations:** terse — "Saved", "Invite sent". No emoji.
- **Empty states:** instructional and encouraging. "No projects yet — create one to start designing."

### CTA Verb Conventions

- Primary: "Sign up" / "Get started free" (free-and-open is the lead promise).
- Secondary: "Contact Sales", "Book a demo", "Read the docs".
- Avoid: hype phrasing ("Join thousands!"), emoji-laden CTAs, false scarcity.

### Empty States

Quiet and instructional: a short line of copy plus a single mint CTA to take the first action. Open-source projects respect the user's time — no upsell theater.

## 12. Dark Mode & Theming

The marketing site is effectively **light-first** — a white working canvas — but uses **dark bands** (the deep-indigo `#151035` hero and footer) as structural punctuation rather than a global theme toggle. The product itself ships with a dark editor canvas as a preference, but penpot.app's marketing chrome is white-with-dark-bands.

If a full dark variant were rendered:
- `bg` → `#151035` (the existing dark band becomes the canvas)
- `text` → `#fafafa`
- `surface` → a step lighter, e.g. `#1d1745`
- `brand` mint `#31efb8` and cyan `#14ceca` stay — they're tuned to read on both white and indigo, and carry deep-indigo text in both modes.

## 13. Lineage & Influences

Penpot is the first design-and-prototyping tool built natively on open web standards, and its visual identity is downstream of that engineering honesty. Files are SVG; exports are real CSS; the marketing site performs the same promise by mirroring the editor — a deep-indigo `#151035` hero introduces the pitch, then the page resolves to the same clean white canvas you'd draw on inside the app. The action language is the brand's signature: a mint-green `#31efb8` (`--primary`) paired with cyan `#14ceca`, both carrying deep-indigo text rather than white. That bright-surface / dark-ink inversion is borrowed straight from the open-source and developer-tooling vernacular, where an energetic accent on a clean canvas signals "this is free, this is yours, click it."

Typographically, Penpot reaches for Work Sans — an openly-licensed grotesque, fitting for an open project — held at a restrained weight 500 so the display reads confident rather than loud, against a clean system-sans body. The component layer leans on Ant Design's neutral and semantic token scale (text base `#151035`, borders `#d9d9d9`, the `#52c41a` / `#faad14` / `#ff4d4f` semantic trio), which is why forms and tables feel like a well-engineered app rather than a bespoke page. The overall posture borrows the design-tool marketing grammar Figma established — white canvas, oversized confident display, one dominant CTA shape — but inverts the palette toward something brighter and more openly punk about being free.

**Named influences:**

- **Work Sans (Wei Huang)** — openly-licensed grotesque carrying the display voice at weight 500.
- **Ant Design** — neutral token scale + semantic palette powering the component layer.
- **GitLab** — open-source SaaS register: bright high-energy accent on a clean canvas.
- **Figma** — design-tool marketing grammar (white canvas, confident display, dominant CTA shape).
- **Inkscape / open-web SVG tooling** — the standards-first ethos behind "exports real code".

## 14. Do's and Don'ts

### Do

- **Do** open on a deep-indigo `#151035` dark hero, then resolve to a clean white `#ffffff` working canvas — mirror the editor.
- **Do** make the primary CTA mint-green `#31efb8` with **deep-indigo `#151035` text**, never white text.
- **Do** use cyan `#14ceca` as the high-emphasis companion action, also with deep-indigo text.
- **Do** set headings and CTA labels in deep indigo `#151035`; reserve pure black `#000000` for long-form body.
- **Do** use the off-white `#fafafa` headline on the dark hero — a hair softer than pure white.
- **Do** keep CTAs and inputs at 8px radius; cards at 12px.
- **Do** set display in Work Sans at a restrained weight 500–600.
- **Do** keep chrome flat — hairline `#d9d9d9` borders, indigo-tinted shadows only on interactive/floating surfaces.
- **Do** use the Ant Design semantic trio (`#52c41a` / `#faad14` / `#ff4d4f`) for status, never as marketing accents.
- **Do** lean on the open-source promise in copy — "free", "open", "design and code together".

### Don't

- **Don't** put white text on the mint or cyan buttons — the brand inversion is dark ink on bright surface.
- **Don't** substitute a generic SaaS blue for the action color; the mint `#31efb8` is the identity.
- **Don't** use the system-blue `#1677ff` info token as a CTA — it's chrome only.
- **Don't** add gradients, glassmorphism, or heavy drop shadows to the chrome.
- **Don't** render the hero headline in pure `#ffffff`; use `#fafafa`.
- **Don't** set body copy in a serif — `Times` in the raw audit is the unloaded fallback; production body is a clean sans.
- **Don't** make buttons full pills; 8px is the button radius. Pills are for badges only.
- **Don't** run two competing bright primaries in the same section — one dominant action each.
- **Don't** crowd cards; a single hairline border + 24px padding is the separation.
- **Don't** drop deep indigo for pure black on headings — the violet undertone is part of the brand.

## 15. Agent Prompt Guide

### Quick Color Reference

```
Background:        #ffffff
Body Text:         #000000
Heading / Ink:     #151035
Brand / Mint:      #31efb8   (text on it: #151035)
Accent / Cyan:     #14ceca   (text on it: #151035)
Dark Hero:         #151035   (headline: #fafafa)
Surface Soft:      #f8f8f8
Tinted Fill:       #f5f8fb
Border:            #d9d9d9
Success/Warn/Err:  #52c41a / #faad14 / #ff4d4f
```

### Example Component Prompts

- **"Create a hero section in the Penpot style"** — Deep-indigo `#151035` full-bleed band, Work Sans headline at 72px / weight 500 in off-white `#fafafa`, an 18px body subhead, and a single mint `#31efb8` 8px-radius CTA with **deep-indigo `#151035` text** labeled "Get started free".

- **"Design a primary CTA in the Penpot style"** — Background mint `#31efb8`, text `#151035` (NOT white), 8px radius, `10px 16px` padding, Work Sans 16/500. Hover background `#2bd9a6`, no transform.

- **"Build a secondary CTA in the Penpot style"** — Background cyan `#14ceca`, text `#151035`, 8px radius — sits beside the mint primary as a high-emphasis alternative.

- **"Make a feature card in the Penpot style"** — White `#ffffff` background, 1px `#d9d9d9` border, 12px radius, 24px padding, Work Sans h3 in `#151035`, body in system sans. No shadow at rest; subtle indigo-tinted lift on hover.

- **"Render a code-export tile in the Penpot style"** — `#f8f8f8` background, 1px `#dddddd` border, 8px radius, monospace at 14px showing real CSS/SVG output — the product's signature artifact.

- **"Design the footer in the Penpot style"** — Deep-indigo `#151035` band, off-white `#fafafa` text, multi-column links with cyan `#14ceca` hover.

### Iteration Guide

1. Start with the band rhythm: dark `#151035` hero + footer, white `#ffffff` canvas in between. The contrast is the structure.
2. Place exactly one bright action per section — mint `#31efb8` primary, cyan `#14ceca` for a high-emphasis alternative.
3. Always put **deep-indigo `#151035` text on the bright buttons**, never white. This single rule defines the brand.
4. Set type in Work Sans at weight 500–600 for display; keep body in a clean system sans with 1.55 line-height.
5. Use `#151035` for headings and CTA labels; reserve pure black `#000000` for long body copy.
6. Keep radius quiet: 8px on buttons/inputs, 12px on cards, pills only for badges.
7. Hold the chrome flat — hairline `#d9d9d9` borders, indigo-tinted shadows only on hover/floating surfaces. No gradients.
8. Check contrast on the bright surfaces — deep indigo on mint/cyan should clear AAA (11:1 and 8:1); if it dips, you've drifted off-palette.

---

*Theme-toggle audit: score=0, signals=[none]*
