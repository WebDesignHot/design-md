---
name: Sentry
tagline: Deep-purple observability for developers — Rubik body, Dammit Sans display, JetBrains Mono code, and a single confident violet that says "your error report just landed."
author: webdesignhot
source_url: https://sentry.io
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, structured, sans, mono, cool, bright]
preview_swatch: ['#1f1633', '#7553ff', '#ffffff']
related: [vercel, linear, posthog]
description: 'Sentry''s marketing site is a dark-violet developer cathedral. The body bg is `#1f1633` (a deep aubergine plum, not a true black), Rubik handles UI text, the custom Dammit Sans does the headline shouting at 88px/700, and JetBrains Mono carries every code sample. The signature `#7553ff` purple appears as link colour, illustration accent, and product-stamp — a confident single-hue brand discipline borrowed from Stripe, but pitched at error-report violet instead of trust blue.'

colors:
  bg: '#1f1633'                # observed body background, deep aubergine
  bg-elevated: '#2b1b3d'       # raised card surface inside hero zones
  bg-soft: '#0f0c1a'           # darker footer / code-block bands
  surface: '#181225'           # secondary surface panels
  text: '#ffffff'              # primary copy on dark canvas
  text-muted: '#c8c5d8'        # secondary copy / body paragraphs
  text-soft: '#9b97ad'         # captions, metadata, footer links
  brand: '#7553ff'             # Sentry signature violet — link, accent, stamp
  brand-hover: '#6240e8'       # pressed state, slightly deeper violet
  brand-soft: '#36265c'        # tinted brand surface for callouts
  accent-pink: '#ff70bc'       # secondary illustration accent (error pink)
  accent-yellow: '#fdb81b'     # warning / highlight in dashboard mocks
  accent-blue: '#63b3ed'       # documentation link colour
  on-brand: '#ffffff'
  border: '#ffffff14'          # ~8% white hairline on dark surfaces
  border-soft: '#ffffff0a'     # softer divider for code blocks
  cta-bg: '#efefef'            # near-white "Try Sentry Free" pill
  cta-fg: '#1a1a1a'            # dark text on light pill

typography:
  display:
    family: '"Dammit Sans", Rubik, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [500, 700]
  body:
    family: 'Rubik, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 88, weight: 700, lineHeight: 1.2,  tracking: 'normal' }   # observed 88/105.6
    h2:    { size: 56, weight: 700, lineHeight: 1.1,  tracking: '-0.01em' }
    h3:    { size: 32, weight: 600, lineHeight: 1.25, tracking: '0' }
    body:  { size: 16, lineHeight: 1.6 }
    code:  { size: 14, family: mono, lineHeight: 1.55 }
    label: { size: 12, weight: 500, family: mono, tracking: '0.05em' }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  card: 16
  button: 9999      # observed pill buttons (border-radius: 9999px)
  pill: 9999

layout:
  container: 1280
  gutter: 24
  section: 96       # vertical rhythm between hero/feature blocks
  grid: 12

components:
  button-primary:
    bg: '#efefef'
    color: '#1a1a1a'
    radius: 9999
    weight: 500
    padding: '12px 20px'
  button-brand:
    bg: '#7553ff'
    color: '#ffffff'
    radius: 9999
  card:
    bg: '#2b1b3d'
    radius: 16
    border: '1px solid #ffffff14'
  code-block:
    bg: '#0f0c1a'
    radius: 12
    family: mono
    padding: '16px 20px'

lineage:
  summary: |
    Sentry's site is what happens when a developer-tooling brand
    decides not to be a flat-black terminal. The body canvas is a
    deep aubergine `#1f1633` — warm enough to feel handmade, dark
    enough to function as a focus surface for screenshots and
    illustration. The signature `#7553ff` violet operates as a
    single-hue brand axis (link colour, accent, stamp), exactly the
    way Stripe uses its blue, but pitched into the violet end of
    the spectrum where almost no infra brand lives. Type pairs the
    custom **Dammit Sans** display with **Rubik** for body — Rubik
    is the same humanist geometric used by Mailchimp and Webflow,
    giving the marketing copy a friendly, slightly rounded warmth
    that contrasts with the Linear-style coolness of most observability
    competitors. Code samples use **JetBrains Mono**, the standard
    JetBrains/IntelliJ monospace, which is a quiet credibility move:
    Sentry's audience already lives inside JetBrains IDEs. Pill buttons
    (`border-radius: 9999px`) round off the developer-edginess and pull
    the system toward consumer-app friendliness — a deliberate softening
    against the brutalism of `posthog` and the structural rigour of
    `linear`. The result is observability that feels less like a SOC
    dashboard and more like a record label.
  influences:
    - name: Stripe
      role: Single-hue brand discipline (one confident colour does all the heavy lifting).
      url: https://stripe.com
    - name: JetBrains
      role: JetBrains Mono and the developer-IDE chromatic register (warm darks, syntax violets).
      url: https://www.jetbrains.com
    - name: Mailchimp
      role: Rubik humanist sans paired with quirky display typography for a friendlier tech voice.
      url: https://mailchimp.com
---

## Overview

Sentry's marketing surface is a deep-violet observability cathedral.
The body bg sits at `#1f1633` — a warm aubergine that registers as
"intentional darkness" rather than terminal-black. Headlines hit 88px
at weight 700 in the custom **Dammit Sans**, a chunky display face that
gives the site its bulletin-board energy ("Code breaks, fix it faster").
Beneath the display, Rubik carries the body copy in a humanist register
that pulls away from the Inter-everywhere monoculture, and JetBrains
Mono handles every code sample, error trace, and dashboard label.

The signature gesture is a single confident violet — `#7553ff` —
that operates as link colour, accent stamp, and brand identifier all
at once. Where Datadog uses purple as a logo-mark, Sentry uses purple
as a wayfinding system: every interactive surface eventually resolves
to this hue.

## Colors

- **bg** `#1f1633` — the deep aubergine canvas, warm not cool
- **bg-elevated** `#2b1b3d` — raised card surface inside hero zones
- **bg-soft** `#0f0c1a` — code-block and footer near-black
- **brand** `#7553ff` — the signature violet, link colour, accent stamp
- **brand-hover** `#6240e8` — pressed state, slightly deeper
- **accent-pink** `#ff70bc` — secondary illustration colour (error chips)
- **accent-yellow** `#fdb81b` — warning / chart highlight
- **text** `#ffffff` — primary copy on dark canvas
- **text-muted** `#c8c5d8` — body paragraphs, slightly tinted with violet
- **cta-bg** `#efefef` — the near-white pill CTA, intentionally generic
- **border** `#ffffff14` — ~8% white hairline divider

## Typography

Display is **Dammit Sans**, a custom geometric display weighted at 700
and sized 88px on a 105.6px line-height (1.2 ratio) for the homepage
hero. The face has a slightly chunky, almost cartoon-confident
character — it's what gives Sentry's marketing its "you can fix this"
energy.

Body and UI are **Rubik** at 400/500/600, a humanist geometric originally
designed for Hebrew/Latin pairing. Rubik gives Sentry warmth that Inter
and Söhne don't — body copy reads as approachable rather than systemic.

Code is universally **JetBrains Mono** at 400 and 500, sized 14px on
a 1.55 line-height. Choosing JetBrains Mono is a quiet credibility
signal: Sentry's audience opens IntelliJ, PyCharm, and WebStorm every
morning, and they already see this typeface daily. Labels and small
caps borrow the same mono at 12px with `0.05em` tracking.

## Layout

A 1280px max container with 24px gutters, sectioned in 96px vertical
rhythm between hero/feature/customer-logo bands. Cards use 16px radii,
buttons use full pill (`9999px`), and the 12-column grid is honoured
quietly under feature comparison tables. Hero zones are tall (often
720px+) to give the deep aubergine room to breathe.

## Elevation & Depth

Depth is handled by tonal stacking on the violet axis: `#0f0c1a` →
`#1f1633` → `#2b1b3d` form a three-step ladder, with an 8% white
hairline (`#ffffff14`) separating raised surfaces. There are almost
no shadows — the colour-temperature shift between layers is what
creates the depth. Code blocks drop to the darkest tier, hero
illustrations float on the elevated tier.

## Shapes

Radii ladder is 4/6/8/12/16, with `9999px` pill reserved for every
button. The pill-button discipline is the most visually distinctive
shape decision: it pulls Sentry away from the "8px square button"
default of Linear/Vercel and signals a more consumer-friendly,
illustration-rich product personality.

## Components

The defining components are the **pill CTA** (`#efefef` background,
`#1a1a1a` text, 9999px radius, 500 weight Rubik), the **violet
brand-pill** (`#7553ff`, white text, same shape), and the **JetBrains
Mono code block** with the deepest `#0f0c1a` background. Cards are
elevated `#2b1b3d` panels with 16px radii and an 8% white hairline.
Navigation is a quiet bar that lets the deep purple canvas dominate.

## Do's and Don'ts

- **Do** keep the violet `#7553ff` as the only brand-axis colour; secondary accents (pink, yellow) are illustration-only, never structural.
- **Do** use JetBrains Mono for every code sample, error trace, and dashboard label — it's the typographic stamp that ties Sentry to the JetBrains IDE lineage.
- **Do** stack three violet-tonal layers (`#0f0c1a` → `#1f1633` → `#2b1b3d`) for depth instead of reaching for shadows.
- **Don't** flatten the body bg to pure black `#000` — the warm aubergine is what gives Sentry its handmade character.
- **Don't** swap pill buttons for square 8px-radius buttons; the full pill is the brand's friendliness signal.
- **Don't** mix Rubik with Inter or Söhne in the same module — Rubik's humanist warmth is intentional contrast against the systemic-sans observability competition.
