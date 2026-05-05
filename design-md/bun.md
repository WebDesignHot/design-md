---
name: Bun
tagline: Cream canvas with chunky pink accents and the wide-eyed mascot — a JS runtime dressed as a 1970s bakery sign.
author: webdesignhot
source_url: https://bun.sh
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools]
tags: [light, playful, retro, sans, warm, soft, bright]
preview_swatch: ['#fbf0df', '#f472b6', '#15151b']
related: [vite, vercel, tailwindcss]
description: 'Bun''s site is the warmest dev-tool page in the JavaScript world — a cream `#fbf0df` canvas, chunky near-black `#15151b` type, hot pink `#f472b6` accents, and the wide-eyed bun mascot doing all the emotional work. Where every other runtime leans dark-mode and gradient, Bun leans bakery-sign warmth and 1970s confectionery palette.'

colors:
  bg: '#fbf0df'                # cream canvas, the bakery counter
  bg-soft: '#fff7e8'           # alternate warm-white section
  surface: '#ffffff'           # pure-white card lift
  surface-strong: '#f5e8d0'    # darker cream for active states
  text: '#15151b'              # near-black, slight cool tilt for contrast against cream
  text-strong: '#000000'
  text-muted: '#6b6b6b'
  brand: '#f472b6'             # signature Bun pink
  brand-strong: '#db2777'
  brand-soft: '#fce7f3'
  accent: '#fbbf24'            # warm gold, secondary mascot accent
  accent-soft: '#fef3c7'
  border: '#15151b1a'          # 10% near-black hairline
  border-strong: '#15151b33'
  on-brand: '#ffffff'

typography:
  display:
    family: '"CoFo Sans", Inter, -apple-system, "system-ui", sans-serif'
    weights: [600, 700, 800]
  body:
    family: 'Inter, -apple-system, "system-ui", "Segoe UI", sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"Berkeley Mono", "JetBrains Mono", ui-monospace, Menlo, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 80, weight: 800, lineHeight: 1.0,  tracking: '-0.03em' }
    h2:    { size: 52, weight: 700, lineHeight: 1.05, tracking: '-0.02em' }
    h3:    { size: 30, weight: 700, lineHeight: 1.2,  tracking: '-0.01em' }
    body:  { size: 17, lineHeight: 1.6 }
    small: { size: 14, lineHeight: 1.5 }
    code:  { size: 14, family: mono, lineHeight: 1.6 }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  card: 12
  pill: 9999

layout:
  container: 1200
  gutter: 24
  section-padding: 96
  grid: 12

components:
  button-primary:
    bg: '#15151b'
    color: '#fbf0df'
    radius: 8
    weight: 700
  button-pink:
    bg: '#f472b6'
    color: '#15151b'
    radius: 8
    weight: 700
  card:
    bg: '#ffffff'
    border: '1px solid #15151b1a'
    radius: 12
  code-block:
    bg: '#15151b'
    color: '#fbf0df'
    radius: 12
    font: mono

lineage:
  summary: |
    Bun's homepage is the most chromatically warm dev-tool site in
    the JavaScript ecosystem. The canvas is `#fbf0df` — a soft cream
    that reads as freshly-baked-bun, deliberately referencing the
    mascot — and the type is a chunky near-black `#15151b` rather
    than pure black, with a slight cool tilt to register against the
    warm canvas. Pink (`#f472b6`) and gold (`#fbbf24`) provide secondary
    accents, both pulled from the bun mascot's blush and crust. The
    closest spiritual cousins are **Stripe Press** book covers (warm
    paper, chunky display type), 1970s confectionery branding (cream
    + pink + brown palette), and the warm-print register of indie
    publications. Display type is **CoFo Sans** (or a similar chunky
    grotesk) at weights 700 and 800 — heavy, broad-cut, almost
    woodtype-poster in feel. Code blocks invert to pure dark
    (`#15151b` on cream) — the only place dark appears, treated as
    a contrasting artifact. Where Vite and Vercel lean cool-modern,
    Bun leans warm-retro, and that warmth is its single biggest
    differentiator in a sea of dark-canvas runtime sites.
  influences:
    - name: Stripe Press
      role: Warm-paper cream canvas, chunky display, editorial-book register.
      url: https://press.stripe.com
    - name: 1970s confectionery branding
      role: Cream + pink + brown palette signaling warmth and craft.
    - name: Berkeley Graphics (Berkeley Mono)
      role: Lent the warm, slightly-rounded mono with retro character.
      url: https://berkeleygraphics.com
---

## Overview

Bun's marketing site is the warmest dev-tool page in the JavaScript
world. The canvas is `#fbf0df`, a soft cream that reads as freshly-
baked, and the type is a chunky `#15151b` near-black with a slight
cool tilt — that subtle blue undertone in the dark text is what keeps
it crisp against the warm canvas without flattening into pure black.
The brand expresses itself through pink (`#f472b6`) accents pulled
from the mascot's blush and a warm gold (`#fbbf24`) for secondary
moments.

Where Vite and Vercel sell themselves on cool-modern infrastructure
register, Bun sells itself on **warmth, speed, and personality**. The
wide-eyed bun mascot does the emotional work that a gradient hero
would do on any other runtime page; chunky CoFo Sans display type
adds the woodtype-poster register that turns the marketing into
something closer to a bakery sign than a JS landing.

## Colors

- **bg** `#fbf0df` — cream canvas, the bakery counter
- **bg-soft** `#fff7e8` — lighter alternate-section warm-white
- **surface** `#ffffff` — pure-white card lift, contrast against cream
- **text** `#15151b` — chunky near-black with cool tilt
- **text-muted** `#6b6b6b` — captions and metadata
- **brand** `#f472b6` — signature Bun pink, mascot-derived
- **brand-soft** `#fce7f3` — tinted callouts and highlight surfaces
- **accent** `#fbbf24` — warm gold, secondary mascot accent
- **border** `#15151b1a` — 10% near-black hairline
- **on-brand** `#ffffff` / `#15151b` — flexible by surface

## Typography

Display is **CoFo Sans** (or comparable chunky grotesk) at weights
700 and 800. H1 sits at 80px with 1.0 line-height and `-0.03em`
tracking — heavy, broad-cut, woodtype-poster in feel. CoFo Sans's
extended counters and high stroke contrast give the marketing a
warmth that Inter Display or Geist cannot reproduce; this is the
single most important type decision on the page.

Body type is **Inter** at 17px on a 1.6 line-height. Code surfaces
use **Berkeley Mono** at 14px — Berkeley's slightly-rounded character
and warm proportions are deliberately chosen over JetBrains Mono to
keep the warm-retro register consistent into the code blocks.

## Layout

Container caps at 1200px with 24px gutters; sections at 96px vertical.
The grid is 12-column but frequently broken by mascot illustrations
that bleed across columns — a loose, almost-poster layout discipline
rather than a strict grid.

## Elevation & Depth

Depth comes from **paper-stacking**: the cream canvas, white card
lift, hairline borders, and occasional darker-cream (`#f5e8d0`) hover
states. There are no soft shadows; depth is achieved through tonal
warmth shifts and the contrast between cream and pure white. The
single dramatic depth move is the inverse-dark code block — a
`#15151b` rectangle on the cream page reads like an oven window cut
into the bakery counter.

## Shapes

Radius ladder is 4 / 6 / 8 / 12, with pills at 9999. Buttons land at
8px, cards at 12px. The mascot's roundness — circular face, soft
edges — echoes through generous corner radii on illustration frames
and the way navigation pills sit at full 9999 rounding.

## Components

The defining components are the **dark solid button** (`#15151b` bg,
cream text, 8px radius, weight 700) for primary actions, the **pink
secondary button** (`#f472b6` bg, dark text), the **dark code block**
that inverts the page (`#15151b` with Berkeley Mono on cream text),
the **bun mascot illustration** treated as primary brand surface, and
the **white card with hairline border** for feature blocks. Navigation
is a thin warm-cream bar that lets the mascot anchor the upper-left.

## Do's and Don'ts

- **Do** keep the canvas at `#fbf0df` cream. Pure white reads as Stripe; off-white reads as Notion — the warmth is uniquely Bun.
- **Do** lean on chunky display type (CoFo Sans or equivalent at 700/800). The woodtype-poster register is what carries the warm-retro voice.
- **Do** treat the mascot as primary brand surface — not as an Easter egg. Bun's emotional differentiation lives in the wide-eyed bun.
- **Don't** introduce a dark-mode default. Bun's identity is cream-light; a dark canvas reads as Vite or Node and erases the warmth.
- **Don't** pair the pink (`#f472b6`) with cool blues or purples. Stay in the warm half of the wheel — pink, gold, cream, near-black.
- **Don't** apply heavy drop shadows. Depth here is tonal-warm and bordered, never shadowed; shadows undermine the print/poster register.
