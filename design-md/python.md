---
name: "Python"
tagline: "A readable language community with blue trust and yellow energy."
updated_at: 2026-08-05T04:56:10.738Z
published_at: 2026-08-05T04:56:10.738Z
author: webdesignhot
source_url: "https://www.python.org/"
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, language, runtime, community, scripting]
preview_swatch: ["#ffffff", "#3776ab", "#444444"]
related: [rust-lang, pypi, deno]
description: "Python’s public system balances language documentation, downloads, community, and learning with a recognizable blue-and-yellow identity. Use a white documentation canvas, Python blue actions, yellow learning accents, and a clear route from first program to reference and ecosystem."

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
  surface: "#f3f5f7"
  text: "#444444"
  brand: "#3776ab"
  on-brand: "#ffffff"
  border: "#d9dee3"
  text-soft: "#6d777f"
  border-strong: "#aeb9c1"
  accent-warm: "#ffd343"
  accent-yellow: "#ffd343"
  accent-navy: "#2b5b84"

typography:
  display:
    family: "Source Sans Pro, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "Source Sans Pro, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current Python public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Python public site"
      role: "The Python public site supplied the white canvas, blue-and-yellow identity, tutorial/download/reference split, and community-oriented language system."
      url: "https://www.python.org/"
---

## 1. Visual Theme & Atmosphere

Python should feel welcoming without becoming childish: white documentation space, reliable blue actions, yellow learning cues, and visible paths for beginners, maintainers, and reference readers. Keep the first program and the deeper ecosystem in one coherent system. Keep the actual project, package, runtime, or infrastructure subject visible in the first useful viewport. The visual system should help an agent or human move from recognition to a concrete developer task.

**Key Characteristics**
- A visible first action
- Stable technical hierarchy
- Readable version and status metadata
- Inspectable code or configuration
- Responsive documentation structure
- Text equivalents for visual state

## 2. Color Palette & Roles

Use white for the learning and documentation ground, pale gray for grouped content, Python blue for primary actions and links, charcoal for reading, and yellow for learning, release, or community emphasis with text labels. Use role names consistently: background, surface, text, brand, on-brand, border, text-soft, border-strong, and accent tokens. Preview swatches show the page ground, primary action, and primary reading color. Semantic states need both color and text.

## 3. Typography Rules

Source Sans Pro supports Python’s readable, inclusive register. Use strong display type for getting started and language concepts, regular text for tutorials, and monospace for code, REPL prompts, package names, and version commands. Suggested hierarchy: display-hero for the first promise, display-lg for a major concept, h1 for the current task, h2 for grouped content, h3 for examples or cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Use download selectors, beginner routes, code examples, version switchers, documentation search, community cards, and package links. Platform and version states must be labeled; code copy needs a named control. Treat every control as a stateful system: default, hover, pressed, disabled, and visible keyboard focus. Use familiar icons inside tool buttons, give unfamiliar icons a tooltip, and keep the action consequence beside the control.

## 5. Layout Principles

Use a 1200px shell with beginner and reference paths visible in the first viewport, a 780px prose column, and a stable documentation rail. On mobile, stack learning routes and keep the download/platform action easy to reach. Prefer full-width bands with constrained inner content over decorative nested cards. Stable grid tracks, fixed control dimensions, and bounded code regions prevent dynamic labels from shifting the page.

## 6. Shapes & Radius Scale

Use 4px controls, 8px code surfaces, and 12px learning groups. Keep buttons rectangular and approachable; reserve pills for version or audience tags. A radius should communicate a control or grouped item, not decorate every section. Keep code, tables, and reference content aligned to a predictable baseline.

## 7. Depth & Elevation

Use pale surfaces and borders to distinguish tutorials, downloads, and reference. Avoid nested card stacks around code; let code blocks remain directly inspectable. Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 150ms for version and platform changes, 200ms for navigation, and 260ms for tutorial step expansion. Reduced motion keeps code and learning state stable. Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention, and make the final state available without animation.

## 9. Accessibility & A11y

Expose audience, platform, version, and code state in text. Verify blue actions and yellow accents, label code copy, preserve heading order, and provide text equivalents for illustrated learning concepts. Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for diagrams, charts, code state, and status. Do not use color as the only error, progress, rating, health, or selection signal.

## 10. Responsive Behavior

At 640px, keep “Get started” and download context visible before secondary community routes. At 1024px, collapse the docs rail. Wrap tutorial prose and keep code in bounded horizontal scroll regions. Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the subject, first useful action, version context, and state explanation at every breakpoint.

## 11. Content & Voice

Use welcoming concrete copy: “Learn Python”, “Download Python”, “Read the tutorial”, “Browse the library”, and “Join the community”. State the audience and next action without assuming prior knowledge. Microcopy should state the object, action, and consequence. Empty states should offer a valid next step, errors should be recoverable, and technical terms should be defined at the point of use.

## 12. Dark Mode & Theming

The default is a light documentation and learning theme. A dark code mode should define code, focus, warning, and link tokens separately while preserving Python blue and yellow roles. Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert code or imagery blindly.

## 13. Lineage & Influences

Python sits in the lineage of readable programming languages, community documentation, teaching environments, and package ecosystems. Its public design should make the first step and the long-term reference feel connected. The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

The audit evidence records this source observation: The Python public site supplied the white canvas, blue-and-yellow identity, tutorial/download/reference split, and community-oriented language system.

## 14. Do's and Don'ts

**Do**
- Make the first program path visible.
- Show platform and version context.
- Keep code examples copyable.
- Use blue for primary language routes.
- Use yellow as a labeled learning accent.
- Connect tutorials to reference.
- Expose package and community paths.
- Preserve code readability on mobile.

**Don't**
- Do not assume expert knowledge.
- Do not use yellow without a text meaning.
- Do not hide platform downloads.
- Do not clip Python examples.
- Do not separate tutorials from reference context.
- Do not make learning routes icon-only.
- Do not bury release notes.
- Do not turn the language system into generic education SaaS.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the page ground token.
- Foreground: use the primary reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Build Prompt

Create a welcoming programming-language documentation surface with a white canvas, Python blue actions, yellow learning accents, visible beginner and reference routes, copyable code, version/platform context, and community links.

### Iteration Order

First establish beginner, download, and reference paths, then add version/platform and code states, then tune blue/yellow contrast and mobile tutorials. Verify audience labels, copy controls, and code overflow.
