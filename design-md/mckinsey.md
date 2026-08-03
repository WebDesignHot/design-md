---
name: McKinsey & Company
tagline: 'High-contrast editorial consulting system with midnight navigation, oversized serif questions, and cobalt actions.'
updated_at: 2026-07-26T12:00:00+12:00
published_at: 2026-07-26T12:00:00+12:00
author: webdesignhot
source_url: https://www.mckinsey.com
spec: webdesignhot/0.1
quality: auto
featured: false
categories: [saas]
tags: [editorial, consulting, serif, dark, enterprise, research]
preview_swatch: ['#051c2c', '#2251ff', '#ffffff']
related: [bain, bcg, bloomberg]
description: 'McKinsey uses a research-led editorial system: a midnight navigation shell, very large serif questions, modular article and case-study imagery, cobalt digital actions, and dense pathways across industries, capabilities, insights, and careers.'
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
  bg-dark: '#051c2c'
  surface: '#ffffff'
  surface-soft: '#f3f4f5'
  text: '#051c2c'
  text-muted: '#626a70'
  text-on-dark: '#ffffff'
  brand: '#051c2c'
  accent: '#2251ff'
  accent-hover: '#153bd1'
  border: '#d9dde0'
  on-brand: '#ffffff'
typography:
  display:
    family: 'Georgia, Times New Roman, serif'
    weights: [400, 700]
  body:
    family: 'Helvetica Neue, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, monospace'
    weights: [400]
  scale:
    hero: { size: 76, weight: 400, lineHeight: 1.02, tracking: '0', family: display }
    h1: { size: 54, weight: 400, lineHeight: 1.08, tracking: '0', family: display }
    h2: { size: 38, weight: 400, lineHeight: 1.2, tracking: '0', family: display }
    body-lg: { size: 20, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.6, tracking: '0', family: body }
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
  page-width: 1320
  prose-width: 760
  header-height: 88
  editorial-grid-columns: 12
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 140
  duration-standard: 240
  duration-slow: 420
  reduced-motion: 'remove article-image zoom and reveal content directly'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1320
components:
  button-primary: { bg: accent, text: on-brand, radius: 0, padding: '14px 24px' }
  insight-card: { bg: surface, text: text, border: border, radius: 0, padding: 0 }
  nav-link: { bg: transparent, text: text-on-dark, radius: 0, padding: '8px 10px' }
lineage:
  summary: 'McKinsey adapts newspaper and institutional-report typography to a global consulting platform. Large questions create editorial tension; a disciplined grid and plain sans labels keep a very large knowledge architecture usable.'
  influences:
    - { name: 'Business journalism', role: 'large serif headlines, article grids, and issue-led storytelling' }
    - { name: 'Institutional research', role: 'dense taxonomies, reports, and evidence-led copy' }
    - { name: 'Global corporate navigation', role: 'industries, capabilities, careers, and regional pathways' }
---

## 1. Visual Theme & Atmosphere

Use a midnight shell and high-contrast editorial modules. Oversized serif questions create authority, while article photography and case studies provide movement across a strict grid.

## 2. Color Palette & Roles

Midnight `#051c2c` anchors navigation and major text. Cobalt `#2251ff` is reserved for digital actions and focus states; white and cool gray carry research-heavy content.

## 3. Typography Rules

Serif display type should be large, line-broken deliberately, and used for strategic questions or insight titles. A neutral sans handles navigation, labels, metadata, and long explanatory paragraphs.

## 4. Component Stylings

Insight cards are largely borderless image-and-copy modules. Primary actions are square cobalt rectangles; taxonomies and filters use compact text controls rather than decorative pills.

## 5. Layout Principles

Use a 12-column editorial grid that supports one major story plus smaller articles. Keep navigation broad but predictable, and give research pages a narrower prose measure.

## 6. Shapes & Radius Scale

Corners are square or nearly square. Use 0-2px for buttons and media, 4px for forms, and avoid rounded marketing cards.

## 7. Depth & Elevation

Depth comes from photography, scale, and dark-to-light bands. Shadows are rarely necessary; thin rules and whitespace should separate content.

## 8. Interaction & Motion

Article imagery may zoom slightly on hover, while menus and filters respond quickly. Remove zoom and reveal motion for reduced-motion users without changing content order.

## 9. Accessibility & A11y

Maintain high contrast in the dark header, expose menu states, and preserve visible text links. Cookie and privacy controls must remain keyboard reachable and must not obscure focus.

## 10. Responsive Behavior

Collapse the editorial grid into a single prioritized stream. Keep the main strategic question first, move navigation into a clear menu, and preserve article metadata beside each title.

## 11. Content & Voice

Frame subjects as consequential business questions, then support them with evidence, cases, and clear outcomes. Avoid casual product language or unsupported superlatives.

## 12. Dark Mode & Theming

Dark is used for navigation and campaign moments; research reading remains light. A complete dark mode should preserve the serif/sans hierarchy and restrained cobalt accent.

## 13. Lineage & Influences

The system draws from broadsheet journalism and annual-report design. Its authority comes from scale, editing, and evidence rather than decorative enterprise UI.

## 14. Do's and Don'ts

Do use a clear grid, large serif questions, and real case-study imagery. Do not round cards, fill every module with navy, or reduce complex research to vague slogans.

## 15. Agent Prompt Guide

Create a McKinsey-style consulting homepage with a midnight navigation shell, oversized white or navy serif strategic question, strict editorial grid, real case-study photography, compact sans metadata, and square cobalt actions.
