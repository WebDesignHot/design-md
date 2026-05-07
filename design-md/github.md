---
name: GitHub
tagline: Dark-canvas developer-platform marketing — Mona Sans variable headings, lime-green accent, near-black ground.
updated_at: 2026-05-06T15:27:43+12:00
published_at: 2026-05-03T10:27:49+12:00
author: webdesignhot
source_url: https://github.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [dev-tools, saas]
tags: [dark, sans, mono, dense, structured, bright]
preview_swatch: ['#0d1117', '#5fed83', '#f0f6fc']
related: [linear, vercel, anthropic]
description: 'GitHub''s marketing surface is a dark-mode developer canvas anchored by Mona Sans (the variable display family GitHub commissioned and open-sourced) and a lime-green `#5fed83` accent that punctuates an otherwise restrained near-black ground. The system reads as a confident extension of the product chrome — not a separate marketing layer. Bento-grid cards open the door to a multi-hue decorative palette (coral, lemon, indigo, pink) used inside icon backgrounds while the chrome stays disciplined and dark.'

themes:
  default: dark
  available: [dark, light]
  switch-via: 'data-color-mode attribute on <html>; persisted as cookie + localStorage; respects prefers-color-scheme'

colors:
  dark:
    bg: '#0d1117'                # canvas-default — GitHub dark ground
    bg-soft: '#0f1511'           # canvas-subtle — bento card body
    bg-elev: '#191f1b'           # accordion idle / hover-state cards
    surface: '#0f1511'           # primary card surface
    surface-soft: '#161b22'      # secondary surface — code blocks
    surface-strong: '#21262d'    # tertiary — inline rows
    text: '#f0f6fc'              # primary copy
    text-strong: '#ffffff'       # display emphasis
    text-soft: '#a4aea6'         # captions, supporting metadata
    text-muted: '#7d8590'        # secondary text
    text-faint: '#484f58'        # disabled
    brand: '#5fed83'             # lime-green accent (matches diff "added")
    brand-emphasis: '#08872b'    # darker emphasis-grade green for accent CTAs
    brand-soft: 'rgba(95, 237, 131, 0.15)'  # tinted background
    on-brand: '#000000'          # text on lime CTA
    primary-cta-bg: '#ffffff'    # white-on-black primary inversion
    primary-cta-text: '#000000'
    primary-cta-hover: '#f0f6fc'
    link: '#79c0ff'              # GitHub link blue (product carryover)
    link-hover: '#a5d6ff'
    border: '#353d37'            # neutral low-contrast divider
    border-soft: '#21262d'       # nested row border
    border-strong: '#484f58'     # input + secondary border
    bento-coral: '#ff6b6b'       # decorative — bento icon background
    bento-lemon: '#ffd43b'
    bento-indigo: '#7c5cff'
    bento-pink: '#ff7eb6'
    bento-cyan: '#56d4dd'
    diff-add-bg: 'rgba(46, 160, 67, 0.15)'
    diff-remove-bg: 'rgba(248, 81, 73, 0.15)'
    semantic-success: '#3fb950'
    semantic-warning: '#d29922'
    semantic-danger: '#f85149'
    semantic-info: '#58a6ff'
    shadow-tint: 'rgba(0, 0, 0, 0.5)'

  light:
    bg: '#ffffff'                # canvas-default light — pure white per Primer light tokens
    bg-soft: '#f6f8fa'           # canvas-subtle — bento card body, repository file rows
    bg-elev: '#eaeef2'           # hovered card / accordion-hovered surface
    surface: '#ffffff'           # primary card surface
    surface-soft: '#f6f8fa'      # secondary surface — code blocks
    surface-strong: '#d0d7de'    # tertiary — inline rows
    text: '#1f2328'              # primary copy — fg-default
    text-strong: '#000000'       # display emphasis
    text-soft: '#656d76'         # captions, supporting metadata — fg-muted
    text-muted: '#6e7781'        # secondary — fg-subtle
    text-faint: '#8c959f'        # disabled
    brand: '#1f883d'             # success/lime green primary in light mode
    brand-emphasis: '#1a7f37'    # darker emphasis green
    brand-soft: 'rgba(31, 136, 61, 0.10)'
    on-brand: '#ffffff'          # white text on green CTA
    primary-cta-bg: '#1f2328'    # near-black CTA in light mode (mirrors dark's white CTA)
    primary-cta-text: '#ffffff'
    primary-cta-hover: '#000000'
    link: '#0969da'              # GitHub link blue light — fg-accent
    link-hover: '#0550ae'
    border: '#d0d7de'            # default light border
    border-soft: '#eaeef2'
    border-strong: '#afb8c1'
    bento-coral: '#cf222e'       # adapted bento accents for light contrast
    bento-lemon: '#bf8700'
    bento-indigo: '#5e35b1'
    bento-pink: '#bf3989'
    bento-cyan: '#0e7c86'
    diff-add-bg: 'rgba(46, 160, 67, 0.15)'
    diff-remove-bg: 'rgba(207, 34, 46, 0.15)'
    semantic-success: '#1a7f37'
    semantic-warning: '#9a6700'
    semantic-danger: '#cf222e'
    semantic-info: '#0969da'
    shadow-tint: 'rgba(31, 35, 40, 0.10)'

typography:
  display:
    family: '"Mona Sans", "MonaSansFallback", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 425, 460, 500, 600]
    opentype: ['kern', 'liga', 'ss03']
  body:
    family: '"Mona Sans", "MonaSansFallback", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif'
    weights: [400, 425, 500]
    opentype: ['kern', 'liga']
  mono:
    family: '"Mona Sans Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace'
    weights: [400, 500]
    opentype: ['kern', 'tnum']
  alt:
    family: '"Hubot Sans", "Mona Sans", sans-serif'
    weights: [400, 500, 600]
  scale:
    display-hero:   { size: 64, weight: 425, lineHeight: 1.08, tracking: '-0.035em', family: display, opentype: 'kern, ss03' }
    display-large:  { size: 56, weight: 425, lineHeight: 1.10, tracking: '-0.03em',  family: display, opentype: 'kern' }
    h1:             { size: 48, weight: 460, lineHeight: 1.12, tracking: '-0.03em',  family: display }
    h2:             { size: 40, weight: 460, lineHeight: 1.15, tracking: '-0.025em', family: display }
    h3:             { size: 32, weight: 500, lineHeight: 1.20, tracking: '-0.02em',  family: display }
    h4:             { size: 24, weight: 500, lineHeight: 1.30, tracking: '-0.015em', family: display }
    body-large:     { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:           { size: 14, weight: 400, lineHeight: 1.50, tracking: '0',        family: body }
    body-small:     { size: 13, weight: 400, lineHeight: 1.50, tracking: '0',        family: body }
    label-mono:     { size: 11, weight: 500, lineHeight: 1.40, tracking: '0.06em',   family: mono, opentype: 'tnum', transform: 'uppercase' }
    button:         { size: 14, weight: 500, lineHeight: 1.00, tracking: '0',        family: body }
    button-small:   { size: 13, weight: 500, lineHeight: 1.00, tracking: '0',        family: body }
    link:           { size: 14, weight: 500, lineHeight: 1.50, tracking: '0',        family: body }
    caption:        { size: 12, weight: 400, lineHeight: 1.45, tracking: '0',        family: body }
    caption-small:  { size: 11, weight: 400, lineHeight: 1.40, tracking: '0',        family: body }
    micro:          { size: 11, weight: 500, lineHeight: 1.30, tracking: '0.04em',   family: body }
    code-body:      { size: 13, weight: 400, lineHeight: 1.45, tracking: '0',        family: mono }
    code-bold:      { size: 13, weight: 500, lineHeight: 1.45, tracking: '0',        family: mono }
    code-label:     { size: 11, weight: 500, lineHeight: 1.40, tracking: '0.04em',   family: mono, transform: 'uppercase' }

radius:
  micro: 4
  sm: 6
  md: 8
  lg: 12
  xl: 16
  featured: 24
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
  section-sm: 48
  section: 96
  section-lg: 128
  scale: [4, 8, 12, 16, 20, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-entrance: 'cubic-bezier(0, 0, 0.2, 1)'
  duration-fast: 100
  duration-standard: 200
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — Bento card hover lifts collapse to opacity; River visual transitions instant'

breakpoints:
  mobile: 544
  tablet: 768
  desktop: 1280
  wide: 1536

shadows:
  ambient: 'rgba(0, 0, 0, 0.30) 0 1px 2px'
  standard: 'rgba(0, 0, 0, 0.40) 0 4px 12px'
  elevated: 'rgba(0, 0, 0, 0.50) 0 12px 32px'
  deep: 'rgba(0, 0, 0, 0.70) 0 24px 48px'
  ring: '0 0 0 2px #5fed83'
  river: 'rgba(0, 0, 0, 0.60) 0 30px 60px -30px, rgba(0, 0, 0, 0.40) 0 18px 36px -18px, rgba(0, 0, 0, 0.30) 0 8px 16px -8px'

accessibility:
  contrast-text-on-bg: 17.4         # #f0f6fc on #0d1117 — AAA
  contrast-text-on-brand: 13.8      # #000000 on #5fed83 — AAA
  contrast-text-on-cta: 21.0        # #000000 on #ffffff — AAA
  contrast-soft-on-bg: 9.4          # #a4aea6 on #0d1117 — AAA
  focus-ring: '2px solid #5fed83 with 2px offset on #0d1117'
  reduced-motion-honored: true
  keyboard-nav: 'tab order follows visual; skip-link visible on focus; arrow keys nav Bento cards'

components:
  button-primary:
    background: '#ffffff'
    text: '#000000'
    radius: 6
    padding: '8px 16px'
    height: 36
    font: button
    hover: 'background #f0f6fc'
    active: 'background #d1d7e0'
    use: 'primary CTA — Sign up / Get Started, white-on-black inversion'
  button-accent:
    background: '#5fed83'
    text: '#000000'
    radius: 6
    padding: '8px 16px'
    height: 36
    font: button
    hover: 'background #4dd470'
    use: 'accent emphasis CTA on Bento cards (Pricing emphasis tier)'
  button-secondary:
    background: 'transparent'
    text: '#f0f6fc'
    border: '1px solid #353d37'
    radius: 6
    padding: '8px 16px'
    height: 36
    font: button
    hover: 'background #161b22; border #484f58'
    use: 'secondary action — Watch demo / Learn more'
  button-ghost:
    background: 'transparent'
    text: '#f0f6fc'
    radius: 6
    padding: '8px 12px'
    font: button
    hover: 'background rgba(240, 246, 252, 0.06)'
    use: 'tertiary text-only action'
  button-danger:
    background: '#da3633'
    text: '#ffffff'
    radius: 6
    padding: '8px 16px'
    font: button
    hover: 'background #b62324'
    use: 'destructive confirms — Delete repository'
  card:
    background: '#0f1511'
    text: '#f0f6fc'
    border: '1px solid #353d37'
    radius: 16
    padding: 24
    use: 'standard feature card / Bento small'
  bento-card-large:
    background: '#0f1511'
    text: '#f0f6fc'
    border: '1px solid #353d37'
    radius: 24
    padding: 32
    use: 'Bento grid large item — features overview'
  bento-card-elevated:
    background: '#191f1b'
    text: '#f0f6fc'
    border: '1px solid #353d37'
    radius: 16
    padding: 24
    hover: 'background #21262d'
    use: 'interactive Bento card — clickable feature tile'
  river-visual:
    background: '#0d1117'
    text: '#f0f6fc'
    radius: 24
    shadow: 'river — multi-layer drop'
    use: 'hero River visual — large feature showcase with multi-layer shadow'
  pricing-card:
    background: '#0f1511'
    text: '#f0f6fc'
    border: '1px solid #353d37'
    radius: 16
    padding: 32
    use: 'pricing tier card'
  pricing-card-featured:
    background: 'linear-gradient(135deg, #0f1511, #191f1b)'
    text: '#f0f6fc'
    border: '1px solid #5fed83'
    radius: 16
    padding: 32
    use: 'featured pricing tier — lime border, gradient body'
  input:
    background: '#0d1117'
    text: '#f0f6fc'
    border: '1px solid #353d37'
    radius: 6
    padding: '5px 12px'
    height: 32
    focus: 'border #5fed83; ring 0 0 0 2px rgba(95, 237, 131, 0.20)'
    use: 'search / email / form input'
  badge:
    background: '#161b22'
    text: '#a4aea6'
    border: '1px solid #353d37'
    radius: 9999
    padding: '2px 10px'
    font: caption-small
    use: 'NEW / status badge — pill shape'
  badge-eyebrow:
    background: 'rgba(95, 237, 131, 0.10)'
    text: '#5fed83'
    border: '1px solid rgba(95, 237, 131, 0.20)'
    radius: 9999
    padding: '4px 12px'
    font: label-mono
    use: 'EyebrowBanner badge — section taxonomy with multi-hue icon'
  bento-icon-coral:
    background: '#ff6b6b'
    text: '#000000'
    radius: 8
    size: 32
    use: 'decorative Bento card icon background'
  bento-icon-lemon:
    background: '#ffd43b'
    text: '#000000'
    radius: 8
    size: 32
    use: 'decorative Bento card icon background'
  bento-icon-indigo:
    background: '#7c5cff'
    text: '#ffffff'
    radius: 8
    size: 32
    use: 'decorative Bento card icon background'
  nav-link:
    background: 'transparent'
    text: '#f0f6fc'
    font: body
    padding: '6px 12px'
    hover: 'text #ffffff; background rgba(240, 246, 252, 0.06)'
    use: 'top-nav menu (Product / Solutions / Resources / Open Source / Pricing)'
  code-block:
    background: '#161b22'
    text: '#f0f6fc'
    border: '1px solid #353d37'
    radius: 8
    padding: 16
    font: code-body
    use: 'terminal / config code sample with optional filename header'

dark-mode: optional

lineage:
  summary: |
    GitHub's marketing site runs on Mona Sans — a variable sans the
    company commissioned and open-sourced, paired with Hubot Sans (an
    alternate brand voice) and Mona Sans Mono. The canvas is a
    near-black `#0d1117` (the same dark-mode value used throughout
    the GitHub product), and the accent is a lime-green `#5fed83`
    that lights up pricing emphasis, hover states, and decorative
    Bento-grid illustrations. The system is built on a wide,
    deeply-tokened design language ("Primer Brand" — visible in the
    `--brand-*` and `--base-color-scale-*` CSS variables exposed on
    the site). Where Linear keeps to a single dark canvas with one
    indigo accent, GitHub embraces a full multi-hue scale — coral,
    lemon, lime, indigo, pink — used decoratively inside Bento cards
    while never breaking the dark chrome's discipline. Headings use a
    custom-tuned weight 425 (lighter than 500) with an extreme
    `-0.035em` tracking, giving the "GitHub voice" its quiet-confident
    feel. The Bento grid is the page's spatial signature: large
    feature cards stack with mid-gap rhythm, and EyebrowBanner badges
    introduce taxonomy with multi-hue icon backgrounds — coral, lemon,
    indigo, pink — that never bleed into the chrome itself.
  influences:
    - name: 'Mona Sans (open-source by GitHub)'
      role: 'Proprietary variable display family — primary type signature, custom 425 weight'
      url: 'https://github.com/github/mona-sans'
    - name: 'Hubot Sans (open-source by GitHub)'
      role: 'Alternate display voice for editorial moments'
      url: 'https://github.com/github/hubot-sans'
    - name: 'Mona Sans Mono'
      role: 'Matched mono companion — code blocks, env-vars, kbd'
      url: 'https://github.com/github/mona-sans'
    - name: 'GitHub Primer Brand'
      role: 'Internal design system informing marketing tokens'
      url: 'https://primer.style'
    - name: 'Linear'
      role: 'Pioneered the near-black dark-mode marketing canvas; GitHub adds multi-hue Bento decoration'
      url: 'https://linear.app'
---

## 1. Visual Theme & Atmosphere

GitHub's marketing canvas is a dark `#0d1117` ground — same value the product uses for its dark theme — wrapped in Mona Sans, the variable display family GitHub commissioned and released open-source. The hero typography sits at 64px / weight 425 with an aggressive `-0.035em` tracking, a setting that is recognizably GitHub: lighter than the typical 500 marketing weight, tighter than typical display copy, calm where competitors shout.

What makes this design distinctive vs. nearby alternatives: most developer-platform sites soften their dark canvases with cyan or violet accents. GitHub picks lime-green `#5fed83` — the same green that signals "added lines" in a diff — and reserves it for the moments that genuinely matter (pricing emphasis, key callouts, hover states). The marketing chrome stays restrained; chromatic excitement lives inside Bento card illustrations.

The Bento grid is the page's spatial signature. Large feature cards sit in a 2-3-up grid with consistent 24px gaps, each card carrying a distinct EyebrowBanner badge with a multi-hue icon background (coral / lemon / indigo / pink / cyan). The badges read as taxonomy chips — telling you which product area a card belongs to — without ever bleeding their color into the surrounding chrome. The result feels engineered rather than decorated: every color has a job, every weight has a reason, every gap has a measurement.

Reading the homepage feels like opening a developer tool that happens to be marketed. The chrome reads continuous with the product chrome (same `#0d1117`, same `#353d37` borders, same Mona Sans Mono code blocks). There is no "marketing layer" pretending to be a separate brand experience.

**Key Characteristics:**
- Near-black `#0d1117` canvas — matches product dark mode exactly.
- Mona Sans variable at custom weight 425 with `-0.035em` tracking.
- Lime-green `#5fed83` accent — matches diff "added" color.
- White-on-black primary CTA inversion (not lime-as-CTA).
- Bento-grid layout with multi-hue decorative icon palette (coral/lemon/indigo/pink/cyan).
- Body density 14px — denser than Vercel's 16px, signals dev-tool.
- Hairline `#353d37` borders carry chrome depth; River visuals carry shadow.
- Section padding ladder: 48 / 96 / 128 (condensed / normal / spacious).
- Three radius tiers: 6 buttons / 16 cards / 24 Bento large.

## 2. Color Palette & Roles

### Primary

- **Background** (`#0d1117`): canvas-default. GitHub's signature near-black, identical to product dark mode.
- **Text** (`#f0f6fc`): primary copy on dark canvas — slightly cool off-white.
- **Brand / Accent** (`#5fed83`): lime-green. Reserved for emphasis — pricing tier border, hover ring, EyebrowBanner accent. NOT a CTA fill.

### Brand & Dark

- **Surface (canvas-subtle)** (`#0f1511`): Bento card body. Slightly green-shifted from canvas to feel native to the brand.
- **Surface Soft** (`#161b22`): code blocks, secondary cards.
- **Surface Strong** (`#21262d`): inline rows, hover-state backgrounds.
- **Background Elevated** (`#191f1b`): accordion idle state, Bento card elevated tier.
- **Brand Emphasis** (`#08872b`): darker emphasis-grade green — used on accent CTAs that need higher contrast.
- **Brand Soft** (`rgba(95, 237, 131, 0.15)`): tinted background for EyebrowBanner badges.

### Accent

- **White CTA** (`#ffffff`): primary CTA fill — the dark-canvas inversion. Text inverts to `#000000`.
- **Lime Accent** (`#5fed83`): emphasis-only — pricing tier border, hover ring, EyebrowBanner highlight.
- **Diff Add** (`rgba(46, 160, 67, 0.15)`): added-line tint inside code blocks.
- **Diff Remove** (`rgba(248, 81, 73, 0.15)`): removed-line tint inside code blocks.

### Interactive

- **Link** (`#79c0ff`): GitHub link blue (carryover from product chrome).
- **Link Hover** (`#a5d6ff`): lighter on hover.
- **Focus Ring** (`2px solid #5fed83`): lime ring with 2px offset on dark canvas.

### Neutral Scale

- **Text Strong** (`#ffffff`): display emphasis (rare).
- **Text** (`#f0f6fc`): primary copy.
- **Text Soft** (`#a4aea6`): captions, supporting metadata.
- **Text Muted** (`#7d8590`): secondary text on Bento cards.
- **Text Faint** (`#484f58`): disabled state.

### Surface & Borders

- **Border** (`#353d37`): neutral low-contrast divider — the system's primary depth tool.
- **Border Soft** (`#21262d`): nested row border.
- **Border Strong** (`#484f58`): input + secondary button border on focus.

### Shadow Colors

- **Ambient** (`rgba(0, 0, 0, 0.30) 0 1px 2px`): subtle card lift.
- **Standard** (`rgba(0, 0, 0, 0.40) 0 4px 12px`): hover elevation.
- **Elevated** (`rgba(0, 0, 0, 0.50) 0 12px 32px`): modal / popover.
- **River** (multi-layer): the hero River visual uses a dense seven-stop drop-shadow stack — `rgba(0, 0, 0, 0.60) 0 30px 60px -30px, rgba(0, 0, 0, 0.40) 0 18px 36px -18px, rgba(0, 0, 0, 0.30) 0 8px 16px -8px`. Only used in the hero region.

### Bento Decorative (icon backgrounds only)

- **Coral** (`#ff6b6b`)
- **Lemon** (`#ffd43b`)
- **Indigo** (`#7c5cff`)
- **Pink** (`#ff7eb6`)
- **Cyan** (`#56d4dd`)

These five live exclusively as Bento icon backgrounds and EyebrowBanner accents. They never appear as section backgrounds, CTAs, or chrome surfaces.

### Semantic

- **Success** (`#3fb950`): success state — same hue as diff add.
- **Warning** (`#d29922`): warning state.
- **Danger** (`#f85149`): danger / error state.
- **Info** (`#58a6ff`): info banner.

## 3. Typography Rules

### Font Family

- **Primary (display + body):** `"Mona Sans", "MonaSansFallback", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`. Variable cut commissioned and open-sourced by GitHub. Custom weight 425 is the brand fingerprint.
- **Mono companion:** `"Mona Sans Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, Monaco, Consolas, monospace`. Matched mono pair released alongside Mona Sans.
- **Alternate display:** `"Hubot Sans", "Mona Sans", sans-serif`. Used for editorial moments — landing pages with longer narrative.
- **OpenType features:** `kern`, `liga` enabled site-wide. `ss03` activates a stylistic set on the display family for hero sizes. `tnum` on label-mono and code.

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | OT Features | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Mona Sans | 64 | 425 | 1.08 | -0.035em | kern, ss03 | Homepage h1 — quiet-confident |
| display-large | Mona Sans | 56 | 425 | 1.10 | -0.03em | kern | Section h1 |
| h1 | Mona Sans | 48 | 460 | 1.12 | -0.03em | kern | Page h1 |
| h2 | Mona Sans | 40 | 460 | 1.15 | -0.025em | kern | Section heads |
| h3 | Mona Sans | 32 | 500 | 1.20 | -0.02em | kern | Sub-section heads |
| h4 | Mona Sans | 24 | 500 | 1.30 | -0.015em | kern | Card titles |
| body-large | Mona Sans | 16 | 400 | 1.55 | 0 | kern, liga | Hero subhead |
| body | Mona Sans | 14 | 400 | 1.50 | 0 | kern, liga | Default body — denser than Vercel |
| body-small | Mona Sans | 13 | 400 | 1.50 | 0 | kern | Footer body |
| label-mono | Mona Sans Mono | 11 | 500 | 1.40 | 0.06em | tnum, uppercase | EyebrowBanner label |
| button | Mona Sans | 14 | 500 | 1.00 | 0 | kern | CTA button label |
| button-small | Mona Sans | 13 | 500 | 1.00 | 0 | kern | Compact button |
| link | Mona Sans | 14 | 500 | 1.50 | 0 | kern | Inline link |
| caption | Mona Sans | 12 | 400 | 1.45 | 0 | kern | Supporting metadata |
| caption-small | Mona Sans | 11 | 400 | 1.40 | 0 | kern | Footer microcopy |
| micro | Mona Sans | 11 | 500 | 1.30 | 0.04em | kern | UI hint |
| code-body | Mona Sans Mono | 13 | 400 | 1.45 | 0 | tnum | Code block |
| code-bold | Mona Sans Mono | 13 | 500 | 1.45 | 0 | tnum | Inline emphasis in code |
| code-label | Mona Sans Mono | 11 | 500 | 1.40 | 0.04em | tnum, uppercase | Code-block filename header |

### Principles

- **Custom weight 425 is the brand fingerprint.** Lighter than the typical 500 marketing weight, heavier than 400. Mona Sans's variable axis was tuned specifically for this register.
- **Aggressive negative tracking on display.** `-0.035em` at 64px is unusually tight — most marketing sites sit at -0.02em. Tighter tracking makes the type read as engineered.
- **Body sits at 14px.** Denser than Vercel's 16px baseline. Signals developer-tool credibility — the system trusts the reader to handle compact text.
- **OpenType ss03 on hero.** Activates a stylistic set that subtly tightens the hero's terminal forms.
- **Three-family system.** Mona Sans does display + body unified; Mona Sans Mono does code + label-mono; Hubot Sans appears only on editorial pages.
- **No bold body text.** Emphasis comes from family change (mono inline) or weight 500, never weight 700. The system's restraint is its voice.

## 4. Component Stylings

### Buttons

**Primary (White-on-Black Inversion)** — Background `#ffffff`, text `#000000`, 6px radius, padding `8px 16px`, height 36px, button font (14/500). Hover background `#f0f6fc`. **Use:** primary CTA — Sign up / Get Started.

**Accent (Lime Emphasis)** — Background `#5fed83`, text `#000000`, 6px radius. Hover `#4dd470`. **Use:** featured pricing tier CTA, accent-grade emphasis.

**Secondary (Hairline Outline)** — Transparent background, `#f0f6fc` text, 1px `#353d37` border, 6px radius. Hover: background `#161b22`, border deepens to `#484f58`. **Use:** Watch demo / Learn more.

**Ghost** — Transparent background, ink text, 6px radius, padding `8px 12px`. Hover: `rgba(240, 246, 252, 0.06)` background. **Use:** tertiary text-only action.

**Danger** — Background `#da3633`, white text, 6px radius. Hover `#b62324`. **Use:** Delete repository / destructive confirms.

### Cards

**Standard Card** — Background `#0f1511` (canvas-subtle), 1px `#353d37` border, 16px radius, 24px padding. **Use:** Bento small cards, generic feature cards.

**Bento Large** — Same surface as standard, 24px radius, 32px padding. **Use:** Bento grid large items (3-column at desktop).

**Bento Elevated** — Background `#191f1b` (one tier up from standard), 16px radius, 24px padding. Hover background `#21262d`. **Use:** interactive Bento card — clickable feature tile.

**River Visual** — Hero feature showcase. Background `#0d1117`, 24px radius, multi-layer River shadow. **Use:** hero region only — large feature image with dense shadow stack.

**Pricing Card** — Background `#0f1511`, 1px `#353d37` border, 16px radius, 32px padding.

**Pricing Card Featured** — Linear gradient `135deg, #0f1511, #191f1b`, 1px `#5fed83` border (lime accent), same shape. The lime border signals "highlighted tier" without changing the card body.

### Badges & Tags

**Standard Badge** — Background `#161b22`, text `#a4aea6`, 1px `#353d37` border, 9999 radius (pill), `2px 10px` padding, caption-small. **Use:** NEW / status badge.

**EyebrowBanner Badge** — Background `rgba(95, 237, 131, 0.10)`, text `#5fed83`, 1px `rgba(95, 237, 131, 0.20)` border, 9999 radius, `4px 12px` padding, label-mono uppercase. The signature taxonomy chip. Often paired with a multi-hue icon (coral / lemon / indigo / pink / cyan icon background, 8px radius square).

**Bento Icon (5 variants)** — Coral / Lemon / Indigo / Pink / Cyan. 8px radius, 32px square, ink text on light hues, white text on indigo. **Decorative only** — never CTA, never section background.

### Inputs & Forms

**Text Input** — Background `#0d1117` (canvas), 1px `#353d37` border, 6px radius, padding `5px 12px`, height 32px, body font. Focus: border `#5fed83`, ring `0 0 0 2px rgba(95, 237, 131, 0.20)`.

### Navigation

**Top Nav** — Background `#0d1117` (transparent over canvas), 64px height. Layout: GitHub octocat wordmark left, primary horizontal menu (Product / Solutions / Resources / Open Source / Pricing / Search), Sign In + Sign Up CTA right.

**Nav Link** — Transparent background, `#f0f6fc` text, body font, padding `6px 12px`. Hover: text `#ffffff`, background `rgba(240, 246, 252, 0.06)`.

### Decorative

**Code Block** — Background `#161b22` (surface-soft), 1px `#353d37` border, 8px radius, 16px padding, Mona Sans Mono 13/400. Optional filename header in mono 11/500/0.04em uppercase. Diff syntax: added lines on `rgba(46, 160, 67, 0.15)`, removed on `rgba(248, 81, 73, 0.15)`.

**Hero Band** — Full-width canvas band. display-hero (64/425/-0.035em) headline. body-large (16/400) subhead. Two CTAs (white-on-black primary + hairline secondary). 96px vertical padding.

## 5. Layout Principles

### Spacing System

- **Base unit:** 4px.
- **Scale:** 4 / 8 / 12 / 16 / 20 / 24 / 32 / 48 / 64 / 96 / 128.
- **Section padding ladder:** 48px (condensed) / 96px (normal) / 128px (spacious).
- **Bento grid gaps:** 1.25rem (20px) small, 2rem (32px) medium-large.

### Grid & Container

- **Max content width:** 80rem (1280px).
- **Hero region:** 8rem block padding for regular variant, 6rem condensed.
- **Bento grid:** 2-3 column at desktop with consistent 24px gaps; cards span 1 / 2 / 3 columns based on size class.
- **Editorial body:** 12-column grid, 24px gutter.
- **Footer:** 5-column at desktop.

### Whitespace Philosophy

GitHub's spacing leans dense relative to peer marketing sites — body 14px, section padding ladder starts at 48px (Vercel and Linear typically start at 64px). The result feels engineered, not airy. Bento cards stack tight (24px gaps); the page reads as a dashboard of features rather than a billboard.

### Section Cadence

- Dark hero with River visual → Bento product feature grid → editorial Hubot Sans long-form section → testimonial dark cards → pricing dark grid → CTA band → footer.
- Tonal continuity throughout — no light sections in the marketing chrome.

## 6. Shapes & Radius Scale

| Token | Value | Use |
|---|---|---|
| micro | 4px | Inline pills, status chips |
| sm | 6px | **Buttons, inputs** — softer than Linear's 4, sharper than Vercel's matching |
| md | 8px | Code blocks, Bento icon squares |
| lg | 12px | Mid-size cards |
| xl | 16px | Standard cards, Bento elevated |
| featured | 24px | Bento large, hero River visual |
| pill | 9999px | EyebrowBanner badges, status pills |

The radius ladder is GitHub's most architectural decision. Three primary tiers — 6 (buttons), 16 (cards), 24 (Bento large) — anchor the system. Mixing radii within a primitive is explicitly avoided; a button is 6px, a card is 16px, a Bento large is 24px. The pill at 9999 stays scoped to badges.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 — Flat | `#0d1117` canvas | Body bands, footer |
| 1 — Card | `#0f1511` canvas-subtle + 1px `#353d37` | Standard / Bento small |
| 2 — Elevated | `#191f1b` + 1px `#353d37` | Bento elevated, accordion |
| 3 — Hover | `#21262d` + 1px `#484f58` | Bento card hover state |
| 4 — Modal | `#161b22` + 1px `#353d37` + elevated shadow | Modal / popover |
| 5 — River | `#0d1117` + multi-layer River shadow | Hero feature showcase only |

### Shadow Philosophy

The system layers tonal greys for surface elevation (canvas → canvas-subtle → bg-elev → surface-strong) and reserves shadow for the **River visual hero treatment only**. The River shadow is a dense seven-stop drop — `rgba(0, 0, 0, 0.60) 0 30px 60px -30px, rgba(0, 0, 0, 0.40) 0 18px 36px -18px, rgba(0, 0, 0, 0.30) 0 8px 16px -8px` — engineered to lift the visual against the dark canvas without breaking tonal continuity. Elsewhere, depth is tonal-only, with hairlines doing the secondary work.

## 8. Interaction & Motion

### Easing & Duration

- **ease-standard:** `cubic-bezier(0.4, 0, 0.2, 1)` — material default.
- **ease-emphasized:** `cubic-bezier(0.2, 0, 0, 1)` — used for Bento hover lift.
- **ease-entrance:** `cubic-bezier(0, 0, 0.2, 1)` — on-scroll content reveal.
- **duration-fast:** 100ms — color shifts on hover.
- **duration-standard:** 200ms — Bento card hover lift.
- **duration-slow:** 320ms — River visual entrance on initial paint.

### Per-Component Micro-States

- **Button hover:** background color shift only, no transform. White-on-black primary → `#f0f6fc` background. 100ms.
- **Bento card hover:** background `#0f1511` → `#191f1b`, translateY(-2px), border deepens. 200ms.
- **Bento elevated hover:** background `#191f1b` → `#21262d`. 200ms.
- **Link hover:** color shift to `#a5d6ff` lighter blue, optional underline appears. 100ms.
- **Input focus:** border `#353d37` → `#5fed83`, ring fades in over 100ms.
- **EyebrowBanner badge hover:** subtle brand-soft background tint deepens.

### Page Transitions

The homepage uses on-scroll content reveal — Bento cards fade in from below as they enter viewport (translateY(20px) → 0, opacity 0 → 1, 320ms staggered). The River visual on hero loads with a dramatic shadow expansion.

### Reduced Motion

Respects `prefers-reduced-motion: reduce`. When set:
- Bento card lifts collapse to opacity-only on hover.
- River visual entrance becomes instant (no shadow expansion animation).
- On-scroll reveals fade in with no translate.

## 9. Accessibility & A11y

### Contrast Pairs

| Pair | Ratio | WCAG |
|---|---|---|
| `#f0f6fc` text on `#0d1117` canvas | 17.4 | AAA |
| `#000000` on `#5fed83` lime | 13.8 | AAA |
| `#000000` on `#ffffff` primary CTA | 21.0 | AAA |
| `#a4aea6` soft on `#0d1117` | 9.4 | AAA at body |
| `#79c0ff` link on `#0d1117` | 7.6 | AAA at body |
| `#5fed83` lime on `#0d1117` | 12.4 | AAA |

### Focus Indicators

2px solid `#5fed83` ring with 2px offset on dark canvas. Applied to every interactive element — buttons, links, inputs, Bento cards, nav. Never `outline: none` without replacement.

### ARIA Patterns

- **Combobox:** `role="combobox"` + `aria-expanded` for global search.
- **Listbox:** `role="listbox"` for autocomplete; rows are `role="option"`.
- **Dialog:** `role="dialog"` + `aria-modal="true"` + focus trap on pricing modals, sign-in flow.
- **Tablist:** `role="tablist"` for product overview tab navigation.

### Keyboard Nav

- Tab order strictly visual.
- Skip-link present in header (visible on focus).
- Bento grid supports arrow key navigation between cards.
- Escape closes modals; Cmd/Ctrl+K opens global search.

### Screen Reader

- Bento card icons marked `aria-hidden="true"`.
- River visual includes `aria-label` describing the feature ("Code review with Copilot").
- EyebrowBanner badges include hidden context: "Section: Code Search".

### Reduced Motion

Honored — see §8.

## 10. Responsive Behavior

| Breakpoint | Range | Key Changes |
|---|---|---|
| Mobile | < 544px | display-hero 64→32px; Bento grid 1-up; River visual scales to viewport; nav hamburger |
| Tablet | 544–768px | display-hero 48px; Bento 2-up; pricing 1-up |
| Desktop | 768–1280px | display-hero 56–64px; Bento 2-3-up; pricing 3-up |
| Wide | > 1280px | Content caps at 1280px; full Bento grid |

### Touch Targets

- Primary CTA: 36px height — at WCAG AA (padded internally for AAA at touch).
- Nav links: 32px tap target padded externally.
- Bento card: full card is the tap target.

### Collapsing Strategy

- Top nav switches to hamburger below 768px.
- Bento grid: 3-up → 2-up → 1-up.
- River visual: full-bleed on mobile (drops 24px radius).
- Code blocks: horizontal scroll preserved (no wrap).
- Pricing: 3-up grid stacks below 768px.

### Image Behavior

Product screenshots use `srcset` 1x/2x/3x. Hero River visuals are layered SVG + raster; they swap raster under 768px to reduce payload.

### Container Queries

Used inside Bento large cards — content layout reflows when the card itself drops below 600px wide regardless of viewport.

## 11. Content & Voice

### Tone

Confident, technical, slightly understated. GitHub's voice sounds like a platform engineer presenting at GitHub Universe — informed, precise, generous with acronym definitions. Sentences trend medium-length. Headlines are declarative and slightly engineering-grand ("Where the world builds software").

### Microcopy Patterns

- **Button verbs:** "Sign up for GitHub", "Get started for free", "Start a free trial", "Watch demo", "Read the docs", "Contact sales".
- **Error recipe:** `[What failed] — [Why] — [What to do]`. Example: "Couldn't push to repository. Permission denied. Check your access settings."
- **Success confirmations:** terse — "Pushed", "Merged", "Published". No emoji on marketing.
- **Empty states:** instructional. "No repositories yet. Create one to start."

### CTA Verb Conventions

- Primary: "Sign up for GitHub", "Get started for free", "Try it now".
- Secondary: "Watch overview", "Read the docs", "See pricing", "Talk to sales".
- Avoid: "Sign up now!", emoji-heavy CTAs, breathless superlatives.

### Empty States

GitHub's marketing rarely needs empty states. When they appear (search results, blog filters), the copy stays terse: "No matches. Try a different filter." A small Octocat illustration appears in some cases — minimal, line-art, never decorative.

## 12. Dark Mode & Theming

GitHub's marketing site is **dark-only by default**. The `#0d1117` canvas matches the product's dark theme exactly. A light variant exists inside the product (`Theme: Light`), but the marketing site does not ship a light marketing chrome — the dark canvas is the brand.

When users toggle to light mode in the product:
- `bg` → `#ffffff`
- `text` → `#1f2328`
- `surface` → `#f6f8fa`
- `border` → `#d0d7de`
- Lime accent `#5fed83` shifts to a darker `#1a7f37` for contrast on light.

But this is product, not marketing. Marketing chrome stays dark.

## 13. Lineage & Influences

GitHub sits at the intersection of **its own product chrome** (Primer Brand design system), **dev-tool dark-mode editorial restraint** (Linear, Vercel), and **Bento-grid layout discipline** (a pattern that emerged in 2022–2023 across Apple Pro pages, Vercel, Linear, and now GitHub). It rejects the typical SaaS-cyan or SaaS-violet accent in favor of lime-green pulled directly from the diff color vocabulary — a conceptual move that ties the marketing visual identity back to the act of writing code.

The custom Mona Sans variable at weight 425 is the deepest type investment in the dev-tool space alongside Cursor's CursorGothic. Where Linear leans on Inter and Vercel uses Geist, GitHub commissioned a face and open-sourced both Mona Sans and Mona Sans Mono — a generous gesture that doubles as brand defense. Hubot Sans (the alt voice) sits in the system for editorial moments without breaking the chrome's continuity.

**Named influences:**

- **Primer Brand** — internal design system that informs marketing tokens.
- **Mona Sans / Mona Sans Mono** — proprietary type family, open-sourced by GitHub.
- **Hubot Sans** — alt display voice for editorial moments.
- **Linear** — pioneered the near-black dark-mode marketing canvas; GitHub adds multi-hue Bento decoration.
- **Vercel** — confidence in oversized Inter-style display + tight tracking; GitHub goes tighter.
- **Apple Pro pages** — the modern Bento-grid layout pattern.

## 14. Do's and Don'ts

### Do

- **Do** anchor the canvas at `#0d1117` — match the product dark mode exactly.
- **Do** use Mona Sans at the custom weight 425 for hero copy. It's GitHub's quiet-confident signature.
- **Do** push tracking to `-0.035em` on display sizes. The most recognizable type fingerprint the system has.
- **Do** treat lime `#5fed83` as a punctuation accent — pricing emphasis, hover ring, EyebrowBanner accent. NOT a CTA fill.
- **Do** use white-on-black inversion for primary CTAs — the GitHub way.
- **Do** scope multi-hue Bento icons (coral / lemon / indigo / pink / cyan) to inside Bento card icon backgrounds only.
- **Do** keep body at 14px. Density is the dev-tool credibility signal.
- **Do** layer surfaces tonally — `#0d1117` → `#0f1511` → `#191f1b` → `#21262d`. Hairlines do secondary depth.
- **Do** reserve shadow for the River visual hero treatment — multi-layer drop with 60/40/30% alpha stops.
- **Do** use 6px radius on buttons / inputs, 16px on cards, 24px on Bento large. Don't cross-pollinate.

### Don't

- **Don't** mix the dark canvas with cream / warm off-whites. GitHub's `#0d1117` is engineered to match product chrome.
- **Don't** drop multi-hue palette into chrome. Coral / lemon / indigo / pink / cyan stay inside Bento icon backgrounds.
- **Don't** use lime as a CTA fill. The CTA is white-on-black; lime is for emphasis only.
- **Don't** use body size larger than 14–16px. Density is part of the developer-tool signal.
- **Don't** use weight 700 anywhere. Custom 425 is the voice; weight 500–600 is the maximum emphasis.
- **Don't** mix radii within a primitive. A button is 6px; a card is 16px; a Bento large is 24px.
- **Don't** add shadows to chrome cards. River visual is the only shadow-bearing element.
- **Don't** introduce a third sans family beyond Mona Sans and Hubot Sans.
- **Don't** soften display tracking below `-0.025em`. Loose tracking breaks the engineered feel.
- **Don't** skip the EyebrowBanner badge above Bento sections — the taxonomy chip is the section-naming convention.

## 15. Agent Prompt Guide

### Quick Color Reference

```
Background:    #0d1117
Surface:       #0f1511
Surface Soft:  #161b22
Bg Elevated:   #191f1b
Text:          #f0f6fc
Text Soft:     #a4aea6
Brand (Lime):  #5fed83
Primary CTA:   #ffffff (text #000000)
Border:        #353d37
Link:          #79c0ff
```

### Example Component Prompts

- **"Create a hero section in the GitHub style"** — `#0d1117` canvas, 64px Mona Sans h1 at weight 425 with `-0.035em` tracking, 16px body subhead at weight 400, two CTAs (white-on-black primary + hairline secondary). Optional River visual below with multi-layer drop shadow.

- **"Design a Bento grid in the GitHub style"** — 3-column grid at desktop with 24px gaps. Each card: `#0f1511` background, 1px `#353d37` border, 16px radius (24px for large items), 24–32px padding. EyebrowBanner badge at the top: `rgba(95, 237, 131, 0.10)` background, `#5fed83` text, label-mono uppercase. Optional multi-hue icon (coral / lemon / indigo) at 8px radius square.

- **"Build a primary CTA in the GitHub style"** — `#ffffff` background, `#000000` text, 6px radius, `8px 16px` padding, 36px height, button font (14/500). Hover background `#f0f6fc`. White-on-black inversion is the GitHub way.

- **"Make a featured pricing card in the GitHub style"** — Linear gradient `135deg, #0f1511, #191f1b`, 1px `#5fed83` lime border (the highlight signal), 16px radius, 32px padding. Lime emphasis CTA at the bottom.

- **"Render a code block in the GitHub style"** — `#161b22` background, 1px `#353d37` border, 8px radius, 16px padding, Mona Sans Mono 13/400. Optional filename header in mono 11/500/0.04em uppercase. Diff syntax highlighting: added on `rgba(46, 160, 67, 0.15)`, removed on `rgba(248, 81, 73, 0.15)`.

- **"Design an EyebrowBanner badge in the GitHub style"** — Pill (9999 radius), `4px 12px` padding, `rgba(95, 237, 131, 0.10)` background, `#5fed83` text, `rgba(95, 237, 131, 0.20)` border, label-mono uppercase. Optional multi-hue icon to the left.

### Iteration Guide

1. Start with `#0d1117` canvas — non-negotiable. Match product chrome.
2. Set Mona Sans display at weight 425 with `-0.035em` tracking. The fingerprint.
3. Apply lime `#5fed83` only as accent — borders, hovers, EyebrowBanner. White CTA does the heavy lifting.
4. Build the Bento grid: 16px radius standard, 24px radius large, 24px gaps, EyebrowBanner up top.
5. Body sits at 14px. Resist 16px — density is the brand.
6. Buttons are 6px; cards are 16px; Bento large is 24px. No crossing.
7. Multi-hue Bento icons (coral/lemon/indigo/pink/cyan) go inside cards only — never as section background.
8. Reserve River shadow for the hero. Everywhere else: hairline depth.
