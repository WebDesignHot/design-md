---
name: Paper Website
tagline: Hand-written paper aesthetic — a single literary serif, an off-white sheet canvas, and the conceit that a website is just notes from a notebook.
author: webdesignhot
source_url: https://paper.website
spec: design.md/v1
quality: curated
featured: false
categories: [media, saas]
tags: [light, editorial, serif, spacious, warm, soft, organic]
preview_swatch: ['#fbf8f3', '#1a1a1a', '#3d6b8a']
related: [ghost, substack, readwise]
description: 'Paper Website is the literal-paper-as-website pitch — an off-white sheet canvas (`#fbf8f3`), a single literary serif (Tiempos/EB Garamond family) carrying both display and body, narrow reading columns, and a quiet `#3d6b8a` ink-blue for links. The marketing site looks like a handwritten note that decided to also be a SaaS.'

colors:
  bg: '#fbf8f3'                # off-white paper canvas
  bg-alt: '#ffffff'            # pure white inside reading sheets
  surface: '#f3eee2'           # warmer paper panel
  surface-soft: '#f8f4ea'      # softest cream
  text: '#1a1a1a'              # near-black ink
  text-strong: '#0d0d0d'       # deep ink display
  text-muted: '#5c574e'        # warm grey-brown caption
  text-soft: '#8a8478'         # tertiary
  brand: '#3d6b8a'             # ink-blue link colour
  brand-hover: '#2d5570'       # pressed
  brand-deep: '#1f3f54'        # deep ink for hovers
  accent: '#a04a35'            # rust accent for editorial flourishes
  accent-soft: '#f0e2d8'       # tint
  border: '#e3dcc9'            # warm paper hairline
  border-soft: '#ede6d3'       # softest divider
  on-brand: '#ffffff'

typography:
  display:
    family: '"Tiempos Headline", "EB Garamond", "Sabon", Georgia, serif'
    weights: [400, 500]
  body:
    family: '"Tiempos Text", "EB Garamond", "Sabon", Georgia, "Times New Roman", serif'
    weights: [400, 500]
  serif:
    family: '"Tiempos Headline", "EB Garamond", Georgia, serif'
    weights: [400, 500]
  sans:
    family: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500]
  mono:
    family: '"iA Writer Mono", "JetBrains Mono", Menlo, monospace'
    weights: [400]
  scale:
    h1:    { size: 56, weight: 400, lineHeight: 1.1,  tracking: '-0.012em', family: serif }
    h2:    { size: 38, weight: 400, lineHeight: 1.2,  tracking: '-0.005em', family: serif }
    h3:    { size: 24, weight: 500, lineHeight: 1.35, tracking: '0',         family: serif }
    body:  { size: 18, lineHeight: 1.65, family: serif }
    quote: { size: 22, family: serif, lineHeight: 1.5 }
    label: { size: 12, weight: 500, family: mono }

radius:
  xs: 2
  sm: 4
  md: 6
  lg: 8
  card: 8
  xl: 12
  xxl: 16
  button: 6
  pill: 9999

layout:
  container: 720
  gutter: 24
  section-y: 96

components:
  - paper-sheet-hero
  - serif-running-text
  - inline-ink-link
  - margin-note-mono
  - handwritten-illustration
  - simple-publish-button

lineage:
  summary: |
    Paper Website's marketing system is the literal pitch: a website
    that looks like a sheet of paper. The canvas is `#fbf8f3` —
    warmer than Notion's paper-white, cooler than Readwise's cream,
    landing in a Moleskine off-white zone. A single literary serif
    (Tiempos / EB Garamond family) carries both display and body —
    no sans for headlines, no chromatic accent system, no gradient.
    Reading columns are tight (720px container, narrower than any
    other SaaS marketing page) and the body is set at an unusually
    large 18px on a generous 1.65 line-height. Links use a quiet
    ink-blue (`#3d6b8a`) lifted from old Penguin endpapers, and a
    rust accent (`#a04a35`) shows up sparingly for editorial
    flourishes. A monospaced iA Writer Mono appears for margin
    notes. The closest spiritual sibling is Stripe Press combined
    with iA Writer's marketing surface — Paper Website inherits
    both lineages and pushes further toward the actual sheet-of-paper
    metaphor than either.
  influences:
    - name: iA Writer
      role: Writing-as-paper philosophy and iA Writer Mono inheritance.
      url: https://ia.net/writer
    - name: Stripe Press
      role: Book-cream typographic surface and serif-led editorial discipline.
      url: https://press.stripe.com
    - name: Penguin / Sabon-era classics
      role: Endpaper-blue link colour and serif-only typographic minimalism.
      url: https://www.penguin.co.uk
---

## Overview

Paper Website is the most literal interpretation of its own pitch:
a website that wants to look like paper. The canvas is `#fbf8f3` —
a Moleskine off-white that sits between Notion's paper and Readwise's
cream. A single literary serif (Tiempos / EB Garamond) carries both
display and body, with no sans on headlines and no chromatic accent
system to compete with the type.

Reading columns are deliberately tight at 720px, narrower than any
typical SaaS marketing page. Body is set at 18px on a generous 1.65
line-height — book-grade typography. Links use a quiet ink-blue
`#3d6b8a` borrowed from Penguin endpapers, and a rust accent
(`#a04a35`) appears sparingly for the editorial pull-quote rule.

## Colors

- **bg** `#fbf8f3` — Moleskine off-white sheet canvas
- **bg-alt** `#ffffff` — pure white inside reading sheets
- **surface** `#f3eee2` — warmer paper panel for callouts
- **text-strong** `#0d0d0d` — deep ink for display
- **text** `#1a1a1a` — near-black ink for body
- **text-muted** `#5c574e` — warm grey-brown for captions
- **brand** `#3d6b8a` — ink-blue link colour, never used as fill
- **accent** `#a04a35` — rust accent for editorial rules
- **border** `#e3dcc9` — warm paper hairline

## Typography

Display is **Tiempos Headline** at 400 (book weight, not bold), sized
56px on a 62px line-height with `-0.012em` tracking. The choice of
the 400 weight is deliberate — Paper Website refuses heroic display.
Body is **Tiempos Text** at 18/30, the largest body size in the
review set. Pull quotes use the same serif at 22px with the rust
left rule.

A monospaced **iA Writer Mono** appears for margin notes, captions,
and small "Published on..." byline rows — a typographic stamp
borrowed from iA Writer's writing-tool lineage. There is no
display sans at all; even the nav uses Tiempos Text at 14px / 500.

## Layout

The container is 720px — narrower than Are.na's 1440 and Linear's
1248, and the reason is the sheet-of-paper metaphor. Section
vertical rhythm is 96px, modest by SaaS standards. The page reads
top-to-bottom as a scroll of single-column reading sheets, each
separated by a 1px `#e3dcc9` hairline, with the occasional
illustration centred in the column.

## Elevation & Depth

Depth is essentially absent. Cards (when they appear) use a soft
`0 2px 6px rgba(60,40,15,0.04)` warm shadow plus a 1px paper
hairline. The illustration crops sometimes get a slight rotational
tilt to read as physical objects on a desk, but the marketing
canvas itself is flat.

## Shapes

Radii are tight throughout — buttons at 6px, cards at 8px, hero
shells at 8–12px. The system rejects the pillowy 16–20px radius
of modern SaaS in favour of paper-stock proportions. Avatars and
badges use full pill (`9999px`) but those are the only fully
rounded shapes.

## Components

The defining components are the **paper sheet hero** (a centred
720px column on the off-white canvas, no banner image, just a
serif H1 followed by serif running text), the **inline ink-link**
(plain `#3d6b8a` underlined Tiempos), the **margin note** (small
iA Writer Mono caption set in `#5c574e` to the right of running
text), the **handwritten illustration** (sparse line drawings in
`#1a1a1a` ink, sometimes with the rust accent), and the **simple
publish button** — a tight 6px rectangle in the ink-blue with
white serif-style label.

## Do's and Don'ts

- **Do** keep reading columns to ~720px; the sheet-of-paper metaphor breaks at typical 1280px SaaS widths.
- **Do** use the serif on every text surface — display, body, nav, button labels — the absence of sans is the brand.
- **Do** treat links as plain underlined ink-blue text; there are no button-style links anywhere on the page.
- **Don't** introduce a sans display family; even a small Inter heading would dilute the paper effect.
- **Don't** pump display type past 60px or push to bold weight; Paper Website explicitly rejects heroic banners.
- **Don't** apply gradients or shadows to surfaces; depth here is paper-tonal-only and any glow reads as digital-tech.
