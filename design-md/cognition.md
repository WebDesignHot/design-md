---
name: Cognition
tagline: 'Research-lab monochrome — warm off-white, grotesk display, serif body, sharp 0px black.'
updated_at: 2026-05-29T21:43:35.496Z
published_at: 2026-05-29T21:43:35.496Z
author: webdesignhot
source_url: https://cognition.ai
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, dev-tools]
tags: [light, sans, serif, technical, minimal, monochrome]
preview_swatch: ['#f7f6f5', '#191919', '#000000']
related: []
description: 'Cognition — the lab behind Devin, the AI software engineer — runs a near-perfect monochrome system: a warm off-white `#f7f6f5` canvas, pure-black `#000` ink, and a single near-black `#191919` CTA. The whole identity is black-on-warm-white with zero rounding (`0px` everywhere) and an editorial type pairing that pulls against the genre — a tight grotesk display (`nbInternational`, h1 at 36px / 400) over a serif body (`stkBureauSerif` at 16px). No gradients, no accent colour, no chrome. Where most AI labs reach for purple meshes or chrome-on-black, Cognition reads like a printed research bulletin: restrained, serious-engineering, and confident enough to ship a landing page with exactly one non-black value on it.'

colors:
  # Primary
  bg: '#f7f6f5'                          # warm off-white canvas — the defining ground
  bg-secondary: '#f0efed'                # faint warm panel, one step down from canvas
  surface: '#ffffff'                     # rare pure-white card lift on warm ground
  text: '#000000'                        # pure black ink — body and headings
  text-soft: '#3d3d3d'                   # secondary copy, captions
  text-faint: '#6b6b6b'                  # eyebrows, helper text, footer
  text-muted: '#9a9a9a'                  # disabled, microcopy
  # Brand
  brand: '#191919'                       # near-black CTA fill ('Explore roles')
  brand-hover: '#000000'                 # CTA deepens to pure black on hover
  on-brand: '#f7f6f5'                    # warm off-white label on the near-black CTA
  # Interactive
  link: '#000000'                        # links are black with underline
  link-hover: '#191919'                  # near-black on hover
  selected-bg: '#0000000d'               # ~5% black wash for selected state
  disabled: '#9a9a9a'
  # Borders
  border: '#000000'                       # hairline rules are pure black (1px)
  border-soft: 'rgba(0, 0, 0, 0.12)'      # quieter division
  border-subtle: 'rgba(0, 0, 0, 0.06)'    # faintest separation
  # Inputs (from production --form-input-* vars)
  input-bg: 'rgba(0, 0, 0, 0.031)'        # --form-input-bg #00000008
  input-bg-hover: 'rgba(0, 0, 0, 0.051)'  # --form-input-bg-hover #0000000d
  # Semantic (kept monochrome-adjacent — the brand barely uses colour)
  success-text: '#1f5130'
  warning-text: '#7a5e1f'
  danger-text: '#8a2b2b'
  info-text: '#26416b'

typography:
  display:
    family: '"nbInternational", "Neue Haas Grotesk", "Helvetica Neue", system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['liga', 'kern']
    note: 'grotesk display set LIGHT — h1 lands at 36px / 400, not bold'
  body:
    family: '"stkBureauSerif", "Tiempos Text", Georgia, "Times New Roman", serif'
    weights: [400, 500, 600]
    opentype-features: ['liga', 'kern', 'onum']
    note: 'body is SERIF — the editorial counterweight to the grotesk display'
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-hero:    { size: 72, weight: 400, lineHeight: 1.02, tracking: '-0.02em',  family: display }
    display-lg:      { size: 56, weight: 400, lineHeight: 1.05, tracking: '-0.018em', family: display }
    h1:              { size: 36, weight: 400, lineHeight: 1.1,  tracking: '-0.012em', family: display }
    h2:              { size: 20, weight: 400, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h3:              { size: 18, weight: 500, lineHeight: 1.3,  tracking: '0',        family: display }
    h4:              { size: 16, weight: 600, lineHeight: 1.35, tracking: '0',        family: display }
    eyebrow:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.06em',   family: display, transform: uppercase }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    lede:            { size: 20, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    quote-pull:      { size: 24, weight: 400, lineHeight: 1.4,  tracking: '0',        family: body, style: italic }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0',        family: display }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: display }
    code:            { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',        family: mono, opentype: 'tnum zero' }

radius:
  micro: 0
  sm: 0
  md: 0
  lg: 0
  xl: 0
  pill: 0

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  site-gutter: 'clamp(20px, 5vw, 64px)'
  header-height: 64
  grid-columns: 12
  section-rhythm: '64-128px'

components:
  button-primary:
    background: '#191919'
    text: '#f7f6f5'
    padding: '10px 16px'
    radius: 0
    border: '1px solid #191919'
    font: 'nbInternational 500 / 15px'
    hover-bg: '#000000'
    use: 'Primary action — near-black on warm off-white (Explore roles, Read more)'
  button-ghost:
    background: 'transparent'
    text: '#000000'
    padding: '10px 16px'
    radius: 0
    border: '1px solid #000000'
    font: 'nbInternational 500 / 15px'
    hover-bg: 'rgba(0, 0, 0, 0.05)'
    use: 'Outlined twin — sharp black hairline, no fill'
  button-text:
    background: 'transparent'
    text: '#000000'
    padding: '10px 4px'
    radius: 0
    font: 'nbInternational 500 / 15px'
    hover-decoration: 'underline'
    use: 'Quiet inline action — black text, underline on hover'
  button-inverse:
    background: '#f7f6f5'
    text: '#000000'
    padding: '10px 16px'
    radius: 0
    border: '1px solid #f7f6f5'
    font: 'nbInternational 500 / 15px'
    hover-bg: '#ffffff'
    use: 'For use on black sections — off-white fill, black label'
  card:
    background: '#ffffff'
    border: '1px solid #000000'
    radius: 0
    padding: '24px'
    use: 'Bordered tile — sharp black 1px rule on warm canvas, no shadow'
  input:
    background: 'rgba(0, 0, 0, 0.031)'
    border: '1px solid #000000'
    text: '#000000'
    radius: 0
    padding: '8px 12px'
    font: 'stkBureauSerif 400 / 16px'
    placeholder-color: '#6b6b6b'
    hover-bg: 'rgba(0, 0, 0, 0.051)'
    use: 'Form fields — faint black-wash fill, sharp black border'
  badge:
    background: 'transparent'
    text: '#000000'
    padding: '2px 8px'
    radius: 0
    border: '1px solid #000000'
    font: 'nbInternational 500 / 12px / uppercase / 0.06em'
    use: 'Sharp-cornered label chip — outlined, no fill'
  nav-link:
    background: 'transparent'
    text: '#000000'
    padding: '8px 12px'
    radius: 0
    font: 'nbInternational 500 / 15px'
    hover-decoration: 'underline'
    use: 'Header nav — black grotesk, underline on hover, no colour shift'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — transitions become opacity-only, durations halved'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  hairline: '0 0 0 1px #000000'
  ambient: 'rgba(0, 0, 0, 0.05) 0 1px 2px'
  standard: 'rgba(0, 0, 0, 0.08) 0 4px 12px'
  overlay: 'rgba(0, 0, 0, 0.12) 0 12px 32px -8px'

accessibility:
  contrast-text-on-bg: 20.1               # #000 on #f7f6f5 — far past AAA
  contrast-on-brand: 16.8                 # #f7f6f5 on #191919 — AAA
  contrast-text-soft-on-bg: 10.3          # #3d3d3d on #f7f6f5 — AAA
  focus-ring: '2px solid #000000 with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; tab order matches visual'
  prose-line-length: 'capped near 720px for editorial readability'

dark-mode: null                          # marketing surface is light-only; the warm off-white ground is the identity
---

## 1. Visual Theme & Atmosphere

Cognition's site is what happens when a research lab refuses to decorate. Open `cognition.ai` — the home of Devin, the AI software engineer — and you land on a warm off-white `#f7f6f5` canvas with pure-black `#000` type and exactly one non-black value anywhere near the fold: the near-black `#191919` fill on the *Explore roles* call-to-action. There is no gradient, no accent hue, no glassmorphism, no chrome. The page reads like a printed bulletin from an engineering department — confident, quiet, and almost aggressively unembellished.

The typographic pairing is the move that keeps the monochrome from feeling sterile. The display face is **nbInternational**, a tight neo-grotesk in the Neue-Haas / Helvetica lineage, and Cognition runs it *light* — the h1 lands at 36px at weight 400, not the 700-weight shout most landing pages reach for. The body underneath it is set in **stkBureauSerif**, a serif text face at 16px. Grotesk headline over serif body is an editorial inversion of the usual SaaS default (sans everything), and it gives the page the cadence of a journal article rather than a product tour. The warmth of the off-white ground softens the pure-black ink just enough that long-form reading never feels like staring at a terminal.

Everything is sharp. The radius scale is `0px` top to bottom — buttons, cards, inputs, chips all share hard 90-degree corners. Borders are pure-black 1px hairlines, not the polite light-grey dividers of most modern UI. This is a deliberate severity: square corners and black rules read as *precise* and *unsoftened*, which is exactly the register a company building autonomous software engineers wants to project. Nothing here is trying to be friendly; it's trying to be correct.

The colour discipline is near-total. Cognition does not own a brand colour in the conventional sense — its brand is *the absence of one*. The `#191919` CTA is so close to black that on a thumbnail the whole identity collapses to two values: warm paper and black. That restraint is the signal. It says the work is the product; the marketing site is just a clean window onto it.

Atmospheric vocabulary that captures the feeling: *research-bulletin, monochrome, hard-edged, grotesk-over-serif, black-on-warm-paper, unembellished, precision-engineering, journal-quiet, zero-radius, single-CTA, serious.*

**Key Characteristics**
- Warm off-white `#f7f6f5` canvas — never pure white, never grey
- Pure-black `#000` ink for body and headings — uncompromising contrast
- A single near-black `#191919` CTA — the only non-black value on the page
- Grotesk display (`nbInternational`) run *light* — h1 at 36px / 400, never bold-shout
- Serif body (`stkBureauSerif`) — the editorial counterweight that warms the page
- Zero radius everywhere — `0px` on buttons, cards, inputs, chips
- Pure-black 1px hairline borders, not soft grey dividers
- No gradients, no accent colour, no shadows on default surfaces
- Restraint as identity — the absence of a brand colour *is* the brand
- Reads as a printed research bulletin, not a SaaS landing page

## 2. Color Palette & Roles

### Primary

- **bg** (`#f7f6f5`) [→ body background]: the warm off-white canvas; the defining ground, never substituted for `#ffffff`.
- **text** (`#000000`) [→ body color]: pure black ink for body copy and headings; maximum contrast on the warm ground.
- **bg-secondary** (`#f0efed`): a faint warm panel one step down from canvas, for lightly differentiated sections.
- **surface** (`#ffffff`): rare pure-white card lift used only when a tile must read as raised above the warm ground.

### Brand

- **brand** (`#191919`) [→ CTA fill]: the near-black call-to-action fill behind *Explore roles*; the single non-black value in the system.
- **brand-hover** (`#000000`): the CTA deepens to pure black on hover — a 6-value shift, deliberately subtle.
- **on-brand** (`#f7f6f5`) [→ CTA label]: warm off-white label on the near-black CTA; matches the canvas exactly so the button reads as inverted page.

### Accent

There is no accent colour. Cognition's system is monochrome by design — emphasis is carried by weight, size, border, and whitespace, never by hue. Treat any request for an "accent" as a request for either the `#191919` near-black or a black hairline rule.

### Interactive

- **link** (`#000000`): links are black with an underline; they do not introduce colour.
- **link-hover** (`#191919`): on hover, links shift to near-black; the underline persists.
- **selected-bg** (`rgba(0, 0, 0, 0.051)`): a ~5% black wash for selected rows and active states.
- **disabled** (`#9a9a9a`): mid-grey for disabled control text.

### Neutral Scale

- **text** (`#000000`): primary text and high-emphasis labels.
- **text-soft** (`#3d3d3d`): secondary copy and supporting paragraphs.
- **text-faint** (`#6b6b6b`): eyebrows, helper text, footer microcopy.
- **text-muted** (`#9a9a9a`): disabled states, quietest microcopy.

### Surface

- **surface-0 (page)** — `#f7f6f5` warm off-white.
- **surface-1 (panel)** — `#f0efed` faint warm step-down.
- **surface-2 (card)** — `#ffffff` rare pure-white lift.
- **input-bg** (`rgba(0, 0, 0, 0.031)`) [→ `--form-input-bg`]: faint black wash inside form fields.
- **input-bg-hover** (`rgba(0, 0, 0, 0.051)`) [→ `--form-input-bg-hover`]: input fill on hover/focus.

### Borders

- **border** (`#000000`): default hairline rules are pure black at 1px — the brand's signature division.
- **border-soft** (`rgba(0, 0, 0, 0.12)`): quieter division for dense layouts.
- **border-subtle** (`rgba(0, 0, 0, 0.06)`): faintest separation, near-invisible.

### Shadow Colors

Cognition is essentially shadowless. Default surfaces lift by **border and value contrast alone** — a pure-black hairline does the separation work that a drop-shadow would do elsewhere. When a shadow is unavoidable (a floating menu, a modal), it is a low-opacity neutral black (`rgba(0,0,0,0.05)` to `0.12`), never tinted and never large. The page reads as paper and ink, and paper does not cast soft glows.

### Semantic

The system barely uses semantic colour — status is usually communicated in plain black text plus an icon. When colour is required for validation, keep it dark and desaturated so it does not break the monochrome:

- **success** — text `#1f5130` on a faint neutral or off-white field.
- **warning** — text `#7a5e1f`.
- **danger** — text `#8a2b2b`, paired with a black border on the field.
- **info** — text `#26416b`.

Note the unusual choice: Cognition would rather mark an error with a black border and dark-red label than tint a whole field. Colour is rationed to the point of near-absence.

## 3. Typography Rules

### Font Family

- **Display & UI**: `"nbInternational", "Neue Haas Grotesk", "Helvetica Neue", system-ui, sans-serif` — a tight neo-grotesk, run *light*. This is the headline and chrome voice.
- **Body & Editorial**: `"stkBureauSerif", "Tiempos Text", Georgia, serif` — a serif text face at weight 400/500. **The body in serif is the brand's defining typographic move.**
- **Mono**: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace` — for code, data, and tabular figures.
- **OpenType features**: `liga` and `kern` always on; `onum` (old-style figures) in serif body so numbers sit with letters; `tnum` and `zero` in mono for aligned data and slashed zero.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | nbInternational | 72px | 400 | 1.02 | -0.02em | liga kern | Homepage hero ceiling — *light*, not bold |
| Display Large | nbInternational | 56px | 400 | 1.05 | -0.018em | liga | Section intro at scale |
| H1 | nbInternational | 36px | 400 | 1.10 | -0.012em | liga | Page title (live-sampled) |
| H2 | nbInternational | 20px | 400 | 1.25 | -0.005em | liga | Major section (live-sampled) |
| H3 | nbInternational | 18px | 500 | 1.30 | normal | — | Sub-section |
| H4 | nbInternational | 16px | 600 | 1.35 | normal | — | Card heading |
| Eyebrow | nbInternational | 12px | 500 | 1.40 | 0.06em | uppercase | Section pre-label |
| Lede | stkBureauSerif | 20px | 400 | 1.50 | normal | onum | Intro paragraph under hero |
| Body Large | stkBureauSerif | 18px | 400 | 1.60 | normal | onum | Spacious body |
| Body | stkBureauSerif | 16px | 400 | 1.60 | normal | onum | Default editorial body (live-sampled) |
| Body Small | stkBureauSerif | 14px | 400 | 1.55 | normal | onum | Captions, sidebars |
| Pull Quote | stkBureauSerif | 24px | 400 | 1.40 | normal | italic | Editorial pull-quote |
| Label | nbInternational | 13px | 500 | 1.40 | normal | — | UI labels |
| Caption | nbInternational | 12px | 500 | 1.40 | 0.02em | — | Image captions, meta |
| Code | Mono | 14px | 400 | 1.55 | normal | tnum zero | Inline + block code |

### Principles

- **Grotesk headlines, serif body.** Display, nav, buttons, labels, and eyebrows use nbInternational; headlines, body copy, ledes, and pull-quotes use stkBureauSerif. The split is non-negotiable — collapsing both to sans erases the editorial register.
- **Run the display light.** The h1 ships at weight 400, not 700. Cognition lets size and tracking — not weight — carry the headline. Bold display would break the calm.
- **Negative tracking scales with size.** -0.02em at the 72px hero, tightening through -0.018em / -0.012em, reaching normal by 18px and below. The compression mirrors grotesk masthead typography.
- **Serif body sits warm and roomy.** 16px at 1.6 line-height with old-style figures — magazine metrics, not blog metrics — so the pure-black ink reads as comfortable long-form, not terminal output.
- **Pure black is the text colour.** Unlike warmer editorial brands that avoid `#000`, Cognition embraces it; the warm off-white ground is what keeps the contrast from feeling harsh.
- **Italics in body, never in display.** The serif italic carries quoted titles, gentle emphasis, and pull-quotes; the grotesk display never italicises.
- **Reading width capped near 720px** even on the 1280px page — a single editorial column.
- **Uppercase only for eyebrows and chips**, at 12px / 500 / 0.06em tracking. Body and headlines stay sentence-case.

## 4. Component Stylings

### Buttons

**Primary (Near-Black)**
- Background: `#191919` near-black.
- Text: `#f7f6f5` warm off-white, nbInternational 500 / 15px.
- Padding: `10px 16px`. Radius: `0` — sharp corners. Border: `1px solid #191919`.
- Hover: bg → `#000000` (pure black); transition `240ms ease-standard`.
- Use: Primary CTA — *Explore roles, Read the paper, Get Devin.*

**Ghost (Outlined)**
- Background: transparent. Text: `#000000`. Border: `1px solid #000000`.
- Same padding, radius `0`, font as primary.
- Hover: bg → `rgba(0,0,0,0.05)`.
- Use: Twin to primary — *Read more, View research.*

**Text (Quiet)**
- Background: transparent. Text: `#000000`. No border. Padding `10px 4px`.
- Hover: underline appears; no colour shift.
- Use: Quietest inline action — footer links, repeated CTAs.

**Inverse (On-Black)**
- Background: `#f7f6f5`. Text: `#000000`. Border: `1px solid #f7f6f5`.
- Same shape (`0` radius, 10×16 padding).
- Hover: bg → `#ffffff`.
- Use: For CTAs sitting on a black/near-black section — off-white fill, black label.

### Cards

**Bordered Tile**
- Background: `#ffffff` (or `#f7f6f5` for flush-on-canvas). Border: `1px solid #000000`. Radius: `0`. Padding: `24px`.
- Shadow: none — the black hairline does the separation work.
- Hover: border stays; an optional 1px inner offset or a faint `rgba(0,0,0,0.05)` wash signals interactivity.
- Use: Capability tile, research index entry, role listing.

**Flush Panel**
- Background: `#f0efed`. Border: top/bottom `1px solid #000000`, sides open. Radius: `0`. Padding: `32px 0`.
- Use: Full-bleed section divider — a banded panel separated by black rules rather than a boxed card.

### Badges, Tags, Pills

**Outlined Chip** — bg transparent, border `1px solid #000000`, radius `0`, padding `2px 8px`, nbInternational 500 / 12px / uppercase / 0.06em tracking, colour `#000000`. Sharp-cornered, never a pill.

**Eyebrow Label** — no chrome, just type: nbInternational 500 / 12px / uppercase / 0.06em, colour `#6b6b6b`. Sits above section headlines.

There are **no rounded pills** in this system — `pill: 0` is intentional. Any status marker is a sharp-cornered outlined chip.

### Inputs / Forms

- Background: `rgba(0,0,0,0.031)` (the production `--form-input-bg`). Border: `1px solid #000000`. Radius: `0`. Padding: `8px 12px`.
- Font: stkBureauSerif 400 / 16px. Placeholder: `#6b6b6b`.
- Hover / focus: bg → `rgba(0,0,0,0.051)` (`--form-input-bg-hover`); border stays pure black; add a 2px black focus ring with offset.
- Error: border stays black, label/helper turns `#8a2b2b`.
- Helper: caption 12px `#6b6b6b` below the field.

### Navigation

- Header height `64px`. Background `#f7f6f5` warm off-white (or transparent over a hero).
- Logo: Cognition wordmark in black, nbInternational.
- Nav links: nbInternational 500 / 15px, colour `#000000`, padding `8px 12px`. Hover → underline; no colour shift.
- Right-side CTA: a single near-black primary — *Explore roles* — `#191919` fill, off-white label, `0` radius.
- Mobile: full-screen sheet, links stack at 20px / nbInternational, black on off-white; a single black hairline separates the header from content.

### Optional Components

**Pull Quote** — stkBureauSerif 24px / 400 / italic, black text, with a 1px black left rule. No quotation glyphs.

**Code Block** — Mono 14px, bg `#f0efed`, radius `0`, padding `16px 20px`, border `1px solid #000000`. Inline code: same font, bg `rgba(0,0,0,0.05)`, padding `2px 6px`, radius `0`.

**Tooltip** — bg `#191919`, text `#f7f6f5`, radius `0`, padding `8px 12px`, font 13px / 500 nbInternational.

**Modal** — bg `#ffffff`, radius `0`, border `1px solid #000000`, shadow `rgba(0,0,0,0.12) 0 12px 32px -8px`, max-width `560px`. Off-white backdrop overlay at ~70% opacity.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Density observation**: Cognition is moderately spacious — not as airy as a magazine spread, but never crowded. Section gaps run 64–128px; intra-section spacing uses 24–48px; component padding stays tight (10–24px) so the hard corners read as crisp rather than bloated.

### Grid & Container

- **Page max width**: `1280px` — a conventional engineering-grade container, not an oversized broadsheet.
- **Site gutter**: `clamp(20px, 5vw, 64px)` — generous on desktop, compact on mobile.
- **Grid**: 12 columns with 24px gutters. Hero spans full width; capability rails span 8 columns; sidebars span 4.
- **Hero treatment**: full-bleed warm off-white, 36–72px grotesk headline, serif lede confined to a ~720px column, single near-black CTA.

### Whitespace Philosophy

Whitespace here is structural, not decorative. The hard black hairlines and zero-radius corners would feel oppressive if crowded, so Cognition keeps generous breathing room around every block — but it spends that room precisely, never floating elements in vast empty fields the way a luxury brand would. The effect is *engineered calm*: every element sits exactly where a rule or a margin places it.

### Section Cadence

- Hero (warm off-white) → Capability Rail (bordered tiles on canvas) → Editorial Essay (warm off-white, ~720px column) → Banded Panel (`#f0efed` between black rules) → Footer (off-white with a black top rule).
- Sections are separated by **1px black hairlines** or by spacing alone — never by colour blocks or gradients.
- The page rarely uses more than two background values (off-white + faint panel); contrast comes from rules and type, not fields of colour.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 0px | Chips, dividers — sharp |
| Standard (sm) | 0px | Status markers, inline tags — sharp |
| Comfortable (md) | 0px | Buttons, inputs, dropdowns — sharp |
| Relaxed (lg) | 0px | Modals, code blocks — sharp |
| Featured (xl) | 0px | Cards, tiles — sharp |
| Pill | 0px | No pills — sharp |

Cognition's radius scale is **flat zero** at every tier. This is the single most distinctive geometric decision in the system: there is not one rounded corner on the page. Every button, card, input, chip, and modal shares a hard 90-degree edge. Combined with the pure-black 1px borders, the effect is precise and unsoftened — drafting-table geometry rather than friendly product UI. When adapting this brand, *never* introduce a radius; even a 2px round breaks the register.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, hero, body sections |
| 1 | 1px black border (`#000`) | Cards, tiles, inputs — separation by rule |
| 2 | `rgba(0,0,0,0.05) 0 1px 2px` | Sticky nav, dropdowns |
| 3 | `rgba(0,0,0,0.08) 0 4px 12px` | Hover-lifted floating menu |
| 4 | `rgba(0,0,0,0.12) 0 12px 32px -8px` | Modals, dialogs, popovers |

### Shadow Philosophy

Cognition's depth is carried by **borders, not shadows**. The default elevation primitive is a 1px pure-black hairline — a card "lifts" off the warm ground because it is *outlined*, not because it casts a glow. Explicit shadows appear only on genuinely floating layers (menus, modals), and they are small, neutral-black, and untinted — never large, soft, or coloured. The page reads as ink on paper, and paper separates by edge, not by elevation. Heavy or layered drop-shadows would immediately read as foreign to the brand.

## 8. Interaction & Motion

### Easing Curves

- `ease-standard`: `cubic-bezier(0.4, 0, 0.2, 1)` — default for hover, focus, and colour transitions.
- `ease-emphasized`: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; used on modal enter and reveals.

### Duration Buckets

- **Fast (150ms)** — colour transitions, focus rings, underline reveals.
- **Standard (240ms)** — button hover, card hover, dropdown reveal.
- **Slow (320ms)** — modal enter/exit, section fade-in.

### Per-Component Micro-States

- **Button hover**: `#191919` → `#000000` background shift only — no lift, no scale. `transition: background-color 240ms ease-standard`.
- **Link / nav hover**: underline fades in over 150ms; no colour change.
- **Card hover**: optional faint `rgba(0,0,0,0.05)` wash inside the bordered tile; border stays black.
- **Input focus**: 2px black ring with 2px offset over 150ms; fill deepens to `rgba(0,0,0,0.051)`.
- **No transforms by default**: the brand avoids scale/translate flourishes — motion is restrained to opacity and colour.

### Page Transitions

Section content fades in over 320ms with at most a small (12px) translate-up, triggered by `IntersectionObserver` at ~80% viewport. The hero is static or fades once on load. There are no parallax, scroll-jacking, or hero animation sequences — the brand projects steadiness, not spectacle.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` — all transitions become opacity-only, durations halved; translate animations are disabled and scroll-linked reveals snap to their final state.

## 9. Accessibility & A11y

### Contrast Pairs

- **`#000000` text on `#f7f6f5` bg**: ~20.1:1 — far past AAA at every size.
- **`#3d3d3d` text on `#f7f6f5` bg**: ~10.3:1 — AAA.
- **`#6b6b6b` text on `#f7f6f5` bg**: ~5.0:1 — AA at all sizes, AAA at large.
- **`#f7f6f5` text on `#191919` brand**: ~16.8:1 — AAA; the CTA is exceptionally legible.
- **`#191919` link-hover on `#f7f6f5` bg**: ~17.6:1 — AAA.
- **`#9a9a9a` muted on `#f7f6f5` bg**: ~2.8:1 — decorative/disabled only, never body text.

This is one of the highest-contrast systems in the catalog — the monochrome discipline is also an accessibility asset.

### Focus Indicators

- Default focus ring: `2px solid #000000` with 2px offset on the warm ground.
- On near-black surfaces (CTA, tooltip): `2px solid #f7f6f5`.
- All interactive surfaces must have a visible focus state — no `outline: none` without a replacement ring.

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with a skip-link to main content.
- **Disclosure**: `<button aria-expanded aria-controls>` for collapsible sections.
- **Dialog**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Live regions**: `aria-live="polite"` for form validation messages.

### Keyboard Navigation

- Tab order matches visual flow: skip-link → nav → hero CTA → main content → footer.
- All buttons, links, inputs reachable via Tab; modals trap focus until dismissed.
- `Esc` closes modals and dropdowns; arrow keys navigate within listboxes.

### Screen Reader Hints

- Decorative rules and dividers carry `aria-hidden="true"`.
- Icon-only buttons have `aria-label`.
- The single CTA must have descriptive text, not just "Explore" — *"Explore open roles"* reads better aloud.

### Reduced Motion

Honoured via the global media query — translate/scale animations become opacity-only and durations halve.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single column, full-bleed sections |
| Tablet | 640–1024px | 2-column rails, narrower gutters |
| Desktop | 1024–1280px | Full 12-col grid, 720px prose |
| Wide | 1280–1536px | Site max width hits |
| Ultra | > 1536px | Page locks near 1280, gutters expand |

### Touch Targets

- Minimum tap target: 44×44px (WCAG AAA).
- Buttons: 44px minimum height on mobile (10px vertical padding × 2 + line-height); pad the tap area beyond the visible box if needed since the visible button is compact.
- Nav link tap area: 44×44px even when visual padding is smaller.

### Collapsing Strategy

- **Header**: full nav at ≥1024px; hamburger sheet below.
- **Hero**: 72px headline → 48px → 36px across desktop/tablet/mobile.
- **Capability grid**: 3-up at desktop, 2-up at tablet, 1-up at mobile — black rules between cells collapse to stacked top-borders.
- **Body width**: 720px → fluid 90vw at mobile.
- **Section spacing**: 128px → 96px → 64px across sizes.

### Image Behavior

- Imagery uses `aspect-ratio` to prevent layout shift; hero loads eager, below-fold lazy.
- Photography (when used) is treated documentary-style — desaturated or black-and-white sits most naturally with the monochrome system.

### Container Queries

Used inside capability cards to switch icon-left vs. icon-top layout when card width crosses ~320px.

## 11. Content & Voice

### Tone

**Precise, plainspoken, serious.** Cognition writes like an engineering team that respects your time — declarative sentences, technical specificity, no hype and no exclamation marks. Headlines state what the product does; subheads explain how. The brand sounds like a research note, not a sales deck.

### Microcopy Patterns

- **Button verbs**: "Explore roles," "Read more," "Read the paper," "Get Devin." Never "Sign up now!" or "Get started for free →".
- **Error messages**: "Couldn't reach the service. Try again." Specific, terse, blameless.
- **Success confirmations**: "Done." "We'll be in touch." Brief and flat.
- **Loading states**: "Working…" or "Running…" — engineering-register language.

### Empty States

What they say: state the condition and the next step. *"No runs yet. Start a task to see them here."*
What they don't say: "Oops!", "Whoops!", or any apologetic exclamation. Empty states are normal conditions, reported plainly.

### CTA Verb Conventions

- Primary: "Explore roles," "Get Devin," "Try it"
- Secondary: "Read the paper," "Read the announcement," "View research"
- Footer: "Read our research," "View open roles," "Read the docs"

The brand never trades in urgency or scarcity. The voice is confident and matter-of-fact — it assumes the reader is technical and treats them accordingly.

## 12. Dark Mode & Theming

**Light-only — no dark variant offered on the marketing surface.** A theme-toggle audit of the production site returned `score=0, signals=[none]`: there is no detectable dark-mode mechanism. The warm off-white `#f7f6f5` ground is the brand's defining choice, and a dark mode would invert the entire ink-on-paper concept that distinguishes Cognition from the chrome-on-black AI-lab default.

If a downstream surface ever needed a dark companion, the rule would be a clean inversion: swap the off-white ground for a warm near-black (`#141414`), keep type at off-white `#f7f6f5`, and keep the CTA logic — but lighten the CTA to off-white-on-dark rather than darkening it. This is not currently shipped; the marketing site is intentionally light across all viewports.

## 13. Lineage & Influences

Cognition's design DNA is **Swiss/International Typographic Style** filtered through a contemporary research-lab sensibility. The neo-grotesk display, the rigid 12-column grid, the hard 1px rules, and the near-total absence of colour quote Helvetica-era Swiss design and Massimo Vignelli's monochrome systems directly. The serif body underneath the grotesk display borrows the editorial cadence of a printed journal — grotesk masthead, serif text — giving the page the authority of an academic bulletin rather than a startup pitch.

What it inherits: International Style discipline (one grotesk, a single grid, no decoration), Vignelli's "few typefaces, lots of black, lots of white" ethos, and broadsheet typographic conventions (negative tracking on headlines, old-style figures in serif body). What it borrows from contemporaries: Linear's monochrome restraint and Vercel's hard-edged engineering register — but recast in *warm* off-white and a serif body rather than cool grey and sans. What it rejects, emphatically: gradient meshes, neon accents, glassmorphism, hero animation, rounded "friendly" corners, and the entire purple-on-black AI-lab visual cliché.

**Named influences:**

- **Swiss / International Typographic Style** — grotesk display, grid discipline, black-on-white restraint. *https://en.wikipedia.org/wiki/International_Typographic_Style*
- **Massimo Vignelli** — "few typefaces, lots of black and white" monochrome systems. *https://en.wikipedia.org/wiki/Massimo_Vignelli*
- **Helvetica / Neue Haas Grotesk** — the neo-grotesk lineage of the nbInternational display face. *https://en.wikipedia.org/wiki/Helvetica*
- **Linear** — contemporary monochrome restraint and engineering-grade UI. *https://linear.app*
- **Vercel** — hard-edged, black-and-white developer-tool register. *https://vercel.com*
- **Klim Type Foundry (Tiempos)** — DNA reference for the serif text body. *https://klim.co.nz*

## 14. Do's and Don'ts

### Do

- **Do** ground the page on warm off-white `#f7f6f5` — never pure white, never grey.
- **Do** set body copy in **serif** (`stkBureauSerif` / Tiempos / Georgia fallback) at 16px / 1.6 line-height.
- **Do** run the grotesk display *light* — h1 at weight 400, not 700. Let size and tracking carry it.
- **Do** keep every corner sharp at `0px` radius — buttons, cards, inputs, chips, modals.
- **Do** use pure-black 1px hairlines for borders and dividers — separation by rule, not shadow.
- **Do** use pure black `#000` for text — the warm ground keeps the contrast comfortable.
- **Do** reserve the single near-black `#191919` for the primary CTA — it is the only non-black value.
- **Do** separate sections with black hairlines or spacing, not colour fields or gradients.
- **Do** keep motion restrained — colour and opacity shifts, no scale or parallax.
- **Do** write plainspoken, technical, exclamation-free copy.

### Don't

- **Don't** round any corner. A `0px` radius scale is the brand's geometric signature.
- **Don't** introduce an accent colour. There is no purple, blue, green, or any hue — emphasis is weight, size, and rule.
- **Don't** swap the serif body for sans without re-keying the whole system; grotesk-over-serif is the identity.
- **Don't** make the display bold. Weight-700 headlines break the calm research-lab register.
- **Don't** use soft grey dividers where a black hairline belongs.
- **Don't** add drop-shadows to default cards — they lift by border, not elevation.
- **Don't** use pure white `#ffffff` as the page ground; the warmth of `#f7f6f5` matters.
- **Don't** stack gradients, mesh backgrounds, glassmorphism, or hero animations.
- **Don't** ship marketing copy with exclamation marks or urgency ("Sign up now!").
- **Don't** soften the brand with rounded pills — status markers are sharp outlined chips.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #f7f6f5
bg-secondary: #f0efed
surface: #ffffff
text: #000000
text-soft: #3d3d3d
text-faint: #6b6b6b
brand (CTA): #191919
on-brand: #f7f6f5
border: #000000
input-bg: rgba(0,0,0,0.031)
```

### Example Component Prompts

1. **"Create a hero in Cognition style — warm off-white `#f7f6f5` canvas, 72px headline in nbInternational (Neue Haas Grotesk fallback) at weight 400 with -0.02em tracking, 20px serif lede in stkBureauSerif (Tiempos fallback), a single primary CTA filled `#191919` with off-white `#f7f6f5` label at `0px` radius, no gradient, no accent colour, reading column capped at 720px."**

2. **"Design a capability card — pure-white `#ffffff` background, `0px` radius, 1px solid `#000000` border, 24px interior padding, 16px nbInternational 600 heading, 16px stkBureauSerif 400 body, no shadow — the black hairline does the separation."**

3. **"Build a primary nav — 64px header height, warm off-white `#f7f6f5` background, black wordmark in nbInternational, links at 15px / 500 black with underline-on-hover (no colour shift), a single near-black `#191919` 'Explore roles' CTA on the right at `0px` radius."**

4. **"Compose a banded section — full-bleed `#f0efed` panel separated from the page by 1px black `#000000` top and bottom rules, 32px vertical padding, 20px nbInternational 400 heading in black, 16px serif body in `#3d3d3d`, single ghost CTA (transparent, black border, `0px` radius)."**

5. **"Render a form field — fill `rgba(0,0,0,0.031)`, 1px solid `#000000` border, `0px` radius, 8px×12px padding, 16px stkBureauSerif placeholder in `#6b6b6b`; on focus deepen fill to `rgba(0,0,0,0.051)` and add a 2px black focus ring with 2px offset."**

6. **"Make a pull-quote — stkBureauSerif 24px / 400 / italic, pure-black text, 1px black left rule, no quotation glyphs, 64px top/bottom margin, `0px` radius."**

### Iteration Guide

1. **Start warm, not white.** If the bg is `#ffffff`, shift it to warm off-white `#f7f6f5`. If it's grey, it's wrong too.
2. **Kill every radius.** Set all corners to `0px` — buttons, cards, inputs, chips. A single rounded corner breaks the brand.
3. **Switch body to serif.** If the body is sans, change it to stkBureauSerif (or Tiempos / Georgia fallback) at 16px / 1.6.
4. **Un-bold the headline.** If the display is 700, drop it to 400 and let size plus -0.012em tracking carry it.
5. **Delete the accent colour.** Any blue, purple, or green link/button is wrong — collapse it to black, with the single near-black `#191919` reserved for the primary CTA.
6. **Replace shadows with borders.** Swap every box-shadow for a 1px pure-black hairline.
7. **Strip the gradient.** Any mesh, conic, or radial gradient is foreign — replace with flat off-white or a faint `#f0efed` panel.
8. **Calm the verbs.** Replace "Sign up now!" with "Explore roles" or "Read more"; the voice is technical and exclamation-free.

---

*Theme-toggle audit: score=0, signals=[none]*
