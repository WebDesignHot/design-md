---
name: Mercury
tagline: A near-pure white canvas with a literary serif headline and a signature mercury-mint accent — banking dressed as a quiet magazine.
author: webdesignhot
source_url: https://mercury.com
spec: design.md/v1
quality: curated
featured: false
categories: [fintech, saas]
tags: [light, editorial, sans, serif, spacious, cool, soft]
preferred_swatch: ['#ffffff', '#5f6ad2', '#101011']
preview_swatch: ['#ffffff', '#5f6ad2', '#101011']
related: [stripe, notion, linear]
description: 'Mercury''s site reads like a financial review — near-white pages, a Tiempos-style serif for the H1, GT America for the body, and a signature cool-mint `#d3e8e0` paired with an indigo `#5f6ad2` for action. The "radically different banking" thesis is delivered in restrained, editorial calm: thin hairlines, generous space, and a single piece of colour per band.'

colors:
  bg: '#ffffff'                # pure white canvas
  bg-soft: '#fafafa'           # softest off-white, panel base
  bg-mint: '#d3e8e0'           # signature cool-mint band background
  bg-ink: '#101011'            # near-black hero band (occasional)
  surface: '#f4f4f2'           # warm-neutral card base
  surface-soft: '#f8f8f6'      # softer panel
  text: '#101011'              # near-black body
  text-strong: '#000000'       # display weight
  text-muted: '#5b5d5c'        # captions
  text-soft: '#8a8c8b'         # tertiary
  brand: '#5f6ad2'             # Mercury indigo — primary CTA
  brand-hover: '#4a55b8'       # pressed state
  brand-soft: '#e8eaff'        # info / link bg wash
  accent: '#d3e8e0'            # mercury mint signature
  accent-strong: '#9bc5b3'     # deeper mint for emphasis
  accent-soft: '#eef6f1'       # palest mint wash
  border: '#0000000f'          # 6% black hairline
  border-soft: '#0000000a'     # 4% divider
  on-brand: '#ffffff'

typography:
  display:
    family: '"Tiempos Headline", "Tiempos Text", "GT Sectra", "Times New Roman", Georgia, serif'
    weights: [400, 500]
  body:
    family: '"GT America", "Inter", -apple-system, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"GT America Mono", "iA Writer Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 72, weight: 400, lineHeight: 1.05, tracking: '-0.02em', family: serif }
    h2:    { size: 48, weight: 400, lineHeight: 1.1,  tracking: '-0.015em', family: serif }
    h3:    { size: 24, weight: 500, lineHeight: 1.25, family: sans }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 12, weight: 500, family: mono, tracking: '0.04em' }

radius:
  xs: 2
  sm: 4
  md: 6
  lg: 8
  card: 10
  xl: 12
  button: 6
  pill: 9999

layout:
  container: 1240
  gutter: 24
  section-y: 120
  rhythm: 8

components:
  button-primary:
    bg: '#5f6ad2'
    color: '#ffffff'
    radius: 6
    weight: 500
    paddingX: 18
    paddingY: 10
  button-secondary:
    bg: '#ffffff'
    color: '#101011'
    border: '1px solid #0000001f'
    radius: 6
  card:
    bg: '#ffffff'
    border: '1px solid #0000000f'
    radius: 10
    shadow: '0 1px 2px rgba(0,0,0,0.03)'

lineage:
  summary: |
    Mercury answered "what if a bank read like a financial review?" by
    splitting its type system in half: a literary serif (Tiempos
    Headline / GT Sectra) for the H1, GT America sans for everything
    that follows. The split is the brand. It signals trust the way the
    Financial Times pink and the New Yorker's Caslon do — credibility
    by association with print. The signature mint `#d3e8e0` is used
    sparingly, almost always as a full-bleed background band rather
    than an accent, and the indigo `#5f6ad2` carries every CTA. Where
    Wise commits to a single fluorescent green, Mercury commits to a
    single editorial gesture: the serif headline. Where Brex screams
    in purple gradient, Mercury whispers in mint. The 6px button radius
    and 10px card radius sit notably tighter than today's 12-16px
    consensus, a deliberately archaic choice that reinforces the
    print-magazine reference.
  influences:
    - name: Financial Times / Bloomberg
      role: Editorial-finance lineage — serif headline + sans body as a credibility signal.
      url: https://www.ft.com
    - name: Stripe
      role: Single-accent action colour and chromatic restraint in fintech.
      url: https://stripe.com
    - name: Klim Type Foundry
      role: Tiempos Headline and Tiempos Text are the typographic backbone of the editorial voice.
      url: https://klim.co.nz
---

## Overview

Mercury's marketing site is the rare fintech that picks a serif for
the H1 and means it. The canvas is pure white, the hero headline
sets in a Tiempos-style serif at 72px / 400 weight, and the body
settles into GT America sans at 16px. The combination — serif
display, sans body, signature cool-mint band, single indigo CTA —
reads like a financial magazine rather than a SaaS landing page.

That editorial pose is what differentiates Mercury from the rest of
the neobank cohort. Brex pushes saturation, Wise commits to a
fluorescent lime, Plaid leans pale-blue trust — Mercury reaches for
print credibility through a typographic gesture and a quiet,
near-monochromatic palette.

## Colors

- **bg** `#ffffff` — pure white, magazine-margin discipline
- **bg-mint** `#d3e8e0` — signature cool mint, used as full-bleed band, never as accent dot
- **bg-ink** `#101011` — near-black hero band for occasional emotional contrast
- **surface** `#f4f4f2` — warm-neutral card base, very subtle off-white
- **text** `#101011` — near-black body type
- **brand** `#5f6ad2` — the indigo CTA, the only saturated action colour
- **brand-soft** `#e8eaff` — info wash for secondary surfaces
- **accent** `#d3e8e0` — the mint, signature in nature
- **border** `#0000000f` — 6% black hairline, never a heavy grey

## Typography

Display is a Tiempos-style book serif (Klim's Tiempos Headline or
GT Sectra), set at 72px / 400 / `-0.02em` tracking. The 400 weight
is critical — Mercury never bolds the serif; that would shift the
voice from editorial to declarative.

Body is **GT America** at 16px / 24px line height, weights 400-600.
GT America's slightly wider proportions and humanist forms (vs.
Inter) support the print-magazine reference. Mono micro-labels use
**GT America Mono** at 12px with `0.04em` letter spacing — used for
currency codes and section eyebrows.

## Layout

Container is generous at 1240px with 120px section padding — the
single most "editorial" decision after the type. Spacing is
8px-rhythm with a long ladder. Cards round at 10px, buttons at 6px;
both sit one notch tighter than today's 12-16px norm, a deliberately
old-fashioned choice that reads as *quality printing* rather than
*startup card*.

## Elevation & Depth

Depth is a single 1px / 6% black hairline plus the rare 1px shadow
(`0 1px 2px rgba(0,0,0,0.03)`). The mint and ink full-bleed bands
do most of the heavy lifting — Mercury sectionalises through colour
zones rather than card stacks. There is almost no use of multi-layer
shadow.

## Shapes

Radii ladder: 2 / 4 / 6 / 8 / 10 / 12. The tight ladder is the
brand's archaic signature; pill avatars and tags use 9999. The 6px
button radius is doctrinal — anything larger would betray the
editorial pose.

## Components

The defining components are the **serif H1** (Tiempos at 72/400),
the **mint full-bleed band** (`#d3e8e0` background with serif copy
inside), the **indigo button** (`#5f6ad2` / 6px radius / 500 weight),
and the **dashboard product still** rendered as a cropped editorial
photograph rather than a glowing screenshot. Tables use mono
numerals and 1px hairlines — never zebra striping.

## Do's and Don'ts

- **Do** keep the H1 in serif at 400 weight; bolding the serif breaks the editorial pose.
- **Do** use the mint `#d3e8e0` as a full-bleed band, not as an accent dot — its function is sectional, not decorative.
- **Do** keep button radius at 6px and card radius at 10px; tighter than 2026 SaaS consensus is the point.
- **Don't** introduce a secondary action colour — the indigo `#5f6ad2` is the only saturated CTA.
- **Don't** apply heavy shadows to cards; depth here is hairline-and-band, not elevation.
- **Don't** use the mint as type colour or icon fill; it lives only as a background.
