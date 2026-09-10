---
name: "LLVM"
tagline: "Compiler infrastructure presented as a durable technical index."
updated_at: 2026-08-23T11:57:18.433Z
published_at: 2026-08-23T11:57:18.433Z
author: webdesignhot
source_url: "https://llvm.org/"
spec: webdesignhot/0.2
profile: catalog
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, compiler, toolchain, systems, documentation]
preview_swatch: ["#ffffff", "#2f7f91", "#000000"]
related: [cmake, bazel, rust-lang]
description: "LLVM uses an intentionally plain project-directory interface: white pages, black serif reading text, conventional blue links, striped section rules, and a teal dragon mark. Preserve the compact technical index and visible project hierarchy instead of translating it into a generic product landing page."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: link
  muted: text-soft
  border: border
  ring: link

colors:
  bg: "#ffffff"
  surface: "#f3f3f3"
  text: "#000000"
  brand: "#2f7f91"
  on-brand: "#ffffff"
  border: "#b8b8b8"
  text-soft: "#555555"
  link: "#0000ee"
  rule-dark: "#777777"

typography:
  display:
    family: "Georgia, Times New Roman, serif"
    weights: [400, 700]
  body:
    family: "Times New Roman, Times, serif"
    weights: [400, 700]
  mono:
    family: "ui-monospace, SFMono-Regular, Menlo, monospace"
    weights: [400, 700]
  scale:
    display-hero: { size: 34, weight: 700, lineHeight: 1.1, tracking: '0', family: display }
    display-lg:   { size: 28, weight: 700, lineHeight: 1.15, tracking: '0', family: display }
    h1:           { size: 24, weight: 700, lineHeight: 1.2, tracking: '0', family: display }
    h2:           { size: 20, weight: 700, lineHeight: 1.25, tracking: '0', family: display }
    h3:           { size: 18, weight: 700, lineHeight: 1.3, tracking: '0', family: body }
    body-lg:      { size: 18, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    body:         { size: 16, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    body-sm:      { size: 14, weight: 400, lineHeight: 1.4, tracking: '0', family: body }
    label:        { size: 14, weight: 700, lineHeight: 1.3, tracking: '0', family: body }
    caption:      { size: 12, weight: 400, lineHeight: 1.35, tracking: '0', family: body }

radius:
  micro: 0
  sm: 2
  md: 4
  lg: 6
  xl: 8
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64]

layout:
  page-width: 980
  prose-width: 720
  header-height: 56

motion:
  ease-standard: 'linear'
  duration-fast: 80
  duration-standard: 120
  duration-slow: 180
  reduced-motion: 'remove nonessential transitions and preserve anchor position'

breakpoints:
  mobile: 640
  tablet: 900
  desktop: 1100
  wide: 1280

components:
  button-primary: { bg: brand, text: on-brand, padding: '7px 12px', radius: 2 }
  button-ghost: { bg: transparent, text: link, border: border, padding: '7px 12px', radius: 2 }
  card: { bg: bg, border: border, radius: 0, padding: 16 }
  input: { bg: bg, border: border, text: text, radius: 2, padding: '6px 8px' }

lineage:
  summary: "Recorded from the live LLVM project homepage during the 2026-08-23 catalog audit."
  influences:
    - name: "LLVM project homepage"
      role: "Supplied the white technical canvas, serif hierarchy, conventional links, striped rules, project columns, and teal dragon identity."
      url: "https://llvm.org/"
---

## 1. Visual Theme & Atmosphere

LLVM reads as an engineering index maintained for longevity. The page is white, information begins immediately, and the project family is separated by striped gray rules rather than decorative containers. The teal dragon mark supplies identity while the content remains the dominant signal.

The extraction should feel stable, compact, and source-oriented. Do not inflate the hierarchy into a large marketing hero or hide subprojects behind animated cards. The live mobile page still carries a fixed-width legacy composition, so a new implementation may improve reflow while preserving the density and directness.

**Key Characteristics**
- White technical canvas with black serif text
- Conventional blue links that remain visibly links
- Teal project mark used sparingly
- Compact three-column project index on wide screens
- Gray striped rules for section hierarchy
- Minimal radius, shadow, and motion
- Source code, documentation, and community routes visible early

## 2. Color Palette & Roles

Use white for the page and most content, black for reading, and `#0000ee` for inline navigation. The sampled teal `#2f7f91` is the identity color for the dragon, primary project marks, and a limited primary action. Light gray groups utility content; medium gray draws rules. Never replace familiar link blue with low-contrast gray.

## 3. Typography Rules

Use Times New Roman for body copy and Georgia for section headings when available. Body text is 16px with a compact 1.45 line height; headings range from 18px to 34px and do not use negative tracking. Use monospace only for target triples, commands, API names, and code. Preserve underlines for inline links and avoid all-caps display typography.

## 4. Component Stylings

Primary buttons are rare, square, teal, and text-labeled. Secondary and ghost actions behave like bordered or underlined links. Project cards are not floating cards: use unframed columns separated by rules. Navigation is a compact list of project, documentation, release, and community links. Inputs use a 1px gray border and a visible blue focus outline. Tags are small textual labels, never decorative pills.

## 5. Layout Principles

Center a 980px shell with a 720px prose measure. On desktop, use stable columns for major project families and align headings to shared rules. At narrower widths, stack the columns rather than shrinking type. Keep logo, project name, first documentation routes, and current news visible without requiring an oversized first viewport.

## 6. Shapes & Radius Scale

The native language is square. Use 0px for sections and project groups, 2px for controls, 4px for compact notices, and 6px only for a modal or temporary overlay. Reserve the pill radius for machine-readable status when absolutely required.

## 7. Depth & Elevation

Use no shadow in the main document. Hierarchy comes from rules, spacing, and typographic weight. Menus may use a 1px border and a subtle `0 2px 6px rgba(0,0,0,.15)` shadow, but project content stays on one plane.

## 8. Interaction & Motion

Links change underline or color immediately. Use 80ms for hover feedback and at most 120ms for a menu; avoid page-transition animation. Keyboard focus is a 2px blue outline with 2px offset. Under reduced motion, remove smooth scrolling and preserve the destination heading at the top of the viewport.

## 9. Accessibility & A11y

Black on white and blue links provide strong differentiation, but links must retain underlines or another non-color cue. Use semantic project lists, one ordered heading tree, skip navigation, and named controls. The dragon logo needs concise alternative text; decorative stripe patterns should be ignored by assistive technology. Correct the source site's mobile overflow in implementations while preserving content order.

## 10. Responsive Behavior

Below 900px, change project columns to a single vertical list. Below 640px, keep 16px body text, allow long project names and code to wrap or scroll within bounded regions, and use at least 44px targets for mobile controls. Do not reproduce the audited 599px document width on a 390px viewport.

## 11. Content & Voice

Write factual project language: "Read the documentation", "View releases", "Browse source", and "Join the community". Prefer exact component and subproject names over persuasive claims. Notices should state the affected release, platform, and next action.

## 12. Dark Mode & Theming

The audited homepage is light-only. A dark reader theme may be added only with explicit tokens for page, text, links, rules, and code; it must not be a simple inversion. The light theme remains canonical for brand fidelity.

## 13. Lineage & Influences

LLVM belongs to the lineage of university research pages, Unix project indexes, compiler manuals, and early open-source foundations. Its value comes from making a large project family inspectable without a product-marketing shell. Preserve the visible relationship between infrastructure, subprojects, releases, and documentation.

## 14. Do's and Don'ts

**Do**
- Keep project and subproject names visible.
- Use serif reading text and familiar blue links.
- Use gray rules to organize dense information.
- Show documentation and source routes early.
- Reflow columns safely on mobile.
- Keep controls square and labeled.
- Provide visible keyboard focus.
- Use the teal mark as a restrained identity cue.

**Don't**
- Do not build an oversized SaaS hero.
- Do not turn every subproject into a floating card.
- Do not remove link underlines without a replacement cue.
- Do not animate technical content continuously.
- Do not hide releases behind an icon-only menu.
- Do not reduce body copy below 16px on mobile.
- Do not reproduce horizontal overflow.
- Do not invent gradients or glossy depth.

## 15. Agent Prompt Guide

**Quick colors:** background `#ffffff`; text `#000000`; project teal `#2f7f91`; link `#0000ee`; surface `#f3f3f3`; border `#b8b8b8`.

**Example prompts**
- Create a compact LLVM project index with serif copy, striped section rules, and visible source links.
- Design a compiler documentation page with a 720px reading column and conventional blue navigation.
- Build a responsive subproject directory that stacks cleanly below 900px without changing content order.
- Create a release notice with exact version metadata, a gray rule, and one text-labeled action.

**Iteration guide:** establish information order first; set the serif hierarchy; add familiar link styling; introduce the teal identity mark; verify mobile reflow; then test keyboard focus and code overflow.
