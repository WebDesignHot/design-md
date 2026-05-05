---
name: GitHub Copilot
tagline: Pure-white canvas, pure-black inverted CTAs, Mona Sans display — GitHub''s editorial confidence applied to AI tooling.
author: webdesignhot
source_url: https://github.com/features/copilot
spec: design.md/v1
quality: curated
featured: false
categories: [ai, dev-tools]
tags: [light, minimal, sans, mono, structured, cool]
preview_swatch: ['#ffffff', '#000000', '#0969da']
related: [github, cursor, claude-ai]
description: 'GitHub Copilot''s marketing page weaponises GitHub''s house style: a pure white canvas, pure black inverted CTAs, Mona Sans for display copy at heroically large sizes, and the iconic Primer blue `#0969da` reserved for textual links. The result reads less like an AI product page and more like a Primer Press editorial — confident, monochromatic, type-led.'

colors:
  bg: '#ffffff'                # paper white canvas
  bg-inverse: '#0d1117'        # near-black hero band (Primer canvas-default dark)
  surface: '#f6f8fa'           # Primer canvas-subtle
  surface-strong: '#eaeef2'    # Primer canvas-inset
  text: '#1f2328'              # Primer fg-default
  text-strong: '#000000'       # display copy at full black
  text-muted: '#59636e'        # Primer fg-muted
  text-on-dark: '#f0f6fc'      # text inside dark hero bands
  brand: '#000000'             # action colour — pure black inverted CTA
  brand-hover: '#1f2328'       # subtle warm-up on hover
  brand-on-dark: '#ffffff'     # inverted CTA on dark backgrounds becomes white
  accent: '#0969da'            # Primer accent-fg, used for textual links only
  accent-soft: '#ddf4ff'       # Primer accent-subtle
  success: '#1a7f37'           # Primer success-fg (sparingly, for "GA" tags)
  border: '#d0d7de'            # Primer border-default
  border-muted: '#d8dee4'      # Primer border-muted
  on-brand: '#ffffff'          # white text on black CTA

typography:
  display:
    family: '"Mona Sans", "Mona Sans VF", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [500, 600, 700, 800, 900]
  body:
    family: '"Mona Sans", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"MonaspiceNe", "Mona Sans Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 96, weight: 800, lineHeight: 0.95, tracking: '-0.04em' }   # hero — Mona Sans cranked wide
    h2:    { size: 56, weight: 700, lineHeight: 1.0,  tracking: '-0.025em' }
    h3:    { size: 32, weight: 600, lineHeight: 1.15, tracking: '-0.01em' }
    body:  { size: 18, lineHeight: 1.5 }
    label: { size: 12, weight: 500, family: mono, tracking: '0.02em' }

radius:
  xs: 4
  sm: 6
  md: 8           # Primer's standard control radius
  lg: 12
  card: 12
  xl: 16
  button: 6
  pill: 9999

layout:
  container: 1280
  gutter: 24
  rhythm: 8

components:
  button-primary: 'Pure black `#000000` on white, or pure white on dark hero bands. 6px radius, 600 weight Mona Sans, ~14–16px text, generous 12–16px vertical padding.'
  button-secondary: 'Outlined — 1px `#d0d7de` border on white, no fill, identical radius and padding.'
  card: 'Soft `#f6f8fa` panel with `#d0d7de` border, 12px radius, no shadow. Used for feature grids and pricing.'
  hero: 'Mona Sans at 96px+ in 800 weight, often set tightly across two or three short lines, set on pure white or pure `#0d1117` black.'
  code-block: 'Monaspice / Mona Sans Mono on `#f6f8fa`, syntax-highlighted with the standard Primer light theme palette.'
  nav: 'Sticky black bar on scroll, white text, 14px Mona Sans 500 weight — same as github.com global header.'

lineage:
  summary: |
    GitHub Copilot lives inside the Primer design system, so its
    marketing page reads as a high-confidence application of that
    system rather than a separate brand. The canvas defaults to pure
    white (Primer `canvas-default: #ffffff`), text stays at near-black
    `#1f2328` (`fg-default`), and the only chromatic accent allowed in
    body copy is the famous Primer accent blue `#0969da` — used for
    textual hyperlinks, not CTAs. The action surface is monochromatic:
    primary CTAs are pure black `#000000` on white, inverting to pure
    white on `#0d1117` dark hero bands. There is no brand purple, no
    OctocatOS rainbow, no Copilot-specific accent — Copilot's
    differentiation is typographic, not chromatic. Mona Sans, GitHub's
    custom variable display family, is cranked to 96px+ in 800 weight
    across hero bands, with negative tracking that gives the marketing
    a magazine-cover quality. Code blocks shift to Monaspice / Mona
    Sans Mono, the family GitHub commissioned to pair with Mona. The
    aesthetic lineage runs through Primer Press, Vercel's monochromatic
    discipline, and the New York Times Magazine's confidence in
    type-as-image.
  influences:
    - name: GitHub Primer
      role: Provides the entire colour system — canvas, fg, accent, border tokens — and the Mona Sans family.
      url: https://primer.style
    - name: Vercel
      role: Monochromatic black/white discipline with type as the primary expressive surface.
      url: https://vercel.com
    - name: Stripe Press
      role: Editorial typographic confidence — display sizes treated as image, not as headline.
      url: https://press.stripe.com
---

## Overview

GitHub Copilot's product page is a master class in restraint. The
canvas is pure white `#ffffff`, the action colour is pure black
`#000000`, and Mona Sans — GitHub's commissioned variable display
family — does the heavy lifting at hero sizes that approach 96px in
800 weight. There is no Copilot purple, no AI-product gradient, no
chromatic differentiation from github.com itself; the page declares,
through pure typographic and chromatic restraint, that Copilot is
*GitHub*, not a sub-brand.

Hero bands occasionally invert to `#0d1117` (Primer's dark canvas),
and the CTA flips from black-on-white to white-on-black with no other
adjustment. The accent blue `#0969da` appears only as textual link
colour — never as a button background, never as a hero gradient.

## Colors

- **bg** `#ffffff` — Primer `canvas-default`, the working surface
- **bg-inverse** `#0d1117` — near-black hero band (Primer dark canvas)
- **surface** `#f6f8fa` — `canvas-subtle`, used for cards and code blocks
- **text-strong** `#000000` — display copy at full black
- **text** `#1f2328` — `fg-default`, primary body
- **text-muted** `#59636e` — `fg-muted`, captions and metadata
- **brand** `#000000` — pure black CTA, the only action colour
- **accent** `#0969da` — Primer accent blue, links only
- **success** `#1a7f37` — used sparingly for "GA" / availability badges
- **border** `#d0d7de` — Primer `border-default`, hairline rules

## Typography

The display is **Mona Sans**, GitHub's commissioned variable typeface,
set at 96px in 800 weight with a tight `-0.04em` tracking for hero
copy. The result reads more like a magazine cover than a product
headline — Mona's slightly wider letterforms and aggressive weight
range make 96px feel architectural rather than shouty.

Body type is the same Mona Sans at 400/500/600, sized 18px on a 1.5
line-height — a confident step up from 16px defaults, signalling that
Copilot copy is meant to be read as essay, not scanned as feature list.

Code samples use **Monaspice** (the Mona-Sans-paired monospace) or
fall back to **Mona Sans Mono** and the standard SF Mono / Consolas
stack. The mono is rendered with the Primer light syntax theme,
keeping every code surface identical to the github.com editor.

## Layout

The container is a 1280px max-width with 24px gutters and an 8px
spacing rhythm. Hero bands take the full viewport width and lean
heavily on type-as-image. Feature grids are typically three-column on
desktop with `#f6f8fa` cards and `#d0d7de` borders.

Vertical rhythm between sections runs 96–144px — generous enough that
each band reads as a chapter, not a sub-section.

## Elevation & Depth

Depth is achieved through tonal layering (`#ffffff` → `#f6f8fa` →
`#eaeef2`) plus the 1px Primer border (`#d0d7de`). Shadows are
essentially absent on marketing surfaces; cards sit on tone, not
elevation. The defining "depth" effect is the inversion to
`#0d1117` on hero bands — a chromatic shift, not a lift.

## Shapes

Radii ladder is 4/6/8/12/16, all from Primer. Buttons sit at 6px
(Primer's standard control radius), cards at 12px, and pill shapes
appear only on tags and badges. There are no fully-rounded CTAs on
the Copilot page — the brand vocabulary is rectangular and confident.

## Components

The defining components are the **black inverted CTA** (`#000000` on
white, or `#ffffff` on `#0d1117`), the **96px Mona Sans hero
headline**, and the **Primer-themed code block** that ties the page
back to the editor. Cards are subtle `#f6f8fa` panels with hairline
borders. The nav is the standard GitHub global header — sticky black
bar, white text, no Copilot-specific chrome.

## Do's and Don'ts

- **Do** keep CTAs monochromatic — black on white, white on `#0d1117`. Never use the accent blue as a button background.
- **Do** crank Mona Sans to 800 weight at 64px+ for hero bands; the wide letterforms are designed for it and start to feel anaemic below 600 weight at large sizes.
- **Do** reserve `#0969da` for textual links only — it's Primer's link colour, not Copilot's brand colour.
- **Don't** introduce a Copilot-specific accent (purple, gradient, etc.); the strategic message is "Copilot is GitHub", carried by the absence of a sub-brand colour.
- **Don't** add shadows to cards — Primer surfaces use tone-and-border, not elevation, on marketing.
- **Don't** mix font families — Mona Sans + Monaspice is the pair; introducing Inter or system-ui breaks the GitHub-press feel.
