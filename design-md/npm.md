---
name: "npm"
tagline: "The public JavaScript registry where packages become building blocks."
updated_at: 2026-08-05T04:56:06.847Z
published_at: 2026-08-05T04:56:06.847Z
author: webdesignhot
source_url: "https://www.npmjs.com/"
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, package-manager, javascript, registry, ecosystem]
preview_swatch: ["#ffffff", "#cb3837", "#1f2933"]
related: [vite, github, deno]
description: "npm combines a public package registry with developer tooling, so its design must balance discovery, trust, version detail, and fast installation. Use a clean white canvas, npm red as the action signal, dark package metadata, and a dense but legible route from search result to install command."

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
  text: "#1f2933"
  brand: "#cb3837"
  on-brand: "#ffffff"
  border: "#dfe3e8"
  text-soft: "#68737d"
  border-strong: "#b6c0c8"
  accent-navy: "#2f3c4d"
  accent-warm: "#f2b84b"

typography:
  display:
    family: "Poppins, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current npm public site during the 2026-08-05 catalog audit."
  influences:
    - name: "npm public site"
      role: "The npm public registry supplied the white canvas, red identity, package discovery model, version/dependency density, and command-first developer workflow."
      url: "https://www.npmjs.com/"
---

## 1. Visual Theme & Atmosphere

npm should feel like a trustworthy package counter: white registry space, red install signal, clear version and dependency metadata, and an obvious path from package discovery to a command that works. Dense information is welcome when it is ordered. Keep the actual project, package, runtime, or infrastructure subject visible in the first useful viewport. The visual system should help an agent or human move from recognition to a concrete developer task.

**Key Characteristics**
- A visible first action
- Stable technical hierarchy
- Readable version and status metadata
- Inspectable code or configuration
- Responsive documentation structure
- Text equivalents for visual state

## 2. Color Palette & Roles

Use white for the registry canvas, pale gray for package panels, npm red for install and publish actions, slate for metadata, and navy or amber for secondary package states with labels. Use role names consistently: background, surface, text, brand, on-brand, border, text-soft, border-strong, and accent tokens. Preview swatches show the page ground, primary action, and primary reading color. Semantic states need both color and text.

## 3. Typography Rules

Use Poppins for package and section headings, Source Sans 3 for readable registry copy, and monospace for package names, semver ranges, scripts, and install commands. Keep metadata compact but never smaller than readable body-sm. Suggested hierarchy: display-hero for the first promise, display-lg for a major concept, h1 for the current task, h2 for grouped content, h3 for examples or cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Use search, package result rows, install command blocks, version selectors, dependency tables, readme content, download history, and publish controls. Package state, provenance, and version must be explicit text. Treat every control as a stateful system: default, hover, pressed, disabled, and visible keyboard focus. Use familiar icons inside tool buttons, give unfamiliar icons a tooltip, and keep the action consequence beside the control.

## 5. Layout Principles

Use a 1240px registry shell with search and package identity first, a stable metadata rail, and a 780px readme column. Keep the install command near the package name. On mobile, stack metadata and preserve the command in a bounded code surface. Prefer full-width bands with constrained inner content over decorative nested cards. Stable grid tracks, fixed control dimensions, and bounded code regions prevent dynamic labels from shifting the page.

## 6. Shapes & Radius Scale

Use 4px inputs, 6px buttons, and 8px package surfaces. Registry controls should feel precise and dense; reserve pills for version tags or package status. A radius should communicate a control or grouped item, not decorate every section. Keep code, tables, and reference content aligned to a predictable baseline.

## 7. Depth & Elevation

Use gray surfaces and borders to separate package metadata from readme content. The install command can have one raised surface; avoid nesting the entire package page inside cards. Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 120ms for copy and version feedback, 180ms for search results, and 240ms for dependency disclosure. Reduced motion keeps result ordering and package state static. Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention, and make the final state available without animation.

## 9. Accessibility & A11y

Expose package name, version, license, and status as text. Verify white/red action contrast, label copy controls, give dependency tables headers, and make search result changes announced to assistive technology. Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for diagrams, charts, code state, and status. Do not use color as the only error, progress, rating, health, or selection signal.

## 10. Responsive Behavior

At 640px, keep package identity, version, and install command above the readme. At 1024px, collapse secondary metadata. Keep scripts and package names horizontally scrollable only inside their own code regions. Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the subject, first useful action, version context, and state explanation at every breakpoint.

## 11. Content & Voice

Use registry verbs: “Install package”, “Select version”, “View dependencies”, “Read the README”, and “Publish a release”. State whether an action affects local install, package metadata, or the public registry. Microcopy should state the object, action, and consequence. Empty states should offer a valid next step, errors should be recoverable, and technical terms should be defined at the point of use.

## 12. Dark Mode & Theming

The default registry theme is light and high-density. A dark developer mode needs explicit code, metadata, focus, and danger tokens; npm red remains the primary action but never the only trust or error signal. Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert code or imagery blindly.

## 13. Lineage & Influences

npm sits in the lineage of package registries, Unix installation tools, JavaScript module systems, and collaborative open-source publishing. Its design should make a package feel inspectable before it is installed. The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

The audit evidence records this source observation: The npm public registry supplied the white canvas, red identity, package discovery model, version/dependency density, and command-first developer workflow.

## 14. Do's and Don'ts

**Do**
- Put package identity and version first.
- Keep install commands copyable.
- Show dependencies and provenance.
- Use npm red for install and publish actions.
- Make search results comparable.
- Expose license and release context.
- Keep readme and metadata connected.
- Preserve package names on mobile.

**Don't**
- Do not hide semver context.
- Do not make install a color-only action.
- Do not bury package provenance.
- Do not clip scripts or package names.
- Do not put the readme inside nested decorative cards.
- Do not replace dependency tables with vague counts.
- Do not use red for every error or status.
- Do not make publishing state ambiguous.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the page ground token.
- Foreground: use the primary reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Build Prompt

Create a trustworthy JavaScript package registry surface with a white canvas, npm red install actions, dense but readable version/dependency metadata, copyable commands, search, readme content, and explicit provenance.

### Iteration Order

First establish search, package identity, version, and install, then add dependency and provenance context, then tune metadata density and mobile code regions. Verify copy, table headers, and result announcements.
