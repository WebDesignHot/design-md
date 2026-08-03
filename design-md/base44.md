---
name: Base44
tagline: 'Warm dotted builder canvas with orange actions, blue emphasis, and chunky Dazzed type.'
updated_at: 2026-07-08T21:18:00+12:00
published_at: 2026-07-08T21:18:00+12:00
author: webdesignhot
source_url: https://base44.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, dev-tools, saas]
tags: [light, structured, sans, ai, builder, dotted]
preview_swatch: ['#f9f8f6', '#ff773c', '#1e1e24']
related: [lovable-dev, v0-app, replit]
description: 'Base44 uses a warm dotted canvas, oversized Dazzed headlines, orange product actions, and a blue secondary accent to make app generation feel like a physical builder surface instead of a generic chat page.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: brand-secondary
  muted: text-muted
  border: border
  ring: brand
colors:
  bg: '#f9f8f6'
  bg-grid-dot: '#d9d5ce'
  surface: '#ffffff'
  surface-muted: '#eeeceb'
  surface-blue: '#3950e6'
  text: '#1e1e24'
  text-body: '#0f0f0f'
  text-muted: '#6d6a67'
  text-soft: '#686868'
  brand: '#ff773c'
  brand-hover: '#ff6424'
  brand-secondary: '#3950e6'
  cta-fill: '#312f2f'
  cta-text: '#ffffff'
  border: '#d9d5ce'
  border-subtle: 'rgba(217, 213, 206, 0.55)'
  focus: '#ff773c'
  success: '#1f7a43'
  warning: '#f6a21a'
  danger: '#d94b36'
  on-brand: '#0f0f0f'
typography:
  display:
    family: 'Dazzed, system-ui, -apple-system, sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'WixMadeforText, Geist, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero: { size: 92, weight: 600, lineHeight: 1.05, tracking: '-0.03em', family: display }
    display: { size: 64, weight: 600, lineHeight: 1.06, tracking: '-0.025em', family: display }
    h1: { size: 48, weight: 600, lineHeight: 1.1, tracking: '-0.02em', family: display }
    h2: { size: 36, weight: 600, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h3: { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    body-lg: { size: 20, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    nav: { size: 16, weight: 500, lineHeight: 1.5, tracking: '0', family: display }
    button: { size: 16, weight: 600, lineHeight: 1.3, tracking: '0', family: body }
radius:
  micro: 2
  sm: 6
  md: 8
  lg: 12
  xl: 20
  input: 12
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
layout:
  page-width: 1360
  prose-width: 760
  header-height: 86
  hero-max-width: 1120
  card-grid-min: 260
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 140
  duration-standard: 220
  duration-slow: 360
  reduced-motion: 'disable marquee and builder preview shifts'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536
components:
  button-primary:
    bg: cta-fill
    text: cta-text
    radius: 8
    padding: '9px 18px'
    use: 'header and final conversion action'
  button-action:
    bg: brand
    text: on-brand
    radius: 10
    padding: '12px'
    use: 'prompt submit, compact builder action'
  button-link:
    bg: transparent
    text: brand-secondary
    radius: 2
    use: 'special nav promotion such as Superagents'
  card:
    bg: surface
    border: border-subtle
    radius: 12
    padding: 24
  prompt-box:
    bg: surface
    border: transparent
    radius: 12
    shadow: '0 16px 44px rgba(49, 47, 47, 0.08)'
lineage:
  summary: 'Base44 combines no-code builder pragmatism with notebook-like dot-grid planning surfaces. The site borrows from app canvas tools, AI prompt boxes, and approachable startup typography, then warms the system with orange instead of the usual electric blue primary.'
  influences:
    - { name: 'No-code builder canvases', role: 'prompt-driven application composition' }
    - { name: 'Graph paper and dot-grid notebooks', role: 'background texture and construction metaphor' }
    - { name: 'AI app builders', role: 'large prompt surface as the primary interface' }
---

## 1. Visual Theme & Atmosphere

Base44 feels like a clean desk with a dotted planning sheet on top. The page is warm off-white rather than pure white, so the heavy black headline and dark CTA can sit on it without feeling sterile.

The brand signal is split: orange marks creation actions, while blue marks special navigation or product emphasis. This keeps the builder action tactile and the product taxonomy organized.

**Key Characteristics**
- Warm paper background: `#f9f8f6`.
- Visible dot-grid texture using `#d9d5ce`.
- Oversized Dazzed display type with tight tracking.
- Orange action controls for prompt submission and creation.
- Deep charcoal primary CTA in the header.
- Blue secondary accent for special product surfaces.
- Rounded prompt boxes, not glass cards.
- Product screenshots arranged as a horizontal proof strip.

## 2. Color Palette & Roles

Primary surface: `bg #f9f8f6` for the page canvas and `surface #ffffff` for prompt cards.

Text: `text #1e1e24` for display copy, `text-body #0f0f0f` for body, and `text-muted #6d6a67` for supporting notes.

Brand action: `brand #ff773c` is the orange build/send control. Use it sparingly and always near a concrete action.

Secondary accent: `brand-secondary #3950e6` marks the Superagents nav item and other product highlights.

Borders: `border #d9d5ce` and `border-subtle rgba(217, 213, 206, 0.55)` maintain the paper-grid language.

## 3. Typography Rules

| Role | Font | Size | Weight | Notes |
| --- | --- | ---: | ---: | --- |
| Hero | Dazzed | 92 | 600 | Very tight, rounded, one dominant message |
| Display | Dazzed | 64 | 600 | Section introductions |
| H1 | Dazzed | 48 | 600 | Detail page title |
| H2 | Dazzed | 36 | 600 | Product blocks |
| H3 | Dazzed | 24 | 600 | Feature cards |
| Body large | WixMadeforText | 20 | 400 | Hero support |
| Body | WixMadeforText | 16 | 400 | Default copy |
| Nav | Dazzed | 16 | 500 | Header groups |
| Button | Geist/Wix | 16 | 600 | Compact action copy |

Keep hero lines short. The display face is wide and friendly, so crowding it into dense paragraphs breaks the Base44 tone.

## 4. Component Stylings

Buttons: primary header buttons are charcoal pills with 8px radius. Prompt actions use orange square-rounded controls with black icons or text.

Cards: use white or muted cream surfaces with light borders. Avoid heavy shadows except under the main prompt box.

Badges: blue text on the paper background works better than filled chips. Use small square markers for separation.

Inputs: prompt boxes should feel like a blank build surface with one large text area, minimal chrome, and a strong submit affordance.

Navigation: keep the logo left, grouped product menus center-left, and the main CTA on the right.

## 5. Layout Principles

Base44 prefers centered hero composition with a wide but shallow input surface below the headline. The proof strip sits beneath the fold as cropped app previews, creating momentum without explaining every feature at once.

Use the dotted background as structure. Align major edges to the invisible grid, then let product screenshots break the line slightly for energy.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | ---: | --- |
| Micro | 2 | Link focus, blue nav markers |
| Small | 6 | tiny controls |
| Medium | 8 | header CTA |
| Large | 12 | prompt box, cards |
| Extra large | 20 | large product modules |
| Pill | 9999 | rare labels only |

The signature radius is 8-12px. Do not over-round the whole interface.

## 7. Depth & Elevation

Depth is soft and functional. The page relies on texture, scale, and cropping more than shadows.

| Level | Treatment | Use |
| --- | --- | --- |
| 0 | paper background | page base |
| 1 | white surface, no border | prompt input |
| 2 | subtle shadow | hero prompt box |
| 3 | cropped screenshot cards | proof strip |

## 8. Interaction & Motion

Use quick, practical transitions: 140ms for hover, 220ms for open states, and 360ms for screenshot or builder-preview movement.

Orange actions should brighten slightly on hover. Charcoal CTAs can lift with a small translateY and shadow. Dot-grid backgrounds should not animate unless the whole scene is intentionally showing generation progress.

## 9. Accessibility & A11y

`#1e1e24` on `#f9f8f6` provides strong contrast for hero text. Orange `#ff773c` needs dark text or iconography, not white copy, for smaller controls.

Focus rings should use orange on light surfaces and blue for secondary product links. Preserve visible labels on prompt controls; icons alone need accessible names.

## 10. Responsive Behavior

At mobile sizes, reduce the hero to 48-56px and place the prompt box full width. Keep the proof strip horizontally scrollable instead of stacking every screenshot.

Navigation should collapse into a drawer with the charcoal CTA retained at the top or bottom. Dot-grid density can remain fixed so the page does not become noisy.

## 11. Content & Voice

Voice is direct, builder-oriented, and slightly playful. Use verbs like build, ship, generate, connect, and refine.

Avoid enterprise abstraction. Copy should make the user feel that apps, websites, games, and tools are concrete outputs, not vague workflows.

## 12. Dark Mode & Theming

The audited homepage is light-only. If a dark variant is needed for a product mockup, invert to charcoal surfaces while preserving orange for creation actions and blue for product emphasis.

Do not convert the dotted background to pure black. A dark Base44 theme should still feel like a workbench, not a terminal.

## 13. Lineage & Influences

Base44 sits between AI builders, dot-grid notebooks, and no-code app canvases. It rejects the glassy blue-purple AI landing page in favor of a warmer, more physical construction metaphor.

The orange action language gives the system a tool-like quality. The blue accent is deliberately secondary, used to signal product depth rather than the core action.

## 14. Do's and Don'ts

Do use warm off-white backgrounds. Do keep headline type oversized. Do reserve orange for creation actions. Do use blue only for secondary emphasis. Do crop product previews boldly.

Do not make every button orange. Do not remove the dot-grid texture from hero compositions. Do not use cold gray as the main canvas. Do not replace Dazzed with a narrow grotesk for display text.

## 15. Agent Prompt Guide

### Quick Color Reference

Background: `#f9f8f6`; text: `#1e1e24`; body text: `#0f0f0f`; orange action: `#ff773c`; blue accent: `#3950e6`; CTA fill: `#312f2f`; border: `#d9d5ce`; surface: `#ffffff`.

### Example Component Prompts

- Create a Base44-style hero with a warm dotted background, massive Dazzed headline, and centered prompt builder.
- Design a compact charcoal header CTA with 8px radius and white text.
- Build a prompt input card with orange submit button, minimal controls, and a soft shadow.
- Create a horizontal strip of app preview cards cropped under the hero fold.

### Iteration Guide

1. Make the page warmer before adding more color.
2. Use orange only where the user creates something.
3. Keep blue as a secondary product signal.
4. Increase display type before adding decorative graphics.
5. Use dots, screenshots, and prompt surfaces as the main visual system.
