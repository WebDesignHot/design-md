---
name: Discord
tagline: Indigo-ground hangout — gg sans body, ABC Ginto Nord display, 12-16px tile radii, white pill CTAs.
author: webdesignhot
source_url: https://discord.com
spec: design.md/v1
quality: curated
featured: false
categories: [social, saas]
tags: [bright, sans, playful, dense, warm]
preview_swatch: ['#5865f2', '#ffffff', '#23272a']
related: [notion, raycast, github]
description: 'Discord paints its marketing site the same blurple `#5865f2` as the in-product accent and ships its proprietary type stack — gg sans for body, ABC Ginto Nord for stencil-energy headlines. The button radius scale is dense (4 / 8 / 12 / 16 / 24 / 32 / round), and the primary CTA is white-on-blurple, the inverse of every dev-tool that paints brand-on-white.'

colors:
  bg: '#5865f2'
  bg-deep: '#1a2081'
  surface: '#ffffff'
  text: '#ffffff'
  text-on-light: '#23272a'
  text-soft: 'rgba(255,255,255,0.72)'
  brand: '#5865f2'
  focus: '#00b0f4'
  link: '#00b0f4'
  border: 'rgba(255,255,255,0.10)'
  on-brand: '#ffffff'

typography:
  display:
    family: '"ABC Ginto Nord Discord", "ABC Ginto Nord", "gg sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [700, 800]
  body:
    family: '"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400]
  scale:
    h1:    { size: 44, weight: 700, lineHeight: 0.86, tracking: '-0.01em' }
    h2:    { size: 28, weight: 700, lineHeight: 1.0,  tracking: '-0.005em' }
    body:  { size: 16, lineHeight: 1.5 }
    label: { size: 11, weight: 600, family: mono }

radius:
  button: 12
  card: 16
  pill: 9999

lineage:
  summary: |
    Discord's marketing site ships the same blurple `#5865f2` that runs
    the in-product brand sidebar — `--brand: #5865f2` is exposed as a
    CSS variable directly on the document root, alongside `--brand-100`
    through `--brand-900` for tonal stops. Where Slack chose the
    introverted aubergine `#4a154b` for "Slack as a deep-work
    environment," Discord chose blurple — the same hue Microsoft uses
    for Xbox achievement banners — for "Discord as a hangout."
    Typography is custom: **gg sans** for body (Noto Sans-derived,
    licensed) and **ABC Ginto Nord Discord** (a custom stencil-energy
    cut by Dinamo Foundry) for the all-caps marketing headlines —
    e.g., "GROUP CHAT THAT'S ALL FUN & GAMES." The capital-only display
    sets it apart from every other SaaS marketing system, which use
    sentence case for warmth. The button system has seven discrete radii
    (4, 8, 12, 16, 24, 32, round) — denser than Linear's six, looser
    than Apple's two — and the primary CTA is white-on-blurple, the
    *inverse* of the dev-tools convention.
  influences:
    - name: Dinamo / ABC Ginto Nord
      role: Custom display cut for the all-caps marketing headlines
      url: https://abcdinamo.com/typefaces/ginto
    - name: Twitch
      role: Adjacent gamer-platform purple lineage; both prove blurple-spectrum brand
      url: https://twitch.tv
    - name: Xbox / Microsoft Game Pass
      role: Saturated indigo as a "hangout / play" register, not a "work" register
      url: https://xbox.com
---

## Overview

Discord's homepage is a sustained immersion in blurple. The hero panel
fills the viewport with a `#5865f2` field tinted toward `#1a2081` at the
edges by an animated gradient layer (`--bg-animated-gradient-background-indigo-1: hsl(241.5 57% 27%)`).
The headline sits inside in 35–44px `ABC Ginto Nord Discord` — a
condensed stencil-feeling all-caps cut — that reads like a Saturday
morning cartoon poster.

What makes it distinctive vs. nearby alternatives: where Slack and
Microsoft Teams render their marketing sites in white-with-accent,
Discord renders the page itself in the brand color and inverts the
primary CTA to `#ffffff` on `#23272a` text. The site feels less like a
pitch and more like the in-product entry hall — same blurple, same
custom type, same heavy 12px-radius card geometry.

## Colors

- **bg** `#5865f2` — page canvas (`--brand`).
- **bg-deep** `#1a2081` — gradient toner used at panel edges.
- **surface** `#ffffff` — primary CTA fill (white-on-blurple inversion).
- **text** `#ffffff` — body and headlines on the brand canvas.
- **text-on-light** `#23272a` — text on the white CTA pill, also the deep navy used in white-panel sections.
- **text-soft** `rgba(255,255,255,0.72)` — captions, supporting copy on dark.
- **brand** `#5865f2` — Discord blurple, also `--brand-500: hsl(234.94 85.56% 64.71%)`.
- **focus** `#00b0f4` — `--focus-border` cyan ring used on form fields.
- **link** `#00b0f4` — `--text-link` cyan, the same as the focus ring.
- **border** `rgba(255,255,255,0.10)` — translucent hairlines on the brand canvas.

## Typography

The display voice is **ABC Ginto Nord Discord** — a custom condensed
all-caps cut commissioned from Dinamo Foundry. It's the wordmark face,
the marketing H1 face, and the section heading face. Hierarchy is
carried by case (CAPS for display, sentence for body) rather than
weight. The H1 sits at 35–44px with `-0.01em` tracking and a tight
`0.86` line-height that lets two lines stack with no air between them.

Body is **gg sans**, a custom Noto Sans-derived family Discord
licensed to ship as the primary in-product type. It's exposed via
`--font-primary` and runs everything outside the marketing display
slots — nav, CTA labels, body copy, and form fields. There's a third
register, **Fraunces**, exposed via `--font-clan-body` for clan/server
profile pages where a more editorial register is wanted.

Mono is the system fallback (`ui-monospace`, `SF Mono`, `Menlo`) — Discord
does not ship a custom mono. Code blocks in marketing screenshots render
in whatever the screenshotting machine had installed.

## Layout

The marketing homepage is a stack of edge-to-edge panels, each ~700px
tall, each filled with a saturated chromatic field (blurple, deep navy,
periwinkle, etc.). Panel content sits inside a centered ~1200px column
with generous 64px+ vertical rhythm between heading and supporting
copy. The header is fully transparent on hero load and acquires a
backdrop-blur and `rgba(255,255,255,0.10)` border on scroll.

## Elevation & Depth

Depth comes from the animated gradient layers (`indigo-1`, `indigo-2`,
`pink-1`) that softly oscillate behind the brand canvas — not from
shadows. Cards on white-panel sections (the feature grid below the
hero) use a `16px` radius and a `0 4px 4px rgba(0,0,0,.15)` drop
shadow — subtle but present. The primary CTA does not carry a shadow
on the brand canvas; it relies on white-on-blurple contrast alone.

## Shapes

Seven radius tiers exposed as `--radius-{none,xs,sm,md,lg,xl,xxl}` with
values `0, 4, 8, 12, 16, 24, 32`, plus a `--radius-round: 2147483647px`
sentinel that clamps to a full pill. The `12px` md radius is the
default button corner; `16px` lg is the card default; `24px` xl is the
floating panel / modal corner. The bottom-of-page "Download" CTA flips
to the round sentinel — a stadium pill — to mark it as the conversion
endpoint.

## Components

The signature primary CTA is the **white-on-blurple platform pill**:
`#ffffff` fill, `#23272a` text, `gg sans` 18px / 400, `12px` radius,
`15px 24px` padding. The "Open Discord in your browser" secondary CTA
flips to `#5865f2` fill with white text — same geometry, brand-on-white
on white panels and brand-on-brand-deep on the canvas. Cards use
`16px` radius and a 1px translucent border on the brand canvas, drop
shadow on white panels. The tab-bar pill (used on the comparison
sections) is `--radius-round` — a full pill — with a `--brand-500` fill.

## Do's and Don'ts

- **Do** paint full panels in the brand color. Discord owns blurple
  the way Stripe owns iridescent gradients — half-painting it dilutes.
- **Do** use all-caps for the display tier. ABC Ginto Nord Discord is
  designed for it; sentence case loses the marketing voice.
- **Do** invert primary CTAs to white-on-brand on brand-canvas
  sections. The dev-tools convention of "brand fill on white" doesn't
  match the immersive register.
- **Don't** mix the seven radii arbitrarily. The system has clear
  semantics: 12 for buttons, 16 for cards, 24 for modals, round for
  the conversion endpoint.
- **Don't** add drop shadows on the brand canvas. Use the animated
  gradient layers for depth instead.
- **Don't** re-color the focus ring. The `#00b0f4` cyan against
  blurple is the system's signature complementary, and it carries
  accessibility weight as well as brand weight.
