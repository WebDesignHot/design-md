---
name: Tripadvisor
tagline: "Travel discovery organized around trusted reviews and decisions."
updated_at: 2026-08-05T01:26:05.140Z
published_at: 2026-08-05T01:26:05.140Z
author: webdesignhot
source_url: https://www.tripadvisor.com/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [hospitality, marketplace]
tags: [hospitality, travel, reviews, discovery, marketplace]
preview_swatch: ["#ffffff", "#00aa6c", "#17202a"]
related: [booking, airbnb, expedia]
description: "Tripadvisor is a travel discovery and review system: white space, search, place imagery, and a strong green action cue organize a large amount of decision-making information. The design should help people compare hotels, restaurants, and experiences while making ratings, review context, sponsorship, and booking paths explicit."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-soft
  border: border

colors:
  bg: '#ffffff'
  surface: '#ffffff'
  text: '#17202a'
  brand: '#00aa6c'
  on-brand: '#ffffff'
  border: '#d9dde2'
  text-soft: '#5b6873'
  border-soft: '#eef0f2'

typography:
  display:
    family: 'Inter, system-ui, -apple-system, sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Inter, system-ui, -apple-system, sans-serif'
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
  summary: "Recorded from the current tripadvisor public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Tripadvisor public homepage"
      role: "Source for travel discovery and review information architecture; green/neutral catalog tokens are normalized where automatic sampling hit a fallback."
      url: https://www.tripadvisor.com/
---

## 1. Visual Theme & Atmosphere

Tripadvisor is a travel discovery and review system: white space, search, place imagery, and a strong green action cue organize a large amount of decision-making information. The design should help people compare hotels, restaurants, and experiences while making ratings, review context, sponsorship, and booking paths explicit. The public composition should feel authored at first glance, then become predictable when a user starts a task. Keep the product or service evidence visible instead of replacing it with abstract decoration.

**Key Characteristics**
- A clear primary action
- A stable content hierarchy
- Readable metadata
- Intentional surface contrast
- Responsive media treatment
- Text equivalents for visual state

## 2. Color Palette & Roles

Use `#ffffff` as the discovery canvas and `#17202a` for primary text, correcting the black fallback from automatic sampling. Normalize the primary action and brand cue to Tripadvisor green `#00aa6c`; use it for search, save, and booking-adjacent actions while keeping review sentiment separately labeled. Pale gray surfaces and `#d9dde2` borders support comparison. Yellow, red, or rating colors must always have text or stars with an accessible name.

Use color roles consistently: background for the page ground, surface for grouped content, text for reading, brand for the primary action, border for structure, and semantic colors for states with text labels. Preview swatches should show the canvas, brand action, and primary reading color.

## 3. Typography Rules

The public sampling fell back to Times in the first visible document, so use a neutral system sans for the implementation-facing body and metadata hierarchy. Travel discovery benefits from readable place names, short review excerpts, location lines, and price context. If a display face is used for editorial travel stories, keep it out of search controls and booking details.

Suggested hierarchy: display-hero for the first promise, display-lg for a major section, h1 for the page task, h2 for grouped content, h3 for cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps or secondary context. Never use tracking as a substitute for hierarchy.

## 4. Component Stylings

Use green with white text for search or booking-adjacent actions, with outlined save and compare controls. Place cards need image, name, location, rating/review count, category, price or booking cue, and a stable action. Search fields should make destination, dates, and party size explicit. Review cards need author/date/context and a text rating label. Navigation should separate hotels, restaurants, things to do, and forums or stories.

Treat controls as a system: every filled action needs a hover, pressed, disabled, and focus treatment; every card needs a stable content order; every input needs a label and error state. Use familiar icons inside tool buttons and give unfamiliar icons a tooltip.

## 5. Layout Principles

Use a 1280px discovery canvas with a prominent search band and a 12-column result grid. Keep a 720px measure for travel guides and reviews. Place cards can use 3 columns at desktop, 2 at tablet, and 1 at mobile, with stable image ratios. Use 16/24px internal spacing and 64px content bands; booking and filter controls should remain aligned across results.

Prefer full-width bands with constrained inner content over decorative nested cards. Stable aspect ratios, explicit grid tracks, and fixed control dimensions keep media and labels from shifting the page as content loads.

## 6. Shapes & Radius Scale

Use 4px for rating/status chips, 8px for search and buttons, 12px for place cards, and 16px for featured destination panels. Pills are appropriate for cuisine, amenities, and trip type filters. Keep photos softly rounded but avoid turning every review excerpt into a bubble.

Keep the radius scale intentional: micro controls, standard controls, comfortable cards, relaxed feature panels, and pills only for true categorical selectors. A rounded rectangle should communicate an action or grouped item, not decorate every section.

## 7. Depth & Elevation

Use borders and image composition for most hierarchy. Selected filters and saved places can use a green outline; menus, date pickers, and booking dialogs may use a medium shadow and scrim. Sponsored placement must be labeled in text and cannot be implied only by elevation or order.

Elevation should explain interaction or layering. If a surface can be understood through contrast, spacing, and a border, do not add a shadow. Every overlay needs a scrim, a clear title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for filter and save feedback, 240ms for date-picker and disclosure transitions, and 320ms for destination media reveals. Do not auto-rotate travel carousels without controls. Under reduced motion, keep the selected place and filter result stable and remove image parallax.

Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention. Make the final state available without animation and ensure reduced-motion preferences remove nonessential transitions.

## 9. Accessibility & A11y

Use dark text on white and pale gray, and verify white text on green actions. Ratings need an accessible text summary, not only stars or color. Search fields require labels, date pickers need keyboard navigation and current-date context, and sponsored content must be announced. Images should describe the place or experience rather than generic scenery.

Use semantic landmarks, a single logical heading order, keyboard-operable controls, and text alternatives for status. Test focus against every surface, including imagery, selected states, dialogs, and disabled-looking controls. Do not use a color difference as the only error, progress, rating, or selection signal.

## 10. Responsive Behavior

At 640px, stack destination search controls and keep the submit action visible without horizontal clipping. At 1024px, collapse secondary filters and use two result columns. At 1280px, use the full search band and three-column place grid. Maintain 44px targets, stable photos, and a readable rating/review line on every card.

Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the first useful action, the content subject, and the state explanation at every breakpoint. If a control row cannot fit, group it under a labeled disclosure instead of allowing clipped text.

## 11. Content & Voice

Use practical, trust-building travel language. Prefer “Search stays”, “Read reviews”, “Save place”, and “See availability”. Explain rating scale, review date, price caveats, and sponsorship. Empty states should offer nearby destinations, flexible dates, or a related category.

Microcopy should state the object, action, and consequence. Keep empty states useful, error messages recoverable, and confirmation messages specific. Avoid claims that cannot be understood or verified from the surrounding interface.

## 12. Dark Mode & Theming

The entry is light-first with green as an action cue. A dark theme would need separate photo overlays, rating, focus, and booking tokens; do not invert a review surface without checking long-form readability. Keep rating sentiment distinct from the brand green.

Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve the user’s position and announce the current mode; never use an automatic inversion that damages imagery or clinical/product evidence.

## 13. Lineage & Influences

Tripadvisor combines the information architecture of a search directory with the emotional pull of travel media. Place photography creates aspiration, while review counts, dates, prices, and filters create trust. It rejects both a pure editorial magazine and a bare booking form by making comparison and community evidence first-class.

The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific color and typography decisions.

## 14. Do's and Don'ts

**Do**
- Make destination and dates explicit.
- Show rating context with text.
- Use green for decisions, not sentiment.
- Keep review date and author visible.
- Label sponsored placement.
- Use stable place-photo ratios.
- Make filters reversible.
- Offer nearby or flexible-date fallbacks.

**Don't**
- Do not hide price caveats.
- Do not use stars without an accessible label.
- Do not imply sponsorship with position alone.
- Do not auto-rotate destination carousels.
- Do not crop photos before the place is recognizable.
- Do not make the booking action ambiguous.
- Do not conflate brand green with review sentiment.
- Do not turn every review into a rounded bubble.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the sampled canvas token.
- Foreground: use the sampled reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Example Component Prompts

- Create a Tripadvisor-like destination search band with explicit destination, date, party, and green search action controls.
- Design a place card with photo, name, location, text rating summary, review count, price cue, and save action.
- Build a review card that exposes author, date, trip context, rating, and readable excerpt without relying on stars alone.
- Create a mobile filter drawer with selected criteria, clear reset, and nearby/flexible-date empty-state suggestions.

### Iteration Guide

1. Read every place card without color or star icons.
2. Check date-picker keyboard flow.
3. Verify price and sponsorship caveats are visible.
4. Keep destination images recognizable on mobile.
5. Make green actions distinct from sentiment states.
6. Remove any carousel that lacks explicit controls.
