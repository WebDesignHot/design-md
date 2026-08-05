---
name: "SQLite"
tagline: "Small, fast, reliable database design for embedded products."
updated_at: 2026-08-05T04:55:43.135Z
published_at: 2026-08-05T04:55:43.135Z
author: webdesignhot
source_url: "https://www.sqlite.org/"
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, database, sql, embedded, reliable]
preview_swatch: ["#ffffff", "#0f6b8a", "#1f2933"]
related: [postgresql, mongodb, turso]
description: "SQLite presents open-source infrastructure with a deliberately utilitarian system: a white documentation canvas, compact blue links, dense reference navigation, and a small, fast, reliable promise. The extraction should make technical trust and scanability useful without turning reference material into a marketing landing page."

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
  surface: "#f3f6f8"
  text: "#1f2933"
  brand: "#0f6b8a"
  on-brand: "#ffffff"
  border: "#d6e0e5"
  text-soft: "#60717d"
  border-strong: "#a9bac4"
  accent-warm: "#d98c00"

typography:
  display:
    family: "Verdana, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "Verdana, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current SQLite public site during the 2026-08-05 catalog audit."
  influences:
    - name: "SQLite public site"
      role: "The SQLite public site supplied the white documentation ground, blue link hierarchy, compact navigation, and small/fast/reliable positioning."
      url: "https://www.sqlite.org/"
---

## 1. Visual Theme & Atmosphere

SQLite feels like a durable technical reference rather than a campaign page. Keep the documentation subject visible immediately, use white space as a reliability signal, and let a restrained blue-teal link color organize downloads, guides, and interfaces. Keep the actual project, package, runtime, or infrastructure subject visible in the first useful viewport. The visual system should help an agent or human move from recognition to a concrete developer task.

**Key Characteristics**
- A visible first action
- Stable technical hierarchy
- Readable version and status metadata
- Inspectable code or configuration
- Responsive documentation structure
- Text equivalents for visual state

## 2. Color Palette & Roles

Use white for the documentation ground, cool gray-blue for grouped reference surfaces, deep slate for reading, and blue-teal for links and primary actions. Amber is reserved for release or warning context and must always have a text label. Use role names consistently: background, surface, text, brand, on-brand, border, text-soft, border-strong, and accent tokens. Preview swatches show the page ground, primary action, and primary reading color. Semantic states need both color and text.

## 3. Typography Rules

Verdana is practical and familiar for documentation. Use strong weights for the small/fast/reliable promise and database names, regular text for reference prose, and a monospace face for SQL, CLI commands, and version metadata. Suggested hierarchy: display-hero for the first promise, display-lg for a major concept, h1 for the current task, h2 for grouped content, h3 for examples or cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Build a compact documentation header, searchable navigation, version selector, code block, download action, and clearly labeled reference cards. Make code copy and external links explicit; do not hide an API or SQL action inside an unlabeled icon. Treat every control as a stateful system: default, hover, pressed, disabled, and visible keyboard focus. Use familiar icons inside tool buttons, give unfamiliar icons a tooltip, and keep the action consequence beside the control.

## 5. Layout Principles

Use a 1180px page width with a 760px reading column and a stable reference rail. Keep downloads, version context, and the current documentation section visible while the main content scrolls. On small screens, turn the rail into a labeled disclosure. Prefer full-width bands with constrained inner content over decorative nested cards. Stable grid tracks, fixed control dimensions, and bounded code regions prevent dynamic labels from shifting the page.

## 6. Shapes & Radius Scale

Use 2px to 6px radii for controls and code surfaces. Keep the overall language square and technical; reserve a pill for version or status labels only. A radius should communicate a control or grouped item, not decorate every section. Keep code, tables, and reference content aligned to a predictable baseline.

## 7. Depth & Elevation

Prefer borders and spacing over shadows. Code blocks can sit one level above the page with a cool surface; elevated menus need a clear border, scrim, and escape path. Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 120ms for navigation and copy feedback, 180ms for menus, and no looping animation in reference content. Reduced motion removes scrolling interpolation and keeps the selected section stable. Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention, and make the final state available without animation.

## 9. Accessibility & A11y

Keep link and body contrast high on white, expose the current version and navigation section in text, label copy buttons, and provide an accessible name and summary for code examples. Do not use syntax color as the only meaning. Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for diagrams, charts, code state, and status. Do not use color as the only error, progress, rating, health, or selection signal.

## 10. Responsive Behavior

At 640px, collapse the reference rail and keep search, version, and download controls reachable. At 1024px, retain a compact table of contents. Keep code blocks horizontally scrollable inside a bounded region rather than widening the page. Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the subject, first useful action, version context, and state explanation at every breakpoint.

## 11. Content & Voice

Write short, exact technical copy: “Read the guide”, “Download SQLite”, “Open SQL syntax”, and “View release history”. State version, platform, and consequence wherever a command or download is shown. Microcopy should state the object, action, and consequence. Empty states should offer a valid next step, errors should be recoverable, and technical terms should be defined at the point of use.

## 12. Dark Mode & Theming

The default is a light documentation theme. A dark reader variant needs separate code, syntax, border, and focus tokens; do not simply invert the page or lose the distinction between code and prose. Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert code or imagery blindly.

## 13. Lineage & Influences

SQLite sits in the lineage of Unix documentation, SQL reference manuals, and embedded systems tooling. Its design strength is not decoration; it is a visible contract between a small runtime and a large body of precise reference material. The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

The audit evidence records this source observation: The SQLite public site supplied the white documentation ground, blue link hierarchy, compact navigation, and small/fast/reliable positioning.

## 14. Do's and Don'ts

**Do**
- Make the current version visible.
- Keep SQL and CLI examples copyable.
- Use blue-teal for links and primary actions.
- Expose download platform and file type.
- Keep reference navigation predictable.
- Provide text labels for code state.
- Preserve the reading column on mobile.
- Treat reliability as a content promise.

**Don't**
- Do not bury version context.
- Do not replace reference navigation with a carousel.
- Do not use syntax color as the only signal.
- Do not make code copy icon-only without a name.
- Do not put documentation inside decorative nested cards.
- Do not animate code continuously.
- Do not clip long SQL lines.
- Do not turn a database reference into generic SaaS copy.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the page ground token.
- Foreground: use the primary reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Build Prompt

Create a dependable database documentation surface with a white ground, blue-teal links, cool reference panels, dense but readable navigation, copyable SQL examples, visible version context, and no decorative marketing noise.

### Iteration Order

First establish the documentation hierarchy, then add version and code states, then tune link color and mobile navigation. Verify every action with keyboard focus and a text-equivalent state.
