---
name: "Docker"
tagline: "Container workflows framed by crisp blue, practical cards, and real terminal state."
updated_at: 2026-08-23T11:57:45.685Z
published_at: 2026-08-23T11:57:45.685Z
author: webdesignhot
source_url: "https://www.docker.com/"
spec: webdesignhot/0.2
profile: catalog
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, containers, devops, developer-tools, infrastructure]
preview_swatch: ["#f9fafb", "#2560ff", "#2c333f"]
related: [kubernetes, jenkins, gitlab]
description: "Docker's current homepage pairs a near-white canvas and bright Docker blue with Repro display type, Inter body copy, a live-looking dark terminal, compact capability cards, and a restrained navigation system. Preserve the inspectable container workflow and security context instead of treating the terminal as decorative atmosphere."

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
  bg: "#f9fafb"
  surface: "#ffffff"
  text: "#2c333f"
  brand: "#2560ff"
  on-brand: "#ffffff"
  border: "#d9dee7"
  text-soft: "#5d6876"
  brand-soft: "#dce8ff"
  focus: "#003db5"
  terminal: "#0c1528"
  on-terminal: "#e8eefb"
  banner: "#07105f"

typography:
  display:
    family: "Repro, Inter, system-ui, sans-serif"
    weights: [400, 500, 600]
  body:
    family: "Inter, system-ui, -apple-system, sans-serif"
    weights: [400, 500, 600, 700]
  mono:
    family: "ui-monospace, SFMono-Regular, Menlo, monospace"
    weights: [400, 500]
  scale:
    display-hero: { size: 51, weight: 500, lineHeight: 1.05, tracking: '-0.03em', family: display }
    display-lg: { size: 42, weight: 500, lineHeight: 1.1, tracking: '-0.02em', family: display }
    h1: { size: 36, weight: 500, lineHeight: 1.15, tracking: '-0.01em', family: display }
    h2: { size: 30, weight: 500, lineHeight: 1.2, tracking: '0', family: display }
    h3: { size: 22, weight: 600, lineHeight: 1.25, tracking: '0', family: body }
    body-lg: { size: 20, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body: { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-sm: { size: 14, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    label: { size: 14, weight: 600, lineHeight: 1.4, tracking: '0', family: body }
    caption: { size: 12, weight: 500, lineHeight: 1.4, tracking: '0', family: body }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1180
  prose-width: 720
  header-height: 60

motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 360
  reduced-motion: 'show terminal and progress states without animated typing or transforms'

breakpoints:
  mobile: 640
  tablet: 960
  desktop: 1200
  wide: 1440

components:
  button-primary: { bg: brand, text: on-brand, padding: '11px 18px', radius: 8 }
  button-ghost: { bg: surface, text: text, border: border, padding: '11px 18px', radius: 8 }
  card: { bg: surface, border: border, radius: 12, padding: 24 }
  input: { bg: surface, border: border, text: text, radius: 8, padding: '10px 14px' }

lineage:
  summary: "Recorded from the live Docker homepage during the 2026-08-23 catalog audit."
  influences:
    - name: "Docker public site"
      role: "Supplied the near-white canvas, #2560ff action blue, Repro and Inter typography, dark terminal evidence, restrained cards, and agent-security framing."
      url: "https://www.docker.com/"
---

## 1. Visual Theme & Atmosphere

Docker is crisp, product-focused, and technically demonstrative. A near-white canvas and blue headline sit beside a dark terminal that shows an actual install or sandbox state. A slim dark-blue announcement band and quiet navigation frame the experience, while capability cards continue below the hero.

The terminal is evidence, not atmosphere. Keep command, progress, security boundary, and result readable. The first viewport should show Docker, the current offer, one useful action, and enough of the next capability section to establish continuity.

**Key Characteristics**
- Near-white page canvas
- Bright Docker blue headline and actions
- Repro display and Inter body type
- Dark inspectable terminal
- Compact capability cards with dark icon blocks
- Restrained top navigation and announcement band
- Stable dimensions for progress and code state
- Responsive two-column hero that stacks cleanly

## 2. Color Palette & Roles

Use #f9fafb for the page, white for cards, #2c333f for reading, and #2560ff for the headline, links, and primary actions. The dark terminal #0c1528 carries code and progress; #07105f is reserved for the announcement band. Use pale blue only for selection or contextual grouping.

## 3. Typography Rules

Use Repro for 36-51px display headlines and Inter for all body and interface text. The audited desktop hero uses 51px/500 with tight tracking; mobile uses about 36px. Use monospace for commands, image names, progress, policy output, and logs. Do not use negative tracking outside large display text.

## 4. Component Stylings

Primary buttons are Docker blue with white labels and 8px radius. Secondary buttons are white with a gray border; tertiary actions are underlined text links; destructive actions use separate danger tokens and confirmation. Capability cards use a white surface, 12px radius, thin border, and one dark icon block. Terminal components have fixed dimensions, copy controls, labeled output, progress text, and a final state. Navigation uses familiar search and account icons with accessible names.

## 5. Layout Principles

Use an 1180px shell. The hero is a balanced text-and-terminal grid without a decorative outer card. Follow it with an unframed capability band whose cards use stable equal tracks. Preserve a hint of the next section in the first viewport. Keep prose near 720px and operational tables wider when necessary.

## 6. Shapes & Radius Scale

Use 8px controls, 12px capability cards, and 16px major tools. The terminal window can use 12px radius with a square code interior. Pills are limited to status, platform, or compact announcement labels.

## 7. Depth & Elevation

Use thin borders and a small shadow for capability cards and the terminal window. Dark icon blocks may appear inset through contrast rather than blur. Avoid cards inside cards and avoid decorative blue glow around technical state.

## 8. Interaction & Motion

Use 120ms controls, 200ms menus and tabs, and up to 360ms for one progress transition. Animated typing must have a final state, pause behavior, and no layout shift. Focus is a 2px #003db5 ring with 2px offset. Reduced motion shows the completed terminal state immediately.

## 9. Accessibility & A11y

Verify white on #2560ff and text on near-white. Terminal state needs semantic text, not color or moving bars alone. Progress announces meaningful updates without flooding assistive technology. Icons need names or tooltips, cookie controls need equal keyboard access, and every mobile target reaches 44px.

## 10. Responsive Behavior

Below 960px, stack hero text above the terminal and reduce capability grids. Below 640px, use a 36px headline, stack actions, preserve terminal width within the viewport, and allow code to scroll inside it. Keep card tracks stable so labels and icon states do not shift layout.

## 11. Content & Voice

Use outcome-led, technically specific copy: "Get Started", "Install Docker", "Open the docs", and "Run in a sandbox". Explain image provenance, isolation, policy, network, and filesystem consequences. Security claims require a visible mechanism or linked detail.

## 12. Dark Mode & Theming

The audited page is light with dark terminal and banner surfaces. A full dark theme requires separate card, terminal, blue, border, text, and semantic tokens. Do not treat the terminal palette as the entire application theme.

## 13. Lineage & Influences

Docker combines developer-tool landing pages with terminal demonstrations and container-dashboard discipline. Its strongest pattern is the side-by-side promise and proof: plain-language outcome on one side, inspectable command state on the other.

## 14. Do's and Don'ts

**Do**
- Show a real command or state in the terminal.
- Keep Docker blue consistent.
- Use Repro only for display.
- Preserve stable progress dimensions.
- Explain isolation and security mechanisms.
- Keep capability cards shallow.
- Stack the hero safely on mobile.
- Provide reduced-motion final states.

**Don't**
- Do not use the terminal as a decorative black box.
- Do not animate typing without controls.
- Do not nest cards.
- Do not use blue glow decoration.
- Do not hide command consequences.
- Do not scale fonts continuously with viewport width.
- Do not make security claims without evidence.
- Do not crowd the first viewport with every product.

## 15. Agent Prompt Guide

**Quick colors:** page #f9fafb; surface #ffffff; text #2c333f; Docker blue #2560ff; focus #003db5; terminal #0c1528; banner #07105f; border #d9dee7.

**Example prompts**
- Create a Docker hero with blue Repro display type and a real dark terminal showing stable install progress.
- Design a capability band with shallow white cards and dark icon blocks, without nested card containers.
- Build a container security panel that explains image provenance, policy, network, and filesystem state.
- Create a mobile hero that stacks text and terminal while preserving readable code and 44px actions.

**Iteration guide:** establish promise and proof; set the blue hierarchy; build terminal states; add shallow capability cards; verify security copy; then test mobile fit, focus, and reduced motion.
