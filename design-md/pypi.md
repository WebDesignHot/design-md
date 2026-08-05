---
name: "PyPI"
tagline: "Python package discovery with a clear blue index and release trail."
updated_at: 2026-08-05T04:56:08.562Z
published_at: 2026-08-05T04:56:08.562Z
author: webdesignhot
source_url: "https://pypi.org/"
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, package-index, python, registry, ecosystem]
preview_swatch: ["#fdfdfd", "#006dad", "#464646"]
related: [python, npm, readme]
description: "PyPI makes an enormous Python package index navigable through a clean near-white canvas, PyPI blue actions, compact package metadata, and a direct route from search to release details. The extraction should communicate community scale while keeping version, files, license, and project links inspectable."

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
  bg: "#fdfdfd"
  surface: "#e8f1f7"
  text: "#464646"
  brand: "#006dad"
  on-brand: "#ffffff"
  border: "#cfdbe3"
  text-soft: "#687985"
  border-strong: "#9fb8c8"
  accent-warm: "#f4c242"
  accent-navy: "#2c3e50"

typography:
  display:
    family: "Source Sans 3, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "Source Sans 3, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current PyPI public site during the 2026-08-05 catalog audit."
  influences:
    - name: "PyPI public site"
      role: "The PyPI public site supplied the near-white canvas, blue identity, package/release index structure, and pip-first discovery workflow."
      url: "https://pypi.org/"
---

## 1. Visual Theme & Atmosphere

PyPI should feel like a calm public index: near-white reading space, blue route markers, package names and release dates in clear hierarchy, and a practical handoff to pip. Keep community breadth visible without overwhelming the package detail task. Keep the actual project, package, runtime, or infrastructure subject visible in the first useful viewport. The visual system should help an agent or human move from recognition to a concrete developer task.

**Key Characteristics**
- A visible first action
- Stable technical hierarchy
- Readable version and status metadata
- Inspectable code or configuration
- Responsive documentation structure
- Text equivalents for visual state

## 2. Color Palette & Roles

Use near-white for the index ground, pale blue for metadata groups, PyPI blue for links and package actions, charcoal for reading, and Python yellow as a small release or ecosystem accent with text. Use role names consistently: background, surface, text, brand, on-brand, border, text-soft, border-strong, and accent tokens. Preview swatches show the page ground, primary action, and primary reading color. Semantic states need both color and text.

## 3. Typography Rules

Source Sans 3 keeps package names, release metadata, and long descriptions readable. Use heavier headings for package identity, regular text for descriptions, and monospace for pip commands, version ranges, and file names. Suggested hierarchy: display-hero for the first promise, display-lg for a major concept, h1 for the current task, h2 for grouped content, h3 for examples or cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Use package search, release selectors, file tables, project links, pip command blocks, metadata badges, and report controls. File type, Python version, platform, and release status need visible labels. Treat every control as a stateful system: default, hover, pressed, disabled, and visible keyboard focus. Use familiar icons inside tool buttons, give unfamiliar icons a tooltip, and keep the action consequence beside the control.

## 5. Layout Principles

Use a 1180px index shell with search and package identity at the top, a 760px description column, and a stable release/files rail. On mobile, stack release metadata and preserve file names and commands in bounded regions. Prefer full-width bands with constrained inner content over decorative nested cards. Stable grid tracks, fixed control dimensions, and bounded code regions prevent dynamic labels from shifting the page.

## 6. Shapes & Radius Scale

Use 3px inputs, 6px action buttons, and 8px metadata panels. Keep the index dense and workmanlike; pills are for version or compatibility labels only. A radius should communicate a control or grouped item, not decorate every section. Keep code, tables, and reference content aligned to a predictable baseline.

## 7. Depth & Elevation

Use pale blue surfaces and thin borders for package groups. Keep the file table flat and inspectable; a single raised command panel is enough to show the pip handoff. Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 120ms for copy and release selection, 180ms for search, and 220ms for expanding file metadata. Reduced motion leaves selected release and compatibility state immediately visible. Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention, and make the final state available without animation.

## 9. Accessibility & A11y

Give file tables real headers, expose Python version and platform compatibility in text, verify blue action contrast, label pip copy controls, and announce search and release changes. Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for diagrams, charts, code state, and status. Do not use color as the only error, progress, rating, health, or selection signal.

## 10. Responsive Behavior

At 640px, keep package name, latest release, and pip command visible before the long description. At 1024px, collapse secondary project links. Let long file names scroll inside table cells or wrap without causing page overflow. Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the subject, first useful action, version context, and state explanation at every breakpoint.

## 11. Content & Voice

Use index verbs: “Install with pip”, “Choose a release”, “Download a file”, “Read project description”, and “Report a problem”. State compatibility, version, and file consequence explicitly. Microcopy should state the object, action, and consequence. Empty states should offer a valid next step, errors should be recoverable, and technical terms should be defined at the point of use.

## 12. Dark Mode & Theming

The default is a near-white index theme. A dark package-reader mode needs separate file table, code, focus, and warning tokens while preserving blue links and readable compatibility labels. Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert code or imagery blindly.

## 13. Lineage & Influences

PyPI sits between package indexes, release archives, Python tooling, and community-maintained documentation. Its design should let a package consumer verify the artifact before installing it. The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

The audit evidence records this source observation: The PyPI public site supplied the near-white canvas, blue identity, package/release index structure, and pip-first discovery workflow.

## 14. Do's and Don'ts

**Do**
- Show package and release identity.
- Keep pip commands copyable.
- Make file compatibility explicit.
- Use blue for package routes.
- Give file tables headers.
- Expose project links and license context.
- Keep release selection stable.
- Preserve long descriptions on mobile.

**Don't**
- Do not hide Python compatibility.
- Do not make file type color-only.
- Do not clip artifact names.
- Do not replace release data with a vague freshness badge.
- Do not put the package index inside a decorative card.
- Do not bury pip installation.
- Do not use blue for every semantic state.
- Do not make reporting paths hard to find.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the page ground token.
- Foreground: use the primary reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Build Prompt

Create a calm Python package index with a near-white canvas, PyPI blue routes, clear package and release metadata, compatibility-aware file tables, copyable pip commands, and inspectable project context.

### Iteration Order

First make search, package identity, release, and pip handoff obvious, then build compatibility and file metadata, then tune dense tables for mobile. Verify headers, labels, copy feedback, and long names.
