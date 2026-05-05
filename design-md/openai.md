---
name: OpenAI
tagline: Pure white canvas, OpenAI Sans set in calm 500-weight, and a single black pill for the only action that matters — try ChatGPT.
author: webdesignhot
source_url: https://openai.com
spec: design.md/v1
quality: curated
featured: false
categories: [ai, saas]
tags: [light, minimal, sans, spacious, structured, cool]
preview_swatch: ['#ffffff', '#000000', '#f1f1f1']
related: [anthropic, vercel, stripe]
description: 'OpenAI''s site is the platonic white-paper of AI marketing — pure `#ffffff` canvas, a custom OpenAI Sans set at a calm 500 weight, and a single black `#000000` pill button (40px radius) carrying every primary action. Where competitors reach for gradients and hero animations, OpenAI defaults to silence: large image rails, modest 22-48px headings with `-0.22px` to `-1.44px` tracking, and a 4% black hover surface that''s almost invisible. The restraint reads as institutional confidence.'

colors:
  bg: '#ffffff'
  bg-soft: '#f1f1f1'           # locale picker / tab base
  surface: '#fafafa'           # subtle module backgrounds
  surface-hover: '#0a0a0a0a'   # 4% black hover state observed on nav buttons
  text: '#000000'
  text-muted: '#5d5d5d'        # captions and metadata
  brand: '#000000'             # primary CTA is solid black
  on-brand: '#ffffff'
  accent: '#10a37f'            # ChatGPT product green (used sparingly in product UI)
  border: '#0000001a'          # 10% black hairline
  border-soft: '#00000014'     # 8% black sub-divisions

typography:
  display:
    family: '"OpenAI Sans", ui-sans-serif, system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600]
  body:
    family: '"OpenAI Sans", ui-sans-serif, system-ui, -apple-system, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500]
  mono:
    family: '"OpenAI Sans Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    h1:    { size: 48, weight: 500, lineHeight: 1.16, tracking: '-1.44px' }   # observed hero variant
    h2:    { size: 22, weight: 500, lineHeight: 1.26, tracking: '-0.22px' }   # observed section heading
    h3:    { size: 18, weight: 500, lineHeight: 1.4 }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 12, weight: 500 }

radius:
  sm: 6
  md: 8
  lg: 12
  card: 12
  button: 40                 # observed pill on nav and primary CTA (40px on small, 9999 on large variants)
  pill: 9999

layout:
  page-width: 1280

components:
  button-primary:
    backgroundColor: '#000000'
    textColor: '#ffffff'
    rounded: 40
    padding: '0 20px'
    font: 'OpenAI Sans 500'
    use: 'Try ChatGPT and other lead-conversion CTAs — there is rarely more than one per viewport.'
  button-secondary:
    backgroundColor: '#0000000a'
    textColor: '#000000'
    rounded: 40
    padding: '8px 16px'
    use: 'Log in, Download, locale switchers — anything that is not the headline action.'
  card:
    backgroundColor: '#ffffff'
    border: '1px solid #0000001a'
    rounded: 12
    use: 'News tiles, story cards, research index entries — flat, hairline-bordered, image-led.'

lineage:
  summary: |
    OpenAI's marketing site is an exercise in withdrawal. The canvas is
    pure `#ffffff`, the typeface is a custom **OpenAI Sans** released
    in 2024 to replace ColfaxAI, and headings hold a calm 500 weight
    rather than the usual marketing-bold 700. Tracking is gently
    negative — `-0.22px` at 22px, `-1.44px` at 48px — which gives the
    type a slightly compressed, broadcast-news feel without ever
    shouting. The only chromatic event on the page is the **single
    black pill** carrying "Try ChatGPT": no gradient, no hover glow,
    no rainbow. That confidence-via-monochrome trades on the same
    cultural register as Apple's product pages and Anthropic's
    Anthropic-Sans editorial calm — an institution speaking quietly
    because it doesn't need to convince you. Where Stripe builds
    trust through a single confident blue, OpenAI builds it through
    the absence of colour entirely. Pill radii at 40-9999px and a 4%
    black hover state (`rgba(0,0,0,0.04)`) form the entire interactive
    vocabulary; everything else is type, image, and white space.
  influences:
    - name: Apple
      role: Monochrome reduction and the cultural authority of saying nothing extra.
      url: https://www.apple.com
    - name: Anthropic
      role: Sister-lab editorial calm — Anthropic Sans / OpenAI Sans live in the same neighbourhood.
      url: https://www.anthropic.com
    - name: The New York Times
      role: News-broadcast tracking discipline at headline sizes; OpenAI's tracking ladder reads like a print masthead.
      url: https://www.nytimes.com
---

## Overview

OpenAI's homepage opens onto pure white. There is no hero gradient,
no animated mesh, no product mock-up floating above the fold — just
a stack of news tiles, "Recent news" set at 22px / 500 weight, and a
single black pill that says "Try ChatGPT." The aesthetic mirrors the
posture: a research lab that ships consumer software, not a startup
that wants you to feel something.

The custom **OpenAI Sans** carries the entire site. Released alongside
the late-2024 brand refresh that quietly retired ColfaxAI, it is a
geometric humanist sans with subtly relaxed terminals and a slightly
narrower set than Inter — designed to read as institutional rather
than tech-startup. Type weight stays at 500 across most surfaces;
OpenAI rarely reaches for 700.

## Colors

- **bg** `#ffffff` — pure white, no warmth, no tint
- **text** `#000000` — solid black, no opacity softening
- **text-muted** `#5d5d5d` — metadata and captions
- **brand** `#000000` — the primary CTA colour is black, not blue
- **on-brand** `#ffffff` — pill text
- **surface-hover** `rgba(0,0,0,0.04)` — the entire hover vocabulary
- **bg-soft** `#f1f1f1` — locale picker and tab base
- **border** `rgba(0,0,0,0.1)` — hairline divisions on cards and rails
- **accent** `#10a37f` — ChatGPT product green, used inside the app, almost never on the marketing site

## Typography

Display and body are the same face: **OpenAI Sans**. Headings sit at
22-48px / 500 weight with negative tracking that scales with size
(`-0.22px` at 22, `-1.44px` at 48 — roughly a constant `-0.01em` to
`-0.03em`). The H1 hero variant lands at 48px with a 55.68px line
height; section headings drop to 22px. There is no italic, no display
serif, no editorial counter-voice. **OpenAI Sans Mono** appears for
code blocks and API surfaces.

The body face is the same OpenAI Sans at 16px / 24px line height, 400
or 500 weight. The font-stack falls back through `ui-sans-serif`,
`system-ui`, and Arial — minimal CJK stacking compared to Notion or
Mistral.

## Layout

Container width is generous (~1280px max), with edge gutters that
breathe. The grid is a simple 3-up news rail under the fold; story
cards are flat, hairline-bordered, image-led tiles at 12px radius.
Section headings set the rhythm — there are no eyebrow labels, no
all-caps section codes, no editorial flourish. Everything is title
+ rail + repeat.

## Elevation & Depth

There is essentially none. Cards are flat with a 10% black hairline
(`rgba(0,0,0,0.1)`); hover state is a 4% black wash, not a shadow.
Buttons have no drop-shadow, no inner highlight, no depth treatment
at all — the black pill is solid `#000000` on `#ffffff` and that's
the entire interaction model. Where Stripe and Linear use elevation
to organise space, OpenAI uses spacing alone.

## Shapes

Buttons are pills — radii at 40px on small variants and effectively
9999px on hero CTAs. Cards land at 12px. Inputs and locale pickers
also pill at 9999px. There are no sharp 0-radius surfaces, no 4-6px
"app-grade" radii — the entire vocabulary is *medium-soft cards*
plus *full pills*.

## Components

The defining components are the **black pill CTA** (`#000000` bg,
white text, 500 weight, 40px+ radius), the **hairline-bordered news
card** (white, 12px radius, 10% black border, image-led), and the
**4% black hover surface** that nav buttons fade into on rollover.
A locale picker — pill, light grey `#f1f1f1` bg, OpenAI Sans 500 —
sits in the footer chrome and is the only chromatic concession to
internationalisation. Section headings (22px / 500) and a 16px body
size handle nearly all editorial copy.

## Do's and Don'ts

- **Do** keep the action vocabulary monochrome — primary CTAs are black, secondary CTAs are 4% black, that is the entire ladder.
- **Do** use OpenAI Sans at 500 weight for headings; the negative tracking does the work that bold weight does on other sites.
- **Do** lean on white space and image cards; this brand earns trust by *not* filling space.
- **Don't** introduce a brand blue or gradient hero — OpenAI has neither and adding one collapses the institutional register.
- **Don't** stack drop shadows on cards; the visual language is hairline borders + flat surfaces, full stop.
- **Don't** mix 4-8px "app-grade" radii into the marketing surface — pills (40px+) and medium cards (12px) are the only shapes here.
