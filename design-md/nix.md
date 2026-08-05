---
name: "Nix"
tagline: "Reproducible packages and declarative builds for every system."
updated_at: 2026-08-05T04:56:02.737Z
published_at: 2026-08-05T04:56:02.737Z
author: webdesignhot
source_url: "https://nixos.org/"
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, package-manager, reproducible, declarative, builds]
preview_swatch: ["#171522", "#5277c3", "#f4f1fa"]
related: [rust-lang, deno, tailscale]
description: "Nix and NixOS frame infrastructure as reproducible, declarative, and composable. A dark plum ground, Nix blue identity, bright documentation text, and clear paths through packages, flakes, and deployments create a distinctive open-source system without sacrificing technical clarity."

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
  bg: "#171522"
  surface: "#251d36"
  text: "#f4f1fa"
  brand: "#5277c3"
  on-brand: "#ffffff"
  border: "#413951"
  text-soft: "#b4aabe"
  border-strong: "#6a5f7d"
  accent-warm: "#f0c674"
  accent-mint: "#83c9b3"

typography:
  display:
    family: "IBM Plex Sans, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "IBM Plex Sans, system-ui, -apple-system, sans-serif"
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
  summary: "Recorded from the current Nix public site during the 2026-08-05 catalog audit."
  influences:
    - name: "Nix public site"
      role: "The Nix/NixOS public site supplied the dark plum ground, blue identity, declarative build framing, and package/system navigation model."
      url: "https://nixos.org/"
---

## 1. Visual Theme & Atmosphere

Nix should feel like a precise workshop in a dark room: plum-black infrastructure ground, blue declarative actions, bright documentation text, and small warm signals for evaluation or release. Let reproducibility and composition lead the visual hierarchy. Keep the actual project, package, runtime, or infrastructure subject visible in the first useful viewport. The visual system should help an agent or human move from recognition to a concrete developer task.

**Key Characteristics**
- A visible first action
- Stable technical hierarchy
- Readable version and status metadata
- Inspectable code or configuration
- Responsive documentation structure
- Text equivalents for visual state

## 2. Color Palette & Roles

Use deep plum for the system ground, violet surfaces for package and flake groups, Nix blue for links and primary actions, warm ivory for reading, and amber or mint for secondary build states with explicit labels. Use role names consistently: background, surface, text, brand, on-brand, border, text-soft, border-strong, and accent tokens. Preview swatches show the page ground, primary action, and primary reading color. Semantic states need both color and text.

## 3. Typography Rules

IBM Plex Sans gives the system a technical but human register. Use firm display weights for reproducibility and declarative language, compact body copy for docs, and monospace for expressions, derivations, flake inputs, and shell commands. Suggested hierarchy: display-hero for the first promise, display-lg for a major concept, h1 for the current task, h2 for grouped content, h3 for examples or cards, body-lg for introductions, body for explanations, body-sm for metadata, label for controls, and caption for timestamps. Keep tracking at zero unless the source evidence requires otherwise.

## 4. Component Stylings

Build package search, flake input rows, system target selectors, code blocks, evaluation states, and deployment path panels. Selected systems and build states need labels, icons, and focus rings. Treat every control as a stateful system: default, hover, pressed, disabled, and visible keyboard focus. Use familiar icons inside tool buttons, give unfamiliar icons a tooltip, and keep the action consequence beside the control.

## 5. Layout Principles

Use a 1240px dark shell with a 760px reading column and a stable package/system rail. Keep the declaration, evaluation, and deployment sequence visible. On mobile, turn system selectors into labeled stacked controls. Prefer full-width bands with constrained inner content over decorative nested cards. Stable grid tracks, fixed control dimensions, and bounded code regions prevent dynamic labels from shifting the page.

## 6. Shapes & Radius Scale

Use 4px controls, 8px code surfaces, and 12px grouped system panels. Keep the dark infrastructure language crisp and avoid decorative glass effects. A radius should communicate a control or grouped item, not decorate every section. Keep code, tables, and reference content aligned to a predictable baseline.

## 7. Depth & Elevation

Use plum surface steps and border contrast to show package and system relationships. A derivation or deployment graph can have a raised panel, but it needs a textual path and should not become a floating ornament. Elevation should explain interaction or layering. If contrast, spacing, and a border are sufficient, do not add a shadow. Every overlay needs a title, an escape path, and focus restoration.

## 8. Interaction & Motion

Use 140ms for package selection, 220ms for flake expansion, and 280ms for deployment state changes. Reduced motion leaves evaluation and deployment states visible without animated progress theater. Use motion to confirm an action, expose a relationship, or orient the user. Do not use looping motion to manufacture attention, and make the final state available without animation.

## 9. Accessibility & A11y

Keep ivory text and blue actions readable on plum, expose evaluation and deployment status in text, label package/system selectors, and provide a summary for dependency graphs. Do not rely on glow or color to signal a successful build. Use semantic landmarks, one logical heading order, keyboard-operable controls, and text alternatives for diagrams, charts, code state, and status. Do not use color as the only error, progress, rating, health, or selection signal.

## 10. Responsive Behavior

At 640px, stack package and system context while keeping the main install or evaluate action visible. At 1024px, collapse the package rail. Keep expressions and shell commands horizontally scrollable within bounded code panels. Responsive changes should reflow tasks rather than merely scale the desktop composition. Preserve the subject, first useful action, version context, and state explanation at every breakpoint.

## 11. Content & Voice

Use declarative language: “Install a package”, “Evaluate a flake”, “Build a system”, “Pin an input”, and “Deploy a generation”. Explain the resulting state and rollback path in plain terms. Microcopy should state the object, action, and consequence. Empty states should offer a valid next step, errors should be recoverable, and technical terms should be defined at the point of use.

## 12. Dark Mode & Theming

The dark plum mode is the primary identity. A light documentation variant can be offered, but it must preserve blue actions, readable code, focus contrast, and the distinction between evaluation, build, and deployment states. Theme tokens must cover background, surface, text, muted text, border, primary action, primary foreground, focus ring, and semantic states. A theme toggle should preserve position and announce the current mode; never invert code or imagery blindly.

## 13. Lineage & Influences

Nix sits in the lineage of package managers, functional build systems, Unix tooling, and declarative infrastructure. Its visual language should make reproducibility feel tangible: inputs, outputs, and generations are all visible. The lineage is a design rationale, not a claim that the source site uses every implementation token in this file. The sampled source URL and recorded production observations remain the authority for brand-specific decisions.

The audit evidence records this source observation: The Nix/NixOS public site supplied the dark plum ground, blue identity, declarative build framing, and package/system navigation model.

## 14. Do's and Don'ts

**Do**
- Show inputs and resulting outputs.
- Use blue for package and system actions.
- Make evaluation state textual.
- Keep shell and expression examples copyable.
- Explain generations and rollback.
- Use warm accents sparingly.
- Keep dependency paths inspectable.
- Preserve system context on mobile.

**Don't**
- Do not use glow as the only state signal.
- Do not hide flake inputs.
- Do not make deployment state color-only.
- Do not clip Nix expressions.
- Do not turn a dependency graph into decoration.
- Do not bury rollback context.
- Do not mix package and system actions without labels.
- Do not flatten the dark identity into generic black SaaS.

## 15. Agent Prompt Guide

### Quick Color Reference

- Background: use the page ground token.
- Foreground: use the primary reading token.
- Primary: use the brand action token.
- Surface: use the grouped-content token.
- Border: use the quiet structural divider.
- Focus: use a high-contrast visible ring.

### Build Prompt

Create a dark open-source infrastructure surface with plum system grounds, Nix blue actions, readable ivory type, explicit package/flake/system states, copyable expressions, and visible reproducibility and rollback context.

### Iteration Order

First establish package, evaluation, and deployment states, then make inputs and generations inspectable, then tune dark surface contrast and mobile selectors. Test focus and state summaries without relying on color.
