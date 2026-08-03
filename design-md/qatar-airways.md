---
name: Qatar Airways
tagline: 'Cinematic travel luxury with burgundy identity, airy gray surfaces, light serif-like display type, and white pill actions.'
updated_at: 2026-07-26T12:00:00+12:00
published_at: 2026-07-26T12:00:00+12:00
author: webdesignhot
source_url: https://www.qatarairways.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [hospitality, saas]
tags: [light, premium, burgundy, sans, travel, airline]
preview_swatch: ['#5c0931', '#f2f3fa', '#ffffff']
related: [lufthansa, united, airbnb]
description: 'Qatar Airways pairs a cinematic destination hero with its burgundy identity, white navigation and pill actions, pale gray content surfaces, Graphik body typography, and light Jotia display headlines that give flight discovery a premium editorial tone.'
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
  bg: '#f2f3fa'
  bg-deep: '#2a071a'
  surface: '#ffffff'
  surface-soft: '#f2f3fa'
  text: '#1f212b'
  text-muted: '#5d5f68'
  text-on-image: '#ffffff'
  brand: '#5c0931'
  brand-hover: '#470725'
  accent: '#8d1b4c'
  border: '#d9dbe4'
  on-brand: '#ffffff'
typography:
  display:
    family: 'Jotia, Georgia, serif'
    weights: [300, 400]
  body:
    family: 'Graphik, Graphik Web, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, monospace'
    weights: [400]
  scale:
    hero: { size: 48, weight: 300, lineHeight: 1.1, tracking: '0', family: display }
    h1: { size: 42, weight: 300, lineHeight: 1.15, tracking: '0', family: display }
    h2: { size: 32, weight: 300, lineHeight: 1.2, tracking: '0', family: display }
    body-lg: { size: 19, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
radius:
  micro: 2
  sm: 6
  md: 10
  lg: 20
  pill: 64
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
layout:
  page-width: 1320
  prose-width: 720
  header-height: 88
  hero-min-height: 720
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 160
  duration-standard: 280
  duration-slow: 560
  reduced-motion: 'replace hero video with a representative still'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1320
components:
  button-primary: { bg: surface, text: brand, radius: 64, padding: '13px 26px' }
  booking-panel: { bg: surface, text: text, border: border, radius: 10, padding: 24 }
  alert-strip: { bg: surface-soft, text: text, border: border, radius: 0, padding: '10px 20px' }
lineage:
  summary: 'Qatar Airways combines luxury editorial imagery with the transaction patterns of an international airline. Burgundy identifies the carrier, while white controls and light display typography keep the cinematic hero elegant.'
  influences:
    - { name: 'Luxury travel campaigns', role: 'cinematic destination imagery and restrained display type' }
    - { name: 'Airline service portals', role: 'booking, account, alerts, and loyalty navigation' }
    - { name: 'Editorial fashion', role: 'light headline weights and spacious image overlays' }
---

## 1. Visual Theme & Atmosphere

The first viewport is cinematic and aspirational. White navigation and a light Jotia headline sit over a real destination scene, while burgundy remains visible in identity and account details.

## 2. Color Palette & Roles

Burgundy `#5c0931` is the unmistakable brand anchor. Pale gray `#f2f3fa` supports reading sections, and white is used for hero text, pills, and booking surfaces.

## 3. Typography Rules

Use Jotia at light weight for destination and campaign headings. Graphik carries navigation, travel alerts, forms, and service details with clear medium-weight labels.

## 4. Component Stylings

Hero actions are white pills with burgundy text. Booking panels use white surfaces, 10px corners, explicit labels, and burgundy submit actions when placed below the image.

## 5. Layout Principles

Give the destination scene enough height to establish emotion, then surface booking and offer discovery directly. Travel alerts should remain visible but compact above the main navigation.

## 6. Shapes & Radius Scale

Use 6-10px for forms and cards, 20px for promotional modules, and 64px for short luxury campaign actions. Avoid applying pills to dense controls.

## 7. Depth & Elevation

Use a controlled image scrim and tonal surface changes. Booking panels may overlap the hero with a soft shadow, but offer sections should remain largely flat.

## 8. Interaction & Motion

Hero media can cross-fade slowly. Menus, account controls, and booking feedback must remain fast; reduced-motion users receive a static destination still.

## 9. Accessibility & A11y

Maintain strong white-on-image contrast with a scrim, keep travel alerts keyboard reachable, and label language, search, account, and booking icons. Video needs pause controls.

## 10. Responsive Behavior

On mobile, shorten the hero, move booking into a full-width panel below it, and keep the primary offer action visible. Travel alerts may collapse into an accessible disclosure.

## 11. Content & Voice

Use confident, gracious travel language: explore, experience, privilege, destination, and journey. Pair aspiration with practical dates, routes, and offer conditions.

## 12. Dark Mode & Theming

Burgundy and destination imagery create dark moments, but content and forms remain light. Do not convert the pale editorial sections into a generic charcoal theme.

## 13. Lineage & Influences

The visual system sits between a luxury campaign and a service application. Jotia provides editorial distinction; Graphik and the booking conventions preserve operational clarity.

## 14. Do's and Don'ts

Do use real destination imagery, preserve burgundy, and keep booking practical. Do not rely on atmosphere alone, obscure alerts, or use rounded pills for every travel field.

## 15. Agent Prompt Guide

Create a Qatar Airways-style travel hero with cinematic destination photography, white navigation, a light 48px Jotia headline, burgundy identity details, a white `Explore offers` pill, compact travel alerts, and an elegant light booking panel below.
