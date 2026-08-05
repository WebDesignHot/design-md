---
name: PostgreSQL
tagline: "Open database documentation with calm blue trust and community depth."
updated_at: 2026-08-05T01:54:44.676Z
published_at: 2026-08-05T01:54:44.676Z
author: webdesignhot
source_url: https://www.postgresql.org/
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, database, sql, documentation, community]
preview_swatch: ["#ffffff", "#336791", "#1f2933"]
related: [cloudflare, gitlab, grafana]
description: "PostgreSQL expresses an open-source project through documentation, releases, community, and technical trust. A white page, cool blue identity, and structured navigation should make a large body of reference material approachable without disguising its depth."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  muted: text-soft
  border: border

colors:
  bg: "#ffffff"
  surface: "#eef3f7"
  text: "#1f2933"
  brand: "#336791"
  on-brand: "#ffffff"
  border: "#d7e0e8"
  text-soft: "#607080"
  border-soft: "#edf1f4"
  accent-sky: "#6699cc"

typography:
  display:
    family: "Open Sans, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "Open Sans, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current PostgreSQL public site during the 2026-08-05 catalog audit."
  influences:
    - name: "PostgreSQL public site"
      role: "Source for Open Sans typography, blue project identity, documentation-heavy information architecture, and community/release structure."
      url: https://www.postgresql.org/
---

## 1. Visual Theme & Atmosphere

PostgreSQL expresses an open-source project through documentation, releases, community, and technical trust. A white page, cool blue identity, and structured navigation should make a large body of reference material approachable without disguising its depth. The public composition should be recognizable in a first viewport, then become predictable when a user starts a task. Keep the primary product, service, project, or artifact visible instead of replacing evidence with abstract decoration.

**Key Characteristics**
- A clear primary action
- A stable content hierarchy
- Readable metadata
- Intentional surface contrast
- Responsive media treatment
- Text equivalents for visual state

## 2. Color Palette & Roles

Use white for documentation pages and cool blue-gray `#eef3f7` for grouped reference panels. Normalize the sampled gray CTA to PostgreSQL blue `#336791`, with `#6699cc` as a secondary link or diagram accent. `#1f2933` supports long technical reading. Keep code blocks and warning states visually distinct from the community blue.

Use color roles consistently: background for the page ground, surface for grouped content, text for reading, brand for the primary action, border for structure, and semantic colors for states with text labels. Preview swatches show the canvas, brand action, and primary reading color.

## 3. Typography Rules

Open Sans is the sampled family for display and body. Documentation needs a strict hierarchy: product/project title, version or page scope, section headings, body explanation, code/command, and small metadata. Avoid oversized marketing text in reference pages; use scale to orient and line length to support comprehension.

Suggested hierarchy: display-hero for the first promise, display-lg for a major section, h1 for the page task, h2 for grouped content, h3 for cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Use blue filled controls for downloads or primary project paths, outlined controls for version or language selection, and code-styled links for repository and documentation navigation. API and command blocks need copy buttons with labels, syntax context, and a readable overflow strategy. Tables and release notes should expose version, date, and status. Search and sidebar navigation need keyboard-visible state.

Treat controls as a system: every filled action needs hover, pressed, disabled, and focus states; every card needs a stable content order; every input needs a label and error state. Use familiar icons inside tool buttons and give unfamiliar icons a tooltip.

## 5. Layout Principles

Use a 1280px documentation canvas with a stable navigation rail, 720px prose column, and optional code/context rail. Keep 16/24px internal spacing and 48/64px section intervals. Code blocks need horizontal scroll only inside their own region and must not cause page-wide overflow. On mobile, convert sidebars into labeled disclosure navigation.

Prefer full-width bands with constrained inner content over decorative nested cards. Stable aspect ratios, explicit grid tracks, and fixed control dimensions keep media and labels from shifting as content loads.

## 6. Shapes & Radius Scale

Use 2px for code labels, 6px for buttons and inputs, 8px for docs panels, and 12px for featured community or release blocks. Pills are reserved for version/status selectors. Keep code and table surfaces mostly rectangular for technical precision.

Keep the radius scale intentional: micro controls, standard controls, comfortable cards, relaxed feature panels, and pills only for true categorical selectors. A rounded rectangle should communicate an action or grouped item, not decorate every section.

## 7. Depth & Elevation

Use borders and cool surfaces to group documentation. Selected navigation uses a blue rule or tint; code copy menus and dialogs can use medium elevation. Never use a shadow to imply authority or correctness; source links and version labels provide that context.

Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a scrim, a clear title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 120-150ms for nav and copy feedback, 220ms for sidebar and disclosure, and 280ms for search result transitions. Do not animate code or release data. Reduced motion removes sidebar interpolation and preserves current section and focus.

Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention. Make the final state available without animation and honor reduced-motion preferences.

## 9. Accessibility & A11y

Use dark text on white and verify white on blue actions. Code blocks need a title, language or command context, copy status, and keyboard-accessible horizontal scrolling. Search results should announce count changes. Headings, landmarks, table headers, and version links must be semantic and in logical order.

Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for status. Test focus against every surface, including imagery, selected states, dialogs, and disabled-looking controls. Do not use color as the only error, progress, rating, or selection signal.

## 10. Responsive Behavior

At 640px, collapse the docs rail behind a labeled navigation control and preserve the current page title. At 1024px, keep the prose and code columns readable before hiding optional context. At 1280px, restore the three-region documentation frame. Maintain 44px controls and localize overflow to code/table regions.

Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the first useful action, the content subject, and the state explanation at every breakpoint. If a row cannot fit, group it under a labeled disclosure instead of clipping text.

## 11. Content & Voice

Use precise technical language and name version, command, behavior, and constraint. Prefer “Read documentation”, “Download”, “View release notes”, and “Open repository”. Empty states should suggest a version, topic, or search term instead of a generic no-result.

Microcopy should state the object, action, and consequence. Keep empty states useful, error messages recoverable, and confirmations specific. Avoid claims that cannot be understood or verified from the surrounding interface.

## 12. Dark Mode & Theming

The entry is light-first with PostgreSQL blue. A dark docs theme needs separate code, table, link, and focus tokens; do not simply darken code blocks until syntax and selection become unreadable. Keep warnings and deprecations distinct from the brand blue.

Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert imagery or evidence blindly.

## 13. Lineage & Influences

PostgreSQL inherits from long-lived open-source documentation and standards-oriented technical publishing. The blue identity provides recognition, but the real design system is navigation, version discipline, code readability, and community evidence. It rejects marketing-first gloss when users need a precise answer.

The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

## 14. Do's and Don'ts

**Do**
- Show version context.
- Keep code copyable.
- Use blue for project actions.
- Preserve a readable prose width.
- Label tables and code blocks.
- Announce search result counts.
- Expose source links.
- Localize overflow.

**Don't**
- Do not bury version information.
- Do not animate code.
- Do not let code create page overflow.
- Do not use color as correctness proof.
- Do not hide the repository link.
- Do not use tiny metadata in docs.
- Do not make navigation mouse-only.
- Do not turn reference pages into marketing heroes.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the sampled canvas token.
- Foreground: use the sampled reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Example Component Prompts

- Create a PostgreSQL-like documentation shell with version-aware navigation, blue project action, readable prose column, and a code rail.
- Design a command block with language/context label, copy action, local overflow, and copy status announcement.
- Build a release notes table with version, date, status, links, and semantic headings.
- Create a mobile docs navigation disclosure that preserves current page and keyboard focus.

### Iteration Guide

1. Read a code block at 320px.
2. Check version context above the first heading.
3. Test copy feedback with keyboard.
4. Verify docs search announcements.
5. Keep warnings distinct from blue.
6. Remove any shadow that implies correctness.
