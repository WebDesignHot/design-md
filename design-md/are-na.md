---
name: Are.na
tagline: Bare grey-and-orange minimalism — a single Helvetica-class sans, hairline borders, and a stubborn refusal to optimise for engagement.
updated_at: 2026-05-06T01:20:47+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://www.are.na
spec: design.md/v1.5
quality: curated
featured: true
categories: [social, media]
tags: [light, minimal, sans, dense, structured, brutalist]
preview_swatch: ['#fafafa', '#000000', '#ff6600']
related: [medium, github, hashnode]
description: 'Are.na is the literal-minimal social network — a near-white `#fafafa` canvas, plain `#000` text, hairline `#dddddd` borders, and a single `#ff6600` orange that signals link, action, and brand all at once. The site uses one sans (Helvetica/Inter-class), no shadows, no gradients, no rounded corners — a refusal-of-design that has become its own design. Type lives at editorial small sizes (H1 at 32px, body at 14px), spacing is dense rather than generous, and every interaction collapses to colour-and-tone. The closest reference points are Craigslist, MoMA exhibition catalogues, and the early-net-art lineage of Lialina-era browser pages — institutional minimalism translated to a modern social network.'

colors:
  bg: '#fafafa'                # near-white canvas, never pure white at full-page
  bg-alt: '#ffffff'            # pure white inside content blocks
  bg-warm: '#f6f5f3'           # softest warm panel
  surface: '#f1f1f1'           # subtle panel for hover states
  surface-hover: '#e8e8e8'     # hover state for cards
  surface-deep: '#e0e0e0'      # rarely used, deep neutral
  surface-block: '#ffffff'     # block fill within feed
  text: '#000000'              # body, plain black, no opacity tilt
  text-strong: '#000000'       # display, identical to body
  text-display: '#000000'      # H1 stays plain black
  text-muted: '#666666'        # captions, meta, channel descriptions
  text-soft: '#999999'         # tertiary, channel counts, timestamps
  text-faint: '#bbbbbb'        # disabled, separator labels
  text-on-brand: '#ffffff'     # white on orange CTA
  brand: '#ff6600'             # signature Are.na orange
  brand-hover: '#e85a00'       # pressed orange
  brand-active: '#cc4f00'      # deepest pressed
  brand-soft: '#fff1e6'        # softest tint, used sparingly
  brand-faint: '#fff8f1'       # near-white tint
  link: '#ff6600'              # links share brand
  link-visited: '#cc4f00'      # rare, channel-detail visits
  border: '#dddddd'            # the 1px hairline that defines every block
  border-soft: '#eeeeee'       # softest divider for sub-grids
  border-strong: '#999999'     # rare emphasis divider
  on-brand: '#ffffff'
  success: '#2d6a4f'           # restrained editorial green
  success-bg: '#e8f0eb'        # success surface
  warning: '#7a5300'           # subdued amber
  warning-bg: '#f5ebd6'        # warning surface
  danger: '#8b1a1a'            # subdued brick
  danger-bg: '#f3e0e0'         # danger surface
  info: '#666666'              # info reuses muted, not blue
  info-bg: '#f1f1f1'           # info surface

typography:
  display:
    family: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500]
    opentype-features: ['kern']
  body:
    family: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400]
    opentype-features: ['kern']
  mono:
    family: '"JetBrains Mono", "iA Writer Mono", Menlo, Monaco, "Courier New", monospace'
    weights: [400]
  scale:
    display:        { size: 40, weight: 500, lineHeight: 1.15, tracking: '-0.005em', family: display }
    h1:             { size: 32, weight: 500, lineHeight: 1.2,  tracking: '-0.005em', family: display }
    h2:             { size: 24, weight: 500, lineHeight: 1.25, tracking: '0',         family: display }
    h3:             { size: 18, weight: 500, lineHeight: 1.35, tracking: '0',         family: display }
    h4:             { size: 16, weight: 500, lineHeight: 1.4,  tracking: '0',         family: display }
    h5:             { size: 14, weight: 500, lineHeight: 1.45, tracking: '0',         family: display }
    h6:             { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0',         family: display }
    body-large:     { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }
    body:           { size: 14, weight: 400, lineHeight: 1.45, tracking: '0',         family: body }
    body-small:     { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',         family: body }
    caption:        { size: 12, weight: 400, lineHeight: 1.35, tracking: '0',         family: body }
    label:          { size: 12, weight: 400, lineHeight: 1.3,  tracking: '0',         family: mono }
    micro:          { size: 11, weight: 400, lineHeight: 1.3,  tracking: '0.02em',   family: mono }
    code-inline:    { size: 13, weight: 400, lineHeight: 1.4,  tracking: '0',         family: mono }
    code:           { size: 13, weight: 400, lineHeight: 1.5,  tracking: '0',         family: mono }
    link:           { size: 14, weight: 400, lineHeight: 1.45, tracking: '0',         family: body }
    quote:          { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',         family: body }

radius:
  micro: 0
  xs: 0
  sm: 0
  md: 0
  lg: 0
  card: 0
  xl: 0
  pill: 0
  none: 0

spacing:
  base: 4
  scale: [1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80]

layout:
  page-width: 1440
  prose-width: 640
  header-height: 48
  hero-padding-y: 32
  section-padding-y: 64
  card-padding: 12

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    radius: none
    padding: '8px 16px'
    font: { family: body, weight: 400, size: 14 }
    hover: { backgroundColor: brand-hover }
    use: 'Flat orange rectangle — square corners, no shadow'
  button-ghost:
    backgroundColor: transparent
    textColor: text
    border: border
    radius: none
    padding: '8px 16px'
    font: { family: body, weight: 400, size: 14 }
    hover: { backgroundColor: surface }
    use: 'Hairline-bordered button for secondary action'
  button-text:
    backgroundColor: transparent
    textColor: brand
    radius: none
    padding: '4px 0'
    font: { family: body, weight: 400, size: 14 }
    hover: { textDecoration: underline }
    use: 'Inline orange link, underline on hover'
  card:
    backgroundColor: bg-alt
    border: border
    radius: none
    padding: 12
    shadow: 'none'
    use: 'The hairline grid block — universal container'
  channel-tile:
    backgroundColor: bg-alt
    border: border
    radius: none
    padding: 12
    use: 'Channel preview — block count, owner, timestamp'
  input:
    backgroundColor: bg-alt
    border: border
    radius: none
    padding: '8px 12px'
    font: { family: body, weight: 400, size: 14 }
    focus: { border: text }

motion:
  ease-standard: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  ease-emphasized: 'linear'
  duration-instant: 0
  duration-fast: 100
  duration-standard: 150
  duration-slow: 200
  hover-lift: 'none'
  page-transition: 'instant — no transitions on full-page navigation'
  reduced-motion: 'fully respected — defaults are already minimal'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1024
  wide: 1280
  ultra: 1440

shadows:
  none: 'none'
  hairline-as-shadow: '1px solid #dddddd'
  ambient: 'none'
  raised: 'none'
  ring: '0 0 0 2px #ff6600'

accessibility:
  contrast-text-on-bg: 19.2            # AAA, plain black on near-white
  contrast-text-on-brand: 4.5          # AA at body sizes (white on orange tight)
  contrast-muted-on-bg: 5.7            # AA at body sizes
  focus-ring: '2px solid #ff6600 with 0px offset'
  reduced-motion-honored: true
  keyboard-trap-free: true
  min-touch-target: 44

dark-mode: optional

colors-dark:
  bg: '#111111'
  bg-alt: '#1a1a1a'
  surface: '#222222'
  surface-hover: '#2a2a2a'
  text: '#ffffff'
  text-muted: '#999999'
  text-soft: '#666666'
  brand: '#ff6600'
  border: '#333333'
  border-soft: '#222222'
  on-brand: '#ffffff'

lineage:
  summary: |
    Are.na's design refuses every modern SaaS convention. There is no gradient,
    no rounded corner, no shadow, no chromatic accent system — just a near-white
    `#fafafa` canvas, plain black text, a 1px `#dddddd` hairline grid, and one
    orange (`#ff6600`) that does everything from link colour to logo. Type is a
    single Helvetica / Inter-class sans at small sizes — H1 lands at a modest 32px,
    body at 14px. The result is a site that reads like an early-2000s web reference
    (think Lialina-era net-art or pre-redesign Pitchfork) in a 2026 context — a
    deliberate counter-position against engagement-optimised social products. The
    closest visual sibling is Craigslist in spirit and old-school MoMA exhibition
    catalogues in execution. Where every other social network reaches for warmth,
    motion, or chromatic systems, Are.na goes the other direction — and the
    consistency of that refusal is the brand.
  influences:
    - name: Craigslist
      role: Information-density-over-aesthetic ethos and orange-link inheritance.
      url: https://craigslist.org
    - name: MoMA exhibition catalogues
      role: Hairline grid, plain sans, no chromatic flourish — institutional minimalism.
      url: https://www.moma.org
    - name: Olia Lialina / Net Art
      role: Browser-native, anti-skeuomorphic refusal-of-design lineage.
      url: http://art.teleportacia.org
    - name: David Reinfurt / Dexter Sinister
      role: Conceptual artist-publishers; index-as-aesthetic.
      url: https://o-r-g.com
    - name: Pitchfork (pre-2017 redesign)
      role: Plain-typography editorial register; a music-criticism inheritance.
---

## 1. Visual Theme & Atmosphere

Are.na's website is built on a single principle: do nothing unnecessary. The canvas is `#fafafa`, the text is plain `#000000`, the divider is a 1px `#dddddd` hairline, and the only chromatic event is the signature orange `#ff6600` that does triple duty as link colour, brand colour, and CTA fill. There is no gradient, no rounded corner, no drop shadow, no atmospheric glow. The page reads like a museum object label — pure index, no marketing.

Type is a single sans — Inter when it is loaded, Helvetica Neue or Arial as fallback — set at unusually small sizes for a 2026 site. The H1 lands at 32px / 500 weight, body at 14px / 1.45 line-height. Every block sits flush against its hairline neighbour. The result reads as an information browser rather than a marketing page — and the refusal of marketing aesthetics is itself the marketing. The sub-cultural badge of Are.na is precisely this refusal; using it correctly means resisting every reflex toward warmth, motion, or polish.

The atmosphere is library-like. Channels (the platform's primary data structure) appear as hairline-bordered tiles in dense grids, each tile a flush rectangle of channel name, owner, block count, and timestamp. Feed rows pack tightly — there is no card padding around 24px, no `1.5rem` gutter, no breathing room. Where Linear or Stripe leaves whitespace as oxygen, Are.na fills the viewport with content and trusts the user to read.

The orange is the entire emotional vocabulary. It signals every action — link, button, logo, hover-underline — and it is the only saturated hue on the page. The exact value `#ff6600` is a heritage colour: it points back to Craigslist's links and to early-1990s default browser hyperlinks. Using it correctly means never letting another saturated colour share the page; even semantic states (success green, warning amber) are kept restrained enough to read as neutral grey-with-tilt rather than separate accents.

Where Notion or Linear curates a typographic register that signals "we are a serious software product", Are.na curates a register that signals "we are a research environment". The closest contemporaries are Github Gist (in its Spartan layout) and pre-redesign Pitchfork (in its plain-text editorial register), but neither commits as fully to the refusal-of-design ethos.

**Key Characteristics**

- Near-white `#fafafa` canvas — never pure white at full-page
- Plain `#000` text, no opacity softening, no near-black warmth
- Single `#ff6600` orange for link / button / logo — the entire chromatic vocabulary
- 1px `#dddddd` hairline borders define every block; no shadows, no gradients
- Every radius is `0`; the square corner is non-negotiable
- Helvetica / Inter-class sans at small editorial sizes (H1 at 32px, body at 14px)
- JetBrains Mono for slugs, timestamps, and indexing labels — typewriter-grade
- Dense grids; whitespace is a luxury Are.na refuses on purpose
- Hover states collapse to colour-and-tone, never elevation or scale
- No motion as default; transitions are 100–150ms colour shifts when present

## 2. Color Palette & Roles

### Primary

- **bg** (`#fafafa`): near-white page canvas; never pure white at full-page scale.
- **text** (`#000000`): plain black for body, display, and links — no opacity tilt, no warm tint.
- **brand** (`#ff6600`): the signature orange — link, CTA, logo, hover-underline.

### Brand & Dark

- **brand-hover** (`#e85a00`): orange a half-step darker for pressed and hovered states.
- **brand-active** (`#cc4f00`): deepest pressed orange; rarely seen.
- **brand-soft** (`#fff1e6`): softest tint of orange, used sparingly for selection backgrounds.
- **brand-faint** (`#fff8f1`): near-white tint, almost imperceptible — for hover tints in dense grids.

### Accent

There is intentionally no accent palette. The system is `bg + text + brand + neutrals`. Any apparent "accent" is actually a use of the brand orange in a different role.

### Interactive

- **link** (`#ff6600`): identical to `brand`; the link colour and the brand colour are the same hue, and underlining only appears on hover.
- **link-hover**: brand colour stays, underline appears via `text-decoration`; never a colour shift.
- **selected**: `brand-soft` (`#fff1e6`) as fill, `brand` as text colour.
- **disabled**: `text-faint` (`#bbbbbb`) on `surface` (`#f1f1f1`); reduced opacity is not used.

### Neutral Scale

- **text-muted** (`#666666`): captions, meta, channel descriptions; AA at body sizes.
- **text-soft** (`#999999`): tertiary text — channel block counts, timestamps.
- **text-faint** (`#bbbbbb`): disabled labels, separator lines.

### Surface & Borders

- **bg-alt** (`#ffffff`): pure white inside content blocks (channel tiles, modal interiors).
- **surface** (`#f1f1f1`): subtle hover panel for cards.
- **surface-hover** (`#e8e8e8`): emphasised hover; rarely used.
- **bg-warm** (`#f6f5f3`): softest warm panel for nested grids.
- **border** (`#dddddd`): the canonical 1px hairline; appears around every block.
- **border-soft** (`#eeeeee`): softest divider for sub-grids and inner table rows.
- **border-strong** (`#999999`): rare emphasis — used only on form-field validation.

### Shadow Colors

There are no shadow tokens. The hairline border is the entire elevation system. The only "ring" is the 2px brand outline used for keyboard focus.

### Semantic

- **success** (`#2d6a4f`) on **success-bg** (`#e8f0eb`): restrained editorial green; reads almost as a darker neutral.
- **warning** (`#7a5300`) on **warning-bg** (`#f5ebd6`): subdued amber — never the saturated brand orange.
- **danger** (`#8b1a1a`) on **danger-bg** (`#f3e0e0`): subdued brick.
- **info** (`#666666`) on **info-bg** (`#f1f1f1`): info reuses muted-neutral; the system refuses an info-blue.

## 3. Typography Rules

### Font Family

- **Primary (display & body)**: Inter → Helvetica Neue → Helvetica → Arial → sans-serif. The chain is intentionally short; Are.na refuses webfonts as primary load and depends on the system fallback as a feature.
- **Mono companion**: JetBrains Mono → iA Writer Mono → Menlo → Monaco → Courier New → monospace.
- **No serif**: there is no editorial serif in the system. The plain sans is the editorial register.
- **OpenType features**: only `kern` (default) — no stylistic alternates, no tabular numerals as default; the system embraces the fallback's idiosyncrasies.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display | Inter | 40 | 500 | 1.15 | -0.005em | kern | feature-page hero only |
| h1 | Inter | 32 | 500 | 1.2 | -0.005em | kern | the canonical hero — small for 2026 |
| h2 | Inter | 24 | 500 | 1.25 | 0 | kern | section heads |
| h3 | Inter | 18 | 500 | 1.35 | 0 | kern | sub-section heads |
| h4 | Inter | 16 | 500 | 1.4 | 0 | kern | inline emphasis heads |
| h5 | Inter | 14 | 500 | 1.45 | 0 | kern | label-grade heads |
| h6 | Inter | 12 | 500 | 1.4 | 0 | kern | minute heads |
| body-large | Inter | 16 | 400 | 1.5 | 0 | kern | rare; long-form blog |
| body | Inter | 14 | 400 | 1.45 | 0 | kern | the canonical reading size |
| body-small | Inter | 13 | 400 | 1.4 | 0 | kern | dense block contents |
| caption | Inter | 12 | 400 | 1.35 | 0 | kern | image / chart captions |
| label | JetBrains Mono | 12 | 400 | 1.3 | 0 | — | timestamp, slug, count |
| micro | JetBrains Mono | 11 | 400 | 1.3 | 0.02em | — | absolute smallest type |
| code | JetBrains Mono | 13 | 400 | 1.5 | 0 | — | code block |
| code-inline | JetBrains Mono | 13 | 400 | 1.4 | 0 | — | inline code |
| link | Inter | 14 | 400 | 1.45 | 0 | kern | inline link, brand colour |
| quote | Inter | 16 | 400 | 1.5 | 0 | kern | rare; editorial quote |

### Principles

- **One weight (500) for headings, one weight (400) for body** — there is no light, semibold, or bold. The dual-weight discipline is the entire typographic vocabulary.
- **Small sizes are intentional**: the 14px body and 32px H1 are deliberately editorial-small. Scaling up to a 64px banner reads as a different product entirely.
- **Mono labels mark indexing**: anywhere the page is indexing data (channel slugs, block counts, timestamps), the type switches to JetBrains Mono. This is the typographic equivalent of card-catalog discipline.
- **No tracking discipline**: the only tracking value used is `-0.005em` on the largest displays; everything else is `0` or `0.02em` for micro labels.
- **The fallback chain is a feature**: Are.na deliberately allows the page to render in Helvetica Neue or system Arial when Inter doesn't load — this is a refusal of webfont-as-aesthetic.
- **No editorial serif**: the absence of a serif is the discipline; even pull-quotes use the same sans, italicised at 16px.

## 4. Component Stylings

### Buttons

**Primary (orange flat)**
- Background: `#ff6600`. Text: `#ffffff` at Inter 400 / 14px. Padding: `8px 16px`. Radius: 0. Border: none.
- Hover: background → `#e85a00`, no scale, no shadow. Active: background → `#cc4f00`.
- Use: every primary CTA — Sign up, Subscribe, New channel.

**Ghost (hairline outline)**
- Background: transparent. Text: `#000000` at Inter 400 / 14px. Padding: `8px 16px`. Radius: 0. Border: `1px solid #dddddd`.
- Hover: background → `#f1f1f1`. Use: secondary action paired with orange primary.

**Text (inline orange link)**
- Background: transparent. Text: `#ff6600` at Inter 400 / 14px. Padding: `4px 0`. Radius: 0.
- Hover: text-decoration: underline. Use: inline navigation, "see all", "view channel".

### Cards

**Hairline grid block** (the universal card)
- Background: `#ffffff`. Border: `1px solid #dddddd`. Radius: 0. Padding: 12px.
- No shadow. Hover: background → `#fafafa` (no outline change).
- Use: every block in the system — channel tile, feed row, search result.

**Channel tile**
- Background: `#ffffff`. Border: `1px solid #dddddd`. Radius: 0. Padding: 12px 16px.
- Internal layout: channel name (Inter 500 / 16px) + owner / timestamp (JetBrains Mono 12px / `#666666`) + block count (Inter 400 / 12px / `#999999`).
- Hover: background → `#fafafa`; underline on channel name.

**Feed row**
- Background: transparent (sits on `#fafafa`). Border-bottom: `1px solid #eeeeee`. Padding: 8px 0.
- Use: dense list rendering — search results, activity feed.

### Badges, Tags, Pills

**Block-count tag**
- Background: transparent. Text: `#999999` at JetBrains Mono 12px. Padding: 0. No border, no radius, no fill.
- Use: "44 blocks", "12 followers" — pure typographic tag.

**Type badge** (rare)
- Background: `#f1f1f1`. Text: `#666666` at JetBrains Mono 11px. Padding: `2px 6px`. Radius: 0.
- Use: block type identifier — "image", "text", "link", "channel".

### Inputs / Forms

**Text input**
- Background: `#ffffff`. Border: `1px solid #dddddd`. Radius: 0. Padding: `8px 12px`. Font: Inter 400 / 14px.
- Focus: border → `#000000` (no ring, no colour shift).
- Placeholder: `#999999`.

**Search input** (anchor of the homepage)
- Background: `#ffffff`. Border: `1px solid #dddddd`. Radius: 0. Padding: `12px 16px`. Font: Inter 400 / 16px.
- Focus: border → `#000000`. Use: the page-defining search.

### Navigation

**Top bar**
- Background: `#fafafa`. Border-bottom: `1px solid #dddddd`. Height: 48px (compact).
- Logo: "Are.na" wordmark in Inter 500 / 16px in `#000000`.
- Nav items: Inter 400 / 14px, colour `#000000`, hover → `#ff6600`.
- No background tint on hover; the colour shift to orange is the entire interaction.

**Side nav** (channel sidebar)
- Background: `#fafafa`. Border-right: `1px solid #dddddd`.
- Item padding: `6px 12px`. Hover: background → `#f1f1f1`.

### Tooltips, Toasts, Modals

- **Tooltip**: background `#000000`, text `#ffffff` at Inter 400 / 12px, radius 0, padding `4px 8px`. No shadow.
- **Toast**: background `#000000`, text `#ffffff` at Inter 400 / 14px, radius 0, padding `12px 16px`. No shadow.
- **Modal**: background `#ffffff`, border `1px solid #dddddd`, radius 0, no shadow. Backdrop: `rgba(0,0,0,0.4)`.

## 5. Layout Principles

### Spacing System

Base unit: 4px. Scale: `[1, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 64, 80]` × 4px. The system favours small intervals — 8px / 12px / 16px do most of the gutter work, and 32–48px separates major bands. This is *substantially tighter* than peers (Notion at 24–48, Linear at 32–80) and the tightness is the brand.

### Grid & Container

- **Page width**: 1440px max — wide for content density, tight for whitespace.
- **Prose width**: 640px for editorial pages.
- **Hero treatment**: the homepage hero is the search input — there is no banner, no large headline, no marketing image. The search field anchors the page.
- **Feature grid**: channel grids run 4–6 columns at 1440px, 3 at 1024px, 2 at 768px, 1 at 480px. Gap: 8–12px.

### Whitespace Philosophy

Whitespace is a refusal Are.na makes deliberately. Where Linear treats whitespace as breathing room, Are.na treats whitespace as wasted real estate. The page packs content densely and trusts the user's literacy. The result is a higher information density than any contemporary social product — and the higher density is the value proposition.

### Section Cadence

There is essentially no section cadence in the marketing sense. The page is a single dense surface of channels, blocks, and feed rows; "sections" are barely-marked transitions, often just a horizontal hairline rule at full bleed. The lack of cadence is a refusal of marketing rhythm.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| any | 0px | every element — buttons, cards, inputs, modals, tags, images |

Every radius in the system is `0`. Buttons, inputs, channel tiles, images, modals — all square corners. This is the most consistent shape decision on the modern web. The pill, the rounded card, the soft button — none of them exist on Are.na. The square corner is the brand.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | flat, on `#fafafa` | body content, default surfaces |
| 1 | `1px solid #dddddd` hairline | cards, channel tiles, every block |
| 2 | hover background tint (`#f1f1f1`) | hovered card or row |
| 3 | tooltip / toast — black fill | floating notification |
| 4 | modal — `#ffffff` fill + `1px #dddddd` + backdrop | dialog |
| 5 | n/a | system refuses higher elevation |

**Shadow Philosophy**: there is no shadow. The hairline border is the entire elevation system. Where every other social product uses shadow tiers to communicate hierarchy, Are.na refuses the entire vocabulary and trusts the hairline + tonal contrast pair. On hover, surfaces flip to `#f1f1f1` — that is the entire interaction vocabulary.

## 8. Interaction & Motion

### Easing

- **standard**: `cubic-bezier(0.25, 0.1, 0.25, 1)` — the browser default ease, used because Are.na refuses to invent a custom curve.
- **linear**: used for the rare progress indicator.
- **No emphasized ease**: there are no entrance choreographies that would require an emphasized curve.

### Durations

- **instant** (0ms): full-page navigation — the page reloads or swaps without transition.
- **fast** (100ms): hover background tint shift.
- **standard** (150ms): link colour shift, focus ring appearance.
- **slow** (200ms): the rare modal open.

### Per-component micro-states

- **Button hover**: background colour shift over 100ms; no transform, no shadow.
- **Card hover**: background flips from `#ffffff` to `#f1f1f1` over 100ms.
- **Link hover**: text-decoration: underline appears instantly (no animation); the orange colour persists.
- **Input focus**: border colour shifts from `#dddddd` to `#000000` over 100ms; no ring expansion.
- **Channel tile hover**: tile name underlines (text-decoration), background tints to `#fafafa`.

### Page transitions

Are.na does not animate page transitions. Pages reload or replace content instantly. This is part of the brand's refusal — every contemporary peer uses route transitions to communicate hierarchy; Are.na refuses that vocabulary entirely.

### Reduced-motion strategy

`prefers-reduced-motion: reduce` is honored — but the defaults are already minimal. Setting reduced-motion drops the 100–150ms colour-shift transitions to 0ms. Since there are no transforms or scales in the system, the reduced-motion path is essentially the same as the default for any user with a slow connection.

## 9. Accessibility & A11y

### Contrast pairs (computed)

- **text on bg**: `#000000` on `#fafafa` → 19.2:1 (AAA at all sizes).
- **text-muted on bg**: `#666666` on `#fafafa` → 5.7:1 (AA at body, AAA at large).
- **on-brand on brand**: `#ffffff` on `#ff6600` → 4.5:1 (AA at body sizes; sits at the WCAG threshold).
- **brand on bg**: `#ff6600` on `#fafafa` → 4.6:1 (AA at body); the orange link is intentionally at the threshold.
- **text-soft on bg**: `#999999` on `#fafafa` → 3.0:1 (passes for non-text decorative use only).

### Focus indicators

- **Default focus ring**: `2px solid #ff6600` with 0px offset — the orange brand colour is the focus indicator.
- **Within input fields**: border colour shifts to `#000000`; no additional ring.
- **Buttons**: 2px orange ring at 2px offset.

Focus rings are never removed for mouse users — Are.na considers the visible focus ring a feature, not a UX bug.

### ARIA patterns

- Channel grids use semantic `<ul>` / `<li>` rather than `role="grid"` — Are.na trusts native HTML.
- Search uses `role="search"` landmark.
- Modals use `role="dialog"`, `aria-modal="true"`, focus trap, `Esc` to close.
- Combobox-style search uses `role="combobox"` with `aria-expanded` and `aria-activedescendant`.

### Keyboard nav order

Top bar → search (anchored at hero) → channel grid in DOM order → footer. Every interactive element is `Tab`-reachable. `Skip to content` link appears at top of DOM, visible on focus.

### Screen reader hints

- Decorative hairline dividers are `aria-hidden="true"`.
- Block-count labels carry `aria-label="X blocks in channel"` rather than relying on numeral-only parsing.
- Icon-only buttons (rare) carry `aria-label` describing the action.

### Reduced motion

Honored throughout — see §8. The system's defaults are already at or below the reduced-motion threshold, so the implementation is essentially native.

## 10. Responsive Behavior

### Breakpoints

| Tier | Width | Behavior |
|---|---|---|
| mobile | < 480px | single column, 8px gutter, 24px section padding, 14px body / 24px H1 |
| tablet | 480–768px | 2-column channel grid, 12px gutter, 32px section padding |
| desktop | 768–1024px | 3-column channel grid, 12px gutter, 48px section padding |
| wide | 1024–1280px | 4-column channel grid, 12px gutter, 64px section padding |
| ultra | 1280px+ | 5–6 column channel grid, container caps at 1440px |

### Touch Targets

Minimum 44×44px on touch devices. Are.na's tight padding (`8px 12px` on inputs) is augmented on mobile to `12px 16px` to clear the touch threshold. Inline links increase tap area through `padding: 8px 0`.

### Collapsing strategy

- **Top nav**: collapses to a hamburger at < 768px, but the search remains visible at hero.
- **Channel grid**: 6 → 4 → 3 → 2 → 1 columns at 1280 / 1024 / 768 / 480 / 360.
- **Side nav**: hides off-canvas at < 1024px, slides in via menu trigger.
- **Feed row**: text wraps, no truncation; the dense layout collapses gracefully.
- **Footer**: 4-column → 2-column → 1-column at 1024 / 768 / 480.

### Image behavior

Channel preview images use `object-fit: cover` with `aspect-ratio: 1/1` for grid uniformity. Full-bleed images in feed rows preserve original aspect ratio.

### Container queries

Used inside the side-nav — the nav switches between condensed (icon-only) and expanded modes based on container width.

## 11. Content & Voice

### Tone

Are.na's tone is **library-neutral**: descriptive, declarative, and quietly editorial. It writes like a curator's wall label — short, factual, no marketing rhetoric. Headlines are channel names (which the user creates) and the platform's own copy is conspicuously sparse: "Are.na is a platform for connecting ideas and building knowledge."

### Microcopy patterns

- **Button verbs**: "Sign up", "New channel", "Subscribe", "Save", "Connect". Every CTA is a single verb in title case; no "Get Are.na free" or "Try the demo".
- **Error messages**: pattern is "[Action] failed. [Reason if known]." e.g. "Save failed. The channel may have been deleted."
- **Success confirmations**: typically silent — actions complete without toast, and the UI updates in place. Where confirmation is needed, the copy is one word: "Saved."

### Empty states

Empty states are direct and instructional, not cheerful. "No channels yet — start one." or "This channel is empty." Never empty-state illustrations or "Oops!" copy. The dry tone is part of the brand.

### CTA verb conventions

- **Primary**: "Sign up" or "Join" — never "Get started" or "Try free".
- **Subscription**: "Subscribe" — Are.na has a paid tier and the verb is plain.
- **Demo / sales**: there is no demo CTA; the platform is the demo.
- **Newsletter**: "Subscribe" — same verb as the paid tier (the dry register).

## 12. Dark Mode & Theming

Are.na ships an optional dark mode for the in-product environment, though the marketing surface stays light by default. The dark map (see frontmatter `colors-dark`):

- **bg**: `#111111` (warm near-black, not pure black)
- **bg-alt**: `#1a1a1a` for block fills
- **text**: `#ffffff` (no opacity tilt — full white reads cleaner against warm-near-black)
- **text-muted**: `#999999`, **text-soft**: `#666666`
- **brand**: `#ff6600` — the orange holds at full saturation in dark mode (no shift)
- **border**: `#333333` for the hairline divider; the system preserves the hairline-as-elevation logic.

When implementing dark mode:
- The hairline divider remains the only elevation strategy.
- Hover states tint upward (`#1a1a1a` → `#222222`) rather than down.
- The orange does not shift — it holds at `#ff6600` because contrast against `#111111` is already 6.7:1 (AA Large).
- No shadows are added; the dark mode preserves the flat-as-discipline doctrine.

The dark mode is opt-in only — Are.na refuses to follow `prefers-color-scheme: dark` automatically, treating colour scheme as a user choice rather than an environmental default.

## 13. Lineage & Influences

Are.na's design refuses every modern SaaS convention and that refusal is the brand. There is no gradient, no rounded corner, no shadow, no chromatic accent system — just a near-white `#fafafa` canvas, plain black text, a 1px `#dddddd` hairline grid, and one orange (`#ff6600`) that does everything. The aesthetic descends from three lineages:

**Institutional minimalism**: MoMA exhibition catalogues, Yale Press editions, the Dexter Sinister / O-R-G publishing tradition. These references treat the page as an index — pure typography, hairline grids, no chromatic flourish. Are.na inherits this language directly: the channel-tile grid is a museum-card catalogue translated to web.

**Net-art refusal-of-design**: the Olia Lialina and Cory Arcangel lineage of browser-native art that refuses to optimise for engagement or aesthetic polish. Sites in this tradition (UbuWeb, the early Rhizome.org) commit to plain-html-as-aesthetic and use the browser's defaults as features. Are.na is the most successful contemporary expression of this lineage applied to a social product.

**Information-density tradition**: Craigslist (the explicit colour-of-orange-link inheritance), pre-2017 Pitchfork (plain editorial register), early Hacker News (information density without chrome). Where contemporary social products optimise for engagement, Are.na optimises for browse depth — and the visual density carries that priority.

**Named influences**

- **Craigslist** ([craigslist.org](https://craigslist.org)) — Information-density-over-aesthetic ethos and the explicit orange-link inheritance.
- **MoMA exhibition catalogues** ([moma.org](https://www.moma.org)) — Hairline grid, plain sans, no chromatic flourish; institutional minimalism.
- **Olia Lialina / Net Art** ([art.teleportacia.org](http://art.teleportacia.org)) — Browser-native, anti-skeuomorphic refusal-of-design.
- **David Reinfurt / Dexter Sinister** ([o-r-g.com](https://o-r-g.com)) — Conceptual artist-publishers; index-as-aesthetic.
- **Pitchfork (pre-2017)** — Plain-typography editorial register; music-criticism inheritance.

## 14. Do's and Don'ts

**Do**

- Keep every radius at `0`; the square corner is non-negotiable and the most recognisable shape decision in the system.
- Treat the orange `#ff6600` as the only chromatic event — link, button, logo all share it.
- Pack content densely; whitespace is a luxury Are.na refuses on purpose.
- Use 1px `#dddddd` hairline borders for every block; this is the entire elevation system.
- Set the H1 at 32px / 500 weight — the small-hero is the brand and an 80px banner reads as a different product.
- Run the site at small editorial type sizes (14px body) — bumping to 16px+ erodes the dense-information register.
- Use JetBrains Mono for slugs, timestamps, and indexing labels — the typewriter cue is part of the brand.
- Honor `prefers-reduced-motion: reduce` — the defaults are already minimal, so reduced-motion is essentially native.
- Use plain `#000` for text, not near-black or warm-tinted black; the discipline is plain black on near-white.
- Treat search as the homepage hero, not a banner image or marketing headline.

**Don't**

- Don't add drop shadows or gradients; depth here is hairline-and-tone, never elevated.
- Don't scale display type past 32px; the small-hero is the brand and an 80px banner reads as a different product.
- Don't introduce a second accent hue; even hover states stay within the orange + neutral system.
- Don't soften corners — even 2px radius reads as a different product.
- Don't add a webfont beyond Inter; the system fallback chain (Helvetica / Arial) is a feature.
- Don't use the orange for body text; the orange is reserved for action and identity.
- Don't add transitions longer than 150ms — the system's motion vocabulary is colour-and-tone.
- Don't add empty-state illustrations or marketing-cheerful copy; the dry register is the voice.
- Don't replace the hairline `#dddddd` with a darker grey divider; the specific 16% black tone is calibrated.
- Don't use sentence-case CTAs that don't name the verb ("Get started"); Are.na names the verb directly.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #fafafa
bg-alt: #ffffff
surface: #f1f1f1
text: #000000
text-muted: #666666
text-soft: #999999
brand: #ff6600
brand-hover: #e85a00
brand-soft: #fff1e6
border: #dddddd
border-soft: #eeeeee
```

### Example Component Prompts

1. "Create a marketing hero in the Are.na style: `#fafafa` near-white canvas, no banner image, a single search input at the top (white fill, `1px solid #dddddd` hairline, square corners, 12px / 16px padding, Inter 16px) and a small H1 at Inter 32px / 500 weight in plain `#000`."

2. "Design a channel tile in the Are.na style: `#ffffff` background, `1px solid #dddddd` hairline, square corners (no radius), 12px padding, channel name at Inter 500 / 16px in `#000`, owner / timestamp at JetBrains Mono 12px / `#666666`, block count at Inter 12px / `#999999`. Hover: background → `#fafafa`, no shadow change."

3. "Render an orange CTA button in the Are.na style: `#ff6600` background, `#ffffff` text at Inter 400 / 14px, `8px 16px` padding, square corners, no shadow, no border. Hover: background → `#e85a00`."

4. "Create a dense feed grid in the Are.na style: 4–6 columns at desktop, `1px solid #dddddd` hairline between rows, no card padding, no shadow, Inter 14px / 1.45 body type, `#666666` for meta, `#ff6600` for inline links."

5. "Design a navigation bar in the Are.na style: `#fafafa` background, `1px solid #dddddd` bottom border, 48px height, Inter 500 / 16px wordmark on the left, Inter 400 / 14px nav items (`#000`) on the right with hover colour shift to `#ff6600` (no underline, no background tint)."

6. "Render an empty-state in the Are.na style: plain `#000` text at Inter 400 / 14px reading 'No channels yet — start one.' with the verb 'start one' as a `#ff6600` inline link, no illustration, no card, just the text on `#fafafa`."

### Iteration Guide

1. **Start with the canvas**: confirm `#fafafa` near-white (not pure white) and that every radius is `0`. If your prototype has any rounded corner, you've drifted to a different system.
2. **Verify the type voice**: H1 should be 32px max at 500 weight; body should be 14px. If your H1 is 48px+, you're aimed at Linear or Stripe, not Are.na.
3. **Audit the action colour**: there should be exactly one `#ff6600` event per module — link, button, or logo, not all three at once. The orange is a single chromatic event, not a system.
4. **Check the elevation strategy**: zero shadows. If you see any drop-shadow, replace it with a 1px `#dddddd` hairline.
5. **Verify the density**: Are.na is *denser* than peer systems. If your design has 24px+ card padding or 80px+ section padding, tighten it.
6. **Confirm the hairline discipline**: every block boundary should be `1px solid #dddddd`. Never solid grey at `#cccccc`, never `2px`.
7. **Check the mono labels**: anywhere you're showing data (counts, timestamps, slugs), switch to JetBrains Mono 12px in `#666666` or `#999999`.
8. **Test the no-motion path**: reload the page; if the entrance animates or the cards stagger in, you've added motion that doesn't belong. Are.na pages render instantly.
