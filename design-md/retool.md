---
name: Retool
tagline: Pragmatic blue `#3a55fc` + Inter + dense product mocks — the internal-tool platform that designed itself like a well-organised admin panel.
author: webdesignhot
source_url: https://retool.com
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, structured, sans, dense, cool]
preview_swatch: ['#ffffff', '#3a55fc', '#0a0a0a']
related: [vercel, linear, supabase]
description: 'Retool''s site is the internal-tool platform rendered as a marketing page — a paper-white canvas, a confident `#3a55fc` indigo-blue that does almost all the brand work, and dense product mocks showing real Retool apps (admin panels, CRUD forms, internal dashboards). Type is **Inter** at 400/500/600/700, headlines hit 56–72px with negative tracking, and buttons sit at 6–8px radii in the dev-infra tradition. The visual register is "we built this for engineers who would otherwise write internal tools from scratch" — pragmatic, structurally rigorous, and unafraid to show real product UI in every hero illustration.'

colors:
  bg: '#ffffff'                # paper-white canvas
  bg-soft: '#fafafa'           # secondary section background
  surface: '#f4f4f5'           # raised card / panel surface
  surface-hover: '#ebebed'     # hover state
  bg-dark: '#0a0a0a'           # dark CTA / dark footer band
  bg-tinted: '#f0f3ff'         # tinted brand surface for hero band
  text: '#0a0a0a'              # primary copy, near-black
  text-strong: '#000000'       # headline-grade text
  text-muted: '#525252'        # secondary copy
  text-soft: '#737373'          # captions, metadata
  brand: '#3a55fc'              # the Retool indigo-blue
  brand-hover: '#2c45e5'        # pressed state
  brand-soft: '#e8edff'         # tinted brand surface for callouts
  link: '#3a55fc'
  on-brand: '#ffffff'
  accent-purple: '#7c3aed'      # secondary illustration accent
  accent-green: '#10b981'       # success / status indicator
  accent-orange: '#f97316'      # warning / highlight in product mocks
  border: '#e4e4e7'             # cool-grey hairline
  border-soft: '#f0f0f2'        # softer divider

typography:
  display:
    family: 'Inter, "Inter Variable", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Inter, "Inter Variable", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 72, weight: 600, lineHeight: 1.05, tracking: '-0.025em' }
    h2:    { size: 48, weight: 600, lineHeight: 1.1,  tracking: '-0.02em' }
    h3:    { size: 28, weight: 600, lineHeight: 1.25, tracking: '-0.01em' }
    body:  { size: 16, lineHeight: 1.6 }
    code:  { size: 13, family: mono, lineHeight: 1.55 }
    label: { size: 12, weight: 500, tracking: '0.03em' }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  card: 12
  button: 8
  pill: 9999

layout:
  container: 1280
  gutter: 24
  section: 96
  grid: 12
  density: 'high'

components:
  button-primary:
    bg: '#3a55fc'
    color: '#ffffff'
    radius: 8
    weight: 500
    padding: '10px 18px'
  button-secondary:
    bg: '#ffffff'
    color: '#0a0a0a'
    radius: 8
    border: '1px solid #e4e4e7'
  button-dark:
    bg: '#0a0a0a'
    color: '#ffffff'
    radius: 8
  card:
    bg: '#ffffff'
    radius: 12
    border: '1px solid #e4e4e7'
  product-mock:
    bg: '#ffffff'
    radius: 12
    border: '1px solid #e4e4e7'
    chrome: 'admin-panel'   # tables, forms, sidebars rendered at marketing scale

lineage:
  summary: |
    Retool sits in a niche the design industry rarely treats with
    rigour: internal tools. The marketing surface refuses to apologise
    for that — every hero illustration is an actual Retool app
    (CRUD form, admin panel, multi-table dashboard) rendered at
    marketing scale, with real-looking data and real-looking
    sidebars. The body canvas is paper-white, headlines hit 72px
    at weight 600 in **Inter** with `-0.025em` tracking, and the
    confident `#3a55fc` indigo-blue carries every link, CTA fill,
    and brand mark. Where Vercel and Linear use accent colours that
    feel "designed", Retool''s indigo-blue feels chosen — it''s the
    blue you''d pick if you were building an admin panel and only
    had time for one accent. **JetBrains Mono** carries every code
    sample (Retool''s low-code platform still ships JS expressions
    in every component), and the layout density is intentionally
    high: feature-comparison tables, integration-logo grids, and
    customer-quote bands all run dense. The lineage is clearly
    Vercel-and-Linear-adjacent for chromatic restraint and grid
    discipline, but Retool pushes harder on product-mock fidelity
    and on the "this looks like the tool you''re buying" honesty.
  influences:
    - name: Linear
      role: Structural rigour, restrained accent palette, Inter-everywhere typography.
      url: https://linear.app
    - name: Vercel
      role: Cool dark/light contrast bands, single-accent dev-infra discipline, tight button radii.
      url: https://vercel.com
    - name: Stripe
      role: Single-confident-blue brand axis (Stripe blurple → Retool indigo) and dense feature-table marketing pattern.
      url: https://stripe.com
---

## Overview

Retool''s site refuses to dress up the internal-tool category. The
canvas is paper-white, headlines hit 72px at weight 600 in **Inter**
with `-0.025em` tracking, and the indigo-blue `#3a55fc` carries
every link, CTA fill, and brand reference. Every hero illustration
is an actual Retool app — admin panel, CRUD form, multi-table
dashboard — rendered at marketing scale with real-looking data,
real sidebars, and real interaction chrome.

The signature gesture is the **product-mock-as-hero**: not a stylised
illustration of what Retool could do, but a screenshot of what
Retool *is*. It says "this is the tool, and the tool is enough." That
honesty distinguishes Retool from competitors who try to make
internal tooling look like consumer SaaS.

## Colors

- **bg** `#ffffff` — paper-white canvas, no warmth tilt
- **bg-soft** `#fafafa` — secondary section background
- **surface** `#f4f4f5` — raised card / panel surface, cool-grey
- **bg-tinted** `#f0f3ff` — tinted brand surface for hero accent band
- **bg-dark** `#0a0a0a` — dark CTA / dark footer
- **brand** `#3a55fc` — the Retool indigo-blue, single-hue brand axis
- **brand-soft** `#e8edff` — tinted callout surface
- **accent-purple** `#7c3aed` — secondary illustration accent
- **text** `#0a0a0a` — near-black primary copy
- **text-muted** `#525252` — secondary copy
- **border** `#e4e4e7` — cool-grey hairline divider

## Typography

Display and body are both **Inter** at weights 400/500/600/700, sized
72px on a 75.6px line-height (1.05) for the hero with `-0.025em`
tracking. Inter is the structurally-correct sans for dev-infra
marketing — Retool inherits its typographic register directly from
Linear/Vercel/Supabase, which is part of the brand''s "we know what
camp we''re in" honesty.

Code samples and inline expressions use **JetBrains Mono** at 400
and 500, sized 13px on a 1.55 line-height. The mono presence is
heavier than on most marketing sites because Retool''s low-code
platform still surfaces JS expressions in every component — the
docs and marketing reflect that reality.

## Layout

A 1280px max container with 24px gutters and 96px vertical rhythm.
Cards use 12px radii, buttons use 8px (the dev-infra norm), and
product mocks use 12px with a hairline border to register as
"raised panel". The 12-column grid is densely subdivided in
feature-comparison tables and integration-logo bands (Retool
integrates with hundreds of databases and APIs, and the marketing
shows it).

## Elevation & Depth

Depth is achieved through cool-grey tonal layering and a single
hairline (`#e4e4e7`). Cards rarely use shadows; the `#f4f4f5`
surface tier separates from white through colour tilt alone.
Product mocks sometimes carry a soft 0.04 black drop-shadow to
lift them off the page, but the rule is restraint — the mocks
are dense enough that they don''t need elevation to read as
distinct panels.

## Shapes

Radii ladder is 4/6/8/12, with cards at 12px and buttons at 8px.
The geometry sits squarely in the modern dev-infra norm (Vercel,
Supabase, Linear), and Retool doesn''t deviate. Pills (`9999px`)
appear only for status tags and integration chips inside product mocks.

## Components

The defining components are the **indigo CTA** (`#3a55fc` fill,
white text, 8px radius, Inter 500), the **product-mock card**
(white panel, 12px radius, hairline border, real admin-panel UI),
and the **dark `#0a0a0a` secondary CTA** for high-contrast moments.
Customer-logo bands run dense (8–12 columns of small SaaS marks),
and feature-comparison tables use the cool-grey surface tier with
the indigo brand-pop for "yes, included" cells.

## Do''s and Don''ts

- **Do** keep `#3a55fc` as the single brand-axis colour; the purple/green/orange accents are illustration-only, never structural.
- **Do** show real Retool product UI in hero illustrations — the platform''s honesty is the strongest brand asset, and stylised illustrations would dilute it.
- **Do** lean into density in feature-comparison tables and integration-logo bands; Retool''s value proposition is breadth, and the layout should reflect it.
- **Don''t** soften the brand voice with rounded pills or playful illustration — Retool''s tone is pragmatic engineering, not consumer warmth.
- **Don''t** introduce a display sans or editorial serif; Inter + JetBrains Mono is the entire system, and the restraint is deliberate.
- **Don''t** stylise product mocks into abstract diagrams — the actual admin-panel UI is what makes the marketing trustworthy.
