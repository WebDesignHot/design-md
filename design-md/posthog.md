---
name: PostHog
tagline: Cream-canvas analytics with mustard-yellow CTAs and IBM Plex — open-source craft, not SaaS gloss.
updated_at: 2026-05-06T01:20:47+12:00
published_at: 2026-05-03T10:27:49+12:00
author: webdesignhot
source_url: https://posthog.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [light, warm, playful, sans, mono, dense]
preview_swatch: ['#eeefe9', '#cd8407', '#23251d']
related: [supabase, vercel, plain]
description: 'PostHog is a cream-canvas, IBM-Plex-set, mustard-yellow-accented analytics product that reads like a craft-software page rather than a SaaS landing. The off-white `#eeefe9` ground, hand-drawn hedgehog mascot, Plex-Sans-on-paper feel, and partial-radius (`6px 6px 0 0`) attached panels make it the most distinctive page in the analytics category.'

colors:
  bg: '#eeefe9'                  # cream/paper canvas — defining warm ground
  bg-deep: '#e6e7df'             # slightly deeper cream for nested sections
  bg-cooler: '#f5f6ef'           # lighter cream for hero panel ground
  surface: '#ffffff'              # pure white card surface
  surface-warm: '#faf9f3'        # warmer card variant
  surface-alt: '#d2d3cc'         # warmer gray for secondary buttons / chips
  surface-dark: '#1d1f17'        # dark band for night-mode mid-page panels
  text: '#23251d'                # near-black with green undertone (matches cream)
  text-muted: '#4d4f46'          # captions, button text, metadata
  text-soft: '#6e7065'           # tertiary
  text-faint: '#a8aaa1'          # disabled, faint
  text-on-dark: '#eeefe9'        # cream on dark band sections
  text-on-brand: '#23251d'       # near-black on yellow CTA — high contrast
  brand: '#cd8407'               # mustard-yellow primary CTA
  brand-hover: '#eb9d2a'         # saturated yellow for hover
  brand-active: '#a36a05'        # pressed yellow
  brand-deep: '#7d5104'          # deepest mustard
  brand-warm: '#f35454'          # coral secondary action — "Debug & fix issues"
  brand-warm-hover: '#ff7575'    # lighter coral
  brand-warm-deep: '#c43838'     # deeper coral
  brand-blue: '#1d4aff'          # PostHog signature blue (used in product UI, occasional CTA)
  brand-blue-hover: '#2754ff'
  brand-blue-deep: '#0d2ec4'
  accent-mint: '#76eaa3'         # mint accent — toolkit / SDK badges
  accent-purple: '#9d4cf2'       # purple accent — premium / featured
  border: 'rgba(35,37,29,0.12)'  # low-contrast, tinted to match canvas
  border-soft: 'rgba(35,37,29,0.06)' # softer hairline
  border-strong: 'rgba(35,37,29,0.24)' # hover/focus
  border-dark: 'rgba(255,255,255,0.10)' # on dark band sections
  shadow-card: 'rgba(35,37,29,0.06)' # rare, subtle
  shadow-elev: 'rgba(35,37,29,0.10)' # rare elevation
  on-brand: '#23251d'            # near-black ink on yellow
  semantic-success: '#76eaa3'
  semantic-warning: '#cd8407'
  semantic-danger: '#f35454'
  semantic-info: '#1d4aff'

typography:
  display:
    family: '"IBM Plex Sans Variable", "IBM Plex Sans", -apple-system, system-ui, sans-serif'
    weights: [400, 600, 700, 800]
    opentype: ['kern', 'liga', 'ss01']
  body:
    family: '"IBM Plex Sans Variable", "IBM Plex Sans", -apple-system, system-ui, sans-serif'
    weights: [400, 500, 600]
    opentype: ['kern', 'liga']
  mono:
    family: '"Source Code Pro", Menlo, Consolas, monaco, monospace'
    weights: [400, 500, 600]
    opentype: ['kern', 'tnum', 'zero']
  scale:
    display-hero:    { size: 88, weight: 800, lineHeight: 1.0, tracking: '-0.03em', family: display, opentype: 'kern, ss01' }
    display-large:   { size: 72, weight: 800, lineHeight: 1.05, tracking: '-0.025em', family: display, opentype: 'kern, ss01' }
    h1:              { size: 60, weight: 800, lineHeight: 1.1, tracking: '-0.025em', family: display, opentype: 'kern, ss01' }
    h2:              { size: 44, weight: 700, lineHeight: 1.15, tracking: '-0.02em', family: display, opentype: 'kern, ss01' }
    h3:              { size: 32, weight: 700, lineHeight: 1.2, tracking: '-0.015em', family: display, opentype: 'kern, ss01' }
    h4:              { size: 22, weight: 600, lineHeight: 1.3, tracking: '-0.01em', family: display, opentype: 'kern, ss01' }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, tracking: '0', family: body, opentype: 'kern, liga' }
    body:            { size: 16, weight: 400, lineHeight: 1.5, tracking: '0', family: body, opentype: 'kern, liga' }
    body-small:      { size: 14, weight: 400, lineHeight: 1.5, tracking: '0', family: body, opentype: 'kern, liga' }
    button:          { size: 15, weight: 600, lineHeight: 1.0, tracking: '0', family: body }
    button-large:    { size: 16, weight: 600, lineHeight: 1.0, tracking: '0', family: body }
    nav-link:        { size: 15, weight: 500, lineHeight: 1.4, tracking: '0', family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.3, tracking: '0.02em', family: body, transform: 'uppercase' }
    label-mono:      { size: 11, weight: 500, lineHeight: 1.3, tracking: '0.04em', family: mono, transform: 'uppercase' }
    caption:         { size: 13, weight: 400, lineHeight: 1.4, tracking: '0', family: body }
    micro:           { size: 11, weight: 500, lineHeight: 1.3, tracking: '0.02em', family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.55, tracking: '0', family: mono, opentype: 'tnum, zero' }
    code-bold:       { size: 14, weight: 600, lineHeight: 1.55, tracking: '0', family: mono }

radius:
  none: 0
  micro: 2
  xs: 4
  sm: 6                          # primary button + most cards
  md: 8                          # larger panels
  lg: 12
  xl: 16
  pill: 9999
  partial-top: '6 6 0 0'         # tabbed panel attachment — top corners only
  partial-bot: '0 0 6 6'         # tabbed panel — bottom corners only

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
  scale: [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 96, 128, 160]

layout:
  page-width: 1200
  prose-width: 720
  header-height: 60
  hero-height: 660
  grid-gap: 24

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-entrance: 'cubic-bezier(0, 0, 0.2, 1)'
  ease-bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 320
  duration-mascot: 4000          # hedgehog mascot bounce cycle
  reduced-motion: 'respects prefers-reduced-motion: reduce — mascot animations freeze; transforms collapse to opacity'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(35,37,29,0.04) 0 1px 2px'
  standard: 'rgba(35,37,29,0.06) 0 2px 6px'
  elevated: 'rgba(35,37,29,0.10) 0 8px 24px'
  deep: 'rgba(35,37,29,0.16) 0 16px 40px'
  ring: '0 0 0 3px rgba(205,132,7,0.30)'
  ring-blue: '0 0 0 3px rgba(29,74,255,0.30)'

accessibility:
  contrast-text-on-bg: 12.4              # #23251d on #eeefe9 — AAA
  contrast-text-on-brand: 6.7            # #23251d on #cd8407 — AAA
  contrast-text-on-warm: 5.2             # #23251d on #f35454 — AA at body, AAA at large
  contrast-muted-on-bg: 7.0              # #4d4f46 on #eeefe9 — AAA at body
  focus-ring: '3px solid rgba(205,132,7,0.30) — soft yellow halo'
  reduced-motion-honored: true
  keyboard-nav: 'tab order follows visual; skip-link present; tabbed panels arrow-keys'

components:
  button-primary:
    background: '#cd8407'
    text: '#23251d'
    radius: 6
    padding: '10px 18px'
    height: 42
    font: button
    border: '1px solid #a36a05'
    hover: 'background #eb9d2a'
    active: 'background #a36a05'
    use: 'primary CTA — Get Started, mustard-yellow with subtle 1px border'
  button-warm:
    background: '#f35454'
    text: '#23251d'
    radius: 6
    padding: '10px 18px'
    height: 42
    font: button
    border: '1px solid #c43838'
    hover: 'background #ff7575'
    use: 'secondary CTA — Debug & fix issues, coral'
  button-blue:
    background: '#1d4aff'
    text: '#ffffff'
    radius: 6
    padding: '10px 18px'
    height: 42
    font: button
    hover: 'background #2754ff'
    use: 'tertiary CTA — Watch Demo / Talk to Sales (PostHog brand blue)'
  button-secondary:
    background: '#d2d3cc'
    text: '#23251d'
    radius: 6
    padding: '10px 18px'
    height: 42
    font: button
    border: '1px solid rgba(35,37,29,0.12)'
    hover: 'background #c5c6bf'
    use: 'tertiary action — Sign In / Read Docs, warm grey'
  button-ghost:
    background: 'transparent'
    text: '#23251d'
    radius: 6
    padding: '8px 14px'
    font: button
    hover: 'background rgba(35,37,29,0.06)'
    use: 'inline ghost CTA / nav button'
  card-feature:
    background: '#ffffff'
    text: '#23251d'
    border: '1px solid rgba(35,37,29,0.12)'
    radius: 6
    padding: '32px'
    use: 'feature card — flat white on cream'
  card-tabbed-panel:
    background: '#ffffff'
    text: '#23251d'
    border: '1px solid rgba(35,37,29,0.12)'
    radius: '6 6 0 0'
    padding: '32px'
    use: 'tabbed panel attached to body below — partial radius signals attachment'
  card-tabbed-body:
    background: '#ffffff'
    text: '#23251d'
    border: '1px solid rgba(35,37,29,0.12)'
    radius: '0 0 6 6'
    padding: '32px'
    use: 'panel body below tabbed header — completes the seam'
  card-pricing:
    background: '#ffffff'
    text: '#23251d'
    border: '1px solid rgba(35,37,29,0.12)'
    radius: 8
    padding: '40px'
    use: 'pricing tier card — slightly larger radius for prominence'
  card-dark:
    background: '#1d1f17'
    text: '#eeefe9'
    border: '1px solid rgba(255,255,255,0.10)'
    radius: 6
    padding: '32px'
    use: 'dark band feature card — night-mode contrast'
  input:
    background: '#ffffff'
    text: '#23251d'
    border: '1px solid rgba(35,37,29,0.24)'
    radius: 6
    padding: '10px 14px'
    height: 42
    font: body
    focus: 'border #cd8407; ring 0 0 0 3px rgba(205,132,7,0.30)'
    use: 'email / form input'
  code-chip:
    background: '#ffffff'
    text: '#23251d'
    border: '1px solid rgba(35,37,29,0.12)'
    radius: 6
    padding: '8px 14px'
    font: code
    use: 'install command chip — npx @posthog/wizard, white on cream'
  code-block-dark:
    background: '#1d1f17'
    text: '#eeefe9'
    radius: 6
    padding: '20px'
    font: code
    use: 'multi-line code block — dark-on-cream contrast'
  badge-pill:
    background: '#cd8407'
    text: '#23251d'
    radius: 9999
    padding: '4px 12px'
    font: micro
    use: 'NEW / category badge — mustard pill'
  badge-mint:
    background: 'rgba(118,234,163,0.20)'
    text: '#1d4f2e'
    border: '1px solid rgba(118,234,163,0.40)'
    radius: 9999
    padding: '4px 12px'
    font: micro
    use: 'SDK / toolkit badge — mint tint'
  nav-link:
    background: 'transparent'
    text: '#23251d'
    font: nav-link
    padding: '8px 14px'
    hover: 'background rgba(35,37,29,0.06)'
    use: 'top nav menu — Products / Pricing / Docs / Community'
  hedgehog-mascot:
    background: 'transparent'
    use: 'hand-drawn hedgehog illustration — recurs throughout, anchors craft-software register'

dark-mode: optional

lineage:
  summary: |
    PostHog is a developer analytics product that has resisted the entire
    aesthetic vocabulary of its category. The competitor surface
    (Mixpanel, Amplitude, Heap) is universally white-and-blue, sans-serif,
    and chart-forward; PostHog ships a cream `#eeefe9` canvas, **IBM Plex
    Sans Variable** at heavy weights (800 for h1), and a mustard-yellow
    `#cd8407` primary action that doubles down to coral `#f35454` for
    secondary "Debug & fix issues" buttons. The signature `#1d4aff`
    PostHog blue surfaces in tertiary CTAs and product UI screenshots.
    The entire page reads more like an Itch.io game page than a SaaS
    analytics landing — and that is the product strategy. PostHog's
    open-source-first identity demands a visual register that the
    closed-source incumbents can't copy. IBM Plex Sans is the obvious
    type choice for that posture: an open-source, Apache-licensed
    family commissioned by IBM, used widely in the open-source design
    world. Mono is **Source Code Pro** — Adobe's open-source mono —
    completing a fully OFL/Apache type stack. The CTAs use a soft `6px`
    radius with a subtle 1px darker border (no shadow); cards have flat
    borders; the page texture is paper rather than glass. The
    distinctive **partial-radius** trick — `6px 6px 0 0` on a tabbed
    header attached to a `0 0 6 6` body — signals tight information
    density without a seam between attached panels. Combined with the
    hand-drawn hedgehog mascot energy and the explicit
    `npx @posthog/wizard` install command rendered in monospace, PostHog
    has built a brand that recruits the exact developer audience that
    distrusts venture-backed SaaS gloss.
  influences:
    - name: 'IBM Plex Sans (designed by Mike Abbink)'
      role: 'Open-source IBM type family — the open-source-craft posture; Apache licensed; used widely in open-source design'
      url: 'https://www.ibm.com/plex/'
    - name: 'Source Code Pro (Adobe)'
      role: 'Open-source mono cousin — completes the OFL/Apache type stack'
      url: 'https://github.com/adobe-fonts/source-code-pro'
    - name: 'Itch.io / indie game pages'
      role: 'Cream-paper canvas + handcrafted mascot register; rejects SaaS gloss'
      url: 'https://itch.io'
    - name: 'Supabase'
      role: 'Adjacent open-source dev-tool; both treat their open-source identity as the design brief'
      url: 'https://supabase.com'
    - name: 'PostHog''s open-source ethos'
      role: 'The mustard-yellow + coral + cream palette mirrors the brand''s playful, hacker-friendly product personality'
      url: 'https://posthog.com/handbook'
---

## 1. Visual Theme & Atmosphere

PostHog runs a cream-paper canvas (`#eeefe9` — closer to newsprint than to white) in a category dominated by stark blue-and-white SaaS landings. The display family is **IBM Plex Sans Variable** at weight `800` for the h1, with a mustard-yellow `#cd8407` button as the primary CTA. A coral `#f35454` button anchors a secondary "Debug & fix issues" panel — two warm hues sharing the page rather than a single brand chroma. The hedgehog mascot energy and the `npx @posthog/wizard` install chip in monospace make the page feel like an open-source README dressed up for marketing.

What makes it distinctive: every analytics competitor reaches for trust signals — clean white surfaces, blue accents, dense product screenshots. PostHog reaches for *charm* — paper canvas, warm CTAs, heavy Plex Sans, hand-drawn hedgehogs. The product itself is sophisticated; the visual register insists it's also approachable, hackable, and on the developer's side.

Below the hero, the page is unusually information-dense for a top-of-funnel page. Cards stack horizontally and vertically; the install-wizard panel sits next to a "Debug & fix issues" panel; pricing chips, feature panels, and code samples interleave. The density is deliberate — PostHog wants the developer to scan the entire product surface from a single page, the way an Itch.io game page or a GitHub README presents everything at once. Section padding is moderate (64–96px) — never lavish.

The section-rhythm trick is the **partial-radius attached panel**. A tabbed header (`Use cases` / `Industries` / `Roles`) renders with `radius: 6 6 0 0` and attaches seamlessly to a body panel at `radius: 0 0 6 6`. The 1px border crosses the seam without a break — the two panels read as a single tabbed surface. That partial-radius trick recurs throughout PostHog's UI and is one of the brand's most quoted design moves.

Mid-page, the canvas occasionally inverts to a dark band (`#1d1f17`) for emphasis sections — a deliberate "night mode panel" that breaks the cream rhythm. The dark bands carry cream text (`#eeefe9`) and the same 6px radius cards, just inverted. The light/dark/light alternation is the page's rhythm device.

The hand-drawn hedgehog mascot recurs throughout — pointing at things, riding rockets, holding tools. It's the brand's commitment to "we're not corporate" rendered in pen strokes. Combined with the warm mustard CTA and the cream paper, it's the visual equivalent of a hand-letterpressed Linux distribution: open-source craft, technical chops, no SaaS gloss.

**Key Characteristics:**
- Cream paper canvas `#eeefe9` — the page's defining warm ground.
- IBM Plex Sans Variable at weight 800 for h1 — heavy, mechanical, open-source.
- Mustard-yellow `#cd8407` primary CTA + coral `#f35454` secondary — two warm hues sharing the page.
- PostHog brand blue `#1d4aff` for tertiary CTAs and product UI.
- 6px radius default, with partial-radius `6 6 0 0` for tabbed panel attachment.
- Source Code Pro mono for install commands and code.
- Hand-drawn hedgehog mascot recurring throughout.
- Dark band sections (`#1d1f17`) breaking the cream rhythm.
- Flat borders, no drop shadows on most chrome.
- Open-source/Apache/OFL type stack — license is part of the brand.

## 2. Color Palette & Roles

### Primary

- **Background** (`#eeefe9`): cream/paper canvas — the page's defining warm ground. Closer to newsprint than white. Has a green-yellow undertone.
- **Text** (`#23251d`): near-black with green undertone — matches the cream undertone, never pure black.
- **Brand** (`#cd8407`): mustard-yellow primary CTA — the page's signature saturated hue.

### Brand & Dark

Mustard yellow as the primary brand spectrum:

- **Brand** (`#cd8407`): primary CTA fill.
- **Brand Hover** (`#eb9d2a`): saturated yellow on hover.
- **Brand Active** (`#a36a05`): pressed.
- **Brand Deep** (`#7d5104`): deepest mustard, used for borders.

Coral as the secondary brand:

- **Brand Warm** (`#f35454`): coral secondary action — "Debug & fix issues" CTA.
- **Brand Warm Hover** (`#ff7575`): lighter coral.
- **Brand Warm Deep** (`#c43838`): pressed coral, used for borders.

PostHog brand blue (used in product UI and tertiary CTAs):

- **Brand Blue** (`#1d4aff`): the signature PostHog product blue.
- **Brand Blue Hover** (`#2754ff`).
- **Brand Blue Deep** (`#0d2ec4`).

Dark band ground:

- **Surface Dark** (`#1d1f17`): mid-page dark band sections — cream-text-on-dark register.

### Accent

- **Mint** (`#76eaa3`): toolkit / SDK feature badges.
- **Purple** (`#9d4cf2`): premium / featured badges (rare).

### Interactive

- **Brand** (`#cd8407`): primary CTA.
- **Brand Warm** (`#f35454`): secondary CTA.
- **Brand Blue** (`#1d4aff`): tertiary CTA + inline link.
- **Focus Ring** (`0 0 0 3px rgba(205,132,7,0.30)`): soft yellow halo, 3px wide.

### Neutral Scale

- **Text** (`#23251d`): primary copy, near-black with green undertone.
- **Text Muted** (`#4d4f46`): captions, button text, metadata.
- **Text Soft** (`#6e7065`): tertiary copy.
- **Text Faint** (`#a8aaa1`): disabled, faintest.
- **Text on Dark** (`#eeefe9`): cream text on dark band sections.
- **On Brand** (`#23251d`): near-black ink on yellow CTA — high contrast.

### Surface & Borders

- **Surface** (`#ffffff`): pure white card surface — used inside cards over cream.
- **Surface Warm** (`#faf9f3`): warmer card variant.
- **Surface Alt** (`#d2d3cc`): warmer gray for secondary buttons / chips.
- **BG Deep** (`#e6e7df`): slightly deeper cream for nested sections.
- **BG Cooler** (`#f5f6ef`): lighter cream for hero panel ground (vs. canvas).
- **Border** (`rgba(35,37,29,0.12)`): low-contrast hairline, tinted to match canvas.
- **Border Soft** (`rgba(35,37,29,0.06)`): softer divider.
- **Border Strong** (`rgba(35,37,29,0.24)`): hover/focus outline.
- **Border Dark** (`rgba(255,255,255,0.10)`): on dark band sections.

### Shadow Colors

PostHog uses shadows sparingly — most chrome is flat with hairline borders:

- **Ambient** (`rgba(35,37,29,0.04) 0 1px 2px`): rare faint lift.
- **Standard** (`rgba(35,37,29,0.06) 0 2px 6px`): subtle card shadow.
- **Elevated** (`rgba(35,37,29,0.10) 0 8px 24px`): pricing card / modal.
- **Deep** (`rgba(35,37,29,0.16) 0 16px 40px`): rare, modal backdrop.

The shadow color is tinted with the page's near-black green undertone (`#23251d`) — never pure black — so shadows blend into the warm canvas.

### Semantic

- **Success** (`#76eaa3`): mint, also used as accent.
- **Warning** (`#cd8407`): mustard, dual-duty with brand.
- **Danger** (`#f35454`): coral, dual-duty with brand-warm.
- **Info** (`#1d4aff`): brand blue, dual-duty.

## 3. Typography Rules

### Font Family

- **Display + Body:** `"IBM Plex Sans Variable", "IBM Plex Sans", -apple-system, system-ui, sans-serif`. IBM's open-source corporate family, Apache-licensed. The variable cut handles weight 100–800 fluidly; PostHog uses 400/500/600/700/800. The signature is **800 weight at large size** — heavier than most SaaS displays.
- **Mono:** `"Source Code Pro", Menlo, Consolas, monaco, monospace`. Adobe's open-source mono — completes the OFL/Apache type stack.
- **OpenType:** `kern`, `liga` standard. **`ss01` stylistic set** enabled on display tier — Plex's slightly more rounded `a` and `g` (the alternate forms ship friendlier than the default geometric).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | IBM Plex Sans | 88 | 800 | 1.0 | -0.03em | kern, ss01 | Largest hero (rare) |
| display-large | IBM Plex Sans | 72 | 800 | 1.05 | -0.025em | kern, ss01 | Section hero |
| h1 | IBM Plex Sans | 60 | 800 | 1.1 | -0.025em | kern, ss01 | Page H1 — heavy display weight |
| h2 | IBM Plex Sans | 44 | 700 | 1.15 | -0.02em | kern, ss01 | Section heads |
| h3 | IBM Plex Sans | 32 | 700 | 1.2 | -0.015em | kern, ss01 | Sub-section heads |
| h4 | IBM Plex Sans | 22 | 600 | 1.3 | -0.01em | kern, ss01 | Card titles |
| body-large | IBM Plex Sans | 18 | 400 | 1.55 | 0 | kern, liga | Hero deck |
| body | IBM Plex Sans | 16 | 400 | 1.5 | 0 | kern, liga | Default body |
| body-small | IBM Plex Sans | 14 | 400 | 1.5 | 0 | kern, liga | Footer body |
| button | IBM Plex Sans | 15 | 600 | 1.0 | 0 | kern | CTA label |
| button-large | IBM Plex Sans | 16 | 600 | 1.0 | 0 | kern | Primary CTA |
| nav-link | IBM Plex Sans | 15 | 500 | 1.4 | 0 | kern | Top nav |
| label | IBM Plex Sans | 13 | 500 | 1.3 | 0.02em | kern, uppercase | Section eyebrow |
| label-mono | Source Code Pro | 11 | 500 | 1.3 | 0.04em | tnum, uppercase | Mono UPPERCASE label |
| caption | IBM Plex Sans | 13 | 400 | 1.4 | 0 | kern | Caption |
| micro | IBM Plex Sans | 11 | 500 | 1.3 | 0.02em | kern | Pill / badge text |
| code | Source Code Pro | 14 | 400 | 1.55 | 0 | tnum, zero | Inline code chip |
| code-bold | Source Code Pro | 14 | 600 | 1.55 | 0 | tnum, zero | Code emphasis |

### Principles

- **Heavy display weights.** Plex at 800 for h1 is the brand fingerprint. Lighter sans (Inter, Söhne) at the same size wouldn't read as "open-source craft." The weight is voice.
- **Tight tracking on display.** `-0.025em` to `-0.03em` at display tier. Plex's metrics are wider than Inter's; the negative tracking compensates.
- **`ss01` stylistic set on display.** Plex's alternate `a` and `g` are slightly friendlier (more rounded counters) than the default geometric forms — better suited to PostHog's playful register.
- **Single-family discipline (almost).** Plex carries display, body, button, label, caption. Source Code Pro only enters for code.
- **Open-source license is part of the brand.** Plex (Apache 2.0) + Source Code Pro (OFL) is a fully open-source/free type stack. Closed commercial faces would betray the brand posture.
- **Sentence case throughout.** Headlines, body, captions all sentence case. UPPERCASE only for 13px section eyebrow and mono label.
- **Slashed zero in mono.** Source Code Pro's `zero` feature is on by default — distinguishes 0 from O in install commands.
- **Body weight ceiling at 500.** Body tier never goes above 500 except for emphasis spans. The display tier owns 700–800.

## 4. Component Stylings

### Buttons

**Primary (Mustard-Yellow)**
- Background: `#cd8407`
- Text: `#23251d`
- Padding: `10px 18px`, height 42
- Radius: 6
- Border: `1px solid #a36a05` — subtle darker mustard border (the signature trim)
- Font: button (Plex 15 / 600)
- Hover: background `#eb9d2a`
- Active: background `#a36a05`
- Use: hero CTA — Get Started, Try PostHog Free.

**Secondary (Coral)**
- Background: `#f35454`
- Text: `#23251d`
- Padding: `10px 18px`, height 42
- Radius: 6
- Border: `1px solid #c43838`
- Hover: background `#ff7575`
- Use: "Debug & fix issues" — paired with primary on hero, shares the warm-spectrum register.

**Tertiary (PostHog Blue)**
- Background: `#1d4aff`
- Text: `#ffffff`
- Padding: `10px 18px`, height 42
- Radius: 6
- Hover: `#2754ff`
- Use: Watch Demo / Talk to Sales / external blue CTAs (matches in-product brand blue).

**Quaternary (Warm Grey)**
- Background: `#d2d3cc`
- Text: `#23251d`
- Padding: `10px 18px`, height 42
- Radius: 6
- Border: `1px solid rgba(35,37,29,0.12)`
- Use: Sign In / Read Docs — neutral-warm secondary.

**Ghost**
- Background: transparent
- Text: `#23251d`
- Padding: `8px 14px`
- Radius: 6
- Hover: `rgba(35,37,29,0.06)` background
- Use: nav button, inline ghost.

### Cards

**Feature Card**
- Background: `#ffffff`
- Border: `1px solid rgba(35,37,29,0.12)`
- Radius: 6
- Padding: 32
- No shadow — flat
- Use: feature card on cream canvas.

**Tabbed Panel (Header)**
- Background: `#ffffff`
- Border: `1px solid rgba(35,37,29,0.12)`
- Radius: `6 6 0 0` — top corners only
- Padding: 32
- Use: tabbed header attached to body below — partial radius signals the seam.

**Tabbed Panel (Body)**
- Background: `#ffffff`
- Border: `1px solid rgba(35,37,29,0.12)` (top border merges with header bottom)
- Radius: `0 0 6 6` — bottom corners only
- Padding: 32
- Use: panel body below the tabbed header. The pair is the signature primitive.

**Pricing Card**
- Background: `#ffffff`
- Border: `1px solid rgba(35,37,29,0.12)`
- Radius: 8 (slightly larger than 6 default — for prominence)
- Padding: 40
- Subtle shadow `rgba(35,37,29,0.06) 0 2px 6px`
- Use: pricing tier card.

**Dark Band Card**
- Background: `#1d1f17`
- Text: `#eeefe9`
- Border: `1px solid rgba(255,255,255,0.10)`
- Radius: 6
- Padding: 32
- Use: feature card inside dark band sections.

### Code Chips

**Install Command Chip**
- Background: `#ffffff`
- Text: `#23251d`
- Border: `1px solid rgba(35,37,29,0.12)`
- Radius: 6
- Padding: `8px 14px`
- Font: code (Source Code Pro 14 / 400)
- Use: `npx @posthog/wizard` install chip — white-on-cream contrast.

**Code Block (Dark)**
- Background: `#1d1f17`
- Text: `#eeefe9`
- Radius: 6
- Padding: 20
- Font: code
- Use: multi-line code samples — dark for emphasis even on cream canvas.

### Inputs / Forms

**Input**
- Background: `#ffffff`
- Border: `1px solid rgba(35,37,29,0.24)`
- Radius: 6
- Padding: `10px 14px`, height 42
- Focus: border `#cd8407` + ring `0 0 0 3px rgba(205,132,7,0.30)` soft yellow halo
- Use: email signup, contact form.

### Badges

**Mustard Pill**
- Background: `#cd8407`
- Text: `#23251d`
- Radius: 9999, Padding: `4px 12px`
- Font: micro (11/500)
- Use: NEW / category badges.

**Mint Pill (SDK / Toolkit)**
- Background: `rgba(118,234,163,0.20)`
- Text: `#1d4f2e`
- Border: `1px solid rgba(118,234,163,0.40)`
- Radius: 9999
- Use: SDK / toolkit / availability badges.

### Navigation

Top nav 60px tall, `#eeefe9` background (matches canvas) with `1px solid rgba(35,37,29,0.06)` border-bottom on scroll. Links: Plex 15/500 `#23251d`, hover `rgba(35,37,29,0.06)` background. Right side: Sign In (ghost) + primary CTA.

### Hedgehog Mascot

Recurring hand-drawn illustrations of PostHog's hedgehog mascot — pointing at things, riding rockets, holding tools, sleeping next to error logs. Each illustration is a custom SVG, ~80–200px wide depending on placement. The mascot anchors the open-source-craft register and is the brand's primary anti-corporate signal.

## 5. Layout Principles

### Spacing System

Base 4px. Scale: 4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 96 / 128 / 160. Section gaps 64–96px (moderate, not lavish); inside-card padding 32–40; nav padding `8px 14px`; grid gap 24.

PostHog's density is information-dense — the page packs more content per viewport than Apple, Linear, or even Stripe. The pacing is closer to a GitHub README or an Itch.io game page: scan everything from one scroll session.

### Grid & Container

- **Page width:** 1200px max.
- **Prose width:** 720px (intro paragraphs and FAQ answers).
- **Header height:** 60px.
- **Hero height:** ~660px.
- **Grid gap:** 24px between feature cards.

The hero is left-aligned (rare for product analytics — Mixpanel et al. center). Below the hero, multi-column dense product surface — feature panels stack horizontally and vertically. The install-wizard panel sits next to a "Debug & fix issues" panel; pricing chips, feature panels, and code samples interleave on the same row.

### Whitespace Philosophy

PostHog's whitespace is **deliberate and economic** — not the lavish breathing room of Apple, not the tight density of Stripe. The page rewards careful reading without demanding scroll-fatigue. Sections have enough air to read clearly; cards have hairline borders rather than shadow-and-padding-heavy isolation.

### Section Cadence

Cream canvas → dark band → cream → cream-deep → cream → footer. The dark band sections (`#1d1f17`) appear 1–2 times per page as emphasis breaks — the inversion is the brand's primary section-rhythm device.

A typical homepage flow:
1. Hero (cream) with hedgehog + install chip — 660px
2. Feature spread (cream) — 700px
3. Dark band emphasis section (`#1d1f17`) — 500px
4. Pricing (cream-deep `#e6e7df`) — 600px
5. Customer testimonials (cream) — 400px
6. Footer (cream-deep)

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| None | 0 | Edge-bound elements |
| Micro | 2 | Decorative pills |
| XS | 4 | Tag chips |
| **SM / Default** | **6** | **Buttons, most cards, code chips, inputs** |
| MD | 8 | Larger panels, pricing cards |
| LG | 12 | Modal corners |
| XL | 16 | Featured banner cards (rare) |
| Pill | 9999 | Status pills, badges |
| **Partial Top** | **`6 6 0 0`** | **Tabbed panel header — signature attached primitive** |
| **Partial Bot** | **`0 0 6 6`** | **Tabbed panel body — completes seam** |

The signature move is the **partial-radius attached panel**: a tabbed header at `6 6 0 0` attached to a body at `0 0 6 6`, with the 1px border crossing the seam. The two panels read as one tabbed surface — the partial radius is what sells the attachment without a visible seam break.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — hairline border only | Most cards, buttons |
| 1 | `0 1px 2px rgba(35,37,29,0.04)` | Rare faint lift |
| 2 | `0 2px 6px rgba(35,37,29,0.06)` | Pricing card |
| 3 | `0 8px 24px rgba(35,37,29,0.10)` | Modal, popover |
| 4 | `0 16px 40px rgba(35,37,29,0.16)` | Modal backdrop |

### Shadow Philosophy

PostHog uses **flat-with-hairline-border depth** as the dominant strategy. Shadows are rare and reserved for true elevation moments (pricing cards, modals). The chrome leans on:

1. **Tinted hairline borders** (`rgba(35,37,29,0.12)`) — every card has one, color-tinted to match the canvas undertone.
2. **Tonal canvas shifts** — `#eeefe9` hero, `#e6e7df` deeper section, `#f5f6ef` lighter hero panel. The 6–10 lightness-unit ladder lets sections differentiate without shadow.
3. **Dark band inversion** (`#1d1f17`) — the most dramatic depth tool, used 1–2 times per page.

The shadow color is always tinted with the page's green-undertone near-black (`#23251d`), never pure black — so any shadows blend into the warm canvas rather than punching through.

## 8. Interaction & Motion ✨

### Easing Curves

- **Standard:** `cubic-bezier(0.4, 0, 0.2, 1)` — default ease-in-out.
- **Emphasized:** `cubic-bezier(0.2, 0, 0, 1)` — modal entrance.
- **Entrance:** `cubic-bezier(0, 0, 0.2, 1)` — content fade-in on scroll.
- **Bounce:** `cubic-bezier(0.34, 1.56, 0.64, 1)` — used sparingly on hedgehog mascot animations.

### Duration Buckets

- **Fast (100ms):** color transitions, button hover.
- **Standard (200ms):** card hover, transitions.
- **Slow (320ms):** hero fade-in.
- **Mascot (4000ms):** hedgehog bounce / wave cycle (slow, idle motion).

### Per-Component Micro-States

- **Button (mustard primary):** background `#cd8407` → `#eb9d2a` on hover, no transform. 100ms.
- **Button (coral secondary):** background `#f35454` → `#ff7575` on hover. 100ms.
- **Button (PostHog blue):** background `#1d4aff` → `#2754ff`. 100ms.
- **Card (feature):** border opacity 0.12 → 0.24 on hover; no transform, no shadow grow. 200ms.
- **Tab pill on tabbed panel:** background flips between `transparent` and `#cd8407` on active state. 200ms.
- **Hedgehog mascot:** continuous slow idle animation — bounce ±4px translateY at 4s ease-bounce infinite alternate, or wave cycle.
- **Link / nav-link:** hover background `rgba(35,37,29,0.06)`. 100ms.

### Page Transitions

- Hero: content fades + 8px translateY rise. 320ms ease-entrance.
- Below-fold sections: fade + 6px translateY on scroll-into-viewport. 240ms.
- Dark band sections: cross-fade with 16px translateY entrance. 400ms.
- Tabbed panel content swap: cross-fade 200ms, no translation.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)`:
- Hedgehog mascot animations freeze at first frame.
- All transforms collapse to opacity-only.
- Bounce easings replaced with standard.
- Hover state color transitions persist (they aid usability).

## 9. Accessibility & A11y ✨

### Contrast Pairs

- **Body text on cream:** `#23251d` on `#eeefe9` → 12.4:1. **AAA at body sizes.**
- **Button text on mustard:** `#23251d` on `#cd8407` → 6.7:1. **AAA at body sizes.**
- **Button text on coral:** `#23251d` on `#f35454` → 5.2:1. **AA at body, AAA at large.**
- **Button text on PostHog blue:** `#ffffff` on `#1d4aff` → 6.4:1. **AAA at body.**
- **Muted text on cream:** `#4d4f46` on `#eeefe9` → 7.0:1. **AAA at body.**
- **Soft text on cream:** `#6e7065` on `#eeefe9` → 4.8:1. **AA at body.**
- **Cream text on dark band:** `#eeefe9` on `#1d1f17` → 13.2:1. **AAA.**
- **Faint text:** `#a8aaa1` on `#eeefe9` → 2.4:1 — fails. Reserve for disabled-only.

### Focus Indicators

`0 0 0 3px rgba(205,132,7,0.30)` — soft yellow halo, 3px wide. The yellow ring matches the brand mustard and is recognizable as PostHog's focus state. Form fields use the same halo. Inputs that take blue-blue actions (e.g., Watch Demo) use `0 0 0 3px rgba(29,74,255,0.30)`.

### ARIA Pattern Recommendations

- **Top nav:** `<nav aria-label="Primary">` with skip-link.
- **Tabbed panel:** `role="tablist"` on the tab strip, `role="tab"` per tab, `role="tabpanel"` on the body. `aria-selected="true"` and `aria-controls` link tabs to panels.
- **Pricing toggle (monthly/yearly):** `role="group"` + `aria-pressed`.
- **Modal / dialog:** `role="dialog"` + `aria-modal="true"`.
- **Hedgehog mascot:** `aria-hidden="true"` — purely decorative.
- **CTA buttons:** semantic `<button>`/`<a>`, descriptive labels ("Get Started with PostHog" not "Get Started").

### Keyboard Navigation

- Tab order: nav → primary CTA → secondary CTA → page content → footer.
- Skip-link to `#main-content` first focus stop.
- Tabbed panels: arrow keys (left/right) navigate tabs.
- Pricing toggle: arrow keys swap monthly/yearly.
- FAQ accordion: Tab to expand, Enter/Space to toggle, Esc to collapse.

### Screen Reader Hints

- Hedgehog mascot: `aria-hidden="true"`.
- Code chips: rendered in `<code>` so screen readers announce as code.
- Install command: announce literally — `"npx @posthog/wizard"`.
- Dark band sections: no announcement; the visual shift is decorative.

### Reduced Motion

`prefers-reduced-motion: reduce` halts mascot animations and transforms. Hover state color transitions persist.

## 10. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | 0–640px | Single column, hero shrinks to ~520px, mascot reduces to 1 illustration |
| Tablet | 640–1024px | Two-column features, tabbed panels stack |
| Desktop | 1024–1280px | Three-column features, full tabbed panel layout |
| Wide | 1280–1536px+ | 1200px container caps |

### Touch Targets

- Buttons height ≥42px on all breakpoints — exceeds WCAG 2.5.5 44×44 with surrounding hit area.
- Nav links 44px hit area on mobile.
- Tabbed panel tabs 36–40px tall — pad to 44 with surrounding area.

### Collapsing Strategy

- **Hero:** display-hero shrinks 88 → 60 → 44 → 36. Line-height stays 1.0–1.15.
- **Feature grid:** 3-col → 2-col → 1-col. Card padding 32 → 28 → 24.
- **Tabbed panel:** desktop horizontal tabs collapse to vertical accordion at <640px.
- **Hedgehog mascot:** desktop hero shows 2–3 hedgehog illustrations; mobile shows 1.
- **Pricing:** 3-col → vertical stack on mobile, "Most Popular" tier first.

### Image Behavior

- Hedgehog illustrations: SVG, scale fluidly.
- Product UI screenshots: aspect-ratio container, scale to fit card width, lazy-loaded below fold.
- Customer logos: SVG, low opacity hover restores.

### Container Queries

PostHog's tabbed panels are good candidates for `@container` queries — switching between horizontal-tab and vertical-accordion layouts based on container width rather than viewport.

## 11. Content & Voice ✨

### Tone

**Friendly, technical, anti-corporate.** PostHog talks like a fellow developer at a meetup — confident in the technical claims, casual about the marketing, willing to say "we suck at X but here's what we do well." The voice trusts the reader is technical and invites them to inspect the open-source code.

### Microcopy Patterns

- **Headlines:** capability + warmth. "How developers build successful products", "Stop guessing why your users don't convert", "Self-host or run on cloud — your choice."
- **Decks:** specifics over claims. "PostHog combines product analytics, session replay, feature flags, and experiments — all in one open-source platform."
- **CTA verbs:** "Get Started", "Install with one command", "Try free", "Talk to sales", "Read the docs". Always actionable + specific.
- **Error messages** (in-product convention): friendly + recovery. "Looks like your data isn't flowing yet. Run `npx @posthog/wizard` to set up your project."
- **Empty states:** instructional, often with a code suggestion.

### Empty States

In-product: "No events yet. Try installing the PostHog SDK with `npx @posthog/wizard`." The pattern is **friendly + concrete next step** — never just "No data."

### Success Confirmations

- After install: "Welcome! Your first event will appear here once your app is sending data."
- After signup: "Check your email — we sent you a magic link to sign in."
- Toast pattern: icon + short message + optional action button.

### CTA Verb Conventions

The verbs PostHog uses, ranked:
1. **Get Started** (primary conversion)
2. **Try Free** / **Try PostHog Free**
3. **Install with one command**
4. **Read the docs**
5. **Talk to sales** (enterprise tier)
6. **Self-host** / **Run on cloud** (deployment options)
7. **Sign In** (returning users)

What PostHog *doesn't* say: "Sign up now" (too aggressive), "Schedule a demo" (PostHog avoids gated demos), "Click here" (never). The brand voice avoids B2B marketing-speak.

## 12. Dark Mode & Theming ✨

PostHog's marketing site is **light-canvas-first** with **dark band sections** as emphasis. There isn't a full dark-mode token swap on the marketing surface — the cream `#eeefe9` canvas is the brand's defining ground. The in-product app *does* support light/dark mode (`#1d1f17`-class dark canvas with cream-on-dark text), and the dark band sections on marketing preview that aesthetic.

If implementing a full dark variant of the marketing surface, the canonical token swap would be:

```yaml
colors-dark:
  bg: '#1d1f17'                  # the in-product dark canvas
  bg-deep: '#0f1009'              # deepest dark
  bg-cooler: '#252720'            # lifted dark band
  surface: '#252720'              # card on dark
  text: '#eeefe9'                 # cream text on dark
  text-muted: '#a8aaa1'
  brand: '#cd8407'                # mustard stays — high contrast on both
  brand-warm: '#f35454'           # coral stays
  brand-blue: '#1d4aff'           # blue stays
  border: 'rgba(255,255,255,0.10)'
  border-soft: 'rgba(255,255,255,0.06)'
  shadow-card: 'rgba(0,0,0,0.30)'
  on-brand: '#23251d'             # ink stays near-black on yellow
```

Note: mustard, coral, and PostHog blue all remain unchanged across modes — they're high-contrast against both cream and dark canvases. The dark mode is a tonal inversion, not a full chromatic swap.

## 13. Lineage & Influences

PostHog's design lineage is **open-source craft** — a tradition that includes Itch.io's indie game pages, the IBM Plex / Carbon Design System aesthetic, and the GitHub README-as-marketing approach that Supabase, Plain, and other open-source dev-tools have adopted. The design rejects the entire visual vocabulary of closed-source SaaS analytics (Mixpanel, Amplitude, Heap) — those competitors all share white-canvas, blue-accent, chart-forward aesthetics. PostHog goes the opposite direction: cream paper, mustard CTAs, hand-drawn hedgehogs.

The type stack is the brand's most explicit signal: **IBM Plex Sans** (Apache 2.0) + **Source Code Pro** (OFL) is a fully open-source/free pairing. Closed commercial faces (Söhne, Inter Display licensed cuts, custom families) would betray the brand posture. The license is part of the brand.

What PostHog *rejects*: SaaS gloss (gradients, glass, animated charts), white canvas with blue CTAs, single-brand-color discipline, gated demos as primary CTAs, "Schedule a meeting" funnels. The brand chooses to look hackable, approachable, and willing to lose to closed competitors on polish in exchange for trust.

**Influences:**
- **IBM Plex Sans** (Mike Abbink) — open-source IBM type family, Apache licensed (https://www.ibm.com/plex/)
- **Source Code Pro** (Adobe) — open-source mono cousin (https://github.com/adobe-fonts/source-code-pro)
- **Itch.io / indie game pages** — cream canvas + handcrafted mascot register (https://itch.io)
- **Supabase** — adjacent open-source dev-tool with shared aesthetic philosophy (https://supabase.com)
- **PostHog handbook / brand guidelines** — the mustard + coral + cream palette mirrors the brand's playful, hacker-friendly product personality (https://posthog.com/handbook)
- **GitHub README aesthetic** — information-dense, code-forward, paper-canvas register

## 14. Do's and Don'ts

### Do's

- **Do** use a cream/paper canvas (`#eeefe9`-class) instead of pure white if you're targeting the open-source developer audience. The warmth is the differentiator.
- **Do** pair a heavy display weight (800) with a tight tracking (`-0.025em`). IBM Plex earns the bold; lighter sans wouldn't.
- **Do** assign secondary actions a different warm hue (coral `#f35454`) rather than a desaturated gray. PostHog uses two warm CTAs in conversation — mustard and coral.
- **Do** use the partial-radius attached panel pattern (`6 6 0 0` header + `0 0 6 6` body). It's the brand's signature attached-surface trick.
- **Do** include hand-drawn mascot illustrations. The hedgehog's the brand's anti-corporate signal — the page is incomplete without it.
- **Do** ship install commands as code chips with `npx @posthog/wizard` — copy-pastable, mono-rendered, white-on-cream contrast.
- **Do** stick to the open-source type stack (Plex / Source Code Pro). The license is part of the brand.
- **Do** alternate cream → dark band → cream for section rhythm. The dark band (`#1d1f17`) is the primary emphasis device.
- **Do** add a 1px darker-mustard border (`#a36a05`) on the primary yellow CTA. The trim is the signature finish.
- **Do** use PostHog blue (`#1d4aff`) for tertiary CTAs and product UI — but never as primary on marketing.

### Don'ts

- **Don't** retreat to white-canvas + blue-accent because the analytics category does. The category's uniformity is PostHog's opportunity.
- **Don't** add SaaS gloss — gradients, glass morphism, animated charts. Flat cards on cream are the entire elevation language.
- **Don't** drop the open-source type stack (Plex / Source Code Pro) for a closed commercial alternative. The license is part of the brand.
- **Don't** use Helvetica or Arial as Plex fallback. The system fallback chain is `-apple-system, system-ui` — preferred over neutral Helvetica which would dilute Plex's character.
- **Don't** lighten the display weight below 700. The 800/700 heavy-display authority is the brand fingerprint.
- **Don't** introduce a third saturated warm hue. Mustard + coral is the spectrum; adding pink or orange would muddy.
- **Don't** use drop shadows everywhere. PostHog's chrome is flat; shadows are reserved for pricing cards and modals.
- **Don't** schedule-a-demo CTAs as primary. PostHog's brand explicitly prefers self-serve "Try Free" over gated demos.
- **Don't** drop the mascot. The hedgehog is the brand's anti-corporate signal. Without it, the page tilts toward generic dev-tool.
- **Don't** center-align the hero. PostHog's left-aligned hero is part of the GitHub-README register.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg (cream):          #eeefe9
bg-deep:             #e6e7df
surface (white):     #ffffff
surface-dark:        #1d1f17
text:                #23251d
text-muted:          #4d4f46
brand (mustard):     #cd8407
brand-warm (coral):  #f35454
brand-blue:          #1d4aff
border:              rgba(35,37,29,0.12)
on-brand:            #23251d
```

### Example Component Prompts

- **Hero:** "Create a left-aligned hero on a `#eeefe9` cream canvas with a 60–88px IBM Plex Sans / weight 800 / tracking -0.025em / line-height 1.1 headline reading 'How developers build successful products', a 18px Plex 400 deck below in `#4d4f46`, a primary CTA in `#cd8407` mustard with `#23251d` text at 6px radius / `10px 18px` padding / `1px solid #a36a05` border, plus a coral secondary `#f35454` button next to it. Add 1–2 hand-drawn hedgehog illustrations decorating the right column."

- **Feature card:** "Design a feature card on cream with `#ffffff` background, `1px solid rgba(35,37,29,0.12)` border, 6px radius, 32px padding, no shadow, h4 title in Plex 22/600, body in Plex 16/400 `#4d4f46`, optional `npx @posthog/wizard` install chip at bottom."

- **Tabbed attached panel:** "Build a tabbed panel with a header at radius `6 6 0 0` and a body at `0 0 6 6`. Header has `#ffffff` bg, `1px solid rgba(35,37,29,0.12)` border, 32px padding, three tabs ('Use cases' / 'Industries' / 'Roles') in Plex 15/600. Body has same border styling, 32px padding. The 1px border crosses the seam without breaking — the partial radius signals the attachment."

- **Mustard primary CTA:** "Place a primary CTA button as `#cd8407` mustard background, `#23251d` near-black text, 6px radius, `10px 18px` padding, height 42, `1px solid #a36a05` darker-mustard border, Plex 15/600 label 'Get Started'. Hover transitions background to `#eb9d2a` over 100ms."

- **Dark band emphasis section:** "Add a mid-page emphasis section with `#1d1f17` dark background, `#eeefe9` cream text, full-bleed (radius 0), 96px vertical padding. Inside, render h2 in Plex 44/700 cream, body in Plex 16/400 `#a8aaa1` muted-cream. Cards inside use `#252720` bg with `1px solid rgba(255,255,255,0.10)` border."

- **Install command chip:** "Create a horizontal code chip with `#ffffff` background, `1px solid rgba(35,37,29,0.12)` border, 6px radius, `8px 14px` padding. Inside, Source Code Pro 14/400 text reading `npx @posthog/wizard`. Add a copy icon on the right that toggles to a check on click."

### Iteration Guide

1. **Anchor canvas at `#eeefe9` cream.** Pure white tilts the page toward generic SaaS analytics. The cream undertone is the open-source-craft register.
2. **Set Plex Sans at weight 800 for h1.** Lighter weights (600 / 700) lose the open-source-craft character. The heavy display weight is the voice.
3. **Use mustard `#cd8407` for primary CTA.** Blue or green CTAs tip the page toward category-default analytics. The yellow is the differentiation.
4. **Add the 1px darker-mustard border** (`#a36a05`) on primary buttons. The trim is what makes the button feel finished — without it, mustard reads flat.
5. **Use partial radius** (`6 6 0 0` + `0 0 6 6`) for tabbed panel attachments. The seamless seam is the signature primitive.
6. **Include hedgehog illustrations.** The mascot is the brand's anti-corporate signal — without it, the cream-and-mustard register feels generic.
7. **Stick to the OFL/Apache type stack.** Plex Sans + Source Code Pro. Closed commercial faces betray the brand posture.
8. **Alternate cream and dark bands** for section rhythm. 1–2 dark bands per page; cream is the dominant ground.
