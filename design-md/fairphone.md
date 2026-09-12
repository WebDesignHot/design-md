---
name: Fairphone
tagline: Repair-minded hardware storytelling with forest green and bold grotesque type.
spec: webdesignhot/0.2
profile: catalog
source_url: https://www.fairphone.com/
quality: auto
published_at: 2026-09-12T05:42:14.121Z
updated_at: 2026-09-12T05:42:14.121Z
categories: [hardware]
tags: [light, bold, sans, product]
preview_swatch: ["#fdfdfc", "#00433d", "#1f2021"]
x-webdesignhot:
  author: webdesignhot
  quality: auto
  featured: false
  published_at: 2026-09-12T05:42:14.121Z
  updated_at: 2026-09-12T05:42:14.121Z
  categories:
    - hardware
  tags:
    - light
    - bold
    - sans
    - product
  preview_swatch:
    - "#fdfdfc"
    - "#00433d"
    - "#1f2021"
  related:
    - dyson
    - garmin
    - remarkable
  description: Fairphone centers the physical phone in an outdoor photographic
    scene. White transparent navigation and a bold lower-left slogan contrast
    with the forest. The call to action is outlined and square, keeping the
    product image more prominent than the interface.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
colors:
  bg: "#fdfdfc"
  text: "#1f2021"
  brand: "#00433d"
  on-brand: "#f9f9f8"
  surface: "#f0f0ee"
typography:
  display:
    family: Bricolage Grotesque, sans-serif
    weights:
      - 600
  body:
    family: DM Sans, sans-serif
    weights:
      - 400
      - 600
  scale:
    h1:
      fontSize: 64
      fontWeight: 600
      fontFamily: Bricolage Grotesque, sans-serif
    body:
      fontSize: 16
      fontWeight: 400
      fontFamily: DM Sans, sans-serif
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

Fairphone centers the physical phone in an outdoor photographic scene. White transparent navigation and a bold lower-left slogan contrast with the forest. The call to action is outlined and square, keeping the product image more prominent than the interface.

## 2. Color Palette & Roles

The observed deep green is #00433d, with near-white #fdfdfc and #f9f9f8 surfaces/text and #1f2021 ink. #f0f0ee is a supporting neutral. Do not convert every green in the forest photograph into a design token.

## 3. Typography Rules

Bricolage Grotesque supplies the 64px, weight-600 desktop heading and 32px mobile heading. DM Sans appears in controls. Ignore the inherited Odoo/system body stack when choosing the display face; it does not describe the headline.

## 4. Component Stylings

The hero action is a thin white outlined rectangle with a directional arrow. Header account and basket controls are icons, with the basket count attached. A filled green button is a derived light-surface counterpart, not a replacement for the observed hero outline.

## 5. Layout Principles

Use one photographic product band with navigation over the top and message near the bottom. Follow with flat product or responsibility sections. Keep commerce utilities available without adding a second hero card around the message.

## 6. Shapes & Radius Scale

Square action corners are central to the hero. Circular utility controls may coexist with them but should not dictate the shape of product sections. Preserve the actual device silhouette instead of clipping it into an arbitrary rounded thumbnail.

## 7. Depth & Elevation

The scene supplies depth; white borders and typography define the interface. If image contrast varies, use a local contrast treatment rather than heavy floating shadows. Do not blur the phone to make the copy easier to place.

## 8. Interaction & Motion

Keep the hero action stable while photography changes. Motion timing and shopping interactions were not audited. Recommended behavior is to offer reduced-motion alternatives and keep account/basket state updates explicit.

## 9. Accessibility & A11y

Overlay text and outline actions need contrast testing over the chosen image. Label menu, account, and basket icons and announce the basket count meaningfully. Sustainability information should remain readable text rather than image-only claims.

## 10. Responsive Behavior

The 390px capture uses compact icons and a 32px headline near the bottom. Its image crop loses much of the phone; a derived implementation should improve that crop so the actual device remains inspectable rather than reproduce the weakness.

## 11. Content & Voice

Use concrete language about hardware, repair, and ownership. Environmental claims need evidence and scope. Avoid turning responsibility content into vague slogans that obscure product specifications or support information.

## 12. Dark Mode & Theming

The audited structure combines a photographic dark band with light commerce sections. It is not an alternate dark UI. Preserve deep-green identity across an optional dark extension while reviewing image contrast independently.

## 13. Lineage & Influences

The extraction covers the current Fairphone public storefront homepage after declining optional cookies. It does not assert the design of device settings, account pages, or the checkout flow.

## 14. Do's and Don'ts

Keep the phone visible, use the bold grotesque, and distinguish icon utilities from square actions. Avoid importing the consent modal style, inventing color tokens from leaves, or carrying the desktop image crop unchanged onto mobile.

## 15. Agent Prompt Guide

Build a hardware storefront hero with real phone photography, white navigation, bold Bricolage-style typography, and a square outline action. Review the phone crop at mobile width and pair responsibility claims with evidence.
