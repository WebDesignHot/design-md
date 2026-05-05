---
name: Datadog
tagline: NationalWeb on white with the iconic `#632ca6` purple — observability dressed as an enterprise dashboard, structurally dense, chromatically restrained, multicolour where the data demands it.
author: webdesignhot
source_url: https://www.datadoghq.com
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, structured, sans, dense, cool]
preview_swatch: ['#ffffff', '#632ca6', '#1a1a1a']
related: [stripe, vercel, linear]
description: 'Datadog''s marketing surface is a white-canvas enterprise dashboard with one job: convey density without panic. The body uses the proprietary **NationalWeb** sans, headlines hit 68px at weight 600 with `-1.2px` tracking, and the signature `#632ca6` purple-violet — the same hue as the dog mascot — appears as link colour, accent stamp, and chart-series-one. Buttons are tight (4–6px radii), surfaces stack in cool-grey tiers, and every product mock leans into multi-colour observability charts that prove the platform can render real metrics in real time.'

colors:
  bg: '#ffffff'                # body canvas, paper white
  bg-soft: '#f7f7f7'           # secondary section bg, observed
  surface: '#eef1f5'           # raised card panel, cool-grey
  surface-hover: '#e2e6eb'     # subtle hover state
  bg-dark: '#262626'           # dark CTA / dark footer band
  text: '#212529'              # primary body text, observed
  text-strong: '#0c0c0c'       # headline-grade text
  text-muted: '#555555'        # secondary copy
  text-soft: '#6b7280'         # captions, metadata
  brand: '#632ca6'             # the iconic Datadog purple-violet
  brand-hover: '#52248a'       # pressed state
  brand-soft: '#f0e8fa'        # tinted brand surface for callouts
  link: '#632ca6'              # links inherit brand
  on-brand: '#ffffff'
  # Multi-colour observability palette for charts/dashboard mocks
  chart-purple: '#632ca6'
  chart-blue: '#3b6ec7'
  chart-teal: '#1aa1b6'
  chart-green: '#3eb049'
  chart-yellow: '#f1c40f'
  chart-orange: '#f59f3a'
  chart-red: '#e74c3c'
  border: '#e5e7eb'            # cool-grey hairline
  border-soft: '#f0f0f0'       # softer divider

typography:
  display:
    family: 'NationalWeb, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: 'NationalWeb, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400]
  scale:
    h1:    { size: 68, weight: 600, lineHeight: 1.0,  tracking: '-1.2px' }   # observed
    h2:    { size: 48, weight: 600, lineHeight: 1.05, tracking: '-0.5px' }
    h3:    { size: 28, weight: 600, lineHeight: 1.2,  tracking: '0' }
    body:  { size: 16, lineHeight: 1.55 }
    label: { size: 13, weight: 500, tracking: '0.02em' }
    caption: { size: 12, weight: 400, lineHeight: 1.4 }

radius:
  xs: 2
  sm: 4
  md: 6
  lg: 8
  card: 8
  button: 4         # observed primary CTA radius
  pill: 9999

layout:
  container: 1320
  gutter: 24
  section: 80
  grid: 12
  density: 'high'   # marketing mocks emulate the in-product dashboard density

components:
  button-primary:
    bg: '#262626'
    color: '#ffffff'
    radius: 6
    weight: 500
    padding: '12px 20px'
  button-secondary:
    bg: '#eef1f5'
    color: '#1a1a1a'
    radius: 6
    weight: 500
  button-brand:
    bg: '#632ca6'
    color: '#ffffff'
    radius: 4
  card:
    bg: '#ffffff'
    radius: 8
    border: '1px solid #e5e7eb'
  chart-mock:
    bg: '#ffffff'
    palette: [chart-purple, chart-blue, chart-teal, chart-green, chart-yellow, chart-orange, chart-red]

lineage:
  summary: |
    Datadog's marketing site reads like a screenshot of the product
    itself. The white canvas, the cool-grey surface tiers, the tight
    4–6px button radii, and the multi-colour chart palette in every
    product mock are all chosen to communicate one idea: "this is
    what density looks like when it''s designed properly." The
    proprietary **NationalWeb** sans handles every text role — body,
    UI, headlines, labels — at weights 400/500/600/700, which is the
    enterprise-dashboard playbook (cf. Splunk, New Relic, Sumo Logic).
    The signature `#632ca6` purple-violet is the same hue as the
    Bagel mascot and operates as both link colour and accent stamp,
    a single-hue brand discipline borrowed from Stripe but pitched at
    a less consumer-friendly violet. Where Sentry uses violet on a
    deep aubergine canvas to feel handmade, Datadog uses the same
    hue on stark white to feel enterprise-ready. The chart palette
    (purple → blue → teal → green → yellow → orange → red) is the
    most distinctive component of the system: it''s the rainbow of
    a metrics dashboard, and it appears in every hero illustration
    to prove the platform can render hundreds of series simultaneously
    without losing legibility.
  influences:
    - name: Stripe
      role: Single-hue brand discipline (one confident colour, applied with restraint).
      url: https://stripe.com
    - name: Splunk / New Relic
      role: Enterprise-dashboard density, multi-colour metric palette, tight button radii.
      url: https://www.splunk.com
    - name: Bloomberg Terminal
      role: The deep-historical reference for "data-density as a design value" in monitoring UIs.
      url: https://www.bloomberg.com/professional/products/bloomberg-terminal
---

## Overview

Datadog's site is a tour of the product, presented at marketing scale.
The body canvas is paper-white `#ffffff`, headlines hit 68px at weight
600 with `-1.2px` tracking — the proprietary **NationalWeb** sans is
the only typeface in play, used at 400 through 700. The `#632ca6`
purple-violet (the Bagel-mascot hue) operates as link colour and accent
stamp, never as the dominant surface. Buttons are tight 4–6px radii,
surfaces stack in cool-grey tiers (`#f7f7f7` → `#eef1f5` → `#e2e6eb`),
and every hero illustration is a multi-colour observability chart
proving the platform handles hundreds of series.

The visual signature isn't a single bold gesture — it's the *density*
of the chart mocks. Where Linear shows a single neat list and Vercel
shows a single deploy graph, Datadog shows seven colour-coded series
overlaid on a single panel. That density is the brand.

## Colors

- **bg** `#ffffff` — paper-white canvas, no warmth tilt
- **bg-soft** `#f7f7f7` — secondary section background
- **surface** `#eef1f5` — raised card / panel, cool-grey
- **bg-dark** `#262626` — primary CTA background, dark footer band
- **brand** `#632ca6` — the iconic Datadog purple-violet
- **brand-soft** `#f0e8fa` — tinted brand surface for soft callouts
- **chart-palette** purple/blue/teal/green/yellow/orange/red — the seven-series rainbow that defines every dashboard mock
- **text** `#212529` — primary body text
- **text-muted** `#555555` — secondary copy and captions
- **border** `#e5e7eb` — cool-grey hairline, never solid grey

## Typography

The proprietary **NationalWeb** is the entire typographic system. It's
a tightly-spaced humanist sans designed for dense data tables — the
same lineage that produced Klim's National 2 (which is the foundation
of NationalWeb). Headlines run 68px/600 with `-1.2px` tracking
(roughly `-0.018em`), which gives the bulletin-bold feel without
falling into the negative-tracked aggression of NotionInter or Linear's
display sans.

Body type uses the same NationalWeb at 400/500/600, sized 16px with
1.55 line-height. Captions step down to 12px, labels to 13px with
slight positive tracking. There's no editorial serif and no display
mono on the marketing surface — the brand voice is single-typeface
discipline, which reinforces the "everything-in-one-place" platform
positioning.

Code samples and dashboard labels use a Menlo/Monaco system mono stack —
intentionally generic, since the in-product UI ships its own monospace
and Datadog doesn't compete with it on marketing.

## Layout

A wide 1320px container with 24px gutters, 80px vertical rhythm
between sections. The 12-column grid is densely subdivided in
feature-comparison tables and integration-logo grids (often 6–8 columns
of small SaaS logos). Cards use 8px radii, buttons use 4–6px (tighter
than the SaaS norm), and product mocks lean into in-product chrome
fidelity — they look like real Datadog dashboards because they are.

## Elevation & Depth

Depth is handled by cool-grey tonal layering and a single hairline
border (`#e5e7eb`). Cards rarely use shadows; instead, the `#eef1f5`
surface tier separates from the white canvas through colour tilt
alone. Hero illustrations sometimes carry a soft 0.04 black drop-shadow
to lift dashboard mocks off the page, but the rule is restraint.

## Shapes

Radii ladder is 2/4/6/8, with the brand button at 4px (markedly tighter
than the 8–12px modern SaaS norm). The tight radii are an enterprise
signal — Datadog refuses the rounded-friendliness of consumer SaaS in
favour of the slightly engineering-feeling square corner. Pills appear
only for tags and metric chips inside dashboard mocks.

## Components

The defining components are the **multi-colour chart card** (white
panel, 8px radius, hairline border, seven-series rainbow), the **dark
primary CTA** (`#262626` bg, white text, 6px radius, NationalWeb 500),
and the **integration logo grid** (6–8 columns of small SaaS marks
on a `#f7f7f7` band). The brand purple `#632ca6` rarely fills a
button; it lives in links, illustration accents, and the "Bagel"
chart-series-one role.

## Do's and Don'ts

- **Do** keep `#632ca6` as a link / accent / chart-series colour, never as a dominant surface fill — Datadog''s purple is a stamp, not a wash.
- **Do** lean into multi-colour observability charts in product mocks; the seven-series rainbow is the brand''s strongest density signal.
- **Do** hold buttons at 4–6px radii — the engineering-tight corner is the enterprise differentiator.
- **Don''t** use NationalWeb below 500 weight for headlines — the bulletin-bold register depends on weight 600 at 68px.
- **Don''t** introduce a second display typeface or an editorial serif; single-typeface discipline is the brand''s typographic signature.
- **Don''t** soften the white canvas with a warm tilt — Datadog''s neutrals are intentionally cool, distinguishing it from Notion and Stripe-warm marketing surfaces.
