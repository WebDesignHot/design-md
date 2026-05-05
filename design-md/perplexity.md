---
name: Perplexity
tagline: Cream paper canvas, custom pplxSans, and the unmistakable Tropic-cyan accent — a reference-library answer engine dressed in warm tones.
author: webdesignhot
source_url: https://www.perplexity.ai
spec: design.md/v1
quality: curated
featured: false
categories: [ai, saas]
tags: [light, editorial, sans, spacious, warm]
preview_swatch: ['#fbf9f5', '#20808d', '#272520']
related: [anthropic, notion, kagi]
description: 'Perplexity dresses an answer engine as a reference library. The canvas is a warm `#fbf9f5` paper-cream rather than tech white, type is set in custom **pplxSans** (a humanist sans with relaxed terminals), and the brand''s signature **Tropic-cyan** `#20808d` carries citations and links — a teal that reads as "ink on paper" rather than "tech accent." Cards round at 8-12px, primary actions on the marketing surface use a warm-charcoal `#272520` bg with `#fdfbfa` text, and the type tone leans editorial. Where ChatGPT defaults to white-and-black neutrality, Perplexity defaults to *paper*.'

colors:
  bg: '#fbf9f5'                # warm cream observed body backdrop
  bg-soft: '#f5f1ea'           # secondary surface
  surface: '#ffffff'           # answer cards lift to white on cream
  surface-warm: 'rgba(39, 26, 0, 0.07)'   # observed soft warm wash on chips/tags
  text: '#272520'              # warm-charcoal body text (rgb 39,37,32)
  text-muted: '#5d574c'        # warm secondary
  brand: '#20808d'             # Tropic / Perplexity teal — citations, links, brand mark
  brand-strong: '#176874'      # pressed / active teal
  brand-soft: '#d6ecef'        # info surface tint
  on-brand: '#ffffff'
  cta-bg: '#272520'            # marketing primary button (warm near-black)
  cta-text: '#fdfbfa'          # cream-tinted on-cta text observed
  border: 'rgba(39, 26, 0, 0.12)'   # warm-tinted hairline
  border-soft: 'rgba(39, 26, 0, 0.07)'

typography:
  display:
    family: 'pplxSans, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Hiragino Sans", "Yu Gothic", "PingFang SC", sans-serif'
    weights: [400, 500, 600]
  body:
    family: 'pplxSans, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500]
  serif:
    family: '"FK Display", "Tiempos Headline", Georgia, "Times New Roman", serif'
    weights: [400, 500]
  mono:
    family: '"pplxMono", ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    h1:    { size: 56, weight: 500, lineHeight: 1.1, tracking: '-0.02em' }
    h2:    { size: 36, weight: 500, lineHeight: 1.15 }
    h3:    { size: 22, weight: 500, lineHeight: 1.25 }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 12, weight: 500 }

radius:
  sm: 6
  md: 8
  lg: 12
  card: 12
  button: 9999                  # primary CTAs land as pills (observed 9999px)
  pill: 9999
  chip: 8

layout:
  page-width: 1200

components:
  button-primary:
    backgroundColor: '#272520'
    textColor: '#fdfbfa'
    rounded: 9999
    padding: '14px 24px'
    font: 'pplxSans 500'
    use: 'Sign up / Try Pro / Start with Comet — single warm-charcoal pill per hero.'
  button-secondary:
    backgroundColor: 'rgba(39, 26, 0, 0.07)'
    textColor: '#272520'
    rounded: 9999
    padding: '14px 12px'
    use: 'Topic chips, capability tags, and content-type filters in the explore rail.'
  card:
    backgroundColor: '#ffffff'
    border: '1px solid rgba(39, 26, 0, 0.12)'
    rounded: 12
    use: 'Answer cards, source citations, and feature tiles — white panels lifting off the cream backdrop.'

lineage:
  summary: |
    Perplexity's design DNA is "library, not laboratory." The cream
    canvas (`#fbf9f5`) and warm-charcoal type (`#272520`) deliberately
    quote print typography rather than tech UI; the **Tropic-cyan**
    `#20808d` for citations and the brand mark is a teal closer to
    fountain-pen ink than to a standard tech accent. The custom
    **pplxSans** sits in a humanist register adjacent to GT America
    and Söhne — relaxed apertures, gentle contrast — with **pplxMono**
    handling code surfaces. The choice to set body text on cream
    instead of white is the most decisive call: it puts Perplexity
    in the editorial lineage that Notion (off-white `#ffffff` with
    Lyon serif), Anthropic (cream `#f8f8f6` with Anthropic Serif),
    and The Browser Company's Arc share, distinguishing it from the
    cooler whites of OpenAI and the chromatic boldness of Mistral.
    Pills at 9999px and warm-tinted hairlines (`rgba(39,26,0,0.12)`)
    finish the reference-library posture.
  influences:
    - name: Notion
      role: Off-white-paper canvas + custom sans editorial register.
      url: https://www.notion.com
    - name: Anthropic
      role: Cream backdrop and warm-charcoal type — sister of the calm-AI register.
      url: https://www.anthropic.com
    - name: The Browser Company / Arc
      role: Warm-tinted neutrals as a defection from cool-grey tech UI.
      url: https://arc.net
---

## Overview

Perplexity stages an answer engine as a quiet reading room. The body
canvas is `#fbf9f5` — a warm cream that distinguishes it instantly
from ChatGPT's clinical white — and the type is **pplxSans**, a
custom humanist sans whose relaxed terminals and modest x-height
let the page read as set-in-print rather than rendered-in-Figma. The
**Tropic-cyan** `#20808d` brand mark and citation underline is the
only saturated colour on the page, and even that hue sits closer to
old-master ink than to neon.

The marketing primary CTA is a warm-charcoal pill (`#272520` bg,
`#fdfbfa` text) at 9999px radius — a black-on-cream pairing closer
to a museum bookstore tag than to a tech button.

## Colors

- **bg** `#fbf9f5` — warm paper-cream, the defining choice
- **bg-soft** `#f5f1ea` — secondary surface for grouped sections
- **surface** `#ffffff` — answer cards lift to true white on the cream
- **text** `#272520` — warm-charcoal (rgb 39,37,32), never pure black
- **text-muted** `#5d574c` — secondary metadata
- **brand** `#20808d` — Tropic-cyan, citations and brand mark
- **brand-soft** `#d6ecef` — info surfaces, soft pill backgrounds
- **cta-bg** `#272520` — marketing primary button
- **cta-text** `#fdfbfa` — cream-tinted button label, never pure white
- **surface-warm** `rgba(39,26,0,0.07)` — chip and tag wash with warm tint baked in
- **border** `rgba(39,26,0,0.12)` — every hairline carries the warm tone

## Typography

**pplxSans** is the workhorse — a custom humanist sans deployed at
400 and 500 weights across the entire site. Headings sit at 36-56px
with mild negative tracking; body type is 16px on a 24px line. The
font-stack is internationally aware (Hiragino, Yu Gothic, PingFang)
which matters for a search product. **pplxMono** appears in code
samples and API documentation. A serif (FK Display or similar) shows
up sparingly in editorial features and the Discover feed.

What the typography *avoids* is the tech-startup default of Inter at
700. pplxSans at 500 with paper-cream backdrop reads closer to a
literary review than to a SaaS landing page.

## Layout

Container width is moderate (~1200px) with generous gutters. The
homepage and Discover surfaces lean on a 2-3 column rail of answer
cards; sources and citations are listed as numbered chips with the
Tropic-cyan accent. Topic chips are warm-tinted pills
(`rgba(39,26,0,0.07)`) at 9999px radius. Section breaks are quiet —
Perplexity rarely uses heavy dividers, preferring spacing alone.

## Elevation & Depth

White answer cards lift off the cream backdrop using *value contrast
alone* — no shadows. The `#ffffff` of a card on `#fbf9f5` provides
just enough separation. Where shadows do appear (modal layers,
floating sources panel), they're soft warm-tinted shadows, not the
neutral-grey defaults of Material. Hairlines carry a warm
`rgba(39,26,0,0.12)` tint that ties them to the body type colour.

## Shapes

Pills dominate. Primary CTAs and topic chips are 9999px; cards land
at 12px; chips and tags at 8px. The radii ladder is 6/8/12 for
content surfaces and effectively-infinite for interactive elements,
echoing the paper-tag motif.

## Components

The defining components are the **warm-charcoal pill CTA** (`#272520`
on cream, 9999px, pplxSans 500), the **white answer card** (12px
radius, warm-tinted hairline, lifting off cream by value alone), and
the **Tropic-cyan citation chip** that numbers and links sources
inside an answer. Topic chips on Discover are warm-tinted soft
pills. The search composer itself is a tall pill with the brand
mark inset — a piece of identity baked into the primary input.

## Do's and Don'ts

- **Do** set the canvas to warm cream (`#fbf9f5`) — pure white collapses the brand into ChatGPT's neighbourhood.
- **Do** reach for the Tropic-cyan `#20808d` for any link, citation, or brand mark; it's the only saturated colour on the page and it earns its keep.
- **Do** use pplxSans at 500 weight for display copy; the relaxed humanist letterforms read as editorial rather than UI.
- **Don't** use pure black `#000` for type or buttons — warm-charcoal `#272520` with cream-tinted on-cta text is what makes the cream-canvas system cohere.
- **Don't** drop shadows on cards; depth here is value-contrast (white on cream), not elevation.
- **Don't** introduce neon or tech-saturated accents — the entire palette is paper, ink, and one teal.
