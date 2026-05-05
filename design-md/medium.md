---
name: Medium
tagline: Editorial reading-first publishing — magazine-grade serif body, GT Super display, signature green-on-white pill CTAs.
author: webdesignhot
source_url: https://medium.com
spec: design.md/v1
quality: curated
featured: false
categories: [media, social]
tags: [light, editorial, serif, sans, warm, spacious]
preview_swatch: ['#ffffff', '#1a8917', '#242424']
related: [stripe, vercel]
description: 'Medium is what happens when a tech company commits, fully, to magazine typography on the open web. The reading view runs in GT Super (a display serif inspired by Pi typeface) plus Sohne for UI, with a signature `#1a8917` green that appears only on action surfaces — never as decoration.'

colors:
  bg: '#ffffff'
  surface: '#fafafa'
  text: '#242424'
  text-soft: '#6b6b6b'
  text-faint: '#a8a8a8'
  brand: '#1a8917'
  brand-hover: '#0f730c'
  border: 'rgba(36, 36, 36, 0.1)'
  border-strong: 'rgba(36, 36, 36, 0.25)'
  on-brand: '#ffffff'

typography:
  display:
    family: '"GT Super", "Lora", Georgia, "Times New Roman", serif'
    weights: [400, 500, 700]
  body:
    family: 'sohne, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  reading:
    family: 'source-serif-pro, "Source Serif Pro", Charter, Georgia, serif'
    weights: [400, 600]
  mono:
    family: 'source-code-pro, Menlo, Monaco, "Courier New", monospace'
    weights: [400]
  scale:
    display:    { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.03em' }
    h1:         { size: 42, weight: 700, lineHeight: 1.1,  tracking: '-0.025em' }
    h2:         { size: 28, weight: 700, lineHeight: 1.2,  tracking: '-0.015em' }
    h3:         { size: 22, weight: 600, lineHeight: 1.3 }
    body-large: { size: 21, weight: 400, lineHeight: 1.58 }
    body:       { size: 18, weight: 400, lineHeight: 1.58 }
    body-small: { size: 14, weight: 400, lineHeight: 1.4 }
    label:      { size: 13, weight: 500, lineHeight: 1.3 }

radius:
  sm: 4
  md: 6
  lg: 8
  card: 4
  button: 99
  pill: 9999

layout:
  page-width: 1192
  reading-width: 680
  header-height: 57

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: pill
    padding: '7px 16px'
    font: 'sohne 14px / weight 500'
    use: 'Get started, Sign in — pill on canvas'
  button-secondary:
    backgroundColor: bg
    textColor: text
    border: border-strong
    rounded: pill
    padding: '7px 16px'
  card:
    backgroundColor: bg
    border: 'none'
    rounded: card
    use: 'Story preview tiles — borderless, separated by hairline rules'

lineage:
  summary: |
    Medium's design lineage is print magazine, not software product.
    The reading view runs at **18–21px** in **Source Serif Pro** (later
    **GT Super** for display headlines) over a generous **680px** column
    — the exact measurements borrowed from broadsheet body-text norms.
    The system was rebuilt in 2020 around GT Super (Grilli Type), a
    display serif explicitly designed to evoke Pi typeface and the
    high-contrast magazine feel of the 1960s. Sohne (Klim Type Foundry)
    handles UI surfaces — meta, navigation, captions — providing the
    sans/serif duality of an old-school editorial layout. The signature
    green `#1a8917` is purely functional: applied to "Get started" pills,
    follow buttons, and the "Member-only" indicator. It never decorates.
    Where most publishing platforms (Substack, Ghost) chase a colored
    accent across their UI, Medium keeps the canvas pure white, the
    type near-black `#242424`, and reserves brand color for the small
    cluster of conversion surfaces. The result: typography is the
    product, color is the punctuation.
  influences:
    - name: GT Super (Grilli Type)
      role: Display serif rebuild — the typographic spine of the new Medium
      url: https://www.grillitype.com/typeface/gt-super
    - name: Sohne (Klim Type Foundry)
      role: UI sans for meta, navigation, captions — editorial duality
      url: https://klim.co.nz/retail-fonts/soehne/
    - name: Pi Typeface / Magazine layout tradition
      role: Body-text width and reading rhythm borrowed from print
      url: https://en.wikipedia.org/wiki/Magazine
---

## Overview

Medium is the rare web product that reads like a magazine. Pure white
canvas, near-black type at `#242424`, body copy that's deliberately
**larger than industry norm** at 18–21px on 1.58 line-height — the
measurements come from print body-text tradition, not from web
designer reflex. GT Super for display, Sohne for UI, Source Serif Pro
for the reading column itself. The design system is built around the
act of reading; everything else is a rounding error.

What makes it distinctive vs. nearby alternatives: Substack and Ghost
both leaned into colored accents and decorative chrome to feel
"warmer." Medium did the opposite — stripped illustrations, removed
gradients, kept the green to a single pill at the top of every page.
The system is confident enough that it doesn't need to perform.

## Colors

- **bg** `#ffffff` — pure white reading canvas, no tint.
- **surface** `#fafafa` — very subtle gray for nav and footer.
- **text** `#242424` — body copy, headlines (warm near-black).
- **text-soft** `#6b6b6b` — bylines, dates, supporting metadata.
- **brand** `#1a8917` — Medium green. Action surfaces only.
- **border** `rgba(36, 36, 36, 0.1)` — translucent hairlines between
  story tiles.

## Typography

The display voice is **GT Super** at weight 700 — a high-contrast
display serif released by Grilli Type in 2018. It's the typographic
event of every page; long headlines flow on tight `-0.025em` tracking
and 1.1 line-height to compress vertical space without sacrificing
weight.

Body for the reading view is **Source Serif Pro** at 18–21px on a
generous 1.58 line-height, capped at a 680px reading column. The
sizes are intentionally larger than the 16px web norm — they're
calibrated to magazine body-text, not to dashboard density.

Sohne (Klim Type Foundry) handles UI surfaces: navigation, post
metadata, button labels. The sans/serif pair recreates the
editorial-magazine duality where headlines and body sit in serif and
chrome (folios, deck heads, captions) sits in sans.

## Layout

The hero page caps at **1192px** but the reading column inside it
narrows to **680px** — measurements borrowed directly from broadsheet
print typography. Header is `57px` tall, sticky with a hairline
bottom border on scroll. Story tiles arrange in a 2- or 3-column
masonry depending on viewport, separated by 1px hairlines rather
than card chrome.

## Elevation & Depth

Medium uses almost no shadows. Cards are flat. Story preview tiles
sit on the white canvas separated by `rgba(36,36,36,0.1)` hairlines.
The only meaningful elevation is on overlay UI (modals, dropdowns)
where a soft `0 1px 4px` shadow at low opacity lifts the surface
above the reading flow. Borders, not shadows, do the structural work.

## Shapes

**4–6px** radius across editorial surfaces — story tile thumbnails,
input fields, image rounding. The signature shape is the **pill
button** (`9999px`) used for "Get started", "Follow", "Sign in" —
inherited from social-media UI patterns and applied with magazine
restraint. No zero-radius elements; no aggressively rounded
"squircle" shapes.

## Components

The signature primary button: `#1a8917` background, white text,
**fully rounded pill**, `7px 16px` padding, Sohne 14px weight 500.
Story preview tiles are borderless — image on top, GT Super
headline, Sohne meta row, no card chrome. Follow buttons match the
primary CTA pattern, scaled smaller. Inline links in body text get
underlined and shift to the brand green on hover.

## Do's and Don'ts

- **Do** treat type as the product. Body text at 18–21px, headlines
  in GT Super at `-0.025em` tracking, 680px reading width.
- **Do** reserve `#1a8917` green strictly for action surfaces — never
  decorate with it.
- **Do** use pill (`9999px`) for buttons; soft 4–6px for tiles and
  thumbnails.
- **Don't** add shadows to story tiles. Hairline borders or empty
  space carry the separation.
- **Don't** mix display serif into UI chrome — keep Sohne for nav,
  meta, and buttons.
- **Don't** narrow the reading column below 680px or widen it past
  720px. The measurement is the system.
