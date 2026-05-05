---
name: Wise
tagline: A flexible bright green on cream-white — money that travels in sans-serif and a single confident accent.
author: webdesignhot
source_url: https://wise.com
spec: design.md/v1
quality: curated
featured: false
categories: [fintech, saas]
tags: [light, minimal, sans, structured, bright, warm]
preview_swatch: ['#fffbf5', '#9fe870', '#163300']
related: [stripe, mercury, plaid]
description: 'Wise''s site is built on a single chromatic decision: an unmistakable lime-green `#9fe870` painted onto a warm cream canvas. Inter Display carries the headlines, dark-forest `#163300` carries the type, and one rounded green pill carries every primary action — global money movement reduced to one colour, one font, one button shape.'

colors:
  bg: '#fffbf5'                # warm off-white canvas (cream)
  bg-strong: '#163300'         # dark forest used for inverted hero bands
  surface: '#f4f1eb'           # quiet panel tone (tan-grey)
  surface-soft: '#faf6ee'      # softer card base
  text: '#0e0f0c'              # near-black body text
  text-strong: '#163300'       # forest green for display headlines
  text-muted: '#37513e'        # secondary muted forest
  text-soft: '#677378'         # captions / metadata
  brand: '#9fe870'             # signature Wise lime green — CTA fill
  brand-hover: '#8edc60'       # pressed state
  brand-strong: '#163300'      # dark green used as ink on the brand fill
  accent: '#37513e'            # supporting deep-green accent
  accent-soft: '#dcf3c7'       # tonal washes / illustration tint
  border: '#16330014'          # 8% forest hairline
  border-soft: '#1633000a'     # 4% forest divider
  on-brand: '#163300'          # dark forest on the lime button
  warning: '#f1c84d'           # editorial yellow accent observed in illustration
  inverse-bg: '#163300'

typography:
  display:
    family: '"Inter Display", Inter, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Inter, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"IBM Plex Mono", "JetBrains Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 72, weight: 600, lineHeight: 1.05, tracking: '-0.025em' }
    h2:    { size: 48, weight: 600, lineHeight: 1.1,  tracking: '-0.02em' }
    h3:    { size: 28, weight: 600, lineHeight: 1.2,  tracking: '-0.01em' }
    body:  { size: 17, lineHeight: 1.55 }
    label: { size: 13, weight: 500, family: mono, tracking: '0.02em' }

radius:
  xs: 4
  sm: 6
  md: 10
  lg: 14
  card: 16
  xl: 20
  button: 999     # Wise CTAs are full pills
  pill: 9999

layout:
  container: 1200
  gutter: 24
  section-y: 96
  rhythm: 8
  ladder: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

components:
  button-primary:
    bg: '#9fe870'
    color: '#163300'
    radius: 999
    weight: 600
    paddingX: 24
    paddingY: 14
  button-secondary:
    bg: 'transparent'
    color: '#163300'
    border: '1px solid #163300'
    radius: 999
  card:
    bg: '#ffffff'
    border: '1px solid #16330014'
    radius: 16
    padding: 32
  pill:
    bg: '#dcf3c7'
    color: '#163300'
    radius: 999

lineage:
  summary: |
    Wise stripped fintech to one decision: a fluorescent-leaning lime
    `#9fe870` against a cream `#fffbf5` canvas. The brand is the colour;
    the colour is the brand. Where Mercury reaches for a quiet mint and
    Stripe orchestrates a chromatic dance, Wise commits to a single
    high-saturation green and lets the rest of the page recede into
    warm cream and forest text. Inter Display carries the display work
    and Inter (regular) the body — the system Vercel and Linear made
    standard, but Wise pairs it with full-pill buttons (radius 999)
    that read as friendly rather than technical. The dark-forest
    `#163300` doubles as ink on the lime button and as the colour of
    inverted "money mode" hero bands, an inversion trick borrowed from
    Stripe's brand-as-system playbook. The cream canvas is the move
    that separates Wise from cold neobanks: it suggests paper, ledger,
    and an everyday object — not the cold blues of legacy finance.
  influences:
    - name: Stripe
      role: Brand-as-singular-accent discipline; chromatic restraint as a trust signal in fintech.
      url: https://stripe.com
    - name: Monzo / Revolut era
      role: Bright-on-quiet neobank palette, but Wise pushes the neutral toward cream rather than white.
      url: https://monzo.com
    - name: IDEO / IBM Plex
      role: Mono micro-labels and friendly humanist sans inform the typographic voice.
      url: https://www.ibm.com/plex
---

## Overview

Wise's marketing surface answers "international banking" with a single
gesture: a bright lime green `#9fe870` painted onto a cream
`#fffbf5` canvas. There's no second accent, no chromatic system, no
secondary brand colour to manage. Every primary CTA is the same rounded
green pill; every headline is forest-green Inter Display at 600; every
illustration borrows the same lime as a fill, never as decoration.

The result is a site that reads more like a product manual than a
campaign — restrained, almost stubborn, in its commitment to one colour.
Compared to legacy banking blues or fintech purple-gradients, Wise's
cream-and-lime feels like an everyday object: a green pen on a
ledger page.

## Colors

- **bg** `#fffbf5` — warm cream canvas, the move that distances Wise from cold neobanks
- **bg-strong** `#163300` — dark forest used for inverted "money mode" hero bands
- **surface** `#f4f1eb` — quiet tan-grey panels (FAQ, comparison tables)
- **text** `#0e0f0c` — near-black body type
- **text-strong** `#163300` — forest-green display copy and section heads
- **brand** `#9fe870` — the signature lime, used only as CTA fill and illustration accent
- **brand-hover** `#8edc60` — pressed state, slightly desaturated
- **on-brand** `#163300` — dark forest ink on the lime pill
- **accent-soft** `#dcf3c7` — tonal wash for chips and illustration tints
- **border** `#16330014` — 8% forest hairline, never a true grey

## Typography

Display is **Inter Display** at 600 weight, sized 72px on a 76px line
height with `-0.025em` tracking. The slightly more open weight (vs.
700) plus mild negative tracking gives Wise a friendlier, more
humanist tone than Linear's denser headlines.

Body is **Inter** regular at 17px on a 26px line height — bumped up
half a step from the typical 16px to make legibility the dominant
sensation. Mono labels (IBM Plex Mono / JetBrains Mono) appear at
13px for currency codes, FX rates, and developer copy — the only
typographic gesture that nods to Wise's API/business surface.

## Layout

Container caps at 1200px with a generous 96px section rhythm. The
spacing ladder runs in 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128
— a calm modular scale that lets cream space dominate. Cards round at
16px; buttons go full pill (radius 999), an essential part of the
brand voice — square or 8px-radius buttons would read as a different
product entirely.

## Elevation & Depth

Depth is tonal, not shadowed. Surfaces stack via the cream → tan-grey
→ white ladder (`#fffbf5` → `#f4f1eb` → `#ffffff`) with a single 8%
forest hairline. Inverted hero bands flip the page to forest
`#163300` with cream type — a Stripe-style chromatic inversion that
signals "another mode" without introducing a new colour.

## Shapes

Radii ladder: 4 / 6 / 10 / 14 / 16 / 20, with buttons at full pill
(999). Cards land at 16, hero shells at 20. The pill button is
load-bearing — it's what makes the system feel approachable rather
than corporate. Square CTAs would shift the brand into Plaid /
enterprise territory.

## Components

The defining components are the **lime pill button** (`#9fe870`
fill, forest `#163300` text, radius 999), the **forest-green section
head** (Inter Display 600, tracked `-0.025em`), and the **comparison
table** that uses cream and white striping with mono numerals for
FX rates. Cards carry a 1px forest-tinted hairline rather than a
shadow; navigation is a thin transparent bar over the cream field.

## Do's and Don'ts

- **Do** keep the action palette to the single lime `#9fe870`; secondary actions are outline-on-cream, never a different hue.
- **Do** use the cream `#fffbf5` canvas — pure white reads as a different brand (Plaid, Stripe).
- **Do** ink the lime button with forest `#163300`, never with white — the contrast pair is the brand's signature.
- **Don't** square the buttons; the full-pill radius is non-negotiable and carries the friendly tone.
- **Don't** introduce a secondary accent (no purple, no orange) — Wise's chromatic discipline is its differentiator.
- **Don't** reach for cold greys; warm cream-and-tan neutrals are the rule, even on data-dense surfaces.
