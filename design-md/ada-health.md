---
name: Ada Health
tagline: Quiet health information with serif clarity and slate-blue navigation.
spec: webdesignhot/0.2
profile: catalog
source_url: https://ada.com/
quality: auto
published_at: 2026-09-12T05:46:38.196Z
updated_at: 2026-09-12T05:46:38.196Z
categories: [healthcare]
tags: [light, sans, health, editorial]
preview_swatch: ["#ffffff", "#293754", "#293754"]
x-webdesignhot:
  author: webdesignhot
  quality: auto
  featured: false
  published_at: 2026-09-12T05:46:38.196Z
  updated_at: 2026-09-12T05:46:38.196Z
  categories:
    - healthcare
  tags:
    - light
    - sans
    - health
    - editorial
  preview_swatch:
    - "#ffffff"
    - "#293754"
    - "#293754"
  related:
    - onemedical
    - headway
    - oscar-health
  description: Ada uses a quiet, spacious editorial structure with slate-blue
    typography and a soft photographic or color-wash introduction. A serif
    statement leads to a modest download action. The medical-library section
    pairs imagery with explanatory reading rather than a dense feature grid.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
colors:
  bg: "#ffffff"
  text: "#293754"
  brand: "#293754"
  on-brand: "#ffffff"
  surface: "#ffffff"
typography:
  display:
    family: PT Serif, serif
    weights:
      - 400
  body:
    family: Noto Sans, sans-serif
    weights:
      - 400
      - 600
  scale:
    h1:
      fontSize: 50
      fontWeight: 400
      fontFamily: PT Serif, serif
    body:
      fontSize: 17
      fontWeight: 400
      fontFamily: Noto Sans, sans-serif
radius:
  action: 100
components:
  button-primary:
    base:
      bg: brand
      text: on-brand
      radius: 100
---

Scope: public homepage sampled at 1440px and 390px on 2026-09-12. Font names are observed CSS declarations, not redistributed font assets. Body size outside an explicitly measured role is a 16px implementation baseline; focus, validation, timing, and alternate themes below are recommendations, not audited source states. No transactional flow was submitted.

## 1. Visual Theme & Atmosphere

Ada uses a quiet, spacious editorial structure with slate-blue typography and a soft photographic or color-wash introduction. A serif statement leads to a modest download action. The medical-library section pairs imagery with explanatory reading rather than a dense feature grid.

## 2. Color Palette & Roles

The audited core palette is deliberately small: #293754 ink and action color on white. Pastel washes are presentation media, not independently measured semantic colors. Keep the core tokens compact rather than inventing a large healthcare palette.

## 3. Typography Rules

PT Serif is used at 50px for the desktop headline and 40px on mobile; the subsequent section heading is 40px. Noto Sans carries body copy, sampled at 17px. Retain the serif/sans division between reassurance and practical navigation.

## 4. Component Stylings

The navigation download control is outlined, while the hero download action is solid slate blue. Both are pills with compact labels. The menu keeps a readable label beside its icon. Medical-library content should use ordinary linked headings rather than button-shaped paragraphs.

## 5. Layout Principles

The desktop hero is intentionally open, with left-aligned text and ample unused space. The next section pairs a shaped photograph with library copy. At mobile width, the statement and download action precede that material in one column.

## 6. Shapes & Radius Scale

The audited primary action uses a 100px radius, effectively a pill. Image masks have their own editorial geometry. Keep text sections unframed rather than enclosing all medical information in similarly rounded cards.

## 7. Depth & Elevation

The soft backdrop creates atmosphere while the interface remains flat. Keep overlays legible with solid backgrounds; do not copy the consent popup shadow into ordinary content. Photography should illustrate people or context without obscuring text.

## 8. Interaction & Motion

Navigation and downloading need clear destinations and stable feedback. The audit did not open a symptom assessment or validate any clinical interaction. A derived experience should offer reduced motion and preserve text while assets load.

## 9. Accessibility & A11y

Keep a clear distinction between general information and medical advice. Provide accessible menu labels, descriptive link text, and persistent keyboard focus. Use alt text for meaningful imagery and test contrast against the actual pastel backdrop.

## 10. Responsive Behavior

The 390px source uses a 40px serif statement, 17px reading text, and a compact solid action. Avoid reducing body text to preserve whitespace. Consent controls must not permanently obscure the action or library entry on small screens.

## 11. Content & Voice

Use plain-language descriptions and qualified statements about health information. Avoid diagnostic promises or implying that a download replaces professional care. Library links should identify their topic rather than rely on repeated vague actions.

## 12. Dark Mode & Theming

Only the light public site was audited. An alternate dark theme would require separate image, text, and action treatment. Keep white and slate roles explicit rather than interpreting the pastel wash as dark-mode guidance.

## 13. Lineage & Influences

The source is the Ada public homepage and its medical-library introduction, not the assessment application. PT Serif, Noto Sans, slate-blue pills, and generous editorial spacing are the observable identity.

## 14. Do's and Don'ts

Keep the palette narrow, use readable health language, and preserve the menu label. Avoid fabricating clinical states, extracting consent-provider colors, or turning the subtle background wash into a large set of semantic tokens.

## 15. Agent Prompt Guide

Build a health-information introduction with PT Serif display, Noto Sans reading text, slate-blue pill actions, and a clear library link. Review mobile consent behavior and keep health claims carefully scoped.
