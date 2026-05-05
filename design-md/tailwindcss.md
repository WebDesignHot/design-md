---
name: Tailwind CSS
tagline: The system applied to itself — Inter Variable on white canvas, signature `#0ea5e9` sky blue, every component built from Tailwind utilities.
author: webdesignhot
source_url: https://tailwindcss.com
spec: design.md/v1
quality: curated
featured: true
categories: [dev-tools, saas]
tags: [light, sans, mono, structured, dense]
preview_swatch: ['#ffffff', '#0ea5e9', '#0f172a']
related: [vercel, linear]
description: 'Tailwind''s marketing site is the framework demonstrating itself — Inter Variable headlines, the canonical slate-on-white palette, signature sky-500 (`#0ea5e9`) brand, and every component composable from the utility classes the site is selling. The most self-referential design system on the web.'

colors:
  bg: '#ffffff'
  bg-quiet: '#f8fafc'
  bg-elev: '#f1f5f9'
  text: '#0f172a'
  text-soft: '#475569'
  text-muted: '#64748b'
  text-faint: '#94a3b8'
  brand: '#0ea5e9'
  brand-hover: '#0284c7'
  brand-light: '#38bdf8'
  brand-tint: '#e0f2fe'
  accent: '#06b6d4'
  border: '#e2e8f0'
  border-strong: '#cbd5e1'
  link: '#0284c7'
  on-brand: '#ffffff'
  code-bg: '#0f172a'
  code-text: '#e2e8f0'

typography:
  display:
    family: '"Inter Variable", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    weights: [400, 500, 600, 700, 800]
  body:
    family: '"Inter Variable", Inter, ui-sans-serif, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"Fira Code Variable", "Fira Code", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    weights: [400, 500]
  scale:
    display:    { size: 72, weight: 800, lineHeight: 1.0,  tracking: '-0.025em' }
    h1:         { size: 56, weight: 800, lineHeight: 1.05, tracking: '-0.022em' }
    h2:         { size: 36, weight: 700, lineHeight: 1.15, tracking: '-0.015em' }
    h3:         { size: 24, weight: 600, lineHeight: 1.3 }
    body-large: { size: 20, weight: 400, lineHeight: 1.6 }
    body:       { size: 16, weight: 400, lineHeight: 1.7 }
    body-small: { size: 14, weight: 400, lineHeight: 1.5 }
    label:      { size: 12, weight: 500, lineHeight: 1.3, family: mono }

radius:
  sm: 4
  md: 6
  lg: 8
  xl: 12
  card: 12
  button: 8
  pill: 9999

layout:
  page-width: 1280
  reading-width: 768
  header-height: 64

components:
  button-primary:
    backgroundColor: '#0f172a'
    textColor: '#ffffff'
    rounded: pill
    padding: '12px 24px'
    font: 'Inter 14px / weight 600'
    use: 'Get started, Read the docs — slate-900 pill on white'
  button-secondary:
    backgroundColor: bg-elev
    textColor: text
    rounded: pill
    padding: '12px 24px'
  card:
    backgroundColor: bg
    border: border
    rounded: card
    shadow: '0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.06)'
    use: 'Component preview, feature tile — soft elevation with hairline border'
  code-block:
    backgroundColor: code-bg
    textColor: code-text
    rounded: lg
    font: 'Fira Code 14px / weight 400'

lineage:
  summary: |
    Tailwind's marketing site is the framework demonstrating itself.
    Every color comes from the **canonical Tailwind palette** that
    ships in the framework — `slate-900` (`#0f172a`) for text,
    `sky-500` (`#0ea5e9`) for brand, `slate-50` through `slate-900`
    for the neutral ramp. The typography is **Inter Variable** at
    weights 400–800, the de-facto open-source UI sans (the same
    family Linear uses at custom weights). Code blocks render in
    Fira Code on the `slate-900` fill — the framework's recommended
    code-block recipe. The most distinctive structural move is that
    every component on the marketing page (cards, buttons, badges,
    the docs sidebar) is *literally composable from Tailwind utility
    classes*, with the source visible in the surrounding code blocks.
    Where Linear ships a custom CSS-in-JS system that's invisible to
    visitors, and Stripe ships a custom design system whose
    primitives stay private, Tailwind ships a public-API design
    system: the marketing site is the documentation, and the
    documentation is the brand. Sky-500 is applied generously — link
    color, accent gradient, focus ring — because it's the framework's
    suggested brand-color recipe and the site is performing the
    suggestion.
  influences:
    - name: Inter (Rasmus Andersson)
      role: Open-source UI sans family — variable weights 100–900
      url: https://rsms.me/inter/
    - name: Adam Wathan + Steve Schoger (Refactoring UI)
      role: Co-creators; their book established the Tailwind aesthetic baseline
      url: https://www.refactoringui.com
    - name: Refactoring UI gradient + slate-on-white tradition
      role: Slate ramp, gradient hero, sky-blue accent — pre-dates Tailwind framework
      url: https://www.refactoringui.com
---

## Overview

Tailwind's marketing site is the most self-referential design
system on the web — the framework being sold is the framework that
built the page selling it. White canvas, slate-900 (`#0f172a`)
text, sky-500 (`#0ea5e9`) brand, Inter Variable from 400 to 800,
Fira Code on slate-900 for all code blocks. Every visible component
is composable from the utility classes the docs teach.

What makes it distinctive vs. nearby alternatives: most CSS
frameworks (Bootstrap, Bulma, Chakra) built marketing sites that
look generic — the framework was a tool, the brand was separate.
Tailwind collapsed the two: the marketing aesthetic *is* the
framework's recommended aesthetic. Sky-500 isn't an arbitrary brand
color, it's `bg-sky-500`. The slate ramp isn't custom, it's `slate-*`.
The choice signals "use this and your site will look like this," and
the site is the proof.

## Colors

- **bg** `#ffffff` — pure white canvas.
- **bg-quiet** `#f8fafc` (`slate-50`) — section breakers, subtle
  alternation.
- **text** `#0f172a` (`slate-900`) — body, headlines (full-strength
  near-black with a navy hint).
- **text-soft** `#475569` (`slate-600`) — supporting copy.
- **text-faint** `#94a3b8` (`slate-400`) — meta, captions.
- **brand** `#0ea5e9` (`sky-500`) — Tailwind sky. Used on links,
  focus rings, accent gradients.
- **accent** `#06b6d4` (`cyan-500`) — secondary accent, often used
  in gradients with sky.
- **border** `#e2e8f0` (`slate-200`) — hairline rules.
- **code-bg** `#0f172a` (`slate-900`) — code block fill.

The palette is **the actual Tailwind palette**, used by name. The
site is calibration data for the framework.

## Typography

The display voice is **Inter Variable** at weights 700–800 — Rasmus
Andersson's open-source UI sans, used here at the upper weight
range for confident hero typography. Display headlines run at 56–72px
with `-0.025em` tracking and 1.0 line-height for compressed,
present-tense hero copy. Body holds at 16px regular, lifted slightly
to **1.7 line-height** for marketing-page readability — looser than
Linear's 1.55 dev-tool density.

Mono is **Fira Code Variable** with ligature support — the canonical
open-source mono for Tailwind's documentation. Code blocks fill in
slate-900 with `slate-200` text, syntax-highlighted in the
Refactoring UI palette (sky for keywords, cyan for strings, slate
for comments).

## Layout

Page caps at **1280px** with **768px** reading column for prose
sections. Header is `64px` tall, sticky on scroll, with a 90%-opacity
white fill and backdrop blur. Section gutters are generous (96–128px
between major regions). The docs use a 3-column layout (sidebar +
content + table-of-contents) on viewports above 1280px — the same
shape as MDN, Stripe Docs, and React's docs site.

## Elevation & Depth

Soft shadows, used liberally. The signature card shadow is a
two-layer stack: `0 1px 3px rgba(0,0,0,0.05)` plus `0 1px 2px
rgba(0,0,0,0.06)` — Tailwind's default `shadow-sm`. Cards lift gently
above the white canvas. Larger surfaces (modals, popovers) use
`shadow-lg` and `shadow-xl` from the framework's elevation scale.
Borders coexist with shadows — both are present, neither carries
elevation alone.

## Shapes

Standard Tailwind radius scale: **4px** (`rounded`), **6px**
(`rounded-md`), **8px** (`rounded-lg`), **12px** (`rounded-xl`),
**9999px** (`rounded-full`). The hero CTA uses the full pill
(`rounded-full`); cards and code blocks settle at `rounded-xl`
(12px). The geometry is gentler than YC's hard corners and sharper
than Medium's editorial pill — calibrated to read as *modern web
default*, because the framework has effectively defined what *modern
web default* means since 2020.

## Components

The signature primary button: **slate-900 fill, white text, full
pill, 12px 24px padding, Inter 14px weight 600**. Sky blue is held
back from the CTA fill — used instead on links, focus rings,
gradient accents, and the "What's new" banner badges. Component
preview cards arrange in a responsive grid with white fill, hairline
border, and the subtle two-layer shadow. Code blocks render
full-bleed inside docs columns with a copy chip in the top-right
corner.

## Do's and Don'ts

- **Do** use the Tailwind palette by canonical name. `slate-900`
  for text, `sky-500` for brand, `slate-200` for borders.
- **Do** invert primary CTAs to slate-900 on white. Sky-500 is for
  links and accents, not action fills.
- **Do** apply `shadow-sm` plus `border` together for card chrome —
  the two-layer pattern is the system.
- **Don't** introduce custom hex codes that don't map to a Tailwind
  scale. The framework is the system.
- **Don't** drop Inter for a custom typeface. Inter at variable
  weights is the entire type voice.
- **Don't** widen line-height below 1.5 for body marketing prose.
  The 1.7 default is calibrated for readability at 16px on white.
