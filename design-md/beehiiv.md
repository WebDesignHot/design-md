---
name: beehiiv
tagline: Aggressive black-on-yellow newsletter punch — heavy display sans, hyper-flat cards, and a `#ffd60a` highway-yellow that reads like a tabloid front page.
author: webdesignhot
source_url: https://www.beehiiv.com
spec: design.md/v1
quality: curated
featured: false
categories: [media, saas]
tags: [light, dark, sans, structured, bright, multi-theme]
preview_swatch: ['#ffd60a', '#000000', '#ffffff']
related: [substack, ghost, kit-com]
description: 'beehiiv hits like a tabloid front page — a saturated `#ffd60a` highway yellow against pure black `#000`, heavy display type set tight, and pure-white feature bands that flash between the yellow hero and the black footer. The result is the loudest newsletter platform on the marketing internet, and it is intentional.'

colors:
  bg: '#ffffff'                # primary marketing canvas
  bg-yellow: '#ffd60a'          # signature hero band
  bg-dark: '#000000'            # pure black footer / contrast band
  surface: '#fafafa'            # near-white card panel
  surface-2: '#f0f0f0'          # second-level neutral
  surface-dark: '#0a0a0a'       # dark-band card
  text: '#000000'               # plain black body
  text-strong: '#000000'        # display, identical
  text-muted: '#666666'         # captions
  text-soft: '#999999'          # tertiary
  text-on-dark: '#ffffff'
  text-on-yellow: '#000000'     # always black on yellow, never white
  brand: '#ffd60a'              # the yellow itself is the brand
  brand-hover: '#e6c000'        # pressed
  accent: '#000000'             # black is the secondary brand
  border: '#000000'             # 2px solid black border on cards
  border-soft: '#e5e5e5'
  on-brand: '#000000'

typography:
  display:
    family: '"PP Neue Machina", "Inter Display", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [700, 800, 900]
  body:
    family: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 88, weight: 800, lineHeight: 0.95, tracking: '-0.04em' }
    h2:    { size: 56, weight: 800, lineHeight: 1.0,  tracking: '-0.03em' }
    h3:    { size: 28, weight: 700, lineHeight: 1.2,  tracking: '-0.015em' }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 12, weight: 600, family: mono }

radius:
  xs: 0
  sm: 4
  md: 6
  lg: 8
  card: 12
  xl: 16
  xxl: 20
  button: 8
  pill: 9999

layout:
  container: 1280
  gutter: 24
  section-y: 120

components:
  - yellow-hero-band
  - thick-black-border-card
  - black-pill-cta
  - newsletter-mockup-flat
  - revenue-stat-tile
  - chunky-display-headline

lineage:
  summary: |
    beehiiv's marketing system is a tabloid in landing-page form. The
    hero band is saturated highway-yellow (`#ffd60a`) — a colour
    inherited from caution signs and old New York taxis — with pure
    `#000` Inter Display set at 88px / 800 weight, tracked tight at
    `-0.04em`. The supporting bands are pure white and pure black,
    no greys in the middle. Cards on the white canvas use a 2px
    solid black border at 12px radius — a hyper-flat, near-brutalist
    move that distinguishes beehiiv from Substack's cosier serif
    aesthetic and Ghost's warm-cream restraint. The voice is
    aggressive-masculine: revenue stats in giant numerals, "monetize"
    as the verb of choice, and a punchy "sign up free" black-pill CTA
    that contrasts hard against the yellow. Where Substack tells you
    to write, beehiiv tells you to make money — and the design
    inherits that energy.
  influences:
    - name: Wall Street Journal / NYP
      role: Tabloid + financial-news loud-headline lineage.
      url: https://www.wsj.com
    - name: Off-White / Virgil
      role: Quotation-marks, bold display, black-on-yellow industrial graphic vocabulary.
      url: https://www.off---white.com
    - name: Substack
      role: Direct rival — beehiiv is positioned as the louder, money-first alternative.
      url: https://substack.com
---

## Overview

beehiiv's site reads like a tabloid front page that learned how to
sell SaaS. The hero band is saturated `#ffd60a` highway-yellow with
pure black Inter Display set at 88px / 800 weight, tracked tight.
Below the hero, the page alternates pure white feature bands and
a pure black footer — there are essentially no greys.

The voice is aggressive-monetization. Revenue stats, subscriber
counts, and "$10,000 / month" appear at heroic display sizes.
Where Substack frames itself around writing, beehiiv frames itself
around making money — and the design carries that energy. Cards
on the white canvas use a 2px solid `#000` border at 12px radius,
a hyper-flat near-brutalist move that no other newsletter platform
uses.

## Colors

- **bg** `#ffffff` — the primary white canvas
- **bg-yellow** `#ffd60a` — the signature hero band
- **bg-dark** `#000000` — pure black footer and contrast band
- **text** `#000000` — body, plain black with no opacity tilt
- **text-on-yellow** `#000000` — always black on yellow, never white
- **brand** `#ffd60a` — the yellow itself
- **accent** `#000000` — black is the secondary brand
- **border** `#000000` — the 2px solid black card border
- **border-soft** `#e5e5e5` — softer divider on internal grids

## Typography

Display is **PP Neue Machina** (or an Inter Display fallback) at
800 weight, sized 88px on a 84px line-height with `-0.04em`
tracking. The face reads industrial, slightly mechanical — closer
to a Mark Simonson Proxima or a Pangram Sans Grotesque than to
Inter. Body is plain **Inter** at 16/24, set in 400 for paragraphs
and 600 for nav and stats.

A monospaced **JetBrains Mono** appears for revenue figures, dollar
signs, and small "$ MRR" labels in the dashboard mockups. There is
no serif — beehiiv refuses softness on principle.

## Layout

The container is 1280px with 24px gutters and 120px section vertical
rhythm. The grid is disciplined but the bands swap colour aggressively:
yellow hero → white feature row → black testimonial band → white
pricing → black footer. The contrast cycle is what gives beehiiv its
poster energy.

## Elevation & Depth

Depth is borderline-zero. Cards use a 2px solid `#000` border with
no shadow at all — a flat-design move that reads as zine or sticker.
The only elevation lives on the dark-band testimonial cards, which
get a tight `0 0 0 1px #1f1f1f` ring. There are no soft shadows
anywhere on the canvas.

## Shapes

Buttons land at 8px or full pill (`9999px`) depending on context —
the primary CTA is a black pill on yellow ("Start free"), and
secondary buttons sit at a tight 8px rectangle. Cards hold at 12px.
The radius ladder is moderate-tight — beehiiv is rounded enough
to read as 2026-modern but never pillowy.

## Components

The defining components are the **yellow hero band** (`#ffd60a`
full-bleed background, black 88px display headline, black pill CTA),
the **thick-black-border card** (white fill, 2px `#000` border,
12px radius, no shadow), the **black pill CTA** (full `9999px`
radius, black background, white Inter 500 label), the **revenue
stat tile** (mono dollar figure at 64px, set against yellow or
white), and the **newsletter mockup** — a flat illustration of a
beehiiv newsletter rendering at full bleed.

## Do's and Don'ts

- **Do** keep the hero yellow saturated at exactly `#ffd60a`; lighter yellows read as cosy, darker yellows read as caution-tape industrial — neither is beehiiv.
- **Do** always set black on yellow (and never white on yellow); the contrast ratio and the tabloid heritage demand it.
- **Do** use a 2px solid black border on cards — the hairline-and-shadow language of Stripe / Linear is explicitly avoided here.
- **Don't** soften the display type weight below 700; beehiiv lives on the heavy side of the type ladder.
- **Don't** introduce a third hue; the system is yellow + black + white and any drift breaks the tabloid identity.
- **Don't** apply drop shadows to cards; the hyper-flat 2px border is the elevation strategy.
