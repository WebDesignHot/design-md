---
name: Accor
tagline: "A multi-brand hospitality booking system with a calm navy anchor."
updated_at: 2026-08-05T01:54:35.032Z
published_at: 2026-08-05T01:54:35.032Z
author: webdesignhot
source_url: https://all.accor.com/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [hospitality, marketplace]
tags: [hospitality, travel, hotels, booking, loyalty]
preview_swatch: ["#ffffff", "#1e1853", "#3e3d48"]
related: [ihg-hotels, four-seasons, booking]
description: "Accor has to hold many hotel brands inside one booking ecosystem. A white page, pale blue-gray surfaces, and deep navy action color create a dependable framework while images and hotel identities provide variation. The design should make destination, dates, room choice, loyalty, and brand context easy to compare."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-soft
  border: border

colors:
  bg: "#ffffff"
  surface: "#eaedf5"
  text: "#3e3d48"
  brand: "#1e1853"
  on-brand: "#ffffff"
  border: "#d9dce6"
  text-soft: "#747583"
  border-soft: "#f0f1f5"
  accent-gold: "#c7a36a"

typography:
  display:
    family: "Montserrat, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "Montserrat, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current Accor public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Accor booking site"
      role: "Source for Montserrat typography, navy action color, pale blue-gray surfaces, and multi-brand hotel discovery structure."
      url: https://all.accor.com/
---

## 1. Visual Theme & Atmosphere

Accor has to hold many hotel brands inside one booking ecosystem. A white page, pale blue-gray surfaces, and deep navy action color create a dependable framework while images and hotel identities provide variation. The design should make destination, dates, room choice, loyalty, and brand context easy to compare. The public composition should be recognizable in a first viewport, then become predictable when a user starts a task. Keep the primary product, service, project, or artifact visible instead of replacing evidence with abstract decoration.

**Key Characteristics**
- A clear primary action
- A stable content hierarchy
- Readable metadata
- Intentional surface contrast
- Responsive media treatment
- Text equivalents for visual state

## 2. Color Palette & Roles

Use white for the booking canvas and pale blue-gray `#eaedf5` for grouped search, rate, and loyalty context. `#1e1853` is the deep primary action; it should carry search, select, and confirm decisions without becoming a full-page field. `#3e3d48` supports readable hotel and room metadata. A restrained gold can denote premium or loyalty information only when paired with text.

Use color roles consistently: background for the page ground, surface for grouped content, text for reading, brand for the primary action, border for structure, and semantic colors for states with text labels. Preview swatches show the canvas, brand action, and primary reading color.

## 3. Typography Rules

Montserrat is the sampled display and body family. Use strong weights for destination and hotel names, medium text for room and rate details, and compact labels for dates, occupancy, amenities, and loyalty. The system should be confident and international without making every piece of metadata uppercase.

Suggested hierarchy: display-hero for the first promise, display-lg for a major section, h1 for the page task, h2 for grouped content, h3 for cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

The primary booking button uses navy with white text and an 8px radius. Search fields for destination, dates, rooms, and guests should have visible labels and clear selected values. Hotel cards need image, brand, name, location, rating, price context, and availability action. Brand filters and loyalty badges should be text-backed. Date pickers and rate drawers need keyboard navigation and clear confirmation/cancel actions.

Treat controls as a system: every filled action needs hover, pressed, disabled, and focus states; every card needs a stable content order; every input needs a label and error state. Use familiar icons inside tool buttons and give unfamiliar icons a tooltip.

## 5. Layout Principles

Use a 1280px booking canvas with a prominent search band and 12-column hotel result grid. Keep a 720px measure for destination guides and hotel detail copy. On desktop, filters and results can sit side by side; on mobile, filters become a labeled drawer and the search bar becomes a stepwise stack. Keep 16/24px card spacing and 64px section bands.

Prefer full-width bands with constrained inner content over decorative nested cards. Stable aspect ratios, explicit grid tracks, and fixed control dimensions keep media and labels from shifting as content loads.

## 6. Shapes & Radius Scale

Use 4px for rate/status labels, 8px for search and booking controls, 12px for hotel cards, and 16px for destination panels. Pills are useful for amenities and loyalty states. Keep hotel imagery softly rounded but not overly ornamental.

Keep the radius scale intentional: micro controls, standard controls, comfortable cards, relaxed feature panels, and pills only for true categorical selectors. A rounded rectangle should communicate an action or grouped item, not decorate every section.

## 7. Depth & Elevation

Use white and pale gray surfaces with borders for most hierarchy. Selected filters and booking panels can use a navy outline; date pickers, rate drawers, and dialogs may use medium elevation and a scrim. Elevation must not imply hotel quality or sponsored ranking.

Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a scrim, a clear title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for search focus and selection, 240ms for date and filter transitions, and 320ms for hotel-image or rate-panel reveals. Avoid auto-rotating destination media without controls. Reduced motion should update room and date choices immediately and announce the resulting state.

Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention. Make the final state available without animation and honor reduced-motion preferences.

## 9. Accessibility & A11y

Use dark text on white and pale gray, and verify white on navy buttons. Date pickers need keyboard navigation, current date context, and a readable selected range. Hotel ratings, prices, fees, availability, and loyalty conditions must have text labels. Preserve focus when drawers open and return it after close.

Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for status. Test focus against every surface, including imagery, selected states, dialogs, and disabled-looking controls. Do not use color as the only error, progress, rating, or selection signal.

## 10. Responsive Behavior

At 640px, stack destination, date, guest, and search controls with a visible submit action. At 1024px, collapse secondary filters while preserving price and availability context. At 1280px, use the full search-and-results grid. Maintain 44px inputs and stable hotel image ratios.

Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the first useful action, the content subject, and the state explanation at every breakpoint. If a row cannot fit, group it under a labeled disclosure instead of clipping text.

## 11. Content & Voice

Use reassuring, specific booking language: “Search stays”, “Choose dates”, “See availability”, and “Review rate”. Explain taxes, cancellation, loyalty, and room conditions before confirmation. Empty states should offer nearby destinations, flexible dates, or another Accor brand.

Microcopy should state the object, action, and consequence. Keep empty states useful, error messages recoverable, and confirmations specific. Avoid claims that cannot be understood or verified from the surrounding interface.

## 12. Dark Mode & Theming

The entry is light-first and navy-led. A dark theme needs explicit booking, date-picker, focus, and image-overlay tokens; do not invert hotel photography or pale rate surfaces. Keep loyalty/gold distinct from warning and price status.

Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert imagery or evidence blindly.

## 13. Lineage & Influences

Accor combines a global hotel portfolio with a transactional booking system. The navy framework creates continuity across different hotel brands, while the image and room content carries local character. It rejects a single hotel identity in favor of a system that can compare brands without flattening their stories.

The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

## 14. Do's and Don'ts

**Do**
- Make destination and dates explicit.
- Show rate conditions.
- Keep hotel cards comparable.
- Use navy for booking decisions.
- Label loyalty and premium states.
- Make filters reversible.
- Use stable room imagery.
- Explain fees before confirmation.

**Don't**
- Do not hide cancellation conditions.
- Do not use gold as a quality claim alone.
- Do not make a date picker mouse-only.
- Do not bury destination context.
- Do not imply sponsored ranking with shadows.
- Do not autoplay destination media.
- Do not truncate hotel names.
- Do not collapse booking steps into one ambiguous CTA.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the sampled canvas token.
- Foreground: use the sampled reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Example Component Prompts

- Create an Accor-like hotel search band with destination, dates, guests, navy search action, and visible selected values.
- Design a hotel card with brand, image, name, location, rating, price context, and availability action.
- Build a rate drawer that exposes cancellation, fees, loyalty, and confirmation actions.
- Create a destination guide with a 720px reading measure and hotel discovery rail.

### Iteration Guide

1. Test the date picker with keyboard only.
2. Read price conditions before the CTA.
3. Check hotel card alignment at mobile width.
4. Keep navy distinct from loyalty gold.
5. Verify drawers restore focus.
6. Remove elevation that implies ranking.
