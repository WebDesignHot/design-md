---
name: Qwik
tagline: Electric purple-to-blue gradient on near-black — resumable execution dressed as a lightning bolt.
author: webdesignhot
source_url: https://qwik.dev
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools]
tags: [dark, sans, structured, cool, bright, multi-theme]
preview_swatch: ['#0a0e1a', '#ac7ef4', '#18b6f6']
related: [vite, vercel, tailwindcss]
description: 'Qwik''s identity is a high-voltage gradient — `#ac7ef4` violet flowing into `#18b6f6` electric blue — set against a near-black `#0a0e1a` canvas. The lightning-bolt glyph anchors the wordmark, and Poppins (slightly geometric, slightly rounded) carries the display copy. The brand reads as kinetic infrastructure: speed-as-aesthetic, execution-as-electricity.'

colors:
  bg: '#0a0e1a'                # near-black canvas with cool tilt
  bg-soft: '#11162a'
  surface: '#1a2040'
  surface-strong: '#252b50'
  text: '#ffffff'
  text-muted: '#a8b1c2'
  text-soft: '#7a8499'
  brand: '#ac7ef4'             # Qwik violet (left of gradient)
  brand-strong: '#8b5cf0'
  accent: '#18b6f6'             # Qwik electric blue (right of gradient)
  accent-strong: '#0a9ad9'
  gradient-from: '#ac7ef4'
  gradient-to: '#18b6f6'
  glow: '#ac7ef466'            # 40% alpha purple halo
  border: '#ffffff14'
  border-strong: '#ffffff26'
  on-brand: '#ffffff'

typography:
  display:
    family: 'Poppins, Inter, -apple-system, "system-ui", sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Inter, -apple-system, "system-ui", "Segoe UI", sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "Fira Code", ui-monospace, Menlo, monospace'
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
  md: 10
  lg: 14
  card: 16
  pill: 9999

layout:
  container: 1280
  gutter: 24
  section-padding: 96
  grid: 12

components:
  button-primary:
    bg: 'linear-gradient(90deg, #ac7ef4, #18b6f6)'
    color: '#ffffff'
    radius: 10
    weight: 600
  button-ghost:
    bg: 'transparent'
    color: '#ffffff'
    border: '1px solid #ffffff26'
    radius: 10
  card:
    bg: '#1a2040'
    border: '1px solid #ffffff14'
    radius: 16
  code-block:
    bg: '#11162a'
    radius: 12
    font: mono

lineage:
  summary: |
    Qwik's design language is built around a single gradient with a
    very specific emotional shape: violet `#ac7ef4` on the left,
    electric blue `#18b6f6` on the right, sweeping diagonally across
    the lightning-bolt wordmark glyph. That gradient is the brand —
    used on the wordmark, on primary CTAs, on key feature illustrations,
    and as a soft 40%-alpha halo behind hero copy. The canvas is a
    cool near-black `#0a0e1a`, slightly bluer than Astro's cosmos
    navy, and softer than Solid's technical navy. Type pairs **Poppins**
    (geometric-rounded, with broad x-height) for display with **Inter**
    for body, giving the marketing a slightly playful, kinetic register
    distinct from the Geist-Inter monoculture. The lightning-bolt
    glyph echoes through small UI elements: chevron icons get a slight
    angular kink, section dividers stagger like waveforms. Where Astro
    feels cosmic and Solid feels infrastructural, Qwik feels **kinetic**
    — the design language sells "instant" and "resumable" by visually
    behaving like a charging arc.
  influences:
    - name: Stripe
      role: Diagonal-gradient hero treatment as primary brand surface.
      url: https://stripe.com
    - name: Linear
      role: Brand-tinted halo behind hero copy as a depth strategy.
      url: https://linear.app
    - name: Vercel
      role: Dark-canvas dev-tool template with single dominant gradient accent.
      url: https://vercel.com
---

## Overview

Qwik's marketing site is wired for kinetic energy. The canvas is a
cool near-black `#0a0e1a`, and the brand expresses itself almost
entirely through a single diagonal gradient — `#ac7ef4` violet
flowing into `#18b6f6` electric blue, the same sweep that lives in
the lightning-bolt wordmark. That gradient appears on the primary
CTA, on key feature graphics, and as a soft halo (`#ac7ef466`) blurred
behind hero copy.

Type pairs **Poppins** (display) with **Inter** (body) — Poppins is
geometric-rounded with a broader x-height than Inter, lending the
marketing a slightly playful kinetic register. Where Solid sells
itself as infrastructure and Astro sells itself as content-first,
Qwik sells **speed-as-aesthetic**, and the violet-to-blue arc is the
literal visual analog of "execution as electricity."

## Colors

- **bg** `#0a0e1a` — cool near-black, the canvas
- **bg-soft** `#11162a` — secondary panel, code-block surface
- **surface** `#1a2040` — card lift
- **text** `#ffffff` — primary copy, full strength
- **text-muted** `#a8b1c2` — secondary copy
- **brand** `#ac7ef4` — Qwik violet, left endpoint of the gradient
- **accent** `#18b6f6` — electric blue, right endpoint
- **gradient** `#ac7ef4 → #18b6f6` — the brand's defining sweep
- **glow** `#ac7ef466` — 40% alpha purple halo behind hero copy
- **border** `#ffffff14` — 8% white hairline

## Typography

Display is **Poppins** at weights 600 and 700. H1 sits at 72px with
`-0.02em` tracking and 1.05 line-height. Poppins's rounded geometric
character — wider counters, broader x-height than Inter — gives the
marketing a kinetic, slightly playful tone. The choice is deliberate:
Poppins reads less Silicon-Valley than Geist, more "we are excited
about this" than "we are serious infrastructure."

Body type is **Inter** at 16px on a 1.6 line-height. Code surfaces
use **JetBrains Mono** at 14px on the `#11162a` panel — the dev-
tool default, foregrounded as a brand surface.

## Layout

Container caps at 1280px with 24px gutters; sections at 96px vertical.
The grid is 12-column with frequent diagonal-element layouts — feature
cards offset slightly, gradient bars sweeping at angles — that
visually echo the lightning-bolt geometry.

## Elevation & Depth

Depth is achieved through **tonal-blue layering plus a brand-tinted
halo**. Cards lift from `#0a0e1a` to `#1a2040`; hover brightens to
`#252b50`. The signature depth move is the **violet halo**
(`#ac7ef466`, 40% alpha, heavily blurred) that bleeds behind hero
text and primary CTAs, mimicking the corona of a charging arc.
Borders are uniform 8% white hairlines; shadows are absent.

## Shapes

Radius ladder is 4 / 6 / 10 / 14 / 16, with pills at 9999. Buttons
land at 10px (slightly more rounded than Astro's 8px), cards at
16px. The lightning-bolt geometry — sharp angular kinks — echoes
through chevron icons, section dividers, and the wordmark itself.

## Components

The defining components are the **gradient button** (violet-to-blue
linear sweep, 10px radius, white text at weight 600), the **violet-
haloed hero card** (soft purple bleed behind copy), the **lightning-
bolt wordmark** (the brand's primary glyph, used at multiple scales),
and the **dark code block** with JetBrains Mono on `#11162a`. Cards
are tonal panels with 8% white hairlines; navigation is a slim,
near-transparent bar that lets the gradient dominate.

## Do's and Don'ts

- **Do** lean on the violet-to-blue gradient as the primary brand surface — wordmark, CTA, hero halo. Single accent, no pairing with other hues.
- **Do** use Poppins for display. Its rounded geometric character is what gives Qwik its kinetic personality, distinct from Inter-led peers.
- **Do** apply the soft purple halo (`#ac7ef466` blurred) behind hero copy — it's the brand's depth and energy signal.
- **Don't** flatten the gradient to a single color. Both endpoints — the violet and the blue — must appear together; either alone reads as Astro or Solid.
- **Don't** lighten the canvas to pure navy. The exact `#0a0e1a` cool near-black is what holds the gradient's brightness.
- **Don't** mix in green or warm accents. Qwik's chromatic surface is exclusively cool — purple-violet to electric blue, no exceptions.
