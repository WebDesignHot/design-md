---
name: Ethereum
tagline: Off-white canvas, ethereum-blue `#1c64f2` voltage, and Inter + serif duet — community-owned protocol as open documentation.
author: webdesignhot
source_url: https://ethereum.org
spec: design.md/v1.5
quality: curated
featured: false
categories: [marketplace, fintech]
tags: [light, educational, community, open-source, web3, illustration, friendly]
preview_swatch: ['#fafafa', '#1c64f2', '#1a1a1a']
related: [polygon-tech, base-org, optimism-io]
description: 'Ethereum.org reads like a community-maintained open-source documentation site that happens to look really good. The base canvas is an off-white `#fafafa` (slightly warmer than pure white, marking the site as approachable rather than clinical), and the brand operates as a quiet ethereum-blue `#1c64f2` voltage on primary CTAs and links. Type runs **Inter** for body and a soft serif (Mier B / NB International Pro Serif) for editorial pull-quotes and chapter intros — the sans-body + serif-accent duet borrows from the Wired/Notion editorial playbook to soften the technical-protocol register. Layout commits to **educational documentation density**: 720px reading column, generous 1.7 line-height on body, side-rail navigation on docs pages, and prominent illustrated heroes (the famous "futuristic city" hero by community contributors). The brand''s clearest editorial choice: it doesn''t look corporate. Instead of a clinical fintech surface (Coinbase, Polygon enterprise) or a trader-pro terminal (OpenSea, Blur), Ethereum.org commits to a **friendly community-led aesthetic** — illustrated icons (commissioned from independent artists, signed by name on each artwork-credits page), warm cream-tinted dark mode, and zero corporate-jargon copy. The "no one owns Ethereum" thesis is reinforced by the design: there''s no corporate brand wordmark beyond the unicorn glyph, no trademark assertions, no "Ethereum Foundation Inc." footer.'

colors:
  bg: '#fafafa'                # canvas — soft off-white
  bg-soft: '#f5f5f5'           # surface-soft — secondary band
  bg-strong: '#ececec'         # surface-strong — feature band
  bg-warm: '#fff8e7'           # surface-warm — illustrated hero band (cream)
  bg-dark: '#212121'           # surface-dark — dark variant canvas
  bg-dark-elev: '#2c2c2c'      # surface-dark-elevated
  surface-card: '#ffffff'      # white card on off-white canvas
  surface-card-hover: '#f5f5f5'
  text: '#1a1a1a'              # ink — soft near-black
  text-body: '#404040'         # body
  text-muted: '#666666'        # captions
  text-subtle: '#999999'       # disabled
  text-on-dark: '#fafafa'      # cream ink on dark
  text-on-dark-soft: '#a8a8a8'
  brand: '#1c64f2'             # Ethereum Blue — primary
  brand-hover: '#1450c0'       # primary-hover
  brand-active: '#0e3d8e'      # pressed
  brand-light: '#3b82f6'       # lighter blue — illustrated highlights
  brand-soft: '#1c64f21a'      # 10% blue tint
  brand-glow: 'rgba(28,100,242,0.40)'
  on-brand: '#ffffff'
  accent-purple: '#7c3aed'     # purple accent — community/ENS
  accent-cream: '#fff8e7'      # warm cream — illustrated hero ground
  accent-mint: '#10b981'       # mint — staking/positive
  accent-coral: '#fb7185'      # coral — community-voice / DAO
  border: '#e5e5e5'             # default hairline
  border-soft: '#f0f0f0'
  border-strong: '#cccccc'
  semantic-up: '#10b981'
  semantic-down: '#ef4444'
  semantic-warning: '#f59e0b'
  semantic-info: '#1c64f2'
  ethereum-glyph-blue: '#3c3c3d'  # the diamond ethereum mark uses dark grey, not blue
  ethereum-glyph-light: '#8a92b2' # light variant
  focus-ring: 'rgba(28,100,242,0.40)'
  scrim: 'rgba(33,33,33,0.55)'
  link: '#1c64f2'
  link-hover: '#1450c0'

typography:
  display:
    family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700, 800]
  body:
    family: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  serif:
    family: '"Mier B", "NB International Pro Serif", "Tiempos Text", Georgia, serif'
    weights: [400, 500]
    opentype-features: ['liga']
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero', 'ss01']
  scale:
    display-mega:   { size: 64, weight: 800, lineHeight: 1.05, tracking: '-1.5px', family: display }
    display-xl:     { size: 48, weight: 800, lineHeight: 1.10, tracking: '-1px',   family: display }
    display-lg:     { size: 36, weight: 700, lineHeight: 1.15, tracking: '-0.6px', family: display }
    display-md:     { size: 28, weight: 700, lineHeight: 1.20, tracking: '-0.4px', family: display }
    display-sm:     { size: 22, weight: 700, lineHeight: 1.25, tracking: '-0.2px', family: display }
    title-lg:       { size: 20, weight: 700, lineHeight: 1.30, tracking: '0',      family: body }
    title-md:       { size: 18, weight: 700, lineHeight: 1.30, tracking: '0',      family: body }
    title-sm:       { size: 16, weight: 700, lineHeight: 1.30, tracking: '0',      family: body }
    body-lg:        { size: 18, weight: 400, lineHeight: 1.65, tracking: '0',      family: body }
    body-md:        { size: 16, weight: 400, lineHeight: 1.70, tracking: '0',      family: body }
    body-sm:        { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',      family: body }
    caption:        { size: 13, weight: 400, lineHeight: 1.45, tracking: '0',      family: body }
    caption-strong: { size: 12, weight: 600, lineHeight: 1.40, tracking: '0.4px',  family: body }
    label-eyebrow:  { size: 11, weight: 700, lineHeight: 1.30, tracking: '1px',    family: body, transform: uppercase }
    pull-quote:     { size: 24, weight: 400, lineHeight: 1.55, tracking: '-0.3px', family: serif }
    chapter-intro:  { size: 22, weight: 400, lineHeight: 1.50, tracking: '-0.2px', family: serif }
    button:         { size: 16, weight: 600, lineHeight: 1.20, tracking: '0',      family: body }
    nav-link:       { size: 16, weight: 500, lineHeight: 1.30, tracking: '0',      family: body }
    docs-sidebar:   { size: 14, weight: 500, lineHeight: 1.40, tracking: '0',      family: body }
    code-inline:    { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',      family: mono }
    code-block:     { size: 14, weight: 400, lineHeight: 1.65, tracking: '0',      family: mono }
    address-mono:   { size: 14, weight: 400, lineHeight: 1.30, tracking: '0',      family: mono, opentype: 'ss01' }

radius:
  none: 0
  xs: 4
  sm: 6
  md: 8
  lg: 12
  card: 8
  xl: 16
  pill: 999
  full: 9999

spacing:
  base: 4
  scale: { xxs: 4, xs: 8, sm: 12, base: 16, md: 20, lg: 24, xl: 32, xxl: 48, section: 80 }

layout:
  page-width: 1280
  prose-width: 720
  docs-width: 1200
  side-rail-width: 260
  header-height: 76
  grid-gutter: 24

components:
  button-primary:        { bg: brand, text: on-brand, padding: '12px 24px', height: 44, radius: md, font: button }
  button-primary-lg:     { bg: brand, text: on-brand, padding: '16px 32px', height: 52, radius: md, font: button }
  button-secondary:      { bg: surface-card, text: brand, padding: '12px 24px', height: 44, radius: md, border: '2px solid brand' }
  button-ghost:          { bg: transparent, text: text, padding: '12px 24px', height: 44, radius: md, border: '2px solid border' }
  button-text-link:      { bg: transparent, text: brand, padding: '0', height: auto, font: body-md }
  hero-band-light:       { bg: bg, padding: 'section 0', font: display-mega }
  hero-band-warm:        { bg: bg-warm, padding: 'section 0' }
  hero-band-dark:        { bg: bg-dark, text: text-on-dark, padding: 'section 0' }
  feature-card:          { bg: surface-card, border: '1px solid border', radius: card, padding: lg }
  feature-card-warm:     { bg: bg-warm, border: '1px solid border', radius: card, padding: lg }
  badge-pill:            { bg: brand-soft, text: brand, radius: pill, padding: '4px 12px' }
  badge-new:             { bg: 'rgba(16,185,129,0.10)', text: accent-mint, radius: pill, padding: '4px 12px' }
  badge-warning:         { bg: 'rgba(245,158,11,0.10)', text: semantic-warning, radius: pill, padding: '4px 12px' }
  callout-info:          { bg: brand-soft, border: '1px solid brand', border-left: '4px solid brand', radius: md, padding: lg }
  callout-warning:       { bg: 'rgba(245,158,11,0.05)', border-left: '4px solid semantic-warning', radius: md, padding: lg }
  callout-success:       { bg: 'rgba(16,185,129,0.05)', border-left: '4px solid accent-mint', radius: md, padding: lg }
  input-text:            { bg: surface-card, border: '1px solid border', radius: md, padding: '12px 16px', height: 44 }
  input-search:          { bg: surface-card, border: '1px solid border', radius: pill, padding: '12px 20px', height: 44 }
  top-nav:               { bg: bg, border: '1px solid border-soft', height: 76, font: nav-link }
  side-rail-docs:        { bg: bg, border-right: '1px solid border', padding: lg, width: 260 }
  toc-rail:              { bg: bg, padding: 'sm base', position: sticky, top: 100 }
  modal:                 { bg: surface-card, border: '1px solid border', radius: xl, padding: xl }
  toast-success:         { bg: surface-card, border: '1px solid accent-mint', radius: md, padding: 'sm base' }
  toast-error:           { bg: surface-card, border: '1px solid semantic-down', radius: md, padding: 'sm base' }
  illustration-card:     { bg: bg-warm, border: '1px solid border', radius: lg, padding: 0 }
  footer:                { bg: bg-soft, border-top: '1px solid border', padding: '64px 0' }
  footer-dark:           { bg: bg-dark, text: text-on-dark, padding: '64px 0' }

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 250
  duration-slow: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — illustration scroll-reveal animations disabled, hover lifts collapse to opacity-only'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0,0,0,0.04) 0 1px 3px'
  standard: 'rgba(0,0,0,0.06) 0 4px 12px'
  elevated: 'rgba(0,0,0,0.08) 0 12px 28px -8px'
  card-hover: 'rgba(0,0,0,0.10) 0 16px 36px -12px'
  modal: 'rgba(0,0,0,0.20) 0 32px 64px -8px'
  ring: '0 0 0 3px rgba(28,100,242,0.40)'
  none: 'none'

accessibility:
  contrast-text-on-bg: 14.7
  contrast-text-on-brand: 5.0
  contrast-body-on-bg: 9.6
  focus-ring: '3px solid rgba(28,100,242,0.40)'
  reduced-motion-honored: true

dark-mode: dual
---

## 1. Visual Theme & Atmosphere

Ethereum.org reads like a community-maintained open-source documentation site that happens to look really good. The canvas is **soft off-white** `#fafafa` — slightly warmer than pure white, deliberately approachable rather than clinical. Onto that floor the system places a quiet **ethereum-blue** voltage `#1c64f2` for primary CTAs, links, and signature glyphs. Accents emerge from commissioned illustrations: warm cream `#fff8e7` for illustrated hero bands, soft purple `#7c3aed` for community/ENS surfaces, mint `#10b981` for staking/positive states, coral `#fb7185` for DAO/community-voice surfaces. The brand operates as a four-to-five-colour palette that reads "community-led" rather than "corporate."

The site's tone is set by its **commissioned illustration**. Every chapter intro uses a custom-illustrated hero: warm-cream backgrounds, hand-drawn vector characters (rabbits, robots, futuristic-city scenes), each artwork credited to the contributing artist on a dedicated `/artwork/` page. The illustrations are the brand's clearest editorial choice — instead of stock-fintech dashboards or 3D renders (Polygon's hexagon, Linear's grid mesh), Ethereum.org commits to **friendly hand-drawn vectors** that signal "human, not corporate."

Type carries the editorial register through sans + serif duet. Body uses **Inter** at 16px with a generous **1.70 line-height** (the most generous in the entire web3 design landscape — this is closer to longform-reading territory than to fintech-marketing). Display sizes (22px and above) sit in Inter at weights 700–800 with hard negative tracking. The serif accent — **Mier B / NB International Pro Serif at weight 400** — appears on pull-quotes and chapter intros, providing the editorial-magazine flourish that's been absent from most web3 documentation.

Layout commits to **educational documentation density**: 720px reading column for body prose (the longread width), 1200px on docs pages with 260px sidebar + 720px content + table-of-contents rail. The site's most-visited surface is the `/learn/` chapter — every concept (gas, validators, smart contracts, staking) gets a dedicated page with hero illustration, body prose, and code blocks. The reading experience is genuinely pleasant; the kind of documentation other protocols reference admiringly.

The "no one owns Ethereum" thesis is reinforced by the visual: there's no corporate wordmark beyond the diamond glyph (rendered in dark grey `#3c3c3d`, not blue — a deliberate choice to keep the brand glyph quietly canonical), no trademark assertions in the footer, no "Ethereum Foundation Inc." attribution. The footer credits "everyone who has contributed" with a link to the GitHub repo. The site itself is open-source — community contributors edit it via PRs.

**Key Characteristics:**
- Off-white canvas `#fafafa` — approachable, not clinical
- Single voltage: Ethereum Blue `#1c64f2` for primary actions
- Four-to-five-colour secondary palette (purple, mint, coral, cream)
- Inter for body at 16px / 1.70 line-height — longread-comfortable
- Mier B serif at weight 400 for pull-quotes and chapter intros
- Diamond glyph rendered in dark grey `#3c3c3d` (not blue) — quietly canonical
- 8px card radius, 8px button radius — friendly, not corporate
- 720px reading column for body prose — longread width
- Section padding 80px — generous educational rhythm
- Commissioned hand-drawn illustrations on every chapter intro
- Dark mode supported with cream-tinted ink (not pure white)
- Footer credits "everyone who has contributed" — community-first attribution

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#fafafa`): Soft off-white page floor — slightly warmer than pure white.
- **Surface Soft** (`#f5f5f5`): Secondary band, footer ground.
- **Surface Strong** (`#ececec`): Feature band ground.
- **Surface Warm** (`#fff8e7`): Cream ground for illustrated hero bands.
- **Ink** (`#1a1a1a`): Primary headlines — soft near-black, not pure `#000`.
- **Brand** (`#1c64f2`): Ethereum Blue — primary actions, links.

### Brand & Dark
- **Ethereum Blue** (`#1c64f2`): Primary CTA, primary link, signature accent.
- **Brand Hover** (`#1450c0`): Pressed/hover.
- **Brand Active** (`#0e3d8e`): Pressed.
- **Brand Light** (`#3b82f6`): Lighter blue used in illustrated accents.
- **Brand Soft** (`#1c64f21a`): 10% tint — selected, callout-info bg.
- **Surface Dark** (`#212121`): Dark variant canvas.
- **Surface Dark Elevated** (`#2c2c2c`): Cards inside dark surfaces.
- **Ethereum Glyph Blue** (`#3c3c3d`): The diamond brand mark uses dark grey, not blue — a quiet-canonical choice.

### Accent
- **Purple** (`#7c3aed`): Community / ENS / DAO accents.
- **Mint** (`#10b981`): Staking / validators / positive states.
- **Coral** (`#fb7185`): Community-voice / participation accents.
- **Cream** (`#fff8e7`): Illustrated hero ground — warm-paper feel.

### Interactive
- **Link** = Brand `#1c64f2`, **with default underline** on body prose (educational register), no underline on nav links and CTAs
- **Hover** — primary CTA → `#1450c0`; cards lift 2px and gain neutral shadow; links thicken underline
- **Active / Pressed** — Brand Active `#0e3d8e`
- **Disabled** — `#999999` text, `#f5f5f5` bg
- **Selected** — `#1c64f21a` brand-soft bg

### Neutral Scale
`#fafafa` (Canvas) → `#f5f5f5` (Soft) → `#ececec` (Strong) → `#e5e5e5` (Border) → `#cccccc` (Border Strong) → `#999999` (Subtle) → `#666666` (Muted) → `#404040` (Body) → `#1a1a1a` (Ink). Pure neutral grey scale — no warmth tint, no purple cast. The scale is the brand's clearest editorial restraint.

### Surface & Borders
- **Surface Card** (`#ffffff`): Default white cards on off-white canvas.
- **Card Hover** (`#f5f5f5`): Card hover bg shifts to surface-soft.
- **Border** (`#e5e5e5`): Default 1px hairline.
- **Border Soft** (`#f0f0f0`): Softer divider.
- **Border Strong** (`#cccccc`): Focused border, callout border.

### Shadow Colors
Neutral near-black shadows at low opacity (`rgba(0,0,0,0.04–0.20)`). No brand-tinted shadows anywhere. Cards in resting state typically have no shadow — depth comes from the white-on-off-white surface contrast. Shadows appear only on hover and modal levels.

### Semantic
- **Up** (`#10b981`): Reuses mint accent — staking/positive
- **Down** (`#ef4444`): Saturated red — error
- **Warning** (`#f59e0b`): Amber — gas-fee warnings
- **Info** = Brand `#1c64f2`

## 3. Typography Rules

### Font Family
- **Display & Body** — `Inter`, fallback `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`. Both display and body use the same Inter family — display sizes hit weight 700–800 for visual hierarchy.
- **Serif** — `Mier B`, fallback `"NB International Pro Serif", "Tiempos Text", Georgia, serif`. A modern book-text serif at weight 400, used exclusively on pull-quotes and chapter-intros.
- **Mono** — `JetBrains Mono`, fallback `"IBM Plex Mono", ui-monospace, monospace`. With `tnum`, `zero`, `ss01` enabled.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|-----:|-------:|------------:|---------------:|-------------|-------|
| display-mega   | Inter | 64 | 800 | 1.05 | -1.5px | default | Marketing hero |
| display-xl     | Inter | 48 | 800 | 1.10 | -1px   | default | Section heros |
| display-lg     | Inter | 36 | 700 | 1.15 | -0.6px | default | Page titles, chapter heads |
| display-md     | Inter | 28 | 700 | 1.20 | -0.4px | default | Sub-section titles |
| display-sm     | Inter | 22 | 700 | 1.25 | -0.2px | default | Small section heads |
| title-lg       | Inter | 20 | 700 | 1.30 | 0      | default | Card titles |
| title-md       | Inter | 18 | 700 | 1.30 | 0      | default | Modal headers |
| title-sm       | Inter | 16 | 700 | 1.30 | 0      | default | Inline emphasis |
| body-lg        | Inter | 18 | 400 | 1.65 | 0      | default | Hero sub-copy, chapter lead |
| body-md        | Inter | 16 | 400 | **1.70** | 0 | default | Default running text — generous line-height |
| body-sm        | Inter | 14 | 400 | 1.55 | 0      | default | Secondary body |
| caption        | Inter | 13 | 400 | 1.45 | 0      | default | Image caption |
| caption-strong | Inter | 12 | 600 | 1.40 | 0.4px  | default | Eyebrow tags |
| label-eyebrow  | Inter | 11 | 700 | 1.30 | 1px    | default | UPPERCASE column headers |
| pull-quote     | Mier B | 24 | 400 | 1.55 | -0.3px | liga | Editorial pull-quote |
| chapter-intro  | Mier B | 22 | 400 | 1.50 | -0.2px | liga | First paragraph of /learn/ chapters |
| button         | Inter | 16 | 600 | 1.20 | 0      | default | All CTAs |
| nav-link       | Inter | 16 | 500 | 1.30 | 0      | default | Top nav |
| docs-sidebar   | Inter | 14 | 500 | 1.40 | 0      | default | Side-rail nav links |
| code-inline    | JetBrains Mono | 14 | 400 | 1.50 | 0 | default | Inline code |
| code-block     | JetBrains Mono | 14 | 400 | 1.65 | 0 | default | Code blocks (1.65 for readability) |
| address-mono   | JetBrains Mono | 14 | 400 | 1.30 | 0 | ss01 | Addresses with dotted-zero |

### Principles
- **Body line-height at 1.70** — the most generous in the entire web3 design landscape; longread-comfortable. Other protocols sit at 1.5; Ethereum.org's 1.70 signals "this is designed for actual reading"
- **Inter at weight 800 for display-mega and display-xl** — boldest weight in the family; signals "headline-grade" without leaving the Inter family
- **Mier B serif at weight 400 for pull-quotes** — exactly the same editorial-magazine duet as Notion's Lyon Text, Magic Eden's Foundry, Wired's serif
- **Body links carry default underline** — educational register requires clear link affordance, unlike marketing sites that strip underlines for cleanliness
- **Negative tracking on display sizes only** — body and below sit at 0
- **Substitutes**: Inter is open-source. Mier B is paid (Sharp Type); closest open licensable equivalent is Pangram Pangram's "Editorial New" or Klim's "Tiempos Text". JetBrains Mono open-source.

## 4. Component Stylings

### Buttons

**`button-primary`** — Primary CTA. `#1c64f2` blue bg, white text, 12 × 24 padding, 44px height, 8px radius. Hover → `#1450c0`. Used on "Start here", "Get ETH", "Start learning".

**`button-primary-lg`** — Marketing CTA. 16 × 32 padding, 52px height. Used on hero bands.

**`button-secondary`** — Outline-primary variant. White bg, blue text, **2px solid blue border**, 8px radius. The 2px border (vs typical 1px) is deliberate — it gives the button outline weight without filling.

**`button-ghost`** — Outline-neutral. Transparent bg, ink text, 2px `#e5e5e5` border, 8px radius.

**`button-text-link`** — Inline text-style CTA. No background, blue text, no padding. With trailing arrow ("Read more →").

### Cards

**`feature-card`** — Default educational card. White bg, 1px `#e5e5e5` border, 8px radius, 24px padding. Holds icon + title + body + "Read more →" link. Hover: lifts 2px with neutral shadow.

**`feature-card-warm`** — Illustrated variant. `#fff8e7` cream bg, 1px border, 8px radius. Used on "Get started" cards with hand-drawn illustration top.

**`illustration-card`** — Featured chapter card. Cream bg, 1px border, 12px radius, no padding (illustration bleeds to edges). Caption at bottom with chapter title.

### Callouts

**`callout-info`** — Educational info callout. Brand-soft `rgba(28,100,242,0.10)` bg, 4px `#1c64f2` left border, 1px `#1c64f2` border, 8px radius, 24px padding. Holds an info-icon and explanatory body. Used heavily on docs pages.

**`callout-warning`** — Warning callout. `rgba(245,158,11,0.05)` bg, 4px amber left border, 8px radius. Used for gas-fee warnings, deprecation notices.

**`callout-success`** — Success callout. `rgba(16,185,129,0.05)` bg, 4px mint left border, 8px radius. Used for "you're all set" educational completion states.

### Badges / Tags / Pills

**`badge-pill`** — `rgba(28,100,242,0.10)` brand-soft bg, blue text, 999px pill, 4 × 12 padding, caption-strong type.

**`badge-new`** — Mint-soft bg, mint text, 999px pill.

**`badge-warning`** — Amber-soft bg, amber text, 999px pill.

### Inputs / Forms

**`input-text`** — White bg, 1px `#e5e5e5` border, 8px radius, 12 × 16 padding, 44px height. Focus → 3px brand-glow ring, border tightens to `#1c64f2`.

**`input-search`** — White bg, 1px border, 999px pill radius, 12 × 20 padding, 44px height (perfect pill).

### Navigation

**`top-nav`** — 76px tall, off-white bg, 1px `#f0f0f0` bottom hairline. Diamond glyph + "ethereum.org" wordmark left (no corporate-style "Ethereum Foundation" lockup). Primary nav (Use, Learn, Build, Participate, Research). Right cluster: language switcher, search-icon, primary blue CTA "Get started".

**`side-rail-docs`** — 260px wide, off-white bg, 1px `#e5e5e5` right border, 24px padding. Section headers in label-eyebrow uppercase 1px tracking, link list below in docs-sidebar 14/500. Active link gets brand-soft bg + 4px blue left border.

**`toc-rail`** — Right-aligned table-of-contents on docs pages. Sticky at top: 100. List of section anchors in docs-sidebar 14/500. Active anchor highlighted with blue bullet point.

### Modals & Overlays

**`modal`** — White bg, 1px border, 16px radius, 32px padding. Modal scrim is `rgba(33,33,33,0.55)` near-black at 55%.

**`toast-success`** — White bg, 1px mint border-left, 8px radius. Auto-dismiss 4s.

**`toast-error`** — White bg, 1px red border-left, manual dismiss.

### Decorative

**`hero-illustration`** — Commissioned hand-drawn vector hero. Sits on `#fff8e7` cream ground, characters bleed off edges. Each illustration credits the artist on hover (fade-in tooltip "Illustration by @artist-handle"). On scroll-reveal, characters subtly translate-in with 200ms stagger.

**`footer-attribution`** — Bottom of footer reads "Built and maintained by everyone who has contributed" with a link to the public GitHub repo. No corporate "Ethereum Foundation Inc." attribution.

**`footer`** — Soft footer that closes most pages. `#f5f5f5` soft bg, 1px top border, 64px vertical padding. Multi-column link list (Use Ethereum, Learn, Developers, Ecosystem, Enterprise), language switcher, GitHub repo link, contributor credits.

## 5. Layout Principles

### Spacing System
- **Base unit**: 4px.
- **Tokens**: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 80.
- **Section padding (vertical)**: 80px on marketing — generous educational rhythm.
- **Card internal padding**: 24px on feature cards, 32px on illustration cards.
- **Gutters**: 24px between feature cards.
- **Body paragraph margin**: 24px between paragraphs (more generous than fintech sites).

### Grid & Container
- **Max content width**: 1280px on most pages, 1200px on docs (with sidebar).
- **Reading column**: 720px for body prose — longread-width.
- **Docs layout**: 260px sidebar + 720px content + 200px TOC rail at desktop.
- **Marketing grid**: 12-column with 24px gutters, 3-up feature card grid.

### Whitespace Philosophy
**Educational longread breath.** Ethereum.org willingly trades dense feature density for reading comfort. Body prose at 1.70 line-height, 720px reading column, 24px paragraph margins — the result reads like a magazine longread or a well-designed academic site, not like a fintech marketing page.

### Section Cadence
Hero (cream illustrated band) → 3-up feature cards (off-white) → callout-info → reading prose section → 4-up next-step cards → cream-band CTA → soft footer. The cadence alternates cream illustrated bands with off-white prose-sections, giving the site a textbook chapter rhythm.

## 6. Shapes & Radius

- **None** 0 — illustration crop edges, full-bleed bands
- **xs** 4 — micro chips
- **sm** 6 — small interior elements
- **md** 8 — buttons, inputs, callouts, cards (the default radius)
- **card** 8 — feature cards
- **lg** 12 — illustration cards, side-rail headers
- **xl** 16 — modals, large overlays
- **pill** 999 — badges, search input
- **full** 9999 — circular avatars

The 8px button + card radius is Ethereum.org's signature shape decision — softer than Blur (0px), harder than Magic Eden / Stripe (12–16px). The 8px register reads "friendly community-built tool" rather than "polished consumer marketplace" or "brutalist trader-pro."

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 Flat | No shadow, surface contrast only | Body sections, hero bands, callouts |
| 1 Card | White on off-white + 1px `#e5e5e5` | Feature cards, panel surfaces |
| 2 Hover | `translateY(-2px)` + neutral drop shadow | Card hover |
| 3 Floating | `rgba(0,0,0,0.06) 0 4px 12px` | Dropdowns, tooltips |
| 4 Card-hover | `rgba(0,0,0,0.10) 0 16px 36px -12px` | Feature card on hover |
| 5 Modal | `rgba(0,0,0,0.20) 0 32px 64px -8px` + scrim `rgba(33,33,33,0.55)` | Modal dialogs |
| Focus ring | `0 0 0 3px rgba(28,100,242,0.40)` | All keyboard focus |

**Shadow Philosophy**: Neutral near-black shadows only — **no brand-tinted shadows anywhere**. The community-led aesthetic explicitly rejects the "lit-edge brand-tinted ring" gesture used by OpenSea, Magic Eden, Polygon, Zora. Cards in resting state typically have no shadow at all; depth comes from white-on-off-white surface contrast and 1px hairline borders.

## 8. Interaction & Motion

- **Easing standard** — `cubic-bezier(0.4, 0, 0.2, 1)` for hover, dropdown, modal fade
- **Easing emphasized** — `cubic-bezier(0.2, 0, 0, 1)` for illustration scroll-reveal
- **Durations** — fast 150ms (hover), standard 250ms (card lift, modal fade), slow 400ms (illustration reveal)
- **Hover** — primary CTA darkens to `#1450c0`; cards lift 2px with neutral shadow; nav links shift colour to brand
- **Card lift** — `translateY(-2px)` on hover, returns on leave
- **Illustration scroll-reveal** — when an illustrated hero enters the viewport, its character elements translate-in with 200ms stagger (each character in turn). Disabled under reduced-motion.
- **Underline animation** — body prose links grow underline thickness from 1px to 2px on hover over 150ms
- **Page transition** — 250ms cross-fade
- **Reduced motion** — `prefers-reduced-motion: reduce` collapses lifts and illustration reveals to opacity-only

## 9. Accessibility & A11y

- **Contrast**: Ink `#1a1a1a` on off-white = 14.7:1 (AAA). Body `#404040` on canvas = 9.6:1 (AAA). White on Brand Blue `#1c64f2` = 5.0:1 (AA at body). Mint `#10b981` on white = 3.0 (AA-Large only). Coral `#fb7185` on white fails AA at body — used only as illustrated accent, never as small body text.
- **Focus indicator**: 3px solid `rgba(28,100,242,0.40)` ring on every interactive element. Border tightens to `#1c64f2` on focused inputs.
- **ARIA patterns**: Side-rail nav uses `role="navigation"` with `aria-current="page"`. Callouts use `role="note"` with `aria-label`. Modal dialogs use `role="dialog"` with focus trap.
- **Keyboard nav**: Top nav supports tab + arrow navigation through mega-menus. Side-rail and TOC rails are keyboard-traversable. Skip-to-content link in document head.
- **Screen reader hints**: Illustrations carry `alt` describing the scene + artist credit. Diamond glyph is `aria-label="Ethereum"`. Callout icons are `aria-hidden`; the callout's role + content carries semantic meaning.
- **Reduced motion**: Honoured — see §8.
- **Translation**: Site is translated into 50+ languages by community contributors; the language switcher in the top nav surfaces all of them. Translated content is editorial, not just labels.

## 10. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|------:|-------------|
| Mobile     | < 640  | Top nav → hamburger; hero display-mega 64 → 36px; feature cards 1-up; side-rail-docs collapses to top accordion; illustrations crop to centre; TOC rail moves to top of doc page as a collapsed accordion |
| Tablet     | 640–1024 | Nav condensed; feature cards 2-up; side-rail hidden behind a "Menu" button on docs |
| Desktop    | 1024–1280 | Side-rail persistent; feature cards 3-up; full nav |
| Wide       | > 1280 | Same as desktop; container caps at 1280px |

**Touch Targets**: Primary CTAs render at minimum 44 × 44px on mobile. Side-rail links expand to 48px tap targets.

**Collapsing Strategy**: Top nav → hamburger sheet with translation switcher inline. Side-rail-docs → top accordion. TOC rail → top of doc as collapsed-by-default accordion.

**Image Behavior**: Illustrations use `loading="lazy"` and preserve aspect ratios. SVG illustrations scale fluidly. Cream bg bleeds full-width on mobile.

## 11. Content & Voice

- **Tone** — friendly, educational, community-warm. "Welcome to Ethereum, the home for digital ownership." Not corporate. Not crypto-bro. Reads as a knowledgeable friend explaining a concept.
- **Microcopy** — verbs are educational + invitational: "Start here", "Get ETH", "Start learning", "Read more", "Explore". Avoids commands.
- **CTA verbs** — "Start here" (universal entry), "Get ETH" (acquisition), "Start learning" (educational), "Read more" (deepening), "Get involved" (community-side).
- **Empty states** — short and supportive. "No tokens here yet" with a "Get ETH" link below.
- **Error messages** — clear and remediable. "Network error — check your connection and retry" not "Transaction failed".
- **Educational microcopy** — every technical term gets a "Learn more →" link to its dedicated chapter. The site treats every page as a teaching moment.
- **Code formatting** — code blocks include a "Copy" pill at top-right; addresses are clickable with auto-copy and "Copied" confirmation toast.
- **Community-first language** — "Built and maintained by everyone who has contributed". The site never says "we" in a corporate sense; "we" means the community.
- **Translation register** — translations preserve the friendly + educational register; the brand has community translators who maintain the editorial voice across languages.

## 12. Dark Mode & Theming

Ethereum.org is **dual-theme**, user-toggleable. The dark variant uses:

- `bg-dark` `#212121` (canvas — soft near-black, never pure)
- `bg-dark-elev-1` `#2c2c2c` (card bg)
- `bg-dark-elev-2` `#383838` (hover bg)
- `text-on-dark` `#fafafa` (cream-tinted ink, **not pure white** — the cream tint signals continuity with the day-mode register)
- `text-on-dark-soft` `#a8a8a8` (muted)
- `border-on-dark` `rgba(255,255,255,0.10)` (10% white hairline)
- Brand blue `#1c64f2` stays constant; lightens to `#3b82f6` for hover on dark
- Cream illustration bg `#fff8e7` becomes a darker warm-tinted `#3a352d` on dark — illustrations are re-coloured, not just inverted; the artist-credit remains visible

The theme toggle is in the top nav (sun/moon icon). The site honours `prefers-color-scheme` on first visit and persists user choice in localStorage.

The dark variant deliberately avoids pure black `#000` — `#212121` reads as "considered dark" rather than "OLED-saving black." This is consistent with the site's commitment to comfort over aesthetic minimalism.

## 13. Lineage & Influences

Ethereum.org's design language inherits from **community-maintained open-source documentation sites** (MDN, React docs, Rust Book, Mozilla.org) and **editorial magazines** (Wired, Atlantic, Smithsonian) more than from any crypto-native peer. The off-white canvas, sans+serif duet, generous reading column, illustrated chapter heroes, and "credits to contributors" footer attribution are all references to community-doc and editorial-magazine traditions.

What it borrows: the off-white canvas + warm-cream illustrated band pattern from Mozilla.org and Notion; the serif pull-quote duet from Wired and Notion; the 720px reading column from Medium's longread template; the side-rail + TOC docs layout from React docs and MDN. The commissioned-illustration approach (with named artist credits) is most closely matched by Mailchimp's old illustrated brand era.

What it rejects: corporate fintech chrome (no metric strips, no partner-logo trust signals, no enterprise testimonials); single-brand-colour minimalism (the four-to-five-colour secondary palette is intentional — community-led, not corporate); dark canvas defaults (rejected as too crypto-trader for the educational register); 0px corner radius (rejected as too brutalist); pill CTAs (rejected — Ethereum's 8px button radius is the friendly-community register).

The shift from Ethereum.org V1 (2015–2019, simple-styled HTML doc site) to the current illustrated friendly-community register (2020+ rebrand) was led by community contributors and is itself documented in public PRs. The redesign was deliberately positioned as "by the community, for the community" — the current site is open-source on GitHub, and edits ship via PRs.

Influences:
- **Mozilla.org / MDN** — Off-white canvas, friendly community-led aesthetic, side-rail + TOC docs, generous reading column. https://www.mozilla.org / https://developer.mozilla.org
- **Notion** — Warm canvas + serif pull-quotes + sans body editorial duet. https://www.notion.com
- **Wired magazine** — Serif-display + sans-body editorial register. https://www.wired.com
- **React docs / Rust Book** — Side-rail + TOC docs layout, longread reading width. https://react.dev / https://doc.rust-lang.org/book
- **Mailchimp** (pre-Intuit acquisition) — Commissioned illustration aesthetic with named artist credits. https://mailchimp.com
- **Inter typeface** by Rasmus Andersson — Default UI sans. https://rsms.me/inter
- **Mier B** by Sharp Type — Body-serif companion (paid; closest open: Editorial New / Tiempos Text).

## 14. Do's and Don'ts

### Do
- Keep the canvas at `#fafafa` off-white — slightly warmer than pure white, deliberately approachable
- Use Ethereum Blue `#1c64f2` for primary actions and links — single-voltage discipline
- Inter for body at 16px / **1.70 line-height** — longread-comfortable
- Mier B serif at weight 400 for pull-quotes and chapter intros — editorial accent
- 8px corner radius on buttons and cards — friendly community tool register
- 720px reading column for body prose — longread width
- The diamond glyph stays `#3c3c3d` dark grey, never blue — the brand mark is quietly canonical
- Commission new illustrations from independent artists, credit by name, render on cream `#fff8e7` ground
- Use callouts (info/warning/success) liberally on docs pages — they're educational scaffolding
- Body prose links carry default underline — educational register requires clear link affordance
- Footer credits "everyone who has contributed" — community-first attribution
- Cream-tinted text on dark surfaces (`#fafafa`), never pure white — the warm tint threads through both modes

### Don't
- Don't pure-white the canvas — `#fafafa` warmth is the brand's friendly-approachability signal
- Don't use brand-tinted shadows — Ethereum.org rejects the "lit-edge ring" gesture used by marketplaces
- Don't pill the primary CTA — the 8px radius is the friendly-community register
- Don't add corporate-style metric strips, partner logos, or enterprise testimonials — this is a community site
- Don't strip body link underlines — educational reading requires affordance
- Don't bolden Inter past 800 — there's no 900 weight
- Don't use mono on body prose — JetBrains Mono is for code blocks and addresses only
- Don't render the diamond glyph in blue — it's `#3c3c3d` dark grey, intentionally
- Don't replace commissioned illustrations with stock or 3D renders — the hand-drawn aesthetic is editorial
- Don't add "Ethereum Foundation Inc." trademark assertions in the footer — the "no one owns Ethereum" thesis is reinforced by attribution restraint

## 15. Agent Prompt Guide

### Quick Color Reference
- Brand: Ethereum Blue `#1c64f2`
- Brand pressed: `#1450c0`
- Canvas: `#fafafa`
- Surface soft: `#f5f5f5`
- Surface warm: `#fff8e7`
- Text ink: `#1a1a1a`
- Body: `#404040`
- Muted: `#666666`
- Border: `#e5e5e5`
- Diamond glyph: `#3c3c3d`
- Mint: `#10b981`
- Purple: `#7c3aed`
- Coral: `#fb7185`

### Example Component Prompts
- "Create an Ethereum.org hero band: `#fff8e7` warm-cream background with hand-drawn vector illustration on right (rabbits and a futuristic city, signed 'Illustration by @artist'), 64px Inter weight 800 headline 'The internet that belongs to you' with -1.5px tracking in `#1a1a1a`, body-lg 18px Inter sub at 1.65 line-height in `#404040`, primary blue CTA `#1c64f2` 8px radius 12 × 24 padding 'Start here' with white text weight 600, secondary outline CTA 'What is Ethereum?' with 2px solid blue border."
- "Design a learn-chapter card: white bg on off-white canvas, 1px `#e5e5e5` border, 8px radius, 24px padding. 32px coloured icon top, title-md 18/700 in `#1a1a1a`, body-md 16/400 1.70 line-height in `#404040`, 'Read more →' link in blue. Hover: translateY(-2px) with `rgba(0,0,0,0.10) 0 16px 36px -12px` shadow."
- "Build an info callout: brand-soft `rgba(28,100,242,0.10)` bg, 4px `#1c64f2` solid left border, 1px `#1c64f2` border, 8px radius, 24px padding. 24px info-icon top-left in `#1c64f2`, title-md 18/700 'Did you know?' in `#1a1a1a`, body-md 16/400 explanation in `#404040`."
- "Render a docs sidebar: 260px wide off-white bg, 1px `#e5e5e5` right border, 24px padding. Section header label-eyebrow 11/700 1px tracking uppercase 'GET STARTED' in `#666666`, link list below in docs-sidebar 14/500. Active link: brand-soft bg + 4px blue left border + brand text colour."
- "Compose a pull-quote: Mier B serif 24/400 at 1.55 line-height with -0.3px tracking in `#1a1a1a`, set on off-white canvas with 32px left padding and a 4px `#1c64f2` brand left border. Cite the source below in caption 13/400 `#666666`."

### Iteration Guide
1. Off-white canvas `#fafafa` — slightly warmer than pure white, the friendly-approachability signal
2. Ethereum Blue `#1c64f2` for primary actions only — single-voltage discipline
3. Inter for body at 16px / **1.70 line-height** — generous longread-comfortable line-height
4. Mier B serif at weight 400 for pull-quotes and chapter intros — editorial accent (not bolded sans)
5. 8px corner radius on buttons and cards — friendly community tool register
6. 720px reading column for body prose — longread width, not fintech-marketing wide
7. Body prose links carry default underline — educational register requires affordance
8. Hand-drawn vector illustrations on cream `#fff8e7` ground — the brand's clearest editorial gesture; credit artists by name
9. Diamond glyph is `#3c3c3d` dark grey, never blue — the brand mark is quietly canonical
10. Footer credits "everyone who has contributed" — no "Ethereum Foundation Inc." attribution
