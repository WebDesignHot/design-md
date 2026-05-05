---
name: AgentKit
tagline: Three swappable themes for AI agent products — editorial dark, daylight bright, fintech cool-blue.
author: webdesignhot
source_url: https://agentkit.webdesignhot.com
spec: design.md/v1
quality: curated
featured: true
categories: [dev-tools, ai]
tags: [dark, light, bright, cool, multi-theme, mono, serif, minimal]
preview_swatch: ['#0a0a0a', '#c6f432', '#06b6d4']
related: [webdesignhot]
description: 'Landing page kit for AI agent products. Swap between three themes via a single data-theme attribute — same component library renders identically in editorial-dark (acid-lime on near-black), bright (warm-emerald on off-white), and cool-blue (cyan on slate).'

lineage:
  summary: |
    AgentKit extends webdesignhot's editorial-dark canvas into a
    three-theme system inspired by Vercel's Geist (themed but locked to a
    single component library) and Linear's spatial restraint. The chat-hero
    + agent-trace-viewer + tool-call-panel anchor components are the kit's
    own contribution — there's no reference for "agent product landing
    page" yet, so the kit defines the genre. The cool-blue theme borrows
    its palette discipline from Stripe (deep navy + violet accent) for
    fintech-adjacent products; the bright theme tracks Resend's clean
    daylight feel. Type system is unchanged across themes — only color
    swaps — proving that hierarchy comes from size and tracking, not hue.
  influences:
    - name: webdesignhot
      role: Source canvas, type voices, em-as-token rule
      url: https://www.webdesignhot.com/design.md/webdesignhot
    - name: Vercel Geist
      role: Themed but unified component library pattern
      url: https://vercel.com/geist/introduction
    - name: Linear
      role: Spatial restraint, dense agent-product surfaces
      url: https://linear.app
    - name: Stripe
      role: Cool-blue palette discipline (fintech-grade calm)
      url: https://stripe.com
    - name: Resend
      role: Bright theme's daylight clarity
      url: https://resend.com

themes:
  default: editorial-dark
  available: [editorial-dark, bright, cool-blue]
  switch-via: 'data-theme attribute on <html>; persisted in localStorage'

colors:
  editorial-dark:
    bg: '#0a0a0a'
    bg-elev: '#0f0f0f'
    bg-card: '#141416'
    bg-card-hover: '#1a1a1c'
    text: '#ededed'
    text-dim: '#8a8a8a'
    text-faint: '#525252'
    brand: '#c6f432'
    brand-tint: 'rgba(198, 244, 50, 0.10)'
    border: 'rgba(255, 255, 255, 0.08)'
    border-strong: 'rgba(255, 255, 255, 0.15)'
    border-brand: 'rgba(198, 244, 50, 0.25)'
    success: '#22c55e'
    warning: '#f59e0b'
    danger: '#ef4444'
  bright:
    bg: '#fafafa'
    bg-elev: '#ffffff'
    bg-card: '#ffffff'
    bg-card-hover: '#f5f5f5'
    text: '#0a0a0a'
    text-dim: '#525252'
    text-faint: '#a3a3a3'
    brand: '#16a34a'
    brand-tint: 'rgba(22, 163, 74, 0.08)'
    border: 'rgba(0, 0, 0, 0.08)'
    border-strong: 'rgba(0, 0, 0, 0.15)'
    border-brand: 'rgba(22, 163, 74, 0.25)'
    success: '#16a34a'
    warning: '#d97706'
    danger: '#dc2626'
  cool-blue:
    bg: '#0b1120'
    bg-elev: '#111827'
    bg-card: '#1a2233'
    bg-card-hover: '#212a3e'
    text: '#f1f5f9'
    text-dim: '#94a3b8'
    text-faint: '#64748b'
    brand: '#06b6d4'
    brand-tint: 'rgba(6, 182, 212, 0.10)'
    border: 'rgba(148, 163, 184, 0.12)'
    border-strong: 'rgba(148, 163, 184, 0.20)'
    border-brand: 'rgba(6, 182, 212, 0.30)'
    success: '#10b981'
    warning: '#f59e0b'
    danger: '#f87171'

typography:
  display:
    family: 'Inter Variable, Inter, -apple-system, sans-serif'
    weights: [400, 500]
    feature-settings: "'ss01', 'cv11'"
  serif:
    family: 'Instrument Serif, Iowan Old Style, Georgia, serif'
    style: italic
    weight: 400
    role: '<em>-tag accent inside display headlines'
  mono:
    family: 'JetBrains Mono Variable, JetBrains Mono, ui-monospace, monospace'
    weights: [400, 500]
    role: 'tool args, code blocks, status labels, metadata'
  scale:
    display-hero:   { size: 72, weight: 500, lineHeight: 0.98, tracking: -0.035 }
    h2-large:       { size: 56, weight: 500, lineHeight: 1.05, tracking: -0.025 }
    h2:             { size: 40, weight: 500, lineHeight: 1.05, tracking: -0.025 }
    h3:             { size: 22, weight: 500, lineHeight: 1.30, tracking: -0.015 }
    body-lead:      { size: 17, weight: 400, lineHeight: 1.55, tracking: -0.01 }
    body:           { size: 15, weight: 400, lineHeight: 1.65, tracking: -0.005 }
    body-small:     { size: 13, weight: 400, lineHeight: 1.55, tracking: -0.005 }
    label-mono:     { size: 11, weight: 500, lineHeight: 1.4,  tracking: 0.15, family: mono, transform: uppercase }
    code-inline:    { size: 12, weight: 400, lineHeight: 1.6,  family: mono }

spacing:
  base: 4
  scale: [4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96, 128]

radius:
  small: 6
  standard: 8
  comfortable: 12
  card: 16
  hero: 24

layout:
  page-width: 1200
  prose-width: 800

motion:
  ease: 'cubic-bezier(0.4, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320

components:
  chat-hero:
    role: 'streaming chat panel inline in hero — agent answering a debugging question'
    backgroundColor: bg-card
    border: border
    rounded: card
    streaming-cursor: 'lime "▋" character with cursor-blink animation'
  agent-trace-viewer:
    role: 'expandable multi-step reasoning chain'
    backgroundColor: bg-card
    rounded: card
    expand-anim: 'accordion-down/up with --radix-accordion-content-height'
  tool-call-panel:
    role: 'visualized tool invocation prompt → calling → result → final'
    phases: [prompt, calling, result, final]
  primary-button:
    backgroundColor: brand
    textColor: bg
    rounded: standard
    use: 'commerce CTA, hero "Get AgentKit"'
  ghost-button:
    backgroundColor: transparent
    border: border-strong
    rounded: standard

stack:
  framework: 'Next.js 16 (App Router, Turbopack, React Compiler)'
  ui-runtime: React 19
  styling: 'Tailwind CSS 4 (CSS-first config, @theme directive)'
  ai-sdk: 'Vercel AI SDK v6'
  primitives: 'Radix UI (accordion, dialog, slot, tabs, tooltip)'
  fonts: '@fontsource — Inter Variable, Instrument Serif, JetBrains Mono Variable'
---

## Overview

AgentKit is a **landing page kit for AI agent products** — built around the
visual primitives that AI agent products actually need (streaming chat,
agent trace viewer, tool-call visualizer, multi-step reasoning panels)
rather than retrofitting a generic SaaS template.

The system is **theme-swappable from day one**: the same component library
renders identically in three palettes — `editorial-dark` (default,
acid-lime on near-black), `bright` (warm-emerald on off-white), and
`cool-blue` (cyan on slate). Theme switches via a single `data-theme`
attribute on `<html>`, persisted in `localStorage`, applied
synchronously before paint to prevent FOUC.

Type system is **three voices**: Inter for display and UI, Instrument
Serif italic for editorial accents (only inside `<em>`), JetBrains Mono
for tool args, code blocks, and metadata labels. Display weight stays at
500 — hierarchy comes from size and tracking, not boldness.

## Colors

The system has three palettes — pick one, swap them by changing
`data-theme` on `<html>`. Each palette defines the same role-based
tokens; component code never references hex values directly, only
`var(--color-*)` references.

**editorial-dark** — pure black `#0a0a0a` with `#c6f432` acid-lime accent.
Magazine-grade contrast; CTAs feel like physical buttons. The accent is
**only** used as solid CTA fills, status dots, focus rings, and selection
background — never as a gradient or glow.

**bright** — `#fafafa` background with `#16a34a` warm emerald accent.
Same contrast geometry as editorial-dark inverted; type weights and sizes
are unchanged.

**cool-blue** — `#0b1120` slate background with `#06b6d4` cyan accent.
Slightly cooler text tones to match. Tuned for fintech / data-tooling /
observability adjacent products.

## Typography

**Display** sets at 72px max with `-0.035em` tracking. Headlines tighten
as they grow; this reverses default browser behavior and produces the
"engineered" feel.

**Body** runs at 15px / 1.65 line-height. Lead paragraphs (hero
subtitles) use 17px / 1.55. Reading width is capped at `prose-width`
(800px).

**`<em>` is a design token, not grammar.** It renders as Instrument
Serif italic in brand color. Editorial copy uses it to punctuate display
headlines (`Ship your AI agent's landing page <em>this afternoon</em>`).

**Streaming cursor** is a lime `▋` character with a 1s step-end blink
animation, applied via `.cursor-blink::after`. It only appears during
active stream — gone the moment the agent finishes speaking.

## Layout

Single-column hero followed by full-width sections, all capped at
`page-width` (1200px). Asymmetric splits appear where one side deserves
visual primacy: hero is `1fr 1fr`, streaming features `1.4fr 1fr`, trace
viewer `1fr 1fr`, tool-call `1.4fr 1fr`. Section rhythm is 96px desktop,
64px mobile.

## Elevation & Depth

**Tonal stacking, not shadows.** The 4-tier surface scale (bg →
bg-elev → bg-card → bg-card-hover) provides implicit depth. Drop
shadows are reserved for floating UI primitives only (Tooltip, Popover,
Dialog, Toast). Cards use borders, not shadows, to define edges.

## Shapes

Six radius tiers: `small` (6px) for inputs, `standard` (8px) for buttons,
`comfortable` (12px) for FAQ rows, `card` (16px) for content cards,
`hero` (24px) for large callouts. Pure-zero radius is forbidden except
on full-bleed dividers.

## Components

The kit ships **65 components total** (48 AI-native + 17 UI primitives)
plus **9 composed landing sections**. Anchor AI components: `<ChatHero>`
(streaming), `<AgentTraceViewer>` (multi-step reasoning), `<ToolCallPanel>`
(4-phase animation), `<StreamingText>`, `<MessageBubble>`,
`<ModelSelector>`. Section components compose primitives into ready-to-ship
layouts.

## Do's and Don'ts

**Do** use `<em>` for italic-serif accents inside display headlines.
**Do** pick one theme before shipping production. **Do** keep `<Label>`
mono uppercase rhythm at every section. **Do** use the supplied keyframes
(`accordion-down`, `accordion-up`, `cursor-blink`, `fade-in-up`).

**Don't** introduce a second accent color per theme. **Don't** use
`brand` as a gradient or glow — solid only. **Don't** `box-shadow` cards
for depth — use `bg-card-hover` and `border-strong` instead. **Don't**
hard-code hex values in components — always `var(--color-token)`.
**Don't** ship with the theme switcher visible to your end users.
