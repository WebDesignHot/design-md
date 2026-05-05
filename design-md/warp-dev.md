---
name: Warp
tagline: Near-black canvas, neon-lime cursor, real terminal screenshots — a marketing site that boots like a shell.
author: webdesignhot
source_url: https://www.warp.dev
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools, ai]
tags: [dark, minimal, sans, mono, dense, structured, cool]
preview_swatch: ['#121212', '#c2ff00', '#ffffff']
related: [raycast, vercel, anthropic]
description: 'Warp''s marketing site mirrors the terminal it sells — a near-black `#121212` canvas, Inter at 600 for an oversized hero "Warp is the agentic development environment", and white-button download CTAs that read like macOS app actions. Real screenshots of the agent terminal carry a neon-lime accent rather than the marketing surface itself, so the page feels like documentation that happens to convert.'

colors:
  bg: '#121212'              # body backdrop, observed as rgb(18,18,18)
  bg-100: '#1a1a1a'          # elevated panel base
  bg-200: '#222222'          # input fields, terminal chrome
  bg-300: '#2c2c2c'          # popover / hover state
  surface-terminal: '#0e0e0e' # the actual terminal screenshot bg
  text: '#ffffff'            # primary copy on dark
  text-200: '#cccccc'         # secondary copy
  text-300: '#999999'         # captions, "Trusted by" labels (rgba 255/255/255 .6)
  text-400: '#666666'         # disabled / metadata
  brand: '#c2ff00'           # neon-lime accent (terminal cursor / highlight)
  brand-soft: '#7a9e1f'       # darker lime for hover states
  on-brand: '#121212'
  cta-bg: '#ffffff'          # primary "Download for Mac" button bg
  cta-text: '#000000'        # primary CTA text
  link: '#7eb8ff'             # in-copy link hue
  border: '#2a2a2a'          # desaturated divider, never pure grey

typography:
  display:
    family: 'Inter, "Inter Placeholder", -apple-system, "system-ui", sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: 'Inter, "Inter Placeholder", -apple-system, "system-ui", sans-serif'
    weights: [400, 500]
  mono:
    family: '"Hack", "JetBrains Mono", "Fira Code", Menlo, Monaco, Courier, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 72, weight: 500, lineHeight: 1.05, tracking: '-0.02em' }
    h2:    { size: 40, weight: 500, lineHeight: 1.15, tracking: '-0.01em' }
    h3:    { size: 24, weight: 500, lineHeight: 1.30 }
    body:  { size: 16, weight: 400, lineHeight: 1.55 }
    mono-label: { size: 12, weight: 500, family: mono }

radius:
  xs: 4
  sm: 7       # primary CTA radius (observed)
  md: 8
  lg: 12
  xl: 16
  card: 12
  pill: 9999

layout:
  container: 1200
  gutter: 24
  rhythm: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160]

components:
  - cta-white-pill
  - terminal-screenshot
  - product-row-card
  - logo-cloud
  - announcement-banner

lineage:
  summary: |
    Warp's web design is the visual continuation of the terminal product —
    every page reads like a CLI session that grew a marketing layer. The
    canvas sits at `#121212`, a touch lighter than Linear's `#08090a` and
    Raycast's `#07080a`, deliberately close to the macOS Terminal default
    background. Display type is Inter at 500–600, sized 72px on the hero
    "Warp is the agentic development environment" — the unusually open
    line-height (1.05) and the centered alignment make the page feel like
    a man-page title rather than a SaaS pitch. The brand chromatic accent
    is a neon-lime (`#c2ff00`) that lives almost entirely *inside* the
    product screenshots — the terminal's cursor and command markers — so
    the marketing surface itself stays monochrome white-on-black, and the
    color enters only when you're seeing real software. The download CTA
    inverts the conventional dark-site logic: instead of a tinted accent
    button, Warp ships a pure-white pill with black text, the same
    affordance Apple uses for "Download macOS" buttons. That single move
    is what makes the site feel like a system app rather than a SaaS.
  influences:
    - name: Linear
      role: Pioneered the near-black dark-mode marketing canvas with Inter as display.
      url: https://linear.app
    - name: Apple (macOS download pages)
      role: The white-pill download button on dark is lifted directly from Apple''s system-software pages.
      url: https://www.apple.com/macos/
    - name: Vercel
      role: Confidence in oversized Inter display with tight tracking and dense data-heavy panels below.
      url: https://vercel.com
---

## Overview

Warp's marketing site is a terminal that learned to convert. The
canvas sits at `#121212` — a touch lighter than Linear or Raycast,
matching the macOS Terminal default — and the hero "Warp is the
agentic development environment" sets at 72px Inter 500 with white
on black, centered. The download CTA is a pure-white pill with black
text, the same affordance Apple uses for system-software downloads.

Color enters the page almost exclusively through real product
screenshots: the agent terminal's cursor flashes a neon-lime
(`#c2ff00`) and its command markers glow purple, but the marketing
surface itself stays monochrome. The page reads like documentation
that happens to ship a "Download for Mac" button.

## Colors

- **bg** `#121212` — terminal-default near-black body backdrop
- **bg-100** `#1a1a1a` — first-tier elevated panel (cards)
- **bg-200** `#222222` — input fields, terminal chrome strips
- **surface-terminal** `#0e0e0e` — real terminal screenshot bg, deeper than the page
- **text** `#ffffff` — primary copy
- **text-300** `#999999` — "Trusted by industry leaders" caption hue
- **brand** `#c2ff00` — neon-lime accent, lives inside terminal screenshots
- **cta-bg** `#ffffff` — primary download button background
- **cta-text** `#000000` — primary CTA label
- **border** `#2a2a2a` — desaturated divider, never pure grey

## Typography

Display is **Inter** at 500 (medium), sized 72px with a 1.05
line-height — the hero is centered and reads as a single typographic
block. Sub-display steps down to 40px Inter 500 for section heads
("Trusted by industry leaders").

Body is the same Inter family at 400/500 weights, sized 16px on
1.55 line-height. Mono labels appear inside terminal screenshots
and command-syntax callouts; the page itself uses very little mono
on the marketing chrome.

## Layout

Container width is roughly 1200px with a 24px gutter. Sections
follow a clear rhythm — hero, product-row card pair, logo cloud,
feature stack, FAQ — and the dark canvas runs edge-to-edge
without breaking into light bands. Real product screenshots sit
on `#1a1a1a` cards and carry their own internal black background.

## Elevation & Depth

Depth is achieved through tonal layering: the page bg
(`#121212`), card bg (`#1a1a1a`), terminal screenshot bg (`#0e0e0e`)
form a three-step ladder. The terminal screenshot reads as
*deeper* than the card it sits on — a deliberate inversion that
makes the screenshot feel like a window cut into the page.
Shadows are minimal; the chrome relies on tone, not blur.

## Shapes

Buttons land at 7–8px (the observed primary CTA is 7px), cards
at 12px, terminal-window screenshots at 12–16px to match macOS
window chrome. Everything is rectangular and dense; the page
avoids organic curves entirely.

## Components

The signature primitives are the **white-pill download CTA**
(`#ffffff` bg, black text, 7px radius, the page's most chromatic
moment), the **product-row card** (a horizontal pair of feature
cards with a screenshot on the right), and the **terminal
screenshot** itself — `#0e0e0e` background with the lime cursor
as the only saturated color on the page. The announcement banner
("Warp is now open-source") sits on a soft `#f5f5f5` strip above
the dark hero.

## Do''s and Don''ts

- **Do** anchor the canvas at `#121212` — lighter than Linear or Raycast, matching macOS Terminal default.
- **Do** ship the primary download button as a pure-white pill with black text; tinted accent buttons read as generic dev-tool SaaS.
- **Do** let neon-lime live inside the terminal screenshots, not on marketing chrome — that constraint is what keeps the page calm.
- **Don''t** add gradient washes or particle backgrounds; the dark canvas is the brand.
- **Don''t** introduce a second brand accent — lime is the only saturated color, and it belongs to the product, not the site.
- **Don''t** soften display type below Inter 500; the hero''s authority comes from the medium-not-bold weight at large size.
