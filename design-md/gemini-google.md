---
name: Gemini (Google)
tagline: Blue-into-violet gradient, Google Sans, soft Material 3 surfaces — Google''s house style applied to a chat interface.
author: webdesignhot
source_url: https://gemini.google.com
spec: design.md/v1
quality: curated
featured: false
categories: [ai, saas]
tags: [light, minimal, sans, soft, cool, multi-theme]
preview_swatch: ['#ffffff', '#1a73e8', '#9168c0']
related: [openai, claude-ai, perplexity]
description: 'Gemini''s product surface is a textbook Material 3 application of Google''s house brand — a near-white canvas, soft tonal containers, Google Sans across the entire UI, and the signature Google blue `#1a73e8` flowing into a Gemini-specific violet `#9168c0` for the brand sparkle gradient. The aesthetic is calm, rounded, and deliberately conversational rather than tool-like.'

colors:
  bg: '#ffffff'                # canvas (Material 3 surface)
  bg-soft: '#f8fafd'           # surface-container-low
  surface: '#eef2f7'           # surface-container
  surface-high: '#dde3ea'      # surface-container-high
  surface-tinted: '#e7eef9'    # primary tonal container — blue-tinted
  text: '#1f1f1f'              # on-surface
  text-strong: '#0f0f0f'       # heading display
  text-muted: '#5f6368'        # on-surface-variant (Google grey-700)
  brand: '#1a73e8'             # Google blue 600 — primary action
  brand-hover: '#1967d2'       # blue 700
  brand-deep: '#185abc'        # blue 800
  gradient-from: '#4285f4'     # Gemini sparkle gradient start (Google blue 500)
  gradient-via:  '#9b72cb'     # gradient mid — lavender
  gradient-to:   '#d96570'     # gradient end — coral pink (the famous trio)
  accent-violet: '#9168c0'     # Gemini-specific violet
  accent-soft: '#e8f0fe'       # primary container, used for chip/pill backgrounds
  border: '#dadce0'            # Google border default
  border-soft: '#e8eaed'
  on-brand: '#ffffff'

typography:
  display:
    family: '"Google Sans", "Product Sans", "Google Sans Display", -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: '"Google Sans Text", "Google Sans", Roboto, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500]
  mono:
    family: '"Google Sans Mono", "Roboto Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 56, weight: 500, lineHeight: 1.1,  tracking: '-0.015em' }
    h2:    { size: 36, weight: 500, lineHeight: 1.15, tracking: '-0.01em' }
    h3:    { size: 22, weight: 500, lineHeight: 1.3,  tracking: '0' }
    body:  { size: 16, lineHeight: 1.55 }
    chat:  { size: 16, lineHeight: 1.6 }   # Gemini message body
    label: { size: 13, weight: 500 }

radius:
  xs: 4
  sm: 8
  md: 12
  lg: 16
  card: 24
  xl: 28
  button: 999       # Material 3 default — full pill
  pill: 9999

layout:
  container: 1024
  gutter: 16
  rhythm: 8

components:
  button-primary: 'Material 3 filled button — Google blue `#1a73e8` background, white text, full pill radius, ~14px Google Sans 500.'
  button-tonal: 'Tonal Material 3 button — `#e8f0fe` blue-tinted container, dark blue text, full pill.'
  chip: 'Suggestion chips below the prompt — pill, 1px `#dadce0` border, `#1f1f1f` text, hover fills to `#f8fafd`.'
  prompt-bar: 'Large rounded `#f8fafd` input, 28px radius, mic + image icons inside, sparkle "send" button on the right.'
  message-card: 'Chat turns sit on plain canvas with no card shell — Google''s typographic hierarchy carries the structure.'
  sparkle: '4-point star Gemini glyph drawn with the gradient (blue → lavender → coral) — the brand''s defining mark.'

lineage:
  summary: |
    Gemini is Google's house style applied to AI chat. Material 3 (the
    "Expressive" generation) provides the structural vocabulary: full
    pill buttons, 24–28px card radii, soft tonal containers in blue
    (`#e8f0fe`), and a generous 16px body on a 1.55 line-height. The
    typographic system is Google Sans top-to-bottom — Google Sans
    Display for headings, Google Sans Text for body, Google Sans Mono
    for code — replacing the older Roboto stack. The chromatic
    fingerprint is the famous Gemini sparkle gradient (`#4285f4` →
    `#9b72cb` → `#d96570`), a trio that runs through every Gemini
    product surface from the icon to the prompt-bar focus glow. The
    primary action colour stays as Google blue 600 `#1a73e8`, but the
    gradient is what makes the brand feel like *Gemini* and not just
    another Material app. Compared to ChatGPT's near-monochrome and
    Claude's warm cream, Gemini lives firmly in cool, rounded,
    Material-soft territory — the chat surface itself has almost no
    chrome, letting Google Sans and generous whitespace carry the
    conversation.
  influences:
    - name: Material 3
      role: Provides the entire shape, motion, and tonal-container vocabulary — full-pill buttons, 24px cards, soft surfaces.
      url: https://m3.material.io
    - name: Google Sans / Product Sans
      role: The typographic identity across every Google consumer surface, now in Gemini''s Display/Text/Mono cuts.
      url: https://fonts.google.com
    - name: Apple Spotlight / Siri
      role: Conversational AI surfaces with a single signature gradient mark — Gemini''s sparkle plays the same role.
      url: https://www.apple.com/siri
---

## Overview

Gemini's interface is what happens when Google's two strongest design
disciplines — Material 3 and Google Sans — are pointed at a chat
window. The canvas is near-white `#ffffff`, the chat turns sit on
plain background with no card shell, and the only persistent UI is
the prompt bar at the bottom and a soft sidebar of conversations on
the left. There is no dashboard, no toolbar, no model picker chrome
fighting the conversation.

The brand fingerprint is the **sparkle gradient** — the four-point
star icon drawn in `#4285f4 → #9b72cb → #d96570`, which appears on
the Gemini glyph, the send button, and the focus glow on the prompt
bar. Everything else stays in Google's house palette: blue 600
`#1a73e8` for primary action, soft `#e8f0fe` tonal containers for
chips and secondary actions.

## Colors

- **bg** `#ffffff` — Material surface, the calm canvas
- **bg-soft** `#f8fafd` — surface-container-low, used for the prompt-bar input
- **surface** `#eef2f7` — surface-container, hover and selected states
- **surface-tinted** `#e7eef9` — primary tonal container, blue-tinted chips
- **text** `#1f1f1f` — on-surface, primary copy and chat turns
- **text-muted** `#5f6368` — on-surface-variant (the iconic Google grey-700)
- **brand** `#1a73e8` — Google blue 600, primary CTA
- **gradient** `#4285f4 → #9b72cb → #d96570` — the Gemini sparkle, brand mark only
- **accent-violet** `#9168c0` — Gemini-specific lavender for secondary moments
- **border** `#dadce0` — Google's hairline rule

## Typography

The display is **Google Sans** at 500 weight, sized 36–56px depending
on context, with a gentle `-0.015em` tracking. Google Sans is a
geometric humanist sans descended from Product Sans — its slightly
softened terminals are what give Gemini its conversational rather
than clinical feel.

Body and chat copy are set in **Google Sans Text** (the
text-optimised cut) at 16px on a 1.55–1.6 line-height. Code blocks
shift to **Google Sans Mono**, replacing the older Roboto Mono on the
modern surfaces. The whole UI is single-family — Google Sans, Sans
Text, Sans Mono — which keeps the chat surface chromatically and
typographically coherent.

## Layout

The container max-width sits around 1024px, narrower than most
marketing layouts because the surface is a chat, not a landing page.
Gutters are 16px and the rhythm follows Material's 8px grid. The
sidebar of conversations is a fixed-width column on the left, and
the prompt bar floats above the bottom edge of the viewport with
generous whitespace around it.

Type sizes follow Material 3's display/headline/title/body/label
scale, lightly customised — H1 at 56/500, H2 at 36/500, H3 at
22/500, body at 16/400.

## Elevation & Depth

Material 3 favours tonal surfaces over shadows, and Gemini follows
suit: depth is communicated through the surface-container ladder
(`#ffffff` → `#f8fafd` → `#eef2f7` → `#dde3ea`) plus very subtle
key/ambient shadows on floating elements. The prompt bar uses the
softest possible Material 3 elevation 1 shadow when focused, and the
sidebar is separated by a 1px `#e8eaed` rule rather than elevation.

## Shapes

Radii ladder is 4/8/12/16/24/28, taken directly from Material 3's
shape scale. Buttons are full pills (`9999`), suggestion chips are
full pills, the prompt input is a 28px rounded rectangle, and chat
bubbles either go shell-less or use 16px rounded surfaces. There are
essentially no sharp corners on the Gemini surface.

## Components

The defining components are the **sparkle send button** (the gradient
applied to a 4-point star glyph), the **rounded prompt input** with
mic and image controls inline, the **suggestion chips** that float
above the prompt as conversation starters, and the **tonal pill CTA**
in `#e8f0fe` blue-tint with `#1a73e8` text. The conversation surface
itself uses no card shell — Google Sans and whitespace structure the
turns.

## Do's and Don'ts

- **Do** reserve the sparkle gradient (`#4285f4 → #9b72cb → #d96570`) for the Gemini glyph and the send action — it loses meaning if applied to backgrounds or generic CTAs.
- **Do** use Google Sans across display, body, and mono — mixing in Roboto looks like a legacy Google surface.
- **Do** lean on Material 3's tonal containers (`#e8f0fe`, `#eef2f7`) rather than borders or shadows for grouping.
- **Don't** square the buttons — full pill radius is part of Material 3''s 2024+ identity, and Gemini commits to it harder than most Google products.
- **Don't** introduce shadows on chat turns or cards; tonal surfaces are the depth language.
- **Don't** swap Google blue 600 for a different "AI" hue (purple, teal). The strategic message is *Gemini is Google*, carried by `#1a73e8`.
