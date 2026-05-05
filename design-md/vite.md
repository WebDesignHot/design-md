---
name: Vite
tagline: Electric purple `#646cff` + Manrope display + a literal lightning-bolt mark — the build tool that designed itself to feel as fast as it is.
author: webdesignhot
source_url: https://vite.dev
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools]
tags: [dark, minimal, sans, mono, bright, cool]
preview_swatch: ['#1b1b1f', '#646cff', '#41d1ff']
related: [vercel, anthropic, supabase]
description: 'Vite''s site is the open-source equivalent of a venture-backed dev brand — a near-black `#1b1b1f` canvas, a single electric `#646cff` purple paired with a complementary `#41d1ff` cyan that together form the iconic gradient lightning bolt, **Manrope** for display headlines, **Inter** for body, and a code-sample-heavy layout typical of VitePress documentation themes. The visual register is "the build tool that designed itself" — confident, minimal, gradient-forward, and unmistakably Evan You-adjacent (sharing chromatic DNA with Vue and Nuxt).'

colors:
  bg: '#1b1b1f'                # body canvas, near-black with slight cool tilt
  bg-elevated: '#202127'       # raised card surface (VitePress default)
  bg-soft: '#161618'           # darker footer / nav band
  surface: '#252529'            # secondary panel
  surface-hover: '#2c2c33'      # hover state
  text: '#ffffffdd'             # primary copy (~87% white, VitePress default)
  text-muted: '#ebebf599'       # body paragraphs
  text-soft: '#ebebf580'        # captions, metadata
  brand: '#646cff'              # the iconic Vite electric purple
  brand-hover: '#535bf2'        # pressed state
  brand-light: '#747bff'        # lighter brand variant for dark→light theme
  brand-soft: '#1d1f3a'         # tinted brand surface
  accent-cyan: '#41d1ff'        # the lightning-bolt cyan companion
  on-brand: '#ffffff'
  # The signature gradient: purple → cyan, used in the lightning bolt mark
  gradient-bolt: 'linear-gradient(120deg, #bd34fe 30%, #41d1ff)'
  gradient-text: 'linear-gradient(120deg, #bd34fe 30%, #41d1ff)'
  border: '#3c3f44'             # VitePress default divider, cool grey
  border-soft: '#2e2e32'        # softer divider

typography:
  display:
    family: 'Manrope, "Inter Variable", Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [600, 700, 800]
  body:
    family: 'Inter, "Inter Variable", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 64, weight: 800, lineHeight: 1.05, tracking: '-0.03em' }
    h2:    { size: 44, weight: 700, lineHeight: 1.1,  tracking: '-0.02em' }
    h3:    { size: 28, weight: 600, lineHeight: 1.25, tracking: '-0.01em' }
    body:  { size: 16, lineHeight: 1.65 }
    code:  { size: 14, family: mono, lineHeight: 1.6 }
    label: { size: 12, weight: 500, family: mono, tracking: '0.05em' }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  card: 12
  button: 20         # VitePress default action button (mid-pill)
  pill: 9999

layout:
  container: 1152
  gutter: 24
  section: 80
  grid: 12

components:
  button-primary:
    bg: '#646cff'
    color: '#ffffff'
    radius: 20
    weight: 600
    padding: '0 20px'
    height: 40
  button-secondary:
    bg: '#202127'
    color: '#ffffffdd'
    radius: 20
    border: '1px solid #3c3f44'
  card:
    bg: '#202127'
    radius: 12
    border: '1px solid #3c3f44'
  code-block:
    bg: '#161618'
    radius: 8
    family: mono
    padding: '16px 20px'
  bolt-mark:
    background: 'linear-gradient(120deg, #bd34fe 30%, #41d1ff)'
    shape: 'lightning bolt'

lineage:
  summary: |
    Vite''s site is the most successful open-source brand of the
    2020s, and it shows. The chromatic system is built around a
    single iconic gesture — the lightning-bolt mark in a `#bd34fe →
    #41d1ff` purple-to-cyan gradient — that does the same job for
    Vite that the V-prism does for Vercel: it''s the entire identity
    in one shape. The body canvas is `#1b1b1f` (the VitePress
    default-theme dark surface), text runs at ~87% white via
    `#ffffffdd`, and the brand purple `#646cff` carries every link,
    CTA fill, and inline highlight. **Manrope** handles display
    headlines (a geometric humanist sans designed by Mikhail
    Sharanda, free on Google Fonts), with **Inter** for body and
    **Fira Code** for code samples. The mid-pill 20px button radius
    is the VitePress default and shows up everywhere across the
    Vue/Nuxt/Vite ecosystem, giving the trio a shared visual
    grammar without explicit branding overlap. Where Vercel uses
    a single accent on rigorously structured layouts, Vite uses the
    gradient as a celebratory mark — it''s allowed to sing because
    it''s the only gradient on the page.
  influences:
    - name: Vue / Nuxt
      role: Shared chromatic DNA — Vite is part of the Evan You ecosystem and inherits the same dark-canvas + bright-accent register.
      url: https://vuejs.org
    - name: Vercel
      role: Single-accent dev-infra brand discipline; the V-prism / lightning-bolt as identity-in-a-shape playbook.
      url: https://vercel.com
    - name: VitePress
      role: The default-theme tokens (bg `#1b1b1f`, divider `#3c3f44`, mid-pill buttons) ARE the marketing system — eat your own dog food made literal.
      url: https://vitepress.dev
---

## Overview

Vite''s site is the open-source dev-tool brand at peak confidence.
The body canvas is the VitePress default `#1b1b1f`, headlines hit
64px at weight 800 in **Manrope** with `-0.03em` tracking, and
the iconic lightning-bolt mark — a `#bd34fe → #41d1ff` purple-to-cyan
gradient in the shape of a literal lightning bolt — does the entire
brand-identification job in a single shape.

The signature electric purple `#646cff` carries every link, CTA fill,
and inline highlight, while the cyan `#41d1ff` companion appears
inside the bolt gradient and as a secondary illustration accent.
Code samples — heavy on the page, since Vite is a build tool — use
**Fira Code** with ligatures inside `#161618` near-black blocks.
The whole system feels like the build tool decided to design itself,
and got it right on the first commit.

## Colors

- **bg** `#1b1b1f` — VitePress default canvas, near-black with slight cool tilt
- **bg-elevated** `#202127` — raised card surface
- **bg-soft** `#161618` — darker footer / code-block band
- **brand** `#646cff` — the iconic Vite electric purple
- **brand-light** `#747bff` — lighter variant for the inverse light theme
- **accent-cyan** `#41d1ff` — the lightning-bolt cyan companion
- **gradient-bolt** `linear-gradient(120deg, #bd34fe 30%, #41d1ff)` — the signature mark gradient
- **text** `#ffffffdd` — primary copy at ~87% white (VitePress default)
- **text-muted** `#ebebf599` — body paragraphs
- **border** `#3c3f44` — cool-grey divider, the VitePress default

## Typography

Display is **Manrope** at weights 600/700/800, sized 64px on a 67px
line-height (1.05) for the hero with `-0.03em` tracking. Manrope is
a humanist geometric sans designed by Mikhail Sharanda — it has
slightly more personality than Inter, which is why it carries the
celebratory headline role rather than the body.

Body is **Inter** at 400/500/600, sized 16px on a 1.65 line-height,
with text rendered at ~87% white via `#ffffffdd` (the VitePress
default opacity tier). Code uses **Fira Code** at 400 and 500 — the
ligature-aware monospace originally designed for the Atom editor
and now ubiquitous across dev-tool docs.

## Layout

A 1152px max container (the VitePress default) with 24px gutters
and 80px vertical rhythm. Cards use 12px radii, code blocks use 8px,
and buttons use the VitePress signature 20px mid-pill radius (40px
tall, fully rounded but not infinite). The 12-column grid is honoured
quietly under feature comparison tables.

## Elevation & Depth

Depth is built from cool-grey tonal layering on a near-black canvas:
`#161618` → `#1b1b1f` → `#202127` → `#252529` form a four-step ladder,
separated by the `#3c3f44` cool-grey divider. Shadows are absent;
the gradient bolt mark provides the only visual "lift" on the page.

## Shapes

Radii ladder is 4/6/8/12, with the signature 20px mid-pill button
radius that VitePress popularised across the Vue/Nuxt/Vite ecosystem.
Cards land at 12px, code blocks at 8px. The lightning bolt is the
only non-rectangular illustration shape on the page, and it earns
its visibility through that exclusivity.

## Components

The defining components are the **purple CTA** (`#646cff` fill,
white text, 20px mid-pill radius, Manrope/Inter 600), the **gradient
lightning-bolt mark** (the entire identity in one shape), and the
**Fira Code code block** (`#161618` bg, 8px radius, ligature-aware
monospace). Cards are `#202127` panels with the cool-grey hairline,
and inline code uses the soft brand surface as a highlight.

## Do''s and Don''ts

- **Do** keep the bolt gradient (`#bd34fe → #41d1ff`) as the only gradient on the page; its singularity is what makes it iconic.
- **Do** use the VitePress default tokens (`#1b1b1f` bg, `#3c3f44` border, 20px button radius) — eating your own dog food is part of the brand''s authenticity.
- **Do** render Fira Code with ligatures enabled in code samples; the brand''s audience expects ligature-aware monospace from a build-tool documentation site.
- **Don''t** apply the bolt gradient to text, buttons, or cards — it lives only in the lightning-bolt shape and occasional heading highlight.
- **Don''t** swap Manrope for Inter in headlines; Manrope''s slightly humanist geometry is what gives Vite headlines their celebratory tone.
- **Don''t** square off buttons to 4–8px radii — the 20px mid-pill is a deliberate VitePress signature that distinguishes the ecosystem from Vercel/Linear.
