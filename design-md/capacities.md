---
name: Capacities
tagline: Cream-yellow canvas, Inter at 700 with a Crimson Pro serif fallback, and a yellow underline as page ornament — a PKM that thinks like a sketchbook.
author: webdesignhot
source_url: https://capacities.io
spec: design.md/v1
quality: curated
featured: false
categories: [saas, ai]
tags: [light, editorial, sans, serif, warm, soft, organic, structured]
preview_swatch: ['#fff4d6', '#1a1a1f', '#f5c842']
related: [notion, granola, hashnode]
description: 'Capacities'' site dresses a personal-knowledge-management tool in sketchbook clothes. The hero canvas is a soft cream-yellow gradient, body copy in Inter is paired with Crimson Pro serif on emphasis words, and a hand-drawn yellow marker underline runs beneath the word "home" in the H1 — using ornament as a chromatic accent rather than a button. The action layer is a single dark CTA on cream.'

colors:
  bg: '#ffffff'              # white base canvas
  bg-cream: '#fff4d6'         # warm cream-yellow hero gradient
  bg-soft: '#fef9e8'          # softer cream nested panel
  surface: '#faf3df'          # warmer card surface
  text: '#1a1a1f'             # primary body copy (oklch 0.39 darkened)
  text-strong: '#0e0f12'      # display copy
  text-muted: '#6b6770'       # captions and metadata
  brand-yellow: '#f5c842'      # marker-underline accent, soft gold
  brand-yellow-soft: '#fce98c' # softer yellow chip / pill bg
  cta-bg: '#1a1a1f'           # near-black primary CTA
  cta-text: '#ffffff'
  cta-hover: '#0e0f12'        # pressed state
  border: '#0000001a'         # 10% black hairline
  border-soft: '#00000010'

typography:
  display:
    family: 'Inter, "Inter var", ui-sans-serif, "system-ui", sans-serif'
    weights: [600, 700]
  serif:
    family: '"Crimson Pro", Georgia, "Times New Roman", serif'
    weights: [400, 500]
  body:
    family: 'Inter, "Inter var", ui-sans-serif, "system-ui", sans-serif'
    weights: [400, 500]
  scale:
    h1:    { size: 64, weight: 700, lineHeight: 1.10, tracking: '-0.02em' }
    h2:    { size: 48, weight: 700, lineHeight: 1.15, tracking: '-0.01em' }
    h3:    { size: 36, weight: 700, lineHeight: 1.25 }
    body:  { size: 17, weight: 400, lineHeight: 1.60 }
    serif-emphasis: { size: 64, weight: 500, family: serif, italic: true }
    label: { size: 13, weight: 500, tracking: '0.02em' }

radius:
  xs: 4
  sm: 6       # default button (observed)
  md: 8
  lg: 12
  xl: 16
  pill: 9999

layout:
  container: 1200
  gutter: 24
  rhythm: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

components:
  - cta-dark-pill
  - hero-marker-underline
  - announcement-pill
  - feature-card-cream
  - object-graph-mockup

lineage:
  summary: |
    Capacities is a personal-knowledge-management tool, and its design
    rejects the dark-slab Roam / Logseq aesthetic in favor of a
    sketchbook palette. The hero gradient is a warm cream-yellow
    (`#fff4d6` peak), body is Inter at 700 (sized 64px on a tight
    1.10 line-height for the H1), and the page''s most distinctive
    move is a hand-drawn yellow marker line underneath the word
    "home" — ornament as accent, the way a Field Notes interior
    diagram would mark a key term. Section headings occasionally
    swap into Crimson Pro italic for editorial emphasis (the
    serif:Inter ratio is roughly 1:6 — a flourish, not a system).
    The action layer is a single near-black CTA pill at 6px radius
    — the conservative radius is what keeps the page from tipping
    into "playful" territory; it stays closer to Notion''s editorial
    rigor than to a hand-drawn brand. Capacities is positioning
    itself as Notion-but-warmer — same warm-cream + serif emphasis
    DNA, but with sketchbook ornament where Notion uses chromatic
    restraint.
  influences:
    - name: Notion
      role: Warm-cream canvas + serif emphasis + sans body, the editorial PKM template.
      url: https://www.notion.com
    - name: Field Notes
      role: Sketchbook ornament — marker underlines and hand-drawn dingbats as chromatic accent.
      url: https://fieldnotesbrand.com
    - name: Tailwind CSS
      role: Inter at 700 with tight tracking as the dev-tool display convention; Capacities uses the same display weight.
      url: https://tailwindcss.com
---

## Overview

Capacities'' site is a personal knowledge tool dressed as a
sketchbook. The hero gradient washes from white into a warm
cream-yellow (`#fff4d6`), the H1 "A home for everything you
think, learn, and create." sets at 64px in Inter 700 — and a
hand-drawn yellow marker underline runs beneath the word "home"
as the page''s defining ornament.

The action layer is a single near-black CTA pill (`#1a1a1f` bg,
white text, 6px radius). Body copy in Inter 400 at 17px is
occasionally interrupted by Crimson Pro italic for editorial
emphasis — the serif appears in roughly 1 in 6 headings, never
on body, behaving as a flourish rather than a system.

## Colors

- **bg** `#ffffff` — white base canvas
- **bg-cream** `#fff4d6` — warm cream-yellow hero gradient peak
- **bg-soft** `#fef9e8` — softer cream nested panel
- **surface** `#faf3df` — warmer card surface
- **text** `#1a1a1f` — primary body copy (near-black)
- **text-strong** `#0e0f12` — display copy
- **brand-yellow** `#f5c842` — marker-underline accent
- **brand-yellow-soft** `#fce98c` — announcement pill bg
- **cta-bg** `#1a1a1f` — near-black primary CTA
- **border** `#0000001a` — 10% black hairline

## Typography

Display is **Inter** at 700, sized 64px on a 1.10 line-height
with `-0.02em` tracking. The H1 is the page''s loudest move —
near-bold sans on cream-yellow, paired with the marker
underline. Sub-displays drop to 48px Inter 700, then 36px for
section heads.

Body is the same Inter family at 400 (regular) and 500 (medium),
sized 17px on a 1.60 line-height. **Crimson Pro** appears as an
emphasis serif on roughly 1 in 6 headings, used italic at the
same point size as the surrounding sans — the typographic
contrast is voice-based, not size-based.

## Layout

Container is roughly 1200px with a 24px gutter. The page
follows a clear editorial rhythm: cream hero, white feature
grid, cream testimonial band, white pricing. The cream gradient
is the structural device — every section transition is a soft
fade from cream to white or back, never a hard boundary.

## Elevation & Depth

Depth is achieved through warm tonal layering (`#ffffff` →
`#fef9e8` → `#fff4d6` → `#faf3df`) and 10% black hairlines.
Cards lift via warm surface, never shadow. Product mockups
(the object-graph view) sit on cream cards with a subtle inner
glow rather than the typical neutral chrome.

## Shapes

Primary CTA radius is 6px — conservative compared to most
warm-canvas brands (Granola at 9999px, Notion at 8px). Cards
step up to 12px, feature shells to 16px. The conservative
button radius keeps Capacities from drifting into "playful"
territory.

## Components

The signature primitives are the **near-black CTA pill**
(`#1a1a1f` bg, white text, 6px radius), the **marker-underline
accent** (yellow brushstroke beneath emphasis words), the
**announcement pill** (soft yellow band, "A studio for your
mind"), and the **cream feature card** (`#faf3df` bg, 10% black
border). Object-graph mockups are framed in soft cream rather
than neutral browser chrome.

## Do''s and Don''ts

- **Do** keep the canvas warm cream-yellow gradient — flat white reads as Notion, not Capacities.
- **Do** use the marker-underline accent sparingly; it''s ornament for the H1, not a system component.
- **Do** reserve Crimson Pro for emphasis words inside Inter headings — italic at the same size, never used for body.
- **Don''t** flip the page to a dark mode for the marketing surface; the cream is the brand.
- **Don''t** introduce a second accent color; soft yellow does all chromatic work, the CTA stays near-black.
- **Don''t** raise the CTA radius above 8px — the conservative 6px is what differentiates Capacities from playful PKM tools.
