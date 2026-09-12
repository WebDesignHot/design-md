---
name: "WireGuard"
tagline: "Cryptographic confidence through compact panels and restrained identity."
updated_at: 2026-08-23T11:57:31.087Z
published_at: 2026-08-23T11:57:31.087Z
author: webdesignhot
source_url: "https://www.wireguard.com/"
spec: webdesignhot/0.2
profile: catalog
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, vpn, networking, security, cryptography]
preview_swatch: ["#fdfdfd", "#88171a", "#2c3e50"]
related: [openssl, cloudflare, nginx]
description: "WireGuard uses a white patterned technical canvas, deep slate navigation and panel headers, a burgundy dragon identity, Lato typography, a compact side index, and bordered explanation panels. The system communicates security through legibility and small attack-surface thinking rather than visual intimidation."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: brand-soft
  muted: text-soft
  border: border
  ring: brand

colors:
  bg: "#fdfdfd"
  surface: "#edf0f1"
  text: "#2c3e50"
  brand: "#88171a"
  on-brand: "#ffffff"
  border: "#7f8c8d"
  text-soft: "#5b6770"
  nav: "#34495e"
  on-nav: "#ffffff"
  brand-soft: "#f2dede"

typography:
  display:
    family: "Lato, system-ui, -apple-system, sans-serif"
    weights: [400, 500, 700]
  body:
    family: "Lato, system-ui, -apple-system, sans-serif"
    weights: [400, 500, 700]
  mono:
    family: "ui-monospace, SFMono-Regular, Menlo, monospace"
    weights: [400, 500]
  scale:
    display-hero: { size: 39, weight: 500, lineHeight: 1.15, tracking: '0', family: display }
    display-lg: { size: 32, weight: 500, lineHeight: 1.2, tracking: '0', family: display }
    h1: { size: 28, weight: 500, lineHeight: 1.2, tracking: '0', family: display }
    h2: { size: 24, weight: 500, lineHeight: 1.25, tracking: '0', family: display }
    h3: { size: 18, weight: 500, lineHeight: 1.3, tracking: '0', family: display }
    body-lg: { size: 17, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 15, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 13, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    label: { size: 14, weight: 500, lineHeight: 1.4, tracking: '0', family: body }
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
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 48, 64]

layout:
  page-width: 1160
  prose-width: 780
  header-height: 60

motion:
  ease-standard: 'linear'
  duration-fast: 80
  duration-standard: 140
  duration-slow: 200
  reduced-motion: 'remove smooth scrolling and menu transforms'

breakpoints:
  mobile: 640
  tablet: 960
  desktop: 1200
  wide: 1440

components:
  button-primary: { bg: brand, text: on-brand, padding: '8px 14px', radius: 2 }
  button-ghost: { bg: transparent, text: brand, border: border, padding: '8px 14px', radius: 2 }
  card: { bg: bg, border: border, radius: 3, padding: 16 }
  input: { bg: bg, border: border, text: text, radius: 2, padding: '7px 10px' }

lineage:
  summary: "Recorded from the live WireGuard homepage during the 2026-08-23 catalog audit."
  influences:
    - name: "WireGuard public site"
      role: "Supplied the burgundy dragon mark, slate navigation, patterned white ground, side index, Lato text, and bordered security panels."
      url: "https://www.wireguard.com/"
---

## 1. Visual Theme & Atmosphere

WireGuard feels compact, reviewable, and cryptographically serious. A slate navigation bar frames a white technical page with a faint line pattern, a large burgundy wordmark, a small side index, and repeated explanation panels with dark slate headers.

The visual system mirrors the product promise: small surface area, explicit concepts, and little ornamental complexity. Security comes from understandable structure, not dark cinematic styling.

**Key Characteristics**
- Burgundy dragon and wordmark
- Deep slate navigation and panel headers
- White patterned technical canvas
- Compact side index
- Lato typography
- Bordered explanation panels
- Square controls and minimal motion

## 2. Color Palette & Roles

Use #fdfdfd for the page, #2c3e50 for reading, #34495e for navigation and panel headers, and #88171a for identity, links, and selected emphasis. Light gray #edf0f1 supports the side index. Burgundy should not be used as a generic error color without an explicit label.

## 3. Typography Rules

Use Lato throughout at 15px body size and 1.5 line height. Headings are modest, 18-39px, with medium weight and zero tracking. Monospace is reserved for public keys, interface names, commands, and configuration. Do not imitate the wordmark with oversized body typography.

## 4. Component Stylings

Primary buttons are compact burgundy rectangles. Secondary actions use white with a slate or burgundy border; tertiary actions are underlined burgundy links; destructive controls use explicit danger text. Concept panels use white bodies, 1px slate borders, and dark headers with white labels. Side navigation is a flat gray list. Inputs need labels, examples, validation text, and a visible burgundy focus outline.

## 5. Layout Principles

Use a 1160px shell with a 220px side index and a 780px content column. The mark, one-sentence explanation, and conceptual overview should appear early. Stack panels vertically and align their headers. On smaller screens, move the side index into a labeled disclosure before the content.

## 6. Shapes & Radius Scale

Use 0-2px for navigation and controls, 3px for panels, and 4-6px only for menus or dialogs. Keep headers and content edges aligned. Pills are only for protocol or platform metadata.

## 7. Depth & Elevation

The page is nearly flat. Panel borders and slate headers establish depth; shadows are unnecessary. Overlays may use one subtle shadow, but configuration and protocol explanations remain on the page plane.

## 8. Interaction & Motion

Use 80ms hover feedback and 140ms menu disclosure. Anchor navigation should preserve context and avoid dramatic scrolling. Focus is a 2px burgundy outline with 2px offset. Reduced motion removes smooth scrolling and any menu transforms.

## 9. Accessibility & A11y

Slate on white provides strong contrast; white labels on slate headers remain readable. Mark the current concept in text, label every copy control, and prevent public keys from being read as one unbroken word. The logo needs alternative text, the background line pattern is decorative, and mobile targets must reach 44px.

## 10. Responsive Behavior

Below 960px, collapse the side index and keep the main content full width. Below 640px, stack navigation, preserve 15-16px copy, wrap the wordmark safely, and bound keys and commands with horizontal scrolling. Keep the audited no-overflow behavior.

## 11. Content & Voice

Use exact, sober language: "Install WireGuard", "Read the conceptual overview", "Generate keys", and "Open source code". Define cryptographic terms in place, state platform assumptions, and avoid claims that imply a configuration is secure without its prerequisites.

## 12. Dark Mode & Theming

The audited site is light-only. A dark reader theme needs independent tokens for keys, code, slate headers, burgundy identity, links, borders, and focus. Do not transform the whole experience into black security theater.

## 13. Lineage & Influences

WireGuard draws from protocol specifications, network appliance manuals, and compact Unix documentation. Its burgundy identity gives the page distinction, while the slate panel system keeps cryptographic concepts reviewable and sequential.

## 14. Do's and Don'ts

**Do**
- Keep the burgundy identity restrained.
- Use slate headers for conceptual grouping.
- Show configuration and keys as text.
- Define security terms.
- Keep the side index predictable.
- Preserve compact density.
- Reflow safely on mobile.
- Label copy and navigation controls.

**Don't**
- Do not use a black cinematic security theme.
- Do not hide configuration behind illustrations.
- Do not imply security from color alone.
- Do not place panels inside cards.
- Do not animate cryptographic diagrams continuously.
- Do not clip public keys.
- Do not over-round controls.
- Do not use vague privacy claims.

## 15. Agent Prompt Guide

**Quick colors:** background #fdfdfd; text #2c3e50; WireGuard burgundy #88171a; navigation #34495e; surface #edf0f1; border #7f8c8d; white #ffffff.

**Example prompts**
- Create a WireGuard concept page with a burgundy identity, slate headers, and a compact side index.
- Design a key-generation guide with copyable commands, platform context, and explicit security notes.
- Build stacked protocol panels with white bodies, slate headers, and no shadow.
- Create a mobile navigation disclosure that preserves concept order and 44px targets.

**Iteration guide:** order concepts first; establish slate hierarchy; add burgundy identity; make keys and commands inspectable; collapse the side index; then verify contrast, focus, and overflow.
