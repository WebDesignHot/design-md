---
name: AXA
tagline: Corporate insurance publishing with cobalt navigation and serif storytelling.
spec: webdesignhot/0.2
profile: catalog
source_url: https://www.axa.com/
quality: auto
published_at: 2026-09-12T05:45:14.379Z
updated_at: 2026-09-12T05:45:14.379Z
categories: [insurance]
tags: [light, corporate, sans, blue]
preview_swatch: ["#ffffff", "#00008f", "#343c3d"]
x-webdesignhot:
  author: webdesignhot
  quality: auto
  featured: false
  published_at: 2026-09-12T05:45:14.379Z
  updated_at: 2026-09-12T05:45:14.379Z
  categories:
    - insurance
  tags:
    - light
    - corporate
    - sans
    - blue
  preview_swatch:
    - "#ffffff"
    - "#00008f"
    - "#343c3d"
  related:
    - lemonade
    - progressive
    - oscar-health
  description: AXA presents a corporate newsroom rather than a consumer quote
    tool. A compact financial utility strip and cobalt navigation lead into a
    large photographic story carousel. Bold serif headlines and restrained coral
    actions distinguish editorial content from company navigation.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
colors:
  bg: "#ffffff"
  text: "#343c3d"
  brand: "#00008f"
  on-brand: "#ffffff"
  accent: "#f07662"
  surface: "#274168"
typography:
  display:
    family: Publico-Headline, Georgia, serif
    weights:
      - 700
  body:
    family: Source Sans Pro, Arial, sans-serif
    weights:
      - 400
      - 600
  scale:
    h1:
      fontSize: 48
      fontWeight: 700
      fontFamily: Publico-Headline, Georgia, serif
    body:
      fontSize: 16
      fontWeight: 400
      fontFamily: Source Sans Pro, Arial, sans-serif
radius:
  action: 0
components:
  button-primary:
    base:
      bg: brand
      text: on-brand
      radius: 0
---

Scope: public homepage sampled at 1440px and 390px on 2026-09-12. Font names are observed CSS declarations, not redistributed font assets. Body size outside an explicitly measured role is a 16px implementation baseline; focus, validation, timing, and alternate themes below are recommendations, not audited source states. No transactional flow was submitted.

## 1. Visual Theme & Atmosphere

AXA presents a corporate newsroom rather than a consumer quote tool. A compact financial utility strip and cobalt navigation lead into a large photographic story carousel. Bold serif headlines and restrained coral actions distinguish editorial content from company navigation.

## 2. Color Palette & Roles

Navigation text supplies #00008f cobalt, story actions use #f07662 coral, and the default ink is #343c3d. The observed lower blue panel is #274168. Keep white text over the darkened image; do not assume white on coral is suitable for small text without a contrast test.

## 3. Typography Rules

Source Sans Pro carries the utility strip and navigation. Publico-Headline is the bold editorial face: the desktop featured story is a 48px H2. The catalog display role represents that story, not an invented source H1. Supply a licensed face or accept a visibly different Georgia fallback.

## 4. Component Stylings

Story actions are compact square-corner rectangles, while navigation remains plain text. Carousel progress segments, a pause control, and story captions provide context. Do not replace all navigation with coral buttons or hide carousel controls behind hover.

## 5. Layout Principles

Two white navigation tiers precede the image-led story band. Desktop story summaries form a horizontal row near the bottom of the image; the next blue editorial section is partially visible. Preserve the separation between corporate utilities and reading content.

## 6. Shapes & Radius Scale

Square corners are the defining control shape in the audited hero. Use straight image boundaries and slim progress rules rather than a pill-heavy card language. Rounded form controls would be an implementation extension, not a source observation.

## 7. Depth & Elevation

The photographic overlay supplies contrast and the next section overlaps the image edge. Navigation relies on thin separators, not heavy shadows. Keep headline legibility independent of which carousel image is active.

## 8. Interaction & Motion

The source exposes a pause control and segmented story progression. Preserve pause and explicit previous/next navigation; respect reduced motion. Exact autoplay timing was not measured and must not be encoded as an official motion token.

## 9. Accessibility & A11y

Maintain keyboard access to language selection, search, carousel controls, and story links. Progress must not communicate only through coral length. Use a tested text background for every story image and enlarge small utility targets without enlarging their labels.

## 10. Responsive Behavior

At 390px the navigation collapses to the logo and menu while the utility strip stays compact. The story wraps into several large serif lines, with a single action and compact progress controls. Do not retain desktop summary columns on mobile.

## 11. Content & Voice

Use measured corporate language with clear story categories, dates, and destinations. Financial values and campaign headlines are time-sensitive content, not reusable design instructions. Keep article titles distinct from action labels.

## 12. Dark Mode & Theming

This is a light corporate shell containing dark image and blue editorial bands, not a verified dark theme. A dark host implementation should keep corporate navigation recognizable and retest coral text and controls.

## 13. Lineage & Influences

The source is AXA Group corporate communications at axa.com, not a local insurance sales portal. Publico editorial display, cobalt utility navigation, and coral story actions form the observable system.

## 14. Do's and Don'ts

Keep corporate and editorial hierarchy separate; expose pause; retain square actions. Avoid treating the stock ticker as product content, inventing a quote flow, or replacing the serif story typography with a generic SaaS headline.

## 15. Agent Prompt Guide

Create a corporate newsroom with two restrained navigation tiers, a legible image-backed serif story, coral story action, and accessible carousel controls. Test the longest story on mobile and verify contrast for each image.
