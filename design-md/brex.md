---
name: Brex
tagline: Cool greys, magenta-purple gradient, and a confident sans — fintech as fast, modern, and a little flashy.
author: webdesignhot
source_url: https://brex.com
spec: design.md/v1
quality: curated
featured: false
categories: [fintech, saas]
tags: [light, sans, structured, cool, bright]
preview_swatch: ['#f5f5f7', '#a855ff', '#0e0f12']
related: [stripe, ramp, mercury]
description: 'Brex picked the loudest position in the corporate-card category: cool grey-blue surfaces, a magenta-to-purple gradient on every primary surface, and Söhne-class sans-serif type set tight. Where Ramp whispers in editorial calm, Brex speaks in saturated chroma — gradient buttons, gradient backgrounds, and product stills lit like a magazine product shoot.'

colors:
  bg: '#ffffff'                # white canvas
  bg-soft: '#f5f5f7'           # cool-grey panel base
  bg-ink: '#0e0f12'            # near-black hero band
  bg-violet: '#1a0d2e'         # deep aubergine band, rare
  surface: '#f0f0f3'           # tile base
  surface-soft: '#f7f7f9'      # softer panel
  text: '#0e0f12'              # near-black
  text-strong: '#000000'
  text-muted: '#5a5d66'
  text-soft: '#8a8d96'
  brand: '#a855ff'             # magenta-purple, primary brand fill
  brand-strong: '#7e3df0'      # deeper purple, used as gradient stop
  brand-pink: '#ff5cad'        # pink stop in the signature gradient
  brand-hover: '#9744ee'
  brand-soft: '#f3e8ff'
  accent: '#5b6dff'             # supporting electric-blue
  accent-strong: '#3b4eff'
  border: '#0e0f1218'           # 9% near-black rule
  border-soft: '#0e0f1210'
  on-brand: '#ffffff'
  gradient-primary: 'linear-gradient(135deg, #ff5cad 0%, #a855ff 50%, #5b6dff 100%)'

typography:
  display:
    family: '"Söhne", "Söhne Breit", "Inter Display", Inter, "Helvetica Neue", Arial, sans-serif'
    weights: [500, 600, 700]
  body:
    family: '"Söhne", Inter, -apple-system, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"Söhne Mono", "JetBrains Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 72, weight: 600, lineHeight: 1.0,  tracking: '-0.03em' }
    h2:    { size: 52, weight: 600, lineHeight: 1.05, tracking: '-0.025em' }
    h3:    { size: 28, weight: 600, lineHeight: 1.2,  tracking: '-0.01em' }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 12, weight: 600, family: mono, tracking: '0.06em' }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  card: 16
  xl: 20
  button: 8
  pill: 9999

layout:
  container: 1280
  gutter: 24
  section-y: 112
  rhythm: 8

components:
  button-primary:
    bg: 'linear-gradient(135deg, #ff5cad 0%, #a855ff 60%, #5b6dff 100%)'
    color: '#ffffff'
    radius: 8
    weight: 600
    paddingX: 20
    paddingY: 12
  button-secondary:
    bg: '#ffffff'
    color: '#0e0f12'
    border: '1px solid #0e0f1218'
    radius: 8
  card:
    bg: '#ffffff'
    border: '1px solid #0e0f1210'
    radius: 16
    shadow: '0 4px 20px rgba(14,15,18,0.04)'

lineage:
  summary: |
    Brex is the fintech that picked saturation. Where Ramp commits to
    black-on-white editorialism and Mercury commits to a serif headline
    and a single mint band, Brex commits to chroma — a
    magenta→purple→indigo gradient that appears on the primary CTA,
    on hero illustration washes, on product stills, and as sectional
    accents. The neutral surfaces are cool grey-blue (`#f5f5f7`,
    `#f0f0f3`), distancing Brex from Wise's warm cream and Mercury's
    pure white. Söhne carries the type at 600 weight with `-0.03em`
    tracking — the same neo-grotesque Ramp uses, but heavier and
    more declarative. The 16px card radius, 8px button radius, and
    soft `0 4px 20px` shadow are 2026 SaaS-consensus values; what
    distinguishes Brex from any Linear-style dark surface is its
    refusal to go fully dark — the canvas stays white, and the
    gradient does the work of "modern fintech for fast companies."
    The aesthetic descends from Stripe's gradient brand era circa
    2019-2021, but Brex pushes it harder into pink-magenta where
    Stripe pulled back to a single confident blue.
  influences:
    - name: Stripe (2019-2021 gradient era)
      role: Multi-stop chromatic gradient as fintech-modernity signal.
      url: https://stripe.com
    - name: Linear / Vercel
      role: Cool-grey neutral palette and 16px card radius are inherited from this lineage.
      url: https://linear.app
    - name: Klim / Lineto (Söhne)
      role: Heavier Söhne weights (600/700) carry the more declarative, ad-grade voice.
      url: https://lineto.com
---

## Overview

Brex is the corporate-card brand that decided fintech could be a
little flashy. The page surfaces are cool greys (`#f5f5f7`,
`#f0f0f3`), the type is Söhne at 600, the H1 lands at 72px with hard
`-0.03em` tracking, and the primary CTA is a magenta→purple→indigo
gradient. That gradient shows up again in hero illustration washes
and section transitions — it's the brand-defining element.

Compared to Ramp's monochrome editorialism, Brex reads as fast,
ad-saturated, slightly louder. Compared to Mercury's editorial
serif, Brex is fully sans-grotesque. The cool-grey neutrals
distance it from warm fintechs (Wise, Mercury) and place it in the
modern-SaaS lineage that Linear and Vercel established.

## Colors

- **bg** `#ffffff` — white canvas
- **bg-soft** `#f5f5f7` — cool grey-blue surface, the brand neutral
- **bg-ink** `#0e0f12` — near-black band for hero / inverted sections
- **bg-violet** `#1a0d2e` — rare deep aubergine band for emotional emphasis
- **brand** `#a855ff` — magenta-purple, the brand's identity colour
- **brand-pink** `#ff5cad` — pink stop in the signature gradient
- **accent** `#5b6dff` — electric-blue stop, third gradient anchor
- **gradient-primary** — magenta-pink → purple → indigo at 135°
- **border** `#0e0f1218` — 9% near-black rule, hairline only

## Typography

Display is **Söhne** at 600 weight, sized 72px on a 72px line height
with `-0.03em` tracking. Heavier than Ramp's 500 — Brex is making a
statement, not curating a report. Body is the same Söhne at 16px /
24px. Mono labels at 12px with `0.06em` tracking handle eyebrows
and code. The system uses no serif at all — the brand voice is
purely sans-grotesque.

## Layout

Container caps at 1280px with 112px section padding. The 8px rhythm
follows 2026 SaaS consensus. Cards round at 16px (the modern default),
buttons at 8px. Section composition leans on cards-on-grid with
gradient washes, less on full-bleed bands.

## Elevation & Depth

Depth uses both hairlines and a soft elevated shadow
(`0 4px 20px rgba(14,15,18,0.04)`). The signature shadow is
intentionally diffuse — it gives product cards and feature tiles a
slight float without stepping into glassmorphism. Gradient washes
behind hero illustrations create depth perceptually rather than
through shadows.

## Shapes

Radii ladder: 4 / 6 / 8 / 12 / 16 / 20. Cards land at 16, buttons
at 8 — the modern Linear/Vercel pairing. Pills (9999) are reserved
for tags and metric chips. There's no archaic 6px or 4px button
radius here; Brex sits squarely in the contemporary SaaS shape
language.

## Components

The defining components are the **gradient pill button** (135°
gradient from `#ff5cad` → `#a855ff` → `#5b6dff`, 8px radius, 600
weight, white text), the **cool-grey product card** (`#ffffff` on
`#f5f5f7` panel, 16px radius, 1px hairline, soft shadow), and the
**gradient hero wash** (the same 3-stop gradient as a translucent
section background, often with rotating product stills layered
over it). Mono eyebrows in `#5a5d66` mark each section.

## Do's and Don'ts

- **Do** use the magenta→purple→indigo gradient consistently on primary CTAs; flat purple loses the brand.
- **Do** keep neutrals cool (`#f5f5f7`, `#f0f0f3`) — warm cream would shift the brand into Wise territory.
- **Do** ship Söhne at 600 for the H1 with `-0.03em` tracking — the hard tracking is half the brand voice.
- **Don't** introduce a serif — Brex is fully sans-grotesque, mixing serif breaks the modern-fintech pose.
- **Don't** flatten the gradient on the CTA; the gradient *is* the brand mark.
- **Don't** push card radius beyond 16px — larger reads as consumer app, smaller as institutional bank.
