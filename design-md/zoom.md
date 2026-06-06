---
name: Zoom
tagline: 'Zoom Blue `#0B5CFF` on white — geometric sans wordmark, Workplace-era AI Companion friendly-corporate register.'
updated_at: 2026-05-27T23:16:51.186Z
published_at: 2026-05-27T23:16:51.186Z
author: webdesignhot
source_url: https://zoom.us
spec: webdesignhot/0.1
quality: auto
featured: false
categories: [saas]
tags: [light, structured, sans, communication]
preview_swatch: ['#ffffff', '#0b5cff', '#000000']
related: []
description: 'Zoom''s marketing site is the bright Zoom Blue `#0B5CFF` rendered on a pure-white canvas — the single most-recognised brand colour in video communications, paired with a refreshed geometric sans wordmark and the same lozenge-rounded letterforms used in Zoom Workplace product UI. Where Slack runs aubergine + cream + Salesforce-Avant-Garde for an enterprise-B2B register, Zoom runs a brighter, friendlier-corporate register: vivid Zoom Blue accents, near-black `#000` headlines, geometric-sans display (Almaden Sans, the company''s 2023-refresh custom face derived from Helvetica Neue / Arial bones), and pill-rounded 8px buttons. The visual story is bright-blue-and-white — a single dominant accent that signals "video meeting that just works" since 2020 when Zoom became the household verb. Post-2022 Zoom Workplace rebrand (chat + whiteboard + AI Companion converging into one platform) the marketing surface added warmer secondary accents and a more illustrative product-shot pattern, but the Zoom Blue + white duotone remains the unbreakable signature. The defining decisions are: (1) the literal "Zoom" wordmark with its rounded geometric "o" forms as the dominant brand device, (2) the 8px-radius soft pill rect CTA in vivid Zoom Blue carrying friendly verbs ("Sign Up, It''s Free", "Plans & Pricing"), (3) a download-CTA-prominent navigation that signals desktop-client-first product distribution, and (4) the AI Companion violet `#7B61FF` introduced in 2024 as the secondary accent for AI-feature surfaces. The whole system reads as friendly-corporate-utility — built to feel as approachable to a grandparent joining a video call as to an IT buyer rolling out Zoom Phone across a 10,000-seat enterprise.'


# Canonical 8-role aliases (bg / text / brand / border / accent / muted / surface / danger).
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent-violet
  muted: text-muted
  border: border
  ring: border-brand
colors:
  # Primary
  bg: '#ffffff'                          # primary page canvas — pure white
  bg-soft: '#f8f9fa'                     # subtle off-white panel ground
  bg-blue-soft: '#eef4ff'                # Zoom-Blue wash for storytelling panels
  bg-blue-deep: '#0b1739'                # deep navy ground for hero alternates and footer
  surface: '#ffffff'                     # default card surface
  surface-elev: '#fafbfc'                # subtle lift over white
  text: '#000000'                        # body copy + headlines — near-black
  text-strong: '#000000'                 # display headline absolute black
  text-medium: '#232333'                 # secondary heading colour
  text-soft: '#3d3d50'                   # supporting body copy
  text-muted: '#67677e'                  # captions, metadata
  text-faint: '#9595a8'                  # eyebrows, helper
  text-disabled: '#c4c4cf'               # disabled microcopy
  text-on-deep: '#ffffff'                # white text on navy bg-blue-deep
  # Brand
  brand: '#0b5cff'                       # signature Zoom Blue — CTA fill, wordmark, primary accent
  brand-deep: '#0846cc'                  # hover-darken Zoom Blue
  brand-bright: '#2872ff'                # hover-brighten on dark surfaces
  brand-soft: '#eef4ff'                  # Zoom Blue wash for chips and section grounds
  brand-tint: '#b3ccff'                  # Zoom Blue tint for skeleton states
  on-brand: '#ffffff'                    # white label on Zoom Blue
  # Accent (Zoom Workplace 2024 secondary palette)
  accent-violet: '#7b61ff'               # AI Companion violet — Zoom AI-feature surfaces
  accent-violet-soft: '#f0ecff'          # violet wash
  accent-cyan: '#00b6f0'                 # Zoom Phone secondary accent
  accent-cyan-soft: '#e0f6fd'            # cyan wash
  accent-orange: '#ff7a59'               # Zoom Events / Contact Center warm accent
  accent-orange-soft: '#fff0eb'          # orange wash
  accent-green: '#3ec78f'                # Zoom-call active-state green (the in-meeting "active" indicator)
  # Interactive
  link: '#0b5cff'                        # Zoom Blue links in body copy
  link-hover: '#0846cc'                  # deeper blue on hover
  selected-bg: '#eef4ff'                 # Zoom-Blue-soft selected nav state
  disabled: '#c4c4cf'                    # disabled control text
  # Borders
  border: '#d6d8df'                      # neutral border for inputs and dividers
  border-strong: '#a8acb8'               # outlined buttons, emphasis dividers
  border-subtle: '#eceef2'               # quietest separation
  border-brand: 'rgba(11, 92, 255, 0.30)' # Zoom-Blue-tinted hairline
  # Semantic
  success-bg: '#e3f6ed'                  # green wash from Zoom call-active
  success-text: '#16794e'
  warning-bg: '#fff4e0'                  # warm-amber wash
  warning-text: '#7a5400'
  danger-bg: '#fde6ea'                   # red wash — meeting-ended red
  danger-text: '#a51c30'
  info-bg: '#eef4ff'                     # Zoom Blue wash
  info-text: '#0846cc'

typography:
  display:
    family: '"Almaden Sans", "Helvetica Neue", helvetica, arial, system-ui, -apple-system, sans-serif'
    weights: [500, 600, 700]
    opentype-features: ['liga', 'kern']
  body:
    family: '"Almaden Sans", "Helvetica Neue", helvetica, arial, system-ui, -apple-system, sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: ['liga', 'kern']
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
    weights: [400, 500]
    opentype-features: ['tnum']
  scale:
    display-hero:    { size: 80, weight: 700, lineHeight: 1.0,  tracking: '-0.030em', family: display }
    display-lg:      { size: 56, weight: 700, lineHeight: 1.05, tracking: '-0.020em', family: display }
    h1:              { size: 40, weight: 700, lineHeight: 1.10, tracking: '-0.018em', family: display }
    h2:              { size: 32, weight: 600, lineHeight: 1.20, tracking: '-0.012em', family: display }
    h3:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 20, weight: 600, lineHeight: 1.30, family: body }
    h5:              { size: 18, weight: 600, lineHeight: 1.35, family: body }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.40, tracking: '0.08em', family: body, transform: uppercase }
    body-large:      { size: 18, weight: 400, lineHeight: 1.55, family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.50, family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.40, family: body }
    caption-tabular: { size: 12, weight: 500, lineHeight: 1.40, family: mono, opentype: 'tnum' }
    label:           { size: 13, weight: 500, lineHeight: 1.40, family: body }
    button:          { size: 16, weight: 600, lineHeight: 1.0,  family: body, tracking: '0' }
    button-small:    { size: 14, weight: 600, lineHeight: 1.0,  family: body, tracking: '0' }
    code:            { size: 14, weight: 400, lineHeight: 1.55, family: mono }
    quote-pull:      { size: 28, weight: 600, lineHeight: 1.30, family: display }

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
  page-width: 1280
  prose-width: 720
  site-gutter: 'clamp(20px, 4vw, 56px)'
  header-height: 64
  grid-columns: 12
  section-rhythm: '64-96px'

components:
  button-primary:
    background: '#0b5cff'
    text: '#ffffff'
    padding: '12px 24px'
    radius: 8
    border: 'none'
    font: 'Almaden Sans 600 / 16px / sentence-case'
    hover-bg: '#0846cc'
    active-bg: '#063aa3'
    use: 'Primary CTA — Zoom Blue 8px-radius soft pill rect, friendly sentence-case copy ("Sign Up, It''s Free", "Plans & Pricing")'
  button-secondary:
    background: 'transparent'
    text: '#0b5cff'
    padding: '12px 24px'
    radius: 8
    border: '1px solid #0b5cff'
    font: 'Almaden Sans 600 / 16px / sentence-case'
    hover-bg: '#eef4ff'
    use: 'Outlined twin — Zoom Blue border, soft-blue hover wash'
  button-white:
    background: '#ffffff'
    text: '#0b5cff'
    padding: '12px 24px'
    radius: 8
    border: 'none'
    font: 'Almaden Sans 600 / 16px / sentence-case'
    hover-bg: '#f8f9fa'
    use: 'White CTA inside hero deep-navy sections — Zoom Blue label on white pill'
  button-ghost:
    background: 'transparent'
    text: '#000000'
    padding: '8px 14px'
    font: 'Almaden Sans 500 / 14px / sentence-case'
    hover-text: '#0b5cff'
    use: 'Quiet third action — nav links, footer secondary actions'
  button-download:
    background: '#0b5cff'
    text: '#ffffff'
    padding: '10px 18px'
    radius: 8
    border: 'none'
    font: 'Almaden Sans 600 / 14px'
    icon: 'download arrow leading'
    use: 'Top-nav "Download" CTA — desktop-client-first distribution device, persistently visible'
  card:
    background: '#ffffff'
    border: '1px solid #eceef2'
    radius: 12
    padding: '32px'
    use: 'Default feature card — white panel with hairline border and soft shadow'
    shadow: 'rgba(11, 92, 255, 0.04) 0 8px 24px, rgba(0, 0, 0, 0.04) 0 2px 8px'
  card-blue:
    background: '#eef4ff'
    border: 'none'
    radius: 16
    padding: '40px 32px'
    use: 'Zoom-Blue-soft storytelling panel — Workplace section ground for AI Companion / Phone / Events spreads'
  card-deep:
    background: '#0b1739'
    text: '#ffffff'
    border: 'none'
    radius: 16
    padding: '48px 40px'
    use: 'Deep-navy hero alternate — used on enterprise-focused product pages and developer surfaces'
  card-screenshot:
    background: '#ffffff'
    border: '1px solid #d6d8df'
    radius: 12
    padding: '0'
    use: 'Wraps in-product Zoom UI screenshots — the gallery-view tile grid and toolbar appear inside as recurring brand device'
    shadow: 'rgba(0, 0, 0, 0.10) 0 16px 40px -12px, rgba(11, 92, 255, 0.06) 0 4px 16px'
  input:
    background: '#ffffff'
    border: '1px solid #d6d8df'
    radius: 8
    padding: '12px 16px'
    font: 'Almaden Sans 400 / 16px'
    placeholder-color: '#9595a8'
    focus-ring: '0 0 0 3px rgba(11, 92, 255, 0.30)'
    use: 'Form fields, search — 8px radius aligns with button system'
  badge-eyebrow:
    background: 'transparent'
    text: '#67677e'
    padding: '0'
    font: 'Almaden Sans 600 / 12px / uppercase / 0.08em'
    use: 'Section eyebrow — bold uppercase with wide tracking, no chrome'
  badge-blue:
    background: '#eef4ff'
    text: '#0846cc'
    padding: '4px 12px'
    radius: 9999
    font: 'Almaden Sans 600 / 12px'
    use: 'Zoom-Blue-tinted pill for "New", "Featured", "AI Companion" labels'
  badge-violet:
    background: '#f0ecff'
    text: '#5439d9'
    padding: '4px 12px'
    radius: 9999
    font: 'Almaden Sans 600 / 12px'
    use: 'AI Companion violet pill for AI-feature surfaces — the post-2024 secondary brand device'
  nav-link:
    background: 'transparent'
    text: '#000000'
    padding: '8px 14px'
    font: 'Almaden Sans 500 / 14px'
    hover-text: '#0b5cff'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  duration-page: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — translates disabled, durations halved, opacity-only transitions'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: 'rgba(0, 0, 0, 0.04) 0 1px 3px'
  card: 'rgba(11, 92, 255, 0.04) 0 8px 24px, rgba(0, 0, 0, 0.04) 0 2px 8px'
  screenshot: 'rgba(0, 0, 0, 0.10) 0 16px 40px -12px, rgba(11, 92, 255, 0.06) 0 4px 16px'
  popover: 'rgba(0, 0, 0, 0.08) 0 16px 40px -16px'
  modal: 'rgba(0, 0, 0, 0.16) 0 24px 64px -16px'
  ring: '0 0 0 3px rgba(11, 92, 255, 0.30)'

accessibility:
  contrast-text-on-bg: 21.0                # #000000 on #ffffff — AAA
  contrast-text-on-brand: 5.2              # #ffffff on #0b5cff — AA at body, AAA at large
  contrast-text-soft-on-bg: 10.4           # #3d3d50 on #ffffff — AAA
  contrast-text-on-blue-soft: 19.5         # #000000 on #eef4ff — AAA
  contrast-text-on-deep: 14.8              # #ffffff on #0b1739 — AAA
  focus-ring: '3px Zoom-Blue 30%-opacity ring with 1px solid Zoom-Blue inner border'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; tab order matches visual'
  prose-line-length: 'capped at 720px for readability'

dark-mode: null                            # marketing surface is light-only; the Zoom client ships its own dark theme separately
lineage:
  summary: 'Zoom''s design DNA is geometric-sans-on-white with a single vivid blue accent — a friendly-corporate utility register descended from late-90s Helvetica Neue corporate communications, modernised via the 2023 Almaden Sans custom face and the 2022 Zoom Workplace platform rebrand. The aesthetic borrows from Microsoft Teams'' corporate-credible white-and-blue duotone, rejects WebEx''s green-laden legacy palette that Zoom displaced after 2020, and parallels Slack''s product-screenshot-as-hero device while opting for a brighter, more consumer-friendly blue rather than Slack''s enterprise aubergine. The post-2024 AI Companion violet `#7B61FF` adds a second accent that signals "AI feature" without disrupting the dominant blue-on-white identity. Compared to Discord''s blurple-and-dark gaming register or Google Meet''s Material-You softer pastels, Zoom sits in the middle: bright enough to feel consumer-friendly, corporate enough for IT buyers, geometric enough to feel modern.'
  influences:
    - name: 'Slack'
      role: 'Communication-tool peer that converged into a parallel workspace platform — both ship product-screenshot-as-hero devices and treat their signature brand colour as the single visual anchor.'
      url: 'https://slack.com'
    - name: 'Google Meet'
      role: 'Direct video-meeting competitor — adjacent precedent for clean-white video-product marketing surfaces and friendly-utility verb tone.'
      url: 'https://meet.google.com'
    - name: 'Microsoft Teams'
      role: 'Enterprise-credibility peer — borrows the blue-on-white corporate-communications register and the persistent-download-CTA navigation pattern.'
      url: 'https://www.microsoft.com/microsoft-teams'
    - name: 'Discord'
      role: 'Parallel real-time communication platform — informs the AI Companion violet accent direction and the comparison reference for "friendly-utility vs. gaming-dark" register choice.'
      url: 'https://discord.com'
---

## 1. Visual Theme & Atmosphere

Zoom's homepage is white — `#ffffff` background, near-black `#000` headlines — with the unmistakable Zoom Blue `#0B5CFF` reserved for primary CTAs, the wordmark, and the recurring brand accents that anchor every surface. The hero is a single-column layout capped at 1280px: H1 in **Almaden Sans** at `40–56px / 1.05–1.10` line-height, supporting paragraph in Almaden Sans at 18px, and an 8px-radius soft pill rect CTA in vivid Zoom Blue carrying the friendliest verb the company can stand behind ("Sign Up, It's Free", "Plans & Pricing"). The defining decision is the **single dominant accent** — Zoom Blue, applied with discipline. There is no gradient, no rainbow mesh, no secondary brand colour competing for primacy on the marketing surface. The blue is the brand.

What makes this design distinctive vs. nearby alternatives: where Slack runs aubergine + cream + Salesforce-Avant-Garde for a deliberately enterprise-B2B register, Zoom runs a brighter, friendlier-corporate register — vivid Zoom Blue accents on pure white, near-black headlines, geometric-sans display (Almaden Sans, the company's 2023-refresh custom face derived from Helvetica Neue / Arial bones), and pill-rounded 8px buttons with sentence-case copy. The whole system signals "video meeting that just works" — the same friendly-utility register that turned Zoom into a household verb in 2020 and sustained the brand through the post-pandemic transition into the broader Zoom Workplace platform.

The third register is the **post-2024 Workplace expansion palette**. After the 2022 Zoom Workplace rebrand (chat + whiteboard + AI Companion converging into one platform) and the 2024 introduction of the AI Companion violet `#7B61FF`, the marketing surface gained secondary accents for product surfaces — violet for AI features, cyan for Zoom Phone, warm orange for Zoom Events and Contact Center, and an active-state green for in-meeting indicators. These accents appear sparingly, only on the relevant product pages; the Zoom Blue + white duotone remains the unbreakable signature across every surface.

Atmospheric vocabulary that captures the feeling: *Zoom-Blue-dominant, geometric-sans-clean, friendly-corporate, AI-Companion-violet, household-verb-confident, video-tile-grid, gallery-view-mockup, download-CTA-persistent, Almaden Sans-modern, post-pandemic-platform, Workplace-era, sentence-case-friendly, white-canvas-utility.* Every surface lands like a video communication platform that has matured from a single-product Zoom Meetings page into a multi-surface Zoom Workplace marketing system while preserving the original brand confidence.

**Key Characteristics**
- Pure white `#ffffff` canvas with Zoom-Blue-soft `#eef4ff` panel grounds for storytelling
- **Almaden Sans** geometric custom sans — refreshed 2023, derived from Helvetica Neue / Arial bones — for both display and body
- Signature Zoom Blue `#0B5CFF` — CTA fill, wordmark, single dominant accent
- AI Companion violet `#7B61FF` — post-2024 secondary accent for AI-feature surfaces only
- **8px-radius soft pill rect CTAs** with sentence-case copy ("Sign Up, It's Free", "Plans & Pricing")
- **Persistent "Download" CTA** in the nav — desktop-client-first distribution device
- Near-black `#000` headlines — absolute black for maximum contrast and friendly-corporate authority
- The literal "Zoom" wordmark with rounded geometric "o" forms as the dominant brand device
- Gallery-view product mockups — the 3×3 video-tile grid is the recurring screenshot device
- Cards run 12–16px radius — softer than Slack's 12px hard card, less geometric than Vercel's grid
- Deep-navy `#0b1739` reserved for hero alternates and enterprise-focused product pages
- Pill-shaped 9999-radius status badges with sentence-case labels ("New", "AI Companion")

## 2. Color Palette & Roles

### Primary

- **bg** `#ffffff` — primary page canvas. Pure white, the Zoom default.
- **bg-soft** `#f8f9fa` — subtle off-white panel ground for alternating section rhythm.
- **bg-blue-soft** `#eef4ff` — Zoom-Blue wash for storytelling panels and Workplace-feature spreads.
- **bg-blue-deep** `#0b1739` — deep navy ground for hero alternates, enterprise pages, and footer.
- **text** `#000000` — body copy and headlines. Absolute black for friendly-corporate authority.
- **surface** `#ffffff` — card surface = page surface.
- **surface-elev** `#fafbfc` — subtle lift over white for hover.

### Brand & Accent

- **brand** `#0b5cff` — signature Zoom Blue. CTA fill, wordmark colour, link colour, the single dominant accent across every surface.
- **brand-deep** `#0846cc` — hover-darken Zoom Blue for button hover and link-hover.
- **brand-bright** `#2872ff` — hover-brighten Zoom Blue used on dark surfaces where the standard blue needs more lift.
- **brand-soft** `#eef4ff` — Zoom Blue wash for chips, badges, and section grounds.
- **brand-tint** `#b3ccff` — Zoom Blue tint for skeleton loading states.
- **on-brand** `#ffffff` — white label on Zoom Blue.

### Workplace 2024 Accent Palette

- **accent-violet** `#7b61ff` — AI Companion violet. Reserved for AI-feature surfaces. The post-2024 secondary brand device.
- **accent-violet-soft** `#f0ecff` — violet wash for AI-Companion section grounds and badges.
- **accent-cyan** `#00b6f0` — Zoom Phone secondary accent. Used only on the Zoom Phone product surfaces.
- **accent-cyan-soft** `#e0f6fd` — cyan wash.
- **accent-orange** `#ff7a59` — Zoom Events / Contact Center warm accent. Used only on those product surfaces.
- **accent-orange-soft** `#fff0eb` — orange wash.
- **accent-green** `#3ec78f` — Zoom-call active-state green (the in-meeting "active" indicator). Used in product mockups and success semantics.

The discipline here matters: Zoom Blue is the single brand colour. The Workplace accents (violet, cyan, orange, green) only appear on the specific product pages they belong to — they never compete with Zoom Blue on the homepage or in shared chrome.

### Interactive

- **link** `#0b5cff` — Zoom Blue links in body copy. Underlined on hover.
- **link-hover** `#0846cc` — deeper blue on hover.
- **selected-bg** `#eef4ff` — Zoom-Blue-soft selected nav state.
- **disabled** `#c4c4cf` — disabled control text.

### Neutral Scale

- **near-black** `#000000` — primary text and headlines. Absolute black, not the warmer `#1d1c1d` of Slack.
- **slate-medium** `#232333` — secondary heading colour.
- **slate-soft** `#3d3d50` — supporting body copy.
- **slate-muted** `#67677e` — captions, metadata.
- **slate-faint** `#9595a8` — eyebrows, helper, placeholder.
- **slate-disabled** `#c4c4cf` — disabled microcopy.

### Surface & Borders

- **surface-0 (page)** `#ffffff` pure white.
- **surface-1 (off-white panel)** `#f8f9fa`.
- **surface-2 (blue-soft panel)** `#eef4ff`.
- **surface-3 (deep navy alternate)** `#0b1739`.
- **border** `#d6d8df` — neutral border for inputs and dividers.
- **border-strong** `#a8acb8` — outlined buttons, emphasis dividers.
- **border-subtle** `#eceef2` — quietest separation between white cards on white canvas.
- **border-brand** `rgba(11, 92, 255, 0.30)` — Zoom-Blue-tinted hairline for focused inputs and selected states.

### Shadow Colors

Zoom uses **subtly blue-tinted shadows** — `rgba(11, 92, 255, 0.04)` mixed with neutral grey `rgba(0, 0, 0, 0.04)` — to give cards a faint Zoom Blue undertone without being obvious. The canonical card shadow is the two-layer `rgba(11, 92, 255, 0.04) 0 8px 24px, rgba(0, 0, 0, 0.04) 0 2px 8px`. Screenshot cards step deeper to `rgba(0, 0, 0, 0.10) 0 16px 40px -12px, rgba(11, 92, 255, 0.06) 0 4px 16px`. This is a subtle tell — the shadows aren't the pure neutral grey of Slack's classic SaaS shadows, nor the warm-tinted shadows of Anthropic. They're brand-tinted-but-quiet, reinforcing Zoom Blue as the system's organising principle.

### Semantic

- **success** — bg `#e3f6ed` (green from Zoom call-active), text `#16794e`, border `rgba(62, 199, 143, 0.30)`.
- **warning** — bg `#fff4e0` (warm amber wash), text `#7a5400`, border `rgba(255, 167, 38, 0.30)`.
- **danger** — bg `#fde6ea` (red wash — meeting-ended red), text `#a51c30`, border `rgba(220, 53, 69, 0.30)`.
- **info** — bg `#eef4ff` (Zoom Blue wash), text `#0846cc`, border `rgba(11, 92, 255, 0.30)`.

Info semantics reuse Zoom Blue — the brand colour doubles as the info colour. Success borrows from the in-meeting active-state green; danger borrows from the call-ended red used inside the Zoom client. The semantic palette is internally consistent with the product UI.

## 3. Typography Rules

### Font Family

- **Display**: `"Almaden Sans", "Helvetica Neue", helvetica, arial, system-ui, -apple-system, sans-serif` — Almaden Sans is the company's custom geometric sans introduced with the 2023 refresh, derived from Helvetica Neue / Arial bones with slightly rounder bowls and a friendlier "o" form. Used at weights 500 / 600 / 700.
- **Body**: same family as display — Almaden Sans does both jobs. The single-family approach keeps the system tight and signals modern-utility rather than editorial-multi-family complexity. Used at 400 / 500 / 600 / 700.
- **Mono**: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace` — pragmatic system mono fallback. Zoom does not license a proprietary mono.
- **OpenType features**: `liga` and `kern` always on; `tnum` enabled in mono for tabular code blocks.

The single-family choice (Almaden Sans for both display and body) mirrors **Helvetica Neue's** original "one family does everything" Swiss design principle and positions Zoom inside the modern-corporate-utility typographic family (alongside Microsoft Teams, Google Workspace) rather than the editorial-multi-family family (Anthropic, Stripe).

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | Almaden Sans | 80px | 700 | 1.0 | -0.030em | liga | Largest hero variant (Workplace launch pages) |
| Display Large | Almaden Sans | 56px | 700 | 1.05 | -0.020em | liga | Section intro at scale |
| H1 | Almaden Sans | 40px | 700 | 1.10 | -0.018em | liga | The canonical Zoom hero |
| H2 | Almaden Sans | 32px | 600 | 1.20 | -0.012em | liga | Major section |
| H3 | Almaden Sans | 24px | 600 | 1.25 | -0.005em | — | Sub-section |
| H4 | Almaden Sans | 20px | 600 | 1.30 | normal | — | Card heading |
| H5 | Almaden Sans | 18px | 600 | 1.35 | normal | — | Inline emphasis |
| Eyebrow | Almaden Sans | 12px | 600 | 1.40 | 0.08em | uppercase | Section pre-label — wide tracking |
| Body Large | Almaden Sans | 18px | 400 | 1.55 | normal | — | Lede paragraph |
| Body | Almaden Sans | 16px | 400 | 1.55 | normal | — | Default body copy |
| Body Small | Almaden Sans | 14px | 400 | 1.50 | normal | — | Captions, sidebars |
| Caption | Almaden Sans | 13px | 400 | 1.40 | normal | — | Image captions |
| Caption Tabular | Mono | 12px | 500 | 1.40 | normal | tnum | Stats, data labels |
| Label | Almaden Sans | 13px | 500 | 1.40 | normal | — | UI labels, form labels |
| Button | Almaden Sans | 16px | 600 | 1.0 | normal | — | Primary CTA — sentence case |
| Button Small | Almaden Sans | 14px | 600 | 1.0 | normal | — | Compact CTA, nav-bar download button |
| Pull Quote | Almaden Sans | 28px | 600 | 1.30 | normal | — | Editorial pull-quote |
| Code | Mono | 14px | 400 | 1.55 | normal | — | Inline + block |

### Principles

- **Single-family discipline.** Almaden Sans handles both display and body. Adding a second family breaks the modern-utility register and pushes the brand toward editorial-multi-family territory (Anthropic, Stripe) where Zoom doesn't sit.
- **Sentence case on CTAs.** "Sign Up, It's Free", "Plans & Pricing", "Download" — buttons stay sentence case at weight 600. The brand explicitly rejects the all-caps register that Slack uses for its enterprise-B2B signal. Zoom is enterprise-credible but consumer-friendly.
- **Eyebrows at 12px / 600 / 0.08em uppercase.** Slightly tighter tracking than Slack's 0.10em — the brand's eyebrows read corporate-utility rather than corporate-editorial.
- **Display at weight 700 with tight negative tracking.** `-0.030em` at 80px, `-0.020em` at 56px, `-0.018em` at 40px — the geometric Almaden Sans forms benefit from compression at scale, reading punchy and confident rather than airy and editorial.
- **Body 400 / 500 / 600 / 700 weight ladder.** Body 400, labels and emphasis 500–600, button copy 600, headline 700. The weight ladder is corporate-utilitarian.
- **Near-black `#000` not warm-black.** Zoom uses absolute black for headlines and body, not the slightly-warmer `#1d1c1d` of Slack or the off-black `#202124` of Google. The absolute black is part of the friendly-corporate-authority register.
- **No italics in display.** Almaden Sans display weight never italicises; italics carry quoted titles and product names in body copy only.
- **System mono fallback.** Zoom spends its type budget on Almaden Sans, not on a custom mono.

## 4. Component Stylings

### Buttons

**Primary (Zoom Blue 8px Soft Pill Rect)**
- Background: `#0b5cff`. Text: `#ffffff`, Almaden Sans 600 / 16px, sentence case.
- Padding: `12px 24px`. Radius: `8px`. No border.
- Hover: bg → `#0846cc` (deeper Zoom Blue); transition `240ms ease-standard`.
- Active: bg → `#063aa3`.
- Use: Primary CTA — *Sign Up, It's Free; Plans & Pricing; Buy Now.*

**Secondary (Zoom Blue Outlined)**
- Background: transparent. Text: `#0b5cff`. Border: `1px solid #0b5cff`. Radius: `8px`.
- Same padding and font as primary (sentence case maintained).
- Hover: bg → `#eef4ff` Zoom-Blue-soft wash.
- Use: Twin to primary — *Contact Sales, Watch Demo, Learn More.*

**White (Deep-Navy-Section Alternate)**
- Background: `#ffffff`. Text: `#0b5cff`. No border. Radius: `8px`.
- Same padding and font as primary.
- Hover: bg → `#f8f9fa`.
- Use: Used inside deep-navy `#0b1739` hero alternates where Zoom Blue would not contrast.

**Ghost (Quiet)**
- Background: transparent. Text: `#000000`. No border.
- Padding: `8px 14px`. Almaden Sans 500 / 14px, sentence case.
- Hover: text → `#0b5cff` Zoom Blue.
- Use: Nav links, footer secondary actions.

**Download (Persistent Nav CTA)**
- Background: `#0b5cff`. Text: `#ffffff`. Almaden Sans 600 / 14px. Leading download-arrow icon.
- Padding: `10px 18px`. Radius: `8px`.
- Use: Top-nav "Download" CTA — always visible, the brand's desktop-client-first distribution device.

### Cards

**Default Card (Blue-Tinted Soft Shadow)**
- Background: `#ffffff`. Border: `1px solid #eceef2`. Radius: `12px`. Padding: `32px`.
- Shadow: `rgba(11, 92, 255, 0.04) 0 8px 24px, rgba(0, 0, 0, 0.04) 0 2px 8px` — the canonical Zoom card lift, subtly blue-tinted.
- Hover: shadow intensifies; transition `240ms`.
- Use: Default feature card — Workplace-product capability rails, integration grids.

**Blue Storytelling Panel**
- Background: `#eef4ff` Zoom-Blue-soft. Border: none. Radius: `16px`. Padding: `40px 32px`.
- Use: Storytelling panel ground for narrative sections, AI Companion / Phone / Events spreads.

**Deep-Navy Hero Alternate**
- Background: `#0b1739` deep navy. Text: `#ffffff`. Border: none. Radius: `16px`. Padding: `48px 40px`.
- Use: Enterprise-focused product pages, developer surfaces, and contact-centre hero alternates.

**Screenshot Card (Gallery-View Mockup)**
- Background: `#ffffff`. Border: `1px solid #d6d8df`. Radius: `12px`. Padding: `0`.
- Shadow: `rgba(0, 0, 0, 0.10) 0 16px 40px -12px, rgba(11, 92, 255, 0.06) 0 4px 16px` (deeper than default card, with faint blue undertone).
- Inner: in-product Zoom UI screenshot at original aspect ratio — usually the **3×3 gallery-view tile grid** or the meeting toolbar with raise-hand / reactions / chat / AI Companion buttons visible.
- Use: The dominant depth device — wraps in-product screenshots in a slightly elevated frame.

### Badges, Tags, Pills

**Eyebrow Label** — no chrome, just type. Almaden Sans 600 / 12px / uppercase / `0.08em` tracking, colour `#67677e`.

**Blue Pill Badge** — bg `#eef4ff`, text `#0846cc`, radius `9999px` (full pill), padding `4px 12px`. "New", "Featured", "AI Companion" labels. The full pill matches the friendly-modern register.

**Violet Pill Badge** — bg `#f0ecff`, text `#5439d9`, radius `9999px`. AI Companion violet pill for AI-feature surfaces — the post-2024 secondary brand device.

**Active-State Dot** — 8px solid `#3ec78f` green circle. The in-meeting "active" indicator borrowed from the Zoom client.

### Inputs / Forms

- Background: `#ffffff`. Border: `1px solid #d6d8df`. Radius: `8px` (matches buttons). Padding: `12px 16px`.
- Font: Almaden Sans 400 / 16px. Placeholder: `#9595a8`.
- Focus: `0 0 0 3px rgba(11, 92, 255, 0.30)` Zoom-Blue glow ring, border → `#0b5cff`.
- Error: border → `#a51c30`, ring → `rgba(165, 28, 48, 0.30)`.
- Helper: caption 13px slate-muted below.

### Navigation

- Header height `64px`. Background `#ffffff` (sticky, with 1px bottom border in `#eceef2`).
- Logo: Zoom wordmark in Zoom Blue `#0b5cff` — the rounded geometric "o" forms are the recognised brand device.
- Nav links: Almaden Sans 500 / 14px, colour `#000000`, padding `8px 14px`. Hover → `#0b5cff` Zoom Blue. Dropdown menus for Products / Solutions / Resources surface megamenu panels with grouped product links.
- Right-side cluster: ghost "Sign In" + ghost "Contact Sales" + primary Zoom Blue "Sign Up, It's Free" + persistent **Download** CTA. The download button is the brand's distinctive nav device — most peer products demote download to the footer; Zoom keeps it top-right.
- Mobile: full-screen sheet, links stack at 22px / Almaden Sans 600.

### Optional Components

**Pull Quote** — Almaden Sans 28px / 600, near-black `#000` text, with a 4px Zoom Blue vertical rule on the left edge.

**Footnote** — Almaden Sans 13px / 400, slate-muted; sits on a thin border-subtle rule.

**Code Block** — Mono 14px, bg `#f8f9fa`, radius `8px`, padding `16px 20px`, border `#d6d8df`. Inline code: same font, bg `rgba(11, 92, 255, 0.06)`, padding `2px 6px`, radius `4px`.

**Tooltip** — bg `#0b1739` deep navy, text `#ffffff`, radius `8px`, padding `8px 12px`, font `13px / Almaden Sans 500`.

**Modal** — bg `#ffffff`, radius `16px`, shadow `rgba(0, 0, 0, 0.16) 0 24px 64px -16px`, max-width `560px`. White backdrop overlay at 60% opacity.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 — corporate-utility cadence.
- **Density observation**: Zoom runs corporate-utility density — slightly tighter than Slack's 80–128px section rhythm, never as airy as Anthropic's editorial spreads. Headlines float in 48–96px of margin; body paragraphs sit on 24px line gaps. The slightly compressed cadence signals "utility-first, get to the download CTA" rather than "editorial-savour-the-content".

### Grid & Container

- **Page max width**: `1280px` — typical corporate-marketing convention.
- **Site gutter**: `clamp(20px, 4vw, 56px)`.
- **Grid**: 12 columns with 24px gutters. Hero blocks span 8 columns center-aligned; capability rails span 4 columns each; Workplace-feature spreads span full 12 with internal sub-grids.
- **Hero treatment**: full-bleed white, 40–56px Almaden Sans H1 anchored left, single Zoom Blue 8px-radius pill CTA below, screenshot card to the right or below at desktop widths.

### Whitespace Philosophy

The page alternates between white sections, off-white `#f8f9fa` panels, and Zoom-Blue-soft `#eef4ff` storytelling panels — the rhythm provides tonal depth without breaking into dark bands (the deep-navy `#0b1739` ground is reserved for enterprise pages, not the homepage). Section gutters run **64–96px** between major regions; minor blocks sit on 32–48px gaps; intra-section spacing uses 12–24px. The 64–96px rhythm is more compressed than Slack's 80–128px, signalling friendly-utility-first rather than corporate-formal.

### Section Cadence

- Hero (white, 40–56px Almaden Sans H1 + screenshot card) → Capability Rail (white card grid with blue-tinted soft shadows) → Storytelling Panel (Zoom-Blue-soft `#eef4ff` ground with Workplace-feature copy) → Screenshot Card (white card containing in-product Zoom UI with gallery view) → AI Companion Section (violet-accent panel) → Pricing (white card grid) → Customer Logos (off-white bar) → CTA Banner (full-bleed Zoom Blue or deep navy) → Footer (deep navy `#0b1739`, white text).
- Blue-soft panels alternate with white. The deep navy `#0b1739` appears at the footer and as occasional hero alternates on enterprise pages.
- White-on-white sections separated by 1px `#eceef2` border-subtle hairlines or by spacing.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Decorative dividers, inline chip corners |
| Standard (sm) | 4px | Small chips, decorative elements |
| Comfortable (md) | 8px | Buttons, inputs, dropdowns — the dominant Zoom radius |
| Relaxed (lg) | 12px | Default cards, screenshot frames |
| Featured (xl) | 16px | Storytelling panels, hero alternates, modals |
| Pill | 9999px | Badges, status chips, "New" / "AI Companion" labels |

Zoom's signature shape is the **8px-radius soft pill rect button** — softer than Slack's hard 4px corner, sharper than the consumer-SaaS 9999-radius full pill. The system has three working registers: 8px on actionable elements (buttons, inputs), 12–16px on cards and panels, and full pill (9999) on badges and status chips. The 8px button radius is the visual middleground that lets Zoom feel approachable to a grandparent joining a video call and corporate-credible to an IT buyer in the same hero.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, hero, body sections |
| 1 | Blue-soft tier (`#eef4ff` on white) | Storytelling panels |
| 2 | `rgba(0, 0, 0, 0.04) 0 1px 3px` | Sticky nav, dropdowns |
| 3 | `rgba(11, 92, 255, 0.04) 0 8px 24px, rgba(0, 0, 0, 0.04) 0 2px 8px` | Default cards (the canonical blue-tinted Zoom card shadow) |
| 4 | `rgba(0, 0, 0, 0.10) 0 16px 40px -12px, rgba(11, 92, 255, 0.06) 0 4px 16px` | Screenshot cards (deeper, with subtle blue undertone) |
| 5 | `rgba(0, 0, 0, 0.16) 0 24px 64px -16px` | Modals, dialogs |

### Shadow Philosophy

Zoom uses **subtly blue-tinted shadows** — neutral grey combined with a faint Zoom Blue undertone — to reinforce the brand colour at the elevation layer. The default card shadow `rgba(11, 92, 255, 0.04) 0 8px 24px, rgba(0, 0, 0, 0.04) 0 2px 8px` is the canonical Zoom lift; in-product screenshot cards step deeper to `rgba(0, 0, 0, 0.10) 0 16px 40px -12px, rgba(11, 92, 255, 0.06) 0 4px 16px`. Blue-soft-on-white panel transitions provide tonal depth without borders. The screenshot-inside-mockup pattern (a Zoom desktop window rendered inside a feature card with its own shadow, usually showing the 3×3 gallery view) is the dominant depth device on the marketing surface.

The shadows are explicitly *not* pure neutral grey (Slack's classic SaaS shadow) or warm-tinted (Anthropic's editorial shadow) — they're brand-tinted-but-quiet, reinforcing Zoom Blue as the system's organising principle without crossing into garish blue-glow territory.

## 8. Interaction & Motion

### Easing Curves

- `ease-standard`: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style; default for hover, focus, color transitions.
- `ease-emphasized`: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; modal enter, hero reveal.
- `ease-out`: `cubic-bezier(0.0, 0, 0.2, 1)` — gentle settle; dropdown reveal, megamenu open.

### Duration Buckets

- **Fast (150ms)** — colour transitions, focus rings, link hovers.
- **Standard (240ms)** — button hover, card hover, dropdown reveal.
- **Slow (320ms)** — modal enter/exit, page section fade-in.
- **Page (400ms)** — route transitions, hero reveal sequences.

### Per-Component Micro-States

- **Button hover (Zoom Blue)**: bg `#0b5cff` → `#0846cc`; transition `240ms ease-standard`. No lift, no scale.
- **Button hover (outlined)**: bg transparent → `#eef4ff` Zoom-Blue-soft wash.
- **Card hover**: shadow intensifies; no border change.
- **Link hover**: colour `#0b5cff` → `#0846cc` over 150ms; underline animates in.
- **Input focus**: 3px Zoom-Blue glow ring fades in over 150ms; border darkens to Zoom Blue.
- **Screenshot card hover**: shadow deepens further; no scale, no rotate.
- **Nav megamenu**: dropdown panel slides down 8px with opacity fade over 240ms `ease-out`.
- **Download button**: subtle pulse/glow on first-visit hint (only once per session).

### Page Transitions

Hero text fades in over 400ms with 16px translate-up; below-fold sections use `IntersectionObserver` to fade in at 80% viewport, 320ms duration, no translate. The brand does not use scroll-pinned animations — every section is independently navigable. The screenshot card hero may use a subtle 4-tile shuffle animation showing the gallery view populating with participants, but only above the fold.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` — all transitions become opacity-only, durations halved. Translate animations are disabled entirely; scroll-linked reveals snap to final state. The gallery-view-populating hero animation is replaced with a static screenshot.

## 9. Accessibility & A11y

### Contrast Pairs

- **`#000000` text on `#ffffff` bg**: 21.0:1 — AAA at all sizes.
- **`#3d3d50` text on `#ffffff` bg**: 10.4:1 — AAA at body sizes.
- **`#67677e` text on `#ffffff` bg**: 5.0:1 — AA at body sizes.
- **`#ffffff` text on `#0b5cff` Zoom Blue button**: 5.2:1 — AA at body sizes, AAA at large.
- **`#000000` text on `#eef4ff` Zoom-Blue-soft panel**: 19.5:1 — AAA at all sizes.
- **`#ffffff` text on `#0b1739` deep navy**: 14.8:1 — AAA at all sizes.
- **`#0b5cff` link on `#ffffff` bg**: 4.8:1 — AA at body sizes.
- **`#0846cc` text on `#eef4ff` chip**: 7.3:1 — AAA.

### Focus Indicators

- Default focus ring: `0 0 0 3px rgba(11, 92, 255, 0.30)` Zoom-Blue glow ring with 1px solid Zoom-Blue inner border.
- On deep-navy surfaces: `0 0 0 3px rgba(255, 255, 255, 0.40)` white glow ring.
- All interactive surfaces must have a visible focus state — no `outline: none` without a replacement.

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with skip-link to main content.
- **Megamenu**: `<button aria-expanded aria-controls aria-haspopup="menu">` for product/solution dropdowns; arrow-key navigation inside the panel.
- **Disclosure**: `<button aria-expanded aria-controls>` for FAQ collapsibles.
- **Dialog**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Combobox** (regional selector, search): `role="combobox" aria-expanded aria-autocomplete="list"`.
- **Live regions**: `aria-live="polite"` for form validation messages and download-progress confirmations.
- **Screenshot cards**: include `<figure>` + `<figcaption>` describing the in-product UI shown ("Zoom Meetings gallery view with 9 participants and AI Companion sidebar open").

### Keyboard Navigation

- Tab order matches visual flow: skip-link → nav → hero CTA → main content → footer.
- All buttons, links, inputs reachable via Tab; modals trap focus inside until dismissed.
- `Esc` closes modals, megamenu, and the mobile menu sheet.
- Arrow keys navigate within megamenu panels, tab groups (FAQ, pricing-tier comparisons), and dropdown menus.
- The persistent Download CTA is keyboard-reachable from the nav at all times.

### Screen Reader Hints

- The Zoom wordmark uses `aria-label="Zoom"`.
- Decorative gallery-view participant tiles in hero illustrations have `aria-hidden="true"`.
- Icon-only buttons (mute, camera, raise-hand in product mockups) have explanatory `aria-label`.
- The download CTA carries `aria-label="Download Zoom Workplace desktop client"` so screen readers announce the full action.
- AI Companion violet badges include text labels — they never rely on colour alone to signal "AI feature".

### Reduced Motion

Honoured via the global media query. All translate/scale animations become opacity-only; durations halve. Gallery-view populating animations replace with static screenshots.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single column, full-bleed sections, 32px H1 |
| Tablet | 640–1024px | 2-column rails, 40px H1 |
| Desktop | 1024–1280px | Full 12-col grid, 40–56px H1, 720px prose |
| Wide | 1280–1536px | Site max width hits |
| Ultra | > 1536px | Page locks to 1280, gutters expand |

### Touch Targets

- Minimum tap target: 44×44px (WCAG AAA).
- Buttons: 44px minimum height on mobile (the 12/24px padding × 2 + line-height ≈ 44px).
- Nav link tap area: 44×44px even when visual padding is smaller.
- Download CTA: 48px minimum height on mobile — the primary distribution device gets extra tap area.

### Collapsing Strategy

- **Header**: full nav with megamenus at ≥1024px; hamburger sheet below. Download CTA persists at all breakpoints, even in mobile sheet.
- **Hero**: 80px display-hero → 56px display-large → 40px H1 → 32px across breakpoints.
- **Screenshot card**: maintains 16:10 aspect ratio across viewports; the in-product gallery view sits inside without layout shift.
- **Capability grid**: 4-up at desktop, 2-up at tablet, 1-up at mobile.
- **Body width**: 720px → fluid 90vw at mobile.
- **CTA cluster (sign-up + download)**: stacks vertically on mobile with download promoted above sign-up.
- **Section spacing**: 96px → 64px → 40px across sizes.

### Image Behavior

- In-product screenshots use `srcset` with 1x/2x/3x; aspect-ratio enforced.
- Hero gallery-view mockup uses `aspect-ratio` to prevent layout shift.
- Lazy-loading on below-fold images; eager on hero.
- Customer logos use SVG with `aria-label` of company name.

### Container Queries

Used inside capability cards to switch icon position when card width crosses 320px (icon-left vs. icon-top). Used inside pricing tier cards to switch from horizontal to vertical feature lists on narrow viewports. Used inside the screenshot card to crop the gallery view from 3×3 grid → 2×2 grid → single-tile-with-toolbar across mobile breakpoints.

## 11. Content & Voice

### Tone

**Friendly-corporate, post-pandemic-confident, AI-Companion-era warm-utility.** Zoom writes like a video communication platform that has become a household verb and now needs to sell the broader Zoom Workplace platform (chat, whiteboard, AI Companion, Phone, Events, Contact Center) without losing the original meetings-product approachability. Headlines pose work-positive claims ("Communication that empowers", "AI-first work platform"); subheads explain Workplace platform capabilities; product copy carries the small confidence that Zoom is the established standard. The voice sits between Slack's enterprise-direct register and Google Meet's softer consumer-friendly register — credibly enterprise, credibly consumer-friendly, never trying to sound clever.

### Microcopy Patterns

- **Button verbs (sentence case)**: "Sign Up, It's Free", "Plans & Pricing", "Contact Sales", "Download", "Watch Demo", "Buy Now". Sentence case is the brand's friendly-corporate register.
- **Button verbs (ghost/secondary)**: "Sign In", "Learn More", "See How It Works". Quiet sentence case for nav and third actions.
- **Error messages**: "Something went wrong. Please try again or [contact support]." Standard corporate-polite.
- **Success confirmations**: "Saved." "Thanks — your request was submitted. Our team will be in touch within 1 business day." Brief, accountable, with a timeline commitment.
- **Loading states**: "Loading…", "Connecting…", "Joining meeting…" — context-specific where possible. The "Joining…" state is a recognised in-product device repurposed for the marketing surface.

### Empty States

What they say: explain the state and offer the next step. *"No meetings scheduled. Schedule one or join an existing meeting to get started."*
What they don't say: "Oops!", "Whoops!", any apologetic exclamation. Empty states are normal, not failures.

### CTA Verb Conventions

- Primary on hero: "Sign Up, It's Free", "Plans & Pricing", "Download"
- Secondary: "Contact Sales", "Watch Demo", "See How It Works", "Read the Story"
- Footer: "Read the blog", "Browse integrations", "Sign in", "Help center", "Download Zoom Workplace"
- AI Companion CTAs: "Try AI Companion", "Learn About AI Companion" — the violet-accent CTAs use the same sentence-case register.

The sentence-case register is the brand's deliberate friendly-corporate signal; it sets Zoom apart from Slack's all-caps enterprise-B2B register and from Discord's casual-gamer register. Zoom doesn't trade on either enterprise-software credibility alone or consumer-friendly casualness alone — it trades on being the household-verb default that works for both audiences.

## 12. Dark Mode & Theming

**Marketing surface is light-only — no dark variant offered.** The Zoom marketing site at `zoom.us` (and `zoom.com`) is intentionally light-canonical: the Zoom-Blue-soft `#eef4ff` panels, pure-white surfaces, and vivid Zoom Blue accents are calibrated for a light canvas. A dark mode would require re-keying the entire palette and would dilute the bright-friendly-corporate register that distinguishes Zoom from Discord (which ships dark-canonical) and from gaming-tool peers.

The deep navy `#0b1739` ground is used as an *alternate hero band* on enterprise-focused product pages and as the footer ground — but the page never goes fully dark. It's a light-canvas system that uses deep navy as accent contrast, not as a theme.

The Zoom Workplace product UI (the desktop client, mobile apps, web app) handles its own theming separately and ships both light and dark variants — including the popular dark theme that became widespread during pandemic-era long meetings. That product theming is documented at the product layer, not on the marketing surface. When the marketing site shows in-product Zoom screenshots, the screenshots usually display the light theme so the Zoom Blue accents are most visible inside the marketing context.

If a downstream surface ever needed a dark companion (e.g. a future Zoomtopia keynote page), the rule would be: keep Zoom Blue at full saturation, swap white for `#0b1739` deep navy, lift cards to `#1a2447`, and replace blue-soft panels with `#152040` — but this is not currently shipped on the marketing surface.

## 13. Lineage & Influences

Zoom's design DNA is **geometric-sans-on-white with a single vivid blue accent** — a friendly-corporate utility register descended from late-90s Helvetica Neue corporate communications, modernised via the 2023 Almaden Sans custom face and the 2022 Zoom Workplace platform rebrand that converged meetings + chat + whiteboard + AI Companion + Phone + Events + Contact Center into one product surface. The aesthetic borrows Microsoft Teams' corporate-credible white-and-blue duotone, rejects WebEx's green-laden legacy palette that Zoom displaced after 2020, and parallels Slack's product-screenshot-as-hero device while opting for a brighter, more consumer-friendly blue rather than Slack's enterprise aubergine.

What it inherits: Helvetica Neue's Swiss-modern single-family discipline (Almaden Sans is geometrically descended); late-90s corporate-communications white-and-blue duotone (Microsoft, IBM, every enterprise software company that ever existed); the 2019–2022 era of platform rebrands that converged single-product SaaS into multi-surface workplace platforms (Slack into Salesforce, Microsoft Teams expansion, Zoom Workplace). What it borrows from contemporaries: Slack's product-screenshot-as-hero pattern, Microsoft Teams' persistent-download-CTA navigation, Google Meet's friendly-utility verb tone. What it rejects: WebEx's green-and-purple legacy palette (the colour Zoom displaced), Discord's blurple-and-dark gaming register, GoTo's corporate-formal stiffness, and the all-caps enterprise-B2B register that Slack uses (Zoom stays sentence case to preserve consumer-friendliness).

The post-2024 AI Companion violet `#7B61FF` adds a second accent that signals "AI feature" without disrupting the dominant blue-on-white identity — a parallel to how Discord introduced its blurple secondary or how Notion uses its AI-specific accent only on AI surfaces. Compared to Discord's blurple-and-dark gaming register or Google Meet's Material-You softer pastels, Zoom sits in the middle: bright enough to feel consumer-friendly, corporate enough for IT buyers, geometric enough to feel modern.

**Named influences:**

- **Slack** — Communication-tool peer that converged into a parallel workspace platform; both ship product-screenshot-as-hero devices and treat their signature brand colour as the single visual anchor. *https://slack.com*
- **Google Meet** — Direct video-meeting competitor; adjacent precedent for clean-white video-product marketing surfaces and friendly-utility verb tone. *https://meet.google.com*
- **Microsoft Teams** — Enterprise-credibility peer; borrows the blue-on-white corporate-communications register and the persistent-download-CTA navigation pattern. *https://www.microsoft.com/microsoft-teams*
- **Discord** — Parallel real-time communication platform; informs the AI Companion violet accent direction and the comparison reference for "friendly-utility vs. gaming-dark" register choice. *https://discord.com*

## 14. Do's and Don'ts

### Do

- **Do** use Zoom Blue `#0B5CFF` as the single dominant accent. The entire system is organised around one colour; introducing a second competing brand colour breaks the discipline.
- **Do** use 8px-radius soft pill rect buttons with sentence-case copy. The radius and case are the visual middleground between consumer-friendly and corporate-credible.
- **Do** show in-product Zoom screenshots inside cards — the 3×3 gallery-view tile grid is the recurring brand identity device.
- **Do** use Almaden Sans for both display and body. The single-family discipline signals modern-utility.
- **Do** keep the Download CTA persistently visible in the top-right nav. Desktop-client-first distribution is part of the brand's commercial DNA.
- **Do** use the AI Companion violet `#7B61FF` *only* on AI-feature surfaces. It's a secondary accent, not a second brand colour.
- **Do** use blue-tinted shadows on cards. The faint Zoom Blue undertone in `rgba(11, 92, 255, 0.04)` reinforces the brand colour at the elevation layer.
- **Do** alternate white sections with Zoom-Blue-soft `#eef4ff` storytelling panels for tonal depth.
- **Do** use absolute black `#000` for headlines. The friendly-corporate authority register depends on it.
- **Do** maintain 8px radius on inputs, buttons, and dropdowns — the consistency is the corporate-utility signal.
- **Do** use sentence case on CTAs ("Sign Up, It's Free", "Plans & Pricing"). The friendly-corporate register requires it.
- **Do** show the gallery-view tile grid inside hero screenshots — it's the most recognised Zoom UI device.

### Don't

- **Don't** use all-caps button copy. That's Slack's enterprise-B2B register; Zoom's register is sentence-case friendly-corporate.
- **Don't** introduce a second competing brand colour. Zoom Blue is the brand; violet/cyan/orange/green are *product accents* used only on their specific product surfaces.
- **Don't** use the WebEx green-and-purple palette. Zoom explicitly displaced WebEx; using that palette signals legacy.
- **Don't** introduce a second type family. Almaden Sans handles everything; an editorial serif or a second display sans breaks the modern-utility register.
- **Don't** apply warm-tinted shadows. Zoom's shadows are blue-tinted-but-quiet, not warm-magazine.
- **Don't** ship a dark-mode marketing surface. The Zoom marketing is light-canonical; dark themes are product-layer decisions.
- **Don't** use hard 4px corners on buttons. That's Slack's enterprise-B2B 4px register; Zoom uses 8px for friendlier feel.
- **Don't** apply 9999-radius full pills to primary CTAs. Pills are reserved for badges and status chips; CTAs are 8px soft pill rects.
- **Don't** introduce gradients or rainbow meshes. The Zoom Blue + white duotone is the system.
- **Don't** demote the Download CTA to the footer. It belongs in the top-right nav — the desktop-client-first distribution device.
- **Don't** crowd the page beyond corporate-utility density. Section gutters at 64–96px are part of the rhythm.
- **Don't** use the AI Companion violet outside AI surfaces. It signals "AI feature" — diluting it across general marketing breaks the secondary-accent discipline.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #ffffff
bg-blue-soft: #eef4ff
bg-blue-deep: #0b1739
text: #000000
brand-zoom-blue: #0b5cff
brand-zoom-blue-deep: #0846cc
accent-ai-violet: #7b61ff
accent-cyan: #00b6f0
accent-orange: #ff7a59
accent-active-green: #3ec78f
border: #d6d8df
shadow-card: rgba(11, 92, 255, 0.04) 0 8px 24px, rgba(0, 0, 0, 0.04) 0 2px 8px
```

### Example Component Prompts

1. **"Create a hero in Zoom style — pure white `#ffffff` canvas, 40px headline in Almaden Sans weight 700 with `-0.018em` tracking, 18px Almaden Sans body in absolute black `#000` at 1.55 line-height, primary CTA in Zoom Blue `#0b5cff` 8px-radius soft pill rect with sentence-case white label `'Sign Up, It''s Free'` (Almaden Sans 600 / 16px, padding `12px 24px`), and a screenshot card to the right showing the Zoom gallery-view 3×3 tile grid. No gradient, no animation."**

2. **"Design a feature card in Zoom style — white `#ffffff` background, 12px radius, 1px `#eceef2` hairline border, 32px interior padding, 24px Almaden Sans 600 heading, 16px Almaden Sans 400 body, blue-tinted soft drop shadow `rgba(11, 92, 255, 0.04) 0 8px 24px, rgba(0, 0, 0, 0.04) 0 2px 8px`."**

3. **"Build a storytelling panel in Zoom-Blue-soft — full-bleed `#eef4ff` background, 16px radius, 80–96px vertical padding, 32px Almaden Sans 600 heading in absolute black `#000`, 18px Almaden Sans body, single primary Zoom Blue 8px-radius pill rect CTA with sentence-case copy."**

4. **"Compose a screenshot card showing the Zoom gallery view — white `#ffffff` outer card at 12px radius with `rgba(0, 0, 0, 0.10) 0 16px 40px -12px, rgba(11, 92, 255, 0.06) 0 4px 16px` shadow, no padding (screenshot fills frame), `#d6d8df` 1px border. Inner screenshot shows the 3×3 video-tile grid with meeting toolbar (mute, camera, raise-hand, reactions, chat, AI Companion) along the bottom."**

5. **"Render an AI Companion feature surface — violet-accent badge bg `#f0ecff` text `#5439d9` reading `'AI Companion'` (Almaden Sans 600 / 12px, pill 9999 radius), then a 32px Almaden Sans 600 heading in `#000`, then a violet-soft `#f0ecff` storytelling panel below explaining the AI feature with a Zoom Blue primary CTA `'Try AI Companion'`."**

6. **"Create the primary nav in Zoom style — 64px header height, white `#ffffff` background with 1px `#eceef2` bottom border, Zoom Blue `#0b5cff` wordmark logo, megamenu nav links (Products / Solutions / Resources) at 14px Almaden Sans 500 with Zoom-Blue-on-hover, right-aligned cluster: ghost 'Sign In', ghost 'Contact Sales', primary Zoom Blue 'Sign Up, It''s Free', and a persistent Zoom Blue 'Download' button with leading download-arrow icon."**

### Iteration Guide

1. **Start with pure white + Zoom-Blue-soft panels.** If everything is white-on-white, you've drifted toward Mintlify. The blue-soft `#eef4ff` storytelling panels are the warmth signal.
2. **Switch to Almaden Sans (or Helvetica Neue fallback).** Inter or system-ui collapses the brand into Vercel/Mintlify territory. The geometric Helvetica-derived forms are the differentiator.
3. **Use 8px corners, not pill, not 4px.** If buttons are pill-9999, the brand reads as Notion/Linear/Stripe. If buttons are 4px, the brand reads as Slack/Salesforce enterprise. The 8px corner is the Zoom friendly-corporate middleground.
4. **Keep CTA copy sentence case.** "Sign Up, It's Free" not "SIGN UP IT'S FREE" — sentence case is the friendly-corporate signal, all caps is Slack's register.
5. **Use Zoom Blue as the single dominant accent.** `#0b5cff` for CTA fill, wordmark, links. Don't introduce a second competing brand colour; AI Companion violet is *only* for AI surfaces.
6. **Apply blue-tinted shadows on cards.** `rgba(11, 92, 255, 0.04) 0 8px 24px, rgba(0, 0, 0, 0.04) 0 2px 8px` — subtle blue undertone, not pure neutral grey.
7. **Show product screenshots inside cards with the gallery-view tile grid.** The 3×3 video-tile grid is the recurring brand-identity device — it's how viewers know the screenshot is Zoom.
8. **Keep the Download CTA persistently visible in the top nav.** The desktop-client-first distribution device is part of the brand's commercial identity.

---

*Theme-toggle audit: score=0, signals=[none]*
