---
name: One Medical
tagline: "Warm, human primary care presented with clinical clarity."
updated_at: 2026-08-05T01:25:47.285Z
published_at: 2026-08-05T01:25:47.285Z
author: webdesignhot
source_url: https://www.onemedical.com/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [healthcare, saas]
tags: [healthcare, primary-care, telehealth, trust, service]
preview_swatch: ["#ffffff", "#004d49", "#ffedce"]
related: [teladoc, zocdoc, cleveland-clinic]
description: "One Medical combines a warm cream surface with deep teal type and a calm service flow. The visual language makes healthcare feel personal without losing clinical trust: large human-centered statements, simple appointment paths, and clear explanations should sit above dense proof or insurance detail."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-soft
  border: border

colors:
  bg: '#ffffff'
  surface: '#ffedce'
  text: '#004d49'
  brand: '#004d49'
  on-brand: '#ffffff'
  border: '#d9e3df'
  text-soft: '#55716e'
  border-soft: '#edf2ef'

typography:
  display:
    family: 'GT Super Display, system-ui, -apple-system, sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'Ginto, system-ui, -apple-system, sans-serif'
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
  summary: "Recorded from the current onemedical public site during the 2026-08-05 catalog audit."
  influences:
    - name: "One Medical public homepage"
      role: "Source for GT Super Display, Ginto body type, deep teal text, warm cream support surface, and care-first service framing."
      url: https://www.onemedical.com/
---

## 1. Visual Theme & Atmosphere

One Medical combines a warm cream surface with deep teal type and a calm service flow. The visual language makes healthcare feel personal without losing clinical trust: large human-centered statements, simple appointment paths, and clear explanations should sit above dense proof or insurance detail. The public composition should feel authored at first glance, then become predictable when a user starts a task. Keep the product or service evidence visible instead of replacing it with abstract decoration.

**Key Characteristics**
- A clear primary action
- A stable content hierarchy
- Readable metadata
- Intentional surface contrast
- Responsive media treatment
- Text equivalents for visual state

## 2. Color Palette & Roles

Use `#004d49` as the primary healthcare color for headings, links, and service emphasis. `#ffedce` is a warm support surface for reassurance, education, or membership context; it should not cover every screen. Keep the white canvas dominant and use dark text for clinical copy. A black or near-black action may appear in the sampled interface, but primary actions should still be checked against the teal trust system. Use soft gray borders instead of black hairlines for forms.

Use color roles consistently: background for the page ground, surface for grouped content, text for reading, brand for the primary action, border for structure, and semantic colors for states with text labels. Preview swatches should show the canvas, brand action, and primary reading color.

## 3. Typography Rules

The sampled display family is GT Super Display and the body family is Ginto. The contrast is intentional: an expressive serif-like display voice can carry care and humanity, while the body face keeps appointment and health information direct. Use display type for a short promise or service category, never for medical instructions. Keep symptoms, coverage, location, and appointment details in the body hierarchy.

Suggested hierarchy: display-hero for the first promise, display-lg for a major section, h1 for the page task, h2 for grouped content, h3 for cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps or secondary context. Never use tracking as a substitute for hierarchy.

## 4. Component Stylings

Primary appointment actions use deep teal or a dark filled treatment with white text and an 8px radius. Secondary actions are outlined and should remain equally legible in a care flow. Provider and location cards need name, specialty, availability, address, and insurance cues without requiring hover. Forms use generous 8px fields, explicit labels, inline validation, and a visible privacy or help link. Navigation should make “Find care”, “Membership”, and “Sign in” distinct tasks.

Treat controls as a system: every filled action needs a hover, pressed, disabled, and focus treatment; every card needs a stable content order; every input needs a label and error state. Use familiar icons inside tool buttons and give unfamiliar icons a tooltip.

## 5. Layout Principles

Use a 1280px canvas with a 720px measure for health explanations. A care-finder hero can pair a warm editorial statement with a simple location/search panel, but appointment selection should become a full-width, stepwise flow. Keep 64px navigation, 24px panel padding, and 64/96px section spacing. Preserve a calm single-column reading layout for clinical content.

Prefer full-width bands with constrained inner content over decorative nested cards. Stable aspect ratios, explicit grid tracks, and fixed control dimensions keep media and labels from shifting the page as content loads.

## 6. Shapes & Radius Scale

Use 4px for compact status, 8px for buttons and fields, 12px for provider cards, and 16px for warm educational panels. Avoid pills for medical claims; reserve them for filters such as “in person” or “virtual”. The system should feel soft and human without looking like a wellness app that hides practical details.

Keep the radius scale intentional: micro controls, standard controls, comfortable cards, relaxed feature panels, and pills only for true categorical selectors. A rounded rectangle should communicate an action or grouped item, not decorate every section.

## 7. Depth & Elevation

Use color blocks and borders to establish hierarchy before shadows. Provider and location cards can use a subtle neutral shadow when they are selectable, while appointment dialogs use a stronger scrim and elevation. Do not float urgent health information in a decorative glass card; keep it in the document flow with high contrast.

Elevation should explain interaction or layering. If a surface can be understood through contrast, spacing, and a border, do not add a shadow. Every overlay needs a scrim, a clear title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for field focus and availability feedback, 240ms for step transitions, and no more than 320ms for a booking panel reveal. Never animate a medical status in a way that delays comprehension. Respect reduced motion by showing each appointment step immediately and retaining an explicit progress label.

Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention. Make the final state available without animation and ensure reduced-motion preferences remove nonessential transitions.

## 9. Accessibility & A11y

Use deep teal or near-black text on white and pale cream surfaces, and verify button contrast for the final teal pair. Focus indicators must be distinct from error borders and remain visible on cream. Appointment steps need text labels, a current-step announcement, and a recoverable back action. Form errors should state what is wrong and how to fix it; do not communicate clinical status with color alone.

Use semantic landmarks, a single logical heading order, keyboard-operable controls, and text alternatives for status. Test focus against every surface, including imagery, selected states, dialogs, and disabled-looking controls. Do not use a color difference as the only error, progress, rating, or selection signal.

## 10. Responsive Behavior

At 640px, stack search, provider details, and booking actions with the next action close to the relevant information. At 1024px, keep location and insurance metadata visible before collapsing secondary navigation. At 1280px, use a two-column care-finder hero but keep the appointment flow linear. Maintain 44px targets, stable provider images, and no horizontal scroll for forms.

Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the first useful action, the content subject, and the state explanation at every breakpoint. If a control row cannot fit, group it under a labeled disclosure instead of allowing clipped text.

## 11. Content & Voice

Write with warmth and clinical precision. Prefer “Find a doctor”, “Book a visit”, and “See care options” over promotional urgency. Explain membership, virtual care, insurance, and availability in literal language. Empty states should offer a location change or a care alternative, not a generic failure message.

Microcopy should state the object, action, and consequence. Keep empty states useful, error messages recoverable, and confirmation messages specific. Avoid claims that cannot be understood or verified from the surrounding interface.

## 12. Dark Mode & Theming

Treat the audited system as a light-first theme with warm cream support surfaces. Do not invert medical content automatically; if dark mode is introduced, define contrast-tested surfaces for clinical instructions, form errors, and focus. Preserve the teal trust cue while separating it from success and link states.

Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve the user’s position and announce the current mode; never use an automatic inversion that damages imagery or clinical/product evidence.

## 13. Lineage & Influences

One Medical borrows from hospitality and editorial service design rather than hospital administration software. The warm cream and display typography create a human entry point, while deep teal and structured forms keep the journey credible. It rejects sterile blue-only clinic chrome and avoids turning care into an entertainment funnel.

The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific color and typography decisions.

## 14. Do's and Don'ts

**Do**
- Lead with the care task.
- Expose location and availability early.
- Use warm surfaces for reassurance.
- Keep health copy literal and scannable.
- Make form errors recoverable.
- Show provider details before the CTA.
- Announce appointment step changes.
- Keep privacy and coverage links visible.

**Don't**
- Do not hide care options behind marketing language.
- Do not use color alone for health status.
- Do not put clinical instructions in low-contrast cream text.
- Do not make the booking flow depend on hover.
- Do not add playful animation to urgent information.
- Do not conceal insurance constraints.
- Do not use an oversized serif for long medical copy.
- Do not turn provider cards into decorative tiles.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the sampled canvas token.
- Foreground: use the sampled reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Example Component Prompts

- Create a One Medical-like care finder with a warm cream editorial statement, deep teal type, location search, and a direct “Find care” action.
- Design a provider card with specialty, location, availability, insurance cue, and a keyboard-visible booking action.
- Build a booking step with explicit labels, progress text, recoverable validation, and calm teal/cream visual hierarchy.
- Create a health education section that uses display type for the topic and a readable body measure for instructions.

### Iteration Guide

1. Verify every action against the care task it represents.
2. Check cream surface contrast with real body copy.
3. Read all form errors without relying on red.
4. Keep provider and location context above the fold.
5. Test the booking sequence with keyboard only.
6. Remove any animation that delays clinical comprehension.
