---
name: Lovable
tagline: Pink-into-violet gradient on white — vibe-coding dressed in playful, friendly chromatics.
author: webdesignhot
source_url: https://lovable.dev
spec: design.md/v1
quality: curated
featured: false
categories: [ai, dev-tools]
tags: [light, sans, soft, playful, bright, warm, multi-theme]
preview_swatch: ['#ffffff', '#ff66c4', '#9b6bff']
related: [cursor, vercel, framer]
description: 'Lovable''s site sells "build apps by chatting" with a deliberately friendly chromatic system: pure white canvas, a hot pink-to-violet gradient (`#ff66c4` → `#9b6bff`) for the brand mark and primary CTA, soft Inter at sensible sizes, and big rounded super-ellipse cards. Where most AI coding tools lean dark and serious, Lovable leans bright, warm, and human — the visual equivalent of "no, really, this is approachable".'

colors:
  bg: '#ffffff'                # white canvas
  bg-soft: '#fafafb'           # secondary surface
  surface: '#f4f5f8'           # card base
  surface-strong: '#ebedf2'    # hover
  text: '#1a1a23'              # near-black with violet cast
  text-strong: '#0a0a14'       # display copy
  text-muted: '#6b6e7d'        # secondary copy
  brand: '#ff66c4'             # gradient start — hot pink
  brand-mid: '#c068dd'         # gradient mid — magenta
  brand-end: '#9b6bff'         # gradient end — soft violet
  brand-solid: '#a665ff'       # solid brand collapse for single-colour contexts
  brand-hover: '#8f54f0'
  accent-cream: '#fff1e6'      # warm tonal background used in hero illustrations
  accent-mint: '#bdf3d8'       # secondary illustration accent
  on-brand: '#ffffff'
  border: '#0000000f'          # 6% black hairline (very soft)
  border-strong: '#0000001a'   # 10% black

typography:
  display:
    family: 'Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [500, 600, 700, 800]
  body:
    family: 'Inter, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500]
  mono:
    family: '"JetBrains Mono", "Geist Mono", ui-monospace, Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    h1:    { size: 72, weight: 700, lineHeight: 1.05, tracking: '-0.03em' }
    h2:    { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.02em' }
    h3:    { size: 24, weight: 600, lineHeight: 1.3,  tracking: '-0.005em' }
    body:  { size: 17, lineHeight: 1.55 }
    label: { size: 13, weight: 500 }

radius:
  xs: 6
  sm: 10
  md: 14
  lg: 20
  card: 24             # generous super-ellipse cards
  xl: 32
  button: 14
  pill: 9999

layout:
  container: 1200
  gutter: 24
  rhythm: 8

components:
  button-primary: 'Gradient `#ff66c4 → #9b6bff` fill, white text, 14px radius, 600 weight Inter. Often pulses or shimmers on hover.'
  button-secondary: 'Soft `#f4f5f8` fill with dark text, identical 14px radius. No border — Lovable favours fill over outline.'
  card: 'Generously rounded 24px super-ellipse on `#f4f5f8`, with a 6% black hairline. Many cards include a small inline emoji or coloured glyph.'
  prompt-bar: 'Large rounded input (~20px radius) with a gradient send button on the right; placeholder is a sample app idea.'
  template-tile: 'Square-ish 24px-radius preview card showing a generated app screenshot, hovered to reveal a "Remix" CTA.'
  nav: 'Quiet white sticky bar with the gradient logo lockup and a single gradient CTA pinned right.'

lineage:
  summary: |
    Lovable is positioned at the friendliest end of the AI-coding-tool
    spectrum, and the chromatics commit hard to that posture. Where
    Cursor leans into a dark editor aesthetic and v0 stays
    monochromatic, Lovable runs a hot pink-to-violet gradient
    (`#ff66c4` → `#9b6bff`) across its primary CTA, brand mark, and
    section accents — a chromatic move much closer to a consumer app
    than a dev tool. The canvas stays clean white with soft `#f4f5f8`
    cards lifted on a 6% black hairline (no shadows, no borders bigger
    than a hint), and Inter carries the entire type system at sensible
    web sizes. The shape language is deliberately rounded — 24px
    super-ellipse cards, 14px buttons, 20px prompt inputs — which
    completes the "approachable" message the gradient starts. Warm
    illustration accents (`#fff1e6` cream, `#bdf3d8` mint) punctuate
    feature sections without competing with the brand gradient. The
    aesthetic lineage runs through Framer's friendly purple, Linear's
    rounded discipline, and the "vibe-coding" generation of tools
    (v0, bolt, magic patterns) that emerged in 2024 — but Lovable
    pushes friendliness further than any of its peers.
  influences:
    - name: Framer
      role: Friendly purple-leaning gradient + rounded card vocabulary aimed at non-developers building products.
      url: https://www.framer.com
    - name: Linear
      role: Rounded card discipline and quiet hairline borders without shadows.
      url: https://linear.app
    - name: v0 / bolt.new
      role: The 2024 "vibe-coding" cohort that established the prompt-bar-as-hero pattern Lovable refines.
      url: https://v0.dev
---

## Overview

Lovable's site argues that you can build a real app by chatting, and
the visual posture has to make that feel possible — not intimidating,
not enterprise-coded, not dark-mode-serious. The answer is a deeply
friendly chromatic system: pure white canvas, a pink-to-violet gradient
(`#ff66c4` → `#9b6bff`) doing all the brand work, and generous 24px
rounded cards that look like consumer-app surfaces.

The hero is anchored on a large rounded prompt input — *what should
we build today?* — with a gradient send button on the right, and the
section below it shows template tiles of pre-built apps you can remix.
The whole page reads as an invitation, not a spec sheet.

## Colors

- **bg** `#ffffff` — clean white canvas, the friendly default
- **bg-soft** `#fafafb` — secondary surface for stripe sections
- **surface** `#f4f5f8` — card and panel base, soft cool grey
- **text-strong** `#0a0a14` — display copy with a slight violet cast
- **text** `#1a1a23` — primary body
- **text-muted** `#6b6e7d` — secondary copy
- **brand gradient** `#ff66c4 → #c068dd → #9b6bff` — the defining brand mark and primary CTA fill
- **brand-solid** `#a665ff` — the gradient collapsed to a single hue for small marks
- **accent-cream** `#fff1e6` — warm illustration background
- **accent-mint** `#bdf3d8` — secondary illustration accent
- **border** `#0000000f` — 6% black, very soft hairline

## Typography

The display is **Inter** at 700 weight, sized 72px with `-0.03em`
tracking — bold enough to anchor the page, loose enough to stay
friendly rather than corporate. Inter's geometric humanist
letterforms keep the headline feeling approachable at large sizes.

Body type is the same Inter at 400/500, sized 17px on a 1.55 line-
height — slightly larger than the typical 16px web default to support
the "this is a tool for everyone, not just developers" message.

Code samples (rare on the marketing page, more common in docs) use
**JetBrains Mono** or Geist Mono on `#f4f5f8` cards.

## Layout

The container max-width is 1200px with 24px gutters and an 8px
rhythm. Hero takes the full viewport width, anchored on a large
gradient-bordered prompt input. Template grids run three or four
columns of square-ish 24px-radius preview tiles.

Vertical rhythm runs 80–120px between sections — generous, with each
band reading as a distinct chapter rather than a packed feature wall.

## Elevation & Depth

Depth is almost entirely tonal — cards lift through `#ffffff` →
`#f4f5f8` → `#ebedf2` ladder with a 6% black hairline. Shadows
appear only on the floating prompt-bar focus state, where a very soft
violet-tinted glow signals input. The aesthetic is flat-friendly,
not flat-clinical.

## Shapes

Radii ladder is 6/10/14/20/24/32 — Lovable runs noticeably rounder
than most dev tools. Buttons sit at 14px, cards at 24px super-ellipse,
prompt inputs at 20px. The shape vocabulary is what completes the
"approachable" promise the gradient starts.

## Components

The defining components are the **gradient prompt input** (rounded,
soft-bordered, with a gradient send button), the **gradient CTA**
(`#ff66c4 → #9b6bff` fill, white text, 14px radius), the **template
tile** (square-ish 24px card with an app screenshot and a "Remix"
hover state), and the **soft-grey feature card** with a small
emoji or coloured glyph inline. The nav is a quiet white bar with
the gradient logo lockup.

## Do's and Don'ts

- **Do** apply the gradient to the brand mark and the primary CTA — it''s the single chromatic decision the brand makes. Solid pink or solid violet alone reads as a different product.
- **Do** keep cards generously rounded (24px+); softer corners are a load-bearing part of the friendly posture.
- **Do** use Inter at 700 / `-0.03em` for hero headlines; lighter weights drift into anaemic territory at 72px.
- **Don''t** drop the gradient into a dark-mode canvas; Lovable''s entire posture depends on the white-canvas + bright-gradient contrast.
- **Don''t** introduce shadows on cards — depth here is tonal, with a single 6% black hairline.
- **Don''t** mix the warm cream / mint accents into CTAs; they belong to illustration, not action.
