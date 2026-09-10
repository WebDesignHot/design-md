---
name: "Redis"
tagline: "Real-time data infrastructure with editorial scale and electric contrast."
updated_at: 2026-08-23T11:57:28.156Z
published_at: 2026-08-23T11:57:28.156Z
author: webdesignhot
source_url: "https://redis.io/"
spec: webdesignhot/0.2
profile: catalog
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, database, cache, real-time, agents]
preview_swatch: ["#091a23", "#ff4438", "#ffffff"]
related: [postgresql, mongodb, docker]
description: "Redis now presents real-time data and agent infrastructure through a dark navy editorial system, oversized condensed statements, coral-red identity, lime highlights, Space Grotesk utility text, and dense interactive product panels. Preserve the high-energy contrast while keeping code, latency, and data state inspectable."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-lime
  muted: text-soft
  border: border
  ring: accent-lime

colors:
  bg: "#091a23"
  surface: "#152b36"
  text: "#ffffff"
  brand: "#ff4438"
  on-brand: "#091a23"
  border: "#38505a"
  text-soft: "#b7c8cf"
  accent-lime: "#c5f74f"
  surface-rose: "#351d22"
  link: "#ffffff"
  light-surface: "#f4f1ea"

typography:
  display:
    family: "Tungsten, Impact, Arial Narrow, sans-serif"
    weights: [400, 500, 600]
  body:
    family: "Space Grotesk, system-ui, -apple-system, sans-serif"
    weights: [400, 500, 600]
  mono:
    family: "ui-monospace, SFMono-Regular, Menlo, monospace"
    weights: [400, 500]
  scale:
    display-hero: { size: 100, weight: 400, lineHeight: 0.85, tracking: '-0.01em', family: display }
    display-lg: { size: 72, weight: 400, lineHeight: 0.9, tracking: '0', family: display }
    h1: { size: 56, weight: 400, lineHeight: 0.95, tracking: '0', family: display }
    h2: { size: 44, weight: 400, lineHeight: 1.0, tracking: '0', family: display }
    h3: { size: 26, weight: 500, lineHeight: 1.2, tracking: '0', family: body }
    body-lg: { size: 20, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    label: { size: 14, weight: 500, lineHeight: 1.4, tracking: '0', family: body }
    caption: { size: 12, weight: 500, lineHeight: 1.35, tracking: '0', family: body }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 16
  xl: 28
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72

motion:
  ease-standard: 'cubic-bezier(0.2, 0.8, 0.2, 1)'
  duration-fast: 120
  duration-standard: 220
  duration-slow: 420
  reduced-motion: 'replace transform-led reveals with immediate state changes'

breakpoints:
  mobile: 640
  tablet: 960
  desktop: 1280
  wide: 1536

components:
  button-primary: { bg: brand, text: on-brand, padding: '11px 18px', radius: 9999 }
  button-ghost: { bg: transparent, text: text, border: border, padding: '11px 18px', radius: 9999 }
  card: { bg: surface, border: border, radius: 16, padding: 24 }
  input: { bg: surface, border: border, text: text, radius: 8, padding: '10px 14px' }

lineage:
  summary: "Recorded after delayed client rendering from the live Redis homepage during the 2026-08-23 catalog audit."
  influences:
    - name: "Redis public site"
      role: "Supplied the dark navy ground, coral identity, lime emphasis, condensed editorial hero, Space Grotesk utilities, and interactive agent framing."
      url: "https://redis.io/"
---

## 1. Visual Theme & Atmosphere

Redis is dark, editorial, and high velocity. The live homepage uses a navy-black ground, white reading text, coral identity, lime emphasis, and a condensed 100px headline that reads like a magazine cover. Interactive agent and data panels provide the technical counterweight to that visual volume.

The experience should feel fast without becoming noisy. Use the oversized type for one decisive statement, then return to inspectable product state, code, metrics, and concrete tasks.

**Key Characteristics**
- Dark navy default canvas
- Coral-red Redis identity
- Acid-lime emphasis used sparingly
- Condensed editorial display type
- Space Grotesk utility and body copy
- Large interactive agent or data panels
- Pill actions contrasted with square technical regions
- Strong mobile reflow without horizontal overflow

## 2. Color Palette & Roles

Use #091a23 for the page, #152b36 for technical panels, and white for primary reading. Redis coral #ff4438 owns the logo and primary action; lime #c5f74f identifies key evidence, selected states, or focus. The rose surface #351d22 supports special product labels. Never spread coral and lime evenly across the page.

## 3. Typography Rules

Use a narrow display face such as Tungsten or Impact for the single major statement, with 100px/0.85 line height on wide screens and about 80px on mobile as observed. Use Space Grotesk at 14-20px for navigation, controls, and explanations. Monospace carries prompts, commands, latency, keys, and returned data. Keep the display face out of dense operational copy.

## 4. Component Stylings

Primary buttons are coral pills with dark labels; secondary pills use transparent navy with a light border; tertiary actions are underlined white links; destructive actions use explicit danger language rather than the brand token. Technical cards use dark surfaces, restrained borders, 16px radius, and fixed regions for code or response state. Product labels may use the rose capsule. Inputs require persistent labels, clear validation, and lime focus.

## 5. Layout Principles

Use a 1280px shell with one large editorial composition followed by full-width product bands. Pair the headline with a stable interactive surface rather than a decorative image. Feature grids should use clear tracks and avoid nested cards. Keep the product, first evidence point, and action visible in the first viewport.

## 6. Shapes & Radius Scale

Use 8px for fields and code controls, 16px for technical panels, 28px for major product canvases, and full pills for actions and compact labels. Terminal and data regions may remain square inside a rounded outer panel to preserve technical clarity.

## 7. Depth & Elevation

Create depth with dark surface contrast and thin borders before shadows. A major interactive panel may use a soft deep shadow, but data rows remain flat. Light overlays need a dark scrim, a close action, focus trapping, and focus restoration.

## 8. Interaction & Motion

Use 120ms control feedback, 220ms panel changes, and at most 420ms for one editorial reveal. Agent output must never stream so quickly that it becomes unreadable. Focus is a 2px lime ring. Reduced motion replaces text and panel transforms with immediate final states and disables smooth scrolling.

## 9. Accessibility & A11y

White on navy is the base contrast pair. Verify dark text on coral before using the primary action; lime always needs a text or icon state. Interactive prompts require labels, status announcements, and a way to pause streamed output. Use semantic landmarks, keyboard-operable menus, alt text for meaningful imagery, and at least 44px touch targets.

## 10. Responsive Behavior

Below 960px, stack editorial text and the interactive panel. Below 640px, keep the condensed headline near 80px only when words fit; otherwise reduce it without scaling by viewport width. Stack actions, bound code overflow, preserve fixed navigation height, and keep the audited no-overflow behavior.

## 11. Content & Voice

Redis copy is brief, provocative, and evidence-led: "Build with Redis", "Explore Redis Iris", "Run the query", and "Read the report". Follow every bold claim with measurable latency, throughput, context, or a concrete developer task. Errors state what failed and whether retry is safe.

## 12. Dark Mode & Theming

Dark is the canonical audited theme, not an alternate skin. A light theme uses the separate light-surface token and must retune coral, lime, borders, code, and text rather than invert colors. Preserve the same component hierarchy in both modes.

## 13. Lineage & Influences

Redis combines database console clarity with contemporary editorial technology campaigns. The condensed cover-line typography creates urgency; the interactive panels restore credibility through visible state. The tension between expressive type and exact data is the defining system.

## 14. Do's and Don'ts

**Do**
- Keep navy as the dominant ground.
- Reserve coral for identity and primary action.
- Use lime for evidence, focus, or selection.
- Pair claims with inspectable data.
- Keep technical panels stable.
- Announce streamed state accessibly.
- Reflow the hero on mobile.
- Respect reduced motion.

**Don't**
- Do not use coral, lime, and navy in equal amounts.
- Do not set body copy in the condensed display face.
- Do not stream text without pause or completion state.
- Do not hide latency or error context.
- Do not nest technical cards.
- Do not use blurred glow decoration.
- Do not scale type continuously with viewport width.
- Do not treat the dark canvas as atmospheric only.

## 15. Agent Prompt Guide

**Quick colors:** background #091a23; surface #152b36; text #ffffff; Redis coral #ff4438; lime #c5f74f; border #38505a; rose surface #351d22.

**Example prompts**
- Create a Redis hero with a navy ground, condensed white statement, coral action, and a real interactive data panel.
- Design an agent prompt console with stable dimensions, readable streaming state, and lime focus.
- Build a product grid using dark bordered panels without nested cards or decorative glow.
- Create a mobile composition that preserves the bold headline while stacking the technical evidence.

**Iteration guide:** lock the dark hierarchy; set one editorial statement; add coral and lime roles; build inspectable technical state; verify streaming accessibility; then test mobile fit and reduced motion.
