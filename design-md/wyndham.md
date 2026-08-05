---
name: Wyndham Hotels & Resorts
tagline: "Practical hotel search with a clear blue rewards and booking path."
updated_at: 2026-08-05T01:54:38.842Z
published_at: 2026-08-05T01:54:38.842Z
author: webdesignhot
source_url: https://www.wyndhamhotels.com/en-us
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [hospitality, marketplace]
tags: [hospitality, travel, hotels, booking, rewards]
preview_swatch: ["#ffffff", "#0065ab", "#3a4652"]
related: [hyatt, ihg-hotels, marriott]
description: "Wyndham presents hospitality through a direct booking workflow: white space, bright blue actions, hotel imagery, and explicit rewards context. The system should get guests from destination to availability quickly while keeping property facts, dates, fees, and loyalty conditions visible."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-soft
  border: border

colors:
  bg: "#ffffff"
  surface: "#f4f7fa"
  text: "#3a4652"
  brand: "#0065ab"
  on-brand: "#ffffff"
  border: "#d7e0e7"
  text-soft: "#657480"
  border-soft: "#edf1f4"
  accent-gold: "#d8a944"

typography:
  display:
    family: "HCo Gotham SSm, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "HCo Gotham SSm, system-ui, -apple-system, sans-serif"
    weights: [400, 500, 600]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    display-lg:      { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    h1:              { size: 40, weight: 700, lineHeight: 1.1,  tracking: '-0.018em', family: display }
    h2:              { size: 32, weight: 600, lineHeight: 1.2,  tracking: '-0.012em', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.3,  tracking: '0',        family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

components:
  button-primary: { bg: brand, text: on-brand, padding: '10px 16px', radius: 8 }
  button-ghost:   { bg: transparent, text: text, border: border, padding: '10px 16px', radius: 8 }
  card:           { bg: surface, border: border, radius: 12, padding: 24 }
  input:          { bg: bg, border: border, text: text, radius: 8, padding: '8px 12px' }

lineage:
  summary: "Recorded from the current Wyndham Hotels & Resorts public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Wyndham Hotels public booking site"
      role: "Source for Gotham-derived typography, blue action color, pale support surface, and destination-to-availability flow."
      url: https://www.wyndhamhotels.com/en-us
---

## 1. Visual Theme & Atmosphere

Wyndham presents hospitality through a direct booking workflow: white space, bright blue actions, hotel imagery, and explicit rewards context. The system should get guests from destination to availability quickly while keeping property facts, dates, fees, and loyalty conditions visible. The public composition should be recognizable in a first viewport, then become predictable when a user starts a task. Keep the primary product, service, project, or artifact visible instead of replacing evidence with abstract decoration.

**Key Characteristics**
- A clear primary action
- A stable content hierarchy
- Readable metadata
- Intentional surface contrast
- Responsive media treatment
- Text equivalents for visual state

## 2. Color Palette & Roles

Use white for the primary booking surface and `#f4f7fa` for search and room grouping. `#0065ab` is the primary blue for search, availability, and rewards actions. `#3a4652` keeps hotel facts readable without the harshness of black. Gold may signal rewards or member value, but it must be accompanied by the actual benefit and never replace price or rate conditions.

Use color roles consistently: background for the page ground, surface for grouped content, text for reading, brand for the primary action, border for structure, and semantic colors for states with text labels. Preview swatches show the canvas, brand action, and primary reading color.

## 3. Typography Rules

HCo Gotham SSm is the sampled family for display and body. Use a strong but compact hierarchy for destination, hotel, room, and price. Keep date and occupancy values prominent inside the booking control, and use regular text for policies and amenity details. Avoid decorative display type that delays the booking task.

Suggested hierarchy: display-hero for the first promise, display-lg for a major section, h1 for the page task, h2 for grouped content, h3 for cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Use blue filled controls for search and booking, a neutral outline for save or compare, and a rewards treatment that clearly states its benefit. Search controls need destination, dates, and guests as separate labeled fields. Hotel cards require image, name, location, rating, room/rate, and availability. Rate details need a visible expansion, and the booking flow needs a persistent back action.

Treat controls as a system: every filled action needs hover, pressed, disabled, and focus states; every card needs a stable content order; every input needs a label and error state. Use familiar icons inside tool buttons and give unfamiliar icons a tooltip.

## 5. Layout Principles

Use a 1280px search-and-results canvas with a 12-column property grid. Keep the booking band stable across pages and let a 720px measure carry policies and hotel detail copy. At mobile width, stack search fields and move filters into a labeled drawer. Use 16/24px card spacing and stable room-image ratios.

Prefer full-width bands with constrained inner content over decorative nested cards. Stable aspect ratios, explicit grid tracks, and fixed control dimensions keep media and labels from shifting as content loads.

## 6. Shapes & Radius Scale

Use 4px for rewards and amenity labels, 8px for search and booking fields, 12px for property cards, and 16px for featured destination panels. Pills are for filters or rewards states only. Keep the booking controls softly rounded but practical.

Keep the radius scale intentional: micro controls, standard controls, comfortable cards, relaxed feature panels, and pills only for true categorical selectors. A rounded rectangle should communicate an action or grouped item, not decorate every section.

## 7. Depth & Elevation

Use borders and pale gray surfaces for search and property grouping. A selected room or rate can gain a blue outline; date pickers and booking dialogs may use moderate elevation. Do not use shadow or color to imply that a property is objectively better.

Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a scrim, a clear title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for field states, 240ms for filter and rate disclosure, and 320ms for a room panel reveal. Avoid shifting results while a guest reads a price. Under reduced motion, apply selected dates and rates immediately and announce result changes.

Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention. Make the final state available without animation and honor reduced-motion preferences.

## 9. Accessibility & A11y

Use dark text on white and pale gray and verify white on blue actions. Dates, guests, price, taxes, and cancellation terms must be text-readable. Use accessible labels for rewards points and amenity icons. Dialogs and date pickers need keyboard navigation, Escape handling, and focus restoration.

Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for status. Test focus against every surface, including imagery, selected states, dialogs, and disabled-looking controls. Do not use color as the only error, progress, rating, or selection signal.

## 10. Responsive Behavior

At 640px, keep destination and dates in the first viewport and place the search action directly after the fields. At 1024px, collapse secondary property filters. At 1280px, show the full result comparison layout. Preserve 44px controls and stable property imagery.

Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the first useful action, the content subject, and the state explanation at every breakpoint. If a row cannot fit, group it under a labeled disclosure instead of clipping text.

## 11. Content & Voice

Write in direct hospitality language: “Search hotels”, “Check availability”, “Choose room”, and “Review rate”. State rewards and policy consequences plainly. Empty states should suggest nearby hotels, flexible dates, or a destination change.

Microcopy should state the object, action, and consequence. Keep empty states useful, error messages recoverable, and confirmations specific. Avoid claims that cannot be understood or verified from the surrounding interface.

## 12. Dark Mode & Theming

The entry is light-first with blue action and pale gray support surfaces. Any dark theme must define rates, policies, date focus, and image scrims independently. Keep rewards gold separate from warning and price semantics.

Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert imagery or evidence blindly.

## 13. Lineage & Influences

Wyndham is a practical hotel-booking system rather than an editorial travel magazine. Blue creates confidence and an obvious path to availability, while property imagery gives each hotel a local voice. The design rejects ambiguity in favor of a fast, policy-aware booking flow.

The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

## 14. Do's and Don'ts

**Do**
- Keep the booking band consistent.
- Show dates and occupancy.
- State rewards benefits.
- Expose rate conditions.
- Use blue for actions.
- Keep result cards comparable.
- Preserve back navigation.
- Announce result updates.

**Don't**
- Do not hide taxes or cancellation.
- Do not imply property quality with color.
- Do not make date fields unlabeled.
- Do not move prices while reading.
- Do not use rewards gold without a benefit label.
- Do not autoplay room galleries.
- Do not make filters irreversible.
- Do not shrink controls below 44px.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the sampled canvas token.
- Foreground: use the sampled reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Example Component Prompts

- Create a Wyndham-like hotel search header with destination, dates, guests, blue action, and rewards context.
- Design a property card with image, name, location, rating, room/rate, policy cue, and availability action.
- Build a mobile filter drawer with result count, selected criteria, and a clear reset.
- Create a rate detail panel that exposes price, taxes, cancellation, and rewards benefit before booking.

### Iteration Guide

1. Check the booking band at 320px.
2. Read policy text before confirming.
3. Test filters and date picker with keyboard.
4. Keep blue and gold roles distinct.
5. Align result cards across long names.
6. Remove motion that shifts price context.
