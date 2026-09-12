---
name: citizenM
tagline: Urban hotel storytelling with bold lowercase display and bright booking
  accents.
spec: webdesignhot/0.2
profile: catalog
source_url: https://www.marriott.com/brands/citizenm.mi
quality: auto
published_at: 2026-09-12T05:42:42.738Z
updated_at: 2026-09-12T05:42:42.738Z
categories: [hospitality]
tags: [bold, sans, travel, photography]
preview_swatch: ["#ffffff", "#eb0033", "#1c1c1c"]
x-webdesignhot:
  author: webdesignhot
  quality: auto
  featured: false
  published_at: 2026-09-12T05:42:42.738Z
  updated_at: 2026-09-12T05:42:42.738Z
  categories:
    - hospitality
  tags:
    - bold
    - sans
    - travel
    - photography
  preview_swatch:
    - "#ffffff"
    - "#eb0033"
    - "#1c1c1c"
  related:
    - marriott
    - accor
    - wyndham
  description: The current citizenM brand page lives within Marriott and pairs a
    compact global shell with an assertive hotel-interior hero. Lowercase
    display text, bright pink actions, and a visible destination/date tool make
    the experience recognizably hospitality-focused.
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
colors:
  bg: "#ffffff"
  text: "#1c1c1c"
  brand: "#eb0033"
  on-brand: "#ffffff"
  accent: "#ff2958"
  surface: "#f4f4f4"
typography:
  display:
    family: ChaletNewYorkNineteenSixty, Arial, sans-serif
    weights:
      - 500
  body:
    family: Swiss-721, Arial, sans-serif
    weights:
      - 400
      - 600
  scale:
    h1:
      fontSize: 40
      fontWeight: 500
      fontFamily: ChaletNewYorkNineteenSixty, Arial, sans-serif
    body:
      fontSize: 16
      fontWeight: 400
      fontFamily: Swiss-721, Arial, sans-serif
radius:
  action: 52
components:
  button-primary:
    base:
      bg: brand
      text: on-brand
      radius: 52
---

Scope: public homepage sampled at 1440px and 390px on 2026-09-12. Font names are observed CSS declarations, not redistributed font assets. Body size outside an explicitly measured role is a 16px implementation baseline; focus, validation, timing, and alternate themes below are recommendations, not audited source states. No transactional flow was submitted.

## 1. Visual Theme & Atmosphere

The current citizenM brand page lives within Marriott and pairs a compact global shell with an assertive hotel-interior hero. Lowercase display text, bright pink actions, and a visible destination/date tool make the experience recognizably hospitality-focused.

## 2. Color Palette & Roles

The hero action uses #ff2958 with dark #1c1c1c text, while the booking action separately uses #eb0033 with white. White and #f4f4f4 define the shell and search region. Preserve these two accent roles instead of collapsing them into one approximate pink.

## 3. Typography Rules

ChaletNewYorkNineteenSixty supplies the 40px desktop and 30px mobile display at weight 500. Swiss-721 supplies body and booking controls. Lowercase titles are an editorial convention, not permission to lowercase place names or user-entered travel details.

## 4. Component Stylings

The hero offers an accent pill leading to hotels. A separate booking region holds destination and dates with icon-plus-label controls. Distinguish navigation from form submission, and keep the named hotel/location caption associated with its photograph.

## 5. Layout Principles

The white Marriott/citizenM shell precedes full-width interior imagery, followed immediately by the booking tool and an explanatory section. Mobile reduces the header to compact brand and account controls while keeping destination and date selection together.

## 6. Shapes & Radius Scale

Primary actions use a measured 52px radius. The booking container is softly rounded but section bands remain unframed. Do not wrap the hero in an extra card or apply the booking container radius to every hotel image.

## 7. Depth & Elevation

Interior photography supplies most of the depth. The booking region uses a restrained elevated white surface against light gray. Captions need a local contrast backing; avoid darkening every property image until room details become hard to inspect.

## 8. Interaction & Motion

A booking flow should keep dates and destination visible when validation fails. No booking or account submission was performed. Recommended behavior includes announcing date selection and retaining search values when switching between property exploration and booking.

## 9. Accessibility & A11y

Give destination and date controls explicit labels; icons are supplemental. Keep the hotel caption readable over photography. Test the two pink/text combinations independently and make date selection fully keyboard-operable in any derived implementation.

## 10. Responsive Behavior

At 390px the hero becomes a short interior crop with 30px display text. Destination and dates remain side by side inside the search surface. Allow narrow-screen labels to wrap while preserving separate targets and a clear reading order.

## 11. Content & Voice

Use concise, informal hotel language while keeping room, location, and booking details precise. Lowercase brand voice should not remove proper names or price qualifications. Do not copy a photographed hotel caption onto unrelated properties.

## 12. Dark Mode & Theming

The audited shell is light with photography carrying dark regions. It is not a verified dark booking theme. An alternate implementation must retest the search tool, date picker, and pink action roles independently.

## 13. Lineage & Influences

The source URL is Marriott's citizenM brand page after citizenm.com redirected there. This is intentionally distinct from the general Marriott entry and does not claim to preserve the retired standalone citizenM website or its old design system.

## 14. Do's and Don'ts

Keep the destination/date task near the hero, preserve both pink roles, and identify real hotel photography. Avoid inventing the former standalone design, using lowercase on user data, or hiding property details beneath heavy image overlays.

## 15. Agent Prompt Guide

Create a citizenM-inspired hotel brand page inside a restrained global shell, with bold lowercase display, inspectable interior photography, pink actions, and a destination/date tool. Review mobile booking labels and distinguish this scope from the general Marriott system.
