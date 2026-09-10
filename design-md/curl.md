---
name: "curl"
tagline: "A universal transfer tool with direct navigation and protocol-first density."
updated_at: 2026-08-23T11:57:40.612Z
published_at: 2026-08-23T11:57:40.612Z
author: webdesignhot
source_url: "https://curl.se/"
spec: webdesignhot/0.2
profile: catalog
quality: curated
featured: false
categories: [oss, dev-tools]
tags: [oss, networking, cli, http, developer-tools]
preview_swatch: ["#ffffff", "#173b5b", "#000000"]
related: [openssl, git, nginx]
description: "curl's current homepage celebrates thirty years with a large navy-and-green wordmark, a navy navigation bar, white technical canvas, bold Arial copy, protocol tables, and a visible sponsor rail. Preserve its unusually direct, standards-oriented information density and recognizable slash motif."

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-green
  muted: text-soft
  border: border
  ring: link

colors:
  bg: "#ffffff"
  surface: "#e7e7e7"
  text: "#000000"
  brand: "#173b5b"
  on-brand: "#ffffff"
  border: "#222222"
  text-soft: "#4f4f4f"
  accent-green: "#285c50"
  link: "#4040ff"
  sponsor-bg: "#efefef"

typography:
  display:
    family: "Arial, Helvetica, sans-serif"
    weights: [400, 700]
  body:
    family: "Arial, Helvetica, sans-serif"
    weights: [400, 700]
  mono:
    family: "ui-monospace, SFMono-Regular, Menlo, monospace"
    weights: [400, 500]
  scale:
    display-hero: { size: 56, weight: 700, lineHeight: 1.05, tracking: '0', family: display }
    display-lg: { size: 40, weight: 700, lineHeight: 1.1, tracking: '0', family: display }
    h1: { size: 34, weight: 700, lineHeight: 1.15, tracking: '0', family: display }
    h2: { size: 30, weight: 700, lineHeight: 1.2, tracking: '0', family: display }
    h3: { size: 24, weight: 700, lineHeight: 1.25, tracking: '0', family: display }
    body-lg: { size: 20, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    body: { size: 18, weight: 400, lineHeight: 1.45, tracking: '0', family: body }
    body-sm: { size: 15, weight: 400, lineHeight: 1.4, tracking: '0', family: body }
    label: { size: 15, weight: 700, lineHeight: 1.35, tracking: '0', family: body }
    caption: { size: 13, weight: 400, lineHeight: 1.35, tracking: '0', family: body }

radius:
  micro: 0
  sm: 2
  md: 4
  lg: 6
  xl: 8
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 48, 64]

layout:
  page-width: 1000
  prose-width: 760
  header-height: 48

motion:
  ease-standard: 'linear'
  duration-fast: 80
  duration-standard: 120
  duration-slow: 180
  reduced-motion: 'remove nonessential transitions and smooth scrolling'

breakpoints:
  mobile: 640
  tablet: 900
  desktop: 1100
  wide: 1280

components:
  button-primary: { bg: brand, text: on-brand, padding: '8px 12px', radius: 2 }
  button-ghost: { bg: transparent, text: link, border: border, padding: '8px 12px', radius: 2 }
  card: { bg: sponsor-bg, border: border, radius: 4, padding: 16 }
  input: { bg: bg, border: border, text: text, radius: 2, padding: '7px 9px' }

lineage:
  summary: "Recorded from the live curl homepage during its 30-year presentation in the 2026-08-23 catalog audit."
  influences:
    - name: "curl public site"
      role: "Supplied the navy navigation, navy-and-green anniversary identity, white technical canvas, protocol tables, bold Arial copy, and sponsor rail."
      url: "https://curl.se/"
---

## 1. Visual Theme & Atmosphere

curl is direct, celebratory, and deeply technical. A slim navy navigation bar sits above a very large thirty-year curl graphic, followed immediately by a plain-language description, protocol support, downloads, documentation, and a visible sponsor rail.

The design should keep the transfer tool itself larger than surrounding promotion. Dense tables and lists are a feature when they remain legible, searchable, and responsive.

**Key Characteristics**
- White technical canvas
- Navy navigation and core identity
- Green secondary identity
- Large anniversary or project mark
- Bold Arial headings
- Dense protocol and capability tables
- Visible sponsor rail
- Square, minimally animated interface

## 2. Color Palette & Roles

Use #173b5b for navigation, primary actions, and core identity. Green #285c50 is a supporting brand accent, not a second action hierarchy. Black carries body copy; conventional blue #4040ff identifies inline links. Gray surfaces support protocol tables and sponsor content.

## 3. Typography Rules

Use Arial or Helvetica throughout. The observed body can be unusually large at 18-20px; preserve that legibility around dense technical material. Use 30px h2 and 24px h3 headings, with monospace for commands, flags, protocols, URLs, and response examples. Keep letter spacing at zero.

## 4. Component Stylings

Primary buttons are square navy actions; secondary buttons are white with a navy border; tertiary actions are underlined blue links; destructive actions require a separate semantic red. Protocol tables use navy or green headers, clear row boundaries, and text labels. Sponsor modules remain visually secondary. Navigation uses text links rather than icon-only controls. Inputs include explicit labels and strong blue focus.

## 5. Layout Principles

Use a 1000px centered shell with a 760px main column and narrow sponsor rail where space permits. Keep the project mark and direct definition in the first viewport. On documentation pages, prioritize command examples and stable navigation over the anniversary art.

## 6. Shapes & Radius Scale

Use 0-2px for navigation and controls, 4px for sponsor or table containers, and at most 8px for an overlay. Tables, code, and protocol blocks remain square. Pills are reserved for version or protocol status.

## 7. Depth & Elevation

Use borders, fills, and typographic weight rather than shadows. The sponsor rail and tables can use gray fills; the main content stays flat. Menus may use a small shadow only when they overlap other content.

## 8. Interaction & Motion

Use immediate link feedback, 80ms button states, and 120ms menu changes. Copy actions confirm without moving layout. Focus is a 2px blue outline with 2px offset. Reduced motion removes smooth scrolling and any anniversary graphic movement.

## 9. Accessibility & A11y

Keep blue links underlined, identify protocol support in text, and provide accessible table headers. Command samples need labels and copy buttons; URLs must wrap or scroll without widening the page. Sponsor logos require meaningful names, and navigation must be keyboard operable.

## 10. Responsive Behavior

Below 900px, move the sponsor rail below the main content. Below 640px, collapse navigation, scale the project graphic with a bounded image container, keep 18px reading text where possible, and make protocol tables horizontally scrollable within their region.

## 11. Content & Voice

Use literal, standards-oriented copy: "Download curl", "Read the documentation", "Browse libcurl", and "Get help". State protocol, operating system, version, and command consequences. Avoid vague networking language when an exact URL, header, or option is available.

## 12. Dark Mode & Theming

The audited page is light-only. A dark reader theme needs dedicated navy, green, link, table, code, border, and sponsor tokens. Do not invert the anniversary mark or collapse protocol color distinctions.

## 13. Lineage & Influences

curl belongs to Internet protocol references, Unix manual pages, and standards documentation. The current anniversary treatment adds celebration without displacing the project's defining qualities: broad protocol support, portability, and exact technical access.

## 14. Do's and Don'ts

**Do**
- Keep the tool definition visible.
- Use navy as the main identity.
- Keep protocol support searchable.
- Make commands copyable.
- Preserve large readable body text.
- Keep sponsors secondary.
- Reflow tables safely.
- Underline inline links.

**Don't**
- Do not turn protocols into decorative icons only.
- Do not hide libcurl behind product copy.
- Do not clip long URLs.
- Do not over-round tables.
- Do not animate the anniversary mark continuously.
- Do not use green as a second primary action.
- Do not bury downloads.
- Do not replace exact standards language with slogans.

## 15. Agent Prompt Guide

**Quick colors:** background #ffffff; text #000000; curl navy #173b5b; curl green #285c50; link #4040ff; surface #e7e7e7; border #222222.

**Example prompts**
- Create a curl homepage with a navy navigation bar, large project mark, and immediate tool definition.
- Design a protocol support table with accessible headers and bounded mobile scrolling.
- Build a command example with URL context, flags, output, and a labeled copy action.
- Create a responsive page that moves sponsors below the technical content under 900px.

**Iteration guide:** establish tool and protocol hierarchy; set navy and green roles; build tables and command state; keep sponsors secondary; verify mobile overflow; then test link and focus visibility.
