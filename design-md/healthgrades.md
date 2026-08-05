---
name: Healthgrades
tagline: "Provider discovery organized around search, trust, and next steps."
updated_at: 2026-08-05T01:25:48.961Z
published_at: 2026-08-05T01:25:48.961Z
author: webdesignhot
source_url: https://www.healthgrades.com/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [healthcare, marketplace]
tags: [healthcare, directory, providers, search, trust]
preview_swatch: ["#ffffff", "#007c83", "#1d2b36"]
related: [zocdoc, onemedical, teladoc]
description: "Healthgrades is a healthcare directory pattern: a bright, information-first canvas where search and provider comparison carry more weight than editorial spectacle. The design should establish trust through readable records, transparent filters, and prominent next actions, with a restrained teal accent rather than a decorative visual system."

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
  text: '#1d2b36'
  brand: '#007c83'
  on-brand: '#ffffff'
  border: '#dfe6eb'
  text-soft: '#5d6b75'
  border-soft: '#eef2f5'

typography:
  display:
    family: 'HgSans, system-ui, -apple-system, sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'HgSans, system-ui, -apple-system, sans-serif'
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
  summary: "Recorded from the current healthgrades public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Healthgrades public homepage"
      role: "Source for HgSans typography, search-led information hierarchy, and provider discovery framing; teal accents are normalized for the catalog preview."
      url: https://www.healthgrades.com/
---

## 1. Visual Theme & Atmosphere

Healthgrades is a healthcare directory pattern: a bright, information-first canvas where search and provider comparison carry more weight than editorial spectacle. The design should establish trust through readable records, transparent filters, and prominent next actions, with a restrained teal accent rather than a decorative visual system. The public composition should feel authored at first glance, then become predictable when a user starts a task. Keep the product or service evidence visible instead of replacing it with abstract decoration.

**Key Characteristics**
- A clear primary action
- A stable content hierarchy
- Readable metadata
- Intentional surface contrast
- Responsive media treatment
- Text equivalents for visual state

## 2. Color Palette & Roles

Use white as the catalog ground and `#1d2b36` as the primary reading color. `#007c83` is the corrected healthcare accent for search, links, focus-adjacent emphasis, and booking actions; keep it concentrated around user decisions. Use pale blue-gray surfaces and `#dfe6eb` borders to separate provider records. Semantic green, amber, and red must be paired with a written status and never stand in for quality or clinical judgment alone.

Use color roles consistently: background for the page ground, surface for grouped content, text for reading, brand for the primary action, border for structure, and semantic colors for states with text labels. Preview swatches should show the canvas, brand action, and primary reading color.

## 3. Typography Rules

HgSans is the sampled family for both display and body. Keep the hierarchy compact but not cramped: search intent and provider names lead, followed by specialty, location, ratings context, and availability. Avoid display typography that implies a lifestyle brand. Use weight and whitespace to distinguish patient-facing information from filters and metadata.

Suggested hierarchy: display-hero for the first promise, display-lg for a major section, h1 for the page task, h2 for grouped content, h3 for cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps or secondary context. Never use tracking as a substitute for hierarchy.

## 4. Component Stylings

The primary search or appointment action uses teal with white text and an 8px radius; an outlined save or compare action remains neutral. Provider cards need a stable order: name, specialty, location, ratings context, insurance, availability, then action. Filter chips should show active criteria and provide a clear reset. Inputs need persistent labels and helper text for location, specialty, and insurance. Navigation should keep provider search and health information separate.

Treat controls as a system: every filled action needs a hover, pressed, disabled, and focus treatment; every card needs a stable content order; every input needs a label and error state. Use familiar icons inside tool buttons and give unfamiliar icons a tooltip.

## 5. Layout Principles

Use a 1280px container and a 720px content measure for health articles. Search results can use a 3-column structure: filters, provider records, and an optional sponsored/context rail, but the provider record must remain the visual center. Keep 64px header height, 16/24px card spacing, and 48/64px section intervals. On mobile, move filters into a labeled drawer and keep provider actions in each record.

Prefer full-width bands with constrained inner content over decorative nested cards. Stable aspect ratios, explicit grid tracks, and fixed control dimensions keep media and labels from shifting the page as content loads.

## 6. Shapes & Radius Scale

Use 4px for status labels, 8px for controls, 12px for provider records, and 16px for larger educational panels. Reserve pills for active filters and availability labels. Avoid excessive roundness because directory results need to read like trustworthy records, not social posts.

Keep the radius scale intentional: micro controls, standard controls, comfortable cards, relaxed feature panels, and pills only for true categorical selectors. A rounded rectangle should communicate an action or grouped item, not decorate every section.

## 7. Depth & Elevation

Provider records should use a border and an optional low shadow only when selected or hovered. A filter drawer and appointment modal can use stronger elevation with a scrim. Keep sponsored or informational content visibly labeled and do not use elevation to imply clinical quality or ranking.

Elevation should explain interaction or layering. If a surface can be understood through contrast, spacing, and a border, do not add a shadow. Every overlay needs a scrim, a clear title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for search focus and filter selection, 240ms for result refresh or disclosure, and 320ms for drawer and modal transitions. Do not animate result positions in a way that makes a provider jump while a user is reading. Under reduced motion, update filters immediately and announce result counts in text.

Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention. Make the final state available without animation and ensure reduced-motion preferences remove nonessential transitions.

## 9. Accessibility & A11y

Use dark text on white and pale blue-gray surfaces, with a verified teal focus ring that is distinct from selection and error states. Search result counts need a live-region equivalent, and filter controls must expose selected values and reset behavior. Ratings, sponsored labels, insurance, and availability must be text-readable. Cards should not make the whole container an ambiguous nested link.

Use semantic landmarks, a single logical heading order, keyboard-operable controls, and text alternatives for status. Test focus against every surface, including imagery, selected states, dialogs, and disabled-looking controls. Do not use a color difference as the only error, progress, rating, or selection signal.

## 10. Responsive Behavior

At 640px, use a single result column and a filter button with an explicit count. At 1024px, keep filters as a collapsible side panel and preserve the provider action in view. At 1280px, use the full search/results grid. Maintain 44px controls, stable avatar or provider image boxes, and a readable result title that never truncates before the specialty.

Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the first useful action, the content subject, and the state explanation at every breakpoint. If a control row cannot fit, group it under a labeled disclosure instead of allowing clipped text.

## 11. Content & Voice

Use factual, patient-centered language. Prefer “Find a doctor”, “Check availability”, and “Review accepted insurance” over unqualified claims. Explain ratings, sponsored placement, and provider data provenance. Empty states should suggest a nearby specialty, location change, or care alternative.

Microcopy should state the object, action, and consequence. Keep empty states useful, error messages recoverable, and confirmation messages specific. Avoid claims that cannot be understood or verified from the surrounding interface.

## 12. Dark Mode & Theming

The audited system is light-first. If dark mode is introduced, preserve record readability and retest healthcare semantic colors against the dark surface. Never encode quality, urgency, or clinical outcome solely in a theme color.

Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve the user’s position and announce the current mode; never use an automatic inversion that damages imagery or clinical/product evidence.

## 13. Lineage & Influences

Healthgrades follows the information architecture of search directories and clinical reference tools. Its strongest visual idea is not a logo color but the disciplined ordering of evidence around a provider decision. It rejects the ambiguity of lifestyle marketing and keeps discovery, comparison, and booking as separate, legible tasks.

The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific color and typography decisions.

## 14. Do's and Don'ts

**Do**
- Put search intent first.
- Show provider evidence in a stable order.
- Label sponsored and rated content.
- Keep filters reversible.
- Use teal as a decision cue.
- Expose insurance and availability.
- Announce result updates.
- Keep mobile provider actions visible.

**Don't**
- Do not imply clinical quality with color alone.
- Do not hide filter state.
- Do not make ratings look like medical outcomes.
- Do not bury the location in a tooltip.
- Do not animate result rows while reading.
- Do not mix sponsored copy into clinical facts.
- Do not use nested ambiguous links.
- Do not turn a directory into a lifestyle landing page.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the sampled canvas token.
- Foreground: use the sampled reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Example Component Prompts

- Create a provider search page with a clear query field, filter count, teal action, and a readable record list on a white canvas.
- Design a provider card that orders name, specialty, location, rating context, insurance, availability, and booking action.
- Build a mobile filter drawer that announces selected criteria and provides a visible reset action.
- Create a health article layout with a compact metadata rail and a 720px readable content measure.

### Iteration Guide

1. Read the result card without looking at color.
2. Test filter reset and result count announcements.
3. Check sponsored labels at mobile width.
4. Keep provider actions aligned across different names.
5. Verify teal focus against every surface.
6. Remove any hierarchy that implies unverified clinical outcomes.
