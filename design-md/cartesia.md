---
name: Cartesia
tagline: Bright clinical white with a single deep-blue action — voice-AI presented as scientific instrument rather than consumer product.
author: webdesignhot
source_url: https://cartesia.ai
spec: design.md/v1
quality: curated
featured: false
categories: [ai, dev-tools]
tags: [light, minimal, sans, mono, structured, cool, spacious]
preview_swatch: ['#ffffff', '#0a0a0a', '#2563eb']
related: [anthropic, modal, replicate]
description: 'Cartesia presents real-time voice as laboratory instrument. The canvas is clinical white (`#ffffff`), the type is a Suisse-adjacent Inter cut held at hairline weights, and a single confident deep blue (`#2563eb`) carries every action. Mono captions in `IBM Plex Mono` mark technical specs and latency benchmarks — the visual language is research-paper restraint, not product marketing flourish.'

colors:
  bg: '#ffffff'
  bg-soft: '#fafafa'
  surface: '#f5f5f5'
  surface-strong: '#e5e5e5'
  text: '#0a0a0a'
  text-strong: '#000000'
  text-muted: '#525252'
  text-soft: '#737373'
  brand: '#2563eb'
  brand-hover: '#1d4fd7'
  brand-soft: '#dbeafe'
  accent: '#0a0a0a'
  border: '#e5e5e5'
  border-soft: '#f0f0f0'
  on-brand: '#ffffff'

typography:
  display:
    family: 'Inter, "InterDisplay", -apple-system, "system-ui", "Helvetica Neue", sans-serif'
    weights: [400, 500, 600]
  body:
    family: 'Inter, -apple-system, "system-ui", "Helvetica Neue", sans-serif'
    weights: [400, 500]
  mono:
    family: '"IBM Plex Mono", "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 72, weight: 500, lineHeight: 1.05, tracking: '-0.03em' }
    h2:    { size: 48, weight: 500, lineHeight: 1.1,  tracking: '-0.02em' }
    h3:    { size: 24, weight: 500, lineHeight: 1.3,  tracking: '-0.01em' }
    body:  { size: 15, lineHeight: 1.5 }
    mono:  { size: 13, family: mono, weight: 400 }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 10
  card: 12
  button: 8
  pill: 9999

components:
  button-primary:
    backgroundColor: text
    textColor: on-brand
    rounded: button
    use: 'near-black pill — primary action across hero and pricing'
  button-secondary:
    backgroundColor: transparent
    textColor: text
    border: border
    rounded: button
  card:
    backgroundColor: bg
    border: border
    rounded: card
    use: 'spec card — voice latency benchmarks, model cards'
  badge:
    backgroundColor: surface
    textColor: text-muted
    rounded: pill
    fontFamily: mono

lineage:
  summary: |
    Cartesia is the deliberate inverse of the gradient-soaked AI
    landing page. The site reads like a research lab's homepage —
    clinical white canvas, hairline Inter at 500 weight rather than
    700, mono captions for benchmarks, and a single near-black CTA
    that doubles as the brand mark. The chromatic restraint is
    aggressive: the entire palette is essentially `#000` / `#fff`
    with one deep blue (`#2563eb`) reserved for inline links and
    secondary accents. This places the brand visually closer to
    Anthropic and Modal than to ElevenLabs or Suno, signalling
    "we are infrastructure" rather than "we are creative tooling."
    Mono in IBM Plex Mono carries the technical voice — latency
    numbers, model parameter counts, API endpoints — and is what
    most clearly distinguishes Cartesia from the broader sea of
    minimal AI brands.
  influences:
    - name: Anthropic
      role: Cream-and-slate restraint translated into white-and-black; type-led marketing without imagery.
      url: https://anthropic.com
    - name: Stripe
      role: Single-confident-blue action discipline.
      url: https://stripe.com
    - name: arXiv / academic papers
      role: Mono captions and unadorned spec tables borrow from research-paper conventions.
      url: https://arxiv.org
---

## Overview

Cartesia treats voice AI as a category of infrastructure rather than
creative tool, and the marketing surface enforces that read at every
turn. The canvas is pure white. There are essentially no decorative
gradients, no hero illustrations, no character work — just type,
benchmarks, and a single deep blue (`#2563eb`) that surfaces in
inline links and secondary accents.

Inter is held to 500 weight at headline scale, never 700; that
choice alone shifts the tone from "consumer product launch" to
"research preview." Latency numbers and model specs are set in
**IBM Plex Mono** at 13px, treated as first-class typographic
content rather than relegated to fine print.

## Colors

- **bg** `#ffffff` — clinical white canvas
- **text** `#0a0a0a` — near-black, never pure `#000` outside CTA pills
- **text-muted** `#525252` — neutral grey for captions and metadata
- **brand** `#2563eb` — single deep blue, used for inline links
- **surface** `#f5f5f5` — soft panel tint for code samples
- **border** `#e5e5e5` — neutral hairline; cool, not warm grey

The palette is intentionally narrow: a designer could implement the
entire site with `text-black`, `text-neutral-500`, `bg-neutral-100`,
and `text-blue-600` and miss almost nothing.

## Typography

Display is **Inter at 500 weight**, sized 72px with `-0.03em`
tracking — the lighter weight (relative to the 700 most marketing
sites use) is what gives the site its measured, paper-like cadence.
H2 lands at 48/500 with the same negative track.

Mono is **IBM Plex Mono** at 13–15px, used for latency benchmarks
("90ms time-to-first-byte"), API endpoints, and the inline model
parameters in spec tables. The mono is not an afterthought — it's a
co-equal voice, signalling that benchmarks are content.

## Layout

Layout is column-led and unusually narrow — hero copy claims roughly
720px of horizontal real estate, and the rest of the page steps
through in a single 1200px container. There is no two-column
marketing-page rhythm; the page reads top-to-bottom like a paper.
Cards land at 12px radius, buttons at 8px.

## Elevation & Depth

There is essentially no shadow in the system. Depth is achieved
through the `#f5f5f5` soft surface tint and a single `#e5e5e5`
hairline border. When a code sample needs to elevate above the page,
it does so via tonal contrast (`#fafafa` panel on `#ffffff` body),
not drop-shadow.

## Shapes

Radii ladder runs 4 / 6 / 8 / 10 / 12, with pill (9999px) reserved
for badges and tag chips. Buttons land at 8px — slightly tighter
than the modern 12px default, which contributes to the "clinical
instrument" tone.

## Components

The defining components are the **near-black primary button**
(`#0a0a0a` on white, 8px radius), the **mono benchmark badge** (IBM
Plex Mono on `#f5f5f5`, pill radius), and the **spec card** which
sets a model's parameters and latency in a table-like grid with
`#e5e5e5` hairlines. Navigation is a thin top bar with mono link
labels — even the wayfinding is technical.

## Do's and Don'ts

- **Do** hold display type to weight 500, not 700; that one decision sets the entire scientific-instrument tone.
- **Do** treat mono (IBM Plex Mono) as content type, not decoration — benchmarks and latency numbers belong here.
- **Do** keep the chromatic palette to white / near-black / one deep blue; introducing a third hue breaks the lab aesthetic.
- **Don't** apply gradients, hero illustrations, or character art — Cartesia is positioned as infrastructure, not creative tool.
- **Don't** use rounded-pill buttons for primary actions; the 8px radius is part of the technical voice.
- **Don't** soften the type with serif accents; this is a research-paper-coded brand, but the type system stays sans throughout.
