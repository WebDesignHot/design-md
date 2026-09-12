---
name: "NGINX"
tagline: "High-performance web infrastructure in a square, direct documentation system."
updated_at: 2026-08-23T11:57:25.908Z
published_at: 2026-08-23T11:57:25.908Z
author: webdesignhot
source_url: "https://nginx.org/"
spec: webdesignhot/0.2
profile: catalog
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, web-server, networking, infrastructure, performance]
preview_swatch: ["#ffffff", "#009639", "#000000"]
related: [cloudflare, netlify, vercel]
description: "NGINX presents infrastructure through an extremely direct white documentation page, black text, a compact black announcement strip, square content blocks, and the NGINX green wordmark. Keep configuration, downloads, security notices, and documentation closer than marketing."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: link
  muted: text-soft
  border: border
  ring: brand

colors:
  bg: "#ffffff"
  surface: "#f2f2f2"
  text: "#000000"
  brand: "#009639"
  on-brand: "#ffffff"
  border: "#d9d9d9"
  text-soft: "#555555"
  link: "#0066cc"
  dark: "#1f1f1f"
  on-dark: "#ffffff"

typography:
  display:
    family: "Arial, Helvetica, sans-serif"
    weights: [500, 600, 700]
  body:
    family: "Arial, Helvetica, sans-serif"
    weights: [400, 500, 700]
  mono:
    family: "ui-monospace, SFMono-Regular, Menlo, monospace"
    weights: [400, 500]
  scale:
    display-hero: { size: 34, weight: 600, lineHeight: 1.15, tracking: '0', family: display }
    display-lg: { size: 28, weight: 600, lineHeight: 1.2, tracking: '0', family: display }
    h1: { size: 26, weight: 600, lineHeight: 1.2, tracking: '0', family: display }
    h2: { size: 22, weight: 600, lineHeight: 1.25, tracking: '0', family: display }
    h3: { size: 18, weight: 600, lineHeight: 1.3, tracking: '0', family: display }
    body-lg: { size: 18, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    label: { size: 14, weight: 700, lineHeight: 1.4, tracking: '0', family: body }
    caption: { size: 12, weight: 400, lineHeight: 1.4, tracking: '0', family: body }

radius:
  micro: 0
  sm: 2
  md: 3
  lg: 4
  xl: 6
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64]

layout:
  page-width: 1040
  prose-width: 760
  header-height: 58

motion:
  ease-standard: 'linear'
  duration-fast: 80
  duration-standard: 140
  duration-slow: 200
  reduced-motion: 'remove nonessential transitions and smooth scrolling'

breakpoints:
  mobile: 640
  tablet: 900
  desktop: 1100
  wide: 1280

components:
  button-primary: { bg: brand, text: on-brand, padding: '8px 14px', radius: 2 }
  button-ghost: { bg: transparent, text: link, border: border, padding: '8px 14px', radius: 2 }
  card: { bg: bg, border: border, radius: 0, padding: 18 }
  input: { bg: bg, border: border, text: text, radius: 2, padding: '7px 10px' }

lineage:
  summary: "Recorded from the live NGINX homepage during the 2026-08-23 catalog audit."
  influences:
    - name: "NGINX public site"
      role: "Supplied the green identity, white technical canvas, black notice band, square layout, and direct documentation hierarchy."
      url: "https://nginx.org/"
---

## 1. Visual Theme & Atmosphere

NGINX is spare, high-contrast, and operational. The green wordmark anchors a white page where news, documentation, downloads, security advisories, and project information are separated by simple headings and rules. A black notice strip can carry urgent project context without redesigning the whole page.

The extraction should feel fast because it avoids ornamental work. Preserve the square, utilitarian structure and do not substitute a generic infrastructure dashboard.

**Key Characteristics**
- NGINX green identity on white
- Black high-priority notice band
- Plain sans-serif technical copy
- Square sections with thin rules
- Documentation and security routes near the top
- Minimal radius, shadow, and animation
- Mobile navigation that collapses without overflow

## 2. Color Palette & Roles

Use #009639 for the wordmark, primary action, selected state, and key project link. White is the dominant page and reading surface. Black supports body copy and urgent notice bands; #f2f2f2 groups secondary content. Blue remains available for conventional inline links where green would blur identity and navigation.

## 3. Typography Rules

Arial or Helvetica provides the compact documentation voice. Use 26-34px for page-level headings, 18-22px for section titles, and 16px for body copy. Monospace is required for directives, file paths, ports, headers, and configuration. Keep zero tracking and conventional sentence case.

## 4. Component Stylings

Primary buttons are rectangular green actions. Secondary actions use a 1px border; tertiary actions are underlined links; dangerous operations use a separate red semantic token and confirmation. Documentation groups remain flat rows or columns, not floating cards. Notices use black or light gray bands with explicit severity text. Inputs are square and labeled. The mobile menu uses a familiar menu icon with an accessible name.

## 5. Layout Principles

Use a 1040px centered shell and 760px prose measure. Keep the wordmark, major project routes, and current notices visible early. Dense lists may use two columns on desktop and one on mobile. Separate sections with rules and spacing instead of large decorative bands.

## 6. Shapes & Radius Scale

Use 0px for documentation groups and notices, 2px for controls, 3px for compact menus, and at most 6px for a modal. Pills are reserved for release or severity metadata.

## 7. Depth & Elevation

Keep the main page flat. Use no card shadows. A temporary menu or modal may use a small shadow and a clear border, but technical content should remain aligned to the page plane.

## 8. Interaction & Motion

Use immediate link feedback, 80ms button states, and 140ms menus. Focus is a 2px green or black outline with 2px offset depending on surface contrast. Reduced motion removes smooth scrolling and menu transforms.

## 9. Accessibility & A11y

Black on white provides strong reading contrast. Green actions need sufficient weight and white labels; inline links need underlines. Advisories must include severity and date in text. Configuration examples require accessible labels and copy controls. Preserve semantic lists, headings, skip links, and 44px mobile targets.

## 10. Responsive Behavior

Below 900px, stack multi-column project lists. Below 640px, collapse navigation, keep the NGINX mark visible, allow code to scroll inside its own region, and preserve 16px body text. The source audit showed no horizontal overflow; implementations should maintain that behavior.

## 11. Content & Voice

Use operational verbs: "Read documentation", "Download NGINX", "View security advisories", and "Open source". State versions, affected branches, file names, and commands. Avoid vague performance claims without a linked technical basis.

## 12. Dark Mode & Theming

The audited homepage is light-only with a black announcement surface. A dark reader mode requires explicit background, text, green, link, code, border, and advisory tokens. Do not extend the black notice band into a one-note dark theme.

## 13. Lineage & Influences

NGINX follows Unix daemon documentation, web-server manuals, and long-lived open-source project indexes. Its recognizable system comes from a single green identity color attached to direct technical information, not from decorative infrastructure imagery.

## 14. Do's and Don'ts

**Do**
- Keep NGINX green restrained and consistent.
- Surface security and release context.
- Make configuration copyable.
- Use rules and spacing for hierarchy.
- Keep controls square and labeled.
- Preserve conventional links.
- Stack lists cleanly on mobile.
- Keep notices explicit.

**Don't**
- Do not create a glossy SaaS dashboard.
- Do not put every link inside a card.
- Do not use black for ordinary body surfaces.
- Do not use green as the only status cue.
- Do not animate server diagrams continuously.
- Do not hide version information.
- Do not clip directives.
- Do not use large rounded containers.

## 15. Agent Prompt Guide

**Quick colors:** background #ffffff; text #000000; NGINX green #009639; surface #f2f2f2; border #d9d9d9; notice #1f1f1f; link #0066cc.

**Example prompts**
- Create an NGINX documentation index with a white ground, green identity, and square project lists.
- Design a black security notice band with explicit severity, version, and one text action.
- Build a configuration reference with copyable directives and restrained gray separators.
- Create a responsive download page that stacks cleanly below 900px.

**Iteration guide:** order technical routes first; apply the green identity; set square spacing and rules; add advisory state; verify mobile and code overflow; then remove unnecessary radius and shadow.
