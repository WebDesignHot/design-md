---
name: Cursor
tagline: Warm cream IDE-marketing — `#f7f7f4` canvas, `#26251e` ink, custom CursorGothic display, JetBrains Mono code, vivid orange accent.
updated_at: 2026-05-06T15:27:43+12:00
published_at: 2026-05-03T10:27:49+12:00
author: webdesignhot
source_url: https://www.cursor.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, ai, saas]
tags: [light, warm, sans, mono, serif, editorial, soft]
preview_swatch: ['#f7f7f4', '#f54e00', '#26251e']
related: [linear, vercel, anthropic]
description: 'Cursor''s marketing site renders the AI-IDE in a warm cream canvas with a custom CursorGothic display family — geometric, slightly retro, and unlike any nearby dev tool. The accent is a vivid `#f54e00` orange (matching the editor''s selection highlight); code surfaces run in JetBrains Mono; and a hidden EB Garamond serif reserves the right to drop in editorial moments. Five pastel timeline pills (peach / mint / blue / lavender / gold) mark AI-action stages inside in-product agent visualizations only — never as system action colors.'

themes:
  default: light
  available: [light, dark]
  switch-via: 'data-theme attribute on <html>; persisted in localStorage; respects prefers-color-scheme on first paint'

colors:
  light:
    bg: '#f7f7f4'                 # warm cream canvas
    bg-soft: '#fafaf7'            # IDE-pane interior
    surface: '#ffffff'            # pure white feature card surface
    surface-soft: '#f2f1ed'       # alternate elevated band
    surface-strong: '#e6e5e0'     # badge/chip background
    text: '#26251e'               # ink (warm near-black)
    text-strong: '#26251e'
    text-body: '#5a5852'          # default running text
    text-soft: 'rgba(38, 37, 30, 0.6)'
    text-muted: '#807d72'
    text-faint: '#a09c92'
    brand: '#f54e00'              # Cursor Orange — identical across themes
    brand-active: '#d04200'
    on-brand: '#ffffff'
    link: '#26251e'
    link-hover: '#f54e00'
    border: '#e6e5e0'
    border-soft: '#efeee8'
    border-strong: '#cfcdc4'
    border-translucent: 'rgba(38, 37, 30, 0.1)'
    timeline-thinking: '#dfa88f'
    timeline-grep: '#9fc9a2'
    timeline-read: '#9fbbe0'
    timeline-edit: '#c0a8dd'
    timeline-done: '#c08532'
    selection-orange: '#f54e00'
    diff-add-bg: 'rgba(31, 138, 101, 0.12)'
    diff-remove-bg: 'rgba(207, 45, 86, 0.12)'
    success: '#1f8a65'
    warning: '#c08532'
    danger: '#cf2d56'
    info: '#9fbbe0'
    shadow-tint: 'rgba(38, 37, 30, 0.08)'

  dark:
    bg: '#1a1a17'                 # warm-tinted near-black canvas (cursor IDE dark)
    bg-soft: '#1f1f1c'            # IDE-pane interior
    surface: '#26251e'            # ink — primary card surface, mirrors light/text role
    surface-soft: '#2e2d26'       # alternate elevated band
    surface-strong: '#3a3933'     # badge/chip background
    text: '#f2f1ed'               # warm cream text on dark
    text-strong: '#ffffff'
    text-body: '#cfcdc4'
    text-soft: 'rgba(242, 241, 237, 0.6)'
    text-muted: '#a09c92'
    text-faint: '#807d72'
    brand: '#f54e00'              # orange unchanged — brand axis
    brand-active: '#ff6a26'       # lifted on dark for contrast
    on-brand: '#ffffff'
    link: '#f2f1ed'               # cream links on dark — mirrors ink-on-light
    link-hover: '#f54e00'
    border: '#3a3933'
    border-soft: '#2e2d26'
    border-strong: '#5a5852'
    border-translucent: 'rgba(242, 241, 237, 0.1)'
    timeline-thinking: '#dfa88f'  # pastel pills retain hue, just on dark substrate
    timeline-grep: '#9fc9a2'
    timeline-read: '#9fbbe0'
    timeline-edit: '#c0a8dd'
    timeline-done: '#c08532'
    selection-orange: '#f54e00'
    diff-add-bg: 'rgba(31, 138, 101, 0.20)'
    diff-remove-bg: 'rgba(207, 45, 86, 0.20)'
    success: '#3fb98a'            # lifted green for dark legibility
    warning: '#dfa88f'
    danger: '#f06b8b'
    info: '#9fbbe0'
    shadow-tint: 'rgba(0, 0, 0, 0.50)'

typography:
  display:
    family: 'CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
    opentype: ['kern', 'liga']
  body:
    family: 'CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
    opentype: ['kern', 'liga']
  mono:
    family: '"JetBrains Mono", "Berkeley Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
    weights: [400, 500, 600]
  serif:
    family: '"EB Garamond", "EB Garamond Fallback", Georgia, serif'
    weights: [400, 500]
  scale:
    display-hero:   { size: 72, weight: 400, lineHeight: 1.10, tracking: '-0.03em',  family: display, opentype: 'kern' }
    display-large:  { size: 56, weight: 400, lineHeight: 1.10, tracking: '-0.02em',  family: display }
    h1:             { size: 48, weight: 400, lineHeight: 1.15, tracking: '-0.02em',  family: display }
    h2:             { size: 36, weight: 400, lineHeight: 1.20, tracking: '-0.02em',  family: display }
    h3:             { size: 26, weight: 400, lineHeight: 1.25, tracking: '-0.0125em', family: display }
    h4:             { size: 22, weight: 500, lineHeight: 1.30, tracking: '-0.005em', family: display }
    body-large:     { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:           { size: 16, weight: 400, lineHeight: 1.50, tracking: '0',        family: body }
    body-small:     { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',        family: body }
    label-mono:     { size: 11, weight: 600, lineHeight: 1.40, tracking: '0.08em',   family: mono, opentype: 'tnum', transform: 'uppercase' }
    button:         { size: 14, weight: 500, lineHeight: 1.00, tracking: '0',        family: body }
    button-small:   { size: 13, weight: 500, lineHeight: 1.00, tracking: '0',        family: body }
    link:           { size: 16, weight: 500, lineHeight: 1.50, tracking: '0',        family: body }
    caption:        { size: 13, weight: 400, lineHeight: 1.40, tracking: '0',        family: body }
    caption-small:  { size: 12, weight: 400, lineHeight: 1.40, tracking: '0',        family: body }
    micro:          { size: 11, weight: 500, lineHeight: 1.30, tracking: '0.04em',   family: body }
    code-body:      { size: 13, weight: 400, lineHeight: 1.50, tracking: '0',        family: mono }
    code-bold:      { size: 13, weight: 500, lineHeight: 1.50, tracking: '0',        family: mono }
    code-label:     { size: 11, weight: 500, lineHeight: 1.40, tracking: '0.04em',   family: mono }
    serif-quote:    { size: 22, weight: 400, lineHeight: 1.40, tracking: '0',        family: serif, opentype: 'liga' }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  featured: 20
  pill: 9999

spacing:
  base: 4
  xxs: 4
  xs: 8
  sm: 12
  md: 16
  lg: 24
  xl: 32
  xxl: 48
  section-sm: 64
  section: 80
  section-lg: 128
  scale: [4, 8, 12, 16, 20, 24, 32, 48, 64, 80, 96, 128]

layout:
  page-width: 1200
  prose-width: 720
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-entrance: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — transitions collapse to opacity-only, hero IDE timeline pause autoplay'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(38, 37, 30, 0.04) 0 1px 2px'
  standard: 'rgba(38, 37, 30, 0.08) 0 6px 16px'
  elevated: 'rgba(38, 37, 30, 0.10) 0 12px 32px'
  deep: 'rgba(38, 37, 30, 0.16) 0 24px 48px -12px'
  ring: '0 0 0 2px #f54e00'
  inset-screen: 'inset 0 1px 0 rgba(255, 255, 255, 0.6), inset 0 -1px 0 rgba(38, 37, 30, 0.05)'

accessibility:
  contrast-text-on-bg: 14.2          # #26251e on #f7f7f4 — AAA at body
  contrast-text-on-brand: 4.6        # #ffffff on #f54e00 — AA
  contrast-body-on-bg: 7.1           # #5a5852 on #f7f7f4 — AAA at body
  focus-ring: '2px solid #f54e00 with 2px offset on #f7f7f4'
  reduced-motion-honored: true
  keyboard-nav: 'tab order follows visual order; skip-link present in header'

components:
  button-primary:
    background: '#f54e00'
    text: '#ffffff'
    radius: 8
    padding: '10px 18px'
    height: 40
    font: button
    hover: 'background #d04200; no transform'
    active: 'background #d04200; inset shadow ambient'
    use: 'reserved for the single signature CTA per page (Try Cursor / Sign Up)'
  button-download:
    background: '#26251e'
    text: '#f7f7f4'
    radius: 8
    padding: '12px 20px'
    height: 44
    font: button
    hover: 'background #3b3a33'
    use: 'Download for macOS / platform-specific install pill'
  button-secondary:
    background: '#ffffff'
    text: '#26251e'
    border: '1px solid #cfcdc4'
    radius: 8
    padding: '9px 17px'
    height: 40
    font: button
    hover: 'background #f2f1ed; border #807d72'
    use: 'GitHub / SSO / "Continue with..." secondary action'
  button-ghost:
    background: 'transparent'
    text: '#26251e'
    radius: 8
    padding: '9px 14px'
    font: button
    hover: 'background rgba(38, 37, 30, 0.04)'
    use: 'tertiary text-only action inside dense rows'
  button-danger:
    background: '#cf2d56'
    text: '#ffffff'
    radius: 8
    padding: '10px 18px'
    font: button
    hover: 'background #b32549'
    use: 'destructive confirms (Delete project / Cancel subscription)'
  card:
    background: '#ffffff'
    text: '#26251e'
    border: '1px solid #e6e5e0'
    radius: 12
    padding: 24
    shadow: 'none — depth comes from hairline border + cream canvas contrast'
    use: 'feature card / comparison card / testimonial'
  ide-mockup-card:
    background: '#ffffff'
    border: '1px solid #e6e5e0'
    radius: 12
    padding: 0
    shadow: 'rgba(38, 37, 30, 0.10) 0 12px 32px'
    use: 'embedded multi-pane editor mockup (sidebar + editor + chat)'
  ide-pane:
    background: '#fafaf7'
    text-mono: '#5a5852'
    radius: 8
    padding: 16
    use: 'individual IDE pane interior — sidebar / terminal / chat'
  pricing-tier-featured:
    background: '#26251e'
    text: '#f7f7f4'
    radius: 12
    padding: 32
    use: 'featured pricing tier — inverts to ink, no colored ribbon'
  input:
    background: '#ffffff'
    text: '#26251e'
    border: '1px solid #cfcdc4'
    radius: 8
    padding: '12px 16px'
    height: 44
    focus: 'border #f54e00; ring 0 0 0 2px rgba(245, 78, 0, 0.16)'
    use: 'email / search / form input'
  badge:
    background: '#e6e5e0'
    text: '#26251e'
    radius: 9999
    padding: '4px 10px'
    font: label-mono
    use: 'NEW / BETA / category tags — uppercase mono'
  timeline-pill-thinking:
    background: '#dfa88f'
    text: '#26251e'
    radius: 9999
    padding: '4px 10px'
    font: label-mono
    use: 'in-product AI agent timeline — Thinking stage only'
  timeline-pill-grep:
    background: '#9fc9a2'
    text: '#26251e'
    radius: 9999
    padding: '4px 10px'
    font: label-mono
    use: 'in-product AI agent timeline — Grepping stage only'
  timeline-pill-read:
    background: '#9fbbe0'
    text: '#26251e'
    radius: 9999
    padding: '4px 10px'
    font: label-mono
    use: 'in-product AI agent timeline — Reading stage only'
  timeline-pill-edit:
    background: '#c0a8dd'
    text: '#26251e'
    radius: 9999
    padding: '4px 10px'
    font: label-mono
    use: 'in-product AI agent timeline — Editing stage only'
  timeline-pill-done:
    background: '#c08532'
    text: '#ffffff'
    radius: 9999
    padding: '4px 10px'
    font: label-mono
    use: 'in-product AI agent timeline — Done stage only'
  nav-link:
    background: 'transparent'
    text: '#26251e'
    font: button
    padding: '8px 12px'
    hover: 'text #f54e00'
    use: 'top-nav menu items (Pricing / Features / Enterprise / Blog)'

dark-mode: optional

lineage:
  summary: |
    Cursor's site is the warmest dev-tool marketing on the web.
    The canvas is a creamy `#f7f7f4` ground, ink is a deep
    near-black-brown `#26251e`, and the elevated surface is a
    matched warm `#f2f1ed`. Headings run in CursorGothic, a
    custom geometric/grotesque sans the company commissioned —
    distinctive double-story `a`, slightly stretched `g`, hold at
    weight 400 (yes, regular weight at 72px hero) with `-0.03em`
    tracking. The accent is a vivid orange `#f54e00` — the same
    color the Cursor editor uses for selection highlights and AI
    suggestions. The mono is JetBrains Mono on every code surface
    (and code surfaces are roughly half the page), and a third
    typeface — EB Garamond serif — sits in the system for
    editorial drop-in moments. Cards use color-mix(in oklab,
    #26251e 5%, transparent) for near-imperceptible warm tints —
    a deeply considered tonal layer system. Where Linear is dark
    and architectural, Cursor is warm and editorial: the IDE's
    marketing layer feels like a literary magazine for engineers.
  influences:
    - name: 'CursorGothic (custom commissioned)'
      role: 'Geometric/grotesque display family — distinctive double-story a, calm 400-weight at hero size'
      url: 'https://cursor.com'
    - name: 'JetBrains Mono'
      role: 'Open-source mono used for every code surface — inline kbd, blocks, IDE panes'
      url: 'https://www.jetbrains.com/lp/mono/'
    - name: 'EB Garamond'
      role: 'Open-source serif drop-in for editorial moments (changelog, narrative pages)'
      url: 'https://github.com/octaviopardo/EBGaramond12'
    - name: 'Linear'
      role: 'Inversion of — Cursor takes Linear''s typographic discipline but flips dark-architectural for warm-editorial'
      url: 'https://linear.app'
    - name: 'Stripe Press'
      role: 'Paper-white editorial restraint, hairline-only depth, generous section rhythm'
      url: 'https://press.stripe.com'
---

## 1. Visual Theme & Atmosphere

Cursor's marketing surface is the warmest dev-tool design in the
landscape. The canvas is a creamy `#f7f7f4` (warm subtle off-white,
not pure cream like Arc), ink is `#26251e` (a near-black with brown
undertones rather than pure black), and headlines run in CursorGothic
— a custom geometric grotesque the company commissioned. The hero
"Try Cursor now" hits 72px at weight 400 with `-0.03em` tracking —
yes, regular weight at hero size, a counter-intuitive choice that
gives the type a calm authority where competitors lean on 600/700
weight to shout.

What makes this design distinctive vs. nearby alternatives: the
warm cream canvas combined with the vivid orange `#f54e00` accent
(Cursor's "selection highlight" color) creates a recognizable
visual identity inside an otherwise saturated dev-tool space. The
oklab color-mix ramp for borders and surfaces — every tonal step
is `color-mix(in oklab, #26251e Nx%, transparent)` — is a
thoroughly modern color engineering choice that pays dividends in
warm-light/dark-mode parity.

The strongest single visual signature is the **AI-timeline pastel
pill set**: peach `#dfa88f` (Thinking) → mint `#9fc9a2` (Grepping)
→ pastel blue `#9fbbe0` (Reading) → lavender `#c0a8dd` (Editing) →
gold `#c08532` (Done). Five pastel pills appear only inside
in-product agent timelines, never in marketing chrome — they show
what the AI is doing without leaning on iconography. Outside the
timeline, the page returns to ink-on-cream and the single orange
accent.

Reading the homepage feels less like a SaaS pitch and more like
flipping through a print magazine for engineers: editorial pacing,
sentence-shaped paragraphs, code blocks rendered as figures rather
than chrome.

**Key Characteristics:**
- Warm cream canvas (`#f7f7f4`) — never pure white.
- Ink is warm near-black (`#26251e`) — brown undertone.
- Single CTA voltage: Cursor Orange `#f54e00`. Used scarcely.
- Display weight stays at 400 — never bold. Editorial voice.
- AI timeline pastels: 5 dedicated tokens for in-product only.
- JetBrains Mono on every code surface (~half the page).
- Hairline-only depth — no drop shadows on chrome.
- 80px section rhythm; 96–128px between major regions.
- Compact 8px CTA radius — developer dialect, not pill.

## 2. Color Palette & Roles

### Primary

- **Background** (`#f7f7f4`): warm cream page canvas. Never pure white.
- **Text** (`#26251e`): ink, warm near-black with brown undertones. Carries display + body alike.
- **Brand / CTA** (`#f54e00`): vivid orange — used scarcely, on the single signature CTA per page.

### Brand & Dark

- **Ink** (`#26251e`): wordmark and display color. Not pure black; the brown undertone is the warm-canvas secret weapon.
- **Ink Inverted Surface** (`#26251e`): used as background for the featured pricing tier — inverts to ink without a colored ribbon.
- **Brand Active** (`#d04200`): press state for orange CTA. Slightly deeper, slightly more saturated.

### Accent

- **Selection Orange** (`#f54e00`): the same orange used inside the actual Cursor editor for selection highlights and AI suggestion bands. Marketing surfaces match the product exactly.
- **Diff Add** (`rgba(31, 138, 101, 0.12)`): inserted-line tint inside code blocks.
- **Diff Remove** (`rgba(207, 45, 86, 0.12)`): removed-line tint inside code blocks.

### Interactive

- **Link** (`#26251e`): text links default to ink — no chromatic blue.
- **Link Hover** (`#f54e00`): hover state shifts to orange. Underline appears on hover.
- **Focus Ring** (`2px solid #f54e00`): orange focus ring on all interactive elements.

### Neutral Scale

- **Text Strong** (`#26251e`): display emphasis.
- **Text Body** (`#5a5852`): default running paragraph text.
- **Text Soft** (`rgba(38, 37, 30, 0.6)`): secondary metadata, color-mix derived.
- **Text Muted** (`#807d72`): sub-titles, eyebrow labels.
- **Text Faint** (`#a09c92`): disabled state, low-emphasis hints.

### Surface & Borders

- **Surface** (`#ffffff`): pure white feature card surface — slight contrast against the cream canvas.
- **Surface Soft** (`#f2f1ed`): alternate elevated band — used for full-width sections that need a tonal break without leaving the warm palette.
- **Surface Strong** (`#e6e5e0`): badge / tag pill background.
- **Background Soft** (`#fafaf7`): IDE-pane interior background — inside mockup cards.
- **Border** (`#e6e5e0`): 1px hairline divider — the system's primary depth tool.
- **Border Soft** (`#efeee8`): lighter divider for nested rows.
- **Border Strong** (`#cfcdc4`): stronger panel outline — secondary buttons, inputs.

### Shadow Colors

- **Shadow Tint** (`rgba(38, 37, 30, 0.08)`): warm-tinted ambient — every shadow uses ink-with-alpha rather than pure black, preserving the warm character.

### Semantic

- **Success** (`#1f8a65`): deep green — confirmation indicators, success toasts.
- **Warning** (`#c08532`): warm gold — same value as the timeline-done pill, reused for warning context.
- **Danger** (`#cf2d56`): red-pink — validation errors, destructive confirms.
- **Info** (`#9fbbe0`): pastel blue — informational banners (rare).

## 3. Typography Rules

### Font Family

- **Primary (display + body):** `CursorGothic, "CursorGothic Fallback", system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif`. CursorGothic is the licensed display + body family — distinctive double-story `a`, slightly tall `g`, generous lowercase apertures.
- **Mono companion:** `"JetBrains Mono", "Berkeley Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`. Used for every code surface — inline `kbd`, blocks, IDE panes, label-mono.
- **Editorial drop-in:** `"EB Garamond", Georgia, serif`. Used sparingly for changelog narrative and editorial pages — never on the homepage.
- **OpenType features:** `kern`, `liga` enabled site-wide. `tnum` activated on label-mono and code surfaces for column alignment.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | CursorGothic | 72 | 400 | 1.10 | -0.03em | kern | Homepage h1 — calm 400 weight at hero size |
| display-large | CursorGothic | 56 | 400 | 1.10 | -0.02em | kern | Section-opening display |
| h1 | CursorGothic | 48 | 400 | 1.15 | -0.02em | kern | Page h1 |
| h2 | CursorGothic | 36 | 400 | 1.20 | -0.02em | kern | Section heads |
| h3 | CursorGothic | 26 | 400 | 1.25 | -0.0125em | kern | Sub-section heads |
| h4 | CursorGothic | 22 | 500 | 1.30 | -0.005em | kern | Card group titles |
| body-large | CursorGothic | 18 | 400 | 1.55 | 0 | kern, liga | Hero subhead, lead paragraph |
| body | CursorGothic | 16 | 400 | 1.50 | 0 | kern, liga | Default paragraph copy |
| body-small | CursorGothic | 14 | 400 | 1.50 | 0 | kern | Footer body, dense rows |
| label-mono | JetBrains Mono | 11 | 600 | 1.40 | 0.08em | tnum | UPPERCASE eyebrow labels |
| button | CursorGothic | 14 | 500 | 1.00 | 0 | kern | Primary CTA pill labels |
| button-small | CursorGothic | 13 | 500 | 1.00 | 0 | kern | Compact button rows |
| link | CursorGothic | 16 | 500 | 1.50 | 0 | kern | Inline ink links |
| caption | CursorGothic | 13 | 400 | 1.40 | 0 | kern | Photo / figure captions |
| caption-small | CursorGothic | 12 | 400 | 1.40 | 0 | kern | Footer microcopy |
| micro | CursorGothic | 11 | 500 | 1.30 | 0.04em | kern | Smallest UI hint |
| code-body | JetBrains Mono | 13 | 400 | 1.50 | 0 | — | Default code block |
| code-bold | JetBrains Mono | 13 | 500 | 1.50 | 0 | — | Emphasis inside code |
| code-label | JetBrains Mono | 11 | 500 | 1.40 | 0.04em | tnum | Code-block filename header |
| serif-quote | EB Garamond | 22 | 400 | 1.40 | 0 | liga | Editorial pull-quotes (rare) |

### Principles

- **Display weight stays at 400** even at 72px. CursorGothic's calm authority comes from refusing 600/700 at hero scale. Magazine voice, not tech voice.
- **Negative letter-spacing on display only.** Range is `-0.03em` at 72px down to `-0.005em` at 22px. Body copy holds at neutral tracking.
- **JetBrains Mono on every code surface.** Inline `kbd`, blocks, IDE panes, label-mono eyebrows — one mono family covers ~half the page.
- **Three-family system.** CursorGothic carries display + body unified; mono carries code; serif appears only in editorial moments. The unified single-sans voice is the brand.
- **Open-source substitute.** Inter at weight 400 with `letter-spacing: -1.5%` approximates CursorGothic for cloned implementations.
- **No bold body copy.** Emphasis comes from family change (mono inline tag) or weight 500, never weight 700.

## 4. Component Stylings

### Buttons

**Primary (Cursor Orange)** — Background `#f54e00`, text `#ffffff`, 8px radius, padding `10px 18px`, height 40px, font `button` (14/500). Hover stays at active orange `#d04200` with no transform — the shape is calm. **Use:** the single signature CTA per page.

**Download / Ink** — Background `#26251e`, text `#f7f7f4`, 8px radius, padding `12px 20px`, height 44px (taller — meant to feel installable). Hover lifts to `#3b3a33`. **Use:** Download for macOS / Sign Up.

**Secondary** — Background `#ffffff`, text `#26251e`, 1px `#cfcdc4` border, 8px radius. Hover background `#f2f1ed`, border deepens. **Use:** SSO / "Continue with..." secondary action.

**Ghost** — Background transparent, text `#26251e`, 8px radius, padding `9px 14px`. Hover background `rgba(38, 37, 30, 0.04)`. **Use:** tertiary text-only action inside dense rows.

**Danger** — Background `#cf2d56`, text `#ffffff`, 8px radius. Hover deepens to `#b32549`. **Use:** destructive confirms only — Cancel subscription, Delete project.

### Cards

**Feature Card** — Background `#ffffff`, 1px `#e6e5e0` border, 12px radius, padding 24px. **No shadow.** Depth comes from hairline + cream-canvas contrast.

**IDE Mockup Card** — Background `#ffffff`, 12px radius, padding 0 (panes fill edge-to-edge), 1px `#e6e5e0` border, ambient shadow `rgba(38, 37, 30, 0.10) 0 12px 32px`. The single elevated element on the homepage. Internal layout: sidebar (`#fafaf7`) + main editor + chat panel + terminal — each pane is its own `ide-pane`.

**Pricing Tier Card** — `#ffffff` background, 12px radius, 32px padding, 1px hairline.

**Pricing Tier Featured** — Inverts to ink. Background `#26251e`, text `#f7f7f4`, same shape. Inversion signals "highlighted" without a colored ribbon.

### Badges & Pills

**Badge** — Background `#e6e5e0`, text `#26251e`, label-mono (11/600/0.08em uppercase), 9999 radius, padding `4px 10px`. **Use:** NEW / BETA / category tags.

**Timeline Pills (5)** — peach / mint / blue / lavender / gold pastels. Same shape (9999 radius, `4px 10px` padding, label-mono uppercase). **Scoped to in-product agent timeline only.**

### Inputs & Forms

**Text Input** — Background `#ffffff`, 1px `#cfcdc4` border, 8px radius, padding `12px 16px`, height 44px, body 16/400. Focus: border `#f54e00`, ring `0 0 0 2px rgba(245, 78, 0, 0.16)`.

### Navigation

**Top Nav** — Background `#f7f7f4` (matches canvas), 64px height. Layout: Cursor wordmark left, horizontal menu (Pricing / Features / Enterprise / Blog / Forum / Careers), Sign In + Download CTA right.

**Nav Link** — Transparent background, ink text, button font (14/500), `8px 12px` padding. Hover shifts text to `#f54e00`.

### Decorative

**Code Block** — `#ffffff` surface, 12px radius, 20px padding, 1px hairline, JetBrains Mono 13/400. Filename header in code-label (11/500/0.04em).

**Hero Band** — Full-width canvas band, `display-hero` headline (72/400/-0.03em), `body-large` subhead, two CTAs (download + ghost), centered IDE mockup card below. 80px vertical padding.

**CTA Band** — Pre-footer "Try Cursor now". Background `#f7f7f4`, centered `display-large` headline, single Cursor Orange CTA. 96px vertical padding.

## 5. Layout Principles

### Spacing System

- **Base unit:** 4px.
- **Scale:** 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 80 / 96 / 128.
- **Section padding:** 80px standard, 128px between major regions.
- **Density:** generous editorial pacing — closer to a print magazine than a tech site.

### Grid & Container

- **Max content width:** ~1200px.
- **Editorial body:** 12-column grid, 24px gutter.
- **Feature card grids:** 2-up at desktop for splits, 3-up for benefits.
- **Footer:** 5-column at desktop.

### Whitespace Philosophy

The cream canvas has plenty of breathing room; cards within bands sit close (16–24px gap). Sections breathe wide (80–128px vertical). The asymmetry — tight inside, wide outside — gives the page its editorial calm.

### Section Cadence

- White hero on cream → white IDE mockup card → cream feature band → soft alternate band (`#f2f1ed`) → cream pricing → cream CTA band → cream footer.
- No dark sections in marketing chrome. The featured pricing tier is the only ink-on-cream inversion.

## 6. Shapes & Radius Scale

| Token | Value | Use |
|---|---|---|
| micro | 2px | Reserved (rare inline tags) |
| sm | 4px | Compact inline rows |
| md | 8px | CTA buttons, form inputs — the developer-dialect default |
| lg | 12px | Cards, IDE mockup, code blocks |
| xl | 16px | Larger feature cards (rare) |
| featured | 20px | Hero shells (rare) |
| pill | 9999px | Timeline pills, badges, avatars |

The button radius is **8px** — softer than Linear's hard pill, sharper than Vercel's matching radius. CursorGothic's geometric/grotesque shapes echo the radius ladder: generous lowercase circles match the pill, while the type's flat baselines match the rectilinear card.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | `#f7f7f4` canvas | Body bands, footer |
| 1 — Card | `#ffffff` + 1px `#e6e5e0` hairline | Feature cards, code blocks |
| 2 — Elevated | `#ffffff` + hairline + ambient shadow `rgba(38, 37, 30, 0.04) 0 1px 2px` | Subtle lift on testimonials |
| 3 — IDE Mockup | `#ffffff` + hairline + standard shadow `rgba(38, 37, 30, 0.10) 0 12px 32px` | The hero IDE card — single elevated chrome element |
| 4 — Modal / Sheet | `#ffffff` + hairline + deep shadow `rgba(38, 37, 30, 0.16) 0 24px 48px -12px` | Modals (rare on marketing) |

### Shadow Philosophy

The system uses **hairline-only depth on chrome** — every card relies on a 1px `#e6e5e0` border, and ambient shadow appears only on the IDE mockup hero. Shadows are warm-tinted (`rgba(38, 37, 30, alpha)`) rather than neutral black, keeping the warm character through every elevation tier. The IDE mockup itself uses an inset shadow (`inset 0 1px 0 rgba(255,255,255,0.6)`) to give the editor a "screen" feel.

## 8. Interaction & Motion

### Easing & Duration

- **ease-standard:** `cubic-bezier(0.4, 0, 0.2, 1)` — material-style, used for most UI transitions.
- **ease-emphasized:** `cubic-bezier(0.2, 0, 0, 1)` — used for entrance animations on the IDE mockup.
- **ease-entrance:** `cubic-bezier(0, 0, 0.2, 1)` — used when content fades in from below.
- **duration-fast:** 120ms — color transitions on hover.
- **duration-standard:** 200ms — opacity / transform on cards.
- **duration-slow:** 320ms — IDE timeline pill reveals (autoplay).

### Per-Component Micro-States

- **Button hover:** background color shift only (no transform). Cursor Orange → active orange `#d04200`. 120ms.
- **Card hover:** border deepens from `#e6e5e0` to `#cfcdc4`. No shadow change. 200ms.
- **Link hover:** ink → orange `#f54e00`. Underline appears at 1px offset. 120ms.
- **Input focus:** border shift to `#f54e00`, ring fades in over 120ms.
- **IDE timeline pills:** sequential reveal — peach → mint → blue → lavender → gold. Each pill fades in over 200ms with a 100ms stagger.

### Page Transitions

The homepage relies on a single autoplaying IDE-mockup hero with a looped agent-timeline animation. No page-load transition; sections appear flat from first paint.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. When set:
- All transitions collapse to opacity-only.
- Hero IDE timeline pauses autoplay; pills appear simultaneously.
- Hover transforms disabled; color shifts retained.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | WCAG |
|---|---|---|
| `#26251e` ink on `#f7f7f4` cream | 14.2 | AAA at body |
| `#5a5852` body on `#f7f7f4` cream | 7.1 | AAA at body |
| `#ffffff` on `#f54e00` orange CTA | 4.6 | AA (large only at body sizes ≥ 18px) |
| `#f7f7f4` cream on `#26251e` ink | 14.2 | AAA at body |
| `#807d72` muted on `#f7f7f4` cream | 4.7 | AA |

### Focus Indicators

2px solid `#f54e00` ring with 2px offset. Applied to every interactive element — buttons, links, inputs, nav. Never `outline: none` without replacement.

### ARIA Patterns

- **Combobox:** `role="combobox"` with `aria-expanded` + `aria-controls` for the search-IDE field on docs.
- **Listbox:** `role="listbox"` for autocomplete dropdowns; rows are `role="option"`.
- **Dialog:** `role="dialog"` + `aria-modal="true"` + focus trap on pricing modals.

### Keyboard Nav

- Tab order follows visual order strictly.
- Skip-link present in header (visible on focus).
- Escape closes all modals; arrow keys navigate listbox rows.

### Screen Reader

- Decorative IDE mockups marked `aria-hidden="true"`.
- Timeline pills include hidden `aria-label` ("AI is reading file X") even though visual text is mono-uppercase.
- Code blocks include `aria-label="Code sample"` for SR clarity.

### Reduced Motion

Honored — see §8.

## 10. Responsive Behavior

| Breakpoint | Range | Key Changes |
|---|---|---|
| Mobile | < 640px | Hero h1 72→32px; IDE mockup collapses to single-pane preview; feature grid 1-up; nav hamburger |
| Tablet | 640–1024px | Hero h1 56px; IDE mockup compresses; feature grid 2-up |
| Desktop | 1024–1280px | Full hero h1 72px; full multi-pane IDE mockup; feature grid 3-up |
| Wide | > 1280px | Content caps at 1200px |

### Touch Targets

- Primary CTA: 40px height — at WCAG AA, padded for AAA at touch.
- Download CTA: 44px height — at AAA.
- Nav links: 32px tap target padded internally.

### Collapsing Strategy

- Top nav switches to hamburger below 768px.
- IDE mockup multi-pane → single primary pane preview on mobile.
- Feature grid: 3-up → 2-up → 1-up.
- Code blocks: horizontal scroll preserved (no wrap) — code remains readable.

### Image Behavior

Product screenshots use `srcset` 1x/2x/3x. Hero IDE mockup is rendered as live HTML, not raster — scales without quality loss.

### Container Queries

Used inside the IDE mockup card to swap pane layouts when the card itself reflows under 800px wide, regardless of viewport.

## 11. Content & Voice

### Tone

Confident, calm, technical-but-readable. Cursor's voice sounds like a senior engineer explaining a tool to a peer — no hype, no exclamation marks, no emoji in marketing copy. Sentences are paragraph-shaped rather than tweet-shaped.

### Microcopy Patterns

- **Button verbs:** "Try Cursor", "Download for macOS", "Continue with GitHub", "Sign in", "Get started" (rare).
- **Error recipe:** `[Title — what failed] — [Why] — [Suggested action]`. Example: "Couldn't reach the server. Your network is offline. Retry when reconnected."
- **Success confirmations:** terse — "Saved", "Subscribed", "Project created". No exclamation.
- **Empty states:** describe the mechanism, not the feeling. "No projects yet. Create one to start." — never "You don't have any projects 😢".

### CTA Verb Conventions

- Primary: "Try Cursor now" (homepage hero), "Download for macOS" (install bar), "Get started" (pricing).
- Secondary: "Read the docs", "View pricing", "Watch demo".
- Avoid: "Sign up free!", "Start your journey", "Join the revolution".

### Empty States

The empty state inside the IDE mockup says "Ask Cursor to write something..." — instructional, not decorative. No illustration; the cursor blinks.

## 12. Dark Mode & Theming

Cursor's marketing site is **light-mode primary**. The cream canvas is the brand. A dark companion exists inside the actual editor (and inside the docs at user preference), but the marketing chrome stays warm-cream throughout.

When a dark variant is rendered (docs setting):
- `bg` → `#1a1916` (warm near-black)
- `text` → `#f7f7f4` (cream becomes ink)
- `surface` → `#26251e` (ink becomes card)
- `border` → `rgba(247, 247, 244, 0.08)`
- Brand orange `#f54e00` retained — its contrast holds at AA on the dark canvas.

Dark mode preserves the warm undertone; never collapse to neutral grays.

## 13. Lineage & Influences

Cursor sits at the intersection of three traditions: **dev-tool dark-mode editorial restraint** (Linear, Vercel), **paper-white print-magazine pacing** (Stripe Press), and **modern oklab-color engineering** (Tailwind, modern CSS). It rejects the typical SaaS-blue-CTA orthodoxy — `#f54e00` orange is neither product accent nor SaaS chroma; it's the literal selection-highlight color from inside the IDE, lifted into marketing.

The custom CursorGothic display family is the brand's deepest investment. Where Linear leans on Inter and Vercel uses Geist, Cursor commissioned a face — the editorial calm of weight 400 at 72px is impossible to fake with a system sans. JetBrains Mono on every code surface signals that code is a first-class subject, not chrome.

**Named influences:**

- **CursorGothic** (custom commissioned) — the editorial 400-weight display voice.
- **JetBrains Mono** (open-source) — every code surface, ~half the page.
- **EB Garamond** (open-source serif) — editorial drop-in moments.
- **Linear** — inversion of the dark-architectural template; Cursor warms it.
- **Stripe Press** — paper-white pacing, hairline-only depth.
- **Tailwind / oklab CSS** — color-mix(in oklab) ramp engineering.

## 14. Do's and Don'ts

### Do

- **Do** anchor the canvas at `#f7f7f4` cream — never pure white.
- **Do** keep ink at `#26251e` warm near-black, not pure black. The brown undertone is the warm-canvas secret weapon.
- **Do** hold display weight at 400 even at 72px hero size. CursorGothic's calm authority comes from refusing 600/700.
- **Do** apply negative letter-spacing on display only (`-0.03em` at 72px down to `-0.005em` at 22px).
- **Do** use JetBrains Mono on every code surface — inline kbd, blocks, IDE panes, label-mono.
- **Do** reserve Cursor Orange `#f54e00` for the single signature CTA per page and the wordmark.
- **Do** scope timeline pastels (peach/mint/blue/lavender/gold) to in-product agent visualizations only.
- **Do** rely on hairline-only depth — 1px `#e6e5e0` borders carry every card except the IDE mockup.
- **Do** use 8px radius on CTAs; 12px on cards. The ladder is consistent across the system.
- **Do** keep section rhythm at 80px standard, 128px between major regions.

### Don't

- **Don't** introduce a secondary brand action color. Cursor Orange is the only accent.
- **Don't** drop display to bold weights (700+). Magazine voice depends on 400.
- **Don't** add drop shadows to cards. Hairlines + ink-on-cream contrast carry the depth.
- **Don't** use timeline pastels on non-timeline UI — they're scoped to the agent timeline only.
- **Don't** use pure white surfaces. Every tonal step is warm-tinted via `color-mix(in oklab, ...)`.
- **Don't** apply Cursor Orange as a CTA fill outside the single primary action — it belongs on the wordmark and one CTA per page.
- **Don't** mix CursorGothic with Inter or system-ui as a body fallback. The unified single-family voice is the brand.
- **Don't** use blue links. Default link color is ink `#26251e`; hover shifts to orange.
- **Don't** scale CursorGothic below 14px. The face is cut for display + body, not micro-UI.
- **Don't** introduce gradients on chrome — chromatic interest belongs inside product mockups, not marketing layout.

## 15. Agent Prompt Guide

### Quick Color Reference

```
Background:    #f7f7f4
Surface:       #ffffff
Surface Soft:  #f2f1ed
Text:          #26251e
Body Text:     #5a5852
Brand:         #f54e00
Brand Active:  #d04200
Border:        #e6e5e0
Border Strong: #cfcdc4
Success:       #1f8a65
Danger:        #cf2d56
```

### Example Component Prompts

- **"Create a hero section in the Cursor style"** — Cream `#f7f7f4` canvas, 72px CursorGothic h1 at weight 400 with `-0.03em` tracking, 18px body subhead, two CTAs (ink `#26251e` Download + ghost text link), centered white IDE mockup card below with 12px radius and ambient shadow.

- **"Design a card in the Cursor style"** — White `#ffffff` background, 1px `#e6e5e0` border, 12px radius, 24px padding, no shadow. Heading in CursorGothic 22/500, body in 16/400. Hover: border deepens to `#cfcdc4`.

- **"Build a primary CTA in the Cursor style"** — `#f54e00` background, white text, 8px radius, `10px 18px` padding, 40px height, button font 14/500. Hover: background `#d04200`. No transform, no shadow change.

- **"Make a code block in the Cursor style"** — `#ffffff` surface, 12px radius, 20px padding, 1px `#e6e5e0` hairline, JetBrains Mono 13/400, optional filename header in mono 11/500/0.04em uppercase.

- **"Render an AI agent timeline in the Cursor style"** — Five sequential pastel pills: peach `#dfa88f` (Thinking) → mint `#9fc9a2` (Grepping) → pastel blue `#9fbbe0` (Reading) → lavender `#c0a8dd` (Editing) → gold `#c08532` (Done). Pill shape `4px 10px` padding, 9999 radius, label-mono 11/600/0.08em uppercase ink text (white text on gold).

- **"Design a pricing card in the Cursor style"** — Standard tier: white `#ffffff`, 12px radius, 32px padding, 1px hairline. Featured tier inverts to ink `#26251e` background with cream `#f7f7f4` text — no colored ribbon. Cursor Orange CTA on featured.

### Iteration Guide

1. Start with the canvas — `#f7f7f4` cream, never pure white. The warmth carries everything else.
2. Set type before layout. CursorGothic at weight 400 with negative tracking on display.
3. Apply Cursor Orange `#f54e00` to exactly one CTA per page. Wordmark also uses orange.
4. Mono goes on every code surface. JetBrains Mono is the open-source choice; Berkeley Mono is the licensed alternative.
5. Cards use 12px radius + 1px hairline. No shadow. Depth comes from contrast, not lift.
6. Buttons use 8px radius. Pills (9999) reserved for badges and timeline.
7. Hover is color-only — no transforms. Cursor's calm comes from holding still.
8. Section rhythm: 80px standard. Bump to 128px between major regions for editorial pacing.
