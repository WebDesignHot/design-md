---
name: Deel
tagline: A warm dark canvas with electric coral and orange accents — global payroll dressed as a confident product portrait.
author: webdesignhot
source_url: https://www.deel.com
spec: design.md/v1
quality: curated
featured: false
categories: [fintech, saas]
tags: [dark, sans, structured, warm, bright]
preview_swatch: ['#0c0c0c', '#ff4d2e', '#f4f1ec']
related: [stripe, brex, vercel]
description: 'Deel''s site lives in a warm-dark register: near-black `#0c0c0c` canvas, cream `#f4f1ec` light bands, and a signature electric coral-orange `#ff4d2e` that carries CTAs and accents. The system pairs Inter Display at 600 with a generous spacing rhythm and product stills set inside soft cards — global HR/payroll given the visual weight of an enterprise platform with consumer warmth.'

colors:
  bg: '#0c0c0c'                # warm near-black hero canvas
  bg-light: '#f4f1ec'          # cream off-white inverted band
  bg-strong: '#000000'         # full ink contrast
  surface: '#181818'            # dark card base
  surface-soft: '#1f1f1f'       # softer dark panel
  surface-light: '#fafaf7'      # light card on cream
  text: '#f4f1ec'              # cream body on dark
  text-strong: '#ffffff'
  text-dark: '#0c0c0c'         # ink type on light bands
  text-muted: '#a8a59f'        # warm grey caption on dark
  text-soft: '#7a7771'
  brand: '#ff4d2e'             # signature electric coral-orange
  brand-hover: '#e63d1f'
  brand-soft: '#3a1810'        # tinted dark wash
  accent: '#ffb84d'             # supporting amber
  accent-strong: '#f9c459'      # warm yellow accent
  accent-soft: '#fff0e0'
  border: '#ffffff14'           # 8% white hairline on dark
  border-soft: '#ffffff0a'
  border-light: '#0c0c0c14'     # ink rule on cream
  on-brand: '#ffffff'
  inverse-bg: '#f4f1ec'

typography:
  display:
    family: '"Inter Display", "Söhne", Inter, "Helvetica Neue", Arial, sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Inter, -apple-system, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 80, weight: 600, lineHeight: 1.0,  tracking: '-0.03em' }
    h2:    { size: 56, weight: 600, lineHeight: 1.05, tracking: '-0.025em' }
    h3:    { size: 28, weight: 600, lineHeight: 1.2,  tracking: '-0.01em' }
    body:  { size: 17, lineHeight: 1.55 }
    label: { size: 12, weight: 500, family: mono, tracking: '0.05em' }

radius:
  xs: 4
  sm: 6
  md: 10
  lg: 14
  card: 18
  xl: 24
  button: 999     # pill CTAs
  pill: 9999

layout:
  container: 1280
  gutter: 24
  section-y: 120
  rhythm: 8

components:
  button-primary:
    bg: '#ff4d2e'
    color: '#ffffff'
    radius: 999
    weight: 500
    paddingX: 24
    paddingY: 14
  button-secondary:
    bg: 'transparent'
    color: '#f4f1ec'
    border: '1px solid #ffffff28'
    radius: 999
  card-dark:
    bg: '#181818'
    border: '1px solid #ffffff14'
    radius: 18
    padding: 32
  card-light:
    bg: '#ffffff'
    border: '1px solid #0c0c0c10'
    radius: 18

lineage:
  summary: |
    Deel sits in the small group of dark-canvas fintechs (alongside
    Linear, Vercel, and Modal) but tilts the temperature warm: the
    near-black `#0c0c0c` reads slightly brown rather than blue-black,
    and the cream `#f4f1ec` light bands reinforce that warmth. The
    signature accent is a saturated coral-orange `#ff4d2e` — closer
    to a magazine highlighter than a corporate CTA — used on every
    primary action and on selective illustration accents. Inter
    Display at 600 with `-0.03em` tracking handles the H1; the
    lineage is the Linear / Vercel modern-SaaS axis, but the warm
    dark and the orange accent push Deel toward Brex's saturated
    energy rather than Linear's monochrome restraint. The
    full-pill button radius is the brand's friendliness signal in a
    category (global HR / payroll) that often defaults to cold
    enterprise blues. Where Wise commits to a single colour and
    Mercury commits to a serif, Deel's distinguishing move is the
    warm-dark / cream-light alternation paired with the coral CTA.
  influences:
    - name: Linear / Vercel
      role: Dark canvas + cool grey neutral lineage; modern-SaaS sans typography.
      url: https://linear.app
    - name: Stripe
      role: Single-accent action colour discipline in fintech.
      url: https://stripe.com
    - name: Klim / Inter
      role: Inter Display at 600 with hard negative tracking is the typographic backbone.
      url: https://rsms.me/inter
---

## Overview

Deel's site moves between two registers: a warm near-black canvas
`#0c0c0c` with cream type for hero and product sections, and a
cream-white `#f4f1ec` band for testimonials and editorial copy.
The signature accent — a saturated coral-orange `#ff4d2e` — appears
as the only saturated colour, anchoring CTAs and selective
illustration accents.

The visual personality differentiates Deel from the cooler
neobank set: it reads warmer, more product-still, more *brand
campaign* than spreadsheet. Inter Display at 600 with `-0.03em`
tracking carries the H1 at 80px; product stills sit inside
18px-radius cards with subtle 1px white-on-dark hairlines.

## Colors

- **bg** `#0c0c0c` — warm near-black, slightly brown-cast
- **bg-light** `#f4f1ec` — cream inverted band for testimonial / editorial sections
- **surface** `#181818` — dark card base on hero
- **surface-light** `#fafaf7` — light card on cream band
- **text** `#f4f1ec` — cream body on dark; **text-dark** `#0c0c0c` on light
- **brand** `#ff4d2e` — signature electric coral-orange CTA fill
- **accent** `#ffb84d` — supporting amber for highlight chips
- **border** `#ffffff14` — 8% white hairline on dark
- **border-light** `#0c0c0c14` — 8% ink rule on cream

## Typography

Display is **Inter Display** at 600 weight, sized 80px on an 80px
line height with `-0.03em` tracking. Body is **Inter** at 17px /
26px line height. Mono micro-labels (JetBrains Mono / IBM Plex Mono)
at 12px with `0.05em` tracking handle eyebrows, country tags, and
small UI metadata.

The scale steps in 1.4-1.5× ratios — 17 → 28 → 56 → 80 — giving the
H1 dramatic weight and leaving the body at a comfortable, slightly
larger-than-default 17px.

## Layout

Container caps at 1280px with 120px section padding. The dark/cream
alternation is the macro layout move — Deel doesn't rely on cards-
on-grid the way Brex does; instead it stacks full-bleed bands,
each containing a product still or a testimonial.

## Elevation & Depth

On dark surfaces, depth comes from a single 8% white hairline plus
the rare soft glow underneath product stills (a faint orange-tinted
light leak). On the cream band, depth is a 1px / 8% black hairline
and the occasional `0 1px 2px` shadow. There is no glassmorphism
and no heavy multi-layer shadow.

## Shapes

Radii ladder: 4 / 6 / 10 / 14 / 18 / 24. Cards land at 18 (slightly
larger than the modern 16px consensus, which gives Deel its softer
feel), buttons at full pill (999). The pill CTA on a coral fill is
the brand's friendliest gesture and a direct contrast to the cool,
hard-cornered enterprise HR products it competes with.

## Components

The defining components are the **coral pill button**
(`#ff4d2e` / white text / radius 999), the **dark product card**
(`#181818` / 18px radius / 1px white-8% hairline) with a faint
orange light-leak shadow underneath, the **cream testimonial band**
(`#f4f1ec` background with ink type), and the **mono eyebrow**
labels marking each section. Country flags and globe motifs appear
as small chip illustrations, often with the coral as fill accent.

## Do's and Don'ts

- **Do** keep the coral `#ff4d2e` as the only saturated CTA colour; secondary actions are outline-on-cream or outline-on-dark.
- **Do** alternate dark and cream bands at the section level — the rhythm is the macro brand voice.
- **Do** keep card radius at 18px and button at full pill — the slight excess on the card softens the dark canvas.
- **Don't** use cool greys as the dark — the warm `#0c0c0c` is what distinguishes Deel from Linear or Vercel.
- **Don't** introduce a second saturated colour (no purple, no green); coral plus amber is the full hot palette.
- **Don't** square the buttons; pill is the friendliness signal in a cold category.
