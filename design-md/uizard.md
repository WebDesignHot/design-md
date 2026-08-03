---
name: Uizard
tagline: 'Black AI design stage with white Clash Grotesk headlines, purple generation controls, and neon violet depth.'
updated_at: 2026-07-09T12:53:00+12:00
published_at: 2026-07-09T12:53:00+12:00
author: webdesignhot
source_url: https://uizard.io
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, design-tools]
tags: [dark, playful, sans, ai, prototyping, purple]
preview_swatch: ['#000000', '#a881fe', '#f5f5f5']
related: [figma, jitter, onlook]
description: 'Uizard presents AI product design as a dark cinematic stage: black and near-black surfaces, Satoshi navigation, Clash Grotesk hero type, glowing violet gradients, and a purple Generate control that turns prompts into UI concepts.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: brand-blue
  muted: text-muted
  border: border
  ring: brand
colors:
  bg: '#000000'
  bg-deep: '#080808'
  surface: '#181818'
  surface-raised: '#232323'
  surface-soft: '#2e2e2e'
  text: '#f5f5f5'
  text-strong: '#ffffff'
  text-muted: '#aeaeae'
  text-soft: '#8f8f8f'
  brand: '#a881fe'
  brand-hover: '#8b5cf6'
  brand-active: '#6f3ff0'
  brand-blue: '#1e90ff'
  brand-violet: '#7c3aed'
  glow-purple: 'rgba(168, 129, 254, 0.55)'
  glow-dark: 'rgba(33, 33, 33, 0.32)'
  border: '#282828'
  border-strong: 'rgba(255, 255, 255, 0.32)'
  border-subtle: 'rgba(255, 255, 255, 0.14)'
  focus: '#a881fe'
  success: '#55d08a'
  warning: '#ffb020'
  danger: '#ff5c7a'
  on-brand: '#ffffff'
typography:
  display:
    family: 'ClashGrotesk-Variable, Satoshi-Variable, system-ui, -apple-system, sans-serif'
    weights: [500, 540, 600, 700]
  body:
    family: 'Satoshi-Variable, system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
    weights: [400, 500, 640]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    hero-display: { size: 72, weight: 540, lineHeight: 1, tracking: '-0.03em', family: display }
    display: { size: 56, weight: 600, lineHeight: 1.04, tracking: '-0.025em', family: display }
    h1: { size: 44, weight: 600, lineHeight: 1.08, tracking: '-0.02em', family: display }
    h2: { size: 34, weight: 600, lineHeight: 1.14, tracking: '-0.015em', family: display }
    h3: { size: 24, weight: 600, lineHeight: 1.22, tracking: '-0.005em', family: display }
    body-lg: { size: 22, weight: 400, lineHeight: 1.35, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.4, tracking: '0', family: body }
    nav: { size: 16, weight: 640, lineHeight: 1.15, tracking: '0', family: body }
    button: { size: 16, weight: 640, lineHeight: 1.2, tracking: '0', family: body }
radius:
  micro: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
  input: 10
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
layout:
  page-width: 1280
  prose-width: 720
  header-height: 86
  hero-max-width: 1120
  preview-width: 980
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 260
  duration-slow: 520
  reduced-motion: 'disable gradient drift and prompt typing loops'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536
components:
  button-primary:
    bg: brand
    text: on-brand
    radius: 8
    padding: '14px 28px'
    use: 'Sign up and Generate actions'
  prompt-input:
    bg: text-strong
    text: '#232323'
    radius: 10
    padding: '14px 18px'
    use: 'AI prompt bar in the hero'
  hero-stage:
    bg: bg
    border: border-subtle
    radius: 24
    padding: 32
    use: 'dark preview area below the prompt'
  nav-link:
    bg: transparent
    text: text
    radius: 0
    use: 'top navigation and selected AI Design link'
  gradient-backdrop:
    bg: 'radial-gradient(circle at 80% 70%, #8b5cf6 0%, #000000 60%)'
    use: 'large purple energy field behind hero'
lineage:
  summary: 'Uizard combines AI prompt UI, product-design tooling, and a cinematic dark stage. The site makes generation feel immediate by placing the prompt control in the center of the hero, then surrounding it with violet depth.'
  influences:
    - { name: 'AI prompt bars', role: 'single input plus generate action as the hero interaction' }
    - { name: 'Design-tool demos', role: 'large embedded interface preview below the fold' }
    - { name: 'Dark launch pages', role: 'black surface and neon violet glow' }
---

## 1. Visual Theme & Atmosphere

Uizard feels like a dark product-design theater. The background is pure black, the headline is white and large, and the surrounding purple light suggests an AI system running behind the screen.

The page is not a quiet documentation site. It sells speed and magic: a prompt bar sits directly under the headline, with the Generate button glowing as the first real control.

**Key Characteristics**
- Black base with near-black interface surfaces.
- White Clash Grotesk hero type.
- Satoshi navigation and body copy.
- Purple `Generate` CTA and neon violet glow.
- Dark framed product previews.
- White prompt input centered in the hero.
- Compact high-contrast navigation.
- Gradients used as atmosphere, not as flat button fills.

## 2. Color Palette & Roles

The system starts at `bg #000000` and layers `bg-deep #080808`, `surface #181818`, and `surface-raised #232323`.

Text is `#f5f5f5` by default, with `#ffffff` for hero and navigation highlights. Use `text-muted #aeaeae` for secondary copy.

The main brand action is `brand #a881fe`, observed in the hero Generate control and top navigation highlight. `brand-blue #1e90ff` appears as a secondary AI/product accent.

Borders stay quiet: `border #282828` for panels and `border-strong rgba(255, 255, 255, 0.32)` for bright outlines on dark controls.

## 3. Typography Rules

| Role | Font | Size | Weight | Notes |
| --- | --- | ---: | ---: | --- |
| Hero | ClashGrotesk-Variable | 72 | 540 | Large, tight, two-line lockup |
| Display | ClashGrotesk-Variable | 56 | 600 | Section headers |
| H1 | ClashGrotesk-Variable | 44 | 600 | Product pages |
| H2 | ClashGrotesk-Variable | 34 | 600 | Feature blocks |
| H3 | ClashGrotesk-Variable | 24 | 600 | Cards |
| Body large | Satoshi-Variable | 22 | 400 | Hero support |
| Body | Satoshi-Variable | 16 | 400 | Default copy |
| Nav | Satoshi-Variable | 16 | 640 | Header labels |

The display type should feel wide and modern. Avoid condensed type, because the Uizard hero relies on broad words floating in the dark space.

## 4. Component Stylings

Prompt bar: use a white input with soft 10px radius and a purple Generate segment on the right. The input should be wide enough to feel like the main interface.

Buttons: primary buttons are compact and bright purple. Header buttons can use the same purple but should be visually lighter than the hero Generate action.

Panels: dark previews use black or near-black fills with subtle violet borders. Avoid heavy gray cards; the product demo should look embedded in the stage.

Navigation: the selected AI item can use a purple sparkle or text color while the rest stays white.

## 5. Layout Principles

Center the hero content. The headline, subcopy, prompt bar, and preview all stack in one vertical axis, making the generated output feel directly connected to the prompt.

The purple glow can live near the lower corners and behind the preview, but keep the text zone clean and readable.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | ---: | --- |
| Micro | 4 | tiny icons, sparkles |
| Small | 8 | menus and Generate button |
| Medium | 12 | prompt input and small cards |
| Large | 16 | feature blocks |
| Extra large | 24 | demo frame |
| Pill | 9999 | rare badges only |

Uizard uses rounded controls, but not pill-everything. The 8-12px range is the practical signature.

## 7. Depth & Elevation

Depth is produced by glow and contrast. The preview frame can have a faint border and soft violet bloom, while the hero background remains nearly flat black.

Do not use conventional SaaS card shadows. On black, glow reads more naturally than a gray drop shadow.

## 8. Interaction & Motion

The Generate button should brighten and compress slightly on press. Prompt typing, preview reveal, and gradient motion can be slow and cinematic, but they must not distract from reading.

Use 150ms for nav hover, 260ms for controls, and up to 520ms for preview reveal.

## 9. Accessibility & A11y

White and near-white text on black has strong contrast. Purple controls need white labels and visible focus rings.

Do not place small gray copy directly over the purple glow. Keep text blocks on stable black or near-black surfaces.

## 10. Responsive Behavior

On mobile, reduce the hero display to 42-48px and keep the prompt bar as a stacked control: input first, Generate button below or attached.

The preview frame should remain wide and horizontally scrollable if necessary. Cropping is better than shrinking interface details to unreadable scale.

## 11. Content & Voice

Uizard speaks in product-design outcomes: concepts, wireframes, prototypes, and mockups in minutes. The voice can be energetic, but the UI should stay controlled.

Use direct verbs like visualize, generate, iterate, scan, and prototype.

## 12. Dark Mode & Theming

The audited homepage is already dark. A light variant should keep purple as the action color, but it would lose the cinematic identity unless paired with strong preview imagery.

Prefer dark-first implementations for Uizard-inspired experiences.

## 13. Lineage & Influences

Uizard sits between AI generators and design tools. It uses the prompt as the main primitive, then borrows dark launch-page atmosphere to make generation feel powerful.

The design is intentionally more dramatic than Figma-like utility. It is selling the leap from idea to interface, not only the editor.

## 14. Do's and Don'ts

Do use black as the main canvas. Do keep the hero centered. Do make the Generate button the strongest control. Do use purple glow behind product proof.

Do not switch to a light dashboard by default. Do not make every text item purple. Do not over-round controls into generic pills. Do not hide the prompt interaction below the fold.

## 15. Agent Prompt Guide

When generating Uizard-like UI, ask for a dark AI design stage with a large white Clash Grotesk headline, centered prompt bar, purple Generate control, and a violet product-demo glow.

The screen should communicate that product ideas become editable UI concepts almost immediately.
