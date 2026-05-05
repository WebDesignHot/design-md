---
name: Deno
tagline: Inkwell black on warm white with the dinosaur mascot — TypeScript runtime as Eric Carle children''s book.
author: webdesignhot
source_url: https://deno.com
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools]
tags: [light, playful, sans, structured, warm, soft]
preview_swatch: ['#ffffff', '#000000', '#70ffaf']
related: [vercel, vite, tailwindcss]
description: 'Deno''s site is built around its dinosaur mascot and a deliberately warm, illustrative register — pure white canvas, inkwell-black type, mint-green `#70ffaf` accents, and the rounded sans of a children''s book paired with crisp engineering documentation. Where Bun goes cream-and-pink, Deno goes white-and-mint with a hand-drawn warmth.'

colors:
  bg: '#ffffff'
  bg-soft: '#f8f9fa'
  surface: '#f4f5f7'
  surface-strong: '#e8eaed'
  text: '#000000'              # inkwell black
  text-strong: '#000000'
  text-muted: '#5b5e64'
  brand: '#70ffaf'             # Deno mint green
  brand-strong: '#34d399'
  brand-soft: '#dcfce7'
  accent: '#000000'             # the black is itself a brand color
  accent-warm: '#f59e0b'        # secondary warm accent for callouts
  border: '#e1e3e7'
  border-strong: '#c3c6ca'
  on-brand: '#000000'           # dark text on the mint button
  code-bg: '#0d1117'

typography:
  display:
    family: '"Inter Display", Inter, -apple-system, "system-ui", sans-serif'
    weights: [600, 700, 800]
  body:
    family: 'Inter, -apple-system, "system-ui", "Segoe UI", sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", ui-monospace, "Fira Code", Menlo, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 72, weight: 800, lineHeight: 1.0,  tracking: '-0.03em' }
    h2:    { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.02em' }
    h3:    { size: 28, weight: 700, lineHeight: 1.25, tracking: '-0.01em' }
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
    bg: '#000000'
    color: '#ffffff'
    radius: 8
    weight: 600
  button-mint:
    bg: '#70ffaf'
    color: '#000000'
    radius: 8
    weight: 600
  card:
    bg: '#ffffff'
    border: '1px solid #e1e3e7'
    radius: 12
  code-block:
    bg: '#0d1117'
    color: '#ffffff'
    radius: 12
    font: mono

lineage:
  summary: |
    Deno's identity is a deliberate softening of the Node-era runtime
    aesthetic. The canvas is pure `#ffffff` paper-white, the type is
    inkwell `#000000`, and the brand color — `#70ffaf`, a saturated
    mint green — sits as the single chromatic accent against the
    monochrome page. The signature element is the **hand-drawn
    sauropod mascot**, illustrated in a slightly naïve children's-
    book register that pulls the brand away from generic dev-tool
    coolness and into something closer to **Eric Carle meets Stripe
    Press**. Display type is **Inter Display** at heavy weights
    (700/800) with negative tracking, giving the marketing copy a
    chunky bulletin tone. Code surfaces invert to a deep `#0d1117`
    panel with JetBrains Mono — the only place dark appears on the
    page. The closest design cousins are **Stripe** (single confident
    accent on white) and **Vercel light mode** (clean dev-tool
    minimalism), but Deno's mascot-led warmth and the mint-green
    accent (rather than blue) are unmistakably its own. Ryan Dahl's
    rebuild of Node sells itself on safety, simplicity, and developer
    happiness — and the visual language sells the same things by
    refusing to shout.
  influences:
    - name: Stripe
      role: Single confident accent on a pure-white canvas; trust-via-restraint chromatic discipline.
      url: https://stripe.com
    - name: Eric Carle / children's book illustration
      role: Hand-drawn mascot register softening the dev-tool coolness.
    - name: Vercel
      role: Clean light-mode dev-tool template; Inter Display + monochrome rigor.
      url: https://vercel.com
---

## Overview

Deno's marketing site is what happens when a TypeScript runtime is
illustrated by a children's book artist. The canvas is pure `#ffffff`,
the type is pure `#000000` inkwell, and the single chromatic accent
is the saturated mint green `#70ffaf` that lives in the wordmark
gradient. The hand-drawn sauropod mascot — Deno's literal namesake —
appears throughout the site in slightly naïve illustrations that pull
the brand away from generic dev-tool coolness and into something
warmer, almost editorial.

Where Bun leans cream-bakery and Vite leans cool-modern, Deno leans
**inkwell-illustrative**. The black is real black, the mint green is
the only saturated color, and the dinosaur does the emotional heavy
lifting that a gradient hero would do elsewhere.

## Colors

- **bg** `#ffffff` — pure paper-white canvas
- **bg-soft** `#f8f9fa` — alternate-section subtle gray
- **surface** `#f4f5f7` — card lift, sidebar panels
- **text** `#000000` — inkwell black, full strength for body and display
- **text-muted** `#5b5e64` — captions, nav metadata
- **brand** `#70ffaf` — saturated mint green, the single accent
- **brand-strong** `#34d399` — pressed state, deeper mint
- **accent-warm** `#f59e0b` — secondary warm callout, used sparingly
- **border** `#e1e3e7` — subtle gray hairline
- **code-bg** `#0d1117` — dark code surface, only place dark appears

## Typography

Display is **Inter Display** at weights 700 and 800. H1 sits at 72px
with 1.0 line-height and `-0.03em` tracking — heavier and more
negatively-tracked than typical Inter Display use, giving the
marketing a chunky bulletin tone. Body type is **Inter** at 17px on
a 1.6 line-height; documentation pages use the same Inter cut at 16px.

Code surfaces use **JetBrains Mono** at 14px on the dark `#0d1117`
panel — Deno is built around TypeScript-first execution, so code
blocks are foregrounded as primary content, not chrome.

## Layout

Container caps at 1200px with 24px gutters; sections at 96px vertical.
The grid is 12-column with frequent illustration-driven breaks — the
sauropod mascot regularly bleeds across two or three columns, treating
the layout as a picture-book spread rather than a strict grid.

## Elevation & Depth

Depth is achieved through **subtle gray layering** (`#ffffff` →
`#f8f9fa` → `#f4f5f7`) plus a single hairline border. The page
generally avoids drop shadows, leaning on tonal contrast and the
inkwell-black/pure-white opposition. The inverse `#0d1117` code block
is the dramatic depth move — a dark window cut into the white page,
the visual equivalent of the dinosaur's silhouette.

## Shapes

Radius ladder is 4 / 6 / 8 / 12, with pills at 9999. Buttons land at
8px, cards at 12px. The mascot's hand-drawn rounded geometry echoes
through the corner radii — slightly soft, never sharp-print, a
warmer rounding than Remix's grid-aligned 6px.

## Components

The defining components are the **black solid button** (`#000000` bg,
white text, 8px radius, weight 600) for primary actions, the **mint
secondary button** (`#70ffaf` bg, dark text, used for the wordmark-
aligned CTA), the **sauropod mascot illustration** as primary brand
surface, the **dark code block** with JetBrains Mono on `#0d1117`,
and the **white card with subtle gray border** for feature blocks.

## Do's and Don'ts

- **Do** treat the sauropod mascot as primary brand surface. The hand-drawn warmth is what differentiates Deno from cooler peers like Vite or Bun.
- **Do** keep the action color to either inkwell black or mint green. A second saturated accent breaks the monochrome-with-mint discipline.
- **Do** use heavy Inter Display (700/800) with hard negative tracking. The chunky display register carries the brand voice.
- **Don't** introduce dark mode as the default. Deno's identity is illustrative-light; a dark canvas erases the picture-book warmth.
- **Don't** soften the black to charcoal or near-black. The inkwell `#000000` is non-negotiable; warmer blacks read as Bun, cooler navies read as Solid.
- **Don't** mix in cool blues or purples. The brand's chromatic palette is monochrome plus mint plus the rare warm gold — no exceptions.
