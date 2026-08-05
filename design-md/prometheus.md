---
name: "Prometheus"
tagline: "Metrics-first observability with a precise orange signal."
updated_at: 2026-08-05T04:56:00.740Z
published_at: 2026-08-05T04:56:00.740Z
author: webdesignhot
source_url: "https://prometheus.io/"
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, observability, monitoring, metrics, time-series]
preview_swatch: ["#ffffff", "#e64a22", "#343a40"]
related: [grafana, opentelemetry, datadog]
description: "Prometheus makes monitoring infrastructure legible through a white documentation base, orange action signal, slate technical copy, and a direct route from metrics collection to queries, alerting, and exporters. The design should feel precise and operational rather than like a generic analytics dashboard."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-warm
  muted: text-soft
  border: border
  ring: border-strong

colors:
  bg: "#ffffff"
  surface: "#f6f7f8"
  text: "#343a40"
  brand: "#e64a22"
  on-brand: "#ffffff"
  border: "#dfe3e7"
  text-soft: "#68727d"
  border-strong: "#b7c0c7"
  accent-warm: "#f2b84b"
  accent-purple: "#7b61ff"

typography:
  display:
    family: "Inter, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "Inter, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current Prometheus public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Prometheus public site"
      role: "The Prometheus public site supplied the white technical canvas, orange identity, monitoring/metrics positioning, and direct path into documentation and ecosystem tools."
      url: "https://prometheus.io/"
---

## 1. Visual Theme & Atmosphere

Prometheus should read as a focused monitoring instrument: white reference space, orange signal, terse technical labels, and an obvious line from scrape to query to alert. Keep metrics and operational consequences visible in the first useful viewport. Keep the actual project, package, runtime, or infrastructure subject visible in the first useful viewport. The visual system should help an agent or human move from recognition to a concrete developer task.

**Key Characteristics**
- A visible first action
- Stable technical hierarchy
- Readable version and status metadata
- Inspectable code or configuration
- Responsive documentation structure
- Text equivalents for visual state

## 2. Color Palette & Roles

Use white for the documentation canvas, near-white gray for query and guide surfaces, slate for reading, orange for primary monitoring actions, and purple only for a secondary query or visualization accent. Use role names consistently: background, surface, text, brand, on-brand, border, text-soft, border-strong, and accent tokens. Preview swatches show the page ground, primary action, and primary reading color. Semantic states need both color and text.

## 3. Typography Rules

Inter supports compact monitoring language. Use bold type for metrics, alerts, and query concepts; regular text for operational explanation; and monospace for PromQL, labels, targets, and alert rules. Suggested hierarchy: display-hero for the first promise, display-lg for a major concept, h1 for the current task, h2 for grouped content, h3 for examples or cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Use metric cards, PromQL blocks, target status rows, alert rule panels, exporter lists, and versioned documentation. Status rows need text and icon states; query blocks need copy and line context. Treat every control as a stateful system: default, hover, pressed, disabled, and visible keyboard focus. Use familiar icons inside tool buttons, give unfamiliar icons a tooltip, and keep the action consequence beside the control.

## 5. Layout Principles

Use a 1200px shell with a metric-to-alert hero, a 760px guide column, and a compact reference rail. Let users compare scrape targets and exporters without losing the current query context. On mobile, stack target metadata rather than compressing it into unreadable columns. Prefer full-width bands with constrained inner content over decorative nested cards. Stable grid tracks, fixed control dimensions, and bounded code regions prevent dynamic labels from shifting the page.

## 6. Shapes & Radius Scale

Use 3px to 8px radii for operational controls and query panels. Keep target rows rectangular and dense; reserve pills for status or version labels. A radius should communicate a control or grouped item, not decorate every section. Keep code, tables, and reference content aligned to a predictable baseline.

## 7. Depth & Elevation

Use borders and pale surfaces to separate metric context. A query editor may use a slightly raised surface, but avoid card stacks that make the monitoring graph look decorative. Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 120ms for target state changes, 180ms for query feedback, and 240ms for alert rule expansion. Reduced motion keeps status updates textual and avoids animated chart noise. Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention, and make the final state available without animation.

## 9. Accessibility & A11y

Expose target health, alert state, and query result status in text. Verify orange action contrast, label copy/query controls, preserve a logical heading order, and provide a table or summary for any chart. Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for diagrams, charts, code state, and status. Do not use color as the only error, progress, rating, health, or selection signal.

## 10. Responsive Behavior

At 640px, keep the scrape/query/alert path visible as a vertical sequence. At 1024px, collapse target metadata into labeled rows. Keep PromQL horizontally scrollable inside the query panel and avoid page overflow. Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the subject, first useful action, version context, and state explanation at every breakpoint.

## 11. Content & Voice

Use monitoring verbs: “Scrape a target”, “Write a query”, “Create an alert”, “Inspect a metric”, and “Add an exporter”. Name the signal and the operational consequence in every state. Microcopy should state the object, action, and consequence. Empty states should offer a valid next step, errors should be recoverable, and technical terms should be defined at the point of use.

## 12. Dark Mode & Theming

The default is a light technical theme. A dark query mode must define query surface, syntax, alert, focus, and disabled tokens separately; orange remains the action signal but never the sole health indicator. Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert code or imagery blindly.

## 13. Lineage & Influences

Prometheus sits between time-series databases, Unix monitoring, service discovery, and alerting systems. Its design should make a metric query feel like a controlled operational instrument. The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

The audit evidence records this source observation: The Prometheus public site supplied the white technical canvas, orange identity, monitoring/metrics positioning, and direct path into documentation and ecosystem tools.

## 14. Do's and Don'ts

**Do**
- Show the scrape-to-alert path.
- Keep PromQL examples copyable.
- Use orange for primary monitoring actions.
- Make target health textual.
- Expose exporters and integrations.
- Keep versioned docs visible.
- Summarize charts in tables or text.
- Preserve query context on mobile.

**Don't**
- Do not use chart motion as decoration.
- Do not hide alert state behind color.
- Do not make a metric card content-free.
- Do not clip PromQL.
- Do not bury exporter context.
- Do not use orange for every semantic state.
- Do not replace operational labels with marketing claims.
- Do not compress targets into unreadable tables.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the page ground token.
- Foreground: use the primary reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Build Prompt

Create a metrics-first monitoring reference with a white canvas, orange signal actions, slate technical copy, copyable PromQL, target and alert context, exporter navigation, and textual summaries for charts and states.

### Iteration Order

First make scrape, query, and alert steps explicit, then build target and exporter states, then tune query surfaces and mobile metadata. Verify color-independent health states and keyboard access.
