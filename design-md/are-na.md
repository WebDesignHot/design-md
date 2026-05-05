---
name: Are.na
tagline: Bare grey-and-orange minimalism — a single Helvetica-class sans, hairline borders, and a stubborn refusal to optimise for engagement.
author: webdesignhot
source_url: https://www.are.na
spec: design.md/v1
quality: curated
featured: false
categories: [social, media]
tags: [light, minimal, sans, dense, structured, brutalist]
preview_swatch: ['#fafafa', '#000000', '#ff6600']
related: [medium, github, hashnode]
description: 'Are.na is the literal-minimal social network — a near-white `#fafafa` canvas, plain `#000` text, hairline `#dddddd` borders, and a single `#ff6600` orange that signals link, action, and brand all at once. The site uses one sans (Helvetica/Inter-class), no shadows, no gradients, no rounded corners — a refusal-of-design that has become its own design.'

colors:
  bg: '#fafafa'                # near-white canvas
  bg-alt: '#ffffff'            # pure white for blocks
  surface: '#f1f1f1'           # subtle panel
  surface-hover: '#e8e8e8'     # hover state
  text: '#000000'              # body, plain black
  text-strong: '#000000'       # display, same plain black
  text-muted: '#666666'        # captions, meta
  text-soft: '#999999'         # tertiary
  brand: '#ff6600'             # signature Are.na orange
  brand-hover: '#e85a00'       # pressed
  brand-soft: '#fff1e6'        # tint for hovers
  link: '#ff6600'              # links use brand
  border: '#dddddd'            # hairline divider
  border-soft: '#eeeeee'       # softest line
  on-brand: '#ffffff'

typography:
  display:
    family: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500]
  body:
    family: '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400]
  mono:
    family: '"JetBrains Mono", Menlo, Monaco, "Courier New", monospace'
    weights: [400]
  scale:
    h1:    { size: 32, weight: 500, lineHeight: 1.2,  tracking: '-0.005em' }
    h2:    { size: 24, weight: 500, lineHeight: 1.25, tracking: '0' }
    h3:    { size: 18, weight: 500, lineHeight: 1.35, tracking: '0' }
    body:  { size: 14, lineHeight: 1.45 }
    label: { size: 12, weight: 400, family: mono }

radius:
  xs: 0
  sm: 0
  md: 0
  lg: 0
  card: 0
  xl: 0
  xxl: 0
  button: 0
  pill: 0

layout:
  container: 1440
  gutter: 16
  section-y: 64

components:
  - hairline-grid-block
  - orange-link
  - flat-button
  - channel-tile
  - feed-row
  - search-input-flat

lineage:
  summary: |
    Are.na's design refuses every modern SaaS convention. There is no
    gradient, no rounded corner, no shadow, no chromatic accent system
    — just a near-white `#fafafa` canvas, plain black text, a 1px
    `#dddddd` hairline grid, and one orange (`#ff6600`) that does
    everything from link colour to logo. Type is a single Helvetica /
    Inter-class sans at small sizes — H1 lands at a modest 32px, body
    at 14px. The result is a site that reads like an early-2000s
    web reference (think Lialina-era net-art or pre-redesign Pitchfork)
    in a 2026 context — a deliberate counter-position against engagement-
    optimised social products. The closest visual sibling is Craigslist
    in spirit and old-school MoMA exhibition catalogues in execution.
    Where every other social network reaches for warmth, motion, or
    chromatic systems, Are.na goes the other direction — and the
    consistency of that refusal is the brand.
  influences:
    - name: Craigslist
      role: Information-density-over-aesthetic ethos and orange-link inheritance.
      url: https://craigslist.org
    - name: MoMA / exhibition catalogues
      role: Hairline grid, plain sans, no chromatic flourish — an institutional minimalism.
      url: https://www.moma.org
    - name: Olia Lialina / Net Art
      role: Browser-native, anti-skeuomorphic refusal-of-design lineage.
      url: http://art.teleportacia.org
---

## Overview

Are.na's website is built on a single principle: do nothing
unnecessary. The canvas is `#fafafa`, the text is plain `#000000`,
the divider is a 1px `#dddddd` hairline, and the only chromatic
event is the signature orange `#ff6600` that does triple duty as
link colour, brand colour, and CTA fill. There is no gradient,
no rounded corner, no drop shadow, no atmospheric glow.

Type is a single sans — Inter / Helvetica-class — set at unusually
small sizes for a 2026 site. The H1 lands at 32px / 500 weight,
body at 14px / 1.45 line-height. Every block sits flush against
its hairline neighbour. The result reads as an information browser
rather than a marketing page — and the refusal of marketing aesthetics
is itself the marketing.

## Colors

- **bg** `#fafafa` — near-white canvas, never pure white at full-page
- **bg-alt** `#ffffff` — pure white inside content blocks
- **surface** `#f1f1f1` — subtle panel for hover states
- **text** `#000000` — plain black, no opacity tilt
- **text-muted** `#666666` — captions and meta
- **text-soft** `#999999` — channel counts, tertiary timestamps
- **brand** `#ff6600` — the signature orange, link + CTA + logo
- **brand-soft** `#fff1e6` — softest tint, used sparingly
- **border** `#dddddd` — the 1px hairline that defines every block
- **border-soft** `#eeeeee` — softest divider for sub-grids

## Typography

The whole site runs on a single sans — Inter when it is loaded,
Helvetica Neue or Arial as fallback — at one weight (500) for
headings and one weight (400) for body. There is no display family,
no serif, no opinion. The H1 caps at 32px, which is small for a
2026 hero and intentionally so — Are.na's hero is not a banner,
it is the search input.

A monospaced JetBrains Mono appears for channel slugs, timestamps,
and the occasional URL — a typewriter-grade move that ties the
visual language to indexing and archives rather than to feeds.

## Layout

The container is wide (1440px) but the gutter is tight (16px) and
the section vertical rhythm is unusually compact (64px between
bands). The grid is dense by design — channels stack as small
hairline-bordered tiles, and feed rows pack tightly. Where Linear
or Stripe leaves whitespace as breathing room, Are.na fills the
viewport with content and trusts the user to read.

## Elevation & Depth

There is no elevation. No shadows. No glows. Depth is achieved
purely through the 1px `#dddddd` hairline and through the contrast
between `#fafafa` (canvas) and `#ffffff` (block fill). On hover,
the surface flips to `#f1f1f1` — that is the entire interaction
vocabulary.

## Shapes

Every radius in the system is `0`. Buttons, inputs, channel tiles,
images, modals — all square corners. This is the most consistent
typographic and shape decision on the modern web. The pill, the
rounded card, the soft button — none of them exist on Are.na. The
square corner is the brand.

## Components

The defining components are the **hairline grid block** (1px
`#dddddd` border, square corners, white fill, content packed flush),
the **orange link** (plain `#ff6600` text, no underline by default,
underline on hover), the **flat orange button** (`#ff6600` fill,
white plain-Inter label, square corners, no shadow), and the
**channel tile** — a small square card showing channel name, owner,
and a count of blocks, packed into dense grids of 8–12 across.
The search input is a single hairline-bordered field that anchors
the page.

## Do's and Don'ts

- **Do** keep every radius at `0`; the square corner is non-negotiable.
- **Do** treat the orange `#ff6600` as the only chromatic event — link, button, logo all share it.
- **Do** pack content densely; whitespace is a luxury Are.na refuses on purpose.
- **Don't** add drop shadows or gradients; depth here is hairline-and-tone, never elevated.
- **Don't** scale display type past 32px; the small-hero is the brand and an 80px banner reads as a different product.
- **Don't** introduce a second accent hue; even hover states stay within the orange + neutral system.
