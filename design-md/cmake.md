---
name: "CMake"
tagline: "Cross-platform build infrastructure with green tooling and blue trust."
updated_at: 2026-08-05T04:55:49.082Z
published_at: 2026-08-05T04:55:49.082Z
author: webdesignhot
source_url: "https://cmake.org/"
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, build-system, cpp, cross-platform, testing]
preview_swatch: ["#ffffff", "#3eae2b", "#003765"]
related: [bazel, rust-lang, circleci]
description: "CMake turns build configuration into a public developer system: a white canvas, a strong green action color, blue technical surfaces, and a practical path through getting started, documentation, testing, and packaging. The extraction should communicate engineering leverage and platform breadth without becoming noisy."

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
  surface: "#f1f6fa"
  text: "#535250"
  brand: "#3eae2b"
  on-brand: "#ffffff"
  border: "#d7dde2"
  text-soft: "#747b80"
  border-strong: "#aebcc6"
  accent-navy: "#003765"
  accent-warm: "#f28c28"

typography:
  display:
    family: "Nunito Sans, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current CMake public site during the 2026-08-05 catalog audit."
  influences:
    - name: "CMake public site"
      role: "The CMake public site supplied the white ground, green action color, navy technical surface, practical feature grid, and cross-platform build-system framing."
      url: "https://cmake.org/"
---

## 1. Visual Theme & Atmosphere

CMake should feel like a reliable engineering workbench: open documentation space, strong green actions, blue infrastructure bands, and a visible route from first configure command to testing and packaging. Keep the platform promise concrete. Keep the actual project, package, runtime, or infrastructure subject visible in the first useful viewport. The visual system should help an agent or human move from recognition to a concrete developer task.

**Key Characteristics**
- A visible first action
- Stable technical hierarchy
- Readable version and status metadata
- Inspectable code or configuration
- Responsive documentation structure
- Text equivalents for visual state

## 2. Color Palette & Roles

Use white as the build-system canvas, pale blue-gray for grouped documentation, CMake green for install and getting-started actions, navy for technical emphasis, and orange only for warnings or secondary attention. Use role names consistently: background, surface, text, brand, on-brand, border, text-soft, border-strong, and accent tokens. Preview swatches show the page ground, primary action, and primary reading color. Semantic states need both color and text.

## 3. Typography Rules

Use Nunito Sans for approachable headings and Roboto for practical reading. Display type can carry the build-system promise; body copy should remain compact, measurable, and easy to scan next to commands and version numbers. Suggested hierarchy: display-hero for the first promise, display-lg for a major concept, h1 for the current task, h2 for grouped content, h3 for examples or cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Prioritize install cards, platform tabs, command snippets, documentation search, version selectors, feature lists, and support links. Every platform tab needs a selected text state and every code block needs a labeled copy action. Treat every control as a stateful system: default, hover, pressed, disabled, and visible keyboard focus. Use familiar icons inside tool buttons, give unfamiliar icons a tooltip, and keep the action consequence beside the control.

## 5. Layout Principles

Use a 1200px shell with a broad hero-to-docs transition and an 800px prose column. Keep platform choices in a stable row on desktop and a labeled select or disclosure on mobile. Group features in a comparison grid, not floating decorative cards. Prefer full-width bands with constrained inner content over decorative nested cards. Stable grid tracks, fixed control dimensions, and bounded code regions prevent dynamic labels from shifting the page.

## 6. Shapes & Radius Scale

Use 4px controls, 8px documentation panels, and restrained pills for platform or version tags. Keep buttons sturdy and rectangular so the build tool feels operational. A radius should communicate a control or grouped item, not decorate every section. Keep code, tables, and reference content aligned to a predictable baseline.

## 7. Depth & Elevation

Use the navy surface as a purposeful technical band. Green actions can have a small elevation on hover, but borders and spacing should carry most of the hierarchy. Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for tab and copy feedback, 220ms for documentation navigation, and no motion on code content. Respect reduced motion by keeping platform changes immediate and fully readable. Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention, and make the final state available without animation.

## 9. Accessibility & A11y

Pair platform colors with names, keep green action text high contrast, expose the current CMake version, and make code examples keyboard-scrollable. Announce documentation search results and preserve heading order. Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for diagrams, charts, code state, and status. Do not use color as the only error, progress, rating, health, or selection signal.

## 10. Responsive Behavior

At 640px, stack platform install choices and keep the primary install action above the fold. At 1024px, collapse secondary support links. Preserve command line length in a scroll region and never create page-level overflow. Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the subject, first useful action, version context, and state explanation at every breakpoint.

## 11. Content & Voice

Use direct engineering verbs: “Get started”, “Configure a project”, “Read the guide”, “Run tests”, and “Package the build”. Avoid vague innovation language when the user needs a command or next step. Microcopy should state the object, action, and consequence. Empty states should offer a valid next step, errors should be recoverable, and technical terms should be defined at the point of use.

## 12. Dark Mode & Theming

The default is a light documentation theme with a navy technical accent. If a dark code theme is added, define code surface, syntax, focus, and warning tokens independently instead of inverting green onto black. Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert code or imagery blindly.

## 13. Lineage & Influences

CMake belongs to the lineage of cross-platform build systems, compiler toolchains, and Unix command documentation. Its public design should make a complicated multi-platform build graph feel navigable and testable. The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

The audit evidence records this source observation: The CMake public site supplied the white ground, green action color, navy technical surface, practical feature grid, and cross-platform build-system framing.

## 14. Do's and Don'ts

**Do**
- Show platform and version context.
- Make configure and install actions concrete.
- Use green for primary tooling actions.
- Keep command examples copyable.
- Expose testing and packaging alongside builds.
- Use navy for technical emphasis.
- Make platform selection keyboard-operable.
- Keep support paths easy to find.

**Don't**
- Do not hide the operating system choice.
- Do not make a code block a decorative image.
- Do not use green without a text action.
- Do not bury versioned documentation.
- Do not stack cards inside cards.
- Do not animate build output continuously.
- Do not clip command examples.
- Do not reduce a build system to a generic download CTA.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the page ground token.
- Foreground: use the primary reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Build Prompt

Build a cross-platform build-system reference with a white canvas, CMake green actions, navy technical surfaces, platform-aware installation paths, copyable commands, documentation search, and testing/packaging context.

### Iteration Order

First make the install and version route obvious, then compose the documentation and feature grid, then tune platform states. Validate commands, keyboard focus, and mobile code overflow.
