---
name: You.com
tagline: Crisp white developer-doc canvas, custom Lumen Sans, and the indigo `#5368EE` accent — a search API rebrand done as enterprise infrastructure.
author: webdesignhot
source_url: https://you.com
spec: design.md/v1
quality: curated
featured: false
categories: [ai, dev-tools, saas]
tags: [light, sans, structured, cool, dense]
preview_swatch: ['#ffffff', '#5368ee', '#121212']
related: [vercel, supabase, mintlify]
description: 'You.com pivoted from consumer search to a developer-API platform and the marketing site reflects that institutional shift. The canvas is pure white, body and headings set in custom **Lumen Sans** at a calm 500 weight, and the brand accent is a saturated indigo-blue `#5368ee` reserved for benchmark bars and key data points. The aesthetic register is "Vercel + Stripe + a measured-data publication" — small radii (4px on benchmark chips), a 48px headline ladder, and an emphasis on accuracy charts and API documentation rather than a chatty hero. Where Perplexity wraps search-as-essay in cream paper, You.com presents search-as-infrastructure in clean white.'

colors:
  bg: '#ffffff'                # observed pure white canvas
  bg-soft: '#f6f6f6'           # benchmark / comparison chip bg
  surface: '#ffffff'
  surface-alt: '#fafafa'       # subtle module backgrounds
  text: '#121212'              # observed body text rgb(18,18,18)
  text-muted: '#5e5f6b'        # observed secondary text rgb(94,95,107)
  brand: '#5368ee'             # observed indigo accent on benchmark bars
  brand-strong: '#3a4ec8'      # darker pressed indigo
  brand-soft: '#e8ecff'        # info surface tint
  on-brand: '#ffffff'
  cta-bg: '#121212'            # primary near-black button
  cta-text: '#ffffff'
  border: 'rgba(18, 18, 18, 0.1)'
  border-soft: 'rgba(18, 18, 18, 0.06)'

typography:
  display:
    family: '"Lumen Sans", Arial, ui-sans-serif, system-ui, sans-serif'
    weights: [400, 500, 600]
  body:
    family: '"Lumen Sans", Arial, ui-sans-serif, system-ui, sans-serif'
    weights: [400, 500]
  mono:
    family: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    h1:    { size: 48, weight: 500, lineHeight: 1.1, tracking: 'normal' }   # observed
    h2:    { size: 30, weight: 500, lineHeight: 1.2 }
    h3:    { size: 16, weight: 500, lineHeight: 1.4 }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 12, weight: 500 }

radius:
  sm: 4                        # observed benchmark chip radius
  md: 6
  lg: 8
  card: 12
  button: 8
  pill: 9999

layout:
  page-width: 1200

components:
  button-primary:
    backgroundColor: '#121212'
    textColor: '#ffffff'
    rounded: 8
    padding: '10px 20px'
    font: 'Lumen Sans 500'
    use: 'Get API key / Talk to sales — single near-black rectangle for primary developer conversion.'
  button-secondary:
    backgroundColor: '#ffffff'
    textColor: '#121212'
    border: '1px solid rgba(18, 18, 18, 0.18)'
    rounded: 8
    padding: '10px 20px'
    use: 'View docs / Read benchmarks — outlined twin to the primary.'
  benchmark-chip:
    backgroundColor: '#5368ee'
    textColor: '#ffffff'
    rounded: 4
    use: 'Bar segments and key-metric chips on the SimpleQA / FRAMES benchmark plots.'

lineage:
  summary: |
    You.com's site documents the company's strategic pivot from
    consumer search engine to developer-grade web-data API. The
    visual language reflects that shift wholesale: where the consumer
    product (still live at you.com/search) leans on chatty hero
    surfaces and chip-led personalisation, the developer marketing
    page runs a measured-data register that quotes Vercel and Stripe
    in equal measure. Pure white canvas, custom **Lumen Sans** at
    500 weight (a humanist face with mild contrast and slightly
    rounded terminals), 48px headlines with normal tracking, and
    near-black `#121212` rectangles for primary CTAs — none of which
    is novel on its own, but the *consistency* is the point. The
    indigo accent `#5368ee` carries every benchmark bar and metric
    chip — it is the "data is the proof" brand colour, deployed
    only where accuracy claims are being made. Comparison surfaces
    use grey `#f6f6f6` chips at 4px radius (the densest, most
    spreadsheet-grade shape on the page). The lineage runs through
    Vercel''s clean enterprise canvas, Stripe''s data-as-marketing
    hero charts, and Mintlify''s developer-doc neutrality.
  influences:
    - name: Vercel
      role: White canvas, near-black rectangle CTAs, and developer-doc neutrality.
      url: https://vercel.com
    - name: Stripe
      role: Data-as-marketing — accuracy bars and benchmark plots as the centrepiece.
      url: https://stripe.com
    - name: Mintlify
      role: Developer-doc register and the discipline of small radii on data chips.
      url: https://mintlify.com
---

## Overview

You.com's marketing surface stages the company as web-data
infrastructure for AI builders. The hero — "The Leading Web Search
APIs for AI" — sits in custom **Lumen Sans** at 48px / 500 weight on
pure white, with a measured benchmark plot below the fold showing
SimpleQA and FRAMES accuracy. The indigo `#5368ee` brand accent
fills the You.com bars; competitor bars get the neutral `#f6f6f6`
grey. That single chromatic decision — saturated indigo for our
data, neutral grey for theirs — does most of the persuasive work on
the page.

Body and nav lean on Lumen Sans at 16px / 400-500. There is no
gradient hero, no animated mesh, no chat-input mock — everything is
type, charts, and the occasional code block.

## Colors

- **bg** `#ffffff` — pure white developer-doc canvas
- **surface-alt** `#fafafa` — benchmark plot backdrop
- **bg-soft** `#f6f6f6` — competitor-bar grey on benchmark charts
- **text** `#121212` — near-black body text
- **text-muted** `#5e5f6b` — secondary copy and metadata
- **brand** `#5368ee` — saturated indigo, used for "our data" benchmark bars
- **brand-soft** `#e8ecff` — info surface tint
- **cta-bg** `#121212` — primary button background
- **border** `rgba(18,18,18,0.1)` — hairline divisions

## Typography

**Lumen Sans** is the custom workhorse — a humanist sans with mild
contrast and modestly rounded terminals, set at 400-600 weights.
Headlines run 30-48px at 500 weight with normal tracking; the lack
of negative tracking is itself a brand choice (Stripe and Linear
compress; You.com leaves headlines open). Body type is 16px / 24px,
also at 400-500. There is no display serif and no mono on the
marketing surface — the type system is single-family throughout.

## Layout

Container width is moderate (~1200px) with comfortable gutters. The
page is organised as: hero + benchmark plot + accuracy claim +
3-up capability rail + API code sample + pricing/contact. The
benchmark plot is the most distinctive module — a horizontal-bar
chart with You.com bars in indigo and competitor bars in zinc
grey, set against a `#fafafa` plot background.

## Elevation & Depth

Effectively flat. Cards round at 12px with hairline borders; chips
on benchmark plots round at 4px with no border at all. The only
shadow on the marketing page is a soft drop on the navigation
dropdown menu. Hover states are 4-6% darker washes.

## Shapes

The radii ladder is `4 / 6 / 8 / 12`. The 4px benchmark chip is the
densest shape on the page and the most distinctive — most sites
land at 6-8px minimum. Buttons hold at 8px (matching Vercel and
Linear); cards round at 12px (matching Stripe and Notion). Pills
appear only in the nav badge ("Beta" / "New").

## Components

The defining components are the **near-black rectangle CTA**
(`#121212`, 8px radius, Lumen Sans 500), the **indigo benchmark
bar** (`#5368ee`, 4px radius, used on accuracy charts to signal
"our number"), and the **outlined-rectangle secondary button** that
mirrors the primary at 8px radius with a 18% black hairline. Code
blocks for the API are set in mono on a `#fafafa` plate with a 12px
radius — the only place mono appears on the page.

## Do's and Don'ts

- **Do** reserve the indigo `#5368ee` for "our data" — benchmark bars, key metric chips, the brand mark — and let competitor data sit in zinc grey.
- **Do** use Lumen Sans at 500 with normal tracking; the open headline tone is part of the developer-doc register.
- **Do** keep CTAs as near-black rectangles at 8px; pill or rounded-soft buttons collapse the enterprise posture.
- **Don't** import the chatty hero language of you.com/search consumer surface — the API marketing page is a different brand voice.
- **Don't** drop shadows on benchmark plots; the data should read as raw, not designed-on.
- **Don't** introduce a second saturated colour — the page is white, near-black, zinc, and one indigo, and that discipline is the brand.
