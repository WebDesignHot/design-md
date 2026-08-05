---
name: Sketch
tagline: "A focused product-design workspace built from clarity and craft."
updated_at: 2026-08-05T01:25:54.137Z
published_at: 2026-08-05T01:25:54.137Z
author: webdesignhot
source_url: https://www.sketch.com/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [design-tools, saas]
tags: [design-tools, interface, prototyping, systems, collaboration]
preview_swatch: ["#f5f5f5", "#151515", "#212123"]
related: [figma, affinity, protopie]
description: "Sketch presents product design as a calm, professional system: a soft gray ground, dark editorial display type, and a measured interface hierarchy around documents, prototypes, and handoff. The tone is crafted rather than loud, with a clear distinction between marketing proof and the precision required inside the design workspace."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-soft
  border: border

colors:
  bg: '#f5f5f5'
  surface: 'rgba(255, 255, 255, 0.85)'
  text: '#212123'
  brand: '#151515'
  on-brand: '#ffffff'
  border: '#d9d9dd'
  text-soft: '#6c6c72'
  border-soft: '#e9e9ec'

typography:
  display:
    family: 'Reckless, system-ui, -apple-system, sans-serif'
    weights: [500, 600, 700]
  body:
    family: 'InterVariable, system-ui, -apple-system, sans-serif'
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
  summary: "Recorded from the current sketch public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Sketch public website"
      role: "Source for Reckless display type, InterVariable body type, soft gray ground, dark action system, and product-design positioning."
      url: https://www.sketch.com/
---

## 1. Visual Theme & Atmosphere

Sketch presents product design as a calm, professional system: a soft gray ground, dark editorial display type, and a measured interface hierarchy around documents, prototypes, and handoff. The tone is crafted rather than loud, with a clear distinction between marketing proof and the precision required inside the design workspace. The public composition should feel authored at first glance, then become predictable when a user starts a task. Keep the product or service evidence visible instead of replacing it with abstract decoration.

**Key Characteristics**
- A clear primary action
- A stable content hierarchy
- Readable metadata
- Intentional surface contrast
- Responsive media treatment
- Text equivalents for visual state

## 2. Color Palette & Roles

Use `#f5f5f5` as the soft outer canvas and `#212123` for readable body text. `#151515` is the primary action and display contrast; use it for download, create, and navigation emphasis. White translucent surfaces can support cards and menus, with `#d9d9dd` as the practical border. Keep any product accent subordinate to the black/gray system so the document, prototype, or artboard remains the visual subject.

Use color roles consistently: background for the page ground, surface for grouped content, text for reading, brand for the primary action, border for structure, and semantic colors for states with text labels. Preview swatches should show the canvas, brand action, and primary reading color.

## 3. Typography Rules

Reckless is the sampled display family and InterVariable is the sampled body family. Use Reckless sparingly for a short product statement or editorial section title; Inter carries tools, file names, dimensions, comments, and handoff details. The contrast gives the public site craft while keeping the product workflow operational. Avoid using the display face for dense UI or code-like metadata.

Suggested hierarchy: display-hero for the first promise, display-lg for a major section, h1 for the page task, h2 for grouped content, h3 for cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps or secondary context. Never use tracking as a substitute for hierarchy.

## 4. Component Stylings

Use dark filled buttons for high-intent download or team actions, with 8px corners and a quiet outlined alternative. Document cards should expose platform, file state, collaboration, and last updated information. Prototype previews need a stable frame and explicit play/open action. Inputs and inspector controls should use compact labels, clear units, and a visible focus ring. Navigation should distinguish app, docs, resources, and enterprise/team work without collapsing them into one mega-menu.

Treat controls as a system: every filled action needs a hover, pressed, disabled, and focus treatment; every card needs a stable content order; every input needs a label and error state. Use familiar icons inside tool buttons and give unfamiliar icons a tooltip.

## 5. Layout Principles

Use a 1280px marketing canvas with a 720px reading measure and a stable artboard-oriented workspace. A public hero can pair a short editorial statement with a product proof rail; the actual editor needs fixed tool and inspector widths. Use 16/24px internal spacing and 64/96px section bands. Keep prototype and document previews at stable aspect ratios so the product state is inspectable.

Prefer full-width bands with constrained inner content over decorative nested cards. Stable aspect ratios, explicit grid tracks, and fixed control dimensions keep media and labels from shifting the page as content loads.

## 6. Shapes & Radius Scale

Use 4px for tool controls, 8px for actions and inputs, 12px for document and preview cards, and 16px for featured product panels. Use a pill only for a true plan, platform, or status selector. Keep artboards and design surfaces mostly square; the soft outer page can carry the rounded treatment.

Keep the radius scale intentional: micro controls, standard controls, comfortable cards, relaxed feature panels, and pills only for true categorical selectors. A rounded rectangle should communicate an action or grouped item, not decorate every section.

## 7. Depth & Elevation

The system can use a white translucent surface over the soft gray page for navigation or previews, but keep the effect restrained. Selected artboards use an outline and focus ring before a shadow. Menus, inspectors, and dialogs may use a medium neutral shadow; avoid building the entire product inside nested glass cards.

Elevation should explain interaction or layering. If a surface can be understood through contrast, spacing, and a border, do not add a shadow. Every overlay needs a scrim, a clear title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for tool feedback, 240ms for navigation and panel transitions, and 320ms for prototype playback entry. Product demos may use a controlled reveal, but finished screenshots must remain understandable without motion. Under reduced motion, remove parallax and playback auto-start while keeping play/open controls explicit.

Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention. Make the final state available without animation and ensure reduced-motion preferences remove nonessential transitions.

## 9. Accessibility & A11y

Use dark text on the soft gray and white surfaces, and verify white-on-black action contrast. All tool icons need names and tooltips, while selected tools need outline or text state. Prototype playback must have keyboard controls and a static alternative. Preserve focus when inspectors open and announce document or prototype state changes without relying on canvas color.

Use semantic landmarks, a single logical heading order, keyboard-operable controls, and text alternatives for status. Test focus against every surface, including imagery, selected states, dialogs, and disabled-looking controls. Do not use a color difference as the only error, progress, rating, or selection signal.

## 10. Responsive Behavior

At 640px, stack public product proof and copy, and turn document previews into a single rail. At 1024px, collapse secondary workspace inspectors but keep the artboard and primary tool actions stable. At 1280px, use the full marketing grid and workspace frame. Keep 44px controls on touch surfaces and never scale an artboard solely by shrinking its labels.

Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the first useful action, the content subject, and the state explanation at every breakpoint. If a control row cannot fit, group it under a labeled disclosure instead of allowing clipped text.

## 11. Content & Voice

Write with calm craft and technical specificity. Prefer “Design”, “Prototype”, “Collaborate”, and “Hand off” with an object or outcome attached. Explain platform and file constraints plainly. Empty states should suggest a recent document, starter template, or import path instead of using vague inspiration language.

Microcopy should state the object, action, and consequence. Keep empty states useful, error messages recoverable, and confirmation messages specific. Avoid claims that cannot be understood or verified from the surrounding interface.

## 12. Dark Mode & Theming

The preview represents Sketch’s light, soft-gray public surface. A dark workspace can be a separate product theme, but it needs explicit tokens for canvas, inspector, selection, focus, and prototype playback. Do not turn the public editorial surface into a generic black UI just because the primary button is dark.

Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve the user’s position and announce the current mode; never use an automatic inversion that damages imagery or clinical/product evidence.

## 13. Lineage & Influences

Sketch draws from the craft culture of interface design and the precision of desktop creative tools. Its soft gray ground and editorial display face make the public site feel authored, while the body system and workspace logic remain disciplined. It rejects noisy tool chrome and treats prototypes, artboards, and handoff details as the evidence.

The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific color and typography decisions.

## 14. Do's and Don'ts

**Do**
- Make the product state inspectable.
- Keep dimensions and platform visible.
- Use display type only for short statements.
- Name every tool icon.
- Use focus outlines for selected artboards.
- Keep previews at stable ratios.
- Expose handoff constraints.
- Use gray space to reduce tool noise.

**Don't**
- Do not put the editor in nested glass cards.
- Do not hide file state behind hover.
- Do not use the display face for inspector labels.
- Do not make prototype playback auto-start.
- Do not rely on canvas color for selection.
- Do not shrink artboards until labels are unreadable.
- Do not use a dark theme without workspace tokens.
- Do not replace handoff details with marketing adjectives.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the sampled canvas token.
- Foreground: use the sampled reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Example Component Prompts

- Create a Sketch-like product hero with a soft gray canvas, a short editorial statement, dark action, and a visible prototype proof.
- Design a document card with file state, platform, last updated, collaboration status, and an explicit open action.
- Build an artboard workspace with stable tool and inspector rails, visible selection outlines, and keyboard-labeled controls.
- Create a prototype preview panel with a fixed aspect ratio, static fallback, and explicit play control.

### Iteration Guide

1. Check whether the product proof is still inspectable without motion.
2. Keep display type out of dense UI.
3. Test tool focus with keyboard only.
4. Verify artboard labels at the narrowest width.
5. Reduce glass treatment until borders still explain hierarchy.
6. Expose platform and handoff constraints before the CTA.
