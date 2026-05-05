---
name: Rive
tagline: Chunky animated display type and saturated playful colour — interactive graphics platform that wears its motion design on its sleeve.
author: webdesignhot
source_url: https://rive.app
spec: design.md/v1
quality: curated
featured: false
categories: [design-tools, dev-tools]
tags: [light, playful, sans, bright, organic, structured]
preview_swatch: ['#fdfcf8', '#1d1d1b', '#ff5b37']
related: [figma, framer, tldraw]
description: 'Rive is a runtime for interactive graphics, and the marketing site treats motion as the primary brand asset. The canvas is a warm off-white (`#fdfcf8`), the display is a chunky high-x-height geometric sans set at extreme scale (140px+), and saturated accent hues — coral `#ff5b37`, mustard `#fcc24c`, and electric blue `#3a7bff` — appear as moving Rive animations rather than static fills. Type lockups frequently animate in place, weight-shifting from light to black mid-headline.'

colors:
  bg: '#fdfcf8'
  bg-strong: '#f5f3ec'
  surface: '#ffffff'
  text: '#1d1d1b'
  text-strong: '#000000'
  text-muted: '#1d1d1b99'
  text-soft: '#1d1d1b66'
  brand: '#ff5b37'
  brand-hover: '#e54a2a'
  accent-yellow: '#fcc24c'
  accent-blue: '#3a7bff'
  accent-pink: '#ff6da6'
  accent-green: '#4cc38a'
  border: '#1d1d1b1a'
  on-brand: '#ffffff'

typography:
  display:
    family: '"Inter Display", "Inter", -apple-system, "system-ui", sans-serif'
    weights: [400, 600, 800, 900]
  body:
    family: '"Inter", -apple-system, "system-ui", sans-serif'
    weights: [400, 500]
  mono:
    family: '"JetBrains Mono", "Fira Code", ui-monospace, Menlo, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 140, weight: 800, lineHeight: 0.95, tracking: '-0.04em' }
    h2:    { size: 72,  weight: 700, lineHeight: 1.0,  tracking: '-0.03em' }
    h3:    { size: 32,  weight: 600, lineHeight: 1.2,  tracking: '-0.01em' }
    body:  { size: 17, lineHeight: 1.5 }
    label: { size: 12, weight: 500, family: mono }

radius:
  sm: 8
  md: 12
  lg: 16
  card: 20
  button: 9999
  pill: 9999

components:
  button-primary:
    backgroundColor: text
    textColor: on-brand
    rounded: button
    use: 'near-black pill — primary CTA, occasionally with animated arrow'
  button-secondary:
    backgroundColor: transparent
    textColor: text
    border: text
    rounded: button
  card:
    backgroundColor: surface
    border: border
    rounded: card
    use: 'demo card — frequently contains an embedded Rive animation'
  badge:
    backgroundColor: bg-strong
    textColor: text
    rounded: pill

lineage:
  summary: |
    Rive's marketing surface is the rare landing page where motion is
    the primary type-setting tool. Headlines weight-shift from 400 to
    900 mid-render, characters bounce on hover, and embedded Rive
    runtimes drive almost every illustration on the page. The canvas
    is a deliberately warm off-white (`#fdfcf8`) that nods to print
    rather than screen, and the four-colour accent palette — coral,
    mustard, electric blue, pink-coral — appears almost exclusively
    inside animated assets, never as static fills behind type. The
    chunky InterDisplay 800/900 at 140px is the static record of what
    is, on the live page, an animated lockup. Visually the brand
    sits between Linear's discipline (single accent per surface,
    quiet container chrome) and the playful cartoon energy of brands
    like Tldraw or Excalidraw — but Rive earns the playfulness by
    actually making it interactive.
  influences:
    - name: Tldraw / Excalidraw
      role: Permission to be playful in a developer-tools landing page; chunky display type and saturated accent palette.
      url: https://tldraw.com
    - name: Linear
      role: Quiet container chrome and tonal restraint outside the animated lockups.
      url: https://linear.app
    - name: Animation / motion-design tradition
      role: The entire layout assumes motion is content — a stance borrowed from After Effects-era brand systems.
      url: https://lottiefiles.com
---

## Overview

Rive sells a runtime for interactive graphics, and rather than
explain that with marketing copy, the homepage simply *is* the
demonstration. Almost every visual asset on the page is an embedded
Rive file: characters that wave when you scroll past them, headlines
that weight-shift from 400 to 900 in place, and toggle states that
animate between rendered frames.

The static record of all this is a chunky **InterDisplay 800** at
140px with `-0.04em` tracking on a warm off-white canvas. Body type
steps down to standard Inter at 17/24. The accent palette — coral,
mustard, electric blue, pink — is reserved almost entirely for
animated assets, leaving the type-setting surface itself unusually
restrained.

## Colors

- **bg** `#fdfcf8` — warm off-white, nods to print
- **bg-strong** `#f5f3ec` — slightly deeper neutral band
- **text** `#1d1d1b` — near-black with warm undertone
- **brand** `#ff5b37` — coral, the primary accent
- **accent-yellow** `#fcc24c` — mustard, used in animations
- **accent-blue** `#3a7bff` — electric blue, motion accent
- **border** `#1d1d1b1a` — 10% near-black hairline

The palette is wider than typical dev-tools brands, but the discipline
holds: the four accent hues live inside animated illustrations,
never under static type.

## Typography

Display is **InterDisplay** at 800/900 weight, sized up to 140px on
the homepage hero with a tight `-0.04em` track and a 0.95 line-height
that lets headlines stack on top of themselves. The trick is that
many headlines actually animate weight in place — rendering as 400
on entry and morphing to 800 — which the static type system has to
accommodate by sharing the same family across the full weight axis.

Body steps down to **Inter 400/500** at 17px on a 24px line. Mono
appears in JetBrains Mono for code samples and runtime parameters.

## Layout

The grid is loose and editorial, with hero blocks claiming the full
viewport width and headlines breaking across multiple lines as a
deliberate compositional choice. Sections often feature a single
oversized animated character anchoring the right column with display
type running across the left.

## Elevation & Depth

Depth is animated rather than shadowed — characters cast soft
contact shadows that update with their movement, but static cards
stay flat. The card system uses a 10% near-black hairline and a
20px radius, never a drop-shadow.

## Shapes

Radii are generous: cards sit at 20px, buttons go to full pill
(9999px), and embedded Rive animation containers often go larger
still (24–32px) to soften the boundary between motion and page.

## Components

The defining components are the **animated character lockup** (a
Rive file embedded full-bleed in the hero), the **near-black pill
CTA** (`#1d1d1b` on white, 9999px radius), and the **demo card**
which wraps an embedded interactive Rive scene with a 20px radius
and a hairline border. The navigation is a quiet top bar — all the
visual energy is reserved for the hero animations.

## Do's and Don'ts

- **Do** make motion a primary asset; static screenshots and renders should be the exception, not the rule.
- **Do** use the warm off-white canvas (`#fdfcf8`) rather than pure white — it grounds the saturated animated accents.
- **Do** hold static type to a quiet pairing (near-black on cream); the colour energy belongs inside the Rive files.
- **Don't** apply the coral or mustard accents to static buttons — those hues live inside animations only.
- **Don't** crowd the hero with multiple animated assets; one oversized character per viewport is the discipline.
- **Don't** drop the chunky 800-weight display in favour of a standard 600 — the weight is what carries the playful confidence.
