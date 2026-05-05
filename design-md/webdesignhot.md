---
name: webdesignhot
tagline: AI-era editorial dark — pure black with one acid-lime accent.
author: webdesignhot
source_url: https://www.webdesignhot.com
spec: design.md/v1.5
quality: curated
featured: true
categories: [marketplace, dev-tools]
tags: [dark, editorial, mono, serif, minimal]
preview_swatch: ['#0a0a0a', '#c6f432', '#ededed']
related: [agentkit, vercel, linear]
description: 'Publication-grade dark interface on pure black with a single acid-lime accent. Magazine + dev-tool lineage — Linear''s spatial restraint, Vercel''s type hierarchy, Anthropic''s editorial calm, Rauno''s italic-serif punctuation. The accent stays high-impact at low quantity by remaining flat and solid: never a gradient, never a glow.'

lineage:
  summary: |
    webdesignhot inherits from a magazine + dev-tool lineage rather than the
    AI-SaaS purple-gradient cliché. The dark canvas, narrow type tracking,
    and single-accent rule come from Linear and Vercel; the editorial italic
    accent (`<em>` rendered as Instrument Serif italic in brand color) is a
    direct lift from Rauno's site, used as a design *token* rather than
    grammatical emphasis. The mono-with-lime-dot section labels are an
    homage to Anthropic's marketing rhythm. Acid lime `#c6f432` is the
    intentional rejection of the purple-gradient defaults — flat, solid,
    high-impact at low quantity. Depth never comes from drop shadows;
    it comes from four-tier tonal stacking and translucent-white borders.
  influences:
    - name: Linear
      role: Spatial restraint, dense product surfaces, dark-canvas geometry
      url: https://linear.app
    - name: Vercel
      role: Type hierarchy, Inter Variable, restrained weights
      url: https://vercel.com
    - name: Anthropic
      role: Editorial calm, mono-with-dot section rhythm
      url: https://anthropic.com
    - name: Rauno Freiberg
      role: Italic-serif accents inside display headlines
      url: https://rauno.me
    - name: Stripe Press
      role: Tonal restraint and reading-grade body type
      url: https://press.stripe.com
    - name: Are.na
      role: Editorial-as-product, label rhythm

colors:
  bg: '#0a0a0a'
  bg-elev: '#0f0f0f'
  bg-card: '#141416'
  bg-card-hover: '#1a1a1c'
  bg-card-active: '#202024'
  surface-overlay: 'rgba(10, 10, 10, 0.72)'
  text: '#ededed'
  text-strong: '#ffffff'
  text-dim: '#8a8a8a'
  text-faint: '#525252'
  text-disabled: '#3a3a3a'
  text-on-brand: '#0a0a0a'
  brand: '#c6f432'
  brand-hover: '#d2f854'
  brand-pressed: '#b6e426'
  brand-tint: 'rgba(198, 244, 50, 0.10)'
  brand-tint-strong: 'rgba(198, 244, 50, 0.25)'
  brand-deep: '#9bcc1f'
  border: 'rgba(255, 255, 255, 0.08)'
  border-strong: 'rgba(255, 255, 255, 0.15)'
  border-subtle: 'rgba(255, 255, 255, 0.04)'
  border-brand: 'rgba(198, 244, 50, 0.25)'
  border-brand-strong: 'rgba(198, 244, 50, 0.45)'
  selection-bg: 'rgba(198, 244, 50, 0.30)'
  selection-text: '#ededed'
  focus-ring: '#c6f432'
  link: '#c6f432'
  link-hover: '#d2f854'
  link-visited: '#9bcc1f'
  success: '#22c55e'
  success-tint: 'rgba(34, 197, 94, 0.12)'
  warning: '#f59e0b'
  warning-tint: 'rgba(245, 158, 11, 0.12)'
  danger: '#ef4444'
  danger-tint: 'rgba(239, 68, 68, 0.12)'
  info: '#60a5fa'
  info-tint: 'rgba(96, 165, 250, 0.12)'
  grain-radial: 'radial-gradient(60% 40% at 50% 0%, rgba(198,244,50,0.04), transparent 70%)'

typography:
  display:
    family: 'Inter Variable, Inter, -apple-system, sans-serif'
    weights: [400, 500]
    feature-settings: "'ss01', 'cv11'"
  body:
    family: 'Inter Variable, Inter, -apple-system, sans-serif'
    weights: [400, 500]
    feature-settings: "'ss01'"
  serif:
    family: 'Instrument Serif, Iowan Old Style, Georgia, serif'
    style: italic
    weight: 400
    role: 'em-tag accent only — repurposed for editorial italic punctuation'
  mono:
    family: 'JetBrains Mono Variable, JetBrains Mono, ui-monospace, monospace'
    weights: [400, 500]
    feature-settings: "'zero', 'ss01'"
    role: 'metadata, code, labels'
  scale:
    display-hero:    { size: 88, weight: 500, lineHeight: 0.95, tracking: -0.04,  family: display }
    display-large:   { size: 72, weight: 500, lineHeight: 1.00, tracking: -0.035, family: display }
    display-medium:  { size: 56, weight: 500, lineHeight: 1.00, tracking: -0.035, family: display }
    display-small:   { size: 48, weight: 500, lineHeight: 1.05, tracking: -0.03,  family: display }
    h1:              { size: 40, weight: 500, lineHeight: 1.05, tracking: -0.025, family: display }
    h2:              { size: 32, weight: 500, lineHeight: 1.15, tracking: -0.02,  family: display }
    h3:              { size: 22, weight: 500, lineHeight: 1.25, tracking: -0.015, family: display }
    h4:              { size: 18, weight: 500, lineHeight: 1.35, tracking: -0.01,  family: display }
    body-lead:       { size: 19, weight: 400, lineHeight: 1.55, tracking: -0.01,  family: body }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, tracking: -0.01,  family: body }
    body:            { size: 15, weight: 400, lineHeight: 1.6,  tracking: -0.01,  family: body }
    body-small:      { size: 13, weight: 400, lineHeight: 1.55, tracking: -0.005, family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.45, tracking: 0,      family: body }
    label-mono:      { size: 11, weight: 500, lineHeight: 1.5,  tracking: 0.15,   family: mono, transform: uppercase }
    code-inline:     { size: 13, weight: 400, lineHeight: 1.6,  tracking: 0,      family: mono }
    code-block:      { size: 13, weight: 400, lineHeight: 1.65, tracking: 0,      family: mono }
    em-accent:       { size: inherit, weight: 400, lineHeight: inherit, family: serif, style: italic, color: brand }

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]
  named:
    none: 0
    xxs: 4
    xs: 8
    sm: 12
    md: 16
    lg: 24
    xl: 32
    xxl: 48
    section: 64
    section-large: 96
    section-hero: 120

radius:
  none: 0
  micro: 3
  small: 6
  standard: 8
  comfortable: 12
  featured: 16
  hero: 24
  pill: 9999

breakpoints:
  mobile: 480
  tablet: 768
  laptop: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: '0 1px 2px rgba(0, 0, 0, 0.4)'
  popover: '0 10px 30px rgba(0, 0, 0, 0.55), 0 2px 6px rgba(0, 0, 0, 0.4)'
  tooltip: '0 4px 14px rgba(0, 0, 0, 0.5)'
  toast: '0 12px 36px rgba(0, 0, 0, 0.6), 0 2px 6px rgba(0, 0, 0, 0.4)'
  modal: '0 24px 64px rgba(0, 0, 0, 0.65), 0 4px 12px rgba(0, 0, 0, 0.4)'
  ring-focus: '0 0 0 2px #0a0a0a, 0 0 0 4px #c6f432'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-accelerate: 'cubic-bezier(0.4, 0, 1, 1)'
  duration-instant: 80
  duration-fast: 150
  duration-standard: 200
  duration-slow: 300
  duration-slower: 480
  reduced-motion: 'respects prefers-reduced-motion: reduce — non-essential transitions become opacity-only at 80ms; brand pulse and grain animations disabled.'

accessibility:
  contrast-text-on-bg: 14.6
  contrast-text-dim-on-bg: 5.9
  contrast-text-on-brand: 13.2
  contrast-brand-on-bg: 14.1
  contrast-link-on-bg: 14.1
  focus-ring: '2px solid #c6f432 with 2px offset on bg'
  focus-style: 'visible focus only on keyboard nav (:focus-visible) — never on mouse click'
  reduced-motion-honored: true
  keyboard-nav: 'fully navigable — Tab order matches DOM order; skip-to-content link in header'
  screen-reader: 'aria-labels on icon-only buttons; <Label> mono labels are decorative and aria-hidden when paired with a visible heading'
  text-min-size: 13
  touch-target: 44

dark-mode: 'native — webdesignhot is dark-only by design; no light variant offered. Light theming is available via the AgentKit sibling kit.'

components:
  button-primary:
    backgroundColor: brand
    textColor: text-on-brand
    padding: '14px 20px'
    rounded: standard
    font: 'display 14/500 -0.005em'
    border: 'none'
    hover: 'background brand-hover; no scale, no glow'
    active: 'background brand-pressed'
    disabled: 'opacity 0.40, cursor not-allowed'
    use: 'primary commerce — Buy, Get kit, Sign up, Subscribe'
  button-ghost:
    backgroundColor: transparent
    textColor: text
    border: 'border-strong'
    padding: '14px 20px'
    rounded: standard
    font: 'display 14/500'
    hover: 'background rgba(255,255,255,0.05); border tightens to text-dim'
    use: 'secondary action paired with a primary CTA'
  button-link:
    backgroundColor: transparent
    textColor: text
    padding: '6px 0'
    border: 'none'
    decoration: 'underline-offset 4px, decoration-color text-faint'
    hover: 'decoration-color brand'
    use: 'inline navigation, footer rows'
  button-icon:
    backgroundColor: transparent
    textColor: text-dim
    size: '36px square'
    rounded: comfortable
    hover: 'background rgba(255,255,255,0.05); text text'
    use: 'nav icons, copy-to-clipboard, dismiss'
  card:
    backgroundColor: bg-card
    border: border
    rounded: featured
    padding: '24-32px contextual'
    hover: 'background bg-card-hover'
    active: 'background bg-card-active'
    shadow: none
  card-featured:
    backgroundColor: bg-card
    border: border-brand
    rounded: featured
    padding: '32px'
    accent: 'brand-tinted top border 1px'
    use: 'recommended pricing tier, highlighted catalog entry'
  input:
    backgroundColor: bg-elev
    textColor: text
    placeholder: text-faint
    border: border-strong
    padding: '12px 14px'
    rounded: small
    focus: 'border-brand-strong; ring 0 0 0 2px brand-tint-strong'
    error: 'border danger; helper text danger'
  label:
    backgroundColor: transparent
    textColor: text-dim
    font: 'mono 11/500 0.15em uppercase'
    decorator: '6px lime dot left of text'
    use: 'section markers, metadata captions'
  badge:
    backgroundColor: brand-tint
    textColor: brand
    border: border-brand
    font: 'mono 11/500 0.1em uppercase'
    padding: '3px 8px'
    rounded: micro
  nav-link:
    textColor: text-dim
    padding: '8px 12px'
    font: 'display 14/500'
    hover: 'text text'
    active: 'text text; underline 2px brand offset 6px'
  em:
    family: serif
    style: italic
    color: brand
    use: 'editorial accent inside display headlines — never grammatical emphasis'
  toc-rail:
    backgroundColor: transparent
    textColor: text-faint
    border-left: '1px solid border'
    indicator: '2px lime bar on active row'
    use: 'long-form article sidebar nav'
---

## 1. Visual Theme & Atmosphere

webdesignhot.com is **AI-era editorial dark** — a publication-grade dark
interface on pure black (`#0a0a0a`) with a single acid-lime accent
(`#c6f432`). The room you walk into is a printer's shop at midnight: ink
on cotton, the press silenced, one lamp lit over the proofs. The acid
lime is that lamp — present in tiny doses (a CTA, a punctuation dot, a
selection rectangle) and absent everywhere else. The system rejects the
AI-SaaS purple-gradient cliché and inherits from a magazine / dev-tool
lineage: Linear's spatial restraint, Vercel's type hierarchy, Anthropic's
editorial calm, Rauno's italic-serif punctuation.

The atmosphere rests on **three typographic voices** held in tension:
Inter for display and UI (industrial precision), Instrument Serif italic
for editorial accents (literary warmth against the technical frame), and
JetBrains Mono for metadata and code (developer credibility). Weights
stay restrained — body copy rarely above 500 — with size and
letter-spacing doing the hierarchical work. Tracking tightens *as type
grows* (`-0.04em` at 88px, `0` at 12px), which is the inverse of the
default browser cascade and produces the "engineered" feel.

Depth comes from **tonal elevation** (`#0a0a0a` → `#0f0f0f` → `#141416`
→ `#1a1a1c`), not drop shadows. Borders are translucent white at
8 – 15% opacity so edges feel atmospheric, not harsh. A subtle radial
gradient in `.grain` adds ambient lime light at the top of the viewport
— no film-grain noise (it reads as a display artifact on screens, not
as paper). The `<em>` tag is repurposed: it renders Instrument Serif
italic in brand color and is used as a **design token**, not for
grammatical emphasis. Editorial copy uses it to punctuate display
headlines (*Agents that <em>actually do the work</em>*), exactly as
Rauno does on his portfolio.

The brand voice is **measured, technical, slightly dry**. Pricing pages
read like spec sheets, not sales letters. Section labels are mono
uppercase with a 6px lime dot to the left — the rhythm anchor of every
page on the site.

**Key Characteristics**
- Pure-black canvas — `#0a0a0a`, never `#000`
- One accent — acid lime `#c6f432`, flat and solid, no gradient
- Three type voices — Inter / Instrument Serif italic / JetBrains Mono
- Tonal elevation, not shadows
- Tracking tightens as size grows
- `<em>` as a design token
- Mono uppercase labels with lime dot rhythm
- Editorial calm, magazine-lineage layout

## 2. Color Palette & Roles

The palette is intentionally narrow: four surfaces, three text tones,
one accent. Anything beyond them is a mistake.

### Primary

- **Background** (`#0a0a0a`): root page. Not pure `#000` — a hair
  warmer so anti-aliased text doesn't crunch.
- **Text** (`#ededed`): body copy, headlines, interactive labels.
- **Brand CTA** (`#c6f432`): the only accent. Solid fill on primary
  buttons, with `#0a0a0a` text on top.

### Brand & Acid Accent

- **Brand** (`#c6f432`): acid lime. Used **only** as solid CTA fills,
  `::selection` highlight, active dots, focus rings, and the lime dot
  in the logo. Never as gradient. Never glow-shadowed.
- **Brand Hover** (`#d2f854`): a fraction lighter on hover.
- **Brand Pressed** (`#b6e426`): a fraction darker on press.
- **Brand Tint** (`rgba(198, 244, 50, 0.10)`): badge background, hover
  halo on pricing card.
- **Brand Tint Strong** (`rgba(198, 244, 50, 0.25)`): focus ring fill,
  active selection underlay.
- **Brand Deep** (`#9bcc1f`): visited link, secondary lime decoration
  where the full-saturation lime would clash.

### Surfaces

- **bg** (`#0a0a0a`): root page.
- **bg-elev** (`#0f0f0f`): sticky nav, input fields, subtle container
  contrast.
- **bg-card** (`#141416`): content panels, product cards, pricing
  containers.
- **bg-card-hover** (`#1a1a1c`): interactive card hover.
- **bg-card-active** (`#202024`): pressed/selected card state.
- **surface-overlay** (`rgba(10, 10, 10, 0.72)`): scrim under modals
  and command palette, with `backdrop-filter: blur(6px)`.

### Text Scale

- **text-strong** (`#ffffff`): rare — only when a headline must hit
  AAA at small sizes against a slightly lifted card.
- **text** (`#ededed`): default body and heading color.
- **text-dim** (`#8a8a8a`): supporting copy, subtitles, inactive nav
  links.
- **text-faint** (`#525252`): metadata, footer rows, disabled text.
- **text-disabled** (`#3a3a3a`): explicitly disabled controls.
- **text-on-brand** (`#0a0a0a`): black text on top of the lime CTA —
  contrast 13.2 (AAA).

### Borders

- **border** (`rgba(255, 255, 255, 0.08)`): default card and section
  divider.
- **border-strong** (`rgba(255, 255, 255, 0.15)`): inputs, buttons,
  emphasized rows.
- **border-subtle** (`rgba(255, 255, 255, 0.04)`): hairline dividers
  inside dense lists.
- **border-brand** (`rgba(198, 244, 50, 0.25)`): featured pricing tier
  outline.
- **border-brand-strong** (`rgba(198, 244, 50, 0.45)`): focused input
  outline, active toggle.

### Interactive

- **link** = `brand` — underlined with 4px offset and `text-faint`
  decoration color by default; decoration shifts to brand on hover.
- **link-hover** = `brand-hover`.
- **link-visited** = `brand-deep` (rare; mostly only in long-form
  article footnotes).
- **focus-ring** = `brand` with a 2px offset against `bg`.

### Selection

- **selection-bg** (`rgba(198, 244, 50, 0.30)`)
- **selection-text** (`#ededed`)

`::selection` is one of the six sanctioned uses of the brand color —
selecting any text on the page produces a translucent lime block. This
is one of the small details that signals "this site was designed".

### Semantic

- **success** (`#22c55e`) with tint `rgba(34, 197, 94, 0.12)`
- **warning** (`#f59e0b`) with tint `rgba(245, 158, 11, 0.12)`
- **danger** (`#ef4444`) with tint `rgba(239, 68, 68, 0.12)`
- **info** (`#60a5fa`) with tint `rgba(96, 165, 250, 0.12)`

Semantic colors are reserved for **system feedback** — toasts, form
errors, status badges. They never appear in marketing copy or
decorative composition.

### Atmosphere

- **grain-radial** — `radial-gradient(60% 40% at 50% 0%,
  rgba(198,244,50,0.04), transparent 70%)`. Painted once on `<body>`
  and dimmed at scroll past viewport. This is the only place the brand
  color appears outside of CTAs.

## 3. Typography Rules

### Font Family

- **Display & Body**: Inter Variable (axes: weight 100 – 900) — the
  industrial-precision typeface. Self-hosted via `@fontsource-variable/inter`.
- **Serif accent**: Instrument Serif (italic 400 only) — the editorial
  warmth voice. Self-hosted via `@fontsource/instrument-serif`.
- **Mono**: JetBrains Mono Variable (weights 400 – 500) — for code,
  metadata, and uppercase labels. Self-hosted via
  `@fontsource-variable/jetbrains-mono`.

OpenType features explicitly enabled on Inter: `'ss01'` (stylistic
set 01 — single-storey `g`, sharper number forms), `'cv11'` (lowercase
`l` with serif). On JetBrains Mono: `'zero'` (slashed zero), `'ss01'`
(no-ligature mode for code blocks where ligatures confuse keyword
search).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | OT | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| display-hero | Inter | 88 | 500 | 0.95 | -0.04 | ss01 cv11 | Home and product launch hero |
| display-large | Inter | 72 | 500 | 1.00 | -0.035 | ss01 cv11 | Section hero on inner pages |
| display-medium | Inter | 56 | 500 | 1.00 | -0.035 | ss01 cv11 | Long-form article H1 |
| display-small | Inter | 48 | 500 | 1.05 | -0.03 | ss01 | Pricing-tier headline |
| h1 | Inter | 40 | 500 | 1.05 | -0.025 | ss01 | Section opener |
| h2 | Inter | 32 | 500 | 1.15 | -0.02 | ss01 | Subsection |
| h3 | Inter | 22 | 500 | 1.25 | -0.015 | — | Component title |
| h4 | Inter | 18 | 500 | 1.35 | -0.01 | — | Card title |
| body-lead | Inter | 19 | 400 | 1.55 | -0.01 | — | Hero subtitle |
| body-large | Inter | 18 | 400 | 1.55 | -0.01 | — | Article intro paragraph |
| body | Inter | 15 | 400 | 1.6 | -0.01 | — | Default running text |
| body-small | Inter | 13 | 400 | 1.55 | -0.005 | — | Caption, secondary copy |
| caption | Inter | 12 | 400 | 1.45 | 0 | — | Footer rows, metadata |
| label-mono | JetBrains | 11 | 500 | 1.5 | 0.15 | zero | Section markers, ALL CAPS |
| code-inline | JetBrains | 13 | 400 | 1.6 | 0 | zero | `<code>` inside prose |
| code-block | JetBrains | 13 | 400 | 1.65 | 0 | zero ss01 | `<pre>` with no ligatures |
| em-accent | Instrument Serif | inherit | 400 | inherit | inherit | — | `<em>` italic in brand color |

### Principles

- **Display tightens with size.** Tracking goes `-0.04em` at 88px and
  ramps to `0` at 12px. The reverse of the browser default; produces
  the "engineered" feel.
- **Weights stay restrained.** Display is `500`, never `700`. Body is
  `400`. Mono labels and button text are the only `500`+ surfaces, used
  sparingly.
- **`<em>` is a design token.** The system repurposes HTML `<em>` to
  render Instrument Serif italic in brand color. Editorial copy uses it
  inside display headlines as punctuation, never for grammatical
  emphasis in body prose.
- **Mono is reserved.** JetBrains Mono only on labels, code, and
  numeric data. Body prose stays Inter.
- **OpenType is explicit.** `font-feature-settings` is set globally
  on `<html>` to opt into `ss01` and `cv11` — never per-component.
- **No font-weight: bold.** When emphasis is required, the system
  uses brand color or `<em>` accent — not `font-weight: 700`.
- **Reading line length is capped.** Body prose is constrained to
  `prose-width` (680px) so eye saccades remain comfortable at 15 / 1.6.

## 4. Component Stylings

### Button — Primary

- Background: `brand` (`#c6f432`)
- Text: `text-on-brand` (`#0a0a0a`)
- Padding: `14px 20px`
- Radius: `standard` (8px)
- Font: Inter 14 / 500, tracking `-0.005em`
- Border: none
- Hover: background → `brand-hover`. No scale transform, no shadow,
  no glow.
- Active: background → `brand-pressed`.
- Disabled: opacity `0.40`, cursor `not-allowed`.
- Use: hero CTA — *Get kit*, *Buy*, *Subscribe*.

### Button — Ghost

- Background: transparent
- Text: `text`
- Padding: `14px 20px`
- Radius: `standard` (8px)
- Border: `1px solid border-strong`
- Hover: background → `rgba(255, 255, 255, 0.05)`; border tightens to
  `text-dim`.
- Use: secondary action paired with a primary CTA. *Read the spec*,
  *View source*.

### Button — Link

- Inline text-only, underline offset `4px`, decoration color
  `text-faint`. Decoration color shifts to `brand` on hover.

### Button — Icon

- 36px square, `comfortable` radius (12px), `text-dim` glyph.
- Hover: background → `rgba(255, 255, 255, 0.05)`, glyph → `text`.
- Use: copy-to-clipboard, dismiss, theme toggle.

### Card

- Background: `bg-card` (`#141416`)
- Border: `1px solid border` (`rgba(255,255,255,0.08)`)
- Radius: `featured` (16px)
- Padding: `24px` (compact) or `32px` (featured)
- Hover: background → `bg-card-hover`
- Active: background → `bg-card-active`
- No shadow.

### Card — Featured

- Background: `bg-card`
- Border: `1px solid border-brand`
- Top border accent: `2px solid brand-tint-strong` (decorative ribbon).
- Used for the recommended pricing tier or a highlighted catalog entry.

### Input

- Background: `bg-elev` (`#0f0f0f`)
- Text: `text`; placeholder `text-faint`
- Border: `1px solid border-strong`
- Padding: `12px 14px`
- Radius: `small` (6px)
- Focus: border → `border-brand-strong`; ring `0 0 0 2px brand-tint-strong`.
- Error: border → `danger`; helper text → `danger`.

### Label

- Mono 11 / 500 / 0.15em / uppercase
- Color: `text-dim`
- Decoration: 6px solid `brand` dot, 8px to the left of the text.
- Used as a marker before every section heading — the rhythm anchor
  of the entire site.

### Badge

- Background: `brand-tint`
- Text: `brand`
- Border: `1px solid border-brand`
- Mono 11 / 500 / 0.10em / uppercase
- Padding: `3px 8px`
- Radius: `micro` (3px)

### Nav Link

- Text: `text-dim`; active → `text` with a 2px `brand` underline
  offset 6px.
- Mobile nav: same colors, 18px height, full-width row.

### Em (design token)

- Family: Instrument Serif italic
- Color: `brand`
- Used inside display headlines: *Agents that <em>actually do the
  work</em>*. Never inside body prose.

### Toc Rail (long-form sidebar)

- 1px `border` left edge with a 2px `brand` indicator on the active
  row. Type is body-small `text-faint`, brightening to `text` on hover.

## 5. Layout Principles

### Spacing System

- Base unit: `4px`. Scale: `[0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64,
  80, 96, 120, 160]`.
- Named spacing: `xxs` (4) → `xs` (8) → `sm` (12) → `md` (16) → `lg`
  (24) → `xl` (32) → `xxl` (48) → `section` (64) → `section-large`
  (96) → `section-hero` (120).
- Component padding rarely exceeds `xl`; section gaps rarely below
  `section`.

### Grid & Container

- **prose-width** (680px) — long-form reading. Articles, refunds policy.
- **narrow-width** (820px) — single-column hero blocks.
- **page-width** (1200px) — most product/marketing pages.
- **dense-width** (1400px) — data-rich layouts (changelog, catalogs).

Grids use CSS Grid with `gap: 24px` default; pricing rows use a 12-col
grid with `gap: 16px`.

### Whitespace Philosophy

Section rhythm uses `--space-13` (120px) between major sections on
desktop, scaling down to `--space-10` (64px) on mobile. Hero sections
get an extra 32px of top padding. The site's vertical rhythm is what
makes it read as **editorial** — the page never crowds the reader.

### Section Cadence

The page never alternates between dark and light bands. The entire
site is a single ground tone (`bg`) with cards and elevations doing the
visual layering. Section labels (mono uppercase + lime dot) are the
only markers of "new section starts here".

## 6. Shapes & Radius Scale

Radii follow a numeric scale tuned to the page's editorial restraint:

| Tier | Value | Use |
| --- | --- | --- |
| none | 0px | Full-bleed dividers, table cells |
| micro | 3px | Badges, mono code highlights |
| small | 6px | Input fields, dropdowns |
| standard | 8px | Buttons, most interactive surfaces |
| comfortable | 12px | Small cards, dropdown menus, FAQ rows |
| featured | 16px | Hero cards, pricing containers |
| hero | 24px | Full-bleed feature panels |
| pill | 9999px | Toggle pills, status chips |

Corners are always rounded. The mix of `8px` (functional) and `16px`
(content) gives the page editorial softness without going Web-3
bubbly. Compound radii (`0 0 8px 8px` for sticky-bottom drawers) are
allowed but rare.

## 7. Depth & Elevation

| Level | Treatment | Use |
| --- | --- | --- |
| 0 | flat — `bg` ground | Default surface |
| 1 | `bg-elev` (+5% lift) | Sticky nav, input field |
| 2 | `bg-card` (+8% lift) | Cards, panels |
| 3 | `bg-card-hover` (+10% lift) | Hovered card |
| 4 | `surface-overlay` + blur | Modal scrim, command palette |
| 5 | `shadow.modal` + level-4 | Floating dialog |

**Shadow Philosophy.** Depth comes from tonal stacking, not shadows.
The four surface tones provide implicit elevation through value
contrast alone — the way magazine layouts use ink density rather than
3D effects. Drop shadows appear only on floating UI primitives (Tooltip,
Popover, Toast, Modal) — drop shadow is allowed as a functional
affordance for "this floats above the page", never as decorative depth.

Shadows are neutral black at 40 – 65% opacity — no brand tint, no
colored shadow.

## 8. Interaction & Motion

### Easing

- `ease-standard` `cubic-bezier(0.4, 0, 0.2, 1)` — default for hovers
  and most state changes.
- `ease-emphasized` `cubic-bezier(0.2, 0, 0, 1)` — modal entrance,
  command palette, page-level transitions.
- `ease-decelerate` `cubic-bezier(0, 0, 0.2, 1)` — incoming elements.
- `ease-accelerate` `cubic-bezier(0.4, 0, 1, 1)` — outgoing elements.

### Durations

- `duration-instant` 80ms — micro-feedback (toggle thumb, copy
  acknowledgement).
- `duration-fast` 150ms — button hover, link underline.
- `duration-standard` 200ms — card hover lift, input focus ring.
- `duration-slow` 300ms — modal entrance, drawer slide.
- `duration-slower` 480ms — page transitions, hero reveal.

### Per-component micro-states

- **Button hover** — background tint shifts (`brand` → `brand-hover`)
  over 150ms. **No translate, no scale, no shadow.**
- **Card hover** — background `bg-card` → `bg-card-hover` over 200ms;
  border opacity `0.08` → `0.12`. No transform.
- **Link hover** — decoration color `text-faint` → `brand` over 150ms;
  decoration thickness unchanged.
- **Input focus** — ring fades in at 200ms with `ease-emphasized`;
  border tightens to `border-brand-strong` at the same time.
- **Accordion open/close** — Radix `accordion-down` / `accordion-up`
  with `--radix-accordion-content-height`, 200ms `ease-standard`.
- **Modal entrance** — opacity 0 → 1 with translate-y 8px → 0 over
  300ms `ease-emphasized`.

### Page transitions

The site does **not** ship cross-page view transitions; each page
loads independently. The Astro view-transition API is opt-in for
specific section navs (the `/design.md/*` catalog, where the user
expects continuity).

### Reduced motion

`@media (prefers-reduced-motion: reduce)` is honored at the root.
All transitions become opacity-only at 80ms. The grain radial gradient
fades in immediately rather than animating. The `cursor-blink`
animation is replaced with a static lime cursor.

## 9. Accessibility & A11y

### Contrast

| Pair | Ratio | WCAG |
| --- | --- | --- |
| text on bg | 14.6 | AAA at all sizes |
| text-dim on bg | 5.9 | AA at body sizes |
| text-faint on bg | 3.1 | AA Large only — used only for caption |
| text-on-brand on brand | 13.2 | AAA at all sizes |
| brand on bg | 14.1 | AAA at all sizes (link, focus ring) |
| border-strong on bg | 1.5 | non-text contrast for input outlines |

### Focus indicators

A `2px solid brand` ring with `2px offset` against the page background
wraps every interactive element. The system uses `:focus-visible` so
the ring only appears on keyboard focus — not on mouse click. This
keeps the visual surface clean while still being keyboard-accessible.

### ARIA patterns

- Combobox follows the WAI-ARIA 1.2 combobox pattern (Radix Combobox
  primitive).
- Dialog uses Radix `Dialog.Root` with focus trap and Escape close.
- FAQ uses Radix `Accordion` (single-collapsible by default).
- Section labels (`<Label>`) are decorative and `aria-hidden` when
  paired with a visible heading; the lime dot is purely visual.

### Keyboard nav

Tab order matches DOM order. A skip-to-content link sits at the very
top of `<body>`, visible only on focus. The command palette is
triggered with `⌘K` / `Ctrl+K` and is fully keyboard-driven.

### Reduced motion

Honored at the root via `prefers-reduced-motion: reduce`. See §8.

### Screen reader

Icon-only buttons carry `aria-label`. Visible labels are preferred over
`aria-label` wherever possible. Mono `<Label>` rows next to a heading
are aria-hidden because they duplicate information conveyed by the
heading itself.

### Sizes

Minimum text size is `13px` (caption). Touch targets meet the 44px
minimum on mobile (button height 44px, nav row 48px).

## 10. Responsive Behavior

| Breakpoint | Width | Anchor |
| --- | --- | --- |
| mobile | <480px | Single column, hero 56px, body 16/1.6 |
| tablet | 480 – 768 | Single column, hero 64px |
| laptop | 768 – 1024 | Two-column where helpful, hero 72px |
| desktop | 1024 – 1280 | Full grids, hero 88px |
| wide | ≥1280 | Page-width capped at 1200, dense pages 1400 |

### Touch targets

44px minimum across mobile and tablet. The nav drawer expands every
row to 48px for comfort.

### Collapsing strategy

- **Two-column hero** → stacks to single column at <768px.
- **Pricing 3-up** → 2-up at <1024px → 1-up at <640px.
- **Footer 4-col** → 2-col at <768px → single column at <480px.
- **TOC sidebar rail** → hidden below 1024px (uses sticky bottom-bar
  drawer instead).

### Image behavior

Cover images use `aspect-ratio: 16/9` with `object-fit: cover`;
content images use `aspect-ratio: 4/3` with `object-fit: contain`
inside a `bg-card` plate.

### Container queries

Used selectively on `<PriceCard>` so the layout adapts when the card
appears in a 1-up vs 3-up grid. Default behavior is media-query based.

## 11. Content & Voice

### Tone

**Measured, technical, slightly dry.** webdesignhot writes like a
design publication, not a startup. Pricing pages read like spec sheets,
not sales letters. Headlines are imperative and ground-truthed
(*"Ship your AI agent's landing page <em>this afternoon</em>"*) rather
than aspirational (*"Transform your business with AI"*). Adjectives are
used sparingly; numbers are used often.

### Microcopy patterns

- **Buttons use verbs, never sentences.** *Get kit*, *Buy*, *Read the
  spec*, *Start free trial*, *View source*.
- **Errors describe the cause, not the user's mistake.** *"This email
  is already on the list"* — not *"You can't sign up twice"*.
- **Success confirmations are quiet.** *"Saved"* — not *"Your changes
  were saved successfully!"*.
- **Empty states explain how to fill them.** *"No bookmarks yet.
  Bookmark a design with `B` to add it here."*

### CTA verb conventions

- Primary action: *Get kit* (the brand's signature CTA), *Buy*, *Sign
  up*, *Start free trial*.
- Secondary action: *Read the spec*, *View source*, *See examples*.
- Tertiary action (link): *Learn more*, *Browse all*, *See more*.

The site avoids: *Click here*, *Submit*, *Continue*, *Get started for
free* (CTA stuffing), *Learn how to…* (passive promise framing).

## 12. Dark Mode & Theming

webdesignhot is **dark-only by design** — there is no light variant.
The acid-lime accent and editorial-dark canvas are inseparable from
the brand identity; a light mirror would be a different design system,
not a theme.

For users who want a light variant of the same component library, the
**AgentKit** sibling kit ships three palettes (editorial-dark, bright,
cool-blue) using the same Inter / Instrument Serif / JetBrains Mono
type stack. Linking to AgentKit is the explicit answer to "do you have
a light mode?".

System preference (`prefers-color-scheme: light`) is detected, and
the `<html>` element carries `color-scheme: dark` to ensure native UI
(scrollbars, autofill backgrounds, file pickers) renders dark even
when the OS is in light mode.

## 13. Lineage & Influences

webdesignhot inherits from a magazine + dev-tool lineage rather than
the AI-SaaS purple-gradient cliché that dominates 2024 – 2026 startup
landing pages. The dark canvas, narrow type tracking, and single-accent
rule come from Linear and Vercel; the editorial italic accent
(`<em>` rendered as Instrument Serif italic in brand color) is a
direct lift from Rauno Freiberg's site, used as a design *token*
rather than grammatical emphasis. The mono-with-lime-dot section
labels are an homage to Anthropic's marketing rhythm. Acid lime
`#c6f432` is the intentional rejection of the purple-gradient defaults
— flat, solid, high-impact at low quantity.

What it rejects: gradient backgrounds, glow shadows, neon accents,
600+ display weights, illustrated 3D mascots, film-grain noise
overlays, "AI sparkles" iconography, marketing pages that read like
sales letters.

**Named influences**
- [Linear](https://linear.app) — spatial restraint, dark-canvas
  geometry, dense product surfaces.
- [Vercel](https://vercel.com) — type hierarchy, Inter Variable,
  restrained weights.
- [Anthropic](https://anthropic.com) — editorial calm, mono-with-dot
  section rhythm, measured marketing voice.
- [Rauno Freiberg](https://rauno.me) — italic-serif `<em>` accents
  inside display headlines.
- [Stripe Press](https://press.stripe.com) — tonal restraint and
  reading-grade body type.
- Are.na — editorial-as-product, label-driven information rhythm.

## 14. Do's and Don'ts

### Do

- Use `<em>` for editorial italic accents inside display headlines.
- Pair every section with a `<Label>` mono uppercase + lime dot
  rhythm.
- Reach for tonal elevation before reaching for borders or shadows.
- Keep display weight at `500`; let size and tracking carry hierarchy.
- Cap prose at `prose-width` (680px) for reading comfort.
- Use mono-numerals (`'tnum'`) in pricing tables.
- Put the lime dot on every `<Label>` — it's the rhythm anchor.
- Use `text-on-brand` (`#0a0a0a`) on top of the lime CTA — never white.
- Honor `prefers-reduced-motion` everywhere.
- Use `:focus-visible` so the focus ring only appears on keyboard nav.

### Don't

- Use `brand` as a gradient — the accent's power comes from being flat
  and solid.
- `box-shadow` brand-colored glows. Ever.
- Introduce a second accent color.
- Use bold (`700`+) weights on display type.
- Add film-grain noise textures.
- Use `<em>` for grammatical emphasis — it's a design token.
- Use `text-strong` (`#fff`) as the default; reserve it for AAA edge
  cases.
- Stack drop shadows on cards — use `bg-card-hover` instead.
- Translate or scale buttons on hover — color-only state changes.
- Use semantic colors (success / warning / danger) in marketing copy.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:        #0a0a0a
text:      #ededed
text-dim:  #8a8a8a
brand:     #c6f432
text-on-brand: #0a0a0a
bg-card:   #141416
border:    rgba(255,255,255,0.08)
border-strong: rgba(255,255,255,0.15)
focus-ring: #c6f432
selection: rgba(198,244,50,0.30)
```

### Example Component Prompts

1. *"Create a hero section in the webdesignhot style: pure black
   background, 88px Inter display headline at weight 500, tracking
   -0.04em, with one Instrument Serif italic `<em>` accent in
   `#c6f432` inside the headline. Subtitle is 19px Inter at weight
   400 in `#8a8a8a`. Above the headline place a mono uppercase label
   in `#8a8a8a` at 11px / tracking 0.15em with a 6px lime dot to its
   left."*

2. *"Design a pricing card in the webdesignhot style: `#141416`
   background, 16px radius, 32px padding, `rgba(255,255,255,0.08)`
   border, no shadow. Featured tier swaps the border to
   `rgba(198,244,50,0.25)` with a 2px lime ribbon at the top. Tier
   name is mono uppercase, price is 48px Inter / 500 / -0.03 tracking,
   features list is 15px Inter / 400."*

3. *"Build a primary button in the webdesignhot style: `#c6f432`
   background, `#0a0a0a` text, 14px Inter / 500, 14/20px padding, 8px
   radius, no border, no shadow. Hover lightens the background to
   `#d2f854` over 150ms — no translate, no scale, no glow."*

4. *"Compose a long-form article layout: 680px max-width prose column,
   15px / 1.6 Inter body, `#ededed` text on `#0a0a0a` ground.
   Inline code uses JetBrains Mono 13px on `rgba(255,255,255,0.04)`
   background with 3px radius. Block quotes use a 2px `#c6f432` left
   border with 24px left padding."*

5. *"Design an empty-state card for an empty bookmark list: 16px
   radius, `#141416` background, centered. Mono uppercase label
   'NO BOOKMARKS YET' in `#8a8a8a` with 6px lime dot. 22px Inter /
   500 sub-headline. 15px body copy in `#8a8a8a`. Single ghost
   button 'Browse the catalog'."*

6. *"Create a sticky nav: 56px height, `#0f0f0f` background with
   `backdrop-filter: blur(8px)`, 1px bottom border in
   `rgba(255,255,255,0.08)`. Logo wordmark is Inter 17 / 500 on left
   with a 6px `#c6f432` dot before the word. Nav links are 14px
   `#8a8a8a`, hover-to-`#ededed`, active link gets a 2px `#c6f432`
   underline at 6px offset. Right side has one ghost button and one
   primary button."*

### Iteration Guide

1. **Start dark.** Set the page to `#0a0a0a` and `#ededed`. Resist the
   urge to add a single tint. The void is the canvas.
2. **Hold the accent in reserve.** Don't use `#c6f432` until the
   layout reads correctly without it. The lime should arrive as a
   single, deliberate moment.
3. **Tighten as you grow.** When the headline goes up in size, drop
   the tracking. When it goes down, relax it. This is the inverse of
   the browser default and the most distinctive single move in the
   system.
4. **Reach for elevation, not shadow.** When you want a card to feel
   "lifted", swap to `#141416`; when you want it to feel "interactive
   on hover", swap to `#1a1a1c`. Skip the `box-shadow` reflex.
5. **Introduce the serif italic last.** Once the layout reads as
   industrial, place exactly one `<em>` inside the display headline.
   Test that removing the italic flattens the page; test that adding
   a second one fights for attention. One per hero is the rule.
6. **Add the lime dot.** Every section needs a `<Label>` row above its
   heading — mono uppercase, 11/500, 0.15em tracking, with a 6px lime
   dot 8px to the left. This is the page's heartbeat.
7. **Stop at three voices.** Inter for everything visible, Instrument
   Serif italic for the `<em>` token, JetBrains Mono for labels and
   code. A fourth typeface is a sign you've drifted off-system.
8. **Audit the accent count.** When you're done, count every
   appearance of `#c6f432` on the page. If it's above ~6, remove the
   weakest two — the system is at its strongest when the accent is
   rare.
