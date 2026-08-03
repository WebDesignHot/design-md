---
name: Bain & Company
tagline: 'Direct consulting editorial with strong red actions, black typography, and outcome-led client stories.'
updated_at: 2026-07-26T12:00:00+12:00
published_at: 2026-07-26T12:00:00+12:00
author: webdesignhot
source_url: https://www.bain.com
spec: webdesignhot/0.1
quality: auto
featured: false
categories: [saas]
tags: [light, editorial, red, sans, consulting, enterprise]
preview_swatch: ['#ffffff', '#cc0000', '#222222']
related: [mckinsey, bcg, deloitte]
description: 'Bain uses a direct consulting editorial system with clean white pages, assertive black headlines, signature red actions and dividers, client-outcome stories, and structured topic navigation across industries, capabilities, and insights.'
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
  bg: '#ffffff'
  bg-dark: '#181818'
  surface: '#ffffff'
  surface-soft: '#f4f4f4'
  text: '#222222'
  text-muted: '#626262'
  brand: '#cc0000'
  brand-hover: '#a80000'
  accent: '#ea1b2b'
  border: '#d9d9d9'
  on-brand: '#ffffff'
typography:
  display:
    family: 'Arial, Helvetica Neue, sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Arial, Helvetica Neue, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, monospace'
    weights: [400]
  scale:
    hero: { size: 68, weight: 600, lineHeight: 1.02, tracking: '0', family: display }
    h1: { size: 48, weight: 600, lineHeight: 1.1, tracking: '0', family: display }
    h2: { size: 34, weight: 600, lineHeight: 1.2, tracking: '0', family: display }
    body-lg: { size: 20, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
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
  page-width: 1280
  prose-width: 740
  header-height: 80
  editorial-grid-columns: 12
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 140
  duration-standard: 220
  duration-slow: 400
  reduced-motion: 'remove client-story image zoom'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
components:
  button-primary: { bg: brand, text: on-brand, radius: 0, padding: '14px 24px' }
  story-card: { bg: surface, text: text, border: border, radius: 0, padding: 0 }
  topic-link: { bg: transparent, text: text, radius: 0, padding: '8px 0' }
lineage:
  summary: 'Bain combines corporate editorial clarity with a direct, high-energy red action system. Client outcomes and named capabilities are given more weight than ornamental product UI.'
  influences:
    - { name: 'Business publishing', role: 'article hierarchy and issue-led headlines' }
    - { name: 'Client case studies', role: 'outcome metrics and narrative photography' }
    - { name: 'Swiss corporate graphics', role: 'red, black, white, and disciplined grid alignment' }
---

## 1. Visual Theme & Atmosphere

Bain should feel decisive, clean, and outcome-oriented. White space and black type establish editorial seriousness; red marks the few actions and ideas that demand attention.

## 2. Color Palette & Roles

Use white for the primary canvas, charcoal for reading, and Bain red `#cc0000` for actions, rules, and selected states. Keep gray surfaces neutral and avoid red-tinted page backgrounds.

## 3. Typography Rules

Use a direct sans hierarchy with strong 48-68px headlines and readable 16-20px body copy. Metadata and topic labels remain compact but never faint.

## 4. Component Stylings

Primary actions are square red rectangles with white text. Client-story modules combine photography, a concise outcome, and a text link without being enclosed in rounded cards.

## 5. Layout Principles

Build pages on a clear editorial grid with one dominant idea followed by capabilities, insights, and client results. Keep global industry navigation separate from article-level filters.

## 6. Shapes & Radius Scale

Use square geometry: 0-2px on actions and media, up to 4px on inputs, and 8px only where a large utility panel needs separation.

## 7. Depth & Elevation

Use whitespace, red rules, and image scale instead of shadows. Dark bands can provide contrast for featured client stories or careers content.

## 8. Interaction & Motion

Links and actions should respond quickly with darker red or underlines. Image zoom may support editorial cards but disappears in reduced-motion mode.

## 9. Accessibility & A11y

Pair red with text or icons rather than relying on color alone. Navigation, insight filters, and cookie controls require visible focus and semantic disclosure states.

## 10. Responsive Behavior

Prioritize the lead story, then stack client outcomes and insights in editorial order. Keep headlines within the viewport and avoid reducing long words below a readable size.

## 11. Content & Voice

Lead with a business problem or measurable result. Use active verbs and specific outcomes; avoid generic transformation language without evidence.

## 12. Dark Mode & Theming

The main reading system is light. Dark campaign bands can use white copy and red actions, but insight pages should preserve the white editorial canvas.

## 13. Lineage & Influences

Bain's visual language resembles a decisive business publication. Red introduces urgency, while the grid and limited radius keep the tone analytical rather than promotional.

## 14. Do's and Don'ts

Do use outcome metrics, strong black type, and restrained red. Do not soften the interface with pill cards, use red for long text, or bury client evidence beneath generic imagery.

## 15. Agent Prompt Guide

Create a Bain-style consulting homepage with a white editorial canvas, assertive black sans headline, square signature-red action, strict multi-column grid, real client-story photography, and measurable outcome callouts.
