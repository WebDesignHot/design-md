---
name: Excalidraw
tagline: Literal hand-drawn whiteboard — wobbly SVG strokes, Virgil-style handwriting, and a deliberately primitive UI that turns digital sketching into nostalgia.
author: webdesignhot
source_url: https://excalidraw.com
spec: design.md/v1
quality: curated
featured: false
categories: [design-tools, dev-tools]
tags: [light, playful, sans, soft, organic, retro, brutalist]
preview_swatch: ['#fffefd', '#1b1b1f', '#6965db']
related: [tldraw, figma, hashnode]
description: 'Excalidraw is the literal hand-drawn whiteboard — every stroke is rendered with rough.js to look hand-sketched, the brand font is the Virgil handwriting cut, and the chrome stays deliberately primitive. The canvas is paper-white (`#fffefd`), text is near-black, and a single muted purple (`#6965db`) carries primary action. Where tldraw cleans up the whiteboard metaphor into polished SaaS chrome, Excalidraw doubles down on the sketchy charm — wobbly borders, hand-drawn icons, and deliberately rough rectangles.'

colors:
  bg: '#fffefd'
  bg-canvas: '#ffffff'
  surface: '#f5f5f5'
  surface-soft: '#fafafa'
  text: '#1b1b1f'
  text-muted: '#5b5b5b'
  text-soft: '#8a8a8a'
  brand: '#6965db'
  brand-hover: '#5651c5'
  brand-soft: '#e8e7fb'
  accent-yellow: '#ffe066'
  accent-pink: '#ffadad'
  accent-green: '#9be7c4'
  accent-blue: '#bde0fe'
  accent-orange: '#ffb997'
  border: '#1b1b1f1a'
  on-brand: '#ffffff'

typography:
  display:
    family: '"Excalifont", "Cascadia", "Assistant", -apple-system, "system-ui", sans-serif'
    weights: [400, 500, 700]
  body:
    family: '"Assistant", "Inter", -apple-system, "system-ui", sans-serif'
    weights: [400, 500, 700]
  hand:
    family: '"Virgil", "Caveat", "Comic Neue", cursive'
    weights: [400]
  mono:
    family: '"Cascadia", "JetBrains Mono", ui-monospace, Menlo, monospace'
    weights: [400]
  scale:
    h1:    { size: 48, weight: 700, lineHeight: 1.1, tracking: '-0.01em' }
    h2:    { size: 32, weight: 600, lineHeight: 1.2, tracking: '0' }
    h3:    { size: 20, weight: 600, lineHeight: 1.3, tracking: '0' }
    body:  { size: 16, lineHeight: 1.55 }
    hand:  { size: 18, family: hand }

radius:
  sm: 4
  md: 6
  lg: 10
  card: 8
  button: 6
  pill: 9999

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: button
    use: 'muted purple — primary action with rough-edge variant on hover'
  button-secondary:
    backgroundColor: transparent
    textColor: text
    border: text
    rounded: button
  card:
    backgroundColor: bg-canvas
    border: text
    rounded: card
    use: 'sketch card — drawn with hand-rendered border, not a clean stroke'
  shape-rect:
    backgroundColor: accent-yellow
    border: text
    rounded: sm
    use: 'on-canvas drawn primitive — wobbly rectangle with hatched fill'

lineage:
  summary: |
    Excalidraw's design philosophy is "draw it badly on purpose."
    Every shape on the canvas is rendered through rough.js, which
    introduces deliberate randomness into stroke paths so that a
    rectangle never looks machine-perfect. The brand font is Virgil
    (or its modern successor Excalifont), a handwriting cut designed
    to read as if jotted on a whiteboard. The marketing site itself
    is dressed in the same primitive chrome — paper-white canvas,
    near-black hand-drawn borders, and pastel accent fills that
    mimic dry-erase markers. A single muted purple (`#6965db`) carries
    primary action, but even that button reads slightly hand-drawn
    on hover. The lineage runs back through Paper.app and the
    earlier whiteboard-software tradition; the descendants are
    tldraw and Whimsical, which polish the metaphor. Excalidraw
    keeps it deliberately rough.
  influences:
    - name: Paper / FiftyThree
      role: Hand-drawn primitive aesthetic translated to web canvas; the original tablet-as-sketchbook lineage.
      url: https://www.fiftythree.com
    - name: rough.js
      role: The library that renders every stroke wobbly — central to the brand identity, not just a stylistic flourish.
      url: https://roughjs.com
    - name: Whiteboards / dry-erase tradition
      role: The conceptual ground; pastel marker hues, hand-printed labels, and accepted imprecision.
      url: https://en.wikipedia.org/wiki/Whiteboard
---

## Overview

Excalidraw's most striking decision is to render every visual
primitive with deliberate imprecision. Borders wobble. Rectangles
have slightly different stroke weight on each side. Arrows curl in
unexpected places. This is not an aesthetic accident — it's
rough.js doing its work, and it's the entire brand. The marketing
site extends the same philosophy: cards have hand-drawn borders,
shape-fills are dry-erase pastels, and even the H1 sits in a
handwriting-coded sans (Excalifont, the Virgil successor).

The canvas is paper-white at `#fffefd` with the slightest cream
undertone. Text is near-black `#1b1b1f`. A single muted purple
(`#6965db`) carries CTAs.

## Colors

- **bg** `#fffefd` — paper-white with cream undertone
- **text** `#1b1b1f` — near-black, used for hand-drawn borders too
- **brand** `#6965db` — muted purple, the only saturated UI accent
- **accent-yellow** `#ffe066` — dry-erase yellow marker fill
- **accent-pink** `#ffadad` — pink marker
- **accent-green** `#9be7c4` — green marker
- **accent-blue** `#bde0fe` — blue marker
- **border** `#1b1b1f1a` — 10% near-black hairline (used sparingly)

Most borders on the page are not the 10% hairline but actual
hand-drawn near-black strokes, rendered through rough.js so they
look sketched.

## Typography

Display is **Excalifont** (or Virgil) — a handwriting-coded sans
that reads as if printed by hand on a whiteboard. Sized 48px/700
with `-0.01em` tracking — the slight negative track tightens what
would otherwise feel too casual. Body type is **Assistant** at 16px
on a 1.55 line-height, a sans cut chosen for its friendly,
slightly-rounded letterforms.

## Layout

Layout is loose and casual, mirroring an actual whiteboard. Hero
content typically sits at left, with a hand-drawn illustration
(rendered live via rough.js) anchoring the right column. Sections
flow vertically with generous whitespace, and section dividers are
often hand-drawn squiggles rather than horizontal rules.

## Elevation & Depth

There is essentially no shadow in the system. Depth comes from the
hand-drawn near-black border surrounding each card — wobbly stroke
width, slight imperfection at the corners, no fill or hairline.
This is the entire elevation system.

## Shapes

Radii ladder is small: 4 / 6 / 8 / 10. Buttons land at 6px, cards
at 8px. The hand-drawn nature of borders means radius rarely reads
as a precise number — rough.js renders corners with their own
subtle imprecision.

## Components

The defining components are the **hand-drawn card** (rough.js
border in near-black, paper-white fill, no shadow), the **dry-erase
shape primitive** (yellow/pink/green/blue pastel fills with
hand-drawn borders), and the **muted-purple CTA** (`#6965db` solid
fill, 6px radius). Even the navigation reads as sketched — wordmark,
hand-drawn icons, no chrome.

## Do's and Don'ts

- **Do** render shape borders through rough.js or equivalent — the imprecision is the brand, not a flaw.
- **Do** use Virgil/Excalifont as the display family; a clean geometric sans breaks the whiteboard metaphor entirely.
- **Do** keep the accent palette to dry-erase marker hues — saturated UI blues and greens read as "polished SaaS" instead.
- **Don't** apply drop-shadows to cards; the hand-drawn border is the entire elevation system.
- **Don't** clean up the hand-drawn aesthetic into polished SaaS chrome — that's tldraw's territory, not Excalidraw's.
- **Don't** introduce a second saturated accent next to the muted purple; the chromatic restraint is what keeps the casual chrome from reading as chaotic.
