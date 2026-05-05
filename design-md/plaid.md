---
name: Plaid
tagline: Pale blue trust on white, classical Stripe-adjacent type, and a Benjamin-Franklin-as-mascot moment of personality.
author: webdesignhot
source_url: https://plaid.com
spec: design.md/v1
quality: curated
featured: false
categories: [fintech, dev-tools]
tags: [light, sans, structured, cool, soft, spacious]
preview_swatch: ['#ffffff', '#0a85ea', '#000000']
related: [stripe, vercel, mintlify]
description: 'Plaid''s site uses a pale-blue trust palette — white canvas, near-black ink, a single confident `#0a85ea` action blue, and Inter (or a custom plaid-sans) for both display and body. The aesthetic descends from Stripe''s 2017-era restraint, but Plaid breaks the discipline with one move: an animated Benjamin-Franklin mascot that sits inside an otherwise institutional layout, signalling consumer warmth on a developer-finance product.'

colors:
  bg: '#ffffff'                # white canvas
  bg-soft: '#f7f9fb'           # palest blue-grey panel
  bg-blue: '#eaf3ff'           # signature pale-blue band
  bg-ink: '#000000'            # black hero band, used rarely
  bg-cream: '#f3efe6'          # warm-cream "story" band (Franklin scenes)
  surface: '#f3f5f8'           # cool-grey card base
  surface-soft: '#fafbfc'
  text: '#000000'              # near-pure black on white
  text-strong: '#000000'
  text-muted: '#4a5568'
  text-soft: '#7a8390'
  brand: '#0a85ea'             # Plaid action blue
  brand-strong: '#0066c0'      # pressed / hover
  brand-soft: '#dceeff'        # info wash
  accent: '#000000'             # secondary brand colour is black
  accent-soft: '#0a85ea14'      # 8% blue tint for chips
  border: '#0000001a'           # 10% black hairline
  border-soft: '#00000010'
  on-brand: '#ffffff'

typography:
  display:
    family: '"Plaid Sans", "Inter Display", Inter, "Helvetica Neue", Arial, sans-serif'
    weights: [500, 600, 700]
  body:
    family: '"Plaid Sans", Inter, -apple-system, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "Menlo", Consolas, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 64, weight: 600, lineHeight: 1.05, tracking: '-0.02em' }
    h2:    { size: 44, weight: 600, lineHeight: 1.1,  tracking: '-0.015em' }
    h3:    { size: 24, weight: 600, lineHeight: 1.25 }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 12, weight: 500, family: mono, tracking: '0.04em' }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  card: 12
  xl: 16
  button: 8
  pill: 9999

layout:
  container: 1200
  gutter: 24
  section-y: 96
  rhythm: 8

components:
  button-primary:
    bg: '#000000'
    color: '#ffffff'
    radius: 8
    weight: 500
    paddingX: 20
    paddingY: 12
  button-secondary:
    bg: '#ffffff'
    color: '#000000'
    border: '1px solid #0000001a'
    radius: 8
  button-link:
    color: '#0a85ea'
    underline: true
  card:
    bg: '#ffffff'
    border: '1px solid #0000001a'
    radius: 12

lineage:
  summary: |
    Plaid's marketing site descends directly from the Stripe-era
    fintech trust palette: white canvas, near-pure black type,
    pale-blue panels, single confident action blue. The rendition is
    quieter and more institutional than today's Stripe — Plaid leans
    on classical typography (a Plaid-Sans variant of Inter at 500-600,
    no serif) and 1px / 10% black hairlines rather than gradients.
    The single moment of personality in an otherwise restrained
    system is the Benjamin Franklin mascot — an animated, illustrated
    figure who narrates feature sections from inside a warm cream
    band `#f3efe6`. That break from cool blue-greys to warm cream is
    Plaid's signature trick, and it positions Plaid as more
    consumer-friendly than the Visa/Mastercard infrastructure plays
    it competes against. The 12px card radius and 8px button radius
    sit at the modern 2026 SaaS consensus, neither archaic (Mercury's
    6px) nor consumer-soft (Wise's full pill).
  influences:
    - name: Stripe (2017-2019 era)
      role: Pale-blue trust palette, single-accent CTA discipline, classical sans typography.
      url: https://stripe.com
    - name: Vercel
      role: Black CTA on white canvas with mono micro-labels.
      url: https://vercel.com
    - name: Mailchimp / Slack illustrations
      role: Mascot-as-narrative-device — Plaid's Franklin echoes that warm-illustration tradition inside a fintech context.
      url: https://mailchimp.com
---

## Overview

Plaid's homepage is the trust-fintech archetype refined: white canvas,
black H1, pale-blue trust panels, and a confident `#0a85ea` link
blue. Where Stripe today reaches for chromatic gradient and
animated grids, Plaid stays with the older Stripe-era restraint —
near-pure black on white, single-accent blue, generous whitespace,
1px hairlines.

The single piece of personality is a recurring Benjamin Franklin
mascot illustration set inside warm cream `#f3efe6` bands. That
animation is the brand's emotional signature in an otherwise
institutional layout — and it's what differentiates Plaid from the
otherwise-similar Stripe-trust-palette competitors.

## Colors

- **bg** `#ffffff` — white canvas
- **bg-blue** `#eaf3ff` — pale-blue trust band
- **bg-cream** `#f3efe6` — warm-cream "Franklin storytelling" band, the brand's emotional zone
- **bg-ink** `#000000` — rare black band for emphasis
- **text** `#000000` — near-pure black, no opacity softening
- **brand** `#0a85ea` — Plaid action blue, used for links and accent
- **accent** `#000000` — secondary brand is black; the CTA itself uses black, not blue
- **border** `#0000001a` — 10% black hairline

## Typography

Display is a custom **Plaid Sans** (an Inter-class neo-grotesque) at
600 weight, sized 64px on a 67px line height with `-0.02em`
tracking. Body is the same family at 16px / 24px. Mono micro-labels
appear at 12px with `0.04em` tracking. The system is fully sans;
unlike Mercury's serif headline, Plaid keeps every weight in one
typeface, reinforcing the institutional tone.

The H1 size at 64 is notably more restrained than Brex's 72 or
Ramp's 80 — Plaid plays it quieter, closer to a corporate bank
than a tech-flash startup.

## Layout

Container is 1200px with 96px section padding. The 8px-rhythm
spacing ladder is standard. Cards round at 12px, buttons at 8px —
modern but not consumer-soft. Pages alternate between white,
pale-blue panel, and the cream Franklin band, creating a calm
sectional rhythm.

## Elevation & Depth

Depth is hairline-only (`1px / #0000001a`). There are no shadows,
no glassmorphism, and no gradients. The pale-blue panels and
cream Franklin scenes do all the sectional work; cards are flat
white on coloured backgrounds.

## Shapes

Radii ladder: 4 / 6 / 8 / 12 / 16. Cards at 12, buttons at 8 —
the safe modern pairing. Pills (9999) reserved for status chips
and tags. Plaid keeps every rounded corner conservative — softer
radii would shift it toward consumer brand, harder toward legacy
finance.

## Components

The defining components are the **black CTA button**
(`#000000` / white / radius 8 / weight 500), the **pale-blue
trust panel** (`#eaf3ff` background with black type), the **cream
Franklin band** (`#f3efe6` with illustrated character animations),
and the **link blue** `#0a85ea` used for inline CTAs and developer
documentation references. Mono code blocks render in monospace
inside white cards with the same 12px radius.

## Do's and Don'ts

- **Do** keep the action CTA black, not blue — the `#0a85ea` is reserved for links and accent, never as a primary fill.
- **Do** use the cream Franklin band as the brand's only warm zone; pale blue handles cool-trust sections.
- **Do** keep type fully sans — Plaid does not use serif anywhere on the marketing site.
- **Don't** introduce gradients or glow — Plaid's discipline is hairline-and-flat.
- **Don't** swap the H1 size larger than 64px; the restraint is a deliberate institutional gesture.
- **Don't** centre layouts; left-aligned grid is the brand's classical posture.
