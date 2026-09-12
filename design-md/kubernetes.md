---
name: "Kubernetes"
tagline: "Cloud-native orchestration with confident blue and practical depth."
updated_at: 2026-08-23T11:57:20.811Z
published_at: 2026-08-23T11:57:20.811Z
author: webdesignhot
source_url: "https://kubernetes.io/"
spec: webdesignhot/0.2
profile: catalog
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, cloud-native, orchestration, containers, platform]
preview_swatch: ["#ffffff", "#326ce5", "#212529"]
related: [docker, cloudflare, gitlab]
description: "Kubernetes combines a white documentation system with a dark charcoal hero and the unmistakable Kubernetes blue. Open Sans, straightforward navigation, diagram-led education, and visible documentation routes make a complex platform feel organized without concealing its operational depth."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: brand-soft
  muted: text-soft
  border: border
  ring: focus

colors:
  bg: "#ffffff"
  surface: "#f5f7fa"
  text: "#212529"
  brand: "#326ce5"
  on-brand: "#ffffff"
  border: "#dee2e6"
  text-soft: "#5f6b76"
  hero: "#303030"
  on-hero: "#ffffff"
  brand-soft: "#dce8ff"
  focus: "#174ea6"

typography:
  display:
    family: "Open Sans, system-ui, -apple-system, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "Open Sans, system-ui, -apple-system, sans-serif"
    weights: [400, 500, 600]
  mono:
    family: "ui-monospace, SFMono-Regular, Menlo, monospace"
    weights: [400, 500]
  scale:
    display-hero: { size: 40, weight: 500, lineHeight: 1.15, tracking: '0', family: display }
    display-lg: { size: 34, weight: 600, lineHeight: 1.2, tracking: '0', family: display }
    h1: { size: 32, weight: 600, lineHeight: 1.2, tracking: '0', family: display }
    h2: { size: 28, weight: 600, lineHeight: 1.25, tracking: '0', family: display }
    h3: { size: 22, weight: 600, lineHeight: 1.3, tracking: '0', family: display }
    body-lg: { size: 18, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    label: { size: 14, weight: 600, lineHeight: 1.4, tracking: '0', family: body }
    caption: { size: 12, weight: 400, lineHeight: 1.4, tracking: '0', family: body }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  xl: 12
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96]

layout:
  page-width: 1200
  prose-width: 760
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 300
  reduced-motion: 'remove transforms and keep disclosure state changes immediate'

breakpoints:
  mobile: 640
  tablet: 992
  desktop: 1200
  wide: 1440

components:
  button-primary: { bg: brand, text: on-brand, padding: '10px 16px', radius: 4 }
  button-ghost: { bg: transparent, text: brand, border: border, padding: '10px 16px', radius: 4 }
  card: { bg: bg, border: border, radius: 6, padding: 24 }
  input: { bg: bg, border: border, text: text, radius: 4, padding: '9px 12px' }

lineage:
  summary: "Recorded from the live Kubernetes homepage during the 2026-08-23 catalog audit."
  influences:
    - name: "Kubernetes public site"
      role: "Supplied Kubernetes blue, the charcoal hero, Open Sans hierarchy, documentation routes, and cloud-native diagram language."
      url: "https://kubernetes.io/"
---

## 1. Visual Theme & Atmosphere

Kubernetes balances authority with approachability. A charcoal hero creates a strong technical stage, while white documentation sections and Kubernetes blue actions make the path into concepts, tutorials, and reference clear. The ship-wheel mark and simple cloud-native diagrams provide recognition without becoming decoration.

The atmosphere is operational, community-maintained, and educational. Preserve complexity through hierarchy rather than hiding it behind vague promises.

**Key Characteristics**
- Kubernetes blue as the single dominant action color
- Charcoal hero with high-contrast white copy
- Open Sans for readable technical hierarchy
- White documentation canvas and restrained gray surfaces
- Diagram-led explanations
- Visible routes to learn, docs, community, and releases
- Responsive navigation without horizontal overflow

## 2. Color Palette & Roles

Use #326ce5 for primary actions, selected navigation, links, and the wheel mark. Charcoal #303030 belongs to hero or high-emphasis bands, not every panel. White is the main reading surface; #f5f7fa groups secondary material. Keep body copy at #212529 and use the darker #174ea6 focus token where a blue ring must remain visible on pale blue.

## 3. Typography Rules

Open Sans is the complete display and body system. The desktop hero uses 40px/500; reduce it to about 28px on mobile. Use 28-32px section headings, 22px card titles, 16px body copy, and monospace for YAML, kubectl commands, resource kinds, and status output. Keep letter spacing at zero and avoid ultra-bold marketing headlines.

## 4. Component Stylings

Primary buttons are solid blue with white labels; secondary actions are white or transparent with blue text and a clear border; tertiary actions are underlined text links; destructive actions require an explicit red semantic token and confirmation. Cards use borders rather than heavy shadows. Badges label versions, maturity, or status. Inputs include visible labels, help text, and a dark-blue focus ring. Navigation exposes Documentation and Learn as first-class routes, with a labeled mobile menu.

## 5. Layout Principles

Use a 1200px shell and 760px reading measure. Alternate full-width charcoal or white bands with constrained inner content. Concepts may use a two- or three-column grid, but documentation prose remains single-column with a stable table of contents. Keep the product name, first explanation, and useful action in the first viewport.

## 6. Shapes & Radius Scale

Use 4px for buttons and fields, 6px for cards, 8px for menus, and 12px only for a large illustrated panel. Pills are for compact status labels, not general navigation. Diagrams may use circles and hexagonal infrastructure forms without forcing rounded containers around all content.

## 7. Depth & Elevation

Default content stays flat. Use a 1px border and subtle shadow only for menus, sticky navigation, and overlays. Technical diagrams create visual depth through connection and grouping, not glass effects. Every elevated element needs an interaction reason.

## 8. Interaction & Motion

Use 120ms hover feedback, 200ms disclosures, and 300ms maximum for diagram entrance. Navigation state should not shift layout. Focus is a 2px dark-blue ring with 2px offset. Reduced motion removes diagram transforms and smooth scrolling while retaining state labels.

## 9. Accessibility & A11y

Maintain white-on-charcoal and white-on-blue contrast, use text with every status color, and provide meaningful alternatives for architecture diagrams. Resource examples need accessible names and copy controls. Preserve heading order, skip navigation, keyboard menus, and at least 44px mobile targets.

## 10. Responsive Behavior

Below 992px, collapse the navigation and multi-column concept grids. Below 640px, use a 28px hero, stack actions, constrain code overflow, and keep the table of contents in a labeled disclosure. Diagrams should recompose or scroll inside a bounded region; they must not widen the page.

## 11. Content & Voice

Write in precise, explanatory verbs: "Learn Kubernetes Basics", "Read the Concepts", "Install kubectl", and "View the release notes". Define platform terminology near first use. Error and empty-state copy should state the resource, observed condition, and next command.

## 12. Dark Mode & Theming

The audited homepage uses a light documentation theme with a dark hero rather than a full dark mode. A future dark reader mode requires separate tokens for code, diagrams, navigation, surfaces, and semantic states. Do not treat the hero palette as a complete dark theme.

## 13. Lineage & Influences

Kubernetes inherits from infrastructure diagrams, operations manuals, and open-source documentation portals, then adds a strong blue identity and community framing. It should feel like a platform map: many moving parts, clearly named and connected, with documentation always closer than promotion.

## 14. Do's and Don'ts

**Do**
- Keep Kubernetes blue consistent.
- Show commands and resource state explicitly.
- Use diagrams to clarify relationships.
- Keep documentation routes visible.
- Label version and maturity.
- Reflow complex grids on mobile.
- Use strong keyboard focus.
- Pair status color with text.

**Don't**
- Do not make every section charcoal.
- Do not hide complexity behind generic cloud copy.
- Do not use unlabeled architecture icons.
- Do not animate diagrams continuously.
- Do not put cards inside cards.
- Do not clip YAML or command output.
- Do not reduce mobile targets below 44px.
- Do not invent a multicolor palette.

## 15. Agent Prompt Guide

**Quick colors:** background #ffffff; text #212529; Kubernetes blue #326ce5; hero #303030; surface #f5f7fa; border #dee2e6; focus #174ea6.

**Example prompts**
- Create a Kubernetes hero with a charcoal stage, white Open Sans copy, and one blue documentation action.
- Design a cloud-native concept grid with labeled diagrams and restrained bordered cards.
- Build a kubectl tutorial with copyable commands, visible prerequisites, and version context.
- Create a responsive documentation rail that becomes a labeled disclosure below 992px.

**Iteration guide:** establish task and resource hierarchy; set the blue/charcoal contrast; add command and diagram states; verify mobile reflow; test keyboard navigation; then remove any decorative depth that does not explain structure.
