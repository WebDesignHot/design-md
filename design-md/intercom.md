---
name: Intercom
tagline: Cream canvas, near-black Saans display, and electric-cobalt #000ce1 — the bold AI-era support brand.
updated_at: 2026-05-29T21:44:35.710Z
published_at: 2026-05-29T21:44:35.710Z
author: webdesignhot
source_url: https://www.intercom.com
spec: webdesignhot/0.1
quality: curated
featured: false
categories: [saas]
tags: [light, cream, sans, saas, support]
preview_swatch: ['#faf9f6', '#000ce1', '#ff00af']
related: [hubspot, linear, stripe]
description: 'Intercom''s 2024 rebrand pushed customer-service software somewhere it had never been: a warm cream canvas (`#faf9f6` / `#f4f3ec`), a confident near-black `#17100e` Saans display set large and lighter than you''d expect, jet-black primary CTAs, and a signature electric-cobalt `#000ce1` that snaps the whole system awake. Around that core sits a vivid multi-accent set — hot pink `#ff00af`, orange `#ff5600`, acid yellow `#f6f431`, teal `#00edc8` — that lets each product surface (Fin, helpdesk, voice) carry its own color while the cream-and-cobalt spine holds the brand together. The result reads as the AI-era support platform: editorial, bold, and unmistakably current.'


# Canonical 8-role aliases (bg / text / brand / border / accent / muted / surface / danger).
aliases:
  background: bg
  foreground: text
  primary: brand
  primary-foreground: on-brand
  accent: accent
  muted: text-muted
  border: border
colors:
  # Primary
  bg: '#faf9f6'                    # warm off-white canvas (--color-off-white) — the default page ground
  bg-cream: '#f4f3ec'             # signature cream band (--color-cream) — alternating section ground
  bg-cream-light: '#fbfaf7'       # lightest cream (--color-cream-light) — near-white panel
  bg-chalk: '#f1eee9'             # chalk (--color-chalk) — soft tonal step down from cream
  bg-canvas: '#e7e3db'           # canvas (--color-canvas) — deeper warm panel
  bg-linen: '#dedbd6'            # linen (--color-linen) — divider / hover ground
  bg-clay: '#d3cec6'            # clay (--color-clay) — deepest warm neutral surface
  bg-navy: '#020917'             # near-black navy (--color-navy) — dark inversion band
  bg-dark: '#080e1c'             # dark (--color-dark) — deepest dark surface / footer
  surface: '#ffffff'             # pure white card surface (--color-white)
  surface-cream: '#f4f3ec'       # cream card surface for callout tiles

  # Text
  text: '#17100e'                # warm near-black body (--color-black) — the signature, never pure #000
  text-off-black: '#111111'      # off-black (--color-off-black) — alt near-black, slightly cooler
  text-muted: '#4a443f'          # warm grey caption (derived from 70% black on cream)
  text-soft: '#6b645e'           # tertiary warm grey
  text-faint: '#9a938c'          # disabled / placeholder
  text-on-dark: '#faf9f6'        # cream-white on dark bands
  text-on-dark-muted: '#cbc7bf'  # muted on dark
  on-brand: '#ffffff'            # white on electric-cobalt + black CTAs

  # Brand
  brand: '#000ce1'               # electric cobalt (--color-blue) — the snap accent / focus color
  brand-light: '#7a7eef'         # lighter cobalt (--color-blue-light) — tints, hover surfaces
  brand-lightest: '#cccef8'      # palest cobalt (--color-blue-lightest) — selection wash
  brand-active: '#0009a8'        # darkened cobalt for pressed state
  cta-black: '#000000'           # jet-black primary CTA ground (probe: rgb(0,0,0), r6px)
  cta-near-black: '#17100e'      # warm near-black CTA ground (probe: rgb(17,16,14), r4px)

  # Accent (vivid multi-accent set)
  accent-pink: '#ff00af'         # hot pink (--color-pink)
  accent-pink-light: '#ff7ad5'   # (--color-pink-light)
  accent-pink-lightest: '#ffcbef'# (--color-pink-lightest)
  accent-orange: '#ff5600'       # orange (--color-orange) — also Fin product color
  accent-orange-light: '#ffa77a' # (--color-orange-light)
  accent-orange-lightest: '#ffdccc' # (--color-orange-lightest)
  accent-yellow: '#f6f431'       # acid yellow (--color-yellow)
  accent-yellow-light: '#faf994' # (--color-yellow-light)
  accent-yellow-lightest: '#fdfdd6' # (--color-yellow-lightest)
  accent-teal: '#00edc8'         # teal (--color-teal)
  accent-teal-light: '#79f6e2'   # (--color-teal-light)
  accent-green: '#00da00'        # green (--color-green)
  accent-green-light: '#7aec7a'  # (--color-green-light)

  # Product accents
  product-fin: '#ff5600'         # Fin AI agent (--color-fin) = orange
  product-helpdesk: '#0007cb'    # helpdesk (--color-helpdesk) = deep cobalt
  product-operator: '#441572'    # operator (--color-operator) = violet
  product-sales: '#055895'       # sales (--color-sales) = steel blue
  product-sales-accent: '#a3b3ff'# (--color-sales-accent)
  product-ecom: '#2f6a5e'        # ecom (--color-ecom) = forest
  product-ecom-accent: '#e2f947' # (--color-ecom-accent)
  product-voice: '#5de071'       # voice accent (--color-voice-accent)
  product-voice-green: '#37b54a' # (--color-voice-accent-green)

  # Borders
  border: '#17100e1a'            # warm near-black at 10% (--color-border-nav-light) — default hairline
  border-soft: '#17100e0d'       # warm near-black at 5% — faintest divider
  border-strong: '#17100e'       # full near-black — emphasis / focus on light
  border-on-dark: '#ffffff33'    # white at 20% (--color-border-nav-dark)

  # Semantic
  success: '#1bb157'             # (--color-success)
  success-dark: '#128a40'        # (--color-success-dark)
  success-bg: '#d7efdc'          # (--color-success-light)
  warning: '#fbc916'             # (--color-warning)
  warning-dark: '#6f5502'        # (--color-warning-dark)
  warning-bg: '#feedaf'          # (--color-warning-light)
  danger: '#fd3a57'              # (--color-error)
  danger-dark: '#b41d34'         # (--color-error-dark)
  danger-bg: '#fed9db'           # (--color-error-light)

typography:
  display:
    family: 'Saans, system-ui, -apple-system, "Segoe UI", sans-serif'
    weights: [400, 500, 600, 700]
    opentype-features: 'kern, liga, ss01'
    note: 'Hero h1 renders Saans at 80px / weight 400 (probed live 2026-05-29) — the display runs lighter than the typical 700-weight SaaS headline, which is part of the editorial register. Heavier weights (500–700) carry section heads and emphasis.'
  body:
    family: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif'
    weights: [400, 500, 600]
    opentype-features: 'kern, liga, tnum'
  mono:
    family: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
    weights: [400, 500]
  scale:
    display-hero:    { size: 80, weight: 400, lineHeight: 1.0,  tracking: '-0.03em',  family: display }
    display-lg:      { size: 56, weight: 500, lineHeight: 1.05, tracking: '-0.02em',  family: display }
    h1:              { size: 54, weight: 400, lineHeight: 1.08, tracking: '-0.02em',  family: display }
    h2:              { size: 40, weight: 500, lineHeight: 1.15, tracking: '-0.015em', family: display }
    h3:              { size: 32, weight: 600, lineHeight: 1.2,  tracking: '-0.012em', family: display }
    h4:              { size: 24, weight: 600, lineHeight: 1.25, tracking: '-0.005em', family: display }
    h5:              { size: 20, weight: 600, lineHeight: 1.3,  tracking: '0',        family: body }
    lead:            { size: 22, weight: 400, lineHeight: 1.45, tracking: '-0.005em', family: body }
    body-lg:         { size: 18, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body:            { size: 16, weight: 400, lineHeight: 1.55, tracking: '0',        family: body }
    body-sm:         { size: 14, weight: 400, lineHeight: 1.5,  tracking: '0',        family: body }
    label:           { size: 13, weight: 500, lineHeight: 1.4,  tracking: '0',        family: body }
    caption:         { size: 12, weight: 500, lineHeight: 1.4,  tracking: '0.02em',   family: body }
    eyebrow:         { size: 12, weight: 600, lineHeight: 1.4,  tracking: '0.08em',   family: body }
    code:            { size: 14, weight: 400, lineHeight: 1.6,  tracking: '0',        family: mono }
    code-micro:      { size: 12, weight: 400, lineHeight: 1.5,  tracking: '0',        family: mono }

radius:
  micro: 2
  sm: 4
  md: 6
  lg: 8
  xl: 12
  xxl: 16
  featured: 24
  pill: 9999

spacing:
  base: 4
  scale: [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

layout:
  page-width: 1280
  prose-width: 720
  header-height: 64
  hero-y: 120
  section-y: 96
  gutter: 24

components:
  button-primary:
    bg: '#000000'
    text: '#ffffff'
    radius: 6
    paddingX: 16
    paddingY: 10
    font: 'Saans 500 / 16px'
    hover: 'bg #17100e at 80% opacity (oklab 0% /.8) — softens to warm near-black'
    use: 'every primary action — "Start free trial", "Get a demo"'
  button-near-black:
    bg: '#17100e'
    text: '#ffffff'
    radius: 4
    paddingX: 16
    paddingY: 10
    font: 'Saans 500 / 16px'
    hover: 'bg darkens further; active oklab(38% blue-tinted /.85)'
    use: 'secondary surfaces / nav CTA — warm near-black variant at tighter 4px radius'
  button-brand:
    bg: '#000ce1'
    text: '#ffffff'
    radius: 6
    paddingX: 16
    paddingY: 10
    font: 'Saans 500 / 16px'
    hover: 'bg #0009a8 (darkened cobalt)'
    use: 'electric-cobalt accent CTA when the snap color needs to lead'
  button-ghost:
    bg: 'transparent'
    text: '#17100e'
    radius: 6
    border: '1px solid #17100e1a'
    paddingX: 16
    paddingY: 10
    font: 'Saans 500 / 16px'
    hover: 'bg rgba(23,16,14,0.08) — warm near-black wash (oklab 0% /.08)'
    use: 'secondary action — "Learn more", "View pricing"'
  card-default:
    bg: '#ffffff'
    radius: 12
    padding: 24
    border: '1px solid #17100e1a'
    shadow: '0 1px 2px rgba(23,16,14,0.04)'
  card-cream:
    bg: '#f4f3ec'
    radius: 12
    padding: 24
    border: 'none'
    use: 'callout / feature tiles on the cream canvas'
  card-product:
    bg: '#ffffff'
    radius: 16
    padding: 32
    border: '1px solid #17100e1a'
    accent: 'per-product color bar (Fin orange, helpdesk cobalt, operator violet, sales steel, ecom forest)'
    use: 'product feature cards — Fin / Helpdesk / Inbox / Voice'
  input-text:
    bg: '#ffffff'
    border: '1px solid #17100e1a'
    radius: 8
    paddingX: 12
    paddingY: 8
    focus: 'border #17100e + outline 2px #000ce1 (--color-focus-outline)'
    placeholder: '#9a938c'
  badge:
    bg: '#f4f3ec'
    text: '#17100e'
    radius: 9999
    paddingX: 12
    paddingY: 4
    font: 'Saans 600 / 12px'

motion:
  ease-standard: 'cubic-bezier(0.4, 0, 0.2, 1)'
  ease-emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
  ease-soft: 'cubic-bezier(0.45, 0, 0.55, 1)'
  duration-fast: 150
  duration-standard: 240
  duration-slow: 320
  reduced-motion: 'respects prefers-reduced-motion: reduce — scroll-triggered reveals collapse to opacity-only fade, looping product/agent animations freeze to a static frame, button state changes become color-only'

breakpoints:
  mobile: 640
  tablet: 1024
  desktop: 1280
  wide: 1536

shadows:
  none: 'none'
  ambient: '0 1px 2px rgba(23,16,14,0.04)'
  standard: '0 2px 8px rgba(23,16,14,0.06)'
  elevated: '0 8px 24px rgba(23,16,14,0.10)'
  deep: '0 16px 48px rgba(23,16,14,0.14)'
  ring: '0 0 0 2px #000ce1'

accessibility:
  contrast-text-on-bg: 17.86          # AAA — #17100e on #faf9f6
  contrast-text-on-cream: 16.9        # AAA — #17100e on #f4f3ec
  contrast-white-on-black-cta: 21.0   # AAA — #ffffff on #000000
  contrast-white-on-near-black: 18.8  # AAA — #ffffff on #17100e
  contrast-brand-on-bg: 9.32          # AAA — #000ce1 on #faf9f6 (cobalt is usable as text)
  contrast-white-on-brand: 9.81       # AAA — #ffffff on #000ce1
  focus-ring: '2px solid #000ce1 (--color-focus-outline) — electric-cobalt outline on every interactive, light or dark'
  reduced-motion-honored: true
  keyboard-nav: 'visible cobalt focus outline on every interactive; the snap color doubles as the a11y signal'

dark-mode: optional                  # marketing is cream-light; dark navy/black bands used as inversion devices

lineage:
  summary: 'Intercom''s 2024 rebrand is one of the most decisive moves in B2B SaaS: it walked away from the safe cool-white-and-blue helpdesk look and committed to a warm cream canvas (`#faf9f6` / `#f4f3ec`), a near-black `#17100e` Saans display set large and surprisingly light, and a single electric-cobalt `#000ce1` snap color. The atmosphere is editorial-magazine more than dashboard — cream paper, big confident type, jet-black CTAs — crossed with a vivid multi-accent set (pink / orange / yellow / teal / green) that lets each product carry its own color. The cream-and-black editorial direction shares DNA with the warm-paper wave in modern brand design (Stripe''s warmth, Linear''s confident dark/light discipline, the broadsheet revival in startup marketing), while the electric cobalt and product-color system are pure AI-era Intercom — built to make Fin and the agent platform feel like the future of customer service.'
  influences:
    - name: Stripe
      role: Set the bar for premium, type-led B2B marketing and the warm-gradient / off-white canvas direction Intercom''s cream system extends
      url: https://stripe.com
    - name: Linear
      role: Proved that confident near-black type, disciplined light/dark inversion, and a single snap accent could feel like the future of product software
      url: https://linear.app
    - name: HubSpot
      role: Adjacent customer-platform peer — both abandoned cool B2B white for a warm canvas; HubSpot warms with coral, Intercom with cream + cobalt
      url: https://www.hubspot.com
    - name: Pentagram
      role: The editorial / magazine design tradition behind the big-cream-canvas, large-display, multi-accent rebrand language Intercom adopted in 2024
      url: https://www.pentagram.com
---

## 1. Visual Theme & Atmosphere

Intercom's 2024 rebrand made a bet almost no other customer-service company would make: it threw out the cool helpdesk white and committed to a **warm cream canvas** — `#faf9f6` as the default page ground, `#f4f3ec` (`--color-cream`) as the alternating band color. The page feels like premium uncoated paper, not a software dashboard. On that paper sits a **near-black `#17100e`** (`--color-black`) — a warm black that leans slightly brown, never the clinical `#000` — carrying a large Saans display headline. The combination reads as editorial-magazine confidence rather than enterprise-tool restraint.

The signature typographic move is unusual: the **hero headline runs Saans at 80px but at weight 400**, not the 700 most SaaS brands reach for. A large display set light reads as poised and self-assured — it doesn't need to shout because the size and the cream paper already carry the room. Below it, jet-**black `#000000` CTAs** at 6px radius (and a warm near-black `#17100e` variant at 4px) provide the hard, decisive call to action. The contrast is the whole story: soft warm paper, light confident type, hard black buttons.

Then comes the snap. A single **electric-cobalt `#000ce1`** (`--color-blue`, also the focus-outline color) is the awake color — used for links, focus rings, accent CTAs, and the moments where the brand wants to feel like the future. Around it sits a **vivid multi-accent set**: hot pink `#ff00af`, orange `#ff5600`, acid yellow `#f6f431`, teal `#00edc8`, green `#00da00`. These aren't decoration — they're a system. Each product gets its own color (Fin = orange `#ff5600`, helpdesk = deep cobalt `#0007cb`, operator = violet `#441572`, sales = steel `#055895`, ecom = forest `#2f6a5e`, voice = green `#5de071`), so a Fin page glows orange and a helpdesk page glows cobalt while the cream-and-black spine holds the whole brand together.

The atmosphere is **AI-era support platform, told as a magazine**. Where the old Intercom (and most helpdesk software) said "reliable tool" in cool blue-grey, the new Intercom says "this is where customer service is going" in cream, near-black, and electric cobalt. It is bold, current, and unmistakably confident — the design equivalent of a company that renamed itself "the only helpdesk designed for the AI Agent era" and meant it.

The warm neutral scale deserves note: cream steps down through chalk `#f1eee9`, canvas `#e7e3db`, linen `#dedbd6`, to clay `#d3cec6` — a full paper-tone ramp that means even the "grey" UI surfaces stay warm. Nothing on an Intercom page is a cool grey. That discipline — every neutral warmed — is what keeps the cream canvas from ever feeling like an accident.

**Key Characteristics**

- Warm cream canvas `#faf9f6` / `#f4f3ec` — editorial paper, never cool helpdesk white
- Warm near-black `#17100e` text — leans brown, never clinical pure `#000`
- Saans display at 80px / weight **400** — large but light, poised rather than shouting
- Jet-black `#000000` primary CTAs at 6px (warm near-black `#17100e` variant at 4px)
- Electric-cobalt `#000ce1` snap color — links, focus outline, accent CTAs, the "future" moments
- Vivid multi-accent set: pink `#ff00af` · orange `#ff5600` · yellow `#f6f431` · teal `#00edc8` · green `#00da00`
- Per-product color system — Fin orange, helpdesk cobalt, operator violet, sales steel, ecom forest, voice green
- Fully warmed neutral ramp — chalk → canvas → linen → clay, no cool greys anywhere
- Dark inversion bands in navy `#020917` / dark `#080e1c` for high-impact sections and footer
- Generous editorial whitespace at 96px+ section rhythm — big type needs big air
- Hard-edged CTAs against soft 12–16px card radii — decisive buttons, friendly surfaces

## 2. Color Palette & Roles

### Primary

- **bg** (`#faf9f6`) [→ `--color-off-white`]: the warm off-white canvas — default page ground
- **bg-cream** (`#f4f3ec`) [→ `--color-cream`]: the signature cream band — alternating section ground
- **bg-cream-light** (`#fbfaf7`) [→ `--color-cream-light`]: lightest cream — near-white panel surface
- **surface** (`#ffffff`) [→ `--color-white`]: pure white card surface — lifts off the cream paper
- **text** (`#17100e`) [→ `--color-black`]: warm near-black body — the signature, never pure `#000`
- **text-off-black** (`#111111`) [→ `--color-off-black`]: alternate near-black, slightly cooler
- **on-brand** (`#ffffff`): white on electric-cobalt and black CTAs

### Brand

- **brand** (`#000ce1`) [→ `--color-blue`]: electric cobalt — the snap accent, focus color, "future" signal
- **brand-light** (`#7a7eef`) [→ `--color-blue-light`]: lighter cobalt — tints, hover surfaces
- **brand-lightest** (`#cccef8`) [→ `--color-blue-lightest`]: palest cobalt — selection / highlight wash
- **brand-active** (`#0009a8`): darkened cobalt — pressed accent-CTA state
- **cta-black** (`#000000`): jet-black — primary CTA ground (probed `rgb(0,0,0)`, 6px radius)
- **cta-near-black** (`#17100e`): warm near-black — secondary CTA ground (probed `rgb(17,16,14)`, 4px radius)

### Accent (vivid multi-accent set)

- **accent-pink** (`#ff00af`) [→ `--color-pink`]: hot pink — high-energy illustration / highlight
- **accent-orange** (`#ff5600`) [→ `--color-orange`]: orange — also the Fin AI product color
- **accent-yellow** (`#f6f431`) [→ `--color-yellow`]: acid yellow — energetic accent (needs dark text on top)
- **accent-teal** (`#00edc8`) [→ `--color-teal`]: teal — fresh secondary accent
- **accent-green** (`#00da00`) [→ `--color-green`]: green — positive / live signal
- Each ships a `-light` and `-lightest` tint for backgrounds and washes

### Product Accents

- **product-fin** (`#ff5600`) [→ `--color-fin`]: Fin AI agent = orange
- **product-helpdesk** (`#0007cb`) [→ `--color-helpdesk`]: helpdesk = deep cobalt
- **product-operator** (`#441572`) [→ `--color-operator`]: operator = violet
- **product-sales** (`#055895`) [→ `--color-sales`]: sales = steel blue (accent `#a3b3ff`)
- **product-ecom** (`#2f6a5e`) [→ `--color-ecom`]: ecom = forest (accent `#e2f947`)
- **product-voice** (`#5de071`) [→ `--color-voice-accent`]: voice = green (deeper `#37b54a`)

The per-product color system is the brand's load-bearing idea — it lets each surface own a color while the cream-and-cobalt spine keeps everything recognizably Intercom.

### Interactive

- **link**: `#000ce1` cobalt — underline on hover, never at rest in body
- **link-hover**: `#0009a8` darkened cobalt
- **selected**: `#cccef8` palest-cobalt wash
- **disabled**: `#9a938c` text on `#f1eee9` chalk
- **focus-outline**: `#000ce1` (`--color-focus-outline`) — the cobalt does double duty as the a11y ring

### Neutral Scale (all warm)

- **text** `#17100e` — warm near-black body (the signature)
- **text-muted** `#4a443f` — warm grey caption (≈70% black on cream)
- **text-soft** `#6b645e` — tertiary warm grey
- **text-faint** `#9a938c` — disabled / placeholder
- **bg-chalk** `#f1eee9` [→ `--color-chalk`] — soft tonal step down
- **bg-canvas** `#e7e3db` [→ `--color-canvas`] — deeper warm panel
- **bg-linen** `#dedbd6` [→ `--color-linen`] — divider / hover ground
- **bg-clay** `#d3cec6` [→ `--color-clay`] — deepest warm neutral surface

Every neutral is warmed — there is no cool grey anywhere in the system. This is the discipline that keeps the cream canvas reading as intentional.

### Surface & Borders

- **surface** `#ffffff` — primary card surface
- **surface-cream** `#f4f3ec` — cream callout tile
- **border** `#17100e1a` [→ `--color-border-nav-light`] — warm near-black at 10%, default hairline
- **border-soft** `#17100e0d` — warm near-black at 5%, faintest divider
- **border-strong** `#17100e` — full near-black for emphasis / focus on light
- **border-on-dark** `#ffffff33` [→ `--color-border-nav-dark`] — white at 20% on dark bands

### Shadow Colors

Intercom's depth is **soft, warm-near-black shadows** — `rgba(23,16,14, ...)` rather than `rgba(0,0,0, ...)`. The warm tint keeps shadows consistent with the `#17100e` text color and the cream paper rather than reading as a cold grey drop. Shadows are used sparingly; the brand prefers a 1px warm hairline plus the warm paper-tone ramp to separate surfaces.

### Dark Bands

- **bg-navy** `#020917` [→ `--color-navy`] — near-black navy inversion band
- **bg-dark** `#080e1c` [→ `--color-dark`] — deepest dark surface / footer
- **nav-dark** `#17100ecc` (`--color-nav-dark`) — warm near-black at 80% for sticky-nav scrim

### Semantic

- **success** `#1bb157` on `#d7efdc` (dark `#128a40`) — clear green
- **warning** `#fbc916` on `#feedaf` (dark `#6f5502`) — amber
- **danger** `#fd3a57` on `#fed9db` (dark `#b41d34`) — warm coral-red

## 3. Typography Rules

### Font Family

- **Display**: **Saans** (proprietary geometric-humanist sans, via the Intercom CDN) with `system-ui` / `-apple-system` fallback. Saans carries the headline voice — clean, slightly condensed, confident at large sizes. The rebrand sets it large and light (80px / weight 400 at the hero), which is the brand's most distinctive type decision.
- **Body**: `ui-sans-serif` system stack — the platform's native UI sans. Body never tries to be a "designed" face; it stays neutral and legible so Saans owns all the personality.
- **Mono**: `ui-monospace` / SF Mono / Menlo — code, API snippets, version strings.
- **OpenType**: `kern, liga, ss01` on display; `kern, liga, tnum` on body for tabular numerals in pricing and data tables.

### Hierarchy

| Role | Font | Size | Weight | Line H | Tracking | OT | Notes |
|---|---|---|---|---|---|---|---|
| display-hero | Saans | 80 | 400 | 1.0 | -0.03em | ss01 | Above-fold hero (probed live) |
| display-lg | Saans | 56 | 500 | 1.05 | -0.02em | — | Major section opener |
| h1 | Saans | 54 | 400 | 1.08 | -0.02em | — | Page / band heading (probed h2 = 54/400) |
| h2 | Saans | 40 | 500 | 1.15 | -0.015em | — | Feature header |
| h3 | Saans | 32 | 600 | 1.2 | -0.012em | — | Card / subsection title |
| h4 | Saans | 24 | 600 | 1.25 | -0.005em | — | Inline title |
| h5 | Saans | 20 | 600 | 1.3 | 0 | — | Component label |
| lead | ui-sans | 22 | 400 | 1.45 | -0.005em | — | Hero subhead |
| body-lg | ui-sans | 18 | 400 | 1.55 | 0 | — | Prose, blog body |
| body | ui-sans | 16 | 400 | 1.55 | 0 | — | Default body |
| body-sm | ui-sans | 14 | 400 | 1.5 | 0 | — | Captions, meta |
| label | ui-sans | 13 | 500 | 1.4 | 0 | — | Form + button labels |
| caption | ui-sans | 12 | 500 | 1.4 | 0.02em | — | Meta below cards |
| eyebrow | ui-sans | 12 | 600 | 1.4 | 0.08em | — | Section tags, ALL CAPS |
| code | ui-mono | 14 | 400 | 1.6 | 0 | tnum | Inline code / API |
| code-micro | ui-mono | 12 | 400 | 1.5 | 0 | tnum | Version strings, cells |

### Principles

- **Saans large and light is the signature** — the 80px / weight 400 hero is the single most recognizable type decision; resist the reflex to bump it to 700
- **Display weight rises as size falls** — hero 400, section 500, card titles 600; the smaller the head, the heavier it sets to hold its own
- **Negative tracking on display only** — body sits at 0; headlines read tight and poised
- **Warm near-black `#17100e`, never pure `#000`** — pure black on cream reads cold and breaks the paper warmth
- **Saans owns personality, body stays neutral** — the system body font is deliberately plain so the display does all the brand work
- **Eyebrow at 12px / 0.08em / weight 600 ALL CAPS** — modest tracking, used as section markers
- **Mono only for code and API** — never for labels or eyebrows; keeps the developer surfaces honest
- **No italic display** — italics reserved for body emphasis and quote attribution

## 4. Component Stylings

### Buttons

**Primary CTA (jet-black)** — the signature decisive button
- bg `#000000`, text `#ffffff`, radius `6px`
- padding `10px 16px`, Saans 500 / 16px
- hover: bg softens to warm near-black `#17100e` at 80% opacity (probe: `oklab(0% none none /.8)`), 240ms ease-standard
- focus: `2px solid #000ce1` cobalt outline
- use: every primary action — "Start free trial", "Get a demo"

**Near-Black CTA (warm, tighter radius)**
- bg `#17100e`, text `#ffffff`, radius `4px`
- padding `10px 16px`, Saans 500 / 16px
- active: cobalt-tinted dark (probe: `oklab(38.38% -.027 -.260 /.85)`)
- use: nav CTA and secondary surfaces — warm near-black variant at the tighter 4px radius

**Brand CTA (electric cobalt)**
- bg `#000ce1`, text `#ffffff`, radius `6px`
- padding `10px 16px`, Saans 500 / 16px
- hover: bg `#0009a8` darkened cobalt
- use: when the snap color needs to lead — accent CTAs, AI / Fin moments

**Ghost / Secondary Button**
- bg `transparent`, text `#17100e`, border `1px solid #17100e1a`, radius `6px`
- padding `10px 16px`, Saans 500 / 16px
- hover: bg `rgba(23,16,14,0.08)` warm wash (probe: `oklab(0% /.08)`); active `rgba(23,16,14,0.12)`
- use: secondary action — "Learn more", "View pricing", "Talk to sales"

### Cards

**Card Default**
- bg `#ffffff`, radius `12px`, padding `24px`
- border `1px solid #17100e1a`, shadow `0 1px 2px rgba(23,16,14,0.04)`
- hover: shadow `0 8px 24px rgba(23,16,14,0.10)` + translate-y -2px, 240ms ease-standard
- use: feature cards, content tiles on the cream canvas

**Card Cream Callout**
- bg `#f4f3ec`, radius `12px`, padding `24px`, no border, no shadow
- use: callout / methodology tiles that sit a tone down from white on the cream band

**Card Product (the signature)**
- bg `#ffffff`, radius `16px`, padding `32px`, 1px warm hairline border
- per-product color bar / icon: Fin orange `#ff5600`, helpdesk cobalt `#0007cb`, operator violet `#441572`, sales steel `#055895`, ecom forest `#2f6a5e`, voice green `#5de071`
- title Saans 600 / 24px in near-black, 16px body, accent-colored "Learn more →"
- use: the Fin / Helpdesk / Inbox / Voice product cards — the core visual unit

**Card Testimonial**
- bg `#ffffff` or `#f4f3ec`, radius `16px`, padding `32px`
- 24px Saans 400 quote in near-black, customer avatar 48×48 round + name + company logo in warm grey
- use: customer-story tiles

### Badges & Tags

**Badge (pill)**
- bg `#f4f3ec` cream, text `#17100e`, radius `9999px`
- padding `4px 12px`, Saans 600 / 12px
- use: "New", "Beta", category chips

**Badge Accent**
- bg = accent at `-lightest` tint (e.g. `#ffdccc` orange, `#cccef8` cobalt), text = accent full
- radius `9999px`, padding `4px 12px`, Saans 600 / 12px
- use: product / status tags color-matched to the surface

**Eyebrow Tag**
- bg `transparent`, text `#4a443f` warm grey, no radius
- Saans 600 12px / 0.08em ALL CAPS
- use: section markers ("AI AGENT", "HELPDESK")

### Inputs & Forms

**Text Input**
- bg `#ffffff`, border `1px solid #17100e1a`, radius `8px`
- padding `8px 12px`, ui-sans 400 / 16px
- focus: border `#17100e` + `2px solid #000ce1` cobalt outline, 150ms ease-standard
- placeholder: `#9a938c`
- label: 13px / 500 above input in `#17100e`

**Inline Trial / Email Capture**
- horizontal: white input + jet-black submit button, matched heights
- input 8px radius, button 6px radius
- placeholder: "you@company.com"
- use: footer pre-CTA, demo request inline

**Select / Dropdown**
- same chrome as text input, chevron near-black
- menu: white card with `0 8px 24px rgba(23,16,14,0.10)`, options with cream `#f4f3ec` hover

### Navigation

**Top Nav**
- bg `#faf9f6` canvas (or `#fffc` translucent on scroll — `--color-nav-light`), height `64px`, 24px gutters
- Intercom wordmark left, link cluster center (Products / Pricing / Customers / Resources), jet-black "Start free trial" CTA right
- 1px `#17100e1a` bottom border on scroll
- mega-dropdown: white tray (`--color-nav-tray-light` `#f3f3f3`) with per-product color icons
- dark-mode nav variant: `#17100ecc` scrim with `#ffffff33` border

**Footer**
- bg `#080e1c` deepest dark (or `#020917` navy), padding `96px 24px 48px`
- multi-column link grid in ui-sans 14px, `#cbc7bf` link color, `#faf9f6` headers
- pre-footer cream `#f4f3ec` CTA band with jet-black CTA
- wordmark + copyright row at bottom

### Tabs / Tooltips / Toasts

**Tab Group**
- underline-style: 2px near-black `#17100e` on active, 1px `#17100e1a` on rest
- text near-black active (weight 600), `#6b645e` rest

**Tooltip**
- bg `#17100e` near-black, text `#faf9f6`, radius `6px`, padding `8px 12px`, ui-sans 500 / 13px

**Toast**
- bg `#ffffff`, border-left `4px solid #000ce1` (or success / warning / danger per state)
- radius `8px`, padding `16px`, shadow `0 8px 24px rgba(23,16,14,0.10)`, ui-sans 500 / 14px

## 5. Layout Principles

### Spacing System

- **base** `4px`, scale `[0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128]`
- Density philosophy: **editorial-generous**. The big Saans display needs big air — section vertical rhythm runs 96–128px. This is closer to a magazine spread than a content-dense dashboard; the cream paper and large type want room to breathe.

### Grid & Container

- **page-width** `1280px` with 24px gutters
- 12-column grid; hero copy often sits left-aligned at ~60% width with art / product UI on the right
- **prose-width** `720px` — blog, docs, changelog
- Product card grid: 3-up at desktop, 2-up at tablet, 1-up at mobile

### Whitespace Philosophy

Intercom's whitespace is **editorial-confident**. The 80px hero gets generous air above and below; product cards sit on 24–32px gaps; sections separate at 96–128px. The cream `#faf9f6` canvas does real work — pure-white card surfaces lift gently off the warm paper without needing heavy shadow, and the warm neutral ramp (chalk → canvas → linen → clay) provides tonal separation where white-on-cream alone isn't enough.

### Section Cadence

The page reads as alternating warm tonal bands plus rare dark inversion:
1. Cream `#faf9f6` hero with 80px Saans display + jet-black CTA
2. White / cream feature row with per-product color cards
3. Cream `#f4f3ec` band with a Fin / AI agent showcase (orange accent)
4. White comparison / metrics row
5. Dark navy `#020917` high-impact band (testimonial wall or AI demo)
6. Cream `#f4f3ec` pre-footer CTA band with jet-black CTA
7. Dark `#080e1c` footer

The warm bands carry the brand; the dark inversion bands provide the dramatic punctuation. Cobalt and the per-product accents thread through every band as the snap color.

## 6. Shapes & Radius Scale

| Tier | Value | Use |
|---|---|---|
| Micro | 2px | Tags, micro-pills, inline chips |
| Standard | 4px | Near-black nav CTA, tight controls |
| Comfortable | 6px | Primary / brand CTAs — the decisive button radius |
| Relaxed | 8px | Inputs, selects, small surfaces |
| Large | 12px | Default cards, callout tiles |
| Featured | 16px | Product cards, testimonial cards |
| XL | 24px | Hero illustration frames, large promo blocks |
| Pill | 9999px | Badges, status chips, avatars |

Intercom's radius system runs a deliberate split: **hard-ish CTAs (4–6px) against softer surfaces (12–16px)**. The buttons stay decisive and modern; the cards stay friendly. This is the opposite of a single uniform radius — the contrast between the hard black button and the soft white card is part of the brand's confidence. Compare to HubSpot (uniformly soft 6–12px) or Linear (tight 8–14px editorial) — Intercom keeps its CTAs sharper than its cards on purpose.

Because shadows are used sparingly, separation comes from the 1px warm hairline (`#17100e1a`) plus the warm paper-tone ramp. On the cream canvas a white card with a hairline reads as lifted without any drop shadow at all.

## 7. Depth & Elevation

| Level | Treatment | Use |
|---|---|---|
| 0 | Flat — no border, no shadow | Display copy on cream canvas |
| 1 | 1px `#17100e1a` hairline + `0 1px 2px rgba(23,16,14,0.04)` | Inputs, small UI |
| 2 | 1px hairline + `0 2px 8px rgba(23,16,14,0.06)` | Default cards, content tiles |
| 3 | 1px hairline + `0 8px 24px rgba(23,16,14,0.10)` | Product cards, card hover, dropdowns |
| 4 | `0 16px 48px rgba(23,16,14,0.14)` | Modals, mega-menu trays |
| 5 | Inverted band `#020917` / `#080e1c` | Dark testimonial / AI demo walls, footer |

### Shadow Philosophy

Intercom's depth is **warm-tinted and restrained**. Shadow color is `rgba(23,16,14, ...)` — the near-black text color — not `rgba(0,0,0, ...)`, so depth stays consistent with the warm paper rather than reading as a cold grey drop. The system leans on the **warm paper-tone ramp** (cream → chalk → canvas → linen → clay) and the 1px hairline for most separation; true drop shadows appear mainly on hover, dropdowns, and modals.

Hover states lift cards `translate-y(-2px)` with a shadow upgrade — fast (240ms) and subtle. Dark inversion bands (navy `#020917`, dark `#080e1c`) provide composition contrast without elevation effects; the band itself does the rhetorical lifting, the way a full-bleed photo spread does in a magazine.

## 8. Interaction & Motion

### Easing Curves

- **ease-standard** `cubic-bezier(0.4, 0, 0.2, 1)` — most state changes
- **ease-emphasized** `cubic-bezier(0.2, 0, 0, 1)` — modal entry, mega-menu reveal
- **ease-soft** `cubic-bezier(0.45, 0, 0.55, 1)` — looping product / agent animations

### Duration Buckets

- **fast** `150ms` — input focus, link state, button color change
- **standard** `240ms` — card hover lift, dropdown reveal
- **slow** `320ms` — modal entry, accordion expand, section reveal

### Per-Component Recipes

- **Primary CTA hover**: bg `#000000` → warm near-black `#17100e` at 80% opacity, 240ms ease-standard
- **Ghost button hover**: bg fills to `rgba(23,16,14,0.08)` warm wash, 150ms
- **Brand CTA hover**: bg `#000ce1` → `#0009a8` darkened cobalt, 150ms
- **Product card hover**: shadow upgrade + translate-y -2px + accent "Learn more →" arrow shifts right 4px, 240ms
- **Link hover**: cobalt underline fades in over 150ms, no thickness change
- **Tab switch**: 2px near-black underline slides to new tab, 240ms ease-emphasized
- **Mega-menu reveal**: opacity + translate-y 8px, 240ms ease-emphasized
- **Fin / AI agent demo**: looping conversational animation, ease-soft, frozen under reduced motion

### Page Transitions

- Section reveals on scroll: fade-up 12px, 320ms ease-emphasized
- Hero on first paint: fade + translate-y 16px, one-time
- Sticky nav: translucent scrim (`#fffc` light / `#17100ecc` dark) + 1px border appear on scroll, 240ms

### Reduced Motion Strategy

Intercom respects `prefers-reduced-motion: reduce`:
- Looping product / AI-agent animations: freeze to a static frame
- Card hover lift: removed (becomes color / shadow-only)
- Scroll-triggered reveals: opacity-only fade
- Button hover translate: dropped (becomes color-only)
- Modal entry: opacity-only, no translate

## 9. Accessibility & A11y

### Contrast Pairs

- text `#17100e` on bg `#faf9f6`: **17.86** — AAA all sizes
- text `#17100e` on cream `#f4f3ec`: **16.9** — AAA all sizes
- white `#ffffff` on black CTA `#000000`: **21.0** — AAA (maximum)
- white `#ffffff` on near-black CTA `#17100e`: **18.8** — AAA
- brand cobalt `#000ce1` on bg `#faf9f6`: **9.32** — AAA — cobalt is strong enough for body links and text
- white `#ffffff` on brand cobalt `#000ce1`: **9.81** — AAA — cobalt CTAs are safe at any size
- text `#17100e` on yellow `#f6f431`: **16.03** — AAA — yellow always takes dark text, never white
- text-muted `#4a443f` on bg `#faf9f6`: **9.11** — AAA
- pink `#ff00af` on bg `#faf9f6`: **3.4** — AA large only — pink is for large UI / illustration, not body text
- orange `#ff5600` on bg `#faf9f6`: **3.03** — AA large only — orange (Fin) for backgrounds + large elements
- yellow `#f6f431` on bg `#faf9f6`: **1.11** — fails — yellow is a background color only; never yellow text on cream

### Focus Indicators

- `2px solid #000ce1` electric-cobalt outline (`--color-focus-outline`) on every interactive — the snap color doubles as the a11y signal
- Visible on light and dark surfaces; cobalt clears AAA contrast on both cream (9.32) and most dark bands
- Never `outline: none` without replacement

### ARIA Patterns

- Mega-dropdown nav: `role="menu"` + `aria-haspopup="menu"` + `aria-expanded`
- Modal: `role="dialog"` + `aria-modal="true"` + focus trap
- Trial / email-capture form: `<form>` with `aria-label="Start your free trial"`
- Fin / AI-agent demo: `aria-label` describing the conversation if interactive; `aria-hidden="true"` if purely decorative
- Product cards: `<a>` wrapping with `aria-label="Fin AI Agent — resolve support automatically"`

### Keyboard Nav

- Tab order matches DOM source
- ENTER / SPACE activate buttons and cards
- ARROW navigates within mega-menus, tab groups, listboxes
- ESC closes modals, dropdowns, mega-menus

### Screen Reader Hints

- Intercom wordmark SVG: `<title>Intercom</title>`
- Decorative multi-accent illustration: `aria-hidden="true"`
- Eyebrow labels: semantic `<span>` with CSS `text-transform: uppercase` (not all-caps in source — preserves pronunciation)
- Pull-quote rendered as `<blockquote>` with `cite` when applicable

### Reduced Motion

- Honored across the site
- Looping agent / product animations and card hover lift: disabled
- Scroll-triggered reveals: opacity-only
- Hover state changes preserve color, drop motion

## 10. Responsive Behavior

### Breakpoints

| Tier | Min-width | Use |
|---|---|---|
| mobile | 0–639px | Single-column, stacked product cards |
| tablet | 640–1023px | 2-column feature grid |
| desktop | 1024–1279px | Full 12-column with 3-up product grid |
| wide | 1280px+ | Container caps at 1280, generous gutters |

### Touch Targets

Minimum 44×44px on mobile. Primary CTA scales padding from `10px 16px` (desktop) to `14px 20px` (mobile) for a 48px+ tap area — the jet-black button stays decisive at touch sizes. Inputs grow to 48px height on mobile.

### Collapsing Strategy

- **Hero display**: 80px → 56px → 44px → 36px down the cascade — Saans scales aggressively
- **Product card grid**: 3-col → 2-col → 1-col
- **Top nav**: full mega-dropdown → hamburger drawer at <1024px (drawer keeps the jet-black CTA pinned)
- **Section vertical rhythm**: 128px → 96px → 64px
- **Dark inversion bands**: preserved on mobile — they are brand-load-bearing, not decoration

### Image Behavior

- Illustrations: SVG-based with the multi-accent palette; scale infinitely
- Product UI mockups: aspect-ratio 16:10, `object-fit: contain`, lazy-loaded
- Avatars: 48×48 circular for testimonial cards, 32×32 for bylines
- Customer logos: monochrome warm-grey, height-locked at 28–36px in social-proof rows

### Container Queries

Product cards use container queries — when a card narrows below 280px, the per-product icon shifts from top-left to inline with the title and the body copy truncates to 2 lines.

## 11. Content & Voice

### Tone

**Confident, modern, AI-forward — the future of customer service, said plainly.** Intercom talks to support leaders, founders, and CX teams who want AI to actually resolve tickets, not just deflect them. The voice is direct and bold ("the only helpdesk designed for the AI Agent era"), never hedged or enterprise-cautious. Fin — the AI agent — is the protagonist of most copy; the brand sells outcomes ("resolve issues instantly") over features.

### Microcopy Patterns

- **Button verbs**: "Start free trial", "Get a demo", "Talk to sales", "See Fin in action"
- **Empty states**: "No conversations yet — Fin is ready when your customers are."
- **Errors**: "Something went wrong. Try again in a moment." (Plain, non-blaming.)
- **Success**: "Done." / "Sent." (Past tense, confident.)
- **Loading**: "Resolving…" (Verb in progress — on-brand for an AI support tool.)
- **Confirmations**: "You're all set." (Brief, warm.)

### CTA Verb Conventions

The dominant primary CTA is **"Start free trial"** across hero, pricing, and footer; **"Get a demo"** for higher-touch paths; **"Talk to sales"** for enterprise. Product surfaces use **"See Fin in action"**, **"Explore the helpdesk"**, **"Watch the demo"**. The jet-black button + "Start free trial" pairing is the most-repeated unit on the site.

### Empty States

Empty states stay on-brand for an AI product — they frame the agent as ready and waiting rather than apologizing for the blank screen ("Fin is ready when your customers are"). They teach the next action without enterprise stiffness.

## 12. Dark Mode & Theming

Intercom's marketing site is **cream-light by default** — there is no global dark toggle. But dark is a first-class *band* device: navy `#020917` (`--color-navy`) and dark `#080e1c` (`--color-dark`) provide high-impact inversion for testimonial walls, AI demos, and the footer, and the nav ships a dark scrim variant (`#17100ecc` with `#ffffff33` border). The token swap inside any dark band:

```yaml
colors-inverted:
  bg: '#080e1c'                 # deepest dark
  surface: '#020917'            # navy card surface
  text: '#faf9f6'               # cream-white, preserves the warmth
  text-muted: '#cbc7bf'         # warm muted on dark
  brand: '#7a7eef'              # brand-light cobalt — the full #000ce1 is too dark on near-black
  border: '#ffffff33'           # white at 20%
  on-brand: '#020917'
```

On dark bands the full electric-cobalt `#000ce1` is too dark to read against near-black, so the inversion uses **brand-light `#7a7eef`** for accents and links while keeping the cream-white text. A full dark *marketing canvas* would lose the editorial-paper warmth that is the whole point of the 2024 rebrand — so dark stays a punctuation device, never the default.

## 13. Lineage & Influences

Intercom's 2024 rebrand is one of the most decisive design moves in recent B2B SaaS. The old Intercom — and nearly every helpdesk product — lived in cool white and helpful blue-grey, the safe "reliable tool" register. The new Intercom walked away from all of it: a **warm cream canvas** (`#faf9f6` / `#f4f3ec`), a **warm near-black `#17100e` Saans display** set large and surprisingly light, **jet-black CTAs**, and a single **electric-cobalt `#000ce1`** snap color. The result reads as editorial-magazine more than dashboard — premium paper, big confident type, hard decisive buttons — and it was built specifically to make the AI agent (Fin) and the platform feel like the future of customer service rather than another support inbox.

The warm-paper canvas places Intercom inside the modern brand-design wave that abandoned cool B2B white: **Stripe** set the bar for premium, type-led marketing on warm off-white grounds, and the broadsheet / editorial revival in startup branding (the **Pentagram** magazine tradition) supplied the big-canvas, large-display, multi-accent language. **Linear** proved that confident near-black type, disciplined light/dark inversion, and a single snap accent could make product software feel like the future — a discipline Intercom's cobalt-and-cream system clearly studied. And **HubSpot** is the closest customer-platform peer: both abandoned cool helpdesk white for a warm canvas, but where HubSpot warms with coral, Intercom warms with cream plus an electric-cobalt edge.

What's purely Intercom is the **per-product color system** — Fin orange, helpdesk cobalt, operator violet, sales steel, ecom forest, voice green — layered on top of a fully warmed neutral ramp (cream → chalk → canvas → linen → clay). That combination lets each surface own a color while the cream-and-cobalt spine keeps the whole brand recognizable, and it is the part of the system that reads most distinctly as "AI-era support platform" rather than "another SaaS that warmed up its palette."

**Named Influences**

- **Stripe** ([stripe.com](https://stripe.com)) — Set the bar for premium type-led B2B marketing and the warm off-white canvas direction Intercom's cream system extends
- **Linear** ([linear.app](https://linear.app)) — Proved confident near-black type, light/dark discipline, and a single snap accent could feel like the future of product software
- **HubSpot** ([hubspot.com](https://www.hubspot.com)) — Adjacent customer-platform peer; both abandoned cool B2B white for a warm canvas (coral vs. cream + cobalt)
- **Pentagram** ([pentagram.com](https://www.pentagram.com)) — The editorial / magazine design tradition behind the big-cream-canvas, large-display, multi-accent rebrand language

## 14. Do's and Don'ts

### Do

- Hold the canvas at cream `#faf9f6` / `#f4f3ec` — the warm paper is the entire 2024 rebrand
- Set body and display text in warm near-black `#17100e`, never pure `#000` — cold black breaks the paper warmth
- Keep the hero Saans large and light (80px / weight 400) — the poised lightness is the signature, not a bug
- Reserve electric-cobalt `#000ce1` as the snap color — links, focus rings, accent CTAs, the "future" moments
- Use jet-black `#000000` (6px) or warm near-black `#17100e` (4px) for primary CTAs — decisive, hard-edged
- Apply the per-product color system — Fin orange, helpdesk cobalt, operator violet, sales steel, ecom forest, voice green
- Keep every neutral warm — chalk → canvas → linen → clay; no cool greys anywhere
- Pair hard CTAs (4–6px) with soft cards (12–16px) — the radius contrast is intentional confidence
- Put dark text on yellow `#f6f431` and orange — these accents fail with white on top
- Use the `2px solid #000ce1` cobalt focus outline everywhere — it doubles as the a11y signal
- Lean on the warm paper ramp + 1px hairline for separation before reaching for shadows
- Use dark navy `#020917` / `#080e1c` bands as dramatic punctuation, not as the default ground

### Don't

- Substitute cool helpdesk white `#ffffff` for the cream canvas — that's the old Intercom the rebrand left behind
- Apply pure `#000` to body text; warm near-black `#17100e` is the protected pair
- Bump the hero to weight 700 "to make it pop" — the large-and-light Saans is the brand voice
- Use electric-cobalt as a full background band — it's a snap accent, not a canvas
- Put white text on yellow or orange accents — both fail contrast; yellow especially needs dark text
- Use cobalt `#000ce1` for body text on dark bands — swap to brand-light `#7a7eef` on near-black
- Give every element the same radius — the hard-CTA / soft-card split is part of the system
- Reach for cool grey neutrals — every neutral in the system is warmed
- Flatten the per-product colors into one accent; the color-per-product system is brand-load-bearing
- Drop the dark inversion bands on mobile — they carry the dramatic rhythm, not decoration
- Use heavy drop shadows for default separation — Intercom prefers the warm ramp + hairline
- Default the marketing canvas to dark mode — it loses the editorial-paper warmth entirely

## 15. Agent Prompt Guide

### Quick Color Reference

```
bg:             #faf9f6 (warm off-white canvas)
bg-cream:       #f4f3ec (signature cream band)
surface:        #ffffff (white card surface)
text:           #17100e (warm near-black — never pure #000)
text-muted:     #4a443f (warm grey caption)
brand:          #000ce1 (electric cobalt — the snap color + focus ring)
cta-black:      #000000 (jet-black primary CTA, 6px radius)
cta-near-black: #17100e (warm near-black CTA, 4px radius)
accent-pink:    #ff00af | accent-orange: #ff5600 (Fin)
accent-yellow:  #f6f431 (dark text only) | accent-teal: #00edc8
border:         #17100e1a (warm near-black at 10% — hairline)
```

### Example Component Prompts

1. *"Create an Intercom-style editorial hero: warm cream `#faf9f6` background, Saans 80px at weight 400 (large but light) near-black `#17100e` headline reading 'The only helpdesk built for the AI agent era.' tracked at -0.03em, ui-sans 22px lead subhead in warm grey below, jet-black `#000000` CTA with white Saans 500 16px label 'Start free trial' at 6px radius. Generous 120px vertical air."*

2. *"Design an Intercom product card: white bg, 16px radius, 1px `#17100e1a` warm hairline, 32px padding. Top-left a Fin orange `#ff5600` icon, Saans 600 24px near-black title, ui-sans 16px body, orange 'Learn more →' link at bottom. Card lifts on hover with translate-y -2px + `0 8px 24px rgba(23,16,14,0.10)` warm shadow."*

3. *"Build an Intercom dark inversion band: deepest dark `#080e1c` full-bleed background, cream-white `#faf9f6` Saans 40px headline, warm-muted `#cbc7bf` body, brand-light cobalt `#7a7eef` accent link (not the full #000ce1 — too dark on near-black), white-at-20% `#ffffff33` borders. Use for an AI-demo or testimonial wall."*

4. *"Compose an Intercom cream callout band: cream `#f4f3ec` background, 96px vertical padding, near-black `#17100e` Saans 500 40px headline, ui-sans 18px body, jet-black CTA 'Get a demo'. Eyebrow above in ui-sans 600 12px / 0.08em ALL CAPS warm grey reading 'AI AGENT'."*

5. *"Create an Intercom inline trial capture: horizontal layout, white input on left with 1px `#17100e1a` warm hairline at 8px radius, jet-black `#000000` submit button on right at 6px radius saying 'Start free trial', placeholder 'you@company.com' in `#9a938c`. Focus: input border goes near-black with a 2px `#000ce1` cobalt outline."*

6. *"Design an Intercom ghost / secondary button: transparent bg, near-black `#17100e` text, 1px `#17100e1a` border, 6px radius, Saans 500 16px label 'View pricing', 10px×16px padding. Hover fills to warm wash `rgba(23,16,14,0.08)`."*

### Iteration Guide

1. **Warm the canvas first.** If the background is cool white `#ffffff`, swap to cream `#faf9f6`. The warm paper is the single most important move — without it the design reverts to old-Intercom helpdesk white.

2. **Warm the black.** If text or CTAs use pure `#000`, swap to `#17100e`. Pure black on cream reads cold and breaks the paper warmth.

3. **Lighten the hero, don't heavy it.** If the headline is rendering at weight 700, drop to 400–500 at large size. The poised large-and-light Saans is the brand voice; heavy reads generic.

4. **Add the cobalt snap.** If the page is all cream + black with no accent, introduce electric-cobalt `#000ce1` on links, the focus ring, or one accent CTA. The snap color is what makes it feel current.

5. **Color the products.** If product cards all share one accent, apply the per-product system — Fin orange, helpdesk cobalt, operator violet, sales steel, ecom forest, voice green.

6. **Split the radii.** If everything shares one radius, sharpen the CTAs to 4–6px and soften the cards to 12–16px. The hard-button / soft-card contrast is intentional.

7. **Warm the neutrals.** If any grey reads cool, walk it onto the warm ramp (chalk `#f1eee9` → canvas `#e7e3db` → linen `#dedbd6` → clay `#d3cec6`).

8. **Add a dark punctuation band.** If the page is uniformly light, drop in one navy `#020917` / dark `#080e1c` inversion band for an AI demo or testimonial wall — and remember to switch accents to brand-light `#7a7eef` there.

---

*Theme-toggle audit: score=0, signals=[none]*
