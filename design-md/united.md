---
name: United Airlines
tagline: 'Navy travel utility with bright-blue account actions, white booking panels, and task-first flight controls.'
updated_at: 2026-07-26T12:00:00+12:00
published_at: 2026-07-26T12:00:00+12:00
author: webdesignhot
source_url: https://www.united.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [hospitality, saas]
tags: [light, navy, structured, sans, travel, airline]
preview_swatch: ['#002244', '#1414d2', '#ffffff']
related: [lufthansa, qatar-airways, airbnb]
description: 'United.com is a transaction-first airline interface: a deep navy navigation shell, a bright blue account and submit color, white flight-search surfaces, compact trip tabs, and dense but predictable controls for booking, check-in, status, and trip management.'
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
  bg-navy: '#002244'
  surface: '#ffffff'
  surface-soft: '#f4f6f8'
  text: '#1b1b1b'
  text-muted: '#666666'
  brand: '#002244'
  accent: '#1414d2'
  accent-hover: '#0d0da8'
  border: '#d6d6d6'
  success: '#247a4d'
  danger: '#c63030'
  on-brand: '#ffffff'
typography:
  display:
    family: 'NeuePlakforUnited-Rg, Noto Sans, Arial, sans-serif'
    weights: [400, 700]
  body:
    family: 'NeuePlakforUnited-Rg, Noto Sans, Arial, sans-serif'
    weights: [400, 600, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, monospace'
    weights: [400]
  scale:
    hero: { size: 48, weight: 700, lineHeight: 1.1, tracking: '0', family: display }
    h1: { size: 40, weight: 700, lineHeight: 1.15, tracking: '0', family: display }
    h2: { size: 30, weight: 700, lineHeight: 1.2, tracking: '0', family: display }
    body-lg: { size: 18, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
radius:
  micro: 2
  sm: 4
  md: 8
  lg: 16
  pill: 30
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96]
layout:
  page-width: 1280
  prose-width: 720
  header-height: 88
  booking-width: 1180
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 220
  duration-slow: 360
  reduced-motion: 'disable destination carousel movement'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
components:
  button-primary: { bg: accent, text: on-brand, radius: 30, padding: '12px 24px' }
  booking-panel: { bg: surface, text: text, border: border, radius: 4, padding: 24 }
  booking-tab: { bg: bg-navy, text: on-brand, radius: 0, padding: '14px 20px' }
lineage:
  summary: 'United follows airline self-service conventions: the booking engine is the main product, navigation is a dark operational shell, and blue establishes continuity across account, search, and assistance states.'
  influences:
    - { name: 'Airline reservation systems', role: 'trip type, route, date, passenger, cabin, and loyalty controls' }
    - { name: 'Travel portals', role: 'book, status, check-in, and trip-management task tabs' }
    - { name: 'Enterprise service design', role: 'dense navigation and accessibility shortcuts' }
---

## 1. Visual Theme & Atmosphere

United is a practical travel utility wrapped in navy. The header and task tabs feel operational; the white booking panel provides a clean workspace over destination imagery or a dark backdrop.

## 2. Color Palette & Roles

Use navy `#002244` for global navigation and task tabs. Bright blue `#1414d2` drives sign-in and flight-search actions, while white carries forms and dense travel information.

## 3. Typography Rules

NeuePlak for United is broad and highly legible. Use bold 48px type for welcome or campaign headlines, then compact 16px labels for form-heavy booking controls.

## 4. Component Stylings

The booking panel contains tabs, trip-type selection, route fields, dates, travelers, cabin, and one dominant `Find flights` action. Keep inputs rectangular and actions rounded without turning the entire form into pills.

## 5. Layout Principles

Place booking before promotional content. Keep task tabs visible and organize fields in the same order travelers think: route, dates, party, cabin, then search.

## 6. Shapes & Radius Scale

Use 4px for form surfaces, 8px for supporting modules, and 30px for account or submit actions. Preserve square joins between adjacent booking tabs.

## 7. Depth & Elevation

Use one shallow shadow beneath the booking panel. Within the form, borders and grouping should carry hierarchy instead of nested card elevation.

## 8. Interaction & Motion

Tab changes and field expansion should complete quickly and preserve data. Motion belongs in destination media, not in core booking controls.

## 9. Accessibility & A11y

Retain skip-to-book navigation, visible focus rings, complete field labels, and error summaries. Dates and traveler counts must be operable without a pointer.

## 10. Responsive Behavior

On mobile, stack fields and keep task tabs horizontally scrollable only when each tab remains readable. Make `Find flights` full width and keep advanced search secondary.

## 11. Content & Voice

Use concise service verbs: Book, Check in, View status, Manage trip, Find flights. Operational notices should state what changed and what action is needed.

## 12. Dark Mode & Theming

Navy is a shell rather than a complete dark theme. Booking and account forms remain light for clarity, with dark surfaces limited to navigation and selected task states.

## 13. Lineage & Influences

United inherits the familiar grammar of global airline sites but gives it a clear blue hierarchy. The design succeeds when repeated travelers can act immediately without learning a new interface.

## 14. Do's and Don'ts

Do keep booking first, labels explicit, and status tools visible. Do not bury flight search beneath campaigns, animate form layout, or use destination photography behind input text.

## 15. Agent Prompt Guide

Create a United-style airline homepage with a deep navy navigation shell, white booking panel, Book/Flight status/Check-in/My trips tabs, compact route and date fields, bright-blue rounded actions, and visible accessibility shortcuts.
