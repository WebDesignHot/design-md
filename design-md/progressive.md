---
name: Progressive
tagline: Insurance quoting anchored by blue actions and practical product selection.
spec: webdesignhot/0.2
profile: catalog
source_url: https://www.progressive.com/
quality: auto
published_at: 2026-09-12T05:41:42.512Z
updated_at: 2026-09-12T05:41:42.512Z
categories: [insurance]
tags: [light, corporate, sans, blue]
preview_swatch: ["#ffffff", "#0077b3", "#2d2d2d"]
x-webdesignhot:
  author: webdesignhot
  quality: auto
  featured: false
  published_at: 2026-09-12T05:41:42.512Z
  updated_at: 2026-09-12T05:41:42.512Z
  categories:
    - insurance
  tags:
    - light
    - corporate
    - sans
    - blue
  preview_swatch:
    - "#ffffff"
    - "#0077b3"
    - "#2d2d2d"
  related:
    - lemonade
    - axa
    - oscar-health
  description: The homepage puts the insurance task in front of the campaign. A
    family photograph establishes context, but the overlapping white quote tool
    owns the next action. Blue is functional rather than decorative; product
    icons and compact labels make the choices scannable.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
colors:
  bg: "#ffffff"
  text: "#2d2d2d"
  brand: "#0077b3"
  on-brand: "#ffffff"
  surface: "#f3f9fc"
typography:
  display:
    family: 96 Sans, Arial, sans-serif
    weights:
      - 300
  body:
    family: 96 Sans, Arial, sans-serif
    weights:
      - 400
      - 600
  scale:
    h1:
      fontSize: 24
      fontWeight: 300
      fontFamily: 96 Sans, Arial, sans-serif
    body:
      fontSize: 16
      fontWeight: 400
      fontFamily: 96 Sans, Arial, sans-serif
radius:
  action: 4
components:
  button-primary:
    base:
      bg: brand
      text: on-brand
      radius: 4
---

Scope: public homepage sampled at 1440px and 390px on 2026-09-12. Font names are observed CSS declarations, not redistributed font assets. Body size outside an explicitly measured role is a 16px implementation baseline; focus, validation, timing, and alternate themes below are recommendations, not audited source states. No transactional flow was submitted.

## 1. Visual Theme & Atmosphere

The homepage puts the insurance task in front of the campaign. A family photograph establishes context, but the overlapping white quote tool owns the next action. Blue is functional rather than decorative; product icons and compact labels make the choices scannable.

## 2. Color Palette & Roles

The observed action blue is #0077b3, primary text is #2d2d2d, and the pale supporting surface is #f3f9fc. White separates navigation and the quote form from photography. Do not sample the photograph as a palette or use the translucent white overlay as a universal surface.

## 3. Typography Rules

96 Sans is used for navigation, labels, and headings. The semantic welcome H1 measures 24px at desktop and 14px at mobile; it is not the large campaign slogan. The quote heading is 18px bold, while the later editorial heading is 36px light. Keep the task heading stronger than the introductory label.

## 4. Component Stylings

The quote module pairs a persistent location label with a ZIP input and a solid blue submit action. Alternative insurance products are outlined icon-and-label controls. Preserve a distinct selected state and inline validation; their precise focus, error, and disabled styles were not captured.

## 5. Layout Principles

Desktop separates the quote form from alternative products within one shared tool. Mobile stacks the form, action, explanatory link, and product choices below the photograph. Maintain reading order and keep the ZIP field directly before submission.

## 6. Shapes & Radius Scale

The large quote tool has a noticeably rounded upper edge, while form controls use much smaller corners. The 4px primary-action corner is the compact reference; do not copy the container curve onto every field or product row.

## 7. Depth & Elevation

The white tool overlaps photography and gains separation through opacity and its boundary. Subsequent content returns to flat white bands. Avoid stacking more floating panels inside the quote tool.

## 8. Interaction & Motion

Use immediate product-selection feedback and preserve the ZIP value when switching product type. This is recommended behavior, not an audited form submission: no quotes were requested. Announce validation without shifting the entire form.

## 9. Accessibility & A11y

Keep visible field labels and text alternatives for the product illustrations. A blue outline alone must not identify the selected insurance product. Ensure the quote action remains reachable with keyboard navigation and that errors identify the affected field.

## 10. Responsive Behavior

At 390px the hero becomes a compact family crop and product choices become full-width rows. The quote action fills its column. Preserve this task-first stack rather than squeezing the desktop two-column arrangement into a phone.

## 11. Content & Voice

Use direct insurance terminology and explain what the quote requires. Savings, coverage, and price statements need current qualifications; do not reuse the observed campaign claims as evergreen product facts.

## 12. Dark Mode & Theming

The audited interface is light with a photographic hero. No alternate dark mode was verified. If a host product needs one, redesign form contrast and image overlays separately rather than invert the source page.

## 13. Lineage & Influences

This extraction covers the public US Progressive homepage, not the authenticated policy portal or quote flow. Its distinctive relationship is consumer photography above a dense, practical insurance selector.

## 14. Do's and Don'ts

Keep the quote task dominant, retain persistent labels, and separate product choices from submission. Avoid recreating the campaign as a decorative landing page without a usable form, or treating the small welcome H1 as the entire type scale.

## 15. Agent Prompt Guide

Build a light insurance selector with a photographic introduction, blue quote action, labeled location input, and outlined product rows. Review the mobile stack and keyboard validation before polishing the photographic overlap.
