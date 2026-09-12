---
name: Sololearn
tagline: Coding-course onboarding with a dark learning canvas and bright blue
  entry points.
spec: webdesignhot/0.2
profile: catalog
source_url: https://www.sololearn.com/
quality: auto
published_at: 2026-09-12T05:46:32.336Z
updated_at: 2026-09-12T05:46:32.336Z
categories: [education]
tags: [dark, sans, learning, rounded]
preview_swatch: ["#1f1e28", "#2493df", "#ffffff"]
x-webdesignhot:
  author: webdesignhot
  quality: auto
  featured: false
  published_at: 2026-09-12T05:46:32.336Z
  updated_at: 2026-09-12T05:46:32.336Z
  categories:
    - education
  tags:
    - dark
    - sans
    - learning
    - rounded
  preview_swatch:
    - "#1f1e28"
    - "#2493df"
    - "#ffffff"
  related:
    - codecademy
    - udacity
    - brilliant-org
  description: Sololearn uses a charcoal learning introduction with centered white
    type, blue authentication actions, and a purple promotional strip. White
    benefit cards below the hero create a strong change in reading surface. This
    is a public onboarding page rather than a code editor.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
colors:
  bg: "#1f1e28"
  text: "#ffffff"
  brand: "#2493df"
  on-brand: "#ffffff"
  surface: "#ffffff"
  surface-text: "#2d3846"
  muted: "#c8d2db"
  accent: "#7b5cff"
typography:
  display:
    family: Fira Sans, sans-serif
    weights:
      - 600
  body:
    family: Fira Sans, sans-serif
    weights:
      - 400
      - 600
  scale:
    h1:
      fontSize: 56
      fontWeight: 600
      fontFamily: Fira Sans, sans-serif
    body:
      fontSize: 16
      fontWeight: 400
      fontFamily: Fira Sans, sans-serif
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

Sololearn uses a charcoal learning introduction with centered white type, blue authentication actions, and a purple promotional strip. White benefit cards below the hero create a strong change in reading surface. This is a public onboarding page rather than a code editor.

## 2. Color Palette & Roles

The main dark field is #1f1e28 with white and #c8d2db reading text. Register uses #2493df; the observed Google action separately uses #149ef2. Purple #7b5cff belongs to promotion. Light cards require their own dark #2d3846 text role.

## 3. Typography Rules

Fira Sans supplies the 56px, weight-600 desktop heading and 35px mobile headline. Keep supporting copy substantially smaller and avoid treating the raw document Times default as a brand font. The centered mobile headline intentionally occupies several short lines.

## 4. Component Stylings

Authentication choices are vertically organized with an explicit alternative-options path. Blue buttons have small corners, while white benefit cards hold illustrations and text. Do not make the entire benefit card appear to be an authentication provider.

## 5. Layout Principles

A narrow promotional strip precedes the dark navigation and centered hero. The primary entry action is followed by alternative options and then a three-part benefit area. On mobile, preserve this order and let benefits continue vertically.

## 6. Shapes & Radius Scale

The source register button has a 4px radius; the Google entry has 6px. Use small control corners rather than exaggerated pills. Keep illustration circles confined to the illustration rather than using circles as background decoration.

## 7. Depth & Elevation

The dark-to-white transition separates promotion from benefit detail without heavy shadows. Avoid shadow-heavy cards on the dark canvas. Cookiebot surfaces are excluded from this extraction even though they initially covered the first screen.

## 8. Interaction & Motion

Authentication must preserve the selected learning intent and communicate loading or failure. No sign-in was performed. Recommended behavior includes disabling duplicate submissions and keeping alternate providers reachable after a failed attempt.

## 9. Accessibility & A11y

White text on blue actions needs contrast review at the intended size; do not claim the source is AA compliant. Provider buttons need accessible names and visible focus. A promotional close control must work with keyboard input and not move focus unpredictably.

## 10. Responsive Behavior

At 390px the 35px headline wraps tightly above centered explanatory text. Authentication controls stay wide. Avoid carrying the desktop side padding into narrower phones when it produces excessively short lines or clipped labels.

## 11. Content & Voice

Use concrete course and practice language without promising mastery on a schedule. Keep promotional discounts time-bounded and separate from the permanent learning proposition. Authentication labels must identify the provider.

## 12. Dark Mode & Theming

Dark is the audited hero theme, with deliberate light benefit cards. Do not apply the white foreground alias to those cards; use surface-text. A fully light alternative was not audited and needs its own contrast review.

## 13. Lineage & Influences

This is the public Sololearn acquisition homepage, not an extracted IDE or lesson-player design. Fira Sans, charcoal hero, blue entry actions, and white illustrated benefits distinguish the captured page.

## 14. Do's and Don'ts

Keep authentication alternatives explicit, use dark text on light cards, and separate promotions from learning content. Avoid treating the consent modal as a product component or inventing code-editor syntax colors from this source.

## 15. Agent Prompt Guide

Build a dark coding-course introduction with centered Fira Sans hierarchy, blue provider entry, alternative sign-in paths, and white benefit panels. Verify both surface text roles and provider-button contrast before implementation.
