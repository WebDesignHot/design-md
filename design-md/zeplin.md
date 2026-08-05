---
name: Zeplin
tagline: "Design handoff made visible through blue structure and shared detail."
updated_at: 2026-08-05T01:54:51.958Z
published_at: 2026-08-05T01:54:51.958Z
author: webdesignhot
source_url: https://zeplin.io/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [design-tools, saas]
tags: [design-tools, handoff, tokens, collaboration, developer]
preview_swatch: ["#ffffff", "#419bf9", "#1f2d3d"]
related: [figma, sketch, protopie]
description: "Zeplin frames design delivery as a shared workspace between design and development. A white canvas, bright blue action color, compact metadata, and explicit handoff artifacts make the promise operational: screens, components, tokens, assets, and code context should be discoverable rather than implied."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-soft
  border: border

colors:
  bg: "#ffffff"
  surface: "#fbfbfb"
  text: "#1f2d3d"
  brand: "#419bf9"
  on-brand: "#ffffff"
  border: "#e5e7eb"
  text-soft: "#657382"
  border-soft: "#f0f2f4"
  accent-purple: "#7667f7"

typography:
  display:
    family: "SF Pro Display, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "SF Pro Display, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current Zeplin public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Zeplin public site"
      role: "Source for SF Pro Display sampling, blue action color, design-to-development positioning, and handoff artifact hierarchy."
      url: https://zeplin.io/
---

## 1. Visual Theme & Atmosphere

Zeplin frames design delivery as a shared workspace between design and development. A white canvas, bright blue action color, compact metadata, and explicit handoff artifacts make the promise operational: screens, components, tokens, assets, and code context should be discoverable rather than implied. The public composition should be recognizable in a first viewport, then become predictable when a user starts a task. Keep the primary product, service, project, or artifact visible instead of replacing evidence with abstract decoration.

**Key Characteristics**
- A clear primary action
- A stable content hierarchy
- Readable metadata
- Intentional surface contrast
- Responsive media treatment
- Text equivalents for visual state

## 2. Color Palette & Roles

Use white and `#fbfbfb` for handoff surfaces, with `#1f2d3d` for project names, implementation notes, and body copy. `#419bf9` is the primary action and selected state; use it for inspect, share, and handoff actions. A purple accent can denote review or collaboration only when labeled. Keep tokens and code surfaces neutral so the handoff data remains easy to read.

Use color roles consistently: background for the page ground, surface for grouped content, text for reading, brand for the primary action, border for structure, and semantic colors for states with text labels. Preview swatches show the canvas, brand action, and primary reading color.

## 3. Typography Rules

SF Pro Display is the sampled family for display and body. Use strong weights for project and screen names, regular text for annotations and implementation notes, and compact labels for platform, state, and export format. Handoff content should feel crisp and operational rather than like a marketing landing page.

Suggested hierarchy: display-hero for the first promise, display-lg for a major section, h1 for the page task, h2 for grouped content, h3 for cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Use blue filled buttons for share, inspect, and start actions; outline controls for export, compare, and invite. Screen cards need thumbnail, name, platform, status, and last updated. Inspector panels should expose spacing, color, typography, asset, and code details in a stable order. Comments and review states require author, timestamp, and resolution status. Navigation should separate projects, styleguides, integrations, and account.

Treat controls as a system: every filled action needs hover, pressed, disabled, and focus states; every card needs a stable content order; every input needs a label and error state. Use familiar icons inside tool buttons and give unfamiliar icons a tooltip.

## 5. Layout Principles

Use a 1280px workspace canvas with a project rail, screen/content area, and optional detail inspector. Public pages can use a 12-column feature grid, but the workspace needs stable rail widths and fixed screenshot ratios. Keep 16/24px spacing and 48/64px panel intervals. On mobile, turn the rail and inspector into labeled drawers.

Prefer full-width bands with constrained inner content over decorative nested cards. Stable aspect ratios, explicit grid tracks, and fixed control dimensions keep media and labels from shifting as content loads.

## 6. Shapes & Radius Scale

Use 4px for tags and tool labels, 8px for controls, 12px for screen cards, and 16px for featured workflow panels. Pills are for platform/status selectors. Keep inspector surfaces rectangular enough for values, snippets, and tables.

Keep the radius scale intentional: micro controls, standard controls, comfortable cards, relaxed feature panels, and pills only for true categorical selectors. A rounded rectangle should communicate an action or grouped item, not decorate every section.

## 7. Depth & Elevation

Use borders and white/near-white surfaces for most workspace hierarchy. Selected screens use a blue outline; inspector drawers and menus can use moderate elevation. Do not use a shadow to hide an implementation detail or make an unreviewed handoff feel final.

Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a scrim, a clear title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for inspector and selection feedback, 240ms for drawers and comments, and 300ms for screen preview transitions. Never animate a measurement or code value. Under reduced motion, open panels immediately and keep the selected screen and comment state stable.

Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention. Make the final state available without animation and honor reduced-motion preferences.

## 9. Accessibility & A11y

Use dark text on white surfaces and verify white on blue controls. Every screen thumbnail needs a project/screen alternative, every inspector icon needs a name, and selection needs outline plus text state. Comments announce author, date, and status. Keyboard focus must persist as inspectors and drawers open.

Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for status. Test focus against every surface, including imagery, selected states, dialogs, and disabled-looking controls. Do not use color as the only error, progress, rating, or selection signal.

## 10. Responsive Behavior

At 640px, stack project information and screen actions, with inspector content behind a labeled drawer. At 1024px, collapse the secondary inspector before hiding the project rail. At 1280px, use the full workspace. Keep 44px controls, stable screen ratios, and local code overflow.

Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the first useful action, the content subject, and the state explanation at every breakpoint. If a row cannot fit, group it under a labeled disclosure instead of clipping text.

## 11. Content & Voice

Use precise delivery language: “Inspect”, “Share”, “Export”, “Resolve”, and “Open styleguide”. Explain platform, state, and implementation consequence. Empty states should suggest an import, starter project, or integration path.

Microcopy should state the object, action, and consequence. Keep empty states useful, error messages recoverable, and confirmations specific. Avoid claims that cannot be understood or verified from the surrounding interface.

## 12. Dark Mode & Theming

The entry is light-first with blue handoff action. A dark workspace needs explicit inspector, code, focus, and selection tokens. Keep blue distinct from review warning and unresolved comment state.

Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert imagery or evidence blindly.

## 13. Lineage & Influences

Zeplin borrows from design-tool inspectors, documentation portals, and project management. Its strongest pattern is the visible bridge between a screen and the details needed to build it. It rejects handoff as a static image export and makes tokens, assets, comments, and code part of the artifact.

The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

## 14. Do's and Don'ts

**Do**
- Keep handoff data visible.
- Show project and screen state.
- Use blue for inspection actions.
- Label platform and format.
- Make comments resolvable.
- Give icons names.
- Keep screenshot ratios stable.
- Localize code overflow.

**Don't**
- Do not make a screenshot the only artifact.
- Do not hide token values.
- Do not animate measurements.
- Do not use color alone for review state.
- Do not make inspectors mouse-only.
- Do not bury platform details.
- Do not stack decorative cards in the workspace.
- Do not let code overflow the whole page.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the sampled canvas token.
- Foreground: use the sampled reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Example Component Prompts

- Create a Zeplin-like handoff workspace with project rail, screen grid, blue inspect action, and optional detail inspector.
- Design a screen card with thumbnail, platform, status, last updated, and open action.
- Build an inspector panel for spacing, colors, typography, assets, and code snippets in a stable order.
- Create a review comment item with author, timestamp, status, resolve action, and keyboard focus.

### Iteration Guide

1. Check inspect flow without a mouse.
2. Verify selected screen without color.
3. Keep implementation data near the artifact.
4. Test drawers on mobile.
5. Ensure code stays locally scrollable.
6. Remove any shadow that hides state.
