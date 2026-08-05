---
name: Rust
tagline: "A systems language community framed by orange, documentation, and care."
updated_at: 2026-08-05T01:54:47.440Z
published_at: 2026-08-05T01:54:47.440Z
author: webdesignhot
source_url: https://www.rust-lang.org/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, language, systems, documentation, community]
preview_swatch: ["#ffffff", "#f74c00", "#222222"]
related: [deno, bun, biome]
description: "Rust brings a systems-programming identity into a welcoming open-source site. Orange, dark text, and editorial display typography make the project recognizable, while documentation, learning paths, tools, and community links provide the practical route from first program to production code."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-soft
  border: border

colors:
  bg: "#ffffff"
  surface: "#f6f3ef"
  text: "#222222"
  brand: "#f74c00"
  on-brand: "#ffffff"
  border: "#ded8d0"
  text-soft: "#6b625c"
  border-soft: "#eeeae5"
  accent-teal: "#0b7261"

typography:
  display:
    family: "Alfa Slab One, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "Fira Sans, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current Rust public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Rust public site"
      role: "Source for Alfa Slab One/Fira Sans pairing, orange project action, warm surface, and documentation/community journey."
      url: https://www.rust-lang.org/
---

## 1. Visual Theme & Atmosphere

Rust brings a systems-programming identity into a welcoming open-source site. Orange, dark text, and editorial display typography make the project recognizable, while documentation, learning paths, tools, and community links provide the practical route from first program to production code. The public composition should be recognizable in a first viewport, then become predictable when a user starts a task. Keep the primary product, service, project, or artifact visible instead of replacing evidence with abstract decoration.

**Key Characteristics**
- A clear primary action
- A stable content hierarchy
- Readable metadata
- Intentional surface contrast
- Responsive media treatment
- Text equivalents for visual state

## 2. Color Palette & Roles

Use white and warm `#f6f3ef` surfaces for the documentation and learning canvas. Normalize the sampled black CTA to Rust orange `#f74c00`, which should identify downloads, getting started, and contribution paths. `#222222` carries long technical text and `#0b7261` can support community or tool context when labeled. Do not use orange for warnings and primary actions at the same time without a semantic distinction.

Use color roles consistently: background for the page ground, surface for grouped content, text for reading, brand for the primary action, border for structure, and semantic colors for states with text labels. Preview swatches show the canvas, brand action, and primary reading color.

## 3. Typography Rules

Alfa Slab One is the sampled display family and Fira Sans is the body family. Use the display face for short project or learning statements, then switch to Fira Sans for documentation, code context, and contribution instructions. Headings should feel warm and memorable without making technical copy ornamental.

Suggested hierarchy: display-hero for the first promise, display-lg for a major section, h1 for the page task, h2 for grouped content, h3 for cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Use orange filled actions for install, learn, and contribute paths; use dark or outlined actions for docs, playground, and version selection. Code blocks need copy, language, and local overflow. Learning cards should expose stage, time, and next step. Community and governance links must be distinct from downloads. Navigation should separate language, learn, tools, and community.

Treat controls as a system: every filled action needs hover, pressed, disabled, and focus states; every card needs a stable content order; every input needs a label and error state. Use familiar icons inside tool buttons and give unfamiliar icons a tooltip.

## 5. Layout Principles

Use a 1280px project canvas with a broad introduction and a 720px technical reading measure. A 12-column home grid can pair a learning path with tools or community panels, while docs use a stable rail and content column. Keep 16/24px card spacing and 64/96px story gaps. Code and table overflow stays local.

Prefer full-width bands with constrained inner content over decorative nested cards. Stable aspect ratios, explicit grid tracks, and fixed control dimensions keep media and labels from shifting as content loads.

## 6. Shapes & Radius Scale

Use 2px for code labels, 8px for controls, 12px for learning cards, and 16px for community panels. Pills are appropriate for version and target-platform selectors. Keep documentation surfaces square enough to feel dependable.

Keep the radius scale intentional: micro controls, standard controls, comfortable cards, relaxed feature panels, and pills only for true categorical selectors. A rounded rectangle should communicate an action or grouped item, not decorate every section.

## 7. Depth & Elevation

Use warm surfaces and borders to group learning and docs. Selected paths can use an orange rule; code menus and dialogs use moderate elevation. Avoid using the orange brand token as a glowing shadow or generic decoration.

Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a scrim, a clear title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for navigation and copy feedback, 240ms for learning disclosures, and 320ms for a controlled project introduction. Do not animate code or documentation content. Reduced motion removes reveals and preserves the current learning step.

Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention. Make the final state available without animation and honor reduced-motion preferences.

## 9. Accessibility & A11y

Use dark text on white/warm surfaces and verify white on orange controls. Code blocks need labels, copy state, and keyboard scroll. Learning progress needs text and a clear current step. Community and governance pages require semantic headings and landmarks, not decorative icon-only navigation.

Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for status. Test focus against every surface, including imagery, selected states, dialogs, and disabled-looking controls. Do not use color as the only error, progress, rating, or selection signal.

## 10. Responsive Behavior

At 640px, stack learn, tools, and community paths while keeping the first install or learn action visible. At 1024px, collapse secondary panels before shrinking the docs measure. At 1280px, use the full project grid. Keep 44px controls and local code overflow.

Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the first useful action, the content subject, and the state explanation at every breakpoint. If a row cannot fit, group it under a labeled disclosure instead of clipping text.

## 11. Content & Voice

Use an encouraging, technically honest voice. Prefer “Install Rust”, “Read the book”, “Try Rust”, and “Join the community”. Explain prerequisites and version scope. Empty states should suggest a learning chapter, tool, or discussion path.

Microcopy should state the object, action, and consequence. Keep empty states useful, error messages recoverable, and confirmations specific. Avoid claims that cannot be understood or verified from the surrounding interface.

## 12. Dark Mode & Theming

The entry is light-first with orange brand action and warm documentation surfaces. A dark docs theme needs separate code, focus, link, and warning tokens. Keep orange distinct from warning and preserve the display/body contrast.

Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert imagery or evidence blindly.

## 13. Lineage & Influences

Rust combines systems-language seriousness with a welcoming open-source teaching culture. The orange identity and display face make the project human, while Fira Sans, documentation structure, and learning paths respect technical precision. It rejects both opaque compiler culture and empty beginner friendliness.

The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

## 14. Do's and Don'ts

**Do**
- Expose the learning path.
- Keep version and target context.
- Use orange for project actions.
- Make code copyable.
- Label progress in text.
- Keep community links visible.
- Preserve prose width.
- Explain prerequisites.

**Don't**
- Do not make compiler output decorative.
- Do not use orange for every status.
- Do not hide version scope.
- Do not make code horizontally overflow the page.
- Do not make learning progress color-only.
- Do not bury governance links.
- Do not use the display face for long docs.
- Do not animate technical content.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the sampled canvas token.
- Foreground: use the sampled reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Example Component Prompts

- Create a Rust-like project homepage with warm surface, orange install action, learning path, tools, and community panels.
- Design a documentation shell with Fira Sans prose, code rail, version context, and keyboard-visible navigation.
- Build a learning card with chapter, time, current step, and “Continue” action.
- Create a contribution page that separates code of conduct, governance, and repository actions.

### Iteration Guide

1. Check the first learning action on mobile.
2. Verify orange contrast.
3. Test code copy and overflow.
4. Keep version scope visible.
5. Read contribution links without icons.
6. Remove orange decoration unrelated to action.
