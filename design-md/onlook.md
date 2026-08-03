---
name: Onlook
tagline: 'Near-black code-design workspace with white CTAs, script contrast, and red-black shadows.'
updated_at: 2026-07-08T21:21:00+12:00
published_at: 2026-07-08T21:21:00+12:00
author: webdesignhot
source_url: https://www.onlook.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, design-tools, dev-tools]
tags: [dark, minimal, sans, mono, ai, builder]
preview_swatch: ['#040000', '#ffffff', '#620000']
related: [cursor, figma, framer]
description: 'Onlook presents design-in-code collaboration as a dark workspace: near-black hero, white conversion buttons, gray navigation, red-black shadows, Inter UI type, JetBrains Mono product chrome, and a handwritten script accent for the designer wordmark moment.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-red
  muted: text-muted
  border: border
  ring: border-red
colors:
  bg: '#040000'
  bg-deep: '#000000'
  surface: 'rgba(0, 0, 0, 0.8)'
  surface-panel: '#100102'
  surface-soft: '#230206'
  text: '#ffffff'
  text-muted: '#999999'
  text-soft: '#ababab'
  text-hidden-red: '#620000'
  brand: '#ffffff'
  on-brand: '#000000'
  accent-red: '#620000'
  accent-red-soft: '#300206'
  accent-red-mid: '#4e1a23'
  border: 'rgba(100, 0, 0, 0.1)'
  border-red: '#550102'
  chrome-line: '#1b1b1b'
  success: '#24d0bd'
  warning: '#d9a441'
  danger: '#d84a4a'
typography:
  display:
    family: 'Inter, system-ui, -apple-system, sans-serif'
    weights: [300, 400, 500]
  script:
    family: 'Vujahday Script, cursive'
    weights: [400]
  body:
    family: 'Inter, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace'
    weights: [400, 500]
  scale:
    display-hero: { size: 60, weight: 300, lineHeight: 0.9, tracking: '-0.02em', family: display }
    script-hero: { size: 74, weight: 400, lineHeight: 0.9, tracking: '0', family: script }
    display: { size: 48, weight: 300, lineHeight: 1.25, tracking: '-0.015em', family: display }
    h1: { size: 48, weight: 300, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h2: { size: 36, weight: 300, lineHeight: 1.2, tracking: '-0.01em', family: display }
    h3: { size: 18, weight: 400, lineHeight: 1.35, tracking: '0', family: mono }
    body-lg: { size: 20, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    chrome: { size: 12, weight: 400, lineHeight: 1.5, tracking: '0', family: mono }
    button: { size: 14, weight: 500, lineHeight: 1.45, tracking: '0', family: body }
radius:
  micro: 2
  sm: 6
  md: 8
  lg: 12
  xl: 20
  panel: 24
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
layout:
  page-width: 1320
  prose-width: 700
  header-height: 48
  hero-min-height: 820
  workspace-width: 1160
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 220
  duration-slow: 480
  reduced-motion: 'freeze workspace preview and remove background drift'
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
    padding: '8px 18px'
    use: 'Sign Up and Log In actions'
  button-secondary:
    bg: bg
    text: text
    border: border
    radius: 8
    padding: '8px 18px'
    use: 'Book a Demo'
  nav-link:
    bg: transparent
    text: text-muted
    radius: 0
    padding: '6px 10px'
  workspace-panel:
    bg: surface
    border: border
    radius: 24
    padding: 16
lineage:
  summary: 'Onlook blends the dark editor language of code tools with a designer-facing brand moment. The near-black hero and low-red computed shadows make the workspace feel deep, while the script display word interrupts the engineering tone with a human design cue.'
  influences:
    - { name: 'Code editors', role: 'dark workspace, mono labels, panel chrome' }
    - { name: 'Visual design tools', role: 'layers, mockup containers, preview tabs' }
    - { name: 'AI pair-building products', role: 'chat/code side-by-side composition' }
---

## 1. Visual Theme & Atmosphere

Onlook is a dark workspace before it is a landing page. The hero is nearly black, with white headline strokes, muted gray navigation, and a large product interface emerging from the lower half of the viewport.

The distinctive moment is typographic: the engineering-like "Cursor for" phrase is interrupted by a handwritten script word. That contrast says the product sits between code and design.

**Key Characteristics**
- Near-black background: `#040000`.
- White primary text and CTA fills.
- Gray nav and support copy.
- Red-black computed shadows and borders.
- Inter for UI and body text.
- Vujahday Script for the designer accent.
- JetBrains Mono inside product chrome.
- Large dark workspace preview anchored below the hero.

## 2. Color Palette & Roles

Base: `bg #040000` and `bg-deep #000000` define the page.

Text: use `text #ffffff` for visible headlines and active controls, `text-muted #999999` for nav, and `text-soft #ababab` for secondary product labels.

Accent: `accent-red #620000`, `accent-red-soft #300206`, and `accent-red-mid #4e1a23` appear in the dark computed palette and create subtle warmth.

Borders: `border rgba(100, 0, 0, 0.1)` and `border-red #550102` keep panels barely separated.

Action: `brand #ffffff` on `on-brand #000000` is the clearest conversion treatment.

## 3. Typography Rules

| Role | Font | Size | Weight | Notes |
| --- | --- | ---: | ---: | --- |
| Hero | Inter | 60 | 300 | light engineering phrase |
| Script hero | Vujahday Script | 74 | 400 | designer accent only |
| Display | Inter | 48 | 300 | section headings |
| H1 | Inter | 48 | 300 | major page titles |
| H2 | Inter | 36 | 300 | narrative sections |
| H3 chrome | JetBrains Mono | 18 | 400 | product panel labels |
| Body large | Inter | 20 | 400 | hero support |
| Body | Inter | 16 | 400 | default copy |
| Chrome | JetBrains Mono | 12 | 400 | layers, tabs, mockup labels |
| Button | Inter | 14 | 500 | compact CTAs |

Use the script face once per composition. Repeating it makes the system feel decorative instead of intentional.

## 4. Component Stylings

Primary CTA: white fill, black text, 8px radius. This is used for Sign Up and Log In.

Secondary CTA: transparent or near-black fill, dim red border, white or muted text, 8px radius.

Nav: low-contrast gray links on black. Keep height compact and do not add heavy separators.

Workspace panel: dark translucent panel, 24px radius, subtle red-black border, mono labels, and small tabs.

Badges: use muted gray text or small outlined pills. Avoid bright fills in the navigation.

## 5. Layout Principles

The hero is vertically centered but leaves room for the product workspace preview to enter from the bottom. This gives the page a product-in-motion feel without a literal video.

Keep the nav narrow and quiet. The page should feel like an editor, not a marketing dashboard.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | ---: | --- |
| Micro | 2 | small focus marks |
| Small | 6 | utility controls |
| Medium | 8 | CTAs |
| Large | 12 | inner controls |
| Panel | 24 | workspace frame |
| Pill | 9999 | rare status badges |

Most interactive elements use 8px. Large preview shells use 24px.

## 7. Depth & Elevation

Depth is created by black-on-black separation, not bright shadows.

| Level | Treatment | Use |
| --- | --- | --- |
| 0 | `#040000` | page base |
| 1 | subtle radial dark texture | hero background |
| 2 | `rgba(0,0,0,0.8)` | workspace surfaces |
| 3 | red-black border and muted glow | active panels |

## 8. Interaction & Motion

Use editor-like motion: fast hover feedback, restrained tab transitions, and smooth workspace reveals.

White CTAs can brighten with a small lift. Workspace panels should fade or slide, not bounce. Background drift should be subtle enough to disappear under reduced motion.

## 9. Accessibility & A11y

White CTAs on black are strong. Muted nav text `#999999` remains readable at 14px on the near-black header, but smaller product labels should use at least `#ababab`.

Do not render important visible text in the low-red computed colors. Red-black values work for texture and borders, not primary copy.

## 10. Responsive Behavior

On mobile, keep the headline centered and reduce the script word so it does not overflow. Stack primary and secondary CTAs, or keep them side by side only when both remain at least 44px tall.

The workspace preview should crop horizontally like an editor screenshot. Do not shrink every panel until the labels become unreadable.

## 11. Content & Voice

Voice is focused on collaboration between design and code. Use words like design, codebase, preview, layers, chat, build, inspect, and ship.

Keep copy concise and product-specific. The dark visual system already carries the drama, so the words can stay practical.

## 12. Dark Mode & Theming

Dark is the default. A light theme would lose most of the brand feeling unless it appears only inside product mockups.

For alternate sections, use black surfaces with slightly different red-black tints rather than switching to white cards.

## 13. Lineage & Influences

Onlook borrows from code editors, canvas design tools, and AI builder interfaces. The page says that product design can happen directly inside a real codebase, so the visual system keeps both editor chrome and designer flair visible.

The script display word is the key differentiator. It prevents the dark editor aesthetic from becoming too austere.

## 14. Do's and Don'ts

Do use near-black backgrounds. Do keep white CTAs crisp. Do use mono labels in product chrome. Do let red-black borders stay subtle. Do use the script type only for the designer accent.

Do not make the accent red bright. Do not use white cards in the main hero. Do not overuse the script face. Do not make the nav louder than the product preview.

## 15. Agent Prompt Guide

### Quick Color Reference

Background: `#040000`; deep black: `#000000`; white text: `#ffffff`; muted nav: `#999999`; soft text: `#ababab`; red accent: `#620000`; panel: `rgba(0,0,0,0.8)`; border: `rgba(100,0,0,0.1)`.

### Example Component Prompts

- Create an Onlook-style dark hero with Inter light headline text and one Vujahday Script designer word.
- Design a white Sign Up button and transparent Book a Demo button on near-black.
- Build a dark workspace preview with mono labels, tabs, layers, and subtle red-black borders.
- Create a compact black header with muted nav links and a white login CTA.

### Iteration Guide

1. Make the background darker before adding more contrast.
2. Use white for conversion, not brand-color fills.
3. Keep red as a shadow and border language.
4. Add mono labels to make product surfaces feel real.
5. Use script type once to humanize the code-tool frame.
