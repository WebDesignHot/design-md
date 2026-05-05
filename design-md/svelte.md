---
name: Svelte
tagline: Hot orange `#ff3e00` against clean white with a confident sans — the framework that wears its flame as a wordmark.
author: webdesignhot
source_url: https://svelte.dev
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools]
tags: [light, minimal, sans, structured, warm, bright]
preview_swatch: ['#ffffff', '#ff3e00', '#15191e']
related: [vite, vercel, tailwindcss]
description: 'Svelte''s site is built around a single screaming-hot accent — the `#ff3e00` orange from the flame logo — set against a clean white canvas and Inter-grade sans body type. Where most frameworks hedge with gradients, Svelte commits: one color, one face, one wordmark, every surface scaled around that flame.'

colors:
  bg: '#ffffff'
  bg-soft: '#f9f9f9'
  surface: '#f4f4f4'
  surface-strong: '#ededed'
  text: '#15191e'              # near-black body, slight blue undertone
  text-strong: '#000000'
  text-muted: '#5b5b5b'
  brand: '#ff3e00'             # the iconic Svelte flame orange
  brand-hover: '#e63600'
  brand-soft: '#fff1ec'        # tinted backgrounds, callouts
  accent: '#40b3ff'             # documentation link blue
  border: '#0000001a'
  border-strong: '#00000033'
  on-brand: '#ffffff'
  code-bg: '#0d1117'           # dark code surface inside light page

typography:
  display:
    family: '"Overpass", Inter, -apple-system, "system-ui", sans-serif'
    weights: [500, 600, 700, 900]
  body:
    family: 'Inter, -apple-system, "system-ui", "Segoe UI", sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"Fira Mono", ui-monospace, Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 80, weight: 900, lineHeight: 1.0,  tracking: '-0.025em' }
    h2:    { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.015em' }
    h3:    { size: 28, weight: 700, lineHeight: 1.25, tracking: '-0.005em' }
    body:  { size: 17, lineHeight: 1.6 }
    small: { size: 14, lineHeight: 1.5 }
    code:  { size: 14, family: mono, lineHeight: 1.55 }

radius:
  xs: 2
  sm: 4
  md: 6
  lg: 8
  card: 8
  pill: 9999

layout:
  container: 1200
  gutter: 24
  section-padding: 96
  grid: 12

components:
  button-primary:
    bg: '#ff3e00'
    color: '#ffffff'
    radius: 6
    weight: 600
    padding: '12px 20px'
  button-ghost:
    bg: 'transparent'
    color: '#15191e'
    border: '1px solid #00000033'
    radius: 6
  card:
    bg: '#ffffff'
    border: '1px solid #0000001a'
    radius: 8
  code-block:
    bg: '#0d1117'
    color: '#e6e6e6'
    radius: 8
    font: mono

lineage:
  summary: |
    Svelte's identity is the most monochromatic-with-one-accent site
    in the JS framework world. The canvas is pure `#ffffff`, the
    body is a near-black `#15191e` (slight blue undertone, distinct
    from Remix's pure black), and the brand color — `#ff3e00`, a
    saturated, almost cinnabar orange — does **all** of the chromatic
    work. That orange comes straight from the flame in the wordmark
    and is treated as sacred: never a gradient, never a tint pair,
    just the single hex value applied with absolute confidence.
    Display type leans on **Overpass** (Red Hat's grotesk) at 700/900
    weights, paired with Inter for body — the heavier display weight
    is what gives the marketing its declarative tone. Code surfaces
    flip to a dark `#0d1117` panel inside the otherwise-white page,
    a deliberate choice to make code blocks read as artifacts rather
    than continuous canvas. The closest spiritual cousin is **Vercel
    in light mode**, but Svelte's orange is too saturated to feel
    Silicon Valley — it reads more like a 1970s warning sign or a
    Penguin Books paperback spine.
  influences:
    - name: Penguin Books (orange spine)
      role: Single saturated orange against white as a serious, memorable identity.
      url: https://www.penguin.co.uk
    - name: Vercel
      role: Clean light-mode dev-tool template; type-led, low-chroma, structured.
      url: https://vercel.com
    - name: Red Hat (Overpass)
      role: Lent the Overpass display family — engineered, slightly extended grotesk.
      url: https://www.redhat.com
---

## Overview

Svelte's marketing site is the most disciplined one-color brand in
the JavaScript framework world. The canvas is pure `#ffffff`, the
body type is a near-black `#15191e` Inter, and the entire chromatic
expression of the brand lives in a single hex: `#ff3e00`. That orange
appears on the flame logo, the primary CTA, key documentation links,
and absolutely nowhere else as a gradient. Every other framework
hedges; Svelte commits.

The result feels less like a tech homepage and more like a Penguin
Classic paperback — clean white field, single saturated orange,
confident sans. The dark code blocks inside the white canvas are the
one departure, and they read as artifacts rather than chrome.

## Colors

- **bg** `#ffffff` — pure white canvas, no tint
- **bg-soft** `#f9f9f9` — subtle alternate-section background
- **surface** `#f4f4f4` — card lift, sidebar panels
- **text** `#15191e` — near-black body, slight blue undertone
- **text-muted** `#5b5b5b` — captions, sidebar metadata
- **brand** `#ff3e00` — the sacred Svelte orange, single accent
- **brand-soft** `#fff1ec` — tinted callout backgrounds, used sparingly
- **accent** `#40b3ff` — documentation link blue (separate from brand)
- **border** `#0000001a` — 10% black hairline
- **code-bg** `#0d1117` — dark code surface, only place dark appears

## Typography

Display is **Overpass** (Red Hat's slightly-extended grotesk) at
weights 700 and 900. H1 sits at 80px with a 1.0 line-height and
`-0.025em` tracking; the heavy 900 weight is what gives the marketing
copy its declarative energy. Where Remix uses Founders Grotesk wide
and Astro uses Obviously chunky, Svelte uses Overpass at near-poster
weight.

Body type is **Inter** at 17px on a 1.6 line-height — slightly
larger than Stripe or Notion's 16px, signaling readability. Code
surfaces use **Fira Mono** at 14px, deliberately distinct from the
JetBrains-Mono dev-tool default.

The label of "minimal sans" doesn't quite cover it — Overpass at 900
is **muscular**, not minimal, and that muscularity is what keeps the
brand from feeling like a generic startup template.

## Layout

The container caps at 1200px with 24px gutters; sections breathe at
96px vertical. The marketing layout is a clean 12-column grid, but
documentation pages use a three-column structure (sidebar / content /
TOC) that mirrors MDN. Hero blocks routinely sit at full bleed with
the flame glyph anchoring the left edge.

## Elevation & Depth

Depth is **almost absent**. Cards rest on the white canvas with a
10% black hairline at 8px radius — no shadow, no tonal layering. The
single source of depth is the dark code block: a `#0d1117` rectangle
that reads as a window into a different surface. That contrast does
all of the page's vertical work.

## Shapes

Radius ladder is 2 / 4 / 6 / 8, with pills at 9999. Buttons land at
6px, cards at 8px. The flame logo itself is angular — sharp triangle
geometry — and that angularity carries through to the chevron icons
and section dividers. Nothing in the system rounds past 8px except
status pills.

## Components

The defining components are the **solid orange button** (`#ff3e00`,
6px radius, white text at weight 600), the **dark code block**
(`#0d1117` with Fira Mono, lifted from the white canvas at 8px
radius), the **flame wordmark** (the single brand glyph, used at
sizes from favicon to hero), and the **white card with hairline
border** for feature blocks. Navigation is a thin transparent bar
that lets the orange flame anchor the upper-left.

## Do's and Don'ts

- **Do** treat `#ff3e00` as sacred. One color, no gradients, no tints — that single saturated orange is the entire brand.
- **Do** lean on Overpass at 700/900 for headlines; the heavy weight is what carries the declarative voice.
- **Do** keep the canvas pure `#ffffff`. Off-white reads as Notion, paper-cream reads as Bun — Svelte is white.
- **Don't** introduce a second brand color. Documentation link blue exists for utility, but marketing surfaces should never pair orange with another accent.
- **Don't** apply orange to large surfaces. The hex is too saturated for full backgrounds; reserve it for buttons, links, and the flame.
- **Don't** add gradients, glows, or backdrop blur. Svelte's brand is print-discipline; effects undermine the single-color confidence.
