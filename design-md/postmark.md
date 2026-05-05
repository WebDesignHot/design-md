---
name: Postmark
tagline: Yellow `#ffde00` + black + functional warmth — the transactional email API that designed itself like a friendly post office sign.
author: webdesignhot
source_url: https://postmarkapp.com
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, playful, sans, warm, bright]
preview_swatch: ['#ffde00', '#1c1d1f', '#ffffff']
related: [stripe, vercel, supabase]
description: 'Postmark''s site is the email-API equivalent of a friendly post office — a paper-white canvas, the iconic `#ffde00` postal-yellow accent (the same hue as the envelope mark), and a warm black `#1c1d1f` for type. The brand voice is functional, slightly playful, and defiantly anti-enterprise: ActiveCampaign acquired Postmark in 2022 and the marketing has retained the original Wildbit personality (pragmatic, opinionated, developer-friendly). Type uses **Inter** for body with a slightly heavier display weight, buttons are tight 6px radii, and product mocks lean into delivery-stat dashboards rendered with confidence rather than density.'

colors:
  bg: '#ffffff'                # paper-white canvas
  bg-soft: '#fafaf7'           # warm-tinted secondary section bg
  surface: '#fff8d4'           # tinted yellow surface for hero callouts
  surface-neutral: '#f5f5f2'   # cool-neutral panel
  bg-dark: '#1c1d1f'           # dark CTA / dark footer
  text: '#1c1d1f'              # primary copy, warm black
  text-strong: '#000000'       # headline-grade text
  text-muted: '#5c5e63'        # secondary copy
  text-soft: '#8a8d93'         # captions, metadata
  brand: '#ffde00'             # the iconic Postmark postal-yellow
  brand-hover: '#f0d000'       # pressed state
  brand-soft: '#fff8d4'        # tinted surface for soft callouts
  link: '#1c4eb8'              # functional blue link, not the yellow
  on-brand: '#1c1d1f'          # dark text on yellow
  accent-blue: '#1c4eb8'       # secondary functional blue
  accent-green: '#22c55e'      # success / delivery indicator
  accent-red: '#dc2626'        # bounce / error indicator in mocks
  border: '#e5e5e2'            # warm-grey hairline
  border-soft: '#f0f0ed'       # softer divider

typography:
  display:
    family: 'Inter, "Inter Variable", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [600, 700, 800]
  body:
    family: 'Inter, "Inter Variable", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 60, weight: 700, lineHeight: 1.1,  tracking: '-0.02em' }
    h2:    { size: 40, weight: 700, lineHeight: 1.15, tracking: '-0.015em' }
    h3:    { size: 26, weight: 600, lineHeight: 1.25, tracking: '-0.005em' }
    body:  { size: 17, lineHeight: 1.6 }
    code:  { size: 14, family: mono, lineHeight: 1.55 }
    label: { size: 12, weight: 600, tracking: '0.04em' }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  card: 8
  button: 6
  pill: 9999

layout:
  container: 1200
  gutter: 24
  section: 88
  grid: 12

components:
  button-primary:
    bg: '#ffde00'
    color: '#1c1d1f'
    radius: 6
    weight: 600
    padding: '12px 22px'
  button-secondary:
    bg: 'transparent'
    color: '#1c1d1f'
    radius: 6
    border: '1px solid #1c1d1f'
  button-dark:
    bg: '#1c1d1f'
    color: '#ffffff'
    radius: 6
  card:
    bg: '#ffffff'
    radius: 8
    border: '1px solid #e5e5e2'
  callout-yellow:
    bg: '#fff8d4'
    radius: 12
    border: 'none'
  delivery-stat:
    bg: '#ffffff'
    radius: 8
    family: mono
    palette: [accent-green, accent-blue, accent-red]

lineage:
  summary: |
    Postmark was originally a Wildbit product — the same Philadelphia
    studio behind Beanstalk and Tower for Mac — and the marketing
    surface still carries that 2010s indie-developer warmth even
    after the 2022 ActiveCampaign acquisition. The chromatic system
    is built around the iconic `#ffde00` postal-yellow (the same
    hue as the envelope mark), which operates as the primary CTA
    fill and as a tinted callout surface (`#fff8d4`). The body
    canvas is paper-white, type is set in **Inter** with a warm
    black `#1c1d1f` (not pure `#000`) for body, and the link colour
    is a functional blue `#1c4eb8` rather than the yellow — keeping
    the yellow as decoration and CTA, not as wayfinding. Where
    Resend uses a cold black-and-white minimalism for transactional
    email, Postmark uses warm yellow + warm black for the same
    product space; where Mailchimp uses Cavendish Yellow as its
    entire personality, Postmark holds the yellow to specific
    moments (CTAs, callouts, the envelope mark). The result is a
    transactional-email API that feels approachable rather than
    enterprise — closer to a friendly post office than to an SMTP
    relay vendor.
  influences:
    - name: Wildbit
      role: Originator studio — the indie-developer warmth and pragmatic typography lineage.
      url: https://wildbit.com
    - name: Mailchimp
      role: The yellow-as-brand reference; Postmark holds yellow tighter as CTA-only.
      url: https://mailchimp.com
    - name: Stripe
      role: Single-accent dev-API brand discipline; tight button radii, restrained chromatic system.
      url: https://stripe.com
---

## Overview

Postmark''s site is what a developer-facing transactional email API
looks like when it''s designed by people who care about typography.
The body canvas is paper-white, headlines hit 60px at weight 700 in
**Inter** with `-0.02em` tracking, and the iconic postal-yellow
`#ffde00` carries the primary CTA fills and the tinted hero callout
(`#fff8d4`). Body text is set in a warm black `#1c1d1f` rather than
pure `#000`, and links use a functional blue `#1c4eb8` to keep the
yellow reserved for action moments rather than wayfinding.

The visual signature is the **yellow-on-warm-white callout**: a soft
`#fff8d4` tinted surface holding a hero pull-quote or a delivery-stat
mock. It''s the brand''s "post office sign" gesture — friendly,
functional, and impossible to confuse with the cold minimalism of
Resend or the enterprise density of SendGrid.

## Colors

- **bg** `#ffffff` — paper-white canvas
- **bg-soft** `#fafaf7` — warm-tinted secondary section
- **surface** `#fff8d4` — tinted yellow callout surface
- **bg-dark** `#1c1d1f` — dark CTA / dark footer
- **brand** `#ffde00` — the iconic Postmark postal-yellow
- **brand-hover** `#f0d000` — pressed state
- **link** `#1c4eb8` — functional blue link colour (intentionally not yellow)
- **text** `#1c1d1f` — warm black, never pure `#000`
- **accent-green** `#22c55e` — delivery success indicator
- **accent-red** `#dc2626` — bounce / error indicator in delivery-stat mocks
- **border** `#e5e5e2` — warm-grey hairline divider

## Typography

Display and body are both **Inter** at weights 400/500/600/700/800,
sized 60px on a 66px line-height (1.1) for the hero with `-0.02em`
tracking. Body type is sized 17px (a touch larger than the dev-tool
norm of 16px) on a 1.6 line-height — the slightly larger body is
part of the warmth: the page reads as if you''re being addressed,
not pitched to.

Code samples use **JetBrains Mono** at 400 and 500, sized 14px, with
labels in the same mono at 12px and `0.04em` tracking. The mono
appears mainly in API documentation snippets and in delivery-stat
chart labels, not as decoration.

## Layout

A 1200px max container with 24px gutters and 88px vertical rhythm
between sections. Cards use 8px radii, buttons use 6px (tight, in
the dev-API tradition), and the yellow-tinted callouts use a softer
12px radius to feel more poster-like. The 12-column grid is
densely subdivided in feature-comparison tables and integration-logo
bands.

## Elevation & Depth

Depth is achieved through warm tonal layering and a single warm-grey
hairline (`#e5e5e2`). Cards rarely use shadows; instead the yellow-tinted
callout (`#fff8d4`) acts as a soft pop of warmth that lifts content
without elevation. The dark `#1c1d1f` CTA surfaces and footer bands
provide tonal contrast against the paper-white canvas.

## Shapes

Radii ladder is 4/6/8/12, with buttons at 6px (matching Stripe''s
tight CTA tradition) and yellow callouts at 12px (slightly softer,
more poster-like). Pills appear only for status tags inside delivery
stat mocks (delivered/bounced/opened).

## Components

The defining components are the **yellow CTA** (`#ffde00` fill,
warm-black text, 6px radius, Inter 600), the **yellow-tinted callout**
(`#fff8d4` bg, 12px radius, no border — the page''s warmth gesture),
and the **delivery-stat dashboard mock** (white card, 8px radius,
green/blue/red severity tags in JetBrains Mono). The dark `#1c1d1f`
secondary CTA appears for high-contrast moments, and links are the
functional blue `#1c4eb8` everywhere.

## Do''s and Don''ts

- **Do** hold the yellow `#ffde00` to CTAs and callout surfaces; using it as a body wash flattens the brand into Mailchimp territory.
- **Do** set body text in warm black `#1c1d1f`, never pure `#000` — the warmth is what distinguishes Postmark from cold-minimal competitors like Resend.
- **Do** use the functional blue `#1c4eb8` for links and inline references, keeping yellow reserved for action.
- **Don''t** apply the yellow to body text or headlines — it lives only in surfaces and CTAs.
- **Don''t** soften the brand voice with rounded pills or playful illustration — Postmark''s tone is functional warmth, not playfulness.
- **Don''t** drop body type below 17px; the slightly-larger body is part of the brand''s "addressed to you, not pitched at you" voice.
