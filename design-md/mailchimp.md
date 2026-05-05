---
name: Mailchimp
tagline: Cavendish-yellow chunkiness — a custom display serif (Cooper Light), the signature `#ffe01b` block, and a brand voice that hugs you while it ships campaigns.
author: webdesignhot
source_url: https://mailchimp.com
spec: design.md/v1
quality: curated
featured: false
categories: [saas, media]
tags: [light, warm, serif, sans, playful, bright, organic]
preview_swatch: ['#ffe01b', '#241c15', '#ffffff']
related: [kit-com, beehiiv, substack]
description: 'Mailchimp''s identity is the chunkiest in SaaS — the proprietary `#ffe01b` Cavendish yellow as a full-bleed canvas, a custom Cooper Light display serif (and "Graphik" for body), Freddie the chimp throwing a wink, and a brand voice that combines small-business warmth with a 25-year-design-craft heritage.'

colors:
  bg: '#ffffff'                # primary canvas
  bg-yellow: '#ffe01b'          # signature Cavendish yellow band
  bg-dark: '#241c15'            # peppercorn near-black
  surface: '#f6f6f4'            # warm-grey panel
  surface-soft: '#fbfbf8'       # softest neutral
  surface-yellow-soft: '#fff5b8' # pale yellow tint
  text: '#241c15'               # peppercorn body
  text-strong: '#0d0a05'        # near-black display
  text-muted: '#6e655a'         # warm grey caption
  text-soft: '#9b9388'          # tertiary
  text-on-yellow: '#241c15'     # peppercorn always on yellow
  brand: '#ffe01b'              # the yellow itself
  accent: '#241c15'             # peppercorn = secondary brand
  accent-cream: '#f5f2eb'       # cream tertiary
  border: '#241c15'             # solid peppercorn cards
  border-soft: '#e0ddd4'        # warm hairline
  on-brand: '#241c15'

typography:
  display:
    family: '"Cooper Light", "Cooper Lt BT", "Cooper Std", Georgia, serif'
    weights: [300, 400]
  body:
    family: '"Graphik", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  serif:
    family: '"Cooper Light", "Cooper Std", Georgia, serif'
    weights: [300, 400]
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", Menlo, monospace'
    weights: [400]
  scale:
    h1:    { size: 92, weight: 300, lineHeight: 0.95, tracking: '-0.025em', family: serif }
    h2:    { size: 60, weight: 300, lineHeight: 1.0,  tracking: '-0.018em', family: serif }
    h3:    { size: 28, weight: 600, lineHeight: 1.2,  tracking: '-0.005em' }
    body:  { size: 17, lineHeight: 1.5 }
    quote: { size: 24, family: serif, lineHeight: 1.35 }
    label: { size: 12, weight: 600, family: mono }

radius:
  xs: 0
  sm: 0
  md: 0
  lg: 0
  card: 0
  xl: 0
  xxl: 0
  button: 0
  pill: 9999

layout:
  container: 1280
  gutter: 24
  section-y: 140

components:
  - cavendish-yellow-hero
  - cooper-display-headline
  - peppercorn-square-cta
  - freddie-illustration
  - chunky-feature-card
  - testimonial-on-yellow

lineage:
  summary: |
    Mailchimp's design system is one of the most distinctive in SaaS,
    architected over the past 15 years primarily by Aaron Walter and
    the in-house brand team after the 2018 redesign. The signature
    move is the proprietary `#ffe01b` "Cavendish" yellow used as a
    full-bleed band, paired with a custom **Cooper Light** display
    serif (a refined cut of Cooper Old Style at the 300 light weight)
    and **Graphik** for body. Headlines hit 90px+ and the chunky-yet-
    refined Cooper terminals are unmistakable — no other 2026 SaaS
    runs a Cooper-class serif at heroic sizes. The radius system is
    aggressively zero — square corners on every card, button, and
    panel — which inherits from old-school print advertising
    rather than modern SaaS rounding. Freddie the chimp (illustrated
    in peppercorn `#241c15`) throws a wink across the marketing site.
    The closest design siblings are the 2018-era Slack rebrand
    aesthetic and the current Cavendish-licensed beehiiv yellow,
    but Mailchimp's Cooper serif puts it in a category of one.
  influences:
    - name: Slack (2018 rebrand)
      role: Sibling chunky-friendly brand-voice + custom display serif move.
      url: https://slack.com
    - name: Push Pin Studios / Milton Glaser
      role: 1960s display-typography heritage that the Cooper Light hero references.
      url: https://en.wikipedia.org/wiki/Push_Pin_Studios
    - name: Champion / Hoefler heritage
      role: American display-serif craft tradition the Cooper Light implements.
      url: https://www.typography.com
---

## Overview

Mailchimp's marketing site is anchored by three things: the proprietary
`#ffe01b` Cavendish yellow as a full-bleed hero canvas, a custom
**Cooper Light** display serif at 92px / 300 weight, and Freddie
the chimp winking from at least one band per page. Body type is
**Graphik** at 17px on a 24px line-height — set in peppercorn
`#241c15` rather than pure black so it reads warmer.

The signature compositional move is heroic Cooper Light displaying
a one-line marketing line ("Make your brand wear well.") on the
yellow band, then a peppercorn-square CTA with white Graphik label
sitting below. Square corners everywhere. Zero radius. That square-
corner discipline is what separates Mailchimp from every other
SaaS — it inherits print advertising rather than software UI.

## Colors

- **bg** `#ffffff` — the primary white canvas
- **bg-yellow** `#ffe01b` — Cavendish yellow, the signature
- **bg-dark** `#241c15` — peppercorn near-black band
- **text** `#241c15` — peppercorn body, never pure black
- **text-on-yellow** `#241c15` — peppercorn always on yellow
- **brand** `#ffe01b` — the yellow itself is the brand
- **accent** `#241c15` — peppercorn is the secondary brand
- **border** `#241c15` — solid 2px peppercorn on cards
- **border-soft** `#e0ddd4` — warm hairline for internal grids
- **accent-cream** `#f5f2eb` — tertiary panel tint

## Typography

Display is **Cooper Light** at 300 weight (the light cut, not the
classic Cooper Black), sized 92px on an 87px line-height with
`-0.025em` tracking. The face is a refined Cooper Old Style — soft
terminals, tall x-height, and just enough warmth to feel hand-drawn
rather than mechanical. Body is **Graphik** at 17/24, weighted 400
for paragraphs, 500 for nav, and 600 for stats and labels.

A monospaced **JetBrains Mono** appears for changelog timestamps
and the occasional "v2.0" badge. Cooper Light also serves the pull
quotes at 24px / 1.35.

## Layout

The container is 1280px with 24px gutters and a generous 140px of
section vertical rhythm. The page reads as alternating bands —
yellow hero → white feature row → cream pricing → peppercorn dark
testimonial → yellow footer — the tonal cycle is the rhythm.

## Elevation & Depth

Depth is essentially flat — no soft shadows on Mailchimp's marketing
canvas. Cards use a 2px solid `#241c15` border at zero radius, a
near-brutalist move borrowed from print posters. The only floating
element is Freddie the chimp, who gets a slight rotational tilt to
read as a sticker placed on the page.

## Shapes

Every functional radius is `0`. Cards, buttons, inputs, panels — all
square corners. The pill (`9999px`) is reserved for avatars and a
handful of badges. This is the most disciplined zero-radius system
in modern SaaS.

## Components

The defining components are the **Cavendish yellow hero band**
(`#ffe01b` full-bleed, peppercorn Cooper Light at 92px+, square
peppercorn CTA below), the **Cooper Light display headline**, the
**peppercorn square CTA** (zero radius, `#241c15` fill, white
Graphik 500 label), the **chunky feature card** (white fill, 2px
solid `#241c15` border, zero radius, no shadow), **Freddie the
chimp** illustration in peppercorn ink, and the **testimonial-on-
yellow** band where Cooper Light pull quotes sit on the saturated
yellow surface.

## Do's and Don'ts

- **Do** keep the Cavendish yellow at exactly `#ffe01b`; even a 5% drift toward `#ffd60a` reads as beehiiv, not Mailchimp.
- **Do** hold every functional radius at `0`; the square corner is the most distinctive shape decision in the system.
- **Do** use Cooper Light at 300 weight on display — the light cut is the brand, the Cooper Black would read as a different era.
- **Don't** substitute Inter or Graphik for Cooper Light on display headings; the serif terminals carry the entire brand voice.
- **Don't** apply soft shadows to cards; the 2px solid peppercorn border is the elevation language.
- **Don't** use peppercorn on yellow at small sizes; below 14px the contrast bites — keep the on-yellow type to display sizes.
