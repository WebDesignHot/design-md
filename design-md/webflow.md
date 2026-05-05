---
name: Webflow
tagline: Indigo-to-purple gradient discipline with a precise structural sans — the visual builder that markets itself like a design conference.
author: webdesignhot
source_url: https://webflow.com
spec: design.md/v1
quality: curated
featured: false
categories: [design-tools, saas]
tags: [light, structured, sans, spacious, cool, bright]
preview_swatch: ['#080a12', '#4353ff', '#a285ff']
related: [framer, vercel, figma]
description: 'Webflow''s site sits on a near-black `#080a12` hero canvas with an indigo-to-violet gradient (`#4353ff` → `#a285ff`) carrying every accent surface. A bespoke "Webflow Sans" handles display, Inter underwrites body, and a precise 1024–1280 grid keeps the marketing reading like a design-system documentation site rather than a SaaS landing page.'

colors:
  bg: '#ffffff'                # primary marketing canvas
  bg-dark: '#080a12'           # hero / footer near-black
  surface: '#f5f6fa'           # cool-grey panel
  surface-2: '#e6e9f2'         # second-level neutral
  surface-dark: '#11131c'      # dark-band card
  text: '#1d1f2e'              # body, near-black with blue cast
  text-strong: '#080a12'       # display headlines
  text-muted: '#4a4d5e'        # captions
  text-soft: '#7a7d92'         # tertiary
  text-on-dark: '#ffffff'
  text-on-dark-muted: '#a8acc1'
  brand: '#4353ff'             # Webflow indigo (CTA primary)
  brand-hover: '#3441cc'       # pressed
  brand-deep: '#1a1f5c'        # deep indigo for hovers
  accent: '#a285ff'            # violet gradient stop
  accent-soft: '#e8e3ff'       # tinted surface
  accent-cyan: '#22ccff'       # secondary spectrum stop
  border: '#e0e3ec'            # cool hairline
  border-dark: '#22253a'
  on-brand: '#ffffff'

typography:
  display:
    family: '"Webflow Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [500, 600, 700]
  body:
    family: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "Fira Code", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.03em' }
    h2:    { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.022em' }
    h3:    { size: 28, weight: 600, lineHeight: 1.25, tracking: '-0.012em' }
    body:  { size: 16, lineHeight: 1.55 }
    label: { size: 13, weight: 500, family: mono }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  card: 16
  xl: 20
  xxl: 28
  button: 8
  pill: 9999

layout:
  container: 1280
  gutter: 32
  section-y: 140

components:
  - gradient-cta-button
  - dark-hero-band
  - feature-card-light
  - product-canvas-mockup
  - testimonial-card-bordered
  - integration-grid

lineage:
  summary: |
    Webflow's marketing system reads like the documentation site of a
    design system that happens to sell software. The canvas is white,
    but the hero and footer flip to a deep `#080a12` near-black —
    a darker, cooler shade than Linear's `#08090a`, with a faint
    indigo cast. The brand surface is the indigo-to-violet gradient
    (`#4353ff` → `#a285ff`), used for the primary CTA, key icon
    treatments, and the hero atmospheric glow. Type is anchored by
    Webflow Sans (a custom display family inflected toward Söhne /
    Inter-class proportions) for headlines, and Inter for body —
    a structural pairing that reinforces the "we are a craft tool"
    voice. Where Framer plays loud and chromatic, Webflow plays
    restrained-with-a-signature-gradient. The closest sibling is
    Vercel's monochrome discipline, but Webflow lets one gradient
    in — and that gradient does all the brand work.
  influences:
    - name: Vercel
      role: Achromatic structure with a single chromatic accent.
      url: https://vercel.com
    - name: Stripe
      role: Indigo-family action colour and gradient atmospherics for hero zones.
      url: https://stripe.com
    - name: Apple
      role: Dark-band hero rhythm and product-canvas mockup choreography.
      url: https://www.apple.com
---

## Overview

Webflow's site lands on a clean white canvas, with hero and footer
zones flipping to a deep cool near-black `#080a12`. The signature
brand event is the indigo-to-violet gradient — `#4353ff` to `#a285ff` —
which carries the primary CTA, atmospheric hero glows, and key
illustration accents. Headlines use Webflow Sans (a Söhne-flavoured
custom display) at 80px / 700 weight, and body type is plain Inter
at 16/25.

The voice is design-tool-as-conference: precise grid, generous vertical
rhythm, and a single confident gradient handling all chromatic work.
Every page reads like a section of a design system documentation
site — and that is the point.

## Colors

- **bg** `#ffffff` — the primary marketing canvas
- **bg-dark** `#080a12` — near-black hero and footer band
- **surface** `#f5f6fa` — cool-grey card panel
- **text-strong** `#080a12` — display headlines
- **text** `#1d1f2e` — body, near-black with a faint blue cast
- **text-muted** `#4a4d5e` — captions and meta
- **brand** `#4353ff` — Webflow indigo, CTA primary
- **accent** `#a285ff` — gradient violet endpoint
- **accent-soft** `#e8e3ff` — tinted surface for badges
- **border** `#e0e3ec` — cool hairline, never warm

## Typography

Display is **Webflow Sans** weighted at 700, sized 80px with `-0.03em`
tracking and a 1.0 line-height. The face reads close to Söhne but
with slightly more open apertures — a custom move that distances
Webflow from a generic Inter SaaS site. Body is Inter at 16px /
1.55 line-height, set in 400 for paragraphs and 500 for nav.

A monospaced JetBrains Mono shows up for code-style labels, version
strings, and the occasional "v1.0" badge in the changelog. There is
no serif — Webflow's editorial work is carried by structural rhythm,
not by typographic contrast.

## Layout

The container is 1280px with 32px gutters and a generous 140px of
section vertical rhythm. The grid stays disciplined — 12 columns
that the page rarely violates — which gives the marketing its
documentation feel. Hero zones bleed full-width but reset to the
1280 grid for content. Cards sit at 16px radius, buttons at a tight
8px.

## Elevation & Depth

Depth on the white canvas is bordered (a 1px `#e0e3ec` hairline)
plus a soft shadow on cards (`0 4px 14px rgba(13,16,40,0.08)`).
Hero atmospherics use the indigo-to-violet gradient as a soft glow
sitting behind product imagery — the only place gradients leak
beyond CTAs. Dark-band cards use a 1px `#22253a` border with no
shadow, leaning on tonal layering instead.

## Shapes

The signature shape is the **gradient CTA button** — a `#4353ff` →
`#a285ff` linear gradient at 8px radius, white Inter 500 label,
no border. Cards land at 16px, hero shells at 20–28px. The radius
ladder is moderate-rounded — softer than Linear's 6px discipline,
tighter than Framer's 20px+ pillow surfaces.

## Components

The defining components are the **gradient indigo-violet CTA button**,
the **dark hero band** (`#080a12` background with white Webflow Sans
display and an indigo gradient glow behind product mockups), the
**feature card** (white panel, 16px radius, hairline border, soft
shadow), and the **product-canvas mockup** — a slightly tilted
rendering of the Webflow Designer interface, used to show the tool
in motion. The integration grid uses a 6×N layout of mono-icon
partner logos on a soft grey panel.

## Do's and Don'ts

- **Do** keep the brand gradient to one direction (`#4353ff` → `#a285ff`) and one angle — drift breaks the recognition.
- **Do** flip to the deep `#080a12` for hero and footer; the cool near-black is the partner half of the system.
- **Do** use Webflow Sans only for display; below 28px it loses the proportions that distinguish it from Inter.
- **Don't** introduce a third gradient stop or shift toward magenta — the indigo-violet pairing is exact and protected.
- **Don't** use the gradient inside body components (cards, dividers, icons); it lives on CTAs and hero atmospherics only.
- **Don't** apply heavy drop shadows to dark-band cards; the dark zone uses tonal layering, not elevation.
