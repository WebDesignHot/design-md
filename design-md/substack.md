---
name: Substack
tagline: Magazine-on-the-internet — Spectral serif body at 19px, Cahuenga display, signature `#ff6719` orange CTAs.
author: webdesignhot
source_url: https://substack.com
spec: design.md/v1
quality: curated
featured: false
categories: [media, saas]
tags: [light, editorial, serif, sans, warm, spacious]
preview_swatch: ['#ffffff', '#ff6719', '#363737']
related: [medium, stripe, ycombinator]
description: 'Substack is the rare consumer SaaS that ships its product feed in a body serif. Spectral at 19px / 1.55 against pure white, system-ui sans on chrome and buttons, and the signature `#ff6719` orange — saturated, slightly red-shifted from default — anchoring every primary action. Display headlines use Cahuenga, a custom display sans built for the brand.'

colors:
  bg: '#ffffff'
  bg-elev: '#fafaf7'
  surface: '#ffffff'
  text: '#363737'
  text-soft: '#666c70'
  text-faint: '#a8a8a8'
  brand: '#ff6719'
  brand-hover: '#e85412'
  brand-tint: 'rgba(255, 103, 25, 0.10)'
  border: 'rgba(0, 0, 0, 0.10)'
  border-strong: 'rgba(0, 0, 0, 0.20)'
  on-brand: '#ffffff'

typography:
  display:
    family: '"Cahuenga", "Söhne", -apple-system, system-ui, sans-serif'
    weights: [400, 500, 600]
  body:
    family: 'Spectral, "Iowan Old Style", Georgia, "Times New Roman", serif'
    weights: [400, 500, 600]
    role: 'feed body, post content, captions — the magazine voice'
  ui:
    family: 'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
    role: 'navigation, buttons, badges — the chrome'
  mono:
    family: 'ui-monospace, "SF Mono", Menlo, monospace'
    weights: [400]
  scale:
    display:    { size: 56, weight: 500, lineHeight: 1.05, tracking: '-0.02em', family: display }
    h1:         { size: 40, weight: 500, lineHeight: 1.1,  tracking: '-0.015em', family: display }
    h2:         { size: 32, weight: 500, lineHeight: 1.15, tracking: '-0.01em',  family: display }
    h3:         { size: 22, weight: 500, lineHeight: 1.25, family: display }
    body-large: { size: 21, weight: 400, lineHeight: 1.55, family: body }
    body:       { size: 19, weight: 400, lineHeight: 1.55, family: body }
    body-small: { size: 15, weight: 400, lineHeight: 1.5,  family: body }
    label:      { size: 13, weight: 500, lineHeight: 1.3,  family: ui }

radius:
  sm: 4
  md: 8
  button: 8
  card: 12
  pill: 9999

layout:
  page-width: 1200
  feed-column: 680
  prose-width: 680

motion:
  ease: 'cubic-bezier(0.4, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 220

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    rounded: 8
    padding: '0 16px'
    font: 'system-ui 15px / weight 600'
    use: 'Start your Substack, Create, Subscribe — orange anchors primary action across the surface'
  button-secondary:
    backgroundColor: bg
    textColor: text
    border: border-strong
    rounded: 8
    padding: '0 16px'
    font: 'system-ui 15px / weight 500'
  button-subscribe-inline:
    backgroundColor: transparent
    textColor: brand
    font: 'system-ui 14px / weight 600'
    use: 'inline subscribe link in feed cards — text-only orange, no fill'
  card:
    backgroundColor: bg
    border: border
    rounded: 12
    padding: '20px 24px'
  feed-row:
    backgroundColor: bg
    borderBottom: border
    paddingY: 24
    use: 'feed item separator pattern — borders, not cards'
  badge-verified:
    backgroundColor: 'rgba(255, 103, 25, 0.10)'
    textColor: brand
    rounded: pill
    font: 'system-ui 11px / weight 500'

lineage:
  summary: |
    Substack's design is the inverse of every other tech-product feed: the
    body voice is a **serif** (Spectral, by Production Type) at a
    magazine-grade 19px / 1.55 — deliberately slow to scan, deliberately
    long-form — while the chrome (nav, buttons, badges, search) holds in
    `system-ui`. The split signals "this is a publication, not a feed".
    Display headlines run in **Cahuenga**, a custom display sans
    commissioned for the brand, at weight 500 — heavier than Stripe's
    Söhne 300, lighter than Vercel's Geist 600 — landing on the editorial
    side of the dev-tool spectrum. The signature `#ff6719` orange is the
    only chromatic accent: applied to every primary CTA, every Subscribe
    link, the verified-author badge tint, and the wordmark — never as a
    full background. Body text color is `#363737`, a warm near-black
    that pairs cleanly with the off-white feed elevation `#fafaf7`.
    Borders do most of the separation work; cards are the exception, not
    the default. The result is the rare SaaS that reads like a Sunday
    paper.
  influences:
    - name: Spectral (Production Type)
      role: Body serif — the editorial voice of the feed
      url: https://www.productiontype.com/family/spectral
    - name: Cahuenga (custom commission)
      role: Display sans — Substack-specific identity beyond stock fonts
    - name: The New Yorker / Harper's online
      role: Magazine reading rhythm — long lines, large body, serif body, sans chrome
      url: https://www.newyorker.com
    - name: Medium
      role: Adjacent reading-first competitor — both prove serif-body works at scale
      url: https://medium.com
---

## Overview

Substack is what happens when a software company commits to magazine
typography for body text. The default reading experience runs in
**Spectral** (Production Type's open-source serif) at 19px / 1.55 —
roughly 2px larger than Medium and 3px larger than most product feeds —
on pure white. Chrome, buttons, and navigation hold in `system-ui` so
the OS-native sans does the UI work while the serif owns the content
zone.

Distinctive vs. nearby alternatives: Medium ships GT Super serif for
display + Söhne sans for everything else, putting the serif in display
position. Substack inverts the assignment — sans on chrome, serif on
*body* — which is the more magazine-faithful split. The brand `#ff6719`
orange (saturated, slightly red-shifted) is everywhere primary action
lives: Subscribe, Create, Start your Substack, the verified badge,
inline links inside cards. Never a gradient. Never a glow.

## Colors

- **bg** `#ffffff` — pure white, magazine-page canvas.
- **bg-elev** `#fafaf7` — warm off-white for elevated rails (sidebars,
  highlighted feed strips).
- **text** `#363737` — body color, deep warm gray, never pure black.
- **text-soft** `#666c70` — captions, timestamps, byline metadata.
- **brand** `#ff6719` — Substack orange. Action surfaces, Subscribe
  links, wordmark, verified-author tint. Single-accent system.
- **border** `rgba(0,0,0,0.10)` — feed-row separators.

## Typography

The display voice is **Cahuenga** — a Substack-commissioned display
sans at weight 500. Headlines hold around `32–40px`; tracking gently
negative. Cahuenga pairs with Spectral by sharing humanist proportions
without copying letter shapes — the contrast is intentional.

Body is **Spectral** at 19px / 1.55 — magazine-grade. The 19px size is
~2px larger than Medium and ~3px larger than Twitter/X, optimized for
sustained reading rather than scroll-skim. Reading width caps at 680px
even on 1200px pages.

Chrome (nav, buttons, badges, button text inside feed cards) uses
`system-ui` at 15px / weight 500–600. The sans/serif split is the
brand's typographic fingerprint: serif for *content*, sans for
*control*.

## Layout

Three-column desktop shell — left navigation rail, center feed
(680px), right "Up next" / sign-up rail. Page caps at 1200px. Feed
items use border-separators, not cards; the only true card surfaces
are the right-rail sign-up panel and embedded share/comment widgets.
Section gutters tight (24–32px between feed rows) — the rhythm
prioritizes *more posts visible* over breathing room.

## Elevation & Depth

Borders carry separation. The off-white `#fafaf7` background appears
on right-rail elevated panels — a subtle warm shift from the white
canvas, no shadow needed. Drop shadows appear only on dropdowns and
floating compose buttons. The reading view is shadow-free entirely.

## Shapes

`8px` is the dominant button radius — softer than Stripe's `4px` but
short of Linear's `9999px` pill. Cards round to `12px`. The verified
badge and a few status pills go full pill (`9999px`) for ergonomic
clickability — the same move Hugging Face makes on its tag chips.

## Components

The signature primary button: `#ff6719` orange fill, white text, `8px`
radius, `system-ui 15/600` — wide-enough to fit "Start your Substack"
without truncation. Subscribe links inside feed cards are *text-only*
orange — no background fill — to keep the feed visually quiet while
still flagging conversion surfaces. Verified-author badges use a 10%
brand tint as background with the brand color as text — the only place
the brand appears as a soft fill.

## Do's and Don'ts

- **Do** ship body in serif (Spectral). The serif body is the brand,
  not a stylistic flourish.
- **Do** keep chrome in `system-ui`. The split between sans-on-chrome
  and serif-on-body is what reads as "publication, not feed".
- **Do** reserve `#ff6719` for primary action and identity surfaces —
  Subscribe, Create, the wordmark, verified badges. Single-accent
  discipline.
- **Don't** swap Spectral for Inter or Söhne. The body serif is the
  editorial signal; replacing it collapses the brand into "another
  social product".
- **Don't** apply the orange as a full background or page tint — it's
  saturated enough that it overwhelms at scale.
- **Don't** introduce drop shadows on feed rows. Borders carry the
  feed; shadows belong to floating compose UI only.
