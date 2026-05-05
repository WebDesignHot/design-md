---
name: Stripe
tagline: Editorial fintech polish — light Söhne headlines at weight 300, navy-not-black text, signature `#533afd` purple CTAs.
author: webdesignhot
source_url: https://stripe.com
spec: design.md/v1
quality: curated
featured: true
categories: [fintech, saas]
tags: [light, editorial, sans, cool, structured]
preview_swatch: ['#ffffff', '#533afd', '#061b31']
related: [vercel, linear]
description: 'Stripe''s marketing site reads like a financial broadsheet — Söhne variable at weight 300 (light) for headlines, navy-not-black body text, the signature `#533afd` purple reserved for action surfaces with conservative 4px radius. The most editorial design system in fintech.'

colors:
  bg: '#ffffff'
  bg-quiet: '#f8fafd'
  bg-min: '#ffffff'
  text: '#061b31'
  text-soft: '#50617a'
  text-subdued: '#64748d'
  brand: '#533afd'
  brand-hover: '#4032c8'
  brand-light: '#665efd'
  brand-tint: '#e8e9ff'
  border: '#d4dee9'
  border-subdued: '#d4dee9'
  link: '#533afd'
  on-brand: '#ffffff'

typography:
  display:
    family: 'sohne-var, "SF Pro Display", -apple-system, sans-serif'
    weights: [300, 400]
  body:
    family: 'sohne-var, "SF Pro Display", -apple-system, sans-serif'
    weights: [300, 400]
  mono:
    family: 'SourceCodePro, "SFMono-Regular", ui-monospace, monospace'
    weights: [400, 500]
  scale:
    display:    { size: 64, weight: 300, lineHeight: 1.1, tracking: -0.018 }
    h1:         { size: 48, weight: 300, lineHeight: 1.1, tracking: -0.015 }
    h2:         { size: 32, weight: 300, lineHeight: 1.2, tracking: -0.012 }
    h3:         { size: 22, weight: 400, lineHeight: 1.3 }
    body-large: { size: 18, weight: 300, lineHeight: 1.55 }
    body:       { size: 16, weight: 300, lineHeight: 1.55 }
    body-small: { size: 14, weight: 400, lineHeight: 1.5 }
    label:      { size: 12, weight: 400, lineHeight: 1.3 }

radius:
  sm: 4
  md: 6
  button: 4
  card: 8

layout:
  page-width: 1264

motion:
  ease: 'cubic-bezier(0.4, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 220

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: 4
    padding: '15.5px 24px 16.5px'
    font: 'sohne-var 16px / weight 400'
    use: 'Start now / Get started — high-impact purple at conservative radius'
  button-secondary:
    backgroundColor: bg-quiet
    textColor: text
    border: border
    rounded: 4
  card:
    backgroundColor: '#ffffff'
    border: border-subdued
    rounded: 8
    shadow: '0 6px 22px rgba(0, 55, 112, 0.10), 0 4px 8px rgba(0, 59, 137, 0.02)'

lineage:
  summary: |
    Stripe pioneered the editorial fintech aesthetic — financial-grade
    trust delivered through magazine typography rather than blue-suit
    corporate gloss. Headlines use **Söhne variable** at weight `300`
    (light), unusual for a tech company; body text uses the same family.
    The text color is `#061b31` (deep navy) rather than pure black,
    softening the editorial feel further. The signature `#533afd`
    purple appears only on action surfaces with a tight `4px` radius —
    the conservative geometry signals seriousness, while the saturated
    purple itself signals modernity. Cool-toned shadows
    (`rgba(0,55,112,...)` with a navy hue) reinforce the financial-blue
    sensibility throughout. Where Vercel goes black-on-near-white at
    weight 600 for tech polish, Stripe goes navy-on-pure-white at
    weight 300 for editorial gravitas.
  influences:
    - name: Söhne (Klim Type Foundry)
      role: Headline typeface — editorial serif-replacement sans, used at light weights
      url: https://klim.co.nz/retail-fonts/sohne/
    - name: Bloomberg Terminal / FT Online
      role: Financial-broadsheet color discipline — navy text on white, purple/blue accent
      url: https://www.bloomberg.com
    - name: Apple SF Pro Display
      role: Type fallback in regions without Söhne license; sets tracking baseline
      url: https://developer.apple.com/fonts/
---

## Overview

Stripe is editorial fintech at full conviction. The marketing site reads
like a financial broadsheet — light-weight Söhne headlines at `300`
(unusual for a tech company), navy-not-black text at `#061b31`, generous
white space, and the signature `#533afd` purple CTAs at a conservative
`4px` radius. The combination signals "we are serious about money, and
we read magazines."

Distinctive vs. nearby alternatives: where most fintech defaults to navy
or green corporate palettes, Stripe took purple — and shipped it at a
specific saturation (`#533afd`) that's both bright enough to feel modern
and dark enough to feel trustworthy. The typography move is even
braver: 300-weight headlines on a marketing site, where most companies
push to 600+ for "make it pop." Stripe's restraint is the brand asset.

## Colors

- **bg** `#ffffff` — pure white canvas (page paints over light gradients in hero).
- **bg-quiet** `#f8fafd` — light sections, subtle elevation cues.
- **text** `#061b31` — body and headlines. Deep navy, not black — softer.
- **text-soft** `#50617a` — supporting copy.
- **brand** `#533afd` — the signature Stripe purple. Action surfaces only.
- **brand-hover** `#4032c8` — pressed/hover state.
- **brand-tint** `#e8e9ff` — backgrounds for highlighted regions.
- **border** `#d4dee9` — cool-tinted gray, never warm.

## Typography

The display voice is **Söhne** — Klim Type Foundry's variable sans —
shipped at weight `300` for headlines, an editorial choice that signals
gravitas over urgency. Headlines at 64px / 300 read like magazine
display. Body holds at `300` too; what most systems call "regular"
(`400`) is "bold" in Stripe's hierarchy.

The lighter type weight forces longer line lengths to feel correct,
which feeds the editorial rhythm. Reading width caps generously at
~720–800px. SF Pro Display fallback in regions without Söhne licensing
keeps the silhouette close.

Mono is **Source Code Pro** for code blocks. Conservative; the system
prefers showing API docs in compact, readable form rather than typo-
graphically punching above its weight.

## Layout

Page width caps at `1264px`. Multi-column layouts appear in pricing,
documentation, and product breakdowns. Marketing hero uses asymmetric
grids — content left, animated demo right — common pattern. Section
gutters at 80–120px depending on density.

## Elevation & Depth

Cool-toned shadows are the system's depth tell. The signature card
shadow uses `rgba(0,55,112,0.10)` — a navy-tinted shadow rather than
neutral black — at 6px / 22px spread. Layered with a 4px micro-shadow
at 2% opacity. Borders take over for tighter elevations.

## Shapes

`4px` is the dominant button radius — conservative, financial. Cards
move to `8px`. The system has no pills or `9999px` radii on action
surfaces; that geometry is reserved for badges and avatar circles.

## Components

Primary button: signature `#533afd` purple, white text, `4px` radius,
weighty padding (15.5px top / 16.5px bottom — asymmetric for optical
balance). Secondary buttons borrow `bg-quiet` for fill. Cards use white
on cool-shadow + 1px navy-tinted border.

## Do's and Don'ts

- **Do** use weight `300` on headlines — the lightness is the brand.
- **Do** color text navy `#061b31`, not pure black. The cool tint
  unifies with shadows and accents.
- **Do** reserve `#533afd` for action surfaces (CTAs, links, key
  highlights). Never as a body-text fill.
- **Don't** use radii larger than `8px` on action buttons. Stripe's
  restraint is geometric.
- **Don't** swap Söhne for Inter or another open-source sans without
  changing the weight scheme — Inter at 300 reads anemic; Söhne is
  designed to land at light.
- **Don't** apply pure-black shadows. The cool-toned navy hint is what
  keeps the system editorial rather than corporate-blue.
