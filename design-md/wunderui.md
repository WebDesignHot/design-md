---
name: WunderUI
tagline: The agentic design system — React and Figma from one source, with rules your AI agent follows.
updated_at: 2026-10-10T14:00:00+02:00
published_at: 2026-10-10T14:00:00+02:00
author: WunderUI
author_url: https://wunderui.com
source_url: https://wunderui.com
spec: webdesignhot/0.2
profile: catalog
quality: curated
categories: [design-tools, dev-tools, saas]
tags: [light, dark, minimal, sans, indigo, dashboard, ai, data-dense]
preview_swatch: ['#ffffff', '#555cf3', '#000000']
description: 'WunderUI is a design system for SaaS dashboards and AI products that ships the same components, tokens and rules in Figma and React. White cards on a near-white canvas, one indigo accent `#555CF3`, hairline borders and tint badges carry the look; everything else is decided by tokens and written rules, so a coding agent that reads them produces the same visual language every time.'

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  border: border
  ring: ring
  muted: text-dim
  danger: danger
colors:
  # Grounds
  bg: '#ffffff'                  # page and card surface
  canvas: '#f9fbfc'              # tinted canvas behind cards in product screens
  surface: '#ffffff'
  muted: '#f1f5f7'               # muted fills, code boxes
  # Lines
  border: '#f1f5f7'              # 1px hairline on cards and dividers
  border-control: '#d9e1e7'      # plain buttons, segmented controls
  input: '#7694ad'               # form-field rim, 3:1 against every ground
  # Text
  text: '#000000'
  text-dim: '#454648'            # body copy
  text-faint: '#6e6e70'          # meta, captions
  # Brand
  brand: '#555cf3'               # primary action, focus, main chart series
  brand-soft: '#999df8'          # dark-mode ring, secondary series
  on-brand: '#ffffff'
  ring: '#555cf3'
  link: '#555cf3'
  # Status
  success: '#1ad598'
  warning: '#faca4a'
  text-warning: '#64511e'
  danger: '#d42a2d'
  on-danger: '#ffffff'

typography:
  display:
    family: 'Inter, system-ui, sans-serif'
    weights: [400, 600, 700]
  body:
    family: 'Inter, system-ui, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['tnum']  # tabular figures in KPIs, tables and charts
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, monospace'
    weights: [400]
  scale:
    display-xl:      { size: 60, weight: 400, lineHeight: 1.07, family: display }
    display-page:    { size: 50, weight: 600, lineHeight: 1.28, family: display }
    display-section: { size: 40, weight: 700, lineHeight: 1.2,  family: display }
    display-medium:  { size: 30, weight: 700, lineHeight: 1.2,  family: display }
    h1:              { size: 32, weight: 700, lineHeight: 1.25, family: body }
    h2:              { size: 24, weight: 600, lineHeight: 1.33, family: body }
    h3:              { size: 20, weight: 600, lineHeight: 1.4,  family: body }
    h4:              { size: 16, weight: 600, lineHeight: 1.5,  family: body }
    body-large:      { size: 16, weight: 400, lineHeight: 1.5,  family: body }
    body:            { size: 14, weight: 400, lineHeight: 1.43, family: body }
    body-emphasis:   { size: 14, weight: 500, lineHeight: 1.43, family: body }
    label-large:     { size: 16, weight: 500, lineHeight: 1.5,  family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.33, family: body }
    micro:           { size: 11, weight: 400, lineHeight: 1.45, family: body }
    code:            { size: 13, weight: 400, lineHeight: 1.54, family: mono }

radius:
  sm: 4
  md: 8
  lg: 12
  xl: 16
  2xl: 24
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64]

layout:
  navbar-height: 80
  sidebar-modes: 'six — docked, floating, inset, icon rail, overlay, off-canvas'
  section-gap: 32
  card-gap: 24
  card-padding: 20
  mobile-width: 390

components:
  button-primary:
    backgroundColor: '#555cf3'
    textColor: '#ffffff'
    rounded: md
    height: '36 / 40 / 44 / 48 / 56'
    font: '14px Inter 500 (large: 16px, xlarge: 18px)'
    focus: '1px ring #555cf3'
    use: 'the one primary action per view'
  button-plain:
    backgroundColor: '#ffffff'
    textColor: '#000000'
    border: '1px solid #d9e1e7'
    rounded: md
    height: '36 / 40 / 44 / 48 / 56'
    use: 'every other action — outline buttons are not used'
  card:
    backgroundColor: '#ffffff'
    border: '1px ring #f1f5f7'
    rounded: xl
    padding: 20
    shadow: 'shadow-xs at rest, shadow-md only when elevated'
    use: 'every content region on the canvas'
  input:
    backgroundColor: '#ffffff'
    textColor: '#000000'
    placeholderColor: '#6e6e70'
    border: '1px solid #7694ad'
    rounded: md
    height: 40
    focus: 'border #555cf3 + 1px ring'
  badge:
    rounded: pill
    font: '12px Inter 500'
    use: 'status as a light tint with dark text — green, yellow, red, blue, purple, pink, orange, indigo'
  metric-card:
    use: 'KPI value in tabular figures, trend chip, sparkline sitting on the card baseline'
  data-grid:
    use: 'search, sort, selection and pagination built in — never a hand-built table'

motion:
  duration-instant: 80
  duration-fast: 150
  duration-base: 250
  duration-slow: 350
  duration-deliberate: 450
  duration-ambient: 700
  ease-entrance: 'cubic-bezier(0.22, 1, 0.36, 1)'
  ease-exit: 'cubic-bezier(0.4, 0, 1, 1)'
  ease-move: 'cubic-bezier(0.65, 0, 0.35, 1)'
  ease-overshoot: 'cubic-bezier(0.34, 1.35, 0.64, 1)'
  travel: '2 / 4 / 8 / 16 px'
  reduced-motion: 'opt-in — animations live inside prefers-reduced-motion: no-preference, the still state is the default'

breakpoints:
  mobile: 390
  tablet: 768
  desktop: 1024
  wide: 1440

accessibility:
  contrast: 'every token pair meets WCAG AA in light and dark, including text on tints'
  focus-ring: '1px #555cf3 line on every interactive control'
  primitives: 'Base UI for keyboard and screen-reader behaviour'
  reduced-motion-honored: true

dark-mode: 'first-class — a .dark class swaps every token; components never carry their own dark colours'

colors-dark:
  bg: '#17181a'
  canvas: '#17181a'
  surface: '#1c1d20'
  muted: '#323438'
  border: '#323438'
  border-control: '#323438'
  input: '#6e6e70'
  text: '#ffffff'
  text-dim: '#d1d1d1'
  text-faint: '#a2a3a3'
  brand: '#555cf3'
  on-brand: '#ffffff'
  ring: '#999df8'
  success: '#1ad598'
  text-warning: '#fcdf92'
  danger: '#d42a2d'

lineage:
  summary: 'WunderUI keeps one source for design and code: the Figma library and the React package share component names, props and tokens, and the rules that bind them are written down for agents as well as people. It builds on unstyled accessible primitives, a utility layer for token mapping, an outline icon set and a neutral sans, and rejects decorative gradients in product UI, raw colour values and generic default motion.'
  influences:
    - name: 'Base UI'
      role: 'Unstyled, accessible component primitives under the React components'
      url: 'https://base-ui.com'
    - name: 'Tailwind CSS v4'
      role: 'Utility layer and the @theme token mapping'
      url: 'https://tailwindcss.com'
    - name: 'Lucide'
      role: 'Outline icon set'
      url: 'https://lucide.dev'
    - name: 'Inter'
      role: 'Typeface for product UI and the Figma library'
      url: 'https://rsms.me/inter/'
---

# WunderUI

## 1. Visual Theme & Atmosphere

WunderUI is a calm, data-dense product system for SaaS dashboards, internal tools and AI interfaces. White cards on a near-white canvas (`#F9FBFC`), one indigo accent and hairline borders do the structural work; colour is reserved for meaning — a status, a trend, the one primary action on a screen.

The mood is "quietly precise": generous but not airy spacing, rounded-xl cards, numbers set in tabular figures, and charts that sit flush on their baseline. It is built to be generated by coding agents, so the look depends on rules rather than taste — the same prompt produces the same visual language every time.

## 2. Color Palette & Usage

`bg` and `surface` are white in light mode; depth comes from the tinted canvas behind product screens and from 1 px borders (`#F1F5F7`), not from heavy shadows. `brand` (`#555CF3`, indigo) marks the primary action, focus rings, links, selected states and the main chart series — one primary button per view.

Text uses three steps: `text` (#000000) for headings and values, `text-dim` (#454648) for body copy, `text-faint` (#6E6E70) for meta and captions. Status colours appear as soft tints with dark text (green, yellow, red, blue, purple, pink, orange, indigo badges), never as large saturated fills. Every colour is a CSS variable; components never carry raw hex values.

## 3. Typography System

Inter throughout, in a closed scale of 23 styles: Display (60/64 to 30/36), Heading (32/40 to 16/24, semibold), Body 14/20 in four weights, Body Large 16/24, Caption 12/16 and Micro 11/16. Product UI lives at 14 px; 16 px is for reading text, display sizes only for page and marketing headings.

Numbers in KPIs, tables and charts use tabular figures so columns align. Labels are medium weight, never bold. No ad-hoc sizes: new screens pick from the scale.

## 4. Component Styling Patterns

Buttons come in five heights (36, 40, 44, 48, 56 px) and two everyday styles — primary (indigo fill) and plain (white with a 1 px control border, `#D9E1E7`). Outline buttons are not used. Cards are white with a 1 px hairline ring, `rounded-xl` (16 px radius), 20 px padding; buttons and fields use 8 px and a barely visible shadow; a stronger shadow appears only when a card floats.

Form fields have a 1 px rim (`#7694AD`, 3:1 against every ground) that turns indigo with a 1 px ring on focus. Badges are pills in light tint colours. Data components are composites with built-in states: `DataGrid` (search, sort, selection, pagination), `MetricCard` with sparkline and trend chip, `ChartCard` with a period segment, and agent components such as `RunTimeline`, `ApprovalCard` and `CostMeter`.

## 5. Layout & Spacing

A 4 px base with a working grid of 32 / 24 / 16 px: 32 px between page regions, 24 px between cards, 16–20 px inside them. Application screens use an app shell with a sidebar (six modes, from docked to icon rail) and an 80 px navbar.

Dashboards follow a fixed rhythm: a KPI row of 3–4 metric cards, a two-to-one row of chart and list, then a full-width table. Everything reflows to a single column at 390 px with no sideways scroll; every block ships a mobile variant.

## 6. Iconography

Lucide icons, outline style, 1.5 px stroke at 16–18 px in navigation and 16 px inside controls. Icons inherit `currentColor` and take their state from text colour, never from separate assets. AI actions use a single wand-sparkles glyph; brand logos appear only as monochrome marks in their own slots.

## 7. Motion & Animation

Motion is tokenised like colour. Six durations — instant 80 ms, fast 150 ms, base 250 ms, slow 350 ms, deliberate 450 ms, ambient 700 ms — and four curves: entrance (decelerate), exit (accelerate), move, and overshoot (once per screen at most). Entrances decelerate, exits are one step shorter.

Only `transform` and `opacity` animate; height opens via grid rows, never via `height`. Overlays travel 2–4 px, not 20. The headline (LCP element) never fades in. Reduced motion is opt-in: animations live inside `prefers-reduced-motion: no-preference`, so the still state is the default.

## 8. Imagery & Media

The product is the image: screenshots and live component previews instead of stock photography or illustration. Avatars are initials on soft tint circles or simple portraits. Charts carry the visual interest — area fills fade from the series colour, grids start at zero and the plot sits on the bottom grid line.

## 9. Accessibility

Every token pair meets WCAG AA contrast in light and dark mode, including text on tints. Focus is always visible: a 1 px indigo ring on every interactive control. Components are built on Base UI primitives for keyboard and screen-reader behaviour; colour never carries meaning alone (status badges have text, trends have arrows). Motion respects reduced-motion as described above.

## 10. Voice & Tone

Short, concrete and calm. Buttons say what happens ("Export", "Approve run", "Invite member"), errors say what failed and how to recover, empty states give one sentence and one action. No exclamation marks, no jokes in system messages, numbers with units and ISO currency codes.

## 11. Dark Mode

Dark mode is a `.dark` class that swaps token values, not a second palette per component: background `#17181A`, surfaces `#1C1D20`, borders `#323438`, text white with `#D1D1D1` and `#A2A3A3` for secondary and faint. Indigo stays the brand colour and the focus ring lightens to `#999DF8`; tints become deeper with lighter text. Components never write their own dark colours — the tokens carry both modes.

## 12. Lineage & Influences

**Name:** Base UI
**Role:** Unstyled, accessible component primitives under the React components
**URL:** https://base-ui.com

**Name:** Tailwind CSS v4
**Role:** Utility layer and the `@theme` token mapping
**URL:** https://tailwindcss.com

**Name:** Lucide
**Role:** Icon set
**URL:** https://lucide.dev

**Name:** Inter
**Role:** Typeface for product UI and the Figma library
**URL:** https://rsms.me/inter/

WunderUI keeps one source for design and code: the Figma library and the React package share component names, props and tokens. It rejects decorative gradients in product UI, raw colour values and generic default motion.

## 13. Do's & Don'ts

- Do use `bg-card`, `text-text-secondary`, `border-border` — don't write `#FFFFFF` or `bg-white dark:bg-zinc-900`.
- Do use `<DataGrid>` for tables — don't hand-build `<table>` markup that lacks sort, search and selection.
- Do animate with `duration-base ease-entrance` — don't write `transition-all duration-300 ease-in-out`.
- Do keep one primary button per view — don't make every action indigo.
- Do let charts end on their trend line and start their grid at 0 — don't float a sparkline above the trend chip.
- Do use tint badges for status — don't use saturated fills or colour alone.

## 14. Agent Prompt Guide

Read the rules before writing: WunderUI ships its DESIGN.md at https://wunderui.com/DESIGN.md and an MCP server (`npx -y wunderui-mcp`) with the component inventory, prop signatures, tokens and templates. Look up a composite before building one by hand; take props from the real signatures, never guess them.

Build from blocks: start a screen from the closest UI block or template, then add every data region's empty, loading and error state. Use only tokens for colour, radius and motion. Common traps: hex values, `dark:` variants, `transition-all`, fading in the headline, two primary buttons, and charts without a `loading` state.

## 15. Quick Reference

| Token | Light | Dark |
|---|---|---|
| bg | #FFFFFF | #17181A |
| surface | #FFFFFF | #1C1D20 |
| canvas | #F9FBFC | #17181A |
| border | #F1F5F7 | #323438 |
| control border | #D9E1E7 | #323438 |
| field rim | #7694AD | #6E6E70 |
| text | #000000 | #FFFFFF |
| text-dim | #454648 | #D1D1D1 |
| text-faint | #6E6E70 | #A2A3A3 |
| brand | #555CF3 | #555CF3 |
| focus ring | #555CF3 | #999DF8 |
| success | #1AD598 | #1AD598 |
| danger | #D42A2D | #D42A2D |
| radius | 16 px cards (`rounded-xl`), 8 px controls | |
| durations | 80 · 150 · 250 · 350 · 450 · 700 ms | |
| font | Inter, body 14/20 | |
