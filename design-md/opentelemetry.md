---
name: "OpenTelemetry"
tagline: "Portable traces, metrics, and logs for observable systems."
updated_at: 2026-08-05T04:55:58.769Z
published_at: 2026-08-05T04:55:58.769Z
author: webdesignhot
source_url: "https://opentelemetry.io/"
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, observability, tracing, telemetry, cloud-native]
preview_swatch: ["#ffffff", "#4f61ab", "#28303d"]
related: [prometheus, grafana, sentry]
description: "OpenTelemetry turns observability standards into a public system: a calm light documentation mode, a deep dark technical mode, purple-blue identity, and a clear route through signals, collectors, SDKs, and ecosystem integrations. The extraction should make distributed systems concepts approachable without hiding their operational depth."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-warm
  muted: text-soft
  border: border
  ring: border-strong

themes:
  default: light
  available: [light, dark]
  switch-via: 'Theme toggle preserves signal roles and respects prefers-reduced-motion.'
colors:
  light:
    bg: "#ffffff"
    surface: "#f3f4f8"
    text: "#28303d"
    brand: "#4f61ab"
    on-brand: "#ffffff"
    border: "#d9dce5"
    text-soft: "#687080"
    border-strong: "#aeb5c5"
    accent-warm: "#c7a44a"
    accent-teal: "#2b9a8f"
  dark:
    bg: "#212529"
    surface: "#34384a"
    text: "#f1f3f5"
    brand: "#8d9df0"
    on-brand: "#161a24"
    border: "#5d6270"
    text-soft: "#b9beca"
    border-strong: "#858b9a"
    accent-warm: "#e2bd66"
    accent-teal: "#58c8b9"

typography:
  display:
    family: "system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "system-ui, -apple-system, sans-serif"
    weights: [400, 500, 600]
  mono:
    family: "ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, monospace"
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    display-lg:      { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.02em', family: display }
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
  page-width: 1240
  prose-width: 760
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 220
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

components:
  button-primary: { bg: brand, text: on-brand, padding: '10px 16px', radius: 6 }
  button-ghost:   { bg: transparent, text: text, border: border, padding: '10px 16px', radius: 6 }
  card:           { bg: surface, border: border, radius: 8, padding: 24 }
  input:          { bg: bg, border: border, text: text, radius: 6, padding: '8px 12px' }

lineage:
  summary: "Recorded from the current OpenTelemetry public site during the 2026-08-05 catalog audit."
  influences:
    - name: "OpenTelemetry public site"
      role: "The OpenTelemetry public site supplied the light/dark documentation split, purple-blue identity, signal taxonomy, and collector/SDK ecosystem framing."
      url: "https://opentelemetry.io/"
---

## 1. Visual Theme & Atmosphere

OpenTelemetry should feel calm enough for learning and serious enough for production operations. Use the light mode for concept discovery and the dark mode for telemetry, code, and system diagrams. The visual anchor is a clear signal model, not a decorative dashboard. Keep the actual project, package, runtime, or infrastructure subject visible in the first useful viewport. The visual system should help an agent or human move from recognition to a concrete developer task.

**Key Characteristics**
- A visible first action
- Stable technical hierarchy
- Readable version and status metadata
- Inspectable code or configuration
- Responsive documentation structure
- Text equivalents for visual state

## 2. Color Palette & Roles

In light mode, use white, pale lavender-gray, slate text, and purple-blue actions. In dark mode, use charcoal, violet-slate surfaces, bright readable text, and a lighter purple-blue primary. Teal can identify an adjacent signal or healthy state only when labeled. Use role names consistently: light background, light surface, light text, light brand, light border, and their dark-theme equivalents. Preview swatches show the page ground, primary action, and primary reading color. Semantic states need both color and text.

## 3. Typography Rules

Use a neutral system sans for cross-platform documentation. Keep headings sturdy and explanatory, use compact metadata for signal type and SDK language, and use monospace for spans, attributes, exporters, and configuration. Suggested hierarchy: display-hero for the first promise, display-lg for a major concept, h1 for the current task, h2 for grouped content, h3 for examples or cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Build signal tabs, language selectors, collector configuration blocks, trace cards, integration lists, and a visible docs search. Every signal tab needs a label, selected state, and text explanation; every diagram needs a summary. Treat every control as a stateful system: default, hover, pressed, disabled, and visible keyboard focus. Use familiar icons inside tool buttons, give unfamiliar icons a tooltip, and keep the action consequence beside the control.

## 5. Layout Principles

Use a 1240px shell with a signal-oriented hero, a 12-column integration grid, and a 760px reading column for guides. Keep the collector and SDK path adjacent to the concept explanation. On mobile, stack signal tabs and preserve configuration width through bounded scrolling. Prefer full-width bands with constrained inner content over decorative nested cards. Stable grid tracks, fixed control dimensions, and bounded code regions prevent dynamic labels from shifting the page.

## 6. Shapes & Radius Scale

Use 4px for controls, 8px for code and integration panels, and 12px for a signal group. Avoid excessive pills; use them only for signal type or language tags. A radius should communicate a control or grouped item, not decorate every section. Keep code, tables, and reference content aligned to a predictable baseline.

## 7. Depth & Elevation

Light surfaces should use quiet borders; dark surfaces can use a slightly brighter edge for code and telemetry panels. Avoid floating dashboard cards around a diagram that users need to inspect. Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for signal switching, 220ms for integration filters, and 280ms for expanding a collector explanation. Do not animate traces continuously; reduced motion leaves the signal path visible and still. Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention, and make the final state available without animation.

## 9. Accessibility & A11y

Never make signal type or health color-only. Label trace and collector diagrams with text, keep purple-blue contrast verified in both themes, expose the active SDK language, and make code blocks keyboard-scrollable. Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for diagrams, charts, code state, and status. Do not use color as the only error, progress, rating, health, or selection signal.

## 10. Responsive Behavior

At 640px, stack signal and language selectors while keeping “Get started” visible. At 1024px, collapse the integration rail. Preserve trace and configuration content in bounded scroll regions with readable labels. Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the subject, first useful action, version context, and state explanation at every breakpoint.

## 11. Content & Voice

Use operational copy: “Instrument a service”, “Choose a signal”, “Configure a collector”, “Export traces”, and “Read the specification”. Define every acronym at first use and state what data moves where. Microcopy should state the object, action, and consequence. Empty states should offer a valid next step, errors should be recoverable, and technical terms should be defined at the point of use.

## 12. Dark Mode & Theming

Light is the learning default and dark is a first-class technical mode. Keep role names stable across both themes, define separate code and focus surfaces, and announce the current theme without changing the meaning of signal colors. Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert code or imagery blindly.

## 13. Lineage & Influences

OpenTelemetry sits at the intersection of observability dashboards, distributed tracing, instrumentation SDKs, and open standards. Its design should connect an abstract signal model to a concrete service path. The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

The audit evidence records this source observation: The OpenTelemetry public site supplied the light/dark documentation split, purple-blue identity, signal taxonomy, and collector/SDK ecosystem framing.

## 14. Do's and Don'ts

**Do**
- Make signal type explicit.
- Show the service-to-exporter path.
- Keep code and configuration copyable.
- Use purple-blue consistently across themes.
- Give diagrams a text summary.
- Make SDK language selectable.
- Expose specification and getting-started routes.
- Keep integrations comparable.

**Don't**
- Do not animate traces continuously.
- Do not use health color without a label.
- Do not hide collector configuration.
- Do not make signal tabs icon-only.
- Do not flatten the dark technical mode into a color inversion.
- Do not show a dashboard without data context.
- Do not overload the hero with acronyms.
- Do not clip configuration on mobile.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the page ground token.
- Foreground: use the primary reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Build Prompt

Create an observability standards surface with light and dark technical modes, purple-blue signal actions, explicit traces/metrics/logs navigation, copyable collector configuration, SDK context, and text summaries for diagrams.

### Iteration Order

First establish the signal model and getting-started path, then add SDK and collector configuration, then tune light/dark surfaces and integration filtering. Test signal labels, focus, and mobile configuration overflow.
