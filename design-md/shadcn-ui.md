---
name: shadcn/ui
tagline: Copy-paste components in pure black-on-white — the most influential design system not actually shipped as a library.
author: webdesignhot
source_url: https://ui.shadcn.com
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools, design-tools]
tags: [light, dark, minimal, mono, sans, structured, multi-theme, cool]
preview_swatch: ['#ffffff', '#000000', '#0a0a0a']
related: [vercel, tailwindcss, framer]
description: 'shadcn/ui''s site is the visual argument for its design philosophy: pure black-on-white minimalism, Geist Sans for everything except code, JetBrains/Geist Mono for code, and components rendered as themselves. There''s no marketing chrome, no gradients, no illustration — the page is a documentation surface that doubles as the most-referenced component library of the 2020s.'

colors:
  bg: '#ffffff'                # canvas — light theme default
  bg-dark: '#0a0a0a'           # dark theme canvas (near-black, not pure)
  surface: '#fafafa'           # muted background
  surface-strong: '#f4f4f5'    # accent / hover
  surface-dark: '#0a0a0a'      # dark canvas
  surface-dark-elevated: '#171717'   # dark muted
  text: '#0a0a0a'              # primary body — near-black
  text-strong: '#000000'       # display copy
  text-muted: '#71717a'        # zinc-500, the iconic muted-fg
  text-on-dark: '#fafafa'
  brand: '#0a0a0a'             # primary action — near-black solid button
  brand-hover: '#1a1a1a'
  brand-on-dark: '#fafafa'     # inverted on dark theme — light button on dark canvas
  destructive: '#ef4444'       # red-500
  border: '#e4e4e7'            # zinc-200 — the hairline
  border-soft: '#f4f4f5'       # zinc-100
  input-border: '#e4e4e7'
  on-brand: '#fafafa'          # near-white text on the black button

typography:
  display:
    family: '"Geist", "Geist Sans", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: '"Geist", "Geist Sans", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500]
  mono:
    family: '"Geist Mono", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 56, weight: 600, lineHeight: 1.05, tracking: '-0.025em' }
    h2:    { size: 32, weight: 600, lineHeight: 1.15, tracking: '-0.015em' }
    h3:    { size: 20, weight: 600, lineHeight: 1.3,  tracking: '-0.005em' }
    body:  { size: 16, lineHeight: 1.6 }
    code:  { size: 13.6, family: mono, lineHeight: 1.55 }    # 0.85rem
    label: { size: 14, weight: 500 }

radius:
  xs: 2
  sm: 4
  md: 6           # --radius default
  lg: 8
  card: 8         # the famous 0.5rem card
  xl: 12
  button: 6
  pill: 9999

layout:
  container: 1400
  gutter: 24
  rhythm: 4

components:
  button-primary: 'Solid `#0a0a0a` near-black on white, `#fafafa` text, 6px radius, 500 weight Geist, 8–10px vertical padding. Inverts on dark theme.'
  button-secondary: 'Outlined — 1px `#e4e4e7` border on white, near-black text, identical 6px radius.'
  button-ghost: 'No fill, no border, hovers to `#f4f4f5` — used for icon buttons and secondary actions in toolbars.'
  card: '`#ffffff` panel with `#e4e4e7` 1px border, 8px radius (the default `--radius` of 0.5rem). No shadow.'
  input: '40px tall, 6px radius, `#e4e4e7` border, focuses to a 2px ring of `#0a0a0a`.'
  badge: 'Tiny pill, mono or sans, `#f4f4f5` background or solid black — the most-copied component in the library.'
  code-block: 'Geist Mono on `#fafafa` (light) or `#171717` (dark), with the standard shiki/Tailwind syntax theme.'

lineage:
  summary: |
    shadcn/ui is the most influential design-system project of the
    2020s, and its marketing surface is the argument for its
    philosophy: components live in your codebase as code, styled with
    Tailwind, themed with CSS variables, copied not installed. The
    site is built on Next.js and uses its own components throughout —
    the entire page *is* the demo. Chromatically the whole system is
    near-monochrome: a pure white canvas (or `#0a0a0a` near-black in
    dark theme), with the zinc family (`#fafafa` → `#71717a` →
    `#0a0a0a`) supplying every neutral. The action colour is a near-
    black solid button that inverts in dark mode; there is no brand
    accent, no gradient, no chromatic identity beyond *the absence of
    a chromatic identity*. The type system is **Geist** (Vercel''s
    family) for sans, and **Geist Mono** for code, which ties the
    library visually to the Vercel ecosystem where it most often
    runs. The famous `--radius: 0.5rem` (8px) card and 6px button
    radii became the default look of New Web Software circa 2023–
    2025 — copied so widely that "looks like shadcn" is now its own
    aesthetic category. The lineage runs through Radix UI''s
    accessibility primitives (which shadcn wraps), Tailwind''s
    utility philosophy, and Vercel''s monochromatic discipline.
  influences:
    - name: Radix UI
      role: Provides the accessibility primitives shadcn wraps — the components are technically Radix + Tailwind.
      url: https://www.radix-ui.com
    - name: Tailwind CSS
      role: The styling layer and the zinc / neutral colour scales that supply shadcn''s entire palette.
      url: https://tailwindcss.com
    - name: Vercel / Geist
      role: Provides the typeface (Geist Sans + Mono) and the monochromatic discipline shadcn extends.
      url: https://vercel.com/font
---

## Overview

shadcn/ui's site is the most accurate possible advertisement for its
philosophy: it *is* the components. Every button, card, input, and
badge on the page is rendered with the same source you would copy
into your own codebase. The chromatic posture is aggressively
monochromatic — pure white `#ffffff` canvas, pure near-black
`#0a0a0a` for primary action, and the zinc neutral family supplying
every grey. The dark theme inverts the canvas to `#0a0a0a` and the
button to `#fafafa`, with no other adjustment.

There is no marketing band, no hero illustration, no gradient. The
page reads as documentation that happens to be beautifully typeset,
which is precisely the strategic message: *if you copy these
components, your app will look like this — calm, monochromatic,
professional.*

## Colors

- **bg** `#ffffff` — light-theme canvas
- **bg-dark** `#0a0a0a` — dark-theme canvas (near-black, never pure)
- **surface** `#fafafa` — muted background, used for code blocks and table headers
- **surface-strong** `#f4f4f5` — hover and accent surfaces
- **text-strong** `#000000` — display copy at full black
- **text** `#0a0a0a` — primary body, near-black for slight softness
- **text-muted** `#71717a` — zinc-500, the iconic muted foreground
- **brand** `#0a0a0a` — primary action, near-black solid button
- **destructive** `#ef4444` — red-500, used only for destructive actions
- **border** `#e4e4e7` — zinc-200, the hairline rule across the entire system

## Typography

The display is **Geist** (Vercel's commissioned family) at 600 weight,
sized 56px with a `-0.025em` tracking. Geist Sans's slightly
geometric letterforms with humanist details keep large headlines
calm rather than aggressive — exactly the posture shadcn projects.

Body type is the same Geist at 400/500, sized 16px on a generous 1.6
line-height — high enough to make documentation pages comfortable to
read end-to-end, which is most of how the site is consumed.

Code blocks use **Geist Mono** at 0.85rem (~13.6px) on a 1.55
line-height, syntax-highlighted with the standard shiki theme. The
mono is everywhere: in code blocks, in inline `code` references, in
many of the badge components, in CLI snippets. Geist Mono's
distinctive zero, ligatures, and visible terminals are part of the
brand fingerprint.

## Layout

The container max-width is 1400px with 24px gutters. The site uses a
sidebar-and-content documentation layout — left sidebar for component
navigation, central content column for prose and live demos, right
sidebar for in-page anchors. The 4px micro-rhythm comes from
Tailwind's spacing scale.

Component-demo blocks alternate between rendered preview and source
code, both rendered with the same tokens.

## Elevation & Depth

Depth is achieved entirely through the surface ladder (`#ffffff` →
`#fafafa` → `#f4f4f5`) plus the `#e4e4e7` 1px border. Shadows are
essentially absent on the marketing surface — the only shadow you
encounter is the focus ring on inputs (a 2px `#0a0a0a` outline) and
the soft popover shadow on `<DropdownMenu>` and `<Dialog>` overlays.
Cards are flat-on-flat with a hairline.

## Shapes

Radii ladder is 2/4/6/8/12, all derived from a single `--radius`
token (default `0.5rem` / 8px). Buttons sit at 6px (`--radius - 2px`),
cards at 8px (`--radius`), and larger surfaces at 12px (`--radius +
4px`). The whole system is parameterised: change `--radius` and
every component scales together. This single-token shape language
is the structural innovation that made shadcn copyable.

## Components

The defining components are the **near-black solid CTA** (`#0a0a0a`
on white, inverted on dark), the **outlined secondary button** (1px
`#e4e4e7` border), the **0.5rem card** with hairline border and no
shadow, the **40px input** with a 2px focus ring, and the **mono
badge** in either `#f4f4f5` or solid black. Together these comprise
roughly 80% of any shadcn-styled application, which is why they look
identical across thousands of sites.

## Do's and Don'ts

- **Do** keep the action vocabulary monochromatic — solid near-black on light, inverted near-white on dark. A coloured primary CTA breaks the system''s "calm professional" posture.
- **Do** parameterise everything through `--radius` and the zinc scale — the system''s power comes from a single token controlling shape across all components.
- **Do** use Geist Sans + Geist Mono together; substituting Inter or system-ui breaks the typographic fingerprint.
- **Don''t** add a brand colour to the components themselves — shadcn is meant to be re-themed downstream. The site uses near-black precisely *because* there''s no shadcn brand colour.
- **Don''t** apply shadows to cards on the marketing surface; depth here is hairline-and-tone.
- **Don''t** mix radius values arbitrarily — buttons should always sit two pixels tighter than cards, derived from the same `--radius` token.
