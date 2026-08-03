---
name: Google Stitch
tagline: 'Black AI design canvas with oversized Google Sans type, dotted texture, and violet product glow.'
updated_at: 2026-07-26T12:00:00+12:00
published_at: 2026-07-26T12:00:00+12:00
author: webdesignhot
source_url: https://stitch.withgoogle.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, design-tools]
tags: [dark, minimal, sans, ai, generator, canvas]
preview_swatch: ['#050505', '#8b83ff', '#ffffff']
related: [figma, uizard, onlook]
description: 'Google Stitch frames AI interface generation as a focused design canvas: a near-black dotted field, enormous white Google Sans headline, a soft violet product glow, and one centered prompt composer that previews the product before sign-in.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent
  muted: text-muted
  border: border
  ring: brand
colors:
  bg: '#050505'
  bg-deep: '#000000'
  surface: '#111111'
  surface-raised: '#18181b'
  text: '#ffffff'
  text-muted: '#b8b8c2'
  brand: '#8b83ff'
  accent: '#5b57d9'
  accent-soft: '#24204d'
  border: 'rgba(255, 255, 255, 0.14)'
  grid-dot: 'rgba(255, 255, 255, 0.12)'
  on-brand: '#080808'
typography:
  display:
    family: 'Google Sans, Arial, sans-serif'
    weights: [400, 500, 600]
  body:
    family: 'Google Sans, Arial, sans-serif'
    weights: [400, 500]
  mono:
    family: 'Roboto Mono, ui-monospace, monospace'
    weights: [400, 500]
  scale:
    hero: { size: 88, weight: 400, lineHeight: 0.98, tracking: '0', family: display }
    h1: { size: 56, weight: 400, lineHeight: 1.05, tracking: '0', family: display }
    h2: { size: 36, weight: 500, lineHeight: 1.15, tracking: '0', family: display }
    body-lg: { size: 20, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    label: { size: 14, weight: 500, lineHeight: 1.4, tracking: '0', family: body }
radius:
  micro: 4
  sm: 8
  md: 16
  composer: 28
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
layout:
  page-width: 1280
  prose-width: 760
  header-height: 80
  composer-width: 850
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 140
  duration-standard: 240
  duration-slow: 500
  reduced-motion: 'remove violet glow drift and prompt-canvas parallax'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
components:
  button-primary: { bg: text, text: bg, radius: 9999, padding: '12px 28px' }
  prompt-composer: { bg: surface, text: text, border: border, radius: 28, padding: '24px 28px' }
  mode-pill: { bg: surface-raised, text: text-muted, radius: 9999, padding: '8px 14px' }
lineage:
  summary: 'Stitch combines Google product restraint with the dark spatial canvas used by contemporary generative design tools. The prompt composer is treated as the product itself rather than as a conventional signup form.'
  influences:
    - { name: 'Google Material', role: 'clear hierarchy, compact controls, and legible Google Sans typography' }
    - { name: 'Generative canvases', role: 'prompt-first interaction with model and output controls in one surface' }
    - { name: 'Creative coding tools', role: 'dark field, dotted grid, and luminous violet depth' }
---

## 1. Visual Theme & Atmosphere

Use a near-black full-viewport canvas with a quiet dotted grid. White typography carries the hierarchy while a violet glow rises behind the composer, making the AI system feel active without filling the page with decoration.

## 2. Color Palette & Roles

Reserve `#8b83ff` and `#5b57d9` for model status, glow, and selected controls. Keep primary copy white, supporting copy muted gray, and product surfaces only one or two steps lighter than the page.

## 3. Typography Rules

Google Sans is the visible identity. Hero type is large, regular-weight, centered, and split into two deliberate lines; UI labels remain compact and medium-weight.

## 4. Component Stylings

The prompt composer is a wide dark panel with 28px corners, a generous text area, and a single compact toolbar. Use pills for App/Web and model selection, icon buttons for utilities, and a white pill for `Try now`.

## 5. Layout Principles

Center the headline and composer on one vertical axis. Keep the header sparse, let the composer enter the first viewport, and avoid surrounding either element with a marketing card.

## 6. Shapes & Radius Scale

Use 8px for small controls, 16px for secondary panels, 28px for the prompt composer, and full pills only for short mode or command controls.

## 7. Depth & Elevation

Create depth with tonal separation and a blurred violet light behind the composer. Shadows should be dark and broad; bright borders would break the canvas illusion.

## 8. Interaction & Motion

Hover states can brighten borders and text in 140ms. Model changes and generated previews may cross-fade over 240-500ms; reduced motion removes glow drift and spatial movement.

## 9. Accessibility & A11y

Keep body text at least `#b8b8c2` on black, expose names for every icon-only command, and show a visible violet focus ring. The prompt mode selector must work as a keyboard-accessible segmented control.

## 10. Responsive Behavior

On mobile, reduce the headline to roughly 48px and let the composer span the viewport with 16px gutters. Wrap composer tools into two rows without shrinking icon targets below 44px.

## 11. Content & Voice

Use direct creative prompts and outcome language: design, transform, mobile, web, generate, and iterate. Supporting copy should explain the output, not the underlying model architecture.

## 12. Dark Mode & Theming

Dark is the product identity and default theme. A light output preview can appear inside the composer, but the surrounding authoring canvas remains black.

## 13. Lineage & Influences

The composition inherits Google clarity, then removes the usual white product shell. Dotted-grid texture and a command composer place it closer to a creative IDE than a conventional Google landing page.

## 14. Do's and Don'ts

Do keep the page sparse, the headline regular-weight, and the product surface visible. Do not add colorful cards, heavy gradients, or multiple competing CTAs.

## 15. Agent Prompt Guide

Create a near-black Google Stitch-style AI design canvas with a centered two-line Google Sans headline, subtle dotted grid, violet glow, wide rounded prompt composer, App/Web segmented control, model pill, and one white `Try now` action.
