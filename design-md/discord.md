---
name: Discord
tagline: Indigo-ground hangout — gg sans body, ABC Ginto Nord display, 12-16px tile radii, white pill CTAs.
updated_at: 2026-05-06T01:20:47+12:00
published_at: 2026-05-03T10:27:49+12:00
author: webdesignhot
source_url: https://discord.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [social, saas]
tags: [bright, sans, playful, dense, warm]
preview_swatch: ['#5865f2', '#ffffff', '#23272a']
related: [notion, raycast, github]
description: 'Discord paints its marketing site the same blurple `#5865f2` as the in-product accent and ships its proprietary type stack — gg sans for body, ABC Ginto Nord Discord for stencil-energy headlines. Seven discrete radii (4 / 8 / 12 / 16 / 24 / 32 / round), white-on-blurple primary CTAs, and full-bleed brand-canvas panels make the marketing site feel like the in-product entry hall rather than a pitch.'

colors:
  bg: '#5865f2'                  # --brand — page canvas, the brand-canvas register
  bg-deep: '#1a2081'             # --bg-animated-gradient-background-indigo-1 hsl(241.5,57%,27%) — gradient toner
  bg-pink: '#ed7395'             # --bg-animated-gradient-background-pink-1 — secondary panel toner
  bg-aubergine: '#1a1b3a'        # deep panel under hero
  surface: '#ffffff'             # primary CTA fill, white-panel sections
  surface-soft: '#f6f6f6'        # nested panel on white sections
  surface-card: '#fafafa'        # feature card body on white panels
  surface-elev: '#23272a'        # dark panel sections, ink-not-paper
  text: '#ffffff'                # body and headlines on brand canvas
  text-strong: '#ffffff'         # display emphasis on dark
  text-on-light: '#23272a'       # text on white panels and CTA pill
  text-on-light-muted: '#4f5660' # secondary copy on white panels
  text-soft: 'rgba(255,255,255,0.72)' # captions on dark
  text-faint: 'rgba(255,255,255,0.40)' # micro-copy on dark
  text-disabled: 'rgba(255,255,255,0.24)' # disabled labels
  brand: '#5865f2'               # --brand — Discord blurple, --brand-500 hsl(234.94,85.56%,64.71%)
  brand-100: '#e7e9fd'           # --brand-100
  brand-200: '#c8ccfa'           # --brand-200
  brand-300: '#a4abf7'           # --brand-300
  brand-400: '#7983f5'           # --brand-400
  brand-500: '#5865f2'           # --brand-500 — primary blurple
  brand-600: '#404eed'           # --brand-600 — hover state
  brand-700: '#3641cc'           # --brand-700 — pressed
  brand-800: '#28339e'           # --brand-800 — deepest tonal stop
  brand-900: '#1a2081'           # --brand-900 — gradient toner
  on-brand: '#ffffff'            # ink on blurple
  focus: '#00b0f4'               # --focus-border — cyan ring on form fields
  link: '#00b0f4'                # --text-link — cyan, same as focus ring
  link-hover: '#33c2f7'          # lighter cyan on hover
  green-bright: '#23a55a'        # --status-online — Discord online green
  yellow-bright: '#f0b232'       # --status-idle
  red-bright: '#f23f43'          # --status-dnd / error
  border: 'rgba(255,255,255,0.10)' # translucent hairline on brand canvas
  border-soft: 'rgba(255,255,255,0.06)' # softer divider on dark
  border-light: 'rgba(0,0,0,0.08)' # hairline on white panels
  border-strong: 'rgba(255,255,255,0.18)' # stronger outline on hover
  shadow-card: 'rgba(0,0,0,0.15)' # 0 4px 4px — card shadow on white panels
  shadow-modal: 'rgba(0,0,0,0.40)' # 0 16px 32px — modal lift
  semantic-success: '#23a55a'
  semantic-warning: '#f0b232'
  semantic-danger: '#f23f43'
  semantic-info: '#00b0f4'

typography:
  display:
    family: '"ABC Ginto Nord Discord", "ABC Ginto Nord", "gg sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [700, 800]
    opentype: ['kern', 'liga']
  body:
    family: '"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
    opentype: ['kern', 'liga', 'calt']
  ui:
    family: '"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
    weights: [500, 600]
  editorial:
    family: 'Fraunces, Georgia, "Times New Roman", serif'
    weights: [400, 500]
  mono:
    family: 'ui-monospace, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 88, weight: 800, lineHeight: 0.85, tracking: '-0.02em', family: display, opentype: 'kern', transform: 'uppercase' }
    display-large:   { size: 64, weight: 800, lineHeight: 0.88, tracking: '-0.015em', family: display, transform: 'uppercase' }
    h1:              { size: 44, weight: 700, lineHeight: 0.86, tracking: '-0.01em', family: display, transform: 'uppercase' }
    h2:              { size: 32, weight: 700, lineHeight: 0.95, tracking: '-0.005em', family: display, transform: 'uppercase' }
    h3:              { size: 28, weight: 700, lineHeight: 1.0, tracking: '-0.005em', family: display, transform: 'uppercase' }
    h4:              { size: 22, weight: 700, lineHeight: 1.15, tracking: '0', family: body }
    body-large:      { size: 20, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.5, tracking: '0', family: body }
    button:          { size: 16, weight: 500, lineHeight: 1.0, tracking: '0', family: body }
    button-large:    { size: 18, weight: 500, lineHeight: 1.0, tracking: '0', family: body }
    nav-link:        { size: 16, weight: 500, lineHeight: 1.4, tracking: '0', family: body }
    label:           { size: 12, weight: 600, lineHeight: 1.3, tracking: '0.04em', family: body, transform: 'uppercase' }
    label-mono:      { size: 11, weight: 600, lineHeight: 1.3, tracking: '0.04em', family: mono, transform: 'uppercase' }
    caption:         { size: 13, weight: 400, lineHeight: 1.4, tracking: '0', family: body }
    micro:           { size: 11, weight: 500, lineHeight: 1.3, tracking: '0.02em', family: body }

radius:
  none: 0
  micro: 2
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
  xxl: 32
  pill: 9999

spacing:
  base: 4
  xxs: 2
  xs: 4
  sm: 8
  md: 12
  lg: 16
  xl: 24
  xxl: 32
  section-sm: 64
  section: 96
  section-lg: 128
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 200]

layout:
  page-width: 1200
  prose-width: 720
  header-height: 80
  hero-height: 700
  grid-gap: 32

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-entrance: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 400
  duration-gradient: 12000
  reduced-motion: 'respects prefers-reduced-motion: reduce — animated gradient layers freeze; CTA hovers collapse to opacity transitions only'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0,0,0,0.04) 0 1px 2px'
  standard: 'rgba(0,0,0,0.15) 0 4px 4px'
  elevated: 'rgba(0,0,0,0.20) 0 8px 16px'
  deep: 'rgba(0,0,0,0.40) 0 16px 32px'
  ring: '0 0 0 2px #00b0f4'
  brand-glow: '0 0 0 4px rgba(88,101,242,0.20)'

accessibility:
  contrast-text-on-bg: 4.7              # white on blurple — AA
  contrast-text-on-brand: 4.7           # white on blurple — AA
  contrast-text-on-light: 13.2          # #23272a on white — AAA
  contrast-soft-on-bg: 3.4              # rgba(255,255,255,0.72) on blurple — AA at large
  focus-ring: '2px solid #00b0f4 with 2px offset — cyan against blurple is the system signature'
  reduced-motion-honored: true
  keyboard-nav: 'tab order follows visual; skip-link present; status pickers use arrow keys'

components:
  button-primary-light:
    background: '#ffffff'
    text: '#23272a'
    radius: 12
    padding: '15px 24px'
    height: 50
    font: button-large
    hover: 'background #f6f6f6; subtle lift'
    active: 'background #ebebeb'
    use: 'primary CTA on brand canvas — Download / Open Discord, white-on-blurple inversion'
  button-primary-dark:
    background: '#5865f2'
    text: '#ffffff'
    radius: 12
    padding: '15px 24px'
    height: 50
    font: button-large
    hover: 'background #404eed'
    active: 'background #3641cc'
    use: 'primary CTA on white panels — brand-on-white'
  button-secondary:
    background: 'rgba(255,255,255,0.10)'
    text: '#ffffff'
    radius: 12
    padding: '15px 24px'
    height: 50
    font: button-large
    border: '1px solid rgba(255,255,255,0.18)'
    hover: 'background rgba(255,255,255,0.18)'
    use: 'secondary CTA on brand canvas — Open in browser'
  button-ghost:
    background: 'transparent'
    text: '#ffffff'
    radius: 12
    padding: '12px 20px'
    font: button
    hover: 'background rgba(255,255,255,0.06)'
    use: 'tertiary nav button — Login / inline link'
  button-download-pill:
    background: '#ffffff'
    text: '#23272a'
    radius: 9999
    padding: '16px 32px'
    height: 56
    font: button-large
    hover: 'background #f6f6f6'
    use: 'bottom-of-page conversion CTA — full pill marks the conversion endpoint'
  card-feature:
    background: '#ffffff'
    text: '#23272a'
    border: '1px solid rgba(0,0,0,0.08)'
    radius: 16
    padding: '32px'
    shadow: '0 4px 4px rgba(0,0,0,0.15)'
    use: 'feature card on white panel sections — drop shadow plus hairline'
  card-canvas:
    background: 'rgba(255,255,255,0.06)'
    text: '#ffffff'
    border: '1px solid rgba(255,255,255,0.10)'
    radius: 16
    padding: '32px'
    use: 'feature card on brand canvas — translucent on blurple'
  card-modal:
    background: '#ffffff'
    text: '#23272a'
    border: 'none'
    radius: 24
    padding: '32px'
    shadow: '0 16px 32px rgba(0,0,0,0.40)'
    use: 'floating panel / modal — xl radius marks "above the page"'
  input:
    background: '#ffffff'
    text: '#23272a'
    border: '1px solid rgba(0,0,0,0.12)'
    radius: 8
    padding: '12px 16px'
    height: 48
    font: body
    focus: 'border #00b0f4; ring 0 0 0 2px rgba(0,176,244,0.20)'
    use: 'email / form input on white panels'
  badge-pill:
    background: '#5865f2'
    text: '#ffffff'
    radius: 9999
    padding: '4px 12px'
    font: micro
    use: 'category tag / NEW pill on brand surfaces'
  status-online:
    background: '#23a55a'
    text: '#ffffff'
    radius: 9999
    padding: '2px 8px'
    font: micro
    use: 'product-illustration online status indicator'
  tab-pill:
    background: 'rgba(255,255,255,0.10)'
    text: '#ffffff'
    radius: 9999
    padding: '8px 16px'
    font: button
    use: 'comparison-section tab bar — full pill, --brand-500 fill on active'
  tab-pill-active:
    background: '#5865f2'
    text: '#ffffff'
    radius: 9999
    padding: '8px 16px'
    font: button
    use: 'active tab — brand-500 fill'
  nav-link:
    background: 'transparent'
    text: '#ffffff'
    font: nav-link
    padding: '8px 16px'
    hover: 'opacity 0.8'
    use: 'top nav menu — Download / Nitro / Discover / Quests / Safety / Support'

dark-mode: optional

lineage:
  summary: |
    Discord's marketing site ships the same blurple `#5865f2` that runs
    the in-product brand sidebar — `--brand: #5865f2` is exposed as a
    CSS variable directly on the document root, alongside `--brand-100`
    through `--brand-900` for tonal stops. Where Slack chose the
    introverted aubergine `#4a154b` for "Slack as a deep-work
    environment," Discord chose blurple — the same hue Microsoft uses
    for Xbox achievement banners — for "Discord as a hangout."
    Typography is custom: **gg sans** for body (Noto Sans-derived,
    licensed) and **ABC Ginto Nord Discord** (a custom stencil-energy
    cut by Dinamo Foundry) for the all-caps marketing headlines —
    e.g., "GROUP CHAT THAT'S ALL FUN & GAMES." The capital-only display
    sets it apart from every other SaaS marketing system, which use
    sentence case for warmth. The button system has seven discrete radii
    (4, 8, 12, 16, 24, 32, round) — denser than Linear's six, looser
    than Apple's two — and the primary CTA is white-on-blurple, the
    *inverse* of the dev-tools convention. The secondary register,
    **Fraunces** (`--font-clan-body`), appears only on clan/server
    profile pages where a more editorial voice is wanted.
  influences:
    - name: 'Dinamo / ABC Ginto Nord'
      role: 'Custom display cut for the all-caps marketing headlines — stencil-energy condensed sans designed for poster scale'
      url: 'https://abcdinamo.com/typefaces/ginto'
    - name: 'Twitch'
      role: 'Adjacent gamer-platform purple lineage; both prove blurple-spectrum brand for play-not-work registers'
      url: 'https://twitch.tv'
    - name: 'Xbox / Microsoft Game Pass'
      role: 'Saturated indigo as a "hangout / play" register, not a "work" register — same blurple at marketing scale'
      url: 'https://xbox.com'
    - name: 'Roblox'
      role: 'Permission to paint full panels in a saturated brand color in a SaaS-adjacent landing page'
      url: 'https://roblox.com'
    - name: 'Saturday morning cartoon posters'
      role: 'All-caps display + saturated chromatic field is the visual register being borrowed — playful, not corporate'
---

## 1. Visual Theme & Atmosphere

Discord's homepage is a sustained immersion in blurple. The hero panel fills the viewport with a `#5865f2` field tinted toward `#1a2081` at the edges by an animated gradient layer (`--bg-animated-gradient-background-indigo-1: hsl(241.5 57% 27%)`). The headline sits inside in 35–88px **ABC Ginto Nord Discord** — a condensed stencil-feeling all-caps cut — that reads like a Saturday morning cartoon poster. The primary CTA is a **white-on-blurple** pill with `#23272a` ink on `#ffffff` fill, the inverse of every dev-tool that paints brand-on-white.

What makes it distinctive vs. nearby alternatives: where Slack and Microsoft Teams render their marketing sites in white-with-accent, Discord renders the page itself in the brand color and inverts the primary CTA. The site feels less like a pitch and more like the in-product entry hall — same blurple, same custom type, same heavy 12px-radius card geometry. It is the rare marketing surface that does not soften its product into a "lifestyle" register; instead, it amplifies the product's own register at marketing scale.

Below the hero, light-and-dark panels alternate — full-bleed blurple bands paired with white-panel feature spreads with `#23272a` ink. The white panels carry feature cards at 16px radius with a 4px-soft drop shadow; the blurple panels carry translucent cards with a `rgba(255,255,255,0.10)` hairline border and zero shadow (depth comes from the animated gradient layers underneath). Section rhythm is bold and chunky — 96–128px between sections, not Linear's tight 64px.

The marketing voice is unapologetically playful: section headlines like "GROUP CHAT THAT'S ALL FUN & GAMES" and "WHERE HANGING OUT IS EASY" set in all-caps Ginto Nord at 44–88px, with a body deck immediately below in sentence-case gg sans. The case shift between headline and deck is the system's primary register-switch. Capital-only display + sentence-case body is the visual signature — and the reason any sentence-case Discord-style headline immediately reads "off."

Look at the page in motion and a slow gradient cycle (`indigo-1` → `indigo-2` → `pink-1`) drifts behind the brand canvas at ~12-second cadence. It's the only ambient motion on the page — buttons and cards stay calm. The animated layer is what gives the hero its "we're inside a club, not a pitch deck" feel without ever resorting to particle effects or video.

**Key Characteristics:**
- Brand-canvas register: page bg is `#5865f2` blurple, not white.
- All-caps display: ABC Ginto Nord Discord at 35–88px, weights 700–800.
- White-on-blurple primary CTA — inverse of every dev-tool convention.
- Seven radii: 0/4/8/12/16/24/32/round — denser than Linear, looser than Apple.
- Sentence-case body in gg sans (custom Noto Sans-derived family).
- Animated gradient layers (`indigo-1`, `indigo-2`, `pink-1`) at 12s cadence.
- Cyan focus/link `#00b0f4` against blurple — system's signature complementary.
- Status colors lifted from the in-product UI (`#23a55a` online, `#f0b232` idle, `#f23f43` dnd).
- Drop shadows only on white panels — brand canvas relies on animated layers for depth.
- Bottom-of-page CTA flips to full pill (9999) — marks the conversion endpoint.

## 2. Color Palette & Roles

### Primary

- **Background** (`#5865f2`): page canvas — the brand-canvas register. This is `--brand` exposed as the document body color, not just an accent.
- **Text** (`#ffffff`): primary copy on brand canvas, bright and high-contrast.
- **Text on Light** (`#23272a`): body and headlines on white panels — Discord's near-black with a cool undertone (`hsl(220, 8%, 16%)` adjacent).
- **Brand** (`#5865f2`): Discord blurple, also `--brand-500` at `hsl(234.94, 85.56%, 64.71%)` — saturated, just-blue-of-purple.

### Brand & Dark

The full `--brand-100` through `--brand-900` tonal scale:

- **brand-100** (`#e7e9fd`): faintest tint — used for tonal washes on white.
- **brand-200** (`#c8ccfa`): tint — info banners.
- **brand-300** (`#a4abf7`): tint — illustration accent.
- **brand-400** (`#7983f5`): step below brand-500 — hover ghost states.
- **brand-500** (`#5865f2`): primary blurple — the canvas value.
- **brand-600** (`#404eed`): hover state on brand-on-white CTA.
- **brand-700** (`#3641cc`): pressed.
- **brand-800** (`#28339e`): deepest tonal stop — rarely used standalone.
- **brand-900** (`#1a2081`): gradient toner — used at panel edges.

### Accent

- **Background Deep** (`#1a2081`): `--bg-animated-gradient-background-indigo-1` — gradient toner at panel edges.
- **Background Pink** (`#ed7395`): `--bg-animated-gradient-background-pink-1` — secondary panel toner for variety.
- **Background Aubergine** (`#1a1b3a`): deep panel under hero — non-brand-canvas dark register.
- **Cyan Accent** (`#00b0f4`): `--focus-border` and `--text-link`. Used as both focus ring and inline link — the system's signature complementary against blurple.

### Interactive

- **Link** (`#00b0f4`): cyan — same as focus ring, deliberate dual-duty.
- **Link Hover** (`#33c2f7`): lighter cyan.
- **Focus** (`#00b0f4`): 2px solid ring with 2px offset.
- **Disabled** (`rgba(255,255,255,0.24)`): faded labels on dark.

### Neutral Scale

On dark/brand canvas:
- **Text** (`#ffffff`): primary.
- **Text Soft** (`rgba(255,255,255,0.72)`): captions, supporting copy.
- **Text Faint** (`rgba(255,255,255,0.40)`): micro-copy.
- **Text Disabled** (`rgba(255,255,255,0.24)`).

On white panels:
- **Text on Light** (`#23272a`): primary copy and headlines.
- **Text on Light Muted** (`#4f5660`): secondary copy on white.

### Surface & Borders

- **Surface** (`#ffffff`): primary CTA fill, white-panel sections.
- **Surface Soft** (`#f6f6f6`): nested card body on white sections.
- **Surface Card** (`#fafafa`): faintly tinted feature card.
- **Surface Elev** (`#23272a`): dark panel sections — ink-not-paper alternation.
- **Border** (`rgba(255,255,255,0.10)`): translucent hairline on brand canvas.
- **Border Soft** (`rgba(255,255,255,0.06)`): softer divider on dark — nested rows.
- **Border Light** (`rgba(0,0,0,0.08)`): hairline on white panels — feature card outline.
- **Border Strong** (`rgba(255,255,255,0.18)`): hover/active outline on dark.

### Shadow Colors

- **Shadow Card** (`rgba(0,0,0,0.15)` at `0 4px 4px`): the canonical card lift on white panels.
- **Shadow Modal** (`rgba(0,0,0,0.40)` at `0 16px 32px`): floating panel / modal.
- **Brand Glow** (`0 0 0 4px rgba(88,101,242,0.20)`): rare focus halo on brand-color CTAs.

### Semantic

Lifted directly from the in-product status colors — Discord's signature green/yellow/red:

- **Success / Online** (`#23a55a`): `--status-online` — Discord online green.
- **Warning / Idle** (`#f0b232`): `--status-idle`.
- **Danger / DND** (`#f23f43`): `--status-dnd` and error.
- **Info** (`#00b0f4`): same as cyan link/focus.

## 3. Typography Rules

### Font Family

- **Display:** `"ABC Ginto Nord Discord", "ABC Ginto Nord", "gg sans", "Helvetica Neue", Helvetica, Arial, sans-serif`. Weights 700/800. **All-caps by default** — the family is designed for it.
- **Body:** `"gg sans", "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif`. Weights 400/500/600/700. Custom Noto Sans-derived family Discord licensed for in-product use, exposed via `--font-primary`.
- **Editorial:** `Fraunces, Georgia, serif`. Weights 400/500. Used only on clan/server profile pages (`--font-clan-body`) for a more editorial register.
- **Mono:** `ui-monospace, "SF Mono", Menlo, Consolas, monospace`. System fallback only — Discord does not ship a custom mono.
- **OpenType:** standard `kern` and `liga`; no stylistic-set tricks. Ginto Nord's compressed letterforms carry the visual personality without OpenType swaps.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | ABC Ginto Nord | 88 | 800 | 0.85 | -0.02em | kern | Homepage hero — UPPERCASE only |
| display-large | ABC Ginto Nord | 64 | 800 | 0.88 | -0.015em | kern | Section hero — UPPERCASE only |
| h1 | ABC Ginto Nord | 44 | 700 | 0.86 | -0.01em | kern | Page H1 — UPPERCASE |
| h2 | ABC Ginto Nord | 32 | 700 | 0.95 | -0.005em | kern | Section heads — UPPERCASE |
| h3 | ABC Ginto Nord | 28 | 700 | 1.0 | -0.005em | kern | Sub-section heads — UPPERCASE |
| h4 | gg sans | 22 | 700 | 1.15 | 0 | kern, liga | Card titles — sentence case |
| body-large | gg sans | 20 | 400 | 1.5 | 0 | kern, liga | Hero deck under headline |
| body | gg sans | 16 | 400 | 1.5 | 0 | kern, liga | Default body |
| body-small | gg sans | 14 | 400 | 1.5 | 0 | kern, liga | Footer body |
| button | gg sans | 16 | 500 | 1.0 | 0 | kern, liga | CTA label |
| button-large | gg sans | 18 | 500 | 1.0 | 0 | kern, liga | Primary CTA on hero |
| nav-link | gg sans | 16 | 500 | 1.4 | 0 | kern, liga | Top nav menu |
| label | gg sans | 12 | 600 | 1.3 | 0.04em | kern | UPPERCASE eyebrow |
| label-mono | mono | 11 | 600 | 1.3 | 0.04em | tnum | UPPERCASE category — rare |
| caption | gg sans | 13 | 400 | 1.4 | 0 | kern | Caption |
| micro | gg sans | 11 | 500 | 1.3 | 0.02em | kern | Pill / badge text |

### Principles

- **Case is hierarchy.** Display tier is always all-caps in ABC Ginto Nord; body tier is always sentence case in gg sans. The case shift is the primary register-switch — heavier than weight or size.
- **Compressed display.** Ginto Nord's narrow letterforms allow the display to hold weight 700–800 without gobbling line width. Headlines stack two lines comfortably at line-height 0.85–0.95.
- **Weight 500 is the body voice ceiling.** gg sans body never goes above 500 except for emphasis spans; the headline voice owns the heavy weights.
- **No serif on marketing.** Fraunces lives only on clan/server profile pages — never on the marketing homepage. Mixing serif into the hero would dilute the cartoon-poster register.
- **Tracking discipline.** Display tier always negative (`-0.005em` to `-0.02em`); body always 0; uppercase eyebrows positive (`0.04em`). The three regimes are non-overlapping.
- **Custom mono is absent.** Discord trusts system mono — code in marketing screenshots renders in whatever the screenshotting machine had installed. The brand identity does not lean on mono the way Raycast or Resend do.
- **gg sans is the connective tissue.** Body, button, nav, caption, and pill all share gg sans across weight 400/500/600. The single body voice keeps the page coherent against the loud display tier.

## 4. Component Stylings

### Buttons

**Primary (Light) — White on Blurple**
- Background: `#ffffff`
- Text: `#23272a`
- Padding: `15px 24px`, height 50px
- Radius: 12 (md)
- Font: button-large (gg sans 18 / 500)
- Hover: `#f6f6f6` background
- Active: `#ebebeb`
- Use: hero CTA on brand canvas — Download / Open Discord. The signature affordance.

**Primary (Dark) — Brand on White**
- Background: `#5865f2`
- Text: `#ffffff`
- Padding: `15px 24px`, height 50px
- Radius: 12 (md)
- Hover: `#404eed` (brand-600)
- Active: `#3641cc` (brand-700)
- Use: primary CTA on white-panel sections — same geometry, inverted fill.

**Secondary**
- Background: `rgba(255,255,255,0.10)` translucent
- Text: `#ffffff`
- Border: `1px solid rgba(255,255,255,0.18)`
- Padding: `15px 24px`, height 50px
- Radius: 12
- Hover: background opacity to 0.18
- Use: "Open Discord in your browser" — paired with primary on hero.

**Ghost / Tertiary**
- Background: transparent
- Text: `#ffffff`
- Padding: `12px 20px`
- Hover: `rgba(255,255,255,0.06)` background
- Use: nav login link, inline ghost actions.

**Download Pill (Conversion Endpoint)**
- Background: `#ffffff`, Text: `#23272a`
- Padding: `16px 32px`, height 56px
- Radius: **9999 (full pill)** — geometry shift signals "this is the action"
- Use: bottom-of-page final download CTA — full pill marks the conversion endpoint.

### Cards

**Feature Card (White Panel)**
- Background: `#ffffff`
- Border: `1px solid rgba(0,0,0,0.08)`
- Radius: 16 (lg)
- Padding: 32px
- Shadow: `0 4px 4px rgba(0,0,0,0.15)`
- Use: feature card on white-panel sections.

**Canvas Card (Brand Canvas)**
- Background: `rgba(255,255,255,0.06)` translucent
- Border: `1px solid rgba(255,255,255,0.10)`
- Radius: 16 (lg)
- Padding: 32px
- No shadow — depth comes from animated gradient under canvas.
- Use: feature card on brand canvas.

**Modal**
- Background: `#ffffff`, Text: `#23272a`
- Radius: 24 (xl) — distinct from card 16
- Padding: 32
- Shadow: `0 16px 32px rgba(0,0,0,0.40)`
- Use: floating panels, dialog overlays, gift-claim modals.

### Badges & Pills

**Brand Pill**
- Background: `#5865f2`, Text: `#ffffff`
- Radius: 9999, Padding: `4px 12px`
- Font: micro (11/500)
- Use: NEW / category tag.

**Status Indicator**
- Online: `#23a55a` background, white text
- Idle: `#f0b232`
- DND: `#f23f43`
- Radius: 9999, Padding: `2px 8px`
- Use: product-illustration status — lifted from the in-product UI.

### Tabs

**Tab Pill (Inactive)**
- Background: `rgba(255,255,255,0.10)`
- Text: `#ffffff`
- Radius: 9999 (full pill)
- Padding: `8px 16px`

**Tab Pill (Active)**
- Background: `#5865f2`
- Text: `#ffffff`
- Radius: 9999

The full-pill tab bar on the comparison sections is one of the most distinctive primitives — it's the same tab geometry the in-product channel switcher uses.

### Inputs / Forms

**Input**
- Background: `#ffffff`
- Border: `1px solid rgba(0,0,0,0.12)`
- Radius: 8 (sm)
- Padding: `12px 16px`, height 48
- Focus: `border #00b0f4; ring 0 0 0 2px rgba(0,176,244,0.20)` — cyan against blurple is the signature focus color.
- Use: email input, contact form fields.

### Navigation

Top nav is a transparent strip 80px tall on hero, acquiring backdrop-blur and a `rgba(255,255,255,0.10)` border on scroll. Links are gg sans 16/500 white with a quick opacity hover. The Login button is a ghost variant; the Download CTA is the white pill primary.

### Decorative

- **Animated Gradient Layer:** behind the brand canvas, three colored hues (`indigo-1`, `indigo-2`, `pink-1`) drift on a ~12s cadence. The only ambient motion on the page.
- **Custom Illustrations:** Discord's marketing uses commissioned illustrations of stylized characters in saturated chromatic fields — the visual register is closer to a children's book than a dev-tool screenshot.

## 5. Layout Principles

### Spacing System

Base unit 4px. Scale: 2 / 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128 / 160 / 200. Section gaps run 96–128px (chunky, not tight); inside-card padding 32; nav padding `8px 16px`.

The density is loose — Discord's marketing site is *not* an information-dense product surface. It's a poster. Each section has one clear conversion or comprehension goal, and whitespace earns it room to breathe.

### Grid & Container

- **Page width:** 1200px max.
- **Prose width:** 720px (intro paragraphs).
- **Header height:** 80px.
- **Hero height:** ~700px — full viewport on desktop.
- **Grid gap:** 32px between feature cards.

The hero is edge-to-edge with content centered on the 1200px column. Below the fold, full-bleed brand-canvas panels alternate with white-panel feature spreads — each section ~700px tall with content centered.

### Whitespace Philosophy

Discord's marketing whitespace is **chunky, not tight**. There's deliberate air around the H1, around the CTA, around feature cards. The page never feels dense. Whitespace + saturated chromatic field is the brand atmosphere — the opposite of Stripe's information-dense gradient surfaces.

### Section Cadence

The page alternates light-and-dark in a deliberate rhythm:
1. Brand canvas hero (blurple) — 700px tall
2. White panel feature spread — 600px
3. Brand canvas mid-section (with `pink-1` gradient toner) — 600px
4. Aubergine deep panel — 500px
5. Brand canvas final CTA — 400px
6. Dark footer — `#23272a`

The alternation is what gives the page its long-form rhythm — like a magazine with brand-color spreads between editorial pages.

## 6. Shapes & Radius Scale

Seven discrete radii exposed as `--radius-{none,xs,sm,md,lg,xl,xxl}` plus the `--radius-round` sentinel:

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Borderless inline pills (rare) |
| XS | 4px | Status indicators, small badges |
| SM | 8px | Inputs, secondary chips |
| **MD** | **12px** | **Default button radius** — the system's most-used corner |
| **LG** | **16px** | **Default card radius** — feature cards on white panels |
| XL | 24px | Modal, floating panels, hover-surfaced elements |
| XXL | 32px | Featured banner cards (rare) |
| Pill | 9999 | Tab bars, status pills, conversion-endpoint download CTA |

**Compound radii:** none on Discord — the system is consistent corners on each component, no `0 0 12px 12px` partials. The seven discrete tiers are themselves the system; partial radii would feel like a different brand.

The semantic mapping is clear: 12 for buttons, 16 for cards, 24 for modals/floating panels, full pill (9999) for the conversion endpoint download CTA. Mixing them outside that mapping reads as off-brand.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Body copy on canvas; nav default |
| 1 | `0 4px 4px rgba(0,0,0,0.15)` | Feature card on white panel |
| 2 | `0 8px 16px rgba(0,0,0,0.20)` | Hover-elevated card |
| 3 | `0 16px 32px rgba(0,0,0,0.40)` | Modal, floating panel |
| 4 | Animated gradient layer (`indigo-1`, `pink-1`) | Brand canvas depth |
| 5 | `0 0 0 4px rgba(88,101,242,0.20)` glow | Focus halo on brand CTAs (rare) |

### Shadow Philosophy

Discord uses two depth strategies depending on canvas:
- **On brand canvas:** depth comes from the animated gradient layers (`indigo-1`/`indigo-2`/`pink-1`) drifting underneath. Cards are translucent with a hairline border; they feel like glass on a chromatic field. No drop shadows.
- **On white panels:** classic drop-shadow card lift — `0 4px 4px rgba(0,0,0,0.15)` is the canonical feature-card shadow. Modals jump to `0 16px 32px rgba(0,0,0,0.40)`.

The brand-canvas-no-shadow rule is the discipline — adding drop shadows to a translucent card on blurple immediately reads as a design accident.

## 8. Interaction & Motion ✨

### Easing Curves

- **Standard:** `cubic-bezier(0.4, 0, 0.2, 1)` — default ease-in-out for hover transitions.
- **Emphasized:** `cubic-bezier(0.2, 0, 0, 1)` — modal entrance, full reveal.
- **Entrance:** `cubic-bezier(0, 0, 0.2, 1)` — content fade-in on scroll.
- **Bounce:** `cubic-bezier(0.34, 1.56, 0.64, 1)` — used sparingly on illustration callouts.

### Duration Buckets

- **Fast (100ms):** color transitions, opacity flickers.
- **Standard (200ms):** button hover, card lift, link underline.
- **Slow (400ms):** modal entrance, section transitions.
- **Gradient (12s):** the ambient `indigo-1` → `indigo-2` → `pink-1` drift behind brand canvas.

### Per-Component Micro-States

- **Button (primary light):** background flickers `#ffffff` → `#f6f6f6` on hover, no transform. 200ms standard ease.
- **Button (primary dark):** background `#5865f2` → `#404eed` (brand-500 → brand-600). 200ms.
- **Card on brand canvas:** border opacity 0.10 → 0.18 on hover, no transform. 200ms.
- **Card on white panel:** shadow intensifies `0 4px 4px` → `0 8px 16px`, with a 2px lift via translateY. 200ms.
- **Link / nav-link:** opacity 1 → 0.8 on hover. No underline.
- **Tab pill:** background opacity 0 → 0.10 on hover; on active, background flips to `#5865f2`.
- **Status indicator (online):** continuous subtle pulse (~2s) at scale 1.0 → 1.05 — the only periodic motion outside the gradient.

### Page Transitions

- Hero appears with content fade + 8px translateY rise, ease-entrance, 400ms.
- Below-fold sections fade-in on scroll-into-viewport, 300ms each.
- Modal entrance: backdrop fade 300ms + modal scale 0.96 → 1.0 + opacity 0 → 1, ease-emphasized 400ms.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)`:
- Animated gradient layers freeze at first frame (no drift).
- All transforms collapse to opacity-only transitions.
- Status indicator pulse stops.
- Hover state transitions still fire (200ms color/opacity) — they aid usability.

## 9. Accessibility & A11y ✨

### Contrast Pairs

- **Body text on brand canvas:** `#ffffff` on `#5865f2` → 4.7:1. **AA at body sizes; AAA at large text.** This is the lowest-contrast pair on the page.
- **Body text on white panel:** `#23272a` on `#ffffff` → 13.2:1. **AAA.**
- **Soft text on brand canvas:** `rgba(255,255,255,0.72)` on `#5865f2` → ~3.4:1. **AA at large only.** Use only for captions ≥18px or use `#ffffff` for body.
- **Cyan link on brand canvas:** `#00b0f4` on `#5865f2` → 2.1:1 — **fails AA.** Discord mitigates by underlining inline cyan links and never relying on color alone.
- **Cyan link on white panel:** `#00b0f4` on `#ffffff` → 2.8:1 — also fails. Discord uses cyan only with bold weight or underline on white.
- **Focus ring:** `#00b0f4` 2px on `#5865f2` → ring-on-canvas contrast ~2.1:1 — borderline; the ring's 2px offset and animated focus pulse compensate.

### Focus Indicators

Standard focus is `2px solid #00b0f4` with 2px offset. Cyan against blurple is the signature complementary — recognizable as Discord's focus across the entire product. Form fields add an inner ring of `0 0 0 2px rgba(0,176,244,0.20)`.

### ARIA Pattern Recommendations

- **Top nav:** `<nav aria-label="Primary">` with skip link at top.
- **Tab bar (comparison sections):** `role="tablist"`, individual `role="tab"`, content panels `role="tabpanel"` with `aria-labelledby`.
- **Modal:** `role="dialog"` + `aria-modal="true"` + `aria-labelledby` on title.
- **Status indicators:** `aria-label="Online"` / `"Idle"` / `"Do Not Disturb"` — color-only signaling fails for color-blind users.
- **CTA buttons:** semantic `<button>` or `<a>` with descriptive label — never icon-only without `aria-label`.

### Keyboard Navigation

- Tab order follows visual layout: nav → primary CTA → secondary CTA → page content → footer.
- Skip-link to `#main-content` first focus stop.
- Tab pills are keyboard-navigable with arrow keys (left/right between tabs, enter to activate).
- Modal traps focus until dismissed (Esc or close button).
- Status pickers (in-product analog) use arrow keys; marketing surface inherits the pattern.

### Screen Reader Hints

- Hero headlines that read all-caps via CSS use `text-transform: uppercase` so screen readers receive the underlying lowercase text — not "G-R-O-U-P C-H-A-T."
- Brand canvas color-shift between sections is purely decorative; no announcements needed.
- Animated gradient layers carry `aria-hidden="true"` — they're decorative, never content.

### Reduced Motion

`prefers-reduced-motion: reduce` collapses gradient drift, pulse animations, and all transforms. Color transitions remain (they aid usability for hover/focus feedback).

## 10. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | 0–640px | Single column, hero height collapses to ~520px |
| Tablet | 640–1024px | Two-column feature grids, hero stays full-bleed |
| Desktop | 1024–1280px | Three-column feature grids, 1200px container caps |
| Wide | 1280–1536px+ | 1200px container holds; surrounding gutters absorb extra width |

### Touch Targets

- Buttons height ≥48px on mobile (50–56 on desktop) — exceeds WCAG 2.5.5 44×44 minimum.
- Tab pills 36px height — pad with 8px around for touch.
- Nav links pad to 48×48 on mobile via padding.

### Collapsing Strategy

- **Hero:** display-hero shrinks 88 → 56 → 44 → 36 across breakpoints. Line-height stays 0.85–0.95.
- **Feature grid:** 3-col → 2-col → 1-col. Card padding shrinks 32 → 24 → 20.
- **Nav:** desktop horizontal menu collapses to hamburger at <1024px.
- **CTAs:** primary + secondary stack vertically at <640px, full-width.
- **Animated gradient:** persists across breakpoints — it's the brand atmosphere.

### Image Behavior

- Hero illustration (commissioned, full-bleed character art) scales with viewport via aspect-ratio container.
- Product screenshots inside cards lock to 16:9 aspect, scale to fit card width.
- All decorative imagery loads with `loading="lazy"` below fold.

### Container Queries

Discord does not heavily use container queries on the marketing site — viewport breakpoints carry the responsive logic. Future-likely candidate: feature cards adapting padding based on container width rather than viewport.

## 11. Content & Voice ✨

### Tone

**Playful, casual, inclusive — the "hangout, not work" register.** Discord's marketing voice trusts that its audience knows what a chat app is and gives them a reason to choose Discord specifically: friends, communities, games, hobbies. It avoids enterprise gloss; it embraces "vibes."

### Microcopy Patterns

- **Headlines** in all-caps Ginto Nord: "GROUP CHAT THAT'S ALL FUN & GAMES", "WHERE HANGING OUT IS EASY", "IMAGINE A PLACE…"
- **Decks** in sentence-case gg sans 20: "Discord is great for playing games and chilling with friends, or even building a worldwide community."
- **CTA verbs:** "Download for Mac/Windows/Linux", "Open Discord in your browser", "Get Nitro" (subscription), "Get started" (broad).
- **Error messages** (rare on marketing, but the in-product convention): friendly + specific. "Something's not right" not "Error 500." Always with a recovery path.

### Empty States (in-product analog)

The marketing site doesn't show empty states, but the in-product convention is: friendly illustration + headline ("Nothing here yet") + suggested action ("Send a message to start the conversation") — never just "No data."

### Success Confirmations

- After download: "Download started!" — not "Success." Casual, present-tense.
- After form submit: "Thanks! We'll be in touch."
- Toast pattern (in-product): icon + short message + optional action button.

### CTA Verb Conventions

The verbs Discord uses, ranked by frequency:
1. **Download** (for app installation — primary conversion)
2. **Open Discord in your browser** (secondary, cross-platform CTA)
3. **Get Nitro** (subscription upsell)
4. **Get Started** (top-of-funnel)
5. **Login** (returning users)

What Discord *doesn't* say: "Sign up free", "Start your free trial", "Try it now" — too SaaS-y. The brand voice avoids the dev-tool conversion vocabulary.

## 12. Dark Mode & Theming ✨

Discord's marketing site is **brand-canvas-first** — the page itself is blurple, with white-panel sections alternating. There isn't a separate dark-mode token swap because the canvas already runs in saturated brand color. The in-product app *does* offer light/dark/AMOLED themes, but the marketing site does not mirror that — it's always brand-canvas.

If implementing a Discord-style brand-canvas system as a "theme":

```yaml
colors-dark:
  bg: '#5865f2'              # brand canvas — same in both modes
  surface: '#ffffff'         # white-panel sections persist
  text: '#ffffff'            # body on canvas
  text-on-light: '#23272a'   # body on white panel
  brand: '#5865f2'
  brand-deep: '#1a2081'      # gradient toner
  border: 'rgba(255,255,255,0.10)'
```

The "dark mode" of a brand-canvas system is *deeper canvas* (`#1a1b3a` aubergine for premium / Nitro pages) rather than canvas-flip. Discord's Nitro tier uses an aubergine-on-blurple layered canvas as its visual differentiator.

## 13. Lineage & Influences

Discord's design lineage is non-traditional for SaaS. Where dev-tool peers borrow from typographic publishing (Linear → Inter, Resend → Domaine), Discord borrows from **gaming-platform marketing** (Twitch, Xbox, Roblox) and **Saturday-morning-cartoon poster art**. The all-caps display + saturated chromatic field is the visual vocabulary of Cartoon Network, MTV's '90s graphics package, and Xbox achievement banners — repurposed for a chat app.

The custom type stack signals premium investment without resorting to a serif (which would feel editorial / old-media). **gg sans** (Noto Sans-derived, custom-licensed) and **ABC Ginto Nord Discord** (Dinamo Foundry custom cut) together cost more to license/commission than most SaaS brands spend on type — and the result is a marketing surface that no competitor can copy without commissioning their own family.

The **white-on-blurple primary CTA** is the most quoted move in Discord's system. It rejects the dev-tools convention of "brand fill on white" and asserts a brand-canvas register. Apple's macOS download pages do something similar (white-on-dark primary), but Discord's saturated-blurple-as-canvas takes it further.

**Influences:**
- **Dinamo / ABC Ginto Nord** — custom display cut for the all-caps marketing headlines (https://abcdinamo.com/typefaces/ginto)
- **Twitch** — adjacent gamer-platform purple lineage (https://twitch.tv)
- **Xbox / Microsoft Game Pass** — saturated indigo as a "play" register (https://xbox.com)
- **Roblox** — permission for full saturated-color canvas in a SaaS-adjacent landing page (https://roblox.com)
- **Cartoon Network / MTV '90s graphics** — all-caps display + chromatic field is the visual register being borrowed
- **Apple macOS download pages** — white-pill primary CTA on dark canvas

## 14. Do's and Don'ts

### Do's

- **Do** paint full panels in the brand color. Discord owns blurple the way Stripe owns iridescent gradients — half-painting it dilutes.
- **Do** use all-caps for the display tier. ABC Ginto Nord Discord is designed for it; sentence case loses the marketing voice entirely.
- **Do** invert primary CTAs to white-on-brand on brand-canvas sections. The dev-tools convention of brand-on-white doesn't match the immersive register.
- **Do** keep the seven discrete radii consistent: 4 for tiny chips, 8 for inputs, 12 for buttons, 16 for cards, 24 for modals, 32 for featured banners, full pill for the conversion endpoint.
- **Do** flip the bottom-of-page download CTA to full pill (9999). Geometry shift signals "this is the action."
- **Do** alternate brand-canvas and white-panel sections in long-form rhythm — the magazine pacing is the brand atmosphere.
- **Do** use cyan (`#00b0f4`) as the focus ring and link color — it's the signature complementary against blurple.
- **Do** lift status colors directly from the in-product UI (`#23a55a` online, etc.) — the consistency is the brand.

### Don'ts

- **Don't** mix the seven radii arbitrarily. The semantic mapping (12 for buttons, 16 for cards, 24 for modals, round for conversion) is the system.
- **Don't** add drop shadows on the brand canvas. Use the animated gradient layers for depth instead.
- **Don't** re-color the focus ring. Cyan against blurple is the system's signature complementary, and it carries accessibility weight as well as brand weight.
- **Don't** sentence-case the all-caps display tier. Ginto Nord Discord is designed for caps; rendering it sentence-case immediately reads off-brand.
- **Don't** use Fraunces (or any serif) on the marketing surface. Editorial register doesn't match the cartoon-poster atmosphere.
- **Don't** weight body above 500. The display tier owns 700–800; mixing heavy body weights muddies the case-as-hierarchy system.
- **Don't** introduce a third saturated chromatic accent. Blurple + cyan + status hues is the entire palette; adding "brand pink" or "brand teal" would dilute.
- **Don't** lean on Slack-style restraint. Discord's identity is loud and warm; muted treatments read as a different brand.

## 15. Agent Prompt Guide

### Quick Color Reference

```
brand:           #5865f2
brand-deep:      #1a2081
text-on-brand:   #ffffff
text-on-light:   #23272a
white-panel:     #ffffff
focus / link:    #00b0f4
border-canvas:   rgba(255,255,255,0.10)
border-light:    rgba(0,0,0,0.08)
status-online:   #23a55a
status-dnd:      #f23f43
```

### Example Component Prompts

- **Hero:** "Create a hero with a `#5865f2` blurple full-bleed canvas, an all-caps headline in ABC Ginto Nord 88px / weight 800 / line-height 0.85 reading 'GROUP CHAT THAT'S ALL FUN & GAMES', a 20px gg sans deck below in `rgba(255,255,255,0.72)`, and a primary CTA pill in `#ffffff` with `#23272a` text at 12px radius."

- **Feature card:** "Design a feature card on a white-panel section with `#ffffff` background, `1px solid rgba(0,0,0,0.08)` border, 16px radius, 32px padding, `0 4px 4px rgba(0,0,0,0.15)` drop shadow, h4 title in gg sans 22/700 `#23272a`, body in gg sans 16/400 `#4f5660`."

- **Tab bar:** "Build a comparison tab bar with full-pill (9999) tabs at 8px 16px padding, inactive state `rgba(255,255,255,0.10)` background and white text, active state `#5865f2` background with white text, all on a brand-canvas section."

- **Download CTA endpoint:** "Place a final-CTA download button at the bottom of the page as a full pill (9999 radius), `#ffffff` background, `#23272a` text, 16px 32px padding, 56px height — the geometry shift from 12px to full pill signals 'this is the conversion endpoint'."

- **Animated gradient canvas:** "Add an animated gradient layer behind the brand canvas with three colored hues (`indigo-1: hsl(241.5,57%,27%)`, `indigo-2: hsl(241.5,77%,17%)`, `pink-1: hsl(343,84%,69%)`) drifting on a 12-second cadence at low opacity — the only ambient motion on the page."

- **Feature panel on dark:** "Design a feature card on the brand canvas with `rgba(255,255,255,0.06)` translucent background, `1px solid rgba(255,255,255,0.10)` hairline border, 16px radius, no shadow — depth comes from the animated gradient layer underneath."

### Iteration Guide

1. **Anchor the canvas in `#5865f2`.** If you start from white, you'll never get to the Discord register; the brand-canvas register is non-negotiable.
2. **Set the headline in ABC Ginto Nord all-caps.** Sentence-case headlines immediately read off-brand. If Ginto Nord isn't licensed, use a condensed bold sans (Druk Wide, Helvetica Neue Condensed Black) at 800 weight, all-caps, line-height 0.85.
3. **Invert the primary CTA.** White pill with `#23272a` text on brand canvas; brand pill with white text on white panels. Don't blend.
4. **Use the seven-radius scale consistently.** 12 for buttons, 16 for cards, 24 for modals, full pill for the conversion endpoint. Mixing reads as accident.
5. **Add the animated gradient layer.** Even subtle drift (2–3% opacity, 12s cadence) is what makes the canvas feel "Discord" instead of "any saturated SaaS."
6. **Pair display all-caps with body sentence-case.** The case-as-hierarchy is the system's primary register-switch — bigger lever than weight or size.
7. **Use cyan (`#00b0f4`) only for focus and link.** Don't introduce a third accent; the blurple + cyan pair is the signature.
8. **Stack sections in chunky rhythm.** 96–128px between sections, not 64px tight. The whitespace is the brand atmosphere.
