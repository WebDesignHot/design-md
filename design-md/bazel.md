---
name: "Bazel"
tagline: "Fast, correct builds for large multi-language codebases."
updated_at: 2026-08-05T04:55:52.959Z
published_at: 2026-08-05T04:55:52.959Z
author: webdesignhot
source_url: "https://bazel.build/"
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, build-system, monorepo, cache, multi-language]
preview_swatch: ["#ffffff", "#0c713a", "#202124"]
related: [cmake, github, circleci]
description: "Bazel presents open-source build infrastructure through speed, correctness, scale, and extensibility. A white documentation base, green build signal, clear technical hierarchy, and strong guide/reference split should help teams understand incremental builds, remote caching, and multi-language rules."

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
  surface: "#f2f7f3"
  text: "#202124"
  brand: "#0c713a"
  on-brand: "#ffffff"
  border: "#dfe5e1"
  text-soft: "#66736b"
  border-strong: "#aabbb0"
  accent-warm: "#fbbc04"
  accent-yellow: "#fbbc04"
  accent-blue: "#4285f4"

typography:
  display:
    family: "Roboto, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "Roboto, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current Bazel public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Bazel public site"
      role: "The Bazel public site supplied the white canvas, green build identity, speed/correctness/scale hierarchy, and multi-language documentation structure."
      url: "https://bazel.build/"
---

## 1. Visual Theme & Atmosphere

Bazel should feel precise and scalable. Keep the build graph, cache, and multi-language promise visible, then make the documentation route from startup to reference obvious. The green identity should signal a successful build path, not decoration. Keep the actual project, package, runtime, or infrastructure subject visible in the first useful viewport. The visual system should help an agent or human move from recognition to a concrete developer task.

**Key Characteristics**
- A visible first action
- Stable technical hierarchy
- Readable version and status metadata
- Inspectable code or configuration
- Responsive documentation structure
- Text equivalents for visual state

## 2. Color Palette & Roles

Use white for the public documentation ground, pale green for grouped examples, deep green for build actions, slate for reading, and yellow or blue for secondary system states with labels. Use role names consistently: background, surface, text, brand, on-brand, border, text-soft, border-strong, and accent tokens. Preview swatches show the page ground, primary action, and primary reading color. Semantic states need both color and text.

## 3. Typography Rules

Roboto supports Bazel’s practical, toolchain-oriented voice. Use bold headings for speed, correctness, and scale; keep technical prose compact; reserve monospace for Starlark, targets, queries, and cache diagnostics. Suggested hierarchy: display-hero for the first promise, display-lg for a major concept, h1 for the current task, h2 for grouped content, h3 for examples or cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Use a build command hero, language/platform selector, documentation search, target example, cache diagram, extension guide, and release navigation. Selected language states need text and an outline, not color alone. Treat every control as a stateful system: default, hover, pressed, disabled, and visible keyboard focus. Use familiar icons inside tool buttons, give unfamiliar icons a tooltip, and keep the action consequence beside the control.

## 5. Layout Principles

Use a 1240px shell with a broad promise band and a 780px documentation column. Put startup commands and install paths before the deeper reference rail. On mobile, convert language and platform rows into labeled disclosures. Prefer full-width bands with constrained inner content over decorative nested cards. Stable grid tracks, fixed control dimensions, and bounded code regions prevent dynamic labels from shifting the page.

## 6. Shapes & Radius Scale

Use 4px for buttons, 8px for code and guide panels, and 12px only for larger explanatory groups. Keep the visual language crisp and structural. A radius should communicate a control or grouped item, not decorate every section. Keep code, tables, and reference content aligned to a predictable baseline.

## 7. Depth & Elevation

Use pale green surfaces and borders to group concepts. A cache or dependency diagram can use one elevated panel, but the build graph itself should remain inspectable and unframed. Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 120ms for selected target feedback, 200ms for guide navigation, and 280ms for expanding an explanation. Reduced motion keeps target and cache states static and readable. Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention, and make the final state available without animation.

## 9. Accessibility & A11y

Give every language, platform, and cache state a text equivalent. Keep green action contrast verified, label command copy buttons, preserve heading order, and make diagrams available as a concise textual dependency summary. Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for diagrams, charts, code state, and status. Do not use color as the only error, progress, rating, health, or selection signal.

## 10. Responsive Behavior

At 640px, keep install and first build actions above the fold. At 1024px, collapse secondary language rules into a labeled control. Keep query examples scrollable and preserve target names without truncation. Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the subject, first useful action, version context, and state explanation at every breakpoint.

## 11. Content & Voice

Use concrete build language: “Build a target”, “Read the guide”, “Install Bazel”, “Query the graph”, and “Extend a rule”. State what gets faster or more reliable instead of using generic scale claims. Microcopy should state the object, action, and consequence. Empty states should offer a valid next step, errors should be recoverable, and technical terms should be defined at the point of use.

## 12. Dark Mode & Theming

Keep a light default suitable for documentation. A dark code or graph mode should define its own syntax, cache, focus, and selected-target tokens; do not make green the only success signal. Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert code or imagery blindly.

## 13. Lineage & Influences

Bazel sits between build automation, monorepo infrastructure, compiler tooling, and documentation systems. Its design should help a reader move from one target to a whole dependency graph without losing local context. The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

The audit evidence records this source observation: The Bazel public site supplied the white canvas, green build identity, speed/correctness/scale hierarchy, and multi-language documentation structure.

## 14. Do's and Don'ts

**Do**
- Show the first build command.
- Make language and platform context explicit.
- Use green for build actions and selected targets.
- Explain cache behavior in text.
- Keep Starlark and query examples copyable.
- Make the graph relationship inspectable.
- Expose guide and reference routes.
- Preserve target names on mobile.

**Don't**
- Do not make speed the only message.
- Do not use graph animation without a summary.
- Do not hide language rules behind icon-only tabs.
- Do not clip target or query names.
- Do not nest the build graph in decorative cards.
- Do not rely on green alone for success.
- Do not bury release notes.
- Do not make the first build path ambiguous.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the page ground token.
- Foreground: use the primary reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Build Prompt

Create a scalable build-infrastructure surface with a white canvas, deep green build actions, clear speed/correctness/scale hierarchy, language-aware examples, cache explanations, and inspectable dependency context.

### Iteration Order

First establish the first-build path, then add target and cache explanation, then expand language rules and reference navigation. Test selected states, command copying, and graph summaries at mobile width.
