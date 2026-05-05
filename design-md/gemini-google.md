---
name: Gemini (Google)
tagline: Blue-into-violet gradient, Google Sans, soft Material 3 surfaces — Google''s house style applied to a chat interface.
author: webdesignhot
source_url: https://gemini.google.com
spec: design.md/v1.5
quality: curated
featured: true
categories: [ai, saas]
tags: [light, minimal, sans, soft, cool, multi-theme]
preview_swatch: ['#ffffff', '#1a73e8', '#9168c0']
related: [openai, claude-ai, perplexity]
description: 'Gemini''s product surface is a textbook Material 3 application of Google''s house brand — a near-white canvas, soft tonal containers, Google Sans across the entire UI, and the signature Google blue `#1a73e8` flowing into a Gemini-specific violet `#9168c0` for the brand sparkle gradient. The aesthetic is calm, rounded, and deliberately conversational rather than tool-like — Material 3''s tonal-container ladder doing the depth work that shadows would do in older systems.'

colors:
  # Page grounds (Material 3 surface ladder)
  bg: '#ffffff'                  # surface (canvas)
  bg-soft: '#f8fafd'             # surface-container-low — prompt input bg
  surface: '#eef2f7'             # surface-container — selected, hover
  surface-high: '#dde3ea'        # surface-container-high — popover, menu
  surface-highest: '#cdd2da'     # surface-container-highest — modal scrim base
  surface-tinted: '#e7eef9'      # primary-tonal-container — chip bg, blue tint
  surface-violet-tinted: '#f3eafa'  # secondary-tonal-container, lavender tint
  # Text
  text: '#1f1f1f'                # on-surface — primary copy
  text-strong: '#0f0f0f'         # display, max contrast
  text-muted: '#5f6368'          # on-surface-variant — Google grey-700
  text-soft: '#80868b'            # captions, metadata
  text-disabled: '#bdc1c6'
  text-on-tinted: '#0b57d0'      # text colour inside primary-tonal-container
  # Brand & gradient
  brand: '#1a73e8'               # Google blue 600 — primary CTA
  brand-hover: '#1967d2'         # blue 700
  brand-press: '#185abc'         # blue 800
  brand-deep: '#185abc'          # alias
  brand-soft: '#e8f0fe'           # primary container — chip/pill backgrounds
  gradient-from: '#4285f4'       # Google blue 500 — sparkle start
  gradient-via: '#9b72cb'        # lavender mid
  gradient-to: '#d96570'          # coral pink end (the famous trio)
  gradient-via-2: '#9168c0'      # Gemini-specific violet — secondary trio stop
  accent-violet: '#9168c0'       # standalone violet
  accent-coral: '#d96570'         # standalone coral
  accent-soft-blue: '#e8f0fe'
  accent-soft-violet: '#f3eafa'
  # Borders
  border: '#dadce0'              # Google's default hairline
  border-soft: '#e8eaed'          # subtle
  border-strong: '#bdc1c6'        # emphasized
  border-focus: '#1a73e8'        # focus outline base
  # CTA
  on-brand: '#ffffff'
  on-tonal: '#0b57d0'             # text on tonal blue container
  on-surface-tonal: '#1f1f1f'
  # Semantic
  success: '#188038'
  success-bg: '#e6f4ea'
  warning: '#f29900'
  warning-bg: '#fef7e0'
  danger: '#d93025'
  danger-bg: '#fce8e6'
  info: '#1a73e8'
  info-bg: '#e8f0fe'
  # Misc
  scrim: 'rgba(32,33,36,0.4)'
  ring-focus: 'rgba(26,115,232,0.32)'

typography:
  display:
    family: '"Google Sans Display", "Google Sans", "Product Sans", -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['ss01']
  body:
    family: '"Google Sans Text", "Google Sans", Roboto, -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
    opentype-features: ['ss01']
  mono:
    family: '"Google Sans Mono", "Roboto Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
    opentype-features: ['zero', 'tnum']
  scale:
    display-large:   { size: 64, weight: 500, lineHeight: 1.05, tracking: '-0.018em', family: display }
    display:         { size: 56, weight: 500, lineHeight: 1.1,  tracking: '-0.015em', family: display }
    h1:              { size: 48, weight: 500, lineHeight: 1.1,  tracking: '-0.012em', family: display }
    h2:              { size: 36, weight: 500, lineHeight: 1.15, tracking: '-0.01em',  family: display }
    h3:              { size: 28, weight: 500, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 22, weight: 500, lineHeight: 1.3,  tracking: '0',         family: display }
    h5:              { size: 18, weight: 500, lineHeight: 1.35, tracking: '0',         family: display }
    title-large:     { size: 16, weight: 500, lineHeight: 1.4,  tracking: '0',         family: body }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0.01em',    family: body }
    chat-message:    { size: 16, weight: 400, lineHeight: 1.6,  tracking: '0',         family: body }
    label-large:     { size: 14, weight: 500, lineHeight: 1.4,  tracking: '0.01em',    family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.02em',    family: body }
    label-small:     { size: 11, weight: 500, lineHeight: 1.3,  tracking: '0.04em',    family: body }
    caption:         { size: 12, weight: 400, lineHeight: 1.4,  tracking: '0.02em',    family: body }
    button:          { size: 14, weight: 500, lineHeight: 1.4,  tracking: '0.01em',    family: body }
    code-inline:     { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',         family: mono }
    code-block:      { size: 14, weight: 400, lineHeight: 1.6,  tracking: '0',         family: mono }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  card: 24
  card-large: 28
  prompt: 28
  pill: 9999

spacing:
  base: 8
  scale: [0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  chat-width: 768
  header-height: 64
  sidebar-width: 280
  prompt-bar-max: 768

components:
  button-filled:
    backgroundColor: '#1a73e8'
    textColor: '#ffffff'
    rounded: pill
    padding: '10 24'
    height: 40
    font: '14px Google Sans 500'
    hover: 'bg #1967d2; shadow ambient'
    active: 'bg #185abc'
    focus: 'outline 2px #1a73e8 offset 2px'
    use: 'Material 3 filled button — primary action'
  button-tonal:
    backgroundColor: '#e8f0fe'
    textColor: '#0b57d0'
    rounded: pill
    padding: '10 24'
    height: 40
    font: '14px Google Sans 500'
    hover: 'bg #d3e3fd'
    use: 'secondary action — tonal pill, "Try Pro"'
  button-outlined:
    backgroundColor: 'transparent'
    textColor: '#1a73e8'
    border: '1px solid #dadce0'
    rounded: pill
    padding: '10 24'
    use: 'Material 3 outlined — tertiary'
  button-text:
    backgroundColor: 'transparent'
    textColor: '#1a73e8'
    rounded: pill
    padding: '8 16'
    use: 'cancel, dismiss, link-style action'
  chip-suggestion:
    backgroundColor: '#ffffff'
    textColor: '#1f1f1f'
    border: '1px solid #dadce0'
    rounded: pill
    padding: '8 14'
    font: '14px Google Sans 400'
    hover: 'bg #f8fafd; border #bdc1c6'
    use: 'suggestion chips below the prompt — conversation starters'
  chip-input:
    backgroundColor: '#e8f0fe'
    textColor: '#0b57d0'
    rounded: pill
    padding: '6 12'
    use: 'attached file / model selector chip — tonal blue'
  prompt-input:
    backgroundColor: '#f8fafd'
    border: '1px solid transparent'
    rounded: prompt
    padding: '14 20'
    minHeight: 56
    font: '16px Google Sans Text 400'
    focus: 'border #1a73e8; shadow ambient + sparkle gradient halo'
    use: 'Gemini''s defining input — large rounded rect, mic + image inline, sparkle send on the right'
  message-card:
    backgroundColor: 'transparent'
    textColor: '#1f1f1f'
    rounded: 0
    padding: '20 0'
    use: 'chat turn — no shell; typography and whitespace structure the conversation'
  user-bubble:
    backgroundColor: '#e8f0fe'
    textColor: '#1f1f1f'
    rounded: 24
    padding: '12 20'
    use: 'user-side message — soft tonal blue card, rounded'
  card:
    backgroundColor: '#ffffff'
    border: '1px solid #dadce0'
    rounded: card
    padding: 24
    shadow: 'ambient'
    use: 'feature blocks, info cards in marketing pages'
  sparkle-button:
    background: 'conic-gradient(from 220deg, #4285f4, #9b72cb, #d96570, #4285f4)'
    glyph: '4-point star'
    size: 40
    rounded: pill
    use: 'send action and Gemini glyph — the gradient is reserved for this'

motion:
  ease-standard: 'cubic-bezier(0.2, 0, 0, 1)'        # Material 3 emphasized
  ease-decelerate: 'cubic-bezier(0, 0, 0, 1)'         # decelerate
  ease-accelerate: 'cubic-bezier(0.3, 0, 1, 1)'       # accelerate
  ease-emphasized: 'cubic-bezier(0.05, 0.7, 0.1, 1)'  # emphasized decelerate
  duration-short-1: 50
  duration-short-2: 100
  duration-medium-1: 200
  duration-medium-2: 250
  duration-long-1: 350
  duration-long-2: 450
  hover-button: 'state-layer fade 100ms; shadow elevation +1 over 200ms'
  hover-card: 'shadow ambient → standard over 200ms'
  press-state-layer: 'rgba state layer 12% opacity over 100ms'
  ripple: 'Material ripple expanding from press point over 350ms emphasized'
  send-sparkle: 'gradient rotates 360deg over 600ms when prompt is submitted'
  reduced-motion: 'respects prefers-reduced-motion: reduce — ripples disabled, gradient rotation disabled, transitions reduced to opacity-only'

breakpoints:
  mobile: 600
  tablet: 905
  laptop: 1240
  desktop: 1440
  wide: 1920

shadows:
  ambient: '0 1px 2px rgba(60,64,67,0.3), 0 1px 3px rgba(60,64,67,0.15)'
  level-1: '0 1px 2px rgba(60,64,67,0.3), 0 2px 6px rgba(60,64,67,0.15)'
  level-2: '0 2px 4px rgba(60,64,67,0.3), 0 4px 8px rgba(60,64,67,0.15)'
  level-3: '0 4px 8px rgba(60,64,67,0.3), 0 8px 16px rgba(60,64,67,0.15)'
  level-4: '0 6px 12px rgba(60,64,67,0.3), 0 12px 24px rgba(60,64,67,0.15)'
  level-5: '0 8px 16px rgba(60,64,67,0.3), 0 16px 32px rgba(60,64,67,0.15)'
  ring-focus: '0 0 0 3px rgba(26,115,232,0.32)'
  prompt-focus: '0 0 0 1px #1a73e8, 0 4px 16px rgba(154,114,203,0.18)'  # gradient-tinted focus halo

accessibility:
  contrast-text-on-bg: 16.1                # #1f1f1f on #ffffff — AAA
  contrast-text-on-brand: 4.7              # #ffffff on #1a73e8 — AA
  contrast-tonal-text: 7.2                 # #0b57d0 on #e8f0fe — AAA at body
  contrast-muted: 5.9                       # #5f6368 on #ffffff — AA at body
  focus-ring: '3px solid rgba(26,115,232,0.32) offset 2px'
  reduced-motion-honored: true
  keyboard-nav: 'Tab cycles header → sidebar → prompt → suggestion chips → footer; Enter sends prompt; Esc dismisses dialog'
  aria-patterns: 'prompt input is role=textbox + aria-multiline=true + aria-label="Ask Gemini"; suggestion chips role=button; message turns use aria-live=polite; user vs Gemini turns role=article + aria-label'
  high-contrast-fallback: 'borders thicken to 2px and gradient is replaced with solid #1a73e8 in forced-colors mode'

dark-mode: optional        # Gemini ships a full dark theme; tokens swap

colors-dark:
  bg: '#1b1b1b'
  bg-soft: '#222222'
  surface: '#2d2d2d'
  surface-high: '#3a3a3a'
  surface-highest: '#444444'
  surface-tinted: '#1a2840'
  surface-violet-tinted: '#2a1f3d'
  text: '#e3e3e3'
  text-strong: '#ffffff'
  text-muted: '#9aa0a6'
  text-soft: '#80868b'
  text-on-tinted: '#a8c7fa'
  brand: '#a8c7fa'                 # Google blue 200 — readable on dark
  brand-hover: '#c2d7fc'
  brand-press: '#7cacf8'
  brand-soft: '#1a2840'
  on-brand: '#062e6f'
  border: '#444444'
  border-soft: '#333333'
  border-strong: '#5f6368'
  scrim: 'rgba(0,0,0,0.5)'
  ring-focus: 'rgba(168,199,250,0.32)'

---

## 1. Visual Theme & Atmosphere

Gemini's interface is what happens when Google's two strongest design
disciplines — Material 3 and Google Sans — are pointed at a chat
window. The canvas is near-white `#ffffff`, the chat turns sit on
plain background with no card shell, and the only persistent UI is
the prompt bar at the bottom and a soft sidebar of conversations on
the left. There is no dashboard, no toolbar, no model picker chrome
fighting the conversation. The atmosphere is *daylit*: cool, soft,
calm — a research notebook left open on a tidy desk, not a control
panel.

The brand fingerprint is the **sparkle gradient** — the four-point
star icon drawn in `#4285f4 → #9b72cb → #d96570`, which appears on
the Gemini glyph, the send button, and the focus glow on the prompt
bar. Everything else stays in Google's house palette: blue 600
`#1a73e8` for primary action, soft `#e8f0fe` tonal containers for
chips and secondary actions, Google grey-700 `#5f6368` for the
muted text register that has signaled "Google product" since the
mid-2010s.

What differentiates Gemini in the AI-chat field: ChatGPT is
near-monochrome with sharp typographic hierarchy; Claude leans into
warm cream and a serif-flavoured personality; Perplexity frames
itself as a search-engine result. Gemini lives firmly in cool,
rounded, Material-soft territory — full pill buttons, 24–28px card
radii, tonal containers instead of borders or shadows. The chat
surface itself has almost no chrome, letting Google Sans and
generous whitespace carry the conversation. It's the most
Google-product-shaped chat interface, intentionally.

**Key Characteristics**
- Near-white `#ffffff` canvas with Material 3 surface-container ladder
- Google Sans across display, body, and mono — a single typographic family
- Sparkle gradient `#4285f4 → #9b72cb → #d96570` reserved for the glyph and send action
- Google blue 600 `#1a73e8` as the primary CTA, blue 200 `#a8c7fa` in dark mode
- Tonal containers (`#e8f0fe` blue, `#f3eafa` violet) instead of borders or shadows
- Full pill buttons (`9999` radius) — Material 3's 2024+ commitment
- 24–28px card radii — softer than typical SaaS
- 16px body on a 1.55–1.6 line-height, gentle and conversational
- Material 3 ripple on press; emphasized motion easing
- Full dark-mode swap with same shape and motion language

## 2. Color Palette & Roles

### Primary

- **bg** `#ffffff` — Material surface, the calm canvas
- **text** `#1f1f1f` — on-surface, primary copy and chat turns
- **brand** `#1a73e8` — Google blue 600, primary CTA fill

### Brand & Dark

- **brand-hover** `#1967d2` — blue 700, hover/pressed action
- **brand-press** `#185abc` — blue 800, deepest active
- **brand-soft** `#e8f0fe` — primary tonal container, the M3 chip/pill bg
- **gradient-from** `#4285f4` — sparkle start (Google blue 500)
- **gradient-via** `#9b72cb` — lavender mid
- **gradient-to** `#d96570` — coral pink end
- **gradient-via-2** `#9168c0` — Gemini-specific violet, used as a
  secondary stop in some 4-stop variants

### Accent

- **accent-violet** `#9168c0` — standalone Gemini lavender for
  secondary moments (avatar rings, decorative dots)
- **accent-coral** `#d96570` — standalone coral, rarely used alone
- **accent-soft-blue** `#e8f0fe` — chip/pill bg
- **accent-soft-violet** `#f3eafa` — secondary tonal-container bg

### Interactive

- **bg-soft** `#f8fafd` — surface-container-low, prompt input bg
- **surface** `#eef2f7` — surface-container, hover and selected
  sidebar items
- **surface-high** `#dde3ea` — surface-container-high, popover/menu
- State layers (Material 3): `rgba(26,115,232,0.08)` on hover,
  `rgba(26,115,232,0.12)` on press

### Neutral Scale

- **text** `#1f1f1f` — primary
- **text-strong** `#0f0f0f` — display
- **text-muted** `#5f6368` — Google grey-700 (the iconic muted)
- **text-soft** `#80868b` — Google grey-500
- **text-disabled** `#bdc1c6` — Google grey-300

### Surface & Borders

- The Material 3 surface-container ladder: `#ffffff` →
  `#f8fafd` → `#eef2f7` → `#dde3ea` → `#cdd2da`
- **border** `#dadce0` — the iconic Google hairline
- **border-soft** `#e8eaed` — lighter divider
- **border-strong** `#bdc1c6` — emphasized

### Shadow Colors

Material 3 uses *narrow-tinted* shadows mixing rgba(60,64,67) (a
near-black with a slight cool tilt) — never pure black. Multi-layer
ambient + key shadows.

- **ambient** `0 1px 2px rgba(60,64,67,0.3), 0 1px 3px rgba(60,64,67,0.15)`
- **level-3** `0 4px 8px rgba(60,64,67,0.3), 0 8px 16px rgba(60,64,67,0.15)`
- **prompt-focus** `0 0 0 1px #1a73e8, 0 4px 16px rgba(154,114,203,0.18)`
  — the gradient-tinted halo when the prompt is focused

### Semantic

- **success** `#188038` + bg `#e6f4ea` — Google green
- **warning** `#f29900` + bg `#fef7e0`
- **danger**  `#d93025` + bg `#fce8e6`
- **info**    `#1a73e8` + bg `#e8f0fe` — uses the brand

## 3. Typography Rules

### Font Family

- **Display**: Google Sans Display, with Google Sans, Product Sans,
  `-apple-system`, `system-ui`, Segoe UI, Roboto, Helvetica, Arial,
  sans-serif fallback
- **Body**: Google Sans Text (the text-optimized cut), with Google
  Sans, Roboto, system fallback
- **Mono**: Google Sans Mono, with Roboto Mono, Menlo, Consolas
  fallback (replaces the older Roboto Mono on modern surfaces)
- **OpenType features**: `ss01` (alt single-storey a — gives Google
  Sans its slightly humanist register), plus `zero` and `tnum` on
  mono for unambiguous numerals

### Hierarchy

| Role | Font | Size | Weight | Line Height | Tracking | OT | Notes |
|---|---|---|---|---|---|---|---|
| display-large | Google Sans Display | 64 | 500 | 1.05 | -0.018em | ss01 | Marketing hero |
| display | Google Sans Display | 56 | 500 | 1.1 | -0.015em | ss01 | Section hero |
| h1 | Google Sans Display | 48 | 500 | 1.1 | -0.012em | ss01 | Page title |
| h2 | Google Sans Display | 36 | 500 | 1.15 | -0.01em | ss01 | Major section |
| h3 | Google Sans Display | 28 | 500 | 1.25 | -0.005em | ss01 | Sub-section |
| h4 | Google Sans Display | 22 | 500 | 1.3 | 0 | ss01 | Card title |
| h5 | Google Sans Display | 18 | 500 | 1.35 | 0 | ss01 | List title |
| title-large | Google Sans | 16 | 500 | 1.4 | 0 | — | Inline title |
| body-large | Google Sans Text | 18 | 400 | 1.55 | 0 | ss01 | Hero body |
| body | Google Sans Text | 16 | 400 | 1.55 | 0 | ss01 | Default body |
| chat-message | Google Sans Text | 16 | 400 | 1.6 | 0 | ss01 | Chat turns |
| body-small | Google Sans Text | 14 | 400 | 1.5 | 0.01em | ss01 | Footnotes |
| label-large | Google Sans Text | 14 | 500 | 1.4 | 0.01em | — | Form labels |
| label | Google Sans Text | 13 | 500 | 1.4 | 0.02em | — | UI labels |
| label-small | Google Sans Text | 11 | 500 | 1.3 | 0.04em | — | Micro labels |
| caption | Google Sans Text | 12 | 400 | 1.4 | 0.02em | — | Metadata |
| button | Google Sans Text | 14 | 500 | 1.4 | 0.01em | — | Button label |
| code-inline | Google Sans Mono | 14 | 400 | 1.5 | 0 | zero, tnum | Inline code |
| code-block | Google Sans Mono | 14 | 400 | 1.6 | 0 | zero, tnum | Code blocks |

### Principles

- **Single-family discipline.** Google Sans Display, Text, and Mono
  are all one type family — switching to Roboto looks like a legacy
  Google surface from before 2023.
- **500 carries hierarchy.** Headings use `500` (medium), not `600`
  or `700`. The slightly under-bold weight is what gives Google Sans
  its conversational rather than authoritative voice.
- **Body at 16, chat at 16/1.6.** The chat-message variant is body
  with a slightly looser line-height (1.6) — a deliberate move to
  improve readability on long-form responses.
- **Mild tracking discipline.** Display starts at `-0.018em` and
  releases to 0 at body. The system never goes more negative than
  `-0.018em`; Google Sans's geometry doesn't need it.
- **Mono is Google Sans Mono, not Roboto Mono.** The 2023+ Mono cut
  matches the same skeleton as Display/Text — a coherent family.
- **Caption + label use slight positive tracking** (`0.02–0.04em`)
  to keep small text from collapsing into a blur.

## 4. Component Stylings

### Buttons (Material 3 — 4 variants)

**Filled (primary)**
- Background: `#1a73e8`, Text: `#ffffff` at 14/500
- Padding: `10 24`, Height: 40
- Radius: pill (9999) — Material 3's 2024 commitment
- Hover: bg `#1967d2`, ambient shadow appears
- Active: bg `#185abc`, ripple from press point
- Focus: outline `2px solid #1a73e8` with 2px offset
- Use: primary CTA — "Try Gemini Pro", "Sign in"

**Tonal**
- Background: `#e8f0fe`, Text: `#0b57d0` at 14/500
- Padding: `10 24`, Height: 40, Radius: pill
- Hover: bg `#d3e3fd`
- Use: secondary action — "Learn more", in-app upgrade prompts

**Outlined**
- Background: transparent, Text: `#1a73e8`
- Border: `1px solid #dadce0`
- Radius: pill, Padding: `10 24`
- Hover: bg `rgba(26,115,232,0.04)`; border `#1a73e8`
- Use: tertiary, often paired next to filled

**Text**
- Background: transparent, Text: `#1a73e8` at 14/500
- Padding: `8 16`, Radius: pill
- Hover: bg `rgba(26,115,232,0.08)` (state layer)
- Use: cancel, dismiss, link-style action

### Chips & Pills

**Suggestion chip** — `#ffffff` bg with `1px solid #dadce0` border,
pill radius, `8 14` padding, 14px Google Sans 400 text. Hover: bg
`#f8fafd` and border `#bdc1c6`. Use: conversation-starter chips
below the prompt bar.

**Input chip / file attachment** — `#e8f0fe` tonal bg, `#0b57d0`
text, optional close × icon, pill radius, `6 12` padding. Use:
attached-file indicators, model-selector chip.

**Status chip** — semantic bg + text colour pair (success green,
warning yellow, etc.), pill radius, label-small typography.

### Inputs / Forms

**Prompt input (the signature)**
- Background: `#f8fafd`, no border at rest (or `1px solid transparent`)
- Radius: 28 (prompt) — visually a tall rounded rect
- Padding: `14 20`, Min-height: 56
- Font: 16px Google Sans Text 400
- Inline controls: mic icon left of cursor, image-upload icon next
  to it, sparkle send button on the right
- Focus: border `#1a73e8`; shadow `0 0 0 1px #1a73e8, 0 4px 16px
  rgba(154,114,203,0.18)` — the gradient-tinted halo

**Standard text input**
- Background: `#ffffff`, Border: `1px solid #dadce0`
- Radius: 8 (md), Padding: `10 16`, Height: 40
- Focus: border `#1a73e8`, ring `0 0 0 3px rgba(26,115,232,0.32)`

**Select** — same shell as input + chevron icon `#5f6368`; popover
follows the level-3 Material elevation.

### Cards

**Standard card**
- Background: `#ffffff`, Border: `1px solid #dadce0` (or none with
  ambient shadow), Radius: 24 (card)
- Padding: 24, Shadow: ambient
- Hover: shadow elevates to level-1

**Hero card / showcase**
- Background: tonal-container (`#e7eef9` or `#f3eafa`), Radius: 28
- No border; the tonal fill carries the affordance

**Message card** — *no shell*. Chat turns sit on plain `#ffffff` /
dark canvas. Typography and 20px vertical padding structure the
turns. User vs Gemini distinguished by avatar + label, not by
bubble shape.

**User bubble (alt presentation)** — `#e8f0fe` tonal bg, `1f1f1f`
text, 24 radius, `12 20` padding. Used in some Gemini variants for
the user-side message.

### Navigation

**Top bar**: 64px tall, `#ffffff` bg, no shadow at rest, `1px
solid #dadce0` bottom border. Logo + Gemini sparkle on the left,
account + theme toggle on the right.

**Sidebar**: 280px wide, `#f8fafd` bg, list of conversations as
text rows (no card shell), selected row gets `#eef2f7` bg. New-chat
button at the top is a tonal pill.

**Prompt bar**: floats at the bottom of the viewport with 24px
margin, max-width 768px, `#f8fafd` rounded rect with the
suggestion chips floating above when empty.

### Tooltips

Material 3 plain tooltip: `#3c4043` (dark grey) bg, white text at
12/400, 6px radius, `4 10` padding, 8px offset from the trigger.

### Toasts (Snackbars)

Bottom-centre, `#3c4043` bg, white text, `1f1f1f` typography at
14/400, 4px radius (Material 3 snackbar uses smaller radius), 12 18
padding. Auto-dismiss 5s with optional action button in `#a8c7fa`.

### Modals (Dialogs)

Centred dialog on `rgba(32,33,36,0.4)` scrim. Body at `#ffffff`, 28
radius, 24 padding, level-3 shadow. Title h3 500, body 16/400,
action row at bottom-right with text or filled buttons.

## 5. Layout Principles

### Spacing System

- **Base unit**: 8px (Material 3 grid)
- **Scale**: `[0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128]`
- The 8px grid is honoured globally; 4px steps appear inside dense
  components (input padding, chip padding)

### Grid & Container

- **Page width**: 1280px max for marketing
- **Chat width**: 768px — chat turns and prompt input cap here, even
  on wide displays, to keep line length comfortable
- **Sidebar**: 280px fixed
- **Prose width**: 720px — long-form responses
- **Gutter**: 16px
- The chat surface follows a single-column flow; marketing pages use
  a 12-column grid

### Whitespace Philosophy

Gemini is **air-rich** — generous padding (24–48px) around chat
turns, comfortable 1.55–1.6 line-heights, and Material 3's tonal
containers carry section grouping without dense card stacks. The
result reads more like a notebook than a dashboard.

### Section Cadence

Marketing pages alternate `#ffffff` canvas with `#f8fafd` /
`#eef2f7` tonal-container bands. The prompt-bar bottom region is
always the same `#f8fafd` regardless of section above it.

## 6. Shapes & Radius Scale

| Tier | px | Use |
|---|---|---|
| Micro | 2 | Decorative slashes |
| Small | 4 | Snackbar, dense inline elements |
| Medium | 8 | Standard inputs, mid-tier cards |
| Large | 12 | Tonal panel containers |
| XL | 16 | Heavy cards, info containers |
| Card | 24 | Default Material 3 card |
| Card-large | 28 | Hero cards, modal bodies |
| Prompt | 28 | The Gemini prompt input |
| Pill | 9999 | Buttons, chips, suggestion pills |

The Gemini surface essentially has no sharp corners. Even the
sidebar items are 12-radius rounded rects. Material 3's "expressive"
shape language commits hard to rounding.

Compound radii: modal headers (`28 28 0 0` to lock to body), and the
prompt bar's bottom edge sits at `28` while the floating suggestion
chips above are pure pills.

## 7. Depth & Elevation

Material 3 uses **tonal surface levels** plus subtle shadows. The
ladder:

| Level | Treatment | Use |
|---|---|---|
| 0 | flat — `#ffffff` only | canvas, chat surface |
| 1 | `#f8fafd` tonal | prompt input bg, sidebar |
| 2 | `#eef2f7` tonal + ambient shadow | hover state |
| 3 | `#dde3ea` tonal + level-1 shadow | menus, popovers |
| 4 | `#cdd2da` tonal + level-3 shadow | navigation drawer |
| 5 | `#ffffff` + level-5 shadow + scrim | modals, dialogs |

### Shadow Philosophy

Material 3 favours **tonal containers over shadows** — the
surface-container ladder does most of the depth work, and shadows
only appear on actively-floating elements (popovers, menus,
modals). Shadows mix rgba(60,64,67) (a near-black with a slight
cool tint), never pure black, and use the multi-layer ambient + key
pattern from Material's elevation system.

The signature Gemini shadow is the **prompt-focus halo**: when the
prompt input is focused, a 1px brand outline + a 16px-blur,
4px-offset shadow tinted with `rgba(154,114,203,0.18)` — sampled
from the gradient — bleeds the brand colour into the surrounding
whitespace. It's the one place the gradient touches the page chrome.

## 8. Interaction & Motion ✨

### Easing curves (Material 3 motion)

- **emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — default for state
  transitions
- **emphasized-decelerate**: `cubic-bezier(0.05, 0.7, 0.1, 1)` —
  enters
- **decelerate**: `cubic-bezier(0, 0, 0, 1)` — settles
- **accelerate**: `cubic-bezier(0.3, 0, 1, 1)` — exits

### Duration buckets (Material 3 spec)

- **short-1**: 50ms — instant micro
- **short-2**: 100ms — state-layer fade
- **medium-1**: 200ms — hover, button state
- **medium-2**: 250ms — chip enter
- **long-1**: 350ms — modal enter, ripple
- **long-2**: 450ms — page transition

### Per-component micro-states

- **Button hover**: state-layer fades in over 100ms
  (`rgba(26,115,232,0.08)` overlay on filled bg); shadow elevates
  ambient → level-1 over 200ms
- **Button press**: ripple expands from press point over 350ms with
  emphasized easing; state-layer at 12% alpha
- **Card hover**: shadow ambient → level-2 over 200ms; no transform
- **Chip hover**: bg `#ffffff → #f8fafd` over 100ms; border darkens
- **Prompt focus**: brand outline + gradient halo fade in over 250ms
  emphasized-decelerate
- **Send sparkle**: when prompt is submitted, the gradient sparkle
  rotates 360° over 600ms — Gemini's only branded motion gesture

### Page transitions

Route changes within the chat app use opacity + 8px translateY → 0
over 350ms emphasized-decelerate. Marketing pages use a fade between
heroes (200ms).

### Reduced motion

Respects `prefers-reduced-motion: reduce` — ripples disabled,
gradient rotation on send disabled (sparkle stays static), all
transforms reduced to opacity-only at the same durations. Tonal
container reveals replace slide-in animations.

## 9. Accessibility & A11y ✨

### Contrast pairs

- **#1f1f1f on #ffffff**: 16.1 — AAA at all sizes
- **#ffffff on #1a73e8**: 4.7 — AA at body
- **#0b57d0 on #e8f0fe**: 7.2 — AAA at body
- **#5f6368 on #ffffff**: 5.9 — AA at body, fails AAA
- **#a8c7fa on #1b1b1b** (dark mode): 9.4 — AAA

### Focus indicators

Material 3 focus is a **2px outline + 2px offset** in `#1a73e8`,
implemented via outline (not ring) so it composites cleanly with
borders. Add a 3px translucent halo for tonal-container focus
(`rgba(26,115,232,0.32)`).

### ARIA patterns

- **Prompt input**: `role=textbox` + `aria-multiline=true` +
  `aria-label="Ask Gemini"` + `aria-describedby` pointing to the
  helper microcopy
- **Suggestion chips**: `role=button`, label is the chip text
- **Chat turns**: `role=article` + `aria-label="User message"` /
  `"Gemini response"`; new responses announce via `aria-live=polite`
- **Send button**: `aria-label="Send message"` + `aria-disabled`
  reflects whether the prompt has content
- **Sidebar conversations**: `role=list` + `role=listitem`;
  selected item has `aria-current=page`

### Keyboard nav

Tab order: skip-to-content → header (logo, account) → sidebar (new
chat → conversation list) → prompt input → suggestion chips → send
button → footer. **Enter** in the prompt sends; **Shift+Enter**
inserts newline. **Esc** dismisses any open dialog or popover.

### Screen reader hints

- Sparkle send button: `aria-label="Send"` + visually-hidden
  description of the gradient
- File-attachment chips: full filename in `aria-label`
- Decorative gradient elements: `aria-hidden=true`

### Reduced motion

Honoured globally; see §8. The gradient on the Gemini glyph remains
static (it's not motion); only the rotate-on-send animation is
disabled.

### High-contrast (forced colors)

In Windows high-contrast mode, the gradient is replaced with solid
`#1a73e8`, all borders thicken to 2px, tonal-container backgrounds
become system colours.

## 10. Responsive Behavior

| Breakpoint | px | Layout |
|---|---|---|
| mobile | < 600 | sidebar collapses to drawer; chat full-width; prompt bar full-width |
| tablet | 600–904 | sidebar narrow (220px); chat 720 max |
| laptop | 905–1239 | full sidebar 280; chat 768 |
| desktop | 1240–1439 | same as laptop, marketing widens to 1280 |
| wide | ≥ 1440 | same — chat caps at 768 even on 4K |

### Touch targets

Material 3 minimum: 48 × 48 (slightly larger than iOS 44). Buttons
on mobile grow padding to maintain the target; icon buttons use a
44 × 44 tap surface even when the visual icon is 24 × 24.

### Collapsing strategy

- Sidebar: drawer with hamburger trigger at < 905
- Suggestion chips: scroll horizontally on mobile
- Modal dialogs: become bottom sheets on mobile (full-width with top
  rounded corners)
- Tables (settings, comparison) become stacked rows < 600

### Image behavior

User-uploaded images render inline at max-width 320 with 12 radius
and aspect-ratio preserved. AI-generated image responses use a 24
radius card frame.

### Container queries

Used in chat-message components to switch between portrait and
landscape image-grid layouts based on container width.

## 11. Content & Voice ✨

### Tone

Helpful, conversational, slightly self-effacing. Gemini avoids the
declarative authority of ChatGPT and the warmth of Claude — it
reads more like a research assistant who is willing to say "I'm not
sure" without anxiety. Sentences are present-tense, second-person
("Here's what I found", "Want me to draft that?").

### Microcopy patterns

- **Button verbs**: "Try Gemini Pro", "Sign in", "Send", "Add
  image", "Regenerate". Imperative, present-tense.
- **Errors**: empathetic + actionable. "I couldn't reach the web
  right now. Try again?" rather than "Network error 500."
- **Successes**: brief and decorative. "Saved to drafts."
- **Progress**: "Thinking..." or "Searching the web..." rather
  than spinners alone

### Empty states

The empty chat surface shows: a Gemini sparkle, a soft greeting
("Hello, [name]"), and 2–4 suggestion chips. No verbose explanation,
no model-spec disclosure — the surface invites typing.

### CTA verb conventions

- **Primary**: "Try Gemini Pro", "Sign in", "Get started"
- **Secondary**: "Learn more", "See examples"
- **Send**: just "Send" — never "Submit" or "Ask"
- **Cancel**: "Cancel" — never "Dismiss" or "No"

Gemini avoids "Click here" / "Free trial" / decorated CTAs.

## 12. Dark Mode & Theming ✨

Gemini ships a **full Material 3 dark mode**. The shape, motion, and
typography stay identical; only the colour tokens swap. The dark
canvas is `#1b1b1b` (Google's surface-dark default), text rises to
`#e3e3e3`, and the brand reads in blue 200 `#a8c7fa` so the contrast
on dark surfaces stays AAA. The gradient does not invert — the
sparkle gradient is the same `#4285f4 → #9b72cb → #d96570` in both
themes, because it's a brand mark, not a token.

**Dark token map (key swaps):**

```yaml
colors-dark:
  bg: '#1b1b1b'                    # surface-dark
  bg-soft: '#222222'                # container-low
  surface: '#2d2d2d'                # container
  surface-high: '#3a3a3a'           # container-high
  text: '#e3e3e3'                   # on-surface
  text-muted: '#9aa0a6'             # on-surface-variant
  brand: '#a8c7fa'                  # blue 200 — readable on dark
  on-brand: '#062e6f'               # ink on brand-light
  brand-soft: '#1a2840'             # tonal blue container, dark
  surface-tinted: '#1a2840'
  border: '#444444'
  scrim: 'rgba(0,0,0,0.5)'
  ring-focus: 'rgba(168,199,250,0.32)'
```

Dark-mode shadows reduce in opacity and rely more on the tonal-step
ladder (which is more legible in dark surfaces). The prompt-bar
focus halo becomes `rgba(168,199,250,0.18)` — same gradient-tinted
move, lighter to match the inverted ground.

## 13. Lineage & Influences

Gemini is Google's house style applied to AI chat. Material 3 (the
"Expressive" generation shipped in 2023–2024) provides the structural
vocabulary: full-pill buttons, 24–28px card radii, soft tonal
containers in blue (`#e8f0fe`), and a generous 16px body on a 1.55
line-height. The typographic system is Google Sans top-to-bottom —
Google Sans Display for headings, Google Sans Text for body, Google
Sans Mono for code — replacing the older Roboto stack on every modern
Google product surface.

The chromatic fingerprint is the Gemini sparkle gradient
(`#4285f4 → #9b72cb → #d96570`), a trio that runs through every
Gemini product surface from the icon to the prompt-bar focus glow.
The primary action colour stays as Google blue 600 `#1a73e8`, but
the gradient is what makes the brand feel like *Gemini* and not
just another Material app.

What it inherits: Material 3's full tonal-container language;
Google Sans's humanist register; Google's classic muted-grey-700
palette discipline; Apple Spotlight / Siri's "single signature
gradient mark" idea (the sparkle plays the same role as Siri's
animated sphere). What it rejects: ChatGPT's monospace-heavy
near-monochrome; Claude's warm cream and serif; aggressive
Cyberpunk-AI gradient sweeps. Gemini stays calm.

**Influences:**
- **Material 3** — Provides the entire shape, motion, and tonal-
  container vocabulary; full-pill buttons, 24px cards, soft
  surfaces ([m3.material.io](https://m3.material.io))
- **Google Sans / Product Sans** — The typographic identity across
  every Google consumer surface, now in Gemini's Display/Text/Mono
  cuts ([fonts.google.com](https://fonts.google.com))
- **Apple Spotlight / Siri** — Conversational AI surfaces with a
  single signature gradient mark; Gemini's sparkle plays the same
  role ([apple.com/siri](https://www.apple.com/siri))
- **Google Search 2024** — The prompt-bar pill geometry and tonal
  blue chip language
- **Material You (M3 dynamic colour)** — Source of the tonal-
  container ladder concept

## 14. Do's and Don'ts

### Do

- Reserve the sparkle gradient (`#4285f4 → #9b72cb → #d96570`) for
  the Gemini glyph and the send action — it loses meaning if applied
  to backgrounds or generic CTAs.
- Use Google Sans across display, body, and mono — mixing in Roboto
  looks like a legacy Google surface.
- Lean on Material 3's tonal containers (`#e8f0fe`, `#eef2f7`)
  rather than borders or shadows for grouping.
- Use full-pill buttons (radius 9999); Material 3's 2024 shape spec
  commits hard to it.
- Keep chat turns shell-less — let Google Sans and 16/1.6 typography
  carry the structure.
- Honour the 8px Material grid; use 4px steps only inside dense
  components.
- Use the prompt-bar focus halo — `0 0 0 1px #1a73e8, 0 4px 16px
  rgba(154,114,203,0.18)` — to bleed the brand into negative space.
- Ship a full dark-mode swap with the same shape/motion language;
  swap colour tokens only.
- Honour `prefers-reduced-motion`: disable ripples and gradient
  rotation.
- Use Google's house grey-700 `#5f6368` for muted text — it's the
  iconic Google muted register.

### Don't

- Square the buttons — full pill radius is part of Material 3's
  2024+ identity, and Gemini commits to it harder than most Google
  products.
- Introduce shadows on chat turns or cards; tonal surfaces are the
  depth language.
- Swap Google blue 600 for a different "AI" hue (purple, teal). The
  strategic message is *Gemini is Google*, carried by `#1a73e8`.
- Apply the sparkle gradient to large fills, hero backgrounds, or
  generic CTAs — it must stay a glyph-and-send-only mark.
- Use pure black `#000` or pure white `#ffffff` for text on dark
  mode — the system uses `#e3e3e3` and `#1b1b1b`.
- Mix Roboto Mono into code blocks; Google Sans Mono is the modern
  surface choice.
- Use heavy weights (`700+`); Google Sans's 500-medium carries
  hierarchy.
- Centre H1s; left-aligned is the Material 3 default and Gemini
  follows it.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:               #ffffff
bg-soft:          #f8fafd
surface:          #eef2f7
text:             #1f1f1f
text-muted:       #5f6368
brand:            #1a73e8
brand-soft:       #e8f0fe
gradient-from:    #4285f4
gradient-via:     #9b72cb
gradient-to:      #d96570
border:           #dadce0
success:          #188038
danger:           #d93025
```

### Example Component Prompts

1. **Hero with Material 3 buttons**: "Create a hero on `#ffffff`
   with a centred 56px Google Sans Display 500 headline at
   `-0.015em` tracking, body at 18px/1.55 in `#1f1f1f`. Below the
   copy place two pill CTAs: a filled button (`#1a73e8` bg, white
   text, 14px Google Sans 500, padding `10 24`, height 40, pill
   radius) reading 'Try Gemini Pro', and an outlined button
   (transparent bg, `#1a73e8` text, `1px solid #dadce0`) reading
   'Learn more'."

2. **Prompt input bar**: "Build the Gemini prompt input: 56px
   min-height, `#f8fafd` background, no border at rest, 28px radius,
   16px Google Sans Text body, 14px 20px padding. Inline mic +
   image-upload icons left of the cursor, sparkle send button on
   the right (40 × 40, conic gradient `from 220deg, #4285f4,
   #9b72cb, #d96570, #4285f4`). On focus: `0 0 0 1px #1a73e8`
   outline + `0 4px 16px rgba(154,114,203,0.18)` halo."

3. **Suggestion chips**: "Render a horizontal scroll row of
   suggestion chips floating above the prompt: each chip is
   `#ffffff` with `1px solid #dadce0` border, pill radius, 14px
   Google Sans 400 text in `#1f1f1f`, padding `8 14`. On hover, bg
   shifts to `#f8fafd` and border darkens to `#bdc1c6`."

4. **Tonal pill (secondary CTA)**: "Make a Material 3 tonal button:
   `#e8f0fe` background, `#0b57d0` text at 14px Google Sans 500,
   padding `10 24`, height 40, pill radius, no border. Hover: bg
   `#d3e3fd`."

5. **Card with Material 3 shape**: "Design a feature card: `#ffffff`
   bg, 24 radius, 24 padding, ambient shadow `0 1px 2px
   rgba(60,64,67,0.3), 0 1px 3px rgba(60,64,67,0.15)`. Title at h3
   28/500, body at 16/400 in `#1f1f1f`. On hover, shadow elevates
   to level-2 over 200ms emphasized."

6. **Sparkle send glyph**: "Draw a 4-point star (rotate 45°) filled
   with a conic gradient from 220° spinning through `#4285f4 →
   #9b72cb → #d96570 → #4285f4`. On click, animate 360° rotation
   over 600ms emphasized easing."

### Iteration Guide

1. **Material 3 over Material 2.** If the buttons are squared with
   8px radius, you're in M2. M3 commits to full pill (9999) for
   buttons, 24–28 for cards.
2. **Tonal containers, not shadows.** When stacking content, prefer
   `#f8fafd → #eef2f7 → #dde3ea` tonal levels over shadow elevation.
3. **Google Sans, not Roboto.** Replace Roboto with Google Sans
   Display/Text/Mono everywhere. The single-family discipline is
   load-bearing.
4. **Gradient is for the glyph and the send button only.** If
   you're applying the sparkle gradient as a hero background or a
   CTA fill, you've broken the brand discipline. Use solid blue 600
   for primary actions; reserve the gradient.
5. **500 weight is the hierarchy weight.** Headlines use 500, not
   700. The slightly under-bold weight is what gives Gemini its
   conversational tone.
6. **16px body, 1.55–1.6 line-height.** Don't tighten chat-message
   copy; the open line-height is part of the calm register.
7. **Honour the 8px grid.** All layout and component spacing should
   resolve to multiples of 8 (or 4 inside dense components).
8. **Dark mode swaps tokens only.** Shape, motion, typography stay
   identical between light and dark — only colour tokens change.
   Brand becomes `#a8c7fa` (blue 200) on dark.
