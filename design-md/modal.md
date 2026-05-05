---
name: Modal
tagline: Serverless infra in lime-green — pure black canvas, electric `#7fee64` accent, custom Modal mono on every chip and code block.
author: webdesignhot
source_url: https://modal.com
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools, ai, saas]
tags: [dark, mono, bright, dense, structured]
preview_swatch: ['#000000', '#7fee64', '#ffffff']
related: [linear, vercel]
description: 'Modal renders serverless GPU infrastructure with a single, electric design move — lime-green `#7fee64` on pure black, custom Modal Mono running through every chip, label, and CTA. The site reads like a terminal that learned typography.'

colors:
  bg: '#000000'
  bg-elev-1: '#0a0a0a'
  bg-elev-2: '#141414'
  bg-elev-3: '#1f1f1f'
  text: '#ffffff'
  text-soft: '#a3a3a3'
  text-muted: '#737373'
  brand: '#7fee64'
  brand-hover: '#6dd954'
  brand-tint: 'rgba(127, 238, 100, 0.12)'
  border: 'rgba(255, 255, 255, 0.1)'
  border-strong: 'rgba(255, 255, 255, 0.2)'
  on-brand: '#000000'

typography:
  display:
    family: '"Söhne", "Inter Variable", -apple-system, system-ui, sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: '"Söhne", "Inter Variable", -apple-system, system-ui, sans-serif'
    weights: [400, 500]
  mono:
    family: '"Modal Mono", "Berkeley Mono", "JetBrains Mono", ui-monospace, "SF Mono", monospace'
    weights: [400, 500]
  scale:
    display:    { size: 72, weight: 600, lineHeight: 1.0,  tracking: '-0.03em' }
    h1:         { size: 56, weight: 600, lineHeight: 1.05, tracking: '-0.025em' }
    h2:         { size: 36, weight: 600, lineHeight: 1.15, tracking: '-0.018em' }
    h3:         { size: 22, weight: 500, lineHeight: 1.3 }
    body-large: { size: 18, weight: 400, lineHeight: 1.55 }
    body:       { size: 16, weight: 400, lineHeight: 1.55 }
    body-small: { size: 14, weight: 400, lineHeight: 1.5 }
    label:      { size: 11, weight: 500, lineHeight: 1.3, family: mono, transform: uppercase, tracking: '0.08em' }

radius:
  sm: 4
  md: 6
  lg: 8
  card: 12
  button: 6
  pill: 9999

layout:
  page-width: 1280
  reading-width: 720
  header-height: 64

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: button
    padding: '10px 18px'
    font: 'Söhne 14px / weight 500'
    use: 'Sign up, Start building — lime block on near-black canvas'
  button-secondary:
    backgroundColor: transparent
    textColor: text
    border: border-strong
    rounded: button
  card:
    backgroundColor: bg-elev-1
    border: border
    rounded: card
    use: 'Feature tile, code preview block — minimal elevation'

lineage:
  summary: |
    Modal is a serverless GPU/CPU compute platform whose marketing
    site is engineered around a single, conviction-level design move:
    **lime-green `#7fee64` on pure black**. The accent is
    near-radioactive — a green that registers somewhere between Hacker
    terminal phosphor and 1990s rave flyer — and Modal commits to it
    across every CTA, label chip, code highlight, and hover state.
    The mono face is **Modal Mono**, a custom commission (the
    company's name doubles as the typography brand). Display copy
    runs in Söhne (Klim Type Foundry), the same family that anchors
    Stripe's editorial system — Modal treats it more aggressively,
    cranking weights to 600 and tracking to `-0.025em` for
    confidence. The black canvas has subtle elevation tiers
    (`#0a0a0a` → `#141414` → `#1f1f1f`) but no decorative gradients;
    the green is the entire color story. Code blocks, latency
    benchmarks, and CLI output blocks are first-class typography
    citizens — full-bleed, mono-set, with the green reserved for
    output highlights and command prefixes. The system reads as a
    terminal that learned typography.
  influences:
    - name: Söhne (Klim Type Foundry)
      role: Display sans — confidence-weight 600, tight tracking
      url: https://klim.co.nz/retail-fonts/soehne/
    - name: Berkeley Mono / Modal Mono lineage
      role: Custom commercial mono as typography signature
      url: https://berkeleygraphics.com/typefaces/berkeley-mono/
    - name: Vercel / Linear dark dev-tool tradition
      role: Pure-black canvas with single-accent CTAs — Modal pushes brighter
      url: https://vercel.com
---

## Overview

Modal is the rare developer infra company whose visual identity is
*louder* than its competitors. Pure black canvas, lime `#7fee64`
that nearly hums, and Modal Mono on every chip and code label. The
site signals that the product behind it is fast — fast enough that
the brand can afford to be punchy without seeming unserious.

What makes it distinctive vs. nearby alternatives: Modal's neighbors
in serverless compute (Vercel, Cloudflare Workers, Replicate) lean
into restrained palettes — black/white, single muted accent, conservative
typography. Modal goes the other way, picking a green that's almost
radioactive and applying it as the dominant CTA fill. The choice is
intentional: in a category of similar pitches, the loudest visual
signal wins.

## Colors

- **bg** `#000000` — pure black canvas. No softening.
- **bg-elev-1** `#0a0a0a` — first elevation tier (cards, code blocks).
- **bg-elev-2** `#141414` — emphasized blocks, hover states.
- **text** `#ffffff` — body, headlines, code output.
- **text-soft** `#a3a3a3` — meta, secondary copy.
- **brand** `#7fee64` — Modal lime. Used as primary CTA fill, code
  output highlights, terminal prompt prefix.
- **border** `rgba(255, 255, 255, 0.1)` — translucent hairlines for
  card chrome.

## Typography

The display voice is **Söhne** (Klim Type Foundry) at weight 600,
tracked to `-0.025em` for compressed, confident headlines. Where
Stripe uses Söhne at weight 300 for editorial softness, Modal cranks
the same family to 600 for engineering-grade emphasis. Body copy
holds at 16px regular on 1.55 line-height — pragmatic dev-tool
density, not magazine spread.

Mono is **Modal Mono** — a custom commission that doubles as the
typography signature. Used for code blocks, CLI output, latency
benchmarks, label chips, and the lowercase "modal" wordmark itself.
Labels are uppercase, tracked to `+0.08em`, set at 11px weight 500
in mono — a Linear-adjacent move that distinguishes navigation and
section markers from running prose.

## Layout

Page caps at **1280px**. Reading columns inside long-form content
cap at **720px**. Header is `64px` tall, sticky, with a translucent
black fill and a hairline bottom border on scroll. Section gutters
are aggressive (96–128px) to give code blocks room to breathe.
Asymmetric splits appear on feature pages (1.4fr / 1fr) where a
code block deserves visual primacy over its prose.

## Elevation & Depth

Tonal stacking, not shadows. `bg` (`#000000`) → `bg-elev-1`
(`#0a0a0a`) → `bg-elev-2` (`#141414`) → `bg-elev-3` (`#1f1f1f`).
Each step is roughly 4–6% lightness — finer-grained than Linear's
3-tier system, calibrated for the product's denser information
surfaces. Drop shadows appear only on overlay UI; cards and code
blocks rely entirely on tonal layering.

## Shapes

Four radius tiers: **4px** (chips, micro-pills), **6px** (buttons,
inputs), **8px** (small cards), **12px** (large cards, modals). The
pill `9999px` appears on status indicators and notification chips.
The geometry is gentler than Vercel's `6px` standard but sharper
than Stripe's editorial `8px` — calibrated to read as
*infrastructure*, not as *consumer SaaS*.

## Components

The signature primary button: `#7fee64` background, **black text**,
6px radius, `10px 18px` padding, Söhne 14px weight 500. The
inversion is deliberate — Modal puts black text on lime, not white,
because lime is bright enough that white-on-lime fails contrast and
black-on-lime maximizes legibility. Code blocks are full-bleed,
mono-set in Modal Mono, syntax-highlighted with green for output
and white for input. Status pills (running, queued, completed) use
brand-tint backgrounds with brand text.

## Do's and Don'ts

- **Do** commit to lime `#7fee64` as the only accent. No secondary
  brand colors.
- **Do** use **black text** on the lime CTA — never white. Contrast
  is the design.
- **Do** use Modal Mono (or licensed Berkeley Mono) for every label,
  chip, code block, and CLI output.
- **Don't** soften the canvas to navy or near-black. Pure `#000` is
  the system.
- **Don't** add gradients to the lime. The flat fill is the brand.
- **Don't** drop labels to title case. Uppercase + `+0.08em`
  tracking + mono is the system rule.
