---
name: Hashnode
tagline: Developer publishing platform — dark navy canvas, electric blue accent, Inter sans + JetBrains Mono code chrome.
author: webdesignhot
source_url: https://hashnode.com
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools, media, social]
tags: [dark, sans, mono, cool, structured]
preview_swatch: ['#0f1117', '#2962ff', '#ffffff']
related: [vercel, linear]
description: 'Hashnode is what happens when a developer publishing platform refuses to look like Medium. Dark navy canvas (`#0f1117`), electric blue `#2962ff` brand applied liberally to CTAs and link surfaces, Inter for UI, JetBrains Mono for code blocks — the design vocabulary of a dev tool, not a magazine.'

colors:
  bg: '#0f1117'
  bg-elev-1: '#161a23'
  bg-elev-2: '#1f2937'
  surface-light: '#ffffff'
  text: '#ffffff'
  text-soft: '#a8b1bf'
  text-muted: '#6b7280'
  brand: '#2962ff'
  brand-hover: '#1d4ed8'
  brand-tint: 'rgba(41, 98, 255, 0.12)'
  border: 'rgba(255, 255, 255, 0.08)'
  border-strong: 'rgba(255, 255, 255, 0.15)'
  on-brand: '#ffffff'
  success: '#10b981'

typography:
  display:
    family: 'Inter, "Inter Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    weights: [400, 500, 600, 700, 800]
  body:
    family: 'Inter, "Inter Variable", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    weights: [400, 500]
  mono:
    family: '"JetBrains Mono", "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    weights: [400, 500]
  scale:
    display:    { size: 64, weight: 800, lineHeight: 1.05, tracking: '-0.025em' }
    h1:         { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.02em' }
    h2:         { size: 32, weight: 700, lineHeight: 1.2,  tracking: '-0.015em' }
    h3:         { size: 22, weight: 600, lineHeight: 1.3 }
    body-large: { size: 18, weight: 400, lineHeight: 1.6 }
    body:       { size: 16, weight: 400, lineHeight: 1.6 }
    body-small: { size: 14, weight: 400, lineHeight: 1.5 }
    label:      { size: 12, weight: 500, lineHeight: 1.3, family: mono }

radius:
  sm: 6
  md: 8
  lg: 12
  card: 12
  button: 8
  pill: 9999

layout:
  page-width: 1280
  reading-width: 720
  header-height: 72

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: button
    padding: '10px 20px'
    font: 'Inter 14px / weight 600'
    use: 'Start writing, Sign up — solid blue on dark canvas'
  button-secondary:
    backgroundColor: bg-elev-1
    textColor: text
    border: border-strong
    rounded: button
  card:
    backgroundColor: bg-elev-1
    border: border
    rounded: card
    use: 'Article preview, blog tile — slight elevation via tone, hairline border'

lineage:
  summary: |
    Hashnode positioned itself against Medium's editorial tradition by
    embracing **developer aesthetic**: dark navy canvas, electric
    `#2962ff` blue (Material Design's blue-A700), Inter for UI, and
    JetBrains Mono for code. Where Medium hides code blocks and
    privileges prose, Hashnode treats them as the reason the platform
    exists — code blocks are foreground, syntax-highlighted with
    Prism, and given more vertical breathing room than the prose
    itself. The platform shipped with a built-in Markdown editor and
    a CLI; the marketing site echoes that with a code-first
    information architecture. The dark canvas at `#0f1117` is
    deliberately softer than pure black — closer to a code editor
    background than a marketing page — to keep code blocks legible
    without reading like a designer's mood board. Brand blue is
    applied liberally where Linear or Vercel would withhold it: CTAs,
    link surfaces, focus rings, hover states. The result is a
    dev-publishing platform that visually announces *this is for
    developers, not for writers who code*.
  influences:
    - name: GitHub dark theme
      role: Navy-not-black canvas with blue accent — the dev-tool dark default
      url: https://primer.style/foundations/color
    - name: JetBrains Mono
      role: Mono of choice for code blocks — open-source, designed for IDEs
      url: https://www.jetbrains.com/lp/mono/
    - name: Material Design Blue A700
      role: "`#2962ff` is Google Material's vibrant blue — chosen for max signal"
      url: https://m2.material.io/design/color/the-color-system.html
---

## Overview

Hashnode is a developer-first publishing platform that treats code
blocks as the primary citizen of the page. Dark navy canvas
`#0f1117`, electric `#2962ff` blue brand, Inter for UI, JetBrains
Mono for code. The reading experience inverts Medium's editorial
hierarchy: prose and meta serve the code, not the other way around.

What makes it distinctive vs. nearby alternatives: dev.to runs a
light canvas with a more playful palette; Medium runs serif body on
white. Hashnode picks the third lane — dark canvas, monospace-aware
typography hierarchy, and a single bright blue CTA color that's
unambiguous against the navy ground. The platform reads as a
GitHub-adjacent product rather than a publishing-platform product.

## Colors

- **bg** `#0f1117` — navy-not-black canvas, softer than `#000` for
  long-form code reading.
- **bg-elev-1** `#161a23` — first elevation tier (cards, sidebars).
- **bg-elev-2** `#1f2937` — code block fills, hover surfaces.
- **text** `#ffffff` — body, headlines (full white for max contrast
  on dark).
- **text-soft** `#a8b1bf` — meta, post date, byline.
- **brand** `#2962ff` — Hashnode blue. Applied generously to CTAs,
  links, focus rings.
- **border** `rgba(255, 255, 255, 0.08)` — translucent hairlines.

## Typography

The display voice is **Inter** at weight 700–800 — the open-source
sans that became the default UI face for dev tools post-2018.
Headlines compress with `-0.02em` tracking and 1.1 line-height.
Body holds at 16–18px regular on 1.6 line-height — slightly more
generous than typical UI density to support long-form reading.

Mono is **JetBrains Mono** — designed by JetBrains specifically for
code editors, with explicit ligature support and weight balanced for
on-screen legibility at small sizes. Code blocks in articles render
in this font with Prism syntax highlighting and a `bg-elev-2` fill.

Labels and inline UI metadata (read time, tag chips, post status)
shift to JetBrains Mono at 12px weight 500 — a small move that
reinforces the developer-platform identity even in non-code contexts.

## Layout

Page caps at **1280px** with a **720px** reading column for posts.
Header is `72px` tall, sticky, with a translucent dark fill and a
hairline bottom border on scroll. Article pages typically run a
2-column layout with a sticky table-of-contents sidebar at viewport
widths above 1024px — directly borrowed from MDN/dev-docs UI.

## Elevation & Depth

Tonal stacking, not shadows. `bg` (`#0f1117`) → `bg-elev-1`
(`#161a23`) → `bg-elev-2` (`#1f2937`). Code blocks always sit on
`bg-elev-2` with a subtle border to distinguish them from quote
blocks. Drop shadows appear only on overlay surfaces (modals,
dropdowns) — for marketing surfaces and content cards, tone alone
carries the structure.

## Shapes

Three radius tiers: **6px** (chips, badges), **8px** (buttons,
inputs, code blocks), **12px** (cards, modals). The pill `9999px`
appears on tag chips and notification badges. There are no zero-
radius elements except section dividers and full-bleed code blocks.
The geometry is consistent with general dev-tool conventions —
gentler than YC's brutalism, sharper than Medium's pill chrome.

## Components

The signature primary button: `#2962ff` background, white text, 8px
radius, `10px 20px` padding, Inter 14px weight 600. Article preview
tiles use `bg-elev-1` with a translucent border, cover image
top-cropped to 16:9, title at 18px weight 600, byline + meta in
`text-soft` at 13px. Code blocks render full-bleed inside reading
columns with a copy-to-clipboard chip in the top-right corner.

## Do's and Don'ts

- **Do** treat code blocks as primary content. `bg-elev-2` fill,
  JetBrains Mono, syntax highlight, copy chip.
- **Do** apply `#2962ff` blue liberally on CTAs and links — the
  brand is more permissive than Linear's accent-only philosophy.
- **Do** use Inter weight 700–800 for headlines on dark canvas.
- **Don't** drop to pure `#000` for backgrounds. The navy `#0f1117`
  is calibrated for long-form code legibility.
- **Don't** mix serif body into the reading view. Hashnode's
  identity is sans + mono, not editorial.
- **Don't** use heavy drop shadows. Tonal layering carries
  elevation.
