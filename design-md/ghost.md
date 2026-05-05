---
name: Ghost
tagline: Warm-cream content CMS aesthetic — Inter for chrome, a soft serif for the writing surface, and a single confident green for action.
author: webdesignhot
source_url: https://ghost.org
spec: design.md/v1
quality: curated
featured: false
categories: [media, saas]
tags: [light, editorial, sans, serif, spacious, warm, soft]
preview_swatch: ['#fff8ed', '#15171a', '#30cf43']
related: [substack, medium, hashnode]
description: 'Ghost reads like a paper-cream literary journal stretched into a CMS. The marketing site sits on a warm off-white (`#fff8ed` family), bodies in a clean Inter, headlines with editorial restraint, and a single confident `#30cf43` green for action — a publishing tool that wants to be mistaken for a magazine.'

colors:
  bg: '#fff8ed'                # warm cream marketing canvas
  bg-alt: '#ffffff'            # pure white inside cards / docs
  surface: '#f4f3ef'           # soft beige panel
  surface-soft: '#faf8f3'      # near-white warm tint
  text: '#15171a'              # primary body (near-black with 1% blue cool tilt)
  text-strong: '#0b0c0e'       # display headlines
  text-muted: '#54595f'        # captions, meta
  text-soft: '#7c8087'         # tertiary labels
  brand: '#30cf43'             # Ghost green — primary CTA
  brand-hover: '#26b337'       # pressed state
  brand-active: '#1f9b2f'      # deep green for focus
  accent: '#ff1a75'            # accent magenta for editorial pulls
  accent-soft: '#ffe7f0'       # tint for badges
  border: '#e5e1d6'            # warm hairline
  border-soft: '#f0ece1'       # softest warm divider
  on-brand: '#ffffff'

typography:
  display:
    family: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [500, 600, 700]
  body:
    family: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500]
  serif:
    family: '"Tiempos Headline", "Tiempos Text", Georgia, "Times New Roman", serif'
    weights: [400, 600]
  mono:
    family: '"JetBrains Mono", "Fira Code", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    h1:    { size: 64, weight: 700, lineHeight: 1.05, tracking: '-0.022em' }
    h2:    { size: 44, weight: 700, lineHeight: 1.1,  tracking: '-0.018em' }
    h3:    { size: 28, weight: 600, lineHeight: 1.25, tracking: '-0.01em' }
    body:  { size: 17, lineHeight: 1.55 }
    quote: { size: 22, family: serif, lineHeight: 1.4 }
    label: { size: 12, weight: 500, family: mono }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 10
  card: 12
  xl: 16
  xxl: 24
  button: 6
  pill: 9999

layout:
  container: 1200
  gutter: 32
  section-y: 120

components:
  - primary-cta-green
  - editorial-hero
  - feature-card-warm
  - testimonial-pull-quote
  - changelog-feed
  - documentation-sidebar

lineage:
  summary: |
    Ghost's identity is the writer's desk made software. The marketing
    canvas is a literal warm cream (`#fff8ed`-ish) rather than a tech
    white — a deliberate departure from the cool greys that Linear,
    Vercel, and Stripe normalised. Inter does the bulk of the typesetting,
    but Ghost reaches for a Tiempos-style display serif for editorial
    flourishes, betraying its lineage as a writing tool more than a SaaS.
    The single brand green (`#30cf43`) is borrowed from terminals and
    Robin Hood-era trading apps, but Ghost holds it as the sole action
    colour — every CTA, every link state, every focus ring traces back
    to one hue. The result is a marketing site that feels closer to
    Stripe Press or Substack than to a typical CMS landing page.
    Where Substack uses a literary serif on white, Ghost lands on a
    sans-on-cream — quieter, less editorial-loud, more workshop than
    masthead.
  influences:
    - name: Substack
      role: Sibling content-platform aesthetic — paper canvas + serif accents.
      url: https://substack.com
    - name: Medium
      role: Long-form-first typography priorities and reading-width discipline.
      url: https://medium.com
    - name: Stripe Press
      role: Warm-cream editorial canvas treated as a publishing surface.
      url: https://press.stripe.com
---

## Overview

Ghost's marketing site is the rare SaaS landing page that feels like
a literary magazine. The canvas is warm cream — somewhere around
`#fff8ed` — not the cool white of Linear or the paper white of Notion.
Inter handles 95% of the type, but a Tiempos-flavoured display serif
shows up on hero numerals, pull quotes, and the occasional editorial
flourish. The brand green (`#30cf43`) is the only chromatic event:
every button, every focused link, every accent ring traces to it.

The voice is publisher rather than tool. Where Webflow leans into
gradients and Framer leans into motion, Ghost leans into restraint —
generous white space, narrow reading columns, a hairline-only divider
strategy. The marketing reads as if a long-form essay decided to also
have a pricing page.

## Colors

- **bg** `#fff8ed` — the signature warm cream canvas
- **bg-alt** `#ffffff` — pure white inside docs and product UI
- **surface** `#f4f3ef` — beige panel for feature cards
- **text-strong** `#0b0c0e` — display headlines
- **text** `#15171a` — primary body (near-black with a faint cool cast)
- **text-muted** `#54595f` — captions, meta, byline rows
- **brand** `#30cf43` — the Ghost green, the sole action colour
- **brand-hover** `#26b337` — pressed CTA state
- **accent** `#ff1a75` — magenta editorial pull, used sparingly
- **border** `#e5e1d6` — warm cream hairline, never grey

## Typography

Display is **Inter** weighted at 700, set tight at `-0.022em` tracking
on a 64px H1 with a 67px line-height. The negative tracking gives the
masthead its bulletin compression. Body type drops to Inter 400 at
17px on a 26px line — slightly larger than the 16/24 SaaS norm,
because Ghost's marketing copy is meant to be read like an essay.

The serif move is **Tiempos Headline** — a Klim Type Foundry book serif
that appears on hero numerals (the "$0" pricing display), pull quotes,
and editorial section dividers. Its high contrast and pinched terminals
read as magazine-grade rather than tech-marketing. A monospaced
**JetBrains Mono** appears in code blocks and documentation surfaces.

## Layout

Reading columns are tight: feature copy holds to roughly 640px,
pricing copy to 720px, and only the hero opens up to the full
1200px container. Section vertical rhythm is generous — 120px
between major bands — which is what gives the site its editorial
breathing room. Cards use a 12px radius, buttons a tighter 6px.

## Elevation & Depth

Depth on Ghost is almost entirely tonal. The cream canvas layers up
through `#faf8f3` → `#f4f3ef` → `#e5e1d6`, and shadows are reserved
for the floating publication preview cards (a soft `0 8px 24px
rgba(0,0,0,0.08)`). Most surfaces use a 1px warm hairline rather
than elevation.

## Shapes

Buttons land at 6px — tighter than Notion's 8px, deliberately closer
to a typewriter key than a rounded SaaS pill. Feature cards sit at
12px, hero shells at 16–24px. Avatars and badges go full pill
(`9999px`). The radius ladder mirrors Ghost's editorial tone — rounded
enough to feel humane, square enough to feel printed.

## Components

The defining components are the **green CTA button** (a flat
`#30cf43` rectangle with white Inter 500), the **warm feature card**
(cream `#f4f3ef` panel with a 12px radius and a 1px `#e5e1d6` border),
the **Tiempos pull-quote** (used to break feature copy, lifting a line
of marketing into editorial territory), and the **publication preview
mockup** — a stacked iPad / iPhone composition showing real Ghost
sites, slightly tilted. The nav is a thin, single-row affair that
disappears on scroll, surrendering the page to the content.

## Do's and Don'ts

- **Do** keep the action palette to a single Ghost green; secondary buttons go ghost-button (transparent with a hairline) rather than introducing a second hue.
- **Do** reach for the Tiempos-style serif when a number or a quote needs editorial weight — it is what separates Ghost from a generic Inter SaaS site.
- **Do** hold the canvas to warm cream `#fff8ed`; cool white reads as Notion or Linear, not Ghost.
- **Don't** apply heavy drop shadows to feature cards — depth here is tonal-warm and bordered, not elevated.
- **Don't** introduce a second accent hue alongside the green; the magenta pull is reserved for editorial moments and never appears on action surfaces.
- **Don't** use the serif at small sizes; below 22px it loses the terminal contrast that makes it read as Tiempos.
