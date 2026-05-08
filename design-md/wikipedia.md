---
name: Wikipedia
tagline: System-default information design — Linux Libertine serif headings, Vector skin, deliberate non-branding for the encyclopedia of record.
updated_at: 2026-05-08T00:00:00.000Z
published_at: 2026-05-08T00:00:00.000Z
author: webdesignhot
source_url: https://www.wikipedia.org
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [media]
tags: [light, structured, serif, minimal, dense, editorial]
preview_swatch: ['#ffffff', '#3366cc', '#202122']
related: [archive-org, theatlantic, theguardian]
description: 'Wikipedia''s site is the rare brand whose design philosophy is **deliberately non-branded**. The canvas is white, headings sit in Linux Libertine (a free serif by Free Software Foundation contributors) at 24–48px, and the only chromatic accent is "Wikilink Blue" `#3366cc` — preserved from the early-2000s MediaWiki default. The Vector skin (current default) was last refreshed in 2023, but the visual DNA traces directly to the 2002 wiki origin: serif headings, blue links, footnote markers, info-boxes in pale-gray. Where every other media brand chose ownership of their design language, Wikipedia chose **encyclopedic transparency** — the design gets out of the way of the content. Voice is institutional-neutral: "[edit]", "Citation needed", "This article is a stub". The whole brand reads as the Britannica of the open web — authoritative, public-good, intentionally not exciting.'

colors:
  bg: '#ffffff'
  bg-soft: '#f8f9fa'
  bg-warm: '#fefefe'
  surface: '#ffffff'
  surface-soft: '#f8f9fa'
  surface-strong: '#eaecf0'
  brand: '#3366cc'
  brand-hover: '#2a4b91'
  brand-pressed: '#1f3870'
  brand-deep: '#162d56'
  brand-tint: '#dde6f0'
  on-brand: '#ffffff'
  text: '#202122'
  text-strong: '#101114'
  text-muted: '#54595d'
  text-soft: '#72777d'
  text-faint: '#a2a9b1'
  text-on-brand: '#ffffff'
  link: '#3366cc'
  link-visited: '#795cb2'
  link-hover: '#447ff5'
  link-red: '#dd3333'
  selected-bg: '#dde6f0'
  border: '#a2a9b1'
  border-strong: '#54595d'
  border-soft: '#eaecf0'
  border-brand: '#3366cc'
  infobox-header: '#eaecf0'
  citation-needed-orange: '#cc6633'
  stub-template: '#cee0f5'
  success: '#14866d'
  warning: '#fc3'
  danger: '#dd3333'
  info: '#3366cc'

typography:
  display:
    family: '"Linux Libertine", "Georgia", "Times New Roman", serif'
    weights: [400, 700]
  body:
    family: '"sans-serif", "Helvetica Neue", "Helvetica", "Arial", system-ui, -apple-system, sans-serif'
    weights: [400, 500, 700]
  mono:
    family: '"Consolas", "Inconsolata", "Andale Mono", "Lucida Console", "DejaVu Sans Mono", monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 48, weight: 400, lineHeight: 1.15, tracking: '0',        family: display }
    display-xl:      { size: 38, weight: 400, lineHeight: 1.2,  tracking: '0',        family: display }
    display-lg:      { size: 32, weight: 400, lineHeight: 1.25, tracking: '0',        family: display }
    h1:              { size: 28, weight: 400, lineHeight: 1.3,  tracking: '0',        family: display }
    h2:              { size: 22, weight: 400, lineHeight: 1.35, tracking: '0',        family: display }
    h3:              { size: 18, weight: 700, lineHeight: 1.4,  tracking: '0',        family: body }
    h4:              { size: 16, weight: 700, lineHeight: 1.45, tracking: '0',        family: body }
    body-lg:         { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body:            { size: 14, weight: 400, lineHeight: 1.6,  tracking: '0',        family: body }
    body-sm:         { size: 13, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    label:           { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0',        family: body }
    button:          { size: 14, weight: 400, lineHeight: 1.0,  tracking: '0',        family: body }
    caption:         { size: 11, weight: 400, lineHeight: 1.4,  tracking: '0',        family: body }
    footnote:        { size: 12, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    citation:        { size: 11, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }

radius:
  none: 0
  micro: 1
  sm: 2
  md: 4
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 56, 80]

layout:
  page-width: 1680
  prose-width: 880
  header-height: 50

motion:
  ease-standard: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
  duration-fast: 100
  duration-standard: 150
  duration-slow: 220
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 480
  tablet: 768
  desktop: 1280
  wide: 1680

shadows:
  card: 'none'
  card-hover: 'none'
  modal: '0 8px 24px rgba(0, 0, 0, 0.16)'

accessibility:
  contrast-text-on-bg: 14.8
  contrast-text-on-brand: 5.1
  focus-ring: '2px solid #3366cc + 1px outset gap'
  reduced-motion-honored: true

components:
  button-primary: { bg: brand, text: on-brand, padding: '6px 12px', radius: 2, font: button }
  button-secondary: { bg: bg-soft, text: text, padding: '6px 12px', radius: 2, border: '1px solid border' }
  button-ghost: { bg: transparent, text: brand, padding: '4px 8px' }
  card: { bg: bg-soft, radius: 2, padding: 12, border: '1px solid border' }
  pill: { bg: surface-strong, text: text, radius: 2, padding: '2px 6px', font: 'caption' }
  infobox: { bg: bg-soft, radius: 2, padding: 12, border: '1px solid border', font: 'body-sm' }
  input: { bg: bg, border: '1px solid border', text: text, radius: 2, padding: '6px 10px', focus-border: brand }
  citation-needed: { bg: 'transparent', text: citation-needed-orange, font: 'caption', text-decoration: 'underline dotted' }

lineage:
  summary: 'Wikipedia''s design philosophy is deliberately non-branded — the encyclopedia of record built on the wiki software origin (Ward Cunningham, 1995; Wikipedia 2001). The Vector skin (current default since 2010, refreshed 2023) preserves visual DNA from the 2002 MediaWiki origin: Linux Libertine serif headings, Wikilink Blue `#3366cc`, footnote markers, info-boxes in pale-gray. Where every other media brand chose ownership of their design language, Wikipedia chose encyclopedic transparency — the design gets out of the way of the content. Linux Libertine was specifically chosen as a free libre serif (no licensing fees, GPL-compatible), reinforcing the open-knowledge philosophy. Voice is institutional-neutral: "[edit]", "Citation needed", "This article is a stub". The brand reads as the Britannica of the open web.'
  influences:
    - { name: 'Ward Cunningham wiki origin (1995)', role: 'wiki software lineage shaping editable-everywhere instinct', url: 'https://en.wikipedia.org/wiki/Wiki' }
    - { name: 'Linux Libertine (Free Software Foundation)', role: 'free libre serif aligned with open-knowledge philosophy', url: 'http://www.linuxlibertine.org' }
    - { name: 'Encyclopædia Britannica (15th edition typography)', role: 'reference-encyclopedia design lineage', url: 'https://www.britannica.com' }
    - { name: 'MediaWiki Vector skin (2010, 2023 refresh)', role: 'current visual default preserving 2002 DNA', url: 'https://www.mediawiki.org/wiki/Skin:Vector' }
    - { name: 'Wikimedia Foundation design system', role: 'public-good design language for non-commercial encyclopedia', url: 'https://design.wikimedia.org' }
---

## 1. Visual Theme & Atmosphere

Wikipedia's site is the rare brand whose design philosophy is **deliberately non-branded**. The canvas is white `#ffffff`, headings sit in Linux Libertine (a free serif by Free Software Foundation contributors) at 22–48px, body in system-default sans (BlinkMacSystemFont / Segoe UI / Helvetica). The only chromatic accent is **Wikilink Blue** `#3366cc` — preserved from the early-2000s MediaWiki default.

The Vector skin (current default since 2010, refreshed 2023) preserves visual DNA from the 2002 MediaWiki origin: serif headings, blue links, footnote markers, info-boxes in pale-gray. Where every other media brand chose ownership of their design language, Wikipedia chose **encyclopedic transparency** — the design gets out of the way of the content.

Linux Libertine was chosen specifically as a **free libre serif** (GPL-compatible, no licensing fees), reinforcing the open-knowledge philosophy. Body uses system-default sans for the same reason — no webfont download, faster TTFB, works on every device including text-mode browsers.

Voice is institutional-neutral: "[edit]", "Citation needed", "This article is a stub", "Disambiguation". CTAs are 2px-radius rectangles with system-blue. Cards use 0-2px radius with hairline borders. The whole brand reads as **the Britannica of the open web** — authoritative, public-good, intentionally not exciting.

**Key Characteristics:**
- White canvas
- Wikilink Blue `#3366cc` (only chromatic accent)
- Linux Libertine serif for display headings (free libre license)
- System-default sans for body (no webfont)
- 0–2px radius on UI (utilitarian-rectangular)
- Body 14px line-height 1.6 (dense reference content)
- Footnote markers `[1]`, `[citation needed]` first-class
- Pale-gray infoboxes for structured data
- Visited-link purple `#795cb2`, red links for missing pages
- Light-only canvas (Vector 2023 has dark mode opt-in)
- Non-branded voice

## 2. Color Palette & Roles

### Primary
- **Background** (`#ffffff`): white.
- **Bg Soft** (`#f8f9fa`): infobox + section-header background.
- **Text** (`#202122`): body. Slightly warm dark.
- **Text Strong** (`#101114`): emphasized.

### Brand — Wikilink Blue
- **Brand** (`#3366cc`): links + brand mark + primary CTA.
- **Brand Hover** (`#2a4b91`), **Pressed** (`#1f3870`), **Deep** (`#162d56`).
- **Brand Tint** (`#dde6f0`): selection wash.

### Link Palette (semantic)
- **Link** (`#3366cc`): unvisited links.
- **Link Visited** (`#795cb2`): purple for visited.
- **Link Hover** (`#447ff5`): brighter blue on hover.
- **Link Red** (`#dd3333`): red link = missing page.

### Annotation Accents
- **Citation Needed Orange** (`#cc6633`): "[citation needed]" tag.
- **Stub Template** (`#cee0f5`): pale-blue band on stub-article banners.

### Surface
- **Surface** (`#ffffff`), **Surface Soft** (`#f8f9fa`), **Surface Strong** (`#eaecf0`).

### Borders
- **Border** (`#a2a9b1`): hairline.
- **Border Strong** (`#54595d`): emphasis.
- **Border Soft** (`#eaecf0`): infobox interior dividers.

### Semantic
- success `#14866d`, warning `#fc3` (yellow), danger `#dd3333`, info brand.

## 3. Typography Rules

### Font Family
- **Display (Serif)**: Linux Libertine. Falls back to Georgia → Times New Roman → serif.
- **Body**: system-ui sans (`sans-serif`, `Helvetica Neue`, `Helvetica`, `Arial`, system stacks). No custom webfont.
- **Mono**: Consolas / Inconsolata / system mono for code samples.

### Hierarchy

| Role | Font | Size | Weight | LH | Tracking |
|------|------|------|--------|-----|----------|
| display-hero | Libertine | 48 | 400 | 1.15 | 0 |
| display-lg | Libertine | 32 | 400 | 1.25 | 0 |
| h1 | Libertine | 28 | 400 | 1.3 | 0 |
| h2 | Libertine | 22 | 400 | 1.35 | 0 |
| h3 | system sans | 18 | 700 | 1.4 | 0 |
| h4 | system sans | 16 | 700 | 1.45 | 0 |
| body-lg | system sans | 16 | 400 | 1.6 | 0 |
| body | system sans | 14 | 400 | 1.6 | 0 |
| label | system sans | 12 | 400 | 1.4 | 0 |
| button | system sans | 14 | 400 | 1.0 | 0 |
| footnote | system sans | 12 | 400 | 1.5 | 0 |
| citation | system sans | 11 | 400 | 1.5 | 0 |

### Principles
- **Linux Libertine for display H1-H2**, system sans for H3+ and body.
- **400 weight on display** — encyclopedic, not bold.
- **Mixed case everywhere** — never all-caps in content.
- **No custom webfonts** — performance + open-knowledge alignment.
- **Body 14px** — denser reference-content density.
- **Tracking always 0** — system defaults.

## 4. Component Stylings

### Buttons (3 variants — small, 2px radius)

**Primary** — Wikilink Blue:
- bg `#3366cc`, text white, 14px system sans 400 (regular weight, not Bold)
- Padding 6×12, **radius 2** (very gentle rectangular)
- Hover: bg `#2a4b91`

**Secondary** — bordered:
- bg `bg-soft`, text dark, 1px gray border, radius 2

**Ghost**: bg transparent, text blue, padding 4×8 (tiny — like wiki edit links).

### Cards / Infoboxes (the brand's signature)
- bg `#f8f9fa` (pale gray), 2px radius, 12px pad
- 1px gray border, no shadow
- Header row in `surface-strong` darker gray
- Body uses 13-14px system sans

### Pills (rare — used for namespaces, tags)
- bg `surface-strong`, text dark, 2px radius (NOT pill — wiki UI is rectangular)
- 11px caption font

### Inputs
- bg white, 1px gray border, radius 2, padding 6×10
- Focus: border blue

### Navigation
- 50px sticky header (compact), white bg, hairline bottom
- Wikipedia wordmark left (puzzle-globe + serif "Wikipedia"), top tabs (Article / Talk / Read / Edit / View history) center, search + account right

### Citation markers
- Inline `<sup><a>[1]</a></sup>` — 11px superscript blue link
- "[citation needed]" — 11px orange dotted-underline

## 5. Layout Principles

- Base 4px, 24-56px between sections
- Page max width **1680px** (Vector 2023 — wider than typical)
- Article prose width 880px
- Sidebar TOC fixed-width 200px
- Infoboxes float right of opening prose

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| None | 0 | full-width banners |
| Micro | 1 | indicators |
| Standard | 2 | **default for buttons, cards, inputs** |
| Comfortable | 4 | tooltips |
| Pill | 9999 | rare; namespace pills only |

## 7. Depth & Elevation

| Level | Treatment |
|-------|-----------|
| 0 | none | default |
| 1 | hairline border | cards, infoboxes |
| 2 | none | hover changes color, not shadow |
| 3 | none | featured uses border-thickness |
| 4 | `0 8px 24px rgba(0,0,0,0.16)` modal |

### Shadow Philosophy
The brand commits to **zero shadows on UI**. Hairline borders + color shifts do all the work. Modals are the only exception.

## 8. Interaction & Motion

- Standard ease, fast durations (100-220ms)
- No hover transforms — clicks fire instantly
- Edit-mode toggle: instant, no transition
- TOC scrollspy: smooth-scroll on click

Reduced motion disables smooth-scroll fallback.

## 9. Accessibility & A11y

- text on bg: `#202122` on `#ffffff` = **14.8:1** AAA
- on-brand on brand: white on Wikilink Blue = **5.1:1** AA
- 2px Wikilink Blue focus ring + 1px outset

Wikipedia is one of the most rigorously accessible sites on the web. Every article uses semantic HTML5 sectioning, table-of-contents `<nav>`, infobox `<table>` with proper headers. Citation markers are `<a>` with full bibliographic info in footnote target. Image alt text is editor-provided + community-reviewed.

## 10. Responsive Behavior

mobile <479: hero 48→24; sidebar TOC stacks above content; infobox stacks below opening section. tablet 480-767: 1-up still, infobox floats. desktop+: full sidebar TOC + main + infobox layout.

44×44 min touch targets on edit / discussion / cite links.

## 11. Content & Voice

### Tone
**Institutional-neutral.** Authoritative, footnoted, never opinionated. Voice is the encyclopedia editor who has been doing this since 2003.

### Microcopy patterns
- Section actions: **"[edit]"** / **"[edit source]"** — bracketed, lowercase
- Stubs: **"This article is a stub. You can help Wikipedia by expanding it."**
- Citations: **"[citation needed]"** — orange dotted-underline
- Disambiguation: **"X (disambiguation)"**
- Errors: **"There was a problem providing the content you requested."**
- Warnings: **"This article may contain undue weight…"**

### CTA verb conventions
- **[edit] / Read / View / Search**
- Avoid: any aspirational or marketing language

## 12. Dark Mode & Theming

**Vector 2023 introduced opt-in dark mode** — bg `#202122`, text `#eaecf0`, brand blue unchanged. The default for unauthenticated users is light. The brand is anchored to white canvas; dark mode is a user-preference, not brand.

## 13. Lineage & Influences

Wikipedia's design philosophy is deliberately non-branded — the encyclopedia of record built on the wiki software origin. Vector skin (default since 2010, refreshed 2023) preserves 2002 MediaWiki visual DNA: Linux Libertine serif headings, Wikilink Blue, footnote markers, pale-gray infoboxes.

Linux Libertine chosen as free libre serif (GPL-compatible) — reinforces open-knowledge philosophy.

**Named influences:**
- **Ward Cunningham wiki origin (1995)** — wiki software lineage
- **Linux Libertine (FSF)** — free libre serif
- **Encyclopædia Britannica** — reference-encyclopedia typography
- **MediaWiki Vector skin** — 2010, 2023 refresh
- **Wikimedia Foundation design system** — public-good design language

## 14. Do's and Don'ts

### Do
- **Linux Libertine for display H1-H2.**
- **System-default sans for body** — no custom webfonts.
- **Wikilink Blue `#3366cc` for links + primary CTA only.**
- **0-2px radius on UI** — utilitarian-rectangular.
- **Hairline borders, no shadows** on UI.
- **Body 14px line-height 1.6** — reference density.
- **`[edit]` / `[citation needed]` markers first-class.**
- **Visited-link purple `#795cb2`** — preserve.
- **Mixed case everywhere** — never all-caps.

### Don't
- **Don't add custom webfonts.** Open-knowledge mandates system fonts.
- **Don't substitute Wikilink Blue.**
- **Don't round corners 4+** — encyclopedia is rectangular.
- **Don't add gradients on CTA.**
- **Don't add a friendly mascot.**
- **Don't use marketing voice.** Institutional-neutral only.
- **Don't add drop shadows on UI.** Hairlines and color do all elevation.
- **Don't all-caps headlines.**

## 15. Agent Prompt Guide

### Quick Color Reference
- bg: `#ffffff`
- text: `#202122` / strong `#101114`
- brand (Wikilink Blue): `#3366cc` / hover `#2a4b91`
- link-visited: `#795cb2` (purple)
- link-red: `#dd3333` (missing-page red)
- citation-needed: `#cc6633`
- border: `#a2a9b1` / soft `#eaecf0`

### Example Component Prompts

> Build a Wikipedia-style article header: white canvas, 28px Linux Libertine serif H1 article title, 14px system sans dek "From Wikipedia, the free encyclopedia". Tab row below ("Article / Talk / Read / Edit / View history") in 14px sans with active-tab underline.

> Design an infobox: pale-gray `#f8f9fa` bg, 2px radius, 12px pad, 1px gray border. Header row darker gray with image cover top. Body in 13px system sans with 1px row dividers.

> Render an inline citation: superscript `[1]` blue link in 11px system sans. Hover: bg `#dde6f0`. Click jumps to footnote section.

> Build a Wikipedia-style search box: white bg, 1px gray border, 2px radius, 6×10 pad, 14px sans placeholder "Search Wikipedia". Focus border Wikilink Blue.

> Design a "[citation needed]" marker: 11px sans orange `#cc6633` text "[citation needed]" with dotted underline. Hover: bg `#fff4e8`.

> Render a stub-template banner: pale blue `#cee0f5` bg, 2px radius, 12×16 pad, "This article is a stub. You can help Wikipedia by expanding it." in 14px sans, with edit link.

### Iteration Guide

1. **White canvas + Wikilink Blue + Linux Libertine + system sans body.**
2. **0-2px radius — encyclopedia is rectangular.**
3. **No custom webfonts** — system stacks only.
4. **Body 14px / 1.6** — reference density.
5. **Footnote markers `[1]`, `[citation needed]` first-class.**
6. **Hairline borders + color shifts for all elevation** — no shadows.
7. **Institutional-neutral voice** — "[edit]", "Citation needed", never marketing.
8. **Reject custom fonts, gradients, drop shadows, mascots, all-caps headlines.**
