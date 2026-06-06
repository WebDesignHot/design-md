---
name: Captions
tagline: 'Near-white studio canvas, an Exposure display, and a violet brand keyed off a full crayon-box of CSS color vars.'
updated_at: 2026-05-29T21:43:24.653Z
published_at: 2026-05-29T21:43:24.653Z
author: webdesignhot
source_url: https://www.captions.ai
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, media, saas]
tags: [light, sans, bold, playful, creator]
preview_swatch: ['#ffffff', '#6c4df7', '#ff1476']
related: [descript, framer, linear]
description: 'Captions is an AI video editor that throws out the dark-slab playbook of its category and ships on a near-white studio canvas (`#ffffff`, cooled to `#f5f9fa` / `#eef4f6` on raised surfaces) with charcoal `#1d1f20` text. The display face is a tall, confident sans called **Exposure** (h1 at 48px on the live site, scaling to 80px on the hero); body copy runs in **DenimINK**, a humanist working sans. What makes the brand is not the chrome — the hero CTAs are deliberately quiet grey pills (`#eef4f6`, 9999px) and grey upload tiles (`#f5f9fa`, 12px) — but a sprawling, joyful palette declared as `--color-*` CSS variables: violet `#6c4df7` as the primary accent, then sea `#00d0ff`, sunset `#f99f3f`, barbie-pink `#ff1476`, meadow `#5bf6bb`, yellow `#fcff41`, peach, cloud, lime and a dozen more. It reads like a creator''s sticker pack: the neutral canvas is the wall, and the color vars are what you tack onto it. Where Runway and Pika reach for chrome-on-black and Descript reaches for cream-pink editorial, Captions reaches for a bright, near-white studio with a multi-hue accent system — bold, creator-native, playful, and unmistakably built for people who make short-form video for a living.'

colors:
  # Canvas
  bg: '#ffffff'                          # near-white studio canvas (audit body bg transparent → page white)
  bg-cool: '#f5f9fa'                     # --color-bone / gray-10 — coolest near-white, upload tiles & insets
  surface: '#eef4f6'                     # --color-gray-50 — raised pill / chip surface (the grey CTA chrome)
  surface-100: '#e8eff2'                 # --color-gray-100 / light-gray — nested panel
  surface-150: '#dfe5e7'                 # --color-gray-150 — divider band
  # Text
  text: '#1d1f20'                        # --color-charcoal / gray-900 — primary body + headings
  text-h1: '#2a2c2d'                     # --color-gray-800 — display headings (live h1 color)
  text-strong: '#141515'                 # --color-gray-950 — heaviest text
  text-muted: '#595e5e'                  # --color-gray-600 — secondary copy
  text-soft: '#7e8486'                   # --color-gray / gray-500 — captions, metadata
  text-faint: '#9fa5a7'                  # --color-gray-400 — placeholder, helper
  text-disabled: '#bec3c6'               # --color-gray-300 — disabled microcopy
  # Brand
  brand: '#6c4df7'                       # --color-violet — primary accent (NOTES: audit missed it on grey chrome)
  brand-purple: '#ab88fb'                # --color-purple — soft violet tint, washes & illustration
  brand-dark: '#160f31'                  # --color-dark-purple — deep violet ground for dark blocks
  on-brand: '#ffffff'                    # white label on violet
  # Accent system (the --color-* crayon box — the real brand identity)
  accent-sea: '#00d0ff'                  # --color-sea — cyan, primary cool accent
  accent-sky: '#a6ecff'                  # --color-sky — pale cyan wash
  accent-air: '#effbff'                  # --color-air — faintest cyan tint
  accent-sunset: '#f99f3f'               # --color-sunset — warm orange
  accent-peach: '#ffca9f'                # --color-peach — soft orange wash
  accent-cloud: '#ffcfcf'                # --color-cloud — pale pink wash
  accent-barbie-pink: '#ff1476'          # --color-barbie-pink — hot magenta, loudest accent
  accent-pink: '#ff9bb2'                 # --color-pink — soft rose
  accent-meadow: '#5bf6bb'               # --color-meadow — mint green
  accent-green: '#46e7b4'                # --color-green — teal-green
  accent-lime: '#aaff4e'                 # --color-lime-green — electric lime
  accent-yellow: '#fcff41'               # --color-yellow — highlighter yellow
  accent-mustard: '#ffdd33'              # --color-mustard — warm yellow
  # Interactive
  link: '#6c4df7'                        # violet links in body
  link-hover: '#160f31'                  # deep-violet on hover
  cta-chrome-bg: '#eef4f6'               # grey pill CTA bg — intentionally quiet chrome
  cta-tile-bg: '#f5f9fa'                 # grey upload-tile bg
  # Borders
  border: '#dfe5e7'                      # --color-gray-150 — default hairline
  border-strong: '#d0d6d7'              # --color-gray-200 — stronger separation
  border-subtle: '#e8eff2'              # --color-gray-100 — quietest rule
  border-brand: 'rgba(108, 77, 247, 0.32)' # violet-tinted focus hairline
  # Semantic (declared as HSL bg vars in production)
  success-bg: '#ebfdf2'                  # hsl(143,85%,96%) — soft mint wash
  success-text: '#0e663b'                # --color-dark-green
  info-bg: '#eff7ff'                     # hsl(208,100%,97%) — soft sky wash
  info-text: '#00b7e4'                   # --color-medium-blue
  warning-bg: '#fffcef'                  # hsl(49,100%,97%) — soft cream wash
  warning-text: '#e07300'                # --color-orange
  danger-bg: '#fff0f0'                   # hsl(359,100%,97%) — soft red wash
  danger-text: '#d00000'                 # --color-red

typography:
  display:
    family: 'Exposure, system-ui, -apple-system, sans-serif'
    weights: [500, 600, 700]
    opentype-features: ['liga', 'kern']
  body:
    family: 'DenimINK, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['liga', 'kern']
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
    opentype-features: ['tnum', 'zero']
  scale:
    display-hero:    { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    display-lg:      { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    h1:              { size: 48, weight: 700, lineHeight: 1.1,  tracking: '-0.018em', family: display }
    h2:              { size: 32, weight: 600, lineHeight: 1.2,  tracking: '-0.012em', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.3,  tracking: '0',        family: body }
    h5:              { size: 17, weight: 600, lineHeight: 1.35, tracking: '0',        family: body }
    eyebrow:         { size: 13, weight: 600, lineHeight: 1.4,  tracking: '0.08em',   family: body, transform: uppercase }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    button:          { size: 15, weight: 600, lineHeight: 1.0,  tracking: '0',        family: body }
    mono:            { size: 13, weight: 400, lineHeight: 1.5,  tracking: '0',        family: mono }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96]

layout:
  page-width: 1280
  prose-width: 720
  site-gutter: 'clamp(20px, 5vw, 56px)'
  header-height: 64
  grid-columns: 12
  section-rhythm: '80-120px'

components:
  button-primary:
    background: '#6c4df7'
    text: '#ffffff'
    padding: '12px 22px'
    radius: 9999
    border: 'none'
    font: 'DenimINK 600 / 15px'
    hover-bg: '#160f31'
    use: 'Primary action — violet pill, the brand accent applied to the strongest CTA'
  button-chrome:
    background: '#eef4f6'
    text: '#2a2c2d'
    padding: '12px 22px'
    radius: 9999
    border: 'none'
    font: 'DenimINK 600 / 15px'
    hover-bg: '#e8eff2'
    use: 'The quiet grey hero pill (Add style) — chrome, not brand; lets the color system carry identity'
  button-tile:
    background: '#f5f9fa'
    text: '#1d1f20'
    padding: '16px 20px'
    radius: 12
    border: '1px dashed #d0d6d7'
    font: 'DenimINK 500 / 16px'
    hover-bg: '#eef4f6'
    use: 'Upload / drag-drop tile (Import or drag your video) — grey, dashed, inviting'
  button-ghost:
    background: 'transparent'
    text: '#1d1f20'
    padding: '10px 16px'
    border: 'none'
    font: 'DenimINK 500 / 15px'
    hover-text: '#6c4df7'
    use: 'Quiet third action — nav links, footer'
  card:
    background: '#f5f9fa'
    border: '1px solid #dfe5e7'
    radius: 12
    padding: '24px'
    use: 'Default feature card — coolest near-white, hairline border, barely lifted'
  card-accent:
    background: '#effbff'
    border: 'none'
    radius: 16
    padding: '24px'
    use: 'Color-washed feature card — one accent tint per card (air/sky/peach/cloud/meadow)'
  input:
    background: '#ffffff'
    border: '1px solid #dfe5e7'
    radius: 8
    padding: '10px 14px'
    font: 'DenimINK 400 / 16px'
    placeholder-color: '#9fa5a7'
    focus-ring: '0 0 0 2px rgba(108, 77, 247, 0.32)'
    use: 'Form fields, search, email capture'
  badge-eyebrow:
    background: 'transparent'
    text: '#7e8486'
    padding: '0'
    font: 'DenimINK 600 / 13px / uppercase / 0.08em'
    use: 'Section eyebrow — no chrome, just type'
  pill-accent:
    background: '#6c4df7'
    text: '#ffffff'
    padding: '5px 12px'
    radius: 9999
    font: 'DenimINK 600 / 12px'
    use: 'NEW / status chip — violet fill, or any single accent var for category tags'
  nav-link:
    background: 'transparent'
    text: '#1d1f20'
    padding: '8px 12px'
    font: 'DenimINK 500 / 15px'
    hover-text: '#6c4df7'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — transitions become opacity-only, durations halved'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: 'rgba(29, 31, 32, 0.04) 0 1px 2px'
  standard: 'rgba(29, 31, 32, 0.06) 0 4px 12px'
  lift: 'rgba(29, 31, 32, 0.08) 0 12px 28px -10px'
  elevated: 'rgba(29, 31, 32, 0.12) 0 24px 48px -16px'
  ring: '0 0 0 2px rgba(108, 77, 247, 0.32)'

accessibility:
  contrast-text-on-bg: 15.6                # #1d1f20 on #ffffff — AAA at all sizes
  contrast-h1-on-bg: 13.1                  # #2a2c2d on #ffffff — AAA at all sizes
  contrast-text-on-brand: 5.0              # #ffffff on #6c4df7 — AA at body sizes / AAA at large
  contrast-muted-on-bg: 6.9                # #595e5e on #ffffff — AA at all sizes
  contrast-soft-on-bg: 4.0                 # #7e8486 on #ffffff — AA at large / metadata only
  focus-ring: '2px violet ring rgba(108, 77, 247, 0.32) with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; tab order matches visual'
  prose-line-length: 'capped at 720px for readability'

dark-mode: 'partial — marketing surface is light-only on the near-white canvas; the in-product editor and select hero blocks invert to a deep-violet/charcoal ground (--color-dark-purple #160f31 / gray-950 #141515). The color-var system is engineered to read on both.'

lineage:
  summary: 'Captions is a New York AI video studio (founded 2021 by Gaurav Misra and Dwight Churchill) whose product turns raw selfie footage into captioned, edited short-form video. Its marketing identity rejects the dark-slab, chrome-on-black register that dominates AI-video competitors (Runway, Pika, Kapwing) and instead ships a bright near-white studio canvas with charcoal text — closer to a creator''s desktop than a developer tool. The defining move is chromatic: rather than one or two brand colors, Captions declares a full crayon box of `--color-*` CSS variables (sea, sky, sunset, cloud, meadow, barbie-pink, yellow, peach, lime, violet, and more) and treats them as a reusable sticker pack scattered across illustrations, category tags, and accent washes. Violet `#6c4df7` is the primary accent that anchors the system, but no single hue owns the page. Crucially, the hero''s functional chrome — the grey upload tile and grey "Add style" pill — is deliberately desaturated so the multi-hue accent system reads as the brand, not the buttons. The display face Exposure is a tall, confident grotesque used at large sizes; DenimINK keeps body copy humanist and friendly. The register is bold, playful, and creator-native: built for people who post for a living, not for an enterprise procurement deck.'
  influences:
    - { name: 'Gaurav Misra (co-founder & CEO, Captions)', role: 'product and brand direction toward a creator-native, color-forward identity', url: 'https://www.captions.ai/about' }
    - { name: 'Figma', role: 'multi-hue named-color system + bright near-white canvas as a creative-tool register', url: 'https://www.figma.com' }
    - { name: 'Descript', role: 'AI-video peer that also rejects dark-slab chrome for a warm, editorial light canvas', url: 'https://www.descript.com' }
    - { name: 'Linear', role: 'tight type + restrained grey chrome that lets accent color do the talking', url: 'https://linear.app' }
    - { name: 'Framer', role: 'playful gradient/accent washes over a clean near-white marketing surface', url: 'https://www.framer.com' }
    - { name: 'Runway / Pika', role: 'chrome-on-black AI-video contemporaries Captions deliberately differentiates against', url: 'https://runwayml.com' }
---

## 1. Visual Theme & Atmosphere

Captions opens on a near-white studio canvas. The page background is white `#ffffff`, cooled to `#f5f9fa` and `#eef4f6` on raised surfaces, and the text is a charcoal `#1d1f20` that reads warm-neutral rather than terminal-cold. Headlines are set in **Exposure** — a tall, confident grotesque sans rendered at 48px on the live hero and scaling up to 80px in the largest display variant — while body copy runs in **DenimINK**, a humanist working sans at 16px on a 1.55 line-height. The first impression is light, roomy, and bright: a creator's desktop with the lights on, not a developer console at midnight.

What makes Captions visually distinctive is its *chromatic strategy*. Most of its category — Runway, Pika, Kapwing, the whole AI-video cohort — reaches for chrome-on-black, neon-on-slate, or moody gradient darkness. Captions does the opposite. It keeps the canvas near-white and then unloads a full crayon box of color as CSS variables: `--color-sea` cyan `#00d0ff`, `--color-sunset` orange `#f99f3f`, `--color-barbie-pink` magenta `#ff1476`, `--color-meadow` mint `#5bf6bb`, `--color-yellow` highlighter `#fcff41`, plus sky, cloud, peach, lime, purple and a dozen more. These hues aren't blended into one gradient identity; they're treated as a reusable sticker pack, dabbed across illustrations, category tags, accent washes, and emoji-adjacent UI flourishes. The violet `#6c4df7` (`--color-violet`) is the primary accent that anchors the system and carries the strongest CTA, but no single color owns the page. The brand *is* the variety.

The most important compositional decision is what is *not* colored. The hero's functional chrome — the "Import or drag your video" upload tile (grey `#f5f9fa`, 12px radius) and the "Add style" pill (grey `#eef4f6`, fully rounded) — is deliberately desaturated. On a lesser site these would be the violet buttons screaming for attention. Here they're quiet grey, because the accent system is doing the identity work. This is a subtle, expert move: the page reads as colorful and energetic even though its load-bearing UI is neutral, because color lives in the decoration layer while chrome stays calm. Read the grey CTAs as plumbing, not personality.

The register is **bold, playful, and creator-native**. Exposure at display sizes feels like a poster headline; the accent palette feels like the stickers and gradients a short-form creator would layer onto their own video. Atmospheric vocabulary that captures the feeling: *near-white studio, crayon-box accents, sticker-pack palette, violet-anchor, grey-chrome-quiet, Exposure-poster-display, DenimINK-humanist-body, creator-desktop, short-form-native, multi-hue-energy, light-and-bright, color-as-decoration.* Captions looks like the tool that the people who live on the For You page would actually want open on their screen.

**Key Characteristics**
- Near-white canvas `#ffffff` cooled to `#f5f9fa` / `#eef4f6` on surfaces — never dark, never pure-grey
- Charcoal text `#1d1f20` — warm-neutral, AAA on white at 15.6:1
- **Exposure** display grotesque at 48px (hero) up to 80px — tall, confident, poster-scale
- **DenimINK** body sans at 16px / 1.55 — humanist, friendly, calm reading texture
- A full `--color-*` crayon box (sea, sunset, barbie-pink, meadow, yellow, sky, cloud, peach, lime, purple) as the real brand identity
- Violet `#6c4df7` as the primary accent that anchors the system without monopolizing it
- Deliberately grey hero chrome (upload tile + "Add style" pill) — chrome is desaturated so color carries the brand
- Color lives in the decoration layer (illustrations, tags, washes); UI chrome stays neutral
- Pill (9999px) and 12px radii dominate — friendly, rounded, never sharp
- Cool grey-blue neutral scale (`#7e8486`, `#9fa5a7`) rather than warm grey
- Bold creator register — short-form-video-native, not enterprise-procurement

## 2. Color Palette & Roles

### Canvas

- **bg** `#ffffff` — the near-white studio canvas, the page's ground. The audit's body bg is transparent, resolving to page white. Never dark.
- **bg-cool** `#f5f9fa` (`--color-bone` / `--color-gray-10`) — coolest near-white; upload tiles, insets, hero work surfaces.
- **surface** `#eef4f6` (`--color-gray-50`) — raised pill / chip surface; this is the grey "Add style" CTA chrome.
- **surface-100** `#e8eff2` (`--color-gray-100` / `--color-light-gray`) — nested panel ground.
- **surface-150** `#dfe5e7` (`--color-gray-150`) — divider band and quiet section separation.

### Text

- **text** `#1d1f20` (`--color-charcoal` / `--color-gray-900`) — primary body and most headings. Warm-neutral near-black.
- **text-h1** `#2a2c2d` (`--color-gray-800`) — the display-heading color sampled live on the hero h1/h2.
- **text-strong** `#141515` (`--color-gray-950`) — the heaviest text, for maximum emphasis.
- **text-muted** `#595e5e` (`--color-gray-600`) — secondary copy, sub-labels.
- **text-soft** `#7e8486` (`--color-gray` / `--color-gray-500`) — captions, metadata, eyebrows.
- **text-faint** `#9fa5a7` (`--color-gray-400`) — placeholder, helper text.
- **text-disabled** `#bec3c6` (`--color-gray-300`) — disabled microcopy.

### Brand

- **brand** `#6c4df7` (`--color-violet`) — the primary accent. Anchors the color system and carries the strongest CTA / link. The audit missed it because the hero chrome is intentionally grey; the brand color lives in the accent layer.
- **brand-purple** `#ab88fb` (`--color-purple`) — soft violet tint for washes and illustration.
- **brand-dark** `#160f31` (`--color-dark-purple`) — deep-violet ground for inverted hero blocks and the violet-hover state.
- **on-brand** `#ffffff` — white label on the violet pill. The high-contrast action pair.

### Accent (the `--color-*` Crayon Box — the real identity)

This is where Captions lives. The accents are deployed one-per-element as a sticker pack, not blended into a single gradient.

- **accent-sea** `#00d0ff` (`--color-sea`) — primary cool accent, electric cyan.
- **accent-sky** `#a6ecff` (`--color-sky`) — pale cyan wash.
- **accent-air** `#effbff` (`--color-air`) — faintest cyan tint for card grounds.
- **accent-sunset** `#f99f3f` (`--color-sunset`) — warm orange, primary warm accent.
- **accent-peach** `#ffca9f` (`--color-peach`) — soft orange wash.
- **accent-cloud** `#ffcfcf` (`--color-cloud`) — pale pink wash.
- **accent-barbie-pink** `#ff1476` (`--color-barbie-pink`) — hot magenta, the loudest accent.
- **accent-pink** `#ff9bb2` (`--color-pink`) — soft rose.
- **accent-meadow** `#5bf6bb` (`--color-meadow`) — mint green.
- **accent-green** `#46e7b4` (`--color-green`) — teal-green.
- **accent-lime** `#aaff4e` (`--color-lime-green`) — electric lime.
- **accent-yellow** `#fcff41` (`--color-yellow`) — highlighter yellow.
- **accent-mustard** `#ffdd33` (`--color-mustard`) — warm yellow.

The discipline: **one accent per element, neutral chrome around it.** A category tag is barbie-pink; the card next to it is air-cyan; the illustration uses sunset and meadow — but the buttons, inputs, and surfaces between them stay grey or white. The variety reads as energy because the canvas absorbs it.

### Interactive

- **link** `#6c4df7` — violet body links.
- **link-hover** `#160f31` — deep-violet on hover.
- **cta-chrome-bg** `#eef4f6` — the grey "Add style" pill. Chrome, not brand — intentionally quiet.
- **cta-tile-bg** `#f5f9fa` — the grey "Import or drag your video" upload tile.

### Neutral Scale

A cool grey-blue ramp (not warm grey): `#f5f9fa` → `#eef4f6` → `#e8eff2` → `#dfe5e7` → `#d0d6d7` → `#bec3c6` → `#9fa5a7` → `#7e8486` → `#595e5e` → `#434647` → `#2a2c2d` → `#1d1f20` → `#141515`. The faint blue lean (B slightly above R/G) keeps the neutrals from feeling like a print document and ties them to the cyan/sky accents.

### Surface & Borders

- **surface-0 (page)** `#ffffff` white.
- **surface-1 (inset)** `#f5f9fa` coolest near-white.
- **surface-2 (chip/card)** `#eef4f6` grey chrome surface.
- **border** `#dfe5e7` (`--color-gray-150`) — default hairline.
- **border-strong** `#d0d6d7` (`--color-gray-200`) — stronger separation, dashed upload-tile edge.
- **border-subtle** `#e8eff2` (`--color-gray-100`) — quietest rule.
- **border-brand** `rgba(108, 77, 247, 0.32)` — violet-tinted focus hairline.

### Shadow Colors

Depth is **near-flat**. Captions leans on tonal layering (white → `#f5f9fa` → `#eef4f6`) and hairlines far more than drop shadows. When a shadow appears it's a soft charcoal-tinted diffuse lift — `rgba(29, 31, 32, 0.04)` to `0.12` — never colored, never hard. The brand never uses neon-glow shadows; color stays in fills and washes, depth stays neutral.

### Semantic

- **success** — bg `#ebfdf2` (soft mint, `hsl(143,85%,96%)`), text `#0e663b` (`--color-dark-green`).
- **info** — bg `#eff7ff` (soft sky, `hsl(208,100%,97%)`), text `#00b7e4` (`--color-medium-blue`).
- **warning** — bg `#fffcef` (soft cream, `hsl(49,100%,97%)`), text `#e07300` (`--color-orange`).
- **danger** — bg `#fff0f0` (soft red, `hsl(359,100%,97%)`), text `#d00000` (`--color-red`).

Each semantic state pulls its text color from a named `--color-*` var and pairs it with a 96–97% lightness wash of the same hue — consistent with the system's habit of treating every color as a named token rather than an ad-hoc value.

## 3. Typography Rules

### Font Family

- **Display**: `Exposure, system-ui, -apple-system, sans-serif` — a tall, confident grotesque used for every heading. Weights 500 / 600 / 700. Poster-scale presence at 48–80px.
- **Body**: `DenimINK, system-ui, -apple-system, sans-serif` — a humanist working sans for body copy and UI. Weights 400 / 500 / 600. Friendly and calm.
- **Mono**: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace` — system mono for code, timecodes, and tabular data.
- **OpenType features**: `liga`, `kern` on Exposure and DenimINK; `tnum`, `zero` on mono for timecodes and stats.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| Display Hero | Exposure | 80px | 700 | 1.0 | -0.03em | Largest hero variant |
| Display Large | Exposure | 56px | 700 | 1.05 | -0.02em | Section intro at scale |
| H1 | Exposure | 48px | 700 | 1.1 | -0.018em | The canonical live hero size |
| H2 | Exposure | 32px | 600 | 1.2 | -0.012em | Major section heading |
| H3 | Exposure | 24px | 600 | 1.25 | -0.005em | Sub-section heading |
| H4 | DenimINK | 20px | 600 | 1.3 | 0 | Card heading (switches to body face) |
| H5 | DenimINK | 17px | 600 | 1.35 | 0 | Inline emphasis heading |
| Eyebrow | DenimINK | 13px | 600 | 1.4 | 0.08em | Uppercase section pre-label |
| Body Large | DenimINK | 18px | 400 | 1.55 | 0 | Lede paragraph |
| Body | DenimINK | 16px | 400 | 1.55 | 0 | Default body copy |
| Body Small | DenimINK | 14px | 400 | 1.5 | 0 | Captions, sidebars |
| Label | DenimINK | 13px | 500 | 1.4 | 0 | UI labels, form labels |
| Caption | DenimINK | 12px | 500 | 1.4 | 0.02em | Image captions, metadata |
| Button | DenimINK | 15px | 600 | 1.0 | 0 | CTA copy |
| Mono / Timecode | Mono | 13px | 400 | 1.5 | 0 | Timecodes, stats, code |

### Principles

- **Two faces, clean split.** Exposure owns display (h1–h3, 24px and up); DenimINK owns body, UI, and smaller headings (h4 and down). The handoff at h4 keeps headings legible at small sizes where a poster grotesque would feel stiff.
- **Exposure is poster-scale or nothing.** The display face earns its tall, confident proportions at 48–80px. Don't deploy it under 24px — that's DenimINK's job.
- **Negative tracking tightens with size.** -0.03em at 80px, -0.018em at 48px, easing to 0 by h3. Large headlines pull together; body copy sits at normal tracking.
- **Heading weight tops out at 700, mostly 600.** H1/display hit 700; h2/h3 sit at 600. Captions doesn't go heavier — the height of Exposure carries presence without extra weight.
- **Body at 16px / 1.55.** Standard, comfortable, web-app-native. Lede paragraphs bump to 18px. Captions stays at the SaaS-standard body size rather than the editorial 17–18px.
- **Eyebrows are uppercase DenimINK at 0.08em tracking.** Section pre-labels are the one place body type gets wide tracking; everything else stays at 0.
- **Tabular data and timecodes go mono.** Stats, durations, and code use the system mono stack with `tnum` so columns align — important for a video tool full of timecodes.

## 4. Component Stylings

### Buttons

**Primary (Violet Pill)**
- Background: `#6c4df7` violet. Text: `#ffffff`, DenimINK 600 / 15px.
- Padding: `12px 22px`. Radius: `9999px` (full pill). No border.
- Hover: bg → `#160f31` deep-violet; transition `240ms ease-standard`.
- Use: The strongest CTA — *Get started, Try Captions free, Sign up.* This is the brand accent applied to action.

**Chrome (Grey Pill)**
- Background: `#eef4f6` grey. Text: `#2a2c2d`, DenimINK 600 / 15px.
- Padding: `12px 22px`. Radius: `9999px`. No border.
- Hover: bg → `#e8eff2`.
- Use: The quiet hero pill (the live "Add style" button). Chrome, not brand — desaturated on purpose so the accent system carries identity.

**Upload Tile (Grey Dashed)**
- Background: `#f5f9fa` coolest near-white. Text: `#1d1f20`, DenimINK 500 / 16px. Border: `1px dashed #d0d6d7`. Radius: `12px`.
- Padding: `16px 20px`.
- Hover: bg → `#eef4f6`; dashed border deepens.
- Use: Drag-drop / file-pick (the live "Import or drag your video" tile). Inviting, neutral, friendly.

**Ghost (Quiet)**
- Background: transparent. Text: `#1d1f20`. No border.
- Padding: `10px 16px`. DenimINK 500 / 15px.
- Hover: text → `#6c4df7` violet.
- Use: Nav links, footer secondary actions.

### Cards

**Default Card**
- Background: `#f5f9fa` coolest near-white. Border: `1px solid #dfe5e7` hairline. Radius: `12px`. Padding: `24px`.
- Shadow: none (tonal lift only).
- Hover: border → `#d0d6d7`; gentle 4px charcoal-tinted shadow.
- Use: Default feature card, barely lifted from the white canvas.

**Accent-Washed Card**
- Background: one accent tint — `#effbff` air, `#a6ecff` sky, `#ffca9f` peach, `#ffcfcf` cloud, or a meadow/sky wash. Border: none. Radius: `16px`. Padding: `24px`.
- Use: Color-forward feature blocks. One tint per card; never mix two accent washes in a single card.

### Inputs / Forms

- Background: `#ffffff`. Border: `1px solid #dfe5e7`. Radius: `8px`. Padding: `10px 14px`.
- Font: DenimINK 400 / 16px. Placeholder: `#9fa5a7`.
- Focus: `0 0 0 2px rgba(108, 77, 247, 0.32)` violet ring, border → `#6c4df7`.
- Error: border → `#d00000`, helper text `#d00000` on `#fff0f0`.
- Helper: caption 12px `#7e8486` below the field.

### Badges, Tags, Pills

**Eyebrow Label** — no chrome, just type. DenimINK 600 / 13px / uppercase / 0.08em, color `#7e8486`. Above section headings.

**Accent Tag** — bg `#6c4df7` violet (or any single `--color-*` accent), text `#ffffff`, radius `9999px`, padding `5px 12px`, DenimINK 600 / 12px. Category and status chips — each can take a different accent hue.

**Soft-Wash Chip** — bg an accent tint (`#effbff` / `#a6ecff` / `#ffca9f`), text the matching darker hue, radius `9999px`. Quieter category labels.

### Navigation

- Header height `64px`. Background `#ffffff` (subtle blur + hairline on scroll).
- Logo: Captions wordmark in charcoal `#1d1f20`.
- Nav links: DenimINK 500 / 15px, color `#1d1f20`, padding `8px 12px`. Hover → `#6c4df7` violet.
- Right-side CTA pair: ghost "Log in" + violet pill "Get started".
- Mobile: hamburger sheet (right-aligned trigger), links stack at 20px DenimINK 600.

### Optional Components

**Tooltip** — bg `#1d1f20` charcoal, text `#ffffff`, radius `8px`, padding `8px 12px`, DenimINK 500 / 13px.

**Modal** — bg `#ffffff`, radius `16px`, shadow `rgba(29, 31, 32, 0.12) 0 24px 48px -16px`, max-width `560px`. White backdrop overlay at ~60% with blur.

**Code / Timecode Block** — Mono 13px, bg `#f5f9fa`, radius `8px`, padding `12px 16px`, border `#e8eff2`. Inline code: same font, bg `#eef4f6`, padding `2px 6px`, radius `4px`.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 0, 4, 8, 12, 16, 24, 32, 48, 64, 96 — a compact, web-app-native ramp.
- **Density observation**: Captions runs moderately tight for a marketing site — closer to a product UI than a magazine. Headlines sit on 48–64px margins; intra-section spacing uses 16–24px.

### Grid & Container

- **Page max width**: `1280px`.
- **Site gutter**: `clamp(20px, 5vw, 56px)`.
- **Grid**: 12 columns. Hero blocks span full width; feature rails span 4–6 columns; the product preview / upload surface anchors the hero right.
- **Hero treatment**: near-white ground, Exposure h1 at 48px, grey upload tile + grey "Add style" pill, accent-colored illustration or in-product preview alongside.

### Whitespace Philosophy

The near-white canvas runs continuously; sections are separated by tonal shifts (white → `#f5f9fa`) and hairline rules rather than dark bands. Section gutters run **80–120px** between major blocks; minor blocks sit on 48–64px gaps. Color enters as accent washes and illustrations inside the rhythm, never as full-bleed dark interruptions on the marketing surface.

### Section Cadence

- Hero (near-white + Exposure h1 + grey upload chrome + accent illustration) → Feature Grid (3-up default cards on `#f5f9fa`) → Color-Washed Feature Spread (accent-tint cards, one hue each) → Social Proof / Creator Testimonials → Product Walkthrough (in-product previews) → Pricing → FAQ → Footer.
- The canvas stays light throughout; the deep-violet `#160f31` ground appears only in select hero or CTA-band blocks as a contrast moment.
- Accent color is the punctuation; the grey chrome is the structure.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Inline chip corners, hairline detail |
| Small (sm) | 4px | Inline code, small inputs, tight chips |
| Medium (md) | 8px | Inputs, secondary buttons, dropdowns |
| Relaxed (lg) | 12px | Upload tiles, default cards |
| Large (xl) | 16px | Accent-washed cards, modals |
| Pill | 9999px | Primary CTA, chrome pills, tags |

Captions' signature radii: **9999px pills for CTAs and tags / 12px for tiles and cards / 8px for inputs.** The page is decisively rounded and friendly — there are no sharp 0px corners on interactive surfaces. The full-pill CTA is a creator-friendly choice that reads softer than a squared button. Mixed radii within a single primitive are avoided.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, hero, body sections |
| 1 | Tonal layering (`#f5f9fa` on `#ffffff`) | Default cards, insets, upload tiles |
| 2 | Hairline + tonal (`1px #dfe5e7`) | Bordered cards, panels |
| 3 | `rgba(29, 31, 32, 0.06) 0 4px 12px` | Sticky nav, dropdowns, hover-lifted cards |
| 4 | `rgba(29, 31, 32, 0.08) 0 12px 28px -10px` | Popovers, floating menus |
| 5 | `rgba(29, 31, 32, 0.12) 0 24px 48px -16px` | Modals, dialogs |

### Shadow Philosophy

Captions' depth comes from **tonal layering and hairlines first, shadows second.** White → `#f5f9fa` → `#eef4f6` gives a three-tier surface ladder that separates elements without any shadow at all. When shadows appear they're soft, diffuse, and charcoal-tinted (`rgba(29, 31, 32, …)`) — never colored, never hard, never glowing. This matters: the accent palette is loud, so the depth language stays quiet and neutral to keep the page from feeling chaotic. Color goes in fills and washes; elevation stays grey.

## 8. Interaction & Motion

### Easing Curves

- `ease-standard`: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style; default for hover, focus, and color transitions.
- `ease-emphasized`: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; modal enter, hero reveal.

### Duration Buckets

- **Fast (150ms)** — color transitions, focus rings, link hovers.
- **Standard (240ms)** — button hover, card hover, dropdown reveal.
- **Slow (320ms)** — modal enter/exit, section fade-in.

### Per-Component Micro-States

- **Button hover (violet pill)**: bg `#6c4df7` → `#160f31` over 240ms ease-standard. No scale.
- **Button hover (grey chrome)**: bg `#eef4f6` → `#e8eff2`.
- **Upload-tile hover**: bg `#f5f9fa` → `#eef4f6`; dashed border darkens.
- **Card hover**: border `#dfe5e7` → `#d0d6d7`; 4px charcoal shadow fades in.
- **Link hover**: color → `#6c4df7` over 150ms.
- **Input focus**: 2px violet ring `rgba(108, 77, 247, 0.32)` fades in over 150ms; border darkens to violet.

### Page Transitions

Sections fade in on scroll via `IntersectionObserver` at ~80% viewport, 320ms, with a small 16px translate-up. Hero text reveals on load over 320ms. Accent illustrations may animate subtly (a sticker pops, a wash drifts) but the chrome stays still — motion follows the same rule as color, living in the decoration layer.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` — all transitions become opacity-only, durations halved. Translate-ins, scroll reveals, and any sticker/wash animation are disabled; sections snap to final state.

## 9. Accessibility & A11y

### Contrast Pairs

- **`#1d1f20` text on `#ffffff` bg**: 15.6:1 — AAA at all sizes. The primary reading pair.
- **`#2a2c2d` h1 on `#ffffff` bg**: 13.1:1 — AAA at all sizes. The live display-heading color.
- **`#595e5e` muted on `#ffffff` bg**: 6.9:1 — AA at all sizes (AAA at large). Secondary copy.
- **`#7e8486` soft on `#ffffff` bg**: 4.0:1 — AA at large sizes / metadata only; keep at 14px+ or use sparingly for captions.
- **`#ffffff` on `#6c4df7` violet button**: 5.0:1 — AA at body sizes, AAA at large. The primary CTA pair is safe; the 15px / 600 button copy clears AA.
- **`#1d1f20` on `#eef4f6` grey chrome pill**: 14.2:1 — AAA. The quiet grey CTAs are highly legible.

Note on accents: the brighter `--color-*` hues (sea `#00d0ff`, yellow `#fcff41`, lime `#aaff4e`) are decorative and **must not** carry small body text on white — they fail contrast badly. Use them as fills, washes, and large illustration color only; pair text with charcoal or the darker semantic-text hues.

### Focus Indicators

- Default focus ring: `0 0 0 2px rgba(108, 77, 247, 0.32)` violet with 2px offset on the near-white canvas.
- On the deep-violet `#160f31` ground: switch to a `#ffffff` or `#a6ecff` ring for visibility.
- Every interactive surface has a visible focus state — no `outline: none` without a replacement.

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with a skip-link to main content.
- **Disclosure**: `<button aria-expanded aria-controls>` for collapsible FAQ and feature sections.
- **Dialog**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **File upload**: the drag-drop tile is a real `<button>` / labeled `<input type="file">` with `aria-label`; drag state announced via `aria-live="polite"`.
- **Live regions**: `aria-live="polite"` for upload progress and form validation.

### Keyboard Navigation

- Tab order matches visual flow: skip-link → nav → hero CTA / upload tile → main content → footer.
- All buttons, links, inputs, and the upload tile reachable via Tab; modals trap focus until dismissed.
- `Esc` closes modals and the mobile menu sheet.
- The upload tile accepts both click/Enter and a standard file picker — never drag-only.

### Screen Reader Hints

- Decorative accent stickers and washes are `aria-hidden`; the color is ornamental, the text is functional.
- In-product preview images have descriptive `alt` or `<figcaption>`.
- Icon-only buttons have `aria-label`.
- The Captions wordmark uses `aria-label="Captions"`.

### Reduced Motion

Honoured via the global media query — translate/scale animations become opacity-only, durations halve, and decorative sticker/wash motion is disabled entirely.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single column, full-bleed sections, 32px H1 |
| Tablet | 640–1024px | 2-column rails, 40px H1 |
| Desktop | 1024–1280px | Full 12-col grid, 48px hero, 720px prose |
| Wide | 1280–1536px | Site max width hits |
| Ultra | > 1536px | Page locks to 1280, gutters expand |

### Touch Targets

- Minimum tap target: 44×44px (WCAG AAA).
- Buttons: 44px minimum height on mobile.
- The upload tile gets a generous tap area on mobile (full-width, 56px+ tall) since it's the primary action.

### Collapsing Strategy

- **Header**: full nav at ≥1024px; hamburger sheet below (right-aligned trigger).
- **Hero**: 80px display → 56px → 48px → 40px → 32px H1 across breakpoints. Exposure scales down but never switches face.
- **Feature grid**: 3-up at desktop, 2-up at tablet, 1-up at mobile.
- **Body width**: 720px → fluid 90vw at mobile.
- **Accent-washed cards**: full-width on mobile; preserve 16px radius and interior padding.
- **Section spacing**: 120px → 80px → 48px across sizes.

### Image Behavior

- In-product previews use `srcset` 1x/2x/3x; aspect-ratio enforced to prevent layout shift.
- Below-fold imagery is lazy-loaded; hero is eager.
- Accent washes are CSS color (no images) so they render instantly.

### Container Queries

Used inside feature cards to switch icon position (icon-left vs. icon-top) when card width crosses ~320px, and inside FAQ rows to stack meta below the question on narrow containers.

## 11. Content & Voice

### Tone

**Bold, direct, creator-native.** Captions writes to people who make short-form video for a living — confident, energetic, no enterprise hedging. Headlines are punchy and benefit-first ("AI that edits like a professional editor"); the voice assumes the reader is a creator who wants to post more and edit less. It's the opposite of dev-tool dryness or enterprise gravity.

### Microcopy Patterns

- **Button verbs**: "Get started," "Try Captions free," "Import or drag your video," "Add style." Action-first, sentence case, never all-caps-urgent.
- **Error messages**: "That file didn't upload — try a shorter clip or a different format." Plain, helpful, low-stakes.
- **Success confirmations**: "Done." "Your video's ready." Brief and energetic.
- **Loading states**: "Editing your video…" "Adding captions…" — context-specific, AI-aware.

### Empty States

What they say: name the state, point to the action. *"No projects yet. Import or drag a video to get started."*
What they don't say: apologetic "Oops!" / "Whoops!" exclamations. Empty is the normal starting point, not a failure.

### CTA Verb Conventions

- Primary on hero: "Get started," "Try Captions free"
- Secondary: "Add style," "See examples," "Watch the demo"
- Footer: "Read the blog," "Help center," "Log in"

The brand favors creator-energy verbs over scarcity ("Sign up now!" / "Limited time!"). The pitch is capability and speed, not pressure.

## 12. Dark Mode & Theming

**Partial — the marketing surface is light-only on the near-white canvas.** The brand identity is the bright `#ffffff` → `#f5f9fa` studio canvas with charcoal text; the marketing site does not ship a full inverted dark theme. The cool near-white ground and the charcoal text are the defining choices.

That said, Captions' color system is engineered for inversion. The `--color-dark-purple` `#160f31` and `--color-gray-950` `#141515` exist precisely so select hero and CTA-band blocks can drop to a deep-violet/charcoal ground for contrast moments, and so the in-product video editor can run a dark workspace. On those dark grounds, the `--color-*` accent palette is calibrated to stay vivid (sea, sunset, barbie-pink, meadow all read well on `#160f31`), text flips to `#ffffff`, and focus rings switch from violet to white or sky.

The rule for a downstream dark companion: keep the accent vars at full saturation, swap the near-white canvas for `#160f31` deep-violet (or `#141515` charcoal), lift surfaces to `#1d1f20` → `#2a2c2d`, flip text to white, and re-key the grey chrome pills to a translucent white. The page-level marketing surface, however, stays light.

## 13. Lineage & Influences

Captions' design DNA is **creator-tool color maximalism on a calm canvas**. The strategic move is to reject the dark-slab, chrome-on-black register that dominates AI video (Runway, Pika, Kapwing) and instead present a bright near-white studio — closer to Figma or a modern design tool than to a "generative AI" product. The signature is the `--color-*` crayon box: rather than one or two brand colors, Captions declares a full named palette (sea, sky, sunset, cloud, meadow, barbie-pink, yellow, peach, lime, violet, and more) and treats it as a reusable sticker pack scattered across illustration, tags, and washes. Violet `#6c4df7` anchors the system, but the variety itself is the brand.

What it inherits and borrows: Figma's named multi-hue color system and bright creative-tool canvas; Descript's category-defiant choice of a warm light canvas over dark AI-tool chrome; Linear's restraint in keeping functional chrome quiet (grey) so accent color does the talking; Framer's playful accent washes over a clean near-white marketing surface. What it rejects, deliberately: chrome-on-black slabs, neon-on-slate gradients, moody darkness, and the whole "generative AI = dark and futuristic" visual cliché. Where its competitors signal "powerful technology," Captions signals "fun, fast, made-for-creators."

**Named influences:**

- **Gaurav Misra (co-founder & CEO, Captions)** — Product and brand direction toward a creator-native, color-forward identity. *https://www.captions.ai/about*
- **Figma** — Multi-hue named-color system and bright near-white canvas as a creative-tool register. *https://www.figma.com*
- **Descript** — AI-video peer that also rejects dark-slab chrome for a warm, editorial light canvas. *https://www.descript.com*
- **Linear** — Tight type and restrained grey chrome that lets accent color do the talking. *https://linear.app*
- **Framer** — Playful gradient/accent washes over a clean near-white marketing surface. *https://www.framer.com*
- **Runway / Pika** — Chrome-on-black AI-video contemporaries Captions deliberately differentiates against. *https://runwayml.com*

## 14. Do's and Don'ts

### Do

- **Do** keep the canvas near-white — `#ffffff` cooled to `#f5f9fa` / `#eef4f6`. The bright studio ground is the brand differentiator versus dark AI-video tools.
- **Do** treat the `--color-*` palette as a sticker pack — one accent per element, scattered across illustration, tags, and washes.
- **Do** anchor the system with violet `#6c4df7` on the strongest CTA and links, but let the whole crayon box carry the energy.
- **Do** keep functional chrome (upload tile, "Add style" pill, inputs) grey and quiet so the accent system reads as the identity.
- **Do** set headlines in Exposure at 48px and up — poster-scale, weight 600–700, tight negative tracking.
- **Do** keep body in DenimINK at 16px / 1.55 — humanist and calm.
- **Do** use full-pill (9999px) CTAs and 12px tiles/cards — the page is decisively rounded and friendly.
- **Do** pair bright accents only with charcoal or matching dark semantic text; keep accents in fills and washes.
- **Do** prefer tonal layering and hairlines over shadows; when shadows appear, keep them soft and charcoal-tinted.
- **Do** keep the cool grey-blue neutral ramp (`#7e8486`, `#9fa5a7`) rather than warm grey.

### Don't

- **Don't** ship a dark slab on the marketing surface. The near-white canvas is the category-defying choice; dark blocks are only for select contrast moments.
- **Don't** color the hero chrome. The upload tile and "Add style" pill are grey on purpose — making them violet would collapse the color strategy.
- **Don't** blend the accents into one gradient identity. They're a sticker pack, not a palette gradient — keep them one-per-element.
- **Don't** put small body text on bright accent fills (sea, yellow, lime) on white — they fail contrast. Use them as decoration only.
- **Don't** use Exposure below 24px. Drop to DenimINK for h4 and smaller.
- **Don't** go heavier than 700 on headings or use warm grey neutrals; the system is cool-grey + Exposure presence.
- **Don't** use hard or colored/neon-glow shadows. Depth stays neutral and soft so the loud color doesn't read as chaos.
- **Don't** square the corners. Sharp 0px edges fight the friendly, rounded, creator register.
- **Don't** let a single hue monopolize the page. The variety is the brand — over-using violet alone makes it generic SaaS.
- **Don't** adopt scarcity/urgency voice ("Sign up now!"). The tone is creator-energy and capability, not pressure.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #ffffff
bg-cool: #f5f9fa
surface (grey chrome): #eef4f6
text: #1d1f20
text-h1: #2a2c2d
brand-violet: #6c4df7
brand-violet-hover: #160f31
accent-sea: #00d0ff
accent-sunset: #f99f3f
accent-barbie-pink: #ff1476
accent-meadow: #5bf6bb
accent-yellow: #fcff41
border: #dfe5e7
```

### Example Component Prompts

1. **"Create a hero in Captions style — near-white `#ffffff` canvas, 48px H1 in Exposure at weight 700 with `-0.018em` tracking in charcoal `#2a2c2d`, 16px DenimINK body in `#1d1f20` at 1.55 line-height. Lay out a grey upload tile (`#f5f9fa`, 12px radius, 1px dashed `#d0d6d7` border, label 'Import or drag your video') next to a grey 'Add style' pill (`#eef4f6`, 9999px). Add one bright accent illustration using sea `#00d0ff` and sunset `#f99f3f`. The buttons stay grey — color lives in the illustration."**

2. **"Design the primary CTA in Captions style — violet `#6c4df7` full pill (9999px radius), white DenimINK 600 / 15px label, 12×22px padding, hover to deep-violet `#160f31`. This is the only place the brand accent touches a button; everything else is grey chrome."**

3. **"Build an accent-washed feature card — soft cyan `#effbff` (or sky `#a6ecff` / peach `#ffca9f`) background, no border, 16px radius, 24px padding, 20px DenimINK 600 charcoal heading, 16px DenimINK 400 body. One accent tint per card; never mix two washes in one card."**

4. **"Make a category tag row — each tag a full pill (9999px) in a different `--color-*` accent (violet, barbie-pink, meadow, sunset), white 12px DenimINK 600 text, 5×12px padding. Treat them as a sticker pack — variety is the point."**

5. **"Create the primary nav — 64px header, white `#ffffff` background with hairline `#dfe5e7` on scroll, Captions wordmark in charcoal `#1d1f20`, links 15px DenimINK 500 with violet-on-hover, right-aligned ghost 'Log in' + violet pill 'Get started'."**

6. **"Render a default feature card — `#f5f9fa` background, 1px `#dfe5e7` hairline, 12px radius, 24px padding, no shadow, hover deepens border to `#d0d6d7` and adds a soft 4px charcoal-tinted shadow. Keep it neutral — let any accent color come from the icon or illustration inside."**

### Iteration Guide

1. **Start near-white, not dark.** If the canvas is `#000` or chrome-on-black, you've drifted into Runway/Pika territory. The bright `#ffffff` → `#f5f9fa` studio ground is the entry ticket.
2. **Keep the load-bearing chrome grey.** Upload tiles, "Add style" pills, inputs — desaturate them to `#f5f9fa` / `#eef4f6`. If your buttons are violet everywhere, the color strategy has collapsed.
3. **Deploy the crayon box as a sticker pack.** Add the `--color-*` accents one-per-element across illustration, tags, and washes — sea, sunset, barbie-pink, meadow, yellow. Variety, not a single brand color, is the look.
4. **Anchor with violet, don't monopolize with it.** `#6c4df7` carries the strongest CTA and links; the rest of the energy is spread across the palette.
5. **Headlines in Exposure at 48px+, body in DenimINK at 16px.** Sans display under 24px or warm-grey neutrals both pull the brand toward generic SaaS.
6. **Round everything.** Full-pill CTAs (9999px), 12px tiles and cards, 8px inputs. Sharp corners break the friendly creator register.
7. **Keep depth neutral.** Tonal layering and hairlines first; soft charcoal-tinted shadows only when needed. The color is loud, so the elevation stays quiet.
8. **Calm the voice, keep the energy.** Creator-direct verbs ("Get started," "Import or drag your video") over scarcity ("Sign up now!"). Confident, fast, made-for-creators.

---

*Theme-toggle audit: score=0, signals=[none]*
