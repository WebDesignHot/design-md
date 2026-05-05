---
name: Astro
tagline: Deep cosmos navy with Obviously display type and a violet-to-orange brand gradient — a framework dressed as a star chart.
author: webdesignhot
source_url: https://astro.build
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools]
tags: [dark, structured, sans, spacious, cool, multi-theme]
preview_swatch: ['#060913', '#ff5d01', '#a374ff']
related: [vercel, vite, tailwindcss]
description: 'Astro''s site leans hard into its name — a deep `#060913` cosmos canvas, Obviously as the display face, and a signature violet-to-orange brand gradient that runs from `#a374ff` into `#ff5d01`. The page treats the framework like a constellation map: dense documentation surfaces, structured cards, and a subtle starfield punctuated by the warm orange glyph that has become Astro''s signature.'

colors:
  bg: '#060913'                # html background, near-black cosmos navy
  bg-soft: '#0d1117'           # secondary surface
  surface: '#11162a'           # card panel, slightly lifted from bg
  surface-strong: '#1a2040'    # hover/active surface
  text: '#f2f6fa'              # primary text on dark
  text-muted: '#bfc1c9'        # secondary copy, nav links
  text-soft: '#8a8fa3'         # captions, metadata
  brand: '#ff5d01'             # signature Astro orange (logo glyph)
  brand-hover: '#e54e00'
  accent: '#a374ff'            # violet end of brand gradient
  accent-soft: '#7611a6'       # deep purple for backgrounds
  gradient-from: '#a374ff'
  gradient-to: '#ff5d01'
  border: '#ffffff14'          # 8% white hairline
  border-strong: '#ffffff26'
  on-brand: '#ffffff'
  success: '#17c964'
  warning: '#f5a524'

typography:
  display:
    family: 'Obviously, "obviously-fallback", system-ui, sans-serif'
    weights: [500, 700, 900]
  body:
    family: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'
    weights: [400, 500, 600]
  mono:
    family: '"IBM Plex Mono", ui-monospace, "Cascadia Code", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 72, weight: 700, lineHeight: 1.1,  tracking: '-0.02em' }
    h2:    { size: 48, weight: 700, lineHeight: 1.15, tracking: '-0.015em' }
    h3:    { size: 32, weight: 700, lineHeight: 1.2,  tracking: '-0.01em' }
    h4:    { size: 22, weight: 600, lineHeight: 1.3,  tracking: '0' }
    body:  { size: 16, lineHeight: 1.6 }
    small: { size: 14, lineHeight: 1.5 }
    code:  { size: 14, family: mono, lineHeight: 1.6 }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  card: 16
  xl: 20
  pill: 9999

layout:
  container: 1280
  gutter: 24
  section-padding: 96
  grid: 12

components:
  button-primary:
    bg: '#ff5d01'
    color: '#ffffff'
    radius: 8
    weight: 600
    padding: '12px 20px'
  button-ghost:
    bg: 'transparent'
    color: '#bfc1c9'
    border: '1px solid #ffffff14'
    radius: 8
  card:
    bg: '#11162a'
    border: '1px solid #ffffff14'
    radius: 16
    padding: 24
  code-block:
    bg: '#0d1117'
    radius: 12
    font: mono

lineage:
  summary: |
    Astro's website behaves like an observatory dashboard. The canvas is
    the deepest practical navy (`#060913`), close enough to black that
    it reads as space, but with enough blue to register as engineered
    rather than monochrome. The signature move is the **violet-to-orange
    brand gradient** — `#a374ff` flowing into `#ff5d01` — which appears
    on the wordmark, hero glyph, and key CTA accents. Display type is
    **Obviously**, OH no Type Co.'s extended grotesk, used at heavy weights
    with subtle negative tracking; the visual register sits between
    Vercel's restrained Geist and a Wired-style editorial confidence.
    Code surfaces are first-class — IBM Plex Mono on a slightly lifted
    `#0d1117` panel — because Astro is sold to developers via its
    `.astro` syntax. The starfield motifs and rocket glyph give the
    brand its playful warmth, but the underlying grid is dense and
    structured (12-column, 24px gutter, 96px section rhythm).
  influences:
    - name: Vercel
      role: Dark-canvas dev-tool template — near-black bg with a single warm accent.
      url: https://vercel.com
    - name: Wired Magazine
      role: Editorial display weight and confident, oversized headline rhythm.
      url: https://www.wired.com
    - name: Stripe Docs
      role: Code-as-content treatment — mono panels treated as primary brand surface.
      url: https://stripe.com/docs
---

## Overview

Astro's marketing site is a star chart pretending to be a framework
homepage. The canvas runs to `#060913` — deep cosmos navy, almost black
but unmistakably blue under any reasonable display calibration — and
the type stack leads with **Obviously**, a wide grotesk that reads as
both editorial and engineered. The signature gradient runs from a
violet `#a374ff` into the warm `#ff5d01` orange that lives in the
Astro glyph; that diagonal sweep is the identity, repeated on hero
text, the rocket icon, and the primary CTA outline.

Where Vercel's dark mode is monochromatic and engineered, Astro's
dark mode is **astronomical** — there is intentional warmth in the
orange CTA, intentional whimsy in the starfield, and intentional
density in the documentation grid. The brand reads as "framework with
a soul," distinct from the cooler Vite or Bun pages.

## Colors

- **bg** `#060913` — deep cosmos navy, the canvas of the entire site
- **bg-soft** `#0d1117` — secondary panels and code blocks
- **surface** `#11162a` — card panel, lifted from bg with subtle blue
- **text** `#f2f6fa` — near-white body copy, slight cool tint
- **text-muted** `#bfc1c9` — nav links, secondary copy
- **brand** `#ff5d01` — the signature Astro orange, used sparingly
- **accent** `#a374ff` — violet partner in the brand gradient
- **gradient** `#a374ff → #ff5d01` — diagonal, the brand's emotional core
- **border** `#ffffff14` — 8% white hairline, never a solid grey
- **success/warning** — `#17c964` / `#f5a524` for status surfaces

## Typography

Display is **Obviously** by OH no Type Co., a wide-set grotesk used at
700 and 900 weights for hero copy. H1 lands at 72px with a 1.1
line-height and `-0.02em` tracking — the negative tracking gives the
hero its compressed, headline-bulletin tone. Obviously reads as both
editorial (Wired uses similar wide grotesks) and engineered.

Body type falls back to a system stack — `ui-sans-serif, system-ui,
sans-serif` — keeping the marketing surface fast and crisp on every
platform. Body sits at 16px with a 1.6 line-height, generous for a
dev-tool site, which signals "we expect you to read prose, not just
scan."

Code surfaces use **IBM Plex Mono** at 14px on a 1.6 line-height,
hosted on a `#0d1117` panel that sits one shade lighter than the page
canvas. Mono is treated as a brand element — Astro sells `.astro`
syntax, so code blocks are foregrounded rather than tucked away.

## Layout

The container caps at 1280px with 24px gutters; sections breathe at
96px vertical padding. The grid is a clean 12-column structure, but
the marketing rarely hits the full width — feature blocks frequently
sit at 8 columns with a 4-column screenshot beside, a rhythm borrowed
from Stripe and Linear.

## Elevation & Depth

Depth comes from **tonal lift** rather than shadow. The card panel at
`#11162a` sits one step above the `#060913` canvas; hover states
brighten to `#1a2040`. Borders are a uniform 8% white hairline
(`#ffffff14`) — never a solid grey, never a colored accent except
on the primary CTA. Subtle radial-gradient halos appear behind hero
illustrations, but the underlying surface logic is flat-tonal.

## Shapes

Radius ladder is 4 / 6 / 8 / 12 / 16 / 20, with pills at 9999. Buttons
land at 8px, cards at 16px, hero shells at 20px. The Astro glyph
itself is angular — a rocket with a sharp orange tip — and that
geometry shows up subtly in the chevron icons and stepped section
dividers across the page.

## Components

The defining components are the **brand-gradient outline button**
(violet-to-orange border on a transparent fill, used for the headline
CTA), the **solid orange button** (`#ff5d01`, 8px radius, white text)
for primary actions, the **starfield hero card** with soft halo and
violet edge-glow, and the **dark code block** with IBM Plex Mono on a
lifted `#0d1117` panel. Navigation is a slim, near-transparent bar
that lets the cosmic backdrop dominate.

## Do's and Don'ts

- **Do** lean on the violet-to-orange gradient for hero accents and the wordmark — it is the single most recognizable Astro element.
- **Do** treat code blocks as brand surface; IBM Plex Mono on a `#0d1117` panel signals Astro more strongly than any logo placement.
- **Do** keep the canvas at `#060913` — pure black flattens the page; lighter navy reads like Linear, not Astro.
- **Don't** mix the brand orange (`#ff5d01`) with arbitrary warm hues; the orange is sacred and pairs only with the violet `#a374ff`.
- **Don't** use Obviously below 500 weight for headlines — its character lives in the heavy display cuts; lighter weights look generic.
- **Don't** apply heavy drop shadows to cards. Astro's depth is tonal-blue layering plus a single 8% white hairline; shadows read as Bootstrap.
