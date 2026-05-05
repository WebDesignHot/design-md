---
name: Kagi
tagline: A premium search engine dressed in warm cream and Plex — the indie answer to ad-funded search.
author: webdesignhot
source_url: https://kagi.com
spec: design.md/v1
quality: curated
featured: false
categories: [saas, ai]
tags: [light, editorial, sans, serif, warm, soft, structured]
preview_swatch: ['#fffbf5', '#ffb87a', '#2b2417']
related: [you-com, perplexity, raycast]
description: 'Kagi''s site argues for paid search by looking nothing like a search engine. The canvas is a warm cream `#fffbf5`, the brand colour is a sun-baked orange `#ffb87a`, the body is set in IBM Plex Sans, and pull-quotes drop into IBM Plex Serif — a typographic pairing that reads more like a small magazine than a product page.'

colors:
  bg: '#fffbf5'                # warm cream canvas
  bg-soft: '#fff6e8'           # secondary cream surface
  surface: '#fbf2e2'           # card / panel base
  surface-hover: '#f4e8ce'     # hover tone
  text: '#2b2417'              # near-black with warm cast
  text-strong: '#1c170d'       # display copy
  text-muted: '#6b5d47'        # secondary copy / metadata
  brand: '#ffb87a'             # signature warm orange
  brand-hover: '#f3a45f'       # pressed state
  brand-deep: '#c97a3b'        # accent on light surfaces
  accent: '#7d6ce0'            # secondary lavender used in marketing modules
  border: '#0000001a'          # 10% black hairline
  border-soft: '#00000014'     # 8% black for nested rules
  on-brand: '#1c170d'          # dark text on warm orange (no white CTAs)

typography:
  display:
    family: '"IBM Plex Sans", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: '"IBM Plex Sans", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500]
  serif:
    family: '"IBM Plex Serif", Georgia, "Times New Roman", serif'
    weights: [400, 500]
  mono:
    family: '"IBM Plex Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 56, weight: 600, lineHeight: 1.05, tracking: '-0.02em' }
    h2:    { size: 40, weight: 600, lineHeight: 1.1,  tracking: '-0.015em' }
    h3:    { size: 24, weight: 600, lineHeight: 1.25, tracking: '0' }
    body:  { size: 17, lineHeight: 1.55 }
    quote: { size: 22, family: serif, lineHeight: 1.4 }
    label: { size: 12, weight: 500, family: mono }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  card: 16
  xl: 20
  button: 999     # Kagi favours fully-rounded pill CTAs
  pill: 9999

layout:
  container: 1200
  gutter: 24
  rhythm: 8

components:
  button-primary: 'Pill-shaped, warm orange `#ffb87a` background, dark `#1c170d` text — never white. Letterspacing barely tightened, weight 600.'
  button-secondary: 'Cream-on-cream outlined pill, 1px `#0000001a` hairline, identical radius to primary.'
  card: 'Rounded 16px panel on `#fbf2e2` with a 10% black border; shadows are avoided in favour of tonal nesting.'
  nav: 'Quiet horizontal bar, no background fill until scroll, links in 500 weight Plex Sans.'
  pull-quote: 'IBM Plex Serif italic, set 22px on a generous 1.4 line-height, indented from the body grid.'

lineage:
  summary: |
    Kagi sells a paid search engine, so the site has to look unlike
    every other search page on the internet. The strategy is editorial:
    a warm cream canvas (`#fffbf5`) borrowed from independent magazines,
    a single sun-baked orange (`#ffb87a`) doing all the action work, and
    IBM Plex — both Sans and Serif — carrying the entire type system.
    Plex is a designed-by-IBM open-source family with a slightly
    architectural feel; pairing the sans with the serif gives Kagi an
    indie-publication tone that reads as the opposite of Google's blue
    sans-only utilitarianism. CTAs are pill-shaped and use dark text on
    warm orange — Kagi never does white-on-orange, which preserves the
    paper-and-ink feel. Lavender (`#7d6ce0`) makes brief appearances in
    secondary marketing modules, mostly as illustration accent. The
    overall posture is closer to Are.na or Readwise than to Bing — a
    deliberate stance that the search bar deserves the same care as a
    well-made magazine cover.
  influences:
    - name: IBM Plex
      role: Entire type system — Sans for UI, Serif for editorial accents, Mono for code.
      url: https://www.ibm.com/plex
    - name: Are.na
      role: Cream-canvas + warm-neutral aesthetic positioning paid software as a craft object.
      url: https://www.are.na
    - name: Readwise / Reader
      role: Warm-paper CTA discipline — dark text on coloured pills, no inverted white labels.
      url: https://readwise.io
---

## Overview

Kagi's marketing site is a manifesto against ad-funded search dressed
as a small magazine. The canvas is a warm cream `#fffbf5` — not white,
not beige, but the colour of unbleached book stock — and every other
surface tones up or down from there in a single warm-neutral ladder.
The brand colour is a sun-baked orange `#ffb87a` that appears almost
exclusively on pill-shaped CTAs, and IBM Plex Sans + Plex Serif carry
the entire typographic load.

Where Google argues for "free" with a clinical white sans-only
interface, Kagi argues for "paid" with an editorial warm-cream layout
and serif pull-quotes. The visual logic is: *you're paying for this,
so it should look like something worth paying for.*

## Colors

- **bg** `#fffbf5` — warm cream canvas, the page's defining surface
- **bg-soft** `#fff6e8` — secondary cream for stripe sections
- **surface** `#fbf2e2` — card / panel base, a half-step warmer than bg
- **text-strong** `#1c170d` — display copy, near-black with warm cast
- **text** `#2b2417` — primary body, designed for long-read comfort
- **text-muted** `#6b5d47` — captions and metadata in warm grey
- **brand** `#ffb87a` — the signature sun-baked orange, used only on action surfaces
- **brand-hover** `#f3a45f` — pressed / hover state for orange pills
- **accent** `#7d6ce0` — lavender used sparingly in secondary marketing modules
- **border** `#0000001a` — 10% black hairline, never coloured

## Typography

The display is **IBM Plex Sans** at 600 weight, sized 56px with a 1.05
line-height and a gentle `-0.02em` tracking — confident but not
compressed. Plex's slightly architectural feel keeps the warm cream
canvas from drifting into "cosy bakery" territory.

Body type is the same Plex Sans at 400/500, sized 17px on a 1.55
line-height — a touch larger than the typical 16px web default,
designed for the long marketing essays Kagi publishes.

Pull quotes and editorial moments shift to **IBM Plex Serif** at
22px, italicised, indented from the body grid. The Sans + Serif duet
is the typographic equivalent of Kagi's tagline: *we treat search like
a craft.* Code samples use **IBM Plex Mono**, completing the trifecta
and giving the whole site a single typographic identity rather than
the usual three-foundry collage.

## Layout

The container is a 1200px max-width with 24px gutters and an 8px
spacing rhythm. Sections breathe — vertical padding regularly hits
96–120px between modules. The grid is more editorial than dashboard:
columns vary, hero copy often sits one-column wide with an illustration
to the right, and there are no aggressive feature-grid walls.

Type sizes step in stable 1.25× ratios from 17px body up through
24/32/40/56, mirroring an editorial modular scale.

## Elevation & Depth

Depth is achieved entirely through warm-tonal layering — `#fffbf5` →
`#fff6e8` → `#fbf2e2` → `#f4e8ce` — and a single 10% black hairline.
Shadows are essentially absent on the marketing surface; cards lift
through tone and border, not blur. This is what gives Kagi its
paper-and-ink feel: every surface looks like a different stock weight,
not a different elevation.

## Shapes

Radii ladder is 4/6/8/12/16/20, with `9999` reserved for the signature
pill CTAs and avatars. Buttons are always full pills — Kagi never uses
a square or 8px-rounded action button on the marketing surface. Cards
sit at 16px, hero shells at 20px.

## Components

The defining components are the **warm-orange pill CTA** (`#ffb87a`
background with `#1c170d` dark text — never white), the **cream
outlined secondary pill** (1px hairline, identical radius), and the
**Plex Serif pull-quote** that breaks up dense feature copy. Cards are
warm-cream panels with a 10% black border. Navigation is a thin,
quiet bar with no fill until scroll, letting the editorial layout
dominate.

## Do's and Don'ts

- **Do** keep the canvas warm cream (`#fffbf5`); pure white reads as a generic SaaS template and breaks the magazine metaphor.
- **Do** use dark text on the orange CTA — `#1c170d` on `#ffb87a`. White text on warm orange is an accessibility miss and an aesthetic miss.
- **Do** reach for IBM Plex Serif for editorial moments (pull-quotes, taglines, longform intros); it's the differentiator from every other Plex Sans site.
- **Don't** introduce a second action colour — the lavender `#7d6ce0` is illustration-only, never a CTA.
- **Don't** apply shadows to cards; depth here is tonal layering plus a 10% black hairline, not blur.
- **Don't** square the buttons — Kagi's pill CTAs are part of the brand fingerprint as much as the cream canvas is.
