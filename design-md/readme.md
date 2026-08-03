---
name: ReadMe
tagline: 'Developer-docs system with Bureau serif display, deep navy demo canvas, blue CTAs, and pill navigation.'
updated_at: 2026-07-09T12:54:00+12:00
published_at: 2026-07-09T12:54:00+12:00
author: webdesignhot
source_url: https://readme.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, friendly, sans, serif, docs, developer]
preview_swatch: ['#f5f5f5', '#0e2af5', '#00033f']
related: [mintlify, stripe, resend]
description: 'ReadMe mixes developer documentation utility with an editorial launch-page system: a pale page, STK Bureau Sans navigation, STK Bureau Serif hero type, deep navy demo surfaces, blue pill CTAs, and doc-interface chrome that makes API docs feel like a product.'
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-sky
  muted: text-muted
  border: border
  ring: brand
colors:
  bg: '#f5f5f5'
  bg-page: '#ffffff'
  bg-soft: '#fafafa'
  surface: '#ffffff'
  surface-navy: '#00033f'
  surface-navy-raised: '#001361'
  surface-muted: '#f5f5f5'
  text: 'rgba(0, 0, 0, 0.84)'
  text-strong: '#000000'
  text-muted: 'rgba(0, 0, 0, 0.64)'
  text-soft: 'rgba(0, 0, 0, 0.50)'
  text-on-dark: '#ffffff'
  brand: '#0e2af5'
  brand-hover: '#1024d8'
  brand-deep: '#001361'
  accent-sky: '#82cbff'
  accent-blue-soft: '#d2eaff'
  accent-green-soft: '#d3f6c4'
  accent-green: '#396c26'
  accent-violet: '#8712ff'
  border: 'rgba(15, 15, 15, 0.10)'
  border-soft: 'rgba(15, 15, 15, 0.06)'
  border-on-dark: 'rgba(255, 255, 255, 0.18)'
  focus: '#0e2af5'
  success: '#396c26'
  warning: '#e09f17'
  danger: '#d73a49'
  on-brand: '#ffffff'
typography:
  display:
    family: 'STKBureauSerif, Georgia, "Times New Roman", serif'
    weights: [400, 500]
  body:
    family: 'STKBureauSans, ui-sans-serif, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"Geist Mono", ui-monospace, SFMono-Regular, Menlo, monospace'
    weights: [400, 500]
  scale:
    hero-display: { size: 72, weight: 400, lineHeight: 0.98, tracking: '-0.025em', family: display }
    display: { size: 56, weight: 400, lineHeight: 1.05, tracking: '-0.02em', family: display }
    h1: { size: 42, weight: 400, lineHeight: 1.08, tracking: '-0.01em', family: display }
    h2: { size: 32, weight: 400, lineHeight: 1.33, tracking: '-0.005em', family: display }
    h3: { size: 22, weight: 500, lineHeight: 1.25, tracking: '0', family: body }
    body-lg: { size: 20, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    nav: { size: 14, weight: 400, lineHeight: 1.3, tracking: '0', family: body }
    code: { size: 13, weight: 400, lineHeight: 1.5, tracking: '0', family: mono }
radius:
  micro: 4
  sm: 8
  md: 12
  lg: 18
  xl: 28
  hero: 52
  pill: 9999
spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
layout:
  page-width: 1280
  prose-width: 720
  header-height: 80
  hero-max-width: 1234
  docs-shell-width: 1080
motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 140
  duration-standard: 240
  duration-slow: 420
  reduced-motion: 'pause typed headline scrambling and doc-preview transitions'
breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536
components:
  button-primary:
    bg: brand
    text: on-brand
    radius: 9999
    padding: '8px 16px'
    use: 'Get started and signup actions'
  nav-pill:
    bg: transparent
    text: text
    radius: 9999
    padding: '6px 12px'
    use: 'Product, Solutions, Resources menus'
  hero-panel:
    bg: surface-navy
    text: text-on-dark
    radius: 52
    padding: '72px 80px'
    use: 'large dark docs hero canvas'
  docs-shell:
    bg: surface
    border: border
    radius: 18
    padding: 0
    use: 'documentation UI preview below hero copy'
  search-chip:
    bg: bg-soft
    border: border-soft
    radius: 10
    padding: '8px 12px'
    use: 'docs search and Ask AI controls'
lineage:
  summary: 'ReadMe blends an editorial serif hero with real documentation UI. The deep navy hero panel turns docs into a staged product surface rather than a flat feature list.'
  influences:
    - { name: 'API documentation portals', role: 'tabs, search, guides, reference, changelog chrome' }
    - { name: 'Editorial launch pages', role: 'serif hero type and large dark canvas' }
    - { name: 'Developer SaaS', role: 'blue CTA, concise nav, product-proof demo shell' }
---

## 1. Visual Theme & Atmosphere

ReadMe feels like developer documentation that has been promoted to a polished product surface. The page begins quietly with a pale background and compact nav, then lands on a large deep navy hero panel.

The most recognizable move is the contrast between STK Bureau Serif display type and detailed documentation UI chrome. This creates an editorial feel without losing developer credibility.

**Key Characteristics**
- Pale gray/white page shell.
- Deep navy hero panel with very rounded top corners.
- STK Bureau Serif for major display moments.
- STK Bureau Sans for nav and interface labels.
- Blue pill CTA for signup.
- Documentation tabs, search, Ask AI, and sidebar preview inside the hero.
- Tiny badges and pills rather than loud cards.
- Mono used only for code/reference details.

## 2. Color Palette & Roles

Use `bg #f5f5f5` and `surface #ffffff` for the outer page. The signature hero surface is `surface-navy #00033f`.

Text uses `rgba(0, 0, 0, 0.84)` on light surfaces and `#ffffff` on the navy panel.

The brand action is `brand #0e2af5`, observed on the header `Get started` pill. `accent-sky #82cbff` appears in hero badges and detail accents.

Borders should stay faint: `border rgba(15, 15, 15, 0.10)` for light chrome and `border-on-dark rgba(255, 255, 255, 0.18)` inside the navy demo.

## 3. Typography Rules

| Role | Font | Size | Weight | Notes |
| --- | --- | ---: | ---: | --- |
| Hero | STKBureauSerif | 72 | 400 | Editorial, high contrast, animated copy possible |
| Display | STKBureauSerif | 56 | 400 | Large story sections |
| H1 | STKBureauSerif | 42 | 400 | Detail titles |
| H2 | STKBureauSerif | 32 | 400 | Trust and proof sections |
| H3 | STKBureauSans | 22 | 500 | Feature cards |
| Body | STKBureauSans | 16 | 400 | Product copy |
| Nav | STKBureauSans | 14 | 400 | Compact navigation |
| Code | Geist Mono | 13 | 400 | API/reference surfaces |

Keep serif type large and sparse. ReadMe's serif is for authority and personality, not for dense paragraph copy.

## 4. Component Stylings

Primary buttons are blue pills with white text and tight padding. They should feel like navigation-level CTAs, not oversized marketing buttons.

The docs shell is the product proof. It needs tabs such as Guides, Recipes, API Reference, Changelog, and Discussions, plus a compact search field and Ask AI button.

Badges use small rounded pills. The "New" treatment should be a quiet blue chip rather than a warning banner.

## 5. Layout Principles

Center the nav and hero. The large navy hero panel should sit within a pale page, with the docs UI preview overlapping or emerging from its bottom edge.

Avoid separate floating cards around the hero. ReadMe's first viewport is strongest when the hero panel itself is the main object.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
| --- | ---: | --- |
| Micro | 4 | icons, code tokens |
| Small | 8 | small controls |
| Medium | 12 | inputs and chips |
| Large | 18 | docs shell |
| Hero | 52 | oversized navy hero panel |
| Pill | 9999 | nav and CTA pills |

The extreme hero radius is intentional. It softens the dense docs UI and turns the panel into a branded shape.

## 7. Depth & Elevation

Depth is mostly layering: navy panel, docs shell, internal tabs. Shadows can be subtle and broad, but borders are more important for UI clarity.

Use light hairlines around the docs shell and controls. Avoid dark heavy shadows on the pale background.

## 8. Interaction & Motion

The animated headline can scramble or swap words, but keep it slow enough to read. Tabs in the docs shell should switch quickly, around 200-240ms.

Hover states on pills should use light surface changes. The brand CTA can darken slightly on hover.

## 9. Accessibility & A11y

Blue CTA on white has strong contrast. Inside the navy panel, use white text and avoid mid-blue text for small labels unless it is supported by badges or icons.

Documentation previews should preserve visible labels. Do not rely on icons alone for Guides, Recipes, Search, or Ask AI actions.

## 10. Responsive Behavior

On mobile, reduce the serif hero to 44-52px and allow the docs shell to scroll horizontally. The navy panel can keep a large radius, but reduce padding sharply.

The top nav should collapse early; keep the ReadMe logo and `Get started` affordance visible.

## 11. Content & Voice

ReadMe's voice is practical and developer-friendly. It talks about docs that drive adoption, APIs that are easier to understand, and teams that ship better documentation.

Use words like docs, API, guides, reference, changelog, adoption, and developer experience.

## 12. Dark Mode & Theming

The audited homepage uses a light shell with a dark hero panel. A full dark mode should keep the navy surface and blue CTA, but move the outer shell to a near-black instead of inverting to pure blue.

Do not remove the light docs shell from previews; that contrast is part of the product proof.

## 13. Lineage & Influences

ReadMe combines developer documentation structure with editorial packaging. The large serif headline gives personality, while the embedded docs shell keeps the system honest.

It is closer to productized docs than static reference pages. The design goal is to show documentation as software.

## 14. Do's and Don'ts

Do use Bureau Serif for hero statements. Do include real documentation UI chrome. Do keep CTAs as blue pills. Do use deep navy as the hero stage.

Do not turn the page into generic API docs. Do not overuse monospace. Do not make every panel dark. Do not replace the docs preview with abstract illustration.

## 15. Agent Prompt Guide

When generating ReadMe-like UI, ask for a pale developer SaaS page with STK Bureau Serif display type, compact Bureau Sans navigation, a deep navy rounded hero panel, blue pill CTAs, and an embedded docs interface preview.

The result should make documentation feel like a polished product that developers can navigate immediately.
