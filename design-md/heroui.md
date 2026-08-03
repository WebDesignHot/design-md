---
name: HeroUI
tagline: 'Neutral component-library canvas with Inter type, blue pills, soft controls, and a live UI sample board.'
updated_at: 2026-07-09T12:55:00+12:00
published_at: 2026-07-09T12:55:00+12:00
author: webdesignhot
source_url: https://www.heroui.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [design-tools, dev-tools]
tags: [light, components, sans, open-source, ui-library]
preview_swatch: ['#f7f7f7', '#006fee', '#171717']
related: [shadcn-ui, tailwindcss, storybook]
description: 'HeroUI is a component-library showcase built from near-neutral surfaces, Inter typography, blue primary pills, soft gray controls, and a dense live sample board that demonstrates buttons, forms, tabs, color swatches, and account cards in one coherent system.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-cyan
  muted: text-muted
  border: border
  ring: brand
colors:
  bg: '#f7f7f7'
  bg-soft: '#fafafa'
  surface: '#ffffff'
  surface-muted: '#f1f1f1'
  surface-control: '#eeeeee'
  text: '#171717'
  text-muted: '#71717a'
  text-soft: '#8d8d95'
  text-faint: '#a1a1aa'
  brand: '#006fee'
  brand-hover: '#005bc4'
  brand-soft: 'rgba(0, 111, 238, 0.15)'
  accent-pink: '#ff81b9'
  accent-rose: '#ff8289'
  accent-orange: '#ff9a00'
  accent-yellow: '#dcbe00'
  accent-green: '#72db5a'
  accent-cyan: '#00d7ff'
  accent-sky: '#5dbfff'
  accent-violet: '#a8abff'
  border: '#e4e4e7'
  border-subtle: 'rgba(228, 228, 231, 0.65)'
  border-strong: '#d4d4d8'
  focus: '#006fee'
  success: '#17c964'
  warning: '#f5a524'
  danger: '#f31260'
  on-brand: '#ffffff'
typography:
  display:
    family: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [600, 700, 800]
  body:
    family: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    hero-display: { size: 48, weight: 700, lineHeight: 1, tracking: '-0.025em', family: display }
    display: { size: 40, weight: 700, lineHeight: 1.08, tracking: '-0.02em', family: display }
    h1: { size: 36, weight: 700, lineHeight: 1.1, tracking: '-0.015em', family: display }
    h2: { size: 28, weight: 700, lineHeight: 1.18, tracking: '-0.01em', family: display }
    h3: { size: 20, weight: 600, lineHeight: 1.25, tracking: '0', family: body }
    body-lg: { size: 20, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    nav: { size: 14, weight: 400, lineHeight: 1.3, tracking: '0', family: body }
    button: { size: 14, weight: 500, lineHeight: 1.2, tracking: '0', family: body }
radius:
  micro: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 48, 64, 96]
layout:
  page-width: 1350
  prose-width: 720
  header-height: 56
  hero-max-width: 960
  component-board-width: 1220
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'disable component board shimmer and hover lift'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536
components:
  button-primary:
    bg: brand
    text: on-brand
    radius: 24
    padding: '9px 18px'
    use: 'Get started and main component actions'
  button-secondary:
    bg: transparent
    text: text
    border: border
    radius: 24
    padding: '9px 18px'
    use: 'View components and secondary actions'
  search-field:
    bg: surface-control
    text: text-muted
    radius: 12
    padding: '8px 12px'
    use: 'header command search'
  release-chip:
    bg: brand-soft
    text: brand-hover
    radius: 9999
    padding: '4px 12px'
    use: 'version and release pill'
  component-card:
    bg: surface
    border: border-subtle
    radius: 16
    padding: 24
    use: 'forms, account cards, sample panels'
lineage:
  summary: 'HeroUI is a UI-library homepage that proves its own component defaults. The brand is intentionally neutral, with blue reserved for primary actions and the sample board doing most of the persuasion.'
  influences:
    - { name: 'Component documentation', role: 'docs-first nav and search' }
    - { name: 'Design-system playgrounds', role: 'live board of inputs, tabs, toggles, and cards' }
    - { name: 'Open-source library sites', role: 'star count, release chip, install-oriented CTAs' }
---

## 1. Visual Theme & Atmosphere

HeroUI is a restrained component showcase. The palette is mostly neutral, the type is Inter, and the design earns trust by showing a dense board of working UI parts instead of relying on marketing illustration.

The hero is compact: a release pill, a two-line headline, a short description, and two primary actions. The component board below carries the brand personality through colors, controls, and states.

**Key Characteristics**
- Near-white page background.
- Inter for all roles.
- Blue primary pills.
- Soft gray search and theme controls.
- Rounded release chip.
- Color swatches across the component board.
- Live UI examples: forms, verification code, toggles, tabs, account cards.
- Open-source proof through GitHub star count and release messaging.

## 2. Color Palette & Roles

HeroUI starts with `bg #f7f7f7`, `surface #ffffff`, and `surface-control #eeeeee`.

Text uses `text #171717`, with `text-muted #71717a` and `text-soft #8d8d95` for supporting labels.

The primary brand action is `brand #006fee`, used on the audited `Get started` button. `brand-soft rgba(0, 111, 238, 0.15)` is used for release chips and subtle callouts.

The sample board uses a broad accent row: pink, rose, orange, yellow, green, cyan, sky, and violet. These are demonstration accents, not global brand colors.

## 3. Typography Rules

| Role | Font | Size | Weight | Notes |
| --- | --- | ---: | ---: | --- |
| Hero | Inter | 48 | 700 | Two-line split, strong but not huge |
| Display | Inter | 40 | 700 | Section headlines |
| H1 | Inter | 36 | 700 | Page titles |
| H2 | Inter | 28 | 700 | Component groups |
| H3 | Inter | 20 | 600 | Card titles |
| Body large | Inter | 20 | 400 | Hero support |
| Body | Inter | 16 | 400 | Standard text |
| Button | Inter | 14 | 500 | Component controls |

Keep letterforms familiar and system-like. The brand is about default component quality, so typography should feel dependable.

## 4. Component Stylings

Buttons use rounded 24px pills in blue or transparent outline states. Secondary buttons should read as quiet peers, not disabled controls.

Search fields are soft gray rounded rectangles with command hints. Release chips are blue-tinted pills with small text.

The component board should include actual UI primitives: inputs, checkboxes, switches, segmented tabs, code-like verification boxes, price sliders, and social/account cards.

## 5. Layout Principles

Use a centered hero with a wide component board below. The board can feel like a live playground, with multiple UI modules aligned to a consistent grid.

Keep the header fixed-height and efficient. This is a developer tool page; information density is acceptable when the spacing is consistent.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | ---: | --- |
| Micro | 4 | tiny indicators |
| Small | 8 | small chips, color dots |
| Medium | 12 | search field, inputs |
| Large | 16 | cards and panels |
| Extra large | 24 | buttons, pills, modal corners |
| Pill | 9999 | release chips and badges |

HeroUI's radius language is exactly the component-library middle ground: soft, but never cartoonish.

## 7. Depth & Elevation

Depth is very subtle. Use border and background difference first, then light shadow for floating cards such as modal and account panels.

Avoid dramatic shadow stacks. The UI should look like default components that can survive in real apps.

## 8. Interaction & Motion

Interactions should be crisp: 120ms for hover and 200ms for state transitions. Component samples can animate because they demonstrate a library, but motion should remain practical.

Hover on buttons can deepen the blue. Cards can lift by 1-2px, not more.

## 9. Accessibility & A11y

Blue action buttons with white text are readable. Gray labels should not fall below `#71717a` on the near-white background for small text.

Since the system showcases components, keyboard focus must be visible on every input, tab, switch, and button.

## 10. Responsive Behavior

On mobile, stack the hero actions and collapse the component board into horizontally scrollable modules. Preserve real component proportions instead of forcing every panel into a single column.

The header can reduce to logo, search trigger, theme toggle, and menu.

## 11. Content & Voice

HeroUI's voice is direct and developer-oriented: beautiful by default, customizable by design. It should explain speed, consistency, and flexibility.

Use words like components, themes, React, native, accessible, customizable, and open source.

## 12. Dark Mode & Theming

The audited page is light, but HeroUI includes theme controls. A dark theme should invert to near-black surfaces while keeping the same blue primary and the same accent swatch spectrum.

Do not make dark mode a different brand. It should be the same component defaults under different tokens.

## 13. Lineage & Influences

HeroUI inherits from component libraries, documentation sites, and Tailwind-era UI kits. The design's proof is not a big illustration; it is the component board itself.

The brand uses neutrality as a promise: these defaults can drop into many applications without fighting the product.

## 14. Do's and Don'ts

Do use Inter. Do keep the page neutral. Do show real components. Do reserve blue for primary action and focus. Do keep the release chip visible but quiet.

Do not overbrand every component. Do not use heavy marketing gradients. Do not hide the component board. Do not use exotic type that would undermine the library-default promise.

## 15. Agent Prompt Guide

When generating HeroUI-like UI, ask for a neutral component-library homepage with Inter typography, a compact centered hero, blue pill CTAs, soft gray command search, release chip, and a large live component playground.

The page should prove that the default UI components are attractive before asking the user to read documentation.
