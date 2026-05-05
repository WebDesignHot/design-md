---
name: SolidJS
tagline: Deep navy with a blue-to-cyan brand gradient — reactive primitives dressed as a circuit diagram.
author: webdesignhot
source_url: https://www.solidjs.com
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools]
tags: [dark, sans, structured, cool, multi-theme]
preview_swatch: ['#0c1424', '#2c4f7c', '#66e6ff']
related: [vite, vercel, tailwindcss]
description: 'SolidJS leans into a deep `#0c1424` navy with a brand gradient that runs from a saturated `#2c4f7c` blue into a glowing `#66e6ff` cyan — the two-tone palette that lives in the Solid wordmark itself. The site reads like a circuit diagram: dense, technical, blue-on-blue-on-cyan, with code blocks treated as primary content rather than chrome.'

colors:
  bg: '#0c1424'                # deep technical navy
  bg-soft: '#142037'
  surface: '#1a2640'
  surface-strong: '#26334d'
  text: '#f0f4fa'
  text-muted: '#a8b3c7'
  text-soft: '#7a8499'
  brand: '#2c4f7c'             # Solid deep blue (wordmark left)
  brand-strong: '#1d3a5f'
  accent: '#66e6ff'            # Solid bright cyan (wordmark right)
  accent-strong: '#33d4ff'
  gradient-from: '#2c4f7c'
  gradient-to: '#66e6ff'
  border: '#ffffff14'
  border-strong: '#ffffff26'
  on-brand: '#ffffff'
  on-accent: '#0c1424'
  warning: '#fbbf24'

typography:
  display:
    family: 'Gordita, Inter, -apple-system, "system-ui", sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Inter, -apple-system, "system-ui", "Segoe UI", sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "Fira Code", ui-monospace, Menlo, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.02em' }
    h2:    { size: 44, weight: 700, lineHeight: 1.1,  tracking: '-0.015em' }
    h3:    { size: 26, weight: 600, lineHeight: 1.3,  tracking: '0' }
    body:  { size: 16, lineHeight: 1.65 }
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
  section-padding: 80
  grid: 12

components:
  button-primary:
    bg: 'linear-gradient(90deg, #2c4f7c, #66e6ff)'
    color: '#ffffff'
    radius: 8
    weight: 600
  button-ghost:
    bg: 'transparent'
    color: '#66e6ff'
    border: '1px solid #66e6ff66'
    radius: 8
  card:
    bg: '#1a2640'
    border: '1px solid #ffffff14'
    radius: 12
  code-block:
    bg: '#142037'
    radius: 8
    font: mono

lineage:
  summary: |
    SolidJS's identity is one of the most literal logo-to-palette
    translations in the framework world. The wordmark is two-tone —
    a deep blue `#2c4f7c` on the left, a bright cyan `#66e6ff` on the
    right — and the entire site is scaled around that exact gradient.
    The canvas is `#0c1424`, a navy deep enough to read as technical
    rather than fashionable; cards lift to `#1a2640`, code blocks sit
    on `#142037`. Everything is a tonal step in the same blue family,
    a discipline that reads as **engineering-document**, not marketing.
    Type pairs Gordita (a slightly-rounded geometric sans) with Inter
    for body, and code uses JetBrains Mono — the dev-tool default.
    The closest design cousin is **MDN at night** or a hardware
    company's developer portal: dense, technical, blue-on-blue, with
    the only chromatic departure being the cyan glow that lights up
    hover states and CTAs. Solid sells itself on raw performance and
    fine-grained reactivity, and the site behaves the same way: no
    decoration that doesn't earn its place.
  influences:
    - name: MDN Web Docs (dark mode)
      role: Dense technical documentation aesthetic; navy canvas + cyan link.
      url: https://developer.mozilla.org
    - name: Stripe Docs
      role: Code-as-content treatment; mono blocks foregrounded as primary surface.
      url: https://stripe.com/docs
    - name: Cloudflare
      role: Engineering-document register — blue-tonal palette signaling infrastructure.
      url: https://www.cloudflare.com
---

## Overview

SolidJS's site is the most literal logo-to-design-system translation
in the framework space. The wordmark is a two-tone gradient — deep
blue `#2c4f7c` flowing into bright cyan `#66e6ff` — and the entire
marketing surface is built from that exact pair. The canvas is
`#0c1424`, a deep technical navy; cards lift to `#1a2640`; code
blocks sit on `#142037`. Every surface is a tonal step in the same
blue family, and the cyan only appears as the brand-gradient endpoint,
on hover states, and on the wordmark itself.

The result reads as **engineering documentation rendered as marketing**
— dense, blue-on-blue, with code treated as primary content rather
than chrome. Where Astro feels cosmic and Nuxt feels Vue-warm, Solid
feels infrastructural, like the developer portal of a chip manufacturer.

## Colors

- **bg** `#0c1424` — deep technical navy, the canvas of every section
- **bg-soft** `#142037` — secondary panel, code-block surface
- **surface** `#1a2640` — card lift
- **text** `#f0f4fa` — primary, near-white with slight cool tint
- **text-muted** `#a8b3c7` — secondary copy, nav metadata
- **brand** `#2c4f7c` — deep blue end of the wordmark gradient
- **accent** `#66e6ff` — bright cyan, the gradient's glowing endpoint
- **gradient** `#2c4f7c → #66e6ff` — the brand's signature pairing
- **border** `#ffffff14` — 8% white hairline
- **on-brand** `#ffffff` — text on solid brand fills

## Typography

Display is **Gordita** (or Inter as fallback) at weights 600 and 700.
Gordita is a slightly-rounded geometric sans, more Avenir than Inter
in feel — the rounder counters give the marketing a softer technical
register, distinct from the Geist/Inter monoculture. H1 sits at 64px
with `-0.02em` tracking and 1.05 line-height.

Body type is **Inter** at 16px on a generous 1.65 line-height,
signaling "read this carefully." Code surfaces use **JetBrains Mono**
at 14px on the `#142037` panel — the dev-tool default mono, deliberately
not a custom face, because Solid's brand voice is "we are infrastructure,
not fashion."

## Layout

Container caps at 1200px with 24px gutters; sections at 80px vertical
padding — slightly tighter than Astro or Nuxt, in keeping with the
documentation register. The grid is 12-column with frequent two-pane
layouts (prose / code) that mirror Stripe Docs.

## Elevation & Depth

Depth is achieved through **tonal-blue stepping**: `#0c1424` →
`#142037` → `#1a2640` → `#26334d`, each step roughly 6% lighter than
the one below. Borders are uniform 8% white hairlines; shadows are
absent. The signature depth move is a soft cyan glow (`#66e6ff` at
20–30% alpha) behind hover states and primary CTAs, mimicking the
emissive feel of an oscilloscope trace.

## Shapes

Radius ladder is 4 / 6 / 8 / 12, with pills at 9999. Buttons land at
8px, cards at 12px. The geometry is grid-aligned and modest — nothing
rounds past 12px except status pills, in keeping with the engineering-
document register.

## Components

The defining components are the **gradient button** (`#2c4f7c` →
`#66e6ff` linear gradient, 8px radius, white text), the **cyan-glow
ghost button** for secondary actions (transparent fill, cyan border,
soft halo on hover), the **code block on `#142037`** with JetBrains
Mono — frequently the largest visual element on a page, in keeping
with Solid's documentation-first ethos — and the **two-tone wordmark
glyph** that anchors the navigation. Cards are tonal-blue panels with
8% white hairlines.

## Do's and Don'ts

- **Do** scale the entire palette around the wordmark gradient. Every blue should be a tonal step between `#2c4f7c` and `#66e6ff`.
- **Do** treat code blocks as primary content. SolidJS is sold on reactive primitives; mono blocks should feel like the headline, not the footnote.
- **Do** use cyan glow (`#66e6ff` at low alpha) for hover states and CTA halos — it's the brand's depth signal.
- **Don't** introduce a non-blue accent. Greens, oranges, and warm hues break the engineering-document register.
- **Don't** soften the canvas with a purple tilt. The exact `#0c1424` is what separates Solid from Astro and Linear; warmer or more colorful navies flatten the brand.
- **Don't** use Gordita below 500 weight for headlines; the rounded geometric character lives in the heavier cuts.
