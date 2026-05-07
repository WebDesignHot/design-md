---
name: Slack
tagline: Aubergine workspace marketing — Salesforce-Avant-Garde headlines, all-caps 4px CTAs, white canvas with `#4a154b` accents.
updated_at: 2026-05-05T14:31:15+12:00
published_at: 2026-05-03T10:27:49+12:00
author: webdesignhot
source_url: https://slack.com
spec: design.md/v1.5
quality: curated
featured: false
categories: [saas]
tags: [light, sans, dense, structured, cool]
preview_swatch: ['#ffffff', '#611f69', '#1d1c1d']
related: [stripe, notion, linear]
description: 'Slack''s marketing site lives inside the Salesforce design system — Salesforce-Avant-Garde for display, Salesforce-Sans for body, and the inherited aubergine `#4a154b` brand that traces all the way back to the 2019 Pentagram-led rebrand. Buttons are sharp 4px corners with all-caps copy ("GET STARTED") and aubergine fills — a deliberate B2B register against the rounded SaaS norm. Where Notion runs cream + custom-sans-and-serif and Linear runs near-black + Inter Variable, Slack went the opposite direction post-Salesforce — 4px button radius, ALL-CAPS button copy, and a 1970s ITC Avant Garde Gothic cut as the display face. The aubergine primary `#4a154b` (sidebar) and `#611f69` (CTA) survive from the original rebrand and are the only chromatic legacy Salesforce kept; the rest of the marketing kit was reissued in 2022 under Salesforce design tokens. The system pairs aubergine accents with a warm cream `#f4ede4` panel ground for storytelling sections and an editorial blue `#1264a3` for the sidebar-highlight accent — the same triad that ships in the Slack desktop app''s aubergine theme. The result reads as licensed-software-not-consumer-SaaS — a deliberate enterprise-B2B signal that selects for IT-buyer audiences.'

colors:
  # Primary
  bg: '#ffffff'                          # primary page canvas
  bg-cream: '#f4ede4'                    # warm cream panel ground for storytelling sections
  bg-cream-deep: '#ebe1d2'               # deeper cream for emphasis bands
  surface: '#ffffff'                     # default card surface
  surface-elev: '#fafafa'                # subtle lift over white
  text: '#1d1c1d'                        # body copy and headlines (Slack's signature near-black)
  text-strong: '#000000'                 # rare absolute-black for hero accent
  text-medium: '#3a3a3a'                 # secondary heading colour
  text-soft: '#454545'                   # supporting copy
  text-muted: '#717274'                  # captions and metadata
  text-faint: '#9b9b9b'                  # eyebrows, helper
  text-disabled: '#c7c7c7'               # disabled microcopy
  # Brand
  brand: '#611f69'                       # primary CTA fill (article-theme-primary adjacent)
  brand-deep: '#4a154b'                  # sidebar-color, wordmark, dark accents
  brand-bright: '#7d2f87'                # hover-brightened aubergine
  brand-soft: '#f4e8f5'                  # aubergine wash for backgrounds
  brand-tint: '#d9b3dd'                  # aubergine tint for chips
  on-brand: '#ffffff'                    # white label on aubergine
  # Accent (the Pentagram triad)
  accent-blue: '#1264a3'                 # editorial blue — sidebar-highlight, recurring screenshot accent
  accent-blue-soft: '#e3f0fa'            # blue wash
  accent-yellow: '#ecb12f'               # Slack icon's top-left lozenge yellow
  accent-yellow-soft: '#fef4e0'          # yellow wash
  accent-green: '#2eb67d'                # Slack icon green lozenge
  accent-red: '#e01e5a'                  # Slack icon red lozenge
  # Interactive
  link: '#1264a3'                        # editorial blue link in body copy
  link-hover: '#0a4d7a'                  # deeper blue on hover
  selected-bg: '#f4ede4'                 # cream selected nav state
  disabled: '#c7c7c7'
  # Borders
  border: '#dddddd'                      # neutral border for inputs and dividers
  border-strong: '#aaaaaa'               # outlined buttons, emphasis dividers
  border-subtle: '#eeeeee'               # quietest separation
  border-brand: 'rgba(74, 21, 75, 0.30)' # aubergine-tinted hairline
  # Semantic
  success-bg: '#e3f5ec'                  # green wash from Slack triad
  success-text: '#1a7a4d'
  warning-bg: '#fef4e0'                  # yellow wash from Slack triad
  warning-text: '#7a5a00'
  danger-bg: '#fde6ee'                   # red wash from Slack triad
  danger-text: '#a8113a'
  info-bg: '#e3f0fa'                     # blue wash from Slack triad
  info-text: '#0a4d7a'

typography:
  display:
    family: 'Salesforce-Avant-Garde, system-ui, -apple-system, "Segoe UI", roboto, sans-serif'
    weights: [400, 600, 700]
    opentype-features: ['liga', 'kern']
  body:
    family: 'Salesforce-Sans, system-ui, -apple-system, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif'
    weights: [400, 600, 700]
    opentype-features: ['liga', 'kern']
  mono:
    family: 'Monaco, Menlo, Consolas, "Courier New", monospace'
    weights: [400]
    opentype-features: ['tnum']
  scale:
    display-hero:    { size: 64, weight: 700, lineHeight: 1.10, tracking: '-0.015em', family: display }
    display:         { size: 56, weight: 700, lineHeight: 1.10, tracking: '-0.012em', family: display }
    h1:              { size: 48, weight: 700, lineHeight: 1.12, tracking: '-0.012em', family: display }
    h2:              { size: 32, weight: 700, lineHeight: 1.20, tracking: '-0.008em', family: display }
    h3:              { size: 24, weight: 700, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h4:              { size: 20, weight: 700, lineHeight: 1.30, family: display }
    h5:              { size: 18, weight: 600, lineHeight: 1.35, family: body }
    eyebrow:         { size: 13, weight: 700, lineHeight: 1.40, tracking: '0.10em', family: body, transform: uppercase }
    body-large:      { size: 18, weight: 400, lineHeight: 1.50, family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.50, family: body }
    body-small:      { size: 14, weight: 400, lineHeight: 1.50, family: body }
    caption:         { size: 13, weight: 400, lineHeight: 1.40, family: body }
    caption-tabular: { size: 12, weight: 700, lineHeight: 1.40, family: mono, opentype: 'tnum' }
    label:           { size: 11, weight: 700, lineHeight: 1.30, family: mono, transform: uppercase }
    button:          { size: 14, weight: 700, lineHeight: 1.0,  family: body, tracking: '0.05em', transform: uppercase }
    code:            { size: 14, weight: 400, lineHeight: 1.55, family: mono }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.40, family: mono }
    quote-pull:      { size: 28, weight: 600, lineHeight: 1.30, family: display }

radius:
  micro: 2
  sm: 4
  md: 4
  lg: 8
  xl: 12
  pill: 9999

spacing:
  base: 4
  scale: [4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160]

layout:
  page-width: 1280
  prose-width: 720
  site-gutter: 'clamp(24px, 5vw, 64px)'
  header-height: 72
  grid-columns: 12
  section-rhythm: '80-128px'

components:
  button-primary:
    background: '#611f69'
    text: '#ffffff'
    padding: '19px 40px 20px'
    radius: 4
    border: 'none'
    font: 'Salesforce-Sans 700 / 14px / uppercase / 0.05em tracking'
    hover-bg: '#4a154b'
    active-bg: '#3a0f3b'
    use: 'Primary CTA — aubergine pill rect with all-caps copy, the brand''s defining 4px-corner enterprise-B2B button'
  button-secondary:
    background: 'transparent'
    text: '#611f69'
    padding: '19px 40px 20px'
    radius: 4
    border: '1px solid #611f69'
    font: 'Salesforce-Sans 700 / 14px / uppercase / 0.05em tracking'
    hover-bg: '#f4e8f5'
    use: 'Outlined twin — same shape, aubergine border, soft-aubergine hover wash'
  button-white:
    background: '#ffffff'
    text: '#1d1c1d'
    padding: '19px 40px 20px'
    radius: 4
    border: '1px solid #aaaaaa'
    font: 'Salesforce-Sans 700 / 14px / uppercase / 0.05em tracking'
    hover-bg: '#fafafa'
    use: 'White CTA on aubergine sections — used inside hero illustrations where aubergine is the bg'
  button-ghost:
    background: 'transparent'
    text: '#1d1c1d'
    padding: '8px 14px'
    font: 'Salesforce-Sans 600 / 14px'
    hover-text: '#611f69'
    use: 'Quiet third action — nav links, footer (sentence case allowed here)'
  card:
    background: '#ffffff'
    border: '1px solid #eeeeee'
    radius: 12
    padding: '32px'
    use: 'Default feature card — white panel with hairline border, soft drop shadow'
    shadow: 'rgba(0, 0, 0, 0.06) 0 8px 24px'
  card-cream:
    background: '#f4ede4'
    border: 'none'
    radius: 12
    padding: '40px 32px'
    use: 'Storytelling panel ground — warm cream for narrative sections'
  card-screenshot:
    background: '#ffffff'
    border: '1px solid #dddddd'
    radius: 8
    padding: '0'
    use: 'Wraps in-product Slack-app screenshots; the aubergine sidebar + blue highlight bar appears inside as branding device'
    shadow: 'rgba(0, 0, 0, 0.10) 0 16px 32px -8px'
  input:
    background: '#ffffff'
    border: '1px solid #dddddd'
    radius: 4
    padding: '12px 16px'
    font: 'Salesforce-Sans 400 / 16px'
    placeholder-color: '#9b9b9b'
    focus-ring: '0 0 0 2px #611f69'
    use: 'Form fields, search — 4px radius matches button corners'
  badge-eyebrow:
    background: 'transparent'
    text: '#717274'
    padding: '0'
    font: 'Salesforce-Sans 700 / 13px / uppercase / 0.10em'
    use: 'Section eyebrow — bold uppercase with wide tracking, no chrome'
  badge-aubergine:
    background: '#f4e8f5'
    text: '#4a154b'
    padding: '4px 10px'
    radius: 4
    font: 'Salesforce-Sans 700 / 12px'
    use: 'Aubergine-tinted pill for status / FEATURED labels (4px radius matches button system)'
  nav-link:
    background: 'transparent'
    text: '#1d1c1d'
    padding: '8px 14px'
    font: 'Salesforce-Sans 600 / 14px'
    hover-text: '#611f69'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-out: 'cubic-bezier(0.0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 300
  duration-page: 400
  reduced-motion: 'respects prefers-reduced-motion: reduce — all transitions become opacity-only, durations halved'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1440

shadows:
  none: 'none'
  ambient: 'rgba(0, 0, 0, 0.04) 0 1px 3px'
  card: 'rgba(0, 0, 0, 0.06) 0 8px 24px'
  screenshot: 'rgba(0, 0, 0, 0.10) 0 16px 32px -8px'
  popover: 'rgba(0, 0, 0, 0.08) 0 16px 40px -16px'
  modal: 'rgba(0, 0, 0, 0.12) 0 24px 64px -16px'
  ring: '0 0 0 2px #611f69'

accessibility:
  contrast-text-on-bg: 16.8                # #1d1c1d on #ffffff — AAA at all sizes
  contrast-text-on-brand: 9.6              # #ffffff on #611f69 — AAA at body sizes
  contrast-text-soft-on-bg: 9.0            # #454545 on #ffffff — AAA
  contrast-text-on-cream: 14.7             # #1d1c1d on #f4ede4 — AAA
  focus-ring: '2px solid #611f69 with 2px offset'
  reduced-motion-honored: true
  keyboard-nav: 'visible focus on every interactive surface; tab order matches visual'
  prose-line-length: 'capped at 720px for readability'

dark-mode: null                            # marketing surface is light-only; the in-product Slack workspace ships its own aubergine-dark theme separately
---

## 1. Visual Theme & Atmosphere

Slack's homepage is white — `#ffffff` background, `#1d1c1d` body text — with aubergine accents reserved for primary CTAs and the sidebar illustration assets that recur from the 2019 Pentagram rebrand. The hero is a single-column 1280px layout: H1 in **Salesforce-Avant-Garde** at `48px / 1.12` line-height, supporting paragraph in **Salesforce-Sans**, and a row of all-caps aubergine pills. The defining decisions are the **4px button corners** and **ALL-CAPS button copy** ("GET STARTED", "REQUEST A DEMO") — a deliberate enterprise-B2B register that sets the site apart from the rounded consumer-SaaS norm.

What makes this design distinctive vs. nearby alternatives: where Notion and Linear have moved toward rounded corners and sentence-case marketing copy, Slack went the opposite direction post-Salesforce. The 4px radius and ALL-CAPS buttons are an enterprise tell — they read as "licensed software" rather than "consumer SaaS." The Salesforce-Avant-Garde display face is a Salesforce cut of the 1970s ITC Avant Garde Gothic by Herb Lubalin, and its geometric round forms read distinctly retro — pulling the otherwise-corporate site toward a faint editorial register. Cream `#f4ede4` panel grounds (the warm story-section ground) keep the system from feeling sterile; this cream is the brand's secondary canvas, used for storytelling and customer-success panels.

The third register is the **Pentagram-survival aubergine + warm cream + editorial blue triad**. The aubergine `#4a154b` (sidebar) and `#611f69` (CTA) survive from the original Pentagram-led 2019 Slack rebrand and are the only chromatic legacy Salesforce kept. The cream `#f4ede4` panel ground and the editorial blue `#1264a3` (sidebar-highlight accent) form the Pentagram triad — the same three colors that ship inside the Slack desktop app's aubergine theme. When the marketing site shows in-product Slack screenshots, the aubergine sidebar + blue highlight bar appears inside the screenshot as a recurring branding device, anchoring the brand identity inside the product UI itself.

Atmospheric vocabulary that captures the feeling: *enterprise-B2B, all-caps-CTA, 4px-corners, Salesforce-licensed, aubergine-survival, Pentagram-triad, ITC-Avant-Garde, retro-corporate, cream-panel-ground, sidebar-illustration, editorial-blue-accent, warm-anchor, work-chat-warmth.* Every surface lands like a Salesforce property that has carefully preserved Slack's pre-acquisition brand DNA inside the parent design system.

**Key Characteristics**
- Pure white `#ffffff` canvas with cream `#f4ede4` panel grounds for storytelling
- **Salesforce-Avant-Garde** display — 1970s ITC Avant Garde cut, weight 700
- **Salesforce-Sans** body — Salesforce in-house sans, weight 400 / 600 / 700
- Aubergine primary `#611f69` (CTA) + `#4a154b` (sidebar wordmark) — Pentagram survivals
- **4px button corners** — deliberately not the SaaS pill convention
- **ALL-CAPS button copy** with `0.05em` tracking — enterprise-B2B register
- Cream `#f4ede4` warmth signal — prevents pure-white sterility
- Editorial blue `#1264a3` — sidebar-highlight accent inside screenshots
- Slack icon triad (yellow, green, red lozenges) — appears as decorative dingbats
- 1280px page width, 80px section gutters — corporate-web cadence
- Soft drop-shadows on cards (`rgba(0,0,0,0.06) 0 8px 24px`) — classic SaaS depth
- The Slack-app screenshot inside a card with its own shadow — dominant depth device

## 2. Color Palette & Roles

### Primary

- **bg** `#ffffff` — primary page canvas. Pure white, the Salesforce default.
- **bg-cream** `#f4ede4` — warm cream panel ground for storytelling sections. The brand's secondary canvas.
- **bg-cream-deep** `#ebe1d2` — deeper cream for emphasis bands and pricing-tier highlights.
- **text** `#1d1c1d` — body copy and headlines. Slack's signature near-black, slightly warmer than `#000`.
- **surface** `#ffffff` — card surface = page surface.
- **surface-elev** `#fafafa` — subtle lift over white for hover.

### Brand & Accent

- **brand** `#611f69` — primary CTA fill. The `--article-theme-primary` adjacent aubergine, slightly brighter than the sidebar shade.
- **brand-deep** `#4a154b` — `--sidebar-color`. Used on the Slack wordmark, the sidebar in app screenshots, and dark accent strokes.
- **brand-bright** `#7d2f87` — hover-brightened aubergine for emphasis.
- **brand-soft** `#f4e8f5` — aubergine wash for backgrounds.
- **brand-tint** `#d9b3dd` — aubergine tint for chips.
- **on-brand** `#ffffff` — white label on aubergine.

### Pentagram Triad (Slack Icon Lozenges)

- **accent-blue** `#1264a3` — editorial blue, used as sidebar-highlight inside screenshots and as link colour.
- **accent-blue-soft** `#e3f0fa` — blue wash for info backgrounds.
- **accent-yellow** `#ecb12f` — Slack icon's top-left lozenge yellow.
- **accent-yellow-soft** `#fef4e0` — yellow wash for warning backgrounds.
- **accent-green** `#2eb67d` — Slack icon green lozenge, used in the brand mark and decorative dingbats.
- **accent-red** `#e01e5a` — Slack icon red lozenge.

The three lozenge colors (yellow, green, red) plus the editorial blue and aubergine form the Pentagram-survival palette. The brand uses them sparingly on marketing chrome — usually only as decorative dingbats around the Slack mark — but they appear consistently inside in-product screenshots as the recurring identity device.

### Interactive

- **link** `#1264a3` — editorial blue links in body copy. Underlined on hover.
- **link-hover** `#0a4d7a` — deeper blue on hover.
- **selected-bg** `#f4ede4` — cream selected nav state.
- **disabled** `#c7c7c7` — disabled control text.

### Neutral Scale

- **near-black** `#1d1c1d` — primary text and headlines.
- **slate-medium** `#3a3a3a` — secondary heading colour.
- **slate-soft** `#454545` — supporting copy.
- **slate-muted** `#717274` — captions, metadata.
- **slate-faint** `#9b9b9b` — eyebrows, helper, placeholder.
- **slate-disabled** `#c7c7c7` — disabled microcopy.

### Surface & Borders

- **surface-0 (page)** `#ffffff` pure white.
- **surface-1 (cream panel)** `#f4ede4` warm cream.
- **surface-2 (cream-deep)** `#ebe1d2` deeper cream.
- **border** `#dddddd` — neutral border for inputs and divider lines (notably more visible than the 7–10% black hairlines of Mintlify or Anthropic — Slack's borders read as solid 1px corporate dividers).
- **border-strong** `#aaaaaa` — outlined buttons, emphasis dividers.
- **border-subtle** `#eeeeee` — quietest separation.
- **border-brand** `rgba(74, 21, 75, 0.30)` — aubergine-tinted hairline.

### Shadow Colors

Slack uses **classic SaaS shadows** — neutral grey, mid-opacity, soft-blur. Cards in the feature grid carry `rgba(0, 0, 0, 0.06) 0 8px 24px`; in-product screenshot cards carry the deeper `rgba(0, 0, 0, 0.10) 0 16px 32px -8px`. These are corporate-web shadows, not the warm-tinted minimal shadows of Anthropic or Descript. The shadow language signals "this is a Salesforce property" — solid, neutral, layered, distinctly *not* the flat-paper register of Linear/Mintlify nor the warm-magazine register of Anthropic/Descript.

### Semantic

- **success** — bg `#e3f5ec` (green wash from Slack triad), text `#1a7a4d`, border `rgba(46, 182, 125, 0.30)`.
- **warning** — bg `#fef4e0` (yellow wash from Slack triad), text `#7a5a00`, border `rgba(236, 177, 47, 0.30)`.
- **danger** — bg `#fde6ee` (red wash from Slack triad), text `#a8113a`, border `rgba(224, 30, 90, 0.30)`.
- **info** — bg `#e3f0fa` (blue wash from Slack triad), text `#0a4d7a`, border `rgba(18, 100, 163, 0.30)`.

The semantic colours come *from* the Pentagram triad — Slack's brand palette doubles as the semantic palette. Success isn't `green-500`; it's the Slack-icon green wash. The whole palette is one Pentagram-survival system.

## 3. Typography Rules

### Font Family

- **Display**: `Salesforce-Avant-Garde, system-ui, -apple-system, "Segoe UI", roboto, sans-serif` — Salesforce's licensed cut of the 1970s ITC Avant Garde Gothic by Herb Lubalin. Used at weight 400 / 600 / 700. The defining display face.
- **Body**: `Salesforce-Sans, system-ui, -apple-system, "Segoe UI", roboto, "Helvetica Neue", arial, sans-serif` — Salesforce's in-house display sans. Used at 400 / 600 / 700.
- **Mono**: `Monaco, Menlo, Consolas, "Courier New", monospace` — pragmatic system mono fallback. Slack does not license a proprietary mono.
- **OpenType features**: `liga` and `kern` always on; `tnum` enabled in mono for code blocks.

The two-family pairing (Avant-Garde for display, Sans for body) mirrors the **Salesforce Lightning Design System** pattern and sets Slack visually inside the Salesforce family rather than the SaaS family. This is a deliberate post-acquisition typographic decision.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| Display Hero | Avant-Garde | 64px | 700 | 1.10 | -0.015em | liga | Largest hero variant |
| Display | Avant-Garde | 56px | 700 | 1.10 | -0.012em | liga | Section intro at scale |
| H1 | Avant-Garde | 48px | 700 | 1.12 | -0.012em | liga | The canonical Slack hero |
| H2 | Avant-Garde | 32px | 700 | 1.20 | -0.008em | liga | Major section |
| H3 | Avant-Garde | 24px | 700 | 1.25 | -0.005em | — | Sub-section |
| H4 | Avant-Garde | 20px | 700 | 1.30 | normal | — | Card heading |
| H5 | Salesforce-Sans | 18px | 600 | 1.35 | normal | — | Inline emphasis (switches to body face) |
| Eyebrow | Salesforce-Sans | 13px | 700 | 1.40 | 0.10em | uppercase | Section pre-label — wide tracking |
| Body Large | Salesforce-Sans | 18px | 400 | 1.50 | normal | — | Lede paragraph |
| Body | Salesforce-Sans | 16px | 400 | 1.50 | normal | — | Default body copy |
| Body Small | Salesforce-Sans | 14px | 400 | 1.50 | normal | — | Captions, sidebars |
| Caption | Salesforce-Sans | 13px | 400 | 1.40 | normal | — | Image captions |
| Caption Tabular | Mono | 12px | 700 | 1.40 | normal | tnum | Stats, data labels |
| Label | Mono | 11px | 700 | 1.30 | uppercase | — | UI labels |
| Button | Salesforce-Sans | 14px | 700 | 1.0 | 0.05em | uppercase | The all-caps CTA register |
| Pull Quote | Avant-Garde | 28px | 600 | 1.30 | normal | — | Editorial pull-quote in display face |
| Code | Mono | 14px | 400 | 1.55 | normal | — | Inline + block |

### Principles

- **Two-family Salesforce duet.** Avant-Garde for display, Salesforce-Sans for body. Adding a third type family breaks the Salesforce design-system register; the brand explicitly avoids licensing a third face.
- **All-caps + 700 + 0.05em tracking on CTA copy.** "GET STARTED", "REQUEST A DEMO", "TRY FOR FREE" — the all-caps register is reserved for primary action labels, set in Salesforce-Sans at 14px / 700 with 0.05em letter-spacing. Body copy never goes all-caps.
- **Eyebrows at 13px / 700 / 0.10em uppercase.** The wide tracking (`0.10em`) is even wider than the CTA tracking — eyebrows read as section pre-labels with deliberate corporate-typographic emphasis.
- **Avant-Garde at weight 700 for display.** The 1970s geometric forms read at heavyweight; weight 400 or 500 would lose the retro-corporate punch that distinguishes Slack from sans-serif SaaS peers.
- **Salesforce-Sans at 400 / 600 / 700.** Body 400, UI labels and emphasis 600, button copy 700. The weight ladder is corporate-utilitarian.
- **Negative tracking compresses with size.** `-0.015em` at 64px, `-0.012em` at 48–56px, `-0.008em` at 32px, `-0.005em` at 24px, normal at 20px and below.
- **No italics in display.** Avant-Garde never italicises; Salesforce-Sans italics carry quoted titles only.
- **System mono fallback.** Monaco/Menlo/Consolas — Slack spends its type budget on Avant-Garde + Sans, not on a custom mono.

## 4. Component Stylings

### Buttons

**Primary (Aubergine 4px Pill Rect)**
- Background: `#611f69`. Text: `#ffffff`, Salesforce-Sans 700 / 14px / uppercase / `0.05em` tracking.
- Padding: `19px 40px 20px` (asymmetric vertical to optical-center the all-caps copy). Radius: `4px`. No border.
- Hover: bg → `#4a154b` (drops to sidebar shade); transition `200ms ease-standard`.
- Active: bg → `#3a0f3b`.
- Use: Primary CTA — *GET STARTED, REQUEST A DEMO, TRY FOR FREE.*

**Secondary (Aubergine Outlined)**
- Background: transparent. Text: `#611f69`. Border: `1px solid #611f69`. Radius: `4px`.
- Same padding and font as primary (all-caps maintained).
- Hover: bg → `#f4e8f5` aubergine wash.
- Use: Twin to primary — *WATCH THE DEMO, READ MORE.*

**White (Aubergine-Section Alternate)**
- Background: `#ffffff`. Text: `#1d1c1d`. Border: `1px solid #aaaaaa`. Radius: `4px`.
- Same padding and font as primary.
- Hover: bg → `#fafafa`.
- Use: Used inside aubergine-bg hero illustrations or panels where aubergine would not contrast.

**Ghost (Quiet)**
- Background: transparent. Text: `#1d1c1d`. No border.
- Padding: `8px 14px`. Salesforce-Sans 600 / 14px (sentence case allowed for nav).
- Hover: text → `#611f69` aubergine.
- Use: Nav links, footer secondary actions.

### Cards

**Default Card (Soft Shadow)**
- Background: `#ffffff`. Border: `1px solid #eeeeee`. Radius: `12px`. Padding: `32px`.
- Shadow: `rgba(0, 0, 0, 0.06) 0 8px 24px`.
- Hover: shadow intensifies to `rgba(0, 0, 0, 0.08) 0 12px 32px`; transition `200ms`.
- Use: Default feature card — distinctly more "elevated" than the in-product chrome.

**Cream Storytelling Panel**
- Background: `#f4ede4` warm cream. Border: none. Radius: `12px`. Padding: `40px 32px`.
- Use: Storytelling panel ground for narrative sections, customer-success spreads.

**Screenshot Card**
- Background: `#ffffff`. Border: `1px solid #dddddd`. Radius: `8px`. Padding: `0`.
- Shadow: `rgba(0, 0, 0, 0.10) 0 16px 32px -8px` (deeper than default card).
- Inner: in-product Slack-app screenshot at original aspect ratio, with the famous `#4a154b` aubergine sidebar + `#1264a3` blue highlight bar appearing inside.
- Use: The dominant depth device — wraps in-product screenshots in a slightly elevated frame.

### Badges, Tags, Pills

**Eyebrow Label** — no chrome, just type. Salesforce-Sans 700 / 13px / uppercase / `0.10em` tracking, colour `#717274`. Wide tracking distinguishes Slack eyebrows from sentence-case eyebrows used by Notion/Linear.

**Aubergine Tag** — bg `#f4e8f5`, text `#4a154b`, radius `4px`, padding `4px 10px`. Status / FEATURED / NEW labels. The 4px radius matches the button system.

**Slack-Triad Status** — uses lozenge colors as semantic chips (green for active, yellow for warning, red for offline).

### Inputs / Forms

- Background: `#ffffff`. Border: `1px solid #dddddd`. Radius: `4px` (matches buttons). Padding: `12px 16px`.
- Font: Salesforce-Sans 400 / 16px. Placeholder: `#9b9b9b`.
- Focus: `0 0 0 2px #611f69` aubergine ring, border → `#611f69`.
- Error: border → `#a8113a`, ring → `rgba(168, 17, 58, 0.30)`.
- Helper: caption 13px slate-muted below.

### Navigation

- Header height `72px`. Background `#ffffff` (sticky, with 1px bottom border in `#dddddd`).
- Logo: Slack wordmark in custom multi-color lozenge mark, aubergine `#4a154b` wordmark text.
- Nav links: Salesforce-Sans 600 / 14px, colour `#1d1c1d`, padding `8px 14px`. Hover → `#611f69` aubergine.
- Right-side CTA pair: ghost "SIGN IN" + primary aubergine pill rect "GET STARTED" (both all-caps).
- Mobile: full-screen sheet, links stack at 22px / Salesforce-Sans 600 (sentence case for legibility).

### Optional Components

**Pull Quote** — Avant-Garde 28px / 600, near-black `#1d1c1d` text, with a 4px aubergine vertical rule on the left edge. The display face carries the pull-quote (no serif option since Slack runs single-display-family).

**Footnote** — Salesforce-Sans 13px / 400, slate-muted; sits on a thin border-subtle rule.

**Code Block** — Mono 14px, bg `#f4ede4` cream-warm, radius `4px`, padding `16px 20px`, border `#dddddd`. Inline code: same font, bg `rgba(0, 0, 0, 0.06)`, padding `2px 6px`, radius `4px`.

**Tooltip** — bg `#1d1c1d`, text `#ffffff`, radius `4px`, padding `8px 12px`, font `13px / Salesforce-Sans 600`.

**Modal** — bg `#ffffff`, radius `12px`, shadow `rgba(0, 0, 0, 0.12) 0 24px 64px -16px`, max-width `560px`. White backdrop overlay at 70% opacity.

## 5. Layout Principles

### Spacing System

- **Base unit**: 4px.
- **Scale**: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128, 160 — corporate-typical.
- **Density observation**: Slack runs corporate-web density — moderately spaced, never as tight as Notion's product UI nor as airy as Anthropic's editorial spreads. Headlines float in 64–96px of margin; body paragraphs sit on 24px line gaps.

### Grid & Container

- **Page max width**: `1280px` — Salesforce-typical.
- **Site gutter**: `clamp(24px, 5vw, 64px)`.
- **Grid**: 12 columns with 24px gutters. Hero blocks span 8 columns center-aligned; capability rails span 4 columns each.
- **Hero treatment**: full-bleed white, 48px Avant-Garde H1 anchored center or left, all-caps aubergine pill below.

### Whitespace Philosophy

The page alternates between white sections and cream `#f4ede4` storytelling panels — the rhythm provides tonal depth without breaking into dark bands. Section gutters run **80–128px** between major regions; minor blocks sit on 48–64px gaps; intra-section spacing uses 16–32px. The 80px vertical rhythm is more compressed than Anthropic's 96–160px, signalling corporate-utilitarian rather than editorial-spacious.

### Section Cadence

- Hero (white, 48px Avant-Garde H1) → Capability Rail (white card grid with soft shadows) → Storytelling Panel (cream `#f4ede4` ground with customer-success copy) → Screenshot Card (white card containing in-product Slack UI with aubergine sidebar) → Pricing (white card grid) → CTA Banner (full-bleed cream or aubergine) → Footer (white, slate-muted).
- Cream panels alternate with white. The aubergine never becomes a section ground at full saturation — that would read as competitor (Twitch, Discord) territory.
- White-on-white sections separated by 1px `#eeeeee` border-subtle hairlines or by spacing.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Decorative dividers, inline chip corners |
| Standard (sm) | 4px | Buttons, inputs, dropdowns — the dominant Slack radius |
| Comfortable (md) | 4px | Same as sm — Slack doesn't differentiate |
| Relaxed (lg) | 8px | Screenshot cards, code blocks |
| Featured (xl) | 12px | Cards, modals, storytelling panels |
| Pill | 9999px | Reserved for status chips and brand-specific uses |

Slack's signature shape is the **4px button** — distinctly *not* a pill. The system has two registers: 4px on actionable elements (buttons, inputs, status chips) and 12px on cards. There are no full pills (`9999px`) on the marketing surface for primary actions — Slack's brand geometry rejects the SaaS pill convention entirely. This 4px-vs-pill choice is the second-most-recognisable feature after the all-caps CTA copy.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no shadow | Default page surface, hero, body sections |
| 1 | Cream tier (`#f4ede4` on white) | Storytelling panels |
| 2 | `rgba(0, 0, 0, 0.04) 0 1px 3px` | Sticky nav, dropdowns |
| 3 | `rgba(0, 0, 0, 0.06) 0 8px 24px` | Default cards (the canonical Slack card shadow) |
| 4 | `rgba(0, 0, 0, 0.10) 0 16px 32px -8px` | Screenshot cards (deeper for emphasis) |
| 5 | `rgba(0, 0, 0, 0.12) 0 24px 64px -16px` | Modals, dialogs |

### Shadow Philosophy

Slack uses **classic SaaS shadows** — neutral grey, mid-opacity, soft-blur. The default card shadow `rgba(0, 0, 0, 0.06) 0 8px 24px` is the canonical Slack lift; in-product screenshot cards step deeper to `rgba(0, 0, 0, 0.10) 0 16px 32px -8px`, providing visual emphasis on the recurring screenshot device. Cream-on-white panel transitions provide tonal depth without borders. The screenshot-inside-mockup pattern (a Slack desktop window rendered inside a feature card with its own shadow) is the dominant depth device on the marketing surface.

The shadows are explicitly *not* warm-tinted (Anthropic) or wine-tinted (Descript) — they're pure neutral grey, reinforcing the corporate-Salesforce register.

## 8. Interaction & Motion

### Easing Curves

- `ease-standard`: `cubic-bezier(0.4, 0, 0.2, 1)` — Material-style; default for hover, focus, color transitions.
- `ease-emphasized`: `cubic-bezier(0.2, 0, 0, 1)` — punchier exit; modal enter, hero reveal.
- `ease-out`: `cubic-bezier(0.0, 0, 0.2, 1)` — gentle settle; dropdown reveal.

### Duration Buckets

- **Fast (100ms)** — colour transitions, focus rings, link hovers.
- **Standard (200ms)** — button hover, card hover, dropdown reveal.
- **Slow (300ms)** — modal enter/exit, page section fade-in.
- **Page (400ms)** — route transitions, hero reveal sequences.

### Per-Component Micro-States

- **Button hover (aubergine)**: bg `#611f69` → `#4a154b`; transition `200ms ease-standard`. No lift, no scale.
- **Button hover (outlined)**: bg transparent → `#f4e8f5` aubergine wash.
- **Card hover**: shadow intensifies from `rgba(0, 0, 0, 0.06) 0 8px 24px` to `rgba(0, 0, 0, 0.08) 0 12px 32px`; no border change.
- **Link hover**: colour `#1264a3` → `#0a4d7a` over 100ms; underline animates in.
- **Input focus**: 2px aubergine ring fades in over 100ms; border darkens to aubergine.
- **Screenshot card hover**: shadow deepens further; no scale, no rotate.

### Page Transitions

Hero text fades in over 400ms with 16px translate-up; below-fold sections use `IntersectionObserver` to fade in at 80% viewport, 300ms duration, no translate. The brand does not use scroll-pinned animations — every section is independently navigable.

### Reduced Motion

`@media (prefers-reduced-motion: reduce)` — all transitions become opacity-only, durations halved. Translate animations are disabled entirely; scroll-linked reveals snap to final state.

## 9. Accessibility & A11y

### Contrast Pairs

- **`#1d1c1d` text on `#ffffff` bg**: 16.8:1 — AAA at all sizes.
- **`#454545` text on `#ffffff` bg**: 9.0:1 — AAA at body sizes.
- **`#717274` text on `#ffffff` bg**: 5.0:1 — AA at body sizes.
- **`#ffffff` text on `#611f69` aubergine button**: 9.6:1 — AAA at body sizes.
- **`#1d1c1d` text on `#f4ede4` cream panel**: 14.7:1 — AAA at all sizes.
- **`#1264a3` link on `#ffffff` bg**: 6.4:1 — AAA.
- **`#4a154b` text on `#f4e8f5` aubergine chip**: 11.2:1 — AAA.

### Focus Indicators

- Default focus ring: `0 0 0 2px #611f69` aubergine with 2px offset on white pages.
- On dark surfaces (rare aubergine sections): `0 0 0 2px #ffffff`.
- All interactive surfaces must have a visible focus state — no `outline: none` without a replacement.

### ARIA Patterns

- **Navigation**: `<nav aria-label="Main">` with skip-link to main content.
- **Disclosure**: `<button aria-expanded aria-controls>` for collapsible sections.
- **Dialog**: `role="dialog" aria-modal="true" aria-labelledby` with focus trap and Esc-to-close.
- **Combobox** (search, regional selector): `role="combobox" aria-expanded aria-autocomplete="list"`.
- **Live regions**: `aria-live="polite"` for form validation messages.
- **Screenshot cards**: include `<figure>` + `<figcaption>` describing the in-product UI shown.

### Keyboard Navigation

- Tab order matches visual flow: skip-link → nav → hero CTA → main content → footer.
- All buttons, links, inputs reachable via Tab; modals trap focus inside until dismissed.
- `Esc` closes modals and the mobile menu sheet.
- Arrow keys navigate within tab groups (FAQ, pricing-tier comparisons).

### Screen Reader Hints

- All-caps button copy is set with `text-transform: uppercase` (CSS), not capital letters in markup, so screen readers announce the natural-case word ("Get started" not "G-E-T-S-T-A-R-T-E-D").
- Decorative Slack-icon lozenges have `aria-hidden="true"`.
- Icon-only buttons have `aria-label`.
- The Slack wordmark uses `aria-label="Slack"`.

### Reduced Motion

Honoured via the global media query. All translate/scale animations become opacity-only; durations halve.

## 10. Responsive Behavior

### Breakpoints

| Name | Width | Use |
|---|---|---|
| Mobile | < 640px | Single column, full-bleed sections, 32px H1 |
| Tablet | 640–1024px | 2-column rails, 40px H1 |
| Desktop | 1024–1280px | Full 12-col grid, 48px H1, 720px prose |
| Wide | 1280–1440px | Site max width hits |
| Ultra | > 1440px | Page locks to 1280, gutters expand |

### Touch Targets

- Minimum tap target: 44×44px (WCAG AAA).
- Buttons: 56px minimum height on mobile (the asymmetric 19/20px vertical padding × 2 + line-height ≈ 56px).
- Nav link tap area: 44×44px even when visual padding is smaller.

### Collapsing Strategy

- **Header**: full nav at ≥1024px; hamburger sheet below.
- **Hero**: 64px display → 48px H1 → 40px → 32px across breakpoints.
- **Capability grid**: 4-up at desktop, 2-up at tablet, 1-up at mobile.
- **Body width**: 720px → fluid 90vw at mobile.
- **All-caps CTA**: maintains uppercase + 0.05em tracking on mobile (font size scales down to 13px to compensate).
- **Screenshot cards**: maintain 8:5 aspect ratio across viewports; the in-product UI sits inside without layout shift.
- **Section spacing**: 128px → 80px → 56px across sizes.

### Image Behavior

- In-product screenshots use `srcset` with 1x/2x/3x; aspect-ratio enforced.
- Hero imagery uses `aspect-ratio` to prevent layout shift.
- Lazy-loading on below-fold images; eager on hero.

### Container Queries

Used inside capability cards to switch icon position when card width crosses 320px (icon-left vs. icon-top). Used inside pricing tier cards to switch from horizontal to vertical feature lists on narrow viewports.

## 11. Content & Voice

### Tone

**Corporate-warm, work-positive, enterprise-direct.** Slack writes like a workplace tool that has been bought by Salesforce and now needs to sell to IT departments while preserving the original Slack personality. Headlines pose work-positive claims ("Where work happens"); subheads explain enterprise capabilities; product copy carries small jokes carried over from pre-Salesforce Slack but at lower density. The voice is the inverse of consumer-friendly Notion/Linear — it's intentionally enterprise, intentionally B2B, intentionally licensed-software.

### Microcopy Patterns

- **Button verbs (all-caps)**: "GET STARTED," "REQUEST A DEMO," "TRY FOR FREE," "TALK TO SALES." The all-caps register is reserved for primary CTAs only.
- **Button verbs (sentence case, ghost/secondary)**: "Watch the demo," "Read more," "Sign in." Used for nav and quiet third actions.
- **Error messages**: "Something went wrong. Please try again or [contact support]." Standard corporate-polite.
- **Success confirmations**: "Saved." "Thanks — your request was submitted. We'll be in touch soon." Brief, accountable.
- **Loading states**: "Loading…" "Connecting…" — context-specific where possible.

### Empty States

What they say: explain the state and offer the next step. *"No channels yet. Create one or join a teammate's channel to get started."*
What they don't say: "Oops!", "Whoops!", any apologetic exclamation. Empty states are normal, not failures.

### CTA Verb Conventions

- Primary on hero: "GET STARTED," "REQUEST A DEMO," "TRY FOR FREE"
- Secondary: "WATCH THE DEMO," "READ THE GUIDE," "SEE PRICING"
- Footer: "Read the blog," "Browse integrations," "Sign in," "Help center"

The all-caps register is the brand's deliberate enterprise-B2B signal; it sets Slack apart from Notion/Linear/Vercel's sentence-case register. Slack doesn't trade on consumer-friendly approachability — it trades on enterprise-software credibility.

## 12. Dark Mode & Theming

**Marketing surface is light-only — no dark variant offered.** The Slack marketing site at `slack.com` is intentionally light-canonical: the cream `#f4ede4` panels, pure-white surfaces, and aubergine accents are calibrated for a light canvas. A dark mode would require re-keying the entire palette and would dilute the corporate-Salesforce register that distinguishes Slack from Discord (which ships dark-canonical) and from Twitch (which is dark-default).

The product UI (the Slack workspace itself) handles its own theming separately and ships several theme variants — including the famous "Aubergine" theme that uses `#4a154b` as the sidebar ground, the "Hoth" white-light theme, and several user-configurable variants. That product theming is documented at the product layer, not on the marketing surface. When the marketing site shows in-product Slack screenshots, the screenshots usually display the Aubergine theme so the brand identity (aubergine sidebar + blue highlight bar) is visible inside the marketing context.

If a downstream surface ever needed a dark companion (e.g. a future product launch keynote page), the rule would be: keep the aubergine accents at full saturation, swap white for `#1a1a1a`, lift cards to `#252525`, and replace cream panels with `#2a2520` — but this is not currently shipped on the marketing surface.

## 13. Lineage & Influences

Slack's design DNA is **Pentagram-rebrand survival inside the Salesforce design system**. The aubergine `#4a154b` and `#611f69` accents survive from the 2019 Pentagram-led Slack rebrand and are the only chromatic legacy preserved post-Salesforce-acquisition. The Salesforce-Avant-Garde + Salesforce-Sans typographic pairing comes from the **Salesforce Lightning Design System** — a deliberate post-acquisition decision to position Slack visually inside the Salesforce family rather than the SaaS/work-tool family. The 4px button radius, ALL-CAPS button copy, and 1280px page width are Salesforce design-system standards.

What it inherits: Pentagram's 2019 Slack rebrand (the aubergine palette, the multi-color lozenge mark, the warm cream secondary canvas); Salesforce Lightning Design System (Salesforce-Sans / Avant-Garde, 4px corner CTA register, soft-shadow card pattern); ITC Avant Garde Gothic by Herb Lubalin (the 1970s geometric source for Salesforce-Avant-Garde). What it borrows from contemporaries: Stripe's hairline-border restraint (used softer here), corporate-web shadow conventions for cards. What it rejects: rounded-pill consumer-SaaS conventions (Notion, Linear), illustrated mascots (Discord, Mailchimp), dark-canonical themes (Discord), neon brand accents (Replit).

**Named influences:**

- **Pentagram (2019 Slack rebrand)** — Aubergine `#4a154b` and the original wordmark survive the Salesforce acquisition. *https://www.pentagram.com/work/slack*
- **Salesforce Lightning Design System** — Salesforce-Sans / Avant-Garde + 4px corner CTA register. *https://lightningdesignsystem.com*
- **ITC Avant Garde Gothic (Herb Lubalin, 1970)** — The 1970s display cut Salesforce-Avant-Garde derives from. *https://en.wikipedia.org/wiki/ITC_Avant_Garde*
- **Salesforce in-house brand team** — Post-acquisition design-system unification, marketing-kit reissue (2022).
- **Stripe** — Adjacent precedent for hairline-border restraint and editorial-blue link colour.
- **The Slack pre-Salesforce brand team** — Original aubergine palette, multi-color lozenge mark, cream cream-and-color storytelling panels.

## 14. Do's and Don'ts

### Do

- **Do** use 4px button corners and ALL-CAPS button copy. Slack's marketing buttons are deliberately enterprise-B2B; a rounded pill with sentence case would erase the differentiation from Notion/Linear.
- **Do** use the cream `#f4ede4` ground for storytelling panels. It's the warmth signal that keeps the white-canvas sections from feeling sterile.
- **Do** pair Salesforce-Avant-Garde with Salesforce-Sans. The two-family marriage is a quiet signature of Salesforce-owned products.
- **Do** preserve the aubergine triad — `#4a154b` for sidebar/wordmark, `#611f69` for CTA. Both survive the Pentagram rebrand and are the brand's defining colors.
- **Do** show in-product Slack screenshots with the Aubergine theme so the sidebar + highlight bar appear as a recurring branding device.
- **Do** use eyebrows at 13px / 700 / `0.10em` uppercase tracking. The wide tracking distinguishes Slack eyebrows from sentence-case eyebrows.
- **Do** ship classic SaaS shadows — neutral grey, mid-opacity, soft-blur. `rgba(0, 0, 0, 0.06) 0 8px 24px` is the canonical card shadow.
- **Do** use editorial blue `#1264a3` for body links. The Pentagram triad's blue is the link layer.
- **Do** alternate white sections with cream `#f4ede4` storytelling panels for tonal depth.
- **Do** maintain 4px radius on inputs, buttons, dropdowns, and chips — the consistency is the corporate signal.

### Don't

- **Don't** use full pills (`9999px`) anywhere on the marketing surface. The system rejects that convention entirely.
- **Don't** spread aubergine to full panel grounds. It's a CTA fill and a sidebar illustration color — backgrounds at that saturation read as competitor (Twitch, Discord) territory.
- **Don't** introduce a third type family. Salesforce-Sans handles body, labels, and mono captions; Salesforce-Avant-Garde handles display. An editorial serif breaks the system.
- **Don't** drop the all-caps register from primary CTAs. Going to sentence-case erases the enterprise-B2B differentiation.
- **Don't** apply warm-tinted shadows. Slack's shadows are neutral grey — corporate-web, not editorial-warm.
- **Don't** ship a dark-mode marketing surface. The Slack marketing is light-canonical; dark themes are product-layer decisions.
- **Don't** use rounded SaaS-pill CTAs. The 4px corner is part of the brand discipline.
- **Don't** introduce purple gradients or rainbow meshes. The aubergine + cream + editorial-blue triad is the system.
- **Don't** mix consumer-SaaS verbs ("Sign up free!", "Get started today!") with the brand voice. The tone is enterprise-warm.
- **Don't** crowd the page beyond corporate-web density. Section gutters at 80–128px are part of the rhythm.

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg: #ffffff
bg-cream: #f4ede4
text: #1d1c1d
brand-aubergine: #611f69
brand-aubergine-deep: #4a154b
accent-blue: #1264a3
accent-yellow: #ecb12f
accent-green: #2eb67d
accent-red: #e01e5a
border: #dddddd
shadow-card: rgba(0, 0, 0, 0.06) 0 8px 24px
```

### Example Component Prompts

1. **"Create a hero in Slack style — pure white `#ffffff` canvas, 48px headline in Salesforce-Avant-Garde weight 700 with `-0.012em` tracking, 18px Salesforce-Sans body in near-black `#1d1c1d` at 1.5 line-height, single primary CTA in aubergine `#611f69` 4px-radius pill rect with all-caps white label `'GET STARTED'` (Salesforce-Sans 700 / 14px / `0.05em` tracking, padding `19px 40px 20px`), no gradient, no animation. Reading column capped at 720px."**

2. **"Design a feature card in Slack style — white `#ffffff` background, 12px radius, 1px `#eeeeee` hairline border, 32px interior padding, 24px Salesforce-Avant-Garde 700 heading, 16px Salesforce-Sans 400 body, soft drop shadow `rgba(0, 0, 0, 0.06) 0 8px 24px`, hover intensifies shadow to `rgba(0, 0, 0, 0.08) 0 12px 32px`."**

3. **"Build a storytelling panel — full-bleed cream `#f4ede4` background, 80–128px vertical padding, 32px Salesforce-Avant-Garde 700 heading in near-black `#1d1c1d`, 18px Salesforce-Sans body in near-black, single primary aubergine pill rect CTA with all-caps copy."**

4. **"Compose a screenshot card with in-product Slack UI — white `#ffffff` outer card at 8px radius with `rgba(0, 0, 0, 0.10) 0 16px 32px -8px` shadow, no padding (screenshot fills frame), `#dddddd` 1px border. Inner screenshot shows the Aubergine theme with `#4a154b` sidebar and `#1264a3` highlight bar — the recurring brand-identity device."**

5. **"Render an eyebrow + section header pair — Salesforce-Sans 700 caps at 13px / `0.10em` tracking / `#717274`, 8px gap, then Salesforce-Avant-Garde 32px / 700 / `-0.008em` in near-black on white."**

6. **"Create the primary nav — 72px header height, white `#ffffff` background with 1px `#dddddd` bottom border, Slack lozenge logo + aubergine `#4a154b` wordmark, links 14px Salesforce-Sans 600 (sentence case for nav) with aubergine-on-hover, right-aligned ghost 'Sign in' + aubergine 4px-radius pill rect 'GET STARTED' (all-caps, Salesforce-Sans 700) pair."**

### Iteration Guide

1. **Start with pure white + cream panels.** If everything is white-on-white, you've drifted toward Mintlify. The cream `#f4ede4` storytelling panels are the warmth signal.
2. **Switch to Salesforce-Avant-Garde + Salesforce-Sans.** Inter or system-ui collapses the brand into Vercel/Mintlify territory. The 1970s ITC Avant Garde geometric forms are the differentiator.
3. **Drop the pill, use 4px.** If buttons are pill-9999 or even 8–12px, the brand reads as Notion/Linear/Vercel. The 4px corner is the Salesforce-system tell.
4. **Switch CTA copy to all-caps.** "Get Started" → "GET STARTED" with `0.05em` tracking, weight 700, 14px. The register flip is the enterprise-B2B signal.
5. **Use the aubergine triad.** `#611f69` for CTA fill, `#4a154b` for wordmark/sidebar, `#1264a3` for body links. Don't introduce a fourth color or shift the aubergine hue.
6. **Add classic SaaS shadows on cards.** `rgba(0, 0, 0, 0.06) 0 8px 24px` — neutral grey, soft, mid-opacity. Don't tint the shadow warm or cool.
7. **Show product screenshots inside cards with Aubergine theme.** The aubergine sidebar + blue highlight inside the screenshot is a recurring brand-identity device.
8. **Calm the verbs in non-CTA copy, but keep CTAs all-caps.** "Watch the demo" stays sentence case for ghost actions; "REQUEST A DEMO" stays all-caps for primary. The register split is part of the system.
