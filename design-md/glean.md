---
name: Glean
tagline: White enterprise canvas, near-black indigo headlines, and one electric #343ced — Work AI dressed for the boardroom.
updated_at: 2026-05-29T21:43:31.398Z
published_at: 2026-05-29T21:43:31.398Z
author: webdesignhot
source_url: https://www.glean.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [ai, saas]
tags: [light, sans, enterprise]
preview_swatch: ['#ffffff', '#343ced', '#0a0227']
related: []
description: 'Glean is enterprise Work AI — an assistant, agent platform, and company-wide search — and its marketing site reads exactly that confident: a bright paper-white `#ffffff` canvas, body copy in a calm neutral `#333333`, and headlines set in near-black indigo `#0a0227` that lands a half-shade warmer and more authoritative than pure black. PolySans Neutral carries every word, kept at a restrained 400 weight even at the 56px hero size so the type feels engineered rather than shouted. The whole page resolves to a single chromatic event: electric indigo-blue `#343ced` (rgb 52,59,237), reserved almost entirely for the `Get a demo` call-to-action, which renders as a fully-rounded 64px pill — the brand''s most recognisable shape primitive. Secondary actions invert the same blue into an outline-on-white treatment, never a second hue. The result is a trustworthy, AI-search register: enterprise-serious, generously white, and disciplined enough that the one indigo CTA reads as the obvious next click on every screen.'

aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent
  muted: text-muted
  border: border
  ring: brand
colors:
  bg: '#ffffff'                  # body background; bright paper-white enterprise canvas
  surface: '#f5f5f7'             # observed feature/card tile; faint cool-grey lift off white
  surface-soft: '#fafafa'        # softest panel tint, a half-step off white
  text: '#333333'                # body color rgb(51,51,51); calm neutral, not pure black
  text-heading: '#0a0227'        # h1/h2 color rgb(10,2,39); near-black indigo, warm authority
  text-muted: '#6b6b73'          # captions, metadata, secondary labels
  text-faint: '#9a9aa2'          # placeholder text, disabled labels
  brand: '#343ced'               # ELECTRIC-INDIGO rgb(52,59,237); the single action colour
  brand-sampled: '#343bed'       # primary 'Get a demo' fill as sampled (rgb 52,59,237)
  brand-hover: '#2a31cc'         # pressed/hover CTA; one step deeper indigo
  brand-soft: '#ebecff'          # soft indigo wash for ghost-button and selected fills
  brand-deep: '#29246a'          # deep indigo accent (observed widget outline); footers, on-dark grounds
  on-brand: '#ffffff'            # white text on the indigo CTA
  border: '#e6e6ea'              # hairline divider; light cool-grey 1px
  border-strong: '#d2d2d8'       # emphasised divider, form field borders
  success: '#058a5e'             # enterprise green for confirmations
  success-bg: '#e6f5ee'          # success surface tint
  warning: '#9a6b00'             # warm amber for caution states
  warning-bg: '#fbf2dc'          # warning surface tint
  danger: '#b42318'              # restrained red for errors
  danger-bg: '#fdeceb'           # danger surface tint
  info: '#343ced'                # info reuses the brand indigo
  info-bg: '#ebecff'             # info surface tint

typography:
  display:
    family: '"PolySans Neutral", "PolySans", system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  body:
    family: '"PolySans Neutral", "PolySans", system-ui, -apple-system, "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500]
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 72, weight: 400, lineHeight: 1.02, tracking: '-0.02em',  family: display }
    display-lg:      { size: 56, weight: 400, lineHeight: 1.05, tracking: '-0.018em', family: display }
    h1:              { size: 56, weight: 400, lineHeight: 1.05, tracking: '-0.018em', family: display }
    h2:              { size: 40, weight: 400, lineHeight: 1.1,  tracking: '-0.014em', family: display }
    h3:              { size: 32, weight: 500, lineHeight: 1.2,  tracking: '-0.01em',  family: display }
    h4:              { size: 24, weight: 500, lineHeight: 1.3,  tracking: '-0.005em', family: display }
    h5:              { size: 20, weight: 500, lineHeight: 1.35, tracking: '0',        family: display }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0.01em',  family: body }
    eyebrow:         { size: 13, weight: 600, lineHeight: 1.4,  tracking: '0.08em',  family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',  family: body }

radius:
  micro: 2
  sm: 4
  md: 8
  lg: 12
  xl: 16
  pill: 9999      # 64px CTA radius resolves to a full pill at button height

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 72
  hero-padding-y: 96
  section-padding-y: 96
  card-padding: 24

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-decelerate: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  hover-lift: 'translateY(-1px)'
  page-transition: 'opacity-only, 200ms standard'
  reduced-motion: 'respects prefers-reduced-motion: reduce'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

components:
  button-primary:
    backgroundColor: brand
    textColor: on-brand
    radius: pill
    padding: '14px 28px'
    font: { family: body, weight: 500, size: 16 }
    hover: { backgroundColor: brand-hover }
    use: 'The single saturated event — Get a demo, Start free; 64px pill, white text'
  button-outline:
    backgroundColor: bg
    textColor: brand
    border: brand
    radius: pill
    padding: '14px 28px'
    font: { family: body, weight: 500, size: 16 }
    hover: { backgroundColor: brand-soft }
    use: 'Secondary action — Sign in; same indigo inverted to outline-on-white, never a new hue'
  button-ghost:
    backgroundColor: transparent
    textColor: text-heading
    radius: pill
    padding: '14px 28px'
    font: { family: body, weight: 500, size: 16 }
    hover: { backgroundColor: surface }
    use: 'Tertiary action; nav-adjacent links and quiet CTAs'
  button-on-dark:
    backgroundColor: bg
    textColor: brand-deep
    radius: pill
    padding: '14px 28px'
    font: { family: body, weight: 500, size: 16 }
    hover: { backgroundColor: surface }
    use: 'Inverted CTA inside the deep-indigo footer / dark band'
  card:
    backgroundColor: surface
    border: border
    radius: lg
    padding: 24
    shadow: 'none'
    use: 'Feature / capability tile; depth via faint tonal lift, not shadow'
  card-elevated:
    backgroundColor: bg
    border: border
    radius: lg
    padding: 28
    shadow: 'rgba(10,2,39,0.06) 0 1px 2px, rgba(10,2,39,0.05) 0 8px 24px'
    use: 'Floating panels — pricing, demo previews, search-result cards'
  input:
    backgroundColor: bg
    border: border-strong
    textColor: text
    radius: md
    padding: '10px 14px'
    font: { family: body, weight: 400, size: 16 }
    focus: { border: brand, ring: '0 0 0 3px rgba(52,60,237,0.18)' }
  badge:
    backgroundColor: brand-soft
    textColor: brand
    radius: pill
    padding: '4px 10px'
    font: { family: body, weight: 600, size: 12 }

shadows:
  none: 'none'
  ambient: 'rgba(10,2,39,0.05) 0 1px 2px'
  raised: 'rgba(10,2,39,0.06) 0 1px 2px, rgba(10,2,39,0.05) 0 8px 24px'
  elevated: 'rgba(10,2,39,0.08) 0 12px 32px, rgba(10,2,39,0.05) 0 4px 8px'
  ring: '0 0 0 3px rgba(52,60,237,0.18)'

accessibility:
  contrast-text-on-bg: 12.6           # #333333 on #ffffff — AAA at body sizes
  contrast-heading-on-bg: 18.9        # #0a0227 on #ffffff — AAA at all sizes
  contrast-on-brand: 4.9              # #ffffff on #343ced — AA body, AAA large
  contrast-brand-on-bg: 4.3           # #343ced on #ffffff — AA for large/UI text
  focus-ring: '3px solid rgba(52,60,237,0.4) with 2px offset'
  reduced-motion-honored: true
  keyboard-trap-free: true
  min-touch-target: 44

dark-mode: light-only

lineage:
  summary: |
    Glean presents as enterprise Work AI, and its visual system is a study in
    trust-via-restraint. The canvas is bright paper-white (`#ffffff`), body copy
    sits in a calm neutral grey (`#333333`) rather than black, and headlines are
    set in a near-black indigo (`#0a0227`, rgb 10,2,39) — a deliberate warming of
    pure black that ties the type back to the brand's indigo identity without ever
    raising its voice. The entire chromatic budget is spent on one colour: electric
    indigo-blue `#343ced` (rgb 52,59,237), reserved almost exclusively for the
    `Get a demo` call-to-action. That CTA renders as a fully-rounded 64px pill —
    the single most recognisable shape primitive on the site — and secondary
    actions (`Sign in`) invert the same indigo into an outline-on-white treatment
    rather than introducing a second hue. The single-blue, white-canvas discipline
    is the Stripe / Linear lineage of enterprise SaaS, but Glean's very-rounded
    pill CTAs and its search-bar-as-hero composition push it toward the consumer
    search and AI-product register (Perplexity, Algolia, the Google search box)
    rather than the dense developer-tool look. PolySans — a geometric-humanist
    grotesque shared with Spline and a wave of modern AI/dev brands — is held at a
    restrained 400 weight even at hero scale, signalling engineered confidence over
    marketing shout. The result is a surface that reads enterprise-serious and
    AI-native at the same time: generously white, chromatically disciplined, and
    oriented entirely around guiding the buyer to that one indigo pill.
  influences:
    - name: Stripe
      role: Single confident action colour and trust-via-restraint chromatic discipline on a white canvas.
      url: https://stripe.com
    - name: Linear
      role: Near-black indigo headline register and engineered, low-shout enterprise SaaS typography.
      url: https://linear.app
    - name: Perplexity
      role: Search-bar-as-hero composition and the consumer AI-search product register.
      url: https://www.perplexity.ai
    - name: Algolia
      role: Enterprise search product styling — result cards, query chrome, indigo-blue accent.
      url: https://www.algolia.com
    - name: Spline
      role: PolySans grotesque lineage shared across the modern AI / 3D-tool design wave.
      url: https://spline.design
    - name: OpenType / Grilli Type
      role: PolySans typeface family — geometric-humanist grotesque held at light weights.
      url: https://gt-america.com
---

## 1. Visual Theme & Atmosphere

Glean's marketing site looks like enterprise software that has read the consumer-AI playbook and decided to take only the calm parts. The canvas is bright paper-white at `#ffffff` — no off-white ecru tint, no warm paper cast, just clean corporate light. Body copy sits in a measured neutral grey (`#333333`, rgb 51,51,51) rather than black, which softens long blocks of prose and keeps the page from feeling printed-on-the-nose. Headlines, by contrast, drop into a near-black indigo (`#0a0227`, rgb 10,2,39): a black that has been warmed a half-shade toward the brand's blue, so the big type feels authoritative and quietly on-brand without ever announcing a colour.

The type does the heavy lifting. PolySans Neutral — a geometric-humanist grotesque — carries every word from the 56px hero headline down to the 12px caption, and the most telling decision is that the hero is set at only **400 weight**. Most SaaS sites reach for 600–700 at hero scale to manufacture confidence; Glean does the opposite, trusting the size and the negative tracking to carry weight while the strokes stay slim and engineered. The effect is a headline that reads as a stated fact ("Work AI that Works") rather than a sales pitch.

Chromatically, the entire page resolves to a single event. Electric indigo-blue `#343ced` (rgb 52,59,237) is the brand colour, and it appears almost exclusively on the primary call-to-action — the `Get a demo` button — which renders as a fully-rounded **64px pill** in white-on-indigo. Everything else on the page is white, grey, and near-black indigo. Secondary actions like `Sign in` don't get a second colour: they invert the same indigo into an outline-on-white pill, so the page never has two competing saturated elements. That discipline is the whole point — when there's only one blue thing on the screen, the buyer always knows where to click.

The shape language reinforces the AI-search register. The 64px pill is much rounder than the 8px–12px radii of developer-tool SaaS; it nods to the search box, the chat input, the consumer-friendly affordance. Cards and feature tiles sit at a moderate 12px radius on a faint cool-grey surface (`#f5f5f7`), lifted off the white by tone rather than shadow. The overall atmosphere is enterprise-trustworthy with an AI-native warmth: generously spaced, low on ornament, and engineered to feel like a product that large companies can safely standardise on.

One note on the probe data: Glean's cookie banner is powered by Osano, whose CSS variables (`--osano-*`) happen to reuse `#343ced` for some controls and introduce a green (`#37cd8f` / `#058a5e`) and a deep indigo (`#29246a`). The green is **cookie chrome, not a Glean brand colour** — it does not appear in the product's own palette and should never be treated as an accent. Only the indigo family belongs to Glean.

**Key Characteristics**

- Bright paper-white `#ffffff` canvas — clean and corporate, no warm tint
- Body copy in calm neutral `#333333`, never pure black, for readable long-form
- Headlines in near-black indigo `#0a0227` — black warmed toward the brand blue
- A single saturated chromatic event: electric indigo `#343ced` on the primary CTA
- PolySans Neutral throughout, held at a restrained 400 weight even at 56px hero scale
- Signature 64px pill CTAs — much rounder than developer-tool SaaS, nodding to the search box
- Secondary actions invert the same indigo to outline-on-white, never a new hue
- Moderate 12px radius cards on a faint `#f5f5f7` surface, lifted by tone not shadow
- Generous 96px+ section padding; whitespace as enterprise composure
- Green (`#37cd8f`) in the probe is Osano cookie chrome — explicitly not a brand colour

## 2. Color Palette & Roles

### Canvas

- **bg** (`#ffffff`) [→ body background]: bright paper-white enterprise canvas, the default surface for nearly every band.
- **surface** (`#f5f5f7`) [→ observed feature/card tile]: faint cool-grey lift used for cards and feature tiles; provides depth tonally rather than via shadow.
- **surface-soft** (`#fafafa`): softest panel tint, a half-step off white for nested or quiet panels.

### Text

- **text** (`#333333`) [→ body color rgb(51,51,51)]: primary body copy; a calm neutral grey, deliberately not full black.
- **text-heading** (`#0a0227`) [→ h1/h2 color rgb(10,2,39)]: near-black indigo for all headlines; black warmed toward the brand blue for quiet authority.
- **text-muted** (`#6b6b73`): captions, metadata, and secondary labels.
- **text-faint** (`#9a9aa2`): placeholder text and disabled labels.

### Brand

- **brand** (`#343ced`) [→ ELECTRIC-INDIGO, rgb 52,59,237]: the single action colour; primary CTA fill, focus ring tint, link cousin.
- **brand-sampled** (`#343bed`): the exact fill sampled on the live primary `Get a demo` button (rgb 52,59,237) — within a hair of `#343ced`; either is correct, `#343ced` is canonical.
- **brand-hover** (`#2a31cc`): pressed / hover state for the CTA; one step deeper indigo.
- **brand-soft** (`#ebecff`): soft indigo wash for ghost-button hover fills, selected states, and info banners.
- **brand-deep** (`#29246a`) [→ observed widget outline color]: deep indigo for footers, dark bands, and on-dark grounds.
- **on-brand** (`#ffffff`): white text and icons on the indigo CTA.

### Borders

- **border** (`#e6e6ea`): light cool-grey hairline; the universal 1px divider.
- **border-strong** (`#d2d2d8`): emphasised dividers and resting form-field borders.

### Semantic

- **success** (`#058a5e`) on **success-bg** (`#e6f5ee`): enterprise green for confirmations — note this is a real success token, distinct from the coincidental Osano cookie green.
- **warning** (`#9a6b00`) on **warning-bg** (`#fbf2dc`): warm amber for caution states, never crayon-yellow.
- **danger** (`#b42318`) on **danger-bg** (`#fdeceb`): restrained red for error states and destructive actions.
- **info** (`#343ced`) on **info-bg** (`#ebecff`): info reuses the brand indigo; the system declines to invent a separate info hue.

### Shadow Colors

- Shadows are tinted with the heading indigo (`rgba(10,2,39,...)`) rather than neutral black, keeping elevation in chromatic agreement with the near-black-indigo headline colour. They appear only on truly floating elements — search-result cards, pricing tiers, dropdowns — never as a default card treatment.

## 3. Typography Rules

### Font Family

- **Display & body**: PolySans Neutral → PolySans → system-ui → -apple-system → Segoe UI → Helvetica → Arial → sans-serif. A single geometric-humanist grotesque carries the whole site; there is no serif companion.
- **Mono**: ui-monospace → SFMono-Regular → SF Mono → Menlo → Consolas → monospace — used only for code samples and the occasional query-string display.
- **Weight philosophy**: the family ships in light-to-medium weights here. Headlines hold at 400 (the live hero is literally 400 weight at 56px); 500 carries sub-heads, buttons, and labels; 600 is reserved for eyebrows and small emphatic badges. The site never pushes to 700.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|---|---|---|---|---|---|---|
| display-hero | PolySans Neutral | 72 | 400 | 1.02 | -0.02em | campaign-scale display headline |
| display-lg | PolySans Neutral | 56 | 400 | 1.05 | -0.018em | the live hero size — light, engineered |
| h1 | PolySans Neutral | 56 | 400 | 1.05 | -0.018em | primary page headline, indigo `#0a0227` |
| h2 | PolySans Neutral | 40 | 400 | 1.1 | -0.014em | feature-band heads (live h2 = 40px) |
| h3 | PolySans Neutral | 32 | 500 | 1.2 | -0.01em | sub-feature heads |
| h4 | PolySans Neutral | 24 | 500 | 1.3 | -0.005em | card titles |
| h5 | PolySans Neutral | 20 | 500 | 1.35 | 0 | inline emphasis, small heads |
| body-lg | PolySans Neutral | 18 | 400 | 1.55 | 0 | hero subheads, intro paragraphs |
| body | PolySans Neutral | 16 | 400 | 1.55 | 0 | default reading size (live body = 16px) |
| body-sm | PolySans Neutral | 14 | 400 | 1.5 | 0 | secondary copy, footnotes |
| label | PolySans Neutral | 13 | 500 | 1.4 | 0.01em | UI labels, button text companions |
| eyebrow | PolySans Neutral | 13 | 600 | 1.4 | 0.08em | uppercase section eyebrows / kickers |
| caption | PolySans Neutral | 12 | 500 | 1.4 | 0.02em | image and chart captions |
| code | mono | 14 | 400 | 1.5 | 0 | code block |
| code-inline | mono | 13 | 400 | 1.4 | 0 | inline code, query strings |

### Principles

- **Light headlines, by design**: the hero is 400 weight at 56px. This is the brand's signature typographic move — confidence through size and tracking rather than bold weight. Resist the urge to set headlines at 600–700.
- **Indigo, not black, on headings**: headlines use `#0a0227` (near-black indigo), never pure `#000`. The warmth ties the type to the brand without spending an obvious colour.
- **Negative tracking at scale**: tracking tightens to `-0.018em` at hero size and relaxes back to `0` by body size; the compression keeps the slim 400-weight headlines from drifting.
- **Body grey, not black**: long-form copy is `#333333`, a calibrated neutral that reads comfortably across paragraphs without the harshness of full black on white.
- **One typeface, many weights**: PolySans does everything. The hierarchy is built from weight (400/500/600) and size, not from mixing families.
- **Eyebrows carry the only positive tracking**: section kickers use `+0.08em` uppercase at 13px / 600 — the one place letter-spacing opens up, signalling "category" rather than "headline".

## 4. Component Stylings

### Buttons

**Primary**
- Background: `#343ced` (canonical; live fill sampled as `#343bed`). Text: `#ffffff` at PolySans 500 / 16px. Padding: `14px 28px`. Radius: **64px (full pill)**. Border: none.
- Hover: background → `#2a31cc`, optional `translateY(-1px)`. Active: background → `#2a31cc`, lift removed.
- Use: the single saturated event on the page — `Get a demo`, `Start free`, `Talk to sales`. Exactly one per module.

**Outline (secondary)**
- Background: `#ffffff`. Text: `#343ced` at PolySans 500 / 16px. Border: `1px solid #343ced`. Padding: `14px 28px`. Radius: 64px pill.
- Hover: background → `#ebecff`. Active: background → `#ebecff`, border deepens to `#2a31cc`.
- Use: secondary action paired with the primary CTA — the live `Sign in` button. Same indigo, inverted; never a second hue.

**Ghost (tertiary)**
- Background: transparent. Text: `#0a0227` at PolySans 500 / 16px. Radius: 64px pill (or 8px when inline). No border.
- Hover: background → `#f5f5f7`. Use: nav-adjacent links, quiet secondary CTAs, in-page jump links.

**On-dark inverted**
- Background: `#ffffff`. Text: `#29246a` (deep indigo) at PolySans 500 / 16px. Padding: `14px 28px`. Radius: 64px pill.
- Hover: background → `#f5f5f7`. Use: CTA placed inside the deep-indigo footer or any dark band.

### Cards

**Standard card**
- Background: `#f5f5f7`. Border: `1px solid #e6e6ea`. Radius: 12px. Padding: 24px. No shadow.
- Use: feature / capability tile (e.g. the "Engineering — Debug code" capability cards observed live at 12px radius). Depth via faint tonal lift, not shadow.

**Elevated card**
- Background: `#ffffff`. Border: `1px solid #e6e6ea`. Radius: 12px. Padding: 28px.
- Shadow: `rgba(10,2,39,0.06) 0 1px 2px, rgba(10,2,39,0.05) 0 8px 24px`.
- Use: pricing tiers, demo previews, search-result cards — anything that should float above the canvas.

**Search-result card**
- Background: `#ffffff`. Border: `1px solid #e6e6ea`. Radius: 12px. Padding: `16px 20px`.
- Title in PolySans 500 / 16px `#0a0227`, snippet in 14px `#333333`, source chip as a soft indigo badge. The product-defining primitive — Glean is enterprise search, and the result card is its hero object.

### Badges, Tags, Pills

**Status / category badge**
- Background: `#ebecff`. Text: `#343ced` at PolySans 600 / 12px. Padding: `4px 10px`. Radius: 9999px.
- Use: "New", "Beta", capability tags, source labels in search results.

**Neutral chip**
- Background: `#f5f5f7`. Text: `#6b6b73` at PolySans 500 / 12px. Padding: `4px 10px`. Radius: 9999px.
- Use: filters, metadata pills, file-type tags.

### Inputs / Forms

**Text input**
- Background: `#ffffff`. Border: `1px solid #d2d2d8`. Radius: 8px. Padding: `10px 14px`. Font: PolySans 400 / 16px.
- Focus: border → `#343ced`, ring `0 0 0 3px rgba(52,60,237,0.18)`.
- Placeholder colour: `#9a9aa2`.

**Search input (the signature primitive)**
- Background: `#ffffff` or `#f5f5f7`. Border: `1px solid #e6e6ea`. Radius: 9999px (pill) or 12px when full-width. Padding: `12px 18px 12px 44px` (leading search icon). Font: PolySans 400 / 16–18px.
- Focus: ring `0 0 0 3px rgba(52,60,237,0.18)`, border → `#343ced`.
- Use: the hero search bar — Glean's product is search, so the query input is treated with the same care as a CTA.

### Navigation

**Top bar**
- Background: `#ffffff`, often with a `1px solid #e6e6ea` bottom border on scroll. Height: 72px.
- Logo at left; nav items at PolySans 500 / 15px in `#0a0227`. Hover: colour shifts toward `#343ced`, no underline jump.
- Right cluster: an outline `Sign in` pill and the solid indigo `Get a demo` pill — the two-pill pairing is the brand's nav signature.

**Footer**
- Background: deep indigo (`#29246a`) or white depending on the page. On dark: link text `#ffffff` at 14px, section headings `#ffffff` at 13px / 600 tracked `+0.08em`, inverted white CTA pill.

## 5. Layout Principles

### Spacing System

Base unit: 4px. Scale: `[0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]`. The 24px gutter is the workhorse for card grids; 48px separates stacked blocks within a band; 96–128px separates major sections. The rhythm is enterprise-roomy — generous but not editorial-loose — so the page reads as composed and trustworthy rather than dense.

### Grid & Container

- **Page width**: 1280px max, centred.
- **Prose width**: 720px max for editorial / documentation text columns.
- **Hero**: copy claims roughly 760–860px horizontal, often centred above a full-width search bar or product visual.
- **Feature grid**: 3-column at 1024px+, 2-column at 640–1024px, 1-column below 640px. Card gap: 24px.

### Whitespace Philosophy

Whitespace here signals composure and seriousness — the visual equivalent of an enterprise vendor that doesn't need to crowd the slide. Section padding runs 96px+ on desktop; cards run 24–28px internal padding. The bright white canvas plus the generous spacing is what makes the single indigo CTA pop without any other chromatic help.

### Section Cadence

The pattern is calm and consistent: `white hero (with search bar) → white feature grid → white capability/agent showcase → white logo/social-proof band → deep-indigo footer`. Unlike sites that alternate light/dark bands for drama, Glean stays white almost the whole way down and reserves the deep indigo for the footer — keeping the body authoritative and unbroken.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| micro | 2px | inline tags, tiny inline markers |
| sm | 4px | small inputs, nested UI primitives |
| md | 8px | text inputs, secondary panels, inline buttons |
| lg | 12px | cards, feature tiles, search-result cards |
| xl | 16px | modals, large emphasis blocks |
| pill | 9999px | the signature 64px CTA pills, badges, search bar, avatars |

Glean's radius story is bimodal: structural surfaces (cards, inputs, panels) live in a moderate 8–16px band, while every **action and query affordance** jumps straight to a full pill. That contrast — calm rectangles for content, generous pills for interaction — is the shape signature, and the 64px CTA pill is the single most recognisable primitive on the site.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | flat, no shadow, on `#ffffff` | body content, default surfaces |
| 1 | faint tonal lift onto `#f5f5f7` | feature / capability cards within a band |
| 2 | `1px hairline + ambient shadow` | elevated cards over white |
| 3 | `raised` two-layer indigo-tinted shadow | pricing, demo previews, search-result cards |
| 4 | `elevated` shadow, 12–16px radius | dropdowns, popovers, the search autocomplete panel |
| 5 | `elevated` shadow + backdrop, 16px radius | modals, lightboxes |

**Shadow Philosophy**: Glean's shadows are tinted with the heading indigo (`rgba(10,2,39,...)`) rather than neutral black, keeping elevation chromatically consistent with the near-black-indigo type. The marketing surface is sparing with elevation — most depth comes from the faint tonal step between `#ffffff` and `#f5f5f7` plus the `#e6e6ea` hairline. True shadows are reserved for things that genuinely float: the search autocomplete panel, pricing tiers, and modal dialogs.

## 8. Interaction & Motion

### Easing

- **standard**: `cubic-bezier(0.4, 0, 0.2, 1)` — the workhorse ease for hover and colour transitions.
- **emphasized**: `cubic-bezier(0.2, 0, 0, 1)` — slower acceleration, faster deceleration; reserved for hero entrance and modal open.
- **decelerate**: `cubic-bezier(0, 0, 0.2, 1)` — for elements entering from off-canvas and for the search-panel reveal.

### Durations

- **fast** (150ms): button colour shift, link colour shift, badge state changes.
- **standard** (240ms): button hover lift, card hover, dropdown open.
- **slow** (320ms): modal open, search-panel expand, hero entrance.

### Per-component micro-states

- **Button hover**: indigo deepens to `#2a31cc` over 150ms with `standard` ease, plus an optional `translateY(-1px)` lift. No scale-up, no glow.
- **Outline-button hover**: fill animates from transparent to `#ebecff` over 150ms; border stays put.
- **Card hover**: background tint deepens one tonal step; if elevated, the shadow intensifies one tier over 240ms.
- **Search-bar focus**: the indigo ring fades in at ~120ms and the autocomplete panel decelerates open over 320ms — the most choreographed interaction on the site, because search is the product.
- **Input focus**: border shifts to `#343ced` and the `0 0 0 3px rgba(52,60,237,0.18)` ring fades in simultaneously.

### Page transitions

Marketing page transitions are deliberately quiet — opacity-only fades at ~200ms with `standard` ease. No slide, no parallax. The enterprise register favours stability over spectacle.

### Reduced-motion strategy

`prefers-reduced-motion: reduce` is honoured: transform-based animations collapse to opacity-only at ~100ms, hover lifts disappear, and the search panel opens instantly rather than animating. Content never depends on motion to be understood.

## 9. Accessibility & A11y

### Contrast pairs (computed from live tokens)

- **text on bg**: `#333333` on `#ffffff` → **12.6:1** (AAA at all body sizes).
- **heading on bg**: `#0a0227` on `#ffffff` → **18.9:1** (AAA at all sizes — the near-black indigo is essentially as legible as black).
- **on-brand on brand**: `#ffffff` on `#343ced` → **4.9:1** (AA at body sizes, AAA at large) — comfortable for the white-on-indigo CTA.
- **brand on bg**: `#343ced` on `#ffffff` → **4.3:1** (AA for large text and UI components such as the outline button's text and border).
- **muted on bg**: `#6b6b73` on `#ffffff` → ~4.7:1 (AA at body sizes) — keep muted text at 14px+ for comfortable reading.

### Focus indicators

- **Default focus ring**: `3px solid rgba(52,60,237,0.4)` with a 2px offset; never removed for keyboard users.
- **Within inputs and the search bar**: border shifts to `#343ced` and adds a `0 0 0 3px rgba(52,60,237,0.18)` ring.
- **On the deep-indigo footer**: ring switches to `rgba(255,255,255,0.6)` for contrast against the dark ground.

### ARIA patterns

- The hero search bar uses `role="combobox"` with `aria-expanded`, `aria-controls`, and `aria-activedescendant` for the autocomplete listbox.
- Modals use `role="dialog"`, `aria-modal="true"`, a focus trap, and `Esc` to close.
- Capability / agent tabs use `role="tablist"` / `role="tab"` / `role="tabpanel"` with arrow-key navigation.
- The cookie banner (Osano) is third-party chrome; ensure it does not trap focus before main content.

### Keyboard nav order

Top bar → search bar → primary CTA → feature bands in DOM order → footer. `Tab` order matches visual order; a `Skip to content` link appears first in the DOM and becomes visible on focus.

### Screen reader hints

- Decorative product illustrations and 3D visuals carry `aria-hidden="true"`.
- Icon-only buttons carry `aria-label` ("Open menu", "Search", "Get a demo").
- Stat callouts use `aria-label` with the full phrase rather than relying on numeral parsing.

### Reduced motion

Honoured throughout — see §8.

## 10. Responsive Behavior

### Breakpoints

| Tier | Width | Behavior |
|---|---|---|
| mobile | < 640px | single column, 16px gutter, 64px section padding, hero search bar full-width |
| tablet | 640–1024px | 2-column feature grids, 24px gutter, 80px section padding |
| desktop | 1024–1280px | 3-column feature grids, 24px gutter, 96px section padding |
| wide | 1280px+ | container caps at 1280px, content centred |

### Touch Targets

Minimum 44×44px on touch devices. The 64px pill CTAs comfortably exceed this with their `14px 28px` padding; smaller inline links expand their tap area via `padding: 8px 0` rather than relying on line-height.

### Collapsing strategy

- **Top nav**: hamburger menu < 1024px; full nav with the two-pill cluster above.
- **Feature grid**: 3 → 2 → 1 columns at 1024 / 640.
- **Hero**: product visual moves below the search bar and copy < 768px; the search bar stays prominent and full-width.
- **Pricing**: tiers stack vertically < 768px with the recommended tier highlighted via order and a soft indigo border.
- **Footer**: multi-column → 2-column → 1-column accordion at 1024 / 640.

### Image / visual behavior

Product screenshots and 3D visuals use `srcset` with 1x/2x densities and `sizes` matched to container width. Below 768px, hero visuals adopt `object-fit: cover` with a locked `aspect-ratio` so the search bar never gets pushed below the fold.

### Container queries

Used inside the search-result and capability cards so they reflow their internal layout (icon + title + snippet) based on the card's own width rather than the viewport — important when the same card appears in both a 3-up grid and a full-width list.

## 11. Content & Voice

### Tone

Glean's voice is **enterprise-confident and plainly declarative**: it states capabilities as facts ("Work AI that Works", "Agents, Assistant & Search") and trusts the reader to be a serious buyer rather than a casual browser. Sentences are short, present-tense, and free of hype punctuation — periods over exclamation marks. The register is the written equivalent of the 400-weight headline: assured without raising its voice.

### Microcopy patterns

- **Primary CTA**: "Get a demo" is the canonical phrase — the one indigo pill. Variants: "Talk to sales", "Start free".
- **Secondary CTA**: "Sign in" (the outline pill). Glean separates the buyer action (demo) from the existing-user action (sign in) and gives each its own pill treatment.
- **Error messages**: pattern is "Couldn't [action] because [reason]. [Recovery]." — specific cause, then a way forward.
- **Success confirmations**: short and declarative ("Connected." / "Demo requested.") rather than effusive.

### Empty states

Empty states are practical and instructive rather than playful: "No results — try a broader query" or "Connect a data source to start searching", each with a clear next action. No cartoons, no "Oops!" — the enterprise reader expects competence.

### CTA verb conventions

- **Primary marketing CTA**: "Get a demo" (canonical) or "Talk to sales".
- **Product / self-serve**: "Start free" or "Try Glean".
- **Existing user**: "Sign in" (never "Log in" elsewhere — keep it consistent).
- **Resources**: "Read the report", "Watch the demo" — name the artefact, never "Learn more" alone.

## 12. Dark Mode & Theming

Glean's marketing site is **light-only** — there is no full dark-mode token swap for the public pages. The canvas stays bright white throughout, with the only consistently dark surface being the deep-indigo footer (`#29246a`).

When a dark band or footer is needed, treat it as a bounded inversion rather than a theme:

- ground swaps to `#29246a` (deep indigo), not pure black — keep the surface in the indigo family
- text becomes `#ffffff`; muted text becomes `rgba(255,255,255,0.7)`
- borders become `rgba(255,255,255,0.12)` (faint white hairline)
- the primary CTA inverts to a **white pill with deep-indigo text** (`#29246a`), since the indigo fill would disappear against the indigo ground
- the focus ring switches to `rgba(255,255,255,0.6)`
- shadows are removed; depth comes from the tonal step between the indigo ground and white cards

The in-product application may offer richer theming, but for marketing the discipline is: stay white, reserve the deep indigo for the footer, and never run a full dark page.

## 13. Lineage & Influences

Glean sits at the intersection of two design lineages. The first is the **trust-via-restraint enterprise SaaS** school — Stripe and Linear — which spends its entire chromatic budget on a single confident accent over a clean canvas, lets typography rather than colour carry hierarchy, and treats whitespace as a credibility signal. Glean's one-indigo discipline, its near-black-indigo headlines, and its light-weight PolySans hero are all squarely in this tradition. The second lineage is **consumer AI search** — Perplexity, Algolia, and the lineage of the search box itself — which is why Glean's hero centres a search bar, treats the query input with as much care as a CTA, and rounds its interactive affordances into generous pills rather than the tight 8px radii of developer tools.

What Glean rejects is just as defining. It rejects the multi-hue gradient maximalism common to consumer AI startups; it rejects bold 700-weight marketing headlines in favour of an engineered 400; it rejects warm ecru canvases (Notion) in favour of clean corporate white; and it rejects shadow-heavy Material elevation in favour of tonal layering and indigo-tinted shadows used sparingly. The PolySans typeface ties it into a contemporary AI/dev-tool design wave (it shares the family with brands like Spline), but Glean holds the type lighter and quieter than most of that cohort — the typographic equivalent of an enterprise vendor that has nothing to prove.

**Named influences**

- **Stripe** ([stripe.com](https://stripe.com)) — Single confident action colour and trust-via-restraint discipline on a white canvas.
- **Linear** ([linear.app](https://linear.app)) — Near-black indigo headline register and engineered, low-shout enterprise typography.
- **Perplexity** ([perplexity.ai](https://www.perplexity.ai)) — Search-bar-as-hero composition and the consumer AI-search product register.
- **Algolia** ([algolia.com](https://www.algolia.com)) — Enterprise search styling: result cards, query chrome, indigo-blue accent.
- **Spline** ([spline.design](https://spline.design)) — Shared PolySans grotesque lineage across the modern AI / 3D-tool design wave.

## 14. Do's and Don'ts

**Do**

- Keep the action palette to a single electric indigo (`#343ced`); secondary actions invert it to outline-on-white, never a different hue.
- Set headlines in near-black indigo (`#0a0227`), not pure black — the warmth is what ties the type to the brand.
- Hold hero headlines at 400 weight; the slim, engineered PolySans is the brand's signature typographic move.
- Set body copy in `#333333`, a calm neutral grey, for comfortable long-form reading.
- Render every primary CTA as a full 64px pill — the rounded action shape is the most recognisable primitive on the site.
- Pair the two-pill nav cluster: an outline `Sign in` and a solid indigo `Get a demo`.
- Treat the search bar as a first-class hero object — pill or 12px radius, generous padding, an indigo focus ring.
- Lift cards onto the faint `#f5f5f7` surface with a `#e6e6ea` hairline; use shadow only for things that genuinely float.
- Run sections at 96px+ vertical padding; the enterprise breath is part of the credibility.
- Tint shadows with the heading indigo (`rgba(10,2,39,...)`), keeping elevation chromatically consistent.

**Don't**

- Don't introduce a second saturated colour — and never treat the Osano cookie green (`#37cd8f` / `#058a5e`) as a Glean accent; it is third-party chrome.
- Don't set headlines bold (600–700); the negative-tracked 400-weight PolySans is what carries the voice.
- Don't use pure black (`#000`) for headings or body; use `#0a0227` for heads and `#333333` for body.
- Don't square off the CTAs — the 64px pill is non-negotiable; 8px radius reads as a different, more developer-y product.
- Don't warm the canvas toward ecru; Glean's white is clean and corporate, not paper-like.
- Don't lean on drop-shadows for card depth — depth here is tonal (`#ffffff` → `#f5f5f7`) plus a hairline.
- Don't run a full dark-mode page; the body stays white and the deep indigo (`#29246a`) is reserved for the footer.
- Don't use vague CTAs like "Learn more" or "Get started" alone — name the action ("Get a demo", "Talk to sales").
- Don't crowd the layout; the generous whitespace is what lets the single indigo CTA do its job.
- Don't mix a heavier display font in; PolySans does the whole hierarchy through weight and size, not family-mixing.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #ffffff
surface: #f5f5f7
text: #333333
text-heading: #0a0227
text-muted: #6b6b73
brand: #343ced
brand-hover: #2a31cc
brand-soft: #ebecff
brand-deep: #29246a
border: #e6e6ea
on-brand: #ffffff
```

### Example Component Prompts

1. "Create a marketing hero in the Glean style: bright white `#ffffff` canvas, a centred PolySans Neutral 56px / 400-weight headline in near-black indigo `#0a0227` with `-0.018em` tracking, an 18px / 400 subhead in `#333333`, a full-width pill search bar below (white, `#e6e6ea` hairline, leading search icon, indigo `#343ced` focus ring), and a primary `Get a demo` CTA as a 64px indigo pill (`#343ced` fill, white text, `14px 28px` padding)."

2. "Design an enterprise nav bar in the Glean style: 72px tall, white background with a `1px solid #e6e6ea` bottom border, logo at left, nav items at PolySans 500 / 15px in `#0a0227`, and a right cluster of two pills — an outline `Sign in` (white fill, `#343ced` text and border, 64px radius) and a solid `Get a demo` (`#343ced` fill, white text, 64px radius)."

3. "Render a feature / capability card in the Glean style: `#f5f5f7` background, 12px radius, `1px solid #e6e6ea` hairline, 24px padding, an icon in indigo `#343ced`, a PolySans 500 / 24px title in `#0a0227`, and body text at PolySans 400 / 16px in `#333333`, no drop-shadow."

4. "Build an enterprise search-result card in the Glean style: white `#ffffff` background, 12px radius, `1px solid #e6e6ea` hairline, `16px 20px` padding, title in PolySans 500 / 16px `#0a0227`, snippet in 14px `#333333`, and a soft indigo source badge (`#ebecff` background, `#343ced` text, pill radius, PolySans 600 / 12px)."

5. "Create a deep-indigo footer band in the Glean style: `#29246a` background, white `#ffffff` link text at 14px, section headings in white 13px / 600 tracked `+0.08em` uppercase, and an inverted CTA — a white pill with deep-indigo `#29246a` text — for the final `Get a demo` call."

6. "Design a pricing tier card in the Glean style: white `#ffffff` background, `1px solid #e6e6ea` hairline, 12px radius, 28px padding, raised indigo-tinted shadow (`rgba(10,2,39,0.06) 0 1px 2px, rgba(10,2,39,0.05) 0 8px 24px`), tier name in PolySans 500 / 20px `#0a0227`, price in PolySans 400 / 48px, and a 64px indigo pill CTA at the foot."

### Iteration Guide

1. **Start with the canvas and the pill**: confirm a clean white `#ffffff` base and a 64px-pill primary CTA in `#343ced`. If your prototype's CTA is a tight rectangle, it has drifted to a developer-tool look.
2. **Check the headline weight**: hero headlines should be PolySans at **400 weight**, 56px, near-black indigo `#0a0227`. If the headline reads bold and shouty, lighten it — the slim headline is the signature.
3. **Audit the action colour**: there should be exactly one saturated indigo per module. If you see two competing colours, one is wrong — and if one of them is green, you've picked up the Osano cookie chrome by mistake.
4. **Verify the heading vs body split**: headings are `#0a0227` (near-black indigo), body is `#333333` (neutral grey). Pure black anywhere is a tell that you've left the system.
5. **Make the search bar a hero**: if the page is about search or AI assistance, the query input should be as prominent and as carefully styled as the CTA — pill or 12px radius, indigo focus ring.
6. **Keep depth tonal**: cards lift onto `#f5f5f7` with an `#e6e6ea` hairline; reserve real (indigo-tinted) shadows for floating panels only. Heavy shadows everywhere read as Material, not Glean.
7. **Mind the whitespace**: run sections at 96px+ vertical padding. If the layout feels crowded, the single indigo CTA loses its pop — the generous white is doing chromatic work.
8. **Reserve the deep indigo for the footer**: never run a full dark page; drop `#29246a` only in the footer (or one bounded band) and invert the CTA to a white pill there.
