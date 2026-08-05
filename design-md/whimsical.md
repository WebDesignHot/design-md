---
name: Whimsical
tagline: "A playful visual workspace for diagrams, flows, and shared thinking."
updated_at: 2026-08-05T01:55:49.220Z
published_at: 2026-08-05T01:55:49.220Z
author: webdesignhot
source_url: https://whimsical.com/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [design-tools, saas]
tags: [design-tools, whiteboard, diagrams, wireframes, ai]
preview_swatch: ["#030101", "#7c5cff", "#ffffff"]
related: [miro, tldraw, excalidraw]
description: "Whimsical turns an infinite canvas into a product-building workspace: diagrams, flowcharts, mind maps, docs, and wireframes share a light interaction model. The public site is dark-first in the capture, but the useful design pattern is the contrast between a calm workspace shell and expressive, structured visual thinking."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-soft
  border: border

colors:
  bg: "#030101"
  surface: "#16131f"
  text: "#ffffff"
  brand: "#7c5cff"
  on-brand: "#ffffff"
  border: "#3b3548"
  text-soft: "#b8b1c5"
  border-soft: "#272230"
  accent-yellow: "#f4cf4c"
  accent-mint: "#8ee6c3"

typography:
  display:
    family: "Manrope, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "Manrope, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current Whimsical public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Whimsical public site"
      role: "Source for Manrope typography, visual-workspace positioning, dark public shell, and diagram/wireframe product grouping."
      url: https://whimsical.com/
---

## 1. Visual Theme & Atmosphere

Whimsical turns an infinite canvas into a product-building workspace: diagrams, flowcharts, mind maps, docs, and wireframes share a light interaction model. The public site is dark-first in the capture, but the useful design pattern is the contrast between a calm workspace shell and expressive, structured visual thinking. The public composition should be recognizable in a first viewport, then become predictable when a user starts a task. Keep the primary product, service, project, or artifact visible instead of replacing evidence with abstract decoration.

**Key Characteristics**
- A clear primary action
- A stable content hierarchy
- Readable metadata
- Intentional surface contrast
- Responsive media treatment
- Text equivalents for visual state

## 2. Color Palette & Roles

Use near-black `#030101` for the public canvas and `#16131f` for workspace surfaces. Normalize the transparent sampling to a clear purple `#7c5cff` primary action so create, share, and AI paths remain visible. Yellow and mint can classify diagram or collaboration moments, but each state needs text. Keep white copy and soft borders readable over the dark shell.

Use color roles consistently: background for the page ground, surface for grouped content, text for reading, brand for the primary action, border for structure, and semantic colors for states with text labels. Preview swatches show the canvas, brand action, and primary reading color.

## 3. Typography Rules

Manrope is the sampled family for display and body. Use bold type for the visual workspace promise and board/document names, regular text for tool descriptions and comments, and compact labels for board type, sharing, and status. The type should feel quick and friendly while preserving diagram and wireframe labels.

Suggested hierarchy: display-hero for the first promise, display-lg for a major section, h1 for the page task, h2 for grouped content, h3 for cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Use purple filled controls for create, share, and AI actions; outline controls for templates and export. Board cards need thumbnail, board type, owner, last updated, and open action. Canvas toolbars need familiar icons, tooltips, and selected outlines. Comments and collaboration states expose author/time/status. Wireframe and diagram templates should be grouped under labeled choices rather than anonymous tiles.

Treat controls as a system: every filled action needs hover, pressed, disabled, and focus states; every card needs a stable content order; every input needs a label and error state. Use familiar icons inside tool buttons and give unfamiliar icons a tooltip.

## 5. Layout Principles

Use a 1280px public canvas with a broad visual-workspace hero and a 12-column template grid. The actual board uses stable tool rails and a large inspectable canvas, not a decorative browser frame. Keep 16/24px card gaps and 64/96px bands. On mobile, turn tool rails into labeled control groups while preserving canvas zoom and pan affordances.

Prefer full-width bands with constrained inner content over decorative nested cards. Stable aspect ratios, explicit grid tracks, and fixed control dimensions keep media and labels from shifting as content loads.

## 6. Shapes & Radius Scale

Use 4px for tool labels, 8px for controls, 12px for board cards, and 16px for featured workspace panels. Pills are reserved for board type or collaboration status. Keep canvas elements mostly rectangular and let the diagram content supply variety.

Keep the radius scale intentional: micro controls, standard controls, comfortable cards, relaxed feature panels, and pills only for true categorical selectors. A rounded rectangle should communicate an action or grouped item, not decorate every section.

## 7. Depth & Elevation

Use dark surfaces and soft borders for the shell. Selected boards/tools use a purple outline, while menus and comments can use moderate elevation. Avoid nested decorative cards around the infinite canvas; the canvas and selection state should create the visual hierarchy.

Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a scrim, a clear title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for tool selection and cursor feedback, 240ms for menus/comments, and 320ms for template or board opening. Do not auto-pan a canvas or animate diagram content without an explicit action. Reduced motion removes zoom interpolation and preserves the final board state.

Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention. Make the final state available without animation and honor reduced-motion preferences.

## 9. Accessibility & A11y

Use white text on dark surfaces and verify white on purple actions. Every toolbar icon needs an accessible name and tooltip, and selected tools need outline plus text state. Diagram and wireframe content require a board title and meaningful alternative or summary. Collaboration updates announce author, time, and state without relying on color.

Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for status. Test focus against every surface, including imagery, selected states, dialogs, and disabled-looking controls. Do not use color as the only error, progress, rating, or selection signal.

## 10. Responsive Behavior

At 640px, stack the workspace promise and templates; keep the create action visible. At 1024px, collapse secondary rails while preserving canvas controls. At 1280px, use the full template and workspace composition. Keep 44px controls, stable board thumbnails, and a deliberate zoom/pan interaction.

Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the first useful action, the content subject, and the state explanation at every breakpoint. If a row cannot fit, group it under a labeled disclosure instead of clipping text.

## 11. Content & Voice

Use quick, inviting, concrete copy: “Create a board”, “Map the flow”, “Build a wireframe”, and “Share workspace”. Name what the board contains and who can access it. Empty states should offer a board type or template, not just a blank canvas.

Microcopy should state the object, action, and consequence. Keep empty states useful, error messages recoverable, and confirmations specific. Avoid claims that cannot be understood or verified from the surrounding interface.

## 12. Dark Mode & Theming

The entry is dark-first with purple action and optional mint/yellow accents. A light workspace theme needs explicit canvas, grid, selection, comment, and focus tokens. Do not use colorful diagram content as the only state signal.

Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert imagery or evidence blindly.

## 13. Lineage & Influences

Whimsical sits between whiteboard software, diagramming tools, and product documentation. The infinite canvas provides openness, while templates and tool grouping keep visual thinking structured. It rejects both a blank artboard with no guidance and a rigid project-management table.

The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

## 14. Do's and Don'ts

**Do**
- Make board type explicit.
- Keep canvas controls labeled.
- Use purple for create/share.
- Preserve zoom and pan affordances.
- Give diagrams a summary.
- Show collaboration state in text.
- Keep template choices comparable.
- Avoid decorative canvas framing.

**Don't**
- Do not auto-pan the canvas.
- Do not make icons unlabeled.
- Do not hide board ownership.
- Do not use color alone for comments.
- Do not put the canvas inside nested cards.
- Do not make an empty canvas the only state.
- Do not animate diagram content continuously.
- Do not shrink touch controls.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the sampled canvas token.
- Foreground: use the sampled reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Example Component Prompts

- Create a Whimsical-like visual workspace hero with dark shell, purple create action, diagram/flowchart/wireframe paths, and a template grid.
- Design a board card with thumbnail, type, owner, last updated, and open action.
- Build a canvas toolbar with named icons, selected outlines, zoom controls, and an accessible board title.
- Create a collaboration comment item with author, timestamp, status, and resolve action.

### Iteration Guide

1. Check board type before canvas entry.
2. Test toolbar with keyboard.
3. Verify purple contrast.
4. Keep canvas zoom usable on mobile.
5. Summarize visual content for assistive tech.
6. Remove any decorative frame around the board.
