---
name: reMarkable
tagline: Paper-like product storytelling with fine serif display and compact
  blue actions.
spec: webdesignhot/0.2
profile: catalog
source_url: https://remarkable.com/
quality: auto
published_at: 2026-09-12T05:42:06.377Z
updated_at: 2026-09-12T05:42:06.377Z
categories: [hardware]
tags: [light, minimal, sans, product]
preview_swatch: ["#fcfbf8", "#2559f4", "#211e1c"]
x-webdesignhot:
  author: webdesignhot
  quality: auto
  featured: false
  published_at: 2026-09-12T05:42:06.377Z
  updated_at: 2026-09-12T05:42:06.377Z
  categories:
    - hardware
  tags:
    - light
    - minimal
    - sans
    - product
  preview_swatch:
    - "#fcfbf8"
    - "#2559f4"
    - "#211e1c"
  related:
    - dyson
    - garmin
    - fairphone
  description: The source presents a writing device through a large photographic
    scene and unusually fine serif headline. Compact rectangular actions and a
    quiet transparent header let the product scene dominate. The effect is
    editorial and tactile, not a simulated software dashboard.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
colors:
  bg: "#fcfbf8"
  text: "#211e1c"
  brand: "#2559f4"
  on-brand: "#fcfbf8"
  surface: "#d9d2c4"
  accent: "#88dd85"
typography:
  display:
    family: reMarkableSerif, Book Antiqua, Georgia, serif
    weights:
      - 325
  body:
    family: reMarkableSans, Helvetica, sans-serif
    weights:
      - 400
      - 600
  scale:
    h1:
      fontSize: 84
      fontWeight: 325
      fontFamily: reMarkableSerif, Book Antiqua, Georgia, serif
    body:
      fontSize: 16
      fontWeight: 400
      fontFamily: reMarkableSans, Helvetica, sans-serif
radius:
  action: 2
components:
  button-primary:
    base:
      bg: brand
      text: on-brand
      radius: 2
---

Scope: public homepage sampled at 1440px and 390px on 2026-09-12. Font names are observed CSS declarations, not redistributed font assets. Body size outside an explicitly measured role is a 16px implementation baseline; focus, validation, timing, and alternate themes below are recommendations, not audited source states. No transactional flow was submitted.

## 1. Visual Theme & Atmosphere

The source presents a writing device through a large photographic scene and unusually fine serif headline. Compact rectangular actions and a quiet transparent header let the product scene dominate. The effect is editorial and tactile, not a simulated software dashboard.

## 2. Color Palette & Roles

Observed UI colors are paper #fcfbf8, dark ink #211e1c, action blue #2559f4, warm neutral #d9d2c4, and new-product green #88dd85. The sky blue belongs to photography and is not declared as a global background token.

## 3. Typography Rules

reMarkableSerif supplies the display, with a sampled weight of 325 and approximately 84px desktop size. At 390px it is 44px. reMarkableSans supplies product names and controls. A system-serif fallback will not reproduce the proprietary letterforms exactly.

## 4. Component Stylings

A solid blue information action sits beside a dark shopping action, both with compact rectangular silhouettes. The new-product badge is a separate green capsule. Keep the shopping arrow attached to its label and the account control visually subordinate.

## 5. Layout Principles

The hero is a full-bleed scene with left-aligned product identification, a short headline, supporting copy, and paired actions. Mobile changes the photographic framing and places the figure below the text. Do not put the entire experience in a preview card.

## 6. Shapes & Radius Scale

Observed action corners are 2px, while the small new-product marker is fully rounded. Preserve this contrast. The device and photographic edges should carry their real physical shape instead of an added UI card radius.

## 7. Depth & Elevation

Depth comes from the photographic subject and device, not layers of interface shadow. The transparent navigation remains readable against the scene. Use a solid backing if a replacement image makes dark controls disappear.

## 8. Interaction & Motion

Use stable action widths and restrained feedback. The audit did not measure animation durations, carousel physics, or checkout states. A derived implementation should respect reduced motion and never move the writing surface merely as decoration.

## 9. Accessibility & A11y

The thin display face needs enough size and contrast, especially over imagery. Make account and menu icons labeled for assistive technology. Provide descriptive product imagery and do not rely on handwritten visual effects to communicate product capabilities.

## 10. Responsive Behavior

Mobile uses a 44px display and keeps both actions visible above the portrait. Preserve the product-specific image crop rather than shrinking the desktop scene wholesale. Long product names must wrap independently of the badge.

## 11. Content & Voice

Use concise language about writing, reading, and thinking. Separate verifiable device capabilities from emotional positioning. Product names and revision labels should be data, not permanently embedded in a reusable component.

## 12. Dark Mode & Theming

Paper is the audited default surface; a dark secondary action is not evidence of a dark theme. A dark extension should preserve the paper/product distinction and retest thin serif text. Do not invert the product photography.

## 13. Lineage & Influences

The captured homepage promotes reMarkable Paper Pure through lifestyle photography. It does not establish specifications for the device operating system, drawing canvas, or checkout. A small cookie notice remained at the viewport edge but did not cover the audited headline or actions.

## 14. Do's and Don'ts

Retain fine serif scale, small rectangular actions, and real device imagery. Avoid pills for every action, invented sky-color tokens, heavy interface shadows, or treating the desktop heading size as appropriate on a phone.

## 15. Agent Prompt Guide

Create a writing-device presentation with a paper UI foundation, fine serif headline, blue information action, and contrasting shop action over real photography. Verify the mobile crop and legibility with the actual font or its declared fallback.
