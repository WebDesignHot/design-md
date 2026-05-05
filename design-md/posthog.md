---
name: PostHog
tagline: Cream-canvas analytics with mustard-yellow CTAs and IBM Plex — open-source craft, not SaaS gloss.
author: webdesignhot
source_url: https://posthog.com
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, warm, playful, sans, mono, dense]
preview_swatch: ['#eeefe9', '#cd8407', '#23251d']
related: [supabase, vercel, plain]
description: 'PostHog is a cream-canvas, IBM-Plex-set, mustard-yellow-accented analytics product that reads like a craft-software page rather than a SaaS landing. The off-white `#eeefe9` ground, hand-drawn hedgehog mascot energy, and Plex-Sans-on-paper feel make it the most distinctive page in the analytics category.'
colors:
  bg: '#eeefe9'
  surface: '#ffffff'
  surface-alt: '#d2d3cc'
  text: '#23251d'
  text-soft: '#4d4f46'
  brand: '#cd8407'
  brand-hover: '#eb9d2a'
  brand-warm: '#f35454'
  border: 'rgba(35, 37, 29, 0.12)'
  on-brand: '#23251d'

typography:
  display:
    family: '"IBM Plex Sans Variable", "IBM Plex Sans", -apple-system, system-ui, sans-serif'
    weights: [400, 600, 800]
  body:
    family: '"IBM Plex Sans Variable", "IBM Plex Sans", -apple-system, system-ui, sans-serif'
    weights: [400, 500]
  mono:
    family: '"Source Code Pro", Menlo, Consolas, monaco, monospace'
    weights: [400]
  scale:
    h1:    { size: 60, weight: 800, lineHeight: 1.1, tracking: '-0.025em' }
    h2:    { size: 36, weight: 700, lineHeight: 1.15, tracking: '-0.02em' }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 11, weight: 500, family: mono }

radius:
  button: 6
  card: 8
  pill: 9999

lineage:
  summary: |
    PostHog is a developer analytics product that has resisted the entire
    aesthetic vocabulary of its category. The competitor surface
    (Mixpanel, Amplitude, Heap) is universally white-and-blue, sans-serif,
    and chart-forward; PostHog ships a cream `#eeefe9` canvas, **IBM Plex
    Sans Variable** at heavy weights (800 for h1), and a mustard-yellow
    `#cd8407` primary action that doubles down to coral `#f35454` for
    secondary "Debug & fix issues" buttons. The entire page reads more
    like an Itch.io game page than a SaaS analytics landing — and that is
    the product strategy. PostHog's open-source-first identity demands a
    visual register that the closed-source incumbents can't copy.
    IBM Plex Sans is the obvious type choice for that posture: an
    open-source, Apache-licensed family commissioned by IBM, used widely
    in the open-source design world. Mono is **Source Code Pro** —
    Adobe's open-source mono — completing a fully OFL/Apache type stack.
    The CTAs use a soft `6px` radius with no shadow; cards have flat
    borders; the page texture is paper rather than glass. Combined with
    the hand-drawn hedgehog mascot energy and the explicit "wizard"
    install command rendered in monospace, PostHog has built a brand that
    recruits the exact developer audience that distrusts venture-backed
    SaaS gloss.
  influences:
    - name: IBM Plex Sans (designed by Mike Abbink)
      role: Open-source IBM type family — the open-source-craft posture; Apache licensed
      url: https://www.ibm.com/plex/
    - name: Source Code Pro (Adobe)
      role: Open-source mono cousin — completes the OFL/Apache type stack
      url: https://github.com/adobe-fonts/source-code-pro
    - name: Itch.io / indie game pages
      role: Cream-paper canvas + handcrafted mascot register; rejects SaaS gloss
      url: https://itch.io
    - name: Supabase
      role: Adjacent open-source dev-tool; both treat their open-source identity as the design brief
      url: https://supabase.com
---

## Overview

PostHog runs a cream-paper canvas (`#eeefe9` — closer to newsprint than
to white) in a category dominated by stark blue-and-white SaaS
landings. The display family is **IBM Plex Sans Variable** at weight
`800` for the h1, with a mustard-yellow `#cd8407` button as the primary
CTA. A coral `#f35454` button anchors a secondary "Debug & fix issues"
panel — two warm hues sharing the page rather than a single brand
chroma. The hedgehog mascot energy and the `npx @posthog/wizard` install
chip in monospace make the page feel like an open-source README dressed
up for marketing.

What makes it distinctive: every analytics competitor reaches for trust
signals — clean white surfaces, blue accents, dense product
screenshots. PostHog reaches for *charm* — paper canvas, warm CTAs,
heavy Plex Sans, mascot. The product itself is sophisticated; the
visual register insists it's also approachable, hackable, and on the
developer's side.

## Colors

- **bg** `#eeefe9` — cream/paper canvas, the page's defining warm ground.
- **surface** `#ffffff` — pure white, used inside cards on top of the cream.
- **surface-alt** `#d2d3cc` — warmer gray for secondary buttons / chips.
- **text** `#23251d` — near-black with green undertone (matches the cream).
- **text-soft** `#4d4f46` — captions, button text, metadata.
- **brand** `#cd8407` — mustard-yellow primary CTA.
- **brand-hover** `#eb9d2a` — saturated yellow for hover states.
- **brand-warm** `#f35454` — coral secondary action ("Debug & fix issues").
- **border** `rgba(35, 37, 29, 0.12)` — low-contrast, tinted to match the canvas.

## Typography

Display is **IBM Plex Sans Variable** — IBM's open-source corporate
family, Apache-licensed — set heavy at weight `800` for the h1. Plex's
slightly mechanical character (the rounded but slightly square letter
forms) suits the engineering audience without the over-geometric stiffness
of Inter or Söhne. Tracking is tight (`-0.025em`); line-height holds at
roughly 1.1 for headlines.

Body is the same family at weight 400 / 500, set at 16/24. PostHog
runs the entire content surface in one type voice; hierarchy comes from
weight (400 vs 800) and size, not from a family change.

Mono is **Source Code Pro** — Adobe's open-source mono — used for code
blocks and the install command (`npx @posthog/wizard`). The combined
type stack is fully open-source/Apache/OFL: a deliberate signal to the
open-source developer audience.

## Layout

Multi-column dense product surface — PostHog's landing is unusually
information-dense for a top-of-funnel page. Cards stack horizontally and
vertically; the install-wizard panel sits next to a "Debug & fix issues"
panel; pricing chips, feature panels, and code samples interleave.
Content holds to roughly 1200px maximum on desktop; whitespace is
moderate, never lavish.

## Elevation & Depth

Three-tier surface: `#eeefe9` cream canvas → `#ffffff` cards → flat
borders without shadows. The CTAs themselves are flat — no inner
gradient, no shadow. Depth is communicated through canvas tone and
border, not through shadow.

## Shapes

Small radius vocabulary: `6px` on buttons and most cards, `8px` on
larger panels. The pill (`9999px`) is reserved for status chips and
small badges. PostHog uses *partial* radius (`6px 6px 0px 0px` /
`0px 0px 6px 6px`) on stacked panels — the "Debug & fix issues" tab
attaches to the panel below it without a seam, signaling tight
information density.

## Components

The signature CTA is the mustard-yellow `#cd8407` button at `6px`
radius, weight 400, no shadow. The secondary coral `#f35454` is reserved
for "Debug" / "Issues" actions — the function of the color matches the
semantic register. Code chips (e.g. `npx @posthog/wizard`) render in
white-on-canvas with `Source Code Pro`. Tabbed panels use partial
radii to attach without seams. The hand-drawn hedgehog mascot recurs
throughout illustrations, anchoring the open-source-craft register.

## Do's and Don'ts

- **Do** use a cream/paper canvas (`#eeefe9`-class) instead of pure
  white if you're targeting the open-source developer audience. The
  warmth is the differentiator.
- **Do** pair a heavy display weight (800) with a tight tracking
  (-0.025em). IBM Plex earns the bold; lighter sans wouldn't.
- **Do** assign secondary actions a different warm hue (coral `#f35454`)
  rather than a desaturated gray. PostHog uses two warm CTAs in
  conversation.
- **Don't** retreat to white-canvas + blue-accent because the analytics
  category does. The category's uniformity is PostHog's opportunity.
- **Don't** add SaaS gloss — gradients, glass, animated charts. Flat
  cards on cream are the entire elevation language.
- **Don't** drop the open-source type stack (Plex / Source Code Pro)
  for a closed commercial alternative. The license is part of the
  brand.
