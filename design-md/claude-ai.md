---
name: Claude.ai
tagline: Cream paper canvas, Anthropic Sans for body and Anthropic Serif for the headline — an AI assistant set in literary type.
author: webdesignhot
source_url: https://claude.com
spec: design.md/v1
quality: curated
featured: false
categories: [ai, saas]
tags: [light, editorial, sans, serif, spacious, warm]
preview_swatch: ['#f8f8f6', '#cd6f47', '#121212']
related: [anthropic, notion, perplexity]
description: 'Claude.ai (and the unified claude.com marketing surface) is Anthropic''s editorial calm rendered as a consumer product page. The canvas is the same `#f8f8f6` cream that anchors the parent brand, body and nav set in **Anthropic Sans** at a relaxed 17px / 400 weight, but the hero headline switches to **Anthropic Serif** at 56px / 330 weight — an unusually light serif that reads more like a New Yorker title than a software brand. Claude''s warm clay-orange `#cd6f47` carries the brand mark; primary CTAs are a near-black `#121212` rectangle with mild rounding. The whole register is "magazine essay introducing a new technology," not "tech startup launching a chatbot."'

colors:
  bg: '#f8f8f6'                # cream — observed body background
  bg-soft: '#faf9f5'           # softer module surface
  surface: '#ffffff'           # cards and overlays lift to white
  text: '#121212'              # near-black body text (observed rgb 18,18,18)
  text-muted: '#666660'        # secondary text on cream
  brand: '#cd6f47'             # Claude clay-orange brand mark
  brand-soft: '#f3e7df'        # tinted info / hover surface
  brand-strong: '#a85530'      # pressed clay
  on-brand: '#ffffff'
  cta-bg: '#121212'            # primary marketing button
  cta-text: '#f8f8f6'          # cream-tinted on-cta text
  border: 'rgba(18, 18, 18, 0.12)'
  border-soft: 'rgba(18, 18, 18, 0.06)'

typography:
  display:
    family: '"Anthropic Serif", Georgia, "Times New Roman", "Hiragino Mincho ProN", "Yu Mincho", "Songti SC", serif'
    weights: [330, 400, 500]
  body:
    family: '"Anthropic Sans", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500]
  mono:
    family: '"Anthropic Mono", "Söhne Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    h1:    { size: 56, weight: 330, family: serif, lineHeight: 1.05, tracking: 'normal' }   # observed hero
    h2:    { size: 40, weight: 400, family: serif, lineHeight: 1.1 }
    h3:    { size: 17, weight: 400, family: sans, lineHeight: 1.4 }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 12, weight: 500 }

radius:
  sm: 4
  md: 6
  lg: 8
  card: 12
  button: 8
  pill: 9999

layout:
  page-width: 1200

components:
  button-primary:
    backgroundColor: '#121212'
    textColor: '#f8f8f6'
    rounded: 8
    padding: '12px 20px'
    font: 'Anthropic Sans 500'
    use: 'Try Claude / Start building / Get the app — the single warm-black rectangle per hero.'
  button-secondary:
    backgroundColor: 'transparent'
    textColor: '#121212'
    border: '1px solid rgba(18, 18, 18, 0.18)'
    rounded: 8
    padding: '12px 20px'
    use: 'Read the docs / Talk to sales / Watch demo — outlined twin to the primary.'
  card:
    backgroundColor: '#ffffff'
    border: '1px solid rgba(18, 18, 18, 0.06)'
    rounded: 12
    use: 'Use-case tiles, capability cards, plan cards — white panels lifting off cream.'

lineage:
  summary: |
    Claude.ai inherits Anthropic's editorial register wholesale and
    polishes it for a consumer audience. The cream canvas
    (`#f8f8f6`) is the parent brand's signature backdrop — a warm
    paper white that explicitly rejects the cool whites of OpenAI
    and the dark slabs of Linear. The headline face is **Anthropic
    Serif**, set at 56px and an extraordinarily light **330 weight**
    (essentially a hairline cut), giving "Think fast, build faster"
    the airy gravity of a magazine title rather than the punch of a
    marketing headline. Body and nav use **Anthropic Sans** at 17px
    / 400 — slightly larger than the tech-default 14-16px, again a
    print-grade choice. The warm clay-orange `#cd6f47` brand mark
    quotes the same earthy palette that animates Anthropic's longer
    research essays, but Claude.ai dials it back to a single accent;
    primary CTAs default to a near-black `#121212` rectangle. The
    overall effect is "New Yorker cover story introducing AI" —
    deliberately countering the loud-launch register of competing
    consumer assistants.
  influences:
    - name: Anthropic
      role: Direct parent — Anthropic Sans, Anthropic Serif, the cream canvas, and the clay-orange accent are inherited unchanged.
      url: https://www.anthropic.com
    - name: The New Yorker
      role: Light-weight serif headline + cream paper as a register of "considered, edited, important."
      url: https://www.newyorker.com
    - name: Notion
      role: Cousin in the off-white + custom-sans editorial lineage.
      url: https://www.notion.com
---

## Overview

Claude.ai's marketing surface (now consolidated under claude.com)
opens with a cream `#f8f8f6` canvas and the headline "Think fast,
build faster" set in **Anthropic Serif** at 56px and a remarkable
**330 weight**. That hairline serif weight is the brand's most
distinctive typographic move — almost no other consumer software
brand sets a hero in a sub-400-weight serif, and it instantly
positions Claude as "for thoughtful work" rather than "for instant
answers."

Body, nav, and most secondary headings revert to **Anthropic Sans**
at 17px / 400, also a print-grade choice (most tech sites set body
at 14-16px). The clay-orange `#cd6f47` shows up only for the brand
mark and a small set of accent moments — the rest of the page lives
in cream, near-black, and a single white surface tier.

## Colors

- **bg** `#f8f8f6` — the cream Anthropic canvas, inherited from parent
- **surface** `#ffffff` — cards and overlay lift to true white
- **text** `#121212` — near-black body text, never pure black
- **text-muted** `#666660` — captions and metadata in a warm grey
- **brand** `#cd6f47` — Claude clay-orange, used sparingly for brand mark and accent stamps
- **brand-soft** `#f3e7df` — info-surface tint
- **cta-bg** `#121212` — primary marketing button
- **cta-text** `#f8f8f6` — cream-tinted on-cta label
- **border** `rgba(18,18,18,0.12)` — hairline used on outlined buttons and dividers

## Typography

The defining duet is **Anthropic Serif** for hero headlines paired
with **Anthropic Sans** for body. The serif face is set at hairline
weights (330, occasionally 400) and large sizes (40-72px); it shares
DNA with Tiempos and Söhne Buch but is custom. Body Sans runs at 17px
/ 400 with normal tracking — Anthropic deliberately avoids the
negative-tracked compressed-sans look of Stripe and Linear.

Mono code samples use **Anthropic Mono**. The headline weight choice
(330) is what most readers register subliminally as "this is
different from other AI sites" — no one else sets headlines that
light.

## Layout

Container width is moderate (~1200px) with generous gutters. The
page is organised as a series of editorial sections: a serif hero,
a 3-up capability rail, a long-form "what Claude does" essay, and a
plan comparison table. Section spacing is generous; modules don't
fight for attention. There's no aggressive sticky nav, no parallax,
no hero animation — text and modest illustration carry the page.

## Elevation & Depth

Almost none. White cards lift off the cream backdrop by value
contrast alone; the only shadow on the page is a soft warm-tinted
drop on overlay menus. Borders are 6-12% black hairlines, never
solid grey. The visual language is *paper*, not *interface*.

## Shapes

Buttons land at 8px radius — gentler than Linear's 6px, sharper than
Stripe's 12px. Cards round at 12px. Pills at 9999px appear only on
status chips and the "New" callout that sometimes sits in the nav.
The radii ladder is 4/6/8/12 with no extreme corners on either end.

## Components

The defining components are the **serif hairline-weight hero**
(Anthropic Serif at 56px / 330), the **near-black primary button**
(`#121212` on cream, 8px radius, Anthropic Sans 500), the
**outlined-rectangle secondary button** that mirrors the primary
shape with a 12% black hairline, and the **white capability card**
that lifts off the cream backdrop. The Claude logomark — a small
clay-orange star — appears in the top-left of the nav as the only
saturated mark on the page.

## Do's and Don'ts

- **Do** set hero headlines in Anthropic Serif at 330-400 weight; the hairline serif is the brand's signature.
- **Do** keep the canvas cream (`#f8f8f6`) — pure white collapses Claude into the OpenAI register.
- **Do** use clay-orange `#cd6f47` as a single small accent (logomark, occasional underline), never as a button colour.
- **Don't** use Inter, system-ui, or any default sans for headlines — Anthropic Sans + Anthropic Serif is the entire register.
- **Don't** stack heavy drop shadows; depth here is value-contrast and warm hairlines.
- **Don't** mix neon or saturated accents into the palette — the brand is paper-cream, near-black, and one warm clay note.
