---
name: OpenStax
tagline: 'Accessible education utility with pale blue sections, orange actions, and institutional information density.'
updated_at: 2026-07-26T12:00:00+12:00
published_at: 2026-07-26T12:00:00+12:00
author: webdesignhot
source_url: https://openstax.org
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [education, oss]
tags: [light, structured, sans, education, open-source, nonprofit]
preview_swatch: ['#f7fcff', '#d4450c', '#026aa1']
related: [edx, khan-academy, udacity]
description: 'OpenStax uses an accessible nonprofit education system: pale-blue content bands, white resource panels, orange conversion actions, blue text links, Helvetica typography, and direct pathways for higher education, K12, and learning research.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: link
  muted: text-muted
  border: border
  ring: link
colors:
  bg: '#f7fcff'
  bg-page: '#f1f1f1'
  surface: '#ffffff'
  text: '#424242'
  text-muted: '#5e6162'
  brand: '#d4450c'
  brand-hover: '#b83a0a'
  link: '#026aa1'
  link-hover: '#01547f'
  border: '#d7d7d7'
  success: '#287b54'
  on-brand: '#ffffff'
typography:
  display:
    family: 'Neue Helvetica W01, Helvetica Neue, Arial, sans-serif'
    weights: [500, 700]
  body:
    family: 'Neue Helvetica W01, Helvetica Neue, Arial, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, monospace'
    weights: [400]
  scale:
    hero: { size: 56, weight: 700, lineHeight: 1.08, tracking: '0', family: display }
    h1: { size: 42, weight: 700, lineHeight: 1.15, tracking: '0', family: display }
    h2: { size: 30, weight: 700, lineHeight: 1.2, tracking: '0', family: display }
    body-lg: { size: 20, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
radius:
  micro: 2
  sm: 3
  md: 5
  lg: 10
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96]
layout:
  page-width: 1200
  prose-width: 720
  header-height: 104
  resource-grid-columns: 3
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'remove decorative illustration movement'
breakpoints:
  mobile: 640
  tablet: 960
  desktop: 1200
components:
  button-primary: { bg: brand, text: on-brand, radius: 5, padding: '12px 20px' }
  resource-card: { bg: surface, text: text, border: border, radius: 5, padding: 24 }
  text-link: { bg: transparent, text: link, radius: 0, padding: '4px 0' }
lineage:
  summary: 'OpenStax combines university-library reliability with the open-web clarity of a public service. Orange creates a recognizable action layer, while pale blue and white keep dense education choices approachable.'
  influences:
    - { name: 'University publishing', role: 'institutional typography, textbook structure, and research credibility' }
    - { name: 'Public service websites', role: 'clear audience pathways and accessibility-first navigation' }
    - { name: 'Open education', role: 'direct resource access and impact reporting' }
---

## 1. Visual Theme & Atmosphere

The page feels like a dependable education service rather than a premium course store. Pale blue bands, white resource modules, and direct copy keep free access central.

## 2. Color Palette & Roles

Orange `#d4450c` is the action and identity color. Blue `#026aa1` is reserved for links and navigation; charcoal carries long-form text on white or pale blue.

## 3. Typography Rules

Use Neue Helvetica or a close neutral sans throughout. Headings are bold and practical, while resource descriptions use generous line height for long educational copy.

## 4. Component Stylings

Audience cards are white, lightly bordered, and use 5px corners. Buttons are orange with white text; secondary discovery paths can be blue text links with visible underlines on hover and focus.

## 5. Layout Principles

Organize the homepage around Higher Education, K12, and Learning Research. Keep institutional proof and impact metrics close to these pathways rather than isolating them in decorative cards.

## 6. Shapes & Radius Scale

Use 2-5px corners for controls and resource cards, with 10px reserved for larger callout panels. The visual system is structured rather than soft.

## 7. Depth & Elevation

Prefer borders and alternating section backgrounds to shadows. Resource cards may use a minimal shadow only when white overlaps another light surface.

## 8. Interaction & Motion

Interactions are short and utilitarian. Links gain underline or darker blue, buttons darken, and menus reveal without large movement.

## 9. Accessibility & A11y

Keep skip navigation visible on focus, label audience and subject menus accurately, and preserve strong link distinction. Orange buttons need white text and a non-color focus outline.

## 10. Responsive Behavior

Collapse the resource grid into a single column and keep audience labels before descriptions. Navigation can become a menu, but Order Print, Help, and Log in remain discoverable.

## 11. Content & Voice

Use inclusive, concrete language: free textbooks, instructor resources, K12 curriculum, learning research, and savings. State institutional relationships and impact numbers directly.

## 12. Dark Mode & Theming

The primary system is light because it supports textbook-like reading. A dark reading mode should apply to long-form resources without changing the orange and blue identity roles.

## 13. Lineage & Influences

OpenStax sits between an academic publisher and a public digital utility. Its restrained geometry and practical hierarchy keep the nonprofit mission more prominent than visual novelty.

## 14. Do's and Don'ts

Do prioritize audiences, resources, accessibility, and impact. Do not hide free access behind vague marketing, over-round cards, or use decorative motion in core learning paths.

## 15. Agent Prompt Guide

Create an OpenStax-style education homepage with pale-blue full-width bands, bold Helvetica headings, white audience resource panels, orange primary buttons, blue accessible links, clear Higher Education and K12 pathways, and visible nonprofit impact metrics.
