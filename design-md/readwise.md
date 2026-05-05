---
name: Readwise
tagline: Pastel-orange book-club warmth — a soft cream canvas, friendly serif accents, and a tangerine accent that signals "this is your library."
author: webdesignhot
source_url: https://readwise.io
spec: design.md/v1
quality: curated
featured: false
categories: [media, saas]
tags: [light, warm, soft, serif, sans, editorial, organic]
preview_swatch: ['#fdf7ef', '#ff7a45', '#2c2418']
related: [substack, ghost, notion]
description: 'Readwise sits on a soft cream `#fdf7ef` book-club canvas with deep cocoa text (`#2c2418`), a tangerine action colour (`#ff7a45`), and a friendly Tiempos-flavoured serif duet with Inter. The result is a reading-app marketing page that wants to feel like the inside cover of a paperback, not a productivity SaaS.'

colors:
  bg: '#fdf7ef'                # warm cream canvas
  bg-alt: '#ffffff'            # pure white inside reading surfaces
  surface: '#f5ecdf'            # warmer panel
  surface-soft: '#fbf3e7'       # softest cream
  surface-deep: '#e8d9c2'       # deeper cream for accents
  text: '#2c2418'               # cocoa-brown body
  text-strong: '#1a1308'        # deeper cocoa headlines
  text-muted: '#6b5e4a'         # warm grey-brown captions
  text-soft: '#9b8d75'          # tertiary
  brand: '#ff7a45'              # tangerine action
  brand-hover: '#e8602a'        # pressed
  brand-deep: '#cc4a1a'         # deep autumn for hovers
  brand-soft: '#ffe4d4'         # tint
  accent: '#3d6b4a'             # bookish green secondary
  accent-soft: '#dfeae0'        # soft green tint
  border: '#e5d9c4'             # warm hairline
  border-soft: '#f0e7d5'        # softest divider
  on-brand: '#ffffff'

typography:
  display:
    family: '"Tiempos Headline", "Domaine Display", Georgia, "Times New Roman", serif'
    weights: [400, 500, 600]
  body:
    family: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500]
  serif:
    family: '"Tiempos Text", "Charter", Georgia, serif'
    weights: [400, 500]
  mono:
    family: '"JetBrains Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    h1:    { size: 60, weight: 500, lineHeight: 1.05, tracking: '-0.018em', family: serif }
    h2:    { size: 40, weight: 500, lineHeight: 1.15, tracking: '-0.012em', family: serif }
    h3:    { size: 24, weight: 600, lineHeight: 1.3,  tracking: '-0.005em' }
    body:  { size: 17, lineHeight: 1.6 }
    quote: { size: 22, family: serif, lineHeight: 1.45 }
    label: { size: 12, weight: 500, family: mono }

radius:
  xs: 4
  sm: 6
  md: 10
  lg: 14
  card: 16
  xl: 20
  xxl: 28
  button: 999
  pill: 9999

layout:
  container: 1180
  gutter: 32
  section-y: 110

components:
  - cream-hero-band
  - tangerine-pill-cta
  - book-cover-stack
  - highlight-card-warm
  - serif-pull-quote
  - daily-review-mockup

lineage:
  summary: |
    Readwise's marketing system reads like a paperback that learned how
    to sell software. The canvas is a deliberate book-paper cream
    (`#fdf7ef`), the text is cocoa-brown (`#2c2418`) rather than black
    so it never bites against the warm bg, and the action colour is
    a tangerine `#ff7a45` that pulls from sunset / autumn-foliage
    rather than tech-orange. Display type is a Tiempos-style book serif
    at 60px / 500 weight with negative tracking — body is plain Inter
    so the two play a quiet duet rather than a competing battle.
    Where Ghost goes sans-on-cream and Substack goes serif-on-white,
    Readwise lands in the third quadrant: serif-on-cream. The closest
    spiritual sibling is Stripe Press, but where Stripe Press is
    publishing-as-art, Readwise is publishing-as-utility — softer,
    rounder, with full pill buttons and a friendlier tone. The
    accent green (`#3d6b4a`) shows up as a secondary autumn-vegetable
    note for tags and progress indicators.
  influences:
    - name: Stripe Press
      role: Book-cream canvas treated as a serious typographic surface.
      url: https://press.stripe.com
    - name: Substack
      role: Serif-led reading-tool aesthetic.
      url: https://substack.com
    - name: Penguin / Pelican paperbacks
      role: The cream-cover book-club inheritance — orange spine, serif title, cocoa rule.
      url: https://www.penguin.co.uk
---

## Overview

Readwise's site looks the way a well-loved Penguin paperback feels.
The canvas is a soft book-paper cream (`#fdf7ef`), text is cocoa-brown
(`#2c2418`) rather than the harsh `#000` you would expect on a SaaS
site, and a tangerine `#ff7a45` carries the action — a colour pulled
from autumn leaves and Penguin spines, not from tech-orange.

Display type is a Tiempos-flavoured book serif at 60px / 500 weight
with `-0.018em` tracking. Body type is plain Inter at 17/27 — the
larger reading size signals "we are a reading app, take your time."
Pull quotes use the serif again, set at 22px on a generous 1.45
line-height. The duet of Tiempos display and Inter body is the
typographic signature.

## Colors

- **bg** `#fdf7ef` — book-paper cream canvas
- **bg-alt** `#ffffff` — pure white inside reading surfaces
- **surface** `#f5ecdf` — warmer panel for feature cards
- **text-strong** `#1a1308` — deep cocoa for headlines
- **text** `#2c2418` — body cocoa-brown, never black on cream
- **text-muted** `#6b5e4a` — warm grey-brown for captions
- **brand** `#ff7a45` — the tangerine action colour
- **brand-soft** `#ffe4d4` — tint for secondary buttons and hovers
- **accent** `#3d6b4a` — bookish autumn-green for tags
- **border** `#e5d9c4` — warm cream hairline, never grey

## Typography

Display is a **Tiempos Headline** book serif at 500 weight, sized
60px on a 63px line-height with `-0.018em` tracking. The serif
choice is what immediately distinguishes Readwise from a generic
sans SaaS — book heritage made visible. Body is **Inter** at 17px /
1.6, slightly larger than the 16px norm because Readwise is
specifically a reading product.

A monospaced JetBrains Mono shows up for "highlight count" badges
and small meta labels. There is no second sans — the system is
strictly Tiempos for display and Inter for everything else.

## Layout

The container is a tight 1180px (narrower than typical SaaS 1280)
to match a paperback reading width. Gutters are 32px and section
vertical rhythm is 110px — generous but not cinematic. Feature
cards run in a 2-up or 3-up grid, never wider, which keeps the
reading rhythm intact.

## Elevation & Depth

Depth is tonal: cream layers `#fbf3e7` → `#f5ecdf` → `#e8d9c2`.
Cards use a 1px `#e5d9c4` hairline plus a soft `0 4px 12px
rgba(60,40,15,0.05)` warm shadow. The book-cover stacks (a
recurring marketing motif of three Readwise covers floating
slightly tilted) get a stronger `0 16px 40px rgba(60,40,15,0.12)`
to read as physical paper.

## Shapes

The signature shape is the **full pill button** at `9999px` — a
tangerine `#ff7a45` rectangle with white Inter 500 label, no shadow,
no border. Cards land at 16px, hero shells at 20–28px. Rounded
throughout — the system has no square corners except for input
fields, which sit at a tighter 6px.

## Components

The defining components are the **tangerine pill CTA**, the **cream
feature card** (`#f5ecdf` panel, 16px radius, hairline border, soft
warm shadow), the **book-cover stack** (three Readwise covers
floating tilted, drop-shadowed to read as physical objects), the
**serif pull-quote** (Tiempos at 22px, set in cocoa-brown with a
2px tangerine left rule), and the **daily-review mockup** — a
phone-frame rendering of the Readwise daily highlight surface.

## Do's and Don'ts

- **Do** hold the canvas to cream `#fdf7ef`; pure white reads as Apple Notes, not as a reading app.
- **Do** use cocoa-brown `#2c2418` for body text; black on cream looks harsh and cheapens the paperback effect.
- **Do** reach for the Tiempos serif on every display heading — it is what separates Readwise from an Inter SaaS.
- **Don't** swap the tangerine for a redder orange or a yellower one; `#ff7a45` is the autumn-foliage exact and any drift kills the brand.
- **Don't** apply the brand orange to body text or backgrounds; it lives on CTAs, the logo, and small accent rules only.
- **Don't** use the serif below 22px; the book-serif loses its character at small sizes and reads as Georgia.
