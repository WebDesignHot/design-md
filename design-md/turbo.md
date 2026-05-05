---
name: Turbo
tagline: Vercel-grade pure-black canvas with a magenta-to-blue Turbo gradient — the build system that wears its speed as a sweep.
author: webdesignhot
source_url: https://turbo.build
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools]
tags: [dark, sans, structured, cool, minimal, multi-theme]
preview_swatch: ['#000000', '#ff1e56', '#0096ff']
related: [vercel, vite, tailwindcss]
description: 'Turbo''s site inherits the Vercel design system''s pure-black canvas and Geist type stack, then layers in its own signature: a magenta-to-blue brand gradient sweeping from `#ff1e56` to `#0096ff` across the wordmark and key CTAs. The page reads as Vercel-grade minimalism with one allocated chromatic surface — the brand sweep — and nothing else.'

colors:
  bg: '#000000'                # pure black canvas, Vercel-grade
  bg-soft: '#0a0a0a'
  surface: '#111111'
  surface-strong: '#1a1a1a'
  text: '#ffffff'
  text-muted: '#a1a1a1'
  text-soft: '#666666'
  brand: '#ff1e56'             # Turbo magenta (left of gradient)
  brand-strong: '#e6164a'
  accent: '#0096ff'             # Turbo blue (right of gradient)
  accent-strong: '#0078cc'
  gradient-from: '#ff1e56'
  gradient-to: '#0096ff'
  glow: '#ff1e5666'
  border: '#ffffff14'           # 8% white hairline
  border-strong: '#ffffff26'
  on-brand: '#ffffff'

typography:
  display:
    family: '"Geist", Inter, -apple-system, "system-ui", sans-serif'
    weights: [500, 600, 700]
  body:
    family: '"Geist", Inter, -apple-system, "system-ui", sans-serif'
    weights: [400, 500]
  mono:
    family: '"Geist Mono", ui-monospace, "JetBrains Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.04em' }
    h2:    { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.025em' }
    h3:    { size: 28, weight: 600, lineHeight: 1.25, tracking: '-0.01em' }
    body:  { size: 16, lineHeight: 1.6 }
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
    bg: '#ffffff'
    color: '#000000'
    radius: 8
    weight: 500
  button-gradient:
    bg: 'linear-gradient(90deg, #ff1e56, #0096ff)'
    color: '#ffffff'
    radius: 8
    weight: 500
  button-ghost:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #ffffff26'
    radius: 8
  card:
    bg: '#111111'
    border: '1px solid #ffffff14'
    radius: 12
  code-block:
    bg: '#0a0a0a'
    radius: 8
    font: mono

lineage:
  summary: |
    Turbo's site is a direct expression of Vercel's design system —
    same pure `#000000` canvas, same Geist type family, same 8% white
    hairline borders, same minimalist component vocabulary — with
    one signature departure: the **magenta-to-blue brand gradient**
    that runs from `#ff1e56` to `#0096ff`. That sweep is the entire
    chromatic identity, applied to the wordmark, to occasional
    primary CTAs, and as a soft halo behind hero copy. Where Vercel's
    main marketing surface is fully monochrome with rare blue accents,
    Turbo allocates one specific gradient as its single brand surface
    and leaves everything else to Vercel's discipline. Type is **Geist**
    and **Geist Mono**, the in-house Vercel families, used at sizes
    and weights identical to Vercel's marketing — H1 at 80px with hard
    `-0.04em` tracking. The closest design cousin isn't actually a
    framework — it's **Vercel itself**, and Turbo's identity exists
    as a controlled deviation from that template, asserting product
    individuality through a single allocated gradient while keeping
    every other surface in the parent system's discipline.
  influences:
    - name: Vercel
      role: Direct lineage — Turbo lives inside Vercel's design system, sharing canvas, type, and component vocabulary.
      url: https://vercel.com
    - name: Geist (typeface)
      role: In-house Vercel sans/mono pair; engineered minimalist register.
      url: https://vercel.com/font
    - name: Stripe
      role: Diagonal-gradient hero treatment as a controlled chromatic surface.
      url: https://stripe.com
---

## Overview

Turbo's marketing site reads like a Vercel page that was given
permission to keep one piece of color. The canvas is pure `#000000`,
the type is **Geist** at the same sizes and weights as the parent
Vercel system, the borders are 8% white hairlines, and the
component vocabulary is identical. The single allocated departure
is the **magenta-to-blue brand gradient** — `#ff1e56` flowing into
`#0096ff` — used on the wordmark, on the rare gradient CTA, and as
a soft halo bleed behind hero copy.

The result is a brand identity that exists as a **controlled deviation
from Vercel's template**: same chassis, one chromatic surface
allocated. That discipline is the brand's biggest signal — Turbo is
infrastructure that belongs to Vercel, and the design language says
so explicitly while still asserting its own gradient.

## Colors

- **bg** `#000000` — pure black canvas, Vercel-grade
- **bg-soft** `#0a0a0a` — secondary panels and code blocks
- **surface** `#111111` — card lift
- **text** `#ffffff` — primary copy, full strength
- **text-muted** `#a1a1a1` — secondary copy, nav links
- **brand** `#ff1e56` — magenta endpoint of the brand gradient
- **accent** `#0096ff` — blue endpoint of the brand gradient
- **gradient** `#ff1e56 → #0096ff` — the single allocated chromatic surface
- **glow** `#ff1e5666` — soft 40% alpha magenta halo behind hero
- **border** `#ffffff14` — 8% white hairline, identical to Vercel

## Typography

Display is **Geist** at weights 600 and 700. H1 sits at 80px with
1.0 line-height and `-0.04em` tracking — identical to Vercel's
flagship hero treatment. Geist's slightly-extended grotesk character
gives the marketing the engineered minimalist register that the
parent system trades on.

Body type is **Geist** at 16px on a 1.6 line-height. Code surfaces
use **Geist Mono** at 14px — the unified type family is part of the
Vercel-system inheritance, and using a different mono (JetBrains,
IBM Plex) would break the lineage signal.

## Layout

Container caps at 1200px with 24px gutters; sections at 96px vertical.
The grid is 12-column, identical to Vercel's marketing structure,
with the same 8/4 prose-plus-screenshot feature blocks. The visual
rhythm is inherited; only the gradient is new.

## Elevation & Depth

Depth is **tonal-black layering** (`#000000` → `#0a0a0a` → `#111111`
→ `#1a1a1a`) with uniform 8% white hairlines. The signature depth
move that Turbo adds beyond the Vercel template is the **magenta-blue
gradient halo** (`#ff1e5666`) blurred behind hero copy — a soft,
non-rectangular glow that bleeds the brand gradient into the
surrounding negative space without rendering as a hard accent.

## Shapes

Radius ladder is 4 / 6 / 8 / 12, with pills at 9999. Buttons land at
8px, cards at 12px — exactly Vercel's component radii. The geometry
is grid-aligned and minimalist; nothing rounds past 12px except
status pills.

## Components

The defining components are the **white solid button** (`#ffffff`
bg, black text, 8px radius — Vercel's signature CTA), the **gradient
button** (`#ff1e56` → `#0096ff` linear sweep, the single piece of
color in the entire component library), the **ghost button** with 8%
white border, and the **dark code block** with Geist Mono on
`#0a0a0a`. Cards are `#111111` panels with 8% white hairlines —
again, identical to Vercel.

## Do's and Don'ts

- **Do** treat the magenta-blue gradient as Turbo's only allocated chromatic surface. Wordmark, gradient CTA, hero halo — and nothing else.
- **Do** stay inside Vercel's discipline for everything non-gradient. Pure-black canvas, Geist type, 8% white hairlines, 8px buttons.
- **Do** use the soft magenta halo (`#ff1e5666` blurred) behind hero copy as the brand's depth signal — it's the one place gradient bleeds into surrounding space.
- **Don't** introduce a third accent color. The gradient is the entire chromatic identity; pulling in green, yellow, or purple breaks the controlled-deviation logic.
- **Don't** swap Geist for Inter or another sans. The type lineage is part of the Vercel-system signal; breaking it weakens Turbo's positioning.
- **Don't** lighten the canvas. Pure `#000000` is non-negotiable — any softening reads as a lesser-Vercel rather than a sibling product.
