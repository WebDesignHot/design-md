---
name: Remix
tagline: Pure black on white with massive Founders Grotesk display — a framework dressed as a manifesto poster.
author: webdesignhot
source_url: https://remix.run
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools]
tags: [light, brutalist, sans, structured, cool, minimal]
preview_swatch: ['#ffffff', '#000000', '#3992ff']
related: [vercel, vite, tailwindcss]
description: 'Remix''s site reads like a printed manifesto — pure white canvas, pure black type, a single confident `#3992ff` blue for action, and Founders Grotesk-style display set at billboard scale. Where most dev-tool sites layer gradients and dark mode flourishes, Remix strips everything back to type and grid: a framework that wants to be read like a thesis.'

colors:
  bg: '#ffffff'
  bg-invert: '#000000'         # campaign hero band, code surfaces
  surface: '#f7f7f7'           # subtle card lift on white
  surface-strong: '#ededed'
  text: '#121212'              # primary near-black body
  text-strong: '#000000'       # display headlines
  text-muted: '#6b6b6b'        # captions, nav metadata
  brand: '#3992ff'             # Remix blue, the single action accent
  brand-hover: '#1c6fd6'
  accent: '#f44250'            # secondary warning red used in marketing
  border: '#0000001a'          # 10% black hairline
  border-strong: '#00000026'
  on-brand: '#ffffff'
  on-invert: '#ffffff'

typography:
  display:
    family: '"Founders Grotesk", "Inter Display", -apple-system, "system-ui", sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Inter, -apple-system, "system-ui", sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "Fira Code", ui-monospace, Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 96, weight: 700, lineHeight: 0.95, tracking: '-0.04em' }
    h2:    { size: 64, weight: 700, lineHeight: 1.0,  tracking: '-0.03em' }
    h3:    { size: 36, weight: 600, lineHeight: 1.15, tracking: '-0.015em' }
    h4:    { size: 22, weight: 600, lineHeight: 1.3,  tracking: '0' }
    body:  { size: 18, lineHeight: 1.6 }
    quote: { size: 28, weight: 500, lineHeight: 1.35 }
    code:  { size: 14, family: mono, lineHeight: 1.6 }

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
  section-padding: 120
  grid: 12

components:
  button-primary:
    bg: '#000000'
    color: '#ffffff'
    radius: 6
    weight: 600
  button-brand:
    bg: '#3992ff'
    color: '#ffffff'
    radius: 6
  card:
    bg: '#ffffff'
    border: '1px solid #0000001a'
    radius: 8
  code-block:
    bg: '#000000'
    color: '#ffffff'
    radius: 8
    font: mono

lineage:
  summary: |
    Remix's marketing voice is **manifesto-grade**. The canvas is pure
    `#ffffff` paper-white, the type is pure `#121212` near-black, and
    the only chromatic intervention is a single Remix blue (`#3992ff`)
    used for action and the wordmark. Display type runs at billboard
    scale — H1 at 96px, 0.95 line-height, `-0.04em` tracking — closer
    to a Pentagram-era poster than a typical SaaS landing. Founders
    Grotesk (or Inter Display) supplies the wide, confident grotesk
    cut. The framework explicitly sells itself as a "return to the
    web platform," and the design embodies that thesis: no dark mode,
    no gradient backdrops, no soft pastels — just type, grid, and a
    deliberate use of pure-black hero bands that flip the page into
    inverse-print mode for emphasis. Where Next.js leans Vercel-cool,
    Remix leans editorial-print; where Astro leans cosmic, Remix
    leans civic. The closest analogues are Stripe Press and Apple's
    Pro Display marketing — sites that trust their typography to do
    the entire job.
  influences:
    - name: Stripe Press
      role: Editorial-print discipline; black-on-white as a serious-software signal.
      url: https://press.stripe.com
    - name: Pentagram
      role: Billboard-scale display type as the primary expressive element.
      url: https://www.pentagram.com
    - name: Apple Pro
      role: Massive headline weight and confident, uncluttered grid.
      url: https://www.apple.com/mac-pro
---

## Overview

Remix treats its homepage like a printed broadside. The canvas is
pure white at `#ffffff`, the body type is `#121212` near-black, and
the display type runs at 96px with `-0.04em` tracking — closer to a
gallery poster than a software landing. The single chromatic accent
is the Remix blue (`#3992ff`), reserved for the wordmark and primary
CTA; the rest of the page does its work in monochrome.

Where Next.js and Vercel use dark mode and gradient backdrops to
signal "modern infrastructure," Remix uses negative space and
editorial type to signal "we expect you to read." The brand wants to
be taken seriously, and the visual language refuses to apologize for
the seriousness. Pure-black inverse hero bands appear for high-stakes
sections — releases, manifestos — and then the page returns to white.

## Colors

- **bg** `#ffffff` — pure paper-white, the canvas of every section
- **bg-invert** `#000000` — pure black, used for inverse hero bands and code surfaces
- **surface** `#f7f7f7` — subtle card lift on the white canvas
- **text** `#121212` — primary body, slightly softened from pure black
- **text-strong** `#000000` — display headlines, full-weight
- **text-muted** `#6b6b6b` — nav, metadata, captions
- **brand** `#3992ff` — single confident blue, action and wordmark
- **accent** `#f44250` — sparing red for warnings or secondary callouts
- **border** `#0000001a` — 10% black hairline
- **on-brand** `#ffffff` — text on the blue button

## Typography

Display is **Founders Grotesk** (or Inter Display as fallback) at
weights 500 through 700. H1 sits at 96px with a 0.95 line-height and
`-0.04em` tracking — that hard negative tracking is what gives the
headline its compressed-poster feel. Founders Grotesk is wider than
Inter, with rounder counters; it reads less Silicon-Valley than
Geist or Inter alone.

Body type is **Inter** at 18px on a 1.6 line-height — generous for
a marketing surface, deliberately so. Remix expects you to read prose,
not skim feature bullets. Pull-quotes lift to 28px at weight 500.

Code surfaces use **JetBrains Mono** at 14px on inverse-black panels.
The choice is loaded — JetBrains Mono signals "real engineering,"
distinct from the Geist Mono crowd, and pairs editorially with the
broadside-poster display tone.

## Layout

The container caps at 1200px with 24px gutters; sections breathe at
120px vertical padding — even more generous than Stripe. The grid is
12-column but the marketing routinely uses 6 or 8 columns to leave
deliberate negative space, the way a magazine spread leaves a gutter
beside a pull-quote.

## Elevation & Depth

There is **almost no elevation**. Cards sit on the white canvas with
a 10% black hairline border at 8px radius — no shadows, no lifts.
Depth, when it appears, comes from the inverse-black hero band: the
contrast between paper-white and pure-black creates a print-style
dimensionality without a single drop shadow.

## Shapes

Radius is conservative — 2 / 4 / 6 / 8, with pills at 9999. Buttons
land at 6px, cards at 8px. The geometry is right-angled and grid-
aligned; nothing rounds beyond 8px except status pills. This is a
deliberate refusal of the "soft rounded everything" Bootstrap-era
default.

## Shapes

Buttons sit at 6px radius, cards at 8px, status pills at 9999. The
overall geometry feels gridded and editorial — closer to a New York
Times layout than a SaaS gallery.

## Components

The defining components are the **black solid button** (`#000000` bg,
white text, 6px radius, weight 600) for primary actions, the **blue
brand button** (`#3992ff`) reserved for the wordmark-aligned CTA, the
**inverse-black hero band** that flips the page into print-negative
for emphasis, and the **mono code block** on pure black with white
JetBrains Mono. Navigation is a single thin row, no shadow, no
backdrop blur — the page is meant to feel like a printed page, not a
fluid app.

## Do's and Don'ts

- **Do** trust the type. Headlines at 96px with `-0.04em` tracking are the brand's primary expressive tool — anything smaller reads as generic.
- **Do** keep the action palette to the single Remix blue (`#3992ff`); secondary actions go to the black button, not a different hue.
- **Do** flip to inverse-black hero bands for emphasis — the contrast against `#ffffff` is the brand's depth strategy.
- **Don't** introduce dark mode as the default. Remix's identity is light-mode editorial; a dark canvas reads as Vercel or Linear.
- **Don't** add drop shadows to cards. Depth here is purely tonal (black-on-white inversion); shadows undermine the print aesthetic.
- **Don't** soften corners past 8px. The right-angled grid is part of the manifesto; rounded everything reads as Bootstrap-era default.
