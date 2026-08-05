---
name: "Homebrew"
tagline: "The friendly package manager for macOS and Linux."
updated_at: 2026-08-05T04:56:04.733Z
published_at: 2026-08-05T04:56:04.733Z
author: webdesignhot
source_url: "https://brew.sh/"
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, package-manager, macos, linux, community]
preview_swatch: ["#2e2a24", "#ffd79a", "#fff2da"]
related: [github, apple, npm]
description: "Homebrew presents package infrastructure with a warm dark brown canvas, cream reading text, shell-first examples, and a community-maintained tone. The extraction should feel friendly and practical: install the manager, search formulae, inspect casks, and understand the platform boundary quickly."

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
  bg: "#2e2a24"
  surface: "#453d33"
  text: "#fff2da"
  brand: "#ffd79a"
  on-brand: "#2e2a24"
  border: "#786a58"
  text-soft: "#cbbda8"
  border-strong: "#9b8b75"
  accent-warm: "#ffd79a"
  accent-red: "#d6453d"
  accent-green: "#8fbd75"

typography:
  display:
    family: "ui-sans-serif, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "ui-sans-serif, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current Homebrew public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Homebrew public site"
      role: "The Homebrew public site supplied the dark brown ground, warm cream action and text, shell-oriented copy, and macOS/Linux package-manager framing."
      url: "https://brew.sh/"
---

## 1. Visual Theme & Atmosphere

Homebrew should feel like a welcoming terminal companion: dark brown shell, cream type, one bright cream action, and lightweight community documentation. Keep the install command central, then make formulae and casks easy to understand for both newcomers and maintainers. Keep the actual project, package, runtime, or infrastructure subject visible in the first useful viewport. The visual system should help an agent or human move from recognition to a concrete developer task.

**Key Characteristics**
- A visible first action
- Stable technical hierarchy
- Readable version and status metadata
- Inspectable code or configuration
- Responsive documentation structure
- Text equivalents for visual state

## 2. Color Palette & Roles

Use dark brown for the shell, warm brown for grouped surfaces, cream for reading and primary actions, and red or green for explicitly labeled package or status cues. Avoid treating every package state as a color chip. Use role names consistently: background, surface, text, brand, on-brand, border, text-soft, border-strong, and accent tokens. Preview swatches show the page ground, primary action, and primary reading color. Semantic states need both color and text.

## 3. Typography Rules

Use a neutral system sans for approachable headings and compact body copy. Monospace is essential for install commands, formula names, flags, and output. Headings should be friendly without becoming playful enough to obscure technical steps. Suggested hierarchy: display-hero for the first promise, display-lg for a major concept, h1 for the current task, h2 for grouped content, h3 for examples or cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Prioritize install command blocks, formula/cask search, platform badges, package detail rows, version metadata, and contribution links. Make copy actions labeled and keep package status in text. Treat every control as a stateful system: default, hover, pressed, disabled, and visible keyboard focus. Use familiar icons inside tool buttons, give unfamiliar icons a tooltip, and keep the action consequence beside the control.

## 5. Layout Principles

Use a 1180px dark shell with a broad install hero and an 760px documentation column. Keep macOS/Linux context near the install action. On mobile, stack formula and cask information and keep the command within a bounded scroll area. Prefer full-width bands with constrained inner content over decorative nested cards. Stable grid tracks, fixed control dimensions, and bounded code regions prevent dynamic labels from shifting the page.

## 6. Shapes & Radius Scale

Use 4px controls, 8px command panels, and 10px package groups. Avoid glossy cards; the terminal-adjacent system should remain sturdy and plain. A radius should communicate a control or grouped item, not decorate every section. Keep code, tables, and reference content aligned to a predictable baseline.

## 7. Depth & Elevation

Use warm surface steps and borders instead of heavy shadows. Code panels may sit above the brown ground, while package rows need clear separators and stable dimensions. Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 120ms for copy feedback, 180ms for search and package filtering, and no continuous motion in command output. Reduced motion leaves package and platform state immediately readable. Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention, and make the final state available without animation.

## 9. Accessibility & A11y

Keep cream text and brand action contrast verified on brown, label package type and platform in text, expose copy results, and provide readable summaries for terminal output. Do not communicate install success through color alone. Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for diagrams, charts, code state, and status. Do not use color as the only error, progress, rating, health, or selection signal.

## 10. Responsive Behavior

At 640px, keep the install command and platform context in the first useful viewport. At 1024px, collapse contribution and support navigation. Preserve formula names and commands with horizontal scrolling inside bounded panels. Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the subject, first useful action, version context, and state explanation at every breakpoint.

## 11. Content & Voice

Use friendly exact copy: “Install Homebrew”, “Search formulae”, “Browse casks”, “Update packages”, and “Contribute a formula”. State platform, package type, and command consequence. Microcopy should state the object, action, and consequence. Empty states should offer a valid next step, errors should be recoverable, and technical terms should be defined at the point of use.

## 12. Dark Mode & Theming

The dark brown theme is the identity. A light docs surface can exist for long reference pages, but it must preserve command contrast, cream/brand semantics, platform labels, and visible focus. Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert code or imagery blindly.

## 13. Lineage & Influences

Homebrew sits between Unix package management, macOS developer tooling, community repositories, and terminal documentation. Its design strength is a short path from curiosity to a working install command. The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

The audit evidence records this source observation: The Homebrew public site supplied the dark brown ground, warm cream action and text, shell-oriented copy, and macOS/Linux package-manager framing.

## 14. Do's and Don'ts

**Do**
- Put install first.
- Name macOS and Linux support.
- Keep commands copyable.
- Make formula and cask distinct.
- Show version and package status in text.
- Use warm cream as the primary action.
- Keep contribution paths visible.
- Preserve package names on mobile.

**Don't**
- Do not hide the install command.
- Do not use status color without text.
- Do not make terminal output an image.
- Do not clip long commands.
- Do not confuse formulae and casks.
- Do not turn package search into a decorative gallery.
- Do not overuse warm accents.
- Do not bury the community contribution route.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the page ground token.
- Foreground: use the primary reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Build Prompt

Create a warm terminal-adjacent package-manager surface with dark brown grounds, cream actions and type, a prominent install command, formula/cask distinction, platform context, and copyable package details.

### Iteration Order

First make installation and platform support obvious, then add formula/cask search and package states, then tune warm surface contrast and mobile command overflow. Verify copy feedback and status labels.
