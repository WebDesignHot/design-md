---
name: "Git"
tagline: "Distributed version control with warm paper and direct technical routes."
updated_at: 2026-08-23T11:57:22.636Z
published_at: 2026-08-23T11:57:22.636Z
author: webdesignhot
source_url: "https://git-scm.com/"
spec: webdesignhot/0.2
profile: catalog
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, version-control, developer-tools, distributed, documentation]
preview_swatch: ["#f0efe7", "#f05033", "#4e443c"]
related: [github, gitlab, jenkins]
description: "Git's public site combines a warm paper-like ground, dark brown reading text, the red-orange Git identity, teal links, compact navigation, and immediately useful routes into downloads, documentation, and the Pro Git book. The result feels established, practical, and distinctly developer-owned."

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
  bg: "#f0efe7"
  surface: "#ffffff"
  text: "#4e443c"
  brand: "#f05033"
  on-brand: "#ffffff"
  border: "#d8d4c8"
  text-soft: "#6b6259"
  link: "#0388a6"
  dark: "#323330"
  code-bg: "#ebe9e1"

typography:
  display:
    family: "Adelle, Georgia, serif"
    weights: [400, 600, 700]
  body:
    family: "Helvetica Neue, Arial, sans-serif"
    weights: [400, 500, 600]
  mono:
    family: "ui-monospace, SFMono-Regular, Menlo, monospace"
    weights: [400, 500]
  scale:
    display-hero: { size: 42, weight: 600, lineHeight: 1.1, tracking: '0', family: display }
    display-lg: { size: 34, weight: 600, lineHeight: 1.15, tracking: '0', family: display }
    h1: { size: 30, weight: 600, lineHeight: 1.2, tracking: '0', family: display }
    h2: { size: 26, weight: 600, lineHeight: 1.25, tracking: '0', family: display }
    h3: { size: 21, weight: 600, lineHeight: 1.3, tracking: '0', family: display }
    body-lg: { size: 18, weight: 400, lineHeight: 1.55, tracking: '0', family: body }
    body: { size: 15, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 13, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    label: { size: 13, weight: 600, lineHeight: 1.4, tracking: '0', family: body }
    caption: { size: 12, weight: 400, lineHeight: 1.4, tracking: '0', family: body }

radius:
  micro: 2
  sm: 3
  md: 5
  lg: 8
  xl: 12
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 80]

layout:
  page-width: 980
  prose-width: 720
  header-height: 72

motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 100
  duration-standard: 180
  duration-slow: 260
  reduced-motion: 'remove transforms and keep navigation changes immediate'

breakpoints:
  mobile: 640
  tablet: 900
  desktop: 1100
  wide: 1280

components:
  button-primary: { bg: brand, text: on-brand, padding: '9px 14px', radius: 3 }
  button-ghost: { bg: transparent, text: link, border: border, padding: '9px 14px', radius: 3 }
  card: { bg: surface, border: border, radius: 5, padding: 20 }
  input: { bg: surface, border: border, text: text, radius: 3, padding: '8px 10px' }

lineage:
  summary: "Recorded from the live Git homepage during the 2026-08-23 catalog audit."
  influences:
    - name: "Git public site"
      role: "Supplied the warm paper ground, red-orange identity, teal links, book-and-manual hierarchy, and compact download routes."
      url: "https://git-scm.com/"
---

## 1. Visual Theme & Atmosphere

Git feels like a well-used technical book rather than a cloud product. The warm #f0efe7 ground, brown-black text, serif headings, and quiet texture create continuity with printed manuals. Red-orange identifies Git itself; teal identifies navigation and reference links.

The interface should make downloads, documentation, the Pro Git book, and community routes immediately inspectable. Keep the tone confident and understated.

**Key Characteristics**
- Warm paper background
- Red-orange Git identity
- Teal links with clear affordance
- Serif headings and practical sans-serif body copy
- Manual, book, and command references
- Compact bordered content groups
- Minimal motion and modest radii

## 2. Color Palette & Roles

Use #f0efe7 for the page, #4e443c for reading, #f05033 for brand moments and primary actions, and #0388a6 for links. White supports book, download, and search surfaces. The dark #323330 is appropriate for terminal or utility regions. Avoid replacing the warm ground with pure white across the entire page.

## 3. Typography Rules

Use Adelle or Georgia for display and section titles, Helvetica Neue or Arial for controls and body copy, and monospace for commands, refs, hashes, and configuration. Hero text stays around 42px; body text is 15-16px with generous line height. Keep title casing natural and do not use condensed all-caps marketing type.

## 4. Component Stylings

Primary buttons use Git orange with white text. Secondary actions are bordered warm-white buttons; tertiary actions are teal text links; destructive controls use explicit warning copy rather than borrowing brand orange. Cards resemble book or manual modules with thin warm-gray borders. Search fields are compact and labeled. Navigation groups About, Documentation, Downloads, and Community without nested card chrome.

## 5. Layout Principles

Use a centered 980px shell, a 720px reading column, and an optional compact side rail for book chapters or manual sections. Keep download and documentation routes above the fold. Full-width texture may establish the page ground, while content remains aligned to a simple vertical rhythm.

## 6. Shapes & Radius Scale

Use 3px controls, 5px content modules, and 8px menus. Square code blocks and manual tables preserve technical character. Pills are limited to versions or platform labels.

## 7. Depth & Elevation

Use borders and subtle paper contrast before shadows. Menus may use a small shadow; book covers and screenshots may cast a natural image shadow. Do not float every reference module above the page.

## 8. Interaction & Motion

Use 100ms link feedback and 180ms menus. A copy action should confirm briefly without moving surrounding content. Focus uses a 2px teal outline with 2px offset. Reduced motion removes smooth scrolling and any image translation.

## 9. Accessibility & A11y

Teal links need underlines in prose, orange buttons require white text at accessible sizes, and terminal samples need a text label and copy control. Preserve semantic chapter navigation, current-page indication, skip links, and keyboard search. Never communicate branch, conflict, or status with color alone.

## 10. Responsive Behavior

Below 900px, move the side rail into a chapter disclosure. Below 640px, stack download choices, keep body copy at 16px, and bound long commands or hashes with horizontal scrolling. The warm background and visible first action remain unchanged.

## 11. Content & Voice

Use direct verbs: "Download for macOS", "Read the Book", "Open the Reference", and "View source". State operating system, version, and command consequences. Explain Git concepts with concrete objects such as commit, branch, remote, and working tree.

## 12. Dark Mode & Theming

The audited default is the warm light theme. A dark theme may use #323330 as the ground with separately tuned text, teal, orange, border, and code tokens. Do not simply invert the paper texture or illustrations.

## 13. Lineage & Influences

Git draws from printed technical manuals, Unix command references, and open-source project pages. The design connects source control to a book-like learning path, making durable documentation more prominent than campaign messaging.

## 14. Do's and Don'ts

**Do**
- Preserve the warm paper ground.
- Use Git orange for identity.
- Keep manuals and downloads visible.
- Underline links in prose.
- Show command context and outcomes.
- Label platform and version.
- Use compact, readable modules.
- Reflow chapter navigation on mobile.

**Don't**
- Do not turn the site into generic dark DevOps SaaS.
- Do not use orange for every link.
- Do not hide commands inside screenshots.
- Do not truncate hashes without a reveal path.
- Do not animate branch diagrams continuously.
- Do not nest cards.
- Do not remove visible focus.
- Do not make the typography oversized.

## 15. Agent Prompt Guide

**Quick colors:** page #f0efe7; text #4e443c; Git orange #f05033; link teal #0388a6; white surface #ffffff; border #d8d4c8; terminal #323330.

**Example prompts**
- Create a Git download page with a warm paper ground, orange identity, and exact platform context.
- Design a Pro Git chapter view with serif headings, teal links, and a stable chapter rail.
- Build a command reference with copyable examples, visible outcomes, and bounded long hashes.
- Create a compact community index without decorative SaaS cards.

**Iteration guide:** set the paper ground; establish book-like hierarchy; add orange identity and teal links; expose command context; verify chapter reflow; then test focus and contrast.
