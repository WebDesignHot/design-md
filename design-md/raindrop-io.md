---
name: Raindrop.io
tagline: White paper, system-ui sans, soft watercolor blob backgrounds, and a vivid `#0b7ed0` blue CTA — a bookmark manager that ships like a creative-tool sketch.
author: webdesignhot
source_url: https://raindrop.io
spec: design.md/v1
quality: curated
featured: false
categories: [saas, design-tools]
tags: [light, minimal, sans, soft, organic, playful, cool]
preview_swatch: ['#ffffff', '#0b7ed0', '#5ec5d8']
related: [notion, things-app, hashnode]
description: 'Raindrop.io''s site mixes Apple system-ui pragmatism with watercolor whimsy — paper-white canvas, system-stack sans for every type role, and pastel blob illustrations (soft mint, blush pink, lilac, dusty teal) drifting around the hero. The brand mark is a blue-to-cyan gradient cloud, the primary CTA is a vivid `#0b7ed0` pill at 8px radius, and the page reads as a creative tool more than a productivity SaaS.'

colors:
  bg: '#ffffff'              # paper-white canvas
  bg-soft: '#fafbfc'          # subtle cool grey nested panel
  surface: '#f4f6f8'          # card surface
  text: '#000000'             # primary body copy
  text-strong: '#0a0a0a'      # display copy
  text-secondary: '#333333'   # secondary text "Download"
  text-muted: '#7a7a82'       # captions
  brand: '#0b7ed0'            # primary blue CTA
  brand-hover: '#0964a8'      # pressed state
  brand-cyan: '#5ec5d8'       # cyan half of brand gradient (logo)
  brand-blue-deep: '#1e7bd9'  # deep blue half of brand gradient
  accent-mint: '#cce8d4'      # soft watercolor blob (top right)
  accent-pink: '#ffd7d7'      # soft pink blob (bottom left)
  accent-lilac: '#e8d4f0'     # lilac blob accent
  accent-teal: '#b8d8d4'      # dusty teal blob
  border: '#0000001a'         # 10% black hairline

typography:
  display:
    family: '-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: '-apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500]
  scale:
    h1:    { size: 50, weight: 600, lineHeight: 1.15, tracking: '-0.015em' }
    h2:    { size: 36, weight: 600, lineHeight: 1.20 }
    h3:    { size: 24, weight: 600, lineHeight: 1.30 }
    body:  { size: 17, weight: 400, lineHeight: 1.55 }
    label: { size: 13, weight: 500 }

radius:
  xs: 3       # default text-link radius (observed)
  sm: 8       # primary CTA pill (observed)
  md: 12
  lg: 16
  xl: 24
  pill: 9999

layout:
  container: 1180
  gutter: 24
  rhythm: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

components:
  - cta-blue-pill
  - watercolor-blob-accent
  - announcement-pill-pink
  - product-screenshot-card
  - logo-cloud-gradient

lineage:
  summary: |
    Raindrop.io''s site lives at the intersection of Apple system
    pragmatism and watercolor sketchbook — every typographic choice is
    system-ui (no custom web font, the way Things and Apple Mac App
    Store use the OS face), but the visual layer adds soft pastel
    blob illustrations drifting around the hero in mint, blush pink,
    lilac, and dusty teal. The brand mark is a blue-to-cyan
    gradient cloud (`#1e7bd9 → #5ec5d8`), and the primary CTA is a
    vivid `#0b7ed0` pill at a conservative 8px radius — the same
    blue Stripe and Linear flirt with, but warmer. The
    "New: AI Assistant" announcement chip is a soft-pink pill, the
    only saturated chip on the page. Where Things commits fully to
    Apple''s restraint and Notion commits to editorial weight,
    Raindrop sits between them — system-ui for legibility, but
    watercolor for personality. The page reads more like a
    creative-tool''s landing (Procreate, Pixelmator) than a typical
    productivity SaaS, which matches Raindrop''s positioning as
    "for creatives, built for coders".
  influences:
    - name: Apple Mac App Store
      role: System-ui typography, white canvas, no custom web fonts.
      url: https://www.apple.com/app-store/
    - name: Procreate / Pixelmator
      role: Watercolor blob accents and pastel-pink announcements as creative-tool brand vocabulary.
      url: https://procreate.com
    - name: Stripe / Linear
      role: Single confident-blue action color over a near-monochrome canvas.
      url: https://stripe.com
---

## Overview

Raindrop.io''s site is system-ui pragmatism with watercolor
whimsy on top. The canvas stays paper-white, the typography is
unstyled `-apple-system, system-ui` (so SF Pro on Mac, Segoe UI
on Windows), and soft pastel blob illustrations — mint, blush
pink, lilac, dusty teal — drift around the hero like watercolor
washes on a sketch.

The brand mark is a blue-to-cyan gradient cloud, the primary
CTA is a vivid `#0b7ed0` pill at 8px radius, and the
announcement chip ("New: AI Assistant") is a soft-pink pill —
the only saturated chip on the page. The H1 "All-in-one
bookmark manager" sets at 50px weight 600, body at 17px on
1.55 line-height.

## Colors

- **bg** `#ffffff` — paper-white canvas
- **bg-soft** `#fafbfc` — subtle cool grey nested panel
- **surface** `#f4f6f8` — card surface
- **text** `#000000` — primary body copy, true black
- **text-secondary** `#333333` — "Download" link color in nav
- **brand** `#0b7ed0` — primary blue CTA
- **brand-cyan** `#5ec5d8` — cyan half of brand gradient
- **accent-mint / pink / lilac / teal** — watercolor blob hues drifting around hero
- **border** `#0000001a` — 10% black hairline

## Typography

Display is the system stack — `-apple-system, system-ui,
"Segoe UI", Roboto` — which renders as SF Pro on Apple
platforms. The H1 "All-in-one bookmark manager" sets at 50px
weight 600 with `-0.015em` tracking. Sub-displays drop to 36px
weight 600 for section heads ("Designed for creatives, built
for coders").

Body sits at 17px on a 1.55 line-height, weight 400. The
choice not to load a custom web font keeps the page light —
fonts render instantly per platform, the way Things and Apple
Mac App Store landing pages do.

## Layout

Container is roughly 1180px with a 24px gutter. The page
follows an editorial rhythm: hero with watercolor blobs and
product screenshot inset, three-up feature grid, single-column
testimonial, pricing, footer. Watercolor blobs only appear on
hero and major section transitions.

## Elevation & Depth

Depth comes from the watercolor blob illustrations themselves
— soft pastel washes that sit on top of the white canvas with
no border, behaving as decorative atmosphere rather than
elevation. Cards lift via cool tonal layering (`#fafbfc` →
`#f4f6f8`) and 10% black hairlines. Product screenshots use
realistic browser chrome with subtle drop shadows.

## Shapes

Primary CTA radius is 8px — conservative pill. Inline text
links use 3px (the page''s smallest radius). Cards step up to
12–16px. Watercolor blobs have no defined radius — they''re
hand-drawn organic SVG shapes.

## Components

The signature primitives are the **blue pill CTA**
(`#0b7ed0` bg, white text, 8px radius), the **soft-pink
announcement chip** ("New: AI Assistant"), the **watercolor
blob accents** (pastel SVG washes drifting around hero), the
**logo-cloud-gradient brand mark** (blue-to-cyan cloud icon),
and the **product screenshot card** showing the actual app
chrome with realistic browser shadow.

## Do''s and Don''ts

- **Do** use system-ui exclusively — no custom web fonts; the page''s lightness depends on it.
- **Do** scatter watercolor blobs sparingly around hero modules — they''re atmosphere, not a system component.
- **Do** keep the primary CTA at conservative 8px radius; fully-round pills would tip the page into iOS-native (Fantastical) territory rather than creative-tool territory.
- **Don''t** introduce a dark mode for the marketing surface; the watercolor palette only works on white.
- **Don''t** use the soft pink for buttons — it belongs to the announcement chip alone.
- **Don''t** add a custom display font; the contrast between system-ui pragmatism and watercolor whimsy is the brand''s defining tension.
