---
name: Tana
tagline: Pure black canvas, a custom tanaClassic serif at 83px, and a pale-pistachio CTA — a knowledge graph dressed as a literary supplement.
author: webdesignhot
source_url: https://tana.inc
spec: design.md/v1
quality: curated
featured: false
categories: [ai, saas, dev-tools]
tags: [dark, editorial, serif, minimal, spacious, structured]
preview_swatch: ['#000000', '#e1f0bd', '#f0eded']
related: [linear, anthropic, notion]
description: 'Tana''s site is a literary supplement on a black page. The canvas is pure `#000`, the hero "Meetings that ship" sets at 83px in a custom tanaClassic serif weighted at 350 (a near-light italic-feeling axis), and the CTA is a pale-pistachio `#e1f0bd` pill on black. SF Pro carries body copy. The whole page reads like the inside of a New Yorker issue printed on dark stock — generous margin, serif headline, single restrained accent.'

colors:
  bg: '#000000'              # pure black canvas
  bg-soft: '#0a0a0a'          # nested panel
  surface: '#141414'          # card / pricing surface
  text: '#f0eded'             # primary copy on dark
  text-strong: '#ffffff'      # display copy
  text-muted: '#a8a5a3'       # secondary deck
  text-soft: '#7a7775'        # captions
  brand: '#e1f0bd'            # pale-pistachio CTA
  brand-hover: '#cde0a3'      # pressed state
  accent-italic: '#d4caa8'    # italic word color in hero subdeck
  border: '#1f1f1f'           # near-black divider
  border-soft: '#161616'
  on-brand: '#000000'

typography:
  display:
    family: '"tanaClassic", "tanaClassic Fallback", "Tiempos Headline", "Iowan Old Style", Georgia, serif'
    weights: [350, 400]
  serif:
    family: '"tanaClassic", Georgia, serif'
  body:
    family: '"SF Pro", -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", sans-serif'
    weights: [400, 500, 600]
  scale:
    h1:    { size: 83, weight: 350, lineHeight: 1.10, tracking: '-0.005em', family: display }
    h2:    { size: 42, weight: 400, lineHeight: 1.20, family: display }
    h3:    { size: 24, weight: 500, lineHeight: 1.40, family: body }
    body:  { size: 17, weight: 400, lineHeight: 1.55, family: body }
    label: { size: 12, weight: 500, family: body, tracking: '0.04em' }

radius:
  xs: 4
  sm: 8
  md: 12      # primary CTA (observed)
  lg: 16
  xl: 24
  pill: 9999

layout:
  container: 1200
  gutter: 32
  rhythm: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160]

components:
  - cta-pistachio-pill
  - hero-serif-display
  - announcement-strip
  - feature-card-dark
  - context-graph-mockup

lineage:
  summary: |
    Tana''s site borrows the literary-supplement aesthetic — generous
    margin, single serif voice, restrained accent — and prints it on
    black stock. The canvas is pure `#000`, deeper than Linear''s
    `#08090a` or Raycast''s `#07080a`, and the hero serif is custom
    (`tanaClassic`) at 83px weight 350 — that 350 axis is the design
    fingerprint, lighter than book weight, almost calligraphic, with
    italic moments that glow in a warm `#d4caa8`. Body copy is SF Pro,
    Apple''s system face — a deliberate move, since Tana is positioning
    itself as a system-level knowledge layer rather than a third-party
    tool. The single brand color is a pale-pistachio (`#e1f0bd`), used
    only on the "Get early access" CTA — closer to Aesop / Faber
    & Faber book-jacket green than the saturated brand greens of
    productivity tools. Everything else is monochrome. The result is
    that Tana reads like a New Yorker article about software more
    than a software product page.
  influences:
    - name: The New Yorker
      role: Editorial discipline — single serif voice, generous margins, restrained accent.
      url: https://www.newyorker.com
    - name: Linear
      role: Pioneered the near-black dark-mode marketing canvas; Tana pushes deeper to pure `#000`.
      url: https://linear.app
    - name: Aesop / Faber & Faber
      role: Pale-pistachio + black is a literary-luxury colorway borrowed from book jacket and apothecary design.
      url: https://www.aesop.com
---

## Overview

Tana''s site is a literary supplement on dark stock. The canvas
is pure `#000`, and the hero "Meetings that ship" sets at 83.23px
in a custom **tanaClassic** serif at weight 350 — a near-light
axis that reads as calligraphic rather than display-bold. The
italic word "in" in the deck glows in a warm `#d4caa8`, the only
chromatic move on the marketing chrome.

The single accent is a pale-pistachio (`#e1f0bd`) on the "Get
early access" pill at 12px radius. Body copy is SF Pro at 17px
on 1.55 line-height. The page reads as a magazine article more
than a software pitch.

## Colors

- **bg** `#000000` — pure black canvas, deeper than Linear or Raycast
- **bg-soft** `#0a0a0a` — first-tier nested panel
- **surface** `#141414` — card surface for pricing / feature blocks
- **text** `#f0eded` — primary copy, soft warm white
- **text-strong** `#ffffff` — display copy on cards
- **text-muted** `#a8a5a3` — secondary deck
- **brand** `#e1f0bd` — pale-pistachio CTA
- **accent-italic** `#d4caa8` — warm-cream italic word color in the hero subdeck
- **border** `#1f1f1f` — near-black divider

## Typography

Display is **tanaClassic** — a custom book serif loaded with
`tanaClassic Fallback`. The hero "Meetings that ship" sets at
83.23px weight 350 with a 91.55px line-height; the unusually
light weight at large size is what gives the page its
calligraphic feel rather than headline-grade impact.

Body is **SF Pro**, Apple''s system face, sized 17px on 1.55
line-height. The choice is positional — by using the macOS
system font for body, Tana reads as system infrastructure
rather than a third-party app. Subdeck italic words glow in
warm `#d4caa8`, the only typographic moment of color.

## Layout

Container is roughly 1200px with a 32px gutter. The page is
generous with vertical rhythm — the hero alone occupies a full
viewport, with the CTA centered below the deck. Sections
alternate between hero-style spreads and dense feature grids,
but the canvas stays pure black throughout.

## Elevation & Depth

Depth is achieved through narrow tonal layering (`#000` →
`#0a0a0a` → `#141414`), with the steps so subtle they read as
texture rather than elevation. Borders are `#1f1f1f` — almost
invisible against the black, used for spec rather than visual
weight. There are no shadows.

## Shapes

The primary CTA radius is 12px — cards step up to 16px, hero
shells to 24px. Tana avoids fully-round pills; the moderate
12px keeps the page feeling architectural rather than playful.

## Components

The signature primitives are the **pistachio pill CTA**
(`#e1f0bd` bg, black text, 12px radius), the **announcement
strip** (light grey band on top of black canvas — the only
inversion on the page), and the **hero serif display** at 83px
weight 350. Feature cards are flat `#141414` panels with
near-invisible borders.

## Do''s and Don''ts

- **Do** anchor the canvas at pure `#000` — Linear and Raycast use `#07–09`, Tana goes deeper for the literary feel.
- **Do** set the hero in tanaClassic at weight 350; the unusually-light axis at large size is the fingerprint.
- **Do** reserve pistachio (`#e1f0bd`) for the single primary CTA — never use it on body chrome or as a hover state.
- **Don''t** swap SF Pro for Inter; Apple''s system face is a positional signal that Tana is system-level.
- **Don''t** introduce a second saturated accent; pistachio is the entire chromatic palette.
- **Don''t** soften display copy to weight 400+; the calligraphic 350 reads as bold-enough on black.
