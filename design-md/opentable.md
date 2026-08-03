---
name: OpenTable
tagline: 'Restaurant booking interface with BrandonText typography, red reservation actions, compact filters, and live availability cards.'
updated_at: 2026-07-09T13:18:00+12:00
published_at: 2026-07-09T13:18:00+12:00
author: webdesignhot
source_url: https://www.opentable.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [marketplace, hospitality]
tags: [light, booking, restaurants, red, cards, search]
preview_swatch: ['#f1f2f4', '#da3743', '#2d333f']
related: [booking, kayak, deliveroo]
description: 'OpenTable is a dense reservation marketplace: pale gray chrome, BrandonText typography, red booking actions, date-time-party controls, restaurant cards with food photography, rating rows, and quick reservation time buttons.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: brand
  muted: text-muted
  border: border
  ring: accent-teal
colors:
  bg: '#f1f2f4'
  bg-page: '#ffffff'
  bg-soft: '#f8f8f9'
  surface: '#ffffff'
  surface-muted: '#f1f2f4'
  text: '#2d333f'
  text-strong: '#000000'
  text-muted: '#6f737b'
  text-soft: '#9a9da3'
  brand: '#da3743'
  brand-hover: '#c62f3a'
  brand-soft: '#fdecef'
  accent-teal: '#247f9e'
  accent-deep: '#154a5b'
  rating: '#da3743'
  border: '#d8d9db'
  border-strong: '#b9bbc1'
  shadow-card: 'rgba(45, 51, 63, 0.12)'
  success: '#1f8f5f'
  warning: '#e0a41f'
  danger: '#da3743'
  on-brand: '#ffffff'
typography:
  display:
    family: 'BrandonText, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'BrandonText, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'
    weights: [400, 500, 600, 700]
  mono:
    family: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    weights: [400, 500]
  scale:
    hero-display: { size: 40, weight: 700, lineHeight: 1.15, tracking: '0', family: display }
    display: { size: 32, weight: 700, lineHeight: 1.18, tracking: '0', family: display }
    h1: { size: 24, weight: 700, lineHeight: 1.33, tracking: '0', family: display }
    h2: { size: 22, weight: 700, lineHeight: 1.3, tracking: '0', family: display }
    h3: { size: 18, weight: 700, lineHeight: 1.25, tracking: '0', family: body }
    body-lg: { size: 17, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.4, tracking: '0', family: body }
    nav: { size: 14, weight: 500, lineHeight: 1.35, tracking: '0', family: body }
    button: { size: 16, weight: 700, lineHeight: 1.2, tracking: '0', family: body }
radius:
  micro: 3
  sm: 4
  md: 6
  lg: 8
  xl: 12
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 48, 64, 96]
layout:
  page-width: 1216
  prose-width: 700
  header-height: 86
  search-width: 960
  card-width: 234
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'disable card hover lift and AI prompt shimmer'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536
components:
  reservation-search:
    bg: surface
    border: border
    radius: 4
    padding: 0
    use: 'date, time, party size, and location controls'
  button-primary:
    bg: brand
    text: on-brand
    radius: 4
    padding: '14px 32px'
    use: 'Lets go and reservation time buttons'
  restaurant-card:
    bg: surface
    border: border
    radius: 6
    padding: 0
    use: 'restaurant photo, title, rating, metadata, and times'
  ai-prompt-panel:
    bg: surface
    border: border
    radius: 4
    padding: 24
    use: 'Find the right table prompt suggestions'
lineage:
  summary: 'OpenTable is operational and transactional. The UI prioritizes search controls, availability, ratings, and reservation times over brand storytelling.'
  influences:
    - { name: 'Travel booking engines', role: 'date/time/party search row and inventory cards' }
    - { name: 'Restaurant marketplaces', role: 'food photography, ratings, cuisine, price, location' }
    - { name: 'Local discovery apps', role: 'location correction and current-location prompts' }
---

## 1. Visual Theme & Atmosphere

OpenTable feels like a booking engine with marketplace density. The interface is light, structured, and practical, with red used for actions and availability.

The page is not a cinematic restaurant brand. It is a reservation workflow: choose date, time, people, location, then scan available restaurants and time slots.

**Key Characteristics**
- Pale gray top chrome.
- White search controls and cards.
- BrandonText as the interface voice.
- Red reservation CTA and time chips.
- Restaurant cards with food imagery.
- Rating rows with red stars.
- Compact header actions.
- Location-aware search prompt.

## 2. Color Palette & Roles

Use `bg #f1f2f4` for chrome and `surface #ffffff` for the active booking controls. The main text color is `text #2d333f`.

The booking red is `brand #da3743`. It marks the primary search button, time chips, rating stars, and current-location prompt accents.

Secondary controls use `text-muted #6f737b` and `border #d8d9db`. The teal sign-in button uses `accent-deep #154a5b` with `accent-teal #247f9e` as border/focus support.

## 3. Typography Rules

| Role | Font | Size | Weight | Notes |
| --- | --- | ---: | ---: | --- |
| Display | BrandonText | 40 | 700 | Rare marketplace headings |
| Section | BrandonText | 32 | 700 | Large discovery groups |
| H1 | BrandonText | 24 | 700 | Result section titles |
| H2 | BrandonText | 22 | 700 | Support modules |
| H3 | BrandonText | 18 | 700 | Restaurant card names |
| Body | BrandonText | 16 | 400 | Search fields and card metadata |
| Body small | BrandonText | 14 | 400 | Utility links and location text |
| Button | BrandonText | 16 | 700 | Reservation actions |

Use weight and spacing to create hierarchy. The system should feel like a product UI, not a marketing page.

## 4. Component Stylings

Reservation search combines multiple bordered segments: date, time, party, location, and a red submit button. Each segment should align to a shared height.

Restaurant cards use a photo top, bold restaurant name, star row, cuisine/price/location metadata, and red time buttons.

Prompt chips in the AI-style discovery panel can be white with thin borders and compact text. They should not dominate the booking workflow.

## 5. Layout Principles

Center the search row near the top and keep the result column constrained. The cards can sit in a grid with fixed card widths for predictable scanning.

Keep the header low and utilitarian. Logo, location, account, language, and search actions should fit in a single practical bar.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | ---: | --- |
| Micro | 3 | sign-in and prompt chips |
| Small | 4 | search fields and red buttons |
| Medium | 6 | restaurant cards |
| Large | 8 | content panels |
| Extra large | 12 | rare larger modules |
| Pill | 9999 | avoid for core booking controls |

OpenTable's corners are compact. Rounded pills would make the workflow feel less precise.

## 7. Depth & Elevation

Use thin borders and light card shadow only when a card needs separation from the page. Dense reservation UI should not rely on heavy elevation.

Food images provide most of the visual depth. Keep image corners tied to the card radius.

## 8. Interaction & Motion

Search segments should show clear focus states. Date, time, and party controls need keyboard-accessible menus.

Time chips can darken on hover and confirm selection quickly. Avoid elaborate transitions in reservation flows.

## 9. Content Voice

Use transactional labels: date, time, people, location, restaurant, cuisine, reviews, booked today. The copy should help a user decide quickly.

Location prompts can be conversational but brief. Keep AI prompt suggestions optional and secondary.

## 10. Navigation Pattern

Top navigation is split between brand/location on the left and account/business utilities on the right. Keep account actions compact.

Search is both a header affordance and the main page workflow. Do not hide the core search behind a modal on desktop.

## 11. Search & Filtering

The primary row should answer four questions: when, what time, how many people, and where. Treat these as equal controls with a single red submit button.

On mobile, stack fields or use a sticky search summary that expands. Preserve the red action as the final step.

## 12. Card System

Restaurant cards must support image, name, rating, review count, cuisine, price level, city, demand indicators, and multiple time chips.

Keep card widths stable. Reservation time chips should not resize the card when different time labels appear.

## 13. Accessibility Notes

Red time buttons need white text and enough size for touch targets. Rating stars should not be the only source of review information.

Date and time menus need visible labels and keyboard focus. Do not rely only on placeholder text.

## 14. Anti-Patterns

Do not replace the search row with a hero slogan. The brand value is immediate booking inventory.

Do not use oversized restaurant imagery that pushes time availability below the fold. Availability is the core product.

Avoid decorative gradients around the main controls. The UI should stay crisp and task-focused.

## 15. Implementation Checklist

- Use BrandonText or a similar practical sans.
- Keep the search row segmented and aligned.
- Reserve red for booking actions and ratings.
- Show restaurant cards with real imagery.
- Include rating, review count, cuisine, price, and location.
- Provide multiple reservation time chips.
- Keep radii small.
- Make location correction visible but secondary.
