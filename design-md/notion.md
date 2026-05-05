---
name: Notion
tagline: Off-white canvas with Lyon serif accents and a custom NotionInter — a workspace dressed as a literary magazine.
author: webdesignhot
source_url: https://www.notion.com
spec: design.md/v1
quality: curated
featured: false
categories: [saas, media]
tags: [light, editorial, sans, serif, spacious, warm]
preview_swatch: ['#ffffff', '#0075de', '#191918']
related: [stripe, linear, figma]
description: 'Notion''s marketing site reads like a publication — off-white pages, a custom NotionInter sans, Lyon Text serif for editorial accents, and a single confident `#0075de` blue for action. Hero campaigns flip into near-black `#191918` zones for emotional contrast, but the underlying canvas stays calm and paper-like.'

colors:
  bg: '#ffffff'                # --color-background-base
  bg-campaign: '#191918'       # observed hero band (body bg)
  surface: '#f6f5f4'           # --color-background-surface-neutral / --color-gray-200
  surface-hover: '#dfdcd9'     # --color-background-surface-neutral-hover
  surface-soft: '#f9f9f8'      # --color-gray-100
  text: '#000000e6'            # --color-text-normal (rgba 0,0,0,0.9)
  text-strong: '#000000f2'     # --color-text-strong
  text-muted: '#0000008a'      # --color-text-muted
  text-soft: '#00000096'       # --color-link-secondary-text
  brand: '#0075de'             # --color-button-primary-background / --color-blue-600
  brand-hover: '#005bab'       # --color-blue-700
  brand-active: '#00396b'      # --color-blue-800
  accent: '#62aef0'            # --color-accent / --color-blue-400
  accent-strong: '#097fe8'     # --color-accent-strong / --color-card-accent
  accent-soft: '#e6f3fe'       # --color-accent-soft / --color-blue-200
  border: '#0000001a'          # --color-border-base / --color-card-border
  border-soft: '#00000014'     # --border-color-regular
  on-brand: '#ffffff'
  # Campaign launch colour observed on hero CTA
  campaign-launch: '#455dd3'   # --color-campaigns-agents-launch-blue-400 (also CTA bg)

typography:
  display:
    family: 'NotionInter, Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: 'NotionInter, Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500]
  serif:
    family: '"Lyon Text", Georgia, YuMincho, "Hiragino Mincho ProN", "Songti SC", serif'
    weights: [400]
  mono:
    family: '"iA Writer Mono", Nitti, Menlo, Courier, monospace'
    weights: [400]
  scale:
    h1:    { size: 64, weight: 700, lineHeight: 1.0,  tracking: '-0.0332em' }   # tracking observed -2.125px @ 64
    h2:    { size: 54, weight: 700, lineHeight: 1.04, tracking: '-0.025em' }    # --typography-global-heading-lg ~3.375rem
    h3:    { size: 32, weight: 700, lineHeight: 1.25, tracking: '0' }
    body:  { size: 16, lineHeight: 1.5 }
    quote: { size: 22, family: serif, lineHeight: 1.27 }
    label: { size: 11, weight: 500, family: mono }

radius:
  xs: 4         # --border-radius-200
  sm: 5         # --border-radius-300
  md: 6         # --border-radius-400
  lg: 8         # --border-radius-500 / --border-button-radius
  card: 12      # --border-card-radius (0.75rem)
  xl: 14        # --border-radius-800
  xxl: 16       # --border-radius-900
  button: 8
  pill: 9999    # --border-radius-round (~625rem)

lineage:
  summary: |
    Notion's website operates on a publication metaphor. The canvas is
    paper white (`--color-background-base: #fff`), the neutral palette
    is warm-grey rather than cool — the gray scale runs from
    `#f9f9f8` up to `#494744`, giving every surface a slight ecru tint
    that distinguishes it from Apple-style cool greys. NotionInter,
    a custom Inter cut, is paired with **Lyon Text** for editorial pull
    quotes (`--typography-global-quote-md-font` uses Lyon at 32px/2.5),
    a move borrowed directly from magazine design — Wired and the New
    York Times Magazine use the same sans-and-serif duet for the same
    reason. The single confident blue (`#0075de`) for action references
    Stripe's brand-as-singular-blue discipline, but Notion holds it
    closer to a hyperlink hue than a tech-brand accent. Where Linear
    builds visual gravity through near-black surfaces, Notion does the
    opposite — campaign hero bands flip the body bg to `#191918`
    momentarily for emotional contrast, then return to white. The
    spacing rhythm and 0.75rem card radius match recent Vercel and
    Stripe defaults, but the warm gray and serif accents are unmistakably
    Notion.
  influences:
    - name: Stripe
      role: Confident single-blue action colour and trust-via-restraint chromatic strategy.
      url: https://stripe.com
    - name: Wired / NYT Magazine
      role: Sans-headline + Lyon-style serif pull-quote editorial duet.
      url: https://www.wired.com
    - name: iA Writer
      role: Lent its iA Writer Mono — a typographic stamp tying Notion to the writing-tool lineage.
      url: https://ia.net/writer
---

## Overview

Notion's site reads like a magazine that learned how to sell software.
The base canvas stays paper-white at `#ffffff`, NotionInter (a custom
Inter) carries the bulk of the type, and Lyon Text appears wherever
quotes or editorial flourishes live. Headlines hit 64px at 700 with
`-2.125px` tracking — roughly `-0.033em` — that hard negative tracking
is what gives "Meet the night shift." its compressed, bulletin-bold feel.

Where Linear and Raycast commit to a single near-black canvas, Notion
oscillates: the home `body` ships with bg `#191918` for the launch hero
band, then the page proper resumes on white. This dual-mode rhythm —
campaign-zone dark, content-zone light — is what makes the marketing
feel like an issue of a magazine rather than a single landing page.

## Colors

- **bg** `#ffffff` — paper-white canvas, the workspace metaphor made literal
- **bg-campaign** `#191918` — hero/launch band that briefly inverts the page
- **surface** `#f6f5f4` — warm-grey card and panel base (`--color-gray-200`)
- **text-strong** `#000000f2` — display copy at near-full opacity
- **text** `#000000e6` — primary body text (90% black for slight softness)
- **text-muted** `#0000008a` — captions and metadata
- **brand** `#0075de` — single action blue used for primary CTA
- **brand-hover** `#005bab` — pressed state, mirrors `--color-blue-700`
- **accent-soft** `#e6f3fe` — secondary button background, info surfaces
- **border** `#0000001a` — 10% black hairline, never solid grey

## Typography

Display is **NotionInter**, a custom Inter cut weighted at 700 for the
H1, sized 64px with a 64px line-height and `-2.125px` tracking. The
result reads as headline-grade rather than body-bold; the negative
tracking is what gives the marketing its bulletin tone.

Body type is the same NotionInter at 400 (regular) and 500 (medium),
sized 16px on a 24px line-height. The font-stack is intentionally long,
fanning out through Inter, system-ui, Helvetica, and CJK fallbacks —
internationalisation is a first-class concern.

The editorial voice is **Lyon Text**, a 21st-century book serif used
for pull quotes (`--typography-global-quote-md-font` at 32px/2.5).
Lyon also serves as the primary serif for Japanese and Chinese fallbacks,
chained through `Hiragino Mincho ProN`, `Songti SC`, and `Nanum Myeongjo`.
A tertiary mono — **iA Writer Mono** — appears for code, labels, and
the writing-tool nostalgia it implies.

## Layout

The container rhythm is generous: spacing tokens use `rem` units and
the line-height ladder runs from 1rem (50) up to 5rem (1000). Cards
sit at `--border-card-radius: 0.75rem` (12px), buttons at `--border-button-radius: 0.5rem` (8px).
Type sizes step in stable 1.125–1.25× ratios, mirroring an editorial
modular scale.

## Elevation & Depth

Depth is achieved through warm-grey tonal layering (`#f9f9f8` → `#f6f5f4` → `#dfdcd9`)
and a single 10% black hairline (`--color-border-base: #0000001a`). Notion
generally avoids shadows on the marketing surface — emphasis comes
from contrast between the white canvas and the `#191918` campaign zones,
not from elevation.

## Shapes

Radii ladder is 4/5/6/8/12/14/16, with `--border-radius-round` (essentially
infinite at 624.94rem) reserved for pills and avatars. Buttons land at
`8px`, cards at `12px`, and hero shells often go larger (`14–16px`).

## Components

The defining components are the **primary blue button** (`#0075de`,
8px radius, weight 500 white text), the **Lyon serif pull-quote**
(used to break up dense feature copy), and the **launch-campaign card**
which uses the campaign-launch blue `#455dd3` as a second accent. Cards
are warm-grey panels with a 10% black border; navigation is a thin,
quiet bar that lets the editorial layout dominate.

## Do's and Don'ts

- **Do** keep the action palette to a single confident blue (`#0075de`); secondary actions use the soft `#e6f3fe` surface, never a different hue.
- **Do** reach for Lyon Text whenever a pull-quote, testimonial, or editorial accent appears — pairing it with NotionInter is the brand's signature.
- **Do** use warm-grey neutrals (`#f9f9f8` → `#494744`); cool greys read as a different product (Linear, Vercel).
- **Don't** apply heavy shadows to cards — depth here is tonal and bordered, not shadowed.
- **Don't** use NotionInter below 500 weight for headlines; the negative-tracked 700 is what carries the bulletin voice.
- **Don't** mix the campaign-launch blue (`#455dd3`) with the action blue (`#0075de`) in the same module — they belong to different layers (campaign vs product).
