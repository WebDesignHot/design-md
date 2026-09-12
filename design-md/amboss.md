---
name: AMBOSS
tagline: Clinical learning presented through teal confidence and
  audience-specific navigation.
spec: webdesignhot/0.2
profile: catalog
source_url: https://www.amboss.com/us
quality: auto
published_at: 2026-09-12T05:42:29.725Z
updated_at: 2026-09-12T05:42:29.725Z
categories: [healthcare, education]
tags: [light, blue, sans, search]
preview_swatch: ["#ffffff", "#047a88", "#293b47"]
x-webdesignhot:
  author: webdesignhot
  quality: auto
  featured: false
  published_at: 2026-09-12T05:42:29.725Z
  updated_at: 2026-09-12T05:42:29.725Z
  categories:
    - healthcare
    - education
  tags:
    - light
    - blue
    - sans
    - search
  preview_swatch:
    - "#ffffff"
    - "#047a88"
    - "#293b47"
  related:
    - mayo-clinic
    - cleveland-clinic
    - openstax
  description: AMBOSS combines a white audience-oriented header with a deep teal
    statement band. A prominent announcement precedes the centered message; a
    pink editorial action and institution marks provide a second layer of
    hierarchy. The page addresses learning and clinical work together.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
colors:
  bg: "#ffffff"
  text: "#293b47"
  brand: "#047a88"
  on-brand: "#ffffff"
  surface: "#f9fafb"
  hero-dark: "#052c31"
  accent: "#c84678"
typography:
  display:
    family: LatoLocal, Lato, sans-serif
    weights:
      - 600
  body:
    family: LatoLocal, Lato, sans-serif
    weights:
      - 400
      - 600
  scale:
    h1:
      fontSize: 48
      fontWeight: 600
      fontFamily: LatoLocal, Lato, sans-serif
    body:
      fontSize: 16
      fontWeight: 400
      fontFamily: LatoLocal, Lato, sans-serif
radius:
  action: 8
components:
  button-primary:
    base:
      bg: brand
      text: on-brand
      radius: 8
---

Scope: public homepage sampled at 1440px and 390px on 2026-09-12. Font names are observed CSS declarations, not redistributed font assets. Body size outside an explicitly measured role is a 16px implementation baseline; focus, validation, timing, and alternate themes below are recommendations, not audited source states. No transactional flow was submitted.

## 1. Visual Theme & Atmosphere

AMBOSS combines a white audience-oriented header with a deep teal statement band. A prominent announcement precedes the centered message; a pink editorial action and institution marks provide a second layer of hierarchy. The page addresses learning and clinical work together.

## 2. Color Palette & Roles

The observed trial action uses #047a88 and the institution strip uses #052c31. White and #f9fafb support later sections, with #293b47 ink. The pink action is #c84678. The hero has a changing teal treatment; hero-dark is a measured strip color, not an assertion that the entire image is flat.

## 3. Typography Rules

LatoLocal is the measured font throughout navigation and display. The heading is 48px at weight 600 on desktop and approximately 37px at mobile. Keep readable sentence-case headings; do not substitute a high-contrast serif to imply clinical authority.

## 4. Component Stylings

The header distinguishes login from a filled teal trial action. The hero uses a pink editorial action, while the announcement contains its own link and dismiss control. Keep these command roles distinct and label every dismiss icon.

## 5. Layout Principles

Audience navigation precedes a centered statement and a separate institution-logo strip. Mobile stacks the announcement contents above the headline. Follow with light reading sections rather than introducing multiple competing dark cards.

## 6. Shapes & Radius Scale

The observed trial control has 8px corners. Announcement panels may be more rounded, but the main page remains full-width bands. Reuse the compact radius for controls and avoid treating the whole hero as a floating card.

## 7. Depth & Elevation

Dark teal tonal separation and the white header establish layers. Institution marks sit on a darker strip without individual cards. Prefer borders and tonal surfaces to strong shadows when adding menus or disclosure panels.

## 8. Interaction & Motion

Dismissal should remove only the announcement and retain focus appropriately. No trial or clinical workflow was opened. Derived interactions should provide stable navigation and avoid auto-moving logos for reduced-motion users.

## 9. Accessibility & A11y

Clinical claims require evidence beyond institutional logos. Make audience menus keyboard-operable and distinguish the pink action by label, not color alone. Medical content should have clear scope and not imply this visual design establishes clinical validity.

## 10. Responsive Behavior

The 390px view keeps the announcement above a multi-line headline and near-full-width pink action. Its long vertical introduction is a source behavior, not a requirement to hide the next section. Check compact phones and allow the announcement to collapse accessibly.

## 11. Content & Voice

Use precise audience labels for students, clinicians, and institutions. Separate learning benefits from clinical performance claims. Evidence links belong near the claims they support and should identify their destination.

## 12. Dark Mode & Theming

White navigation and content coexist with a dark hero and partner strip. No app-wide dark theme was verified. A derived dark variant must retain a readable article surface rather than making all clinical text teal-on-black.

## 13. Lineage & Influences

This extraction covers the public US AMBOSS homepage after rejecting optional cookies. It does not represent the authenticated medical library, question bank, or clinical assistant interaction design.

## 14. Do's and Don'ts

Preserve audience navigation, distinguish trial from editorial actions, and keep evidence links explicit. Avoid suggesting that logos prove safety, copying consent dialog styles, or inventing medical application states from the acquisition page.

## 15. Agent Prompt Guide

Create a medical-learning homepage with white audience navigation, a teal statement band, pink editorial action, and a dark institution strip. Test announcement dismissal and long mobile headlines without implying unverified clinical claims.
