---
name: Lufthansa
tagline: 'Navy airline service shell with yellow identity accents, light booking surfaces, and precise travel modules.'
updated_at: 2026-07-26T12:00:00+12:00
published_at: 2026-07-26T12:00:00+12:00
author: webdesignhot
source_url: https://www.lufthansa.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [hospitality, saas]
tags: [light, navy, yellow, structured, travel, airline]
preview_swatch: ['#05164d', '#ffad00', '#ffffff']
related: [united, qatar-airways, airbnb]
description: 'Lufthansa uses a precise airline service system: a deep navy header, signature yellow identity moments, white booking and content surfaces, custom Lufthansa Head and Text families, and restrained cards for flight search, travel extras, and destination guidance.'
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
  bg-navy: '#05164d'
  surface: '#ffffff'
  surface-soft: '#f5f5f5'
  text: '#05164d'
  text-muted: '#52627c'
  text-on-dark: '#ebebeb'
  brand: '#05164d'
  accent: '#ffad00'
  accent-hover: '#e89d00'
  border: '#d7dce4'
  on-brand: '#ffffff'
typography:
  display:
    family: 'LufthansaHead, Arial, Helvetica, sans-serif'
    weights: [300, 400, 700]
  body:
    family: 'LufthansaText, Arial, Helvetica, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, monospace'
    weights: [400]
  scale:
    hero: { size: 52, weight: 300, lineHeight: 1.08, tracking: '0', family: display }
    h1: { size: 40, weight: 300, lineHeight: 1.15, tracking: '0', family: display }
    h2: { size: 34, weight: 300, lineHeight: 1.2, tracking: '0', family: display }
    body-lg: { size: 19, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
radius:
  micro: 2
  sm: 4
  md: 8
  lg: 16
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96]
layout:
  page-width: 1280
  prose-width: 720
  header-height: 80
  booking-width: 1180
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 220
  duration-slow: 380
  reduced-motion: 'disable promotional carousel movement'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
components:
  button-primary: { bg: accent, text: bg-navy, radius: 4, padding: '12px 22px' }
  booking-panel: { bg: surface, text: text, border: border, radius: 8, padding: 24 }
  service-card: { bg: surface-soft, text: text-muted, border: border, radius: 8, padding: 20 }
lineage:
  summary: 'Lufthansa translates German transport precision into a calm digital service. Navy anchors trust, yellow preserves immediate brand recognition, and light modular surfaces keep complex travel tasks manageable.'
  influences:
    - { name: 'European transport systems', role: 'precise hierarchy and predictable task flows' }
    - { name: 'Airline booking engines', role: 'route, class, traveler, check-in, and status controls' }
    - { name: 'International modernism', role: 'restrained geometry and disciplined color use' }
---

## 1. Visual Theme & Atmosphere

Lufthansa feels precise and calm. A dark navy service shell frames white booking and content areas, while yellow appears in controlled identity and action moments.

## 2. Color Palette & Roles

Use navy `#05164d` for headers, major text, and brand structure. Yellow `#ffad00` is the recognition accent; muted blue-gray `#52627c` supports dense service copy.

## 3. Typography Rules

Lufthansa Head uses light weights for spacious display text. Lufthansa Text handles labels and travel details with practical density and consistent line height.

## 4. Component Stylings

The booking panel uses white fields, visible labels, and compact 4-8px corners. Service cards for hotels, cars, insurance, activities, and parking sit on `#f5f5f5` with simple icons.

## 5. Layout Principles

Keep Book, My flights, Check-in, and Flight status accessible from the top. Place supporting travel products after the primary flight workflow.

## 6. Shapes & Radius Scale

Use 4px for primary controls, 8px for service cards, and 16px only for large promotional imagery. Do not turn navigation into oversized pills.

## 7. Depth & Elevation

Rely on a navy-to-white structural transition and thin gray borders. Shadows should be soft and reserved for the central flight-search layer.

## 8. Interaction & Motion

Field expansion, fare selection, and carousel movement should be restrained. Yellow hover and focus states can reinforce identity without moving surrounding controls.

## 9. Accessibility & A11y

Preserve skip links for navigation, content, flight search, search, and footer. Every loading state needs a text equivalent, and date/class controls require keyboard operation.

## 10. Responsive Behavior

Stack route and travel controls on mobile while maintaining their logical order. Service cards may become a two-column or horizontal list only when labels remain readable.

## 11. Content & Voice

Use calm service language: find flights, check in, manage flights, choose extras, prepare for your trip. Promotional text should remain secondary to task completion.

## 12. Dark Mode & Theming

Navy is the persistent brand shell, not a full dark mode. White remains the default for booking, forms, and reading-heavy service content.

## 13. Lineage & Influences

The system reflects modern transport graphics: high legibility, limited colors, and repeatable modules. Custom type and yellow identity moments prevent the utility layer from feeling generic.

## 14. Do's and Don'ts

Do prioritize service tasks, use yellow sparingly, and keep loading feedback explicit. Do not fill large surfaces with yellow, hide flight status, or use low-contrast text on navy.

## 15. Agent Prompt Guide

Create a Lufthansa-style airline homepage with a deep navy header, light-weight Lufthansa Head display type, white flight-search panel, signature yellow submit action, compact service cards, and top-level Book/My flights/Check-in/Flight status navigation.
