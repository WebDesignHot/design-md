---
name: Paper Website
tagline: A literal sheet-of-paper website — single literary serif, off-white sheet canvas, narrow reading columns, ink-blue links.
author: webdesignhot
source_url: https://paper.website
spec: design.md/v1.5
quality: curated
featured: false
categories: [media, saas]
tags: [light, editorial, serif, spacious, warm, soft, organic, minimal]
preview_swatch: ['#fbf8f3', '#1a1a1a', '#3d6b8a']
related: [ghost, substack, readwise]
description: 'Paper Website is the literal-paper-as-website pitch — an off-white sheet canvas (`#fbf8f3`), a single literary serif (Tiempos / EB Garamond family) carrying both display and body, narrow 720px reading columns, and a quiet `#3d6b8a` ink-blue for links. The marketing site looks like a handwritten note that decided to also be a SaaS — Moleskine warmth, Penguin endpaper blue, Stripe Press gravity, and iA Writer''s writing-tool soul, all on a single serif voice with no chromatic accent system.'

colors:
  bg: '#fbf8f3'
  bg-alt: '#ffffff'
  bg-cream: '#faf6ec'
  surface: '#f3eee2'
  surface-soft: '#f8f4ea'
  surface-warm: '#f0e9d8'
  text: '#1a1a1a'
  text-strong: '#0d0d0d'
  text-muted: '#5c574e'
  text-soft: '#8a8478'
  text-faint: '#aba59a'
  brand: '#3d6b8a'
  brand-hover: '#2d5570'
  brand-deep: '#1f3f54'
  brand-soft: '#dde6ee'
  accent: '#a04a35'
  accent-hover: '#8a3d2a'
  accent-soft: '#f0e2d8'
  accent-tint: '#f6ebe2'
  border: '#e3dcc9'
  border-soft: '#ede6d3'
  border-strong: '#d4cab2'
  link: '#3d6b8a'
  link-hover: '#2d5570'
  link-visited: '#5b4570'
  on-brand: '#ffffff'
  success: '#4a7a5c'
  success-bg: '#e6efe9'
  warning: '#a04a35'
  danger: '#8a2e2e'
  shadow-paper: 'rgba(60,40,15,0.04)'
  shadow-warm: 'rgba(80,55,20,0.06)'
  shadow-deep: 'rgba(50,30,10,0.10)'

typography:
  display:
    family: '"Tiempos Headline", "EB Garamond", "Sabon", Georgia, "Times New Roman", serif'
    weights: [400, 500]
    opentype-features: ['liga', 'kern']
  body:
    family: '"Tiempos Text", "EB Garamond", "Sabon", Georgia, "Times New Roman", serif'
    weights: [400, 500]
    opentype-features: ['liga', 'kern', 'onum']
  serif:
    family: '"Tiempos Headline", "EB Garamond", Georgia, serif'
    weights: [400, 500]
  sans:
    family: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500]
  mono:
    family: '"iA Writer Mono", "JetBrains Mono", "SFMono-Regular", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    display-hero:    { size: 72, weight: 400, lineHeight: 1.05, tracking: '-0.018em', family: serif, opentype: 'liga, kern' }
    h1:              { size: 56, weight: 400, lineHeight: 1.10, tracking: '-0.012em', family: serif, opentype: 'liga, kern' }
    h2:              { size: 38, weight: 400, lineHeight: 1.20, tracking: '-0.005em', family: serif, opentype: 'liga, kern' }
    h3:              { size: 24, weight: 500, lineHeight: 1.35, tracking: '0',         family: serif, opentype: 'liga, kern' }
    h4:              { size: 20, weight: 500, lineHeight: 1.40, tracking: '0',         family: serif }
    body-large:      { size: 20, weight: 400, lineHeight: 1.65, tracking: '0',         family: serif, opentype: 'onum' }
    body:            { size: 18, weight: 400, lineHeight: 1.65, tracking: '0',         family: serif, opentype: 'onum' }
    body-small:      { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',         family: serif }
    quote:           { size: 22, weight: 400, lineHeight: 1.50, tracking: '0',         family: serif }
    pull-quote:      { size: 28, weight: 400, lineHeight: 1.40, tracking: '-0.005em', family: serif }
    nav:             { size: 14, weight: 500, lineHeight: 1.20, tracking: '0',         family: serif }
    button:          { size: 15, weight: 500, lineHeight: 1.20, tracking: '0',         family: serif }
    caption:         { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',         family: serif }
    margin-note:     { size: 12, weight: 400, lineHeight: 1.45, tracking: '0',         family: mono }
    label:           { size: 12, weight: 500, lineHeight: 1.30, tracking: '0.04em',    family: mono }
    code:            { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',         family: mono }
    micro:           { size: 11, weight: 400, lineHeight: 1.40, tracking: '0.02em',    family: mono }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  xl: 12
  xxl: 16
  pill: 9999

spacing:
  base: 8
  scale: [2, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192]

layout:
  page-width: 1080
  prose-width: 720
  header-height: 64
  gutter: 24
  section-y: 96

components:
  button-primary:
    background: brand
    text: on-brand
    radius: 6
    padding: '10px 18px'
    font: 'Tiempos Text 15px / weight 500'
    hover: 'background → #2d5570'
    use: 'Publish / Get started — quiet ink-blue rectangle, never gradient'
  button-secondary:
    background: transparent
    text: text
    border: '1px solid #e3dcc9'
    radius: 6
    padding: '10px 18px'
    hover: 'border → #d4cab2, background → #f3eee2'
    use: 'Secondary action paired with publish'
  button-ghost:
    background: transparent
    text: brand
    border: 'none'
    padding: '8px 12px'
    hover: 'underline'
    use: 'Tertiary inline action'
  card:
    background: '#ffffff'
    border: '1px solid #e3dcc9'
    radius: 8
    shadow: '0 2px 6px rgba(60,40,15,0.04)'
    use: 'Reading sheet card on the warm canvas'
  paper-sheet:
    background: '#ffffff'
    border: '1px solid #e3dcc9'
    radius: 8
    padding: '64px 80px'
    use: 'Hero column — single 720px sheet centred on the off-white canvas'
  inline-link:
    text: brand
    decoration: 'underline 1px from-font'
    underline-offset: '3px'
    hover: 'colour → #2d5570'
    use: 'Plain Tiempos underlined ink — never a button-style link'
  margin-note:
    text: text-muted
    font: 'iA Writer Mono 12px'
    placement: 'right of running text on desktop'
    use: 'Captions, asides, and "Published on…" bylines'
  pull-quote:
    border-left: '3px solid #a04a35'
    padding-left: 24
    font: 'Tiempos Headline 22px / weight 400 italic'
    use: 'Editorial pull quote with rust-accent rule'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-quiet: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  hover-lift: 'opacity-only — paper does not float'
  reduced-motion: 'respects prefers-reduced-motion: reduce — already minimal, all motion strips to opacity'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(60,40,15,0.03) 0 1px 2px'
  paper: 'rgba(60,40,15,0.04) 0 2px 6px'
  warm: 'rgba(80,55,20,0.06) 0 4px 12px'
  deep: 'rgba(50,30,10,0.10) 0 8px 24px'
  ring: '0 0 0 2px #3d6b8a'

accessibility:
  contrast-text-on-bg: 14.6                # #1a1a1a on #fbf8f3 — AAA
  contrast-text-on-brand: 5.8              # #ffffff on #3d6b8a — AA
  contrast-link-on-bg: 6.1                 # #3d6b8a on #fbf8f3 — AA
  focus-ring: '2px solid #3d6b8a, 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'tab follows DOM source order; underline emphasises link focus alongside ring'

lineage:
  summary: |
    Paper Website's marketing system is the literal pitch — a website that
    looks like a sheet of paper. The canvas is #fbf8f3, warmer than Notion's
    paper-white, cooler than Readwise's cream, landing in a Moleskine
    off-white zone. A single literary serif (Tiempos / EB Garamond family)
    carries both display and body — no sans for headlines, no chromatic
    accent system, no gradient. Reading columns are tight (720px container,
    narrower than any other SaaS marketing page) and the body is set at an
    unusually large 18px on a generous 1.65 line-height. Links use a quiet
    ink-blue (#3d6b8a) lifted from old Penguin endpapers, and a rust accent
    (#a04a35) shows up sparingly for editorial flourishes. A monospaced
    iA Writer Mono appears for margin notes. The closest spiritual sibling
    is Stripe Press combined with iA Writer's marketing surface — Paper
    Website inherits both lineages and pushes further toward the actual
    sheet-of-paper metaphor than either.
  influences:
    - name: iA Writer
      role: Writing-as-paper philosophy and iA Writer Mono inheritance
      url: https://ia.net/writer
    - name: Stripe Press
      role: Book-cream typographic surface and serif-led editorial discipline
      url: https://press.stripe.com
    - name: Penguin / Sabon-era classics
      role: Endpaper-blue link colour and serif-only typographic minimalism
      url: https://www.penguin.co.uk
    - name: Klim Type Foundry (Tiempos)
      role: Typographic backbone — Tiempos Headline and Tiempos Text
      url: https://klim.co.nz/retail-fonts/tiempos-headline/
    - name: Moleskine
      role: Off-white paper canvas reference — warm but not cream

dark-mode: null   # Light-only — Paper Website's metaphor breaks in dark mode by design
---

## 1. Visual Theme & Atmosphere

Paper Website is the most literal interpretation of its own pitch — a website that wants to look like paper. The canvas is `#fbf8f3`, a Moleskine off-white that sits between Notion's paper and Readwise's cream. A single literary serif (Tiempos Headline / Tiempos Text, with EB Garamond as fallback) carries both display and body, and there is no sans on headlines and no chromatic accent system to compete with the type. The page reads top-to-bottom as a scroll of single-column reading sheets, each separated by a 1px warm hairline.

Reading columns are deliberately tight at 720px — narrower than any typical SaaS marketing page and a deliberate rejection of the 1280px+ consensus. Body is set at 18px on a generous 1.65 line-height — book-grade typography, the largest body size in the review set. Links use a quiet ink-blue `#3d6b8a` borrowed from Penguin endpapers, and a rust accent (`#a04a35`) appears sparingly for the editorial pull-quote rule. Nothing else in the system competes for the eye.

The typographic move is what makes the brand. Where most SaaS marketing pages deploy a sans display family at weight 600+ for a "punchy" hero, Paper Website refuses heroic display. Tiempos at weight `400` (book weight, not bold) at 56px is the H1, and the page never goes louder. The lighter type, the longer measure, the warm hairlines, and the absence of accent colour combine to read as *book interior, not landing page*. The conceit is that a website is just notes from a notebook.

iA Writer Mono appears in margin notes and in the small "Published on…" byline rows — a typographic stamp borrowed from iA Writer's writing-tool lineage. There is no display sans at all; even the nav uses Tiempos Text at 14px / 500. Buttons are quiet 6px rectangles in the ink-blue with serif labels. The paper sheets get a barely-there warm shadow (`rgba(60,40,15,0.04)`) plus a 1px paper hairline — depth here is paper-tonal-only and any glow would read as digital-tech.

**Key Characteristics:**
- Single literary serif (Tiempos Headline / Tiempos Text family) for both display and body — the absence of sans is the brand
- Off-white sheet canvas `#fbf8f3` — Moleskine warmth, not Readwise cream
- 720px reading column — narrower than any SaaS consensus, the sheet-of-paper metaphor breaks at 1280px
- Body at 18px / 1.65 line-height — book-grade typography
- Ink-blue `#3d6b8a` for links only — never as fill, never as button gradient
- Rust accent `#a04a35` only for the editorial pull-quote left-rule
- Tight 6px button radius, 8px card radius — paper-stock proportions, not SaaS-pillowy
- iA Writer Mono for margin notes and "Published on…" bylines
- Warm hairline borders `#e3dcc9` — never cool grey
- Depth is essentially flat — `rgba(60,40,15,0.04)` warm shadow plus 1px hairline

## 2. Color Palette & Roles

### Primary

- **Bg / Sheet** (`#fbf8f3`): Moleskine off-white sheet canvas. Warmer than Notion's paper-white, cooler than Readwise's cream.
- **Bg Alt** (`#ffffff`): pure white inside reading sheets when contrast against the canvas is needed.
- **Text / Ink** (`#1a1a1a`): near-black ink for body — never `#000000`.
- **Brand / Ink Blue** (`#3d6b8a`): the link colour, lifted from Penguin endpapers.

### Brand & Dark

- **Text Strong** (`#0d0d0d`): deep ink for display H1 — slightly blacker than body.
- **Brand Deep** (`#1f3f54`): pressed link state, also used for dark-section labels.
- **Brand Hover** (`#2d5570`): hovered link state.

### Accent

- **Rust** (`#a04a35`): editorial flourish — pull-quote left-rule, decorative dingbats. Never a button.
- **Accent Hover** (`#8a3d2a`): pressed accent state, rare.
- **Accent Soft** (`#f0e2d8`): tinted background for accent-themed callouts.
- **Accent Tint** (`#f6ebe2`): palest rust wash.

### Interactive

- **Link** (`#3d6b8a`): plain underlined Tiempos link colour.
- **Link Hover** (`#2d5570`): darker on hover, with underline-offset increasing slightly.
- **Link Visited** (`#5b4570`): subtle purple-shifted visited state, optional.

### Neutral Scale

- **Heading** (`#0d0d0d`): display H1.
- **Body** (`#1a1a1a`): running text.
- **Muted** (`#5c574e`): captions, secondary copy — warm grey-brown, never neutral grey.
- **Soft** (`#8a8478`): tertiary metadata.
- **Faint** (`#aba59a`): disabled labels.

### Surface & Borders

- **Surface** (`#f3eee2`): warmer paper panel for callouts and quote blocks.
- **Surface Soft** (`#f8f4ea`): softest cream for inline highlights.
- **Surface Warm** (`#f0e9d8`): deeper paper tone for footers.
- **Border** (`#e3dcc9`): warm paper hairline — the default rule.
- **Border Soft** (`#ede6d3`): softest divider, between cards.
- **Border Strong** (`#d4cab2`): emphasised hairline for hovered cards.

### Shadow Colors

- **Shadow Paper** (`rgba(60,40,15,0.04)`): warm-tinted, almost imperceptible default.
- **Shadow Warm** (`rgba(80,55,20,0.06)`): card hover state.
- **Shadow Deep** (`rgba(50,30,10,0.10)`): rare elevated panel — almost never used.

### Semantic

- **Success** background `#e6efe9`, text `#4a7a5c`, border `#cfdcd2`.
- **Warning** background `#f6ebe2`, text `#a04a35`, border `#e0c6b3`.
- **Danger** background `#f5e2e2`, text `#8a2e2e`, border `#e0b8b8`.
- **Info** background `#dde6ee`, text `#3d6b8a`, border `#c2d1de`.

## 3. Typography Rules

### Font Family

- **Primary serif**: Tiempos Headline (display) and Tiempos Text (body) by Klim Type Foundry.
- **Fallback chain**: `"Tiempos Text", "EB Garamond", "Sabon", Georgia, "Times New Roman", serif`.
- **Mono companion**: iA Writer Mono, falling back to `JetBrains Mono`, then `SFMono-Regular`, then `Menlo`.
- **OpenType features** — `liga` and `kern` always on; `onum` (oldstyle figures) on running body text to feel printed; mono features off.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Hero | Tiempos Headline | 72 | 400 | 1.05 | -0.018em | liga, kern | Maximum size — book weight, not bold |
| H1 | Tiempos Headline | 56 | 400 | 1.10 | -0.012em | liga, kern | Page title, always 400 weight |
| H2 | Tiempos Headline | 38 | 400 | 1.20 | -0.005em | liga, kern | Section heading |
| H3 | Tiempos Headline | 24 | 500 | 1.35 | 0 | liga, kern | Sub-section |
| H4 | Tiempos Headline | 20 | 500 | 1.40 | 0 | — | Card title |
| Body Large | Tiempos Text | 20 | 400 | 1.65 | 0 | onum | Lead paragraph |
| Body | Tiempos Text | 18 | 400 | 1.65 | 0 | onum | Standard reading text — book grade |
| Body Small | Tiempos Text | 16 | 400 | 1.55 | 0 | — | Footer, fine print |
| Quote | Tiempos Headline | 22 | 400 | 1.50 | 0 | — | Inline blockquote |
| Pull Quote | Tiempos Headline | 28 | 400 | 1.40 | -0.005em | — | Editorial pull quote |
| Nav | Tiempos Text | 14 | 500 | 1.20 | 0 | — | Top-of-page navigation |
| Button | Tiempos Text | 15 | 500 | 1.20 | 0 | — | All buttons — serif labels |
| Caption | Tiempos Text | 14 | 400 | 1.50 | 0 | — | Image captions |
| Margin Note | iA Writer Mono | 12 | 400 | 1.45 | 0 | — | Right-of-text mono asides |
| Label | iA Writer Mono | 12 | 500 | 1.30 | 0.04em | — | Section eyebrows, "PUBLISHED" stamps |
| Code | iA Writer Mono | 14 | 400 | 1.55 | 0 | — | Inline code, code blocks |
| Micro | iA Writer Mono | 11 | 400 | 1.40 | 0.02em | — | Footer metadata, version stamps |

### Principles

- **Serif everywhere** — display, body, nav, button labels all use Tiempos. The absence of sans is the brand.
- **Weight 400 on the H1** — heroic display weights (600+) are explicitly rejected. Book weight is the voice.
- **Body at 18px / 1.65** — book-grade typography. Most SaaS body lands at 14–16px / 1.5; Paper Website is deliberately larger and looser.
- **Oldstyle figures** (`onum`) on running text — numerics descend below the baseline like 1860 not `1234`. The printed-page reference depends on this.
- **iA Writer Mono only for margin and label** — never for body. Mono signals "tool" and breaks the reading surface if applied to running text.
- **Reading column 720px maximum** — the sheet-of-paper metaphor breaks at typical SaaS widths.
- **Tracking is conservative** — slightly tight (-0.012em to -0.018em) at display sizes; zero at body. No positive tracking anywhere.
- **No display sans** — even a small Inter heading would dilute the paper effect. The marketing has zero sans.

## 4. Component Stylings

### Buttons

**Primary Publish**
- Background: `#3d6b8a`
- Text: `#ffffff`
- Padding: `10px 18px`
- Radius: `6px`
- Font: 15px Tiempos Text weight 500
- Hover: background → `#2d5570`
- Use: primary CTA — `Publish`, `Get started`, `Start writing`

**Secondary**
- Background: transparent
- Text: `#1a1a1a`
- Border: `1px solid #e3dcc9`
- Padding: `10px 18px`
- Radius: `6px`
- Font: 15px Tiempos Text weight 500
- Hover: border → `#d4cab2`, background → `#f3eee2`
- Use: secondary action

**Ghost / Inline**
- Background: transparent
- Text: `#3d6b8a`
- No border, no fill
- Padding: `8px 12px`
- Hover: underline appears
- Use: tertiary action, disguised as a link

### Cards & Containers

**Reading Sheet (hero card)**
- Background: `#ffffff`
- Border: `1px solid #e3dcc9`
- Radius: `8px`
- Padding: `64px 80px`
- Shadow: `0 2px 6px rgba(60,40,15,0.04)`
- Use: hero column — a single 720px sheet centred on the off-white canvas

**Standard Card**
- Background: `#ffffff` or `#f3eee2` (warm panel variant)
- Border: `1px solid #e3dcc9`
- Radius: `8px`
- Padding: `24px`
- Shadow: optional `0 2px 6px rgba(60,40,15,0.04)`
- Hover: shadow intensifies to `0 4px 12px rgba(80,55,20,0.06)`

**Margin Note Block**
- Background: transparent
- Border: none
- Font: iA Writer Mono 12px / `#5c574e`
- Placement: right column on desktop (offset 32px from running text), inline above on mobile

### Badges, Tags, Pills

- **Status pill** — background `#f3eee2`, text `#5c574e`, border `1px solid #e3dcc9`, radius `9999px`, padding `2px 10px`, font iA Writer Mono 11px.
- **Published stamp** — text `#3d6b8a`, font iA Writer Mono 12px / 500 with `0.04em` tracking, no background.
- **Beta tag** — background `#dde6ee`, text `#3d6b8a`, radius `4px`, padding `1px 8px`, font iA Writer Mono 10px / 500.

### Inputs & Forms

- Background: `#ffffff`
- Border: `1px solid #e3dcc9`
- Radius: `6px`
- Padding: `10px 14px`
- Font: Tiempos Text 16px / 400 / `#1a1a1a`
- Placeholder: `#8a8478`
- Focus: border → `#3d6b8a`, ring `2px #3d6b8a` at `2px` offset
- Label: Tiempos Text 14px / 500 / `#1a1a1a`
- Helper: Tiempos Text 13px / 400 / `#5c574e`
- Error: border → `#a04a35`, helper → `#a04a35`

### Navigation

- Background: `#fbf8f3` (matches canvas — no separate nav bar fill)
- Bottom border: `1px solid #e3dcc9`
- Logo: serif wordmark in `#1a1a1a`
- Links: Tiempos Text 14px / 500 / `#1a1a1a`, underline on hover
- CTA: Primary Publish button right-aligned
- Mobile: hamburger toggle with serif label "Menu"

### Pull Quote

- Border-left: `3px solid #a04a35`
- Padding-left: `24px`
- Font: Tiempos Headline 22px / 400 / italic
- Use: editorial flourish — appears at most once per long-form page

### Decorative Elements

- **Hairline rule** — `1px solid #e3dcc9` between sheets
- **Dingbat** — small rust dot or fleuron centred between sections, optional
- **Handwritten illustrations** — sparse line drawings in `#1a1a1a` ink, sometimes with the rust accent. Slight rotational tilt (1–2°) to read as physical objects on a desk.

## 5. Layout Principles

### Spacing System

- Base unit: `8px`
- Scale: `2, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192`
- Density observation: deliberately spacious. The page reads vertically with substantial breathing room between sheets — 96px between sections, 64px around hero, 48px inside cards.

### Grid & Container

- Reading container: `720px` — narrower than Are.na's 1440 and Linear's 1248, the reason is the sheet-of-paper metaphor.
- Page container: up to `1080px` for two-column layouts (rare — only on docs and pricing).
- Hero: centred 720px column, no banner image, just a serif H1 followed by serif running text.
- Section cadence: hero (white sheet) → feature sheet → margin-note paragraph → CTA sheet → footer.

### Whitespace Philosophy

- **Generous vertical rhythm** — 96px between sheets, never less than 64px.
- **Wide outer margins** — the canvas is the margin. The 720px column always sits within at least 80px of breathing space on either side at desktop.
- **No multi-column body** — a single reading column is the rule. Marginalia uses the right gutter, not a competing column.
- **Air over density** — every band is one idea, one paragraph at most. The page rewards scrolling; it does not pack.

### Section Cadence

- Top-to-bottom serif scroll. No light/dark alternation — the canvas stays warm cream throughout.
- Optional `#f3eee2` warm panel band for emotional contrast every 4–5 sections.
- Pull quote with rust rule appears at most once per long-form page.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Inline highlights, fine corners |
| Standard | 4px | Inputs, badges |
| Comfortable | 6px | Buttons — the workhorse |
| Relaxed | 8px | Cards, paper sheets |
| Large | 12px | Featured paper sheets |
| Featured | 16px | Hero shells (rare) |
| Pill | 9999px | Avatars, status pills only |

The system rejects the pillowy 16–20px radius of modern SaaS in favour of paper-stock proportions. The `6px` button radius and `8px` card radius are deliberately archaic — they read as "stationery" rather than "startup card." Avatars and status pills use full pill but those are the only fully rounded shapes.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | No shadow | Page canvas, inline text |
| 1 — Hairline | `1px solid #e3dcc9` | Default card and sheet separation |
| 2 — Paper | `0 2px 6px rgba(60,40,15,0.04)` plus hairline | Reading sheet on canvas |
| 3 — Warm | `0 4px 12px rgba(80,55,20,0.06)` plus hairline | Hovered card or callout |
| 4 — Deep | `0 8px 24px rgba(50,30,10,0.10)` plus hairline | Modal (rare — Paper Website avoids modals) |
| 5 — Ring | `2px solid #3d6b8a` at 2px offset | Keyboard focus |

**Shadow Philosophy** — depth here is paper-tonal-only. Shadows are warm-tinted (`rgba(60,40,15,...)`) rather than neutral or cool — the page must read as *paper on wood desk*, not *card on screen*. Multi-layer shadows are explicitly rejected; any glow or blur larger than 24px reads as digital-tech and breaks the metaphor. The illustration crops sometimes get a slight rotational tilt to read as physical objects on a desk, but the marketing canvas itself is flat. Cards primarily use the 1px hairline; shadow is a secondary cue, never the primary depth signal.

## 8. Interaction & Motion

### Easing Curves

- **Standard** `cubic-bezier(0.4, 0, 0.2, 1)` — default
- **Emphasized** `cubic-bezier(0.2, 0, 0, 1)` — hero entrance
- **Quiet** `cubic-bezier(0.25, 0.1, 0.25, 1)` — for the soft, almost-imperceptible state changes that suit the brand voice

### Duration Buckets

- Fast: `120ms` — link colour shift, underline appearance
- Standard: `200ms` — button hover, card border darken
- Slow: `320ms` — sheet entrance fades, page transitions

### Per-Component Micro-States

- **Button hover** — background colour shift (200ms quiet ease). No translate, no shadow lift. Paper does not float.
- **Card hover** — border `#e3dcc9` → `#d4cab2` plus shadow intensifies to Warm (level 3). Over 200ms.
- **Link hover** — underline-offset grows from 3px to 4px over 120ms; colour shifts from `#3d6b8a` to `#2d5570`. The underline always exists; only its position and weight changes.
- **Input focus** — border `#e3dcc9` → `#3d6b8a` plus 2px ring `rgba(61,107,138,0.2)` over 120ms.
- **Pull quote entrance** — fade-in from opacity 0 with 12px translate-Y over 320ms emphasized ease, triggered by Intersection Observer.

### Page Transitions

- No client-side transitions on marketing. Standard browser navigation. Long-form articles fade in their first paragraph over 320ms.

### Reduced Motion Strategy

- `@media (prefers-reduced-motion: reduce)` — already minimal. All translate and underline-offset animations strip to opacity-only at 120ms. Pull-quote entrance animation removed entirely.

## 9. Accessibility & A11y

### Contrast Pairs

- `#1a1a1a` body on `#fbf8f3` bg — **14.6:1** (AAA at body sizes)
- `#5c574e` muted on `#fbf8f3` bg — **5.4:1** (AA at body sizes)
- `#ffffff` text on `#3d6b8a` brand — **5.8:1** (AA)
- `#3d6b8a` link on `#fbf8f3` bg — **6.1:1** (AA at body sizes)
- `#a04a35` accent on `#fbf8f3` bg — **5.6:1** (AA)
- `#0d0d0d` heading on `#ffffff` paper — **20.4:1** (AAA)

### Focus Indicators

- Default focus ring: `2px solid #3d6b8a` at `2px` offset
- On rust-accented elements: ring becomes `2px solid #a04a35` to maintain contrast
- Link focus also strengthens underline weight from `1px` to `2px`

### ARIA Patterns

- **Reading article** — `role="article"` on main reading sheets with `aria-labelledby` pointing to H1
- **Margin notes** — `aside` element semantically; `role="note"` if not adjacent
- **Pull quote** — `<blockquote cite="…">` with proper citation
- **Dialog** — Paper Website avoids modals; when used, `role="dialog"` `aria-modal="true"` with focus trap

### Keyboard Navigation

- Tab order follows DOM source order — single-column reading layout makes this natural
- Skip-to-content link in header
- All inline links reachable via Tab; underline plus ring confirms focus
- `Esc` closes any open menu or modal

### Screen Reader Hints

- Decorative dingbats and dividers `aria-hidden="true"`
- Margin notes preceded by visually-hidden "Aside:" label
- "Published on YYYY-MM-DD" rendered as `<time datetime="…">` for proper date semantics

### Reduced Motion

- Honoured — no critical content depends on motion. Pull-quote entrance and underline-offset transitions are decorative.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, margin notes inline above text, H1 56→40px |
| Tablet | 640–1024px | Single column maintained, gutters relax, H1 56→48px |
| Desktop | 1024–1280px | 720px reading column with full margin-note gutter on right |
| Wide | ≥1280px | Container caps at 1080px — never full-bleed |

### Touch Targets

- Buttons at `10px 18px` padding give a comfortable `40px+` tap height
- Inline links inside body text get extended hit-area via padding on `<a>`
- Nav links use `44×44px` minimum tap area on mobile

### Collapsing Strategy

- H1: `72px` → `56px` → `40px` across desktop → tablet → mobile
- Body holds at `18px` everywhere — never compresses (the reading-grade size is the brand)
- Margin notes: right-of-text on desktop → inline above on mobile, prefixed with `↳`
- Pull quotes: maintain rust rule, padding-left reduces to `16px` on mobile
- Hero padding: `64px 80px` → `40px 24px` on mobile
- Section spacing: `96px` → `64px` on mobile
- Nav: serif horizontal links → hamburger toggle with serif `Menu` label

### Image Behavior

- Handwritten illustrations maintain proportions; they sit centred within the 720px column
- Rotational tilt removed on mobile (perceived as glitch on small screens)
- Photographs (rare) use a 1px `#e3dcc9` hairline frame, no inner shadow

### Container Queries

- Reading sheets use container queries so margin-note gutter collapses when the sheet's container is below 720px regardless of viewport.

## 11. Content & Voice

### Tone

Quiet, literary, first-person-singular. The voice reads like a writer's notebook — observations rather than claims, questions rather than features. Headlines often pose, never declare. Body copy is generous in measure but disciplined in length; one paragraph per section is the rule.

### Microcopy Patterns

- **Button verbs** — `Publish`, `Start writing`, `Read more`. Never `Sign up free`, never `Click to learn`.
- **Error message recipe** — gentle, second-person, never blaming: "We couldn't save that. Try again, or write us at hello@paper.website."
- **Success confirmations** — past-tense and quiet: `Published.`, `Saved.`, `Sent.`
- **Inline validation** — appears under field, rust-coloured, 13px Tiempos Text 400.

### Empty States

- Direct and warm: `No notes yet — start with the empty page.`
- Always paired with a single primary CTA (`Start writing`).
- No mascots, no apologetic copy. The empty state itself is the brand — a blank sheet is the product.

### CTA Verb Conventions

- Primary: `Publish`, `Start writing`, `Get started`
- Secondary: `Read the journal`, `See examples`, `About`
- Tertiary: `Learn more`, `Read more →`

## 12. Dark Mode & Theming

**Light-only — no dark variant offered.** Paper Website's metaphor breaks in dark mode by design. The brand asset is the warm off-white sheet; a dark-mode swap would read as *terminal*, not *paper*.

If a downstream implementation must offer dark mode, the recommended approach is *not* to invert tokens but to ship a separate "Notebook Night" theme that swaps the canvas to a deep walnut `#2a221a` with cream text `#f3eee2` — explicitly retaining the warmth and rejecting cool slate. Brand `#3d6b8a` lifts to `#7ea0ba`. Rust `#a04a35` lifts to `#d97a5e`. Hairlines become `rgba(243,238,226,0.10)`.

## 13. Lineage & Influences

Paper Website's marketing system is the literal pitch. The canvas is `#fbf8f3`, warmer than Notion's paper-white, cooler than Readwise's cream, landing in a Moleskine off-white zone. A single literary serif (Tiempos / EB Garamond family) carries both display and body — no sans for headlines, no chromatic accent system, no gradient.

Reading columns are tight (720px container, narrower than any other SaaS marketing page) and the body is set at an unusually large 18px on a generous 1.65 line-height. Links use a quiet ink-blue (`#3d6b8a`) lifted from old Penguin endpapers, and a rust accent (`#a04a35`) shows up sparingly for editorial flourishes. A monospaced iA Writer Mono appears for margin notes.

The closest spiritual sibling is Stripe Press combined with iA Writer's marketing surface. Paper Website inherits both lineages and pushes further toward the actual sheet-of-paper metaphor than either. Where Substack and Ghost commit to a publishing-platform aesthetic with sans nav and serif body, Paper Website refuses the split entirely. Where Readwise leans warm-cream and editorial-but-feature-rich, Paper Website strips out every feature poster and leaves only the page.

The brand explicitly rejects: gradient hero illustrations, multi-column feature grids, sans-on-serif typographic mixing in marketing chrome, pill-shaped CTAs, glow shadows, "we" voice, and any iconography that would read as digital-tech.

**Named influences:**
- iA Writer — writing-as-paper philosophy
- Stripe Press — book-cream typographic surface
- Penguin / Sabon-era classics — endpaper-blue link colour
- Klim Type Foundry (Tiempos) — typographic backbone
- Moleskine — off-white paper canvas reference

## 14. Do's and Don'ts

### Do

- Keep reading columns to ~720px — the sheet-of-paper metaphor breaks at typical 1280px SaaS widths
- Use the serif on every text surface — display, body, nav, button labels
- Treat links as plain underlined ink-blue text — there are no button-style links anywhere on the page
- Set body at 18px / 1.65 line-height — book-grade is the voice
- Use oldstyle figures (`onum`) for body numerics — printed-page reference
- Keep button radius at 6px and card radius at 8px — paper-stock proportions
- Use the rust accent `#a04a35` sparingly — pull-quote rule and editorial dingbat only
- Prefer warm-tinted shadows `rgba(60,40,15,...)` — neutral grey shadows break the warmth
- Use iA Writer Mono only for margin notes, labels, and code
- Add a slight rotational tilt (1–2°) to handwritten illustrations on desktop only
- Maintain a single 720px reading column — never multi-column body

### Don't

- Don't introduce a sans display family — even a small Inter heading would dilute the paper effect
- Don't pump display type past 60px — Paper Website explicitly rejects heroic banners
- Don't push to bold weight (700) on the H1 — `400` is the voice
- Don't apply gradients or glow shadows to surfaces — depth here is paper-tonal-only
- Don't use cool-grey borders — hairlines must be warm `#e3dcc9`
- Don't use the rust accent on action surfaces — it's editorial only
- Don't pill-shape CTAs (`9999px`) — buttons stay at 6px
- Don't deploy a dark-mode token swap — the warm metaphor breaks
- Don't apply the mono to body text — it signals "tool" and breaks the reading surface
- Don't crop the reading column wider than 720px — the metaphor depends on the measure
- Don't add chromatic accent systems beyond ink-blue + rust — colour discipline is the brand

## 15. Agent Prompt Guide

### Quick Color Reference

- Sheet bg: Off-white `#fbf8f3`
- Paper white: `#ffffff`
- Body ink: `#1a1a1a`
- Display ink: `#0d0d0d`
- Muted: Warm grey-brown `#5c574e`
- Brand link: Ink Blue `#3d6b8a`
- Brand hover: `#2d5570`
- Rust accent: `#a04a35`
- Border: Warm hairline `#e3dcc9`
- Surface: Warm panel `#f3eee2`

### Example Component Prompts

- "Create a hero reading sheet on `#fbf8f3` canvas. Centre a 720px column with `#ffffff` background, 1px solid `#e3dcc9` border, 8px radius, 64px 80px padding. Inside: H1 in Tiempos Headline 56px / weight 400 / line-height 1.10 / -0.012em tracking, colour `#0d0d0d`. Subtitle in Tiempos Text 20px / weight 400 / line-height 1.65, colour `#1a1a1a`. Primary button below: `#3d6b8a` background, white text, 6px radius, 10px 18px padding, Tiempos Text 15px / 500."
- "Design an inline pull quote: 3px solid `#a04a35` left border, 24px padding-left, Tiempos Headline 22px / 400 italic, colour `#1a1a1a`. No background fill."
- "Build a margin note row: text in iA Writer Mono 12px / 400, colour `#5c574e`, line-height 1.45. On desktop, place 32px to the right of the running text column. On mobile, place inline above the related paragraph prefixed with an `↳` glyph."
- "Create navigation: `#fbf8f3` background matching canvas, 1px bottom border `#e3dcc9`. Logo in Tiempos Headline 18px / 500, colour `#1a1a1a`. Links in Tiempos Text 14px / 500 / `#1a1a1a` with underline on hover. Right-aligned `Publish` button: `#3d6b8a` / white / 6px radius."
- "Design a status pill: `#f3eee2` background, `#5c574e` text, 1px solid `#e3dcc9` border, 9999px radius, 2px 10px padding, iA Writer Mono 11px / 500."
- "Build a body paragraph: Tiempos Text 18px / 400 / line-height 1.65, colour `#1a1a1a`. Inline links use `#3d6b8a` with 1px underline at 3px offset. Hover: colour `#2d5570`, underline-offset grows to 4px."

### Iteration Guide

1. If the page reads as "tech," remove every sans element — the brand is serif-only
2. If the H1 reads as "punchy," drop weight from 600 to 400 — Paper Website is book-weight, not bold
3. If the canvas reads cold, push warmth via shadow tint (`rgba(60,40,15,...)`) and border colour (`#e3dcc9`)
4. If the column reads sprawling, narrow to 720px and increase line-height to 1.65
5. If a button looks too SaaS-pillowy, drop radius from 12px to 6px
6. Numerics in body must use oldstyle figures (`font-feature-settings: "onum"`) — lining figures break the printed reference
7. Margin notes belong in iA Writer Mono, not Tiempos — the typographic split is the labelling system
8. Resist the urge to add a second accent colour. Ink-blue + rust is the entire chromatic system; anything more breaks the discipline.
