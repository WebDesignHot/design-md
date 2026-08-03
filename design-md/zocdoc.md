---
name: Zocdoc
tagline: 'Patient-first appointment search with sunny yellow surfaces, deep violet type, and friendly structured forms.'
updated_at: 2026-07-26T12:00:00+12:00
published_at: 2026-07-26T12:00:00+12:00
author: webdesignhot
source_url: https://www.zocdoc.com
spec: webdesignhot/0.1
quality: auto
featured: false
categories: [healthcare, marketplace]
tags: [light, yellow, structured, sans, healthcare, booking]
preview_swatch: ['#fff04b', '#3a2b71', '#ffffff']
related: [headway, mayo-clinic, opentable]
description: 'Zocdoc turns healthcare search into a friendly marketplace flow with a saturated yellow brand field, deep violet copy, conversational prompts, and practical doctor, specialty, location, insurance, and availability controls.'
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
  bg: '#fff04b'
  surface: '#ffffff'
  surface-soft: '#fffbe0'
  text: '#3a2b71'
  text-body: '#242424'
  text-muted: '#666666'
  brand: '#fff04b'
  accent: '#3a2b71'
  accent-hover: '#2d215c'
  border: '#d8d5df'
  success: '#237a57'
  danger: '#c63d3d'
  on-brand: '#3a2b71'
typography:
  display:
    family: 'Sofia Pro, Arial, sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Sofia Pro, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, monospace'
    weights: [400]
  scale:
    hero: { size: 64, weight: 600, lineHeight: 1.05, tracking: '0', family: display }
    h1: { size: 44, weight: 600, lineHeight: 1.1, tracking: '0', family: display }
    h2: { size: 32, weight: 600, lineHeight: 1.2, tracking: '0', family: display }
    body-lg: { size: 20, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
radius:
  micro: 4
  sm: 8
  md: 12
  lg: 20
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96]
layout:
  page-width: 1240
  prose-width: 680
  header-height: 72
  search-width: 920
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 140
  duration-standard: 220
  duration-slow: 360
  reduced-motion: 'disable illustration drift and use instant result updates'
breakpoints:
  mobile: 640
  tablet: 960
  desktop: 1240
components:
  button-primary: { bg: accent, text: surface, radius: 8, padding: '14px 22px' }
  search-field: { bg: surface, text: text-body, border: border, radius: 8, padding: '14px 16px' }
  provider-card: { bg: surface, text: text-body, border: border, radius: 12, padding: 20 }
lineage:
  summary: 'Zocdoc borrows the clarity of travel booking and applies a warmer, less institutional color system to healthcare discovery. Yellow creates recognition while violet keeps search and conversion controls legible.'
  influences:
    - { name: 'Appointment marketplaces', role: 'multi-field search, availability, ratings, and provider cards' }
    - { name: 'Consumer healthcare', role: 'reassuring language and plain-language specialty discovery' }
    - { name: 'Friendly service brands', role: 'sunny color field and rounded illustration vocabulary' }
---

## 1. Visual Theme & Atmosphere

The visual system should feel optimistic and useful rather than clinical. Yellow creates the first-viewport atmosphere; white search and provider surfaces make the booking workflow easy to scan.

## 2. Color Palette & Roles

Use yellow as a large brand field, not as body text. Deep violet carries headlines and actions, while white and soft neutral surfaces hold forms, provider details, and availability.

## 3. Typography Rules

Use a rounded geometric sans with clear distinctions between question-like headlines, form labels, provider names, and metadata. Keep body copy plain and comfortably spaced.

## 4. Component Stylings

Search fields should be large, white, icon-led, and grouped into one obvious flow. Provider cards need restrained borders, visible ratings, next-available time, and a violet booking action.

## 5. Layout Principles

Lead with the task: what care is needed, where, and when. Put trust and educational content after search rather than before it.

## 6. Shapes & Radius Scale

Use 8px for fields and buttons, 12px for provider cards, and 20px only for large informational panels. Pills are appropriate for availability filters and insurance chips.

## 7. Depth & Elevation

Separate white workflow surfaces from yellow with a light border and restrained shadow. Avoid glossy elevation or translucent glass in healthcare forms.

## 8. Interaction & Motion

Autocomplete and calendar feedback should be immediate. Use short fades for result changes, preserve the user's search values, and remove decorative motion for reduced-motion users.

## 9. Accessibility & A11y

Never set white text on yellow. Form errors must include text and programmatic relationships; date, insurance, and specialty selectors require complete keyboard support.

## 10. Responsive Behavior

Stack search fields vertically on mobile and keep the final action full width. Provider cards should preserve rating, specialty, location, and next appointment without horizontal scrolling.

## 11. Content & Voice

Ask clear patient questions and use familiar terms. CTAs should describe the next step, such as `Find doctors`, `View availability`, or `Book appointment`.

## 12. Dark Mode & Theming

The core expression is light. If a dark accessibility theme is offered, retain yellow only as a controlled accent and use a deep violet-black page surface.

## 13. Lineage & Influences

The system combines booking-marketplace efficiency with a friendlier consumer-health tone. It avoids hospital-blue dominance and replaces it with yellow recognition plus violet control states.

## 14. Do's and Don'ts

Do keep search prominent and preserve practical provider metadata. Do not use yellow for long text, hide fees or availability, or turn sensitive healthcare choices into playful animation.

## 15. Agent Prompt Guide

Create a Zocdoc-style healthcare search page with a bright yellow hero, deep violet conversational headline, white specialty and location fields, a clear violet search button, and practical provider cards with ratings and available appointment times.
