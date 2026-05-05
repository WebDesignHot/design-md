---
name: Nuxt
tagline: Forest-green `#00dc82` glow on a near-black canvas — Vue-flavored warmth dressed for the cosmos.
author: webdesignhot
source_url: https://nuxt.com
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools]
tags: [dark, sans, structured, cool, multi-theme]
preview_swatch: ['#020420', '#00dc82', '#ffffff']
related: [vercel, vite, tailwindcss]
description: 'Nuxt''s site lives on a near-black `#020420` canvas — slightly cooler and bluer than pure black — with the signature `#00dc82` Vue-derived green doing all of the chromatic heavy lifting. Inter and DM Sans handle the type, the wordmark hex glyph anchors the upper-left, and a soft green glow leaks behind hero copy as a brand-tinted halo.'

colors:
  bg: '#020420'                # near-black canvas, slight blue tilt
  bg-soft: '#0a0d2a'           # secondary panel
  surface: '#10142e'           # card lift
  surface-strong: '#1a1f42'
  text: '#ffffff'              # primary, used full-strength on dark
  text-muted: '#a0a8b8'        # secondary copy
  text-soft: '#6c7384'
  brand: '#00dc82'             # Nuxt green (Vue-derived)
  brand-hover: '#00b86a'
  brand-soft: '#003b22'        # deep tinted bg for callouts
  accent: '#80eeb4'            # lighter green for hover/highlight
  glow: '#00dc8266'            # 40% alpha green halo behind hero
  border: '#ffffff14'
  border-strong: '#ffffff26'
  on-brand: '#020420'          # dark text on green button
  warning: '#fbbf24'

typography:
  display:
    family: '"DM Sans", Inter, -apple-system, "system-ui", sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Inter, -apple-system, "system-ui", "Segoe UI", sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"DM Mono", ui-monospace, "JetBrains Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 72, weight: 700, lineHeight: 1.05, tracking: '-0.02em' }
    h2:    { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.015em' }
    h3:    { size: 28, weight: 600, lineHeight: 1.25, tracking: '-0.005em' }
    body:  { size: 16, lineHeight: 1.6 }
    small: { size: 14, lineHeight: 1.5 }
    code:  { size: 14, family: mono, lineHeight: 1.6 }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  card: 16
  pill: 9999

layout:
  container: 1280
  gutter: 24
  section-padding: 96
  grid: 12

components:
  button-primary:
    bg: '#00dc82'
    color: '#020420'
    radius: 8
    weight: 600
  button-ghost:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #ffffff26'
    radius: 8
  card:
    bg: '#10142e'
    border: '1px solid #ffffff14'
    radius: 16
  code-block:
    bg: '#0a0d2a'
    radius: 12
    font: mono

lineage:
  summary: |
    Nuxt's design language is a deliberate dark-mode reinterpretation
    of the Vue identity. The brand color — `#00dc82`, a saturated
    forest-green — comes directly from Vue's `#42b883` lineage but
    has been pulled cooler and brighter for digital surfaces. The
    canvas is a deep blue-black at `#020420` (cooler than Astro's
    cosmos navy, warmer than Linear's true black), and the green
    appears as both the primary CTA and as a soft 40%-alpha glow
    behind hero copy. The typography pair — **DM Sans** for display,
    **Inter** for body — gives the marketing a slightly geometric,
    Eurostile-flavored register, distinct from the Geist-Inter
    monoculture of most dev-tool sites. The hex-shaped wordmark glyph
    is treated as an icon-token, repeated at multiple scales. Where
    Astro uses violet-to-orange gradients and Svelte uses pure white
    discipline, Nuxt uses **single-accent green-on-blue-black** —
    a palette closer to a developer terminal than a marketing page,
    which suits a framework that sells itself on developer ergonomics.
  influences:
    - name: Vue.js
      role: Direct lineage — the Nuxt green is a brighter, cooler cut of Vue's `#42b883`.
      url: https://vuejs.org
    - name: Vercel
      role: Dark-canvas dev-tool template; near-black bg with a single brand accent.
      url: https://vercel.com
    - name: Linear
      role: Soft brand-tinted halo behind hero copy as a depth strategy.
      url: https://linear.app
---

## Overview

Nuxt's marketing site reads as Vue's identity grown up and moved to
a darker neighborhood. The canvas runs to `#020420` — a deep,
slightly-blue near-black — and the brand color is the unmistakable
`#00dc82` green that traces directly back to Vue's `#42b883`, pulled
cooler and brighter for the dark canvas. That green appears as the
primary CTA fill, as a soft halo behind hero copy, and as the
accent on the hex-shaped Nuxt glyph in the upper-left corner.

The type pairing is **DM Sans** for display and **Inter** for body —
DM Sans is more geometric than Inter, with rounder counters, and
that geometric quality reads as engineered. Code surfaces sit on
`#0a0d2a` panels using DM Mono, completing a typographic family
rather than mixing brands.

## Colors

- **bg** `#020420` — near-black canvas, slight cool blue tilt
- **bg-soft** `#0a0d2a` — secondary panels and code blocks
- **surface** `#10142e` — card lift, one step above bg
- **text** `#ffffff` — primary copy, full-strength on dark
- **text-muted** `#a0a8b8` — secondary copy, nav links
- **brand** `#00dc82` — the Nuxt green, primary action color
- **brand-soft** `#003b22` — deep tinted background for accent callouts
- **glow** `#00dc8266` — 40% alpha green halo behind hero copy
- **border** `#ffffff14` — 8% white hairline
- **on-brand** `#020420` — dark text on the green button (high contrast)

## Typography

Display is **DM Sans** by ColorFonts/Google at weights 600 and 700.
H1 sits at 72px with 1.05 line-height and `-0.02em` tracking; DM
Sans's slightly geometric character — rounder counters, broader x-
height than Inter — gives the marketing a register distinct from
Vercel-Geist monoculture.

Body type is **Inter** at 16px on a 1.6 line-height. The pairing is
deliberate: DM Sans for the headlines, Inter for everything denser
than a pull-quote. Code surfaces use **DM Mono** at 14px, keeping
the typographic family unified.

## Layout

Container caps at 1280px with 24px gutters; sections breathe at 96px
vertical. The grid is 12-column with frequent 8/4 splits for feature
+ screenshot layouts. The hex-shaped Nuxt glyph in the wordmark
echoes through small UI iconography — angular, six-sided geometric
hints in dividers and section markers.

## Elevation & Depth

Depth comes from **tonal-blue layering** plus a brand-tinted halo.
Cards sit at `#10142e`, one step above the `#020420` canvas; hover
lifts to `#1a1f42`. The signature depth move is the **green glow**
(`#00dc8266`, 40% alpha) blurred behind hero copy and key feature
blocks — it bleeds Nuxt-green into the surrounding negative space
without ever rendering as a hard accent. Borders are uniform 8%
white hairlines.

## Shapes

Radius ladder is 4 / 6 / 8 / 12 / 16, with pills at 9999. Buttons
land at 8px, cards at 16px. The hex-glyph geometry of the Nuxt
wordmark shows up in subtle places — chevrons, section dividers,
icon-frames — giving the system an angular accent against the
otherwise soft rounding.

## Components

The defining components are the **solid green button** (`#00dc82`
fill, `#020420` text, 8px radius — high-contrast and unmistakable),
the **green-haloed hero card** (soft `#00dc8266` blur behind copy),
the **dark code block** with DM Mono on `#0a0d2a`, and the **hex-
glyph badge** that anchors the upper-left of the navigation. Cards
are tonal-blue panels at `#10142e` with 8% white hairlines — never
shadowed, always tonal-and-bordered.

## Do's and Don'ts

- **Do** treat the green (`#00dc82`) as the single brand color; pair it only with the deep blue-black canvas, never with a second accent.
- **Do** use the green-glow halo behind hero copy — the 40% alpha bleed is Nuxt's signature depth move and distinguishes it from Vercel.
- **Do** keep the typographic family unified: DM Sans / Inter / DM Mono. Mixing in Geist or JetBrains breaks the geometric register.
- **Don't** lighten the canvas to pure black or pure navy. The exact `#020420` blue undertone is what separates Nuxt from Linear and Astro.
- **Don't** apply Nuxt-green to large fills. Reserve it for the CTA, the wordmark hex, and the soft halo; full-bleed green flattens the page.
- **Don't** mix in Vue's `#42b883` directly. Nuxt's green is brighter and cooler — using Vue's exact green muddles the brand lineage.
