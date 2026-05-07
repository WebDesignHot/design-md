---
name: Mercury
tagline: A near-pure white canvas with a literary serif headline and a signature mercury-mint accent — banking dressed as a quiet magazine.
updated_at: 2026-05-06T01:20:47+12:00
published_at: 2026-05-03T16:32:19+12:00
author: webdesignhot
source_url: https://mercury.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [fintech, saas]
tags: [light, editorial, sans, serif, spacious, cool, soft, premium]
preview_swatch: ['#ffffff', '#5f6ad2', '#101011']
related: [stripe, notion, linear]
description: 'Mercury''s site reads like a financial review — near-white pages, a Tiempos-style serif for the H1, GT America for the body, and a signature cool-mint `#d3e8e0` paired with an indigo `#5f6ad2` for action. The "radically different banking" thesis is delivered in restrained, editorial calm: thin hairlines, generous space, single piece of colour per band, and a deliberately archaic 6px button radius / 10px card radius that signals print-magazine quality rather than startup-card SaaS.'

colors:
  bg: '#ffffff'
  bg-soft: '#fafafa'
  bg-mint: '#d3e8e0'
  bg-mint-soft: '#eef6f1'
  bg-ink: '#101011'
  bg-ink-soft: '#1a1a1c'
  surface: '#f4f4f2'
  surface-soft: '#f8f8f6'
  surface-warm: '#f0f0ed'
  surface-on-ink: '#1a1a1c'
  surface-on-ink-elev: '#26262a'
  text: '#101011'
  text-strong: '#000000'
  text-muted: '#5b5d5c'
  text-soft: '#8a8c8b'
  text-faint: '#b5b6b5'
  text-on-ink: '#fafafa'
  text-on-ink-muted: '#9a9a9a'
  text-on-mint: '#101011'
  brand: '#5f6ad2'
  brand-hover: '#4a55b8'
  brand-deep: '#3a4598'
  brand-soft: '#e8eaff'
  brand-tint: '#f3f4ff'
  accent: '#d3e8e0'
  accent-strong: '#9bc5b3'
  accent-soft: '#eef6f1'
  accent-deep: '#76a692'
  border: '#0000000f'
  border-soft: '#0000000a'
  border-strong: '#0000001f'
  border-on-ink: '#ffffff14'
  link: '#5f6ad2'
  link-hover: '#4a55b8'
  on-brand: '#ffffff'
  on-mint: '#101011'
  success: '#5e9678'
  success-bg: '#e8f1ec'
  warning: '#c08a3a'
  warning-bg: '#f7eed8'
  danger: '#c4564f'
  danger-bg: '#f7e3e0'
  shadow-soft: 'rgba(0,0,0,0.03)'
  shadow-standard: 'rgba(0,0,0,0.06)'
  shadow-elevated: 'rgba(0,0,0,0.10)'

typography:
  display:
    family: '"Tiempos Headline", "Tiempos Text", "GT Sectra", "Times New Roman", Georgia, serif'
    weights: [400, 500]
    opentype-features: ['liga', 'kern']
  body:
    family: '"GT America", "Inter", -apple-system, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"GT America Mono", "iA Writer Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  serif:
    family: '"Tiempos Headline", "Tiempos Text", Georgia, serif'
    weights: [400, 500]
  sans:
    family: '"GT America", "Inter", -apple-system, "Helvetica Neue", sans-serif'
    weights: [400, 500, 600]
  scale:
    display-hero:    { size: 96, weight: 400, lineHeight: 1.02, tracking: '-0.025em', family: serif, opentype: 'liga, kern' }
    h1:              { size: 72, weight: 400, lineHeight: 1.05, tracking: '-0.02em',  family: serif, opentype: 'liga, kern' }
    h2:              { size: 48, weight: 400, lineHeight: 1.10, tracking: '-0.015em', family: serif, opentype: 'liga, kern' }
    h3:              { size: 24, weight: 500, lineHeight: 1.25, tracking: '-0.005em', family: sans }
    h4:              { size: 20, weight: 500, lineHeight: 1.35, tracking: '0',         family: sans }
    h5:              { size: 16, weight: 600, lineHeight: 1.40, tracking: '0',         family: sans }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',         family: sans }
    body:            { size: 16, weight: 400, lineHeight: 1.50, tracking: '0',         family: sans }
    body-small:      { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',         family: sans }
    body-emphasis:   { size: 16, weight: 500, lineHeight: 1.50, tracking: '0',         family: sans }
    standfirst:      { size: 22, weight: 400, lineHeight: 1.45, tracking: '0',         family: serif }
    button:          { size: 14, weight: 500, lineHeight: 1.20, tracking: '0',         family: sans }
    button-small:    { size: 13, weight: 500, lineHeight: 1.20, tracking: '0',         family: sans }
    nav:             { size: 14, weight: 500, lineHeight: 1.20, tracking: '0',         family: sans }
    caption:         { size: 13, weight: 400, lineHeight: 1.45, tracking: '0',         family: sans }
    label:           { size: 12, weight: 500, lineHeight: 1.30, tracking: '0.04em',    family: mono }
    label-uppercase: { size: 11, weight: 500, lineHeight: 1.30, tracking: '0.08em',    family: mono }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.30, tracking: '0.06em',    family: mono }
    code:            { size: 13, weight: 400, lineHeight: 1.50, tracking: '0',         family: mono }
    micro:           { size: 11, weight: 500, lineHeight: 1.40, tracking: '0.04em',    family: mono }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  card: 10
  xl: 12
  pill: 9999

spacing:
  base: 8
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]

layout:
  page-width: 1240
  prose-width: 720
  header-height: 72
  gutter: 24
  section-y: 120

components:
  button-primary:
    background: brand
    text: on-brand
    radius: 6
    padding: '10px 18px'
    font: 'GT America 14px / weight 500'
    hover: 'background → #4a55b8'
    use: 'Indigo CTA — the only saturated action colour. Doctrinal 6px radius.'
  button-secondary:
    background: bg
    text: text
    border: '1px solid #0000001f'
    radius: 6
    padding: '10px 18px'
    hover: 'background → #f4f4f2, border → #0000003a'
    use: 'Secondary action paired with primary indigo'
  button-ghost:
    background: transparent
    text: brand
    border: 'none'
    padding: '10px 14px'
    hover: 'background → #f3f4ff'
    use: 'Tertiary inline action'
  card:
    background: bg
    border: '1px solid #0000000f'
    radius: 10
    padding: '24px'
    shadow: '0 1px 2px rgba(0,0,0,0.03)'
    use: 'Standard content card with hairline + barely-there shadow'
  mint-band:
    background: bg-mint
    text: text
    full-bleed: true
    padding: '120px 0'
    use: 'Signature mint section — full-bleed, never accent dot'
  ink-band:
    background: bg-ink
    text: text-on-ink
    full-bleed: true
    padding: '120px 0'
    use: 'Near-black emotional contrast band — rare'
  serif-h1:
    family: serif
    size: 72
    weight: 400
    use: 'Tiempos H1 — never bolded, the editorial pose'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-quiet: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  hover-lift: 'opacity / colour shift only — depth is hairline-and-band, never elevation'
  reduced-motion: 'respects prefers-reduced-motion: reduce — already minimal, motion strips to opacity'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: '0 1px 2px rgba(0,0,0,0.03)'
  soft: '0 2px 6px rgba(0,0,0,0.04)'
  standard: '0 4px 12px rgba(0,0,0,0.06)'
  elevated: '0 8px 24px rgba(0,0,0,0.10)'
  ring: '0 0 0 2px #5f6ad2'

accessibility:
  contrast-text-on-bg: 18.6                # #101011 on #ffffff — AAA
  contrast-text-on-brand: 5.0              # #ffffff on #5f6ad2 — AA
  contrast-link-on-bg: 5.5                 # #5f6ad2 on #ffffff — AA
  contrast-text-on-mint: 16.4              # #101011 on #d3e8e0 — AAA
  focus-ring: '2px solid #5f6ad2, 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'tab follows DOM; focus ring on every interactive; skip-to-content link in header'

lineage:
  summary: |
    Mercury answered "what if a bank read like a financial review?" by splitting
    its type system in half: a literary serif (Tiempos Headline / GT Sectra) for
    the H1, GT America sans for everything that follows. The split is the brand.
    It signals trust the way the Financial Times pink and the New Yorker's Caslon
    do — credibility by association with print. The signature mint #d3e8e0 is
    used sparingly, almost always as a full-bleed background band rather than an
    accent, and the indigo #5f6ad2 carries every CTA. Where Wise commits to a
    single fluorescent green, Mercury commits to a single editorial gesture: the
    serif headline. Where Brex screams in purple gradient, Mercury whispers in
    mint. The 6px button radius and 10px card radius sit notably tighter than
    today's 12-16px consensus, a deliberately archaic choice that reinforces the
    print-magazine reference.
  influences:
    - name: Financial Times / Bloomberg
      role: Editorial-finance lineage — serif headline + sans body as a credibility signal
      url: https://www.ft.com
    - name: Stripe
      role: Single-accent action colour and chromatic restraint in fintech
      url: https://stripe.com
    - name: Klim Type Foundry
      role: Tiempos Headline and Tiempos Text are the typographic backbone
      url: https://klim.co.nz
    - name: Grilli Type (GT America)
      role: Sans body — humanist proportions support the print-magazine reference
      url: https://www.grillitype.com/typeface/gt-america
    - name: The New Yorker
      role: Serif-led editorial credibility signal — print authority on a digital surface
      url: https://www.newyorker.com

dark-mode: optional   # Mercury occasionally uses a near-black (#101011) full-bleed band but does not ship a full dark-mode token swap on marketing
---

## 1. Visual Theme & Atmosphere

Mercury's marketing site is the rare fintech that picks a serif for the H1 and means it. The canvas is pure white, the hero headline sets in a Tiempos-style serif at `72px / 400` weight, and the body settles into GT America sans at `16px`. The combination — serif display, sans body, signature cool-mint band, single indigo CTA — reads like a financial magazine rather than a SaaS landing page. The "radically different banking" thesis is delivered in restrained, editorial calm.

That editorial pose is what differentiates Mercury from the rest of the neobank cohort. Brex pushes saturation, Wise commits to a fluorescent lime, Plaid leans pale-blue trust — Mercury reaches for print credibility through a typographic gesture and a quiet, near-monochromatic palette. The serif H1 is non-negotiable: it sets the voice. Bolding it would shift the brand from editorial to declarative; loosening it past 80px would shift from book-cover gravity to ad-banner. Mercury sits in a narrow gap between *too quiet* and *too loud* and holds the line precisely.

The signature mint `#d3e8e0` is used sparingly and never as an accent dot. It almost always appears as a full-bleed background band — sectional, not decorative — punctuating the page with one moment of cool tone every 3–5 sections. The indigo `#5f6ad2` carries every CTA and is the only saturated action colour in the system. There is no secondary brand colour. This single-accent discipline is the chromatic equivalent of the type system's serif-restraint move.

Spacing is generous at every scale. Container holds at `1240px` with `120px` section padding — the most "editorial" decision after the type. Cards round at `10px`, buttons at `6px`; both sit one notch tighter than today's `12–16px` SaaS consensus, a deliberately old-fashioned choice that reads as *quality printing* rather than *startup card*. Borders are 6% black hairlines (`#0000000f`) that disappear at viewing distance — depth is sectional (mint band, ink band) rather than elevational (shadow stacks).

**Key Characteristics:**
- Serif H1 (Tiempos Headline / GT Sectra family) at 72px / weight 400 — never bolded
- GT America sans for body, captions, button labels — humanist proportions
- Pure white canvas (`#ffffff`) with near-black `#101011` body
- Signature mercury mint `#d3e8e0` as full-bleed band only — never accent dot
- Single indigo CTA `#5f6ad2` — no secondary saturated colour
- 6px button radius / 10px card radius — deliberately tighter than 2026 SaaS norm
- 120px section padding — generous editorial rhythm
- 6% black hairlines (`#0000000f`) — never heavy grey
- GT America Mono for labels, currency codes, eyebrows
- Near-black `#101011` ink band (rare) for emotional contrast
- No multi-layer shadows — depth is hairline-and-band

## 2. Color Palette & Roles

### Primary

- **Bg / Canvas** (`#ffffff`): pure white — magazine-margin discipline.
- **Text / Ink** (`#101011`): near-black body type — never `#000000`.
- **Brand / Indigo** (`#5f6ad2`): the only saturated action colour. CTAs, links, focus.
- **Accent / Mint** (`#d3e8e0`): mercury mint — signature, used as full-bleed band.

### Brand & Dark

- **Bg Ink** (`#101011`): near-black hero band for occasional emotional contrast.
- **Bg Ink Soft** (`#1a1a1c`): slightly elevated dark surface.
- **Surface on Ink** (`#1a1a1c`): card on ink-band background.
- **Surface on Ink Elev** (`#26262a`): hover state on ink-band card.
- **Text Strong** (`#000000`): rare absolute-black for display contrast moments.

### Accent

- **Mint** (`#d3e8e0`): signature full-bleed band background.
- **Mint Strong** (`#9bc5b3`): deeper mint — emphasis text on mint band, decorative.
- **Mint Soft** (`#eef6f1`): palest mint wash for subtle highlight.
- **Mint Deep** (`#76a692`): pressed mint button (rare — mint is rarely interactive).

### Interactive

- **Brand** (`#5f6ad2`): primary CTA, link, focus ring.
- **Brand Hover** (`#4a55b8`): pressed state.
- **Brand Deep** (`#3a4598`): deepest state, rare.
- **Brand Soft** (`#e8eaff`): info wash, link hover background.
- **Brand Tint** (`#f3f4ff`): palest indigo, secondary surface.

### Neutral Scale

- **Strong** (`#000000`): rare display-emphasis.
- **Body** (`#101011`): default text colour.
- **Muted** (`#5b5d5c`): captions, secondary copy — neutral grey, slightly warm.
- **Soft** (`#8a8c8b`): tertiary metadata.
- **Faint** (`#b5b6b5`): disabled labels.

### Surface & Borders

- **Bg Soft** (`#fafafa`): softest off-white panel base.
- **Surface** (`#f4f4f2`): warm-neutral card base — very subtle off-white.
- **Surface Soft** (`#f8f8f6`): softer panel.
- **Surface Warm** (`#f0f0ed`): deeper warm-neutral for callouts.
- **Border** (`#0000000f`): 6% black hairline — the default rule.
- **Border Soft** (`#0000000a`): 4% divider, between subtle rows.
- **Border Strong** (`#0000001f`): 12% black for emphasised cards (still subtle).
- **Border on Ink** (`#ffffff14`): 8% white for cards on the ink band.

### Shadow Colors

- **Shadow Soft** (`rgba(0,0,0,0.03)`): barely-there default lift.
- **Shadow Standard** (`rgba(0,0,0,0.06)`): hovered card.
- **Shadow Elevated** (`rgba(0,0,0,0.10)`): rare modal or dropdown.

### Semantic

- **Success** background `#e8f1ec`, text `#5e9678`, border `#cfdcd2` — soft sage.
- **Warning** background `#f7eed8`, text `#c08a3a`, border `#e0c98c` — desaturated amber.
- **Danger** background `#f7e3e0`, text `#c4564f`, border `#e3b3ae` — desaturated red.
- **Info** background `#e8eaff`, text `#5f6ad2`, border `#c2c8e8` — brand indigo.

## 3. Typography Rules

### Font Family

- **Primary serif (display)**: Tiempos Headline by Klim Type Foundry — used at 400 weight only.
- **Serif fallback chain**: `"Tiempos Headline", "Tiempos Text", "GT Sectra", "Times New Roman", Georgia, serif`.
- **Primary sans (body)**: GT America by Grilli Type — humanist proportions support the print-magazine reference.
- **Sans fallback chain**: `"GT America", "Inter", -apple-system, "Helvetica Neue", Arial, sans-serif`.
- **Mono companion**: GT America Mono — used for labels, currency codes, eyebrows.
- **Mono fallback**: `"GT America Mono", "iA Writer Mono", Menlo, Consolas, monospace`.
- **OpenType features** — `liga` and `kern` always on. `tnum` for currency tables. No `ss01` discipline.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Hero | Tiempos Headline | 96 | 400 | 1.02 | -0.025em | liga, kern | Maximum size, used on flagship hero only |
| H1 | Tiempos Headline | 72 | 400 | 1.05 | -0.02em | liga, kern | Standard hero — never bolded |
| H2 | Tiempos Headline | 48 | 400 | 1.10 | -0.015em | liga, kern | Section heading — still serif, still 400 |
| H3 | GT America | 24 | 500 | 1.25 | -0.005em | — | Sub-section — switches to sans |
| H4 | GT America | 20 | 500 | 1.35 | 0 | — | Card title |
| H5 | GT America | 16 | 600 | 1.40 | 0 | — | Inline emphasis |
| Body Large | GT America | 18 | 400 | 1.55 | 0 | — | Lead paragraph |
| Body | GT America | 16 | 400 | 1.50 | 0 | — | Standard reading text |
| Body Small | GT America | 14 | 400 | 1.50 | 0 | — | Captions, helper |
| Body Emphasis | GT America | 16 | 500 | 1.50 | 0 | — | Inline bold |
| Standfirst | Tiempos Text | 22 | 400 | 1.45 | 0 | liga | Magazine-style intro after H1 |
| Button | GT America | 14 | 500 | 1.20 | 0 | — | Primary button label |
| Button Small | GT America | 13 | 500 | 1.20 | 0 | — | Compact buttons |
| Nav | GT America | 14 | 500 | 1.20 | 0 | — | Top-nav links |
| Caption | GT America | 13 | 400 | 1.45 | 0 | — | Image captions |
| Label | GT America Mono | 12 | 500 | 1.30 | 0.04em | — | Section eyebrow |
| Label Uppercase | GT America Mono | 11 | 500 | 1.30 | 0.08em | uppercase | Currency code, status label |
| Eyebrow | GT America Mono | 12 | 500 | 1.30 | 0.06em | — | Above-H1 mono prefix |
| Code | GT America Mono | 13 | 400 | 1.50 | 0 | — | Inline code, rare |
| Micro | GT America Mono | 11 | 500 | 1.40 | 0.04em | — | Footer metadata |

### Principles

- **Serif H1, sans body — the split is the brand** — bolding the serif breaks the editorial pose; switching the H1 to sans destroys the print-credibility signal.
- **400 weight on the serif always** — Tiempos at 400 (book weight) is non-negotiable. Mercury never goes 500+ on display.
- **GT America for everything that follows** — H3 down through body, button, nav. The sans is the working voice.
- **Mono for labels and currency only** — GT America Mono signals "data" and "specific" — used for transaction amounts, currency codes (`USD`, `EUR`), and section eyebrows.
- **Tracking is editorial-tight** — `-0.025em` at 96px, `-0.02em` at 72px, `-0.015em` at 48px, normal below 24px. The display feels confident, the body feels neutral.
- **Line-height is generous** — `1.05` on hero (book-cover proportions), `1.50–1.55` on body. Editorial breathing room over efficient density.
- **Reading column ~720px on prose** — even within the 1240px container, body copy holds to magazine measure.
- **Tabular numerals on currency tables** (`tnum`) — required for column-true alignment.
- **No display sans** — even a small sans heading at hero level would dilute the editorial pose.

## 4. Component Stylings

### Buttons

**Primary Indigo**
- Background: `#5f6ad2`
- Text: `#ffffff`
- Padding: `10px 18px`
- Radius: `6px`
- Font: 14px GT America weight 500
- Hover: background → `#4a55b8`
- Use: primary CTA — `Open account`, `Get started`, `Apply now`

**Outlined Secondary**
- Background: `#ffffff`
- Text: `#101011`
- Border: `1px solid #0000001f`
- Padding: `10px 18px`
- Radius: `6px`
- Hover: background → `#f4f4f2`, border → `#0000003a`
- Use: secondary action

**Ghost / Inline**
- Background: transparent
- Text: `#5f6ad2`
- No border
- Padding: `10px 14px`
- Hover: background → `#f3f4ff`
- Use: tertiary inline action

**On Ink Band**
- Primary stays `#5f6ad2` — colour is brand-locked
- Secondary on ink: transparent bg, white text, `1px solid #ffffff14`, hover bg → `#ffffff0a`

### Cards & Containers

**Default Card**
- Background: `#ffffff`
- Border: `1px solid #0000000f`
- Radius: `10px` (doctrinal — tighter than 12–16px SaaS norm)
- Padding: `24px`
- Shadow: `0 1px 2px rgba(0,0,0,0.03)` (barely there)
- Hover: border → `#0000001f`, shadow → `0 2px 6px rgba(0,0,0,0.04)`

**Mint Band (signature)**
- Background: `#d3e8e0` full-bleed
- Text: `#101011`
- Padding: `120px 0` vertical
- Inside container: H2 in Tiempos at 48 / 400, body in GT America at 18 / 400
- Use: sectional break, never accent dot

**Ink Band (rare)**
- Background: `#101011` full-bleed
- Text: `#fafafa`
- Padding: `120px 0`
- H2 in Tiempos at 48 / 400 / `#fafafa`, body in GT America at 18 / 400 / `#9a9a9a`
- Use: emotional contrast — appears at most once per page

**Surface Card**
- Background: `#f4f4f2` (warm-neutral)
- Border: `1px solid #0000000f`
- Radius: `10px`
- Padding: `24px`
- Use: secondary callout, customer quote

**Dashboard Product Still**
- Rendered as cropped editorial photograph rather than glowing screenshot
- 10px radius, 1px hairline, no glow shadow
- Tables inside use mono numerals and 1px hairlines — never zebra striping

### Badges, Tags, Pills

**Status Pill**
- Background: `#f4f4f2`
- Text: `#5b5d5c`
- Border: `1px solid #0000000f`
- Radius: `9999px`
- Padding: `2px 10px`
- Font: GT America Mono 11px / 500 / `0.08em`

**Currency Tag**
- Background: transparent
- Text: `#5b5d5c`
- Font: GT America Mono 12px / 500 / `0.04em`
- Use: `USD`, `EUR`, `GBP` next to amounts

**New Tag**
- Background: `#e8eaff`
- Text: `#5f6ad2`
- Border: none
- Radius: `4px`
- Padding: `1px 8px`
- Font: GT America Mono 11px / 500 / `0.08em` uppercase

### Inputs & Forms

- Background: `#ffffff`
- Border: `1px solid #0000001f`
- Radius: `6px`
- Padding: `10px 14px`
- Font: GT America 16px / 400 / `#101011`
- Placeholder: `#8a8c8b`
- Focus: border → `#5f6ad2`, ring `2px rgba(95,106,210,0.2)`
- Label: GT America 13px / 500 / `#101011`
- Helper: GT America 12px / 400 / `#5b5d5c`
- Error: border → `#c4564f`, helper → `#c4564f`

### Navigation

- Background: `#ffffff` — no separate fill, blends with canvas
- Bottom border: `1px solid #0000000f`
- Logo: Mercury wordmark in `#101011` (serif Mercury logo)
- Links: GT America 14px / 500 / `#101011`, hover → `#5f6ad2`
- Right-pinned: ghost `Sign in` + primary `Open account` indigo CTA
- Mobile: hamburger drawer

### Currency Table

- Background: `#ffffff`
- Hairline rows: `1px solid #0000000a`
- Numerals: GT America Mono 14px with `tnum`, right-aligned
- Currency codes: GT America Mono 12px / 500 / `0.04em`, `#5b5d5c`
- No zebra striping — the absence is part of the editorial discipline

### Decorative Elements

- **Hairline rule** between sections — `1px solid #0000000f`
- **Drop cap** on long-form articles — Tiempos Headline 96px / 400, first paragraph
- **Pull quote** with serif at 28px / 400 italic, indigo left-rule

## 5. Layout Principles

### Spacing System

- Base unit: `8px`
- Scale: `2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160`
- Density observation: deliberately spacious. `120px` section padding is the most "editorial" decision after the type.

### Grid & Container

- Max content width: `1240px` with `24px` gutters
- Reading column on prose pages: `720px` — magazine measure
- Hero: 2-column or single centred — copy left, dashboard still right
- Feature sections: 2-column or 3-column with `10px` cards
- Mint band: full-bleed `#d3e8e0`, content centred within 1240px container
- Ink band: full-bleed `#101011`, content centred similarly

### Whitespace Philosophy

- **Generous editorial rhythm** — 120px between sections is the pattern. Mercury rejects density.
- **Wide outer margins** — even on smaller screens, the canvas is the margin.
- **Air over chrome** — Mercury sectionalises through colour zones (mint band, ink band) rather than card stacks.
- **One idea per band** — most sections present a single feature with one short paragraph and an optional product still.

### Section Cadence

- Hero (white) → feature row (white) → mint band → feature row (white) → standfirst article (white) → ink band → pricing (white) → footer (white)
- Mint band appears at least once per page; ink band rare (at most once)
- White sections dominate — chromatic events are the exception

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Inline highlights |
| Standard | 4px | Currency tags, fine corners |
| Comfortable | 6px | Buttons, inputs — workhorse (doctrinal) |
| Relaxed | 8px | Decorative chips |
| Card | 10px | Cards, dashboard stills (signature radius) |
| Featured | 12px | Hero cards (rare) |
| Pill | 9999px | Avatars, status pills only |

The radii ladder is `2 / 4 / 6 / 8 / 10 / 12`. The tight ladder is the brand's archaic signature; pill avatars and tags use 9999. The `6px` button radius is doctrinal — anything larger would betray the editorial pose. The `10px` card radius is one notch tighter than today's `12–16px` SaaS consensus and reads as *quality printing* rather than *startup card*.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | No shadow | Page bg, inline text |
| 1 — Hairline | `1px solid #0000000f` | Default card and section separation |
| 2 — Ambient | `0 1px 2px rgba(0,0,0,0.03)` plus hairline | Default card lift — barely there |
| 3 — Soft | `0 2px 6px rgba(0,0,0,0.04)` plus hairline | Hovered card |
| 4 — Standard | `0 4px 12px rgba(0,0,0,0.06)` | Dropdown, tooltip |
| 5 — Elevated | `0 8px 24px rgba(0,0,0,0.10)` | Modal (rare) |
| 6 — Sectional | Full-bleed mint or ink band | Primary depth cue — colour, not shadow |
| 7 — Ring | `2px solid #5f6ad2` at 2px offset | Keyboard focus |

**Shadow Philosophy** — depth here is hairline-and-band, not elevation. A single 1px / 6% black hairline plus the rare 1px shadow (`0 1px 2px rgba(0,0,0,0.03)`) is the maximum default lift. The mint and ink full-bleed bands do most of the heavy lifting — Mercury sectionalises through colour zones rather than card stacks. There is almost no use of multi-layer shadow. This is a deliberate rejection of the SaaS-shadow-stack consensus; depth from blur reads as digital, depth from band reads as printed.

## 8. Interaction & Motion

### Easing Curves

- **Standard** `cubic-bezier(0.4, 0, 0.2, 1)` — default
- **Emphasized** `cubic-bezier(0.2, 0, 0, 1)` — modal entrance
- **Quiet** `cubic-bezier(0.25, 0.1, 0.25, 1)` — subtle state changes that suit the editorial voice

### Duration Buckets

- Fast: `120ms` — colour swaps, border darken
- Standard: `200ms` — button hover, card border shift
- Slow: `320ms` — modal entrance, hero reveal

### Per-Component Micro-States

- **Button hover (primary)** — background `#5f6ad2` → `#4a55b8` over 120ms quiet ease. No translate, no shadow lift.
- **Card hover** — border `#0000000f` → `#0000001f`, shadow ambient → soft over 200ms quiet.
- **Link hover** — colour `#5f6ad2` → `#4a55b8` over 120ms, underline appears via `text-decoration` over 120ms.
- **Input focus** — border `#0000001f` → `#5f6ad2` plus 2px ring `rgba(95,106,210,0.2)` over 120ms.
- **Mint band entrance** — opacity 0→1 with `translate-Y(8px)` over 320ms emphasized, triggered by Intersection Observer.

### Page Transitions

- No client-side transitions on marketing. Standard browser navigation. Hero modules animate over 320ms once in viewport.

### Reduced Motion Strategy

- `@media (prefers-reduced-motion: reduce)` — all translate animations strip to opacity-only at 120ms linear. Mint band entrance becomes instant; underline animations remain (decoration is functional).

## 9. Accessibility & A11y

### Contrast Pairs

- `#101011` body on `#ffffff` bg — **18.6:1** (AAA)
- `#5b5d5c` muted on `#ffffff` bg — **6.6:1** (AA)
- `#ffffff` text on `#5f6ad2` brand — **5.0:1** (AA at body sizes)
- `#5f6ad2` link on `#ffffff` bg — **5.5:1** (AA)
- `#101011` text on `#d3e8e0` mint — **16.4:1** (AAA)
- `#fafafa` text on `#101011` ink — **18.4:1** (AAA)
- `#9a9a9a` muted on `#101011` ink — **5.4:1** (AA)

### Focus Indicators

- Default focus ring: `2px solid #5f6ad2` at `2px` offset
- On mint band: ring stays indigo (sufficient contrast against mint)
- On ink band: ring becomes `2px solid #b5b6ff` (lighter indigo) for contrast
- Inputs: 2px indigo ring inset plus border colour shift

### ARIA Patterns

- **Combobox** — `role="combobox"` for currency, country selectors
- **Dialog** — `role="dialog"` `aria-modal="true"` for upgrade and apply modals
- **Tabs** — `role="tablist"` for product feature tabs
- **Table** — `<table role="table">` with `<th scope="col">` for currency tables
- **Article** — `role="article"` on long-form magazine-style content with `aria-labelledby`

### Keyboard Navigation

- Tab order follows DOM
- Skip-to-content link in header
- All interactive elements reachable via Tab
- `Esc` closes modals, dropdowns
- Arrow keys for tab navigation, listbox selection

### Screen Reader Hints

- Decorative drop caps `aria-hidden="true"` (visual only)
- Currency tags paired with amount: "100 dollars" not "USD 100" in screen-reader text
- Mint and ink bands marked `<section aria-labelledby="…">` for navigation
- Magazine-style standfirst gets `role="doc-subtitle"`

### Reduced Motion

- Honoured — band entrance animations strip to instant. Underline transitions remain (functional state cue).

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, H1 72→44px, mint band padding 60px |
| Tablet | 640–1024px | 2-column hero, 2-column feature grid, H1 72→56px |
| Desktop | 1024–1280px | Full layout, generous margins, H1 72px |
| Wide | ≥1280px | Centred 1240px container with margins |

### Touch Targets

- Buttons at `10px 18px` give comfortable `40px+` tap height
- Nav links use `44×44px` minimum on mobile
- Status pills retain `2px 10px` with `min-height: 24px` on touch

### Collapsing Strategy

- H1: `72px` → `56px` → `44px` across desktop → tablet → mobile
- Body: `16px` everywhere
- Feature cards: 3-column → 2-column → single column stacked
- Mint band padding: `120px` → `80px` → `60px` vertical
- Section spacing: `120px` → `80px` → `64px`
- Currency tables: maintain layout, scroll horizontal on mobile (no row stacking)
- Nav: horizontal links + CTA → hamburger drawer

### Image Behavior

- Dashboard stills maintain `10px` radius and hairline border
- Editorial photographs maintain aspect ratio with `10px` radius
- No glow shadows added on mobile

### Container Queries

- Cards inside grid use container queries to stack content vertically when their container drops below `300px`.

## 11. Content & Voice

### Tone

Editorial, confident, slightly understated. The voice assumes the reader is a discerning founder or operator. Headlines pose ("Banking built for ambitious companies") rather than declare — the serif signals print-grade thoughtfulness. Body copy is concise, fact-anchored, and avoids both jargon and aspirational language. Mercury never says "Disrupt" or "Revolutionary"; it says "Built for" and "Designed to."

### Microcopy Patterns

- **Button verbs** — `Open account`, `Apply now`, `Sign in`. Never `Get started today`, never `Click here`.
- **Error message recipe** — formal, helpful: `We couldn't process this request. Try again or contact support@mercury.com.`
- **Success confirmations** — past-tense, terse: `Account opened.`, `Transfer sent.`, `Card activated.`
- **Inline validation** — appears under field, danger red, 12px GT America 400.

### Empty States

- Direct: `No transactions yet.`
- Always paired with primary CTA `Send first payment` and secondary `Add funds`.
- No mascots, no apologetic copy.

### CTA Verb Conventions

- Primary: `Open account`, `Apply now`, `Get Mercury`
- Secondary: `See features`, `View pricing`, `Sign in`
- Tertiary: `Learn more →`, `Read the guide →`

## 12. Dark Mode & Theming

**Light marketing surface only — ink band embedded.** Mercury does not ship a full dark-mode token swap on marketing. The near-black `#101011` lives inside the rare ink band, not as a section-level theme. The product (banking dashboard) offers a dark variant; the marketing site does not.

If a downstream implementation needs full dark mode, the recommended swap:
- `bg` `#ffffff` → `#101011`
- `surface` `#f4f4f2` → `#1a1a1c`
- `bg-mint` `#d3e8e0` stays — mint reads same on both themes (rare full-bleed band)
- `text` `#101011` → `#fafafa`
- `text-muted` `#5b5d5c` → `#9a9a9a`
- `border` `#0000000f` → `#ffffff14`
- `brand` `#5f6ad2` stays — colour is brand-locked

The colour-locked indigo means CTAs read identical in light and dark — preserving the single-accent discipline.

## 13. Lineage & Influences

Mercury answered "what if a bank read like a financial review?" by splitting its type system in half: a literary serif (Tiempos Headline / GT Sectra) for the H1, GT America sans for everything that follows. The split is the brand. It signals trust the way the Financial Times pink and the New Yorker's Caslon do — credibility by association with print.

The signature mint `#d3e8e0` is used sparingly, almost always as a full-bleed background band rather than an accent, and the indigo `#5f6ad2` carries every CTA. Where Wise commits to a single fluorescent green, Mercury commits to a single editorial gesture: the serif headline. Where Brex screams in purple gradient, Mercury whispers in mint. The 6px button radius and 10px card radius sit notably tighter than today's 12–16px consensus, a deliberately archaic choice that reinforces the print-magazine reference.

The brand explicitly rejects: bold serif headlines (the 400 weight is doctrinal), gradient backgrounds, multi-layer shadows, mascot characters, fluorescent neon accents, pill-shaped CTAs, and any visual move that would shift the brand from *editorial-magazine* to *startup-card*.

**Named influences:**
- Financial Times / Bloomberg — editorial-finance lineage
- Stripe — single-accent action colour discipline
- Klim Type Foundry (Tiempos) — typographic backbone
- Grilli Type (GT America) — humanist sans body
- The New Yorker — serif-led editorial credibility

## 14. Do's and Don'ts

### Do

- Keep the H1 in serif at 400 weight — bolding the serif breaks the editorial pose.
- Use the mint `#d3e8e0` as a full-bleed band, not as an accent dot — its function is sectional, not decorative.
- Keep button radius at 6px and card radius at 10px — tighter than 2026 SaaS consensus is the point.
- Use GT America for body, button, nav, captions — the sans is the working voice.
- Pair the serif H1 with a sans body — the typographic split is the brand.
- Use GT America Mono for currency codes, eyebrows, and labels at `0.04–0.08em` tracking.
- Apply tabular numerals (`tnum`) on currency tables for column-true alignment.
- Use 120px section padding — the editorial rhythm is the brand.
- Use 6% black hairlines (`#0000000f`) for default borders — never heavy grey.
- Reserve the ink band (`#101011`) for at most one emotional contrast moment per page.
- Render dashboard stills as cropped editorial photographs, not glowing screenshots.

### Don't

- Don't introduce a secondary action colour — the indigo `#5f6ad2` is the only saturated CTA.
- Don't apply heavy shadows to cards — depth here is hairline-and-band, not elevation.
- Don't use the mint as type colour or icon fill — it lives only as a background.
- Don't bold the serif H1 — the 400 weight is non-negotiable.
- Don't switch the H1 to sans — the serif signals print-credibility.
- Don't pill-shape CTAs (`9999px`) — buttons stay at 6px.
- Don't introduce gradient backgrounds — the canvas is flat white or full-bleed band.
- Don't apply chromatic accents beyond mint + indigo — the discipline is the brand.
- Don't use mono for body text — mono is labels and currency only.
- Don't compress section padding below 80px — the generous rhythm is part of the editorial pose.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: White `#ffffff`
- Body text: Near-black `#101011`
- Muted: `#5b5d5c`
- Brand CTA: Indigo `#5f6ad2`
- CTA Hover: `#4a55b8`
- Mint band: `#d3e8e0`
- Ink band: `#101011`
- Surface: Warm-neutral `#f4f4f2`
- Border: 6% black `#0000000f`
- Brand soft: `#e8eaff`

### Example Component Prompts

- "Create a hero section on white background. Headline at 72px Tiempos Headline weight 400, line-height 1.05, letter-spacing -0.02em, colour `#101011`. Standfirst below at 22px Tiempos Text weight 400, line-height 1.45, colour `#5b5d5c`. Primary CTA: `#5f6ad2` background, white text, 6px radius, 10px 18px padding, 14px GT America weight 500. Secondary outlined: white bg, `#101011` text, 1px solid `#0000001f`, 6px radius."
- "Design a mint band: `#d3e8e0` full-bleed background, 120px vertical padding. Inside 1240px container: H2 in Tiempos Headline 48 / 400 / `#101011`. Body in GT America 18 / 400 / `#101011`. Optional product still right-aligned with 10px radius and 1px hairline border."
- "Build a default card: white bg, 1px solid `#0000000f`, 10px radius, 24px padding, shadow `0 1px 2px rgba(0,0,0,0.03)`. Title in GT America 20/500/`#101011`. Body in GT America 16/400/`#5b5d5c`. Optional mono eyebrow above title in GT America Mono 12/500/`0.06em` uppercase, colour `#5f6ad2`."
- "Create navigation: white background, 1px bottom border `#0000000f`. Mercury serif wordmark left in `#101011`. Links in GT America 14/500/`#101011`, hover `#5f6ad2`. Right-aligned ghost `Sign in` plus primary indigo `Open account` button (`#5f6ad2` bg, white text, 6px radius)."
- "Design an ink band: `#101011` full-bleed background, 120px vertical padding. H2 in Tiempos Headline 48/400/`#fafafa`. Body in GT America 18/400/`#9a9a9a`. CTA stays brand-locked `#5f6ad2`."
- "Build a currency table: white bg, hairline rows `1px solid #0000000a`, no zebra striping. Numerics right-aligned in GT America Mono 14/400/tnum, currency codes in GT America Mono 12/500/0.04em colour `#5b5d5c`. Header row uses GT America 13/500."

### Iteration Guide

1. If the page reads "consumer SaaS," restore the serif H1 — Tiempos at 72px / 400 is the credibility signal.
2. The serif weight is doctrinal — never bold. Going 500 or 600 breaks the editorial pose.
3. The mint `#d3e8e0` belongs in full-bleed bands only — using it as accent dot, button fill, or icon colour breaks the sectional discipline.
4. If a button looks too SaaS-pillowy, drop radius from 12px to 6px and re-examine.
5. Body must be sans (GT America) — using a serif body would dilute the credibility split.
6. Card radius 10px is the signature — `12px+` reads consumer, `8px-` reads enterprise.
7. Currency tables must use `font-feature-settings: "tnum"` for column-true numerics.
8. Resist adding chromatic accents. Mint + indigo is the entire system; any third saturated colour breaks the discipline.
