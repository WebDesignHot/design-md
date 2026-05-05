---
name: Linear
tagline: Dark-canvas product surface — pure-black ground, indigo accent, custom Inter weights, pill CTAs.
author: webdesignhot
source_url: https://linear.app
spec: design.md/v1
quality: curated
featured: true
categories: [dev-tools, saas]
tags: [dark, minimal, sans, mono, dense, structured]
preview_swatch: ['#08090a', '#5e6ad2', '#f7f8f8']
related: [vercel, stripe]
description: 'Linear treats its marketing site like the product itself — same Inter Variable type at custom weights, same pure-black canvas, same pill-shaped action surfaces. The system is engineered for keyboard-driven dense interfaces; the website inherits that geometry.'

colors:
  bg: '#08090a'
  bg-marketing: '#010102'
  bg-level-1: '#0f1011'
  bg-level-2: '#141516'
  text: '#f7f8f8'
  text-secondary: '#d0d6e0'
  text-tertiary: '#8a8f98'
  brand: '#5e6ad2'
  accent: '#7170ff'
  link: '#828fff'
  border: '#23252a'
  border-strong: '#34343a'
  on-brand: '#ffffff'

typography:
  display:
    family: 'Inter Variable, "SF Pro Display", -apple-system, system-ui, sans-serif'
    weights: [400, 510, 590]
  body:
    family: 'Inter Variable, "SF Pro Display", -apple-system, system-ui, sans-serif'
    weights: [400, 510]
  mono:
    family: '"Berkeley Mono", ui-monospace, "SF Mono", monospace'
    weights: [400, 500]
  scale:
    display:    { size: 64, weight: 510, lineHeight: 1.05, tracking: -0.02 }
    h1:         { size: 48, weight: 510, lineHeight: 1.05, tracking: -0.018 }
    h2:         { size: 32, weight: 510, lineHeight: 1.15, tracking: -0.015 }
    h3:         { size: 22, weight: 510, lineHeight: 1.25, tracking: -0.01 }
    body-large: { size: 17, weight: 400, lineHeight: 1.55 }
    body:       { size: 15, weight: 400, lineHeight: 1.55 }
    body-small: { size: 13, weight: 400, lineHeight: 1.55 }
    label:      { size: 11, weight: 510, lineHeight: 1.4, tracking: 0.05, family: mono, transform: uppercase }

radius:
  sm: 4
  md: 8
  lg: 12
  xl: 16
  card: 24
  pill: 9999

layout:
  page-width: 1024
  header-height: 72

components:
  button-primary:
    backgroundColor: '#e5e5e6'
    textColor: '#08090a'
    rounded: pill
    padding: '0 12px (small) | 0 20px (large)'
    font: '13–16px Inter Variable, weight 510'
    use: 'sign-up / get-started — high-contrast inverted'
  button-ghost:
    backgroundColor: transparent
    textColor: text-secondary
    border: border
    rounded: pill
  card:
    backgroundColor: bg-level-1
    border: border
    rounded: lg

lineage:
  summary: |
    Linear is a dark-mode-native product whose marketing site refuses to
    soften for the public — it ships the same canvas, the same custom-weight
    Inter (510 medium, 590 semibold), the same pill geometry the editor uses
    for shortcuts and chips. The indigo `#5e6ad2` accent is reserved
    for emphasis only; the dominant CTA pattern flips to *near-white on
    near-black* (pure inversion of the canvas) for maximum contrast at the
    smallest possible visual cost. Berkeley Mono — a paid type license,
    not a free fallback — for code and shortcut chips. Spatial restraint is
    enforced by a 1024px max page width even on 4K displays. The site is
    a developer-tools manifesto: dense, mechanical, fast.
  influences:
    - name: Apple SF Pro Display
      role: Type fallback discipline; sets the Bay-Area-tech baseline
      url: https://developer.apple.com/fonts/
    - name: Berkeley Mono
      role: Paid licensed mono for shortcut chips and code — credibility signal
      url: https://berkeleygraphics.com/typefaces/berkeley-mono/
    - name: Vercel Geist
      role: Adjacent dev-tool typography lineage; both prove sans Inter-family for product UI
      url: https://vercel.com/font
---

## Overview

Linear is dark-canvas product design at full conviction. The marketing site
is rendered with the same components, weights, and spatial language as the
in-product editor — a deliberate choice that says "this is what your team
will live in." Pure black `#08090a` ground (not `#000` — a hair warmer to
keep the type from crunching), indigo `#5e6ad2` accent reserved for
emphasis, and the pill-shaped CTA pattern that mirrors keyboard-shortcut
chips throughout the app.

What makes it distinctive vs. nearby alternatives: most dev-tool sites
soften their dark canvases for marketing (bigger margins, lighter text,
playful illustrations). Linear refuses. The site reads like product
documentation that happened to include a sign-up form — and that's exactly
what makes it credible to the workflow-obsessed engineering teams it
targets.

## Colors

- **bg** `#08090a` — page canvas, near-black with a hint of warmth.
- **bg-level-1** `#0f1011` — first elevation tier (cards, panels).
- **bg-level-2** `#141516` — hover state, emphasized blocks.
- **text** `#f7f8f8` — body copy, headlines.
- **text-secondary** `#d0d6e0` — supporting copy.
- **text-tertiary** `#8a8f98` — metadata, captions.
- **brand** `#5e6ad2` — Linear indigo. Used for accents only — *not* CTA fills.
- **accent** `#7170ff` — brighter indigo for active states / focus rings.
- **border** `#23252a` — translucent-feeling near-black at low contrast.

## Typography

The display voice is **Inter Variable** at custom weight `510` — neither the
free `500` nor `600` Inter ships, but a custom intermediate Linear
licensed. This sub-pixel weight choice is the most distinctive type
fingerprint the system has. Body copy holds at `400`, headlines move to
`510`, key labels and brand wordmarks go up to `590`. The system avoids
true bold (`700`) entirely — hierarchy is carried by size and tracking,
not weight.

Body is the same family for visual continuity. The reading width caps at
~680px even when the page is 1024px wide; multi-column layouts appear in
documentation pages, not on marketing.

Mono is **Berkeley Mono** — a paid commercial license, not a Google Font
fallback. Chips, keyboard shortcuts, and code blocks all render in it. The
choice signals a willingness to spend on type for credibility — a small
move that the right audience reads loudly.

## Layout

Single-column hero followed by full-width sections capped at **1024px**
even on ultra-wide displays. Section rhythm uses generous 96–120px
vertical gutters between major regions. Sticky header is `72px` tall with
a backdrop-blur and a 1px bottom border; on scroll, no shadow — just the
border edge. Asymmetric splits (1.4fr / 1fr) appear where one side
deserves visual primacy (product screenshots).

## Elevation & Depth

Tonal stacking, not shadows: `bg` (`#08090a`) → `bg-level-1` (`#0f1011`) →
`bg-level-2` (`#141516`). Each step is roughly 8% lightness. Borders pick
up where tone alone is too subtle — translucent `#23252a` at low contrast.
Drop shadows appear only on floating UI primitives (popovers, tooltips,
dialogs), never on cards.

## Shapes

Six radius tiers from `4px` (chips, micro-pills) up through `8`/`12`/`16`
to `24px` for hero cards and the iconic `9999px` pill that runs through
buttons, key chips, and avatar mode. The pill is the system's signature —
once you see it on a key shortcut chip you can't unsee it on the CTAs and
status pills.

## Components

The signature primary button inverts: near-white background `#e5e5e6` with
near-black text — maximum contrast for a single eye anchor per screen.
Ghost button uses the page bg with a border. Cards use `bg-level-1` + a
border, never a shadow. Status indicators (active / blocked / done) are
small circles or pills using semantic colors with a brand-tinted dot.

## Do's and Don'ts

- **Do** treat the brand color as accent-only. Linear's indigo is a
  punctuation, not a CTA fill — invert to white-on-near-black for the
  primary action.
- **Do** use custom intermediate Inter weights (`510`, `590`) when
  available; fall back to `500` / `600` only when shipping to runtimes
  without variable-font support.
- **Do** cap page width at 1024px even on 4K displays. Wider lines hurt
  product credibility.
- **Don't** soften dark canvases for marketing — the product is dark, the
  site should be dark.
- **Don't** add drop shadows on cards. Use tonal layering or borders.
- **Don't** mix the pill (`9999px`) with sharp `0px` — the system has no
  zero-radius elements except section dividers.
