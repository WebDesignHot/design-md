---
name: Boston Consulting Group
tagline: 'Applied-AI consulting editorial with Henderson serif headlines, warm gray bands, and vivid green actions.'
updated_at: 2026-07-26T12:00:00+12:00
published_at: 2026-07-26T12:00:00+12:00
author: webdesignhot
source_url: https://www.bcg.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [saas]
tags: [light, editorial, serif, green, consulting, enterprise]
preview_swatch: ['#ffffff', '#96f878', '#212427']
related: [mckinsey, bain, deloitte]
description: 'BCG combines strategic editorial authority with an applied-AI product layer: Henderson serif headlines, Henderson sans navigation, vivid green question and story actions, warm gray section bands, and image-led insight cards.'
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
  surface: '#ffffff'
  surface-warm: '#f1eeea'
  surface-glass: 'rgba(255, 255, 255, 0.70)'
  text: '#212427'
  text-muted: '#696969'
  text-on-image: '#ffffff'
  brand: '#96f878'
  brand-hover: '#78dc5d'
  accent: '#1d5f45'
  border: '#d9d7d3'
  on-brand: '#212427'
typography:
  display:
    family: 'henderson-bcg-serif, Palatino Linotype, Georgia, serif'
    weights: [300, 400]
  body:
    family: 'henderson-bcg-sans, Helvetica Neue, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, monospace'
    weights: [400]
  scale:
    hero: { size: 64, weight: 300, lineHeight: 1.05, tracking: '0', family: display }
    h1: { size: 48, weight: 300, lineHeight: 1.12, tracking: '0', family: display }
    h2: { size: 40, weight: 300, lineHeight: 1.2, tracking: '0', family: display }
    body-lg: { size: 20, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
radius:
  micro: 2
  sm: 6
  md: 10
  lg: 15
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
layout:
  page-width: 1320
  prose-width: 760
  header-height: 88
  editorial-grid-columns: 12
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 140
  duration-standard: 240
  duration-slow: 440
  reduced-motion: 'stop insight carousel and remove image zoom'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1320
components:
  button-primary: { bg: brand, text: on-brand, radius: 15, padding: '10px 20px' }
  topic-chip: { bg: 'rgba(1, 1, 1, 0.40)', text: text-on-image, radius: 10, padding: '6px 10px' }
  insight-card: { bg: surface, text: text, border: border, radius: 0, padding: 0 }
lineage:
  summary: 'BCG uses consulting editorial conventions but adds a vivid green conversational action layer. Henderson serif creates authority, while the sans UI and BCG Answer entry point make research feel directly queryable.'
  influences:
    - { name: 'Business journalism', role: 'serif headlines, article metadata, and image-led insight grids' }
    - { name: 'Conversational AI', role: 'question entry point and integrated answer experience' }
    - { name: 'Sustainability communications', role: 'vivid green action color and warm natural neutrals' }
---

## 1. Visual Theme & Atmosphere

BCG is light, editorial, and contemporary. Thin serif headlines establish strategic authority, while vivid green actions make AI and client-story pathways feel active and approachable.

## 2. Color Palette & Roles

Use white and warm gray `#f1eeea` as the primary canvas. Vivid green `#96f878` is reserved for `Ask us a question` and key story actions; charcoal carries all reading text.

## 3. Typography Rules

Henderson BCG Serif is used at 40-64px with a light weight. Henderson BCG Sans handles uppercase labels, navigation, metadata, and body copy.

## 4. Component Stylings

Primary buttons are bright green with dark text and 15px corners. Image cards can use translucent black topic chips, while article titles remain outside heavy card frames.

## 5. Layout Principles

Lead with one strategic position, follow with the AI question entry point, then move into client impact and current insights. Use full-width bands with constrained editorial grids.

## 6. Shapes & Radius Scale

Use 10px for topic chips and 15px for short actions. Keep article media and page sections square so the green controls remain distinctive.

## 7. Depth & Elevation

Use translucent header and topic layers over imagery, with minimal shadow. Warm section backgrounds and image contrast should provide most of the depth.

## 8. Interaction & Motion

Green actions can darken slightly on hover. Insight sliders require visible controls and pause behavior; reduced motion stops automatic changes and image zoom.

## 9. Accessibility & A11y

Dark text on green has strong contrast. Image chips need a sufficiently dark scrim, and AI question controls must expose purpose, loading, and answer status to assistive technology.

## 10. Responsive Behavior

Stack BCG Answer beneath the lead headline, then render client stories and insights in one clear stream. Maintain readable 40px mobile headings rather than shrinking the serif excessively.

## 11. Content & Voice

Use strategic but actionable language: clarity, applied AI, value creation, capabilities, client impact, and evidence. Headlines should identify a decision or consequence.

## 12. Dark Mode & Theming

The primary reading system is light. Dark image cards and overlays provide contrast; a full dark theme should retain green action visibility and warm neutral distinctions.

## 13. Lineage & Influences

BCG combines a consulting journal with a contemporary AI assistant. The vivid green layer makes direct inquiry feel native without diluting the editorial authority of the serif system.

## 14. Do's and Don'ts

Do keep green actions selective, use real client imagery, and preserve article metadata. Do not turn every insight into a rounded card or use pale green as the entire page background.

## 15. Agent Prompt Guide

Create a BCG-style consulting homepage with a white and warm-gray editorial canvas, light Henderson serif strategic headline, dark Henderson sans labels, vivid-green rounded `Ask us a question` action, client-impact imagery, and structured insight metadata.
