---
name: webdesignhot
tagline: AI-era editorial dark — pure black with one acid-lime accent.
author: webdesignhot
source_url: https://www.webdesignhot.com
spec: design.md/v1
quality: curated
featured: true
categories: [marketplace, dev-tools]
tags: [dark, editorial, mono, serif, minimal]
preview_swatch: ['#0a0a0a', '#c6f432', '#ededed']
related: [agentkit]
description: 'Publication-grade dark interface on pure black with a single acid-green accent. Magazine + dev-tool lineage — Linear''s spatial restraint, Vercel''s type hierarchy, Anthropic''s editorial calm, Rauno''s italic serif punctuation.'

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
    high-impact at low quantity.
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

colors:
  bg: '#0a0a0a'
  bg-elev: '#0f0f0f'
  bg-card: '#141416'
  bg-card-hover: '#1a1a1c'
  text: '#ededed'
  text-dim: '#8a8a8a'
  text-faint: '#525252'
  brand: '#c6f432'
  brand-tint: 'rgba(198, 244, 50, 0.10)'
  brand-tint-strong: 'rgba(198, 244, 50, 0.25)'
  border: 'rgba(255, 255, 255, 0.08)'
  border-strong: 'rgba(255, 255, 255, 0.15)'
  border-brand: 'rgba(198, 244, 50, 0.25)'
  success: '#22c55e'
  warning: '#f59e0b'
  danger: '#ef4444'

typography:
  display:
    family: 'Inter Variable, Inter, -apple-system, sans-serif'
    weights: [400, 500]
    feature-settings: "'ss01', 'cv11'"
  serif:
    family: 'Instrument Serif, Iowan Old Style, Georgia, serif'
    style: italic
    weight: 400
    role: 'em-tag accent only — repurposed for editorial italic punctuation'
  mono:
    family: 'JetBrains Mono Variable, JetBrains Mono, ui-monospace, monospace'
    weights: [400, 500]
    role: 'metadata, code, labels'
  scale:
    display-hero:   { size: 88, weight: 500, lineHeight: 0.95, tracking: -0.04 }
    display-large:  { size: 72, weight: 500, lineHeight: 1.00, tracking: -0.035 }
    display-medium: { size: 56, weight: 500, lineHeight: 1.00, tracking: -0.035 }
    display-small:  { size: 48, weight: 500, lineHeight: 1.05, tracking: -0.03 }
    h1:             { size: 40, weight: 500, lineHeight: 1.05, tracking: -0.025 }
    h2:             { size: 32, weight: 500, lineHeight: 1.15, tracking: -0.02 }
    h3:             { size: 22, weight: 500, lineHeight: 1.25, tracking: -0.015 }
    body-large:     { size: 18, weight: 400, lineHeight: 1.55, tracking: -0.01 }
    body:           { size: 15, weight: 400, lineHeight: 1.6,  tracking: -0.01 }
    body-small:     { size: 13, weight: 400, lineHeight: 1.55, tracking: -0.005 }
    label-mono:     { size: 11, weight: 500, lineHeight: 1.5,  tracking: 0.15, family: mono, transform: uppercase }

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 120]

radius:
  micro: 3
  small: 6
  standard: 8
  comfortable: 12
  featured: 16

layout:
  prose-width: 680
  page-width: 1200
  narrow-width: 820
  dense-width: 1400

motion:
  ease: 'cubic-bezier(0.4, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 200
  duration-slow: 300

components:
  button-primary:
    backgroundColor: brand
    textColor: '#000'
    padding: '14px 20px'
    rounded: standard
    font: 'display 14/500 -0.005em'
    hover: 'opacity 0.9 — no color shift'
    use: 'primary commerce — Buy, Get kit, Sign up'
  button-ghost:
    backgroundColor: transparent
    textColor: text
    border: 'border-strong'
    padding: '14px 20px'
    rounded: standard
    hover: 'background rgba(255,255,255,0.05)'
  card:
    backgroundColor: bg-card
    border: border
    rounded: featured
    padding: '20-32px contextual'
    hover: 'background bg-card-hover'
  label:
    backgroundColor: transparent
    textColor: text-dim
    font: 'mono 11/500 0.15em uppercase'
    decorator: '6px lime dot left of text'
  em:
    family: serif
    style: italic
    color: brand
    use: 'editorial accent inside display headlines — never grammatical emphasis'
---

## Overview

webdesignhot.com is **AI-era editorial dark** — a publication-grade dark
interface on pure black (`#0a0a0a`) with a single acid-green accent (`#c6f432`).
The system rejects the AI-SaaS-purple-gradient cliché and inherits from a
magazine / dev-tool lineage: Linear's spatial restraint, Vercel's type
hierarchy, Anthropic's editorial calm, Rauno's italic serif punctuation.

The system rests on **three typographic voices**: Inter for display and UI
(industrial precision), Instrument Serif italic for editorial accents
(literary warmth against the technical frame), and JetBrains Mono for
metadata and code (developer credibility). Weights stay restrained — body
copy rarely above 500 — with size and letter-spacing doing the hierarchical
work.

Depth comes from **tonal elevation** (`#0a0a0a` → `#0f0f0f` → `#141416` →
`#1a1a1c`), not drop shadows. Borders are translucent white at 8–15% opacity
so edges feel atmospheric, not harsh. A subtle radial gradient in
`.grain` adds ambient lime light at top and bottom of the viewport — no
film-grain noise (it reads as a display artifact on screens).

## Colors

The palette is intentionally narrow: four surfaces, three text tones, one
accent. Anything beyond them is a mistake.

**Surfaces** (light-direction layering):

- `bg` `#0a0a0a` — root page. Not `#000` — a hair warmer so text doesn't crunch.
- `bg-elev` `#0f0f0f` — sticky nav, input fields, subtle container contrast.
- `bg-card` `#141416` — content panels, product cards, pricing containers.
- `bg-card-hover` `#1a1a1c` — interactive card hover.

**Text** (anti-aliased on dark):

- `text` `#ededed` — body copy, headlines, interactive labels.
- `text-dim` `#8a8a8a` — supporting copy, subtitles, inactive nav.
- `text-faint` `#525252` — metadata, footer, disabled.

**Brand** — the only accent in the system:

- `brand` `#c6f432` (acid lime). Used **only** as solid CTAs, `::selection`,
  active dots, focus rings, the lime punctuation dot in the logo.
  **Never as gradient. Never glow-shadowed.** That restraint is how the
  accent stays high-impact at low quantity.

## Typography

**Three voices, one hierarchy.** Inter carries 90% of surfaces.
Instrument Serif italic appears only inside `<em>` tags as accent fragments
(*"Agents that <em>actually do the work</em>."*). JetBrains Mono is reserved
for data, labels, and code — never body.

**Display tightens with size** — letter-spacing goes from `-0.04em` at 88px
down to `normal` at 12px. The reverse of default browser behavior;
produces the "engineered" feel.

**Weight restraint** — display type is `500`, not `700`. Body is `400`.
The only `600`+ weight appears on mono labels and button text, used
sparingly.

**`<em>` is a design token, not a grammar tag.** The system repurposes
HTML `<em>` to render Instrument Serif italic in brand color. Editorial
writers use it to punctuate display headlines, never for emphasis in
body prose.

## Layout

Four canonical container widths, each tied to a content intent:

- `prose-width` (680px) — long-form reading. Articles, refunds policy.
- `narrow-width` (820px) — single-column hero blocks.
- `page-width` (1200px) — most product/marketing pages.
- `dense-width` (1400px) — data-rich layouts (changelog, catalogs).

Section rhythm uses `--space-11` (120px) between major sections on
desktop, scaling down to `--space-9` (64px) on mobile.

## Elevation & Depth

**Depth comes from tonal stacking, not shadows.** The four surface tones
provide implicit elevation through value contrast alone — the way magazine
layouts use ink density rather than 3D effects.

Drop shadows appear only on floating UI primitives (Tooltip, Popover,
Toast) — drop shadow allowed as functional affordance for "this floats
above the page".

## Shapes

Radii follow a numeric scale:

- `micro` (3px) — small chips, badges, mono code highlights.
- `small` (6px) — input fields.
- `standard` (8px) — buttons, most interactive surfaces.
- `comfortable` (12px) — small cards, dropdown menus.
- `featured` (16px) — hero cards, pricing containers.

Corners are always rounded. The mix of `8px` (functional) and `16px`
(content) gives the page editorial softness without going Web-3 bubbly.

## Components

The `<Base>` layout supplies the grain background, sticky nav, footer,
and typography defaults. Anchor components: `<Nav>` (sticky, blur-backdrop
on scroll), `<Hero>` (display headline 88px max, `<em>` italic accent
allowed), `<PriceCard>` (`bg-card` panel, brand-bordered if recommended),
`<FAQ>` (Radix accordion with custom keyframes), `<Label>` (mono uppercase
+ lime dot — the signature rhythm anchor).

## Do's and Don'ts

**Do** use `<em>` for editorial italic accents inside display headlines.
**Do** pair every section with a `<Label>` mono uppercase + lime dot rhythm.
**Do** reach for tonal elevation before reaching for borders or shadows.

**Don't** use `brand` as a gradient — the accent's power comes from being
flat and solid. **Don't** `box-shadow` brand-colored glows. Ever. **Don't**
introduce a second accent color. **Don't** use bold (700+) weights on
display type. **Don't** add film-grain noise textures. **Don't** use
`<em>` for grammatical emphasis — it's a design token.
