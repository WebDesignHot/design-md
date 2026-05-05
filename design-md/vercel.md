---
name: Vercel
tagline: Brutalist developer-product polish — light canvas, pure black-on-near-white type, Geist sans + mono, conic-gradient accents.
author: webdesignhot
source_url: https://vercel.com
spec: design.md/v1
quality: curated
featured: true
categories: [dev-tools, saas]
tags: [light, minimal, sans, mono, dense]
preview_swatch: ['#fafafa', '#171717', '#0070f3']
related: [linear, stripe]
description: 'Vercel ships a proprietary type system (Geist) and uses it as a competitive moat. The site reads like an extension of the dashboard — high-contrast black-on-near-white, dense neutral ramp, the famous `#0070f3` accent reserved for links and edge cases.'

colors:
  bg: '#fafafa'
  bg-pure: '#ffffff'
  bg-elev: '#f5f5f5'
  text: '#171717'
  text-pure: '#000000'
  text-secondary: '#525252'
  text-tertiary: '#737373'
  text-faint: '#a3a3a3'
  brand: '#0070f3'
  link: '#0070f3'
  focus: 'hsla(212, 100%, 48%, 1)'
  border: 'hsla(0, 0%, 90%, 1)'
  border-strong: 'hsla(0, 0%, 80%, 1)'
  on-brand: '#ffffff'

typography:
  display:
    family: 'Geist, "GeistVariable", -apple-system, system-ui, sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: 'Geist, "GeistVariable", -apple-system, system-ui, sans-serif'
    weights: [400, 500]
  mono:
    family: '"Geist Mono", ui-monospace, "SF Mono", monospace'
    weights: [400, 500]
  scale:
    display:    { size: 64, weight: 600, lineHeight: 1.05, tracking: -0.02 }
    h1:         { size: 48, weight: 600, lineHeight: 1.05, tracking: -0.018 }
    h2:         { size: 32, weight: 600, lineHeight: 1.15, tracking: -0.015 }
    h3:         { size: 22, weight: 500, lineHeight: 1.3 }
    body-large: { size: 18, weight: 400, lineHeight: 1.55 }
    body:       { size: 16, weight: 400, lineHeight: 1.55 }
    body-small: { size: 14, weight: 400, lineHeight: 1.5 }
    label:      { size: 12, weight: 500, lineHeight: 1.3 }

radius:
  sm: 4
  md: 6
  lg: 8
  card: 12
  hero: 16
  pill: 100

layout:
  page-width: 1200
  dense-width: 1400
  header-height: 64

motion:
  ease: 'cubic-bezier(0.4, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200

components:
  button-primary:
    backgroundColor: text
    textColor: bg
    rounded: pill
    padding: '0 14px (hero) | 0 6px (compact header)'
    font: 'Geist 16px / weight 500'
    use: 'Sign-up, Start Deploying — pure-black pill on light bg'
  button-secondary:
    backgroundColor: bg-pure
    textColor: text
    border: border
    rounded: md
  card:
    backgroundColor: bg-pure
    border: border
    rounded: card
    shadow: '0 2px 2px rgba(0,0,0,0.04), 0 8px 16px -4px rgba(0,0,0,0.04)'

lineage:
  summary: |
    Vercel's design system is engineered around its proprietary type
    family **Geist** — a sans + mono pair released open-source in 2024
    that anchors the entire visual identity. The marketing site uses
    near-pure black `#171717` on near-pure white `#fafafa`, with the
    famous `#0070f3` blue reserved for links, focus rings, and the
    occasional gradient corner. CTAs invert to black-on-white pills
    (matching Linear's pattern but at light-mode contrast). Where Linear
    ships a 1024px max page width, Vercel goes 1200–1400px — denser
    information rows for dashboard-shaped marketing. The neutral ramp
    is exhaustive: 9 grayscale stops covering 100% white through 9%
    black, providing fine-grained control over hierarchy without
    introducing color.
  influences:
    - name: Geist (open-source by Vercel)
      role: Proprietary type identity — distinct silhouette vs. Inter / SF Pro
      url: https://vercel.com/font
    - name: Linear
      role: Adjacent dev-tool peer; both invert text-color CTAs against canvas
      url: https://linear.app
    - name: Vercel design system (`@vercel/geist-ui`)
      role: Open dashboard primitives that shape the marketing surface
      url: https://geist-ui.dev
---

## Overview

Vercel's marketing site is the dashboard's editorial cousin. Same Geist
type, same near-pure black-on-near-white contrast, same dense neutral
ramp, same 8px-rounded card geometry. The visual unification is
intentional: a developer who signs up and lands in the dashboard
shouldn't feel a brand discontinuity. The site reads as a product
showcase, not a separate marketing layer.

Distinctive vs. nearby alternatives: most dev-tool marketing softens
into cream / off-white tints to feel "warmer." Vercel refuses — `#fafafa`
is the only background, and it's already as warm as the system gets.
The famous `#0070f3` blue (`--geist-success` in legacy code) appears
only as link color and gradient accents; it's never the primary CTA
fill, which inverts to `#171717` for maximum contrast.

## Colors

- **bg** `#fafafa` — page canvas, near-white at 98% lightness.
- **bg-pure** `#ffffff` — card surfaces, modal backgrounds.
- **text** `#171717` — body copy, headlines (not pure black — slight grain).
- **text-secondary** `#525252` — supporting copy.
- **text-faint** `#a3a3a3` — metadata, captions.
- **brand / link** `#0070f3` — the canonical "Vercel blue".
- **border** `hsla(0,0%,90%,1)` — translucent gray for card and section edges.

## Typography

The display voice is **Geist** — Vercel's open-source proprietary sans
released 2024. Headlines hold at weight `600`; body at `400`. Geist's
silhouette (slightly narrower lowercase apertures, distinctive `g` and
`a`) is what makes Vercel pages instantly recognizable even before you
see the wordmark.

Body copy at 16px / 1.55 line-height — slightly larger than Linear's
15px baseline, optimized for marketing-page readability vs. product
density. Reading width caps at ~720px even on 1400px pages.

Mono is **Geist Mono**, the matched mono pair to Geist Sans. Used for
code blocks, dashboard route paths, env-var names, and the occasional
inline command. Like Linear's Berkeley Mono, the choice signals type
discipline — the mono isn't a fallback to system fonts.

## Layout

Two canonical widths: 1200px for editorial / marketing sections,
1400px for dense data layouts (changelog, pricing comparison, customer
list). Header at 64px, sticky with backdrop blur on scroll. Section
gutters generous — typically 96px+ between major regions.

## Elevation & Depth

Light shadows, not heavy ones. The signature shadow stack is a near-
invisible 2px / 8px dual layer at 4% black opacity — barely there, but
enough to lift cards above the `#fafafa` ground. Borders take over
when shadows are overkill.

## Shapes

`6px` is the dominant radius — used across buttons, inputs, code
chips. Larger surfaces (cards, modals) move to `8–12px`. The `100px`
pill appears only on hero CTAs; compact header buttons use `6px`. No
zero-radius elements.

## Components

The signature primary button: `#171717` background, white text, full
pill on hero context, `6px` rectangle in compact header. Card uses
white background + 1px border + subtle shadow — never just shadow
alone. Inputs use the same `#0070f3` blue for focus rings, matching
the link color.

## Do's and Don'ts

- **Do** use Geist for both headlines and body — Vercel's type unity
  is a brand asset.
- **Do** invert primary CTAs to black on white for maximum contrast.
  The blue is for links and focus, not action fills.
- **Do** cap reading width at ~720px even on 1400px layouts.
- **Don't** use cream or off-white tints. `#fafafa` is the canvas.
- **Don't** apply heavy shadows. Two-layer 4%-opacity shadows do the
  full lifting.
- **Don't** use the `#0070f3` blue as a primary button fill — it
  becomes a link color the moment you're not careful.
