---
name: Framer
tagline: Black-on-white maximalism with electric gradient floods — Inter Display at heroic sizes, motion as a first-class material.
author: webdesignhot
source_url: https://www.framer.com
spec: design.md/v1
quality: curated
featured: false
categories: [design-tools, saas]
tags: [light, dark, bright, sans, structured, multi-theme, playful]
preview_swatch: ['#000000', '#ffffff', '#0099ff']
related: [figma, webflow, vercel]
description: 'Framer''s site is a demo of itself. Black `#000` headlines hammer against pure white, then break into electric gradient floods (cyan → magenta → orange) and dark-mode hero cards. Inter Display 700 at 96px+, motion baked into every scroll, and a `#0099ff` action blue that signals "click to design." It''s a no-code tool dressed as a 2026 design magazine.'

colors:
  bg: '#ffffff'                # marketing canvas
  bg-dark: '#000000'           # hero band / dark-mode flip
  surface: '#fafafa'           # near-white panel
  surface-2: '#f2f2f2'         # second-level neutral
  surface-dark: '#0a0a0a'      # dark-mode card
  text: '#000000'              # body on white (full black, no tilt)
  text-strong: '#000000'       # display
  text-muted: '#666666'        # captions
  text-soft: '#999999'         # tertiary
  text-on-dark: '#ffffff'      # dark-mode body
  text-on-dark-muted: '#a3a3a3'
  brand: '#0099ff'             # Framer action blue
  brand-hover: '#0080d6'
  accent-cyan: '#00d2ff'       # gradient stop
  accent-magenta: '#ff00aa'    # gradient stop
  accent-orange: '#ff6b00'     # gradient stop
  accent-violet: '#7c3aed'     # gradient stop
  border: '#e5e5e5'
  border-dark: '#1f1f1f'
  on-brand: '#ffffff'

typography:
  display:
    family: '"Inter Display", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [600, 700, 800]
  body:
    family: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "Fira Code", Menlo, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 96, weight: 700, lineHeight: 0.95, tracking: '-0.045em' }
    h2:    { size: 64, weight: 700, lineHeight: 1.0,  tracking: '-0.035em' }
    h3:    { size: 32, weight: 600, lineHeight: 1.2,  tracking: '-0.018em' }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 12, weight: 500, family: mono }

radius:
  xs: 4
  sm: 6
  md: 10
  lg: 14
  card: 20
  xl: 28
  xxl: 40
  button: 999
  pill: 9999

layout:
  container: 1280
  gutter: 24
  section-y: 160

components:
  - massive-display-hero
  - gradient-flood-band
  - pill-button-blue
  - dark-mode-card
  - looping-product-video
  - feature-grid-asymmetric

lineage:
  summary: |
    Framer's marketing system is a flex of its own product. Pure black
    on pure white at heroic sizes — H1 routinely lands at 96–128px with
    `-0.045em` tracking — sits next to gradient floods sampled from a
    palette of cyan (`#00d2ff`), magenta (`#ff00aa`), orange (`#ff6b00`),
    and violet (`#7c3aed`). The two modes alternate: a black-on-white
    feature row, then a dark-mode hero with a Holo Shader gradient,
    then back to white. This contrast cycle borrows from Apple's
    keynote-as-website rhythm, but Framer turns the volume up — the
    gradients are louder, the type is heavier, the motion is everywhere.
    The action blue (`#0099ff`) pill button is the singular fixed point.
    Where Webflow uses a quieter gradient blue and Vercel uses pure
    achromatic discipline, Framer occupies the loud-design-tool slot —
    closest sibling is Linear's old marketing era, but Framer is more
    chromatically promiscuous.
  influences:
    - name: Apple
      role: Keynote-as-marketing-page rhythm and dark-mode hero band cadence.
      url: https://www.apple.com
    - name: Webflow
      role: Sibling no-code rivalry — both flex gradient + heroic type, Framer just louder.
      url: https://webflow.com
    - name: Vercel
      role: Achromatic discipline that Framer references then intentionally violates with chromatic floods.
      url: https://vercel.com
---

## Overview

Framer's site is a Framer demo. The marketing canvas oscillates between
pure white (`#ffffff`) and pure black (`#000000`) bands, stitched
together by gradient floods that sample cyan, magenta, orange, and
violet — the chromatic vocabulary of the Holo Shader feature itself.
Inter Display lands at 96px+ for the H1, weighted 700, tracked at
`-0.045em` so the headline reads as a single optical mass.

Motion is baked in. Hero strings animate on scroll, product previews
loop autoplay, and the gradient bands subtly shift hue as you progress.
The result is a marketing page that demos the tool more than it
describes it — every section is the kind of layout a Framer customer
would build.

## Colors

- **bg** `#ffffff` — the white-band canvas
- **bg-dark** `#000000` — full black for hero and dark-mode flip
- **surface** `#fafafa` — neutral panel inside light bands
- **surface-dark** `#0a0a0a` — card on a dark band
- **text** `#000000` — body and display on white (no opacity tilt)
- **text-on-dark** `#ffffff` — body on dark
- **brand** `#0099ff` — the blue action pill
- **accent-cyan / magenta / orange / violet** — the gradient quartet
- **border** `#e5e5e5` — light-band hairline
- **border-dark** `#1f1f1f` — dark-band hairline

## Typography

Display is **Inter Display** at 700, sized 96px on a 91px line-height
with `-0.045em` tracking. The headline reads compressed and almost
poster-like. Body type is plain **Inter** at 16/24, weighted 400 for
running copy and 500 for nav and button labels.

There is essentially no serif in the system — Framer's editorial
moments are carried by gradient and motion rather than by typographic
contrast. A monospaced JetBrains Mono appears for inline code and
component labels.

## Layout

The container holds at roughly 1280px with 24px gutters, but Framer
regularly bleeds hero bands edge-to-edge. Section vertical rhythm is
160px — extreme by SaaS standards, deliberately cinematic. Feature
grids are asymmetric: a 2/3 + 1/3 split, then a 1/3 + 2/3 reversed,
then a full-bleed band — which keeps the eye moving down the page.

## Elevation & Depth

Depth comes from gradient floods rather than shadows. Cards on the
white canvas use a soft `0 1px 2px rgba(0,0,0,0.04)` plus a 1px
border, but the dramatic depth is reserved for the gradient hero
bands themselves — Holo Shader-style mesh gradients that read as a
chromatic atmosphere. Dark-mode cards use `0 0 0 1px #1f1f1f` plus
an inner glow.

## Shapes

The signature shape is the **pill button** — full `9999px` radius,
electric blue, white label, used for every primary CTA. Cards land
at 20px, hero shells at 28–40px, and panels can go to 40px on the
largest blocks. The radius ladder is generous and rounded — closer
to Webflow than to Linear's tight 8px discipline.

## Components

The defining components are the **massive Inter Display hero** (96px+,
700 weight, negative-tracked), the **gradient flood band** (mesh
gradient bleeding edge-to-edge with white text floating on top), the
**electric blue pill CTA** (`#0099ff` background, white Inter 500),
and the **looping product video** — a centred Framer canvas demo that
auto-plays a real-time animation. Dark-mode cards alternate with
light-mode cards down the page, and an asymmetric feature grid breaks
the standard 12-column rhythm.

## Do's and Don'ts

- **Do** alternate light and dark bands down the page — the rhythm is what makes Framer feel cinematic rather than monolithic.
- **Do** push display type past 80px on the hero; Framer's display weight is meant to read as a poster headline.
- **Do** reach for the gradient quartet (cyan, magenta, orange, violet) for atmospheric bands — never as a button fill.
- **Don't** apply gradients to action surfaces; the blue CTA stays solid `#0099ff`, the gradient lives in atmosphere only.
- **Don't** use a square-ish radius for buttons; the pill (`9999px`) is signature and any deviation reads as a different brand.
- **Don't** combine more than two gradient stops in the same component — the Holo Shader logic is mesh, not stripe.
