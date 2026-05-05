---
name: Substack
tagline: 'Magazine-on-the-internet — Spectral serif body at 19px, Cahuenga display, signature `#ff6719` orange CTAs.'
author: webdesignhot
source_url: https://substack.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [media, saas]
tags: [light, editorial, serif, sans, warm, spacious, publication]
preview_swatch: ['#ffffff', '#ff6719', '#363737']
related: [medium, ft, newyorker]
description: 'Substack is the rare consumer SaaS that ships its product feed in a body serif. Spectral at 19px / 1.55 against pure white, system-ui sans on chrome and buttons, and the signature `#ff6719` orange — saturated, slightly red-shifted from default — anchoring every primary action. Display headlines use Cahuenga, a custom display sans built for the brand. The serif body is the brand, not a flourish: Substack inverts the magazine-online convention, putting the serif on *content* and sans on *control*. Borders carry separation; cards are the exception, not the default.'

colors:
  bg: '#ffffff'                   # canvas — pure white magazine page
  bg-elev: '#fafaf7'              # warm off-white for elevated rails
  bg-cream: '#fbf9f4'             # cream tint on featured posts / banners
  bg-soft: '#f6f6f3'              # softer ambient tint
  surface: '#ffffff'              # default card surface (rare)
  surface-warm: '#fafaf7'         # warm-tilted right-rail panel
  text: '#363737'                 # body color, deep warm gray
  text-strong: '#1a1a1a'          # headline-grade text
  text-soft: '#666c70'            # captions, byline metadata
  text-faint: '#a8a8a8'            # timestamps, very low priority
  text-muted: '#878787'           # secondary captions
  text-link: '#363737'            # links inherit body color (underline only)
  brand: '#ff6719'                # Substack orange — saturated, red-shifted
  brand-hover: '#e85412'          # pressed state
  brand-deep: '#cc4a0e'           # deepest variant
  brand-tint: 'rgba(255, 103, 25, 0.10)'  # 10% orange wash, badge backgrounds
  brand-tint-strong: 'rgba(255, 103, 25, 0.18)'  # 18% orange — hover tint
  on-brand: '#ffffff'
  border: 'rgba(0, 0, 0, 0.10)'   # feed-row separator
  border-strong: 'rgba(0, 0, 0, 0.20)'  # button outline, pressed border
  border-soft: 'rgba(0, 0, 0, 0.06)'   # softer divider
  border-warm: 'rgba(0, 0, 0, 0.08)'   # divider on bg-elev surfaces
  selection-bg: 'rgba(255, 103, 25, 0.20)'  # text selection — brand-tinted
  success: '#0d8050'              # green for verified / success
  warning: '#d97706'              # amber for warnings
  danger: '#dc2626'               # red for errors
  info: '#2563eb'                 # blue for informational
  shadow-soft: 'rgba(0, 0, 0, 0.06)'  # ambient shadow base
  shadow-medium: 'rgba(0, 0, 0, 0.10)'  # standard shadow base
  reading-rule: 'rgba(0, 0, 0, 0.08)'  # horizontal rule color in posts

typography:
  display:
    family: '"Cahuenga", "Söhne", -apple-system, system-ui, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['kern', 'liga']
  body:
    family: 'Spectral, "Iowan Old Style", Georgia, "Times New Roman", serif'
    weights: [400, 500, 600]
    opentype-features: ['kern', 'liga', 'onum']
    role: 'feed body, post content, captions — the magazine voice'
  ui:
    family: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['kern']
    role: 'navigation, buttons, badges — the chrome'
  mono:
    family: 'ui-monospace, "SF Mono", Menlo, Monaco, monospace'
    weights: [400]
    opentype-features: ['tnum']
  scale:
    display:        { size: 56, weight: 500, lineHeight: 1.05, tracking: '-0.02em',  family: display, opentype: 'default' }
    h1-display:     { size: 48, weight: 500, lineHeight: 1.08, tracking: '-0.018em', family: display, opentype: 'default' }
    h1:             { size: 40, weight: 500, lineHeight: 1.1,  tracking: '-0.015em', family: display, opentype: 'default' }
    h2:             { size: 32, weight: 500, lineHeight: 1.15, tracking: '-0.01em',  family: display, opentype: 'default' }
    h3:             { size: 22, weight: 500, lineHeight: 1.25, tracking: '0',        family: display, opentype: 'default' }
    h4:             { size: 18, weight: 500, lineHeight: 1.3,  tracking: '0',        family: display, opentype: 'default' }
    body-lead:      { size: 22, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body,    opentype: 'default' }
    body-large:     { size: 21, weight: 400, lineHeight: 1.55, tracking: '0',        family: body,    opentype: 'default' }
    body:           { size: 19, weight: 400, lineHeight: 1.55, tracking: '0',        family: body,    opentype: 'default' }
    body-medium:    { size: 19, weight: 500, lineHeight: 1.55, tracking: '0',        family: body,    opentype: 'default' }
    body-small:     { size: 15, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body,    opentype: 'default' }
    pull-quote:     { size: 26, weight: 400, lineHeight: 1.4,  tracking: '0',        family: body,    opentype: 'default', style: 'italic' }
    caption:        { size: 14, weight: 400, lineHeight: 1.45, tracking: '0',        family: body,    opentype: 'default' }
    chrome-button:  { size: 15, weight: 600, lineHeight: 1.3,  tracking: '0',        family: ui,      opentype: 'default' }
    chrome-link:    { size: 15, weight: 500, lineHeight: 1.3,  tracking: '0',        family: ui,      opentype: 'default' }
    chrome-nav:     { size: 14, weight: 500, lineHeight: 1.3,  tracking: '0',        family: ui,      opentype: 'default' }
    label:          { size: 13, weight: 500, lineHeight: 1.3,  tracking: '0.01em',   family: ui,      opentype: 'default' }
    badge:          { size: 11, weight: 500, lineHeight: 1.2,  tracking: '0.02em',   family: ui,      opentype: 'default' }
    code-inline:    { size: 16, weight: 400, lineHeight: 1.5,  tracking: '0',        family: mono,    opentype: 'tnum' }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  xl: 12
  card: 12
  button: 8
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120]

layout:
  page-width: 1200
  feed-column: 680
  prose-width: 680
  rail-width: 320
  header-height: 64

components:
  button-primary:
    bg: '#ff6719'
    text: '#ffffff'
    padding: '8px 16px'
    radius: 8
    font: 'system-ui 15/600'
    height: 36
    hover: 'bg #e85412'
    use: 'Subscribe, Start your Substack, Create — orange anchors primary action'
  button-primary-large:
    bg: '#ff6719'
    text: '#ffffff'
    padding: '12px 24px'
    radius: 8
    font: 'system-ui 17/600'
    height: 48
    hover: 'bg #e85412'
    use: 'hero CTA, "Start writing today"'
  button-secondary:
    bg: '#ffffff'
    text: '#363737'
    border: '1px solid rgba(0,0,0,0.20)'
    padding: '8px 16px'
    radius: 8
    font: 'system-ui 15/500'
    hover: 'bg rgba(0,0,0,0.04)'
    use: 'paired with primary, "Learn more"'
  button-subscribe-inline:
    bg: 'transparent'
    text: '#ff6719'
    font: 'system-ui 14/600'
    use: 'inline subscribe link in feed cards — text-only orange, no fill'
  button-ghost:
    bg: 'transparent'
    text: '#363737'
    padding: '8px 12px'
    radius: 8
    hover: 'bg rgba(0,0,0,0.04)'
    use: 'tertiary nav action'
  card-feed-row:
    bg: '#ffffff'
    border-bottom: '1px solid rgba(0,0,0,0.10)'
    padding: '24px 0'
    use: 'feed item — borders, not cards, are the separator'
  card-publication:
    bg: '#ffffff'
    border: '1px solid rgba(0,0,0,0.10)'
    radius: 12
    padding: '20px 24px'
    use: 'publication discovery card with cover image, title, author'
  card-rail-warm:
    bg: '#fafaf7'
    border: '1px solid rgba(0,0,0,0.08)'
    radius: 12
    padding: '24px'
    use: 'right-rail "Up next" / sign-up panel'
  badge-verified:
    bg: 'rgba(255, 103, 25, 0.10)'
    text: '#ff6719'
    radius: 9999
    padding: '2px 8px'
    font: 'system-ui 11/500 +0.02em'
    use: 'verified author badge'
  badge-paid:
    bg: 'rgba(255, 103, 25, 0.18)'
    text: '#cc4a0e'
    radius: 9999
    padding: '2px 8px'
    font: 'system-ui 11/600 +0.02em'
    use: 'paid post indicator'
  badge-bestseller:
    bg: '#363737'
    text: '#ffffff'
    radius: 9999
    padding: '2px 10px'
    font: 'system-ui 11/600 +0.02em'
    use: 'Bestseller indicator on publications'
  input-text:
    bg: '#ffffff'
    border: '1px solid rgba(0,0,0,0.20)'
    radius: 8
    padding: '10px 14px'
    height: 40
    focus: '2px solid #ff6719 + ring rgba(255,103,25,0.20)'
  input-email-subscribe:
    bg: '#ffffff'
    border: '1px solid rgba(0,0,0,0.20)'
    radius: 8
    padding: '12px 16px'
    height: 48
    placeholder: 'Type your email...'
  nav-top:
    bg: 'rgba(255,255,255,0.94)'
    text: '#363737'
    height: 64
    border-bottom: '1px solid rgba(0,0,0,0.08)'
    backdrop: 'blur(8px)'
  nav-side:
    bg: 'transparent'
    text: '#363737'
    width: 240
    use: 'left rail — Home, Inbox, Notes, Discover, Subscribers'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-decel: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 220
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — drawer slides become opacity fades, hover states collapse to colour-only'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  none: 'none'
  ambient: 'rgba(0,0,0,0.06) 0 1px 3px'
  standard: 'rgba(0,0,0,0.10) 0 8px 24px -4px'
  elevated: 'rgba(0,0,0,0.14) 0 16px 32px -8px'
  ring: '0 0 0 2px rgba(255,103,25,0.30)'

accessibility:
  contrast-text-on-bg: 11.0
  contrast-text-on-brand: 4.6
  contrast-body-on-bg: 11.0
  contrast-soft-on-bg: 5.4
  focus-ring: '2px solid #ff6719 + 2px outer rgba(255,103,25,0.20)'
  reduced-motion-honored: true

dark-mode: optional

lineage:
  summary: |
    Substack''s design is the inverse of every other tech-product feed:
    body voice is a **serif** (Spectral, by Production Type) at a
    magazine-grade 19px / 1.55 — deliberately slow to scan, deliberately
    long-form — while the chrome (nav, buttons, badges, search) holds in
    `system-ui`. The split signals "this is a publication, not a feed."
    Display headlines run in **Cahuenga**, a custom display sans
    commissioned for the brand, at weight 500 — heavier than Stripe''s
    Söhne 300, lighter than Vercel''s Geist 600 — landing on the editorial
    side of the dev-tool spectrum. The signature `#ff6719` orange is the
    only chromatic accent: applied to every primary CTA, every Subscribe
    link, the verified-author badge tint, and the wordmark — never as a
    full background. Body text colour is `#363737`, a warm near-black that
    pairs cleanly with the off-white feed elevation `#fafaf7`. Borders do
    most of the separation work; cards are the exception, not the default.
    The result is the rare SaaS that reads like a Sunday paper.
  influences:
    - name: Spectral (Production Type)
      role: 'Body serif — the editorial voice of the feed'
      url: https://www.productiontype.com/family/spectral
    - name: Cahuenga (custom commission)
      role: 'Display sans — Substack-specific identity beyond stock fonts'
    - name: The New Yorker
      role: 'Magazine reading rhythm — long lines, large body, serif body, sans chrome'
      url: https://www.newyorker.com
    - name: Medium
      role: 'Adjacent reading-first competitor — both prove serif-body works at scale'
      url: https://medium.com
    - name: Harper''s Magazine
      role: 'Print magazine column rhythm and serif body convention'
      url: https://harpers.org
---

## 1. Visual Theme & Atmosphere

Substack is what happens when a software company commits to magazine typography for body text. The default reading experience runs in **Spectral** (Production Type's open-source serif) at 19px / 1.55 — roughly 2px larger than Medium and 3px larger than most product feeds — on pure white. Chrome, buttons, and navigation hold in `system-ui` so the OS-native sans does the UI work while the serif owns the content zone. The split is the brand's typographic fingerprint: serif for *content*, sans for *control*.

Distinctive vs. nearby alternatives: Medium ships GT Super serif for display + Söhne sans for everything else, putting the serif in display position. Substack inverts the assignment — sans on chrome, serif on *body* — which is the more magazine-faithful split. The `#ff6719` orange (saturated, slightly red-shifted) is everywhere primary action lives: Subscribe, Create, Start your Substack, the verified badge, inline links inside cards. Never a gradient. Never a glow. Never a tint behind body text.

The atmosphere reads as a Sunday paper rendered in CSS. The off-white `#fafaf7` rail feels like the warm edge of a magazine spread; the 680px reading column is the column width of a printed page (approximately 65 characters per line at 19px Spectral); the borders that separate feed rows are the hairlines that separate articles in a print broadsheet. Cards are the exception, not the default — Substack uses `border-bottom` on feed rows where Twitter/X uses card chrome and Medium uses divider lines. The result is a vertical rhythm that prioritises *more posts visible per scroll* over breathing room, exactly like turning the pages of a magazine.

Pull quotes use Spectral italic at 26px on hanging indents — the only italicised text role in the system, lifted directly from print magazine convention. The signature orange CTA stays at exactly the right saturation to read as "action" without overwhelming the warm-grey type beside it. The verified-author badge — orange on 10%-orange tint — is the single place orange appears as a soft fill rather than a solid action surface, and even there it's used sparingly.

**Key Characteristics:**
- Serif body (Spectral) at 19px / 1.55 — magazine-grade reading size
- Sans chrome (`system-ui`) at 14–15px — OS-native control voice
- Cahuenga display sans (custom commission) at weight 500 — editorial register
- `#ff6719` orange — saturated, red-shifted, single-accent system
- Pure white canvas + warm off-white `#fafaf7` for elevated rails
- Borders, not cards — feed-row separator is `border-bottom`, not panel chrome
- Body colour `#363737` warm near-black — never pure black
- 680px reading column even on 1200px pages — magazine column width
- 8px button radius — softer than Stripe's 4px, short of Linear's pill
- Pull quotes in Spectral italic 26px — single italic role in the system

## 2. Color Palette & Roles

### Primary
- **Canvas** (`#ffffff`): Pure white, magazine-page floor.
- **Text** (`#363737`): Body colour — deep warm gray, never pure black.
- **Brand** (`#ff6719`): Substack orange — primary CTAs, Subscribe links, wordmark, verified badge tint.

### Brand & Dark
- **Substack Orange** (`#ff6719`): The single accent. Saturated, slightly red-shifted from default. Action surfaces, the wordmark, badge tints.
- **Brand Hover** (`#e85412`): Pressed state on primary CTAs.
- **Brand Deep** (`#cc4a0e`): Deepest variant — used on hover-pressed states and on text-on-brand-tint where 10% tint is too pale for `#ff6719` itself.
- **Text Strong** (`#1a1a1a`): Headline-grade text — slightly darker than body for hierarchy.
- The brand has no "dark canvas" — Substack is light-only.

### Accent
- Substack avoids a secondary brand accent. The orange does all chromatic decoration; verified badges, paid-post indicators, and the wordmark all share the same hue. Semantic colours (success green, error red) handle status only, never decorative use.

### Interactive
- **Link** = `#363737` body colour with `text-decoration: underline` — links are *not* coloured orange in the body. The underline is the cue.
- **Subscribe inline link** = `#ff6719` orange, weight 600 system-ui — the explicit conversion surface inside the body.
- **Hover (button-primary)** = `#ff6719` → `#e85412`.
- **Active / Pressed** = `#cc4a0e`.
- **Disabled** = opacity 50% on filled buttons; `#a8a8a8` text on `rgba(0,0,0,0.04)` background.
- **Selected** = `rgba(255, 103, 25, 0.20)` (selection-bg) — brand-tinted text selection in body prose.

### Neutral Scale
`#ffffff` (Canvas) → `#fafaf7` (Bg Elev — warm off-white) → `#fbf9f4` (Bg Cream) → `#f6f6f3` (Bg Soft) → `rgba(0,0,0,0.06)` (Border Soft) → `rgba(0,0,0,0.08)` (Border Warm) → `rgba(0,0,0,0.10)` (Border) → `rgba(0,0,0,0.20)` (Border Strong) → `#a8a8a8` (Text Faint) → `#878787` (Text Muted) → `#666c70` (Text Soft) → `#363737` (Text) → `#1a1a1a` (Text Strong).

The neutral scale is intentionally **warm** — every grey carries a hint of warmth, the opposite of Datadog's cool greys. The off-white `#fafaf7` is the most distinctive neutral: warm enough to read as "newsprint" without sliding into yellow.

### Surface & Borders
- **Bg Elev** (`#fafaf7`): Warm off-white for elevated rails (right-rail, sidebars, highlighted feed strips).
- **Bg Cream** (`#fbf9f4`): Cream tint on featured posts and editorial banners.
- **Bg Soft** (`#f6f6f3`): Softer ambient tint, used as section break.
- **Border Soft** (`rgba(0,0,0,0.06)`): Lightest hairline, used on warm surfaces.
- **Border Warm** (`rgba(0,0,0,0.08)`): Default divider on `bg-elev` warm surfaces.
- **Border** (`rgba(0,0,0,0.10)`): Default feed-row separator on white.
- **Border Strong** (`rgba(0,0,0,0.20)`): Button outline, pressed border, search input border.

### Shadow Colors
Substack shadows are **rare**. Borders carry separation; shadows appear only on dropdowns, floating compose buttons, and modal dialogs. When shadows do appear:
- **Ambient** (`rgba(0,0,0,0.06) 0 1px 3px`): Faint hint, used on dropdown menu lift.
- **Standard** (`rgba(0,0,0,0.10) 0 8px 24px -4px`): Standard floating UI lift.
- **Elevated** (`rgba(0,0,0,0.14) 0 16px 32px -8px`): Modal dialog lift.

The reading view is **shadow-free entirely** — no card shadows on feed rows, no shadow on publication tiles, no shadow on the right rail. The print-magazine convention is "ink on paper, no 3D effects."

### Semantic
- **Success** (`#0d8050`): Green for verified, payment-success, subscription-active states.
- **Warning** (`#d97706`): Amber for warning toasts and unsaved-draft indicators.
- **Danger** (`#dc2626`): Red for delete-confirm, error states.
- **Info** (`#2563eb`): Blue for informational toasts (rare).

## 3. Typography Rules

### Font Family
- **Display** — `"Cahuenga", "Söhne", -apple-system, system-ui, sans-serif`. A Substack-commissioned display sans, used at weights 400–600 for headlines.
- **Body** — `Spectral, "Iowan Old Style", Georgia, "Times New Roman", serif`. Production Type's open-source serif, the magazine voice of the feed at weights 400/500/600.
- **UI** — `system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`. The OS-native sans for chrome, buttons, navigation, badges.
- **Mono** — `ui-monospace, "SF Mono", Menlo, Monaco, monospace`. System mono for inline code in posts.
- **OpenType** — `kern` and `liga` default-on. Spectral uses old-style figures (`onum`) for body prose to feel print-faithful. Mono uses `tnum` for inline code.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|-----:|-------:|------------:|---------------:|-------------|-------|
| display        | Cahuenga    | 56 | 500 | 1.05 | -0.02em  | default     | Hero headline |
| h1-display     | Cahuenga    | 48 | 500 | 1.08 | -0.018em | default     | Section h1 |
| h1             | Cahuenga    | 40 | 500 | 1.1  | -0.015em | default     | Post title |
| h2             | Cahuenga    | 32 | 500 | 1.15 | -0.01em  | default     | Sub-section |
| h3             | Cahuenga    | 22 | 500 | 1.25 | 0        | default     | Inline heading |
| h4             | Cahuenga    | 18 | 500 | 1.3  | 0        | default     | Smaller heading |
| body-lead      | Spectral    | 22 | 400 | 1.5  | 0        | onum        | Lead paragraph |
| body-large     | Spectral    | 21 | 400 | 1.55 | 0        | onum        | Featured post body |
| body           | Spectral    | 19 | 400 | 1.55 | 0        | onum        | Default running text |
| body-medium    | Spectral    | 19 | 500 | 1.55 | 0        | onum        | Inline emphasis |
| body-small     | Spectral    | 15 | 400 | 1.5  | 0        | onum        | Captions in feed |
| pull-quote     | Spectral    | 26 | 400 | 1.4  | 0        | onum        | Italic, hanging indent |
| caption        | Spectral    | 14 | 400 | 1.45 | 0        | default     | Image captions, footnote |
| chrome-button  | system-ui   | 15 | 600 | 1.3  | 0        | default     | All CTAs |
| chrome-link    | system-ui   | 15 | 500 | 1.3  | 0        | default     | Inline UI links |
| chrome-nav     | system-ui   | 14 | 500 | 1.3  | 0        | default     | Top-nav, side-rail |
| label          | system-ui   | 13 | 500 | 1.3  | +0.01em  | default     | Form labels |
| badge          | system-ui   | 11 | 500 | 1.2  | +0.02em  | default     | Verified, paid badges |
| code-inline    | system-mono | 16 | 400 | 1.5  | 0        | tnum        | Inline code in body |

### Principles

- **Serif body, sans chrome** — the brand's most distinctive typographic move. Body text in Spectral 19/400; chrome in system-ui 14–15. The split signals "publication, not feed."
- **19px body is calibrated** — 2px larger than Medium, 3px larger than Twitter/X. Optimised for sustained reading, not scroll-skim.
- **Cahuenga is custom** — not a stock font swap. The display sans was commissioned to share humanist proportions with Spectral while contrasting in form, so display + body feel related without copying letter shapes.
- **Display weight 500 is the editorial register** — heavier than Stripe's Söhne 300, lighter than Vercel's Geist 600. Lands intentionally on the editorial side of the dev-tool spectrum.
- **Old-style figures (`onum`) in body** — Spectral's old-style figures (1234567890 with descenders on 3, 4, 5, 7, 9) make body prose feel print-faithful. Disable `onum` for tabular contexts only.
- **Italic is reserved** — pull quotes only. The Spectral italic at 26px is the only italic role in the system; never used for general emphasis (use `body-medium` weight 500 instead).
- **Reading width caps at 680px** — magazine column width. Even on 1200px pages, the body column doesn't exceed 680px.
- **System-ui is the *control* voice** — the chrome speaks the OS's native sans, which feels like the operating system's UI rather than the publication's voice. The intentional voice-split.

## 4. Component Stylings

### Buttons

**`button-primary`** — The signature orange CTA. Background `#ff6719`, white text, 8×16 padding, **8px radius**, system-ui 15/600. 36px height. Hover darkens to `#e85412`. Used on Subscribe, Create, Start your Substack — the most common conversion surface.

**`button-primary-large`** — Hero variant. Background `#ff6719`, white text, 12×24 padding, 8px radius, system-ui 17/600, 48px height. Used on landing-page hero CTAs ("Start writing today").

**`button-secondary`** — Outlined variant. White background, `#363737` text, 1px `rgba(0,0,0,0.20)` border, 8×16 padding, 8px radius, system-ui 15/500. Hover background `rgba(0,0,0,0.04)`. Paired with primary.

**`button-subscribe-inline`** — Text-only inline CTA inside feed cards. No background, `#ff6719` orange text, system-ui 14/600. The defining inline-conversion surface — every feed card has one of these.

**`button-ghost`** — Tertiary action. Transparent, `#363737` text, 8×12 padding, 8px radius. Hover `rgba(0,0,0,0.04)`. Used on dropdown menu items and tertiary nav links.

### Cards

**`card-feed-row`** — The defining feed pattern. White background, `border-bottom: 1px solid rgba(0,0,0,0.10)`, 24px vertical padding, no radius, no shadow. Holds publication thumbnail + title + body excerpt + Subscribe inline link.

**`card-publication`** — Discovery card. White background, 1px `rgba(0,0,0,0.10)` hairline, 12px radius, 20×24 padding. Holds cover image + title + author + Subscribe button. Used on the Discover page.

**`card-rail-warm`** — Right-rail panel. `#fafaf7` warm off-white background, 1px `rgba(0,0,0,0.08)` border, 12px radius, 24px padding. Holds "Up next" recommendations or sign-up panels. The only place warm fill appears prominently in card form.

**`card-pull-quote`** — Pull quote panel inside long-form posts. Transparent background, no border, hanging indent, Spectral italic 26/400 in `#363737`, optional small attribution caption below in `body-small`.

### Badges

**`badge-verified`** — Background `rgba(255, 103, 25, 0.10)` (10% orange tint), `#ff6719` text, pill (9999px), 2×8 padding, system-ui 11/500 +0.02em. Used adjacent to publication titles for verified status.

**`badge-paid`** — Background `rgba(255, 103, 25, 0.18)` (slightly stronger tint), `#cc4a0e` text, pill, 2×8 padding, system-ui 11/600. Indicates paid-tier post in feed.

**`badge-bestseller`** — Background `#363737`, white text, pill, 2×10 padding, system-ui 11/600 +0.02em. The "Bestseller" indicator — solid dark fill instead of orange tint to feel award-stamped.

**`badge-status-success`** — `rgba(13,128,80,0.10)` background, `#0d8050` text. "Subscribed" indicator.

### Inputs / Forms

**`input-text`** — White background, 1px `rgba(0,0,0,0.20)` border, 8px radius, 10×14 padding, 40px height. Focus → 2px `#ff6719` border + 2px `rgba(255,103,25,0.20)` outer ring.

**`input-email-subscribe`** — The defining subscribe-form input. White background, 1px `rgba(0,0,0,0.20)` border, 8px radius, 12×16 padding, 48px height, body Spectral 19/400 placeholder "Type your email...". Paired with `button-primary-large` to its right.

**`textarea-compose`** — Spectral 21/400 on white, no border, 1px hairline above and below in `rgba(0,0,0,0.10)`. The compose surface mimics a printed page.

### Navigation

**`nav-top`** — 64px tall, `rgba(255,255,255,0.94)` with `backdrop-filter: blur(8px)`, 1px `rgba(0,0,0,0.08)` bottom border. Substack wordmark left (in `#363737`, with the orange dot in the "S"), primary nav (Home, Discover, Inbox, Notes), right cluster (Sign in, Subscribe primary CTA).

**`nav-side`** — Left rail on signed-in views. 240px wide, transparent background, `#363737` text, system-ui 14/500 link list. Active link gets a 2px `#ff6719` left border.

**`nav-section-tabs`** — Tab bar inside a publication's homepage ("Latest", "Top", "Discussion"). Border-bottom 1px on inactive, border-bottom 2px `#ff6719` on active. The orange underline is the only chromatic accent in the tabs.

### Decorative

**`band-author-spotlight`** — Featured author section. `#fbf9f4` cream background, 80px vertical padding, 2-up grid: large author photo left, author bio + featured publication right. The cream tint is the rare warm-fill marketing band.

**`section-divider`** — Horizontal rule between long-form post sections. 1px `rgba(0,0,0,0.08)` (`reading-rule` token), 80px wide, centered, with 32px vertical margin above and below. The hairline rule is the only ornament inside body prose.

**`footer-light`** — White footer, 64px vertical padding, 4-column link grid, system-ui 14/500 in `#666c70`. Substack wordmark + tagline at top, link columns below, micro-copy ("© 2026 Substack Inc.") in caption 14/400 at bottom.

## 5. Layout Principles

### Spacing System
- **Base unit**: 4px.
- **Tokens**: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120.
- **Section padding (vertical)**: 80px on marketing pages; 64px on publication discovery; 32px on feed.
- **Feed-row padding**: 24px vertical, 0 horizontal — borders extend full-width of column.
- **Card internal padding**: 20×24 default; 24px on rail-warm cards; 32px on pricing.

### Grid & Container
- **Page-width**: 1200px max.
- **Three-column desktop shell**: Left navigation rail (240px) + center feed (680px) + right "Up next" / sign-up rail (320px), with 24–32px gutters.
- **Reading column**: 680px even on 1200px pages — the magazine column width.
- **Feed-only views**: center column expands to 800px when right rail collapses.

### Whitespace Philosophy
The rhythm prioritises *more posts visible* over breathing room. Feed-row gutters tight (24–32px between rows) — Substack assumes scroll, not browse. Section padding generous (80px) on marketing pages where the magazine-spread feel matters; tight (32px) inside the reading column where vertical density matters more.

### Section Cadence
For marketing pages: white → cream featured-author band (`#fbf9f4`) → white → warm off-white pricing band (`#fafaf7`) → white footer. For feed: continuous white with `border-bottom` row separators — no section breaks. The magazine reads as a single page; the marketing reads as a printed spread with bands.

## 6. Shapes & Radius Scale

- **Micro** (2px) — almost no use; reserved for inline code highlight backgrounds
- **Sm** (4px) — checkboxes, very small chips
- **Md** (6px) — search bar shape on tight chrome
- **Lg** (8px) — buttons, inputs — the dominant interactive radius
- **Xl** (12px) — cards (publication tile, rail-warm panel)
- **Pill** (9999px) — badges only (verified, paid, bestseller)

The 8px button radius is Substack's distinctive choice — softer than Stripe's 4px, short of Linear's full pill. Cards round to 12px, one tier larger than buttons. Pills are reserved for badges only — CTAs never go pill, because pill CTAs feel "consumer app" and Substack is committed to "publication."

The verified-author badge and a few status pills go full pill (9999px) for ergonomic clickability — the same move Hugging Face makes on its tag chips. The compromise: badges-as-pills feel print-stamp, while CTAs-as-pills would feel app-y.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 Flat | No shadow | Body text, feed rows, reading column, marketing bands |
| 1 Hairline | 1px border | Default card chrome — publication tile, rail-warm panel |
| 2 Border-bottom | 1px row separator | Feed-row separator — the defining pattern |
| 3 Ambient | `rgba(0,0,0,0.06) 0 1px 3px` | Dropdown menus, floating compose hint |
| 4 Standard | `rgba(0,0,0,0.10) 0 8px 24px -4px` | Floating compose button, share popover |
| 5 Elevated | `rgba(0,0,0,0.14) 0 16px 32px -8px` | Modal dialog (subscribe modal, paywall) |

**Shadow Philosophy**: Borders carry separation. The print-magazine convention ("ink on paper, no 3D effects") rules the reading surface — feed rows, marketing bands, and publication cards are all shadow-free. Shadows belong to floating UI primitives (dropdowns, modals, the floating compose button) where the affordance "this floats above the page" matters. Card panels (`card-publication`, `card-rail-warm`) use 1px hairlines, never shadows. The result: depth feels mechanical (a hairline is a real divider), not atmospheric.

## 8. Interaction & Motion ✨

### Easing Curves
- **Standard** — `cubic-bezier(0.4, 0, 0.2, 1)` for hover transitions, button state changes
- **Emphasized** — `cubic-bezier(0.2, 0, 0, 1)` for modal entry, drawer open
- **Decel** — `cubic-bezier(0.0, 0, 0.2, 1)` for elements entering view (feed-row reveals on scroll)

### Duration Buckets
- **Fast** (150ms) — colour shifts, hover state changes, link underline-grow
- **Standard** (220ms) — modal entry, drawer open, dropdown reveal
- **Slow** (320ms) — page-scroll reveals, large surface fades

### Per-Component Micro-States
- **Button-primary hover** — `bg #ff6719` → `#e85412` over 150ms standard ease. No translate.
- **Button-secondary hover** — bg appears (`rgba(0,0,0,0.04)`) over 150ms.
- **Subscribe-inline-link hover** — text colour `#ff6719` → `#cc4a0e` over 150ms; underline appears (text-decoration grows from 0 to 1px).
- **Card-publication hover** — no transform, no shadow change. Only the inline Subscribe button highlights. The reading-page convention.
- **Feed-row hover** — no hover state on the row itself; cursor changes to `pointer` only on the title link area.
- **Modal entry** — fade + 8px upward slide at 220ms emphasized ease.
- **Drawer (mobile nav)** — slide from left at 220ms emphasized ease.

### Page Transitions
Substack uses **no page-transition animation** — page navigations are immediate. Within-page anchor jumps use smooth scroll at 600ms standard. Feed-row reveals on scroll use a fade only (no slide) at 220ms decel ease, triggered when 30% of the row enters viewport. The non-animation is intentional: a magazine doesn't animate when you turn the page.

### Reduced Motion
Honours `prefers-reduced-motion: reduce`. Drawer slides become opacity fades. Hover states collapse to colour-only changes (no underline-grow). Scroll-triggered reveals become immediate. The feed renders without any animation regardless of preference.

## 9. Accessibility & A11y ✨

### Contrast Pairs
- **Text on bg** (`#363737` on `#ffffff`) = **11.0:1** (AAA at all sizes)
- **Text on brand** (`#ffffff` on `#ff6719`) = **4.6:1** (AA at body sizes; passes for the 15/600 button label)
- **Body on bg-elev** (`#363737` on `#fafaf7`) = **10.7:1** (AAA)
- **Text-soft on bg** (`#666c70` on `#ffffff`) = **5.4:1** (AA at body sizes)
- **Text-faint on bg** (`#a8a8a8` on `#ffffff`) = **2.7:1** — only used on timestamps and very low-priority metadata, never body
- **Brand on bg** (`#ff6719` on `#ffffff`) = **3.4:1** — passes AA for the 15/600 button label only; for inline subscribe links the underline plus the surrounding context disambiguates

### Focus Indicators
2px solid `#ff6719` brand orange ring + 2px outer `rgba(255,103,25,0.20)` halo on every interactive element. Inputs swap their border colour to `#ff6719` on focus and add the outer ring. Skip-to-content link visible on first Tab, anchored top-left.

### ARIA Patterns
- **Feed rows** — each is an `<article>` with an `<h2>` headline; the entire row links to the post via the headline anchor, not a card-wide overlay click trap
- **Subscribe modal** — `role="dialog"` + `aria-modal="true"` + focus trap + `Escape` to close
- **Search combobox** — `role="combobox"` with `aria-expanded`, `aria-controls`, `aria-activedescendant`
- **Comment thread** — nested `<article>` elements with `aria-label` carrying author and timestamp
- **Section tabs** — `role="tablist"` with arrow-key navigation

### Keyboard Navigation
Standard tab order. Arrow keys navigate between tabs and combobox options. `J` / `K` move down / up the feed (Vim-style, optional power-user shortcut). `Escape` closes any open overlay. Enter opens the focused post.

### Screen Reader Hints
- Verified badges include `aria-label="Verified author"` even when icon is decorative
- Subscribe inline links carry `aria-label` describing the publication being subscribed to
- Pull quotes use `<blockquote>` with optional `<cite>` for attribution
- Timestamp metadata uses `<time datetime="..."` for machine-readable dates

### Reduced Motion
Honoured globally — see §8.

## 10. Responsive Behavior

| Breakpoint | Width | Key Changes |
|------------|------:|-------------|
| Mobile     | < 640  | Three-column shell collapses to feed-only; hamburger nav; display-hero 56 → 32px; rail-warm panels hidden; subscribe modal full-screen |
| Tablet     | 640–1024 | Two-column (left rail + feed); right rail hidden; hero 56 → 44px |
| Desktop    | 1024–1280 | Full three-column layout; feed at 680px; right rail at 320px |
| Wide       | 1280–1440 | Same as desktop; outer breathing room expands; max page width caps at 1200 |

### Touch Targets
Primary CTAs 44 × 44px minimum. Subscribe inline links extend the tap area to the entire end-of-row trailing whitespace (~120 × 32px effective). Feed-row title links extend to the row width. Compliance footnote (14px caption) is non-interactive.

### Collapsing Strategy
- **Three-column shell** → two-column → one-column (feed only)
- **Top nav** → hamburger sheet at mobile; the orange Subscribe CTA stays visible in the top-right at all breakpoints
- **Hero** → display 56 → 44 → 32px progression; subtitle stacks below
- **Feed rows** → publication thumbnail moves above title text on mobile (vertical stack)
- **Pricing** → 3-up → 1-col (recommended tier first)
- **Footer** → 4-col → 2-col → 1-col stack

### Image Behavior
Publication cover images are 16:9 with `object-fit: cover` at all sizes; mobile crops to 4:3 for vertical density. Author avatars are circular 40×40 (badge size) or 64×64 (author-spotlight band). Hero images use `loading="lazy"` and explicit `width`/`height` for CLS prevention.

### Container Queries
Used on the rail-warm panel — the panel reduces internal padding from 24px (wide) to 16px (narrow) when its container drops below 280px. Feed rows use container queries to switch from horizontal-thumb to vertical-thumb layout below 540px container width.

## 11. Content & Voice ✨

### Tone
Substack's voice is **literary, plainspoken, and intelligent without being academic**. It speaks as a publication speaks to readers: warm second-person ("Your subscribers are waiting") rather than corporate-we ("We help creators monetise their content"). The marketing surface uses sentence fragments where appropriate — print-magazine cadence, not SaaS-ad cadence.

### Microcopy Patterns
- **Button verbs** — "Subscribe", "Start your Substack", "Read more", "Continue reading", "Sign in", "Create"
- **Section eyebrows** — Cahuenga 13/500 +0.01em — "FEATURED IN ECONOMICS", "FROM YOUR INBOX". Eyebrow names the category before the headline names the publication.
- **Error messages** — direct, short, no jargon. "We couldn't post your comment. Try again or [refresh the page]." with retry CTA.
- **Empty states** — gracious. "Your inbox is empty. Subscribe to a few publications to start receiving posts here." with primary CTA.
- **Success confirmations** — quiet. "Subscribed." with the orange checkmark, no toast persistence beyond 2s.

### CTA Verb Conventions
- **Primary** — "Subscribe" (the most common verb), "Start your Substack" (creator onboarding), "Read more" (post-excerpt)
- **Secondary** — "Sign in", "Learn more", "Continue"
- **Tertiary** — "View all posts", "See discussion", "Share"
- The brand strongly prefers "Subscribe" over "Sign up". The verb signals reading, not membership.

### Empty States
"Your inbox is empty. Subscribe to a few publications to start receiving posts here." Empty states never apologise; they instruct toward the next action. Notes (Substack's micro-content surface) uses a different empty state: "What are you reading? Share a quote, a thought, an article." — present-tense, second-person, present-progressive.

## 12. Dark Mode & Theming ✨

Substack's marketing surfaces are **light-default**. There is no user-toggleable dark mode on the marketing site or the feed reading surface. The publication-creator app and reader iOS/Android apps support optional dark mode (out of scope for marketing-surface documentation).

For the rare dark surface (paywall modal overlay backdrop), the swap is minimal:
- `bg` → `rgba(0,0,0,0.48)` overlay
- All content surfaces (modal, dialog) stay light — Substack does not invert content into dark mode

If dark mode were to be introduced (planned for future):
- `bg` → `#1a1a1a`
- `bg-elev` → `#222220` (warm-tilted dark elevated)
- `text` → `#ededed`
- `text-soft` → `#a8a8a8`
- `border` → `rgba(255,255,255,0.10)`
- Brand `#ff6719` stays unchanged — the orange reads cleanly on both light and dark backgrounds
- Spectral body colour shifts to `#ededed` to maintain contrast

## 13. Lineage & Influences

Substack's design is the inverse of every other tech-product feed: the body voice is a **serif** (Spectral, by Production Type) at a magazine-grade 19px / 1.55 — deliberately slow to scan, deliberately long-form — while the chrome (nav, buttons, badges, search) holds in `system-ui`. The split signals "this is a publication, not a feed."

Display headlines run in **Cahuenga**, a custom display sans commissioned for the brand, at weight 500 — heavier than Stripe's Söhne 300, lighter than Vercel's Geist 600 — landing on the editorial side of the dev-tool spectrum. The signature `#ff6719` orange is the only chromatic accent: applied to every primary CTA, every Subscribe link, the verified-author badge tint, and the wordmark — never as a full background. Body text colour is `#363737`, a warm near-black that pairs cleanly with the off-white feed elevation `#fafaf7`. Borders do most of the separation work; cards are the exception, not the default.

What it borrows: the magazine-online convention (large serif body, sans chrome) from The New Yorker and Harper's; the open-source serif strategy (Spectral) from Production Type; the orange-as-single-accent discipline from a long lineage of editorial marks (Penguin Books' orange spine, Atari's brand orange). What it rejects: card-based feeds (Twitter/X, Mastodon), purple-gradient AI-SaaS conventions, glass-morphism, dark-mode-as-default, pill CTAs, and any hint of meme-culture aesthetic.

**Influences:**
- **Spectral (Production Type)** — Body serif. https://www.productiontype.com/family/spectral
- **Cahuenga** — Custom display sans commissioned for Substack. No public URL.
- **The New Yorker** — Magazine reading rhythm; long lines, large body, serif body, sans chrome. https://www.newyorker.com
- **Medium** — Adjacent reading-first competitor. https://medium.com
- **Harper's Magazine** — Print column rhythm and serif body convention. https://harpers.org

## 14. Do's and Don'ts

### Do
- Ship body in serif (Spectral). The serif body is the brand, not a stylistic flourish
- Keep chrome in `system-ui`. The split between sans-on-chrome and serif-on-body is what reads as "publication, not feed"
- Reserve `#ff6719` orange for primary action and identity surfaces — Subscribe, Create, the wordmark, verified badges
- Use `border-bottom` for feed-row separators, not card chrome
- Cap reading width at 680px even on 1200px pages — magazine column width
- Use Spectral italic 26/400 for pull quotes — the only italic role
- Use old-style figures (`onum`) in body prose for print-faithful number rhythm
- Round buttons to 8px, cards to 12px, badges to pill — three-tier radius family
- Anchor the Subscribe inline link as text-only orange inside feed cards

### Don't
- Don't swap Spectral for Inter or Söhne. The body serif is the editorial signal; replacing it collapses the brand into "another social product"
- Don't apply orange as a full background or page tint — it's saturated enough that it overwhelms at scale
- Don't introduce drop shadows on feed rows. Borders carry the feed; shadows belong to floating compose UI only
- Don't use card chrome for feed rows — the border-bottom pattern is the brand
- Don't use Spectral italic for general emphasis — use weight 500 (`body-medium`) instead
- Don't use pill (9999px) buttons — 8px is the radius family
- Don't widen the reading column beyond 680px — magazine column rhythm
- Don't introduce a secondary brand colour — orange does all chromatic work
- Don't use Cahuenga at weights below 500 — the editorial register depends on weight 500

## 15. Agent Prompt Guide

### Quick Color Reference
- Brand: `#ff6719` (Substack Orange)
- Brand hover: `#e85412`
- Text: `#363737`
- Body bg: `#ffffff`
- Bg elev: `#fafaf7` (warm off-white)
- Border: `rgba(0,0,0,0.10)`
- Text soft: `#666c70`
- Brand tint: `rgba(255,103,25,0.10)`

### Example Component Prompts

- "Create a Substack hero band: white background, 56px Cahuenga weight 500 headline with `-0.02em` tracking in `#363737`, body-large 21/400 Spectral sub in `#363737`, primary CTA `#ff6719` 8px radius 12×24 padding `Start your Substack`, secondary outlined `1px rgba(0,0,0,0.20)` border `Learn more`."
- "Design a feed row: 24px vertical padding, `border-bottom 1px rgba(0,0,0,0.10)`. Left: 64×64 publication thumbnail in `card` 12px radius. Center: post title in Cahuenga 22/500, body excerpt in Spectral 19/400 `#363737` clamped to 3 lines, byline in caption 14/400 `#666c70`. Right end: Subscribe inline link `#ff6719` system-ui 14/600."
- "Build a publication discovery card: white bg, 1px `rgba(0,0,0,0.10)` border, 12px radius, 20×24 padding. 16:9 cover image top, title in Cahuenga 22/500 `#363737`, author in Spectral 15/400 `#666c70`, verified badge if applicable in `rgba(255,103,25,0.10)` bg + `#ff6719` text + pill, Subscribe primary CTA at bottom right."
- "Compose a long-form post page: 680px reading column centered. Headline in Cahuenga 48/500 `-0.018em`, lead paragraph in Spectral 22/400 `#363737`, body in Spectral 19/400 / 1.55 with `onum`. Pull quote in Spectral italic 26/400 with hanging indent, separated by `1px rgba(0,0,0,0.08)` rules above/below. No drop caps."
- "Render a subscribe modal: white surface, 12px radius, `rgba(0,0,0,0.14) 0 16px 32px -8px` shadow on `rgba(0,0,0,0.48)` overlay backdrop. 32px Cahuenga 500 headline, body Spectral 19/400, email input `48px height` 8px radius `1px rgba(0,0,0,0.20)` border, `#ff6719` Subscribe button 8px radius `Subscribe` 48px height to the right inline."
- "Draw a featured-author band: `#fbf9f4` cream background, 80px vertical padding, 2-up grid. Left: 240×240 author photo in 12px radius. Right: author name in Cahuenga 32/500, bio in Spectral 19/400, publication tile below with title + Subscribe CTA."

### Iteration Guide

1. Start with Spectral on body, system-ui on chrome — that's the brand's typographic split.
2. Body size is 19px / 1.55 — never shrink below 17px even on dense feeds, never grow above 21px even on featured bodies.
3. The reading column caps at 680px — this rule is hard. Even on 1440px desktops, content doesn't widen beyond 680px.
4. Orange `#ff6719` is the *only* chromatic accent — if you reach for a second colour, you're drifting toward Medium territory.
5. Borders, not cards — feed rows separate by `border-bottom`, never by panel chrome. If your feed has card backgrounds, you've lost the magazine voice.
6. Cards round to 12px, buttons round to 8px, badges go pill — three-tier radius family.
7. No shadows on reading surface — drop shadows belong to floating compose UI only.
8. Pull quotes are the *only* italic — use `body-medium` weight 500 for inline emphasis instead.
