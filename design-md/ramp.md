---
name: Ramp
tagline: Off-yellow `#fcfb70` and black-on-white editorial — finance ops dressed as a printed annual report.
author: webdesignhot
source_url: https://ramp.com
spec: design.md/v1
quality: curated
featured: false
categories: [fintech, saas]
tags: [light, editorial, sans, structured, bright, warm, dense]
preview_swatch: ['#ffffff', '#fcfb70', '#000000']
related: [stripe, mercury, linear]
description: 'Ramp''s site reads like a printed annual report — black on white, generous Söhne-style sans, and a single piece of bright pastel-yellow `#fcfb70` per band as the brand''s only saturated colour. There''s no gradient, no glow, no glassy chrome: every page is a stack of editorial sections separated by a thin rule, and every CTA is a flat black pill.'

colors:
  bg: '#ffffff'                # white canvas
  bg-soft: '#fafaf7'           # softest off-white
  bg-yellow: '#fcfb70'         # signature pastel yellow band
  bg-ink: '#0a0a0a'            # near-black inverted band
  surface: '#f5f5f3'           # quiet panel
  surface-soft: '#f9f9f7'      # softer card
  text: '#0a0a0a'              # near-black
  text-strong: '#000000'       # display
  text-muted: '#5b5b58'        # captions
  text-soft: '#8a8a85'         # tertiary
  brand: '#0a0a0a'             # the brand is black — yellow is sectional, not actionable
  brand-hover: '#1a1a1a'
  accent: '#fcfb70'            # signature off-yellow
  accent-strong: '#e8e750'     # deeper yellow for hover/highlight
  accent-soft: '#fefee0'       # palest wash
  border: '#0000001a'          # 10% black rule
  border-soft: '#00000010'     # 6% divider
  on-brand: '#ffffff'          # white on black button
  on-accent: '#0a0a0a'         # black on yellow

typography:
  display:
    family: '"Söhne", "Söhne Breit", "Inter Display", Inter, "Helvetica Neue", Arial, sans-serif'
    weights: [500, 600, 700]
  body:
    family: '"Söhne", Inter, -apple-system, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"Söhne Mono", "JetBrains Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 80, weight: 500, lineHeight: 0.98, tracking: '-0.03em' }
    h2:    { size: 56, weight: 500, lineHeight: 1.05, tracking: '-0.025em' }
    h3:    { size: 28, weight: 500, lineHeight: 1.2,  tracking: '-0.01em' }
    body:  { size: 17, lineHeight: 1.5 }
    quote: { size: 28, weight: 400, lineHeight: 1.3 }
    label: { size: 12, weight: 500, family: mono, tracking: '0.06em' }

radius:
  xs: 2
  sm: 4
  md: 6
  lg: 8
  card: 8
  xl: 12
  button: 999     # Ramp uses pill CTAs
  pill: 9999

layout:
  container: 1280
  gutter: 32
  section-y: 128
  rhythm: 8

components:
  button-primary:
    bg: '#0a0a0a'
    color: '#ffffff'
    radius: 999
    weight: 500
    paddingX: 22
    paddingY: 12
  button-secondary:
    bg: '#ffffff'
    color: '#0a0a0a'
    border: '1px solid #0a0a0a'
    radius: 999
  card:
    bg: '#ffffff'
    border: '1px solid #0000001a'
    radius: 8
  yellow-band:
    bg: '#fcfb70'
    color: '#0a0a0a'

lineage:
  summary: |
    Ramp picked the most counter-intuitive position in fintech: black
    type on white pages, broken only by a pastel-yellow `#fcfb70` that
    arrives one band per page, like a highlighter pulled across a
    paragraph in a printed report. The brand colour is functionally
    *black*; the yellow is sectional. This makes Ramp read more like
    a McKinsey deliverable or a Pentagram annual report than a SaaS
    site — disciplined, editorial, almost institutional. Söhne (or
    Söhne-class neo-grotesque) handles every weight; the H1 sets at
    500 with hard `-0.03em` tracking, giving it a quiet authority that
    Brex's heavier weights or Stripe's gradients can't match. The
    pill button radius is the one warm gesture in an otherwise
    rectilinear system. The yellow band itself — and the way Ramp
    centres testimonials and customer logos inside it — is a direct
    descendant of the New York Times product pages and Linear's
    section-as-zone composition.
  influences:
    - name: Pentagram editorial / annual report design
      role: Black-on-white, single pastel accent, generous whitespace, sectional typography.
      url: https://www.pentagram.com
    - name: Stripe
      role: Search for chromatic restraint and brand-as-typographic-system in fintech.
      url: https://stripe.com
    - name: Klim / Lineto (Söhne)
      role: Söhne is Ramp's typographic backbone — neo-grotesque modernism with subtle warmth.
      url: https://lineto.com
---

## Overview

Ramp's marketing surface is the quietest in fintech. Pages are white,
type is black, and exactly one band per scroll-length is washed in
the signature pastel `#fcfb70`. There is no gradient, no glassy
glow, no glow-in-the-dark dashboard. The H1 lands at 80px / 500
weight with `-0.03em` tracking — restrained, but tracked tight enough
to feel newspaper-like.

The chromatic move that distinguishes Ramp is that yellow is not a
brand colour in the usual sense — it isn't on the logo, isn't on the
CTA, isn't on icons. It's a *sectional device*, painted across a full
horizontal band, almost always behind a customer testimonial or a
metric. The brand colour is, functionally, black.

## Colors

- **bg** `#ffffff` — white canvas, magazine-margin discipline
- **bg-yellow** `#fcfb70` — signature pastel yellow, used as a sectional band only
- **bg-ink** `#0a0a0a` — inverted near-black band for occasional contrast
- **surface** `#f5f5f3` — quiet panel base, slight warm tint
- **text** `#0a0a0a` — near-black body
- **text-strong** `#000000` — display weight at full ink
- **brand** `#0a0a0a` — Ramp's CTA is black, not yellow
- **on-accent** `#0a0a0a` — black type on the yellow band
- **border** `#0000001a` — 10% black rule, never a soft grey

## Typography

Display is **Söhne** (or a Söhne-class neo-grotesque) at 500 weight,
sized 80px on a 78px line height with `-0.03em` tracking. The 500
weight + tight tracking is what gives Ramp its annual-report voice —
a heavier 700 would push it into ad territory, a lighter 400 into
editorial preciousness.

Body is the same Söhne at 17px / 25.5px line height. Mono labels
(Söhne Mono / JetBrains Mono) appear at 12px with `0.06em` tracking
for eyebrow tags, footnote markers, and code. Pull quotes step up
to 28px / 400 weight with comfortable 1.3 line height — the
testimonial format is where Ramp leans most editorial.

## Layout

Container caps at 1280px with 128px section padding — the most
generous vertical rhythm of any fintech in this set. The 8px-rhythm
spacing ladder lets the yellow bands breathe. Cards round at 8px,
buttons go full pill (radius 999) — the single warm gesture in an
otherwise rectilinear, hairlined system.

## Elevation & Depth

Depth is achieved through bands and rules, not shadows. The page is
a vertical stack: white band → yellow band → white band → black
band, separated by 1px / 10% black rules. Cards inside bands use
the same 1px hairline plus an optional flat fill — never a shadow.
Dropping shadows would shift the voice from "annual report" to
"SaaS dashboard."

## Shapes

Radii ladder is tight: 2 / 4 / 6 / 8, with cards at 8 and CTAs at
full pill (999). The contrast between hard 8px card corners and the
fully rounded button is the brand's signature shape rhythm — every
page repeats it.

## Components

The defining components are the **black pill button** (`#0a0a0a` /
white text / radius 999 / weight 500), the **yellow band** (full-bleed
`#fcfb70` containing testimonial or metric in 28px Söhne 400), the
**hairline card** (1px / 10% black, no shadow), and the **mono
eyebrow** (Söhne Mono 12px / `0.06em` tracking) used as section
markers. There is no glassmorphism; gradients are absent.

## Do's and Don'ts

- **Do** keep the yellow `#fcfb70` to one full-bleed band per scroll-length; multiple yellow zones break the pacing.
- **Do** keep CTAs black with white text and full pill radius; yellow CTAs read as a different brand entirely.
- **Do** use mono micro-labels for section eyebrows — they're the editorial signature.
- **Don't** apply gradients, glows, or glassy chrome — Ramp's discipline is flat and printed.
- **Don't** centre the H1; left-aligned 80px Söhne is the brand voice.
- **Don't** use yellow as a type colour or icon fill — it is sectional only.
