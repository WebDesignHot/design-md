---
name: Garmin
tagline: 'Image-first performance hardware storefront with condensed display type, black-white contrast, and product-specific color.'
updated_at: 2026-07-26T12:00:00+12:00
published_at: 2026-07-26T12:00:00+12:00
author: webdesignhot
source_url: https://www.garmin.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [hardware, marketplace]
tags: [light, dark, structured, sans, fitness, hardware]
preview_swatch: ['#ffffff', '#000000', '#007cc3']
related: [whoop, apple, peloton]
description: 'Garmin uses a performance-hardware storefront built from full-bleed product campaigns, condensed Oswald headlines, Roboto utility text, stark black and white actions, and category navigation spanning smartwatches, fitness, outdoor, marine, aviation, and automotive products.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent
  muted: text-muted
  border: border
  ring: accent
colors:
  bg: '#ffffff'
  bg-dark: '#000000'
  surface: '#ffffff'
  surface-soft: '#f3f3f3'
  text: '#000000'
  text-muted: '#5f5f5f'
  text-on-dark: '#ffffff'
  brand: '#000000'
  accent: '#007cc3'
  accent-hover: '#00649d'
  border: '#d6d6d6'
  success: '#26734d'
  on-brand: '#ffffff'
typography:
  display:
    family: 'Superscripts-Oswald, Oswald, Roboto Condensed, sans-serif'
    weights: [400, 500, 600]
  body:
    family: 'Superscripts-Roboto, Roboto, Noto Sans, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'Roboto Mono, ui-monospace, monospace'
    weights: [400, 500]
  scale:
    hero: { size: 56, weight: 500, lineHeight: 1.02, tracking: '0', family: display }
    h1: { size: 40, weight: 400, lineHeight: 1.1, tracking: '0', family: display }
    h2: { size: 32, weight: 500, lineHeight: 1.15, tracking: '0', family: display }
    body-lg: { size: 18, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
radius:
  micro: 0
  sm: 2
  md: 4
  lg: 8
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
layout:
  page-width: 1440
  prose-width: 720
  header-height: 72
  campaign-aspect-ratio: '16 / 7'
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 220
  duration-slow: 420
  reduced-motion: 'freeze product campaign carousel and video'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1440
components:
  button-primary: { bg: bg-dark, text: text-on-dark, radius: 0, padding: '12px 24px' }
  button-on-image: { bg: transparent, text: text-on-dark, radius: 0, padding: '10px 0' }
  product-tile: { bg: surface, text: text, border: border, radius: 0, padding: 0 }
lineage:
  summary: 'Garmin combines sports advertising with a technical product catalog. Condensed display type adds performance energy, while stark monochrome controls keep a wide range of specialist devices under one recognizable commerce system.'
  influences:
    - { name: 'Performance sports campaigns', role: 'athlete imagery, compressed headlines, and direct shop actions' }
    - { name: 'Technical equipment catalogs', role: 'category depth, model families, and specification-led discovery' }
    - { name: 'Consumer electronics retail', role: 'full-width launches, product tiles, support, and cart utility' }
---

## 1. Visual Theme & Atmosphere

Garmin alternates clean white commerce chrome with full-width performance scenes. Products, athletes, and environments are the visual focus; the UI stays black, white, and disciplined.

## 2. Color Palette & Roles

Black and white form the universal system. Blue `#007cc3` can identify links, focus, and technical brand moments, while each campaign may introduce product-specific color through photography.

## 3. Typography Rules

Oswald or Superscripts Oswald carries uppercase product and campaign names. Roboto handles navigation, descriptions, prices, specifications, and support information.

## 4. Component Stylings

Shop actions are square, often black on light media or white on dark media. Product tiles prioritize device photography, model name, short benefit, and one clear destination.

## 5. Layout Principles

Keep the global category bar persistent and predictable. Stack wide campaign bands for current products, then use structured grids for category and sale discovery.

## 6. Shapes & Radius Scale

Use zero radius for campaign actions and image frames, 2-4px for utility inputs, and avoid soft card shells around technical hardware.

## 7. Depth & Elevation

Depth comes from product photography and black-to-white section changes. Use thin borders for grids; do not add shadows that compete with device detail.

## 8. Interaction & Motion

Campaign carousels should expose controls and stop on user interaction. Shop links can underline or invert; reduced-motion mode freezes video and carousel transitions.

## 9. Accessibility & A11y

Text over performance imagery needs a reliable scrim or solid placement zone. Product links require descriptive names, and cookie, cart, and category controls need visible keyboard focus.

## 10. Responsive Behavior

Crop campaigns around the product rather than around decorative scenery. Convert the category navigation to a compact menu and keep product names, benefits, and Shop actions visible.

## 11. Content & Voice

Use concise performance language tied to a device outcome: track, navigate, train, range, ride, run, and monitor. Model names may be uppercase, but descriptions should remain sentence case.

## 12. Dark Mode & Theming

The commerce shell is primarily light, while many campaigns are dark. Keep controls adaptable to image contrast rather than applying one global dark surface.

## 13. Lineage & Influences

Garmin's design language is part sports campaign and part equipment catalog. The condensed display face creates urgency; Roboto and square commerce controls protect technical clarity.

## 14. Do's and Don'ts

Do show the real device, preserve model names, and keep categories clear. Do not hide hardware in atmospheric imagery, over-round product cards, or use product-specific colors as a global one-note palette.

## 15. Agent Prompt Guide

Create a Garmin-style hardware storefront with white global navigation, uppercase condensed Oswald product headline, full-width athlete-and-device photography, square black or white `Shop` action, and structured grids for smartwatch, fitness, outdoor, marine, and aviation categories.
