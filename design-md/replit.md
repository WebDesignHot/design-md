---
name: Replit
tagline: Saturated turquoise on `#0e1525` ink — the cloud-IDE aesthetic with IBM Plex DNA and a JetBrains Mono soul.
author: webdesignhot
source_url: https://replit.com
spec: design.md/v1
quality: curated
featured: false
categories: [dev-tools, ai, saas]
tags: [dark, sans, mono, dense, structured, cool, bright]
preview_swatch: ['#0e1525', '#1fe0ea', '#f5f9fc']
related: [vercel, github, cursor]
description: 'Replit''s marketing site lives on a near-black `#0e1525` canvas with a single saturated turquoise `#1fe0ea` doing all the action work. The type system pairs a custom IBM Plex variant ("Replit Sans") with JetBrains Mono for code, and the layout leans dense and IDE-coded — feature grids that look like editor panes, terminal-green accents, and a generous use of code-as-illustration.'

colors:
  bg: '#0e1525'                # primary canvas — the iconic Replit ink
  bg-deep: '#0b1120'           # deeper modal / nested surface
  surface: '#1c2333'            # card / panel base
  surface-high: '#2b3245'       # hover and elevated panels
  surface-low: '#161e2e'        # subtle stripe / nested
  text: '#f5f9fc'              # primary body — near-white with cool cast
  text-strong: '#ffffff'       # display copy
  text-muted: '#9aa6b8'        # secondary copy
  text-soft: '#6c7891'         # caption / metadata
  brand: '#1fe0ea'             # signature Replit turquoise (cyan)
  brand-hover: '#3deef7'       # lighter hover
  brand-deep: '#0fb6c0'        # pressed
  accent-orange: '#ff8a3d'     # secondary warm accent (Bounty / community)
  accent-pink: '#f26d9f'       # tertiary used in Ghostwriter / AI moments
  accent-purple: '#9b6bff'     # AI-feature highlight
  on-brand: '#0e1525'          # dark text on cyan CTA — never white
  border: '#ffffff14'          # 8% white hairline
  border-strong: '#ffffff24'   # 14% white for elevated panels

typography:
  display:
    family: '"Replit Sans", "IBM Plex Sans", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: '"Replit Sans", "IBM Plex Sans", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500]
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400, 500, 600]
  scale:
    h1:    { size: 72, weight: 600, lineHeight: 1.05, tracking: '-0.025em' }
    h2:    { size: 48, weight: 600, lineHeight: 1.1,  tracking: '-0.02em' }
    h3:    { size: 28, weight: 600, lineHeight: 1.2,  tracking: '-0.01em' }
    body:  { size: 17, lineHeight: 1.5 }
    code:  { size: 14, family: mono, lineHeight: 1.55 }
    label: { size: 12, weight: 500, family: mono, tracking: '0.04em' }

radius:
  xs: 4
  sm: 6
  md: 8
  lg: 12
  card: 12
  xl: 16
  button: 8
  pill: 9999

layout:
  container: 1280
  gutter: 24
  rhythm: 8

components:
  button-primary: 'Cyan `#1fe0ea` background, dark `#0e1525` text — never white. 8px radius, 600 weight, 12–16px vertical padding.'
  button-secondary: 'Outlined — 1px `#ffffff24` border on the dark canvas, white text, identical radius.'
  card: '`#1c2333` panel with `#ffffff14` border, 12px radius. Often hosts a fake editor/terminal screenshot.'
  editor-frame: 'Faux IDE chrome — three macOS dots, tab strip, JetBrains Mono inside. The defining hero illustration.'
  badge: 'Mono-set pill in `#ffffff14` with cyan or orange dot — used for "NEW", "AI", "Beta" labels.'
  nav: 'Quiet `#0e1525` sticky bar with white logo and cyan CTA. No background blur — flat ink top to bottom.'

lineage:
  summary: |
    Replit's marketing aesthetic is what happens when an IDE escapes
    onto a landing page. The canvas is the iconic `#0e1525` near-black
    ink — slightly cooler than Linear's `#08090a`, slightly warmer
    than Vercel's pure black — and the brand colour is a saturated
    turquoise `#1fe0ea` that lights up the whole page from the CTA.
    The type system is house-customised: "Replit Sans" is a Plex-Sans
    derivative drawn for the brand, with JetBrains Mono as the
    inevitable companion for code samples and label-as-mono moments.
    Secondary accents — `#ff8a3d` orange (community / Bounty),
    `#f26d9f` pink, and `#9b6bff` purple (AI / Ghostwriter) — appear
    in feature-specific contexts but never on the main CTA, which is
    always cyan. The defining visual move is the **faux-IDE hero**:
    nearly every section anchors on a screenshot of an editor pane,
    terminal, or run output, with JetBrains Mono syntax-highlighted
    inside. The lineage runs through Vercel's dark-mode marketing
    discipline, Linear's flat-on-flat depth, and the cloud-IDE
    visual heritage that started with Cloud9 and StackBlitz — but
    Replit pushes harder on the *I write code in the browser* identity
    than any of them.
  influences:
    - name: IBM Plex / JetBrains Mono
      role: The two foundries that supply Replit''s entire typographic identity — Plex DNA in the sans, JetBrains Mono in the editor.
      url: https://www.jetbrains.com/lp/mono
    - name: Vercel
      role: Dark-mode marketing discipline — flat ink canvas, single saturated brand accent, generous code-block real estate.
      url: https://vercel.com
    - name: Cloud9 / StackBlitz
      role: Cloud-IDE visual heritage — chrome, tab strips, and terminal panes used as marketing imagery.
      url: https://stackblitz.com
---

## Overview

Replit's marketing site treats the IDE as the brand. The canvas is a
near-black `#0e1525` — the same colour the editor uses — and almost
every section anchors on a faux-editor screenshot with JetBrains Mono
glyphs inside. The brand colour is a saturated turquoise `#1fe0ea`
that does all the action work; secondary feature accents (orange,
pink, purple) appear in context but never compete for the CTA.

The type system is "Replit Sans" — a custom IBM Plex Sans derivative —
paired with JetBrains Mono. Headlines hit 72px in 600 weight with a
tight `-0.025em` tracking, giving the marketing a confident bulletin
quality.

## Colors

- **bg** `#0e1525` — the iconic Replit ink, the working canvas
- **bg-deep** `#0b1120` — deeper nested surface (modals, code blocks)
- **surface** `#1c2333` — card and panel base
- **surface-high** `#2b3245` — hover and elevated panels
- **text-strong** `#ffffff` — display copy at full white
- **text** `#f5f9fc` — primary body, near-white with cool cast
- **text-muted** `#9aa6b8` — secondary copy and metadata
- **brand** `#1fe0ea` — signature turquoise CTA, always with dark text on it
- **accent-orange** `#ff8a3d` — community / Bounty contexts
- **accent-purple** `#9b6bff` — AI / Ghostwriter highlights
- **border** `#ffffff14` — 8% white hairline rules

## Typography

The display is **Replit Sans** at 600 weight, sized 72px with a
`-0.025em` tracking — confident but not crushing. Replit Sans is a
custom Plex-Sans cut, so the slightly architectural Plex feel
survives even at hero sizes.

Body type is the same Replit Sans at 400/500, sized 17px on a 1.5
line-height. The font stack falls back to IBM Plex Sans, then to
system sans, preserving the brand voice across browsers.

The mono is **JetBrains Mono** — used for code blocks, terminal
screenshots, and the small all-caps label moments at 12px with
`0.04em` tracking. JetBrains Mono's unmistakable letterforms
(zero with a dot, ligatures on `=>`, distinctive `g`) are part of
Replit's brand fingerprint as much as the cyan is.

## Layout

The container max-width is 1280px with 24px gutters and an 8px rhythm.
Sections are dense by marketing standards — Replit packs more
information per scroll than Vercel or Linear, in keeping with the
"this is a tool for builders" positioning. Hero bands often have a
faux-IDE screenshot taking 60% of the horizontal space.

Vertical rhythm runs 96–120px between sections. Feature grids are
typically three-column with `#1c2333` cards.

## Elevation & Depth

Depth is achieved through the surface ladder (`#0b1120` → `#0e1525` →
`#1c2333` → `#2b3245`) and 8–14% white hairlines (`#ffffff14`,
`#ffffff24`). Shadows are minimal — when they appear, they're
soft cool blacks beneath the faux-IDE screenshots, used to lift the
"app" out of the page. Cards themselves are flat-on-flat.

## Shapes

Radii ladder is 4/6/8/12/16. Buttons land at 8px, cards at 12px, and
the faux-IDE chrome at 12px to mimic a macOS window. Pills (`9999`)
appear on tags and badges. There are no fully-rounded CTAs — the
shape vocabulary stays rectangular, like an editor.

## Components

The defining components are the **cyan CTA** (`#1fe0ea` background,
`#0e1525` dark text — never white), the **faux-IDE hero illustration**
(macOS dots, tab strip, JetBrains Mono inside), the **mono badge** in
`#ffffff14` with a coloured dot (cyan / orange / purple) for status
labels, and the **dense feature card** on `#1c2333` with a hairline
border. The nav is a quiet sticky bar with the cyan CTA pinned right.

## Do's and Don'ts

- **Do** put dark `#0e1525` text on the cyan CTA — never white. The contrast is what makes the turquoise read as electric.
- **Do** use JetBrains Mono everywhere code or label appears; it''s a brand fingerprint, not a placeholder.
- **Do** anchor sections on faux-IDE screenshots — the "you''re looking at a real editor" illusion is core to the marketing.
- **Don''t** mix the secondary accents (orange / pink / purple) into the main CTA. Cyan owns the action layer; everything else is contextual highlight.
- **Don''t** lift cards with shadows; depth is the surface ladder plus a hairline.
- **Don''t** drift into pure black `#000000` — Replit''s `#0e1525` is intentionally a navy-ink, not a black, and the cyan reads warmer against it.
