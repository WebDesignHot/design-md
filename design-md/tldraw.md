---
name: tldraw
tagline: Casual whiteboard sketchy — hand-drawn UI primitives, dotted-grid canvas, and a soft pastel palette that wears its toy-like energy with confidence.
author: webdesignhot
source_url: https://tldraw.com
spec: design.md/v1
quality: curated
featured: false
categories: [design-tools, dev-tools]
tags: [light, playful, sans, soft, organic, bright]
preview_swatch: ['#f8f9fa', '#1d1d1d', '#3182ed']
related: [excalidraw, figma, rive-app]
description: 'tldraw is a whiteboard SDK that wears its toy-like character openly — dotted-grid canvas, soft pastel sticky-note hues, hand-drawn arrow primitives, and a friendly Inter cut held at modest weights. The marketing site is essentially a live tldraw whiteboard with marketing text dropped into shapes; the brand identity is "the product itself, lightly framed." A single confident blue (`#3182ed`) carries CTAs, and rounded-rect cards with 12–16px radii echo the SDK''s default shape primitives.'

colors:
  bg: '#f8f9fa'
  bg-canvas: '#fdfdfd'
  surface: '#ffffff'
  surface-soft: '#f1f3f5'
  text: '#1d1d1d'
  text-muted: '#5c5c5c'
  text-soft: '#8b8b8b'
  brand: '#3182ed'
  brand-hover: '#2870d6'
  accent-yellow: '#fde68a'
  accent-pink: '#fbcfe8'
  accent-green: '#bbf7d0'
  accent-blue: '#bfdbfe'
  border: '#0000001a'
  border-strong: '#00000033'
  on-brand: '#ffffff'
  grid-dot: '#0000001a'

typography:
  display:
    family: '"Inter", "Inter Display", -apple-system, "system-ui", sans-serif'
    weights: [500, 600, 700]
  body:
    family: '"Inter", -apple-system, "system-ui", sans-serif'
    weights: [400, 500]
  mono:
    family: '"Berkeley Mono", "JetBrains Mono", ui-monospace, Menlo, monospace'
    weights: [400]
  hand:
    family: '"Caveat", "Comic Neue", cursive'
    weights: [400, 600]
  scale:
    h1:    { size: 56, weight: 700, lineHeight: 1.1, tracking: '-0.02em' }
    h2:    { size: 36, weight: 600, lineHeight: 1.15, tracking: '-0.015em' }
    h3:    { size: 22, weight: 600, lineHeight: 1.3, tracking: '-0.01em' }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 12, weight: 500 }

radius:
  sm: 6
  md: 10
  lg: 14
  card: 16
  button: 10
  pill: 9999
  shape: 12

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: button
    use: 'blue solid CTA — the only saturated chrome in the system'
  button-secondary:
    backgroundColor: surface
    textColor: text
    border: border-strong
    rounded: button
  card:
    backgroundColor: surface
    border: border
    rounded: card
    shadow: '0 1px 2px rgba(0,0,0,0.06), 0 1px 4px rgba(0,0,0,0.04)'
    use: 'shape card — mimics tldraw''s default rounded-rect primitive'
  sticky-note:
    backgroundColor: accent-yellow
    textColor: text
    rounded: shape
    use: 'pastel sticky — used in feature callouts and tooltips'

lineage:
  summary: |
    tldraw is the rare developer SDK that markets itself by simply
    *being* itself — the homepage is a live tldraw whiteboard with
    marketing copy dropped into hand-drawn shapes, sticky notes, and
    arrow primitives. The visual signature is a dotted-grid canvas
    (`#f8f9fa` ground with `#0000001a` dots), pastel sticky-note hues
    (yellow, pink, green, blue), and the SDK's default rounded-rect
    shape used as the card primitive across the marketing surface.
    Type is restrained Inter at 500-700 weights — chunky enough to
    feel friendly but never extreme. A single confident blue
    (`#3182ed`) carries action; everything else is the casual,
    soft-pastel whiteboard register. The brand sits visually between
    Excalidraw's literal hand-drawn primitives and Linear's quiet
    discipline — playful where it counts, structured where it must
    be.
  influences:
    - name: Excalidraw
      role: Hand-drawn whiteboard aesthetic and pastel sticky-note palette; tldraw is the more polished sibling.
      url: https://excalidraw.com
    - name: Figma
      role: Soft chrome and hairline-bordered cards; tldraw replaces the cool-grey with a warmer dotted canvas.
      url: https://figma.com
    - name: Notion
      role: Permission to use a soft, page-like ground for a developer-tools brand.
      url: https://notion.com
---

## Overview

tldraw treats its homepage as a live demo of its product. The
canvas itself is a tldraw whiteboard, dotted-grid included, and
marketing copy lives inside actual rounded-rect shapes the user
could (in principle) drag around. The chrome is friendly without
being childish: pastel sticky-note hues for callouts, a single
confident blue for action, and an Inter type system held at modest
weights.

Display caps out at 56px/700 with `-0.02em` tracking — meaningful
restraint compared to the 96–140px headlines on peers like Rive.
The marketing voice here is hand-drawn casualness, not broadcast
boldness.

## Colors

- **bg** `#f8f9fa` — soft off-white canvas with dotted grid
- **bg-canvas** `#fdfdfd` — slightly brighter for embedded scenes
- **text** `#1d1d1d` — near-black, warm undertone
- **brand** `#3182ed` — single confident blue for CTAs
- **accent-yellow** `#fde68a` — sticky-note yellow
- **accent-pink** `#fbcfe8` — sticky-note pink
- **accent-green** `#bbf7d0` — sticky-note green
- **border** `#0000001a` — 10% black hairline; never solid grey

The pastel accents are confined to sticky notes and feature
callouts; the body of the page stays grayscale + blue.

## Typography

Display is **Inter at 700**, sized 56px with a 1.1 line-height —
chunky enough to feel friendly but never extreme. Body is Inter
400/500 at 16/24, the SaaS workhorse setting. A handwritten cut
(**Caveat** or similar) appears in marketing illustrations to mark
on-canvas annotations, mirroring the sketchy energy of the actual
product.

## Layout

The grid is loose and casual — sections feel like dropped objects
on a whiteboard rather than rigid columns. Hero content claims
roughly 800px of horizontal space; feature blocks alternate between
text-on-left / shape-on-right and centered single-shape callouts.

## Elevation & Depth

Cards use a soft two-layer shadow (`0 1px 2px / 0 1px 4px`) that
mimics paper resting on a table — closer to Figma's chrome than
Linear's flat hairline-only approach. Sticky notes carry slightly
heavier shadows, reading as taped-on rather than embedded.

## Shapes

Radii ladder is 6 / 10 / 14 / 16 with a special `shape: 12` value
that mirrors tldraw's default rounded-rect primitive. Buttons land
at 10px, cards at 16px. Pill (9999px) is reserved for badges.

## Components

The defining components are the **rounded-rect shape card** (16px
radius, hairline border, soft two-layer shadow), the **pastel
sticky note** (yellow/pink/green fills, 12px radius, slightly
heavier shadow), and the **blue solid CTA** (`#3182ed` on white,
10px radius). Hand-drawn arrow primitives mark feature flows on the
homepage, drawn with the same SVG style as the live tldraw runtime.

## Do's and Don'ts

- **Do** keep the canvas dotted — the grid is part of the brand identity, not a stylistic flourish.
- **Do** confine the pastel accents to sticky notes and callouts; the body page stays grayscale + blue.
- **Do** use modest type sizes (56px H1) rather than broadcast-scale headlines; tldraw is friendly, not loud.
- **Don't** apply the bright blue (`#3182ed`) to anything other than primary action — it's the only saturated chrome.
- **Don't** drop the soft shadows in favour of hairline-only chrome; the paper-on-table effect is part of the toy charm.
- **Don't** mix more than one pastel accent in a single feature module — sticky notes are punctuation, not pattern.
