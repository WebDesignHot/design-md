---
name: Replit
tagline: Saturated turquoise on `#0e1525` ink — the cloud-IDE aesthetic with IBM Plex DNA and a JetBrains Mono soul.
updated_at: 2026-05-06T01:20:47+12:00
published_at: 2026-05-03T16:49:18+12:00
author: webdesignhot
source_url: https://replit.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, ai, saas]
tags: [dark, sans, mono, dense, structured, cool, bright]
preview_swatch: ['#0e1525', '#1fe0ea', '#f5f9fc']
related: [vercel, github, cursor]
description: 'Replit''s marketing site lives on a near-black `#0e1525` canvas with a single saturated turquoise `#1fe0ea` doing all the action work. The type system pairs a custom IBM Plex variant ("Replit Sans") with JetBrains Mono for code, and the layout leans dense and IDE-coded — feature grids that look like editor panes, terminal-green accents, and a generous use of code-as-illustration. Where Vercel goes pure black with a single white CTA, Replit goes navy-ink with a saturated cyan and dark text on it — the contrast is what makes the turquoise read as electric.'

colors:
  bg: '#0e1525'
  bg-deep: '#0b1120'
  bg-darker: '#080d18'
  surface: '#1c2333'
  surface-high: '#2b3245'
  surface-low: '#161e2e'
  surface-elev: '#36405a'
  text: '#f5f9fc'
  text-strong: '#ffffff'
  text-muted: '#9aa6b8'
  text-soft: '#6c7891'
  text-faint: '#4a5366'
  text-on-brand: '#0e1525'
  brand: '#1fe0ea'
  brand-hover: '#3deef7'
  brand-deep: '#0fb6c0'
  brand-soft: 'rgba(31,224,234,0.15)'
  brand-tint: 'rgba(31,224,234,0.08)'
  accent-orange: '#ff8a3d'
  accent-orange-soft: 'rgba(255,138,61,0.15)'
  accent-pink: '#f26d9f'
  accent-pink-soft: 'rgba(242,109,159,0.15)'
  accent-purple: '#9b6bff'
  accent-purple-soft: 'rgba(155,107,255,0.15)'
  accent-yellow: '#ffd84a'
  on-brand: '#0e1525'
  border: '#ffffff14'
  border-strong: '#ffffff24'
  border-soft: '#ffffff0a'
  border-brand: 'rgba(31,224,234,0.4)'
  link: '#1fe0ea'
  link-hover: '#3deef7'
  success: '#22c55e'
  success-bg: 'rgba(34,197,94,0.15)'
  warning: '#ff8a3d'
  warning-bg: 'rgba(255,138,61,0.15)'
  danger: '#ef4444'
  danger-bg: 'rgba(239,68,68,0.15)'
  info: '#1fe0ea'
  shadow-deep: 'rgba(0,0,0,0.4)'
  shadow-soft: 'rgba(0,0,0,0.25)'
  shadow-glow: 'rgba(31,224,234,0.2)'

typography:
  display:
    family: '"Replit Sans", "IBM Plex Sans", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600, 700]
  body:
    family: '"Replit Sans", "IBM Plex Sans", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 500, 600]
  mono:
    family: '"JetBrains Mono", "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
    weights: [400, 500, 600, 700]
  scale:
    display-hero:    { size: 96, weight: 600, lineHeight: 1.02, tracking: '-0.03em',  family: display }
    h1:              { size: 72, weight: 600, lineHeight: 1.05, tracking: '-0.025em', family: display }
    h2:              { size: 48, weight: 600, lineHeight: 1.10, tracking: '-0.02em',  family: display }
    h3:              { size: 28, weight: 600, lineHeight: 1.20, tracking: '-0.01em',  family: display }
    h4:              { size: 22, weight: 600, lineHeight: 1.30, tracking: '-0.005em', family: display }
    h5:              { size: 18, weight: 600, lineHeight: 1.35, tracking: '0',         family: display }
    body-large:      { size: 19, weight: 400, lineHeight: 1.55, tracking: '0',         family: body }
    body:            { size: 17, weight: 400, lineHeight: 1.50, tracking: '0',         family: body }
    body-small:      { size: 15, weight: 400, lineHeight: 1.45, tracking: '0',         family: body }
    button:          { size: 15, weight: 600, lineHeight: 1.20, tracking: '0',         family: body }
    button-small:    { size: 13, weight: 600, lineHeight: 1.20, tracking: '0',         family: body }
    nav:             { size: 14, weight: 500, lineHeight: 1.20, tracking: '0',         family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.45, tracking: '0',         family: body }
    label:           { size: 12, weight: 500, lineHeight: 1.30, tracking: '0.04em',    family: mono }
    label-uppercase: { size: 11, weight: 500, lineHeight: 1.30, tracking: '0.08em',    family: mono }
    code:            { size: 14, weight: 400, lineHeight: 1.55, tracking: '0',         family: mono }
    code-small:      { size: 12, weight: 400, lineHeight: 1.50, tracking: '0',         family: mono }
    code-bold:       { size: 14, weight: 600, lineHeight: 1.55, tracking: '0',         family: mono }
    micro:           { size: 11, weight: 400, lineHeight: 1.40, tracking: '0',         family: mono }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  xl: 12
  xxl: 16
  pill: 9999

spacing:
  base: 8
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  gutter: 24
  section-y: 96

components:
  button-primary:
    background: brand
    text: on-brand
    radius: 8
    padding: '12px 20px'
    font: 'Replit Sans 15px / weight 600'
    hover: 'background → #3deef7'
    use: 'Cyan CTA — dark `#0e1525` text on cyan, never white. The contrast is what makes turquoise read as electric.'
  button-secondary:
    background: transparent
    text: text-strong
    border: '1px solid #ffffff24'
    radius: 8
    padding: '12px 20px'
    hover: 'background → rgba(255,255,255,0.06)'
    use: 'Outlined secondary on the dark canvas'
  button-ghost:
    background: transparent
    text: brand
    border: 'none'
    padding: '12px 16px'
    hover: 'colour → #3deef7'
    use: 'Tertiary inline action'
  card:
    background: surface
    border: '1px solid #ffffff14'
    radius: 12
    padding: '24px'
    shadow: 'none'
    use: 'Feature card on the dark canvas — flat-on-flat depth via surface ladder'
  editor-frame:
    background: bg-deep
    border: '1px solid #ffffff24'
    radius: 12
    chrome: 'three macOS dots (red/yellow/green), tab strip with current file, JetBrains Mono inside'
    use: 'Faux IDE hero — defining illustration, anchors nearly every section'
  badge:
    background: '#ffffff14'
    text: text-strong
    border: 'none'
    radius: 9999
    padding: '4px 10px'
    font: 'JetBrains Mono 12px / 500'
    indicator: 'cyan / orange / purple dot 6px before label'
    use: 'NEW / AI / Beta status labels'
  nav:
    background: bg
    border-bottom: 'none — flat ink top to bottom'
    blur: 'none'
    use: 'Quiet `#0e1525` sticky bar with white logo and cyan CTA right-pinned'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-snappy: 'cubic-bezier(0.16, 1, 0.3, 1)'
  duration-fast: 120
  duration-standard: 200
  duration-slow: 320
  hover-lift: 'translate-Y(-2px) on cards; cyan glow ring on primary CTA'
  reduced-motion: 'respects prefers-reduced-motion: reduce — opacity-only, no translate, no glow pulse'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: '0 1px 2px rgba(0,0,0,0.25)'
  soft: '0 4px 12px rgba(0,0,0,0.25)'
  standard: '0 8px 24px rgba(0,0,0,0.35)'
  elevated: '0 16px 40px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.25)'
  glow-cyan: '0 0 24px rgba(31,224,234,0.3)'
  ring: '0 0 0 2px #1fe0ea'

accessibility:
  contrast-text-on-bg: 16.2                # #f5f9fc on #0e1525 — AAA
  contrast-text-on-brand: 11.4             # #0e1525 on #1fe0ea — AAA
  contrast-link-on-bg: 12.1                # #1fe0ea on #0e1525 — AAA
  focus-ring: '2px solid #1fe0ea, 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'tab follows DOM; cyan focus ring on every interactive element; arrow keys for IDE-pattern lists'

lineage:
  summary: |
    Replit's marketing aesthetic is what happens when an IDE escapes onto a
    landing page. The canvas is the iconic #0e1525 near-black ink — slightly
    cooler than Linear's #08090a, slightly warmer than Vercel's pure black —
    and the brand colour is a saturated turquoise #1fe0ea that lights up the
    whole page from the CTA. The type system is house-customised: "Replit
    Sans" is a Plex-Sans derivative drawn for the brand, with JetBrains Mono
    as the inevitable companion for code samples and label-as-mono moments.
    Secondary accents — #ff8a3d orange (community / Bounty), #f26d9f pink,
    and #9b6bff purple (AI / Ghostwriter) — appear in feature-specific
    contexts but never on the main CTA, which is always cyan. The defining
    visual move is the faux-IDE hero: nearly every section anchors on a
    screenshot of an editor pane, terminal, or run output, with JetBrains
    Mono syntax-highlighted inside.
  influences:
    - name: IBM Plex / JetBrains Mono
      role: The two foundries that supply Replit's entire typographic identity — Plex DNA in the sans, JetBrains Mono in the editor
      url: https://www.jetbrains.com/lp/mono
    - name: Vercel
      role: Dark-mode marketing discipline — flat ink canvas, single saturated brand accent, generous code-block real estate
      url: https://vercel.com
    - name: Cloud9 / StackBlitz
      role: Cloud-IDE visual heritage — chrome, tab strips, and terminal panes used as marketing imagery
      url: https://stackblitz.com
    - name: Linear
      role: Flat-on-flat depth via surface ladder rather than shadow
      url: https://linear.app

dark-mode: native   # Replit's marketing IS the dark mode — light theme exists for the product but not the marketing
---

## 1. Visual Theme & Atmosphere

Replit's marketing site treats the IDE as the brand. The canvas is a near-black `#0e1525` — the same colour the editor uses — and almost every section anchors on a faux-editor screenshot with JetBrains Mono glyphs inside. The brand colour is a saturated turquoise `#1fe0ea` that does all the action work; secondary feature accents (orange, pink, purple) appear in context but never compete for the CTA. The page reads as *you're already inside the tool* — there is no "marketing" layer separate from the product.

The atmosphere is electric. Where Vercel's dark mode reads as monastic black with a single white type wall, Replit pushes saturation: the cyan against navy ink is high-contrast enough to feel almost neon, and the secondary accents (warm orange for community, soft purple for AI, hot pink for Ghostwriter) introduce moments of chromatic energy that signal "this is a place where things happen." The `#0e1525` ink is intentionally a navy-tinted near-black — slightly cooler than Linear's `#08090a`, slightly warmer than pure `#000000` — and the cyan reads warmer against it than it would against true black.

The type system is "Replit Sans" — a custom IBM Plex Sans derivative — paired with JetBrains Mono. Headlines hit 72px in 600 weight with a tight `-0.025em` tracking, giving the marketing a confident bulletin quality. The slightly architectural Plex feel survives even at hero sizes. Body type is the same Replit Sans at 400/500, sized 17px on a 1.5 line-height. The mono is JetBrains Mono — used for code blocks, terminal screenshots, and the small all-caps label moments at 12px with `0.04em` tracking. JetBrains Mono's unmistakable letterforms (zero with a dot, ligatures on `=>`, distinctive `g`) are part of Replit's brand fingerprint as much as the cyan is.

Depth is achieved through a surface ladder rather than shadow. The `#0b1120` → `#0e1525` → `#1c2333` → `#2b3245` ladder lets cards lift via background change plus an 8–14% white hairline (`#ffffff14`, `#ffffff24`). Shadows, when they appear, are soft cool blacks beneath the faux-IDE screenshots, used to lift the "app" out of the page. Cards themselves are flat-on-flat. The cyan glow ring on the primary CTA hover is the single chromatic depth cue.

**Key Characteristics:**
- Iconic `#0e1525` navy-ink canvas — not pure black, intentionally warmer
- Saturated turquoise `#1fe0ea` brand with `#0e1525` dark text on it — never white text on cyan
- Custom Replit Sans (IBM Plex derivative) + JetBrains Mono — the typographic backbone
- Faux-IDE hero — editor chrome, tab strip, JetBrains Mono inside; anchors nearly every section
- Dense feature grids on `#1c2333` cards with `#ffffff14` hairline borders
- Surface-ladder depth instead of shadow — flat-on-flat
- Secondary accents (orange / pink / purple) for feature contexts only — never on the main CTA
- Tight `-0.025em` tracking on display headlines for bulletin quality
- 8px radius on buttons, 12px on cards — IDE-rectangular, not SaaS-pillowy
- All-caps mono labels at 12px / `0.04em` tracking — UI-tag aesthetic

## 2. Color Palette & Roles

### Primary

- **Bg / Ink** (`#0e1525`): the iconic Replit canvas. Navy-tinted near-black — intentionally not `#000000`.
- **Brand / Cyan** (`#1fe0ea`): signature turquoise — does all action work. Always paired with dark text on it.
- **Text Strong** (`#ffffff`): display headings at full white.
- **Text** (`#f5f9fc`): primary body, near-white with cool cast.

### Brand & Dark

- **Bg Deep** (`#0b1120`): deeper nested surface — modals, code blocks beneath the canvas.
- **Bg Darker** (`#080d18`): the deepest layer, used rarely for inset code panels.
- **Surface** (`#1c2333`): card and panel base — the workhorse elevated surface.
- **Surface High** (`#2b3245`): hover and elevated panels.
- **Surface Low** (`#161e2e`): subtle stripe / nested element.
- **Surface Elev** (`#36405a`): selected or pressed panel state.

### Accent

- **Orange** (`#ff8a3d`): community, Bounty, achievements. Warm chromatic energy.
- **Pink** (`#f26d9f`): tertiary highlight — Ghostwriter, AI moments paired with purple.
- **Purple** (`#9b6bff`): AI / Ghostwriter feature highlight.
- **Yellow** (`#ffd84a`): warning state, occasional decorative dot.

### Interactive

- **Brand** (`#1fe0ea`): primary CTA, link, active state.
- **Brand Hover** (`#3deef7`): lighter cyan on hover.
- **Brand Deep** (`#0fb6c0`): pressed state.
- **Brand Soft** (`rgba(31,224,234,0.15)`): cyan-tinted background for highlighted regions.

### Neutral Scale

- **Strong** (`#ffffff`): display text, primary headings.
- **Body** (`#f5f9fc`): primary running text.
- **Muted** (`#9aa6b8`): secondary copy and metadata.
- **Soft** (`#6c7891`): caption / placeholder.
- **Faint** (`#4a5366`): disabled labels.

### Surface & Borders

- **Border** (`#ffffff14`): 8% white hairline — the default rule.
- **Border Strong** (`#ffffff24`): 14% white for elevated panels and outlined buttons.
- **Border Soft** (`#ffffff0a`): subtle inset divider.
- **Border Brand** (`rgba(31,224,234,0.4)`): cyan-tinted border for focused or selected interactive elements.

### Shadow Colors

- **Shadow Deep** (`rgba(0,0,0,0.4)`): primary depth beneath floating panels.
- **Shadow Soft** (`rgba(0,0,0,0.25)`): subtle lift beneath the faux-IDE screenshots.
- **Shadow Glow Cyan** (`rgba(31,224,234,0.2)`): on-hover glow ring around the primary CTA.

### Semantic

- **Success** background `rgba(34,197,94,0.15)`, text `#22c55e`, border `rgba(34,197,94,0.3)`.
- **Warning** background `rgba(255,138,61,0.15)`, text `#ff8a3d`, border `rgba(255,138,61,0.3)`.
- **Danger** background `rgba(239,68,68,0.15)`, text `#ef4444`, border `rgba(239,68,68,0.3)`.
- **Info** uses the brand cyan: background `rgba(31,224,234,0.15)`, text `#1fe0ea`, border `rgba(31,224,234,0.3)`.

## 3. Typography Rules

### Font Family

- **Primary sans**: Replit Sans — a custom IBM Plex Sans derivative drawn for the brand.
- **Fallback chain**: `"Replit Sans", "IBM Plex Sans", -apple-system, "system-ui", "Segoe UI", Helvetica, Arial, sans-serif`.
- **Mono companion**: JetBrains Mono — the editor typeface and brand fingerprint.
- **Mono fallback**: `"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace`.
- **OpenType features** — no `ss01` discipline like Stripe; standard ligatures and kerning. JetBrains Mono ligatures (`=>`, `!=`, `>=`) are intentionally enabled to read as "real code".

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|------|------|------|--------|-------------|----------------|-------------|-------|
| Display Hero | Replit Sans | 96 | 600 | 1.02 | -0.03em | — | Maximum size, used on flagship hero |
| H1 | Replit Sans | 72 | 600 | 1.05 | -0.025em | — | Standard hero headline |
| H2 | Replit Sans | 48 | 600 | 1.10 | -0.02em | — | Section heading |
| H3 | Replit Sans | 28 | 600 | 1.20 | -0.01em | — | Sub-section |
| H4 | Replit Sans | 22 | 600 | 1.30 | -0.005em | — | Card title |
| H5 | Replit Sans | 18 | 600 | 1.35 | 0 | — | Inline emphasis heading |
| Body Large | Replit Sans | 19 | 400 | 1.55 | 0 | — | Lead paragraph |
| Body | Replit Sans | 17 | 400 | 1.50 | 0 | — | Standard reading text |
| Body Small | Replit Sans | 15 | 400 | 1.45 | 0 | — | Captions, footer |
| Button | Replit Sans | 15 | 600 | 1.20 | 0 | — | Primary button label |
| Button Small | Replit Sans | 13 | 600 | 1.20 | 0 | — | Compact buttons |
| Nav | Replit Sans | 14 | 500 | 1.20 | 0 | — | Top-nav links |
| Caption | Replit Sans | 13 | 400 | 1.45 | 0 | — | Image captions, helper text |
| Label | JetBrains Mono | 12 | 500 | 1.30 | 0.04em | — | Status labels, eyebrows |
| Label Uppercase | JetBrains Mono | 11 | 500 | 1.30 | 0.08em | uppercase | "NEW", "BETA", "AI" tags |
| Code | JetBrains Mono | 14 | 400 | 1.55 | 0 | liga | Code blocks, terminal output |
| Code Small | JetBrains Mono | 12 | 400 | 1.50 | 0 | liga | Inline code in body |
| Code Bold | JetBrains Mono | 14 | 600 | 1.55 | 0 | liga | Keywords inside code blocks |
| Micro | JetBrains Mono | 11 | 400 | 1.40 | 0 | — | File path, metadata |

### Principles

- **Replit Sans is the body voice** — both display and body use the same family. Plex-derived geometry survives at hero sizes.
- **Tracking tightens with size** — `-0.03em` at 96px, `-0.025em` at 72px, `-0.02em` at 48px, normal below 18px. Display feels confident, body feels neutral.
- **JetBrains Mono is brand fingerprint** — it appears wherever code, label, terminal, or all-caps tag appears. Its ligatures are intentionally on.
- **No serif anywhere** — Replit's identity is sans display + mono accent. A serif would break the IDE metaphor.
- **Two weight families** — sans uses 400 (body), 500 (nav/label), 600 (display/button). Mono uses 400 (code), 500 (label), 600 (bold code).
- **Weight 600 is the headline weight** — Replit goes confident-bold rather than Stripe-light. The brand is *builder*, not *editorialist*.
- **Mono labels at 0.04em tracking** — UI-tag aesthetic borrowed from CLI prompts. All caps for "NEW" / "BETA" / "AI" goes to `0.08em`.

## 4. Component Stylings

### Buttons

**Primary Cyan**
- Background: `#1fe0ea`
- Text: `#0e1525` — never white. The dark text on cyan is the contrast that makes the turquoise read electric.
- Padding: `12px 20px`
- Radius: `8px`
- Font: 15px Replit Sans weight 600
- Hover: background → `#3deef7`; optional cyan glow ring `0 0 24px rgba(31,224,234,0.3)`
- Use: primary CTA — `Start coding`, `Try Replit`, `Sign up`

**Outlined Secondary**
- Background: transparent
- Text: `#ffffff`
- Border: `1px solid #ffffff24`
- Padding: `12px 20px`
- Radius: `8px`
- Font: 15px Replit Sans weight 600
- Hover: background → `rgba(255,255,255,0.06)`, border → `rgba(255,255,255,0.4)`
- Use: secondary action paired with primary cyan

**Ghost / Inline**
- Background: transparent
- Text: `#1fe0ea`
- No border
- Padding: `12px 16px`
- Hover: colour → `#3deef7`
- Use: tertiary action, often with a right arrow `→`

**Disabled**
- Background: `rgba(255,255,255,0.06)`
- Text: `#4a5366`
- Border: `1px solid #ffffff14`
- No hover

### Cards & Containers

**Feature Card**
- Background: `#1c2333`
- Border: `1px solid #ffffff14`
- Radius: `12px`
- Padding: `24px`
- Shadow: none (flat-on-flat)
- Hover: surface → `#2b3245`, border → `#ffffff24`, optional translate-Y(-2px)

**Editor Frame (faux-IDE hero)**
- Background: `#0b1120`
- Border: `1px solid #ffffff24`
- Radius: `12px`
- Chrome: three macOS dots (red/yellow/green) at top-left, tab strip with current file label
- Inside: JetBrains Mono syntax-highlighted code, line numbers in `#4a5366`, cursor caret in `#1fe0ea`
- Shadow: `0 16px 40px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.25)` to lift the "app" out of the page
- Use: anchors nearly every marketing section

**Terminal Pane**
- Background: `#0b1120`
- Border: `1px solid #ffffff14`
- Radius: `8px`
- Inside: JetBrains Mono with green prompt `$` in `#22c55e`, cyan output for highlighted commands

### Badges, Tags, Pills

**Status Badge**
- Background: `#ffffff14`
- Text: `#ffffff`
- Border: none
- Radius: `9999px`
- Padding: `4px 10px`
- Font: JetBrains Mono 12px / 500
- Indicator: 6px coloured dot before label — cyan (NEW), orange (BETA), purple (AI)

**Mono Tag**
- Background: `rgba(255,255,255,0.06)`
- Text: `#9aa6b8`
- Border: `1px solid #ffffff14`
- Radius: `4px`
- Padding: `2px 8px`
- Font: JetBrains Mono 11px / 500 / `0.08em` tracking / uppercase

### Inputs & Forms

- Background: `#1c2333`
- Border: `1px solid #ffffff24`
- Radius: `8px`
- Padding: `10px 14px`
- Font: Replit Sans 15px / 400 / `#f5f9fc`
- Placeholder: `#6c7891`
- Focus: border → `#1fe0ea`, ring `2px rgba(31,224,234,0.3)`
- Label: Replit Sans 13px / 500 / `#9aa6b8`
- Helper: Replit Sans 12px / 400 / `#9aa6b8`
- Error: border → `#ef4444`, helper → `#ef4444`

### Navigation

- Background: `#0e1525` — flat ink, no separate nav-bar fill
- No background blur — flat ink top to bottom
- Logo: white wordmark or cyan `R` mark on the left
- Links: Replit Sans 14px / 500 / `#f5f9fc`, hover → `#1fe0ea`
- CTA: cyan primary button right-pinned (`Try Replit` or `Sign up`)
- Mobile: hamburger toggle, full-screen drawer on click

### Decorative Elements

- **Cyan glow** — `0 0 24px rgba(31,224,234,0.3)` ring around primary CTA on hover
- **Surface ladder bands** — alternating `#0e1525` and `#0b1120` strips for section rhythm
- **Faux-IDE screenshots** — the strongest visual asset, used as illustration in 60% of feature sections

## 5. Layout Principles

### Spacing System

- Base unit: `8px`
- Scale: `2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 120, 160`
- Density observation: dense by marketing standards. Replit packs more information per scroll than Vercel or Linear, in keeping with the "this is a tool for builders" positioning. The `8px` rhythm holds throughout.

### Grid & Container

- Max content width: `1280px` with `24px` gutters
- Hero bands often have a faux-IDE screenshot taking 60% of the horizontal space
- Feature grids are typically three-column with `#1c2333` cards
- Code blocks may break out to wider widths, sometimes full-bleed
- Vertical rhythm runs `96–120px` between sections

### Whitespace Philosophy

- **Dense over airy** — Replit prioritises information density. Three-column feature grids and stacked code blocks are the norm.
- **Editor-pane proportions** — section widths and card aspect ratios echo IDE pane geometry rather than golden-ratio editorial.
- **Breathing room around code** — code blocks always get extra padding (`24–32px`) to feel like they "belong" rather than cramming.

### Section Cadence

- Hero (faux-IDE on `#0e1525`) → feature grid (3-column on `#0e1525`) → terminal demo band (often `#0b1120` for contrast) → testimonial/logo wall → pricing → CTA → footer
- No light-section breaks — the canvas stays dark throughout marketing
- Surface-ladder swaps (`#0e1525` ↔ `#0b1120`) provide rhythm without breaking the dark-mode discipline

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|------|-------|-----|
| Micro | 2px | Inline highlights, fine corners |
| Standard | 4px | Mono tags, status dots |
| Comfortable | 6px | Inputs (alt), small chips |
| Relaxed | 8px | Buttons, terminal panes — workhorse |
| Large | 12px | Cards, editor frames |
| Featured | 16px | Hero cards, modal frames |
| Pill | 9999px | Status badges, avatars only |

The radii ladder is `4/6/8/12/16`. Buttons land at `8px`, cards at `12px`, and the faux-IDE chrome at `12px` to mimic a macOS window. There are no fully-rounded CTAs — the shape vocabulary stays rectangular, like an editor. Pills (`9999`) appear on tags and badges only.

## 7. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 — Flat | No shadow, surface ladder | Page canvas, body cards |
| 1 — Hairline | `1px solid #ffffff14` | Default card and panel separation |
| 2 — Surface Lift | Surface bg → next ladder rung + `1px solid #ffffff24` | Hover and elevated panels |
| 3 — Soft Shadow | `0 4px 12px rgba(0,0,0,0.25)` plus hairline | Faux-IDE screenshots lifted off canvas |
| 4 — Elevated | `0 16px 40px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.25)` | Hero IDE frames, modals |
| 5 — Cyan Glow | `0 0 24px rgba(31,224,234,0.3)` | Primary CTA hover state |
| 6 — Ring | `2px solid #1fe0ea` at `2px` offset | Keyboard focus |

**Shadow Philosophy** — depth is achieved through the surface ladder (`#0b1120` → `#0e1525` → `#1c2333` → `#2b3245`) and 8–14% white hairlines (`#ffffff14`, `#ffffff24`). Shadows are minimal — when they appear, they're soft cool blacks beneath the faux-IDE screenshots, used to lift the "app" out of the page. Cards themselves are flat-on-flat. The cyan glow ring is the single chromatic depth cue and appears only on the primary CTA hover.

## 8. Interaction & Motion

### Easing Curves

- **Standard** `cubic-bezier(0.4, 0, 0.2, 1)` — default
- **Emphasized** `cubic-bezier(0.2, 0, 0, 1)` — hero entrance, glow ring expansion
- **Snappy** `cubic-bezier(0.16, 1, 0.3, 1)` — quick, slight overshoot for IDE-like state changes

### Duration Buckets

- Fast: `120ms` — colour swaps, ring fades
- Standard: `200ms` — button hover, card lift, dropdown open
- Slow: `320ms` — hero reveals, faux-IDE typewriter animation

### Per-Component Micro-States

- **Button hover (primary)** — background `#1fe0ea` → `#3deef7` over 120ms; cyan glow ring expands to `0 0 24px rgba(31,224,234,0.3)` over 200ms.
- **Card hover** — background → next surface-ladder rung, border → `#ffffff24`, optional `translate-Y(-2px)` over 200ms standard ease.
- **Link hover** — colour `#f5f9fc` → `#1fe0ea` over 120ms; underline does NOT appear (links are colour-shift only on dark canvas).
- **Input focus** — border `#ffffff24` → `#1fe0ea` plus 2px cyan ring `rgba(31,224,234,0.3)` over 120ms.
- **Editor frame entrance** — opacity 0→1 plus `translate-Y(16px)` over 320ms emphasized, triggered by Intersection Observer.
- **Faux typewriter** — code inside the editor frame types out at ~60ms per character, looped, with cursor blink at 600ms cycle.

### Page Transitions

- No client-side transitions on marketing. Standard browser navigation. Hero modules animate in over 320ms once in viewport.

### Reduced Motion Strategy

- `@media (prefers-reduced-motion: reduce)` — opacity-only fades at 120ms linear. Translate, glow pulse, and typewriter animation are removed entirely. Static code shown instead of animated typing.

## 9. Accessibility & A11y

### Contrast Pairs

- `#f5f9fc` body on `#0e1525` bg — **16.2:1** (AAA)
- `#9aa6b8` muted on `#0e1525` bg — **6.4:1** (AA at body sizes)
- `#0e1525` text on `#1fe0ea` brand — **11.4:1** (AAA)
- `#1fe0ea` link on `#0e1525` bg — **12.1:1** (AAA)
- `#ffffff` text on `#1c2333` surface — **14.8:1** (AAA)
- `#ff8a3d` accent on `#0e1525` bg — **6.8:1** (AA)
- `#9b6bff` accent on `#0e1525` bg — **5.2:1** (AA Large)

### Focus Indicators

- Default focus ring: `2px solid #1fe0ea` at `2px` offset
- On cyan CTAs: ring becomes `2px solid #ffffff` for contrast against the cyan
- Form inputs use a 2px cyan ring inset

### ARIA Patterns

- **Combobox** — `role="combobox"` with `aria-expanded`, `aria-controls` to listbox id (used in IDE-pattern command palette references)
- **Dialog** — `role="dialog"` `aria-modal="true"` with focus trap and `aria-labelledby` pointing to title
- **Menubar** — `role="menubar"` for IDE-style top menus with arrow-key navigation
- **Tablist** — `role="tablist"` for the faux-IDE tab strip
- **Code** — code blocks marked up as `<pre><code>` with `role="region"` and `aria-label="Code example"`

### Keyboard Navigation

- Tab order follows DOM source order
- Skip-to-content link in header (visible on focus only)
- All interactive elements reachable via Tab
- `Esc` closes dropdowns, modals, command palettes
- Arrow keys navigate IDE-pattern lists (file tree, tablist, menubar)
- `Cmd+K` / `Ctrl+K` opens command palette where present

### Screen Reader Hints

- Decorative cyan dots and glow rings `aria-hidden="true"`
- Faux-IDE screenshots labelled with `aria-label="Code example showing [feature]"` plus visible caption
- "NEW" / "BETA" / "AI" badges read aloud as "New feature", "Beta feature", "AI feature"
- Live region `aria-live="polite"` on the typewriter animation when present

### Reduced Motion

- Honoured — typewriter and glow pulse stripped to static. Cyan ring still appears on hover but does not animate in.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <640px | Single column, faux-IDE pinches to fit, H1 72→44px |
| Tablet | 640–1024px | 2-column grids, IDE frame full-width, H1 72→56px |
| Desktop | 1024–1280px | 3-column feature grids, IDE frame at 60% width |
| Wide | ≥1280px | Centred 1280px container with generous margins |

### Touch Targets

- Buttons at `12px 20px` give a comfortable `44px+` tap height
- Nav links use `44×44px` minimum tap area on mobile
- Status badges grow from `4px 10px` to `6px 12px` on touch devices

### Collapsing Strategy

- H1: `72px` → `56px` → `44px` across desktop → tablet → mobile
- Body: `17px` → `16px` on mobile
- Faux-IDE screenshots: 60% width → full width, may horizontally scroll inside frame
- Feature cards: 3-column → 2-column → single column stacked
- Section spacing: `96–120px` → `64px` on mobile
- Nav: horizontal links + CTA → hamburger drawer
- Code blocks maintain JetBrains Mono treatment, may horizontally scroll

### Image Behavior

- Faux-IDE screenshots maintain `12px` radius and chrome at all sizes
- Cyan glow effects simplify on mobile (single layer instead of layered glow)
- Logo grids reduce to 2 columns on mobile

### Container Queries

- Faux-IDE frames use container queries to switch from horizontal split-pane to stacked tab layout when their container drops below `560px`.

## 11. Content & Voice

### Tone

Builder-direct, unintimidated, slightly playful. The voice assumes the reader codes — Replit never explains what an IDE is. Headlines are imperative ("Build anything, instantly") or declarative ("AI-native cloud development"). Body copy is technical but not jargon-heavy; it uses the names of real frameworks (Next.js, Python, Rust) rather than abstractions.

### Microcopy Patterns

- **Button verbs** — `Start coding`, `Try Replit`, `Sign up`, `Open in editor`. Never `Get started today`, never `Click here`.
- **Error message recipe** — direct, technical: `Build failed: missing dependency. Run npm install.`
- **Success confirmations** — terse: `Deployed.`, `Saved.`, `Forked.`
- **Status labels** — all-caps mono: `NEW`, `BETA`, `AI`, `LIVE`.

### Empty States

- Direct and instructive: `No Repls yet. Start with a template.`
- Always paired with primary CTA `Browse templates` and secondary `Create blank Repl`.
- No mascots, no apologetic copy.

### CTA Verb Conventions

- Primary: `Start coding`, `Try Replit`, `Get Replit Pro`, `Sign up`
- Secondary: `See how it works`, `Read the docs`, `View pricing`
- Tertiary: `Learn more →`, `Open editor →`

## 12. Dark Mode & Theming

**Replit's marketing IS the dark mode.** There is no light-mode marketing surface — the canvas is `#0e1525` from header to footer. The product editor offers a light theme, but the marketing site does not.

If a downstream implementation needs a light variant, the recommended swap is:
- `bg` `#0e1525` → `#ffffff`
- `bg-deep` `#0b1120` → `#f8fafc`
- `surface` `#1c2333` → `#f1f5f9`
- `text` `#f5f9fc` → `#0e1525`
- `text-muted` `#9aa6b8` → `#64748b`
- `border` `#ffffff14` → `#0e15251a` (10% navy)
- `brand` `#1fe0ea` stays — colour is brand-locked, but the dark-text-on-cyan rule still applies (the cyan does NOT invert)

The colour-locked brand cyan means the CTA looks identical in light and dark — a deliberate continuity signal.

## 13. Lineage & Influences

Replit's marketing aesthetic is what happens when an IDE escapes onto a landing page. The canvas is the iconic `#0e1525` near-black ink — slightly cooler than Linear's `#08090a`, slightly warmer than Vercel's pure black — and the brand colour is a saturated turquoise `#1fe0ea` that lights up the whole page from the CTA.

The type system is house-customised: "Replit Sans" is a Plex-Sans derivative drawn for the brand, with JetBrains Mono as the inevitable companion for code samples and label-as-mono moments. Secondary accents — `#ff8a3d` orange (community / Bounty), `#f26d9f` pink, and `#9b6bff` purple (AI / Ghostwriter) — appear in feature-specific contexts but never on the main CTA, which is always cyan.

The defining visual move is the **faux-IDE hero**: nearly every section anchors on a screenshot of an editor pane, terminal, or run output, with JetBrains Mono syntax-highlighted inside. The lineage runs through Vercel's dark-mode marketing discipline, Linear's flat-on-flat depth, and the cloud-IDE visual heritage that started with Cloud9 and StackBlitz — but Replit pushes harder on the *I write code in the browser* identity than any of them.

The brand explicitly rejects: gradient backgrounds, illustrated mascots, soft pastel palettes, pill-shaped CTAs, serif type anywhere, white-on-cyan buttons (the dark-on-cyan rule is doctrinal), pure-black `#000000` canvases (Replit's `#0e1525` is intentionally a navy-ink), and any visual move that would read as "consumer SaaS" rather than "developer tool."

**Named influences:**
- IBM Plex / JetBrains Mono — the two foundries that supply Replit's typographic identity
- Vercel — dark-mode marketing discipline, single saturated brand accent
- Cloud9 / StackBlitz — cloud-IDE visual heritage
- Linear — flat-on-flat depth via surface ladder

## 14. Do's and Don'ts

### Do

- Put dark `#0e1525` text on the cyan CTA — never white. The contrast is what makes the turquoise read as electric.
- Use JetBrains Mono everywhere code or label appears — it's a brand fingerprint, not a placeholder.
- Anchor sections on faux-IDE screenshots — the "you're looking at a real editor" illusion is core.
- Use the surface ladder (`#0b1120` / `#0e1525` / `#1c2333` / `#2b3245`) for depth instead of shadow.
- Apply the cyan glow ring only to the primary CTA hover — never to other interactive elements.
- Keep button radius at 8px and card radius at 12px — IDE-rectangular, not SaaS-pillowy.
- Use mono labels at 12px / `0.04em` tracking for status tags and section eyebrows.
- Enable JetBrains Mono ligatures — `=>`, `!=`, `>=` ligatures are intentional brand cues.
- Cap reading width around 720px on body text despite the dense layout — readability remains primary.
- Use weight 600 for display headlines — the bulletin-confident voice is the brand.

### Don't

- Don't mix the secondary accents (orange / pink / purple) into the main CTA. Cyan owns the action layer.
- Don't lift cards with shadows; depth is the surface ladder plus a hairline.
- Don't drift into pure black `#000000` — Replit's `#0e1525` is intentionally a navy-ink.
- Don't use white text on the cyan CTA — the dark-text-on-cyan contrast is doctrinal.
- Don't introduce a serif typeface anywhere — sans + mono is the entire system.
- Don't pill-shape CTAs — the shape vocabulary is rectangular like an editor.
- Don't apply gradients to backgrounds — flat ink is the canvas.
- Don't soften display tracking — `-0.025em` at 72px is the bulletin signature.
- Don't use the cyan glow on every hover — its scarcity is what makes it land.
- Don't strip JetBrains Mono ligatures — disabling them removes a brand cue.

## 15. Agent Prompt Guide

### Quick Color Reference

- Canvas: Ink `#0e1525`
- Surface: `#1c2333` (card), `#2b3245` (hover), `#0b1120` (deeper)
- Text: `#ffffff` strong, `#f5f9fc` body, `#9aa6b8` muted
- Brand: Cyan `#1fe0ea` (with `#0e1525` text on it)
- Brand Hover: `#3deef7`
- Accent Orange: `#ff8a3d` (community)
- Accent Purple: `#9b6bff` (AI)
- Border: `#ffffff14` (8% white), `#ffffff24` (14% white)
- Success: `#22c55e`

### Example Component Prompts

- "Create a hero section on `#0e1525` background. Headline at 72px Replit Sans weight 600, line-height 1.05, letter-spacing -0.025em, colour `#ffffff`. Subtitle at 19px weight 400, line-height 1.55, colour `#f5f9fc`. Primary cyan CTA: `#1fe0ea` background, `#0e1525` text (NEVER white), 8px radius, 12px 20px padding, 15px Replit Sans weight 600. Outlined secondary: transparent, `#ffffff` text, 1px solid `#ffffff24`, 8px radius."
- "Design a faux-IDE hero illustration: `#0b1120` background, 12px radius, 1px solid `#ffffff24` border. Top chrome with three macOS dots (red `#ef4444`, yellow `#ffd84a`, green `#22c55e`) at top-left, tab strip with file label in JetBrains Mono 12px / 500. Inside: JetBrains Mono 14px / 400 syntax-highlighted code, line numbers in `#4a5366`, cursor caret in `#1fe0ea`. Shadow: `0 16px 40px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.25)`."
- "Build a status badge: `#ffffff14` background, `#ffffff` text, 9999px radius, 4px 10px padding, JetBrains Mono 12px / 500. Cyan dot indicator (`#1fe0ea`, 6px) for NEW; orange (`#ff8a3d`) for BETA; purple (`#9b6bff`) for AI."
- "Create navigation: `#0e1525` background, no blur, no separate fill. White wordmark left, links in Replit Sans 14px / 500 / `#f5f9fc`. Right-pinned cyan CTA `Try Replit`: `#1fe0ea` bg, `#0e1525` text, 8px radius."
- "Design a dense feature card: `#1c2333` background, 1px solid `#ffffff14` border, 12px radius, 24px padding. Title in Replit Sans 22px / 600, colour `#ffffff`. Body in Replit Sans 17px / 400, colour `#9aa6b8`. Mono eyebrow above title in JetBrains Mono 11px / 500 / `0.08em` uppercase, colour `#1fe0ea`."
- "Build a terminal pane: `#0b1120` background, 8px radius, 1px solid `#ffffff14`. Inside: JetBrains Mono 14px / 400, green prompt `$` in `#22c55e`, command in `#ffffff`, cyan output for highlighted commands in `#1fe0ea`."

### Iteration Guide

1. If the page reads "consumer SaaS" rather than "developer tool," remove pillowy radii (drop 16px → 12px → 8px) and add a faux-IDE screenshot.
2. If the cyan looks weak, check the canvas — it must be `#0e1525` (navy-ink), not `#000000`. The cyan reads warmer against navy.
3. The dark-text-on-cyan rule is doctrinal; if the CTA reads cold, you've put white text on cyan. Flip it.
4. Body line-length should cap around 720px even on a 1280px container — readability is still primary.
5. JetBrains Mono ligatures (`=>`, `!=`, `>=`) must be enabled in font-feature-settings.
6. Status badges and eyebrows belong in JetBrains Mono, never sans — the typographic split is the labelling system.
7. Resist using shadows for depth — the surface ladder (`#0b1120` → `#0e1525` → `#1c2333` → `#2b3245`) plus a `#ffffff14` hairline is the pattern.
8. The cyan glow ring is scarce — apply only to the primary CTA hover. Spreading it dilutes the cue.
