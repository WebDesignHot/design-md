---
name: Polar
tagline: Dev-tool obsidian — 8rem editorial display headlines, indigo accents, Louize serif moments.
author: webdesignhot
source_url: https://polar.sh
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, editorial, serif, sans, mono, dense]
preview_swatch: ['#171719', '#5b3eea', '#d7d8da']
related: [vercel, linear, stripe]
description: 'Polar fuses two type voices in a single dark canvas — InterDisplay sans for the product surface and a discreet Louize serif for editorial moments — over a near-black `#171719` ground with a saturated indigo accent. The result is a developer-monetization site that reads more like a tech publication than a SaaS landing.'
colors:
  bg: '#171719'
  surface: '#101011'
  surface-alt: '#090909'
  text: '#d7d8da'
  text-soft: '#71727a'
  text-muted: '#828387'
  brand: '#5b3eea'
  accent: '#5b3eea'
  border: '#1d1e20'
  on-brand: '#ffffff'
  card: '#171719'
  popover: '#101011'

typography:
  display:
    family: '"InterDisplay", "Inter", sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: '"Inter", sans-serif'
    weights: [400, 500]
  mono:
    family: '"GeistMono", ui-monospace, monospace'
    weights: [400]
  serif:
    family: '"Louize", Georgia, serif'
    weights: [400]
  scale:
    h1:    { size: 128, weight: 400, lineHeight: 1.0, tracking: '-0.025em' }
    h2:    { size: 60, weight: 500, lineHeight: 1.05, tracking: '-0.02em' }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 11, weight: 500, family: mono }

radius:
  button: 6
  card: 10
  pill: 9999

lineage:
  summary: |
    Polar is what happens when a Vercel-trained sensibility meets the
    aesthetic of a print magazine. The canvas is a near-black `#171719`
    rather than pure `#000` — warmer, less crunchy under heavy text — and
    the typographic system carries two voices in dialogue: `InterDisplay`
    for the product UI and headlines that scale up to 128px (`text-9xl`),
    and a licensed Louize serif reserved for narrative pull-quotes and
    occasional headlines that need a different register. The indigo
    `#5b3eea` accent (encoded throughout the system as the `lab(44% 29 -86)`
    primary) is treated like Linear treats its indigo — punctuation, not
    fill — while CTAs keep a tight `0.6rem` radius rather than a pill. Mono
    is GeistMono, a deliberate handoff to the Vercel Geist family that
    signals lineage to the modern dev-tool design tradition. The eight-step
    radius scale and the explicit `--orbit-*` token namespace betray a
    custom design-system foundation underneath the Tailwind v4 surface.
  influences:
    - name: Vercel Geist
      role: Type-system lineage — GeistMono on Polar, InterDisplay/Inter parallel
      url: https://vercel.com/font
    - name: Linear
      role: Dark-canvas product-as-marketing posture; indigo-as-accent restraint
      url: https://linear.app
    - name: Louize (Matthieu Cortat)
      role: Editorial serif used for narrative moments — magazine-grade typography
      url: https://www.205.tf/font/louize
    - name: Stripe
      role: Adjacent payment-infra lineage — Polar is a payment company aiming for the same trust posture
      url: https://stripe.com
---

## Overview

Polar's site is a developer-monetization product dressed as a tech
publication. The dark canvas is `#171719` — a hair warmer than pure black,
which keeps the type readable when the headline scales up to a full
`text-9xl` (128px) display size. Headlines are set in `InterDisplay` at
`weight: 400` with `-0.025em` tracking; body and UI hold to `Inter` at
`16/24`. A Louize serif is loaded as a deliberate counter-voice for
moments that want the gravitas of a magazine.

What makes it distinctive: most dev-tool sites at this scale stay inside
a single sans family. Polar pairs InterDisplay with a real licensed serif
and a Geist-family mono — three voices in the same dark room — without
ever feeling crowded. The `--orbit-*` namespace under the Tailwind v4
tokens reveals a deeper internal design-system foundation than the
landing page exposes.

## Colors

- **bg** `#171719` — near-black canvas, slightly warm to keep heavy type comfortable.
- **surface** `#101011` — secondary tier (cards, popovers, sidebar).
- **surface-alt** `#090909` — sidebar background, deepest tier.
- **text** `#d7d8da` — primary body and UI copy.
- **text-soft** `#71727a` — secondary copy, muted foreground.
- **brand** `#5b3eea` — Polar indigo (encoded as `lab(44% 29 -86)`); accents only.
- **border** `#1d1e20` — low-contrast separators; tonal not chromatic.

## Typography

Display voice is **InterDisplay** at the largest end of the scale (up to
8rem / 128px), set at weight `400` with tight tracking — the
display-optimized Inter sibling, not a different family. The choice
preserves brand continuity with the rest of the Inter ecosystem while
letting the title compete with the magazine register the site is reaching
for.

Body is plain **Inter** at `16/24`, weight `400`. Letter-spacing is left
neutral; hierarchy comes from size and weight, never tracking tricks. The
foreground color `#71727a` is muted by design — Polar treats body copy as
context, not the lead.

A licensed **Louize** serif is loaded for editorial moments — pull-quotes,
narrative headlines, the occasional long-form section. Mono is **GeistMono**,
a clear nod to the Vercel design lineage and a credibility signal for
the developer audience.

## Layout

Container scale runs `--container-xs` (20rem) through `--container-7xl`
(80rem); the marketing surface holds to `5xl`/`6xl` (64–72rem) for prose
sections. The sidebar pattern from the product (`--sidebar-*` tokens)
leaks into the docs surface. Section rhythm is generous — vertical
gutters around `64–96px` between regions.

## Elevation & Depth

Tonal layering only — `bg` → `surface` → `surface-alt`, each step roughly
6–8% darker. Shadows are reserved for floating overlays (the
`--xq9itwp`-style `0 0 20px #0000000a` token is for popovers). Cards on
the canvas use `surface` with a `1px` border in `#1d1e20`, never a drop
shadow.

## Shapes

Eight radius tiers from `--radius-xs` (`0.125rem`) up through `xs/sm/md/
lg (0.6rem) /xl/2xl/3xl/4xl (2rem)`. The base `--radius` is `0.6rem` —
the sweet spot between Linear's pill and Stripe's hard 4px. Buttons use
`6px`; cards use `10px`. The pill (`9999px`) is reserved for status
chips and pricing toggles.

## Components

CTAs use ghost-style links in the hero rather than filled buttons — text
underline with a tracking arrow; the brand indigo appears only on hover
or focus. Cards use `surface` over the slightly darker canvas with a 1px
border. Code chips use `GeistMono` at `12–14px`. The `--graphic-stroke`
token (`#fff`) and `--graphic-dim` (`#282828`) suggest a custom diagram
language under the section illustrations.

## Do's and Don'ts

- **Do** scale display headlines aggressively (up to 128px) — Polar earns
  it with editorial pacing and tight tracking.
- **Do** treat the indigo `#5b3eea` as punctuation. Most CTAs are
  text-link or low-key ghost; brand fills are rare.
- **Do** pair InterDisplay with a real serif (Louize-class, not Georgia)
  if you want a magazine register without losing tech credibility.
- **Don't** push the canvas to pure `#000` — the warmer `#171719` is what
  keeps the heavy type comfortable.
- **Don't** introduce a fourth type voice. Three (InterDisplay / Inter /
  GeistMono / Louize as accent) is already the ceiling.
- **Don't** drop shadows under cards. Tonal stacking + 1px borders is the
  whole depth language.
